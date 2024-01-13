import{S as f,i as d,a as y}from"./assets/vendor-ed396e71.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const b=new f(".gallery a",{className:"simple-lightbox"}),a={searchForm:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),paginationBtn:document.getElementById("pagination-btn")},w=()=>{d.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"topRight",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},v=()=>{d.info({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#afbef3",messageColor:"white",maxWidth:300,position:"topRight",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},L=()=>{d.info({message:"Please, enter some words to find picture",backgroundColor:"#afbef3",messageColor:"white",maxWidth:300,position:"topRight",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},I=()=>{d.error({message:"Sorry, we have some problem. Try again later, please",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},u=(t,r="hidden")=>{t.classList.add(r)},g=(t,r="hidden")=>{t.classList.remove(r)},S=y.create({params:{key:"41495640-29bfe7f4b7a68b8700cb52105",image_type:"photo",orientation:"horizontal",safesearch:!0}}),B=async t=>(await S.get("https://pixabay.com/api/",{params:t})).data,C=async({page:t,q:r})=>{try{const{hits:o,totalHits:e}=await B({page:t,per_page:40,q:r});if(o.length<1){w();return}return 40<e&&g(a.paginationBtn),t===Math.ceil(e/40)&&(u(a.paginationBtn),v()),o}catch{I()}},O=(t=[])=>{if(t.length<1)return;const r=t.reduce((n,{largeImageURL:o,webformatURL:e,tags:s,likes:i,views:m,comments:p,downloads:h})=>n+`
        <li class='gallery-item'>
            <a href="${o}">
            <img src="${e}" alt="${s}" width='640' height='640'/>
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
          </li>`,"");a.gallery.insertAdjacentHTML("beforeend",r)},R=()=>{const r=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"})};let l=null,c;const k=async t=>{t.preventDefault(),a.paginationBtn.classList.add("hidden"),c=1,l!==null&&(a.paginationBtn.removeEventListener("click",l),l=null);const r=document.querySelector(".loader"),n=new FormData(t.currentTarget).get("query");if(n.trim()===""){L();return}a.gallery.innerHTML="",l=async()=>{const e=await o({promise:C({page:c,q:n}),spinner:r});O(e),b.refresh(),c>1&&R(),c++},l(),a.searchForm.reset(),a.paginationBtn.addEventListener("click",l);async function o({promise:e,spinner:s}){g(s);const i=await e;return u(s),i}};a.searchForm.addEventListener("submit",k);
//# sourceMappingURL=commonHelpers.js.map
