!function(){"use strict";const t=document.querySelector(".front"),e=document.querySelector(".behind"),n=document.querySelector(".container"),i=document.querySelector(".container__image-container"),o=document.querySelector(".grab"),c=document.querySelector(".container__slider-container");function d(t){return fetch("https://picsum.photos/854/480").then((e=>{t.setAttribute("src",e.url)}))}function u(){const e=n.getBoundingClientRect().width;t.style.width=`${e}px`;const i=t.offsetHeight;n.style.height=`${i}px`}function r(){return i.getBoundingClientRect().width}function s(t,e,o){const d=o+e-t;i.style.width=`${d}px`,function(){const t=i.getBoundingClientRect().width/n.getBoundingClientRect().width*100;t>=100||t<=0||(c.style.left=`${t}%`)}()}d(t),d(e),u(),window.addEventListener("resize",(()=>{u();const t=i.getBoundingClientRect().width/n.getBoundingClientRect().width*100;t>=100||t<=0||(c.style.left=`${t}%`)}));let l,h,g=!1;o.addEventListener("mousedown",(t=>{h=r(),l=t.clientX,g=!0})),n.addEventListener("mouseup",(t=>{g=!1})),n.addEventListener("mousemove",(t=>{if(g){const e=t.clientX;s(l,e,h)}})),o.addEventListener("touchstart",(t=>{h=r(),l=t.touches[0].clientX,g=!0})),n.addEventListener("touchend",(t=>{g=!1})),n.addEventListener("touchmove",(t=>{if(g){const e=t.touches[0].clientX;s(l,e,h)}}))}();