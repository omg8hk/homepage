(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{25:function(e,t,a){e.exports=a(56)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},50:function(e,t,a){e.exports=a.p+"static/media/loading.856c1c54.gif"},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),i=(a(30),a(3)),o=a(4),s=a(6),p=a(5),m=(a(31),a(1)),u=(a(32),a(33),a(34),function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(){}},{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="/assets/js/main.js",document.body.appendChild(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"banner full"},this.props.arr.map((function(t,a){return t.page===e.props.page.toUpperCase()?r.a.createElement("article",{key:a},r.a.createElement("img",{"data-src":"/slide/"+e.props.page+"/slide0"+t.seq+e.props.jpgName,alt:""}),r.a.createElement("div",{className:"inner"},r.a.createElement("header",null,r.a.createElement("p",{style:{fontSize:"2vw"}},t.sentence),r.a.createElement("h2",{style:{fontSize:"5vw"}},t.title)))):null})))}}]),a}(r.a.Component)),h=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).menu=function(){return e.props.arrM.length>0?e.props.arrM.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{href:e.link.indexOf("http")>-1?e.link:"/"+e.link},e.title))})):e.props.arr.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{href:e.link.indexOf("http")>-1?e.link:"/"+e.link},e.title))}))},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{id:"menu"},r.a.createElement("ul",{className:"links"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://omg8hk.com"},"Home")),this.menu()))}}]),a}(r.a.Component),d=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{id:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"icons"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/omg8_hk",className:"icon fa-twitter"},r.a.createElement("span",{className:"label"},"Twitter"))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/omg8hk/",className:"icon fa-facebook"},r.a.createElement("span",{className:"label"},"Facebook"))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.instagram.com/omg8_hk/",className:"icon fa-instagram"},r.a.createElement("span",{className:"label"},"Instagram"))))),r.a.createElement("div",{className:"copyright"},"HK Miracle Whatsapp Group \u8acbDM\u6211\u5011\u52a0\u5165",r.a.createElement("br",null),"OMG8HK \xa9 Untitled. All rights reserved."))}}]),a}(r.a.Component),f=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{id:"header",className:"alt"},r.a.createElement("div",{className:"logo"},r.a.createElement("a",{href:"https://omg8hk.com"},"OMG8HK ",r.a.createElement("span",null,"for OHMYGIRL"))),r.a.createElement("a",{href:"#menu"},"Menu"))}}]),a}(r.a.Component),g=a(23),E=(a(35),a(36),a(37),a(38),a(12)),b=a.n(E);!function(e,t){var a=e("html, body");e.CBPNTAccordion=function(t,a){this.$el=e(a),this._init(t)},e.CBPNTAccordion.defaults={},e.CBPNTAccordion.prototype={_init:function(t){this.options=e.extend(!0,{},e.CBPNTAccordion.defaults,t),this._config(),this._initEvents()},_config:function(){this.$items=this.$el.find(".cbp-nttrigger")},_initEvents:function(){this.$items.on("click.cbpNTAccordion",(function(){var t=e(this).parent();t.hasClass("cbp-ntopen")?t.removeClass("cbp-ntopen"):(t.addClass("cbp-ntopen"),a.scrollTop(t.offset().top))}))},destroy:function(){this.$items.off(".cbpNTAccordion").parent().removeClass("cbp-ntopen")}};var n=function(e){t.console&&t.console.error(e)};e.fn.cbpNTAccordion=function(t){if("string"===typeof t){var a=Array.prototype.slice.call(arguments,1);this.each((function(){var r=e.data(this,"cbpNTAccordion");r?e.isFunction(r[t])&&"_"!==t.charAt(0)?r[t].apply(r,a):n("no such method '"+t+"' for cbpNTAccordion instance"):n("cannot call methods on cbpNTAccordion prior to initialization; attempted to call method '"+t+"'")}))}else this.each((function(){var a=e.data(this,"cbpNTAccordion");a?a._init():a=e.data(this,"cbpNTAccordion",new e.CBPNTAccordion(t,this))}));return this}}(b.a,window);var v=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).lastD="",a.isSubOpen=!1,a.lastT="",a.lvl=1,a.isST=!1,a.htmlEle="",a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.arr===[]||this.isSelect||(b()("#cbp-ntaccordion").cbpNTAccordion(),this.isSelect=!0)}},{key:"render",value:function(){var e=this;if(Array.isArray(this.props.arr)&&this.props.arr.length){var t=a(39);return"INDEX"===this.props.page.toUpperCase()||"FORM"===this.props.page.toUpperCase()||"RESOURCE"===this.props.page.toUpperCase()?r.a.createElement("section",{id:"one",className:"wrapper style2"},r.a.createElement("div",{className:"inner"},r.a.createElement("div",{className:"grid-style"},this.props.arr.map((function(t,a){return""===t.image.trim()?r.a.createElement("div",{key:a},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"content"},r.a.createElement("header",{className:"align-center"},r.a.createElement("h2",null,"[",t.title,"]")),r.a.createElement("footer",{className:"align-center"},r.a.createElement("a",{href:t.link.indexOf("http")>-1?t.link:"/"+t.link,className:"button alt"},"Learn More"))))):r.a.createElement("div",{key:a},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"image fit"},r.a.createElement(g.LazyLoadImage,{src:"/images/"+t.image.split(".")[0]+e.props.jpgName,alt:"",effect:"blur"})),r.a.createElement("div",{className:"content"},r.a.createElement("header",{className:"align-center"},r.a.createElement("p",null,t.tag),r.a.createElement("h2",null,"[",t.title,"]")),r.a.createElement("footer",{className:"align-center"},r.a.createElement("a",{href:t.link.indexOf("http")>-1?t.link:"/"+t.link,className:"button alt"},"Learn More")))))}))))):r.a.createElement("section",{id:"one",className:"wrapper style2"},r.a.createElement("div",{className:"inner"},r.a.createElement("ul",{id:"cbp-ntaccordion",className:"cbp-ntaccordion"},this.props.arr.map((function(t,a){return"-"!==t.link&&""!==t.link||(t.link=""),e.lastD!==t.date?(2===e.lvl&&(e.htmlEle+="</ul>"),e.lvl=1,""===t.subTitle||"undefined"===typeof t.subTitle?e.htmlEle+='<li><h3 class="cbp-nttrigger">'+t.date+'</h3><div class="cbp-ntcontent"><p>'+t.title+'<br /><a href="'+t.link+'" target="_blank">'+t.link+"</a></p>":(e.htmlEle+='<li><h3 class="cbp-nttrigger">'+t.date+'</h3><div class="cbp-ntcontent"><ul class="cbp-ntsubaccordion"><li><h4 class="cbp-nttrigger">'+t.title+'</h4><div class="cbp-ntcontent"><p>'+t.subTitle+'<br /><a href="'+t.link+'" target="_blank">'+t.link+"</a></p>",e.lvl++)):2===e.lvl?e.lastT!==t.title?""===t.subTitle||"undefined"===typeof t.subTitle?(e.lvl=1,e.htmlEle+="</ul><p>"+t.title+'<br /><a href="'+t.link+'" target="_blank">'+t.link+"</a></p>"):e.htmlEle+='<li><h4 class="cbp-nttrigger">'+t.title+'</h4><div class="cbp-ntcontent"><p>'+t.subTitle+'<br /><a href="'+t.link+'" target="_blank">'+t.link+"</a></p>":e.htmlEle+="<p>"+t.subTitle+'<br /><a href="'+t.link+'" target="_blank">'+t.link+"</a></p>":""===t.subTitle||"undefined"===typeof t.subTitle?e.lastT!==t.title?e.htmlEle+="<p>"+t.title+'<br /><a href="'+t.link+'" target="_blank">'+t.link+"</a></p>":e.htmlEle+='<li><h4 class="cbp-nttrigger">'+t.title+'</h4><div class="cbp-ntcontent"><p><br /><a href="'+t.link+'" target="_blank">'+t.link+"</a></p>":(e.htmlEle+='<ul class="cbp-ntsubaccordion"><li><h4 class="cbp-nttrigger">'+t.title+'</h4><div class="cbp-ntcontent"><p>'+t.subTitle+'<br /><a href="'+t.link+'" target="_blank">'+t.link+"</a></p>",e.lvl++),e.lastT=t.title,e.lastD=t.date,null})),t(this.htmlEle))))}return r.a.createElement("section",{id:"one",className:"wrapper loading"},r.a.createElement("center",null," Loading....."))}}]),n}(r.a.Component),k=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{className:"App-logo",src:a(50),alt:"loading"})))}}]),n}(r.a.Component),N=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(e){var n;Object(i.a)(this,a),(n=t.call(this,e)).state={pageArr:[],menuArr:[],dataIsReturned:!1},n.page=e.page;var r={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)||navigator.userAgent.match(/WPDesktop/i)},any:function(){return r.Android()||r.BlackBerry()||r.iOS()||r.Opera()||r.Windows()}};return r.any()?n.jpgName="-1.jpg":n.jpgName=".jpg",n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://script.google.com/macros/s/AKfycbz_bCXOHyJKO9j5Qx4COWRD1zYgCoClrbtRyIHZDOMiMTX1Ar-L/exec?sheet="+this.page.toUpperCase()).then((function(e){return e.json()})).then((function(t){var a=new Image;a.onload=function(){t.menu?e.setState({pageArr:t.page,menuArr:t.menu,slideArr:t.slide,dataIsReturned:!0}):e.setState({pageArr:t.page,slideArr:t.slide,dataIsReturned:!0})},a.src="/slide/"+e.page+"/slide0"+t.slide[0].seq+e.jpgName})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){return this.state.dataIsReturned?r.a.createElement("div",{className:"Main"},r.a.createElement(f,null),r.a.createElement(h,{arr:this.state.pageArr,arrM:this.state.menuArr}),r.a.createElement(u,{page:this.page,jpgName:this.jpgName,arr:this.state.slideArr}),r.a.createElement(v,{arr:this.state.pageArr,page:this.page,jpgName:this.jpgName}),r.a.createElement(d,null)):r.a.createElement(k,null)}}]),a}(r.a.Component),O=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",exact:!0,render:function(){return r.a.createElement(N,{page:"Index"})}}),r.a.createElement(m.a,{path:"/Form",render:function(){return r.a.createElement(N,{page:"Form"})}}),r.a.createElement(m.a,{path:"/Resource",render:function(){return r.a.createElement(N,{page:"Resource"})}}),r.a.createElement(m.a,{path:"/NONSTOP",render:function(){return r.a.createElement(N,{page:"NONSTOP"})}}),r.a.createElement(m.a,{path:"/BUNGEE",render:function(){return r.a.createElement(N,{page:"BUNGEE"})}}),r.a.createElement(m.a,{path:"/SSFWL",render:function(){return r.a.createElement(N,{page:"SSFWL"})}}),r.a.createElement(m.a,{path:"/RM",render:function(){return r.a.createElement(N,{page:"RM"})}}),r.a.createElement(m.a,{path:"/BAM",render:function(){return r.a.createElement(N,{page:"BAM"})}}),r.a.createElement(m.a,{path:"/SG",render:function(){return r.a.createElement(N,{page:"SG"})}}),r.a.createElement(m.a,{path:"/BONVOYAGE",exact:!0,render:function(){return r.a.createElement(N,{page:"BONVOYAGE"})}}),r.a.createElement(m.a,{path:"/DUNDUNDANCE",exact:!0,render:function(){return r.a.createElement(N,{page:"DUNDUNDANCE"})}}),r.a.createElement(m.a,{component:function(){return r.a.createElement("div",null,"404 Not found ")}}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=a(15);l.a.render(r.a.createElement(y.a,{basename:""},r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.f47173e8.chunk.js.map