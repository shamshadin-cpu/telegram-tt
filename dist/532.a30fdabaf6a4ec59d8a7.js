/*! For license information please see 532.a30fdabaf6a4ec59d8a7.js.LICENSE.txt */
(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[532],{7936:(e,t,a)=>{"use strict";a.r(t),a.d(t,{ActiveCallHeader:()=>J,CallFallbackConfirm:()=>K,GroupCall:()=>q});var n=a(3794),i=a(4050),o=a(5116),r=a(3716),s=a(1226),l=a(1638),c=a(2607),d=a(4446),u=a(782),p=a(2267),m=a(1394),v=a(1689),g=a(6204),f=a(1171);(0,o.Q6)("apiUpdate",((e,t,a)=>{const{activeGroupCallId:i}=e.groupCalls;switch(a["@type"]){case"updateGroupCallLeavePresentation":t.toggleGroupCallPresentation({value:!1});break;case"updateGroupCallStreams":if(!a.userId||!i)break;if(!(0,c.GU)(e,i,a.userId))break;return(0,d.B6)(e,i,a.userId,(0,u.CE)(a,["@type","userId"]));case"updateGroupCallConnectionState":if(!i)break;if("disconnected"===a.connectionState){t.leaveGroupCall({isFromLibrary:!0});break}return(0,d.AH)(e,i,{connectionState:a.connectionState,isSpeakerDisabled:a.isSpeakerDisabled});case"updateGroupCallParticipants":{const{groupCallId:e,participants:t}=a;i===e&&(0,n.handleUpdateGroupCallParticipants)(t);break}case"updateGroupCallConnection":{if(a.data.stream){t.showNotification({message:"Big live streams are not yet supported"}),t.leaveGroupCall();break}(0,n.handleUpdateGroupCallConnection)(a.data,a.presentation);const i=(0,c.mU)(e);null!=i&&i.participants&&Object.keys(i.participants).length>0&&(0,n.handleUpdateGroupCallParticipants)(Object.values(i.participants));break}}})),(0,o.Q6)("leaveGroupCall",((e,t,a)=>{const{isFromLibrary:i,shouldDiscard:r,shouldRemove:l,rejoin:u}=a||{},p=(0,c.mU)(e);p&&((0,o.R3)((0,d.Ic)(e,{connectionState:"disconnected"},p.participantsCount-1)),(async()=>{await(0,s.t9)("leaveGroupCall",{call:p});let a=!1;var c;r&&((e=(0,o.Rd)()).groupCalls.fallbackChatId===p.chatId&&(a=!0,null===(c=e.groupCalls.fallbackUserIdsToRemove)||void 0===c||c.forEach((a=>{t.deleteChatMember({chatId:e.groupCalls.fallbackChatId,userId:a})}))),await(0,s.t9)("discardGroupCall",{call:p}));e=(0,o.Rd)(),l&&(e=(0,d.dc)(e,p.id)),(0,v.Mt)(),(0,o.R3)({...e,groupCalls:{...e.groupCalls,isGroupCallPanelHidden:!0,activeGroupCallId:void 0,...a&&{fallbackChatId:void 0,fallbackUserIdsToRemove:void 0}}}),i||(0,n.leaveGroupCall)(),u&&t.joinGroupCall(u)})())})),(0,o.Q6)("toggleGroupCallVideo",(e=>{const t=(0,c.mU)(e),a=(0,l.dy)(e,e.currentUserId);a&&t&&(async()=>{await(0,n.toggleStream)("video"),await(0,s.t9)("editGroupCallParticipant",{call:t,videoStopped:!(0,n.isStreamEnabled)("video"),participant:a})})()})),(0,o.Q6)("requestToSpeak",((e,t,a)=>{const{value:n}=a||{value:!0},i=(0,c.mU)(e),o=(0,l.dy)(e,e.currentUserId);o&&i&&(0,s.t9)("editGroupCallParticipant",{call:i,raiseHand:n,participant:o})})),(0,o.Q6)("setGroupCallParticipantVolume",((e,t,a)=>{const{participantId:i,volume:o}=a,d=(0,c.mU)(e),u=(0,l.dy)(e,i);u&&d&&((0,n.setVolume)(i,Math.floor(o/r.Ro)/100),(0,s.t9)("editGroupCallParticipant",{call:d,volume:Number(o),participant:u}))})),(0,o.Q6)("toggleGroupCallMute",((e,t,a)=>{const{participantId:i,value:o}=a||{},r=(0,c.mU)(e),d=(0,l.dy)(e,i||e.currentUserId);d&&r&&(async()=>{const e=void 0===o?(0,n.isStreamEnabled)("audio",d.id):o;i?(0,n.setVolume)(i,e?0:1):await(0,n.toggleStream)("audio"),await(0,s.t9)("editGroupCallParticipant",{call:r,muted:e,participant:d})})()})),(0,o.Q6)("toggleGroupCallPresentation",((e,t,a)=>{const i=(0,c.mU)(e),o=(0,l.dy)(e,e.currentUserId);o&&i&&(async()=>{if(void 0!==(null==a?void 0:a.value)?null==a?void 0:a.value:!(0,n.isStreamEnabled)("presentation")){const e=await(0,n.startSharingScreen)();if(!e)return;await(0,s.t9)("joinGroupCallPresentation",{call:i,params:e})}else await(0,n.toggleStream)("presentation",!1),await(0,s.t9)("leaveGroupCallPresentation",{call:i});await(0,s.t9)("editGroupCallParticipant",{call:i,presentationPaused:!(0,n.isStreamEnabled)("presentation"),participant:o})})()})),(0,o.Q6)("connectToActiveGroupCall",((e,t)=>{const a=(0,c.mU)(e);if(!a)return;if("discarded"===a.connectionState)return void t.showNotification({message:"This voice chat is not active"});const i=(0,v.FF)(),r=(0,v.NH)();if(!i||!r)return;const{currentUserId:d}=e;d&&(async()=>{const e=await(0,n.joinGroupCall)(d,r,i,t.apiUpdate);if(await(0,s.t9)("joinGroupCall",{call:a,params:e,inviteHash:a.inviteHash})&&(t.loadMoreGroupCallParticipants(),a.chatId)){const e=(0,l.Z1)((0,o.Rd)(),a.chatId);if(!e)return;await(0,g.f)(e)}})()})),(0,o.Q6)("inviteToCallFallback",((e,t,a)=>{const{chatId:n}=(0,l.Bt)(e)||{};if(!n)return;const i=(0,l.dy)(e,n);if(!i)return;const{shouldRemove:r}=a;(async()=>{const a=(0,c.oq)(e);let l=Object.values(e.chats.byId).find((e=>e.title===a&&e.isCreator&&!e.isRestricted));if(l)t.updateChatMemberBannedRights({chatId:l.id,userId:n,bannedRights:{}}),(0,s.t9)("addChatMembers",l,[i],!0);else{if(l=await(0,s.t9)("createChannel",{title:a,users:[i]}),!l)return;const e=await(0,m.dc)(f,"avatar.png");(0,s.t9)("editChatPhoto",{chatId:l.id,accessHash:l.accessHash,photo:e})}const d=await(0,s.t9)("updatePrivateLink",{chat:l,usageLimit:1,expireDate:(0,p.b)(e.serverTimeOffset)+1800});if(d){if(r){const t=(e=(0,o.Rd)()).groupCalls.fallbackUserIdsToRemove||[];(0,o.R3)({...e,groupCalls:{...e.groupCalls,fallbackChatId:l.id,fallbackUserIdsToRemove:[...t,n]}})}t.sendMessage({text:`Join a call: ${d}`}),t.openChat({id:l.id}),t.createGroupCall({chatId:l.id}),t.closeCallFallbackConfirm()}})()}));var C=a(7361),h=a(6752),S=a(706),P=a(9107),E=a(4288),b=a(231),y=a(3106),Z=a(8964),k=a(3103);const I=()=>{var e,t;null===(e=(t=navigator).vibrate)||void 0===e||e.call(t,50)};var G=a(7204),w=a(7324),T=a(7799);const N=(0,i.X$)((({size:e,name:t,playSegment:a,color:n})=>{const[o,r]=(0,i.eJ)();return(0,i.d4)((()=>{(0,w.Z)(t).then(r)}),[t]),i.ZP.createElement(T.Z,{id:t,play:!0,noLoop:!0,playSegment:a,size:e,speed:1,animationData:o,color:n})})),M=(0,i.X$)((0,o.c$)((e=>{const t=(0,c.mU)(e),{connectionState:a}=t||{},n=t&&(0,c.GU)(e,t.id,e.currentUserId),{raiseHandRating:i,hasAudioStream:o,canSelfUnmute:r,isMuted:s}=n||{};return{connectionState:a||"discarded",hasRequestedToSpeak:Boolean(i),noAudioStream:!o,canSelfUnmute:r,isMuted:s}}))((({noAudioStream:e,canSelfUnmute:t,isMuted:a,hasRequestedToSpeak:n,connectionState:r})=>{const{toggleGroupCallMute:s,requestToSpeak:l,playGroupCallSound:c}=(0,o.uC)(),d=(0,P.Z)(),u=(0,i.sO)("up"),[p,m]=(0,i.eJ)(!1),v="connected"!==r,g=!t&&a,f=(0,G.Z)(g);(0,i.d4)((()=>{f&&!g&&c("allowTalk")}),[c,f,g]);const C=(0,i.Ye)((()=>{if(p){const e=Math.floor(100*Math.random());return e<32?[0,120]:e<64?[120,240]:e<97?[240,420]:[420,540]}return!f&&g?e?[99,135]:[136,172]:f&&!g?[0,36]:g?[0,0]:e?[69,99]:[36,69]}),[f,p,e,g]),S=p?"HandFilled":"VoiceMini",E=()=>{I(),s()},b=(0,i.Ye)((()=>d(n?"VoipMutedTapedForSpeak":g?"VoipMutedByAdmin":e?"VoipUnmute":"VoipTapToMute")),[n,e,d,g]);return i.ZP.createElement("div",{className:"button-wrapper microphone-wrapper"},i.ZP.createElement("button",{className:(0,h.Z)("MicrophoneButton",e&&"crossed",t&&"can-self-unmute",v&&"is-connecting",g&&"muted-by-admin"),onMouseDown:()=>{if(g){if(p)return;return I(),l(),m(!0),void setTimeout((()=>{m(!1)}),3e3)}u.current="down",e&&setTimeout((()=>{"down"===u.current&&(u.current="hold",E())}),200)},onMouseUp:()=>{g||(E(),u.current="up")}},i.ZP.createElement(N,{name:S,size:48,playSegment:C})),i.ZP.createElement("div",{className:"button-text"},b))})));var U=a(4605),O=a(6071),R=a(2328),$=a(2275);const D=[0,17],V=[17,34],A=(0,i.X$)((0,o.c$)((e=>({isAdmin:(0,c.Ht)(e)})))((({participant:e,closeDropdown:t,isDropdownOpen:a,anchor:n,isAdmin:s})=>{const{toggleGroupCallMute:l,setGroupCallParticipantVolume:c,toggleGroupCallPanel:d,openChat:u,requestToSpeak:p}=(0,o.uC)(),m=(0,P.Z)(),[v,g,f]=(0,S.Z)(),C=null==e?void 0:e.id,{isMutedByMe:E,isMuted:b,isSelf:y,canSelfUnmute:k}=e||{},I=Boolean(null==e?void 0:e.raiseHandRating),G=!k&&b,[w,T]=(0,i.eJ)(E?0:((null==e?void 0:e.volume)||r.aC)/r.Ro);(0,i.d4)((()=>{T(E?0:((null==e?void 0:e.volume)||r.aC)/r.Ro)}),[C]);const M=(0,O.Z)(500),U=(0,i.I4)((e=>{e.stopPropagation(),g(),t()}),[g,t]),A=(0,i.I4)((e=>{e.stopPropagation(),p({value:!1}),t()}),[p,t]),H=(0,i.I4)((e=>{e.stopPropagation(),t(),s||T(E?r.aC/r.Ro:0),l({participantId:C,value:s?!G:!E})}),[t,l,C,s,G,E]),F=(0,i.I4)((e=>{e.stopPropagation(),d(),u({id:C}),t()}),[d,t,u,C]),L=0===w?D:V;return i.ZP.createElement("div",null,i.ZP.createElement(R.Z,{isOpen:a,positionX:"right",autoClose:!0,style:n?`right: 1rem; top: ${n.y}px;`:void 0,onClose:t,className:"participant-menu"},!y&&!G&&i.ZP.createElement("div",{className:"group"},i.ZP.createElement("div",{className:(0,h.Z)("volume-control",w<50&&"low",w>=50&&w<100&&"medium",w>=100&&w<150&&"normal",w>=150&&"high")},i.ZP.createElement("input",{type:"range",min:"0",max:"200",value:w,onChange:e=>{const t=Number(e.target.value);T(t),M((()=>{0===t?l({participantId:C,value:!0}):c({participantId:C,volume:Math.floor(t*r.Ro)})}))}}),i.ZP.createElement("div",{className:"info"},i.ZP.createElement(N,{name:"Speaker",playSegment:L,size:24}),i.ZP.createElement("span",null,w,"%")))),i.ZP.createElement("div",{className:"group"},I&&y&&i.ZP.createElement(Z.Z,{icon:"stop-raising-hand",onClick:A},m("VoipGroupCancelRaiseHand")),!y&&i.ZP.createElement(Z.Z,{icon:"user",onClick:F},m("VoipGroupOpenProfile")),!y&&i.ZP.createElement(Z.Z,{icon:b&&s?"allow-speak":"microphone-alt",onClick:H},m(s?G?"VoipGroupAllowToSpeak":"VoipMute":E?"VoipGroupUnmuteForMe":"VoipGroupMuteForMe")),!y&&s&&i.ZP.createElement(Z.Z,{icon:"delete-user",destructive:!0,onClick:U},m("VoipGroupUserRemove")))),!y&&s&&i.ZP.createElement($.Z,{isOpen:v,userId:C,onClose:f}))})));var H=a(7407),F=a(172);const L=(0,i.X$)((({participant:e,noColor:t})=>{const{isMuted:a,isMutedByMe:o}=e,r=(e.amplitude||0)>n.THRESHOLD,s=Boolean(e.raiseHandRating),l=(0,G.Z)(s),c=!(null!=e&&e.canSelfUnmute)&&a,d=(0,G.Z)(a),u=(0,i.Ye)((()=>a&&!d?[43,64]:!a&&d?[22,42]:s&&!l?[65,84]:!c&&l?[0,21]:a?[22,23]:[43,44]),[a,c,s]),p=(0,i.Ye)((()=>t?[255,255,255]:s?[77,166,224]:c||o?[255,112,111]:r?[87,188,108]:[132,141,148]),[t,s,c,o,r]);return i.ZP.createElement(N,{name:"VoiceOutlined",playSegment:u,size:28,color:p})})),x=(0,i.X$)((0,o.c$)(((e,{participant:t})=>({user:t.isUser?(0,l.dy)(e,t.id):void 0,chat:t.isUser?void 0:(0,l.Z1)(e,t.id)})))((({openParticipantMenu:e,participant:t,user:a,chat:o})=>{const s=(0,i.sO)(null),l=(0,P.Z)(),{isSelf:c,isMutedByMe:d,isMuted:u}=t,p=(t.amplitude||0)>n.THRESHOLD,m=Boolean(t.raiseHandRating),[v,g]=(0,i.Ye)((()=>c?[l("ThisIsYou"),"blue"]:d?[l("VoipGroupMutedForMe"),"red"]:m?[l("WantsToSpeak"),"blue"]:!u&&p?[t.volume&&t.volume!==r.aC?l("SpeakingWithVolume",(t.volume/r.Ro).toString()).replace("%%","%"):l("Speaking"),"green"]:t.about?[t.about,""]:[l("Listening"),"blue"]),[p,t.volume,l,c,d,m,u,t.about]);if(!a&&!o)return;const f=a?`${a.firstName||""} ${a.lastName||""}`:null==o?void 0:o.title;return i.ZP.createElement("div",{className:(0,h.Z)("GroupCallParticipant",t.canSelfUnmute&&"can-self-unmute"),onClick:()=>{c||e(s.current,t)},ref:s},i.ZP.createElement(F.Z,{user:a,chat:o,size:"medium"}),i.ZP.createElement("div",{className:"info"},i.ZP.createElement("span",{className:"name"},f),i.ZP.createElement("span",{className:(0,h.Z)("about",g)},v)),i.ZP.createElement("div",{className:"microphone"},i.ZP.createElement(L,{participant:t})))})));var j=a(1273);const _=(0,i.X$)((0,o.c$)((e=>{const{participantsCount:t,participants:a}=(0,c.mU)(e)||{};return{participants:a,participantsCount:t||0}}))((({participants:e,participantsCount:t,openParticipantMenu:a})=>{const{createGroupCallInviteLink:n,loadMoreGroupCallParticipants:r}=(0,o.uC)(),s=(0,P.Z)(),l=(0,i.Ye)((()=>Object.keys(e||{})),[e]),[c,d]=(0,H.Z)(r,l,l.length>=t);return i.ZP.createElement("div",{className:"participants"},i.ZP.createElement("div",{className:"invite-btn",onClick:n},i.ZP.createElement("div",{className:"icon"},i.ZP.createElement("i",{className:"icon-add-user"})),i.ZP.createElement("div",{className:"text"},s("VoipGroupInviteMember"))),i.ZP.createElement(j.Z,{items:c,onLoadMore:d},null==c?void 0:c.map((t=>e[t]&&i.ZP.createElement(x,{key:t,openParticipantMenu:a,participant:e[t]})))))}))),B=(0,i.X$)((0,o.c$)(((e,{participant:t})=>({currentUserId:e.currentUserId,user:t.isUser?(0,l.dy)(e,t.id):void 0,chat:t.isUser?void 0:(0,l.Z1)(e,t.id),isActive:(t.amplitude||0)>n.THRESHOLD})))((({type:e,onClick:t,user:a,chat:o,isActive:s,isFullscreen:l})=>{const c=(0,P.Z)(),d=(0,i.I4)((()=>{t&&t((null==a?void 0:a.id)||o.id,e)}),[o,t,e,null==a?void 0:a.id]);if(!a&&!o)return;const u=(0,n.getUserStreams)((null==a?void 0:a.id)||o.id);return i.ZP.createElement("div",{className:(0,h.Z)("GroupCallParticipantVideo",s&&"active"),onClick:d},l&&i.ZP.createElement("button",{className:"back-button"},i.ZP.createElement("i",{className:"icon-arrow-left"}),c("Back")),i.ZP.createElement(F.Z,{user:a,chat:o,className:"thumbnail-avatar"}),r.LH&&i.ZP.createElement("div",{className:"thumbnail-wrapper"},i.ZP.createElement("video",{className:"thumbnail",muted:!0,autoPlay:!0,playsInline:!0,srcObject:null==u?void 0:u[e]})),i.ZP.createElement("video",{className:"video",muted:!0,autoPlay:!0,playsInline:!0,srcObject:null==u?void 0:u[e]}),i.ZP.createElement("div",{className:"info"},i.ZP.createElement("i",{className:"icon-microphone-alt"}),i.ZP.createElement("span",{className:"name"},(null==a?void 0:a.firstName)||(null==o?void 0:o.title)),"presentation"===e&&i.ZP.createElement("i",{className:"last-icon icon-active-sessions"})))}))),z=(0,i.X$)((0,o.c$)((e=>{const{participants:t}=(0,c.mU)(e)||{};return{participants:t}}))((({participants:e,onDoubleClick:t})=>{const[a,n]=(0,i.eJ)(void 0),o=(0,i.Ye)((()=>Object.values(e||{}).filter((e=>e.hasPresentationStream))),[e]),r=(0,i.Ye)((()=>Object.values(e||{}).filter((e=>e.hasVideoStream))),[e]),s=r.length+o.length,l=s<=2?1:s<=6?2:s<=9?3:4,c=3===s||2===l&&s%2!=0,d=(0,i.I4)(((e,t)=>{a&&e===a.id&&t===a.type?n(void 0):n({id:e,type:t})}),[a]);return i.ZP.createElement("div",{className:"streams",onDoubleClick:t},i.ZP.createElement("div",{className:(0,h.Z)("videos",c&&"span-last-video"),style:`--column-count: ${a?1:l}`},a&&i.ZP.createElement(B,{key:a.id,isFullscreen:!0,onClick:d,participant:e[a.id],type:a.type}),a?void 0:o.map((e=>i.ZP.createElement(B,{key:e.id,onClick:d,participant:e,type:"presentation"}))),a?void 0:r.map((e=>i.ZP.createElement(B,{key:e.id,onClick:d,participant:e,type:"video"})))))}))),Q=[0,10],q=(0,i.X$)((0,o.c$)(((e,{groupCallId:t})=>{const{connectionState:a,title:n,isSpeakerDisabled:i,participants:o,participantsCount:r}=(0,c.$5)(e,t)||{};return{connectionState:a,title:n,isSpeakerEnabled:!i,participantsCount:r,meParticipant:(0,c.GU)(e,t,e.currentUserId),isGroupCallPanelHidden:!!e.groupCalls.isGroupCallPanelHidden,isAdmin:(0,c.Ht)(e),participants:o}}))((({groupCallId:e,isGroupCallPanelHidden:t,connectionState:a,isSpeakerEnabled:r,title:s,meParticipant:l,isAdmin:c,participants:d})=>{const{toggleGroupCallVideo:u,toggleGroupCallPresentation:p,leaveGroupCall:m,toggleGroupCallPanel:v,connectToActiveGroupCall:g,playGroupCallSound:f}=(0,o.uC)(),I=(0,P.Z)(),G=(0,i.sO)(null),[w,T]=(0,i.eJ)(!1),[O,R,$]=(0,S.Z)(),[D,V,H]=(0,S.Z)(!0),F=d&&Object.values(d).some((e=>e.video||e.presentation)),L=O&&!C.wB&&F,[x,j]=(0,i.eJ)(),[B,q,J]=(0,S.Z)(),[X,Y,W]=(0,S.Z)(),[K,ee]=(0,i.eJ)(!1),[te,ae]=(0,i.eJ)(!1),ne=null==l?void 0:l.hasVideoStream,ie=null==l?void 0:l.hasPresentationStream,oe="connected"!==a,re=!(null==l?void 0:l.canSelfUnmute)&&(null==l?void 0:l.isMuted),se=(0,i.I4)(((e,t)=>{const a=e.getBoundingClientRect(),n=G.current;j({anchor:{x:a.left,y:a.top-n.offsetTop+60},participant:t}),q()}),[q]);(0,i.d4)((()=>{"connected"===a?f({sound:"join"}):"reconnecting"===a&&f({sound:"connecting"})}),[a,f]);const le=()=>{W(),ee(!1)},ce=(0,i.Ye)((()=>({onTrigger:e,isOpen:t})=>i.ZP.createElement(b.Z,{round:!0,size:"smaller",color:"translucent",className:t?"active":void 0,onClick:e,ariaLabel:I("AccDescrMoreOptions")},i.ZP.createElement("i",{className:"icon-more"}))),[I]),de=(0,i.I4)((()=>{G.current&&(O?document.exitFullscreen().then($):G.current.requestFullscreen().then(R))}),[$,O,R]),ue=(0,i.I4)((()=>{C.t0&&(O||H(),de())}),[H,de,O]),pe=(0,i.I4)((()=>{O?$():R()}),[$,O,R]);(0,i.d4)((()=>{if(!C.t0)return;const e=G.current;return e?(e.addEventListener("fullscreenchange",pe),()=>{e.removeEventListener("fullscreenchange",pe)}):void 0}),[pe]),(0,i.d4)((()=>{g()}),[g,e]);const me=()=>{if(c&&!X)return Y(),void(O&&de());f({sound:"leave"}),T(!0),W()};return i.ZP.createElement(k.Z,{isOpen:!t&&!w,onClose:v,className:(0,h.Z)("GroupCall",C.wB&&"single-column",L&&"landscape",!D&&"no-sidebar"),dialogRef:G,onCloseAnimationEnd:()=>{w&&m({shouldDiscard:te})}},i.ZP.createElement("div",{className:"header"},i.ZP.createElement("h3",null,s||I("VoipGroupVoiceChat")),C.t0&&i.ZP.createElement(b.Z,{round:!0,size:"smaller",color:"translucent",onClick:de,ariaLabel:I(O?"AccExitFullscreen":"AccSwitchToFullscreen")},i.ZP.createElement("i",{className:O?"icon-smallscreen":"icon-fullscreen"})),L&&i.ZP.createElement(b.Z,{round:!0,size:"smaller",color:"translucent",onClick:()=>{D?H():V()}},i.ZP.createElement("i",{className:"icon-sidebar"})),(n.IS_SCREENSHARE_SUPPORTED&&!re||c)&&i.ZP.createElement(y.Z,{positionX:"right",trigger:ce},n.IS_SCREENSHARE_SUPPORTED&&!re&&i.ZP.createElement(Z.Z,{icon:"share-screen",onClick:p},I(ie?"VoipChatStopScreenCapture":"VoipChatStartScreenCapture")),c&&i.ZP.createElement(Z.Z,{icon:"phone-discard-outline",onClick:()=>{ee(!0),ae(!0),Y(),O&&de()},destructive:!0},I("VoipGroupLeaveAlertEndChat"))),i.ZP.createElement(b.Z,{round:!0,size:"smaller",color:"translucent",onClick:()=>{v(),O&&$()}},i.ZP.createElement("i",{className:"icon-close"}))),i.ZP.createElement("div",{className:"scrollable custom-scroll"},i.ZP.createElement(z,{onDoubleClick:ue}),(!L||D)&&i.ZP.createElement(_,{openParticipantMenu:se})),i.ZP.createElement(A,{participant:null==x?void 0:x.participant,anchor:null==x?void 0:x.anchor,isDropdownOpen:B,closeDropdown:J}),i.ZP.createElement("div",{className:"buttons"},oe&&i.ZP.createElement(E.Z,null),i.ZP.createElement("div",{className:"button-wrapper"},i.ZP.createElement("div",{className:"video-buttons"},ne&&(C.wZ||C.cj)&&i.ZP.createElement("button",{className:"smaller-button",onClick:n.switchCameraInput},i.ZP.createElement(N,{name:"CameraFlip",playSegment:Q,size:24})),i.ZP.createElement("button",{className:(0,h.Z)("small-button",re?"speaker":"camera",(ne||re&&r)&&"active"),onClick:()=>{re?(0,n.toggleSpeaker)():u()}},i.ZP.createElement("i",{className:re?"icon-speaker":ne?"icon-video-stop":"icon-video"}))),i.ZP.createElement("div",{className:"button-text"},I(re?"VoipSpeaker":"VoipCamera"))),i.ZP.createElement(M,null),i.ZP.createElement("div",{className:"button-wrapper"},i.ZP.createElement("button",{className:"small-button leave",onClick:me},i.ZP.createElement("i",{className:"icon-phone-discard"})),i.ZP.createElement("div",{className:"button-text"},I("VoipGroupLeave")))),i.ZP.createElement(k.Z,{isOpen:X,onClose:le,className:"error",title:I(K?"VoipGroupEndAlertTitle":"VoipGroupLeaveAlertTitle")},i.ZP.createElement("p",null,I(K?"VoipGroupEndAlertText":"VoipGroupLeaveAlertText")),!K&&i.ZP.createElement(U.Z,{label:I("VoipGroupEndChat"),checked:te,onCheck:ae}),i.ZP.createElement(b.Z,{isText:!0,className:"confirm-dialog-button",onClick:me},I(K?"VoipGroupEnd":"VoipGroupLeave")),i.ZP.createElement(b.Z,{isText:!0,className:"confirm-dialog-button",onClick:le},I("Cancel"))))}))),J=(0,i.X$)((0,o.c$)((e=>({groupCall:(0,c.mU)(e),isGroupCallPanelHidden:e.groupCalls.isGroupCallPanelHidden,meParticipant:(0,c.GU)(e,e.groupCalls.activeGroupCallId,e.currentUserId)})))((({groupCall:e,meParticipant:t,isGroupCallPanelHidden:a})=>{const{toggleGroupCallPanel:n}=(0,o.uC)(),r=(0,P.Z)();if((0,i.d4)((()=>(document.body.classList.toggle("has-group-call-header",a),()=>{document.body.classList.toggle("has-group-call-header",!1)})),[a]),e&&t)return i.ZP.createElement("div",{className:(0,h.Z)("ActiveCallHeader",a&&"open"),onClick:n},i.ZP.createElement("span",{className:"title"},e.title||r("VoipGroupVoiceChat")))})));var X=a(7551),Y=a(2858),W=a(8360);const K=(0,i.X$)((0,o.c$)((e=>{const{chatId:t}=(0,l.Bt)(e)||{},a=t?(0,l.dy)(e,t):void 0;return{userFullName:a?(0,Y.Js)(a):void 0,channelTitle:(0,c.oq)(e)}}))((({isOpen:e,channelTitle:t,userFullName:a})=>{const{closeCallFallbackConfirm:n,inviteToCallFallback:r}=(0,o.uC)(),[s,l]=(0,i.eJ)(!0),c=(0,W.Z)(a,!0);return i.ZP.createElement(X.Z,{title:"Start Call",isOpen:e,confirmHandler:()=>{r({shouldRemove:s})},onClose:n},i.ZP.createElement("p",null,"The call will be started in a private channel ",i.ZP.createElement("b",null,t),"."),i.ZP.createElement(U.Z,{label:`Remove ${c} from this channel after the call`,checked:s,onCheck:l}))})))},3794:(e,t)=>{(()=>{"use strict";var e={"./src/blacksilence.ts":(e,t,a)=>{a.r(t),a.d(t,{silence:()=>n,black:()=>i});const n=e=>{const t=e.createOscillator(),a=t.connect(e.createMediaStreamDestination());return t.start(),new MediaStream([Object.assign(a.stream.getAudioTracks()[0],{enabled:!1})])},i=({width:e=640,height:t=480}={})=>{const a=Object.assign(document.createElement("canvas"),{width:e,height:t}),n=a.getContext("2d");if(!n)throw Error("Cannot create canvas ctx");n.fillRect(0,0,e,t);const i=a.captureStream();return new MediaStream([Object.assign(i.getVideoTracks()[0],{enabled:!1})])}},"./src/buildSdp.ts":(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a("./src/utils.ts");const i=(e,t=!1,a=!1)=>{const i=[],o=e=>{i.push(e)},{sessionId:r,ssrcs:s,audioExtensions:l,videoExtensions:c,audioPayloadTypes:d,videoPayloadTypes:u,transport:{ufrag:p,pwd:m,fingerprints:v,candidates:g}}=e;o("v=0"),o(`o=- ${r} 2 IN IP4 0.0.0.0`),o("s=-"),o("t=0 0"),o(`a=group:BUNDLE ${s.map((e=>e.endpoint)).join(" ")}${a?"":" 2"}`),o("a=ice-lite");const f=e=>{let t="";t+="a=candidate:",t+=`${e.foundation} ${e.component} ${e.protocol} ${e.priority} ${e.ip} ${e.port} typ ${e.type}`,"rel-addr"in e&&(t+=` raddr ${e["rel-addr"]} rport ${e["rel-port"]}`),t+=` generation ${e.generation}`,o(t)},C=()=>{o(`a=ice-ufrag:${p}`),o(`a=ice-pwd:${m}`),v.forEach((e=>{o(`a=fingerprint:${e.hash} ${e.fingerprint}`),o("a=setup:passive")})),g.forEach(f)},h=e=>{var t;const{channels:a,id:n,name:i,clockrate:r,parameters:s}=e;var l=a?`/${a}`:"";o(`a=rtpmap:${n} ${i}/${r}${l}`),s&&(l=Object.keys(s).map((e=>`${e}=${s[e]};`)).join(" "),o(`a=fmtp:${n} ${l}`)),null===(t=e["rtcp-fbs"])||void 0===t||t.forEach((e=>{o(`a=rtcp-fb:${n} ${e.type}${e.subtype?` ${e.subtype}`:""}`)}))};return e=e=>{const a=e.isVideo?u:d;var i=e.isVideo?"video":"audio";o(`m=${i} ${e.isMain?1:0} RTP/SAVPF ${a.map((e=>e.id)).join(" ")}`),o("c=IN IP4 0.0.0.0"),o("b=AS:1300"),o(`a=mid:${e.endpoint}`),o("a=rtcp-mux"),a.forEach(h),o("a=rtcp:1 IN IP4 0.0.0.0"),e.isVideo&&o("a=rtcp-rsize"),(e.isVideo?c:l).forEach((({id:e,uri:t})=>{o(`a=extmap:${e} ${t}`)})),e.isRemoved?o("a=inactive"):(C(),t?o("a=recvonly"):(e.isMain?o("a=sendrecv"):(o("a=sendonly"),o("a=bundle-only")),e.sourceGroups.forEach((t=>{o(`a=ssrc-group:${t.semantics} ${t.sources.map(n.fromTelegramSource).join(" ")}`),t.sources.forEach((t=>{t=(0,n.fromTelegramSource)(t),o(`a=ssrc:${t} cname:${e.endpoint}`),o(`a=ssrc:${t} msid:${e.endpoint} ${e.endpoint}`),o(`a=ssrc:${t} mslabel:${e.endpoint}`),o(`a=ssrc:${t} label:${e.endpoint}`)}))}))))},s.filter((e=>"0"===e.endpoint||"1"===e.endpoint)).map(e),a||(o("m=application 1 UDP/DTLS/SCTP webrtc-datachannel"),o("c=IN IP4 0.0.0.0"),C(),o("a=ice-options:trickle"),o("a=mid:"+(a?"1":"2")),o("a=sctp-port:5000"),o("a=max-message-size:262144")),s.filter((e=>"0"!==e.endpoint&&"1"!==e.endpoint)).map(e),`${i.join("\n")}\n`}},"./src/parseSdp.ts":(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a("./src/utils.ts");const i=e=>{var t,a;if(!e||!e.sdp)throw Error("Failed parsing SDP: session description is null");const i=e.sdp.split("\r\nm=").map(((e,t)=>0===t?e:`m=${e}`)).reduce(((e,t)=>{var a;return e[(null===(a=t.match(/^m=(.+?)\s/))||void 0===a?void 0:a[1])||"header"]=t.split("\r\n").filter(Boolean),e}),{});var o=(e,t)=>{var a,n;return t?null===(a=i[t])||void 0===a||null===(n=a.find((t=>t.startsWith(e))))||void 0===n?void 0:n.substr(e.length):Object.values(i).map((t=>{var a;return null===(a=t.find((t=>t.startsWith(e))))||void 0===a?void 0:a.substr(e.length)})).filter(Boolean)[0]};const r=o("a=ssrc:","audio");var s=r&&Number(r.split(" ")[0]);const l=(null===(t=o("a=ssrc-group:","video"))||void 0===t?void 0:t.split(" "))||void 0;if(!l)throw Error("Failed parsing SDP: no video ssrc");var[c,d]=(null===(a=o("a=fingerprint:"))||void 0===a?void 0:a.split(" "))||[];if(!c||!d)throw Error("Failed parsing SDP: no fingerprint");if(e=o("a=ice-ufrag:"),o=o("a=ice-pwd:"),!e||!o)throw Error("Failed parsing SDP: no ICE ufrag or pwd");return{fingerprints:[{fingerprint:d,hash:c,setup:"active"}],pwd:o,ufrag:e,...s&&{ssrc:(0,n.toTelegramSource)(s)},...l&&{"ssrc-groups":[{semantics:l[0],sources:l.slice(1,l.length).map(Number).map(n.toTelegramSource)}]}}}},"./src/secretsauce.ts":(e,t,a)=>{a.r(t),a.d(t,{getDevices:()=>async function(e,t=!0){return(await navigator.mediaDevices.enumerateDevices()).filter((a=>a.kind===`${e}${t?"input":"output"}`))},toggleSpeaker:()=>function(){var e,t;s&&(s.isSpeakerDisabled=!s.isSpeakerDisabled,null!==(e=s)&&void 0!==e&&null!==(t=e.onUpdate)&&void 0!==t&&t.call(e,{"@type":"updateGroupCallConnectionState",connectionState:"connected",isSpeakerDisabled:s.isSpeakerDisabled}),s.participantFunctions&&Object.values(s.participantFunctions).forEach((e=>{var t,a;null===(t=e.toggleMute)||void 0===t||t.call(e,!(null===(a=s)||void 0===a||!a.isSpeakerDisabled))})))},toggleNoiseSuppression:()=>function(){if(s&&s.myId&&s.streams){const a=s.streams[s.myId].audio;if(a){const n=a.getTracks()[0];var e,t;n&&(({echoCancellation:e,noiseSuppression:t}=n.getConstraints()),n.applyConstraints({echoCancellation:!e,noiseSuppression:!t}))}}},getUserStreams:()=>c,setVolume:()=>function(e,t){var a,n,i;const o=null===(a=s)||void 0===a||null===(n=a.participantFunctions)||void 0===n?void 0:n[e];o&&(null===(i=o.setVolume)||void 0===i||i.call(o,t))},isStreamEnabled:()=>d,switchCameraInput:()=>async function(){var e;if(null!==(e=s)&&void 0!==e&&e.myId&&s.connection&&s.streams&&s.facingMode){var t;const e=null===(t=c(s.myId))||void 0===t?void 0:t.video;if(e){const t=e.getTracks()[0];if(t){const e=s.connection.getSenders().find((e=>{var a;return t.id===(null===(a=e.track)||void 0===a?void 0:a.id)}));if(e){s.facingMode="environment"===s.facingMode?"user":"environment";try{const t=await p("video",s.facingMode);await e.replaceTrack(t.getTracks()[0]),s.streams[s.myId].video=t}catch(e){}}}}}},toggleStream:()=>m,leaveGroupCall:()=>g,handleUpdateGroupCallParticipants:()=>async function(e){if(s){const{participants:n,conference:o,connection:r,myId:l}=s;if(n&&o&&r&&o.ssrcs&&o.transport&&l)if(e.find((e=>{var t,a,n,i;return e.isSelf&&e.source!==(null===(t=s)||void 0===t||null===(a=t.conference)||void 0===a||null===(n=a.ssrcs)||void 0===n||null===(i=n.find((e=>e.isMain&&!e.isVideo)))||void 0===i?void 0:i.sourceGroups[0].sources[0])})))g();else{const n=[];if(e.forEach((e=>{if(e.isSelf)e.isMuted&&!e.canSelfUnmute&&(m("audio",!1),m("video",!1),m("presentation",!1));else{var t=e.isLeft;const a=e.isMuted||e.isMutedByMe,i=!e.isVideoJoined||!e.video||t,r=!e.presentation||t;let s=!1,l=!1,c=!1;o.ssrcs.filter((t=>t.userId===e.id)).forEach((t=>{t.isVideo||(t.sourceGroups[0].sources[0]===e.source&&(l=!0),t.isRemoved=a),t.isVideo&&(t.isPresentation||(e.video&&t.endpoint===e.video.endpoint&&(s=!0),t.isRemoved=i),t.isPresentation&&(e.presentation&&t.endpoint===e.presentation.endpoint&&(c=!0),t.isRemoved=r))})),a||l||o.ssrcs.push({userId:e.id,isMain:!1,endpoint:`audio${e.source}`,isVideo:!1,sourceGroups:[{semantics:"FID",sources:[e.source]}]}),i||s||!e.video||(n.push(e.video.endpoint),o.ssrcs.push({userId:e.id,isMain:!1,endpoint:e.video.endpoint,isVideo:!0,sourceGroups:e.video.sourceGroups})),r||c||!e.presentation||o.ssrcs.push({isPresentation:!0,userId:e.id,isMain:!1,endpoint:e.presentation.endpoint,isVideo:!0,sourceGroups:e.presentation.sourceGroups})}})),s.updatingParticipantsQueue)s.updatingParticipantsQueue.push(o);else{s.updatingParticipantsQueue=[],e=(0,i.default)(o),await r.setRemoteDescription({type:"offer",sdp:e});try{var t=await r.createAnswer();if(await r.setLocalDescription(t),u(l),0<s.updatingParticipantsQueue.length)for(const e of s.updatingParticipantsQueue){await r.setRemoteDescription({type:"offer",sdp:(0,i.default)(e)});var a=await r.createAnswer();await r.setLocalDescription(a),u(l)}s.updatingParticipantsQueue=void 0}catch(e){console.error(e)}}}}},handleUpdateGroupCallConnection:()=>async function(e,t){if(s){var a=t?s.screenshareConference:s.conference;const d=t?s.screenshareConnection:s.connection;if(a&&d&&a.ssrcs){var n,o,r,l,c=Date.now();e={...a,transport:e.transport,sessionId:c,audioExtensions:null===(n=e.audio)||void 0===n?void 0:n["rtp-hdrexts"],audioPayloadTypes:null===(o=e.audio)||void 0===o?void 0:o["payload-types"],videoExtensions:null===(r=e.video)||void 0===r?void 0:r["rtp-hdrexts"],videoPayloadTypes:null===(l=e.video)||void 0===l?void 0:l["payload-types"]},s={...s,...t?{screenshareConference:e}:{conference:e}};try{await d.setRemoteDescription({type:"answer",sdp:(0,i.default)(e,!0,t)})}catch(e){console.error(e)}}}},startSharingScreen:()=>async function(){if(s)try{const e=await p("presentation");return e?(e.getTracks()[0].onended=()=>{var e;s&&s.myId&&(null!==(e=s.streams)&&void 0!==e&&e[s.myId].presentation,u(s.myId),l())},new Promise((t=>{var{connection:a,dataChannel:t}=h([e],t,!0);s={...s,screenshareConnection:a,screenshareDataChannel:t}}))):void 0}catch(e){return}},joinGroupCall:()=>function(e,t,a,n){if(s)throw Error("Already in call");v("connecting");var i=new MediaStream;return a.srcObject=i,a.play().catch((e=>console.warn(e))),s={onUpdate:n,participants:[],myId:e,speaking:{},silence:(0,o.silence)(t),black:(0,o.black)({width:640,height:480}),analyserInterval:setInterval(f,1e3),audioElement:a,audioContext:t,mediaStream:i},new Promise((e=>{s={...s,...h([s.silence,s.black],e)}}))}});var n=a("./src/parseSdp.ts"),i=a("./src/buildSdp.ts"),o=a("./src/blacksilence.ts"),r=a("./src/utils.ts");let s;function l(e){var t,a,n,i;s&&(null!==(t=s.screenshareDataChannel)&&void 0!==t&&t.close(),null!==(a=s.screenshareConnection)&&void 0!==a&&a.close(),e||null===(n=(i=s).onUpdate)||void 0===n||n.call(i,{"@type":"updateGroupCallLeavePresentation"}))}function c(e){var t,a;return null===(t=s)||void 0===t||null===(a=t.streams)||void 0===a?void 0:a[e]}function d(e,t){var a,n,i;const o=(t=t||(null===(a=s)||void 0===a?void 0:a.myId))&&(null===(n=c(t))||void 0===n?void 0:n[e]);return!!o&&(null===(i=o.getTracks()[0])||void 0===i?void 0:i.enabled)}function u(e){var t,a,n;null===(t=s)||void 0===t||null===(a=t.onUpdate)||void 0===a||a.call(t,{"@type":"updateGroupCallStreams",userId:e,hasAudioStream:d("audio",e),hasVideoStream:d("video",e),hasPresentationStream:d("presentation",e),amplitude:null===(n=s.speaking)||void 0===n?void 0:n[e]})}function p(e,t="user"){return"presentation"===e?navigator.mediaDevices.getDisplayMedia({audio:!1,video:!0}):navigator.mediaDevices.getUserMedia({audio:"audio"===e&&{...r.IS_ECHO_CANCELLATION_SUPPORTED&&{echoCancellation:!0},...r.IS_NOISE_SUPPRESSION_SUPPORTED&&{noiseSuppression:!0}},video:"video"===e&&{facingMode:t}})}async function m(e,t){if(s&&s.myId&&s.connection&&s.streams){var a;const o=null===(a=c(s.myId))||void 0===a?void 0:a[e];if(o){const a=o.getTracks()[0];if(a){var n;const o=[...s.connection.getSenders(),...(null===(n=s.screenshareConnection)||void 0===n?void 0:n.getSenders())||[]].find((e=>{var t;return a.id===(null===(t=e.track)||void 0===t?void 0:t.id)}));if(o){t=void 0===t?!a.enabled:t;try{if(t&&!a.enabled){const t=await p(e);if(await o.replaceTrack(t.getTracks()[0]),s.streams[s.myId][e]=t,"video"===e)s.facingMode="user";else if("audio"===e){var i;const e=s.audioContext;if(!e)return;const a=e.createMediaStreamSource(t),n=e.createAnalyser();n.minDecibels=-100,n.maxDecibels=-30,n.smoothingTimeConstant=.05,n.fftSize=1024,a.connect(n),s={...s,participantFunctions:{...s.participantFunctions,[s.myId]:{...null===(i=s.participantFunctions)||void 0===i?void 0:i[s.myId],getCurrentAmplitude:()=>{var e=new Uint8Array(n.frequencyBinCount);return n.getByteFrequencyData(e),(0,r.getAmplitude)(e,1.5)}}}}}}else if(!t&&a.enabled){a.stop();const t="audio"===e?s.silence:s.black;if(!t)return;await o.replaceTrack(t.getTracks()[0]),s.streams[s.myId][e]=t,"video"===e&&(s.facingMode=void 0)}u(s.myId),"presentation"!==e||t||l(!0)}catch(e){}}}}}}function v(e){var t,a;null===(t=s)||void 0===t||null===(a=t.onUpdate)||void 0===a||a.call(t,{"@type":"updateGroupCallConnectionState",connectionState:e})}function g(){var e,t,a;s&&(s.myId&&null!==(e=s.streams)&&void 0!==e&&e[s.myId]&&Object.values(s.streams[s.myId]||{}).forEach((e=>{null==e||e.getTracks().forEach((e=>{e.stop()}))})),l(!0),null!==(t=s.dataChannel)&&void 0!==t&&t.close(),null!==(a=s.connection)&&void 0!==a&&a.close(),v("disconnected"),s.analyserInterval&&clearInterval(s.analyserInterval),s=void 0)}function f(){s&&s.participantFunctions&&Object.keys(s.participantFunctions).forEach((e=>{const t=s.participantFunctions[Number(e)].getCurrentAmplitude;var a,n;t&&(a=t(),n=s.speaking[e]||0,((s.speaking[e]=a)>r.THRESHOLD&&n<=r.THRESHOLD||a<=r.THRESHOLD&&n>r.THRESHOLD)&&u(e))}))}function C(e){if(s&&s.audioElement&&s.audioContext&&s.mediaStream){var t,a,n=null===(t=s.conference)||void 0===t||null===(a=t.ssrcs)||void 0===a?void 0:a.find((t=>t.endpoint===e.track.id));if(n&&n.userId){var i,o;const{userId:t,isPresentation:a}=n;var l=null===(i=s.participants)||void 0===i?void 0:i.find((e=>e.id===t));const d="video"===e.track.kind?a?"presentation":"video":"audio";if(e.track.onended=()=>{var e,a;null!==(e=s)&&void 0!==e&&null!==(a=e.streams)&&void 0!==a&&a[t][d],u(t)},n=e.streams[0],"audio"===e.track.kind){var c;const e=s.mediaStream,a=new window.AudioContext,i=a.createMediaStreamSource(n),o=a.createGain();o.gain.value=((null==l?void 0:l.volume)||1e4)/1e4;const d=a.createGain();o.gain.value=1;const u=a.createAnalyser();u.minDecibels=-100,u.maxDecibels=-30,u.smoothingTimeConstant=.05,u.fftSize=1024,i.connect(u).connect(d).connect(o).connect(a.destination),e.addTrack(i.mediaStream.getAudioTracks()[0]);const p=new Audio;p.srcObject=n,p.muted=!0,p.remove(),s={...s,participantFunctions:{...s.participantFunctions,[t]:{...null===(c=s.participantFunctions)||void 0===c?void 0:c[t],setVolume:e=>{o.gain.value=1<e?2*e:e},toggleMute:e=>{d.gain.value=e?0:1},getCurrentAmplitude:()=>{var e=new Uint8Array(u.frequencyBinCount);return u.getByteFrequencyData(e),(0,r.getAmplitude)(e,1.5)}}}}}s={...s,streams:{...s.streams,[t]:{...null===(o=s.streams)||void 0===o?void 0:o[t],[d]:n}}},u(t)}}}function h(e,t,a=!1){const i=new RTCPeerConnection;var o=a?void 0:function(e){const t=e.createDataChannel("data",{id:0});return t.onopen=()=>{},t.onmessage=e=>{JSON.parse(e.data).colibriClass},t.onerror=e=>{console.log("%conerror","background: green; font-size: 5em"),console.error(e)},t}(i);return e.forEach((e=>e.getTracks().forEach((t=>{i.addTrack(t,e)})))),a||(i.oniceconnectionstatechange=()=>{var e=i.iceConnectionState;"connected"===e||"completed"===e?v("connected"):"checking"===e||"new"===e?v("connecting"):"disconnected"===i.iceConnectionState&&v("reconnecting")}),i.ontrack=C,i.onnegotiationneeded=async()=>{if(s){var o=s.myId;if(o){var r=await i.createOffer({offerToReceiveVideo:!0,offerToReceiveAudio:!a});if(await i.setLocalDescription(r),r.sdp){var l,c=(0,n.default)(r),d=a?void 0:{userId:"",sourceGroups:[{semantics:"FID",sources:[c.ssrc||0]}],isRemoved:a,isMain:!0,isVideo:!1,isPresentation:a,endpoint:a?"1":"0"},p=c["ssrc-groups"]&&{isPresentation:a,userId:"",sourceGroups:c["ssrc-groups"],isMain:!0,isVideo:!0,endpoint:a?"0":"1"};r=a?s.screenshareConference:s.conference;const i=[];a?(p&&i.push(p),d&&i.push(d)):(d&&i.push(d),p&&i.push(p)),d=e.find((e=>"audio"===e.getTracks()[0].kind)),p=e.find((e=>"video"===e.getTracks()[0].kind)),s={...s,...a?{screenshareConference:{...r,ssrcs:i}}:{conference:{...r,ssrcs:i}},streams:{...s.streams,[o]:{...null===(l=s.streams)||void 0===l?void 0:l[o],...d&&{audio:d},...!a&&p?{video:p}:{presentation:p}}}},u(o),t(c)}}}},{connection:i,dataChannel:o}}},"./src/types.ts":(e,t,a)=>{a.r(t)},"./src/utils.ts":(e,t,a)=>{var n,i,o,r,s;function l(){var{userAgent:e,platform:t}=window.navigator;let a;return-1!==["Macintosh","MacIntel","MacPPC","Mac68K"].indexOf(t)?a="macOS":-1!==["iPhone","iPad","iPod"].indexOf(t)?a="iOS":-1!==["Win32","Win64","Windows","WinCE"].indexOf(t)?a="Windows":/Android/.test(e)?a="Android":/Linux/.test(t)&&(a="Linux"),a}a.r(t),a.d(t,{toTelegramSource:()=>function(e){return e<<0},fromTelegramSource:()=>function(e){return e>>>0},getAmplitude:()=>function(e,t=3){if(!e)return 0;var a=e.length;let n=0;for(let t=0;t<a;t++)n+=e[t]*e[t];var i=Math.sqrt(n/a)/255;return Math.min(1,i*t)},getPlatform:()=>l,THRESHOLD:()=>c,PLATFORM_ENV:()=>d,IS_MAC_OS:()=>u,IS_IOS:()=>p,IS_SCREENSHARE_SUPPORTED:()=>m,IS_ECHO_CANCELLATION_SUPPORTED:()=>v,IS_NOISE_SUPPRESSION_SUPPORTED:()=>g});const c=.1,d=l(),u="macOS"===d,p="iOS"===d,m="getDisplayMedia"in((null===(n=navigator)||void 0===n?void 0:n.mediaDevices)||{}),v=null===(i=navigator)||void 0===i||null===(o=i.mediaDevices)||void 0===o?void 0:o.getSupportedConstraints().echoCancellation,g=null===(r=navigator)||void 0===r||null===(s=r.mediaDevices)||void 0===s?void 0:s.getSupportedConstraints().noiseSuppression}},a={};function n(t){var i=a[t];return void 0!==i||(i=a[t]={exports:{}},e[t](i,i.exports,n)),i.exports}n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};(()=>{n.r(i),n.d(i,{handleUpdateGroupCallConnection:()=>e.handleUpdateGroupCallConnection,startSharingScreen:()=>e.startSharingScreen,joinGroupCall:()=>e.joinGroupCall,getDevices:()=>e.getDevices,getUserStreams:()=>e.getUserStreams,setVolume:()=>e.setVolume,isStreamEnabled:()=>e.isStreamEnabled,toggleStream:()=>e.toggleStream,leaveGroupCall:()=>e.leaveGroupCall,handleUpdateGroupCallParticipants:()=>e.handleUpdateGroupCallParticipants,switchCameraInput:()=>e.switchCameraInput,toggleSpeaker:()=>e.toggleSpeaker,toggleNoiseSuppression:()=>e.toggleNoiseSuppression,IS_SCREENSHARE_SUPPORTED:()=>t.IS_SCREENSHARE_SUPPORTED,THRESHOLD:()=>t.THRESHOLD});var e=n("./src/secretsauce.ts"),t=n("./src/utils.ts");n("./src/types.ts")})();var o,r=t;for(o in i)r[o]=i[o];i.__esModule&&Object.defineProperty(r,"__esModule",{value:!0})})()},1171:(e,t,a)=>{"use strict";e.exports=a.p+"call-fallback-avatar.50c421eaa09a90e44ec4..png"}}]);
//# sourceMappingURL=532.a30fdabaf6a4ec59d8a7.js.map