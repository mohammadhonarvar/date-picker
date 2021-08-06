define(["exports"],function(_exports){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.__asyncDelegator=__asyncDelegator;_exports.__asyncGenerator=__asyncGenerator;_exports.__asyncValues=__asyncValues;_exports.__await=__await;_exports.__awaiter=__awaiter;_exports.__classPrivateFieldGet=__classPrivateFieldGet;_exports.__classPrivateFieldSet=__classPrivateFieldSet;_exports.__createBinding=__createBinding;_exports.__decorate=__decorate;_exports.__exportStar=__exportStar;_exports.__extends=__extends;_exports.__generator=__generator;_exports.__importDefault=__importDefault;_exports.__importStar=__importStar;_exports.__makeTemplateObject=__makeTemplateObject;_exports.__metadata=__metadata;_exports.__param=__param;_exports.__read=__read;_exports.__rest=__rest;_exports.__spread=__spread;_exports.__spreadArrays=__spreadArrays;_exports.__values=__values;_exports.eventOptions$1=_exports.eventOptions=eventOptions;_exports.insertNodeIntoTemplate=insertNodeIntoTemplate;_exports.internalProperty$1=_exports.internalProperty=internalProperty;_exports.property$1=_exports.property=property;_exports.query$1=_exports.query=query;_exports.queryAll$1=_exports.queryAll=queryAll;_exports.queryAssignedNodes$1=_exports.queryAssignedNodes=queryAssignedNodes;_exports.queryAsync$1=_exports.queryAsync=queryAsync;_exports.removeNodesFromTemplate=removeNodesFromTemplate;_exports.templateFactory$1=_exports.templateFactory=templateFactory;_exports.defaultTemplateProcessor=_exports.defaultConverter$1=_exports.defaultConverter=_exports.customElement$1=_exports.customElement=_exports.css$1=_exports.css=_exports.createMarker$1=_exports.createMarker=_exports.convertStringToNumberArray=_exports.clock=_exports.classMap=_exports.calendarBaseStyle=_exports.calendar=_exports.boundAttributeSuffix=_exports.arrowForward=_exports.arrowBackward=_exports.addLeadingZero=_exports.__assign=_exports.YearList=_exports.WeekLabelList=_exports.UpdatingElement$1=_exports.UpdatingElement=_exports.TemplateResult$3=_exports.TemplateResult$2=_exports.TemplateResult$1=_exports.TemplateResult=_exports.TemplateInstance$1=_exports.TemplateInstance=_exports.Template$1=_exports.Template=_exports.SolarCalendarElement=_exports.SVGTemplateResult$2=_exports.SVGTemplateResult$1=_exports.SVGTemplateResult=_exports.PropertyPart$1=_exports.PropertyPart=_exports.PropertyCommitter$1=_exports.PropertyCommitter=_exports.NodePart$1=_exports.NodePart=_exports.MonthList=_exports.LitElement=_exports.HeaderElement=_exports.GregorianCalendarElement=_exports.EventPart$1=_exports.EventPart=_exports.DefaultTemplateProcessor$1=_exports.DefaultTemplateProcessor=_exports.DecadeList=_exports.DatePicker=_exports.ClockElement=_exports.CSSResult$1=_exports.CSSResult=_exports.BooleanAttributePart$1=_exports.BooleanAttributePart=_exports.BaseElement=_exports.AttributePart$1=_exports.AttributePart=_exports.AttributeCommitter$1=_exports.AttributeCommitter=_exports.$yearList=_exports.$weekLabels=_exports.$updatingElement=_exports.$tslibEs6=_exports.$templateResult=_exports.$templateInstance=_exports.$templateFactory=_exports.$template=_exports.$solarCalendar=_exports.$solar=_exports.$shadyRender=_exports.$render=_exports.$parts=_exports.$part=_exports.$monthList=_exports.$modifyTemplate=_exports.$litHtml=_exports.$litElement=_exports.$ifDefined=_exports.$icon=_exports.$header=_exports.$gregorianCalendar=_exports.$gregorian=_exports.$fixPersianNumber=_exports.$dom=_exports.$directive=_exports.$defaultTemplateProcessor=_exports.$decorators=_exports.$decadeList=_exports.$datePicker=_exports.$cssTag=_exports.$convertStringToNumberArray=_exports.$clock=_exports.$classMap=_exports.$calendarBaseDefault=_exports.$calendarBase=_exports.$baseStyle=_exports.$baseElement=_exports.$addLeadingZero=void 0;_exports.weekDayList$1=_exports.weekDayList=_exports.unsafeCSS$1=_exports.unsafeCSS=_exports.templateCaches$1=_exports.templateCaches=_exports.svg$2=_exports.svg$1=_exports.svg=_exports.supportsAdoptingStyleSheets$1=_exports.supportsAdoptingStyleSheets=_exports.shadyTemplateFactory=_exports.reparentNodes$1=_exports.reparentNodes=_exports.render$1=_exports.render$2=_exports.render=_exports.removeNodes$1=_exports.removeNodes=_exports.parts$1=_exports.parts=_exports.nothing$1=_exports.nothing=_exports.notEqual$1=_exports.notEqual=_exports.nodeMarker=_exports.noChange$1=_exports.noChange=_exports.monthsDaysCount$1=_exports.monthsDaysCount=_exports.monthList$1=_exports.monthList=_exports.markerRegex=_exports.marker=_exports.lastAttributeNameRegex=_exports.isTemplatePartActive$1=_exports.isTemplatePartActive=_exports.isPrimitive$1=_exports.isPrimitive=_exports.isIterable$1=_exports.isIterable=_exports.isDirective$1=_exports.isDirective=_exports.isCEPolyfill=_exports.ifDefined=_exports.html$2=_exports.html$1=_exports.html=_exports.fixPersianNumber=_exports.directive$1=_exports.directive=_exports.defaultTemplateProcessor$1=void 0;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p]};return extendStatics(d,b)};function __extends(d,b){extendStatics(d,b);function __(){this.constructor=d}d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}var __assign=function(){_exports.__assign=__assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p]}return t};return __assign.apply(this,arguments)};_exports.__assign=__assign;function __rest(s,e){var t={};for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p)&&0>e.indexOf(p))t[p]=s[p];if(null!=s&&"function"===typeof Object.getOwnPropertySymbols)for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(0>e.indexOf(p[i])&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]]}return t}function __decorate(decorators,target,key,desc){var c=arguments.length,r=3>c?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;0<=i;i--)if(d=decorators[i])r=(3>c?d(r):3<c?d(target,key,r):d(target,key))||r;return 3<c&&r&&Object.defineProperty(target,key,r),r}function __param(paramIndex,decorator){return function(target,key){decorator(target,key,paramIndex)}}function __metadata(metadataKey,metadataValue){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(metadataKey,metadataValue)}function __awaiter(thisArg,_arguments,P,generator){function adopt(value){return value instanceof P?value:new P(function(resolve){resolve(value)})}return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator["throw"](value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):adopt(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())})}function __generator(thisArg,body){var _={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),throw:verb(1),return:verb(2)},"function"===typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=2&op[0]?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[2&op[0],t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:!1};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=0<t.length&&t[t.length-1])&&(6===op[0]||2===op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1];t=op;break}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_)}catch(e){op=[6,e];y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}}function __createBinding(o,m,k,k2){if(k2===void 0)k2=k;o[k2]=m[k]}function __exportStar(m,exports){for(var p in m)if("default"!==p&&!exports.hasOwnProperty(p))exports[p]=m[p]}function __values(o){var s="function"===typeof Symbol&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&"number"===typeof o.length)return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o}}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(o,n){var m="function"===typeof Symbol&&o[Symbol.iterator];if(!m)return o;var i=m.call(o),r,ar=[],e;try{while((void 0===n||0<n--)&&!(r=i.next()).done)ar.push(r.value)}catch(error){e={error:error}}finally{try{if(r&&!r.done&&(m=i["return"]))m.call(i)}finally{if(e)throw e.error}}return ar}function __spread(){for(var ar=[],i=0;i<arguments.length;i++)ar=ar.concat(__read(arguments[i]));return ar}function __spreadArrays(){for(var s=0,i=0,il=arguments.length;i<il;i++)s+=arguments[i].length;for(var r=Array(s),k=0,i=0;i<il;i++)for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++)r[k]=a[j];return r};function __await(v){return this instanceof __await?(this.v=v,this):new __await(v)}function __asyncGenerator(thisArg,_arguments,generator){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var g=generator.apply(thisArg,_arguments||[]),i,q=[];return i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this},i;function verb(n){if(g[n])i[n]=function(v){return new Promise(function(a,b){1<q.push([n,v,a,b])||resume(n,v)})}}function resume(n,v){try{step(g[n](v))}catch(e){settle(q[0][3],e)}}function step(r){r.value instanceof __await?Promise.resolve(r.value.v).then(fulfill,reject):settle(q[0][2],r)}function fulfill(value){resume("next",value)}function reject(value){resume("throw",value)}function settle(f,v){if(f(v),q.shift(),q.length)resume(q[0][0],q[0][1])}}function __asyncDelegator(o){var i,p;return i={},verb("next"),verb("throw",function(e){throw e}),verb("return"),i[Symbol.iterator]=function(){return this},i;function verb(n,f){i[n]=o[n]?function(v){return(p=!p)?{value:__await(o[n](v)),done:"return"===n}:f?f(v):v}:f}}function __asyncValues(o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var m=o[Symbol.asyncIterator],i;return m?m.call(o):(o="function"===typeof __values?__values(o):o[Symbol.iterator](),i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this},i);function verb(n){i[n]=o[n]&&function(v){return new Promise(function(resolve,reject){v=o[n](v),settle(resolve,reject,v.done,v.value)})}}function settle(resolve,reject,d,v){Promise.resolve(v).then(function(v){resolve({value:v,done:d})},reject)}}function __makeTemplateObject(cooked,raw){if(Object.defineProperty){Object.defineProperty(cooked,"raw",{value:raw})}else{cooked.raw=raw}return cooked};function __importStar(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)if(Object.hasOwnProperty.call(mod,k))result[k]=mod[k];result.default=mod;return result}function __importDefault(mod){return mod&&mod.__esModule?mod:{default:mod}}function __classPrivateFieldGet(receiver,privateMap){if(!privateMap.has(receiver)){throw new TypeError("attempted to get private field on non-instance")}return privateMap.get(receiver)}function __classPrivateFieldSet(receiver,privateMap,value){if(!privateMap.has(receiver)){throw new TypeError("attempted to set private field on non-instance")}privateMap.set(receiver,value);return value}var tslib_es6={__proto__:null,__extends:__extends,get __assign(){return __assign},__rest:__rest,__decorate:__decorate,__param:__param,__metadata:__metadata,__awaiter:__awaiter,__generator:__generator,__createBinding:__createBinding,__exportStar:__exportStar,__values:__values,__read:__read,__spread:__spread,__spreadArrays:__spreadArrays,__await:__await,__asyncGenerator:__asyncGenerator,__asyncDelegator:__asyncDelegator,__asyncValues:__asyncValues,__makeTemplateObject:__makeTemplateObject,__importStar:__importStar,__importDefault:__importDefault,__classPrivateFieldGet:__classPrivateFieldGet,__classPrivateFieldSet:__classPrivateFieldSet};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */ /**
        * True if the custom elements polyfill is in use.
        */_exports.$tslibEs6=tslib_es6;const isCEPolyfill="undefined"!==typeof window&&null!=window.customElements&&window.customElements.polyfillWrapFlushCallback!==void 0;/**
                                                                                                                                                              * Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
                                                                                                                                                              * into another container (could be the same container), before `before`. If
                                                                                                                                                              * `before` is null, it appends the nodes to the container.
                                                                                                                                                              */_exports.isCEPolyfill=isCEPolyfill;const reparentNodes=(container,start,end=null,before=null)=>{while(start!==end){const n=start.nextSibling;container.insertBefore(start,before);start=n}};/**
    * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
    * `container`.
    */_exports.reparentNodes$1=_exports.reparentNodes=reparentNodes;const removeNodes=(container,start,end=null)=>{while(start!==end){const n=start.nextSibling;container.removeChild(start);start=n}};_exports.removeNodes$1=_exports.removeNodes=removeNodes;var dom={__proto__:null,isCEPolyfill:isCEPolyfill,reparentNodes:reparentNodes,removeNodes:removeNodes};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */ /**
        * An expression marker with embedded unique key to avoid collision with
        * possible text in templates.
        */_exports.$dom=dom;const marker=`{{lit-${(Math.random()+"").slice(2)}}}`;/**
                                                                    * An expression marker used text-positions, multi-binding attributes, and
                                                                    * attributes with markup-like text values.
                                                                    */_exports.marker=marker;const nodeMarker=`<!--${marker}-->`;_exports.nodeMarker=nodeMarker;const markerRegex=new RegExp(`${marker}|${nodeMarker}`);/**
                                                                   * Suffix appended to all bound attribute names.
                                                                   */_exports.markerRegex=markerRegex;const boundAttributeSuffix="$lit$";/**
                                              * An updatable Template that tracks the location of dynamic parts.
                                              */_exports.boundAttributeSuffix=boundAttributeSuffix;class Template{constructor(result,element){this.parts=[];this.element=element;const nodesToRemove=[],stack=[],walker=document.createTreeWalker(element.content,133/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */,null,!1);// Keeps track of the last index associated with a part. We try to delete
// unnecessary nodes, but we never want to associate two different parts
// to the same index. They must have a constant node between.
let lastPartIndex=0,index=-1,partIndex=0;const{strings,values:{length}}=result;while(partIndex<length){const node=walker.nextNode();if(null===node){// We've exhausted the content inside a nested template element.
// Because we still have parts (the outer for-loop), we know:
// - There is a template in the stack
// - The walker will find a nextNode outside the template
walker.currentNode=stack.pop();continue}index++;if(1===node.nodeType/* Node.ELEMENT_NODE */){if(node.hasAttributes()){const attributes=node.attributes,{length}=attributes;// Per
// https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
// attributes are not guaranteed to be returned in document order.
// In particular, Edge/IE can return them out of order, so we cannot
// assume a correspondence between part index and attribute index.
let count=0;for(let i=0;i<length;i++){if(endsWith(attributes[i].name,boundAttributeSuffix)){count++}}while(0<count--){// Get the template literal section leading up to the first
// expression in this attribute
const stringForPart=strings[partIndex],name=lastAttributeNameRegex.exec(stringForPart)[2],attributeLookupName=name.toLowerCase()+boundAttributeSuffix,attributeValue=node.getAttribute(attributeLookupName);// Find the attribute name
node.removeAttribute(attributeLookupName);const statics=attributeValue.split(markerRegex);this.parts.push({type:"attribute",index,name,strings:statics});partIndex+=statics.length-1}}if("TEMPLATE"===node.tagName){stack.push(node);walker.currentNode=node.content}}else if(3===node.nodeType/* Node.TEXT_NODE */){const data=node.data;if(0<=data.indexOf(marker)){const parent=node.parentNode,strings=data.split(markerRegex),lastIndex=strings.length-1;// Generate a new text node for each literal section
// These nodes are also used as the markers for node parts
for(let i=0;i<lastIndex;i++){let insert,s=strings[i];if(""===s){insert=createMarker()}else{const match=lastAttributeNameRegex.exec(s);if(null!==match&&endsWith(match[2],boundAttributeSuffix)){s=s.slice(0,match.index)+match[1]+match[2].slice(0,-boundAttributeSuffix.length)+match[3]}insert=document.createTextNode(s)}parent.insertBefore(insert,node);this.parts.push({type:"node",index:++index})}// If there's no text, we must insert a comment to mark our place.
// Else, we can trust it will stick around after cloning.
if(""===strings[lastIndex]){parent.insertBefore(createMarker(),node);nodesToRemove.push(node)}else{node.data=strings[lastIndex]}// We have a part for each match found
partIndex+=lastIndex}}else if(8===node.nodeType/* Node.COMMENT_NODE */){if(node.data===marker){const parent=node.parentNode;// Add a new marker node to be the startNode of the Part if any of
// the following are true:
//  * We don't have a previousSibling
//  * The previousSibling is already the start of a previous part
if(null===node.previousSibling||index===lastPartIndex){index++;parent.insertBefore(createMarker(),node)}lastPartIndex=index;this.parts.push({type:"node",index});// If we don't have a nextSibling, keep this node so we have an end.
// Else, we can remove it to save future costs.
if(null===node.nextSibling){node.data=""}else{nodesToRemove.push(node);index--}partIndex++}else{let i=-1;while(-1!==(i=node.data.indexOf(marker,i+1))){// Comment node has a binding marker inside, make an inactive part
// The binding won't work, but subsequent bindings will
// TODO (justinfagnani): consider whether it's even worth it to
// make bindings in comments work
this.parts.push({type:"node",index:-1});partIndex++}}}}// Remove text binding nodes after the walk to not disturb the TreeWalker
for(const n of nodesToRemove){n.parentNode.removeChild(n)}}}_exports.Template$1=_exports.Template=Template;const endsWith=(str,suffix)=>{const index=str.length-suffix.length;return 0<=index&&str.slice(index)===suffix},isTemplatePartActive=part=>-1!==part.index;_exports.isTemplatePartActive$1=_exports.isTemplatePartActive=isTemplatePartActive;// Allows `document.createComment('')` to be renamed for a
// small manual size-savings.
const createMarker=()=>document.createComment("");/**
                                                               * This regex extracts the attribute name preceding an attribute-position
                                                               * expression. It does this by matching the syntax allowed for attributes
                                                               * against the string literal directly preceding the expression, assuming that
                                                               * the expression is in an attribute-value position.
                                                               *
                                                               * See attributes in the HTML spec:
                                                               * https://www.w3.org/TR/html5/syntax.html#elements-attributes
                                                               *
                                                               * " \x09\x0a\x0c\x0d" are HTML space characters:
                                                               * https://www.w3.org/TR/html5/infrastructure.html#space-characters
                                                               *
                                                               * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
                                                               * space character except " ".
                                                               *
                                                               * So an attribute is:
                                                               *  * The name: any character except a control character, space character, ('),
                                                               *    ("), ">", "=", or "/"
                                                               *  * Followed by zero or more space characters
                                                               *  * Followed by "="
                                                               *  * Followed by zero or more space characters
                                                               *  * Followed by:
                                                               *    * Any character except space, ('), ("), "<", ">", "=", (`), or
                                                               *    * (") then any non-("), or
                                                               *    * (') then any non-(')
                                                               */_exports.createMarker$1=_exports.createMarker=createMarker;const lastAttributeNameRegex=// eslint-disable-next-line no-control-regex
