/*!build time : 2014-04-12 10:45:31 PM*/
KISSY.add("gallery/crossimage/0.1/kdTree",function(){function a(a,b,c){this.obj=a,this.left=null,this.right=null,this.parent=c,this.dimension=b}function b(b,d,e){function f(b,c,d){var g,h,i=c%e.length;return 0===b.length?null:1===b.length?new a(b[0],i,d):(b.sort(function(a,b){return a[e[i]]-b[e[i]]}),g=Math.floor(b.length/2),h=new a(b[g],i,d),h.left=f(b.slice(0,g),c+1,h),h.right=f(b.slice(g+1),c+1,h),h)}function g(a){function b(a){a.left&&(a.left.parent=a,b(a.left)),a.right&&(a.right.parent=a,b(a.right))}h.root=a,b(h.root)}var h=this;Array.isArray(b)?this.root=f(b,0,null):g(b,d,e),this.toJSON=function(b){b||(b=this.root);var c=new a(b.obj,b.dimension,null);return b.left&&(c.left=h.toJSON(b.left)),b.right&&(c.right=h.toJSON(b.right)),c},this.insert=function(b){function c(a,d){if(null===a)return d;var f=e[a.dimension];return b[f]<a.obj[f]?c(a.left,a):c(a.right,a)}var d,f,g=c(this.root,null);return null===g?void(this.root=new a(b,0,null)):(d=new a(b,(g.dimension+1)%e.length,g),f=e[g.dimension],void(b[f]<g.obj[f]?g.left=d:g.right=d))},this.remove=function(a){function b(c){if(null===c)return null;if(c.obj===a)return c;var d=e[c.dimension];return a[d]<c.obj[d]?b(c.left,c):b(c.right,c)}function c(a){function b(a,c){var d,f,g,h,i;return null===a?null:(d=e[c],a.dimension===c?null!==a.right?b(a.right,c):a:(f=a.obj[d],g=b(a.left,c),h=b(a.right,c),i=a,null!==g&&g.obj[d]>f&&(i=g),null!==h&&h.obj[d]>i.obj[d]&&(i=h),i))}function d(a,b){var c,f,g,h,i;return null===a?null:(c=e[b],a.dimension===b?null!==a.left?d(a.left,b):a:(f=a.obj[c],g=d(a.left,b),h=d(a.right,b),i=a,null!==g&&g.obj[c]<f&&(i=g),null!==h&&h.obj[c]<i.obj[c]&&(i=h),i))}var f,g,i;return null===a.left&&null===a.right?null===a.parent?void(h.root=null):(i=e[a.parent.dimension],void(a.obj[i]<a.parent.obj[i]?a.parent.left=null:a.parent.right=null)):(f=null!==a.left?b(a.left,a.dimension):d(a.right,a.dimension),g=f.obj,c(f),void(a.obj=g))}var d;d=b(h.root),null!==d&&c(d)},this.nearest=function(a,b,f){function g(c){function f(a,c){k.push([a,c]),k.size()>b&&k.pop()}var h,i,j,l,m=e[c.dimension],n=d(a,c.obj),o={};for(l=0;l<e.length;l+=1)o[e[l]]=l===c.dimension?a[e[l]]:c.obj[e[l]];return i=d(o,c.obj),null===c.right&&null===c.left?void((k.size()<b||n<k.peek()[1])&&f(c,n)):(h=null===c.right?c.left:null===c.left?c.right:a[m]<c.obj[m]?c.left:c.right,g(h),(k.size()<b||n<k.peek()[1])&&f(c,n),void((k.size()<b||Math.abs(i)<k.peek()[1])&&(j=h===c.left?c.right:c.left,null!==j&&g(j))))}var i,j,k;if(k=new c(function(a){return-a[1]}),f)for(i=0;b>i;i+=1)k.push([null,f]);for(g(h.root),j=[],i=0;b>i;i+=1)k.content[i][0]&&j.push([k.content[i][0].obj,k.content[i][1]]);return j},this.balanceFactor=function(){function a(b){return null===b?0:Math.max(a(b.left),a(b.right))+1}function b(a){return null===a?0:b(a.left)+b(a.right)+1}return a(h.root)/(Math.log(b(h.root))/Math.log(2))}}function c(a){this.content=[],this.scoreFunction=a}return c.prototype={push:function(a){this.content.push(a),this.bubbleUp(this.content.length-1)},pop:function(){var a=this.content[0],b=this.content.pop();return this.content.length>0&&(this.content[0]=b,this.sinkDown(0)),a},peek:function(){return this.content[0]},remove:function(a){for(var b=this.content.length,c=0;b>c;c++)if(this.content[c]==a){var d=this.content.pop();return void(c!=b-1&&(this.content[c]=d,this.scoreFunction(d)<this.scoreFunction(a)?this.bubbleUp(c):this.sinkDown(c)))}throw new Error("Node not found.")},size:function(){return this.content.length},bubbleUp:function(a){for(var b=this.content[a];a>0;){var c=Math.floor((a+1)/2)-1,d=this.content[c];if(!(this.scoreFunction(b)<this.scoreFunction(d)))break;this.content[c]=b,this.content[a]=d,a=c}},sinkDown:function(a){for(var b=this.content.length,c=this.content[a],d=this.scoreFunction(c);;){var e=2*(a+1),f=e-1,g=null;if(b>f){var h=this.content[f],i=this.scoreFunction(h);d>i&&(g=f)}if(b>e){var j=this.content[e],k=this.scoreFunction(j);(null==g?d:i)>k&&(g=e)}if(null==g)break;this.content[a]=this.content[g],this.content[g]=c,a=g}}},b},{attach:!1,requires:[]}),KISSY.add("gallery/crossimage/0.1/cdnPoints",function(){return[{w:16,h:16},{w:20,h:20},{w:24,h:24},{w:30,h:30},{w:32,h:32},{w:36,h:36},{w:40,h:40},{w:48,h:48},{w:50,h:50},{w:60,h:30},{w:60,h:60},{w:60,h:90},{w:64,h:64},{w:70,h:70},{w:70,h:1e3},{w:72,h:72},{w:75,h:100},{w:80,h:40},{w:80,h:60},{w:81,h:65},{w:80,h:80},{w:80,h:1e3},{w:88,h:88},{w:90,h:45},{w:90,h:60},{w:90,h:90},{w:90,h:135},{w:96,h:54},{w:100,h:50},{w:100,h:100},{w:100,h:150},{w:100,h:1e3},{w:110,h:90},{w:110,h:110},{w:110,h:1e4},{w:115,h:100},{w:120,h:60},{w:120,h:90},{w:120,h:120},{w:120,h:160},{w:125,h:125},{w:128,h:128},{w:130,h:130},{w:140,h:70},{w:140,h:100},{w:145,h:145},{w:150,h:150},{w:150,h:200},{w:150,h:1e4},{w:160,h:80},{w:160,h:90},{w:160,h:160},{w:160,h:180},{w:160,h:240},{w:165,h:5e3},{w:170,h:170},{w:170,h:1e4},{w:170,h:120},{w:180,h:90},{w:180,h:180},{w:180,h:230},{w:190,h:43},{w:190,h:190},{w:200,h:100},{w:200,h:200},{w:210,h:140},{w:210,h:210},{w:210,h:1e3},{w:220,h:220},{w:220,h:330},{w:220,h:5e3},{w:220,h:1e4},{w:240,h:5e3},{w:230,h:87},{w:230,h:230},{w:234,h:234},{w:240,h:240},{w:240,h:1e4},{w:250,h:225},{w:250,h:250},{w:264,h:100},{w:270,h:180},{w:270,h:270},{w:280,h:410},{w:290,h:290},{w:290,h:1e4},{w:300,h:1e3},{w:310,h:310},{w:300,h:300},{w:315,h:315},{w:320,h:320},{w:320,h:480},{w:336,h:336},{w:350,h:350},{w:350,h:1e3},{w:360,h:360},{w:400,h:152},{w:400,h:400},{w:420,h:280},{w:430,h:430},{w:450,h:1e4},{w:460,h:460},{w:468,h:468},{w:480,h:420},{w:480,h:480},{w:485,h:175},{w:490,h:330},{w:490,h:490},{w:500,h:450},{w:500,h:1e3},{w:540,h:540},{w:560,h:370},{w:560,h:560},{w:560,h:840},{w:570,h:570},{w:570,h:1e4},{w:580,h:580},{w:580,h:1e4},{w:600,h:600},{w:620,h:1e4},{w:640,h:480},{w:640,h:640},{w:660,h:440},{w:670,h:670},{w:720,h:720},{w:728,h:728},{w:760,h:760},{w:790,h:420},{w:790,h:1e4},{w:960,h:960},{w:970,h:970},{w:1e4,h:220},{w:1e4,h:340},{w:1e4,h:170},{w:1e4,h:500}]}),KISSY.add("gallery/crossimage/0.1/cdnNearest",function(a,b,c){var d=c,e=function(a,b){return Math.pow(a.w-b.w,2)+Math.pow(a.h-b.h,2)},f=new b(d,e,["w","h"]);return f.nearest},{requires:["./kdTree","./cdnPoints"]}),KISSY.add("gallery/crossimage/0.1/webp",function(){return function(){function a(a){if(!window.chrome&&!window.opera)return void a(!1);var c=window.localStorage&&window.localStorage.getItem("webpsupport");return null!==c?void a("true"===c):void b(function(b){window.localStorage&&window.localStorage.setItem("webpsupport",b),a(b)})}function b(a){var b=new Image;b.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",b.onload=b.onerror=function(){a(b.width>0&&b.height>0)}}this.WebP||(this.WebP={},WebP.isSupport=function(b){return b?void 0===WebP._isSupport?void a(function(a){b(WebP._isSupport=a)}):void b(WebP._isSupport):void 0})}(),window.WebP},{attach:!1,requires:[]}),KISSY.add("gallery/crossimage/0.1/index",function(a,b,c){function d(d){function e(a){if(a.elem&&a.elem.width&&a.elem.height&&a.src&&/http/.test(a.src)&&null===a.elem.getAttribute("ignore-crossimage"))try{var c,d,e,g,h=a.elem,i=h.width*f.config.userPPI,j=h.height*f.config.userPPI,k=a.src,c=k.replace(/_\d+x\d+(q\d+)?\.jpg/g,"").replace(/_q\d+\.jpg/g,"").replace(/_\.webp/,""),l=b({w:i,h:j},2);if(!l||!l[0])return;e=l[0][0].w,g=l[0][0].h,d=c+"_@Wx@Hq@Q.jpg@WEBP".replace(/@W/i,e).replace(/@H/i,g).replace(/@Q/,f.config.quality).replace(/@WEBP/,f.config.WEBPSUFFIX),a.src=d}catch(m){}}var f=this,g={quality:90,WEBPSUFFIX:"",userPPI:1};return f.config=a.merge(g,d),c.isSupport(function(a){f.config.WEBPSUFFIX=a?"_.webp":""}),e}return d},{requires:["./cdnNearest","./webp"]}),KISSY.add("gallery/crossimage/0.1/mini",function(a,b){return b},{requires:["./index"]});