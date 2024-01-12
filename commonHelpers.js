import{S as f,i as d,a as y}from"./assets/vendor-ed396e71.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const b=new f(".gallery a",{className:"simple-lightbox"}),a={searchForm:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),paginationBtn:document.getElementById("pagination-btn")},w=()=>{d.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"topRight",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},v=()=>{d.info({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#afbef3",messageColor:"white",maxWidth:300,position:"topRight",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},L=()=>{d.info({message:"Please, enter some words to find picture",backgroundColor:"#afbef3",messageColor:"white",maxWidth:300,position:"topRight",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},u=(t,r="hidden")=>{t.classList.add(r)},g=(t,r="hidden")=>{t.classList.remove(r)},I=y.create({params:{key:"41495640-29bfe7f4b7a68b8700cb52105",image_type:"photo",orientation:"horizontal",safesearch:!0}}),S=async t=>{try{return(await I.get("https://pixabay.com/api/",{params:t})).data}catch{}},B=async({page:t,q:r})=>{try{const{hits:s,totalHits:e}=await S({page:t,per_page:40,q:r});if(s.length<1){w();return}return 40<e&&g(a.paginationBtn),t===Math.ceil(e/40)&&(u(a.paginationBtn),v()),s}catch(s){console.error(s)}},C=(t=[])=>{if(t.length<1)return;const r=t.reduce((n,{largeImageURL:s,webformatURL:e,tags:o,likes:i,views:m,comments:p,downloads:h})=>n+`
        <li class='gallery-item'>
            <a href="${s}">
            <img src="${e}" alt="${o}" width='640' height='640'/>
            </a>
            <div class='info-wrap'>
              <div>
                <h3 class='card-title'>Likes</h3>
                <p class='info-amount'>${i}</p>
              </div>
              <div>
                <h3 class='card-title'>Views</h3>
                <p class='info-amount'>${m}</p>
              </div>
              <div>
                <h3 class='card-title'>Comments</h3>
                <p class='info-amount'>${p}</p>
              </div>
              <div>
                <h3 class='card-title'>Downloads</h3>
                <p class='info-amount'>${h}</p>
              </div>
            </div>
          </li>`,"");a.gallery.insertAdjacentHTML("beforeend",r)},O=()=>{const r=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"})};let c=null,l;const q=async t=>{t.preventDefault(),a.paginationBtn.classList.add("hidden"),l=1,c!==null&&(a.paginationBtn.removeEventListener("click",c),c=null);const r=document.querySelector(".loader"),n=new FormData(t.currentTarget).get("query");if(n.trim()===""){L();return}a.gallery.innerHTML="",c=async()=>{const e=await s({promise:B({page:l,q:n}),spinner:r});C(e),b.refresh(),l>1&&O(),l++},c(),a.searchForm.reset(),a.paginationBtn.addEventListener("click",c);async function s({promise:e,spinner:o}){g(o);const i=await e;return u(o),i}};a.searchForm.addEventListener("submit",q);
//# sourceMappingURL=commonHelpers.js.map