/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;_exports.lastAttributeNameRegex=lastAttributeNameRegex;var template={__proto__:null,marker:marker,nodeMarker:nodeMarker,markerRegex:markerRegex,boundAttributeSuffix:boundAttributeSuffix,Template:Template,isTemplatePartActive:isTemplatePartActive,createMarker:createMarker,lastAttributeNameRegex:lastAttributeNameRegex};_exports.$template=template;const walkerNodeFilter=133/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */;/**
                                                                            * Removes the list of nodes from a Template safely. In addition to removing
                                                                            * nodes from the Template, the Template part indices are updated to match
                                                                            * the mutated Template DOM.
                                                                            *
                                                                            * As the template is walked the removal state is tracked and
                                                                            * part indices are adjusted as needed.
                                                                            *
                                                                            * div
                                                                            *   div#1 (remove) <-- start removing (removing node is div#1)
                                                                            *     div
                                                                            *       div#2 (remove)  <-- continue removing (removing node is still div#1)
                                                                            *         div
                                                                            * div <-- stop removing since previous sibling is the removing node (div#1,
                                                                            * removed 4 nodes)
                                                                            */function removeNodesFromTemplate(template,nodesToRemove){const{element:{content},parts}=template,walker=document.createTreeWalker(content,walkerNodeFilter,null,!1);let partIndex=nextActiveIndexInTemplateParts(parts),part=parts[partIndex],nodeIndex=-1,removeCount=0;const nodesToRemoveInTemplate=[];let currentRemovingNode=null;while(walker.nextNode()){nodeIndex++;const node=walker.currentNode;// End removal if stepped past the removing node
if(node.previousSibling===currentRemovingNode){currentRemovingNode=null}// A node to remove was found in the template
if(nodesToRemove.has(node)){nodesToRemoveInTemplate.push(node);// Track node we're removing
if(null===currentRemovingNode){currentRemovingNode=node}}// When removing, increment count by which to adjust subsequent part indices
if(null!==currentRemovingNode){removeCount++}while(part!==void 0&&part.index===nodeIndex){// If part is in a removed node deactivate it by setting index to -1 or
// adjust the index as needed.
part.index=null!==currentRemovingNode?-1:part.index-removeCount;// go to the next active part.
partIndex=nextActiveIndexInTemplateParts(parts,partIndex);part=parts[partIndex]}}nodesToRemoveInTemplate.forEach(n=>n.parentNode.removeChild(n))}const countNodes=node=>{let count=11===node.nodeType/* Node.DOCUMENT_FRAGMENT_NODE */?0:1;const walker=document.createTreeWalker(node,walkerNodeFilter,null,!1);while(walker.nextNode()){count++}return count},nextActiveIndexInTemplateParts=(parts,startIndex=-1)=>{for(let i=startIndex+1;i<parts.length;i++){const part=parts[i];if(isTemplatePartActive(part)){return i}}return-1};/**
    * Inserts the given node into the Template, optionally before the given
    * refNode. In addition to inserting the node into the Template, the Template
    * part indices are updated to match the mutated Template DOM.
    */function insertNodeIntoTemplate(template,node,refNode=null){const{element:{content},parts}=template;// If there's no refNode, then put node at end of template.
// No part indices need to be shifted in this case.
if(null===refNode||refNode===void 0){content.appendChild(node);return}const walker=document.createTreeWalker(content,walkerNodeFilter,null,!1);let partIndex=nextActiveIndexInTemplateParts(parts),insertCount=0,walkerIndex=-1;while(walker.nextNode()){walkerIndex++;const walkerNode=walker.currentNode;if(walkerNode===refNode){insertCount=countNodes(node);refNode.parentNode.insertBefore(node,refNode)}while(-1!==partIndex&&parts[partIndex].index===walkerIndex){// If we've inserted the node, simply adjust all subsequent parts
if(0<insertCount){while(-1!==partIndex){parts[partIndex].index+=insertCount;partIndex=nextActiveIndexInTemplateParts(parts,partIndex)}return}partIndex=nextActiveIndexInTemplateParts(parts,partIndex)}}}var modifyTemplate={__proto__:null,removeNodesFromTemplate:removeNodesFromTemplate,insertNodeIntoTemplate:insertNodeIntoTemplate};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */_exports.$modifyTemplate=modifyTemplate;const directives=new WeakMap,directive=f=>(...args)=>{const d=f(...args);directives.set(d,!0);return d};/**
                                   * Brands a function as a directive factory function so that lit-html will call
                                   * the function during template rendering, rather than passing as a value.
                                   *
                                   * A _directive_ is a function that takes a Part as an argument. It has the
                                   * signature: `(part: Part) => void`.
                                   *
                                   * A directive _factory_ is a function that takes arguments for data and
                                   * configuration and returns a directive. Users of directive usually refer to
                                   * the directive factory as the directive. For example, "The repeat directive".
                                   *
                                   * Usually a template author will invoke a directive factory in their template
                                   * with relevant arguments, which will then return a directive function.
                                   *
                                   * Here's an example of using the `repeat()` directive factory that takes an
                                   * array and a function to render an item:
                                   *
                                   * ```js
                                   * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
                                   * ```
                                   *
                                   * When `repeat` is invoked, it returns a directive function that closes over
                                   * `items` and the template function. When the outer template is rendered, the
                                   * return directive function is called with the Part for the expression.
                                   * `repeat` then performs it's custom logic to render multiple items.
                                   *
                                   * @param f The directive factory function. Must be a function that returns a
                                   * function of the signature `(part: Part) => void`. The returned function will
                                   * be called with the part object.
                                   *
                                   * @example
                                   *
                                   * import {directive, html} from 'lit-html';
                                   *
                                   * const immutable = directive((v) => (part) => {
                                   *   if (part.value !== v) {
                                   *     part.setValue(v)
                                   *   }
                                   * });
                                   */_exports.directive$1=_exports.directive=directive;const isDirective=o=>{return"function"===typeof o&&directives.has(o)};_exports.isDirective$1=_exports.isDirective=isDirective;var directive$1={__proto__:null,directive:directive,isDirective:isDirective};/**
    * @license
    * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */ /**
        * A sentinel value that signals that a value was handled by a directive and
        * should not be written to the DOM.
        */_exports.$directive=directive$1;const noChange={};/**
                             * A sentinel value that signals a NodePart to fully clear its content.
                             */_exports.noChange$1=_exports.noChange=noChange;const nothing={};_exports.nothing$1=_exports.nothing=nothing;var part={__proto__:null,noChange:noChange,nothing:nothing};_exports.$part=part;class TemplateInstance{constructor(template,processor,options){this.__parts=[];this.template=template;this.processor=processor;this.options=options}update(values){let i=0;for(const part of this.__parts){if(part!==void 0){part.setValue(values[i])}i++}for(const part of this.__parts){if(part!==void 0){part.commit()}}}_clone(){// There are a number of steps in the lifecycle of a template instance's
// DOM fragment:
//  1. Clone - create the instance fragment
//  2. Adopt - adopt into the main document
//  3. Process - find part markers and create parts
//  4. Upgrade - upgrade custom elements
//  5. Update - set node, attribute, property, etc., values
//  6. Connect - connect to the document. Optional and outside of this
//     method.
//
// We have a few constraints on the ordering of these steps:
//  * We need to upgrade before updating, so that property values will pass
//    through any property setters.
//  * We would like to process before upgrading so that we're sure that the
//    cloned fragment is inert and not disturbed by self-modifying DOM.
//  * We want custom elements to upgrade even in disconnected fragments.
//
// Given these constraints, with full custom elements support we would
// prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
//
// But Safari does not implement CustomElementRegistry#upgrade, so we
// can not implement that order and still have upgrade-before-update and
// upgrade disconnected fragments. So we instead sacrifice the
// process-before-upgrade constraint, since in Custom Elements v1 elements
// must not modify their light DOM in the constructor. We still have issues
// when co-existing with CEv0 elements like Polymer 1, and with polyfills
// that don't strictly adhere to the no-modification rule because shadow
// DOM, which may be created in the constructor, is emulated by being placed
// in the light DOM.
//
// The resulting order is on native is: Clone, Adopt, Upgrade, Process,
// Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
// in one step.
//
// The Custom Elements v1 polyfill supports upgrade(), so the order when
// polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
// Connect.
const fragment=isCEPolyfill?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),stack=[],parts=this.template.parts,walker=document.createTreeWalker(fragment,133/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */,null,!1);let partIndex=0,nodeIndex=0,part,node=walker.nextNode();// Loop through all the nodes and parts of a template
while(partIndex<parts.length){part=parts[partIndex];if(!isTemplatePartActive(part)){this.__parts.push(void 0);partIndex++;continue}// Progress the tree walker until we find our next part's node.
// Note that multiple parts may share the same node (attribute parts
// on a single element), so this loop may not run at all.
while(nodeIndex<part.index){nodeIndex++;if("TEMPLATE"===node.nodeName){stack.push(node);walker.currentNode=node.content}if(null===(node=walker.nextNode())){// We've exhausted the content inside a nested template element.
// Because we still have parts (the outer for-loop), we know:
// - There is a template in the stack
// - The walker will find a nextNode outside the template
walker.currentNode=stack.pop();node=walker.nextNode()}}// We've arrived at our part's node.
if("node"===part.type){const part=this.processor.handleTextExpression(this.options);part.insertAfterNode(node.previousSibling);this.__parts.push(part)}else{this.__parts.push(...this.processor.handleAttributeExpressions(node,part.name,part.strings,this.options))}partIndex++}if(isCEPolyfill){document.adoptNode(fragment);customElements.upgrade(fragment)}return fragment}}_exports.TemplateInstance$1=_exports.TemplateInstance=TemplateInstance;var templateInstance={__proto__:null,TemplateInstance:TemplateInstance};_exports.$templateInstance=templateInstance;const policy=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:s=>s}),commentMarker=` ${marker} `;/**
                                      * The return type of `html`, which holds a Template and the values from
                                      * interpolated expressions.
                                      */class TemplateResult{constructor(strings,values,type,processor){this.strings=strings;this.values=values;this.type=type;this.processor=processor}/**
     * Returns a string of HTML used to create a `<template>` element.
     */getHTML(){const l=this.strings.length-1;let html="",isCommentBinding=!1;for(let i=0;i<l;i++){const s=this.strings[i],commentOpen=s.lastIndexOf("<!--");// For each binding we want to determine the kind of marker to insert
// into the template source before it's parsed by the browser's HTML
// parser. The marker type is based on whether the expression is in an
// attribute, text, or comment position.
//   * For node-position bindings we insert a comment with the marker
//     sentinel as its text content, like <!--{{lit-guid}}-->.
//   * For attribute bindings we insert just the marker sentinel for the
//     first binding, so that we support unquoted attribute bindings.
//     Subsequent bindings can use a comment marker because multi-binding
//     attributes must be quoted.
//   * For comment bindings we insert just the marker sentinel so we don't
//     close the comment.
//
// The following code scans the template source, but is *not* an HTML
// parser. We don't need to track the tree structure of the HTML, only
// whether a binding is inside a comment, and if not, if it appears to be
// the first binding in an attribute.
// We're in comment position if we have a comment open with no following
// comment close. Because <-- can appear in an attribute value there can
// be false positives.
isCommentBinding=(-1<commentOpen||isCommentBinding)&&-1===s.indexOf("-->",commentOpen+1);// Check to see if we have an attribute-like sequence preceding the
// expression. This can match "name=value" like structures in text,
// comments, and attribute values, so there can be false-positives.
const attributeMatch=lastAttributeNameRegex.exec(s);if(null===attributeMatch){// We're only in this branch if we don't have a attribute-like
// preceding sequence. For comments, this guards against unusual
// attribute values like <div foo="<!--${'bar'}">. Cases like
// <!-- foo=${'bar'}--> are handled correctly in the attribute branch
// below.
html+=s+(isCommentBinding?commentMarker:nodeMarker)}else{// For attributes we use just a marker sentinel, and also append a
// $lit$ suffix to the name to opt-out of attribute-specific parsing
// that IE and Edge do for style and certain SVG attributes.
html+=s.substr(0,attributeMatch.index)+attributeMatch[1]+attributeMatch[2]+boundAttributeSuffix+attributeMatch[3]+marker}}html+=this.strings[l];return html}getTemplateElement(){const template=document.createElement("template");let value=this.getHTML();if(policy!==void 0){// this is secure because `this.strings` is a TemplateStringsArray.
// TODO: validate this when
// https://github.com/tc39/proposal-array-is-template-object is
// implemented.
value=policy.createHTML(value)}template.innerHTML=value;return template}}/**
   * A TemplateResult for SVG fragments.
   *
   * This class wraps HTML in an `<svg>` tag in order to parse its contents in the
   * SVG namespace, then modifies the template to remove the `<svg>` tag so that
   * clones only container the original fragment.
   */_exports.TemplateResult$3=_exports.TemplateResult$2=_exports.TemplateResult$1=_exports.TemplateResult=TemplateResult;class SVGTemplateResult extends TemplateResult{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const template=super.getTemplateElement(),content=template.content,svgElement=content.firstChild;content.removeChild(svgElement);reparentNodes(content,svgElement.firstChild);return template}}_exports.SVGTemplateResult$2=_exports.SVGTemplateResult$1=_exports.SVGTemplateResult=SVGTemplateResult;var templateResult={__proto__:null,TemplateResult:TemplateResult,SVGTemplateResult:SVGTemplateResult};_exports.$templateResult=templateResult;const isPrimitive=value=>{return null===value||!("object"===typeof value||"function"===typeof value)};_exports.isPrimitive$1=_exports.isPrimitive=isPrimitive;const isIterable=value=>{return Array.isArray(value)||// eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(value&&value[Symbol.iterator])};/**
    * Writes attribute values to the DOM for a group of AttributeParts bound to a
    * single attribute. The value is only set once even if there are multiple parts
    * for an attribute.
    */_exports.isIterable$1=_exports.isIterable=isIterable;class AttributeCommitter{constructor(element,name,strings){this.dirty=!0;this.element=element;this.name=name;this.strings=strings;this.parts=[];for(let i=0;i<strings.length-1;i++){this.parts[i]=this._createPart()}}/**
     * Creates a single part. Override this to create a differnt type of part.
     */_createPart(){return new AttributePart(this)}_getValue(){const strings=this.strings,l=strings.length-1,parts=this.parts;// If we're assigning an attribute via syntax like:
//    attr="${foo}"  or  attr=${foo}
// but not
//    attr="${foo} ${bar}" or attr="${foo} baz"
// then we don't want to coerce the attribute value into one long
// string. Instead we want to just return the value itself directly,
// so that sanitizeDOMValue can get the actual value rather than
// String(value)
// The exception is if v is an array, in which case we do want to smash
// it together into a string without calling String() on the array.
//
// This also allows trusted values (when using TrustedTypes) being
// assigned to DOM sinks without being stringified in the process.
if(1===l&&""===strings[0]&&""===strings[1]){const v=parts[0].value;if("symbol"===typeof v){return v+""}if("string"===typeof v||!isIterable(v)){return v}}let text="";for(let i=0;i<l;i++){text+=strings[i];const part=parts[i];if(part!==void 0){const v=part.value;if(isPrimitive(v)||!isIterable(v)){text+="string"===typeof v?v:v+""}else{for(const t of v){text+="string"===typeof t?t:t+""}}}}text+=strings[l];return text}commit(){if(this.dirty){this.dirty=!1;this.element.setAttribute(this.name,this._getValue())}}}/**
   * A Part that controls all or part of an attribute value.
   */_exports.AttributeCommitter$1=_exports.AttributeCommitter=AttributeCommitter;class AttributePart{constructor(committer){this.value=void 0;this.committer=committer}setValue(value){if(value!==noChange&&(!isPrimitive(value)||value!==this.value)){this.value=value;// If the value is a not a directive, dirty the committer so that it'll
// call setAttribute. If the value is a directive, it'll dirty the
// committer if it calls setValue().
if(!isDirective(value)){this.committer.dirty=!0}}}commit(){while(isDirective(this.value)){const directive=this.value;this.value=noChange;directive(this)}if(this.value===noChange){return}this.committer.commit()}}/**
   * A Part that controls a location within a Node tree. Like a Range, NodePart
   * has start and end locations and can set and update the Nodes between those
   * locations.
   *
   * NodeParts support several value types: primitives, Nodes, TemplateResults,
   * as well as arrays and iterables of those types.
   */_exports.AttributePart$1=_exports.AttributePart=AttributePart;class NodePart{constructor(options){this.value=void 0;this.__pendingValue=void 0;this.options=options}/**
     * Appends this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */appendInto(container){this.startNode=container.appendChild(createMarker());this.endNode=container.appendChild(createMarker())}/**
     * Inserts this part after the `ref` node (between `ref` and `ref`'s next
     * sibling). Both `ref` and its next sibling must be static, unchanging nodes
     * such as those that appear in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */insertAfterNode(ref){this.startNode=ref;this.endNode=ref.nextSibling}/**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */appendIntoPart(part){part.__insert(this.startNode=createMarker());part.__insert(this.endNode=createMarker())}/**
     * Inserts this part after the `ref` part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */insertAfterPart(ref){ref.__insert(this.startNode=createMarker());this.endNode=ref.endNode;ref.endNode=this.startNode}setValue(value){this.__pendingValue=value}commit(){if(null===this.startNode.parentNode){return}while(isDirective(this.__pendingValue)){const directive=this.__pendingValue;this.__pendingValue=noChange;directive(this)}const value=this.__pendingValue;if(value===noChange){return}if(isPrimitive(value)){if(value!==this.value){this.__commitText(value)}}else if(value instanceof TemplateResult){this.__commitTemplateResult(value)}else if(value instanceof Node){this.__commitNode(value)}else if(isIterable(value)){this.__commitIterable(value)}else if(value===nothing){this.value=nothing;this.clear()}else{// Fallback, will render the string representation
this.__commitText(value)}}__insert(node){this.endNode.parentNode.insertBefore(node,this.endNode)}__commitNode(value){if(this.value===value){return}this.clear();this.__insert(value);this.value=value}__commitText(value){const node=this.startNode.nextSibling;value=null==value?"":value;// If `value` isn't already a string, we explicitly convert it here in case
// it can't be implicitly converted - i.e. it's a symbol.
const valueAsString="string"===typeof value?value:value+"";if(node===this.endNode.previousSibling&&3===node.nodeType/* Node.TEXT_NODE */){// If we only have a single text node between the markers, we can just
// set its value, rather than replacing it.
// TODO(justinfagnani): Can we just check if this.value is primitive?
node.data=valueAsString}else{this.__commitNode(document.createTextNode(valueAsString))}this.value=value}__commitTemplateResult(value){const template=this.options.templateFactory(value);if(this.value instanceof TemplateInstance&&this.value.template===template){this.value.update(value.values)}else{// Make sure we propagate the template processor from the TemplateResult
// so that we use its syntax extension, etc. The template factory comes
// from the render function options so that it can control template
// caching and preprocessing.
const instance=new TemplateInstance(template,value.processor,this.options),fragment=instance._clone();instance.update(value.values);this.__commitNode(fragment);this.value=instance}}__commitIterable(value){// For an Iterable, we create a new InstancePart per item, then set its
// value to the item. This is a little bit of overhead for every item in
// an Iterable, but it lets us recurse easily and efficiently update Arrays
// of TemplateResults that will be commonly returned from expressions like:
// array.map((i) => html`${i}`), by reusing existing TemplateInstances.
// If _value is an array, then the previous render was of an
// iterable and _value will contain the NodeParts from the previous
// render. If _value is not an array, clear this part and make a new
// array for NodeParts.
if(!Array.isArray(this.value)){this.value=[];this.clear()}// Lets us keep track of how many items we stamped so we can clear leftover
// items from a previous render
const itemParts=this.value;let partIndex=0,itemPart;for(const item of value){// Try to reuse an existing part
itemPart=itemParts[partIndex];// If no existing part, create a new one
if(itemPart===void 0){itemPart=new NodePart(this.options);itemParts.push(itemPart);if(0===partIndex){itemPart.appendIntoPart(this)}else{itemPart.insertAfterPart(itemParts[partIndex-1])}}itemPart.setValue(item);itemPart.commit();partIndex++}if(partIndex<itemParts.length){// Truncate the parts array so _value reflects the current state
itemParts.length=partIndex;this.clear(itemPart&&itemPart.endNode)}}clear(startNode=this.startNode){removeNodes(this.startNode.parentNode,startNode.nextSibling,this.endNode)}}/**
   * Implements a boolean attribute, roughly as defined in the HTML
   * specification.
   *
   * If the value is truthy, then the attribute is present with a value of
   * ''. If the value is falsey, the attribute is removed.
   */_exports.NodePart$1=_exports.NodePart=NodePart;class BooleanAttributePart{constructor(element,name,strings){this.value=void 0;this.__pendingValue=void 0;if(2!==strings.length||""!==strings[0]||""!==strings[1]){throw new Error("Boolean attributes can only contain a single expression")}this.element=element;this.name=name;this.strings=strings}setValue(value){this.__pendingValue=value}commit(){while(isDirective(this.__pendingValue)){const directive=this.__pendingValue;this.__pendingValue=noChange;directive(this)}if(this.__pendingValue===noChange){return}const value=!!this.__pendingValue;if(this.value!==value){if(value){this.element.setAttribute(this.name,"")}else{this.element.removeAttribute(this.name)}this.value=value}this.__pendingValue=noChange}}/**
   * Sets attribute values for PropertyParts, so that the value is only set once
   * even if there are multiple parts for a property.
   *
   * If an expression controls the whole property value, then the value is simply
   * assigned to the property under control. If there are string literals or
   * multiple expressions, then the strings are expressions are interpolated into
   * a string first.
   */_exports.BooleanAttributePart$1=_exports.BooleanAttributePart=BooleanAttributePart;class PropertyCommitter extends AttributeCommitter{constructor(element,name,strings){super(element,name,strings);this.single=2===strings.length&&""===strings[0]&&""===strings[1]}_createPart(){return new PropertyPart(this)}_getValue(){if(this.single){return this.parts[0].value}return super._getValue()}commit(){if(this.dirty){this.dirty=!1;// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.element[this.name]=this._getValue()}}}_exports.PropertyCommitter$1=_exports.PropertyCommitter=PropertyCommitter;class PropertyPart extends AttributePart{}// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the third
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.
_exports.PropertyPart$1=_exports.PropertyPart=PropertyPart;let eventOptionsSupported=!1;// Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
// blocks right into the body of a module
(()=>{try{const options={get capture(){eventOptionsSupported=!0;return!1}};// eslint-disable-next-line @typescript-eslint/no-explicit-any
window.addEventListener("test",options,options);// eslint-disable-next-line @typescript-eslint/no-explicit-any
window.removeEventListener("test",options,options)}catch(_e){// event options not supported
}})();class EventPart{constructor(element,eventName,eventContext){this.value=void 0;this.__pendingValue=void 0;this.element=element;this.eventName=eventName;this.eventContext=eventContext;this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(value){this.__pendingValue=value}commit(){while(isDirective(this.__pendingValue)){const directive=this.__pendingValue;this.__pendingValue=noChange;directive(this)}if(this.__pendingValue===noChange){return}const newListener=this.__pendingValue,oldListener=this.value,shouldRemoveListener=null==newListener||null!=oldListener&&(newListener.capture!==oldListener.capture||newListener.once!==oldListener.once||newListener.passive!==oldListener.passive),shouldAddListener=null!=newListener&&(null==oldListener||shouldRemoveListener);if(shouldRemoveListener){this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options)}if(shouldAddListener){this.__options=getOptions(newListener);this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)}this.value=newListener;this.__pendingValue=noChange}handleEvent(event){if("function"===typeof this.value){this.value.call(this.eventContext||this.element,event)}else{this.value.handleEvent(event)}}}// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.
_exports.EventPart$1=_exports.EventPart=EventPart;const getOptions=o=>o&&(eventOptionsSupported?{capture:o.capture,passive:o.passive,once:o.once}:o.capture);var parts={__proto__:null,isPrimitive:isPrimitive,isIterable:isIterable,AttributeCommitter:AttributeCommitter,AttributePart:AttributePart,NodePart:NodePart,BooleanAttributePart:BooleanAttributePart,PropertyCommitter:PropertyCommitter,PropertyPart:PropertyPart,EventPart:EventPart};_exports.$parts=parts;function templateFactory(result){let templateCache=templateCaches.get(result.type);if(templateCache===void 0){templateCache={stringsArray:new WeakMap,keyString:new Map};templateCaches.set(result.type,templateCache)}let template=templateCache.stringsArray.get(result.strings);if(template!==void 0){return template}// If the TemplateStringsArray is new, generate a key from the strings
// This key is shared between all templates with identical content
const key=result.strings.join(marker);// Check if we already have a Template for this key
template=templateCache.keyString.get(key);if(template===void 0){// If we have not seen this key before, create a new Template
template=new Template(result,result.getTemplateElement());// Cache the Template for this key
templateCache.keyString.set(key,template)}// Cache all future queries for this TemplateStringsArray
templateCache.stringsArray.set(result.strings,template);return template}const templateCaches=new Map;_exports.templateCaches$1=_exports.templateCaches=templateCaches;var templateFactory$1={__proto__:null,templateFactory:templateFactory,templateCaches:templateCaches};_exports.$templateFactory=templateFactory$1;const parts$1=new WeakMap;/**
                                     * Renders a template result or other value to a container.
                                     *
                                     * To update a container with new values, reevaluate the template literal and
                                     * call `render` with the new result.
                                     *
                                     * @param result Any value renderable by NodePart - typically a TemplateResult
                                     *     created by evaluating a template tag like `html` or `svg`.
                                     * @param container A DOM parent to render to. The entire contents are either
                                     *     replaced, or efficiently updated if the same result type was previous
                                     *     rendered there.
                                     * @param options RenderOptions for the entire render tree rendered to this
                                     *     container. Render options must *not* change between renders to the same
                                     *     container, as those changes will not effect previously rendered DOM.
                                     */_exports.parts$1=_exports.parts=parts$1;const render=(result,container,options)=>{let part=parts$1.get(container);if(part===void 0){removeNodes(container,container.firstChild);parts$1.set(container,part=new NodePart(Object.assign({templateFactory},options)));part.appendInto(container)}part.setValue(result);part.commit()};_exports.render$2=_exports.render=render;var render$1={__proto__:null,parts:parts$1,render:render};_exports.$render=render$1;class DefaultTemplateProcessor{/**
   * Create parts for an attribute-position binding, given the event, attribute
   * name, and string literals.
   *
   * @param element The element containing the binding
   * @param name  The attribute name
   * @param strings The string literals. There are always at least two strings,
   *   event for fully-controlled bindings with a single expression.
   */handleAttributeExpressions(element,name,strings,options){const prefix=name[0];if("."===prefix){const committer=new PropertyCommitter(element,name.slice(1),strings);return committer.parts}if("@"===prefix){return[new EventPart(element,name.slice(1),options.eventContext)]}if("?"===prefix){return[new BooleanAttributePart(element,name.slice(1),strings)]}const committer=new AttributeCommitter(element,name,strings);return committer.parts}/**
     * Create parts for a text-position binding.
     * @param templateFactory
     */handleTextExpression(options){return new NodePart(options)}}_exports.DefaultTemplateProcessor$1=_exports.DefaultTemplateProcessor=DefaultTemplateProcessor;const defaultTemplateProcessor=new DefaultTemplateProcessor;_exports.defaultTemplateProcessor$1=_exports.defaultTemplateProcessor=defaultTemplateProcessor;var defaultTemplateProcessor$1={__proto__:null,DefaultTemplateProcessor:DefaultTemplateProcessor,defaultTemplateProcessor:defaultTemplateProcessor};// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
_exports.$defaultTemplateProcessor=defaultTemplateProcessor$1;if("undefined"!==typeof window){(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0")}/**
   * Interprets a template literal as an HTML template that can efficiently
   * render to and update a container.
   */const html=(strings,...values)=>new TemplateResult(strings,values,"html",defaultTemplateProcessor);/**
                                                                                                                    * Interprets a template literal as an SVG template that can efficiently
                                                                                                                    * render to and update a container.
                                                                                                                    */_exports.html$2=_exports.html$1=_exports.html=html;const svg=(strings,...values)=>new SVGTemplateResult(strings,values,"svg",defaultTemplateProcessor);_exports.svg$2=_exports.svg$1=_exports.svg=svg;var litHtml={__proto__:null,html:html,svg:svg,DefaultTemplateProcessor:DefaultTemplateProcessor,defaultTemplateProcessor:defaultTemplateProcessor,directive:directive,isDirective:isDirective,removeNodes:removeNodes,reparentNodes:reparentNodes,noChange:noChange,nothing:nothing,AttributeCommitter:AttributeCommitter,AttributePart:AttributePart,BooleanAttributePart:BooleanAttributePart,EventPart:EventPart,isIterable:isIterable,isPrimitive:isPrimitive,NodePart:NodePart,PropertyCommitter:PropertyCommitter,PropertyPart:PropertyPart,parts:parts$1,render:render,templateCaches:templateCaches,templateFactory:templateFactory,TemplateInstance:TemplateInstance,SVGTemplateResult:SVGTemplateResult,TemplateResult:TemplateResult,createMarker:createMarker,isTemplatePartActive:isTemplatePartActive,Template:Template};_exports.$litHtml=litHtml;const getTemplateCacheKey=(type,scopeName)=>`${type}--${scopeName}`;let compatibleShadyCSSVersion=!0;if("undefined"===typeof window.ShadyCSS){compatibleShadyCSSVersion=!1}else if("undefined"===typeof window.ShadyCSS.prepareTemplateDom){console.warn(`Incompatible ShadyCSS version detected. `+`Please update to at least @webcomponents/webcomponentsjs@2.0.2 and `+`@webcomponents/shadycss@1.3.1.`);compatibleShadyCSSVersion=!1}/**
   * Template factory which scopes template DOM using ShadyCSS.
   * @param scopeName {string}
   */const shadyTemplateFactory=scopeName=>result=>{const cacheKey=getTemplateCacheKey(result.type,scopeName);let templateCache=templateCaches.get(cacheKey);if(templateCache===void 0){templateCache={stringsArray:new WeakMap,keyString:new Map};templateCaches.set(cacheKey,templateCache)}let template=templateCache.stringsArray.get(result.strings);if(template!==void 0){return template}const key=result.strings.join(marker);template=templateCache.keyString.get(key);if(template===void 0){const element=result.getTemplateElement();if(compatibleShadyCSSVersion){window.ShadyCSS.prepareTemplateDom(element,scopeName)}template=new Template(result,element);templateCache.keyString.set(key,template)}templateCache.stringsArray.set(result.strings,template);return template};_exports.shadyTemplateFactory=shadyTemplateFactory;const TEMPLATE_TYPES=["html","svg"],removeStylesFromLitTemplates=scopeName=>{TEMPLATE_TYPES.forEach(type=>{const templates=templateCaches.get(getTemplateCacheKey(type,scopeName));if(templates!==void 0){templates.keyString.forEach(template=>{const{element:{content}}=template,styles=new Set;// IE 11 doesn't support the iterable param Set constructor
Array.from(content.querySelectorAll("style")).forEach(s=>{styles.add(s)});removeNodesFromTemplate(template,styles)})}})},shadyRenderSet=new Set,prepareTemplateStyles=(scopeName,renderedDOM,template)=>{shadyRenderSet.add(scopeName);// If `renderedDOM` is stamped from a Template, then we need to edit that
// Template's underlying template element. Otherwise, we create one here
// to give to ShadyCSS, which still requires one while scoping.
const templateElement=!!template?template.element:document.createElement("template"),styles=renderedDOM.querySelectorAll("style"),{length}=styles;// Move styles out of rendered DOM and store.
// If there are no styles, skip unnecessary work
if(0===length){// Ensure prepareTemplateStyles is called to support adding
// styles via `prepareAdoptedCssText` since that requires that
// `prepareTemplateStyles` is called.
//
// ShadyCSS will only update styles containing @apply in the template
// given to `prepareTemplateStyles`. If no lit Template was given,
// ShadyCSS will not be able to update uses of @apply in any relevant
// template. However, this is not a problem because we only create the
// template for the purpose of supporting `prepareAdoptedCssText`,
// which doesn't support @apply at all.
window.ShadyCSS.prepareTemplateStyles(templateElement,scopeName);return}const condensedStyle=document.createElement("style");// Collect styles into a single style. This helps us make sure ShadyCSS
// manipulations will not prevent us from being able to fix up template
// part indices.
// NOTE: collecting styles is inefficient for browsers but ShadyCSS
// currently does this anyway. When it does not, this should be changed.
for(let i=0;i<length;i++){const style=styles[i];style.parentNode.removeChild(style);condensedStyle.textContent+=style.textContent}// Remove styles from nested templates in this scope.
removeStylesFromLitTemplates(scopeName);// And then put the condensed style into the "root" template passed in as
// `template`.
const content=templateElement.content;if(!!template){insertNodeIntoTemplate(template,condensedStyle,content.firstChild)}else{content.insertBefore(condensedStyle,content.firstChild)}// Note, it's important that ShadyCSS gets the template that `lit-html`
// will actually render so that it can update the style inside when
// needed (e.g. @apply native Shadow DOM case).
window.ShadyCSS.prepareTemplateStyles(templateElement,scopeName);const style=content.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==style){// When in native Shadow DOM, ensure the style created by ShadyCSS is
// included in initially rendered output (`renderedDOM`).
renderedDOM.insertBefore(style.cloneNode(!0),renderedDOM.firstChild)}else if(!!template){// When no style is left in the template, parts will be broken as a
// result. To fix this, we put back the style node ShadyCSS removed
// and then tell lit to remove that node from the template.
// There can be no style in the template in 2 cases (1) when Shady DOM
// is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
// is in use ShadyCSS removes the style if it contains no content.
// NOTE, ShadyCSS creates its own style so we can safely add/remove
// `condensedStyle` here.
content.insertBefore(condensedStyle,content.firstChild);const removes=new Set([condensedStyle]);removeNodesFromTemplate(template,removes)}},render$2=(result,container,options)=>{if(!options||"object"!==typeof options||!options.scopeName){throw new Error("The `scopeName` option is required.")}const scopeName=options.scopeName,hasRendered=parts$1.has(container),needsScoping=compatibleShadyCSSVersion&&11===container.nodeType/* Node.DOCUMENT_FRAGMENT_NODE */&&!!container.host,firstScopeRender=needsScoping&&!shadyRenderSet.has(scopeName),renderContainer=firstScopeRender?document.createDocumentFragment():container;render(result,renderContainer,Object.assign({templateFactory:shadyTemplateFactory(scopeName)},options));// When performing first scope render,
// (1) We've rendered into a fragment so that there's a chance to
// `prepareTemplateStyles` before sub-elements hit the DOM
// (which might cause them to render based on a common pattern of
// rendering in a custom element's `connectedCallback`);
// (2) Scope the template with ShadyCSS one time only for this scope.
// (3) Render the fragment into the container and make sure the
// container knows its `part` is the one we just rendered. This ensures
// DOM will be re-used on subsequent renders.
if(firstScopeRender){const part=parts$1.get(renderContainer);parts$1.delete(renderContainer);// ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
// that should apply to `renderContainer` even if the rendered value is
// not a TemplateInstance. However, it will only insert scoped styles
// into the document if `prepareTemplateStyles` has already been called
// for the given scope name.
const template=part.value instanceof TemplateInstance?part.value.template:void 0;prepareTemplateStyles(scopeName,renderContainer,template);removeNodes(container,container.firstChild);container.appendChild(renderContainer);parts$1.set(container,part)}// After elements have hit the DOM, update styling if this is the
// initial render to this container.
// This is needed whenever dynamic changes are made so it would be
// safest to do every render; however, this would regress performance
// so we leave it up to the user to call `ShadyCSS.styleElement`
// for dynamic changes.
if(!hasRendered&&needsScoping){window.ShadyCSS.styleElement(container.host)}};/**
                                         * Removes all style elements from Templates for the given scopeName.
                                         */_exports.render$1=render$2;var shadyRender={__proto__:null,shadyTemplateFactory:shadyTemplateFactory,render:render$2,html:html,svg:svg,TemplateResult:TemplateResult};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */_exports.$shadyRender=shadyRender;var _a;/**
         * Use this module if you want to create your own base class extending
         * [[UpdatingElement]].
         * @packageDocumentation
         */ /*
             * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
             * replaced at compile time by the munged name for object[property]. We cannot
             * alias this function, so we have to use a small shim that has the same
             * behavior when not compiling.
             */window.JSCompiler_renameProperty=(prop,_obj)=>prop;const defaultConverter={toAttribute(value,type){switch(type){case Boolean:return value?"":null;case Object:case Array:// if the value is `null` or `undefined` pass this through
// to allow removing/no change behavior.
return null==value?value:JSON.stringify(value);}return value},fromAttribute(value,type){switch(type){case Boolean:return null!==value;case Number:return null===value?null:+value;case Object:case Array:return JSON.parse(value);}return value}};/**
    * Change function that returns true if `value` is different from `oldValue`.
    * This method is used as the default for a property's `hasChanged` function.
    */_exports.defaultConverter$1=_exports.defaultConverter=defaultConverter;const notEqual=(value,old)=>{// This ensures (old==NaN, value==NaN) always returns false
return old!==value&&(old===old||value===value)};_exports.notEqual$1=_exports.notEqual=notEqual;const defaultPropertyDeclaration={attribute:!0,type:String,converter:defaultConverter,reflect:!1,hasChanged:notEqual},STATE_HAS_UPDATED=1,STATE_UPDATE_REQUESTED=1<<2,STATE_IS_REFLECTING_TO_ATTRIBUTE=1<<3,STATE_IS_REFLECTING_TO_PROPERTY=1<<4,finalized="finalized";/**
                                * Base element class which manages element properties and attributes. When
                                * properties change, the `update` method is asynchronously called. This method
                                * should be supplied by subclassers to render updates as desired.
                                * @noInheritDoc
                                */class UpdatingElement extends HTMLElement{constructor(){super();this.initialize()}/**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     */static get observedAttributes(){// note: piggy backing on this to ensure we're finalized.
this.finalize();const attributes=[];// Use forEach so this works even if for/of loops are compiled to for loops
// expecting arrays
this._classProperties.forEach((v,p)=>{const attr=this._attributeNameForProperty(p,v);if(attr!==void 0){this._attributeToPropertyMap.set(attr,p);attributes.push(attr)}});return attributes}/**
     * Ensures the private `_classProperties` property metadata is created.
     * In addition to `finalize` this is also called in `createProperty` to
     * ensure the `@property` decorator can add property metadata.
     */ /** @nocollapse */static _ensureClassProperties(){// ensure private storage for property declarations.
if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;// NOTE: Workaround IE11 not supporting Map constructor argument.
const superProperties=Object.getPrototypeOf(this)._classProperties;if(superProperties!==void 0){superProperties.forEach((v,k)=>this._classProperties.set(k,v))}}}/**
     * Creates a property accessor on the element prototype if one does not exist
     * and stores a PropertyDeclaration for the property with the given options.
     * The property setter calls the property's `hasChanged` property option
     * or uses a strict identity check to determine whether or not to request
     * an update.
     *
     * This method may be overridden to customize properties; however,
     * when doing so, it's important to call `super.createProperty` to ensure
     * the property is setup correctly. This method calls
     * `getPropertyDescriptor` internally to get a descriptor to install.
     * To customize what properties do when they are get or set, override
     * `getPropertyDescriptor`. To customize the options for a property,
     * implement `createProperty` like this:
     *
     * static createProperty(name, options) {
     *   options = Object.assign(options, {myOption: true});
     *   super.createProperty(name, options);
     * }
     *
     * @nocollapse
     */static createProperty(name,options=defaultPropertyDeclaration){// Note, since this can be called by the `@property` decorator which
// is called before `finalize`, we ensure storage exists for property
// metadata.
this._ensureClassProperties();this._classProperties.set(name,options);// Do not generate an accessor if the prototype already has one, since
// it would be lost otherwise and that would never be the user's intention;
// Instead, we expect users to call `requestUpdate` themselves from
// user-defined accessors. Note that if the super has an accessor we will
// still overwrite it
if(options.noAccessor||this.prototype.hasOwnProperty(name)){return}const key="symbol"===typeof name?Symbol():`__${name}`,descriptor=this.getPropertyDescriptor(name,key,options);if(descriptor!==void 0){Object.defineProperty(this.prototype,name,descriptor)}}/**
     * Returns a property descriptor to be defined on the given named property.
     * If no descriptor is returned, the property will not become an accessor.
     * For example,
     *
     *   class MyElement extends LitElement {
     *     static getPropertyDescriptor(name, key, options) {
     *       const defaultDescriptor =
     *           super.getPropertyDescriptor(name, key, options);
     *       const setter = defaultDescriptor.set;
     *       return {
     *         get: defaultDescriptor.get,
     *         set(value) {
     *           setter.call(this, value);
     *           // custom action.
     *         },
     *         configurable: true,
     *         enumerable: true
     *       }
     *     }
     *   }
     *
     * @nocollapse
     */static getPropertyDescriptor(name,key,options){return{// tslint:disable-next-line:no-any no symbol in index
get(){return this[key]},set(value){const oldValue=this[name];this[key]=value;this.requestUpdateInternal(name,oldValue,options)},configurable:!0,enumerable:!0}}/**
     * Returns the property options associated with the given property.
     * These options are defined with a PropertyDeclaration via the `properties`
     * object or the `@property` decorator and are registered in
     * `createProperty(...)`.
     *
     * Note, this method should be considered "final" and not overridden. To
     * customize the options for a given property, override `createProperty`.
     *
     * @nocollapse
     * @final
     */static getPropertyOptions(name){return this._classProperties&&this._classProperties.get(name)||defaultPropertyDeclaration}/**
     * Creates property accessors for registered properties and ensures
     * any superclasses are also finalized.
     * @nocollapse
     */static finalize(){// finalize any superclasses
const superCtor=Object.getPrototypeOf(this);if(!superCtor.hasOwnProperty(finalized)){superCtor.finalize()}this[finalized]=!0;this._ensureClassProperties();// initialize Map populated in observedAttributes
this._attributeToPropertyMap=new Map;// make any properties
// Note, only process "own" properties since this element will inherit
// any properties defined on the superClass, and finalization ensures
// the entire prototype chain is finalized.
if(this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const props=this.properties,propKeys=[...Object.getOwnPropertyNames(props),...("function"===typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(props):[])];// support symbols in properties (IE11 does not support this)
// This for/of is ok because propKeys is an array
for(const p of propKeys){// note, use of `any` is due to TypeSript lack of support for symbol in
// index types
// tslint:disable-next-line:no-any no symbol in index
this.createProperty(p,props[p])}}}/**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */static _attributeNameForProperty(name,options){const attribute=options.attribute;return!1===attribute?void 0:"string"===typeof attribute?attribute:"string"===typeof name?name.toLowerCase():void 0}/**
     * Returns true if a property should request an update.
     * Called when a property value is set and uses the `hasChanged`
     * option for the property if present or a strict identity check.
     * @nocollapse
     */static _valueHasChanged(value,old,hasChanged=notEqual){return hasChanged(value,old)}/**
     * Returns the property value for the given attribute value.
     * Called via the `attributeChangedCallback` and uses the property's
     * `converter` or `converter.fromAttribute` property option.
     * @nocollapse
     */static _propertyValueFromAttribute(value,options){const type=options.type,converter=options.converter||defaultConverter,fromAttribute="function"===typeof converter?converter:converter.fromAttribute;return fromAttribute?fromAttribute(value,type):value}/**
     * Returns the attribute value for the given property value. If this
     * returns undefined, the property will *not* be reflected to an attribute.
     * If this returns null, the attribute will be removed, otherwise the
     * attribute will be set to the value.
     * This uses the property's `reflect` and `type.toAttribute` property options.
     * @nocollapse
     */static _propertyValueToAttribute(value,options){if(options.reflect===void 0){return}const type=options.type,converter=options.converter,toAttribute=converter&&converter.toAttribute||defaultConverter.toAttribute;return toAttribute(value,type)}/**
     * Performs element initialization. By default captures any pre-set values for
     * registered properties.
     */initialize(){this._updateState=0;this._updatePromise=new Promise(res=>this._enableUpdatingResolver=res);this._changedProperties=new Map;this._saveInstanceProperties();// ensures first update will be caught by an early access of
// `updateComplete`
this.requestUpdateInternal()}/**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */_saveInstanceProperties(){// Use forEach so this works even if for/of loops are compiled to for loops
// expecting arrays
this.constructor._classProperties.forEach((_v,p)=>{if(this.hasOwnProperty(p)){const value=this[p];delete this[p];if(!this._instanceProperties){this._instanceProperties=new Map}this._instanceProperties.set(p,value)}})}/**
     * Applies previously saved instance properties.
     */_applyInstanceProperties(){// Use forEach so this works even if for/of loops are compiled to for loops
// expecting arrays
// tslint:disable-next-line:no-any
this._instanceProperties.forEach((v,p)=>this[p]=v);this._instanceProperties=void 0}connectedCallback(){// Ensure first connection completes an update. Updates cannot complete
// before connection.
this.enableUpdating()}enableUpdating(){if(this._enableUpdatingResolver!==void 0){this._enableUpdatingResolver();this._enableUpdatingResolver=void 0}}/**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     */disconnectedCallback(){}/**
                             * Synchronizes property values when attributes change.
                             */attributeChangedCallback(name,old,value){if(old!==value){this._attributeToProperty(name,value)}}_propertyToAttribute(name,value,options=defaultPropertyDeclaration){const ctor=this.constructor,attr=ctor._attributeNameForProperty(name,options);if(attr!==void 0){const attrValue=ctor._propertyValueToAttribute(value,options);// an undefined value does not change the attribute.
if(attrValue===void 0){return}// Track if the property is being reflected to avoid
// setting the property again via `attributeChangedCallback`. Note:
// 1. this takes advantage of the fact that the callback is synchronous.
// 2. will behave incorrectly if multiple attributes are in the reaction
// stack at time of calling. However, since we process attributes
// in `update` this should not be possible (or an extreme corner case
// that we'd like to discover).
// mark state reflecting
this._updateState=this._updateState|STATE_IS_REFLECTING_TO_ATTRIBUTE;if(null==attrValue){this.removeAttribute(attr)}else{this.setAttribute(attr,attrValue)}// mark state not reflecting
this._updateState=this._updateState&~STATE_IS_REFLECTING_TO_ATTRIBUTE}}_attributeToProperty(name,value){// Use tracking info to avoid deserializing attribute value if it was
// just set from a property setter.
if(this._updateState&STATE_IS_REFLECTING_TO_ATTRIBUTE){return}const ctor=this.constructor,propName=ctor._attributeToPropertyMap.get(name);// Note, hint this as an `AttributeMap` so closure clearly understands
// the type; it has issues with tracking types through statics
// tslint:disable-next-line:no-unnecessary-type-assertion
if(propName!==void 0){const options=ctor.getPropertyOptions(propName);// mark state reflecting
this._updateState=this._updateState|STATE_IS_REFLECTING_TO_PROPERTY;this[propName]=// tslint:disable-next-line:no-any
ctor._propertyValueFromAttribute(value,options);// mark state not reflecting
this._updateState=this._updateState&~STATE_IS_REFLECTING_TO_PROPERTY}}/**
     * This protected version of `requestUpdate` does not access or return the
     * `updateComplete` promise. This promise can be overridden and is therefore
     * not free to access.
     */requestUpdateInternal(name,oldValue,options){let shouldRequestUpdate=!0;// If we have a property key, perform property update steps.
if(name!==void 0){const ctor=this.constructor;options=options||ctor.getPropertyOptions(name);if(ctor._valueHasChanged(this[name],oldValue,options.hasChanged)){if(!this._changedProperties.has(name)){this._changedProperties.set(name,oldValue)}// Add to reflecting properties set.
// Note, it's important that every change has a chance to add the
// property to `_reflectingProperties`. This ensures setting
// attribute + property reflects correctly.
if(!0===options.reflect&&!(this._updateState&STATE_IS_REFLECTING_TO_PROPERTY)){if(this._reflectingProperties===void 0){this._reflectingProperties=new Map}this._reflectingProperties.set(name,options)}}else{// Abort the request if the property should not be considered changed.
shouldRequestUpdate=!1}}if(!this._hasRequestedUpdate&&shouldRequestUpdate){this._updatePromise=this._enqueueUpdate()}}/**
     * Requests an update which is processed asynchronously. This should
     * be called when an element should update based on some state not triggered
     * by setting a property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored. Returns the `updateComplete` Promise which is resolved
     * when the update completes.
     *
     * @param name {PropertyKey} (optional) name of requesting property
     * @param oldValue {any} (optional) old value of requesting property
     * @returns {Promise} A Promise that is resolved when the update completes.
     */requestUpdate(name,oldValue){this.requestUpdateInternal(name,oldValue);return this.updateComplete}/**
     * Sets up the element to asynchronously update.
     */_enqueueUpdate(){var _this=this;return babelHelpers.asyncToGenerator(function*(){_this._updateState=_this._updateState|STATE_UPDATE_REQUESTED;try{// Ensure any previous update has resolved before updating.
// This `await` also ensures that property changes are batched.
yield _this._updatePromise}catch(e){// Ignore any previous errors. We only care that the previous cycle is
// done. Any error should have been handled in the previous update.
}const result=_this.performUpdate();// If `performUpdate` returns a Promise, we await it. This is done to
// enable coordinating updates with a scheduler. Note, the result is
// checked to avoid delaying an additional microtask unless we need to.
if(null!=result){yield result}return!_this._hasRequestedUpdate})()}get _hasRequestedUpdate(){return this._updateState&STATE_UPDATE_REQUESTED}get hasUpdated(){return this._updateState&STATE_HAS_UPDATED}/**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * You can override this method to change the timing of updates. If this
     * method is overridden, `super.performUpdate()` must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```
     * protected async performUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.performUpdate();
     * }
     * ```
     */performUpdate(){// Abort any update if one is not pending when this is called.
// This can happen if `performUpdate` is called early to "flush"
// the update.
if(!this._hasRequestedUpdate){return}// Mixin instance properties once, if they exist.
if(this._instanceProperties){this._applyInstanceProperties()}let shouldUpdate=!1;const changedProperties=this._changedProperties;try{shouldUpdate=this.shouldUpdate(changedProperties);if(shouldUpdate){this.update(changedProperties)}else{this._markUpdated()}}catch(e){// Prevent `firstUpdated` and `updated` from running when there's an
// update exception.
shouldUpdate=!1;// Ensure element can accept additional updates after an exception.
this._markUpdated();throw e}if(shouldUpdate){if(!(this._updateState&STATE_HAS_UPDATED)){this._updateState=this._updateState|STATE_HAS_UPDATED;this.firstUpdated(changedProperties)}this.updated(changedProperties)}}_markUpdated(){this._changedProperties=new Map;this._updateState=this._updateState&~STATE_UPDATE_REQUESTED}/**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update.
     *
     * To await additional asynchronous work, override the `_getUpdateComplete`
     * method. For example, it is sometimes useful to await a rendered element
     * before fulfilling this Promise. To do this, first await
     * `super._getUpdateComplete()`, then any subsequent state.
     *
     * @returns {Promise} The Promise returns a boolean that indicates if the
     * update resolved without triggering another update.
     */get updateComplete(){return this._getUpdateComplete()}/**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     *   class MyElement extends LitElement {
     *     async _getUpdateComplete() {
     *       await super._getUpdateComplete();
     *       await this._myChild.updateComplete;
     *     }
     *   }
     */_getUpdateComplete(){return this._updatePromise}/**
     * Controls whether or not `update` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * @param _changedProperties Map of changed properties with old values
     */shouldUpdate(_changedProperties){return!0}/**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * @param _changedProperties Map of changed properties with old values
     */update(_changedProperties){if(this._reflectingProperties!==void 0&&0<this._reflectingProperties.size){// Use forEach so this works even if for/of loops are compiled to for
// loops expecting arrays
this._reflectingProperties.forEach((v,k)=>this._propertyToAttribute(k,this[k],v));this._reflectingProperties=void 0}this._markUpdated()}/**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     */updated(_changedProperties){}/**
                                  * Invoked when the element is first updated. Implement to perform one time
                                  * work on the element after update.
                                  *
                                  * Setting properties inside this method will trigger the element to update
                                  * again after this update cycle completes.
                                  *
                                  * @param _changedProperties Map of changed properties with old values
                                  */firstUpdated(_changedProperties){}}_exports.UpdatingElement$1=_exports.UpdatingElement=UpdatingElement;_a=finalized;/**
                 * Marks class as having finished creating properties.
                 */UpdatingElement[_a]=!0;var updatingElement={__proto__:null,defaultConverter:defaultConverter,notEqual:notEqual,UpdatingElement:UpdatingElement};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */_exports.$updatingElement=updatingElement;const legacyCustomElement=(tagName,clazz)=>{window.customElements.define(tagName,clazz);// Cast as any because TS doesn't recognize the return type as being a
// subtype of the decorated class when clazz is typed as
// `Constructor<HTMLElement>` for some reason.
// `Constructor<HTMLElement>` is helpful to make sure the decorator is
// applied to elements however.
// tslint:disable-next-line:no-any
return clazz},standardCustomElement=(tagName,descriptor)=>{const{kind,elements}=descriptor;return{kind,elements,// This callback is called once the class is otherwise fully defined
finisher(clazz){window.customElements.define(tagName,clazz)}}},customElement=tagName=>classOrDescriptor=>"function"===typeof classOrDescriptor?legacyCustomElement(tagName,classOrDescriptor):standardCustomElement(tagName,classOrDescriptor);_exports.customElement$1=_exports.customElement=customElement;const standardProperty=(options,element)=>{// When decorating an accessor, pass it through and add property metadata.
// Note, the `hasOwnProperty` check in `createProperty` ensures we don't
// stomp over the user's accessor.
if("method"===element.kind&&element.descriptor&&!("value"in element.descriptor)){return Object.assign(Object.assign({},element),{finisher(clazz){clazz.createProperty(element.key,options)}})}else{// createProperty() takes care of defining the property, but we still
// must return some kind of descriptor, so return a descriptor for an
// unused prototype field. The finisher calls createProperty().
return{kind:"field",key:Symbol(),placement:"own",descriptor:{},// When @babel/plugin-proposal-decorators implements initializers,
// do this instead of the initializer below. See:
// https://github.com/babel/babel/issues/9260 extras: [
//   {
//     kind: 'initializer',
//     placement: 'own',
//     initializer: descriptor.initializer,
//   }
// ],
initializer(){if("function"===typeof element.initializer){this[element.key]=element.initializer.call(this)}},finisher(clazz){clazz.createProperty(element.key,options)}}}},legacyProperty=(options,proto,name)=>{proto.constructor.createProperty(name,options)};/**
    * A property decorator which creates a LitElement property which reflects a
    * corresponding attribute value. A [[`PropertyDeclaration`]] may optionally be
    * supplied to configure property features.
    *
    * This decorator should only be used for public fields. Private or protected
    * fields should use the [[`internalProperty`]] decorator.
    *
    * @example
    * ```ts
    * class MyElement {
    *   @property({ type: Boolean })
    *   clicked = false;
    * }
    * ```
    * @category Decorator
    * @ExportDecoratedItems
    */function property(options){// tslint:disable-next-line:no-any decorator
return(protoOrDescriptor,name)=>name!==void 0?legacyProperty(options,protoOrDescriptor,name):standardProperty(options,protoOrDescriptor)}/**
   * Declares a private or protected property that still triggers updates to the
   * element when it changes.
   *
   * Properties declared this way must not be used from HTML or HTML templating
   * systems, they're solely for properties internal to the element. These
   * properties may be renamed by optimization tools like closure compiler.
   * @category Decorator
   */function internalProperty(options){return property({attribute:!1,hasChanged:null===options||void 0===options?void 0:options.hasChanged})}/**
   * A property decorator that converts a class property into a getter that
   * executes a querySelector on the element's renderRoot.
   *
   * @param selector A DOMString containing one or more selectors to match.
   * @param cache An optional boolean which when true performs the DOM query only
   * once and caches the result.
   *
   * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
   *
   * @example
   *
   * ```ts
   * class MyElement {
   *   @query('#first')
   *   first;
   *
   *   render() {
   *     return html`
   *       <div id="first"></div>
   *       <div id="second"></div>
   *     `;
   *   }
   * }
   * ```
   * @category Decorator
   */function query(selector,cache){return(protoOrDescriptor,// tslint:disable-next-line:no-any decorator
name)=>{const descriptor={get(){return this.renderRoot.querySelector(selector)},enumerable:!0,configurable:!0};if(cache){const key="symbol"===typeof name?Symbol():`__${name}`;descriptor.get=function(){if(this[key]===void 0){this[key]=this.renderRoot.querySelector(selector)}return this[key]}}return name!==void 0?legacyQuery(descriptor,protoOrDescriptor,name):standardQuery(descriptor,protoOrDescriptor)}}// Note, in the future, we may extend this decorator to support the use case
// where the queried element may need to do work to become ready to interact
// with (e.g. load some implementation code). If so, we might elect to
// add a second argument defining a function that can be run to make the
// queried element loaded/updated/ready.
/**
 * A property decorator that converts a class property into a getter that
 * returns a promise that resolves to the result of a querySelector on the
 * element's renderRoot done after the element's `updateComplete` promise
 * resolves. When the queried property may change with element state, this
 * decorator can be used instead of requiring users to await the
 * `updateComplete` before accessing the property.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * @example
 * ```ts
 * class MyElement {
 *   @queryAsync('#first')
 *   first;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 *
 * // external usage
 * async doSomethingWithFirst() {
 *  (await aMyElement.first).doSomething();
 * }
 * ```
 * @category Decorator
 */function queryAsync(selector){return(protoOrDescriptor,// tslint:disable-next-line:no-any decorator
name)=>{const descriptor={get(){var _this2=this;return babelHelpers.asyncToGenerator(function*(){yield _this2.updateComplete;return _this2.renderRoot.querySelector(selector)})()},enumerable:!0,configurable:!0};return name!==void 0?legacyQuery(descriptor,protoOrDescriptor,name):standardQuery(descriptor,protoOrDescriptor)}}/**
   * A property decorator that converts a class property into a getter
   * that executes a querySelectorAll on the element's renderRoot.
   *
   * @param selector A DOMString containing one or more selectors to match.
   *
   * See:
   * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
   *
   * @example
   * ```ts
   * class MyElement {
   *   @queryAll('div')
   *   divs;
   *
   *   render() {
   *     return html`
   *       <div id="first"></div>
   *       <div id="second"></div>
   *     `;
   *   }
   * }
   * ```
   * @category Decorator
   */function queryAll(selector){return(protoOrDescriptor,// tslint:disable-next-line:no-any decorator
name)=>{const descriptor={get(){return this.renderRoot.querySelectorAll(selector)},enumerable:!0,configurable:!0};return name!==void 0?legacyQuery(descriptor,protoOrDescriptor,name):standardQuery(descriptor,protoOrDescriptor)}}const legacyQuery=(descriptor,proto,name)=>{Object.defineProperty(proto,name,descriptor)},standardQuery=(descriptor,element)=>({kind:"method",placement:"prototype",key:element.key,descriptor}),standardEventOptions=(options,element)=>{return Object.assign(Object.assign({},element),{finisher(clazz){Object.assign(clazz.prototype[element.key],options)}})},legacyEventOptions=// tslint:disable-next-line:no-any legacy decorator
(options,proto,name)=>{Object.assign(proto[name],options)};/**
    * Adds event listener options to a method used as an event listener in a
    * lit-html template.
    *
    * @param options An object that specifies event listener options as accepted by
    * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
    *
    * Current browsers support the `capture`, `passive`, and `once` options. See:
    * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
    *
    * @example
    * ```ts
    * class MyElement {
    *   clicked = false;
    *
    *   render() {
    *     return html`
    *       <div @click=${this._onClick}`>
    *         <button></button>
    *       </div>
    *     `;
    *   }
    *
    *   @eventOptions({capture: true})
    *   _onClick(e) {
    *     this.clicked = true;
    *   }
    * }
    * ```
    * @category Decorator
    */function eventOptions(options){// Return value typed as any to prevent TypeScript from complaining that
// standard decorator function signature does not match TypeScript decorator
// signature
// TODO(kschaaf): unclear why it was only failing on this decorator and not
// the others
return(protoOrDescriptor,name)=>name!==void 0?legacyEventOptions(options,protoOrDescriptor,name):standardEventOptions(options,protoOrDescriptor)}// x-browser support for matches
// tslint:disable-next-line:no-any
const ElementProto=Element.prototype,legacyMatches=ElementProto.msMatchesSelector||ElementProto.webkitMatchesSelector;/**
                                                                                             * A property decorator that converts a class property into a getter that
                                                                                             * returns the `assignedNodes` of the given named `slot`. Note, the type of
                                                                                             * this property should be annotated as `NodeListOf<HTMLElement>`.
                                                                                             *
                                                                                             * @param slotName A string name of the slot.
                                                                                             * @param flatten A boolean which when true flattens the assigned nodes,
                                                                                             * meaning any assigned nodes that are slot elements are replaced with their
                                                                                             * assigned nodes.
                                                                                             * @param selector A string which filters the results to elements that match
                                                                                             * the given css selector.
                                                                                             *
                                                                                             * * @example
                                                                                             * ```ts
                                                                                             * class MyElement {
                                                                                             *   @queryAssignedNodes('list', true, '.item')
                                                                                             *   listItems;
                                                                                             *
                                                                                             *   render() {
                                                                                             *     return html`
                                                                                             *       <slot name="list"></slot>
                                                                                             *     `;
                                                                                             *   }
                                                                                             * }
                                                                                             * ```
                                                                                             * @category Decorator
                                                                                             */function queryAssignedNodes(slotName="",flatten=!1,selector=""){return(protoOrDescriptor,// tslint:disable-next-line:no-any decorator
name)=>{const descriptor={get(){const slotSelector=`slot${slotName?`[name=${slotName}]`:":not([name])"}`,slot=this.renderRoot.querySelector(slotSelector);let nodes=slot&&slot.assignedNodes({flatten});if(nodes&&selector){nodes=nodes.filter(node=>node.nodeType===Node.ELEMENT_NODE&&node.matches?node.matches(selector):legacyMatches.call(node,selector))}return nodes},enumerable:!0,configurable:!0};return name!==void 0?legacyQuery(descriptor,protoOrDescriptor,name):standardQuery(descriptor,protoOrDescriptor)}}var decorators={__proto__:null,customElement:customElement,property:property,internalProperty:internalProperty,query:query,queryAsync:queryAsync,queryAll:queryAll,eventOptions:eventOptions,queryAssignedNodes:queryAssignedNodes};/**
   @license
   Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at
   http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
   http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
   found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
   part of the polymer project is also subject to an additional IP rights grant
   found at http://polymer.github.io/PATENTS.txt
   */ /**
       * Whether the current browser supports `adoptedStyleSheets`.
       */_exports.$decorators=decorators;const supportsAdoptingStyleSheets=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;_exports.supportsAdoptingStyleSheets$1=_exports.supportsAdoptingStyleSheets=supportsAdoptingStyleSheets;const constructionToken=Symbol();class CSSResult{constructor(cssText,safeToken){if(safeToken!==constructionToken){throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.")}this.cssText=cssText}// Note, this is a getter so that it's lazy. In practice, this means
// stylesheets are not created until the first element instance is made.
get styleSheet(){if(this._styleSheet===void 0){// Note, if `supportsAdoptingStyleSheets` is true then we assume
// CSSStyleSheet is constructable.
if(supportsAdoptingStyleSheets){this._styleSheet=new CSSStyleSheet;this._styleSheet.replaceSync(this.cssText)}else{this._styleSheet=null}}return this._styleSheet}toString(){return this.cssText}}/**
   * Wrap a value for interpolation in a [[`css`]] tagged template literal.
   *
   * This is unsafe because untrusted CSS text can be used to phone home
   * or exfiltrate data to an attacker controlled site. Take care to only use
   * this with trusted input.
   */_exports.CSSResult$1=_exports.CSSResult=CSSResult;const unsafeCSS=value=>{return new CSSResult(value+"",constructionToken)};_exports.unsafeCSS$1=_exports.unsafeCSS=unsafeCSS;const textFromCSSResult=value=>{if(value instanceof CSSResult){return value.cssText}else if("number"===typeof value){return value}else{throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)}},css=(strings,...values)=>{const cssText=values.reduce((acc,v,idx)=>acc+textFromCSSResult(v)+strings[idx+1],strings[0]);return new CSSResult(cssText,constructionToken)};/**
    * Template tag which which can be used with LitElement's [[LitElement.styles |
    * `styles`]] property to set element styles. For security reasons, only literal
    * string values may be used. To incorporate non-literal values [[`unsafeCSS`]]
    * may be used inside a template string part.
    */_exports.css$1=_exports.css=css;var cssTag={__proto__:null,supportsAdoptingStyleSheets:supportsAdoptingStyleSheets,CSSResult:CSSResult,unsafeCSS:unsafeCSS,css:css};// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time
_exports.$cssTag=cssTag;(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");/**
                                                                                      * Sentinal value used to avoid calling lit-html's render function when
                                                                                      * subclasses do not implement `render`
                                                                                      */const renderNotImplemented={};/**
                                  * Base element class that manages element properties and attributes, and
                                  * renders a lit-html template.
                                  *
                                  * To define a component, subclass `LitElement` and implement a
                                  * `render` method to provide the component's template. Define properties
                                  * using the [[`properties`]] property or the [[`property`]] decorator.
                                  */class LitElement extends UpdatingElement{/**
   * Return the array of styles to apply to the element.
   * Override this method to integrate into a style management system.
   *
   * @nocollapse
   */static getStyles(){return this.styles}/** @nocollapse */static _getUniqueStyles(){// Only gather styles once per class
if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this))){return}// Take care not to call `this.getStyles()` multiple times since this
// generates new CSSResults each time.
// TODO(sorvell): Since we do not cache CSSResults by input, any
// shared styles will generate new stylesheet objects, which is wasteful.
// This should be addressed when a browser ships constructable
// stylesheets.
const userStyles=this.getStyles();if(Array.isArray(userStyles)){// De-duplicate styles preserving the _last_ instance in the set.
// This is a performance optimization to avoid duplicated styles that can
// occur especially when composing via subclassing.
// The last item is kept to try to preserve the cascade order with the
// assumption that it's most important that last added styles override
// previous styles.
const addStyles=(styles,set)=>styles.reduceRight((set,s)=>// Note: On IE set.add() does not return the set
Array.isArray(s)?addStyles(s,set):(set.add(s),set),set),set=addStyles(userStyles,new Set),styles=[];// Array.from does not work on Set in IE, otherwise return
// Array.from(addStyles(userStyles, new Set<CSSResult>())).reverse()
set.forEach(v=>styles.unshift(v));this._styles=styles}else{this._styles=userStyles===void 0?[]:[userStyles]}// Ensure that there are no invalid CSSStyleSheet instances here. They are
// invalid in two conditions.
// (1) the sheet is non-constructible (`sheet` of a HTMLStyleElement), but
//     this is impossible to check except via .replaceSync or use
// (2) the ShadyCSS polyfill is enabled (:. supportsAdoptingStyleSheets is
//     false)
this._styles=this._styles.map(s=>{if(s instanceof CSSStyleSheet&&!supportsAdoptingStyleSheets){// Flatten the cssText from the passed constructible stylesheet (or
// undetectable non-constructible stylesheet). The user might have
// expected to update their stylesheets over time, but the alternative
// is a crash.
const cssText=Array.prototype.slice.call(s.cssRules).reduce((css,rule)=>css+rule.cssText,"");return unsafeCSS(cssText)}return s})}/**
     * Performs element initialization. By default this calls
     * [[`createRenderRoot`]] to create the element [[`renderRoot`]] node and
     * captures any pre-set values for registered properties.
     */initialize(){super.initialize();this.constructor._getUniqueStyles();this.renderRoot=this.createRenderRoot();// Note, if renderRoot is not a shadowRoot, styles would/could apply to the
// element's getRootNode(). While this could be done, we're choosing not to
// support this now since it would require different logic around de-duping.
if(window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot){this.adoptStyles()}}/**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     * @returns {Element|DocumentFragment} Returns a node into which to render.
     */createRenderRoot(){return this.attachShadow({mode:"open"})}/**
     * Applies styling to the element shadowRoot using the [[`styles`]]
     * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
     * available and will fallback otherwise. When Shadow DOM is polyfilled,
     * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
     * is available but `adoptedStyleSheets` is not, styles are appended to the
     * end of the `shadowRoot` to [mimic spec
     * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
     */adoptStyles(){const styles=this.constructor._styles;if(0===styles.length){return}// There are three separate cases here based on Shadow DOM support.
// (1) shadowRoot polyfilled: use ShadyCSS
// (2) shadowRoot.adoptedStyleSheets available: use it
// (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
// rendering
if(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow){window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map(s=>s.cssText),this.localName)}else if(supportsAdoptingStyleSheets){this.renderRoot.adoptedStyleSheets=styles.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet)}else{// This must be done after rendering so the actual style insertion is done
// in `update`.
this._needsShimAdoptedStyleSheets=!0}}connectedCallback(){super.connectedCallback();// Note, first update/render handles styleElement so we only call this if
// connected after first update.
if(this.hasUpdated&&window.ShadyCSS!==void 0){window.ShadyCSS.styleElement(this)}}/**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * @param _changedProperties Map of changed properties with old values
     */update(changedProperties){// Setting properties in `render` should not trigger an update. Since
// updates are allowed after super.update, it's important to call `render`
// before that.
const templateResult=this.render();super.update(changedProperties);// If render is not implemented by the component, don't call lit-html render
if(templateResult!==renderNotImplemented){this.constructor.render(templateResult,this.renderRoot,{scopeName:this.localName,eventContext:this})}// When native Shadow DOM is used but adoptedStyles are not supported,
// insert styling after rendering to ensure adoptedStyles have highest
// priority.
if(this._needsShimAdoptedStyleSheets){this._needsShimAdoptedStyleSheets=!1;this.constructor._styles.forEach(s=>{const style=document.createElement("style");style.textContent=s.cssText;this.renderRoot.appendChild(style)})}}/**
     * Invoked on each update to perform rendering tasks. This method may return
     * any value renderable by lit-html's `NodePart` - typically a
     * `TemplateResult`. Setting properties inside this method will *not* trigger
     * the element to update.
     */render(){return renderNotImplemented}}/**
   * Ensure this class is marked as `finalized` as an optimization ensuring
   * it will not needlessly try to `finalize`.
   *
   * Note this property name is a string to prevent breaking Closure JS Compiler
   * optimizations. See updating-element.ts for more information.
   */_exports.LitElement=LitElement;LitElement.finalized=!0;/**
                                 * Reference to the underlying library method used to render the element's
                                 * DOM. By default, points to the `render` method from lit-html's shady-render
                                 * module.
                                 *
                                 * **Most users will never need to touch this property.**
                                 *
                                 * This  property should not be confused with the `render` instance method,
                                 * which should be overridden to define a template for the element.
                                 *
                                 * Advanced users creating a new base class based on LitElement can override
                                 * this property to point to a custom render method with a signature that
                                 * matches [shady-render's `render`
                                 * method](https://lit-html.polymer-project.org/api/modules/shady_render.html#render).
                                 *
                                 * @nocollapse
                                 */LitElement.render=render$2;var litElement={__proto__:null,LitElement:LitElement,defaultConverter:defaultConverter,notEqual:notEqual,UpdatingElement:UpdatingElement,customElement:customElement,property:property,internalProperty:internalProperty,query:query,queryAsync:queryAsync,queryAll:queryAll,eventOptions:eventOptions,queryAssignedNodes:queryAssignedNodes,html:html,svg:svg,TemplateResult:TemplateResult,SVGTemplateResult:SVGTemplateResult,supportsAdoptingStyleSheets:supportsAdoptingStyleSheets,CSSResult:CSSResult,unsafeCSS:unsafeCSS,css:css};_exports.$litElement=litElement;class BaseElement extends LitElement{constructor(){super(...arguments);this.debug=!1}performUpdate(){var _superprop_getPerformUpdate=()=>super.performUpdate,_this3=this;return babelHelpers.asyncToGenerator(function*(){yield new Promise(resolve=>requestAnimationFrame(()=>resolve()));return _superprop_getPerformUpdate().call(_this3)})()}__logger(logLevel,message,...restParam){// first args must be separated as keyPattern for fix issue of `this._log('a=%s', a)`
const tagName=(this.tagName+"").toLowerCase();console[logLevel](`%c<%s>%c ${message}`,"color: #4CAF50; font-size: 1.2em;",tagName,"color: inherit;font-size: 1em",...restParam)}log(message,...restParam){this.__logger("log",message,...restParam)}_log(message,...restParam){if(this.debug){this.log(message,...restParam)}}_warn(message,...restParam){this.__logger("warn",message,...restParam)}_error(message,...restParam){this.__logger("error",message,...restParam)}_l10nNumber(number){return new Intl.NumberFormat(this.lang).format(number)}_fire(eventName,detail,bubbles=!1){this._log("fire %s {%o}",eventName,detail);this.dispatchEvent(new CustomEvent(eventName,{detail,bubbles,composed:bubbles}))}}_exports.BaseElement=BaseElement;__decorate([property({type:Boolean,reflect:!0})],BaseElement.prototype,"debug",void 0);var baseElement={__proto__:null,BaseElement:BaseElement};// export const baseStyle = css`
//   body {
//     margin: 0;
//     background-color: rgb(98, 0, 238);
//     font-family: "open Sans", "Tahoma";
//   }
//   p {
//     margin: 0;
//   }
//   .app {
//     margin: 100px auto;
//     width: 320px;
//   }
// `;
_exports.$baseElement=baseElement;const calendarBaseStyle=css`
  :host {
    /*A0144F*/
    --theme-primary-color: var(--primary-color, 98, 0, 238);
    --theme-primary-variant-color: var(--primary-variant-color, 55, 0, 179);

    --theme-accent-color: var(--accent-color, 3, 218, 198);
    --theme-accent-variant-color: var(--accent-variant-color, 1, 135, 134);

    --theme-background-color: var(--background-color, 255, 255, 255);
    --theme-surface-color: var(--surface-color, 255, 255, 255);

    --theme-error-color: var(--error-color, 176, 0, 32);

    /*
    Help:
    Material Typography Color System
    #FFFFFFDE -> FFFFFF %87
    #FFFFFF99 -> FFFFFF %60
    #FFFFFF61 -> FFFFFF %38
    */

    --theme-on-primary-color: var(--on-primary-color, 255, 255, 255);
    --theme-on-accent-color: var(--on-accent-color, 0, 0, 0);
    --theme-on-background-color: var(--on-background-color, 0, 0, 0);
    --theme-on-surface-color: var(--on-surface-color, 0, 0, 0);
    --theme-on-error-color: var(--on-error-color, 255, 255, 255);
  }

  .views-container {
    padding: 0 8px 16px;
    position: relative;
  }

  .view {
    width: 100%;
    transition: ease-out 0.25s;
    position: relative;
  }

  [hidden] {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    transform: translate3d(-25px, 0, 0);
  }

  .calendar-view {
    display: block;
  }

  .calendar-row {
    display: flex;
    padding: 0 8px;
    margin: 6px 0;
  }

  .calendar-row .calendar-day {
    /* background-color: tomato; */
    /* margin: 2px; */
    font-weight: 500;
    flex: 1 0 auto;
    position: relative;
  }

  .calendar-row .calendar-day::after {
    content: "";
    float: left;
    display: block;
    padding-top: 100%;
  }

  .calendar-row .calendar-day {
    color: rgba(var(--theme-on-background-color) 0.87);
    cursor: pointer;
    border-radius: 50%;
  }

  .calendar-row .current-date-highlight {
    color: rgb(var(--theme-accent-color));
    background-color: rgba(var(--theme-accent-variant-color), 0.09);
  }

  .calendar-row .selected-day {
    color: rgba(var(--theme-on-primary-color), 0.87);
    background: rgb(var(--theme-primary-color));
  }

  .calendar-row .in-range-day {
    background: rgb(var(--theme-primary-variant-color));
    border-radius: 0;
  }

  .calendar-day-data {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .calendar-row .in-range-day,
  .calendar-day-data[data-range-edge="true"],
  .calendar-day-data[data-start-range-edge] {
    transition: ease-in 0.15s;
  }

  .calendar-row .fade {
    color: rgba(0, 0, 0, 0.38);
  }

  .goto-time-view {
    padding: 10px 0;
    /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15); */
    border-top: 2px solid rgba(0, 0, 0, 0.09);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    fill: rgba(0, 0, 0, 0.6);
  }
`;_exports.calendarBaseStyle=calendarBaseStyle;var baseStyle={__proto__:null,calendarBaseStyle:calendarBaseStyle};_exports.$baseStyle=baseStyle;class ClassList{constructor(element){this.classes=new Set;this.changed=!1;this.element=element;const classList=(element.getAttribute("class")||"").split(/\s+/);for(const cls of classList){this.classes.add(cls)}}add(cls){this.classes.add(cls);this.changed=!0}remove(cls){this.classes.delete(cls);this.changed=!0}commit(){if(this.changed){let classString="";this.classes.forEach(cls=>classString+=cls+" ");this.element.setAttribute("class",classString)}}}/**
   * Stores the ClassInfo object applied to a given AttributePart.
   * Used to unset existing values when a new ClassInfo object is applied.
   */const previousClassesCache=new WeakMap,classMap=directive(classInfo=>part=>{if(!(part instanceof AttributePart)||part instanceof PropertyPart||"class"!==part.committer.name||1<part.committer.parts.length){throw new Error("The `classMap` directive must be used in the `class` attribute "+"and must be the only part in the attribute.")}const{committer}=part,{element}=committer;let previousClasses=previousClassesCache.get(part);if(previousClasses===void 0){// Write static classes once
// Use setAttribute() because className isn't a string on SVG elements
element.setAttribute("class",committer.strings.join(" "));previousClassesCache.set(part,previousClasses=new Set)}const classList=element.classList||new ClassList(element);// Remove old classes that no longer apply
// We use forEach() instead of for-of so that re don't require down-level
// iteration.
previousClasses.forEach(name=>{if(!(name in classInfo)){classList.remove(name);previousClasses.delete(name)}});// Add or remove classes based on their classMap value
for(const name in classInfo){const value=classInfo[name];if(value!=previousClasses.has(name)){// We explicitly want a loose truthy check of `value` because it seems
// more convenient that '' and 0 are skipped.
if(value){classList.add(name);previousClasses.add(name)}else{classList.remove(name);previousClasses.delete(name)}}}if("function"===typeof classList.commit){classList.commit()}});/**
                                             * A directive that applies CSS classes. This must be used in the `class`
                                             * attribute and must be the only part used in the attribute. It takes each
                                             * property in the `classInfo` argument and adds the property name to the
                                             * element's `class` if the property value is truthy; if the property value is
                                             * falsey, the property name is removed from the element's `class`. For example
                                             * `{foo: bar}` applies the class `foo` if the value of `bar` is truthy.
                                             * @param classInfo {ClassInfo}
                                             */_exports.classMap=classMap;var classMap$1={__proto__:null,classMap:classMap};_exports.$classMap=classMap$1;let MonthList=class MonthList extends BaseElement{constructor(){super();this.activeMonthNumber=1;document.addEventListener("current-month-changed",this.onCurrentMonthChanged.bind(this))}disconnectedCallback(){document.removeEventListener("current-month-changed",this.onCurrentMonthChanged.bind(this));super.disconnectedCallback()}shouldUpdate(){this._log("shouldUpdate");return Array.isArray(this.monthList)&&0<this.monthList.length}render(){this._log("render");return html`
      ${this.monthList.map((month,index)=>{return html`
          <div
            class="month-button"
            ?active="${this.activeMonthNumber===index+1}"
            @click=${()=>{this.activeMonthNumber=index+1;this._fire("month-changed-to",index+1)}}
          >
            <div>${month.shortName?month.shortName:month.name}</div>
          </div>
        `})}`}onCurrentMonthChanged(event){this._log("onCurrentMonthChanged");event.stopPropagation();if(!event.detail)return;const _event=event;this.activeMonthNumber=_event.detail}};_exports.MonthList=MonthList;MonthList.styles=css`

    :host {
      display: flex;
      flex-flow: row wrap;
    }

    .month-button {
      width: calc(33.33333% - 40px);
      text-align: center;
      border-radius: 6px;
      padding: 10px 16px;
      font-weight: 500;
      margin: 4px;
      color: rgba(0, 0, 0, 0.60);
      cursor: pointer;
    }

    .month-button:hover {
      background-color: rgba(var(--theme-primary-color) ,0.09);
      color: rgba(var(--theme-on-background-color), 0.60);
    }

    [active] {
      background-color: rgb(var(--theme-primary-color));
      color: rgba(var(--theme-on-primary-color), 0.87);
    }
  `;__decorate([property({type:Array})],MonthList.prototype,"monthList",void 0);__decorate([property({type:Number,attribute:"active-month"})],MonthList.prototype,"activeMonthNumber",void 0);_exports.MonthList=MonthList=__decorate([customElement("month-list")],MonthList);var monthList={__proto__:null,get MonthList(){return MonthList}};_exports.$monthList=monthList;let YearList=class YearList extends BaseElement{constructor(){super();document.addEventListener("current-year-changed",this.onCurrentYearChanged.bind(this))}disconnectedCallback(){document.removeEventListener("current-year-changed",this.onCurrentYearChanged.bind(this));super.disconnectedCallback()}shouldUpdate(){this._log("shouldUpdate");if(!(this.currentYear&&this.minYear&&this.maxYear)){return!1}return!0}update(changedProperties){this._log("update");if(changedProperties.has("currentYear")){this.calculateYearList()}super.update(changedProperties)}render(){this._log("render");return html`
      ${this.yearList.map(year=>{return html`
          <div
            class="year-button"
            ?active="${this.activeYear===year}"
            @click="${()=>{this.activeYear=year;this._fire("year-changed-to",year)}}"
          >
            <div>${year}</div>
          </div>
        `})}`}onCurrentYearChanged(event){this._log("onCurrentYearChanged");event.stopPropagation();if(!event.detail)return;const _event=event;this.currentYear=this.activeYear=_event.detail}calculateYearList(){this._log("calculateYearList");const currentYear=this.currentYear,minYear=this.minYear,maxYear=this.maxYear;let decade=currentYear-currentYear%10;// FIXME:
if(currentYear>maxYear||currentYear<minYear)return;if(currentYear===maxYear){decade=maxYear-10;this.yearList=Array.from({length:11},(_item,index)=>decade+index);return}if(10===maxYear-decade){this.yearList=Array.from({length:11},(_item,index)=>decade+index);return}if(decade+9>maxYear){this.yearList=Array.from({length:maxYear-currentYear+1},(_item,index)=>decade+index);return}this.yearList=Array.from({length:10},(_item,index)=>decade+index);this.activeYear=currentYear}};_exports.YearList=YearList;YearList.styles=css`
    :host {
      display: flex;
      flex-flow: row wrap;
    }

    .year-button {
      width: calc(33.33333% - 40px);
      text-align: center;
      border-radius: 6px;
      padding: 10px 16px;
      font-weight: 500;
      margin: 4px;
      color: rgba(0, 0, 0, 0.60);
      cursor: pointer;
    }

    .year-button:hover {
      background-color: rgba(var(--theme-primary-color) ,0.09);
      color: rgba(var(--theme-on-background-color), 0.60);
    }

    [active] {
      background-color: rgb(var(--theme-primary-color));
      color: rgba(var(--theme-on-primary-color), 0.87);
    }
  `;__decorate([property({type:Number})],YearList.prototype,"currentYear",void 0);__decorate([property({type:Number})],YearList.prototype,"activeYear",void 0);__decorate([property({type:Number})],YearList.prototype,"maxYear",void 0);__decorate([property({type:Number})],YearList.prototype,"minYear",void 0);_exports.YearList=YearList=__decorate([customElement("year-list")],YearList);var yearList={__proto__:null,get YearList(){return YearList}};_exports.$yearList=yearList;let DecadeList=class DecadeList extends BaseElement{constructor(){super();this.decadeList=[];this.activeDecade=[];document.addEventListener("current-year-changed",this.onCurrentYearChanged.bind(this))}disconnectedCallback(){document.removeEventListener("current-year-changed",this.onCurrentYearChanged.bind(this));super.disconnectedCallback()}shouldUpdate(){this._log("shouldUpdate");if(!(this.currentYear&&this.minYear&&this.maxYear)){return!1}return!0}update(changedProperties){this._log("update");if(changedProperties.has("minYear")||changedProperties.has("maxYear")){this.createDedcadeList(this.minYear,this.maxYear)}super.update(changedProperties)}render(){this._log("render");const year=this.currentYear,decadeStart=year-year%10;let targeIndex=this.decadeList.findIndex(item=>item[0]===decadeStart);// It will happen when the user select the maxYear
if(-1===targeIndex){targeIndex=this.decadeList.findIndex(item=>item[1]===decadeStart)}this.activeDecade=this.decadeList[targeIndex];if(0===targeIndex){return html`
        ${this.decadeList.slice(0,3).map(decade=>{return html`
            <div
              class="decade-button"
              ?active="${decade[0]===decadeStart}"
              @click="${()=>{this._fire("decade-changed-to",decade)}}"
            >
              <div>${decade[0]}-${decade[1]}</div>
            </div>
            `})}`}if(targeIndex===this.decadeList.length-1){return html`
        ${this.decadeList.slice(this.decadeList.length-3).map(decade=>{return html`
            <div
              class="decade-button"
              ?active="${decade[0]===decadeStart||decade[1]===this.maxYear}"
              @click="${()=>{this._fire("decade-changed-to",decade)}}"
            >
              <div>${decade[0]}-${decade[1]}</div>
            </div>
            `})}`}return html`
      ${this.decadeList.slice(targeIndex-1,targeIndex+2).map(decade=>{return html`
          <div
            class="decade-button"
            ?active="${decade[0]===decadeStart}"
            @click="${()=>{this._fire("decade-changed-to",decade)}}"
          >
            <div>${decade[0]}-${decade[1]}</div>
          </div>
          `})}`}updated(){this._log("updated");this._fire("decade-changed",this.activeDecade)}onCurrentYearChanged(event){this._log("onCurrentYearChanged");event.stopPropagation();if(!event.detail)return;const _event=event;this.currentYear=_event.detail}createDedcadeList(minYear,maxYear){this._log("createDedcadeList");if(minYear+9>maxYear){this.decadeList.push([minYear,maxYear]);return}this.decadeList.push([minYear,minYear+9]);const decadeCount=Math.floor((maxYear-minYear)/10);if(1===decadeCount){this.decadeList[1]=[this.decadeList[0][0]+1,maxYear];return}for(let i=1;i<decadeCount;i++){const startCurrentDedcade=this.decadeList[i-1][1]+1,dedcade=[startCurrentDedcade,startCurrentDedcade+9];this.decadeList.push(dedcade)}const lastDecade=this.decadeList[this.decadeList.length-1];if(0===lastDecade[1]-lastDecade[0]){this.decadeList.splice(this.decadeList.length-1,1)}this.decadeList[this.decadeList.length-1][1]=maxYear}};_exports.DecadeList=DecadeList;DecadeList.styles=css`
    :host {
      display: flex;
      flex-flow: row wrap;
    }

    .decade-button {
      width: calc(100% - 40px);
      text-align: center;
      border-radius: 6px;
      padding: 10px 16px;
      font-weight: 500;
      margin: 4px;
      color: rgba(0, 0, 0, 0.60);
      cursor: pointer;
    }

    .decade-button:hover {
      background-color: rgba(var(--theme-primary-color) ,0.09);
      color: rgba(var(--theme-on-background-color), 0.60);
    }

    [active] {
      background-color: rgb(var(--theme-primary-color));
      color: rgba(var(--theme-on-primary-color), 0.87);
    }
  `;__decorate([property({type:Number})],DecadeList.prototype,"currentYear",void 0);__decorate([property({type:Number})],DecadeList.prototype,"minYear",void 0);__decorate([property({type:Number})],DecadeList.prototype,"maxYear",void 0);_exports.DecadeList=DecadeList=__decorate([customElement("decade-list")],DecadeList);var decadeList={__proto__:null,get DecadeList(){return DecadeList}};_exports.$decadeList=decadeList;const calendar=svg`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V10h16v11zm0-13H4V5h16v3z" /></svg>`;_exports.calendar=calendar;const arrowForward=svg`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z" /></svg>`;_exports.arrowForward=arrowForward;const arrowBackward=svg`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z" /></svg>`;_exports.arrowBackward=arrowBackward;const clock=svg`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>`;_exports.clock=clock;var icon={__proto__:null,calendar:calendar,arrowForward:arrowForward,arrowBackward:arrowBackward,clock:clock};_exports.$icon=icon;let HeaderElement=class HeaderElement extends BaseElement{constructor(){super(...arguments);this.title="";this.disableNavigation=!1;this.calendarActiveView="calendar"}render(){this._log("render: %s",this.calendarActiveView);return html`
      <div class="previous" ?hidden="${this.disableNavigation}"  @click="${this.onPrevArrowClick}">
        ${arrowBackward}
      </div>
      <p @click=${this.onTitleClick}>${this.title}</p>
      <div class="next" ?hidden="${this.disableNavigation}"  @click="${this.onNextArrowClick}">
        ${arrowForward}
      </div>
    `}onTitleClick(){this._log("onTitleClick");switch(this.calendarActiveView){case"calendar":this._fire("show-month-list",void 0);break;case"monthList":this._fire("show-year-list",void 0);break;case"yearList":this._fire("show-decade-list",void 0);break;case"decadeList":this._fire("show-year-list",void 0);break;default:this._warn("Invalid view");break;}}onPrevArrowClick(){this._log("onPrevArrowClick");switch(this.calendarActiveView){case"calendar":this._fire("prev-month",void 0);break;case"monthList":this._fire("prev-year",void 0);break;case"yearList":case"decadeList":this._fire("prev-decade",void 0);break;default:this._warn("Invalid view");break;}}onNextArrowClick(){this._log("onNextArrowClick");switch(this.calendarActiveView){case"calendar":this._fire("next-month",void 0);break;case"monthList":this._fire("next-year",void 0);break;case"yearList":case"decadeList":this._fire("next-decade",void 0);break;default:this._warn("Invalid view");break;}}};// FIX THEME & CSS VARs
