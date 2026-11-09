/*! DENKIRS header 3.9.0 · https://github.com/Denkirs-it/denkirs-si · header/dkh-3.9.0.js — menu, mobile menu, product search, SEO module */
(function(){
if(window.DKHDR)return;
var DKHDR=window.DKHDR={version:'3.9.0',ok:true};
try{
(function(){
  var root=document.getElementById('dkh');
  if(!root)return;

  function langFromPath(){
    var m=location.pathname.match(/^\/(en|hu|de|it)(\/|$)/);
    return m?m[1]:'sl';
  }
  function prefix(){
    var l=langFromPath();
    return l==='sl'?'':'/'+l;
  }
  function curLang(){return langFromPath()}
  function markLangLabel(){
    var m=location.pathname.match(/^\/(en|hu|de|it)(\/|$)/);
    var l=(m?m[1]:'sl').toUpperCase();
    var t=document.getElementById('dkh-lang-trigger');
    if(t&&t.firstChild)t.firstChild.nodeValue=l+' ';
  }

  var tick=false;
  function onScroll(){
    if(tick)return;tick=true;
    requestAnimationFrame(function(){
      root.classList.toggle('scrolled',window.pageYOffset>60);tick=false;
    });
  }
  window.addEventListener('scroll',onScroll,{passive:true});

  var closeTimer=null;
  root.querySelectorAll('[data-dd]').forEach(function(item){
    item.addEventListener('mouseenter',function(){
      clearTimeout(closeTimer);
      root.querySelectorAll('[data-dd]').forEach(function(o){if(o!==item)o.classList.remove('open')});
      item.classList.add('open');
    });
    item.addEventListener('mouseleave',function(){
      closeTimer=setTimeout(function(){item.classList.remove('open')},160);
    });
    var trigger=item.querySelector('.dkh-link');
    if(trigger)trigger.addEventListener('focus',function(){item.classList.add('open')});
  });
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape')root.querySelectorAll('[data-dd]').forEach(function(o){o.classList.remove('open')});
  });

  var burger=document.getElementById('dkh-burger');
  if(burger)burger.addEventListener('click',function(){
    var open=root.classList.toggle('mob-open');
    document.body.style.overflow=open?'hidden':'';
  });
  var mobProd=document.getElementById('dkh-mob-prod'),mobSub=document.getElementById('dkh-mob-sub');
  if(mobProd&&mobSub)mobProd.addEventListener('click',function(){mobSub.classList.toggle('open')});
  root.querySelectorAll('.dkh-mob a').forEach(function(a){
    a.addEventListener('click',function(){root.classList.remove('mob-open');document.body.style.overflow=''});
  });

  var products=null,loading=false;
  function parseLine(t){var r=[],c='',q=false;for(var i=0;i<t.length;i++){var ch=t[i];
    if(q){if(ch==='"'){if(i+1<t.length&&t[i+1]==='"'){c+='"';i++}else q=false}else c+=ch}
    else{if(ch==='"')q=true;else if(ch===','){r.push(c.trim());c=''}else c+=ch}}r.push(c.trim());return r}
  function parseCSV(t){var L=t.split(/\r?\n/).filter(function(l){return l.trim()!==''});
    if(L.length<2)return[];var h=parseLine(L[0]),rows=[];
    for(var i=1;i<L.length;i++){var v=parseLine(L[i]),o={};
      for(var j=0;j<h.length;j++)o[h[j]]=v[j]||'';rows.push(o)}return rows}
  function fixImg(u,s){if(!u)return'';u=u.trim();s=s||160;
    if(u.indexOf('static.tildacdn.com')!==-1){
      if(u.indexOf('/-/resize/')!==-1)return u;
      var ix=u.lastIndexOf('/');
      return ix>0 ? u.slice(0,ix)+'/-/resize/'+s+'x'+u.slice(ix) : u;
    }
    if(u.indexOf('lh3.googleusercontent.com')!==-1)return u.replace(/=w\d+$/,'')+'=w'+s;
    var m=u.match(/\/d\/([a-zA-Z0-9_-]+)/);if(m)return'https://lh3.googleusercontent.com/d/'+m[1]+'=w'+s;
    m=u.match(/[?&]id=([a-zA-Z0-9_-]+)/);if(m)return'https://lh3.googleusercontent.com/d/'+m[1]+'=w'+s;return u}
  function esc(s){var d=document.createElement('div');d.textContent=s==null?'':s;return d.innerHTML}

  var CSV='https://docs.google.com/spreadsheets/d/e/2PACX-1vSn3GqP4VKYFz8ZXFJjZ1xnVi4epoEA1-mAMDo9Uw9k8fRVloDf2BG4NJH7vyU7p4_suSwg2YBIsjGM/pub?gid=943797307&single=true&output=csv';
  function loadData(cb){
    if(products){cb();return}
    if(window._dkAllProducts&&window._dkAllProducts.length){products=window._dkAllProducts;cb();return}
    try{var c=localStorage.getItem('dk_csv_products');
      if(c){products=parseCSV(c);if(products.length){cb();return}}}catch(e){}
    if(loading)return;loading=true;
    fetch(window.DENKIRS_PRODUCTS_CSV||CSV).then(function(r){return r.text()}).then(function(t){
      products=parseCSV(t);loading=false;
      try{localStorage.setItem('dk_csv_products',t)}catch(e){}
      cb();
    }).catch(function(){loading=false});
  }

  var SYS={'SMART':'/track-system-smart','AIR':'/track-system-air','SHINE':'/track-system-shine',
    'Spotlights':'/spotlights','Waterproof':'/waterproof-spotlights',
    'Light Sources':'/light-sources','Display Equipment':'/trade-equipment'};
  var ov=document.getElementById('dkh-ov'),inp=document.getElementById('dkh-q'),
      res=document.getElementById('dkh-res'),cnt=document.getElementById('dkh-cnt');
  var sel=-1,shown=[];

  function score(p,q){
    var sku=(p.sku||'').toLowerCase(),ti=(p.title||'').toLowerCase();
    if(sku===q)return 100;
    if(sku.indexOf(q)===0)return 90;
    if(ti.indexOf(q)===0)return 80;
    if(sku.indexOf(q)!==-1)return 70;
    if(ti.indexOf(q)!==-1)return 60;
    var ipq=q.replace(/^ip\s*/,'');
    if(ipq!==q&&String(parseFloat(p.ip||''))===ipq)return 50;
    var hay=[p.system,p.subcategory,p.color,p.power,p.color_temp,p.ip,p.flux,
             p.beam,p.voltage,p.material,p.description].join(' ').toLowerCase();
    return hay.indexOf(q)!==-1?30:0;
  }
  function search(q){
    q=q.trim().toLowerCase();if(!q||!products)return[];
    var out=[];
    for(var i=0;i<products.length;i++){var s=score(products[i],q);if(s>0)out.push({p:products[i],s:s})}
    out.sort(function(a,b){return b.s-a.s});
    return out.slice(0,40).map(function(x){return x.p});
  }
  function go(p){
    location.href=prefix()+(SYS[p.system]||'/products')+'#product='+encodeURIComponent(p.sku||'');
  }
  var hintStart=document.getElementById('dkh-hint-start'),
      hintNone=document.getElementById('dkh-hint-none'),
      listEl=document.getElementById('dkh-list');
  function render(list,q){
    shown=list;sel=-1;
    hintStart.style.display=q?'none':'block';
    hintNone.style.display=(q&&!list.length)?'block':'none';
    if(!q){listEl.innerHTML='';cnt.textContent='';return}
    if(!list.length){listEl.innerHTML='';cnt.textContent='0';return}
    var h='';
    list.forEach(function(p,i){
      var img=fixImg(p.photo_1||'',120);
      var meta=[p.system,p.subcategory].filter(Boolean).join(' \u00B7 ');
      h+='<button class="dkh-item-r" type="button" data-i="'+i+'">';
      h+=img?'<img class="dkh-th" src="'+esc(img)+'" alt="" loading="lazy">':'<div class="dkh-th"></div>';
      h+='<div class="dkh-rb"><div class="dkh-sku">'+esc(p.sku||'')+'</div>';
      h+='<div class="dkh-nm">'+esc(p.title||'')+'</div>';
      if(meta)h+='<div class="dkh-mt">'+esc(meta)+'</div>';
      h+='</div>';
      if(p.price)h+='<div class="dkh-pr">\u20AC'+esc(p.price)+'</div>';
      h+='</button>';
    });
    listEl.innerHTML=h;
    cnt.textContent=String(list.length);
    listEl.querySelectorAll('.dkh-item-r').forEach(function(b){
      b.addEventListener('click',function(){go(shown[+this.getAttribute('data-i')])});
    });
  }
  function move(d){
    var it=res.querySelectorAll('.dkh-item-r');if(!it.length)return;
    if(sel>=0)it[sel].classList.remove('sel');
    sel=(sel+d+it.length)%it.length;
    it[sel].classList.add('sel');it[sel].scrollIntoView({block:'nearest'});
  }
  function openSearch(){
    ov.classList.add('open');document.body.style.overflow='hidden';
    setTimeout(function(){inp.focus()},40);
    loadData(function(){if(inp.value)render(search(inp.value),inp.value)});
  }
  function closeSearch(){ov.classList.remove('open');document.body.style.overflow='';inp.value='';render([],'')}

  document.getElementById('dkh-search-open').addEventListener('click',openSearch);
  ov.addEventListener('click',function(e){if(e.target===ov)closeSearch()});
  var t=null;
  inp.addEventListener('input',function(){
    var q=this.value;clearTimeout(t);
    t=setTimeout(function(){loadData(function(){render(search(q),q)})},120);
  });
  document.addEventListener('keydown',function(e){
    if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){
      e.preventDefault();ov.classList.contains('open')?closeSearch():openSearch();return;
    }
    if(!ov.classList.contains('open'))return;
    if(e.key==='Escape')closeSearch();
    else if(e.key==='ArrowDown'){e.preventDefault();move(1)}
    else if(e.key==='ArrowUp'){e.preventDefault();move(-1)}
    else if(e.key==='Enter'&&sel>=0&&shown[sel]){e.preventDefault();go(shown[sel])}
  });

  markLangLabel();
  onScroll();
  render([],'');
})();
}catch(e){if(window.console)console.error('DENKIRS header: menu.js',e);}
try{
(function(){
  var SEO_CSV='https://docs.google.com/spreadsheets/d/e/2PACX-1vTZAPAw2xv4bdojhy62vZEX2Uvf1DCreomGow6QVpacuEZY81i0fvrwOSB078ik0mkRdfBJFfRZvp-A/pub?gid=1437227585&single=true&output=csv';
  var ORIGIN='https://denkirs.si';

  function parseLine(t){var r=[],c='',q=false;for(var i=0;i<t.length;i++){var ch=t[i];
    if(q){if(ch==='"'){if(i+1<t.length&&t[i+1]==='"'){c+='"';i++}else q=false}else c+=ch}
    else{if(ch==='"')q=true;else if(ch===','){r.push(c.trim());c=''}else c+=ch}}r.push(c.trim());return r}
  function parseCSV(t){var L=t.split(/\r?\n/).filter(function(l){return l.trim()!==''});
    if(L.length<2)return[];var h=parseLine(L[0]),out=[];
    for(var i=1;i<L.length;i++){var v=parseLine(L[i]),o={};
      for(var j=0;j<h.length;j++)o[h[j]]=v[j]||'';out.push(o)}return out}

  function barePath(){
    var p=location.pathname.replace(/^\/(en|hu|de|it)(?=\/|$)/,'');
    if(p.length>1)p=p.replace(/\/$/,'');
    return p||'/';
  }
  function curLang(){
    var m=location.pathname.match(/^\/(en|hu|de|it)(\/|$)/);
    return m?m[1]:'sl';
  }

  function setMeta(sel,attr,val){
    if(!val)return;
    var el=document.head.querySelector(sel);
    if(!el){
      el=document.createElement('meta');
      if(attr==='name')el.setAttribute('name',sel.match(/\[name="([^"]+)"\]/)[1]);
      document.head.appendChild(el);
    }
    el.setAttribute('content',val);
  }
  function applyRow(r){
    if(!r)return;
    if(r.title){ document.title=r.title; }
    if(r.description){ setMeta('meta[name="description"]','name',r.description); }
    if(r.h1 && !document.querySelector('h1')){
      var host=document.querySelector('#allrecords')||document.body;
      var h=document.createElement('h1');
      h.textContent=r.h1;
      h.style.cssText='position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap';
      host.insertBefore(h,host.firstChild);
    }
  }

  function organizationLD(){
    if(document.querySelector('script[type="application/ld+json"][data-dk-org]'))return;
    var ld={"@context":"https://schema.org","@type":"Organization",
      "name":"DENKIRS","url":ORIGIN,
      "logo":"https://static.tildacdn.com/tild3434-6630-4833-b138-316437303461/noroot.png",
      "address":{"@type":"PostalAddress","addressLocality":"Ljubljana","addressCountry":"SI"},
      "contactPoint":{"@type":"ContactPoint","telephone":"+386-82-809-009",
        "contactType":"sales","email":"info@denkirs.si","areaServed":"EU"}};
    var s=document.createElement('script');
    s.type='application/ld+json'; s.setAttribute('data-dk-org','1');
    s.textContent=JSON.stringify(ld);
    document.head.appendChild(s);
  }

  function apply(rows){
    var p=barePath();
    for(var i=0;i<rows.length;i++){
      var rp=String(rows[i].path||'').trim();
      if(rp && rp!=='/' ) rp=rp.replace(/\/$/,'');
      if(rp===p){ applyRow(rows[i]); return; }
    }
  }

  function init(){
    organizationLD();
    var cached=null;
    try{ cached=localStorage.getItem('dk_csv_seo'); }catch(e){}
    if(cached){ try{ apply(parseCSV(cached)); }catch(e){} }
    fetch(SEO_CSV).then(function(r){return r.text()}).then(function(t){
      if(t===cached)return;
      try{ localStorage.setItem('dk_csv_seo',t); }catch(e){}
      apply(parseCSV(t));
    }).catch(function(){});
  }
  if(document.readyState!=='loading')init();
  else document.addEventListener('DOMContentLoaded',init);
})();
}catch(e){if(window.console)console.error('DENKIRS header: seo.js',e);}
})();
