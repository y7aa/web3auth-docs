"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[29164],{80246:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var i=t(85893),l=t(11151);const a=t.p+"assets/images/android-deeplink-678100d75bd2efa1d8401af75670d15e.png",r=t.p+"assets/images/ios-extraplist-52f44aa639c422a2222f9281987aba3b.png",s={title:"Installing PnP Unreal Engine SDK",sidebar_label:"Install",displayed_sidebar:"sdk",description:"Installing Web3Auth Plug and Play Unreal Engine SDK | Documentation - Web3Auth"},d=void 0,o={id:"sdk/pnp/unreal/install",title:"Installing PnP Unreal Engine SDK",description:"Installing Web3Auth Plug and Play Unreal Engine SDK | Documentation - Web3Auth",source:"@site/docs/sdk/pnp/unreal/install.mdx",sourceDirName:"sdk/pnp/unreal",slug:"/sdk/pnp/unreal/install",permalink:"/docs/sdk/pnp/unreal/install",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/sdk/pnp/unreal/install.mdx",tags:[],version:"current",frontMatter:{title:"Installing PnP Unreal Engine SDK",sidebar_label:"Install",displayed_sidebar:"sdk",description:"Installing Web3Auth Plug and Play Unreal Engine SDK | Documentation - Web3Auth"},sidebar:"sdk",previous:{title:"Web3Auth PnP Unreal Engine SDK",permalink:"/docs/sdk/pnp/unreal/"},next:{title:"Initialize",permalink:"/docs/sdk/pnp/unreal/initialize"}},c={},h=[{value:"Installation",id:"installation",level:2},{value:"Manual Installation",id:"manual-installation",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Configure a Plug n Play project",id:"configure-a-plug-n-play-project",level:3},{value:"Configure Deep Link for Android",id:"configure-deep-link-for-android",level:3},{value:"Configure Deep Link for iOS",id:"configure-deep-link-for-ios",level:3}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["Follow these instructions to install the ",(0,i.jsx)(n.code,{children:"web3auth-unreal-sdk"})," plugin:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Close your existing Unreal Engine app."}),"\n",(0,i.jsx)(n.li,{children:"Create a directory in your app root called Plugins."}),"\n",(0,i.jsx)(n.li,{children:"Clone with"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/Web3Auth/web3auth-unreal-sdk/tree/main/Plugins/Web3AuthSDK ./Plugins/Web3AuthSDK\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Open UE5 Editor, navigator to ",(0,i.jsx)(n.code,{children:"Menu"})," \u2192 ",(0,i.jsx)(n.code,{children:"Edit"})," \u2192 ",(0,i.jsx)(n.code,{children:"Plugins"})," , check the option to enable Web3AuthSDK."]}),"\n",(0,i.jsx)(n.li,{children:"Start your app & it will ask to compile the plugin. Proceed with that."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"manual-installation",children:"Manual Installation"}),"\n",(0,i.jsxs)(n.p,{children:["Download the ",(0,i.jsx)(n.a,{href:"https://github.com/Web3Auth/web3auth-unreal-sdk/releases",children:"Unreal Package"})," from our latest release and import the package file into your\nexisting Unreal Engine project."]}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.h3,{id:"configure-a-plug-n-play-project",children:"Configure a Plug n Play project"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Go to ",(0,i.jsx)(n.a,{href:"https://dashboard.web3auth.io/",children:"Developer Dashboard"}),", create or select an Web3Auth project:"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add ",(0,i.jsx)(n.code,{children:"{{SCHEMA}}://{YOUR_APP_PACKAGE_NAME}"})," to ",(0,i.jsx)(n.strong,{children:"Whitelist URLs"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Copy the ",(0,i.jsx)(n.code,{children:"Client ID"})," for usage later."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"configure-deep-link-for-android",children:"Configure Deep Link for Android"}),"\n",(0,i.jsxs)(n.p,{children:["To setup Android sdk and ndk for unreal editor. Please\n",(0,i.jsx)(n.a,{href:"https://docs.unrealengine.com/5.0/en-US/how-to-set-up-android-sdk-and-ndk-for-your-unreal-engine-development-environment",children:"see the unreal documentation"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["To add redirect URI into your Android app, open the ",(0,i.jsx)(n.code,{children:"<Project-Path>/Plugins/Web3AuthSDK/Source/Web3AuthSDK_Android.xml"})," file."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Find the ",(0,i.jsx)(n.code,{children:"<androidManifestUpdates>"})," tag and inside that, will be a ",(0,i.jsx)(n.code,{children:"<data>"})," tag element. Replace the exisitng redirect URI with one that you have\nregistered on your Web3Auth Dashboard."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("img",{src:a,style:{alignSelf:"center",maxWidth:"100%"},alt:"android deep link"}),"\n",(0,i.jsx)(n.h3,{id:"configure-deep-link-for-ios",children:"Configure Deep Link for iOS"}),"\n",(0,i.jsxs)(n.p,{children:["To setup iOS for unreal editor. Please\n",(0,i.jsx)(n.a,{href:"https://docs.unrealengine.com/5.0/en-US/setting-up-an-unreal-engine-project-for-ios/",children:"see the unreal documentation"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"To add redirect URI in your iOS configuration, you just have to add the redirect URI schema."}),"\n",(0,i.jsxs)(n.p,{children:["i.e. if ",(0,i.jsx)(n.code,{children:"web3authapp://com.web3auth.Web3AuthUnreal"})," is your registered redirect URI then the schema is ",(0,i.jsx)(n.code,{children:"web3authapp"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Update the following xml object and replace the {schema} with your own redirectURI schema."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"<key>CFBundleURLTypes</key>\n<array>\n\t<dict>\n\t\t<key>CFBundleURLName</key>\n\t\t<string>{schema}</string>\n\t\t<key>CFBundleURLSchemes</key>\n\t\t<array>\n\t\t\t<string>{schema}</string>\n\t\t</array>\n\t</dict>\n</array>\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Paste the above string with updated schema into ",(0,i.jsx)(n.code,{children:"Edit \u2192 Project Settings \u2192 IOS \u2192 Extra Plist Data"})]}),"\n"]}),"\n",(0,i.jsx)("img",{src:r,style:{alignSelf:"center",maxWidth:"100%"},alt:"iOS Extra Plist data"})]})}function p(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var i=t(67294);const l={},a=i.createContext(l);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);