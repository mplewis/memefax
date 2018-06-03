webpackJsonp([1],Array(28).concat([function(t,e,n){"use strict";e.a={name:"app"}},function(t,e,n){"use strict";var a=n(63),i=n(66),r=n(107),s=n(110);e.a={components:{UserInput:a.a,Mutations:i.a,Result:r.a},data:function(){return{text:"",activeMutations:[],mutations:s.a}},computed:{mutatedText:function(t){return this.activeMutations.reduce(function(t,e){return e.mutator(t)},this.text)}}}},function(t,e,n){"use strict";e.a={name:"UserInput"}},function(t,e,n){"use strict";var a=n(68),i=n.n(a),r=n(101),s=n(104);e.a={name:"Mutations",components:{Checkbox:r.a},props:{mutations:s.a.array.isRequired},data:function(){return{activeMutationIndices:null}},mounted:function(){this.activeMutationIndices=new i.a(this.mutations.map(function(t,e){return{index:e,active:t.active}}).filter(function(t){return t.active}).map(function(t){return t.index})),this.update()},methods:{toggle:function(t,e){e?this.activeMutationIndices.add(t):this.activeMutationIndices.delete(t),this.update()},update:function(){var t=this;this.$emit("activeMutations",this.mutations.filter(function(e,n){return t.activeMutationIndices.has(n)}))}}}},,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";e.a={name:"Checkbox",props:{name:{type:String,required:!0},checked:{type:Boolean,default:!1},color:{type:String,default:"grey"}},data:function(){return{state:null}},mounted:function(){this.state=!!this.checked},methods:{toggle:function(){this.state=!this.state,this.$emit("toggle",this.state)}}}},,function(t,e,n){"use strict";e.a={name:"Result",props:{text:{type:String}},data:function(){return{copied:!1}},methods:{onCopy:function(){var t=this;this.copied=!0,setTimeout(function(){return t.copied=!1},1e3)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(16),i=n(56),r=n(60),s=n(126),c=n.n(s);a.a.config.productionTip=!1,a.a.use(c.a),new a.a({el:"#app",router:r.a,template:"<App/>",components:{App:i.a}})},,,,function(t,e,n){"use strict";function a(t){n(57)}var i=n(28),r=n(59),s=n(6),c=a,u=s(i.a,r.a,!1,c,null,null);e.a=u.exports},function(t,e){},,function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("main",[t._m(0),t._v(" "),n("p",[t._v("Unicode was a mistake.")]),t._v(" "),n("router-view"),t._v(" "),t._m(1)],1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"title"},[n("a",{attrs:{href:"/"}},[t._v("memefax.website")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"credits"},[n("p",[n("span",[t._v("\n          Made by\n          "),n("a",{attrs:{href:"http://mplewis.com"}},[t._v("Matt Lewis")])]),t._v(" "),n("span",[t._v("\n          Fork this on\n          "),n("a",{attrs:{href:"https://github.com/mplewis/memefax"}},[t._v("GitHub")])])])])}],r={render:a,staticRenderFns:i};e.a=r},function(t,e,n){"use strict";var a=n(16),i=n(61),r=n(62);a.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"Mutate",component:r.a}]})},,function(t,e,n){"use strict";var a=n(29),i=n(125),r=n(6),s=r(a.a,i.a,!1,null,null,null);e.a=s.exports},function(t,e,n){"use strict";function a(t){n(64)}var i=n(30),r=n(65),s=n(6),c=a,u=s(i.a,r.a,!1,c,"data-v-28b6da8c",null);e.a=u.exports},function(t,e){},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("1: Type some text")]),t._v(" "),n("div",{staticClass:"user-input"},[n("input",{staticClass:"big-input",attrs:{placeholder:"Enter your text here to ruin it"},on:{keyup:function(e){t.$emit("text",e.target.value)}}})])])},i=[],r={render:a,staticRenderFns:i};e.a=r},function(t,e,n){"use strict";function a(t){n(67)}var i=n(31),r=n(106),s=n(6),c=a,u=s(i.a,r.a,!1,c,"data-v-e843b02c",null);e.a=u.exports},function(t,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function a(t){n(102)}var i=n(49),r=n(103),s=n(6),c=a,u=s(i.a,r.a,!1,c,"data-v-ae18bd2e",null);e.a=u.exports},function(t,e){},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["container",t.color],on:{click:t.toggle}},[n("div",{staticClass:"checkbox"},[t._v(t._s(t.state?"✓":""))]),t._v(" "),n("div",{staticClass:"name"},[t._v(t._s(t.name))])])},i=[],r={render:a,staticRenderFns:i};e.a=r},,,function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("2: Pick some mutations")]),t._v(" "),t._l(t.mutations,function(e,a){return n("Checkbox",{key:a,attrs:{name:e.name,color:e.color,checked:e.active},on:{toggle:function(e){return t.toggle(a,e)}}})})],2)},i=[],r={render:a,staticRenderFns:i};e.a=r},function(t,e,n){"use strict";function a(t){n(108)}var i=n(51),r=n(109),s=n(6),c=a,u=s(i.a,r.a,!1,c,"data-v-3dcc7e52",null);e.a=u.exports},function(t,e){},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("3: Look at what you did")]),t._v(" "),n("div",{staticClass:"result"},[""===t.text?n("p",{staticClass:"dim"},[t._v("Type some text to get started")]):n("p",[t._v(t._s(t.text))])]),t._v(" "),""!==t.text?n("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.text,expression:"text",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],staticClass:"copy-button",attrs:{disabled:t.copied}},[t._v("\n    "+t._s(t.copied?"Copied!":"Copy to clipboard")+"\n  ")]):t._e()])},i=[],r={render:a,staticRenderFns:i};e.a=r},function(t,e,n){"use strict";var a=n(111),i=n(117),r=n(118),s=n(119);e.a=[{name:"Clap👏ify",mutator:i.a,color:"red",active:!0},{name:"Ｗｉｄｅｔｅｘｔ",mutator:Object(r.a)(a.e),color:"orange"},{name:"Sᴍᴀʟʟ Cᴀᴘs",mutator:Object(r.a)(a.b),color:"yellow",active:!0},{name:"ˢᵘᵖᵉʳˢᶜʳᶦᵖᵗ",mutator:Object(r.a)(a.c),color:"green"},{name:"pǝddᴉๅꓞ",mutator:function(t){return Object(r.a)(a.d)(Object(s.a)(t))},color:"teal"},{name:"Ⓑⓤⓑⓑⓛⓔ",mutator:Object(r.a)(a.a),color:"blue"}]},function(t,e,n){"use strict";var a=n(112);n.d(e,"a",function(){return a.a});var i=n(113);n.d(e,"b",function(){return i.a});var r=n(114);n.d(e,"c",function(){return r.a});var s=n(115);n.d(e,"d",function(){return s.a});var c=n(116);n.d(e,"e",function(){return c.a})},function(t,e,n){"use strict";e.a={0:"⓪",1:"①",2:"②",3:"③",4:"④",5:"⑤",6:"⑥",7:"⑦",8:"⑧",9:"⑨",a:"ⓐ",b:"ⓑ",c:"ⓒ",d:"ⓓ",e:"ⓔ",f:"ⓕ",g:"ⓖ",h:"ⓗ",i:"ⓘ",j:"ⓙ",k:"ⓚ",l:"ⓛ",m:"ⓜ",n:"ⓝ",o:"ⓞ",p:"ⓟ",q:"ⓠ",r:"ⓡ",s:"ⓢ",t:"ⓣ",u:"ⓤ",v:"ⓥ",w:"ⓦ",x:"ⓧ",y:"ⓨ",z:"ⓩ",A:"Ⓐ",B:"Ⓑ",C:"Ⓒ",D:"Ⓓ",E:"Ⓔ",F:"Ⓕ",G:"Ⓖ",H:"Ⓗ",I:"Ⓘ",J:"Ⓙ",K:"Ⓚ",L:"Ⓛ",M:"Ⓜ",N:"Ⓝ",O:"Ⓞ",P:"Ⓟ",Q:"Ⓠ",R:"Ⓡ",S:"Ⓢ",T:"Ⓣ",U:"Ⓤ",V:"Ⓥ",W:"Ⓦ",X:"Ⓧ",Y:"Ⓨ",Z:"Ⓩ"}},function(t,e,n){"use strict";e.a={a:"ᴀ",b:"ʙ",c:"ᴄ",d:"ᴅ",e:"ᴇ",f:"ғ",g:"ɢ",h:"ʜ",i:"ɪ",j:"ᴊ",k:"ᴋ",l:"ʟ",m:"ᴍ",n:"ɴ",o:"ᴏ",p:"ᴘ",q:"ǫ",r:"ʀ",s:"s",t:"ᴛ",u:"ᴜ",v:"ᴠ",w:"ᴡ",x:"x",y:"ʏ",z:"ᴢ"}},function(t,e,n){"use strict";e.a={0:"⁰",1:"¹",2:"²",3:"³",4:"⁴",5:"⁵",6:"⁶",7:"⁷",8:"⁸",9:"⁹",a:"ᵃ",b:"ᵇ",c:"ᶜ",d:"ᵈ",e:"ᵉ",f:"ᶠ",g:"ᵍ",h:"ʰ",i:"ᶦ",j:"ʲ",k:"ᵏ",l:"ˡ",m:"ᵐ",n:"ⁿ",o:"ᵒ",p:"ᵖ",q:"ᑫ",r:"ʳ",s:"ˢ",t:"ᵗ",u:"ᵘ",v:"ᵛ",w:"ʷ",x:"ˣ",y:"ʸ",z:"ᶻ",A:"ᴬ",B:"ᴮ",C:"ᶜ",D:"ᴰ",E:"ᴱ",F:"ᶠ",G:"ᴳ",H:"ᴴ",I:"ᴵ",J:"ᴶ",K:"ᴷ",L:"ᴸ",M:"ᴹ",N:"ᴺ",O:"ᴼ",P:"ᴾ",R:"ᴿ",S:"ˢ",T:"ᵀ",U:"ᵁ",V:"ⱽ",W:"ᵂ",X:"ˣ",Y:"ʸ",Z:"ᶻ","+":"⁺","-":"⁻","=":"⁼","(":"⁽",")":"⁾"}},function(t,e,n){"use strict";e.a={",":"ʻ","!":"¡","?":"¿",".":"·","'":"ˌ",'"':"ˌˌ","*":"ₓ","&":"⅋",1:"Ɩ",2:"Շ",3:"Ɛ",4:"h",5:"૬",6:"9",7:"L",9:"6",A:"ꓯ",a:"ɐ",B:"ꓭ",b:"q",C:"ꓛ",c:"ɔ",D:"ꓷ",d:"p",e:"ǝ",E:"Ǝ",f:"ɟ",F:"ꓞ",G:"ꓨ",g:"ɓ",h:"ɥ",i:"ᴉ",J:"ſ",j:"ſ̣",k:"ʞ",K:"ꓘ",l:"ๅ",L:"ꓶ",M:"W",m:"ɯ",n:"u",P:"ꓒ",p:"d",q:"b",Q:"Ὸ",r:"ɹ",R:"ꓤ",t:"ʇ",T:"ꓕ",u:"n",U:"ꓵ",V:"ꓥ",v:"ʌ",W:"M",w:"ʍ",Y:"⅄",y:"ʎ"}},function(t,e,n){"use strict";e.a={0:"０",1:"１",2:"２",3:"３",4:"４",5:"５",6:"６",7:"７",8:"８",9:"９",a:"ａ",b:"ｂ",c:"ｃ",d:"ｄ",e:"ｅ",f:"ｆ",g:"ｇ",h:"ｈ",i:"ｉ",j:"ｊ",k:"ｋ",l:"ｌ",m:"ｍ",n:"ｎ",o:"ｏ",p:"ｐ",q:"ｑ",r:"ｒ",s:"ｓ",t:"ｔ",u:"ｕ",v:"ｖ",w:"ｗ",x:"ｘ",y:"ｙ",z:"ｚ",A:"Ａ",B:"Ｂ",C:"Ｃ",D:"Ｄ",E:"Ｅ",F:"Ｆ",G:"Ｇ",H:"Ｈ",I:"Ｉ",J:"Ｊ",K:"Ｋ",L:"Ｌ",M:"Ｍ",N:"Ｎ",O:"Ｏ",P:"Ｐ",Q:"Ｑ",R:"Ｒ",S:"Ｓ",T:"Ｔ",U:"Ｕ",V:"Ｖ",W:"Ｗ",X:"Ｘ",Y:"Ｙ",Z:"Ｚ","!":"！",'"':"＂","#":"＃",$:"＄","%":"％","&":"＆","'":"＇","(":"（",")":"）","*":"＊","+":"＋",",":"，","-":"－",".":"．","/":"／","[":"［","\\":"＼","]":"］","^":"＾",_:"＿","`":"｀","{":"｛","|":"｜","}":"｝","~":"～",":":"：",";":"；","<":"＜","=":"＝",">":"＞","?":"？","@":"＠"}},function(t,e,n){"use strict";function a(t,e){return t.trim().replace(/\s+/g,e)}function i(t,e){return a(t.split("").join(" "),e)}function r(t){return-1===t.indexOf(" ")?i(t,"👏"):a(t,"👏")}e.a=r},function(t,e,n){"use strict";function a(t){return function(e){return e.split("").map(function(e){var n=t[e];return n||e}).join("")}}e.a=a},function(t,e,n){"use strict";function a(t){return r()(t).reverse().join("")}e.a=a;var i=n(120),r=n.n(i)},,,,,,function(t,e,n){"use strict";var a=function(){var t=this,e=this,n=e.$createElement,a=e._self._c||n;return a("div",[a("UserInput",{on:{text:function(e){return t.text=e}}}),e._v(" "),a("Mutations",{attrs:{mutations:e.mutations},on:{activeMutations:function(e){return t.activeMutations=e}}}),e._v(" "),a("Result",{attrs:{text:e.mutatedText}})],1)},i=[],r={render:a,staticRenderFns:i};e.a=r}]),[52]);
//# sourceMappingURL=app.3fd2c15020d5d2b41a6a.js.map