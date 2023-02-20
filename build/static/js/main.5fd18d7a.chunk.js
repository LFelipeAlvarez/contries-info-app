(this["webpackJsonpcountries-app"]=this["webpackJsonpcountries-app"]||[]).push([[0],{25:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(18),i=c.n(n),l=c(7),r=c(2),o=(c(25),c(0)),u=function(){Object(s.useEffect)((function(){if(localStorage.getItem("countriesAppThemeColor")){var e=localStorage.getItem("countriesAppThemeColor");document.documentElement.className=e}}),[]);var e=Object(s.useRef)();return Object(o.jsx)("header",{className:"header",children:Object(o.jsxs)("div",{className:"header__inner",children:[Object(o.jsx)("h1",{className:"header__title",children:"Where in the world?"}),Object(o.jsx)("div",{className:"header__text",ref:e,onClick:function(){var e=document.documentElement;e.classList.toggle("dark-theme"),e.classList.toggle("light-theme"),localStorage.setItem("countriesAppThemeColor",e.className)},children:"Dark Mode"})]})})},j=c.p+"static/media/loader.0d6ed0b0.svg",d=function(){return Object(o.jsx)("div",{className:"loader",children:Object(o.jsx)("img",{src:j,alt:"loader",className:"loader__img"})})},m=c(9),b=function(e,t){return""!==t.replace(" ","").trim()?e.filter((function(e){return e.name.official.toLowerCase().includes(t.toLowerCase())})):e},O=function(e,t){return"all"===t||""===t?e:e.filter((function(e){return e.region===t}))},_=c(14),h=c.n(_),x=c(19),p=function(){var e=Object(x.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://restcountries.com/v3.1/all");case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.warn(e.t0),alert("error: "+e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),v=Object(s.createContext)(),f=function(e){var t=e.children,c=function(){var e=Object(s.useState)({}),t=Object(m.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(!0),i=Object(m.a)(n,2),l=i[0],r=i[1];return Object(s.useEffect)((function(){p().then((function(e){var t=O(b(e,localStorage.getItem("inputSearchCountries")||""),localStorage.getItem("selectFilterCountries")||"");a({mutables:t,inmutables:e}),r(!1)}))}),[]),{countries:c,setCountries:a,isLoading:l}}(),a=c.countries,n=c.setCountries,i=c.isLoading;return Object(o.jsx)(v.Provider,{value:{countries:a,setCountries:n,isLoading:i},children:t})},N=function(e){var t=e.flag,c=e.name,s=e.population,a=e.region,n=e.capital,i=e.code;return Object(o.jsx)(l.b,{to:"/".concat(i.toLowerCase()),className:"link",children:Object(o.jsxs)("article",{className:"card",children:[Object(o.jsx)("div",{className:"card__head",children:Object(o.jsx)("img",{src:t,alt:c+"'s flag",className:"card__img",loading:"lazy"})}),Object(o.jsxs)("div",{className:"card__body",children:[Object(o.jsx)("h2",{className:"card__title",children:c.official}),Object(o.jsxs)("dl",{className:"card__details",children:[Object(o.jsxs)("div",{className:"card__group",children:[Object(o.jsx)("dt",{className:"card__key",children:"Population: "}),Object(o.jsx)("dd",{className:"card__value",children:s.toLocaleString()})]}),Object(o.jsxs)("div",{className:"card__group",children:[Object(o.jsx)("dt",{className:"card__key",children:"Region: "}),Object(o.jsx)("dd",{className:"card__value",children:a})]}),Object(o.jsxs)("div",{className:"card__group",children:[Object(o.jsx)("dt",{className:"card__key",children:"Capital: "}),Object(o.jsx)("dd",{className:"card__value",children:n})]})]})]})]})})},g=function(){var e=Object(s.useContext)(v).countries.mutables;return Object(o.jsx)("div",{className:"cards-list",children:e.map((function(e){var t=e.cca3,c=e.flags,s=e.name,a=e.population,n=e.region,i=e.capital;return Object(o.jsx)(N,{flag:c.svg,name:s,population:a,region:n,capital:i&&i[0],code:t},t)}))})},C=c(10),S=function(e){var t=e.selectState,c=e.inputValue,a=Object(s.useContext)(v),n=a.countries,i=a.setCountries,l=n.inmutables,r=t.selectValue,u=t.setSelectValue;return Object(s.useEffect)((function(){if(localStorage.getItem("selectFilterCountries")!==r){var e=b(l,c);localStorage.setItem("selectFilterCountries",r),i(Object(C.a)(Object(C.a)({},n),{},{mutables:O(e,r)}))}}),[r]),Object(o.jsxs)("select",{className:"filter",onChange:function(e){return u(e.target.value)},value:r,children:[Object(o.jsx)("option",{className:"filter__option",value:"",style:{display:"none"},children:"Filter by Region"}),Object(o.jsx)("option",{className:"filter__option",value:"all",children:"All"}),Object(o.jsx)("option",{className:"filter__option",value:"Africa",children:"Africa"}),Object(o.jsx)("option",{className:"filter__option",value:"Americas",children:"America"}),Object(o.jsx)("option",{className:"filter__option",value:"Asia",children:"Asia"}),Object(o.jsx)("option",{className:"filter__option",value:"Europe",children:"Europe"}),Object(o.jsx)("option",{className:"filter__option",value:"Oceania",children:"Oceania"})]})},y=function(e){var t=e.inputState,c=e.selectValue,a=Object(s.useContext)(v),n=a.countries,i=a.setCountries,l=n.inmutables,r=t.inputValue,u=t.setInputValue;return Object(s.useEffect)((function(){if(r!==localStorage.getItem("inputSearchCountries")){localStorage.setItem("inputSearchCountries",r);var e=O(l,c);i(Object(C.a)(Object(C.a)({},n),{},{mutables:b(e,r)}))}}),[r]),Object(o.jsx)("form",{className:"form",children:Object(o.jsx)("input",{onChange:function(e){return u(e.target.value)},type:"text",className:"form__input",placeholder:"Search for a country...",value:r})})},k=function(){var e=Object(s.useState)(localStorage.getItem("inputSearchCountries")||""),t=Object(m.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(localStorage.getItem("selectFilterCountries")||""),i=Object(m.a)(n,2),l=i[0],r=i[1];return Object(o.jsx)("main",{className:"main",children:Object(o.jsxs)("div",{className:"main__inner",children:[Object(o.jsxs)("div",{className:"main__head",children:[Object(o.jsx)(y,{inputState:{inputValue:c,setInputValue:a},selectValue:l}),Object(o.jsx)(S,{inputValue:c,selectState:{selectValue:l,setSelectValue:r}})]}),Object(o.jsx)(g,{})]})})},L=function(){return Object(s.useContext)(v).isLoading?Object(o.jsx)(d,{}):Object(o.jsx)(k,{})},I=function(){var e,t,c=Object(r.f)(),a=Object(r.g)().code,n=function(e,t){return e.find((function(e){return e.cca3===t}))||{}}(Object(s.useContext)(v).countries.inmutables,a.toUpperCase()),i=n.flags,u=n.name,j=n.tld,d=n.languages,m=n.currencies,b=n.borders,O=n.capital,_=null===(e=Object.values(u.nativeName)[0])||void 0===e?void 0:e.official,h=j[0],x=i.svg;u=u.official,d=new Intl.ListFormat("en",{style:"long",type:"conjunction"}).format(Object.values(d)),m=null===(t=Object.values(m)[0])||void 0===t?void 0:t.name;var p={population:"Population",region:"Region",subregion:"Sub Region"};return"{}"===JSON.stringify(n)?Object(o.jsx)("h1",{children:"No results"}):Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"container__inner",children:[Object(o.jsx)("div",{className:"container__head",children:Object(o.jsx)("div",{className:"button button--back",onClick:function(){return c.push("/")},children:Object(o.jsx)("div",{className:"button__inner",children:"Back"})})}),Object(o.jsxs)("section",{className:"section",children:[Object(o.jsx)("div",{className:"section__left",children:Object(o.jsx)("img",{src:x,alt:"",className:"section__img"})}),Object(o.jsx)("div",{className:"section__right",children:Object(o.jsxs)("div",{className:"section__inner",children:[Object(o.jsx)("h2",{className:"section__title",children:u}),Object(o.jsxs)("dl",{className:"section__list",children:[Object(o.jsxs)("div",{className:"section__group",children:[Object(o.jsxs)("div",{className:"section__item",children:[Object(o.jsx)("dt",{className:"section__key",children:"Native Name: "}),Object(o.jsx)("dd",{className:"section__value",children:_})]}),Object.keys(p).map((function(e,t){var c;return Object(o.jsxs)("div",{className:"section__item",children:[Object(o.jsxs)("dt",{className:"section__key",children:[p[e],": "]}),Object(o.jsx)("dd",{className:"section__value",children:null===(c=n[e])||void 0===c?void 0:c.toLocaleString()})]},t)})),Object(o.jsxs)("div",{className:"section__item",children:[Object(o.jsx)("dt",{className:"section__key",children:"Capital: "}),Object(o.jsx)("dd",{className:"section__value",children:O&&O[0]})]})]}),Object(o.jsxs)("div",{className:"section__group",children:[Object(o.jsxs)("div",{className:"section__item",children:[Object(o.jsx)("dt",{className:"section__key",children:"Top Level Domain: "}),Object(o.jsx)("dd",{className:"section__value",children:h})]}),Object(o.jsxs)("div",{className:"section__item",children:[Object(o.jsx)("dt",{className:"section__key",children:"Currencies: "}),Object(o.jsx)("dd",{className:"section__value",children:m})]}),Object(o.jsxs)("div",{className:"section__item",children:[Object(o.jsx)("dt",{className:"section__key",children:"Languages: "}),Object(o.jsxs)("dd",{className:"section__value",children:[" ",d," "]})]})]}),Object(o.jsxs)("div",{className:"section__group section__group--last",children:[Object(o.jsx)("dt",{className:"section__key",children:"Borders Countries: "}),Object(o.jsx)("dd",{className:"section__value section__value--flex",children:null===b||void 0===b?void 0:b.map((function(e,t){return Object(o.jsx)(l.b,{to:"/".concat(e.toLowerCase()),className:"button",children:b[t]},e)}))})]})]})]})})]})]})})},V=function(){return Object(s.useContext)(v).isLoading?Object(o.jsx)(d,{}):Object(o.jsx)(I,{})},w=function(){return Object(o.jsx)(l.a,{children:Object(o.jsxs)(f,{children:[Object(o.jsx)(u,{}),Object(o.jsxs)(r.c,{children:[Object(o.jsx)(r.a,{path:"/:code",component:V}),Object(o.jsx)(r.a,{path:"/",component:L})]})]})})};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.5fd18d7a.chunk.js.map