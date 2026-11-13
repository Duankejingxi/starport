(()=>{var Ph="170";var em=0,Vu=1,nm=2;var Qd=1,Lh=2,ai=3,zi=0,en=1,$e=2,Fi=0,Oi=1,Ze=2,Gu=3,Wu=4,im=5,ls=100,sm=101,rm=102,om=103,am=104,cm=200,lm=201,hm=202,um=203,ol=204,al=205,dm=206,fm=207,pm=208,mm=209,gm=210,xm=211,_m=212,ym=213,vm=214,cl=0,ll=1,hl=2,er=3,ul=4,dl=5,fl=6,pl=7,jd=0,Mm=1,Sm=2,Bi=0,bm=1,Em=2,wm=3,Dh=4,Tm=5,Am=6,Rm=7;var tf=300,nr=301,ir=302,ml=303,gl=304,Oa=306,to=1e3,us=1001,xl=1002,vn=1003,Cm=1004;var Co=1005;var Xn=1006,Ac=1007;var ds=1008;var di=1009,ef=1010,nf=1011,eo=1012,Uh=1013,fs=1014,qn=1015,ro=1016,Nh=1017,Fh=1018,sr=1020,sf=35902,rf=1021,of=1022,Fn=1023,af=1024,cf=1025,Qs=1026,rr=1027,Oh=1028,Bh=1029,lf=1030,zh=1031;var kh=1033,sa=33776,ra=33777,oa=33778,aa=33779,_l=35840,yl=35841,vl=35842,Ml=35843,Sl=36196,bl=37492,El=37496,wl=37808,Tl=37809,Al=37810,Rl=37811,Cl=37812,Il=37813,Pl=37814,Ll=37815,Dl=37816,Ul=37817,Nl=37818,Fl=37819,Ol=37820,Bl=37821,ca=36492,zl=36494,kl=36495,hf=36283,Hl=36284,Vl=36285,Gl=36286;var la=2300,Wl=2301,Rc=2302,Xu=2400,qu=2401,Yu=2402;var Im=3200,Pm=3201;var uf=0,Lm=1,Ui="",Ae="srgb",gr="srgb-linear",Ba="linear",xe="srgb";var Ls=7680;var $u=519,Dm=512,Um=513,Nm=514,df=515,Fm=516,Om=517,Bm=518,zm=519,Xl=35044,Hh=35048;var Zu="300 es",li=2e3,ha=2001,ki=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ju=1234567,Zr=Math.PI/180,or=180/Math.PI;function hi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function We(i,t,e){return Math.max(t,Math.min(e,i))}function Vh(i,t){return(i%t+t)%t}function km(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Hm(i,t,e){return i!==t?(e-i)/(t-i):0}function Jr(i,t,e){return(1-e)*i+e*t}function Vm(i,t,e,n){return Jr(i,t,1-Math.exp(-e*n))}function Gm(i,t=1){return t-Math.abs(Vh(i,t*2)-t)}function Wm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Xm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function qm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ym(i,t){return i+Math.random()*(t-i)}function $m(i){return i*(.5-Math.random())}function Zm(i){i!==void 0&&(Ju=i);let t=Ju+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Jm(i){return i*Zr}function Km(i){return i*or}function Qm(i){return(i&i-1)===0&&i!==0}function jm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function t0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function e0(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),p=o((t-n)/2),d=r((n-t)/2),x=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*p,a*l);break;case"YZY":i.set(c*p,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*p,a*h,a*l);break;case"XZX":i.set(a*h,c*x,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*x,a*l);break;case"ZYZ":i.set(c*x,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Je={DEG2RAD:Zr,RAD2DEG:or,generateUUID:hi,clamp:We,euclideanModulo:Vh,mapLinear:km,inverseLerp:Hm,lerp:Jr,damp:Vm,pingpong:Gm,smoothstep:Wm,smootherstep:Xm,randInt:qm,randFloat:Ym,randFloatSpread:$m,seededRandom:Zm,degToRad:Jm,radToDeg:Km,isPowerOfTwo:Qm,ceilPowerOfTwo:jm,floorPowerOfTwo:t0,setQuaternionFromProperEuler:e0,normalize:ge,denormalize:Nn},dt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],p=n[2],d=n[5],x=n[8],_=s[0],g=s[3],f=s[6],M=s[1],E=s[4],y=s[7],L=s[2],R=s[5],C=s[8];return r[0]=o*_+a*M+c*L,r[3]=o*g+a*E+c*R,r[6]=o*f+a*y+c*C,r[1]=l*_+h*M+u*L,r[4]=l*g+h*E+u*R,r[7]=l*f+h*y+u*C,r[2]=p*_+d*M+x*L,r[5]=p*g+d*E+x*R,r[8]=p*f+d*y+x*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,p=a*c-h*r,d=l*r-o*c,x=e*u+n*p+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=p*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Cc.makeScale(t,e)),this}rotate(t){return this.premultiply(Cc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Cc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Cc=new Vt;function ff(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ua(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function n0(){let i=ua("canvas");return i.style.display="block",i}var Ku={};function Yr(i){i in Ku||(Ku[i]=!0,console.warn(i))}function i0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function s0(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function r0(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ie={enabled:!0,workingColorSpace:gr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===xe&&(i.r=ui(i.r),i.g=ui(i.g),i.b=ui(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===xe&&(i.r=js(i.r),i.g=js(i.g),i.b=js(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ui?Ba:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function js(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Qu=[.64,.33,.3,.6,.15,.06],ju=[.2126,.7152,.0722],td=[.3127,.329],ed=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nd=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[gr]:{primaries:Qu,whitePoint:td,transfer:Ba,toXYZ:ed,fromXYZ:nd,luminanceCoefficients:ju,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:Qu,whitePoint:td,transfer:xe,toXYZ:ed,fromXYZ:nd,luminanceCoefficients:ju,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}});var Ds,ql=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ds===void 0&&(Ds=ua("canvas")),Ds.width=t.width,Ds.height=t.height;let n=Ds.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ds}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ua("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ui(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ui(e[n]/255)*255):e[n]=ui(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},o0=0,da=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=hi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ic(s[o].image)):r.push(Ic(s[o]))}else r=Ic(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ic(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ql.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var a0=0,fn=class i extends ki{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=us,s=us,r=Xn,o=ds,a=Fn,c=di,l=i.DEFAULT_ANISOTROPY,h=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=hi(),this.name="",this.source=new da(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case to:t.x=t.x-Math.floor(t.x);break;case us:t.x=t.x<0?0:1;break;case xl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case to:t.y=t.y-Math.floor(t.y);break;case us:t.y=t.y<0?0:1;break;case xl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=tf;fn.DEFAULT_ANISOTROPY=1;var De=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],p=c[1],d=c[5],x=c[9],_=c[2],g=c[6],f=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-_)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+_)<.1&&Math.abs(x+g)<.1&&Math.abs(l+d+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(l+1)/2,y=(d+1)/2,L=(f+1)/2,R=(h+p)/4,C=(u+_)/4,P=(x+g)/4;return E>y&&E>L?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=R/n,r=C/n):y>L?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=R/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=C/r,s=P/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-x)*(g-x)+(u-_)*(u-_)+(p-h)*(p-h));return Math.abs(M)<.001&&(M=1),this.x=(g-x)/M,this.y=(u-_)/M,this.z=(p-h)/M,this.w=Math.acos((l+d+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yl=class extends ki{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new fn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new da(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},fi=class extends Yl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},fa=class extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var $l=class extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],p=r[o+0],d=r[o+1],x=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=p,t[e+1]=d,t[e+2]=x,t[e+3]=_;return}if(u!==_||c!==p||l!==d||h!==x){let g=1-a,f=c*p+l*d+h*x+u*_,M=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){let L=Math.sqrt(E),R=Math.atan2(L,f*M);g=Math.sin(g*R)/L,a=Math.sin(a*R)/L}let y=a*M;if(c=c*g+p*y,l=l*g+d*y,h=h*g+x*y,u=u*g+_*y,g===1-a){let L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],p=r[o+1],d=r[o+2],x=r[o+3];return t[e]=a*x+h*u+c*d-l*p,t[e+1]=c*x+h*p+l*u-a*d,t[e+2]=l*x+h*d+a*p-c*u,t[e+3]=h*x-a*u-c*p-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),p=c(n/2),d=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=p*h*u+l*d*x,this._y=l*d*u-p*h*x,this._z=l*h*x+p*d*u,this._w=l*h*u-p*d*x;break;case"YXZ":this._x=p*h*u+l*d*x,this._y=l*d*u-p*h*x,this._z=l*h*x-p*d*u,this._w=l*h*u+p*d*x;break;case"ZXY":this._x=p*h*u-l*d*x,this._y=l*d*u+p*h*x,this._z=l*h*x+p*d*u,this._w=l*h*u-p*d*x;break;case"ZYX":this._x=p*h*u-l*d*x,this._y=l*d*u+p*h*x,this._z=l*h*x-p*d*u,this._w=l*h*u+p*d*x;break;case"YZX":this._x=p*h*u+l*d*x,this._y=l*d*u+p*h*x,this._z=l*h*x-p*d*u,this._w=l*h*u-p*d*x;break;case"XZY":this._x=p*h*u-l*d*x,this._y=l*d*u-p*h*x,this._z=l*h*x+p*d*u,this._w=l*h*u+p*d*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],p=n+a+u;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(id.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(id.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Pc.copy(this).projectOnVector(t),this.sub(Pc)}reflect(t){return this.sub(Pc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pc=new A,id=new nn,pi=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Io.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Io.copy(n.boundingBox)),Io.applyMatrix4(t.matrixWorld),this.union(Io)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Br),Po.subVectors(this.max,Br),Us.subVectors(t.a,Br),Ns.subVectors(t.b,Br),Fs.subVectors(t.c,Br),Ri.subVectors(Ns,Us),Ci.subVectors(Fs,Ns),ns.subVectors(Us,Fs);let e=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-ns.z,ns.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,ns.z,0,-ns.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-ns.y,ns.x,0];return!Lc(e,Us,Ns,Fs,Po)||(e=[1,0,0,0,1,0,0,0,1],!Lc(e,Us,Ns,Fs,Po))?!1:(Lo.crossVectors(Ri,Ci),e=[Lo.x,Lo.y,Lo.z],Lc(e,Us,Ns,Fs,Po))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ni=[new A,new A,new A,new A,new A,new A,new A,new A],Ln=new A,Io=new pi,Us=new A,Ns=new A,Fs=new A,Ri=new A,Ci=new A,ns=new A,Br=new A,Po=new A,Lo=new A,is=new A;function Lc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){is.fromArray(i,r);let a=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),c=t.dot(is),l=e.dot(is),h=n.dot(is);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var c0=new pi,zr=new A,Dc=new A,Hi=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):c0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zr.subVectors(t,this.center);let e=zr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(zr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zr.copy(t.center).add(Dc)),this.expandByPoint(zr.copy(t.center).sub(Dc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ii=new A,Uc=new A,Do=new A,Ii=new A,Nc=new A,Uo=new A,Fc=new A,pa=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Uc.copy(t).add(e).multiplyScalar(.5),Do.copy(e).sub(t).normalize(),Ii.copy(this.origin).sub(Uc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Do),a=Ii.dot(this.direction),c=-Ii.dot(Do),l=Ii.lengthSq(),h=Math.abs(1-o*o),u,p,d,x;if(h>0)if(u=o*c-a,p=o*a-c,x=r*h,u>=0)if(p>=-x)if(p<=x){let _=1/h;u*=_,p*=_,d=u*(u+o*p+2*a)+p*(o*u+p+2*c)+l}else p=r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*c)+l;else p=-r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*c)+l;else p<=-x?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+p*(p+2*c)+l):p<=x?(u=0,p=Math.min(Math.max(-r,-c),r),d=p*(p+2*c)+l):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+p*(p+2*c)+l);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Uc).addScaledVector(Do,p),d}intersectSphere(t,e){ii.subVectors(t.center,this.origin);let n=ii.dot(this.direction),s=ii.dot(ii)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,s=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,s=(t.min.x-p.x)*l),h>=0?(r=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-p.z)*u,c=(t.max.z-p.z)*u):(a=(t.max.z-p.z)*u,c=(t.min.z-p.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,s,r){Nc.subVectors(e,t),Uo.subVectors(n,t),Fc.crossVectors(Nc,Uo);let o=this.direction.dot(Fc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,t);let c=a*this.direction.dot(Uo.crossVectors(Ii,Uo));if(c<0)return null;let l=a*this.direction.dot(Nc.cross(Ii));if(l<0||c+l>o)return null;let h=-a*Ii.dot(Fc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},de=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,p,d,x,_,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,p,d,x,_,g)}set(t,e,n,s,r,o,a,c,l,h,u,p,d,x,_,g){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=p,f[3]=d,f[7]=x,f[11]=_,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Os.setFromMatrixColumn(t,0).length(),r=1/Os.setFromMatrixColumn(t,1).length(),o=1/Os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let p=o*h,d=o*u,x=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+x*l,e[5]=p-_*l,e[9]=-a*c,e[2]=_-p*l,e[6]=x+d*l,e[10]=o*c}else if(t.order==="YXZ"){let p=c*h,d=c*u,x=l*h,_=l*u;e[0]=p+_*a,e[4]=x*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-x,e[6]=_+p*a,e[10]=o*c}else if(t.order==="ZXY"){let p=c*h,d=c*u,x=l*h,_=l*u;e[0]=p-_*a,e[4]=-o*u,e[8]=x+d*a,e[1]=d+x*a,e[5]=o*h,e[9]=_-p*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let p=o*h,d=o*u,x=a*h,_=a*u;e[0]=c*h,e[4]=x*l-d,e[8]=p*l+_,e[1]=c*u,e[5]=_*l+p,e[9]=d*l-x,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let p=o*c,d=o*l,x=a*c,_=a*l;e[0]=c*h,e[4]=_-p*u,e[8]=x*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+x,e[10]=p-_*u}else if(t.order==="XZY"){let p=o*c,d=o*l,x=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=p*u+_,e[5]=o*h,e[9]=d*u-x,e[2]=x*u-d,e[6]=a*h,e[10]=_*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(l0,t,h0)}lookAt(t,e,n){let s=this.elements;return _n.subVectors(t,e),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Pi.crossVectors(n,_n),Pi.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Pi.crossVectors(n,_n)),Pi.normalize(),No.crossVectors(_n,Pi),s[0]=Pi.x,s[4]=No.x,s[8]=_n.x,s[1]=Pi.y,s[5]=No.y,s[9]=_n.y,s[2]=Pi.z,s[6]=No.z,s[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],p=n[9],d=n[13],x=n[2],_=n[6],g=n[10],f=n[14],M=n[3],E=n[7],y=n[11],L=n[15],R=s[0],C=s[4],P=s[8],w=s[12],S=s[1],I=s[5],k=s[9],B=s[13],G=s[2],Q=s[6],Y=s[10],nt=s[14],q=s[3],ot=s[7],pt=s[11],At=s[15];return r[0]=o*R+a*S+c*G+l*q,r[4]=o*C+a*I+c*Q+l*ot,r[8]=o*P+a*k+c*Y+l*pt,r[12]=o*w+a*B+c*nt+l*At,r[1]=h*R+u*S+p*G+d*q,r[5]=h*C+u*I+p*Q+d*ot,r[9]=h*P+u*k+p*Y+d*pt,r[13]=h*w+u*B+p*nt+d*At,r[2]=x*R+_*S+g*G+f*q,r[6]=x*C+_*I+g*Q+f*ot,r[10]=x*P+_*k+g*Y+f*pt,r[14]=x*w+_*B+g*nt+f*At,r[3]=M*R+E*S+y*G+L*q,r[7]=M*C+E*I+y*Q+L*ot,r[11]=M*P+E*k+y*Y+L*pt,r[15]=M*w+E*B+y*nt+L*At,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],p=t[10],d=t[14],x=t[3],_=t[7],g=t[11],f=t[15];return x*(+r*c*u-s*l*u-r*a*p+n*l*p+s*a*d-n*c*d)+_*(+e*c*d-e*l*p+r*o*p-s*o*d+s*l*h-r*c*h)+g*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+f*(-s*a*h-e*c*u+e*a*p+s*o*u-n*o*p+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],p=t[10],d=t[11],x=t[12],_=t[13],g=t[14],f=t[15],M=u*g*l-_*p*l+_*c*d-a*g*d-u*c*f+a*p*f,E=x*p*l-h*g*l-x*c*d+o*g*d+h*c*f-o*p*f,y=h*_*l-x*u*l+x*a*d-o*_*d-h*a*f+o*u*f,L=x*u*c-h*_*c-x*a*p+o*_*p+h*a*g-o*u*g,R=e*M+n*E+s*y+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/R;return t[0]=M*C,t[1]=(_*p*r-u*g*r-_*s*d+n*g*d+u*s*f-n*p*f)*C,t[2]=(a*g*r-_*c*r+_*s*l-n*g*l-a*s*f+n*c*f)*C,t[3]=(u*c*r-a*p*r-u*s*l+n*p*l+a*s*d-n*c*d)*C,t[4]=E*C,t[5]=(h*g*r-x*p*r+x*s*d-e*g*d-h*s*f+e*p*f)*C,t[6]=(x*c*r-o*g*r-x*s*l+e*g*l+o*s*f-e*c*f)*C,t[7]=(o*p*r-h*c*r+h*s*l-e*p*l-o*s*d+e*c*d)*C,t[8]=y*C,t[9]=(x*u*r-h*_*r-x*n*d+e*_*d+h*n*f-e*u*f)*C,t[10]=(o*_*r-x*a*r+x*n*l-e*_*l-o*n*f+e*a*f)*C,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*C,t[12]=L*C,t[13]=(h*_*s-x*u*s+x*n*p-e*_*p-h*n*g+e*u*g)*C,t[14]=(x*a*s-o*_*s-x*n*c+e*_*c+o*n*g-e*a*g)*C,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*p+e*a*p)*C,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,p=r*l,d=r*h,x=r*u,_=o*h,g=o*u,f=a*u,M=c*l,E=c*h,y=c*u,L=n.x,R=n.y,C=n.z;return s[0]=(1-(_+f))*L,s[1]=(d+y)*L,s[2]=(x-E)*L,s[3]=0,s[4]=(d-y)*R,s[5]=(1-(p+f))*R,s[6]=(g+M)*R,s[7]=0,s[8]=(x+E)*C,s[9]=(g-M)*C,s[10]=(1-(p+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Os.set(s[0],s[1],s[2]).length(),o=Os.set(s[4],s[5],s[6]).length(),a=Os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Dn.copy(this);let l=1/r,h=1/o,u=1/a;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,e.setFromRotationMatrix(Dn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=li){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s),d,x;if(a===li)d=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ha)d=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=li){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),p=(e+t)*l,d=(n+s)*h,x,_;if(a===li)x=(o+r)*u,_=-2*u;else if(a===ha)x=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Os=new A,Dn=new de,l0=new A(0,0,0),h0=new A(1,1,1),Pi=new A,No=new A,_n=new A,sd=new de,rd=new nn,pn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],p=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rd.setFromEuler(this),this.setFromQuaternion(rd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pn.DEFAULT_ORDER="XYZ";var ma=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},u0=0,od=new A,Bs=new nn,si=new de,Fo=new A,kr=new A,d0=new A,f0=new nn,ad=new A(1,0,0),cd=new A(0,1,0),ld=new A(0,0,1),hd={type:"added"},p0={type:"removed"},zs={type:"childadded",child:null},Oc={type:"childremoved",child:null},ke=class i extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new A,e=new pn,n=new nn,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new Vt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.premultiply(Bs),this}rotateX(t){return this.rotateOnAxis(ad,t)}rotateY(t){return this.rotateOnAxis(cd,t)}rotateZ(t){return this.rotateOnAxis(ld,t)}translateOnAxis(t,e){return od.copy(t).applyQuaternion(this.quaternion),this.position.add(od.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ad,t)}translateY(t){return this.translateOnAxis(cd,t)}translateZ(t){return this.translateOnAxis(ld,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fo.copy(t):Fo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(kr,Fo,this.up):si.lookAt(Fo,kr,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),Bs.setFromRotationMatrix(si),this.quaternion.premultiply(Bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hd),zs.child=t,this.dispatchEvent(zs),zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(p0),Oc.child=t,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hd),zs.child=t,this.dispatchEvent(zs),zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,t,d0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,f0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),p=o(t.skeletons),d=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ke.DEFAULT_UP=new A(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Un=new A,ri=new A,Bc=new A,oi=new A,ks=new A,Hs=new A,ud=new A,zc=new A,kc=new A,Hc=new A,Vc=new De,Gc=new De,Wc=new De,Ni=class i{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Un.subVectors(t,e),s.cross(Un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Un.subVectors(s,e),ri.subVectors(n,e),Bc.subVectors(t,e);let o=Un.dot(Un),a=Un.dot(ri),c=Un.dot(Bc),l=ri.dot(ri),h=ri.dot(Bc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let p=1/u,d=(l*c-a*h)*p,x=(o*h-a*c)*p;return r.set(1-d-x,x,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,oi.x),c.addScaledVector(o,oi.y),c.addScaledVector(a,oi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Vc.setScalar(0),Gc.setScalar(0),Wc.setScalar(0),Vc.fromBufferAttribute(t,e),Gc.fromBufferAttribute(t,n),Wc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Vc,r.x),o.addScaledVector(Gc,r.y),o.addScaledVector(Wc,r.z),o}static isFrontFacing(t,e,n,s){return Un.subVectors(n,e),ri.subVectors(t,e),Un.cross(ri).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Un.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Un.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ks.subVectors(s,n),Hs.subVectors(r,n),zc.subVectors(t,n);let c=ks.dot(zc),l=Hs.dot(zc);if(c<=0&&l<=0)return e.copy(n);kc.subVectors(t,s);let h=ks.dot(kc),u=Hs.dot(kc);if(h>=0&&u<=h)return e.copy(s);let p=c*u-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ks,o);Hc.subVectors(t,r);let d=ks.dot(Hc),x=Hs.dot(Hc);if(x>=0&&d<=x)return e.copy(r);let _=d*l-c*x;if(_<=0&&l>=0&&x<=0)return a=l/(l-x),e.copy(n).addScaledVector(Hs,a);let g=h*x-d*u;if(g<=0&&u-h>=0&&d-x>=0)return ud.subVectors(r,s),a=(u-h)/(u-h+(d-x)),e.copy(s).addScaledVector(ud,a);let f=1/(g+_+p);return o=_*f,a=p*f,e.copy(n).addScaledVector(ks,o).addScaledVector(Hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},pf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Oo={h:0,s:0,l:0};function Xc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Rt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=Vh(t,1),e=We(e,0,1),n=We(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Xc(o,r,t+1/3),this.g=Xc(o,r,t),this.b=Xc(o,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=Ae){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){let n=pf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=js(t.r),this.g=js(t.g),this.b=js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return ie.fromWorkingColorSpace(tn.copy(this),t),Math.round(We(tn.r*255,0,255))*65536+Math.round(We(tn.g*255,0,255))*256+Math.round(We(tn.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(tn.copy(this),e);let n=tn.r,s=tn.g,r=tn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=Ae){ie.fromWorkingColorSpace(tn.copy(this),t);let e=tn.r,n=tn.g,s=tn.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Li),this.setHSL(Li.h+t,Li.s+e,Li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Li),t.getHSL(Oo);let n=Jr(Li.h,Oo.h,e),s=Jr(Li.s,Oo.s,e),r=Jr(Li.l,Oo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new Rt;Rt.NAMES=pf;var m0=0,mi=class extends ki{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=hi(),this.name="",this.blending=Oi,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ol,this.blendDst=al,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$u,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(n.blending=this.blending),this.side!==zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ol&&(n.blendSrc=this.blendSrc),this.blendDst!==al&&(n.blendDst=this.blendDst),this.blendEquation!==ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==er&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$u&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ye=class extends mi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=jd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Be=new A,Bo=new dt,Fe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xl,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Bo.fromBufferAttribute(this,e),Bo.applyMatrix3(t),this.setXY(e,Bo.x,Bo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xl&&(t.usage=this.usage),t}};var ga=class extends Fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var xa=class extends Fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var re=class extends Fe{constructor(t,e,n){super(new Float32Array(t),e,n)}},g0=0,En=new de,qc=new ke,Vs=new A,yn=new pi,Hr=new pi,Ge=new A,Ie=class i extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ff(t)?xa:ga)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return qc.lookAt(t),qc.updateMatrix(),this.applyMatrix4(qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new re(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(yn.min,Hr.min),yn.expandByPoint(Ge),Ge.addVectors(yn.max,Hr.max),yn.expandByPoint(Ge)):(yn.expandByPoint(Hr.min),yn.expandByPoint(Hr.max))}yn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ge));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ge.fromBufferAttribute(a,l),c&&(Vs.fromBufferAttribute(t,l),Ge.add(Vs)),s=Math.max(s,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new A,c[P]=new A;let l=new A,h=new A,u=new A,p=new dt,d=new dt,x=new dt,_=new A,g=new A;function f(P,w,S){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,S),p.fromBufferAttribute(r,P),d.fromBufferAttribute(r,w),x.fromBufferAttribute(r,S),h.sub(l),u.sub(l),d.sub(p),x.sub(p);let I=1/(d.x*x.y-x.x*d.y);isFinite(I)&&(_.copy(h).multiplyScalar(x.y).addScaledVector(u,-d.y).multiplyScalar(I),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(I),a[P].add(_),a[w].add(_),a[S].add(_),c[P].add(g),c[w].add(g),c[S].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,w=M.length;P<w;++P){let S=M[P],I=S.start,k=S.count;for(let B=I,G=I+k;B<G;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let E=new A,y=new A,L=new A,R=new A;function C(P){L.fromBufferAttribute(s,P),R.copy(L);let w=a[P];E.copy(w),E.sub(L.multiplyScalar(L.dot(w))).normalize(),y.crossVectors(R,w);let I=y.dot(c[P])<0?-1:1;o.setXYZW(P,E.x,E.y,E.z,I)}for(let P=0,w=M.length;P<w;++P){let S=M[P],I=S.start,k=S.count;for(let B=I,G=I+k;B<G;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);let s=new A,r=new A,o=new A,a=new A,c=new A,l=new A,h=new A,u=new A;if(t)for(let p=0,d=t.count;p<d;p+=3){let x=t.getX(p+0),_=t.getX(p+1),g=t.getX(p+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let p=0,d=e.count;p<d;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,p=new l.constructor(c.length*h),d=0,x=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let f=0;f<h;f++)p[x++]=l[d++]}return new Fe(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let p=l[h],d=t(p,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,p=l.length;u<p;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let p=0,d=u.length;p<d;p++)h.push(u[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},dd=new de,ss=new pa,zo=new Hi,fd=new A,ko=new A,Ho=new A,Vo=new A,Yc=new A,Go=new A,pd=new A,Wo=new A,Ft=class extends ke{constructor(t=new Ie,e=new ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Go.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Yc.fromBufferAttribute(u,t),o?Go.addScaledVector(Yc,h):Go.addScaledVector(Yc.sub(e),h))}e.add(Go)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(r),ss.copy(t.ray).recast(t.near),!(zo.containsPoint(ss.origin)===!1&&(ss.intersectSphere(zo,fd)===null||ss.origin.distanceToSquared(fd)>(t.far-t.near)**2))&&(dd.copy(r).invert(),ss.copy(t.ray).applyMatrix4(dd),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ss)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=p.length;x<_;x++){let g=p[x],f=o[g.materialIndex],M=Math.max(g.start,d.start),E=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=M,L=E;y<L;y+=3){let R=a.getX(y),C=a.getX(y+1),P=a.getX(y+2);s=Xo(this,f,t,n,l,h,u,R,C,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=x,f=_;g<f;g+=3){let M=a.getX(g),E=a.getX(g+1),y=a.getX(g+2);s=Xo(this,o,t,n,l,h,u,M,E,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,_=p.length;x<_;x++){let g=p[x],f=o[g.materialIndex],M=Math.max(g.start,d.start),E=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let y=M,L=E;y<L;y+=3){let R=y,C=y+1,P=y+2;s=Xo(this,f,t,n,l,h,u,R,C,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let g=x,f=_;g<f;g+=3){let M=g,E=g+1,y=g+2;s=Xo(this,o,t,n,l,h,u,M,E,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function x0(i,t,e,n,s,r,o,a){let c;if(t.side===en?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===zi,a),c===null)return null;Wo.copy(a),Wo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Wo);return l<e.near||l>e.far?null:{distance:l,point:Wo.clone(),object:i}}function Xo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ko),i.getVertexPosition(c,Ho),i.getVertexPosition(l,Vo);let h=x0(i,t,e,n,ko,Ho,Vo,pd);if(h){let u=new A;Ni.getBarycoord(pd,ko,Ho,Vo,u),s&&(h.uv=Ni.getInterpolatedAttribute(s,a,c,l,u,new dt)),r&&(h.uv1=Ni.getInterpolatedAttribute(r,a,c,l,u,new dt)),o&&(h.normal=Ni.getInterpolatedAttribute(o,a,c,l,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a,b:c,c:l,normal:new A,materialIndex:0};Ni.getNormal(ko,Ho,Vo,p.normal),h.face=p,h.barycoord=u}return h}var Oe=class i extends Ie{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],p=0,d=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function x(_,g,f,M,E,y,L,R,C,P,w){let S=y/C,I=L/P,k=y/2,B=L/2,G=R/2,Q=C+1,Y=P+1,nt=0,q=0,ot=new A;for(let pt=0;pt<Y;pt++){let At=pt*I-B;for(let $t=0;$t<Q;$t++){let _e=$t*S-k;ot[_]=_e*M,ot[g]=At*E,ot[f]=G,l.push(ot.x,ot.y,ot.z),ot[_]=0,ot[g]=0,ot[f]=R>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push($t/C),u.push(1-pt/P),nt+=1}}for(let pt=0;pt<P;pt++)for(let At=0;At<C;At++){let $t=p+At+Q*pt,_e=p+At+Q*(pt+1),Z=p+(At+1)+Q*(pt+1),it=p+(At+1)+Q*pt;c.push($t,_e,it),c.push(_e,Z,it),q+=6}a.addGroup(d,q,w),d+=q,p+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ar(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function an(i){let t={};for(let e=0;e<i.length;e++){let n=ar(i[e]);for(let s in n)t[s]=n[s]}return t}function _0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function mf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var y0={clone:ar,merge:an},v0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,M0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends mi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=v0,this.fragmentShader=M0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ar(t.uniforms),this.uniformsGroups=_0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},_a=class extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Di=new A,md=new dt,gd=new dt,Xe=class extends _a{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=or*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return or*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Di.x,Di.y).multiplyScalar(-t/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-t/Di.z)}getViewSize(t,e){return this.getViewBounds(t,md,gd),e.subVectors(gd,md)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Zr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Gs=-90,Ws=1,Zl=class extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xe(Gs,Ws,t,e);s.layers=this.layers,this.add(s);let r=new Xe(Gs,Ws,t,e);r.layers=this.layers,this.add(r);let o=new Xe(Gs,Ws,t,e);o.layers=this.layers,this.add(o);let a=new Xe(Gs,Ws,t,e);a.layers=this.layers,this.add(a);let c=new Xe(Gs,Ws,t,e);c.layers=this.layers,this.add(c);let l=new Xe(Gs,Ws,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===li)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,p,d),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},ya=class extends fn{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:nr,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Jl=class extends fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ya(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Oe(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Fi});r.uniforms.tEquirect.value=e;let o=new Ft(s,r),a=e.minFilter;return e.minFilter===ds&&(e.minFilter=Xn),new Zl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},$c=new A,S0=new A,b0=new Vt,ci=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=$c.subVectors(n,e).cross(S0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta($c),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||b0.getNormalMatrix(t),s=this.coplanarPoint($c).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},rs=new Hi,qo=new A,no=class{constructor(t=new ci,e=new ci,n=new ci,s=new ci,r=new ci,o=new ci){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=li){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],p=s[7],d=s[8],x=s[9],_=s[10],g=s[11],f=s[12],M=s[13],E=s[14],y=s[15];if(n[0].setComponents(c-r,p-l,g-d,y-f).normalize(),n[1].setComponents(c+r,p+l,g+d,y+f).normalize(),n[2].setComponents(c+o,p+h,g+x,y+M).normalize(),n[3].setComponents(c-o,p-h,g-x,y-M).normalize(),n[4].setComponents(c-a,p-u,g-_,y-E).normalize(),e===li)n[5].setComponents(c+a,p+u,g+_,y+E).normalize();else if(e===ha)n[5].setComponents(a,u,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(qo.x=s.normal.x>0?t.max.x:t.min.x,qo.y=s.normal.y>0?t.max.y:t.min.y,qo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function gf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function E0(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,x)=>d.start-x.start);let p=0;for(let d=1;d<u.length;d++){let x=u[p],_=u[d];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++p,u[p]=_)}u.length=p+1;for(let d=0,x=u.length;d<x;d++){let _=u[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Yn=class i extends Ie{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,p=e/c,d=[],x=[],_=[],g=[];for(let f=0;f<h;f++){let M=f*p-o;for(let E=0;E<l;E++){let y=E*u-r;x.push(y,-M,0),_.push(0,0,1),g.push(E/a),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<a;M++){let E=M+l*f,y=M+l*(f+1),L=M+1+l*(f+1),R=M+1+l*f;d.push(E,y,R),d.push(y,L,R)}this.setIndex(d),this.setAttribute("position",new re(x,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},w0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,T0=`#ifdef USE_ALPHAHASH
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
#endif`,A0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,I0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,P0=`#ifdef USE_AOMAP
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
#endif`,L0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D0=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,U0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,N0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,F0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,B0=`#ifdef USE_IRIDESCENCE
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
#endif`,z0=`#ifdef USE_BUMPMAP
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
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$0=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Z0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,J0=`vec3 transformedNormal = objectNormal;
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
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ng=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ig=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rg=`#ifdef USE_ENVMAP
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
#endif`,og=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ag=`#ifdef USE_ENVMAP
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
#endif`,cg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ug=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dg=`#ifdef USE_GRADIENTMAP
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
}`,fg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gg=`uniform bool receiveShadow;
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
#endif`,xg=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,_g=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,bg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Eg=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,Tg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ag=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ig=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ug=`#if defined( USE_POINTS_UV )
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
#endif`,Ng=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Og=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kg=`#ifdef USE_MORPHTARGETS
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
#endif`,Hg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yg=`#ifdef USE_NORMALMAP
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
#endif`,$g=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ix=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ox=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ax=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,lx=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,hx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ux=`#ifdef USE_SKINNING
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
#endif`,dx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fx=`#ifdef USE_SKINNING
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
#endif`,px=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_x=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yx=`#ifdef USE_TRANSMISSION
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
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wx=`uniform sampler2D t2D;
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
}`,Tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ax=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`#include <common>
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
}`,Px=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Lx=`#define DISTANCE
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
}`,Dx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`uniform float scale;
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
}`,Ox=`uniform vec3 diffuse;
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
}`,Bx=`#include <common>
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
}`,zx=`uniform vec3 diffuse;
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
}`,kx=`#define LAMBERT
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
}`,Hx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Vx=`#define MATCAP
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
}`,Gx=`#define MATCAP
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
}`,Wx=`#define NORMAL
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
}`,Xx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qx=`#define PHONG
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
}`,Yx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,$x=`#define STANDARD
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
}`,Zx=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Jx=`#define TOON
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
}`,Kx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Qx=`uniform float size;
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
}`,jx=`uniform vec3 diffuse;
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
}`,t_=`#include <common>
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
}`,e_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,n_=`uniform float rotation;
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
}`,i_=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:w0,alphahash_pars_fragment:T0,alphamap_fragment:A0,alphamap_pars_fragment:R0,alphatest_fragment:C0,alphatest_pars_fragment:I0,aomap_fragment:P0,aomap_pars_fragment:L0,batching_pars_vertex:D0,batching_vertex:U0,begin_vertex:N0,beginnormal_vertex:F0,bsdfs:O0,iridescence_fragment:B0,bumpmap_pars_fragment:z0,clipping_planes_fragment:k0,clipping_planes_pars_fragment:H0,clipping_planes_pars_vertex:V0,clipping_planes_vertex:G0,color_fragment:W0,color_pars_fragment:X0,color_pars_vertex:q0,color_vertex:Y0,common:$0,cube_uv_reflection_fragment:Z0,defaultnormal_vertex:J0,displacementmap_pars_vertex:K0,displacementmap_vertex:Q0,emissivemap_fragment:j0,emissivemap_pars_fragment:tg,colorspace_fragment:eg,colorspace_pars_fragment:ng,envmap_fragment:ig,envmap_common_pars_fragment:sg,envmap_pars_fragment:rg,envmap_pars_vertex:og,envmap_physical_pars_fragment:xg,envmap_vertex:ag,fog_vertex:cg,fog_pars_vertex:lg,fog_fragment:hg,fog_pars_fragment:ug,gradientmap_pars_fragment:dg,lightmap_pars_fragment:fg,lights_lambert_fragment:pg,lights_lambert_pars_fragment:mg,lights_pars_begin:gg,lights_toon_fragment:_g,lights_toon_pars_fragment:yg,lights_phong_fragment:vg,lights_phong_pars_fragment:Mg,lights_physical_fragment:Sg,lights_physical_pars_fragment:bg,lights_fragment_begin:Eg,lights_fragment_maps:wg,lights_fragment_end:Tg,logdepthbuf_fragment:Ag,logdepthbuf_pars_fragment:Rg,logdepthbuf_pars_vertex:Cg,logdepthbuf_vertex:Ig,map_fragment:Pg,map_pars_fragment:Lg,map_particle_fragment:Dg,map_particle_pars_fragment:Ug,metalnessmap_fragment:Ng,metalnessmap_pars_fragment:Fg,morphinstance_vertex:Og,morphcolor_vertex:Bg,morphnormal_vertex:zg,morphtarget_pars_vertex:kg,morphtarget_vertex:Hg,normal_fragment_begin:Vg,normal_fragment_maps:Gg,normal_pars_fragment:Wg,normal_pars_vertex:Xg,normal_vertex:qg,normalmap_pars_fragment:Yg,clearcoat_normal_fragment_begin:$g,clearcoat_normal_fragment_maps:Zg,clearcoat_pars_fragment:Jg,iridescence_pars_fragment:Kg,opaque_fragment:Qg,packing:jg,premultiplied_alpha_fragment:tx,project_vertex:ex,dithering_fragment:nx,dithering_pars_fragment:ix,roughnessmap_fragment:sx,roughnessmap_pars_fragment:rx,shadowmap_pars_fragment:ox,shadowmap_pars_vertex:ax,shadowmap_vertex:cx,shadowmask_pars_fragment:lx,skinbase_vertex:hx,skinning_pars_vertex:ux,skinning_vertex:dx,skinnormal_vertex:fx,specularmap_fragment:px,specularmap_pars_fragment:mx,tonemapping_fragment:gx,tonemapping_pars_fragment:xx,transmission_fragment:_x,transmission_pars_fragment:yx,uv_pars_fragment:vx,uv_pars_vertex:Mx,uv_vertex:Sx,worldpos_vertex:bx,background_vert:Ex,background_frag:wx,backgroundCube_vert:Tx,backgroundCube_frag:Ax,cube_vert:Rx,cube_frag:Cx,depth_vert:Ix,depth_frag:Px,distanceRGBA_vert:Lx,distanceRGBA_frag:Dx,equirect_vert:Ux,equirect_frag:Nx,linedashed_vert:Fx,linedashed_frag:Ox,meshbasic_vert:Bx,meshbasic_frag:zx,meshlambert_vert:kx,meshlambert_frag:Hx,meshmatcap_vert:Vx,meshmatcap_frag:Gx,meshnormal_vert:Wx,meshnormal_frag:Xx,meshphong_vert:qx,meshphong_frag:Yx,meshphysical_vert:$x,meshphysical_frag:Zx,meshtoon_vert:Jx,meshtoon_frag:Kx,points_vert:Qx,points_frag:jx,shadow_vert:t_,shadow_frag:e_,sprite_vert:n_,sprite_frag:i_},st={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Wn={basic:{uniforms:an([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:an([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Rt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:an([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:an([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:an([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Rt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:an([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:an([st.points,st.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:an([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:an([st.common,st.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:an([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:an([st.sprite,st.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:an([st.common,st.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:an([st.lights,st.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Wn.physical={uniforms:an([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var Yo={r:0,b:0,g:0},os=new pn,s_=new de;function r_(i,t,e,n,s,r,o){let a=new Rt(0),c=r===!0?0:1,l,h,u=null,p=0,d=null;function x(M){let E=M.isScene===!0?M.background:null;return E&&E.isTexture&&(E=(M.backgroundBlurriness>0?e:t).get(E)),E}function _(M){let E=!1,y=x(M);y===null?f(a,c):y&&y.isColor&&(f(y,1),E=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,E){let y=x(E);y&&(y.isCubeTexture||y.mapping===Oa)?(h===void 0&&(h=new Ft(new Oe(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:ar(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),os.copy(E.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(s_.makeRotationFromEuler(os)),h.material.toneMapped=ie.getTransfer(y.colorSpace)!==xe,(u!==y||p!==y.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,p=y.version,d=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ft(new Yn(2,2),new wn({name:"BackgroundMaterial",uniforms:ar(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ie.getTransfer(y.colorSpace)!==xe,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||p!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,p=y.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,E){M.getRGB(Yo,mf(i)),n.buffers.color.setClear(Yo.r,Yo.g,Yo.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(M,E=1){a.set(M),c=E,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,f(a,c)},render:_,addToRenderList:g}}function o_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,o=!1;function a(S,I,k,B,G){let Q=!1,Y=u(B,k,I);r!==Y&&(r=Y,l(r.object)),Q=d(S,B,k,G),Q&&x(S,B,k,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,y(S,I,k,B),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,I,k){let B=k.wireframe===!0,G=n[S.id];G===void 0&&(G={},n[S.id]=G);let Q=G[I.id];Q===void 0&&(Q={},G[I.id]=Q);let Y=Q[B];return Y===void 0&&(Y=p(c()),Q[B]=Y),Y}function p(S){let I=[],k=[],B=[];for(let G=0;G<e;G++)I[G]=0,k[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:B,object:S,attributes:{},index:null}}function d(S,I,k,B){let G=r.attributes,Q=I.attributes,Y=0,nt=k.getAttributes();for(let q in nt)if(nt[q].location>=0){let pt=G[q],At=Q[q];if(At===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(At=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(At=S.instanceColor)),pt===void 0||pt.attribute!==At||At&&pt.data!==At.data)return!0;Y++}return r.attributesNum!==Y||r.index!==B}function x(S,I,k,B){let G={},Q=I.attributes,Y=0,nt=k.getAttributes();for(let q in nt)if(nt[q].location>=0){let pt=Q[q];pt===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(pt=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(pt=S.instanceColor));let At={};At.attribute=pt,pt&&pt.data&&(At.data=pt.data),G[q]=At,Y++}r.attributes=G,r.attributesNum=Y,r.index=B}function _(){let S=r.newAttributes;for(let I=0,k=S.length;I<k;I++)S[I]=0}function g(S){f(S,0)}function f(S,I){let k=r.newAttributes,B=r.enabledAttributes,G=r.attributeDivisors;k[S]=1,B[S]===0&&(i.enableVertexAttribArray(S),B[S]=1),G[S]!==I&&(i.vertexAttribDivisor(S,I),G[S]=I)}function M(){let S=r.newAttributes,I=r.enabledAttributes;for(let k=0,B=I.length;k<B;k++)I[k]!==S[k]&&(i.disableVertexAttribArray(k),I[k]=0)}function E(S,I,k,B,G,Q,Y){Y===!0?i.vertexAttribIPointer(S,I,k,G,Q):i.vertexAttribPointer(S,I,k,B,G,Q)}function y(S,I,k,B){_();let G=B.attributes,Q=k.getAttributes(),Y=I.defaultAttributeValues;for(let nt in Q){let q=Q[nt];if(q.location>=0){let ot=G[nt];if(ot===void 0&&(nt==="instanceMatrix"&&S.instanceMatrix&&(ot=S.instanceMatrix),nt==="instanceColor"&&S.instanceColor&&(ot=S.instanceColor)),ot!==void 0){let pt=ot.normalized,At=ot.itemSize,$t=t.get(ot);if($t===void 0)continue;let _e=$t.buffer,Z=$t.type,it=$t.bytesPerElement,bt=Z===i.INT||Z===i.UNSIGNED_INT||ot.gpuType===Uh;if(ot.isInterleavedBufferAttribute){let at=ot.data,Dt=at.stride,zt=ot.offset;if(at.isInstancedInterleavedBuffer){for(let Zt=0;Zt<q.locationSize;Zt++)f(q.location+Zt,at.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Zt=0;Zt<q.locationSize;Zt++)g(q.location+Zt);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let Zt=0;Zt<q.locationSize;Zt++)E(q.location+Zt,At/q.locationSize,Z,pt,Dt*it,(zt+At/q.locationSize*Zt)*it,bt)}else{if(ot.isInstancedBufferAttribute){for(let at=0;at<q.locationSize;at++)f(q.location+at,ot.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let at=0;at<q.locationSize;at++)g(q.location+at);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let at=0;at<q.locationSize;at++)E(q.location+at,At/q.locationSize,Z,pt,At*it,At/q.locationSize*at*it,bt)}}else if(Y!==void 0){let pt=Y[nt];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(q.location,pt);break;case 3:i.vertexAttrib3fv(q.location,pt);break;case 4:i.vertexAttrib4fv(q.location,pt);break;default:i.vertexAttrib1fv(q.location,pt)}}}}M()}function L(){P();for(let S in n){let I=n[S];for(let k in I){let B=I[k];for(let G in B)h(B[G].object),delete B[G];delete I[k]}delete n[S]}}function R(S){if(n[S.id]===void 0)return;let I=n[S.id];for(let k in I){let B=I[k];for(let G in B)h(B[G].object),delete B[G];delete I[k]}delete n[S.id]}function C(S){for(let I in n){let k=n[I];if(k[S.id]===void 0)continue;let B=k[S.id];for(let G in B)h(B[G].object),delete B[G];delete k[S.id]}}function P(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function a_(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let x=0;x<u;x++)d+=h[x];e.update(d,n,1)}function c(l,h,u,p){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<l.length;x++)o(l[x],h[x],p[x]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,u);let x=0;for(let _=0;_<u;_++)x+=h[_]*p[_];e.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function c_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Fn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let P=C===ro&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==di&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==qn&&!P)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=x>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:p,maxTextures:d,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:L,maxSamples:R}}function l_(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ci,a=new Vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let d=u.length!==0||p||n!==0||s;return s=p,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,d){let x=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,f=i.get(u);if(!s||x===null||x.length===0||r&&!g)r?h(null):l();else{let M=r?0:n,E=M*4,y=f.clippingState||null;c.value=y,y=h(x,p,E,d);for(let L=0;L!==E;++L)y[L]=e[L];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,p,d,x){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=c.value,x!==!0||g===null){let f=d+_*4,M=p.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<f)&&(g=new Float32Array(f));for(let E=0,y=d;E!==_;++E,y+=4)o.copy(u[E]).applyMatrix4(M,a),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function h_(i){let t=new WeakMap;function e(o,a){return a===ml?o.mapping=nr:a===gl&&(o.mapping=ir),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ml||a===gl)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Jl(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var va=class extends _a{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ks=4,xd=[.125,.215,.35,.446,.526,.582],hs=20,Zc=new va,_d=new Rt,Jc=null,Kc=0,Qc=0,jc=!1,cs=(1+Math.sqrt(5))/2,Xs=1/cs,yd=[new A(-cs,Xs,0),new A(cs,Xs,0),new A(-Xs,0,cs),new A(Xs,0,cs),new A(0,cs,-Xs),new A(0,cs,Xs),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],Ma=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Jc=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Jc,Kc,Qc),this._renderer.xr.enabled=jc,t.scissorTest=!1,$o(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===nr||t.mapping===ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jc=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:ro,format:Fn,colorSpace:gr,depthBuffer:!1},s=vd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vd(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=u_(r)),this._blurMaterial=d_(r,t,e)}return s}_compileMaterial(t){let e=new Ft(this._lodPlanes[0],t);this._renderer.compile(e,Zc)}_sceneToCubeUV(t,e,n,s){let a=new Xe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(_d),h.toneMapping=Bi,h.autoClear=!1;let d=new ye({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),x=new Ft(new Oe,d),_=!1,g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,_=!0):(d.color.copy(_d),_=!0);for(let f=0;f<6;f++){let M=f%3;M===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):M===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let E=this._cubeSize;$o(s,M*E,f>2?E:0,E,E),h.setRenderTarget(s),_&&h.render(x,a),h.render(t,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=p,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===nr||t.mapping===ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Md());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ft(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;$o(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Zc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=yd[(s-r-1)%yd.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ft(this._lodPlanes[s],l),p=l.uniforms,d=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*hs-1),_=r/x,g=isFinite(r)?1+Math.floor(h*_):hs;g>hs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${hs}`);let f=[],M=0;for(let C=0;C<hs;++C){let P=C/_,w=Math.exp(-P*P/2);f.push(w),C===0?M+=w:C<g&&(M+=2*w)}for(let C=0;C<f.length;C++)f[C]=f[C]/M;p.envMap.value=t.texture,p.samples.value=g,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:E}=this;p.dTheta.value=x,p.mipInt.value=E-n;let y=this._sizeLods[s],L=3*y*(s>E-Ks?s-E+Ks:0),R=4*(this._cubeSize-y);$o(e,L,R,3*y,2*y),c.setRenderTarget(e),c.render(u,Zc)}};function u_(i){let t=[],e=[],n=[],s=i,r=i-Ks+1+xd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ks?c=xd[o-i+Ks-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,p=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,x=6,_=3,g=2,f=1,M=new Float32Array(_*x*d),E=new Float32Array(g*x*d),y=new Float32Array(f*x*d);for(let R=0;R<d;R++){let C=R%3*2/3-1,P=R>2?0:-1,w=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];M.set(w,_*x*R),E.set(p,g*x*R);let S=[R,R,R,R,R,R];y.set(S,f*x*R)}let L=new Ie;L.setAttribute("position",new Fe(M,_)),L.setAttribute("uv",new Fe(E,g)),L.setAttribute("faceIndex",new Fe(y,f)),t.push(L),s>Ks&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vd(i,t,e){let n=new fi(i,t,e);return n.texture.mapping=Oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $o(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function d_(i,t,e){let n=new Float32Array(hs),s=new A(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gh(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Md(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gh(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Sd(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Gh(){return`

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
	`}function f_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===ml||c===gl,h=c===nr||c===ir;if(l||h){let u=t.get(a),p=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Ma(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Ma(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function p_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Yr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function m_(i,t,e,n){let s={},r=new WeakMap;function o(u){let p=u.target;p.index!==null&&t.remove(p.index);for(let x in p.attributes)t.remove(p.attributes[x]);for(let x in p.morphAttributes){let _=p.morphAttributes[x];for(let g=0,f=_.length;g<f;g++)t.remove(_[g])}p.removeEventListener("dispose",o),delete s[p.id];let d=r.get(p);d&&(t.remove(d),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function c(u){let p=u.attributes;for(let x in p)t.update(p[x],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let x in d){let _=d[x];for(let g=0,f=_.length;g<f;g++)t.update(_[g],i.ARRAY_BUFFER)}}function l(u){let p=[],d=u.index,x=u.attributes.position,_=0;if(d!==null){let M=d.array;_=d.version;for(let E=0,y=M.length;E<y;E+=3){let L=M[E+0],R=M[E+1],C=M[E+2];p.push(L,R,R,C,C,L)}}else if(x!==void 0){let M=x.array;_=x.version;for(let E=0,y=M.length/3-1;E<y;E+=3){let L=E+0,R=E+1,C=E+2;p.push(L,R,R,C,C,L)}}else return;let g=new(ff(p)?xa:ga)(p,1);g.version=_;let f=r.get(u);f&&t.remove(f),r.set(u,g)}function h(u){let p=r.get(u);if(p){let d=u.index;d!==null&&p.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function g_(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function c(p,d){i.drawElements(n,d,r,p*o),e.update(d,n,1)}function l(p,d,x){x!==0&&(i.drawElementsInstanced(n,d,r,p*o,x),e.update(d,n,x))}function h(p,d,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,x);let g=0;for(let f=0;f<x;f++)g+=d[f];e.update(g,n,1)}function u(p,d,x,_){if(x===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<p.length;f++)l(p[f]/o,d[f],_[f]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,p,0,_,0,x);let f=0;for(let M=0;M<x;M++)f+=d[M]*_[M];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function x_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function __(i,t,e){let n=new WeakMap,s=new De;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,p=n.get(a);if(p===void 0||p.count!==u){let w=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",w)};p!==void 0&&p.texture.dispose();let d=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],E=0;d===!0&&(E=1),x===!0&&(E=2),_===!0&&(E=3);let y=a.attributes.position.count*E,L=1;y>t.maxTextureSize&&(L=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let R=new Float32Array(y*L*4*u),C=new fa(R,y,L,u);C.type=qn,C.needsUpdate=!0;let P=E*4;for(let S=0;S<u;S++){let I=g[S],k=f[S],B=M[S],G=y*L*4*S;for(let Q=0;Q<I.count;Q++){let Y=Q*P;d===!0&&(s.fromBufferAttribute(I,Q),R[G+Y+0]=s.x,R[G+Y+1]=s.y,R[G+Y+2]=s.z,R[G+Y+3]=0),x===!0&&(s.fromBufferAttribute(k,Q),R[G+Y+4]=s.x,R[G+Y+5]=s.y,R[G+Y+6]=s.z,R[G+Y+7]=0),_===!0&&(s.fromBufferAttribute(B,Q),R[G+Y+8]=s.x,R[G+Y+9]=s.y,R[G+Y+10]=s.z,R[G+Y+11]=B.itemSize===4?s.w:1)}}p={count:u,texture:C,size:new dt(y,L)},n.set(a,p),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];let x=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function y_(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Sa=class extends fn{constructor(t,e,n,s,r,o,a,c,l,h=Qs){if(h!==Qs&&h!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Qs&&(n=fs),n===void 0&&h===rr&&(n=sr),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:vn,this.minFilter=c!==void 0?c:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},xf=new fn,bd=new Sa(1,1),_f=new fa,yf=new $l,vf=new ya,Ed=[],wd=[],Td=new Float32Array(16),Ad=new Float32Array(9),Rd=new Float32Array(4);function xr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ed[s];if(r===void 0&&(r=new Float32Array(s),Ed[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function He(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function za(i,t){let e=wd[t];e===void 0&&(e=new Int32Array(t),wd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function v_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function M_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2fv(this.addr,t),Ve(e,t)}}function S_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;i.uniform3fv(this.addr,t),Ve(e,t)}}function b_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4fv(this.addr,t),Ve(e,t)}}function E_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;Rd.set(n),i.uniformMatrix2fv(this.addr,!1,Rd),Ve(e,n)}}function w_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;Ad.set(n),i.uniformMatrix3fv(this.addr,!1,Ad),Ve(e,n)}}function T_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;Td.set(n),i.uniformMatrix4fv(this.addr,!1,Td),Ve(e,n)}}function A_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function R_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2iv(this.addr,t),Ve(e,t)}}function C_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3iv(this.addr,t),Ve(e,t)}}function I_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4iv(this.addr,t),Ve(e,t)}}function P_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function L_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2uiv(this.addr,t),Ve(e,t)}}function D_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3uiv(this.addr,t),Ve(e,t)}}function U_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4uiv(this.addr,t),Ve(e,t)}}function N_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(bd.compareFunction=df,r=bd):r=xf,e.setTexture2D(t||r,s)}function F_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||yf,s)}function O_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||vf,s)}function B_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||_f,s)}function z_(i){switch(i){case 5126:return v_;case 35664:return M_;case 35665:return S_;case 35666:return b_;case 35674:return E_;case 35675:return w_;case 35676:return T_;case 5124:case 35670:return A_;case 35667:case 35671:return R_;case 35668:case 35672:return C_;case 35669:case 35673:return I_;case 5125:return P_;case 36294:return L_;case 36295:return D_;case 36296:return U_;case 35678:case 36198:case 36298:case 36306:case 35682:return N_;case 35679:case 36299:case 36307:return F_;case 35680:case 36300:case 36308:case 36293:return O_;case 36289:case 36303:case 36311:case 36292:return B_}}function k_(i,t){i.uniform1fv(this.addr,t)}function H_(i,t){let e=xr(t,this.size,2);i.uniform2fv(this.addr,e)}function V_(i,t){let e=xr(t,this.size,3);i.uniform3fv(this.addr,e)}function G_(i,t){let e=xr(t,this.size,4);i.uniform4fv(this.addr,e)}function W_(i,t){let e=xr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function X_(i,t){let e=xr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function q_(i,t){let e=xr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Y_(i,t){i.uniform1iv(this.addr,t)}function $_(i,t){i.uniform2iv(this.addr,t)}function Z_(i,t){i.uniform3iv(this.addr,t)}function J_(i,t){i.uniform4iv(this.addr,t)}function K_(i,t){i.uniform1uiv(this.addr,t)}function Q_(i,t){i.uniform2uiv(this.addr,t)}function j_(i,t){i.uniform3uiv(this.addr,t)}function ty(i,t){i.uniform4uiv(this.addr,t)}function ey(i,t,e){let n=this.cache,s=t.length,r=za(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||xf,r[o])}function ny(i,t,e){let n=this.cache,s=t.length,r=za(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||yf,r[o])}function iy(i,t,e){let n=this.cache,s=t.length,r=za(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||vf,r[o])}function sy(i,t,e){let n=this.cache,s=t.length,r=za(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||_f,r[o])}function ry(i){switch(i){case 5126:return k_;case 35664:return H_;case 35665:return V_;case 35666:return G_;case 35674:return W_;case 35675:return X_;case 35676:return q_;case 5124:case 35670:return Y_;case 35667:case 35671:return $_;case 35668:case 35672:return Z_;case 35669:case 35673:return J_;case 5125:return K_;case 36294:return Q_;case 36295:return j_;case 36296:return ty;case 35678:case 36198:case 36298:case 36306:case 35682:return ey;case 35679:case 36299:case 36307:return ny;case 35680:case 36300:case 36308:case 36293:return iy;case 36289:case 36303:case 36311:case 36292:return sy}}var Kl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=z_(e.type)}},Ql=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ry(e.type)}},jl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},tl=/(\w+)(\])?(\[|\.)?/g;function Cd(i,t){i.seq.push(t),i.map[t.id]=t}function oy(i,t,e){let n=i.name,s=n.length;for(tl.lastIndex=0;;){let r=tl.exec(n),o=tl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Cd(e,l===void 0?new Kl(a,i,t):new Ql(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new jl(a),Cd(e,u)),e=u}}}var tr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);oy(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Id(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var ay=37297,cy=0;function ly(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Pd=new Vt;function hy(i){ie._getMatrix(Pd,ie.workingColorSpace,i);let t=`mat3( ${Pd.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case Ba:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ld(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+ly(i.getShaderSource(t),o)}else return s}function uy(i,t){let e=hy(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function dy(i,t){let e;switch(t){case bm:e="Linear";break;case Em:e="Reinhard";break;case wm:e="Cineon";break;case Dh:e="ACESFilmic";break;case Am:e="AgX";break;case Rm:e="Neutral";break;case Tm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Zo=new A;function fy(){ie.getLuminanceCoefficients(Zo);let i=Zo.x.toFixed(4),t=Zo.y.toFixed(4),e=Zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function py(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($r).join(`
`)}function my(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gy(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function $r(i){return i!==""}function Dd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ud(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var xy=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(i){return i.replace(xy,yy)}var _y=new Map;function yy(i,t){let e=qt[t];if(e===void 0){let n=_y.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return th(e)}var vy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nd(i){return i.replace(vy,My)}function My(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fd(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Sy(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Qd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Lh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ai&&(t="SHADOWMAP_TYPE_VSM"),t}function by(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case nr:case ir:t="ENVMAP_TYPE_CUBE";break;case Oa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ey(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ir:t="ENVMAP_MODE_REFRACTION";break}return t}function wy(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case jd:t="ENVMAP_BLENDING_MULTIPLY";break;case Mm:t="ENVMAP_BLENDING_MIX";break;case Sm:t="ENVMAP_BLENDING_ADD";break}return t}function Ty(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ay(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Sy(e),l=by(e),h=Ey(e),u=wy(e),p=Ty(e),d=py(e),x=my(r),_=s.createProgram(),g,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter($r).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter($r).join(`
`),f.length>0&&(f+=`
`)):(g=[Fd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),f=[Fd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bi?"#define TONE_MAPPING":"",e.toneMapping!==Bi?qt.tonemapping_pars_fragment:"",e.toneMapping!==Bi?dy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,uy("linearToOutputTexel",e.outputColorSpace),fy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($r).join(`
`)),o=th(o),o=Dd(o,e),o=Ud(o,e),a=th(a),a=Dd(a,e),a=Ud(a,e),o=Nd(o),a=Nd(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===Zu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let E=M+g+o,y=M+f+a,L=Id(s,s.VERTEX_SHADER,E),R=Id(s,s.FRAGMENT_SHADER,y);s.attachShader(_,L),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(I){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(_).trim(),B=s.getShaderInfoLog(L).trim(),G=s.getShaderInfoLog(R).trim(),Q=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,L,R);else{let nt=Ld(s,L,"vertex"),q=Ld(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+nt+`
`+q)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||G==="")&&(Y=!1);Y&&(I.diagnostics={runnable:Q,programLog:k,vertexShader:{log:B,prefix:g},fragmentShader:{log:G,prefix:f}})}s.deleteShader(L),s.deleteShader(R),P=new tr(s,_),w=gy(s,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,ay)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cy++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=R,this}var Ry=0,eh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new nh(t),e.set(t,n)),n}},nh=class{constructor(t){this.id=Ry++,this.code=t,this.usedTimes=0}};function Cy(i,t,e,n,s,r,o){let a=new ma,c=new eh,l=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures,d=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function g(w,S,I,k,B){let G=k.fog,Q=B.geometry,Y=w.isMeshStandardMaterial?k.environment:null,nt=(w.isMeshStandardMaterial?e:t).get(w.envMap||Y),q=nt&&nt.mapping===Oa?nt.image.height:null,ot=x[w.type];w.precision!==null&&(d=s.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));let pt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,At=pt!==void 0?pt.length:0,$t=0;Q.morphAttributes.position!==void 0&&($t=1),Q.morphAttributes.normal!==void 0&&($t=2),Q.morphAttributes.color!==void 0&&($t=3);let _e,Z,it,bt;if(ot){let me=Wn[ot];_e=me.vertexShader,Z=me.fragmentShader}else _e=w.vertexShader,Z=w.fragmentShader,c.update(w),it=c.getVertexShaderID(w),bt=c.getFragmentShaderID(w);let at=i.getRenderTarget(),Dt=i.state.buffers.depth.getReversed(),zt=B.isInstancedMesh===!0,Zt=B.isBatchedMesh===!0,Ce=!!w.map,ee=!!w.matcap,Ne=!!nt,F=!!w.aoMap,Sn=!!w.lightMap,Kt=!!w.bumpMap,Qt=!!w.normalMap,Pt=!!w.displacementMap,be=!!w.emissiveMap,Ct=!!w.metalnessMap,T=!!w.roughnessMap,v=w.anisotropy>0,O=w.clearcoat>0,J=w.dispersion>0,j=w.iridescence>0,$=w.sheen>0,Et=w.transmission>0,ct=v&&!!w.anisotropyMap,mt=O&&!!w.clearcoatMap,ne=O&&!!w.clearcoatNormalMap,tt=O&&!!w.clearcoatRoughnessMap,gt=j&&!!w.iridescenceMap,Lt=j&&!!w.iridescenceThicknessMap,Nt=$&&!!w.sheenColorMap,xt=$&&!!w.sheenRoughnessMap,jt=!!w.specularMap,Xt=!!w.specularColorMap,Me=!!w.specularIntensityMap,D=Et&&!!w.transmissionMap,rt=Et&&!!w.thicknessMap,X=!!w.gradientMap,K=!!w.alphaMap,ft=w.alphaTest>0,ht=!!w.alphaHash,kt=!!w.extensions,Le=Bi;w.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Le=i.toneMapping);let Qe={shaderID:ot,shaderType:w.type,shaderName:w.name,vertexShader:_e,fragmentShader:Z,defines:w.defines,customVertexShaderID:it,customFragmentShaderID:bt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:Zt,batchingColor:Zt&&B._colorsTexture!==null,instancing:zt,instancingColor:zt&&B.instanceColor!==null,instancingMorph:zt&&B.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:gr,alphaToCoverage:!!w.alphaToCoverage,map:Ce,matcap:ee,envMap:Ne,envMapMode:Ne&&nt.mapping,envMapCubeUVHeight:q,aoMap:F,lightMap:Sn,bumpMap:Kt,normalMap:Qt,displacementMap:p&&Pt,emissiveMap:be,normalMapObjectSpace:Qt&&w.normalMapType===Lm,normalMapTangentSpace:Qt&&w.normalMapType===uf,metalnessMap:Ct,roughnessMap:T,anisotropy:v,anisotropyMap:ct,clearcoat:O,clearcoatMap:mt,clearcoatNormalMap:ne,clearcoatRoughnessMap:tt,dispersion:J,iridescence:j,iridescenceMap:gt,iridescenceThicknessMap:Lt,sheen:$,sheenColorMap:Nt,sheenRoughnessMap:xt,specularMap:jt,specularColorMap:Xt,specularIntensityMap:Me,transmission:Et,transmissionMap:D,thicknessMap:rt,gradientMap:X,opaque:w.transparent===!1&&w.blending===Oi&&w.alphaToCoverage===!1,alphaMap:K,alphaTest:ft,alphaHash:ht,combine:w.combine,mapUv:Ce&&_(w.map.channel),aoMapUv:F&&_(w.aoMap.channel),lightMapUv:Sn&&_(w.lightMap.channel),bumpMapUv:Kt&&_(w.bumpMap.channel),normalMapUv:Qt&&_(w.normalMap.channel),displacementMapUv:Pt&&_(w.displacementMap.channel),emissiveMapUv:be&&_(w.emissiveMap.channel),metalnessMapUv:Ct&&_(w.metalnessMap.channel),roughnessMapUv:T&&_(w.roughnessMap.channel),anisotropyMapUv:ct&&_(w.anisotropyMap.channel),clearcoatMapUv:mt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(w.sheenRoughnessMap.channel),specularMapUv:jt&&_(w.specularMap.channel),specularColorMapUv:Xt&&_(w.specularColorMap.channel),specularIntensityMapUv:Me&&_(w.specularIntensityMap.channel),transmissionMapUv:D&&_(w.transmissionMap.channel),thicknessMapUv:rt&&_(w.thicknessMap.channel),alphaMapUv:K&&_(w.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Qt||v),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Q.attributes.uv&&(Ce||K),fog:!!G,useFog:w.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Dt,skinning:B.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:$t,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:Ce&&w.map.isVideoTexture===!0&&ie.getTransfer(w.map.colorSpace)===xe,decodeVideoTextureEmissive:be&&w.emissiveMap.isVideoTexture===!0&&ie.getTransfer(w.emissiveMap.colorSpace)===xe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===$e,flipSided:w.side===en,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:kt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&w.extensions.multiDraw===!0||Zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Qe.vertexUv1s=l.has(1),Qe.vertexUv2s=l.has(2),Qe.vertexUv3s=l.has(3),l.clear(),Qe}function f(w){let S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(let I in w.defines)S.push(I),S.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(M(S,w),E(S,w),S.push(i.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function M(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function E(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){let S=x[w.type],I;if(S){let k=Wn[S];I=y0.clone(k.uniforms)}else I=w.uniforms;return I}function L(w,S){let I;for(let k=0,B=h.length;k<B;k++){let G=h[k];if(G.cacheKey===S){I=G,++I.usedTimes;break}}return I===void 0&&(I=new Ay(i,S,w,r),h.push(I)),I}function R(w){if(--w.usedTimes===0){let S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function C(w){c.remove(w)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:y,acquireProgram:L,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:P}}function Iy(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Py(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Od(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Bd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,p,d,x,_,g){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:p,material:d,groupOrder:x,renderOrder:u.renderOrder,z:_,group:g},i[t]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=d,f.groupOrder=x,f.renderOrder=u.renderOrder,f.z=_,f.group=g),t++,f}function a(u,p,d,x,_,g){let f=o(u,p,d,x,_,g);d.transmission>0?n.push(f):d.transparent===!0?s.push(f):e.push(f)}function c(u,p,d,x,_,g){let f=o(u,p,d,x,_,g);d.transmission>0?n.unshift(f):d.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,p){e.length>1&&e.sort(u||Py),n.length>1&&n.sort(p||Od),s.length>1&&s.sort(p||Od)}function h(){for(let u=t,p=i.length;u<p;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Ly(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Bd,i.set(n,[o])):s>=r.length?(o=new Bd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Dy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Rt};break;case"SpotLight":e={position:new A,direction:new A,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function Uy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Ny=0;function Fy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Oy(i){let t=new Dy,e=Uy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);let s=new A,r=new de,o=new de;function a(l){let h=0,u=0,p=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,x=0,_=0,g=0,f=0,M=0,E=0,y=0,L=0,R=0,C=0;l.sort(Fy);for(let w=0,S=l.length;w<S;w++){let I=l[w],k=I.color,B=I.intensity,G=I.distance,Q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=k.r*B,u+=k.g*B,p+=k.b*B;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(I.sh.coefficients[Y],B);C++}else if(I.isDirectionalLight){let Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let nt=I.shadow,q=e.get(I);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,n.directionalShadow[d]=q,n.directionalShadowMap[d]=Q,n.directionalShadowMatrix[d]=I.shadow.matrix,M++}n.directional[d]=Y,d++}else if(I.isSpotLight){let Y=t.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(k).multiplyScalar(B),Y.distance=G,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,n.spot[_]=Y;let nt=I.shadow;if(I.map&&(n.spotLightMap[L]=I.map,L++,nt.updateMatrices(I),I.castShadow&&R++),n.spotLightMatrix[_]=nt.matrix,I.castShadow){let q=e.get(I);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=Q,y++}_++}else if(I.isRectAreaLight){let Y=t.get(I);Y.color.copy(k).multiplyScalar(B),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=Y,g++}else if(I.isPointLight){let Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){let nt=I.shadow,q=e.get(I);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,q.shadowCameraNear=nt.camera.near,q.shadowCameraFar=nt.camera.far,n.pointShadow[x]=q,n.pointShadowMap[x]=Q,n.pointShadowMatrix[x]=I.shadow.matrix,E++}n.point[x]=Y,x++}else if(I.isHemisphereLight){let Y=t.get(I);Y.skyColor.copy(I.color).multiplyScalar(B),Y.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[f]=Y,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;let P=n.hash;(P.directionalLength!==d||P.pointLength!==x||P.spotLength!==_||P.rectAreaLength!==g||P.hemiLength!==f||P.numDirectionalShadows!==M||P.numPointShadows!==E||P.numSpotShadows!==y||P.numSpotMaps!==L||P.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=x,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+L-R,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,P.directionalLength=d,P.pointLength=x,P.spotLength=_,P.rectAreaLength=g,P.hemiLength=f,P.numDirectionalShadows=M,P.numPointShadows=E,P.numSpotShadows=y,P.numSpotMaps=L,P.numLightProbes=C,n.version=Ny++)}function c(l,h){let u=0,p=0,d=0,x=0,_=0,g=h.matrixWorldInverse;for(let f=0,M=l.length;f<M;f++){let E=l[f];if(E.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(E.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),d++}else if(E.isRectAreaLight){let y=n.rectArea[x];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(E.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),x++}else if(E.isPointLight){let y=n.point[p];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),p++}else if(E.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function zd(i){let t=new Oy(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function By(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new zd(i),t.set(s,[a])):r>=o.length?(a=new zd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ih=class extends mi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Im,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},sh=class extends mi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},zy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ky=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Hy(i,t,e){let n=new no,s=new dt,r=new dt,o=new De,a=new ih({depthPacking:Pm}),c=new sh,l={},h=e.maxTextureSize,u={[zi]:en,[en]:zi,[$e]:$e},p=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:zy,fragmentShader:ky}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let x=new Ie;x.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ft(x,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qd;let f=this.type;this.render=function(R,C,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;let w=i.getRenderTarget(),S=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Fi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let B=f!==ai&&this.type===ai,G=f===ai&&this.type!==ai;for(let Q=0,Y=R.length;Q<Y;Q++){let nt=R[Q],q=nt.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let ot=q.getFrameExtents();if(s.multiply(ot),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ot.x),s.x=r.x*ot.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ot.y),s.y=r.y*ot.y,q.mapSize.y=r.y)),q.map===null||B===!0||G===!0){let At=this.type!==ai?{minFilter:vn,magFilter:vn}:{};q.map!==null&&q.map.dispose(),q.map=new fi(s.x,s.y,At),q.map.texture.name=nt.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let pt=q.getViewportCount();for(let At=0;At<pt;At++){let $t=q.getViewport(At);o.set(r.x*$t.x,r.y*$t.y,r.x*$t.z,r.y*$t.w),k.viewport(o),q.updateMatrices(nt,At),n=q.getFrustum(),y(C,P,q.camera,nt,this.type)}q.isPointLightShadow!==!0&&this.type===ai&&M(q,P),q.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(w,S,I)};function M(R,C){let P=t.update(_);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new fi(s.x,s.y)),p.uniforms.shadow_pass.value=R.map.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,P,p,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,P,d,_,null)}function E(R,C,P,w){let S=null,I=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)S=I;else if(S=P.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let k=S.uuid,B=C.uuid,G=l[k];G===void 0&&(G={},l[k]=G);let Q=G[B];Q===void 0&&(Q=S.clone(),G[B]=Q,C.addEventListener("dispose",L)),S=Q}if(S.visible=C.visible,S.wireframe=C.wireframe,w===ai?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let k=i.properties.get(S);k.light=P}return S}function y(R,C,P,w,S){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===ai)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);let B=t.update(R),G=R.material;if(Array.isArray(G)){let Q=B.groups;for(let Y=0,nt=Q.length;Y<nt;Y++){let q=Q[Y],ot=G[q.materialIndex];if(ot&&ot.visible){let pt=E(R,ot,w,S);R.onBeforeShadow(i,R,C,P,B,pt,q),i.renderBufferDirect(P,null,B,pt,R,q),R.onAfterShadow(i,R,C,P,B,pt,q)}}}else if(G.visible){let Q=E(R,G,w,S);R.onBeforeShadow(i,R,C,P,B,Q,null),i.renderBufferDirect(P,null,B,Q,R,null),R.onAfterShadow(i,R,C,P,B,Q,null)}}let k=R.children;for(let B=0,G=k.length;B<G;B++)y(k[B],C,P,w,S)}function L(R){R.target.removeEventListener("dispose",L);for(let P in l){let w=l[P],S=R.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}var Vy={[cl]:ll,[hl]:fl,[ul]:pl,[er]:dl,[ll]:cl,[fl]:hl,[pl]:ul,[dl]:er};function Gy(i,t){function e(){let D=!1,rt=new De,X=null,K=new De(0,0,0,0);return{setMask:function(ft){X!==ft&&!D&&(i.colorMask(ft,ft,ft,ft),X=ft)},setLocked:function(ft){D=ft},setClear:function(ft,ht,kt,Le,Qe){Qe===!0&&(ft*=Le,ht*=Le,kt*=Le),rt.set(ft,ht,kt,Le),K.equals(rt)===!1&&(i.clearColor(ft,ht,kt,Le),K.copy(rt))},reset:function(){D=!1,X=null,K.set(-1,0,0,0)}}}function n(){let D=!1,rt=!1,X=null,K=null,ft=null;return{setReversed:function(ht){if(rt!==ht){let kt=t.get("EXT_clip_control");rt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);let Le=ft;ft=null,this.setClear(Le)}rt=ht},getReversed:function(){return rt},setTest:function(ht){ht?at(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(ht){X!==ht&&!D&&(i.depthMask(ht),X=ht)},setFunc:function(ht){if(rt&&(ht=Vy[ht]),K!==ht){switch(ht){case cl:i.depthFunc(i.NEVER);break;case ll:i.depthFunc(i.ALWAYS);break;case hl:i.depthFunc(i.LESS);break;case er:i.depthFunc(i.LEQUAL);break;case ul:i.depthFunc(i.EQUAL);break;case dl:i.depthFunc(i.GEQUAL);break;case fl:i.depthFunc(i.GREATER);break;case pl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ht}},setLocked:function(ht){D=ht},setClear:function(ht){ft!==ht&&(rt&&(ht=1-ht),i.clearDepth(ht),ft=ht)},reset:function(){D=!1,X=null,K=null,ft=null,rt=!1}}}function s(){let D=!1,rt=null,X=null,K=null,ft=null,ht=null,kt=null,Le=null,Qe=null;return{setTest:function(me){D||(me?at(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(me){rt!==me&&!D&&(i.stencilMask(me),rt=me)},setFunc:function(me,In,ti){(X!==me||K!==In||ft!==ti)&&(i.stencilFunc(me,In,ti),X=me,K=In,ft=ti)},setOp:function(me,In,ti){(ht!==me||kt!==In||Le!==ti)&&(i.stencilOp(me,In,ti),ht=me,kt=In,Le=ti)},setLocked:function(me){D=me},setClear:function(me){Qe!==me&&(i.clearStencil(me),Qe=me)},reset:function(){D=!1,rt=null,X=null,K=null,ft=null,ht=null,kt=null,Le=null,Qe=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},p=new WeakMap,d=[],x=null,_=!1,g=null,f=null,M=null,E=null,y=null,L=null,R=null,C=new Rt(0,0,0),P=0,w=!1,S=null,I=null,k=null,B=null,G=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,nt=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=nt>=1):q.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=nt>=2);let ot=null,pt={},At=i.getParameter(i.SCISSOR_BOX),$t=i.getParameter(i.VIEWPORT),_e=new De().fromArray(At),Z=new De().fromArray($t);function it(D,rt,X,K){let ft=new Uint8Array(4),ht=i.createTexture();i.bindTexture(D,ht),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<X;kt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(rt,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(rt+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return ht}let bt={};bt[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),bt[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),bt[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(i.DEPTH_TEST),o.setFunc(er),Kt(!1),Qt(Vu),at(i.CULL_FACE),F(Fi);function at(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Dt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function zt(D,rt){return u[D]!==rt?(i.bindFramebuffer(D,rt),u[D]=rt,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=rt),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=rt),!0):!1}function Zt(D,rt){let X=d,K=!1;if(D){X=p.get(rt),X===void 0&&(X=[],p.set(rt,X));let ft=D.textures;if(X.length!==ft.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,kt=ft.length;ht<kt;ht++)X[ht]=i.COLOR_ATTACHMENT0+ht;X.length=ft.length,K=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,K=!0);K&&i.drawBuffers(X)}function Ce(D){return x!==D?(i.useProgram(D),x=D,!0):!1}let ee={[ls]:i.FUNC_ADD,[sm]:i.FUNC_SUBTRACT,[rm]:i.FUNC_REVERSE_SUBTRACT};ee[om]=i.MIN,ee[am]=i.MAX;let Ne={[cm]:i.ZERO,[lm]:i.ONE,[hm]:i.SRC_COLOR,[ol]:i.SRC_ALPHA,[gm]:i.SRC_ALPHA_SATURATE,[pm]:i.DST_COLOR,[dm]:i.DST_ALPHA,[um]:i.ONE_MINUS_SRC_COLOR,[al]:i.ONE_MINUS_SRC_ALPHA,[mm]:i.ONE_MINUS_DST_COLOR,[fm]:i.ONE_MINUS_DST_ALPHA,[xm]:i.CONSTANT_COLOR,[_m]:i.ONE_MINUS_CONSTANT_COLOR,[ym]:i.CONSTANT_ALPHA,[vm]:i.ONE_MINUS_CONSTANT_ALPHA};function F(D,rt,X,K,ft,ht,kt,Le,Qe,me){if(D===Fi){_===!0&&(Dt(i.BLEND),_=!1);return}if(_===!1&&(at(i.BLEND),_=!0),D!==im){if(D!==g||me!==w){if((f!==ls||y!==ls)&&(i.blendEquation(i.FUNC_ADD),f=ls,y=ls),me)switch(D){case Oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ze:i.blendFunc(i.ONE,i.ONE);break;case Gu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ze:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Gu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,E=null,L=null,R=null,C.set(0,0,0),P=0,g=D,w=me}return}ft=ft||rt,ht=ht||X,kt=kt||K,(rt!==f||ft!==y)&&(i.blendEquationSeparate(ee[rt],ee[ft]),f=rt,y=ft),(X!==M||K!==E||ht!==L||kt!==R)&&(i.blendFuncSeparate(Ne[X],Ne[K],Ne[ht],Ne[kt]),M=X,E=K,L=ht,R=kt),(Le.equals(C)===!1||Qe!==P)&&(i.blendColor(Le.r,Le.g,Le.b,Qe),C.copy(Le),P=Qe),g=D,w=!1}function Sn(D,rt){D.side===$e?Dt(i.CULL_FACE):at(i.CULL_FACE);let X=D.side===en;rt&&(X=!X),Kt(X),D.blending===Oi&&D.transparent===!1?F(Fi):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let K=D.stencilWrite;a.setTest(K),K&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),be(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(D){S!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),S=D)}function Qt(D){D!==em?(at(i.CULL_FACE),D!==I&&(D===Vu?i.cullFace(i.BACK):D===nm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),I=D}function Pt(D){D!==k&&(Y&&i.lineWidth(D),k=D)}function be(D,rt,X){D?(at(i.POLYGON_OFFSET_FILL),(B!==rt||G!==X)&&(i.polygonOffset(rt,X),B=rt,G=X)):Dt(i.POLYGON_OFFSET_FILL)}function Ct(D){D?at(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function T(D){D===void 0&&(D=i.TEXTURE0+Q-1),ot!==D&&(i.activeTexture(D),ot=D)}function v(D,rt,X){X===void 0&&(ot===null?X=i.TEXTURE0+Q-1:X=ot);let K=pt[X];K===void 0&&(K={type:void 0,texture:void 0},pt[X]=K),(K.type!==D||K.texture!==rt)&&(ot!==X&&(i.activeTexture(X),ot=X),i.bindTexture(D,rt||bt[D]),K.type=D,K.texture=rt)}function O(){let D=pt[ot];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Lt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Nt(D){_e.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),_e.copy(D))}function xt(D){Z.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Z.copy(D))}function jt(D,rt){let X=l.get(rt);X===void 0&&(X=new WeakMap,l.set(rt,X));let K=X.get(D);K===void 0&&(K=i.getUniformBlockIndex(rt,D.name),X.set(D,K))}function Xt(D,rt){let K=l.get(rt).get(D);c.get(rt)!==K&&(i.uniformBlockBinding(rt,K,D.__bindingPointIndex),c.set(rt,K))}function Me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ot=null,pt={},u={},p=new WeakMap,d=[],x=null,_=!1,g=null,f=null,M=null,E=null,y=null,L=null,R=null,C=new Rt(0,0,0),P=0,w=!1,S=null,I=null,k=null,B=null,G=null,_e.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:Dt,bindFramebuffer:zt,drawBuffers:Zt,useProgram:Ce,setBlending:F,setMaterial:Sn,setFlipSided:Kt,setCullFace:Qt,setLineWidth:Pt,setPolygonOffset:be,setScissorTest:Ct,activeTexture:T,bindTexture:v,unbindTexture:O,compressedTexImage2D:J,compressedTexImage3D:j,texImage2D:gt,texImage3D:Lt,updateUBOMapping:jt,uniformBlockBinding:Xt,texStorage2D:ne,texStorage3D:tt,texSubImage2D:$,texSubImage3D:Et,compressedTexSubImage2D:ct,compressedTexSubImage3D:mt,scissor:Nt,viewport:xt,reset:Me}}function kd(i,t,e,n){let s=Wy(n);switch(e){case rf:return i*t;case af:return i*t;case cf:return i*t*2;case Oh:return i*t/s.components*s.byteLength;case Bh:return i*t/s.components*s.byteLength;case lf:return i*t*2/s.components*s.byteLength;case zh:return i*t*2/s.components*s.byteLength;case of:return i*t*3/s.components*s.byteLength;case Fn:return i*t*4/s.components*s.byteLength;case kh:return i*t*4/s.components*s.byteLength;case sa:case ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case oa:case aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yl:case Ml:return Math.max(i,16)*Math.max(t,8)/4;case _l:case vl:return Math.max(i,8)*Math.max(t,8)/2;case Sl:case bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case El:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Al:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Il:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ol:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Bl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ca:case zl:case kl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case hf:case Hl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Vl:case Gl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wy(i){switch(i){case di:case ef:return{byteLength:1,components:1};case eo:case nf:case ro:return{byteLength:2,components:1};case Nh:case Fh:return{byteLength:2,components:4};case fs:case Uh:case qn:return{byteLength:4,components:1};case sf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Xy(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new dt,h=new WeakMap,u,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,v){return d?new OffscreenCanvas(T,v):ua("canvas")}function _(T,v,O){let J=1,j=Ct(T);if((j.width>O||j.height>O)&&(J=O/Math.max(j.width,j.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let $=Math.floor(J*j.width),Et=Math.floor(J*j.height);u===void 0&&(u=x($,Et));let ct=v?x($,Et):u;return ct.width=$,ct.height=Et,ct.getContext("2d").drawImage(T,0,0,$,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+Et+")."),ct}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function g(T){return T.generateMipmaps}function f(T){i.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,v,O,J,j=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=v;if(v===i.RED&&(O===i.FLOAT&&($=i.R32F),O===i.HALF_FLOAT&&($=i.R16F),O===i.UNSIGNED_BYTE&&($=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.R8UI),O===i.UNSIGNED_SHORT&&($=i.R16UI),O===i.UNSIGNED_INT&&($=i.R32UI),O===i.BYTE&&($=i.R8I),O===i.SHORT&&($=i.R16I),O===i.INT&&($=i.R32I)),v===i.RG&&(O===i.FLOAT&&($=i.RG32F),O===i.HALF_FLOAT&&($=i.RG16F),O===i.UNSIGNED_BYTE&&($=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RG8UI),O===i.UNSIGNED_SHORT&&($=i.RG16UI),O===i.UNSIGNED_INT&&($=i.RG32UI),O===i.BYTE&&($=i.RG8I),O===i.SHORT&&($=i.RG16I),O===i.INT&&($=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGB8UI),O===i.UNSIGNED_SHORT&&($=i.RGB16UI),O===i.UNSIGNED_INT&&($=i.RGB32UI),O===i.BYTE&&($=i.RGB8I),O===i.SHORT&&($=i.RGB16I),O===i.INT&&($=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGBA8UI),O===i.UNSIGNED_SHORT&&($=i.RGBA16UI),O===i.UNSIGNED_INT&&($=i.RGBA32UI),O===i.BYTE&&($=i.RGBA8I),O===i.SHORT&&($=i.RGBA16I),O===i.INT&&($=i.RGBA32I)),v===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),v===i.RGBA){let Et=j?Ba:ie.getTransfer(J);O===i.FLOAT&&($=i.RGBA32F),O===i.HALF_FLOAT&&($=i.RGBA16F),O===i.UNSIGNED_BYTE&&($=Et===xe?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function y(T,v){let O;return T?v===null||v===fs||v===sr?O=i.DEPTH24_STENCIL8:v===qn?O=i.DEPTH32F_STENCIL8:v===eo&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===fs||v===sr?O=i.DEPTH_COMPONENT24:v===qn?O=i.DEPTH_COMPONENT32F:v===eo&&(O=i.DEPTH_COMPONENT16),O}function L(T,v){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==vn&&T.minFilter!==Xn?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function R(T){let v=T.target;v.removeEventListener("dispose",R),P(v),v.isVideoTexture&&h.delete(v)}function C(T){let v=T.target;v.removeEventListener("dispose",C),S(v)}function P(T){let v=n.get(T);if(v.__webglInit===void 0)return;let O=T.source,J=p.get(O);if(J){let j=J[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&w(T),Object.keys(J).length===0&&p.delete(O)}n.remove(T)}function w(T){let v=n.get(T);i.deleteTexture(v.__webglTexture);let O=T.source,J=p.get(O);delete J[v.__cacheKey],o.memory.textures--}function S(T){let v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let j=0;j<v.__webglFramebuffer[J].length;j++)i.deleteFramebuffer(v.__webglFramebuffer[J][j]);else i.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)i.deleteFramebuffer(v.__webglFramebuffer[J]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=T.textures;for(let J=0,j=O.length;J<j;J++){let $=n.get(O[J]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(O[J])}n.remove(T)}let I=0;function k(){I=0}function B(){let T=I;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),I+=1,T}function G(T){let v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function Q(T,v){let O=n.get(T);if(T.isVideoTexture&&Pt(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){let J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(O,T,v);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function Y(T,v){let O=n.get(T);if(T.version>0&&O.__version!==T.version){Z(O,T,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function nt(T,v){let O=n.get(T);if(T.version>0&&O.__version!==T.version){Z(O,T,v);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function q(T,v){let O=n.get(T);if(T.version>0&&O.__version!==T.version){it(O,T,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}let ot={[to]:i.REPEAT,[us]:i.CLAMP_TO_EDGE,[xl]:i.MIRRORED_REPEAT},pt={[vn]:i.NEAREST,[Cm]:i.NEAREST_MIPMAP_NEAREST,[Co]:i.NEAREST_MIPMAP_LINEAR,[Xn]:i.LINEAR,[Ac]:i.LINEAR_MIPMAP_NEAREST,[ds]:i.LINEAR_MIPMAP_LINEAR},At={[Dm]:i.NEVER,[zm]:i.ALWAYS,[Um]:i.LESS,[df]:i.LEQUAL,[Nm]:i.EQUAL,[Bm]:i.GEQUAL,[Fm]:i.GREATER,[Om]:i.NOTEQUAL};function $t(T,v){if(v.type===qn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Xn||v.magFilter===Ac||v.magFilter===Co||v.magFilter===ds||v.minFilter===Xn||v.minFilter===Ac||v.minFilter===Co||v.minFilter===ds)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ot[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ot[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ot[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,pt[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,pt[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,At[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===vn||v.minFilter!==Co&&v.minFilter!==ds||v.type===qn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function _e(T,v){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",R));let J=v.source,j=p.get(J);j===void 0&&(j={},p.set(J,j));let $=G(v);if($!==T.__cacheKey){j[$]===void 0&&(j[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),j[$].usedTimes++;let Et=j[T.__cacheKey];Et!==void 0&&(j[T.__cacheKey].usedTimes--,Et.usedTimes===0&&w(v)),T.__cacheKey=$,T.__webglTexture=j[$].texture}return O}function Z(T,v,O){let J=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=i.TEXTURE_3D);let j=_e(T,v),$=v.source;e.bindTexture(J,T.__webglTexture,i.TEXTURE0+O);let Et=n.get($);if($.version!==Et.__version||j===!0){e.activeTexture(i.TEXTURE0+O);let ct=ie.getPrimaries(ie.workingColorSpace),mt=v.colorSpace===Ui?null:ie.getPrimaries(v.colorSpace),ne=v.colorSpace===Ui||ct===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let tt=_(v.image,!1,s.maxTextureSize);tt=be(v,tt);let gt=r.convert(v.format,v.colorSpace),Lt=r.convert(v.type),Nt=E(v.internalFormat,gt,Lt,v.colorSpace,v.isVideoTexture);$t(J,v);let xt,jt=v.mipmaps,Xt=v.isVideoTexture!==!0,Me=Et.__version===void 0||j===!0,D=$.dataReady,rt=L(v,tt);if(v.isDepthTexture)Nt=y(v.format===rr,v.type),Me&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,Nt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Nt,tt.width,tt.height,0,gt,Lt,null));else if(v.isDataTexture)if(jt.length>0){Xt&&Me&&e.texStorage2D(i.TEXTURE_2D,rt,Nt,jt[0].width,jt[0].height);for(let X=0,K=jt.length;X<K;X++)xt=jt[X],Xt?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,xt.width,xt.height,gt,Lt,xt.data):e.texImage2D(i.TEXTURE_2D,X,Nt,xt.width,xt.height,0,gt,Lt,xt.data);v.generateMipmaps=!1}else Xt?(Me&&e.texStorage2D(i.TEXTURE_2D,rt,Nt,tt.width,tt.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,gt,Lt,tt.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,tt.width,tt.height,0,gt,Lt,tt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Xt&&Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,Nt,jt[0].width,jt[0].height,tt.depth);for(let X=0,K=jt.length;X<K;X++)if(xt=jt[X],v.format!==Fn)if(gt!==null)if(Xt){if(D)if(v.layerUpdates.size>0){let ft=kd(xt.width,xt.height,v.format,v.type);for(let ht of v.layerUpdates){let kt=xt.data.subarray(ht*ft/xt.data.BYTES_PER_ELEMENT,(ht+1)*ft/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,ht,xt.width,xt.height,1,gt,kt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,xt.width,xt.height,tt.depth,gt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Nt,xt.width,xt.height,tt.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,xt.width,xt.height,tt.depth,gt,Lt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Nt,xt.width,xt.height,tt.depth,0,gt,Lt,xt.data)}else{Xt&&Me&&e.texStorage2D(i.TEXTURE_2D,rt,Nt,jt[0].width,jt[0].height);for(let X=0,K=jt.length;X<K;X++)xt=jt[X],v.format!==Fn?gt!==null?Xt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,xt.width,xt.height,gt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Nt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,xt.width,xt.height,gt,Lt,xt.data):e.texImage2D(i.TEXTURE_2D,X,Nt,xt.width,xt.height,0,gt,Lt,xt.data)}else if(v.isDataArrayTexture)if(Xt){if(Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,Nt,tt.width,tt.height,tt.depth),D)if(v.layerUpdates.size>0){let X=kd(tt.width,tt.height,v.format,v.type);for(let K of v.layerUpdates){let ft=tt.data.subarray(K*X/tt.data.BYTES_PER_ELEMENT,(K+1)*X/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,tt.width,tt.height,1,gt,Lt,ft)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,gt,Lt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,tt.width,tt.height,tt.depth,0,gt,Lt,tt.data);else if(v.isData3DTexture)Xt?(Me&&e.texStorage3D(i.TEXTURE_3D,rt,Nt,tt.width,tt.height,tt.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,gt,Lt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,tt.width,tt.height,tt.depth,0,gt,Lt,tt.data);else if(v.isFramebufferTexture){if(Me)if(Xt)e.texStorage2D(i.TEXTURE_2D,rt,Nt,tt.width,tt.height);else{let X=tt.width,K=tt.height;for(let ft=0;ft<rt;ft++)e.texImage2D(i.TEXTURE_2D,ft,Nt,X,K,0,gt,Lt,null),X>>=1,K>>=1}}else if(jt.length>0){if(Xt&&Me){let X=Ct(jt[0]);e.texStorage2D(i.TEXTURE_2D,rt,Nt,X.width,X.height)}for(let X=0,K=jt.length;X<K;X++)xt=jt[X],Xt?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,gt,Lt,xt):e.texImage2D(i.TEXTURE_2D,X,Nt,gt,Lt,xt);v.generateMipmaps=!1}else if(Xt){if(Me){let X=Ct(tt);e.texStorage2D(i.TEXTURE_2D,rt,Nt,X.width,X.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Lt,tt)}else e.texImage2D(i.TEXTURE_2D,0,Nt,gt,Lt,tt);g(v)&&f(J),Et.__version=$.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function it(T,v,O){if(v.image.length!==6)return;let J=_e(T,v),j=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);let $=n.get(j);if(j.version!==$.__version||J===!0){e.activeTexture(i.TEXTURE0+O);let Et=ie.getPrimaries(ie.workingColorSpace),ct=v.colorSpace===Ui?null:ie.getPrimaries(v.colorSpace),mt=v.colorSpace===Ui||Et===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let ne=v.isCompressedTexture||v.image[0].isCompressedTexture,tt=v.image[0]&&v.image[0].isDataTexture,gt=[];for(let K=0;K<6;K++)!ne&&!tt?gt[K]=_(v.image[K],!0,s.maxCubemapSize):gt[K]=tt?v.image[K].image:v.image[K],gt[K]=be(v,gt[K]);let Lt=gt[0],Nt=r.convert(v.format,v.colorSpace),xt=r.convert(v.type),jt=E(v.internalFormat,Nt,xt,v.colorSpace),Xt=v.isVideoTexture!==!0,Me=$.__version===void 0||J===!0,D=j.dataReady,rt=L(v,Lt);$t(i.TEXTURE_CUBE_MAP,v);let X;if(ne){Xt&&Me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,rt,jt,Lt.width,Lt.height);for(let K=0;K<6;K++){X=gt[K].mipmaps;for(let ft=0;ft<X.length;ft++){let ht=X[ft];v.format!==Fn?Nt!==null?Xt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,0,0,ht.width,ht.height,Nt,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,jt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,0,0,ht.width,ht.height,Nt,xt,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,jt,ht.width,ht.height,0,Nt,xt,ht.data)}}}else{if(X=v.mipmaps,Xt&&Me){X.length>0&&rt++;let K=Ct(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,rt,jt,K.width,K.height)}for(let K=0;K<6;K++)if(tt){Xt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,gt[K].width,gt[K].height,Nt,xt,gt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,jt,gt[K].width,gt[K].height,0,Nt,xt,gt[K].data);for(let ft=0;ft<X.length;ft++){let kt=X[ft].image[K].image;Xt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,0,0,kt.width,kt.height,Nt,xt,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,jt,kt.width,kt.height,0,Nt,xt,kt.data)}}else{Xt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Nt,xt,gt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,jt,Nt,xt,gt[K]);for(let ft=0;ft<X.length;ft++){let ht=X[ft];Xt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,0,0,Nt,xt,ht.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,jt,Nt,xt,ht.image[K])}}}g(v)&&f(i.TEXTURE_CUBE_MAP),$.__version=j.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function bt(T,v,O,J,j,$){let Et=r.convert(O.format,O.colorSpace),ct=r.convert(O.type),mt=E(O.internalFormat,Et,ct,O.colorSpace),ne=n.get(v),tt=n.get(O);if(tt.__renderTarget=v,!ne.__hasExternalTextures){let gt=Math.max(1,v.width>>$),Lt=Math.max(1,v.height>>$);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,$,mt,gt,Lt,v.depth,0,Et,ct,null):e.texImage2D(j,$,mt,gt,Lt,0,Et,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Qt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,j,tt.__webglTexture,0,Kt(v)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,j,tt.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(T,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){let J=v.depthTexture,j=J&&J.isDepthTexture?J.type:null,$=y(v.stencilBuffer,j),Et=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=Kt(v);Qt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,$,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,$,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,$,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,T)}else{let J=v.textures;for(let j=0;j<J.length;j++){let $=J[j],Et=r.convert($.format,$.colorSpace),ct=r.convert($.type),mt=E($.internalFormat,Et,ct,$.colorSpace),ne=Kt(v);O&&Qt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,mt,v.width,v.height):Qt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,mt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,mt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(v.depthTexture);J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Q(v.depthTexture,0);let j=J.__webglTexture,$=Kt(v);if(v.depthTexture.format===Qs)Qt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(v.depthTexture.format===rr)Qt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function zt(T){let v=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){let J=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),J){let j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,J.removeEventListener("dispose",j)};J.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=J}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Dt(v.__webglFramebuffer,T)}else if(O){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]===void 0)v.__webglDepthbuffer[J]=i.createRenderbuffer(),at(v.__webglDepthbuffer[J],T,!1);else{let j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),at(v.__webglDepthbuffer,T,!1);else{let J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Zt(T,v,O){let J=n.get(T);v!==void 0&&bt(J.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&zt(T)}function Ce(T){let v=T.texture,O=n.get(T),J=n.get(v);T.addEventListener("dispose",C);let j=T.textures,$=T.isWebGLCubeRenderTarget===!0,Et=j.length>1;if(Et||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=v.version,o.memory.textures++),$){O.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ct]=[];for(let mt=0;mt<v.mipmaps.length;mt++)O.__webglFramebuffer[ct][mt]=i.createFramebuffer()}else O.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ct=0;ct<v.mipmaps.length;ct++)O.__webglFramebuffer[ct]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Et)for(let ct=0,mt=j.length;ct<mt;ct++){let ne=n.get(j[ct]);ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Qt(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ct=0;ct<j.length;ct++){let mt=j[ct];O.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ct]);let ne=r.convert(mt.format,mt.colorSpace),tt=r.convert(mt.type),gt=E(mt.internalFormat,ne,tt,mt.colorSpace,T.isXRRenderTarget===!0),Lt=Kt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,gt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,O.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),at(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),$t(i.TEXTURE_CUBE_MAP,v);for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0)for(let mt=0;mt<v.mipmaps.length;mt++)bt(O.__webglFramebuffer[ct][mt],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,mt);else bt(O.__webglFramebuffer[ct],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);g(v)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ct=0,mt=j.length;ct<mt;ct++){let ne=j[ct],tt=n.get(ne);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),$t(i.TEXTURE_2D,ne),bt(O.__webglFramebuffer,T,ne,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),g(ne)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ct=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,J.__webglTexture),$t(ct,v),v.mipmaps&&v.mipmaps.length>0)for(let mt=0;mt<v.mipmaps.length;mt++)bt(O.__webglFramebuffer[mt],T,v,i.COLOR_ATTACHMENT0,ct,mt);else bt(O.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,ct,0);g(v)&&f(ct),e.unbindTexture()}T.depthBuffer&&zt(T)}function ee(T){let v=T.textures;for(let O=0,J=v.length;O<J;O++){let j=v[O];if(g(j)){let $=M(T),Et=n.get(j).__webglTexture;e.bindTexture($,Et),f($),e.unbindTexture()}}}let Ne=[],F=[];function Sn(T){if(T.samples>0){if(Qt(T)===!1){let v=T.textures,O=T.width,J=T.height,j=i.COLOR_BUFFER_BIT,$=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(T),ct=v.length>1;if(ct)for(let mt=0;mt<v.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let mt=0;mt<v.length;mt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[mt]);let ne=n.get(v[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,O,J,0,0,O,J,j,i.NEAREST),c===!0&&(Ne.length=0,F.length=0,Ne.push(i.COLOR_ATTACHMENT0+mt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ne.push($),F.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ne))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let mt=0;mt<v.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[mt]);let ne=n.get(v[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,ne,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Kt(T){return Math.min(s.maxSamples,T.samples)}function Qt(T){let v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Pt(T){let v=o.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function be(T,v){let O=T.colorSpace,J=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==gr&&O!==Ui&&(ie.getTransfer(O)===xe?(J!==Fn||j!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function Ct(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=k,this.setTexture2D=Q,this.setTexture2DArray=Y,this.setTexture3D=nt,this.setTextureCube=q,this.rebindTextures=Zt,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Sn,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Qt}function qy(i,t){function e(n,s=Ui){let r,o=ie.getTransfer(s);if(n===di)return i.UNSIGNED_BYTE;if(n===Nh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ef)return i.BYTE;if(n===nf)return i.SHORT;if(n===eo)return i.UNSIGNED_SHORT;if(n===Uh)return i.INT;if(n===fs)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===ro)return i.HALF_FLOAT;if(n===rf)return i.ALPHA;if(n===of)return i.RGB;if(n===Fn)return i.RGBA;if(n===af)return i.LUMINANCE;if(n===cf)return i.LUMINANCE_ALPHA;if(n===Qs)return i.DEPTH_COMPONENT;if(n===rr)return i.DEPTH_STENCIL;if(n===Oh)return i.RED;if(n===Bh)return i.RED_INTEGER;if(n===lf)return i.RG;if(n===zh)return i.RG_INTEGER;if(n===kh)return i.RGBA_INTEGER;if(n===sa||n===ra||n===oa||n===aa)if(o===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_l||n===yl||n===vl||n===Ml)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sl||n===bl||n===El)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sl||n===bl)return o===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===El)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wl||n===Tl||n===Al||n===Rl||n===Cl||n===Il||n===Pl||n===Ll||n===Dl||n===Ul||n===Nl||n===Fl||n===Ol||n===Bl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Al)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Il)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ll)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ul)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ol)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ca||n===zl||n===kl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ca)return o===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hf||n===Hl||n===Vl||n===Gl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ca)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Hl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var rh=class extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ce=class extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yy={type:"move"},Kr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),f=this._getHandJoint(l,_);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),d=.02,x=.005;l.inputState.pinching&&p>d+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=d-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yy)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},$y=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zy=`
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

}`,oh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new fn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new wn({vertexShader:$y,fragmentShader:Zy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ft(new Yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ah=class extends ki{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,p=null,d=null,x=null,_=new oh,g=e.getContextAttributes(),f=null,M=null,E=[],y=[],L=new dt,R=null,C=new Xe;C.viewport=new De;let P=new Xe;P.viewport=new De;let w=[C,P],S=new rh,I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let it=E[Z];return it===void 0&&(it=new Kr,E[Z]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Z){let it=E[Z];return it===void 0&&(it=new Kr,E[Z]=it),it.getGripSpace()},this.getHand=function(Z){let it=E[Z];return it===void 0&&(it=new Kr,E[Z]=it),it.getHandSpace()};function B(Z){let it=y.indexOf(Z.inputSource);if(it===-1)return;let bt=E[it];bt!==void 0&&(bt.update(Z.inputSource,Z.frame,l||o),bt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Q);for(let Z=0;Z<E.length;Z++){let it=y[Z];it!==null&&(y[Z]=null,E[Z].disconnect(it))}I=null,k=null,_.reset(),t.setRenderTarget(f),d=null,p=null,u=null,s=null,M=null,_e.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Q),g.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){let it={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new fi(d.framebufferWidth,d.framebufferHeight,{format:Fn,type:di,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let it=null,bt=null,at=null;g.depth&&(at=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=g.stencil?rr:Qs,bt=g.stencil?sr:fs);let Dt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=new XRWebGLBinding(s,e),p=u.createProjectionLayer(Dt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),M=new fi(p.textureWidth,p.textureHeight,{format:Fn,type:di,depthTexture:new Sa(p.textureWidth,p.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),_e.setContext(s),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Q(Z){for(let it=0;it<Z.removed.length;it++){let bt=Z.removed[it],at=y.indexOf(bt);at>=0&&(y[at]=null,E[at].disconnect(bt))}for(let it=0;it<Z.added.length;it++){let bt=Z.added[it],at=y.indexOf(bt);if(at===-1){for(let zt=0;zt<E.length;zt++)if(zt>=y.length){y.push(bt),at=zt;break}else if(y[zt]===null){y[zt]=bt,at=zt;break}if(at===-1)break}let Dt=E[at];Dt&&Dt.connect(bt)}}let Y=new A,nt=new A;function q(Z,it,bt){Y.setFromMatrixPosition(it.matrixWorld),nt.setFromMatrixPosition(bt.matrixWorld);let at=Y.distanceTo(nt),Dt=it.projectionMatrix.elements,zt=bt.projectionMatrix.elements,Zt=Dt[14]/(Dt[10]-1),Ce=Dt[14]/(Dt[10]+1),ee=(Dt[9]+1)/Dt[5],Ne=(Dt[9]-1)/Dt[5],F=(Dt[8]-1)/Dt[0],Sn=(zt[8]+1)/zt[0],Kt=Zt*F,Qt=Zt*Sn,Pt=at/(-F+Sn),be=Pt*-F;if(it.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(be),Z.translateZ(Pt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Dt[10]===-1)Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let Ct=Zt+Pt,T=Ce+Pt,v=Kt-be,O=Qt+(at-be),J=ee*Ce/T*Ct,j=Ne*Ce/T*Ct;Z.projectionMatrix.makePerspective(v,O,J,j,Ct,T),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ot(Z,it){it===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(it.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let it=Z.near,bt=Z.far;_.texture!==null&&(_.depthNear>0&&(it=_.depthNear),_.depthFar>0&&(bt=_.depthFar)),S.near=P.near=C.near=it,S.far=P.far=C.far=bt,(I!==S.near||k!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,k=S.far),C.layers.mask=Z.layers.mask|2,P.layers.mask=Z.layers.mask|4,S.layers.mask=C.layers.mask|P.layers.mask;let at=Z.parent,Dt=S.cameras;ot(S,at);for(let zt=0;zt<Dt.length;zt++)ot(Dt[zt],at);Dt.length===2?q(S,C,P):S.projectionMatrix.copy(C.projectionMatrix),pt(Z,S,at)};function pt(Z,it,bt){bt===null?Z.matrix.copy(it.matrixWorld):(Z.matrix.copy(bt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(it.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=or*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&d===null))return c},this.setFoveation=function(Z){c=Z,p!==null&&(p.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let At=null;function $t(Z,it){if(h=it.getViewerPose(l||o),x=it,h!==null){let bt=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let at=!1;bt.length!==S.cameras.length&&(S.cameras.length=0,at=!0);for(let zt=0;zt<bt.length;zt++){let Zt=bt[zt],Ce=null;if(d!==null)Ce=d.getViewport(Zt);else{let Ne=u.getViewSubImage(p,Zt);Ce=Ne.viewport,zt===0&&(t.setRenderTargetTextures(M,Ne.colorTexture,p.ignoreDepthValues?void 0:Ne.depthStencilTexture),t.setRenderTarget(M))}let ee=w[zt];ee===void 0&&(ee=new Xe,ee.layers.enable(zt),ee.viewport=new De,w[zt]=ee),ee.matrix.fromArray(Zt.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Zt.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),zt===0&&(S.matrix.copy(ee.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),at===!0&&S.cameras.push(ee)}let Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){let zt=u.getDepthInformation(bt[0]);zt&&zt.isValid&&zt.texture&&_.init(t,zt,s.renderState)}}for(let bt=0;bt<E.length;bt++){let at=y[bt],Dt=E[bt];at!==null&&Dt!==void 0&&Dt.update(at,it,l||o)}At&&At(Z,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),x=null}let _e=new gf;_e.setAnimationLoop($t),this.setAnimationLoop=function(Z){At=Z},this.dispose=function(){}}},as=new pn,Jy=new de;function Ky(i,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,mf(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,M,E,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),u(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),p(g,f),f.isMeshPhysicalMaterial&&d(g,f,y)):f.isMeshMatcapMaterial?(r(g,f),x(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),_(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?c(g,f,M,E):f.isSpriteMaterial?l(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===en&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===en&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let M=t.get(f),E=M.envMap,y=M.envMapRotation;E&&(g.envMap.value=E,as.copy(y),as.x*=-1,as.y*=-1,as.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),g.envMapRotation.value.setFromMatrix4(Jy.makeRotationFromEuler(as)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,M,E){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*M,g.scale.value=E*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function l(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function p(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function d(g,f,M){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===en&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,f){f.matcap&&(g.matcap.value=f.matcap)}function _(g,f){let M=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Qy(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,E){let y=E.program;n.uniformBlockBinding(M,y)}function l(M,E){let y=s[M.id];y===void 0&&(x(M),y=h(M),s[M.id]=y,M.addEventListener("dispose",g));let L=E.program;n.updateUBOMapping(M,L);let R=t.render.frame;r[M.id]!==R&&(p(M),r[M.id]=R)}function h(M){let E=u();M.__bindingPointIndex=E;let y=i.createBuffer(),L=M.__size,R=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,L,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,y),y}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){let E=s[M.id],y=M.uniforms,L=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let R=0,C=y.length;R<C;R++){let P=Array.isArray(y[R])?y[R]:[y[R]];for(let w=0,S=P.length;w<S;w++){let I=P[w];if(d(I,R,w,L)===!0){let k=I.__offset,B=Array.isArray(I.value)?I.value:[I.value],G=0;for(let Q=0;Q<B.length;Q++){let Y=B[Q],nt=_(Y);typeof Y=="number"||typeof Y=="boolean"?(I.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,k+G,I.__data)):Y.isMatrix3?(I.__data[0]=Y.elements[0],I.__data[1]=Y.elements[1],I.__data[2]=Y.elements[2],I.__data[3]=0,I.__data[4]=Y.elements[3],I.__data[5]=Y.elements[4],I.__data[6]=Y.elements[5],I.__data[7]=0,I.__data[8]=Y.elements[6],I.__data[9]=Y.elements[7],I.__data[10]=Y.elements[8],I.__data[11]=0):(Y.toArray(I.__data,G),G+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,E,y,L){let R=M.value,C=E+"_"+y;if(L[C]===void 0)return typeof R=="number"||typeof R=="boolean"?L[C]=R:L[C]=R.clone(),!0;{let P=L[C];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return L[C]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function x(M){let E=M.uniforms,y=0,L=16;for(let C=0,P=E.length;C<P;C++){let w=Array.isArray(E[C])?E[C]:[E[C]];for(let S=0,I=w.length;S<I;S++){let k=w[S],B=Array.isArray(k.value)?k.value:[k.value];for(let G=0,Q=B.length;G<Q;G++){let Y=B[G],nt=_(Y),q=y%L,ot=q%nt.boundary,pt=q+ot;y+=ot,pt!==0&&L-pt<nt.storage&&(y+=L-pt),k.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=nt.storage}}}let R=y%L;return R>0&&(y+=L-R),M.__size=y,M.__cache={},this}function _(M){let E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),E}function g(M){let E=M.target;E.removeEventListener("dispose",g);let y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function f(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}var ba=class{constructor(t={}){let{canvas:e=n0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let x=new Uint32Array(4),_=new Int32Array(4),g=null,f=null,M=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ae,this.toneMapping=Bi,this.toneMappingExposure=1;let y=this,L=!1,R=0,C=0,P=null,w=-1,S=null,I=new De,k=new De,B=null,G=new Rt(0),Q=0,Y=e.width,nt=e.height,q=1,ot=null,pt=null,At=new De(0,0,Y,nt),$t=new De(0,0,Y,nt),_e=!1,Z=new no,it=!1,bt=!1,at=new de,Dt=new de,zt=new A,Zt=new De,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function Ne(){return P===null?q:1}let F=n;function Sn(b,U){return e.getContext(b,U)}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ph}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ht,!1),F===null){let U="webgl2";if(F=Sn(U,b),F===null)throw Sn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Kt,Qt,Pt,be,Ct,T,v,O,J,j,$,Et,ct,mt,ne,tt,gt,Lt,Nt,xt,jt,Xt,Me,D;function rt(){Kt=new p_(F),Kt.init(),Xt=new qy(F,Kt),Qt=new c_(F,Kt,t,Xt),Pt=new Gy(F,Kt),Qt.reverseDepthBuffer&&p&&Pt.buffers.depth.setReversed(!0),be=new x_(F),Ct=new Iy,T=new Xy(F,Kt,Pt,Ct,Qt,Xt,be),v=new h_(y),O=new f_(y),J=new E0(F),Me=new o_(F,J),j=new m_(F,J,be,Me),$=new y_(F,j,J,be),Nt=new __(F,Qt,T),tt=new l_(Ct),Et=new Cy(y,v,O,Kt,Qt,Me,tt),ct=new Ky(y,Ct),mt=new Ly,ne=new By(Kt),Lt=new r_(y,v,O,Pt,$,d,c),gt=new Hy(y,$,Qt),D=new Qy(F,be,Qt,Pt),xt=new a_(F,Kt,be),jt=new g_(F,Kt,be),be.programs=Et.programs,y.capabilities=Qt,y.extensions=Kt,y.properties=Ct,y.renderLists=mt,y.shadowMap=gt,y.state=Pt,y.info=be}rt();let X=new ah(y,F);this.xr=X,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let b=Kt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Kt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(Y,nt,!1))},this.getSize=function(b){return b.set(Y,nt)},this.setSize=function(b,U,z=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=b,nt=U,e.width=Math.floor(b*q),e.height=Math.floor(U*q),z===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(Y*q,nt*q).floor()},this.setDrawingBufferSize=function(b,U,z){Y=b,nt=U,q=z,e.width=Math.floor(b*z),e.height=Math.floor(U*z),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(I)},this.getViewport=function(b){return b.copy(At)},this.setViewport=function(b,U,z,H){b.isVector4?At.set(b.x,b.y,b.z,b.w):At.set(b,U,z,H),Pt.viewport(I.copy(At).multiplyScalar(q).round())},this.getScissor=function(b){return b.copy($t)},this.setScissor=function(b,U,z,H){b.isVector4?$t.set(b.x,b.y,b.z,b.w):$t.set(b,U,z,H),Pt.scissor(k.copy($t).multiplyScalar(q).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(b){Pt.setScissorTest(_e=b)},this.setOpaqueSort=function(b){ot=b},this.setTransparentSort=function(b){pt=b},this.getClearColor=function(b){return b.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(b=!0,U=!0,z=!0){let H=0;if(b){let N=!1;if(P!==null){let et=P.texture.format;N=et===kh||et===zh||et===Bh}if(N){let et=P.texture.type,ut=et===di||et===fs||et===eo||et===sr||et===Nh||et===Fh,vt=Lt.getClearColor(),Mt=Lt.getClearAlpha(),Ot=vt.r,Ht=vt.g,St=vt.b;ut?(x[0]=Ot,x[1]=Ht,x[2]=St,x[3]=Mt,F.clearBufferuiv(F.COLOR,0,x)):(_[0]=Ot,_[1]=Ht,_[2]=St,_[3]=Mt,F.clearBufferiv(F.COLOR,0,_))}else H|=F.COLOR_BUFFER_BIT}U&&(H|=F.DEPTH_BUFFER_BIT),z&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),mt.dispose(),ne.dispose(),Ct.dispose(),v.dispose(),O.dispose(),$.dispose(),Me.dispose(),D.dispose(),Et.dispose(),X.dispose(),X.removeEventListener("sessionstart",Uu),X.removeEventListener("sessionend",Nu),es.stop()};function K(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let b=be.autoReset,U=gt.enabled,z=gt.autoUpdate,H=gt.needsUpdate,N=gt.type;rt(),be.autoReset=b,gt.enabled=U,gt.autoUpdate=z,gt.needsUpdate=H,gt.type=N}function ht(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function kt(b){let U=b.target;U.removeEventListener("dispose",kt),Le(U)}function Le(b){Qe(b),Ct.remove(b)}function Qe(b){let U=Ct.get(b).programs;U!==void 0&&(U.forEach(function(z){Et.releaseProgram(z)}),b.isShaderMaterial&&Et.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,z,H,N,et){U===null&&(U=Ce);let ut=N.isMesh&&N.matrixWorld.determinant()<0,vt=Qp(b,U,z,H,N);Pt.setMaterial(H,ut);let Mt=z.index,Ot=1;if(H.wireframe===!0){if(Mt=j.getWireframeAttribute(z),Mt===void 0)return;Ot=2}let Ht=z.drawRange,St=z.attributes.position,se=Ht.start*Ot,Se=(Ht.start+Ht.count)*Ot;et!==null&&(se=Math.max(se,et.start*Ot),Se=Math.min(Se,(et.start+et.count)*Ot)),Mt!==null?(se=Math.max(se,0),Se=Math.min(Se,Mt.count)):St!=null&&(se=Math.max(se,0),Se=Math.min(Se,St.count));let Ee=Se-se;if(Ee<0||Ee===1/0)return;Me.setup(N,H,vt,z,Mt);let dn,he=xt;if(Mt!==null&&(dn=J.get(Mt),he=jt,he.setIndex(dn)),N.isMesh)H.wireframe===!0?(Pt.setLineWidth(H.wireframeLinewidth*Ne()),he.setMode(F.LINES)):he.setMode(F.TRIANGLES);else if(N.isLine){let wt=H.linewidth;wt===void 0&&(wt=1),Pt.setLineWidth(wt*Ne()),N.isLineSegments?he.setMode(F.LINES):N.isLineLoop?he.setMode(F.LINE_LOOP):he.setMode(F.LINE_STRIP)}else N.isPoints?he.setMode(F.POINTS):N.isSprite&&he.setMode(F.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)he.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))he.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let wt=N._multiDrawStarts,ei=N._multiDrawCounts,ue=N._multiDrawCount,Pn=Mt?J.get(Mt).bytesPerElement:1,Ps=Ct.get(H).currentProgram.getUniforms();for(let xn=0;xn<ue;xn++)Ps.setValue(F,"_gl_DrawID",xn),he.render(wt[xn]/Pn,ei[xn])}else if(N.isInstancedMesh)he.renderInstances(se,Ee,N.count);else if(z.isInstancedBufferGeometry){let wt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ei=Math.min(z.instanceCount,wt);he.renderInstances(se,Ee,ei)}else he.render(se,Ee)};function me(b,U,z){b.transparent===!0&&b.side===$e&&b.forceSinglePass===!1?(b.side=en,b.needsUpdate=!0,Ro(b,U,z),b.side=zi,b.needsUpdate=!0,Ro(b,U,z),b.side=$e):Ro(b,U,z)}this.compile=function(b,U,z=null){z===null&&(z=b),f=ne.get(z),f.init(U),E.push(f),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),b!==z&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();let H=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let et=N.material;if(et)if(Array.isArray(et))for(let ut=0;ut<et.length;ut++){let vt=et[ut];me(vt,z,N),H.add(vt)}else me(et,z,N),H.add(et)}),E.pop(),f=null,H},this.compileAsync=function(b,U,z=null){let H=this.compile(b,U,z);return new Promise(N=>{function et(){if(H.forEach(function(ut){Ct.get(ut).currentProgram.isReady()&&H.delete(ut)}),H.size===0){N(b);return}setTimeout(et,10)}Kt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let In=null;function ti(b){In&&In(b)}function Uu(){es.stop()}function Nu(){es.start()}let es=new gf;es.setAnimationLoop(ti),typeof self<"u"&&es.setContext(self),this.setAnimationLoop=function(b){In=b,X.setAnimationLoop(b),b===null?es.stop():es.start()},X.addEventListener("sessionstart",Uu),X.addEventListener("sessionend",Nu),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,U,P),f=ne.get(b,E.length),f.init(U),E.push(f),Dt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Z.setFromProjectionMatrix(Dt),bt=this.localClippingEnabled,it=tt.init(this.clippingPlanes,bt),g=mt.get(b,M.length),g.init(),M.push(g),X.enabled===!0&&X.isPresenting===!0){let et=y.xr.getDepthSensingMesh();et!==null&&Tc(et,U,-1/0,y.sortObjects)}Tc(b,U,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(ot,pt),ee=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,ee&&Lt.addToRenderList(g,b),this.info.render.frame++,it===!0&&tt.beginShadows();let z=f.state.shadowsArray;gt.render(z,b,U),it===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=g.opaque,N=g.transmissive;if(f.setupLights(),U.isArrayCamera){let et=U.cameras;if(N.length>0)for(let ut=0,vt=et.length;ut<vt;ut++){let Mt=et[ut];Ou(H,N,b,Mt)}ee&&Lt.render(b);for(let ut=0,vt=et.length;ut<vt;ut++){let Mt=et[ut];Fu(g,b,Mt,Mt.viewport)}}else N.length>0&&Ou(H,N,b,U),ee&&Lt.render(b),Fu(g,b,U);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(y,b,U),Me.resetDefaultState(),w=-1,S=null,E.pop(),E.length>0?(f=E[E.length-1],it===!0&&tt.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function Tc(b,U,z,H){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Z.intersectsSprite(b)){H&&Zt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Dt);let ut=$.update(b),vt=b.material;vt.visible&&g.push(b,ut,vt,z,Zt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Z.intersectsObject(b))){let ut=$.update(b),vt=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Zt.copy(b.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Zt.copy(ut.boundingSphere.center)),Zt.applyMatrix4(b.matrixWorld).applyMatrix4(Dt)),Array.isArray(vt)){let Mt=ut.groups;for(let Ot=0,Ht=Mt.length;Ot<Ht;Ot++){let St=Mt[Ot],se=vt[St.materialIndex];se&&se.visible&&g.push(b,ut,se,z,Zt.z,St)}}else vt.visible&&g.push(b,ut,vt,z,Zt.z,null)}}let et=b.children;for(let ut=0,vt=et.length;ut<vt;ut++)Tc(et[ut],U,z,H)}function Fu(b,U,z,H){let N=b.opaque,et=b.transmissive,ut=b.transparent;f.setupLightsView(z),it===!0&&tt.setGlobalState(y.clippingPlanes,z),H&&Pt.viewport(I.copy(H)),N.length>0&&Ao(N,U,z),et.length>0&&Ao(et,U,z),ut.length>0&&Ao(ut,U,z),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function Ou(b,U,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[H.id]===void 0&&(f.state.transmissionRenderTarget[H.id]=new fi(1,1,{generateMipmaps:!0,type:Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float")?ro:di,minFilter:ds,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));let et=f.state.transmissionRenderTarget[H.id],ut=H.viewport||I;et.setSize(ut.z,ut.w);let vt=y.getRenderTarget();y.setRenderTarget(et),y.getClearColor(G),Q=y.getClearAlpha(),Q<1&&y.setClearColor(16777215,.5),y.clear(),ee&&Lt.render(z);let Mt=y.toneMapping;y.toneMapping=Bi;let Ot=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),f.setupLightsView(H),it===!0&&tt.setGlobalState(y.clippingPlanes,H),Ao(b,z,H),T.updateMultisampleRenderTarget(et),T.updateRenderTargetMipmap(et),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let St=0,se=U.length;St<se;St++){let Se=U[St],Ee=Se.object,dn=Se.geometry,he=Se.material,wt=Se.group;if(he.side===$e&&Ee.layers.test(H.layers)){let ei=he.side;he.side=en,he.needsUpdate=!0,Bu(Ee,z,H,dn,he,wt),he.side=ei,he.needsUpdate=!0,Ht=!0}}Ht===!0&&(T.updateMultisampleRenderTarget(et),T.updateRenderTargetMipmap(et))}y.setRenderTarget(vt),y.setClearColor(G,Q),Ot!==void 0&&(H.viewport=Ot),y.toneMapping=Mt}function Ao(b,U,z){let H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,et=b.length;N<et;N++){let ut=b[N],vt=ut.object,Mt=ut.geometry,Ot=H===null?ut.material:H,Ht=ut.group;vt.layers.test(z.layers)&&Bu(vt,U,z,Mt,Ot,Ht)}}function Bu(b,U,z,H,N,et){b.onBeforeRender(y,U,z,H,N,et),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(y,U,z,H,b,et),N.transparent===!0&&N.side===$e&&N.forceSinglePass===!1?(N.side=en,N.needsUpdate=!0,y.renderBufferDirect(z,U,H,N,b,et),N.side=zi,N.needsUpdate=!0,y.renderBufferDirect(z,U,H,N,b,et),N.side=$e):y.renderBufferDirect(z,U,H,N,b,et),b.onAfterRender(y,U,z,H,N,et)}function Ro(b,U,z){U.isScene!==!0&&(U=Ce);let H=Ct.get(b),N=f.state.lights,et=f.state.shadowsArray,ut=N.state.version,vt=Et.getParameters(b,N.state,et,U,z),Mt=Et.getProgramCacheKey(vt),Ot=H.programs;H.environment=b.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(b.isMeshStandardMaterial?O:v).get(b.envMap||H.environment),H.envMapRotation=H.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ot===void 0&&(b.addEventListener("dispose",kt),Ot=new Map,H.programs=Ot);let Ht=Ot.get(Mt);if(Ht!==void 0){if(H.currentProgram===Ht&&H.lightsStateVersion===ut)return ku(b,vt),Ht}else vt.uniforms=Et.getUniforms(b),b.onBeforeCompile(vt,y),Ht=Et.acquireProgram(vt,Mt),Ot.set(Mt,Ht),H.uniforms=vt.uniforms;let St=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(St.clippingPlanes=tt.uniform),ku(b,vt),H.needsLights=tm(b),H.lightsStateVersion=ut,H.needsLights&&(St.ambientLightColor.value=N.state.ambient,St.lightProbe.value=N.state.probe,St.directionalLights.value=N.state.directional,St.directionalLightShadows.value=N.state.directionalShadow,St.spotLights.value=N.state.spot,St.spotLightShadows.value=N.state.spotShadow,St.rectAreaLights.value=N.state.rectArea,St.ltc_1.value=N.state.rectAreaLTC1,St.ltc_2.value=N.state.rectAreaLTC2,St.pointLights.value=N.state.point,St.pointLightShadows.value=N.state.pointShadow,St.hemisphereLights.value=N.state.hemi,St.directionalShadowMap.value=N.state.directionalShadowMap,St.directionalShadowMatrix.value=N.state.directionalShadowMatrix,St.spotShadowMap.value=N.state.spotShadowMap,St.spotLightMatrix.value=N.state.spotLightMatrix,St.spotLightMap.value=N.state.spotLightMap,St.pointShadowMap.value=N.state.pointShadowMap,St.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Ht,H.uniformsList=null,Ht}function zu(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=tr.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function ku(b,U){let z=Ct.get(b);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Qp(b,U,z,H,N){U.isScene!==!0&&(U=Ce),T.resetTextureUnits();let et=U.fog,ut=H.isMeshStandardMaterial?U.environment:null,vt=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:gr,Mt=(H.isMeshStandardMaterial?O:v).get(H.envMap||ut),Ot=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ht=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),St=!!z.morphAttributes.position,se=!!z.morphAttributes.normal,Se=!!z.morphAttributes.color,Ee=Bi;H.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ee=y.toneMapping);let dn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,he=dn!==void 0?dn.length:0,wt=Ct.get(H),ei=f.state.lights;if(it===!0&&(bt===!0||b!==S)){let bn=b===S&&H.id===w;tt.setState(H,b,bn)}let ue=!1;H.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==ei.state.version||wt.outputColorSpace!==vt||N.isBatchedMesh&&wt.batching===!1||!N.isBatchedMesh&&wt.batching===!0||N.isBatchedMesh&&wt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&wt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&wt.instancing===!1||!N.isInstancedMesh&&wt.instancing===!0||N.isSkinnedMesh&&wt.skinning===!1||!N.isSkinnedMesh&&wt.skinning===!0||N.isInstancedMesh&&wt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&wt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&wt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&wt.instancingMorph===!1&&N.morphTexture!==null||wt.envMap!==Mt||H.fog===!0&&wt.fog!==et||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==tt.numPlanes||wt.numIntersection!==tt.numIntersection)||wt.vertexAlphas!==Ot||wt.vertexTangents!==Ht||wt.morphTargets!==St||wt.morphNormals!==se||wt.morphColors!==Se||wt.toneMapping!==Ee||wt.morphTargetsCount!==he)&&(ue=!0):(ue=!0,wt.__version=H.version);let Pn=wt.currentProgram;ue===!0&&(Pn=Ro(H,U,N));let Ps=!1,xn=!1,Fr=!1,we=Pn.getUniforms(),Gn=wt.uniforms;if(Pt.useProgram(Pn.program)&&(Ps=!0,xn=!0,Fr=!0),H.id!==w&&(w=H.id,xn=!0),Ps||S!==b){Pt.buffers.depth.getReversed()?(at.copy(b.projectionMatrix),s0(at),r0(at),we.setValue(F,"projectionMatrix",at)):we.setValue(F,"projectionMatrix",b.projectionMatrix),we.setValue(F,"viewMatrix",b.matrixWorldInverse);let Ti=we.map.cameraPosition;Ti!==void 0&&Ti.setValue(F,zt.setFromMatrixPosition(b.matrixWorld)),Qt.logarithmicDepthBuffer&&we.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&we.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,xn=!0,Fr=!0)}if(N.isSkinnedMesh){we.setOptional(F,N,"bindMatrix"),we.setOptional(F,N,"bindMatrixInverse");let bn=N.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),we.setValue(F,"boneTexture",bn.boneTexture,T))}N.isBatchedMesh&&(we.setOptional(F,N,"batchingTexture"),we.setValue(F,"batchingTexture",N._matricesTexture,T),we.setOptional(F,N,"batchingIdTexture"),we.setValue(F,"batchingIdTexture",N._indirectTexture,T),we.setOptional(F,N,"batchingColorTexture"),N._colorsTexture!==null&&we.setValue(F,"batchingColorTexture",N._colorsTexture,T));let Or=z.morphAttributes;if((Or.position!==void 0||Or.normal!==void 0||Or.color!==void 0)&&Nt.update(N,z,Pn),(xn||wt.receiveShadow!==N.receiveShadow)&&(wt.receiveShadow=N.receiveShadow,we.setValue(F,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Gn.envMap.value=Mt,Gn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Gn.envMapIntensity.value=U.environmentIntensity),xn&&(we.setValue(F,"toneMappingExposure",y.toneMappingExposure),wt.needsLights&&jp(Gn,Fr),et&&H.fog===!0&&ct.refreshFogUniforms(Gn,et),ct.refreshMaterialUniforms(Gn,H,q,nt,f.state.transmissionRenderTarget[b.id]),tr.upload(F,zu(wt),Gn,T)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(tr.upload(F,zu(wt),Gn,T),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&we.setValue(F,"center",N.center),we.setValue(F,"modelViewMatrix",N.modelViewMatrix),we.setValue(F,"normalMatrix",N.normalMatrix),we.setValue(F,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let bn=H.uniformsGroups;for(let Ti=0,Ai=bn.length;Ti<Ai;Ti++){let Hu=bn[Ti];D.update(Hu,Pn),D.bind(Hu,Pn)}}return Pn}function jp(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function tm(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,U,z){Ct.get(b.texture).__webglTexture=U,Ct.get(b.depthTexture).__webglTexture=z;let H=Ct.get(b);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||Kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){let z=Ct.get(b);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,z=0){P=b,R=U,C=z;let H=!0,N=null,et=!1,ut=!1;if(b){let Mt=Ct.get(b);if(Mt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(F.FRAMEBUFFER,null),H=!1;else if(Mt.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(Mt.__hasExternalTextures)T.rebindTextures(b,Ct.get(b.texture).__webglTexture,Ct.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let St=b.depthTexture;if(Mt.__boundDepthTexture!==St){if(St!==null&&Ct.has(St)&&(b.width!==St.image.width||b.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}let Ot=b.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(ut=!0);let Ht=Ct.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ht[U])?N=Ht[U][z]:N=Ht[U],et=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?N=Ct.get(b).__webglMultisampledFramebuffer:Array.isArray(Ht)?N=Ht[z]:N=Ht,I.copy(b.viewport),k.copy(b.scissor),B=b.scissorTest}else I.copy(At).multiplyScalar(q).floor(),k.copy($t).multiplyScalar(q).floor(),B=_e;if(Pt.bindFramebuffer(F.FRAMEBUFFER,N)&&H&&Pt.drawBuffers(b,N),Pt.viewport(I),Pt.scissor(k),Pt.setScissorTest(B),et){let Mt=Ct.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Mt.__webglTexture,z)}else if(ut){let Mt=Ct.get(b.texture),Ot=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Mt.__webglTexture,z||0,Ot)}w=-1},this.readRenderTargetPixels=function(b,U,z,H,N,et,ut){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Ct.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ut!==void 0&&(vt=vt[ut]),vt){Pt.bindFramebuffer(F.FRAMEBUFFER,vt);try{let Mt=b.texture,Ot=Mt.format,Ht=Mt.type;if(!Qt.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-H&&z>=0&&z<=b.height-N&&F.readPixels(U,z,H,N,Xt.convert(Ot),Xt.convert(Ht),et)}finally{let Mt=P!==null?Ct.get(P).__webglFramebuffer:null;Pt.bindFramebuffer(F.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(b,U,z,H,N,et,ut){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Ct.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ut!==void 0&&(vt=vt[ut]),vt){let Mt=b.texture,Ot=Mt.format,Ht=Mt.type;if(!Qt.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-H&&z>=0&&z<=b.height-N){Pt.bindFramebuffer(F.FRAMEBUFFER,vt);let St=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,St),F.bufferData(F.PIXEL_PACK_BUFFER,et.byteLength,F.STREAM_READ),F.readPixels(U,z,H,N,Xt.convert(Ot),Xt.convert(Ht),0);let se=P!==null?Ct.get(P).__webglFramebuffer:null;Pt.bindFramebuffer(F.FRAMEBUFFER,se);let Se=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await i0(F,Se,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,St),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,et),F.deleteBuffer(St),F.deleteSync(Se),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,z=0){b.isTexture!==!0&&(Yr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);let H=Math.pow(2,-z),N=Math.floor(b.image.width*H),et=Math.floor(b.image.height*H),ut=U!==null?U.x:0,vt=U!==null?U.y:0;T.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,z,0,0,ut,vt,N,et),Pt.unbindTexture()},this.copyTextureToTexture=function(b,U,z=null,H=null,N=0){b.isTexture!==!0&&(Yr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,b=arguments[1],U=arguments[2],N=arguments[3]||0,z=null);let et,ut,vt,Mt,Ot,Ht,St,se,Se,Ee=b.isCompressedTexture?b.mipmaps[N]:b.image;z!==null?(et=z.max.x-z.min.x,ut=z.max.y-z.min.y,vt=z.isBox3?z.max.z-z.min.z:1,Mt=z.min.x,Ot=z.min.y,Ht=z.isBox3?z.min.z:0):(et=Ee.width,ut=Ee.height,vt=Ee.depth||1,Mt=0,Ot=0,Ht=0),H!==null?(St=H.x,se=H.y,Se=H.z):(St=0,se=0,Se=0);let dn=Xt.convert(U.format),he=Xt.convert(U.type),wt;U.isData3DTexture?(T.setTexture3D(U,0),wt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(T.setTexture2DArray(U,0),wt=F.TEXTURE_2D_ARRAY):(T.setTexture2D(U,0),wt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let ei=F.getParameter(F.UNPACK_ROW_LENGTH),ue=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Pn=F.getParameter(F.UNPACK_SKIP_PIXELS),Ps=F.getParameter(F.UNPACK_SKIP_ROWS),xn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ee.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ee.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Mt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ot),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ht);let Fr=b.isDataArrayTexture||b.isData3DTexture,we=U.isDataArrayTexture||U.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let Gn=Ct.get(b),Or=Ct.get(U),bn=Ct.get(Gn.__renderTarget),Ti=Ct.get(Or.__renderTarget);Pt.bindFramebuffer(F.READ_FRAMEBUFFER,bn.__webglFramebuffer),Pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Ai=0;Ai<vt;Ai++)Fr&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ct.get(b).__webglTexture,N,Ht+Ai),b.isDepthTexture?(we&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ct.get(U).__webglTexture,N,Se+Ai),F.blitFramebuffer(Mt,Ot,et,ut,St,se,et,ut,F.DEPTH_BUFFER_BIT,F.NEAREST)):we?F.copyTexSubImage3D(wt,N,St,se,Se+Ai,Mt,Ot,et,ut):F.copyTexSubImage2D(wt,N,St,se,Se+Ai,Mt,Ot,et,ut);Pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else we?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(wt,N,St,se,Se,et,ut,vt,dn,he,Ee.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(wt,N,St,se,Se,et,ut,vt,dn,Ee.data):F.texSubImage3D(wt,N,St,se,Se,et,ut,vt,dn,he,Ee):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,N,St,se,et,ut,dn,he,Ee.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,N,St,se,Ee.width,Ee.height,dn,Ee.data):F.texSubImage2D(F.TEXTURE_2D,N,St,se,et,ut,dn,he,Ee);F.pixelStorei(F.UNPACK_ROW_LENGTH,ei),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ue),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Pn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ps),F.pixelStorei(F.UNPACK_SKIP_IMAGES,xn),N===0&&U.generateMipmaps&&F.generateMipmap(wt),Pt.unbindTexture()},this.copyTextureToTexture3D=function(b,U,z=null,H=null,N=0){return b.isTexture!==!0&&(Yr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,b=arguments[2],U=arguments[3],N=arguments[4]||0),Yr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,U,z,H,N)},this.initRenderTarget=function(b){Ct.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),Pt.unbindTexture()},this.resetState=function(){R=0,C=0,P=null,Pt.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};var Ea=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Rt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},cr=class extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ch=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Xl,this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},on=new A,wa=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Nn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Nn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Nn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Nn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Fe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ps=class extends mi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},qs,Vr=new A,Ys=new A,$s=new A,Zs=new dt,Gr=new dt,Mf=new de,Jo=new A,Wr=new A,Ko=new A,Hd=new dt,el=new dt,Vd=new dt,lr=class extends ke{constructor(t=new ps){if(super(),this.isSprite=!0,this.type="Sprite",qs===void 0){qs=new Ie;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ch(e,5);qs.setIndex([0,1,2,0,2,3]),qs.setAttribute("position",new wa(n,3,0,!1)),qs.setAttribute("uv",new wa(n,2,3,!1))}this.geometry=qs,this.material=t,this.center=new dt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ys.setFromMatrixScale(this.matrixWorld),Mf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),$s.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ys.multiplyScalar(-$s.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Qo(Jo.set(-.5,-.5,0),$s,o,Ys,s,r),Qo(Wr.set(.5,-.5,0),$s,o,Ys,s,r),Qo(Ko.set(.5,.5,0),$s,o,Ys,s,r),Hd.set(0,0),el.set(1,0),Vd.set(1,1);let a=t.ray.intersectTriangle(Jo,Wr,Ko,!1,Vr);if(a===null&&(Qo(Wr.set(-.5,.5,0),$s,o,Ys,s,r),el.set(0,1),a=t.ray.intersectTriangle(Jo,Ko,Wr,!1,Vr),a===null))return;let c=t.ray.origin.distanceTo(Vr);c<t.near||c>t.far||e.push({distance:c,point:Vr.clone(),uv:Ni.getInterpolation(Vr,Jo,Wr,Ko,Hd,el,Vd,new dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Qo(i,t,e,n,s,r){Zs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Gr.x=r*Zs.x-s*Zs.y,Gr.y=s*Zs.x+r*Zs.y):Gr.copy(Zs),i.copy(t),i.x+=Gr.x,i.y+=Gr.y,i.applyMatrix4(Mf)}var lh=class extends fn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=vn,h=vn,u,p){super(null,o,a,c,l,h,s,r,u,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ta=class extends Fe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Js=new de,Gd=new de,jo=[],Wd=new pi,jy=new de,Xr=new Ft,qr=new Hi,hr=class extends Ft{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ta(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,jy)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new pi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Js),Wd.copy(t.boundingBox).applyMatrix4(Js),this.boundingBox.union(Wd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Js),qr.copy(t.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(qr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Xr.geometry=this.geometry,Xr.material=this.material,Xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qr.copy(this.boundingSphere),qr.applyMatrix4(n),t.ray.intersectsSphere(qr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Js),Gd.multiplyMatrices(n,Js),Xr.matrixWorld=Gd,Xr.raycast(t,jo);for(let o=0,a=jo.length;o<a;o++){let c=jo[o];c.instanceId=r,c.object=this,e.push(c)}jo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ta(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new lh(new Float32Array(s*this.count),s,this.count,Oh,qn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var gi=class extends mi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xd=new de,hh=new pa,ta=new Hi,ea=new A,Vi=class extends ke{constructor(t=new Ie,e=new gi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(s),ta.radius+=r,t.ray.intersectsSphere(ta)===!1)return;Xd.copy(s).invert(),hh.copy(t.ray).applyMatrix4(Xd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let p=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let x=p,_=d;x<_;x++){let g=l.getX(x);ea.fromBufferAttribute(u,g),qd(ea,g,c,s,t,e,this)}}else{let p=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let x=p,_=d;x<_;x++)ea.fromBufferAttribute(u,x),qd(ea,x,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function qd(i,t,e,n,s,r,o){let a=hh.distanceSqToPoint(i);if(a<e){let c=new A;hh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var xi=class extends fn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],p=n[s+1]-h,d=(o-h)/p;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new dt:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new A,s=[],r=[],o=[],a=new A,c=new de;for(let d=0;d<=t;d++){let x=d/t;s[d]=this.getTangentAt(x,new A)}r[0]=new A,o[0]=new A;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),p<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(We(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,x))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(We(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let x=1;x<=t;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],d*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},io=class extends Tn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new dt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=c-this.aX,d=l-this.aY;c=p*h-d*u+this.aX,l=p*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},uh=class extends io{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Wh(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let p=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;p*=h,d*=h,s(o,a,p,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var na=new A,nl=new Wh,il=new Wh,sl=new Wh,dh=class extends Tn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(na.subVectors(s[0],s[1]).add(s[0]),l=na);let u=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(na.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=na),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(p),d),g=Math.pow(p.distanceToSquared(h),d);_<1e-4&&(_=1),x<1e-4&&(x=_),g<1e-4&&(g=_),nl.initNonuniformCatmullRom(l.x,u.x,p.x,h.x,x,_,g),il.initNonuniformCatmullRom(l.y,u.y,p.y,h.y,x,_,g),sl.initNonuniformCatmullRom(l.z,u.z,p.z,h.z,x,_,g)}else this.curveType==="catmullrom"&&(nl.initCatmullRom(l.x,u.x,p.x,h.x,this.tension),il.initCatmullRom(l.y,u.y,p.y,h.y,this.tension),sl.initCatmullRom(l.z,u.z,p.z,h.z,this.tension));return n.set(nl.calc(c),il.calc(c),sl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Yd(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function tv(i,t){let e=1-i;return e*e*t}function ev(i,t){return 2*(1-i)*i*t}function nv(i,t){return i*i*t}function Qr(i,t,e,n){return tv(i,t)+ev(i,e)+nv(i,n)}function iv(i,t){let e=1-i;return e*e*e*t}function sv(i,t){let e=1-i;return 3*e*e*i*t}function rv(i,t){return 3*(1-i)*i*i*t}function ov(i,t){return i*i*i*t}function jr(i,t,e,n,s){return iv(i,t)+sv(i,e)+rv(i,n)+ov(i,s)}var Aa=class extends Tn{constructor(t=new dt,e=new dt,n=new dt,s=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new dt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(jr(t,s.x,r.x,o.x,a.x),jr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fh=class extends Tn{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(jr(t,s.x,r.x,o.x,a.x),jr(t,s.y,r.y,o.y,a.y),jr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ra=class extends Tn{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ph=class extends Tn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ca=class extends Tn{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Qr(t,s.x,r.x,o.x),Qr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mh=class extends Tn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Qr(t,s.x,r.x,o.x),Qr(t,s.y,r.y,o.y),Qr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ia=class extends Tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Yd(a,c.x,l.x,h.x,u.x),Yd(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new dt().fromArray(s))}return this}},$d=Object.freeze({__proto__:null,ArcCurve:uh,CatmullRomCurve3:dh,CubicBezierCurve:Aa,CubicBezierCurve3:fh,EllipseCurve:io,LineCurve:Ra,LineCurve3:ph,QuadraticBezierCurve:Ca,QuadraticBezierCurve3:mh,SplineCurve:Ia}),gh=class extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $d[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new $d[s.type]().fromJSON(s))}return this}},xh=class extends gh{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ra(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ca(this.currentPoint.clone(),new dt(t,e),new dt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Aa(this.currentPoint.clone(),new dt(t,e),new dt(n,s),new dt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ia(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new io(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},_h=class i extends Ie{constructor(t=[new dt(0,-.5),new dt(.5,0),new dt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=We(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new A,p=new dt,d=new A,x=new A,_=new A,g=0,f=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,f=t[M+1].y-t[M].y,d.x=f*1,d.y=-g,d.z=f*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[M+1].x-t[M].x,f=t[M+1].y-t[M].y,d.x=f*1,d.y=-g,d.z=f*0,x.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(x)}for(let M=0;M<=e;M++){let E=n+M*h*s,y=Math.sin(E),L=Math.cos(E);for(let R=0;R<=t.length-1;R++){u.x=t[R].x*y,u.y=t[R].y,u.z=t[R].x*L,o.push(u.x,u.y,u.z),p.x=M/e,p.y=R/(t.length-1),a.push(p.x,p.y);let C=c[3*R+0]*y,P=c[3*R+1],w=c[3*R+0]*L;l.push(C,P,w)}}for(let M=0;M<e;M++)for(let E=0;E<t.length-1;E++){let y=E+M*t.length,L=y,R=y+t.length,C=y+t.length+1,P=y+1;r.push(L,R,P),r.push(C,P,R)}this.setIndex(r),this.setAttribute("position",new re(o,3)),this.setAttribute("uv",new re(a,2)),this.setAttribute("normal",new re(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Pa=class i extends _h{constructor(t=1,e=1,n=4,s=8){let r=new xh;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}};var qe=class i extends Ie{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],p=[],d=[],x=0,_=[],g=n/2,f=0;M(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(p,3)),this.setAttribute("uv",new re(d,2));function M(){let y=new A,L=new A,R=0,C=(e-t)/n;for(let P=0;P<=r;P++){let w=[],S=P/r,I=S*(e-t)+t;for(let k=0;k<=s;k++){let B=k/s,G=B*c+a,Q=Math.sin(G),Y=Math.cos(G);L.x=I*Q,L.y=-S*n+g,L.z=I*Y,u.push(L.x,L.y,L.z),y.set(Q,C,Y).normalize(),p.push(y.x,y.y,y.z),d.push(B,1-S),w.push(x++)}_.push(w)}for(let P=0;P<s;P++)for(let w=0;w<r;w++){let S=_[w][P],I=_[w+1][P],k=_[w+1][P+1],B=_[w][P+1];(t>0||w!==0)&&(h.push(S,I,B),R+=3),(e>0||w!==r-1)&&(h.push(I,k,B),R+=3)}l.addGroup(f,R,0),f+=R}function E(y){let L=x,R=new dt,C=new A,P=0,w=y===!0?t:e,S=y===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,g*S,0),p.push(0,S,0),d.push(.5,.5),x++;let I=x;for(let k=0;k<=s;k++){let G=k/s*c+a,Q=Math.cos(G),Y=Math.sin(G);C.x=w*Y,C.y=g*S,C.z=w*Q,u.push(C.x,C.y,C.z),p.push(0,S,0),R.x=Q*.5+.5,R.y=Y*.5*S+.5,d.push(R.x,R.y),x++}for(let k=0;k<s;k++){let B=L+k,G=I+k;y===!0?h.push(G,G+1,B):h.push(G+1,G,B),P+=3}l.addGroup(f,P,y===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Mn=class i extends qe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},so=class i extends Ie{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let E=new A,y=new A,L=new A;for(let R=0;R<e.length;R+=3)d(e[R+0],E),d(e[R+1],y),d(e[R+2],L),c(E,y,L,M)}function c(M,E,y,L){let R=L+1,C=[];for(let P=0;P<=R;P++){C[P]=[];let w=M.clone().lerp(y,P/R),S=E.clone().lerp(y,P/R),I=R-P;for(let k=0;k<=I;k++)k===0&&P===R?C[P][k]=w:C[P][k]=w.clone().lerp(S,k/I)}for(let P=0;P<R;P++)for(let w=0;w<2*(R-P)-1;w++){let S=Math.floor(w/2);w%2===0?(p(C[P][S+1]),p(C[P+1][S]),p(C[P][S])):(p(C[P][S+1]),p(C[P+1][S+1]),p(C[P+1][S]))}}function l(M){let E=new A;for(let y=0;y<r.length;y+=3)E.x=r[y+0],E.y=r[y+1],E.z=r[y+2],E.normalize().multiplyScalar(M),r[y+0]=E.x,r[y+1]=E.y,r[y+2]=E.z}function h(){let M=new A;for(let E=0;E<r.length;E+=3){M.x=r[E+0],M.y=r[E+1],M.z=r[E+2];let y=g(M)/2/Math.PI+.5,L=f(M)/Math.PI+.5;o.push(y,1-L)}x(),u()}function u(){for(let M=0;M<o.length;M+=6){let E=o[M+0],y=o[M+2],L=o[M+4],R=Math.max(E,y,L),C=Math.min(E,y,L);R>.9&&C<.1&&(E<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),L<.2&&(o[M+4]+=1))}}function p(M){r.push(M.x,M.y,M.z)}function d(M,E){let y=M*3;E.x=t[y+0],E.y=t[y+1],E.z=t[y+2]}function x(){let M=new A,E=new A,y=new A,L=new A,R=new dt,C=new dt,P=new dt;for(let w=0,S=0;w<r.length;w+=9,S+=6){M.set(r[w+0],r[w+1],r[w+2]),E.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),R.set(o[S+0],o[S+1]),C.set(o[S+2],o[S+3]),P.set(o[S+4],o[S+5]),L.copy(M).add(E).add(y).divideScalar(3);let I=g(L);_(R,S+0,M,I),_(C,S+2,E,I),_(P,S+4,y,I)}}function _(M,E,y,L){L<0&&M.x===1&&(o[E]=M.x-1),y.x===0&&y.z===0&&(o[E]=L/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},ms=class i extends so{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Gi=class i extends so{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},La=class i extends so{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},$n=class i extends Ie{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,p=(e-t)/s,d=new A,x=new dt;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){let f=r+g/n*o;d.x=u*Math.cos(f),d.y=u*Math.sin(f),c.push(d.x,d.y,d.z),l.push(0,0,1),x.x=(d.x/e+1)/2,x.y=(d.y/e+1)/2,h.push(x.x,x.y)}u+=p}for(let _=0;_<s;_++){let g=_*(n+1);for(let f=0;f<n;f++){let M=f+g,E=M,y=M+n+1,L=M+n+2,R=M+1;a.push(E,y,R),a.push(y,L,R)}}this.setIndex(a),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ve=class i extends Ie{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new A,p=new A,d=[],x=[],_=[],g=[];for(let f=0;f<=n;f++){let M=[],E=f/n,y=0;f===0&&o===0?y=.5/e:f===n&&c===Math.PI&&(y=-.5/e);for(let L=0;L<=e;L++){let R=L/e;u.x=-t*Math.cos(s+R*r)*Math.sin(o+E*a),u.y=t*Math.cos(o+E*a),u.z=t*Math.sin(s+R*r)*Math.sin(o+E*a),x.push(u.x,u.y,u.z),p.copy(u).normalize(),_.push(p.x,p.y,p.z),g.push(R+y,1-E),M.push(l++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){let E=h[f][M+1],y=h[f][M],L=h[f+1][M],R=h[f+1][M+1];(f!==0||o>0)&&d.push(E,y,R),(f!==n-1||c<Math.PI)&&d.push(y,L,R)}this.setIndex(d),this.setAttribute("position",new re(x,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var On=class i extends Ie{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new A,u=new A,p=new A;for(let d=0;d<=n;d++)for(let x=0;x<=s;x++){let _=x/s*r,g=d/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),p.subVectors(u,h).normalize(),c.push(p.x,p.y,p.z),l.push(x/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let x=1;x<=s;x++){let _=(s+1)*d+x-1,g=(s+1)*(d-1)+x-1,f=(s+1)*(d-1)+x,M=(s+1)*d+x;o.push(_,g,M),o.push(g,f,M)}this.setIndex(o),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Yt=class extends mi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uf,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ia(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function av(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ur=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},yh=class extends ur{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xu,endingEnd:Xu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case qu:r=t,a=2*e-n;break;case Yu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case qu:o=t,c=2*n-e;break;case Yu:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,d=this._weightNext,x=(n-e)/(s-e),_=x*x,g=_*x,f=-p*g+2*p*_-p*x,M=(1+p)*g+(-1.5-2*p)*_+(-.5+p)*x+1,E=(-1-d)*g+(1.5+d)*_+.5*x,y=d*g-d*_;for(let L=0;L!==a;++L)r[L]=f*o[h+L]+M*o[l+L]+E*o[c+L]+y*o[u+L];return r}},vh=class extends ur{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let p=0;p!==a;++p)r[p]=o[l+p]*u+o[c+p]*h;return r}},Mh=class extends ur{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Bn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ia(e,this.TimeBufferType),this.values=ia(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ia(t.times,Array),values:ia(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Mh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new yh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case la:e=this.InterpolantFactoryMethodDiscrete;break;case Wl:e=this.InterpolantFactoryMethodLinear;break;case Rc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return la;case this.InterpolantFactoryMethodLinear:return Wl;case this.InterpolantFactoryMethodSmooth:return Rc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&av(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Rc,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,p=u-n,d=u+n;for(let x=0;x!==n;++x){let _=e[u+x];if(_!==e[p+x]||_!==e[d+x]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,p=o*n;for(let d=0;d!==n;++d)e[p+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Wl;var gs=class extends Bn{constructor(t,e,n){super(t,e,n)}};gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=la;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Sh=class extends Bn{};Sh.prototype.ValueTypeName="color";var bh=class extends Bn{};bh.prototype.ValueTypeName="number";var Eh=class extends ur{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)nn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Da=class extends Bn{InterpolantFactoryMethodLinear(t){return new Eh(this.times,this.values,this.getValueSize(),t)}};Da.prototype.ValueTypeName="quaternion";Da.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends Bn{constructor(t,e,n){super(t,e,n)}};xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=la;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var wh=class extends Bn{};wh.prototype.ValueTypeName="vector";var Th=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=l.length;u<p;u+=2){let d=l[u],x=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null}}},cv=new Th,Ah=class{constructor(t){this.manager=t!==void 0?t:cv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ah.DEFAULT_MATERIAL_NAME="__DEFAULT";var dr=class extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},fr=class extends dr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},rl=new de,Zd=new A,Jd=new A,Ua=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new no,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Zd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zd),Jd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jd),e.updateMatrixWorld(),rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Rh=class extends Ua{constructor(){super(new Xe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=or*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},pr=class extends dr{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Rh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ch=class extends Ua{constructor(){super(new va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},mr=class extends dr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new Ch}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Na=class extends dr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Fa=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Kd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Kd(){return performance.now()}var Xh="\\[\\]\\.:\\/",lv=new RegExp("["+Xh+"]","g"),qh="[^"+Xh+"]",hv="[^"+Xh.replace("\\.","")+"]",uv=/((?:WC+[\/:])*)/.source.replace("WC",qh),dv=/(WCOD+)?/.source.replace("WCOD",hv),fv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qh),pv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qh),mv=new RegExp("^"+uv+dv+fv+pv+"$"),gv=["material","materials","bones","map"],Ih=class{constructor(t,e,n){let s=n||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Te=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lv,"")}static parseTrackName(t){let e=mv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);gv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=Ih;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xM=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ph}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ph);var m={scene:null,camera:null,renderer:null,player:null,time:{t:.3,day:1,elevation:1,night:0},res:{iron:0,silicon:0,ice:0,titanium:0},buildings:[],nodes:[],enemies:[],colonists:[],colony:{pop:0,housing:0,o2:0,food:0,water:0,support:0,powerProd:0,powerUse:0,deficit:!1},upgrades:{},stats:{mined:{iron:0,silicon:0,ice:0,titanium:0},built:{},kills:0,arrived:0,crafted:{}},chapter:0,terraform:0,ended:!1,storm:0,menuOpen:!1,locked:!1,started:!1,debug:!1,colliders:null,raining:!1,events:{map:{},on(i,t){var e;((e=this.map)[i]||(e[i]=[])).push(t)},emit(i,t){(this.map[i]||[]).forEach(e=>e(t))}}},_i={iron:{name:"\u94C1\u77FF",icon:"\u2B22",color:"#d08a5e"},silicon:{name:"\u7845\u6676",icon:"\u25C6",color:"#f1dca0"},ice:{name:"\u6C34\u51B0",icon:"\u2744",color:"#a9dcff"},titanium:{name:"\u949B\u77FF",icon:"\u2726",color:"#b9a6ff"}};function _s(i){for(let t in i)if((m.res[t]||0)<i[t])return!1;return!0}function Ha(i){for(let t in i)m.res[t]-=i[t]}function Va(i){return Object.entries(i).map(([t,e])=>`<span class="cost ${m.res[t]>=e?"":"lack"}">${_i[t].icon} ${_i[t].name} ${e}</span>`).join(" ")}var ka=class{constructor(t=16){this.cell=t,this.map=new Map}key(t,e){return t*73856093^e*19349663}add(t){let e=this.cell,n=Math.floor((t.x-t.r)/e),s=Math.floor((t.x+t.r)/e),r=Math.floor((t.z-t.r)/e),o=Math.floor((t.z+t.r)/e);t._keys=[];for(let a=n;a<=s;a++)for(let c=r;c<=o;c++){let l=this.key(a,c);this.map.has(l)||this.map.set(l,[]),this.map.get(l).push(t),t._keys.push(l)}return t}remove(t){if(!(!t||!t._keys)){for(let e of t._keys){let n=this.map.get(e);if(!n)continue;let s=n.indexOf(t);s>=0&&n.splice(s,1)}t._keys=null}}query(t,e){return this.map.get(this.key(Math.floor(t/this.cell),Math.floor(e/this.cell)))||[]}overlaps(t,e,n){let s=this.cell,r=new Set;for(let o=Math.floor((t-n)/s);o<=Math.floor((t+n)/s);o++)for(let a=Math.floor((e-n)/s);a<=Math.floor((e+n)/s);a++){let c=this.map.get(this.key(o,a));if(c)for(let l of c){if(r.has(l))continue;r.add(l);let h=l.x-t,u=l.z-e,p=l.r+n;if(h*h+u*u<p*p)return l}}return null}};function Ga(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Wa(i){let t=Ga(i),e=[...Array(256).keys()];for(let c=255;c>0;c--){let l=Math.floor(t()*(c+1));[e[c],e[l]]=[e[l],e[c]]}let n=new Uint8Array(512);for(let c=0;c<512;c++)n[c]=e[c&255];let s=[1,-1,1,-1,1,-1,0,0],r=[1,1,-1,-1,0,0,1,-1],o=.5*(Math.sqrt(3)-1),a=(3-Math.sqrt(3))/6;return function(c,l){let h=0,u=0,p=0,d=(c+l)*o,x=Math.floor(c+d),_=Math.floor(l+d),g=(x+_)*a,f=c-(x-g),M=l-(_-g),E=f>M?1:0,y=f>M?0:1,L=f-E+a,R=M-y+a,C=f-1+2*a,P=M-1+2*a,w=x&255,S=_&255,I=.5-f*f-M*M;if(I>0){let G=n[w+n[S]]&7;I*=I,h=I*I*(s[G]*f+r[G]*M)}let k=.5-L*L-R*R;if(k>0){let G=n[w+E+n[S+y]]&7;k*=k,u=k*k*(s[G]*L+r[G]*R)}let B=.5-C*C-P*P;if(B>0){let G=n[w+1+n[S+1]]&7;B*=B,p=B*B*(s[G]*C+r[G]*P)}return 70*(h+u+p)}}function Yh(i,t,e,n=4,s=2,r=.5){let o=1,a=1,c=0,l=0;for(let h=0;h<n;h++)c+=o*i(t*a,e*a),l+=o,o*=r,a*=s;return c/l}var zn=(i,t,e)=>i<t?t:i>e?e:i,oe=(i,t,e)=>i+(t-i)*e,cn=(i,t,e)=>{let n=zn((e-i)/(t-i),0,1);return n*n*(3-2*n)};var yi={mars:{id:"mars",name:"\u706B\u661F",place:"\u4E4C\u6258\u90A6\u5E73\u539F",title:"\u65B0\u5BB6\u56ED",next:"europa",seed:2089,gravity:5.6,solar:1,terraformable:!0,craters:46,hills:46,ridges:14,detail:1.6,ground:{a:[.56,.25,.14],b:[.74,.4,.24],steep:[.36,.19,.13],low:[.42,.22,.16]},rockHSL:[.04,.45,.22],rock:9062960,sky:{dayTop:[.62,.42,.29],dayHor:[.9,.68,.5],setTop:[.17,.13,.15],setHor:[.58,.4,.33],nightTop:[.006,.008,.022],nightHor:[.035,.035,.055],halo:[.35,.58,.95],storm:[.62,.42,.28]},dust:16765088,enemy:[3808536,9054736,16730640],extras:"moons",storms:!0,intro:["2089 \u5E74\u3002","\u5730\u7403\u4F9D\u7136\u7F8E\u4E3D\uFF0C\u4F46\u5DF2\u7ECF\u592A\u62E5\u6324\u3001\u592A\u708E\u70ED\u3001\u592A\u75B2\u60EB\u3002","\u300C\u65B9\u821F\u8BA1\u5212\u300D\u628A\u4EBA\u7C7B\u7684\u672A\u6765\uFF0C\u62BC\u5728\u4E86\u4E00\u9897\u7EA2\u8272\u661F\u7403\u4E0A\u3002","\u7ECF\u8FC7\u4E03\u4E2A\u6708\u3001\u4E24\u4EBF\u4E24\u5343\u4E94\u767E\u4E07\u516C\u91CC\u7684\u822A\u884C\u2014\u2014","\u4F60\u7684\u7740\u9646\u8231\uFF0C\u5728\u4E4C\u6258\u90A6\u5E73\u539F\u7684\u6668\u5149\u4E2D\u843D\u5730\u3002",'\u4F60\u662F\u7B2C\u4E00\u4E2A\u3002<b style="color:#ff8a3d">\u4F46\u4E0D\u4F1A\u662F\u6700\u540E\u4E00\u4E2A\u3002</b>']},europa:{id:"europa",name:"\u6728\u536B\u4E8C\xB7\u6B27\u7F57\u5DF4",place:"\u5EB7\u7EB3\u9A6C\u62C9\u6DF7\u6C8C\u533A",title:"\u51B0\u4E0B\u4E4B\u6D77",next:"kepler",seed:1610,gravity:3.6,solar:.55,terraformable:!1,craters:14,hills:16,ridges:26,detail:1.1,ground:{a:[.8,.84,.88],b:[.93,.95,.97],steep:[.52,.36,.3],low:[.62,.72,.82]},rockHSL:[.58,.2,.62],rock:12110040,sky:{dayTop:[.02,.025,.05],dayHor:[.16,.18,.26],setTop:[.01,.012,.03],setHor:[.1,.1,.16],nightTop:[.004,.005,.012],nightHor:[.02,.025,.04],halo:[.6,.7,.9],storm:[.5,.6,.7]},dust:14676223,enemy:[1454138,2788e3,4251903],extras:"jupiter",storms:!1,intro:["\u706B\u661F\u7684\u706F\u706B\uFF0C\u5DF2\u7ECF\u5728\u8EAB\u540E\u4EAE\u6210\u4E86\u4E00\u7247\u3002","\u800C\u4F60\uFF0C\u518D\u4E00\u6B21\u51FA\u53D1\u4E86\u3002","\u6728\u661F\u7684\u7B2C\u4E8C\u9897\u536B\u661F\u2014\u2014\u6B27\u7F57\u5DF4\u3002","\u5728\u5B83\u4E8C\u5341\u516C\u91CC\u539A\u7684\u51B0\u58F3\u4E4B\u4E0B\uFF0C\u662F\u4E00\u6574\u7247\u4ECE\u672A\u89C1\u8FC7\u9633\u5149\u7684\u6D77\u6D0B\u3002","\u6728\u661F\uFF0C\u50CF\u4E00\u8F6E\u5DE8\u5927\u7684\u6708\u4EAE\uFF0C\u60AC\u5728\u5730\u5E73\u7EBF\u4E0A\u3002",'<b style="color:#66e6ff">\u4EBA\u7C7B\u7684\u7B2C\u4E8C\u4E2A\u5BB6\uFF0C\u5728\u51B0\u4E0B\u3002</b>']},kepler:{id:"kepler",name:"\u5F00\u666E\u52D2-442b",place:"\u7FE1\u7FE0\u8C37\u5730",title:"\u53CC\u65E5\u4E4B\u5730",next:null,seed:442,gravity:7.2,solar:1.3,terraformable:!1,craters:8,hills:64,ridges:10,detail:2.2,ground:{a:[.18,.36,.3],b:[.32,.52,.34],steep:[.3,.24,.3],low:[.2,.26,.4]},rockHSL:[.75,.25,.3],rock:6969994,sky:{dayTop:[.3,.5,.78],dayHor:[.78,.86,.8],setTop:[.2,.12,.3],setHor:[.9,.5,.4],nightTop:[.01,.01,.04],nightHor:[.05,.04,.09],halo:[1,.6,.4],storm:[.6,.7,.6]},dust:13172696,enemy:[1976854,5939242,10551104],extras:"twinsuns",storms:!1,intro:["\u4E00\u5343\u4E8C\u767E\u5149\u5E74\u3002","\u51B7\u51BB\u8231\u91CC\u7684\u4E09\u767E\u5E74\uFF0C\u5BF9\u4F60\u53EA\u662F\u4E00\u573A\u68A6\u3002","\u8237\u7A97\u5916\uFF0C\u4E24\u9897\u592A\u9633\u6B63\u4ECE\u7D2B\u8272\u7684\u5C71\u810A\u540E\u5347\u8D77\u3002","\u8FD9\u91CC\u6709\u98CE\uFF0C\u6709\u4E91\uFF0C\u6709\u4F1A\u5728\u591C\u91CC\u53D1\u5149\u7684\u68EE\u6797\u3002","\u5F00\u666E\u52D2-442b\u2014\u2014\u4EBA\u7C7B\u7B2C\u4E00\u6B21\uFF0C\u6765\u5230\u53E6\u4E00\u9897\u6052\u661F\u7684\u8EAB\u8FB9\u3002",'<b style="color:#a0ff70">\u4ECE\u8FD9\u91CC\u5F00\u59CB\uFF0C\u4EBA\u7C7B\u6210\u4E3A\u4E86\u661F\u9645\u6587\u660E\u3002</b>']}},bf="starport-meta";function Xa(){try{return JSON.parse(localStorage.getItem(bf))||{}}catch{return{}}}function Ef(i){try{localStorage.setItem(bf,JSON.stringify(i))}catch{}}function wf(){try{for(let i of Object.keys(localStorage))i.startsWith("starport-")&&localStorage.removeItem(i)}catch{}}var Sf=new URLSearchParams(location.search).get("planet"),vi=Xa(),Ke=yi[Sf]?Sf:yi[vi.planet]?vi.planet:"mars",yt=yi[Ke],qa=Ke==="mars"?"starport-newhome-v1":"starport-planet-"+Ke;var sn=1400,le=sn/2,Xi=400,Zh=sn/Xi,Zn=Xi+1,oo=Wa(yt.seed),$a=Wa(yt.seed*7+3),Tf=Wa(yt.seed+42),vs=[],Jn,Wi,Za,ys,Ya;function xv(){let i=Ga(yt.seed);for(vs.push({x:150,z:-120,r:70,depth:16,rim:6});vs.length<yt.craters;){let t=(i()-.5)*(sn-260),e=(i()-.5)*(sn-260);if(Math.hypot(t,e)<130)continue;let n=10+Math.pow(i(),2.2)*85;vs.push({x:t,z:e,r:n,depth:n*(.18+i()*.12),rim:n*(.05+i()*.06)})}}var _v=0;function Af(i,t){let e=Yh(oo,i*.0016,t*.0016,5)*yt.hills,n=1-Math.abs($a(i*.0042,t*.0042));e+=n*n*n*yt.ridges,e+=Yh(Tf,i*.025,t*.025,3)*yt.detail;for(let s of vs){let r=i-s.x,o=t-s.z,a=r*r+o*o;if(a>s.r*s.r*4)continue;let c=Math.sqrt(a)/s.r;c<1&&(e-=s.depth*(1-c*c)),e+=s.rim*Math.exp(-(((c-1)/.28)**2))}return e}var Rf=0;function yv(i,t){let e=Af(i,t)-Rf,n=Math.hypot(i,t);e=oe(_v+Tf(i*.02,t*.02)*.6,e,cn(45,150,n));let s=Math.max(Math.abs(i),Math.abs(t)),r=le-200;if(s>r){let o=(s-r)/200;e+=o*o*160*(.65+.35*oo(i*.01,t*.01))}return e}function Ut(i,t){let e=zn((i+le)/Zh,0,Xi-.001),n=zn((t+le)/Zh,0,Xi-.001),s=Math.floor(e),r=Math.floor(n),o=e-s,a=n-r,c=Jn[r*Zn+s],l=Jn[r*Zn+s+1],h=Jn[(r+1)*Zn+s],u=Jn[(r+1)*Zn+s+1];return o+a<1?c+(l-c)*o+(h-c)*a:u+(h-u)*(1-o)+(l-u)*(1-a)}function ao(i,t,e=2){let n=Ut(i,t);return Math.max(Math.abs(Ut(i+e,t)-n),Math.abs(Ut(i-e,t)-n),Math.abs(Ut(i,t+e)-n),Math.abs(Ut(i,t-e)-n))/e}function Ja(i,t,e=60){let n=0;for(let s=.2;s<=e;s+=.25){let r=i.x+t.x*s,o=i.y+t.y*s,a=i.z+t.z*s;if(o<Ut(r,a)){let c=n,l=s;for(let h=0;h<8;h++){let u=(c+l)/2;i.y+t.y*u<Ut(i.x+t.x*u,i.z+t.z*u)?l=u:c=u}return{dist:l,point:new A(i.x+t.x*l,i.y+t.y*l,i.z+t.z*l)}}n=s}return null}function Cf(i){xv(),Rf=Af(0,0),Jn=new Float32Array(Zn*Zn),ys=new Yn(sn,sn,Xi,Xi),ys.rotateX(-Math.PI/2);let t=ys.attributes.position;for(let n=0;n<t.count;n++){let s=yv(t.getX(n),t.getZ(n));t.setY(n,s),Jn[n]=s}Wi=new Float32Array(t.count*3);let e=new Rt;for(let n=0;n<t.count;n++){let s=t.getX(n),r=t.getZ(n),o=Jn[n],a=n%Zn,c=n/Zn|0,l=Jn[c*Zn+Math.min(a+1,Xi)]-o,h=Jn[Math.min(c+1,Xi)*Zn+a]-o,u=zn(Math.hypot(l,h)/Zh*1.4,0,1),p=oo(s*.012,r*.012)*.5+.5,d=$a(s*.08,r*.08)*.5+.5,x=yt.ground.a,_=yt.ground.b,g=yt.ground.steep,f=yt.ground.low,M=oe(x[0],_[0],p),E=oe(x[1],_[1],p),y=oe(x[2],_[2],p);M*=.9+d*.18,E*=.9+d*.16,y*=.9+d*.14,M=oe(M,g[0],u),E=oe(E,g[1],u),y=oe(y,g[2],u);let L=cn(-4,-16,o);if(M=oe(M,f[0],L*.6),E=oe(E,f[1],L*.6),y=oe(y,f[2],L*.6),yt.id==="europa"){let R=Math.abs($a(s*.006,r*.006));if(R<.05){let C=1-R/.05;M=oe(M,.55,C*.7),E=oe(E,.32,C*.7),y=oe(y,.24,C*.7)}}e.setRGB(M,E,y,Ae),Wi[n*3]=e.r,Wi[n*3+1]=e.g,Wi[n*3+2]=e.b}return Za=new Fe(Wi.slice(),3),ys.setAttribute("color",Za),ys.computeVertexNormals(),Ya=new Ft(ys,new Yt({vertexColors:!0,roughness:.96,metalness:0,flatShading:!0})),Ya.receiveShadow=!0,i.add(Ya),vv(i),Ya}function vv(i){let t=Ga(99),e=new ms(1,0),n=e.attributes.position;for(let d=0;d<n.count;d++){let x=.75+t()*.5;n.setXYZ(d,n.getX(d)*x,n.getY(d)*x*.8,n.getZ(d)*x)}e.computeVertexNormals();let s=2600,r=new hr(e,new Yt({color:yt.rock,roughness:yt.id==="europa"?.3:.95,flatShading:!0}),s);r.castShadow=!0,r.receiveShadow=!0;let o=new de,a=new nn,c=new A,l=new A,h=new pn,u=new Rt,p=0;for(;p<s;){let d=(t()-.5)*(sn-120),x=(t()-.5)*(sn-120);if(Math.hypot(d,x)<22||oo(d*.01,x*.01)<-.1&&t()<.7)continue;let f=t()<.06?1.8+t()*2.5:.2+Math.pow(t(),2)*1.2;c.set(f*(.8+t()*.6),f*(.6+t()*.5),f*(.8+t()*.6)),h.set(t()*.5,t()*Math.PI*2,t()*.5),a.setFromEuler(h),l.set(d,Ut(d,x)+c.y*.25,x),o.compose(l,a,c),r.setMatrixAt(p,o),u.setHSL(yt.rockHSL[0]+t()*.02,yt.rockHSL[1]+t()*.2,yt.rockHSL[2]+t()*.14),r.setColorAt(p,u),f>1&&m.colliders.add({x:d,z:x,r:Math.max(c.x,c.z)*.85,kind:"rock"}),p++}i.add(r),yt.id==="kepler"&&bv(i,t)}var Mv=new Rt().setRGB(.3,.46,.2,Ae),Sv=new Rt().setRGB(.46,.5,.26,Ae),$h=new Rt().setRGB(.2,.38,.52,Ae);function Jh(i,t){let e=ys.attributes.position,n=Za.array,s=60+t*520;for(let r=0;r<e.count;r++){let o=e.getX(r),a=e.getZ(r),c=Jn[r],l=0;for(let d of i){let x=Math.hypot(o-d.x,a-d.z);l=Math.max(l,cn(s,s*.55,x))}let h=Wi[r*3],u=Wi[r*3+1],p=Wi[r*3+2];if(l>0){let d=$a(o*.03,a*.03)*.5+.5,x=l*zn(d*1.4-.1,0,1)*zn(t*1.5,0,1),_=d>.6?Mv:Sv;if(h=oe(h,_.r,x),u=oe(u,_.g,x),p=oe(p,_.b,x),c<-9&&t>.5){let g=l*cn(-9,-13,c)*cn(.5,1,t);h=oe(h,$h.r,g),u=oe(u,$h.g,g),p=oe(p,$h.b,g)}}n[r*3]=h,n[r*3+1]=u,n[r*3+2]=p}Za.needsUpdate=!0}function If(i=350){let t=document.createElement("canvas");t.width=t.height=i;let e=t.getContext("2d"),n=e.createImageData(i,i);for(let s=0;s<i;s++)for(let r=0;r<i;r++){let o=(r/i-.5)*sn,a=(s/i-.5)*sn,c=Ut(o,a),l=Ut(o+4,a+4)-c,h=zn(.55+c*.006-l*.08,.15,1),u=(s*i+r)*4,p=yt.ground.b;n.data[u]=255*p[0]*h,n.data[u+1]=255*p[1]*h,n.data[u+2]=255*p[2]*h,n.data[u+3]=255}return e.putImageData(n,0,0),t}var Kh=new Yt({color:8010400,emissive:4259776,emissiveIntensity:.1,roughness:.6,flatShading:!0});function bv(i,t){let e=new qe(.25,.45,1,6);e.translate(0,.5,0);let n=new ve(1,8,5,0,Math.PI*2,0,Math.PI/2),s=900,r=new hr(e,new Yt({color:14209208,roughness:.8,flatShading:!0}),s),o=new hr(n,Kh,s);r.castShadow=o.castShadow=!0;let a=new de,c=new nn,l=new A,h=new A,u=new Rt,p=0;for(;p<s;){let d=(t()-.5)*(sn-300),x=(t()-.5)*(sn-300);if(Math.hypot(d,x)<50||oo(d*.008,x*.008)<.05||ao(d,x,2)>.5)continue;let _=3+t()*9,g=1.5+t()*3,f=Ut(d,x);l.set(1+_*.05,_,1+_*.05),h.set(d,f-.2,x),c.identity(),a.compose(h,c,l),r.setMatrixAt(p,a),l.set(g,g*.5,g),h.set(d,f+_-.3,x),a.compose(h,c,l),o.setMatrixAt(p,a),u.setHSL(.72+t()*.2,.6,.4+t()*.2),o.setColorAt(p,u),m.colliders.add({x:d,z:x,r:.6,kind:"flora"}),p++}i.add(r,o)}var V={white:new Yt({color:15328474,roughness:.55,metalness:.1}),panel:new Yt({color:13222840,roughness:.6,metalness:.2}),metal:new Yt({color:8159110,roughness:.4,metalness:.7}),dark:new Yt({color:2895670,roughness:.5,metalness:.5}),orange:new Yt({color:16742954,roughness:.5,metalness:.1}),glass:new Yt({color:10474751,roughness:.05,metalness:.3,transparent:!0,opacity:.35}),window:new Yt({color:2240576,emissive:16761466,emissiveIntensity:0,roughness:.2}),solar:new Yt({color:1780826,roughness:.25,metalness:.8}),plant:new Yt({color:5221962,roughness:.8,flatShading:!0}),cyan:new Yt({color:1127236,emissive:3401471,emissiveIntensity:2}),red:new Yt({color:3342336,emissive:16722474,emissiveIntensity:3}),lamp:new Yt({color:3351057,emissive:16767392,emissiveIntensity:0}),found:new Yt({color:9143160,roughness:.9}),flame:new ye({color:16756832,transparent:!0,opacity:.85,blending:Ze,depthWrite:!1})};{let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d");t.fillStyle="#1d3266",t.fillRect(0,0,64,64),t.strokeStyle="#9fb4e0",t.lineWidth=1.5;for(let n=0;n<=64;n+=16)t.beginPath(),t.moveTo(n,0),t.lineTo(n,64),t.stroke(),t.beginPath(),t.moveTo(0,n),t.lineTo(64,n),t.stroke();let e=new xi(i);e.colorSpace=Ae,e.wrapS=e.wrapT=to,e.repeat.set(3,2),V.solar.map=e,V.solar.color.set(16777215)}function W(i,t,e=0,n=0,s=0,r){let o=new Ft(i,t);return o.position.set(e,n,s),o.castShadow=!0,o.receiveShadow=!0,r&&r.add(o),o}var Gt=(i,t,e)=>new Oe(i,t,e),Tt=(i,t,e,n=16)=>new qe(i,t,e,n),Ka;function Ms(){if(Ka)return Ka;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.6)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Ka=new xi(i),Ka}function fe(i,t,e,n=0,s=0,r=0){let o=new lr(new ps({map:Ms(),color:i,transparent:!0,blending:Ze,depthWrite:!1}));return o.scale.set(t,t,1),o.position.set(n,s,r),e&&e.add(o),o}function gn(i,t,e=!1){let n=W(e?Gt(t*2,4,t*2):Tt(t,t*1.05,4,20),V.found,0,-1.8,0,i);n.castShadow=!1,n.userData.found=!0}var Qa={solar(i,t){gn(i,2.2,!0),W(Tt(.18,.25,2.2),V.metal,0,1.1,0,i);let e=new ce;e.position.y=2.3,i.add(e);let n=W(Gt(4.2,.12,2.8),V.solar,0,0,0,e);W(Gt(4.4,.08,.1),V.metal,0,-.05,1.42,e),W(Gt(4.4,.08,.1),V.metal,0,-.05,-1.42,e),t.pivot=e,t.panel=n},oxygen(i,t){gn(i,3),W(Tt(1,1,3.6),V.white,-1.3,1.8,0,i),W(new ve(1,16,8,0,Math.PI*2,0,Math.PI/2),V.white,-1.3,3.6,0,i),W(Tt(1,1,3.6),V.white,1.3,1.8,0,i),W(new ve(1,16,8,0,Math.PI*2,0,Math.PI/2),V.white,1.3,3.6,0,i),W(Tt(1.02,1.02,.3),V.orange,-1.3,2.4,0,i),W(Tt(1.02,1.02,.3),V.orange,1.3,2.4,0,i),W(Gt(1.4,1.6,1.8),V.panel,0,.8,1,i),W(Tt(.12,.12,2.6),V.metal,0,3.2,0,i).rotation.z=Math.PI/2;let e=new ce;e.position.set(0,1.75,1.95),i.add(e);for(let n=0;n<4;n++){let s=W(Gt(.15,.7,.05),V.dark,0,0,0,e);s.rotation.z=n*Math.PI/2,s.position.set(Math.sin(n*Math.PI/2)*.3,Math.cos(n*Math.PI/2)*.3,0),s.rotation.z=-n*Math.PI/2}t.fan=e,t.light=fe(6741503,1.2,i,0,1.75,2)},habitat(i,t){gn(i,6.2),W(Tt(6,6,1.2,28),V.panel,0,.6,0,i);let e=W(new ve(5.8,28,12,0,Math.PI*2,0,Math.PI/2),V.white,0,1.2,0,i);e.scale.y=.85;let n=W(new qe(5.72,5.84,.7,28,1,!0),V.window,0,2,0,i);W(Tt(.1,.1,3),V.metal,0,7.4,0,i),t.tip=fe(16728128,1.2,i,0,8.9,0),W(Gt(2.2,2.6,2.8),V.white,0,1.3,6.4,i),W(Gt(1.2,2,.1),V.dark,0,1.1,7.82,i),W(Gt(2.3,.3,2.9),V.orange,0,2.7,6.4,i),t.windows=[n]},extractor(i,t){gn(i,2.6,!0),W(Gt(4,.6,4),V.panel,0,.3,0,i);for(let[n,s]of[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4]])W(Tt(.12,.15,6),V.metal,n*.7,3.3,s*.7,i).rotation.set(s*.08,0,-n*.08);W(Gt(1.6,.4,1.6),V.orange,0,6.2,0,i);let e=W(Tt(.3,.3,4.5),V.metal,0,3,0,i);W(Tt(.9,.9,1.6),V.white,1.7,1.4,1.2,i),t.drill=e,t.light=fe(10476799,1.2,i,1.7,2.5,1.2)},greenhouse(i,t){gn(i,5,!0),W(Gt(10,.5,6),V.panel,0,.25,0,i);let e=W(new qe(3,3,10,20,1,!1,0,Math.PI),V.glass,0,.5,0,i);e.rotation.set(0,0,Math.PI/2),e.castShadow=!1;for(let n=0;n<5;n++)W(new On(3,.08,6,20,Math.PI),V.white,-4.5+n*2.25,.5,0,i).rotation.y=Math.PI/2;for(let n=0;n<14;n++){let s=-4.2+n%7*1.4,r=n<7?-1.2:1.2,o=W(new Mn(.45,1.2+n%3*.3,6),V.plant,s,1.2,r,i);o.castShadow=!1}W(Gt(9.6,.3,.5),V.dark,0,.7,-1.2,i),W(Gt(9.6,.3,.5),V.dark,0,.7,1.2,i),t.light=fe(16737996,4,i,0,2.5,0)},fabricator(i,t){gn(i,4,!0),W(Gt(7,3.6,5),V.panel,0,1.8,0,i),W(Gt(7.1,.4,5.1),V.orange,0,3.4,0,i),W(Gt(3,2.6,.1),V.dark,0,1.3,2.52,i);let e=new ce;e.position.set(2.2,3.6,0),i.add(e),W(Tt(.35,.45,.6),V.metal,0,.3,0,e);let n=W(Gt(.3,2.2,.3),V.orange,0,1.4,0,e),s=W(Gt(.25,1.6,.25),V.metal,0,2.4,.6,e);s.rotation.x=.9,t.arm=e,t.spark=fe(16764006,1.2,i,2.2,5.7,1.2),W(Gt(1.2,1.2,1.2),V.dark,-2.4,.6,3.2,i),W(Gt(1,1,1),V.dark,-1.1,.5,3.1,i)},turret(i,t){gn(i,1.8),W(Tt(1.4,1.8,1.2,12),V.metal,0,.6,0,i),W(Tt(.5,.7,1.2,10),V.dark,0,1.8,0,i);let e=new ce;e.position.y=2.7,i.add(e),W(Gt(1.6,1,1.8),V.white,0,0,0,e),W(Gt(1.65,.2,1.85),V.orange,0,.35,0,e),W(Tt(.12,.12,2.2,8),V.dark,-.4,0,-1.6,e).rotation.x=Math.PI/2,W(Tt(.12,.12,2.2,8),V.dark,.4,0,-1.6,e).rotation.x=Math.PI/2,t.eye=fe(3401471,.9,e,0,.1,-.95),t.head=e},reactor(i,t){gn(i,5.2),W(Tt(5,5.2,1.4,24),V.panel,0,.7,0,i);let e=W(new ve(2,20,14),V.cyan,0,4.2,0,i);e.castShadow=!1;let n=W(new On(3.2,.35,10,32),V.white,0,4.2,0,i),s=W(new On(3.2,.35,10,32),V.white,0,4.2,0,i);s.rotation.x=Math.PI/2;for(let r=0;r<4;r++){let o=r*Math.PI/2;W(Gt(.6,3,.6),V.metal,Math.cos(o)*3.6,2.2,Math.sin(o)*3.6,i)}t.core=e,t.r1=n,t.r2=s,t.light=fe(3401471,9,i,0,4.2,0)},beacon(i,t){let e=W(Tt(7,7.3,.6,8),V.found,0,0,0,i);W(Tt(7.3,7.6,4,8),V.found,0,-2.3,0,i).castShadow=!1,W(new $n(4.2,4.8,32),V.orange,0,.32,0,i).rotation.x=-Math.PI/2,W(new $n(1.5,2,4),V.white,0,.32,0,i).rotation.x=-Math.PI/2,t.lights=[];for(let n=0;n<8;n++){let s=n*Math.PI/4+Math.PI/8;t.lights.push(fe(16755251,1.2,i,Math.cos(s)*6.6,.5,Math.sin(s)*6.6))}W(Tt(.18,.3,9,8),V.metal,8.6,4.2,0,i),W(Gt(1.6,.1,1.2),V.white,8.6,8.7,0,i).rotation.z=.4,t.tip=fe(16724016,2,i,8.6,9.2,0),e.castShadow=!1},lamp(i,t){W(Tt(.4,.5,.4,8),V.found,0,0,0,i),W(Tt(.08,.1,4.2,6),V.metal,0,2.1,0,i),W(Gt(.6,.2,.6),V.dark,0,4.3,0,i);let e=W(new ve(.2,8,6),V.lamp,0,4.15,0,i);e.castShadow=!1,t.glow=fe(16767392,5,i,0,4.1,0)},terraformer(i,t){gn(i,7),W(Tt(7,7.5,2,6),V.panel,0,1,0,i),W(Tt(2.5,4.5,26,6),V.white,0,15,0,i);for(let n=0;n<3;n++)W(Tt(4.6-n*.7,4.6-n*.7,.8,6),V.orange,0,6+n*8,0,i);t.rings=[];for(let n=0;n<3;n++){let s=W(new On(6-n*1.2,.25,8,40),V.cyan,0,10+n*8,0,i);s.castShadow=!1,t.rings.push(s)}for(let n=0;n<6;n++){let s=n*Math.PI/3,r=W(Gt(1.2,10,1.2),V.metal,Math.cos(s)*6,5,Math.sin(s)*6,i);r.rotation.y=-s}let e=W(new qe(.6,1.4,400,12,1,!0),new ye({color:6743807,transparent:!0,opacity:0,blending:Ze,depthWrite:!1,side:$e}),0,228,0,i);e.castShadow=!1,e.receiveShadow=!1,t.beam=e,t.top=fe(6743807,10,i,0,28,0)}};function Ff(){let i=new ce,t=W(Tt(1.6,3.2,4.2,16),V.white,0,3.6,0,i);W(Tt(1.6,1.6,.5,16),V.orange,0,5.9,0,i),W(new ve(1.6,16,8,0,Math.PI*2,0,Math.PI/2),V.white,0,6.15,0,i),W(Tt(3.25,3.25,.4,16),V.dark,0,1.4,0,i);for(let c=0;c<4;c++){let l=c*Math.PI/2+Math.PI/4;W(Tt(.12,.12,3.4,6),V.metal,Math.cos(l)*3.3,.9,Math.sin(l)*3.3,i).rotation.set(Math.sin(l)*.45,0,-Math.cos(l)*.45),W(Tt(.6,.6,.15,10),V.metal,Math.cos(l)*4,.05,Math.sin(l)*4,i)}W(Tt(.9,1.3,1,12),V.dark,0,.9,0,i);let e=W(Gt(1.2,.8,.2),V.window,0,4.4,2.5,i);e.rotation.x=-.35;let n=document.createElement("canvas");n.width=256,n.height=64;let s=n.getContext("2d");s.fillStyle="#e9e4da",s.fillRect(0,0,256,64),s.fillStyle="#d4581c",s.font="bold 40px sans-serif",s.textAlign="center",s.fillText("\u65B9\u821F\u4E00\u53F7  ARK-1",128,46);let r=new xi(n);r.colorSpace=Ae;let o=new Ft(new Yn(3.2,.8),new Yt({map:r,roughness:.6}));o.position.set(0,3,-2.75),o.rotation.y=Math.PI,o.rotation.x=.35,i.add(o);let a=fe(6750105,1.6,i,0,7.9,0);return W(Tt(.05,.05,1.4,4),V.metal,0,7.2,0,i),{group:i,beacon:a,window:e}}function Of(){let i=new ce;W(Tt(1.2,2.4,5,12),V.white,0,3.5,0,i),W(new Mn(1.2,2.2,12),V.white,0,7.1,0,i),W(Tt(2.45,2.45,.4,12),V.orange,0,2.4,0,i);for(let n=0;n<3;n++){let s=n*Math.PI*2/3,r=W(Gt(.2,2.4,1.6),V.panel,Math.cos(s)*2.3,1.6,Math.sin(s)*2.3,i);r.rotation.y=-s}let t=new Ft(new Mn(1.1,5,12,1,!0),V.flame);t.rotation.x=Math.PI,t.position.y=-1.6,i.add(t);let e=fe(16752704,9,i,0,-.5,0);return{group:i,flame:t,flameGlow:e}}var Pf=[16751162,3850495,8257418,16740277,16769354].map(i=>new Yt({color:1118481,emissive:i,emissiveIntensity:.6,roughness:.1,metalness:.6})),Lf=[15525596,14278116,15259332].map(i=>new Yt({color:i,roughness:.7}));function Bf(i){let t=new ce,e=Lf[i%Lf.length],n=W(new Pa(.28,.6,4,8),e,0,1,0,t),s=W(new ve(.24,12,8),e,0,1.62,0,t),r=W(new ve(.2,12,8,-Math.PI*.4,Math.PI*.8,Math.PI*.3,Math.PI*.35),Pf[i%Pf.length],0,1.62,.06,t);W(Gt(.42,.5,.2),V.orange,0,1.1,-.28,t);let o=W(Tt(.1,.09,.6,6),e,-.13,.3,0,t),a=W(Tt(.1,.09,.6,6),e,.13,.3,0,t),c=W(Tt(.08,.07,.55,6),e,-.36,1.05,0,t),l=W(Tt(.08,.07,.55,6),e,.36,1.05,0,t);return{group:t,legL:o,legR:a,armL:c,armR:l,body:n,head:s,visor:r}}var Qh=new Yt({color:yt.enemy[0],roughness:.3,metalness:.6,flatShading:!0,emissive:1049856}),Ev=new Yt({color:yt.enemy[1],emissive:yt.enemy[2],emissiveIntensity:.8,roughness:.2,flatShading:!0}),Df=new ye({color:16764992});function zf(i=1){let t=new ce,e=new ce;t.add(e),W(new Gi(.9,0),Qh,0,1,0,e).scale.set(1,.6,1.3);for(let r=0;r<5;r++){let o=W(new La(.35,0),Ev,(Math.random()-.5)*.8,1.5+Math.random()*.3,(Math.random()-.5)*1.2,e);o.scale.y=1.6+Math.random(),o.rotation.set(Math.random()-.5,0,Math.random()-.5)}W(new ve(.1,6,4),Df,-.25,1.1,1.1,e),W(new ve(.1,6,4),Df,.25,1.1,1.1,e);let s=[];for(let r=0;r<6;r++){let o=r<3?-1:1,a=r%3-1,c=new ce;c.position.set(o*.6,1,a*.6),e.add(c);let l=W(Tt(.07,.09,1.1,5),Qh,o*.45,.25,0,c);l.rotation.z=o*-1.1;let h=W(Tt(.05,.07,1.2,5),Qh,o*.95,-.35,0,c);h.rotation.z=o*.35,c.userData.phase=r%2*Math.PI+a*.5,c.userData.side=o,s.push(c)}return t.scale.setScalar(i),{group:t,legs:s,inner:e}}function wv(i,t,e){let n=document.createElement("canvas");n.width=128,n.height=256;let s=n.getContext("2d");s.fillStyle="#000",s.fillRect(0,0,128,256);let r=e,o=()=>(r=(r*9301+49297)%233280,r/233280),a=128/i,c=256/t;for(let h=0;h<i;h++)for(let u=0;u<t;u++)o()<.65&&(s.fillStyle=o()<.8?"#ffd9a0":"#a0d8ff",s.fillRect(h*a+a*.2,u*c+c*.25,a*.6,c*.5));let l=new xi(n);return l.colorSpace=Ae,l}var jh=[];function Uf(i){let t=new Yt({color:14210252,roughness:.5,metalness:.2,emissive:16777215,emissiveMap:wv(6,14,i),emissiveIntensity:.2});return jh.push(t),t}var Nf=[Uf(7),Uf(31)];Object.assign(Qa,{apartment(i,t){gn(i,4.4,!0),W(Gt(8,1,8),V.panel,0,.5,0,i),W(Gt(5,18,5),Nf[0],-1.2,10,-1.2,i),W(Gt(4,12,4),Nf[1],2,7,2,i),W(Gt(5.2,.5,5.2),V.orange,-1.2,19.2,-1.2,i),W(Gt(4.2,.5,4.2),V.orange,2,13.2,2,i),W(Tt(.1,.1,4,6),V.metal,-1.2,21.4,-1.2,i),t.tip=fe(16728128,1.6,i,-1.2,23.5,-1.2),W(new ve(1.6,16,8,0,Math.PI*2,0,Math.PI/2),V.glass,2,13.4,2,i).castShadow=!1},vfarm(i,t){gn(i,4),W(Tt(3.8,4,1,16),V.panel,0,.5,0,i);let e=W(Tt(3.2,3.2,14,16),V.glass,0,8,0,i);e.castShadow=!1;for(let n=0;n<6;n++){W(Tt(3,3,.25,16),V.white,0,2+n*2.3,0,i);for(let s=0;s<7;s++){let r=s/7*Math.PI*2+n,o=W(new Mn(.4,.9,5),V.plant,Math.cos(r)*2.2,2.6+n*2.3,Math.sin(r)*2.2,i);o.castShadow=!1}}W(new ve(3.2,16,8,0,Math.PI*2,0,Math.PI/2),V.glass,0,15,0,i).castShadow=!1,t.light=fe(16737996,9,i,0,8,0)},lifehub(i,t){gn(i,5.5),W(Tt(5.5,5.8,1.2,20),V.panel,0,.6,0,i);let e=W(new ve(4.5,20,12,0,Math.PI*2,0,Math.PI/2),V.white,0,1.2,0,i);W(new On(4.6,.3,8,32),V.orange,0,1.6,0,i).rotation.x=Math.PI/2;for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4;W(Tt(.9,.9,5,12),V.white,Math.cos(r)*5.2,2.5,Math.sin(r)*5.2,i),W(Tt(.95,.95,.4,12),V.cyan,Math.cos(r)*5.2,4.2,Math.sin(r)*5.2,i)}let n=new ce;n.position.y=6,i.add(n);for(let s=0;s<3;s++){let r=W(Gt(4,.1,.6),V.dark,0,0,0,n);r.rotation.y=s*Math.PI/3}t.fan=n,t.light=fe(6741503,5,i,0,6,0)},launch(i,t){gn(i,9,!0),W(Gt(18,1.2,18),V.found,0,.6,0,i),W(new $n(5,6,32),V.orange,0,1.25,0,i).rotation.x=-Math.PI/2;for(let[s,r]of[[6,-1.5],[6,1.5],[9,-1.5],[9,1.5]])W(Gt(.4,34,.4),V.metal,s,18,r,i);for(let s=0;s<8;s++)W(Gt(3.4,.25,3.4),V.metal,7.5,4+s*4,0,i);W(Gt(4,.5,.8),V.orange,4.2,26,0,i);let e=new ce;e.position.y=1.2,i.add(e),W(Tt(2.4,2.8,24,20),V.white,0,13,0,e),W(new Mn(2.4,7,20),V.white,0,28.5,0,e),W(Tt(2.45,2.45,1.2,20),V.orange,0,20,0,e),W(Tt(2.45,2.45,.6,20),V.dark,0,8,0,e);for(let s=0;s<4;s++){let r=s*Math.PI/2,o=W(Gt(.4,6,3),V.panel,Math.cos(r)*2.8,3.5,Math.sin(r)*2.8,e);o.rotation.y=-r}for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4;W(Tt(.8,1.2,2,10),V.dark,Math.cos(r)*1.2,.6,Math.sin(r)*1.2,e)}let n=new Ft(new Mn(3,16,16,1,!0),V.flame);n.rotation.x=Math.PI,n.position.y=-8,n.visible=!1,e.add(n),t.ship=e,t.flame=n,t.tip=fe(16777215,3,e,0,32.5,0)},monument(i,t){gn(i,6),W(Tt(6,6.5,1.5,8),V.panel,0,.75,0,i),W(Tt(4.5,5,1,8),V.white,0,2,0,i);let e=W(new qe(.6,1.8,30,4),V.white,0,17,0,i);e.rotation.y=Math.PI/4,t.rings=[];let n=[new Yt({color:3346688,emissive:16742954,emissiveIntensity:2}),new Yt({color:8755,emissive:6743807,emissiveIntensity:2}),new Yt({color:1127168,emissive:10551104,emissiveIntensity:2})];for(let s=0;s<3;s++){let r=W(new On(4-s*.6,.18,8,40),n[s],0,14+s*5,0,i);r.castShadow=!1,t.rings.push(r)}t.top=fe(16777215,8,i,0,33,0)}});var Tv=540,lo,_r,An,yr,tu,ho,eu,Ss,uo=(i,t,e)=>new Rt().setRGB(i,t,e,Ae),qi=yt.sky,Yi=i=>uo(i[0],i[1],i[2]),Kn={dayTop:Yi(qi.dayTop),dayHor:Yi(qi.dayHor),setTop:Yi(qi.setTop),setHor:Yi(qi.setHor),nightTop:Yi(qi.nightTop),nightHor:Yi(qi.nightHor),earthTop:uo(.22,.44,.82),earthHor:uo(.68,.8,.92),stormHor:Yi(qi.storm),halo:Yi(qi.halo)},Qn={},Av=uo(.36,.42,.62),Rv=uo(.75,.65,.55),co=new Rt,kf=new Rt,kn=new A;function Hf(i){Ss=new wn({uniforms:{uTop:{value:new Rt},uHor:{value:new Rt},uSunDir:{value:new A(0,1,0)},uSunCol:{value:new Rt(1,.95,.85)},uHalo:{value:new Rt},uSunVis:{value:1}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`
      uniform vec3 uTop, uHor, uSunDir, uSunCol, uHalo; uniform float uSunVis; varying vec3 vDir;
      void main(){
        vec3 d = normalize(vDir);
        float h = clamp(d.y, 0.0, 1.0);
        vec3 col = mix(uHor, uTop, pow(h, 0.5));
        if (d.y < 0.0) col = uHor * (1.0 + d.y * 0.6);
        float sd = max(dot(d, uSunDir), 0.0);
        col += uHalo * pow(sd, 6.0) * 0.55;
        col += uSunCol * (pow(sd, 1400.0) * 6.0 + pow(sd, 90.0) * 0.35) * uSunVis;
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,side:en,depthWrite:!1}),lo=new Ft(new ve(4e3,32,16),Ss),lo.frustumCulled=!1,lo.renderOrder=-10,i.add(lo);let t=new Ie,e=[],n=[];for(let o=0;o<2600;o++){let a=Math.random()*2-1,c=Math.random()*Math.PI*2,l=Math.sqrt(1-a*a);if(a<-.05)continue;e.push(l*Math.cos(c)*3500,a*3500,l*Math.sin(c)*3500);let h=.5+Math.random()*.5,u=Math.random();n.push(h*(u>.8?1:.85),h*.9,h*(u<.2?1:.95))}e.push(-1800,1500,-2400),n.push(.5,.75,1.4),t.setAttribute("position",new re(e,3)),t.setAttribute("color",new re(n,3)),_r=new Vi(t,new gi({size:1.6,sizeAttenuation:!1,vertexColors:!0,transparent:!0,depthWrite:!1,fog:!1})),_r.frustumCulled=!1,_r.renderOrder=-9,i.add(_r);let s=new Yt({color:9076080,roughness:1,fog:!1,flatShading:!0});if(ho=new Ft(new Gi(60,1),s),ho.scale.set(1.3,.9,1),eu=new Ft(new Gi(24,1),s),yt.extras==="moons"&&i.add(ho,eu),yt.extras==="jupiter"){let o=document.createElement("canvas");o.width=512,o.height=256;let a=o.getContext("2d"),c=["#e8d8c0","#c89a70","#f0e6d4","#b07850","#e0c8a8","#9a6a48","#efe2cc","#c8a07a","#e6d6bc"];for(let d=0;d<256;d++)a.fillStyle=c[Math.floor(d/256*c.length*2+Math.sin(d*.3)*.6)%c.length],a.fillRect(0,d,512,1);a.globalAlpha=.25;for(let d=0;d<400;d++)a.fillStyle=c[d%c.length],a.fillRect(Math.random()*512,Math.random()*256,30+Math.random()*80,2);a.globalAlpha=1,a.fillStyle="#b8583a",a.beginPath(),a.ellipse(330,165,34,16,0,0,Math.PI*2),a.fill();let l=new xi(o);l.colorSpace=Ae;let h=new Ft(new ve(900,48,32),new ye({map:l,fog:!1}));h.rotation.z=.06;let u=new Ft(new ve(905,48,32,Math.PI*.55,Math.PI),new ye({color:0,transparent:!0,opacity:.55,fog:!1}));h.add(u);let p=new Ft(new Gi(30,2),new ye({color:15257712,fog:!1}));i.add(h,p),Qn={jup:h,io:p}}if(yt.extras==="twinsuns"){let o=new lr(new ps({map:Ms(),color:16751200,transparent:!0,blending:Ze,depthWrite:!1,fog:!1}));o.scale.set(500,500,1);let a=new Ft(new $n(700,1100,64),new ye({color:14207231,transparent:!0,opacity:.35,side:$e,fog:!1,depthWrite:!1})),c=new Ft(new ve(420,32,24),new ye({color:9075408,fog:!1}));c.add(a),a.rotation.x=1.2,i.add(o,c),Qn={s2:o,gas:c}}An=new mr(16773341,3),An.castShadow=!0,An.shadow.mapSize.set(2048,2048);let r=An.shadow.camera;r.left=-70,r.right=70,r.top=70,r.bottom=-70,r.near=1,r.far=400,An.shadow.bias=-4e-4,An.shadow.normalBias=.6,i.add(An,An.target),yr=new fr(16765616,5909530,1),tu=new Na(4213360,.3),i.add(yr,tu),i.fog=new Ea(14196848,120,900)}function ja(i,t){let e=m.time,n=e.t;e.t+=i/Tv*(e.elevation<0?1.5:1),e.t>=1&&(e.t-=1),n<.25&&e.t>=.25&&(e.day++,e.dawn=!0);let s=(e.t-.25)*Math.PI*2;kn.set(Math.cos(s),Math.sin(s),.35).normalize();let r=kn.y;e.elevation=r,e.night=cn(.05,-.18,r);let o=cn(0,1,m.terraform),a=m.storm,c=cn(-.05,.35,r),l=1-Math.abs(zn((r-.05)/.3,-1,1));co.copy(Kn.dayTop).lerp(Kn.earthTop,o),kf.copy(Kn.dayHor).lerp(Kn.earthHor,o);let h=Ss.uniforms.uTop.value,u=Ss.uniforms.uHor.value;h.copy(Kn.nightTop).lerp(Kn.setTop,cn(-.25,0,r)).lerp(co,c),u.copy(Kn.nightHor).lerp(Kn.setHor,cn(-.25,0,r)).lerp(kf,c),a>0&&(co.copy(Kn.stormHor).multiplyScalar(.25+.75*(1-e.night)),h.lerp(co,a*.85),u.lerp(co,a)),Ss.uniforms.uHalo.value.copy(Kn.halo).multiplyScalar(zn(l,0,1)*(1-o*.5)*(1-a)),Ss.uniforms.uSunDir.value.copy(kn),Ss.uniforms.uSunVis.value=cn(-.08,.02,r)*(1-a*.85),lo.position.copy(t),_r.position.copy(t),_r.material.opacity=Math.max(e.night,yt.id==="europa"?.85:0)*(1-a);let p=m.time.t*Math.PI*6,d=-m.time.t*Math.PI*2+2;if(ho.position.set(t.x+Math.cos(p)*2600,t.y+Math.sin(p)*1700+300,t.z-1300),ho.lookAt(t),eu.position.set(t.x+Math.cos(d)*2800,t.y+Math.sin(d)*2200,t.z+1600),Qn.jup){Qn.jup.position.set(t.x-1800,t.y+650,t.z-2600),Qn.jup.rotation.y+=4e-5;let _=m.time.t*Math.PI*8;Qn.io.position.set(t.x-1800+Math.cos(_)*1400,t.y+650+Math.sin(_)*300,t.z-2600+Math.sin(_)*1400)}Qn.s2&&(Qn.s2.position.copy(t).addScaledVector(new A(kn.x*.8-.3,kn.y*.9-.05,kn.z+.4).normalize(),3e3),Qn.s2.material.opacity=cn(-.2,.05,r)*.9,Qn.gas.position.set(t.x+1600,t.y+1100,t.z+2400));let x=cn(-.04,.25,r);An.intensity=3*x*(1-a*.6),An.color.setRGB(1,oe(.7,.93,x),oe(.55,.85,x)),An.position.copy(t).addScaledVector(kn,200),An.target.position.copy(t),yr.intensity=oe(.55,1.1,c)*(1-a*.3),yr.color.copy(u).lerp(h,.3).lerp(Av,e.night*.85),yt.id==="europa"&&yr.color.lerp(Rv,.6),yr.groundColor.setRGB(oe(.05,.38,c),oe(.04,.18,c),oe(.05,.1,c)),tu.intensity=oe(.8,.2,c),m.scene.fog.color.copy(u),m.scene.fog.near=oe(120,12,a),m.scene.fog.far=oe(oe(900,380,e.night),90,a),m.renderer.toneMappingExposure=oe(1,1.4,e.night)}function Vf(){let i=Math.floor(m.time.t*24.66),t=Math.floor((m.time.t*24.66-i)*60);return`${yt.name} \xB7 \u7B2C ${m.time.day} \u65E5 \xB7 ${String(i).padStart(2,"0")}:${String(t).padStart(2,"0")}`}var ec=class{constructor(t,e,n,s){this.max=e,this.n=0,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.base=new Float32Array(e*4),this.grav=new Float32Array(e),this.drag=new Float32Array(e);let r=new Ie;this.pa=new Fe(this.pos,3),this.ca=new Fe(this.col,4),this.pa.setUsage(Hh),this.ca.setUsage(Hh),r.setAttribute("position",this.pa),r.setAttribute("color",this.ca),this.mat=new gi({size:s,map:Ms(),vertexColors:!0,transparent:!0,depthWrite:!1,blending:n?Ze:Oi,sizeAttenuation:!0}),this.points=new Vi(r,this.mat),this.points.frustumCulled=!1,t.add(this.points)}emit(t,e,n,s,r,o,a,c,l,h,u,p=0,d=0){let x=this.n<this.max?this.n++:Math.floor(Math.random()*this.max);this.pos[x*3]=t,this.pos[x*3+1]=e,this.pos[x*3+2]=n,this.vel[x*3]=s,this.vel[x*3+1]=r,this.vel[x*3+2]=o,this.base[x*4]=a,this.base[x*4+1]=c,this.base[x*4+2]=l,this.base[x*4+3]=h,this.life[x]=u,this.maxLife[x]=u,this.grav[x]=p,this.drag[x]=d}update(t){let e=this.n;for(let n=0;n<e;n++){if(this.life[n]-=t,this.life[n]<=0){if(e--,n!==e){for(let o=0;o<3;o++)this.pos[n*3+o]=this.pos[e*3+o],this.vel[n*3+o]=this.vel[e*3+o];for(let o=0;o<4;o++)this.base[n*4+o]=this.base[e*4+o];this.life[n]=this.life[e],this.maxLife[n]=this.maxLife[e],this.grav[n]=this.grav[e],this.drag[n]=this.drag[e],n--}continue}let s=1-this.drag[n]*t;this.vel[n*3]*=s,this.vel[n*3+2]*=s,this.vel[n*3+1]=this.vel[n*3+1]*s-this.grav[n]*t,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t;let r=this.life[n]/this.maxLife[n];this.col[n*4]=this.base[n*4],this.col[n*4+1]=this.base[n*4+1],this.col[n*4+2]=this.base[n*4+2],this.col[n*4+3]=this.base[n*4+3]*Math.min(1,r*2.5)}this.n=e,this.points.geometry.setDrawRange(0,e),this.pa.needsUpdate=!0,this.ca.needsUpdate=!0}},bs,nc,Es,vr;function Gf(i){bs=new ec(i,3e3,!0,.35),nc=new ec(i,2500,!1,1.6);let t=new Ie,e=new Float32Array(1500*3);for(let r=0;r<e.length;r++)e[r]=(Math.random()-.5)*80;t.setAttribute("position",new Fe(e,3)),Es=new Vi(t,new gi({size:.25,map:Ms(),color:16765088,transparent:!0,opacity:.5,depthWrite:!1})),Es.frustumCulled=!1,i.add(Es);let n=new Ie,s=new Float32Array(3e3*3);for(let r=0;r<s.length;r++)s[r]=(Math.random()-.5)*70;n.setAttribute("position",new Fe(s,3)),vr=new Vi(n,new gi({size:.18,map:Ms(),color:12574975,transparent:!0,opacity:0,depthWrite:!1})),vr.frustumCulled=!1,i.add(vr)}var It={spark(i,t=[1,.6,.2],e=6,n=4,s=.5){for(let r=0;r<e;r++)bs.emit(i.x,i.y,i.z,(Math.random()-.5)*n,Math.random()*n,(Math.random()-.5)*n,t[0],t[1],t[2],1,s*(.5+Math.random()),6,1)},burst(i,t=[1,.5,.2],e=40,n=9){for(let s=0;s<e;s++){let r=Math.random()*2-1,o=Math.random()*6.283,a=Math.sqrt(1-r*r),c=n*(.4+Math.random()*.6);bs.emit(i.x,i.y,i.z,a*Math.cos(o)*c,r*c,a*Math.sin(o)*c,t[0],t[1],t[2],1,.4+Math.random()*.6,4,2)}},dustPuff(i,t=10,e=2,n=[.72,.45,.3]){for(let s=0;s<t;s++)nc.emit(i.x+(Math.random()-.5)*e,i.y+Math.random()*.5,i.z+(Math.random()-.5)*e,(Math.random()-.5)*3,Math.random()*1.5,(Math.random()-.5)*3,n[0],n[1],n[2],.55,1.2+Math.random(),-.2,1.5)},ring(i,t,e=60,n=[.72,.45,.3]){for(let s=0;s<e;s++){let r=s/e*6.283,o=6+Math.random()*6;nc.emit(i.x+Math.cos(r)*t,i.y+.4,i.z+Math.sin(r)*t,Math.cos(r)*o,.5+Math.random(),Math.sin(r)*o,n[0],n[1],n[2],.6,1.5+Math.random(),-.1,1.2)}},trail(i,t,e=1){bs.emit(i.x,i.y,i.z,(Math.random()-.5)*.4,(Math.random()-.5)*.4,(Math.random()-.5)*.4,t[0]*e,t[1]*e,t[2]*e,1,.18,0,0)},flame(i,t=1){bs.emit(i.x+(Math.random()-.5)*.6,i.y,i.z+(Math.random()-.5)*.6,(Math.random()-.5)*2,-6*t-Math.random()*6,(Math.random()-.5)*2,1,.55,.2,1,.35,0,0)},rise(i,t,e=6){bs.emit(i.x+(Math.random()-.5)*e,i.y,i.z+(Math.random()-.5)*e,0,6+Math.random()*6,0,t[0],t[1],t[2],1,2.5,-.5,0)}},tc=0;function ic(i,t){bs.update(i),nc.update(i);let e=m.storm,n=Es.geometry.attributes.position,s=n.array,r=1+e*26;for(let o=0;o<s.length;o+=3){s[o]+=r*i,s[o+1]+=Math.sin(o+performance.now()*5e-4)*i*.2-e*i*1.5;let a=40;s[o]-t.x>a&&(s[o]-=2*a),s[o]-t.x<-a&&(s[o]+=2*a),s[o+1]-t.y>a/2&&(s[o+1]-=a),s[o+1]-t.y<-a/2&&(s[o+1]+=a),s[o+2]-t.z>a&&(s[o+2]-=2*a),s[o+2]-t.z<-a&&(s[o+2]+=2*a)}if(n.needsUpdate=!0,Es.material.size=.25+e*.3,Es.material.opacity=.3+e*.25,Es.material.color.setRGB(1,.8-m.time.night*.4,.62-m.time.night*.3),tc+=((m.raining?1:0)-tc)*i*.5,vr.material.opacity=tc*.6,tc>.01){let o=vr.geometry.attributes.position.array;for(let a=0;a<o.length;a+=3)o[a+1]-=22*i,o[a]+=2*i,o[a+1]<t.y-20&&(o[a+1]+=40),o[a]-t.x>35&&(o[a]-=70),o[a]-t.x<-35&&(o[a]+=70),o[a+2]-t.z>35&&(o[a+2]-=70),o[a+2]-t.z<-35&&(o[a+2]+=70);vr.geometry.attributes.position.needsUpdate=!0}}var sc=null,Bt,$i,ws,fo,po,Ts,mo,rc,_t={enabled:!0,init(){if(Bt){Bt.resume();return}try{Bt=new(window.AudioContext||window.webkitAudioContext)}catch{return}$i=Bt.createGain(),$i.gain.value=.7,$i.connect(Bt.destination),ws=Bt.createGain(),ws.gain.value=.8,ws.connect($i),fo=Bt.createGain(),fo.gain.value=.22,fo.connect($i),rc=Bt.createBuffer(1,Bt.sampleRate*2,Bt.sampleRate);let i=rc.getChannelData(0),t=0;for(let n=0;n<i.length;n++){let s=Math.random()*2-1;t=(t+.02*s)/1.02,i[n]=t*3.5}let e=Bt.createBufferSource();e.buffer=rc,e.loop=!0,Ts=Bt.createBiquadFilter(),Ts.type="bandpass",Ts.frequency.value=400,Ts.Q.value=.6,po=Bt.createGain(),po.gain.value=.15,e.connect(Ts),Ts.connect(po),po.connect($i),e.start(),this.musicLoop()},setVolume(i){$i&&($i.gain.value=i)},update(i,t){if(!Bt)return;let e=Bt.currentTime;po.gain.setTargetAtTime(.1+i*.6+t*.04,e,.5),Ts.frequency.setTargetAtTime(300+i*500+Math.sin(e*.3)*120,e,.8)},tone(i,t,e="sine",n=.3,s=0,r=0,o){if(!Bt)return;let a=Bt.currentTime+r,c=Bt.createOscillator(),l=Bt.createGain();c.type=e,c.frequency.setValueAtTime(i,a),s&&c.frequency.exponentialRampToValueAtTime(Math.max(20,i*s),a+t),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(n,a+.01),l.gain.exponentialRampToValueAtTime(1e-4,a+t),c.connect(l),l.connect(o||ws),c.start(a),c.stop(a+t+.05)},noise(i,t=1e3,e=.3,n="lowpass",s=0,r=1){if(!Bt)return;let o=Bt.currentTime+s,a=Bt.createBufferSource();a.buffer=rc;let c=Bt.createBiquadFilter();c.type=n,c.frequency.value=t,c.Q.value=r;let l=Bt.createGain();l.gain.setValueAtTime(e,o),l.gain.exponentialRampToValueAtTime(1e-4,o+i),a.connect(c),c.connect(l),l.connect(ws),a.start(o,Math.random()),a.stop(o+i+.05)},play(i){if(Bt)switch(i){case"step":this.noise(.12,500+Math.random()*200,.12,"lowpass");break;case"jump":this.noise(.2,400,.15);break;case"land":this.noise(.25,300,.25);break;case"mine":this.tone(180+Math.random()*60,.08,"square",.04),this.noise(.08,2400,.06,"highpass");break;case"pickup":this.tone(880,.08,"sine",.08),this.tone(1320,.1,"sine",.06,0,.05);break;case"deplete":this.noise(.5,900,.3),this.tone(220,.4,"triangle",.15,.5);break;case"shoot":this.tone(900,.15,"sawtooth",.12,.25),this.noise(.1,3e3,.08,"highpass");break;case"turret":this.tone(700,.12,"square",.05,.3);break;case"hit":this.tone(300,.1,"square",.08,.5);break;case"kill":this.noise(.6,1600,.3,"bandpass",0,.8),this.tone(120,.5,"sawtooth",.12,.3);break;case"hurt":this.tone(160,.25,"sawtooth",.15,.6);break;case"place":this.tone(220,.15,"triangle",.2),this.tone(330,.15,"triangle",.2,0,.1),this.tone(440,.3,"triangle",.2,0,.2),this.noise(.4,600,.2);break;case"ui":this.tone(660,.06,"sine",.08);break;case"deny":this.tone(200,.15,"square",.06),this.tone(150,.2,"square",.06,0,.1);break;case"craft":[523,659,784,1046].forEach((t,e)=>this.tone(t,.25,"triangle",.12,0,e*.08));break;case"radio":this.noise(.15,2500,.12,"bandpass",0,2),this.tone(1200,.05,"sine",.06,0,.12);break;case"alarm":this.tone(880,.18,"square",.06),this.tone(660,.18,"square",.06,0,.2);break;case"objective":[392,523,659].forEach((t,e)=>this.tone(t,.5,"sine",.15,0,e*.12));break;case"chapter":[262,330,392,523,659].forEach((t,e)=>this.tone(t,1.2,"sine",.12,0,e*.15));break;case"rumble":this.noise(4,150,.6),this.noise(3,400,.25,"lowpass",.5);break;case"jet":this.noise(.12,800,.1,"bandpass");break;case"night":this.tone(110,3,"sine",.12,.8),this.tone(165,3,"sine",.08,.8,.3);break}},engine(i){if(Bt&&(i>0||sc)){if(!sc){let n=Bt.createOscillator(),s=Bt.createOscillator(),r=Bt.createBiquadFilter(),o=Bt.createGain();n.type="sawtooth",s.type="triangle",r.type="lowpass",r.frequency.value=500,o.gain.value=1e-4,n.connect(r),s.connect(r),r.connect(o),o.connect(ws),n.start(),s.start(),sc={o:n,o2:s,f:r,g:o}}let t=Bt.currentTime,e=sc;e.o.frequency.setTargetAtTime(38+i*70,t,.1),e.o2.frequency.setTargetAtTime(76+i*140,t,.1),e.f.frequency.setTargetAtTime(300+i*900,t,.1),e.g.gain.setTargetAtTime(i>0||m.driving?.03+i*.05:1e-4,t,.15)}},laser(i){if(Bt){if(i&&!mo){let t=Bt.createOscillator(),e=Bt.createOscillator(),n=Bt.createGain(),s=Bt.createBiquadFilter();t.type="sawtooth",t.frequency.value=110,e.type="square",e.frequency.value=113,s.type="lowpass",s.frequency.value=900,n.gain.value=1e-4,n.gain.exponentialRampToValueAtTime(.06,Bt.currentTime+.1),t.connect(s),e.connect(s),s.connect(n),n.connect(ws),t.start(),e.start(),mo={o:t,o2:e,g:n}}else if(!i&&mo){let t=mo;mo=null,t.g.gain.setTargetAtTime(1e-4,Bt.currentTime,.04),t.o.stop(Bt.currentTime+.2),t.o2.stop(Bt.currentTime+.2)}}},musicLoop(){let i=[[220,277.2,329.6,415.3],[196,246.9,293.7,392],[174.6,220,261.6,349.2],[164.8,207.7,246.9,329.6],[146.8,220,293.7,370]],t=0,e=()=>{if(!Bt)return;let n=i[t++%i.length],s=Bt.currentTime;if(n.forEach((r,o)=>{let a=Bt.createOscillator(),c=Bt.createGain();a.type=o===0?"triangle":"sine",a.frequency.value=r*(o===0?.5:1),a.detune.value=(Math.random()-.5)*8,c.gain.setValueAtTime(1e-4,s),c.gain.exponentialRampToValueAtTime(.06,s+3),c.gain.exponentialRampToValueAtTime(1e-4,s+11),a.connect(c),c.connect(fo),a.start(s),a.stop(s+11.5)}),Math.random()<.7){let r=n[1+Math.floor(Math.random()*3)]*2;for(let o=0;o<3;o++)Math.random()<.6&&this.tone(r*[1,1.122,1.335][o],2.5,"sine",.025,0,2+o*1.6,fo)}setTimeout(e,9e3)};e()}};var go={iron:new Yt({color:5913134,roughness:.45,metalness:.75,flatShading:!0}),ironVein:new Yt({color:10246714,roughness:.3,metalness:.9,flatShading:!0,emissive:3806216}),ice:new Yt({color:13627135,roughness:.08,metalness:.1,flatShading:!0,transparent:!0,opacity:.9,emissive:1456202}),silicon:new Yt({color:15983014,roughness:.15,metalness:.4,flatShading:!0,emissive:2761224}),titanium:new Yt({color:10194175,roughness:.1,metalness:.5,flatShading:!0,emissive:5913855,emissiveIntensity:.6}),base:new Yt({color:7224102,roughness:.95,flatShading:!0})},Wf={iron:null,ice:8969727,silicon:16770720,titanium:9071871},nu={iron:[1,.55,.3],ice:[.6,.9,1],silicon:[1,.9,.55],titanium:[.7,.55,1]};function Cv(i,t,e){let n=new Mn(e,t,5,1);n.translate(0,t/2,0);let s=new Ft(n,i);return s.castShadow=!0,s}function Iv(i,t){let e=new ce;if(i==="iron")for(let n=0;n<4;n++){let s=new Ft(new ms(.6+t()*.7,0),n===0?go.ironVein:go.iron);s.position.set((t()-.5)*1.8,.3+t()*.4,(t()-.5)*1.8),s.rotation.set(t()*3,t()*3,t()*3),s.scale.y=.8,s.castShadow=!0,e.add(s)}else{let n=new Ft(new ms(1.1,0),go.base);n.scale.set(1.2,.45,1.2),n.castShadow=!0,e.add(n);let s=i==="titanium"?6:7;for(let r=0;r<s;r++){let o=Cv(go[i],.8+t()*(i==="ice"?1.6:1.9),.18+t()*.22),a=t()*6.28,c=t()*.8;o.position.set(Math.cos(a)*c,.2,Math.sin(a)*c),o.rotation.set((t()-.5)*.9,t()*3,(t()-.5)*.9),e.add(o)}Wf[i]&&e.add(fe(Wf[i],i==="titanium"?5:3,null,0,1.2,0))}return e}var Xf=Math.random;function Sr(i,t,e,n){let s=Iv(i,Xf),r=Ut(t,e);s.position.set(t,r,e),s.rotation.y=Xf()*6.28,m.scene.add(s);let o=n??{iron:30,ice:25,silicon:25,titanium:14}[i],a={type:i,x:t,z:e,y:r,amount:o,max:o,mesh:s,r:1.6};return a.collider=m.colliders.add({x:t,z:e,r:1.3,kind:"node"}),m.nodes.push(a),a}function qf(i,t){for(let e=0;e<200;e++){let n,s;if(i==="ice"&&Math.random()<.75){let o=vs[Math.floor(Math.random()*Math.min(vs.length,30))],a=Math.random()*6.28,c=Math.random()*o.r*.7;n=o.x+Math.cos(a)*c,s=o.z+Math.sin(a)*c}else if(t){let o=Math.random()*6.28,a=t[0]+Math.random()*(t[1]-t[0]);n=Math.cos(o)*a,s=Math.sin(o)*a}else n=(Math.random()-.5)*(2*le-300),s=(Math.random()-.5)*(2*le-300);let r=Math.hypot(n,s);if(!(i==="titanium"&&r<260)&&!(r<18)&&!(Math.abs(n)>le-160||Math.abs(s)>le-160)&&!(ao(n,s,2)>.6)&&!m.colliders.overlaps(n,s,3))return[n,s]}return null}function Yf(){let i=[["iron",22,8],["iron",-18,20],["iron",30,-25],["silicon",-26,-14],["silicon",12,34],["ice",40,10],["iron",-40,-38],["silicon",45,42]];for(let[e,n,s]of i)Sr(e,n,s);let t={iron:70,silicon:50,ice:40,titanium:22};for(let e in t)for(let n=0;n<t[e];n++){let s=qf(e,e==="titanium"?null:n<t[e]*.35?[40,220]:null);s&&Sr(e,s[0],s[1])}}function $f(i){m.scene.remove(i.mesh),m.colliders.remove(i.collider);let t=m.nodes.indexOf(i);t>=0&&m.nodes.splice(t,1)}var Mr=[];function Zf(i,t){i.amount-=t;let e=.35+.65*Math.max(0,i.amount/i.max);if(i.mesh.scale.setScalar(e),i.amount<=0){let n=i.mesh.position.clone();return n.y+=1,It.burst(n,nu[i.type],50,7),It.dustPuff(n,16,3),$f(i),Mr.push({type:i.type,t:90+Math.random()*60}),!0}return!1}function Jf(i){for(let e=Mr.length-1;e>=0;e--)if(Mr[e].t-=i,Mr[e].t<=0){let n=Mr[e].type;Mr.splice(e,1);let s=qf(n,n==="titanium"?null:[60,400]);s&&Sr(n,s[0],s[1])}let t=1+Math.sin(performance.now()*.002)*.15;go.titanium.emissiveIntensity=.5*t}function Kf(){return m.nodes.map(i=>[i.type,+i.x.toFixed(1),+i.z.toFixed(1),Math.round(i.amount)])}function Qf(i){for(let t of[...m.nodes])$f(t);for(let[t,e,n,s]of i){let r=Sr(t,e,n);r.amount=s,r.mesh.scale.setScalar(.35+.65*s/r.max)}}var ln=[{name:"\u524D\u54E8\u7AD9",icon:"\u26FA",pop:0,b:0,r:75},{name:"\u5B9A\u5C45\u70B9",icon:"\u{1F3D8}",pop:4,b:6,r:120},{name:"\u5C0F\u9547",icon:"\u{1F3E1}",pop:12,b:14,r:175},{name:"\u57CE\u5E02",icon:"\u{1F3D9}",pop:24,b:22,r:240},{name:"\u5927\u90FD\u4F1A",icon:"\u{1F306}",pop:36,b:32,r:310},{name:"\u661F\u6E2F",icon:"\u{1F680}",pop:50,b:42,r:390}],Hn={x:0,z:0},br,oc,Er=0;function su(i){oc=new ye({color:6743807,transparent:!0,opacity:.12,side:$e,depthWrite:!1,blending:Ze}),m.cityLevel=m.cityLevel||0,Er=ln[m.cityLevel].r,jf(Er)}function jf(i){br&&(m.scene.remove(br),br.geometry.dispose());let t=Math.ceil(i*1.2),e=[],n=[],s=1.4;for(let o=0;o<=t;o++){let a=o/t*Math.PI*2,c=Hn.x+Math.cos(a)*i,l=Hn.z+Math.sin(a)*i,h=Ut(c,l);if(e.push(c,h,l,c,h+s,l),o<t){let u=o*2;n.push(u,u+1,u+2,u+1,u+3,u+2)}}let r=new Ie;r.setAttribute("position",new re(e,3)),r.setIndex(n),br=new Ft(r,oc),br.frustumCulled=!1,m.scene.add(br)}function tp(i,t,e=0){return Math.hypot(i-Hn.x,t-Hn.z)<=ln[m.cityLevel].r-e}function ep(){let i=ln[m.cityLevel+1];return i?{...i,curPop:m.colony.pop,curB:m.buildings.length}:null}var iu=0;function np(i,t){oc.opacity+=((t?.45:.1)-oc.opacity)*Math.min(1,i*4);let e=ln[m.cityLevel].r;if(Er<e&&(Er=Math.min(e,Er+i*40),jf(Er)),iu-=i,iu>0)return;iu=1;let n=ln[m.cityLevel+1];if(n&&m.colony.pop>=n.pop&&m.buildings.length>=n.b){m.cityLevel++,_t.play("chapter"),m.events.emit("cityLevel",ln[m.cityLevel]);let s=new A(Hn.x,Ut(Hn.x,Hn.z)+2,Hn.z);It.burst(s,[.4,.9,1],120,18)}}var Cn={solar:{name:"\u592A\u9633\u80FD\u9635\u5217",icon:"\u2600\uFE0F",chapter:0,cost:{iron:8,silicon:6},power:4,r:2.6,hp:120,desc:"\u767D\u5929\u53D1\u7535 +4 \u26A1\uFF0C\u591C\u95F4\u964D\u81F3 +1.6\u3002\u6B96\u6C11\u5730\u7684\u5FC3\u8DF3\u4ECE\u8FD9\u91CC\u5F00\u59CB\u3002"},oxygen:{name:"\u5236\u6C27\u7AD9",icon:"\u{1FAE7}",chapter:0,cost:{iron:12,silicon:4,ice:6},power:-2,r:3,hp:160,o2:6,life:14,desc:"\u7535\u89E3\u6C34\u51B0\u5236\u9020\u6C27\u6C14\u3002\u4E3A 6 \u4F4D\u5C45\u6C11\u4F9B\u6C27\uFF0C\u5E76\u5728 14 \u7C73\u5185\u4E3A\u4F60\u7684\u5B87\u822A\u670D\u8865\u6C27\u3002"},lamp:{name:"\u7167\u660E\u706F",icon:"\u{1F4A1}",chapter:0,cost:{iron:3},power:0,r:.6,hp:60,desc:"\u7167\u4EAE\u706B\u661F\u7684\u957F\u591C\u3002"},habitat:{name:"\u5C45\u4F4F\u7A79\u9876",icon:"\u{1F3E0}",chapter:1,cost:{iron:25,silicon:12},power:-1,r:6.4,hp:300,housing:4,life:12,desc:"\u53EF\u4F4F 4 \u4EBA\u3002\u7A79\u9876\u91CC\u6709\u6696\u5149\u3001\u690D\u7269\u548C\u5BB6\u4EBA\u7684\u7167\u7247\u3002"},greenhouse:{name:"\u6E29\u5BA4",icon:"\u{1F331}",chapter:1,cost:{iron:14,silicon:16,ice:8},power:-2,r:5.4,hp:160,food:5,desc:"\u5728\u706B\u661F\u571F\u58E4\u91CC\u79CD\u51FA\u7B2C\u4E00\u68F5\u571F\u8C46\u3002\u4F9B 5 \u4EBA\u98DF\u7269\u3002"},extractor:{name:"\u6C34\u51B0\u63D0\u53D6\u5668",icon:"\u{1F4A7}",chapter:1,cost:{iron:16,silicon:4,ice:4},power:-2,r:2.8,hp:160,water:6,desc:"\u4ECE\u5730\u4E0B\u51BB\u571F\u4E2D\u94BB\u53D6\u6C34\u3002\u4F9B 6 \u4EBA\u7528\u6C34\u3002"},beacon:{name:"\u7740\u9646\u573A",icon:"\u{1F6EC}",chapter:1,cost:{iron:24,silicon:14},power:-1,r:7.4,hp:250,desc:"\u5411\u5730\u7403\u53D1\u51FA\u4FE1\u53F7\u3002\u6761\u4EF6\u6EE1\u8DB3\u65F6\uFF0C\u79FB\u6C11\u98DE\u8239\u4F1A\u5728\u8FD9\u91CC\u964D\u843D\u3002"},fabricator:{name:"\u5236\u9020\u5DE5\u574A",icon:"\u{1F527}",chapter:2,cost:{iron:22,silicon:14},power:-1,r:4.6,hp:220,desc:"\u9760\u8FD1\u6309 E \u5236\u9020\u6B66\u5668\u4E0E\u88C5\u5907\u3002"},turret:{name:"\u9632\u5FA1\u70AE\u5854",icon:"\u{1F6E1}\uFE0F",chapter:2,cost:{iron:22,silicon:10},power:-2,r:1.9,hp:200,range:40,desc:"\u81EA\u52A8\u653B\u51FB 40 \u7C73\u5185\u7684\u9508\u8680\u86DB\u3002\u9700\u8981\u7535\u529B\u3002"},reactor:{name:"\u805A\u53D8\u53CD\u5E94\u5806",icon:"\u269B\uFE0F",chapter:3,cost:{iron:40,silicon:20,titanium:12},power:20,r:5.4,hp:400,desc:"\u663C\u591C\u4E0D\u505C +20 \u26A1\u3002\u7528\u706B\u661F\u7684\u949B\uFF0C\u70B9\u4EAE\u4EBA\u7C7B\u7684\u7B2C\u4E8C\u9897\u592A\u9633\u3002"},apartment:{name:"\u516C\u5BD3\u5854",icon:"\u{1F3E2}",level:2,cost:{iron:40,silicon:25,titanium:4},power:-3,r:4.6,hp:400,housing:12,life:12,desc:"\u53EF\u4F4F 12 \u4EBA\u3002\u7A97\u6237\u91CC\u7684\u706F\u5149\uFF0C\u662F\u57CE\u5E02\u7684\u661F\u7A7A\u3002"},vfarm:{name:"\u5782\u76F4\u519C\u573A",icon:"\u{1F33E}",level:2,cost:{iron:30,silicon:30,ice:15},power:-4,r:4.2,hp:260,food:14,desc:"\u5341\u56DB\u5C42\u7684\u7ACB\u4F53\u519C\u7530\u3002\u4F9B 14 \u4EBA\u98DF\u7269\u3002"},lifehub:{name:"\u751F\u6001\u4E2D\u67A2",icon:"\u{1F300}",level:3,cost:{iron:45,silicon:30,ice:30,titanium:6},power:-5,r:6,hp:400,o2:16,water:16,life:20,desc:"\u5927\u578B\u6C27\u6C14\u4E0E\u6C34\u5FAA\u73AF\u7CFB\u7EDF\u3002\u4F9B 16 \u4EBA\u6C27\u6C14\u548C\u7528\u6C34\uFF0C20 \u7C73\u5185\u8865\u6C27\u3002"},terraformer:{name:"\u5927\u6C14\u6539\u9020\u5854",icon:"\u{1F30D}",chapter:4,only:"terraformable",cost:{iron:100,silicon:60,titanium:30,ice:50},power:-12,r:7.4,hp:800,desc:"\u5411\u5929\u7A7A\u91CA\u653E\u6E29\u5BA4\u6C14\u4F53\u4E0E\u6C34\u6C7D\u3002\u8BA9\u8FD9\u9897\u661F\u7403\uFF0C\u771F\u6B63\u6210\u4E3A\u5BB6\u3002"},launch:{name:"\u661F\u9645\u53D1\u5C04\u53F0",icon:"\u{1F6F8}",chapter:5,level:Ke==="mars"?5:4,only:"next",cost:{iron:160,silicon:120,titanium:60,ice:60},power:-15,r:9.5,hp:900,desc:"\u5EFA\u9020\u6B96\u6C11\u8230\uFF0C\u524D\u5F80\u4E0B\u4E00\u9897\u661F\u7403\u3002\u9760\u8FD1\u6309 E \u53D1\u5C04\u3002"},monument:{name:"\u6587\u660E\u7EAA\u5FF5\u7891",icon:"\u{1F5FC}",level:5,only:"final",cost:{iron:150,silicon:120,titanium:80},power:-6,r:6.5,hp:900,desc:"\u4E09\u9897\u661F\u7403\uFF0C\u4E00\u4E2A\u4EBA\u7C7B\u3002\u732E\u7ED9\u6240\u6709\u51FA\u53D1\u7684\u4EBA\u3002"}};function ac(i){let t=Cn[i];return t.only==="terraformable"&&!yt.terraformable?{hide:!0}:t.only==="next"&&!yt.next?{hide:!0}:t.only==="final"&&yt.next?{hide:!0}:Ke==="mars"&&t.chapter&&t.chapter>m.chapter?{ok:!1,why:"\u5267\u60C5\u63A8\u8FDB\u540E\u89E3\u9501"}:t.level&&t.level>m.cityLevel?{ok:!1,why:`\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C${ln[t.level].name}\u300D\u89E3\u9501`}:{ok:!0}}var ip=["solar","oxygen","lamp","habitat","greenhouse","extractor","beacon","fabricator","turret","reactor","apartment","vfarm","lifehub","terraformer","launch","monument"],Pv=["oxygen","lifehub","turret","habitat","apartment","extractor","greenhouse","vfarm","beacon","fabricator","terraformer","launch","monument"];function cc(i,t,e,n=0,s){let r=Cn[i],o=new ce,a={};Qa[i](o,a);let c=Ut(t,e);o.position.set(t,c,e),o.rotation.y=n,m.scene.add(o);let l={type:i,def:r,x:t,z:e,y:c,rot:n,group:o,anim:a,hp:s??r.hp,broken:s!==void 0&&s<=0,powered:!0,t:Math.random()*10,cool:0};return l.collider=m.colliders.add({x:t,z:e,r:r.r*(i==="beacon"?.15:.9),kind:"building",b:l}),m.buildings.push(l),m.stats.built[i]=(m.stats.built[i]||0)+1,Zi(),l}function sp(i,t=!1){if(t)for(let s in i.def.cost)m.res[s]+=Math.floor(i.def.cost[s]*.5);m.scene.remove(i.group),m.colliders.remove(i.collider);let e=m.buildings.indexOf(i);e>=0&&m.buildings.splice(e,1),m.stats.built[i.type]=Math.max(0,(m.stats.built[i.type]||0)-1);let n=new A(i.x,i.y+2,i.z);It.burst(n,[1,.6,.3],60,10),It.dustPuff(n,30,i.def.r*2),Zi()}function rp(i){return m.buildings.filter(t=>t.type===i).length}function Zi(){let i=m.colony,t=(m.time.elevation>.05?1:.4)*yt.solar,e=0,n=0;for(let r of m.buildings)r.broken||(r.def.power>0?e+=r.type==="solar"?r.def.power*t:r.def.power:n-=r.def.power);let s=e;for(let r of m.buildings)r.powered=r.def.power>=0&&!r.broken;for(let r of Pv)for(let o of m.buildings)o.type===r&&!o.broken&&s>=-o.def.power&&(s+=o.def.power,o.powered=!0);i.powerProd=e,i.powerUse=n,i.deficit=n>e+.001,i.housing=0,i.o2=0,i.food=0,i.water=0;for(let r of m.buildings)r.def.housing&&(i.housing+=r.def.housing),r.powered&&(r.def.o2&&(i.o2+=r.def.o2),r.def.food&&(i.food+=r.def.food),r.def.water&&(i.water+=r.def.water));i.support=Math.min(i.housing,i.o2,i.food,i.water)}function op(i){for(let t of m.buildings){if(!t.def.life||!t.powered)continue;let e=t.x-i.x,n=t.z-i.z;if(e*e+n*n<t.def.life*t.def.life)return t}return null}var jn=null,Lv=null,ap=new ye({color:5636010,transparent:!0,opacity:.35,depthWrite:!1}),Dv=new ye({color:16729156,transparent:!0,opacity:.35,depthWrite:!1}),Rn,te={type:null,rot:0,valid:!1,reason:"",x:0,z:0};function As(i){if(jn&&(m.scene.remove(jn),jn=null),te.type=i,Lv=i,!i){Rn&&(Rn.visible=!1);return}let t=new ce;Qa[i](t,{}),t.traverse(n=>{n.isMesh&&(n.material=ap,n.castShadow=!1,n.receiveShadow=!1),(n.isSprite||n.userData.found)&&(n.visible=!1)}),jn=t,m.scene.add(t),Rn||(Rn=new Ft(new $n(.96,1,64),new ye({color:6741503,transparent:!0,opacity:.5,depthWrite:!1,side:$e})),Rn.rotation.x=-Math.PI/2,m.scene.add(Rn));let e=Cn[i].life||Cn[i].range||0;Rn.visible=e>0,Rn.scale.setScalar(e||1)}function cp(i,t){if(!jn)return;if(!i){jn.visible=!1,Rn.visible=!1,te.valid=!1,te.reason="\u5BF9\u51C6\u5730\u9762";return}jn.visible=!0;let e=Cn[te.type],n=i.x,s=i.z,r=Math.hypot(n-t.x,s-t.z),o=e.r+1.2;if(r<o){let h=r>.01?(n-t.x)/r:-Math.sin(m.player.yaw),u=r>.01?(s-t.z)/r:-Math.cos(m.player.yaw);n=t.x+h*o,s=t.z+u*o,r=o}let a=Ut(n,s);jn.position.set(n,a,s),jn.rotation.y=te.rot,te.x=n,te.z=s,Rn.scale.x>1&&(Rn.visible=!0,Rn.position.set(n,a+.3,s));let c="";_s(e.cost)?ao(n,s,Math.max(1.5,e.r*.7))>(e.r>4?.32:.45)?c="\u5730\u9762\u592A\u9661":m.colliders.overlaps(n,s,e.r*.85)?c="\u4F4D\u7F6E\u88AB\u5360\u7528":r<e.r+.8?c="\u79BB\u81EA\u5DF1\u592A\u8FD1":Math.abs(n)>le-170||Math.abs(s)>le-170?c="\u8D85\u51FA\u53EF\u5EFA\u9020\u533A\u57DF":tp(n,s,e.r)||(c="\u8D85\u51FA\u6B96\u6C11\u5730\u9886\u5730\uFF08\u63D0\u5347\u57CE\u5E02\u7B49\u7EA7\u6765\u6269\u5F20\uFF09"):c="\u8D44\u6E90\u4E0D\u8DB3",te.valid=!c,te.reason=c;let l=c?Dv:ap;jn.traverse(h=>{h.isMesh&&(h.material=l)})}function lp(){if(!te.type||!te.valid)return _t.play("deny"),null;let i=Cn[te.type];Ha(i.cost);let t=cc(te.type,te.x,te.z,te.rot);return _t.play("place"),It.ring(new A(t.x,t.y,t.z),i.r,50),t}var ru=0;function hp(i,t){ru-=i,ru<=0&&(ru=.5,Zi());let e=m.time.night,n=performance.now()*.001;V.window.emissiveIntensity=.3+e*1.6,V.lamp.emissiveIntensity=e*4;for(let s of jh)s.emissiveIntensity=.15+e*1.4;for(let s of m.buildings){let r=s.anim,o=s.powered;switch(s.t+=i,s.hp<s.def.hp&&m.time.night<.5&&(s.hp=Math.min(s.def.hp,s.hp+i*(s.broken?5:2)),s.broken&&s.hp>=s.def.hp*.5&&(s.broken=!1,Zi(),m.events.emit("toast",`\u{1F527} ${s.def.name} \u5DF2\u4FEE\u590D\uFF0C\u6062\u590D\u8FD0\u8F6C`))),s.broken&&Math.random()<i*6&&It.dustPuff(new A(s.x+(Math.random()-.5)*s.def.r,s.y+1.5,s.z+(Math.random()-.5)*s.def.r),1,.5,[.15,.13,.12]),s.type){case"solar":{let a=new A(kn.x,Math.max(kn.y,.2),kn.z).applyAxisAngle(new A(0,1,0),-s.rot);r.pivot.rotation.y=Math.atan2(a.x,a.z),r.panel.rotation.x=Math.PI/2-Math.asin(Math.min(1,a.y/a.length()));break}case"oxygen":o&&(r.fan.rotation.z+=i*8),r.light.visible=o;break;case"extractor":o&&(r.drill.position.y=3+Math.sin(s.t*3)*.8),r.light.visible=o;break;case"greenhouse":r.light.material.opacity=o?.3+e*.5:0;break;case"fabricator":o?(r.arm.rotation.y=Math.sin(s.t*.8)*1.2,r.spark.visible=Math.sin(s.t*7)>.6):r.spark.visible=!1;break;case"habitat":r.tip.visible=Math.sin(n*2+s.x)>.3;break;case"apartment":r.tip.visible=Math.sin(n*2+s.z)>.3;break;case"vfarm":r.light.material.opacity=o?.25+e*.5:0;break;case"lifehub":o&&(r.fan.rotation.y+=i*3),r.light.visible=o;break;case"monument":r.rings.forEach((a,c)=>{a.rotation.x=n*(.3+c*.2),a.rotation.y=n*(.2+c*.15)});break;case"reactor":r.r1.rotation.y+=i*.8,r.r2.rotation.z+=i*.6,r.light.material.opacity=.5+Math.sin(n*3)*.2;break;case"beacon":{let a=Math.floor(n*6)%8;r.lights.forEach((c,l)=>{c.visible=o&&(l===a||l===(a+4)%8||e>.3)}),r.tip.visible=Math.sin(n*3)>0;break}case"lamp":r.glow.visible=e>.2,r.glow.material.opacity=e;break;case"turret":Uv(s,i,t);break;case"terraformer":{r.rings.forEach((a,c)=>{a.position.y=10+c*8+Math.sin(n*1.5+c)*1.5,a.rotation.x=Math.sin(n+c)*.2}),r.beam.material.opacity=o&&m.terraform<1?.18+Math.sin(n*4)*.05:0,o&&m.terraform<1&&Math.random()<.6&&It.rise(new A(s.x,s.y+28,s.z),[.4,.9,1],4);break}}}}function Uv(i,t,e){let n=i.anim;if(n.eye.visible=i.powered,!i.powered)return;i.cool-=t;let s=null,r=i.def.range;for(let c of m.enemies){if(c.dead)continue;let l=Math.hypot(c.pos.x-i.x,c.pos.z-i.z);l<r&&(r=l,s=c)}if(!s){n.head.rotation.y+=t*.4;return}let a=Math.atan2(-(s.pos.x-i.x),-(s.pos.z-i.z))-i.rot-n.head.rotation.y;if(a=Math.atan2(Math.sin(a),Math.cos(a)),n.head.rotation.y+=Math.sign(a)*Math.min(Math.abs(a),t*5),Math.abs(a)<.15&&i.cool<=0){i.cool=.45;let c=new A(i.x,i.y+2.7,i.z),l=s.pos.clone();l.y+=1;let h=l.sub(c).normalize();c.addScaledVector(h,2.2),e.shoot(c,h,15,"turret"),_t.play("turret")}}function up(){return m.buildings.map(i=>[i.type,+i.x.toFixed(2),+i.z.toFixed(2),+i.rot.toFixed(3),Math.round(i.hp)])}var Pe=i=>()=>rp(i)>=1,Ji=(i,t)=>({check:()=>m.stats.mined[i]>=t,prog:()=>`${Math.min(m.stats.mined[i],t)}/${t}`}),Cs=i=>({text:`\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C${ln[i].name}\u300D`,check:()=>m.cityLevel>=i,prog:()=>`\u4EBA\u53E3 ${m.colony.pop}/${ln[i].pop}`}),hc=i=>({text:`\u4EBA\u53E3\u8FBE\u5230 ${i}`,check:()=>m.colony.pop>=i,prog:()=>`${m.colony.pop}/${i}`}),dp={text:"\u53D1\u5C04\u6B96\u6C11\u8230",check:()=>!!m.launched,prog:()=>"\u9760\u8FD1\u53D1\u5C04\u53F0\u6309 E"},Nv=[{title:"\u7B2C\u4E00\u7AE0 \xB7 \u7740\u9646",sub:"\u6D3B\u4E0B\u53BB",goals:[{text:"\u91C7\u96C6\u94C1\u77FF",...Ji("iron",10)},{text:"\u91C7\u96C6\u7845\u6676",...Ji("silicon",6)},{text:"\u91C7\u96C6\u6C34\u51B0",...Ji("ice",6)},{text:"\u5EFA\u9020\u592A\u9633\u80FD\u9635\u5217",check:Pe("solar")},{text:"\u5EFA\u9020\u5236\u6C27\u7AD9",check:Pe("oxygen")}],radio:[["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u7740\u9646\u6210\u529F\u3002\u5916\u90E8\u6C14\u538B 0.6 \u5343\u5E15\uFF0C\u6C14\u6E29\u96F6\u4E0B 63 \u6444\u6C0F\u5EA6\u3002\u6B22\u8FCE\u6765\u5230\u706B\u661F\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u65B9\u821F\u4E00\u53F7\uFF0C\u8FD9\u91CC\u662F\u5730\u7403\u8054\u5408\u6307\u6325\u4E2D\u5FC3\u3002\u542C\u5230\u8BF7\u56DE\u7B54\u2026\u2026\u5F88\u597D\u3002\u4F60\u662F\u7B2C\u4E00\u4E2A\u8E0F\u4E0A\u8FD9\u7247\u571F\u5730\u7684\u4EBA\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u7740\u9646\u8231\u53EA\u80FD\u5728\u5B83\u5468\u56F4\u5F88\u5C0F\u7684\u8303\u56F4\u5185\u7ED9\u4F60\u8865\u6C27\u3002\u6309\u4F4F\u5DE6\u952E\u7528\u91C7\u77FF\u6FC0\u5149\u91C7\u96C6\u94C1\u77FF\u3001\u7845\u6676\u548C\u6C34\u51B0\uFF0C\u7136\u540E\u6309 B \u5EFA\u8D77\u7B2C\u4E00\u5EA7\u5236\u6C27\u7AD9\u3002"]]},{title:"\u7B2C\u4E8C\u7AE0 \xB7 \u7B2C\u4E00\u4E2A\u5BB6",sub:"\u4E3A\u540E\u6765\u7684\u4EBA\u70B9\u4E00\u76CF\u706F",goals:[{text:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",check:Pe("habitat")},{text:"\u5EFA\u9020\u6E29\u5BA4",check:Pe("greenhouse")},{text:"\u5EFA\u9020\u6C34\u51B0\u63D0\u53D6\u5668",check:Pe("extractor")},{text:"\u5EFA\u9020\u7740\u9646\u573A",check:Pe("beacon")},{text:"\u8FCE\u63A5\u7B2C\u4E00\u6279\u79FB\u6C11",check:()=>m.stats.arrived>=1,prog:()=>m.colony.support>0?"\u7B49\u5F85\u98DE\u8239":"\u9700\u8981\u4F4F\u623F/\u6C27/\u6C34/\u98DF\u7269/\u7535"}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5236\u6C27\u7AD9\u8FD0\u8F6C\u6B63\u5E38\uFF01\u5B83\u5468\u56F4 14 \u7C73\u90FD\u80FD\u7ED9\u5B87\u822A\u670D\u8865\u6C27\uFF0C\u4F60\u53EF\u4EE5\u8D70\u5F97\u66F4\u8FDC\u4E86\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5730\u7403\u4E0A\u6709\u5341\u4E07\u4EBA\u62A5\u540D\u4E86\u79FB\u6C11\u8BA1\u5212\u3002\u5EFA\u597D\u7A79\u9876\u3001\u6E29\u5BA4\u3001\u6C34\u6E90\u548C\u7740\u9646\u573A\u2014\u2014\u7ED9\u4ED6\u4EEC\u4E00\u4E2A\u53EF\u4EE5\u56DE\u7684\u5BB6\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u63D0\u793A\uFF1A\u592A\u9633\u80FD\u5728\u591C\u95F4\u53EA\u5269\u56DB\u6210\u529F\u7387\u3002\u591A\u5EFA\u51E0\u5EA7\uFF0C\u6B96\u6C11\u5730\u624D\u4E0D\u4F1A\u5728\u591C\u91CC\u65AD\u7535\u3002"]]},{title:"\u7B2C\u4E09\u7AE0 \xB7 \u957F\u591C",sub:"\u5B88\u62A4\u6211\u4EEC\u7684\u4EBA",goals:[{text:"\u5EFA\u9020\u5236\u9020\u5DE5\u574A",check:Pe("fabricator")},{text:"\u5236\u9020\u7B49\u79BB\u5B50\u6B65\u67AA",check:()=>!!m.upgrades.rifle},{text:"\u5EFA\u9020\u9632\u5FA1\u70AE\u5854",check:Pe("turret")},{text:"\u51FB\u9000\u9508\u8680\u86DB",check:()=>m.stats.kills>=6,prog:()=>`${Math.min(m.stats.kills,6)}/6`}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u2026\u2026\u7B2C\u4E00\u6279\u79FB\u6C11\u5B89\u5168\u7740\u9646\u4E86\u3002\u6211\u8FD9\u8FB9\u7684\u63A7\u5236\u5BA4\u91CC\uFF0C\u6240\u6709\u4EBA\u90FD\u7AD9\u8D77\u6765\u9F13\u638C\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u5730\u8D28\u96F7\u8FBE\u5728\u591C\u95F4\u63A2\u6D4B\u5230\u5927\u91CF\u5730\u4E0B\u79FB\u52A8\u4FE1\u53F7\u3002\u5B83\u4EEC\u4F3C\u4E4E\u88AB\u6B96\u6C11\u5730\u7684\u70ED\u91CF\u5438\u5F15\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5EFA\u4E00\u5EA7\u5236\u9020\u5DE5\u574A\uFF0C\u9020\u6B66\u5668\uFF0C\u5EFA\u70AE\u5854\u3002\u5B88\u4F4F\u5927\u5BB6\u3002"]]},{title:"\u7B2C\u56DB\u7AE0 \xB7 \u624E\u6839",sub:"\u8BA9\u706F\u706B\u5F7B\u591C\u4E0D\u7184",goals:[{text:"\u6B96\u6C11\u5730\u4EBA\u53E3\u8FBE\u5230 12",check:()=>m.colony.pop>=12,prog:()=>`${m.colony.pop}/12`},{text:"\u91C7\u96C6\u949B\u77FF",...Ji("titanium",12)},{text:"\u5EFA\u9020\u805A\u53D8\u53CD\u5E94\u5806",check:Pe("reactor")}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u4F60\u4EEC\u6491\u8FC7\u4E86\u957F\u591C\u3002\u73B0\u5728\uFF0C\u662F\u65F6\u5019\u8BA9\u6B96\u6C11\u5730\u771F\u6B63\u624E\u6839\u4E86\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5728\u8FDC\u65B9\u7684\u7D2B\u8272\u6676\u4F53\u77FF\u8109\u4E2D\u68C0\u6D4B\u5230\u9AD8\u7EAF\u5EA6\u949B\u3002\u6CE8\u610F\uFF1A\u90A3\u91CC\u6709\u4F53\u578B\u66F4\u5927\u7684\u9508\u8680\u86DB\u5B88\u536B\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u63D0\u793A\uFF1A\u5728\u5236\u9020\u5DE5\u574A\u53EF\u4EE5\u9020\u55B7\u6C14\u80CC\u5305\u548C\u5927\u5BB9\u91CF\u6C27\u6C14\u7F50\uFF0C\u9002\u5408\u957F\u9014\u52D8\u63A2\u3002"]]},{title:"\u7B2C\u4E94\u7AE0 \xB7 \u65B0\u5BB6\u56ED",sub:"\u6B64\u5FC3\u5B89\u5904\u662F\u543E\u4E61",goals:[{text:"\u5EFA\u9020\u5927\u6C14\u6539\u9020\u5854",check:Pe("terraformer")},{text:"\u6B96\u6C11\u5730\u4EBA\u53E3\u8FBE\u5230 20",check:()=>m.colony.pop>=20,prog:()=>`${m.colony.pop}/20`},{text:"\u5B8C\u6210\u5927\u6C14\u6539\u9020",check:()=>m.terraform>=1&&m.ended&&!m.endingShown,prog:()=>`${Math.floor(m.terraform*100)}%`}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u805A\u53D8\u53CD\u5E94\u5806\u70B9\u706B\u6210\u529F\u3002\u6B96\u6C11\u5730\u7B2C\u4E00\u6B21\u5728\u591C\u91CC\u4E5F\u706F\u706B\u901A\u660E\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u6700\u540E\u4E00\u6B65\u4E86\u3002\u5927\u6C14\u6539\u9020\u5854\u2014\u2014\u5B83\u8981\u51E0\u5341\u5E74\u624D\u80FD\u5F7B\u5E95\u6539\u53D8\u706B\u661F\u3002\u4F46\u7B2C\u4E00\u573A\u96E8\uFF0C\u4E5F\u8BB8\u5C31\u5728\u660E\u5929\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u63D0\u793A\uFF1A\u57CE\u5E02\u7B49\u7EA7\u63D0\u5347\u540E\u9886\u5730\u4F1A\u6269\u5927\uFF0C\u5E76\u89E3\u9501\u516C\u5BD3\u5854\u3001\u5782\u76F4\u519C\u573A\u3001\u751F\u6001\u4E2D\u67A2\u3002"]]},{title:"\u7B2C\u516D\u7AE0 \xB7 \u661F\u8FB0\u5927\u6D77",sub:"\u4E0B\u4E00\u9897\u661F\u7403",goals:[Cs(5),{text:"\u5EFA\u9020\u661F\u9645\u53D1\u5C04\u53F0",check:Pe("launch")},dp],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u706B\u661F\u5DF2\u7ECF\u662F\u5BB6\u4E86\u3002\u4F46\u4EBA\u7C7B\u7684\u6545\u4E8B\uFF0C\u4ECE\u6765\u4E0D\u6B62\u4E8E\u4E00\u4E2A\u5BB6\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u6728\u536B\u4E8C\xB7\u6B27\u7F57\u5DF4\uFF1A\u51B0\u58F3\u4E4B\u4E0B\u63A2\u6D4B\u5230\u6DB2\u6001\u6D77\u6D0B\u3002\u628A\u706B\u661F\u53D1\u5C55\u6210\u300C\u661F\u6E2F\u300D\uFF0C\u5C31\u80FD\u5EFA\u9020\u661F\u9645\u53D1\u5C04\u53F0\u3002"]]}],Fv=[{title:"\u7B2C\u4E00\u7AE0 \xB7 \u51B0\u539F",sub:"\u5728\u6728\u661F\u7684\u6CE8\u89C6\u4E0B",goals:[{text:"\u91C7\u96C6\u6C34\u51B0",...Ji("ice",15)},{text:"\u91C7\u96C6\u94C1\u77FF",...Ji("iron",10)},{text:"\u5EFA\u9020\u5236\u6C27\u7AD9",check:Pe("oxygen")},{text:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",check:Pe("habitat")},{text:"\u5EFA\u9020\u7740\u9646\u573A",check:Pe("beacon")}],radio:[["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u7740\u9646\u6210\u529F\u3002\u8868\u9762\u6E29\u5EA6\u96F6\u4E0B 160 \u6444\u6C0F\u5EA6\u3002\u91CD\u529B\u53EA\u6709\u5730\u7403\u7684\u4E03\u5206\u4E4B\u4E00\u3002"],["\u706B\u661F\u6B96\u6C11\u5730 \xB7 \u6797\u6653","\u4F60\u5230\u4E86\u5417\uFF1F\u6211\u4EEC\u5728\u706B\u661F\u4E0A\u770B\u5F97\u89C1\u6728\u661F\u7684\u5149\u70B9\u3002\u66FF\u6211\u4EEC\u770B\u4E00\u773C\u5B83\u7684\u5927\u7EA2\u6591\u5427\u3002"],["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u6CE8\u610F\uFF1A\u8FD9\u91CC\u79BB\u592A\u9633\u592A\u8FDC\uFF0C\u592A\u9633\u80FD\u6548\u7387\u53EA\u6709\u706B\u661F\u7684\u4E00\u534A\u3002\u6240\u6709\u6280\u672F\u5DF2\u4ECE\u706B\u661F\u540C\u6B65\u3002"]]},{title:"\u7B2C\u4E8C\u7AE0 \xB7 \u51B0\u4E0B\u4E4B\u57CE",sub:"\u6D77\u6D0B\u4E4B\u4E0A\u7684\u706F\u706B",goals:[hc(8),Cs(2),{text:"\u5EFA\u9020\u805A\u53D8\u53CD\u5E94\u5806",check:Pe("reactor")}],radio:[["\u5468\u9752\u79BE \xB7 \u6C34\u6587\u5B66\u5BB6","\u51B0\u5C42\u4E0B\u7684\u6D77\u6D0B\u6BD4\u5730\u7403\u6240\u6709\u6D77\u6D0B\u52A0\u8D77\u6765\u8FD8\u591A\u3002\u6709\u6C34\uFF0C\u5C31\u6709\u751F\u547D\u3002"],["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u51B0\u88C2\u7F1D\u91CC\u6709\u4E1C\u897F\u5728\u79FB\u52A8\u3002\u5B83\u4EEC\u548C\u706B\u661F\u7684\u9508\u8680\u86DB\u5F88\u50CF\u2026\u2026\u4F46\u662F\u84DD\u8272\u7684\u3002"]]},{title:"\u7B2C\u4E09\u7AE0 \xB7 \u6DF1\u6E0A\u4E4B\u5149",sub:"\u57CE\u5E02\u5728\u51B0\u539F\u4E0A\u751F\u957F",goals:[Cs(3),hc(24),{text:"\u5EFA\u9020\u751F\u6001\u4E2D\u67A2",check:Pe("lifehub")}],radio:[["Elena Petrova \xB7 \u5929\u6587\u5B66\u5BB6","\u4F60\u77E5\u9053\u5417\uFF1F\u4ECE\u8FD9\u91CC\u770B\uFF0C\u592A\u9633\u53EA\u662F\u4E00\u9897\u7279\u522B\u4EAE\u7684\u661F\u661F\u3002"]]},{title:"\u7B2C\u56DB\u7AE0 \xB7 \u4E0B\u4E00\u7AD9",sub:"\u4E00\u5343\u4E8C\u767E\u5149\u5E74",goals:[Cs(4),{text:"\u5EFA\u9020\u661F\u9645\u53D1\u5C04\u53F0",check:Pe("launch")},dp],radio:[["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u5F00\u666E\u52D2-442b\uFF1A\u4F4D\u4E8E\u5B9C\u5C45\u5E26\u7684\u7C7B\u5730\u884C\u661F\uFF0C\u8DDD\u79BB\u4E00\u5343\u4E8C\u767E\u5149\u5E74\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u8FD9\u5C06\u662F\u4EBA\u7C7B\u7B2C\u4E00\u6B21\u79BB\u5F00\u592A\u9633\u7CFB\u3002\u6211\u8001\u4E86\uFF0C\u7B49\u4E0D\u5230\u4F60\u4EEC\u62B5\u8FBE\u7684\u90A3\u5929\u3002\u4F46\u6211\u4F1A\u4E00\u76F4\u770B\u7740\u661F\u7A7A\u3002"]]}],Ov=[{title:"\u7B2C\u4E00\u7AE0 \xB7 \u53CC\u65E5\u4E4B\u4E0B",sub:"\u53E6\u4E00\u9897\u6052\u661F\u7684\u6668\u5149",goals:[{text:"\u91C7\u96C6\u94C1\u77FF",...Ji("iron",15)},{text:"\u91C7\u96C6\u7845\u6676",...Ji("silicon",10)},{text:"\u5EFA\u9020\u5236\u6C27\u7AD9",check:Pe("oxygen")},{text:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",check:Pe("habitat")},{text:"\u5EFA\u9020\u7740\u9646\u573A",check:Pe("beacon")}],radio:[["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u51B7\u51BB\u4F11\u7720\u7ED3\u675F\u3002\u5F53\u524D\u65E5\u671F\uFF1A\u516C\u5143 2401 \u5E74\u3002\u6B22\u8FCE\u6765\u5230\u5F00\u666E\u52D2-442b\u3002"],["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u5927\u6C14\u542B\u6C27 14%\uFF0C\u8FD8\u4E0D\u591F\u547C\u5438\uFF0C\u4F46\u5DF2\u7ECF\u975E\u5E38\u63A5\u8FD1\u4E86\u3002\u8FD9\u91CC\u7684\u91CD\u529B\u6BD4\u5730\u7403\u7565\u5927\u3002"]]},{title:"\u7B2C\u4E8C\u7AE0 \xB7 \u5F02\u661F\u68EE\u6797",sub:"\u4F1A\u53D1\u5149\u7684\u6811",goals:[hc(10),Cs(2),{text:"\u5EFA\u9020\u805A\u53D8\u53CD\u5E94\u5806",check:Pe("reactor")}],radio:[["Aiko Sato \u7684\u540E\u4EE3 \xB7 \u751F\u7269\u5B66\u5BB6","\u90A3\u4E9B\u4F1E\u83C7\u6811\u5728\u591C\u91CC\u4F1A\u53D1\u5149\u3002\u6211\u7684\u66FE\u66FE\u7956\u6BCD\u4E00\u5B9A\u4F1A\u559C\u6B22\u8FD9\u91CC\u3002"],["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u68EE\u6797\u4E2D\u7684\u63A0\u98DF\u8005\u4F1A\u5728\u591C\u95F4\u51FA\u6CA1\u3002"]]},{title:"\u7B2C\u4E09\u7AE0 \xB7 \u6587\u660E",sub:"\u57CE\u5E02\u8FDE\u6210\u4E86\u661F\u6CB3",goals:[Cs(4),hc(36),{text:"\u5EFA\u9020\u751F\u6001\u4E2D\u67A2",check:Pe("lifehub")}],radio:[["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u6765\u81EA\u706B\u661F\u548C\u6B27\u7F57\u5DF4\u7684\u4FE1\u53F7\u5DF2\u7ECF\u62B5\u8FBE\u2014\u2014\u5B83\u4EEC\u5728\u4E00\u5343\u4E8C\u767E\u5E74\u524D\u53D1\u51FA\u3002\u4E24\u5EA7\u57CE\u5E02\u90FD\u8FD8\u4EAE\u7740\u3002"]]},{title:"\u7EC8\u7AE0 \xB7 \u661F\u9645\u6587\u660E",sub:"\u4E09\u9897\u661F\u7403\uFF0C\u4E00\u4E2A\u4EBA\u7C7B",goals:[Cs(5),{text:"\u5EFA\u9020\u6587\u660E\u7EAA\u5FF5\u7891",check:Pe("monument")}],radio:[["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u5EFA\u4E00\u5EA7\u7EAA\u5FF5\u7891\u5427\u3002\u732E\u7ED9\u7B2C\u4E00\u4E2A\u8E0F\u4E0A\u706B\u661F\u7684\u4EBA\u2014\u2014\u4E5F\u5C31\u662F\u4F60\u3002"]]}],Vn=Ke==="europa"?Fv:Ke==="kepler"?Ov:Nv,fp=Ke==="mars"?2:1,hu={rifle:{name:"\u7B49\u79BB\u5B50\u6B65\u67AA",icon:"\u{1F52B}",cost:{iron:18,silicon:12},desc:"\u6309 2 \u5207\u6362\u3002\u6D88\u8017\u80FD\u91CF\u53D1\u5C04\u7B49\u79BB\u5B50\u5F39\u3002"},tank:{name:"\u5927\u5BB9\u91CF\u6C27\u6C14\u7F50",icon:"\u{1FAC1}",cost:{iron:12,ice:10},desc:"\u5B87\u822A\u670D\u6C27\u6C14\u4E0A\u9650 100 \u2192 180\u3002"},rover:{name:"\u52A0\u538B\u6F2B\u6E38\u8F66",icon:"\u{1F699}",cost:{iron:35,silicon:20,ice:5},desc:"\u5728\u5DE5\u574A\u65C1\u51FA\u5382\u3002\u6309 E \u4E0A\u8F66\uFF0CShift \u52A0\u901F\u3002\u8F66\u8231\u5185\u81EA\u52A8\u8865\u6C27\uFF0C\u8FD8\u80FD\u649E\u98DE\u9508\u8680\u86DB\u3002"},scanner:{name:"\u5730\u8D28\u626B\u63CF\u4EEA",icon:"\u{1F4E1}",cost:{iron:8,silicon:10},desc:"\u5C0F\u5730\u56FE\u8303\u56F4\u6269\u5927\uFF0C\u7F57\u76D8\u6807\u51FA\u6700\u8FD1\u7684\u949B\u77FF\u3002"},jetpack:{name:"\u55B7\u6C14\u80CC\u5305",icon:"\u{1F680}",cost:{iron:20,silicon:15,titanium:4},desc:"\u7A7A\u4E2D\u6309\u4F4F\u7A7A\u683C\u98DE\u884C\uFF0C\u6D88\u8017\u80FD\u91CF\u3002"},overclock:{name:"\u6FC0\u5149\u8D85\u9891",icon:"\u26A1",cost:{silicon:20,titanium:3},desc:"\u91C7\u77FF\u901F\u5EA6 \xD72\uFF0C\u6FC0\u5149\u4F24\u5BB3\u63D0\u5347\u3002"},armor:{name:"\u590D\u5408\u88C5\u7532",icon:"\u{1F6E1}",cost:{iron:30,titanium:6},desc:"\u751F\u547D\u4E0A\u9650 150\uFF0C\u53D7\u5230\u4F24\u5BB3 -40%\u3002"},rifle2:{name:"\u805A\u7126\u7EBF\u5708",icon:"\u{1F3AF}",cost:{silicon:18,titanium:6},need:"rifle",desc:"\u7B49\u79BB\u5B50\u6B65\u67AA\u4F24\u5BB3 +60%\u3002"}},cu=[],wr=null,ou=0;function rn(i,t){cu.push([i,t])}function pp(){return wr}var au=0,Rs=200,Mi="calm",lc=0,lu=!1;function mp(i){if(wr&&(ou-=i,ou<=0&&(wr=null)),!wr&&cu.length&&(wr=cu.shift(),ou=3.5+wr[1].length*.11,_t.play("radio")),au-=i,au<=0&&m.chapter<Vn.length){au=.5;let n=Vn[m.chapter];m.goalDone=m.goalDone||{};let s=!0;n.goals.forEach((r,o)=>{let a=m.chapter+":"+o;r.check()&&!m.goalDone[a]&&(m.goalDone[a]=!0,_t.play("objective"),m.events.emit("toast",`\u2713 ${r.text}`)),m.goalDone[a]||(s=!1)}),s&&m.chapter<Vn.length-1&&xo(m.chapter+1)}m.buildings.find(n=>n.type==="terraformer"&&n.powered)&&m.terraform<1&&(m.terraform=Math.min(1,m.terraform+i/300),m.terraform>=1&&!lu&&(lu=!0,m.events.emit("ending"))),m.raining=m.terraform>=1&&Math.sin(m.time.t*Math.PI*4+m.time.day)>.3,yt.storms&&m.time.day>=2&&m.terraform<.7&&(Rs-=i,Mi==="calm"&&Rs<=0&&m.time.night<.5?(Mi="warn",Rs=25,rn("\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u6C99\u5C18\u66B4\u5C06\u5728 25 \u79D2\u540E\u62B5\u8FBE\u3002\u80FD\u89C1\u5EA6\u4F1A\u6025\u5267\u4E0B\u964D\uFF0C\u6C27\u6C14\u6D88\u8017\u52A0\u5FEB\u3002\u9760\u8FD1\u751F\u547D\u7EF4\u6301\u8BBE\u65BD\u3002")):Mi==="warn"&&Rs<=0?(Mi="storm",lc=70+Math.random()*40):Mi==="storm"&&(lc-=i,lc<=0&&(Mi="calm",Rs=360+Math.random()*300,rn("\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u6C99\u5C18\u66B4\u5DF2\u8FC7\u5883\u3002"))));let e=Mi==="storm"?1:0;m.storm+=(e-m.storm)*Math.min(1,i*.25),m.storm<.001&&(m.storm=0)}function xo(i,t=!1){m.chapter=i;let e=Vn[i];t||(_t.play("chapter"),m.events.emit("chapter",e),e.radio.forEach(n=>rn(n[0],n[1])))}function gp(){return{phase:Mi,t:Rs,left:lc}}function xp(i){i&&(Mi=i.phase==="storm"?"calm":i.phase,Rs=i.t??200)}function _p(i){lu=i}var uc=[],Bv={player:6743807,turret:16756800};function dc(i,t,e,n){let s=fe(Bv[n],n==="player"?1.1:.9,m.scene);s.position.copy(i),uc.push({pos:i.clone(),vel:t.clone().multiplyScalar(n==="player"?110:80),life:1.4,dmg:e,owner:n,s})}function zv(i,t=0){for(let e of m.enemies){if(e.dead)continue;let n=1.3*e.scale+t,s=i.x-e.pos.x,r=i.y-(e.pos.y+1*e.scale),o=i.z-e.pos.z;if(s*s+r*r+o*o<n*n)return e}return null}function Mp(i){for(let t=uc.length-1;t>=0;t--){let e=uc[t];e.life-=i;let n=e.life<=0,s=3;for(let r=0;r<s&&!n;r++){e.pos.addScaledVector(e.vel,i/s);let o=zv(e.pos);o?(yo(o,e.dmg,e.owner),It.spark(e.pos,[.5,.9,1],10,6),n=!0):e.pos.y<Ut(e.pos.x,e.pos.z)&&(It.spark(e.pos,[1,.7,.4],6,4),It.dustPuff(e.pos,3,.5),n=!0)}e.s.position.copy(e.pos),Math.random()<.8&&It.trail(e.pos,e.owner==="player"?[.3,.8,1]:[1,.6,.2],.6),n&&(m.scene.remove(e.s),uc.splice(t,1))}}function yp(i,t,e=!1){let n=e?1.35:.85+Math.random()*.35,s=zf(n),r=Ut(i,t);s.group.position.set(i,r,t),m.scene.add(s.group);let o=e?90:36+m.time.day*3,a={...s,pos:s.group.position,hp:o,maxHp:o,scale:n,guardian:e,home:e?new A(i,r,t):null,awake:!e,speed:(e?5.2:4.4)+Math.random()*1.2,phase:Math.random()*6,atk:0,flash:0,sink:0,target:null,retarget:0};return m.enemies.push(a),a}function yo(i,t,e){i.dead||(i.hp-=t,i.flash=.12,i.awake=!0,e==="player"&&_t.play("hit"),i.hp<=0&&kv(i,e))}function kv(i,t){i.dead=!0;let e=i.pos.clone();e.y+=1,It.burst(e,[1,.4,.1],70,9),It.dustPuff(e,12,2),_t.play("kill"),m.scene.remove(i.group),m.stats.kills++;let n=i.guardian?3:Math.random()<.5?1:0;n&&(m.res.titanium+=n,m.stats.mined.titanium+=n,m.events.emit("pickup",{type:"titanium",n,note:"\u6676\u4F53\u6B8B\u9AB8"}))}var uu=0,_o=0,vp=!1,du=5;function Hv(){if(!m.buildings.length)return new A(0,0,0);let i=new A;for(let t of m.buildings)i.x+=t.x,i.z+=t.z;return i.multiplyScalar(1/m.buildings.length)}function Sp(i){let t=m.player.pos,e=m.time.night>.6,n=m.chapter>=fp&&m.terraform<1;if(e&&!vp&&n&&(_o=Math.min(3+(m.nightsSurvived||0)*2+Math.floor(m.colony.pop/4),26),m.nightsSurvived=(m.nightsSurvived||0)+1,m.events.emit("nightfall",_o)),vp=e,e&&n&&_o>0&&(uu-=i,uu<=0)){uu=3+Math.random()*5;let r=Hv(),o=Math.min(_o,1+Math.floor(Math.random()*3)),a=Math.random()*Math.PI*2,c=110+Math.random()*50;for(let l=0;l<o;l++){let h=Je.clamp(r.x+Math.cos(a)*c+(Math.random()-.5)*10,-le+180,le-180),u=Je.clamp(r.z+Math.sin(a)*c+(Math.random()-.5)*10,-le+180,le-180),p=yp(h,u);p.sink=-2,It.dustPuff(new A(h,Ut(h,u),u),14,3)}_o-=o}if(du-=i,du<=0){du=30;for(let r of m.nodes){if(r.type!=="titanium"||Math.hypot(r.x-t.x,r.z-t.z)<90)continue;if(!m.enemies.some(a=>a.guardian&&!a.dead&&a.home.distanceTo(r.mesh.position)<25)&&m.terraform<1){let a=Math.random()*6.28;yp(r.x+Math.cos(a)*6,r.z+Math.sin(a)*6,!0)}}}let s=performance.now()*.001;for(let r=m.enemies.length-1;r>=0;r--){let o=m.enemies[r];if(o.dead){m.enemies.splice(r,1);continue}if(!o.guardian&&(m.time.night<.3||m.terraform>=1)){o.sink-=i*1.5,o.group.position.y=Ut(o.pos.x,o.pos.z)+o.sink,o.sink<-3&&(m.scene.remove(o.group),m.enemies.splice(r,1));continue}o.sink<0&&(o.sink=Math.min(0,o.sink+i*1.5));let a=Math.hypot(t.x-o.pos.x,t.z-o.pos.z);if(o.retarget-=i,o.retarget<=0)if(o.retarget=1,o.target=null,o.guardian)a<22&&(o.awake=!0),o.awake&&a<70&&!m.player.dead?o.target={kind:"player"}:(o.awake=!1,o.target={kind:"home"});else if(a<32&&!m.player.dead)o.target={kind:"player"};else{let f=null,M=400;for(let E of m.buildings){if(E.type==="lamp"||E.broken)continue;let y=Math.hypot(E.x-o.pos.x,E.z-o.pos.z)-E.def.r;y<M&&(M=y,f=E)}o.target=f?{kind:"building",b:f}:{kind:"player"}}let c=t.x,l=t.z,h=1.8*o.scale,u=o.target;if(u?.kind==="building"){if(!m.buildings.includes(u.b)||u.b.broken){o.retarget=0;continue}c=u.b.x,l=u.b.z,h=u.b.def.r*.9+1.4}else u?.kind==="home"&&(c=o.home.x,l=o.home.z,h=2);let p=c-o.pos.x,d=l-o.pos.z,x=Math.hypot(p,d),_=!1;if(x>h){p/=x,d/=x;for(let E of m.enemies){if(E===o)continue;let y=o.pos.x-E.pos.x,L=o.pos.z-E.pos.z,R=Math.hypot(y,L);R<2.5&&R>.01&&(p+=y/R*.6,d+=L/R*.6)}let f=Math.hypot(p,d)||1,M=o.speed*(o.target?.kind==="home"?.5:1);o.pos.x+=p/f*M*i,o.pos.z+=d/f*M*i;for(let E of m.colliders.query(o.pos.x,o.pos.z)){if(E.kind!=="building")continue;let y=o.pos.x-E.x,L=o.pos.z-E.z,R=Math.hypot(y,L),C=E.r+.8;R<C&&R>.01&&(o.pos.x=E.x+y/R*C,o.pos.z=E.z+L/R*C)}o.group.rotation.y=Math.atan2(p,d),_=!0}else u&&u.kind!=="home"&&(o.group.rotation.y=Math.atan2(p,d),o.atk-=i,o.atk<=0&&(o.atk=1,u.kind==="player"?m.player.damage(o.guardian?14:9,o.pos):(u.b.hp-=o.guardian?20:8,It.spark(new A(o.pos.x,o.pos.y+1,o.pos.z),[1,.5,.2],8,5),u.b.hp<=0&&(u.b.hp=0,u.b.broken=!0,o.retarget=0,m.events.emit("broken",u.b),Zi())),o.inner.position.z=.6));o.inner.position.z*=.85,o.pos.y=Ut(o.pos.x,o.pos.z)+o.sink;let g=s*(_?12:2)+o.phase;for(let f of o.legs)f.rotation.x=Math.sin(g+f.userData.phase)*(_?.5:.08),f.rotation.z=Math.max(0,Math.cos(g+f.userData.phase))*.25*f.userData.side*(_?1:0);o.inner.position.y=Math.abs(Math.sin(g))*.08,o.flash>0?(o.flash-=i,o.inner.scale.setScalar(1+o.flash*1.2)):o.inner.scale.setScalar(1),Math.random()<i*4&&It.trail(new A(o.pos.x,o.pos.y+1.6*o.scale,o.pos.z),[1,.35,.1],.8)}}function Tr(i,t,e){let n=null,s=e,r=new A;for(let o of m.enemies){if(o.dead)continue;let a=1.3*o.scale;r.set(o.pos.x-i.x,o.pos.y+1*o.scale-i.y,o.pos.z-i.z);let c=r.dot(t);if(c<0)continue;let l=r.lengthSq()-c*c;if(l>a*a)continue;let h=c-Math.sqrt(a*a-l);h<s&&(s=h,n=o)}return n?{e:n,dist:s}:null}var lt={keys:new Set,mouse:[!1,!1,!1],dx:0,dy:0,wheel:0,pressed:new Set,clicked:[!1,!1,!1],sens:.0022,down(i){return this.keys.has(i)},hit(i){return this.pressed.has(i)},endFrame(){this.pressed.clear(),this.dx=0,this.dy=0,this.wheel=0,this.clicked=[!1,!1,!1]}};function bp(i){window.addEventListener("keydown",t=>{t.code==="Tab"&&t.preventDefault(),lt.keys.has(t.code)||lt.pressed.add(t.code),lt.keys.add(t.code)}),window.addEventListener("keyup",t=>lt.keys.delete(t.code)),window.addEventListener("blur",()=>{lt.keys.clear(),lt.mouse=[!1,!1,!1]}),window.addEventListener("mousemove",t=>{m.locked&&(lt.dx+=t.movementX||0,lt.dy+=t.movementY||0)}),i.addEventListener("mousedown",t=>{m.locked&&(lt.mouse[t.button]=!0,lt.clicked[t.button]=!0)}),window.addEventListener("mouseup",t=>{lt.mouse[t.button]=!1}),window.addEventListener("wheel",t=>{m.locked&&(lt.wheel+=Math.sign(t.deltaY))},{passive:!0}),window.addEventListener("contextmenu",t=>t.preventDefault())}var Vv=yt.gravity,Ep=1.7,Re=new A(-6,0,-6),fc=class{constructor(t){this.cam=t,this.pos=new A(0,0,6),this.pos.y=Ut(this.pos.x,this.pos.z),this.vel=new A,this.yaw=Math.PI*.85,this.pitch=-.05,this.onGround=!0,this.maxHealth=100,this.health=100,this.maxO2=100,this.o2=100,this.energy=100,this.bob=0,this.stepT=0,this.landDip=0,this.dead=!1,this.hurtT=0,this.flashlight=!1,this.inLife=!1,this.alarmT=0,this.lastHitDir=0,this.moving=!1,this.sprinting=!1,this.jetting=!1,this.fwd=new A}get eye(){return new A(this.pos.x,this.pos.y+Ep+this.bobY,this.pos.z)}damage(t,e){if(this.dead)return;let n=m.upgrades.armor?.6:1;this.health-=t*n,this.hurtT=.5,e&&(this.lastHitDir=Math.atan2(e.x-this.pos.x,e.z-this.pos.z)),_t.play("hurt"),this.health<=0&&this.die("\u4F60\u5012\u5728\u4E86\u706B\u661F\u7684\u5C18\u571F\u91CC")}die(t){this.dead||(this.dead=!0,this.health=0,m.events.emit("death",t))}respawn(){let t=m.buildings.find(n=>n.type==="habitat")||null,e=t?new A(t.x,0,t.z+9):Re.clone().add(new A(5,0,8));for(let n in m.res)m.res[n]=Math.floor(m.res[n]*.75);this.pos.set(e.x,Ut(e.x,e.z),e.z),this.vel.set(0,0,0),this.health=this.maxHealth,this.o2=this.maxO2,this.energy=100,this.dead=!1}update(t){if(this.maxO2=m.upgrades.tank?180:100,this.maxHealth=m.upgrades.armor?150:100,this.dead){this.cam.position.y-=t*.3;return}m.locked&&(this.yaw-=lt.dx*lt.sens,this.pitch=Je.clamp(this.pitch-lt.dy*lt.sens,-1.5,1.5));let e=0,n=0;m.menuOpen||((lt.down("KeyW")||lt.down("ArrowUp"))&&(n-=1),(lt.down("KeyS")||lt.down("ArrowDown"))&&(n+=1),(lt.down("KeyA")||lt.down("ArrowLeft"))&&(e-=1),(lt.down("KeyD")||lt.down("ArrowRight"))&&(e+=1));let s=Math.hypot(e,n);this.moving=s>0,this.sprinting=this.moving&&lt.down("ShiftLeft")&&n<0&&this.o2>5;let r=this.sprinting?10.5:6.2,o=Math.sin(this.yaw),a=Math.cos(this.yaw),c=0,l=0;if(s){let f=e/s,M=n/s;c=f*a+M*o,l=-f*o+M*a}let h=this.onGround?12:2.5;if(this.vel.x+=(c*r-this.vel.x)*Math.min(1,h*t),this.vel.z+=(l*r-this.vel.z)*Math.min(1,h*t),this.jetting=!1,!m.menuOpen&&lt.hit("Space")&&this.onGround)this.vel.y=5.4,this.onGround=!1,_t.play("jump");else if(!m.menuOpen&&lt.down("Space")&&!this.onGround&&m.upgrades.jetpack&&this.energy>1&&this.vel.y<6){this.vel.y+=15*t,this.energy-=22*t,this.jetting=!0,Math.random()<.5&&_t.play("jet");let f=new A(this.pos.x+o*.4,this.pos.y+.8,this.pos.z+a*.4);It.flame(f),It.flame(f)}this.vel.y-=Vv*t;let u=this.pos.x+this.vel.x*t,p=this.pos.z+this.vel.z*t;this.pos.x=Je.clamp(u,-le+120,le-120),this.pos.z=Je.clamp(p,-le+120,le-120),this.pos.y+=this.vel.y*t;for(let f of m.colliders.query(this.pos.x,this.pos.z)){let M=this.pos.x-f.x,E=this.pos.z-f.z,y=Math.hypot(M,E),L=f.r+.45;if(y<L&&y>1e-4){if(f.kind==="rock"&&this.pos.y>Ut(f.x,f.z)+f.r*.6)continue;this.pos.x=f.x+M/y*L,this.pos.z=f.z+E/y*L}}let d=Ut(this.pos.x,this.pos.z);this.pos.y<=d?(!this.onGround&&this.vel.y<-4&&(this.landDip=Math.min(.35,-this.vel.y*.04),_t.play("land"),It.dustPuff(this.pos,6,1)),this.pos.y=d,this.vel.y=0,this.onGround=!0):this.onGround&&this.pos.y-d<.5&&this.vel.y<=0?(this.pos.y=d,this.vel.y=0):this.onGround=!1;let x=Math.hypot(this.vel.x,this.vel.z);this.onGround&&x>.5&&(this.bob+=t*x*1.25,this.stepT+=t*x,this.stepT>2.6&&(this.stepT=0,_t.play("step"),Math.random()<.4&&It.dustPuff(this.pos,2,.4))),this.landDip*=Math.pow(.002,t),this.bobY=Math.sin(this.bob*2)*.05*Math.min(1,x/6)-this.landDip,this.cam.position.set(this.pos.x,this.pos.y+Ep+this.bobY,this.pos.z),this.cam.rotation.set(this.pitch,this.yaw,Math.sin(this.bob)*.006*Math.min(1,x/6),"YXZ"),this.cam.getWorldDirection(this.fwd);let _=op(this.pos),g=this.pos.distanceTo(Re)<11;if(this.inLife=!!_||g,this.inLife)this.o2=Math.min(this.maxO2,this.o2+30*t),this.health=Math.min(this.maxHealth,this.health+4*t);else{let f=.55+(this.sprinting?.6:0)+(this.jetting?.6:0);f*=1+m.storm*.8,m.terraform>=1&&(f*=.5),this.o2=Math.max(0,this.o2-f*t)}this.o2<=0&&(this.health-=9*t,this.health<=0&&this.die("\u6C27\u6C14\u8017\u5C3D")),this.o2<this.maxO2*.2&&!this.inLife&&(this.alarmT-=t,this.alarmT<=0&&(this.alarmT=2,_t.play("alarm"))),this.jetting||(this.energy=Math.min(100,this.energy+(this.onGround?14:4)*t)),this.hurtT=Math.max(0,this.hurtT-t),this.health=Math.min(this.health,this.maxHealth)}};var ji=[{id:"laser",name:"\u91C7\u77FF\u6FC0\u5149",icon:"\u26CF"},{id:"rifle",name:"\u7B49\u79BB\u5B50\u6B65\u67AA",icon:"\u{1F52B}",need:"rifle"},{id:"build",name:"\u5EFA\u9020",icon:"\u{1F3D7}"}],Ue={index:0,get id(){return ji[this.index].id}},Ki,vo,Qi={},Si,bi,Ir,Cr,Mo,wp=new A(.24,-.21,-.82);function Ap(i){Ki=new cr,vo=new Xe(i.fov,i.aspect,.01,10),Ki.add(new fr(16769224,4202520,1.4));let t=new mr(16777215,1.5);t.position.set(1,2,1),Ki.add(t),Ki.userData.dl=t;let e=(l,h,u,p,d,x)=>{let _=new Ft(l,h);return _.position.set(u,p,d),x.add(_),_},n=new ce;e(new Oe(.11,.13,.42),V.panel,0,0,0,n),e(new Oe(.115,.04,.3),V.orange,0,.07,.02,n),e(new qe(.035,.05,.2,10),V.metal,0,0,-.29,n).rotation.x=Math.PI/2,e(new Oe(.06,.16,.07),V.dark,0,-.12,.1,n).rotation.x=.3;let s=e(new ve(.03,8,6),new ye({color:16752736}),0,0,-.4,n);n.userData.tip=s;let r=new ce;e(new Oe(.1,.12,.6),V.white,0,0,-.05,r),e(new Oe(.07,.07,.3),V.dark,0,0,-.45,r);for(let l=0;l<3;l++)e(new On(.06,.012,6,14),V.cyan,0,0,-.36-l*.07,r);e(new Oe(.06,.15,.08),V.dark,0,-.13,.12,r).rotation.x=.3,e(new Oe(.04,.05,.2),V.orange,0,.08,-.05,r);let o=new ce;e(new Oe(.3,.2,.02),V.dark,0,0,0,o);let a=e(new Yn(.27,.17),new ye({color:3394815,transparent:!0,opacity:.85}),0,0,.011,o);o.userData.scr=a,o.rotation.set(-.5,.25,0),Qi={laser:n,rifle:r,build:o};for(let l in Qi)Qi[l].scale.setScalar(l==="build"?.45:.6),Qi[l].visible=!1,Ki.add(Qi[l]);let c=new qe(1,1,1,8,1,!0);c.translate(0,.5,0),Si=new Ft(c,new ye({color:16773328,transparent:!0,opacity:.95,blending:Ze,depthWrite:!1})),bi=new Ft(c,new ye({color:16740384,transparent:!0,opacity:.45,blending:Ze,depthWrite:!1})),Si.visible=bi.visible=!1,Si.frustumCulled=bi.frustumCulled=!1,m.scene.add(Si,bi),Ir=fe(16748608,1.6,m.scene),Ir.visible=!1,Mo=fe(6743807,.35,Ki),Mo.visible=!1,Cr=new pr(16773853,0,70,.42,.45,1.2),i.add(Cr),Cr.position.set(.3,-.2,0),Cr.target.position.set(0,0,-10),i.add(Cr.target),m.scene.add(i)}function pc(i){let t=ji[i];if(t.need&&!m.upgrades[t.need]){m.events.emit("toast",`\u5C1A\u672A\u5236\u9020\uFF1A${t.name}\uFF08\u5728\u5236\u9020\u5DE5\u574A\u5236\u4F5C\uFF09`),_t.play("deny");return}Ue.index===i&&t.id!=="build"||(Ue.index=i,_t.play("ui"),t.id==="build"?m.events.emit("openBuild"):As(null))}var Ar=0,fu=0,Rr=0,pu=0,mc=0,Tp=-1,Gv=new A,Wv=new A(0,1,0),Pr=new A;function Xv(i,t,e){let n=null,s=e;for(let r of m.nodes){let o=r.mesh.scale.x,a=1.5*o+.3;Pr.set(r.x-i.x,r.y+.7*o-i.y,r.z-i.z);let c=Pr.dot(t);if(c<0||c>e+a)continue;let l=Pr.lengthSq()-c*c;if(l>a*a)continue;let h=c-Math.sqrt(a*a-l);h<s&&(s=Math.max(.3,h),n=r)}return n?{n,dist:s}:null}function qv(i,t,e){let n=null,s=e;for(let r of m.buildings){let o=Math.max(1.2,r.def.r);Pr.set(r.x-i.x,r.y+Math.min(o,3)*.6-i.y,r.z-i.z);let a=Pr.dot(t);if(a<0)continue;let c=Pr.lengthSq()-a*a;if(c>o*o)continue;let l=a-Math.sqrt(o*o-c);l<s&&(s=l,n=r)}return n}function Rp(i,t,e){let n=Ue.id;Tp!==Ue.index&&(mc=1,Tp=Ue.index),mc=Math.max(0,mc-i*4);for(let d in Qi)Qi[d].visible=d===n;let s=Qi[n],r=Math.hypot(t.vel.x,t.vel.z),o=Math.sin(t.bob)*.012*Math.min(1,r/6),a=Math.abs(Math.cos(t.bob))*.012*Math.min(1,r/6);Rr*=Math.pow(1e-4,i);let c=n==="build"?[.2,-.24,-.6]:[.24,-.22,-.58];s.position.set(c[0]+o,c[1]+a-mc*.3-(t.sprinting?.04:0),c[2]+Rr*.08),s.rotation.x=(n==="build"?-.5:0)+Rr*.15+(t.sprinting?-.25:0),n==="build"&&(s.userData.scr.material.opacity=.6+Math.sin(performance.now()*.005)*.2),vo.aspect=e.aspect,vo.fov=e.fov,vo.updateProjectionMatrix();let l=.4+(1-m.time.night)*1.2;Ki.userData.dl.intensity=l,lt.hit("KeyF")&&!m.menuOpen&&(t.flashlight=!t.flashlight,_t.play("ui")),Cr.intensity=t.flashlight?60:0;let h=e.position,u=t.fwd;if(m.lookBuilding=m.menuOpen?null:qv(h,u,14),!m.menuOpen&&!t.dead){if(lt.hit("Digit1")&&pc(0),lt.hit("Digit2")&&pc(1),(lt.hit("Digit3")||lt.hit("KeyB"))&&pc(2),lt.wheel&&Ue.id!=="build"){let d=Ue.index;for(let x=0;x<2&&(d=(d+(lt.wheel>0?1:2))%2,!(!ji[d].need||m.upgrades[ji[d].need]));x++);d!==Ue.index&&pc(d)}Ue.id==="build"&&te.type&&lt.wheel&&(te.rot+=lt.wheel*.3)}Si.visible=bi.visible=Ir.visible=!1,Mo.visible=!1,fu-=i;let p=lt.mouse[0]&&!m.menuOpen&&!t.dead&&m.locked;if(n==="laser")if(p){let x=Xv(h,u,9),_=Tr(h,u,9),g=Ja(h,u,9),f=9,M=null;g&&g.dist<f&&(f=g.dist,M="ground"),x&&x.dist<=f&&(f=x.dist,M="node"),_&&_.dist<f&&(f=_.dist,M="enemy");let E=Gv.copy(h).addScaledVector(u,f),y=e.localToWorld(wp.clone()),L=E.clone().sub(y),R=L.length();L.normalize();let C=new nn().setFromUnitVectors(Wv,L),P=1+Math.sin(performance.now()*.05)*.2;if(Si.position.copy(y),Si.quaternion.copy(C),Si.scale.set(.012*P,R,.012*P),bi.position.copy(y),bi.quaternion.copy(C),bi.scale.set(.04*P,R,.04*P),Si.visible=bi.visible=!0,Ir.position.copy(E),Ir.visible=!0,Ir.scale.setScalar(1.2+Math.random()*.8),Rr=Math.max(Rr,.15+Math.random()*.1),M==="node"){let w=x.n;for(Ar+=i*3.2*(m.upgrades.overclock?2:1),Math.random()<.7&&It.spark(E,nu[w.type],2,5,.4),pu-=i,pu<=0&&(pu=.09,_t.play("mine"));Ar>=1&&m.nodes.includes(w);)if(Ar-=1,m.res[w.type]++,m.stats.mined[w.type]++,m.events.emit("pickup",{type:w.type,n:1}),Zf(w,1)){_t.play("deplete"),Ar=0;break}}else M==="enemy"?(yo(_.e,16*i*(m.upgrades.overclock?1.5:1),"laser"),Math.random()<.5&&It.spark(E,[1,.5,.2],3,5)):M==="ground"&&(Math.random()<.3&&It.spark(E,[1,.6,.3],1,3),Math.random()<.1&&It.dustPuff(E,1,.3));_t.laser(!0)}else _t.laser(!1),Ar=Math.min(Ar,.9);else _t.laser(!1);if(n==="rifle"&&p&&fu<=0)if(t.energy>=5){fu=.16,t.energy-=5,Rr=1;let d=e.localToWorld(wp.clone()),x=Tr(h,u,200),_=Ja(h,u,200),g=200;_&&(g=_.dist),x&&x.dist<g&&(g=x.dist);let M=h.clone().addScaledVector(u,g).sub(d).normalize();dc(d,M,m.upgrades.rifle2?30:19,"player"),_t.play("shoot"),Mo.visible=!0,Mo.position.set(.24,-.21,-.86)}else lt.clicked[0]&&(_t.play("deny"),m.events.emit("toast","\u80FD\u91CF\u4E0D\u8DB3"));if(n==="build"){let d=!m.menuOpen&&te.type?Ja(h,u,40):null;if(cp(d?d.point:null,t.pos),!m.menuOpen&&te.type&&(lt.hit("KeyR")&&(te.rot+=Math.PI/4),lt.clicked[0]))if(te.valid){let x=lp();x&&m.events.emit("built",x)}else _t.play("deny"),m.events.emit("toast",te.reason);lt.clicked[2]&&(As(null),Ue.index=0,_t.play("ui"))}}function Cp(i){m.player.dead||m.driving||(i.autoClear=!1,i.clearDepth(),i.render(Ki,vo),i.autoClear=!0)}var Lr=[["\u6797\u6653","\u690D\u7269\u5B66\u5BB6","\u6211\u4ECE\u4E91\u5357\u5E26\u6765\u4E86\u4E00\u5305\u8336\u6811\u79CD\u5B50\u3002\u603B\u6709\u4E00\u5929\uFF0C\u706B\u661F\u4E0A\u4E5F\u80FD\u6CE1\u4E00\u58F6\u70ED\u8336\u3002"],["Amara Okafor","\u533B\u751F","\u5728\u5730\u7403\u4E0A\uFF0C\u6211\u6551\u8FC7\u5F88\u591A\u4EBA\u3002\u5728\u8FD9\u91CC\uFF0C\u6211\u60F3\u770B\u7740\u5B69\u5B50\u4EEC\u5E73\u5B89\u957F\u5927\u3002"],["\u9648\u9ED8","\u5DE5\u7A0B\u5E08","\u8FD9\u91CC\u7684\u6BCF\u4E00\u9897\u87BA\u4E1D\uFF0C\u90FD\u662F\u6211\u4EEC\u4EB2\u624B\u62E7\u4E0A\u53BB\u7684\u3002"],["Mateo Silva","\u5730\u8D28\u5B66\u5BB6","\u4F60\u770B\u89C1\u90A3\u4E9B\u5CA9\u5C42\u4E86\u5417\uFF1F\u5B83\u4EEC\u6BD4\u4EBA\u7C7B\u7684\u5386\u53F2\u8FD8\u8981\u53E4\u8001\u56DB\u5341\u4EBF\u5E74\u3002"],["\u82CF\u5FF5","\u6559\u5E08",'\u6211\u7684\u7B2C\u4E00\u5802\u8BFE\uFF0C\u5C31\u53EB"\u6211\u4EEC\u4E3A\u4EC0\u4E48\u6765\u5230\u706B\u661F"\u3002'],["Yuki Tanaka","\u98DE\u884C\u5458","\u4ECE\u8F68\u9053\u4E0A\u770B\uFF0C\u4F60\u4EEC\u7684\u706F\u5149\u50CF\u662F\u7EA2\u8272\u6C99\u6F20\u91CC\u7684\u4E00\u4E32\u73CD\u73E0\u3002"],["\u738B\u5927\u5C71","\u53A8\u5E08","\u6E29\u5BA4\u91CC\u7684\u7B2C\u4E00\u6279\u571F\u8C46\uFF0C\u6211\u505A\u4E86\u4E00\u9505\u571F\u8C46\u7096\u83DC\u3002\u5927\u5BB6\u90FD\u54ED\u4E86\u3002"],["Elena Petrova","\u5929\u6587\u5B66\u5BB6","\u665A\u4E0A\u62AC\u5934\uFF0C\u90A3\u9897\u6700\u4EAE\u7684\u84DD\u661F\uFF0C\u5C31\u662F\u5730\u7403\u3002"],["\u8D75\u5C0F\u96E8","\u5B66\u751F","\u6211\u5341\u516D\u5C81\u3002\u6211\u4F1A\u662F\u7B2C\u4E00\u4EE3\u5728\u706B\u661F\u957F\u5927\u7684\u4EBA\u3002"],["Kwame Mensah","\u7535\u5DE5","\u53EA\u8981\u706F\u8FD8\u4EAE\u7740\uFF0C\u8FD9\u91CC\u5C31\u662F\u5BB6\u3002"],["\u5468\u9752\u79BE","\u6C34\u6587\u5B66\u5BB6","\u51B0\u5C42\u4E0B\u9762\u6709\u6C34\u3002\u6709\u6C34\uFF0C\u5C31\u6709\u751F\u547D\u3002"],["Priya Sharma","\u7A0B\u5E8F\u5458","\u6211\u5199\u7684\u4EE3\u7801\u5728\u63A7\u5236\u5236\u6C27\u7AD9\u3002\u522B\u62C5\u5FC3\uFF0C\u6211\u6D4B\u8BD5\u8FC7\u4E09\u5343\u904D\u4E86\u3002"],["\u674E\u957F\u98CE","\u8001\u5175","\u6211\u5E74\u8F7B\u65F6\u5B88\u8FC7\u8FB9\u7586\u3002\u73B0\u5728\uFF0C\u6211\u5B88\u7740\u4EBA\u7C7B\u7684\u65B0\u8FB9\u7586\u3002"],["Sofia Rossi","\u5EFA\u7B51\u5E08","\u7A79\u9876\u7684\u5F27\u5EA6\uFF0C\u662F\u6211\u7167\u7740\u6545\u4E61\u6559\u5802\u7684\u5706\u9876\u753B\u7684\u3002"],["\u4F55\u5B89","\u62A4\u58EB","\u60F3\u5BB6\u7684\u65F6\u5019\uFF0C\u6211\u5C31\u53BB\u6E29\u5BA4\u91CC\u95FB\u95FB\u6CE5\u571F\u7684\u5473\u9053\u3002"],["Jonas Berg","\u673A\u68B0\u5E08","\u706B\u661F\u7684\u6C99\u5B50\u4F1A\u94BB\u8FDB\u4EFB\u4F55\u7F1D\u9699\u3002\u4F46\u6211\u4EEC\u6BD4\u6C99\u5B50\u66F4\u56FA\u6267\u3002"],["\u9A6C\u6674","\u8BB0\u8005","\u6211\u8981\u8BB0\u5F55\u4E0B\u8FD9\u4E00\u5207\u3002\u51E0\u767E\u5E74\u540E\u7684\u4EBA\u4F1A\u60F3\u77E5\u9053\uFF0C\u6700\u521D\u662F\u600E\u6837\u7684\u3002"],["Omar Haddad","\u519C\u5B66\u5BB6","\u6211\u7956\u7236\u5728\u6C99\u6F20\u91CC\u79CD\u51FA\u4E86\u6930\u67A3\u3002\u6211\u8981\u5728\u706B\u661F\u79CD\u51FA\u68EE\u6797\u3002"],["\u5434\u6850","\u753B\u5BB6","\u706B\u661F\u7684\u65E5\u843D\u662F\u84DD\u8272\u7684\u3002\u5730\u7403\u4E0A\u6CA1\u6709\u4EBA\u4F1A\u76F8\u4FE1\u3002"],["Grace Kim","\u5FC3\u7406\u533B\u751F","\u79BB\u5BB6\u5F88\u8FDC\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5F7C\u6B64\u5C31\u662F\u5BB6\u3002"],["\u90ED\u8FDC","\u7236\u4EB2","\u6211\u5973\u513F\u5728\u98DE\u8239\u4E0A\u51FA\u751F\u3002\u5979\u7684\u51FA\u751F\u8BC1\u660E\u4E0A\u5199\u7740\uFF1A\u51FA\u751F\u5730\uFF0C\u661F\u9645\u7A7A\u95F4\u3002"],["Lucas Moreau","\u97F3\u4E50\u5BB6","\u6211\u5E26\u4E86\u4E00\u628A\u5409\u4ED6\u3002\u4ECA\u665A\u7A79\u9876\u91CC\u6709\u97F3\u4E50\u4F1A\uFF0C\u4F60\u6765\u5417\uFF1F"],["\u94B1\u591A\u591A","\u4F1A\u8BA1","\u6211\u7B97\u8FC7\u4E86\uFF1A\u7167\u8FD9\u4E2A\u901F\u5EA6\uFF0C\u4E8C\u5341\u5E74\u540E\u8FD9\u91CC\u4F1A\u6709\u4E00\u5EA7\u57CE\u5E02\u3002"],["Aiko Sato","\u751F\u7269\u5B66\u5BB6","\u90A3\u4E9B\u9508\u8680\u86DB\u2026\u2026\u4E5F\u8BB8\u5B83\u4EEC\u53EA\u662F\u5728\u4FDD\u62A4\u81EA\u5DF1\u7684\u5BB6\u56ED\u3002"],["\u9093\u5353","\u77FF\u5DE5","\u949B\u77FF\u91CC\u85CF\u7740\u706B\u661F\u7684\u5FC3\u8DF3\u3002"],["Nadia Volkova","\u6C14\u8C61\u5B66\u5BB6","\u5927\u6C14\u6539\u9020\u5854\u542F\u52A8\u540E\uFF0C\u4E5F\u8BB8\u6211\u4EEC\u80FD\u770B\u89C1\u706B\u661F\u4E0A\u7684\u7B2C\u4E00\u7247\u4E91\u3002"],["\u9EC4\u4E00\u9E23","\u673A\u5668\u4EBA\u4E13\u5BB6","\u673A\u5668\u53EF\u4EE5\u66FF\u6211\u4EEC\u5E72\u6D3B\uFF0C\u4F46\u53EA\u6709\u4EBA\uFF0C\u624D\u80FD\u628A\u4E00\u4E2A\u5730\u65B9\u53D8\u6210\u5BB6\u3002"],["Samuel Okoro","\u7267\u5E08","\u65E0\u8BBA\u5728\u54EA\u9897\u661F\u7403\u4E0A\uFF0C\u6211\u4EEC\u90FD\u4F1A\u4E3A\u65B0\u751F\u7684\u5B69\u5B50\u795D\u798F\u3002"],["\u53F6\u77E5\u79CB","\u8BD7\u4EBA",'"\u6B64\u5FC3\u5B89\u5904\u662F\u543E\u4E61\u3002"\u2014\u2014\u82CF\u8F7C\u3002\u6211\u60F3\uFF0C\u4ED6\u8BF4\u5F97\u5BF9\u3002'],["Hannah Weber","\u7269\u7406\u5B66\u5BB6","\u805A\u53D8\u53CD\u5E94\u5806\u7684\u5149\uFF0C\u548C\u592A\u9633\u662F\u540C\u4E00\u79CD\u5149\u3002"],["\u5C0F\u6EE1","\u5B69\u5B50","\u53D4\u53D4\uFF0C\u5730\u7403\u662F\u4EC0\u4E48\u6837\u5B50\u7684\uFF1F"],["Diego Ram\xEDrez","\u767B\u5C71\u5BB6","\u5965\u6797\u5E15\u65AF\u5C71\u6709\u4E24\u4E07\u7C73\u9AD8\u3002\u603B\u6709\u4E00\u5929\u6211\u8981\u7AD9\u4E0A\u53BB\u3002"]],gc=0;function Ip(i,t,e){let n=e?.idx??gc++,s=Lr[n%Lr.length],r=Bf(n);r.group.position.set(i,Ut(i,t),t),m.scene.add(r.group);let o={...r,idx:n,name:s[0]+(n>=Lr.length?` ${Math.floor(n/Lr.length)+1}\u4E16`:""),job:s[1],line:s[2],pos:r.group.position,target:null,wait:Math.random()*3,phase:Math.random()*6,talked:0};return m.colonists.push(o),o}function Yv(i){let t=m.buildings.filter(o=>o.type!=="lamp");if(!t.length)return new A(i.pos.x+(Math.random()-.5)*10,0,i.pos.z+(Math.random()-.5)*10);let e=t;if(m.time.night>.5){let o=t.filter(a=>a.type==="habitat");o.length&&(e=o)}let n=e[Math.floor(Math.random()*e.length)],s=Math.random()*Math.PI*2,r=n.def.r+1.5+Math.random()*5;return new A(n.x+Math.cos(s)*r,0,n.z+Math.sin(s)*r)}var So=null,mu=25;function $v(i,t){let e=Of();e.group.userData.shuttle=!0,e.group.position.set(i.x,i.y+260,i.z),m.scene.add(e.group),So={...e,pad:i,n:t,t:0,phase:"descend"},_t.play("rumble"),m.events.emit("shuttleIncoming",t)}function Pp(i){let t=m.colony;if(m.popTotal=Math.max(m.popTotal||0,m.colonists.length),t.pop=m.popTotal,t.pop)for(m._work=(m._work||0)+i*t.pop*.04;m._work>=1;){m._work-=1;let r=Math.random()<.55?"iron":Math.random()<.6?"silicon":"ice";m.res[r]++}let e=m.buildings.filter(r=>r.type==="beacon"&&r.powered),n=t.support-t.pop;!So&&e.length&&n>0&&!m.ended&&(mu-=i,mu<=0&&(mu=Math.max(20,50/e.length),$v(e[Math.floor(Math.random()*e.length)],Math.min(n,4+(m.cityLevel||0)*2)))),So&&Zv(i);let s=performance.now()*.001;for(let r of m.colonists){r.target||(r.wait-=i,r.wait<=0&&(r.target=Yv(r)));let o=!1;if(r.target){let h=r.target.x-r.pos.x,u=r.target.z-r.pos.z,p=Math.hypot(h,u);if(p<.6)r.target=null,r.wait=3+Math.random()*8;else{r.pos.x+=h/p*1.7*i,r.pos.z+=u/p*1.7*i;for(let x of m.colliders.query(r.pos.x,r.pos.z)){if(x.kind!=="building")continue;let _=r.pos.x-x.x,g=r.pos.z-x.z,f=Math.hypot(_,g),M=x.r+.4;f<M&&f>.01&&(r.pos.x=x.x+_/f*M,r.pos.z=x.z+g/f*M)}r.group.rotation.y=Math.atan2(h,u),o=!0}}let a=Math.hypot(m.player.pos.x-r.pos.x,m.player.pos.z-r.pos.z);a<4&&!o&&(r.group.rotation.y=Math.atan2(m.player.pos.x-r.pos.x,m.player.pos.z-r.pos.z)),r.pos.y=Ut(r.pos.x,r.pos.z);let c=s*7+r.phase,l=o?Math.sin(c)*.6:0;r.legL.rotation.x=l,r.legR.rotation.x=-l,r.armL.rotation.x=-l*.8,r.armR.rotation.x=l*.8,!o&&a<4&&(r.armR.rotation.x=-2.6+Math.sin(s*6)*.3),r.body.position.y=1+(o?Math.abs(Math.sin(c))*.05:0),r.talked=Math.max(0,r.talked-i)}}function Zv(i){let t=So;t.t+=i;let e=t.pad,n=t.group;if(t.phase==="descend"){let s=Math.min(1,t.t/11),r=1-Math.pow(1-s,3);n.position.y=e.y+.6+260*(1-r),t.flame.scale.set(1,.6+(1-r)*1.2+Math.random()*.2,1);for(let o=0;o<3;o++)It.flame(n.position);s>.85&&Math.random()<.5&&It.dustPuff(new A(e.x,e.y,e.z),4,10),s>=1&&(t.phase="landed",t.t=0,It.ring(new A(e.x,e.y,e.z),3,80),t.flame.visible=!1,t.flameGlow.visible=!1)}else if(t.phase==="landed"){if(t.total=t.total||t.n,t.n>0&&t.t>2+(t.total-t.n)*.6){let s;m.colonists.length<40?(s=Ip(e.x+(Math.random()-.5)*2,e.z+3),s.target=new A(e.x+(Math.random()-.5)*20,0,e.z+10+Math.random()*8)):s={name:Lr[gc++%Lr.length][0]},t.n--,t.arrived=(t.arrived||[]).concat([s]),m.popTotal=(m.popTotal||0)+1,m.stats.arrived++}t.n<=0&&t.t>7&&(t.phase="ascend",t.t=0,t.flame.visible=!0,t.flameGlow.visible=!0,_t.play("rumble"),m.events.emit("colonistsArrived",t.arrived||[]))}else if(t.phase==="ascend"){n.position.y+=i*(5+t.t*12);for(let s=0;s<3;s++)It.flame(n.position);t.t<1.5&&It.dustPuff(new A(e.x,e.y,e.z),3,10),t.t>12&&(m.scene.remove(n),So=null)}}var gu=new A;function Lp(i,t){let e=null,n=6;for(let s of m.colonists){gu.set(s.pos.x-i.x,s.pos.y+1.1-i.y,s.pos.z-i.z);let r=gu.dot(t);r<0||r>n||gu.lengthSq()-r*r<.8*.8&&(n=r,e=s)}return e}function Dp(){return m.colonists.map(i=>[i.idx,+i.pos.x.toFixed(1),+i.pos.z.toFixed(1)])}function Up(i){for(let[t,e,n]of i)Ip(e,n,{idx:t});gc=Math.max(gc,...i.map(t=>t[0]+1),0)}var pe=i=>document.getElementById(i),vu,Mu,Jt;function Np(i){vu=i,Mu=pe("minimap"),Jt=Mu.getContext("2d"),pe("hotbar").innerHTML=ji.map((t,e)=>`<div class="slot" data-i="${e}"><span class="key">${e+1}</span><span class="ic">${t.icon}</span><span class="nm">${t.name}</span></div>`).join(""),pe("res").innerHTML=Object.entries(_i).map(([t,e])=>`<div class="r" id="r-${t}"><span class="ic" style="color:${e.color}">${e.icon}</span><span class="nm">${e.name}</span><b>0</b></div>`).join(""),m.events.on("toast",t=>hn(t)),m.events.on("pickup",t=>Jv(t)),document.querySelectorAll("[data-close]").forEach(t=>t.addEventListener("click",()=>Is(!0)))}function hn(i){let t=document.createElement("div");t.className="toast",t.textContent=i;let e=pe("toasts");for(e.appendChild(t);e.children.length>3;)e.firstChild.remove();setTimeout(()=>t.classList.add("out"),2600),setTimeout(()=>t.remove(),3200)}var xu={};function Jv({type:i,n:t,note:e}){_t.play("pickup");let n=xu[i];n&&n.el.isConnected?(n.n+=t,clearTimeout(n.to)):(n=xu[i]={n:t,el:document.createElement("div")},n.el.className="feed",pe("feed").appendChild(n.el));let s=_i[i];n.el.innerHTML=`<span style="color:${s.color}">${s.icon}</span> +${n.n} ${s.name}${e?` <small>${e}</small>`:""}`,n.el.classList.remove("out"),n.to=setTimeout(()=>{n.el.classList.add("out"),setTimeout(()=>{n.el.remove(),delete xu[i]},500)},1800);let r=pe("r-"+i);r.classList.remove("flash"),r.offsetWidth,r.classList.add("flash")}function xc(i){let t=pe("chapter");t.innerHTML=`<div class="t">${i.title}</div><div class="s">${i.sub}</div>`,t.classList.remove("show"),t.offsetWidth,t.classList.add("show")}function bo(i){Is(!1),m.menuOpen=i,pe(i).classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),i==="build"&&Kv(),i==="craft"&&Fp()}function Is(i){["build","craft","pause"].forEach(e=>pe(e).classList.add("hidden"));let t=m.menuOpen;m.menuOpen=!1,t==="build"&&!te.type&&(Ue.index=0),i&&m.requestLock()}function Kv(){pe("build-list").innerHTML=ip.filter(i=>!ac(i).hide).map(i=>{let t=Cn[i],e=ac(i),n=!e.ok,s=_s(t.cost),r=Ke==="mars"&&t.chapter>m.chapter?`\u5728\u300C${Vn[t.chapter].title}\u300D\u89E3\u9501`:e.why,o=t.power>0?`<span class="pw plus">+${t.power} \u26A1</span>`:t.power<0?`<span class="pw">${t.power} \u26A1</span>`:"";return`<div class="card ${n?"locked":""} ${s?"":"poor"}" data-k="${i}">
      <div class="h"><span class="ic">${n?"\u{1F512}":t.icon}</span><b>${t.name}</b>${o}</div>
      <div class="d">${n?r:t.desc}</div>
      <div class="c">${n?"":Va(t.cost)}</div></div>`}).join(""),pe("build-list").querySelectorAll(".card").forEach(i=>i.addEventListener("click",()=>{let t=i.dataset.k,e=Cn[t];if(!ac(t).ok){_t.play("deny");return}_t.play("ui"),te.rot=0,As(t),Ue.index=2,Is(!0),_s(e.cost)||hn("\u8D44\u6E90\u4E0D\u8DB3\u2014\u2014\u653E\u7F6E\u524D\u5148\u53BB\u91C7\u96C6\u5427")}))}function Fp(){pe("craft-list").innerHTML=Object.entries(hu).map(([i,t])=>{let e=m.upgrades[i],n=_s(t.cost),s=t.need&&!m.upgrades[t.need];return`<div class="card ${e?"done":""} ${n&&!s?"":"poor"}" data-k="${i}">
      <div class="h"><span class="ic">${t.icon}</span><b>${t.name}</b>${e?'<span class="pw plus">\u5DF2\u5236\u9020</span>':""}</div>
      <div class="d">${t.desc}${s?"\uFF08\u9700\u5148\u5236\u9020\u7B49\u79BB\u5B50\u6B65\u67AA\uFF09":""}</div>
      <div class="c">${e?"":Va(t.cost)}</div></div>`}).join(""),pe("craft-list").querySelectorAll(".card").forEach(i=>i.addEventListener("click",()=>{let t=i.dataset.k,e=hu[t];if(m.upgrades[t]||e.need&&!m.upgrades[e.need]||!_s(e.cost)){_t.play("deny");return}Ha(e.cost),m.upgrades[t]=!0,m.stats.crafted[t]=!0,_t.play("craft"),hn(`\u5236\u9020\u5B8C\u6210\uFF1A${e.name}`),t==="tank"&&(m.player.o2=180),t==="rifle"&&(Ue.index=1),m.events.emit("crafted",t),Fp()}))}var _u=0;function Su(i,t){let e=m.player,n=m.colony;if(_u-=i,_u<=0){_u=.2;for(let l in _i)pe("r-"+l).querySelector("b").textContent=m.res[l];let a=`${Math.round(n.powerProd)}/${n.powerUse}`;pe("colony").innerHTML=`
      <div class="${n.deficit?"warn":""}">\u26A1 \u7535\u529B <b>${a}</b>${n.deficit?" \u4E0D\u8DB3":""}</div>
      <div class="lv">${ln[m.cityLevel].icon} <b>${ln[m.cityLevel].name}</b> <small>\xB7 ${yt.name}</small></div>
      <div>\u{1F465} \u4EBA\u53E3 <b>${n.pop}</b> <small>/ \u53EF\u5BB9\u7EB3 ${n.support}</small></div>
      ${(()=>{let l=ep();return l?`<div class="sub">\u4E0B\u4E00\u7EA7\u300C${l.name}\u300D\uFF1A\u4EBA\u53E3 ${Math.min(l.curPop,l.pop)}/${l.pop} \xB7 \u8BBE\u65BD ${Math.min(l.curB,l.b)}/${l.b}</div>`:""})()}
      <div class="sub">\u{1F3E0}${n.housing} \u{1FAE7}${n.o2} \u{1F331}${n.food} \u{1F4A7}${n.water}</div>
      ${m.terraform>0?`<div>\u{1F30D} \u5927\u6C14\u6539\u9020 <b>${Math.floor(m.terraform*100)}%</b></div>`:""}`,pe("clock").textContent=Vf()+(m.storm>.3?" \xB7 \u6C99\u5C18\u66B4":"")+(m.time.night>.5?" \xB7 \u591C":"");let c=Vn[m.chapter];pe("goals").innerHTML=`<div class="gt">${c.title}</div>`+c.goals.map((l,h)=>{let u=m.goalDone?.[m.chapter+":"+h];return`<div class="g ${u?"done":""}"><span class="cb">${u?"\u2713":""}</span>${l.text}${l.prog&&!u?` <small>${l.prog()}</small>`:""}</div>`}).join(""),document.querySelectorAll("#hotbar .slot").forEach((l,h)=>{l.classList.toggle("on",h===Ue.index),l.classList.toggle("lock",!!(ji[h].need&&!m.upgrades[ji[h].need]))})}yu("hp",e.health/e.maxHealth,`${Math.ceil(e.health)}`),yu("o2",e.o2/e.maxO2,`${Math.ceil(e.o2)}`),yu("en",e.energy/100,`${Math.ceil(e.energy)}`),pe("o2-state").textContent=e.inLife?"\u751F\u547D\u7EF4\u6301\u4E2D \xB7 \u8865\u6C27":e.o2<e.maxO2*.2?"\u6C27\u6C14\u4E0D\u8DB3\uFF01\u8FD4\u56DE\u8865\u6C27":"",pe("o2-state").className=e.inLife?"ok":"bad",pe("bars").classList.toggle("low",e.o2<e.maxO2*.2&&!e.inLife);let s=pp(),r=pe("radio");s?(r.dataset.k!==s[1]&&(r.dataset.k=s[1],r.innerHTML=`<div class="who">\u{1F4FB} ${s[0]}</div><div class="txt">${s[1]}</div>`),r.classList.add("show")):r.classList.remove("show"),pe("prompt").innerHTML=t.prompt||"",pe("prompt").classList.toggle("show",!!t.prompt),pe("prompt").classList.toggle("drive",!!m.driving);let o=pe("buildhint");if(Ue.id==="build"&&te.type&&!m.menuOpen){let a=Cn[te.type];o.innerHTML=`<b>${a.icon} ${a.name}</b> ${Va(a.cost)}<br>${te.valid?'<span class="okc">\u5DE6\u952E\u653E\u7F6E</span>':`<span class="badc">${te.reason}</span>`} \xB7 R/\u6EDA\u8F6E \u65CB\u8F6C \xB7 \u53F3\u952E \u53D6\u6D88 \xB7 B \u6362\u5EFA\u7B51`,o.classList.add("show")}else o.classList.remove("show");pe("hurt").style.opacity=Math.min(1,e.hurtT*1.6+(e.o2<=0?.5+Math.sin(performance.now()*.01)*.2:0)),pe("lowo2").style.opacity=!e.inLife&&e.o2<e.maxO2*.2?(.4+Math.sin(performance.now()*.006)*.3)*(1-e.o2/(e.maxO2*.2)*.6):0,pe("crosshair").className=t.crossClass||"",Qv(),jv()}function yu(i,t,e){let n=pe("bar-"+i);n.querySelector("i").style.width=Math.max(0,Math.min(1,t))*100+"%",n.querySelector("b").textContent=e}function Qv(){let i=m.player,t=i.fwd,e=Math.atan2(t.x,-t.z)*180/Math.PI,s=[["\u5317",0],["\u4E1C\u5317",45],["\u4E1C",90],["\u4E1C\u5357",135],["\u5357",180],["\u897F\u5357",225],["\u897F",270],["\u897F\u5317",315]].map(([a,c])=>({t:a,a:c,cls:a.length===1?"big":""})),r=(a,c)=>Math.atan2(a-i.pos.x,-(c-i.pos.z))*180/Math.PI;if(s.push({t:"\u2302",a:r(Re.x,Re.z),cls:"home"}),m.upgrades.scanner){let a=null,c=1e9;for(let l of m.nodes)if(l.type==="titanium"){let h=Math.hypot(l.x-i.pos.x,l.z-i.pos.z);h<c&&(c=h,a=l)}a&&s.push({t:`\u2726 ${Math.round(c)}m`,a:r(a.x,a.z),cls:"ti"})}let o="";for(let a of s){let c=(a.a-e+540)%360-180;Math.abs(c)>75||(o+=`<span class="${a.cls}" style="left:${50+c/75*50}%">${a.t}</span>`)}pe("compass").innerHTML=o+"<i></i>"}function jv(){let i=m.player,t=Mu.width,e=m.upgrades.scanner?220:110,n=vu.width/sn;Jt.save(),Jt.clearRect(0,0,t,t),Jt.beginPath(),Jt.arc(t/2,t/2,t/2-1,0,Math.PI*2),Jt.clip(),Jt.fillStyle="#1a0d08",Jt.fillRect(0,0,t,t),Jt.drawImage(vu,(i.pos.x-e+sn/2)*n,(i.pos.z-e+sn/2)*n,e*2*n,e*2*n,0,0,t,t);let s=t/(e*2),r=l=>(l-i.pos.x)*s+t/2,o=l=>(l-i.pos.z)*s+t/2,a=(l,h,u,p)=>{Jt.fillStyle=p,Jt.beginPath(),Jt.arc(r(l),o(h),u,0,Math.PI*2),Jt.fill()};for(let l of m.nodes)Math.abs(l.x-i.pos.x)>e||Math.abs(l.z-i.pos.z)>e||a(l.x,l.z,l.type==="titanium"?3:2,_i[l.type].color);for(let l of m.buildings){Jt.fillStyle=l.powered?"#f2efe8":"#ff8a6a";let h=Math.max(2,l.def.r*s);Jt.fillRect(r(l.x)-h,o(l.z)-h,h*2,h*2)}Jt.fillStyle="#7dff9a";for(let l of m.colonists)Jt.fillRect(r(l.pos.x)-1,o(l.pos.z)-1,2,2);for(let l of m.enemies)a(l.pos.x,l.pos.z,l.guardian?3.5:2.5,"#ff3b2a");Jt.strokeStyle="rgba(102,230,255,.6)",Jt.lineWidth=1.5,Jt.setLineDash([4,4]),Jt.beginPath(),Jt.arc(r(Hn.x),o(Hn.z),ln[m.cityLevel].r*s,0,Math.PI*2),Jt.stroke(),Jt.setLineDash([]),a(Re.x,Re.z,3,"#66ff99");let c=Math.atan2(i.fwd.x,-i.fwd.z);Jt.translate(t/2,t/2),Jt.rotate(c),Jt.fillStyle="#fff",Jt.beginPath(),Jt.moveTo(0,-7),Jt.lineTo(5,5),Jt.lineTo(0,2),Jt.lineTo(-5,5),Jt.closePath(),Jt.fill(),Jt.restore()}var ze=null,Op=new nn,bu=new pn,Eo=new A;function tM(){let i=new ce,t=new ce;i.add(t);let e=(l,h,u,p,d,x=t)=>{let _=new Ft(l,h);return _.position.set(u,p,d),_.castShadow=!0,_.receiveShadow=!0,x.add(_),_};e(new Oe(2.6,.7,4.6),V.white,0,1,0),e(new Oe(2.62,.18,4.62),V.orange,0,1.3,0),e(new Oe(2.2,.9,2.2),V.panel,0,1.8,.6);let n=e(new ve(1.15,16,10,0,Math.PI*2,0,Math.PI/2),V.glass,0,1.75,-.9);n.scale.set(1,.85,1.2),n.castShadow=!1,e(new Oe(2.4,.3,.5),V.dark,0,.9,-2.4),e(new qe(.03,.03,1.6,4),V.metal,.9,3,1.4);let s=fe(16728128,.8,t,.9,3.8,1.4),r=[-.8,.8].map(l=>fe(16773853,1.4,t,l,1.05,-2.68)),o=[],a=new qe(.55,.55,.5,14);a.rotateZ(Math.PI/2);for(let l of[-1.6,0,1.6])for(let h of[-1.45,1.45]){let u=e(a,V.dark,h,.55,l,i);e(new qe(.25,.25,.52,6).rotateZ(Math.PI/2),V.metal,0,0,0,u),o.push(u)}let c=new pr(16773853,0,60,.5,.5,1.2);return c.position.set(0,1.2,-2.4),c.target.position.set(0,0,-20),t.add(c,c.target),{g:i,body:t,wheels:o,tip:s,lamp:c,heads:r}}function yc(i,t,e=0){if(ze)return ze;let n=tM();return m.scene.add(n.g),ze={...n,x:i,z:t,y:Ut(i,t),h:e,speed:0,vy:0,lookYaw:0,pitch:-.05,spin:0,hitT:0,air:!1},ze.collider=m.colliders.add({x:i,z:t,r:2,kind:"rover"}),Eu(0),ze}function vc(){return ze}function Bp(){return ze?{x:+ze.x.toFixed(1),z:+ze.z.toFixed(1),h:+ze.h.toFixed(2)}:null}function _c(i,t){return Ut(i,t)}function Eu(i){let t=ze,e=Math.sin(t.h),n=Math.cos(t.h),s=-e,r=-n,o=n,a=-e,c=_c(t.x+s*1.8,t.z+r*1.8),l=_c(t.x-s*1.8,t.z-r*1.8),h=_c(t.x-o*1.3,t.z-a*1.3),u=_c(t.x+o*1.3,t.z+a*1.3),p=Math.atan2(c-l,3.6),d=Math.atan2(u-h,2.6);t.g.position.set(t.x,t.y,t.z),bu.set(t.air?t.g.rotation.x:p,t.h,t.air?t.g.rotation.z:-d,"YXZ"),t.air||t.g.rotation.copy(bu),t.spin+=t.speed*i/.55;for(let x of t.wheels)x.rotation.x=-t.spin;return(c+l+h+u)/4}function zp(){ze&&(m.driving=!0,ze.lookYaw=0,ze.pitch=-.08,m.colliders.remove(ze.collider),_t.play("place"))}function wu(i){let t=ze;if(!t)return;m.driving=!1,_t.engine(0);let e=Math.cos(t.h),n=Math.sin(t.h),s=t.x+e*3,r=t.z-n*3;m.colliders.overlaps(s,r,.5)&&(s=t.x-e*3,r=t.z+n*3),i.pos.set(s,Ut(s,r),r),i.vel.set(0,0,0),i.yaw=t.h+t.lookYaw,i.pitch=t.pitch,t.speed=0,t.lamp.intensity=0,t.collider=m.colliders.add({x:t.x,z:t.z,r:2,kind:"rover"})}function kp(i,t,e){if(!ze)return;let n=ze;if(n.tip.visible=Math.sin(performance.now()*.005)>0,!m.driving){n.y=Eu(0);return}m.locked&&(n.lookYaw=Je.clamp(n.lookYaw-lt.dx*lt.sens,-2.4,2.4),n.pitch=Je.clamp(n.pitch-lt.dy*lt.sens,-1,.9));let s=(lt.down("KeyW")||lt.down("ArrowUp")?1:0)-(lt.down("KeyS")||lt.down("ArrowDown")?1:0),r=(lt.down("KeyA")||lt.down("ArrowLeft")?1:0)-(lt.down("KeyD")||lt.down("ArrowRight")?1:0),o=lt.down("ShiftLeft")?28:17;n.air||(s>0?n.speed+=(n.speed<0?22:11)*i:s<0?n.speed-=(n.speed>0?22:7)*i:n.speed*=1-.7*i,lt.down("Space")&&(n.speed*=1-3.5*i),n.speed=Je.clamp(n.speed,-7,o),n.speed>o&&(n.speed-=20*i),n.h+=r*i*1.5*Je.clamp(n.speed/5,-1,1)),Eo.set(-Math.sin(n.h),0,-Math.cos(n.h)),n.x=Je.clamp(n.x+Eo.x*n.speed*i,-le+125,le-125),n.z=Je.clamp(n.z+Eo.z*n.speed*i,-le+125,le-125);for(let l of m.colliders.query(n.x,n.z)){l.kind==="flora"&&Math.abs(n.speed)>0;let h=n.x-l.x,u=n.z-l.z,p=Math.hypot(h,u),d=l.r+1.9;if(p<d&&p>.001){if(l.kind==="rock"&&l.r<1.3)continue;n.x=l.x+h/p*d,n.z=l.z+u/p*d,Math.abs(n.speed)>5&&(_t.play("land"),It.dustPuff(new A(n.x,n.y+1,n.z),6,2)),n.speed*=-.25}}if(n.hitT-=i,Math.abs(n.speed)>6&&n.hitT<=0)for(let l of m.enemies)l.dead||Math.hypot(l.pos.x-n.x,l.pos.z-n.z)<2.6+l.scale&&(yo(l,Math.abs(n.speed)*4,"player"),n.hitT=.4,n.speed*=.7,It.burst(new A(l.pos.x,l.pos.y+1,l.pos.z),[1,.5,.2],20,6));let a=Ut(n.x,n.z);if(n.air)n.vy-=yt.gravity*i,n.y+=n.vy*i,n.y<=a&&(n.y=a,n.air=!1,n.vy<-5&&(_t.play("land"),It.dustPuff(new A(n.x,n.y,n.z),14,3)),n.vy=0);else{let l=n.y+n.vy*i-.5*yt.gravity*i*i;if(a<l-.25&&n.vy>1.5&&Math.abs(n.speed)>12)n.air=!0,n.vy=Math.min(n.vy,7),n.y=l;else{let h=(a-n.y)/Math.max(i,.001);n.vy=n.vy*.6+h*.4,n.y=a}}if(Eu(i),Math.abs(n.speed)>4&&!n.air&&Math.random()<.6){let l=new A(n.x-Eo.x*2.5+(Math.random()-.5)*2,n.y+.3,n.z-Eo.z*2.5);It.dustPuff(l,1,.5)}n.lamp.intensity=m.time.night>.3?80:0;for(let l of n.heads)l.visible=m.time.night>.3;Op.setFromEuler(bu.set(n.pitch,n.lookYaw,0,"YXZ")),e.quaternion.copy(n.body.getWorldQuaternion(new nn)).multiply(Op);let c=new A(0,2.15,-.7).applyQuaternion(n.g.quaternion).add(n.g.position);e.position.copy(c),e.getWorldDirection(t.fwd),t.pos.set(n.x,n.y,n.z),t.vel.set(0,0,0),t.inLife=!0,t.o2=Math.min(t.maxO2,t.o2+20*i),t.energy=Math.min(100,t.energy+10*i),t.hurtT=Math.max(0,t.hurtT-i),_t.engine(Math.abs(n.speed)/28)}function Hp(){return ze?Math.round(Math.abs(ze.speed)*3.6):0}var Mc=[],Cu=new Mn(1,1,8,1,!0);Cu.rotateX(Math.PI);Cu.translate(0,-.5,0);var eM=new A(0,1,0),Au=0,Tu=0,Sc=0,Ru=0,Vp=-1;function nM(){Au=45,Ru=0,Sc=6,rn("\u65B9\u821F \xB7 AI","\u770B\u5929\u4E0A\u2014\u2014\u6D41\u661F\u96E8\uFF01\u6709\u51E0\u9897\u4F1A\u843D\u5230\u9644\u8FD1\u3002\u9668\u77F3\u91CC\u5BCC\u542B\u949B\uFF0C\u53BB\u5760\u843D\u70B9\u770B\u770B\u3002"),m.events.emit("toast","\u2604 \u6D41\u661F\u96E8")}function Gp(i){let t=m.player.pos,e;if(i){for(let h=0;h<20;h++){let u=Math.random()*Math.PI*2,p=40+Math.random()*110,d=Je.clamp(t.x+Math.cos(u)*p,-le+180,le-180),x=Je.clamp(t.z+Math.sin(u)*p,-le+180,le-180);if(!m.buildings.some(_=>Math.hypot(_.x-d,_.z-x)<_.def.r+14)){e=new A(d,Ut(d,x),x);break}}if(!e)return}else{let h=Math.random()*Math.PI*2,u=150+Math.random()*350;e=new A(t.x+Math.cos(h)*u,t.y+110+Math.random()*140,t.z+Math.sin(h)*u)}let n=new A((Math.random()-.5)*1.2,-.55-Math.random()*.3,(Math.random()-.5)*1.2).normalize(),s=i?520:420,r=e.clone().addScaledVector(n,-s),o=fe(i?16756848:16769216,i?18:10,m.scene);o.material.fog=!1,o.position.copy(r);let a=new Ft(Cu,new ye({color:i?16751184:16767144,transparent:!0,opacity:.75,blending:Ze,depthWrite:!1,fog:!1})),c=i?90:70+Math.random()*70,l=i?2.2:1.3;a.scale.set(l,c,l),a.quaternion.setFromUnitVectors(eM,n),a.position.copy(r),m.scene.add(a),Mc.push({pos:r,vel:n.multiplyScalar(i?150:220),head:o,tail:a,impact:i,target:e,life:s/(i?150:220)})}function Wp(i){m.time.night>.7&&Vp!==m.time.day&&m.time.day>=2&&m.storm<.1&&!m.ended&&(Vp=m.time.day,Math.random()<.4&&nM()),Au>0&&(Au-=i,Tu-=i,Sc-=i,Tu<=0&&(Tu=.15+Math.random()*.35,Gp(!1)),Sc<=0&&Ru<4&&(Sc=7+Math.random()*5,Ru++,Gp(!0)));for(let e=Mc.length-1;e>=0;e--){let n=Mc[e];n.life-=i,n.pos.addScaledVector(n.vel,i),n.head.position.copy(n.pos),n.tail.position.copy(n.pos);for(let s=0;s<3;s++)It.trail(n.pos.clone().addScaledVector(n.vel,-i*s/3),n.impact?[1,.6,.3]:[1,.85,.6],n.impact?1.2:.7);n.life<=0&&(m.scene.remove(n.head),m.scene.remove(n.tail),n.tail.material.dispose(),Mc.splice(e,1),n.impact&&iM(n.target))}}function iM(i){let t=i.clone();t.y+=1.5,It.burst(t,[1,.55,.2],120,22),It.ring(i,2,90),It.dustPuff(t,40,8),_t.play("rumble"),_t.play("kill");let e=i.distanceTo(m.player.pos);if(e<80&&(m.player.landDip=Math.max(m.player.landDip,.4*(1-e/80))),!m.colliders.overlaps(i.x,i.z,2.5)){let n=Sr("titanium",i.x,i.z,10+Math.floor(Math.random()*8));n.meteor=!0}m.events.emit("toast",`\u2604 \u9668\u77F3\u5760\u843D\u5728 ${Math.round(e)} \u7C73\u5916`)}var ae=i=>document.getElementById(i);m.debug=/[?&]debug/.test(location.search);var To=ae("c"),un=new ba({canvas:To,antialias:!0,powerPreference:"high-performance"});un.setPixelRatio(Math.min(window.devicePixelRatio,1.5));un.setSize(window.innerWidth,window.innerHeight);un.shadowMap.enabled=!0;un.shadowMap.type=Lh;un.toneMapping=Dh;un.toneMappingExposure=1;var Ec="high";try{Ec=localStorage.getItem("starport-quality")||((navigator.hardwareConcurrency||8)<=4?"mid":"high")}catch{}function Yp(i,t){Ec=i,un.setPixelRatio(i==="high"?Math.min(window.devicePixelRatio,1.5):i==="mid"?1:.75),un.setSize(window.innerWidth,window.innerHeight);let e=i!=="low";un.shadowMap.enabled!==e&&(un.shadowMap.enabled=e,t&&m.scene.traverse(n=>{n.material&&[].concat(n.material).forEach(s=>{s.needsUpdate=!0})}))}Yp(Ec,!1);var Ei=new cr,Ye=new Xe(72,window.innerWidth/window.innerHeight,.1,6e3);m.scene=Ei;m.camera=Ye;m.renderer=un;m.colliders=new ka(16);window.addEventListener("resize",()=>{Ye.aspect=window.innerWidth/window.innerHeight,Ye.updateProjectionMatrix(),un.setSize(window.innerWidth,window.innerHeight)});Hf(Ei);Cf(Ei);Gf(Ei);var wc=Ff();wc.group.position.set(Re.x,Ut(Re.x,Re.z)+.1,Re.z);wc.group.rotation.y=.6;Ei.add(wc.group);m.colliders.add({x:Re.x,z:Re.z,r:3.4,kind:"lander"});var Wt=new fc(Ye);m.player=Wt;Ap(Ye);bp(To);Np(If(350));su(Ei);m.requestLock=()=>{if(m.debug){m.locked=!0;return}try{let i=To.requestPointerLock();i&&i.catch&&i.catch(()=>{})}catch{}};document.addEventListener("pointerlockchange",()=>{m.locked=document.pointerLockElement===To,!m.locked&&m.started&&!m.menuOpen&&!Wt.dead&&!m.endingShown&&bo("pause")});To.addEventListener("click",()=>{m.started&&!m.locked&&!m.menuOpen&&!Wt.dead&&m.requestLock()});function wi(i){if(!m.started)return;let t={v:1,res:m.res,upgrades:m.upgrades,stats:m.stats,chapter:m.chapter,goalDone:m.goalDone,terraform:m.terraform,ended:m.ended,nights:m.nightsSurvived||0,city:m.cityLevel,pop:m.popTotal||0,launched:!!m.launched,rover:Bp(),time:{t:m.time.t,day:m.time.day},player:{x:Wt.pos.x,z:Wt.pos.z,yaw:Wt.yaw,o2:Wt.o2,hp:Wt.health},buildings:up(),nodes:Kf(),colonists:Dp(),storm:gp()};try{localStorage.setItem(qa,JSON.stringify(t)),i||hn("\u5DF2\u4FDD\u5B58")}catch{i||hn("\u4FDD\u5B58\u5931\u8D25")}}function sM(){try{return JSON.parse(localStorage.getItem(qa))}catch{return null}}function rM(i){Object.assign(m.res,i.res),m.upgrades=i.upgrades||{},Qf(i.nodes);for(let[t,e,n,s,r]of i.buildings)Cn[t]&&cc(t,e,n,s,r);m.stats=i.stats,m.goalDone=i.goalDone||{},m.terraform=i.terraform||0,m.ended=!!i.ended,m.nightsSurvived=i.nights||0,_p(m.terraform>=1),m.time.t=i.time.t,m.time.day=i.time.day,Wt.pos.set(i.player.x,Ut(i.player.x,i.player.z),i.player.z),Wt.yaw=i.player.yaw,Wt.o2=i.player.o2,Wt.health=Math.max(30,i.player.hp),Up(i.colonists||[]),i.rover&&yc(i.rover.x,i.rover.z,i.rover.h),m.cityLevel=i.city||0,m.popTotal=i.pop??(i.colonists||[]).length,m.launched=!!i.launched,su(Ei),xp(i.storm),xo(i.chapter,!0),Zi(),m.terraform>0&&Jh($p(),m.terraform)}var $p=()=>m.buildings.filter(i=>i.type==="terraformer").map(i=>({x:i.x,z:i.z})),oM=yt.intro;document.querySelector(".logo span").textContent="\uFF1A"+yt.title;document.title="\u661F\u6E2F\uFF1A"+yt.title;vi.visited?.length&&(ae("touch-note").innerHTML="\u5DF2\u5F00\u62D3\uFF1A"+vi.visited.map(i=>`${yi[i.id].name}\uFF08${i.pop} \u4EBA\uFF09`).join(" \xB7 "));ae("story").innerHTML=oM.map((i,t)=>`<p style="animation-delay:${.4+t*1.1}s">${i}</p>`).join("");var ts=sM();ts&&(ae("btn-continue").classList.remove("hidden"),ae("cont-info").textContent=`${yt.name} \xB7 ${Vn[ts.chapter]?.title||""} \xB7 \u7B2C ${ts.time.day} \u65E5 \xB7 ${ts.pop??ts.colonists?.length??0} \u4F4D\u5C45\u6C11`);matchMedia("(pointer: coarse)").matches&&(ae("touch-note").innerHTML+="\u672C\u6E38\u620F\u9700\u8981\u952E\u76D8\u548C\u9F20\u6807\uFF0C\u8BF7\u5728\u7535\u8111\u4E0A\u6E38\u73A9\u3002");function Du(i){if(_t.init(),i&&ts)rM(ts);else{if(localStorage.removeItem(qa),Yf(),vi.carry&&Ke!=="mars"){Object.assign(m.upgrades,vi.carry.upgrades||{});for(let t in vi.carry.res)m.res[t]+=vi.carry.res[t];m.upgrades.rover&&yc(Re.x+10,Re.z+4,.5),setTimeout(()=>hn("\u968F\u8230\u7269\u8D44\u5DF2\u5378\u8F7D\uFF0C\u6240\u6709\u88C5\u5907\u5DF2\u540C\u6B65"),4e3)}m.time.t=.29,xo(0,!0),setTimeout(()=>{xc(Vn[0]),Vn[0].radio.forEach(t=>rn(t[0],t[1]))},1200)}ae("intro").classList.add("hidden"),document.body.classList.add("playing"),m.started=!0,m.requestLock()}ae("btn-new").addEventListener("click",()=>{ts&&!confirm("\u5F00\u59CB\u65B0\u7684\u65C5\u7A0B\u4F1A\u8986\u76D6\u73B0\u6709\u5B58\u6863\uFF0C\u786E\u5B9A\u5417\uFF1F")||Du(!1)});ae("btn-continue").addEventListener("click",()=>Du(!0));ae("btn-save").addEventListener("click",()=>wi(!1));ae("btn-restart").addEventListener("click",()=>{confirm("\u5C06\u5220\u9664\u6240\u6709\u661F\u7403\u7684\u8FDB\u5EA6\uFF0C\u4ECE\u706B\u661F\u91CD\u65B0\u5F00\u59CB\u3002\u786E\u5B9A\u5417\uFF1F")&&(wf(),m.started=!1,location.href=location.pathname+(m.debug?"?debug":""))});ae("vol").addEventListener("input",i=>_t.setVolume(+i.target.value));ae("quality").value=Ec;ae("quality").addEventListener("change",i=>{Yp(i.target.value,!0);try{localStorage.setItem("starport-quality",i.target.value)}catch{}});ae("sens").addEventListener("input",i=>{lt.sens=+i.target.value});ae("btn-respawn").addEventListener("click",()=>{m.driving&&wu(Wt),Wt.respawn(),ae("death").classList.add("hidden"),m.requestLock()});ae("btn-endcont").addEventListener("click",()=>{ae("ending").classList.add("hidden"),m.endingShown=!1,m.requestLock()});m.events.on("chapter",i=>xc(i));m.events.on("crafted",i=>{if(i!=="rover")return;let t=m.buildings.find(n=>n.type==="fabricator"),e=t||Wt.pos;for(let n=0;n<12;n++){let s=n*.9,r=(t?t.def.r:0)+5+n,o=e.x+Math.cos(s)*r,a=e.z+Math.sin(s)*r;if(!m.colliders.overlaps(o,a,2.6)){yc(o,a,-s);break}}rn("\u65B9\u821F \xB7 AI","\u6F2B\u6E38\u8F66\u5DF2\u51FA\u5382\u3002\u8F66\u8231\u52A0\u538B\uFF0C\u53EF\u4EE5\u5728\u8F66\u91CC\u8865\u6C27\u3002\u5C0F\u5FC3\u522B\u5F00\u4E0B\u60AC\u5D16\u3002")});m.events.on("cityLevel",i=>{xc({title:`${i.icon} \u57CE\u5E02\u5347\u7EA7\uFF1A${i.name}`,sub:`\u9886\u5730\u6269\u5C55\u81F3 ${i.r} \u7C73`});let t={1:["\u65B9\u821F \xB7 AI","\u6B96\u6C11\u5730\u5347\u7EA7\u4E3A\u5B9A\u5C45\u70B9\u3002\u9886\u5730\u6269\u5927\u4E86\uFF0C\u66F4\u8FDC\u7684\u571F\u5730\u53EF\u4EE5\u5EFA\u9020\u4E86\u3002"],2:["\u65B9\u821F \xB7 AI","\u5C0F\u9547\u89C4\u6A21\u8FBE\u6210\u3002\u516C\u5BD3\u5854\u4E0E\u5782\u76F4\u519C\u573A\u7684\u8BBE\u8BA1\u56FE\u5DF2\u89E3\u9501\u3002"],3:["\u65B9\u821F \xB7 AI","\u8FD9\u91CC\u5DF2\u7ECF\u662F\u4E00\u5EA7\u57CE\u5E02\u4E86\u3002\u751F\u6001\u4E2D\u67A2\u7684\u8BBE\u8BA1\u56FE\u5DF2\u89E3\u9501\u3002"],4:["\u65B9\u821F \xB7 AI","\u5927\u90FD\u4F1A\u3002\u591C\u91CC\uFF0C\u4ECE\u8F68\u9053\u4E0A\u80FD\u770B\u89C1\u4F60\u4EEC\u7684\u706F\u5149\u3002"],5:["\u65B9\u821F \xB7 AI","\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C\u661F\u6E2F\u300D\u2014\u2014\u4EBA\u7C7B\u53EF\u4EE5\u4ECE\u8FD9\u91CC\u98DE\u5411\u4E0B\u4E00\u9897\u661F\u7403\u4E86\u3002"]}[m.cityLevel];t&&rn(t[0],t[1]),wi(!0)});m.events.on("openBuild",()=>bo("build"));m.events.on("death",i=>{_t.laser(!1),setTimeout(()=>{if(m.endingShown){Wt.respawn();return}ae("death-why").textContent=i,ae("death").classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock()},1500)});var Xp=!0;m.events.on("nightfall",i=>{_t.play("night"),hn(`\u591C\u5E55\u964D\u4E34 \xB7 \u96F7\u8FBE\u63A2\u6D4B\u5230\u7EA6 ${i} \u4E2A\u79FB\u52A8\u4FE1\u53F7`),Xp&&(Xp=!1,rn("\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5B83\u4EEC\u6765\u4E86\u3002\u9508\u8680\u86DB\u4F1A\u653B\u51FB\u5EFA\u7B51\u548C\u4EBA\u3002\u7528\u6FC0\u5149\u6216\u6B65\u67AA\u51FB\u9000\u5B83\u4EEC\u2014\u2014\u5B83\u4EEC\u7684\u6676\u4F53\u6B8B\u9AB8\u91CC\u542B\u6709\u949B\u3002"))});m.events.on("broken",i=>hn(`\u26A0 ${i.def.name} \u53D7\u635F\u505C\u673A\uFF01\u767D\u5929\u4F1A\u81EA\u52A8\u4FEE\u590D`));var qp=!0;m.events.on("shuttleIncoming",i=>hn(`\u{1F680} \u79FB\u6C11\u98DE\u8239\u6B63\u5728\u964D\u843D \xB7 ${i} \u4EBA`));m.events.on("colonistsArrived",i=>{i.length&&(hn(`\u6B22\u8FCE\u56DE\u5BB6\uFF1A${i.map(t=>t.name).join("\u3001")}`),qp&&m.stats.arrived<=4&&(qp=!1,rn(i[0].name,"\u4F60\u597D\u2026\u2026\u8FD9\u5C31\u662F\u706B\u661F\uFF1F\u6BD4\u7167\u7247\u4E0A\u8FD8\u8981\u7EA2\u3002\u8C22\u8C22\u4F60\uFF0C\u4E3A\u6211\u4EEC\u70B9\u4EAE\u4E86\u8FD9\u91CC\u7684\u706F\u3002")))});var aM={habitat:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5C45\u4F4F\u7A79\u9876\u52A0\u538B\u5B8C\u6210\u3002\u5BA4\u5185\u6E29\u5EA6 21 \u6444\u6C0F\u5EA6\uFF0C\u6E7F\u5EA6 45%\u3002\u8FD9\u662F\u706B\u661F\u4E0A\u7B2C\u4E00\u4E2A\u53EF\u4EE5\u8131\u4E0B\u5934\u76D4\u7684\u5730\u65B9\u3002"],greenhouse:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u6E29\u5BA4\u542F\u52A8\u3002\u7B2C\u4E00\u6279\u79CD\u5B50\u5DF2\u7ECF\u64AD\u4E0B\uFF1A\u571F\u8C46\u3001\u5C0F\u9EA6\u3001\u756A\u8304\u2026\u2026\u548C\u4E00\u682A\u5411\u65E5\u8475\u3002"],beacon:["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u6536\u5230\u7740\u9646\u573A\u7684\u4FE1\u6807\u4FE1\u53F7\u4E86\uFF01\u53EA\u8981\u6B96\u6C11\u5730\u80FD\u517B\u6D3B\u4ED6\u4EEC\uFF0C\u79FB\u6C11\u98DE\u8239\u5C31\u4F1A\u51FA\u53D1\u3002"],reactor:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u805A\u53D8\u53CD\u5E94\u5806\u70B9\u706B\u6210\u529F\u3002\u8F93\u51FA\u7A33\u5B9A\u3002"],terraformer:["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5927\u6C14\u6539\u9020\u5854\u2026\u2026\u542F\u52A8\u4E86\u3002\u6211\u4EEC\u89C1\u8BC1\u7684\uFF0C\u662F\u4E00\u9897\u661F\u7403\u7684\u82CF\u9192\u3002"],apartment:["\u65B9\u821F \xB7 AI","\u7B2C\u4E00\u5EA7\u516C\u5BD3\u5854\u843D\u6210\u3002\u57CE\u5E02\u5F00\u59CB\u5411\u5929\u7A7A\u751F\u957F\u3002"],launch:["\u65B9\u821F \xB7 AI","\u661F\u9645\u53D1\u5C04\u53F0\u5B8C\u5DE5\u3002\u6B96\u6C11\u8230\u5DF2\u52A0\u6CE8\u5B8C\u6BD5\uFF0C\u968F\u65F6\u53EF\u4EE5\u51FA\u53D1\u3002"],monument:["\u65B9\u821F \xB7 AI","\u7EAA\u5FF5\u7891\u4E0A\u523B\u7740\u4E00\u884C\u5B57\uFF1A\u300C\u81F4\u7B2C\u4E00\u4E2A\u51FA\u53D1\u7684\u4EBA\u300D\u3002"],turret:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u9632\u5FA1\u70AE\u5854\u4E0A\u7EBF\u3002\u5B83\u4EEC\u9700\u8981\u7535\u529B\u624D\u80FD\u8FD0\u8F6C\u3002"],fabricator:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5236\u9020\u5DE5\u574A\u5C31\u7EEA\u3002\u9760\u8FD1\u540E\u6309 E \u6253\u5F00\u3002"]};m.events.on("built",i=>{let t=aM[i.type];t&&m.stats.built[i.type]===1&&rn(t[0],t[1]),i.type==="monument"&&m.stats.built.monument===1&&setTimeout(pM,6e3),wi(!0)});m.events.on("ending",()=>{rn("Nadia Volkova","\u5927\u5BB6\u5FEB\u51FA\u6765\u770B\uFF01\u5929\u7A7A\u2026\u2026\u5929\u7A7A\u53D8\u84DD\u4E86\uFF01"),rn("\u8D75\u5C0F\u96E8","\u4E0B\u96E8\u4E86\uFF01\u8FD9\u662F\u706B\u661F\u4E0A\u7684\u7B2C\u4E00\u573A\u96E8\uFF01"),setTimeout(cM,14e3)});function cM(){m.ended=!0,m.endingShown=!0,Wt.dead&&Wt.respawn(),ae("death").classList.add("hidden"),document.pointerLockElement&&document.exitPointerLock();let i=m.stats,t=["\u4ECE\u7740\u9646\u8231\u7684\u8231\u95E8\u7B2C\u4E00\u6B21\u6253\u5F00\uFF0C\u5230\u4ECA\u5929\uFF0C\u8FC7\u53BB\u4E86 "+m.time.day+" \u4E2A\u706B\u661F\u65E5\u3002","\u66FE\u7ECF\u53EA\u6709\u98CE\u58F0\u7684\u5E73\u539F\u4E0A\uFF0C\u5982\u4ECA\u4F4F\u7740 "+m.colony.pop+" \u4E2A\u4EBA\u3002","\u4ED6\u4EEC\u6765\u81EA\u5730\u7403\u4E0A\u4E0D\u540C\u7684\u56FD\u5BB6\uFF0C\u8BF4\u7740\u4E0D\u540C\u7684\u8BED\u8A00\u3002","\u4F46\u4ECE\u4ECA\u5929\u8D77\uFF0C\u4ED6\u4EEC\u6709\u4E86\u540C\u4E00\u4E2A\u5730\u5740\u3002",'<div class="big">\u706B\u661F \xB7 \u65B0\u5BB6\u56ED</div>',"\u5B69\u5B50\u4EEC\u7B2C\u4E00\u6B21\u5728\u706B\u661F\u4E0A\uFF0C\u770B\u89C1\u4E86\u84DD\u8272\u7684\u5929\u7A7A\u3002",`<span class="stats">\u91C7\u96C6\u8D44\u6E90 ${i.mined.iron+i.mined.silicon+i.mined.ice+i.mined.titanium} \xB7 \u5EFA\u9020\u8BBE\u65BD ${m.buildings.length} \xB7 \u51FB\u9000\u9508\u8680\u86DB ${i.kills} \xB7 \u8FCE\u63A5\u79FB\u6C11 ${i.arrived}</span>`];ae("ending-text").innerHTML=t.map((e,n)=>`<p style="animation-delay:${n*1.6}s">${e}</p>`).join(""),ae("ending").classList.remove("hidden"),_t.play("chapter"),wi(!0)}window.addEventListener("keydown",i=>{m.started&&(m.menuOpen==="build"&&(i.code==="Escape"||i.code==="KeyB")?(Is(!0),m.locked||void 0):m.menuOpen==="craft"&&(i.code==="Escape"||i.code==="KeyE")&&Is(!0))});var Dr=0,Iu=30,Pu=0,wo=0,Nr={};try{Nr=JSON.parse(localStorage.getItem("starport-hints"))||{}}catch{}var Ur=null,Lu=0,Zp=0,lM=[{id:"mine",text:"\u5BF9\u51C6\u53D1\u5149\u7684\u77FF\u77F3\uFF0C<kbd>\u6309\u4F4F\u5DE6\u952E</kbd> \u7528\u91C7\u77FF\u6FC0\u5149\u91C7\u96C6",when:()=>Zp>6&&m.stats.mined.iron+m.stats.mined.silicon===0},{id:"build",text:"\u8D44\u6E90\u591F\u4E86\uFF01\u6309 <kbd>B</kbd> \u6253\u5F00\u5EFA\u9020\u83DC\u5355",when:()=>m.buildings.length===0&&m.res.iron>=8&&m.res.silicon>=6},{id:"o2",text:"\u6C27\u6C14\u5728\u6301\u7EED\u6D88\u8017\u3002\u56DE\u5230\u7740\u9646\u8231\u6216\u5236\u6C27\u7AD9\u9644\u8FD1\u4F1A\u81EA\u52A8\u8865\u6C27",when:()=>!Wt.inLife&&Wt.o2<Wt.maxO2*.5},{id:"night",text:"\u5929\u9ED1\u4E86\uFF0C\u6309 <kbd>F</kbd> \u6253\u5F00\u624B\u7535\u7B52",when:()=>m.time.night>.6&&!Wt.flashlight},{id:"craft",text:"\u9760\u8FD1\u5236\u9020\u5DE5\u574A\u6309 <kbd>E</kbd> \u5236\u9020\u6B66\u5668\u548C\u88C5\u5907\u2014\u2014\u8BD5\u8BD5\u52A0\u538B\u6F2B\u6E38\u8F66",when:()=>m.buildings.some(i=>i.type==="fabricator")&&!m.upgrades.rifle},{id:"drive",text:"\u6F2B\u6E38\u8F66\u5C31\u5728\u9644\u8FD1\uFF0C\u8D70\u8FC7\u53BB\u6309 <kbd>E</kbd> \u4E0A\u8F66",when:()=>vc()&&!m.driving&&!Nr.drove},{id:"talk",text:"\u5BF9\u51C6\u5C45\u6C11\u6309 <kbd>E</kbd>\uFF0C\u542C\u542C\u4ED6\u4EEC\u7684\u6545\u4E8B",when:()=>m.colonists.some(i=>i.pos.distanceTo(Wt.pos)<10)},{id:"level",text:"\u4EBA\u53E3\u548C\u8BBE\u65BD\u8D8A\u591A\uFF0C\u57CE\u5E02\u7B49\u7EA7\u8D8A\u9AD8\uFF0C\u9886\u5730\u4E5F\u4F1A\u6269\u5927\uFF08\u770B\u5DE6\u4E0A\u89D2\uFF09",when:()=>m.colony.pop>=2}];function hM(i){if(Zp+=i,m.driving&&(Nr.drove=!0),Ur)if(Lu-=i,Lu<=0||!Ur.when()){Nr[Ur.id]=!0,Ur=null;try{localStorage.setItem("starport-hints",JSON.stringify(Nr))}catch{}}else return`\u{1F4A1} ${Ur.text}`;for(let t of lM)if(!Nr[t.id]&&t.when())return Ur=t,Lu=12,`\u{1F4A1} ${t.text}`;return""}function uM(i){m.launching={b:i,t:0},m.launched=!0,_t.play("rumble"),rn("\u65B9\u821F \xB7 AI",`\u6B96\u6C11\u8230\u70B9\u706B\u3002\u76EE\u6807\uFF1A${yi[yt.next].name}\u3002\u5168\u4F53\u4E58\u5458\uFF0C\u795D\u4F60\u4EEC\u597D\u8FD0\u3002`),i.anim.flame.visible=!0}function dM(i){let t=m.launching;if(!t)return;t.t+=i;let e=t.b.anim.ship;t.t>2&&(e.position.y+=i*(2+(t.t-2)*9));let n=new A(t.b.x,t.b.y+e.position.y,t.b.z);for(let s=0;s<6;s++)It.flame(n);t.t<5&&It.dustPuff(new A(t.b.x+(Math.random()-.5)*16,t.b.y+1,t.b.z+(Math.random()-.5)*16),3,4),Wt.landDip=Math.max(Wt.landDip,Math.min(.15,.03*t.t)*Math.random()),t.t>9&&!t.faded&&(t.faded=!0,ae("fade").classList.add("on")),t.t>11.5&&!t.done&&(t.done=!0,fM())}function fM(){let i=Xa();i.visited=(i.visited||[]).filter(n=>n.id!==Ke).concat([{id:Ke,pop:m.colony.pop,day:m.time.day}]),i.planet=yt.next;let t={};for(let n in m.res)t[n]=Math.min(Math.floor(m.res[n]*.4),80);i.carry={upgrades:m.upgrades,res:t},wi(!0),Ef(i);let e=yi[yt.next];ae("ending-text").innerHTML=["\u66F2\u901F\u822A\u884C\u4E2D\u2026\u2026",`\u76EE\u7684\u5730\uFF1A<b>${e.name}</b>`,`<span class="stats">${yt.name}\u7684 ${m.colony.pop} \u4F4D\u5C45\u6C11\uFF0C\u4F1A\u66FF\u4F60\u5B88\u7740\u90A3\u91CC\u7684\u706F\u706B\u3002</span>`].map((n,s)=>`<p style="animation-delay:${s*1.2}s">${n}</p>`).join(""),document.querySelector("#ending .btns").classList.add("hidden"),ae("ending").classList.remove("hidden"),ae("fade").classList.remove("on"),m.endingShown=!0,document.pointerLockElement&&document.exitPointerLock(),setTimeout(()=>{location.href=location.pathname+(m.debug?"?debug":"")},5e3)}function pM(){m.endingShown=!0,document.pointerLockElement&&document.exitPointerLock();let t=(Xa().visited||[]).concat([{id:Ke,pop:m.colony.pop}]),e=t.reduce((s,r)=>s+r.pop,0),n=["\u5F88\u4E45\u5F88\u4E45\u4EE5\u524D\uFF0C\u4E00\u4E2A\u4EBA\u72EC\u81EA\u7AD9\u5728\u706B\u661F\u7684\u7EA2\u8272\u5C18\u571F\u91CC\u3002","\u6C27\u6C14\u53EA\u591F\u6491\u4E09\u5206\u949F\uFF0C\u8EAB\u8FB9\u53EA\u6709\u4E00\u5EA7\u7740\u9646\u8231\u3002",t.map(s=>`${yi[s.id].name} \xB7 ${s.pop} \u4EBA`).join("\u3000"),`\u4ECA\u5929\uFF0C${e} \u4E2A\u4EBA\uFF0C\u751F\u6D3B\u5728\u4E09\u9897\u661F\u7403\u4E0A\u3002`,'<div class="big">\u661F\u9645\u6587\u660E</div>',"\u8FD9\u4E00\u5207\uFF0C\u90FD\u4ECE\u4F60\u8FC8\u51FA\u7684\u7B2C\u4E00\u6B65\u5F00\u59CB\u3002",'<span class="stats">\u611F\u8C22\u6E38\u73A9\u300A\u661F\u6E2F\u300B\u3002\u4F60\u53EF\u4EE5\u7EE7\u7EED\u5EFA\u8BBE\uFF0C\u57CE\u5E02\u4F1A\u4E00\u76F4\u5728\u8FD9\u91CC\u7B49\u4F60\u3002</span>'];ae("ending-text").innerHTML=n.map((s,r)=>`<p style="animation-delay:${r*1.8}s">${s}</p>`).join(""),ae("ending").classList.remove("hidden"),_t.play("chapter"),wi(!0)}function mM(i){let t={prompt:"",crossClass:""};if(Wt.dead||m.menuOpen)return t;if(m.driving)return t.prompt=`\u{1F699} <b>${Hp()}</b> km/h<br><kbd>W S</kbd> \u6CB9\u95E8 \xB7 <kbd>A D</kbd> \u8F6C\u5411 \xB7 <kbd>Shift</kbd> \u52A0\u901F \xB7 <kbd>\u7A7A\u683C</kbd> \u5239\u8F66 \xB7 <kbd>E</kbd> \u4E0B\u8F66`,t;let e=vc();if(e&&Math.hypot(e.x-Wt.pos.x,e.z-Wt.pos.z)<4.5)return t.prompt="\u{1F699} \u52A0\u538B\u6F2B\u6E38\u8F66<br><kbd>E</kbd> \u4E0A\u8F66",lt.hit("KeyE")&&(zp(),lt.pressed.delete("KeyE")),t;let n=Ye.position,s=Wt.fwd,r=Lp(n,s),o=m.buildings.find(l=>l.type==="fabricator"&&Math.hypot(l.x-Wt.pos.x,l.z-Wt.pos.z)<l.def.r+6);Dr=Math.max(0,Dr-i),wo=Math.max(0,wo-i);let a=yt.next&&m.buildings.find(l=>l.type==="launch"&&Math.hypot(l.x-Wt.pos.x,l.z-Wt.pos.z)<l.def.r+8);if(r)t.crossClass="talk",t.prompt=`<b>${r.name}</b> \xB7 ${r.job}<br><kbd>E</kbd> \u4EA4\u8C08`,lt.hit("KeyE")&&rn(r.name,r.line);else if(a&&!m.launching){let l=yi[yt.next];a.powered?(t.prompt=`\u{1F6F8} \u6B96\u6C11\u8230\u5DF2\u5C31\u7EEA \xB7 \u76EE\u7684\u5730\uFF1A<b>${l.name}</b><br><kbd>E</kbd> ${wo>0?'<span class="badc">\u518D\u6309\u4E00\u6B21\u786E\u8BA4\u53D1\u5C04</span>':"\u53D1\u5C04\uFF08\u672C\u661F\u7403\u6B96\u6C11\u5730\u4F1A\u7EE7\u7EED\u81EA\u4E3B\u8FD0\u8F6C\uFF09"}`,lt.hit("KeyE")&&(wo>0?uM(a):wo=3)):t.prompt='\u661F\u9645\u53D1\u5C04\u53F0 \xB7 <span class="badc">\u7535\u529B\u4E0D\u8DB3</span>'}else o&&(t.prompt=`<kbd>E</kbd> \u6253\u5F00\u5236\u9020\u5DE5\u574A${o.powered?"":"\uFF08\u505C\u7535\u4E2D\uFF09"}`,lt.hit("KeyE")&&(o.powered?bo("craft"):hn("\u5236\u9020\u5DE5\u574A\u6CA1\u6709\u7535\u529B")));let c=m.lookBuilding;if(!t.prompt&&c&&Ue.id!=="build"){let l=c.def;t.prompt=`<b>${l.icon} ${l.name}</b> \xB7 \u8010\u4E45 ${Math.ceil(c.hp)}/${l.hp}${l.power<0?c.powered?' \xB7 <span class="okc">\u4F9B\u7535\u4E2D</span>':' \xB7 <span class="badc">\u505C\u7535</span>':""}<br><kbd>X</kbd> ${Dr>0?'<span class="badc">\u518D\u6309\u4E00\u6B21\u786E\u8BA4\u62C6\u9664\uFF08\u8FD4\u8FD8 50%\uFF09</span>':"\u62C6\u9664"}`,c.broken&&(t.prompt=t.prompt.replace("<br>",' \xB7 <span class="badc">\u53D7\u635F\u505C\u673A\uFF08\u767D\u5929\u81EA\u52A8\u4FEE\u590D\uFF09</span><br>')),lt.hit("KeyX")&&(Dr>0?(sp(c,!0),Dr=0,hn(`\u5DF2\u62C6\u9664 ${l.name}`)):Dr=2)}return Ue.id==="laser"?Tr(n,s,9)&&(t.crossClass="enemy"):Ue.id==="rifle"&&Tr(n,s,120)&&(t.crossClass="enemy"),t}var gM=new Fa,bc=0;function Jp(){requestAnimationFrame(Jp);let i=Math.min(gM.getDelta(),.05);if(!m.started){bc+=i*.05;let e=30;Ye.position.set(Re.x+Math.cos(bc)*e,Ut(Re.x,Re.z)+6,Re.z+Math.sin(bc)*e),Ye.lookAt(Re.x,Ut(Re.x,Re.z)+4,Re.z),m.time.t=.27+Math.sin(bc*.5)*.01,ja(0,Ye.position),ic(i,Ye.position),un.render(Ei,Ye);return}m.debug&&(m.locked=!0);let t=m.locked&&!m.menuOpen&&!m.endingShown;ae("clickhint").classList.toggle("hidden",!(m.started&&!m.locked&&!m.menuOpen&&!Wt.dead&&!m.endingShown)),t?Kp(i):(Su(0,{prompt:""}),ja(0,Ye.position)),ic(t?i:0,Ye.position),lt.endFrame(),un.render(Ei,Ye),Cp(un)}function Kp(i){{m.driving&&lt.hit("KeyE")&&!m.menuOpen&&(wu(Wt),lt.pressed.delete("KeyE")),m.driving||Wt.update(i),kp(i,Wt,Ye),ja(i,Ye.position),m.time.dawn&&(m.time.dawn=!1,hn(`\u2600 \u7B2C ${m.time.day} \u65E5\u7684\u9ECE\u660E \xB7 ${yt.name}`)),Jf(i),m.driving?m.lookBuilding=null:Rp(i,Wt,Ye),hp(i,{shoot:dc}),Pp(i),np(i,Ue.id==="build"&&!!te.type),dM(i),Kh.emissiveIntensity=.06+m.time.night*(.55+Math.sin(performance.now()*.0015)*.15),Sp(i),Wp(i),Mp(i),mp(i),wc.beacon.visible=Math.sin(performance.now()*.004)>0;let t=mM(i);t.prompt||(t.prompt=hM(i)),Su(i,t),_t.update(m.storm,m.time.night),Iu-=i,Iu<=0&&(Iu=45,wi(!0)),m.terraform>0&&m.terraform<=1&&(Pu-=i,Pu<=0&&(Pu=4,Jh($p(),m.terraform)))}}ae("loading").remove();Jp();window.addEventListener("beforeunload",()=>wi(!0));window.__G=m;window.__dbg={give(i=200){for(let t in _i)m.res[t]+=i},tp(i,t){Wt.pos.set(i,Ut(i,t),t)},time(i){m.time.t=i},build:(i,t,e)=>cc(i,t,e,0),chapter:i=>xo(i),look(i,t){Wt.yaw=i,Wt.pitch=t},begin:()=>Du(!1),step(i,t=.05){for(let e=0;e<i;e+=t)Kp(t),ic(t,Ye.position),lt.endFrame()},input:lt,save:wi,toast:hn,setGhost:As,openMenu:bo,closeMenus:Is,tool:Ue,placement:te,rover:vc};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
