class Glottologist{assign(a,b){let c={};c[a]=b,this.data=Object.assign(this.data,c)}async autoGen(b){const c=document.querySelectorAll("[glot-model]");for(let d=0;d<c.length;d++){const a=c[d].getAttribute("glot-model");let e={};for(let f of b){const a=await this.gTranslate(c[d].innerHTML,f);e[f]=a}this.assign(a,e)}}codeGen(){const a=Object.keys(this.data);let b="";for(let c=0;c<a.length;c++)b+=`glot.assign("${a[c]}", ${JSON.stringify(this.data[a[c]],null,2)})\n`;return b}constructor(a="en"){this.data={},this.pageLang=a,"function"==typeof require&&(this.JSDOM=require("jsdom").JSDOM),this.lang="undefined"==typeof window?a:navigator.language||navigator.userLanguage}gTranslate(a,b="en",c="auto"){return new Promise((d,f)=>{const g="https://translate.googleapis.com/translate_a/single?client=gtx&sl="+c+"&tl="+b+"&dt=t&q="+encodeURI(a);fetch(g).then(a=>{a.json().then(a=>{d(a[0][0][0])}).catch(a=>{f(a)})}).catch(a=>{f(a)})})}get(name,lang="auto",obj={}){let data={};"object"==typeof lang&&(data=lang,lang="string"==typeof obj?obj:"auto");let tmp,result;return"undefined"==typeof this.data[name]?null:("auto"==lang?(tmp=this.data[name][new String(this.lang).split("-")[0]],result=null==tmp?this.data[name][Object.keys(this.data[name])[0]]:tmp):(tmp=this.data[name][lang],result=null==tmp?this.data[name][Object.keys(this.data[name])[0]]:tmp),eval("`"+result+"`"))}import(a){return new Promise((b,c)=>{fetch(a).then(a=>{a.json().then(a=>{this.data=Object.assign(this.data,a),b(a)}).catch(a=>{c(a)})}).catch(a=>{c(a)})})}locale(){const a=[...arguments];if(0==a.length){if("undefined"!=typeof window){const a=navigator.language||navigator.userLanguage,b=new String(this.lang).split("-")[0];return this.lang=b,this.lang}return this.lang="en",this.lang}return this.lang=a[0],this.lang}render(a="auto",b=document.body){const c=b.querySelectorAll("[glot-model]");for(let d=0;d<c.length;d++){const b=c[d].getAttribute("glot-model"),e=this.get(b,a);null!=e&&this.pageLang!=a&&(c[d].innerHTML=e)}this.pageLang="auto"==a?new String(this.lang).split("-")[0]:a,document.documentElement.setAttribute("lang",this.pageLang)}serverRender(a,b){if("undefined"==typeof this.JSDOM)return;const c=new this.JSDOM(a),{document:d}=c.window,e=d.querySelectorAll("[glot-model]");for(let c=0;c<e.length;c++){const a=e[c].getAttribute("glot-model"),d=this.get(a,b);null!=d&&this.pageLang!=b&&(e[c].innerHTML=d)}return this.pageLang="auto"==b?new String(this.lang).split("-")[0]:b,d.documentElement.setAttribute("lang",this.pageLang),c.serialize()}}"function"==typeof define&&define.amd?define(()=>new Glottologist):"undefined"==typeof exports?"undefined"!=typeof global&&(global.Glottologist=new Glottologist):("undefined"!=typeof module&&module.exports&&(exports=module.exports=new Glottologist),exports.Glottologist=new Glottologist);