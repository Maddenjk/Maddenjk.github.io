(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,a,t){e.exports=t(36)},36:function(e,a,t){"use strict";t.r(a);var l=t(0),c=t.n(l),n=t(10),r=t.n(n),o=t(5),m=t(11),s=t.n(m);var u=function(){var e=c.a.useState(!1),a=Object(o.a)(e,2),t=a[0],l=a[1],n=c.a.useState(!1),r=Object(o.a)(n,2),m=r[0],s=r[1],u=c.a.useState(!1),i=Object(o.a)(u,2),d=i[0],v=i[1],E=c.a.useState(""),f=Object(o.a)(E,2),p=f[0],h=f[1],b=c.a.useState(""),N=Object(o.a)(b,2),g=N[0],k=N[1],S=c.a.useState(""),y=Object(o.a)(S,2),x=y[0],C=y[1],M=c.a.useState(""),D=Object(o.a)(M,2),w=D[0],F=D[1],R=c.a.useState(""),O=Object(o.a)(R,2),j=O[0],T=O[1],A=function(){T("")};return c.a.createElement("div",{className:"form"},c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{className:"form-check-input",type:"checkbox",value:"",id:"ExplodeMax",onChange:function(e){l(""!==e.target.value||!1)}}),c.a.createElement("label",{className:"form-check-label",htmlFor:"ExplodeMax"},"Explode Dice When Max Dice Roll Is Hit")),c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{className:"form-check-input",type:"checkbox",value:"",id:"OneRemovesSuccess",onChange:function(e){s(""!==e.target.value||!1)}}),c.a.createElement("label",{className:"form-check-label",htmlFor:"OneRemovesSuccess"},"Roll of 1 Removes a Success, unless on exploded dice")),c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{className:"form-check-input",type:"checkbox",value:"",id:"MaxCountsTwice",onChange:function(e){v(""!==e.target.value||!1)}}),c.a.createElement("label",{className:"form-check-label",htmlFor:"MaxCountsTwice"},"Max Rolls Counts as Two Successes")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("label",{className:"form-label",htmlFor:"NumberToBeat"},"Number to Beat"),c.a.createElement("input",{type:"text",onFocus:A,className:"form-control col-3",id:"NumberToBeat","aria-label":"NumberToBeat",value:p,onChange:function(e){h(e.target.value)}})),c.a.createElement("div",{className:"col-5 col-md-2 col-lg-2 col-xl-2 mr-3"},c.a.createElement("label",{className:"form-label",htmlFor:"MaxRoll"},"Dice Type"),c.a.createElement("div",{className:"form-inline"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("div",{className:"input-group-text"},"D")),c.a.createElement("input",{type:"text",className:"form-control col",value:x,onChange:function(e){C(e.target.value)},id:"MaxRoll","aria-label":"MaxRoll"}))),c.a.createElement("div",{className:"col-11"},c.a.createElement("label",{className:"form-label",htmlFor:"Amount"},"Amount of Dice"),c.a.createElement("input",{type:"text",onFocus:A,className:"form-control col-3",value:g,onChange:function(e){k(e.target.value)},id:"Amount","aria-label":"Amount"}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-11 mr-3 mb-2"},c.a.createElement("label",{className:"form-label",htmlFor:"Mod"},"Modifiers (Space Seperated)"),c.a.createElement("input",{type:"text",onFocus:A,className:"form-control",value:w,onChange:function(e){F(e.target.value)},id:"Mod","aria-label":"Mod"}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"btn-group form"},c.a.createElement("button",{type:"button",onClick:function(){var e=[],a=[],l=0,c=0;w&&w.length>0&&(e=w.split(" "));for(var n=0;n<+g;n++){var r=Math.floor(Math.random()*+x);1===(r+=1)&&m&&(l-=1),r>=+x&&(t&&(c+=1),d&&(l+=1)),(r+=+e[n]||0)>=+p&&(l+=1),a.push(r)}for(var o=0;o<c;o++){var s=Math.floor(Math.random()*+x);(s+=1)>=+x&&(t&&(c+=1),d&&(l+=1)),(s+=+e[o]||0)>=+p&&(l+=1),a.push(s)}var u=j;u&&(u+="\n"),u+="D".concat(x,": ")+a.join(", "),T(u+="\nSuccesses = "+l)}},"Roll"),c.a.createElement("div",{className:"pull-right"},c.a.createElement("button",{type:"button",onClick:function(){h(""),k(""),F(""),C(""),T("")}},"Clear"))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("label",{htmlFor:"result"},"Result"),c.a.createElement("textarea",{className:"form-control",disabled:!0,rows:8,id:"result",value:j}))))};var i=function(){var e=c.a.useState(["","","","","","","",""]),a=Object(o.a)(e,2),t=a[0],l=a[1],n=c.a.useState(["","","","","","","",""]),r=Object(o.a)(n,2),m=r[0],u=r[1],i=c.a.useState(0),d=Object(o.a)(i,2),v=d[0],E=d[1],f=c.a.useState(""),p=Object(o.a)(f,2),h=p[0],b=p[1],N=["2","4","6","8","10","12","20","100"];function g(e,a,t,l){for(var c=[],n=0,r=0;r<a;r++){var o=Math.floor(Math.random()*+e);o+=1,n+=o+=+t[r]||0,c.push(o)}console.log(c);var m=l;return m&&(m+="\n"),m+=" D".concat(e," ")+c.toString(),m+="\nTotal = "+n}var k=function(){b("")};return c.a.createElement("div",null,c.a.createElement("div",{className:"row"},c.a.createElement("p",{className:"col-2"},"Type"),c.a.createElement("p",{className:"col-3"},"Amount of Dice"),c.a.createElement("p",{className:"col-7"},"Modifiers (Space Seperated)")),c.a.createElement(c.a.Fragment,null,function(){for(var e=[],a=function(a){var n=N[a],r="D".concat(n,"Key"),o="D".concat(n),s="D".concat(n,"Text"),i="D".concat(n,"Amount"),d="D".concat(n,"Mod");e.push(c.a.createElement("div",{className:"row",key:r},c.a.createElement("div",{className:"col-2"},c.a.createElement("p",{"aria-label":s,id:s},o)),c.a.createElement("div",{className:"col-3"},c.a.createElement("input",{type:"text",key:i,onFocus:k,className:"form-control",id:i,"aria-label":i,value:t[a],onChange:function(e){!function(e,a){var c=t;c[e]=a,l(c),E(v+1)}(a,e.target.value)}})),c.a.createElement("div",{className:"col-7"},c.a.createElement("input",{type:"text",key:d,onFocus:k,className:"form-control",id:d,"aria-label":d,value:m[a],onChange:function(e){!function(e,a){var t=m;t[e]=a,u(t),E(v+1)}(a,e.target.value)}}))))},n=0;n<N.length;n++)a(n);return e}()||null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-1"},c.a.createElement("div",{className:"btn-group"},c.a.createElement("button",{type:"button",onClick:function(e){for(var a="",l=0;l<N.length;l++){var c=N[l];if(void 0!==s()(t[l])&&""!==t[l]){var n=Number.parseInt(t[l]||"0"),r=m[l]||"",o=[];r&&(o=r.toString().split(" ")),a=g(c,n,o,a)}}b(a)}},"Roll"),c.a.createElement("div",{className:"pull-right"},c.a.createElement("button",{type:"button",onClick:function(){for(var e=[],a=0;a<N.length;a++)e.push("");l([].concat(e)),u([].concat(e)),b("")}},"Clear"))))),c.a.createElement("div",{className:"row"},c.a.createElement("label",{htmlFor:"result"},"Result"),c.a.createElement("textarea",{className:"form-control",value:h,disabled:!0,rows:8,id:"result"})))};var d=function(){var e=c.a.useState(c.a.createElement(u,null)),a=Object(o.a)(e,2),t=a[0],l=a[1],n=function(){s()("#DicePoolSystem").is(":checked")&&l(c.a.createElement(u,null)),s()("#d20System").is(":checked")&&l(c.a.createElement(i,null))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{className:"form-check-input",type:"radio",name:"RollerChoice",defaultChecked:!0,id:"DicePoolSystem",onChange:n}),c.a.createElement("label",{className:"form-check-label",htmlFor:"DicePoolSystem"},"Dice Pool System")),c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{className:"form-check-input",type:"radio",name:"RollerChoice",id:"d20System",onChange:n}),c.a.createElement("label",{className:"form-check-label",htmlFor:"d20System"},"D20 System")),t)};var v=function(){return c.a.createElement("div",{className:"Page p-4"},c.a.createElement(d,null))},E=t(26),f=t(16),p=t(22);var h=function(){return c.a.createElement("div",null,c.a.createElement(E.a,{bg:"dark",variant:"dark"},c.a.createElement(p.a,null,c.a.createElement(f.a,{className:"me-auto"},c.a.createElement(f.a.Link,{href:"./DiceRoller"},"Dice Roller")))))};var b=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(h,null),c.a.createElement(v,null))},N=(t(35),document.getElementById("root"));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),N)}},[[27,1,2]]]);
//# sourceMappingURL=main.916c0511.chunk.js.map