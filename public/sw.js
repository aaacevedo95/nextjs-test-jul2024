if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,o)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const t=e=>n(e,a),r={module:{uri:a},exports:c,require:t};s[a]=Promise.all(i.map((e=>r[e]||t(e)))).then((e=>(o(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"434af078512000203212119bf342c673"},{url:"/_next/static/chunks/743-e63c13e19d42f0de.js",revision:"gDseRNDhrTeEV44qyk4H7"},{url:"/_next/static/chunks/fd9d1056-2821b0f0cabcd8bd.js",revision:"gDseRNDhrTeEV44qyk4H7"},{url:"/_next/static/chunks/framework-6bb7d6253c30bdb1.js",revision:"gDseRNDhrTeEV44qyk4H7"},{url:"/_next/static/chunks/main-app-55db5638eb66521a.js",revision:"gDseRNDhrTeEV44qyk4H7"},{url:"/_next/static/chunks/main-d886fcc934614aa9.js",revision:"gDseRNDhrTeEV44qyk4H7"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"gDseRNDhrTeEV44qyk4H7"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"gDseRNDhrTeEV44qyk4H7"},{url:"/_next/static/chunks/pages/index-6e44a68cd10c12f8.js",revision:"gDseRNDhrTeEV44qyk4H7"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-35b92941fc8726f9.js",revision:"gDseRNDhrTeEV44qyk4H7"},{url:"/_next/static/css/a30393f2d6cdb945.css",revision:"a30393f2d6cdb945"},{url:"/_next/static/gDseRNDhrTeEV44qyk4H7/_buildManifest.js",revision:"4615b89375cb4fc2c97247283f8b1ca4"},{url:"/_next/static/gDseRNDhrTeEV44qyk4H7/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/icons/apple-icon-180.png",revision:"1e5fe9a6f178cf1c81800dafa8a0cbd2"},{url:"/icons/manifest-icon-192.maskable.png",revision:"46ba83771112158f2fe44bcf26d4a71d"},{url:"/icons/manifest-icon-512.maskable.png",revision:"b558e200f83a8957324a35e139782c63"},{url:"/img/common/logo/2024/logo_b_m.gif",revision:"15291d82ff18cce2ec24d72ce2a7e456"},{url:"/img/common/logo/2024/logo_c_m.gif",revision:"eba14fa7dedbf12de81787e1992b7fa0"},{url:"/img/common/logo/2024/logo_d_m.gif",revision:"38423adc16f32eb5e023549a3df840fc"},{url:"/img/common/logo/2024/logo_db_m.gif",revision:"7f6164336e399857a6b74dba9c567e5a"},{url:"/img/common/logo/2024/logo_e_m.gif",revision:"38e69fd2fbb71a2b2b0a516a07ab82e2"},{url:"/img/common/logo/2024/logo_f_m.gif",revision:"d7a3d0512b04414f3a69301ba9523a18"},{url:"/img/common/logo/2024/logo_g_m.gif",revision:"e3969d592606f8fe466e1feb0eaa7f75"},{url:"/img/common/logo/2024/logo_h_m.gif",revision:"caee7e3cb0572b77ae623aaa269aeb4f"},{url:"/img/common/logo/2024/logo_l_m.gif",revision:"f43212716c0cf6fa19527bd646bf10eb"},{url:"/img/common/logo/2024/logo_m_m.gif",revision:"8c00619f41990069537122a84848948d"},{url:"/img/common/logo/2024/logo_s_m.gif",revision:"5d11201866f8012a0e7b50c9c6f89301"},{url:"/img/common/logo/2024/logo_t_m.gif",revision:"904c42187b915559e4d25a68e8fdf89c"},{url:"/logo.png",revision:"88778528662f8f5b724908e7344ee078"},{url:"/manifest.json",revision:"2fa6cfc772a6c2b07f6f6e739e80e230"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
