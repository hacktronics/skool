(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6660],{94184:function(e,r){var s;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var s=arguments[r];if(s){var t=typeof s;if("string"===t||"number"===t)e.push(s);else if(Array.isArray(s)){if(s.length){var c=n.apply(null,s);c&&e.push(c)}}else if("object"===t)if(s.toString===Object.prototype.toString)for(var i in s)a.call(s,i)&&s[i]&&e.push(i);else e.push(s.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(s=function(){return n}.apply(r,[]))||(e.exports=s)}()},52925:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/orders",function(){return s(77731)}])},94339:function(e,r,s){"use strict";var a=s(85893),n=s(41664),t=(s(67294),s(94184)),c=s.n(t);r.Z=function(e){var r=e.breadcrumbTitle,s=e.breadcrumbSubTitle,t=e.middle;return(0,a.jsx)("div",{className:"hero-arera course-item-height noprint",style:{background:"url(/assets/img/slider/course-slider.jpg)"},children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsxs)("div",{className:"col-xl-12",children:[(0,a.jsx)("div",{className:"hero-course-1-text",children:(0,a.jsx)("h2",{children:r})}),(0,a.jsx)("div",{className:"course-title-breadcrumb",children:(0,a.jsx)("nav",{children:(0,a.jsxs)("ol",{className:"breadcrumb",children:[(0,a.jsx)("li",{className:"breadcrumb-item",children:(0,a.jsx)(n.default,{href:"/",children:(0,a.jsx)("a",{children:"Home"})})}),t&&t.length>0&&(0,a.jsx)("li",{className:c()("breadcrumb-item","faq"===t?"uppercase":"capitalize"),children:(0,a.jsx)(n.default,{href:"/".concat(t),children:(0,a.jsx)("a",{children:t})})}),(0,a.jsx)("li",{className:"breadcrumb-item",children:(0,a.jsx)("span",{children:s})})]})})})]})})})})}},77731:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return x}});var a=s(85893),n=s(9008),t=s(48671),c=s(97255),i=s(67294),l=s(94339),d=s(41664),o=s(44161),h=s(96257),u=s(17702),m=function(){var e=(0,i.useState)({}),r=e[0],s=e[1];(0,i.useEffect)((function(){(0,u.Aj)(o.I,(function(e){if(e){var r=(0,h.JU)(o.db,"orders",e.uid);(0,h.QT)(r).then((function(e){if(e.exists()){var r=e.data();s(r)}}))}}))}),[]);return(0,a.jsxs)("main",{children:[(0,a.jsx)(l.Z,{breadcrumbTitle:"My Orders",breadcrumbSubTitle:"Orders"}),(0,a.jsx)("div",{className:"cart-area pt-100 pb-100",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-12",children:(0,a.jsx)("form",{action:"#",children:(0,a.jsx)("div",{className:"table-content table-responsive",children:(0,a.jsxs)("table",{className:"table",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"order-number",children:"Order #"}),(0,a.jsx)("th",{className:"order-date",children:"Date"}),(0,a.jsx)("th",{className:"order-ships-to",children:"Ship To"}),(0,a.jsx)("th",{className:"order-total",children:"Order Total"}),(0,a.jsx)("th",{className:"order-status",children:"Status"}),(0,a.jsx)("th",{className:"order-status",children:"Carrier"}),(0,a.jsx)("th",{className:"order-action",children:"AWB"})]})}),(0,a.jsxs)("tbody",{children:[0===Object.keys(r).length&&(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:7,children:(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("h5",{className:"text-danger",children:"No Orders Found"}),(0,a.jsx)(d.default,{href:"/shop",children:(0,a.jsx)("a",{className:"btn btn-primary",children:"Continue Shopping"})})]})})}),Object.keys(r).map((function(e,s){var n=new Date(1e3*r[e].orderDate.seconds),t=new Intl.DateTimeFormat("en",{year:"numeric"}).format(n),c=new Intl.DateTimeFormat("en",{month:"short"}).format(n),i=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(n),l="".concat(i,"-").concat(c,"-").concat(t);return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"order-number",children:(0,a.jsx)(d.default,{href:"/orders/detail?order=".concat(e),children:(0,a.jsx)("a",{children:(0,a.jsx)("span",{className:"invoice",children:e})})})}),(0,a.jsx)("td",{className:"product-name",children:(0,a.jsx)("span",{className:"invoice-date",children:l})}),(0,a.jsx)("td",{className:"ships-to",children:(0,a.jsx)("span",{className:"order-ships",children:r[e].shipsTo})}),(0,a.jsx)("td",{className:"product-price",children:(0,a.jsxs)("span",{className:"amount",children:["\u20b9",r[e].total.toLocaleString()]})}),(0,a.jsx)("td",{className:"order-status",children:(0,a.jsx)("span",{className:"status",children:r[e].status})}),(0,a.jsx)("td",{className:"order-carrier",children:(0,a.jsx)("span",{className:"status",children:r[e].carrier||"-"})}),(0,a.jsx)("td",{className:"order-track",children:(0,a.jsx)("a",{href:"#",onClick:function(){return s=r[e].carrier,a=r[e].awb,void window.open("https://www.".concat(s,".com/track?tracking=").concat(a),"_blank");var s,a},children:r[e].awb||"-"})})]},"order-line-".concat(e))}))]})]})})})})})})})]})};function x(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.default,{children:[(0,a.jsx)("title",{children:"Skool - Exciting and innovative online programming courses that teaches beyond Scratch: Python, Javascript, Robotics, Artificial Intelligence, Arduino, Web Development, Game Development..."}),(0,a.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(c.Z,{}),(0,a.jsx)(m,{}),(0,a.jsx)(t.Z,{})]})}}},function(e){e.O(0,[2016,440,7921,4065,8671,7255,9774,2888,179],(function(){return r=52925,e(e.s=r);var r}));var r=e.O();_N_E=r}]);