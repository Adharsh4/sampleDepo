(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{180:function(e,a,t){"use strict";var l=t(38),n=t(11),s=t(5),c=t.n(s),r=t(1),i=t.n(r),m=(t(24),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),o=function(e){var a,t=e.tag,s=e.className,r=e.type,o=Object(n.a)(e,["tag","className","type"]),A=c()(Object(l.a)({},r,!!r),s);return a=t||(!t&&m[r]?m[r]:"p"),i.a.createElement(a,Object.assign({},o,{className:A}))};o.defaultProps={type:"p"},a.a=o},181:function(e,a,t){"use strict";var l=t(11),n=t(1),s=t.n(n),c=(t(24),t(33)),r=t(185),i=t(186),m=t(180),o=c.a.create("page"),A=function(e){var a=e.title,t=e.breadcrumbs,n=e.tag,c=e.className,A=e.children,d=Object(l.a)(e,["title","breadcrumbs","tag","className","children"]),u=o.b("px-3",c);return s.a.createElement(n,Object.assign({className:u},d),s.a.createElement("div",{className:o.e("header")},a&&"string"===typeof a?s.a.createElement(m.a,{type:"h1",className:o.e("title")},a):a,t&&s.a.createElement(r.a,{className:o.e("breadcrumb")},s.a.createElement(i.a,null,"Home"),t.length&&t.map(function(e,a){var t=e.name,l=e.active;return s.a.createElement(i.a,{key:a,active:l},t)}))),A)};A.defaultProps={tag:"div",title:""},a.a=A},185:function(e,a,t){"use strict";var l=t(4),n=t(6),s=t(1),c=t.n(s),r=t(2),i=t.n(r),m=t(5),o=t.n(m),A=t(3),d={tag:A.p,listTag:A.p,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},u=function(e){var a=e.className,t=e.listClassName,s=e.cssModule,r=e.children,i=e.tag,m=e.listTag,d=e["aria-label"],u=Object(n.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),g=Object(A.l)(o()(a),s),E=Object(A.l)(o()("breadcrumb",t),s);return c.a.createElement(i,Object(l.a)({},u,{className:g,"aria-label":d}),c.a.createElement(m,{className:E},r))};u.propTypes=d,u.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=u},186:function(e,a,t){"use strict";var l=t(4),n=t(6),s=t(1),c=t.n(s),r=t(2),i=t.n(r),m=t(5),o=t.n(m),A=t(3),d={tag:A.p,active:i.a.bool,className:i.a.string,cssModule:i.a.object},u=function(e){var a=e.className,t=e.cssModule,s=e.active,r=e.tag,i=Object(n.a)(e,["className","cssModule","active","tag"]),m=Object(A.l)(o()(a,!!s&&"active","breadcrumb-item"),t);return c.a.createElement(r,Object(l.a)({},i,{className:m,"aria-current":s?"page":void 0}))};u.propTypes=d,u.defaultProps={tag:"li"},a.a=u},270:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADAUlEQVRoge2Zy2sUQRDGf3E3iQ+iaHyieBHUUwQf4NFTDgqKiKAi4h8geFBQ4knMwYMnX6AIShA8GPCBxIMoKBJFgpqgQlxBEV1BBFExaDS7HrqGaWZ3Znpm7N4J7AfNMPX1VNfXM9XVvQtNTC5ULbVXwEKHOqwJcS7GG9SGT6dibAoZlusIMO8/jxE6qA2fs4EhHL0Zm0LAoRjbQsCRGBdCwIEYV0LAshiXQsCiGNdCwJKYRggBC2IaJQRUkfSKZmYxtrcoSdpIlNMWg0FN+iVBlokJjaOYwWlapJmUWPFTUjjNJZpC8oamkLwhq5ACcAgoAePAU40rAj3AKDAm3AxgP2oVuqT1XSG29xnjCUVcQewT/jNwHTircb3CjQL9wBOxrxP7M63vdrFdSRlHLKIcbNQCXVCH/wKUgWkBeyvqDf0G2sR2THztSxGHEaIc9Au3tw7XBvwF3lC/AN6XZ1fJ/Q25X50iDiNEOfgo3JIQ/p7wp/Fn3sNx4fbI/VvgO+E7DWtCWlAz/geV8PWwEvV5VYFBYJHGbRH7CWAmUAHupIjDGGEOimIfJ3rlW4a/FR8G2sU+HxX8ALBW+KNZAo1D1Ex8Ey7unNCBeiNVYIdmLwHvgN3CdWcJNEsd8c4HG2L6/UDlCcByzT4ILEUl+ATwOPBc1NmkBlmEXJXrEWBuHV7PnS65ljTbI1SubQVeoJLdGqI+rXbgOX5BHAAuCjcdVUOuoVavCvBa7B66NP9nDMdOnfRxD3YC51FCfknQoFaoh6hZLgOXqV2mC/h5tstwbGtCbCKRkObuN29oCskb8iLkFAZFT0Ow78m4AVytWgXgJrUBhq1aeruNwe9zLpffDvwN5hC1BzIPU1G7girwEphl4tx1HVkMfJAx+0L6XBD+E2qvZoRGFMQ1wE8Z90CAOyj2MWB9EqeNquzbUDviCWCT2LpRh7kKsDOpw7R/AaRtZfzPpUdsX4HNcq0Ch5OKaISQYAKfC3De7nrSoRW4ixLxAP+oPCnRCdwC5kR1+gdbu5z/gl3EaQAAAABJRU5ErkJggg=="},271:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADDklEQVRoge2ZPWgUQRTHf/HOix9E0fiJYiOolQE/wNLKwkILEYyIWFqIgghKOtEihZVfhYiGINgE/EBiIX6BRJGgJqIQI0REI4ggKgaNSdZi3nJjbmd3bvdm7gz3h+XY95997/1ndt7M7EEd/xcCR9drYIlHHc6EeBcTBnXh06sYl0L65LcfWFjhGMagLnzOA3rxNDIuhYBHMa6FgCcxPoSABzG+hIBjMT6FgEMxvoWAIzHVEAIOxFRLCKhFMlw0M4txvUUp5+qPc9pgEdSmXTnI0jHGPPIZnKZFmk5JFD8thdOaRF1IraEupNaQVUgOOAoMAqPAM43LA23AADAi3GzgEKoKdWhtV4vtfcZ8jEhaEDuF/wxcB85r3EnhBoAu4KnYN4r9udZ2p9iupswjEXEOtmqJLo7gvwDDwMxJ9umoEfoNFMR2QnwdSJGHFeIcdAm3L4IrAGPAW6IXwIfybIvc35D7dSnysEKcg4/CLTfw94Q/S7HnQ7QLt1fuh4DvmHcad2PysIJJSAOqx/+gJnwU1qBerwDoAZZq3HaxnwLmABPAnZg8FqDEpoZJSF7so8RXvpUUt+J9QKPYF6GS7wY2CH88IZeWBD4Wca/WN+GSzglNqBEJgF2afRB4B+wRbkuWRLOsI+H5YHNCux+oeQKwSrP3ACtQE3wceGJ4vhm4BcxPl6ZC3IgcFO4l6h2eDH3uhJO7VbPtF9sQ8MIQowA8kHb3KS0a1ogT0igJhAtiN3BZuFmoNeQaqnpNAG/EHmKt5v+cIUaH1iYALqXUkVi/m4ELKCG/JGlQFeoRqqQOA1coLdM5ivNsd4TvNuG+AtvkNwCOpdDh5Mxugx2oeTOO2kGAKgZjqNFtNTxnRDWErAd+StzDk7gjYh8BNpXj1LeQZcAHidlpaHNR+E+oqmcFn0KaKC6evZRuNkPMAB5Lu1fAXBvnvoTkgJv8W6GiYkfxt7H4GuRLyBmik7QREgCnkwJUq2qZYhvzqZ/Zaw11IbUG24/YPid8qi//U2ZEKvm/R6UR9xaU5D1lRuQvTmReas2aKpIAAAAASUVORK5CYII="},272:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABKUlEQVRIie3UvUpDQRAF4E8lQQvB0khuKcHexlKwEnwLK2Pta/gSViHYiPoCSixCQLCzt0uRGLCMxe6FsMZcknvBxgMDy/ycM8wswz8qQoYuxtFu0aqSfIhpYkM0qxDoRsL7SNjEQ/R1qhAYR7LZbrPoGxUVr5cUn5asR1joVBhLFu0x+rpVCLT8vuT9KgQI8+8IMx8JnVdG/meooY2e8NMm8X2JelnyXQz83EtuA+zB2gKSDRzjBIexIIt+2CpoYoCjeYFNXOFjQYep5Uj97ZS8gdeZhHdc4xQH2MbLEgK9VOAuBt5wZv4IJ3OIU+TxcRr4ioGdBcWfywikHa56W3KetL5X9tgV4WaVopqwvKKf1Y+5K6FRINKPOaVQxzmehMv6iWdcmOn8G930eB3MACX5AAAAAElFTkSuQmCC"},540:function(e,a,t){},583:function(e,a,t){"use strict";t.r(a);var l=t(9),n=t(1),s=t.n(n),c=t(181),r=(t(540),t(35)),i=t.n(r),m=t(34),o=t.n(m),A=t(30),d=t(27),u=t(15),g=t(270),E=t.n(g),p=t(271),b=t.n(p),N=t(272),h=t.n(N);a.default=function(){var e=Object(n.useState)(localStorage.getItem("user_token")),a=Object(l.a)(e,2),t=a[0],r=(a[1],Object(A.b)()),m=Object(l.a)(r,2),g=m[0].users,p=m[1],N=Object(n.useState)(!1),v=Object(l.a)(N,2),f=(v[0],v[1],Object(n.useState)("")),w=Object(l.a)(f,2);w[0],w[1];Object(n.useEffect)(function(){C()},[]);var C=function(e){o.a.post("http://18.134.0.153:3200/user/getdepousers",i.a.stringify({username:localStorage.getItem("userName")}),{headers:{"Content-Type":"application/x-www-form-urlencoded",sessiontoken:t}}).then(function(e){console.log(e),console.log(e.data.depoUsers),p({type:d.a.SET_USERS,users:e.data.depoUsers})}).catch(function(){})};return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,s.a.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"}),s.a.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"}),s.a.createElement("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"})),s.a.createElement("div",{className:"depo-page height-100 main"},s.a.createElement(c.a,{className:"UserPage",title:"Users",breadcrumbs:[{name:"users",active:!0}]},s.a.createElement("br",null),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-8"},s.a.createElement("input",{type:"text",id:"myInput",onKeyUp:function(){var e,a,t,l;for(e=document.getElementById("myInput").value.toUpperCase(),a=document.getElementById("myTable").getElementsByTagName("tr"),l=0;l<a.length;l++)(t=a[l].getElementsByTagName("td")[0])&&((t.textContent||t.innerText).toUpperCase().indexOf(e)>-1?a[l].style.display="":a[l].style.display="none")},placeholder:"Search for names..",title:"Type in a name"})),s.a.createElement("div",{className:"col-md-2",style:{display:"flex",justifyContent:"space-around"}},s.a.createElement("div",{style:{maxWidth:"25px"}},s.a.createElement("img",{src:b.a,className:"img-fluid fixed-banner",alt:"uploadicon",title:"UploadCSV"})),s.a.createElement("div",{style:{maxWidth:"25px"}},s.a.createElement("img",{src:E.a,className:"img-fluid fixed-banner",alt:"downloadicon",title:"DownloadCSV"}))),s.a.createElement("div",{className:"col-md-2"},s.a.createElement(u.b,{to:"/userform"},s.a.createElement("img",{src:h.a,className:"img-fluid fixed-banner",alt:"usericon",title:"AddUser"})))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("table",{className:"table",id:"myTable"},s.a.createElement("thead",null,s.a.createElement("tr",{className:"table-header"},s.a.createElement("th",null,"Name"),s.a.createElement("th",null,"E-mail"),s.a.createElement("th",null,"Usertype"),s.a.createElement("th",null,"Status"),s.a.createElement("th",null,"Action"))),g?g.map(function(e){return s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,e.userName),s.a.createElement("td",null,e.userEmail),s.a.createElement("td",null,"depoUser"),s.a.createElement("td",null," ",s.a.createElement("span",{className:"badge badge-success"},"Active")),s.a.createElement("td",null,s.a.createElement("button",{type:"button",className:"btn btn-primary"},"Assign"))))}):null))))))}}}]);
//# sourceMappingURL=15.c7431335.chunk.js.map