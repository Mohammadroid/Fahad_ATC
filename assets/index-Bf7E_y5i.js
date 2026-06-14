(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yh="184",Bs={ROTATE:0,DOLLY:1,PAN:2},Os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hg=0,Mu=1,ug=2,oo=1,dg=2,Ir=3,_i=0,sn=1,tn=2,mi=0,ks=1,cc=2,bu=3,Tu=4,fg=5,Zi=100,pg=101,mg=102,gg=103,_g=104,xg=200,vg=201,yg=202,Sg=203,hc=204,uc=205,Mg=206,bg=207,Tg=208,Eg=209,Ag=210,wg=211,Rg=212,Cg=213,Pg=214,dc=0,fc=1,pc=2,Hs=3,mc=4,gc=5,_c=6,xc=7,np=0,Lg=1,Dg=2,Kn=0,ip=1,sp=2,rp=3,Sh=4,ap=5,op=6,lp=7,Eu="attached",Ig="detached",cp=300,is=301,Gs=302,tl=303,nl=304,Bo=306,Ws=1e3,qn=1001,_o=1002,Nt=1003,hp=1004,Nr=1005,St=1006,lo=1007,di=1008,dn=1009,up=1010,dp=1011,Xr=1012,Mh=1013,jn=1014,Mn=1015,xi=1016,bh=1017,Th=1018,qr=1020,fp=35902,pp=35899,mp=1021,gp=1022,bn=1023,vi=1026,Qi=1027,Eh=1028,Ah=1029,ss=1030,wh=1031,Rh=1033,co=33776,ho=33777,uo=33778,fo=33779,vc=35840,yc=35841,Sc=35842,Mc=35843,bc=36196,Tc=37492,Ec=37496,Ac=37488,wc=37489,xo=37490,Rc=37491,Cc=37808,Pc=37809,Lc=37810,Dc=37811,Ic=37812,Nc=37813,Uc=37814,Oc=37815,Fc=37816,Bc=37817,kc=37818,zc=37819,Vc=37820,Hc=37821,Gc=36492,Wc=36494,Xc=36495,qc=36283,Yc=36284,vo=36285,Kc=36286,Yr=2300,Kr=2301,il=2302,Au=2303,wu=2400,Ru=2401,Cu=2402,Ng=2500,Ug=0,_p=1,$c=2,Og=3200,jc=0,Fg=1,Fi="",It="srgb",fn="srgb-linear",yo="linear",ct="srgb",cs=7680,Pu=519,Bg=512,kg=513,zg=514,Ch=515,Vg=516,Hg=517,Ph=518,Gg=519,Zc=35044,Wg=35048,Lu="300 es",Yn=2e3,$r=2001;function Xg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yg(){const i=jr("canvas");return i.style.display="block",i}const Du={};function So(...i){const e="THREE."+i.shift();console.log(e,...i)}function xp(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function De(...i){i=xp(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Be(...i){i=xp(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Jc(...i){const e=i.join(" ");e in Du||(Du[e]=!0,De(...i))}function Kg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const $g={[dc]:fc,[pc]:_c,[mc]:xc,[Hs]:gc,[fc]:dc,[_c]:pc,[xc]:mc,[gc]:Hs};class Tn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Iu=1234567;const kr=Math.PI/180,Xs=180/Math.PI;function En(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function Lh(i,e){return(i%e+e)%e}function jg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Zg(i,e,t){return i!==e?(t-i)/(e-i):0}function zr(i,e,t){return(1-t)*i+t*e}function Jg(i,e,t,n){return zr(i,e,1-Math.exp(-t*n))}function Qg(i,e=1){return e-Math.abs(Lh(i,e*2)-e)}function e0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function t0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function n0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function i0(i,e){return i+Math.random()*(e-i)}function s0(i){return i*(.5-Math.random())}function r0(i){i!==void 0&&(Iu=i);let e=Iu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function a0(i){return i*kr}function o0(i){return i*Xs}function l0(i){return(i&i-1)===0&&i!==0}function c0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function h0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function u0(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*p,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*p,o*c);break;case"ZYZ":i.set(l*p,l*f,o*h,o*c);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ln(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const rn={DEG2RAD:kr,RAD2DEG:Xs,generateUUID:En,clamp:Ze,euclideanModulo:Lh,mapLinear:jg,inverseLerp:Zg,lerp:zr,damp:Jg,pingpong:Qg,smoothstep:e0,smootherstep:t0,randInt:n0,randFloat:i0,randFloatSpread:s0,seededRandom:r0,degToRad:a0,radToDeg:o0,isPowerOfTwo:l0,ceilPowerOfTwo:c0,floorPowerOfTwo:h0,setQuaternionFromProperEuler:u0,normalize:ht,denormalize:Ln};class se{static{se.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],p=r[a+2],_=r[a+3];if(d!==_||l!==u||c!==f||h!==p){let g=l*u+c*f+h*p+d*_;g<0&&(u=-u,f=-f,p=-p,_=-_,g=-g);let m=1-o;if(g<.9995){const y=Math.acos(g),M=Math.sin(y);m=Math.sin(m*y)/M,o=Math.sin(o*y)/M,l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+_*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+_*o;const y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*d+l*f-c*u,e[t+1]=l*p+h*u+c*d-o*f,e[t+2]=c*p+h*f+o*u-l*d,e[t+3]=h*p-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{static{E.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sl.copy(this).projectOnVector(e),this.sub(sl)}reflect(e){return this.sub(sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sl=new E,Nu=new pn;class qe{static{qe.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],_=s[0],g=s[3],m=s[6],y=s[1],M=s[4],x=s[7],R=s[2],T=s[5],C=s[8];return r[0]=a*_+o*y+l*R,r[3]=a*g+o*M+l*T,r[6]=a*m+o*x+l*C,r[1]=c*_+h*y+d*R,r[4]=c*g+h*M+d*T,r[7]=c*m+h*x+d*C,r[2]=u*_+f*y+p*R,r[5]=u*g+f*M+p*T,r[8]=u*m+f*x+p*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,p=t*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=d*_,e[1]=(s*c-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=u*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(rl.makeScale(e,t)),this}rotate(e){return this.premultiply(rl.makeRotation(-e)),this}translate(e,t){return this.premultiply(rl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rl=new qe,Uu=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ou=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function d0(){const i={enabled:!0,workingColorSpace:fn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(s.r=zs(s.r),s.g=zs(s.g),s.b=zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fi?yo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Jc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Jc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fn]:{primaries:e,whitePoint:n,transfer:yo,toXYZ:Uu,fromXYZ:Ou,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:Uu,fromXYZ:Ou,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),i}const nt=d0();function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let hs;class f0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hs===void 0&&(hs=jr("canvas")),hs.width=e.width,hs.height=e.height;const s=hs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=hs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=gi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gi(t[n]/255)*255):t[n]=gi(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let p0=0;class Dh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=En(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(al(s[a].image)):r.push(al(s[a]))}else r=al(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function al(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?f0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let m0=0;const ol=new E;class Ut extends Tn{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=qn,s=qn,r=St,a=di,o=bn,l=dn,c=Ut.DEFAULT_ANISOTROPY,h=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=En(),this.name="",this.source=new Dh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ol).x}get height(){return this.source.getSize(ol).y}get depth(){return this.source.getSize(ol).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ws:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case _o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ws:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case _o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=cp;Ut.DEFAULT_ANISOTROPY=1;class xt{static{xt.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,x=(f+1)/2,R=(m+1)/2,T=(h+u)/4,C=(d+_)/4,v=(p+g)/4;return M>x&&M>R?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=C/n):x>R?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=v/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=C/r,s=v/r),this.set(n,s,r,t),this}let y=Math.sqrt((g-p)*(g-p)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(d-_)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class g0 extends Tn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Ut(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:St,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Dh(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends g0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class vp extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _0 extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ee{static{Ee.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,d,u,f,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,u,f,p,_,g)}set(e,t,n,s,r,a,o,l,c,h,d,u,f,p,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ee().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/us.setFromMatrixColumn(e,0).length(),r=1/us.setFromMatrixColumn(e,1).length(),a=1/us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,f=a*d,p=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,p=c*h,_=c*d;t[0]=u+_*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,p=c*h,_=c*d;t[0]=u-_*o,t[4]=-a*d,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,f=a*d,p=o*h,_=o*d;t[0]=l*h,t[4]=p*c-f,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=p*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+p,t[10]=u-_*d}else if(e.order==="XZY"){const u=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=a*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(x0,e,v0)}lookAt(e,t,n){const s=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Ai.crossVectors(n,hn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Ai.crossVectors(n,hn)),Ai.normalize(),da.crossVectors(hn,Ai),s[0]=Ai.x,s[4]=da.x,s[8]=hn.x,s[1]=Ai.y,s[5]=da.y,s[9]=hn.y,s[2]=Ai.z,s[6]=da.z,s[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],y=n[3],M=n[7],x=n[11],R=n[15],T=s[0],C=s[4],v=s[8],w=s[12],D=s[1],P=s[5],F=s[9],X=s[13],B=s[2],N=s[6],z=s[10],H=s[14],ie=s[3],oe=s[7],xe=s[11],Me=s[15];return r[0]=a*T+o*D+l*B+c*ie,r[4]=a*C+o*P+l*N+c*oe,r[8]=a*v+o*F+l*z+c*xe,r[12]=a*w+o*X+l*H+c*Me,r[1]=h*T+d*D+u*B+f*ie,r[5]=h*C+d*P+u*N+f*oe,r[9]=h*v+d*F+u*z+f*xe,r[13]=h*w+d*X+u*H+f*Me,r[2]=p*T+_*D+g*B+m*ie,r[6]=p*C+_*P+g*N+m*oe,r[10]=p*v+_*F+g*z+m*xe,r[14]=p*w+_*X+g*H+m*Me,r[3]=y*T+M*D+x*B+R*ie,r[7]=y*C+M*P+x*N+R*oe,r[11]=y*v+M*F+x*z+R*xe,r[15]=y*w+M*X+x*H+R*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],_=e[7],g=e[11],m=e[15],y=l*f-c*u,M=o*f-c*d,x=o*u-l*d,R=a*f-c*h,T=a*u-l*h,C=a*d-o*h;return t*(_*y-g*M+m*x)-n*(p*y-g*R+m*T)+s*(p*M-_*R+m*C)-r*(p*x-_*T+g*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],_=e[13],g=e[14],m=e[15],y=t*o-n*a,M=t*l-s*a,x=t*c-r*a,R=n*l-s*o,T=n*c-r*o,C=s*c-r*l,v=h*_-d*p,w=h*g-u*p,D=h*m-f*p,P=d*g-u*_,F=d*m-f*_,X=u*m-f*g,B=y*X-M*F+x*P+R*D-T*w+C*v;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/B;return e[0]=(o*X-l*F+c*P)*N,e[1]=(s*F-n*X-r*P)*N,e[2]=(_*C-g*T+m*R)*N,e[3]=(u*T-d*C-f*R)*N,e[4]=(l*D-a*X-c*w)*N,e[5]=(t*X-s*D+r*w)*N,e[6]=(g*x-p*C-m*M)*N,e[7]=(h*C-u*x+f*M)*N,e[8]=(a*F-o*D+c*v)*N,e[9]=(n*D-t*F-r*v)*N,e[10]=(p*T-_*x+m*y)*N,e[11]=(d*x-h*T-f*y)*N,e[12]=(o*w-a*P-l*v)*N,e[13]=(t*P-n*w+s*v)*N,e[14]=(_*M-p*R-g*y)*N,e[15]=(h*R-d*M+u*y)*N,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,p=r*d,_=a*h,g=a*d,m=o*d,y=l*c,M=l*h,x=l*d,R=n.x,T=n.y,C=n.z;return s[0]=(1-(_+m))*R,s[1]=(f+x)*R,s[2]=(p-M)*R,s[3]=0,s[4]=(f-x)*T,s[5]=(1-(u+m))*T,s[6]=(g+y)*T,s[7]=0,s[8]=(p+M)*C,s[9]=(g-y)*C,s[10]=(1-(u+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let a=us.set(s[0],s[1],s[2]).length();const o=us.set(s[4],s[5],s[6]).length(),l=us.set(s[8],s[9],s[10]).length();r<0&&(a=-a),wn.copy(this);const c=1/a,h=1/o,d=1/l;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=d,wn.elements[9]*=d,wn.elements[10]*=d,t.setFromRotationMatrix(wn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Yn,l=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let p,_;if(l)p=r/(a-r),_=a*r/(a-r);else if(o===Yn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===$r)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Yn,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s);let p,_;if(l)p=1/(a-r),_=a/(a-r);else if(o===Yn)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===$r)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const us=new E,wn=new Ee,x0=new E(0,0,0),v0=new E(1,1,1),Ai=new E,da=new E,hn=new E,Fu=new Ee,Bu=new pn;class Un{constructor(e=0,t=0,n=0,s=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bu.setFromEuler(this),this.setFromQuaternion(Bu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class Ih{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let y0=0;const ku=new E,ds=new pn,ti=new Ee,fa=new E,hr=new E,S0=new E,M0=new pn,zu=new E(1,0,0),Vu=new E(0,1,0),Hu=new E(0,0,1),Gu={type:"added"},b0={type:"removed"},fs={type:"childadded",child:null},ll={type:"childremoved",child:null};class yt extends Tn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new E,t=new Un,n=new pn,s=new E(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ee},normalMatrix:{value:new qe}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ih,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(zu,e)}rotateY(e){return this.rotateOnAxis(Vu,e)}rotateZ(e){return this.rotateOnAxis(Hu,e)}translateOnAxis(e,t){return ku.copy(e).applyQuaternion(this.quaternion),this.position.add(ku.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zu,e)}translateY(e){return this.translateOnAxis(Vu,e)}translateZ(e){return this.translateOnAxis(Hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fa.copy(e):fa.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(hr,fa,this.up):ti.lookAt(fa,hr,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),ds.setFromRotationMatrix(ti),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Be("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gu),fs.child=e,this.dispatchEvent(fs),fs.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(b0),ll.child=e,this.dispatchEvent(ll),ll.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gu),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,S0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,M0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}yt.DEFAULT_UP=new E(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class mt extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const T0={type:"move"};class cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(T0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new mt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const yp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},pa={h:0,s:0,l:0};function hl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=Lh(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=hl(a,r,e+1/3),this.g=hl(a,r,e),this.b=hl(a,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const n=yp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return nt.workingToColorSpace(Wt.copy(this),e),Math.round(Ze(Wt.r*255,0,255))*65536+Math.round(Ze(Wt.g*255,0,255))*256+Math.round(Ze(Wt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Wt.copy(this),t);const n=Wt.r,s=Wt.g,r=Wt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=It){nt.workingToColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,s=Wt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(pa);const n=zr(wi.h,pa.h,t),s=zr(wi.s,pa.s,t),r=zr(wi.l,pa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new ke;ke.NAMES=yp;class E0 extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Rn=new E,ni=new E,ul=new E,ii=new E,ps=new E,ms=new E,Wu=new E,dl=new E,fl=new E,pl=new E,ml=new xt,gl=new xt,_l=new xt;class Sn{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Rn.subVectors(e,t),s.cross(Rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Rn.subVectors(s,t),ni.subVectors(n,t),ul.subVectors(e,t);const a=Rn.dot(Rn),o=Rn.dot(ni),l=Rn.dot(ul),c=ni.dot(ni),h=ni.dot(ul),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(a,ii.y),l.addScaledVector(o,ii.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return ml.setScalar(0),gl.setScalar(0),_l.setScalar(0),ml.fromBufferAttribute(e,t),gl.fromBufferAttribute(e,n),_l.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ml,r.x),a.addScaledVector(gl,r.y),a.addScaledVector(_l,r.z),a}static isFrontFacing(e,t,n,s){return Rn.subVectors(n,t),ni.subVectors(e,t),Rn.cross(ni).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Rn.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Sn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ps.subVectors(s,n),ms.subVectors(r,n),dl.subVectors(e,n);const l=ps.dot(dl),c=ms.dot(dl);if(l<=0&&c<=0)return t.copy(n);fl.subVectors(e,s);const h=ps.dot(fl),d=ms.dot(fl);if(h>=0&&d<=h)return t.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ps,a);pl.subVectors(e,r);const f=ps.dot(pl),p=ms.dot(pl);if(p>=0&&f<=p)return t.copy(r);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(ms,o);const g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return Wu.subVectors(r,s),o=(d-h)/(d-h+(f-p)),t.copy(s).addScaledVector(Wu,o);const m=1/(g+_+u);return a=_*m,o=u*m,t.copy(n).addScaledVector(ps,a).addScaledVector(ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class mn{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(r,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ma.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ma.copy(n.boundingBox)),ma.applyMatrix4(e.matrixWorld),this.union(ma)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),ga.subVectors(this.max,ur),gs.subVectors(e.a,ur),_s.subVectors(e.b,ur),xs.subVectors(e.c,ur),Ri.subVectors(_s,gs),Ci.subVectors(xs,_s),Wi.subVectors(gs,xs);let t=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-Wi.z,Wi.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,Wi.z,0,-Wi.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-Wi.y,Wi.x,0];return!xl(t,gs,_s,xs,ga)||(t=[1,0,0,0,1,0,0,0,1],!xl(t,gs,_s,xs,ga))?!1:(_a.crossVectors(Ri,Ci),t=[_a.x,_a.y,_a.z],xl(t,gs,_s,xs,ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const si=[new E,new E,new E,new E,new E,new E,new E,new E],Cn=new E,ma=new mn,gs=new E,_s=new E,xs=new E,Ri=new E,Ci=new E,Wi=new E,ur=new E,ga=new E,_a=new E,Xi=new E;function xl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Xi.fromArray(i,r);const o=s.x*Math.abs(Xi.x)+s.y*Math.abs(Xi.y)+s.z*Math.abs(Xi.z),l=e.dot(Xi),c=t.dot(Xi),h=n.dot(Xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Pt=new E,xa=new se;let A0=0;class Tt extends Tn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:A0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zc,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zc&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Sp extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Mp extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class lt extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const w0=new mn,dr=new E,vl=new E;class An{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):w0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dr.subVectors(e,this.center);const t=dr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(dr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dr.copy(e.center).add(vl)),this.expandByPoint(dr.copy(e.center).sub(vl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let R0=0;const _n=new Ee,yl=new yt,vs=new E,un=new mn,fr=new mn,Bt=new E;class Je extends Tn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xg(e)?Mp:Sp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return yl.lookAt(e),yl.updateMatrix(),this.applyMatrix4(yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new lt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new An);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];fr.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(un.min,fr.min),un.expandByPoint(Bt),Bt.addVectors(un.max,fr.max),un.expandByPoint(Bt)):(un.expandByPoint(fr.min),un.expandByPoint(fr.max))}un.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Bt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Bt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Bt.fromBufferAttribute(o,c),l&&(vs.fromBufferAttribute(e,c),Bt.add(vs)),s=Math.max(s,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new E,l[v]=new E;const c=new E,h=new E,d=new E,u=new se,f=new se,p=new se,_=new E,g=new E;function m(v,w,D){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,D),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,D),h.sub(c),d.sub(c),f.sub(u),p.sub(u);const P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(P),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(P),o[v].add(_),o[w].add(_),o[D].add(_),l[v].add(g),l[w].add(g),l[D].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let v=0,w=y.length;v<w;++v){const D=y[v],P=D.start,F=D.count;for(let X=P,B=P+F;X<B;X+=3)m(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const M=new E,x=new E,R=new E,T=new E;function C(v){R.fromBufferAttribute(s,v),T.copy(R);const w=o[v];M.copy(w),M.sub(R.multiplyScalar(R.dot(w))).normalize(),x.crossVectors(T,w);const P=x.dot(l[v])<0?-1:1;a.setXYZW(v,M.x,M.y,M.z,P)}for(let v=0,w=y.length;v<w;++v){const D=y[v],P=D.start,F=D.count;for(let X=P,B=P+F;X<B;X+=3)C(e.getX(X+0)),C(e.getX(X+1)),C(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new E,r=new E,a=new E,o=new E,l=new E,c=new E,h=new E,d=new E;if(e)for(let u=0,f=e.count;u<f;u+=3){const p=e.getX(u+0),_=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,p=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new Tt(u,h,d)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Je,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zc,this.updateRanges=[],this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qt=new E;class Zr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){So("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){So("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let C0=0;class In extends Tn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=En(),this.name="",this.type="Material",this.blending=ks,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hc,this.blendDst=uc,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hc&&(n.blendSrc=this.blendSrc),this.blendDst!==uc&&(n.blendDst=this.blendDst),this.blendEquation!==Zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class nr extends In{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ys;const pr=new E,Ss=new E,Ms=new E,bs=new se,mr=new se,Tp=new Ee,va=new E,gr=new E,ya=new E,Xu=new se,Sl=new se,qu=new se;class ia extends yt{constructor(e=new nr){if(super(),this.isSprite=!0,this.type="Sprite",ys===void 0){ys=new Je;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new bp(t,5);ys.setIndex([0,1,2,0,2,3]),ys.setAttribute("position",new Zr(n,3,0,!1)),ys.setAttribute("uv",new Zr(n,2,3,!1))}this.geometry=ys,this.material=e,this.center=new se(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Be('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ss.setFromMatrixScale(this.matrixWorld),Tp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ms.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ss.multiplyScalar(-Ms.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Sa(va.set(-.5,-.5,0),Ms,a,Ss,s,r),Sa(gr.set(.5,-.5,0),Ms,a,Ss,s,r),Sa(ya.set(.5,.5,0),Ms,a,Ss,s,r),Xu.set(0,0),Sl.set(1,0),qu.set(1,1);let o=e.ray.intersectTriangle(va,gr,ya,!1,pr);if(o===null&&(Sa(gr.set(-.5,.5,0),Ms,a,Ss,s,r),Sl.set(0,1),o=e.ray.intersectTriangle(va,ya,gr,!1,pr),o===null))return;const l=e.ray.origin.distanceTo(pr);l<e.near||l>e.far||t.push({distance:l,point:pr.clone(),uv:Sn.getInterpolation(pr,va,gr,ya,Xu,Sl,qu,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Sa(i,e,t,n,s,r){bs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(mr.x=r*bs.x-s*bs.y,mr.y=s*bs.x+r*bs.y):mr.copy(bs),i.copy(e),i.x+=mr.x,i.y+=mr.y,i.applyMatrix4(Tp)}const ri=new E,Ml=new E,Ma=new E,Pi=new E,bl=new E,ba=new E,Tl=new E;class Si{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ml.copy(e).add(t).multiplyScalar(.5),Ma.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(Ml);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ma),o=Pi.dot(this.direction),l=-Pi.dot(Ma),c=Pi.lengthSq(),h=Math.abs(1-a*a);let d,u,f,p;if(h>0)if(d=a*l-o,u=a*o-l,p=r*h,d>=0)if(u>=-p)if(u<=p){const _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ml).addScaledVector(Ma,u),f}intersectSphere(e,t){ri.subVectors(e.center,this.origin);const n=ri.dot(this.direction),s=ri.dot(ri)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,n,s,r){bl.subVectors(t,e),ba.subVectors(n,e),Tl.crossVectors(bl,ba);let a=this.direction.dot(Tl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pi.subVectors(this.origin,e);const l=o*this.direction.dot(ba.crossVectors(Pi,ba));if(l<0)return null;const c=o*this.direction.dot(bl.cross(Pi));if(c<0||l+c>a)return null;const h=-o*Pi.dot(Tl);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=np,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yu=new Ee,qi=new Si,Ta=new An,Ku=new E,Ea=new E,Aa=new E,wa=new E,El=new E,Ra=new E,$u=new E,Ca=new E;class st extends yt{constructor(e=new Je,t=new Lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ra.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(El.fromBufferAttribute(d,e),a?Ra.addScaledVector(El,h):Ra.addScaledVector(El.sub(t),h))}t.add(Ra)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(r),qi.copy(e.ray).recast(e.near),!(Ta.containsPoint(qi.origin)===!1&&(qi.intersectSphere(Ta,Ku)===null||qi.origin.distanceToSquared(Ku)>(e.far-e.near)**2))&&(Yu.copy(r).invert(),qi.copy(e.ray).applyMatrix4(Yu),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=u.length;p<_;p++){const g=u[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),M=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,R=M;x<R;x+=3){const T=o.getX(x),C=o.getX(x+1),v=o.getX(x+2);s=Pa(this,m,e,n,c,h,d,T,C,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const y=o.getX(g),M=o.getX(g+1),x=o.getX(g+2);s=Pa(this,a,e,n,c,h,d,y,M,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=u.length;p<_;p++){const g=u[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),M=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,R=M;x<R;x+=3){const T=x,C=x+1,v=x+2;s=Pa(this,m,e,n,c,h,d,T,C,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const y=g,M=g+1,x=g+2;s=Pa(this,a,e,n,c,h,d,y,M,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function P0(i,e,t,n,s,r,a,o){let l;if(e.side===sn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===_i,o),l===null)return null;Ca.copy(o),Ca.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ca);return c<t.near||c>t.far?null:{distance:c,point:Ca.clone(),object:i}}function Pa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ea),i.getVertexPosition(l,Aa),i.getVertexPosition(c,wa);const h=P0(i,e,t,n,Ea,Aa,wa,$u);if(h){const d=new E;Sn.getBarycoord($u,Ea,Aa,wa,d),s&&(h.uv=Sn.getInterpolatedAttribute(s,o,l,c,d,new se)),r&&(h.uv1=Sn.getInterpolatedAttribute(r,o,l,c,d,new se)),a&&(h.normal=Sn.getInterpolatedAttribute(a,o,l,c,d,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new E,materialIndex:0};Sn.getNormal(Ea,Aa,wa,u.normal),h.face=u,h.barycoord=d}return h}const _r=new xt,ju=new xt,Zu=new xt,L0=new xt,Ju=new Ee,La=new E,Al=new An,Qu=new Ee,wl=new Si;class D0 extends st{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Eu,this.bindMatrix=new Ee,this.bindMatrixInverse=new Ee,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,La),this.boundingBox.expandByPoint(La)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new An),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,La),this.boundingSphere.expandByPoint(La)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Al.copy(this.boundingSphere),Al.applyMatrix4(s),e.ray.intersectsSphere(Al)!==!1&&(Qu.copy(s).invert(),wl.copy(e.ray).applyMatrix4(Qu),!(this.boundingBox!==null&&wl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,wl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new xt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Eu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ig?this.bindMatrixInverse.copy(this.bindMatrix).invert():De("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;ju.fromBufferAttribute(s.attributes.skinIndex,e),Zu.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(_r.copy(t),t.set(0,0,0,0)):(_r.set(...t,1),t.set(0,0,0)),_r.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=Zu.getComponent(r);if(a!==0){const o=ju.getComponent(r);Ju.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(L0.copy(_r).applyMatrix4(Ju),a)}}return t.isVector4&&(t.w=_r.w),t.applyMatrix4(this.bindMatrixInverse)}}class Ep extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Nh extends Ut{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Nt,h=Nt,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ed=new Ee,I0=new Ee;class Uh{constructor(e=[],t=[]){this.uuid=En(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){De("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ee)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ee;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:I0;ed.multiplyMatrices(o,t[r]),ed.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Uh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Nh(t,e,e,bn,Mn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(De("Skeleton: No bone found with UUID:",r),a=new Ep),this.bones.push(a),this.boneInverses.push(new Ee().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class Qc extends Tt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ts=new Ee,td=new Ee,Da=[],nd=new mn,N0=new Ee,xr=new st,vr=new An;class Oh extends st{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qc(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,N0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),nd.copy(e.boundingBox).applyMatrix4(Ts),this.boundingBox.union(nd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new An),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),vr.copy(e.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(vr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(xr.geometry=this.geometry,xr.material=this.material,xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vr.copy(this.boundingSphere),vr.applyMatrix4(n),e.ray.intersectsSphere(vr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ts),td.multiplyMatrices(n,Ts),xr.matrixWorld=td,xr.raycast(e,Da);for(let a=0,o=Da.length;a<o;a++){const l=Da[a];l.instanceId=r,l.object=this,t.push(l)}Da.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Qc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nh(new Float32Array(s*this.count),s,this.count,Eh,Mn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Rl=new E,U0=new E,O0=new qe;class hi{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Rl.subVectors(n,t).cross(U0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Rl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||O0.getNormalMatrix(e),s=this.coplanarPoint(Rl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yi=new An,F0=new se(.5,.5),Ia=new E;class ko{constructor(e=new hi,t=new hi,n=new hi,s=new hi,r=new hi,a=new hi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],_=r[9],g=r[10],m=r[11],y=r[12],M=r[13],x=r[14],R=r[15];if(s[0].setComponents(c-a,f-h,m-p,R-y).normalize(),s[1].setComponents(c+a,f+h,m+p,R+y).normalize(),s[2].setComponents(c+o,f+d,m+_,R+M).normalize(),s[3].setComponents(c-o,f-d,m-_,R-M).normalize(),n)s[4].setComponents(l,u,g,x).normalize(),s[5].setComponents(c-l,f-u,m-g,R-x).normalize();else if(s[4].setComponents(c-l,f-u,m-g,R-x).normalize(),t===Yn)s[5].setComponents(c+l,f+u,m+g,R+x).normalize();else if(t===$r)s[5].setComponents(l,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){Yi.center.set(0,0,0);const t=F0.distanceTo(e.center);return Yi.radius=.7071067811865476+t,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ia.x=s.normal.x>0?e.max.x:e.min.x,Ia.y=s.normal.y>0?e.max.y:e.min.y,Ia.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mi extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Mo=new E,bo=new E,id=new Ee,yr=new Si,Na=new An,Cl=new E,sd=new E;class Rt extends yt{constructor(e=new Je,t=new Mi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Mo.fromBufferAttribute(t,s-1),bo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Mo.distanceTo(bo);e.setAttribute("lineDistance",new lt(n,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(s),Na.radius+=r,e.ray.intersectsSphere(Na)===!1)return;id.copy(s).invert(),yr.copy(e.ray).applyMatrix4(id);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=f,g=p-1;_<g;_+=c){const m=h.getX(_),y=h.getX(_+1),M=Ua(this,e,yr,l,m,y,_);M&&t.push(M)}if(this.isLineLoop){const _=h.getX(p-1),g=h.getX(f),m=Ua(this,e,yr,l,_,g,p-1);m&&t.push(m)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=f,g=p-1;_<g;_+=c){const m=Ua(this,e,yr,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=Ua(this,e,yr,l,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ua(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Mo.fromBufferAttribute(o,s),bo.fromBufferAttribute(o,r),t.distanceSqToSegment(Mo,bo,Cl,sd)>n)return;Cl.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Cl);if(!(c<e.near||c>e.far))return{distance:c,point:sd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const rd=new E,ad=new E;class Ap extends Rt{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)rd.fromBufferAttribute(t,s),ad.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+rd.distanceTo(ad);e.setAttribute("lineDistance",new lt(n,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class B0 extends Rt{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Fh extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const od=new Ee,eh=new Si,Oa=new An,Fa=new E;class wp extends yt{constructor(e=new Je,t=new Fh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(s),Oa.radius+=r,e.ray.intersectsSphere(Oa)===!1)return;od.copy(s).invert(),eh.copy(e.ray).applyMatrix4(od);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=u,_=f;p<_;p++){const g=c.getX(p);Fa.fromBufferAttribute(d,g),ld(Fa,g,l,s,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=u,_=f;p<_;p++)Fa.fromBufferAttribute(d,p),ld(Fa,p,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ld(i,e,t,n,s,r,a){const o=eh.distanceSqToPoint(i);if(o<t){const l=new E;eh.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Rp extends Ut{constructor(e=[],t=is,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ir extends Ut{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qs extends Ut{constructor(e,t,n=jn,s,r,a,o=Nt,l=Nt,c,h=vi,d=1){if(h!==vi&&h!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class k0 extends qs{constructor(e,t=jn,n=is,s,r,a=Nt,o=Nt,l,c=vi){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Cp extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yi extends Je{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(d,2));function p(_,g,m,y,M,x,R,T,C,v,w){const D=x/C,P=R/v,F=x/2,X=R/2,B=T/2,N=C+1,z=v+1;let H=0,ie=0;const oe=new E;for(let xe=0;xe<z;xe++){const Me=xe*P-X;for(let Ce=0;Ce<N;Ce++){const Ye=Ce*D-F;oe[_]=Ye*y,oe[g]=Me*M,oe[m]=B,c.push(oe.x,oe.y,oe.z),oe[_]=0,oe[g]=0,oe[m]=T>0?1:-1,h.push(oe.x,oe.y,oe.z),d.push(Ce/C),d.push(1-xe/v),H+=1}}for(let xe=0;xe<v;xe++)for(let Me=0;Me<C;Me++){const Ce=u+Me+N*xe,Ye=u+Me+N*(xe+1),it=u+(Me+1)+N*(xe+1),Ge=u+(Me+1)+N*xe;l.push(Ce,Ye,Ge),l.push(Ye,it,Ge),ie+=6}o.addGroup(f,ie,w),f+=ie,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class zo extends Je{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new E,h=new se;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(o,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Bh extends Je{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let p=0;const _=[],g=n/2;let m=0;y(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new lt(d,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(f,2));function y(){const x=new E,R=new E;let T=0;const C=(t-e)/n;for(let v=0;v<=r;v++){const w=[],D=v/r,P=D*(t-e)+e;for(let F=0;F<=s;F++){const X=F/s,B=X*l+o,N=Math.sin(B),z=Math.cos(B);R.x=P*N,R.y=-D*n+g,R.z=P*z,d.push(R.x,R.y,R.z),x.set(N,C,z).normalize(),u.push(x.x,x.y,x.z),f.push(X,1-D),w.push(p++)}_.push(w)}for(let v=0;v<s;v++)for(let w=0;w<r;w++){const D=_[w][v],P=_[w+1][v],F=_[w+1][v+1],X=_[w][v+1];(e>0||w!==0)&&(h.push(D,P,X),T+=3),(t>0||w!==r-1)&&(h.push(P,F,X),T+=3)}c.addGroup(m,T,0),m+=T}function M(x){const R=p,T=new se,C=new E;let v=0;const w=x===!0?e:t,D=x===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,g*D,0),u.push(0,D,0),f.push(.5,.5),p++;const P=p;for(let F=0;F<=s;F++){const B=F/s*l+o,N=Math.cos(B),z=Math.sin(B);C.x=w*z,C.y=g*D,C.z=w*N,d.push(C.x,C.y,C.z),u.push(0,D,0),T.x=N*.5+.5,T.y=z*.5*D+.5,f.push(T.x,T.y),p++}for(let F=0;F<s;F++){const X=R+F,B=P+F;x===!0?h.push(B,B+1,X):h.push(B+1,B,X),v+=3}c.addGroup(m,v,x===!0?1:2),m+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vo extends Bh{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Vo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){De("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new se:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new E,s=[],r=[],a=[],o=new E,l=new Ee;for(let f=0;f<=e;f++){const p=f/e;s[f]=this.getTangentAt(p,new E)}r[0]=new E,a[0]=new E;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(Ze(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ze(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class kh extends Jn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new se){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class z0 extends kh{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function zh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const cd=new E,hd=new E,Pl=new zh,Ll=new zh,Dl=new zh;class Pp extends Jn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new E){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(hd.subVectors(s[0],s[1]).add(s[0]),c=hd);const d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(cd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=cd),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Pl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,_,g),Ll.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,_,g),Dl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(Pl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Ll.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Dl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Pl.calc(l),Ll.calc(l),Dl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new E().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ud(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function V0(i,e){const t=1-i;return t*t*e}function H0(i,e){return 2*(1-i)*i*e}function G0(i,e){return i*i*e}function Vr(i,e,t,n){return V0(i,e)+H0(i,t)+G0(i,n)}function W0(i,e){const t=1-i;return t*t*t*e}function X0(i,e){const t=1-i;return 3*t*t*i*e}function q0(i,e){return 3*(1-i)*i*i*e}function Y0(i,e){return i*i*i*e}function Hr(i,e,t,n,s){return W0(i,e)+X0(i,t)+q0(i,n)+Y0(i,s)}class Lp extends Jn{constructor(e=new se,t=new se,n=new se,s=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new se){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hr(e,s.x,r.x,a.x,o.x),Hr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class K0 extends Jn{constructor(e=new E,t=new E,n=new E,s=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new E){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hr(e,s.x,r.x,a.x,o.x),Hr(e,s.y,r.y,a.y,o.y),Hr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Dp extends Jn{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $0 extends Jn{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ip extends Jn{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Vr(e,s.x,r.x,a.x),Vr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class j0 extends Jn{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Vr(e,s.x,r.x,a.x),Vr(e,s.y,r.y,a.y),Vr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Np extends Jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(ud(o,l.x,c.x,h.x,d.x),ud(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new se().fromArray(s))}return this}}var th=Object.freeze({__proto__:null,ArcCurve:z0,CatmullRomCurve3:Pp,CubicBezierCurve:Lp,CubicBezierCurve3:K0,EllipseCurve:kh,LineCurve:Dp,LineCurve3:$0,QuadraticBezierCurve:Ip,QuadraticBezierCurve3:j0,SplineCurve:Np});class Z0 extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new th[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new th[s.type]().fromJSON(s))}return this}}class dd extends Z0{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Dp(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Ip(this.currentPoint.clone(),new se(e,t),new se(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new Lp(this.currentPoint.clone(),new se(e,t),new se(n,s),new se(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Np(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){const c=new kh(e,t,n,s,r,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ho extends dd{constructor(e){super(e),this.uuid=En(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new dd().fromJSON(s))}return this}}function J0(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Up(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=i_(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,d=l;for(let u=t;u<s;u+=t){const f=i[u],p=i[u+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Jr(r,a,t,o,l,c,0),a}function Up(i,e,t,n,s){let r;if(s===p_(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=fd(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=fd(a/n|0,i[a],i[a+1],r);return r&&Ys(r,r.next)&&(ea(r),r=r.next),r}function rs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ys(t,t.next)||Mt(t.prev,t,t.next)===0)){if(ea(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Jr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&l_(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?e_(i,n,s,r):Q0(i)){e.push(l.i,i.i,c.i),ea(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=t_(rs(i),e),Jr(i,e,t,n,s,r,2)):a===2&&n_(i,e,t,n,s,r):Jr(rs(i),e,t,n,s,r,1);break}}}function Q0(i){const e=i.prev,t=i,n=i.next;if(Mt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c);let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&Ur(s,o,r,l,a,c,p.x,p.y)&&Mt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function e_(i,e,t,n){const s=i.prev,r=i,a=i.next;if(Mt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),p=Math.min(h,d,u),_=Math.max(o,l,c),g=Math.max(h,d,u),m=nh(f,p,e,t,n),y=nh(_,g,e,t,n);let M=i.prevZ,x=i.nextZ;for(;M&&M.z>=m&&x&&x.z<=y;){if(M.x>=f&&M.x<=_&&M.y>=p&&M.y<=g&&M!==s&&M!==a&&Ur(o,h,l,d,c,u,M.x,M.y)&&Mt(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==a&&Ur(o,h,l,d,c,u,x.x,x.y)&&Mt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=m;){if(M.x>=f&&M.x<=_&&M.y>=p&&M.y<=g&&M!==s&&M!==a&&Ur(o,h,l,d,c,u,M.x,M.y)&&Mt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==a&&Ur(o,h,l,d,c,u,x.x,x.y)&&Mt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function t_(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Ys(n,s)&&Fp(n,t,t.next,s)&&Qr(n,s)&&Qr(s,n)&&(e.push(n.i,t.i,s.i),ea(t),ea(t.next),t=i=s),t=t.next}while(t!==i);return rs(t)}function n_(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&u_(a,o)){let l=Bp(a,o);a=rs(a,a.next),l=rs(l,l.next),Jr(a,e,t,n,s,r,0),Jr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function i_(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Up(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(h_(c))}s.sort(s_);for(let r=0;r<s.length;r++)t=r_(s[r],t);return t}function s_(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function r_(i,e){const t=a_(i,e);if(!t)return e;const n=Bp(t,i);return rs(n,n.next),rs(t,t.next)}function a_(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(Ys(i,t))return t;do{if(Ys(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Op(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const d=Math.abs(s-t.y)/(n-t.x);Qr(t,i)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&o_(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function o_(i,e){return Mt(i.prev,i,e.prev)<0&&Mt(e.next,i,i.next)<0}function l_(i,e,t,n){let s=i;do s.z===0&&(s.z=nh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,c_(s)}function c_(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function nh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function h_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Op(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ur(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Op(i,e,t,n,s,r,a,o)}function u_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!d_(i,e)&&(Qr(i,e)&&Qr(e,i)&&f_(i,e)&&(Mt(i.prev,i,e.prev)||Mt(i,e.prev,e))||Ys(i,e)&&Mt(i.prev,i,i.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ys(i,e){return i.x===e.x&&i.y===e.y}function Fp(i,e,t,n){const s=ka(Mt(i,e,t)),r=ka(Mt(i,e,n)),a=ka(Mt(t,n,i)),o=ka(Mt(t,n,e));return!!(s!==r&&a!==o||s===0&&Ba(i,t,e)||r===0&&Ba(i,n,e)||a===0&&Ba(t,i,n)||o===0&&Ba(t,e,n))}function Ba(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ka(i){return i>0?1:i<0?-1:0}function d_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Fp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Qr(i,e){return Mt(i.prev,i,i.next)<0?Mt(i,e,i.next)>=0&&Mt(i,i.prev,e)>=0:Mt(i,e,i.prev)<0||Mt(i,i.next,e)<0}function f_(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Bp(i,e){const t=ih(i.i,i.x,i.y),n=ih(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function fd(i,e,t,n){const s=ih(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ea(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ih(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function p_(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class m_{static triangulate(e,t,n=2){return J0(e,t,n)}}class fi{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return fi.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];pd(e),md(n,e);let a=e.length;t.forEach(pd);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,md(n,t[l]);const o=m_.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function pd(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function md(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Vh extends Je{constructor(e=new Ho([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new lt(s,3)),this.setAttribute("uv",new lt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:g_;let M,x=!1,R,T,C,v;if(m){M=m.getSpacedPoints(h),x=!0,u=!1;const j=m.isCatmullRomCurve3?m.closed:!1;R=m.computeFrenetFrames(h,j),T=new E,C=new E,v=new E}u||(g=0,f=0,p=0,_=0);const w=o.extractPoints(c);let D=w.shape;const P=w.holes;if(!fi.isClockWise(D)){D=D.reverse();for(let j=0,ne=P.length;j<ne;j++){const Q=P[j];fi.isClockWise(Q)&&(P[j]=Q.reverse())}}function X(j){const Q=10000000000000001e-36;let me=j[0];for(let ue=1;ue<=j.length;ue++){const Le=ue%j.length,L=j[Le],Ve=L.x-me.x,Pe=L.y-me.y,He=Ve*Ve+Pe*Pe,le=Math.max(Math.abs(L.x),Math.abs(L.y),Math.abs(me.x),Math.abs(me.y)),at=Q*le*le;if(He<=at){j.splice(Le,1),ue--;continue}me=L}}X(D),P.forEach(X);const B=P.length,N=D;for(let j=0;j<B;j++){const ne=P[j];D=D.concat(ne)}function z(j,ne,Q){return ne||Be("ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(ne,Q)}const H=D.length;function ie(j,ne,Q){let me,ue,Le;const L=j.x-ne.x,Ve=j.y-ne.y,Pe=Q.x-j.x,He=Q.y-j.y,le=L*L+Ve*Ve,at=L*He-Ve*Pe;if(Math.abs(at)>Number.EPSILON){const A=Math.sqrt(le),S=Math.sqrt(Pe*Pe+He*He),V=ne.x-Ve/A,J=ne.y+L/A,re=Q.x-He/S,he=Q.y+Pe/S,pe=((re-V)*He-(he-J)*Pe)/(L*He-Ve*Pe);me=V+L*pe-j.x,ue=J+Ve*pe-j.y;const $=me*me+ue*ue;if($<=2)return new se(me,ue);Le=Math.sqrt($/2)}else{let A=!1;L>Number.EPSILON?Pe>Number.EPSILON&&(A=!0):L<-Number.EPSILON?Pe<-Number.EPSILON&&(A=!0):Math.sign(Ve)===Math.sign(He)&&(A=!0),A?(me=-Ve,ue=L,Le=Math.sqrt(le)):(me=L,ue=Ve,Le=Math.sqrt(le/2))}return new se(me/Le,ue/Le)}const oe=[];for(let j=0,ne=N.length,Q=ne-1,me=j+1;j<ne;j++,Q++,me++)Q===ne&&(Q=0),me===ne&&(me=0),oe[j]=ie(N[j],N[Q],N[me]);const xe=[];let Me,Ce=oe.concat();for(let j=0,ne=B;j<ne;j++){const Q=P[j];Me=[];for(let me=0,ue=Q.length,Le=ue-1,L=me+1;me<ue;me++,Le++,L++)Le===ue&&(Le=0),L===ue&&(L=0),Me[me]=ie(Q[me],Q[Le],Q[L]);xe.push(Me),Ce=Ce.concat(Me)}let Ye;if(g===0)Ye=fi.triangulateShape(N,P);else{const j=[],ne=[];for(let Q=0;Q<g;Q++){const me=Q/g,ue=f*Math.cos(me*Math.PI/2),Le=p*Math.sin(me*Math.PI/2)+_;for(let L=0,Ve=N.length;L<Ve;L++){const Pe=z(N[L],oe[L],Le);K(Pe.x,Pe.y,-ue),me===0&&j.push(Pe)}for(let L=0,Ve=B;L<Ve;L++){const Pe=P[L];Me=xe[L];const He=[];for(let le=0,at=Pe.length;le<at;le++){const A=z(Pe[le],Me[le],Le);K(A.x,A.y,-ue),me===0&&He.push(A)}me===0&&ne.push(He)}}Ye=fi.triangulateShape(j,ne)}const it=Ye.length,Ge=p+_;for(let j=0;j<H;j++){const ne=u?z(D[j],Ce[j],Ge):D[j];x?(C.copy(R.normals[0]).multiplyScalar(ne.x),T.copy(R.binormals[0]).multiplyScalar(ne.y),v.copy(M[0]).add(C).add(T),K(v.x,v.y,v.z)):K(ne.x,ne.y,0)}for(let j=1;j<=h;j++)for(let ne=0;ne<H;ne++){const Q=u?z(D[ne],Ce[ne],Ge):D[ne];x?(C.copy(R.normals[j]).multiplyScalar(Q.x),T.copy(R.binormals[j]).multiplyScalar(Q.y),v.copy(M[j]).add(C).add(T),K(v.x,v.y,v.z)):K(Q.x,Q.y,d/h*j)}for(let j=g-1;j>=0;j--){const ne=j/g,Q=f*Math.cos(ne*Math.PI/2),me=p*Math.sin(ne*Math.PI/2)+_;for(let ue=0,Le=N.length;ue<Le;ue++){const L=z(N[ue],oe[ue],me);K(L.x,L.y,d+Q)}for(let ue=0,Le=P.length;ue<Le;ue++){const L=P[ue];Me=xe[ue];for(let Ve=0,Pe=L.length;Ve<Pe;Ve++){const He=z(L[Ve],Me[Ve],me);x?K(He.x,He.y+M[h-1].y,M[h-1].x+Q):K(He.x,He.y,d+Q)}}}ee(),O();function ee(){const j=s.length/3;if(u){let ne=0,Q=H*ne;for(let me=0;me<it;me++){const ue=Ye[me];Y(ue[2]+Q,ue[1]+Q,ue[0]+Q)}ne=h+g*2,Q=H*ne;for(let me=0;me<it;me++){const ue=Ye[me];Y(ue[0]+Q,ue[1]+Q,ue[2]+Q)}}else{for(let ne=0;ne<it;ne++){const Q=Ye[ne];Y(Q[2],Q[1],Q[0])}for(let ne=0;ne<it;ne++){const Q=Ye[ne];Y(Q[0]+H*h,Q[1]+H*h,Q[2]+H*h)}}n.addGroup(j,s.length/3-j,0)}function O(){const j=s.length/3;let ne=0;U(N,ne),ne+=N.length;for(let Q=0,me=P.length;Q<me;Q++){const ue=P[Q];U(ue,ne),ne+=ue.length}n.addGroup(j,s.length/3-j,1)}function U(j,ne){let Q=j.length;for(;--Q>=0;){const me=Q;let ue=Q-1;ue<0&&(ue=j.length-1);for(let Le=0,L=h+g*2;Le<L;Le++){const Ve=H*Le,Pe=H*(Le+1),He=ne+me+Ve,le=ne+ue+Ve,at=ne+ue+Pe,A=ne+me+Pe;ce(He,le,at,A)}}}function K(j,ne,Q){l.push(j),l.push(ne),l.push(Q)}function Y(j,ne,Q){ze(j),ze(ne),ze(Q);const me=s.length/3,ue=y.generateTopUV(n,s,me-3,me-2,me-1);Ie(ue[0]),Ie(ue[1]),Ie(ue[2])}function ce(j,ne,Q,me){ze(j),ze(ne),ze(me),ze(ne),ze(Q),ze(me);const ue=s.length/3,Le=y.generateSideWallUV(n,s,ue-6,ue-3,ue-2,ue-1);Ie(Le[0]),Ie(Le[1]),Ie(Le[3]),Ie(Le[1]),Ie(Le[2]),Ie(Le[3])}function ze(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function Ie(j){r.push(j.x),r.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return __(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new th[s.type]().fromJSON(s)),new Vh(n,e.options)}}const g_={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new se(r,a),new se(o,l),new se(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],p=e[s*3+2],_=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new se(a,1-l),new se(c,1-d),new se(u,1-p),new se(_,1-m)]:[new se(o,1-l),new se(h,1-d),new se(f,1-p),new se(g,1-m)]}};function __(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Hi extends Je{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,f=[],p=[],_=[],g=[];for(let m=0;m<h;m++){const y=m*u-a;for(let M=0;M<c;M++){const x=M*d-r;p.push(x,-y,0),_.push(0,0,1),g.push(M/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const M=y+c*m,x=y+c*(m+1),R=y+1+c*(m+1),T=y+1+c*m;f.push(M,x,T),f.push(x,R,T)}this.setIndex(f),this.setAttribute("position",new lt(p,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.width,e.height,e.widthSegments,e.heightSegments)}}class sa extends Je{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let d=e;const u=(t-e)/s,f=new E,p=new se;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){const m=r+g/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}d+=u}for(let _=0;_<s;_++){const g=_*(n+1);for(let m=0;m<n;m++){const y=m+g,M=y,x=y+n+1,R=y+n+2,T=y+1;o.push(M,x,T),o.push(x,R,T)}}this.setIndex(o),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Hh extends Je{constructor(e=new Ho([new se(0,.5),new se(-.5,-.5),new se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new lt(s,3)),this.setAttribute("normal",new lt(r,3)),this.setAttribute("uv",new lt(a,2));function c(h){const d=s.length/3,u=h.extractPoints(t);let f=u.shape;const p=u.holes;fi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const y=p[g];fi.isClockWise(y)===!0&&(p[g]=y.reverse())}const _=fi.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const y=p[g];f=f.concat(y)}for(let g=0,m=f.length;g<m;g++){const y=f[g];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let g=0,m=_.length;g<m;g++){const y=_[g],M=y[0]+d,x=y[1]+d,R=y[2]+d;n.push(M,x,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return x_(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];n.push(a)}return new Hh(n,e.curveSegments)}}function x_(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class sr extends Je{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new E,u=new E,f=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const y=[],M=m/n;let x=0;m===0&&a===0?x=.5/t:m===n&&l===Math.PI&&(x=-.5/t);for(let R=0;R<=t;R++){const T=R/t;d.x=-e*Math.cos(s+T*r)*Math.sin(a+M*o),d.y=e*Math.cos(a+M*o),d.z=e*Math.sin(s+T*r)*Math.sin(a+M*o),p.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),g.push(T+x,1-M),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){const M=h[m][y+1],x=h[m][y],R=h[m+1][y],T=h[m+1][y+1];(m!==0||a>0)&&f.push(M,x,T),(m!==n-1||l<Math.PI)&&f.push(x,R,T)}this.setIndex(f),this.setAttribute("position",new lt(p,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ks(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(gd(s))s.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(gd(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function $t(i){const e={};for(let t=0;t<i.length;t++){const n=Ks(i[t]);for(const s in n)e[s]=n[s]}return e}function gd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function v_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function kp(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const y_={clone:Ks,merge:$t};var S_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,M_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=S_,this.fragmentShader=M_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=v_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class b_ extends Zn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class On extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jc,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qn extends On{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class T_ extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Og,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class E_ extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class A_ extends Mi{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function za(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function w_(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function _d(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function zp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class rr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class R_ extends rr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wu,endingEnd:wu}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ru:r=e,o=2*t-n;break;case Cu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ru:a=e,l=2*n-t;break;case Cu:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),_=p*p,g=_*p,m=-u*g+2*u*_-u*p,y=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*p+1,M=(-1-f)*g+(1.5+f)*_+.5*p,x=f*g-f*_;for(let R=0;R!==o;++R)r[R]=m*a[h+R]+y*a[c+R]+M*a[l+R]+x*a[d+R];return r}}class C_ extends rr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}}class P_ extends rr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class L_ extends rr{interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.settings||this.DefaultSettings_,d=h.inTangents,u=h.outTangents;if(!d||!u){const _=(n-t)/(s-t),g=1-_;for(let m=0;m!==o;++m)r[m]=a[c+m]*g+a[l+m]*_;return r}const f=o*2,p=e-1;for(let _=0;_!==o;++_){const g=a[c+_],m=a[l+_],y=p*f+_*2,M=u[y],x=u[y+1],R=e*f+_*2,T=d[R],C=d[R+1];let v=(n-t)/(s-t),w,D,P,F,X;for(let B=0;B<8;B++){w=v*v,D=w*v,P=1-v,F=P*P,X=F*P;const z=X*t+3*F*v*M+3*P*w*T+D*s-n;if(Math.abs(z)<1e-10)break;const H=3*F*(M-t)+6*P*v*(T-M)+3*w*(s-T);if(Math.abs(H)<1e-10)break;v=v-z/H,v=Math.max(0,Math.min(1,v))}r[_]=X*g+3*F*v*x+3*P*w*C+D*m}return r}}class Fn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=za(t,this.TimeBufferType),this.values=za(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:za(e.times,Array),values:za(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new P_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new C_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new R_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new L_(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Yr:t=this.InterpolantFactoryMethodDiscrete;break;case Kr:t=this.InterpolantFactoryMethodLinear;break;case il:t=this.InterpolantFactoryMethodSmooth;break;case Au:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return De("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yr;case this.InterpolantFactoryMethodLinear:return Kr;case this.InterpolantFactoryMethodSmooth:return il;case this.InterpolantFactoryMethodBezier:return Au}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Be("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(Be("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Be("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Be("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&qg(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){Be("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===il,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{const d=o*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){const _=t[d+p];if(_!==t[u+p]||_!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=Kr;class ar extends Fn{constructor(e,t,n){super(e,t,n)}}ar.prototype.ValueTypeName="bool";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=Yr;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;class Vp extends Fn{constructor(e,t,n,s){super(e,t,n,s)}}Vp.prototype.ValueTypeName="color";class $s extends Fn{constructor(e,t,n,s){super(e,t,n,s)}}$s.prototype.ValueTypeName="number";class D_ extends rr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t);let c=e*o;for(let h=c+o;c!==h;c+=4)pn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class js extends Fn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new D_(this.times,this.values,this.getValueSize(),e)}}js.prototype.ValueTypeName="quaternion";js.prototype.InterpolantFactoryMethodSmooth=void 0;class or extends Fn{constructor(e,t,n){super(e,t,n)}}or.prototype.ValueTypeName="string";or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=Yr;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;class Zs extends Fn{constructor(e,t,n,s){super(e,t,n,s)}}Zs.prototype.ValueTypeName="vector";class I_{constructor(e="",t=-1,n=[],s=Ng){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=En(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(U_(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Fn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=w_(l);l=_d(l,1,h),c=_d(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new $s(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let u=s[d];u||(s[d]=u=[]),u.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(De("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Be("AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,p,_){if(f.length!==0){const g=[],m=[];zp(f,g,m,p),g.length!==0&&_.push(new d(u,g,m))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let _=0;_<u[p].morphTargets.length;_++)f[u[p].morphTargets[_]]=-1;for(const _ in f){const g=[],m=[];for(let y=0;y!==u[p].morphTargets.length;++y){const M=u[p];g.push(M.time),m.push(M.morphTarget===_?1:0)}s.push(new $s(".morphTargetInfluence["+_+"]",g,m))}l=f.length*a}else{const f=".bones["+t[d].name+"]";n(Zs,f+".position",u,"pos",s),n(js,f+".quaternion",u,"rot",s),n(Zs,f+".scale",u,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function N_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $s;case"vector":case"vector2":case"vector3":case"vector4":return Zs;case"color":return Vp;case"quaternion":return js;case"bool":case"boolean":return ar;case"string":return or}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function U_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=N_(i.type);if(i.times===void 0){const t=[],n=[];zp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const pi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(xd(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!xd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function xd(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Hp{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ra=new Hp;class lr{constructor(e){this.manager=e!==void 0?e:ra,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}lr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ai={};class O_ extends Error{constructor(e,t){super(e),this.response=t}}class Gp extends lr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=pi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ai[e]!==void 0){ai[e].push({onLoad:t,onProgress:n,onError:s});return}ai[e]=[],ai[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&De("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ai[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0;let _=0;const g=new ReadableStream({start(m){y();function y(){d.read().then(({done:M,value:x})=>{if(M)m.close();else{_+=x.byteLength;const R=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let T=0,C=h.length;T<C;T++){const v=h[T];v.onProgress&&v.onProgress(R)}m.enqueue(x),y()}},M=>{m.error(M)})}}});return new Response(g)}else throw new O_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{pi.add(`file:${e}`,c);const h=ai[e];delete ai[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=ai[e];if(h===void 0)throw this.manager.itemError(e),c;delete ai[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Es=new WeakMap;class F_ extends lr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=pi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Es.get(a);d===void 0&&(d=[],Es.set(a,d)),d.push({onLoad:t,onError:s})}return a}const o=jr("img");function l(){h(),t&&t(this);const d=Es.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}Es.delete(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),pi.remove(`image:${e}`);const u=Es.get(this)||[];for(let f=0;f<u.length;f++){const p=u[f];p.onError&&p.onError(d)}Es.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),pi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Wp extends lr{constructor(e){super(e)}load(e,t,n,s){const r=new Ut,a=new F_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Go extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class B_ extends Go{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Il=new Ee,vd=new E,yd=new E;class Gh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ko,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;vd.setFromMatrixPosition(e.matrixWorld),t.position.copy(vd),yd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yd),t.updateMatrixWorld(),Il.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Il,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===$r||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Il)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Va=new E,Ha=new pn,zn=new E;class Xp extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Va,Ha,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Ha,zn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Va,Ha,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Ha,zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Li=new E,Sd=new se,Md=new se;class jt extends Xp{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,Sd,Md),t.subVectors(Md,Sd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(kr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class k_ extends Gh{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Xs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class z_ extends Go{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new k_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class V_ extends Gh{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0}}class H_ extends Go{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new V_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Wo extends Xp{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class G_ extends Gh{constructor(){super(new Wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qp extends Go{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new G_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Gr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Nl=new WeakMap;class W_ extends lr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&De("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&De("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=pi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Nl.has(a)===!0?(s&&s(Nl.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){pi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){s&&s(c),Nl.set(l,c),pi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});pi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const As=-90,ws=1;class X_ extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new jt(As,ws,e,t);s.layers=this.layers,this.add(s);const r=new jt(As,ws,e,t);r.layers=this.layers,this.add(r);const a=new jt(As,ws,e,t);a.layers=this.layers,this.add(a);const o=new jt(As,ws,e,t);o.layers=this.layers,this.add(o);const l=new jt(As,ws,e,t);l.layers=this.layers,this.add(l);const c=new jt(As,ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$r)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class q_ extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Wh="\\[\\]\\.:\\/",Y_=new RegExp("["+Wh+"]","g"),Xh="[^"+Wh+"]",K_="[^"+Wh.replace("\\.","")+"]",$_=/((?:WC+[\/:])*)/.source.replace("WC",Xh),j_=/(WCOD+)?/.source.replace("WCOD",K_),Z_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xh),J_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xh),Q_=new RegExp("^"+$_+j_+Z_+J_+"$"),ex=["material","materials","bones","map"];class tx{constructor(e,t,n){const s=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ut{constructor(e,t,n){this.path=t,this.parsedPath=n||ut.parseTrackName(t),this.node=ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ut.Composite(e,t,n):new ut(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Y_,"")}static parseTrackName(e){const t=Q_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);ex.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){De("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;Be("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ut.Composite=tx;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const bd=new Ee;class nx{constructor(e,t,n=0,s=1/0){this.ray=new Si(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ih,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Be("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return bd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bd),this}intersectObject(e,t=!0,n=[]){return sh(e,this,n,t),n.sort(Td),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)sh(e[s],this,n,t);return n.sort(Td),n}}function Td(i,e){return i.distance-e.distance}function sh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)sh(r[a],e,t,!0)}}class ix{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,De("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class rh{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Yp{static{Yp.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}}class sx extends Tn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){De("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function rx(i,e){const t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2):(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0),i}function ax(i,e){const t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0):(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2),i}function ox(i){return i.repeat.x=1,i.repeat.y=1,i.offset.x=0,i.offset.y=0,i}function ah(i,e,t,n){const s=lx(n);switch(t){case mp:return i*e;case Eh:return i*e/s.components*s.byteLength;case Ah:return i*e/s.components*s.byteLength;case ss:return i*e*2/s.components*s.byteLength;case wh:return i*e*2/s.components*s.byteLength;case gp:return i*e*3/s.components*s.byteLength;case bn:return i*e*4/s.components*s.byteLength;case Rh:return i*e*4/s.components*s.byteLength;case co:case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case uo:case fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yc:case Mc:return Math.max(i,16)*Math.max(e,8)/4;case vc:case Sc:return Math.max(i,8)*Math.max(e,8)/2;case bc:case Tc:case Ac:case wc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ec:case xo:case Rc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case kc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case zc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Vc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Hc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Gc:case Wc:case Xc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case qc:case Yc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case vo:case Kc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lx(i){switch(i){case dn:case up:return{byteLength:1,components:1};case Xr:case dp:case xi:return{byteLength:2,components:1};case bh:case Th:return{byteLength:2,components:4};case jn:case Mh:case Mn:return{byteLength:4,components:1};case fp:case pp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}class cx{static contain(e,t){return rx(e,t)}static cover(e,t){return ax(e,t)}static fill(e){return ox(e)}static getByteLength(e,t,n,s){return ah(e,t,n,s)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yh}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Kp(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function hx(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){const p=d[u],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){const _=d[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ux=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,px=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_x=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,yx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Tx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ex=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Px=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Dx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ix=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Nx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ux=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ox=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Wx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$x=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ev=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,iv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,av=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ov=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fv=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,pv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_v=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ev=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Av=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Rv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Uv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ov=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Vv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Kv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$v=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ey=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ty=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ny=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ry=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ay=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,py=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,my=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_y=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,My=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,by=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ty=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ey=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ay=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ry=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Py=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ly=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Dy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Iy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ny=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Oy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,By=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ky=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:ux,alphahash_pars_fragment:dx,alphamap_fragment:fx,alphamap_pars_fragment:px,alphatest_fragment:mx,alphatest_pars_fragment:gx,aomap_fragment:_x,aomap_pars_fragment:xx,batching_pars_vertex:vx,batching_vertex:yx,begin_vertex:Sx,beginnormal_vertex:Mx,bsdfs:bx,iridescence_fragment:Tx,bumpmap_pars_fragment:Ex,clipping_planes_fragment:Ax,clipping_planes_pars_fragment:wx,clipping_planes_pars_vertex:Rx,clipping_planes_vertex:Cx,color_fragment:Px,color_pars_fragment:Lx,color_pars_vertex:Dx,color_vertex:Ix,common:Nx,cube_uv_reflection_fragment:Ux,defaultnormal_vertex:Ox,displacementmap_pars_vertex:Fx,displacementmap_vertex:Bx,emissivemap_fragment:kx,emissivemap_pars_fragment:zx,colorspace_fragment:Vx,colorspace_pars_fragment:Hx,envmap_fragment:Gx,envmap_common_pars_fragment:Wx,envmap_pars_fragment:Xx,envmap_pars_vertex:qx,envmap_physical_pars_fragment:iv,envmap_vertex:Yx,fog_vertex:Kx,fog_pars_vertex:$x,fog_fragment:jx,fog_pars_fragment:Zx,gradientmap_pars_fragment:Jx,lightmap_pars_fragment:Qx,lights_lambert_fragment:ev,lights_lambert_pars_fragment:tv,lights_pars_begin:nv,lights_toon_fragment:sv,lights_toon_pars_fragment:rv,lights_phong_fragment:av,lights_phong_pars_fragment:ov,lights_physical_fragment:lv,lights_physical_pars_fragment:cv,lights_fragment_begin:hv,lights_fragment_maps:uv,lights_fragment_end:dv,lightprobes_pars_fragment:fv,logdepthbuf_fragment:pv,logdepthbuf_pars_fragment:mv,logdepthbuf_pars_vertex:gv,logdepthbuf_vertex:_v,map_fragment:xv,map_pars_fragment:vv,map_particle_fragment:yv,map_particle_pars_fragment:Sv,metalnessmap_fragment:Mv,metalnessmap_pars_fragment:bv,morphinstance_vertex:Tv,morphcolor_vertex:Ev,morphnormal_vertex:Av,morphtarget_pars_vertex:wv,morphtarget_vertex:Rv,normal_fragment_begin:Cv,normal_fragment_maps:Pv,normal_pars_fragment:Lv,normal_pars_vertex:Dv,normal_vertex:Iv,normalmap_pars_fragment:Nv,clearcoat_normal_fragment_begin:Uv,clearcoat_normal_fragment_maps:Ov,clearcoat_pars_fragment:Fv,iridescence_pars_fragment:Bv,opaque_fragment:kv,packing:zv,premultiplied_alpha_fragment:Vv,project_vertex:Hv,dithering_fragment:Gv,dithering_pars_fragment:Wv,roughnessmap_fragment:Xv,roughnessmap_pars_fragment:qv,shadowmap_pars_fragment:Yv,shadowmap_pars_vertex:Kv,shadowmap_vertex:$v,shadowmask_pars_fragment:jv,skinbase_vertex:Zv,skinning_pars_vertex:Jv,skinning_vertex:Qv,skinnormal_vertex:ey,specularmap_fragment:ty,specularmap_pars_fragment:ny,tonemapping_fragment:iy,tonemapping_pars_fragment:sy,transmission_fragment:ry,transmission_pars_fragment:ay,uv_pars_fragment:oy,uv_pars_vertex:ly,uv_vertex:cy,worldpos_vertex:hy,background_vert:uy,background_frag:dy,backgroundCube_vert:fy,backgroundCube_frag:py,cube_vert:my,cube_frag:gy,depth_vert:_y,depth_frag:xy,distance_vert:vy,distance_frag:yy,equirect_vert:Sy,equirect_frag:My,linedashed_vert:by,linedashed_frag:Ty,meshbasic_vert:Ey,meshbasic_frag:Ay,meshlambert_vert:wy,meshlambert_frag:Ry,meshmatcap_vert:Cy,meshmatcap_frag:Py,meshnormal_vert:Ly,meshnormal_frag:Dy,meshphong_vert:Iy,meshphong_frag:Ny,meshphysical_vert:Uy,meshphysical_frag:Oy,meshtoon_vert:Fy,meshtoon_frag:By,points_vert:ky,points_frag:zy,shadow_vert:Vy,shadow_frag:Hy,sprite_vert:Gy,sprite_frag:Wy},ve={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new E},probesMax:{value:new E},probesResolution:{value:new E}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Wn={basic:{uniforms:$t([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:$t([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:$t([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:$t([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:$t([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new ke(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:$t([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:$t([ve.points,ve.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:$t([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:$t([ve.common,ve.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:$t([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:$t([ve.sprite,ve.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:$t([ve.common,ve.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:$t([ve.lights,ve.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Wn.physical={uniforms:$t([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Ga={r:0,b:0,g:0},Xy=new Ee,$p=new qe;$p.set(-1,0,0,0,1,0,0,0,1);function qy(i,e,t,n,s,r){const a=new ke(0);let o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){const x=y.backgroundBlurriness>0;M=e.get(M,x)}return M}function p(y){let M=!1;const x=f(y);x===null?g(a,o):x&&x.isColor&&(g(x,1),M=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(y,M){const x=f(M);x&&(x.isCubeTexture||x.mapping===Bo)?(c===void 0&&(c=new st(new yi(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:Ks(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Xy.makeRotationFromEuler(M.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply($p),c.material.toneMapped=nt.getTransfer(x.colorSpace)!==ct,(h!==x||d!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new st(new Hi(2,2),new Zn({name:"BackgroundMaterial",uniforms:Ks(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=nt.getTransfer(x.colorSpace)!==ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,M){y.getRGB(Ga,kp(i)),t.buffers.color.setClear(Ga.r,Ga.g,Ga.b,M,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),o=M,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:p,addToRenderList:_,dispose:m}}function Yy(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(P,F,X,B,N){let z=!1;const H=d(P,B,X,F);r!==H&&(r=H,c(r.object)),z=f(P,B,X,N),z&&p(P,B,X,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,x(P,F,X,B),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function d(P,F,X,B){const N=B.wireframe===!0;let z=n[F.id];z===void 0&&(z={},n[F.id]=z);const H=P.isInstancedMesh===!0?P.id:0;let ie=z[H];ie===void 0&&(ie={},z[H]=ie);let oe=ie[X.id];oe===void 0&&(oe={},ie[X.id]=oe);let xe=oe[N];return xe===void 0&&(xe=u(l()),oe[N]=xe),xe}function u(P){const F=[],X=[],B=[];for(let N=0;N<t;N++)F[N]=0,X[N]=0,B[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:X,attributeDivisors:B,object:P,attributes:{},index:null}}function f(P,F,X,B){const N=r.attributes,z=F.attributes;let H=0;const ie=X.getAttributes();for(const oe in ie)if(ie[oe].location>=0){const Me=N[oe];let Ce=z[oe];if(Ce===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(Ce=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(Ce=P.instanceColor)),Me===void 0||Me.attribute!==Ce||Ce&&Me.data!==Ce.data)return!0;H++}return r.attributesNum!==H||r.index!==B}function p(P,F,X,B){const N={},z=F.attributes;let H=0;const ie=X.getAttributes();for(const oe in ie)if(ie[oe].location>=0){let Me=z[oe];Me===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(Me=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(Me=P.instanceColor));const Ce={};Ce.attribute=Me,Me&&Me.data&&(Ce.data=Me.data),N[oe]=Ce,H++}r.attributes=N,r.attributesNum=H,r.index=B}function _(){const P=r.newAttributes;for(let F=0,X=P.length;F<X;F++)P[F]=0}function g(P){m(P,0)}function m(P,F){const X=r.newAttributes,B=r.enabledAttributes,N=r.attributeDivisors;X[P]=1,B[P]===0&&(i.enableVertexAttribArray(P),B[P]=1),N[P]!==F&&(i.vertexAttribDivisor(P,F),N[P]=F)}function y(){const P=r.newAttributes,F=r.enabledAttributes;for(let X=0,B=F.length;X<B;X++)F[X]!==P[X]&&(i.disableVertexAttribArray(X),F[X]=0)}function M(P,F,X,B,N,z,H){H===!0?i.vertexAttribIPointer(P,F,X,N,z):i.vertexAttribPointer(P,F,X,B,N,z)}function x(P,F,X,B){_();const N=B.attributes,z=X.getAttributes(),H=F.defaultAttributeValues;for(const ie in z){const oe=z[ie];if(oe.location>=0){let xe=N[ie];if(xe===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(xe=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(xe=P.instanceColor)),xe!==void 0){const Me=xe.normalized,Ce=xe.itemSize,Ye=e.get(xe);if(Ye===void 0)continue;const it=Ye.buffer,Ge=Ye.type,ee=Ye.bytesPerElement,O=Ge===i.INT||Ge===i.UNSIGNED_INT||xe.gpuType===Mh;if(xe.isInterleavedBufferAttribute){const U=xe.data,K=U.stride,Y=xe.offset;if(U.isInstancedInterleavedBuffer){for(let ce=0;ce<oe.locationSize;ce++)m(oe.location+ce,U.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let ce=0;ce<oe.locationSize;ce++)g(oe.location+ce);i.bindBuffer(i.ARRAY_BUFFER,it);for(let ce=0;ce<oe.locationSize;ce++)M(oe.location+ce,Ce/oe.locationSize,Ge,Me,K*ee,(Y+Ce/oe.locationSize*ce)*ee,O)}else{if(xe.isInstancedBufferAttribute){for(let U=0;U<oe.locationSize;U++)m(oe.location+U,xe.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let U=0;U<oe.locationSize;U++)g(oe.location+U);i.bindBuffer(i.ARRAY_BUFFER,it);for(let U=0;U<oe.locationSize;U++)M(oe.location+U,Ce/oe.locationSize,Ge,Me,Ce*ee,Ce/oe.locationSize*U*ee,O)}}else if(H!==void 0){const Me=H[ie];if(Me!==void 0)switch(Me.length){case 2:i.vertexAttrib2fv(oe.location,Me);break;case 3:i.vertexAttrib3fv(oe.location,Me);break;case 4:i.vertexAttrib4fv(oe.location,Me);break;default:i.vertexAttrib1fv(oe.location,Me)}}}}y()}function R(){w();for(const P in n){const F=n[P];for(const X in F){const B=F[X];for(const N in B){const z=B[N];for(const H in z)h(z[H].object),delete z[H];delete B[N]}}delete n[P]}}function T(P){if(n[P.id]===void 0)return;const F=n[P.id];for(const X in F){const B=F[X];for(const N in B){const z=B[N];for(const H in z)h(z[H].object),delete z[H];delete B[N]}}delete n[P.id]}function C(P){for(const F in n){const X=n[F];for(const B in X){const N=X[B];if(N[P.id]===void 0)continue;const z=N[P.id];for(const H in z)h(z[H].object),delete z[H];delete N[P.id]}}}function v(P){for(const F in n){const X=n[F],B=P.isInstancedMesh===!0?P.id:0,N=X[B];if(N!==void 0){for(const z in N){const H=N[z];for(const ie in H)h(H[ie].object),delete H[ie];delete N[z]}delete X[B],Object.keys(X).length===0&&delete n[F]}}}function w(){D(),a=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:D,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function Ky(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function $y(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==bn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const v=C===xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==dn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Mn&&!v)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(De("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:x,maxSamples:R,samples:T}}function jy(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new hi,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const p=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{const y=r?0:n,M=y*4;let x=m.clippingState||null;l.value=x,x=h(p,u,M,f);for(let R=0;R!==M;++R)x[R]=t[R];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,p){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const m=f+_*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,x=f;M!==_;++M,x+=4)a.copy(d[M]).applyMatrix4(y,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}const Bi=4,Ed=[.125,.215,.35,.446,.526,.582],Ji=20,Zy=256,Sr=new Wo,Ad=new ke;let Ul=null,Ol=0,Fl=0,Bl=!1;const Jy=new E;class wd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Jy}=r;Ul=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),Bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ul,Ol,Fl),this._renderer.xr.enabled=Bl,e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===is||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ul=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),Bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:St,minFilter:St,generateMipmaps:!1,type:xi,format:bn,colorSpace:fn,depthBuffer:!1},s=Rd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rd(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Qy(r)),this._blurMaterial=tS(r,e,t),this._ggxMaterial=eS(r,e,t)}return s}_compileMaterial(e){const t=new st(new Je,e);this._renderer.compile(t,Sr)}_sceneToCubeUV(e,t,n,s,r){const l=new jt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Ad),d.toneMapping=Kn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new st(new yi,new Lt({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let m=!1;const y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,m=!0):(g.color.copy(Ad),m=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));const R=this._cubeSize;Rs(s,x*R,M>2?R:0,R,R),d.setRenderTarget(s),m&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===is||e.mapping===Gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cd());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Rs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Sr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-Bi?n-p+Bi:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Rs(r,g,m,3*_,2*_),s.setRenderTarget(r),s.render(o,Sr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Rs(e,g,m,3*_,2*_),s.setRenderTarget(e),s.render(o,Sr)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Be("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[s];d.material=c;const u=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ji-1),_=r/p,g=isFinite(r)?1+Math.floor(h*_):Ji;g>Ji&&De(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ji}`);const m=[];let y=0;for(let C=0;C<Ji;++C){const v=C/_,w=Math.exp(-v*v/2);m.push(w),C===0?y+=w:C<g&&(y+=2*w)}for(let C=0;C<m.length;C++)m[C]=m[C]/y;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:M}=this;u.dTheta.value=p,u.mipInt.value=M-n;const x=this._sizeLods[s],R=3*x*(s>M-Bi?s-M+Bi:0),T=4*(this._cubeSize-x);Rs(t,R,T,3*x,2*x),l.setRenderTarget(t),l.render(d,Sr)}}function Qy(i){const e=[],t=[],n=[];let s=i;const r=i-Bi+1+Ed.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Bi?l=Ed[a-i+Bi-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,p=6,_=3,g=2,m=1,y=new Float32Array(_*p*f),M=new Float32Array(g*p*f),x=new Float32Array(m*p*f);for(let T=0;T<f;T++){const C=T%3*2/3-1,v=T>2?0:-1,w=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];y.set(w,_*p*T),M.set(u,g*p*T);const D=[T,T,T,T,T,T];x.set(D,m*p*T)}const R=new Je;R.setAttribute("position",new Tt(y,_)),R.setAttribute("uv",new Tt(M,g)),R.setAttribute("faceIndex",new Tt(x,m)),n.push(new st(R,null)),s>Bi&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Rd(i,e,t){const n=new $n(i,e,t);return n.texture.mapping=Bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function eS(i,e,t){return new Zn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Zy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function tS(i,e,t){const n=new Float32Array(Ji),s=new E(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Cd(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Pd(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Xo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class jp extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Rp(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new yi(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:Ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:mi});r.uniforms.tEquirect.value=t;const a=new st(s,r),o=t.minFilter;return t.minFilter===di&&(t.minFilter=St),new X_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function nS(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===tl||f===nl)if(e.has(u)){const p=e.get(u).texture;return o(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const _=new jp(p.height);return _.fromEquirectangularTexture(i,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,p=f===tl||f===nl,_=f===is||f===Gs;if(p||_){let g=t.get(u);const m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new wd(i)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{const y=u.image;return p&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new wd(i)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===tl?u.mapping=is:f===nl&&(u.mapping=Gs),u}function l(u){let f=0;const p=6;for(let _=0;_<p;_++)u[_]!==void 0&&f++;return f===p}function c(u){const f=u.target;f.removeEventListener("dispose",c);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function iS(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Jc("WebGLRenderer: "+n+" extension not supported."),s}}}function sS(i,e,t,n){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)e.update(u[f],i.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,p=d.attributes.position;let _=0;if(p===void 0)return;if(f!==null){const y=f.array;_=f.version;for(let M=0,x=y.length;M<x;M+=3){const R=y[M+0],T=y[M+1],C=y[M+2];u.push(R,T,T,C,C,R)}}else{const y=p.array;_=p.version;for(let M=0,x=y.length/3-1;M<x;M+=3){const R=M+0,T=M+1,C=M+2;u.push(R,T,T,C,C,R)}}const g=new(p.count>=65535?Mp:Sp)(u,1);g.version=_;const m=r.get(d);m&&e.remove(m),r.set(d,g)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function rS(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function aS(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Be("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function oS(i,e,t){const n=new WeakMap,s=new xt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let w=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;f===!0&&(M=1),p===!0&&(M=2),_===!0&&(M=3);let x=o.attributes.position.count*M,R=1;x>e.maxTextureSize&&(R=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const T=new Float32Array(x*R*4*d),C=new vp(T,x,R,d);C.type=Mn,C.needsUpdate=!0;const v=M*4;for(let D=0;D<d;D++){const P=g[D],F=m[D],X=y[D],B=x*R*4*D;for(let N=0;N<P.count;N++){const z=N*v;f===!0&&(s.fromBufferAttribute(P,N),T[B+z+0]=s.x,T[B+z+1]=s.y,T[B+z+2]=s.z,T[B+z+3]=0),p===!0&&(s.fromBufferAttribute(F,N),T[B+z+4]=s.x,T[B+z+5]=s.y,T[B+z+6]=s.z,T[B+z+7]=0),_===!0&&(s.fromBufferAttribute(X,N),T[B+z+8]=s.x,T[B+z+9]=s.y,T[B+z+10]=s.z,T[B+z+11]=X.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new se(x,R)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function lS(i,e,t,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const cS={[ip]:"LINEAR_TONE_MAPPING",[sp]:"REINHARD_TONE_MAPPING",[rp]:"CINEON_TONE_MAPPING",[Sh]:"ACES_FILMIC_TONE_MAPPING",[op]:"AGX_TONE_MAPPING",[lp]:"NEUTRAL_TONE_MAPPING",[ap]:"CUSTOM_TONE_MAPPING"};function hS(i,e,t,n,s){const r=new $n(e,t,{type:i,depthBuffer:n,stencilBuffer:s,depthTexture:n?new qs(e,t):void 0}),a=new $n(e,t,{type:xi,depthBuffer:!1,stencilBuffer:!1}),o=new Je;o.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new lt([0,2,0,0,2,0],2));const l=new b_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new st(o,l),h=new Wo(-1,1,1,-1,0,1);let d=null,u=null,f=!1,p,_=null,g=[],m=!1;this.setSize=function(y,M){r.setSize(y,M),a.setSize(y,M);for(let x=0;x<g.length;x++){const R=g[x];R.setSize&&R.setSize(y,M)}},this.setEffects=function(y){g=y,m=g.length>0&&g[0].isRenderPass===!0;const M=r.width,x=r.height;for(let R=0;R<g.length;R++){const T=g[R];T.setSize&&T.setSize(M,x)}},this.begin=function(y,M){if(f||y.toneMapping===Kn&&g.length===0)return!1;if(_=M,M!==null){const x=M.width,R=M.height;(r.width!==x||r.height!==R)&&this.setSize(x,R)}return m===!1&&y.setRenderTarget(r),p=y.toneMapping,y.toneMapping=Kn,!0},this.hasRenderPass=function(){return m},this.end=function(y,M){y.toneMapping=p,f=!0;let x=r,R=a;for(let T=0;T<g.length;T++){const C=g[T];if(C.enabled!==!1&&(C.render(y,R,x,M),C.needsSwap!==!1)){const v=x;x=R,R=v}}if(d!==y.outputColorSpace||u!==y.toneMapping){d=y.outputColorSpace,u=y.toneMapping,l.defines={},nt.getTransfer(d)===ct&&(l.defines.SRGB_TRANSFER="");const T=cS[u];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=x.texture,y.setRenderTarget(_),y.render(c,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Zp=new Ut,oh=new qs(1,1),Jp=new vp,Qp=new _0,em=new Rp,Ld=[],Dd=[],Id=new Float32Array(16),Nd=new Float32Array(9),Ud=new Float32Array(4);function cr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Ld[s];if(r===void 0&&(r=new Float32Array(s),Ld[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qo(i,e){let t=Dd[e];t===void 0&&(t=new Int32Array(e),Dd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function uS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function dS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2fv(this.addr,e),Ft(t,e)}}function fS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;i.uniform3fv(this.addr,e),Ft(t,e)}}function pS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4fv(this.addr,e),Ft(t,e)}}function mS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;Ud.set(n),i.uniformMatrix2fv(this.addr,!1,Ud),Ft(t,n)}}function gS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;Nd.set(n),i.uniformMatrix3fv(this.addr,!1,Nd),Ft(t,n)}}function _S(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;Id.set(n),i.uniformMatrix4fv(this.addr,!1,Id),Ft(t,n)}}function xS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function vS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2iv(this.addr,e),Ft(t,e)}}function yS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3iv(this.addr,e),Ft(t,e)}}function SS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4iv(this.addr,e),Ft(t,e)}}function MS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function bS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2uiv(this.addr,e),Ft(t,e)}}function TS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3uiv(this.addr,e),Ft(t,e)}}function ES(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4uiv(this.addr,e),Ft(t,e)}}function AS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(oh.compareFunction=t.isReversedDepthBuffer()?Ph:Ch,r=oh):r=Zp,t.setTexture2D(e||r,s)}function wS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Qp,s)}function RS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||em,s)}function CS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Jp,s)}function PS(i){switch(i){case 5126:return uS;case 35664:return dS;case 35665:return fS;case 35666:return pS;case 35674:return mS;case 35675:return gS;case 35676:return _S;case 5124:case 35670:return xS;case 35667:case 35671:return vS;case 35668:case 35672:return yS;case 35669:case 35673:return SS;case 5125:return MS;case 36294:return bS;case 36295:return TS;case 36296:return ES;case 35678:case 36198:case 36298:case 36306:case 35682:return AS;case 35679:case 36299:case 36307:return wS;case 35680:case 36300:case 36308:case 36293:return RS;case 36289:case 36303:case 36311:case 36292:return CS}}function LS(i,e){i.uniform1fv(this.addr,e)}function DS(i,e){const t=cr(e,this.size,2);i.uniform2fv(this.addr,t)}function IS(i,e){const t=cr(e,this.size,3);i.uniform3fv(this.addr,t)}function NS(i,e){const t=cr(e,this.size,4);i.uniform4fv(this.addr,t)}function US(i,e){const t=cr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function OS(i,e){const t=cr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function FS(i,e){const t=cr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function BS(i,e){i.uniform1iv(this.addr,e)}function kS(i,e){i.uniform2iv(this.addr,e)}function zS(i,e){i.uniform3iv(this.addr,e)}function VS(i,e){i.uniform4iv(this.addr,e)}function HS(i,e){i.uniform1uiv(this.addr,e)}function GS(i,e){i.uniform2uiv(this.addr,e)}function WS(i,e){i.uniform3uiv(this.addr,e)}function XS(i,e){i.uniform4uiv(this.addr,e)}function qS(i,e,t){const n=this.cache,s=e.length,r=qo(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=oh:a=Zp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function YS(i,e,t){const n=this.cache,s=e.length,r=qo(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Qp,r[a])}function KS(i,e,t){const n=this.cache,s=e.length,r=qo(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||em,r[a])}function $S(i,e,t){const n=this.cache,s=e.length,r=qo(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Jp,r[a])}function jS(i){switch(i){case 5126:return LS;case 35664:return DS;case 35665:return IS;case 35666:return NS;case 35674:return US;case 35675:return OS;case 35676:return FS;case 5124:case 35670:return BS;case 35667:case 35671:return kS;case 35668:case 35672:return zS;case 35669:case 35673:return VS;case 5125:return HS;case 36294:return GS;case 36295:return WS;case 36296:return XS;case 35678:case 36198:case 36298:case 36306:case 35682:return qS;case 35679:case 36299:case 36307:return YS;case 35680:case 36300:case 36308:case 36293:return KS;case 36289:case 36303:case 36311:case 36292:return $S}}class ZS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=PS(t.type)}}class JS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jS(t.type)}}class QS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const kl=/(\w+)(\])?(\[|\.)?/g;function Od(i,e){i.seq.push(e),i.map[e.id]=e}function eM(i,e,t){const n=i.name,s=n.length;for(kl.lastIndex=0;;){const r=kl.exec(n),a=kl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Od(t,c===void 0?new ZS(o,i,e):new JS(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new QS(o),Od(t,d)),t=d}}}class po{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);eM(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Fd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const tM=37297;let nM=0;function iM(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Bd=new qe;function sM(i){nt._getMatrix(Bd,nt.workingColorSpace,i);const e=`mat3( ${Bd.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case yo:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function kd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+iM(i.getShaderSource(e),o)}else return r}function rM(i,e){const t=sM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const aM={[ip]:"Linear",[sp]:"Reinhard",[rp]:"Cineon",[Sh]:"ACESFilmic",[op]:"AgX",[lp]:"Neutral",[ap]:"Custom"};function oM(i,e){const t=aM[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wa=new E;function lM(){nt.getLuminanceCoefficients(Wa);const i=Wa.x.toFixed(4),e=Wa.y.toFixed(4),t=Wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function hM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function uM(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Or(i){return i!==""}function zd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dM=/^[ \t]*#include +<([\w\d./]+)>/gm;function lh(i){return i.replace(dM,pM)}const fM=new Map;function pM(i,e){let t=Qe[e];if(t===void 0){const n=fM.get(e);if(n!==void 0)t=Qe[n],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return lh(t)}const mM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hd(i){return i.replace(mM,gM)}function gM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const _M={[oo]:"SHADOWMAP_TYPE_PCF",[Ir]:"SHADOWMAP_TYPE_VSM"};function xM(i){return _M[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vM={[is]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE",[Bo]:"ENVMAP_TYPE_CUBE_UV"};function yM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":vM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const SM={[Gs]:"ENVMAP_MODE_REFRACTION"};function MM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":SM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const bM={[np]:"ENVMAP_BLENDING_MULTIPLY",[Lg]:"ENVMAP_BLENDING_MIX",[Dg]:"ENVMAP_BLENDING_ADD"};function TM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":bM[i.combine]||"ENVMAP_BLENDING_NONE"}function EM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function AM(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=xM(t),c=yM(t),h=MM(t),d=TM(t),u=EM(t),f=cM(t),p=hM(r),_=s.createProgram();let g,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Or).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Or).join(`
`),m.length>0&&(m+=`
`)):(g=[Gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),m=[Gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Kn?oM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,rM("linearToOutputTexel",t.outputColorSpace),lM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),a=lh(a),a=zd(a,t),a=Vd(a,t),o=lh(o),o=zd(o,t),o=Vd(o,t),a=Hd(a),o=Hd(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=y+g+a,x=y+m+o,R=Fd(s,s.VERTEX_SHADER,M),T=Fd(s,s.FRAGMENT_SHADER,x);s.attachShader(_,R),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(P){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(_)||"",X=s.getShaderInfoLog(R)||"",B=s.getShaderInfoLog(T)||"",N=F.trim(),z=X.trim(),H=B.trim();let ie=!0,oe=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,T);else{const xe=kd(s,R,"vertex"),Me=kd(s,T,"fragment");Be("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+xe+`
`+Me)}else N!==""?De("WebGLProgram: Program Info Log:",N):(z===""||H==="")&&(oe=!1);oe&&(P.diagnostics={runnable:ie,programLog:N,vertexShader:{log:z,prefix:g},fragmentShader:{log:H,prefix:m}})}s.deleteShader(R),s.deleteShader(T),v=new po(s,_),w=uM(s,_)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(_,tM)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}let wM=0;class RM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new CM(e),t.set(e,n)),n}}class CM{constructor(e){this.id=wM++,this.code=e,this.usedTimes=0}}function PM(i){return i===ss||i===xo||i===vo}function LM(i,e,t,n,s,r){const a=new Ih,o=new RM,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,w,D,P,F,X){const B=P.fog,N=F.geometry,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ie=e.get(v.envMap||z,H),oe=ie&&ie.mapping===Bo?ie.image.height:null,xe=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&De("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const Me=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Ce=Me!==void 0?Me.length:0;let Ye=0;N.morphAttributes.position!==void 0&&(Ye=1),N.morphAttributes.normal!==void 0&&(Ye=2),N.morphAttributes.color!==void 0&&(Ye=3);let it,Ge,ee,O;if(xe){const Ke=Wn[xe];it=Ke.vertexShader,Ge=Ke.fragmentShader}else it=v.vertexShader,Ge=v.fragmentShader,o.update(v),ee=o.getVertexShaderID(v),O=o.getFragmentShaderID(v);const U=i.getRenderTarget(),K=i.state.buffers.depth.getReversed(),Y=F.isInstancedMesh===!0,ce=F.isBatchedMesh===!0,ze=!!v.map,Ie=!!v.matcap,j=!!ie,ne=!!v.aoMap,Q=!!v.lightMap,me=!!v.bumpMap,ue=!!v.normalMap,Le=!!v.displacementMap,L=!!v.emissiveMap,Ve=!!v.metalnessMap,Pe=!!v.roughnessMap,He=v.anisotropy>0,le=v.clearcoat>0,at=v.dispersion>0,A=v.iridescence>0,S=v.sheen>0,V=v.transmission>0,J=He&&!!v.anisotropyMap,re=le&&!!v.clearcoatMap,he=le&&!!v.clearcoatNormalMap,pe=le&&!!v.clearcoatRoughnessMap,$=A&&!!v.iridescenceMap,te=A&&!!v.iridescenceThicknessMap,be=S&&!!v.sheenColorMap,we=S&&!!v.sheenRoughnessMap,ge=!!v.specularMap,de=!!v.specularColorMap,Xe=!!v.specularIntensityMap,je=V&&!!v.transmissionMap,ot=V&&!!v.thicknessMap,I=!!v.gradientMap,fe=!!v.alphaMap,Z=v.alphaTest>0,Te=!!v.alphaHash,_e=!!v.extensions;let ae=Kn;v.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ae=i.toneMapping);const Ue={shaderID:xe,shaderType:v.type,shaderName:v.name,vertexShader:it,fragmentShader:Ge,defines:v.defines,customVertexShaderID:ee,customFragmentShaderID:O,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:ce,batchingColor:ce&&F._colorsTexture!==null,instancing:Y,instancingColor:Y&&F.instanceColor!==null,instancingMorph:Y&&F.morphTexture!==null,outputColorSpace:U===null?i.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ze,matcap:Ie,envMap:j,envMapMode:j&&ie.mapping,envMapCubeUVHeight:oe,aoMap:ne,lightMap:Q,bumpMap:me,normalMap:ue,displacementMap:Le,emissiveMap:L,normalMapObjectSpace:ue&&v.normalMapType===Fg,normalMapTangentSpace:ue&&v.normalMapType===jc,packedNormalMap:ue&&v.normalMapType===jc&&PM(v.normalMap.format),metalnessMap:Ve,roughnessMap:Pe,anisotropy:He,anisotropyMap:J,clearcoat:le,clearcoatMap:re,clearcoatNormalMap:he,clearcoatRoughnessMap:pe,dispersion:at,iridescence:A,iridescenceMap:$,iridescenceThicknessMap:te,sheen:S,sheenColorMap:be,sheenRoughnessMap:we,specularMap:ge,specularColorMap:de,specularIntensityMap:Xe,transmission:V,transmissionMap:je,thicknessMap:ot,gradientMap:I,opaque:v.transparent===!1&&v.blending===ks&&v.alphaToCoverage===!1,alphaMap:fe,alphaTest:Z,alphaHash:Te,combine:v.combine,mapUv:ze&&p(v.map.channel),aoMapUv:ne&&p(v.aoMap.channel),lightMapUv:Q&&p(v.lightMap.channel),bumpMapUv:me&&p(v.bumpMap.channel),normalMapUv:ue&&p(v.normalMap.channel),displacementMapUv:Le&&p(v.displacementMap.channel),emissiveMapUv:L&&p(v.emissiveMap.channel),metalnessMapUv:Ve&&p(v.metalnessMap.channel),roughnessMapUv:Pe&&p(v.roughnessMap.channel),anisotropyMapUv:J&&p(v.anisotropyMap.channel),clearcoatMapUv:re&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:he&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:te&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:be&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:we&&p(v.sheenRoughnessMap.channel),specularMapUv:ge&&p(v.specularMap.channel),specularColorMapUv:de&&p(v.specularColorMap.channel),specularIntensityMapUv:Xe&&p(v.specularIntensityMap.channel),transmissionMapUv:je&&p(v.transmissionMap.channel),thicknessMapUv:ot&&p(v.thicknessMap.channel),alphaMapUv:fe&&p(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ue||He),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!N.attributes.uv&&(ze||fe),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&ue===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:K,skinning:F.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Ye,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,decodeVideoTexture:ze&&v.map.isVideoTexture===!0&&nt.getTransfer(v.map.colorSpace)===ct,decodeVideoTextureEmissive:L&&v.emissiveMap.isVideoTexture===!0&&nt.getTransfer(v.emissiveMap.colorSpace)===ct,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===tn,flipSided:v.side===sn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:_e&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&v.extensions.multiDraw===!0||ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ue.vertexUv1s=l.has(1),Ue.vertexUv2s=l.has(2),Ue.vertexUv3s=l.has(3),l.clear(),Ue}function g(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)w.push(D),w.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(m(w,v),y(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function m(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function y(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),v.push(a.mask)}function M(v){const w=f[v.type];let D;if(w){const P=Wn[w];D=y_.clone(P.uniforms)}else D=v.uniforms;return D}function x(v,w){let D=h.get(w);return D!==void 0?++D.usedTimes:(D=new AM(i,w,v,s),c.push(D),h.set(w,D)),D}function R(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function C(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:M,acquireProgram:x,releaseProgram:R,releaseShaderCache:T,programs:c,dispose:C}}function DM(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function IM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Wd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Xd(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,_,g,m){let y=i[e];return y===void 0?(y={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},i[e]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=p,y.materialVariant=a(u),y.groupOrder=_,y.renderOrder=u.renderOrder,y.z=g,y.group=m),e++,y}function l(u,f,p,_,g,m){const y=o(u,f,p,_,g,m);p.transmission>0?n.push(y):p.transparent===!0?s.push(y):t.push(y)}function c(u,f,p,_,g,m){const y=o(u,f,p,_,g,m);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function h(u,f){t.length>1&&t.sort(u||IM),n.length>1&&n.sort(f||Wd),s.length>1&&s.sort(f||Wd)}function d(){for(let u=e,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function NM(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Xd,i.set(n,[a])):s>=r.length?(a=new Xd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function UM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new ke};break;case"SpotLight":t={position:new E,direction:new E,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new E,halfWidth:new E,halfHeight:new E};break}return i[e.id]=t,t}}}function OM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let FM=0;function BM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function kM(i){const e=new UM,t=OM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);const s=new E,r=new Ee,a=new Ee;function o(c){let h=0,d=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,y=0,M=0,x=0,R=0,T=0,C=0;c.sort(BM);for(let w=0,D=c.length;w<D;w++){const P=c[w],F=P.color,X=P.intensity,B=P.distance;let N=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ss?N=P.shadow.map.texture:N=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=F.r*X,d+=F.g*X,u+=F.b*X;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],X);C++}else if(P.isDirectionalLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const H=P.shadow,ie=t.get(P);ie.shadowIntensity=H.intensity,ie.shadowBias=H.bias,ie.shadowNormalBias=H.normalBias,ie.shadowRadius=H.radius,ie.shadowMapSize=H.mapSize,n.directionalShadow[f]=ie,n.directionalShadowMap[f]=N,n.directionalShadowMatrix[f]=P.shadow.matrix,y++}n.directional[f]=z,f++}else if(P.isSpotLight){const z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(F).multiplyScalar(X),z.distance=B,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[_]=z;const H=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,H.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[_]=H.matrix,P.castShadow){const ie=t.get(P);ie.shadowIntensity=H.intensity,ie.shadowBias=H.bias,ie.shadowNormalBias=H.normalBias,ie.shadowRadius=H.radius,ie.shadowMapSize=H.mapSize,n.spotShadow[_]=ie,n.spotShadowMap[_]=N,x++}_++}else if(P.isRectAreaLight){const z=e.get(P);z.color.copy(F).multiplyScalar(X),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=z,g++}else if(P.isPointLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const H=P.shadow,ie=t.get(P);ie.shadowIntensity=H.intensity,ie.shadowBias=H.bias,ie.shadowNormalBias=H.normalBias,ie.shadowRadius=H.radius,ie.shadowMapSize=H.mapSize,ie.shadowCameraNear=H.camera.near,ie.shadowCameraFar=H.camera.far,n.pointShadow[p]=ie,n.pointShadowMap[p]=N,n.pointShadowMatrix[p]=P.shadow.matrix,M++}n.point[p]=z,p++}else if(P.isHemisphereLight){const z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(X),z.groundColor.copy(P.groundColor).multiplyScalar(X),n.hemi[m]=z,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const v=n.hash;(v.directionalLength!==f||v.pointLength!==p||v.spotLength!==_||v.rectAreaLength!==g||v.hemiLength!==m||v.numDirectionalShadows!==y||v.numPointShadows!==M||v.numSpotShadows!==x||v.numSpotMaps!==R||v.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,v.directionalLength=f,v.pointLength=p,v.spotLength=_,v.rectAreaLength=g,v.hemiLength=m,v.numDirectionalShadows=y,v.numPointShadows=M,v.numSpotShadows=x,v.numSpotMaps=R,v.numLightProbes=C,n.version=FM++)}function l(c,h){let d=0,u=0,f=0,p=0,_=0;const g=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const M=c[m];if(M.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),d++}else if(M.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(M.isRectAreaLight){const x=n.rectArea[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),p++}else if(M.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),u++}else if(M.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function qd(i){const e=new kM(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function zM(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new qd(i),e.set(s,[o])):r>=a.length?(o=new qd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const VM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,GM=[new E(1,0,0),new E(-1,0,0),new E(0,1,0),new E(0,-1,0),new E(0,0,1),new E(0,0,-1)],WM=[new E(0,-1,0),new E(0,-1,0),new E(0,0,1),new E(0,0,-1),new E(0,-1,0),new E(0,-1,0)],Yd=new Ee,Mr=new E,zl=new E;function XM(i,e,t){let n=new ko;const s=new se,r=new se,a=new xt,o=new T_,l=new E_,c={},h=t.maxTextureSize,d={[_i]:sn,[sn]:_i,[tn]:tn},u=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:VM,fragmentShader:HM}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const p=new Je;p.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new st(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oo;let m=this.type;this.render=function(T,C,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===dg&&(De("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=oo);const w=i.getRenderTarget(),D=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.state;F.setBlending(mi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const X=m!==this.type;X&&C.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(N=>N.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,N=T.length;B<N;B++){const z=T[B],H=z.shadow;if(H===void 0){De("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ie=H.getFrameExtents();s.multiply(ie),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,H.mapSize.y=r.y));const oe=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=oe,H.map===null||X===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ir){if(z.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new $n(s.x,s.y,{format:ss,type:xi,minFilter:St,magFilter:St,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new qs(s.x,s.y,Mn),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=vi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Nt,H.map.depthTexture.magFilter=Nt}else z.isPointLight?(H.map=new jp(s.x),H.map.depthTexture=new k0(s.x,jn)):(H.map=new $n(s.x,s.y),H.map.depthTexture=new qs(s.x,s.y,jn)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=vi,this.type===oo?(H.map.depthTexture.compareFunction=oe?Ph:Ch,H.map.depthTexture.minFilter=St,H.map.depthTexture.magFilter=St):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Nt,H.map.depthTexture.magFilter=Nt);H.camera.updateProjectionMatrix()}const xe=H.map.isWebGLCubeRenderTarget?6:1;for(let Me=0;Me<xe;Me++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,Me),i.clear();else{Me===0&&(i.setRenderTarget(H.map),i.clear());const Ce=H.getViewport(Me);a.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),F.viewport(a)}if(z.isPointLight){const Ce=H.camera,Ye=H.matrix,it=z.distance||Ce.far;it!==Ce.far&&(Ce.far=it,Ce.updateProjectionMatrix()),Mr.setFromMatrixPosition(z.matrixWorld),Ce.position.copy(Mr),zl.copy(Ce.position),zl.add(GM[Me]),Ce.up.copy(WM[Me]),Ce.lookAt(zl),Ce.updateMatrixWorld(),Ye.makeTranslation(-Mr.x,-Mr.y,-Mr.z),Yd.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Yd,Ce.coordinateSystem,Ce.reversedDepth)}else H.updateMatrices(z);n=H.getFrustum(),x(C,v,H.camera,z,this.type)}H.isPointLightShadow!==!0&&this.type===Ir&&y(H,v),H.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(w,D,P)};function y(T,C){const v=e.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new $n(s.x,s.y,{format:ss,type:xi})),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,v,u,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,v,f,_,null)}function M(T,C,v,w){let D=null;const P=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)D=P;else if(D=v.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=D.uuid,X=C.uuid;let B=c[F];B===void 0&&(B={},c[F]=B);let N=B[X];N===void 0&&(N=D.clone(),B[X]=N,C.addEventListener("dispose",R)),D=N}if(D.visible=C.visible,D.wireframe=C.wireframe,w===Ir?D.side=C.shadowSide!==null?C.shadowSide:C.side:D.side=C.shadowSide!==null?C.shadowSide:d[C.side],D.alphaMap=C.alphaMap,D.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,D.map=C.map,D.clipShadows=C.clipShadows,D.clippingPlanes=C.clippingPlanes,D.clipIntersection=C.clipIntersection,D.displacementMap=C.displacementMap,D.displacementScale=C.displacementScale,D.displacementBias=C.displacementBias,D.wireframeLinewidth=C.wireframeLinewidth,D.linewidth=C.linewidth,v.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const F=i.properties.get(D);F.light=v}return D}function x(T,C,v,w,D){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===Ir)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const X=e.update(T),B=T.material;if(Array.isArray(B)){const N=X.groups;for(let z=0,H=N.length;z<H;z++){const ie=N[z],oe=B[ie.materialIndex];if(oe&&oe.visible){const xe=M(T,oe,w,D);T.onBeforeShadow(i,T,C,v,X,xe,ie),i.renderBufferDirect(v,null,X,xe,T,ie),T.onAfterShadow(i,T,C,v,X,xe,ie)}}}else if(B.visible){const N=M(T,B,w,D);T.onBeforeShadow(i,T,C,v,X,N,null),i.renderBufferDirect(v,null,X,N,T,null),T.onAfterShadow(i,T,C,v,X,N,null)}}const F=T.children;for(let X=0,B=F.length;X<B;X++)x(F[X],C,v,w,D)}function R(T){T.target.removeEventListener("dispose",R);for(const v in c){const w=c[v],D=T.target.uuid;D in w&&(w[D].dispose(),delete w[D])}}}function qM(i,e){function t(){let I=!1;const fe=new xt;let Z=null;const Te=new xt(0,0,0,0);return{setMask:function(_e){Z!==_e&&!I&&(i.colorMask(_e,_e,_e,_e),Z=_e)},setLocked:function(_e){I=_e},setClear:function(_e,ae,Ue,Ke,Et){Et===!0&&(_e*=Ke,ae*=Ke,Ue*=Ke),fe.set(_e,ae,Ue,Ke),Te.equals(fe)===!1&&(i.clearColor(_e,ae,Ue,Ke),Te.copy(fe))},reset:function(){I=!1,Z=null,Te.set(-1,0,0,0)}}}function n(){let I=!1,fe=!1,Z=null,Te=null,_e=null;return{setReversed:function(ae){if(fe!==ae){const Ue=e.get("EXT_clip_control");ae?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),fe=ae;const Ke=_e;_e=null,this.setClear(Ke)}},getReversed:function(){return fe},setTest:function(ae){ae?U(i.DEPTH_TEST):K(i.DEPTH_TEST)},setMask:function(ae){Z!==ae&&!I&&(i.depthMask(ae),Z=ae)},setFunc:function(ae){if(fe&&(ae=$g[ae]),Te!==ae){switch(ae){case dc:i.depthFunc(i.NEVER);break;case fc:i.depthFunc(i.ALWAYS);break;case pc:i.depthFunc(i.LESS);break;case Hs:i.depthFunc(i.LEQUAL);break;case mc:i.depthFunc(i.EQUAL);break;case gc:i.depthFunc(i.GEQUAL);break;case _c:i.depthFunc(i.GREATER);break;case xc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Te=ae}},setLocked:function(ae){I=ae},setClear:function(ae){_e!==ae&&(_e=ae,fe&&(ae=1-ae),i.clearDepth(ae))},reset:function(){I=!1,Z=null,Te=null,_e=null,fe=!1}}}function s(){let I=!1,fe=null,Z=null,Te=null,_e=null,ae=null,Ue=null,Ke=null,Et=null;return{setTest:function(dt){I||(dt?U(i.STENCIL_TEST):K(i.STENCIL_TEST))},setMask:function(dt){fe!==dt&&!I&&(i.stencilMask(dt),fe=dt)},setFunc:function(dt,ei,Bn){(Z!==dt||Te!==ei||_e!==Bn)&&(i.stencilFunc(dt,ei,Bn),Z=dt,Te=ei,_e=Bn)},setOp:function(dt,ei,Bn){(ae!==dt||Ue!==ei||Ke!==Bn)&&(i.stencilOp(dt,ei,Bn),ae=dt,Ue=ei,Ke=Bn)},setLocked:function(dt){I=dt},setClear:function(dt){Et!==dt&&(i.clearStencil(dt),Et=dt)},reset:function(){I=!1,fe=null,Z=null,Te=null,_e=null,ae=null,Ue=null,Ke=null,Et=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u={},f=new WeakMap,p=[],_=null,g=!1,m=null,y=null,M=null,x=null,R=null,T=null,C=null,v=new ke(0,0,0),w=0,D=!1,P=null,F=null,X=null,B=null,N=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,ie=0;const oe=i.getParameter(i.VERSION);oe.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(oe)[1]),H=ie>=1):oe.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),H=ie>=2);let xe=null,Me={};const Ce=i.getParameter(i.SCISSOR_BOX),Ye=i.getParameter(i.VIEWPORT),it=new xt().fromArray(Ce),Ge=new xt().fromArray(Ye);function ee(I,fe,Z,Te){const _e=new Uint8Array(4),ae=i.createTexture();i.bindTexture(I,ae),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ue=0;Ue<Z;Ue++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(fe+Ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return ae}const O={};O[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),O[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),O[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),U(i.DEPTH_TEST),a.setFunc(Hs),me(!1),ue(Mu),U(i.CULL_FACE),ne(mi);function U(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function K(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Y(I,fe){return u[I]!==fe?(i.bindFramebuffer(I,fe),u[I]=fe,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=fe),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function ce(I,fe){let Z=p,Te=!1;if(I){Z=f.get(fe),Z===void 0&&(Z=[],f.set(fe,Z));const _e=I.textures;if(Z.length!==_e.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,Ue=_e.length;ae<Ue;ae++)Z[ae]=i.COLOR_ATTACHMENT0+ae;Z.length=_e.length,Te=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,Te=!0);Te&&i.drawBuffers(Z)}function ze(I){return _!==I?(i.useProgram(I),_=I,!0):!1}const Ie={[Zi]:i.FUNC_ADD,[pg]:i.FUNC_SUBTRACT,[mg]:i.FUNC_REVERSE_SUBTRACT};Ie[gg]=i.MIN,Ie[_g]=i.MAX;const j={[xg]:i.ZERO,[vg]:i.ONE,[yg]:i.SRC_COLOR,[hc]:i.SRC_ALPHA,[Ag]:i.SRC_ALPHA_SATURATE,[Tg]:i.DST_COLOR,[Mg]:i.DST_ALPHA,[Sg]:i.ONE_MINUS_SRC_COLOR,[uc]:i.ONE_MINUS_SRC_ALPHA,[Eg]:i.ONE_MINUS_DST_COLOR,[bg]:i.ONE_MINUS_DST_ALPHA,[wg]:i.CONSTANT_COLOR,[Rg]:i.ONE_MINUS_CONSTANT_COLOR,[Cg]:i.CONSTANT_ALPHA,[Pg]:i.ONE_MINUS_CONSTANT_ALPHA};function ne(I,fe,Z,Te,_e,ae,Ue,Ke,Et,dt){if(I===mi){g===!0&&(K(i.BLEND),g=!1);return}if(g===!1&&(U(i.BLEND),g=!0),I!==fg){if(I!==m||dt!==D){if((y!==Zi||R!==Zi)&&(i.blendEquation(i.FUNC_ADD),y=Zi,R=Zi),dt)switch(I){case ks:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cc:i.blendFunc(i.ONE,i.ONE);break;case bu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Be("WebGLState: Invalid blending: ",I);break}else switch(I){case ks:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case bu:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tu:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",I);break}M=null,x=null,T=null,C=null,v.set(0,0,0),w=0,m=I,D=dt}return}_e=_e||fe,ae=ae||Z,Ue=Ue||Te,(fe!==y||_e!==R)&&(i.blendEquationSeparate(Ie[fe],Ie[_e]),y=fe,R=_e),(Z!==M||Te!==x||ae!==T||Ue!==C)&&(i.blendFuncSeparate(j[Z],j[Te],j[ae],j[Ue]),M=Z,x=Te,T=ae,C=Ue),(Ke.equals(v)===!1||Et!==w)&&(i.blendColor(Ke.r,Ke.g,Ke.b,Et),v.copy(Ke),w=Et),m=I,D=!1}function Q(I,fe){I.side===tn?K(i.CULL_FACE):U(i.CULL_FACE);let Z=I.side===sn;fe&&(Z=!Z),me(Z),I.blending===ks&&I.transparent===!1?ne(mi):ne(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const Te=I.stencilWrite;o.setTest(Te),Te&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),L(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?U(i.SAMPLE_ALPHA_TO_COVERAGE):K(i.SAMPLE_ALPHA_TO_COVERAGE)}function me(I){P!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),P=I)}function ue(I){I!==hg?(U(i.CULL_FACE),I!==F&&(I===Mu?i.cullFace(i.BACK):I===ug?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):K(i.CULL_FACE),F=I}function Le(I){I!==X&&(H&&i.lineWidth(I),X=I)}function L(I,fe,Z){I?(U(i.POLYGON_OFFSET_FILL),(B!==fe||N!==Z)&&(B=fe,N=Z,a.getReversed()&&(fe=-fe),i.polygonOffset(fe,Z))):K(i.POLYGON_OFFSET_FILL)}function Ve(I){I?U(i.SCISSOR_TEST):K(i.SCISSOR_TEST)}function Pe(I){I===void 0&&(I=i.TEXTURE0+z-1),xe!==I&&(i.activeTexture(I),xe=I)}function He(I,fe,Z){Z===void 0&&(xe===null?Z=i.TEXTURE0+z-1:Z=xe);let Te=Me[Z];Te===void 0&&(Te={type:void 0,texture:void 0},Me[Z]=Te),(Te.type!==I||Te.texture!==fe)&&(xe!==Z&&(i.activeTexture(Z),xe=Z),i.bindTexture(I,fe||O[I]),Te.type=I,Te.texture=fe)}function le(){const I=Me[xe];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function at(){try{i.compressedTexImage2D(...arguments)}catch(I){Be("WebGLState:",I)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(I){Be("WebGLState:",I)}}function S(){try{i.texSubImage2D(...arguments)}catch(I){Be("WebGLState:",I)}}function V(){try{i.texSubImage3D(...arguments)}catch(I){Be("WebGLState:",I)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(I){Be("WebGLState:",I)}}function re(){try{i.compressedTexSubImage3D(...arguments)}catch(I){Be("WebGLState:",I)}}function he(){try{i.texStorage2D(...arguments)}catch(I){Be("WebGLState:",I)}}function pe(){try{i.texStorage3D(...arguments)}catch(I){Be("WebGLState:",I)}}function $(){try{i.texImage2D(...arguments)}catch(I){Be("WebGLState:",I)}}function te(){try{i.texImage3D(...arguments)}catch(I){Be("WebGLState:",I)}}function be(I){return d[I]!==void 0?d[I]:i.getParameter(I)}function we(I,fe){d[I]!==fe&&(i.pixelStorei(I,fe),d[I]=fe)}function ge(I){it.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),it.copy(I))}function de(I){Ge.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Ge.copy(I))}function Xe(I,fe){let Z=c.get(fe);Z===void 0&&(Z=new WeakMap,c.set(fe,Z));let Te=Z.get(I);Te===void 0&&(Te=i.getUniformBlockIndex(fe,I.name),Z.set(I,Te))}function je(I,fe){const Te=c.get(fe).get(I);l.get(fe)!==Te&&(i.uniformBlockBinding(fe,Te,I.__bindingPointIndex),l.set(fe,Te))}function ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},xe=null,Me={},u={},f=new WeakMap,p=[],_=null,g=!1,m=null,y=null,M=null,x=null,R=null,T=null,C=null,v=new ke(0,0,0),w=0,D=!1,P=null,F=null,X=null,B=null,N=null,it.set(0,0,i.canvas.width,i.canvas.height),Ge.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:U,disable:K,bindFramebuffer:Y,drawBuffers:ce,useProgram:ze,setBlending:ne,setMaterial:Q,setFlipSided:me,setCullFace:ue,setLineWidth:Le,setPolygonOffset:L,setScissorTest:Ve,activeTexture:Pe,bindTexture:He,unbindTexture:le,compressedTexImage2D:at,compressedTexImage3D:A,texImage2D:$,texImage3D:te,pixelStorei:we,getParameter:be,updateUBOMapping:Xe,uniformBlockBinding:je,texStorage2D:he,texStorage3D:pe,texSubImage2D:S,texSubImage3D:V,compressedTexSubImage2D:J,compressedTexSubImage3D:re,scissor:ge,viewport:de,reset:ot}}function YM(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,S){return p?new OffscreenCanvas(A,S):jr("canvas")}function g(A,S,V){let J=1;const re=at(A);if((re.width>V||re.height>V)&&(J=V/Math.max(re.width,re.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const he=Math.floor(J*re.width),pe=Math.floor(J*re.height);u===void 0&&(u=_(he,pe));const $=S?_(he,pe):u;return $.width=he,$.height=pe,$.getContext("2d").drawImage(A,0,0,he,pe),De("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+he+"x"+pe+")."),$}else return"data"in A&&De("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),A;return A}function m(A){return A.generateMipmaps}function y(A){i.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(A,S,V,J,re,he=!1){if(A!==null){if(i[A]!==void 0)return i[A];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let pe;J&&(pe=e.get("EXT_texture_norm16"),pe||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=S;if(S===i.RED&&(V===i.FLOAT&&($=i.R32F),V===i.HALF_FLOAT&&($=i.R16F),V===i.UNSIGNED_BYTE&&($=i.R8),V===i.UNSIGNED_SHORT&&pe&&($=pe.R16_EXT),V===i.SHORT&&pe&&($=pe.R16_SNORM_EXT)),S===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.R8UI),V===i.UNSIGNED_SHORT&&($=i.R16UI),V===i.UNSIGNED_INT&&($=i.R32UI),V===i.BYTE&&($=i.R8I),V===i.SHORT&&($=i.R16I),V===i.INT&&($=i.R32I)),S===i.RG&&(V===i.FLOAT&&($=i.RG32F),V===i.HALF_FLOAT&&($=i.RG16F),V===i.UNSIGNED_BYTE&&($=i.RG8),V===i.UNSIGNED_SHORT&&pe&&($=pe.RG16_EXT),V===i.SHORT&&pe&&($=pe.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RG8UI),V===i.UNSIGNED_SHORT&&($=i.RG16UI),V===i.UNSIGNED_INT&&($=i.RG32UI),V===i.BYTE&&($=i.RG8I),V===i.SHORT&&($=i.RG16I),V===i.INT&&($=i.RG32I)),S===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RGB8UI),V===i.UNSIGNED_SHORT&&($=i.RGB16UI),V===i.UNSIGNED_INT&&($=i.RGB32UI),V===i.BYTE&&($=i.RGB8I),V===i.SHORT&&($=i.RGB16I),V===i.INT&&($=i.RGB32I)),S===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RGBA8UI),V===i.UNSIGNED_SHORT&&($=i.RGBA16UI),V===i.UNSIGNED_INT&&($=i.RGBA32UI),V===i.BYTE&&($=i.RGBA8I),V===i.SHORT&&($=i.RGBA16I),V===i.INT&&($=i.RGBA32I)),S===i.RGB&&(V===i.UNSIGNED_SHORT&&pe&&($=pe.RGB16_EXT),V===i.SHORT&&pe&&($=pe.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),S===i.RGBA){const te=he?yo:nt.getTransfer(re);V===i.FLOAT&&($=i.RGBA32F),V===i.HALF_FLOAT&&($=i.RGBA16F),V===i.UNSIGNED_BYTE&&($=te===ct?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&pe&&($=pe.RGBA16_EXT),V===i.SHORT&&pe&&($=pe.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function R(A,S){let V;return A?S===null||S===jn||S===qr?V=i.DEPTH24_STENCIL8:S===Mn?V=i.DEPTH32F_STENCIL8:S===Xr&&(V=i.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===jn||S===qr?V=i.DEPTH_COMPONENT24:S===Mn?V=i.DEPTH_COMPONENT32F:S===Xr&&(V=i.DEPTH_COMPONENT16),V}function T(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Nt&&A.minFilter!==St?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function C(A){const S=A.target;S.removeEventListener("dispose",C),w(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&d.delete(S)}function v(A){const S=A.target;S.removeEventListener("dispose",v),P(S)}function w(A){const S=n.get(A);if(S.__webglInit===void 0)return;const V=A.source,J=f.get(V);if(J){const re=J[S.__cacheKey];re.usedTimes--,re.usedTimes===0&&D(A),Object.keys(J).length===0&&f.delete(V)}n.remove(A)}function D(A){const S=n.get(A);i.deleteTexture(S.__webglTexture);const V=A.source,J=f.get(V);delete J[S.__cacheKey],a.memory.textures--}function P(A){const S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let re=0;re<S.__webglFramebuffer[J].length;re++)i.deleteFramebuffer(S.__webglFramebuffer[J][re]);else i.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)i.deleteFramebuffer(S.__webglFramebuffer[J]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=A.textures;for(let J=0,re=V.length;J<re;J++){const he=n.get(V[J]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),a.memory.textures--),n.remove(V[J])}n.remove(A)}let F=0;function X(){F=0}function B(){return F}function N(A){F=A}function z(){const A=F;return A>=s.maxTextures&&De("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),F+=1,A}function H(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function ie(A,S){const V=n.get(A);if(A.isVideoTexture&&He(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&V.__version!==A.version){const J=A.image;if(J===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{K(V,A,S);return}}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+S)}function oe(A,S){const V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){K(V,A,S);return}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+S)}function xe(A,S){const V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){K(V,A,S);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+S)}function Me(A,S){const V=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&V.__version!==A.version){Y(V,A,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+S)}const Ce={[Ws]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[_o]:i.MIRRORED_REPEAT},Ye={[Nt]:i.NEAREST,[hp]:i.NEAREST_MIPMAP_NEAREST,[Nr]:i.NEAREST_MIPMAP_LINEAR,[St]:i.LINEAR,[lo]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},it={[Bg]:i.NEVER,[Gg]:i.ALWAYS,[kg]:i.LESS,[Ch]:i.LEQUAL,[zg]:i.EQUAL,[Ph]:i.GEQUAL,[Vg]:i.GREATER,[Hg]:i.NOTEQUAL};function Ge(A,S){if(S.type===Mn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===St||S.magFilter===lo||S.magFilter===Nr||S.magFilter===di||S.minFilter===St||S.minFilter===lo||S.minFilter===Nr||S.minFilter===di)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ce[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ce[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ce[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Ye[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Ye[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,it[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Nt||S.minFilter!==Nr&&S.minFilter!==di||S.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ee(A,S){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",C));const J=S.source;let re=f.get(J);re===void 0&&(re={},f.set(J,re));const he=H(S);if(he!==A.__cacheKey){re[he]===void 0&&(re[he]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),re[he].usedTimes++;const pe=re[A.__cacheKey];pe!==void 0&&(re[A.__cacheKey].usedTimes--,pe.usedTimes===0&&D(S)),A.__cacheKey=he,A.__webglTexture=re[he].texture}return V}function O(A,S,V){return Math.floor(Math.floor(A/V)/S)}function U(A,S,V,J){const he=A.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,V,J,S.data);else{he.sort((we,ge)=>we.start-ge.start);let pe=0;for(let we=1;we<he.length;we++){const ge=he[pe],de=he[we],Xe=ge.start+ge.count,je=O(de.start,S.width,4),ot=O(ge.start,S.width,4);de.start<=Xe+1&&je===ot&&O(de.start+de.count-1,S.width,4)===je?ge.count=Math.max(ge.count,de.start+de.count-ge.start):(++pe,he[pe]=de)}he.length=pe+1;const $=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),be=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let we=0,ge=he.length;we<ge;we++){const de=he[we],Xe=Math.floor(de.start/4),je=Math.ceil(de.count/4),ot=Xe%S.width,I=Math.floor(Xe/S.width),fe=je,Z=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),t.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,ot,I,fe,Z,V,J,S.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,be)}}function K(A,S,V){let J=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=i.TEXTURE_3D);const re=ee(A,S),he=S.source;t.bindTexture(J,A.__webglTexture,i.TEXTURE0+V);const pe=n.get(he);if(he.version!==pe.__version||re===!0){if(t.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const Z=nt.getPrimaries(nt.workingColorSpace),Te=S.colorSpace===Fi?null:nt.getPrimaries(S.colorSpace),_e=S.colorSpace===Fi||Z===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let te=g(S.image,!1,s.maxTextureSize);te=le(S,te);const be=r.convert(S.format,S.colorSpace),we=r.convert(S.type);let ge=x(S.internalFormat,be,we,S.normalized,S.colorSpace,S.isVideoTexture);Ge(J,S);let de;const Xe=S.mipmaps,je=S.isVideoTexture!==!0,ot=pe.__version===void 0||re===!0,I=he.dataReady,fe=T(S,te);if(S.isDepthTexture)ge=R(S.format===Qi,S.type),ot&&(je?t.texStorage2D(i.TEXTURE_2D,1,ge,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,ge,te.width,te.height,0,be,we,null));else if(S.isDataTexture)if(Xe.length>0){je&&ot&&t.texStorage2D(i.TEXTURE_2D,fe,ge,Xe[0].width,Xe[0].height);for(let Z=0,Te=Xe.length;Z<Te;Z++)de=Xe[Z],je?I&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,de.width,de.height,be,we,de.data):t.texImage2D(i.TEXTURE_2D,Z,ge,de.width,de.height,0,be,we,de.data);S.generateMipmaps=!1}else je?(ot&&t.texStorage2D(i.TEXTURE_2D,fe,ge,te.width,te.height),I&&U(S,te,be,we)):t.texImage2D(i.TEXTURE_2D,0,ge,te.width,te.height,0,be,we,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){je&&ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,ge,Xe[0].width,Xe[0].height,te.depth);for(let Z=0,Te=Xe.length;Z<Te;Z++)if(de=Xe[Z],S.format!==bn)if(be!==null)if(je){if(I)if(S.layerUpdates.size>0){const _e=ah(de.width,de.height,S.format,S.type);for(const ae of S.layerUpdates){const Ue=de.data.subarray(ae*_e/de.data.BYTES_PER_ELEMENT,(ae+1)*_e/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,ae,de.width,de.height,1,be,Ue)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,de.width,de.height,te.depth,be,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,ge,de.width,de.height,te.depth,0,de.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,de.width,de.height,te.depth,be,we,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,ge,de.width,de.height,te.depth,0,be,we,de.data)}else{je&&ot&&t.texStorage2D(i.TEXTURE_2D,fe,ge,Xe[0].width,Xe[0].height);for(let Z=0,Te=Xe.length;Z<Te;Z++)de=Xe[Z],S.format!==bn?be!==null?je?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,de.width,de.height,be,de.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,ge,de.width,de.height,0,de.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?I&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,de.width,de.height,be,we,de.data):t.texImage2D(i.TEXTURE_2D,Z,ge,de.width,de.height,0,be,we,de.data)}else if(S.isDataArrayTexture)if(je){if(ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,ge,te.width,te.height,te.depth),I)if(S.layerUpdates.size>0){const Z=ah(te.width,te.height,S.format,S.type);for(const Te of S.layerUpdates){const _e=te.data.subarray(Te*Z/te.data.BYTES_PER_ELEMENT,(Te+1)*Z/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Te,te.width,te.height,1,be,we,_e)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,be,we,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ge,te.width,te.height,te.depth,0,be,we,te.data);else if(S.isData3DTexture)je?(ot&&t.texStorage3D(i.TEXTURE_3D,fe,ge,te.width,te.height,te.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,be,we,te.data)):t.texImage3D(i.TEXTURE_3D,0,ge,te.width,te.height,te.depth,0,be,we,te.data);else if(S.isFramebufferTexture){if(ot)if(je)t.texStorage2D(i.TEXTURE_2D,fe,ge,te.width,te.height);else{let Z=te.width,Te=te.height;for(let _e=0;_e<fe;_e++)t.texImage2D(i.TEXTURE_2D,_e,ge,Z,Te,0,be,we,null),Z>>=1,Te>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){const Z=i.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),te.parentNode!==Z){Z.appendChild(te),d.add(S),Z.onpaint=Ke=>{const Et=Ke.changedElements;for(const dt of d)Et.includes(dt.image)&&(dt.needsUpdate=!0)},Z.requestPaint();return}const Te=0,_e=i.RGBA,ae=i.RGBA,Ue=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,Te,_e,ae,Ue,te),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Xe.length>0){if(je&&ot){const Z=at(Xe[0]);t.texStorage2D(i.TEXTURE_2D,fe,ge,Z.width,Z.height)}for(let Z=0,Te=Xe.length;Z<Te;Z++)de=Xe[Z],je?I&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,be,we,de):t.texImage2D(i.TEXTURE_2D,Z,ge,be,we,de);S.generateMipmaps=!1}else if(je){if(ot){const Z=at(te);t.texStorage2D(i.TEXTURE_2D,fe,ge,Z.width,Z.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,we,te)}else t.texImage2D(i.TEXTURE_2D,0,ge,be,we,te);m(S)&&y(J),pe.__version=he.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Y(A,S,V){if(S.image.length!==6)return;const J=ee(A,S),re=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+V);const he=n.get(re);if(re.version!==he.__version||J===!0){t.activeTexture(i.TEXTURE0+V);const pe=nt.getPrimaries(nt.workingColorSpace),$=S.colorSpace===Fi?null:nt.getPrimaries(S.colorSpace),te=S.colorSpace===Fi||pe===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const be=S.isCompressedTexture||S.image[0].isCompressedTexture,we=S.image[0]&&S.image[0].isDataTexture,ge=[];for(let ae=0;ae<6;ae++)!be&&!we?ge[ae]=g(S.image[ae],!0,s.maxCubemapSize):ge[ae]=we?S.image[ae].image:S.image[ae],ge[ae]=le(S,ge[ae]);const de=ge[0],Xe=r.convert(S.format,S.colorSpace),je=r.convert(S.type),ot=x(S.internalFormat,Xe,je,S.normalized,S.colorSpace),I=S.isVideoTexture!==!0,fe=he.__version===void 0||J===!0,Z=re.dataReady;let Te=T(S,de);Ge(i.TEXTURE_CUBE_MAP,S);let _e;if(be){I&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,ot,de.width,de.height);for(let ae=0;ae<6;ae++){_e=ge[ae].mipmaps;for(let Ue=0;Ue<_e.length;Ue++){const Ke=_e[Ue];S.format!==bn?Xe!==null?I?Z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue,0,0,Ke.width,Ke.height,Xe,Ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue,ot,Ke.width,Ke.height,0,Ke.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue,0,0,Ke.width,Ke.height,Xe,je,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue,ot,Ke.width,Ke.height,0,Xe,je,Ke.data)}}}else{if(_e=S.mipmaps,I&&fe){_e.length>0&&Te++;const ae=at(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,ot,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(we){I?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ge[ae].width,ge[ae].height,Xe,je,ge[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ot,ge[ae].width,ge[ae].height,0,Xe,je,ge[ae].data);for(let Ue=0;Ue<_e.length;Ue++){const Et=_e[Ue].image[ae].image;I?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue+1,0,0,Et.width,Et.height,Xe,je,Et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue+1,ot,Et.width,Et.height,0,Xe,je,Et.data)}}else{I?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Xe,je,ge[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ot,Xe,je,ge[ae]);for(let Ue=0;Ue<_e.length;Ue++){const Ke=_e[Ue];I?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue+1,0,0,Xe,je,Ke.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue+1,ot,Xe,je,Ke.image[ae])}}}m(S)&&y(i.TEXTURE_CUBE_MAP),he.__version=re.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ce(A,S,V,J,re,he){const pe=r.convert(V.format,V.colorSpace),$=r.convert(V.type),te=x(V.internalFormat,pe,$,V.normalized,V.colorSpace),be=n.get(S),we=n.get(V);if(we.__renderTarget=S,!be.__hasExternalTextures){const ge=Math.max(1,S.width>>he),de=Math.max(1,S.height>>he);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,he,te,ge,de,S.depth,0,pe,$,null):t.texImage2D(re,he,te,ge,de,0,pe,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Pe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,re,we.__webglTexture,0,Ve(S)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,re,we.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(A,S,V){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){const J=S.depthTexture,re=J&&J.isDepthTexture?J.type:null,he=R(S.stencilBuffer,re),pe=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Pe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve(S),he,S.width,S.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve(S),he,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,he,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,A)}else{const J=S.textures;for(let re=0;re<J.length;re++){const he=J[re],pe=r.convert(he.format,he.colorSpace),$=r.convert(he.type),te=x(he.internalFormat,pe,$,he.normalized,he.colorSpace);Pe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve(S),te,S.width,S.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve(S),te,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,te,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(A,S,V){const J=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=n.get(S.depthTexture);if(re.__renderTarget=S,(!re.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),J){if(re.__webglInit===void 0&&(re.__webglInit=!0,S.depthTexture.addEventListener("dispose",C)),re.__webglTexture===void 0){re.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,S.depthTexture);const be=r.convert(S.depthTexture.format),we=r.convert(S.depthTexture.type);let ge;S.depthTexture.format===vi?ge=i.DEPTH_COMPONENT24:S.depthTexture.format===Qi&&(ge=i.DEPTH24_STENCIL8);for(let de=0;de<6;de++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ge,S.width,S.height,0,be,we,null)}}else ie(S.depthTexture,0);const he=re.__webglTexture,pe=Ve(S),$=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,te=S.depthTexture.format===Qi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===vi)Pe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,$,he,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,te,$,he,0);else if(S.depthTexture.format===Qi)Pe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,$,he,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,te,$,he,0);else throw new Error("Unknown depthTexture format")}function j(A){const S=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const J=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){const re=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",re)};J.addEventListener("dispose",re),S.__depthDisposeCallback=re}S.__boundDepthTexture=J}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(V)for(let J=0;J<6;J++)Ie(S.__webglFramebuffer[J],A,J);else{const J=A.texture.mipmaps;J&&J.length>0?Ie(S.__webglFramebuffer[0],A,0):Ie(S.__webglFramebuffer,A,0)}else if(V){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=i.createRenderbuffer(),ze(S.__webglDepthbuffer[J],A,!1);else{const re=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=S.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,he)}}else{const J=A.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ze(S.__webglDepthbuffer,A,!1);else{const re=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,he)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(A,S,V){const J=n.get(A);S!==void 0&&ce(J.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&j(A)}function Q(A){const S=A.texture,V=n.get(A),J=n.get(S);A.addEventListener("dispose",v);const re=A.textures,he=A.isWebGLCubeRenderTarget===!0,pe=re.length>1;if(pe||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=S.version,a.memory.textures++),he){V.__webglFramebuffer=[];for(let $=0;$<6;$++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[$]=[];for(let te=0;te<S.mipmaps.length;te++)V.__webglFramebuffer[$][te]=i.createFramebuffer()}else V.__webglFramebuffer[$]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let $=0;$<S.mipmaps.length;$++)V.__webglFramebuffer[$]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(pe)for(let $=0,te=re.length;$<te;$++){const be=n.get(re[$]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Pe(A)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let $=0;$<re.length;$++){const te=re[$];V.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[$]);const be=r.convert(te.format,te.colorSpace),we=r.convert(te.type),ge=x(te.internalFormat,be,we,te.normalized,te.colorSpace,A.isXRRenderTarget===!0),de=Ve(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,de,ge,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,V.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(V.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,S);for(let $=0;$<6;$++)if(S.mipmaps&&S.mipmaps.length>0)for(let te=0;te<S.mipmaps.length;te++)ce(V.__webglFramebuffer[$][te],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,te);else ce(V.__webglFramebuffer[$],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);m(S)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let $=0,te=re.length;$<te;$++){const be=re[$],we=n.get(be);let ge=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ge=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,we.__webglTexture),Ge(ge,be),ce(V.__webglFramebuffer,A,be,i.COLOR_ATTACHMENT0+$,ge,0),m(be)&&y(ge)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,J.__webglTexture),Ge($,S),S.mipmaps&&S.mipmaps.length>0)for(let te=0;te<S.mipmaps.length;te++)ce(V.__webglFramebuffer[te],A,S,i.COLOR_ATTACHMENT0,$,te);else ce(V.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,$,0);m(S)&&y($),t.unbindTexture()}A.depthBuffer&&j(A)}function me(A){const S=A.textures;for(let V=0,J=S.length;V<J;V++){const re=S[V];if(m(re)){const he=M(A),pe=n.get(re).__webglTexture;t.bindTexture(he,pe),y(he),t.unbindTexture()}}}const ue=[],Le=[];function L(A){if(A.samples>0){if(Pe(A)===!1){const S=A.textures,V=A.width,J=A.height;let re=i.COLOR_BUFFER_BIT;const he=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(A),$=S.length>1;if($)for(let be=0;be<S.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const te=A.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let be=0;be<S.length;be++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[be]);const we=n.get(S[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,we,0)}i.blitFramebuffer(0,0,V,J,0,0,V,J,re,i.NEAREST),l===!0&&(ue.length=0,Le.length=0,ue.push(i.COLOR_ATTACHMENT0+be),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ue.push(he),Le.push(he),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Le)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let be=0;be<S.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,pe.__webglColorRenderbuffer[be]);const we=n.get(S[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,we,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Ve(A){return Math.min(s.maxSamples,A.samples)}function Pe(A){const S=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function He(A){const S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function le(A,S){const V=A.colorSpace,J=A.format,re=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==fn&&V!==Fi&&(nt.getTransfer(V)===ct?(J!==bn||re!==dn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",V)),S}function at(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=X,this.getTextureUnits=B,this.setTextureUnits=N,this.setTexture2D=ie,this.setTexture2DArray=oe,this.setTexture3D=xe,this.setTextureCube=Me,this.rebindTextures=ne,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function KM(i,e){function t(n,s=Fi){let r;const a=nt.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===bh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Th)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pp)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===up)return i.BYTE;if(n===dp)return i.SHORT;if(n===Xr)return i.UNSIGNED_SHORT;if(n===Mh)return i.INT;if(n===jn)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===xi)return i.HALF_FLOAT;if(n===mp)return i.ALPHA;if(n===gp)return i.RGB;if(n===bn)return i.RGBA;if(n===vi)return i.DEPTH_COMPONENT;if(n===Qi)return i.DEPTH_STENCIL;if(n===Eh)return i.RED;if(n===Ah)return i.RED_INTEGER;if(n===ss)return i.RG;if(n===wh)return i.RG_INTEGER;if(n===Rh)return i.RGBA_INTEGER;if(n===co||n===ho||n===uo||n===fo)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vc||n===yc||n===Sc||n===Mc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bc||n===Tc||n===Ec||n===Ac||n===wc||n===xo||n===Rc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bc||n===Tc)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ec)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ac)return r.COMPRESSED_R11_EAC;if(n===wc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===xo)return r.COMPRESSED_RG11_EAC;if(n===Rc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Cc||n===Pc||n===Lc||n===Dc||n===Ic||n===Nc||n===Uc||n===Oc||n===Fc||n===Bc||n===kc||n===zc||n===Vc||n===Hc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Cc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ic)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gc||n===Wc||n===Xc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Gc)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qc||n===Yc||n===vo||n===Kc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===qc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const $M=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ZM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Cp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Zn({vertexShader:$M,fragmentShader:jM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new Hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JM extends Tn{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null;const _=typeof XRWebGLBinding<"u",g=new ZM,m={},y=t.getContextAttributes();let M=null,x=null;const R=[],T=[],C=new se;let v=null;const w=new jt;w.viewport=new xt;const D=new jt;D.viewport=new xt;const P=[w,D],F=new q_;let X=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let O=R[ee];return O===void 0&&(O=new cl,R[ee]=O),O.getTargetRaySpace()},this.getControllerGrip=function(ee){let O=R[ee];return O===void 0&&(O=new cl,R[ee]=O),O.getGripSpace()},this.getHand=function(ee){let O=R[ee];return O===void 0&&(O=new cl,R[ee]=O),O.getHandSpace()};function N(ee){const O=T.indexOf(ee.inputSource);if(O===-1)return;const U=R[O];U!==void 0&&(U.update(ee.inputSource,ee.frame,c||a),U.dispatchEvent({type:ee.type,data:ee.inputSource}))}function z(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",H);for(let ee=0;ee<R.length;ee++){const O=T[ee];O!==null&&(T[ee]=null,R[ee].disconnect(O))}X=null,B=null,g.reset();for(const ee in m)delete m[ee];e.setRenderTarget(M),f=null,u=null,d=null,s=null,x=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",z),s.addEventListener("inputsourceschange",H),y.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let U=null,K=null,Y=null;y.depth&&(Y=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,U=y.stencil?Qi:vi,K=y.stencil?qr:jn);const ce={colorFormat:t.RGBA8,depthFormat:Y,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(ce),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new $n(u.textureWidth,u.textureHeight,{format:bn,type:dn,depthTexture:new qs(u.textureWidth,u.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const U={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,U),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new $n(f.framebufferWidth,f.framebufferHeight,{format:bn,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ge.setContext(s),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(ee){for(let O=0;O<ee.removed.length;O++){const U=ee.removed[O],K=T.indexOf(U);K>=0&&(T[K]=null,R[K].disconnect(U))}for(let O=0;O<ee.added.length;O++){const U=ee.added[O];let K=T.indexOf(U);if(K===-1){for(let ce=0;ce<R.length;ce++)if(ce>=T.length){T.push(U),K=ce;break}else if(T[ce]===null){T[ce]=U,K=ce;break}if(K===-1)break}const Y=R[K];Y&&Y.connect(U)}}const ie=new E,oe=new E;function xe(ee,O,U){ie.setFromMatrixPosition(O.matrixWorld),oe.setFromMatrixPosition(U.matrixWorld);const K=ie.distanceTo(oe),Y=O.projectionMatrix.elements,ce=U.projectionMatrix.elements,ze=Y[14]/(Y[10]-1),Ie=Y[14]/(Y[10]+1),j=(Y[9]+1)/Y[5],ne=(Y[9]-1)/Y[5],Q=(Y[8]-1)/Y[0],me=(ce[8]+1)/ce[0],ue=ze*Q,Le=ze*me,L=K/(-Q+me),Ve=L*-Q;if(O.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Ve),ee.translateZ(L),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Y[10]===-1)ee.projectionMatrix.copy(O.projectionMatrix),ee.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{const Pe=ze+L,He=Ie+L,le=ue-Ve,at=Le+(K-Ve),A=j*Ie/He*Pe,S=ne*Ie/He*Pe;ee.projectionMatrix.makePerspective(le,at,A,S,Pe,He),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function Me(ee,O){O===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(O.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let O=ee.near,U=ee.far;g.texture!==null&&(g.depthNear>0&&(O=g.depthNear),g.depthFar>0&&(U=g.depthFar)),F.near=D.near=w.near=O,F.far=D.far=w.far=U,(X!==F.near||B!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),X=F.near,B=F.far),F.layers.mask=ee.layers.mask|6,w.layers.mask=F.layers.mask&-5,D.layers.mask=F.layers.mask&-3;const K=ee.parent,Y=F.cameras;Me(F,K);for(let ce=0;ce<Y.length;ce++)Me(Y[ce],K);Y.length===2?xe(F,w,D):F.projectionMatrix.copy(w.projectionMatrix),Ce(ee,F,K)};function Ce(ee,O,U){U===null?ee.matrix.copy(O.matrixWorld):(ee.matrix.copy(U.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(O.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(O.projectionMatrix),ee.projectionMatrixInverse.copy(O.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Xs*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(ee){l=ee,u!==null&&(u.fixedFoveation=ee),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ee)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(ee){return m[ee]};let Ye=null;function it(ee,O){if(h=O.getViewerPose(c||a),p=O,h!==null){const U=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let K=!1;U.length!==F.cameras.length&&(F.cameras.length=0,K=!0);for(let Ie=0;Ie<U.length;Ie++){const j=U[Ie];let ne=null;if(f!==null)ne=f.getViewport(j);else{const me=d.getViewSubImage(u,j);ne=me.viewport,Ie===0&&(e.setRenderTargetTextures(x,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(x))}let Q=P[Ie];Q===void 0&&(Q=new jt,Q.layers.enable(Ie),Q.viewport=new xt,P[Ie]=Q),Q.matrix.fromArray(j.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(j.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ne.x,ne.y,ne.width,ne.height),Ie===0&&(F.matrix.copy(Q.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),K===!0&&F.cameras.push(Q)}const Y=s.enabledFeatures;if(Y&&Y.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const Ie=d.getDepthInformation(U[0]);Ie&&Ie.isValid&&Ie.texture&&g.init(Ie,s.renderState)}if(Y&&Y.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let Ie=0;Ie<U.length;Ie++){const j=U[Ie].camera;if(j){let ne=m[j];ne||(ne=new Cp,m[j]=ne);const Q=d.getCameraImage(j);ne.sourceTexture=Q}}}}for(let U=0;U<R.length;U++){const K=T[U],Y=R[U];K!==null&&Y!==void 0&&Y.update(K,O,c||a)}Ye&&Ye(ee,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),p=null}const Ge=new Kp;Ge.setAnimationLoop(it),this.setAnimationLoop=function(ee){Ye=ee},this.dispose=function(){}}}const QM=new Ee,tm=new qe;tm.set(-1,0,0,0,1,0,0,0,1);function eb(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,kp(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,M,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,x)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,y,M):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===sn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===sn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const y=e.get(m),M=y.envMap,x=y.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(QM.makeRotationFromEuler(x)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(tm),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=M*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===sn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function tb(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const x=M.program;n.uniformBlockBinding(y,x)}function c(y,M){let x=s[y.id];x===void 0&&(p(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",g));const R=M.program;n.updateUBOMapping(y,R);const T=e.render.frame;r[y.id]!==T&&(u(y),r[y.id]=T)}function h(y){const M=d();y.__bindingPointIndex=M;const x=i.createBuffer(),R=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const M=s[y.id],x=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,C=x.length;T<C;T++){const v=Array.isArray(x[T])?x[T]:[x[T]];for(let w=0,D=v.length;w<D;w++){const P=v[w];if(f(P,T,w,R)===!0){const F=P.__offset,X=Array.isArray(P.value)?P.value:[P.value];let B=0;for(let N=0;N<X.length;N++){const z=X[N],H=_(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,F+B,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):ArrayBuffer.isView(z)?P.__data.set(new z.constructor(z.buffer,z.byteOffset,P.__data.length)):(z.toArray(P.__data,B),B+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,M,x,R){const T=y.value,C=M+"_"+x;if(R[C]===void 0)return typeof T=="number"||typeof T=="boolean"?R[C]=T:ArrayBuffer.isView(T)?R[C]=T.slice():R[C]=T.clone(),!0;{const v=R[C];if(typeof T=="number"||typeof T=="boolean"){if(v!==T)return R[C]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(v.equals(T)===!1)return v.copy(T),!0}}return!1}function p(y){const M=y.uniforms;let x=0;const R=16;for(let C=0,v=M.length;C<v;C++){const w=Array.isArray(M[C])?M[C]:[M[C]];for(let D=0,P=w.length;D<P;D++){const F=w[D],X=Array.isArray(F.value)?F.value:[F.value];for(let B=0,N=X.length;B<N;B++){const z=X[B],H=_(z),ie=x%R,oe=ie%H.boundary,xe=ie+oe;x+=oe,xe!==0&&R-xe<H.storage&&(x+=R-xe),F.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=H.storage}}}const T=x%R;return T>0&&(x+=R-T),y.__size=x,y.__cache={},this}function _(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):De("WebGLRenderer: Unsupported uniform value type.",y),M}function g(y){const M=y.target;M.removeEventListener("dispose",g);const x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}const nb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vn=null;function ib(){return Vn===null&&(Vn=new Nh(nb,16,16,ss,xi),Vn.name="DFG_LUT",Vn.minFilter=St,Vn.magFilter=St,Vn.wrapS=qn,Vn.wrapT=qn,Vn.generateMipmaps=!1,Vn.needsUpdate=!0),Vn}class sb{constructor(e={}){const{canvas:t=Yg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=dn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=f,g=new Set([Rh,wh,Ah]),m=new Set([dn,jn,Xr,qr,bh,Th]),y=new Uint32Array(4),M=new Int32Array(4),x=new E;let R=null,T=null;const C=[],v=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let P=!1,F=null;this._outputColorSpace=It;let X=0,B=0,N=null,z=-1,H=null;const ie=new xt,oe=new xt;let xe=null;const Me=new ke(0);let Ce=0,Ye=t.width,it=t.height,Ge=1,ee=null,O=null;const U=new xt(0,0,Ye,it),K=new xt(0,0,Ye,it);let Y=!1;const ce=new ko;let ze=!1,Ie=!1;const j=new Ee,ne=new E,Q=new xt,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function Le(){return N===null?Ge:1}let L=n;function Ve(b,k){return t.getContext(b,k)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yh}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Ke,!1),L===null){const k="webgl2";if(L=Ve(k,b),L===null)throw Ve(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Be("WebGLRenderer: "+b.message),b}let Pe,He,le,at,A,S,V,J,re,he,pe,$,te,be,we,ge,de,Xe,je,ot,I,fe,Z;function Te(){Pe=new iS(L),Pe.init(),I=new KM(L,Pe),He=new $y(L,Pe,e,I),le=new qM(L,Pe),He.reversedDepthBuffer&&u&&le.buffers.depth.setReversed(!0),at=new aS(L),A=new DM,S=new YM(L,Pe,le,A,He,I,at),V=new nS(D),J=new hx(L),fe=new Yy(L,J),re=new sS(L,J,at,fe),he=new lS(L,re,J,fe,at),Xe=new oS(L,He,S),we=new jy(A),pe=new LM(D,V,Pe,He,fe,we),$=new eb(D,A),te=new NM,be=new zM(Pe),de=new qy(D,V,le,he,p,l),ge=new XM(D,he,He),Z=new tb(L,at,He,le),je=new Ky(L,Pe,at),ot=new rS(L,Pe,at),at.programs=pe.programs,D.capabilities=He,D.extensions=Pe,D.properties=A,D.renderLists=te,D.shadowMap=ge,D.state=le,D.info=at}Te(),_!==dn&&(w=new hS(_,t.width,t.height,s,r));const _e=new JM(D,L);this.xr=_e,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=Pe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Pe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Ge},this.setPixelRatio=function(b){b!==void 0&&(Ge=b,this.setSize(Ye,it,!1))},this.getSize=function(b){return b.set(Ye,it)},this.setSize=function(b,k,q=!0){if(_e.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}Ye=b,it=k,t.width=Math.floor(b*Ge),t.height=Math.floor(k*Ge),q===!0&&(t.style.width=b+"px",t.style.height=k+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(Ye*Ge,it*Ge).floor()},this.setDrawingBufferSize=function(b,k,q){Ye=b,it=k,Ge=q,t.width=Math.floor(b*q),t.height=Math.floor(k*q),this.setViewport(0,0,b,k)},this.setEffects=function(b){if(_===dn){Be("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let k=0;k<b.length;k++)if(b[k].isOutputPass===!0){De("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ie)},this.getViewport=function(b){return b.copy(U)},this.setViewport=function(b,k,q,G){b.isVector4?U.set(b.x,b.y,b.z,b.w):U.set(b,k,q,G),le.viewport(ie.copy(U).multiplyScalar(Ge).round())},this.getScissor=function(b){return b.copy(K)},this.setScissor=function(b,k,q,G){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,k,q,G),le.scissor(oe.copy(K).multiplyScalar(Ge).round())},this.getScissorTest=function(){return Y},this.setScissorTest=function(b){le.setScissorTest(Y=b)},this.setOpaqueSort=function(b){ee=b},this.setTransparentSort=function(b){O=b},this.getClearColor=function(b){return b.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,q=!0){let G=0;if(b){let W=!1;if(N!==null){const Se=N.texture.format;W=g.has(Se)}if(W){const Se=N.texture.type,Re=m.has(Se),ye=de.getClearColor(),Ne=de.getClearAlpha(),Oe=ye.r,$e=ye.g,et=ye.b;Re?(y[0]=Oe,y[1]=$e,y[2]=et,y[3]=Ne,L.clearBufferuiv(L.COLOR,0,y)):(M[0]=Oe,M[1]=$e,M[2]=et,M[3]=Ne,L.clearBufferiv(L.COLOR,0,M))}else G|=L.COLOR_BUFFER_BIT}k&&(G|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),F=b},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Ke,!1),de.dispose(),te.dispose(),be.dispose(),A.dispose(),V.dispose(),he.dispose(),fe.dispose(),Z.dispose(),pe.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",pu),_e.removeEventListener("sessionend",mu),Gi.stop()};function ae(b){b.preventDefault(),So("WebGLRenderer: Context Lost."),P=!0}function Ue(){So("WebGLRenderer: Context Restored."),P=!1;const b=at.autoReset,k=ge.enabled,q=ge.autoUpdate,G=ge.needsUpdate,W=ge.type;Te(),at.autoReset=b,ge.enabled=k,ge.autoUpdate=q,ge.needsUpdate=G,ge.type=W}function Ke(b){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Et(b){const k=b.target;k.removeEventListener("dispose",Et),dt(k)}function dt(b){ei(b),A.remove(b)}function ei(b){const k=A.get(b).programs;k!==void 0&&(k.forEach(function(q){pe.releaseProgram(q)}),b.isShaderMaterial&&pe.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,q,G,W,Se){k===null&&(k=me);const Re=W.isMesh&&W.matrixWorld.determinant()<0,ye=sg(b,k,q,G,W);le.setMaterial(G,Re);let Ne=q.index,Oe=1;if(G.wireframe===!0){if(Ne=re.getWireframeAttribute(q),Ne===void 0)return;Oe=2}const $e=q.drawRange,et=q.attributes.position;let Fe=$e.start*Oe,ft=($e.start+$e.count)*Oe;Se!==null&&(Fe=Math.max(Fe,Se.start*Oe),ft=Math.min(ft,(Se.start+Se.count)*Oe)),Ne!==null?(Fe=Math.max(Fe,0),ft=Math.min(ft,Ne.count)):et!=null&&(Fe=Math.max(Fe,0),ft=Math.min(ft,et.count));const At=ft-Fe;if(At<0||At===1/0)return;fe.setup(W,G,ye,q,Ne);let bt,gt=je;if(Ne!==null&&(bt=J.get(Ne),gt=ot,gt.setIndex(bt)),W.isMesh)G.wireframe===!0?(le.setLineWidth(G.wireframeLinewidth*Le()),gt.setMode(L.LINES)):gt.setMode(L.TRIANGLES);else if(W.isLine){let Ht=G.linewidth;Ht===void 0&&(Ht=1),le.setLineWidth(Ht*Le()),W.isLineSegments?gt.setMode(L.LINES):W.isLineLoop?gt.setMode(L.LINE_LOOP):gt.setMode(L.LINE_STRIP)}else W.isPoints?gt.setMode(L.POINTS):W.isSprite&&gt.setMode(L.TRIANGLES);if(W.isBatchedMesh)if(Pe.get("WEBGL_multi_draw"))gt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ht=W._multiDrawStarts,Ae=W._multiDrawCounts,cn=W._multiDrawCount,rt=Ne?J.get(Ne).bytesPerElement:1,gn=A.get(G).currentProgram.getUniforms();for(let kn=0;kn<cn;kn++)gn.setValue(L,"_gl_DrawID",kn),gt.render(Ht[kn]/rt,Ae[kn])}else if(W.isInstancedMesh)gt.renderInstances(Fe,At,W.count);else if(q.isInstancedBufferGeometry){const Ht=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ae=Math.min(q.instanceCount,Ht);gt.renderInstances(Fe,At,Ae)}else gt.render(Fe,At)};function Bn(b,k,q){b.transparent===!0&&b.side===tn&&b.forceSinglePass===!1?(b.side=sn,b.needsUpdate=!0,ua(b,k,q),b.side=_i,b.needsUpdate=!0,ua(b,k,q),b.side=tn):ua(b,k,q)}this.compile=function(b,k,q=null){q===null&&(q=b),T=be.get(q),T.init(k),v.push(T),q.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),b!==q&&b.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights();const G=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Se=W.material;if(Se)if(Array.isArray(Se))for(let Re=0;Re<Se.length;Re++){const ye=Se[Re];Bn(ye,q,W),G.add(ye)}else Bn(Se,q,W),G.add(Se)}),T=v.pop(),G},this.compileAsync=function(b,k,q=null){const G=this.compile(b,k,q);return new Promise(W=>{function Se(){if(G.forEach(function(Re){A.get(Re).currentProgram.isReady()&&G.delete(Re)}),G.size===0){W(b);return}setTimeout(Se,10)}Pe.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Qo=null;function ng(b){Qo&&Qo(b)}function pu(){Gi.stop()}function mu(){Gi.start()}const Gi=new Kp;Gi.setAnimationLoop(ng),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(b){Qo=b,_e.setAnimationLoop(b),b===null?Gi.stop():Gi.start()},_e.addEventListener("sessionstart",pu),_e.addEventListener("sessionend",mu),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;F!==null&&F.renderStart(b,k);const q=_e.enabled===!0&&_e.isPresenting===!0,G=w!==null&&(N===null||q)&&w.begin(D,N);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(k),k=_e.getCamera()),b.isScene===!0&&b.onBeforeRender(D,b,k,N),T=be.get(b,v.length),T.init(k),T.state.textureUnits=S.getTextureUnits(),v.push(T),j.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ce.setFromProjectionMatrix(j,Yn,k.reversedDepth),Ie=this.localClippingEnabled,ze=we.init(this.clippingPlanes,Ie),R=te.get(b,C.length),R.init(),C.push(R),_e.enabled===!0&&_e.isPresenting===!0){const Re=D.xr.getDepthSensingMesh();Re!==null&&el(Re,k,-1/0,D.sortObjects)}el(b,k,0,D.sortObjects),R.finish(),D.sortObjects===!0&&R.sort(ee,O),ue=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,ue&&de.addToRenderList(R,b),this.info.render.frame++,ze===!0&&we.beginShadows();const W=T.state.shadowsArray;if(ge.render(W,b,k),ze===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&w.hasRenderPass())===!1){const Re=R.opaque,ye=R.transmissive;if(T.setupLights(),k.isArrayCamera){const Ne=k.cameras;if(ye.length>0)for(let Oe=0,$e=Ne.length;Oe<$e;Oe++){const et=Ne[Oe];_u(Re,ye,b,et)}ue&&de.render(b);for(let Oe=0,$e=Ne.length;Oe<$e;Oe++){const et=Ne[Oe];gu(R,b,et,et.viewport)}}else ye.length>0&&_u(Re,ye,b,k),ue&&de.render(b),gu(R,b,k)}N!==null&&B===0&&(S.updateMultisampleRenderTarget(N),S.updateRenderTargetMipmap(N)),G&&w.end(D),b.isScene===!0&&b.onAfterRender(D,b,k),fe.resetDefaultState(),z=-1,H=null,v.pop(),v.length>0?(T=v[v.length-1],S.setTextureUnits(T.state.textureUnits),ze===!0&&we.setGlobalState(D.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?R=C[C.length-1]:R=null,F!==null&&F.renderEnd()};function el(b,k,q,G){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLightProbeGrid)T.pushLightProbeGrid(b);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ce.intersectsSprite(b)){G&&Q.setFromMatrixPosition(b.matrixWorld).applyMatrix4(j);const Re=he.update(b),ye=b.material;ye.visible&&R.push(b,Re,ye,q,Q.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ce.intersectsObject(b))){const Re=he.update(b),ye=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Q.copy(b.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Q.copy(Re.boundingSphere.center)),Q.applyMatrix4(b.matrixWorld).applyMatrix4(j)),Array.isArray(ye)){const Ne=Re.groups;for(let Oe=0,$e=Ne.length;Oe<$e;Oe++){const et=Ne[Oe],Fe=ye[et.materialIndex];Fe&&Fe.visible&&R.push(b,Re,Fe,q,Q.z,et)}}else ye.visible&&R.push(b,Re,ye,q,Q.z,null)}}const Se=b.children;for(let Re=0,ye=Se.length;Re<ye;Re++)el(Se[Re],k,q,G)}function gu(b,k,q,G){const{opaque:W,transmissive:Se,transparent:Re}=b;T.setupLightsView(q),ze===!0&&we.setGlobalState(D.clippingPlanes,q),G&&le.viewport(ie.copy(G)),W.length>0&&ha(W,k,q),Se.length>0&&ha(Se,k,q),Re.length>0&&ha(Re,k,q),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function _u(b,k,q,G){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){const Fe=Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new $n(1,1,{generateMipmaps:!0,type:Fe?xi:dn,minFilter:di,samples:Math.max(4,He.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace})}const Se=T.state.transmissionRenderTarget[G.id],Re=G.viewport||ie;Se.setSize(Re.z*D.transmissionResolutionScale,Re.w*D.transmissionResolutionScale);const ye=D.getRenderTarget(),Ne=D.getActiveCubeFace(),Oe=D.getActiveMipmapLevel();D.setRenderTarget(Se),D.getClearColor(Me),Ce=D.getClearAlpha(),Ce<1&&D.setClearColor(16777215,.5),D.clear(),ue&&de.render(q);const $e=D.toneMapping;D.toneMapping=Kn;const et=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),ze===!0&&we.setGlobalState(D.clippingPlanes,G),ha(b,q,G),S.updateMultisampleRenderTarget(Se),S.updateRenderTargetMipmap(Se),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let ft=0,At=k.length;ft<At;ft++){const bt=k[ft],{object:gt,geometry:Ht,material:Ae,group:cn}=bt;if(Ae.side===tn&&gt.layers.test(G.layers)){const rt=Ae.side;Ae.side=sn,Ae.needsUpdate=!0,xu(gt,q,G,Ht,Ae,cn),Ae.side=rt,Ae.needsUpdate=!0,Fe=!0}}Fe===!0&&(S.updateMultisampleRenderTarget(Se),S.updateRenderTargetMipmap(Se))}D.setRenderTarget(ye,Ne,Oe),D.setClearColor(Me,Ce),et!==void 0&&(G.viewport=et),D.toneMapping=$e}function ha(b,k,q){const G=k.isScene===!0?k.overrideMaterial:null;for(let W=0,Se=b.length;W<Se;W++){const Re=b[W],{object:ye,geometry:Ne,group:Oe}=Re;let $e=Re.material;$e.allowOverride===!0&&G!==null&&($e=G),ye.layers.test(q.layers)&&xu(ye,k,q,Ne,$e,Oe)}}function xu(b,k,q,G,W,Se){b.onBeforeRender(D,k,q,G,W,Se),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(D,k,q,G,b,Se),W.transparent===!0&&W.side===tn&&W.forceSinglePass===!1?(W.side=sn,W.needsUpdate=!0,D.renderBufferDirect(q,k,G,W,b,Se),W.side=_i,W.needsUpdate=!0,D.renderBufferDirect(q,k,G,W,b,Se),W.side=tn):D.renderBufferDirect(q,k,G,W,b,Se),b.onAfterRender(D,k,q,G,W,Se)}function ua(b,k,q){k.isScene!==!0&&(k=me);const G=A.get(b),W=T.state.lights,Se=T.state.shadowsArray,Re=W.state.version,ye=pe.getParameters(b,W.state,Se,k,q,T.state.lightProbeGridArray),Ne=pe.getProgramCacheKey(ye);let Oe=G.programs;G.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?k.environment:null,G.fog=k.fog;const $e=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;G.envMap=V.get(b.envMap||G.environment,$e),G.envMapRotation=G.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Oe===void 0&&(b.addEventListener("dispose",Et),Oe=new Map,G.programs=Oe);let et=Oe.get(Ne);if(et!==void 0){if(G.currentProgram===et&&G.lightsStateVersion===Re)return yu(b,ye),et}else ye.uniforms=pe.getUniforms(b),F!==null&&b.isNodeMaterial&&F.build(b,q,ye),b.onBeforeCompile(ye,D),et=pe.acquireProgram(ye,Ne),Oe.set(Ne,et),G.uniforms=ye.uniforms;const Fe=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Fe.clippingPlanes=we.uniform),yu(b,ye),G.needsLights=ag(b),G.lightsStateVersion=Re,G.needsLights&&(Fe.ambientLightColor.value=W.state.ambient,Fe.lightProbe.value=W.state.probe,Fe.directionalLights.value=W.state.directional,Fe.directionalLightShadows.value=W.state.directionalShadow,Fe.spotLights.value=W.state.spot,Fe.spotLightShadows.value=W.state.spotShadow,Fe.rectAreaLights.value=W.state.rectArea,Fe.ltc_1.value=W.state.rectAreaLTC1,Fe.ltc_2.value=W.state.rectAreaLTC2,Fe.pointLights.value=W.state.point,Fe.pointLightShadows.value=W.state.pointShadow,Fe.hemisphereLights.value=W.state.hemi,Fe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Fe.spotLightMatrix.value=W.state.spotLightMatrix,Fe.spotLightMap.value=W.state.spotLightMap,Fe.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=T.state.lightProbeGridArray.length>0,G.currentProgram=et,G.uniformsList=null,et}function vu(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=po.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function yu(b,k){const q=A.get(b);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function ig(b,k){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;x.setFromMatrixPosition(k.matrixWorld);for(let q=0,G=b.length;q<G;q++){const W=b[q];if(W.texture!==null&&W.boundingBox.containsPoint(x))return W}return null}function sg(b,k,q,G,W){k.isScene!==!0&&(k=me),S.resetTextureUnits();const Se=k.fog,Re=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?k.environment:null,ye=N===null?D.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:nt.workingColorSpace,Ne=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Oe=V.get(G.envMap||Re,Ne),$e=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,et=!!q.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Fe=!!q.morphAttributes.position,ft=!!q.morphAttributes.normal,At=!!q.morphAttributes.color;let bt=Kn;G.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(bt=D.toneMapping);const gt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ht=gt!==void 0?gt.length:0,Ae=A.get(G),cn=T.state.lights;if(ze===!0&&(Ie===!0||b!==H)){const vt=b===H&&G.id===z;we.setState(G,b,vt)}let rt=!1;G.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==cn.state.version||Ae.outputColorSpace!==ye||W.isBatchedMesh&&Ae.batching===!1||!W.isBatchedMesh&&Ae.batching===!0||W.isBatchedMesh&&Ae.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ae.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ae.instancing===!1||!W.isInstancedMesh&&Ae.instancing===!0||W.isSkinnedMesh&&Ae.skinning===!1||!W.isSkinnedMesh&&Ae.skinning===!0||W.isInstancedMesh&&Ae.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ae.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ae.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ae.instancingMorph===!1&&W.morphTexture!==null||Ae.envMap!==Oe||G.fog===!0&&Ae.fog!==Se||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==we.numPlanes||Ae.numIntersection!==we.numIntersection)||Ae.vertexAlphas!==$e||Ae.vertexTangents!==et||Ae.morphTargets!==Fe||Ae.morphNormals!==ft||Ae.morphColors!==At||Ae.toneMapping!==bt||Ae.morphTargetsCount!==Ht||!!Ae.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(rt=!0):(rt=!0,Ae.__version=G.version);let gn=Ae.currentProgram;rt===!0&&(gn=ua(G,k,W),F&&G.isNodeMaterial&&F.onUpdateProgram(G,gn,Ae));let kn=!1,bi=!1,os=!1;const _t=gn.getUniforms(),wt=Ae.uniforms;if(le.useProgram(gn.program)&&(kn=!0,bi=!0,os=!0),G.id!==z&&(z=G.id,bi=!0),Ae.needsLights){const vt=ig(T.state.lightProbeGridArray,W);Ae.lightProbeGrid!==vt&&(Ae.lightProbeGrid=vt,bi=!0)}if(kn||H!==b){le.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),_t.setValue(L,"projectionMatrix",b.projectionMatrix),_t.setValue(L,"viewMatrix",b.matrixWorldInverse);const Ei=_t.map.cameraPosition;Ei!==void 0&&Ei.setValue(L,ne.setFromMatrixPosition(b.matrixWorld)),He.logarithmicDepthBuffer&&_t.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&_t.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),H!==b&&(H=b,bi=!0,os=!0)}if(Ae.needsLights&&(cn.state.directionalShadowMap.length>0&&_t.setValue(L,"directionalShadowMap",cn.state.directionalShadowMap,S),cn.state.spotShadowMap.length>0&&_t.setValue(L,"spotShadowMap",cn.state.spotShadowMap,S),cn.state.pointShadowMap.length>0&&_t.setValue(L,"pointShadowMap",cn.state.pointShadowMap,S)),W.isSkinnedMesh){_t.setOptional(L,W,"bindMatrix"),_t.setOptional(L,W,"bindMatrixInverse");const vt=W.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),_t.setValue(L,"boneTexture",vt.boneTexture,S))}W.isBatchedMesh&&(_t.setOptional(L,W,"batchingTexture"),_t.setValue(L,"batchingTexture",W._matricesTexture,S),_t.setOptional(L,W,"batchingIdTexture"),_t.setValue(L,"batchingIdTexture",W._indirectTexture,S),_t.setOptional(L,W,"batchingColorTexture"),W._colorsTexture!==null&&_t.setValue(L,"batchingColorTexture",W._colorsTexture,S));const Ti=q.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&Xe.update(W,q,gn),(bi||Ae.receiveShadow!==W.receiveShadow)&&(Ae.receiveShadow=W.receiveShadow,_t.setValue(L,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&k.environment!==null&&(wt.envMapIntensity.value=k.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=ib()),bi){if(_t.setValue(L,"toneMappingExposure",D.toneMappingExposure),Ae.needsLights&&rg(wt,os),Se&&G.fog===!0&&$.refreshFogUniforms(wt,Se),$.refreshMaterialUniforms(wt,G,Ge,it,T.state.transmissionRenderTarget[b.id]),Ae.needsLights&&Ae.lightProbeGrid){const vt=Ae.lightProbeGrid;wt.probesSH.value=vt.texture,wt.probesMin.value.copy(vt.boundingBox.min),wt.probesMax.value.copy(vt.boundingBox.max),wt.probesResolution.value.copy(vt.resolution)}po.upload(L,vu(Ae),wt,S)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(po.upload(L,vu(Ae),wt,S),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&_t.setValue(L,"center",W.center),_t.setValue(L,"modelViewMatrix",W.modelViewMatrix),_t.setValue(L,"normalMatrix",W.normalMatrix),_t.setValue(L,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){const vt=G.uniformsGroups;for(let Ei=0,ls=vt.length;Ei<ls;Ei++){const Su=vt[Ei];Z.update(Su,gn),Z.bind(Su,gn)}}return gn}function rg(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function ag(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(b,k,q){const G=A.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),A.get(b.texture).__webglTexture=k,A.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:q,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,k){const q=A.get(b);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0};const og=L.createFramebuffer();this.setRenderTarget=function(b,k=0,q=0){N=b,X=k,B=q;let G=null,W=!1,Se=!1;if(b){const ye=A.get(b);if(ye.__useDefaultFramebuffer!==void 0){le.bindFramebuffer(L.FRAMEBUFFER,ye.__webglFramebuffer),ie.copy(b.viewport),oe.copy(b.scissor),xe=b.scissorTest,le.viewport(ie),le.scissor(oe),le.setScissorTest(xe),z=-1;return}else if(ye.__webglFramebuffer===void 0)S.setupRenderTarget(b);else if(ye.__hasExternalTextures)S.rebindTextures(b,A.get(b.texture).__webglTexture,A.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const $e=b.depthTexture;if(ye.__boundDepthTexture!==$e){if($e!==null&&A.has($e)&&(b.width!==$e.image.width||b.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(b)}}const Ne=b.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Se=!0);const Oe=A.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Oe[k])?G=Oe[k][q]:G=Oe[k],W=!0):b.samples>0&&S.useMultisampledRTT(b)===!1?G=A.get(b).__webglMultisampledFramebuffer:Array.isArray(Oe)?G=Oe[q]:G=Oe,ie.copy(b.viewport),oe.copy(b.scissor),xe=b.scissorTest}else ie.copy(U).multiplyScalar(Ge).floor(),oe.copy(K).multiplyScalar(Ge).floor(),xe=Y;if(q!==0&&(G=og),le.bindFramebuffer(L.FRAMEBUFFER,G)&&le.drawBuffers(b,G),le.viewport(ie),le.scissor(oe),le.setScissorTest(xe),W){const ye=A.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,ye.__webglTexture,q)}else if(Se){const ye=k;for(let Ne=0;Ne<b.textures.length;Ne++){const Oe=A.get(b.textures[Ne]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ne,Oe.__webglTexture,q,ye)}}else if(b!==null&&q!==0){const ye=A.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ye.__webglTexture,q)}z=-1},this.readRenderTargetPixels=function(b,k,q,G,W,Se,Re,ye=0){if(!(b&&b.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=A.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne){le.bindFramebuffer(L.FRAMEBUFFER,Ne);try{const Oe=b.textures[ye],$e=Oe.format,et=Oe.type;if(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ye),!He.textureFormatReadable($e)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(et)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-G&&q>=0&&q<=b.height-W&&L.readPixels(k,q,G,W,I.convert($e),I.convert(et),Se)}finally{const Oe=N!==null?A.get(N).__webglFramebuffer:null;le.bindFramebuffer(L.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(b,k,q,G,W,Se,Re,ye=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=A.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne)if(k>=0&&k<=b.width-G&&q>=0&&q<=b.height-W){le.bindFramebuffer(L.FRAMEBUFFER,Ne);const Oe=b.textures[ye],$e=Oe.format,et=Oe.type;if(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ye),!He.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Fe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Fe),L.bufferData(L.PIXEL_PACK_BUFFER,Se.byteLength,L.STREAM_READ),L.readPixels(k,q,G,W,I.convert($e),I.convert(et),0);const ft=N!==null?A.get(N).__webglFramebuffer:null;le.bindFramebuffer(L.FRAMEBUFFER,ft);const At=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Kg(L,At,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Fe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Se),L.deleteBuffer(Fe),L.deleteSync(At),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,k=null,q=0){const G=Math.pow(2,-q),W=Math.floor(b.image.width*G),Se=Math.floor(b.image.height*G),Re=k!==null?k.x:0,ye=k!==null?k.y:0;S.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,Re,ye,W,Se),le.unbindTexture()};const lg=L.createFramebuffer(),cg=L.createFramebuffer();this.copyTextureToTexture=function(b,k,q=null,G=null,W=0,Se=0){let Re,ye,Ne,Oe,$e,et,Fe,ft,At;const bt=b.isCompressedTexture?b.mipmaps[Se]:b.image;if(q!==null)Re=q.max.x-q.min.x,ye=q.max.y-q.min.y,Ne=q.isBox3?q.max.z-q.min.z:1,Oe=q.min.x,$e=q.min.y,et=q.isBox3?q.min.z:0;else{const wt=Math.pow(2,-W);Re=Math.floor(bt.width*wt),ye=Math.floor(bt.height*wt),b.isDataArrayTexture?Ne=bt.depth:b.isData3DTexture?Ne=Math.floor(bt.depth*wt):Ne=1,Oe=0,$e=0,et=0}G!==null?(Fe=G.x,ft=G.y,At=G.z):(Fe=0,ft=0,At=0);const gt=I.convert(k.format),Ht=I.convert(k.type);let Ae;k.isData3DTexture?(S.setTexture3D(k,0),Ae=L.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(S.setTexture2DArray(k,0),Ae=L.TEXTURE_2D_ARRAY):(S.setTexture2D(k,0),Ae=L.TEXTURE_2D),le.activeTexture(L.TEXTURE0),le.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),le.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),le.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const cn=le.getParameter(L.UNPACK_ROW_LENGTH),rt=le.getParameter(L.UNPACK_IMAGE_HEIGHT),gn=le.getParameter(L.UNPACK_SKIP_PIXELS),kn=le.getParameter(L.UNPACK_SKIP_ROWS),bi=le.getParameter(L.UNPACK_SKIP_IMAGES);le.pixelStorei(L.UNPACK_ROW_LENGTH,bt.width),le.pixelStorei(L.UNPACK_IMAGE_HEIGHT,bt.height),le.pixelStorei(L.UNPACK_SKIP_PIXELS,Oe),le.pixelStorei(L.UNPACK_SKIP_ROWS,$e),le.pixelStorei(L.UNPACK_SKIP_IMAGES,et);const os=b.isDataArrayTexture||b.isData3DTexture,_t=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){const wt=A.get(b),Ti=A.get(k),vt=A.get(wt.__renderTarget),Ei=A.get(Ti.__renderTarget);le.bindFramebuffer(L.READ_FRAMEBUFFER,vt.__webglFramebuffer),le.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let ls=0;ls<Ne;ls++)os&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,A.get(b).__webglTexture,W,et+ls),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,A.get(k).__webglTexture,Se,At+ls)),L.blitFramebuffer(Oe,$e,Re,ye,Fe,ft,Re,ye,L.DEPTH_BUFFER_BIT,L.NEAREST);le.bindFramebuffer(L.READ_FRAMEBUFFER,null),le.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||A.has(b)){const wt=A.get(b),Ti=A.get(k);le.bindFramebuffer(L.READ_FRAMEBUFFER,lg),le.bindFramebuffer(L.DRAW_FRAMEBUFFER,cg);for(let vt=0;vt<Ne;vt++)os?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,wt.__webglTexture,W,et+vt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,wt.__webglTexture,W),_t?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ti.__webglTexture,Se,At+vt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ti.__webglTexture,Se),W!==0?L.blitFramebuffer(Oe,$e,Re,ye,Fe,ft,Re,ye,L.COLOR_BUFFER_BIT,L.NEAREST):_t?L.copyTexSubImage3D(Ae,Se,Fe,ft,At+vt,Oe,$e,Re,ye):L.copyTexSubImage2D(Ae,Se,Fe,ft,Oe,$e,Re,ye);le.bindFramebuffer(L.READ_FRAMEBUFFER,null),le.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else _t?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Ae,Se,Fe,ft,At,Re,ye,Ne,gt,Ht,bt.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(Ae,Se,Fe,ft,At,Re,ye,Ne,gt,bt.data):L.texSubImage3D(Ae,Se,Fe,ft,At,Re,ye,Ne,gt,Ht,bt):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Se,Fe,ft,Re,ye,gt,Ht,bt.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Se,Fe,ft,bt.width,bt.height,gt,bt.data):L.texSubImage2D(L.TEXTURE_2D,Se,Fe,ft,Re,ye,gt,Ht,bt);le.pixelStorei(L.UNPACK_ROW_LENGTH,cn),le.pixelStorei(L.UNPACK_IMAGE_HEIGHT,rt),le.pixelStorei(L.UNPACK_SKIP_PIXELS,gn),le.pixelStorei(L.UNPACK_SKIP_ROWS,kn),le.pixelStorei(L.UNPACK_SKIP_IMAGES,bi),Se===0&&k.generateMipmaps&&L.generateMipmap(Ae),le.unbindTexture()},this.initRenderTarget=function(b){A.get(b).__webglFramebuffer===void 0&&S.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?S.setTextureCube(b,0):b.isData3DTexture?S.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?S.setTexture2DArray(b,0):S.setTexture2D(b,0),le.unbindTexture()},this.resetState=function(){X=0,B=0,N=null,le.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}class rb{static createButton(e,t={}){const n=document.createElement("button");function s(){if(t.domOverlay===void 0){const u=document.createElement("div");u.style.display="none",document.body.appendChild(u);const f=document.createElementNS("http://www.w3.org/2000/svg","svg");f.setAttribute("width",38),f.setAttribute("height",38),f.style.position="absolute",f.style.right="20px",f.style.top="20px",f.addEventListener("click",function(){c.end()}),u.appendChild(f);const p=document.createElementNS("http://www.w3.org/2000/svg","path");p.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),p.setAttribute("stroke","#fff"),p.setAttribute("stroke-width",2),f.appendChild(p),t.optionalFeatures===void 0&&(t.optionalFeatures=[]),t.optionalFeatures.push("dom-overlay"),t.domOverlay={root:u}}let c=null;async function h(u){u.addEventListener("end",d),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(u),n.textContent="STOP AR",t.domOverlay.root.style.display="",c=u}function d(){c.removeEventListener("end",d),n.textContent="START AR",t.domOverlay.root.style.display="none",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="START AR",n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-ar",t).then(h):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(h).catch(u=>{console.warn(u)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(h).catch(u=>{console.warn(u)})}function r(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function a(){r(),n.textContent="AR NOT SUPPORTED"}function o(c){r(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="AR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="ARButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-ar").then(function(c){c?s():a()}).catch(o),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}}const Kd=new Ee,$d=new E;class jd{constructor(e,t,n,s,r){this.controller=t,this.handModel=e,this.envMap=null;let a;!r||!r.primitive||r.primitive==="sphere"?a=new sr(1,10,10):r.primitive==="box"&&(a=new yi(1,1,1));const o=new On;this.handMesh=new Oh(a,o,30),this.handMesh.frustumCulled=!1,this.handMesh.instanceMatrix.setUsage(Wg),this.handMesh.castShadow=!0,this.handMesh.receiveShadow=!0,this.handModel.add(this.handMesh),this.joints=["wrist","thumb-metacarpal","thumb-phalanx-proximal","thumb-phalanx-distal","thumb-tip","index-finger-metacarpal","index-finger-phalanx-proximal","index-finger-phalanx-intermediate","index-finger-phalanx-distal","index-finger-tip","middle-finger-metacarpal","middle-finger-phalanx-proximal","middle-finger-phalanx-intermediate","middle-finger-phalanx-distal","middle-finger-tip","ring-finger-metacarpal","ring-finger-phalanx-proximal","ring-finger-phalanx-intermediate","ring-finger-phalanx-distal","ring-finger-tip","pinky-finger-metacarpal","pinky-finger-phalanx-proximal","pinky-finger-phalanx-intermediate","pinky-finger-phalanx-distal","pinky-finger-tip"]}updateMesh(){const t=this.controller.joints;let n=0;for(let s=0;s<this.joints.length;s++){const r=t[this.joints[s]];r.visible&&($d.setScalar(r.jointRadius||.008),Kd.compose(r.position,r.quaternion,$d),this.handMesh.setMatrixAt(s,Kd),n++)}this.handMesh.count=n,this.handMesh.instanceMatrix.needsUpdate=!0}}function ab(i){let e=0;for(const n in i.attributes){const s=i.getAttribute(n);e+=s.count*s.itemSize*s.array.BYTES_PER_ELEMENT}const t=i.getIndex();return e+=t?t.count*t.itemSize*t.array.BYTES_PER_ELEMENT:0,e}function Zd(i,e){if(e===Ug)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===$c||e===_p){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===$c)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function nm(i){const e=new Map,t=new Map,n=i.clone();return im(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function im(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)im(i.children[n],e.children[n],t)}class aa extends lr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ub(t)}),this.register(function(t){return new db(t)}),this.register(function(t){return new Sb(t)}),this.register(function(t){return new Mb(t)}),this.register(function(t){return new bb(t)}),this.register(function(t){return new pb(t)}),this.register(function(t){return new mb(t)}),this.register(function(t){return new gb(t)}),this.register(function(t){return new _b(t)}),this.register(function(t){return new hb(t)}),this.register(function(t){return new xb(t)}),this.register(function(t){return new fb(t)}),this.register(function(t){return new yb(t)}),this.register(function(t){return new vb(t)}),this.register(function(t){return new lb(t)}),this.register(function(t){return new Jd(t,tt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Jd(t,tt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Tb(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Gr.extractUrlBase(e);a=Gr.resolveURL(c,this.path)}else a=Gr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Gp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===sm){try{a[tt.KHR_BINARY_GLTF]=new Eb(e)}catch(d){s&&s(d);return}r=JSON.parse(a[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Bb(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case tt.KHR_MATERIALS_UNLIT:a[d]=new cb;break;case tt.KHR_DRACO_MESH_COMPRESSION:a[d]=new Ab(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:a[d]=new wb;break;case tt.KHR_MESH_QUANTIZATION:a[d]=new Rb;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function ob(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Ct(i,e,t){const n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class lb{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new ke(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],fn);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new qp(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new H_(h),c.distance=d;break;case"spot":c=new z_(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Gn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class cb{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return Lt}extendParams(e,t,n){const s=[];e.color=new ke(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],fn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,It))}return Promise.all(s)}}class hb{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Ct(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class ub{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new se(r,r)}return Promise.all(s)}}class db{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const n=Ct(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class fb{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}}class pb{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(t.sheenColor=new ke(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],fn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,It)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}}class mb{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}}class gb{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new ke().setRGB(r[0],r[1],r[2],fn),Promise.all(s)}}class _b{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const n=Ct(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class xb{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new ke().setRGB(r[0],r[1],r[2],fn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,It)),Promise.all(s)}}class vb{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}}class yb{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}}class Sb{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class Mb{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class bb{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class Jd{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=s.byteOffset||0,c=s.byteLength||0,h=s.count,d=s.byteStride,u=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(f),h,d,u,s.mode,s.filter),f})})}else return null}}class Tb{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==vn.TRIANGLES&&c.mode!==vn.TRIANGLE_STRIP&&c.mode!==vn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,f=[];for(const p of d){const _=new Ee,g=new E,m=new pn,y=new E(1,1,1),M=new Oh(p.geometry,p.material,u);for(let x=0;x<u;x++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,x),l.SCALE&&y.fromBufferAttribute(l.SCALE,x),M.setMatrixAt(x,_.compose(g,m,y));for(const x in l)if(x==="_COLOR_0"){const R=l[x];M.instanceColor=new Qc(R.array,R.itemSize,R.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&p.geometry.setAttribute(x,l[x]);yt.prototype.copy.call(M,p),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const sm="glTF",br=12,Qd={JSON:1313821514,BIN:5130562};class Eb{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,br),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==sm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-br,r=new DataView(e,br);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Qd.JSON){const c=new Uint8Array(e,br+a,o);this.content=n.decode(c)}else if(l===Qd.BIN){const c=br+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Ab{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const d=ch[h]||h.toLowerCase();o[d]=a[h]}for(const h in e.attributes){const d=ch[h]||h.toLowerCase();if(a[h]!==void 0){const u=n.accessors[e.attributes[h]],f=Vs[u.componentType];c[d]=f.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){s.decodeDracoFile(h,function(f){for(const p in f.attributes){const _=f.attributes[p],g=l[p];g!==void 0&&(_.normalized=g)}d(f)},o,c,fn,u)})})}}class wb{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Rb{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}}class rm extends rr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,d=(n-t)/h,u=d*d,f=u*d,p=e*c,_=p-c,g=-2*f+3*u,m=f-u,y=1-g,M=m-u+d;for(let x=0;x!==o;x++){const R=a[_+x+o],T=a[_+x+l]*h,C=a[p+x+o],v=a[p+x]*h;r[x]=y*R+M*T+g*C+m*v}return r}}const Cb=new pn;class Pb extends rm{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return Cb.fromArray(r).normalize().toArray(r),r}}const vn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Vs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ef={9728:Nt,9729:St,9984:hp,9985:lo,9986:Nr,9987:di},tf={33071:qn,33648:_o,10497:Ws},Vl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ch={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Lb={CUBICSPLINE:void 0,LINEAR:Kr,STEP:Yr},Hl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Db(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new On({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:_i})),i.DefaultMaterial}function Ki(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Gn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ib(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const d=e[c];if(n){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;a.push(u)}if(s){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;o.push(u)}if(r){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],u=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=d),r&&(i.morphAttributes.color=u),i.morphTargetsRelative=!0,i})}function Nb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ub(i){let e;const t=i.extensions&&i.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Gl(t.attributes):e=i.indices+":"+Gl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Gl(i.targets[n]);return e}function Gl(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function hh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ob(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Fb=new Ee;class Bb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ob,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Wp(this.options.manager):this.textureLoader=new W_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Gp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Ki(r,o,s),Gn(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(Gr.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=Vl[s.type],o=Vs[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Tt(c,a,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Vl[s.type],c=Vs[s.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0;let _,g;if(f&&f!==d){const m=Math.floor(u/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let M=t.cache.get(y);M||(_=new c(o,m*f,s.count*f/h),M=new bp(_,f/h),t.cache.add(y,M)),g=new Zr(M,l,u%f/h,p)}else o===null?_=new c(s.count*l):_=new c(o,u,s.count*l),g=new Tt(_,l,p);if(s.sparse!==void 0){const m=Vl.SCALAR,y=Vs[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,R=new y(a[1],M,s.sparse.count*m),T=new c(a[2],x,s.sparse.count*l);o!==null&&(g=new Tt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let C=0,v=R.length;C<v;C++){const w=R[C];if(g.setX(w,T[C*l]),l>=2&&g.setY(w,T[C*l+1]),l>=3&&g.setZ(w,T[C*l+2]),l>=4&&g.setW(w,T[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const u=(r.samplers||{})[a.sampler]||{};return h.magFilter=ef[u.magFilter]||St,h.minFilter=ef[u.minFilter]||di,h.wrapS=tf[u.wrapS]||Ws,h.wrapT=tf[u.wrapT]||Ws,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Nt&&h.minFilter!==St,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=s.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;const u=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(u),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(d){return new Promise(function(u,f){let p=u;t.isImageBitmapLoader===!0&&(p=function(_){const g=new Ut(_);g.needsUpdate=!0,u(g)}),t.load(Gr.resolveURL(d,r.path),p,void 0,f)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),Gn(d,a),d.userData.mimeType=a.mimeType||Ob(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Fh,In.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Mi,In.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return On}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){const d=s[tt.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,r,t))}else{const d=r.pbrMetallicRoughness||{};if(o.color=new ke(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],fn),o.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,It)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=tn);const h=r.alphaMode||Hl.OPAQUE;if(h===Hl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Hl.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Lt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new se(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==Lt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Lt){const d=r.emissiveFactor;o.emissive=new ke().setRGB(d[0],d[1],d[2],fn)}return r.emissiveTexture!==void 0&&a!==Lt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,It)),Promise.all(c).then(function(){const d=new a(o);return r.name&&(d.name=r.name),Gn(d,r),t.associations.set(d,{materials:e}),r.extensions&&Ki(s,d,r),d})}createUniqueName(e){const t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return nf(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=Ub(c),d=s[h];if(d)a.push(d.promise);else{let u;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=nf(new Je,c,t),s[h]={primitive:c,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?Db(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let f=0,p=h.length;f<p;f++){const _=h[f],g=a[f];let m;const y=c[f];if(g.mode===vn.TRIANGLES||g.mode===vn.TRIANGLE_STRIP||g.mode===vn.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new D0(_,y):new st(_,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===vn.TRIANGLE_STRIP?m.geometry=Zd(m.geometry,_p):g.mode===vn.TRIANGLE_FAN&&(m.geometry=Zd(m.geometry,$c));else if(g.mode===vn.LINES)m=new Ap(_,y);else if(g.mode===vn.LINE_STRIP)m=new Rt(_,y);else if(g.mode===vn.LINE_LOOP)m=new B0(_,y);else if(g.mode===vn.POINTS)m=new wp(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&Nb(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Gn(m,r),g.extensions&&Ki(s,m,g),t.assignFinalMaterial(m),d.push(m)}for(let f=0,p=d.length;f<p;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Ki(s,d[0],r),d[0];const u=new mt;r.extensions&&Ki(s,u,r),t.associations.set(u,{meshes:e});for(let f=0,p=d.length;f<p;f++)u.add(d[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(rn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Wo(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Gn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const d=a[c];if(d){o.push(d);const u=new Ee;r!==null&&u.fromArray(r.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Uh(o,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let d=0,u=s.channels.length;d<u;d++){const f=s.channels[d],p=s.samplers[f.sampler],_=f.target,g=_.node,m=s.parameters!==void 0?s.parameters[p.input]:p.input,y=s.parameters!==void 0?s.parameters[p.output]:p.output;_.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",y)),c.push(p),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){const u=d[0],f=d[1],p=d[2],_=d[3],g=d[4],m=[];for(let M=0,x=u.length;M<x;M++){const R=u[M],T=f[M],C=p[M],v=_[M],w=g[M];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();const D=n._createAnimationTracks(R,T,C,v,w);if(D)for(let P=0;P<D.length;P++)m.push(D[P])}const y=new I_(r,void 0,m);return Gn(y,s),y})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,Fb)});for(let f=0,p=d.length;f<p;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){const f=h.userData.pivot,p=d[0];h.pivot=new E().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Ep:c.length>1?h=new mt:c.length===1?h=c[0]:h=new yt,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=a),Gn(h,r),r.extensions&&Ki(n,h,r),r.matrix!==void 0){const d=new Ee;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const d=s.associations.get(h);s.associations.set(h,{...d})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new mt;n.name&&(r.name=s.createUniqueName(n.name)),Gn(r,n),n.extensions&&Ki(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,d=l.length;h<d;h++){const u=l[h];u.parent!==null?r.add(nm(u)):r.add(u)}const c=h=>{const d=new Map;for(const[u,f]of s.associations)(u instanceof In||u instanceof Ut)&&d.set(u,f);return h.traverse(u=>{const f=s.associations.get(u);f!=null&&d.set(u,f)}),d};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Di[r.path]===Di.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(Di[r.path]){case Di.weights:h=$s;break;case Di.rotation:h=js;break;case Di.translation:case Di.scale:h=Zs;break;default:switch(n.itemSize){case 1:h=$s;break;case 2:case 3:default:h=Zs;break}break}const d=s.interpolation!==void 0?Lb[s.interpolation]:Kr,u=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){const _=new h(l[f]+"."+Di[r.path],t.array,u,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=hh(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof js?Pb:rm;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function kb(i,e,t){const n=e.attributes,s=new mn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new E(l[0],l[1],l[2]),new E(c[0],c[1],c[2])),o.normalized){const h=hh(Vs[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new E,l=new E;for(let c=0,h=r.length;c<h;c++){const d=r[c];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],f=u.min,p=u.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),u.normalized){const _=hh(Vs[u.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new An;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function nf(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(const a in n){const o=ch[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return nt.workingColorSpace!==fn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),Gn(i,e),kb(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Ib(i,e.targets,t):i})}const zb="https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles/generic-hand/";class Vb{constructor(e,t,n,s,r=null,a=null,o=null){this.controller=t,this.handModel=e,this.bones=[];const l=n||zb,c=d=>{const u=nm(d.scene.children[0]);this.handModel.add(u);const f=u.getObjectByProperty("type","SkinnedMesh");f.frustumCulled=!1,f.castShadow=!0,f.receiveShadow=!0,["wrist","thumb-metacarpal","thumb-phalanx-proximal","thumb-phalanx-distal","thumb-tip","index-finger-metacarpal","index-finger-phalanx-proximal","index-finger-phalanx-intermediate","index-finger-phalanx-distal","index-finger-tip","middle-finger-metacarpal","middle-finger-phalanx-proximal","middle-finger-phalanx-intermediate","middle-finger-phalanx-distal","middle-finger-tip","ring-finger-metacarpal","ring-finger-phalanx-proximal","ring-finger-phalanx-intermediate","ring-finger-phalanx-distal","ring-finger-tip","pinky-finger-metacarpal","pinky-finger-phalanx-proximal","pinky-finger-phalanx-intermediate","pinky-finger-phalanx-distal","pinky-finger-tip"].forEach(_=>{const g=u.getObjectByName(_);g!==void 0?g.jointName=_:console.warn(`Couldn't find ${_} in ${s} hand mesh`),this.bones.push(g)}),a&&a(u)},h=`${l}${s}.glb`;o&&o[h]?c(o[h]):(r===null&&(r=new aa,r.setPath(l)),r.load(`${s}.glb`,d=>{o&&(o[h]=d),c(d)}))}updateMesh(){const e=this.controller.joints;for(let t=0;t<this.bones.length;t++){const n=this.bones[t];if(n){const s=e[n.jointName];if(s.visible){const r=s.position;n.position.copy(r),n.quaternion.copy(s.quaternion)}}}}}class Hb extends yt{constructor(e){super(),this.controller=e,this.motionController=null,this.envMap=null,this.mesh=null}updateMatrixWorld(e){super.updateMatrixWorld(e),this.motionController&&this.motionController.updateMesh()}}class Gb{constructor(e=null,t=null){this.gltfLoader=e,this.path=null,this._assetCache={},this.onLoad=t}setPath(e){return this.path=e,this}createHandModel(e,t){const n=new Hb(e);return e.addEventListener("connected",s=>{const r=s.data;r.hand&&!n.motionController&&(n.xrInputSource=r,t===void 0||t==="spheres"?n.motionController=new jd(n,e,this.path,r.handedness,{primitive:"sphere"}):t==="boxes"?n.motionController=new jd(n,e,this.path,r.handedness,{primitive:"box"}):t==="mesh"&&(n.motionController=new Vb(n,e,this.path,r.handedness,this.gltfLoader,this.onLoad,this._assetCache)))}),e.addEventListener("disconnected",()=>{n.clear(),n.motionController=null}),n}}const sf={type:"change"},qh={type:"start"},am={type:"end"},Xa=new Si,rf=new hi,Wb=Math.cos(70*rn.DEG2RAD),Dt=new E,Jt=2*Math.PI,pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Wl=1e-6;class Xb extends sx{constructor(e,t=null){super(e,t),this.state=pt.NONE,this.target=new E,this.cursor=new E,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bs.ROTATE,MIDDLE:Bs.DOLLY,RIGHT:Bs.PAN},this.touches={ONE:Os.ROTATE,TWO:Os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new E,this._lastQuaternion=new pn,this._lastTargetPosition=new E,this._quat=new pn().setFromUnitVectors(e.up,new E(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rh,this._sphericalDelta=new rh,this._scale=1,this._panOffset=new E,this._rotateStart=new se,this._rotateEnd=new se,this._rotateDelta=new se,this._panStart=new se,this._panEnd=new se,this._panDelta=new se,this._dollyStart=new se,this._dollyEnd=new se,this._dollyDelta=new se,this._dollyDirection=new E,this._mouse=new se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Yb.bind(this),this._onPointerDown=qb.bind(this),this._onPointerUp=Kb.bind(this),this._onContextMenu=tT.bind(this),this._onMouseWheel=Zb.bind(this),this._onKeyDown=Jb.bind(this),this._onTouchStart=Qb.bind(this),this._onTouchMove=eT.bind(this),this._onMouseDown=$b.bind(this),this._onMouseMove=jb.bind(this),this._interceptControlDown=nT.bind(this),this._interceptControlUp=iT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(sf),this.update(),this.state=pt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Dt.copy(t).sub(this.target),Dt.applyQuaternion(this._quat),this._spherical.setFromVector3(Dt),this.autoRotate&&this.state===pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Jt:n>Math.PI&&(n-=Jt),s<-Math.PI?s+=Jt:s>Math.PI&&(s-=Jt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Dt.setFromSpherical(this._spherical),Dt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Dt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new E(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new E(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Xa.origin.copy(this.object.position),Xa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Xa.direction))<Wb?this.object.lookAt(this.target):(rf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Xa.intersectPlane(rf,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Wl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Wl||this._lastTargetPosition.distanceToSquared(this.target)>Wl?(this.dispatchEvent(sf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Jt/60*this.autoRotateSpeed*e:Jt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Dt.setFromMatrixColumn(t,0),Dt.multiplyScalar(-e),this._panOffset.add(Dt)}_panUp(e,t){this.screenSpacePanning===!0?Dt.setFromMatrixColumn(t,1):(Dt.setFromMatrixColumn(t,0),Dt.crossVectors(this.object.up,Dt)),Dt.multiplyScalar(e),this._panOffset.add(Dt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Dt.copy(s).sub(this.target);let r=Dt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new se,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function qb(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Yb(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Kb(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(am),this.state=pt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function $b(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Bs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=pt.DOLLY;break;case Bs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=pt.ROTATE}break;case Bs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=pt.PAN}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(qh)}function jb(i){switch(this.state){case pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Zb(i){this.enabled===!1||this.enableZoom===!1||this.state!==pt.NONE||(i.preventDefault(),this.dispatchEvent(qh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(am))}function Jb(i){this.enabled!==!1&&this._handleKeyDown(i)}function Qb(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Os.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=pt.TOUCH_ROTATE;break;case Os.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=pt.TOUCH_PAN;break;default:this.state=pt.NONE}break;case 2:switch(this.touches.TWO){case Os.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=pt.TOUCH_DOLLY_PAN;break;case Os.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=pt.TOUCH_DOLLY_ROTATE;break;default:this.state=pt.NONE}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(qh)}function eT(i){switch(this._trackPointer(i),this.state){case pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=pt.NONE}}function tT(i){this.enabled!==!1&&i.preventDefault()}function nT(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function iT(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const zt=1/5e3,Yh=29.2266,om=47.9689,sT=Math.cos(Yh*Math.PI/180);async function rT(){const i=new mt;i.userData.scale=zt,i.add(oT());let e;try{const r=await fetch("/Fahad_ATC/data/okbk_osm.json");if(!r.ok)throw new Error(`HTTP ${r.status}`);e=await r.json()}catch(s){return console.error("[airport] OSM data fetch failed:",s),i}const t=e.elements||[],n=s=>t.filter(r=>r.tags?.aeroway===s);console.log(`[airport] OSM loaded: ${t.length} elements`);try{const s=await aT();s&&(s.userData.kind="satellite-ground",i.add(s))}catch(s){console.warn("[airport] satellite ground unavailable, falling back to OSM polygons:",s);for(const r of n("aerodrome")){const a=ql(r.geometry,3356458,4e-4,!0);a&&i.add(a)}for(const r of n("apron")){const a=ql(r.geometry,6974578,8e-4);a&&i.add(a)}}for(const s of n("taxiway")){const r=Xl(s.geometry,16436245,1.2,.0014);r&&(r.material.transparent=!0,r.material.opacity=.55,i.add(r))}for(const s of n("stopway")){const r=parseFloat(s.tags.width)||45,a=Xl(s.geometry,4855832,r,.0016);a&&(a.material.transparent=!0,a.material.opacity=.6,i.add(a))}for(const s of n("runway")){const r=parseFloat(s.tags.width)||45,a=Xl(s.geometry,16777215,1.8,.0022);a&&(a.userData.runway=s.tags.ref,i.add(a));const o=of(s.geometry,r*.85,6,0,.0023);o&&i.add(o);const l=of(s.geometry,r*.85,6,s.geometry.length-1,.0023);l&&i.add(l)}for(const s of n("helipad"))if(s.geometry?.length>=3){const r=ql(s.geometry,4465186,.0016);r&&i.add(r)}for(const s of n("terminal")){const r=af(s.tags,22)*zt,a=lf(s.geometry,7241370,r);a&&(a.userData.terminal=s.tags.name||s.tags.ref,a.userData.kind="osm-building",i.add(a))}for(const s of n("hangar")){const r=af(s.tags,14)*zt,a=lf(s.geometry,8026754,r);a&&(a.userData.kind="osm-building",i.add(a))}return i}function lm(i,e){i.traverse(t=>{const n=t.userData?.kind;(n==="satellite-ground"||n==="osm-building")&&(t.visible=e)})}function af(i,e){if(i?.height){const t=parseFloat(i.height);if(Number.isFinite(t))return t}if(i?.["building:levels"]){const t=parseFloat(i["building:levels"]);if(Number.isFinite(t))return t*3.5}return e}function kt(i,e){const t=(e-om)*111320*sT,n=-(i-Yh)*111320;return[t*zt,n*zt]}async function aT(){const i="/Fahad_ATC/data/okbk_satellite.json",e="/Fahad_ATC/data/okbk_satellite.jpg",t=await fetch(i);if(!t.ok)throw new Error(`satellite metadata HTTP ${t.status}`);const n=await t.json(),s=n.bbox,r=await new Promise((_,g)=>{new Wp().load(e,_,void 0,g)});r.colorSpace=It,r.anisotropy=8;const[a,o]=kt((s.lat_min+s.lat_max)/2,(s.lon_min+s.lon_max)/2),[l]=kt((s.lat_min+s.lat_max)/2,s.lon_min),[c]=kt((s.lat_min+s.lat_max)/2,s.lon_max),[,h]=kt(s.lat_min,(s.lon_min+s.lon_max)/2),[,d]=kt(s.lat_max,(s.lon_min+s.lon_max)/2),u=Math.abs(c-l),f=Math.abs(h-d),p=new st(new Hi(u,f),new On({map:r,roughness:.95,metalness:0}));return p.rotation.x=-Math.PI/2,p.position.set(a,2e-4,o),p.userData.attribution=n.attribution,p}function Xl(i,e,t,n){if(!i||i.length<2)return null;const s=t*zt/2,r=[],a=[],o=i.map(c=>kt(c.lat,c.lon));for(let c=0;c<o.length-1;c++){const[h,d]=o[c],[u,f]=o[c+1],p=u-h,_=f-d,g=Math.hypot(p,_);if(g<1e-7)continue;const m=-_/g,y=p/g,M=r.length/3;r.push(h+m*s,n,d+y*s),r.push(h-m*s,n,d-y*s),r.push(u+m*s,n,f+y*s),r.push(u-m*s,n,f-y*s),a.push(M,M+2,M+1,M+1,M+2,M+3)}if(r.length===0)return null;const l=new Je;return l.setAttribute("position",new lt(r,3)),l.setIndex(a),l.computeVertexNormals(),new st(l,new On({color:e,roughness:.92,metalness:0}))}function of(i,e,t,n,s){if(!i||n<0||n>=i.length)return null;const r=i[n],a=i[n===0?1:n-1],[o,l]=kt(r.lat,r.lon),[c,h]=kt(a.lat,a.lon),d=c-o,u=h-l,f=Math.hypot(d,u);if(f<1e-7)return null;const p=d/f,_=u/f,g=-_,m=p,y=e*zt/2,M=t*zt/2,x=o+p*M*1.2,R=l+_*M*1.2,T=[x+g*y-p*M,s,R+m*y-_*M,x-g*y-p*M,s,R-m*y-_*M,x+g*y+p*M,s,R+m*y+_*M,x-g*y+p*M,s,R-m*y+_*M],C=new Je;return C.setAttribute("position",new lt(T,3)),C.setIndex([0,2,1,1,2,3]),C.computeVertexNormals(),new st(C,new Lt({color:16777215}))}function ql(i,e,t,n=!1){if(!i||i.length<3)return null;const s=new Ho;for(let l=0;l<i.length;l++){const[c,h]=kt(i[l].lat,i[l].lon);l===0?s.moveTo(c,h):s.lineTo(c,h)}const r=new Hh(s),a=new On({color:e,roughness:.9,side:tn,transparent:n,opacity:n?.5:1}),o=new st(r,a);return o.rotation.x=-Math.PI/2,o.position.y=t,o}function lf(i,e,t){if(!i||i.length<3)return null;const n=new Ho;for(let o=0;o<i.length;o++){const[l,c]=kt(i[o].lat,i[o].lon);o===0?n.moveTo(l,c):n.lineTo(l,c)}const s=new Vh(n,{depth:t,bevelEnabled:!1}),r=new On({color:e,roughness:.7,metalness:.15}),a=new st(s,r);return a.rotation.x=-Math.PI/2,a}function oT(){const i=new mt,e=new st(new Vo(.012,.025,4),new Lt({color:16733525}));return e.rotation.x=-Math.PI/2,e.position.set(0,.001,-.65),i.add(e),i}var lT=Object.defineProperty,cT=(i,e,t)=>e in i?lT(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,cf=(i,e,t)=>cT(i,typeof e!="symbol"?e+"":e,t);let Js=class{static setXRSession(e){e!==this.session&&(this.flushPending(),this.session=e)}static requestAnimationFrame(e){const{session:t,pending:n}=this;let s;const r=()=>{n.delete(s),e()};return t?s=t.requestAnimationFrame(r):s=requestAnimationFrame(r),n.set(s,e),s}static cancelAnimationFrame(e){const{pending:t,session:n}=this;t.delete(e),n?n.cancelAnimationFrame(e):cancelAnimationFrame(e)}static flushPending(){this.pending.forEach((e,t)=>{e(),this.cancelAnimationFrame(t)})}};cf(Js,"pending",new Map),cf(Js,"session",null);const hf=2**30;let hT=class{get unloadPriorityCallback(){return this._unloadPriorityCallback}set unloadPriorityCallback(e){e.length===1?(console.warn('LRUCache: "unloadPriorityCallback" function has been changed to take two arguments.'),this._unloadPriorityCallback=(t,n)=>{const s=e(t),r=e(n);return s<r?-1:s>r?1:0}):this._unloadPriorityCallback=e}constructor(){this.minSize=6e3,this.maxSize=8e3,this.minBytesSize=.3*hf,this.maxBytesSize=.4*hf,this.unloadPercent=.05,this.autoMarkUnused=!0,this.itemSet=new Map,this.itemList=[],this.usedSet=new Set,this.callbacks=new Map,this.unloadingHandle=-1,this.cachedBytes=0,this.bytesMap=new Map,this.loadedSet=new Set,this._unloadPriorityCallback=null;const e=this.itemSet;this.defaultPriorityCallback=t=>e.get(t)}isFull(){return this.itemSet.size>=this.maxSize||this.cachedBytes>=this.maxBytesSize}getMemoryUsage(e){return this.bytesMap.get(e)||0}setMemoryUsage(e,t){const{bytesMap:n,itemSet:s}=this;s.has(e)&&(this.cachedBytes-=n.get(e)||0,n.set(e,t),this.cachedBytes+=t)}add(e,t){const n=this.itemSet;if(n.has(e)||this.isFull())return!1;const s=this.usedSet,r=this.itemList,a=this.callbacks;return r.push(e),s.add(e),n.set(e,Date.now()),a.set(e,t),!0}has(e){return this.itemSet.has(e)}remove(e){const t=this.usedSet,n=this.itemSet,s=this.itemList,r=this.bytesMap,a=this.callbacks,o=this.loadedSet;if(n.has(e)){this.cachedBytes-=r.get(e)||0,r.delete(e),a.get(e)(e);const l=s.indexOf(e);return s.splice(l,1),t.delete(e),n.delete(e),a.delete(e),o.delete(e),!0}return!1}setLoaded(e,t){const{itemSet:n,loadedSet:s}=this;n.has(e)&&(t===!0?s.add(e):s.delete(e))}markUsed(e){const t=this.itemSet,n=this.usedSet;t.has(e)&&!n.has(e)&&(t.set(e,Date.now()),n.add(e))}markUnused(e){this.usedSet.delete(e)}markAllUnused(){this.usedSet.clear()}isUsed(e){return this.usedSet.has(e)}unloadUnusedContent(){const{unloadPercent:e,minSize:t,maxSize:n,itemList:s,itemSet:r,usedSet:a,loadedSet:o,callbacks:l,bytesMap:c,minBytesSize:h,maxBytesSize:d}=this,u=s.length-a.size,f=s.length-o.size,p=Math.max(Math.min(s.length-t,u),0),_=this.cachedBytes-h,g=this.unloadPriorityCallback||this.defaultPriorityCallback;let m=!1;const y=p>0&&u>0||f&&s.length>n;if(u&&this.cachedBytes>h||f&&this.cachedBytes>d||y){s.sort((w,D)=>{const P=a.has(w),F=a.has(D);if(P===F){const X=o.has(w),B=o.has(D);return X===B?-g(w,D):X?1:-1}else return P?1:-1});const M=Math.max(t*e,p*e),x=Math.ceil(Math.min(M,u,p)),R=Math.max(e*_,e*h),T=Math.min(R,_);let C=0,v=0;for(;this.cachedBytes-v>d||s.length-C>n;){const w=s[C],D=c.get(w)||0;if(a.has(w)&&o.has(w)||this.cachedBytes-v-D<d&&s.length-C<=n)break;v+=D,C++}for(;v<T||C<x;){const w=s[C],D=c.get(w)||0;if(a.has(w)||this.cachedBytes-v-D<h&&C>=x)break;v+=D,C++}s.splice(0,C).forEach(w=>{this.cachedBytes-=c.get(w)||0,l.get(w)(w),c.delete(w),r.delete(w),l.delete(w),o.delete(w),a.delete(w)}),m=C<p||v<_&&C<u,m=m&&C>0}m&&(this.unloadingHandle=Js.requestAnimationFrame(()=>this.scheduleUnload()))}scheduleUnload(){Js.cancelAnimationFrame(this.unloadingHandle),this.scheduled||(this.scheduled=!0,queueMicrotask(()=>{this.scheduled=!1,this.unloadUnusedContent()}))}},uf=class extends Error{constructor(){super("PriorityQueue: Item removed"),this.name="PriorityQueueItemRemovedError"}},Yl=class{get running(){return this.items.length!==0||this.currJobs!==0}get schedulingCallback(){return this._schedulingCallback}set schedulingCallback(e){console.log('PriorityQueue: Setting "schedulingCallback" has been deprecated. Use Scheduler to switch to an XRSession rAF, instead.'),this._schedulingCallback=e}constructor(){this.maxJobs=6,this.items=[],this.callbacks=new Map,this.currJobs=0,this.scheduled=!1,this.autoUpdate=!0,this.priorityCallback=null,this._schedulingCallback=e=>{Js.requestAnimationFrame(e)},this._runjobs=()=>{this.scheduled=!1,this.tryRunJobs()}}sort(){const e=this.priorityCallback,t=this.items;e!==null&&t.sort(e)}has(e){return this.callbacks.has(e)}add(e,t){const n={callback:t,reject:null,resolve:null,promise:null};return n.promise=new Promise((s,r)=>{const a=this.items,o=this.callbacks;n.resolve=s,n.reject=r,a.unshift(e),o.set(e,n),this.autoUpdate&&this.scheduleJobRun()}),n.promise}remove(e){const t=this.items,n=this.callbacks,s=t.indexOf(e);if(s!==-1){const r=n.get(e);r.promise.catch(a=>{if(!(a instanceof uf))throw a}),r.reject(new uf),t.splice(s,1),n.delete(e)}}removeByFilter(e){const{items:t}=this;for(let n=0;n<t.length;n++){const s=t[n];e(s)&&(this.remove(s),n--)}}tryRunJobs(){this.sort();const e=this.items,t=this.callbacks,n=this.maxJobs;let s=0;const r=()=>{this.currJobs--,this.autoUpdate&&this.scheduleJobRun()};for(;n>this.currJobs&&e.length>0&&s<n;){this.currJobs++,s++;const a=e.pop(),{callback:o,resolve:l,reject:c}=t.get(a);t.delete(a);let h;try{h=o(a)}catch(d){c(d),r()}h instanceof Promise?h.then(l).catch(c).finally(r):(l(h),r())}}scheduleJobRun(){this.scheduled||(this._schedulingCallback(this._runjobs),this.scheduled=!0)}};const es=-1,Ii=0,qa=1,Ya=2,Kl=3,Dn=4,df=6378137,uT=6356752314245179e-9;function cm(i,e=null,t=null){const n=[];for(n.push(i),n.push(null),n.push(0);n.length>0;){const s=n.pop(),r=n.pop(),a=n.pop();if(e&&e(a,r,s)){t&&t(a,r,s);return}const o=a.children;if(o)for(let l=o.length-1;l>=0;l--)n.push(o[l]),n.push(a),n.push(s+1);t&&t(a,r,s)}}function Qs(i){if(i===null||i.byteLength<4)return"";let e;if(i instanceof DataView?e=i:e=new DataView(i),String.fromCharCode(e.getUint8(0))==="{")return null;let t="";for(let n=0;n<4;n++)t+=String.fromCharCode(e.getUint8(n));return t}const dT=new TextDecoder;function hm(i){return dT.decode(i)}function Kh(i){return i.replace(/[\\/][^\\/]+$/,"")+"/"}let Yo=class{constructor(){this.fetchOptions={},this.workingPath=""}load(...e){return console.warn('Loader: "load" function has been deprecated in favor of "loadAsync".'),this.loadAsync(...e)}loadAsync(e){return fetch(e,this.fetchOptions).then(t=>{if(!t.ok)throw new Error(`Failed to load file "${e}" with status ${t.status} : ${t.statusText}`);return t.arrayBuffer()}).then(t=>(this.workingPath===""&&(this.workingPath=Kh(e)),this.parse(t)))}resolveExternalURL(e){return new URL(e,this.workingPath).href}parse(e){throw new Error("LoaderBase: Parse not implemented.")}};function ff(i){if(!i)return null;let e=i.length;const t=i.indexOf("?"),n=i.indexOf("#");t!==-1&&(e=Math.min(e,t)),n!==-1&&(e=Math.min(e,n));const s=i.lastIndexOf(".",e),r=i.lastIndexOf("/",e),a=i.indexOf("://");return a!==-1&&a+2===r||s===-1||s<r?null:i.substring(s+1,e)||null}const Ka={inView:!1,error:1/0,distanceFromCamera:1/0};function To(i){return i===Dn||i===es}function ki(i,e){return $h(i)&&i.traversal.lastFrameVisited===e&&i.traversal.used}function $h(i){return!!i.traversal}function oa(i){const{children:e}=i,t=e.length===0||$h(e[e.length-1]),n=!i.internal.hasUnrenderableContent||To(i.internal.loadingState);return t&&n}function er(i){return i.internal.hasUnrenderableContent||i.parent&&i.parent.geometricError<i.geometricError}function Ko(i,e){e.ensureChildrenArePreprocessed(i),i.traversal.lastFrameVisited!==e.frameCount&&(i.traversal.lastFrameVisited=e.frameCount,i.traversal.used=!1,i.traversal.inFrustum=!1,i.traversal.isLeaf=!1,i.traversal.visible=!1,i.traversal.active=!1,i.traversal.error=1/0,i.traversal.distanceFromCamera=1/0,i.traversal.allChildrenReady=!1,i.traversal.kicked=!1,i.traversal.allUsedChildrenProcessed=!1,e.calculateTileViewErrorWithPlugin(i,Ka),i.traversal.inFrustum=Ka.inView,i.traversal.error=Ka.error,i.traversal.distanceFromCamera=Ka.distanceFromCamera)}function uh(i,e,t=!1){if(Ko(i,e),t?e.markTileUsed(i):Eo(i),er(i)&&oa(i)){const n=i.children;for(let s=0,r=n.length;s<r;s++)uh(n[s],e,t)}}function um(i,e){if(Ko(i,e),i.traversal.usedLastFrame&&(Eo(i),i.traversal.wasSetActive&&(i.traversal.active=!0),(!i.traversal.active||er(i))&&oa(i))){const t=i.children;for(let n=0,s=t.length;n<s;n++)um(t[n],e)}}function Eo(i){i.traversal.used=!0}function fT(i,e){return!(i.traversal.error<=e.errorTarget&&!er(i)||e.maxDepth>0&&i.internal.depth+1>=e.maxDepth||!oa(i))}function dm(i,e){const{frameCount:t}=e,{children:n}=i;for(let s=0,r=n.length;s<r;s++){const a=n[s];ki(a,t)&&(a.traversal.active&&(a.traversal.kicked=!0,a.traversal.active=!1),dm(a,e))}}function pf(i){return!er(i)&&(!i.internal.hasContent||To(i.internal.loadingState))}function fm(i,e){if(Ko(i,e),!i.traversal.inFrustum)return;if(!fT(i,e)){Eo(i);return}let t=!1,n=!1;const s=i.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];fm(o,e),t=t||ki(o,e.frameCount),n=n||o.traversal.inFrustum}if(i.refine==="REPLACE"&&!n&&s.length!==0){i.traversal.inFrustum=!1,e.markTileUsed(i);for(let r=0,a=s.length;r<a;r++)uh(s[r],e,!0);return}if(Eo(i),i.refine==="REPLACE"&&t&&e.loadSiblings)for(let r=0,a=s.length;r<a;r++)uh(s[r],e)}function pm(i,e){const t=e.frameCount;if(!ki(i,t))return;const n=i.children;let s=!1;for(let a=0,o=n.length;a<o;a++){const l=n[a];s=s||ki(l,t)}if(!s)i.traversal.isLeaf=!0;else for(let a=0,o=n.length;a<o;a++)pm(n[a],e);let r=!0;for(let a=0,o=n.length;a<o;a++){const l=n[a];ki(l,e.frameCount)&&!l.traversal.allUsedChildrenProcessed&&(r=!1)}i.traversal.allUsedChildrenProcessed=r&&oa(i)}function mm(i,e){if(!ki(i,e.frameCount))return;const t=i.internal.hasContent,n=To(i.internal.loadingState)&&t,s=i.children;if(i.traversal.isLeaf){if(!er(i)&&(i.traversal.active=!0,oa(i)&&(!i.internal.hasContent||!To(i.internal.loadingState))))for(let o=0,l=s.length;o<l;o++)um(s[o],e);return}let r=s.length>0;for(let o=0,l=s.length;o<l;o++){const c=s[o];mm(c,e),ki(c,e.frameCount)&&!(c.traversal.active&&pf(c))&&!c.traversal.allChildrenReady&&(r=!1)}i.traversal.allChildrenReady=r;const a=i.traversal.active&&pf(i);!er(i)&&!r&&!a&&i.traversal.wasSetActive&&(n||!i.internal.hasContent)&&(i.traversal.active=!0,dm(i,e))}function gm(i,e){var t;const n=ki(i,e.frameCount);if(n&&((i.internal.hasUnrenderableContent||i.internal.hasRenderableContent&&i.refine==="ADD")&&(i.traversal.active=!0),(i.traversal.active||i.traversal.kicked)&&i.internal.hasContent?(e.markTileUsed(i),(i.internal.hasUnrenderableContent||i.traversal.allUsedChildrenProcessed)&&e.queueTileForDownload(i),i.internal.loadingState!==Dn&&(i.traversal.active=!1)):i.traversal.active=!1,i.internal.virtualChildCount>0&&i.internal.hasContent&&e.markTileUsed(i),i.traversal.visible=i.internal.hasRenderableContent&&i.traversal.active&&i.traversal.inFrustum&&i.internal.loadingState===Dn,e.stats.used++,i.traversal.inFrustum&&e.stats.inFrustum++),n||$h(i)&&(t=i.traversal)!=null&&t.usedLastFrame){let s=!1,r=!1;n?(s=i.traversal.active,e.displayActiveTiles?r=i.traversal.active||i.traversal.visible:r=i.traversal.visible):Ko(i,e),i.internal.hasRenderableContent&&i.internal.loadingState===Dn&&(i.traversal.wasSetActive!==s&&(e.stats.active+=s?1:-1,e.invokeOnePlugin(o=>o.setTileActive&&o.setTileActive(i,s))),i.traversal.wasSetVisible!==r&&(e.stats.visible+=r?1:-1,e.invokeOnePlugin(o=>o.setTileVisible&&o.setTileVisible(i,r)))),i.traversal.wasSetActive=s,i.traversal.wasSetVisible=r,i.traversal.usedLastFrame=n;const a=i.children;for(let o=0,l=a.length;o<l;o++){const c=a[o];gm(c,e)}}}function pT(i,e){fm(i,e),pm(i,e),mm(i,e),gm(i,e)}const $a={inView:!1,error:1/0,distanceFromCamera:1/0},_m=!0;function xm(i){return i===Dn||i===es}function zi(i,e){return jh(i)&&i.traversal.lastFrameVisited===e&&i.traversal.used}function jh(i){return!!i.traversal}function Zh(i){const e=i.children;return e.length===0||jh(e[e.length-1])}function Jh(i){return i.internal.hasUnrenderableContent||i.parent&&i.parent.geometricError<i.geometricError}function Qh(i,e){i.traversal.lastFrameVisited!==e.frameCount&&(i.traversal.lastFrameVisited=e.frameCount,i.traversal.used=!1,i.traversal.inFrustum=!1,i.traversal.isLeaf=!1,i.traversal.visible=!1,i.traversal.active=!1,i.traversal.error=1/0,i.traversal.distanceFromCamera=1/0,i.traversal.allChildrenReady=!1,e.calculateTileViewErrorWithPlugin(i,$a),i.traversal.inFrustum=$a.inView,i.traversal.error=$a.error,i.traversal.distanceFromCamera=$a.distanceFromCamera)}function dh(i,e,t=!1){if(e.ensureChildrenArePreprocessed(i),Qh(i,e),fh(i,e,t),Jh(i)&&Zh(i)){const n=i.children;for(let s=0,r=n.length;s<r;s++)dh(n[s],e,t)}}function vm(i,e){if(e.ensureChildrenArePreprocessed(i),zi(i,e.frameCount)&&(i.internal.hasContent&&e.queueTileForDownload(i),Zh(i))){const t=i.children;for(let n=0,s=t.length;n<s;n++)vm(t[n],e)}}function fh(i,e,t=!1){i.traversal.used||(t||(i.traversal.used=!0,e.stats.used++),e.markTileUsed(i),i.traversal.inFrustum===!0&&e.stats.inFrustum++)}function mT(i,e){return!(i.traversal.error<=e.errorTarget&&!Jh(i)||e.maxDepth>0&&i.internal.depth+1>=e.maxDepth||!Zh(i))}function ym(i,e){if(e.ensureChildrenArePreprocessed(i),Qh(i,e),!i.traversal.inFrustum)return;if(!mT(i,e)){fh(i,e);return}let t=!1,n=!1;const s=i.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];ym(o,e),t=t||zi(o,e.frameCount),n=n||o.traversal.inFrustum}if(i.refine==="REPLACE"&&!n&&s.length!==0){i.traversal.inFrustum=!1;for(let r=0,a=s.length;r<a;r++)dh(s[r],e,!0);return}if(fh(i,e),i.refine==="REPLACE"&&(t&&i.internal.depth!==0||_m))for(let r=0,a=s.length;r<a;r++)dh(s[r],e)}function Sm(i,e){const t=e.frameCount;if(!zi(i,t))return;const n=i.children;let s=!1;for(let r=0,a=n.length;r<a;r++){const o=n[r];s=s||zi(o,t)}if(!s)i.traversal.isLeaf=!0;else{let r=!0;for(let a=0,o=n.length;a<o;a++){const l=n[a];if(Sm(l,e),zi(l,t)){const c=!Jh(l);let h=!l.internal.hasContent||l.internal.hasRenderableContent&&xm(l.internal.loadingState)||l.internal.hasUnrenderableContent&&l.internal.loadingState===es;h=c&&h||l.traversal.allChildrenReady,r=r&&h}}i.traversal.allChildrenReady=r}}function Mm(i,e){const t=e.stats;if(!zi(i,e.frameCount))return;if(i.traversal.isLeaf){i.internal.loadingState===Dn?(i.traversal.inFrustum&&(i.traversal.visible=!0,t.visible++),i.traversal.active=!0,t.active++):i.internal.hasContent&&e.queueTileForDownload(i);return}const n=i.children,s=i.internal.hasContent,r=xm(i.internal.loadingState)&&s,a=(e.errorTarget+1)*e.errorThreshold,o=i.traversal.error<=a,l=i.refine==="ADD",c=i.traversal.allChildrenReady||i.internal.depth===0&&!_m;if(s&&(o||l)&&e.queueTileForDownload(i),(o&&r&&!c||r&&l)&&(i.traversal.inFrustum&&(i.traversal.visible=!0,t.visible++),i.traversal.active=!0,t.active++),!l&&o&&!c)for(let h=0,d=n.length;h<d;h++){const u=n[h];zi(u,e.frameCount)&&vm(u,e)}else for(let h=0,d=n.length;h<d;h++)Mm(n[h],e)}function bm(i,e){const t=zi(i,e.frameCount);if(t||jh(i)&&i.traversal.usedLastFrame){let n=!1,s=!1;t?(n=i.traversal.active,e.displayActiveTiles?s=i.traversal.active||i.traversal.visible:s=i.traversal.visible):Qh(i,e),i.internal.hasRenderableContent&&i.internal.loadingState===Dn&&(i.traversal.wasSetActive!==n&&e.invokeOnePlugin(a=>a.setTileActive&&a.setTileActive(i,n)),i.traversal.wasSetVisible!==s&&e.invokeOnePlugin(a=>a.setTileVisible&&a.setTileVisible(i,s))),i.traversal.wasSetActive=n,i.traversal.wasSetVisible=s,i.traversal.usedLastFrame=t;const r=i.children;for(let a=0,o=r.length;a<o;a++){const l=r[a];bm(l,e)}}}function gT(i,e){ym(i,e),Sm(i,e),Mm(i,e),bm(i,e)}function _T(i){let e=null;return()=>{e===null&&(e=Js.requestAnimationFrame(()=>{e=null,i()}))}}const mf=Symbol("PLUGIN_REGISTERED"),Ni={inView:!0,error:0,distance:1/0},$l=(i,e)=>{const t=i.priority||0,n=e.priority||0;return t!==n?t>n?1:-1:!i.traversal||!e.traversal?0:i.traversal.used!==e.traversal.used?i.traversal.used?1:-1:i.traversal.error!==e.traversal.error?i.traversal.error>e.traversal.error?1:-1:i.traversal.distanceFromCamera!==e.traversal.distanceFromCamera?i.traversal.distanceFromCamera>e.traversal.distanceFromCamera?-1:1:i.internal.depthFromRenderedParent!==e.internal.depthFromRenderedParent?i.internal.depthFromRenderedParent>e.internal.depthFromRenderedParent?-1:1:0},xT=(i,e)=>{const t=i.priority||0,n=e.priority||0;return t!==n?t>n?1:-1:!i.traversal||!e.traversal?0:i.traversal.used!==e.traversal.used?i.traversal.used?1:-1:i.traversal.inFrustum!==e.traversal.inFrustum?i.traversal.inFrustum?1:-1:i.internal.hasUnrenderableContent!==e.internal.hasUnrenderableContent?i.internal.hasUnrenderableContent?1:-1:i.traversal.distanceFromCamera!==e.traversal.distanceFromCamera?i.traversal.distanceFromCamera>e.traversal.distanceFromCamera?-1:1:0},vT=(i,e)=>{const t=i.priority||0,n=e.priority||0;return t!==n?t>n?1:-1:!i.traversal||!e.traversal?0:i.traversal.lastFrameVisited!==e.traversal.lastFrameVisited?i.traversal.lastFrameVisited>e.traversal.lastFrameVisited?-1:1:i.internal.depthFromRenderedParent!==e.internal.depthFromRenderedParent?i.internal.depthFromRenderedParent>e.internal.depthFromRenderedParent?1:-1:i.internal.loadingState!==e.internal.loadingState?i.internal.loadingState>e.internal.loadingState?-1:1:i.internal.hasUnrenderableContent!==e.internal.hasUnrenderableContent?i.internal.hasUnrenderableContent?-1:1:i.traversal.error!==e.traversal.error?i.traversal.error>e.traversal.error?-1:1:0};let yT=class{get root(){const e=this.rootTileset;return e?e.root:null}get rootTileSet(){return console.warn('TilesRenderer: "rootTileSet" has been deprecated. Use "rootTileset" instead.'),this.rootTileset}get loadProgress(){const{stats:e,isLoading:t}=this,n=e.queued+e.downloading+e.parsing,s=e.inCacheSinceLoad+(t?1:0);return s===0?1:1-n/s}get errorThreshold(){return this._errorThreshold}set errorThreshold(e){console.warn('TilesRenderer: The "errorThreshold" option has been deprecated.'),this._errorThreshold=e}constructor(e=null){this.rootLoadingState=Ii,this.rootTileset=null,this.rootURL=e,this.fetchOptions={},this.plugins=[],this.queuedTiles=[],this.cachedSinceLoadComplete=new Set,this.isLoading=!1;const t=new hT;t.unloadPriorityCallback=vT;const n=new Yl;n.maxJobs=25,n.priorityCallback=$l;const s=new Yl;s.maxJobs=5,s.priorityCallback=$l;const r=new Yl;r.maxJobs=25,r.priorityCallback=(a,o)=>{const l=a.parent,c=o.parent;return l===c?0:l?c?n.priorityCallback(l,c):-1:1},this.processedTiles=new WeakSet,this.visibleTiles=new Set,this.activeTiles=new Set,this.usedSet=new Set,this.loadingTiles=new Set,this.lruCache=t,this.downloadQueue=n,this.parseQueue=s,this.processNodeQueue=r,this.stats={inCacheSinceLoad:0,inCache:0,queued:0,downloading:0,parsing:0,loaded:0,failed:0,inFrustum:0,used:0,active:0,visible:0,tilesProcessed:0},this.frameCount=0,this._dispatchNeedsUpdateEvent=_T(()=>{this.dispatchEvent({type:"needs-update"})}),this.errorTarget=16,this._errorThreshold=1/0,this.displayActiveTiles=!1,this.maxDepth=1/0,this.optimizedLoadStrategy=!1,this.loadSiblings=!0,this.maxTilesProcessed=250}registerPlugin(e){if(e[mf]===!0)throw new Error("TilesRendererBase: A plugin can only be registered to a single tileset");e.loadRootTileSet&&!e.loadRootTileset&&(console.warn('TilesRendererBase: Plugin implements deprecated "loadRootTileSet" method. Please rename to "loadRootTileset".'),e.loadRootTileset=e.loadRootTileSet),e.preprocessTileSet&&!e.preprocessTileset&&(console.warn('TilesRendererBase: Plugin implements deprecated "preprocessTileSet" method. Please rename to "preprocessTileset".'),e.preprocessTileset=e.preprocessTileSet);const t=this.plugins,n=e.priority||0;let s=t.length;for(let r=0;r<t.length;r++)if((t[r].priority||0)>n){s=r;break}t.splice(s,0,e),e[mf]=!0,e.init&&e.init(this)}unregisterPlugin(e){const t=this.plugins;if(typeof e=="string"&&(e=this.getPluginByName(e)),t.includes(e)){const n=t.indexOf(e);return t.splice(n,1),e.dispose&&e.dispose(),!0}return!1}getPluginByName(e){return this.plugins.find(t=>t.name===e)||null}invokeOnePlugin(e){const t=[...this.plugins,this];for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}invokeAllPlugins(e){const t=[...this.plugins,this],n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n.length===0?null:Promise.all(n)}traverse(e,t,n=!0){this.root&&cm(this.root,(s,...r)=>(n&&this.ensureChildrenArePreprocessed(s,!0),e?e(s,...r):!1),t)}getAttributions(e=[]){return this.invokeAllPlugins(t=>t!==this&&t.getAttributions&&t.getAttributions(e)),e}update(){const{lruCache:e,usedSet:t,stats:n,root:s,downloadQueue:r,parseQueue:a,processNodeQueue:o,optimizedLoadStrategy:l}=this;if(this.rootLoadingState===Ii&&(this.rootLoadingState=Ya,this.invokeOnePlugin(u=>u.loadRootTileset&&u.loadRootTileset()).then(u=>{let f=this.rootURL;f!==null&&this.invokeAllPlugins(p=>f=p.preprocessURL?p.preprocessURL(f,null):f),this.rootLoadingState=Dn,this.rootTileset=u,this.dispatchEvent({type:"needs-update"}),this.dispatchEvent({type:"load-content"}),this.dispatchEvent({type:"load-tileset",tileset:u,url:f}),this.dispatchEvent({type:"load-root-tileset",tileset:u,url:f})}).catch(u=>{this.rootLoadingState=es,console.error(u),this.rootTileset=null,this.dispatchEvent({type:"load-error",tile:null,error:u,url:this.rootURL})})),!s)return;let c=null;if(this.invokeAllPlugins(u=>{if(u.doTilesNeedUpdate){const f=u.doTilesNeedUpdate();c===null?c=f:c=!!(c||f)}}),c===!1){this.dispatchEvent({type:"update-before"}),this.dispatchEvent({type:"update-after"});return}this.dispatchEvent({type:"update-before"}),n.inFrustum=0,n.used=0,n.active=0,n.visible=0,n.tilesProcessed=0,this.frameCount++,t.forEach(u=>e.markUnused(u)),t.clear();const h=l?xT:$l;r.priorityCallback=h,a.priorityCallback=h,this.prepareForTraversal(),l?pT(s,this):gT(s,this),this.removeUnusedPendingTiles();const d=this.queuedTiles;d.sort(e.unloadPriorityCallback);for(let u=0,f=d.length;u<f&&!e.isFull();u++)this.requestTileContents(d[u]);d.length=0,e.scheduleUnload(),(r.running||a.running||o.running)===!1&&this.isLoading===!0&&(this.cachedSinceLoadComplete.clear(),n.inCacheSinceLoad=0,this.dispatchEvent({type:"tiles-load-end"}),this.isLoading=!1),this.dispatchEvent({type:"update-after"})}resetFailedTiles(){this.rootLoadingState===es&&(this.rootLoadingState=Ii);const e=this.stats;e.failed!==0&&(this.traverse(t=>{t.internal.loadingState===es&&(t.internal.loadingState=Ii)},null,!1),e.failed=0)}calculateTileViewErrorWithPlugin(e,t){this.calculateTileViewError(e,t);let n=null,s=0,r=1/0;this.invokeAllPlugins(a=>{a!==this&&a.calculateTileViewError&&(Ni.inView=!0,Ni.error=0,Ni.distance=1/0,a.calculateTileViewError(e,Ni)&&(n===null&&(n=!0),n=n&&Ni.inView,Ni.inView&&(r=Math.min(r,Ni.distance),s=Math.max(s,Ni.error))))}),t.inView&&n!==!1?(t.error=Math.max(t.error,s),t.distanceFromCamera=Math.min(t.distanceFromCamera,r)):n?(t.inView=!0,t.error=s,t.distanceFromCamera=r):t.inView=!1}dispose(){[...this.plugins].forEach(n=>{this.unregisterPlugin(n)});const e=this.lruCache,t=[];this.traverse(n=>(t.push(n),!1),null,!1);for(let n=0,s=t.length;n<s;n++)e.remove(t[n]);this.stats={queued:0,parsing:0,downloading:0,failed:0,inFrustum:0,traversed:0,used:0,active:0,visible:0},this.frameCount=0,this.loadingTiles.clear()}calculateBytesUsed(e,t){return 0}dispatchEvent(e){}addEventListener(e,t){}removeEventListener(e,t){}parseTile(e,t,n){return null}prepareForTraversal(){}disposeTile(e){e.traversal.visible&&(this.invokeOnePlugin(n=>n.setTileVisible&&n.setTileVisible(e,!1)),e.traversal.visible=!1),e.traversal.active&&(this.invokeOnePlugin(n=>n.setTileActive&&n.setTileActive(e,!1)),e.traversal.active=!1);const{scene:t}=e.engineData;t&&this.dispatchEvent({type:"dispose-model",scene:t,tile:e})}preprocessNode(e,t,n=null){var s;if(this.processedTiles.add(e),this.stats.tilesProcessed++,e.content&&(!("uri"in e.content)&&"url"in e.content&&(e.content.uri=e.content.url,delete e.content.url),e.content.boundingVolume&&!("box"in e.content.boundingVolume||"sphere"in e.content.boundingVolume||"region"in e.content.boundingVolume)&&delete e.content.boundingVolume),e.parent=n,e.children=e.children||[],e.internal={hasContent:!1,hasRenderableContent:!1,hasUnrenderableContent:!1,loadingState:Ii,basePath:t,depth:-1,depthFromRenderedParent:-1,isVirtual:!1,virtualChildCount:0,...e.internal},(s=e.content)!=null&&s.uri){const r=ff(e.content.uri),a=!!(r&&/json$/.test(r));e.internal.hasContent=!0,e.internal.hasUnrenderableContent=a,e.internal.hasRenderableContent=!a}else e.internal.hasContent=!1,e.internal.hasUnrenderableContent=!1,e.internal.hasRenderableContent=!1;n?(e.internal.depth=n.internal.depth+1,e.internal.depthFromRenderedParent=n.internal.depthFromRenderedParent+(e.internal.hasRenderableContent?1:0)):(e.internal.depth=0,e.internal.depthFromRenderedParent=e.internal.hasRenderableContent?1:0),e.traversal={distanceFromCamera:1/0,error:1/0,inFrustum:!1,isLeaf:!1,used:!1,usedLastFrame:!1,visible:!1,wasSetVisible:!1,active:!1,wasSetActive:!1,allChildrenReady:!1,kicked:!1,allUsedChildrenProcessed:!1,lastFrameVisited:-1},n===null?e.refine=e.refine||"REPLACE":e.refine=e.refine||n.refine,e.engineData={scene:null,metadata:null,boundingVolume:null},Object.defineProperty(e,"cached",{get(){return console.warn('TilesRenderer: "tile.cached" field has been renamed to "tile.engineData".'),this.engineData},enumerable:!1,configurable:!0}),this.invokeAllPlugins(r=>{r!==this&&r.preprocessNode&&r.preprocessNode(e,t,n)})}setTileActive(e,t){t?this.activeTiles.add(e):this.activeTiles.delete(e)}setTileVisible(e,t){t?this.visibleTiles.add(e):this.visibleTiles.delete(e),this.dispatchEvent({type:"tile-visibility-change",scene:e.engineData.scene,tile:e,visible:t})}calculateTileViewError(e,t){}removeUnusedPendingTiles(){const{lruCache:e,loadingTiles:t}=this,n=[];for(const s of t)!e.isUsed(s)&&s.internal.loadingState===qa&&n.push(s);for(let s=0;s<n.length;s++)e.remove(n[s])}queueTileForDownload(e){e.internal.loadingState!==Ii||this.lruCache.isFull()||this.queuedTiles.push(e)}markTileUsed(e){this.usedSet.add(e),this.lruCache.markUsed(e)}fetchData(e,t){return fetch(e,t)}ensureChildrenArePreprocessed(e,t=this.stats.tilesProcessed<this.maxTilesProcessed){const n=e.children;if(n.length===0||n[n.length-1].traversal)return;const s=r=>{for(let a=0,o=r.length;a<o;a++){const l=r[a];l&&!l.traversal&&this.preprocessNode(l,e.internal.basePath,e)}};t?(this.processNodeQueue.remove(e),s(n)):this.processNodeQueue.has(e)||this.processNodeQueue.add(e,r=>{s(r.children),this._dispatchNeedsUpdateEvent()})}getBytesUsed(e){let t=0;return this.invokeAllPlugins(n=>{n.calculateBytesUsed&&(t+=n.calculateBytesUsed(e,e.engineData.scene)||0)}),t}recalculateBytesUsed(e=null){const{lruCache:t,processedTiles:n}=this;e===null?t.itemSet.forEach(s=>{n.has(s)&&t.setMemoryUsage(s,this.getBytesUsed(s))}):t.setMemoryUsage(e,this.getBytesUsed(e))}preprocessTileset(e,t,n=null){const s=Object.getPrototypeOf(this);Object.hasOwn(s,"preprocessTileSet")&&console.warn(`${s.constructor.name}: Class overrides deprecated "preprocessTileSet" method. Please rename to "preprocessTileset".`);const r=e.asset.version,[a,o]=r.split(".").map(c=>parseInt(c));console.assert(a<=1,"TilesRenderer: asset.version is expected to be a 1.x or a compatible version."),a===1&&o>0&&console.warn("TilesRenderer: tiles versions at 1.1 or higher have limited support. Some new extensions and features may not be supported.");let l=t.replace(/\/[^/]*$/,"");l=new URL(l,window.location.href).toString(),this.preprocessNode(e.root,l,n)}preprocessTileSet(...e){return console.warn('TilesRenderer: "preprocessTileSet" has been deprecated. Use "preprocessTileset" instead.'),this.preprocessTileset(...e)}loadRootTileset(){const e=Object.getPrototypeOf(this);Object.hasOwn(e,"loadRootTileSet")&&console.warn(`${e.constructor.name}: Class overrides deprecated "loadRootTileSet" method. Please rename to "loadRootTileset".`);let t=this.rootURL;return this.invokeAllPlugins(n=>t=n.preprocessURL?n.preprocessURL(t,null):t),this.invokeOnePlugin(n=>n.fetchData&&n.fetchData(t,this.fetchOptions)).then(n=>{if(n instanceof Response){if(n.ok)return n.json();throw new Error(`TilesRenderer: Failed to load tileset "${t}" with status ${n.status} : ${n.statusText}`)}else return n}).then(n=>(this.preprocessTileset(n,t),n))}loadRootTileSet(...e){return console.warn('TilesRenderer: "loadRootTileSet" has been deprecated. Use "loadRootTileset" instead.'),this.loadRootTileSet(...e)}requestTileContents(e){if(e.internal.loadingState!==Ii)return;let t=!1,n=null,s=new URL(e.content.uri,e.internal.basePath+"/").toString();this.invokeAllPlugins(f=>s=f.preprocessURL?f.preprocessURL(s,e):s);const r=this.stats,a=this.lruCache,o=this.downloadQueue,l=this.parseQueue,c=this.loadingTiles,h=ff(s),d=new AbortController,u=d.signal;if(a.add(e,f=>{d.abort(),t?f.children.length=0:this.invokeAllPlugins(p=>{p.disposeTile&&p.disposeTile(f)}),r.inCache--,this.cachedSinceLoadComplete.has(e)&&(this.cachedSinceLoadComplete.delete(e),r.inCacheSinceLoad--),f.internal.loadingState===qa?r.queued--:f.internal.loadingState===Ya?r.downloading--:f.internal.loadingState===Kl?r.parsing--:f.internal.loadingState===Dn&&r.loaded--,f.internal.loadingState=Ii,l.remove(f),o.remove(f),c.delete(f)}))return this.isLoading||(this.isLoading=!0,this.dispatchEvent({type:"tiles-load-start"})),a.setMemoryUsage(e,this.getBytesUsed(e)),this.cachedSinceLoadComplete.add(e),r.inCacheSinceLoad++,r.inCache++,r.queued++,e.internal.loadingState=qa,c.add(e),o.add(e,f=>{if(u.aborted)return Promise.resolve();e.internal.loadingState=Ya,r.downloading++,r.queued--;const p=this.invokeOnePlugin(_=>_.fetchData&&_.fetchData(s,{...this.fetchOptions,signal:u}));return this.dispatchEvent({type:"tile-download-start",tile:e,uri:s}),p}).then(f=>{if(!u.aborted)if(f instanceof Response){if(f.ok)return h==="json"?f.json():f.arrayBuffer();throw new Error(`Failed to load model with error code ${f.status}`)}else return f}).then(f=>{if(!u.aborted)return r.downloading--,r.parsing++,e.internal.loadingState=Kl,l.add(e,p=>u.aborted?Promise.resolve():h==="json"&&f.root?(this.preprocessTileset(f,s,e),e.children.push(f.root),n=f,t=!0,Promise.resolve()):this.invokeOnePlugin(_=>_.parseTile&&_.parseTile(f,p,h,s,u)))}).then(()=>{if(u.aborted)return;r.parsing--,r.loaded++,e.internal.loadingState=Dn,c.delete(e),a.setLoaded(e,!0);const f=this.getBytesUsed(e);if(a.getMemoryUsage(e)===0&&f>0&&a.isFull()){a.remove(e);return}a.setMemoryUsage(e,f),this.dispatchEvent({type:"needs-update"}),this.dispatchEvent({type:"load-content"}),t&&this.dispatchEvent({type:"load-tileset",tileset:n,url:s}),e.engineData.scene&&this.dispatchEvent({type:"load-model",scene:e.engineData.scene,tile:e,url:s})}).catch(f=>{u.aborted||(f.name!=="AbortError"?(l.remove(e),o.remove(e),e.internal.loadingState===qa?r.queued--:e.internal.loadingState===Ya?r.downloading--:e.internal.loadingState===Kl?r.parsing--:e.internal.loadingState===Dn&&r.loaded--,r.failed++,console.error(`TilesRenderer : Failed to load tile at url "${e.content.uri}".`),console.error(f),e.internal.loadingState=es,c.delete(e),a.setLoaded(e,!0),this.dispatchEvent({type:"load-error",tile:e,error:f,url:s})):a.remove(e))})}};function Tm(i,e,t,n,s,r){let a;switch(n){case"SCALAR":a=1;break;case"VEC2":a=2;break;case"VEC3":a=3;break;case"VEC4":a=4;break;default:throw new Error(`FeatureTable : Feature type not provided for "${r}".`)}let o;const l=t*a;switch(s){case"BYTE":o=new Int8Array(i,e,l);break;case"UNSIGNED_BYTE":o=new Uint8Array(i,e,l);break;case"SHORT":o=new Int16Array(i,e,l);break;case"UNSIGNED_SHORT":o=new Uint16Array(i,e,l);break;case"INT":o=new Int32Array(i,e,l);break;case"UNSIGNED_INT":o=new Uint32Array(i,e,l);break;case"FLOAT":o=new Float32Array(i,e,l);break;case"DOUBLE":o=new Float64Array(i,e,l);break;default:throw new Error(`FeatureTable : Feature component type not provided for "${r}".`)}return o}let $o=class{constructor(e,t,n,s){this.buffer=e,this.binOffset=t+n,this.binLength=s;let r=null;if(n!==0){const a=new Uint8Array(e,t,n);r=JSON.parse(hm(a))}else r={};this.header=r}getKeys(){return Object.keys(this.header).filter(e=>e!=="extensions")}getData(e,t,n=null,s=null){const r=this.header;if(!(e in r))return null;const a=r[e];if(a instanceof Object){if(Array.isArray(a))return a;{const{buffer:o,binOffset:l,binLength:c}=this,h=a.byteOffset||0,d=a.type||s,u=a.componentType||n;if("type"in a&&s&&a.type!==s)throw new Error("FeatureTable: Specified type does not match expected type.");const f=l+h,p=Tm(o,f,t,d,u,e);if(f+p.byteLength>l+c)throw new Error("FeatureTable: Feature data read outside binary body length.");return p}}else return a}getBuffer(e,t){const{buffer:n,binOffset:s}=this;return n.slice(s+e,s+e+t)}};class ST{constructor(e){this.batchTable=e;const t=e.header.extensions["3DTILES_batch_table_hierarchy"];this.classes=t.classes;for(const s of this.classes){const r=s.instances;for(const a in r)s.instances[a]=this._parseProperty(r[a],s.length,a)}if(this.instancesLength=t.instancesLength,this.classIds=this._parseProperty(t.classIds,this.instancesLength,"classIds"),t.parentCounts?this.parentCounts=this._parseProperty(t.parentCounts,this.instancesLength,"parentCounts"):this.parentCounts=new Array(this.instancesLength).fill(1),t.parentIds){const s=this.parentCounts.reduce((r,a)=>r+a,0);this.parentIds=this._parseProperty(t.parentIds,s,"parentIds")}else this.parentIds=null;this.instancesIds=[];const n={};for(const s of this.classIds)n[s]=n[s]??0,this.instancesIds.push(n[s]),n[s]++}_parseProperty(e,t,n){if(Array.isArray(e))return e;{const{buffer:s,binOffset:r}=this.batchTable,a=e.byteOffset,o=e.componentType||"UNSIGNED_SHORT",l=r+a;return Tm(s,l,t,"SCALAR",o,n)}}getDataFromId(e,t={}){const n=this.parentCounts[e];if(this.parentIds&&n>0){let l=0;for(let c=0;c<e;c++)l+=this.parentCounts[c];for(let c=0;c<n;c++){const h=this.parentIds[l+c];h!==e&&this.getDataFromId(h,t)}}const s=this.classIds[e],r=this.classes[s].instances,a=this.classes[s].name,o=this.instancesIds[e];for(const l in r)t[a]=t[a]||{},t[a][l]=r[l][o];return t}}let eu=class extends $o{get batchSize(){return console.warn("BatchTable.batchSize has been deprecated and replaced with BatchTable.count."),this.count}constructor(e,t,n,s,r){super(e,n,s,r),this.count=t,this.extensions={};const a=this.header.extensions;a&&a["3DTILES_batch_table_hierarchy"]&&(this.extensions["3DTILES_batch_table_hierarchy"]=new ST(this))}getData(e,t=null,n=null){return console.warn("BatchTable: BatchTable.getData is deprecated. Use BatchTable.getDataFromId to get allproperties for an id or BatchTable.getPropertyArray for getting an array of value for a property."),super.getData(e,this.count,t,n)}getDataFromId(e,t={}){if(e<0||e>=this.count)throw new Error(`BatchTable: id value "${e}" out of bounds for "${this.count}" features number.`);for(const n of this.getKeys())t[n]=super.getData(n,this.count)[e];for(const n in this.extensions){const s=this.extensions[n];s.getDataFromId instanceof Function&&(t[n]=t[n]||{},s.getDataFromId(e,t[n]))}return t}getPropertyArray(e){return super.getData(e,this.count)}};class MT extends Yo{parse(e){const t=new DataView(e),n=Qs(t);console.assert(n==="b3dm");const s=t.getUint32(4,!0);console.assert(s===1);const r=t.getUint32(8,!0);console.assert(r===e.byteLength);const a=t.getUint32(12,!0),o=t.getUint32(16,!0),l=t.getUint32(20,!0),c=t.getUint32(24,!0),h=28,d=e.slice(h,h+a+o),u=new $o(d,0,a,o),f=h+a+o,p=e.slice(f,f+l+c),_=new eu(p,u.getData("BATCH_LENGTH"),0,l,c),g=f+l+c,m=new Uint8Array(e,g,r-g);return{version:s,featureTable:u,batchTable:_,glbBytes:m}}}class bT extends Yo{parse(e){const t=new DataView(e),n=Qs(t);console.assert(n==="i3dm");const s=t.getUint32(4,!0);console.assert(s===1);const r=t.getUint32(8,!0);console.assert(r===e.byteLength);const a=t.getUint32(12,!0),o=t.getUint32(16,!0),l=t.getUint32(20,!0),c=t.getUint32(24,!0),h=t.getUint32(28,!0),d=32,u=e.slice(d,d+a+o),f=new $o(u,0,a,o),p=d+a+o,_=e.slice(p,p+l+c),g=new eu(_,f.getData("INSTANCES_LENGTH"),0,l,c),m=p+l+c,y=new Uint8Array(e,m,r-m);let M=null,x=null,R=null;if(h)M=y,x=Promise.resolve();else{const T=this.resolveExternalURL(hm(y));R=Kh(T),x=fetch(T,this.fetchOptions).then(C=>{if(!C.ok)throw new Error(`I3DMLoaderBase : Failed to load file "${T}" with status ${C.status} : ${C.statusText}`);return C.arrayBuffer()}).then(C=>{M=new Uint8Array(C)})}return x.then(()=>({version:s,featureTable:f,batchTable:g,glbBytes:M,gltfWorkingPath:R}))}}let TT=class extends Yo{parse(e){const t=new DataView(e),n=Qs(t);console.assert(n==="pnts");const s=t.getUint32(4,!0);console.assert(s===1);const r=t.getUint32(8,!0);console.assert(r===e.byteLength);const a=t.getUint32(12,!0),o=t.getUint32(16,!0),l=t.getUint32(20,!0),c=t.getUint32(24,!0),h=28,d=e.slice(h,h+a+o),u=new $o(d,0,a,o),f=h+a+o,p=e.slice(f,f+l+c),_=new eu(p,u.getData("BATCH_LENGTH")||u.getData("POINTS_LENGTH"),0,l,c);return Promise.resolve({version:s,featureTable:u,batchTable:_})}},ET=class extends Yo{parse(e){const t=new DataView(e),n=Qs(t);console.assert(n==="cmpt",'CMPTLoader: The magic bytes equal "cmpt".');const s=t.getUint32(4,!0);console.assert(s===1,'CMPTLoader: The version listed in the header is "1".');const r=t.getUint32(8,!0);console.assert(r===e.byteLength,"CMPTLoader: The contents buffer length listed in the header matches the file.");const a=t.getUint32(12,!0),o=[];let l=16;for(let c=0;c<a;c++){const h=new DataView(e,l,12),d=Qs(h),u=h.getUint32(4,!0),f=h.getUint32(8,!0),p=new Uint8Array(e,l,f);o.push({type:d,buffer:p,version:u}),l+=f}return{version:s,tiles:o}}};function AT(i){const{x:e,y:t,z:n}=i;i.x=n,i.y=e,i.z=t}function wT(i){return-i+Math.PI/2}const gf=new rh,Ui=new E,Yt=new E,jl=new E,xn=new Ee,Hn=new Ee,_f=new Ee,Zl=new An,Qt=new Un,xf=new E,vf=new E,yf=new E,$i=new E,ja=new Si,RT=1e-12,CT=.1,Za=0,Sf=1,Ja=2;let Em=class{constructor(e=1,t=1,n=1){this.name="",this.radius=new E(e,t,n)}intersectRay(e,t){return xn.makeScale(...this.radius).invert(),Zl.center.set(0,0,0),Zl.radius=1,ja.copy(e).applyMatrix4(xn),ja.intersectSphere(Zl,t)?(xn.makeScale(...this.radius),t.applyMatrix4(xn),t):null}getEastNorthUpFrame(e,t,n,s){return n.isMatrix4&&(s=n,n=0,console.warn('Ellipsoid: The signature for "getEastNorthUpFrame" has changed.')),this.getEastNorthUpAxes(e,t,xf,vf,yf),this.getCartographicToPosition(e,t,n,$i),s.makeBasis(xf,vf,yf).setPosition($i)}getOrientedEastNorthUpFrame(e,t,n,s,r,a,o){return this.getObjectFrame(e,t,n,s,r,a,o,Za)}getObjectFrame(e,t,n,s,r,a,o,l=Ja){return this.getEastNorthUpFrame(e,t,n,xn),Qt.set(r,a,-s,"ZXY"),o.makeRotationFromEuler(Qt).premultiply(xn),l===Sf?(Qt.set(Math.PI/2,0,0,"XYZ"),Hn.makeRotationFromEuler(Qt),o.multiply(Hn)):l===Ja&&(Qt.set(-Math.PI/2,0,Math.PI,"XYZ"),Hn.makeRotationFromEuler(Qt),o.multiply(Hn)),o}getCartographicFromObjectFrame(e,t,n=Ja){return n===Sf?(Qt.set(-Math.PI/2,0,0,"XYZ"),Hn.makeRotationFromEuler(Qt).premultiply(e)):n===Ja?(Qt.set(-Math.PI/2,0,Math.PI,"XYZ"),Hn.makeRotationFromEuler(Qt).premultiply(e)):Hn.copy(e),$i.setFromMatrixPosition(Hn),this.getPositionToCartographic($i,t),this.getEastNorthUpFrame(t.lat,t.lon,0,xn).invert(),Hn.premultiply(xn),Qt.setFromRotationMatrix(Hn,"ZXY"),t.azimuth=-Qt.z,t.elevation=Qt.x,t.roll=Qt.y,t}getEastNorthUpAxes(e,t,n,s,r,a=$i){this.getCartographicToPosition(e,t,0,a),this.getCartographicToNormal(e,t,r),n.set(-a.y,a.x,0).normalize(),s.crossVectors(r,n).normalize()}getAzElRollFromRotationMatrix(e,t,n,s,r=Za){return console.warn('Ellipsoid: "getAzElRollFromRotationMatrix" is deprecated. Use "getCartographicFromObjectFrame", instead.'),this.getCartographicToPosition(e,t,0,$i),_f.copy(n).setPosition($i),this.getCartographicFromObjectFrame(_f,s,r),delete s.height,delete s.lat,delete s.lon,s}getRotationMatrixFromAzElRoll(e,t,n,s,r,a,o=Za){return console.warn('Ellipsoid: "getRotationMatrixFromAzElRoll" function has been deprecated. Use "getObjectFrame", instead.'),this.getObjectFrame(e,t,0,n,s,r,a,o),a.setPosition(0,0,0),a}getFrame(e,t,n,s,r,a,o,l=Za){return console.warn('Ellipsoid: "getFrame" function has been deprecated. Use "getObjectFrame", instead.'),this.getObjectFrame(e,t,a,n,s,r,o,l)}getCartographicToPosition(e,t,n,s){this.getCartographicToNormal(e,t,Ui);const r=this.radius;Yt.copy(Ui),Yt.x*=r.x**2,Yt.y*=r.y**2,Yt.z*=r.z**2;const a=Math.sqrt(Ui.dot(Yt));return Yt.divideScalar(a),s.copy(Yt).addScaledVector(Ui,n)}getPositionToCartographic(e,t){this.getPositionToSurfacePoint(e,Yt),this.getPositionToNormal(Yt,Ui);const n=jl.subVectors(e,Yt);return t.lon=Math.atan2(Ui.y,Ui.x),t.lat=Math.asin(Ui.z),t.height=Math.sign(n.dot(e))*n.length(),t}getCartographicToNormal(e,t,n){return gf.set(1,wT(e),t),n.setFromSpherical(gf).normalize(),AT(n),n}getPositionToNormal(e,t){const n=this.radius;return t.copy(e),t.x/=n.x**2,t.y/=n.y**2,t.z/=n.z**2,t.normalize(),t}getPositionToSurfacePoint(e,t){const n=this.radius,s=1/n.x**2,r=1/n.y**2,a=1/n.z**2,o=e.x*e.x*s,l=e.y*e.y*r,c=e.z*e.z*a,h=o+l+c,d=Math.sqrt(1/h),u=Yt.copy(e).multiplyScalar(d);if(h<CT)return isFinite(d)?t.copy(u):null;const f=jl.set(u.x*s*2,u.y*r*2,u.z*a*2);let p=(1-d)*e.length()/(.5*f.length()),_=0,g,m,y,M,x,R,T,C,v,w,D;do{p-=_,y=1/(1+p*s),M=1/(1+p*r),x=1/(1+p*a),R=y*y,T=M*M,C=x*x,v=R*y,w=T*M,D=C*x,g=o*R+l*T+c*C-1,m=o*v*s+l*w*r+c*D*a;const P=-2*m;_=g/P}while(Math.abs(g)>RT);return t.set(e.x*y,e.y*M,e.z*x)}calculateHorizonDistance(e,t){const n=this.calculateEffectiveRadius(e);return Math.sqrt(2*n*t+t**2)}calculateEffectiveRadius(e){const t=this.radius.x,n=1-this.radius.z**2/t**2,s=e*rn.DEG2RAD,r=Math.sin(s)**2;return t/Math.sqrt(1-n*r)}getPositionElevation(e){this.getPositionToSurfacePoint(e,Yt);const t=jl.subVectors(e,Yt);return Math.sign(t.dot(e))*t.length()}closestPointToRayEstimate(e,t){return this.intersectRay(e,t)?t:(xn.makeScale(...this.radius).invert(),ja.copy(e).applyMatrix4(xn),Yt.set(0,0,0),ja.closestPointToPoint(Yt,t).normalize(),xn.makeScale(...this.radius),t.applyMatrix4(xn))}copy(e){return this.radius.copy(e.radius),this}clone(){return new this.constructor().copy(this)}};const jo=new Em(df,df,uT);jo.name="WGS84 Earth";const Qa=new E,eo=new E,en=new E,to=new Si;let Mf=class{constructor(e=new mn,t=new Ee){this.box=e.clone(),this.transform=t.clone(),this.inverseTransform=new Ee,this.points=new Array(8).fill().map(()=>new E),this.planes=new Array(6).fill().map(()=>new hi)}copy(e){return this.box.copy(e.box),this.transform.copy(e.transform),this.update(),this}clone(){return new this.constructor().copy(this)}clampPoint(e,t){return t.copy(e).applyMatrix4(this.inverseTransform).clamp(this.box.min,this.box.max).applyMatrix4(this.transform)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}containsPoint(e){return en.copy(e).applyMatrix4(this.inverseTransform),this.box.containsPoint(en)}intersectsRay(e){return to.copy(e).applyMatrix4(this.inverseTransform),to.intersectsBox(this.box)}intersectRay(e,t){return to.copy(e).applyMatrix4(this.inverseTransform),to.intersectBox(this.box,t)?(t.applyMatrix4(this.transform),t):null}update(){const{points:e,inverseTransform:t,transform:n,box:s}=this;t.copy(n).invert();const{min:r,max:a}=s;let o=0;for(let l=-1;l<=1;l+=2)for(let c=-1;c<=1;c+=2)for(let h=-1;h<=1;h+=2)e[o].set(l<0?r.x:a.x,c<0?r.y:a.y,h<0?r.z:a.z).applyMatrix4(n),o++;this.updatePlanes()}updatePlanes(){Qa.copy(this.box.min).applyMatrix4(this.transform),eo.copy(this.box.max).applyMatrix4(this.transform),en.set(0,0,1).transformDirection(this.transform),this.planes[0].setFromNormalAndCoplanarPoint(en,Qa),this.planes[1].setFromNormalAndCoplanarPoint(en,eo).negate(),en.set(0,1,0).transformDirection(this.transform),this.planes[2].setFromNormalAndCoplanarPoint(en,Qa),this.planes[3].setFromNormalAndCoplanarPoint(en,eo).negate(),en.set(1,0,0).transformDirection(this.transform),this.planes[4].setFromNormalAndCoplanarPoint(en,Qa),this.planes[5].setFromNormalAndCoplanarPoint(en,eo).negate()}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsFrustum(e){return this._intersectsPlaneShape(e.planes,e.points)}intersectsOBB(e){return this._intersectsPlaneShape(e.planes,e.points)}_intersectsPlaneShape(e,t){const n=this.points,s=this.planes;for(let r=0;r<6;r++){const a=e[r];let o=-1/0;for(let l=0;l<8;l++){const c=n[l],h=a.distanceToPoint(c);o=o<h?h:o}if(o<0)return!1}for(let r=0;r<6;r++){const a=s[r];let o=-1/0;for(let l=0;l<8;l++){const c=t[l],h=a.distanceToPoint(c);o=o<h?h:o}if(o<0)return!1}return!0}};const Jl=1e-13,Fr=Math.PI,Ql=Fr/2,Tr=new E,ji=new E,Pn=new E,We=new E,Kt=new Ee,PT=new mn,bf=new Ee;function Oi(i,e){e.radius=Math.max(e.radius,i.distanceToSquared(e.center))}function Tf(i){return i.x!==i.y}class LT extends Em{constructor(e=1,t=1,n=1,s=-Ql,r=Ql,a=0,o=2*Fr,l=0,c=0){super(e,t,n),this.latStart=s,this.latEnd=r,this.lonStart=a,this.lonEnd=o,this.heightStart=l,this.heightEnd=c}getBoundingBox(e,t){Tf(this.radius)&&console.warn("EllipsoidRegion: Triaxial ellipsoids are not supported.");const{latStart:n,latEnd:s,lonStart:r,lonEnd:a,heightStart:o,heightEnd:l}=this,c=(n+s)*.5,h=(r+a)*.5,d=n>0,u=s<0;let f;d?f=n:u?f=s:f=0;const{min:p,max:_}=e;p.setScalar(1/0),_.setScalar(-1/0),a-r<=Fr?(this.getCartographicToNormal(c,h,Pn),ji.set(0,0,1),Tr.crossVectors(ji,Pn).normalize(),ji.crossVectors(Pn,Tr).normalize(),t.makeBasis(Tr,ji,Pn),Kt.copy(t).invert(),this.getCartographicToPosition(f,r,l,We).applyMatrix4(Kt),_.x=Math.abs(We.x),p.x=-_.x,this.getCartographicToPosition(s,r,l,We).applyMatrix4(Kt),_.y=We.y,this.getCartographicToPosition(s,h,l,We).applyMatrix4(Kt),_.y=Math.max(We.y,_.y),this.getCartographicToPosition(n,r,l,We).applyMatrix4(Kt),p.y=We.y,this.getCartographicToPosition(n,h,l,We).applyMatrix4(Kt),p.y=Math.min(We.y,p.y),this.getCartographicToPosition(c,h,l,We).applyMatrix4(Kt),_.z=We.z,this.getCartographicToPosition(n,r,o,We).applyMatrix4(Kt),p.z=We.z,this.getCartographicToPosition(s,r,o,We).applyMatrix4(Kt),p.z=Math.min(We.z,p.z)):(this.getCartographicToPosition(f,h,l,Pn),Pn.z=0,Pn.length()<1e-10?Pn.set(1,0,0):Pn.normalize(),ji.set(0,0,1),Tr.crossVectors(Pn,ji).normalize(),t.makeBasis(Tr,ji,Pn),Kt.copy(t).invert(),this.getCartographicToPosition(f,h+Ql,l,We).applyMatrix4(Kt),_.x=Math.abs(We.x),p.x=-_.x,this.getCartographicToPosition(s,0,u?o:l,We).applyMatrix4(Kt),_.y=We.y,this.getCartographicToPosition(n,0,d?o:l,We).applyMatrix4(Kt),p.y=We.y,this.getCartographicToPosition(f,h,l,We).applyMatrix4(Kt),_.z=We.z,this.getCartographicToPosition(f,a,l,We).applyMatrix4(Kt),p.z=We.z),e.getCenter(We),e.min.sub(We).multiplyScalar(1+Jl),e.max.sub(We).multiplyScalar(1+Jl),We.applyMatrix4(t),t.setPosition(We)}getBoundingSphere(e){Tf(this.radius)&&console.warn("EllipsoidRegion: Triaxial ellipsoids are not supported."),this.getBoundingBox(PT,bf),e.center.setFromMatrixPosition(bf),e.radius=0;const{latStart:t,latEnd:n,lonStart:s,lonEnd:r,heightStart:a,heightEnd:o}=this,l=(t+n)*.5,c=(s+r)*.5,h=t>0,d=n<0;let u;h?u=t:d?u=n:u=0,this.getCartographicToPosition(u,s,o,We),Oi(We,e),this.getCartographicToPosition(n,s,o,We),Oi(We,e),this.getCartographicToPosition(n,c,o,We),Oi(We,e),this.getCartographicToPosition(t,s,o,We),Oi(We,e),this.getCartographicToPosition(t,c,o,We),Oi(We,e),this.getCartographicToPosition(l,c,o,We),Oi(We,e),this.getCartographicToPosition(t,s,a,We),Oi(We,e),r-s>Fr&&(this.getCartographicToPosition(u,c+Fr,o,We),Oi(We,e)),e.radius=Math.sqrt(e.radius)*(1+Jl)}}function DT(i){if(!i)return 0;const{format:e,type:t,image:n}=i,{width:s,height:r}=n;let a=cx.getByteLength(s,r,e,t);return a*=i.generateMipmaps?4/3:1,a}function IT(i){const e=new Set;let t=0;return i.traverse(n=>{if(n.geometry&&!e.has(n.geometry)&&(t+=ab(n.geometry),e.add(n.geometry)),n.material){const s=n.material;for(const r in s){const a=s[r];a&&a.isTexture&&!e.has(a)&&(t+=DT(a),e.add(a))}}}),t}class Am extends MT{constructor(e=ra){super(),this.manager=e,this.adjustmentTransform=new Ee}parse(e){const t=super.parse(e),n=t.glbBytes.slice().buffer;return new Promise((s,r)=>{const a=this.manager,o=this.fetchOptions,l=a.getHandler("path.gltf")||new aa(a);o.credentials==="include"&&o.mode==="cors"&&l.setCrossOrigin("use-credentials"),"credentials"in o&&l.setWithCredentials(o.credentials==="include"),o.headers&&l.setRequestHeader(o.headers);let c=this.workingPath;!/[\\/]$/.test(c)&&c.length&&(c+="/");const h=this.adjustmentTransform;l.parse(n,c,d=>{const{batchTable:u,featureTable:f}=t,{scene:p}=d,_=f.getData("RTC_CENTER",1,"FLOAT","VEC3");_&&(p.position.x+=_[0],p.position.y+=_[1],p.position.z+=_[2]),d.scene.updateMatrix(),d.scene.matrix.multiply(h),d.scene.matrix.decompose(d.scene.position,d.scene.quaternion,d.scene.scale),d.batchTable=u,d.featureTable=f,p.batchTable=u,p.featureTable=f,s(d)},r)})}}function NT(i){const e=i>>11,t=i>>5&63,n=i&31,s=Math.round(e/31*255),r=Math.round(t/63*255),a=Math.round(n/31*255);return[s,r,a]}const Er=new se;function UT(i,e,t=new E){Er.set(i,e).divideScalar(256).multiplyScalar(2).subScalar(1),t.set(Er.x,Er.y,1-Math.abs(Er.x)-Math.abs(Er.y));const n=rn.clamp(-t.z,0,1);return t.x>=0?t.setX(t.x-n):t.setX(t.x+n),t.y>=0?t.setY(t.y-n):t.setY(t.y+n),t.normalize(),t}const Ef={RGB:"color",POSITION:"position"};class wm extends TT{constructor(e=ra){super(),this.manager=e}parse(e){return super.parse(e).then(async t=>{const{featureTable:n,batchTable:s}=t,r=new Fh,a=n.header.extensions,o=new E;let l;if(a&&a["3DTILES_draco_point_compression"]){const{byteOffset:d,byteLength:u,properties:f}=a["3DTILES_draco_point_compression"],p=this.manager.getHandler("draco.drc");if(p==null)throw new Error("PNTSLoader: dracoLoader not available.");const _={};for(const y in f)if(y in Ef&&y in f){const M=Ef[y];_[M]=f[y]}const g={attributeIDs:_,attributeTypes:{position:"Float32Array",color:"Uint8Array"},useUniqueIDs:!0},m=n.getBuffer(d,u);l=await p.decodeGeometry(m,g),l.attributes.color&&(r.vertexColors=!0)}else{const d=n.getData("POINTS_LENGTH"),u=n.getData("POSITION",d,"FLOAT","VEC3"),f=n.getData("NORMAL",d,"FLOAT","VEC3"),p=n.getData("NORMAL",d,"UNSIGNED_BYTE","VEC2"),_=n.getData("RGB",d,"UNSIGNED_BYTE","VEC3"),g=n.getData("RGBA",d,"UNSIGNED_BYTE","VEC4"),m=n.getData("RGB565",d,"UNSIGNED_SHORT","SCALAR"),y=n.getData("CONSTANT_RGBA",d,"UNSIGNED_BYTE","VEC4"),M=n.getData("POSITION_QUANTIZED",d,"UNSIGNED_SHORT","VEC3"),x=n.getData("QUANTIZED_VOLUME_SCALE",d,"FLOAT","VEC3"),R=n.getData("QUANTIZED_VOLUME_OFFSET",d,"FLOAT","VEC3");if(l=new Je,M){const T=new Float32Array(d*3);for(let C=0;C<d;C++)for(let v=0;v<3;v++){const w=3*C+v;T[w]=M[w]/65535*x[v]}o.x=R[0],o.y=R[1],o.z=R[2],l.setAttribute("position",new Tt(T,3,!1))}else l.setAttribute("position",new Tt(u,3,!1));if(f!==null)l.setAttribute("normal",new Tt(f,3,!1));else if(p!==null){const T=new Float32Array(d*3),C=new E;for(let v=0;v<d;v++){const w=p[v*2],D=p[v*2+1],P=UT(w,D,C);T[v*3]=P.x,T[v*3+1]=P.y,T[v*3+2]=P.z}l.setAttribute("normal",new Tt(T,3,!1))}if(g!==null)l.setAttribute("color",new Tt(g,4,!0)),r.vertexColors=!0,r.transparent=!0,r.depthWrite=!1;else if(_!==null)l.setAttribute("color",new Tt(_,3,!0)),r.vertexColors=!0;else if(m!==null){const T=new Uint8Array(d*3);for(let C=0;C<d;C++){const v=NT(m[C]);for(let w=0;w<3;w++){const D=3*C+w;T[D]=v[w]}}l.setAttribute("color",new Tt(T,3,!0)),r.vertexColors=!0}else if(y!==null){const T=new ke(y[0],y[1],y[2]);r.color=T;const C=y[3]/255;C<1&&(r.opacity=C,r.transparent=!0,r.depthWrite=!1)}}const c=new wp(l,r);c.position.copy(o),t.scene=c,t.scene.featureTable=n,t.scene.batchTable=s;const h=n.getData("RTC_CENTER",1,"FLOAT","VEC3");return h&&(t.scene.position.x+=h[0],t.scene.position.y+=h[1],t.scene.position.z+=h[2]),t})}}const no=new E,Cs=new E,Ps=new E,ec=new E,io=new pn,so=new E,Ls=new Ee,Af=new Ee,wf=new E,Rf=new Ee,tc=new pn,nc={};function Cf(i,e,t,n){if(i=i/t*2-1,e=e/t*2-1,n.x=i,n.y=e,n.z=1-Math.abs(i)-Math.abs(e),n.z<0){const s=n.x;n.x=(1-Math.abs(n.y))*(s>=0?1:-1),n.y=(1-Math.abs(s))*(n.y>=0?1:-1)}return n.normalize(),n}class Rm extends bT{constructor(e=ra){super(),this.manager=e,this.adjustmentTransform=new Ee,this.ellipsoid=jo.clone()}resolveExternalURL(e){return this.manager.resolveURL(super.resolveExternalURL(e))}parse(e){return super.parse(e).then(t=>{const{featureTable:n,batchTable:s}=t,r=t.glbBytes.slice().buffer;return new Promise((a,o)=>{const l=this.fetchOptions,c=this.manager,h=c.getHandler("path.gltf")||new aa(c);l.credentials==="include"&&l.mode==="cors"&&h.setCrossOrigin("use-credentials"),"credentials"in l&&h.setWithCredentials(l.credentials==="include"),l.headers&&h.setRequestHeader(l.headers);let d=t.gltfWorkingPath??this.workingPath;/[\\/]$/.test(d)||(d+="/");const u=this.adjustmentTransform;h.parse(r,d,f=>{const p=n.getData("INSTANCES_LENGTH");let _=n.getData("POSITION",p,"FLOAT","VEC3");const g=n.getData("POSITION_QUANTIZED",p,"UNSIGNED_SHORT","VEC3"),m=n.getData("QUANTIZED_VOLUME_OFFSET",1,"FLOAT","VEC3"),y=n.getData("QUANTIZED_VOLUME_SCALE",1,"FLOAT","VEC3"),M=n.getData("NORMAL_UP",p,"FLOAT","VEC3"),x=n.getData("NORMAL_RIGHT",p,"FLOAT","VEC3"),R=n.getData("NORMAL_UP_OCT32P",p,"UNSIGNED_SHORT","VEC2"),T=n.getData("NORMAL_RIGHT_OCT32P",p,"UNSIGNED_SHORT","VEC2"),C=n.getData("SCALE_NON_UNIFORM",p,"FLOAT","VEC3"),v=n.getData("SCALE",p,"FLOAT","SCALAR"),w=n.getData("RTC_CENTER",1,"FLOAT","VEC3"),D=n.getData("EAST_NORTH_UP");if(!_&&g){_=new Float32Array(p*3);for(let B=0;B<p;B++)_[B*3+0]=m[0]+g[B*3+0]/65535*y[0],_[B*3+1]=m[1]+g[B*3+1]/65535*y[1],_[B*3+2]=m[2]+g[B*3+2]/65535*y[2]}const P=new E;for(let B=0;B<p;B++)P.x+=_[B*3+0]/p,P.y+=_[B*3+1]/p,P.z+=_[B*3+2]/p;const F=[],X=[];f.scene.updateMatrixWorld(),f.scene.traverse(B=>{if(B.isMesh){X.push(B);const{geometry:N,material:z}=B,H=new Oh(N,z,p);H.position.copy(P),w&&(H.position.x+=w[0],H.position.y+=w[1],H.position.z+=w[2]),F.push(H)}});for(let B=0;B<p;B++){ec.set(_[B*3+0]-P.x,_[B*3+1]-P.y,_[B*3+2]-P.z),io.identity(),M&&x?(Cs.set(M[B*3+0],M[B*3+1],M[B*3+2]),Ps.set(x[B*3+0],x[B*3+1],x[B*3+2]),no.crossVectors(Ps,Cs).normalize(),Ls.makeBasis(Ps,Cs,no),io.setFromRotationMatrix(Ls)):R&&T&&(Cf(R[B*2+0],R[B*2+1],65535,Cs),Cf(T[B*2+0],T[B*2+1],65535,Ps),no.crossVectors(Ps,Cs).normalize(),Ls.makeBasis(Ps,Cs,no),io.setFromRotationMatrix(Ls)),so.set(1,1,1),C&&so.set(C[B*3+0],C[B*3+1],C[B*3+2]),v&&so.multiplyScalar(v[B]);for(let N=0,z=F.length;N<z;N++){const H=F[N];tc.copy(io),D&&(H.updateMatrixWorld(),wf.copy(ec).applyMatrix4(H.matrixWorld),this.ellipsoid.getPositionToCartographic(wf,nc),this.ellipsoid.getEastNorthUpFrame(nc.lat,nc.lon,Rf),tc.setFromRotationMatrix(Rf)),Ls.compose(ec,tc,so).multiply(u);const ie=X[N];Af.multiplyMatrices(Ls,ie.matrixWorld),H.setMatrixAt(B,Af)}}f.scene.clear(),f.scene.add(...F),f.batchTable=s,f.featureTable=n,f.scene.batchTable=s,f.scene.featureTable=n,a(f)},o)})})}}class OT extends ET{constructor(e=ra){super(),this.manager=e,this.adjustmentTransform=new Ee,this.ellipsoid=jo.clone()}parse(e){const t=super.parse(e),{manager:n,ellipsoid:s,adjustmentTransform:r}=this,a=[];for(const o in t.tiles){const{type:l,buffer:c}=t.tiles[o];switch(l){case"b3dm":{const h=c.slice(),d=new Am(n);d.workingPath=this.workingPath,d.fetchOptions=this.fetchOptions,d.adjustmentTransform.copy(r);const u=d.parse(h.buffer);a.push(u);break}case"pnts":{const h=c.slice(),d=new wm(n);d.workingPath=this.workingPath,d.fetchOptions=this.fetchOptions;const u=d.parse(h.buffer);a.push(u);break}case"i3dm":{const h=c.slice(),d=new Rm(n);d.workingPath=this.workingPath,d.fetchOptions=this.fetchOptions,d.ellipsoid.copy(s),d.adjustmentTransform.copy(r);const u=d.parse(h.buffer);a.push(u);break}}}return Promise.all(a).then(o=>{const l=new mt;return o.forEach(c=>{l.add(c.scene)}),{tiles:o,scene:l}})}}const Ar=new Ee;class FT extends mt{constructor(e){super(),this.isTilesGroup=!0,this.name="TilesRenderer.TilesGroup",this.tilesRenderer=e,this.matrixWorldInverse=new Ee}raycast(e,t){return this.tilesRenderer.optimizeRaycast?(this.tilesRenderer.raycast(e,t),!1):!0}updateMatrixWorld(e){if(this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldNeedsUpdate||e){this.parent===null?Ar.copy(this.matrix):Ar.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1;const t=Ar.elements,n=this.matrixWorld.elements;let s=!1;for(let r=0;r<16;r++){const a=t[r],o=n[r];if(Math.abs(a-o)>Number.EPSILON){s=!0;break}}if(s){this.matrixWorld.copy(Ar),this.matrixWorldInverse.copy(Ar).invert();const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateMatrixWorld()}}}updateWorldMatrix(e,t){this.parent&&e&&this.parent.updateWorldMatrix(e,!1),this.updateMatrixWorld(!0)}}const Cm=new Si,ic=new E,ro=[];function Pm(i,e){return i.distance-e.distance}function Lm(i,e,t,n){const{scene:s}=i.engineData;t.invokeOnePlugin(r=>r.raycastTile&&r.raycastTile(i,s,e,n))||e.intersectObject(s,!0,n)}function BT(i,e,t){Lm(i,e,t,ro),ro.sort(Pm);const n=ro[0]||null;return ro.length=0,n}function Dm(i){return"traversal"in i}function Im(i,e,t,n=null){const{group:s,activeTiles:r}=i;n===null&&(n=Cm,n.copy(t.ray).applyMatrix4(s.matrixWorldInverse));const a=[],o=e.children;for(let h=0,d=o.length;h<d;h++){const u=o[h];!Dm(u)||!u.traversal.used||u.engineData.boundingVolume.intersectRay(n,ic)!==null&&(ic.applyMatrix4(s.matrixWorld),a.push({distance:ic.distanceToSquared(t.ray.origin),tile:u}))}a.sort(Pm);let l=null,c=1/0;if(r.has(e)){const h=BT(e,t,i);h&&(l=h,c=h.distance*h.distance)}for(let h=0,d=a.length;h<d;h++){const u=a[h],f=u.distance,p=u.tile;if(f>c)break;const _=Im(i,p,t,n);if(_){const g=_.distance*_.distance;g<c&&(l=_,c=g)}}return l}function Nm(i,e,t,n,s=null){if(!Dm(e))return;const{group:r,activeTiles:a}=i,{boundingVolume:o}=e.engineData;if(s===null&&(s=Cm,s.copy(t.ray).applyMatrix4(r.matrixWorldInverse)),!e.traversal.used||!o.intersectsRay(s))return;a.has(e)&&Lm(e,t,i,n);const l=e.children;for(let c=0,h=l.length;c<h;c++)Nm(i,l[c],t,n,s)}const oi=new E,li=new E,ci=new E,Pf=new E,Lf=new E;class kT{constructor(){this.sphere=null,this.obb=null,this.region=null,this.regionObb=null}intersectsRay(e){const t=this.sphere,n=this.obb||this.regionObb;return!(t&&!e.intersectsSphere(t)||n&&!n.intersectsRay(e))}intersectRay(e,t=null){const n=this.sphere,s=this.obb||this.regionObb;let r=-1/0,a=-1/0;n&&e.intersectSphere(n,Pf)&&(r=n.containsPoint(e.origin)?0:e.origin.distanceToSquared(Pf)),s&&s.intersectRay(e,Lf)&&(a=s.containsPoint(e.origin)?0:e.origin.distanceToSquared(Lf));const o=Math.max(r,a);return o===-1/0?null:(e.at(Math.sqrt(o),t),t)}distanceToPoint(e){const t=this.sphere,n=this.obb||this.regionObb;let s=-1/0,r=-1/0;return t&&(s=Math.max(t.distanceToPoint(e),0)),n&&(r=n.distanceToPoint(e)),s>r?s:r}intersectsFrustum(e){const t=this.obb||this.regionObb,n=this.sphere;return n&&!e.intersectsSphere(n)||t&&!t.intersectsFrustum(e)?!1:!!(n||t)}intersectsSphere(e){const t=this.obb||this.regionObb,n=this.sphere;return n&&!n.intersectsSphere(e)||t&&!t.intersectsSphere(e)?!1:!!(n||t)}intersectsOBB(e){const t=this.obb||this.regionObb,n=this.sphere;return n&&!e.intersectsSphere(n)||t&&!t.intersectsOBB(e)?!1:!!(n||t)}getOBB(e,t){const n=this.obb||this.regionObb;n?(e.copy(n.box),t.copy(n.transform)):(this.getAABB(e),t.identity())}getAABB(e){if(this.sphere)this.sphere.getBoundingBox(e);else{const t=this.obb||this.regionObb;e.copy(t.box).applyMatrix4(t.transform)}}getSphere(e){if(this.sphere)e.copy(this.sphere);else if(this.region)this.region.getBoundingSphere(e);else{const t=this.obb||this.regionObb;t.box.getBoundingSphere(e),e.applyMatrix4(t.transform)}}setObbData(e,t){const n=new Mf;oi.set(e[3],e[4],e[5]),li.set(e[6],e[7],e[8]),ci.set(e[9],e[10],e[11]);const s=oi.length(),r=li.length(),a=ci.length();oi.normalize(),li.normalize(),ci.normalize(),s===0&&oi.crossVectors(li,ci),r===0&&li.crossVectors(oi,ci),a===0&&ci.crossVectors(oi,li),n.transform.set(oi.x,li.x,ci.x,e[0],oi.y,li.y,ci.y,e[1],oi.z,li.z,ci.z,e[2],0,0,0,1).premultiply(t),n.box.min.set(-s,-r,-a),n.box.max.set(s,r,a),n.update(),this.obb=n}setSphereData(e,t,n,s,r){const a=new An;a.center.set(e,t,n),a.radius=s,a.applyMatrix4(r),this.sphere=a}setRegionData(e,t,n,s,r,a,o){const l=new LT(...e.radius,n,r,t,s,a,o),c=new Mf;l.getBoundingBox(c.box,c.transform),c.update(),this.region=l,this.regionObb=c}}const zT=new qe;function VT(i,e,t,n){const s=zT.set(i.normal.x,i.normal.y,i.normal.z,e.normal.x,e.normal.y,e.normal.z,t.normal.x,t.normal.y,t.normal.z);return n.set(-i.constant,-e.constant,-t.constant),n.applyMatrix3(s.invert()),n}class HT extends ko{constructor(){super(),this.points=Array(8).fill().map(()=>new E)}setFromProjectionMatrix(...e){return super.setFromProjectionMatrix(...e),this.calculateFrustumPoints(),this}calculateFrustumPoints(){const{planes:e,points:t}=this;[[e[0],e[3],e[4]],[e[1],e[3],e[4]],[e[0],e[2],e[4]],[e[1],e[2],e[4]],[e[0],e[3],e[5]],[e[1],e[3],e[5]],[e[0],e[2],e[5]],[e[1],e[2],e[5]]].forEach((n,s)=>{VT(n[0],n[1],n[2],t[s])})}}const Df=new Ee,If=new Un,Um=Symbol("INITIAL_FRUSTUM_CULLED"),ao=new Ee,wr=new E,sc=new se,GT=new E(1,0,0),WT=new E(0,1,0);function Nf(i,e){i.traverse(t=>{t.frustumCulled=t[Um]&&e})}class XT extends yT{get autoDisableRendererCulling(){return this._autoDisableRendererCulling}set autoDisableRendererCulling(e){this._autoDisableRendererCulling!==e&&(super._autoDisableRendererCulling=e,this.forEachLoadedModel(t=>{Nf(t,!e)}))}get optimizeRaycast(){return this._optimizeRaycast}set optimizeRaycast(e){console.warn('TilesRenderer: The "optimizeRaycast" option has been deprecated.'),this._optimizeRaycast=e}constructor(...e){super(...e),this.group=new FT(this),this.ellipsoid=jo.clone(),this.cameras=[],this.cameraMap=new Map,this.cameraInfo=[],this._optimizeRaycast=!0,this._upRotationMatrix=new Ee,this._bytesUsed=new WeakMap,this._autoDisableRendererCulling=!0,this.manager=new Hp,this._listeners={}}addEventListener(e,t){e==="load-tile-set"&&(console.warn('TilesRenderer: "load-tile-set" event has been deprecated. Use "load-tileset" instead.'),e="load-tileset"),Tn.prototype.addEventListener.call(this,e,t)}hasEventListener(e,t){return e==="load-tile-set"&&(console.warn('TilesRenderer: "load-tile-set" event has been deprecated. Use "load-tileset" instead.'),e="load-tileset"),Tn.prototype.hasEventListener.call(this,e,t)}removeEventListener(e,t){e==="load-tile-set"&&(console.warn('TilesRenderer: "load-tile-set" event has been deprecated. Use "load-tileset" instead.'),e="load-tileset"),Tn.prototype.removeEventListener.call(this,e,t)}dispatchEvent(e){"tileset"in e&&Object.defineProperty(e,"tileSet",{get(){return console.warn('TilesRenderer: "event.tileSet" has been deprecated. Use "event.tileset" instead.'),e.tileset},enumerable:!1,configurable:!0}),Tn.prototype.dispatchEvent.call(this,e)}getBoundingBox(e){if(!this.root)return!1;const t=this.root.engineData.boundingVolume;return t?(t.getAABB(e),!0):!1}getOrientedBoundingBox(e,t){if(!this.root)return!1;const n=this.root.engineData.boundingVolume;return n?(n.getOBB(e,t),!0):!1}getBoundingSphere(e){if(!this.root)return!1;const t=this.root.engineData.boundingVolume;return t?(t.getSphere(e),!0):!1}forEachLoadedModel(e){this.traverse(t=>{const n=t.engineData&&t.engineData.scene;n&&e(n,t)},null,!1)}raycast(e,t){if(this.root)if(e.firstHitOnly){const n=Im(this,this.root,e);n&&t.push(n)}else Nm(this,this.root,e,t)}hasCamera(e){return this.cameraMap.has(e)}setCamera(e){const t=this.cameras,n=this.cameraMap;return n.has(e)?!1:(n.set(e,new se),t.push(e),this.dispatchEvent({type:"add-camera",camera:e}),!0)}setResolution(e,t,n){const s=this.cameraMap;if(!s.has(e))return!1;const r=t.isVector2?t.x:t,a=t.isVector2?t.y:n,o=s.get(e);return(o.width!==r||o.height!==a)&&(o.set(r,a),this.dispatchEvent({type:"camera-resolution-change"})),!0}setResolutionFromRenderer(e,t){return t.getSize(sc),this.setResolution(e,sc.x,sc.y)}deleteCamera(e){const t=this.cameras,n=this.cameraMap;if(n.has(e)){const s=t.indexOf(e);return t.splice(s,1),n.delete(e),this.dispatchEvent({type:"delete-camera",camera:e}),!0}return!1}loadRootTileset(...e){return super.loadRootTileset(...e).then(t=>{const{asset:n,extensions:s={}}=t;switch((n&&n.gltfUpAxis||"y").toLowerCase()){case"x":this._upRotationMatrix.makeRotationAxis(WT,-Math.PI/2);break;case"y":this._upRotationMatrix.makeRotationAxis(GT,Math.PI/2);break}if("3DTILES_ellipsoid"in s){const r=s["3DTILES_ellipsoid"],{ellipsoid:a}=this;a.name=r.body,r.radii?a.radius.set(...r.radii):a.radius.set(1,1,1)}return t})}prepareForTraversal(){const e=this.group,t=this.cameras,n=this.cameraMap,s=this.cameraInfo;for(;s.length>t.length;)s.pop();for(;s.length<t.length;)s.push({frustum:new HT,isOrthographic:!1,sseDenominator:-1,position:new E,invScale:-1,pixelSize:0});wr.setFromMatrixScale(e.matrixWorldInverse),Math.abs(Math.max(wr.x-wr.y,wr.x-wr.z))>1e-6&&console.warn("ThreeTilesRenderer : Non uniform scale used for tile which may cause issues when calculating screen space error.");for(let r=0,a=s.length;r<a;r++){const o=t[r],l=s[r],c=l.frustum,h=l.position,d=n.get(o);(d.width===0||d.height===0)&&console.warn("TilesRenderer: resolution for camera error calculation is not set.");const u=o.projectionMatrix.elements;if(l.isOrthographic=u[15]===1,l.isOrthographic){const f=2/u[0],p=2/u[5];l.pixelSize=Math.max(p/d.height,f/d.width)}else l.sseDenominator=2/u[5]/d.height;ao.copy(e.matrixWorld),ao.premultiply(o.matrixWorldInverse),ao.premultiply(o.projectionMatrix),c.setFromProjectionMatrix(ao,o.coordinateSystem,o.reversedDepth),h.set(0,0,0),h.applyMatrix4(o.matrixWorld),h.applyMatrix4(e.matrixWorldInverse)}}update(){if(super.update(),this.cameras.length===0&&this.root){let e=!1;this.invokeAllPlugins(t=>e=e||!!(t!==this&&t.calculateTileViewError)),e===!1&&console.warn("TilesRenderer: no cameras defined. Cannot update 3d tiles.")}}preprocessNode(e,t,n=null){super.preprocessNode(e,t,n);const s=new Ee;if(e.transform){const o=e.transform;for(let l=0;l<16;l++)s.elements[l]=o[l]}n&&s.premultiply(n.engineData.transform);const r=new Ee().copy(s).invert(),a=new kT;"sphere"in e.boundingVolume&&a.setSphereData(...e.boundingVolume.sphere,s),"box"in e.boundingVolume&&a.setObbData(e.boundingVolume.box,s),"region"in e.boundingVolume&&a.setRegionData(this.ellipsoid,...e.boundingVolume.region),e.engineData.transform=s,e.engineData.transformInverse=r,e.engineData.boundingVolume=a,e.engineData.geometry=null,e.engineData.materials=null,e.engineData.textures=null}async parseTile(e,t,n,s,r){const a=t.engineData,o=Kh(s),l=this.fetchOptions,c=this.manager;let h=null;const d=a.transform,u=this._upRotationMatrix,f=(Qs(e)||n).toLowerCase();switch(f){case"b3dm":{const x=new Am(c);x.workingPath=o,x.fetchOptions=l,x.adjustmentTransform.copy(u),h=x.parse(e);break}case"pnts":{const x=new wm(c);x.workingPath=o,x.fetchOptions=l,h=x.parse(e);break}case"i3dm":{const x=new Rm(c);x.workingPath=o,x.fetchOptions=l,x.adjustmentTransform.copy(u),x.ellipsoid.copy(this.ellipsoid),h=x.parse(e);break}case"cmpt":{const x=new OT(c);x.workingPath=o,x.fetchOptions=l,x.adjustmentTransform.copy(u),x.ellipsoid.copy(this.ellipsoid),h=x.parse(e).then(R=>R.scene);break}case"gltf":case"glb":{const x=c.getHandler("path.gltf")||c.getHandler("path.glb")||new aa(c);x.setWithCredentials(l.credentials==="include"),x.setRequestHeader(l.headers||{}),l.credentials==="include"&&l.mode==="cors"&&x.setCrossOrigin("use-credentials");let R=x.resourcePath||x.path||o;!/[\\/]$/.test(R)&&R.length&&(R+="/"),h=x.parseAsync(e,R).then(T=>{T.scene=T.scene||new mt;const{scene:C}=T;return C.updateMatrix(),C.matrix.multiply(u).decompose(C.position,C.quaternion,C.scale),T});break}default:{h=this.invokeOnePlugin(x=>x.parseToMesh&&x.parseToMesh(e,t,n,s,r));break}}const p=await h;if(p===null)throw new Error(`TilesRenderer: Content type "${f}" not supported.`);let _,g;p.isObject3D?(_=p,g=null):(_=p.scene,g=p),_.updateMatrix(),_.matrix.premultiply(d),_.matrix.decompose(_.position,_.quaternion,_.scale),await this.invokeAllPlugins(x=>x.processTileModel&&x.processTileModel(_,t)),_.traverse(x=>{x[Um]=x.frustumCulled}),Nf(_,!this.autoDisableRendererCulling);const m=[],y=[],M=[];if(_.traverse(x=>{if(x.geometry&&y.push(x.geometry),x.material){const R=x.material;m.push(x.material);for(const T in R){const C=R[T];C&&C.isTexture&&M.push(C)}}}),r.aborted){for(let x=0,R=M.length;x<R;x++){const T=M[x];T.image instanceof ImageBitmap&&T.image.close(),T.dispose()}return}a.materials=m,a.geometry=y,a.textures=M,a.scene=_,a.metadata=g}disposeTile(e){super.disposeTile(e);const t=e.engineData;if(t.scene){const n=t.materials,s=t.geometry,r=t.textures,a=t.scene.parent;t.scene.traverse(o=>{o.userData.meshFeatures&&o.userData.meshFeatures.dispose(),o.userData.structuralMetadata&&o.userData.structuralMetadata.dispose()});for(let o=0,l=s.length;o<l;o++)s[o].dispose();for(let o=0,l=n.length;o<l;o++)n[o].dispose();for(let o=0,l=r.length;o<l;o++){const c=r[o];c.image instanceof ImageBitmap&&c.image.close(),c.dispose()}a&&a.remove(t.scene),t.scene=null,t.materials=null,t.textures=null,t.geometry=null,t.metadata=null}}setTileVisible(e,t){const n=e.engineData.scene,s=this.group;t?n&&(s.add(n),n.updateMatrixWorld(!0)):n&&s.remove(n),super.setTileVisible(e,t)}calculateBytesUsed(e,t){const n=this._bytesUsed;return!n.has(e)&&t&&n.set(e,IT(t)),n.get(e)??null}calculateTileViewError(e,t){const n=e.engineData,s=this.cameras,r=this.cameraInfo,a=n.boundingVolume;let o=!1,l=0,c=1/0,h=0,d=1/0;for(let u=0,f=s.length;u<f;u++){const p=r[u];let _,g;if(p.isOrthographic){const y=p.pixelSize;_=e.geometricError/y,g=1/0}else{const y=p.sseDenominator;g=a.distanceToPoint(p.position),_=g===0?1/0:e.geometricError/(g*y)}const m=r[u].frustum;a.intersectsFrustum(m)&&(o=!0,l=Math.max(l,_),c=Math.min(c,g)),h=Math.max(h,_),d=Math.min(d,g)}o?(t.inView=!0,t.error=l,t.distanceFromCamera=c):(t.inView=!1,t.error=h,t.distanceFromCamera=d)}setLatLonToYUp(e,t){console.warn("TilesRenderer: setLatLonToYUp is deprecated. Use the ReorientationPlugin, instead.");const{ellipsoid:n,group:s}=this;If.set(Math.PI/2,Math.PI/2,0),Df.makeRotationFromEuler(If),n.getEastNorthUpFrame(e,t,0,s.matrix).multiply(Df).invert().decompose(s.position,s.quaternion,s.scale),s.updateMatrixWorld(!0)}dispose(){super.dispose(),this.group.removeFromParent()}}const Uf="https://tile.googleapis.com/v1/createSession";class qT{get isMapTilesSession(){return this.authURL===Uf}constructor(e={}){const{apiToken:t,sessionOptions:n=null,autoRefreshToken:s=!1}=e;this.apiToken=t,this.autoRefreshToken=s,this.authURL=Uf,this.sessionToken=null,this.sessionOptions=n,this._tokenRefreshPromise=null}async fetch(e,t){this.sessionToken===null&&this.isMapTilesSession&&this.refreshToken(t),await this._tokenRefreshPromise;const n=new URL(e);n.searchParams.set("key",this.apiToken),this.sessionToken&&n.searchParams.set("session",this.sessionToken);let s=await fetch(n,t);return s.status>=400&&s.status<=499&&this.autoRefreshToken&&(await this.refreshToken(t),this.sessionToken&&n.searchParams.set("session",this.sessionToken),s=await fetch(n,t)),this.sessionToken===null&&!this.isMapTilesSession?s.json().then(r=>(this.sessionToken=Of(r),r)):s}refreshToken(e){if(this._tokenRefreshPromise===null){const t=new URL(this.authURL);t.searchParams.set("key",this.apiToken);const n={...e};this.isMapTilesSession&&(n.method="POST",n.body=JSON.stringify(this.sessionOptions),n.headers=n.headers||{},n.headers={...n.headers,"Content-Type":"application/json"}),this._tokenRefreshPromise=fetch(t,n).then(s=>{if(!s.ok)throw new Error(`GoogleCloudAuth: Failed to load data with error code ${s.status}`);return s.json()}).then(s=>(this.sessionToken=Of(s),this._tokenRefreshPromise=null,s))}return this._tokenRefreshPromise}}function Of(i){if("session"in i)return i.session;{let e=null;const t=i.root;return cm(t,n=>{if(n.content&&n.content.uri){const[,s]=n.content.uri.split("?");return e=new URLSearchParams(s).get("session"),!0}return!1}),e}}class YT{constructor(){this.creditsCount={}}_adjustAttributions(e,t){const n=this.creditsCount,s=e.split(/;/g);for(let r=0,a=s.length;r<a;r++){const o=s[r];o in n||(n[o]=0),n[o]+=t?1:-1,n[o]<=0&&delete n[o]}}addAttributions(e){this._adjustAttributions(e,!0)}removeAttributions(e){this._adjustAttributions(e,!1)}toString(){return Object.entries(this.creditsCount).sort((e,t)=>{const n=e[1];return t[1]-n}).map(e=>e[0]).join("; ")}}const KT="https://tile.googleapis.com/v1/3dtiles/root.json";class $T{constructor({apiToken:e,sessionOptions:t=null,autoRefreshToken:n=!1,logoUrl:s=null,useRecommendedSettings:r=!0}){this.name="GOOGLE_CLOUD_AUTH_PLUGIN",this.apiToken=e,this.useRecommendedSettings=r,this.logoUrl=s,this.auth=new qT({apiToken:e,autoRefreshToken:n,sessionOptions:t}),this.tiles=null,this._visibilityChangeCallback=null,this._attributionsManager=new YT,this._logoAttribution={value:"",type:"image",collapsible:!1},this._attribution={value:"",type:"string",collapsible:!0}}init(e){const{useRecommendedSettings:t,auth:n}=this;e.resetFailedTiles(),e.rootURL==null&&(e.rootURL=KT),n.sessionOptions||(n.authURL=e.rootURL),t&&!n.isMapTilesSession&&(e.errorTarget=20),this.tiles=e,this._visibilityChangeCallback=({tile:s,visible:r})=>{var a,o;const l=((o=(a=s.engineData.metadata)==null?void 0:a.asset)==null?void 0:o.copyright)||"";r?this._attributionsManager.addAttributions(l):this._attributionsManager.removeAttributions(l)},e.addEventListener("tile-visibility-change",this._visibilityChangeCallback)}getAttributions(e){this.tiles.visibleTiles.size>0&&(this.logoUrl&&(this._logoAttribution.value=this.logoUrl,e.push(this._logoAttribution)),this._attribution.value=this._attributionsManager.toString(),e.push(this._attribution))}dispose(){this.tiles.removeEventListener("tile-visibility-change",this._visibilityChangeCallback)}async fetchData(e,t){return this.auth.fetch(e,t)}}function jT({parent:i,apiKey:e,camera:t,renderer:n}){const s=new XT;s.registerPlugin(new $T({apiToken:e,autoRefreshToken:!0})),s.setLatLonToYUp(rn.DEG2RAD*Yh,rn.DEG2RAD*om),s.group.scale.setScalar(zt),i.add(s.group);let r=null;function a(){const c=n.xr.isPresenting?n.xr.getCamera():t;c!==r&&(r&&s.deleteCamera(r),s.setCamera(c),s.setResolutionFromRenderer(c,n),r=c)}a();function o(){a(),s.update()}function l(){return typeof s.getAttributions=="function"?s.getAttributions():[{type:"string",value:"© Google"}]}return{update:o,dispose:()=>s.dispose(),group:s.group,getAttributions:l}}const as=62719,tu=6750207,ZT=661552,nu=16726668,nn=1e-4,JT=6e-4,QT=.001,Br=.0016,eE=.002;async function tE(){const i=new mt;i.userData.kind="airport-cyberpunk";const e=new st(new Hi(2,2),new Lt({color:ZT,transparent:!0,opacity:.55}));e.rotation.x=-Math.PI/2,e.position.y=nn,e.userData.kind="cyber-base",i.add(e),i.add(iE()),i.add(sE()),i.add(rE());const t=aE();i.add(t.group),i.userData.update=n=>t.update(n);try{const s=(await nE()).elements||[],r=a=>s.filter(o=>o.tags?.aeroway===a);for(const a of r("taxiway"))cE(i,a);for(const a of r("apron"))hE(i,a.geometry,as,.35,JT);for(const a of r("stopway"))lE(i,a);for(const a of r("runway"))oE(i,a);for(const a of r("terminal"))Ff(i,a.geometry,22*zt,tu);for(const a of r("hangar"))Ff(i,a.geometry,14*zt,as);console.log(`[cyber] rendered ${s.length} OSM elements as wireframe`)}catch(n){console.warn("[cyber] OSM load failed:",n)}return i}async function nE(){const e=await fetch("/Fahad_ATC/data/okbk_osm.json");if(!e.ok)throw new Error(`OSM HTTP ${e.status}`);return e.json()}function an(i,e=.85){return new Mi({color:i,transparent:!0,opacity:e,depthWrite:!1,blending:cc})}function iE(){const i=new mt,e=8;for(let n=0;n<e;n++){const s=.06+n*(.68/(e-1)),r=96,a=[];for(let c=0;c<=r;c++){const h=c/r*Math.PI*2;a.push(new E(Math.cos(h)*s,nn+1e-4,Math.sin(h)*s))}const o=new Je().setFromPoints(a),l=.5-n/e*.35;i.add(new Rt(o,an(as,l)))}const t=.76;for(let n=0;n<12;n++){const s=n/12*Math.PI*2,r=.04,a=t,o=[new E(Math.cos(s)*r,nn+1e-4,Math.sin(s)*r),new E(Math.cos(s)*a,nn+1e-4,Math.sin(s)*a)];i.add(new Rt(new Je().setFromPoints(o),an(as,.12)))}return i}function sE(){const i=new mt,e=.78,t=16,n=e*2/t,s=[];for(let a=0;a<=t;a++){const o=-e+a*n;s.push(-e,nn+5e-5,o,e,nn+5e-5,o),s.push(o,nn+5e-5,-e,o,nn+5e-5,e)}const r=new Je;return r.setAttribute("position",new lt(s,3)),i.add(new Ap(r,an(as,.08))),i}function rE(){const i=new mt,e=[new E(0,nn+3e-4,-.72+.04),new E(0,nn+3e-4,-.72-.025),new E(-.018,nn+3e-4,-.72+.005),new E(0,nn+3e-4,-.72-.025),new E(.018,nn+3e-4,-.72+.005)];return i.add(new Rt(new Je().setFromPoints(e),an(nu,1))),i}function aE(){const i=new mt,e=96,t=[];for(let l=0;l<=e;l++){const c=l/e*Math.PI*2;t.push(new E(Math.cos(c),nn+2e-4,Math.sin(c)))}const n=new Je().setFromPoints(t),s=an(tu,1),r=new Rt(n,s);i.add(r);let a=0;function o(l){a+=l/3.5,a>1&&(a-=1);const c=.04+a*.74;r.scale.set(c,1,c),r.material.opacity=(1-a)*.9}return{group:i,update:o}}function oE(i,e){if(!e.geometry||e.geometry.length<2)return;const n=(parseFloat(e.tags.width)||45)*zt/2,s=e.geometry.map(a=>{const[o,l]=kt(a.lat,a.lon);return new E(o,Br,l)}),r=new Je().setFromPoints(s);i.add(new Rt(r,an(tu,1)));for(const a of[-1,1]){const o=[];for(let c=0;c<s.length;c++){const h=s[Math.max(c-1,0)],d=s[Math.min(c+1,s.length-1)],u=d.x-h.x,f=d.z-h.z,p=Math.hypot(u,f)||1e-6,_=-f/p*a,g=u/p*a;o.push(new E(s[c].x+_*n,Br,s[c].z+g*n))}const l=new Je().setFromPoints(o);i.add(new Rt(l,an(as,.85)))}for(const a of[0,s.length-1]){const o=s[a],l=s[a===0?1:s.length-2],c=l.x-o.x,h=l.z-o.z,d=Math.hypot(c,h)||1e-6,u=-h/d,f=c/d,p=[new E(o.x+u*n*.85,Br+2e-4,o.z+f*n*.85),new E(o.x-u*n*.85,Br+2e-4,o.z-f*n*.85)];i.add(new Rt(new Je().setFromPoints(p),an(nu,1)))}}function lE(i,e){if(!e.geometry||e.geometry.length<2)return;const n=(parseFloat(e.tags.width)||45)*zt/2,s=e.geometry.map(r=>{const[a,o]=kt(r.lat,r.lon);return new E(a,Br-2e-4,o)});for(const r of[-1,1]){const a=[];for(let o=0;o<s.length;o++){const l=s[Math.max(o-1,0)],c=s[Math.min(o+1,s.length-1)],h=c.x-l.x,d=c.z-l.z,u=Math.hypot(h,d)||1e-6,f=-d/u*r,p=h/u*r;a.push(new E(s[o].x+f*n,s[o].y,s[o].z+p*n))}i.add(new Rt(new Je().setFromPoints(a),an(nu,.5)))}}function cE(i,e){if(!e.geometry||e.geometry.length<2)return;const t=e.geometry.map(s=>{const[r,a]=kt(s.lat,s.lon);return new E(r,QT,a)}),n=new Je().setFromPoints(t);i.add(new Rt(n,an(as,.35)))}function hE(i,e,t,n,s){if(!e||e.length<3)return;const r=e.map(a=>{const[o,l]=kt(a.lat,a.lon);return new E(o,s,l)});r.push(r[0].clone()),i.add(new Rt(new Je().setFromPoints(r),an(t,n)))}function Ff(i,e,t,n){if(!e||e.length<3)return;const s=e.map(l=>{const[c,h]=kt(l.lat,l.lon);return new E(c,eE,h)}),r=s.map(l=>new E(l.x,l.y+t,l.z)),a=[...s,s[0].clone()],o=[...r,r[0].clone()];i.add(new Rt(new Je().setFromPoints(a),an(n,.85))),i.add(new Rt(new Je().setFromPoints(o),an(n,.65)));for(let l=0;l<s.length;l++){const c=[s[l],r[l]];i.add(new Rt(new Je().setFromPoints(c),an(n,.55)))}}const Ao={PARKED:{color:11579568,label:"PARKED"},TAXI:{color:16763955,label:"TAXI"},QUEUED:{color:16737843,label:"HOLD"},CLEARED:{color:3407735,label:"CLEARED"},AIRBORNE_OUT:{color:16746564,label:"OUTBOUND"},AIRBORNE_IN:{color:4495871,label:"INBOUND"},OVERFLIGHT:{color:13147135,label:"OVERFLIGHT"}},Wr=1/1500,Bf=.075,Om={B737:{len:33.6,span:28.9,ht:11.1},B738:{len:39.5,span:35.8,ht:12.5},B739:{len:42.1,span:35.8,ht:12.5},B752:{len:47.3,span:38.1,ht:13.6},B763:{len:54.9,span:47.6,ht:15.8},B772:{len:63.7,span:60.9,ht:18.5},B77W:{len:73.9,span:64.8,ht:18.6},B788:{len:56.7,span:60.1,ht:17},B789:{len:62.8,span:60.1,ht:17},B78X:{len:68.3,span:60.1,ht:17},B748:{len:76.3,span:68.4,ht:19.4},A319:{len:33.8,span:35.8,ht:11.8},A320:{len:37.6,span:35.8,ht:11.8},A321:{len:44.5,span:35.8,ht:11.8},A332:{len:58.8,span:60.3,ht:17.4},A333:{len:63.7,span:60.3,ht:16.8},A359:{len:66.8,span:64.8,ht:17.1},A35K:{len:73.8,span:64.8,ht:17.1},A388:{len:72.7,span:79.8,ht:24.1},E170:{len:29.9,span:26,ht:9.85},E190:{len:36.2,span:28.7,ht:10.6}},uE=Om.A320,dE={KAC:{body:15658734,accent:1724067,name:"Kuwait Airways"},JZR:{body:15658734,accent:13111342,name:"Jazeera Airways"},WJA:{body:15658734,accent:16773632,name:"Wataniya"},UAE:{body:15921906,accent:12849712,name:"Emirates"},QTR:{body:15658734,accent:6030898,name:"Qatar Airways"},ETD:{body:15658734,accent:12095560,name:"Etihad"},FDB:{body:15658734,accent:16744192,name:"flydubai"},GFA:{body:15658734,accent:1724310,name:"Gulf Air"},KNE:{body:15658734,accent:39752,name:"Saudia"},OMA:{body:15658734,accent:1147990,name:"Oman Air"},THY:{body:15658734,accent:13044236,name:"Turkish Airlines"},IGO:{body:15658734,accent:1851285,name:"IndiGo"},AIC:{body:15658734,accent:14096672,name:"Air India"},DLH:{body:15658734,accent:16702208,name:"Lufthansa"},BAW:{body:15658734,accent:1915503,name:"British Airways"}},fE={body:13421772,accent:8421504,name:""},pE={B748:"b747.glb",B747:"b747.glb",A388:"b747.glb",B788:"b787.glb",B789:"b787.glb",B78X:"b787.glb",B772:"airliner_detail.glb",B77W:"airliner_detail.glb",A332:"airliner_detail.glb",A333:"airliner_detail.glb",A359:"airliner_detail.glb",A35K:"airliner_detail.glb",B763:"airliner_detail.glb",A319:"airliner_gear.glb",A320:"airliner_gear.glb",A321:"airliner_gear.glb",B737:"airliner_gear.glb",B738:"airliner_gear.glb",B739:"airliner_gear.glb",B752:"airliner_gear.glb",E170:"airliner_gear.glb",E190:"airliner_gear.glb"},mE="airliner_detail.glb",gE={"b747.glb":{rx:0,ry:180,rz:0},"b787.glb":{rx:0,ry:0,rz:0},"airliner_gear.glb":{rx:0,ry:0,rz:0},"airliner_detail.glb":{rx:0,ry:0,rz:0}},_E=new aa,rc=new Map;function xE(i){return rc.has(i)||rc.set(i,new Promise((e,t)=>{_E.load(i,e,void 0,t)})),rc.get(i)}function iu(i){const e=(i||"").slice(0,3).toUpperCase();return dE[e]||fE}function su(i){return Om[(i||"").toUpperCase()]||uE}const vE={B737:"Boeing 737",B738:"Boeing 737-800",B739:"Boeing 737-900",B752:"Boeing 757-200",B763:"Boeing 767-300",B772:"Boeing 777-200",B77W:"Boeing 777-300ER",B788:"Boeing 787-8",B789:"Boeing 787-9",B78X:"Boeing 787-10",B747:"Boeing 747",B748:"Boeing 747-8",A319:"Airbus A319",A320:"Airbus A320",A321:"Airbus A321",A332:"Airbus A330-200",A333:"Airbus A330-300",A359:"Airbus A350-900",A35K:"Airbus A350-1000",A388:"Airbus A380",E170:"Embraer 170",E190:"Embraer 190"};function yE(i){return iu(i).name||""}function Fm(i){return iu(i).accent}function SE(i){return vE[(i||"").toUpperCase()]||i||""}function ph(i){const e=new mt;e.userData={...i};const t=iu(i.callsign),n=Ao[i.state]||Ao.PARKED,s=TE(i,t);e.add(s),e.userData.model=s;const a=su(i.type).len*Wr,o=EE(a,n.color);e.add(o),e.userData.stateRing=o;const l=`${i.callsign}
${i.type||"?"}  ${n.label}`,c=wE(l,t.accent);c.position.y=Bf,e.add(c),e.userData.label=c;const h=AE(Bf,t.accent);return e.add(h),e.userData.leader=h,e.rotation.y=Math.PI-rn.degToRad(i.hdg||0),ME(e,i,t).catch(d=>{console.warn("[aircraft] glTF upgrade failed for",i.callsign,d)}),e}async function ME(i,e,t){const n=pE[(e.type||"").toUpperCase()]||mE,s=`/Fahad_ATC/models/${n}`;let r;try{r=await xE(s)}catch(m){console.warn("[aircraft] failed to load",s,m);return}const a=r.scene.clone(!0);a.traverse(m=>{m.isMesh&&(Array.isArray(m.material)?m.material=m.material.map(y=>y.clone()):m.material&&(m.material=m.material.clone()))});const o=gE[n]||{rx:0,ry:0,rz:0};a.rotation.set(rn.degToRad(o.rx),rn.degToRad(o.ry),rn.degToRad(o.rz));const l=new mt;l.add(a);const h=new mn().setFromObject(l).getSize(new E),f=su(e.type).len*Wr/Math.max(h.z,1e-6);l.scale.multiplyScalar(f);const p=new mn().setFromObject(l),_=p.getCenter(new E);l.position.x=-_.x,l.position.z=-_.z,l.position.y=-p.min.y,bE(l,t);const g=i.userData.model;g&&i.remove(g),i.add(l),i.userData.model=l}function bE(i,e){const t=new ke(e.body),n=new ke(e.accent);i.traverse(s=>{if(!s.isMesh||!s.material)return;const r=Array.isArray(s.material)?s.material:[s.material];for(const a of r){if(!a.color)continue;const o=a.color;.299*o.r+.587*o.g+.114*o.b>.35&&o.copy(t),a.emissive&&(a.emissive.copy(n),a.emissiveIntensity=.06),a.metalness!==void 0&&(a.metalness=Math.max(a.metalness,.4)),a.roughness!==void 0&&(a.roughness=Math.min(a.roughness,.5))}})}function TE(i,e,t){const n=su(i.type),s=n.len*Wr,r=n.span*Wr,a=n.ht*Wr,o=s*.105,l=new On({color:e.body,roughness:.4,metalness:.5}),c=new On({color:e.accent,roughness:.4,metalness:.4}),h=new mt,d=new st(new sr(.5,14,10),l);d.scale.set(o,o,s),d.position.y=o*.5,h.add(d);const u=new st(new yi(r,o*.05,s*.18),l);u.position.set(0,o*.3,-s*.04),h.add(u);const f=new st(new yi(o*.07,a*.55,s*.13),c);return f.position.set(0,a*.3+o*.5,-s*.42),h.add(f),h}function EE(i,e){const t=new st(new sa(i*.55,i*.82,32),new Lt({color:e,transparent:!0,opacity:.6,side:tn,depthWrite:!1}));return t.rotation.x=-Math.PI/2,t.position.y=6e-4,t.renderOrder=5,t}function AE(i,e){const t=new Je().setFromPoints([new E(0,.003,0),new E(0,i-.005,0)]),n=new Mi({color:e,transparent:!0,opacity:.6,depthTest:!1}),s=new Rt(t,n);return s.renderOrder=8,s}function wE(i,e=7908095){const t=document.createElement("canvas");t.width=320,t.height=110;const n=t.getContext("2d");n.fillStyle="rgba(10, 14, 22, 0.88)",RE(n,4,4,t.width-8,t.height-8,10),n.fill(),n.strokeStyle=`#${e.toString(16).padStart(6,"0")}`,n.lineWidth=3,n.stroke(),n.fillStyle="#ffffff",n.font="bold 32px ui-sans-serif, system-ui, sans-serif",n.textAlign="center",n.textBaseline="top";const s=i.split(`
`);n.fillText(s[0],t.width/2,14),n.font="22px ui-sans-serif, system-ui, sans-serif",n.fillStyle="#a8c4ff",n.fillText(s[1]||"",t.width/2,56);const r=new ir(t);r.minFilter=St,r.anisotropy=4;const a=new ia(new nr({map:r,transparent:!0,depthTest:!1}));return a.scale.set(.075,.026,1),a.renderOrder=10,a}function RE(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}const CE=[{callsign:"KAC101",type:"B772",state:"AIRBORNE_IN",alt:8e3,hdg:333},{callsign:"KAC512",type:"A320",state:"AIRBORNE_OUT",alt:4500,hdg:153},{callsign:"JZR223",type:"A320",state:"TAXI",alt:0,hdg:90},{callsign:"JZR318",type:"A320",state:"QUEUED",alt:0,hdg:333},{callsign:"UAE855",type:"B77W",state:"CLEARED",alt:0,hdg:153},{callsign:"QTR1077",type:"A359",state:"PARKED",alt:0,hdg:0},{callsign:"KAC788",type:"B788",state:"AIRBORNE_IN",alt:12e3,hdg:333},{callsign:"FDB061",type:"B738",state:"AIRBORNE_OUT",alt:6500,hdg:153}],Rr=.78,Cr=.58;class kf{constructor(e){this.parent=e,this.aircraft=CE.map(t=>this.spawn(t))}spawn(e){const t=ph(e),n=e.alt>0?.04+e.alt/12e3*.1:.005;return t.position.set((Math.random()-.5)*Rr*1.6,n,(Math.random()-.5)*Cr*1.6),this.parent.add(t),t}update(e){for(const t of this.aircraft){const n=PE(t.userData.state);if(n===0)continue;const s=new E(0,0,n*e*zt);s.applyEuler(new Un(0,t.rotation.y,0)),t.position.add(s),t.position.x>Rr&&(t.position.x=-Rr),t.position.x<-Rr&&(t.position.x=Rr),t.position.z>Cr&&(t.position.z=-Cr),t.position.z<-Cr&&(t.position.z=Cr)}}}function PE(i){switch(i){case"PARKED":return 0;case"TAXI":return 8;case"QUEUED":return 0;case"CLEARED":return 35;case"AIRBORNE_OUT":return 200;case"AIRBORNE_IN":return 130;default:return 0}}const mh=300;function Bm(i,e,t,n){const[s,r]=kt(i,e),[a,o]=kt(t,n),l=a-s,c=o-r,h=Math.hypot(l,c),d=[l/h,c/h],u=[-d[1],d[0]];return{thr:[s,r],end:[a,o],u:d,perp:u,len:h}}const Ds=Bm(29.2127,47.9763,29.2405,47.9615),Is=Bm(29.2126,47.9986,29.2412,47.9834),LE=[[29.232,47.984],[29.2335,47.9855],[29.23,47.985],[29.2345,47.987],[29.229,47.9875],[29.233,47.9825],[29.231,47.9865],[29.235,47.9845]],km=LE.map(([i,e])=>kt(i,e)),ts=(i,e,t)=>[i[0]+e[0]*t,i[1]+e[1]*t],Xn=.006;function Ns({callsign:i,type:e,origin:t,gate:n,rwy:s,entryT:r,touchdownT:a,parkT:o,squawk:l}){const c=ts(s.thr,s.u,-.5),h=ts(s.thr,s.u,-.12),d=ts(s.thr,s.u,.4),u=km[n],f=a-12,p=a+15,_=(p+o)/2,g=[(d[0]+u[0])/2,(d[1]+u[1])/2];return{callsign:i,type:e,origin:t,destination:"OKBK",squawk:l,birth:r,death:mh-2,script:[{t:r,p:c,y:.15,state:"AIRBORNE_IN",alt:8e3,speed_kt:230},{t:f,p:h,y:.04,state:"AIRBORNE_IN",alt:1200,speed_kt:155},{t:a,p:s.thr,y:Xn,state:"CLEARED",alt:0,speed_kt:140},{t:p,p:d,y:Xn,state:"TAXI",alt:0,speed_kt:25},{t:_,p:g,y:Xn,state:"TAXI",alt:0,speed_kt:15},{t:o,p:u,y:Xn,state:"PARKED",alt:0,speed_kt:0},{t:mh,p:u,y:Xn,state:"PARKED",alt:0,speed_kt:0}]}}function Us({callsign:i,type:e,destination:t,gate:n,rwy:s,pushT:r,holdT:a,rollT:o,exitT:l}){const c=km[n],h=ts(ts(s.thr,s.u,.02),s.perp,-.035),d=ts(s.thr,s.u,.35),u=ts(s.thr,s.u,1.05),f=a+6,p=o+12;return{callsign:i,type:e,origin:"OKBK",destination:t,birth:0,death:l,script:[{t:0,p:c,y:Xn,state:"PARKED",alt:0,speed_kt:0},{t:r,p:c,y:Xn,state:"TAXI",alt:0,speed_kt:0},{t:a,p:h,y:Xn,state:"QUEUED",alt:0,speed_kt:14},{t:f,p:s.thr,y:Xn,state:"QUEUED",alt:0,speed_kt:8},{t:o,p:s.thr,y:Xn,state:"CLEARED",alt:0,speed_kt:40},{t:p,p:d,y:.015,state:"AIRBORNE_OUT",alt:300,speed_kt:165},{t:l,p:u,y:.16,state:"AIRBORNE_OUT",alt:16e3,speed_kt:330}]}}function Pr({callsign:i,type:e,origin:t,destination:n,from:s,to:r,startT:a,endT:o,alt:l=36e3,speed:c=440}){return{callsign:i,type:e,origin:t,destination:n,birth:a,death:o,script:[{t:a,p:s,y:.165,state:"OVERFLIGHT",alt:l,speed_kt:c},{t:o,p:r,y:.165,state:"OVERFLIGHT",alt:l,speed_kt:c}]}}function DE(){return[Ns({callsign:"KAC101",type:"B772",origin:"LHR",gate:0,rwy:Ds,entryT:2,touchdownT:45,parkT:85}),Ns({callsign:"UAE855",type:"B77W",origin:"DXB",gate:3,rwy:Is,entryT:70,touchdownT:115,parkT:155}),Ns({callsign:"KAC411",type:"B788",origin:"BOM",gate:5,rwy:Ds,entryT:135,touchdownT:180,parkT:220}),Ns({callsign:"JZR223",type:"A320",origin:"BEY",gate:7,rwy:Is,entryT:195,touchdownT:240,parkT:280}),Ns({callsign:"GFA215",type:"A320",origin:"BAH",gate:1,rwy:Is,entryT:30,touchdownT:72,parkT:110}),Ns({callsign:"KNE671",type:"A333",origin:"JED",gate:2,rwy:Ds,entryT:95,touchdownT:140,parkT:180,squawk:"7700"}),Us({callsign:"JZR506",type:"A320",destination:"DOH",gate:1,rwy:Is,pushT:10,holdT:40,rollT:50,exitT:110}),Us({callsign:"QTR1078",type:"B788",destination:"DOH",gate:2,rwy:Ds,pushT:75,holdT:105,rollT:115,exitT:175}),Us({callsign:"FDB061",type:"B738",destination:"DXB",gate:4,rwy:Is,pushT:140,holdT:170,rollT:180,exitT:240}),Us({callsign:"KAC415",type:"A332",destination:"DEL",gate:6,rwy:Ds,pushT:205,holdT:235,rollT:245,exitT:298}),Us({callsign:"WJA452",type:"A320",destination:"CAI",gate:0,rwy:Is,pushT:95,holdT:122,rollT:132,exitT:195}),Us({callsign:"ETD308",type:"A359",destination:"AUH",gate:3,rwy:Ds,pushT:165,holdT:195,rollT:205,exitT:270}),Pr({callsign:"THY6E",type:"A333",origin:"IST",destination:"DXB",from:[-.95,-.55],to:[.95,.3],startT:5,endT:95,alt:38e3}),Pr({callsign:"QTR8AL",type:"B77W",origin:"DOH",destination:"LHR",from:[.55,.95],to:[-.4,-.95],startT:60,endT:150,alt:41e3}),Pr({callsign:"UAE201",type:"A388",origin:"DXB",destination:"JFK",from:[.95,.1],to:[-.95,-.2],startT:120,endT:215,alt:4e4}),Pr({callsign:"SVA445",type:"B789",origin:"RUH",destination:"IST",from:[-.3,.95],to:[.65,-.95],startT:175,endT:265,alt:37e3}),Pr({callsign:"IGO77",type:"A20N",origin:"DEL",destination:"KWI",from:[.95,-.4],to:[-.6,.95],startT:230,endT:298,alt:35e3})]}const Zo=29.2266,ru=47.9689,Jo=Math.cos(Zo*Math.PI/180),wo=500,IE=1500,NE=18,zf=.86,mo=1.75,Vf=mo*1e3/5e3,Hf=.75;class au{static async load(e,t){const n=await fetch(e,{cache:"no-store"});if(!n.ok)throw new Error(`Snapshot fetch failed: ${n.status} ${n.statusText}`);const s=await n.json();return new au(s,t,e)}constructor(e,t,n=null){this.snapshot=e,this.parent=t,this.url=n,this.aircraft=[],e.source==="demo-scripted"?(this.isDemo=!0,this.demoTime=0,this.cycleSec=e.cycle_seconds||mh,this._spawnDemo()):this._spawnAll(e),typeof window<"u"&&(window._sp=this)}_spawnDemo(){const e=DE();for(const t of e){const n=t.script[0],s={callsign:t.callsign,type:t.type,origin:t.origin,destination:t.destination,squawk:t.squawk||null,state:n.state,alt:n.alt,hdg:0,speed_kt:n.speed_kt,on_ground:n.alt<100,dist_nm:0,lat:null,lon:null},r=ph(s);r.position.set(n.p[0],n.y,n.p[1]);for(let a=0;a<t.script.length-1;a++){const o=t.script[a],l=t.script[a+1],c=l.p[0]-o.p[0],h=l.p[1]-o.p[1];if(Math.hypot(c,h)>1e-6){r.rotation.y=Math.atan2(c,h);break}}r.userData._demoDef=t,r.visible=!1,this.parent.add(r),this.aircraft.push(r)}console.log(`[demo] choreographed scene with ${this.aircraft.length} aircraft, ${this.cycleSec}s cycle`)}_spawnAll(e){const t=(e.aircraft||[]).map(r=>({...r,_dist_km:BE(r.lat,r.lon)})).sort((r,a)=>r._dist_km-a._dist_km),n=t.filter(r=>r._dist_km<=wo),s=t.filter(r=>r._dist_km>wo&&r._dist_km<=IE).slice(0,NE);for(const r of n)this.aircraft.push(this.spawnNear(r));for(const r of s)this.aircraft.push(this.spawnDistant(r));console.log(`[snapshot] ${this.aircraft.length} aircraft @ ${e.time_iso||"?"} (near<200km=${n.length} · distant=${s.length})`)}async refresh(){if(!this.url||this.isDemo)return!1;let e;try{const s=await fetch(this.url,{cache:"no-store"});if(!s.ok)return!1;e=await s.json()}catch{return!1}const t=this.snapshot.time_unix,n=e.time_unix;return t&&n&&t===n?!1:(this._disposeAll(),this.snapshot=e,this._spawnAll(e),!0)}_disposeAll(){for(const e of this.aircraft){const t=e.userData?.flightPath;t&&(t.parent?.remove(t),Gf(t)),this.parent.remove(e),Gf(e)}this.aircraft=[]}spawnNear(e){const t=ph(e),{x:n,z:s}=FE(e.lat,e.lon),r=kE(e),a=e.alt>0?.04+Math.min(e.alt/12e3,1.5)*.1:.005;return t.position.set(n+r.dx,a,s+r.dz),this.parent.add(t),t}spawnDistant(e){const t=zE(e.lat,e.lon),n=Math.sin(t)*zf,s=-Math.cos(t)*zf,r=new mt;r.userData={...e,isDistant:!0};const a=Fm(e.callsign),o=Ao[e.state]||Ao.PARKED,l=new st(new Vo(.012,.024,3),new Lt({color:a,transparent:!0,opacity:.92}));l.rotation.x=-Math.PI/2,l.rotation.z=-t,l.position.y=.003,r.add(l);const c=new st(new zo(.005,16),new Lt({color:o.color,transparent:!0,opacity:.95}));c.rotation.x=-Math.PI/2,c.position.y=.0035,r.add(c),r.userData.stateRing=c;const h=VE(e,a);return h.position.y=.04,r.add(h),r.userData.label=h,r.position.set(n,0,s),this.parent.add(r),r}update(e){if(!this.isDemo)return;e>.1&&(e=.1),this.demoTime+=e,this.demoTime>=this.cycleSec&&(this.demoTime-=this.cycleSec),this._loggedFirst||(this._loggedFirst=!0,console.log("[demo] first update — aircraft=",this.aircraft.length,"cycleSec=",this.cycleSec,"dt=",e));const t=this.demoTime;for(const n of this.aircraft){const s=n.userData?._demoDef;if(!s)continue;const r=t>=s.birth&&t<=s.death;if(n.visible=r,!r)continue;const a=s.script;let o=0;for(;o<a.length-1&&a[o+1].t<=t;)o++;const l=a[o],c=a[Math.min(o+1,a.length-1)],h=Math.max(c.t-l.t,1e-4),d=Math.max(0,Math.min(1,(t-l.t)/h)),u=Lr(l.p[0],c.p[0],d),f=Lr(l.p[1],c.p[1],d),p=Lr(l.y,c.y,d);n.position.set(u,p,f);const _=c.p[0]-l.p[0],g=c.p[1]-l.p[1];Math.hypot(_,g)>1e-6&&(n.rotation.y=Math.atan2(_,g),n.userData.hdg=Math.round((Math.atan2(_,-g)*180/Math.PI+360)%360)),n.userData.alt=Math.round(Lr(l.alt,c.alt,d)),n.userData.speed_kt=Math.round(Lr(l.speed_kt,c.speed_kt,d)),n.userData.state=l.state,n.userData.on_ground=n.userData.alt<100,n.userData.dist_nm=Math.round(Math.hypot(u,f)*5e3/1852),n.userData.lon=47.9689+u*5e3/(111320*Jo),n.userData.lat=29.2266-f*5e3/111320,UE(n,e)}}}function Lr(i,e,t){return i+(e-i)*t}function UE(i,e){const t=i.userData,n=t.stateRing;if(!n?.material)return;const s=t.state==="CLEARED",r=t.state==="AIRBORNE_IN"&&(t.dist_nm??999)<5;if(!(s||r)){n._pulseT!=null&&(n._pulseT=0,n.scale.setScalar(1),n.material.opacity=.6);return}n._pulseT=(n._pulseT||0)+e;const o=(Math.sin(n._pulseT*6)+1)/2;n.scale.setScalar(1.2+o*.6),n.material.opacity=.55+o*.45}function OE(i){if(i<=mo)return i*1e3/5e3;if(i>=wo)return Hf;const e=(i-mo)/(wo-mo),t=Math.log(1+e*(Math.E-1));return Vf+(Hf-Vf)*t}function FE(i,e){const t=(e-ru)*111.32*Jo,n=(i-Zo)*111.32,s=Math.hypot(t,n);if(s<1e-6)return{x:0,z:0};const r=OE(s),a=t/s,o=n/s;return{x:a*r,z:-o*r}}function BE(i,e){const t=(e-ru)*111.32*Jo,n=(i-Zo)*111.32;return Math.hypot(t,n)}function kE(i){const e=(i.callsign||i.icao24||i.hex||"x")+"";let t=0;for(let r=0;r<e.length;r++)t=t*31+e.charCodeAt(r)|0;const n=(t&1023)/512-1,s=(t>>10&1023)/512-1;return{dx:n*.035,dz:s*.035}}function zE(i,e){const t=(e-ru)*Jo,n=i-Zo;return Math.atan2(t,n)}function VE(i,e){const t=document.createElement("canvas");t.width=360,t.height=110;const n=t.getContext("2d"),s=`#${e.toString(16).padStart(6,"0")}`;n.fillStyle="rgba(10, 14, 22, 0.85)",HE(n,4,4,t.width-8,t.height-8,10),n.fill(),n.strokeStyle=s,n.lineWidth=2.5,n.stroke(),n.fillStyle="#ffffff",n.font="bold 32px ui-sans-serif, system-ui, sans-serif",n.textAlign="center",n.textBaseline="top",n.fillText(i.callsign,t.width/2,12);const r=`${Math.round(i._dist_km/1.852)} nm · ${i.alt>0?i.alt.toLocaleString()+" ft":"gnd"}`;n.font="20px ui-sans-serif, system-ui, sans-serif",n.fillStyle="#9aa4b2",n.fillText(r,t.width/2,56);const a=new ir(t);a.minFilter=St,a.anisotropy=4;const o=new ia(new nr({map:a,transparent:!0,depthTest:!1}));return o.scale.set(.085,.026,1),o.renderOrder=12,o}function Gf(i){i.traverse(e=>{if(e.geometry&&e.geometry.dispose(),e.material){const t=Array.isArray(e.material)?e.material:[e.material];for(const n of t)n.map&&n.map.dispose(),n.dispose()}})}function HE(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}const zm=1852,Vm=25,Wf=48,Hm=29.2266,GE=47.9689,WE=Math.cos(Hm*Math.PI/180),ns={"33R":{thr:{lat:29.2126,lon:47.9986},hdg:335},"33L":{thr:{lat:29.2127,lon:47.9763},hdg:335},"15L":{thr:{lat:29.2412,lon:47.9834},hdg:155},"15R":{thr:{lat:29.2405,lon:47.9615},hdg:155},34:{thr:{lat:29.1899,lon:47.9623},hdg:343},16:{thr:{lat:29.2293,lon:47.9414},hdg:163}},XE={AIRBORNE_IN:4495871,AIRBORNE_OUT:16746564,CLEARED:3407735,TAXI:16763955,QUEUED:16737843,PARKED:8421504},Gm={OKBK:{lat:29.2266,lon:47.9689},KWI:{lat:29.2266,lon:47.9689},LHR:{lat:51.4775,lon:-.4614},KUL:{lat:2.7456,lon:101.7099},JED:{lat:21.6796,lon:39.1565},BOM:{lat:19.0887,lon:72.8679},DEL:{lat:28.5562,lon:77.1},DXB:{lat:25.2532,lon:55.3657},DOH:{lat:25.2731,lon:51.608},AUH:{lat:24.433,lon:54.6511},BAH:{lat:26.2708,lon:50.6336},IST:{lat:41.2753,lon:28.7519},BEY:{lat:33.8208,lon:35.4884},ISU:{lat:35.5677,lon:45.3169}};function Ro(i){return i==null||i<=0?.005:.04+Math.min(i/12e3,1.5)*.1}function la(i,e){const t=(e-GE)*111320*WE,n=-(i-Hm)*111320;return{x:t*zt,z:n*zt}}function qE(i){const e=i.userData;if(!(!e.on_ground&&(e.alt||0)>=100))return null;const n=new mt;n.userData.isFlightPath=!0;const s=i.position.clone(),r=e.alt||0,a=XE[e.state]||16777215,o=YE(s,r,e),l=KE(s,r,e);if(o.length>=2){const c=Xf(o,Wf);n.add(qf(c,13160664,.65,!1));for(let h=4;h<c.length-2;h+=6)n.add(QE(c[h],13160664,.7))}if(l.length>=2){const c=Xf(l,Wf);n.add(qf(c,a,.9,!0))}return l.length>0&&n.add(eA(l[l.length-1],a)),n}function YE(i,e,t){const n=rn.degToRad(t.hdg||0),s=new E(Math.sin(n),0,-Math.cos(n)),r=new E(-s.z,0,s.x),a=Vm*zm*zt,o=i.y;if(t.state==="AIRBORNE_IN"){const l=Math.min(e*1.6,18e3),c=Ro(l),h=JE(i,s,t);return[yn(i,s,r,-a,a*.45*h,c),yn(i,s,r,-a*.65,a*.25*h,ui(c,o,.4)),yn(i,s,r,-a*.35,a*.06*h,ui(c,o,.7)),yn(i,s,r,-a*.12,0,ui(c,o,.9)),i.clone()]}if(t.state==="AIRBORNE_OUT"){const l=ZE(t.hdg),c=la(l.thr.lat,l.thr.lon),h=new E(c.x,Ro(0),c.z),d=i.clone().setY(0).distanceTo(h.clone().setY(0)),u=Xm(i,s,t);return[h,yn(i,s,r,-d*.66,d*.12*u,ui(h.y,o,.34)),yn(i,s,r,-d*.33,d*.04*u,ui(h.y,o,.7)),i.clone()]}return[yn(i,s,r,-a,0,o),yn(i,s,r,-a*.5,0,o),i.clone()]}function KE(i,e,t){const n=rn.degToRad(t.hdg||0),s=new E(Math.sin(n),0,-Math.cos(n)),r=new E(-s.z,0,s.x),a=Vm*zm*zt,o=i.y;if(t.state==="AIRBORNE_IN"){const l=jE(t.hdg,i),c=Ro(0),h=la(l.thr.lat,l.thr.lon),d=new E(h.x,c,h.z),f=new E(d.x-i.x,0,d.z-i.z).length(),p=rn.degToRad(l.hdg),_=new E(Math.sin(p),0,-Math.cos(p)),g=Math.min(f*.55,a*.4),m=d.clone().sub(_.clone().multiplyScalar(g));m.y=ui(o,c,.7);const y=i.clone().add(s.clone().multiplyScalar(f*.3));return y.y=ui(o,c,.3),[i.clone(),y,m,d]}if(t.state==="AIRBORNE_OUT"){const l=Xm(i,s,t),c=Math.min(e+4e3,24e3),h=Ro(c);return[i.clone(),yn(i,s,r,a*.3,a*.05*l,ui(o,h,.3)),yn(i,s,r,a*.6,a*.18*l,ui(o,h,.6)),yn(i,s,r,a*.95,a*.32*l,h)]}return[i.clone(),yn(i,s,r,a,0,o)]}function yn(i,e,t,n,s,r){const a=i.clone().add(e.clone().multiplyScalar(n)).add(t.clone().multiplyScalar(s));return a.y=r,a}function ui(i,e,t){return i+(e-i)*t}function $E(i,e){let t=((i-e)%360+540)%360-180;return Math.abs(t)}function Wm(i){return Object.keys(ns).map(t=>({code:t,...ns[t],diff:$E(ns[t].hdg,i)})).filter(t=>t.diff<30).sort((t,n)=>t.diff-n.diff)}function jE(i,e){if(i==null)return ns["33L"];const t=Wm(i);if(!t.length)return ns["33L"];let n=t[0],s=1/0;for(const r of t){const a=la(r.thr.lat,r.thr.lon),o=(a.x-e.x)**2+(a.z-e.z)**2;o<s&&(n=r,s=o)}return n}function ZE(i){return i==null?ns["33L"]:Wm(i)[0]||ns["33L"]}function JE(i,e,t){const n=t.origin&&Gm[t.origin];if(!n)return 1;const s=la(n.lat,n.lon),r=e.clone().negate(),a=s.x-i.x,o=s.z-i.z;return r.x*o-r.z*a>0?-1:1}function Xm(i,e,t){const n=t.destination&&Gm[t.destination];if(!n)return-1;const s=la(n.lat,n.lon),r=s.x-i.x,a=s.z-i.z;return e.x*a-e.z*r>0?-1:1}function Xf(i,e){return i.length<2||i.length===2?i:new Pp(i,!1,"centripetal",.6).getPoints(e)}function qf(i,e,t,n=!1){const s=new Je().setFromPoints(i),r=n?new A_({color:e,transparent:!0,opacity:t,dashSize:.014,gapSize:.008,depthTest:!1}):new Mi({color:e,transparent:!0,opacity:t,depthTest:!1}),a=new Rt(s,r);return n&&a.computeLineDistances(),a.renderOrder=6,a}function QE(i,e,t){const n=new st(new sr(.0028,8,6),new Lt({color:e,transparent:!0,opacity:t,depthTest:!1}));return n.position.copy(i),n.renderOrder=7,n}function eA(i,e){const n=[new E(0,0,-.008),new E(.008,0,0),new E(0,0,.008),new E(-.008,0,0),new E(0,0,-.008)],s=new Je().setFromPoints(n),r=new Mi({color:e,transparent:!0,opacity:.9,depthTest:!1}),a=new Rt(s,r);a.position.copy(i),a.renderOrder=7;const o=new st(new Hi(.008*.8,.008*.8),new Lt({color:e,transparent:!0,opacity:.6,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.rotation.z=Math.PI/4,o.position.copy(i),o.renderOrder=6;const l=new mt;return l.add(a),l.add(o),l}function tA(i){i&&i.traverse(e=>{if(e.geometry&&e.geometry.dispose(),e.material){const t=Array.isArray(e.material)?e.material:[e.material];for(const n of t)n.dispose()}})}const nA=1852;function iA({scene:i,tabletop:e,hands:t,controllers:n,traffic:s,renderer:r}){const a=it();i.add(a),a.visible=!1;let o=null;const l=[],c=new Map,h=e.getObjectByName("tabletop-base"),d=h?.material?.emissive?.clone();u(e,{surfaces:h?[h]:[],kind:"tabletop",minScale:.25,maxScale:4,onGrabStart:()=>xe(h,!0,2771576),onGrabEnd:()=>xe(h,!1)});function u(O,U={}){const K={group:O,surfaces:U.surfaces||[],kind:U.kind||"object",minScale:U.minScale??.3,maxScale:U.maxScale??3.5,onGrabStart:U.onGrabStart||null,onGrabEnd:U.onGrabEnd||null};return O.userData.grabbable=!0,O.userData.grabKind=K.kind,l.push(K),K}const f=n.map(()=>sA());for(const O of f)i.add(O);let p=n.map(()=>null);const _=rA();i.add(_);let g=null,m=!1,y=null;r&&(r.xr.addEventListener("sessionstart",async()=>{const O=r.xr.getSession();if(O?.requestHitTestSource)try{const U=await O.requestReferenceSpace("viewer");g=await O.requestHitTestSource({space:U}),y=e.position.clone(),e.visible=!1,m=!1}catch(U){console.warn("[xr] hit-test unavailable:",U)}}),r.xr.addEventListener("sessionend",()=>{g=null,_.visible=!1,e.visible=!0,y&&e.position.copy(y),m=!1}));for(let O=0;O<n.length;O++){const U=n[O];U.userData.handIdx=O,U.addEventListener("selectstart",()=>T(O)),U.addEventListener("selectend",()=>C(O))}function M(O){if(g&&O&&!m){const U=r.xr.getReferenceSpace(),K=O.getHitTestResults(g);if(K.length>0){const Y=K[0].getPose(U);Y&&(_.matrix.fromArray(Y.transform.matrix),_.visible=!0)}else _.visible=!1}for(let U=0;U<n.length;U++){const K=R(n[U]);p[U]=K;const Y=f[U];K?(Y.position.copy(K.point),Y.visible=!0,Y.material.color.setHex(K.type==="aircraft"?16767083:K.type==="grabbable"?4890367:16777215)):Y.visible=!1}H(),o&&a.visible&&(D(o),x+=1,x>=10&&(x=0,Ge(o.userData)))}let x=0;function R(O){const U=new E;U.setFromMatrixPosition(O.matrixWorld);const K=new E(0,0,-1).transformDirection(O.matrixWorld),Y=5;let ce=null,ze=1/0;for(const j of s.aircraft){const ne=new E;j.getWorldPosition(ne);const me=ne.clone().sub(U).dot(K);if(me<0||me>Y)continue;const Le=U.clone().addScaledVector(K,me).distanceTo(ne),L=Math.max(.04,me*.05);Le<L&&Le<ze&&(ce=j,ze=Le)}if(ce){const j=new E;return ce.getWorldPosition(j),{type:"aircraft",target:ce,point:j}}const Ie=[];for(const j of l)Ie.push(...j.surfaces);if(Ie.length>0){const ne=new nx(U,K,0,Y).intersectObjects(Ie,!1);if(ne.length>0){const Q=Ye(ne[0].object);if(Q)return{type:"grabbable",target:Q,point:ne[0].point,uv:ne[0].uv}}}return null}function T(O){const U=t[O],K=p[O];if(!m&&_.visible){const ce=new E;ce.setFromMatrixPosition(_.matrix),e.position.copy(ce),e.rotation.set(0,e.rotation.y,0),e.scale.setScalar(1),e.updateMatrix(),e.visible=!0,m=!0,_.visible=!1;return}if(K?.type==="aircraft"){v(K.target);return}const Y=Ce(U);if(Y){let ce=null,ze=.06;for(const Ie of s.aircraft){const ne=Ie.getWorldPosition(new E).distanceTo(Y);ne<ze&&(ce=Ie,ze=ne)}if(ce){v(ce);return}}if(!(K?.type==="grabbable"&&K.target?.userData?.onPinchClick&&K.target.userData.onPinchClick(K.uv,K.point))){if(K?.type==="grabbable"&&K.target){B(K.target,U);return}Y&&Me(Y)&&B(e,U)}}function C(O){const U=t[O];N(U)}function v(O){if(o===O){w();return}o&&w(),o=O,P(O,!0),F(O),Ge(O.userData),D(O),a.visible=!0}function w(){o&&(P(o,!1),X(o),o=null,a.visible=!1)}function D(O){const U=new E;O.getWorldPosition(U),a.position.copy(U).add(new E(.2,.14,0))}function P(O,U){const K=O.userData?.stateRing;K&&(K.material.opacity=U?.95:.55,K.scale.setScalar(U?1.45:1))}function F(O){X(O);const U=qE(O);U&&(O.userData.flightPath=U,O.parent?.add(U))}function X(O){const U=O.userData?.flightPath;U&&(U.parent?.remove(U),tA(U),O.userData.flightPath=null)}function B(O,U){let K=c.get(O);K||(K={hands:new Set,state:null},c.set(O,K),l.find(ce=>ce.group===O)?.onGrabStart?.()),K.hands.add(U),z(O,K)}function N(O){for(const[U,K]of c)if(K.hands.has(O)){K.hands.delete(O),K.hands.size===0?(c.delete(U),l.find(ce=>ce.group===U)?.onGrabEnd?.()):z(U,K);return}}function z(O,U){const K=[];for(const Y of U.hands){const ce=Ce(Y);ce&&K.push(ce)}if(K.length===0){U.state=null;return}O.updateMatrix(),U.state={handPositions:K,initialMatrix:O.matrix.clone()}}function H(){for(const[O,U]of c){if(!U.state)continue;const K=[];for(const Y of U.hands){const ce=Ce(Y);ce&&K.push(ce)}if(K.length!==U.state.handPositions.length){z(O,U);continue}K.length!==0&&ie(O,U,K)}o&&D(o)}function ie(O,U,K){if(K.length===1){const Y=K[0].clone().sub(U.state.handPositions[0]),ce=U.state.initialMatrix.clone();ce.elements[12]+=Y.x,ce.elements[13]+=Y.y,ce.elements[14]+=Y.z,oe(O,ce)}else{const Y=U.state.handPositions[0],ce=U.state.handPositions[1],ze=K[0],Ie=K[1],j=Y.clone().add(ce).multiplyScalar(.5),ne=ze.clone().add(Ie).multiplyScalar(.5),Q=Math.max(Y.distanceTo(ce),1e-4),me=ze.distanceTo(Ie),ue=lA(me/Q,.4,3),Le=ce.clone().sub(Y);Le.y=0;const L=Ie.clone().sub(ze);L.y=0;const Ve=Math.atan2(L.x,L.z)-Math.atan2(Le.x,Le.z),Pe=new Ee().makeTranslation(ne.x,ne.y,ne.z),He=new Ee().makeRotationY(Ve),le=new Ee().makeScale(ue,ue,ue),at=new Ee().makeTranslation(-j.x,-j.y,-j.z),A=Pe.multiply(He).multiply(le).multiply(at).multiply(U.state.initialMatrix);oe(O,A)}}function oe(O,U){U.decompose(O.position,O.quaternion,O.scale);const K=l.find(ce=>ce.group===O),Y=rn.clamp(O.scale.x,K?.minScale??.3,K?.maxScale??3.5);O.scale.setScalar(Y),O.updateMatrix()}function xe(O,U,K=2771576){O?.material&&(U?(O.material.emissive=new ke(K),O.material.emissiveIntensity=.5):(O.material.emissive=d?d.clone():new ke(0),O.material.emissiveIntensity=0))}function Me(O){const U=e.worldToLocal(O.clone());return Math.abs(U.x)<.85&&Math.abs(U.z)<.85&&Math.abs(U.y)<.2}function Ce(O){const U=O?.joints?.["index-finger-tip"];if(!U)return null;const K=new E;return U.getWorldPosition(K),K}function Ye(O){let U=O;for(;U;){if(U.userData?.grabbable)return U;U=U.parent}return null}function it(){const O=document.createElement("canvas");O.width=600,O.height=460;const U=new ir(O);U.minFilter=St,U.anisotropy=4;const K=new ia(new nr({map:U,transparent:!0,depthTest:!1}));return K.scale.set(.3,.23,1),K.renderOrder=20,K.userData={canvas:O,tex:U},K}function Ge(O){const{canvas:U,tex:K}=a.userData,Y=U.getContext("2d");Y.clearRect(0,0,U.width,U.height),Y.fillStyle="rgba(10, 14, 22, 0.95)",Kf(Y,0,0,U.width,U.height,16),Y.fill();const ce=`#${Fm(O.callsign).toString(16).padStart(6,"0")}`;Y.strokeStyle=ce,Y.lineWidth=4,Y.stroke();const ze=aA(O.state);Y.fillStyle=ze,Y.fillRect(0,0,U.width,8),Y.textBaseline="top",Y.fillStyle="#ffffff",Y.font="bold 56px ui-sans-serif, system-ui, sans-serif",Y.fillText(O.callsign,28,26);const Ie=yE(O.callsign);Y.fillStyle=ce,Y.font="24px ui-sans-serif, system-ui, sans-serif",Y.fillText(Ie||" ",28,90);const j=oA(O);if(j){Y.font="bold 26px ui-sans-serif, system-ui, sans-serif";const Le=Y.measureText(j.text).width+36,L=U.width-28-Le;Y.fillStyle=j.bg,Kf(Y,L,30,Le,44,22),Y.fill(),Y.fillStyle=j.fg,Y.textAlign="center",Y.fillText(j.text,L+Le/2,38),Y.textAlign="left"}Y.strokeStyle="rgba(120,140,170,0.25)",Y.lineWidth=1,Yf(Y,28,130,U.width-28,130),Y.fillStyle=ze,Y.font="bold 28px ui-sans-serif, system-ui, sans-serif",Y.fillText(String(O.state||"").replace("_"," "),28,142),Y.fillStyle="#cbd5e1",Y.font="22px ui-sans-serif, system-ui, sans-serif";const ne=SE(O.type);Y.fillText(`${ne}${O.type?`  (${O.type})`:""}`,28,180);const Q=220,me=[["Heading",`${O.hdg??"-"}°`],["Altitude",`${(O.alt??0).toLocaleString()} ft`],["Speed",O.speed_kt!=null?`${O.speed_kt} kt`:"-"]];if(O.vrate_fpm!=null&&Math.abs(O.vrate_fpm)>50){const Le=O.vrate_fpm>0?"↑":"↓";me.push(["V/Rate",`${Le} ${Math.abs(O.vrate_fpm).toLocaleString()} fpm`])}me.forEach(([Le,L],Ve)=>{const Pe=Q+Ve*36;Y.fillStyle="#7d8b9e",Y.font="20px ui-sans-serif, system-ui, sans-serif",Y.fillText(Le,28,Pe),Y.fillStyle="#e6edf3",Y.font="22px ui-sans-serif, system-ui, sans-serif",Y.fillText(L,180,Pe)}),Yf(Y,28,360,U.width-28,360),Y.fillStyle="#7d8b9e",Y.font="20px ui-sans-serif, system-ui, sans-serif",Y.fillText("Route",28,374),Y.fillStyle="#e6edf3",Y.font="bold 24px ui-sans-serif, system-ui, sans-serif",Y.fillText(`${O.origin||"?"}  →  ${O.destination||"?"}`,180,372);const ue=ee(O);Y.fillStyle="#7d8b9e",Y.font="20px ui-sans-serif, system-ui, sans-serif",Y.fillText("ETA",28,416),Y.fillStyle="#e6edf3",Y.font="bold 22px ui-sans-serif, system-ui, sans-serif",Y.fillText(ue,180,414),K.needsUpdate=!0}function ee(O){if(O.state!=="AIRBORNE_IN")return"—";const U=O.speed_kt;if(!U||U<50)return"—";const K=O.lat,Y=O.lon;if(K==null||Y==null)return"—";const ce=Math.cos(29.2266*Math.PI/180),ze=(Y-47.9689)*111.32*ce,Ie=(K-29.2266)*111.32,ne=Math.hypot(ze,Ie)*1e3/nA,Q=Math.round(ne/U*60);return Q<1?"< 1 min":Q<60?`${Q} min`:`${Math.floor(Q/60)}h ${Q%60}m`}return{update:M,registerGrabbable:u}}function sA(){const i=new st(new sr(.006,16,12),new Lt({color:4890367,transparent:!0,opacity:.85,depthTest:!1}));return i.renderOrder=25,i.visible=!1,i}function rA(){const i=new mt,e=new st(new sa(.07,.085,32).rotateX(-Math.PI/2),new Lt({color:4890367,transparent:!0,opacity:.9,depthTest:!1})),t=new st(new zo(.012,16).rotateX(-Math.PI/2),new Lt({color:16777215,transparent:!0,opacity:.9,depthTest:!1}));return e.renderOrder=26,t.renderOrder=27,i.add(e),i.add(t),i.matrixAutoUpdate=!1,i.visible=!1,i}function aA(i){switch(i){case"PARKED":return"#b0b0b0";case"TAXI":return"#ffcc33";case"QUEUED":return"#ff6633";case"CLEARED":return"#33ff77";case"AIRBORNE_OUT":return"#ff8844";case"AIRBORNE_IN":return"#4499ff";case"OVERFLIGHT":return"#c89bff";default:return"#ffffff"}}function oA(i){switch(i.state){case"AIRBORNE_IN":return{text:"▼ INBOUND",fg:"#06243f",bg:"#4499ff"};case"AIRBORNE_OUT":return{text:"▲ OUTBOUND",fg:"#3a1c00",bg:"#ff8844"};case"OVERFLIGHT":return{text:"↔ OVERFLIGHT",fg:"#1f0f33",bg:"#c89bff"};case"CLEARED":return{text:"● ON RUNWAY",fg:"#04220f",bg:"#33ff77"};case"TAXI":return{text:"● TAXI",fg:"#332900",bg:"#ffcc33"};case"QUEUED":return{text:"● HOLDING",fg:"#330f00",bg:"#ff6633"};case"PARKED":return{text:"● AT GATE",fg:"#1a1a1a",bg:"#b0b0b0"};default:return null}}function lA(i,e,t){return Math.max(e,Math.min(t,i))}function Yf(i,e,t,n,s){i.beginPath(),i.moveTo(e,t),i.lineTo(n,s),i.stroke()}function Kf(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}const cA=1852,qm=29.2266,hA=47.9689,uA=Math.cos(qm*Math.PI/180);class Co{constructor({name:e,width:t,height:n,canvasW:s=512,canvasH:r=768,anchor:a,faceTarget:o}){this.name=e,this.width=t,this.height=n,this.canvas=document.createElement("canvas"),this.canvas.width=s,this.canvas.height=r,this.ctx=this.canvas.getContext("2d"),this.texture=new ir(this.canvas),this.texture.minFilter=St,this.texture.anisotropy=4,this.texture.colorSpace=It;const l=new Lt({map:this.texture,transparent:!0,side:tn,depthWrite:!1});this.mesh=new st(new Hi(t,n),l),this.mesh.name=`panel-${e}-surface`,this.mesh.renderOrder=15,this.group=new mt,this.group.name=`panel-${e}`,this.group.add(this.mesh),a&&this.group.position.copy(a),o&&this.group.lookAt(o),this.group.userData.grabbable=!0,this.group.userData.panelName=e,this.group.userData.grabSurface=this.mesh,this._lastDraw=0}shouldRedraw(e,t){return e-this._lastDraw<t?!1:(this._lastDraw=e,!0)}redraw(e){e(this.ctx,this.canvas.width,this.canvas.height),this.texture.needsUpdate=!0}}function dA(i){return i>=1e3?`${Math.round(i/100)/10}k`:String(i)}function fA(i){if(i.state!=="AIRBORNE_IN")return"-";const e=i.speed_kt;if(!e||e<50)return"-";const t=i.lat,n=i.lon;if(t==null||n==null)return"-";const s=(n-hA)*111.32*uA,r=(t-qm)*111.32,o=Math.hypot(s,r)*1e3/cA,l=Math.round(o/e*60);return l<1?"<1m":l<60?`${l}m`:`${Math.floor(l/60)}h${l%60}m`}function Vi(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function pA(i,e,t,n){const{inbounds:s,outbounds:r,gearActive:a}=n;i.clearRect(0,0,e,t),i.fillStyle="rgba(8, 12, 20, 0.95)",Vi(i,0,0,e,t,22),i.fill(),i.strokeStyle="#4499ff",i.lineWidth=5,i.stroke(),i.fillStyle="#4499ff",i.fillRect(0,0,e,8);const o=96,l=14,c={x:e-o-l,y:l,w:o,h:o};i.fillStyle=a?"rgba(68,153,255,0.22)":"rgba(40,52,70,0.5)",Vi(i,c.x,c.y,o,o,14),i.fill(),i.strokeStyle=a?"#7dd3ff":"rgba(120,140,170,0.5)",i.lineWidth=2,i.stroke(),mA(i,c.x+o/2,c.y+o/2,o*.34,a);const h=Math.round(t*.28);if(gA(i,0,0,e,h),typeof n.demoTime=="number"){const u=Math.floor(n.demoTime),f=String(Math.floor(u/60)).padStart(1,"0"),p=String(u%60).padStart(2,"0");i.fillStyle="#ffd86b",i.font="bold 22px ui-monospace, monospace",i.textBaseline="top",i.textAlign="left",i.fillText(`▶ DEMO ${f}:${p}`,28,h-36),i.textAlign="left",i.textBaseline="top"}i.strokeStyle="rgba(120, 140, 170, 0.35)",i.lineWidth=2,i.beginPath(),i.moveTo(28,h),i.lineTo(e-28,h),i.stroke();const d=e/2;return i.beginPath(),i.moveTo(d,h+20),i.lineTo(d,t-20),i.stroke(),$f(i,0,h,d,t-h,{title:"INBOUND",flights:s,accentHex:"#4499ff",routeKey:"origin",extraKey:"eta"}),$f(i,d,h,e-d,t-h,{title:"OUTBOUND",flights:r,accentHex:"#ff8844",routeKey:"destination",extraKey:"hdg"}),{gearRegion:c}}function mA(i,e,t,n,s=!1){i.save(),i.strokeStyle=s?"#7dd3ff":"#58a6ff",i.lineWidth=4,i.lineJoin="round",i.beginPath();for(let a=0;a<8;a++){const o=a/8*Math.PI*2,l=(a+.4)/8*Math.PI*2,c=(a+.6)/8*Math.PI*2,h=(a+1)/8*Math.PI*2,d=n,u=n*.72,f=(p,_)=>[e+Math.cos(p)*_,t+Math.sin(p)*_];a===0&&i.moveTo(...f(o,d)),i.lineTo(...f(o,d)),i.lineTo(...f(l,d)),i.lineTo(...f(c,u)),i.lineTo(...f(h,u))}i.closePath(),i.stroke(),i.beginPath(),i.arc(e,t,n*.4,0,Math.PI*2),i.stroke(),i.restore()}function gA(i,e,t,n,s){const r=new Date,a=String(r.getHours()).padStart(2,"0"),o=String(r.getMinutes()).padStart(2,"0"),l=String(r.getSeconds()).padStart(2,"0");i.fillStyle="#7d8b9e",i.font="bold 18px ui-sans-serif, system-ui, sans-serif",i.textBaseline="top",i.textAlign="center",i.fillText("LOCAL TIME",e+n/2,t+22),i.textBaseline="middle",i.fillStyle="#ffffff",i.font='bold 96px ui-monospace, "SF Mono", monospace';const c=`${a}:${o}`,h=`:${l}`;i.font='bold 96px ui-monospace, "SF Mono", monospace';const d=i.measureText(c).width;i.font='bold 56px ui-monospace, "SF Mono", monospace';const u=i.measureText(h).width,f=d+u,p=e+(n-f)/2;i.font='bold 96px ui-monospace, "SF Mono", monospace',i.textAlign="left",i.fillStyle="#ffffff",i.fillText(c,p,t+s*.52),i.font='bold 56px ui-monospace, "SF Mono", monospace',i.fillStyle="#58a6ff",i.fillText(h,p+d,t+s*.58),i.textAlign="center",i.font="22px ui-sans-serif, system-ui, sans-serif",i.fillStyle="#a8c4ff";const _=r.toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short",year:"numeric"});i.fillText(_,e+n/2,t+s*.88),i.textAlign="left",i.textBaseline="top"}function $f(i,e,t,n,s,r){const{title:a,flights:o,accentHex:l,routeKey:c,extraKey:h}=r,d=24;i.fillStyle=l,i.font="bold 34px ui-sans-serif, system-ui, sans-serif",i.textBaseline="top",i.fillText(a,e+d,t+18),i.font="18px ui-sans-serif, system-ui, sans-serif",i.fillStyle="#9aa4b2",i.fillText(`${o.length} aircraft`,e+d,t+58);const u=t+96;if(i.font="bold 15px ui-sans-serif, system-ui, sans-serif",i.fillStyle="#7d8b9e",i.fillText("FLT",e+d,u),i.fillText("TYPE",e+d+100,u),i.fillText(c==="origin"?"FROM":"TO",e+d+165,u),i.fillText("ALT",e+d+240,u),i.fillText(h==="eta"?"ETA":"HDG",e+d+305,u),i.strokeStyle="rgba(120,140,170,0.35)",i.lineWidth=1,i.beginPath(),i.moveTo(e+d,u+22),i.lineTo(e+n-d,u+22),i.stroke(),!o.length){i.fillStyle="#7d8b9e",i.font="italic 18px ui-sans-serif, system-ui, sans-serif",i.fillText("No flights tracked.",e+d,u+50);return}const f=36,p=Math.floor((s-130)/f);o.slice(0,p).forEach((_,g)=>{const m=u+42+g*f;i.font="bold 18px ui-sans-serif, system-ui, sans-serif",i.fillStyle="#ffffff",i.fillText((_.callsign||"").slice(0,8),e+d,m),i.font="16px ui-sans-serif, system-ui, sans-serif",i.fillStyle="#cbd5e1",i.fillText((_.type||"-").slice(0,5),e+d+100,m);const y=c==="origin"?_.origin||"-":_.destination||"-";i.fillText(String(y).slice(0,5),e+d+165,m),i.fillStyle="#a8c4ff";const M=_.alt?dA(_.alt):"gnd";i.fillText(M,e+d+240,m),i.fillStyle="#e6edf3";const x=h==="eta"?fA(_):`${_.hdg??"-"}°`;i.fillText(x,e+d+305,m)})}function _A(i,e,t,n){const{currentMap:s,currentData:r,currentTheme:a,tab:o="general",features:l=[]}=n,c=[];i.clearRect(0,0,e,t),i.fillStyle="rgba(10, 14, 22, 0.97)",Vi(i,0,0,e,t,18),i.fill(),i.strokeStyle="#7d8b9e",i.lineWidth=3,i.stroke(),i.fillStyle="#4499ff",i.fillRect(0,0,e,8),i.fillStyle="#ffffff",i.font="bold 30px ui-sans-serif, system-ui, sans-serif",i.textBaseline="top",i.textAlign="left",i.fillText("SETTINGS",28,24);const h=70,d=44,u=[{id:"tab:general",label:"General",active:o==="general"},{id:"tab:advanced",label:"Advanced",active:o==="advanced"}],f=(e-56-12)/2;u.forEach((_,g)=>{const m=28+g*(f+12);c.push({id:_.id,x:m,y:h,w:f,h:d}),i.fillStyle=_.active?"#4499ff":"rgba(30,40,55,0.6)",Vi(i,m,h,f,d,8),i.fill(),i.fillStyle=_.active?"#ffffff":"#a8c4ff",i.font=`${_.active?"bold ":""}20px ui-sans-serif, system-ui, sans-serif`,i.textAlign="center",i.textBaseline="middle",i.fillText(_.label,m+f/2,h+d/2)}),i.textAlign="left",i.textBaseline="top";let p=h+d+24;if(o==="general"){p=ac(i,"MAP",28,p,e-56,[{id:"map:osm",label:"Satellite",active:s==="osm"},{id:"map:cyber",label:"Cyberpunk",active:s==="cyber"},{id:"map:tiles",label:"Photoreal",active:s==="tiles"}],c),p+=24,p=ac(i,"DATA SOURCE",28,p,e-56,[{id:"data:live",label:"Live FR24",active:r==="live"},{id:"data:demo",label:"Demo 14:00 LT",active:r==="demo"}],c),p+=24,p=ac(i,"VIEW",28,p,e-56,[{id:"theme:day",label:"☀ Day",active:a==="day"},{id:"theme:night",label:"☾ Night",active:a==="night"}],c),p+=24;const _=l.find(g=>g.id==="weather");_&&(i.fillStyle="#7d8b9e",i.font="16px ui-sans-serif, system-ui, sans-serif",i.textBaseline="top",i.textAlign="left",i.fillText("PANELS",28,p),p+=28,p=jf(i,28,p,e-56,{id:"weather",label:"Weather Panel",desc:"METAR · wind · active runway",enabled:_.enabled},c))}else{i.fillStyle="#7d8b9e",i.font="16px ui-sans-serif, system-ui, sans-serif",i.fillText("ATC FEATURES",28,p),p+=28;for(const _ of l)p=jf(i,28,p,e-56,_,c),p+=12}return c}function jf(i,e,t,n,s,r){r.push({id:`feature:${s.id}`,x:e,y:t,w:n,h:66}),i.fillStyle="rgba(30, 40, 55, 0.55)",Vi(i,e,t,n,66,10),i.fill(),i.strokeStyle="rgba(120,140,170,0.4)",i.lineWidth=1.5,i.stroke(),i.fillStyle="#ffffff",i.font="bold 20px ui-sans-serif, system-ui, sans-serif",i.textAlign="left",i.textBaseline="top",i.fillText(s.label,e+16,t+12),i.fillStyle="#7d8b9e",i.font="15px ui-sans-serif, system-ui, sans-serif",i.fillText(s.desc||"",e+16,t+38);const o=76,l=36,c=e+n-o-16,h=t+(66-l)/2;i.fillStyle=s.enabled?"#33c66a":"rgba(80,90,105,0.8)",Vi(i,c,h,o,l,l/2),i.fill();const d=l/2-4,u=s.enabled?c+o-d-4:c+d+4;return i.fillStyle="#ffffff",i.beginPath(),i.arc(u,h+l/2,d,0,Math.PI*2),i.fill(),i.fillStyle=s.enabled?"#ffffff":"#c8d0d8",i.font="bold 13px ui-sans-serif, system-ui, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(s.enabled?"ON":"OFF",s.enabled?c+d+6:c+o-d-6,h+l/2),i.textAlign="left",i.textBaseline="top",t+66}function ac(i,e,t,n,s,r,a){i.fillStyle="#7d8b9e",i.font="bold 16px ui-sans-serif, system-ui, sans-serif",i.textBaseline="top",i.textAlign="left",i.fillText(e,t,n);const o=n+28,l=56,c=12,h=(s-c*(r.length-1))/r.length;return r.forEach((d,u)=>{const f=t+u*(h+c),p=o;a.push({id:d.id,x:f,y:p,w:h,h:l}),d.active?(i.fillStyle="rgba(68, 153, 255, 0.25)",Vi(i,f,p,h,l,10),i.fill(),i.strokeStyle="#4499ff",i.lineWidth=2.5):(i.fillStyle="rgba(30, 40, 55, 0.6)",Vi(i,f,p,h,l,10),i.fill(),i.strokeStyle="rgba(120, 140, 170, 0.5)",i.lineWidth=1.5),i.stroke(),i.fillStyle=d.active?"#ffffff":"#a8c4ff",i.font=`${d.active?"bold ":""}18px ui-sans-serif, system-ui, sans-serif`,i.textAlign="center",i.textBaseline="middle",i.fillText(d.label,f+h/2,p+l/2)}),i.textAlign="left",i.textBaseline="top",o+l}const Ym="fahad_atc_feat_",ou=[{id:"conflicts",label:"Conflict Alerts",default:!0,desc:"Separation-loss warnings (STCA)"},{id:"emergency",label:"Emergency Squawk",default:!0,desc:"7500 / 7600 / 7700 highlight"},{id:"weather",label:"Weather Panel",default:!0,desc:"METAR + wind + active runway"},{id:"strips",label:"Flight Strips",default:!1,desc:"Electronic strip board"}];function lu(i){const e=localStorage.getItem(Ym+i);if(e===null){const t=ou.find(n=>n.id===i);return t?t.default:!1}return e==="1"}function xA(i,e){localStorage.setItem(Ym+i,e?"1":"0")}const vA=3,Zf=1e3,Jf=6,yA=Math.cos(29.2266*Math.PI/180);function SA(i,e){if(i.lat==null||e.lat==null)return 1/0;const t=(i.lon-e.lon)*111.32*yA,n=(i.lat-e.lat)*111.32;return Math.hypot(t,n)*1e3/1852}function MA({scene:i,tabletop:e,traffic:t}){let n=!1;const s=new mt;s.name="conflict-overlay",e.add(s);const r=[];function a(){let d=r.find(u=>!u.inUse);if(!d){const u=new Je().setFromPoints([new E,new E]),f=new Mi({transparent:!0,depthTest:!1}),p=new Rt(u,f);p.renderOrder=9;const _=bA();s.add(p),s.add(_),d={line:p,sprite:_,inUse:!1},r.push(d)}return d.inUse=!0,d}let o=0;function l(d){if(!n)return;o+=d;const u=(Math.sin(o*5)+1)/2;for(const p of r)p.inUse=!1;const f=t.aircraft.filter(p=>p.visible&&p.userData&&!p.userData.on_ground&&(p.userData.alt||0)>100);for(let p=0;p<f.length;p++)for(let _=p+1;_<f.length;_++){const g=f[p].userData,m=f[_].userData,y=SA(g,m);if(y>Jf)continue;const M=Math.abs((g.alt||0)-(m.alt||0)),x=y<vA&&M<Zf,R=!x&&y<Jf&&M<Zf*1.5;if(!x&&!R)continue;const T=a(),C=f[p].position,v=f[_].position,w=T.line.geometry.attributes.position;w.setXYZ(0,C.x,C.y,C.z),w.setXYZ(1,v.x,v.y,v.z),w.needsUpdate=!0,T.line.geometry.computeBoundingSphere();const D=x?16722474:16756768;T.line.material.color.setHex(D),T.line.material.opacity=x?.5+u*.5:.5,T.line.visible=!0,T.sprite.position.set((C.x+v.x)/2,(C.y+v.y)/2+.03,(C.z+v.z)/2),TA(T.sprite,x?"CONFLICT":"TFC",`${y.toFixed(1)}nm`,D,x?.6+u*.4:.85),T.sprite.visible=!0}for(const p of r)p.inUse||(p.line.visible=!1,p.sprite.visible=!1)}function c(d){if(n=d,s.visible=d,!d)for(const u of r)u.line.visible=!1,u.sprite.visible=!1}function h(){e.remove(s);for(const d of r)d.line.geometry.dispose(),d.line.material.dispose(),d.sprite.material.map?.dispose(),d.sprite.material.dispose()}return{setEnabled:c,update:l,dispose:h}}function bA(){const i=document.createElement("canvas");i.width=256,i.height=96;const e=new ir(i);e.minFilter=St;const t=new ia(new nr({map:e,transparent:!0,depthTest:!1}));return t.scale.set(.07,.026,1),t.renderOrder=22,t.userData={canvas:i,tex:e},t.visible=!1,t}function TA(i,e,t,n,s){const{canvas:r,tex:a}=i.userData,o=r.getContext("2d");o.clearRect(0,0,r.width,r.height);const l=`#${n.toString(16).padStart(6,"0")}`;o.fillStyle="rgba(20, 4, 4, 0.85)",EA(o,6,6,r.width-12,r.height-12,12),o.fill(),o.strokeStyle=l,o.lineWidth=4,o.stroke(),o.fillStyle=l,o.font="bold 40px ui-sans-serif, system-ui, sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText(e,r.width/2,36),o.fillStyle="#ffffff",o.font="26px ui-monospace, monospace",o.fillText(t,r.width/2,72),i.material.opacity=s,a.needsUpdate=!0}function EA(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}const AA={7500:{label:"HIJACK",color:16711850},7600:{label:"NORDO",color:16755200},7700:{label:"EMERGENCY",color:16722474}};function wA({tabletop:i,traffic:e}){let t=!1;const n=new mt;n.name="emergency-overlay",i.add(n);const s=new Map;let r=0;function a(h){let d=s.get(h);if(!d){const u=new st(new sa(.022,.03,40).rotateX(-Math.PI/2),new Lt({color:16722474,transparent:!0,opacity:.9,side:tn,depthWrite:!1}));u.renderOrder=8;const f=RA();n.add(u),n.add(f),d={ring:u,sprite:f},s.set(h,d)}return d}function o(h){if(!t)return;r+=h;const d=(Math.sin(r*6)+1)/2,u=new Set;for(const f of e.aircraft){const p=String(f.userData?.squawk||""),_=AA[p];if(!_||!f.visible)continue;u.add(f);const g=a(f);g.ring.position.copy(f.position).setY(f.position.y+.002),g.ring.scale.setScalar(1+d*.5),g.ring.material.color.setHex(_.color),g.ring.material.opacity=.4+d*.6,g.ring.visible=!0,g.sprite.position.copy(f.position).setY(f.position.y+.055),CA(g.sprite,_.label,p,_.color),g.sprite.visible=!0}for(const[f,p]of s)u.has(f)||(p.ring.visible=!1,p.sprite.visible=!1)}function l(h){if(t=h,n.visible=h,!h)for(const[,d]of s)d.ring.visible=!1,d.sprite.visible=!1}function c(){i.remove(n);for(const[,h]of s)h.ring.geometry.dispose(),h.ring.material.dispose(),h.sprite.material.map?.dispose(),h.sprite.material.dispose();s.clear()}return{setEnabled:l,update:o,dispose:c}}function RA(){const i=document.createElement("canvas");i.width=256,i.height=80;const e=new ir(i);e.minFilter=St;const t=new ia(new nr({map:e,transparent:!0,depthTest:!1}));return t.scale.set(.065,.02,1),t.renderOrder=24,t.userData={canvas:i,tex:e},t.visible=!1,t}function CA(i,e,t,n){const{canvas:s,tex:r}=i.userData,a=s.getContext("2d");a.clearRect(0,0,s.width,s.height);const o=`#${n.toString(16).padStart(6,"0")}`;a.fillStyle="rgba(25, 2, 2, 0.9)",PA(a,4,4,s.width-8,s.height-8,10),a.fill(),a.strokeStyle=o,a.lineWidth=3,a.stroke(),a.fillStyle=o,a.font="bold 34px ui-sans-serif, system-ui, sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillText(`⚠ ${e}`,s.width/2,30),a.fillStyle="#ffffff",a.font="22px ui-monospace, monospace",a.fillText(`SQ ${t}`,s.width/2,60),r.needsUpdate=!0}function PA(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function LA({scene:i,SpatialPanel:e,interaction:t}){let n=!1,s=0;const r=new e({name:"weather",width:.34,height:.4,canvasW:520,canvasH:620,anchor:new E(-.85,1.45,-.75),faceTarget:new E(0,1.4,0)});i.add(r.group),r.group.visible=!1,t.registerGrabbable(r.group,{surfaces:[r.mesh],kind:"panel",minScale:.5,maxScale:2});const a={windDir:330,windKt:12,temp:38,dew:9,qnh:1009};function o(p){const _=(a.windDir+Math.round(20*Math.sin(p/25)))%360,g=a.windKt+Math.round(4*Math.sin(p/17));return{dir:_,kt:g}}function l(p){const _=[{name:"33",hdg:335},{name:"15",hdg:155}];let g=_[0],m=999;for(const y of _){const M=Math.abs((p-y.hdg+540)%360-180);M<m&&(g=y,m=M)}return g.name}function c(p){if(!n)return;const _=performance.now();if(_-s<1e3)return;s=_;const g=_/1e3,m=o(g),y=l(m.dir);r.redraw((M,x,R)=>h(M,x,R,m,y))}function h(p,_,g,m,y){p.clearRect(0,0,_,g),p.fillStyle="rgba(8, 12, 20, 0.95)",Qf(p,0,0,_,g,18),p.fill(),p.strokeStyle="#33c6a8",p.lineWidth=5,p.stroke(),p.fillStyle="#33c6a8",p.fillRect(0,0,_,8),p.fillStyle="#ffffff",p.font="bold 36px ui-sans-serif, system-ui, sans-serif",p.textBaseline="top",p.textAlign="left",p.fillText("OKBK WX",24,26),p.fillStyle="#7d8b9e",p.font="18px ui-sans-serif, system-ui, sans-serif",p.fillText("Kuwait Intl · METAR",24,70);const M=_/2,x=230,R=90;p.strokeStyle="rgba(120,140,170,0.4)",p.lineWidth=2,p.beginPath(),p.arc(M,x,R,0,Math.PI*2),p.stroke(),p.fillStyle="#7d8b9e",p.font="16px ui-sans-serif, sans-serif",p.textAlign="center",p.fillText("N",M,x-R-20),p.fillText("S",M,x+R+6),p.fillText("W",M-R-16,x-8),p.fillText("E",M+R+16,x-8);const T=(m.dir-90)*Math.PI/180,C=M+Math.cos(T)*R,v=x+Math.sin(T)*R;p.strokeStyle="#33c6a8",p.lineWidth=5,p.beginPath(),p.moveTo(C,v),p.lineTo(M,x),p.stroke(),p.fillStyle="#33c6a8",p.beginPath(),p.arc(M,x,7,0,Math.PI*2),p.fill(),p.fillStyle="#ffffff",p.font="bold 30px ui-monospace, monospace",p.fillText(`${String(m.dir).padStart(3,"0")}° / ${m.kt}kt`,M,x+R+28);let w=x+R+78;const D=[["Visibility","10+ km"],["Temp / Dew",`${a.temp}°C / ${a.dew}°C`],["QNH",`${a.qnh} hPa`]];p.textAlign="left";for(const[P,F]of D)p.fillStyle="#7d8b9e",p.font="20px ui-sans-serif, sans-serif",p.fillText(P,24,w),p.fillStyle="#e6edf3",p.font="bold 22px ui-sans-serif, sans-serif",p.fillText(F,240,w),w+=38;w+=8,p.fillStyle="rgba(51, 198, 168, 0.18)",Qf(p,24,w,_-48,70,12),p.fill(),p.strokeStyle="#33c6a8",p.lineWidth=2,p.stroke(),p.fillStyle="#7d8b9e",p.font="16px ui-sans-serif, sans-serif",p.fillText("RECOMMENDED RUNWAY",40,w+12),p.fillStyle="#33c6a8",p.font="bold 38px ui-sans-serif, sans-serif",p.fillText(`RWY ${y}`,40,w+30)}function d(p){n=p,r.group.visible=p,p&&(s=0)}function u(){return n}function f(){i.remove(r.group)}return{setEnabled:d,isEnabled:u,update:c,dispose:f,group:r.group}}function Qf(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}const DA={AIRBORNE_IN:"33",CLEARED:"33",TAXI:"—",QUEUED:"33",AIRBORNE_OUT:"33",PARKED:"—"};function IA({scene:i,SpatialPanel:e,interaction:t,traffic:n}){let s=!1,r=0;const a=new e({name:"strips",width:.4,height:.58,canvasW:600,canvasH:880,anchor:new E(.88,1.45,-.75),faceTarget:new E(0,1.4,0)});i.add(a.group),a.group.visible=!1,t.registerGrabbable(a.group,{surfaces:[a.mesh],kind:"panel",minScale:.5,maxScale:2});function o(u){if(!s)return;const f=performance.now();if(f-r<800)return;r=f;const p=n.aircraft.filter(m=>m.visible).map(m=>m.userData).filter(Boolean),_=p.filter(m=>["AIRBORNE_IN"].includes(m.state)||["CLEARED","TAXI","PARKED"].includes(m.state)&&m.destination==="OKBK"),g=p.filter(m=>["AIRBORNE_OUT","QUEUED"].includes(m.state)||["CLEARED","TAXI"].includes(m.state)&&m.origin==="OKBK");a.redraw((m,y,M)=>l(m,y,M,_,g))}function l(u,f,p,_,g){u.clearRect(0,0,f,p),u.fillStyle="rgba(8, 12, 20, 0.96)",oc(u,0,0,f,p,18),u.fill(),u.strokeStyle="#9a7dff",u.lineWidth=5,u.stroke(),u.fillStyle="#9a7dff",u.fillRect(0,0,f,8),u.fillStyle="#ffffff",u.font="bold 32px ui-sans-serif, system-ui, sans-serif",u.textBaseline="top",u.textAlign="left",u.fillText("FLIGHT STRIPS",24,24);let m=80;m=c(u,"ARRIVALS","#4499ff",_,24,m,f-48),m+=16,c(u,"DEPARTURES","#ff8844",g,24,m,f-48)}function c(u,f,p,_,g,m,y){u.fillStyle=p,u.font="bold 20px ui-sans-serif, system-ui, sans-serif",u.fillText(`${f}  (${_.length})`,g,m),m+=30;const M=60,x=8,R=6;return _.length?(_.slice(0,R).forEach(T=>{u.fillStyle="rgba(28, 36, 50, 0.9)",oc(u,g,m,y,M,8),u.fill(),u.strokeStyle=p,u.lineWidth=2,u.stroke(),u.fillStyle=p,oc(u,g,m,6,M,3),u.fill(),u.fillStyle="#ffffff",u.font="bold 24px ui-monospace, monospace",u.fillText(T.callsign||"----",g+16,m+8),u.fillStyle="#a8c4ff",u.font="16px ui-sans-serif, sans-serif",u.fillText(`${T.type||"?"}  ${T.origin||"?"}→${T.destination||"?"}`,g+16,m+36),u.textAlign="right",u.fillStyle="#e6edf3",u.font="bold 20px ui-sans-serif, sans-serif",u.fillText(`RWY ${DA[T.state]||"—"}`,g+y-14,m+8),u.fillStyle=NA(T.state),u.font="16px ui-sans-serif, sans-serif",u.fillText(String(T.state||"").replace("_"," "),g+y-14,m+36),u.textAlign="left",m+=M+x}),m):(u.fillStyle="#7d8b9e",u.font="italic 18px ui-sans-serif, sans-serif",u.fillText("— none —",g,m+8),m+40)}function h(u){s=u,a.group.visible=u,u&&(r=0)}function d(){i.remove(a.group)}return{setEnabled:h,update:o,dispose:d}}function NA(i){switch(i){case"AIRBORNE_IN":return"#4499ff";case"AIRBORNE_OUT":return"#ff8844";case"CLEARED":return"#33ff77";case"TAXI":return"#ffcc33";case"QUEUED":return"#ff6633";default:return"#9aa4b2"}}function oc(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}const ca=new URLSearchParams(location.search),UA=ca.get("mode")==="sim",Po=ca.get("snapshot")||(UA?null:"okbk_live.json"),Xt=new E0,tr=new jt(70,window.innerWidth/window.innerHeight,.01,100);tr.position.set(0,1.5,.4);const Vt=new sb({antialias:!0,alpha:!0});Vt.setPixelRatio(window.devicePixelRatio);Vt.setSize(window.innerWidth,window.innerHeight);Vt.xr.enabled=!0;Vt.toneMapping=Sh;document.body.appendChild(Vt.domElement);const gh=new B_(16777215,1712176,1);Xt.add(gh);const Lo=new qp(16777215,1.4);Lo.position.set(5,10,5);Xt.add(Lo);function Km(i){i==="night"?(gh.intensity=.35,Lo.intensity=.45,Xt.background=new ke(330260)):(gh.intensity=1,Lo.intensity=1.4,Xt.background=null),localStorage.setItem("fahad_atc_theme",i)}const $m=localStorage.getItem("fahad_atc_theme")||"day";Km($m);let jm=$m;const on=new mt;on.position.set(0,.55,-.7);Xt.add(on);const cu=new st(new yi(1.6,.02,1.6),new On({color:2762784,roughness:.92,metalness:0}));cu.name="tabletop-base";cu.position.y=-.012;on.add(cu);const Do=ca.get("airport")||"osm",Io=await rT();on.add(Io);let No=null;Do==="cyber"&&(No=await tE(),on.add(No),lm(Io,!1),Io.traverse(i=>{(i.userData?.runway||i.userData?.terminal)&&(i.visible=!1)}));const OA=Do==="tiles"||ca.has("gkey"),_h=ca.get("gkey");_h&&localStorage.setItem("fahad_atc_gkey",_h);const ep=_h||localStorage.getItem("fahad_atc_gkey");let Uo=null;if(OA&&ep)try{Uo=jT({parent:on,apiKey:ep,camera:tr,renderer:Vt}),lm(Io,!1),document.getElementById("google-credit")?.style.setProperty("display","block")}catch(i){console.error("[tiles] init failed, falling back to OSM:",i),Uo=null}let ln;if(Po)try{ln=await au.load(`/Fahad_ATC/data/${Po}`,on)}catch(i){console.error("[snapshot] load failed:",i),ln=new kf(on)}else ln=new kf(on);const lc=document.getElementById("status-badge");function hu(){if(!lc)return;const i=ln.snapshot;if(!i){lc.textContent="Source: animated simulator (mock data). Drop ?mode=sim for live FR24 data.";return}const e=i.time_iso?new Date(i.time_iso):null,t=e?Math.round((Date.now()-e.getTime())/1e3):null,n=t==null?"?":t<60?`${t}s ago`:t<3600?`${Math.round(t/60)}m ago`:`${Math.round(t/3600)}h ago`,s=i.counts?.total??i.aircraft?.length??0,r=i.counts?.near_50nm??"-",a=i.counts?.distant??"-";lc.textContent=`${i.source||"snapshot"} · ${n} · ${s} aircraft (near ${r} / distant ${a})`}hu();setInterval(hu,5e3);ln?.refresh&&setInterval(async()=>{await ln.refresh()&&(console.log("[snapshot] refreshed with newer data"),hu())},3e4);const Zm=new Gb,Oo=Vt.xr.getHand(0),Fo=Vt.xr.getHand(1);Oo.add(Zm.createHandModel(Oo,"boxes"));Fo.add(Zm.createHandModel(Fo,"boxes"));Xt.add(Oo);Xt.add(Fo);const uu=Vt.xr.getController(0),du=Vt.xr.getController(1);uu.add(Jm());du.add(Jm());Xt.add(uu);Xt.add(du);function Jm(){const i=new Je().setFromPoints([new E(0,0,0),new E(0,0,-3)]),e=new Mi({color:4890367,transparent:!0,opacity:.45,depthTest:!1}),t=new Rt(i,e);return t.renderOrder=30,t}const ta=iA({scene:Xt,tabletop:on,renderer:Vt,hands:[Oo,Fo],controllers:[uu,du],traffic:ln}),Nn=new Co({name:"combined",width:.8,height:.56,canvasW:1e3,canvasH:720,anchor:new E(0,1.45,-1),faceTarget:new E(0,1.4,0)});Xt.add(Nn.group);let xh=!1;const Qm=new E(0,.85,-.3);ta.registerGrabbable(Nn.group,{surfaces:[Nn.mesh],kind:"panel",minScale:.4,maxScale:3,onGrabStart:()=>{xh=!0},onGrabEnd:()=>{xh=!1,Qm.copy(Nn.group.position).sub(on.position)}});const Zt=new Co({name:"settings-menu",width:.44,height:.5,canvasW:560,canvasH:640,anchor:new E(.7,1.45,-.7),faceTarget:new E(0,1.4,0)});Xt.add(Zt.group);Zt.group.visible=!1;ta.registerGrabbable(Zt.group,{surfaces:[Zt.mesh],kind:"panel",minScale:.5,maxScale:2});const na={conflicts:MA({scene:Xt,tabletop:on,traffic:ln}),emergency:wA({tabletop:on,traffic:ln}),weather:LA({scene:Xt,SpatialPanel:Co,interaction:ta}),strips:IA({scene:Xt,SpatialPanel:Co,interaction:ta,traffic:ln})};for(const i of ou)na[i.id]?.setEnabled(lu(i.id));const Fs={map:Do==="cyber"?"cyber":Do==="tiles"?"tiles":"osm",data:Po==="okbk_demo.json"||Po==="okbk_today.json"?"demo":"live",theme:jm,tab:"general"};let eg=[];function go(){Zt.redraw((i,e,t)=>{eg=_A(i,e,t,{currentMap:Fs.map,currentData:Fs.data,currentTheme:Fs.theme,tab:Fs.tab,features:ou.map(n=>({id:n.id,label:n.label,desc:n.desc,enabled:lu(n.id)}))})})}go();Zt.group.userData.onPinchClick=i=>{if(!i)return!1;const e=i.x*Zt.canvas.width,t=(1-i.y)*Zt.canvas.height;for(const n of eg)if(e>=n.x&&e<=n.x+n.w&&t>=n.y&&t<=n.y+n.h)return FA(n.id),!0;return!1};function FA(i){const[e,t]=i.split(":");if(e==="tab"){Fs.tab=t,go();return}if(e==="feature"){const n=!lu(t);xA(t,n),na[t]?.setEnabled(n),go();return}if(e==="theme"){Fs.theme=t,jm=t,Km(t),go();return}if(e==="map"){const n=new URL(location);t==="osm"?n.searchParams.delete("airport"):n.searchParams.set("airport",t),location.href=n.toString();return}if(e==="data"){const n=new URL(location);t==="live"?n.searchParams.delete("snapshot"):n.searchParams.set("snapshot","okbk_demo.json"),location.href=n.toString();return}}let vh=null;function tg(){const i=performance.now();if(Nn.shouldRedraw(i,500)){const e=ln.aircraft.map(s=>s.userData).filter(Boolean),t=e.filter(s=>s.state==="AIRBORNE_IN").sort((s,r)=>(s.dist_nm??9999)-(r.dist_nm??9999)),n=e.filter(s=>s.state==="AIRBORNE_OUT"||s.state==="CLEARED"||s.state==="QUEUED");Nn.redraw((s,r,a)=>{vh=pA(s,r,a,{inbounds:t,outbounds:n,gearActive:Zt.group.visible,demoTime:ln?.isDemo?ln.demoTime:null})?.gearRegion||null})}}tg();Nn.group.userData.onPinchClick=i=>{if(!i||!vh)return!1;const e=i.x*Nn.canvas.width,t=(1-i.y)*Nn.canvas.height,n=vh;return e>=n.x&&e<=n.x+n.w&&t>=n.y&&t<=n.y+n.h?(Zt.group.visible=!Zt.group.visible,!0):!1};const fu=new Xb(tr,Vt.domElement);fu.target.set(0,.9,-1.2);fu.update();const BA=rb.createButton(Vt,{optionalFeatures:["hand-tracking","local-floor","bounded-floor","hit-test"]});document.getElementById("ar-btn-wrap").appendChild(BA);window.addEventListener("resize",()=>{tr.aspect=window.innerWidth/window.innerHeight,tr.updateProjectionMatrix(),Vt.setSize(window.innerWidth,window.innerHeight)});const kA=new ix;Vt.setAnimationLoop((i,e)=>{const t=Math.min(kA.getDelta(),.05);Vt.xr.isPresenting||fu.update(),ta.update(e),ln.update(t),Uo&&Uo.update(),No?.userData?.update&&No.userData.update(t);for(const n in na)na[n].update(t);xh||Nn.group.position.copy(on.position).add(Qm),zA(),tg(),Vt.render(Xt,tr)});const Dr=new E,tp=new E;function zA(){const i=Nn.group;i.getWorldDirection(Dr),tp.set(0,1,0),Dr.crossVectors(tp,Dr).normalize(),Zt.group.visible||(Zt.group.position.copy(i.position).addScaledVector(Dr,.66),Zt.group.quaternion.copy(i.quaternion));const e=na.weather?.group;e&&e.visible&&(e.position.copy(Zt.group.position).addScaledVector(Dr,.46),e.quaternion.copy(i.quaternion))}
