(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{BoaQ:function(module,exports){exports.default={"ar":true,"de":true,"es":true,"fr":true,"ja":true,"ko":true,"pseudo":true,"pt":true,"ru":true,"tr":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},HdzH:function(module,e,r){"use strict";r.r(e);var t=r("cDf5"),n=r.n(t),a=/[#!]\{([^}]+?)\}/g;function generateTranslationFunction(e){var r=e||{},t=function f(e,t){var o=r[e]||e;return"object"===n()(t)&&t?o.replace(a,function(e,n){var a=t[n],o=void 0===a?n:a;return r[a]||o}):o};return t.dictionary=r,t.merge=function(){var e=Array.prototype.slice.call(arguments,0),n,a,o;for(n=0;n<e.length;n+=1)if(a=e[n]&&e[n].dictionary)for(o in a)o in r||(r[o]=a[o]);return t},t}e.default=generateTranslationFunction},KcZF:function(module,e,r){"use strict";function arrayToObject(e){return e.reduce(function(e,r){var t=r[0],n=r[1];return e[t]=n,e[n]=t,e},{})}function isBoolean(e){return"boolean"==typeof e}function isFunction(e){return"function"==typeof e}function isNumber(e){return"number"==typeof e}function isNullOrUndefined(e){return null==e}function isObject(e){return e&&"object"==typeof e}function isString(e){return"string"==typeof e}function includes(e,r){return-1!==e.indexOf(r)}function flipSign(e){if(0===parseFloat(e))return e;if("-"===e[0])return e.slice(1);return"-"+e}function flipTransformSign(e,r,t,n){return r+flipSign(t)+n}function calculateNewBackgroundPosition(e){var r=e.indexOf(".");if(-1===r)e=100-parseFloat(e)+"%";else{var t=e.length-r-2;e=(e=100-parseFloat(e)).toFixed(t)+"%"}return e}function getValuesAsList(e){return e.replace(/ +/g," ").split(" ").map(function(e){return e.trim()}).filter(Boolean).reduce(function(e,r){var t=e.list,n=e.state,a=(r.match(/\(/g)||[]).length,o=(r.match(/\)/g)||[]).length;return n.parensDepth>0?t[t.length-1]=t[t.length-1]+" "+r:t.push(r),n.parensDepth+=a-o,{list:t,state:n}},{list:[],state:{parensDepth:0}}).list}function handleQuartetValues(e){var r=getValuesAsList(e);if(r.length<=3||r.length>4)return e;var t=r[0],n=r[1],a=r[2],o;return[t,r[3],a,n].join(" ")}r.d(e,"a",function(){return convert});var t={padding:function padding(e){var r=e.value;if(isNumber(r))return r;return handleQuartetValues(r)},textShadow:function textShadow(e){var r;return e.value.replace(/(-*)([.|\d]+)/,function(e,r,t){if("0"===t)return e;var n;return""+(""===r?"-":"")+t})},borderColor:function borderColor(e){var r;return handleQuartetValues(e.value)},borderRadius:function borderRadius(e){var r=e.value;if(isNumber(r))return r;if(includes(r,"/")){var n=r.split("/"),a=n[0],o=n[1],i,u;return t.borderRadius({value:a.trim()})+" / "+t.borderRadius({value:o.trim()})}var g=getValuesAsList(r);switch(g.length){case 2:return g.reverse().join(" ");case 4:var s=g[0],l=g[1],c=g[2],f;return[l,s,g[3],c].join(" ");default:return r}},background:function background(e){var r=e.value,n=e.valuesToConvert,a=e.isRtl,o=e.bgImgDirectionRegex,i=e.bgPosDirectionRegex,u=r.replace(/(url\(.*?\))|(rgba?\(.*?\))|(hsl\(.*?\))|(#[a-fA-F0-9]+)|((^| )(\D)+( |$))/g,"").trim();return r=r.replace(u,t.backgroundPosition({value:u,valuesToConvert:n,isRtl:a,bgPosDirectionRegex:i})),t.backgroundImage({value:r,valuesToConvert:n,bgImgDirectionRegex:o})},backgroundImage:function backgroundImage(e){var r=e.value,t=e.valuesToConvert,n=e.bgImgDirectionRegex;if(!includes(r,"url(")&&!includes(r,"linear-gradient("))return r;return r.replace(n,function(e,r,n){return e.replace(n,t[n])})},backgroundPosition:function backgroundPosition(e){var r=e.value,t=e.valuesToConvert,n=e.isRtl,a=e.bgPosDirectionRegex;return r.replace(n?/^((-|\d|\.)+%)/:null,function(e,r){return calculateNewBackgroundPosition(r)}).replace(a,function(e){return t[e]})},backgroundPositionX:function backgroundPositionX(e){var r=e.value,n=e.valuesToConvert,a=e.isRtl,o=e.bgPosDirectionRegex;if(isNumber(r))return r;return t.backgroundPosition({value:r,valuesToConvert:n,isRtl:a,bgPosDirectionRegex:o})},transition:function transition(e){var r=e.value,t=e.propertiesToConvert;return r.split(/,\s*/g).map(function(e){var r=e.split(" ");return r[0]=t[r[0]]||r[0],r.join(" ")}).join(", ")},transitionProperty:function transitionProperty(e){var r=e.value,t=e.propertiesToConvert;return r.split(/,\s*/g).map(function(e){return t[e]||e}).join(", ")},transform:function transform(e){var r=e.value,t="[^\\u0020-\\u007e]",n="(?:(?:(?:\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f])",a="((?:-?(?:[0-9]*\\.[0-9]+|[0-9]+)(?:\\s*(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)|-?(?:[_a-z]|[^\\u0020-\\u007e]|"+n+")(?:[_a-z0-9-]|[^\\u0020-\\u007e]|"+n+")*)?)|(?:inherit|auto))",o=new RegExp("(translateX\\s*\\(\\s*)"+a+"(\\s*\\))","gi"),i=new RegExp("(translate\\s*\\(\\s*)"+a+"((?:\\s*,\\s*"+a+"){0,1}\\s*\\))","gi"),u=new RegExp("(translate3d\\s*\\(\\s*)"+a+"((?:\\s*,\\s*"+a+"){0,2}\\s*\\))","gi"),g=new RegExp("(rotate[ZY]?\\s*\\(\\s*)"+a+"(\\s*\\))","gi");return r.replace(o,flipTransformSign).replace(i,flipTransformSign).replace(u,flipTransformSign).replace(g,flipTransformSign)}};t.objectPosition=t.backgroundPosition,t.margin=t.padding,t.borderWidth=t.padding,t.boxShadow=t.textShadow,t.webkitBoxShadow=t.boxShadow,t.mozBoxShadow=t.boxShadow,t.WebkitBoxShadow=t.boxShadow,t.MozBoxShadow=t.boxShadow,t.borderStyle=t.borderColor,t.webkitTransform=t.transform,t.mozTransform=t.transform,t.WebkitTransform=t.transform,t.MozTransform=t.transform,t.transformOrigin=t.backgroundPosition,t.webkitTransformOrigin=t.transformOrigin,t.mozTransformOrigin=t.transformOrigin,t.WebkitTransformOrigin=t.transformOrigin,t.MozTransformOrigin=t.transformOrigin,t.webkitTransition=t.transition,t.mozTransition=t.transition,t.WebkitTransition=t.transition,t.MozTransition=t.transition,t.webkitTransitionProperty=t.transitionProperty,t.mozTransitionProperty=t.transitionProperty,t.WebkitTransitionProperty=t.transitionProperty,t.MozTransitionProperty=t.transitionProperty,t["text-shadow"]=t.textShadow,t["border-color"]=t.borderColor,t["border-radius"]=t.borderRadius,t["background-image"]=t.backgroundImage,t["background-position"]=t.backgroundPosition,t["background-position-x"]=t.backgroundPositionX,t["object-position"]=t.objectPosition,t["border-width"]=t.padding,t["box-shadow"]=t.textShadow,t["-webkit-box-shadow"]=t.textShadow,t["-moz-box-shadow"]=t.textShadow,t["border-style"]=t.borderColor,t["-webkit-transform"]=t.transform,t["-moz-transform"]=t.transform,t["transform-origin"]=t.transformOrigin,t["-webkit-transform-origin"]=t.transformOrigin,t["-moz-transform-origin"]=t.transformOrigin,t["-webkit-transition"]=t.transition,t["-moz-transition"]=t.transition,t["transition-property"]=t.transitionProperty,t["-webkit-transition-property"]=t.transitionProperty,t["-moz-transition-property"]=t.transitionProperty;var n=arrayToObject([["paddingLeft","paddingRight"],["marginLeft","marginRight"],["left","right"],["borderLeft","borderRight"],["borderLeftColor","borderRightColor"],["borderLeftStyle","borderRightStyle"],["borderLeftWidth","borderRightWidth"],["borderTopLeftRadius","borderTopRightRadius"],["borderBottomLeftRadius","borderBottomRightRadius"],["padding-left","padding-right"],["margin-left","margin-right"],["border-left","border-right"],["border-left-color","border-right-color"],["border-left-style","border-right-style"],["border-left-width","border-right-width"],["border-top-left-radius","border-top-right-radius"],["border-bottom-left-radius","border-bottom-right-radius"]]),a=["content"],o=arrayToObject([["ltr","rtl"],["left","right"],["w-resize","e-resize"],["sw-resize","se-resize"],["nw-resize","ne-resize"]]),i=new RegExp("(^|\\W|_)((ltr)|(rtl)|(left)|(right))(\\W|_|$)","g"),u=new RegExp("(left)|(right)");function convert(e){return Object.keys(e).reduce(function(r,t){var n=e[t];if(isString(n)&&(n=n.trim()),includes(a,t))return r[t]=n,r;var o=convertProperty(t,n),i=o.key,u=o.value;return r[i]=u,r},Array.isArray(e)?[]:{})}function convertProperty(e,r){var t=/\/\*\s?@noflip\s?\*\//.test(r),n=t?e:getPropertyDoppelganger(e),a;return{key:n,value:t?r:getValueDoppelganger(n,r)}}function getPropertyDoppelganger(e){return n[e]||e}function getValueDoppelganger(e,r){if(isNullOrUndefined(r)||isBoolean(r))return r;if(isObject(r))return convert(r);var a=isNumber(r),g=isFunction(r),s=a||g?r:r.replace(/ !important.*?$/,""),l=!a&&s.length!==r.length,c=t[e],f;if(f=c?c({value:s,valuesToConvert:o,propertiesToConvert:n,isRtl:!0,bgImgDirectionRegex:i,bgPosDirectionRegex:u}):o[s]||s,l)return f+" !important";return f}},OtJu:function(module,e,r){"use strict";var t=r("KcZF");e.a=t.a},hS5U:function(module,exports,e){var r=e("BoaQ"),t=r.default?r.default:{},n,a=(0,e("HdzH").default)(t);a.getLocale=function(){return"en"},module.exports=a},"sQ/U":function(module,e,r){"use strict";r.d(e,"b",function(){return i}),r.d(e,"c",function(){return u});var t=r("lSNA"),n=r.n(t),a=r("juzs");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){n()(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var o=function get(){return a.a?_objectSpread(_objectSpread({},a.a),{},{authenticated:!!a.a.id,fullName:a.a.full_name}):{}},i=function isAuthenticatedUser(){return o().authenticated},u=function isSuperuser(){return o().is_superuser},g=function getUserTimezone(){return o().timezone};e.a={get:o,isAuthenticatedUser:i,isSuperuser:u,getUserTimezone:g}},"z+Ik":function(module,e,r){"use strict";r.r(e),r.d(e,"courseLanguageTags",function(){return c}),r.d(e,"supportedLanguageSubdomains",function(){return f}),r.d(e,"toIetfLanguageTag",function(){return toIetfLanguageTag}),r.d(e,"getIetfLanguageTag",function(){return getIetfLanguageTag}),r.d(e,"toLanguageCode",function(){return toLanguageCode}),r.d(e,"getLanguageCode",function(){return getLanguageCode}),r.d(e,"getMomentLanguage",function(){return getMomentLanguage}),r.d(e,"getFacebookLocaleString",function(){return getFacebookLocaleString}),r.d(e,"getCmsLocaleString",function(){return getCmsLocaleString}),r.d(e,"languageCodeToName",function(){return languageCodeToName}),r.d(e,"languageCodeCSVtoLanguages",function(){return languageCodeCSVtoLanguages}),r.d(e,"isRightToLeft",function(){return isRightToLeft}),r.d(e,"isUserRightToLeft",function(){return isUserRightToLeft}),r.d(e,"latinizeText",function(){return latinizeText}),r.d(e,"getMobileBadgeLanguageCode",function(){return getMobileBadgeLanguageCode}),r.d(e,"isFullySupportedLocale",function(){return v}),r.d(e,"getUserLanguageCode",function(){return T}),r.d(e,"rtlStyle",function(){return L}),r.d(e,"getLanguageDirection",function(){return k});var t=r("lSNA"),n=r.n(t),a=r("F/us"),o=r.n(a),i=r("sQ/U"),u=r("ML/G"),g=r("OtJu"),s=r("hS5U"),l=r.n(s);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){n()(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function languageTagToName(){return{ab:l()("Abkhaz"),aa:l()("Afar"),af:l()("Afrikaans"),ak:l()("Akan"),sq:l()("Albanian"),am:l()("Amharic"),ar:l()("Arabic"),an:l()("Aragonese"),hy:l()("Armenian"),as:l()("Assamese"),av:l()("Avaric"),ae:l()("Avestan"),ay:l()("Aymara"),az:l()("Azerbaijani"),bm:l()("Bambara"),ba:l()("Bashkir"),eu:l()("Basque"),be:l()("Belarusian"),bn:l()("Bengali"),bh:l()("Bihari"),bi:l()("Bislama"),bs:l()("Bosnian"),br:l()("Breton"),bg:l()("Bulgarian"),my:l()("Burmese"),ca:l()("Catalan"),ch:l()("Chamorro"),ce:l()("Chechen"),ny:l()("Chichewa"),zh:l()("Chinese"),"zh-CN":l()("Chinese (Simplified)"),"zh-TW":l()("Chinese (Traditional)"),cv:l()("Chuvash"),kw:l()("Cornish"),co:l()("Corsican"),cr:l()("Cree"),hr:l()("Croatian"),cs:l()("Czech"),da:l()("Danish"),dv:l()("Divehi"),nl:l()("Dutch"),dz:l()("Dzongkha"),en:l()("English"),eo:l()("Esperanto"),et:l()("Estonian"),ee:l()("Ewe"),fo:l()("Faroese"),fj:l()("Fijian"),fi:l()("Finnish"),fr:l()("French"),ff:l()("Fula"),gl:l()("Galician"),ka:l()("Georgian"),de:l()("German"),el:l()("Greek"),gn:l()("Guaraní"),gu:l()("Gujarati"),ht:l()("Haitian"),ha:l()("Hausa"),he:l()("Hebrew"),hz:l()("Herero"),hi:l()("Hindi"),ho:l()("Hiri Motu"),hu:l()("Hungarian"),ia:l()("Interlingua"),id:l()("Indonesian"),ie:l()("Interlingue"),ga:l()("Irish"),ig:l()("Igbo"),ik:l()("Inupiaq"),io:l()("Ido"),is:l()("Icelandic"),it:l()("Italian"),iu:l()("Inuktitut"),ja:l()("Japanese"),jv:l()("Javanese"),kl:l()("Kalaallisut"),kn:l()("Kannada"),kr:l()("Kanuri"),ks:l()("Kashmiri"),kk:l()("Kazakh"),km:l()("Khmer"),ki:l()("Kikuyu"),rw:l()("Kinyarwanda"),ky:l()("Kyrgyz"),kv:l()("Komi"),kg:l()("Kongo"),ko:l()("Korean"),ku:l()("Kurdish"),kj:l()("Kwanyama"),la:l()("Latin"),lb:l()("Luxembourgish"),lg:l()("Ganda"),li:l()("Limburgish"),ln:l()("Lingala"),lo:l()("Lao"),lt:l()("Lithuanian"),lu:l()("Luba-Katanga"),lv:l()("Latvian"),gv:l()("Manx"),mk:l()("Macedonian (FYROM)"),mg:l()("Malagasy"),ms:l()("Malay"),ml:l()("Malayalam"),mt:l()("Maltese"),mi:l()("Māori"),mr:l()("Marathi"),mh:l()("Marshallese"),mn:l()("Mongolian"),na:l()("Nauru"),nv:l()("Navajo"),nb:l()("Norwegian Bokmål"),nd:l()("North Ndebele"),ne:l()("Nepali"),ng:l()("Ndonga"),nn:l()("Norwegian Nynorsk"),no:l()("Norwegian"),ii:l()("Nuosu"),nr:l()("South Ndebele"),oc:l()("Occitan"),oj:l()("Ojibwe"),cu:l()("Old Church Slavonic"),om:l()("Oromo"),or:l()("Oriya"),os:l()("Ossetian"),pa:l()("Panjabi"),pi:l()("Pāli"),fa:l()("Persian"),pl:l()("Polish"),ps:l()("Pashto"),pt:l()("Portuguese (Brazilian)"),"pt-BR":l()("Portuguese (Brazilian)"),"pt-PT":l()("Portuguese (European)"),qu:l()("Quechua"),rm:l()("Romansh"),rn:l()("Kirundi"),ro:l()("Romanian"),ru:l()("Russian"),sa:l()("Sanskrit"),sc:l()("Sardinian"),sd:l()("Sindhi"),se:l()("Northern Sami"),sm:l()("Samoan"),sg:l()("Sango"),sr:l()("Serbian"),gd:l()("Gaelic"),sn:l()("Shona"),si:l()("Sinhala"),sk:l()("Slovak"),sl:l()("Slovene"),so:l()("Somali"),st:l()("Southern Sotho"),es:l()("Spanish"),su:l()("Sundanese"),sw:l()("Swahili"),ss:l()("Swati"),sv:l()("Swedish"),ta:l()("Tamil"),te:l()("Telugu"),tg:l()("Tajik"),th:l()("Thai"),ti:l()("Tigrinya"),bo:l()("Tibetan"),tk:l()("Turkmen"),tl:l()("Tagalog"),tn:l()("Tswana"),to:l()("Tonga"),tr:l()("Turkish"),ts:l()("Tsonga"),tt:l()("Tatar"),tw:l()("Twi"),ty:l()("Tahitian"),ug:l()("Uighur"),uk:l()("Ukrainian"),ur:l()("Urdu"),uz:l()("Uzbek"),ve:l()("Venda"),vi:l()("Vietnamese"),vo:l()("Volapük"),wa:l()("Walloon"),cy:l()("Welsh"),wo:l()("Wolof"),fy:l()("Western Frisian"),xh:l()("Xhosa"),yi:l()("Yiddish"),yo:l()("Yoruba"),za:l()("Zhuang"),zu:l()("Zulu")}}var c=["af","am","ar","az","bg","bn","bs","ca","cs","da","de","el","es","et","eu","en","fa","fi","fr","he","hi","hr","hu","hy","id","it","ja","jv","ka","kk","km","kn","ko","lt","lv","mk","mn","mr","ms","my","ne","nl","no","pl","ps","pt-BR","pt-PT","ro","ru","rw","sk","sl","sq","sr","st","sv","sw","ta","te","th","tl","tr","tn","uk","ur","uz","vi","xh","yo","zh-CN","zh-TW","zu"],f=["en","de","es","fr","ja","ko","pt","ru","zh","zh-tw"],d={ar:"ar_AR",es:"es_LA"},p=_objectSpread(_objectSpread({},f.reduce(function(e,r){return e[r]=r,e},{})),{},{en:"en-US",de:"de-DE",fr:"fr-FR","zh-tw":"zh-Hant-TW",zh:"zh-Hans"});function toIetfLanguageTag(e){var r;return(e||"").replace(/_/g,"-").split(/[;=,]/)[0].toLowerCase().replace(/(-[a-z]{1,}$)/,function(e){return e.toUpperCase()})}function getIetfLanguageTag(){try{return toIetfLanguageTag(l.a.getLocale())}catch(e){return u.a.push(["user.language.error",{error:e}]),"en-US"}}function toLanguageCode(e){return toIetfLanguageTag(e).split("-")[0]}function getLanguageCode(){return toLanguageCode(getIetfLanguageTag())}function getMomentLanguage(){var e=getIetfLanguageTag().toLowerCase();switch(e){case"zh-tw":return"zh-tw";default:return e.split("-")[0]}}function getFacebookLocaleString(){var e=getIetfLanguageTag().replace("-","_"),r=e.split("_")[0];return d[r]||e}function getCmsLocaleString(){var e=getLanguageCode();return p[e]||p.en}function languageCodeToName(e){var r,t=toIetfLanguageTag(e).split("-"),n=languageTagToName(),a,o;return t.some(function(e,r){var o=t.slice(0,t.length-r).join("-");return!!(a=n[toIetfLanguageTag(o)])})&&null!=a?a:e}function languageCodeCSVtoLanguages(e){var r=(e||"").split(/,\s*/g).filter(Boolean);return o.a.reduce(r,function(e,r){var t=e;return t[r]=languageCodeToName(r),t},{})}function isRightToLeft(e){var r=["ar","he"];return o()(r).contains(toLanguageCode(e))}function isUserRightToLeft(){return isRightToLeft(getIetfLanguageTag())}var h={A:"Á Ă Ắ Ặ Ằ Ẳ Ẵ Ǎ Â Ấ Ậ Ầ Ẩ Ẫ Ä Ǟ Ȧ Ǡ Ạ Ȁ À Ả Ȃ Ā Ą Å Ǻ Ḁ Ⱥ Ã Ɐ ᴀ",AA:"Ꜳ",AE:"Æ Ǽ Ǣ ᴁ",AO:"Ꜵ",AU:"Ꜷ",AV:"Ꜹ Ꜻ",AY:"Ꜽ",B:"Ḃ Ḅ Ɓ Ḇ Ƀ Ƃ ʙ ᴃ",C:"Ć Č Ç Ḉ Ĉ Ċ Ƈ Ȼ Ꜿ ᴄ",D:"Ď Ḑ Ḓ Ḋ Ḍ Ɗ Ḏ ǲ ǅ Đ Ƌ Ꝺ ᴅ",DZ:"Ǳ Ǆ",E:"É Ĕ Ě Ȩ Ḝ Ê Ế Ệ Ề Ể Ễ Ḙ Ë Ė Ẹ Ȅ È Ẻ Ȇ Ē Ḗ Ḕ Ę Ɇ Ẽ Ḛ Ɛ Ǝ ᴇ ⱻ",ET:"Ꝫ",F:"Ḟ Ƒ Ꝼ ꜰ",G:"Ǵ Ğ Ǧ Ģ Ĝ Ġ Ɠ Ḡ Ǥ Ᵹ ɢ ʛ",H:"Ḫ Ȟ Ḩ Ĥ Ⱨ Ḧ Ḣ Ḥ Ħ ʜ",I:"Í Ĭ Ǐ Î Ï Ḯ İ Ị Ȉ Ì Ỉ Ȋ Ī Į Ɨ Ĩ Ḭ ɪ",R:"Ꞃ Ŕ Ř Ŗ Ṙ Ṛ Ṝ Ȑ Ȓ Ṟ Ɍ Ɽ ʁ ʀ ᴙ ᴚ",S:"Ꞅ Ś Ṥ Š Ṧ Ş Ŝ Ș Ṡ Ṣ Ṩ ꜱ",T:"Ꞇ Ť Ţ Ṱ Ț Ⱦ Ṫ Ṭ Ƭ Ṯ Ʈ Ŧ ᴛ",IS:"Ꝭ",J:"Ĵ Ɉ ᴊ",K:"Ḱ Ǩ Ķ Ⱪ Ꝃ Ḳ Ƙ Ḵ Ꝁ Ꝅ ᴋ",L:"Ĺ Ƚ Ľ Ļ Ḽ Ḷ Ḹ Ⱡ Ꝉ Ḻ Ŀ Ɫ ǈ Ł Ꞁ ʟ ᴌ",LJ:"Ǉ",M:"Ḿ Ṁ Ṃ Ɱ Ɯ ᴍ",N:"Ń Ň Ņ Ṋ Ṅ Ṇ Ǹ Ɲ Ṉ Ƞ ǋ Ñ ɴ ᴎ",NJ:"Ǌ",O:"Ó Ŏ Ǒ Ô Ố Ộ Ồ Ổ Ỗ Ö Ȫ Ȯ Ȱ Ọ Ő Ȍ Ò Ỏ Ơ Ớ Ợ Ờ Ở Ỡ Ȏ Ꝋ Ꝍ Ō Ṓ Ṑ Ɵ Ǫ Ǭ Ø Ǿ Õ Ṍ Ṏ Ȭ Ɔ ᴏ ᴐ",OI:"Ƣ",OO:"Ꝏ",OU:"Ȣ ᴕ",P:"Ṕ Ṗ Ꝓ Ƥ Ꝕ Ᵽ Ꝑ ᴘ",Q:"Ꝙ Ꝗ",V:"Ʌ Ꝟ Ṿ Ʋ Ṽ ᴠ",TZ:"Ꜩ",U:"Ú Ŭ Ǔ Û Ṷ Ü Ǘ Ǚ Ǜ Ǖ Ṳ Ụ Ű Ȕ Ù Ủ Ư Ứ Ự Ừ Ử Ữ Ȗ Ū Ṻ Ų Ů Ũ Ṹ Ṵ ᴜ",VY:"Ꝡ",W:"Ẃ Ŵ Ẅ Ẇ Ẉ Ẁ Ⱳ ᴡ",X:"Ẍ Ẋ",Y:"Ý Ŷ Ÿ Ẏ Ỵ Ỳ Ƴ Ỷ Ỿ Ȳ Ɏ Ỹ ʏ",Z:"Ź Ž Ẑ Ⱬ Ż Ẓ Ȥ Ẕ Ƶ ᴢ",IJ:"Ĳ",OE:"Œ ɶ",a:"á ă ắ ặ ằ ẳ ẵ ǎ â ấ ậ ầ ẩ ẫ ä ǟ ȧ ǡ ạ ȁ à ả ȃ ā ą ᶏ ẚ å ǻ ḁ ⱥ ã ɐ ₐ",aa:"ꜳ",ae:"æ ǽ ǣ ᴂ",ao:"ꜵ",au:"ꜷ",av:"ꜹ ꜻ",ay:"ꜽ",b:"ḃ ḅ ɓ ḇ ᵬ ᶀ ƀ ƃ",o:"ɵ ó ŏ ǒ ô ố ộ ồ ổ ỗ ö ȫ ȯ ȱ ọ ő ȍ ò ỏ ơ ớ ợ ờ ở ỡ ȏ ꝋ ꝍ ⱺ ō ṓ ṑ ǫ ǭ ø ǿ õ ṍ ṏ ȭ ɔ ᶗ ᴑ ᴓ ₒ",c:"ć č ç ḉ ĉ ɕ ċ ƈ ȼ ↄ ꜿ",d:"ď ḑ ḓ ȡ ḋ ḍ ɗ ᶑ ḏ ᵭ ᶁ đ ɖ ƌ ꝺ",i:"ı í ĭ ǐ î ï ḯ ị ȉ ì ỉ ȋ ī į ᶖ ɨ ĩ ḭ ᴉ ᵢ",j:"ȷ ɟ ʄ ǰ ĵ ʝ ɉ ⱼ",dz:"ǳ ǆ",e:"é ĕ ě ȩ ḝ ê ế ệ ề ể ễ ḙ ë ė ẹ ȅ è ẻ ȇ ē ḗ ḕ ⱸ ę ᶒ ɇ ẽ ḛ ɛ ᶓ ɘ ǝ ₑ",et:"ꝫ",f:"ḟ ƒ ᵮ ᶂ ꝼ",g:"ǵ ğ ǧ ģ ĝ ġ ɠ ḡ ᶃ ǥ ᵹ ɡ ᵷ",h:"ḫ ȟ ḩ ĥ ⱨ ḧ ḣ ḥ ɦ ẖ ħ ɥ ʮ ʯ",hv:"ƕ",r:"ꞃ ŕ ř ŗ ṙ ṛ ṝ ȑ ɾ ᵳ ȓ ṟ ɼ ᵲ ᶉ ɍ ɽ ɿ ɹ ɻ ɺ ⱹ ᵣ",s:"ꞅ ſ ẜ ẛ ẝ ś ṥ š ṧ ş ŝ ș ṡ ṣ ṩ ʂ ᵴ ᶊ ȿ",t:"ꞇ ť ţ ṱ ț ȶ ẗ ⱦ ṫ ṭ ƭ ṯ ᵵ ƫ ʈ ŧ ʇ",is:"ꝭ",k:"ḱ ǩ ķ ⱪ ꝃ ḳ ƙ ḵ ᶄ ꝁ ꝅ ʞ",l:"ĺ ƚ ɬ ľ ļ ḽ ȴ ḷ ḹ ⱡ ꝉ ḻ ŀ ɫ ᶅ ɭ ł ꞁ",lj:"ǉ",m:"ḿ ṁ ṃ ɱ ᵯ ᶆ ɯ ɰ",n:"ń ň ņ ṋ ȵ ṅ ṇ ǹ ɲ ṉ ƞ ᵰ ᶇ ɳ ñ",nj:"ǌ",oi:"ƣ",oo:"ꝏ",ou:"ȣ",p:"ṕ ṗ ꝓ ƥ ᵱ ᶈ ꝕ ᵽ ꝑ",q:"ꝙ ʠ ɋ ꝗ",u:"ᴝ ú ŭ ǔ û ṷ ü ǘ ǚ ǜ ǖ ṳ ụ ű ȕ ù ủ ư ứ ự ừ ử ữ ȗ ū ṻ ų ᶙ ů ũ ṹ ṵ ᵤ",th:"ᵺ",oe:"ᴔ œ",v:"ʌ ⱴ ꝟ ṿ ʋ ᶌ ⱱ ṽ ᵥ",w:"ʍ ẃ ŵ ẅ ẇ ẉ ẁ ⱳ ẘ",y:"ʎ ý ŷ ÿ ẏ ỵ ỳ ƴ ỷ ỿ ȳ ẙ ɏ ỹ",tz:"ꜩ",ue:"ᵫ",um:"ꝸ",vy:"ꝡ",x:"ẍ ẋ ᶍ ₓ",z:"ź ž ẑ ʑ ⱬ ż ẓ ȥ ẕ ᵶ ᶎ ʐ ƶ ɀ",ff:"ﬀ",ffi:"ﬃ",ffl:"ﬄ",fi:"ﬁ",fl:"ﬂ",ij:"ĳ",st:"ﬆ"},b=o.a.chain(h).map(function(e,r){return o.a.map(e.split(" "),function(e){return[e,r]})}).flatten(!0).object().value();function latinizeText(e){return e.replace(/[^A-Za-z0-9[] ]/g,function(e){return b[e]||e})}function getMobileBadgeLanguageCode(){var e=["en","de","es","fr","ja","ko","pt-br","ru","zh-cn","zh-tw"],r=getIetfLanguageTag().toLowerCase();if(o()(e).contains(r))return r;var t=getLanguageCode();return"pt"===t?"pt-br":"es"===t?"es":"zh"===t?"zh-cn":"en"}var m=["ar","zh-tw","zh-cn","cs","da","nl","en","fr","fi","de","el","he","hi","id","it","ja","ko","no","pl","pt-br","ru","es","sk","sv","th","tr","vi"],v=function isFullySupportedLocale(e){return m.includes(e.toLowerCase())},T=function getUserLanguageCode(){var e=i.a.get().locale;if(!e||"en_US"===e)return"en";return e.replace("_","-")},L=function rtlStyle(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.a.getLocale();return isRightToLeft(r)?Object(g.a)(e):e},k=function getLanguageDirection(){return isUserRightToLeft()?"rtl":"ltr"};e.default={languageCodeCSVtoLanguages:languageCodeCSVtoLanguages,languageCodeToName:languageCodeToName,latinizeText:latinizeText,isRightToLeft:isRightToLeft,courseLanguageTags:c,getIetfLanguageTag:getIetfLanguageTag,getLanguageCode:getLanguageCode,getMomentLanguage:getMomentLanguage,getFacebookLocaleString:getFacebookLocaleString,getCmsLocaleString:getCmsLocaleString,toIetfLanguageTag:toIetfLanguageTag,toLanguageCode:toLanguageCode,getMobileBadgeLanguageCode:getMobileBadgeLanguageCode,supportedLanguageSubdomains:f,isFullySupportedLocale:v,rtlStyle:L,getUserLanguageCode:T,getLanguageDirection:k}}}]);
//# sourceMappingURL=en.10.cdbe48cd6933dd9c5364.js.map