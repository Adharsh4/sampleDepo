(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{180:function(e,t,a){"use strict";var n=a(38),c=a(11),l=a(5),s=a.n(l),r=a(1),i=a.n(r),o=(a(24),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),A=function(e){var t,a=e.tag,l=e.className,r=e.type,A=Object(c.a)(e,["tag","className","type"]),m=s()(Object(n.a)({},r,!!r),l);return t=a||(!a&&o[r]?o[r]:"p"),i.a.createElement(t,Object.assign({},A,{className:m}))};A.defaultProps={type:"p"},t.a=A},181:function(e,t,a){"use strict";var n=a(11),c=a(1),l=a.n(c),s=(a(24),a(33)),r=a(185),i=a(186),o=a(180),A=s.a.create("page"),m=function(e){var t=e.title,a=e.breadcrumbs,c=e.tag,s=e.className,m=e.children,u=Object(n.a)(e,["title","breadcrumbs","tag","className","children"]),d=A.b("px-3",s);return l.a.createElement(c,Object.assign({className:d},u),l.a.createElement("div",{className:A.e("header")},t&&"string"===typeof t?l.a.createElement(o.a,{type:"h1",className:A.e("title")},t):t,a&&l.a.createElement(r.a,{className:A.e("breadcrumb")},l.a.createElement(i.a,null,"Home"),a.length&&a.map(function(e,t){var a=e.name,n=e.active;return l.a.createElement(i.a,{key:t,active:n},a)}))),m)};m.defaultProps={tag:"div",title:""},t.a=m},185:function(e,t,a){"use strict";var n=a(4),c=a(6),l=a(1),s=a.n(l),r=a(2),i=a.n(r),o=a(5),A=a.n(o),m=a(3),u={tag:m.p,listTag:m.p,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},d=function(e){var t=e.className,a=e.listClassName,l=e.cssModule,r=e.children,i=e.tag,o=e.listTag,u=e["aria-label"],d=Object(c.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),g=Object(m.l)(A()(t),l),E=Object(m.l)(A()("breadcrumb",a),l);return s.a.createElement(i,Object(n.a)({},d,{className:g,"aria-label":u}),s.a.createElement(o,{className:E},r))};d.propTypes=u,d.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=d},186:function(e,t,a){"use strict";var n=a(4),c=a(6),l=a(1),s=a.n(l),r=a(2),i=a.n(r),o=a(5),A=a.n(o),m=a(3),u={tag:m.p,active:i.a.bool,className:i.a.string,cssModule:i.a.object},d=function(e){var t=e.className,a=e.cssModule,l=e.active,r=e.tag,i=Object(c.a)(e,["className","cssModule","active","tag"]),o=Object(m.l)(A()(t,!!l&&"active","breadcrumb-item"),a);return s.a.createElement(r,Object(n.a)({},i,{className:o,"aria-current":l?"page":void 0}))};d.propTypes=u,d.defaultProps={tag:"li"},t.a=d},269:function(e,t,a){},270:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADAUlEQVRoge2Zy2sUQRDGf3E3iQ+iaHyieBHUUwQf4NFTDgqKiKAi4h8geFBQ4knMwYMnX6AIShA8GPCBxIMoKBJFgpqgQlxBEV1BBFExaDS7HrqGaWZ3Znpm7N4J7AfNMPX1VNfXM9XVvQtNTC5ULbVXwEKHOqwJcS7GG9SGT6dibAoZlusIMO8/jxE6qA2fs4EhHL0Zm0LAoRjbQsCRGBdCwIEYV0LAshiXQsCiGNdCwJKYRggBC2IaJQRUkfSKZmYxtrcoSdpIlNMWg0FN+iVBlokJjaOYwWlapJmUWPFTUjjNJZpC8oamkLwhq5ACcAgoAePAU40rAj3AKDAm3AxgP2oVuqT1XSG29xnjCUVcQewT/jNwHTircb3CjQL9wBOxrxP7M63vdrFdSRlHLKIcbNQCXVCH/wKUgWkBeyvqDf0G2sR2THztSxGHEaIc9Au3tw7XBvwF3lC/AN6XZ1fJ/Q25X50iDiNEOfgo3JIQ/p7wp/Fn3sNx4fbI/VvgO+E7DWtCWlAz/geV8PWwEvV5VYFBYJHGbRH7CWAmUAHupIjDGGEOimIfJ3rlW4a/FR8G2sU+HxX8ALBW+KNZAo1D1Ex8Ey7unNCBeiNVYIdmLwHvgN3CdWcJNEsd8c4HG2L6/UDlCcByzT4ILEUl+ATwOPBc1NmkBlmEXJXrEWBuHV7PnS65ljTbI1SubQVeoJLdGqI+rXbgOX5BHAAuCjcdVUOuoVavCvBa7B66NP9nDMdOnfRxD3YC51FCfknQoFaoh6hZLgOXqV2mC/h5tstwbGtCbCKRkObuN29oCskb8iLkFAZFT0Ow78m4AVytWgXgJrUBhq1aeruNwe9zLpffDvwN5hC1BzIPU1G7girwEphl4tx1HVkMfJAx+0L6XBD+E2qvZoRGFMQ1wE8Z90CAOyj2MWB9EqeNquzbUDviCWCT2LpRh7kKsDOpw7R/AaRtZfzPpUdsX4HNcq0Ch5OKaISQYAKfC3De7nrSoRW4ixLxAP+oPCnRCdwC5kR1+gdbu5z/gl3EaQAAAABJRU5ErkJggg=="},271:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADDklEQVRoge2ZPWgUQRTHf/HOix9E0fiJYiOolQE/wNLKwkILEYyIWFqIgghKOtEihZVfhYiGINgE/EBiIX6BRJGgJqIQI0REI4ggKgaNSdZi3nJjbmd3bvdm7gz3h+XY95997/1ndt7M7EEd/xcCR9drYIlHHc6EeBcTBnXh06sYl0L65LcfWFjhGMagLnzOA3rxNDIuhYBHMa6FgCcxPoSABzG+hIBjMT6FgEMxvoWAIzHVEAIOxFRLCKhFMlw0M4txvUUp5+qPc9pgEdSmXTnI0jHGPPIZnKZFmk5JFD8thdOaRF1IraEupNaQVUgOOAoMAqPAM43LA23AADAi3GzgEKoKdWhtV4vtfcZ8jEhaEDuF/wxcB85r3EnhBoAu4KnYN4r9udZ2p9iupswjEXEOtmqJLo7gvwDDwMxJ9umoEfoNFMR2QnwdSJGHFeIcdAm3L4IrAGPAW6IXwIfybIvc35D7dSnysEKcg4/CLTfw94Q/S7HnQ7QLt1fuh4DvmHcad2PysIJJSAOqx/+gJnwU1qBerwDoAZZq3HaxnwLmABPAnZg8FqDEpoZJSF7so8RXvpUUt+J9QKPYF6GS7wY2CH88IZeWBD4Wca/WN+GSzglNqBEJgF2afRB4B+wRbkuWRLOsI+H5YHNCux+oeQKwSrP3ACtQE3wceGJ4vhm4BcxPl6ZC3IgcFO4l6h2eDH3uhJO7VbPtF9sQ8MIQowA8kHb3KS0a1ogT0igJhAtiN3BZuFmoNeQaqnpNAG/EHmKt5v+cIUaH1iYALqXUkVi/m4ELKCG/JGlQFeoRqqQOA1coLdM5ivNsd4TvNuG+AtvkNwCOpdDh5Mxugx2oeTOO2kGAKgZjqNFtNTxnRDWErAd+StzDk7gjYh8BNpXj1LeQZcAHidlpaHNR+E+oqmcFn0KaKC6evZRuNkPMAB5Lu1fAXBvnvoTkgJv8W6GiYkfxt7H4GuRLyBmik7QREgCnkwJUq2qZYhvzqZ/Zaw11IbUG24/YPid8qi//U2ZEKvm/R6UR9xaU5D1lRuQvTmReas2aKpIAAAAASUVORK5CYII="},272:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABKUlEQVRIie3UvUpDQRAF4E8lQQvB0khuKcHexlKwEnwLK2Pta/gSViHYiPoCSixCQLCzt0uRGLCMxe6FsMZcknvBxgMDy/ycM8wswz8qQoYuxtFu0aqSfIhpYkM0qxDoRsL7SNjEQ/R1qhAYR7LZbrPoGxUVr5cUn5asR1joVBhLFu0x+rpVCLT8vuT9KgQI8+8IMx8JnVdG/meooY2e8NMm8X2JelnyXQz83EtuA+zB2gKSDRzjBIexIIt+2CpoYoCjeYFNXOFjQYep5Uj97ZS8gdeZhHdc4xQH2MbLEgK9VOAuBt5wZv4IJ3OIU+TxcRr4ioGdBcWfywikHa56W3KetL5X9tgV4WaVopqwvKKf1Y+5K6FRINKPOaVQxzmehMv6iWdcmOn8G930eB3MACX5AAAAAElFTkSuQmCC"},539:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABXElEQVRIie2UQUtCQRSFP8JdUta2HkFCj/6ERH+lWvkLWtR/cWkIbsRACCTbuMhFCzcmLdxWoFItX4s5L+fNG/W1MFp44MJwz7mHmXtnBtb479gFykADGAFfipFyZWl+jRxwCUyBaElMpc1lNd8HupZBCzgDQmBTESrXsnRd1S7EATBUwTNQyrChEjBQzVAeXuSBvoT3QMHiAqAGTBR1nSLGNtBWbV9eKVQk6DmCAHgj3ft3cfYGe+IqrvmJiE+g6HA1cQ1gD9PnpnI3jrYoj0ieP+goee052UScPcBAubFHfyWuA7DhkJGnYBF8etcTmLXoAzh0uLq4JuYUAXCrXNXRHmEeYqpFMBvyI+auxwgxA3WH/EqybVvAE3OGDMlr2sZcvRgBZqBjRdUx3wEeWHJNIfnQBmR7aKfACxkeWgzfV3EOHGtnea0vgDtLl+mriLHSz87Gyr7rNf4O31JZhMjSyXpfAAAAAElFTkSuQmCC"},582:function(e,t,a){"use strict";a.r(t);var n=a(9),c=a(1),l=a.n(c),s=(a(269),a(35)),r=a.n(s),i=a(34),o=a.n(i),A=a(15),m=a(181),u=a(30),d=a(27),g=a(270),E=a.n(g),p=a(271),b=a.n(p),N=a(272),h=a.n(N);a(539);t.default=function(e){var t=Object(u.b)(),a=Object(n.a)(t,2),s=a[0].containers,i=a[1],g=Object(c.useState)(localStorage.getItem("user_token")),p=Object(n.a)(g,2),N=p[0],f=(p[1],Object(c.useState)(localStorage.getItem("depocode"))),C=Object(n.a)(f,2),v=C[0],B=(C[1],Object(c.useState)(!1)),w=Object(n.a)(B,2),O=(w[0],w[1]),x=Object(c.useState)(""),j=Object(n.a)(x,2),I=(j[0],j[1]),R=Object(c.useState)(""),y=Object(n.a)(R,2),Q=(y[0],y[1],Object(c.useState)([])),S=Object(n.a)(Q,2),U=(S[0],S[1],Object(c.useState)({preview:"",raw:""})),H=Object(n.a)(U,2),F=(H[0],H[1],Object(c.useState)("")),L=Object(n.a)(F,2),D=(L[0],L[1]),G=Object(c.useState)(""),T=Object(n.a)(G,2),J=(T[0],T[1]);Object(c.useEffect)(function(){K()},[]);var K=function(e){o.a.post("http://18.134.0.153:3200/container/getcontainersfordepo",r.a.stringify({depocode:v}),{headers:{"Content-Type":"application/x-www-form-urlencoded",sessiontoken:N}}).then(function(e){console.log(e.data.results),i({type:d.a.SET_CONTAINERS,containers:e.data.results})}).catch(function(){})},V=[];return s&&(V=s.map(function(e){return l.a.createElement("tr",{key:e.container_no},l.a.createElement("td",null,e.container_no),l.a.createElement("td",null,e.container_size),l.a.createElement("td",null,e.container_manufactuer_date),l.a.createElement("td",null,e.image_upload_status),l.a.createElement("td",null,l.a.createElement("button",{type:"button",className:"btn-default",onClick:function(){return t="SHARE_CONTAINER",a=e.container_no,n=e.container_manufactuer_date,O(!0),I(t),D(a),void J(n);var t,a,n}},"Share"),l.a.createElement("button",{type:"button",className:"btn-default",style:{cursor:"pointer",marginLeft:"10px"}},"View")))})),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"}),l.a.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"}),l.a.createElement("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"})),l.a.createElement("div",{className:"depo-page height-100 main"},l.a.createElement(m.a,{title:"Containers",breadcrumbs:[{name:"containers",active:!0}],className:"ContainersPage"}),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement("input",{type:"text",id:"myInput",onKeyUp:function(){var e,t,a,n;for(e=document.getElementById("myInput").value.toUpperCase(),t=document.getElementById("myTable").getElementsByTagName("tr"),n=0;n<t.length;n++)(a=t[n].getElementsByTagName("td")[0])&&((a.textContent||a.innerText).toUpperCase().indexOf(e)>-1?t[n].style.display="":t[n].style.display="none")},placeholder:"Search for names..",title:"Type in a name"})),l.a.createElement("div",{className:"col-md-2",style:{display:"flex",justifyContent:"space-around"}},l.a.createElement(A.b,{to:"/containerphotoupload"},l.a.createElement("div",{style:{maxWidth:"25px"}},l.a.createElement("img",{src:b.a,className:"img-fluid fixed-banner",alt:"uploadicon",title:"UploadCSV"}))),l.a.createElement(A.b,{to:"/"},l.a.createElement("div",{style:{maxWidth:"25px"}},l.a.createElement("img",{src:E.a,className:"img-fluid fixed-banner",alt:"downloadicon",title:"DownloadCSV"})))),l.a.createElement("div",{className:"col-md-2"},l.a.createElement(A.b,{to:"/containerform"},l.a.createElement("div",{style:{maxWidth:"25px"}},l.a.createElement("img",{src:h.a,className:"img-fluid fixed-banner",alt:"usericon",title:"AddContainer"}))))),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("table",{className:"table",id:"myTable"},l.a.createElement("thead",null,l.a.createElement("tr",{className:"table-header"},l.a.createElement("th",null,"Container No."),l.a.createElement("th",null,"Size"),l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"Photo"),l.a.createElement("th",null,"Action"))),l.a.createElement("tbody",null,V))))))}}}]);
//# sourceMappingURL=12.7af60202.chunk.js.map