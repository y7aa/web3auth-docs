"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[3360],{95189:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>m,default:()=>v,frontMatter:()=>p,metadata:()=>x,toc:()=>j});var i=t(85893),r=t(11151),a=t(48979),s=t(98229),o=t(43513),l=t(51636),c=t(68090),d=t(30831),h=t(85162),u=t(74866);const p={title:"Using Web3Auth React Native SDK",image:"content-hub/guides/banners/react-native.png",description:"Learn how to use Web3Auth Plug and Play React Native SDK in your React Native app",type:"guide",tags:["mobile","react-native","android","ios","whitelabel","custom authentication","dapp share"],date:"December 16, 2022",author:"Web3Auth Team",order:12,communityPortalTopicId:62},m=void 0,x={type:"mdx",permalink:"/docs/content-hub/guides/react-native",source:"@site/src/pages/content-hub/guides/react-native.mdx",title:"Using Web3Auth React Native SDK",description:"Learn how to use Web3Auth Plug and Play React Native SDK in your React Native app",frontMatter:{title:"Using Web3Auth React Native SDK",image:"content-hub/guides/banners/react-native.png",description:"Learn how to use Web3Auth Plug and Play React Native SDK in your React Native app",type:"guide",tags:["mobile","react-native","android","ios","whitelabel","custom authentication","dapp share"],date:"December 16, 2022",author:"Web3Auth Team",order:12,communityPortalTopicId:62},unlisted:!1},g={},j=[{value:"Quick Start",id:"quick-start",level:2},{value:"How it works?",id:"how-it-works",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Setup your Web3Auth Dashboard",id:"setup-your-web3auth-dashboard",level:3},{value:"Configure Deep Link",id:"configure-deep-link",level:3},{value:"Using the Web3Auth SDK",id:"using-the-web3auth-sdk",level:2},{value:"Installation",id:"installation",level:3},{value:"<code>@web3auth/react-native-sdk</code>",id:"web3authreact-native-sdk",level:5},{value:"Adding a Web Browser Module",id:"adding-a-web-browser-module",level:3},{value:"<code>@toruslabs/react-native-web-browser</code>",id:"toruslabsreact-native-web-browser",level:5},{value:"Adding an <code>EncryptedStorage</code> Module",id:"adding-an-encryptedstorage-module",level:3},{value:"Initialization",id:"initialization",level:3},{value:"Importing <code>Web3Auth</code>",id:"importing-web3auth",level:4},{value:"Importing a <code>WebBrowser</code> implementation",id:"importing-a-webbrowser-implementation",level:4},{value:"Importing a <code>EncryptedStorage</code> implementation",id:"importing-a-encryptedstorage-implementation",level:4},{value:"Instantiating Web3Auth",id:"instantiating-web3auth",level:4},{value:"Authentication",id:"authentication",level:3},{value:"Logging in",id:"logging-in",level:4},{value:"Get the User Profile",id:"get-the-user-profile",level:3},{value:"Sample userInfo",id:"sample-userinfo",level:4},{value:"Logout",id:"logout",level:3},{value:"Interacting with the Blockchain",id:"interacting-with-the-blockchain",level:2},{value:"Example code",id:"example-code",level:2},{value:"Questions?",id:"questions",level:2}];function b(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.Z,{title:"Using Web3Auth React Native SDK",description:"Learn how to use Web3Auth Plug and Play React Native SDK in your React Native app",image:"https://web3auth.io/docs/content-hub/guides/banners/react-native.png",slug:"/content-hub/guides/react-native"}),"\n",(0,i.jsx)(n.p,{children:"This guide will cover the basics of how to use the Web3Auth React Native SDK in your React Native application."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Live Demo:"})," ",(0,i.jsx)(n.a,{href:"https://w3a.link/react-native-example",children:"Android"})," ",(0,i.jsx)(n.a,{href:"https://w3a.link/react-native-ios-example",children:"iOS"})]}),"\n",(0,i.jsxs)(n.p,{children:["Repository: ",(0,i.jsx)(n.a,{href:"https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/react-native/rn-bare-quick-start",children:"https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/react-native/rn-bare-quick-start"})]}),"\n",(0,i.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx degit Web3Auth/web3auth-pnp-examples/react-native/rn-bare-example w3a-rn-bare-demo && cd w3a-rn-bare-demo && npm install\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# For Android\nnpm run android\n# For iOS\ncd ios && pod install && cd .. && npm run ios\n"})}),"\n",(0,i.jsx)(n.h2,{id:"how-it-works",children:"How it works?"}),"\n",(0,i.jsx)(n.p,{children:"When integrating Web3Auth React Native SDK with Social Login the flow looks something like this:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Web3Auth Core - Social Login Flow",src:t(44071).Z+"",width:"1846",height:"1202"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When a user logs in with ",(0,i.jsx)(n.code,{children:"Google"}),", Google sends a JWT ",(0,i.jsx)(n.code,{children:"id_token"})," to the app. This JWT token is sent to the Web3Auth SDK's login function."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Finally, on successful validation of the JWT token, Web3Auth SDK will generate a private key for the user, in a self-custodial way, resulting in\neasy onboarding for your user to the application."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(l.ZP,{}),"\n",(0,i.jsx)(s.ZP,{}),"\n",(0,i.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsx)(n.h3,{id:"setup-your-web3auth-dashboard",children:"Setup your Web3Auth Dashboard"}),"\n",(0,i.jsx)(o.ZP,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Add ",(0,i.jsx)(n.code,{children:"{YOUR_APP_SCHEME}://auth"})," in the ",(0,i.jsx)(n.strong,{children:"Whitelist URL"})," field of the Web3Auth Dashboard."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"configure-deep-link",children:"Configure Deep Link"}),"\n",(0,i.jsxs)(u.Z,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],children:[(0,i.jsx)(h.Z,{value:"android",children:(0,i.jsx)(a.ZP,{})}),(0,i.jsxs)(h.Z,{value:"ios",children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Make sure that the minimum SDK compile version in ",(0,i.jsx)(n.code,{children:"Podfile"})," is 14 or more."]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Podfile",metastring:'title="ios/Podfile"',children:"platform :ios, '14'\n"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Install the Cocoa Pods within your project directory."}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"cd ios && pod install && cd ..\n"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["In iOS, you don't need to add ",(0,i.jsx)(n.code,{children:"redirectUrl"})," as an iOS Custom URL Scheme, however, you may add it to your ",(0,i.jsx)(n.code,{children:"Info.plist"}),", but it is not required. Make\nsure your ",(0,i.jsx)(n.code,{children:"redirectUrl"})," is registered in the ",(0,i.jsx)(n.a,{href:"https://dashboard.web3auth.io",children:"Web3Auth Developer Dashboard"}),"."]}),"\n"]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"using-the-web3auth-sdk",children:"Using the Web3Auth SDK"}),"\n",(0,i.jsxs)(n.p,{children:["To use the Web3Auth SDK, you need to add the dependency of the respective platform SDK of Web3Auth to your project. To know more about the available\nSDKs, please have a look at this ",(0,i.jsx)(n.a,{href:"/sdk",children:"documentation page"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For this guide, we will be talking through the ",(0,i.jsx)(n.a,{href:"/sdk/pnp/react-native",children:"Web3Auth React Native SDK"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.h5,{id:"web3authreact-native-sdk",children:(0,i.jsx)(n.a,{href:"https://github.com/web3auth/web3auth-react-native-sdk",children:(0,i.jsx)(n.code,{children:"@web3auth/react-native-sdk"})})}),"\n",(0,i.jsxs)(u.Z,{groupId:"npm2yarn",children:[(0,i.jsx)(h.Z,{value:"npm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install --save @web3auth/react-native-sdk\n"})})}),(0,i.jsx)(h.Z,{value:"yarn",label:"Yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn add @web3auth/react-native-sdk\n"})})}),(0,i.jsx)(h.Z,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm add @web3auth/react-native-sdk\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"adding-a-web-browser-module",children:"Adding a Web Browser Module"}),"\n",(0,i.jsxs)(n.p,{children:["We will also require a ",(0,i.jsx)(n.code,{children:"WebBrowser"})," implementation to allow our JS-based SDK to interact with the native APIs, and different extra installation steps\ndepending on whether you are using the bare workflow or managed workflow. Since we're using the SDK with a bare workflow React Native app, you have to\ninstall a ",(0,i.jsx)(n.code,{children:"WebBrowser"})," implementation made by us as a port from the Expo Web Browser Module."]}),"\n",(0,i.jsx)(n.h5,{id:"toruslabsreact-native-web-browser",children:(0,i.jsx)(n.a,{href:"https://github.com/torusresearch/react-native-web-browser",children:(0,i.jsx)(n.code,{children:"@toruslabs/react-native-web-browser"})})}),"\n",(0,i.jsxs)(u.Z,{groupId:"npm2yarn",children:[(0,i.jsx)(h.Z,{value:"npm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install --save @toruslabs/react-native-web-browser\n"})})}),(0,i.jsx)(h.Z,{value:"yarn",label:"Yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn add @toruslabs/react-native-web-browser\n"})})}),(0,i.jsx)(h.Z,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm add @toruslabs/react-native-web-browser\n"})})})]}),"\n",(0,i.jsxs)(n.h3,{id:"adding-an-encryptedstorage-module",children:["Adding an ",(0,i.jsx)(n.code,{children:"EncryptedStorage"})," Module"]}),"\n",(0,i.jsxs)(n.p,{children:["We will also require an ",(0,i.jsx)(n.code,{children:"EncryptedStorage"})," implementation to allow for session management without storing the private key on the device."]}),"\n",(0,i.jsxs)(u.Z,{groupId:"npm2yarn",children:[(0,i.jsx)(h.Z,{value:"npm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install --save react-native-encrypted-storage\n"})})}),(0,i.jsx)(h.Z,{value:"yarn",label:"Yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn add react-native-encrypted-storage\n"})})}),(0,i.jsx)(h.Z,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm add react-native-encrypted-storage\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"initialization",children:"Initialization"}),"\n",(0,i.jsx)(n.p,{children:"After Installation, the next step to use Web3Auth is to Initialize the SDK. The Initialization is a two-step process,"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#importing-required-packages",children:"Importing Required Packages"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#instantiating-web3auth",children:"Instantiating Web3Auth"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Please note that these are the most critical steps where you need to pass on different parameters according to the preference of your project.\nAdditionally, Whitelabeling and Custom Authentication have to be configured within this step, if you wish to customize your Web3Auth Instance."}),"\n",(0,i.jsxs)(n.h4,{id:"importing-web3auth",children:["Importing ",(0,i.jsx)(n.code,{children:"Web3Auth"})]}),"\n",(0,i.jsx)(n.p,{children:"You may also import additional types from the SDK to help in the development process."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'import Web3Auth, { LOGIN_PROVIDER, OPENLOGIN_NETWORK } from "@web3auth/react-native-sdk";\n'})}),"\n",(0,i.jsxs)(n.h4,{id:"importing-a-webbrowser-implementation",children:["Importing a ",(0,i.jsx)(n.code,{children:"WebBrowser"})," implementation"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'import * as WebBrowser from "@toruslabs/react-native-web-browser";\n'})}),"\n",(0,i.jsxs)(n.h4,{id:"importing-a-encryptedstorage-implementation",children:["Importing a ",(0,i.jsx)(n.code,{children:"EncryptedStorage"})," implementation"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'import EncryptedStorage from "react-native-encrypted-storage";\n'})}),"\n",(0,i.jsx)(n.h4,{id:"instantiating-web3auth",children:"Instantiating Web3Auth"}),"\n",(0,i.jsx)(n.p,{children:"It's time to create an instance of Web3Auth in the project."}),"\n",(0,i.jsxs)(n.p,{children:["We need ",(0,i.jsx)(n.code,{children:"clientId"})," and target Web3Auth ",(0,i.jsx)(n.code,{children:"network"})," to initialize the ",(0,i.jsx)(n.code,{children:"web3auth"})," object."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["You can get your ",(0,i.jsx)(n.code,{children:"clientId"})," from registering (above) on the Developer Dashboard."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"network"})," signifies the network on which the deployed Web3Auth nodes are running. For testing purposes, we have a ",(0,i.jsx)(n.code,{children:"Sapphire Devnet"})," network. For\nproduction usage, you can use the ",(0,i.jsx)(n.code,{children:"Sapphire Mainnet"})," network."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"const web3auth = new Web3Auth(WebBrowser, EncryptedStorage, {\n  clientId,\n  network: OPENLOGIN_NETWORK.SAPPHIRE_MAINNET, // SAPPHIRE_MAINNET or SAPPHIRE_DEVNET\n});\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"SDK Reference",type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/sdk/pnp/react-native/initialize",children:"Instantiating Web3Auth"}),"."]}),"\n"]})}),"\n",(0,i.jsx)(n.h3,{id:"authentication",children:"Authentication"}),"\n",(0,i.jsx)(n.h4,{id:"logging-in",children:"Logging in"}),"\n",(0,i.jsxs)(n.p,{children:["Once initialized, you can use the ",(0,i.jsx)(n.code,{children:"login"})," function of ",(0,i.jsx)(n.code,{children:"web3auth"})," to navigate the user to the login process. For each login method, you have to select\nthe ",(0,i.jsx)(n.code,{children:"loginProvider"})," such as ",(0,i.jsx)(n.code,{children:"google"}),", ",(0,i.jsx)(n.code,{children:"facebook"}),", ",(0,i.jsx)(n.code,{children:"twitch"}),", ",(0,i.jsx)(n.code,{children:"jwt"}),", ",(0,i.jsx)(n.code,{children:"email_passwordless"})," etc."]}),"\n",(0,i.jsxs)(n.admonition,{title:"JWT",type:"info",children:[(0,i.jsxs)(n.p,{children:["If you are using custom authentication through ",(0,i.jsx)(n.strong,{children:"Auth0 or Custom JWT"}),", you have to use the ",(0,i.jsx)(n.code,{children:"JWT"})," login provider."]}),(0,i.jsxs)(n.p,{children:["Additionally, in ",(0,i.jsx)(n.code,{children:"extraLoginOptions"})," you have to provide the details required by that specific method as mentioned here."]})]}),"\n",(0,i.jsxs)(n.p,{children:["Once a user logs in, the user can access the key by ",(0,i.jsx)(n.code,{children:"web3auth.privKey()"}),". For EVM Blockchains, the ",(0,i.jsx)(n.code,{children:"secp256k1"})," private key is used to sign\ntransactions. We can get an ",(0,i.jsx)(n.code,{children:"ed25519"})," compatible private key for other blockchains using ",(0,i.jsx)(n.code,{children:"web3auth.ed25519Key()"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'await web3auth.login({\n  redirectUrl: resolvedRedirectUrl,\n  mfaLevel: "default", // Pass on the MFA level of your choice: default, optional, mandatory, none\n  loginProvider: "google", // Pass on the login provider of your choice: google, facebook, discord, twitch, twitter, github, linkedin, apple, etc.\n});\n'})}),"\n",(0,i.jsx)(n.admonition,{title:"SDK Reference",type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.a,{href:"/sdk/pnp/react-native/usage#login",children:[(0,i.jsx)(n.code,{children:"login()"})," function"]}),"."]}),"\n"]})}),"\n",(0,i.jsxs)(n.p,{children:["If you wish you ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/sdk/pnp/react-native/mfa",children:"add Multi Factor Authentication"})}),", ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/sdk/pnp/react-native/dapp-share",children:"use dApp Share"})})," or\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/sdk/pnp/react-native/usage#selecting-curve",children:"select Curve"})})," for your React Native application, read the linked documentation."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/sdk/pnp/react-native/mfa",children:"Multi Factor Authentication"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/sdk/pnp/react-native/dapp-share",children:"Using dApp Share"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/sdk/pnp/react-native/usage#selecting-curve",children:"Selecting Curve"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"get-the-user-profile",children:"Get the User Profile"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"// Assuming the user is logged in, get the user profile from the web3auth object\nvar userInfo = web3auth.userInfo();\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Using the ",(0,i.jsx)(n.code,{children:"web3Auth.login()"})," function, you can get the details of the logged-in user. Please note that these details are not stored anywhere in\nWeb3Auth network."]}),"\n",(0,i.jsx)(n.h4,{id:"sample-userinfo",children:"Sample userInfo"}),"\n",(0,i.jsx)(c.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"logout",children:"Logout"}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.code,{children:"logout"})," function of ",(0,i.jsx)(n.code,{children:"web3auth"})," to log the user out."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"web3auth.logout();\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"SDK Reference",type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.a,{href:"/sdk/pnp/react-native/usage#logout",children:[(0,i.jsx)(n.code,{children:"logout()"})," function"]}),"."]}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"interacting-with-the-blockchain",children:"Interacting with the Blockchain"}),"\n",(0,i.jsxs)(n.p,{children:["Once a user logs in, the user can access the private key by ",(0,i.jsx)(n.code,{children:"web3auth.privKey()"}),". For EVM Blockchains, the ",(0,i.jsx)(n.code,{children:"secp256k1"})," private key is used to sign\ntransactions. We can get an ",(0,i.jsx)(n.code,{children:"ed25519"})," compatible private key for other blockchains using ",(0,i.jsx)(n.code,{children:"web3auth.ed25519Key()"}),". Similar to how we're using this\nprivate key in the ",(0,i.jsx)(n.code,{children:"ethers.js"})," library in this example, you can connect to any other blockchain of your choice."]}),"\n",(0,i.jsx)(n.admonition,{title:"connect any blockchain",type:"info",children:(0,i.jsxs)(n.p,{children:["Please go through the ",(0,i.jsx)(n.a,{href:"/connect-blockchain/evm/ethereum/react-native",children:"Connect Blockchain"})," Documentation, which contains all the details of the\nEVM-based blockchain you have selected here."]})}),"\n",(0,i.jsx)(n.h2,{id:"example-code",children:"Example code"}),"\n",(0,i.jsxs)(n.p,{children:["The code for the application we developed in this guide can be found in the\n",(0,i.jsx)(n.a,{href:"https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/react-native/rn-bare-quick-start",children:"Web3Auth React Native Example"}),". Check it out and try\nrunning it locally yourself!"]}),"\n",(0,i.jsx)(n.h2,{id:"questions",children:"Questions?"}),"\n",(0,i.jsxs)(n.p,{children:["Ask us on ",(0,i.jsx)(n.a,{href:"https://web3auth.io/community",children:"Web3Auth's Community Support Portal"})]})]})}function v(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(b,{...e})}):b(e)}},48979:(e,n,t)=>{t.d(n,{ZP:()=>s});var i=t(85893),r=t(11151);function a(e){const n={a:"a",code:"code",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Make sure that the minimum SDK compile version in ",(0,i.jsx)(n.code,{children:"build.gradle"})," is 31 or more."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-gradle",metastring:'title="android/build.gradle"',children:'buildToolsVersion = "31.0.0"\nminSdkVersion = 21\n# highlight-next-line\ncompileSdkVersion = 31\n# highlight-next-line\ntargetSdkVersion = 31\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Add the intent filter with the ",(0,i.jsx)(n.code,{children:"scheme"})," defined in your ",(0,i.jsx)(n.code,{children:"AndroidManifest.xml"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",metastring:'title="android/app/src/main/AndroidManifest.xml"',children:'<intent-filter>\n  <action android:name="android.intent.action.VIEW" />\n  <category android:name="android.intent.category.DEFAULT" />\n  <category android:name="android.intent.category.BROWSABLE" />\n  # replace with your own scheme\n  # highlight-next-line\n  <data android:scheme="web3authrnexample" />\n</intent-filter>\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["SDK version 31 requires you to explicitly define ",(0,i.jsx)(n.code,{children:'android:exported="true"'})," in ",(0,i.jsx)(n.code,{children:"AndroidManifest.xml"}),", and check whether it is correctly present or\nnot."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",metastring:'title="android/app/src/main/AndroidManifest.xml"',children:'<activity\n  android:name=".MainActivity"\n  android:label="@string/app_name"\n  android:configChanges="keyboard|keyboardHidden|orientation|screenSize|uiMode"\n  android:launchMode="singleTask"\n  android:windowSoftInputMode="adjustResize"\n# highlight-next-line\n  android:exported="true">\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Your ",(0,i.jsx)(n.code,{children:"redirectUrl"})," is your defined scheme following some identifier or your choice. For example, if your scheme is ",(0,i.jsx)(n.code,{children:"web3authrnexample"}),", you can\ndefine your ",(0,i.jsx)(n.code,{children:"redirectUrl"})," as ",(0,i.jsx)(n.code,{children:"web3authrnexample://openlogin"}),". Make sure you register this ",(0,i.jsx)(n.code,{children:"redirectUrl"})," in the\n",(0,i.jsx)(n.a,{href:"https://dashboard.web3auth.io",children:"Web3Auth Developer Dashboard"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="App.js"',children:'const scheme = "web3authrnbareexample"; // Or your desired app redirection scheme\nconst resolvedRedirectUrl = `${scheme}://openlogin`;\n'})})]})}function s(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},98229:(e,n,t)=>{t.d(n,{ZP:()=>s});var i=t(85893),r=t(11151);function a(e){const n={li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"React Native Release 0.71 and above (for Bare React Native Workflow)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"iOS Platform Target Version 14 and above"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Android Target SDK Version 31 and above"}),"\n"]}),"\n"]})}function s(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},43513:(e,n,t)=>{t.d(n,{ZP:()=>s});var i=t(85893),r=t(11151);function a(e){const n={a:"a",code:"code",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create a Project from the ",(0,i.jsx)(n.strong,{children:"Project"})," Section of the ",(0,i.jsx)(n.a,{href:"https://dashboard.web3auth.io/",children:"Web3Auth Developer Dashboard"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Plug n Play Project Creation on Web3Auth Dashboard",src:t(53558).Z+"",width:"1840",height:"1191"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Enter your desired ",(0,i.jsx)(n.strong,{children:"Project name"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select the ",(0,i.jsx)(n.strong,{children:"Product"})," you want to use. For this guide, we'll be using the ",(0,i.jsx)(n.strong,{children:"Plug n Play"})," product."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select the ",(0,i.jsx)(n.strong,{children:"Platform type"})," you want to use. For this guide, we'll be using the ",(0,i.jsx)(n.strong,{children:"Web Application"})," as the platform."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select the Web3Auth Network as ",(0,i.jsx)(n.code,{children:"Sapphire Devnet"}),". We recommend creating a project in the ",(0,i.jsx)(n.code,{children:"sapphire_devnet"})," network during development. While\nmoving to a production environment, make sure to convert your project to ",(0,i.jsx)(n.code,{children:"sapphire_mainnet"})," or any of the legacy mainnet network ",(0,i.jsx)(n.code,{children:"mainnet"}),",\n",(0,i.jsx)(n.code,{children:"aqua"}),", or ",(0,i.jsx)(n.code,{children:"cyan"})," network. Otherwise, you'll end up losing users and keys."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select the blockchain(s) you'll be building this project on. For interoperability with Torus Wallets, you have the option of allowing the user's\nprivate key to be used in other applications using Torus Wallets (",(0,i.jsx)(n.a,{href:"https://app.tor.us",children:"EVM"}),", ",(0,i.jsx)(n.a,{href:"https://solana.tor.us",children:"Solana"}),",\n",(0,i.jsx)(n.a,{href:"https://xrpl.tor.us",children:"XRPL"})," & ",(0,i.jsx)(n.a,{href:"https://casper.tor.us",children:"Casper"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Finally, once you create the project, you have the option to whitelist your URLs for the project. ",(0,i.jsx)(n.strong,{children:"Please whitelist the domains where your\nproject will be hosted."})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Plug n Play Project - Whitelist",src:t(41991).Z+"",width:"1840",height:"1191"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]})}function s(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},51636:(e,n,t)=>{t.d(n,{ZP:()=>s});var i=t(85893),r=t(11151);function a(e){const n={a:"a",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"For Web Apps: A basic knowledge of JavaScript is required to use Web3Auth SDK."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For Mobile Apps: For the Web3Auth Mobile SDKs, you have a choice between iOS, Android, React Native & Flutter. Please refer to the\n",(0,i.jsx)(n.a,{href:"/sdk",children:"Web3Auth SDK Reference"})," for more information."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create a Web3Auth account on the ",(0,i.jsx)(n.a,{href:"https://dashboard.web3auth.io",children:"Web3Auth Dashboard"})]}),"\n"]}),"\n"]})}function s(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},68090:(e,n,t)=>{t.d(n,{ZP:()=>s});var i=t(85893),r=t(11151);function a(e){const n={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "aggregateVerifier": "tkey-google",\n  "email": "john@gmail.com",\n  "name": "John Dash",\n  "profileImage": "https://lh3.googleusercontent.com/a/Ajjjsdsmdjmnm...",\n  "typeOfLogin": "google",\n  "verifier": "torus",\n  "verifierId": "john@gmail.com",\n  "dappShare": "<24 words seed phrase>", // will be sent only incase of custom verifiers\n  "idToken": "<jwtToken issued by Web3Auth>",\n  "oAuthIdToken": "<jwtToken issued by OAuth Provider>", // will be sent only incase of custom verifiers\n  "oAuthAccessToken": "<accessToken issued by OAuth Provider>" // will be sent only incase of custom verifiers\n}\n'})})}function s(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var i=t(36905);const r={tabItem:"tabItem_Ymn6"};var a=t(85893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var i=t(67294),r=t(36905),a=t(12466),s=t(16550),o=t(20469),l=t(91980),c=t(67392),d=t(50012);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(a),(0,i.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=u(e),[s,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:a}))),[c,h]=m({queryString:t,groupId:r}),[x,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,d.Nk)(t);return[r,(0,i.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),j=(()=>{const e=c??x;return p({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{j&&l(j)}),[j]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),g(e)}),[h,g,a]),tabValues:a}}var g=t(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function v(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==i&&(c(n),s(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...a,className:(0,r.Z)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function f(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",j.tabList),children:[(0,b.jsx)(v,{...e,...n}),(0,b.jsx)(f,{...e,...n})]})}function y(e){const n=(0,g.Z)();return(0,b.jsx)(w,{...e,children:h(e.children)},String(n))}},30831:(e,n,t)=>{t.d(n,{Z:()=>a});var i=t(35742),r=t(85893);function a(e){const{title:n,description:t,image:a,slug:s,keywords:o}=e;return(0,r.jsxs)(i.Z,{children:[n?(0,r.jsxs)("title",{children:[n," | Web3Auth "]}):(0,r.jsx)("title",{children:"Documentation | Web3Auth"}),t?(0,r.jsx)("meta",{name:"description",content:t}):(0,r.jsx)("meta",{name:"description",content:"Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."}),o?o.length>0&&(0,r.jsx)("meta",{name:"keywords",content:`web3auth, blockchain, solana, ethereum, multi party computation, ${o.join(", ")}`}):(0,r.jsx)("meta",{name:"keywords",content:"web3auth, blockchain, web3, web3.js, ethers.js, solana, ethereum, passwordless, passwordless magic link, multi party computation, tkey, torus, web3 auth, auth"}),(0,r.jsx)("meta",{property:"og:site_name",content:"Web3Auth"}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),n?(0,r.jsx)("meta",{property:"og:title",content:n}):(0,r.jsx)("meta",{property:"og:title",content:"Documentation | Web3Auth"}),t?(0,r.jsx)("meta",{property:"og:description",content:t}):(0,r.jsx)("meta",{property:"og:description",content:"Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."}),s?(0,r.jsx)("meta",{property:"og:url",content:`https://web3auth.io/docs${s}`}):(0,r.jsx)("meta",{property:"og:url",content:"https://web3auth.io/docs"}),a?(0,r.jsx)("meta",{property:"og:image",content:a}):(0,r.jsx)("meta",{property:"og:image",content:"http://web3auth.io/docs/images/docs-meta-cards/documentation-card.png"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:site",content:"@Web3Auth"}),(0,r.jsx)("meta",{name:"twitter:creator",content:"@Web3Auth"}),a?(0,r.jsx)("meta",{name:"twitter:image",content:a}):(0,r.jsx)("meta",{name:"twitter:image",content:"http://web3auth.io/docs/images/docs-meta-cards/documentation-card.png"}),n?(0,r.jsx)("meta",{itemProp:"name",content:n}):(0,r.jsx)("meta",{itemProp:"name",content:"Documentation | Web3Auth"}),t?(0,r.jsx)("meta",{itemProp:"description",content:t}):(0,r.jsx)("meta",{itemProp:"description",content:"Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."}),a?(0,r.jsx)("meta",{itemProp:"image",content:a}):(0,r.jsx)("meta",{itemProp:"image",content:"http://web3auth.io/docs/images/docs-meta-cards/documentation-card.png"}),(0,r.jsx)("meta",{name:"author",content:"Web3Auth"})]})}},53558:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/create-project-name-c9005c16b664f81f25e56e63c9cc503a.png"},41991:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/project-whitelist-ec0210471c902c254ff14a90813adfd3.png"},44071:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/implicit-flow-60e28fe4168e0be7ddd4e4ea18da46f1.svg"},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var i=t(67294);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);