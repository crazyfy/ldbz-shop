/*!Name: similar.js
 * Date: 2017-2-14 17:14:17 */
define("MOD_ROOT/js/similar",function(require,exports,module){function i(i,e){var s={ebook:{param:{p:619053,sku:i.skuid,ck:"pin,bview",lim:18},ext:{imgWidth:100,imgHeight:100},height:184},other:{param:{p:103e3,sku:i.skuid,ck:"pin",lim:12},ext:{imgWidth:100,imgHeight:100},height:184}},m="";m=i.isEBook?"ebook":"other",new t({$el:$("#similar .list"),skuHooks:"SKUS_nostock",template:a,ext:s[m].ext,param:s[m].param,loadPrice:!1,callback:function(t,a){var r=e.find(".list"),l=e.find(".arrow-prev"),n=e.find(".arrow-next"),c=o.wideVersion?7:6;if(t){if(e.show(),i.isEBook&&a.success){var d=[];$.each(a.data,function(i,e){d.push(e.sku)});var h=require("MOD_ROOT/js/ebook").priceNum,g={skus:d,$el:e};h(g)}}else e.hide();r.imgScroll({width:156,height:s[m].height,visible:c,showControl:!0,status:!0,statusWrapSelector:".page-num",step:c,loop:!1,prev:l,next:n})}})}function e(e,t){return e.isEBook?void i(e,t):void s.addListener("onStockReady",function(){e.havestock?t.hide():i(e,t)})}var t=require("MOD_ROOT/js/recommend"),s=require("MOD_ROOT/js/event").Event,o=require("MOD_ROOT/js/core");require("MOD_ROOT/css/similar.css"),require("PLG_ROOT/js/jQuery.imgScroll");var a='        <ul class="plist">        {for item in data}        <li class="fore${Number(item_index)+1}"             data-clk="${item.clk}"             data-push="${pageConfig[skuHooks].push(item.sku)}">            <div class="p-img ac">                <a target="_blank" title="${item.t}" href="//item.jd.com/${item.sku}.html">                    <img height="{if ext.imgHeight}${ext.imgHeight}{else}100{/if}" width="{if ext.imgWidth}${ext.imgWidth}{else}100{/if}" alt="${item.t}" src="${pageConfig.FN_GetImageDomain(item.sku)}n1/s${ext.imgWidth}x${ext.imgHeight}_${item.img}">                </a>            </div>            <div class="p-name"><a target="_blank" title="${item.t}" href="//item.jd.com/${item.sku}.html">${item.t}</a></div>            <div class="p-price"><strong class="J-p-${item.sku}">${item.jp}</strong></div>        </li>        {/for}        </ul>';module.exports.__id="similar",module.exports.init=e});