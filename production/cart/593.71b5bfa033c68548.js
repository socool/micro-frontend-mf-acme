(self.webpackChunkcart=self.webpackChunkcart||[]).push([[593],{6593:(Ge,H,m)=>{m.r(H),m.d(H,{BrowserModule:()=>De,By:()=>Ne,DomSanitizer:()=>te,EVENT_MANAGER_PLUGINS:()=>y,EventManager:()=>S,HAMMER_GESTURE_CONFIG:()=>_,HAMMER_LOADER:()=>N,HammerGestureConfig:()=>Q,HammerModule:()=>He,Meta:()=>W,REMOVE_STYLES_ON_COMPONENT_DESTROY:()=>j,Title:()=>X,TransferState:()=>Ve,VERSION:()=>Fe,bootstrapApplication:()=>ye,createApplication:()=>Ee,disableDebugTools:()=>Ie,enableDebugTools:()=>be,makeStateKey:()=>xe,platformBrowser:()=>Me,provideClientHydration:()=>Be,provideProtractorTestingSupport:()=>ve,withNoDomReuse:()=>Ue,withNoHttpTransferCache:()=>je,\u0275BrowserDomAdapter:()=>E,\u0275BrowserGetTestability:()=>k,\u0275DomEventsPlugin:()=>V,\u0275DomRendererFactory2:()=>C,\u0275DomSanitizerImpl:()=>P,\u0275HammerGesturesPlugin:()=>ee,\u0275INTERNAL_BROWSER_PLATFORM_PROVIDERS:()=>b,\u0275KeyEventsPlugin:()=>z,\u0275SharedStylesHost:()=>D,\u0275getDOM:()=>u.\u0275getDOM,\u0275initDomAdapter:()=>$});var o=m(6151),u=m(4817),re=m(6564);class oe extends u.\u0275DomAdapter{constructor(){super(...arguments),this.supportsDOMEvents=!0}}class E extends oe{static makeCurrent(){(0,u.\u0275setRootDomAdapter)(new E)}onAndCancel(t,s,e){return t.addEventListener(s,e),()=>{t.removeEventListener(s,e)}}dispatchEvent(t,s){t.dispatchEvent(s)}remove(t){t.parentNode&&t.parentNode.removeChild(t)}createElement(t,s){return(s=s||this.getDefaultDocument()).createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,s){return"window"===s?window:"document"===s?t:"body"===s?t.body:null}getBaseHref(t){const s=function se(){return g=g||document.querySelector("base"),g?g.getAttribute("href"):null}();return null==s?null:function ie(r){v=v||document.createElement("a"),v.setAttribute("href",r);const t=v.pathname;return"/"===t.charAt(0)?t:`/${t}`}(s)}resetBaseElement(){g=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return(0,u.\u0275parseCookieValue)(document.cookie,t)}}let v,g=null;class k{addToWindow(t){o.\u0275global.getAngularTestability=(e,n=!0)=>{const i=t.findTestabilityInTree(e,n);if(null==i)throw new o.\u0275RuntimeError(5103,!1);return i},o.\u0275global.getAllAngularTestabilities=()=>t.getAllTestabilities(),o.\u0275global.getAllAngularRootElements=()=>t.getAllRootElements(),o.\u0275global.frameworkStabilizers||(o.\u0275global.frameworkStabilizers=[]),o.\u0275global.frameworkStabilizers.push(e=>{const n=o.\u0275global.getAllAngularTestabilities();let i=n.length,a=!1;const l=function(c){a=a||c,i--,0==i&&e(a)};n.forEach(c=>{c.whenStable(l)})})}findTestabilityInTree(t,s,e){return null==s?null:t.getTestability(s)??(e?(0,u.\u0275getDOM)().isShadowRoot(s)?this.findTestabilityInTree(t,s.host,!0):this.findTestabilityInTree(t,s.parentElement,!0):null)}}let ae=(()=>{var r;class t{build(){return new XMLHttpRequest}}return(r=t).\u0275fac=function(e){return new(e||r)},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac}),t})();const y=new o.InjectionToken("EventManagerPlugins");let S=(()=>{var r;class t{constructor(e,n){this._zone=n,this._eventNameToPlugin=new Map,e.forEach(i=>{i.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,n,i){return this._findPluginFor(n).addEventListener(e,n,i)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(a=>a.supports(e)),!n)throw new o.\u0275RuntimeError(5101,!1);return this._eventNameToPlugin.set(e,n),n}}return(r=t).\u0275fac=function(e){return new(e||r)(o.\u0275\u0275inject(y),o.\u0275\u0275inject(o.NgZone))},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac}),t})();class M{constructor(t){this._doc=t}}const w="ng-app-id";let D=(()=>{var r;class t{constructor(e,n,i,a={}){this.doc=e,this.appId=n,this.nonce=i,this.platformId=a,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=(0,u.isPlatformServer)(a),this.resetHostNodes()}addStyles(e){for(const n of e)1===this.changeUsageCount(n,1)&&this.onStyleAdded(n)}removeStyles(e){for(const n of e)this.changeUsageCount(n,-1)<=0&&this.onStyleRemoved(n)}ngOnDestroy(){const e=this.styleNodesInDOM;e&&(e.forEach(n=>n.remove()),e.clear());for(const n of this.getAllStyles())this.onStyleRemoved(n);this.resetHostNodes()}addHost(e){this.hostNodes.add(e);for(const n of this.getAllStyles())this.addStyleToHost(e,n)}removeHost(e){this.hostNodes.delete(e)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(e){for(const n of this.hostNodes)this.addStyleToHost(n,e)}onStyleRemoved(e){const n=this.styleRef;n.get(e)?.elements?.forEach(i=>i.remove()),n.delete(e)}collectServerRenderedStyles(){const e=this.doc.head?.querySelectorAll(`style[${w}="${this.appId}"]`);if(e?.length){const n=new Map;return e.forEach(i=>{null!=i.textContent&&n.set(i.textContent,i)}),n}return null}changeUsageCount(e,n){const i=this.styleRef;if(i.has(e)){const a=i.get(e);return a.usage+=n,a.usage}return i.set(e,{usage:n,elements:[]}),n}getStyleElement(e,n){const i=this.styleNodesInDOM,a=i?.get(n);if(a?.parentNode===e)return i.delete(n),a.removeAttribute(w),a;{const l=this.doc.createElement("style");return this.nonce&&l.setAttribute("nonce",this.nonce),l.textContent=n,this.platformIsServer&&l.setAttribute(w,this.appId),l}}addStyleToHost(e,n){const i=this.getStyleElement(e,n);e.appendChild(i);const a=this.styleRef,l=a.get(n)?.elements;l?l.push(i):a.set(n,{elements:[i],usage:1})}resetHostNodes(){const e=this.hostNodes;e.clear(),e.add(this.doc.head)}}return(r=t).\u0275fac=function(e){return new(e||r)(o.\u0275\u0275inject(u.DOCUMENT),o.\u0275\u0275inject(o.APP_ID),o.\u0275\u0275inject(o.CSP_NONCE,8),o.\u0275\u0275inject(o.PLATFORM_ID))},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac}),t})();const T={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},R=/%COMP%/g,U="%COMP%",le=`_nghost-${U}`,ce=`_ngcontent-${U}`,j=new o.InjectionToken("RemoveStylesOnCompDestroy",{providedIn:"root",factory:()=>!1});function B(r,t){return t.map(s=>s.replace(R,r))}let C=(()=>{var r;class t{constructor(e,n,i,a,l,c,d,f=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=i,this.removeStylesOnCompDestroy=a,this.doc=l,this.platformId=c,this.ngZone=d,this.nonce=f,this.rendererByCompId=new Map,this.platformIsServer=(0,u.isPlatformServer)(c),this.defaultRenderer=new A(e,l,d,this.platformIsServer)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===o.ViewEncapsulation.ShadowDom&&(n={...n,encapsulation:o.ViewEncapsulation.Emulated});const i=this.getOrCreateRenderer(e,n);return i instanceof x?i.applyToHost(e):i instanceof O&&i.applyStyles(),i}getOrCreateRenderer(e,n){const i=this.rendererByCompId;let a=i.get(n.id);if(!a){const l=this.doc,c=this.ngZone,d=this.eventManager,f=this.sharedStylesHost,h=this.removeStylesOnCompDestroy,L=this.platformIsServer;switch(n.encapsulation){case o.ViewEncapsulation.Emulated:a=new x(d,f,n,this.appId,h,l,c,L);break;case o.ViewEncapsulation.ShadowDom:return new pe(d,f,e,n,l,c,this.nonce,L);default:a=new O(d,f,n,h,l,c,L)}i.set(n.id,a)}return a}ngOnDestroy(){this.rendererByCompId.clear()}}return(r=t).\u0275fac=function(e){return new(e||r)(o.\u0275\u0275inject(S),o.\u0275\u0275inject(D),o.\u0275\u0275inject(o.APP_ID),o.\u0275\u0275inject(j),o.\u0275\u0275inject(u.DOCUMENT),o.\u0275\u0275inject(o.PLATFORM_ID),o.\u0275\u0275inject(o.NgZone),o.\u0275\u0275inject(o.CSP_NONCE))},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac}),t})();class A{constructor(t,s,e,n){this.eventManager=t,this.doc=s,this.ngZone=e,this.platformIsServer=n,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(t,s){return s?this.doc.createElementNS(T[s]||s,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,s){(F(t)?t.content:t).appendChild(s)}insertBefore(t,s,e){t&&(F(t)?t.content:t).insertBefore(s,e)}removeChild(t,s){t&&t.removeChild(s)}selectRootElement(t,s){let e="string"==typeof t?this.doc.querySelector(t):t;if(!e)throw new o.\u0275RuntimeError(-5104,!1);return s||(e.textContent=""),e}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,s,e,n){if(n){s=n+":"+s;const i=T[n];i?t.setAttributeNS(i,s,e):t.setAttribute(s,e)}else t.setAttribute(s,e)}removeAttribute(t,s,e){if(e){const n=T[e];n?t.removeAttributeNS(n,s):t.removeAttribute(`${e}:${s}`)}else t.removeAttribute(s)}addClass(t,s){t.classList.add(s)}removeClass(t,s){t.classList.remove(s)}setStyle(t,s,e,n){n&(o.RendererStyleFlags2.DashCase|o.RendererStyleFlags2.Important)?t.style.setProperty(s,e,n&o.RendererStyleFlags2.Important?"important":""):t.style[s]=e}removeStyle(t,s,e){e&o.RendererStyleFlags2.DashCase?t.style.removeProperty(s):t.style[s]=""}setProperty(t,s,e){t[s]=e}setValue(t,s){t.nodeValue=s}listen(t,s,e){if("string"==typeof t&&!(t=(0,u.\u0275getDOM)().getGlobalEventTarget(this.doc,t)))throw new Error(`Unsupported event target ${t} for event ${s}`);return this.eventManager.addEventListener(t,s,this.decoratePreventDefault(e))}decoratePreventDefault(t){return s=>{if("__ngUnwrap__"===s)return t;!1===(this.platformIsServer?this.ngZone.runGuarded(()=>t(s)):t(s))&&s.preventDefault()}}}function F(r){return"TEMPLATE"===r.tagName&&void 0!==r.content}class pe extends A{constructor(t,s,e,n,i,a,l,c){super(t,i,a,c),this.sharedStylesHost=s,this.hostEl=e,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const d=B(n.id,n.styles);for(const f of d){const h=document.createElement("style");l&&h.setAttribute("nonce",l),h.textContent=f,this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,s){return super.appendChild(this.nodeOrShadowRoot(t),s)}insertBefore(t,s,e){return super.insertBefore(this.nodeOrShadowRoot(t),s,e)}removeChild(t,s){return super.removeChild(this.nodeOrShadowRoot(t),s)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}}class O extends A{constructor(t,s,e,n,i,a,l,c){super(t,i,a,l),this.sharedStylesHost=s,this.removeStylesOnCompDestroy=n,this.styles=c?B(c,e.styles):e.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}}class x extends O{constructor(t,s,e,n,i,a,l,c){const d=n+"-"+e.id;super(t,s,e,i,a,l,c,d),this.contentAttr=function de(r){return ce.replace(R,r)}(d),this.hostAttr=function fe(r){return le.replace(R,r)}(d)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,s){const e=super.createElement(t,s);return super.setAttribute(e,this.contentAttr,""),e}}let V=(()=>{var r;class t extends M{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,i){return e.addEventListener(n,i,!1),()=>this.removeEventListener(e,n,i)}removeEventListener(e,n,i){return e.removeEventListener(n,i)}}return(r=t).\u0275fac=function(e){return new(e||r)(o.\u0275\u0275inject(u.DOCUMENT))},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac}),t})();const G=["alt","control","meta","shift"],me={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},ge={alt:r=>r.altKey,control:r=>r.ctrlKey,meta:r=>r.metaKey,shift:r=>r.shiftKey};let z=(()=>{var r;class t extends M{constructor(e){super(e)}supports(e){return null!=t.parseEventName(e)}addEventListener(e,n,i){const a=t.parseEventName(n),l=t.eventCallback(a.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,u.\u0275getDOM)().onAndCancel(e,a.domEventName,l))}static parseEventName(e){const n=e.toLowerCase().split("."),i=n.shift();if(0===n.length||"keydown"!==i&&"keyup"!==i)return null;const a=t._normalizeKey(n.pop());let l="",c=n.indexOf("code");if(c>-1&&(n.splice(c,1),l="code."),G.forEach(f=>{const h=n.indexOf(f);h>-1&&(n.splice(h,1),l+=f+".")}),l+=a,0!=n.length||0===a.length)return null;const d={};return d.domEventName=i,d.fullKey=l,d}static matchEventFullKeyCode(e,n){let i=me[e.key]||e.key,a="";return n.indexOf("code.")>-1&&(i=e.code,a="code."),!(null==i||!i)&&(i=i.toLowerCase()," "===i?i="space":"."===i&&(i="dot"),G.forEach(l=>{l!==i&&(0,ge[l])(e)&&(a+=l+".")}),a+=i,a===n)}static eventCallback(e,n,i){return a=>{t.matchEventFullKeyCode(a,e)&&i.runGuarded(()=>n(a))}}static _normalizeKey(e){return"esc"===e?"escape":e}}return(r=t).\u0275fac=function(e){return new(e||r)(o.\u0275\u0275inject(u.DOCUMENT))},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac}),t})();function ye(r,t){return(0,o.\u0275internalCreateApplication)({rootComponent:r,...K(t)})}function Ee(r){return(0,o.\u0275internalCreateApplication)(K(r))}function K(r){return{appProviders:[...Y,...r?.providers??[]],platformProviders:b}}function ve(){return[...Z]}function $(){E.makeCurrent()}const b=[{provide:o.PLATFORM_ID,useValue:u.\u0275PLATFORM_BROWSER_ID},{provide:o.PLATFORM_INITIALIZER,useValue:$,multi:!0},{provide:u.DOCUMENT,useFactory:function Se(){return(0,o.\u0275setDocument)(document),document},deps:[]}],Me=(0,o.createPlatformFactory)(o.platformCore,"browser",b),we=new o.InjectionToken(""),Z=[{provide:o.\u0275TESTABILITY_GETTER,useClass:k,deps:[]},{provide:o.\u0275TESTABILITY,useClass:o.Testability,deps:[o.NgZone,o.TestabilityRegistry,o.\u0275TESTABILITY_GETTER]},{provide:o.Testability,useClass:o.Testability,deps:[o.NgZone,o.TestabilityRegistry,o.\u0275TESTABILITY_GETTER]}],Y=[{provide:o.\u0275INJECTOR_SCOPE,useValue:"root"},{provide:o.ErrorHandler,useFactory:function _e(){return new o.ErrorHandler},deps:[]},{provide:y,useClass:V,multi:!0,deps:[u.DOCUMENT,o.NgZone,o.PLATFORM_ID]},{provide:y,useClass:z,multi:!0,deps:[u.DOCUMENT]},C,D,S,{provide:o.RendererFactory2,useExisting:C},{provide:u.XhrFactory,useClass:ae,deps:[]},[]];let De=(()=>{var r;class t{constructor(e){}static withServerTransition(e){return{ngModule:t,providers:[{provide:o.APP_ID,useValue:e.appId}]}}}return(r=t).\u0275fac=function(e){return new(e||r)(o.\u0275\u0275inject(we,12))},r.\u0275mod=o.\u0275\u0275defineNgModule({type:r}),r.\u0275inj=o.\u0275\u0275defineInjector({providers:[...Y,...Z],imports:[u.CommonModule,o.ApplicationModule]}),t})(),W=(()=>{var r;class t{constructor(e){this._doc=e,this._dom=(0,u.\u0275getDOM)()}addTag(e,n=!1){return e?this._getOrCreateElement(e,n):null}addTags(e,n=!1){return e?e.reduce((i,a)=>(a&&i.push(this._getOrCreateElement(a,n)),i),[]):[]}getTag(e){return e&&this._doc.querySelector(`meta[${e}]`)||null}getTags(e){if(!e)return[];const n=this._doc.querySelectorAll(`meta[${e}]`);return n?[].slice.call(n):[]}updateTag(e,n){if(!e)return null;n=n||this._parseSelector(e);const i=this.getTag(n);return i?this._setMetaElementAttributes(e,i):this._getOrCreateElement(e,!0)}removeTag(e){this.removeTagElement(this.getTag(e))}removeTagElement(e){e&&this._dom.remove(e)}_getOrCreateElement(e,n=!1){if(!n){const l=this._parseSelector(e),c=this.getTags(l).filter(d=>this._containsAttributes(e,d))[0];if(void 0!==c)return c}const i=this._dom.createElement("meta");return this._setMetaElementAttributes(e,i),this._doc.getElementsByTagName("head")[0].appendChild(i),i}_setMetaElementAttributes(e,n){return Object.keys(e).forEach(i=>n.setAttribute(this._getMetaKeyMap(i),e[i])),n}_parseSelector(e){const n=e.name?"name":"property";return`${n}="${e[n]}"`}_containsAttributes(e,n){return Object.keys(e).every(i=>n.getAttribute(this._getMetaKeyMap(i))===e[i])}_getMetaKeyMap(e){return Re[e]||e}}return(r=t).\u0275fac=function(e){return new(e||r)(o.\u0275\u0275inject(u.DOCUMENT))},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:function(e){let n=null;return n=e?new e:function Te(){return new W((0,o.\u0275\u0275inject)(u.DOCUMENT))}(),n},providedIn:"root"}),t})();const Re={httpEquiv:"http-equiv"};let X=(()=>{var r;class t{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}}return(r=t).\u0275fac=function(e){return new(e||r)(o.\u0275\u0275inject(u.DOCUMENT))},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:function(e){let n=null;return n=e?new e:function Ce(){return new X((0,o.\u0275\u0275inject)(u.DOCUMENT))}(),n},providedIn:"root"}),t})();function J(r,t){(typeof COMPILED>"u"||!COMPILED)&&((o.\u0275global.ng=o.\u0275global.ng||{})[r]=t)}const p=typeof window<"u"&&window||{};class Ae{constructor(t,s){this.msPerTick=t,this.numTicks=s}}class Oe{constructor(t){this.appRef=t.injector.get(o.ApplicationRef)}timeChangeDetection(t){const s=t&&t.record,e="Change Detection",n=null!=p.console.profile;s&&n&&p.console.profile(e);const i=I();let a=0;for(;a<5||I()-i<500;)this.appRef.tick(),a++;const l=I();s&&n&&p.console.profileEnd(e);const c=(l-i)/a;return p.console.log(`ran ${a} change detection cycles`),p.console.log(`${c.toFixed(2)} ms per check`),new Ae(c,a)}}function I(){return p.performance&&p.performance.now?p.performance.now():(new Date).getTime()}const q="profiler";function be(r){return J(q,new Oe(r)),r}function Ie(){J(q,null)}class Ne{static all(){return()=>!0}static css(t){return s=>null!=s.nativeElement&&function Pe(r,t){return!!(0,u.\u0275getDOM)().isElementNode(r)&&(r.matches&&r.matches(t)||r.msMatchesSelector&&r.msMatchesSelector(t)||r.webkitMatchesSelector&&r.webkitMatchesSelector(t))}(s.nativeElement,t)}static directive(t){return s=>-1!==s.providerTokens.indexOf(t)}}const Le={pan:!0,panstart:!0,panmove:!0,panend:!0,pancancel:!0,panleft:!0,panright:!0,panup:!0,pandown:!0,pinch:!0,pinchstart:!0,pinchmove:!0,pinchend:!0,pinchcancel:!0,pinchin:!0,pinchout:!0,press:!0,pressup:!0,rotate:!0,rotatestart:!0,rotatemove:!0,rotateend:!0,rotatecancel:!0,swipe:!0,swipeleft:!0,swiperight:!0,swipeup:!0,swipedown:!0,tap:!0,doubletap:!0},_=new o.InjectionToken("HammerGestureConfig"),N=new o.InjectionToken("HammerLoader");let Q=(()=>{var r;class t{constructor(){this.events=[],this.overrides={}}buildHammer(e){const n=new Hammer(e,this.options);n.get("pinch").set({enable:!0}),n.get("rotate").set({enable:!0});for(const i in this.overrides)n.get(i).set(this.overrides[i]);return n}}return(r=t).\u0275fac=function(e){return new(e||r)},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac}),t})(),ee=(()=>{var r;class t extends M{constructor(e,n,i,a){super(e),this._config=n,this.console=i,this.loader=a,this._loaderPromise=null}supports(e){return!(!Le.hasOwnProperty(e.toLowerCase())&&!this.isCustomEvent(e)||!window.Hammer&&!this.loader)}addEventListener(e,n,i){const a=this.manager.getZone();if(n=n.toLowerCase(),!window.Hammer&&this.loader){this._loaderPromise=this._loaderPromise||a.runOutsideAngular(()=>this.loader());let l=!1,c=()=>{l=!0};return a.runOutsideAngular(()=>this._loaderPromise.then(()=>{window.Hammer?l||(c=this.addEventListener(e,n,i)):c=()=>{}}).catch(()=>{c=()=>{}})),()=>{c()}}return a.runOutsideAngular(()=>{const l=this._config.buildHammer(e),c=function(d){a.runGuarded(function(){i(d)})};return l.on(n,c),()=>{l.off(n,c),"function"==typeof l.destroy&&l.destroy()}})}isCustomEvent(e){return this._config.events.indexOf(e)>-1}}return(r=t).\u0275fac=function(e){return new(e||r)(o.\u0275\u0275inject(u.DOCUMENT),o.\u0275\u0275inject(_),o.\u0275\u0275inject(o.\u0275Console),o.\u0275\u0275inject(N,8))},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac}),t})(),He=(()=>{var r;class t{}return(r=t).\u0275fac=function(e){return new(e||r)},r.\u0275mod=o.\u0275\u0275defineNgModule({type:r}),r.\u0275inj=o.\u0275\u0275defineInjector({providers:[{provide:y,useClass:ee,multi:!0,deps:[u.DOCUMENT,_,o.\u0275Console,[new o.Optional,N]]},{provide:_,useClass:Q,deps:[]}]}),t})(),te=(()=>{var r;class t{}return(r=t).\u0275fac=function(e){return new(e||r)},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:function(e){let n=null;return n=e?new(e||r):o.\u0275\u0275inject(P),n},providedIn:"root"}),t})(),P=(()=>{var r;class t extends te{constructor(e){super(),this._doc=e}sanitize(e,n){if(null==n)return null;switch(e){case o.SecurityContext.NONE:return n;case o.SecurityContext.HTML:return(0,o.\u0275allowSanitizationBypassAndThrow)(n,"HTML")?(0,o.\u0275unwrapSafeValue)(n):(0,o.\u0275_sanitizeHtml)(this._doc,String(n)).toString();case o.SecurityContext.STYLE:return(0,o.\u0275allowSanitizationBypassAndThrow)(n,"Style")?(0,o.\u0275unwrapSafeValue)(n):n;case o.SecurityContext.SCRIPT:if((0,o.\u0275allowSanitizationBypassAndThrow)(n,"Script"))return(0,o.\u0275unwrapSafeValue)(n);throw new o.\u0275RuntimeError(5200,!1);case o.SecurityContext.URL:return(0,o.\u0275allowSanitizationBypassAndThrow)(n,"URL")?(0,o.\u0275unwrapSafeValue)(n):(0,o.\u0275_sanitizeUrl)(String(n));case o.SecurityContext.RESOURCE_URL:if((0,o.\u0275allowSanitizationBypassAndThrow)(n,"ResourceURL"))return(0,o.\u0275unwrapSafeValue)(n);throw new o.\u0275RuntimeError(5201,!1);default:throw new o.\u0275RuntimeError(5202,!1)}}bypassSecurityTrustHtml(e){return(0,o.\u0275bypassSanitizationTrustHtml)(e)}bypassSecurityTrustStyle(e){return(0,o.\u0275bypassSanitizationTrustStyle)(e)}bypassSecurityTrustScript(e){return(0,o.\u0275bypassSanitizationTrustScript)(e)}bypassSecurityTrustUrl(e){return(0,o.\u0275bypassSanitizationTrustUrl)(e)}bypassSecurityTrustResourceUrl(e){return(0,o.\u0275bypassSanitizationTrustResourceUrl)(e)}}return(r=t).\u0275fac=function(e){return new(e||r)(o.\u0275\u0275inject(u.DOCUMENT))},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:function(e){let n=null;return n=e?new e:function ke(r){return new P(r.get(u.DOCUMENT))}(o.\u0275\u0275inject(o.Injector)),n},providedIn:"root"}),t})();function ne(r,t=[]){return{\u0275kind:r,\u0275providers:t}}function Ue(){return ne(0)}function je(){return ne(1)}function Be(...r){const t=[],s=new Set;for(const{\u0275providers:e,\u0275kind:n}of r)s.add(n),e.length&&t.push(e);return(0,o.makeEnvironmentProviders)([[],s.has(0)?[]:(0,o.\u0275withDomHydration)(),s.has(1)?[]:(0,re.\u0275withHttpTransferCache)(),t])}const Fe=new o.Version("16.2.1"),xe=o.makeStateKey,Ve=o.TransferState}}]);