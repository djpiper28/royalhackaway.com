(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{RNVs:function(e,t,n){"use strict";n.r(t);var a=n("JX7q"),i=n("dI71"),r=n("q1tI"),o=n.n(r),m=n("Zttt"),s=n("wtQ5"),c=n("bHaF"),u=n.n(c),d=function(e){function t(t){var n;n=e.call(this,t)||this;var i=t.data.markdownRemark.frontmatter,r=i.hacking_start,o=i.hacking_end,m=new Date(r),s=new Date(o),c=s-m;return n.state={remainingTime:0,startTime:m,endTime:s,difference:c},n.running=!0,n.updateTimer=n.updateTimer.bind(Object(a.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){requestAnimationFrame(this.updateTimer)},n.componentWillUnmount=function(){this.running=!1},n.updateTimer=function(){var e=this.state,t=e.startTime,n=e.endTime,a=new Date,i=Math.max(0,n-Math.max(t,a));this.setState({remainingTime:i}),this.running&&requestAnimationFrame(this.updateTimer)},n.render=function(){var e=this.props.data.markdownRemark.frontmatter,t=this.state,n=t.remainingTime,a=100-n/t.difference*100,i=e.name,r=e.full_description,c=e.jumbotron_image,d=Math.floor(n/1e3)%60,l=Math.floor(n/1e3/60)%60,p=Math.floor(n/1e3/60/60);return o.a.createElement(m.a,null,o.a.createElement(s.a,{title:i,description:r,image:null==c?void 0:c.publicURL}),o.a.createElement("section",{className:u.a.background,style:{backgroundImage:"linear-gradient(to right, #f48c42, "+a+"%, green)"}},o.a.createElement("h1",null,"Hacking Time"),o.a.createElement("p",{className:"display-1"},p," hour",1!==p&&"s"," ",l," min",1!==l&&"s"," ",d," sec",1!==d&&"s")))},t}(r.Component);t.default=d},bHaF:function(e,t,n){e.exports={background:"index-module--background--PBghZ"}}}]);
//# sourceMappingURL=component---src-templates-timer-index-js-7299aada4b095ad810f3.js.map