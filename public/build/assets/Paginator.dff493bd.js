import _ from"./TermsOfService.bfda590c.js";import{L as h,O as x,o as t,e as a,a as e,c as i,w as o,g as d,t as u,F as p,i as v,f as m,n as y}from"./app.a6fa0031.js";import{_ as b}from"./_plugin-vue_export-helper.cdc0426e.js";const w={name:"Paginator",components:{TermsOfService:_,Link:h},props:{paginator:{current_page:Number,data:Array,first_page_url:String,from:Number,last_page:Number,last_page_url:String,links:Array,next_page_url:String,path:String,per_page:Number,prev_page_url:String,to:Number,total:Number}},methods:{isFirstOrLastOrDots(c,g,s){return c===0||c===g-1||s.includes("...")}},computed:{onFirstPage(){return this.paginator.current_page===1},hasMorePages(){return this.paginator.current_page<this.paginator.last_page},nextPageUrl(){return this.paginator.next_page_url},previousPageUrl(){return this.paginator.prev_page_url},firstItem(){return this.paginator.from},lastItem(){return this.paginator.to},total(){return this.paginator.total}}},C={key:0,class:"flex items-center justify-between",role:"navigation"},k={class:"flex justify-between flex-1 sm:hidden"},L={key:0,class:"relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-gray-100 border border-gray-300 cursor-default leading-5 rounded-md"},P=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{"clip-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","fill-rule":"evenodd"})],-1),z=[P],B=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{"clip-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","fill-rule":"evenodd"})],-1),M=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{"clip-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","fill-rule":"evenodd"})],-1),N={key:3,class:"relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-gray-100 border border-gray-300 cursor-default leading-5 rounded-md"},S=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{"clip-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","fill-rule":"evenodd"})],-1),F=[S],O={class:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"},U={class:"text-sm text-gray-700 leading-5"},I=["textContent"],j=["textContent"],D=["textContent"],V={class:"relative z-0 inline-flex shadow-sm rounded-md"},A={key:0,"aria-disabled":"true","aria-hidden":"true",class:"relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-gray-100 border border-gray-300 cursor-default rounded-l-md leading-5"},T=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{"clip-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","fill-rule":"evenodd"})],-1),E=[T],q=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{"clip-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","fill-rule":"evenodd"})],-1),G={key:1,"aria-disabled":"true",class:"relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 cursor-default leading-5"},H=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{"clip-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","fill-rule":"evenodd"})],-1),J={key:3,"aria-disabled":"true","aria-hidden":"true",class:"relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-gray-500 bg-gray-100 border border-gray-300 cursor-default rounded-r-md leading-5"},K=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{"clip-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","fill-rule":"evenodd"})],-1),Q=[K];function R(c,g,s,W,X,r){const l=x("Link");return s.paginator!==void 0?(t(),a("nav",C,[e("div",k,[r.onFirstPage?(t(),a("span",L,z)):(t(),i(l,{key:1,href:r.previousPageUrl,class:"relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 rounded-md hover:text-gray-500 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"},{default:o(()=>[B]),_:1},8,["href"])),r.hasMorePages?(t(),i(l,{key:2,href:r.nextPageUrl,class:"relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 rounded-md hover:text-gray-500 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"},{default:o(()=>[M]),_:1},8,["href"])):(t(),a("span",N,F))]),e("div",O,[e("div",null,[e("p",U,[d(" Showing "),e("span",{class:"font-medium",textContent:u(r.firstItem)},null,8,I),d(" to "),e("span",{class:"font-medium",textContent:u(r.lastItem)},null,8,j),d(" of "),e("span",{class:"font-medium",textContent:u(r.total)},null,8,D),d(" results ")])]),e("div",null,[e("span",V,[r.onFirstPage?(t(),a("span",A,E)):(t(),i(l,{key:1,href:r.previousPageUrl,class:"relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md leading-5 hover:text-gray-400 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150",rel:"prev"},{default:o(()=>[q]),_:1},8,["href"])),(t(!0),a(p,null,v(s.paginator.links,(n,f)=>(t(),a("div",{key:f},[r.isFirstOrLastOrDots(f,s.paginator.links.length,n.label)?n.label==="..."?(t(),a("span",G,u(n.label),1)):m("",!0):(t(),i(l,{key:0,class:y([{"bg-blue-200":n.active===!0},"relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"]),href:n.url},{default:o(()=>[d(u(n.label),1)]),_:2},1032,["class","href"]))]))),128)),r.hasMorePages?(t(),i(l,{key:2,href:r.nextPageUrl,class:"relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md leading-5 hover:text-gray-400 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"},{default:o(()=>[H]),_:1},8,["href"])):(t(),a("span",J,Q))])])])])):m("",!0)}const ee=b(w,[["render",R]]);export{ee as P};
