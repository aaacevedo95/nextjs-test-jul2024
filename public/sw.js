if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"434af078512000203212119bf342c673"},{url:"/_next/static/chunks/876-e8b3514c21575537.js",revision:"fFCejrzyMtlrP11ZahY2K"},{url:"/_next/static/chunks/fd9d1056-2821b0f0cabcd8bd.js",revision:"fFCejrzyMtlrP11ZahY2K"},{url:"/_next/static/chunks/framework-c238562bb56c4bfe.js",revision:"fFCejrzyMtlrP11ZahY2K"},{url:"/_next/static/chunks/main-1b43eed3b6c06d53.js",revision:"fFCejrzyMtlrP11ZahY2K"},{url:"/_next/static/chunks/main-app-dc37ced7619fd84b.js",revision:"fFCejrzyMtlrP11ZahY2K"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"fFCejrzyMtlrP11ZahY2K"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"fFCejrzyMtlrP11ZahY2K"},{url:"/_next/static/chunks/pages/index-057af1e2803e0f2d.js",revision:"fFCejrzyMtlrP11ZahY2K"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-4e4bb5dac96decf1.js",revision:"fFCejrzyMtlrP11ZahY2K"},{url:"/_next/static/css/8cd334afb0bedc86.css",revision:"8cd334afb0bedc86"},{url:"/_next/static/css/a30393f2d6cdb945.css",revision:"a30393f2d6cdb945"},{url:"/_next/static/fFCejrzyMtlrP11ZahY2K/_buildManifest.js",revision:"6abd51a746dd4aeae8f6c151a8ff1aeb"},{url:"/_next/static/fFCejrzyMtlrP11ZahY2K/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/icons/apple-icon-180.png",revision:"678b7b3bedc193b7efb4895ce4a3bd7c"},{url:"/icons/manifest-icon-192.maskable.png",revision:"d55d045e0863315f92b6dc4056be15a0"},{url:"/icons/manifest-icon-512.maskable.png",revision:"8ebbd11b79c9deeea8ff5f2f1f6b29da"},{url:"/img/DeNA.svg",revision:"8c9751ea3e3389c9e81ff99fb3436c94"},{url:"/img/オリックス.svg",revision:"0287b0c7051e802ab461ca2a85319556"},{url:"/img/ソフトバンク.svg",revision:"429fcf5f3ac0cdaffba6bcf83d2ffd49"},{url:"/img/ヤクルト.svg",revision:"f66aaa69dabdc20a08ac88dd5648a1eb"},{url:"/img/ロッテ.svg",revision:"c1645805a2512859b97483f7c7489510"},{url:"/img/中日.svg",revision:"377c1381a0a97fe09fe0f41caa5fcd29"},{url:"/img/巨人.svg",revision:"f7fce04884fb0410dfa3afa9262ebecb"},{url:"/img/広島.svg",revision:"40c1751d574751a8892acdc384bb9a86"},{url:"/img/日本ハム.svg",revision:"6a3b34dd2aab45def96e71ec6dc8b38e"},{url:"/img/楽天.svg",revision:"adf28969b036a900bb79273fb15b148c"},{url:"/img/西武.svg",revision:"6a9af786cb2929029efad2f6775bef89"},{url:"/img/阪神.svg",revision:"4c60c86455f9b9d66db3c23f9ae4926e"},{url:"/logo.png",revision:"603cfb8fbf87e3c65398cbe652f29ade"},{url:"/manifest.json",revision:"3392a6b2f76bf0ba3bbe79458a0c8713"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
