(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2b8+":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E})),n.d(t,"pageQuery",(function(){return C}));var r=n("nKUr"),a=n("q1tI"),i=n("Zttt"),s=n("dI71"),o=n("b0gX"),c=n.n(o),d=n("9eSz"),l=n.n(d),u=n("Aj3y"),f=n("anA7"),h=function(e){function t(){return e.apply(this,arguments)||this}return Object(s.a)(t,e),t.prototype.render=function(){var e,t,n,a=this.props.data.markdownRemark.frontmatter,i=a.display_logo,s=a.logo_width,o=a.name,d=a.start,h=a.location,p=a.short_description,m=a.enable_ticket_button,b=a.ticket_button_text,j=a.tickets,g=a.enable_livestream_button,x=a.livestream_youtube,O=a.enable_chat_link,v=a.chat_link,y=null==a||null===(e=a.jumbotron_image)||void 0===e||null===(t=e.childImageSharp)||void 0===t?void 0:t.fluid,w=null==a||null===(n=a.small_logo)||void 0===n?void 0:n.publicURL,S=new Date(d).toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric",hour12:!0,hour:"2-digit",minute:"2-digit",timeZoneName:"long"});return Object(r.jsxs)("section",{className:Object(u.a)(c.a.eventJumbotron),children:[Object(r.jsxs)("div",{className:c.a.eventJumbotronContent,children:[i&&Object(r.jsx)("div",{className:"row justify-content-center text-center",children:Object(r.jsx)("div",{className:Object(u.a)("col-md-"+(s||2),"col-md-8"),children:Object(r.jsx)("img",{className:c.a.eventLogo,src:w,alt:"Logo for "+o})})}),Object(r.jsx)("div",{className:"row justify-content-center text-center",children:Object(r.jsxs)("div",{className:"col-md-6 text-light col-xs-12",children:[Object(r.jsx)("h1",{children:o}),Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:S}),Object(r.jsx)("br",{}),h]}),Object(r.jsx)("p",{children:p}),Object(r.jsxs)(f.a,{children:[m?Object(r.jsx)("a",{className:"btn btn-hackaway-white px-4",href:j,children:b}):Object(r.jsx)("span",{className:"btn btn-hackaway-white px-4 disabled",children:"Tickets coming soon™"}),g?Object(r.jsx)("a",{className:"btn btn-hackaway-white px-4",href:"https://www.youtube.com/watch?v="+x,children:"Watch Live"}):Object(r.jsx)("span",{className:"btn btn-hackaway-white px-4 disabled",children:"Watch Live"}),O?Object(r.jsx)("a",{className:"btn btn-hackaway-white px-4",href:v,children:"Join the Discord"}):Object(r.jsx)("span",{className:"btn btn-hackaway-white px-4 disabled",children:"Join the Discord"})]})]})})]}),y?Object(r.jsx)(l.a,{fluid:y,className:c.a.eventJumbotronBackground,alt:"Background image of people attending a hackathon."}):Object(r.jsx)("div",{className:c.a.eventJumbotronImagelessBackground})]})},t}(a.Component),p=n("P8iK"),m=n.n(p),b=function(e){function t(){return e.apply(this,arguments)||this}return Object(s.a)(t,e),t.prototype.render=function(){return Object(r.jsx)("section",{style:{backgroundColor:this.props.colour},children:Object(r.jsx)("div",{className:"container text-light",children:Object(r.jsx)("p",{className:m.a.description,children:this.props.description})})})},t}(a.Component),j=n("r2wF"),g=n.n(j),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(s.a)(t,e),t.prototype.render=function(){return Object(r.jsx)("section",{className:g.a.googleMaps,children:Object(r.jsx)("iframe",{src:this.props.map,frameBorder:"0",title:"Map of Royal Holloway, University of London"})})},t}(a.Component),O=function(e){function t(){return e.apply(this,arguments)||this}return Object(s.a)(t,e),t.prototype.render=function(){var e=this.props.schedule;return Object(r.jsxs)("section",{children:[Object(r.jsx)("h2",{className:"text-center display-4",children:"Schedule"}),Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:e.map((function(e,t){var n=e.name,a=e.events;return Object(r.jsx)("div",{className:"col-sm",children:Object(r.jsxs)("table",{className:"table table-bordered table-striped",children:[Object(r.jsx)("thead",{children:Object(r.jsx)("tr",{children:Object(r.jsx)("th",{className:"text-center",colSpan:"2",children:n})})}),Object(r.jsx)("tbody",{children:a.map((function(e,n){var a=e.activity,i=e.time;return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:i}),Object(r.jsx)("td",{children:a})]},t+","+n)}))})]})},t)}))})})]})},t}(a.Component),v=n("vVOu"),y=n("Wbzz"),w=n("m8sN"),S=n.n(w),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(s.a)(t,e),t.prototype.render=function(){return Object(r.jsx)(y.StaticQuery,{query:"438816684",render:function(e){return Object(r.jsxs)("section",{className:S.a.faq,children:[Object(r.jsx)("div",{className:"row justify-content-md-center",children:Object(r.jsxs)("div",{id:"faq-title-wrapper",className:"col-sm-4 text-center",children:[Object(r.jsx)("h2",{className:"display-4",children:"FAQ"}),Object(r.jsx)("p",{className:"text-muted",children:"Questions people usually have."})]})}),Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:e.allMarkdownRemark.nodes.map((function(e,t){return Object(r.jsxs)("div",{className:"col-sm-4",children:[Object(r.jsx)("h3",{className:"text-left text-muted",children:e.frontmatter.name}),Object(r.jsx)("div",{dangerouslySetInnerHTML:{__html:e.html}})]},t)}))})})]})}})},t}(a.Component),L=n("LESS"),k=n.n(L),_=function(e){function t(){return e.apply(this,arguments)||this}return Object(s.a)(t,e),t.prototype.render=function(){return Object(r.jsx)(y.StaticQuery,{query:"3678858928",render:function(e){return Object(r.jsxs)("section",{className:Object(u.a)("text-center",k.a.eventQualms),children:[Object(r.jsx)("p",{children:"Questions, queries or qualms about this event?"}),Object(r.jsx)("a",{className:"btn btn-hackaway-orange text-white",href:"mailto:"+e.site.siteMetadata.email,children:"Get in touch"})]})}})},t}(a.Component),I=n("wtQ5"),R=function(e){function t(){return e.apply(this,arguments)||this}return Object(s.a)(t,e),t.prototype.render=function(){var e=this.props.internet,t=e.ssid,n=e.username,a=e.password;return Object(r.jsx)("section",{children:Object(r.jsx)("div",{className:"container inner-sm",children:Object(r.jsx)("div",{className:"row justify-content-center",children:Object(r.jsx)("div",{className:"col-auto center-block text-center",children:Object(r.jsxs)("table",{className:"table table-bordered table-striped",children:[Object(r.jsx)("thead",{children:Object(r.jsx)("tr",{children:Object(r.jsx)("th",{className:"text-center",colSpan:"3",children:"Get Online"})})}),Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("b",{children:"Network SSID"})}),Object(r.jsx)("td",{children:Object(r.jsx)("code",{children:t})})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("b",{children:"Username"})}),Object(r.jsx)("td",{children:Object(r.jsx)("code",{children:n})})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("b",{children:"Password"})}),Object(r.jsx)("td",{children:Object(r.jsx)("code",{children:a})})]})]})]})})})})})},t}(a.Component);function E(e){var t=e.data,n=t.markdownRemark,a=n.frontmatter,s=n.html,o=a.color,c=a.name,d=a.full_description,l=a.show_map,u=a.map_src,f=a.schedule,p=a.sponsors,m=a.sponsor_document,j=a.show_sponsor_button,g=a.show_sponsors_list,y=a.jumbotron_image,w=a.show_wifi_details,S=a.internet,L=a.show_schedule,k=a.show_faq;return Object(r.jsxs)(i.a,{children:[Object(r.jsx)(I.a,{title:c,description:d,image:null==y?void 0:y.publicURL}),Object(r.jsx)(h,{data:t}),d&&Object(r.jsx)(b,{colour:o,description:d}),l&&Object(r.jsx)(x,{map:u}),s&&Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})}),L&&Object(r.jsx)(O,{schedule:f}),k&&Object(r.jsx)(N,{}),w&&Object(r.jsx)(R,{internet:S}),g&&Object(r.jsx)(v.a,{sponsors:p,sponsor_document:m,show_sponsors_list:g,show_sponsor_button:j}),Object(r.jsx)(_,{})]})}var C="2314071586"},"9eSz":function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var a,i=r(n("PJYZ")),s=r(n("VbXa")),o=r(n("8OQS")),c=r(n("pVnL")),d=r(n("q1tI")),l=r(n("17x9")),u=function(e){var t=(0,c.default)({},e),n=t.resolutions,r=t.sizes,a=t.critical;return n&&(t.fixed=n,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(g&&!!window.matchMedia(t).matches)},h=function(e){var t=e.fluid,n=e.fixed,r=p(t||n||[]);return r&&r.src},p=function(e){if(g&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var n=e.findIndex((function(e){return void 0===e.media}));if(-1!==n)return e[n]}return e[0]},m=Object.create({}),b=function(e){var t=u(e),n=h(t);return m[n]||!1},j="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,x=g&&window.IntersectionObserver,O=new WeakMap;function v(e){return e.map((function(e){var t=e.src,n=e.srcSet,r=e.srcSetWebp,a=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:a,srcSet:r,sizes:i}),n&&d.default.createElement("source",{media:a,srcSet:n,sizes:i}))}))}function y(e){var t=[],n=[];return e.forEach((function(e){return(e.media?t:n).push(e)})),[].concat(t,n)}function w(e){return e.map((function(e){var t=e.src,n=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:n,srcSet:r})}))}function S(e){return e.map((function(e){var t=e.src,n=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:n,srcSet:r})}))}function N(e,t){var n=e.srcSet,r=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?r:n)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var L=function(e,t){var n=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(O.has(e.target)){var t=O.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),O.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return n&&(n.observe(e),O.set(e,t)),function(){n.unobserve(e),O.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)})).join("")+"<img "+d+s+o+n+r+t+i+a+c+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},_=d.default.forwardRef((function(e,t){var n=e.src,r=e.imageVariants,a=e.generateSources,i=e.spreadProps,s=e.ariaHidden,o=d.default.createElement(I,(0,c.default)({ref:t,src:n},i,{ariaHidden:s}));return r.length>1?d.default.createElement("picture",null,a(r),o):o})),I=d.default.forwardRef((function(e,t){var n=e.sizes,r=e.srcSet,a=e.src,i=e.style,s=e.onLoad,l=e.onError,u=e.loading,f=e.draggable,h=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,c.default)({"aria-hidden":h,sizes:n,srcSet:r,src:a},p,{onLoad:s,onError:l,ref:t,loading:u,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));I.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var R=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=g&&b(t),n.isCritical="eager"===t.loading||t.critical,n.addNoScript=!(n.isCritical&&!t.fadeIn),n.useIOSupport=!j&&x&&!n.isCritical&&!n.seenBefore;var r=n.isCritical||g&&(j||!n.useIOSupport);return n.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn,isHydrated:!1},n.imageRef=d.default.createRef(),n.placeholderRef=t.placeholderRef||d.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,i.default)(n)),n.handleRef=n.handleRef.bind((0,i.default)(n)),n}(0,s.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.setState({isHydrated:g}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:b(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=b(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=u(e),(n=h(t))&&(m[n]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=u(this.props),t=e.title,n=e.alt,r=e.className,a=e.style,i=void 0===a?{}:a,s=e.imgStyle,o=void 0===s?{}:s,l=e.placeholderStyle,f=void 0===l?{}:l,h=e.placeholderClassName,m=e.fluid,b=e.fixed,j=e.backgroundColor,g=e.durationFadeIn,x=e.Tag,O=e.itemProp,y=e.loading,N=e.draggable,L=m||b;if(!L)return null;var R=!1===this.state.fadeIn||this.state.imgLoaded,E=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,c.default)({opacity:R?1:0,transition:E?"opacity "+g+"ms":"none"},o),V="boolean"==typeof j?"lightgray":j,z={transitionDelay:g+"ms"},q=(0,c.default)({opacity:this.state.imgLoaded?0:1},E&&z,o,f),H={title:t,alt:this.state.isVisible?"":n,style:q,className:h,itemProp:O},T=this.state.isHydrated?p(L):L[0];if(m)return d.default.createElement(x,{className:(r||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden",maxWidth:T.maxWidth?T.maxWidth+"px":null,maxHeight:T.maxHeight?T.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},d.default.createElement(x,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),V&&d.default.createElement(x,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},E&&z)}),T.base64&&d.default.createElement(_,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:H,imageVariants:L,generateSources:S}),T.tracedSVG&&d.default.createElement(_,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:H,imageVariants:L,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,v(L),d.default.createElement(I,{alt:n,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,loading:y,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,c.default)({alt:n,title:t,loading:y},T,{imageVariants:L}))}}));if(b){var J=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},i);return"inherit"===i.display&&delete J.display,d.default.createElement(x,{className:(r||"")+" gatsby-image-wrapper",style:J,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},V&&d.default.createElement(x,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:V,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},E&&z)}),T.base64&&d.default.createElement(_,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:H,imageVariants:L,generateSources:S}),T.tracedSVG&&d.default.createElement(_,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:H,imageVariants:L,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,v(L),d.default.createElement(I,{alt:n,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,loading:y,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,c.default)({alt:n,title:t,loading:y},T,{imageVariants:L}))}}))}return null},t}(d.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var E=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),C=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string,maxWidth:l.default.number,maxHeight:l.default.number});function V(e){return function(t,n,r){var a;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");l.default.checkPropTypes(((a={})[n]=e,a),t,"prop",r)}}R.propTypes={resolutions:E,sizes:C,fixed:V(l.default.oneOfType([E,l.default.arrayOf(E)])),fluid:V(l.default.oneOfType([C,l.default.arrayOf(C)])),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var z=R;t.default=z},LESS:function(e,t,n){e.exports={eventQualms:"index-module--eventQualms--2r6cS"}},P8iK:function(e,t,n){e.exports={description:"index-module--description--2t_kV"}},Qje8:function(e,t,n){e.exports={buttons:"index-module--buttons--1vPop"}},anA7:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("nKUr"),a=(n("q1tI"),n("Qje8")),i=n.n(a),s=function(e){var t=e.children;return Object(r.jsx)("div",{className:i.a.buttons,children:t})}},b0gX:function(e,t,n){e.exports={eventJumbotron:"index-module--eventJumbotron--kuV__",eventJumbotronImagelessBackground:"index-module--eventJumbotronImagelessBackground--32VKr",eventJumbotronBackground:"index-module--eventJumbotronBackground--2--VN",eventJumbotronContent:"index-module--eventJumbotronContent--1Hit1",eventLogo:"index-module--eventLogo--2oBtj"}},eI7z:function(e,t,n){e.exports={sponsorTier:"index-module--sponsorTier--nJxHv",sponsor:"index-module--sponsor--Wiqxf",sponsorLogo:"index-module--sponsorLogo--FtlBb",sponsorButtonContainer:"index-module--sponsorButtonContainer--2Pufd",tier1:"index-module--tier1--1WVZb",tier2:"index-module--tier2--pdj2Z",tier3:"index-module--tier3--3gUND",tier4:"index-module--tier4--27arH"}},m8sN:function(e,t,n){e.exports={faq:"index-module--faq--1tp8q"}},r2wF:function(e,t,n){e.exports={googleMaps:"index-module--googleMaps--umYkc"}},vVOu:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("dI71"),a=n("nKUr"),i=n("q1tI"),s=n("Aj3y"),o=n("eI7z"),c=n.n(o),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.sponsors,n=e.sponsor_document,r=void 0===n?null:n,i=e.show_sponsor_button,o=void 0!==i&&i;return Object(a.jsx)("section",{children:Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-12 py-4",children:[Object(a.jsx)("h2",{className:"text-center display-4",children:"Sponsors"}),t.map((function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:"text-center",style:{color:e.colour},children:Object(a.jsx)("b",{children:e.name})}),Object(a.jsx)("div",{className:Object(s.a)("row","justify-content-center",c.a.sponsorTier),children:e.tier_sponsors.map((function(t){return Object(a.jsx)("a",{href:t.link,className:Object(s.a)("align-middle","rounded",c.a.sponsor),style:{},children:Object(a.jsx)("img",{className:Object(s.a)(c.a.sponsorLogo,c.a["tier"+e.tier]),src:t.image.publicURL,alt:t.name,title:t.name})},t.name)}))})]},e.name)})),o&&Object(a.jsx)("div",{className:Object(s.a)("text-center",c.a.sponsorButtonContainer),children:Object(a.jsx)("a",{href:null==r?void 0:r.publicURL,className:"btn btn-hackaway-orange text-white",children:"Become a sponsor"})})]})})})},t}(i.Component)}}]);
//# sourceMappingURL=component---src-templates-events-index-js-5281eecddcec2f2f1b38.js.map