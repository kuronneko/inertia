import{M as g,d as _,u as y,o as c,c as b,w as t,g as l,a as s,h as o,b as x,e as k,f as v}from"./app.63afecfa.js";import{_ as h}from"./ActionSection.7a3081a0.js";import{_ as w}from"./PrimaryButton.7f9619bd.js";import"./SectionTitle.6003a622.js";import"./_plugin-vue_export-helper.cdc0426e.js";const B=s("div",{class:"max-w-xl text-sm text-gray-600"}," Import using your XLSX file (Your current logs will not be overwritten). ",-1),L={class:"mt-5"},F={class:"flex"},I={class:"mt-2"},C={key:0,class:"w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700"},E=["value"],$={__name:"ImportAllLog",setup(N){const a=g("$swal"),d=_(null),e=y({file:null}),u=()=>{e.post(route("import"),{preserveScroll:!0,onSuccess:()=>m(),onError:r=>p(r),onFinish:()=>e.reset()})},m=()=>{e.reset(),n().fire({icon:"success",title:"Your XLSX file was loaded successfully"})},p=r=>{e.reset(),n().fire({icon:"error",title:r.error})},n=()=>a.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:1700,timerProgressBar:!0,didOpen:r=>{r.addEventListener("mouseenter",a.stopTimer),r.addEventListener("mouseleave",a.resumeTimer)}});return(r,i)=>(c(),b(h,null,{title:t(()=>[l(" Import Logs ")]),description:t(()=>[l(" Import logs from a file. ")]),content:t(()=>[B,s("div",L,[s("div",F,[s("input",{onInput:i[0]||(i[0]=f=>o(e).file=f.target.files[0]),class:"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",ref_key:"inputFile",ref:d,type:"file"},null,544),x(w,{disabled:!o(e).file,class:"py-2 ml-1",onClick:u},{default:t(()=>[l(" Upload ")]),_:1},8,["disabled"])]),s("div",I,[o(e).progress?(c(),k("div",C,[s("div",{class:"bg-gray-600 h-2.5 rounded-full dark:bg-gray-300",value:o(e).progress.percentage,max:"100"},null,8,E)])):v("",!0)])])]),_:1}))}};export{$ as default};
