"use strict";(()=>{var e={};e.id=829,e.ids=[829],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},8009:(e,a,r)=>{r.r(a),r.d(a,{config:()=>m,default:()=>l,routeModule:()=>p});var s={};r.r(s),r.d(s,{default:()=>u});var i=r(1802),t=r(7153),d=r(6249);let n=[{id:101,name:"Alice"},{id:102,name:"Bob"},{id:103,name:"Caroline"},{id:104,name:"Dave"}],u=(e,a)=>{try{if(!Array.isArray(n))throw Error("Cannot find user data");a.status(200).json(n)}catch(e){a.status(500).json({statusCode:500,message:e.message})}},o=i.PagesAPIRouteModule,l=(0,d.l)(s,"default"),m=(0,d.l)(s,"config"),p=new o({definition:{kind:t.x.PAGES_API,page:"/api/users",pathname:"/api/users",bundlePath:"",filename:""},userland:s})}};var a=require("../../webpack-api-runtime.js");a.C(e);var r=e=>a(a.s=e),s=a.X(0,[222],()=>r(8009));module.exports=s})();