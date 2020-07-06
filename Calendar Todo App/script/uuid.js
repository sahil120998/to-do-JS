/*!function(t,e){
    "object"==typeof exports&&"undefined"!=typeof module?module.exports=e():
    "function"==typeof define&&define.amd?define(e):(t=t||self).uuidv4=e()}
    (this,(function(){"use strict";var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),e=new Uint8Array(16);function n(){if(!t)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(e)}for(var o=[],r=0;r<256;++r)o[r]=(r+256).toString(16).substr(1);return function(t,e,r){var u=e&&r||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var i=(t=t||{}).random||(t.rng||n)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,e)for(var d=0;d<16;++d)e[u+d]=i[d];return e||function(t,e){var n=e||0,r=o;return[r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]]].join("")}(i)}}));*/

    !function(n){
        if("object"==typeof exports&&"undefined"!=typeof module)
        module.exports=n();
        else if("function"==typeof define&&define.amd)
        define([],n);
        else{
            ("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).uuidv4=n()}
            }(function(){
                return function(){
                    return function n(r,t,e){
                        function o(u,f){if(!t[u]){if(!r[u]){var a="function"==typeof require&&require;
                                                            if(!f&&a)return a(u,!0);if(i)return i(u,!0);
                                                            var s=new Error("Cannot find module '"+u+"'");
                                                            throw s.code="MODULE_NOT_FOUND",s}var c=t[u]={exports:{}};
                                                            r[u][0].call(c.exports,function(n){
                                                                            return o(r[u][1][n]||n)},c,c.exports,n,r,t,e)}
                                                                            return t[u].exports}
                                            for(var i="function"==typeof require&&require,u=0;u<e.length;u++)
                                            o(e[u]);
                                            return o}}
                                            ()({1:[function(n,r,t){"use strict";
                                            var e=n("sha-1"),o=n("uuid/v4"),i=function(){return o()};
                                            i.regex=/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}$/,i.is=function(n){return!!n&&i.regex.test(n)},i.empty=function(){return"00000000-0000-0000-0000-000000000000"},i.fromString=function(n){if(!n)throw new Error("Text is missing.");
                                            var r=e(n);
                                            return r.substring(0,8)+"-"+r.substring(8,12)+"-4"+r.substring(13,16)+"-8"+r.substring(17,20)+"-"+r.substring(20,32)},r.exports=i},{"sha-1":2,"uuid/v4":5}],2:[function(n,r,t){(function(){function n(n,r,t,e){return n<20?r&t|~r&e:n<40?r^t^e:n<60?r&t|r&e|t&e:r^t^e}function e(n){return n<20?1518500249:n<40?1859775393:n<60?2400959708:3395469782}function o(n,r){var t=(65535&n)+(65535&r);
                                                return(n>>16)+(r>>16)+(t>>16)<<16|65535&t}function i(n,r){return n<<r|n>>>32-r}function u(r){return function(n){var r,t="";
                                                for(r=0;r<4*n.length;r++)t+="0123456789abcdef".charAt(n[r>>2]>>8*(3-r%4)+4&15)+"0123456789abcdef".charAt(n[r>>2]>>8*(3-r%4)&15);return t}(function(r){var t,u,f,a,s,c,p,d,l=[],y=1732584193,v=4023233417,g=2562383102,b=271733878,h=3285377520;
                                                    for(p=0;p<r.length;p+=16){for(t=y,u=v,f=g,a=b,s=h,d=0;d<80;d++)l[d]=d<16?r[p+d]:i(l[d-3]^l[d-8]^l[d-14]^l[d-16],1),c=o(o(i(y,5),n(d,v,g,b)),o(o(h,l[d]),e(d))),h=b,b=g,g=i(v,30),v=y,y=c;y=o(y,t),v=o(v,u),g=o(g,f),b=o(b,a),h=o(h,s)}
                                                    return[y,v,g,b,h]
                                                }(function(n){
                                                    var r,t=1+(n.length+8>>6),e=[];
                                                    for(r=0;r<16*t;r++)
                                                        e[r]=0;
                                                    for(r=0;r<n.length;r++)
                                                        e[r>>2]|=n.charCodeAt(r)<<24-8*(3&r);
                                                        return e[r>>2]|=128<<24-8*(3&r),e[16*t-1]=8*n.length,e}(r)))}void 0!==t?(void 0!==r&&r.exports&&(t=r.exports=u),t.sha1=u):this.sha1=u}).call(this)},{}],3:[function(n,r,t){for(var e=[],o=0;o<256;++o)e[o]=(o+256).toString(16).substr(1);
                                                            r.exports=function(n,r){var t=r||0,o=e;
                                                                                    return[o[n[t++]],o[n[t++]],o[n[t++]],o[n[t++]],"-",o[n[t++]],o[n[t++]],"-",o[n[t++]],o[n[t++]],"-",o[n[t++]],o[n[t++]],"-",o[n[t++]],o[n[t++]],o[n[t++]],o[n[t++]],o[n[t++]],o[n[t++]]].join("")}},{}],4:[function(n,r,t){var e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);
                                                                                    if(e){var o=new Uint8Array(16);
                                                                                            r.exports=function(){return e(o),o}}else{var i=new Array(16);r.exports=function(){for(var n,r=0;r<16;r++)0==(3&r)&&(n=4294967296*Math.random()),i[r]=n>>>((3&r)<<3)&255;return i}}},{}],5:[function(n,r,t){var e=n("./lib/rng"),o=n("./lib/bytesToUuid");r.exports=function(n,r,t){var i=r&&t||0;"string"==typeof n&&(r="binary"===n?new Array(16):null,n=null);var u=(n=n||{}).random||(n.rng||e)();if(u[6]=15&u[6]|64,u[8]=63&u[8]|128,r)for(var f=0;f<16;++f)r[i+f]=u[f];
                                                                                            return r||o(u)}},{"./lib/bytesToUuid":3,"./lib/rng":4}]},{},[1])(1)});