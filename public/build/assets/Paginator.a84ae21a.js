import{_ as f}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,e as a,r as h,L as x,D as y,a as e,c as d,w as u,g as c,t as g,F as v,i as b,f as _,n as w}from"./app.cce3a173.js";import C from"./TermsOfService.db03d9d1.js";const k={props:{type:{type:String,default:"submit"}}},L=["type"];function P(s,i,n,m,p,r){return t(),a("button",{type:n.type,class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"},[h(s.$slots,"default")],8,L)}const oe=f(k,[["render",P]]),z={props:["modelValue"],emits:["update:modelValue"],methods:{focus(){this.$refs.input.focus()}}},B=["value"];function M(s,i,n,m,p,r){return t(),a("input",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:n.modelValue,onInput:i[0]||(i[0]=o=>s.$emit("update:modelValue",o.target.value)),ref:"input"},null,40,B)}const ie=f(z,[["render",M]]),N={name:"Paginator",components:{TermsOfService:C,Link:x},props:{paginator:{current_page:Number,data:Array,first_page_url:String,from:Number,last_page:Number,last_page_url:String,links:Array,next_page_url:String,path:String,per_page:Number,prev_page_url:String,to:Number,total:Number}},methods:{isFirstOrLastOrDots(s,i,n){return s===0||s===i-1||n.includes("...")}},computed:{onFirstPage(){return this.paginator.current_page===1},hasMorePages(){return this.paginator.current_page<this.paginator.last_page},nextPageUrl(){return this.paginator.next_page_url},previousPageUrl(){return this.paginator.prev_page_url},firstItem(){return this.paginator.from},lastItem(){return this.paginator.to},total(){return this.paginator.total}}},S={key:0,class:"flex items-center justify-between",role:"navigation"},F={class:"flex justify-between flex-1 sm:hidden"},V={key:0,class:"relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-gray-100 border border-gray-300 cursor-default leading-5 rounded-md"},I=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{"clip-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","fill-rule":"evenodd"})],-1),U=[I],O=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{"clip-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","fill-rule":"evenodd"})],-1),$=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{"clip-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","fill-rule":"evenodd"})],-1),D={key:3,class:"relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-gray-100 border border-gray-300 cursor-default leading-5 rounded-md"},j=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{"clip-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","fill-rule":"evenodd"})],-1),J=[j],A={class:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"},T={class:"text-sm text-gray-700 leading-5"},E=["textContent"],q=["textContent"],G=["textContent"],H={class:"relative z-0 inline-flex shadow-sm rounded-md"},K={key:0,"aria-disabled":"true","aria-hidden":"true",class:"relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-gray-100 border border-gray-300 cursor-default rounded-l-md leading-5"},Q=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{"clip-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","fill-rule":"evenodd"})],-1),R=[Q],W=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{"clip-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","fill-rule":"evenodd"})],-1),X={key:1,"aria-disabled":"true",class:"relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 cursor-default leading-5"},Y=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{"clip-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","fill-rule":"evenodd"})],-1),Z={key:3,"aria-disabled":"true","aria-hidden":"true",class:"relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-gray-500 bg-gray-100 border border-gray-300 cursor-default rounded-r-md leading-5"},ee=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{"clip-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","fill-rule":"evenodd"})],-1),te=[ee];function re(s,i,n,m,p,r){const o=y("Link");return n.paginator!==void 0?(t(),a("nav",S,[e("div",F,[r.onFirstPage?(t(),a("span",V,U)):(t(),d(o,{key:1,href:r.previousPageUrl,class:"relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 rounded-md hover:text-gray-500 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"},{default:u(()=>[O]),_:1},8,["href"])),r.hasMorePages?(t(),d(o,{key:2,href:r.nextPageUrl,class:"relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 rounded-md hover:text-gray-500 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"},{default:u(()=>[$]),_:1},8,["href"])):(t(),a("span",D,J))]),e("div",A,[e("div",null,[e("p",T,[c(" Mostrando "),e("span",{class:"font-medium",textContent:g(r.firstItem)},null,8,E),c(" para "),e("span",{class:"font-medium",textContent:g(r.lastItem)},null,8,q),c(" de "),e("span",{class:"font-medium",textContent:g(r.total)},null,8,G),c(" resultados ")])]),e("div",null,[e("span",H,[r.onFirstPage?(t(),a("span",K,R)):(t(),d(o,{key:1,href:r.previousPageUrl,class:"relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md leading-5 hover:text-gray-400 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150",rel:"prev"},{default:u(()=>[W]),_:1},8,["href"])),(t(!0),a(v,null,b(n.paginator.links,l=>(t(),a("div",null,[r.isFirstOrLastOrDots(s.index,n.paginator.links.length,l.label)?l.label==="..."?(t(),a("span",X,g(l.label),1)):_("",!0):(t(),d(o,{key:0,class:w([{"bg-blue-200":l.active===!0},"relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"]),href:l.url},{default:u(()=>[c(g(l.label),1)]),_:2},1032,["class","href"]))]))),256)),r.hasMorePages?(t(),d(o,{key:2,href:r.nextPageUrl,class:"relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md leading-5 hover:text-gray-400 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"},{default:u(()=>[Y]),_:1},8,["href"])):(t(),a("span",Z,te))])])])])):_("",!0)}const le=f(N,[["render",re]]);export{oe as J,le as P,ie as a};