_exports.HeaderElement=HeaderElement;HeaderElement.styles=css`
   :host {
      display: flex;
      flex-flow: row nowrap;
      padding: 16px;
      align-items: center;
   }

   p {
      font-weight: 500;
      cursor: pointer;
      color: rgba(var(--theme-on-background-color), 0.87);
      align-self: stretch;
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      margin: 0 8px;
    }

    .next,
    .previous {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      fill: rgb(var(--theme-primary-color));
      cursor: pointer;
      padding: 6px;
      background-color: rgba(var(--theme-primary-color), 0.09);
    }

    [hidden] {
      display: none;
    }
  `;__decorate([property({type:String})],HeaderElement.prototype,"title",void 0);__decorate([property({type:Boolean,attribute:"disable"})],HeaderElement.prototype,"disableNavigation",void 0);_exports.HeaderElement=HeaderElement=__decorate([customElement("header-element")],HeaderElement);var header={__proto__:null,get HeaderElement(){return HeaderElement}};_exports.$header=header;const addLeadingZero=number=>{// return  number < 10 ? '0' + number : number.toString();
return number.toString().padStart(2,"0")};_exports.addLeadingZero=addLeadingZero;var addLeadingZero$1={__proto__:null,addLeadingZero:addLeadingZero};_exports.$addLeadingZero=addLeadingZero$1;const dateNow=new Date;let ClockElement=class ClockElement extends BaseElement{constructor(){super(...arguments);this.time=`${addLeadingZero(dateNow.getHours())}:${addLeadingZero(dateNow.getMinutes())}:${addLeadingZero(dateNow.getSeconds())}`;this.timeArray=this.time.split(":").map(item=>parseInt(item));this.focusedInputIndex=-1}shouldUpdate(){this._log("shouldUpdate");return 2===this.time.split(":").length||3===this.time.split(":").length}update(changedProperties){this._log("update");if(changedProperties.has("time")){this.timeArray=this.time.split(":").map(item=>parseInt(item))}super.update(changedProperties)}render(){this._log("render");return html`
      <div class="clock">
        <div class="pointer hour" style="transform: translate(50%) rotate(${30*(this.timeArray[0]%12)+.5*this.timeArray[1]-90}deg)"></div>
        <div class="pointer minute" style="transform: translate(50%) rotate(${6*this.timeArray[1]-90}deg)"></div>
        <div class="pointer second" style="transform: translate(50%) rotate(${6*this.timeArray[2]-90}deg)"></div>
        <div class="center-dot"></div>
      </div>
      <div class="clock-input-container">
        <input
          name="hour"
          type="text"
          maxLength="2"
          value="${addLeadingZero(this.timeArray[0])}"
          @blur="${this.onInputBlur}"
          @keydown="${this.onKeydown}"
          @input="${this.onInput}"
          @focus="${()=>{this.focusedInputIndex=0}}"
        /> :
        <input
          name="minute"
          type="text"
          maxLength="2"
          value="${addLeadingZero(this.timeArray[1])}"
          @blur="${this.onInputBlur}"
          @keydown="${this.onKeydown}"
          @input="${this.onInput}"
          @focus="${()=>{this.focusedInputIndex=1}}"
        />
        ${3===this.timeArray.length?html`
              : <input
                name="second"
                type="text"
                maxLength="2"
                value="${addLeadingZero(this.timeArray[2])}"
                @blur="${this.onInputBlur}"
                @keydown="${this.onKeydown}"
                @input="${this.onInput}"
                @focus="${()=>{this.focusedInputIndex=2}}"
              />
            `:""}
      </div>
    `}onInputBlur(event){var _a,_b;this._log("onInputBlur");const inputValue=(null===(_a=event.target)||void 0===_a?void 0:_a.value).trim(),inputName=null===(_b=event.target)||void 0===_b?void 0:_b.name;this.updateInputValue(inputName,parseInt(""===inputValue?"0":inputValue))}onKeydown(event){var _a,_b;this._log("onKeydown");if(!([8,9,13,35,36,37,39,38,40,46].includes(event.keyCode)||/[0-9]/.test(event.key))){event.preventDefault();return}if(13===event.keyCode){if(2===this.focusedInputIndex){this.inputElementList[this.focusedInputIndex].blur()}else{this.inputElementList[this.focusedInputIndex+1].focus()}return}const inputValue=null===(_a=event.target)||void 0===_a?void 0:_a.value,inputName=null===(_b=event.target)||void 0===_b?void 0:_b.name,changeFactor=38===event.keyCode?1:40===event.keyCode?-1:0;if(0===changeFactor&&!this.validClockInput(inputName,inputValue+event.key)){if(8!==event.keyCode)event.preventDefault();return}if(0===changeFactor)return;this.updateInputValue(inputName,parseInt(""===inputValue?"0":inputValue)+changeFactor);this._fire("time-changed",{stringTime:`${addLeadingZero(this.timeArray[0])}:${addLeadingZero(this.timeArray[1])}:${addLeadingZero(this.timeArray[2])}`,arrayTime:this.timeArray},!0)}onInput(event){var _a,_b;this._log("onInput");const inputValue=(null===(_a=event.target)||void 0===_a?void 0:_a.value).trim(),inputName=null===(_b=event.target)||void 0===_b?void 0:_b.name;if(2>inputValue.length)return;this.updateInputValue(inputName,parseInt(inputValue))}updateInputValue(inputName,value){this._log("updateAllInputValues");switch(inputName){case"hour":if(23<value)value=0;else if(0>value)value=23;this.hourInputElement.value=addLeadingZero(value);this.timeArray[0]=value;break;case"minute":if(59<value)value=0;else if(0>value)value=59;this.minuteInputElement.value=addLeadingZero(value);this.timeArray[1]=value;break;case"second":if(59<value)value=0;else if(0>value)value=59;this.secondInputElement.value=addLeadingZero(value);this.timeArray[2]=value;break;}this.requestUpdate()}validClockInput(inputName,value){const integerValue=parseInt(""===value?"0":value);return"hour"===inputName&&24>integerValue&&-1<integerValue||("minute"===inputName||"second"===inputName)&&60>integerValue&&-1<integerValue}};_exports.ClockElement=ClockElement;ClockElement.styles=css`
    :host {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      margin-top: 24px;
      /* background: #eaeaea;
      border-radius: 10px; */
    }

    .clock {
      border-radius: 50%;
      width: 150px;
      height: 150px;
      background: #efefef;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
      border: 3px solid #ffffff;
      margin: 24px auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .pointer {
      position: absolute;
      transform-origin: 0;
      border-radius: 4px;
      background: #9a9a9e;
      transition: cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.65s;
    }

    .hour {
      width: 42px;
      height: 4px;
      transform: translate(50%) rotate(0deg);
    }

    .minute {
      width: 48px;
      height: 3px;
      transform: translate(50%) rotate(130deg);
    }

    .second {
      background: #fa7777;
      width: 56px;
      height: 2px;
      transform: translate(50%) rotate(90deg);
    }

    .center-dot {
      background: #ffffff;
      border: 4px solid #9a9a9e;
      border-radius: 50%;
      width: 3px;
      height: 3px;
      z-index: 2;
    }

    .clock-input-container {
      color: rgba(0, 0, 0, 0.38);
      margin: 24px auto;
      display: flex;
      align-items: center;
    }

    .clock-input-container input {
      outline: none;
      width: 42px;
      height: 42px;
      background-color: #efefef;
      border: none;
      margin: 0 8px;
      border-radius: 4px;
      text-align: center;
      font-size: 16px;
      font-weight: 700;
      color: rgba(0, 0, 0, 0.38);
    }
  `;__decorate([property({type:String})],ClockElement.prototype,"time",void 0);__decorate([query("input[name=\"hour\"]")],ClockElement.prototype,"hourInputElement",void 0);__decorate([query("input[name=\"minute\"]")],ClockElement.prototype,"minuteInputElement",void 0);__decorate([query("input[name=\"second\"]")],ClockElement.prototype,"secondInputElement",void 0);__decorate([queryAll("input")],ClockElement.prototype,"inputElementList",void 0);_exports.ClockElement=ClockElement=__decorate([customElement("clock-element")],ClockElement);var clock$1={__proto__:null,get ClockElement(){return ClockElement}};_exports.$clock=clock$1;let WeekLabelList=class WeekLabelList extends BaseElement{constructor(){super(...arguments);this.useShortName=!1}shouldUpdate(){this._log("shouldUpdate");return Array.isArray(this.weekLabelList)&&0<this.weekLabelList.length}render(){this._log("render");return html`
      ${this.weekLabelList.map(week=>{return html`
          <div class="week-day">
            <div class="week-day-data">${this.useShortName?week.shortName:week.name}</div>
          </div>
        `})}`}};_exports.WeekLabelList=WeekLabelList;WeekLabelList.styles=css`
    :host {
      display: flex;
      padding: 0 8px;
      margin-top: 6px;
      margin-bottom: 8px;
      font-weight: 500;
      font-size: 0.85em;
      color: rgba(var(--theme-on-background-color), 0.38);
    }

    .week-day {
      font-weight: 500;
      flex: 1 0 auto;
      position: relative;
    }

    .week-day::after {
      content: "";
      float:left;
      display: block;
      padding-top: 100%;
    }

    .week-day-data {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

  `;__decorate([property({type:Array})],WeekLabelList.prototype,"weekLabelList",void 0);__decorate([property({type:Boolean,attribute:"short-name"})],WeekLabelList.prototype,"useShortName",void 0);_exports.WeekLabelList=WeekLabelList=__decorate([customElement("week-labels")],WeekLabelList);var weekLabels={__proto__:null,get WeekLabelList(){return WeekLabelList}};_exports.$weekLabels=weekLabels;class CalendarBaseElement extends BaseElement{constructor(){super(...arguments);this.activeView="calendar";this.selectedDateList=[];this.shortWeekLabel=!0;this.rangePicker=!1;this.timePicker=!1;this.onlyShowCurrentMonthDays=!1;this.hideLastFadedRow=!1;this.highlightToday=!0;this.monthsDaysCount=[];this.monthList=[];this.calendarInitDate=[];this.calendarActiveDate=[];this.calendarGregorianInitDate=[];this.calendarOnScreenDate=[];this.selectedDayList=[];this.calendarWeekList=[];this.leapMonthIndex=11;this.minDateArray=[];this.maxDateArray=[]}shouldUpdate(){if(!(this.initDate&&(3===this.initDate.split("-").length||3===this.initDate.split("/").length)&&this.minDate&&(3===this.minDate.split("-").length||3===this.minDate.split("/").length)&&this.maxDate&&(3===this.maxDate.split("-").length||3===this.maxDate.split("/").length))){this._warn("Invalid date format: %o",{initDate:this.initDate,minDate:this.minDate,maxDate:this.maxDate});return!1}return!0}render(){this._log("render");const today=this.ifActiveDateExist()?this.calendarInitDate[2]:-1;return html`
      <header-element
        ?hidden="${"clock"===this.activeView}"
        @prev-month=${this.prevMonth}
        @next-month=${this.nextMonth}
        @prev-year=${this.prevYear}
        @next-year=${this.nextYear}
        @prev-decade=${this.prevDecade}
        @next-decade=${this.nextDecade}
        @show-month-list=${()=>{this.activeView="monthList"}}
        @show-year-list=${()=>{this.activeView="yearList"}}
        @show-decade-list=${()=>{this.activeView="decadeList"}}
      >
      </header-element>
      <div class="views-container">
        <div class="view" ?hidden="${"calendar"!==this.activeView}">
          <week-labels .weekLabelList=${this.weekDayList}></week-labels>
          ${this.calendarWeekList.map((week,index)=>{return html`
              <div class="calendar-row">
                ${week.map(day=>{return this.getWeekDaysTemplate(day,index,today)})}
              </div>
            `})}
        </div>
        <month-list
          class="view"
          ?hidden="${"monthList"!==this.activeView}"
          .monthList=${this.monthList}
          @month-changed-to=${this.onMonthChangedTo}
        >
        </month-list>
        <year-list
          class="view"
          ?hidden="${"yearList"!==this.activeView}"
          .currentYear=${this.calendarOnScreenDate[0]}
          .minYear=${this.minDateArray[0]}
          .maxYear=${this.maxDateArray[0]}
          @year-changed-to=${this.onYearChangedTo}
        >
        </year-list>
        <decade-list
          class="view"
          ?hidden="${"decadeList"!==this.activeView}"
          .currentYear=${this.calendarOnScreenDate[0]}
          .minYear=${this.minDateArray[0]}
          .maxYear=${this.maxDateArray[0]}
          @decade-changed-to=${this.onDedcadeChangedTo}
          @decade-changed=${this.decadeChanged}
        >
        </decade-list>
        <clock-element debug ?hidden="${"clock"!==this.activeView}">
        </clock-element>
      </div>
      ${this.timePicker?html`
            <div
              class="goto-time-view"
              @click=${()=>{"clock"===this.activeView?this.activeView="calendar":this.activeView="clock"}}
            >
              ${"clock"===this.activeView?arrowBackward:clock}
            </div>
          `:""}
    `}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this._log("firstUpdated");this._fire("current-month-changed",this.calendarOnScreenDate[1],!0)}updated(changedProperties){this._log("updated");if(changedProperties.has("activeView")){this.handleHeaderTitle()}// Prevent re-rendering when shortWeekLabel is changed
if(changedProperties.has("shortWeekLabel")){if(!this.shortWeekLabel){this.weekLabelsElement.removeAttribute("short-name")}else{this.weekLabelsElement.setAttribute("short-name","")}}if(2===this.selectedDateList.length){this.removeSomeClassFormDayElementList(["in-range-date-highlight","selected-date","range-edge-day","range-edge-day-start","range-edge-day-end"]);this.highlightInRangeDayList()}}getWeekDaysTemplate(day,index,today){// this._log('getCalendarWeekTemplate');
const notForThisMonth=0===index&&7<day||2<index&&15>day,classList={"calendar-day":!0,fade:0===index&&7<day||2<index&&15>day,"current-date-highlight":this.highlightToday&&today===day,"selected-date":!notForThisMonth&&this.selectedDateList[0]&&this.selectedDateList[0][2]===day&&this.calendarOnScreenDate[1]===this.selectedDateList[0][1]&&this.calendarOnScreenDate[0]===this.selectedDateList[0][0]};return html`
      <div
        class="${classMap(classList)}"
        .date="${!notForThisMonth?[this.calendarOnScreenDate[0],this.calendarOnScreenDate[1],day]:void 0}"
        @click="${this.onDayClick}"
      >
        <div class="calendar-day-data">
          ${this.onlyShowCurrentMonthDays&&notForThisMonth?"":day}
        </div>
      </div>
    `}onDayClick(event){var _a;this._log("onDayClick");const currentDate=null===(_a=event.currentTarget)||void 0===_a?void 0:_a.date;if(!currentDate)return;this._fire("date-changed",currentDate.join("-"));if(!this.rangePicker){event.currentTarget.classList.add("selected-date");this.selectedDateList=[currentDate]}else{this.selectedDateList.push(currentDate);event.currentTarget.classList.add("selected-date");if(2===this.selectedDateList.length){this.selectedDateList=[...this.selectedDateList];this._log("onDayClick: %o",this.selectedDateList)}if(2<this.selectedDateList.length){this.removeSomeClassFormDayElementList(["in-range-date-highlight","selected-date","range-edge-day","range-edge-day-start","range-edge-day-end"]);this.selectedDateList=[]}}}highlightInRangeDayList(){this._log("highlightInRangeDayList");if(this.selectedDateList[0][0]>this.selectedDateList[1][0]||this.selectedDateList[0][0]===this.selectedDateList[1][0]&&this.selectedDateList[0][1]>this.selectedDateList[1][1]||this.selectedDateList[0][0]===this.selectedDateList[1][0]&&this.selectedDateList[0][1]===this.selectedDateList[1][1]&&this.selectedDateList[0][2]>this.selectedDateList[1][2]){this.selectedDateList.reverse()}const calendarDayElementListArray=Array.from(this.calendarDayElementList);for(const dayElement of calendarDayElementListArray){if(!dayElement.date)continue;this.checkEdgeSelectedDate(dayElement);if(!this.isInRange(dayElement.date))continue;dayElement.classList.add("in-range-date-highlight")}}checkEdgeSelectedDate(dayElement){// this._log('checkEdgeSelectedDate');
let rangeStartEdge=this.isEdgeSelectedDate(0,dayElement.date),rangeEndEdge=this.isEdgeSelectedDate(1,dayElement.date);// Example: [[1399, 7, 30], [1399, 7, 30]]
if(rangeStartEdge&&rangeEndEdge){dayElement.classList.add("range-edge-day");return}if(rangeStartEdge){dayElement.classList.add("range-edge-day","range-edge-day-start")}else if(rangeEndEdge){dayElement.classList.add("range-edge-day","range-edge-day-end")}}isEdgeSelectedDate(index,date){return this.selectedDateList[index][0]===date[0]&&this.selectedDateList[index][1]===date[1]&&this.selectedDateList[index][2]===date[2]}isInRange(dayDate){// this._log('ifIsInRange');
return(this.selectedDateList[0][0]<=dayDate[0]&&this.selectedDateList[0][1]<dayDate[1]||this.selectedDateList[0][1]===dayDate[1]&&this.selectedDateList[0][2]<dayDate[2])&&(this.selectedDateList[1][0]>=dayDate[0]&&this.selectedDateList[1][1]>dayDate[1]||this.selectedDateList[1][1]===dayDate[1]&&this.selectedDateList[1][2]>dayDate[2])}sortRangeSelectedDates(selectedDates){if(!selectedDates)return[];this._log("sortRangeSelectedDates");const startDate=Date.parse(selectedDates[0].toString()),endDate=Date.parse(selectedDates[1].toString());return startDate>endDate?[selectedDates[1],selectedDates[0]]:selectedDates}removeSomeClassFormDayElementList(classNameList){this._log("removeSomeClassFormDayElementList");Array.from(this.calendarDayElementList).map(dayElement=>{dayElement.classList.remove(...classNameList)})}ifActiveDateExist(){this._log("ifActiveDateExist");return this.calendarActiveDate[0]===this.calendarOnScreenDate[0]&&this.calendarActiveDate[1]===this.calendarOnScreenDate[1]}calculateCalendarWeekList(){this._log("calculateCalendarWeekList");this._fire("current-month-changed",this.calendarOnScreenDate[1],!0);this._fire("current-year-changed",this.calendarOnScreenDate[0],!0);this.removeSomeClassFormDayElementList(["selected-date"]);this.requestUpdate()}prevMonth(){this._log("prevMonth");if(0===this.calendarOnScreenDate[1]-1){if(this.calendarOnScreenDate[0]-1>this.minDateArray[0]){this.calendarOnScreenDate=[this.calendarOnScreenDate[0]-1,12,1]}else{this.calendarOnScreenDate=this.minDateArray}}else{this.calendarOnScreenDate=[this.calendarOnScreenDate[0],--this.calendarOnScreenDate[1],1]}this.calculateCalendarWeekList();this.handleHeaderTitle()}nextMonth(){this._log("nextMonth");if(12<this.calendarOnScreenDate[1]+1){if(this.calendarOnScreenDate[0]+1<this.maxDateArray[0]){this.calendarOnScreenDate=[this.calendarOnScreenDate[0]+1,1,1]}else{this.calendarOnScreenDate=this.maxDateArray}}else{this.calendarOnScreenDate=[this.calendarOnScreenDate[0],++this.calendarOnScreenDate[1],1]}this.calculateCalendarWeekList();this.handleHeaderTitle()}prevYear(){this._log("prevYear");this.calendarOnScreenDate[0]=this.calendarOnScreenDate[0]-1;if(this.calendarOnScreenDate[0]<=this.minDateArray[0]){this.calendarOnScreenDate[0]=this.minDateArray[0]}this.calculateCalendarWeekList();this.handleHeaderTitle()}nextYear(){this._log("nextYear");this.calendarOnScreenDate[0]=this.calendarOnScreenDate[0]+1;if(this.calendarOnScreenDate[0]>=this.maxDateArray[0]){this.calendarOnScreenDate[0]=this.maxDateArray[0]}this.calculateCalendarWeekList();this.handleHeaderTitle()}prevDecade(){this._log("prevDecade");this.calendarOnScreenDate[0]=this.calendarOnScreenDate[0]-this.calendarOnScreenDate[0]%10-10;if(this.calendarOnScreenDate[0]<this.minDateArray[0]){this.calendarOnScreenDate[0]=this.minDateArray[0];return}this.calculateCalendarWeekList()}nextDecade(){this._log("nextDecade");this.calendarOnScreenDate[0]=this.calendarOnScreenDate[0]-this.calendarOnScreenDate[0]%10+10;if(this.calendarOnScreenDate[0]>this.maxDateArray[0]){this.calendarOnScreenDate[0]=this.maxDateArray[0];return}this.calculateCalendarWeekList()}onMonthChangedTo(event){this._log("onMonthChangedTo");this.calendarOnScreenDate[1]=event.detail;this.calculateCalendarWeekList();this.activeView="calendar"}onYearChangedTo(event){this._log("onYearChangedTo");this.calendarOnScreenDate[0]=event.detail;this.activeView="monthList";this.calculateCalendarWeekList()}decadeChanged(event){this._log("decadeChanged");if(!(this.headerElement&&["yearList","decadeList"].includes(this.activeView)))return;this.headerElement.title=`${event.detail[0]}-${event.detail[1]}`}onDedcadeChangedTo(event){this._log("onDedcadeChangedTo");this.calendarOnScreenDate[0]=event.detail[0];if(this.yearListElement){this.yearListElement.currentYear=event.detail[0]}requestAnimationFrame(()=>{this.activeView="yearList";this.calculateCalendarWeekList()})}handleHeaderTitle(){var _a;this._log("handleHeaderTitle");if(!this.headerElement)return;switch(this.activeView){case"calendar":this.headerElement.calendarActiveView=this.activeView;this.headerElement.title=`${null===(_a=this.monthList[this.calendarOnScreenDate[1]-1])||void 0===_a?void 0:_a.name} ${this.calendarOnScreenDate[0]}`;break;case"monthList":this.headerElement.calendarActiveView=this.activeView;this.headerElement.title=this.calendarOnScreenDate[0]+"";break;case"yearList":case"decadeList":this.headerElement.calendarActiveView=this.activeView;if(this.decadeListElement){this.headerElement.title=`${this.decadeListElement.activeDecade[0]}-${this.decadeListElement.activeDecade[1]}`}break;default:this._warn("Invalid view");break;}}}_exports.$calendarBaseDefault=CalendarBaseElement;__decorate([property({type:String,attribute:"date"})],CalendarBaseElement.prototype,"initDate",void 0);__decorate([property({type:String,attribute:"min-date"})],CalendarBaseElement.prototype,"minDate",void 0);__decorate([property({type:String,attribute:"max-date"})],CalendarBaseElement.prototype,"maxDate",void 0);__decorate([property({type:String})],CalendarBaseElement.prototype,"activeView",void 0);__decorate([property({type:String,attribute:"active-date"})],CalendarBaseElement.prototype,"activeDate",void 0);__decorate([property({type:Array})],CalendarBaseElement.prototype,"selectedDateList",void 0);__decorate([property({type:String})],CalendarBaseElement.prototype,"onScreenDate",void 0);__decorate([property({type:Boolean})],CalendarBaseElement.prototype,"shortWeekLabel",void 0);__decorate([property({type:Boolean,attribute:"range-picker"})],CalendarBaseElement.prototype,"rangePicker",void 0);__decorate([property({type:Boolean,attribute:"time-picker"})],CalendarBaseElement.prototype,"timePicker",void 0);__decorate([property({type:Boolean})],CalendarBaseElement.prototype,"onlyShowCurrentMonthDays",void 0);__decorate([property({type:Boolean})],CalendarBaseElement.prototype,"hideLastFadedRow",void 0);__decorate([property({type:Boolean})],CalendarBaseElement.prototype,"highlightToday",void 0);__decorate([property({type:Array})],CalendarBaseElement.prototype,"monthsDaysCount",void 0);__decorate([property({type:Array})],CalendarBaseElement.prototype,"monthList",void 0);__decorate([query("week-labels")],CalendarBaseElement.prototype,"weekLabelsElement",void 0);__decorate([query("header-element")],CalendarBaseElement.prototype,"headerElement",void 0);__decorate([query("year-list")],CalendarBaseElement.prototype,"yearListElement",void 0);__decorate([query("decade-list")],CalendarBaseElement.prototype,"decadeListElement",void 0);__decorate([queryAll(".calendar-day")],CalendarBaseElement.prototype,"calendarDayElementList",void 0);var calendarBase={__proto__:null,default:CalendarBaseElement};_exports.$calendarBase=calendarBase;const convertStringToNumberArray=(str,separator)=>{if(!str.includes(separator))return[];const strArray=str.split(separator),numberArray=[];for(const item of strArray){numberArray.push(parseInt(item))}return numberArray};_exports.convertStringToNumberArray=convertStringToNumberArray;var convertStringToNumberArray$1={__proto__:null,convertStringToNumberArray:convertStringToNumberArray};_exports.$convertStringToNumberArray=convertStringToNumberArray$1;const monthsDaysCount=[31,28,31,30,31,30,31,31,30,31,30,31];_exports.monthsDaysCount=monthsDaysCount;const weekDayList=[{name:"Sun",shortName:"S"},{name:"Mon",shortName:"M"},{name:"Tue",shortName:"T"},{name:"Wed",shortName:"W"},{name:"Thu",shortName:"T"},{name:"Fri",shortName:"F"},{name:"Sat",shortName:"S"}];_exports.weekDayList=weekDayList;const monthList$1=[{name:"January",shortName:"Jan",code:0},{name:"February",shortName:"Feb",code:3},{name:"March",shortName:"Mar",code:3},{name:"April",shortName:"Apr",code:6},{name:"May",shortName:"May",code:1},{name:"Jun",shortName:"Jun",code:4},{name:"July",shortName:"Jul",code:6},{name:"August",shortName:"Aug",code:2},{name:"September",shortName:"Sep",code:5},{name:"October",shortName:"Oct",code:0},{name:"November",shortName:"Nov",code:3},{name:"December",shortName:"Dec",code:5}];_exports.monthList=monthList$1;var gregorian={__proto__:null,monthsDaysCount:monthsDaysCount,weekDayList:weekDayList,monthList:monthList$1};_exports.$gregorian=gregorian;let GregorianCalendarElement=class GregorianCalendarElement extends CalendarBaseElement{constructor(){super();this.leapMonthIndex=1;this.minDate="1900-1-1";this.maxDate="2200-1-1";this.minDateArray=convertStringToNumberArray(this.minDate,"-");this.maxDateArray=convertStringToNumberArray(this.maxDate,"-");this.monthList=monthList$1;this.monthsDaysCount=monthsDaysCount;this.weekDayList=weekDayList}update(changedProperties){this._log("update");// Create array of initDate when it's changed
if(changedProperties.has("initDate")){if(new Date(this.initDate).getTime()>new Date(`${this.maxDateArray[0]}-${this.maxDateArray[1]}-${this.maxDateArray[2]}`).getTime()){this.initDate=this.maxDate}if(new Date(this.initDate).getTime()<new Date(`${this.minDateArray[0]}-${this.minDateArray[1]}-${this.minDateArray[2]}`).getTime()){this.initDate=this.minDate}this._log("update: %o",this.initDate);this.onScreenDate=this.initDate;const initDateArray=convertStringToNumberArray(this.initDate,"-");this.calendarInitDate=initDateArray;// We need a cloned array here
this.calendarOnScreenDate=initDateArray.slice(0);this.calendarActiveDate=initDateArray.slice(0);this.calendarWeekList=this.calculateCalendar()}if(changedProperties.has("activeDate")){this.calendarActiveDate=convertStringToNumberArray(this.activeDate,"/")}super.update(changedProperties)}leapYearCalculation(year){this._log("leapYearCalculation");let isLeap=0;if(0===year%4&&0!==year%100||0===year%400){isLeap=1}return isLeap}calculateCalendar(){this._log("calculateCalendar");let date=new Date(`${this.calendarOnScreenDate[0]}-${this.calendarOnScreenDate[1]}-1`);const currentMonthDaysCount=this.monthsDaysCount[this.calendarOnScreenDate[1]-1]+(this.calendarOnScreenDate[1]-1===this.leapMonthIndex?this.leapYearCalculation(this.calendarOnScreenDate[0]):0);let tempYear=this.calendarOnScreenDate[0],previousMonthIndex=this.calendarOnScreenDate[1]-2;if(0>=previousMonthIndex){tempYear--;if(tempYear<this.minDateArray[0]){tempYear=this.minDateArray[0]}previousMonthIndex=11}const previousMonthDaysCount=this.monthsDaysCount[previousMonthIndex]+(previousMonthIndex===this.leapMonthIndex?this.leapYearCalculation(tempYear):0),startWeekAtIndex=date.getDay();this._log("startWeekAtIndex: %s",startWeekAtIndex);// console.log(startWeekAtIndex);
let totalCells=currentMonthDaysCount+startWeekAtIndex,calendar=[],week=Array.from({length:startWeekAtIndex},(_v,k)=>previousMonthDaysCount-startWeekAtIndex+k+1);// this._log('totalCells: %s', totalCells);
for(let i=startWeekAtIndex+1;6>calendar.length;++i){const day=i>totalCells?i-totalCells:i-startWeekAtIndex;if(0===i%7){week.push(day);calendar.push(week);week=[];if((this.onlyShowCurrentMonthDays||this.hideLastFadedRow)&&7*calendar.length>=totalCells)break;continue}week.push(day)}return calendar}// protected calculateSelectedDayList() {
//   this._log('calculateSelectedDayList');
//   let days: Array<number> = [];
//   let [onScreenYear, onScreenMonth]: Array<number> = this.calendarOnScreenDate;
//   this.selectedDateList.forEach(([selectedDateYear, selectedDateMonth, selectedDateDay]: Array<number>) => {
//     if (selectedDateYear === onScreenYear &&
//       selectedDateMonth === onScreenMonth)
//       days.push(selectedDateDay);
//   });
//   return days;
// };
prevMonth(){this._log("prevMonth");super.prevMonth();this._fire("date-changed",this.calendarOnScreenDate.join("-"))}nextMonth(){this._log("nextMonth");super.nextMonth();this._fire("date-changed",this.calendarOnScreenDate.join("-"))}prevYear(){this._log("prevYear");super.prevYear();this._fire("date-changed",this.calendarOnScreenDate.join("-"))}nextYear(){this._log("nextYear");super.nextYear();this._fire("date-changed",this.calendarOnScreenDate.join("-"))}calculateCalendarWeekList(){this._log("calculateCalendarWeekList");this.calendarWeekList=this.calculateCalendar();super.calculateCalendarWeekList()}};_exports.GregorianCalendarElement=GregorianCalendarElement;GregorianCalendarElement.styles=[calendarBaseStyle,css`
      .container {
        background-color: rgb(var(--theme-background-color));
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      }

      .calendar-row .selected-date {
        background: rgb(var(--theme-primary-color));
        color: rgba(var(--theme-on-primary-color), 0.87);
      }

      .calendar-row .range-edge-day {
        background: rgb(var(--theme-primary-color));
        color: rgba(var(--theme-on-primary-color), 0.87);
        transition: ease-in 0.15s;
      }

      .calendar-row .range-edge-day-start {
        border-radius: 50% 0 0 50%;
      }

      .calendar-row .range-edge-day-end {
        border-radius: 0 50% 50% 0;
      }

      .calendar-row .in-range-date-highlight {
        background: rgba(var(--theme-primary-color),0.09); border-radius: 0;
      }
    `];_exports.GregorianCalendarElement=GregorianCalendarElement=__decorate([customElement("gregorian-calendar-element")],GregorianCalendarElement);var gregorianCalendar={__proto__:null,get GregorianCalendarElement(){return GregorianCalendarElement}};_exports.$gregorianCalendar=gregorianCalendar;const monthsDaysCount$1=[31,31,31,31,31,31,30,30,30,30,30,29];_exports.monthsDaysCount$1=monthsDaysCount$1;const weekDayList$1=[{name:"\u0634\u0646\u0628\u0647",shortName:"\u0634"},{name:"\u06CC\u06A9 \u0634\u0646\u0628\u0647",shortName:"\u06CC"},{name:"\u062F\u0648\u0634\u0646\u0628\u0647",shortName:"\u062F"},{name:"\u0633\u0647 \u0634\u0646\u0628\u0647",shortName:"\u0633"},{name:"\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647",shortName:"\u0686"},{name:"\u067E\u0646\u062C\u0634\u0646\u0628\u0647",shortName:"\u067E"},{name:"\u062C\u0645\u0639\u0647",shortName:"\u062C"}];_exports.weekDayList$1=weekDayList$1;const monthList$2=[{name:"\u0641\u0631\u0648\u0631\u062F\u06CC\u0646",shortName:"",code:0},{name:"\u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A",shortName:"",code:3},{name:"\u062E\u0631\u062F\u0627\u062F",shortName:"",code:3},{name:"\u062A\u06CC\u0631",shortName:"",code:6},{name:"\u0645\u0631\u062F\u0627\u062F",shortName:"",code:1},{name:"\u0634\u0647\u0631\u06CC\u0648\u0631",shortName:"",code:4},{name:"\u0645\u0647\u0631",shortName:"",code:6},{name:"\u0622\u0628\u0627\u0646",shortName:"",code:2},{name:"\u0622\u0630\u0631",shortName:"",code:5},{name:"\u062F\u06CC",shortName:"",code:0},{name:"\u0628\u0647\u0645\u0646",shortName:"",code:3},{name:"\u0627\u0633\u0641\u0646\u062F",shortName:"",code:5}];_exports.monthList$1=monthList$2;var solar={__proto__:null,monthsDaysCount:monthsDaysCount$1,weekDayList:weekDayList$1,monthList:monthList$2};_exports.$solar=solar;let SolarCalendarElement=class SolarCalendarElement extends CalendarBaseElement{constructor(){super();this.leapMonthIndex=11;this.minDate="1300/1/1";this.maxDate="1500/1/1";this.minDateArray=convertStringToNumberArray(this.minDate,"/");this.maxDateArray=convertStringToNumberArray(this.maxDate,"/");this.monthList=monthList$2;this.monthsDaysCount=monthsDaysCount$1;this.weekDayList=weekDayList$1}update(changedProperties){this._log("update");if(changedProperties.has("minDate")){this.minDateArray=convertStringToNumberArray(this.minDate,"/")}if(changedProperties.has("maxDate")){this.maxDateArray=convertStringToNumberArray(this.maxDate,"/")}// Create array of initDate when it's changed
if(changedProperties.has("initDate")){const initDateArray=convertStringToNumberArray(this.initDate,"/");if(initDateArray[0]>this.maxDateArray[0]||initDateArray[0]===this.maxDateArray[0]&&initDateArray[1]>this.maxDateArray[1]||initDateArray[0]===this.maxDateArray[0]&&initDateArray[1]===this.maxDateArray[1]&&initDateArray[2]>this.maxDateArray[2]){this.initDate=this.maxDate}if(initDateArray[0]<this.minDateArray[0]||initDateArray[0]===this.minDateArray[0]&&initDateArray[1]<this.minDateArray[1]||initDateArray[0]===this.minDateArray[0]&&initDateArray[1]===this.minDateArray[1]&&initDateArray[2]<this.minDateArray[2]){this.initDate=this.minDate}this.onScreenDate=this.initDate;this.calendarInitDate=initDateArray;// We need a cloned array here
this.calendarOnScreenDate=initDateArray.slice(0);this.calendarActiveDate=initDateArray.slice(0);this.calendarWeekList=this.calculateCalendar()}if(changedProperties.has("activeDate")){this.calendarActiveDate=convertStringToNumberArray(this.activeDate,"/")}super.update(changedProperties)}calculateCalendar(){this._log("calculateCalendar");const newDate=this.convertToGregorian(this.calendarOnScreenDate[0],this.calendarOnScreenDate[1],1);let date=new Date(newDate[0],newDate[1]-1,newDate[2]);const currentMonthDaysCount=this.monthsDaysCount[this.calendarOnScreenDate[1]-1]+(this.calendarOnScreenDate[1]-1===this.leapMonthIndex?this.leapYearCalculation(this.calendarOnScreenDate[0]):0);let tempYear=this.calendarOnScreenDate[0],previousMonthIndex=this.calendarOnScreenDate[1]-2;if(0>=previousMonthIndex){tempYear--;if(tempYear<this.minDateArray[0]){tempYear=this.minDateArray[0]}previousMonthIndex=11}const previousMonthDaysCount=this.monthsDaysCount[previousMonthIndex]+(previousMonthIndex===this.leapMonthIndex?this.leapYearCalculation(tempYear):0),startWeekAtIndex=date.getDay();// We need to find index of day in the jalali week days
let startWeekAtIndexInJalali=startWeekAtIndex+1;if(6<startWeekAtIndexInJalali){startWeekAtIndexInJalali=0}const totalCells=currentMonthDaysCount+startWeekAtIndexInJalali,calendar=[];let week=Array.from({length:startWeekAtIndexInJalali},(_v,k)=>previousMonthDaysCount-startWeekAtIndexInJalali+k+1);for(let i=startWeekAtIndexInJalali+1;6>calendar.length;++i){const day=i>totalCells?i-totalCells:i-startWeekAtIndexInJalali;if(0===i%7){week.push(day);calendar.push(week);week=[];if((this.onlyShowCurrentMonthDays||this.hideLastFadedRow)&&7*calendar.length>=totalCells)break;continue}week.push(day)}return calendar}convertToGregorian(year,month,day){this._log("convertToGregorian");let gregorianYear;if(979<year){gregorianYear=1600;year-=979}else{gregorianYear=621}let days=365*year+8*Math.floor(year/33)+(year%33+3)/4+78+day+(7>month?31*(month-1):30*(month-7)+186);gregorianYear+=400*Math.floor(days/146097);days%=146097;if(36524<Math.floor(days)){gregorianYear+=100*Math.floor(--days/36524);days%=36524;if(365<=days)days++}gregorianYear+=4*Math.floor(days/1461);days%=1461;gregorianYear+=Math.floor((days-1)/365);if(365<days)days=(days-1)%365;let gregorianDay=Math.floor(days+1),montDays=[0,31,0===gregorianYear%4&&0!==gregorianYear%100||0===gregorianYear%400?29:28,31,30,31,30,31,31,30,31,30,31],index=0;for(;12>=index;index++){if(gregorianDay<=montDays[index])break;gregorianDay-=montDays[index]}return[gregorianYear,index,gregorianDay]}leapYearCalculation(year){this._log("Persian-calendar: leapYearCalculation");return-1<[1,5,9,13,17,22,26,30].indexOf(year%33)?1:0}prevMonth(){this._log("prevMonth");super.prevMonth();this._fire("date-changed",this.calendarOnScreenDate.join("/"),!0)}nextMonth(){this._log("nextMonth");super.nextMonth();this._fire("date-changed",this.calendarOnScreenDate.join("/"),!0)}prevYear(){this._log("prevYear");super.prevYear();this._fire("date-changed",this.calendarOnScreenDate.join("/"),!0)}nextYear(){this._log("nextYear");super.nextYear();this._fire("date-changed",this.calendarOnScreenDate.join("/"),!0)}calculateCalendarWeekList(){this._log("calculateCalendarWeekList");this.calendarWeekList=this.calculateCalendar();super.calculateCalendarWeekList()}};_exports.SolarCalendarElement=SolarCalendarElement;SolarCalendarElement.styles=[calendarBaseStyle,css`
      .container {
        background-color: rgb(var(--theme-background-color));
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      }

      .calendar-row .selected-date {
        background: rgb(var(--theme-primary-color));
        color: rgba(var(--theme-on-primary-color), 0.87);
      }

      .calendar-row .range-edge-day {
        background: rgb(var(--theme-primary-color));
        color: rgba(var(--theme-on-primary-color), 0.87);
        transition: ease-in 0.15s;
      }

      .calendar-row .range-edge-day-start {
        border-radius: 50% 0 0 50%;
      }

      .calendar-row .range-edge-day-end {
        border-radius: 0 50% 50% 0;
      }

      .calendar-row .in-range-date-highlight {
        background: rgba(var(--theme-primary-color),0.09); border-radius: 0;
      }
    `];_exports.SolarCalendarElement=SolarCalendarElement=__decorate([customElement("solar-calendar-element")],SolarCalendarElement);var solarCalendar={__proto__:null,get SolarCalendarElement(){return SolarCalendarElement}};_exports.$solarCalendar=solarCalendar;const previousValues=new WeakMap,ifDefined=directive(value=>part=>{const previousValue=previousValues.get(part);if(value===void 0&&part instanceof AttributePart){// If the value is undefined, remove the attribute, but only if the value
// was previously defined.
if(previousValue!==void 0||!previousValues.has(part)){const name=part.committer.name;part.committer.element.removeAttribute(name)}}else if(value!==previousValue){part.setValue(value)}previousValues.set(part,value)});/**
                                       * For AttributeParts, sets the attribute if the value is defined and removes
                                       * the attribute if the value is undefined.
                                       *
                                       * For other part types, this directive is a no-op.
                                       */_exports.ifDefined=ifDefined;var ifDefined$1={__proto__:null,ifDefined:ifDefined};_exports.$ifDefined=ifDefined$1;const persianNumberArr=[/۰/g,/۱/g,/۲/g,/۳/g,/۴/g,/۵/g,/۶/g,/۷/g,/۸/g,/۹/g],arabicNumberArr=[/٠/g,/١/g,/٢/g,/٣/g,/٤/g,/٥/g,/٦/g,/٧/g,/٨/g,/٩/g],fixPersianNumber=newString=>{let i=0;for(;10>i;i++){newString=newString.replace(persianNumberArr[i],i.toString()).replace(arabicNumberArr[i],i.toString())}return newString};_exports.fixPersianNumber=fixPersianNumber;var fixPersianNumber$1={__proto__:null,fixPersianNumber:fixPersianNumber};_exports.$fixPersianNumber=fixPersianNumber$1;let DatePicker=class DatePicker extends BaseElement{constructor(){super(...arguments);this.justTimePicker=!1;this.solar=!1;this.rangePicker=!1;this.timePicker=!1;// must be sorted past[index: 0] -> future[index: 1]
// 2D array -> [[2020, 2, 3]] || [[2020, 2, 3], [2020, 6, 1]] || []
this.selectedDateList=[];this.selectedTime=[]}update(changedProperties){this._log("update");if(changedProperties.has("solar")){if(this.solar){this.initialDate=fixPersianNumber(new Date().toLocaleDateString("fa"));this.onScreenDate=this.initialDate;this.activeDate=this.initialDate}else{this.initialDate=new Date().toLocaleDateString("en-CA")}}super.update(changedProperties)}render(){this._log("render");return html`
      ${this.solar?html`
          <solar-calendar-element
            debug
            date=${ifDefined(this.initialDate)}
            ?range-picker="${this.rangePicker}"
            ?time-picker="${this.timePicker}"
            .selectedDateList=${this.selectedDateList}
            @date-changed=${event=>{this._log("current date is: %s",event.detail)}}
            @time-changed=${event=>{event.stopPropagation();this._log("current time is: %o",event.detail)}}
          >
          </solar-calendar-element>`:html`
          <gregorian-calendar-element
            date="${ifDefined(this.initialDate)}"
            ?range-picker="${this.rangePicker}"
            ?time-picker="${this.timePicker}"
            .selectedDateList=${this.selectedDateList}
            @date-changed=${event=>{this._log("current date is: %s",event.detail)}}
            @time-changed=${event=>{event.stopPropagation();this._log("current time is: %o",event.detail)}}
          >
          </gregorian-calendar-element>
        `}
    `}};_exports.DatePicker=DatePicker;DatePicker.styles=css`
    :host {
      display: block;
      user-select: none;
      overflow: hidden;
    }
  `;__decorate([property({type:Boolean})],DatePicker.prototype,"justTimePicker",void 0);__decorate([property({type:Boolean})],DatePicker.prototype,"solar",void 0);__decorate([property({type:Boolean,attribute:"range-picker"})],DatePicker.prototype,"rangePicker",void 0);__decorate([property({type:Boolean,attribute:"time-picker"})],DatePicker.prototype,"timePicker",void 0);__decorate([property({type:String,attribute:"date"})],DatePicker.prototype,"initialDate",void 0);__decorate([property({type:String,attribute:"active-date"})],DatePicker.prototype,"activeDate",void 0);__decorate([property({type:Array})],DatePicker.prototype,"selectedDateList",void 0);__decorate([property({type:Array})],DatePicker.prototype,"selectedTime",void 0);__decorate([property({type:String,attribute:!1})],DatePicker.prototype,"onScreenDate",void 0);_exports.DatePicker=DatePicker=__decorate([customElement("date-picker")],DatePicker);var datePicker={__proto__:null,get DatePicker(){return DatePicker}};_exports.$datePicker=datePicker});