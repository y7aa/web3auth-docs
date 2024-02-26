"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[42138],{3609:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=i(85893),o=i(11151);const r={title:"Going Live with Web3Auth Plug and Play",sidebar_label:"Going Live Checklist",displayed_sidebar:"docs",description:"Going Live with Plug and Play Web3Auth | Documentation - Web3Auth"},a=void 0,s={id:"pnp/going-live",title:"Going Live with Web3Auth Plug and Play",description:"Going Live with Plug and Play Web3Auth | Documentation - Web3Auth",source:"@site/docs/pnp/going-live.mdx",sourceDirName:"pnp",slug:"/pnp/going-live",permalink:"/docs/pnp/going-live",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/pnp/going-live.mdx",tags:[],version:"current",frontMatter:{title:"Going Live with Web3Auth Plug and Play",sidebar_label:"Going Live Checklist",displayed_sidebar:"docs",description:"Going Live with Plug and Play Web3Auth | Documentation - Web3Auth"},sidebar:"docs",previous:{title:"dApp Share",permalink:"/docs/pnp/features/dapp-share"},next:{title:"v7 to v8",permalink:"/docs/pnp/migration-guides/modal-v7-to-v8"}},u={},l=[{value:"1. Create a Web3Auth Production Client ID",id:"1-create-a-web3auth-production-client-id",level:3},{value:"2. Create a Web3Auth Production Verifier",id:"2-create-a-web3auth-production-verifier",level:3},{value:"3. Update your Web3Auth SDKs to the latest version",id:"3-update-your-web3auth-sdks-to-the-latest-version",level:3},{value:"4. Use a production RPC Endpoint for your respective blockchains",id:"4-use-a-production-rpc-endpoint-for-your-respective-blockchains",level:3},{value:"5. Audit the UX for your Web3Auth Login flow",id:"5-audit-the-ux-for-your-web3auth-login-flow",level:3},{value:"6. Check your interoperability flow",id:"6-check-your-interoperability-flow",level:3},{value:"7. Check in multiple browsers and devices",id:"7-check-in-multiple-browsers-and-devices",level:3},{value:"8. Upgrade your Web3Auth Plan",id:"8-upgrade-your-web3auth-plan",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Before going live with Web3Auth Plug and Play SDKs, please make sure you have completed the following steps:"}),"\n",(0,n.jsx)(t.h3,{id:"1-create-a-web3auth-production-client-id",children:"1. Create a Web3Auth Production Client ID"}),"\n",(0,n.jsxs)(t.p,{children:["Make sure your client id for Web3Auth is on the Sapphire Mainnet Network. The Sapphire Mainnet is our geo-distributed, horizontally scalable network.\nIf you have certain specific requirements for the network configurations for scalability, please reach out to us at our\n",(0,n.jsx)(t.a,{href:"https://community.web3auth.io",children:"Community Portal"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"You need to create a Sapphire Devnet client id for the same name before creating a production client id. This is to ensure that your testing and\nproduction environments are separate and the wallets generated for the end users remain safe."})}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["Make sure your Web3Auth Network in the SDK initialization is the ",(0,n.jsx)(t.strong,{children:"same"})," as your client id network, otherwise you find see errors while logging your\nusers in."]})}),"\n",(0,n.jsx)(t.h3,{id:"2-create-a-web3auth-production-verifier",children:"2. Create a Web3Auth Production Verifier"}),"\n",(0,n.jsxs)(t.p,{children:["While using the ",(0,n.jsx)(t.a,{href:"/pnp/features/custom-authentication",children:"Custom Authentication Feature"})," in the Plug and Play SDKs, you will need to create a verifier.\nMake sure the network of the verifier is the same as the network of the client id."]}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["All new verifiers produce ",(0,n.jsx)(t.strong,{children:"different wallets/ accounts"})," for users, it is not possible to rename a verifier once you have created it. The person who\nhas created the verifier can only edit it afterwards. This is a limitation even when you have a team setup. This is because a verifier is a smart\ncontract and the address editing it cannot be changed. The only way to change this is to create a new verifier."]})}),"\n",(0,n.jsx)(t.h3,{id:"3-update-your-web3auth-sdks-to-the-latest-version",children:"3. Update your Web3Auth SDKs to the latest version"}),"\n",(0,n.jsx)(t.p,{children:"We are constantly updating our SDKs to make sure they are secure and performant. Make sure you are using the latest version of the SDKs. Please do not\nactively use the pre release versions, rather wait for the latest stable release."}),"\n",(0,n.jsx)(t.h3,{id:"4-use-a-production-rpc-endpoint-for-your-respective-blockchains",children:"4. Use a production RPC Endpoint for your respective blockchains"}),"\n",(0,n.jsxs)(t.p,{children:["For testing purposes, our examples and SDKs use public RPC endpoints. Make sure you are using a production RPC endpoint (by providers like Infura,\nQuicknode, Alchemy etc.) for your production environment before going live. This can be done by updating the\n",(0,n.jsx)(t.a,{href:"/sdk/pnp/web/modal/initialize#chainconfig",children:(0,n.jsx)(t.code,{children:"rpcTarget"})})," value in the ",(0,n.jsx)(t.code,{children:"Web3Auth"})," object in the SDK initialisation in Web SDKs and updating the\nprovider URL in mobile SDKs."]}),"\n",(0,n.jsx)(t.h3,{id:"5-audit-the-ux-for-your-web3auth-login-flow",children:"5. Audit the UX for your Web3Auth Login flow"}),"\n",(0,n.jsxs)(t.p,{children:["From the icon showing up in the Web3Auth Modal to the ",(0,n.jsx)(t.a,{href:"/pnp/features/whitelabel/",children:"whitelabel setting"})," for the intermediary pages that are shown to the\nuser, make sure you have checked your branding and customisations. Checking all the possible flows is recommended."]}),"\n",(0,n.jsx)(t.h3,{id:"6-check-your-interoperability-flow",children:"6. Check your interoperability flow"}),"\n",(0,n.jsxs)(t.p,{children:["If you're using ",(0,n.jsx)(t.a,{href:"/pnp/features/interoperability#using-web3auth-dashboard-toggles",children:"interoperability with Torus Wallet"})," on the dashboard settings, you\nneed to use Web3Auth in the ",(0,n.jsx)(t.code,{children:"mainnet"})," network. It is recommended that you audit that flow before going live. Your app name shown in the Torus Wallet\nlogin screen is the app name of your Client Id so make sure you have updated that."]}),"\n",(0,n.jsxs)(t.p,{children:["If you're using ",(0,n.jsx)(t.a,{href:"/pnp/features/interoperability#interoperability-with-plugins",children:"WalletConnect or Web3Auth Plugins based interoperability flow"}),", make\nsure you have tested the flow before going live."]}),"\n",(0,n.jsx)(t.h3,{id:"7-check-in-multiple-browsers-and-devices",children:"7. Check in multiple browsers and devices"}),"\n",(0,n.jsxs)(t.p,{children:["The Web3Auth SDKs are built to work in all ",(0,n.jsx)(t.a,{href:"/troubleshooting/supported-browsers",children:"major browsers and devices"}),". Make sure you have tested your login\nflow in all major browsers and devices. If you're facing any issues with any particular browser or device, please make sure they're compatible with\nthe Web3Auth SDKs."]}),"\n",(0,n.jsx)(t.h3,{id:"8-upgrade-your-web3auth-plan",children:"8. Upgrade your Web3Auth Plan"}),"\n",(0,n.jsxs)(t.p,{children:["Finally, make sure you're on the correct ",(0,n.jsx)(t.a,{href:"https://web3auth.io/pricing.html",children:"Web3Auth Plan"})," according to the features you're looking to use in the\nproduction environment. Additionally make sure to add a credit card in the Web3Auth Dashboard so that your services are not stopped once the MAW cap\nhas reached."]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>s,a:()=>a});var n=i(67294);const o={},r=n.createContext(o);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);