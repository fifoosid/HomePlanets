(function(t){function e(e){for(var a,r,l=e[0],c=e[1],u=e[2],p=0,f=[];p<l.length;p++)r=l[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);s&&s(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,l=1;l<n.length;l++){var c=n[l];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var s=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"00e8":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e),n.d(e,"store",(function(){return S}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var a,o,i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Table")],1)},l=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"inputs-wrapper"},[n("div",[n("ui5-label",{attrs:{for:"filterInput","show-colon":""}},[t._v("Filter")]),t._v(" "),n("ui5-input",{attrs:{id:"filterInput",value:t.filterText,placeholder:"Enter Person Name"},on:{input:t.filterData}})],1),t._v(" "),n("div",[n("ui5-label",{attrs:{for:"sortSelect","show-colon":""}},[t._v("Sort")]),t._v(" "),n("ui5-select",{attrs:{id:"sortSelect"},on:{change:t.sortData}},[n("ui5-option",[t._v("None")]),t._v(" "),n("ui5-option",[t._v("Name")]),t._v(" "),n("ui5-option",[t._v("Height")]),t._v(" "),n("ui5-option",[t._v("Mass")]),t._v(" "),n("ui5-option",[t._v("Created")]),t._v(" "),n("ui5-option",[t._v("Edited")]),t._v(" "),n("ui5-option",[t._v("HomeWorld")])],1)],1)]),t._v(" "),n("ui5-table",{attrs:{busy:0===this.data.length,"busy-delay":"0"}},[n("ui5-table-column",{attrs:{slot:"columns"},slot:"columns"},[n("span",[t._v("Name")])]),t._v(" "),n("ui5-table-column",{attrs:{slot:"columns"},slot:"columns"},[n("span",[t._v("Height")])]),t._v(" "),n("ui5-table-column",{attrs:{slot:"columns"},slot:"columns"},[n("span",[t._v("Mass")])]),t._v(" "),n("ui5-table-column",{attrs:{slot:"columns"},slot:"columns"},[n("span",[t._v("Created")])]),t._v(" "),n("ui5-table-column",{attrs:{slot:"columns","demand-popin":"","min-width":"700","popin-text":"Edited"},slot:"columns"},[n("span",[t._v("Edited")])]),t._v(" "),n("ui5-table-column",{attrs:{slot:"columns","demand-popin":"","min-width":"600","popin-text":"Home World"},slot:"columns"},[n("span",[t._v("Home World")])]),t._v(" "),t._l(this.data,(function(e){return n("ui5-table-row",{key:e.name},[n("ui5-table-cell",[t._v(t._s(e.name))]),t._v(" "),n("ui5-table-cell",[t._v(t._s(e.height)+" cm")]),t._v(" "),n("ui5-table-cell",[t._v(t._s(e.mass)+" kg")]),t._v(" "),n("ui5-table-cell",[t._v(t._s(new Date(e.created).toJSON().slice(0,10)))]),t._v(" "),n("ui5-table-cell",[t._v(t._s(new Date(e.edited).toJSON().slice(0,10)))]),t._v(" "),n("ui5-table-cell",[n("ui5-link",{on:{click:t.showPlanetInfo}},[t._v(t._s(e.homeworld))])],1)],1)}))],2),t._v(" "),n("ui5-popover",{attrs:{id:"planet-popover","header-text":t.planetInfo.name}},[n("div",{staticClass:"popover-content"},[n("div",[n("ui5-label",[t._v("Diameter:")]),t._v(" "),n("ui5-badge",{attrs:{"color-scheme":"5"}},[t._v(t._s(t.planetInfo.diameter))])],1),t._v(" "),n("div",[n("ui5-label",[t._v("Climate:")]),t._v(" "),n("ui5-badge",{attrs:{"color-scheme":"2"}},[t._v(t._s(t.planetInfo.climate))])],1),t._v(" "),n("div",[n("ui5-label",[t._v("Population:")]),t._v(" "),n("ui5-badge",{attrs:{"color-scheme":"10"}},[t._v(t._s(t.planetInfo.population))])],1)])])],1)},u=[],s=(n("4d63"),n("ac1f"),n("25f0"),n("4de4"),n("b0c0"),n("d81d"),n("4e82"),n("caad"),n("5b81"),n("159b"),n("7338")),p=n.n(s),f=n("2f62"),d="addPeople",v="initData",m="setData",_="filterText",b="sortCriteria",h="planetData",O="planetInfo",w={name:"Table",props:{},computed:Object(f["b"])({data:function(t){return t.data},allData:function(t){return t.allData},filterText:function(t){return t.filterText},sortCriteria:function(t){return t.sortCriteria},planetData:function(t){return t.planetData},planetInfo:function(t){return t.planetInfo}}),methods:{filterData:function(t){if(S.dispatch(_,t.target.value),this.filterText){var e=new RegExp(this.filterText.toLowerCase()),n=this.allData.filter((function(t){return e.test(t.name.toLowerCase())}));S.dispatch(m,n)}else S.dispatch(m,this.allData)},sortData:function(t){var e=this;S.dispatch(b,t.detail.selectedOption.textContent.toLowerCase());var n=this.data.map((function(t){return t}));"none"!==this.sortCriteria&&(n.sort((function(t,n){return e.compare(t,n,e.sortCriteria)})),S.dispatch(m,n))},compare:function(t,e,n){var a=["name","homeworld"];if(a.includes(n))return t[n].localeCompare(e[n]);var o=parseInt(t[n].replaceAll("-","")),i=parseInt(e[n].replaceAll("-",""));return o<i?-1:i>o?1:0},showPlanetInfo:function(t){var e=this,n=t.target.textContent;S.dispatch(O,{}),this.planetData.forEach((function(t){t.planetName===n&&S.dispatch(O,t.planetDetails)})),this.planetInfo.name?this.openPopover(t):p.a.get(n).then((function(a){S.dispatch(O,a.data),S.dispatch(h,{planetName:n,planetDetails:e.planetInfo}),e.openPopover(t)}))},openPopover:function(t){document.querySelector("#planet-popover").showAt(t.target)},fetchData:function(){p.a.get("https://swapi.dev/api/people").then((function(t){S.dispatch(d,t.data.results),S.dispatch(v)}))}},mounted:function(){this.fetchData()}},g=w,j=(n("ef00"),n("2877")),D=Object(j["a"])(g,c,u,!1,null,"5d4fbe43",null),x=D.exports,y=(n("91c3"),n("cc9c"),n("5bbd"),n("ae7a"),n("f6e4"),n("ce22"),n("a770"),n("f4d8"),n("44b0"),n("0822"),n("a81a"),{name:"App",components:{Table:x}}),C=y,I=Object(j["a"])(C,r,l,!1,null,null,null),P=I.exports,T=n("ade3");i["default"].use(f["a"]);var S=new f["a"].Store({state:{data:[],allData:[],filterText:"",sortCriteria:"",planetData:[],planetInfo:""},mutations:(a={},Object(T["a"])(a,d,(function(t,e){t.allData=e})),Object(T["a"])(a,v,(function(t){t.data=t.allData})),Object(T["a"])(a,m,(function(t,e){t.data=e})),Object(T["a"])(a,_,(function(t,e){t.filterText=e})),Object(T["a"])(a,b,(function(t,e){t.sortCriteria=e})),Object(T["a"])(a,h,(function(t,e){t.planetData.push(e)})),Object(T["a"])(a,O,(function(t,e){t.planetInfo=e})),a),actions:(o={},Object(T["a"])(o,d,(function(t,e){t.commit(d,e)})),Object(T["a"])(o,v,(function(t){t.commit(v)})),Object(T["a"])(o,m,(function(t,e){t.commit(m,e)})),Object(T["a"])(o,_,(function(t,e){t.commit(_,e)})),Object(T["a"])(o,b,(function(t,e){t.commit(b,e)})),Object(T["a"])(o,h,(function(t,e){t.commit(h,e)})),Object(T["a"])(o,O,(function(t,e){t.commit(O,e)})),o)}),E=n("5f5b");i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(P)},store:S}).$mount("#app"),i["default"].use(E["a"])},ef00:function(t,e,n){"use strict";n("00e8")}});
//# sourceMappingURL=app.e7444c08.js.map