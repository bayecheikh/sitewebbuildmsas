(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{443:function(e,t,r){"use strict";r.r(t);var n=r(9),o=(r(59),r(12),{mounted:function(){},methods:{getListSlider:function(){var e=this;this.progress=!0,this.$axios.$get("/api/sliders?_format=json").then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("Données Reçu ++++++: ",r),e.sliders=r;case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){var t,r;console.log("Code error ++++++: ",null==e||null===(t=e.response)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message)})).finally((function(){console.log("Requette envoyé ")}))},goToSection:function(e){document.getElementById(e).scrollIntoView({behavior:"smooth",top:8})}},data:function(){return{sliders:[],swiperOption:{loop:!0,speed:750,slidesPerView:1,spaceBetween:10,autoplay:{delay:6e3},effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}}}),l=o,c=r(31),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"slider-area nav-style-1",attrs:{id:"accueil"}},[r("swiper",{staticClass:"row",attrs:{options:e.swiperOption}},[r("swiper-slide",{staticClass:"single-slider col-12 bg-green bg-slide-1"},[r("div",{staticClass:"row d-flex"},[r("div",{staticClass:"col-lg-5 col-md-5 col-sm-12 custom-container pt-100 pb-100"},[r("div",{staticClass:"slider-animation-1"},[r("p",{staticClass:"custom-title-slider"},[e._v("Le financement de la santé, Une priorité pour tous les acteurs")]),e._v(" "),r("hr",{staticClass:"custom-hr bg-white"}),e._v(" "),r("p",{staticClass:"custom-text-slider"},[e._v("\n                                C’est l’apport de ressources financières aux prestataires pour leur permettre de se procurer les ressources réelles nécessaires à la production des soins et des services ou en d’autres termes, c’est l’apport d’argent destiné à financer les activités du secteur sanitaire\n                            ")]),e._v(" "),r("div",{staticClass:"slider-btn"},[r("a",{attrs:{href:"/"},on:{click:function(t){return t.preventDefault(),e.goToSection("indicateurs")}}},[e._v("EN SAVOIR")])])])]),e._v(" "),r("div",{staticClass:"col-lg-7 col-md-7 col-sm-12 m-0 p-0",staticStyle:{"background-image":"url('/img/slider/slide1.png')","background-repeat":"no-repeat","background-size":"cover","min-height":"485px"}})])]),e._v(" "),r("div",{staticClass:"hero-slider-nav swiper-button-prev custom-nav"},[r("i",{staticClass:"pe-7s-angle-left"})]),e._v(" "),r("div",{staticClass:"hero-slider-nav swiper-button-next custom-nav"},[r("i",{staticClass:"pe-7s-angle-right"})])],1)],1)}),[],!1,null,"598c26fc",null);t.default=component.exports}}]);