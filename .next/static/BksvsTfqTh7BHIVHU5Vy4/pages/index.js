(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{RNiq:function(t,e,n){"use strict";n.r(e);var r=n("1OyB"),c=n("vuIU"),o=n("JX7q"),i=n("Ji7U"),u=n("md7G"),a=n("foSv"),s=n("rePB"),l=n("q1tI"),f=n.n(l),p=n("6mVS"),d=n("p7gN"),h=f.a.createElement;function y(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var b=function(t){Object(i.a)(l,t);var e,n=(e=l,function(){var t,n=Object(a.a)(e);if(y()){var r=Object(a.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(u.a)(this,t)});function l(){var t;Object(r.a)(this,l);for(var e=arguments.length,c=new Array(e),i=0;i<e;i++)c[i]=arguments[i];return t=n.call.apply(n,[this].concat(c)),Object(s.a)(Object(o.a)(t),"state",{open:!1}),Object(s.a)(Object(o.a)(t),"handleSelection",(function(e){var n=e.selection.map((function(t){return t.id}));t.setState({open:!1}),console.log(n)})),t}return Object(c.a)(l,[{key:"render",value:function(){var t=this;return h(p.h,null,h(d.TitleBar,{primaryAction:{content:"Select products",onAction:function(){return t.setState({open:!0})}}}),h(d.ResourcePicker,{resourceType:"Product",showVariants:!1,open:this.state.open,onSelection:function(e){return t.handleSelection(e)},onCancel:function(){return t.setState({open:!1})}}),h(p.g,null,h(p.d,{heading:"Discount your products temporarily",action:{content:"Select products",onAction:function(){return t.setState({open:!0})}},image:"https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"},h("p",null,"Select products to change their price temporarily."))))}}]),l}(f.a.Component);e.default=b},rePB:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2,3,5]]]);