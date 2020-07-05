(this.webpackJsonpmycricketapp=this.webpackJsonpmycricketapp||[]).push([[0],{114:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(38),o=t.n(c),i=(t(51),t(52),t(45)),s=t(3),u=t(8),l=t(9);function d(){var e=Object(u.a)(["\n    display: flex;\n    justify-content: flex-end;\n    button {\n        margin: 5px;\n        background: #fff;\n        border: 1px solid #6e6e6e;\n        border-radius: 5px;\n        cursor: pointer;\n        padding: 3px 10px;\n    }\n"]);return d=function(){return e},e}function f(){var e=Object(u.a)(["\n    width: 100%;\n    height: 30px;\n    float: left;\n    display: inline-block;\n    border: 5px solid black;\n    .progress-bar {\n        height: 100%;\n        width: ","%;\n        background-color: blue;\n        transition: 0.5s ease-in-out;\n    }\n"]);return f=function(){return e},e}function m(){var e=Object(u.a)(["\n    .row {\n        clear: both;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n    }\n    \n    .country .country-input {\n        flex: 1;\n        margin-left: 2px;\n    }\n    \n    .cmn-cls {\n        display: flex;\n        float: left;\n        width: 250px;\n        margin: 5px 20px;\n    }\n    @media screen and (min-width: 600px) and (max-width: 900px) {\n        .cmn-cls {\n            width: 200px;\n            margin: 0;\n            padding: 5px 10px;\n        }\n        .country .country-input {\n            max-width: 120px;\n        }\n    }\n    @media screen and (max-width: 600px) {\n        .row {\n            flex-direction: column;\n            padding-bottom: 20px;\n            border-bottom: 2px solid #cecece;\n        }\n        .cmn-cls {\n            width: 300px;\n        }\n    }\n"]);return m=function(){return e},e}function p(){var e=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 10px 0;\n    border: 2px solid #dedede;\n    margin: 10px 0; \n"]);return p=function(){return e},e}function v(){var e=Object(u.a)(["\n    .data-row {\n        margin-bottom: 15px;\n    }\n"]);return v=function(){return e},e}var h,g,b=l.a.div(v()),w=l.a.div(p()),y=l.a.div(m()),x=l.a.div(f(),(function(e){return e.width||0})),E=l.a.div(d()),j=t(7),O=t(43),k=t.n(O),S=t(4),_="REQUEST",N="SUCCESS",A="FAILURE",C=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(S.a)({type:e},n)},D=(h="GET_ALL_SCORE",[_,N,A].reduce((function(e,n){return e[n]="".concat(h,"_").concat(n),e}),{})),F=(g=D,{request:function(){return C(g[_])},success:function(e){return C(g[N],e)},failure:function(){return C(g[A])}}),L=t(22),T=t.n(L),I=[{country:"Pakistan",score:23},{country:"Pakistan",score:127},{country:"India",score:3},{country:"India",score:71},{country:"Australia",score:31},{country:"India",score:22},{country:"Pakistan",score:81}],W=function(e,n){return n?I:T()(e,"allScoresData.data",[])},M=function(e){return T()(e,"allScoresData.isFetching",!1)},R=[{value:"test",name:"Test Data"},{value:"server",name:"Server Data"}],U=Object(j.b)((function(e){return{s__allScoresData:W(e),s__isScoresFetching:M(e)}}),(function(e){return{d__getAllScores:function(){return function(e){e(F.request()),k.a.get("https://cors-anywhere.herokuapp.com/http://assessments.reliscore.com/static/misc/cric_scores.json").then((function(n){return e(F.success({data:n.data}))})).catch((function(n){return e(F.failure(n))}))}(e)}}}))((function(e){var n=e.source,t=e.setSource,c=e.d__getAllScores;return Object(r.useEffect)((function(){"server"===n&&c()}),[n,c]),a.a.createElement(w,null,"Source of data:",a.a.createElement("div",null,R.map((function(e,r){var c=e.value,o=e.name;return a.a.createElement("span",{key:r},a.a.createElement("input",{className:"cursor_pointer",id:"src-".concat(c),type:"radio",readOnly:!0,onClick:function(){return t(c)},name:"data-source",value:c,checked:c===n}),a.a.createElement("label",{className:"cursor_pointer",htmlFor:"src-".concat(c)},o))}))))})),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.reduce((function(e,n){return e+n.score}),0)},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e&&e.length?e.map((function(e){var n=Object(s.a)(e,2);return{country:n[0],score:n[1]}})):[]},q=function(e){var n=e.scoreData,t=Object(r.useState)(0),c=Object(s.a)(t,2),o=c[0],i=c[1],u=Object(r.useState)(""),l=Object(s.a)(u,2),d=l[0],f=l[1],m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.reduce((function(e,n){return Math.max(e,n.score)}),0)}(n);Object(r.useEffect)((function(){i(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Math.round(B(e)/e.length*100)/100}(n.filter((function(e){return e.country.toLowerCase()===d.toLowerCase()}))))}),[d,n]);var p=o/m*100;return n.length?a.a.createElement(y,null,a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"cmn-cls country"},"The Country: ",a.a.createElement("input",{onChange:function(e){return f((n=e.target.value)?n.replace(/^\s+/,""):n);var n},className:"country-input",type:"text",value:d})),a.a.createElement("div",{className:"cmn-cls average"},"The Average: ",o||"-"),a.a.createElement("div",{className:"cmn-cls progress"},a.a.createElement(x,{width:p||0},a.a.createElement("div",{className:"progress-bar"}))))):a.a.createElement("div",null,"NO DATA AVAILABLE")},J=Object(j.b)((function(e){return{s__allScoresData:function(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return W(e,n)},s__isScoresFetching:M(e)}}),null)((function(e){var n=e.s__allScoresData,t=Object(r.useState)(2),c=Object(s.a)(t,2),o=c[0],u=c[1],l=Object(r.useState)("test"),d=Object(s.a)(l,2),f=d[0],m=d[1],p=function(e){u(Math.max(0,o+e))};return a.a.createElement(b,null,a.a.createElement(U,{source:f,setSource:m}),Object(i.a)(new Array(o)).map((function(e,t){return a.a.createElement("div",{key:t,className:"data-row"},a.a.createElement(q,{scoreData:n("test"===f)}))})),a.a.createElement(E,null,a.a.createElement("button",{disabled:o<=1,onClick:function(){return p(-1)}},"-"),a.a.createElement("button",{onClick:function(){return p(1)}},"+")))})),Q=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"headline"},a.a.createElement("h1",{className:"text_ff671d"},"My Cricket Score")),a.a.createElement("div",{className:"pageComponents"},a.a.createElement(J,null)))},G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var $=t(5),z={isFetching:!1,data:[]},H=Object($.c)({allScoresData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(S.a)({},z),n=arguments.length>1?arguments[1]:void 0;switch(n.type){case D[_]:return Object(S.a)(Object(S.a)({},e),{},{isFetching:!0});case D[N]:return{data:P(n.data),isFetching:!1};case D[A]:return Object(S.a)(Object(S.a)({},e),{},{isFetching:!1});default:return e}}}),K=t(44),X=function(){return Object($.d)(H,Object($.a)(K.a))}();o.a.render(a.a.createElement(j.a,{store:X},a.a.createElement(Q,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/my-cricket-score-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/my-cricket-score-app","/service-worker.js");G?(!function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):V(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):V(e)}))}}()},46:function(e,n,t){e.exports=t(114)},51:function(e,n,t){},52:function(e,n,t){}},[[46,1,2]]]);
//# sourceMappingURL=main.da1f2b19.chunk.js.map