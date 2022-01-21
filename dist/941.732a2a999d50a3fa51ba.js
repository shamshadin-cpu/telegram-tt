"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[941],{7941:(t,i,e)=>{e.r(i),e.d(i,{default:()=>p});var s=e(7361),n=e(6926);function a(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}class h{constructor(t){this.worker=t,a(this,"requestStates",new Map),a(this,"requestStatesByCallback",new Map),this.subscribe()}request(t){const{worker:i,requestStates:e,requestStatesByCallback:s}=this,a=(0,n.Z)(e),h={type:"callMethod",messageId:a,...t},r={messageId:a},o=new Promise(((t,i)=>{Object.assign(r,{resolve:t,reject:i})}));if("function"==typeof h.args[h.args.length-1]){const t=h.args.pop();r.callback=t,s.set(t,r)}return e.set(a,r),o.catch((()=>{})).finally((()=>{e.delete(a),r.callback&&s.delete(r.callback)})),i.postMessage(h),o}cancelCallback(t){t.isCanceled=!0;const{messageId:i}=this.requestStatesByCallback.get(t)||{};i&&this.worker.postMessage({type:"cancelProgress",messageId:i})}subscribe(){const{worker:t,requestStates:i}=this;t.addEventListener("message",(({data:t})=>{if("methodResponse"===t.type){const e=i.get(t.messageId);e&&(t.error?e.reject(t.error):e.resolve(t.response))}else if("methodCallback"===t.type){var e;const s=i.get(t.messageId);null==s||null===(e=s.callback)||void 0===e||e.call(s,...t.callbackArgs)}else if("unhandledError"===t.type){var s;throw new Error(null===(s=t.error)||void 0===s?void 0:s.message)}}))}}var r=e(9933),o=e(3570);function d(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}const c=s.wB?.75:1,u=.75,l=s.s$?2:4,m=new Array(4).fill(void 0).map((()=>new h(new Worker(new URL(e.p+e.u(354),e.b)))));let g=-1;const p=class{constructor(t,i,e,s={},n,a,h){this.id=t,this.container=i,this.animationData=e,this.params=s,this.onLoad=n,this.customColor=a,this.onEnded=h,d(this,"imgSize",void 0),d(this,"key",void 0),d(this,"msPerFrame",void 0),d(this,"reduceFactor",void 0),d(this,"cacheModulo",void 0),d(this,"chunkSize",void 0),d(this,"workerIndex",void 0),d(this,"chunks",[]),d(this,"framesCount",void 0),d(this,"chunksCount",void 0),d(this,"canvas",document.createElement("canvas")),d(this,"ctx",this.canvas.getContext("2d")),d(this,"isAnimating",!1),d(this,"isWaiting",!0),d(this,"isOnLoadFired",!1),d(this,"isDestroyed",!1),d(this,"approxFrameIndex",0),d(this,"prevFrameIndex",-1),d(this,"stopFrameIndex",0),d(this,"speed",1),d(this,"direction",1),d(this,"lastRenderAt",void 0),this.initContainer(),this.initConfig(),this.initRenderer()}isPlaying(){return this.isAnimating||this.isWaiting}play(){this.stopFrameIndex=void 0,this.direction=1,this.doPlay()}pause(){this.isWaiting?this.stopFrameIndex=this.approxFrameIndex:this.isAnimating=!1;const t=this.getChunkIndex(this.approxFrameIndex);this.chunks=this.chunks.map(((i,e)=>e===t?i:void 0))}goToAndPlay(t){this.approxFrameIndex=Math.floor(t/this.reduceFactor),this.stopFrameIndex=void 0,this.direction=1,this.doPlay()}goToAndStop(t){this.approxFrameIndex=Math.floor(t/this.reduceFactor),this.stopFrameIndex=Math.floor(t/this.reduceFactor),this.direction=1,this.doPlay()}playSegment([t,i]){this.approxFrameIndex=Math.floor(t/this.reduceFactor),this.stopFrameIndex=Math.floor(i/this.reduceFactor),this.direction=t<i?1:-1,this.doPlay()}setSpeed(t){this.speed=t}destroy(){this.isDestroyed=!0,this.pause(),this.destroyRenderer(),this.destroyContainer()}initContainer(){if(!(this.container.parentNode instanceof HTMLElement))throw new Error("[RLottie] Container is not mounted");let{size:t}=this.params;if(!t&&(t=this.container.offsetWidth||parseInt(this.container.style.width,10)||this.container.parentNode.offsetWidth,!t))throw new Error("[RLottie] Failed to detect width from container");this.canvas.style.width=`${t}px`,this.canvas.style.height=`${t}px`;const{isLowPriority:i,quality:e=(i?u:c)}=this.params,n=Math.round(t*Math.max(s.cL*e,1));this.canvas.width=n,this.canvas.height=n,this.container.appendChild(this.canvas),this.imgSize=n}initConfig(){this.key=`${this.id}_${this.imgSize}`;const{isLowPriority:t}=this.params,i=t?30:60,e=this.animationData.fr||i;this.reduceFactor=e%i==0?e/i:1,this.msPerFrame=1e3/(e/this.reduceFactor),this.cacheModulo=t?0:l,this.chunkSize=1}destroyContainer(){this.canvas.remove()}onChangeData(t){this.isWaiting=!1,this.framesCount=t,this.chunksCount=Math.ceil(t/this.chunkSize),this.isAnimating=!1,this.doPlay()}setColor(t){if(this.customColor=t,this.customColor){const t=this.ctx.getImageData(0,0,this.imgSize,this.imgSize),i=t.data;for(let t=0;t<i.length;t+=4)i[t]=this.customColor[0],i[t+1]=this.customColor[1],i[t+2]=this.customColor[2];this.ctx.putImageData(t,0,0)}}changeData(t){this.pause(),this.animationData=t,this.initConfig(),m[this.workerIndex].request({name:"changeData",args:[this.key,this.animationData,this.onChangeData.bind(this)]})}initRenderer(){this.workerIndex=(0,o.Z)(4,++g),m[this.workerIndex].request({name:"init",args:[this.key,this.animationData,this.imgSize,this.params.isLowPriority,this.reduceFactor,this.onRendererInit.bind(this)]})}destroyRenderer(){m[this.workerIndex].request({name:"destroy",args:[this.key]})}onRendererInit(t){this.framesCount=t,this.chunksCount=Math.ceil(t/this.chunkSize),this.isWaiting&&this.doPlay()}doPlay(){this.framesCount&&(this.isDestroyed||this.isAnimating||(this.isWaiting||(this.lastRenderAt=void 0),this.isAnimating=!0,this.isWaiting=!1,(0,r.jt)((()=>{if(this.isDestroyed)return!1;if(!this.isAnimating&&this.isOnLoadFired)return!1;const t=Math.round(this.approxFrameIndex),i=this.getChunkIndex(t),e=this.chunks[i];if(!e||0===e.length)return this.requestChunk(i),this.isAnimating=!1,this.isWaiting=!0,!1;if(this.cacheModulo&&i%this.cacheModulo==0&&this.cleanupPrevChunk(i),this.requestNextChunk(i),t!==this.prevFrameIndex){const i=this.getFrame(t);if(!i)return this.isAnimating=!1,this.isWaiting=!0,!1;const e=new Uint8ClampedArray(i);if(this.customColor)for(let t=0;t<e.length;t+=4)e[t]=this.customColor[0],e[t+1]=this.customColor[1],e[t+2]=this.customColor[2];const s=new ImageData(e,this.imgSize,this.imgSize);this.ctx.putImageData(s,0,0),this.onLoad&&!this.isOnLoadFired&&(this.isOnLoadFired=!0,this.onLoad()),this.prevFrameIndex=t}const s=Date.now(),n=this.lastRenderAt?this.msPerFrame/(s-this.lastRenderAt):1,a=Math.min(1,this.direction*this.speed/n),h=Math.round(this.approxFrameIndex+a);if(this.lastRenderAt=s,a>0&&(t===this.framesCount-1||h>this.framesCount-1)){var r;if(this.params.noLoop)return this.isAnimating=!1,null===(r=this.onEnded)||void 0===r||r.call(this),!1;this.approxFrameIndex=0}else if(a<0&&(0===t||h<0)){var o;if(this.params.noLoop)return this.isAnimating=!1,null===(o=this.onEnded)||void 0===o||o.call(this),!1;this.approxFrameIndex=this.framesCount-1}else{if(void 0!==this.stopFrameIndex&&(t===this.stopFrameIndex||a>0&&h>this.stopFrameIndex||a<0&&h<this.stopFrameIndex))return this.stopFrameIndex=void 0,this.isAnimating=!1,!1;this.approxFrameIndex+=a}const d=Math.round(this.approxFrameIndex);return!!this.getFrame(d)||(this.requestChunk(this.getChunkIndex(d)),this.isWaiting=!0,this.isAnimating=!1,!1)}))))}getFrame(t){const i=this.getChunkIndex(t),e=this.getFrameIndexInChunk(t),s=this.chunks[i];if(s)return s[e]}getFrameIndexInChunk(t){return t-this.getChunkIndex(t)*this.chunkSize}getChunkIndex(t){return Math.floor(t/this.chunkSize)}requestChunk(t){var i;if(this.chunks[t]&&0!==(null===(i=this.chunks[t])||void 0===i?void 0:i.length))return;this.chunks[t]=[];const e=t*this.chunkSize,s=Math.min(e+this.chunkSize-1,this.framesCount-1);m[this.workerIndex].request({name:"renderFrames",args:[this.key,e,s,this.onFrameLoad.bind(this)]})}cleanupPrevChunk(t){if(this.chunksCount<3)return;const i=(0,o.Z)(this.chunksCount,t-1);this.chunks[i]=void 0}requestNextChunk(t){if(1===this.chunksCount)return;const i=(0,o.Z)(this.chunksCount,t+1);this.chunks[i]||this.requestChunk(i)}onFrameLoad(t,i){const e=this.getChunkIndex(t),s=this.chunks[e];s&&(s[this.getFrameIndexInChunk(t)]=i,this.isWaiting&&this.doPlay())}}},3570:(t,i,e)=>{function s(t,i){return i-Math.floor(i/t)*t}e.d(i,{Z:()=>s})}}]);
//# sourceMappingURL=941.732a2a999d50a3fa51ba.js.map