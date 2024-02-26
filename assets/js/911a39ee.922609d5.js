"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[11239],{95250:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=t(85893),i=t(11151),a=t(85162),s=t(74866);const l={title:"Using Core Kit SFA Flutter SDK",sidebar_label:"Usage",displayed_sidebar:"sdk",description:"Web3Auth Core Kit Single Factor Auth Flutter SDK - Usage | Documentation - Web3Auth"},o=void 0,d={id:"sdk/core-kit/sfa-flutter/usage",title:"Using Core Kit SFA Flutter SDK",description:"Web3Auth Core Kit Single Factor Auth Flutter SDK - Usage | Documentation - Web3Auth",source:"@site/docs/sdk/core-kit/sfa-flutter/usage.mdx",sourceDirName:"sdk/core-kit/sfa-flutter",slug:"/sdk/core-kit/sfa-flutter/usage",permalink:"/docs/sdk/core-kit/sfa-flutter/usage",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/sdk/core-kit/sfa-flutter/usage.mdx",tags:[],version:"current",frontMatter:{title:"Using Core Kit SFA Flutter SDK",sidebar_label:"Usage",displayed_sidebar:"sdk",description:"Web3Auth Core Kit Single Factor Auth Flutter SDK - Usage | Documentation - Web3Auth"},sidebar:"sdk",previous:{title:"Authentication",permalink:"/docs/sdk/core-kit/sfa-flutter/authentication"}},c={},u=[{value:"<code>getKey()</code>",id:"getkey",level:2},{value:"Returns",id:"returns",level:4},{value:"<code>LoginParams</code>",id:"loginparams",level:4},{value:"<code>getAggregateKey()</code>",id:"getaggregatekey",level:2},{value:"Returns",id:"returns-1",level:4},{value:"<code>LoginParams</code>",id:"loginparams-1",level:4},{value:"Session Management",id:"session-management",level:2},{value:"Example",id:"example",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"After successfully installing and initializing SingleFactorAuth, you can use it to authenticate your users and obtain their private and public keys."}),"\n",(0,r.jsx)(n.p,{children:"The SingleFactorAuth instance natively provides the following functions:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"getKey(LoginParams)"})," - Returns the private key using the ",(0,r.jsx)(n.code,{children:"verifier"}),", ",(0,r.jsx)(n.code,{children:"verifierId"})," & ",(0,r.jsx)(n.code,{children:"idToken"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"getAggregateKey(LoginParams)"})," - Returns the aggregate private key using the ",(0,r.jsx)(n.code,{children:"verifier"}),", ",(0,r.jsx)(n.code,{children:"verifierId"})," & ",(0,r.jsx)(n.code,{children:"idToken"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"getkey",children:(0,r.jsx)(n.code,{children:"getKey()"})}),"\n",(0,r.jsxs)(n.p,{children:["To obtain a user's private key using the Web3Auth SFA Flutter SDK, you can call the ",(0,r.jsx)(n.code,{children:"getKey()"})," function."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Variable"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Mandatory"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"LoginParams"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"object"})}),(0,r.jsx)(n.td,{children:"LoginParams Options Parameters"}),(0,r.jsx)(n.td,{children:"Yes"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"Future<TorusKey> getKey(LoginParams loginParams)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["On successful call, the ",(0,r.jsx)(n.code,{children:"getKey()"})," function returns a ",(0,r.jsx)(n.code,{children:"Future<TorusKey>"})," instance."]}),"\n",(0,r.jsx)(n.h4,{id:"loginparams",children:(0,r.jsx)(n.code,{children:"LoginParams"})}),"\n",(0,r.jsxs)(s.Z,{defaultValue:"table",values:[{label:"Table",value:"table"},{label:"Class",value:"class"}],children:[(0,r.jsx)(a.Z,{value:"table",children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Mandatory"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"verifier"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"The verifier string obtained from the Web3Auth Dashboard"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"verifierId"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"The verifierId of the user"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"idToken"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"The idToken of the user"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"aggregateVerifier"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"The aggregate verifier string obtained from the Web3Auth Dashboard"})]})]})]})}),(0,r.jsx)(a.Z,{value:"class",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"class LoginParams {\n  final String verifier;\n  final String verifierId;\n  final String idToken;\n  final String? aggregateVerifier;\n\n  LoginParams({\n    required this.verifier,\n    required this.verifierId,\n    required this.idToken,\n    this.aggregateVerifier,\n  });\n\n  Map<String, dynamic> toJson() {\n    return {\n      'verifier': verifier,\n      'verifierId': verifierId,\n      'idToken': idToken,\n      'aggregateVerifier': aggregateVerifier,\n    };\n  }\n}\n\nFuture<TorusKey> getKey(LoginParams loginParams) async {\n  try {\n    Map<String, dynamic> loginParamsJson = loginParams.toJson();\n    loginParamsJson.removeWhere((key, value) => value == null);\n    final String torusKeyJson = await _channel.invokeMethod(\n      'getTorusKey',\n      jsonEncode(loginParams),\n    );\n\n    return torusKeyFromJson(torusKeyJson);\n  } on PlatformException catch (e) {\n    throw _hanldePlatformException(e);\n  }\n}\n"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",metastring:'title="Usage"',children:"Future<TorusKey> getKey() {\n  return _singleFactorAuthFlutterPlugin.getKey(LoginParams(\n    verifier: 'YOUR_VERIFIER_NAME',\n    verifierId: 'YOUR_VERIFIER_ID',\n    idToken: 'YOUR_ID_TOKEN',\n    ),\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"getaggregatekey",children:(0,r.jsx)(n.code,{children:"getAggregateKey()"})}),"\n",(0,r.jsxs)(n.p,{children:["To obtain a user's Torus key using the Web3Auth SFA Flutter SDK, you can call the ",(0,r.jsx)(n.code,{children:"getAggregateKey()"})," function."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Variable"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Mandatory"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"LoginParams"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"object"})}),(0,r.jsx)(n.td,{children:"LoginParams Options Parameters"}),(0,r.jsx)(n.td,{children:"Yes"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"Future<TorusKey> getAggregateKey(LoginParams loginParams)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["On successful call, the ",(0,r.jsx)(n.code,{children:"getAggregateKey()"})," function returns a ",(0,r.jsx)(n.code,{children:"Future<TorusKey>"})," instance."]}),"\n",(0,r.jsx)(n.h4,{id:"loginparams-1",children:(0,r.jsx)(n.code,{children:"LoginParams"})}),"\n",(0,r.jsxs)(s.Z,{defaultValue:"table",values:[{label:"Table",value:"table"},{label:"Class",value:"class"}],children:[(0,r.jsx)(a.Z,{value:"table",children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Mandatory"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"verifier"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"The verifier string obtained from the Web3Auth Dashboard"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"verifierId"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"The verifierId of the user"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"idToken"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"The idToken of the user"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"aggregateVerifier"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"The aggregate verifier string obtained from the Web3Auth Dashboard"})]})]})]})}),(0,r.jsx)(a.Z,{value:"class",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"class LoginParams {\n  final String verifier;\n  final String verifierId;\n  final String idToken;\n  final String? aggregateVerifier;\n\n  LoginParams({\n    required this.verifier,\n    required this.verifierId,\n    required this.idToken,\n    this.aggregateVerifier,\n  });\n\n  Map<String, dynamic> toJson() {\n    return {\n      'verifier': verifier,\n      'verifierId': verifierId,\n      'idToken': idToken,\n      'aggregateVerifier': aggregateVerifier,\n    };\n  }\n}\n\nFuture<TorusKey> getAggregateKey(LoginParams loginParams) async {\n  try {\n    Map<String, dynamic> loginParamsJson = loginParams.toJson();\n    loginParamsJson.removeWhere((key, value) => value == null);\n\n    final String torusKeyJson = await _channel.invokeMethod(\n      'getAggregateTorusKey',\n      jsonEncode(loginParams),\n    );\n\n    return torusKeyFromJson(torusKeyJson);\n  } on PlatformException catch (e) {\n    throw _hanldePlatformException(e);\n  }\n}\n"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",metastring:'title="Usage"',children:"Future<TorusKey> getAggregateKey() {\n  return _singleFactorAuthFlutterPlugin.getAggregateKey(LoginParams(\n    verifier: 'YOUR_VERIFIER_NAME',\n    verifierId: 'YOUR_VERIFIER_ID',\n    idToken: 'YOUR_ID_TOKEN',\n    aggregateVerifier: 'YOUR_AGGREGATE_VERIFIER_NAME',\n  ));\n}\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"Note",type:"tip",children:(0,r.jsxs)(n.p,{children:["Web3Auth SFA Flutter SDK only works for users who have ",(0,r.jsx)(n.strong,{children:"not enabled MFA"}),"."]})}),"\n",(0,r.jsx)(n.admonition,{title:"MFA enabled users",type:"danger",children:(0,r.jsx)(n.p,{children:"For MFA enabled users, you'll see an Error message."})}),"\n",(0,r.jsx)(n.h2,{id:"session-management",children:"Session Management"}),"\n",(0,r.jsx)(n.p,{children:"We have included Session Management in this SDK, so calling the initialize function\nto get the TorusKey value without re-logging in the user if a user has an active session will return the TorusKey,\notherwise, it will return null."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"final TorusKey? torusKey = await _singleFactorAuthFlutterPlugin.initialize();\n"})}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"lib/main.dart"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",metastring:'title="main.dart"',children:"import 'dart:async';\nimport 'dart:developer';\nimport 'dart:io';\n\nimport 'package:flutter/material.dart';\nimport 'package:single_factor_auth_flutter/input.dart';\nimport 'package:single_factor_auth_flutter/output.dart';\nimport 'package:single_factor_auth_flutter/single_factor_auth_flutter.dart';\nimport './utils.dart';\n\nvoid main() {\n  runApp(const MyApp());\n}\n\nclass MyApp extends StatefulWidget {\n  const MyApp({super.key});\n\n  @override\n  State<MyApp> createState() => _MyAppState();\n}\n\nclass _MyAppState extends State<MyApp> {\n  final _singleFactorAuthFlutterPlugin = SingleFactAuthFlutter();\n  String _result = '';\n  bool logoutVisible = false;\n  TorusNetwork torusNetwork = TorusNetwork.testnet;\n\n  @override\n  void initState() {\n    super.initState();\n    initSdk();\n  }\n\n  Future<void> initSdk() async {\n    if (Platform.isAndroid) {\n      await init();\n      initialize();\n    } else if (Platform.isIOS) {\n      await init();\n      initialize();\n    } else {}\n  }\n\n  Future<void> init() async {\n    await _singleFactorAuthFlutterPlugin\n        .init(Web3AuthNetwork(network: torusNetwork));\n  }\n\n  Future<void> initialize() async {\n    log(\"initialize() called\");\n    final TorusKey? torusKey =\n        await _singleFactorAuthFlutterPlugin.initialize();\n    if (torusKey != null) {\n      setState(() {\n        _result = \"Private Key : ${torusKey.privateKey}\";\n      });\n    }\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      home: Scaffold(\n        appBar: AppBar(\n          title: const Text('SingleFactorAuthFlutter Example'),\n        ),\n        body: SingleChildScrollView(\n          child: Center(\n              child: Column(\n            mainAxisAlignment: MainAxisAlignment.center,\n            children: [\n              const Padding(\n                padding: EdgeInsets.all(8.0),\n              ),\n              Visibility(\n                child: Column(\n                  children: [\n                    const SizedBox(\n                      height: 50,\n                    ),\n                    const Icon(\n                      Icons.flutter_dash,\n                      size: 80,\n                      color: Color(0xFF1389fd),\n                    ),\n                    const SizedBox(\n                      height: 40,\n                    ),\n                    const Text(\n                      'Web3Auth',\n                      style: TextStyle(\n                          fontWeight: FontWeight.bold,\n                          fontSize: 36,\n                          color: Color(0xFF0364ff)),\n                    ),\n                    const SizedBox(\n                      height: 10,\n                    ),\n                    const Text(\n                      'Welcome to SingleFactorAuthFlutter Demo',\n                      style: TextStyle(fontSize: 14),\n                    ),\n                    const SizedBox(\n                      height: 20,\n                    ),\n                    const Text(\n                      'Get TorusKey',\n                      style: TextStyle(fontSize: 12),\n                    ),\n                    const SizedBox(\n                      height: 20,\n                    ),\n                    ElevatedButton(\n                      onPressed: _getKey(getAggregrateKey),\n                      child: const Text('GetTorusKey'),\n                    ),\n                    ElevatedButton(\n                      onPressed: () => _initialize(),\n                      child: const Text('Get Session Response'),\n                    ),\n                  ],\n                ),\n              ),\n              Padding(\n                padding: const EdgeInsets.all(8.0),\n                child: Text(_result),\n              )\n            ],\n          )),\n        ),\n      ),\n    );\n  }\n\n  VoidCallback _getKey(Future<TorusKey> Function() method) {\n    return () async {\n      try {\n        final TorusKey response = await method();\n        setState(() {\n          _result = \"Private Key : ${response.privateKey}\";\n          log(response.publicAddress);\n        });\n      } on PrivateKeyNotGeneratedException {\n        log(\"Private key not generated\");\n      } on UnKnownException {\n        log(\"Unknown exception occurred\");\n      }\n    };\n  }\n\n  Future<void> _initialize() async {\n    try {\n      final TorusKey? response =\n          await _singleFactorAuthFlutterPlugin.initialize();\n      setState(() {\n        _result = \"Private Key : ${response?.privateKey}\";\n        log(response!.publicAddress);\n      });\n    } on PrivateKeyNotGeneratedException {\n      log(\"Private key not generated\");\n    } on UnKnownException {\n      log(\"Unknown exception occurred\");\n    }\n  }\n\n  Future<TorusKey> getKey() {\n    return _singleFactorAuthFlutterPlugin.getKey(\n      LoginParams(\n        verifier: 'torus-test-health',\n        verifierId: 'hello@tor.us',\n        idToken: Utils().es256Token(\"hello@tor.us\"),\n      ),\n    );\n  }\n\n  Future<TorusKey> getAggregrateKey() {\n    return _singleFactorAuthFlutterPlugin.getAggregateKey(\n      LoginParams(\n        verifier: 'torus-test-health',\n        verifierId: 'hello@tor.us',\n        idToken: Utils().es256Token(\"hello@tor.us\"),\n        aggregateVerifier: 'torus-test-health-aggregate',\n      ),\n    );\n  }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"lib/utils.dart"})}),"\n",(0,r.jsxs)(n.p,{children:["This Dart code will produce a JSON Web Token (JWT) using the ES256 algorithm. You have the option to use your own implementation or follow our\n",(0,r.jsx)(n.a,{href:"/auth-provider-setup/byo-jwt-providers",children:"Bring your own JWT token steps"}),". Alternatively, you may choose to use any\n",(0,r.jsx)(n.a,{href:"/auth-provider-setup/social-providers/",children:"social"}),"/",(0,r.jsx)(n.a,{href:"/auth-provider-setup/federated-identity-providers",children:"federated identity"})," provider that is supported by\nWeb3auth."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",metastring:'title="utils.dart"',children:'import \'package:dart_jsonwebtoken/dart_jsonwebtoken.dart\';\n\nclass Utils {\n  String es256Token(String email) {\n    String token;\n\n    /* Sign */ {\n      // Create a json web token\n      final jwt = JWT({\n        "sub": "email|hello",\n        "aud": "torus-key-test",\n        "exp": DateTime.now().millisecond,\n        "iat": DateTime.now().millisecond,\n        "iss": "torus-key-test",\n        "email": email,\n        "nickname": email.split("@")[0],\n        "name": email,\n        "picture": "",\n        "email_verified": true\n      });\n\n      // Sign it\n      final key = ECPrivateKey("-----BEGIN PRIVATE KEY-----\\n"\n          "MEECAQAwEwYHKoZIzj0CAQYIKoZIzj0DAQcEJzAlAgEBBCCD7oLrcKae+jVZPGx52Cb/lKhdKxpXjl9eGNa1MlY57A=="\n          "\\n-----END PRIVATE KEY-----");\n      token = jwt.sign(key, algorithm: JWTAlgorithm.ES256);\n\n      print(\'Signed token: \\n $token\\n\');\n      return token;\n    }\n  }\n}\n'})})]})}function g(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var r=t(36905);const i={tabItem:"tabItem_Ymn6"};var a=t(85893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(67294),i=t(36905),a=t(12466),s=t(16550),l=t(20469),o=t(91980),d=t(67392),c=t(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,a=h(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[d,u]=x({queryString:t,groupId:i}),[f,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,c.Nk)(t);return[i,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:i}),m=(()=>{const e=d??f;return g({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{m&&o(m)}),[m]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),p(e)}),[u,p,a]),tabValues:a}}var p=t(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(85893);function y(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),i=l[t].value;i!==r&&(d(n),s(i))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:c,...a,className:(0,i.Z)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:i}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function b(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,i.Z)("tabs-container",m.tabList),children:[(0,j.jsx)(y,{...e,...n}),(0,j.jsx)(v,{...e,...n})]})}function k(e){const n=(0,p.Z)();return(0,j.jsx)(b,{...e,children:u(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var r=t(67294);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);