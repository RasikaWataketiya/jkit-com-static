;window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="3779b91f2cde9ddfd987491bc56e1975";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){'use strict'
CloudflareApps.internal=CloudflareApps.internal||{}
var errors=[]
CloudflareApps.internal.placementErrors=errors
var errorHashes={}
function noteError(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'')
if(errorHashes[hash]){return}
errorHashes[hash]=true
errors.push(options)}
var initializedSelectors={}
var currentInit=false
CloudflareApps.internal.markSelectors=function markSelectors(){if(!currentInit){check()
currentInit=true
setTimeout(function(){currentInit=false})}}
function check(){var installs=window.CloudflareApps.installs
for(var installId in installs){if(!installs.hasOwnProperty(installId)){continue}
var selectors=installs[installId].selectors
if(!selectors){continue}
for(var key in selectors){if(!selectors.hasOwnProperty(key)){continue}
var hash=installId+'::'+key
if(initializedSelectors[hash]){continue}
var els=document.querySelectorAll(selectors[key])
if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId})
initializedSelectors[hash]=true
continue}else if(!els||!els.length){continue}
initializedSelectors[hash]=true
els[0].setAttribute('cfapps-selector',selectors[key])}}}
CloudflareApps.querySelector=function querySelector(selector){if(selector==='body'||selector==='head'){return document[selector]}
CloudflareApps.internal.markSelectors()
var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]')
if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector})
els=document.querySelectorAll(selector)
if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector})
return null}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector})}
return els[0]}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector})}
return els[0]}}());(function(){'use strict'
var prevEls={}
CloudflareApps.createElement=function createElement(options,prevEl){options=options||{}
CloudflareApps.internal.markSelectors()
try{if(prevEl&&prevEl.parentNode){var replacedEl
if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId]}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl)
delete prevEls[prevEl.cfAppsElementId]}else{prevEl.parentNode.removeChild(prevEl)}}
var element=document.createElement('cloudflare-app')
var container
if(options.pages&&options.pages.URLPatterns&&!CloudflareApps.matchPage(options.pages.URLPatterns)){return element}
try{container=CloudflareApps.querySelector(options.selector)}catch(e){}
if(!container){return element}
if(!container.parentNode&&(options.method==='after'||options.method==='before'||options.method==='replace')){return element}
if(container===document.body){if(options.method==='after'){options.method='append'}else if(options.method==='before'){options.method='prepend'}}
switch(options.method){case'prepend':if(container.firstChild){container.insertBefore(element,container.firstChild)
break}
case'append':container.appendChild(element)
break
case'after':if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling)}else{container.parentNode.appendChild(element)}
break
case'before':container.parentNode.insertBefore(element,container)
break
case'replace':try{var id=element.cfAppsElementId=Math.random().toString(36)
prevEls[id]=container}catch(e){}
container.parentNode.replaceChild(element,container)}
return element}catch(e){if(typeof console!=='undefined'&&typeof console.error!=='undefined'){console.error('Error creating Cloudflare Apps element',e)}}}}());(function(){'use strict'
CloudflareApps.matchPage=function matchPage(patterns){if(!patterns||!patterns.length){return true}
var loc=document.location.host+document.location.pathname
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed
loc=url.host+url.path}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i')
if(re.test(loc)){return true}}
return false}}());CloudflareApps.installs["2nJD6GdehGET"]={appId:"_7PP1aL2bH0-",scope:{}};;CloudflareApps.installs["2nJD6GdehGET"].options={"customerId":"keells"};;if(CloudflareApps.matchPage(CloudflareApps.installs['2nJD6GdehGET'].URLPatterns)){(function(){var showPreview=function(){var initialBodyOverflow=document.body.style.overflow;document.body.style.overflow="hidden";var qframe=document.createElement("iframe");qframe.setAttribute("id","queueframe");qframe.setAttribute("style","position: absolute; left: 0; right: 0; bottom: 0; top: 0px; z-index:2147483647; ");qframe.setAttribute("width","100%");qframe.setAttribute("height","100%");qframe.setAttribute("frameborder","0");qframe.setAttribute("src","https://static.assets-queue-it.net/cloudflare/cf01.html");var pageBody=document.body;pageBody.insertBefore(qframe,pageBody.firstChild);setTimeout(function(){document.getElementById("queueframe").style.display="none";if(!initialBodyOverflow){document.body.style.overflow="visible";}
else{document.body.style.overflow=initialBodyOverflow;}},40000);};var isPreview="2nJD6GdehGET"=='preview';var customerId=CloudflareApps.installs['2nJD6GdehGET'].options["customerId"];if(customerId&&!isPreview){var script=document.createElement("script");script.type="text/javascript";script.src="https://static.assets-queue-it.net/script/cloudflare.min.js";script.setAttribute('data-queueit-c',customerId);script.setAttribute('data-queueit-jsHost',"https://assets.assets-queue-it.net/");var firstScript=document.getElementsByTagName('script')[0];firstScript.parentNode.insertBefore(script,firstScript);}
else if(isPreview){if(document.addEventListener){document.addEventListener("DOMContentLoaded",showPreview,false);}
else{window.attachEvent("onload",showPreview);}}})();}