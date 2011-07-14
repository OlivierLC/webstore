//----------------------------UI.CORE------------------------------------//
/*
 * jQuery UI 1.6rc5
 *
 * Copyright (c) 2009 AUTHORS.txt (http://ui.jquery.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */
;(function($){var _remove=$.fn.remove,isFF2=$.browser.mozilla&&(parseFloat($.browser.version)<1.9);$.ui={version:"1.6rc5",plugin:{add:function(module,option,set){var proto=$.ui[module].prototype;for(var i in set){proto.plugins[i]=proto.plugins[i]||[];proto.plugins[i].push([option,set[i]])}},call:function(instance,name,args){var set=instance.plugins[name];if(!set){return}for(var i=0;i<set.length;i++){if(instance.options[set[i][0]]){set[i][1].apply(instance.element,args)}}}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},cssCache:{},css:function(name){if($.ui.cssCache[name]){return $.ui.cssCache[name]}var tmp=$('<div class="ui-gen"></div>').addClass(name).css({position:'absolute',top:'-5000px',left:'-5000px',display:'block'}).appendTo('body');$.ui.cssCache[name]=!!((!(/auto|default/).test(tmp.css('cursor'))||(/^[1-9]/).test(tmp.css('height'))||(/^[1-9]/).test(tmp.css('width'))||!(/none/).test(tmp.css('backgroundImage'))||!(/transparent|rgba\(0, 0, 0, 0\)/).test(tmp.css('backgroundColor'))));try{$('body').get(0).removeChild(tmp.get(0))}catch(e){}return $.ui.cssCache[name]},hasScroll:function(el,a){if($(el).css('overflow')=='hidden'){return false}var scroll=(a&&a=='left')?'scrollLeft':'scrollTop',has=false;if(el[scroll]>0){return true}el[scroll]=1;has=(el[scroll]>0);el[scroll]=0;return has},isOverAxis:function(x,reference,size){return(x>reference)&&(x<(reference+size))},isOver:function(y,x,top,left,height,width){return $.ui.isOverAxis(y,top,height)&&$.ui.isOverAxis(x,left,width)},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};if(isFF2){var attr=$.attr,removeAttr=$.fn.removeAttr,ariaNS="http://www.w3.org/2005/07/aaa",ariaState=/^aria-/,ariaRole=/^wairole:/;$.attr=function(elem,name,value){var set=value!==undefined;return(name=='role'?(set?attr.call(this,elem,name,"wairole:"+value):(attr.apply(this,arguments)||"").replace(ariaRole,"")):(ariaState.test(name)?(set?elem.setAttributeNS(ariaNS,name.replace(ariaState,"aaa:"),value):attr.call(this,elem,name.replace(ariaState,"aaa:"))):attr.apply(this,arguments)))};$.fn.removeAttr=function(name){return(ariaState.test(name)?this.each(function(){this.removeAttributeNS(ariaNS,name.replace(ariaState,""))}):removeAttr.call(this,name))}}$.fn.extend({remove:function(){$("*",this).add(this).each(function(){$(this).triggerHandler("remove")});return _remove.apply(this,arguments)},enableSelection:function(){return this.attr('unselectable','off').css('MozUserSelect','').unbind('selectstart.ui')},disableSelection:function(){return this.attr('unselectable','on').css('MozUserSelect','none').bind('selectstart.ui',function(){return false})},scrollParent:function(){var scrollParent;if(($.browser.msie&&(/(static|relative)/).test(this.css('position')))||(/absolute/).test(this.css('position'))){scrollParent=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test($.curCSS(this,'position',1))&&(/(auto|scroll)/).test($.curCSS(this,'overflow',1)+$.curCSS(this,'overflow-y',1)+$.curCSS(this,'overflow-x',1))}).eq(0)}else{scrollParent=this.parents().filter(function(){return(/(auto|scroll)/).test($.curCSS(this,'overflow',1)+$.curCSS(this,'overflow-y',1)+$.curCSS(this,'overflow-x',1))}).eq(0)}return(/fixed/).test(this.css('position'))||!scrollParent.length?$(document):scrollParent}});$.extend($.expr[':'],{data:function(elem,i,match){return!!$.data(elem,match[3])},tabbable:function(elem){var nodeName=elem.nodeName.toLowerCase();function isVisible(element){return!($(element).is(':hidden')||$(element).parents(':hidden').length)}return(elem.tabIndex>=0&&(('a'==nodeName&&elem.href)||(/input|select|textarea|button/.test(nodeName)&&'hidden'!=elem.type&&!elem.disabled))&&isVisible(elem))}});function getter(namespace,plugin,method,args){function getMethods(type){var methods=$[namespace][plugin][type]||[];return(typeof methods=='string'?methods.split(/,?\s+/):methods)}var methods=getMethods('getter');if(args.length==1&&typeof args[0]=='string'){methods=methods.concat(getMethods('getterSetter'))}return($.inArray(method,methods)!=-1)}$.widget=function(name,prototype){var namespace=name.split(".")[0];name=name.split(".")[1];$.fn[name]=function(options){var isMethodCall=(typeof options=='string'),args=Array.prototype.slice.call(arguments,1);if(isMethodCall&&options.substring(0,1)=='_'){return this}if(isMethodCall&&getter(namespace,name,options,args)){var instance=$.data(this[0],name);return(instance?instance[options].apply(instance,args):undefined)}return this.each(function(){var instance=$.data(this,name);(!instance&&!isMethodCall&&$.data(this,name,new $[namespace][name](this,options)));(instance&&isMethodCall&&$.isFunction(instance[options])&&instance[options].apply(instance,args))})};$[namespace]=$[namespace]||{};$[namespace][name]=function(element,options){var self=this;this.namespace=namespace;this.widgetName=name;this.widgetEventPrefix=$[namespace][name].eventPrefix||name;this.widgetBaseClass=namespace+'-'+name;this.options=$.extend({},$.widget.defaults,$[namespace][name].defaults,$.metadata&&$.metadata.get(element)[name],options);this.element=$(element).bind('setData.'+name,function(event,key,value){if(event.target==element){return self._setData(key,value)}}).bind('getData.'+name,function(event,key){if(event.target==element){return self._getData(key)}}).bind('remove',function(){return self.destroy()});this._init()};$[namespace][name].prototype=$.extend({},$.widget.prototype,prototype);$[namespace][name].getterSetter='option'};$.widget.prototype={_init:function(){},destroy:function(){this.element.removeData(this.widgetName).removeClass(this.widgetBaseClass+'-disabled'+' '+this.namespace+'-state-disabled').removeAttr('aria-disabled')},option:function(key,value){var options=key,self=this;if(typeof key=="string"){if(value===undefined){return this._getData(key)}options={};options[key]=value}$.each(options,function(key,value){self._setData(key,value)})},_getData:function(key){return this.options[key]},_setData:function(key,value){this.options[key]=value;if(key=='disabled'){this.element[value?'addClass':'removeClass'](this.widgetBaseClass+'-disabled'+' '+this.namespace+'-state-disabled').attr("aria-disabled",value)}},enable:function(){this._setData('disabled',false)},disable:function(){this._setData('disabled',true)},_trigger:function(type,event,data){var callback=this.options[type],eventName=(type==this.widgetEventPrefix?type:this.widgetEventPrefix+type);event=$.Event(event);event.type=eventName;this.element.trigger(event,data);return!($.isFunction(callback)&&callback.call(this.element[0],event,data)===false||event.isDefaultPrevented())}};$.widget.defaults={disabled:false};$.ui.mouse={_mouseInit:function(){var self=this;this.element.bind('mousedown.'+this.widgetName,function(event){return self._mouseDown(event)}).bind('click.'+this.widgetName,function(event){if(self._preventClickEvent){self._preventClickEvent=false;return false}});if($.browser.msie){this._mouseUnselectable=this.element.attr('unselectable');this.element.attr('unselectable','on')}this.started=false},_mouseDestroy:function(){this.element.unbind('.'+this.widgetName);($.browser.msie&&this.element.attr('unselectable',this._mouseUnselectable))},_mouseDown:function(event){(this._mouseStarted&&this._mouseUp(event));this._mouseDownEvent=event;var self=this,btnIsLeft=(event.which==1),elIsCancel=(typeof this.options.cancel=="string"?$(event.target).parents().add(event.target).filter(this.options.cancel).length:false);if(!btnIsLeft||elIsCancel||!this._mouseCapture(event)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){self.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=(this._mouseStart(event)!==false);if(!this._mouseStarted){event.preventDefault();return true}}this._mouseMoveDelegate=function(event){return self._mouseMove(event)};this._mouseUpDelegate=function(event){return self._mouseUp(event)};$(document).bind('mousemove.'+this.widgetName,this._mouseMoveDelegate).bind('mouseup.'+this.widgetName,this._mouseUpDelegate);($.browser.safari||event.preventDefault());return true},_mouseMove:function(event){if($.browser.msie&&!event.button){return this._mouseUp(event)}if(this._mouseStarted){this._mouseDrag(event);return event.preventDefault()}if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,event)!==false);(this._mouseStarted?this._mouseDrag(event):this._mouseUp(event))}return!this._mouseStarted},_mouseUp:function(event){$(document).unbind('mousemove.'+this.widgetName,this._mouseMoveDelegate).unbind('mouseup.'+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=true;this._mouseStop(event)}return false},_mouseDistanceMet:function(event){return(Math.max(Math.abs(this._mouseDownEvent.pageX-event.pageX),Math.abs(this._mouseDownEvent.pageY-event.pageY))>=this.options.distance)},_mouseDelayMet:function(event){return this.mouseDelayMet},_mouseStart:function(event){},_mouseDrag:function(event){},_mouseStop:function(event){},_mouseCapture:function(event){return true}};$.ui.mouse.defaults={cancel:null,distance:1,delay:0}})(jQuery);