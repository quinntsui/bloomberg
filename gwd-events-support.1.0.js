var gwd=gwd||{};gwd.actions=gwd.actions||{};gwd.actions.events=gwd.actions.events||{};gwd.actions.events.getElementById=function(id){var element=document.getElementById(id);if(!element){var pageDeck=document.querySelector("[is=gwd-pagedeck]");if(pageDeck){if(typeof pageDeck.getElementById==="function"){element=pageDeck.getElementById(id)}}}if(!element){switch(id){case"document.body":element=document.body;break;case"document":element=document;break;case"window":element=window;break;default:break}}return element};gwd.actions.events.addHandler=function(eventTarget,eventName,eventHandler,useCapture){var targetElement=gwd.actions.events.getElementById(eventTarget);if(targetElement){targetElement.addEventListener(eventName,eventHandler,useCapture)}};gwd.actions.events.removeHandler=function(eventTarget,eventName,eventHandler,useCapture){var targetElement=gwd.actions.events.getElementById(eventTarget);if(targetElement){targetElement.removeEventListener(eventName,eventHandler,useCapture)}};gwd.actions.events.setInlineStyle=function(id,styles){var element=gwd.actions.events.getElementById(id);if(!element||!styles){return}var transitionProperty=element.style.transition!==undefined?"transition":"-webkit-transition";var prevTransition=element.style[transitionProperty];var splitStyles=styles.split(/\s*;\s*/);var nameValue;splitStyles.forEach(function(splitStyle){if(splitStyle){var regex=new RegExp("[:](?![/]{2})");nameValue=splitStyle.split(regex);nameValue[1]=nameValue[1]?nameValue[1].trim():null;if(!(nameValue[0]&&nameValue[1])){return}element.style.setProperty(nameValue[0],nameValue[1])}});function restoreTransition(event){var el=event.target;el.style.transition=prevTransition;el.removeEventListener(event.type,restoreTransition,false)}element.addEventListener("transitionend",restoreTransition,false);element.addEventListener("webkitTransitionEnd",restoreTransition,false)};gwd.actions.timeline=gwd.actions.timeline||{};gwd.actions.timeline.dispatchTimedEvent=function(event){event.stopPropagation();var customEventTarget=event.target;if(customEventTarget){var customEventName=customEventTarget.getAttribute("data-event-name");if(customEventName){var event=document.createEvent("CustomEvent");event.initCustomEvent(customEventName,true,true,null);customEventTarget.dispatchEvent(event)}}};gwd.actions.timeline.captureAnimationEnd=function(element){if(!element){return}var animationEndEvents=["animationend","webkitAnimationEnd"];for(var i=0;i<animationEndEvents.length;i++){element.addEventListener(animationEndEvents[i],gwd.actions.timeline.dispatchTimedEvent,true)}};gwd.actions.timeline.releaseAnimationEnd=function(element){if(!element){return}var animationEndEvents=["animationend","webkitAnimationEnd"];for(var i=0;i<animationEndEvents.length;i++){element.removeEventListener(animationEndEvents[i],gwd.actions.timeline.dispatchTimedEvent,true)}};gwd.actions.timeline.timelineAnimationRegistry={};gwd.actions.timeline.pauseAnimationClassName="gwd-pause-animation";gwd.actions.timeline.reflow=function(el){el.offsetWidth=el.offsetWidth};gwd.actions.timeline.pause=function(id){var el=gwd.actions.events.getElementById(id);el&&el.classList&&el.classList.add(gwd.actions.timeline.pauseAnimationClassName)};gwd.actions.timeline.play=function(id){var el=gwd.actions.events.getElementById(id);el&&el.classList&&el.classList.remove(gwd.actions.timeline.pauseAnimationClassName)};gwd.actions.timeline.togglePlay=function(id){var el=gwd.actions.events.getElementById(id);el&&el.classList&&el.classList.toggle(gwd.actions.timeline.pauseAnimationClassName)};gwd.actions.timeline.gotoAndPlay=function(id,animClass){var el=gwd.actions.events.getElementById(id);if(!(el&&el.classList&&id&&animClass)){return false}var className=gwd.actions.timeline.timelineAnimationRegistry[id];className&&el.classList.remove(className);gwd.actions.timeline.play(id);if(className==animClass){gwd.actions.timeline.reflow(el)}el.classList.add(animClass);gwd.actions.timeline.timelineAnimationRegistry[id]=animClass;return true};gwd.actions.timeline.gotoAndPause=function(id,animClass){var el=gwd.actions.events.getElementById(id);if(!(el&&el.classList)){return false}if(gwd.actions.timeline.gotoAndPlay(id,animClass)){var timeoutId=window.setTimeout(function(){gwd.actions.timeline.pause(id)},40)}return!!timeoutId};gwd.actions.gwdDoubleclick=gwd.actions.gwdDoubleclick||{};gwd.actions.gwdDoubleclick.exit=function(receiver,exitId,url,opt_collapseOnExit,opt_pauseMedia){gwd.actions.events.getElementById(receiver).exit(exitId,url,opt_collapseOnExit,opt_pauseMedia)}
