(self.webpackChunkroyal_hackaway=self.webpackChunkroyal_hackaway||[]).push([[900],{3473:function(e,t,a){"use strict";var n=a(7294);function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,a){return t&&i(e.prototype,t),a&&i(e,a),e}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=l(e);if(t){var r=l(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return d(this,a)}}function m(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return f(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,a=String(e);if(0===t)return a;var n=a.match(/(.*?)([0-9]+)(.*)/),r=n?n[1]:"",i=n?n[3]:"",o=n?n[2]:a,s=o.length>=t?o:(m(Array(t)).map((function(){return"0"})).join("")+o).slice(-1*t);return"".concat(r).concat(s).concat(i)}var h={daysInHours:!1,zeroPadTime:2};function g(e,t){var a=e.days,n=e.hours,r=e.minutes,i=e.seconds,o=Object.assign(Object.assign({},h),t),s=o.daysInHours,l=o.zeroPadTime,c=o.zeroPadDays,d=void 0===c?l:c,u=Math.min(2,l),m=s?p(n+24*a,l):p(n,u);return{days:s?"":p(a,d),hours:m,minutes:p(r,u),seconds:p(i,u)}}var v=function(e){s(a,e);var t=u(a);function a(){var e;return r(this,a),(e=t.apply(this,arguments)).state={count:e.props.count||3},e.startCountdown=function(){e.interval=window.setInterval((function(){0===e.state.count-1?(e.stopCountdown(),e.props.onComplete&&e.props.onComplete()):e.setState((function(e){return{count:e.count-1}}))}),1e3)},e.stopCountdown=function(){clearInterval(e.interval)},e.addTime=function(t){e.stopCountdown(),e.setState((function(e){return{count:e.count+t}}),e.startCountdown)},e}return o(a,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?(0,n.cloneElement)(this.props.children,{count:this.state.count}):null}}]),a}(n.Component),y=function(e){s(a,e);var t=u(a);function a(e){var i;if(r(this,a),(i=t.call(this,e)).mounted=!1,i.initialTimestamp=i.calcOffsetStartTimestamp(),i.offsetStartTimestamp=i.props.autoStart?0:i.initialTimestamp,i.offsetTime=0,i.legacyMode=!1,i.legacyCountdownRef=(0,n.createRef)(),i.tick=function(){var e=i.calcTimeDelta(),t=e.completed&&!i.props.overtime?void 0:i.props.onTick;i.setTimeDeltaState(e,void 0,t)},i.start=function(){if(!i.isStarted()){var e=i.offsetStartTimestamp;i.offsetStartTimestamp=0,i.offsetTime+=e?i.calcOffsetStartTimestamp()-e:0;var t=i.calcTimeDelta();i.setTimeDeltaState(t,"STARTED",i.props.onStart),i.props.controlled||t.completed&&!i.props.overtime||(i.clearTimer(),i.interval=window.setInterval(i.tick,i.props.intervalDelay))}},i.pause=function(){i.isPaused()||(i.clearTimer(),i.offsetStartTimestamp=i.calcOffsetStartTimestamp(),i.setTimeDeltaState(i.state.timeDelta,"PAUSED",i.props.onPause))},i.stop=function(){i.isStopped()||(i.clearTimer(),i.offsetStartTimestamp=i.calcOffsetStartTimestamp(),i.offsetTime=i.offsetStartTimestamp-i.initialTimestamp,i.setTimeDeltaState(i.calcTimeDelta(),"STOPPED",i.props.onStop))},i.isStarted=function(){return i.isStatus("STARTED")},i.isPaused=function(){return i.isStatus("PAUSED")},i.isStopped=function(){return i.isStatus("STOPPED")},i.isCompleted=function(){return i.isStatus("COMPLETED")},i.handleOnComplete=function(e){i.props.onComplete&&i.props.onComplete(e)},e.date){var o=i.calcTimeDelta();i.state={timeDelta:o,status:o.completed?"COMPLETED":"STOPPED"}}else i.legacyMode=!0;return i}return o(a,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(e){this.legacyMode||this.shallowCompare(this.props,e)||(this.props.date!==e.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0),this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var e=this.props,t=e.date,a=e.now,n=e.precision,r=e.controlled,i=e.overtime;return function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.now,r=void 0===n?Date.now:n,i=a.precision,o=void 0===i?0:i,s=a.controlled,l=a.offsetTime,c=void 0===l?0:l,d=a.overtime;t="string"==typeof e?new Date(e).getTime():e instanceof Date?e.getTime():e,s||(t+=c);var u=s?t:t-r(),m=Math.min(20,Math.max(0,o)),f=Math.round(1e3*parseFloat(((d?u:Math.max(0,u))/1e3).toFixed(m))),p=Math.abs(f)/1e3;return{total:f,days:Math.floor(p/86400),hours:Math.floor(p/3600%24),minutes:Math.floor(p/60%60),seconds:Math.floor(p%60),milliseconds:Number((p%1*1e3).toFixed()),completed:f<=0}}(t,{now:a,precision:n,controlled:r,offsetTime:this.offsetTime,overtime:i})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(e){this.legacyCountdownRef.current.addTime(e)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(e){return this.state.status===e}},{key:"shallowCompare",value:function(e,t){var a=Object.keys(e);return a.length===Object.keys(t).length&&!a.some((function(a){var n=e[a],r=t[a];return!t.hasOwnProperty(a)||!(n===r||n!=n&&r!=r)}))}},{key:"setTimeDeltaState",value:function(e,t,a){var n=this;if(this.mounted){var r;!this.state.timeDelta.completed&&e.completed&&(this.props.overtime||this.clearTimer(),r=this.handleOnComplete);return this.setState((function(a){var r=t||a.status;return e.completed&&!n.props.overtime?r="COMPLETED":t||"COMPLETED"!==r||(r="STOPPED"),{timeDelta:e,status:r}}),(function(){a&&a(n.state.timeDelta),r&&r(n.state.timeDelta)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var e=this.props,t=e.daysInHours,a=e.zeroPadTime,n=e.zeroPadDays,r=this.state.timeDelta;return Object.assign(Object.assign({},r),{api:this.getApi(),props:this.props,formatted:g(r,{daysInHours:t,zeroPadTime:a,zeroPadDays:n})})}},{key:"render",value:function(){if(this.legacyMode){var e=this.props,t=e.count,a=e.children,r=e.onComplete;return(0,n.createElement)(v,{ref:this.legacyCountdownRef,count:t,onComplete:r},a)}var i=this.props,o=i.className,s=i.overtime,l=i.children,c=i.renderer,d=this.getRenderProps();if(c)return c(d);if(l&&this.state.timeDelta.completed&&!s)return(0,n.cloneElement)(l,{countdown:d});var u=d.formatted,m=u.days,f=u.hours,p=u.minutes,h=u.seconds;return(0,n.createElement)("span",{className:o},d.total<0?"-":"",m,m?":":"",f,":",p,":",h)}}]),a}(n.Component);y.defaultProps=Object.assign(Object.assign({},h),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),t.ZP=y},9274:function(e,t,a){"use strict";a.d(t,{$:function(){return i}});var n=a(7294),r=a(130);var i=function(e){var t=e.children,a=e.title,i=e.subtitle,o=e.className;return n.createElement("section",{className:(0,r.x)("index-module--section--3EKCW",o)},a&&n.createElement("div",{className:(0,r.x)("container","index-module--titleContainer--3riuJ")},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-12 text-center"},n.createElement("h2",{className:"index-module--header--2TBtR"},a),i&&n.createElement("p",null,i)))),t)}},1496:function(e,t,a){"use strict";var n=a(5318);t.Z=void 0;var r,i=n(a(1506)),o=n(a(5354)),s=n(a(7316)),l=n(a(7154)),c=n(a(7294)),d=n(a(5697)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,n=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},m=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},f=function(e){var t=e.fluid,a=e.fixed,n=p(t||a||[]);return n&&n.src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(m);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),g=function(e){var t=u(e),a=f(t);return h[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,b=y&&window.IntersectionObserver,E=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:r,srcSet:n,sizes:i}),a&&c.default.createElement("source",{media:r,srcSet:a,sizes:i}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function N(e){return e.map((function(e){var t=e.src,a=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:n})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:n})}))}function k(e,t){var a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?n:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var T=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},_=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?k(e,!0):"")+k(e)})).join("")+"<img "+c+o+s+a+n+t+i+r+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=c.default.forwardRef((function(e,t){var a=e.src,n=e.imageVariants,r=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=c.default.createElement(C,(0,l.default)({ref:t,src:a},i,{ariaHidden:o}));return n.length>1?c.default.createElement("picture",null,r(n),s):s})),C=c.default.forwardRef((function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,o=e.onLoad,d=e.onError,u=e.loading,m=e.draggable,f=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,l.default)({"aria-hidden":f,sizes:a,srcSet:n,src:r},p,{onLoad:o,onError:d,ref:t,loading:u,draggable:m,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));C.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&b&&!a.isCritical&&!a.seenBefore;var n=a.isCritical||y&&(v||!a.useIOSupport);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=T(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=f(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,m=void 0===d?{}:d,f=e.placeholderClassName,h=e.fluid,g=e.fixed,v=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,E=e.itemProp,S=e.loading,k=e.draggable,T=h||g;if(!T)return null;var R=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,D=(0,l.default)({opacity:R?1:0,transition:I?"opacity "+y+"ms":"none"},s),P="boolean"==typeof v?"lightgray":v,j={transitionDelay:y+"ms"},L=(0,l.default)({opacity:this.state.imgLoaded?0:1},I&&j,s,m),H={title:t,alt:this.state.isVisible?"":a,style:L,className:f,itemProp:E},M=this.state.isHydrated?p(T):T[0];if(h)return c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:M.maxWidth?M.maxWidth+"px":null,maxHeight:M.maxHeight?M.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},c.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),P&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:P,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&j)}),M.base64&&c.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:H,imageVariants:T,generateSources:x}),M.tracedSVG&&c.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:H,imageVariants:T,generateSources:N}),this.state.isVisible&&c.default.createElement("picture",null,w(T),c.default.createElement(C,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:D,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:k})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,l.default)({alt:a,title:t,loading:S},M,{imageVariants:T}))}}));if(g){var z=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},i);return"inherit"===i.display&&delete z.display,c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},P&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:P,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},I&&j)}),M.base64&&c.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:H,imageVariants:T,generateSources:x}),M.tracedSVG&&c.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:H,imageVariants:T,generateSources:N}),this.state.isVisible&&c.default.createElement("picture",null,w(T),c.default.createElement(C,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:D,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:k})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,l.default)({alt:a,title:t,loading:S},M,{imageVariants:T}))}}))}return null},t}(c.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),D=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function P(e){return function(t,a,n){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+n+"`, but their values are both `undefined`.");d.default.checkPropTypes(((r={})[a]=e,r),t,"prop",n)}}R.propTypes={resolutions:I,sizes:D,fixed:P(d.default.oneOfType([I,d.default.arrayOf(I)])),fluid:P(d.default.oneOfType([D,d.default.arrayOf(D)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var j=R;t.Z=j},8240:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return H}});var n=a(7294),r=a(3473),i=a(9274);const o="index-module--segment--2IyYc",s="index-module--digit--1pR59",l="index-module--label--2y3me";var c=function(e){var t=e.start;return n.createElement(i.$,{className:"index-module--hackathonCountdown--2xqb6"},n.createElement("div",{className:"container"},n.createElement(r.ZP,{renderer:function(e){var t=e.days,a=e.hours,r=e.minutes,i=e.seconds;return n.createElement("div",{className:"row justify-content-center py-2"},n.createElement("div",{className:"index-module--segments--2J_NC"},n.createElement("div",{className:o},n.createElement("span",{className:s},t),n.createElement("span",{className:l},"day",1!==t&&"s")),n.createElement("div",{className:o},n.createElement("span",{className:s},a),n.createElement("span",{className:l},"hour",1!==a&&"s")),n.createElement("div",{className:o},n.createElement("span",{className:s},r),n.createElement("span",{className:l},"minute",1!==r&&"s")),n.createElement("div",{className:o},n.createElement("span",{className:s},i),n.createElement("span",{className:l},"second",1!==i&&"s"))))},date:t})))};function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=a(3552),m=a(3201),f=a(130);var p=function(e){function t(t){var a;return(a=e.call(this,t)||this).content=n.createRef(),a.state={collapsed:t.collapsed||t.defaultState||!0},a.toggleState=a.toggleState.bind(d(a)),a.getHeight=a.getHeight.bind(d(a)),a}(0,u.Z)(t,e);var a=t.prototype;return a.collapse=function(){this.state.collapsed||this.toggleState()},a.componentDidUpdate=function(){this.props.collapsed!==this.state.collapsed&&this.toggleState()},a.toggleState=function(){var e=this;clearTimeout(this.timeout),this.setState((function(t){return requestAnimationFrame((function(){var a=e.getHeight()+"px";t.collapsed?requestAnimationFrame((function(){e.content.current.style.height=a,e.timeout=window.setTimeout((function(){e.content.current.style.height=""}),300)})):(e.content.current.style.height=a,requestAnimationFrame((function(){e.content.current.style.height="0px"})))})),{collapsed:!t.collapsed}}))},a.getHeight=function(){var e=this.content.current,t=e.style.height;e.style.height="";var a=e.getBoundingClientRect().height;return e.style.height=t,a},a.render=function(){var e=this;return n.createElement("div",{className:"index-module--collapsable--QVieN"},n.createElement("div",{className:(0,f.x)("btn btn-hackaway-primary","index-module--button--KHmyP"),onClick:function(){return"boolean"!=typeof e.props.collapsed&&e.toggleState()}},n.createElement("div",{className:"index-module--labelContainer--3RGyT"},this.props.title,n.createElement("div",{className:(0,f.x)("index-module--arrowDown--bgVQg",!this.state.collapsed&&"index-module--arrowUp--1sl45")},n.createElement(m.NWQ,null))),n.createElement("div",{className:"index-module--container--FFhkN",ref:this.content,style:{height:"0px"}},n.createElement("div",{className:"index-module--content--1tW4Z",dangerouslySetInnerHTML:{__html:this.props.html}}))))},t}(n.Component);var h=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={opened:null},a.toggle=a.toggle.bind(d(a)),a}(0,u.Z)(t,e);var a=t.prototype;return a.toggle=function(e){this.setState((function(t){return{opened:t.opened===e?null:e}}))},a.render=function(){var e=this;return n.createElement(i.$,{className:"index-module--faq--1cqCb",title:"Frequently Asked Questions",subtitle:"Answers to some questions we get a lot of!"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},function(e,t){for(var a=new Array(t),n=0;n<t;n++)a[n]=[];for(var r=0;r<e.length;r++)a[r%t].push(e[r]);return a}(this.props.faq,2).map((function(t,a){return n.createElement("div",{className:"col-12 col-md-6",key:a},t.map((function(t){return n.createElement("div",{key:t.fields.slug,onClick:function(){return e.toggle(t.fields.slug)}},n.createElement(p,{title:t.frontmatter.name,html:t.html,collapsed:e.state.opened!==t.fields.slug}))})))})))))},t}(n.Component);var g=function(e){var t=e.children;return n.createElement("div",{className:"index-module--buttons--2mdch"},t)};var v=a(1496),y=function(e){var t,a,r,i=e.image,o=e.fluid,s=void 0===o?{}:o,l=e.style,c=void 0===l?{}:l,d=e.className,u=e.fixedHeight,m=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["image","fluid","style","className","fixedHeight"]);u&&(a=u+"em",null!==(r=i.light.childImageSharp)&&void 0!==r&&r.fluid.aspectRatio&&(t=u*i.light.childImageSharp.fluid.aspectRatio+"em"));return n.createElement(n.Fragment,null,i.light.publicURL.endsWith(".svg")?n.createElement("img",Object.assign({},m,{src:i.light.publicURL,style:Object.assign({},c,{height:a}),className:(0,f.x)(d,"hackaway-light-theme-only")})):n.createElement(v.Z,Object.assign({},m,{fluid:Object.assign({},i.light.childImageSharp.fluid,s),style:Object.assign({},c,{width:t,height:a}),className:(0,f.x)(d,"hackaway-light-theme-only")})),i.dark.publicURL.endsWith(".svg")?n.createElement("img",Object.assign({},m,{src:i.dark.publicURL,style:Object.assign({},c,{height:a}),className:(0,f.x)(d,"hackaway-dark-theme-only")})):n.createElement(v.Z,Object.assign({},m,{fluid:Object.assign({},i.dark.childImageSharp.fluid,s),style:Object.assign({},c,{width:t,height:a}),className:(0,f.x)(d,"hackaway-dark-theme-only")})))};const b="index-module--livestreamContainer--24_8O",E="index-module--livestream--SeYcS";var w=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){var e,t=this.props.frontmatter,a=t.ticket_button_enable,r=t.sponsor_document_enable,i=t.livestream_embed_enable,o=t.sponsor_document,s=t.livestream_type,l=t.livestream_link,c=t.short_name,d=t.full_description,u=t.ticket_button_label,f=t.display_date,p=t.ticket_button_link,h=t.location,v=t.chat_link_enable,w=t.chat_link,S=t.livestream_button_enable,N=t.subtitle,x=t.event_widescreen_logo,k=t.jumbotron_enable_title,T=t.jumbotron_enable_widescreen_logo;return i?"youtube"===s?e=n.createElement("div",{className:b},n.createElement("iframe",{className:E,src:"https://www.youtube.com/embed/"+l+"?autoplay=1",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})):"twitch"===s&&(e=n.createElement("div",{className:b},n.createElement("iframe",{className:E,src:"https://player.twitch.tv/?channel="+l+"&parent="+encodeURIComponent("undefined"!=typeof window?window.location.hostname:"royalhackaway.com"),allowFullScreen:!0}))):e=n.createElement(n.Fragment,null,n.createElement("p",null,n.createElement(m.Nh4,null)," ",h," ",n.createElement("br",null),n.createElement(m.IiJ,null)," ",f),n.createElement("p",{className:"index-module--description--1aKkP"},d)),n.createElement("section",{className:"index-module--hackathonTitle--26VoR"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row justify-content-center"},n.createElement("div",{className:"col-12 col-sm-10 col-md-8 col-lg-7 col-xl-7"},T&&n.createElement(y,{image:x}),k&&n.createElement("h1",{className:"index-module--name--2rvi7"},c),n.createElement("h3",null,N),e,n.createElement(g,null,a?n.createElement("a",{className:"btn btn-hackaway-primary px-4",href:p},u):n.createElement("span",{className:"btn btn-hackaway-primary px-4 disabled"},u),r&&n.createElement("a",{className:"btn btn-hackaway-primary px-4",href:null==o?void 0:o.publicURL},"Sponsor Us"),S&&"youtube"===s&&n.createElement("a",{className:"btn btn-hackaway-youtube px-4",href:"https://www.youtube.com/watch?v="+l},n.createElement(m.V2E,null)," YouTube"),S&&"twitch"===s&&n.createElement("a",{className:"btn btn-hackaway-twitch px-4",href:"https://twitch.tv/"+l},n.createElement(m.aWC,null)," Twitch.tv"),v&&n.createElement("a",{className:"btn btn-hackaway-blurple px-4",href:w},n.createElement(m.j2d,null)," Join Discord"))))))},t}(n.Component);var S,N=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){return n.createElement("section",{className:"index-module--googleMaps--Uic12"},n.createElement("iframe",{src:this.props.map,frameBorder:"0",title:"Map of Royal Holloway, University of London"}))},t}(n.Component),x=a(3750);!function(e){e.TWITTER="twitter"}(S||(S={}));var k={twitter:{prefix:"https://twitter.com/",Icon:m.fWC,title:"Twitter"},email:{prefix:"mailto:",Icon:x.Imn,title:"E-Mail"},github:{prefix:"https://github.com/",Icon:m.hJX,title:"GitHub"},linkedin:{prefix:"https://www.linkedin.com/in/",Icon:m.ltd,title:"LinkedIn"}},T=function(e){var t=e.service,a=e.handle,r=k[t],i=r.prefix,o=r.Icon,s=r.title;return n.createElement("a",{href:i+a,title:s+" - "+a},n.createElement(o,null))};var _=function(e){var t=e.event_name,a=e.people;return n.createElement(i.$,{className:"index-module--people--3kgXl",title:"The Team",subtitle:"These are the people that make "+t+" possible!"},n.createElement("div",{className:"container py-5"},n.createElement("div",{className:"row justify-content-center"},n.createElement("div",{className:"col-12 col-md-10 col-xl-8"},n.createElement("div",{className:"row justify-content-center"},a.map((function(e){var t=e.person,a=e.role;return n.createElement("div",{className:(0,f.x)("col-6 col-sm-4 col-md-3","index-module--card--mKDBk"),key:t.frontmatter.name},n.createElement("div",{className:"index-module--pictureContainer--3wdHr"},n.createElement(y,{fluid:{aspectRatio:1},image:t.frontmatter.image,className:"index-module--picture--2QYgR",title:t.frontmatter.description})),n.createElement("div",{className:"index-module--cardContent--1_jCA"},n.createElement("div",{className:"text-center"},n.createElement("span",{className:"index-module--name--3XqI8"},t.frontmatter.name),n.createElement("br",null),n.createElement("span",{className:"index-module--description--2Hhqt"},a),n.createElement("div",{className:"index-module--handles--1h4FD"},t.frontmatter.handles.map((function(e){return n.createElement(T,{key:e.handle,handle:e.handle,service:e.service})}))))))})))))))};var O=function(e){var t=e.schedule;return n.createElement(i.$,{title:"Schedule",className:"index-module--scheduleSection--3AXuZ"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},t.map((function(e,t){var a=e.name,r=e.events;return n.createElement("div",{className:"col-sm",key:t},n.createElement("table",{className:"table table-bordered table-striped"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:"text-center",colSpan:"2"},a))),n.createElement("tbody",null,r.map((function(e,a){var r=e.activity,i=e.time;return n.createElement("tr",{key:t+","+a},n.createElement("td",null,i),n.createElement("td",null,r))})))))})))))};const C="index-module--sponsorButtonContainer--1FO3v";var R=[void 0,8,5,3,2.7],I=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.sponsors,a=e.sponsor_document,r=void 0===a?null:a,o=e.sponsor_document_enable,s=void 0!==o&&o;return n.createElement(i.$,{className:"index-module--sponsorSection--2Xl-y",title:"Sponsors"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-12"},t.map((function(e){return n.createElement("div",{key:e.name,className:"index-module--tier--1UsO0"},n.createElement("h2",{className:"text-center",style:{color:e.colour}},n.createElement("b",null,e.name)),n.createElement("div",{className:"index-module--sponsorTier--3QOvT"},e.companies.map((function(t){var a=t.frontmatter;return n.createElement("a",{key:a.name,href:a.link,className:"index-module--sponsor--3WfP0"},n.createElement(y,{className:"index-module--sponsorLogo--3y_id",fixedHeight:R[e.tier],image:a.image,key:a.link,alt:a.name,title:a.name}))}))))})),!s&&0===t.length&&n.createElement("div",{className:(0,f.x)("text-center",C)},n.createElement("span",{className:"btn btn-hackaway-orange disabled"},"Sponsor document coming soon...")),s&&n.createElement("div",{className:(0,f.x)("text-center",C)},n.createElement("a",{href:null==r?void 0:r.publicURL,className:"btn btn-hackaway-orange "},"Become a sponsor"))))))},t}(n.Component);var D=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){return n.createElement(i.$,{className:"index-module--hackathonDef--12V5w",title:"We make hackathons happen"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row justify-content-center"},n.createElement("div",{className:"col-12 col-md-6 text-center text-md-right"},n.createElement("p",{className:"index-module--leftText--28q3w"},"Royal Hackaway is an initiative of the"," ",n.createElement("a",{href:"https://cmpsc.uk",className:"index-module--link--2kirZ"},"Computing Society at Royal Holloway, University of London"),n.createElement("br",null),n.createElement("br",null),"We aim to create great experiences for students of every background of study by hosting inclusive events where people can learn and grow.")),n.createElement("div",{className:"col-12 col-md-6 text-center text-md-left"},n.createElement("p",{className:"index-module--word--3uYt_"},"hackathon"),n.createElement("p",{className:"index-module--pronunciation--2utbP"},"/ˈhækəθɒn/"),n.createElement("p",{className:"index-module--definition--1aRyP"},"an event, typically lasting several days, in which a large number of people meet to engage in collaborative computer programming.")))))},t}(n.Component),P=a(759);var j=function(e){var t=e.year;return n.createElement("a",{id:"mlh-trust-badge",className:"index-module--badge--39BDd",href:"https://mlh.io/seasons/eu-"+t+"/events?utm_source=eu-hackathon&amp;utm_medium=TrustBadge&amp;utm_campaign="+t+"-season&amp;utm_content=white",target:"_blank",rel:"noreferrer"},n.createElement("img",{src:"https://s3.amazonaws.com/logged-assets/trust-badge/"+t+"/mlh-trust-badge-"+t+"-gray.svg",alt:"Major League Hacking "+t+" Hackathon Season"}))},L=a(3384),H=function(e){var t=e.data.markdownRemark.frontmatter,a=t.event_widescreen_logo,r=t.sponsors_list_enable,i=t.sponsors,o=t.sponsor_document_enable,s=t.sponsor_document,l=t.short_name,d=t.people_enable,u=t.people,m=t.faq,f=t.faq_enable,p=t.schedule_enable,g=t.schedule,v=t.event_start,y=t.countdown_timer_enable,b=t.hackathon_definition_enable,E=t.location_embed_enable,S=t.location_embed_link,x=t.mlh_badge_enable,k=t.mlh_badge_year,T=t.short_description;return n.createElement(P.A,{sponsor_document:o&&s.publicURL},n.createElement(L.E,{title:l,description:T}),a&&n.createElement(L.E,{image:a.publicURL}),n.createElement(w,{frontmatter:t}),y&&n.createElement(c,{start:v}),b&&n.createElement(D,null),E&&n.createElement(N,{map:S}),f&&n.createElement(h,{faq:m}),r&&n.createElement(I,{sponsors:i,sponsor_document:s,sponsor_document_enable:o}),d&&n.createElement(_,{event_name:l,people:u}),p&&n.createElement(O,{schedule:g}),x&&n.createElement(j,{year:k}))}}}]);
//# sourceMappingURL=component---src-templates-events-index-js-078891fb353385c1da5f.js.map