/*! DENKIRS catalog engine 2.3.0 · https://github.com/Denkirs-it/denkirs-si · catalog/dkcat-2.3.0.js */
(function(){
if(window.DKCAT)return;
var DKCAT=window.DKCAT={version:'2.3.0',ok:true};
var st=document.createElement('style');st.setAttribute('data-dkcat',DKCAT.version);
st.appendChild(document.createTextNode(".dk-cat{--brand-red:#CC1B2B;--brand-red-hover:#E02235;--text-dark:#2D2B30;--text-gray:#737077;--text-light:#9B98A0;--bg-warm:#F7F6F4;--bg-cool:#F0EFF2;--bg-white:#FFFFFF;--border:rgba(115,112,119,.10);--border-md:rgba(115,112,119,.18);--radius:10px;--ease:cubic-bezier(.25,.46,.45,.94);--font-h:'Outfit',sans-serif;--font-b:'Inter',sans-serif;font-family:'Inter',sans-serif !important;color:#2D2B30 !important;-webkit-font-smoothing:antialiased}\n.dk-cat *,.dk-cat *::before,.dk-cat *::after{margin:0 !important;padding:0 !important;box-sizing:border-box !important}\n.dk-cat img{max-width:100% !important;display:block !important}\n.dk-cat button{border:none !important;background:none !important;cursor:pointer !important;font-family:'Inter',sans-serif !important}\n.dk-cat .dc-systems{display:flex !important;flex-wrap:wrap !important;gap:8px !important;margin-bottom:24px !important}\n.dk-cat .dc-sys{display:inline-flex !important;align-items:center !important;gap:6px !important;padding:8px 18px !important;border-radius:100px !important;font-size:13px !important;font-weight:500 !important;color:#737077 !important;background:#FFFFFF !important;border:1.5px solid rgba(115,112,119,.12) !important;text-decoration:none !important;transition:all .25s !important;cursor:pointer !important;font-family:'Inter',sans-serif !important;line-height:1.4 !important}\n.dk-cat .dc-sys:hover{border-color:#737077 !important;color:#2D2B30 !important}\n.dk-cat .dc-sys.active{background:#CC1B2B !important;color:#fff !important;border-color:#CC1B2B !important}\n.dk-cat .dc-sys-count{font-size:11px !important;opacity:.7 !important}\n.dk-cat .dc-sys-badge{font-size:9px !important;font-weight:700 !important;letter-spacing:.5px !important;text-transform:uppercase !important;padding:2px 6px !important;border-radius:4px !important;margin-left:2px !important}\n.dk-cat .dc-sys-badge-red{background:#CC1B2B !important;color:#fff !important}\n.dk-cat .dc-sys-badge-green{background:#25A55F !important;color:#fff !important}\n.dk-cat .dc-subs{display:flex !important;flex-wrap:wrap !important;gap:4px !important;padding-bottom:20px !important;border-bottom:1px solid rgba(115,112,119,.10) !important;margin-bottom:20px !important}\n.dk-cat .dc-subs:empty{display:none !important;padding:0 !important;margin:0 !important;border:0 !important}\n.dk-cat .dc-sub{padding:6px 16px !important;font-size:13px !important;color:#737077 !important;border-radius:100px !important;transition:all .25s !important;cursor:pointer !important;background:transparent !important;border:none !important;font-family:'Inter',sans-serif !important;line-height:1.4 !important}\n.dk-cat .dc-sub:hover{color:#2D2B30 !important;background:#F7F6F4 !important}\n.dk-cat .dc-sub.active{color:#2D2B30 !important;font-weight:500 !important;background:#F7F6F4 !important}\n.dk-cat .dc-filters{display:flex !important;flex-wrap:wrap !important;gap:8px !important;align-items:center !important;margin-bottom:20px !important}\n.dk-cat .dc-filters:empty{display:none !important;margin:0 !important}\n.dk-cat .dc-fg{position:relative !important}\n.dk-cat .dc-fbtn{display:inline-flex !important;align-items:center !important;gap:6px !important;padding:7px 14px !important;border-radius:100px !important;font-size:12px !important;font-weight:500 !important;color:#737077 !important;background:#FFFFFF !important;border:1px solid rgba(115,112,119,.18) !important;transition:all .25s !important;cursor:pointer !important;font-family:'Inter',sans-serif !important;line-height:1.4 !important}\n.dk-cat .dc-fbtn:hover{border-color:#737077 !important;color:#2D2B30 !important}\n.dk-cat .dc-fbtn.has-val{color:#CC1B2B !important;border-color:#CC1B2B !important;background:#FDF2F3 !important}\n.dk-cat .dc-fbtn svg{width:12px !important;height:12px !important;transition:transform .2s !important}\n.dk-cat .dc-fbtn.open svg{transform:rotate(180deg) !important}\n.dk-cat .dc-dd{display:none !important;position:absolute !important;top:calc(100% + 6px) !important;left:0 !important;min-width:180px !important;background:#FFFFFF !important;border:1px solid rgba(115,112,119,.18) !important;border-radius:10px !important;box-shadow:0 8px 30px rgba(45,43,48,.12) !important;z-index:100 !important;padding:6px 0 !important}\n.dk-cat .dc-dd.open{display:block !important}\n.dk-cat .dc-opt{display:flex !important;align-items:center !important;justify-content:space-between !important;padding:8px 14px !important;font-size:13px !important;color:#2D2B30 !important;cursor:pointer !important;transition:background .15s !important;font-family:'Inter',sans-serif !important}\n.dk-cat .dc-opt:hover{background:#F7F6F4 !important}\n.dk-cat .dc-opt.selected{color:#CC1B2B !important;font-weight:500 !important}\n.dk-cat .dc-opt-cnt{font-size:11px !important;color:#9B98A0 !important;margin-left:12px !important}\n.dk-cat .dc-reset{padding:7px 14px !important;border-radius:100px !important;font-size:12px !important;font-weight:500 !important;color:#9B98A0 !important;cursor:pointer !important;transition:all .25s !important;border:none !important;background:none !important;font-family:'Inter',sans-serif !important}\n.dk-cat .dc-reset:hover{color:#CC1B2B !important}\n.dk-cat .dc-toolbar{display:flex !important;align-items:center !important;margin-bottom:24px !important}\n.dk-cat .dc-count{font-size:13px !important;color:#737077 !important}\n.dk-cat .dc-search{position:relative !important;flex:1 1 260px !important;max-width:420px !important;min-width:200px !important}\n.dk-cat .dc-search input{width:100% !important;height:38px !important;padding:0 34px 0 36px !important;border:1px solid rgba(115,112,119,.22) !important;border-radius:100px !important;background:#fff !important;font-family:'Inter',sans-serif !important;font-size:14px !important;color:#2D2B30 !important;outline:none !important;transition:border-color .2s,box-shadow .2s !important}\n.dk-cat .dc-search input:focus{border-color:#CC1B2B !important;box-shadow:0 0 0 3px rgba(204,27,43,.10) !important}\n.dk-cat .dc-search input::placeholder{color:#9B98A0 !important}\n.dk-cat .dc-search .dc-s-ico{position:absolute !important;left:13px !important;top:50% !important;transform:translateY(-50%) !important;width:15px !important;height:15px !important;stroke:#9B98A0 !important;fill:none !important;stroke-width:2 !important;pointer-events:none !important}\n.dk-cat .dc-search .dc-s-clr{position:absolute !important;right:7px !important;top:50% !important;transform:translateY(-50%) !important;width:24px !important;height:24px !important;border:none !important;background:none !important;cursor:pointer !important;color:#9B98A0 !important;font-size:17px !important;line-height:1 !important;display:none !important;padding:0 !important}\n.dk-cat .dc-search.has .dc-s-clr{display:block !important}\n.dk-cat .dc-search .dc-s-clr:hover{color:#2D2B30 !important}\n.dk-cat .dc-reset{border:none !important;background:none !important;color:#CC1B2B !important;font-family:'Inter',sans-serif !important;font-size:13px !important;cursor:pointer !important;padding:0 !important;text-decoration:underline !important}\n@media(max-width:768px){.dk-cat .dc-search{flex:1 1 100% !important;max-width:none !important}}\n.dk-cat .dc-grid{display:grid !important;grid-template-columns:repeat(3,1fr) !important;gap:24px !important}\n.dk-cat .dc-card{border-radius:10px !important;overflow:hidden !important;background:#FFFFFF !important;border:1px solid rgba(115,112,119,.10) !important;transition:all .35s !important;cursor:pointer !important}\n.dk-cat .dc-card:hover{border-color:rgba(115,112,119,.18) !important;box-shadow:0 1px 3px rgba(45,43,48,.06) !important;transform:translateY(-2px) !important}\n.dk-cat .dc-card-img{position:relative !important;aspect-ratio:1/1 !important;overflow:hidden !important;background:#F0EFF2 !important}\n.dk-cat .dc-card-img img{width:100% !important;height:100% !important;object-fit:contain !important;padding:16px !important;transition:transform .5s !important}\n.dk-cat .dc-card:hover .dc-card-img img{transform:scale(1.05) !important}\n.dk-cat .dc-card-body{padding:16px !important}\n.dk-cat .dc-card-sku{font-size:11px !important;color:#9B98A0 !important;letter-spacing:.05em !important;text-transform:uppercase !important;margin-bottom:4px !important}\n.dk-cat .dc-card-title{font-family:'Outfit',sans-serif !important;font-size:14px !important;font-weight:500 !important;line-height:1.3 !important;margin-bottom:8px !important;display:-webkit-box !important;-webkit-line-clamp:2 !important;-webkit-box-orient:vertical !important;overflow:hidden !important;color:#2D2B30 !important}\n.dk-cat .dc-card-price{font-size:15px !important;font-weight:600 !important;color:#2D2B30 !important}\n.dk-cat .dc-card-color{display:inline-block !important;font-size:11px !important;color:#9B98A0 !important;margin-top:6px !important;padding:2px 8px !important;background:#F7F6F4 !important;border-radius:100px !important}\n.dk-cat .dc-empty{text-align:center !important;padding:60px 20px !important;font-size:15px !important;color:#737077 !important}\n.dk-cat-overlay{position:fixed !important;top:0 !important;left:0 !important;right:0 !important;bottom:0 !important;width:100% !important;height:100% !important;background:rgba(45,43,48,.55) !important;z-index:99999 !important;display:none !important;align-items:center !important;justify-content:center !important;padding:20px !important;backdrop-filter:blur(4px) !important;-webkit-backdrop-filter:blur(4px) !important}\n.dk-cat-overlay.open{display:flex !important}\n.dk-cat-popup{background:#FFFFFF !important;border-radius:16px !important;max-width:1200px !important;width:100% !important;max-height:90vh !important;overflow-y:auto !important;position:relative !important;box-shadow:0 20px 60px rgba(45,43,48,.35) !important;font-family:'Inter',sans-serif !important}\n.dk-cat-popup *{margin:0 !important;padding:0 !important;box-sizing:border-box !important}\n.dk-cat-popup .dp-close{position:absolute !important;top:16px !important;right:16px !important;z-index:10 !important;width:36px !important;height:36px !important;border-radius:50% !important;background:#F7F6F4 !important;display:flex !important;align-items:center !important;justify-content:center !important;font-size:22px !important;color:#737077 !important;border:none !important;cursor:pointer !important;transition:all .2s !important}\n.dk-cat-popup .dp-close:hover{background:#EEEDEB !important;color:#2D2B30 !important}\n.dk-cat-popup .dp-inner{display:grid !important;grid-template-columns:1fr 1fr !important}\n.dk-cat-popup .dp-gallery{position:relative !important;background:#F7F6F4 !important;aspect-ratio:1/1 !important;overflow:hidden !important;border-radius:16px 0 0 16px !important}\n.dk-cat-popup .dp-slides{display:flex !important;width:100% !important;height:100% !important;transition:transform .4s cubic-bezier(.25,.46,.45,.94) !important}\n.dk-cat-popup .dp-slides img{min-width:100% !important;height:100% !important;object-fit:contain !important;padding:24px !important}\n.dk-cat-popup .dp-prev,.dk-cat-popup .dp-next{position:absolute !important;top:50% !important;transform:translateY(-50%) !important;width:36px !important;height:36px !important;border-radius:50% !important;background:rgba(255,255,255,.85) !important;color:#2D2B30 !important;font-size:22px !important;display:flex !important;align-items:center !important;justify-content:center !important;border:none !important;cursor:pointer !important;transition:all .2s !important}\n.dk-cat-popup .dp-prev{left:12px !important}\n.dk-cat-popup .dp-next{right:12px !important}\n.dk-cat-popup .dp-prev:hover,.dk-cat-popup .dp-next:hover{background:#fff !important}\n.dk-cat-popup .dp-dots{position:absolute !important;bottom:14px !important;left:50% !important;transform:translateX(-50%) !important;display:flex !important;gap:6px !important}\n.dk-cat-popup .dp-dot{width:8px !important;height:8px !important;border-radius:50% !important;background:rgba(45,43,48,.2) !important;cursor:pointer !important;transition:all .2s !important;border:none !important}\n.dk-cat-popup .dp-dot.active{background:#CC1B2B !important;transform:scale(1.2) !important}\n.dk-cat-popup .dp-info{padding:32px !important;overflow-y:auto !important;background:#FFFFFF !important}\n.dk-cat-popup .dp-sku{font-size:12px !important;color:#9B98A0 !important;letter-spacing:.05em !important;text-transform:uppercase !important;margin-bottom:8px !important}\n.dk-cat-popup .dp-title{font-family:'Outfit',sans-serif !important;font-size:22px !important;font-weight:700 !important;line-height:1.2 !important;margin-bottom:12px !important;color:#2D2B30 !important}\n.dk-cat-popup .dp-price{font-size:20px !important;font-weight:600 !important;margin-bottom:12px !important;color:#2D2B30 !important}\n.dk-cat-popup .dp-pills{display:flex !important;flex-wrap:wrap !important;gap:6px !important;margin-bottom:16px !important}\n.dk-cat-popup .dp-pill{padding:4px 12px !important;border-radius:100px !important;font-size:12px !important;font-weight:500 !important;background:#F7F6F4 !important;color:#2D2B30 !important;border:none !important}\n.dk-cat-popup .dp-actions{display:flex !important;flex-wrap:wrap !important;gap:10px !important;margin-bottom:20px !important}\n.dk-cat-popup .dp-btn-primary{display:inline-flex !important;align-items:center !important;gap:6px !important;padding:10px 22px !important;border-radius:100px !important;font-size:13px !important;font-weight:500 !important;background:#CC1B2B !important;color:#fff !important;text-decoration:none !important;transition:all .25s !important;border:none !important;cursor:pointer !important;font-family:'Inter',sans-serif !important}\n.dk-cat-popup .dp-btn-primary:hover{background:#E02235 !important}\n.dk-cat-popup .dp-btn-secondary{display:inline-flex !important;align-items:center !important;gap:6px !important;padding:10px 22px !important;border-radius:100px !important;font-size:13px !important;font-weight:500 !important;border:1.5px solid rgba(115,112,119,.18) !important;color:#2D2B30 !important;text-decoration:none !important;transition:all .25s !important;background:#FFFFFF !important;cursor:pointer !important;font-family:'Inter',sans-serif !important}\n.dk-cat-popup .dp-btn-secondary:hover{border-color:#737077 !important}\n.dk-cat-popup .dp-desc{font-size:13px !important;line-height:1.6 !important;color:#737077 !important;margin-bottom:20px !important}\n.dk-cat-popup .dp-specs-toggle{display:flex !important;align-items:center !important;gap:6px !important;font-size:13px !important;font-weight:500 !important;color:#737077 !important;cursor:pointer !important;margin-bottom:12px !important;transition:color .2s !important;border:none !important;background:none !important;font-family:'Inter',sans-serif !important}\n.dk-cat-popup .dp-specs-toggle:hover{color:#2D2B30 !important}\n.dk-cat-popup .dp-specs-toggle svg{width:14px !important;height:14px !important;transition:transform .3s !important}\n.dk-cat-popup .dp-specs-toggle.open svg{transform:rotate(180deg) !important}\n.dk-cat-popup .dp-specs{max-height:0 !important;overflow:hidden !important;transition:max-height .4s ease !important}\n.dk-cat-popup .dp-specs.open{max-height:800px !important}\n.dk-cat-popup .dp-specs table{width:100% !important;border-collapse:collapse !important}\n.dk-cat-popup .dp-specs td{padding:8px 0 !important;font-size:13px !important;border-bottom:1px solid rgba(115,112,119,.10) !important;font-family:'Inter',sans-serif !important;background:transparent !important}\n.dk-cat-popup .dp-specs td:first-child{color:#737077 !important;width:40% !important}\n.dk-cat-popup .dp-specs td:last-child{font-weight:500 !important;text-align:right !important;color:#2D2B30 !important}\n@media(max-width:1024px){\n.dk-cat .dc-grid{grid-template-columns:repeat(2,1fr) !important;gap:16px !important}\n.dk-cat-popup .dp-inner{grid-template-columns:1fr !important}\n.dk-cat-popup .dp-gallery{aspect-ratio:4/3 !important;border-radius:16px 16px 0 0 !important}\n}\n@media(max-width:768px){\n.dk-cat .dc-systems{flex-wrap:nowrap !important;overflow-x:auto !important;-webkit-overflow-scrolling:touch !important;scrollbar-width:none !important}\n.dk-cat .dc-systems::-webkit-scrollbar{display:none !important}\n.dk-cat .dc-sys{white-space:nowrap !important;flex-shrink:0 !important}\n.dk-cat .dc-grid{grid-template-columns:1fr !important;gap:16px !important}\n.dk-cat .dc-subs{flex-wrap:nowrap !important;overflow-x:auto !important;-webkit-overflow-scrolling:touch !important;scrollbar-width:none !important}\n.dk-cat .dc-subs::-webkit-scrollbar{display:none !important}\n.dk-cat .dc-card-body{padding:12px !important}\n.dk-cat .dc-card-title{font-size:13px !important}\n.dk-cat-popup{max-height:95vh !important;border-radius:12px !important}\n.dk-cat-popup .dp-inner{grid-template-columns:1fr !important}\n.dk-cat-popup .dp-gallery{aspect-ratio:4/3 !important;border-radius:12px 12px 0 0 !important}\n.dk-cat-popup .dp-info{padding:20px !important}\n.dk-cat-popup .dp-title{font-size:18px !important}\n.dk-cat-popup .dp-price{font-size:18px !important}\n.dk-cat-popup .dp-actions{flex-wrap:wrap !important}\n.dk-cat-popup .dp-desc{font-size:13px !important}\n}\n.dk-cat-popup .dp-btn-primary.dp-added{background:#25A55F !important;pointer-events:none !important}\n.dk-cat-popup .dp-stepper{display:inline-flex !important;align-items:center !important;border:1.5px solid rgba(115,112,119,.18) !important;border-radius:100px !important;overflow:hidden !important;height:40px !important;margin-right:2px !important}\n.dk-cat-popup .dp-stepper button{width:36px !important;height:40px !important;border:none !important;background:transparent !important;font-size:18px !important;color:#737077 !important;cursor:pointer !important;display:flex !important;align-items:center !important;justify-content:center !important;transition:color .2s !important;font-family:'Inter',sans-serif !important;padding:0 !important}\n.dk-cat-popup .dp-stepper button:hover{color:#2D2B30 !important}\n.dk-cat-popup .dp-stepper .dp-qty{width:32px !important;text-align:center !important;font-size:14px !important;font-weight:500 !important;color:#2D2B30 !important;border:none !important;background:transparent !important;font-family:'Inter',sans-serif !important;padding:0 !important}\n.dk-cat-popup .dp-buy-link{display:block !important;margin-top:8px !important;font-size:12px !important;color:#9B98A0 !important;text-decoration:none !important;font-family:'Inter',sans-serif !important;transition:color .2s !important}\n.dk-cat-popup .dp-buy-link:hover{color:#CC1B2B !important;text-decoration:underline !important}\n.dk-cat-popup .dp-stock{display:flex !important;align-items:center !important;gap:6px !important;font-size:13px !important;font-weight:500 !important;margin-bottom:16px !important;font-family:'Inter',sans-serif !important}\n.dk-cat-popup .dp-stock-dot{width:8px !important;height:8px !important;border-radius:50% !important;flex-shrink:0 !important}\n.dk-cat-popup .dp-stock-in{color:#25A55F !important}\n.dk-cat-popup .dp-stock-in .dp-stock-dot{background:#25A55F !important}\n.dk-cat-popup .dp-stock-out{color:#CC1B2B !important}\n.dk-cat-popup .dp-stock-out .dp-stock-dot{background:#CC1B2B !important}\n.dk-cat-popup .dp-stock-arriving{color:#D4910A !important}\n.dk-cat-popup .dp-stock-arriving .dp-stock-dot{background:#D4910A !important}\n.dk-cat-popup .dp-delivery{font-size:12px !important;color:#737077 !important;margin-bottom:16px !important;font-family:'Inter',sans-serif !important}\n.dk-cat .dc-card-pills{display:flex !important;flex-wrap:wrap !important;gap:4px !important;margin-top:6px !important}\n.dk-cat .dc-card-pill{display:inline-block !important;font-size:10px !important;color:#737077 !important;padding:2px 7px !important;background:#F0EFF2 !important;border-radius:100px !important;line-height:1.4 !important}\n.dk-cat .dc-stock{display:inline-flex !important;align-items:center !important;gap:4px !important;font-size:11px !important;font-family:'Inter',sans-serif !important;float:right !important;margin-top:3px !important}\n.dk-cat .dc-stock-dot{width:6px !important;height:6px !important;border-radius:50% !important;flex-shrink:0 !important}\n.dk-cat .dc-stock-in{color:#25A55F !important}\n.dk-cat .dc-stock-in .dc-stock-dot{background:#25A55F !important}\n.dk-cat .dc-stock-out{color:#CC1B2B !important}\n.dk-cat .dc-stock-out .dc-stock-dot{background:#CC1B2B !important}\n.dk-cat .dc-stock-arriving{color:#D4910A !important}\n.dk-cat .dc-stock-arriving .dc-stock-dot{background:#D4910A !important}\n@media(max-width:768px){\n.dk-cat .dc-sub{white-space:nowrap !important;flex-shrink:0 !important}\n#denkirs-catalog-page .ch-hero{margin-top:0 !important;padding-top:94px !important}\n}"));
(document.head||document.documentElement).appendChild(st);
function run(){
  var embeds=document.querySelectorAll('.denkirs-catalog-embed');
  if(!embeds.length) return;

  var PRODUCTS_CSV=window.DENKIRS_PRODUCTS_CSV||"https://docs.google.com/spreadsheets/d/e/2PACX-1vSn3GqP4VKYFz8ZXFJjZ1xnVi4epoEA1-mAMDo9Uw9k8fRVloDf2BG4NJH7vyU7p4_suSwg2YBIsjGM/pub?gid=943797307&single=true&output=csv";
  var HERO_CSV=window.DENKIRS_HERO_CSV||"https://docs.google.com/spreadsheets/d/e/2PACX-1vSn3GqP4VKYFz8ZXFJjZ1xnVi4epoEA1-mAMDo9Uw9k8fRVloDf2BG4NJH7vyU7p4_suSwg2YBIsjGM/pub?gid=1592432725&single=true&output=csv";
  var CONTACT_POPUP="#popup:contact_us";

  var FILTER_MAP={color:{label:"Color"},power:{label:"Power",suffix:" W"},beam:{label:"Beam angle",suffix:"°"},color_temp:{label:"Color temp"},cri:{label:"CRI"},ip:{label:"IP rating",prefix:"IP"},voltage:{label:"Voltage"},dimmable:{label:"Dimmable"},led_type:{label:"LED type"},flux:{label:"Luminous flux",suffix:" lm"},material:{label:"Material"},protocol:{label:"Protocol"},country:{label:"Country"},l_mm:{label:"Length",suffix:" mm"},w_mm:{label:"Width",suffix:" mm"},h_mm:{label:"Height",suffix:" mm"},d_mm:{label:"Diameter",suffix:" mm"}};
  var SPEC_FIELDS=[{col:"color",label:"Color"},{col:"material",label:"Material"},{col:"socket",label:"Socket"},{col:"light_color",label:"Light color"},{col:"power",label:"Power",suffix:" W"},{col:"beam",label:"Beam angle",suffix:"°"},{col:"color_temp",label:"Color temp"},{col:"voltage",label:"Voltage"},{col:"dimmable",label:"Dimmable"},{col:"protocol",label:"Protocol"},{col:"phases",label:"Phases"},{col:"ip",label:"IP rating",prefix:"IP"},{col:"led_type",label:"LED type"},{col:"lamp_type",label:"Lamp type"},{col:"flux",label:"Luminous flux",suffix:" lm"},{col:"cri",label:"CRI",prefix:"≥"},{col:"bulb_included",label:"Bulb included"},{col:"rotatable",label:"Rotatable"},{col:"height_adjustment",label:"Height adjustable"},{col:"h_mm",label:"Height",suffix:" mm"},{col:"l_mm",label:"Length",suffix:" mm"},{col:"w_mm",label:"Width",suffix:" mm"},{col:"d_mm",label:"Diameter",suffix:" mm"},{col:"mounting_hole_mm",label:"Mounting hole",suffix:" mm"},{col:"cord_length_mm",label:"Cord length",suffix:" mm"},{col:"num_lampshades",label:"Number of shades"},{col:"warranty",label:"Warranty",suffix:" years"},{col:"barcode",label:"Barcode"}];
  var DEFAULT_PILLS=['power','beam','color_temp','cri','voltage','ip'];
  function colLabel(col){if(FILTER_MAP[col])return FILTER_MAP[col];var l=col.replace(/_/g,' ');return{label:l.charAt(0).toUpperCase()+l.slice(1)}}

  function parseLine(t){var r=[],c='',q=false;for(var i=0;i<t.length;i++){var ch=t[i];if(q){if(ch==='"'){if(i+1<t.length&&t[i+1]==='"'){c+='"';i++}else q=false}else c+=ch}else{if(ch==='"')q=true;else if(ch===','){r.push(c.trim());c=''}else c+=ch}}r.push(c.trim());return r;}
  function parseCSV(t){var lines=t.split(/\r?\n/).filter(function(l){return l.trim()!==''});if(lines.length<2)return[];var hdr=parseLine(lines[0]);var rows=[];for(var i=1;i<lines.length;i++){var vals=parseLine(lines[i]),obj={};for(var j=0;j<hdr.length;j++)obj[hdr[j]]=vals[j]||'';rows.push(obj);}return rows;}
  function fixImg(u,s){if(!u)return'';u=u.trim();s=s||1920;
  if(u.indexOf('static.tildacdn.com')!==-1){
    if(u.indexOf('/-/resize/')!==-1) return u;
    var ix=u.lastIndexOf('/');
    if(ix>0) return u.slice(0,ix)+'/-/resize/'+s+'x'+u.slice(ix);
    return u;
  }
  if(u.indexOf('lh3.googleusercontent.com')!==-1){return u.replace(/=w\d+$/,'')+'=w'+s;}var m=u.match(/\/d\/([a-zA-Z0-9_-]+)/);if(m)return'https://lh3.googleusercontent.com/d/'+m[1]+'=w'+s;m=u.match(/[?&]id=([a-zA-Z0-9_-]+)/);if(m)return'https://lh3.googleusercontent.com/d/'+m[1]+'=w'+s;return u;}
  function esc(s){var d=document.createElement('div');d.textContent=s;return d.innerHTML;}

  function earliestDelivery(s){
    if(!s)return'';
    var parts=String(s).split(/[\n,;]+/);
    var earliest=null;
    parts.forEach(function(p){
      p=p.trim();if(!p)return;
      var m=p.match(/(\d{2})\.(\d{2})\.(\d{4})/);
      if(m){var d=new Date(parseInt(m[3]),parseInt(m[2])-1,parseInt(m[1]));if(!earliest||d<earliest)earliest=d;}
    });
    if(!earliest)return s.trim().split(/[\n,;]/)[0].trim();
    return earliest.toLocaleDateString('en-GB',{day:'2-digit',month:'2-digit',year:'numeric'}).replace(/\//g,'.');
  }
  function stockBadgeHTML(p,forPopup){
    var inStock=p.stock_status==='in_stock';
    var hasDelivery=p.next_delivery&&String(p.next_delivery).trim()!=='';
    var state=inStock?'in':(!inStock&&hasDelivery?'arriving':'out');
    var labels={in:'In stock',arriving:'Arriving soon',out:'Out of stock'};
    if(forPopup){
      var cls=state==='in'?'dp-stock dp-stock-in':state==='arriving'?'dp-stock dp-stock-arriving':'dp-stock dp-stock-out';
      return'<div class="'+cls+'"><span class="dp-stock-dot"></span>'+labels[state]+'</div>';
    }else{
      var cls=state==='in'?'dc-stock dc-stock-in':state==='arriving'?'dc-stock dc-stock-arriving':'dc-stock dc-stock-out';
      return'<div class="'+cls+'"><span class="dc-stock-dot"></span>'+labels[state]+'</div>';
    }
  }

  var popupSlide=0,popupPhotos=[];
  var overlayEl=document.createElement('div');overlayEl.className='dk-cat-overlay';overlayEl.id='dk-cat-overlay';
  overlayEl.innerHTML='<div class="dk-cat-popup"><button class="dp-close">&times;</button><div class="dp-inner"><div class="dp-gallery"><div class="dp-slides" id="dk-dp-slides"></div><button class="dp-prev">&#8249;</button><button class="dp-next">&#8250;</button><div class="dp-dots" id="dk-dp-dots"></div></div><div class="dp-info"><div class="dp-sku" id="dk-dp-sku"></div><h2 class="dp-title" id="dk-dp-title"></h2><div class="dp-price" id="dk-dp-price"></div><div class="dp-pills" id="dk-dp-pills"></div><div class="dp-actions" id="dk-dp-actions"></div><p class="dp-desc" id="dk-dp-desc"></p><button class="dp-specs-toggle" id="dk-dp-toggle"><svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 5.5L7 9.5L11 5.5"/></svg> All specifications</button><div class="dp-specs" id="dk-dp-specs"></div></div></div></div>';
  document.body.appendChild(overlayEl);

  function openPopup(p, pillCols){
    popupSlide=0;popupPhotos=[];
    for(var pi=1;pi<=14;pi++){var ph=p['photo_'+pi];if(ph){ph=fixImg(ph,1200);popupPhotos.push(ph);}}
    var sH='';popupPhotos.forEach(function(url){sH+='<img src="'+esc(url)+'" alt="'+esc(p.title)+'">';});
    if(!popupPhotos.length)sH='<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;color:#9B98A0">No photo</div>';
    document.getElementById('dk-dp-slides').innerHTML=sH;
    var dH='';popupPhotos.forEach(function(_,i){dH+='<button class="dp-dot'+(i===0?' active':'')+'"></button>';});
    document.getElementById('dk-dp-dots').innerHTML=dH;
    var showNav=popupPhotos.length>1;
    overlayEl.querySelector('.dp-prev').style.display=showNav?'flex':'none';
    overlayEl.querySelector('.dp-next').style.display=showNav?'flex':'none';
    document.getElementById('dk-dp-sku').textContent=p.sku||'';
    document.getElementById('dk-dp-title').textContent=p.title||'';
    document.getElementById('dk-dp-price').textContent=p.price?'€'+p.price:'';
    document.getElementById('dk-dp-desc').textContent=p.description||'';
    document.getElementById('dk-dp-desc').style.display=p.description?'block':'none';
    var usePills=pillCols||DEFAULT_PILLS;
    var pillsH='';usePills.forEach(function(col){var v=p[col];if(!v)return;var fm=FILTER_MAP[col]||{};pillsH+='<span class="dp-pill">'+esc((fm.prefix||'')+v+(fm.suffix||''))+'</span>';});
    if(!pillCols&&p.color)pillsH+='<span class="dp-pill">'+esc(p.color)+'</span>';
    document.getElementById('dk-dp-pills').innerHTML=pillsH;
    var stockH='';
    if(p.stock_status)stockH+=stockBadgeHTML(p,true);
    var deliv=earliestDelivery(p.next_delivery);
    if(deliv)stockH+='<div class="dp-delivery">📦 Expected restock: '+esc(deliv)+'</div>';
    var stockEl=document.getElementById('dk-dp-stock');
    if(!stockEl){stockEl=document.createElement('div');stockEl.id='dk-dp-stock';document.getElementById('dk-dp-pills').insertAdjacentElement('afterend',stockEl);}
    stockEl.innerHTML=stockH;
    var aH='<div class="dp-stepper"><button class="dp-qty-minus">−</button><span class="dp-qty" id="dk-dp-qty">1</span><button class="dp-qty-plus">+</button></div>';
    aH+='<button class="dp-btn-primary dp-add-project" data-sku="'+esc(p.sku||'')+'" data-title="'+esc(p.title||'')+'" data-price="'+(p.price||0)+'" data-image="'+esc(fixImg(p.photo_1||'',600))+'">Add to Project</button>';
    if(p.model_3d)aH+='<a href="'+esc(p.model_3d)+'" target="_blank" class="dp-btn-secondary">3D Model ↗</a>';
    aH+='<a href="'+getDenkirsLangPrefix()+'/store-locator" class="dp-buy-link">Where to buy individually →</a>';
    document.getElementById('dk-dp-actions').innerHTML=aH;
    var spH='<table>';SPEC_FIELDS.forEach(function(sf){var v=p[sf.col];if(!v)return;spH+='<tr><td>'+esc(sf.label)+'</td><td>'+esc((sf.prefix||'')+v+(sf.suffix||''))+'</td></tr>';});spH+='</table>';
    var specsEl=document.getElementById('dk-dp-specs');specsEl.innerHTML=spH;specsEl.classList.remove('open');
    var togEl=document.getElementById('dk-dp-toggle');togEl.classList.remove('open');togEl.style.display=spH==='<table></table>'?'none':'flex';
    overlayEl.classList.add('open');document.body.style.overflow='hidden';updateSlide();

    if(p.sku&&!popupFromHash){
      popupPushed=true;
      history.pushState({dkProduct:true},'',location.pathname+location.search+'#product='+encodeURIComponent(p.sku));
    }
    popupFromHash=false;
  }
  var popupPushed=false;
  var popupFromHash=false;

  function closePopup(){
    overlayEl.classList.remove('open');document.body.style.overflow='';
    if(popupPushed){popupPushed=false;history.back();}
    else{
      if(location.hash.indexOf('product=')!==-1){history.replaceState(null,'',location.pathname+location.search);}
    }
  }
  function updateSlide(){document.getElementById('dk-dp-slides').style.transform='translateX(-'+popupSlide*100+'%)';overlayEl.querySelectorAll('.dp-dot').forEach(function(d,i){d.classList.toggle('active',i===popupSlide);});}

  document.addEventListener('click',function(e){
    if(e.target.closest('.dp-close')||e.target.classList.contains('dk-cat-overlay')){closePopup();return;}
    if(e.target.closest('.dp-qty-minus')){var qEl=document.getElementById('dk-dp-qty');var q=parseInt(qEl.textContent)||1;if(q>1){qEl.textContent=q-1;}return;}
    if(e.target.closest('.dp-qty-plus')){var qEl=document.getElementById('dk-dp-qty');var q=parseInt(qEl.textContent)||1;qEl.textContent=q+1;return;}
    var addBtn=e.target.closest('.dp-add-project');if(addBtn){e.preventDefault();var sku=addBtn.getAttribute('data-sku'),title=addBtn.getAttribute('data-title'),price=addBtn.getAttribute('data-price'),image=addBtn.getAttribute('data-image');var qty=parseInt((document.getElementById('dk-dp-qty')||{}).textContent)||1;if(window.DenkirsProject){for(var qi=0;qi<qty;qi++){DenkirsProject.addItem(sku,title,price,image);}addBtn.classList.add('dp-added');addBtn.textContent='Added ✓';if(window.DenkirsToast)DenkirsToast(qty>1?qty+' items added':'Added to project');setTimeout(function(){addBtn.classList.remove('dp-added');addBtn.textContent='Add to Project';document.getElementById('dk-dp-qty').textContent='1';},2000);}return;}
    var tog=e.target.closest('.dp-specs-toggle');if(tog){tog.classList.toggle('open');document.getElementById('dk-dp-specs').classList.toggle('open');return;}
    if(e.target.closest('.dp-prev')){if(popupSlide>0){popupSlide--;updateSlide();}return;}
    if(e.target.closest('.dp-next')){if(popupSlide<popupPhotos.length-1){popupSlide++;updateSlide();}return;}
    var dot=e.target.closest('.dp-dot');if(dot){overlayEl.querySelectorAll('.dp-dot').forEach(function(d,i){if(d===dot)popupSlide=i;});updateSlide();}
  });
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape')closePopup();
    if(overlayEl.classList.contains('open')){
      if(e.key==='ArrowLeft'&&popupSlide>0){popupSlide--;updateSlide();}
      if(e.key==='ArrowRight'&&popupSlide<popupPhotos.length-1){popupSlide++;updateSlide();}
    }
  });

  window.addEventListener('popstate',function(e){
    if(overlayEl.classList.contains('open')){
      popupPushed=false;
      overlayEl.classList.remove('open');document.body.style.overflow='';
    }
  });

  window._dkAllProducts=null;
  function openProductFromHash(){
    if(!window._dkAllProducts)return;
    var h=location.hash.slice(1);if(!h)return;
    var m=h.match(/(?:^|&)product=([^&]+)/);if(!m)return;
    var sku=decodeURIComponent(m[1]);
    var product=null;
    for(var i=0;i<window._dkAllProducts.length;i++){
      if(window._dkAllProducts[i].sku===sku){product=window._dkAllProducts[i];break;}
    }
    if(product){popupFromHash=true;openPopup(product,null);}
  }

  function CatalogInstance(el, allProducts, heroRows){
    var system=el.getAttribute('data-system')||'';
    var currentSub='',activeFilters={},query='';

    function updateHash(){var p=[];if(currentSub)p.push('sub='+encodeURIComponent(currentSub));Object.keys(activeFilters).forEach(function(k){p.push(encodeURIComponent(k)+'='+encodeURIComponent(activeFilters[k]))});history.replaceState(null,'',p.length?'#'+p.join('&'):'#');}
    function readHash(){var h=location.hash.slice(1);if(!h)return;h.split('&').forEach(function(pair){var kv=pair.split('=');if(kv.length!==2)return;var k=decodeURIComponent(kv[0]),v=decodeURIComponent(kv[1]);if(k==='product')return;if(k==='sub'){currentSub=v;}else{activeFilters[k]=v;}});}

    function findHero(sys,sub){var exact=null,sysFb=null,glob=null;heroRows.forEach(function(r){var rid=(r.system_id||''),rsub=(r.sub_id||'');if(rid===sys&&rsub===sub)exact=r;if(rid===sys&&rsub==='')sysFb=r;if(rid===''&&rsub==='')glob=r;});return exact||sysFb||glob||null;}

    function matchesSystem(p,sys){
      if(p.system===sys)return true;
      if(p.also_systems){var as=p.also_systems.split(',');for(var i=0;i<as.length;i++){if(as[i].trim()===sys)return true;}}
      return false;
    }

    function matchesQuery(p,tokens){
      var hay=((p.sku||'')+' '+(p.title||'')+' '+(p.subcategory||'')+' '+(p.system||'')+' '+
               (p.color||'')+' '+(p.power||'')+' '+(p.color_temp||'')+' '+(p.beam||'')+' '+
               (p.ip||'')+' '+(p.material||'')+' '+(p.description||'')).toLowerCase();
      for(var i=0;i<tokens.length;i++){if(hay.indexOf(tokens[i])===-1)return false}
      return true;
    }
    function tokens_(){return query.toLowerCase().split(/\s+/).filter(Boolean)}
    function getFiltered(){
      var list=allProducts;
      if(system) list=list.filter(function(p){return matchesSystem(p,system)});
      if(currentSub) list=list.filter(function(p){return p.subcategory===currentSub});
      Object.keys(activeFilters).forEach(function(col){var val=activeFilters[col];if(val) list=list.filter(function(p){return p[col]===val});});
      if(query){var t=tokens_();list=list.filter(function(p){return matchesQuery(p,t)});}
      return list;
    }
    function countGlobal(){
      if(!query)return 0;
      var t=tokens_();
      return allProducts.filter(function(p){return matchesQuery(p,t)}).length;
    }
    function getBase(){
      var list=allProducts;
      if(system) list=list.filter(function(p){return matchesSystem(p,system)});
      if(currentSub) list=list.filter(function(p){return p.subcategory===currentSub});
      return list;
    }

    var showSystems=!el.closest('#denkirs-system');
    el.innerHTML=(showSystems?'<div class="dc-systems"></div>':'')+'<div class="dc-subs"></div><div class="dc-filters"></div><div class="dc-toolbar"><span class="dc-count"></span></div><div class="dc-grid"></div><div class="dc-empty" style="display:none">No products match your filters.</div>';

    var systemsEl=el.querySelector('.dc-systems');
    var subsEl=el.querySelector('.dc-subs');
    var filtersEl=el.querySelector('.dc-filters');
    var countEl=el.querySelector('.dc-count');
    var gridEl=el.querySelector('.dc-grid');
    var emptyEl=el.querySelector('.dc-empty');

    var SYSTEM_TABS=[
      {id:'',label:'ALL',url:'/products',badge:'',badgeClass:''},
      {id:'SMART',label:'SMART',url:'/track-system-smart',badge:'BESTSELLER',badgeClass:'dc-sys-badge-red'},
      {id:'AIR',label:'AIR',url:'/track-system-air',badge:'',badgeClass:''},
      {id:'SHINE',label:'SHINE',url:'/track-system-shine',badge:'NEW',badgeClass:'dc-sys-badge-green'},
      {id:'Spotlights',label:'SPOTLIGHTS',url:'/spotlights',badge:'',badgeClass:''},
      {id:'Waterproof',label:'WATERPROOF',url:'/waterproof-spotlights',badge:'',badgeClass:''},
      {id:'Light Sources',label:'LIGHT SOURCES',url:'/light-sources',badge:'',badgeClass:''},
      {id:'Display Equipment',label:'TRADE EQUIPMENT',url:'/trade-equipment',badge:'',badgeClass:''}
    ];

    function renderSystems(){
      if(!systemsEl)return;
      var langPrefix=getDenkirsLangPrefix();
      var h='';SYSTEM_TABS.forEach(function(tab){
        var count=tab.id?allProducts.filter(function(p){return matchesSystem(p,tab.id)}).length:allProducts.length;
        var isActive=(tab.id===system);
        h+='<a href="'+langPrefix+tab.url+'" class="dc-sys'+(isActive?' active':'')+'">'+tab.label;
        if(tab.badge)h+=' <span class="dc-sys-badge '+tab.badgeClass+'">'+tab.badge+'</span>';
        h+=' <span class="dc-sys-count">'+count+'</span></a>';
      });
      systemsEl.innerHTML=h;
    }

    var SUB_ORDER=['Track Lights','Track Lights 3000K','Track Lights 4000K','Track Lights Tunable','Wall Lights','Spotlights','Track Rails','Drivers (150W)','Lens  angle 15°','Components','Control'];
    function sortSubs(arr){
      return arr.slice().sort(function(a,b){
        var ia=SUB_ORDER.indexOf(a),ib=SUB_ORDER.indexOf(b);
        if(ia===-1)ia=999;if(ib===-1)ib=999;
        return ia-ib;
      });
    }

    function renderSubs(){
      var subs={};allProducts.forEach(function(p){if(system&&!matchesSystem(p,system))return;if(p.subcategory){if(!subs[p.subcategory])subs[p.subcategory]=0;subs[p.subcategory]++;}});
      var keys=sortSubs(Object.keys(subs));if(keys.length<=1){subsEl.innerHTML='';return;}
      var h='<button class="dc-sub'+(currentSub?'':' active')+'" data-sub="">All</button>';
      keys.forEach(function(k){h+='<button class="dc-sub'+(currentSub===k?' active':'')+'" data-sub="'+esc(k)+'">'+esc(k)+' <span style="font-size:11px;color:#9B98A0;margin-left:2px">'+subs[k]+'</span></button>';});
      subsEl.innerHTML=h;
      subsEl.querySelectorAll('.dc-sub').forEach(function(btn,bi){
        btn.addEventListener('click',function(){currentSub=bi===0?'':keys[bi-1];activeFilters={};updateHash();renderAll();});
      });
    }

    function closeDD(){el.querySelectorAll('.dc-dd').forEach(function(d){d.classList.remove('open')});el.querySelectorAll('.dc-fbtn').forEach(function(b){b.classList.remove('open')});}

    var SEARCH_HTML='<div class="dc-search"><svg class="dc-s-ico" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg><input type="text" placeholder="Search by name or SKU" autocomplete="off" spellcheck="false"><button class="dc-s-clr" type="button" aria-label="Clear">&times;</button></div>';
    var searchTimer=null;
    function bindSearch(){
      var wrap=filtersEl.querySelector('.dc-search');if(!wrap)return;
      var inp=wrap.querySelector('input'),clr=wrap.querySelector('.dc-s-clr');
      inp.value=query;wrap.classList.toggle('has',!!query);
      inp.addEventListener('input',function(){
        query=this.value;wrap.classList.toggle('has',!!query);
        clearTimeout(searchTimer);
        searchTimer=setTimeout(function(){renderCount();renderGrid();},110);
      });
      inp.addEventListener('keydown',function(e){
        if(e.key==='Escape'){query='';this.value='';wrap.classList.remove('has');renderCount();renderGrid();}
      });
      clr.addEventListener('click',function(){
        query='';inp.value='';wrap.classList.remove('has');inp.focus();renderCount();renderGrid();
      });
    }
    function renderFilters(){
      var base=getBase();if(!base.length){filtersEl.innerHTML=SEARCH_HTML;bindSearch();return;}
      var heroData=findHero(system,currentSub);
      var filterCols=[];
      if(heroData&&heroData.filters&&heroData.filters.trim()){heroData.filters.split(',').forEach(function(s){var c=s.trim();if(c)filterCols.push(c);});}
      else{filterCols=Object.keys(FILTER_MAP);}
      var h='',hasAny=false;
      filterCols.forEach(function(col){
        var fc=colLabel(col);var vals={};base.forEach(function(p){var v=p[col];if(v){if(!vals[v])vals[v]=0;vals[v]++;}});
        var keys=Object.keys(vals);if(keys.length<=1)return;
        keys.sort(function(a,b){var na=parseFloat(a),nb=parseFloat(b);return(!isNaN(na)&&!isNaN(nb))?na-nb:a.localeCompare(b)});
        hasAny=true;var av=activeFilters[col]||'';var dv=av?(fc.prefix||'')+av+(fc.suffix||''):'';
        h+='<div class="dc-fg" data-col="'+col+'"><button class="dc-fbtn'+(av?' has-val':'')+'">'+(av?dv:fc.label)+' <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 4.5L6 7.5L9 4.5"/></svg></button><div class="dc-dd">';
        if(av)h+='<div class="dc-opt selected" data-col="'+col+'" data-val="">All '+fc.label+'</div>';
        keys.forEach(function(k){var display=(fc.prefix||'')+k+(fc.suffix||'');h+='<div class="dc-opt'+(av===k?' selected':'')+'" data-col="'+col+'" data-val="'+esc(k)+'">'+esc(display)+'<span class="dc-opt-cnt">'+vals[k]+'</span></div>';});
        h+='</div></div>';
      });
      if(Object.keys(activeFilters).length>0)h+='<button class="dc-reset">Reset filters</button>';
      filtersEl.innerHTML=(hasAny?h:'')+SEARCH_HTML;bindSearch();

      el.querySelectorAll('.dc-fbtn').forEach(function(btn){btn.addEventListener('click',function(e){e.stopPropagation();var dd=this.parentElement.querySelector('.dc-dd');var isOpen=dd.classList.contains('open');closeDD();if(!isOpen){dd.classList.add('open');this.classList.add('open');}});});
      el.querySelectorAll('.dc-opt').forEach(function(opt){opt.addEventListener('click',function(){var fg=this.closest('.dc-fg');var c=fg.getAttribute('data-col');var v=this.getAttribute('data-val');if(v)activeFilters[c]=v;else delete activeFilters[c];closeDD();updateHash();renderFilters();renderGrid();renderCount();});});
      var rb=el.querySelector('.dc-reset');if(rb)rb.addEventListener('click',function(){activeFilters={};updateHash();renderFilters();renderGrid();renderCount();});
    }

    function renderCount(){var items=getFiltered();countEl.textContent=items.length+(items.length===1?' product':' products');}

    function renderGrid(){
      var items=getFiltered();
      if(!items.length){
        gridEl.innerHTML='';emptyEl.style.display='block';
        if(query){
          var g=countGlobal();
          emptyEl.innerHTML='Nothing found for &laquo;'+esc(query)+'&raquo;'+
            ((g>0&&(system||currentSub))?' &middot; <button class="dc-reset" type="button">Search in all products ('+g+')</button>':'');
          var rb=emptyEl.querySelector('.dc-reset');
          if(rb)rb.addEventListener('click',function(){
            var pref=(window.getDenkirsLangPrefix?getDenkirsLangPrefix():'');
            location.href=pref+'/products?q='+encodeURIComponent(query);
          });
        } else { emptyEl.textContent='No products match your filters.'; }
        return;
      }
      emptyEl.style.display='none';
      var heroData=findHero(system,currentSub);
      var filterCols=[];
      if(currentSub&&heroData&&heroData.filters&&heroData.filters.trim()){heroData.filters.split(',').forEach(function(s){var c=s.trim();if(c)filterCols.push(c);});}
      else if(!currentSub){filterCols=DEFAULT_PILLS.slice();}
      var h='';items.forEach(function(p){
        var photo=fixImg(p.photo_1||'',600);
        h+='<div class="dc-card" tabindex="0"><div class="dc-card-img">';
        if(photo)h+='<img src="'+esc(photo)+'" alt="'+esc(p.title)+'" loading="lazy">';
        h+='</div><div class="dc-card-body"><div class="dc-card-sku">'+esc(p.sku)+'</div><div class="dc-card-title">'+esc(p.title)+'</div>';
        if(p.price){h+='<div class="dc-card-price">€'+p.price;if(p.stock_status)h+=stockBadgeHTML(p,false);h+='</div>';}
        else if(p.stock_status){h+=stockBadgeHTML(p,false);}
        if(filterCols.length){
          var pillsH='';filterCols.forEach(function(col){var v=p[col];if(!v)return;var fm=FILTER_MAP[col]||{};pillsH+='<span class="dc-card-pill">'+esc((fm.prefix||'')+v+(fm.suffix||''))+'</span>';});
          if(pillsH)h+='<div class="dc-card-pills">'+pillsH+'</div>';
        }else if(p.color){h+='<div class="dc-card-color">'+esc(p.color)+'</div>';}
        h+='</div></div>';
      });
      gridEl.innerHTML=h;
      var filtered=items;
      var heroData=findHero(system,currentSub);
      var pillCols=null;
      if(heroData&&heroData.pills&&heroData.pills.trim()){pillCols=[];heroData.pills.split(',').forEach(function(s){var c=s.trim();if(c)pillCols.push(c);});}
      gridEl.querySelectorAll('.dc-card').forEach(function(card,idx){
        card.addEventListener('click',function(){openPopup(filtered[idx],pillCols)});
        card.addEventListener('keydown',function(e){if(e.key==='Enter')openPopup(filtered[idx],pillCols)});
      });
    }

    function applyQueryFromUrl(){
      var m=location.search.match(/[?&]q=([^&]*)/);
      if(m){try{query=decodeURIComponent(m[1].replace(/\+/g,' '))}catch(e){}}
    }
    function renderAll(){
      renderSystems();renderSubs();renderFilters();renderCount();renderGrid();
      subsEl.querySelectorAll('.dc-sub').forEach(function(b){b.classList.remove('active');});
      var allSubBtns=subsEl.querySelectorAll('.dc-sub');
      var keys2=[];allProducts.forEach(function(p){if(system&&!matchesSystem(p,system))return;if(p.subcategory&&keys2.indexOf(p.subcategory)===-1)keys2.push(p.subcategory);});
      keys2=sortSubs(keys2);
      allSubBtns.forEach(function(b,i){if(i===0&&!currentSub)b.classList.add('active');if(i>0&&keys2[i-1]===currentSub)b.classList.add('active');});
    }

    document.addEventListener('click',function(e){if(!e.target.closest('.dc-fg'))closeDD();});

    readHash();
    applyQueryFromUrl();
    renderAll();

    window.addEventListener('denkirs-lang-changed',function(){renderSystems();});
  }

  var instances=[];
  var renderedFromCache=false;

  function initCatalog(productsCsv,heroCsv,isCache){
    var allProducts=parseCSV(productsCsv);
    var heroRows=parseCSV(heroCsv||'');
    if(!allProducts.length)return;
    window._dkAllProducts=allProducts;
    embeds.forEach(function(el){
      el.classList.add('dk-cat');
      new CatalogInstance(el, allProducts, heroRows);
    });
    openProductFromHash();
  }

  try{
    var cachedP=localStorage.getItem('dk_csv_products');
    var cachedH=localStorage.getItem('dk_csv_hero');
    if(cachedP){
      initCatalog(cachedP,cachedH,true);
      renderedFromCache=true;
    }
  }catch(e){}

  var freshPromise=window._dkCsvPromise||Promise.all([
    fetch(PRODUCTS_CSV).then(function(r){return r.text()}),
    fetch(HERO_CSV).then(function(r){return r.text()}).catch(function(){return''})
  ]);
  freshPromise.then(function(results){
    if(renderedFromCache&&results[0]===cachedP&&results[1]===cachedH){
      return;
    }
    if(renderedFromCache){
      embeds.forEach(function(el){el.innerHTML='';el.classList.remove('dk-cat');});
    }
    initCatalog(results[0],results[1],false);
  }).catch(function(err){
    if(!renderedFromCache)console.error('DENKIRS Catalog embed error:',err);
  });
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
})();
