(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{180:function(e,a,t){"use strict";var l=t(38),r=t(11),n=t(5),c=t.n(n),s=t(1),m=t.n(s),u=(t(24),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),o=function(e){var a,t=e.tag,n=e.className,s=e.type,o=Object(r.a)(e,["tag","className","type"]),i=c()(Object(l.a)({},s,!!s),n);return a=t||(!t&&u[s]?u[s]:"p"),m.a.createElement(a,Object.assign({},o,{className:i}))};o.defaultProps={type:"p"},a.a=o},181:function(e,a,t){"use strict";var l=t(11),r=t(1),n=t.n(r),c=(t(24),t(33)),s=t(185),m=t(186),u=t(180),o=c.a.create("page"),i=function(e){var a=e.title,t=e.breadcrumbs,r=e.tag,c=e.className,i=e.children,b=Object(l.a)(e,["title","breadcrumbs","tag","className","children"]),d=o.b("px-3",c);return n.a.createElement(r,Object.assign({className:d},b),n.a.createElement("div",{className:o.e("header")},a&&"string"===typeof a?n.a.createElement(u.a,{type:"h1",className:o.e("title")},a):a,t&&n.a.createElement(s.a,{className:o.e("breadcrumb")},n.a.createElement(m.a,null,"Home"),t.length&&t.map(function(e,a){var t=e.name,l=e.active;return n.a.createElement(m.a,{key:a,active:l},t)}))),i)};i.defaultProps={tag:"div",title:""},a.a=i},185:function(e,a,t){"use strict";var l=t(4),r=t(6),n=t(1),c=t.n(n),s=t(2),m=t.n(s),u=t(5),o=t.n(u),i=t(3),b={tag:i.p,listTag:i.p,className:m.a.string,listClassName:m.a.string,cssModule:m.a.object,children:m.a.node,"aria-label":m.a.string},d=function(e){var a=e.className,t=e.listClassName,n=e.cssModule,s=e.children,m=e.tag,u=e.listTag,b=e["aria-label"],d=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),p=Object(i.l)(o()(a),n),E=Object(i.l)(o()("breadcrumb",t),n);return c.a.createElement(m,Object(l.a)({},d,{className:p,"aria-label":b}),c.a.createElement(u,{className:E},s))};d.propTypes=b,d.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=d},186:function(e,a,t){"use strict";var l=t(4),r=t(6),n=t(1),c=t.n(n),s=t(2),m=t.n(s),u=t(5),o=t.n(u),i=t(3),b={tag:i.p,active:m.a.bool,className:m.a.string,cssModule:m.a.object},d=function(e){var a=e.className,t=e.cssModule,n=e.active,s=e.tag,m=Object(r.a)(e,["className","cssModule","active","tag"]),u=Object(i.l)(o()(a,!!n&&"active","breadcrumb-item"),t);return c.a.createElement(s,Object(l.a)({},m,{className:u,"aria-current":n?"page":void 0}))};d.propTypes=b,d.defaultProps={tag:"li"},a.a=d},191:function(e,a,t){"use strict";t.d(a,"a",function(){return l}),t.d(a,"b",function(){return r});var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"primary";return"undefined"===typeof window?null:window.getComputedStyle(document.documentElement).getPropertyValue("--".concat(e))},r=function(){return["primary","secondary","success","info","warning","danger"]}},210:function(e,a){var t=NaN,l="[object Symbol]",r=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,m=parseInt,u=Object.prototype.toString;function o(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}e.exports=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&u.call(e)==l}(e))return t;if(o(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=o(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var i=c.test(e);return i||s.test(e)?m(e.slice(2),i?2:8):n.test(e)?t:+e}},302:function(e,a,t){"use strict";var l=t(4),r=t(6),n=t(1),c=t.n(n),s=t(2),m=t.n(s),u=t(5),o=t.n(u),i=t(210),b=t.n(i),d=t(3),p={children:m.a.node,bar:m.a.bool,multi:m.a.bool,tag:d.p,value:m.a.oneOfType([m.a.string,m.a.number]),max:m.a.oneOfType([m.a.string,m.a.number]),animated:m.a.bool,striped:m.a.bool,color:m.a.string,className:m.a.string,barClassName:m.a.string,cssModule:m.a.object},E=function(e){var a=e.children,t=e.className,n=e.barClassName,s=e.cssModule,m=e.value,u=e.max,i=e.animated,p=e.striped,E=e.color,v=e.bar,f=e.multi,g=e.tag,N=Object(r.a)(e,["children","className","barClassName","cssModule","value","max","animated","striped","color","bar","multi","tag"]),h=b()(m)/b()(u)*100,y=Object(d.l)(o()(t,"progress"),s),x=Object(d.l)(o()("progress-bar",v&&t||n,i?"progress-bar-animated":null,E?"bg-"+E:null,p||i?"progress-bar-striped":null),s),O=f?a:c.a.createElement("div",{className:x,style:{width:h+"%"},role:"progressbar","aria-valuenow":m,"aria-valuemin":"0","aria-valuemax":u,children:a});return v?O:c.a.createElement(g,Object(l.a)({},N,{className:y,children:O}))};E.propTypes=p,E.defaultProps={tag:"div",value:0,max:100},a.a=E},579:function(e,a,t){"use strict";t.r(a);var l=t(181),r=t(1),n=t.n(r),c=t(172),s=t(173),m=t(157),u=t(162),o=t(158),i=t(302),b=t(191),d=Object(b.b)(),p=function(){return Math.floor(80*Math.random()+20)};a.default=function(){return n.a.createElement(l.a,{title:"Progress",breadcrumbs:[{name:"progress",active:!0}]},n.a.createElement(c.a,null,n.a.createElement(s.a,{md:"6",sm:"12",xs:"12"},n.a.createElement(m.a,null,n.a.createElement(u.a,null,"Colors"),n.a.createElement(o.a,null,d.map(function(e,a){return n.a.createElement(i.a,{key:a,color:e,value:p(),className:"mb-3"})})))),n.a.createElement(s.a,{md:"6",sm:"12",xs:"12"},n.a.createElement(m.a,null,n.a.createElement(u.a,null,"Labels"),n.a.createElement(o.a,null,d.map(function(e,a){var t=p();return n.a.createElement(i.a,{key:a,color:e,value:t,className:"mb-3"},t,"%")}))))),n.a.createElement(c.a,null,n.a.createElement(s.a,{md:"6",sm:"12",xs:"12"},n.a.createElement(m.a,null,n.a.createElement(u.a,null,"Striped"),n.a.createElement(o.a,null,d.map(function(e,a){return n.a.createElement(i.a,{key:a,striped:!0,color:e,value:p(),className:"mb-3"})})))),n.a.createElement(s.a,{md:"6",sm:"12",xs:"12"},n.a.createElement(m.a,null,n.a.createElement(u.a,null,"Animated"),n.a.createElement(o.a,null,d.map(function(e,a){return n.a.createElement(i.a,{key:a,animated:!0,color:e,value:p(),className:"mb-3"})}))))),n.a.createElement(c.a,null,n.a.createElement(s.a,{md:"6",sm:"12",xs:"12"},n.a.createElement(m.a,null,n.a.createElement(u.a,null,"Multiple Bars / Stacked"),n.a.createElement(o.a,null,n.a.createElement("p",{className:"text-center mt-3"},"Plain"),n.a.createElement(i.a,{multi:!0},n.a.createElement(i.a,{bar:!0,value:"15"}),n.a.createElement(i.a,{bar:!0,color:"success",value:"20"}),n.a.createElement(i.a,{bar:!0,color:"info",value:"25"}),n.a.createElement(i.a,{bar:!0,color:"warning",value:"20"}),n.a.createElement(i.a,{bar:!0,color:"danger",value:"15"})),n.a.createElement("p",{className:"text-center mt-3"},"With Labels"),n.a.createElement(i.a,{multi:!0},n.a.createElement(i.a,{bar:!0,value:"15"},"Meh"),n.a.createElement(i.a,{bar:!0,color:"success",value:"35"},"Wow!"),n.a.createElement(i.a,{bar:!0,color:"warning",value:"25"},"25%"),n.a.createElement(i.a,{bar:!0,color:"danger",value:"25"},"LOOK OUT!!")),n.a.createElement("p",{className:"text-center mt-3"},"Stripes and Animations"),n.a.createElement(i.a,{multi:!0},n.a.createElement(i.a,{bar:!0,striped:!0,value:"15"},"Stripes"),n.a.createElement(i.a,{bar:!0,animated:!0,color:"success",value:"30"},"Animated Stripes"),n.a.createElement(i.a,{bar:!0,color:"info",value:"25"},"Plain"))))),n.a.createElement(s.a,{md:"6",sm:"12",xs:"12"},n.a.createElement(m.a,null,n.a.createElement(u.a,null,"Max value"),n.a.createElement(o.a,null,n.a.createElement("div",{className:"text-center"},"1 of 5"),n.a.createElement(i.a,{value:"1",max:"5"}),n.a.createElement("div",{className:"text-center"},"50 of 135"),n.a.createElement(i.a,{value:50,max:"135"}),n.a.createElement("div",{className:"text-center"},"75 of 111"),n.a.createElement(i.a,{value:75,max:111}),n.a.createElement("div",{className:"text-center"},"463 of 500"),n.a.createElement(i.a,{value:"463",max:500}),n.a.createElement("div",{className:"text-center"},"Various (40) of 55"),n.a.createElement(i.a,{multi:!0},n.a.createElement(i.a,{bar:!0,value:"5",max:55},"5"),n.a.createElement(i.a,{bar:!0,color:"success",value:"15",max:55},"15"),n.a.createElement(i.a,{bar:!0,color:"warning",value:"10",max:55},"10"),n.a.createElement(i.a,{bar:!0,color:"danger",value:"10",max:55},"10")))))))}}}]);
//# sourceMappingURL=21.18b5cbd0.chunk.js.map