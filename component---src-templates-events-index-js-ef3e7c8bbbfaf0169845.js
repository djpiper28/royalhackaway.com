(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1fxH":function(e,t,a){e.exports={people:"index-module--people--3PIpp",title:"index-module--title--3ybxx",card:"index-module--card--3-4f3",cardContent:"index-module--cardContent--2c9Zg",name:"index-module--name--1yMb0",description:"index-module--description--I6ZNX",pictureContainer:"index-module--pictureContainer--3PQI7",picture:"index-module--picture--F3F2r",handles:"index-module--handles--1z7Rz"}},"2b8+":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("JX7q"),o=a("dI71"),s=a("Aj3y"),l=a("ma3e"),c=a("wNHi"),d=a.n(c),u=function(e){function t(t){var a;return(a=e.call(this,t)||this).content=r.a.createRef(),a.state={collapsed:t.collapsed||t.defaultState||!0},a.toggleState=a.toggleState.bind(Object(i.a)(a)),a.getHeight=a.getHeight.bind(Object(i.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.collapse=function(){this.state.collapsed||this.toggleState()},a.componentDidUpdate=function(){this.props.collapsed!==this.state.collapsed&&this.toggleState()},a.toggleState=function(){var e=this;clearTimeout(this.timeout),this.setState((function(t){return requestAnimationFrame((function(){var a=e.getHeight()+"px";t.collapsed?requestAnimationFrame((function(){e.content.current.style.height=a,e.timeout=window.setTimeout((function(){e.content.current.style.height=""}),300)})):(e.content.current.style.height=a,requestAnimationFrame((function(){e.content.current.style.height="0px"})))})),{collapsed:!t.collapsed}}))},a.getHeight=function(){var e=this.content.current,t=e.style.height;e.style.height="";var a=e.getBoundingClientRect().height;return e.style.height=t,a},a.render=function(){var e=this;return r.a.createElement("div",{className:d.a.collapsable},r.a.createElement("div",{className:Object(s.a)("btn btn-hackaway-white",d.a.button),onClick:function(){return"boolean"!=typeof e.props.collapsed&&e.toggleState()}},r.a.createElement("div",{className:d.a.labelContainer},this.props.title,r.a.createElement("div",{className:Object(s.a)(d.a.arrowDown,!this.state.collapsed&&d.a.arrowUp)},r.a.createElement(l.a,null))),r.a.createElement("div",{className:d.a.container,ref:this.content,style:{height:"0px"}},r.a.createElement("div",{className:d.a.content,dangerouslySetInnerHTML:{__html:this.props.html}}))))},t}(n.Component),m=a("9LZx"),p=a.n(m),f=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={opened:null},a.toggle=a.toggle.bind(Object(i.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.toggle=function(e){this.setState((function(t){return{opened:t.opened===e?null:e}}))},a.render=function(){var e=this;return r.a.createElement("section",{className:p.a.faq},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:Object(s.a)("row justify-content-center",p.a.title)},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h2",{className:"display-5 fw-bold"},"Frequently Asked Questions"),r.a.createElement("p",null,"Answers to some questions we get a lot of!"))),r.a.createElement("div",{className:"row"},function(e,t){for(var a=new Array(t),n=0;n<t;n++)a[n]=[];for(var r=0;r<e.length;r++)a[r%t].push(e[r]);return a}(this.props.faq,2).map((function(t,a){return r.a.createElement("div",{className:"col-12 col-md-6",key:a},t.map((function(t){return r.a.createElement("div",{key:t.fields.slug,onClick:function(){return e.toggle(t.fields.slug)}},r.a.createElement(u,{title:t.frontmatter.name,html:t.html,collapsed:e.state.opened!==t.fields.slug}))})))})))))},t}(n.Component),h=a("eI7z"),g=a.n(h),b=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.sponsors,a=e.sponsor_document,n=void 0===a?null:a,i=e.sponsor_document_enable,o=void 0!==i&&i;return r.a.createElement("section",{className:g.a.sponsorSection},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",{className:"text-center display-5 fw-bold"},"Sponsors"),t.map((function(e){return r.a.createElement("div",{key:e.name,className:g.a.tier},r.a.createElement("h2",{className:"text-center",style:{color:e.colour}},r.a.createElement("b",null,e.name)),r.a.createElement("div",{className:g.a.sponsorTier},e.companies.map((function(t){var a,n=t.frontmatter;return r.a.createElement("a",{key:n.name,href:n.link,className:g.a.sponsor},r.a.createElement("img",{className:Object(s.a)(g.a.sponsorLogo,g.a["tier"+e.tier]),style:n.style,src:null===(a=n.image)||void 0===a?void 0:a.publicURL,key:n.image,alt:n.name,title:n.name}))}))))})),!o&&0===t.length&&r.a.createElement("div",{className:Object(s.a)("text-center",g.a.sponsorButtonContainer)},r.a.createElement("span",{className:"btn btn-hackaway-orange text-white disabled"},"Sponsor document coming soon...")),o&&r.a.createElement("div",{className:Object(s.a)("text-center",g.a.sponsorButtonContainer)},r.a.createElement("a",{href:null==n?void 0:n.publicURL,className:"btn btn-hackaway-orange text-white"},"Become a sponsor"))))))},t}(n.Component);function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function E(e,t,a){return t&&y(e.prototype,t),a&&y(e,a),e}function w(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=S(e);if(t){var r=S(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return N(this,a)}}function k(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return O(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,a=String(e);if(0===t)return a;var n=a.match(/(.*?)([0-9]+)(.*)/),r=n?n[1]:"",i=n?n[3]:"",o=n?n[2]:a,s=o.length>=t?o:(k(Array(t)).map((function(){return"0"})).join("")+o).slice(-1*t);return"".concat(r).concat(s).concat(i)}var _={daysInHours:!1,zeroPadTime:2};function j(e,t){var a=e.days,n=e.hours,r=e.minutes,i=e.seconds,o=Object.assign(Object.assign({},_),t),s=o.daysInHours,l=o.zeroPadTime,c=o.zeroPadDays,d=void 0===c?l:c,u=Math.min(2,l),m=s?C(n+24*a,l):C(n,u);return{days:s?"":C(a,d),hours:m,minutes:C(r,u),seconds:C(i,u)}}var R=function(e){w(a,e);var t=T(a);function a(){var e;return v(this,a),(e=t.apply(this,arguments)).state={count:e.props.count||3},e.startCountdown=function(){e.interval=window.setInterval((function(){0===e.state.count-1?(e.stopCountdown(),e.props.onComplete&&e.props.onComplete()):e.setState((function(e){return{count:e.count-1}}))}),1e3)},e.stopCountdown=function(){clearInterval(e.interval)},e.addTime=function(t){e.stopCountdown(),e.setState((function(e){return{count:e.count+t}}),e.startCountdown)},e}return E(a,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?Object(n.cloneElement)(this.props.children,{count:this.state.count}):null}}]),a}(n.Component),I=function(e){w(a,e);var t=T(a);function a(e){var r;if(v(this,a),(r=t.call(this,e)).mounted=!1,r.initialTimestamp=r.calcOffsetStartTimestamp(),r.offsetStartTimestamp=r.props.autoStart?0:r.initialTimestamp,r.offsetTime=0,r.legacyMode=!1,r.legacyCountdownRef=Object(n.createRef)(),r.tick=function(){var e=r.calcTimeDelta(),t=e.completed&&!r.props.overtime?void 0:r.props.onTick;r.setTimeDeltaState(e,void 0,t)},r.start=function(){if(!r.isStarted()){var e=r.offsetStartTimestamp;r.offsetStartTimestamp=0,r.offsetTime+=e?r.calcOffsetStartTimestamp()-e:0;var t=r.calcTimeDelta();r.setTimeDeltaState(t,"STARTED",r.props.onStart),r.props.controlled||t.completed&&!r.props.overtime||(r.clearTimer(),r.interval=window.setInterval(r.tick,r.props.intervalDelay))}},r.pause=function(){r.isPaused()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.setTimeDeltaState(r.state.timeDelta,"PAUSED",r.props.onPause))},r.stop=function(){r.isStopped()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.offsetTime=r.offsetStartTimestamp-r.initialTimestamp,r.setTimeDeltaState(r.calcTimeDelta(),"STOPPED",r.props.onStop))},r.isStarted=function(){return r.isStatus("STARTED")},r.isPaused=function(){return r.isStatus("PAUSED")},r.isStopped=function(){return r.isStatus("STOPPED")},r.isCompleted=function(){return r.isStatus("COMPLETED")},r.handleOnComplete=function(e){r.props.onComplete&&r.props.onComplete(e)},e.date){var i=r.calcTimeDelta();r.state={timeDelta:i,status:i.completed?"COMPLETED":"STOPPED"}}else r.legacyMode=!0;return r}return E(a,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(e){this.legacyMode||this.shallowCompare(this.props,e)||(this.props.date!==e.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0),this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var e=this.props,t=e.date,a=e.now,n=e.precision,r=e.controlled,i=e.overtime;return function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.now,r=void 0===n?Date.now:n,i=a.precision,o=void 0===i?0:i,s=a.controlled,l=a.offsetTime,c=void 0===l?0:l,d=a.overtime;t="string"==typeof e?new Date(e).getTime():e instanceof Date?e.getTime():e,s||(t+=c);var u=s?t:t-r(),m=Math.min(20,Math.max(0,o)),p=Math.round(1e3*parseFloat(((d?u:Math.max(0,u))/1e3).toFixed(m))),f=Math.abs(p)/1e3;return{total:p,days:Math.floor(f/86400),hours:Math.floor(f/3600%24),minutes:Math.floor(f/60%60),seconds:Math.floor(f%60),milliseconds:Number((f%1*1e3).toFixed()),completed:p<=0}}(t,{now:a,precision:n,controlled:r,offsetTime:this.offsetTime,overtime:i})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(e){this.legacyCountdownRef.current.addTime(e)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(e){return this.state.status===e}},{key:"shallowCompare",value:function(e,t){var a=Object.keys(e);return a.length===Object.keys(t).length&&!a.some((function(a){var n=e[a],r=t[a];return!t.hasOwnProperty(a)||!(n===r||n!=n&&r!=r)}))}},{key:"setTimeDeltaState",value:function(e,t,a){var n=this;if(this.mounted){var r;!this.state.timeDelta.completed&&e.completed&&(this.props.overtime||this.clearTimer(),r=this.handleOnComplete);return this.setState((function(a){var r=t||a.status;return e.completed&&!n.props.overtime?r="COMPLETED":t||"COMPLETED"!==r||(r="STOPPED"),{timeDelta:e,status:r}}),(function(){a&&a(n.state.timeDelta),r&&r(n.state.timeDelta)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var e=this.props,t=e.daysInHours,a=e.zeroPadTime,n=e.zeroPadDays,r=this.state.timeDelta;return Object.assign(Object.assign({},r),{api:this.getApi(),props:this.props,formatted:j(r,{daysInHours:t,zeroPadTime:a,zeroPadDays:n})})}},{key:"render",value:function(){if(this.legacyMode){var e=this.props,t=e.count,a=e.children,r=e.onComplete;return Object(n.createElement)(R,{ref:this.legacyCountdownRef,count:t,onComplete:r},a)}var i=this.props,o=i.className,s=i.overtime,l=i.children,c=i.renderer,d=this.getRenderProps();if(c)return c(d);if(l&&this.state.timeDelta.completed&&!s)return Object(n.cloneElement)(l,{countdown:d});var u=d.formatted,m=u.days,p=u.hours,f=u.minutes,h=u.seconds;return Object(n.createElement)("span",{className:o},d.total<0?"-":"",m,m?":":"",p,":",f,":",h)}}]),a}(n.Component);I.defaultProps=Object.assign(Object.assign({},_),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0});var D,P=I,L=a("5iXs"),M=a.n(L),z=function(e){var t=e.start;return r.a.createElement("section",{className:M.a.hackathonCountdown},r.a.createElement("div",{className:"container"},r.a.createElement(P,{renderer:function(e){var t=e.days,a=e.hours,n=e.minutes,i=e.seconds;return r.a.createElement("div",{className:"row justify-content-center py-2"},r.a.createElement("div",{className:M.a.segments},r.a.createElement("div",{className:M.a.segment},r.a.createElement("span",{className:M.a.digit},t),r.a.createElement("span",{className:M.a.label},"day",1!==t&&"s")),r.a.createElement("div",{className:M.a.segment},r.a.createElement("span",{className:M.a.digit},a),r.a.createElement("span",{className:M.a.label},"hour",1!==a&&"s")),r.a.createElement("div",{className:M.a.segment},r.a.createElement("span",{className:M.a.digit},n),r.a.createElement("span",{className:M.a.label},"minute",1!==n&&"s")),r.a.createElement("div",{className:M.a.segment},r.a.createElement("span",{className:M.a.digit},i),r.a.createElement("span",{className:M.a.label},"second",1!==i&&"s"))))},date:t})))},H=a("zfRm"),q=a.n(H),V=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){return r.a.createElement("section",{className:q.a.hackathonDef},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",{className:Object(s.a)("text-center fw-bold display-5",q.a.header)},"We make hackathons happen.")),r.a.createElement("div",{className:"col-12 col-md-6 text-center text-md-end"},r.a.createElement("p",{className:"fw-bold fs-4"},"Royal Hackaway is an initiative of the"," ",r.a.createElement("a",{href:"https://cmpsc.uk",className:"text-decoration-none"},"Computing Society at Royal Holloway, University of London"),r.a.createElement("br",null),r.a.createElement("br",null),"We aim to create great experiences for students of every background of study by hosting inclusive events where people can learn and grow.")),r.a.createElement("div",{className:"col-12 col-md-6 text-center text-md-start"},r.a.createElement("p",{className:"fw-bold fs-1"},"hackathon"),r.a.createElement("p",{className:"fw-light fs-5"},r.a.createElement("i",null,"/ˈhækəθɒn/")),r.a.createElement("p",{className:"fw-light fs-4"},r.a.createElement("i",null,"an event, typically lasting several days, in which a large number of people meet to engage in collaborative computer programming."))))))},t}(n.Component),A=a("Qje8"),U=a.n(A),W=function(e){var t=e.children;return r.a.createElement("div",{className:U.a.buttons},t)},F=a("JBfp"),B=a.n(F),J=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){var e,t=this.props.frontmatter,a=t.ticket_button_enable,n=t.sponsor_document_enable,i=t.livestream_embed_enable,o=t.sponsor_document,s=t.livestream_type,c=t.livestream_link,d=t.short_name,u=t.full_description,m=t.ticket_button_label,p=t.display_date,f=t.ticket_button_link,h=t.location,g=t.chat_link_enable,b=t.chat_link,v=t.livestream_button_enable,y=t.subtitle;return i?"youtube"===s?e=r.a.createElement("div",{className:B.a.livestreamContainer},r.a.createElement("iframe",{className:B.a.livestream,src:"https://www.youtube.com/embed/"+c+"?autoplay=1",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})):"twitch"===s&&(e=r.a.createElement("div",{className:B.a.livestreamContainer},r.a.createElement("iframe",{className:B.a.livestream,src:"https://player.twitch.tv/?channel="+c+"&parent="+encodeURIComponent("undefined"!=typeof window?window.location.hostname:"royalhackaway.com"),allowFullScreen:!0}))):e=r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement(l.f,null)," ",h," ",r.a.createElement("br",null),r.a.createElement(l.b,null)," ",p),r.a.createElement("p",{className:B.a.description},u)),r.a.createElement("section",{className:B.a.hackathonTitle},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-12 col-sm-10 col-md-8 col-lg-6 col-xl-6"},r.a.createElement("h1",{className:B.a.name},d),r.a.createElement("h3",null,y),e,r.a.createElement(W,null,a?r.a.createElement("a",{className:"btn btn-hackaway-white px-4",href:f},m):r.a.createElement("span",{className:"btn btn-hackaway-white px-4 disabled"},m),n&&r.a.createElement("a",{className:"btn btn-hackaway-white px-4",href:null==o?void 0:o.publicURL},"Sponsor Us"),v&&"youtube"===s&&r.a.createElement("a",{className:"btn btn-hackaway-youtube text-white px-4",href:"https://www.youtube.com/watch?v="+c},r.a.createElement(l.i,null)," YouTube"),v&&"twitch"===s&&r.a.createElement("a",{className:"btn btn-hackaway-twitch text-white px-4",href:"https://twitch.tv/"+c},r.a.createElement(l.g,null)," Twitch.tv"),g&&r.a.createElement("a",{className:"btn btn-hackaway-blurple text-white px-4",href:b},r.a.createElement(l.c,null)," Join Discord"))))))},t}(n.Component),Z=a("Zttt"),Q=a("1fxH"),G=a.n(Q),X=a("9eSz"),Y=a.n(X),K=a("Tgqd");!function(e){e.TWITTER="twitter"}(D||(D={}));var $={twitter:{prefix:"https://twitter.com/",Icon:l.h},email:{prefix:"mailto:",Icon:K.a},github:{prefix:"https://github.com/",Icon:l.d},linkedin:{prefix:"https://www.linkedin.com/in/",Icon:l.e}},ee=function(e){var t=e.service,a=e.handle,n=$[t],i=n.prefix,o=n.Icon;return r.a.createElement("a",{href:i+a},r.a.createElement(o,null))},te=function(e){var t=e.event_name,a=e.people;return r.a.createElement("section",{className:G.a.people},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-sm-4 text-center"},r.a.createElement("h2",{className:"display-4 fw-bold"},"Team"),r.a.createElement("p",null,"These are the people that make ",t," possible!"))),r.a.createElement("div",{className:"container py-5"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-12 col-md-10 col-xl-8"},r.a.createElement("div",{className:"row justify-content-center"},a.map((function(e){var t=e.person,a=e.role;return r.a.createElement("div",{className:Object(s.a)("col-6 col-sm-4 col-md-3",G.a.card),key:t.frontmatter.name},r.a.createElement("div",{className:G.a.pictureContainer},r.a.createElement(Y.a,{fluid:Object.assign({},t.frontmatter.image.childImageSharp.fluid,{aspectRatio:1}),className:G.a.picture,title:t.frontmatter.description})),r.a.createElement("div",{className:G.a.cardContent},r.a.createElement("div",{className:"text-center"},r.a.createElement("span",{className:G.a.name},t.frontmatter.name),r.a.createElement("br",null),r.a.createElement("span",{className:Object(s.a)(G.a.description,"text-muted")},a),r.a.createElement("div",{className:G.a.handles},t.frontmatter.handles.map((function(e){return r.a.createElement(ee,{key:e.handle,handle:e.handle,service:e.service})}))))))})))))))},ae=function(e){var t=e.schedule;return r.a.createElement("section",{className:"py-4"},r.a.createElement("h2",{className:"text-center display-4 fw-bold"},"Schedule"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},t.map((function(e,t){var a=e.name,n=e.events;return r.a.createElement("div",{className:"col-sm",key:t},r.a.createElement("table",{className:"table table-bordered table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"text-center",colSpan:"2"},a))),r.a.createElement("tbody",null,n.map((function(e,a){var n=e.activity,i=e.time;return r.a.createElement("tr",{key:t+","+a},r.a.createElement("td",null,i),r.a.createElement("td",null,n))})))))})))))},ne=a("r2wF"),re=a.n(ne),ie=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){return r.a.createElement("section",{className:re.a.googleMaps},r.a.createElement("iframe",{src:this.props.map,frameBorder:"0",title:"Map of Royal Holloway, University of London"}))},t}(n.Component),oe=a("wtQ5"),se=a("VQsd"),le=a.n(se),ce=function(e){var t=e.year;return r.a.createElement("a",{id:"mlh-trust-badge",className:le.a.badge,href:"https://mlh.io/seasons/eu-"+t+"/events?utm_source=eu-hackathon&amp;utm_medium=TrustBadge&amp;utm_campaign="+t+"-season&amp;utm_content=white",target:"_blank",rel:"noreferrer"},r.a.createElement("img",{src:"https://s3.amazonaws.com/logged-assets/trust-badge/"+t+"/mlh-trust-badge-"+t+"-gray.svg",alt:"Major League Hacking "+t+" Hackathon Season"}))};t.default=function(e){var t=e.data.markdownRemark.frontmatter,a=t.sponsors_list_enable,n=t.sponsors,i=t.sponsor_document_enable,o=t.sponsor_document,s=t.short_name,l=t.people_enable,c=t.people,d=t.faq,u=t.faq_enable,m=t.schedule_enable,p=t.schedule,h=t.start,g=t.start_timer_enable,v=t.hackathon_definition_enable,y=t.location_embed_enable,E=t.location_embed_link,w=t.mlh_badge_enable,S=t.mlh_badge_year;return r.a.createElement(Z.a,null,r.a.createElement(oe.a,{title:s}),r.a.createElement(J,{frontmatter:t}),g&&r.a.createElement(z,{start:h}),v&&r.a.createElement(V,null),y&&r.a.createElement(ie,{map:E}),u&&r.a.createElement(f,{faq:d}),a&&r.a.createElement(b,{sponsors:n,sponsor_document:o,sponsor_document_enable:i}),l&&r.a.createElement(te,{event_name:s,people:c}),m&&r.a.createElement(ae,{schedule:p}),w&&r.a.createElement(ce,{year:S}))}},"5iXs":function(e,t,a){e.exports={hackathonCountdown:"index-module--hackathonCountdown--1zR3z",segments:"index-module--segments--3JoME",segment:"index-module--segment--y0Tsy",digit:"index-module--digit--17Ays",label:"index-module--label--3F_BS"}},"9LZx":function(e,t,a){e.exports={faq:"index-module--faq--11h_r",title:"index-module--title--3BYhi"}},"9eSz":function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r,i=n(a("PJYZ")),o=n(a("VbXa")),s=n(a("8OQS")),l=n(a("pVnL")),c=n(a("q1tI")),d=n(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,n=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},m=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,n=f(t||a||[]);return n&&n.src},f=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(m);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),g=function(e){var t=u(e),a=p(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,E=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:r,srcSet:n,sizes:i}),a&&c.default.createElement("source",{media:r,srcSet:a,sizes:i}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:n})}))}function N(e){return e.map((function(e){var t=e.src,a=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:n})}))}function T(e,t){var a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?n:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var k=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?T(e,!0):"")+T(e)})).join("")+"<img "+c+o+s+a+n+t+i+r+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=c.default.forwardRef((function(e,t){var a=e.src,n=e.imageVariants,r=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=c.default.createElement(_,(0,l.default)({ref:t,src:a},i,{ariaHidden:o}));return n.length>1?c.default.createElement("picture",null,r(n),s):s})),_=c.default.forwardRef((function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,o=e.onLoad,d=e.onError,u=e.loading,m=e.draggable,p=e.ariaHidden,f=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:a,srcSet:n,src:r},f,{onLoad:o,onError:d,ref:t,loading:u,draggable:m,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));_.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var j=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var n=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=p(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,m=void 0===d?{}:d,p=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,E=e.itemProp,S=e.loading,T=e.draggable,k=h||g;if(!k)return null;var j=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,l.default)({opacity:j?1:0,transition:R?"opacity "+v+"ms":"none"},s),D="boolean"==typeof b?"lightgray":b,P={transitionDelay:v+"ms"},L=(0,l.default)({opacity:this.state.imgLoaded?0:1},R&&P,s,m),M={title:t,alt:this.state.isVisible?"":a,style:L,className:p,itemProp:E},z=this.state.isHydrated?f(k):k[0];if(h)return c.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:z.maxWidth?z.maxWidth+"px":null,maxHeight:z.maxHeight?z.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},c.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),D&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:D,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&P)}),z.base64&&c.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:z.base64,spreadProps:M,imageVariants:k,generateSources:N}),z.tracedSVG&&c.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:z.tracedSVG,spreadProps:M,imageVariants:k,generateSources:x}),this.state.isVisible&&c.default.createElement("picture",null,w(k),c.default.createElement(_,{alt:a,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:T})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,l.default)({alt:a,title:t,loading:S},z,{imageVariants:k}))}}));if(g){var H=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},i);return"inherit"===i.display&&delete H.display,c.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},D&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:D,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},R&&P)}),z.base64&&c.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:z.base64,spreadProps:M,imageVariants:k,generateSources:N}),z.tracedSVG&&c.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:z.tracedSVG,spreadProps:M,imageVariants:k,generateSources:x}),this.state.isVisible&&c.default.createElement("picture",null,w(k),c.default.createElement(_,{alt:a,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:T})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,l.default)({alt:a,title:t,loading:S},z,{imageVariants:k}))}}))}return null},t}(c.default.Component);j.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),I=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function D(e){return function(t,a,n){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+n+"`, but their values are both `undefined`.");d.default.checkPropTypes(((r={})[a]=e,r),t,"prop",n)}}j.propTypes={resolutions:R,sizes:I,fixed:D(d.default.oneOfType([R,d.default.arrayOf(R)])),fluid:D(d.default.oneOfType([I,d.default.arrayOf(I)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var P=j;t.default=P},JBfp:function(e,t,a){e.exports={description:"index-module--description--WbOJg",livestreamContainer:"index-module--livestreamContainer--376vk",livestream:"index-module--livestream--3HYJw",hackathonTitle:"index-module--hackathonTitle--2KJ22",name:"index-module--name--Za2CX"}},Qje8:function(e,t,a){e.exports={buttons:"index-module--buttons--1vPop"}},VQsd:function(e,t,a){e.exports={badge:"index-module--badge--vW8AQ"}},eI7z:function(e,t,a){e.exports={sponsorSection:"index-module--sponsorSection--OzCWe",sponsorTier:"index-module--sponsorTier--nJxHv",sponsor:"index-module--sponsor--Wiqxf",sponsorLogo:"index-module--sponsorLogo--FtlBb",sponsorButtonContainer:"index-module--sponsorButtonContainer--2Pufd",tier:"index-module--tier--KbycB",tier1:"index-module--tier1--1WVZb",tier2:"index-module--tier2--pdj2Z",tier3:"index-module--tier3--3gUND",tier4:"index-module--tier4--27arH"}},r2wF:function(e,t,a){e.exports={googleMaps:"index-module--googleMaps--umYkc"}},wNHi:function(e,t,a){e.exports={collapsable:"index-module--collapsable--1LTfS",button:"index-module--button--3EdA_",labelContainer:"index-module--labelContainer--1qI8p",arrowDown:"index-module--arrowDown--1NHZU",arrowUp:"index-module--arrowUp--cU319",container:"index-module--container--2hcI_",content:"index-module--content--3w8MN"}},zfRm:function(e,t,a){e.exports={header:"index-module--header--1zLqp",hackathonDef:"index-module--hackathonDef--29X88"}}}]);
//# sourceMappingURL=component---src-templates-events-index-js-ef3e7c8bbbfaf0169845.js.map