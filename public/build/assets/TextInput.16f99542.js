import{v as l,x as c,o as u,e as o,a as i,t as d,d as m,p}from"./app.a6fa0031.js";const f={class:"text-sm text-red-600"},v={__name:"InputError",props:{message:String},setup(t){return(s,e)=>l((u(),o("div",null,[i("p",f,d(t.message),1)],512)),[[c,t.message]])}},_=["value"],h={__name:"TextInput",props:{modelValue:String},emits:["update:modelValue"],setup(t,{expose:s}){const e=m(null);return p(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),s({focus:()=>e.value.focus()}),(r,a)=>(u(),o("input",{ref_key:"input",ref:e,class:"border-gray-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm",value:t.modelValue,onInput:a[0]||(a[0]=n=>r.$emit("update:modelValue",n.target.value))},null,40,_))}};export{h as _,v as a};
