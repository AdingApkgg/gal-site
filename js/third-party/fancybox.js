/* global Fancybox */
document.addEventListener("page:loaded",(()=>{
/**
   * Wrap images with fancybox.
   */
document.querySelectorAll(".post-body :not(a) > img, .post-body > img").forEach((t=>{const e=t.dataset.src||t.src,a=document.createElement("a");a.classList.add("fancybox"),a.href=e,a.setAttribute("itemscope",""),a.setAttribute("itemtype","http://schema.org/ImageObject"),a.setAttribute("itemprop","url");let o="default";null!==t.closest(".post-gallery")?o="gallery":null!==t.closest(".group-picture")&&(o="group"),a.dataset.fancybox=o;const s=t.title||t.alt;s&&(a.title=s,
// Make sure img captions will show correctly in fancybox
a.dataset.caption=s),t.wrap(a)})),Fancybox.bind("[data-fancybox]")}));