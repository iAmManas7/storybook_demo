import{j as n}from"./iframe-DW4pi0B1.js";import"./preload-helper-D9Z9MdNV.js";const t=({label:o,primary:s,size:a="small"})=>n.jsx("button",{style:{backgroundColor:s?"blue":"gray",color:"white",padding:"10px 20px",borderRadius:"5px",border:"none",width:a==="small"?"100px":a==="medium"?"200px":"300px"},children:o});t.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"small"',computed:!1}},primary:{required:!1,tsType:{name:"boolean"},description:""}}};const i={title:"Components/Button",component:t,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"red"}]}}},e={args:{label:"Primary Button",primary:!0,size:"medium"},argTypes:{label:{control:{type:"text"}},primary:{control:{type:"boolean"}},size:{control:{type:"select"},options:["small","medium","large"]}}},r={args:{label:"Secondary Button",primary:!1,size:"medium"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary Button',
    primary: true,
    size: 'medium'
  },
  argTypes: {
    label: {
      control: {
        type: "text"
      }
    },
    primary: {
      control: {
        type: "boolean"
      }
    },
    size: {
      control: {
        type: "select"
      },
      options: ["small", "medium", "large"]
    }
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Button',
    primary: false,
    size: 'medium'
  }
}`,...r.parameters?.docs?.source}}};const p=["Primary","Secondary"];export{e as Primary,r as Secondary,p as __namedExportsOrder,i as default};
