(window.webpackJsonpecom=window.webpackJsonpecom||[]).push([[0],{13:function(e,a,t){},23:function(e,a,t){e.exports=t(33)},33:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(19),r=t.n(c),o=t(5),s=t(6),i=t(8),m=t(7),d=t(9),u=(t(13),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={error:null,isLoaded:!1,products:[]},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/product").then(function(e){return e.json()}).then(function(a){console.log("data.products - ",a),e.setState({isLoaded:!0,products:a})},function(a){e.setState({isLoaded:!0,error:a})})}},{key:"render",value:function(){var e=this,a=this.state,t=a.error,n=a.isLoaded,c=a.products;return t?l.a.createElement("div",null,"Error: ",t.message):n?l.a.createElement("main",{role:"main"},l.a.createElement("div",null," "),l.a.createElement("section",{className:"jumbotron text-center"},l.a.createElement("div",{className:"container"},l.a.createElement("br",null),l.a.createElement("h1",{className:"jumbotron-heading"},"Sailor Products:"),l.a.createElement("p",{className:"lead text-muted"},"The latest sailor moon inspired merchindise !"))),l.a.createElement("p",null,"Type something in to see if we have any of the platforms or prices you are looking for:"),l.a.createElement("input",{id:"myInput",type:"text",placeholder:"Search..",onChange:function(a){return t=a.target.value,fetch("/product/".concat(t)).then(function(e){return e.json()}).then(function(a){console.log("data.products - ",a),e.setState({isLoaded:!0,products:a})},function(a){e.setState({isLoaded:!0,error:a})}),void console.log("value - ",t);var t}}),l.a.createElement("div",null,l.a.createElement("div",{className:"album py-5 bg-light"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},c.map(function(e,a){return l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"card mb-4 shadow-sm"},l.a.createElement("div",{className:"work-img"},l.a.createElement("div",{className:"img-overlay"},l.a.createElement("img",{className:"card-img-top img-fluid",src:e.img_url,alt:e.name,height:"350",width:"100%"}))),l.a.createElement("div",{className:"card-block"},l.a.createElement("h6",null,e.name),l.a.createElement("p",{className:"card-text"},e.description),l.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},l.a.createElement("div",{className:"btn-group"},l.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-dark"},"View"),l.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-dark"},"Buy"))),l.a.createElement("small",{className:"p-1 mb-1 bg-info text-white"},"$",e.amount))))}))))),l.a.createElement("div",null)):l.a.createElement("div",null,"Loading...")}}]),a}(l.a.Component)),E=t(20),p=t(10),h=function(){return l.a.createElement("div",{id:"carouselExampleIndicators",class:"carousel slide","data-ride":"carousel"},l.a.createElement("ol",{class:"carousel-indicators"},l.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"0",class:"active"}),l.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}),l.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"2"})),l.a.createElement("div",{class:"carousel-inner"},l.a.createElement("div",{class:"carousel-item active"},l.a.createElement("img",{class:"d-block w-100",src:"/data/img/slide4.jpg",alt:"First slide"})),l.a.createElement("div",{class:"carousel-item"},l.a.createElement("img",{class:"d-block w-100",src:"/data/img/slide5.png",alt:"Second slide"})),l.a.createElement("div",{class:"carousel-item"},l.a.createElement("img",{class:"d-block w-100",src:"/data/img/slide3.jpg",alt:"Third slide"}))),l.a.createElement("a",{class:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev"},l.a.createElement("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),l.a.createElement("span",{class:"sr-only"},"Previous")),l.a.createElement("a",{class:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next"},l.a.createElement("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),l.a.createElement("span",{class:"sr-only"},"Next")))},v=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null),l.a.createElement("section",{id:"who"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-md-6"},l.a.createElement("h2",null,"Sailor Merch"),l.a.createElement("hr",{align:"left",width:"50%"}),l.a.createElement("p",{class:"lead"},"A collection of the latest Sailor Moon gifts and merchandise you can buy online! Includes products such as clothes, jewelry and accessories inspired by your favorite Sailor Scouts and guardian cats. You won\u2019t believe some of the Sailor Moon merch we find online that will have you reaching for your wallet."),l.a.createElement("button",{type:"button",class:"btn btn-who"},"Check it Out")),l.a.createElement("div",{class:"col-md-6"},l.a.createElement("img",{class:"img-fluid",src:"/data/img/merchside.png",alt:"fashion"}))))))}}]),a}(l.a.Component);function b(){return l.a.createElement("nav",{class:"navbar navbar-expand-lg fixed-top"},l.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navigation-bar"},l.a.createElement("span",{class:"navbar-toggler-icon"},"\u2630")),l.a.createElement("a",{class:"navbar-brand",href:"/index"},l.a.createElement("img",{src:"/data/img/moon-icon.png",alt:"Logo"})),l.a.createElement("div",{class:"collapse navbar-collapse",id:"navigation-bar"},l.a.createElement("ul",{class:"navbar-nav ml-auto"},l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link",href:"/"},"HOME")),l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link",href:"/cards"},"PRODUCTS")),l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link",href:"/contact"},"CONTACT")))))}function f(){return l.a.createElement("section",{id:"footer"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-md-8 col-sm-6"},l.a.createElement("br",null),l.a.createElement("h3",null,"Return Policy:"),l.a.createElement("p",null,"If you don\u2019t like your item(z) for any reason (they don\u2019t fit, have an imperfection, or just clash with your dog) you can submit your return for store credit within 30 days of receiving your order."),l.a.createElement("p",null,"Processing returns takes up to 7 business days after they are delivered to our warehouse, so please be a little patient with us, we will get to your return ASAP cuz we wanna make ya happy! DUHHH!"),l.a.createElement("ul",{class:"list-inline"},l.a.createElement("li",{class:"list-inline-item"},l.a.createElement("a",{href:"https://www.facebook.com"},l.a.createElement("i",{class:"fa fa-facebook"}))),l.a.createElement("li",{class:"list-inline-item"},l.a.createElement("a",{href:"https://www.twitter.com"},l.a.createElement("i",{class:"fa fa-twitter"}))),l.a.createElement("li",{class:"list-inline-item"},l.a.createElement("a",{href:"https://www.instagram.com"},l.a.createElement("i",{class:"fa fa-instagram"}))),l.a.createElement("li",{class:"list-inline-item"},l.a.createElement("a",{href:"https://www.pintrest.com"},l.a.createElement("i",{class:"fa fa-pinterest-p"}))),l.a.createElement("li",{class:"list-inline-item"},l.a.createElement("a",{href:"https://www.google.com"},l.a.createElement("i",{class:"fa fa-google-plus"}))),l.a.createElement("li",{class:"list-inline-item"},l.a.createElement("a",{href:"https://www.rss.com"},l.a.createElement("i",{class:"fa fa-rss"}))))),l.a.createElement("div",{class:"col-md-4 col-sm-6"},l.a.createElement("h3",null,"Say hello:"),l.a.createElement("ul",{class:"list-unstyled"},l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("strong",null,l.a.createElement("i",{class:"fa fa-map-marker"})," Address:"),"1-2-3 Kaigan, Minato-ku, Tokyo")),l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("strong",null,l.a.createElement("i",{class:"fa fa-envelope"})," Email:"),l.a.createElement("a",{href:"#"},"sailor@moon.com"))),l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("strong",null,l.a.createElement("i",{class:"fa fa-phone"})," Phone:")," +1 678 456 7890"))))),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-md-12"},l.a.createElement("p",null,"\xa9 2019 Designed by Lenny Dickey (Last updated October 2019)")))))}var g=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={error:null,isLoaded:!1,contact:[]},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/contact").then(function(e){return e.json()}).then(function(a){console.log("data.contact - ",a),e.setState({isLoaded:!0,contact:a})},function(a){e.setState({isLoaded:!0,error:a})})}},{key:"render",value:function(){var e=this.state,a=(e.error,e.isLoaded,e.contact);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"con"},l.a.createElement("h2",null,"Contact Us:"),l.a.createElement("form",{action:""},l.a.createElement("section",{className:"left"},l.a.createElement("div",{className:"input-container"},l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",required:!0})),l.a.createElement("div",{className:"input-container"},l.a.createElement("label",{htmlFor:"age",required:!0},"Age"),l.a.createElement("input",{type:"text",required:!0})),l.a.createElement("div",{className:"input-container"},l.a.createElement("label",{htmlFor:"phone"},"Phone"),l.a.createElement("input",{type:"text",required:!0})),l.a.createElement("div",{className:"input-container"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"text",required:!0}))),l.a.createElement("section",{className:"right"},l.a.createElement("div",{className:"input-container"},l.a.createElement("label",{htmlFor:"address"},"Address 1"),l.a.createElement("input",{type:"text",required:!0})),l.a.createElement("div",{className:"input-container"},l.a.createElement("label",{htmlFor:"subject"},"Subject"),l.a.createElement("input",{type:"text",required:!0})),l.a.createElement("div",{className:"input-container"},l.a.createElement("label",{htmlFor:"comments"},"Comments"),l.a.createElement("textarea",{name:"comments",id:"",required:!0}))),l.a.createElement("div",{className:"send-container"},l.a.createElement("input",{type:"submit",value:"Send",onClick:"return true"})))),l.a.createElement("br",null),l.a.createElement("h2",null,"Reviews"),a.map(function(e,a){return l.a.createElement("div",{class:"card-body conrew"},l.a.createElement("blockquote",{class:"blockquote mb-0"},l.a.createElement("p",null,e.comment),l.a.createElement("footer",{class:"blockquote-footer"},e.name)))}))}}]),a}(l.a.Component),y=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={error:null,isLoaded:!1,products:[]},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/product").then(function(e){return e.json()}).then(function(a){console.log("data.products - ",a),e.setState({isLoaded:!0,products:a})},function(a){e.setState({isLoaded:!0,error:a})})}},{key:"render",value:function(){var e=this,a=this.state,t=a.error,n=a.isLoaded,c=a.products,r=function(a){fetch("/productfilter/".concat(a)).then(function(e){return e.json()}).then(function(a){console.log("data.products - ",a),e.setState({isLoaded:!0,products:a})},function(a){e.setState({isLoaded:!0,error:a})}),console.log("value - ",a)};return t?l.a.createElement("div",null,"Error: ",t.message):n?l.a.createElement("main",{role:"main"},l.a.createElement("div",null," "),l.a.createElement("section",{className:"jumbotron text-center",id:"pwrap"},l.a.createElement("div",{className:"container lol"},l.a.createElement("br",null),l.a.createElement("h1",{className:"jumbotron-heading"},"Sailor Products:"),l.a.createElement("p",{className:"lead "},"The latest sailor moon inspired merchindise !"))),l.a.createElement("div",{id:"acc"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header",id:"headingOne"},l.a.createElement("h5",{className:"mb-0"},l.a.createElement("button",{className:"btn ","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"Filter By Type"," "))),l.a.createElement("div",{id:"collapseOne",className:"collapse show","aria-labelledby":"headingOne","data-parent":"#accordion"},l.a.createElement("div",{className:"card-body pl"},l.a.createElement("button",{type:"button",class:"btn btn-outline-info type",onClick:function(){return r(40)}},"Clothes"),l.a.createElement("button",{type:"button",class:"btn btn-outline-info type",onClick:function(){return r(25)}},"House"),l.a.createElement("button",{type:"button",class:"btn btn-outline-info type",onClick:function(){return r(15)}},"Jewlery")))),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header",id:"headingTwo"},l.a.createElement("h5",{className:"mb-0"},l.a.createElement("button",{className:"btn collapsed","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},"Price Filter"))),l.a.createElement("div",{id:"collapseTwo",class:"collapse","aria-labelledby":"headingTwo","data-parent":"#accordion"},l.a.createElement("div",{className:"card-body"},l.a.createElement("p",null,"Search by Price:"),l.a.createElement("input",{id:"myInput",type:"text",placeholder:"Search..",onChange:function(e){return r(e.target.value)}}),l.a.createElement("button",{type:"button",class:"btn btn-outline-info type",onClick:function(){return fetch("/product/".concat(a)).then(function(e){return e.json()}).then(function(a){console.log("data.products - ",a),e.setState({isLoaded:!0,products:a})},function(a){e.setState({isLoaded:!0,error:a})}),void console.log("value - ",a);var a}},"Reset"))))),l.a.createElement("div",null,l.a.createElement("div",{className:"album py-5"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},c.map(function(e,a){return l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"card mb-4 shadow-sm"},l.a.createElement("div",{className:"card-deck"},l.a.createElement("div",{className:"card",id:"foo"},l.a.createElement("img",{className:"card-img-top rounded",src:e.img_url,alt:e.name}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h6",{className:"card-title"},e.name),l.a.createElement("p",{className:"card-text"},e.description)),l.a.createElement("div",{className:"card-footer"},l.a.createElement("small",{className:"price"},"$",e.amount),l.a.createElement("button",{type:"button",className:"btn btn-info float-right"},"Buy")))," ")))}))))),l.a.createElement("div",null)):l.a.createElement("div",null,"Loading...")}}]),a}(l.a.Component);var w=function(){return l.a.createElement(E.a,null,l.a.createElement("div",null,l.a.createElement(b,null),l.a.createElement(p.a,{exact:!0,path:"/",component:v}),l.a.createElement(p.a,{exact:!0,path:"/product",component:u}),l.a.createElement(p.a,{exact:!0,path:"/contact",component:g}),l.a.createElement(p.a,{exact:!0,path:"/cards",component:y}),l.a.createElement("br",null),l.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.2f99a946.chunk.js.map