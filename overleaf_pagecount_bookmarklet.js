javascript:function isInViewport(element){const rect=element.getBoundingClientRect(),midPoint=(window.innerHeight||document.documentElement.clientHeight)/2;return rect.top<=midPoint&&rect.bottom>=midPoint}for(var pages=document.getElementsByClassName("pdf-page-container page-container ng-scope"),i=0;i<pages.length;++i)isInViewport(pages[i])&&alert("Page "+(i+1)+" of "+pages.length);
