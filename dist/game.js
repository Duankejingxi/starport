(()=>{var ep="170";var gM=0,Um=1,vM=2;var qg=1,tp=2,Us=3,dr=0,Nn=1,ut=2,Mn=0,ui=1,Le=2,Nm=3,zm=4,np=5,bi=100,xM=101,yM=102,MM=103,EM=104,da=200,wM=201,bM=202,SM=203,Iu=204,Lu=205,Lh=206,_M=207,Dh=208,TM=209,RM=210,AM=211,CM=212,PM=213,IM=214,Du=0,Hu=1,Uu=2,$o=3,Nu=4,zu=5,ku=6,Ou=7,Yg=0,LM=1,DM=2,hr=0,ip=1,sp=2,rp=3,so=4,HM=5,op=6,ap=7;var jg=300,ea=301,ta=302,Fu=303,Bu=304,Hh=306,$n=1e3,Kr=1001,Gu=1002,pn=1003,UM=1004;var Ac=1005;var Si=1006,Jd=1007;var Jr=1008;var si=1009,Zg=1010,Kg=1011,El=1012,lp=1013,Qr=1014,rs=1015,bn=1016,cp=1017,hp=1018,ur=1020,Jg=35902,Qg=1021,$g=1022,di=1023,e1=1024,t1=1025,Ko=1026,fr=1027,dp=1028,up=1029,n1=1030,fp=1031;var pp=1033,ih=33776,sh=33777,rh=33778,oh=33779,Vu=35840,Wu=35841,Xu=35842,qu=35843,Yu=36196,ju=37492,Zu=37496,Ku=37808,Ju=37809,Qu=37810,$u=37811,ef=37812,tf=37813,nf=37814,sf=37815,rf=37816,of=37817,af=37818,lf=37819,cf=37820,hf=37821,ah=36492,df=36494,uf=36495,i1=36283,ff=36284,pf=36285,mf=36286;var lh=2300,gf=2301,Qd=2302,km=2400,Om=2401,Fm=2402;var NM=3200,zM=3201;var mp=0,kM=1,lr="",_t="srgb",ua="srgb-linear",Uh="linear",Gt="srgb";var Po=7680;var Bm=519,OM=512,FM=513,BM=514,s1=515,GM=516,VM=517,WM=518,XM=519,vf=35044,gp=35048;var Gm="300 es",zs=2e3,ch=2001,pr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vm=1234567,gl=Math.PI/180,na=180/Math.PI;function ks(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gn[n&255]+Gn[n>>8&255]+Gn[n>>16&255]+Gn[n>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[t&63|128]+Gn[t>>8&255]+"-"+Gn[t>>16&255]+Gn[t>>24&255]+Gn[i&255]+Gn[i>>8&255]+Gn[i>>16&255]+Gn[i>>24&255]).toLowerCase()}function An(n,e,t){return Math.max(e,Math.min(t,n))}function vp(n,e){return(n%e+e)%e}function qM(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function YM(n,e,t){return n!==e?(t-n)/(e-n):0}function vl(n,e,t){return(1-t)*n+t*e}function jM(n,e,t,i){return vl(n,e,1-Math.exp(-t*i))}function ZM(n,e=1){return e-Math.abs(vp(n,e*2)-e)}function KM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function JM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function QM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function $M(n,e){return n+Math.random()*(e-n)}function e2(n){return n*(.5-Math.random())}function t2(n){n!==void 0&&(Vm=n);let e=Vm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function n2(n){return n*gl}function i2(n){return n*na}function s2(n){return(n&n-1)===0&&n!==0}function r2(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function o2(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function a2(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),d=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*d,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*d,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*d,a*c);break;case"XZX":n.set(a*d,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*d,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Yi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Tt={DEG2RAD:gl,RAD2DEG:na,generateUUID:ks,clamp:An,euclideanModulo:vp,mapLinear:qM,inverseLerp:YM,lerp:vl,damp:jM,pingpong:ZM,smoothstep:KM,smootherstep:JM,randInt:QM,randFloat:$M,randFloatSpread:e2,seededRandom:t2,degToRad:n2,radToDeg:i2,isPowerOfTwo:s2,ceilPowerOfTwo:r2,floorPowerOfTwo:o2,setQuaternionFromProperEuler:a2,normalize:jt,denormalize:Yi},$=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(An(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},vt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],u=i[7],f=i[2],p=i[5],g=i[8],x=s[0],v=s[3],m=s[6],E=s[1],w=s[4],M=s[7],L=s[2],A=s[5],P=s[8];return r[0]=o*x+a*E+l*L,r[3]=o*v+a*w+l*A,r[6]=o*m+a*M+l*P,r[1]=c*x+d*E+u*L,r[4]=c*v+d*w+u*A,r[7]=c*m+d*M+u*P,r[2]=f*x+p*E+g*L,r[5]=f*v+p*w+g*A,r[8]=f*m+p*M+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-i*r*d+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*o-a*c,f=a*l-d*r,p=c*r-o*l,g=t*u+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-d*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(d*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply($d.makeScale(e,t)),this}rotate(e){return this.premultiply($d.makeRotation(-e)),this}translate(e,t){return this.premultiply($d.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},$d=new vt;function r1(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function hh(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function l2(){let n=hh("canvas");return n.style.display="block",n}var Wm={};function pl(n){n in Wm||(Wm[n]=!0,console.warn(n))}function c2(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function h2(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function d2(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Ct={enabled:!0,workingColorSpace:ua,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Gt&&(n.r=Os(n.r),n.g=Os(n.g),n.b=Os(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Gt&&(n.r=Jo(n.r),n.g=Jo(n.g),n.b=Jo(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===lr?Uh:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Os(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Jo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Xm=[.64,.33,.3,.6,.15,.06],qm=[.2126,.7152,.0722],Ym=[.3127,.329],jm=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zm=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ct.define({[ua]:{primaries:Xm,whitePoint:Ym,transfer:Uh,toXYZ:jm,fromXYZ:Zm,luminanceCoefficients:qm,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:Xm,whitePoint:Ym,transfer:Gt,toXYZ:jm,fromXYZ:Zm,luminanceCoefficients:qm,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}});var Io,xf=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Io===void 0&&(Io=hh("canvas")),Io.width=e.width,Io.height=e.height;let i=Io.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Io}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=hh("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Os(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Os(t[i]/255)*255):t[i]=Os(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},u2=0,dh=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:u2++}),this.uuid=ks(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(eu(s[o].image)):r.push(eu(s[o]))}else r=eu(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function eu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var f2=0,Cn=class n extends pr{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Kr,s=Kr,r=Si,o=Jr,a=di,l=si,c=n.DEFAULT_ANISOTROPY,d=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f2++}),this.uuid=ks(),this.name="",this.source=new dh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $n:e.x=e.x-Math.floor(e.x);break;case Kr:e.x=e.x<0?0:1;break;case Gu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $n:e.y=e.y-Math.floor(e.y);break;case Kr:e.y=e.y<0?0:1;break;case Gu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=jg;Cn.DEFAULT_ANISOTROPY=1;var Vt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],d=l[4],u=l[8],f=l[1],p=l[5],g=l[9],x=l[2],v=l[6],m=l[10];if(Math.abs(d-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-v)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+v)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,M=(p+1)/2,L=(m+1)/2,A=(d+f)/4,P=(u+x)/4,I=(g+v)/4;return w>M&&w>L?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=A/i,r=P/i):M>L?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=A/s,r=I/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=P/r,s=I/r),this.set(i,s,r,t),this}let E=Math.sqrt((v-g)*(v-g)+(u-x)*(u-x)+(f-d)*(f-d));return Math.abs(E)<.001&&(E=1),this.x=(v-g)/E,this.y=(u-x)/E,this.z=(f-d)/E,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yf=class extends pr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Cn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new dh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ln=class extends yf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},uh=class extends Cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Mf=class extends Cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],d=i[s+2],u=i[s+3],f=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==f||c!==p||d!==g){let v=1-a,m=l*f+c*p+d*g+u*x,E=m>=0?1:-1,w=1-m*m;if(w>Number.EPSILON){let L=Math.sqrt(w),A=Math.atan2(L,m*E);v=Math.sin(v*A)/L,a=Math.sin(a*A)/L}let M=a*E;if(l=l*v+f*M,c=c*v+p*M,d=d*v+g*M,u=u*v+x*M,v===1-a){let L=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=L,c*=L,d*=L,u*=L}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],d=i[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+d*u+l*p-c*f,e[t+1]=l*g+d*f+c*u-a*p,e[t+2]=c*g+d*p+a*f-l*u,e[t+3]=d*g-a*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(s/2),u=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*d*u+c*p*g,this._y=c*p*u-f*d*g,this._z=c*d*g+f*p*u,this._w=c*d*u-f*p*g;break;case"YXZ":this._x=f*d*u+c*p*g,this._y=c*p*u-f*d*g,this._z=c*d*g-f*p*u,this._w=c*d*u+f*p*g;break;case"ZXY":this._x=f*d*u-c*p*g,this._y=c*p*u+f*d*g,this._z=c*d*g+f*p*u,this._w=c*d*u-f*p*g;break;case"ZYX":this._x=f*d*u-c*p*g,this._y=c*p*u+f*d*g,this._z=c*d*g-f*p*u,this._w=c*d*u+f*p*g;break;case"YZX":this._x=f*d*u+c*p*g,this._y=c*p*u+f*d*g,this._z=c*d*g-f*p*u,this._w=c*d*u-f*p*g;break;case"XZY":this._x=f*d*u-c*p*g,this._y=c*p*u-f*d*g,this._z=c*d*g+f*p*u,this._w=c*d*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],f=i+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(d-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+d)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(An(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-i*c,this._z=r*d+o*c+i*l-s*a,this._w=o*d-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Km.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Km.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),d=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*d,this.y=i+l*d+a*c-r*u,this.z=s+l*u+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return tu.copy(this).projectOnVector(e),this.sub(tu)}reflect(e){return this.sub(tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(An(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},tu=new S,Km=new mn,ji=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wi):Wi.fromBufferAttribute(r,o),Wi.applyMatrix4(e.matrixWorld),this.expandByPoint(Wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cc.copy(i.boundingBox)),Cc.applyMatrix4(e.matrixWorld),this.union(Cc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wi),Wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sl),Pc.subVectors(this.max,sl),Lo.subVectors(e.a,sl),Do.subVectors(e.b,sl),Ho.subVectors(e.c,sl),nr.subVectors(Do,Lo),ir.subVectors(Ho,Do),Gr.subVectors(Lo,Ho);let t=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Gr.z,Gr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Gr.z,0,-Gr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Gr.y,Gr.x,0];return!nu(t,Lo,Do,Ho,Pc)||(t=[1,0,0,0,1,0,0,0,1],!nu(t,Lo,Do,Ho,Pc))?!1:(Ic.crossVectors(nr,ir),t=[Ic.x,Ic.y,Ic.z],nu(t,Lo,Do,Ho,Pc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ps[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ps[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ps[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ps[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ps[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ps[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ps[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ps[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ps),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ps=[new S,new S,new S,new S,new S,new S,new S,new S],Wi=new S,Cc=new ji,Lo=new S,Do=new S,Ho=new S,nr=new S,ir=new S,Gr=new S,sl=new S,Pc=new S,Ic=new S,Vr=new S;function nu(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Vr.fromArray(n,r);let a=s.x*Math.abs(Vr.x)+s.y*Math.abs(Vr.y)+s.z*Math.abs(Vr.z),l=e.dot(Vr),c=t.dot(Vr),d=i.dot(Vr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var p2=new ji,rl=new S,iu=new S,mr=class{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):p2.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rl.subVectors(e,this.center);let t=rl.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(rl,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(iu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rl.copy(e.center).add(iu)),this.expandByPoint(rl.copy(e.center).sub(iu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Is=new S,su=new S,Lc=new S,sr=new S,ru=new S,Dc=new S,ou=new S,fh=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Is)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Is.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Is.copy(this.origin).addScaledVector(this.direction,t),Is.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){su.copy(e).add(t).multiplyScalar(.5),Lc.copy(t).sub(e).normalize(),sr.copy(this.origin).sub(su);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Lc),a=sr.dot(this.direction),l=-sr.dot(Lc),c=sr.lengthSq(),d=Math.abs(1-o*o),u,f,p,g;if(d>0)if(u=o*l-a,f=o*a-l,g=r*d,u>=0)if(f>=-g)if(f<=g){let x=1/d;u*=x,f*=x,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(su).addScaledVector(Lc,f),p}intersectSphere(e,t){Is.subVectors(e.center,this.origin);let i=Is.dot(this.direction),s=Is.dot(Is)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),d>=0?(r=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Is)!==null}intersectTriangle(e,t,i,s,r){ru.subVectors(t,e),Dc.subVectors(i,e),ou.crossVectors(ru,Dc);let o=this.direction.dot(ou),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;sr.subVectors(this.origin,e);let l=a*this.direction.dot(Dc.crossVectors(sr,Dc));if(l<0)return null;let c=a*this.direction.dot(ru.cross(sr));if(c<0||l+c>o)return null;let d=-a*sr.dot(ou);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xt=class n{constructor(e,t,i,s,r,o,a,l,c,d,u,f,p,g,x,v){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,d,u,f,p,g,x,v)}set(e,t,i,s,r,o,a,l,c,d,u,f,p,g,x,v){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=d,m[10]=u,m[14]=f,m[3]=p,m[7]=g,m[11]=x,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Uo.setFromMatrixColumn(e,0).length(),r=1/Uo.setFromMatrixColumn(e,1).length(),o=1/Uo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*d,p=o*u,g=a*d,x=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*d,p=l*u,g=c*d,x=c*u;t[0]=f+x*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=p*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*d,p=l*u,g=c*d,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*d,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*d,p=o*u,g=a*d,x=a*u;t[0]=l*d,t[4]=g*c-p,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*d,t[4]=x-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=p*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=f*u+x,t[5]=o*d,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*d,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(m2,e,g2)}lookAt(e,t,i){let s=this.elements;return ci.subVectors(e,t),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),rr.crossVectors(i,ci),rr.lengthSq()===0&&(Math.abs(i.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),rr.crossVectors(i,ci)),rr.normalize(),Hc.crossVectors(ci,rr),s[0]=rr.x,s[4]=Hc.x,s[8]=ci.x,s[1]=rr.y,s[5]=Hc.y,s[9]=ci.y,s[2]=rr.z,s[6]=Hc.z,s[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],u=i[5],f=i[9],p=i[13],g=i[2],x=i[6],v=i[10],m=i[14],E=i[3],w=i[7],M=i[11],L=i[15],A=s[0],P=s[4],I=s[8],_=s[12],b=s[1],H=s[5],O=s[9],F=s[13],W=s[2],te=s[6],q=s[10],le=s[14],Y=s[3],ue=s[7],Te=s[11],Fe=s[15];return r[0]=o*A+a*b+l*W+c*Y,r[4]=o*P+a*H+l*te+c*ue,r[8]=o*I+a*O+l*q+c*Te,r[12]=o*_+a*F+l*le+c*Fe,r[1]=d*A+u*b+f*W+p*Y,r[5]=d*P+u*H+f*te+p*ue,r[9]=d*I+u*O+f*q+p*Te,r[13]=d*_+u*F+f*le+p*Fe,r[2]=g*A+x*b+v*W+m*Y,r[6]=g*P+x*H+v*te+m*ue,r[10]=g*I+x*O+v*q+m*Te,r[14]=g*_+x*F+v*le+m*Fe,r[3]=E*A+w*b+M*W+L*Y,r[7]=E*P+w*H+M*te+L*ue,r[11]=E*I+w*O+M*q+L*Te,r[15]=E*_+w*F+M*le+L*Fe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],f=e[10],p=e[14],g=e[3],x=e[7],v=e[11],m=e[15];return g*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*p-i*l*p)+x*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*d-r*l*d)+v*(+t*c*u-t*a*p-r*o*u+i*o*p+r*a*d-i*c*d)+m*(-s*a*d-t*l*u+t*a*f+s*o*u-i*o*f+i*l*d)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],f=e[10],p=e[11],g=e[12],x=e[13],v=e[14],m=e[15],E=u*v*c-x*f*c+x*l*p-a*v*p-u*l*m+a*f*m,w=g*f*c-d*v*c-g*l*p+o*v*p+d*l*m-o*f*m,M=d*x*c-g*u*c+g*a*p-o*x*p-d*a*m+o*u*m,L=g*u*l-d*x*l-g*a*f+o*x*f+d*a*v-o*u*v,A=t*E+i*w+s*M+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/A;return e[0]=E*P,e[1]=(x*f*r-u*v*r-x*s*p+i*v*p+u*s*m-i*f*m)*P,e[2]=(a*v*r-x*l*r+x*s*c-i*v*c-a*s*m+i*l*m)*P,e[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*p-i*l*p)*P,e[4]=w*P,e[5]=(d*v*r-g*f*r+g*s*p-t*v*p-d*s*m+t*f*m)*P,e[6]=(g*l*r-o*v*r-g*s*c+t*v*c+o*s*m-t*l*m)*P,e[7]=(o*f*r-d*l*r+d*s*c-t*f*c-o*s*p+t*l*p)*P,e[8]=M*P,e[9]=(g*u*r-d*x*r-g*i*p+t*x*p+d*i*m-t*u*m)*P,e[10]=(o*x*r-g*a*r+g*i*c-t*x*c-o*i*m+t*a*m)*P,e[11]=(d*a*r-o*u*r-d*i*c+t*u*c+o*i*p-t*a*p)*P,e[12]=L*P,e[13]=(d*x*s-g*u*s+g*i*f-t*x*f-d*i*v+t*u*v)*P,e[14]=(g*a*s-o*x*s-g*i*l+t*x*l+o*i*v-t*a*v)*P,e[15]=(o*u*s-d*a*s+d*i*l-t*u*l-o*i*f+t*a*f)*P,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+i,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,u=a+a,f=r*c,p=r*d,g=r*u,x=o*d,v=o*u,m=a*u,E=l*c,w=l*d,M=l*u,L=i.x,A=i.y,P=i.z;return s[0]=(1-(x+m))*L,s[1]=(p+M)*L,s[2]=(g-w)*L,s[3]=0,s[4]=(p-M)*A,s[5]=(1-(f+m))*A,s[6]=(v+E)*A,s[7]=0,s[8]=(g+w)*P,s[9]=(v-E)*P,s[10]=(1-(f+x))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Uo.set(s[0],s[1],s[2]).length(),o=Uo.set(s[4],s[5],s[6]).length(),a=Uo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Xi.copy(this);let c=1/r,d=1/o,u=1/a;return Xi.elements[0]*=c,Xi.elements[1]*=c,Xi.elements[2]*=c,Xi.elements[4]*=d,Xi.elements[5]*=d,Xi.elements[6]*=d,Xi.elements[8]*=u,Xi.elements[9]*=u,Xi.elements[10]*=u,t.setFromRotationMatrix(Xi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=zs){let l=this.elements,c=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),p,g;if(a===zs)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ch)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=zs){let l=this.elements,c=1/(t-e),d=1/(i-s),u=1/(o-r),f=(t+e)*c,p=(i+s)*d,g,x;if(a===zs)g=(o+r)*u,x=-2*u;else if(a===ch)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Uo=new S,Xi=new xt,m2=new S(0,0,0),g2=new S(1,1,1),rr=new S,Hc=new S,ci=new S,Jm=new xt,Qm=new mn,Pn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(An(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-An(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(An(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-An(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(An(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-An(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Jm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qm.setFromEuler(this),this.setFromQuaternion(Qm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pn.DEFAULT_ORDER="XYZ";var ph=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},v2=0,$m=new S,No=new mn,Ls=new xt,Uc=new S,ol=new S,x2=new S,y2=new mn,eg=new S(1,0,0),tg=new S(0,1,0),ng=new S(0,0,1),ig={type:"added"},M2={type:"removed"},zo={type:"childadded",child:null},au={type:"childremoved",child:null},gn=class n extends pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:v2++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new S,t=new Pn,i=new mn,s=new S(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new vt}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ph,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return No.setFromAxisAngle(e,t),this.quaternion.multiply(No),this}rotateOnWorldAxis(e,t){return No.setFromAxisAngle(e,t),this.quaternion.premultiply(No),this}rotateX(e){return this.rotateOnAxis(eg,e)}rotateY(e){return this.rotateOnAxis(tg,e)}rotateZ(e){return this.rotateOnAxis(ng,e)}translateOnAxis(e,t){return $m.copy(e).applyQuaternion(this.quaternion),this.position.add($m.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(eg,e)}translateY(e){return this.translateOnAxis(tg,e)}translateZ(e){return this.translateOnAxis(ng,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ls.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Uc.copy(e):Uc.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ol.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ls.lookAt(ol,Uc,this.up):Ls.lookAt(Uc,ol,this.up),this.quaternion.setFromRotationMatrix(Ls),s&&(Ls.extractRotation(s.matrixWorld),No.setFromRotationMatrix(Ls),this.quaternion.premultiply(No.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ig),zo.child=e,this.dispatchEvent(zo),zo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(M2),au.child=e,this.dispatchEvent(au),au.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ls.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ls.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ls),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ig),zo.child=e,this.dispatchEvent(zo),zo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,e,x2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,y2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};gn.DEFAULT_UP=new S(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qi=new S,Ds=new S,lu=new S,Hs=new S,ko=new S,Oo=new S,sg=new S,cu=new S,hu=new S,du=new S,uu=new Vt,fu=new Vt,pu=new Vt,cr=class n{constructor(e=new S,t=new S,i=new S){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),qi.subVectors(e,t),s.cross(qi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){qi.subVectors(s,t),Ds.subVectors(i,t),lu.subVectors(e,t);let o=qi.dot(qi),a=qi.dot(Ds),l=qi.dot(lu),c=Ds.dot(Ds),d=Ds.dot(lu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-a*d)*f,g=(o*d-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Hs)===null?!1:Hs.x>=0&&Hs.y>=0&&Hs.x+Hs.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Hs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hs.x),l.addScaledVector(o,Hs.y),l.addScaledVector(a,Hs.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return uu.setScalar(0),fu.setScalar(0),pu.setScalar(0),uu.fromBufferAttribute(e,t),fu.fromBufferAttribute(e,i),pu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(uu,r.x),o.addScaledVector(fu,r.y),o.addScaledVector(pu,r.z),o}static isFrontFacing(e,t,i,s){return qi.subVectors(i,t),Ds.subVectors(e,t),qi.cross(Ds).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qi.subVectors(this.c,this.b),Ds.subVectors(this.a,this.b),qi.cross(Ds).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;ko.subVectors(s,i),Oo.subVectors(r,i),cu.subVectors(e,i);let l=ko.dot(cu),c=Oo.dot(cu);if(l<=0&&c<=0)return t.copy(i);hu.subVectors(e,s);let d=ko.dot(hu),u=Oo.dot(hu);if(d>=0&&u<=d)return t.copy(s);let f=l*u-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(ko,o);du.subVectors(e,r);let p=ko.dot(du),g=Oo.dot(du);if(g>=0&&p<=g)return t.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Oo,a);let v=d*g-p*u;if(v<=0&&u-d>=0&&p-g>=0)return sg.subVectors(r,s),a=(u-d)/(u-d+(p-g)),t.copy(s).addScaledVector(sg,a);let m=1/(v+x+f);return o=x*m,a=f*m,t.copy(i).addScaledVector(ko,o).addScaledVector(Oo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},o1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},Nc={h:0,s:0,l:0};function mu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var re=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ct.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ct.workingColorSpace){if(e=vp(e,1),t=An(t,0,1),i=An(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=mu(o,r,e+1/3),this.g=mu(o,r,e),this.b=mu(o,r,e-1/3)}return Ct.toWorkingColorSpace(this,s),this}setStyle(e,t=_t){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){let i=o1[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}copyLinearToSRGB(e){return this.r=Jo(e.r),this.g=Jo(e.g),this.b=Jo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return Ct.fromWorkingColorSpace(Vn.copy(this),e),Math.round(An(Vn.r*255,0,255))*65536+Math.round(An(Vn.g*255,0,255))*256+Math.round(An(Vn.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(Vn.copy(this),t);let i=Vn.r,s=Vn.g,r=Vn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,d=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(Vn.copy(this),t),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=_t){Ct.fromWorkingColorSpace(Vn.copy(this),e);let t=Vn.r,i=Vn.g,s=Vn.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(or),this.setHSL(or.h+e,or.s+t,or.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(or),e.getHSL(Nc);let i=vl(or.h,Nc.h,t),s=vl(or.s,Nc.s,t),r=vl(or.l,Nc.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vn=new re;re.NAMES=o1;var E2=0,os=class extends pr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:E2++}),this.uuid=ks(),this.name="",this.blending=ui,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Iu,this.blendDst=Lu,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=$o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Po,this.stencilZFail=Po,this.stencilZPass=Po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(i.blending=this.blending),this.side!==dr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Iu&&(i.blendSrc=this.blendSrc),this.blendDst!==Lu&&(i.blendDst=this.blendDst),this.blendEquation!==bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$o&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Po&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Po&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Po&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},He=class extends os{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Yg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var vn=new S,zc=new $,an=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=vf,this.updateRanges=[],this.gpuType=rs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zc.fromBufferAttribute(this,t),zc.applyMatrix3(e),this.setXY(t,zc.x,zc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix3(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Yi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vf&&(e.usage=this.usage),e}};var mh=class extends an{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var gh=class extends an{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var nt=class extends an{constructor(e,t,i){super(new Float32Array(e),t,i)}},w2=0,wi=new xt,gu=new gn,Fo=new S,hi=new ji,al=new ji,Rn=new S,At=class n extends pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:w2++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(r1(e)?gh:mh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new vt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,t,i){return wi.makeTranslation(e,t,i),this.applyMatrix4(wi),this}scale(e,t,i){return wi.makeScale(e,t,i),this.applyMatrix4(wi),this}lookAt(e){return gu.lookAt(e),gu.updateMatrix(),this.applyMatrix4(gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fo).negate(),this.translate(Fo.x,Fo.y,Fo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nt(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];hi.setFromBufferAttribute(r),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(e){let i=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];al.setFromBufferAttribute(a),this.morphTargetsRelative?(Rn.addVectors(hi.min,al.min),hi.expandByPoint(Rn),Rn.addVectors(hi.max,al.max),hi.expandByPoint(Rn)):(hi.expandByPoint(al.min),hi.expandByPoint(al.max))}hi.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Rn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Rn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Rn.fromBufferAttribute(a,c),l&&(Fo.fromBufferAttribute(e,c),Rn.add(Fo)),s=Math.max(s,i.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new S,l[I]=new S;let c=new S,d=new S,u=new S,f=new $,p=new $,g=new $,x=new S,v=new S;function m(I,_,b){c.fromBufferAttribute(i,I),d.fromBufferAttribute(i,_),u.fromBufferAttribute(i,b),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,_),g.fromBufferAttribute(r,b),d.sub(c),u.sub(c),p.sub(f),g.sub(f);let H=1/(p.x*g.y-g.x*p.y);isFinite(H)&&(x.copy(d).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(H),v.copy(u).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(H),a[I].add(x),a[_].add(x),a[b].add(x),l[I].add(v),l[_].add(v),l[b].add(v))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let I=0,_=E.length;I<_;++I){let b=E[I],H=b.start,O=b.count;for(let F=H,W=H+O;F<W;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let w=new S,M=new S,L=new S,A=new S;function P(I){L.fromBufferAttribute(s,I),A.copy(L);let _=a[I];w.copy(_),w.sub(L.multiplyScalar(L.dot(_))).normalize(),M.crossVectors(A,_);let H=M.dot(l[I])<0?-1:1;o.setXYZW(I,w.x,w.y,w.z,H)}for(let I=0,_=E.length;I<_;++I){let b=E[I],H=b.start,O=b.count;for(let F=H,W=H+O;F<W;F+=3)P(e.getX(F+0)),P(e.getX(F+1)),P(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new S,r=new S,o=new S,a=new S,l=new S,c=new S,d=new S,u=new S;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),x=e.getX(f+1),v=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,v),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,v),a.add(d),l.add(d),c.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rn.fromBufferAttribute(e,t),Rn.normalize(),e.setXYZ(t,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(a,l){let c=a.array,d=a.itemSize,u=a.normalized,f=new c.constructor(l.length*d),p=0,g=0;for(let x=0,v=l.length;x<v;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*d;for(let m=0;m<d;m++)f[g++]=c[p++]}return new an(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let d=0,u=c.length;d<u;d++){let f=c[d],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];d.push(p.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],u=r[c];for(let f=0,p=u.length;f<p;f++)d.push(u[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,d=o.length;c<d;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rg=new xt,Wr=new fh,kc=new mr,og=new S,Oc=new S,Fc=new S,Bc=new S,vu=new S,Gc=new S,ag=new S,Vc=new S,Z=class extends gn{constructor(e=new At,t=new He){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Gc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=a[l],u=r[l];d!==0&&(vu.fromBufferAttribute(u,e),o?Gc.addScaledVector(vu,d):Gc.addScaledVector(vu.sub(t),d))}t.add(Gc)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),kc.copy(i.boundingSphere),kc.applyMatrix4(r),Wr.copy(e.ray).recast(e.near),!(kc.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(kc,og)===null||Wr.origin.distanceToSquared(og)>(e.far-e.near)**2))&&(rg.copy(r).invert(),Wr.copy(e.ray).applyMatrix4(rg),!(i.boundingBox!==null&&Wr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Wr)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let v=f[g],m=o[v.materialIndex],E=Math.max(v.start,p.start),w=Math.min(a.count,Math.min(v.start+v.count,p.start+p.count));for(let M=E,L=w;M<L;M+=3){let A=a.getX(M),P=a.getX(M+1),I=a.getX(M+2);s=Wc(this,m,e,i,c,d,u,A,P,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let v=g,m=x;v<m;v+=3){let E=a.getX(v),w=a.getX(v+1),M=a.getX(v+2);s=Wc(this,o,e,i,c,d,u,E,w,M),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let v=f[g],m=o[v.materialIndex],E=Math.max(v.start,p.start),w=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let M=E,L=w;M<L;M+=3){let A=M,P=M+1,I=M+2;s=Wc(this,m,e,i,c,d,u,A,P,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let v=g,m=x;v<m;v+=3){let E=v,w=v+1,M=v+2;s=Wc(this,o,e,i,c,d,u,E,w,M),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}}};function b2(n,e,t,i,s,r,o,a){let l;if(e.side===Nn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===dr,a),l===null)return null;Vc.copy(a),Vc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Vc);return c<t.near||c>t.far?null:{distance:c,point:Vc.clone(),object:n}}function Wc(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Oc),n.getVertexPosition(l,Fc),n.getVertexPosition(c,Bc);let d=b2(n,e,t,i,Oc,Fc,Bc,ag);if(d){let u=new S;cr.getBarycoord(ag,Oc,Fc,Bc,u),s&&(d.uv=cr.getInterpolatedAttribute(s,a,l,c,u,new $)),r&&(d.uv1=cr.getInterpolatedAttribute(r,a,l,c,u,new $)),o&&(d.normal=cr.getInterpolatedAttribute(o,a,l,c,u,new S),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new S,materialIndex:0};cr.getNormal(Oc,Fc,Bc,f.normal),d.face=f,d.barycoord=u}return d}var Ke=class n extends At{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],d=[],u=[],f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(d,3)),this.setAttribute("uv",new nt(u,2));function g(x,v,m,E,w,M,L,A,P,I,_){let b=M/P,H=L/I,O=M/2,F=L/2,W=A/2,te=P+1,q=I+1,le=0,Y=0,ue=new S;for(let Te=0;Te<q;Te++){let Fe=Te*H-F;for(let ct=0;ct<te;ct++){let Ht=ct*b-O;ue[x]=Ht*E,ue[v]=Fe*w,ue[m]=W,c.push(ue.x,ue.y,ue.z),ue[x]=0,ue[v]=0,ue[m]=A>0?1:-1,d.push(ue.x,ue.y,ue.z),u.push(ct/P),u.push(1-Te/I),le+=1}}for(let Te=0;Te<I;Te++)for(let Fe=0;Fe<P;Fe++){let ct=f+Fe+te*Te,Ht=f+Fe+te*(Te+1),J=f+(Fe+1)+te*(Te+1),fe=f+(Fe+1)+te*Te;l.push(ct,Ht,fe),l.push(Ht,J,fe),Y+=6}a.addGroup(p,Y,_),p+=Y,f+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ia(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Qn(n){let e={};for(let t=0;t<n.length;t++){let i=ia(n[t]);for(let s in i)e[s]=i[s]}return e}function S2(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function a1(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}var Dn={clone:ia,merge:Qn},_2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ot=class extends os{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_2,this.fragmentShader=T2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ia(e.uniforms),this.uniformsGroups=S2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},vh=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=zs}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ar=new S,lg=new $,cg=new $,fn=class extends vh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=na*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(gl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return na*2*Math.atan(Math.tan(gl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,t){return this.getViewBounds(e,lg,cg),t.subVectors(cg,lg)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(gl*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Bo=-90,Go=1,Ef=class extends gn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new fn(Bo,Go,e,t);s.layers=this.layers,this.add(s);let r=new fn(Bo,Go,e,t);r.layers=this.layers,this.add(r);let o=new fn(Bo,Go,e,t);o.layers=this.layers,this.add(o);let a=new fn(Bo,Go,e,t);a.layers=this.layers,this.add(a);let l=new fn(Bo,Go,e,t);l.layers=this.layers,this.add(l);let c=new fn(Bo,Go,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===zs)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ch)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,d),e.setRenderTarget(u,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},xh=class extends Cn{constructor(e,t,i,s,r,o,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:ea,super(e,t,i,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},wf=class extends ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new xh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Si}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ke(5,5,5),r=new ot({name:"CubemapFromEquirect",uniforms:ia(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nn,blending:Mn});r.uniforms.tEquirect.value=t;let o=new Z(s,r),a=t.minFilter;return t.minFilter===Jr&&(t.minFilter=Si),new Ef(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},xu=new S,R2=new S,A2=new vt,Ns=class{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=xu.subVectors(i,t).cross(R2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(xu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||A2.getNormalMatrix(e),s=this.coplanarPoint(xu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xr=new mr,Xc=new S,wl=class{constructor(e=new Ns,t=new Ns,i=new Ns,s=new Ns,r=new Ns,o=new Ns){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zs){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],d=s[5],u=s[6],f=s[7],p=s[8],g=s[9],x=s[10],v=s[11],m=s[12],E=s[13],w=s[14],M=s[15];if(i[0].setComponents(l-r,f-c,v-p,M-m).normalize(),i[1].setComponents(l+r,f+c,v+p,M+m).normalize(),i[2].setComponents(l+o,f+d,v+g,M+E).normalize(),i[3].setComponents(l-o,f-d,v-g,M-E).normalize(),i[4].setComponents(l-a,f-u,v-x,M-w).normalize(),t===zs)i[5].setComponents(l+a,f+u,v+x,M+w).normalize();else if(t===ch)i[5].setComponents(a,u,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){return Xr.center.set(0,0,0),Xr.radius=.7071067811865476,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Xc.x=s.normal.x>0?e.max.x:e.min.x,Xc.y=s.normal.y>0?e.max.y:e.min.y,Xc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function l1(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function C2(n){let e=new WeakMap;function t(a,l){let c=a.array,d=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let d=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,d);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let x=u[p];n.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var In=class n extends At{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,d=l+1,u=e/a,f=t/l,p=[],g=[],x=[],v=[];for(let m=0;m<d;m++){let E=m*f-o;for(let w=0;w<c;w++){let M=w*u-r;g.push(M,-E,0),x.push(0,0,1),v.push(w/a),v.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<a;E++){let w=E+c*m,M=E+c*(m+1),L=E+1+c*(m+1),A=E+1+c*m;p.push(w,M,A),p.push(M,L,A)}this.setIndex(p),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(x,3)),this.setAttribute("uv",new nt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},P2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,I2=`#ifdef USE_ALPHAHASH
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
#endif`,L2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,U2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N2=`#ifdef USE_AOMAP
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
#endif`,z2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k2=`#ifdef USE_BATCHING
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
#endif`,O2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,F2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,V2=`#ifdef USE_IRIDESCENCE
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
#endif`,W2=`#ifdef USE_BUMPMAP
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
#endif`,X2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,q2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Z2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,K2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,J2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Q2=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$2=`#define PI 3.141592653589793
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
} // validated`,eE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tE=`vec3 transformedNormal = objectNormal;
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
#endif`,nE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oE="gl_FragColor = linearToOutputTexel( gl_FragColor );",aE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lE=`#ifdef USE_ENVMAP
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
#endif`,cE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hE=`#ifdef USE_ENVMAP
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
#endif`,dE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uE=`#ifdef USE_ENVMAP
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
#endif`,fE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vE=`#ifdef USE_GRADIENTMAP
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
}`,xE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ME=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,EE=`uniform bool receiveShadow;
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
#endif`,wE=`#ifdef USE_ENVMAP
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
#endif`,bE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_E=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RE=`PhysicalMaterial material;
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
#endif`,AE=`struct PhysicalMaterial {
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
}`,CE=`
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
#endif`,PE=`#if defined( RE_IndirectDiffuse )
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
#endif`,IE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,OE=`#if defined( USE_POINTS_UV )
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
#endif`,FE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,VE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XE=`#ifdef USE_MORPHTARGETS
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
#endif`,qE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ZE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,QE=`#ifdef USE_NORMALMAP
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
#endif`,$E=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ew=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ow=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pw=`float getShadowMask() {
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
}`,mw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gw=`#ifdef USE_SKINNING
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
#endif`,vw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xw=`#ifdef USE_SKINNING
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
#endif`,yw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ew=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ww=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bw=`#ifdef USE_TRANSMISSION
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
#endif`,Sw=`#ifdef USE_TRANSMISSION
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
#endif`,_w=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Aw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pw=`uniform sampler2D t2D;
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
}`,Iw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uw=`#include <common>
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
}`,Nw=`#if DEPTH_PACKING == 3200
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
}`,zw=`#define DISTANCE
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
}`,kw=`#define DISTANCE
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
}`,Ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bw=`uniform float scale;
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
}`,Gw=`uniform vec3 diffuse;
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
}`,Vw=`#include <common>
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
}`,Ww=`uniform vec3 diffuse;
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
}`,Xw=`#define LAMBERT
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
}`,qw=`#define LAMBERT
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
}`,Yw=`#define MATCAP
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
}`,jw=`#define MATCAP
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
}`,Zw=`#define NORMAL
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
}`,Kw=`#define NORMAL
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
}`,Jw=`#define PHONG
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
}`,Qw=`#define PHONG
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
}`,$w=`#define STANDARD
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
}`,eb=`#define STANDARD
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
}`,tb=`#define TOON
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
}`,nb=`#define TOON
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
}`,ib=`uniform float size;
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
}`,sb=`uniform vec3 diffuse;
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
}`,rb=`#include <common>
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
}`,ob=`uniform vec3 color;
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
}`,ab=`uniform float rotation;
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
}`,lb=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:P2,alphahash_pars_fragment:I2,alphamap_fragment:L2,alphamap_pars_fragment:D2,alphatest_fragment:H2,alphatest_pars_fragment:U2,aomap_fragment:N2,aomap_pars_fragment:z2,batching_pars_vertex:k2,batching_vertex:O2,begin_vertex:F2,beginnormal_vertex:B2,bsdfs:G2,iridescence_fragment:V2,bumpmap_pars_fragment:W2,clipping_planes_fragment:X2,clipping_planes_pars_fragment:q2,clipping_planes_pars_vertex:Y2,clipping_planes_vertex:j2,color_fragment:Z2,color_pars_fragment:K2,color_pars_vertex:J2,color_vertex:Q2,common:$2,cube_uv_reflection_fragment:eE,defaultnormal_vertex:tE,displacementmap_pars_vertex:nE,displacementmap_vertex:iE,emissivemap_fragment:sE,emissivemap_pars_fragment:rE,colorspace_fragment:oE,colorspace_pars_fragment:aE,envmap_fragment:lE,envmap_common_pars_fragment:cE,envmap_pars_fragment:hE,envmap_pars_vertex:dE,envmap_physical_pars_fragment:wE,envmap_vertex:uE,fog_vertex:fE,fog_pars_vertex:pE,fog_fragment:mE,fog_pars_fragment:gE,gradientmap_pars_fragment:vE,lightmap_pars_fragment:xE,lights_lambert_fragment:yE,lights_lambert_pars_fragment:ME,lights_pars_begin:EE,lights_toon_fragment:bE,lights_toon_pars_fragment:SE,lights_phong_fragment:_E,lights_phong_pars_fragment:TE,lights_physical_fragment:RE,lights_physical_pars_fragment:AE,lights_fragment_begin:CE,lights_fragment_maps:PE,lights_fragment_end:IE,logdepthbuf_fragment:LE,logdepthbuf_pars_fragment:DE,logdepthbuf_pars_vertex:HE,logdepthbuf_vertex:UE,map_fragment:NE,map_pars_fragment:zE,map_particle_fragment:kE,map_particle_pars_fragment:OE,metalnessmap_fragment:FE,metalnessmap_pars_fragment:BE,morphinstance_vertex:GE,morphcolor_vertex:VE,morphnormal_vertex:WE,morphtarget_pars_vertex:XE,morphtarget_vertex:qE,normal_fragment_begin:YE,normal_fragment_maps:jE,normal_pars_fragment:ZE,normal_pars_vertex:KE,normal_vertex:JE,normalmap_pars_fragment:QE,clearcoat_normal_fragment_begin:$E,clearcoat_normal_fragment_maps:ew,clearcoat_pars_fragment:tw,iridescence_pars_fragment:nw,opaque_fragment:iw,packing:sw,premultiplied_alpha_fragment:rw,project_vertex:ow,dithering_fragment:aw,dithering_pars_fragment:lw,roughnessmap_fragment:cw,roughnessmap_pars_fragment:hw,shadowmap_pars_fragment:dw,shadowmap_pars_vertex:uw,shadowmap_vertex:fw,shadowmask_pars_fragment:pw,skinbase_vertex:mw,skinning_pars_vertex:gw,skinning_vertex:vw,skinnormal_vertex:xw,specularmap_fragment:yw,specularmap_pars_fragment:Mw,tonemapping_fragment:Ew,tonemapping_pars_fragment:ww,transmission_fragment:bw,transmission_pars_fragment:Sw,uv_pars_fragment:_w,uv_pars_vertex:Tw,uv_vertex:Rw,worldpos_vertex:Aw,background_vert:Cw,background_frag:Pw,backgroundCube_vert:Iw,backgroundCube_frag:Lw,cube_vert:Dw,cube_frag:Hw,depth_vert:Uw,depth_frag:Nw,distanceRGBA_vert:zw,distanceRGBA_frag:kw,equirect_vert:Ow,equirect_frag:Fw,linedashed_vert:Bw,linedashed_frag:Gw,meshbasic_vert:Vw,meshbasic_frag:Ww,meshlambert_vert:Xw,meshlambert_frag:qw,meshmatcap_vert:Yw,meshmatcap_frag:jw,meshnormal_vert:Zw,meshnormal_frag:Kw,meshphong_vert:Jw,meshphong_frag:Qw,meshphysical_vert:$w,meshphysical_frag:eb,meshtoon_vert:tb,meshtoon_frag:nb,points_vert:ib,points_frag:sb,shadow_vert:rb,shadow_frag:ob,sprite_vert:ab,sprite_frag:lb},Se={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},ss={basic:{uniforms:Qn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:Qn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new re(0)}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:Qn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:Qn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:Qn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new re(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:Qn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:Qn([Se.points,Se.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:Qn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:Qn([Se.common,Se.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:Qn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:Qn([Se.sprite,Se.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distanceRGBA:{uniforms:Qn([Se.common,Se.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distanceRGBA_vert,fragmentShader:yt.distanceRGBA_frag},shadow:{uniforms:Qn([Se.lights,Se.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};ss.physical={uniforms:Qn([ss.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new $(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new $},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};var qc={r:0,b:0,g:0},qr=new Pn,cb=new xt;function hb(n,e,t,i,s,r,o){let a=new re(0),l=r===!0?0:1,c,d,u=null,f=0,p=null;function g(E){let w=E.isScene===!0?E.background:null;return w&&w.isTexture&&(w=(E.backgroundBlurriness>0?t:e).get(w)),w}function x(E){let w=!1,M=g(E);M===null?m(a,l):M&&M.isColor&&(m(M,1),w=!0);let L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(E,w){let M=g(w);M&&(M.isCubeTexture||M.mapping===Hh)?(d===void 0&&(d=new Z(new Ke(1,1,1),new ot({name:"BackgroundCubeMaterial",uniforms:ia(ss.backgroundCube.uniforms),vertexShader:ss.backgroundCube.vertexShader,fragmentShader:ss.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),qr.copy(w.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(cb.makeRotationFromEuler(qr)),d.material.toneMapped=Ct.getTransfer(M.colorSpace)!==Gt,(u!==M||f!==M.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,u=M,f=M.version,p=n.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Z(new In(2,2),new ot({name:"BackgroundMaterial",uniforms:ia(ss.background.uniforms),vertexShader:ss.background.vertexShader,fragmentShader:ss.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Ct.getTransfer(M.colorSpace)!==Gt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,p=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,w){E.getRGB(qc,a1(n)),i.buffers.color.setClear(qc.r,qc.g,qc.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(E,w=1){a.set(E),l=w,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,m(a,l)},render:x,addToRenderList:v}}function db(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(b,H,O,F,W){let te=!1,q=u(F,O,H);r!==q&&(r=q,c(r.object)),te=p(b,F,O,W),te&&g(b,F,O,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,M(b,H,O,F),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function d(b){return n.deleteVertexArray(b)}function u(b,H,O){let F=O.wireframe===!0,W=i[b.id];W===void 0&&(W={},i[b.id]=W);let te=W[H.id];te===void 0&&(te={},W[H.id]=te);let q=te[F];return q===void 0&&(q=f(l()),te[F]=q),q}function f(b){let H=[],O=[],F=[];for(let W=0;W<t;W++)H[W]=0,O[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:O,attributeDivisors:F,object:b,attributes:{},index:null}}function p(b,H,O,F){let W=r.attributes,te=H.attributes,q=0,le=O.getAttributes();for(let Y in le)if(le[Y].location>=0){let Te=W[Y],Fe=te[Y];if(Fe===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(Fe=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(Fe=b.instanceColor)),Te===void 0||Te.attribute!==Fe||Fe&&Te.data!==Fe.data)return!0;q++}return r.attributesNum!==q||r.index!==F}function g(b,H,O,F){let W={},te=H.attributes,q=0,le=O.getAttributes();for(let Y in le)if(le[Y].location>=0){let Te=te[Y];Te===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(Te=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(Te=b.instanceColor));let Fe={};Fe.attribute=Te,Te&&Te.data&&(Fe.data=Te.data),W[Y]=Fe,q++}r.attributes=W,r.attributesNum=q,r.index=F}function x(){let b=r.newAttributes;for(let H=0,O=b.length;H<O;H++)b[H]=0}function v(b){m(b,0)}function m(b,H){let O=r.newAttributes,F=r.enabledAttributes,W=r.attributeDivisors;O[b]=1,F[b]===0&&(n.enableVertexAttribArray(b),F[b]=1),W[b]!==H&&(n.vertexAttribDivisor(b,H),W[b]=H)}function E(){let b=r.newAttributes,H=r.enabledAttributes;for(let O=0,F=H.length;O<F;O++)H[O]!==b[O]&&(n.disableVertexAttribArray(O),H[O]=0)}function w(b,H,O,F,W,te,q){q===!0?n.vertexAttribIPointer(b,H,O,W,te):n.vertexAttribPointer(b,H,O,F,W,te)}function M(b,H,O,F){x();let W=F.attributes,te=O.getAttributes(),q=H.defaultAttributeValues;for(let le in te){let Y=te[le];if(Y.location>=0){let ue=W[le];if(ue===void 0&&(le==="instanceMatrix"&&b.instanceMatrix&&(ue=b.instanceMatrix),le==="instanceColor"&&b.instanceColor&&(ue=b.instanceColor)),ue!==void 0){let Te=ue.normalized,Fe=ue.itemSize,ct=e.get(ue);if(ct===void 0)continue;let Ht=ct.buffer,J=ct.type,fe=ct.bytesPerElement,Oe=J===n.INT||J===n.UNSIGNED_INT||ue.gpuType===lp;if(ue.isInterleavedBufferAttribute){let ye=ue.data,Ye=ye.stride,$e=ue.offset;if(ye.isInstancedInterleavedBuffer){for(let st=0;st<Y.locationSize;st++)m(Y.location+st,ye.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let st=0;st<Y.locationSize;st++)v(Y.location+st);n.bindBuffer(n.ARRAY_BUFFER,Ht);for(let st=0;st<Y.locationSize;st++)w(Y.location+st,Fe/Y.locationSize,J,Te,Ye*fe,($e+Fe/Y.locationSize*st)*fe,Oe)}else{if(ue.isInstancedBufferAttribute){for(let ye=0;ye<Y.locationSize;ye++)m(Y.location+ye,ue.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ye=0;ye<Y.locationSize;ye++)v(Y.location+ye);n.bindBuffer(n.ARRAY_BUFFER,Ht);for(let ye=0;ye<Y.locationSize;ye++)w(Y.location+ye,Fe/Y.locationSize,J,Te,Fe*fe,Fe/Y.locationSize*ye*fe,Oe)}}else if(q!==void 0){let Te=q[le];if(Te!==void 0)switch(Te.length){case 2:n.vertexAttrib2fv(Y.location,Te);break;case 3:n.vertexAttrib3fv(Y.location,Te);break;case 4:n.vertexAttrib4fv(Y.location,Te);break;default:n.vertexAttrib1fv(Y.location,Te)}}}}E()}function L(){I();for(let b in i){let H=i[b];for(let O in H){let F=H[O];for(let W in F)d(F[W].object),delete F[W];delete H[O]}delete i[b]}}function A(b){if(i[b.id]===void 0)return;let H=i[b.id];for(let O in H){let F=H[O];for(let W in F)d(F[W].object),delete F[W];delete H[O]}delete i[b.id]}function P(b){for(let H in i){let O=i[H];if(O[b.id]===void 0)continue;let F=O[b.id];for(let W in F)d(F[W].object),delete F[W];delete O[b.id]}}function I(){_(),o=!0,r!==s&&(r=s,c(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:_,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:v,disableUnusedAttributes:E}}function ub(n,e,t){let i;function s(c){i=c}function r(c,d){n.drawArrays(i,c,d),t.update(d,i,1)}function o(c,d,u){u!==0&&(n.drawArraysInstanced(i,c,d,u),t.update(d,i,u))}function a(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,u);let p=0;for(let g=0;g<u;g++)p+=d[g];t.update(p,i,1)}function l(c,d,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],d[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=d[x]*f[x];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function fb(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==di&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let I=P===bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==si&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==rs&&!I)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:M,vertexTextures:L,maxSamples:A}}function pb(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Ns,a=new vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||i!==0||s;return s=f,i=u.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,x=u.clipIntersection,v=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!v)r?d(null):c();else{let E=r?0:i,w=E*4,M=m.clippingState||null;l.value=M,M=d(g,f,w,p);for(let L=0;L!==w;++L)M[L]=t[L];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,f,p,g){let x=u!==null?u.length:0,v=null;if(x!==0){if(v=l.value,g!==!0||v===null){let m=p+x*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(v===null||v.length<m)&&(v=new Float32Array(m));for(let w=0,M=p;w!==x;++w,M+=4)o.copy(u[w]).applyMatrix4(E,a),o.normal.toArray(v,M),v[M+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,v}}function mb(n){let e=new WeakMap;function t(o,a){return a===Fu?o.mapping=ea:a===Bu&&(o.mapping=ta),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Fu||a===Bu)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new wf(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var sa=class extends vh{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Zo=4,hg=[.125,.215,.35,.446,.526,.582],Zr=20,yu=new sa,dg=new re,Mu=null,Eu=0,wu=0,bu=!1,jr=(1+Math.sqrt(5))/2,Vo=1/jr,ug=[new S(-jr,Vo,0),new S(jr,Vo,0),new S(-Vo,0,jr),new S(Vo,0,jr),new S(0,jr,-Vo),new S(0,jr,Vo),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],ra=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Mu=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),wu=this._renderer.getActiveMipmapLevel(),bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mu,Eu,wu),this._renderer.xr.enabled=bu,e.scissorTest=!1,Yc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ea||e.mapping===ta?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mu=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),wu=this._renderer.getActiveMipmapLevel(),bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:bn,format:di,colorSpace:ua,depthBuffer:!1},s=fg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fg(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gb(r)),this._blurMaterial=vb(r,e,t)}return s}_compileMaterial(e){let t=new Z(this._lodPlanes[0],e);this._renderer.compile(t,yu)}_sceneToCubeUV(e,t,i,s){let a=new fn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(dg),d.toneMapping=hr,d.autoClear=!1;let p=new He({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),g=new Z(new Ke,p),x=!1,v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,x=!0):(p.color.copy(dg),x=!0);for(let m=0;m<6;m++){let E=m%3;E===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):E===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let w=this._cubeSize;Yc(s,E*w,m>2?w:0,w,w),d.setRenderTarget(s),x&&d.render(g,a),d.render(e,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=v}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===ea||e.mapping===ta;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pg());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Z(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Yc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,yu)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ug[(s-r-1)%ug.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,u=new Z(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Zr-1),x=r/g,v=isFinite(r)?1+Math.floor(d*x):Zr;v>Zr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Zr}`);let m=[],E=0;for(let P=0;P<Zr;++P){let I=P/x,_=Math.exp(-I*I/2);m.push(_),P===0?E+=_:P<v&&(E+=2*_)}for(let P=0;P<m.length;P++)m[P]=m[P]/E;f.envMap.value=e.texture,f.samples.value=v,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-i;let M=this._sizeLods[s],L=3*M*(s>w-Zo?s-w+Zo:0),A=4*(this._cubeSize-M);Yc(t,L,A,3*M,2*M),l.setRenderTarget(t),l.render(u,yu)}};function gb(n){let e=[],t=[],i=[],s=n,r=n-Zo+1+hg.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Zo?l=hg[o-n+Zo-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),d=-c,u=1+c,f=[d,d,u,d,u,u,d,d,u,u,d,u],p=6,g=6,x=3,v=2,m=1,E=new Float32Array(x*g*p),w=new Float32Array(v*g*p),M=new Float32Array(m*g*p);for(let A=0;A<p;A++){let P=A%3*2/3-1,I=A>2?0:-1,_=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];E.set(_,x*g*A),w.set(f,v*g*A);let b=[A,A,A,A,A,A];M.set(b,m*g*A)}let L=new At;L.setAttribute("position",new an(E,x)),L.setAttribute("uv",new an(w,v)),L.setAttribute("faceIndex",new an(M,m)),e.push(L),s>Zo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function fg(n,e,t){let i=new ln(n,e,t);return i.texture.mapping=Hh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yc(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function vb(n,e,t){let i=new Float32Array(Zr),s=new S(0,1,0);return new ot({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xp(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function pg(){return new ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xp(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function mg(){return new ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function xp(){return`

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
	`}function xb(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Fu||l===Bu,d=l===ea||l===ta;if(c||d){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ra(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||d&&p&&s(p)?(t===null&&(t=new ra(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function yb(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&pl("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Mb(n,e,t,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let v=0,m=x.length;v<m;v++)e.remove(x[v])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let v=0,m=x.length;v<m;v++)e.update(x[v],n.ARRAY_BUFFER)}}function c(u){let f=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let E=p.array;x=p.version;for(let w=0,M=E.length;w<M;w+=3){let L=E[w+0],A=E[w+1],P=E[w+2];f.push(L,A,A,P,P,L)}}else if(g!==void 0){let E=g.array;x=g.version;for(let w=0,M=E.length/3-1;w<M;w+=3){let L=w+0,A=w+1,P=w+2;f.push(L,A,A,P,P,L)}}else return;let v=new(r1(f)?gh:mh)(f,1);v.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,v)}function d(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function Eb(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),t.update(p,i,g))}function d(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let v=0;for(let m=0;m<g;m++)v+=p[m];t.update(v,i,1)}function u(f,p,g,x){if(g===0)return;let v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<f.length;m++)c(f[m]/o,p[m],x[m]);else{v.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,x,0,g);let m=0;for(let E=0;E<g;E++)m+=p[E]*x[E];t.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function wb(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function bb(n,e,t){let i=new WeakMap,s=new Vt;function r(o,a,l){let c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0,f=i.get(a);if(f===void 0||f.count!==u){let _=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",_)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],w=0;p===!0&&(w=1),g===!0&&(w=2),x===!0&&(w=3);let M=a.attributes.position.count*w,L=1;M>e.maxTextureSize&&(L=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let A=new Float32Array(M*L*4*u),P=new uh(A,M,L,u);P.type=rs,P.needsUpdate=!0;let I=w*4;for(let b=0;b<u;b++){let H=v[b],O=m[b],F=E[b],W=M*L*4*b;for(let te=0;te<H.count;te++){let q=te*I;p===!0&&(s.fromBufferAttribute(H,te),A[W+q+0]=s.x,A[W+q+1]=s.y,A[W+q+2]=s.z,A[W+q+3]=0),g===!0&&(s.fromBufferAttribute(O,te),A[W+q+4]=s.x,A[W+q+5]=s.y,A[W+q+6]=s.z,A[W+q+7]=0),x===!0&&(s.fromBufferAttribute(F,te),A[W+q+8]=s.x,A[W+q+9]=s.y,A[W+q+10]=s.z,A[W+q+11]=F.itemSize===4?s.w:1)}}f={count:u,texture:P,size:new $(M,L)},i.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Sb(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,d=l.geometry,u=e.get(l,d);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var oa=class extends Cn{constructor(e,t,i,s,r,o,a,l,c,d=Ko){if(d!==Ko&&d!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Ko&&(i=Qr),i===void 0&&d===fr&&(i=ur),super(null,s,r,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:pn,this.minFilter=l!==void 0?l:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},c1=new Cn,gg=new oa(1,1),h1=new uh,d1=new Mf,u1=new xh,vg=[],xg=[],yg=new Float32Array(16),Mg=new Float32Array(9),Eg=new Float32Array(4);function fa(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=vg[s];if(r===void 0&&(r=new Float32Array(s),vg[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function En(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Nh(n,e){let t=xg[e];t===void 0&&(t=new Int32Array(e),xg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function _b(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Tb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;n.uniform2fv(this.addr,e),wn(t,e)}}function Rb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(En(t,e))return;n.uniform3fv(this.addr,e),wn(t,e)}}function Ab(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;n.uniform4fv(this.addr,e),wn(t,e)}}function Cb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(En(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wn(t,e)}else{if(En(t,i))return;Eg.set(i),n.uniformMatrix2fv(this.addr,!1,Eg),wn(t,i)}}function Pb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(En(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wn(t,e)}else{if(En(t,i))return;Mg.set(i),n.uniformMatrix3fv(this.addr,!1,Mg),wn(t,i)}}function Ib(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(En(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wn(t,e)}else{if(En(t,i))return;yg.set(i),n.uniformMatrix4fv(this.addr,!1,yg),wn(t,i)}}function Lb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Db(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;n.uniform2iv(this.addr,e),wn(t,e)}}function Hb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(En(t,e))return;n.uniform3iv(this.addr,e),wn(t,e)}}function Ub(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;n.uniform4iv(this.addr,e),wn(t,e)}}function Nb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function zb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;n.uniform2uiv(this.addr,e),wn(t,e)}}function kb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(En(t,e))return;n.uniform3uiv(this.addr,e),wn(t,e)}}function Ob(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;n.uniform4uiv(this.addr,e),wn(t,e)}}function Fb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(gg.compareFunction=s1,r=gg):r=c1,t.setTexture2D(e||r,s)}function Bb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||d1,s)}function Gb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||u1,s)}function Vb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||h1,s)}function Wb(n){switch(n){case 5126:return _b;case 35664:return Tb;case 35665:return Rb;case 35666:return Ab;case 35674:return Cb;case 35675:return Pb;case 35676:return Ib;case 5124:case 35670:return Lb;case 35667:case 35671:return Db;case 35668:case 35672:return Hb;case 35669:case 35673:return Ub;case 5125:return Nb;case 36294:return zb;case 36295:return kb;case 36296:return Ob;case 35678:case 36198:case 36298:case 36306:case 35682:return Fb;case 35679:case 36299:case 36307:return Bb;case 35680:case 36300:case 36308:case 36293:return Gb;case 36289:case 36303:case 36311:case 36292:return Vb}}function Xb(n,e){n.uniform1fv(this.addr,e)}function qb(n,e){let t=fa(e,this.size,2);n.uniform2fv(this.addr,t)}function Yb(n,e){let t=fa(e,this.size,3);n.uniform3fv(this.addr,t)}function jb(n,e){let t=fa(e,this.size,4);n.uniform4fv(this.addr,t)}function Zb(n,e){let t=fa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Kb(n,e){let t=fa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Jb(n,e){let t=fa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Qb(n,e){n.uniform1iv(this.addr,e)}function $b(n,e){n.uniform2iv(this.addr,e)}function eS(n,e){n.uniform3iv(this.addr,e)}function tS(n,e){n.uniform4iv(this.addr,e)}function nS(n,e){n.uniform1uiv(this.addr,e)}function iS(n,e){n.uniform2uiv(this.addr,e)}function sS(n,e){n.uniform3uiv(this.addr,e)}function rS(n,e){n.uniform4uiv(this.addr,e)}function oS(n,e,t){let i=this.cache,s=e.length,r=Nh(t,s);En(i,r)||(n.uniform1iv(this.addr,r),wn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||c1,r[o])}function aS(n,e,t){let i=this.cache,s=e.length,r=Nh(t,s);En(i,r)||(n.uniform1iv(this.addr,r),wn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||d1,r[o])}function lS(n,e,t){let i=this.cache,s=e.length,r=Nh(t,s);En(i,r)||(n.uniform1iv(this.addr,r),wn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||u1,r[o])}function cS(n,e,t){let i=this.cache,s=e.length,r=Nh(t,s);En(i,r)||(n.uniform1iv(this.addr,r),wn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||h1,r[o])}function hS(n){switch(n){case 5126:return Xb;case 35664:return qb;case 35665:return Yb;case 35666:return jb;case 35674:return Zb;case 35675:return Kb;case 35676:return Jb;case 5124:case 35670:return Qb;case 35667:case 35671:return $b;case 35668:case 35672:return eS;case 35669:case 35673:return tS;case 5125:return nS;case 36294:return iS;case 36295:return sS;case 36296:return rS;case 35678:case 36198:case 36298:case 36306:case 35682:return oS;case 35679:case 36299:case 36307:return aS;case 35680:case 36300:case 36308:case 36293:return lS;case 36289:case 36303:case 36311:case 36292:return cS}}var bf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Wb(t.type)}},Sf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hS(t.type)}},_f=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Su=/(\w+)(\])?(\[|\.)?/g;function wg(n,e){n.seq.push(e),n.map[e.id]=e}function dS(n,e,t){let i=n.name,s=i.length;for(Su.lastIndex=0;;){let r=Su.exec(i),o=Su.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){wg(t,c===void 0?new bf(a,n,e):new Sf(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new _f(a),wg(t,u)),t=u}}}var Qo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);dS(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function bg(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var uS=37297,fS=0;function pS(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Sg=new vt;function mS(n){Ct._getMatrix(Sg,Ct.workingColorSpace,n);let e=`mat3( ${Sg.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(n)){case Uh:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function _g(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+pS(n.getShaderSource(e),o)}else return s}function gS(n,e){let t=mS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function vS(n,e){let t;switch(e){case ip:t="Linear";break;case sp:t="Reinhard";break;case rp:t="Cineon";break;case so:t="ACESFilmic";break;case op:t="AgX";break;case ap:t="Neutral";break;case HM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var jc=new S;function xS(){Ct.getLuminanceCoefficients(jc);let n=jc.x.toFixed(4),e=jc.y.toFixed(4),t=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ml).join(`
`)}function MS(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ES(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ml(n){return n!==""}function Tg(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var wS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tf(n){return n.replace(wS,SS)}var bS=new Map;function SS(n,e){let t=yt[e];if(t===void 0){let i=bS.get(e);if(i!==void 0)t=yt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Tf(t)}var _S=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ag(n){return n.replace(_S,TS)}function TS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cg(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function RS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===qg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===tp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Us&&(e="SHADOWMAP_TYPE_VSM"),e}function AS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ea:case ta:e="ENVMAP_TYPE_CUBE";break;case Hh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ta:e="ENVMAP_MODE_REFRACTION";break}return e}function PS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Yg:e="ENVMAP_BLENDING_MULTIPLY";break;case LM:e="ENVMAP_BLENDING_MIX";break;case DM:e="ENVMAP_BLENDING_ADD";break}return e}function IS(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function LS(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=RS(t),c=AS(t),d=CS(t),u=PS(t),f=IS(t),p=yS(t),g=MS(r),x=s.createProgram(),v,m,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ml).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ml).join(`
`),m.length>0&&(m+=`
`)):(v=[Cg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ml).join(`
`),m=[Cg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hr?"#define TONE_MAPPING":"",t.toneMapping!==hr?yt.tonemapping_pars_fragment:"",t.toneMapping!==hr?vS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,gS("linearToOutputTexel",t.outputColorSpace),xS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ml).join(`
`)),o=Tf(o),o=Tg(o,t),o=Rg(o,t),a=Tf(a),a=Tg(a,t),a=Rg(a,t),o=Ag(o),a=Ag(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===Gm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=E+v+o,M=E+m+a,L=bg(s,s.VERTEX_SHADER,w),A=bg(s,s.FRAGMENT_SHADER,M);s.attachShader(x,L),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(H){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(x).trim(),F=s.getShaderInfoLog(L).trim(),W=s.getShaderInfoLog(A).trim(),te=!0,q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,L,A);else{let le=_g(s,L,"vertex"),Y=_g(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+O+`
`+le+`
`+Y)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||W==="")&&(q=!1);q&&(H.diagnostics={runnable:te,programLog:O,vertexShader:{log:F,prefix:v},fragmentShader:{log:W,prefix:m}})}s.deleteShader(L),s.deleteShader(A),I=new Qo(s,x),_=ES(s,x)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let _;this.getAttributes=function(){return _===void 0&&P(this),_};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,uS)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=A,this}var DS=0,Rf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Af(e),t.set(e,i)),i}},Af=class{constructor(e){this.id=DS++,this.code=e,this.usedTimes=0}};function HS(n,e,t,i,s,r,o){let a=new ph,l=new Rf,c=new Set,d=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,b,H,O,F){let W=O.fog,te=F.geometry,q=_.isMeshStandardMaterial?O.environment:null,le=(_.isMeshStandardMaterial?t:e).get(_.envMap||q),Y=le&&le.mapping===Hh?le.image.height:null,ue=g[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let Te=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Fe=Te!==void 0?Te.length:0,ct=0;te.morphAttributes.position!==void 0&&(ct=1),te.morphAttributes.normal!==void 0&&(ct=2),te.morphAttributes.color!==void 0&&(ct=3);let Ht,J,fe,Oe;if(ue){let Yt=ss[ue];Ht=Yt.vertexShader,J=Yt.fragmentShader}else Ht=_.vertexShader,J=_.fragmentShader,l.update(_),fe=l.getVertexShaderID(_),Oe=l.getFragmentShaderID(_);let ye=n.getRenderTarget(),Ye=n.state.buffers.depth.getReversed(),$e=F.isInstancedMesh===!0,st=F.isBatchedMesh===!0,Kt=!!_.map,St=!!_.matcap,$t=!!le,N=!!_.aoMap,Fn=!!_.lightMap,Et=!!_.bumpMap,wt=!!_.normalMap,Qe=!!_.displacementMap,qt=!!_.emissiveMap,Ze=!!_.metalnessMap,D=!!_.roughnessMap,T=_.anisotropy>0,B=_.clearcoat>0,ee=_.dispersion>0,se=_.iridescence>0,Q=_.sheen>0,Be=_.transmission>0,we=T&&!!_.anisotropyMap,Ae=B&&!!_.clearcoatMap,Mt=B&&!!_.clearcoatNormalMap,ce=B&&!!_.clearcoatRoughnessMap,Ue=se&&!!_.iridescenceMap,et=se&&!!_.iridescenceThicknessMap,it=Q&&!!_.sheenColorMap,Ne=Q&&!!_.sheenRoughnessMap,Rt=!!_.specularMap,rt=!!_.specularColorMap,Ut=!!_.specularIntensityMap,U=Be&&!!_.transmissionMap,Ee=Be&&!!_.thicknessMap,j=!!_.gradientMap,ne=!!_.alphaMap,Ie=_.alphaTest>0,Ce=!!_.alphaHash,mt=!!_.extensions,dn=hr;_.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(dn=n.toneMapping);let Bn={shaderID:ue,shaderType:_.type,shaderName:_.name,vertexShader:Ht,fragmentShader:J,defines:_.defines,customVertexShaderID:fe,customFragmentShaderID:Oe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:st,batchingColor:st&&F._colorsTexture!==null,instancing:$e,instancingColor:$e&&F.instanceColor!==null,instancingMorph:$e&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ye===null?n.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:ua,alphaToCoverage:!!_.alphaToCoverage,map:Kt,matcap:St,envMap:$t,envMapMode:$t&&le.mapping,envMapCubeUVHeight:Y,aoMap:N,lightMap:Fn,bumpMap:Et,normalMap:wt,displacementMap:f&&Qe,emissiveMap:qt,normalMapObjectSpace:wt&&_.normalMapType===kM,normalMapTangentSpace:wt&&_.normalMapType===mp,metalnessMap:Ze,roughnessMap:D,anisotropy:T,anisotropyMap:we,clearcoat:B,clearcoatMap:Ae,clearcoatNormalMap:Mt,clearcoatRoughnessMap:ce,dispersion:ee,iridescence:se,iridescenceMap:Ue,iridescenceThicknessMap:et,sheen:Q,sheenColorMap:it,sheenRoughnessMap:Ne,specularMap:Rt,specularColorMap:rt,specularIntensityMap:Ut,transmission:Be,transmissionMap:U,thicknessMap:Ee,gradientMap:j,opaque:_.transparent===!1&&_.blending===ui&&_.alphaToCoverage===!1,alphaMap:ne,alphaTest:Ie,alphaHash:Ce,combine:_.combine,mapUv:Kt&&x(_.map.channel),aoMapUv:N&&x(_.aoMap.channel),lightMapUv:Fn&&x(_.lightMap.channel),bumpMapUv:Et&&x(_.bumpMap.channel),normalMapUv:wt&&x(_.normalMap.channel),displacementMapUv:Qe&&x(_.displacementMap.channel),emissiveMapUv:qt&&x(_.emissiveMap.channel),metalnessMapUv:Ze&&x(_.metalnessMap.channel),roughnessMapUv:D&&x(_.roughnessMap.channel),anisotropyMapUv:we&&x(_.anisotropyMap.channel),clearcoatMapUv:Ae&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:et&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:it&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&x(_.sheenRoughnessMap.channel),specularMapUv:Rt&&x(_.specularMap.channel),specularColorMapUv:rt&&x(_.specularColorMap.channel),specularIntensityMapUv:Ut&&x(_.specularIntensityMap.channel),transmissionMapUv:U&&x(_.transmissionMap.channel),thicknessMapUv:Ee&&x(_.thicknessMap.channel),alphaMapUv:ne&&x(_.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(wt||T),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!te.attributes.uv&&(Kt||ne),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ye,skinning:F.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:ct,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:dn,decodeVideoTexture:Kt&&_.map.isVideoTexture===!0&&Ct.getTransfer(_.map.colorSpace)===Gt,decodeVideoTextureEmissive:qt&&_.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(_.emissiveMap.colorSpace)===Gt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ut,flipSided:_.side===Nn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:mt&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&_.extensions.multiDraw===!0||st)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Bn.vertexUv1s=c.has(1),Bn.vertexUv2s=c.has(2),Bn.vertexUv3s=c.has(3),c.clear(),Bn}function m(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let H in _.defines)b.push(H),b.push(_.defines[H]);return _.isRawShaderMaterial===!1&&(E(b,_),w(b,_),b.push(n.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function E(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function w(_,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),_.push(a.mask)}function M(_){let b=g[_.type],H;if(b){let O=ss[b];H=Dn.clone(O.uniforms)}else H=_.uniforms;return H}function L(_,b){let H;for(let O=0,F=d.length;O<F;O++){let W=d[O];if(W.cacheKey===b){H=W,++H.usedTimes;break}}return H===void 0&&(H=new LS(n,b,_,r),d.push(H)),H}function A(_){if(--_.usedTimes===0){let b=d.indexOf(_);d[b]=d[d.length-1],d.pop(),_.destroy()}}function P(_){l.remove(_)}function I(){l.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:M,acquireProgram:L,releaseProgram:A,releaseShaderCache:P,programs:d,dispose:I}}function US(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function NS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Pg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ig(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,p,g,x,v){let m=n[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:v},n[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=p,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=v),e++,m}function a(u,f,p,g,x,v){let m=o(u,f,p,g,x,v);p.transmission>0?i.push(m):p.transparent===!0?s.push(m):t.push(m)}function l(u,f,p,g,x,v){let m=o(u,f,p,g,x,v);p.transmission>0?i.unshift(m):p.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,f){t.length>1&&t.sort(u||NS),i.length>1&&i.sort(f||Pg),s.length>1&&s.sort(f||Pg)}function d(){for(let u=e,f=n.length;u<f;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:d,sort:c}}function zS(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Ig,n.set(i,[o])):s>=r.length?(o=new Ig,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function kS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new re};break;case"SpotLight":t={position:new S,direction:new S,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new re,groundColor:new re};break;case"RectAreaLight":t={color:new re,position:new S,halfWidth:new S,halfHeight:new S};break}return n[e.id]=t,t}}}function OS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var FS=0;function BS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function GS(n){let e=new kS,t=OS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new S);let s=new S,r=new xt,o=new xt;function a(c){let d=0,u=0,f=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let p=0,g=0,x=0,v=0,m=0,E=0,w=0,M=0,L=0,A=0,P=0;c.sort(BS);for(let _=0,b=c.length;_<b;_++){let H=c[_],O=H.color,F=H.intensity,W=H.distance,te=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)d+=O.r*F,u+=O.g*F,f+=O.b*F;else if(H.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(H.sh.coefficients[q],F);P++}else if(H.isDirectionalLight){let q=e.get(H);if(q.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){let le=H.shadow,Y=t.get(H);Y.shadowIntensity=le.intensity,Y.shadowBias=le.bias,Y.shadowNormalBias=le.normalBias,Y.shadowRadius=le.radius,Y.shadowMapSize=le.mapSize,i.directionalShadow[p]=Y,i.directionalShadowMap[p]=te,i.directionalShadowMatrix[p]=H.shadow.matrix,E++}i.directional[p]=q,p++}else if(H.isSpotLight){let q=e.get(H);q.position.setFromMatrixPosition(H.matrixWorld),q.color.copy(O).multiplyScalar(F),q.distance=W,q.coneCos=Math.cos(H.angle),q.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),q.decay=H.decay,i.spot[x]=q;let le=H.shadow;if(H.map&&(i.spotLightMap[L]=H.map,L++,le.updateMatrices(H),H.castShadow&&A++),i.spotLightMatrix[x]=le.matrix,H.castShadow){let Y=t.get(H);Y.shadowIntensity=le.intensity,Y.shadowBias=le.bias,Y.shadowNormalBias=le.normalBias,Y.shadowRadius=le.radius,Y.shadowMapSize=le.mapSize,i.spotShadow[x]=Y,i.spotShadowMap[x]=te,M++}x++}else if(H.isRectAreaLight){let q=e.get(H);q.color.copy(O).multiplyScalar(F),q.halfWidth.set(H.width*.5,0,0),q.halfHeight.set(0,H.height*.5,0),i.rectArea[v]=q,v++}else if(H.isPointLight){let q=e.get(H);if(q.color.copy(H.color).multiplyScalar(H.intensity),q.distance=H.distance,q.decay=H.decay,H.castShadow){let le=H.shadow,Y=t.get(H);Y.shadowIntensity=le.intensity,Y.shadowBias=le.bias,Y.shadowNormalBias=le.normalBias,Y.shadowRadius=le.radius,Y.shadowMapSize=le.mapSize,Y.shadowCameraNear=le.camera.near,Y.shadowCameraFar=le.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=te,i.pointShadowMatrix[g]=H.shadow.matrix,w++}i.point[g]=q,g++}else if(H.isHemisphereLight){let q=e.get(H);q.skyColor.copy(H.color).multiplyScalar(F),q.groundColor.copy(H.groundColor).multiplyScalar(F),i.hemi[m]=q,m++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=f;let I=i.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==v||I.hemiLength!==m||I.numDirectionalShadows!==E||I.numPointShadows!==w||I.numSpotShadows!==M||I.numSpotMaps!==L||I.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=v,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=M+L-A,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,I.directionalLength=p,I.pointLength=g,I.spotLength=x,I.rectAreaLength=v,I.hemiLength=m,I.numDirectionalShadows=E,I.numPointShadows=w,I.numSpotShadows=M,I.numSpotMaps=L,I.numLightProbes=P,i.version=FS++)}function l(c,d){let u=0,f=0,p=0,g=0,x=0,v=d.matrixWorldInverse;for(let m=0,E=c.length;m<E;m++){let w=c[m];if(w.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),u++}else if(w.isSpotLight){let M=i.spot[p];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),p++}else if(w.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(v),o.identity(),r.copy(w.matrixWorld),r.premultiply(v),o.extractRotation(r),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(v),f++}else if(w.isHemisphereLight){let M=i.hemi[x];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(v),x++}}}return{setup:a,setupView:l,state:i}}function Lg(n){let e=new GS(n),t=[],i=[];function s(d){c.camera=d,t.length=0,i.length=0}function r(d){t.push(d)}function o(d){i.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function VS(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Lg(n),e.set(s,[a])):r>=o.length?(a=new Lg(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Cf=class extends os{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=NM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pf=class extends os{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},WS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XS=`uniform sampler2D shadow_pass;
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
}`;function qS(n,e,t){let i=new wl,s=new $,r=new $,o=new Vt,a=new Cf({depthPacking:zM}),l=new Pf,c={},d=t.maxTextureSize,u={[dr]:Nn,[Nn]:dr,[ut]:ut},f=new ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:WS,fragmentShader:XS}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new At;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Z(g,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qg;let m=this.type;this.render=function(A,P,I){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||A.length===0)return;let _=n.getRenderTarget(),b=n.getActiveCubeFace(),H=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Mn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let F=m!==Us&&this.type===Us,W=m===Us&&this.type!==Us;for(let te=0,q=A.length;te<q;te++){let le=A[te],Y=le.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let ue=Y.getFrameExtents();if(s.multiply(ue),r.copy(Y.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ue.x),s.x=r.x*ue.x,Y.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ue.y),s.y=r.y*ue.y,Y.mapSize.y=r.y)),Y.map===null||F===!0||W===!0){let Fe=this.type!==Us?{minFilter:pn,magFilter:pn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new ln(s.x,s.y,Fe),Y.map.texture.name=le.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();let Te=Y.getViewportCount();for(let Fe=0;Fe<Te;Fe++){let ct=Y.getViewport(Fe);o.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),O.viewport(o),Y.updateMatrices(le,Fe),i=Y.getFrustum(),M(P,I,Y.camera,le,this.type)}Y.isPointLightShadow!==!0&&this.type===Us&&E(Y,I),Y.needsUpdate=!1}m=this.type,v.needsUpdate=!1,n.setRenderTarget(_,b,H)};function E(A,P){let I=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ln(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(P,null,I,f,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(P,null,I,p,x,null)}function w(A,P,I,_){let b=null,H=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(H!==void 0)b=H;else if(b=I.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let O=b.uuid,F=P.uuid,W=c[O];W===void 0&&(W={},c[O]=W);let te=W[F];te===void 0&&(te=b.clone(),W[F]=te,P.addEventListener("dispose",L)),b=te}if(b.visible=P.visible,b.wireframe=P.wireframe,_===Us?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:u[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let O=n.properties.get(b);O.light=I}return b}function M(A,P,I,_,b){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===Us)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);let F=e.update(A),W=A.material;if(Array.isArray(W)){let te=F.groups;for(let q=0,le=te.length;q<le;q++){let Y=te[q],ue=W[Y.materialIndex];if(ue&&ue.visible){let Te=w(A,ue,_,b);A.onBeforeShadow(n,A,P,I,F,Te,Y),n.renderBufferDirect(I,null,F,Te,A,Y),A.onAfterShadow(n,A,P,I,F,Te,Y)}}}else if(W.visible){let te=w(A,W,_,b);A.onBeforeShadow(n,A,P,I,F,te,null),n.renderBufferDirect(I,null,F,te,A,null),A.onAfterShadow(n,A,P,I,F,te,null)}}let O=A.children;for(let F=0,W=O.length;F<W;F++)M(O[F],P,I,_,b)}function L(A){A.target.removeEventListener("dispose",L);for(let I in c){let _=c[I],b=A.target.uuid;b in _&&(_[b].dispose(),delete _[b])}}}var YS={[Du]:Hu,[Uu]:ku,[Nu]:Ou,[$o]:zu,[Hu]:Du,[ku]:Uu,[Ou]:Nu,[zu]:$o};function jS(n,e){function t(){let U=!1,Ee=new Vt,j=null,ne=new Vt(0,0,0,0);return{setMask:function(Ie){j!==Ie&&!U&&(n.colorMask(Ie,Ie,Ie,Ie),j=Ie)},setLocked:function(Ie){U=Ie},setClear:function(Ie,Ce,mt,dn,Bn){Bn===!0&&(Ie*=dn,Ce*=dn,mt*=dn),Ee.set(Ie,Ce,mt,dn),ne.equals(Ee)===!1&&(n.clearColor(Ie,Ce,mt,dn),ne.copy(Ee))},reset:function(){U=!1,j=null,ne.set(-1,0,0,0)}}}function i(){let U=!1,Ee=!1,j=null,ne=null,Ie=null;return{setReversed:function(Ce){if(Ee!==Ce){let mt=e.get("EXT_clip_control");Ee?mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.ZERO_TO_ONE_EXT):mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.NEGATIVE_ONE_TO_ONE_EXT);let dn=Ie;Ie=null,this.setClear(dn)}Ee=Ce},getReversed:function(){return Ee},setTest:function(Ce){Ce?ye(n.DEPTH_TEST):Ye(n.DEPTH_TEST)},setMask:function(Ce){j!==Ce&&!U&&(n.depthMask(Ce),j=Ce)},setFunc:function(Ce){if(Ee&&(Ce=YS[Ce]),ne!==Ce){switch(Ce){case Du:n.depthFunc(n.NEVER);break;case Hu:n.depthFunc(n.ALWAYS);break;case Uu:n.depthFunc(n.LESS);break;case $o:n.depthFunc(n.LEQUAL);break;case Nu:n.depthFunc(n.EQUAL);break;case zu:n.depthFunc(n.GEQUAL);break;case ku:n.depthFunc(n.GREATER);break;case Ou:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ne=Ce}},setLocked:function(Ce){U=Ce},setClear:function(Ce){Ie!==Ce&&(Ee&&(Ce=1-Ce),n.clearDepth(Ce),Ie=Ce)},reset:function(){U=!1,j=null,ne=null,Ie=null,Ee=!1}}}function s(){let U=!1,Ee=null,j=null,ne=null,Ie=null,Ce=null,mt=null,dn=null,Bn=null;return{setTest:function(Yt){U||(Yt?ye(n.STENCIL_TEST):Ye(n.STENCIL_TEST))},setMask:function(Yt){Ee!==Yt&&!U&&(n.stencilMask(Yt),Ee=Yt)},setFunc:function(Yt,Gi,As){(j!==Yt||ne!==Gi||Ie!==As)&&(n.stencilFunc(Yt,Gi,As),j=Yt,ne=Gi,Ie=As)},setOp:function(Yt,Gi,As){(Ce!==Yt||mt!==Gi||dn!==As)&&(n.stencilOp(Yt,Gi,As),Ce=Yt,mt=Gi,dn=As)},setLocked:function(Yt){U=Yt},setClear:function(Yt){Bn!==Yt&&(n.clearStencil(Yt),Bn=Yt)},reset:function(){U=!1,Ee=null,j=null,ne=null,Ie=null,Ce=null,mt=null,dn=null,Bn=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,d={},u={},f=new WeakMap,p=[],g=null,x=!1,v=null,m=null,E=null,w=null,M=null,L=null,A=null,P=new re(0,0,0),I=0,_=!1,b=null,H=null,O=null,F=null,W=null,te=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,le=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(Y)[1]),q=le>=1):Y.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),q=le>=2);let ue=null,Te={},Fe=n.getParameter(n.SCISSOR_BOX),ct=n.getParameter(n.VIEWPORT),Ht=new Vt().fromArray(Fe),J=new Vt().fromArray(ct);function fe(U,Ee,j,ne){let Ie=new Uint8Array(4),Ce=n.createTexture();n.bindTexture(U,Ce),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let mt=0;mt<j;mt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,ne,0,n.RGBA,n.UNSIGNED_BYTE,Ie):n.texImage2D(Ee+mt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ie);return Ce}let Oe={};Oe[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),Oe[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Oe[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Oe[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ye(n.DEPTH_TEST),o.setFunc($o),Et(!1),wt(Um),ye(n.CULL_FACE),N(Mn);function ye(U){d[U]!==!0&&(n.enable(U),d[U]=!0)}function Ye(U){d[U]!==!1&&(n.disable(U),d[U]=!1)}function $e(U,Ee){return u[U]!==Ee?(n.bindFramebuffer(U,Ee),u[U]=Ee,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Ee),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}function st(U,Ee){let j=p,ne=!1;if(U){j=f.get(Ee),j===void 0&&(j=[],f.set(Ee,j));let Ie=U.textures;if(j.length!==Ie.length||j[0]!==n.COLOR_ATTACHMENT0){for(let Ce=0,mt=Ie.length;Ce<mt;Ce++)j[Ce]=n.COLOR_ATTACHMENT0+Ce;j.length=Ie.length,ne=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,ne=!0);ne&&n.drawBuffers(j)}function Kt(U){return g!==U?(n.useProgram(U),g=U,!0):!1}let St={[bi]:n.FUNC_ADD,[xM]:n.FUNC_SUBTRACT,[yM]:n.FUNC_REVERSE_SUBTRACT};St[MM]=n.MIN,St[EM]=n.MAX;let $t={[da]:n.ZERO,[wM]:n.ONE,[bM]:n.SRC_COLOR,[Iu]:n.SRC_ALPHA,[RM]:n.SRC_ALPHA_SATURATE,[Dh]:n.DST_COLOR,[Lh]:n.DST_ALPHA,[SM]:n.ONE_MINUS_SRC_COLOR,[Lu]:n.ONE_MINUS_SRC_ALPHA,[TM]:n.ONE_MINUS_DST_COLOR,[_M]:n.ONE_MINUS_DST_ALPHA,[AM]:n.CONSTANT_COLOR,[CM]:n.ONE_MINUS_CONSTANT_COLOR,[PM]:n.CONSTANT_ALPHA,[IM]:n.ONE_MINUS_CONSTANT_ALPHA};function N(U,Ee,j,ne,Ie,Ce,mt,dn,Bn,Yt){if(U===Mn){x===!0&&(Ye(n.BLEND),x=!1);return}if(x===!1&&(ye(n.BLEND),x=!0),U!==np){if(U!==v||Yt!==_){if((m!==bi||M!==bi)&&(n.blendEquation(n.FUNC_ADD),m=bi,M=bi),Yt)switch(U){case ui:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Le:n.blendFunc(n.ONE,n.ONE);break;case Nm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ui:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Le:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Nm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}E=null,w=null,L=null,A=null,P.set(0,0,0),I=0,v=U,_=Yt}return}Ie=Ie||Ee,Ce=Ce||j,mt=mt||ne,(Ee!==m||Ie!==M)&&(n.blendEquationSeparate(St[Ee],St[Ie]),m=Ee,M=Ie),(j!==E||ne!==w||Ce!==L||mt!==A)&&(n.blendFuncSeparate($t[j],$t[ne],$t[Ce],$t[mt]),E=j,w=ne,L=Ce,A=mt),(dn.equals(P)===!1||Bn!==I)&&(n.blendColor(dn.r,dn.g,dn.b,Bn),P.copy(dn),I=Bn),v=U,_=!1}function Fn(U,Ee){U.side===ut?Ye(n.CULL_FACE):ye(n.CULL_FACE);let j=U.side===Nn;Ee&&(j=!j),Et(j),U.blending===ui&&U.transparent===!1?N(Mn):N(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let ne=U.stencilWrite;a.setTest(ne),ne&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),qt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ye(n.SAMPLE_ALPHA_TO_COVERAGE):Ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function Et(U){b!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),b=U)}function wt(U){U!==gM?(ye(n.CULL_FACE),U!==H&&(U===Um?n.cullFace(n.BACK):U===vM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ye(n.CULL_FACE),H=U}function Qe(U){U!==O&&(q&&n.lineWidth(U),O=U)}function qt(U,Ee,j){U?(ye(n.POLYGON_OFFSET_FILL),(F!==Ee||W!==j)&&(n.polygonOffset(Ee,j),F=Ee,W=j)):Ye(n.POLYGON_OFFSET_FILL)}function Ze(U){U?ye(n.SCISSOR_TEST):Ye(n.SCISSOR_TEST)}function D(U){U===void 0&&(U=n.TEXTURE0+te-1),ue!==U&&(n.activeTexture(U),ue=U)}function T(U,Ee,j){j===void 0&&(ue===null?j=n.TEXTURE0+te-1:j=ue);let ne=Te[j];ne===void 0&&(ne={type:void 0,texture:void 0},Te[j]=ne),(ne.type!==U||ne.texture!==Ee)&&(ue!==j&&(n.activeTexture(j),ue=j),n.bindTexture(U,Ee||Oe[U]),ne.type=U,ne.texture=Ee)}function B(){let U=Te[ue];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Be(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(U){Ht.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Ht.copy(U))}function Ne(U){J.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),J.copy(U))}function Rt(U,Ee){let j=c.get(Ee);j===void 0&&(j=new WeakMap,c.set(Ee,j));let ne=j.get(U);ne===void 0&&(ne=n.getUniformBlockIndex(Ee,U.name),j.set(U,ne))}function rt(U,Ee){let ne=c.get(Ee).get(U);l.get(Ee)!==ne&&(n.uniformBlockBinding(Ee,ne,U.__bindingPointIndex),l.set(Ee,ne))}function Ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ue=null,Te={},u={},f=new WeakMap,p=[],g=null,x=!1,v=null,m=null,E=null,w=null,M=null,L=null,A=null,P=new re(0,0,0),I=0,_=!1,b=null,H=null,O=null,F=null,W=null,Ht.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ye,disable:Ye,bindFramebuffer:$e,drawBuffers:st,useProgram:Kt,setBlending:N,setMaterial:Fn,setFlipSided:Et,setCullFace:wt,setLineWidth:Qe,setPolygonOffset:qt,setScissorTest:Ze,activeTexture:D,bindTexture:T,unbindTexture:B,compressedTexImage2D:ee,compressedTexImage3D:se,texImage2D:Ue,texImage3D:et,updateUBOMapping:Rt,uniformBlockBinding:rt,texStorage2D:Mt,texStorage3D:ce,texSubImage2D:Q,texSubImage3D:Be,compressedTexSubImage2D:we,compressedTexSubImage3D:Ae,scissor:it,viewport:Ne,reset:Ut}}function Dg(n,e,t,i){let s=ZS(i);switch(t){case Qg:return n*e;case e1:return n*e;case t1:return n*e*2;case dp:return n*e/s.components*s.byteLength;case up:return n*e/s.components*s.byteLength;case n1:return n*e*2/s.components*s.byteLength;case fp:return n*e*2/s.components*s.byteLength;case $g:return n*e*3/s.components*s.byteLength;case di:return n*e*4/s.components*s.byteLength;case pp:return n*e*4/s.components*s.byteLength;case ih:case sh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case rh:case oh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wu:case qu:return Math.max(n,16)*Math.max(e,8)/4;case Vu:case Xu:return Math.max(n,8)*Math.max(e,8)/2;case Yu:case ju:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ku:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ju:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Qu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case $u:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ef:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case tf:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case nf:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case sf:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case rf:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case of:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case af:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case lf:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case cf:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case hf:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ah:case df:case uf:return Math.ceil(n/4)*Math.ceil(e/4)*16;case i1:case ff:return Math.ceil(n/4)*Math.ceil(e/4)*8;case pf:case mf:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ZS(n){switch(n){case si:case Zg:return{byteLength:1,components:1};case El:case Kg:case bn:return{byteLength:2,components:1};case cp:case hp:return{byteLength:2,components:4};case Qr:case lp:case rs:return{byteLength:4,components:1};case Jg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function KS(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $,d=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,T){return p?new OffscreenCanvas(D,T):hh("canvas")}function x(D,T,B){let ee=1,se=Ze(D);if((se.width>B||se.height>B)&&(ee=B/Math.max(se.width,se.height)),ee<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let Q=Math.floor(ee*se.width),Be=Math.floor(ee*se.height);u===void 0&&(u=g(Q,Be));let we=T?g(Q,Be):u;return we.width=Q,we.height=Be,we.getContext("2d").drawImage(D,0,0,Q,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Q+"x"+Be+")."),we}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),D;return D}function v(D){return D.generateMipmaps}function m(D){n.generateMipmap(D)}function E(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(D,T,B,ee,se=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Q=T;if(T===n.RED&&(B===n.FLOAT&&(Q=n.R32F),B===n.HALF_FLOAT&&(Q=n.R16F),B===n.UNSIGNED_BYTE&&(Q=n.R8)),T===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Q=n.R8UI),B===n.UNSIGNED_SHORT&&(Q=n.R16UI),B===n.UNSIGNED_INT&&(Q=n.R32UI),B===n.BYTE&&(Q=n.R8I),B===n.SHORT&&(Q=n.R16I),B===n.INT&&(Q=n.R32I)),T===n.RG&&(B===n.FLOAT&&(Q=n.RG32F),B===n.HALF_FLOAT&&(Q=n.RG16F),B===n.UNSIGNED_BYTE&&(Q=n.RG8)),T===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Q=n.RG8UI),B===n.UNSIGNED_SHORT&&(Q=n.RG16UI),B===n.UNSIGNED_INT&&(Q=n.RG32UI),B===n.BYTE&&(Q=n.RG8I),B===n.SHORT&&(Q=n.RG16I),B===n.INT&&(Q=n.RG32I)),T===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),B===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),B===n.UNSIGNED_INT&&(Q=n.RGB32UI),B===n.BYTE&&(Q=n.RGB8I),B===n.SHORT&&(Q=n.RGB16I),B===n.INT&&(Q=n.RGB32I)),T===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),B===n.UNSIGNED_INT&&(Q=n.RGBA32UI),B===n.BYTE&&(Q=n.RGBA8I),B===n.SHORT&&(Q=n.RGBA16I),B===n.INT&&(Q=n.RGBA32I)),T===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),T===n.RGBA){let Be=se?Uh:Ct.getTransfer(ee);B===n.FLOAT&&(Q=n.RGBA32F),B===n.HALF_FLOAT&&(Q=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Q=Be===Gt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function M(D,T){let B;return D?T===null||T===Qr||T===ur?B=n.DEPTH24_STENCIL8:T===rs?B=n.DEPTH32F_STENCIL8:T===El&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Qr||T===ur?B=n.DEPTH_COMPONENT24:T===rs?B=n.DEPTH_COMPONENT32F:T===El&&(B=n.DEPTH_COMPONENT16),B}function L(D,T){return v(D)===!0||D.isFramebufferTexture&&D.minFilter!==pn&&D.minFilter!==Si?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function A(D){let T=D.target;T.removeEventListener("dispose",A),I(T),T.isVideoTexture&&d.delete(T)}function P(D){let T=D.target;T.removeEventListener("dispose",P),b(T)}function I(D){let T=i.get(D);if(T.__webglInit===void 0)return;let B=D.source,ee=f.get(B);if(ee){let se=ee[T.__cacheKey];se.usedTimes--,se.usedTimes===0&&_(D),Object.keys(ee).length===0&&f.delete(B)}i.remove(D)}function _(D){let T=i.get(D);n.deleteTexture(T.__webglTexture);let B=D.source,ee=f.get(B);delete ee[T.__cacheKey],o.memory.textures--}function b(D){let T=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(T.__webglFramebuffer[ee]))for(let se=0;se<T.__webglFramebuffer[ee].length;se++)n.deleteFramebuffer(T.__webglFramebuffer[ee][se]);else n.deleteFramebuffer(T.__webglFramebuffer[ee]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[ee])}else{if(Array.isArray(T.__webglFramebuffer))for(let ee=0;ee<T.__webglFramebuffer.length;ee++)n.deleteFramebuffer(T.__webglFramebuffer[ee]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ee=0;ee<T.__webglColorRenderbuffer.length;ee++)T.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[ee]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let B=D.textures;for(let ee=0,se=B.length;ee<se;ee++){let Q=i.get(B[ee]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(B[ee])}i.remove(D)}let H=0;function O(){H=0}function F(){let D=H;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),H+=1,D}function W(D){let T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function te(D,T){let B=i.get(D);if(D.isVideoTexture&&Qe(D),D.isRenderTargetTexture===!1&&D.version>0&&B.__version!==D.version){let ee=D.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(B,D,T);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+T)}function q(D,T){let B=i.get(D);if(D.version>0&&B.__version!==D.version){J(B,D,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+T)}function le(D,T){let B=i.get(D);if(D.version>0&&B.__version!==D.version){J(B,D,T);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+T)}function Y(D,T){let B=i.get(D);if(D.version>0&&B.__version!==D.version){fe(B,D,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+T)}let ue={[$n]:n.REPEAT,[Kr]:n.CLAMP_TO_EDGE,[Gu]:n.MIRRORED_REPEAT},Te={[pn]:n.NEAREST,[UM]:n.NEAREST_MIPMAP_NEAREST,[Ac]:n.NEAREST_MIPMAP_LINEAR,[Si]:n.LINEAR,[Jd]:n.LINEAR_MIPMAP_NEAREST,[Jr]:n.LINEAR_MIPMAP_LINEAR},Fe={[OM]:n.NEVER,[XM]:n.ALWAYS,[FM]:n.LESS,[s1]:n.LEQUAL,[BM]:n.EQUAL,[WM]:n.GEQUAL,[GM]:n.GREATER,[VM]:n.NOTEQUAL};function ct(D,T){if(T.type===rs&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Si||T.magFilter===Jd||T.magFilter===Ac||T.magFilter===Jr||T.minFilter===Si||T.minFilter===Jd||T.minFilter===Ac||T.minFilter===Jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,ue[T.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,ue[T.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,ue[T.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,Te[T.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,Te[T.minFilter]),T.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,Fe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===pn||T.minFilter!==Ac&&T.minFilter!==Jr||T.type===rs&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Ht(D,T){let B=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",A));let ee=T.source,se=f.get(ee);se===void 0&&(se={},f.set(ee,se));let Q=W(T);if(Q!==D.__cacheKey){se[Q]===void 0&&(se[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),se[Q].usedTimes++;let Be=se[D.__cacheKey];Be!==void 0&&(se[D.__cacheKey].usedTimes--,Be.usedTimes===0&&_(T)),D.__cacheKey=Q,D.__webglTexture=se[Q].texture}return B}function J(D,T,B){let ee=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ee=n.TEXTURE_3D);let se=Ht(D,T),Q=T.source;t.bindTexture(ee,D.__webglTexture,n.TEXTURE0+B);let Be=i.get(Q);if(Q.version!==Be.__version||se===!0){t.activeTexture(n.TEXTURE0+B);let we=Ct.getPrimaries(Ct.workingColorSpace),Ae=T.colorSpace===lr?null:Ct.getPrimaries(T.colorSpace),Mt=T.colorSpace===lr||we===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let ce=x(T.image,!1,s.maxTextureSize);ce=qt(T,ce);let Ue=r.convert(T.format,T.colorSpace),et=r.convert(T.type),it=w(T.internalFormat,Ue,et,T.colorSpace,T.isVideoTexture);ct(ee,T);let Ne,Rt=T.mipmaps,rt=T.isVideoTexture!==!0,Ut=Be.__version===void 0||se===!0,U=Q.dataReady,Ee=L(T,ce);if(T.isDepthTexture)it=M(T.format===fr,T.type),Ut&&(rt?t.texStorage2D(n.TEXTURE_2D,1,it,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,it,ce.width,ce.height,0,Ue,et,null));else if(T.isDataTexture)if(Rt.length>0){rt&&Ut&&t.texStorage2D(n.TEXTURE_2D,Ee,it,Rt[0].width,Rt[0].height);for(let j=0,ne=Rt.length;j<ne;j++)Ne=Rt[j],rt?U&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,Ne.width,Ne.height,Ue,et,Ne.data):t.texImage2D(n.TEXTURE_2D,j,it,Ne.width,Ne.height,0,Ue,et,Ne.data);T.generateMipmaps=!1}else rt?(Ut&&t.texStorage2D(n.TEXTURE_2D,Ee,it,ce.width,ce.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,Ue,et,ce.data)):t.texImage2D(n.TEXTURE_2D,0,it,ce.width,ce.height,0,Ue,et,ce.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){rt&&Ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,it,Rt[0].width,Rt[0].height,ce.depth);for(let j=0,ne=Rt.length;j<ne;j++)if(Ne=Rt[j],T.format!==di)if(Ue!==null)if(rt){if(U)if(T.layerUpdates.size>0){let Ie=Dg(Ne.width,Ne.height,T.format,T.type);for(let Ce of T.layerUpdates){let mt=Ne.data.subarray(Ce*Ie/Ne.data.BYTES_PER_ELEMENT,(Ce+1)*Ie/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,Ce,Ne.width,Ne.height,1,Ue,mt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,Ne.width,Ne.height,ce.depth,Ue,Ne.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,it,Ne.width,Ne.height,ce.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,Ne.width,Ne.height,ce.depth,Ue,et,Ne.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,it,Ne.width,Ne.height,ce.depth,0,Ue,et,Ne.data)}else{rt&&Ut&&t.texStorage2D(n.TEXTURE_2D,Ee,it,Rt[0].width,Rt[0].height);for(let j=0,ne=Rt.length;j<ne;j++)Ne=Rt[j],T.format!==di?Ue!==null?rt?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,Ne.width,Ne.height,Ue,Ne.data):t.compressedTexImage2D(n.TEXTURE_2D,j,it,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?U&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,Ne.width,Ne.height,Ue,et,Ne.data):t.texImage2D(n.TEXTURE_2D,j,it,Ne.width,Ne.height,0,Ue,et,Ne.data)}else if(T.isDataArrayTexture)if(rt){if(Ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,it,ce.width,ce.height,ce.depth),U)if(T.layerUpdates.size>0){let j=Dg(ce.width,ce.height,T.format,T.type);for(let ne of T.layerUpdates){let Ie=ce.data.subarray(ne*j/ce.data.BYTES_PER_ELEMENT,(ne+1)*j/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,ce.width,ce.height,1,Ue,et,Ie)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Ue,et,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,it,ce.width,ce.height,ce.depth,0,Ue,et,ce.data);else if(T.isData3DTexture)rt?(Ut&&t.texStorage3D(n.TEXTURE_3D,Ee,it,ce.width,ce.height,ce.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Ue,et,ce.data)):t.texImage3D(n.TEXTURE_3D,0,it,ce.width,ce.height,ce.depth,0,Ue,et,ce.data);else if(T.isFramebufferTexture){if(Ut)if(rt)t.texStorage2D(n.TEXTURE_2D,Ee,it,ce.width,ce.height);else{let j=ce.width,ne=ce.height;for(let Ie=0;Ie<Ee;Ie++)t.texImage2D(n.TEXTURE_2D,Ie,it,j,ne,0,Ue,et,null),j>>=1,ne>>=1}}else if(Rt.length>0){if(rt&&Ut){let j=Ze(Rt[0]);t.texStorage2D(n.TEXTURE_2D,Ee,it,j.width,j.height)}for(let j=0,ne=Rt.length;j<ne;j++)Ne=Rt[j],rt?U&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,Ue,et,Ne):t.texImage2D(n.TEXTURE_2D,j,it,Ue,et,Ne);T.generateMipmaps=!1}else if(rt){if(Ut){let j=Ze(ce);t.texStorage2D(n.TEXTURE_2D,Ee,it,j.width,j.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ue,et,ce)}else t.texImage2D(n.TEXTURE_2D,0,it,Ue,et,ce);v(T)&&m(ee),Be.__version=Q.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function fe(D,T,B){if(T.image.length!==6)return;let ee=Ht(D,T),se=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+B);let Q=i.get(se);if(se.version!==Q.__version||ee===!0){t.activeTexture(n.TEXTURE0+B);let Be=Ct.getPrimaries(Ct.workingColorSpace),we=T.colorSpace===lr?null:Ct.getPrimaries(T.colorSpace),Ae=T.colorSpace===lr||Be===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let Mt=T.isCompressedTexture||T.image[0].isCompressedTexture,ce=T.image[0]&&T.image[0].isDataTexture,Ue=[];for(let ne=0;ne<6;ne++)!Mt&&!ce?Ue[ne]=x(T.image[ne],!0,s.maxCubemapSize):Ue[ne]=ce?T.image[ne].image:T.image[ne],Ue[ne]=qt(T,Ue[ne]);let et=Ue[0],it=r.convert(T.format,T.colorSpace),Ne=r.convert(T.type),Rt=w(T.internalFormat,it,Ne,T.colorSpace),rt=T.isVideoTexture!==!0,Ut=Q.__version===void 0||ee===!0,U=se.dataReady,Ee=L(T,et);ct(n.TEXTURE_CUBE_MAP,T);let j;if(Mt){rt&&Ut&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Rt,et.width,et.height);for(let ne=0;ne<6;ne++){j=Ue[ne].mipmaps;for(let Ie=0;Ie<j.length;Ie++){let Ce=j[Ie];T.format!==di?it!==null?rt?U&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie,0,0,Ce.width,Ce.height,it,Ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie,Rt,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie,0,0,Ce.width,Ce.height,it,Ne,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie,Rt,Ce.width,Ce.height,0,it,Ne,Ce.data)}}}else{if(j=T.mipmaps,rt&&Ut){j.length>0&&Ee++;let ne=Ze(Ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Rt,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(ce){rt?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ue[ne].width,Ue[ne].height,it,Ne,Ue[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Rt,Ue[ne].width,Ue[ne].height,0,it,Ne,Ue[ne].data);for(let Ie=0;Ie<j.length;Ie++){let mt=j[Ie].image[ne].image;rt?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie+1,0,0,mt.width,mt.height,it,Ne,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie+1,Rt,mt.width,mt.height,0,it,Ne,mt.data)}}else{rt?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,it,Ne,Ue[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Rt,it,Ne,Ue[ne]);for(let Ie=0;Ie<j.length;Ie++){let Ce=j[Ie];rt?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie+1,0,0,it,Ne,Ce.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie+1,Rt,it,Ne,Ce.image[ne])}}}v(T)&&m(n.TEXTURE_CUBE_MAP),Q.__version=se.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Oe(D,T,B,ee,se,Q){let Be=r.convert(B.format,B.colorSpace),we=r.convert(B.type),Ae=w(B.internalFormat,Be,we,B.colorSpace),Mt=i.get(T),ce=i.get(B);if(ce.__renderTarget=T,!Mt.__hasExternalTextures){let Ue=Math.max(1,T.width>>Q),et=Math.max(1,T.height>>Q);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,Q,Ae,Ue,et,T.depth,0,Be,we,null):t.texImage2D(se,Q,Ae,Ue,et,0,Be,we,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),wt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,se,ce.__webglTexture,0,Et(T)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,se,ce.__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(D,T,B){if(n.bindRenderbuffer(n.RENDERBUFFER,D),T.depthBuffer){let ee=T.depthTexture,se=ee&&ee.isDepthTexture?ee.type:null,Q=M(T.stencilBuffer,se),Be=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=Et(T);wt(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,Q,T.width,T.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,Q,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Q,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Be,n.RENDERBUFFER,D)}else{let ee=T.textures;for(let se=0;se<ee.length;se++){let Q=ee[se],Be=r.convert(Q.format,Q.colorSpace),we=r.convert(Q.type),Ae=w(Q.internalFormat,Be,we,Q.colorSpace),Mt=Et(T);B&&wt(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt,Ae,T.width,T.height):wt(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt,Ae,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ye(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ee=i.get(T.depthTexture);ee.__renderTarget=T,(!ee.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),te(T.depthTexture,0);let se=ee.__webglTexture,Q=Et(T);if(T.depthTexture.format===Ko)wt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(T.depthTexture.format===fr)wt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function $e(D){let T=i.get(D),B=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){let ee=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ee){let se=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ee.removeEventListener("dispose",se)};ee.addEventListener("dispose",se),T.__depthDisposeCallback=se}T.__boundDepthTexture=ee}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ye(T.__webglFramebuffer,D)}else if(B){T.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ee]),T.__webglDepthbuffer[ee]===void 0)T.__webglDepthbuffer[ee]=n.createRenderbuffer(),ye(T.__webglDepthbuffer[ee],D,!1);else{let se=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=T.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),ye(T.__webglDepthbuffer,D,!1);else{let ee=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,se)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function st(D,T,B){let ee=i.get(D);T!==void 0&&Oe(ee.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&$e(D)}function Kt(D){let T=D.texture,B=i.get(D),ee=i.get(T);D.addEventListener("dispose",P);let se=D.textures,Q=D.isWebGLCubeRenderTarget===!0,Be=se.length>1;if(Be||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=T.version,o.memory.textures++),Q){B.__webglFramebuffer=[];for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer[we]=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)B.__webglFramebuffer[we][Ae]=n.createFramebuffer()}else B.__webglFramebuffer[we]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer=[];for(let we=0;we<T.mipmaps.length;we++)B.__webglFramebuffer[we]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Be)for(let we=0,Ae=se.length;we<Ae;we++){let Mt=i.get(se[we]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=n.createTexture(),o.memory.textures++)}if(D.samples>0&&wt(D)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let we=0;we<se.length;we++){let Ae=se[we];B.__webglColorRenderbuffer[we]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[we]);let Mt=r.convert(Ae.format,Ae.colorSpace),ce=r.convert(Ae.type),Ue=w(Ae.internalFormat,Mt,ce,Ae.colorSpace,D.isXRRenderTarget===!0),et=Et(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,et,Ue,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,B.__webglColorRenderbuffer[we])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ye(B.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),ct(n.TEXTURE_CUBE_MAP,T);for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ae=0;Ae<T.mipmaps.length;Ae++)Oe(B.__webglFramebuffer[we][Ae],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ae);else Oe(B.__webglFramebuffer[we],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);v(T)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let we=0,Ae=se.length;we<Ae;we++){let Mt=se[we],ce=i.get(Mt);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),ct(n.TEXTURE_2D,Mt),Oe(B.__webglFramebuffer,D,Mt,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,0),v(Mt)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let we=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(we=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(we,ee.__webglTexture),ct(we,T),T.mipmaps&&T.mipmaps.length>0)for(let Ae=0;Ae<T.mipmaps.length;Ae++)Oe(B.__webglFramebuffer[Ae],D,T,n.COLOR_ATTACHMENT0,we,Ae);else Oe(B.__webglFramebuffer,D,T,n.COLOR_ATTACHMENT0,we,0);v(T)&&m(we),t.unbindTexture()}D.depthBuffer&&$e(D)}function St(D){let T=D.textures;for(let B=0,ee=T.length;B<ee;B++){let se=T[B];if(v(se)){let Q=E(D),Be=i.get(se).__webglTexture;t.bindTexture(Q,Be),m(Q),t.unbindTexture()}}}let $t=[],N=[];function Fn(D){if(D.samples>0){if(wt(D)===!1){let T=D.textures,B=D.width,ee=D.height,se=n.COLOR_BUFFER_BIT,Q=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Be=i.get(D),we=T.length>1;if(we)for(let Ae=0;Ae<T.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Ae=0;Ae<T.length;Ae++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),we){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Be.__webglColorRenderbuffer[Ae]);let Mt=i.get(T[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Mt,0)}n.blitFramebuffer(0,0,B,ee,0,0,B,ee,se,n.NEAREST),l===!0&&($t.length=0,N.length=0,$t.push(n.COLOR_ATTACHMENT0+Ae),D.depthBuffer&&D.resolveDepthBuffer===!1&&($t.push(Q),N.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$t))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),we)for(let Ae=0;Ae<T.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,Be.__webglColorRenderbuffer[Ae]);let Mt=i.get(T[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,Mt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){let T=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Et(D){return Math.min(s.maxSamples,D.samples)}function wt(D){let T=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Qe(D){let T=o.render.frame;d.get(D)!==T&&(d.set(D,T),D.update())}function qt(D,T){let B=D.colorSpace,ee=D.format,se=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||B!==ua&&B!==lr&&(Ct.getTransfer(B)===Gt?(ee!==di||se!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),T}function Ze(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=te,this.setTexture2DArray=q,this.setTexture3D=le,this.setTextureCube=Y,this.rebindTextures=st,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Fn,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=wt}function JS(n,e){function t(i,s=lr){let r,o=Ct.getTransfer(s);if(i===si)return n.UNSIGNED_BYTE;if(i===cp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===hp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Jg)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zg)return n.BYTE;if(i===Kg)return n.SHORT;if(i===El)return n.UNSIGNED_SHORT;if(i===lp)return n.INT;if(i===Qr)return n.UNSIGNED_INT;if(i===rs)return n.FLOAT;if(i===bn)return n.HALF_FLOAT;if(i===Qg)return n.ALPHA;if(i===$g)return n.RGB;if(i===di)return n.RGBA;if(i===e1)return n.LUMINANCE;if(i===t1)return n.LUMINANCE_ALPHA;if(i===Ko)return n.DEPTH_COMPONENT;if(i===fr)return n.DEPTH_STENCIL;if(i===dp)return n.RED;if(i===up)return n.RED_INTEGER;if(i===n1)return n.RG;if(i===fp)return n.RG_INTEGER;if(i===pp)return n.RGBA_INTEGER;if(i===ih||i===sh||i===rh||i===oh)if(o===Gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ih)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sh)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rh)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oh)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ih)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sh)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rh)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oh)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vu||i===Wu||i===Xu||i===qu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Vu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yu||i===ju||i===Zu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Yu||i===ju)return o===Gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Zu)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ku||i===Ju||i===Qu||i===$u||i===ef||i===tf||i===nf||i===sf||i===rf||i===of||i===af||i===lf||i===cf||i===hf)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ku)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ju)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qu)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$u)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ef)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tf)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===nf)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sf)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rf)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===of)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===af)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===lf)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cf)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hf)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ah||i===df||i===uf)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ah)return o===Gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===df)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uf)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===i1||i===ff||i===pf||i===mf)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ah)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ff)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pf)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===mf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ur?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var If=class extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ae=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},QS={type:"move"},xl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let v=t.getJointPose(x,i),m=this._getHandJoint(c,x);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}let d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=d.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(QS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ae;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},$S=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e_=`
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

}`,Lf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new Cn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ot({vertexShader:$S,fragmentShader:e_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Z(new In(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Df=class extends pr{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,f=null,p=null,g=null,x=new Lf,v=t.getContextAttributes(),m=null,E=null,w=[],M=[],L=new $,A=null,P=new fn;P.viewport=new Vt;let I=new fn;I.viewport=new Vt;let _=[P,I],b=new If,H=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let fe=w[J];return fe===void 0&&(fe=new xl,w[J]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(J){let fe=w[J];return fe===void 0&&(fe=new xl,w[J]=fe),fe.getGripSpace()},this.getHand=function(J){let fe=w[J];return fe===void 0&&(fe=new xl,w[J]=fe),fe.getHandSpace()};function F(J){let fe=M.indexOf(J.inputSource);if(fe===-1)return;let Oe=w[fe];Oe!==void 0&&(Oe.update(J.inputSource,J.frame,c||o),Oe.dispatchEvent({type:J.type,data:J.inputSource}))}function W(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",te);for(let J=0;J<w.length;J++){let fe=M[J];fe!==null&&(M[J]=null,w[J].disconnect(fe))}H=null,O=null,x.reset(),e.setRenderTarget(m),p=null,f=null,u=null,s=null,E=null,Ht.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",W),s.addEventListener("inputsourceschange",te),v.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){let fe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new ln(p.framebufferWidth,p.framebufferHeight,{format:di,type:si,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let fe=null,Oe=null,ye=null;v.depth&&(ye=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=v.stencil?fr:Ko,Oe=v.stencil?ur:Qr);let Ye={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Ye),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new ln(f.textureWidth,f.textureHeight,{format:di,type:si,depthTexture:new oa(f.textureWidth,f.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ht.setContext(s),Ht.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function te(J){for(let fe=0;fe<J.removed.length;fe++){let Oe=J.removed[fe],ye=M.indexOf(Oe);ye>=0&&(M[ye]=null,w[ye].disconnect(Oe))}for(let fe=0;fe<J.added.length;fe++){let Oe=J.added[fe],ye=M.indexOf(Oe);if(ye===-1){for(let $e=0;$e<w.length;$e++)if($e>=M.length){M.push(Oe),ye=$e;break}else if(M[$e]===null){M[$e]=Oe,ye=$e;break}if(ye===-1)break}let Ye=w[ye];Ye&&Ye.connect(Oe)}}let q=new S,le=new S;function Y(J,fe,Oe){q.setFromMatrixPosition(fe.matrixWorld),le.setFromMatrixPosition(Oe.matrixWorld);let ye=q.distanceTo(le),Ye=fe.projectionMatrix.elements,$e=Oe.projectionMatrix.elements,st=Ye[14]/(Ye[10]-1),Kt=Ye[14]/(Ye[10]+1),St=(Ye[9]+1)/Ye[5],$t=(Ye[9]-1)/Ye[5],N=(Ye[8]-1)/Ye[0],Fn=($e[8]+1)/$e[0],Et=st*N,wt=st*Fn,Qe=ye/(-N+Fn),qt=Qe*-N;if(fe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(qt),J.translateZ(Qe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ye[10]===-1)J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{let Ze=st+Qe,D=Kt+Qe,T=Et-qt,B=wt+(ye-qt),ee=St*Kt/D*Ze,se=$t*Kt/D*Ze;J.projectionMatrix.makePerspective(T,B,ee,se,Ze,D),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ue(J,fe){fe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(fe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let fe=J.near,Oe=J.far;x.texture!==null&&(x.depthNear>0&&(fe=x.depthNear),x.depthFar>0&&(Oe=x.depthFar)),b.near=I.near=P.near=fe,b.far=I.far=P.far=Oe,(H!==b.near||O!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),H=b.near,O=b.far),P.layers.mask=J.layers.mask|2,I.layers.mask=J.layers.mask|4,b.layers.mask=P.layers.mask|I.layers.mask;let ye=J.parent,Ye=b.cameras;ue(b,ye);for(let $e=0;$e<Ye.length;$e++)ue(Ye[$e],ye);Ye.length===2?Y(b,P,I):b.projectionMatrix.copy(P.projectionMatrix),Te(J,b,ye)};function Te(J,fe,Oe){Oe===null?J.matrix.copy(fe.matrixWorld):(J.matrix.copy(Oe.matrixWorld),J.matrix.invert(),J.matrix.multiply(fe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=na*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let Fe=null;function ct(J,fe){if(d=fe.getViewerPose(c||o),g=fe,d!==null){let Oe=d.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let ye=!1;Oe.length!==b.cameras.length&&(b.cameras.length=0,ye=!0);for(let $e=0;$e<Oe.length;$e++){let st=Oe[$e],Kt=null;if(p!==null)Kt=p.getViewport(st);else{let $t=u.getViewSubImage(f,st);Kt=$t.viewport,$e===0&&(e.setRenderTargetTextures(E,$t.colorTexture,f.ignoreDepthValues?void 0:$t.depthStencilTexture),e.setRenderTarget(E))}let St=_[$e];St===void 0&&(St=new fn,St.layers.enable($e),St.viewport=new Vt,_[$e]=St),St.matrix.fromArray(st.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(st.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),$e===0&&(b.matrix.copy(St.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ye===!0&&b.cameras.push(St)}let Ye=s.enabledFeatures;if(Ye&&Ye.includes("depth-sensing")){let $e=u.getDepthInformation(Oe[0]);$e&&$e.isValid&&$e.texture&&x.init(e,$e,s.renderState)}}for(let Oe=0;Oe<w.length;Oe++){let ye=M[Oe],Ye=w[Oe];ye!==null&&Ye!==void 0&&Ye.update(ye,fe,c||o)}Fe&&Fe(J,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),g=null}let Ht=new l1;Ht.setAnimationLoop(ct),this.setAnimationLoop=function(J){Fe=J},this.dispose=function(){}}},Yr=new Pn,t_=new xt;function n_(n,e){function t(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function i(v,m){m.color.getRGB(v.fogColor.value,a1(n)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function s(v,m,E,w,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(v,m):m.isMeshToonMaterial?(r(v,m),u(v,m)):m.isMeshPhongMaterial?(r(v,m),d(v,m)):m.isMeshStandardMaterial?(r(v,m),f(v,m),m.isMeshPhysicalMaterial&&p(v,m,M)):m.isMeshMatcapMaterial?(r(v,m),g(v,m)):m.isMeshDepthMaterial?r(v,m):m.isMeshDistanceMaterial?(r(v,m),x(v,m)):m.isMeshNormalMaterial?r(v,m):m.isLineBasicMaterial?(o(v,m),m.isLineDashedMaterial&&a(v,m)):m.isPointsMaterial?l(v,m,E,w):m.isSpriteMaterial?c(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,t(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===Nn&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,t(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===Nn&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,t(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,t(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);let E=e.get(m),w=E.envMap,M=E.envMapRotation;w&&(v.envMap.value=w,Yr.copy(M),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),v.envMapRotation.value.setFromMatrix4(t_.makeRotationFromEuler(Yr)),v.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,v.aoMapTransform))}function o(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform))}function a(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function l(v,m,E,w){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*E,v.scale.value=w*.5,m.map&&(v.map.value=m.map,t(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function c(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function d(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function u(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function f(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function p(v,m,E){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Nn&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=E.texture,v.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,v.specularIntensityMapTransform))}function g(v,m){m.matcap&&(v.matcap.value=m.matcap)}function x(v,m){let E=e.get(m).light;v.referencePosition.value.setFromMatrixPosition(E.matrixWorld),v.nearDistance.value=E.shadow.camera.near,v.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function i_(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,w){let M=w.program;i.uniformBlockBinding(E,M)}function c(E,w){let M=s[E.id];M===void 0&&(g(E),M=d(E),s[E.id]=M,E.addEventListener("dispose",v));let L=w.program;i.updateUBOMapping(E,L);let A=e.render.frame;r[E.id]!==A&&(f(E),r[E.id]=A)}function d(E){let w=u();E.__bindingPointIndex=w;let M=n.createBuffer(),L=E.__size,A=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,L,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,M),M}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let w=s[E.id],M=E.uniforms,L=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let A=0,P=M.length;A<P;A++){let I=Array.isArray(M[A])?M[A]:[M[A]];for(let _=0,b=I.length;_<b;_++){let H=I[_];if(p(H,A,_,L)===!0){let O=H.__offset,F=Array.isArray(H.value)?H.value:[H.value],W=0;for(let te=0;te<F.length;te++){let q=F[te],le=x(q);typeof q=="number"||typeof q=="boolean"?(H.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,O+W,H.__data)):q.isMatrix3?(H.__data[0]=q.elements[0],H.__data[1]=q.elements[1],H.__data[2]=q.elements[2],H.__data[3]=0,H.__data[4]=q.elements[3],H.__data[5]=q.elements[4],H.__data[6]=q.elements[5],H.__data[7]=0,H.__data[8]=q.elements[6],H.__data[9]=q.elements[7],H.__data[10]=q.elements[8],H.__data[11]=0):(q.toArray(H.__data,W),W+=le.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,H.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,w,M,L){let A=E.value,P=w+"_"+M;if(L[P]===void 0)return typeof A=="number"||typeof A=="boolean"?L[P]=A:L[P]=A.clone(),!0;{let I=L[P];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return L[P]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(E){let w=E.uniforms,M=0,L=16;for(let P=0,I=w.length;P<I;P++){let _=Array.isArray(w[P])?w[P]:[w[P]];for(let b=0,H=_.length;b<H;b++){let O=_[b],F=Array.isArray(O.value)?O.value:[O.value];for(let W=0,te=F.length;W<te;W++){let q=F[W],le=x(q),Y=M%L,ue=Y%le.boundary,Te=Y+ue;M+=ue,Te!==0&&L-Te<le.storage&&(M+=L-Te),O.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=le.storage}}}let A=M%L;return A>0&&(M+=L-A),E.__size=M,E.__cache={},this}function x(E){let w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function v(E){let w=E.target;w.removeEventListener("dispose",v);let M=o.indexOf(w.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function m(){for(let E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var aa=class{constructor(e={}){let{canvas:t=l2(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),v=null,m=null,E=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this.toneMapping=hr,this.toneMappingExposure=1;let M=this,L=!1,A=0,P=0,I=null,_=-1,b=null,H=new Vt,O=new Vt,F=null,W=new re(0),te=0,q=t.width,le=t.height,Y=1,ue=null,Te=null,Fe=new Vt(0,0,q,le),ct=new Vt(0,0,q,le),Ht=!1,J=new wl,fe=!1,Oe=!1,ye=new xt,Ye=new xt,$e=new S,st=new Vt,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},St=!1;function $t(){return I===null?Y:1}let N=i;function Fn(R,z){return t.getContext(R,z)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ep}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),N===null){let z="webgl2";if(N=Fn(z,R),N===null)throw Fn(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Et,wt,Qe,qt,Ze,D,T,B,ee,se,Q,Be,we,Ae,Mt,ce,Ue,et,it,Ne,Rt,rt,Ut,U;function Ee(){Et=new yb(N),Et.init(),rt=new JS(N,Et),wt=new fb(N,Et,e,rt),Qe=new jS(N,Et),wt.reverseDepthBuffer&&f&&Qe.buffers.depth.setReversed(!0),qt=new wb(N),Ze=new US,D=new KS(N,Et,Qe,Ze,wt,rt,qt),T=new mb(M),B=new xb(M),ee=new C2(N),Ut=new db(N,ee),se=new Mb(N,ee,qt,Ut),Q=new Sb(N,se,ee,qt),it=new bb(N,wt,D),ce=new pb(Ze),Be=new HS(M,T,B,Et,wt,Ut,ce),we=new n_(M,Ze),Ae=new zS,Mt=new VS(Et),et=new hb(M,T,B,Qe,Q,p,l),Ue=new qS(M,Q,wt),U=new i_(N,qt,wt,Qe),Ne=new ub(N,Et,qt),Rt=new Eb(N,Et,qt),qt.programs=Be.programs,M.capabilities=wt,M.extensions=Et,M.properties=Ze,M.renderLists=Ae,M.shadowMap=Ue,M.state=Qe,M.info=qt}Ee();let j=new Df(M,N);this.xr=j,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let R=Et.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Et.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(q,le,!1))},this.getSize=function(R){return R.set(q,le)},this.setSize=function(R,z,V=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=R,le=z,t.width=Math.floor(R*Y),t.height=Math.floor(z*Y),V===!0&&(t.style.width=R+"px",t.style.height=z+"px"),this.setViewport(0,0,R,z)},this.getDrawingBufferSize=function(R){return R.set(q*Y,le*Y).floor()},this.setDrawingBufferSize=function(R,z,V){q=R,le=z,Y=V,t.width=Math.floor(R*V),t.height=Math.floor(z*V),this.setViewport(0,0,R,z)},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(Fe)},this.setViewport=function(R,z,V,X){R.isVector4?Fe.set(R.x,R.y,R.z,R.w):Fe.set(R,z,V,X),Qe.viewport(H.copy(Fe).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(ct)},this.setScissor=function(R,z,V,X){R.isVector4?ct.set(R.x,R.y,R.z,R.w):ct.set(R,z,V,X),Qe.scissor(O.copy(ct).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(R){Qe.setScissorTest(Ht=R)},this.setOpaqueSort=function(R){ue=R},this.setTransparentSort=function(R){Te=R},this.getClearColor=function(R){return R.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(R=!0,z=!0,V=!0){let X=0;if(R){let k=!1;if(I!==null){let ge=I.texture.format;k=ge===pp||ge===fp||ge===up}if(k){let ge=I.texture.type,Pe=ge===si||ge===Qr||ge===El||ge===ur||ge===cp||ge===hp,Ve=et.getClearColor(),We=et.getClearAlpha(),ht=Ve.r,gt=Ve.g,Xe=Ve.b;Pe?(g[0]=ht,g[1]=gt,g[2]=Xe,g[3]=We,N.clearBufferuiv(N.COLOR,0,g)):(x[0]=ht,x[1]=gt,x[2]=Xe,x[3]=We,N.clearBufferiv(N.COLOR,0,x))}else X|=N.COLOR_BUFFER_BIT}z&&(X|=N.DEPTH_BUFFER_BIT),V&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),Ae.dispose(),Mt.dispose(),Ze.dispose(),T.dispose(),B.dispose(),Q.dispose(),Ut.dispose(),U.dispose(),Be.dispose(),j.dispose(),j.removeEventListener("sessionstart",Rm),j.removeEventListener("sessionend",Am),Br.stop()};function ne(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let R=qt.autoReset,z=Ue.enabled,V=Ue.autoUpdate,X=Ue.needsUpdate,k=Ue.type;Ee(),qt.autoReset=R,Ue.enabled=z,Ue.autoUpdate=V,Ue.needsUpdate=X,Ue.type=k}function Ce(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function mt(R){let z=R.target;z.removeEventListener("dispose",mt),dn(z)}function dn(R){Bn(R),Ze.remove(R)}function Bn(R){let z=Ze.get(R).programs;z!==void 0&&(z.forEach(function(V){Be.releaseProgram(V)}),R.isShaderMaterial&&Be.releaseShaderCache(R))}this.renderBufferDirect=function(R,z,V,X,k,ge){z===null&&(z=Kt);let Pe=k.isMesh&&k.matrixWorld.determinant()<0,Ve=fM(R,z,V,X,k);Qe.setMaterial(X,Pe);let We=V.index,ht=1;if(X.wireframe===!0){if(We=se.getWireframeAttribute(V),We===void 0)return;ht=2}let gt=V.drawRange,Xe=V.attributes.position,Nt=gt.start*ht,Jt=(gt.start+gt.count)*ht;ge!==null&&(Nt=Math.max(Nt,ge.start*ht),Jt=Math.min(Jt,(ge.start+ge.count)*ht)),We!==null?(Nt=Math.max(Nt,0),Jt=Math.min(Jt,We.count)):Xe!=null&&(Nt=Math.max(Nt,0),Jt=Math.min(Jt,Xe.count));let en=Jt-Nt;if(en<0||en===1/0)return;Ut.setup(k,X,Ve,V,We);let ii,Ft=Ne;if(We!==null&&(ii=ee.get(We),Ft=Rt,Ft.setIndex(ii)),k.isMesh)X.wireframe===!0?(Qe.setLineWidth(X.wireframeLinewidth*$t()),Ft.setMode(N.LINES)):Ft.setMode(N.TRIANGLES);else if(k.isLine){let je=X.linewidth;je===void 0&&(je=1),Qe.setLineWidth(je*$t()),k.isLineSegments?Ft.setMode(N.LINES):k.isLineLoop?Ft.setMode(N.LINE_LOOP):Ft.setMode(N.LINE_STRIP)}else k.isPoints?Ft.setMode(N.POINTS):k.isSprite&&Ft.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Ft.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))Ft.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let je=k._multiDrawStarts,Cs=k._multiDrawCounts,Bt=k._multiDrawCount,Vi=We?ee.get(We).bytesPerElement:1,Co=Ze.get(X).currentProgram.getUniforms();for(let li=0;li<Bt;li++)Co.setValue(N,"_gl_DrawID",li),Ft.render(je[li]/Vi,Cs[li])}else if(k.isInstancedMesh)Ft.renderInstances(Nt,en,k.count);else if(V.isInstancedBufferGeometry){let je=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Cs=Math.min(V.instanceCount,je);Ft.renderInstances(Nt,en,Cs)}else Ft.render(Nt,en)};function Yt(R,z,V){R.transparent===!0&&R.side===ut&&R.forceSinglePass===!1?(R.side=Nn,R.needsUpdate=!0,Rc(R,z,V),R.side=dr,R.needsUpdate=!0,Rc(R,z,V),R.side=ut):Rc(R,z,V)}this.compile=function(R,z,V=null){V===null&&(V=R),m=Mt.get(V),m.init(z),w.push(m),V.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),R!==V&&R.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();let X=new Set;return R.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let ge=k.material;if(ge)if(Array.isArray(ge))for(let Pe=0;Pe<ge.length;Pe++){let Ve=ge[Pe];Yt(Ve,V,k),X.add(Ve)}else Yt(ge,V,k),X.add(ge)}),w.pop(),m=null,X},this.compileAsync=function(R,z,V=null){let X=this.compile(R,z,V);return new Promise(k=>{function ge(){if(X.forEach(function(Pe){Ze.get(Pe).currentProgram.isReady()&&X.delete(Pe)}),X.size===0){k(R);return}setTimeout(ge,10)}Et.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Gi=null;function As(R){Gi&&Gi(R)}function Rm(){Br.stop()}function Am(){Br.start()}let Br=new l1;Br.setAnimationLoop(As),typeof self<"u"&&Br.setContext(self),this.setAnimationLoop=function(R){Gi=R,j.setAnimationLoop(R),R===null?Br.stop():Br.start()},j.addEventListener("sessionstart",Rm),j.addEventListener("sessionend",Am),this.render=function(R,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(z),z=j.getCamera()),R.isScene===!0&&R.onBeforeRender(M,R,z,I),m=Mt.get(R,w.length),m.init(z),w.push(m),Ye.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),J.setFromProjectionMatrix(Ye),Oe=this.localClippingEnabled,fe=ce.init(this.clippingPlanes,Oe),v=Ae.get(R,E.length),v.init(),E.push(v),j.enabled===!0&&j.isPresenting===!0){let ge=M.xr.getDepthSensingMesh();ge!==null&&Kd(ge,z,-1/0,M.sortObjects)}Kd(R,z,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(ue,Te),St=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,St&&et.addToRenderList(v,R),this.info.render.frame++,fe===!0&&ce.beginShadows();let V=m.state.shadowsArray;Ue.render(V,R,z),fe===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=v.opaque,k=v.transmissive;if(m.setupLights(),z.isArrayCamera){let ge=z.cameras;if(k.length>0)for(let Pe=0,Ve=ge.length;Pe<Ve;Pe++){let We=ge[Pe];Pm(X,k,R,We)}St&&et.render(R);for(let Pe=0,Ve=ge.length;Pe<Ve;Pe++){let We=ge[Pe];Cm(v,R,We,We.viewport)}}else k.length>0&&Pm(X,k,R,z),St&&et.render(R),Cm(v,R,z);I!==null&&(D.updateMultisampleRenderTarget(I),D.updateRenderTargetMipmap(I)),R.isScene===!0&&R.onAfterRender(M,R,z),Ut.resetDefaultState(),_=-1,b=null,w.pop(),w.length>0?(m=w[w.length-1],fe===!0&&ce.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,E.pop(),E.length>0?v=E[E.length-1]:v=null};function Kd(R,z,V,X){if(R.visible===!1)return;if(R.layers.test(z.layers)){if(R.isGroup)V=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(z);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){X&&st.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ye);let Pe=Q.update(R),Ve=R.material;Ve.visible&&v.push(R,Pe,Ve,V,st.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){let Pe=Q.update(R),Ve=R.material;if(X&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),st.copy(R.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),st.copy(Pe.boundingSphere.center)),st.applyMatrix4(R.matrixWorld).applyMatrix4(Ye)),Array.isArray(Ve)){let We=Pe.groups;for(let ht=0,gt=We.length;ht<gt;ht++){let Xe=We[ht],Nt=Ve[Xe.materialIndex];Nt&&Nt.visible&&v.push(R,Pe,Nt,V,st.z,Xe)}}else Ve.visible&&v.push(R,Pe,Ve,V,st.z,null)}}let ge=R.children;for(let Pe=0,Ve=ge.length;Pe<Ve;Pe++)Kd(ge[Pe],z,V,X)}function Cm(R,z,V,X){let k=R.opaque,ge=R.transmissive,Pe=R.transparent;m.setupLightsView(V),fe===!0&&ce.setGlobalState(M.clippingPlanes,V),X&&Qe.viewport(H.copy(X)),k.length>0&&Tc(k,z,V),ge.length>0&&Tc(ge,z,V),Pe.length>0&&Tc(Pe,z,V),Qe.buffers.depth.setTest(!0),Qe.buffers.depth.setMask(!0),Qe.buffers.color.setMask(!0),Qe.setPolygonOffset(!1)}function Pm(R,z,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new ln(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float")?bn:si,minFilter:Jr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));let ge=m.state.transmissionRenderTarget[X.id],Pe=X.viewport||H;ge.setSize(Pe.z,Pe.w);let Ve=M.getRenderTarget();M.setRenderTarget(ge),M.getClearColor(W),te=M.getClearAlpha(),te<1&&M.setClearColor(16777215,.5),M.clear(),St&&et.render(V);let We=M.toneMapping;M.toneMapping=hr;let ht=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),fe===!0&&ce.setGlobalState(M.clippingPlanes,X),Tc(R,V,X),D.updateMultisampleRenderTarget(ge),D.updateRenderTargetMipmap(ge),Et.has("WEBGL_multisampled_render_to_texture")===!1){let gt=!1;for(let Xe=0,Nt=z.length;Xe<Nt;Xe++){let Jt=z[Xe],en=Jt.object,ii=Jt.geometry,Ft=Jt.material,je=Jt.group;if(Ft.side===ut&&en.layers.test(X.layers)){let Cs=Ft.side;Ft.side=Nn,Ft.needsUpdate=!0,Im(en,V,X,ii,Ft,je),Ft.side=Cs,Ft.needsUpdate=!0,gt=!0}}gt===!0&&(D.updateMultisampleRenderTarget(ge),D.updateRenderTargetMipmap(ge))}M.setRenderTarget(Ve),M.setClearColor(W,te),ht!==void 0&&(X.viewport=ht),M.toneMapping=We}function Tc(R,z,V){let X=z.isScene===!0?z.overrideMaterial:null;for(let k=0,ge=R.length;k<ge;k++){let Pe=R[k],Ve=Pe.object,We=Pe.geometry,ht=X===null?Pe.material:X,gt=Pe.group;Ve.layers.test(V.layers)&&Im(Ve,z,V,We,ht,gt)}}function Im(R,z,V,X,k,ge){R.onBeforeRender(M,z,V,X,k,ge),R.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),k.onBeforeRender(M,z,V,X,R,ge),k.transparent===!0&&k.side===ut&&k.forceSinglePass===!1?(k.side=Nn,k.needsUpdate=!0,M.renderBufferDirect(V,z,X,k,R,ge),k.side=dr,k.needsUpdate=!0,M.renderBufferDirect(V,z,X,k,R,ge),k.side=ut):M.renderBufferDirect(V,z,X,k,R,ge),R.onAfterRender(M,z,V,X,k,ge)}function Rc(R,z,V){z.isScene!==!0&&(z=Kt);let X=Ze.get(R),k=m.state.lights,ge=m.state.shadowsArray,Pe=k.state.version,Ve=Be.getParameters(R,k.state,ge,z,V),We=Be.getProgramCacheKey(Ve),ht=X.programs;X.environment=R.isMeshStandardMaterial?z.environment:null,X.fog=z.fog,X.envMap=(R.isMeshStandardMaterial?B:T).get(R.envMap||X.environment),X.envMapRotation=X.environment!==null&&R.envMap===null?z.environmentRotation:R.envMapRotation,ht===void 0&&(R.addEventListener("dispose",mt),ht=new Map,X.programs=ht);let gt=ht.get(We);if(gt!==void 0){if(X.currentProgram===gt&&X.lightsStateVersion===Pe)return Dm(R,Ve),gt}else Ve.uniforms=Be.getUniforms(R),R.onBeforeCompile(Ve,M),gt=Be.acquireProgram(Ve,We),ht.set(We,gt),X.uniforms=Ve.uniforms;let Xe=X.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xe.clippingPlanes=ce.uniform),Dm(R,Ve),X.needsLights=mM(R),X.lightsStateVersion=Pe,X.needsLights&&(Xe.ambientLightColor.value=k.state.ambient,Xe.lightProbe.value=k.state.probe,Xe.directionalLights.value=k.state.directional,Xe.directionalLightShadows.value=k.state.directionalShadow,Xe.spotLights.value=k.state.spot,Xe.spotLightShadows.value=k.state.spotShadow,Xe.rectAreaLights.value=k.state.rectArea,Xe.ltc_1.value=k.state.rectAreaLTC1,Xe.ltc_2.value=k.state.rectAreaLTC2,Xe.pointLights.value=k.state.point,Xe.pointLightShadows.value=k.state.pointShadow,Xe.hemisphereLights.value=k.state.hemi,Xe.directionalShadowMap.value=k.state.directionalShadowMap,Xe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Xe.spotShadowMap.value=k.state.spotShadowMap,Xe.spotLightMatrix.value=k.state.spotLightMatrix,Xe.spotLightMap.value=k.state.spotLightMap,Xe.pointShadowMap.value=k.state.pointShadowMap,Xe.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=gt,X.uniformsList=null,gt}function Lm(R){if(R.uniformsList===null){let z=R.currentProgram.getUniforms();R.uniformsList=Qo.seqWithValue(z.seq,R.uniforms)}return R.uniformsList}function Dm(R,z){let V=Ze.get(R);V.outputColorSpace=z.outputColorSpace,V.batching=z.batching,V.batchingColor=z.batchingColor,V.instancing=z.instancing,V.instancingColor=z.instancingColor,V.instancingMorph=z.instancingMorph,V.skinning=z.skinning,V.morphTargets=z.morphTargets,V.morphNormals=z.morphNormals,V.morphColors=z.morphColors,V.morphTargetsCount=z.morphTargetsCount,V.numClippingPlanes=z.numClippingPlanes,V.numIntersection=z.numClipIntersection,V.vertexAlphas=z.vertexAlphas,V.vertexTangents=z.vertexTangents,V.toneMapping=z.toneMapping}function fM(R,z,V,X,k){z.isScene!==!0&&(z=Kt),D.resetTextureUnits();let ge=z.fog,Pe=X.isMeshStandardMaterial?z.environment:null,Ve=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ua,We=(X.isMeshStandardMaterial?B:T).get(X.envMap||Pe),ht=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,gt=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Xe=!!V.morphAttributes.position,Nt=!!V.morphAttributes.normal,Jt=!!V.morphAttributes.color,en=hr;X.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(en=M.toneMapping);let ii=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ft=ii!==void 0?ii.length:0,je=Ze.get(X),Cs=m.state.lights;if(fe===!0&&(Oe===!0||R!==b)){let Ei=R===b&&X.id===_;ce.setState(X,R,Ei)}let Bt=!1;X.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Cs.state.version||je.outputColorSpace!==Ve||k.isBatchedMesh&&je.batching===!1||!k.isBatchedMesh&&je.batching===!0||k.isBatchedMesh&&je.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&je.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&je.instancing===!1||!k.isInstancedMesh&&je.instancing===!0||k.isSkinnedMesh&&je.skinning===!1||!k.isSkinnedMesh&&je.skinning===!0||k.isInstancedMesh&&je.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&je.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&je.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&je.instancingMorph===!1&&k.morphTexture!==null||je.envMap!==We||X.fog===!0&&je.fog!==ge||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ce.numPlanes||je.numIntersection!==ce.numIntersection)||je.vertexAlphas!==ht||je.vertexTangents!==gt||je.morphTargets!==Xe||je.morphNormals!==Nt||je.morphColors!==Jt||je.toneMapping!==en||je.morphTargetsCount!==Ft)&&(Bt=!0):(Bt=!0,je.__version=X.version);let Vi=je.currentProgram;Bt===!0&&(Vi=Rc(X,z,k));let Co=!1,li=!1,nl=!1,tn=Vi.getUniforms(),is=je.uniforms;if(Qe.useProgram(Vi.program)&&(Co=!0,li=!0,nl=!0),X.id!==_&&(_=X.id,li=!0),Co||b!==R){Qe.buffers.depth.getReversed()?(ye.copy(R.projectionMatrix),h2(ye),d2(ye),tn.setValue(N,"projectionMatrix",ye)):tn.setValue(N,"projectionMatrix",R.projectionMatrix),tn.setValue(N,"viewMatrix",R.matrixWorldInverse);let er=tn.map.cameraPosition;er!==void 0&&er.setValue(N,$e.setFromMatrixPosition(R.matrixWorld)),wt.logarithmicDepthBuffer&&tn.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&tn.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,li=!0,nl=!0)}if(k.isSkinnedMesh){tn.setOptional(N,k,"bindMatrix"),tn.setOptional(N,k,"bindMatrixInverse");let Ei=k.skeleton;Ei&&(Ei.boneTexture===null&&Ei.computeBoneTexture(),tn.setValue(N,"boneTexture",Ei.boneTexture,D))}k.isBatchedMesh&&(tn.setOptional(N,k,"batchingTexture"),tn.setValue(N,"batchingTexture",k._matricesTexture,D),tn.setOptional(N,k,"batchingIdTexture"),tn.setValue(N,"batchingIdTexture",k._indirectTexture,D),tn.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&tn.setValue(N,"batchingColorTexture",k._colorsTexture,D));let il=V.morphAttributes;if((il.position!==void 0||il.normal!==void 0||il.color!==void 0)&&it.update(k,V,Vi),(li||je.receiveShadow!==k.receiveShadow)&&(je.receiveShadow=k.receiveShadow,tn.setValue(N,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(is.envMap.value=We,is.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&z.environment!==null&&(is.envMapIntensity.value=z.environmentIntensity),li&&(tn.setValue(N,"toneMappingExposure",M.toneMappingExposure),je.needsLights&&pM(is,nl),ge&&X.fog===!0&&we.refreshFogUniforms(is,ge),we.refreshMaterialUniforms(is,X,Y,le,m.state.transmissionRenderTarget[R.id]),Qo.upload(N,Lm(je),is,D)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Qo.upload(N,Lm(je),is,D),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&tn.setValue(N,"center",k.center),tn.setValue(N,"modelViewMatrix",k.modelViewMatrix),tn.setValue(N,"normalMatrix",k.normalMatrix),tn.setValue(N,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Ei=X.uniformsGroups;for(let er=0,tr=Ei.length;er<tr;er++){let Hm=Ei[er];U.update(Hm,Vi),U.bind(Hm,Vi)}}return Vi}function pM(R,z){R.ambientLightColor.needsUpdate=z,R.lightProbe.needsUpdate=z,R.directionalLights.needsUpdate=z,R.directionalLightShadows.needsUpdate=z,R.pointLights.needsUpdate=z,R.pointLightShadows.needsUpdate=z,R.spotLights.needsUpdate=z,R.spotLightShadows.needsUpdate=z,R.rectAreaLights.needsUpdate=z,R.hemisphereLights.needsUpdate=z}function mM(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,z,V){Ze.get(R.texture).__webglTexture=z,Ze.get(R.depthTexture).__webglTexture=V;let X=Ze.get(R);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=V===void 0,X.__autoAllocateDepthBuffer||Et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,z){let V=Ze.get(R);V.__webglFramebuffer=z,V.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(R,z=0,V=0){I=R,A=z,P=V;let X=!0,k=null,ge=!1,Pe=!1;if(R){let We=Ze.get(R);if(We.__useDefaultFramebuffer!==void 0)Qe.bindFramebuffer(N.FRAMEBUFFER,null),X=!1;else if(We.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(We.__hasExternalTextures)D.rebindTextures(R,Ze.get(R.texture).__webglTexture,Ze.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Xe=R.depthTexture;if(We.__boundDepthTexture!==Xe){if(Xe!==null&&Ze.has(Xe)&&(R.width!==Xe.image.width||R.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}let ht=R.texture;(ht.isData3DTexture||ht.isDataArrayTexture||ht.isCompressedArrayTexture)&&(Pe=!0);let gt=Ze.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(gt[z])?k=gt[z][V]:k=gt[z],ge=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?k=Ze.get(R).__webglMultisampledFramebuffer:Array.isArray(gt)?k=gt[V]:k=gt,H.copy(R.viewport),O.copy(R.scissor),F=R.scissorTest}else H.copy(Fe).multiplyScalar(Y).floor(),O.copy(ct).multiplyScalar(Y).floor(),F=Ht;if(Qe.bindFramebuffer(N.FRAMEBUFFER,k)&&X&&Qe.drawBuffers(R,k),Qe.viewport(H),Qe.scissor(O),Qe.setScissorTest(F),ge){let We=Ze.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+z,We.__webglTexture,V)}else if(Pe){let We=Ze.get(R.texture),ht=z||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,We.__webglTexture,V||0,ht)}_=-1},this.readRenderTargetPixels=function(R,z,V,X,k,ge,Pe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Ze.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ve=Ve[Pe]),Ve){Qe.bindFramebuffer(N.FRAMEBUFFER,Ve);try{let We=R.texture,ht=We.format,gt=We.type;if(!wt.textureFormatReadable(ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=R.width-X&&V>=0&&V<=R.height-k&&N.readPixels(z,V,X,k,rt.convert(ht),rt.convert(gt),ge)}finally{let We=I!==null?Ze.get(I).__webglFramebuffer:null;Qe.bindFramebuffer(N.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(R,z,V,X,k,ge,Pe){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Ze.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ve=Ve[Pe]),Ve){let We=R.texture,ht=We.format,gt=We.type;if(!wt.textureFormatReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=R.width-X&&V>=0&&V<=R.height-k){Qe.bindFramebuffer(N.FRAMEBUFFER,Ve);let Xe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Xe),N.bufferData(N.PIXEL_PACK_BUFFER,ge.byteLength,N.STREAM_READ),N.readPixels(z,V,X,k,rt.convert(ht),rt.convert(gt),0);let Nt=I!==null?Ze.get(I).__webglFramebuffer:null;Qe.bindFramebuffer(N.FRAMEBUFFER,Nt);let Jt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await c2(N,Jt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Xe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ge),N.deleteBuffer(Xe),N.deleteSync(Jt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,z=null,V=0){R.isTexture!==!0&&(pl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,R=arguments[1]);let X=Math.pow(2,-V),k=Math.floor(R.image.width*X),ge=Math.floor(R.image.height*X),Pe=z!==null?z.x:0,Ve=z!==null?z.y:0;D.setTexture2D(R,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,Pe,Ve,k,ge),Qe.unbindTexture()},this.copyTextureToTexture=function(R,z,V=null,X=null,k=0){R.isTexture!==!0&&(pl("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,R=arguments[1],z=arguments[2],k=arguments[3]||0,V=null);let ge,Pe,Ve,We,ht,gt,Xe,Nt,Jt,en=R.isCompressedTexture?R.mipmaps[k]:R.image;V!==null?(ge=V.max.x-V.min.x,Pe=V.max.y-V.min.y,Ve=V.isBox3?V.max.z-V.min.z:1,We=V.min.x,ht=V.min.y,gt=V.isBox3?V.min.z:0):(ge=en.width,Pe=en.height,Ve=en.depth||1,We=0,ht=0,gt=0),X!==null?(Xe=X.x,Nt=X.y,Jt=X.z):(Xe=0,Nt=0,Jt=0);let ii=rt.convert(z.format),Ft=rt.convert(z.type),je;z.isData3DTexture?(D.setTexture3D(z,0),je=N.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(D.setTexture2DArray(z,0),je=N.TEXTURE_2D_ARRAY):(D.setTexture2D(z,0),je=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);let Cs=N.getParameter(N.UNPACK_ROW_LENGTH),Bt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Vi=N.getParameter(N.UNPACK_SKIP_PIXELS),Co=N.getParameter(N.UNPACK_SKIP_ROWS),li=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,en.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,en.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,We),N.pixelStorei(N.UNPACK_SKIP_ROWS,ht),N.pixelStorei(N.UNPACK_SKIP_IMAGES,gt);let nl=R.isDataArrayTexture||R.isData3DTexture,tn=z.isDataArrayTexture||z.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let is=Ze.get(R),il=Ze.get(z),Ei=Ze.get(is.__renderTarget),er=Ze.get(il.__renderTarget);Qe.bindFramebuffer(N.READ_FRAMEBUFFER,Ei.__webglFramebuffer),Qe.bindFramebuffer(N.DRAW_FRAMEBUFFER,er.__webglFramebuffer);for(let tr=0;tr<Ve;tr++)nl&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ze.get(R).__webglTexture,k,gt+tr),R.isDepthTexture?(tn&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ze.get(z).__webglTexture,k,Jt+tr),N.blitFramebuffer(We,ht,ge,Pe,Xe,Nt,ge,Pe,N.DEPTH_BUFFER_BIT,N.NEAREST)):tn?N.copyTexSubImage3D(je,k,Xe,Nt,Jt+tr,We,ht,ge,Pe):N.copyTexSubImage2D(je,k,Xe,Nt,Jt+tr,We,ht,ge,Pe);Qe.bindFramebuffer(N.READ_FRAMEBUFFER,null),Qe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else tn?R.isDataTexture||R.isData3DTexture?N.texSubImage3D(je,k,Xe,Nt,Jt,ge,Pe,Ve,ii,Ft,en.data):z.isCompressedArrayTexture?N.compressedTexSubImage3D(je,k,Xe,Nt,Jt,ge,Pe,Ve,ii,en.data):N.texSubImage3D(je,k,Xe,Nt,Jt,ge,Pe,Ve,ii,Ft,en):R.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,k,Xe,Nt,ge,Pe,ii,Ft,en.data):R.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,k,Xe,Nt,en.width,en.height,ii,en.data):N.texSubImage2D(N.TEXTURE_2D,k,Xe,Nt,ge,Pe,ii,Ft,en);N.pixelStorei(N.UNPACK_ROW_LENGTH,Cs),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Bt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Vi),N.pixelStorei(N.UNPACK_SKIP_ROWS,Co),N.pixelStorei(N.UNPACK_SKIP_IMAGES,li),k===0&&z.generateMipmaps&&N.generateMipmap(je),Qe.unbindTexture()},this.copyTextureToTexture3D=function(R,z,V=null,X=null,k=0){return R.isTexture!==!0&&(pl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,X=arguments[1]||null,R=arguments[2],z=arguments[3],k=arguments[4]||0),pl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,z,V,X,k)},this.initRenderTarget=function(R){Ze.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),Qe.unbindTexture()},this.resetState=function(){A=0,P=0,I=null,Qe.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}},yh=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new re(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var as=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},bl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vf,this.updateRanges=[],this.version=0,this.uuid=ks()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ks()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ks()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Jn=new S,$r=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Jn.fromBufferAttribute(this,t),Jn.applyMatrix4(e),this.setXYZ(t,Jn.x,Jn.y,Jn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jn.fromBufferAttribute(this,t),Jn.applyNormalMatrix(e),this.setXYZ(t,Jn.x,Jn.y,Jn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jn.fromBufferAttribute(this,t),Jn.transformDirection(e),this.setXYZ(t,Jn.x,Jn.y,Jn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Yi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=jt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new an(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ei=class extends os{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wo,ll=new S,Xo=new S,qo=new S,Yo=new $,cl=new $,f1=new xt,Zc=new S,hl=new S,Kc=new S,Hg=new $,_u=new $,Ug=new $,ri=class extends gn{constructor(e=new ei){if(super(),this.isSprite=!0,this.type="Sprite",Wo===void 0){Wo=new At;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new bl(t,5);Wo.setIndex([0,1,2,0,2,3]),Wo.setAttribute("position",new $r(i,3,0,!1)),Wo.setAttribute("uv",new $r(i,2,3,!1))}this.geometry=Wo,this.material=e,this.center=new $(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xo.setFromMatrixScale(this.matrixWorld),f1.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xo.multiplyScalar(-qo.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Jc(Zc.set(-.5,-.5,0),qo,o,Xo,s,r),Jc(hl.set(.5,-.5,0),qo,o,Xo,s,r),Jc(Kc.set(.5,.5,0),qo,o,Xo,s,r),Hg.set(0,0),_u.set(1,0),Ug.set(1,1);let a=e.ray.intersectTriangle(Zc,hl,Kc,!1,ll);if(a===null&&(Jc(hl.set(-.5,.5,0),qo,o,Xo,s,r),_u.set(0,1),a=e.ray.intersectTriangle(Zc,Kc,hl,!1,ll),a===null))return;let l=e.ray.origin.distanceTo(ll);l<e.near||l>e.far||t.push({distance:l,point:ll.clone(),uv:cr.getInterpolation(ll,Zc,hl,Kc,Hg,_u,Ug,new $),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Jc(n,e,t,i,s,r){Yo.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(cl.x=r*Yo.x-s*Yo.y,cl.y=s*Yo.x+r*Yo.y):cl.copy(Yo),n.copy(e),n.x+=cl.x,n.y+=cl.y,n.applyMatrix4(f1)}var eo=class extends Cn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=pn,d=pn,u,f){super(null,o,a,l,c,d,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mh=class extends an{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},jo=new xt,Ng=new xt,Qc=[],zg=new ji,s_=new xt,dl=new Z,ul=new mr,gr=class extends Z{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Mh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,s_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ji),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,jo),zg.copy(e.boundingBox).applyMatrix4(jo),this.boundingBox.union(zg)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,jo),ul.copy(e.boundingSphere).applyMatrix4(jo),this.boundingSphere.union(ul)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(dl.geometry=this.geometry,dl.material=this.material,dl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ul.copy(this.boundingSphere),ul.applyMatrix4(i),e.ray.intersectsSphere(ul)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,jo),Ng.multiplyMatrices(i,jo),dl.matrixWorld=Ng,dl.raycast(e,Qc);for(let o=0,a=Qc.length;o<a;o++){let l=Qc[o];l.instanceId=r,l.object=this,t.push(l)}Qc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Mh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new eo(new Float32Array(s*this.count),s,this.count,dp,rs));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var fi=class extends os{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},kg=new xt,Hf=new fh,$c=new mr,eh=new S,_i=class extends gn{constructor(e=new At,t=new fi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$c.copy(i.boundingSphere),$c.applyMatrix4(s),$c.radius+=r,e.ray.intersectsSphere($c)===!1)return;kg.copy(s).invert(),Hf.copy(e.ray).applyMatrix4(kg);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,x=p;g<x;g++){let v=c.getX(g);eh.fromBufferAttribute(u,v),Og(eh,v,l,s,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,x=p;g<x;g++)eh.fromBufferAttribute(u,g),Og(eh,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Og(n,e,t,i,s,r,o){let a=Hf.distanceSqToPoint(n);if(a<t){let l=new S;Hf.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Sl=class extends Cn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=pn,this.minFilter=pn,this.generateMipmaps=!1,this.needsUpdate=!0}};var Zt=class extends Cn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ti=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let d=i[s],f=i[s+1]-d,p=(o-d)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new $:new S);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new S,s=[],r=[],o=[],a=new S,l=new xt;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new S)}r[0]=new S,o[0]=new S;let c=Number.MAX_VALUE,d=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);d<=c&&(c=d,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(An(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(An(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},_l=class extends Ti{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new $){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*d-p*u+this.aX,c=f*u+p*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Uf=class extends _l{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function yp(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,d,u){let f=(o-r)/c-(a-r)/(c+d)+(a-o)/d,p=(a-o)/d-(l-o)/(d+u)+(l-a)/u;f*=d,p*=d,s(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var th=new S,Tu=new yp,Ru=new yp,Au=new yp,Tl=class extends Ti{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new S){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,d;this.closed||a>0?c=s[(a-1)%r]:(th.subVectors(s[0],s[1]).add(s[0]),c=th);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?d=s[(a+2)%r]:(th.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=th),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(d),p);x<1e-4&&(x=1),g<1e-4&&(g=x),v<1e-4&&(v=x),Tu.initNonuniformCatmullRom(c.x,u.x,f.x,d.x,g,x,v),Ru.initNonuniformCatmullRom(c.y,u.y,f.y,d.y,g,x,v),Au.initNonuniformCatmullRom(c.z,u.z,f.z,d.z,g,x,v)}else this.curveType==="catmullrom"&&(Tu.initCatmullRom(c.x,u.x,f.x,d.x,this.tension),Ru.initCatmullRom(c.y,u.y,f.y,d.y,this.tension),Au.initCatmullRom(c.z,u.z,f.z,d.z,this.tension));return i.set(Tu.calc(l),Ru.calc(l),Au.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new S().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Fg(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function r_(n,e){let t=1-n;return t*t*e}function o_(n,e){return 2*(1-n)*n*e}function a_(n,e){return n*n*e}function yl(n,e,t,i){return r_(n,e)+o_(n,t)+a_(n,i)}function l_(n,e){let t=1-n;return t*t*t*e}function c_(n,e){let t=1-n;return 3*t*t*n*e}function h_(n,e){return 3*(1-n)*n*n*e}function d_(n,e){return n*n*n*e}function Ml(n,e,t,i,s){return l_(n,e)+c_(n,t)+h_(n,i)+d_(n,s)}var Eh=class extends Ti{constructor(e=new $,t=new $,i=new $,s=new $){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new $){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ml(e,s.x,r.x,o.x,a.x),Ml(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nf=class extends Ti{constructor(e=new S,t=new S,i=new S,s=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new S){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ml(e,s.x,r.x,o.x,a.x),Ml(e,s.y,r.y,o.y,a.y),Ml(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wh=class extends Ti{constructor(e=new $,t=new $){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new $){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zf=class extends Ti{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bh=class extends Ti{constructor(e=new $,t=new $,i=new $){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new $){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(yl(e,s.x,r.x,o.x),yl(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sh=class extends Ti{constructor(e=new S,t=new S,i=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new S){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(yl(e,s.x,r.x,o.x),yl(e,s.y,r.y,o.y),yl(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_h=class extends Ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new $){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],d=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Fg(a,l.x,c.x,d.x,u.x),Fg(a,l.y,c.y,d.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new $().fromArray(s))}return this}},kf=Object.freeze({__proto__:null,ArcCurve:Uf,CatmullRomCurve3:Tl,CubicBezierCurve:Eh,CubicBezierCurve3:Nf,EllipseCurve:_l,LineCurve:wh,LineCurve3:zf,QuadraticBezierCurve:bh,QuadraticBezierCurve3:Sh,SplineCurve:_h}),Of=class extends Ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new kf[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let d=l[c];i&&i.equals(d)||(t.push(d),i=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new kf[s.type]().fromJSON(s))}return this}},Ff=class extends Of{constructor(e){super(),this.type="Path",this.currentPoint=new $,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new wh(this.currentPoint.clone(),new $(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new bh(this.currentPoint.clone(),new $(e,t),new $(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Eh(this.currentPoint.clone(),new $(e,t),new $(i,s),new $(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new _h(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new _l(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},pi=class n extends At{constructor(e=[new $(0,-.5),new $(.5,0),new $(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=An(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],d=1/t,u=new S,f=new $,p=new S,g=new S,x=new S,v=0,m=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:v=e[E+1].x-e[E].x,m=e[E+1].y-e[E].y,p.x=m*1,p.y=-v,p.z=m*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:v=e[E+1].x-e[E].x,m=e[E+1].y-e[E].y,p.x=m*1,p.y=-v,p.z=m*0,g.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(g)}for(let E=0;E<=t;E++){let w=i+E*d*s,M=Math.sin(w),L=Math.cos(w);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*M,u.y=e[A].y,u.z=e[A].x*L,o.push(u.x,u.y,u.z),f.x=E/t,f.y=A/(e.length-1),a.push(f.x,f.y);let P=l[3*A+0]*M,I=l[3*A+1],_=l[3*A+0]*L;c.push(P,I,_)}}for(let E=0;E<t;E++)for(let w=0;w<e.length-1;w++){let M=w+E*e.length,L=M,A=M+e.length,P=M+e.length+1,I=M+1;r.push(L,A,I),r.push(P,I,A)}this.setIndex(r),this.setAttribute("position",new nt(o,3)),this.setAttribute("uv",new nt(a,2)),this.setAttribute("normal",new nt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Th=class n extends pi{constructor(e=1,t=1,i=4,s=8){let r=new Ff;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},Ln=class n extends At{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new S,d=new $;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let p=i+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[f]/e+1)/2,d.y=(o[f+1]/e+1)/2,l.push(d.x,d.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(a,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ge=class n extends At{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],u=[],f=[],p=[],g=0,x=[],v=i/2,m=0;E(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(d),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(p,2));function E(){let M=new S,L=new S,A=0,P=(t-e)/i;for(let I=0;I<=r;I++){let _=[],b=I/r,H=b*(t-e)+e;for(let O=0;O<=s;O++){let F=O/s,W=F*l+a,te=Math.sin(W),q=Math.cos(W);L.x=H*te,L.y=-b*i+v,L.z=H*q,u.push(L.x,L.y,L.z),M.set(te,P,q).normalize(),f.push(M.x,M.y,M.z),p.push(F,1-b),_.push(g++)}x.push(_)}for(let I=0;I<s;I++)for(let _=0;_<r;_++){let b=x[_][I],H=x[_+1][I],O=x[_+1][I+1],F=x[_][I+1];(e>0||_!==0)&&(d.push(b,H,F),A+=3),(t>0||_!==r-1)&&(d.push(H,O,F),A+=3)}c.addGroup(m,A,0),m+=A}function w(M){let L=g,A=new $,P=new S,I=0,_=M===!0?e:t,b=M===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,v*b,0),f.push(0,b,0),p.push(.5,.5),g++;let H=g;for(let O=0;O<=s;O++){let W=O/s*l+a,te=Math.cos(W),q=Math.sin(W);P.x=_*q,P.y=v*b,P.z=_*te,u.push(P.x,P.y,P.z),f.push(0,b,0),A.x=te*.5+.5,A.y=q*.5*b+.5,p.push(A.x,A.y),g++}for(let O=0;O<s;O++){let F=L+O,W=H+O;M===!0?d.push(W,W+1,F):d.push(W+1,W,F),I+=3}c.addGroup(m,I,M===!0?1:2),m+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wt=class n extends Ge{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Rl=class n extends At{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),d(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){let w=new S,M=new S,L=new S;for(let A=0;A<t.length;A+=3)p(t[A+0],w),p(t[A+1],M),p(t[A+2],L),l(w,M,L,E)}function l(E,w,M,L){let A=L+1,P=[];for(let I=0;I<=A;I++){P[I]=[];let _=E.clone().lerp(M,I/A),b=w.clone().lerp(M,I/A),H=A-I;for(let O=0;O<=H;O++)O===0&&I===A?P[I][O]=_:P[I][O]=_.clone().lerp(b,O/H)}for(let I=0;I<A;I++)for(let _=0;_<2*(A-I)-1;_++){let b=Math.floor(_/2);_%2===0?(f(P[I][b+1]),f(P[I+1][b]),f(P[I][b])):(f(P[I][b+1]),f(P[I+1][b+1]),f(P[I+1][b]))}}function c(E){let w=new S;for(let M=0;M<r.length;M+=3)w.x=r[M+0],w.y=r[M+1],w.z=r[M+2],w.normalize().multiplyScalar(E),r[M+0]=w.x,r[M+1]=w.y,r[M+2]=w.z}function d(){let E=new S;for(let w=0;w<r.length;w+=3){E.x=r[w+0],E.y=r[w+1],E.z=r[w+2];let M=v(E)/2/Math.PI+.5,L=m(E)/Math.PI+.5;o.push(M,1-L)}g(),u()}function u(){for(let E=0;E<o.length;E+=6){let w=o[E+0],M=o[E+2],L=o[E+4],A=Math.max(w,M,L),P=Math.min(w,M,L);A>.9&&P<.1&&(w<.2&&(o[E+0]+=1),M<.2&&(o[E+2]+=1),L<.2&&(o[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function p(E,w){let M=E*3;w.x=e[M+0],w.y=e[M+1],w.z=e[M+2]}function g(){let E=new S,w=new S,M=new S,L=new S,A=new $,P=new $,I=new $;for(let _=0,b=0;_<r.length;_+=9,b+=6){E.set(r[_+0],r[_+1],r[_+2]),w.set(r[_+3],r[_+4],r[_+5]),M.set(r[_+6],r[_+7],r[_+8]),A.set(o[b+0],o[b+1]),P.set(o[b+2],o[b+3]),I.set(o[b+4],o[b+5]),L.copy(E).add(w).add(M).divideScalar(3);let H=v(L);x(A,b+0,E,H),x(P,b+2,w,H),x(I,b+4,M,H)}}function x(E,w,M,L){L<0&&E.x===1&&(o[w]=E.x-1),M.x===0&&M.z===0&&(o[w]=L/2/Math.PI+.5)}function v(E){return Math.atan2(E.z,-E.x)}function m(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},Ri=class n extends Rl{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var zn=class n extends Rl{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ai=class n extends Rl{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},nn=class n extends At{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],d=[],u=e,f=(t-e)/s,p=new S,g=new $;for(let x=0;x<=s;x++){for(let v=0;v<=i;v++){let m=r+v/i*o;p.x=u*Math.cos(m),p.y=u*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,d.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){let v=x*(i+1);for(let m=0;m<i;m++){let E=m+v,w=E,M=E+i+1,L=E+i+2,A=E+1;a.push(w,M,A),a.push(M,L,A)}}this.setIndex(a),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ze=class n extends At{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,d=[],u=new S,f=new S,p=[],g=[],x=[],v=[];for(let m=0;m<=i;m++){let E=[],w=m/i,M=0;m===0&&o===0?M=.5/t:m===i&&l===Math.PI&&(M=-.5/t);for(let L=0;L<=t;L++){let A=L/t;u.x=-e*Math.cos(s+A*r)*Math.sin(o+w*a),u.y=e*Math.cos(o+w*a),u.z=e*Math.sin(s+A*r)*Math.sin(o+w*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),v.push(A+M,1-w),E.push(c++)}d.push(E)}for(let m=0;m<i;m++)for(let E=0;E<t;E++){let w=d[m][E+1],M=d[m][E],L=d[m+1][E],A=d[m+1][E+1];(m!==0||o>0)&&p.push(w,M,A),(m!==i-1||l<Math.PI)&&p.push(M,L,A)}this.setIndex(p),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(x,3)),this.setAttribute("uv",new nt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var De=class n extends At{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],d=new S,u=new S,f=new S;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let x=g/s*r,v=p/i*Math.PI*2;u.x=(e+t*Math.cos(v))*Math.cos(x),u.y=(e+t*Math.cos(v))*Math.sin(x),u.z=t*Math.sin(v),a.push(u.x,u.y,u.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),f.subVectors(u,d).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let x=(s+1)*p+g-1,v=(s+1)*(p-1)+g-1,m=(s+1)*(p-1)+g,E=(s+1)*p+g;o.push(x,v,E),o.push(v,m,E)}this.setIndex(o),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Rh=class n extends At{constructor(e=new Sh(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new S,l=new S,c=new $,d=new S,u=[],f=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(p,2));function x(){for(let w=0;w<t;w++)v(w);v(r===!1?t:0),E(),m()}function v(w){d=e.getPointAt(w/t,d);let M=o.normals[w],L=o.binormals[w];for(let A=0;A<=s;A++){let P=A/s*Math.PI*2,I=Math.sin(P),_=-Math.cos(P);l.x=_*M.x+I*L.x,l.y=_*M.y+I*L.y,l.z=_*M.z+I*L.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=d.x+i*l.x,a.y=d.y+i*l.y,a.z=d.z+i*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let w=1;w<=t;w++)for(let M=1;M<=s;M++){let L=(s+1)*(w-1)+(M-1),A=(s+1)*w+(M-1),P=(s+1)*w+M,I=(s+1)*(w-1)+M;g.push(L,A,I),g.push(A,P,I)}}function E(){for(let w=0;w<=t;w++)for(let M=0;M<=s;M++)c.x=w/t,c.y=M/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new kf[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var vr=class extends ot{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},pe=class extends os{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mp,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ah=class extends os{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mp,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function nh(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function u_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var la=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Bf=class extends la{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:km,endingEnd:km}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Om:r=e,a=2*t-i;break;case Fm:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Om:o=e,l=2*i-t;break;case Fm:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),x=g*g,v=x*g,m=-f*v+2*f*x-f*g,E=(1+f)*v+(-1.5-2*f)*x+(-.5+f)*g+1,w=(-1-p)*v+(1.5+p)*x+.5*g,M=p*v-p*x;for(let L=0;L!==a;++L)r[L]=m*o[d+L]+E*o[c+L]+w*o[l+L]+M*o[u+L];return r}},Gf=class extends la{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(i-t)/(s-t),u=1-d;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*d;return r}},Vf=class extends la{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Zi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=nh(t,this.TimeBufferType),this.values=nh(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:nh(e.times,Array),values:nh(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Vf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case lh:t=this.InterpolantFactoryMethodDiscrete;break;case gf:t=this.InterpolantFactoryMethodLinear;break;case Qd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lh;case this.InterpolantFactoryMethodLinear:return gf;case this.InterpolantFactoryMethodSmooth:return Qd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&u_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Qd,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,f=u-i,p=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Zi.prototype.TimeBufferType=Float32Array;Zi.prototype.ValueBufferType=Float32Array;Zi.prototype.DefaultInterpolation=gf;var to=class extends Zi{constructor(e,t,i){super(e,t,i)}};to.prototype.ValueTypeName="bool";to.prototype.ValueBufferType=Array;to.prototype.DefaultInterpolation=lh;to.prototype.InterpolantFactoryMethodLinear=void 0;to.prototype.InterpolantFactoryMethodSmooth=void 0;var Wf=class extends Zi{};Wf.prototype.ValueTypeName="color";var Xf=class extends Zi{};Xf.prototype.ValueTypeName="number";var qf=class extends la{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let d=c+a;c!==d;c+=4)mn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ch=class extends Zi{InterpolantFactoryMethodLinear(e){return new qf(this.times,this.values,this.getValueSize(),e)}};Ch.prototype.ValueTypeName="quaternion";Ch.prototype.InterpolantFactoryMethodSmooth=void 0;var no=class extends Zi{constructor(e,t,i){super(e,t,i)}};no.prototype.ValueTypeName="string";no.prototype.ValueBufferType=Array;no.prototype.DefaultInterpolation=lh;no.prototype.InterpolantFactoryMethodLinear=void 0;no.prototype.InterpolantFactoryMethodSmooth=void 0;var Yf=class extends Zi{};Yf.prototype.ValueTypeName="vector";var jf=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){let u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(d))return g}return null}}},f_=new jf,Zf=class{constructor(e){this.manager=e!==void 0?e:f_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Zf.DEFAULT_MATERIAL_NAME="__DEFAULT";var io=class extends gn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},xr=class extends io{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Cu=new xt,Bg=new S,Gg=new S,Al=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wl,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Bg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bg),Gg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gg),t.updateMatrixWorld(),Cu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Cu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Kf=class extends Al{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=na*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ca=class extends io{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Kf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Vg=new xt,fl=new S,Pu=new S,Jf=class extends Al{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $(4,2),this._viewportCount=6,this._viewports=[new Vt(2,1,1,1),new Vt(0,1,1,1),new Vt(3,1,1,1),new Vt(1,1,1,1),new Vt(3,0,1,1),new Vt(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),fl.setFromMatrixPosition(e.matrixWorld),i.position.copy(fl),Pu.copy(i.position),Pu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Pu),i.updateMatrixWorld(),s.makeTranslation(-fl.x,-fl.y,-fl.z),Vg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vg)}},Ci=class extends io{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Jf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Qf=class extends Al{constructor(){super(new sa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ls=class extends io{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new Qf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ph=class extends io{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ha=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Wg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Wg(){return performance.now()}var Mp="\\[\\]\\.:\\/",p_=new RegExp("["+Mp+"]","g"),Ep="[^"+Mp+"]",m_="[^"+Mp.replace("\\.","")+"]",g_=/((?:WC+[\/:])*)/.source.replace("WC",Ep),v_=/(WCOD+)?/.source.replace("WCOD",m_),x_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ep),y_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ep),M_=new RegExp("^"+g_+v_+x_+y_+"$"),E_=["material","materials","bones","map"],$f=class{constructor(e,t,i){let s=i||sn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},sn=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(p_,"")}static parseTrackName(e){let t=M_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);E_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};sn.Composite=$f;sn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};sn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};sn.prototype.GetterByBindingType=[sn.prototype._getValue_direct,sn.prototype._getValue_array,sn.prototype._getValue_arrayElement,sn.prototype._getValue_toArray];sn.prototype.SetterByBindingTypeAndVersioning=[[sn.prototype._setValue_direct,sn.prototype._setValue_direct_setNeedsUpdate,sn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_array,sn.prototype._setValue_array_setNeedsUpdate,sn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_arrayElement,sn.prototype._setValue_arrayElement_setNeedsUpdate,sn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_fromArray,sn.prototype._setValue_fromArray_setNeedsUpdate,sn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var z3=new Float32Array(1);var Xg=new $,Ih=class{constructor(e=new $(1/0,1/0),t=new $(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Xg.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xg).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ep}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ep);var yr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var kn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},w_=new sa(-1,1,1,-1,0,1),wp=class extends At{constructor(){super(),this.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new nt([0,2,0,0,2,0],2))}},b_=new wp,Pi=class{constructor(e){this._mesh=new Z(b_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,w_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ro=class extends kn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ot?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Dn.clone(e.uniforms),this.material=new ot({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Pi(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Cl=class extends kn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},zh=class extends kn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var kh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new $);this._width=i.width,this._height=i.height,t=new ln(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ro(yr),this.copyPass.material.blending=Mn,this.clock=new ha}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Cl!==void 0&&(o instanceof Cl?i=!0:o instanceof zh&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new $);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Oh=class extends kn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new re}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var p1={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new re(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var pa=class n extends kn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new $(e.x,e.y):new $(256,256),this.clearColor=new re(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ln(r,o,{type:bn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new ln(r,o,{type:bn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new ln(r,o,{type:bn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=p1;this.highPassUniforms=Dn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ot({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new $(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let d=yr;this.copyUniforms=Dn.clone(d.uniforms),this.blendMaterial=new ot({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:Le,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new re,this.oldClearAlpha=1,this.basic=new He,this.fsQuad=new Pi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new $(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new ot({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new $(.5,.5)},direction:{value:new $(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new ot({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};pa.BlurDirectionX=new $(1,0);pa.BlurDirectionY=new $(0,1);var m1={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Fh=class extends kn{constructor(){super();let e=m1;this.uniforms=Dn.clone(e.uniforms),this.material=new vr({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Pi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ct.getTransfer(this._outputColorSpace)===Gt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ip?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===sp?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===rp?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===so?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===op?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ap&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Pl={name:"SMAAEdgesShader",defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new $(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},Il={name:"SMAAWeightsShader",defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new $(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},Bh={name:"SMAABlendShader",uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new $(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};var Gh=class extends kn{constructor(e,t){super(),this.edgesRT=new ln(e,t,{depthBuffer:!1,type:bn}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new ln(e,t,{depthBuffer:!1,type:bn}),this.weightsRT.texture.name="SMAAPass.weights";let i=this,s=new Image;s.src=this.getAreaTexture(),s.onload=function(){i.areaTexture.needsUpdate=!0},this.areaTexture=new Cn,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=s,this.areaTexture.minFilter=Si,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;let r=new Image;r.src=this.getSearchTexture(),r.onload=function(){i.searchTexture.needsUpdate=!0},this.searchTexture=new Cn,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=r,this.searchTexture.magFilter=pn,this.searchTexture.minFilter=pn,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=Dn.clone(Pl.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/t),this.materialEdges=new ot({defines:Object.assign({},Pl.defines),uniforms:this.uniformsEdges,vertexShader:Pl.vertexShader,fragmentShader:Pl.fragmentShader}),this.uniformsWeights=Dn.clone(Il.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/t),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new ot({defines:Object.assign({},Il.defines),uniforms:this.uniformsWeights,vertexShader:Il.vertexShader,fragmentShader:Il.fragmentShader}),this.uniformsBlend=Dn.clone(Bh.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/t),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new ot({uniforms:this.uniformsBlend,vertexShader:Bh.vertexShader,fragmentShader:Bh.fragmentShader}),this.fsQuad=new Pi(null)}render(e,t,i){this.uniformsEdges.tDiffuse.value=i.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=i.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){this.edgesRT.setSize(e,t),this.weightsRT.setSize(e,t),this.materialEdges.uniforms.resolution.value.set(1/e,1/t),this.materialWeights.uniforms.resolution.value.set(1/e,1/t),this.materialBlend.uniforms.resolution.value.set(1/e,1/t)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}};var Ll={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new $},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new xt},cameraProjectionMatrixInverse:{value:new xt},cameraWorldMatrix:{value:new xt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new S(-1,-1,-1)},sceneBoxMax:{value:new S(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Dl={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Vh={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function g1(n=5){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=S_(e),i=t.length,s=new Uint8Array(i*4);for(let o=0;o<i;++o){let a=t[o],l=2*Math.PI*a/i,c=new S(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new eo(s,e,e);return r.wrapS=$n,r.wrapT=$n,r.needsUpdate=!0,r}function S_(n){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),i[s*e+r]!==0){r-=2,s++;continue}else i[s*e+r]=o++;r++,s--}return i}var Hl={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:bp(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new $},cameraProjectionMatrixInverse:{value:new xt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function bp(n,e,t){let i=__(n,e,t),s="vec3[SAMPLES](";for(let r=0;r<n;r++){let o=i[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<n-1?",":")"}`}return s}function __(n,e,t){let i=[];for(let s=0;s<n;s++){let r=2*Math.PI*e*s/n,o=Math.pow(s/(n-1),t);i.push(new S(Math.cos(r),Math.sin(r),o))}return i}var Wh=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}noise(e,t){let i,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),d=(3-Math.sqrt(3))/6,u=(l+c)*d,f=l-u,p=c-u,g=e-f,x=t-p,v,m;g>x?(v=1,m=0):(v=0,m=1);let E=g-v+d,w=x-m+d,M=g-1+2*d,L=x-1+2*d,A=l&255,P=c&255,I=this.perm[A+this.perm[P]]%12,_=this.perm[A+v+this.perm[P+m]]%12,b=this.perm[A+1+this.perm[P+1]]%12,H=.5-g*g-x*x;H<0?i=0:(H*=H,i=H*H*this.dot(this.grad3[I],g,x));let O=.5-E*E-w*w;O<0?s=0:(O*=O,s=O*O*this.dot(this.grad3[_],E,w));let F=.5-M*M-L*L;return F<0?r=0:(F*=F,r=F*F*this.dot(this.grad3[b],M,L)),70*(i+s+r)}noise3d(e,t,i){let s,r,o,a,c=(e+t+i)*.3333333333333333,d=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(i+c),p=1/6,g=(d+u+f)*p,x=d-g,v=u-g,m=f-g,E=e-x,w=t-v,M=i-m,L,A,P,I,_,b;E>=w?w>=M?(L=1,A=0,P=0,I=1,_=1,b=0):E>=M?(L=1,A=0,P=0,I=1,_=0,b=1):(L=0,A=0,P=1,I=1,_=0,b=1):w<M?(L=0,A=0,P=1,I=0,_=1,b=1):E<M?(L=0,A=1,P=0,I=0,_=1,b=1):(L=0,A=1,P=0,I=1,_=1,b=0);let H=E-L+p,O=w-A+p,F=M-P+p,W=E-I+2*p,te=w-_+2*p,q=M-b+2*p,le=E-1+3*p,Y=w-1+3*p,ue=M-1+3*p,Te=d&255,Fe=u&255,ct=f&255,Ht=this.perm[Te+this.perm[Fe+this.perm[ct]]]%12,J=this.perm[Te+L+this.perm[Fe+A+this.perm[ct+P]]]%12,fe=this.perm[Te+I+this.perm[Fe+_+this.perm[ct+b]]]%12,Oe=this.perm[Te+1+this.perm[Fe+1+this.perm[ct+1]]]%12,ye=.6-E*E-w*w-M*M;ye<0?s=0:(ye*=ye,s=ye*ye*this.dot3(this.grad3[Ht],E,w,M));let Ye=.6-H*H-O*O-F*F;Ye<0?r=0:(Ye*=Ye,r=Ye*Ye*this.dot3(this.grad3[J],H,O,F));let $e=.6-W*W-te*te-q*q;$e<0?o=0:($e*=$e,o=$e*$e*this.dot3(this.grad3[fe],W,te,q));let st=.6-le*le-Y*Y-ue*ue;return st<0?a=0:(st*=st,a=st*st*this.dot3(this.grad3[Oe],le,Y,ue)),32*(s+r+o+a)}noise4d(e,t,i,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,d,u,f,p,g,x=(e+t+i+s)*l,v=Math.floor(e+x),m=Math.floor(t+x),E=Math.floor(i+x),w=Math.floor(s+x),M=(v+m+E+w)*c,L=v-M,A=m-M,P=E-M,I=w-M,_=e-L,b=t-A,H=i-P,O=s-I,F=_>b?32:0,W=_>H?16:0,te=b>H?8:0,q=_>O?4:0,le=b>O?2:0,Y=H>O?1:0,ue=F+W+te+q+le+Y,Te=o[ue][0]>=3?1:0,Fe=o[ue][1]>=3?1:0,ct=o[ue][2]>=3?1:0,Ht=o[ue][3]>=3?1:0,J=o[ue][0]>=2?1:0,fe=o[ue][1]>=2?1:0,Oe=o[ue][2]>=2?1:0,ye=o[ue][3]>=2?1:0,Ye=o[ue][0]>=1?1:0,$e=o[ue][1]>=1?1:0,st=o[ue][2]>=1?1:0,Kt=o[ue][3]>=1?1:0,St=_-Te+c,$t=b-Fe+c,N=H-ct+c,Fn=O-Ht+c,Et=_-J+2*c,wt=b-fe+2*c,Qe=H-Oe+2*c,qt=O-ye+2*c,Ze=_-Ye+3*c,D=b-$e+3*c,T=H-st+3*c,B=O-Kt+3*c,ee=_-1+4*c,se=b-1+4*c,Q=H-1+4*c,Be=O-1+4*c,we=v&255,Ae=m&255,Mt=E&255,ce=w&255,Ue=a[we+a[Ae+a[Mt+a[ce]]]]%32,et=a[we+Te+a[Ae+Fe+a[Mt+ct+a[ce+Ht]]]]%32,it=a[we+J+a[Ae+fe+a[Mt+Oe+a[ce+ye]]]]%32,Ne=a[we+Ye+a[Ae+$e+a[Mt+st+a[ce+Kt]]]]%32,Rt=a[we+1+a[Ae+1+a[Mt+1+a[ce+1]]]]%32,rt=.6-_*_-b*b-H*H-O*O;rt<0?d=0:(rt*=rt,d=rt*rt*this.dot4(r[Ue],_,b,H,O));let Ut=.6-St*St-$t*$t-N*N-Fn*Fn;Ut<0?u=0:(Ut*=Ut,u=Ut*Ut*this.dot4(r[et],St,$t,N,Fn));let U=.6-Et*Et-wt*wt-Qe*Qe-qt*qt;U<0?f=0:(U*=U,f=U*U*this.dot4(r[it],Et,wt,Qe,qt));let Ee=.6-Ze*Ze-D*D-T*T-B*B;Ee<0?p=0:(Ee*=Ee,p=Ee*Ee*this.dot4(r[Ne],Ze,D,T,B));let j=.6-ee*ee-se*se-Q*Q-Be*Be;return j<0?g=0:(j*=j,g=j*j*this.dot4(r[Rt],ee,se,Q,Be)),27*(d+u+f+p+g)}};var ma=class n extends kn{constructor(e,t,i,s,r,o,a){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=g1(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new ln(this.width,this.height,{type:bn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new ot({defines:Object.assign({},Ll.defines),uniforms:Dn.clone(Ll.uniforms),vertexShader:Ll.vertexShader,fragmentShader:Ll.fragmentShader,blending:Mn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ah,this.normalMaterial.blending=Mn,this.pdMaterial=new ot({defines:Object.assign({},Hl.defines),uniforms:Dn.clone(Hl.uniforms),vertexShader:Hl.vertexShader,fragmentShader:Hl.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new ot({defines:Object.assign({},Dl.defines),uniforms:Dn.clone(Dl.uniforms),vertexShader:Dl.vertexShader,fragmentShader:Dl.fragmentShader,blending:Mn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ot({uniforms:Dn.clone(yr.uniforms),vertexShader:yr.vertexShader,fragmentShader:yr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Dh,blendDst:da,blendEquation:bi,blendSrcAlpha:Lh,blendDstAlpha:da,blendEquationAlpha:bi}),this.blendMaterial=new ot({uniforms:Dn.clone(Vh.uniforms),vertexShader:Vh.vertexShader,fragmentShader:Vh.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:np,blendSrc:Dh,blendDst:da,blendEquation:bi,blendSrcAlpha:Lh,blendDstAlpha:da,blendEquationAlpha:bi}),this.fsQuad=new Pi(null),this.originalClearColor=new re,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new oa,this.depthTexture.format=fr,this.depthTexture.type=ur,this.normalRenderTarget=new ln(this.width,this.height,{minFilter:pn,magFilter:pn,type:bn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=bp(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Off:break;case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Mn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Mn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Mn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Mn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Mn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){let s=t.get(i);i.visible=s}),t.clear()}generateNoise(e=64){let t=new Wh,i=e*e*4,s=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new eo(s,e,e,di,si);return r.wrapS=$n,r.wrapT=$n,r.needsUpdate=!0,r}};ma.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var h={scene:null,camera:null,renderer:null,player:null,time:{t:.3,day:1,elevation:1,night:0},res:{iron:0,silicon:0,ice:0,titanium:0},buildings:[],nodes:[],enemies:[],colonists:[],colony:{pop:0,housing:0,o2:0,food:0,water:0,support:0,powerProd:0,powerUse:0,deficit:!1},upgrades:{},stats:{mined:{iron:0,silicon:0,ice:0,titanium:0},built:{},kills:0,arrived:0,crafted:{}},chapter:0,terraform:0,ended:!1,storm:0,menuOpen:!1,locked:!1,started:!1,debug:!1,colliders:null,raining:!1,events:{map:{},on(n,e){var t;((t=this.map)[n]||(t[n]=[])).push(e)},emit(n,e){(this.map[n]||[]).forEach(t=>t(e))}}},rn={iron:{name:"\u94C1\u77FF",icon:"iron",color:"#d08a5e"},silicon:{name:"\u7845\u6676",icon:"silicon",color:"#f1dca0"},ice:{name:"\u6C34\u51B0",icon:"ice",color:"#a9dcff"},titanium:{name:"\u949B\u77FF",icon:"titanium",color:"#b9a6ff"}};function Ki(n){for(let e in n)if((h.res[e]||0)<n[e])return!1;return!0}function Ul(n){for(let e in n)h.res[e]-=n[e]}function ga(n){return Object.entries(n).map(([e,t])=>`<span class="cost ${h.res[e]>=t?"":"lack"}" style="--rc:${rn[e].color}"><svg class="ico"><use href="#i-${e}"/></svg>${t}</span>`).join(" ")}var Xh=class{constructor(e=16){this.cell=e,this.map=new Map}key(e,t){return e*73856093^t*19349663}add(e){let t=this.cell,i=Math.floor((e.x-e.r)/t),s=Math.floor((e.x+e.r)/t),r=Math.floor((e.z-e.r)/t),o=Math.floor((e.z+e.r)/t);e._keys=[];for(let a=i;a<=s;a++)for(let l=r;l<=o;l++){let c=this.key(a,l);this.map.has(c)||this.map.set(c,[]),this.map.get(c).push(e),e._keys.push(c)}return e}remove(e){if(!(!e||!e._keys)){for(let t of e._keys){let i=this.map.get(t);if(!i)continue;let s=i.indexOf(e);s>=0&&i.splice(s,1)}e._keys=null}}query(e,t){return this.map.get(this.key(Math.floor(e/this.cell),Math.floor(t/this.cell)))||[]}overlaps(e,t,i){let s=this.cell,r=new Set;for(let o=Math.floor((e-i)/s);o<=Math.floor((e+i)/s);o++)for(let a=Math.floor((t-i)/s);a<=Math.floor((t+i)/s);a++){let l=this.map.get(this.key(o,a));if(l)for(let c of l){if(r.has(c))continue;r.add(c);let d=c.x-e,u=c.z-t,f=c.r+i;if(d*d+u*u<f*f)return c}}return null}};var Wn={mars:{id:"mars",name:"\u706B\u661F",place:"\u4E4C\u6258\u90A6\u5E73\u539F",title:"\u65B0\u5BB6\u56ED",next:"europa",seed:2089,gravity:5.6,solar:1,terraformable:!0,craters:46,hills:46,ridges:14,detail:1.6,ground:{a:[.56,.25,.14],b:[.74,.4,.24],steep:[.36,.19,.13],low:[.42,.22,.16]},rockHSL:[.04,.45,.22],rock:9062960,sky:{dayTop:[.62,.42,.29],dayHor:[.9,.68,.5],setTop:[.17,.13,.15],setHor:[.58,.4,.33],nightTop:[.006,.008,.022],nightHor:[.035,.035,.055],halo:[.35,.58,.95],storm:[.62,.42,.28]},dust:16765088,enemy:[3808536,9054736,16730640],extras:"moons",storms:!0,intro:["2089 \u5E74\u3002","\u5730\u7403\u4F9D\u7136\u7F8E\u4E3D\uFF0C\u4F46\u5DF2\u7ECF\u592A\u62E5\u6324\u3001\u592A\u708E\u70ED\u3001\u592A\u75B2\u60EB\u3002","\u300C\u65B9\u821F\u8BA1\u5212\u300D\u628A\u4EBA\u7C7B\u7684\u672A\u6765\uFF0C\u62BC\u5728\u4E86\u4E00\u9897\u7EA2\u8272\u661F\u7403\u4E0A\u3002","\u7ECF\u8FC7\u4E03\u4E2A\u6708\u3001\u4E24\u4EBF\u4E24\u5343\u4E94\u767E\u4E07\u516C\u91CC\u7684\u822A\u884C\u2014\u2014","\u4F60\u7684\u7740\u9646\u8231\uFF0C\u5728\u4E4C\u6258\u90A6\u5E73\u539F\u7684\u6668\u5149\u4E2D\u843D\u5730\u3002",'\u4F60\u662F\u7B2C\u4E00\u4E2A\u3002<b style="color:#ff8a3d">\u4F46\u4E0D\u4F1A\u662F\u6700\u540E\u4E00\u4E2A\u3002</b>']},europa:{id:"europa",name:"\u6728\u536B\u4E8C\xB7\u6B27\u7F57\u5DF4",place:"\u5EB7\u7EB3\u9A6C\u62C9\u6DF7\u6C8C\u533A",title:"\u51B0\u4E0B\u4E4B\u6D77",next:"kepler",seed:1610,gravity:3.6,solar:.55,terraformable:!1,craters:14,hills:16,ridges:26,detail:1.1,ground:{a:[.8,.84,.88],b:[.93,.95,.97],steep:[.5,.58,.68],low:[.62,.72,.82]},rockHSL:[.58,.2,.62],rock:12110040,sky:{dayTop:[.02,.025,.05],dayHor:[.16,.18,.26],setTop:[.01,.012,.03],setHor:[.1,.1,.16],nightTop:[.004,.005,.012],nightHor:[.02,.025,.04],halo:[.6,.7,.9],storm:[.5,.6,.7]},dust:14676223,enemy:[1454138,2788e3,4251903],extras:"jupiter",storms:!1,intro:["\u706B\u661F\u7684\u706F\u706B\uFF0C\u5DF2\u7ECF\u5728\u8EAB\u540E\u4EAE\u6210\u4E86\u4E00\u7247\u3002","\u800C\u4F60\uFF0C\u518D\u4E00\u6B21\u51FA\u53D1\u4E86\u3002","\u6728\u661F\u7684\u7B2C\u4E8C\u9897\u536B\u661F\u2014\u2014\u6B27\u7F57\u5DF4\u3002","\u5728\u5B83\u4E8C\u5341\u516C\u91CC\u539A\u7684\u51B0\u58F3\u4E4B\u4E0B\uFF0C\u662F\u4E00\u6574\u7247\u4ECE\u672A\u89C1\u8FC7\u9633\u5149\u7684\u6D77\u6D0B\u3002","\u6728\u661F\uFF0C\u50CF\u4E00\u8F6E\u5DE8\u5927\u7684\u6708\u4EAE\uFF0C\u60AC\u5728\u5730\u5E73\u7EBF\u4E0A\u3002",'<b style="color:#66e6ff">\u4EBA\u7C7B\u7684\u7B2C\u4E8C\u4E2A\u5BB6\uFF0C\u5728\u51B0\u4E0B\u3002</b>']},kepler:{id:"kepler",name:"\u5F00\u666E\u52D2-442b",place:"\u7FE1\u7FE0\u8C37\u5730",title:"\u53CC\u65E5\u4E4B\u5730",next:null,seed:442,gravity:7.2,solar:1.3,terraformable:!1,craters:8,hills:64,ridges:10,detail:2.2,ground:{a:[.18,.36,.3],b:[.32,.52,.34],steep:[.3,.24,.3],low:[.2,.26,.4]},rockHSL:[.75,.25,.3],rock:6969994,sky:{dayTop:[.3,.5,.78],dayHor:[.78,.86,.8],setTop:[.2,.12,.3],setHor:[.9,.5,.4],nightTop:[.01,.01,.04],nightHor:[.05,.04,.09],halo:[1,.6,.4],storm:[.6,.7,.6]},dust:13172696,enemy:[1976854,5939242,10551104],extras:"twinsuns",storms:!1,intro:["\u4E00\u5343\u4E8C\u767E\u5149\u5E74\u3002","\u51B7\u51BB\u8231\u91CC\u7684\u4E09\u767E\u5E74\uFF0C\u5BF9\u4F60\u53EA\u662F\u4E00\u573A\u68A6\u3002","\u8237\u7A97\u5916\uFF0C\u4E24\u9897\u592A\u9633\u6B63\u4ECE\u7D2B\u8272\u7684\u5C71\u810A\u540E\u5347\u8D77\u3002","\u8FD9\u91CC\u6709\u98CE\uFF0C\u6709\u4E91\uFF0C\u6709\u4F1A\u5728\u591C\u91CC\u53D1\u5149\u7684\u68EE\u6797\u3002","\u5F00\u666E\u52D2-442b\u2014\u2014\u4EBA\u7C7B\u7B2C\u4E00\u6B21\uFF0C\u6765\u5230\u53E6\u4E00\u9897\u6052\u661F\u7684\u8EAB\u8FB9\u3002",'<b style="color:#a0ff70">\u4ECE\u8FD9\u91CC\u5F00\u59CB\uFF0C\u4EBA\u7C7B\u6210\u4E3A\u4E86\u661F\u9645\u6587\u660E\u3002</b>']}},x1="starport-meta";function Mr(){try{return JSON.parse(localStorage.getItem(x1))||{}}catch{return{}}}function Nl(n){try{localStorage.setItem(x1,JSON.stringify(n))}catch{}}function Sp(){try{for(let n of Object.keys(localStorage))n.startsWith("starport-")&&localStorage.removeItem(n)}catch{}}var v1=new URLSearchParams(location.search).get("planet"),xn=Mr(),at=Wn[v1]?v1:Wn[xn.planet]?xn.planet:"mars",he=Wn[at],qh=at==="mars"?"starport-newhome-v1":"starport-planet-"+at;function ti(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function zl(n){let e=ti(n),t=[...Array(256).keys()];for(let l=255;l>0;l--){let c=Math.floor(e()*(l+1));[t[l],t[c]]=[t[c],t[l]]}let i=new Uint8Array(512);for(let l=0;l<512;l++)i[l]=t[l&255];let s=[1,-1,1,-1,1,-1,0,0],r=[1,1,-1,-1,0,0,1,-1],o=.5*(Math.sqrt(3)-1),a=(3-Math.sqrt(3))/6;return function(l,c){let d=0,u=0,f=0,p=(l+c)*o,g=Math.floor(l+p),x=Math.floor(c+p),v=(g+x)*a,m=l-(g-v),E=c-(x-v),w=m>E?1:0,M=m>E?0:1,L=m-w+a,A=E-M+a,P=m-1+2*a,I=E-1+2*a,_=g&255,b=x&255,H=.5-m*m-E*E;if(H>0){let W=i[_+i[b]]&7;H*=H,d=H*H*(s[W]*m+r[W]*E)}let O=.5-L*L-A*A;if(O>0){let W=i[_+w+i[b+M]]&7;O*=O,u=O*O*(s[W]*L+r[W]*A)}let F=.5-P*P-I*I;if(F>0){let W=i[_+1+i[b+1]]&7;F*=F,f=F*F*(s[W]*P+r[W]*I)}return 70*(d+u+f)}}function _p(n,e,t,i=4,s=2,r=.5){let o=1,a=1,l=0,c=0;for(let d=0;d<i;d++)l+=o*n(e*a,t*a),c+=o,o*=r,a*=s;return l/c}var Ji=(n,e,t)=>n<e?e:n>t?t:n,zt=(n,e,t)=>n+(e-n)*t,Xn=(n,e,t)=>{let i=Ji((t-n)/(e-n),0,1);return i*i*(3-2*i)};var ft=512;function Fs(){let n=document.createElement("canvas");return n.width=n.height=ft,n}function Bs(n,e,t=1){let i=new Zt(n);return i.wrapS=i.wrapT=$n,i.repeat.set(t,t),i.anisotropy=4,e&&(i.colorSpace=_t),i}function Er(n,e,t,i,s,r,o,a){for(let l=0;l<t;l++){n.fillStyle=`rgba(${i},${s+e()*(r-s)})`;let c=o+e()*(a-o);n.fillRect(e()*ft,e()*ft,c,c)}}function kl(n=1,e=4){let t=ti(n),i=Fs(),s=i.getContext("2d"),r=Fs(),o=r.getContext("2d"),a=Fs(),l=a.getContext("2d");s.fillStyle="#f2f0ec",s.fillRect(0,0,ft,ft),o.fillStyle="#8c8c8c",o.fillRect(0,0,ft,ft),l.fillStyle="#808080",l.fillRect(0,0,ft,ft);let c=ft/e;for(let u=0;u<e;u++)for(let f=0;f<e;f++){let p=236+Math.floor(t()*18);s.fillStyle=`rgb(${p},${p-2},${p-5})`,s.fillRect(u*c,f*c,c,c);let g=120+Math.floor(t()*40);if(o.fillStyle=`rgb(${g},${g},${g})`,o.fillRect(u*c,f*c,c,c),t()<.35){let x=c*(.25+t()*.3),v=c*(.2+t()*.25),m=u*c+c*.2+t()*c*.3,E=f*c+c*.2+t()*c*.3;l.strokeStyle="#4a4a4a",l.lineWidth=2,l.strokeRect(m,E,x,v),s.strokeStyle="rgba(80,76,70,.35)",s.lineWidth=1.5,s.strokeRect(m,E,x,v)}}for(let u=0;u<=e;u++){let f=u*c;for(let[p,g,x]of[[s,"rgba(70,64,58,.55)",2.5],[l,"#303030",4],[o,"#d0d0d0",3]])p.fillStyle=g,p.fillRect(f-x/2,0,x,ft),p.fillRect(0,f-x/2,ft,x)}for(let u=0;u<e;u++)for(let f=0;f<e;f++)for(let[p,g]of[[.08,.08],[.92,.08],[.08,.92],[.92,.92]]){let x=(u+p)*c,v=(f+g)*c;l.fillStyle="#c8c8c8",l.beginPath(),l.arc(x,v,3,0,7),l.fill(),s.fillStyle="rgba(90,86,80,.5)",s.beginPath(),s.arc(x,v,2.2,0,7),s.fill()}for(let u=0;u<70;u++){let f=t()*ft,p=30+t()*160,g=t()*ft,x=s.createLinearGradient(0,g,0,g+p);x.addColorStop(0,"rgba(150,90,60,0)"),x.addColorStop(.3,`rgba(150,90,60,${.05+t()*.08})`),x.addColorStop(1,"rgba(150,90,60,0)"),s.fillStyle=x,s.fillRect(f,g,1+t()*3,p)}let d=s.createLinearGradient(0,ft*.75,0,ft);d.addColorStop(0,"rgba(170,100,60,0)"),d.addColorStop(1,"rgba(170,100,60,.22)"),s.fillStyle=d,s.fillRect(0,0,ft,ft),Er(s,t,2500,"120,80,60",.03,.12,1,3),Er(o,t,1800,"255,255,255",.05,.2,1,4),s.strokeStyle="rgba(255,255,255,.25)",o.strokeStyle="rgba(40,40,40,.4)";for(let u=0;u<40;u++){let f=t()*ft,p=t()*ft,g=(t()-.5)*40,x=(t()-.5)*12;for(let v of[s,o])v.lineWidth=.8,v.beginPath(),v.moveTo(f,p),v.lineTo(f+g,p+x),v.stroke()}return{map:Bs(i,!0),roughnessMap:Bs(r,!1),bumpMap:Bs(a,!1)}}function y1(n=7){let e=ti(n),t=Fs(),i=t.getContext("2d"),s=Fs(),r=s.getContext("2d");i.fillStyle="#e6e6e6",i.fillRect(0,0,ft,ft),r.fillStyle="#6a6a6a",r.fillRect(0,0,ft,ft);for(let o=0;o<ft;o++){let a=210+Math.floor(e()*45);i.fillStyle=`rgba(${a},${a},${a},.5)`,i.fillRect(0,o,ft,1);let l=80+Math.floor(e()*60);r.fillStyle=`rgba(${l},${l},${l},.5)`,r.fillRect(0,o,ft,1)}return Er(i,e,800,"60,50,40",.05,.15,1,3),{map:Bs(t,!0),roughnessMap:Bs(s,!1)}}function M1(n=3){let e=ti(n),t=Fs(),i=t.getContext("2d"),s=Fs(),r=s.getContext("2d");i.fillStyle="#d8d2c8",i.fillRect(0,0,ft,ft),r.fillStyle="#808080",r.fillRect(0,0,ft,ft),Er(i,e,9e3,"90,80,70",.04,.16,1,4),Er(i,e,3e3,"255,250,240",.04,.12,1,3),Er(r,e,6e3,"40,40,40",.1,.4,1,3);for(let a=0;a<6;a++){i.strokeStyle="rgba(70,60,50,.25)",i.lineWidth=1,i.beginPath();let l=e()*ft,c=e()*ft;i.moveTo(l,c);for(let d=0;d<12;d++)l+=(e()-.5)*50,c+=(e()-.5)*50,i.lineTo(l,c);i.stroke()}let o=i.createLinearGradient(0,0,0,ft);return o.addColorStop(0,"rgba(170,100,60,0)"),o.addColorStop(1,"rgba(170,100,60,.3)"),i.fillStyle=o,i.fillRect(0,0,ft,ft),{map:Bs(t,!0,1),bumpMap:Bs(s,!1,1)}}function E1(n=11){let e=ti(n),t=Fs(),i=t.getContext("2d"),s=Fs(),r=s.getContext("2d");i.fillStyle="#d0c4bc",i.fillRect(0,0,ft,ft),r.fillStyle="#808080",r.fillRect(0,0,ft,ft);for(let o=0;o<300;o++){let a=e()*ft,l=e()*ft,c=6+e()*40,d=Math.floor(150+e()*90);i.fillStyle=`rgba(${d},${d-15},${d-25},.25)`,i.beginPath(),i.ellipse(a,l,c,c*(.4+e()*.6),e()*3,0,7),i.fill(),r.fillStyle=`rgba(${d},${d},${d},.25)`,r.beginPath(),r.ellipse(a,l,c,c*.6,e()*3,0,7),r.fill()}return Er(i,e,8e3,"60,40,30",.05,.2,1,3),Er(r,e,8e3,"20,20,20",.1,.5,1,2),{map:Bs(t,!0,1),bumpMap:Bs(s,!1,1)}}var y={white:new pe({color:15328474,roughness:.55,metalness:.1}),panel:new pe({color:13222840,roughness:.6,metalness:.2}),metal:new pe({color:8159110,roughness:.4,metalness:.7}),dark:new pe({color:2895670,roughness:.5,metalness:.5}),orange:new pe({color:16742954,roughness:.5,metalness:.1}),glass:new pe({color:10474751,roughness:.05,metalness:.3,transparent:!0,opacity:.35}),window:new pe({color:2240576,emissive:16761466,emissiveIntensity:0,roughness:.2}),solar:new pe({color:1780826,roughness:.25,metalness:.8}),plant:new pe({color:5221962,roughness:.8,flatShading:!0}),cyan:new pe({color:1127236,emissive:3401471,emissiveIntensity:2}),red:new pe({color:3342336,emissive:16722474,emissiveIntensity:3}),lamp:new pe({color:3351057,emissive:16767392,emissiveIntensity:0}),found:new pe({color:9143160,roughness:.9}),flame:new He({color:16756832,transparent:!0,opacity:.85,blending:Le,depthWrite:!1})};{let n=kl(1,4),e=kl(5,3),t=y1(),i=M1(),s=kl(9,2);Object.assign(y.white,{...n,bumpScale:1.4,roughness:.75,metalness:.15,color:new re(15920612)}),Object.assign(y.panel,{...e,bumpScale:1.2,roughness:.8,metalness:.25,color:new re(13617340)}),Object.assign(y.metal,{...t,roughness:1,metalness:.85,color:new re(10132900)}),Object.assign(y.dark,{...s,bumpScale:1,roughness:.7,metalness:.6,color:new re(3816772)}),Object.assign(y.orange,{...kl(3,2),bumpScale:.8,roughness:.7,metalness:.15}),Object.assign(y.found,{...i,bumpScale:2,roughness:.95,color:new re(10853004)}),y.glass.roughness=.02,y.glass.metalness=.1,y.glass.opacity=.28,y.glass.envMapIntensity=2.2,y.solar.roughness=.12,y.solar.envMapIntensity=1.8;for(let r in y)y[r].needsUpdate=!0}var cs=E1();{let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d");e.fillStyle="#1d3266",e.fillRect(0,0,64,64),e.strokeStyle="#9fb4e0",e.lineWidth=1.5;for(let i=0;i<=64;i+=16)e.beginPath(),e.moveTo(i,0),e.lineTo(i,64),e.stroke(),e.beginPath(),e.moveTo(0,i),e.lineTo(64,i),e.stroke();let t=new Zt(n);t.colorSpace=_t,t.wrapS=t.wrapT=$n,t.repeat.set(3,2),y.solar.map=t,y.solar.color.set(16777215)}function K(n,e,t=0,i=0,s=0,r){let o=new Z(n,e);return o.position.set(t,i,s),o.castShadow=!0,o.receiveShadow=!0,r&&r.add(o),o}var dt=(n,e,t)=>new Ke(n,e,t),lt=(n,e,t,i=16)=>new Ge(n,e,t,i),Yh;function Sn(){if(Yh)return Yh;let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.6)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Yh=new Zt(n),Yh}function ve(n,e,t,i=0,s=0,r=0){let o=new ri(new ei({map:Sn(),color:n,transparent:!0,blending:Le,depthWrite:!1}));return o.scale.set(e,e,1),o.position.set(i,s,r),t&&t.add(o),o}function qn(n,e,t=!1){let i=K(t?dt(e*2,4,e*2):lt(e,e*1.05,4,20),y.found,0,-1.8,0,n);i.castShadow=!1,i.userData.found=!0}var ni={solar(n,e){qn(n,2.2,!0),K(lt(.18,.25,2.2),y.metal,0,1.1,0,n);let t=new ae;t.position.y=2.3,n.add(t);let i=K(dt(4.2,.12,2.8),y.solar,0,0,0,t);K(dt(4.4,.08,.1),y.metal,0,-.05,1.42,t),K(dt(4.4,.08,.1),y.metal,0,-.05,-1.42,t),e.pivot=t,e.panel=i},oxygen(n,e){qn(n,3),K(lt(1,1,3.6),y.white,-1.3,1.8,0,n),K(new ze(1,16,8,0,Math.PI*2,0,Math.PI/2),y.white,-1.3,3.6,0,n),K(lt(1,1,3.6),y.white,1.3,1.8,0,n),K(new ze(1,16,8,0,Math.PI*2,0,Math.PI/2),y.white,1.3,3.6,0,n),K(lt(1.02,1.02,.3),y.orange,-1.3,2.4,0,n),K(lt(1.02,1.02,.3),y.orange,1.3,2.4,0,n),K(dt(1.4,1.6,1.8),y.panel,0,.8,1,n),K(lt(.12,.12,2.6),y.metal,0,3.2,0,n).rotation.z=Math.PI/2;let t=new ae;t.position.set(0,1.75,1.95),n.add(t);for(let i=0;i<4;i++){let s=K(dt(.15,.7,.05),y.dark,0,0,0,t);s.rotation.z=i*Math.PI/2,s.position.set(Math.sin(i*Math.PI/2)*.3,Math.cos(i*Math.PI/2)*.3,0),s.rotation.z=-i*Math.PI/2}e.fan=t,e.light=ve(6741503,1.2,n,0,1.75,2)},habitat(n,e){qn(n,6.2),K(lt(6,6,1.2,28),y.panel,0,.6,0,n);let t=K(new ze(5.8,28,12,0,Math.PI*2,0,Math.PI/2),y.white,0,1.2,0,n);t.scale.y=.85;let i=K(new Ge(5.72,5.84,.7,28,1,!0),y.window,0,2,0,n);K(lt(.1,.1,3),y.metal,0,7.4,0,n),e.tip=ve(16728128,1.2,n,0,8.9,0),K(dt(2.2,2.6,2.8),y.white,0,1.3,6.4,n),K(dt(1.2,2,.1),y.dark,0,1.1,7.82,n),K(dt(2.3,.3,2.9),y.orange,0,2.7,6.4,n),e.windows=[i]},extractor(n,e){qn(n,2.6,!0),K(dt(4,.6,4),y.panel,0,.3,0,n);for(let[i,s]of[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4]])K(lt(.12,.15,6),y.metal,i*.7,3.3,s*.7,n).rotation.set(s*.08,0,-i*.08);K(dt(1.6,.4,1.6),y.orange,0,6.2,0,n);let t=K(lt(.3,.3,4.5),y.metal,0,3,0,n);K(lt(.9,.9,1.6),y.white,1.7,1.4,1.2,n),e.drill=t,e.light=ve(10476799,1.2,n,1.7,2.5,1.2)},greenhouse(n,e){qn(n,5,!0),K(dt(10,.5,6),y.panel,0,.25,0,n);let t=K(new Ge(3,3,10,20,1,!1,0,Math.PI),y.glass,0,.5,0,n);t.rotation.set(0,0,Math.PI/2),t.castShadow=!1;for(let i=0;i<5;i++)K(new De(3,.08,6,20,Math.PI),y.white,-4.5+i*2.25,.5,0,n).rotation.y=Math.PI/2;for(let i=0;i<14;i++){let s=-4.2+i%7*1.4,r=i<7?-1.2:1.2,o=K(new Wt(.45,1.2+i%3*.3,6),y.plant,s,1.2,r,n);o.castShadow=!1}K(dt(9.6,.3,.5),y.dark,0,.7,-1.2,n),K(dt(9.6,.3,.5),y.dark,0,.7,1.2,n),e.light=ve(16737996,4,n,0,2.5,0)},fabricator(n,e){qn(n,4,!0),K(dt(7,3.6,5),y.panel,0,1.8,0,n),K(dt(7.1,.4,5.1),y.orange,0,3.4,0,n),K(dt(3,2.6,.1),y.dark,0,1.3,2.52,n);let t=new ae;t.position.set(2.2,3.6,0),n.add(t),K(lt(.35,.45,.6),y.metal,0,.3,0,t);let i=K(dt(.3,2.2,.3),y.orange,0,1.4,0,t),s=K(dt(.25,1.6,.25),y.metal,0,2.4,.6,t);s.rotation.x=.9,e.arm=t,e.spark=ve(16764006,1.2,n,2.2,5.7,1.2),K(dt(1.2,1.2,1.2),y.dark,-2.4,.6,3.2,n),K(dt(1,1,1),y.dark,-1.1,.5,3.1,n)},turret(n,e){qn(n,1.8),K(lt(1.4,1.8,1.2,12),y.metal,0,.6,0,n),K(lt(.5,.7,1.2,10),y.dark,0,1.8,0,n);let t=new ae;t.position.y=2.7,n.add(t),K(dt(1.6,1,1.8),y.white,0,0,0,t),K(dt(1.65,.2,1.85),y.orange,0,.35,0,t),K(lt(.12,.12,2.2,8),y.dark,-.4,0,-1.6,t).rotation.x=Math.PI/2,K(lt(.12,.12,2.2,8),y.dark,.4,0,-1.6,t).rotation.x=Math.PI/2,e.eye=ve(3401471,.9,t,0,.1,-.95),e.head=t},reactor(n,e){qn(n,5.2),K(lt(5,5.2,1.4,24),y.panel,0,.7,0,n);let t=K(new ze(2,20,14),y.cyan,0,4.2,0,n);t.castShadow=!1;let i=K(new De(3.2,.35,10,32),y.white,0,4.2,0,n),s=K(new De(3.2,.35,10,32),y.white,0,4.2,0,n);s.rotation.x=Math.PI/2;for(let r=0;r<4;r++){let o=r*Math.PI/2;K(dt(.6,3,.6),y.metal,Math.cos(o)*3.6,2.2,Math.sin(o)*3.6,n)}e.core=t,e.r1=i,e.r2=s,e.light=ve(3401471,9,n,0,4.2,0)},beacon(n,e){let t=K(lt(7,7.3,.6,8),y.found,0,0,0,n);K(lt(7.3,7.6,4,8),y.found,0,-2.3,0,n).castShadow=!1,K(new nn(4.2,4.8,32),y.orange,0,.32,0,n).rotation.x=-Math.PI/2,K(new nn(1.5,2,4),y.white,0,.32,0,n).rotation.x=-Math.PI/2,e.lights=[];for(let i=0;i<8;i++){let s=i*Math.PI/4+Math.PI/8;e.lights.push(ve(16755251,1.2,n,Math.cos(s)*6.6,.5,Math.sin(s)*6.6))}K(lt(.18,.3,9,8),y.metal,8.6,4.2,0,n),K(dt(1.6,.1,1.2),y.white,8.6,8.7,0,n).rotation.z=.4,e.tip=ve(16724016,2,n,8.6,9.2,0),t.castShadow=!1},lamp(n,e){K(lt(.4,.5,.4,8),y.found,0,0,0,n),K(lt(.08,.1,4.2,6),y.metal,0,2.1,0,n),K(dt(.6,.2,.6),y.dark,0,4.3,0,n);let t=K(new ze(.2,8,6),y.lamp,0,4.15,0,n);t.castShadow=!1,e.glow=ve(16767392,1.7,n,0,4.1,0)},terraformer(n,e){qn(n,7),K(lt(7,7.5,2,6),y.panel,0,1,0,n),K(lt(2.5,4.5,26,6),y.white,0,15,0,n);for(let i=0;i<3;i++)K(lt(4.6-i*.7,4.6-i*.7,.8,6),y.orange,0,6+i*8,0,n);e.rings=[];for(let i=0;i<3;i++){let s=K(new De(6-i*1.2,.25,8,40),y.cyan,0,10+i*8,0,n);s.castShadow=!1,e.rings.push(s)}for(let i=0;i<6;i++){let s=i*Math.PI/3,r=K(dt(1.2,10,1.2),y.metal,Math.cos(s)*6,5,Math.sin(s)*6,n);r.rotation.y=-s}let t=K(new Ge(.6,1.4,400,12,1,!0),new He({color:6743807,transparent:!0,opacity:0,blending:Le,depthWrite:!1,side:ut}),0,228,0,n);t.castShadow=!1,t.receiveShadow=!1,e.beam=t,e.top=ve(6743807,10,n,0,28,0)}};var w1=[16751162,3850495,8257418,16740277,16769354].map(n=>new pe({color:1118481,emissive:n,emissiveIntensity:.6,roughness:.1,metalness:.6})),b1=[15525596,14278116,15259332].map(n=>new pe({color:n,roughness:.7}));function T1(n){let e=new ae,t=b1[n%b1.length],i=w1[n%w1.length],s=(g,x,v,m,E,w=e)=>{let M=new Z(g,x);return M.position.set(v,m,E),M.castShadow=!0,w.add(M),M},r=new pi([[0,0],[.2,0],[.24,.12],[.27,.42],[.25,.55],[.12,.62],[0,.62]].map(([g,x])=>new $(g,x)),12),o=s(r,t,0,.72,0);o.scale.z=.8,s(new De(.2,.04,6,16),y.orange,0,.77,0).rotation.x=Math.PI/2,s(new Ge(.16,.18,.06,12),y.dark,0,1.36,0);let a=s(new ze(.21,16,12),t,0,1.58,0),l=s(new ze(.19,16,10,Math.PI*.12,Math.PI*.76,Math.PI*.28,Math.PI*.4),i,0,1.58,.035);s(new Ke(.02,.12,.02),y.metal,.12,1.82,-.05).rotation.z=-.3,s(new Ke(.36,.42,.18),y.panel,0,1.08,-.24),s(new Ke(.3,.06,.19),y.orange,0,1.25,-.24),ve(9306032,.25,e,.12,.96,-.34);let c=(g,x,v,m,E)=>{let w=new ae;w.position.set(g,x,0),e.add(w);let M=s(new Th(m,v,4,8),t,0,-v/2-m,0,w);return s(new Ge(m*1.15,m*1.15,.05,8),E?y.orange:y.dark,0,-v*.45,0,w),E?s(new Ke(m*2.4,.1,m*3.4),y.dark,0,-v-m*1.6,.04,w):s(new ze(m*1.2,8,6),y.dark,0,-v-m*1.6,0,w),w},d=c(-.11,.74,.5,.075,!0),u=c(.11,.74,.5,.075,!0),f=c(-.33,1.27,.42,.06,!1),p=c(.33,1.27,.42,.06,!1);return f.rotation.z=-.12,p.rotation.z=.12,{group:e,legL:d,legR:u,armL:f,armR:p,body:o,head:a,visor:l}}var FR=new pe({color:he.enemy[0],roughness:.3,metalness:.6,flatShading:!0,emissive:1049856}),T_=new pe({color:he.enemy[1],emissive:he.enemy[2],emissiveIntensity:.8,roughness:.2,flatShading:!0}),R_=new He({color:16764992});function A_(n,e,t){let i=document.createElement("canvas");i.width=128,i.height=256;let s=i.getContext("2d");s.fillStyle="#000",s.fillRect(0,0,128,256);let r=t,o=()=>(r=(r*9301+49297)%233280,r/233280),a=128/n,l=256/e;for(let d=0;d<n;d++)for(let u=0;u<e;u++)o()<.65&&(s.fillStyle=o()<.8?"#ffd9a0":"#a0d8ff",s.fillRect(d*a+a*.2,u*l+l*.25,a*.6,l*.5));let c=new Zt(i);return c.colorSpace=_t,c}var Fl=[];function S1(n){let e=new pe({color:14210252,roughness:.5,metalness:.2,emissive:16777215,emissiveMap:A_(6,14,n),emissiveIntensity:.2});return Fl.push(e),e}var _1=[S1(7),S1(31)],Ol;function R1(){if(Ol)return Ol;let n=document.createElement("canvas");n.width=256,n.height=128;let e=n.getContext("2d");e.fillStyle="#0a3a6a",e.fillRect(0,0,256,128),e.strokeStyle="rgba(127,230,255,.35)",e.lineWidth=1;for(let i=0;i<256;i+=16)e.beginPath(),e.moveTo(i,0),e.lineTo(i,128),e.stroke();for(let i=0;i<128;i+=16)e.beginPath(),e.moveTo(0,i),e.lineTo(256,i),e.stroke();e.fillStyle="#7fffc8";let t=[[40,40,22,16],[52,62,10,20],[70,86,12,18],[118,36,16,12],[128,56,14,26],[150,34,40,18],[176,52,22,14],[206,88,16,10],[96,24,12,8],[190,22,20,8]];for(let[i,s,r,o]of t)e.beginPath(),e.ellipse(i,s,r,o,.3,0,Math.PI*2),e.fill();return e.fillStyle="#ffffff",e.fillRect(0,0,256,6),e.fillRect(0,122,256,6),Ol=new Zt(n),Ol.colorSpace=_t,Ol}Object.assign(ni,{plaza(n,e){qn(n,7.2),K(lt(7.2,7.4,.4,8),y.panel,0,.2,0,n),K(new nn(5.4,5.8,48),y.orange,0,.42,0,n).rotation.x=-Math.PI/2,K(lt(1.6,2,1.1,16),y.white,0,.95,0,n),K(lt(1.65,1.65,.15,16),y.cyan,0,1.52,0,n);for(let r=0;r<6;r++){let o=r*Math.PI/3+Math.PI/6,a=K(dt(2.4,.4,.7),y.panel,Math.cos(o)*5.2,.6,Math.sin(o)*5.2,n);a.rotation.y=-o+Math.PI/2,K(dt(.12,3.2,.12),y.metal,Math.cos(o+.5)*6.6,1.8,Math.sin(o+.5)*6.6,n),ve(16767392,1.1,n,Math.cos(o+.5)*6.6,3.5,Math.sin(o+.5)*6.6)}let t=new Z(new ze(1.5,32,20),new He({map:R1(),transparent:!0,opacity:.75,blending:Le,depthWrite:!1}));t.position.y=4,n.add(t);let i=ve(6736127,5,n,0,4,0),s=new Z(new Ge(1.2,1.6,2.4,20,1,!0),new He({color:8382207,transparent:!0,opacity:.12,blending:Le,depthWrite:!1,side:ut}));s.position.y=2.7,n.add(s),e.earth=t,e.halo=i},drones(n,e){qn(n,3.8,!0),K(dt(7.4,.5,7.4),y.panel,0,.25,0,n);for(let[s,r]of[[-1.9,-1.9],[1.9,-1.9],[-1.9,1.9],[1.9,1.9]])K(lt(1.1,1.1,.1,16),y.dark,s,.55,r,n),K(new nn(.75,.9,20),y.orange,s,.62,r,n).rotation.x=-Math.PI/2;K(dt(1.2,4,1.2),y.white,3,2.2,3,n),K(dt(1.25,.3,1.25),y.orange,3,3.6,3,n);let t=new ae;t.position.set(3,4.6,3),n.add(t);let i=K(new ze(.9,12,6,0,Math.PI*2,0,Math.PI/3),y.white,0,0,0,t);i.rotation.x=Math.PI*.6,K(lt(.05,.05,.8,4),y.metal,0,.1,.2,t).rotation.x=1.1,e.dish=t,e.light=ve(8382207,1.4,n,3,5.4,3)},apartment(n,e){qn(n,4.4,!0),K(dt(8,1,8),y.panel,0,.5,0,n),K(dt(5,18,5),_1[0],-1.2,10,-1.2,n),K(dt(4,12,4),_1[1],2,7,2,n),K(dt(5.2,.5,5.2),y.orange,-1.2,19.2,-1.2,n),K(dt(4.2,.5,4.2),y.orange,2,13.2,2,n),K(lt(.1,.1,4,6),y.metal,-1.2,21.4,-1.2,n),e.tip=ve(16728128,1.6,n,-1.2,23.5,-1.2),K(new ze(1.6,16,8,0,Math.PI*2,0,Math.PI/2),y.glass,2,13.4,2,n).castShadow=!1},vfarm(n,e){qn(n,4),K(lt(3.8,4,1,16),y.panel,0,.5,0,n);let t=K(lt(3.2,3.2,14,16),y.glass,0,8,0,n);t.castShadow=!1;for(let i=0;i<6;i++){K(lt(3,3,.25,16),y.white,0,2+i*2.3,0,n);for(let s=0;s<7;s++){let r=s/7*Math.PI*2+i,o=K(new Wt(.4,.9,5),y.plant,Math.cos(r)*2.2,2.6+i*2.3,Math.sin(r)*2.2,n);o.castShadow=!1}}K(new ze(3.2,16,8,0,Math.PI*2,0,Math.PI/2),y.glass,0,15,0,n).castShadow=!1,e.light=ve(16737996,9,n,0,8,0)},lifehub(n,e){qn(n,5.5),K(lt(5.5,5.8,1.2,20),y.panel,0,.6,0,n);let t=K(new ze(4.5,20,12,0,Math.PI*2,0,Math.PI/2),y.white,0,1.2,0,n);K(new De(4.6,.3,8,32),y.orange,0,1.6,0,n).rotation.x=Math.PI/2;for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4;K(lt(.9,.9,5,12),y.white,Math.cos(r)*5.2,2.5,Math.sin(r)*5.2,n),K(lt(.95,.95,.4,12),y.cyan,Math.cos(r)*5.2,4.2,Math.sin(r)*5.2,n)}let i=new ae;i.position.y=6,n.add(i);for(let s=0;s<3;s++){let r=K(dt(4,.1,.6),y.dark,0,0,0,i);r.rotation.y=s*Math.PI/3}e.fan=i,e.light=ve(6741503,5,n,0,6,0)},launch(n,e){qn(n,9,!0),K(dt(18,1.2,18),y.found,0,.6,0,n),K(new nn(5,6,32),y.orange,0,1.25,0,n).rotation.x=-Math.PI/2;for(let[s,r]of[[6,-1.5],[6,1.5],[9,-1.5],[9,1.5]])K(dt(.4,34,.4),y.metal,s,18,r,n);for(let s=0;s<8;s++)K(dt(3.4,.25,3.4),y.metal,7.5,4+s*4,0,n);K(dt(4,.5,.8),y.orange,4.2,26,0,n);let t=new ae;t.position.y=1.2,n.add(t),K(lt(2.4,2.8,24,20),y.white,0,13,0,t),K(new Wt(2.4,7,20),y.white,0,28.5,0,t),K(lt(2.45,2.45,1.2,20),y.orange,0,20,0,t),K(lt(2.45,2.45,.6,20),y.dark,0,8,0,t);for(let s=0;s<4;s++){let r=s*Math.PI/2,o=K(dt(.4,6,3),y.panel,Math.cos(r)*2.8,3.5,Math.sin(r)*2.8,t);o.rotation.y=-r}for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4;K(lt(.8,1.2,2,10),y.dark,Math.cos(r)*1.2,.6,Math.sin(r)*1.2,t)}let i=new Z(new Wt(3,16,16,1,!0),y.flame);i.rotation.x=Math.PI,i.position.y=-8,i.visible=!1,t.add(i),e.ship=t,e.flame=i,e.tip=ve(16777215,3,t,0,32.5,0)},monument(n,e){qn(n,6),K(lt(6,6.5,1.5,8),y.panel,0,.75,0,n),K(lt(4.5,5,1,8),y.white,0,2,0,n);let t=K(new Ge(.6,1.8,30,4),y.white,0,17,0,n);t.rotation.y=Math.PI/4,e.rings=[];let i=[new pe({color:3346688,emissive:16742954,emissiveIntensity:2}),new pe({color:8755,emissive:6743807,emissiveIntensity:2}),new pe({color:1127168,emissive:10551104,emissiveIntensity:2})];for(let s=0;s<3;s++){let r=K(new De(4-s*.6,.18,8,40),i[s],0,14+s*5,0,n);r.castShadow=!1,e.rings.push(r)}e.top=ve(16777215,8,n,0,33,0)}});function A1(){let n=new ae,e=K(new ze(.42,14,8),y.white,0,0,0,n);e.scale.y=.55,K(lt(.44,.44,.08,14),y.orange,0,0,0,n);let t=[];for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4,o=Math.cos(r)*.7,a=Math.sin(r)*.7;K(dt(.6,.05,.08),y.dark,o*.55,0,a*.55,n).rotation.y=-r;let l=K(lt(.28,.28,.02,10),new He({color:2236962,transparent:!0,opacity:.45}),o,.08,a,n);t.push(l)}let i=ve(8382207,.9,n,0,-.2,0);return{group:n,rotors:t,eye:i}}var va={crystal:T_,eye:R_};ni._earthTex=R1;var Bl=class n extends Z{constructor(){super(n.Geometry,new He({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;let e=new S,t=new S,i=new Sl(16,16),s=new Sl(16,16),r=si,o=n.Geometry,a=new vr({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),l=new vr({uniforms:{map:{value:i},scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),c=new Z(o,a),d=[],u=xa.Shader,f=new vr({name:u.name,uniforms:{map:{value:null},occlusionMap:{value:s},color:{value:new re(16777215)},scale:{value:new $},screenPosition:{value:new S}},vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Le,transparent:!0,depthWrite:!1}),p=new Z(o,f);this.addElement=function(E){d.push(E)};let g=new $,x=new $,v=new Ih,m=new Vt;this.onBeforeRender=function(E,w,M){E.getCurrentViewport(m);let L=E.getRenderTarget(),A=L!==null?L.texture.type:si;r!==A&&(i.dispose(),s.dispose(),i.type=s.type=A,r=A);let P=m.w/m.z,I=m.z/2,_=m.w/2,b=16/m.w;if(g.set(b*P,b),v.min.set(m.x,m.y),v.max.set(m.x+(m.z-16),m.y+(m.w-16)),t.setFromMatrixPosition(this.matrixWorld),t.applyMatrix4(M.matrixWorldInverse),!(t.z>0)&&(e.copy(t).applyMatrix4(M.projectionMatrix),x.x=m.x+e.x*I+I-8,x.y=m.y+e.y*_+_-8,v.containsPoint(x))){E.copyFramebufferToTexture(i,x);let H=a.uniforms;H.scale.value=g,H.screenPosition.value=e,E.renderBufferDirect(M,null,o,a,c,null),E.copyFramebufferToTexture(s,x),H=l.uniforms,H.scale.value=g,H.screenPosition.value=e,E.renderBufferDirect(M,null,o,l,c,null);let O=-e.x*2,F=-e.y*2;for(let W=0,te=d.length;W<te;W++){let q=d[W],le=f.uniforms;le.color.value.copy(q.color),le.map.value=q.texture,le.screenPosition.value.x=e.x+O*q.distance,le.screenPosition.value.y=e.y+F*q.distance,b=q.size/m.w;let Y=m.w/m.z;le.scale.value.set(b*Y,b),f.uniformsNeedUpdate=!0,E.renderBufferDirect(M,null,o,f,p,null)}}},this.dispose=function(){a.dispose(),l.dispose(),f.dispose(),i.dispose(),s.dispose();for(let E=0,w=d.length;E<w;E++)d[E].texture.dispose()}}},xa=class{constructor(e,t=1,i=0,s=new re(16777215)){this.texture=e,this.size=t,this.distance=i,this.color=s}};xa.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`};Bl.Geometry=function(){let n=new At,e=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),t=new bl(e,5);return n.setIndex([0,1,2,0,2,3]),n.setAttribute("position",new $r(t,3,0,!1)),n.setAttribute("uv",new $r(t,2,3,!1)),n}();var C_=540,Vl,ya,mi,Ma,Tp,Wl,Rp,Sr,ql=(n,e,t)=>new re().setRGB(n,e,t,_t),wr=he.sky,br=n=>ql(n[0],n[1],n[2]),hs={dayTop:br(wr.dayTop),dayHor:br(wr.dayHor),setTop:br(wr.setTop),setHor:br(wr.setHor),nightTop:br(wr.nightTop),nightHor:br(wr.nightHor),earthTop:ql(.22,.44,.82),earthHor:ql(.68,.8,.92),stormHor:br(wr.storm),halo:br(wr.halo)},On={},Xl,L1=[];function P_(n){let t=document.createElement("canvas");t.width=t.height=256;let i=t.getContext("2d");if(n==="streak"){let s=i.createLinearGradient(0,0,256,0);s.addColorStop(0,"rgba(255,255,255,0)"),s.addColorStop(.5,"rgba(255,255,255,1)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,256/2-2,256,4);let r=i.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);r.addColorStop(0,"rgba(255,255,255,.35)"),r.addColorStop(1,"rgba(255,255,255,0)"),i.globalCompositeOperation="destination-in",i.fillStyle=r,i.fillRect(0,0,256,256)}else if(n==="ring"){let s=i.createRadialGradient(128,128,92.16,128,128,128);s.addColorStop(0,"rgba(255,255,255,0)"),s.addColorStop(.7,"rgba(255,255,255,.35)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,256,256)}else if(n==="hex"){i.fillStyle="rgba(255,255,255,.22)",i.beginPath();for(let s=0;s<6;s++){let r=s*Math.PI/3;i[s?"lineTo":"moveTo"](256/2+Math.cos(r)*256*.45,256/2+Math.sin(r)*256*.45)}i.fill()}else{let s=i.createRadialGradient(128,128,0,128,128,128);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.15,"rgba(255,240,220,.6)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,256,256)}return new Zt(t)}function I_(n){Xl=new gn,n.add(Xl);let e=new Bl,t=(i,s,r,o)=>{let a=new xa(P_(i),s,r,new re(o));a.base=new re(o),e.addElement(a),L1.push(a)};t("glow",380,0,16771276),t("streak",1600,0,10148095),t("streak",900,0,16765088),t("glow",46,.4,3812386),t("ring",130,.62,2366490),t("glow",80,.86,2760728),t("ring",240,1.12,1448482),Xl.add(e)}var Ap,C1,D1,jh=null,P1=0,Cp={mars:[.35,[.2,.9,.7],[.3,.5,1]],europa:[.6,[.4,.6,1],[.8,.4,1]],kepler:[1,[.3,1,.5],[.9,.3,.9]]}[he.id],Gs;function L_(n){let e=new Ge(1700,1700,900,160,1,!0,-1.2,2.6);Gs=new Z(e,new ot({uniforms:{uT:{value:0},uI:{value:0},uC1:{value:new re(...Cp[1])},uC2:{value:new re(...Cp[2])}},vertexShader:`uniform float uT; varying vec2 vUv;
      void main(){ vUv = uv; vec3 p = position; float w = sin(uv.x * 18.0 + uT * 0.25) * 0.06 + sin(uv.x * 41.0 - uT * 0.4) * 0.025;
        p.xz *= 1.0 + w; gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,fragmentShader:`uniform float uT, uI; uniform vec3 uC1, uC2; varying vec2 vUv;
      void main(){
        float x = vUv.x * 60.0 + sin(vUv.x * 9.0 + uT * 0.2) * 4.0;
        float rays = (0.5 + 0.5 * sin(x * 2.1 + uT * 0.7)) * (0.55 + 0.45 * sin(x * 5.3 - uT * 1.1)) * (0.6 + 0.4 * sin(x * 0.7 + uT * 0.3));
        float band = smoothstep(0.0, 0.18, vUv.y) * smoothstep(1.0, 0.35, vUv.y);
        float edge = smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x);
        float glowB = exp(-pow((vUv.y - 0.12) * 9.0, 2.0)) * 0.6;
        vec3 col = mix(uC1, uC2, smoothstep(0.15, 0.85, vUv.y));
        float a = (rays * band + glowB * (0.5 + 0.5 * sin(x * 0.9 + uT))) * edge * uI;
        gl_FragColor = vec4(col * a, 1.0);
      }`,transparent:!0,blending:Le,depthWrite:!1,side:ut,fog:!1})),Gs.position.y=700,Gs.rotation.y=2.2,Gs.frustumCulled=!1,Gs.renderOrder=-8,n.add(Gs)}var D_=ql(.36,.42,.62),H_=ql(.75,.65,.55),Gl=new re,I1=new re,Hn=new S;function H1(n){Sr=new ot({uniforms:{uTop:{value:new re},uHor:{value:new re},uSunDir:{value:new S(0,1,0)},uSunCol:{value:new re(1,.95,.85)},uHalo:{value:new re},uSunVis:{value:1}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`
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
      }`,side:Nn,depthWrite:!1}),Vl=new Z(new ze(4e3,32,16),Sr),Vl.frustumCulled=!1,Vl.renderOrder=-10,n.add(Vl),L_(n);let e=new At,t=[],i=[];for(let o=0;o<2600;o++){let a=Math.random()*2-1,l=Math.random()*Math.PI*2,c=Math.sqrt(1-a*a);if(a<-.05)continue;t.push(c*Math.cos(l)*3500,a*3500,c*Math.sin(l)*3500);let d=.35+Math.random()*.45,u=Math.random();i.push(d*(u>.8?1:.85),d*.9,d*(u<.2?1:.95))}t.push(-1800,1500,-2400),i.push(.5,.75,1.4),e.setAttribute("position",new nt(t,3)),e.setAttribute("color",new nt(i,3)),ya=new _i(e,new fi({size:3,map:Sn(),sizeAttenuation:!1,vertexColors:!0,transparent:!0,depthWrite:!1,fog:!1})),ya.frustumCulled=!1,ya.renderOrder=-9,n.add(ya);let s=new pe({color:9076080,roughness:1,fog:!1,flatShading:!0});if(Wl=new Z(new zn(60,1),s),Wl.scale.set(1.3,.9,1),Rp=new Z(new zn(24,1),s),he.extras==="moons"&&n.add(Wl,Rp),he.extras==="jupiter"){let o=document.createElement("canvas");o.width=512,o.height=256;let a=o.getContext("2d"),l=["#e8d8c0","#c89a70","#f0e6d4","#b07850","#e0c8a8","#9a6a48","#efe2cc","#c8a07a","#e6d6bc"];for(let p=0;p<256;p++)a.fillStyle=l[Math.floor(p/256*l.length*2+Math.sin(p*.3)*.6)%l.length],a.fillRect(0,p,512,1);a.globalAlpha=.25;for(let p=0;p<400;p++)a.fillStyle=l[p%l.length],a.fillRect(Math.random()*512,Math.random()*256,30+Math.random()*80,2);a.globalAlpha=1,a.fillStyle="#b8583a",a.beginPath(),a.ellipse(330,165,34,16,0,0,Math.PI*2),a.fill();let c=new Zt(o);c.colorSpace=_t;let d=new Z(new ze(900,48,32),new He({map:c,fog:!1}));d.rotation.z=.06;let u=new Z(new ze(905,48,32,Math.PI*.55,Math.PI),new He({color:0,transparent:!0,opacity:.55,fog:!1}));d.add(u);let f=new Z(new zn(30,2),new He({color:15257712,fog:!1}));n.add(d,f),On={jup:d,io:f}}if(he.extras==="twinsuns"){let o=new ri(new ei({map:Sn(),color:16751200,transparent:!0,blending:Le,depthWrite:!1,fog:!1}));o.scale.set(500,500,1);let a=new Z(new nn(700,1100,64),new He({color:14207231,transparent:!0,opacity:.35,side:ut,fog:!1,depthWrite:!1})),l=new Z(new ze(420,32,24),new He({color:9075408,fog:!1}));l.add(a),a.rotation.x=1.2,n.add(o,l),On={s2:o,gas:l};let c=document.createElement("canvas");c.width=c.height=512;let d=c.getContext("2d"),u=d.createRadialGradient(256,256,120,256,256,256);u.addColorStop(0,"rgba(255,250,230,0)"),u.addColorStop(.08,"rgba(255,245,220,1)"),u.addColorStop(.3,"rgba(255,190,110,.85)"),u.addColorStop(.7,"rgba(200,90,40,.35)"),u.addColorStop(1,"rgba(120,40,20,0)"),d.fillStyle=u,d.fillRect(0,0,512,512),d.globalCompositeOperation="destination-out";for(let w=0;w<40;w++)d.strokeStyle=`rgba(0,0,0,${.1+Math.random()*.2})`,d.lineWidth=1+Math.random()*3,d.beginPath(),d.arc(256,256,130+Math.random()*120,0,Math.PI*2),d.stroke();let f=new Zt(c),p=new ae,g=w=>new He({map:f,transparent:!0,opacity:w,blending:Le,depthWrite:!1,side:ut,fog:!1}),x=new Z(new nn(150,560,96,1),g(.9));x.userData.op=.9,x.rotation.x=-1.35,p.add(x);let v=new Z(new nn(150,330,96,1),g(.75));v.userData.op=.75,p.add(v);let m=new Z(new Ln(150,64),new He({color:0,fog:!1,transparent:!0,depthWrite:!1}));m.userData.op=1,m.position.z=1,p.add(m);let E=new Z(new nn(150,158,96),new He({color:16770752,transparent:!0,opacity:.9,blending:Le,fog:!1,depthWrite:!1}));E.userData.op=.9,E.position.z=2,p.add(E),p.renderOrder=-7,n.add(p),On.bh=p,On.disk=x}mi=new ls(16773341,3),mi.castShadow=!0,mi.shadow.mapSize.set(h.hiShadows?4096:2048,h.hiShadows?4096:2048);let r=mi.shadow.camera;r.left=-70,r.right=70,r.top=70,r.bottom=-70,r.near=1,r.far=400,mi.shadow.bias=-4e-4,mi.shadow.normalBias=.6,n.add(mi,mi.target),I_(n),Ma=new xr(16765616,5909530,1),Tp=new Ph(4213360,.3),n.add(Ma,Tp),n.fog=new yh(14196848,.0016),U_(n),Ap=new as,C1=new Z(new ze(400,32,16),Sr),Ap.add(C1),D1=new ra(h.renderer)}var _r=null;function U_(n){if(he.id==="europa")return;let e=new ot({uniforms:{uT:{value:0},uHor:{value:new re},uSunC:{value:new re},uSunD:{value:new S},uNight:{value:0},uStorm:{value:0},uCov:{value:he.id==="kepler"?.58:.5},uTint:{value:new re(he.id==="kepler"?16777215:15914688)}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:`uniform float uT, uNight, uStorm, uCov; uniform vec3 uHor, uSunC, uSunD, uTint; varying vec3 vD;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }
      float fbm(vec2 p){ float v = 0.0, a = 0.5; for (int i = 0; i < 5; i++){ v += a * n(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; } return v; }
      void main(){
        vec3 d = normalize(vD); if (d.y < 0.0) discard;
        vec2 uv = d.xz / (d.y + 0.12) * 1.6;
        vec2 w = vec2(uT * 0.012, uT * 0.004);
        // \u62C9\u957F\u7684\u5377\u4E91\uFF1Ax \u65B9\u5411\u62C9\u4F38
        float c = fbm(uv * vec2(0.7, 1.6) + w) * 0.65 + fbm(uv * 3.1 - w * 1.7) * 0.35;
        float cov = uCov + uStorm * 0.35;
        float a = smoothstep(1.0 - cov, 1.0 - cov + 0.26, c);
        a *= smoothstep(0.0, 0.22, d.y) * (1.0 - uStorm * 0.4);
        float s = max(dot(d, normalize(uSunD)), 0.0);
        vec3 lit = mix(uHor * 1.05, uSunC * 1.25, 0.35 + pow(s, 6.0) * 0.6) * uTint;
        lit += uSunC * pow(s, 24.0) * (1.0 - a) * 1.5; // \u4E91\u8FB9\u94F6\u5149
        vec3 col = mix(lit, vec3(0.05, 0.06, 0.09), uNight * 0.85);
        gl_FragColor = vec4(col, a * mix(0.9, 0.4, uNight));
      }`,transparent:!0,depthWrite:!1,fog:!1,side:Nn});_r=new Z(new ze(3e3,48,24),e),_r.frustumCulled=!1,_r.renderOrder=-2,_r.userData.noAO=!0,n.add(_r)}function Ea(n,e){let t=h.time,i=t.t;t.t+=n/C_*(t.elevation<0?1.5:1),t.t>=1&&(t.t-=1),i<.25&&t.t>=.25&&(t.day++,t.dawn=!0);let s=(t.t-.25)*Math.PI*2;Hn.set(Math.cos(s),Math.sin(s),.35).normalize();let r=Hn.y;t.elevation=r,t.night=Xn(.05,-.18,r);let o=Xn(0,1,h.terraform),a=h.storm,l=Xn(-.05,.35,r),c=1-Math.abs(Ji((r-.05)/.3,-1,1));Gl.copy(hs.dayTop).lerp(hs.earthTop,o),I1.copy(hs.dayHor).lerp(hs.earthHor,o);let d=Sr.uniforms.uTop.value,u=Sr.uniforms.uHor.value;d.copy(hs.nightTop).lerp(hs.setTop,Xn(-.25,0,r)).lerp(Gl,l),u.copy(hs.nightHor).lerp(hs.setHor,Xn(-.25,0,r)).lerp(I1,l),a>0&&(Gl.copy(hs.stormHor).multiplyScalar(.25+.75*(1-t.night)),d.lerp(Gl,a*.85),u.lerp(Gl,a)),Sr.uniforms.uHalo.value.copy(hs.halo).multiplyScalar(Ji(c,0,1)*(1-o*.5)*(1-a)),Sr.uniforms.uSunDir.value.copy(Hn),Sr.uniforms.uSunVis.value=Xn(-.08,.02,r)*(1-a*.85),Vl.position.copy(e),ya.position.copy(e),Gs.position.set(e.x,e.y+700,e.z),Gs.material.uniforms.uT.value=performance.now()*.001,Gs.material.uniforms.uI.value=Cp[0]*t.night*(1-a)*(.75+.25*Math.sin(performance.now()*7e-5+t.day)),ya.material.opacity=Math.max(t.night,he.id==="europa"?.85:0)*(1-a);let f=h.time.t*Math.PI*6,p=-h.time.t*Math.PI*2+2;if(Wl.position.set(e.x+Math.cos(f)*2600,e.y+Math.sin(f)*1700+300,e.z-1300),Wl.lookAt(e),Rp.position.set(e.x+Math.cos(p)*2800,e.y+Math.sin(p)*2200,e.z+1600),On.jup){On.jup.position.set(e.x-1800,e.y+650,e.z-2600),On.jup.rotation.y+=4e-5;let v=h.time.t*Math.PI*8;On.io.position.set(e.x-1800+Math.cos(v)*1400,e.y+650+Math.sin(v)*300,e.z-2600+Math.sin(v)*1400)}if(Xl){Xl.position.copy(e).addScaledVector(Hn,3e3);let v=Xn(-.03,.12,r)*(1-a)*(he.id==="europa"?.6:1);for(let m of L1)m.color.copy(m.base).multiplyScalar(v)}On.bh&&(On.bh.position.set(e.x-2200,e.y+900,e.z+1900),On.bh.lookAt(e),On.disk.rotation.z+=n*.05,On.bh.children.forEach(v=>{v.material&&v.material.opacity!==void 0&&v.userData.op&&(v.material.opacity=v.userData.op*(.45+t.night*.55))})),On.s2&&(On.s2.position.copy(e).addScaledVector(new S(Hn.x*.8-.3,Hn.y*.9-.05,Hn.z+.4).normalize(),3e3),On.s2.material.opacity=Xn(-.2,.05,r)*.9,On.gas.position.set(e.x+1600,e.y+1100,e.z+2400));let g=Xn(-.04,.25,r);if(mi.intensity=3*g*(1-a*.6),mi.color.setRGB(1,zt(.7,.93,g),zt(.55,.85,g)),mi.position.copy(e).addScaledVector(Hn,200),mi.target.position.copy(e),Ma.intensity=zt(.45,.8,l)*(1-a*.3),Ma.color.copy(u).lerp(d,.3).lerp(D_,t.night*.85),he.id==="europa"&&Ma.color.lerp(H_,.6),Ma.groundColor.setRGB(zt(.05,.38,l),zt(.04,.18,l),zt(.05,.1,l)),Tp.intensity=zt(.8,.2,l),h.scene.fog.color.copy(u),_r){let v=_r.material.uniforms;_r.position.copy(e),v.uT.value+=n*60,v.uHor.value.copy(u),v.uSunC.value.copy(mi.color).multiplyScalar(Math.max(.15,g)),v.uSunD.value.copy(Hn),v.uNight.value=t.night,v.uStorm.value=a}h.scene.fog.density=zt(zt(.0016,.0032,t.night),.03,a)*(he.id==="europa"?.55:1);let x=performance.now();if(x-P1>4e3||!jh){P1=x;let v=jh;jh=D1.fromScene(Ap,.04,1,1e3),h.scene.environment=jh.texture,h.scene.environmentIntensity=zt(.85,.35,t.night),v&&v.dispose()}h.renderer.toneMappingExposure=zt(1,1.4,t.night)}function Pp(){let n=Math.floor(h.time.t*24.66),e=Math.floor((h.time.t*24.66-n)*60);return`${he.name} \xB7 \u7B2C ${h.time.day} \u65E5 \xB7 ${String(n).padStart(2,"0")}:${String(e).padStart(2,"0")}`}var cn=1400,ke=cn/2,Rr=400,Lp=cn/Rr,ds=Rr+1,jl=zl(he.seed),Yl=zl(he.seed*7+3),U1=zl(he.seed+42),Vs=[],us,Tr,Kh,oo,Zh;function N_(){let n=ti(he.seed);for(Vs.push({x:150,z:-120,r:70,depth:16,rim:6});Vs.length<he.craters;){let e=(n()-.5)*(cn-260),t=(n()-.5)*(cn-260);if(Math.hypot(e,t)<130)continue;let i=10+Math.pow(n(),2.2)*85;Vs.push({x:e,z:t,r:i,depth:i*(.18+n()*.12),rim:i*(.05+n()*.06)})}}var z_=0;function N1(n,e){let t=_p(jl,n*.0016,e*.0016,5)*he.hills,i=1-Math.abs(Yl(n*.0042,e*.0042));t+=i*i*i*he.ridges,t+=_p(U1,n*.025,e*.025,3)*he.detail;for(let s of Vs){let r=n-s.x,o=e-s.z,a=r*r+o*o;if(a>s.r*s.r*4)continue;let l=Math.sqrt(a)/s.r;l<1&&(t-=s.depth*(1-l*l)),t+=s.rim*Math.exp(-(((l-1)/.28)**2))}return t}var z1=0;function k_(n,e){let t=N1(n,e)-z1,i=Math.hypot(n,e);t=zt(z_+U1(n*.02,e*.02)*.6,t,Xn(45,150,i));let s=Math.max(Math.abs(n),Math.abs(e)),r=ke-200;if(s>r){let o=(s-r)/200,a=0,l=1,c=.0035;for(let d=0;d<3;d++){let u=1-Math.abs(Yl(n*c,e*c));a+=u*u*l,l*=.45,c*=2}t+=o*o*(110+a*70)*(.75+.25*jl(n*.008,e*.008))}return t}function de(n,e){let t=Ji((n+ke)/Lp,0,Rr-.001),i=Ji((e+ke)/Lp,0,Rr-.001),s=Math.floor(t),r=Math.floor(i),o=t-s,a=i-r,l=us[r*ds+s],c=us[r*ds+s+1],d=us[(r+1)*ds+s],u=us[(r+1)*ds+s+1];return o+a<1?l+(c-l)*o+(d-l)*a:u+(d-u)*(1-o)+(c-u)*(1-a)}function ao(n,e,t=2){let i=de(n,e);return Math.max(Math.abs(de(n+t,e)-i),Math.abs(de(n-t,e)-i),Math.abs(de(n,e+t)-i),Math.abs(de(n,e-t)-i))/t}function Jh(n,e,t=60){let i=0;for(let s=.2;s<=t;s+=.25){let r=n.x+e.x*s,o=n.y+e.y*s,a=n.z+e.z*s;if(o<de(r,a)){let l=i,c=s;for(let d=0;d<8;d++){let u=(l+c)/2;n.y+e.y*u<de(n.x+e.x*u,n.z+e.z*u)?c=u:l=u}return{dist:c,point:new S(n.x+e.x*c,n.y+e.y*c,n.z+e.z*c)}}i=s}return null}function k1(n){N_(),z1=N1(0,0),us=new Float32Array(ds*ds),oo=new In(cn,cn,Rr,Rr),oo.rotateX(-Math.PI/2);let e=oo.attributes.position;for(let s=0;s<e.count;s++){let r=k_(e.getX(s),e.getZ(s));e.setY(s,r),us[s]=r}Tr=new Float32Array(e.count*3);let t=new re;for(let s=0;s<e.count;s++){let r=e.getX(s),o=e.getZ(s),a=us[s],l=s%ds,c=s/ds|0,d=us[c*ds+Math.min(l+1,Rr)]-a,u=us[Math.min(c+1,Rr)*ds+l]-a,f=Ji(Math.hypot(d,u)/Lp*1.4,0,1),p=jl(r*.012,o*.012)*.5+.5,g=Yl(r*.08,o*.08)*.5+.5,x=he.ground.a,v=he.ground.b,m=he.ground.steep,E=he.ground.low,w=zt(x[0],v[0],p),M=zt(x[1],v[1],p),L=zt(x[2],v[2],p);w*=.9+g*.18,M*=.9+g*.16,L*=.9+g*.14,w=zt(w,m[0],f),M=zt(M,m[1],f),L=zt(L,m[2],f);let A=Xn(-4,-16,a);if(w=zt(w,E[0],A*.6),M=zt(M,E[1],A*.6),L=zt(L,E[2],A*.6),he.id==="europa"){let P=Math.abs(Yl(r*.006,o*.006));if(P<.05){let I=1-P/.05;w=zt(w,.55,I*.7),M=zt(M,.32,I*.7),L=zt(L,.24,I*.7)}}t.setRGB(w,M,L,_t),Tr[s*3]=t.r,Tr[s*3+1]=t.g,Tr[s*3+2]=t.b}Kh=new an(Tr.slice(),3),oo.setAttribute("color",Kh),oo.computeVertexNormals();let i=new pe({vertexColors:!0,roughness:.93,metalness:0});return i.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos; varying vec3 vWN;`).replace("#include <project_vertex>",`#include <project_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz; vWN = normalize(mat3(modelMatrix) * objectNormal);`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vWPos; varying vec3 vWN;
        float th(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float tn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(th(i), th(i + vec2(1, 0)), f.x), mix(th(i + vec2(0, 1)), th(i + vec2(1, 1)), f.x), f.y); }
        float tf(vec2 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * tn(p); p *= 2.03; a *= 0.5; } return s; }`).replace("#include <color_fragment>",`#include <color_fragment>
        float camD = distance(cameraPosition, vWPos);
        float near = 1.0 - smoothstep(25.0, 140.0, camD);
        float slope = 1.0 - clamp(vWN.y, 0.0, 1.0);
        float big = tf(vWPos.xz * 0.045);
        float mid = tf(vWPos.xz * 0.35);
        float fine = tn(vWPos.xz * 3.1) * 0.6 + tn(vWPos.xz * 7.7) * 0.4;
        vec3 c = diffuseColor.rgb;
        c *= 0.86 + big * 0.28;
        c *= mix(1.0, 0.92 + mid * 0.16, 0.5 + near * 0.5);
        c *= mix(1.0, 0.93 + fine * 0.14, near);
        // \u9661\u5761\uFF1A\u5206\u5C42\u7684\u5CA9\u77F3\u6761\u7EB9
        float strata = 0.5 + 0.5 * sin(vWPos.y * 2.2 + mid * 4.0);
        c = mix(c, c * (0.72 + strata * 0.3), smoothstep(0.25, 0.6, slope));
        // \u5E73\u5730\uFF1A\u98CE\u5439\u51FA\u7684\u6D45\u8272\u6C99\u7EB9
        float rip = 0.5 + 0.5 * sin(dot(vWPos.xz, vec2(0.8, 0.35)) * 2.6 + mid * 6.0);
        c = mix(c, c * 1.12, rip * (1.0 - smoothstep(0.05, 0.25, slope)) * near * 0.45);
        diffuseColor.rgb = c;`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
        {
          float e = 0.18;
          vec2 q = vWPos.xz;
          float h0 = tf(q * 0.6) * 0.5 + tn(q * 5.0) * 0.12;
          float hx = tf((q + vec2(e, 0.0)) * 0.6) * 0.5 + tn((q + vec2(e, 0.0)) * 5.0) * 0.12;
          float hz = tf((q + vec2(0.0, e)) * 0.6) * 0.5 + tn((q + vec2(0.0, e)) * 5.0) * 0.12;
          float k = (1.0 - smoothstep(20.0, 120.0, distance(cameraPosition, vWPos))) * 0.55;
          vec3 nw = normalize(vWN + vec3(-(hx - h0) / e, 0.0, -(hz - h0) / e) * k);
          normal = normalize((viewMatrix * vec4(nw, 0.0)).xyz);
        }`)},Zh=new Z(oo,i),Zh.receiveShadow=!0,n.add(Zh),O_(n),Zh}function O_(n){let e=ti(99),t=new Ri(1,0),i=t.attributes.position;for(let p=0;p<i.count;p++){let g=.75+e()*.5;i.setXYZ(p,i.getX(p)*g,i.getY(p)*g*.8,i.getZ(p)*g)}t.computeVertexNormals();let s=2600,r=new gr(t,new pe({color:he.rock,roughness:he.id==="europa"?.35:.92,flatShading:!0,map:cs.map,bumpMap:cs.bumpMap,bumpScale:3}),s);r.castShadow=!0,r.receiveShadow=!0;let o=new xt,a=new mn,l=new S,c=new S,d=new Pn,u=new re,f=0;for(;f<s;){let p=(e()-.5)*(cn-120),g=(e()-.5)*(cn-120);if(Math.hypot(p,g)<22||jl(p*.01,g*.01)<-.1&&e()<.7)continue;let m=e()<.06?1.8+e()*2.5:.2+Math.pow(e(),2)*1.2;l.set(m*(.8+e()*.6),m*(.6+e()*.5),m*(.8+e()*.6)),d.set(e()*.5,e()*Math.PI*2,e()*.5),a.setFromEuler(d),c.set(p,de(p,g)+l.y*.25,g),o.compose(c,a,l),r.setMatrixAt(f,o),u.setHSL(he.rockHSL[0]+e()*.02,he.rockHSL[1]+e()*.2,he.rockHSL[2]+e()*.14),r.setColorAt(f,u),m>1&&h.colliders.add({x:p,z:g,r:Math.max(l.x,l.z)*.85,kind:"rock"}),f++}n.add(r),he.id==="kepler"&&G_(n,e)}var F_=new re().setRGB(.3,.46,.2,_t),B_=new re().setRGB(.46,.5,.26,_t),Ip=new re().setRGB(.2,.38,.52,_t);function Dp(n,e){let t=oo.attributes.position,i=Kh.array,s=60+e*520;for(let r=0;r<t.count;r++){let o=t.getX(r),a=t.getZ(r),l=us[r],c=0;for(let p of n){let g=Math.hypot(o-p.x,a-p.z);c=Math.max(c,Xn(s,s*.55,g))}let d=Tr[r*3],u=Tr[r*3+1],f=Tr[r*3+2];if(c>0){let p=Yl(o*.03,a*.03)*.5+.5,g=c*Ji(p*1.4-.1,0,1)*Ji(e*1.5,0,1),x=p>.6?F_:B_;if(d=zt(d,x.r,g),u=zt(u,x.g,g),f=zt(f,x.b,g),l<-9&&e>.5){let v=c*Xn(-9,-13,l)*Xn(.5,1,e);d=zt(d,Ip.r,v),u=zt(u,Ip.g,v),f=zt(f,Ip.b,v)}}i[r*3]=d,i[r*3+1]=u,i[r*3+2]=f}Kh.needsUpdate=!0}function O1(n=350){let e=document.createElement("canvas");e.width=e.height=n;let t=e.getContext("2d"),i=t.createImageData(n,n);for(let s=0;s<n;s++)for(let r=0;r<n;r++){let o=(r/n-.5)*cn,a=(s/n-.5)*cn,l=de(o,a),c=de(o+4,a+4)-l,d=Ji(.55+l*.006-c*.08,.15,1),u=(s*n+r)*4,f=he.ground.b;i.data[u]=255*f[0]*d,i.data[u+1]=255*f[1]*d,i.data[u+2]=255*f[2]*d,i.data[u+3]=255}return t.putImageData(i,0,0),e}var Hp=new pe({color:8010400,emissive:4259776,emissiveIntensity:.1,roughness:.6,flatShading:!0});function G_(n,e){let t=new Ge(.25,.45,1,6);t.translate(0,.5,0);let i=new ze(1,8,5,0,Math.PI*2,0,Math.PI/2),s=900,r=new gr(t,new pe({color:14209208,roughness:.8,flatShading:!0}),s),o=new gr(i,Hp,s);r.castShadow=o.castShadow=!0;let a=new xt,l=new mn,c=new S,d=new S,u=new re,f=0;for(;f<s;){let p=(e()-.5)*(cn-300),g=(e()-.5)*(cn-300);if(Math.hypot(p,g)<50||jl(p*.008,g*.008)<.05||ao(p,g,2)>.5)continue;let x=3+e()*9,v=1.5+e()*3,m=de(p,g);c.set(1+x*.05,x,1+x*.05),d.set(p,m-.2,g),l.identity(),a.compose(d,l,c),r.setMatrixAt(f,a),c.set(v,v*.5,v),d.set(p,m+x-.3,g),a.compose(d,l,c),o.setMatrixAt(f,a),u.setHSL(.72+e()*.2,.6,.4+e()*.2),o.setColorAt(f,u),h.colliders.add({x:p,z:g,r:.6,kind:"flora"}),f++}n.add(r,o)}var F1=[];function B1(n){let e=(i,s,r,o,a,l)=>{let c=zl(he.seed*13+o),d=720,u=[],f=[],p=[];for(let m=0;m<=d;m++){let E=m/d*Math.PI*2,w=Math.cos(E),M=Math.sin(E),L=0,A=1,P=1.6;for(let _=0;_<5;_++){let b=1-Math.abs(c(w*P+9,M*P-4));L+=b*b*A,A*=.5,P*=2.2}let I=s+(r-s)*Math.min(1,L/1.4);if(u.push(w*i,-60,M*i,w*i,I*.45,M*i,w*i,I,M*i),f.push(0,.55,1),m<d){let _=m*3;for(let b=0;b<2;b++)p.push(_+b,_+b+3,_+b+1,_+b+1,_+b+3,_+b+4)}}let g=new At;g.setAttribute("position",new nt(u,3)),g.setAttribute("k",new nt(f,1)),g.setIndex(p);let x=new ot({uniforms:{uFog:{value:new re},uTint:{value:new re(a)},uD:{value:l},uSky:{value:new re}},vertexShader:"attribute float k; varying float vK; void main(){ vK = k; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 uFog, uTint; uniform float uD; varying float vK; void main(){ float m = uD * smoothstep(0.0, 1.0, vK); vec3 t = uFog * uTint * 1.7; gl_FragColor = vec4(mix(uFog, t, m), 1.0); }",fog:!1,depthWrite:!0}),v=new Z(g,x);v.frustumCulled=!1,v.renderOrder=-1,v.userData.noAO=!0,n.add(v),F1.push(v)},t=new re(he.id==="europa"?9083563:he.id==="kepler"?5925450:9062960);e(2600,220,700,2,t.clone().multiplyScalar(.9),.32),e(1800,120,430,5,t,.5)}function G1(n,e){for(let t of F1)t.position.set(n.x,0,n.z),t.material.uniforms.uFog.value.copy(e)}var Qh=6e3,fs=60,Ar,Zl,Np,Up=new S(1e9,0,0),V1=new xt,W1=new mn,X1=new S,q1=new S,Y1=new Pn;function j1(){let n=new Ri(.12,0),e=new pe({color:16777215,roughness:.95,flatShading:!0,map:cs.map});Ar=new gr(n,e,Qh),Ar.receiveShadow=!0,Ar.frustumCulled=!1;let t=ti(31);Zl=new Float32Array(Qh*2),Np=[];let i=new re;for(let s=0;s<Qh;s++){Zl[s*2]=t()*fs*2,Zl[s*2+1]=t()*fs*2;let r=Math.pow(t(),3);Np.push([.4+r*3.2,.25+t()*.6,.4+r*3,t()*6.28,t()*.6]),i.setHSL(he.rockHSL[0]+t()*.03,he.rockHSL[1]*(.5+t()*.5),Math.min(.75,he.rockHSL[2]*(1.2+t()*.9))),Ar.setColorAt(s,i)}h.scene.add(Ar)}function Z1(){if(!Ar)return;let n=h.player.pos;if(Math.abs(n.x-Up.x)<3&&Math.abs(n.z-Up.z)<3)return;Up.copy(n);let e=n.x-fs,t=n.z-fs;for(let i=0;i<Qh;i++){let s=e+((Zl[i*2]-e)%(fs*2)+fs*2)%(fs*2),r=t+((Zl[i*2+1]-t)%(fs*2)+fs*2)%(fs*2),o=Np[i];X1.set(o[0],o[0]*o[1],o[2]),Y1.set(o[4],o[3],0),W1.setFromEuler(Y1),q1.set(s,de(s,r)+.02,r),V1.compose(q1,W1,X1),Ar.setMatrixAt(i,V1)}Ar.instanceMatrix.needsUpdate=!0}var wa=[],V_=new Ai(.22,0),Kl=class{constructor(e,t,i,s){this.max=t,this.n=0,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*4),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.base=new Float32Array(t*4),this.grav=new Float32Array(t),this.drag=new Float32Array(t);let r=new At;this.pa=new an(this.pos,3),this.ca=new an(this.col,4),this.pa.setUsage(gp),this.ca.setUsage(gp),r.setAttribute("position",this.pa),r.setAttribute("color",this.ca),this.mat=new fi({size:s,map:Sn(),vertexColors:!0,transparent:!0,depthWrite:!1,blending:i?Le:ui,sizeAttenuation:!0}),this.points=new _i(r,this.mat),this.points.frustumCulled=!1,e.add(this.points)}emit(e,t,i,s,r,o,a,l,c,d,u,f=0,p=0){let g=this.n<this.max?this.n++:Math.floor(Math.random()*this.max);this.pos[g*3]=e,this.pos[g*3+1]=t,this.pos[g*3+2]=i,this.vel[g*3]=s,this.vel[g*3+1]=r,this.vel[g*3+2]=o,this.base[g*4]=a,this.base[g*4+1]=l,this.base[g*4+2]=c,this.base[g*4+3]=d,this.life[g]=u,this.maxLife[g]=u,this.grav[g]=f,this.drag[g]=p}update(e){let t=this.n;for(let i=0;i<t;i++){if(this.life[i]-=e,this.life[i]<=0){if(t--,i!==t){for(let o=0;o<3;o++)this.pos[i*3+o]=this.pos[t*3+o],this.vel[i*3+o]=this.vel[t*3+o];for(let o=0;o<4;o++)this.base[i*4+o]=this.base[t*4+o];this.life[i]=this.life[t],this.maxLife[i]=this.maxLife[t],this.grav[i]=this.grav[t],this.drag[i]=this.drag[t],i--}continue}let s=1-this.drag[i]*e;this.vel[i*3]*=s,this.vel[i*3+2]*=s,this.vel[i*3+1]=this.vel[i*3+1]*s-this.grav[i]*e,this.pos[i*3]+=this.vel[i*3]*e,this.pos[i*3+1]+=this.vel[i*3+1]*e,this.pos[i*3+2]+=this.vel[i*3+2]*e;let r=this.life[i]/this.maxLife[i];this.col[i*4]=this.base[i*4],this.col[i*4+1]=this.base[i*4+1],this.col[i*4+2]=this.base[i*4+2],this.col[i*4+3]=this.base[i*4+3]*Math.min(1,r*2.5)}this.n=t,this.points.geometry.setDrawRange(0,t),this.pa.needsUpdate=!0,this.ca.needsUpdate=!0}},lo,ed,co,ba,zp;function K1(n){lo=new Kl(n,3e3,!0,.35),zp=new Kl(n,4e3,!0,1.3),ed=new Kl(n,2500,!1,1.6);let e=new At,t=new Float32Array(1500*3);for(let r=0;r<t.length;r++)t[r]=(Math.random()-.5)*80;e.setAttribute("position",new an(t,3)),co=new _i(e,new fi({size:.25,map:Sn(),color:16765088,transparent:!0,opacity:.5,depthWrite:!1})),co.frustumCulled=!1,n.add(co);let i=new At,s=new Float32Array(3e3*3);for(let r=0;r<s.length;r++)s[r]=(Math.random()-.5)*70;i.setAttribute("position",new an(s,3)),ba=new _i(i,new fi({size:.18,map:Sn(),color:12574975,transparent:!0,opacity:0,depthWrite:!1})),ba.frustumCulled=!1,n.add(ba)}var oe={debris(n,e,t=8,i=7,s=1){for(let r=0;r<t;r++){if(wa.length>160){let d=wa.shift();h.scene.remove(d.m)}let o=new Z(V_,e);o.castShadow=!0;let a=s*(.5+Math.random()*.9);o.scale.set(a,a*(1+Math.random()),a),o.position.copy(n),h.scene.add(o);let l=Math.random()*Math.PI*2,c=.4+Math.random()*.8;wa.push({m:o,v:new S(Math.cos(l)*i*(1-c*.5),i*c,Math.sin(l)*i*(1-c*.5)),w:new S(Math.random()*10,Math.random()*10,Math.random()*10),life:3+Math.random()*2,s:a})}},spark(n,e=[1,.6,.2],t=6,i=4,s=.5){for(let r=0;r<t;r++)lo.emit(n.x,n.y,n.z,(Math.random()-.5)*i,Math.random()*i,(Math.random()-.5)*i,e[0],e[1],e[2],1,s*(.5+Math.random()),6,1)},burst(n,e=[1,.5,.2],t=40,i=9){for(let s=0;s<t;s++){let r=Math.random()*2-1,o=Math.random()*6.283,a=Math.sqrt(1-r*r),l=i*(.4+Math.random()*.6);lo.emit(n.x,n.y,n.z,a*Math.cos(o)*l,r*l,a*Math.sin(o)*l,e[0],e[1],e[2],1,.4+Math.random()*.6,4,2)}},dustPuff(n,e=10,t=2,i=[.72,.45,.3]){for(let s=0;s<e;s++)ed.emit(n.x+(Math.random()-.5)*t,n.y+Math.random()*.5,n.z+(Math.random()-.5)*t,(Math.random()-.5)*3,Math.random()*1.5,(Math.random()-.5)*3,i[0],i[1],i[2],.55,1.2+Math.random(),-.2,1.5)},ring(n,e,t=60,i=[.72,.45,.3]){for(let s=0;s<t;s++){let r=s/t*6.283,o=6+Math.random()*6;ed.emit(n.x+Math.cos(r)*e,n.y+.4,n.z+Math.sin(r)*e,Math.cos(r)*o,.5+Math.random(),Math.sin(r)*o,i[0],i[1],i[2],.6,1.5+Math.random(),-.1,1.2)}},firework(n,e,t,i,s){zp.emit(n.x,n.y,n.z,e,t,i,s[0]*1.6,s[1]*1.6,s[2]*1.6,1,1.6+Math.random()*.8,3,1.4)},trail(n,e,t=1){lo.emit(n.x,n.y,n.z,(Math.random()-.5)*.4,(Math.random()-.5)*.4,(Math.random()-.5)*.4,e[0]*t,e[1]*t,e[2]*t,1,.18,0,0)},flame(n,e=1){lo.emit(n.x+(Math.random()-.5)*.6,n.y,n.z+(Math.random()-.5)*.6,(Math.random()-.5)*2,-6*e-Math.random()*6,(Math.random()-.5)*2,1,.55,.2,1,.35,0,0)},rise(n,e,t=6){lo.emit(n.x+(Math.random()-.5)*t,n.y,n.z+(Math.random()-.5)*t,0,6+Math.random()*6,0,e[0],e[1],e[2],1,2.5,-.5,0)}},$h=0;function ho(n,e){lo.update(n),ed.update(n),zp.update(n);for(let o=wa.length-1;o>=0;o--){let a=wa[o];a.life-=n,a.v.y-=9*n,a.m.position.addScaledVector(a.v,n),a.m.rotation.x+=a.w.x*n,a.m.rotation.y+=a.w.y*n,a.m.rotation.z+=a.w.z*n;let l=de(a.m.position.x,a.m.position.z)+.1;a.m.position.y<l&&(a.m.position.y=l,a.v.y=Math.abs(a.v.y)*.35,a.v.x*=.6,a.v.z*=.6,a.w.multiplyScalar(.5)),a.life<1&&a.m.scale.setScalar(Math.max(.001,a.s*a.life)),a.life<=0&&(h.scene.remove(a.m),wa.splice(o,1))}let t=h.storm,i=co.geometry.attributes.position,s=i.array,r=1+t*26;for(let o=0;o<s.length;o+=3){s[o]+=r*n,s[o+1]+=Math.sin(o+performance.now()*5e-4)*n*.2-t*n*1.5;let a=40;s[o]-e.x>a&&(s[o]-=2*a),s[o]-e.x<-a&&(s[o]+=2*a),s[o+1]-e.y>a/2&&(s[o+1]-=a),s[o+1]-e.y<-a/2&&(s[o+1]+=a),s[o+2]-e.z>a&&(s[o+2]-=2*a),s[o+2]-e.z<-a&&(s[o+2]+=2*a)}if(i.needsUpdate=!0,co.material.size=.25+t*.3,co.material.opacity=.3+t*.25,co.material.color.setRGB(1,.8-h.time.night*.4,.62-h.time.night*.3),$h+=((h.raining?1:0)-$h)*n*.5,ba.material.opacity=$h*.6,$h>.01){let o=ba.geometry.attributes.position.array;for(let a=0;a<o.length;a+=3)o[a+1]-=22*n,o[a]+=2*n,o[a+1]<e.y-20&&(o[a+1]+=40),o[a]-e.x>35&&(o[a]-=70),o[a]-e.x<-35&&(o[a]+=70),o[a+2]-e.z>35&&(o[a+2]-=70),o[a+2]-e.z<-35&&(o[a+2]+=70);ba.geometry.attributes.position.needsUpdate=!0}}var td=null,_e,Ws,Cr,ps,Jl,Ql,nd,J1,Q1,$l,ec,kp,$1,ev={x:0,z:0};function W_(n,e){let t=Math.floor(_e.sampleRate*n),i=_e.createBuffer(2,t,_e.sampleRate);for(let s=0;s<2;s++){let r=i.getChannelData(s);for(let o=0;o<t;o++){let a=o/t;r[o]=(Math.random()*2-1)*Math.pow(1-a,e)*(a<.01?a*100:1)}}return i}function tv(n){let e=new Float32Array(n.length+1),t=new Float32Array(n.length+1);return n.forEach((i,s)=>{t[s+1]=i}),_e.createPeriodicWave(e,t)}var Ii={next:0,bar:0,tension:0,night:0,storm:0,calm:1,arp:0,drum:0},nv=[[57,60,64],[53,57,60],[48,55,60,64],[55,59,62],[57,60,64],[53,57,60,65],[50,57,62,65],[52,56,59,64]],id=n=>440*Math.pow(2,(n-69)/12),ms=4.2,G={enabled:!0,init(){if(_e){_e.resume();return}try{_e=new(window.AudioContext||window.webkitAudioContext)}catch{return}Cr=_e.createDynamicsCompressor(),Cr.threshold.value=-16,Cr.knee.value=12,Cr.ratio.value=4,Cr.attack.value=.004,Cr.release.value=.25,Ws=_e.createGain(),Ws.gain.value=.75,Ws.connect(Cr),Cr.connect(_e.destination),Ql=_e.createConvolver(),Ql.buffer=W_(4.5,2.6);let n=_e.createGain();n.gain.value=.55,Ql.connect(n),n.connect(Ws),nd=_e.createGain(),nd.gain.value=.3,nd.connect(Ql),ps=_e.createGain(),ps.gain.value=.85,ps.connect(Ws),ps.connect(nd),Jl=_e.createGain(),Jl.gain.value=.3;let e=_e.createGain();e.gain.value=.55,Jl.connect(e),e.connect(Ws);let t=_e.createGain();t.gain.value=.9,Jl.connect(t),t.connect(Ql),ec=_e.createBuffer(1,_e.sampleRate*2,_e.sampleRate);let i=ec.getChannelData(0),s=0;for(let l=0;l<i.length;l++){let c=Math.random()*2-1;s=(s+.02*c)/1.02,i[l]=s*3.5}kp=tv([1,.55,.32,.22,.08,.12,.03,.06]),$1=tv([1,.2,.08,.03]);let r=(l,c,d)=>{let u=_e.createBufferSource();u.buffer=ec,u.loop=!0;let f=_e.createBiquadFilter();f.type="bandpass",f.frequency.value=l,f.Q.value=c;let p=_e.createGain();return p.gain.value=d,u.connect(f),f.connect(p),p.connect(Ws),u.start(0,Math.random()*2),[f,p]};[Q1,J1]=r(400,.6,.12);let[o,a]=r(3200,.4,0);this._sand=a,this._sandF=o,Ii.next=_e.currentTime+.3,setInterval(()=>this.schedule(),200)},setVolume(n){Ws&&(Ws.gain.value=n)},update(n,e){if(!_e)return;let t=_e.currentTime;J1.gain.setTargetAtTime(.08+n*.55+e*.03,t,.5),Q1.frequency.setTargetAtTime(280+n*520+Math.sin(t*.3)*120,t,.8),this._sand.gain.setTargetAtTime(n*.08,t,.6);let i=0,s=h.player&&h.player.pos;if(s&&h.enemies)for(let r of h.enemies){if(r.dead)continue;let o=Math.hypot(r.pos.x-s.x,r.pos.z-s.z);i=Math.max(i,1-o/70)}Ii.tension+=(i-Ii.tension)*.02,Ii.night=e,Ii.storm=n,s&&(ev.x=s.x,ev.z=s.z)},at(n,e=90){if(!_e||!n||!h.camera)return ps;let t=h.camera.position,i=n.x-t.x,s=n.z-t.z,r=Math.hypot(i,s),o=Math.max(0,1-r/e);if(o<=.01)return null;let a=_e.createGain();a.gain.value=o*o;let l=h.player?h.player.yaw:0,c=Math.cos(l)*i-Math.sin(l)*s,d=a;if(_e.createStereoPanner){let u=_e.createStereoPanner();u.pan.value=Math.max(-1,Math.min(1,c/Math.max(4,r)*.9)),a.connect(u),d=u}if(d.connect(ps),r>20){let u=_e.createBiquadFilter();return u.type="lowpass",u.frequency.value=9e3-Math.min(7500,r*90),u.connect(a),setTimeout(()=>{try{u.disconnect(),a.disconnect(),d.disconnect()}catch{}},6e3),u}return setTimeout(()=>{try{a.disconnect(),d.disconnect()}catch{}},6e3),a},tone(n,e,t="sine",i=.3,s=0,r=0,o){if(!_e||o===null)return;let a=_e.currentTime+r,l=_e.createOscillator(),c=_e.createGain();t==="organ"?l.setPeriodicWave(kp):l.type=t,l.frequency.setValueAtTime(n,a),s&&l.frequency.exponentialRampToValueAtTime(Math.max(20,n*s),a+e),c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(i,a+.008),c.gain.exponentialRampToValueAtTime(1e-4,a+e),l.connect(c),c.connect(o||ps),l.start(a),l.stop(a+e+.05)},noise(n,e=1e3,t=.3,i="lowpass",s=0,r=1,o,a=0){if(!_e||o===null)return;let l=_e.currentTime+s,c=_e.createBufferSource();c.buffer=ec;let d=_e.createBiquadFilter();d.type=i,d.frequency.setValueAtTime(e,l),d.Q.value=r,a&&d.frequency.exponentialRampToValueAtTime(Math.max(30,e*a),l+n);let u=_e.createGain();u.gain.setValueAtTime(1e-4,l),u.gain.exponentialRampToValueAtTime(t,l+.006),u.gain.exponentialRampToValueAtTime(1e-4,l+n),c.connect(d),d.connect(u),u.connect(o||ps),c.start(l,Math.random()),c.stop(l+n+.05)},thump(n,e,t,i,s=0){this.tone(n,e,"sine",t,.25,s,i)},play(n,e){if(!_e)return;let t=e?this.at(e,n==="boom"||n==="rumble"?260:110):void 0;if(t===null)return;let i=Math.random();switch(n){case"step":this.noise(.09,380+i*260,.1,"lowpass",0,1,t),this.noise(.05,2400+i*800,.025,"bandpass",.01,2,t);break;case"jump":this.noise(.22,600,.12,"bandpass",0,1,t,2.2);break;case"land":this.thump(90,.25,.3,t),this.noise(.3,420,.22,"lowpass",0,1,t);break;case"mine":this.tone(180+i*60,.07,"square",.03,0,0,t),this.noise(.07,2600+i*1500,.06,"bandpass",0,3,t);break;case"pickup":this.tone(988,.12,"sine",.07),this.tone(1480,.16,"sine",.05,0,.05),this.tone(1976,.2,"sine",.025,0,.1);break;case"deplete":this.noise(.6,900,.3,"lowpass",0,1,t,.3),this.thump(140,.5,.25,t),this.tone(330,.6,"triangle",.08,.5,.05,t);break;case"shoot":this.tone(1400,.16,"sawtooth",.07,.18),this.tone(2600,.05,"square",.04,.4),this.noise(.08,4500,.12,"highpass"),this.thump(160,.14,.25);break;case"turret":this.tone(900,.12,"sawtooth",.06,.25,0,t),this.noise(.07,3500,.1,"highpass",0,1,t),this.thump(120,.12,.2,t);break;case"hit":this.noise(.08,2200,.15,"bandpass",0,2,t),this.tone(420,.08,"square",.05,.5,0,t);break;case"kill":this.noise(.7,1600,.25,"bandpass",0,.8,t,.2),this.tone(220,.5,"sawtooth",.08,.3,0,t),this.thump(80,.6,.35,t);break;case"boom":this.thump(70,1.2,.6,t),this.thump(45,1.8,.45,t,.05),this.noise(.35,5e3,.35,"lowpass",0,1,t,.15),this.noise(2.4,600,.3,"lowpass",.05,1,t,.25),this.noise(1.2,2200,.08,"bandpass",.15,1,t,.4);break;case"hurt":this.tone(180,.25,"sawtooth",.12,.5),this.thump(100,.3,.3),this.noise(.2,900,.12,"bandpass",0,2);break;case"place":this.thump(110,.35,.35),this.noise(.5,700,.18,"lowpass",0,1,void 0,.4),[392,523,784].forEach((s,r)=>this.tone(s,.5,"triangle",.08,0,.08+r*.07));break;case"ui":case"click":this.tone(1760,.035,"sine",.05),this.noise(.02,6e3,.03,"highpass");break;case"scan":this.tone(300,1.2,"sine",.1,4),this.tone(600,.9,"triangle",.04,3,.1),this.noise(.8,2e3,.05,"bandpass",0,3,void 0,3);break;case"shutter":this.noise(.05,4e3,.25,"highpass"),this.noise(.09,1500,.15,"bandpass",.07),this.thump(300,.05,.1);break;case"tick":this.tone(2600,.02,"sine",.02);break;case"open":this.noise(.25,800,.05,"bandpass",0,2,void 0,5),this.tone(660,.18,"sine",.04,1.5);break;case"close":this.noise(.2,3e3,.04,"bandpass",0,2,void 0,.25),this.tone(880,.15,"sine",.03,.6);break;case"achv":[523,784,1046,1568].forEach((s,r)=>this.tone(s,1.2,"triangle",.07,0,r*.09)),this.tone(2093,1.6,"sine",.03,0,.36);break;case"deny":this.tone(220,.12,"square",.045),this.tone(165,.18,"square",.045,0,.09);break;case"craft":[523,659,784,1046].forEach((s,r)=>this.tone(s,.35,"triangle",.09,0,r*.07)),this.noise(.3,5e3,.04,"highpass",.25);break;case"radio":this.noise(.15,2500,.1,"bandpass",0,2),this.tone(1200,.05,"sine",.05,0,.12),this.tone(1800,.04,"sine",.03,0,.18);break;case"alarm":for(let s=0;s<2;s++)this.tone(880,.16,"square",.05,.9,s*.36),this.tone(660,.16,"square",.05,.9,s*.36+.18);break;case"objective":[392,523,659,784].forEach((s,r)=>this.tone(s,.8,"organ",.05,0,r*.11));break;case"chapter":[220,330,440,554,659].forEach((s,r)=>this.tone(s,2.6,"organ",.06,0,r*.18)),this.thump(55,2.5,.35);break;case"rumble":this.noise(4,150,.5,"lowpass",0,1,t),this.noise(3,400,.2,"lowpass",.5,1,t),this.thump(40,3,.3,t);break;case"jet":this.noise(.14,900,.09,"bandpass",0,1,t);break;case"night":this.tone(110,3.5,"organ",.06,.8),this.tone(165,3.5,"organ",.04,.8,.3);break;case"wasp":this.tone(1800,.5,"sawtooth",.04,1.8,0,t),this.tone(1830,.5,"square",.025,1.7,0,t);break;case"whoosh":this.noise(.6,400,.12,"bandpass",0,1.5,t,6);break}},engine(n){if(_e&&(n>0||td)){if(!td){let i=_e.createOscillator(),s=_e.createOscillator(),r=_e.createBiquadFilter(),o=_e.createGain();i.type="sawtooth",s.type="triangle",r.type="lowpass",r.frequency.value=500,o.gain.value=1e-4,i.connect(r),s.connect(r),r.connect(o),o.connect(ps),i.start(),s.start(),td={o:i,o2:s,f:r,g:o}}let e=_e.currentTime,t=td;t.o.frequency.setTargetAtTime(38+n*70,e,.1),t.o2.frequency.setTargetAtTime(76+n*140,e,.1),t.f.frequency.setTargetAtTime(300+n*900,e,.1),t.g.gain.setTargetAtTime(n>0||h.driving?.03+n*.05:1e-4,e,.15)}},laser(n){if(_e){if(n&&!$l){let e=_e.createOscillator(),t=_e.createOscillator(),i=_e.createGain(),s=_e.createBiquadFilter(),r=_e.createOscillator(),o=_e.createGain();e.type="sawtooth",e.frequency.value=110,t.type="sawtooth",t.frequency.value=165.7,s.type="bandpass",s.frequency.value=1100,s.Q.value=2.5,i.gain.value=1e-4,r.frequency.value=13,o.gain.value=380,r.connect(o),o.connect(s.frequency);let a=_e.createBufferSource();a.buffer=ec,a.loop=!0;let l=_e.createBiquadFilter();l.type="highpass",l.frequency.value=5e3;let c=_e.createGain();c.gain.value=.25,a.connect(l),l.connect(c),c.connect(i),i.gain.exponentialRampToValueAtTime(.05,_e.currentTime+.08),e.connect(s),t.connect(s),s.connect(i),i.connect(ps),e.start(),t.start(),r.start(),a.start(),$l={o:e,o2:t,g:i,lfo:r,hs:a}}else if(!n&&$l){let e=$l;$l=null,e.g.gain.setTargetAtTime(1e-4,_e.currentTime,.04);let t=_e.currentTime+.25;e.o.stop(t),e.o2.stop(t),e.lfo.stop(t),e.hs.stop(t)}}},musicLoop(){},schedule(){if(!(!_e||_e.state!=="running"))for(;Ii.next<_e.currentTime+.6;)this.bar(Ii.next,Ii.bar),Ii.next+=ms,Ii.bar++},bar(n,e){let t=nv[Math.floor(e/2)%nv.length],i=e%2===0,s=Ii.night,r=Ii.tension,o=!!h.menuOpen,a=Jl;i&&t.forEach((c,d)=>{let u=_e.createOscillator(),f=_e.createGain(),p=_e.createBiquadFilter();u.setPeriodicWave(d===0?$1:kp),u.frequency.value=id(c-12+(d===0?-12:0)),u.detune.value=(Math.random()-.5)*6,p.type="lowpass",p.frequency.value=900+s*500+r*900;let g=(d===0?.075:.04)*(.8+s*.3);f.gain.setValueAtTime(1e-4,n),f.gain.exponentialRampToValueAtTime(g,n+2.6),f.gain.setValueAtTime(g,n+ms*2-1.5),f.gain.exponentialRampToValueAtTime(1e-4,n+ms*2+2.2),u.connect(p),p.connect(f),f.connect(a),u.start(n),u.stop(n+ms*2+2.4)});let l=Math.min(1,s*.9+r*1.2+(e%16>=8?.25:0));if(l>.15&&!o){let c=t.map(u=>u+12).concat([t[0]+24,t[1]+12]),d=ms/8;for(let u=0;u<8;u++){let f=c[[0,1,2,3,2,1,4,2][u]%c.length],p=n+u*d,g=.022*l*(u%2?.7:1),x=_e.createOscillator(),v=_e.createGain();x.type="triangle",x.frequency.value=id(f),v.gain.setValueAtTime(1e-4,p),v.gain.exponentialRampToValueAtTime(g,p+.01),v.gain.exponentialRampToValueAtTime(1e-4,p+d*1.8),x.connect(v),v.connect(a),x.start(p),x.stop(p+d*2)}}if(s>.5&&!o)for(let c=0;c<4;c++)this.tone(3200,.03,"sine",.012*s,0,n-_e.currentTime+c*ms/4,a);if(r>.2){let c=id(t[0]-24);for(let d=0;d<16;d++){let u=n+d*ms/16,f=.05*r*(d%4===0?1:.55),p=_e.createOscillator(),g=_e.createGain(),x=_e.createBiquadFilter();p.type="sawtooth",p.frequency.value=c,x.type="lowpass",x.frequency.value=260+r*300,g.gain.setValueAtTime(1e-4,u),g.gain.exponentialRampToValueAtTime(f,u+.008),g.gain.exponentialRampToValueAtTime(1e-4,u+ms/18),p.connect(x),x.connect(g),g.connect(a),p.start(u),p.stop(u+ms/14)}for(let d of[0,2.5,3])if(d===0||r>.5){let u=n-_e.currentTime+d*ms/4;this.tone(70,.9,"sine",.2*r,.5,u,a),this.noise(.3,300,.08*r,"lowpass",u,1,a)}}i&&s<.5&&r<.2&&Math.random()<.55&&[t[t.length-1]+12,t[1]+12,t[2]+12].forEach((d,u)=>{Math.random()<.75&&this.tone(id(d),3,"sine",.018,0,n-_e.currentTime+1.2+u*1.4,a)})}};var tc={iron:new pe({color:6965822,roughness:.4,metalness:.8,flatShading:!0,map:cs.map,bumpMap:cs.bumpMap,bumpScale:4}),ironVein:new pe({color:10246714,roughness:.3,metalness:.9,flatShading:!0,emissive:3806216}),ice:new pe({color:13627135,roughness:.08,metalness:.1,flatShading:!0,transparent:!0,opacity:.9,emissive:1456202}),silicon:new pe({color:15983014,roughness:.15,metalness:.4,flatShading:!0,emissive:2761224}),titanium:new pe({color:10194175,roughness:.1,metalness:.5,flatShading:!0,emissive:5913855,emissiveIntensity:.6}),base:new pe({color:8276790,roughness:.95,flatShading:!0,map:cs.map,bumpMap:cs.bumpMap,bumpScale:4})},iv={iron:null,ice:8969727,silicon:16770720,titanium:9071871},vs={iron:[1,.55,.3],ice:[.6,.9,1],silicon:[1,.9,.55],titanium:[.7,.55,1]};function X_(n,e,t){let i=new Wt(t,e,5,1);i.translate(0,e/2,0);let s=new Z(i,n);return s.castShadow=!0,s}function q_(n,e){let t=new ae;if(n==="iron")for(let i=0;i<4;i++){let s=new Z(new Ri(.6+e()*.7,0),i===0?tc.ironVein:tc.iron);s.position.set((e()-.5)*1.8,.3+e()*.4,(e()-.5)*1.8),s.rotation.set(e()*3,e()*3,e()*3),s.scale.y=.8,s.castShadow=!0,t.add(s)}else{let i=new Z(new Ri(1.1,0),tc.base);i.scale.set(1.2,.45,1.2),i.castShadow=!0,t.add(i);let s=n==="titanium"?6:7;for(let r=0;r<s;r++){let o=X_(tc[n],.8+e()*(n==="ice"?1.6:1.9),.18+e()*.22),a=e()*6.28,l=e()*.8;o.position.set(Math.cos(a)*l,.2,Math.sin(a)*l),o.rotation.set((e()-.5)*.9,e()*3,(e()-.5)*.9),t.add(o)}iv[n]&&t.add(ve(iv[n],n==="titanium"?5:3,null,0,1.2,0))}return t}var sv=Math.random;function gs(n,e,t,i){let s=q_(n,sv),r=de(e,t);s.position.set(e,r,t),s.rotation.y=sv()*6.28,h.scene.add(s);let o=i??{iron:30,ice:25,silicon:25,titanium:14}[n],a={type:n,x:e,z:t,y:r,amount:o,max:o,mesh:s,r:1.6};return a.collider=h.colliders.add({x:e,z:t,r:1.3,kind:"node"}),h.nodes.push(a),a}function rv(n,e){for(let t=0;t<200;t++){let i,s;if(n==="ice"&&Math.random()<.75){let o=Vs[Math.floor(Math.random()*Math.min(Vs.length,30))],a=Math.random()*6.28,l=Math.random()*o.r*.7;i=o.x+Math.cos(a)*l,s=o.z+Math.sin(a)*l}else if(e){let o=Math.random()*6.28,a=e[0]+Math.random()*(e[1]-e[0]);i=Math.cos(o)*a,s=Math.sin(o)*a}else i=(Math.random()-.5)*(2*ke-300),s=(Math.random()-.5)*(2*ke-300);let r=Math.hypot(i,s);if(!(n==="titanium"&&r<260)&&!(r<18)&&!(Math.abs(i)>ke-160||Math.abs(s)>ke-160)&&!(ao(i,s,2)>.6)&&!h.colliders.overlaps(i,s,3))return[i,s]}return null}function ov(){let n=[["iron",22,8],["iron",-18,20],["iron",30,-25],["silicon",-26,-14],["silicon",12,34],["ice",40,10],["iron",-40,-38],["silicon",45,42]];for(let[t,i,s]of n)gs(t,i,s);let e={iron:70,silicon:50,ice:40,titanium:22};for(let t in e)for(let i=0;i<e[t];i++){let s=rv(t,t==="titanium"?null:i<e[t]*.35?[40,220]:null);s&&gs(t,s[0],s[1])}}function av(n){h.scene.remove(n.mesh),h.colliders.remove(n.collider);let e=h.nodes.indexOf(n);e>=0&&h.nodes.splice(e,1)}var Sa=[];function sd(n,e){n.amount-=e;let t=.35+.65*Math.max(0,n.amount/n.max);if(n.mesh.scale.setScalar(t),n.amount<=0){let i=n.mesh.position.clone();i.y+=1,oe.burst(i,vs[n.type],40,7);let s=n.mesh.children.find(r=>r.isMesh&&r!==n.mesh.children[0])?.material||n.mesh.children[0].material;return oe.debris(i,s,9,5,1.1),oe.dustPuff(i,16,3),av(n),Sa.push({type:n.type,t:90+Math.random()*60}),!0}return!1}function lv(n){for(let t=Sa.length-1;t>=0;t--)if(Sa[t].t-=n,Sa[t].t<=0){let i=Sa[t].type;Sa.splice(t,1);let s=rv(i,i==="titanium"?null:[60,400]);s&&gs(i,s[0],s[1])}let e=1+Math.sin(performance.now()*.002)*.15;tc.titanium.emissiveIntensity=.5*e}function cv(){return h.nodes.map(n=>[n.type,+n.x.toFixed(1),+n.z.toFixed(1),Math.round(n.amount)])}function hv(n){for(let e of[...h.nodes])av(e);for(let[e,t,i,s]of n){let r=gs(e,t,i);r.amount=s,r.mesh.scale.setScalar(.35+.65*s/r.max)}}var dv=`
  float h3(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
  float n3(vec3 x){ vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z); }
  float fbm3(vec3 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * n3(p); p *= 2.07; a *= 0.5; } return s; }`,Fp={value:0},Y_=new ot({uniforms:{uT:Fp,uPow:{value:1}},vertexShader:`uniform float uT; varying vec2 vUv; varying vec3 vN, vV;
    void main(){ vUv = uv; vec3 p = position;
      float w = sin(uv.y * 14.0 - uT * 40.0) * 0.06 * uv.y;
      p.x += w; p.z += cos(uv.y * 11.0 - uT * 33.0) * 0.06 * uv.y;
      vec4 mv = modelViewMatrix * vec4(p, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);
      gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform float uT, uPow; varying vec2 vUv; varying vec3 vN, vV; ${dv}
    void main(){
      float v = vUv.y;
      float n = fbm3(vec3(vUv.x * 6.0, v * 5.0 - uT * 9.0, uT * 2.0));
      float edge = pow(abs(dot(vN, vV)), 1.4);
      float body = (1.0 - smoothstep(0.0, 0.95, v + n * 0.35)) * edge;
      vec3 core = vec3(0.75, 0.88, 1.0), mid = vec3(1.0, 0.72, 0.32), tail = vec3(0.9, 0.28, 0.08);
      vec3 c = mix(core, mid, smoothstep(0.02, 0.22, v + n * 0.1)); c = mix(c, tail, smoothstep(0.3, 0.8, v));
      // \u6FC0\u6CE2\u94BB\u77F3\uFF08\u9A6C\u8D6B\u73AF\uFF09
      float dia = smoothstep(0.75, 1.0, sin(v * 38.0 - 1.5)) * (1.0 - smoothstep(0.1, 0.45, v)) * 0.8;
      gl_FragColor = vec4(c * (body * 2.2 + dia) * uPow, 1.0);
    }`,transparent:!0,blending:Le,depthWrite:!1,side:ut});function uv(n){return new ot({uniforms:{uT:Fp,uLen:{value:1},uC:{value:new re(n)},uI:{value:1}},vertexShader:`varying vec2 vUv; varying vec3 vN, vV;
      void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform float uT, uLen, uI; uniform vec3 uC; varying vec2 vUv; varying vec3 vN, vV; ${dv}
      void main(){
        float f = pow(abs(dot(vN, vV)), 2.5);
        float flow = fbm3(vec3(vUv.x * 3.0, vUv.y * uLen * 1.5 - uT * 26.0, uT * 3.0));
        float pulses = smoothstep(0.55, 1.0, sin(vUv.y * uLen * 4.0 - uT * 50.0)) * 0.6;
        float ends = smoothstep(0.0, 0.04, vUv.y) * smoothstep(1.0, 0.92, vUv.y);
        vec3 c = uC * (0.6 + flow * 1.4 + pulses) + vec3(1.0) * pow(f, 6.0) * 1.5;
        gl_FragColor = vec4(c * f * ends * uI, 1.0);
      }`,transparent:!0,blending:Le,depthWrite:!1,side:ut})}var gi=[],rd=[];for(let n=0;n<2;n++){let e=new Ci(16752720,0,30,1.6);rd.push({l:e,t:0,dur:1,peak:0})}var Op=!1;function fv(){Op||!h.scene||(rd.forEach(n=>h.scene.add(n.l)),Op=!0)}function nc(n,e,t,i,s){Op||fv();let r=rd.reduce((o,a)=>o.t/o.dur>a.t/a.dur||o.peak===0?o:a);r.l.position.copy(n),r.l.color.set(e),r.l.distance=i,r.t=0,r.dur=s,r.peak=t}var j_=(()=>{let n=document.createElement("canvas");n.width=n.height=256;let e=n.getContext("2d"),t=e.createRadialGradient(128,128,70,128,128,128);return t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.75,"rgba(255,255,255,.9)"),t.addColorStop(.85,"rgba(255,255,255,.4)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,256,256),new Zt(n)})(),Bp=(()=>{let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");for(let t=0;t<14;t++){let i=64+(Math.random()-.5)*50,s=64+(Math.random()-.5)*50,r=18+Math.random()*34,o=e.createRadialGradient(i,s,0,i,s,r);o.addColorStop(0,"rgba(255,255,255,.55)"),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(0,0,128,128)}return new Zt(n)})(),pv=Bp;function Pr(n,e,t,i){let s=new ri(new ei({map:n,color:e,transparent:!0,depthWrite:!1,blending:t,opacity:i}));return h.scene.add(s),s}function Ir(n,e=16760960,t=6,i=.7,s=!0){let r=Pr(j_,e,Le,1);if(r.position.copy(n),gi.push({o:r,t:0,dur:i,upd:(o,a)=>{let l=1-Math.pow(1-o,3);a.scale.setScalar(.5+l*t*2),a.material.opacity=(1-o)*(1-o)*.55}}),s){let o=new Z(new nn(.94,1,96),new He({color:e,transparent:!0,blending:Le,depthWrite:!1,side:ut}));o.rotation.x=-Math.PI/2,o.position.set(n.x,n.y-.6,n.z),h.scene.add(o),gi.push({o,t:0,dur:i*1.4,upd:(a,l)=>{let c=1-Math.pow(1-a,2.5);l.scale.setScalar(.3+c*t*1.5),l.material.opacity=(1-a)*(1-a)*.85}})}}var _a=[];function xs(n,e=1,t=16747066){let i=performance.now();for(;_a.length&&i-_a[0]>350;)_a.shift();_a.push(i);let s=1/Math.sqrt(_a.length);_a.length<=3&&G.play("boom",n),nc(n,t,60*e*s,24*e,.6);let r=Pr(Sn(),16773840,Le,1);r.position.copy(n),gi.push({o:r,t:0,dur:.28,upd:(o,a)=>{a.scale.setScalar((1.6+o*4)*e),a.material.opacity=(1-o)*(1-o)*s}});for(let o=0;o<11;o++){let a=Pr(Bp,16777215,Le,1),l=new S((Math.random()-.5)*2.4,Math.random()*1.6,(Math.random()-.5)*2.4).multiplyScalar(e);a.position.copy(n).add(l),a.material.rotation=Math.random()*6;let c=1.5+Math.random()*2.5,d=(1.6+Math.random()*1.6)*e,u=.6+Math.random()*.5;gi.push({o:a,t:0,dur:u,upd:(f,p,g)=>{p.position.y+=g*c*e,p.material.rotation+=g*.8,p.scale.setScalar(d*(.5+f*1.2));let x=p.material.color,v=Math.max(0,1-f*6),m=3.2*(1-f)+.4;x.setRGB(m,m*(.42+v*.3-f*.2),m*(.1+v*.25)),p.material.opacity=(f<.45?1:(1-f)/.55)*s}})}for(let o=0;o<14;o++){let a=.2+Math.random()*.1,l=Pr(pv,new re().setRGB(a*1.15,a*.9,a*.78),ui,0),c=Math.random()*Math.PI*2,d=Math.random()*2.2;l.position.copy(n).add(new S(Math.cos(c)*d,.3+Math.random()*1.2,Math.sin(c)*d).multiplyScalar(e));let u=(2.5+Math.random()*3)*e,f=2.8+Math.random()*1.8,p=.8+Math.random()*1.6,g=new S(Math.cos(c),0,Math.sin(c)).multiplyScalar(.6+Math.random());l.material.rotation=Math.random()*6,gi.push({o:l,t:-(.08+.04*o),dur:f,upd:(x,v,m)=>{v.position.y+=m*p*e*(1-x*.6),v.position.addScaledVector(g,m*e),v.scale.setScalar(u*(.5+x*1.3)),v.material.opacity=Math.sin(Math.min(1,x)*Math.PI)*.42,v.material.rotation+=m*.25}})}oe.ring(new S(n.x,n.y-1.2,n.z),1.2*e,Math.round(70*e)),Ir(n,16765600,4*e,.6),oe.burst(n,[1,.55,.15],Math.round(40*e),14*Math.sqrt(e)),ic(Math.min(1,.35*e),n)}function mv(n,e=1,t=[.78,.6,.48]){if(gi.length>420)return;let i=Math.random()*Math.PI*2,s=(10+Math.random()*14)*e,r=.75+Math.random()*.35,o=Pr(pv,new re().setRGB(t[0]*r,t[1]*r,t[2]*r),ui,0);o.position.set(n.x+Math.cos(i)*1.5*e,n.y+.8+Math.random()*1.5,n.z+Math.sin(i)*1.5*e),o.material.rotation=Math.random()*6;let a=new S(Math.cos(i)*s,.6+Math.random()*2.2,Math.sin(i)*s),l=(4+Math.random()*4)*e,c=4+Math.random()*3;gi.push({o,t:0,dur:c,upd:(d,u,f)=>{u.position.addScaledVector(a,f),a.multiplyScalar(Math.pow(.42,f)),a.y+=f*.5,u.scale.setScalar(l*(.4+Math.sqrt(d)*1.8)),u.material.rotation+=f*.15,u.material.opacity=Math.min(1,d*8)*(1-d)*.75}})}function gv(n,e,t=16760944,i=1){nc(n,t,30*i,14*i,.09);let s=Pr(Sn(),t,Le,1);s.position.copy(n),gi.push({o:s,t:0,dur:.09,upd:(o,a)=>{a.scale.setScalar((1.8-o)*i),a.material.opacity=1-o}});let r=Pr(Bp,16769200,Le,1);r.position.copy(n).addScaledVector(e,.6*i),r.material.rotation=Math.random()*6,gi.push({o:r,t:0,dur:.07,upd:(o,a)=>{a.scale.setScalar((1.2+o)*i),a.material.opacity=1-o}})}function Gp(n,e=9365503,t=1){nc(n,e,18*t,8*t,.18);let i=Pr(Sn(),e,Le,1);i.position.copy(n),gi.push({o:i,t:0,dur:.22,upd:(s,r)=>{r.scale.setScalar((1+s*3)*t),r.material.opacity=1-s}}),Ir(n,e,1.2*t,.35,!1)}function ic(n,e){let t=e?e.distanceTo(h.player.pos):0;h.shake=Math.max(h.shake||0,n*Math.max(0,1-t/120))}function Ta(n){Fp.value=performance.now()*.001;for(let e=gi.length-1;e>=0;e--){let t=gi[e];if(t.t+=n,t.t<0){t.o.visible=!1;continue}t.o.visible=!0;let i=Math.min(1,t.t/t.dur);t.upd(i,t.o,n),i>=1&&(h.scene.remove(t.o),t.o.material.dispose(),t.o.geometry&&!t.o.isSprite&&t.o.geometry.dispose(),gi.splice(e,1))}for(let e of rd){if(e.peak<=0)continue;e.t+=n;let t=e.t/e.dur;e.l.intensity=t>=1?0:e.peak*Math.pow(1-t,2),t>=1&&(e.peak=0)}h.shake=(h.shake||0)*Math.pow(.02,n)}function vv(){y.flame=Y_,fv()}var Yn=[{name:"\u524D\u54E8\u7AD9",pop:0,b:0,r:75},{name:"\u5B9A\u5C45\u70B9",pop:4,b:6,r:120},{name:"\u5C0F\u9547",pop:12,b:14,r:175},{name:"\u57CE\u5E02",pop:24,b:22,r:240},{name:"\u5927\u90FD\u4F1A",pop:36,b:32,r:310},{name:"\u661F\u6E2F",pop:50,b:42,r:390}],vi={x:0,z:0},Ra,Wp,Aa=0;function Xp(n){Wp=new ot({uniforms:{opacity:{value:.1},uT:{value:0},uCam:{value:new S},uC:{value:new re(6743807)}},vertexShader:"attribute vec2 uv2; varying vec2 vU; varying vec3 vW; void main(){ vU = uv2; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform float opacity, uT; uniform vec3 uCam, uC; varying vec2 vU; varying vec3 vW;
      void main(){
        float v = vU.y;
        float base = exp(-v * 9.0) * 0.9 + exp(-v * 2.2) * 0.25;
        float dash = step(0.55, fract(vU.x * 0.25 - uT * 0.6)) * smoothstep(0.35, 0.0, abs(v - 0.06)) * 0.9;
        float tick = smoothstep(0.92, 1.0, fract(vU.x * 0.05)) * (1.0 - v) * 0.8;
        float d = distance(vW.xz, uCam.xz);
        float near = 1.0 - smoothstep(25.0, 70.0, d);
        float a = (base + dash + tick) * opacity * (0.15 + 0.85 * near) * smoothstep(1.0, 0.7, v);
        gl_FragColor = vec4(uC * a * 2.0, a);
      }`,transparent:!0,side:ut,depthWrite:!1,blending:Le}),h.cityLevel=h.cityLevel||0,Aa=Yn[h.cityLevel].r,xv(Aa)}function xv(n){Ra&&(h.scene.remove(Ra),Ra.geometry.dispose());let e=Math.ceil(n*1.2),t=[],i=[],s=[],r=2.2,o=2*Math.PI*n;for(let l=0;l<=e;l++){let c=l/e*Math.PI*2,d=vi.x+Math.cos(c)*n,u=vi.z+Math.sin(c)*n,f=de(d,u);if(t.push(d,f,u,d,f+r,u),s.push(l/e*o,0,l/e*o,1),l<e){let p=l*2;i.push(p,p+1,p+2,p+1,p+3,p+2)}}let a=new At;a.setAttribute("position",new nt(t,3)),a.setAttribute("uv2",new nt(s,2)),a.setIndex(i),Ra=new Z(a,Wp),Ra.frustumCulled=!1,h.scene.add(Ra)}function yv(n,e,t=0){return Math.hypot(n-vi.x,e-vi.z)<=Yn[h.cityLevel].r-t}function Mv(){let n=Yn[h.cityLevel+1];return n?{...n,curPop:h.colony.pop,curB:h.buildings.length}:null}var Vp=0;function Ev(n,e){let t=Wp.uniforms;t.opacity.value+=((e?.7:.22)-t.opacity.value)*Math.min(1,n*4),t.uT.value+=n,h.camera&&t.uCam.value.copy(h.camera.position);let i=Yn[h.cityLevel].r;if(Aa<i&&(Aa=Math.min(i,Aa+n*40),xv(Aa)),Vp-=n,Vp>0)return;Vp=1;let s=Yn[h.cityLevel+1];if(s&&h.colony.pop>=s.pop&&h.buildings.length>=s.b){h.cityLevel++,G.play("chapter"),h.events.emit("cityLevel",Yn[h.cityLevel]);let r=new S(vi.x,de(vi.x,vi.z)+2,vi.z);oe.burst(r,[.4,.9,1],120,18)}}var sc=[],Z_={mars:6178362,europa:9214120,kepler:5921384}[at],qp,Xs,od=!0;function K_(){return qp||(qp=new pe({color:Z_,roughness:.95,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),qp}function J_(n,e,t,i){let s=t-n,r=i-e,o=Math.hypot(s,r);if(o<2)return null;let a=Math.ceil(o/1.5),l=s/o,c=r/o,d=-c,u=l,f=1.3,p=[],g=[],x=[],v=[];for(let w=0;w<=a;w++){let M=w/a,L=n+s*M,A=e+r*M;for(let P of[-1,1]){let I=L+d*f*P,_=A+u*f*P;p.push(I,de(I,_)+.07,_),x.push(P<0?0:1,M*o/3)}if(w<a){let P=w*2;g.push(P,P+2,P+1,P+1,P+2,P+3)}}for(let w=4;w<o-2;w+=9)for(let M of[-1,1]){let L=n+l*w+d*(f+.35)*M,A=e+c*w+u*(f+.35)*M;v.push(L,de(L,A)+.25,A)}let m=new At;m.setAttribute("position",new nt(p,3)),m.setAttribute("uv",new nt(x,2)),m.setIndex(g),m.computeVertexNormals();let E=new Z(m,K_());return E.receiveShadow=!0,h.scene.add(E),{mesh:E,lamp:v}}function wv(n){if(n.type==="lamp")return;let e=null,t=70;for(let u of h.buildings){if(u===n||u.type==="lamp")continue;let f=Math.hypot(u.x-n.x,u.z-n.z)-u.def.r-n.def.r;f<t&&(t=f,e=u)}if(!e)return;let i=e.x-n.x,s=e.z-n.z,r=Math.hypot(i,s),o=n.x+i/r*(n.def.r+.5),a=n.z+s/r*(n.def.r+.5),l=e.x-i/r*(e.def.r+.5),c=e.z-s/r*(e.def.r+.5),d=J_(o,a,l,c);d&&(sc.push({...d,a:n,b:e}),od=!0)}function bv(n){for(let e=sc.length-1;e>=0;e--){let t=sc[e];(t.a===n||t.b===n)&&(h.scene.remove(t.mesh),t.mesh.geometry.dispose(),sc.splice(e,1),od=!0)}}function Sv(){if(od){od=!1,Xs&&(h.scene.remove(Xs),Xs.geometry.dispose());let n=sc.flatMap(e=>e.lamp);if(n.length){let e=new At;e.setAttribute("position",new nt(n,3)),Xs=new _i(e,new fi({size:.9,map:Sn(),color:8382207,transparent:!0,depthWrite:!1,blending:Le})),Xs.frustumCulled=!1,h.scene.add(Xs)}else Xs=null}Xs&&(Xs.material.opacity=.15+h.time.night*.85)}var Ca={peace:{name:"\u548C\u5E73",desc:"\u6CA1\u6709\u9508\u8680\u86DB\uFF0C\u5B89\u5FC3\u5EFA\u8BBE",o2:.7,foe:0,dmg:0,yield:1.3},normal:{name:"\u6807\u51C6",desc:"\u63A8\u8350\u7684\u4F53\u9A8C",o2:1,foe:1,dmg:1,yield:1},hard:{name:"\u56F0\u96BE",desc:"\u6C27\u6C14\u6D88\u8017\u66F4\u5FEB\uFF0C\u654C\u4EBA\u66F4\u591A\u66F4\u51F6",o2:1.35,foe:1.6,dmg:1.5,yield:.85}},Tv={story:{name:"\u5267\u60C5\u6A21\u5F0F",desc:"\u8DDF\u968F\u7AE0\u8282\uFF0C\u4ECE\u7740\u9646\u4E00\u8DEF\u8D70\u5230\u661F\u9645\u6587\u660E"},free:{name:"\u81EA\u7531\u6A21\u5F0F",desc:"\u6CA1\u6709\u4E3B\u7EBF\uFF0C\u6309\u81EA\u5DF1\u7684\u8282\u594F\u5F00\u62D3\u3002\u5C45\u6C11\u59D4\u6258\u4F1A\u7ED9\u4F60\u65B9\u5411"}},Li=()=>Ca[h.diffKey||"normal"],ai=()=>h.mode==="free",Pa={pv:{name:"\u9AD8\u6548\u5149\u4F0F",cat:"\u751F\u4EA7",icon:"sun",cost:25,desc:"\u592A\u9633\u80FD\u53D1\u7535 +50%"},sieve:{name:"\u5206\u5B50\u7B5B\u5236\u6C27",cat:"\u751F\u5B58",icon:"o2",cost:30,desc:"\u5236\u6C27\u7AD9\u4E0E\u751F\u6001\u4E2D\u67A2\u4F9B\u6C27 +50%"},hydro:{name:"\u6C34\u57F9\u6280\u672F",cat:"\u751F\u5B58",icon:"food",cost:30,desc:"\u6E29\u5BA4\u4E0E\u5782\u76F4\u519C\u573A\u4EA7\u51FA +50%"},drill:{name:"\u6DF1\u5C42\u94BB\u63A2",cat:"\u751F\u5B58",icon:"water",cost:30,desc:"\u6C34\u51B0\u63D0\u53D6\u5668\u4E0E\u751F\u6001\u4E2D\u67A2\u4F9B\u6C34 +50%"},laser2:{name:"\u91C7\u77FF\u6FC0\u5149 II",cat:"\u751F\u4EA7",icon:"laser",cost:35,desc:"\u624B\u52A8\u91C7\u77FF\u901F\u5EA6 +50%"},suit:{name:"\u5B87\u822A\u670D\u5FAA\u73AF\u7CFB\u7EDF",cat:"\u751F\u5B58",icon:"tank",cost:40,desc:"\u91CE\u5916\u6C27\u6C14\u6D88\u8017 -35%"},alloy:{name:"\u5F3A\u5316\u5408\u91D1",cat:"\u519B\u4E8B",icon:"shield",cost:50,desc:"\u6240\u6709\u5EFA\u7B51\u8010\u4E45 +50%"},plasma:{name:"\u7B49\u79BB\u5B50\u805A\u7126",cat:"\u519B\u4E8B",icon:"focus",cost:60,desc:"\u70AE\u5854\u4F24\u5BB3 +50%\uFF0C\u5C04\u7A0B +10 \u7C73"},swarm:{name:"\u65E0\u4EBA\u673A\u96C6\u7FA4",cat:"\u751F\u4EA7",icon:"drone",cost:60,desc:"\u6BCF\u5EA7\u65E0\u4EBA\u673A\u7AD9\u591A\u4E00\u67B6\u65E0\u4EBA\u673A"},terrain:{name:"\u5168\u5730\u5F62\u60AC\u6302",cat:"\u751F\u4EA7",icon:"rover",cost:45,desc:"\u6F2B\u6E38\u8F66\u6781\u901F +30%"},pr:{name:"\u79FB\u6C11\u5BA3\u4F20",cat:"\u6B96\u6C11",icon:"pop",cost:70,desc:"\u79FB\u6C11\u98DE\u8239\u6765\u5F97\u66F4\u52E4\uFF0C\u6BCF\u6B21\u591A\u5E26 2 \u4EBA"},atmo:{name:"\u5927\u6C14\u5DE5\u7A0B",cat:"\u6B96\u6C11",icon:"planet",cost:120,desc:"\u5927\u6C14\u6539\u9020\u901F\u5EA6 \xD72"},fusion:{name:"\u7D27\u51D1\u805A\u53D8",cat:"\u751F\u4EA7",icon:"power",cost:100,desc:"\u805A\u53D8\u53CD\u5E94\u5806\u53D1\u7535 +40%"},culture:{name:"\u6B96\u6C11\u5730\u6587\u5316",cat:"\u6B96\u6C11",icon:"book",cost:80,desc:"\u5C45\u6C11\u5DE5\u4F5C\u4EA7\u51FA \xD72"}},Xt=n=>!!(h.tech&&h.tech[n]);function Jp(n){let e=Pa[n];return!e||Xt(n)||(h.rp||0)<e.cost?(G.play("deny"),!1):(h.rp-=e.cost,h.tech={...h.tech||{},[n]:!0},G.play("craft"),h.events.emit("toast",`\u2713 \u7814\u7A76\u5B8C\u6210\uFF1A${e.name}`),h.events.emit("researched",n),!0)}function ad(){let n=0;for(let e of h.buildings)e.type==="lab"&&e.powered&&(n+=[0,1,1.6,2.2][e.level||1]);return n*(.12+h.colony.pop*.01)}var _v={iron:1,ice:1.2,silicon:1.5,titanium:6};function Qp(n,e,t){return Math.floor(t*_v[n]/_v[e]*.8)}function Rv(n,e,t){let i=Qp(n,e,t);return n===e||i<=0||(h.res[n]||0)<t?(G.play("deny"),0):(h.res[n]-=t,h.res[e]+=i,G.play("pickup"),h.stats.traded=(h.stats.traded||0)+1,i)}var Q_=["\u6797\u6653","Amara Okafor","\u9648\u9ED8","Mateo Silva","\u82CF\u5FF5","Yuki Tanaka","\u738B\u5927\u5C71","\u5468\u9752\u79BE","Priya Sharma","\u674E\u957F\u98CE"],Yp={solar:"\u592A\u9633\u80FD\u9635\u5217",oxygen:"\u5236\u6C27\u7AD9",lamp:"\u7167\u660E\u706F",habitat:"\u5C45\u4F4F\u7A79\u9876",greenhouse:"\u6E29\u5BA4",extractor:"\u6C34\u51B0\u63D0\u53D6\u5668",turret:"\u9632\u5FA1\u70AE\u5854",drones:"\u65E0\u4EBA\u673A\u7AD9",plaza:"\u4E2D\u592E\u5E7F\u573A",lab:"\u7814\u7A76\u6240",trade:"\u8D38\u6613\u7AD9",apartment:"\u516C\u5BD3\u5854",vfarm:"\u5782\u76F4\u519C\u573A"},uo={build:["\u6211\u4EEC\u9700\u8981\u4E00\u5EA7{x}\u3002\u62DC\u6258\u4E86\uFF01","\u5982\u679C\u6709{x}\uFF0C\u5927\u5BB6\u7684\u65E5\u5B50\u4F1A\u597D\u8FC7\u5F88\u591A\u3002","\u80FD\u518D\u5EFA\u4E00\u5EA7{x}\u5417\uFF1F"],mine:["\u4ED3\u5E93\u91CC\u7684{x}\u5FEB\u89C1\u5E95\u4E86\uFF0C\u80FD\u5E2E\u5FD9\u91C7\u4E00\u4E9B\u5417\uFF1F","\u6211\u7684\u5B9E\u9A8C\u9700\u8981{x}\u3002"],kill:["\u591C\u91CC\u90A3\u4E9B\u9508\u8680\u86DB\u5435\u5F97\u5B69\u5B50\u4EEC\u7761\u4E0D\u7740\u3002","\u5DE1\u903B\u961F\u9700\u8981\u652F\u63F4\uFF0C\u5E2E\u6211\u4EEC\u6E05\u7406\u4E00\u4E0B\u9644\u8FD1\u3002"],upgrade:["\u8BBE\u65BD\u8BE5\u5347\u7EA7\u4E86\uFF0C\u80FD\u628A\u54EA\u4E00\u5EA7\u5347\u5230 2 \u7EA7\u5417\uFF1F"],relic:["\u6211\u5728\u65E7\u6863\u6848\u91CC\u770B\u5230\u9644\u8FD1\u6709\u9057\u8FF9\u7684\u8BB0\u5F55\uFF0C\u4F60\u80FD\u53BB\u770B\u770B\u5417\uFF1F"],pop:["\u6211\u4EEC\u51C6\u5907\u597D\u8FCE\u63A5\u66F4\u591A\u7684\u4EBA\u4E86\u3002"],scan:["\u8BA9\u5C0F\u661F\u626B\u63CF\u4E00\u4E0B\u9644\u8FD1\u7684\u77FF\u85CF\u5427\uFF0C\u6211\u60F3\u753B\u4E00\u5F20\u5730\u56FE\u3002"]},oi=n=>n[Math.floor(Math.random()*n.length)];function Av(n){return h.buildings.filter(e=>e.type===n).length}function $_(n){let e=["build","build","mine","mine","scan"];(h.enemies.length||(h.nightsSurvived||0)>0)&&e.push("kill"),h.buildings.length>4&&e.push("upgrade"),n.relicLeft()&&e.push("relic"),h.buildings.some(a=>a.type==="beacon")&&e.push("pop");let t=oi(e),i=h.colonists.length?oi(h.colonists).name:oi(Q_),s={id:Date.now()+Math.random(),kind:t,giver:i},r=1+(h.cityLevel||0)*.5;if(t==="build"){let a=Object.keys(Yp).filter(c=>n.unlocked(c)),l=oi(a.length?a:["solar"]);Object.assign(s,{t:l,base:Av(l),n:1,text:`\u5EFA\u9020${Yp[l]}`,line:oi(uo.build).replace("{x}",Yp[l])})}else if(t==="mine"){let a=oi(h.cityLevel>=2?["iron","silicon","ice","titanium"]:["iron","silicon","ice"]),l=Math.round((a==="titanium"?8:25)*r);Object.assign(s,{t:a,base:h.stats.mined[a],n:l,text:`\u91C7\u96C6${rn[a].name} ${l}`,line:oi(uo.mine).replace("{x}",rn[a].name)})}else if(t==="kill"){let a=Math.round(4*r);Object.assign(s,{base:h.stats.kills,n:a,text:`\u51FB\u9000\u9508\u8680\u86DB ${a} \u53EA`,line:oi(uo.kill)})}else t==="upgrade"?Object.assign(s,{base:h.buildings.filter(a=>(a.level||1)>=2).length,n:1,text:"\u628A\u4E00\u5EA7\u5EFA\u7B51\u5347\u5230 2 \u7EA7",line:oi(uo.upgrade)}):t==="relic"?Object.assign(s,{base:n.relicFound(),n:1,text:"\u8C03\u67E5\u4E00\u5904\u9057\u8FF9",line:oi(uo.relic)}):t==="pop"?Object.assign(s,{base:h.colony.pop,n:4,text:"\u8FCE\u63A5 4 \u4F4D\u65B0\u79FB\u6C11",line:oi(uo.pop)}):Object.assign(s,{base:h.stats.scans||0,n:1,text:"\u7528\u5C0F\u661F\u626B\u63CF\u4E00\u6B21\uFF08Q\uFF09",line:oi(uo.scan)});let o=["iron","silicon","ice"];return s.reward={[oi(o)]:Math.round(20*r),[oi(o)]:Math.round(15*r)},h.cityLevel>=1&&(s.reward.titanium=Math.round(2*r)),s.rp=Math.round(8*r),s}function Cv(n,e){switch(n.kind){case"build":return Av(n.t)-n.base;case"mine":return h.stats.mined[n.t]-n.base;case"kill":return h.stats.kills-n.base;case"upgrade":return h.buildings.filter(t=>(t.level||1)>=2).length-n.base;case"relic":return e.relicFound()-n.base;case"pop":return h.colony.pop-n.base;default:return(h.stats.scans||0)-n.base}}function Pv(n,e){return Math.max(0,Math.min(n.n,Cv(n,e)))}var jp=25,Zp=0;function Iv(n,e){if(eT(n),h.rp=(h.rp||0)+ad()*n,h.requests=h.requests||[],h.buildings.length&&!h.ended){jp-=n;let t=ai()?3:2;if(jp<=0&&h.requests.length<t){jp=ai()?60:110;let i=$_(e);h.requests.push(i),h.events.emit("request",i)}}if(Zp-=n,!(Zp>0)){Zp=.5;for(let t=h.requests.length-1;t>=0;t--){let i=h.requests[t];if(Cv(i,e)>=i.n){h.requests.splice(t,1);for(let s in i.reward)h.res[s]+=i.reward[s],h.events.emit("pickup",{type:s,n:i.reward[s],note:"\u59D4\u6258\u5956\u52B1"});h.rp=(h.rp||0)+i.rp,h.stats.requests=(h.stats.requests||0)+1,G.play("objective"),h.events.emit("requestDone",i)}}}}var Kp=0;function eT(n){if(Kp-=n,Kp>0)return;Kp=2;let e=h.colony,t=Math.max(1,e.pop),i=[],s=55,r=g=>Math.max(-1,Math.min(1,(e[g]-e.pop)/t)),o=(r("food")+r("o2")+r("water"))*6;s+=o,i.push(["\u751F\u6D3B\u7269\u8D44",o]);let a=h.buildings.filter(g=>g.type==="lamp").length,l=h.buildings.some(g=>g.type==="plaza"&&g.powered),c=Math.min(8,a*1.5)+(l?12:0);s+=c,i.push(["\u7167\u660E\u4E0E\u5E7F\u573A",c]);let d=Math.min(10,h.buildings.filter(g=>g.type==="greenhouse"||g.type==="vfarm").length*3);s+=d,i.push(["\u7EFF\u8272\u690D\u7269",d]);let u=h.buildings.filter(g=>g.broken).length*-6+(e.deficit?-10:0);s+=u,i.push(["\u635F\u574F\u4E0E\u505C\u7535",u]);let f=h.buildings.some(g=>g.type==="turret")?6:Li().foe>0&&(h.nightsSurvived||0)>0?-8:0;s+=f,i.push(["\u5B89\u5168\u611F",f]);let p=e.housing&&e.pop>e.housing*.9?-8:0;s+=p,i.push(["\u4F4F\u623F\u62E5\u6324",p]),Xt("culture")&&(s+=10,i.push(["\u6B96\u6C11\u5730\u6587\u5316",10])),h.festival&&(s+=15,i.push(["\u6B96\u6C11\u5730\u8282",15])),h.morale=Math.round(Math.max(0,Math.min(100,s))),h.moraleFactors=i.filter(g=>Math.abs(g[1])>=.5)}var $p=()=>.5+(h.morale??60)/100;var Dv=new Ge(1,1,1,6,1,!0);Dv.translate(0,.5,0);var tT=new S(0,1,0),Ia=new S;function nT(n){let e=1+(n.level||1)+(Xt("swarm")?1:0);for(n.drones=n.drones||[];n.drones.length<e;){let t=A1(),i=new Z(Dv,new He({color:16752720,transparent:!0,opacity:.8,blending:Le,depthWrite:!1}));i.visible=!1,i.frustumCulled=!1,h.scene.add(t.group,i);let s=n.drones.length,r=new S(n.x+[-1.9,1.9,-1.9,1.9][s%4],n.y+1.1,n.z+[-1.9,-1.9,1.9,1.9][s%4]);t.group.position.copy(r),n.drones.push({...t,beam:i,dock:r,state:"dock",t:1+s*1.3,node:null,cargo:null,pos:t.group.position})}}function Hv(n){for(let e of n.drones||[])h.scene.remove(e.group,e.beam),e.node&&(e.node.claimed=!1);n.drones=[]}function Lv(n,e,t,i=15){Ia.copy(e).sub(n.pos);let s=Ia.length(),r=de(n.pos.x,n.pos.z)+8;s>6&&(Ia.y+=(r-n.pos.y)*2),Ia.normalize().multiplyScalar(Math.min(s,i*t)),n.pos.add(Ia);let a=Math.atan2(e.x-n.pos.x,e.z-n.pos.z)-n.group.rotation.y;return a=Math.atan2(Math.sin(a),Math.cos(a)),n.group.rotation.y+=a*Math.min(1,t*4),n.group.rotation.x=Math.min(.3,s*.02),s<.6}function Uv(n){let e=performance.now()*.001;for(let t of h.buildings)if(t.type==="drones"&&!(t.buildT<1)){nT(t),t.anim.dish&&(t.anim.dish.rotation.y+=n*(t.powered?1.2:0)),t.anim.light&&(t.anim.light.visible=t.powered&&Math.sin(e*3)>-.3);for(let i of t.drones){for(let s of i.rotors)s.rotation.y+=n*40;switch(i.group.position.y+=Math.sin(e*3+i.dock.x)*.003,i.beam.visible=!1,!t.powered&&i.state!=="dock"&&(i.node&&(i.node.claimed=!1),i.node=null,i.state="back"),i.state){case"dock":{if(i.pos.lerp(i.dock,Math.min(1,n*3)),i.t-=n,i.t<=0&&t.powered){i.t=2;let s=null,r=100;for(let o of h.nodes){if(o.claimed||o.type==="titanium"&&(t.level||1)<3)continue;let a=Math.hypot(o.x-t.x,o.z-t.z);a<r&&(r=a,s=o)}s&&(s.claimed=!0,i.node=s,i.state="out")}break}case"out":{let s=i.node;if(!s||!h.nodes.includes(s)){i.node=null,i.state="back";break}Lv(i,Ia.set(s.x,s.y+4.5,s.z).clone(),n)&&(i.state="mine",i.t=3.2);break}case"mine":{let s=i.node;if(!s||!h.nodes.includes(s)){i.state="back";break}i.t-=n;let r=new S(s.x+Math.sin(e*5)*.3,s.y+.6,s.z+Math.cos(e*4)*.3),o=i.pos.clone().add(new S(0,-.25,0)),a=r.clone().sub(o),l=a.length();if(i.beam.position.copy(o),i.beam.quaternion.setFromUnitVectors(tT,a.normalize()),i.beam.scale.set(.05,l,.05),i.beam.material.color.setRGB(...vs[s.type]),i.beam.visible=!0,Math.random()<.4&&oe.spark(r,vs[s.type],1,3,.4),i.t<=0){let c=Math.min(3,Math.ceil(s.amount));i.cargo={type:s.type,n:c},s.claimed=!1,sd(s,c),i.node=null,i.state="back"}break}case"back":{Lv(i,i.dock,n)&&(i.cargo&&(h.res[i.cargo.type]+=i.cargo.n,h.stats.mined[i.cargo.type]+=i.cargo.n,h.stats.droneHauls=(h.stats.droneHauls||0)+1,Math.hypot(h.player.pos.x-t.x,h.player.pos.z-t.z)<45&&h.events.emit("pickup",{type:i.cargo.type,n:i.cargo.n,note:"\u65E0\u4EBA\u673A"}),oe.spark(i.pos,[.5,.9,1],6,3),i.cargo=null),i.state="dock",i.t=1.5);break}}}}}var jn={solar:{name:"\u592A\u9633\u80FD\u9635\u5217",icon:"sun",cat:"life",chapter:0,cost:{iron:8,silicon:6},power:4,r:2.6,hp:120,desc:"\u767D\u5929\u53D1\u7535 4 \u5355\u4F4D\uFF0C\u591C\u95F4\u964D\u81F3 1.6\u3002\u6B96\u6C11\u5730\u7684\u5FC3\u8DF3\u4ECE\u8FD9\u91CC\u5F00\u59CB\u3002"},oxygen:{name:"\u5236\u6C27\u7AD9",icon:"o2",cat:"life",chapter:0,cost:{iron:12,silicon:4,ice:6},power:-2,r:3,hp:160,o2:6,life:14,desc:"\u7535\u89E3\u6C34\u51B0\u5236\u9020\u6C27\u6C14\u3002\u4E3A 6 \u4F4D\u5C45\u6C11\u4F9B\u6C27\uFF0C\u5E76\u5728 14 \u7C73\u5185\u4E3A\u4F60\u7684\u5B87\u822A\u670D\u8865\u6C27\u3002"},lamp:{name:"\u7167\u660E\u706F",icon:"star",cat:"life",chapter:0,cost:{iron:3},power:0,r:.6,hp:60,desc:"\u7167\u4EAE\u706B\u661F\u7684\u957F\u591C\u3002"},habitat:{name:"\u5C45\u4F4F\u7A79\u9876",icon:"dome",cat:"life",chapter:1,cost:{iron:25,silicon:12},power:-1,r:6.4,hp:300,housing:4,life:12,desc:"\u53EF\u4F4F 4 \u4EBA\u3002\u7A79\u9876\u91CC\u6709\u6696\u5149\u3001\u690D\u7269\u548C\u5BB6\u4EBA\u7684\u7167\u7247\u3002"},greenhouse:{name:"\u6E29\u5BA4",icon:"food",cat:"life",chapter:1,cost:{iron:14,silicon:16,ice:8},power:-2,r:5.4,hp:160,food:5,desc:"\u5728\u706B\u661F\u571F\u58E4\u91CC\u79CD\u51FA\u7B2C\u4E00\u68F5\u571F\u8C46\u3002\u4F9B 5 \u4EBA\u98DF\u7269\u3002"},extractor:{name:"\u6C34\u51B0\u63D0\u53D6\u5668",icon:"water",cat:"life",chapter:1,cost:{iron:16,silicon:4,ice:4},power:-2,r:2.8,hp:160,water:6,desc:"\u4ECE\u5730\u4E0B\u51BB\u571F\u4E2D\u94BB\u53D6\u6C34\u3002\u4F9B 6 \u4EBA\u7528\u6C34\u3002"},beacon:{name:"\u7740\u9646\u573A",icon:"ship",cat:"city",chapter:1,cost:{iron:24,silicon:14},power:-1,r:7.4,hp:250,desc:"\u5411\u5730\u7403\u53D1\u51FA\u4FE1\u53F7\u3002\u6761\u4EF6\u6EE1\u8DB3\u65F6\uFF0C\u79FB\u6C11\u98DE\u8239\u4F1A\u5728\u8FD9\u91CC\u964D\u843D\u3002"},fabricator:{name:"\u5236\u9020\u5DE5\u574A",icon:"wrench",cat:"industry",chapter:2,cost:{iron:22,silicon:14},power:-1,r:4.6,hp:220,desc:"\u9760\u8FD1\u6309 E \u5236\u9020\u6B66\u5668\u4E0E\u88C5\u5907\u3002"},drones:{name:"\u65E0\u4EBA\u673A\u7AD9",icon:"drone",cat:"industry",chapter:2,cost:{iron:30,silicon:22},power:-3,r:3.8,hp:220,desc:"\u6D3E\u51FA\u91C7\u77FF\u65E0\u4EBA\u673A\uFF0C\u81EA\u52A8\u91C7\u96C6 100 \u7C73\u5185\u7684\u77FF\u70B9\u5E76\u8FD0\u56DE\u3002\u5347\u7EA7\u540E\u65E0\u4EBA\u673A\u66F4\u591A\uFF0C\u6EE1\u7EA7\u53EF\u91C7\u949B\u3002"},turret:{name:"\u9632\u5FA1\u70AE\u5854",icon:"shield",cat:"defense",chapter:2,cost:{iron:22,silicon:10},power:-2,r:1.9,hp:200,range:40,desc:"\u81EA\u52A8\u653B\u51FB 40 \u7C73\u5185\u7684\u9508\u8680\u86DB\u3002\u9700\u8981\u7535\u529B\u3002"},reactor:{name:"\u805A\u53D8\u53CD\u5E94\u5806",icon:"power",cat:"industry",chapter:3,cost:{iron:40,silicon:20,titanium:12},power:20,r:5.4,hp:400,desc:"\u663C\u591C\u4E0D\u505C +20 \u26A1\u3002\u7528\u706B\u661F\u7684\u949B\uFF0C\u70B9\u4EAE\u4EBA\u7C7B\u7684\u7B2C\u4E8C\u9897\u592A\u9633\u3002"},lab:{name:"\u7814\u7A76\u6240",icon:"book",cat:"industry",chapter:2,level:1,cost:{iron:25,silicon:25},power:-2,r:4.2,hp:260,rp:1,desc:"\u5C45\u6C11\u5728\u8FD9\u91CC\u505A\u7814\u7A76\uFF0C\u4EA7\u51FA\u79D1\u7814\u70B9\u6570\u3002\u4EBA\u53E3\u8D8A\u591A\u8D8A\u5FEB\u3002\u6309 T \u6253\u5F00\u79D1\u7814\u3002"},trade:{name:"\u661F\u9645\u8D38\u6613\u7AD9",icon:"ship",cat:"city",chapter:2,level:1,cost:{iron:30,silicon:18},power:-2,r:5,hp:260,desc:"\u4E0E\u5730\u7403\u548C\u5176\u4ED6\u6B96\u6C11\u5730\u4EA4\u6362\u7269\u8D44\u3002\u9760\u8FD1\u6309 E \u4EA4\u6613\u3002"},plaza:{name:"\u4E2D\u592E\u5E7F\u573A",icon:"planet",cat:"city",level:1,cost:{iron:20,silicon:16},power:-1,r:7.4,hp:300,desc:"\u4E2D\u5FC3\u6709\u4E00\u5EA7\u5168\u606F\u5730\u7403\u3002\u5929\u9ED1\u540E\uFF0C\u5C45\u6C11\u4EEC\u4F1A\u6765\u8FD9\u91CC\u805A\u5728\u4E00\u8D77\uFF0C\u770B\u4E00\u770B\u6545\u4E61\u3002"},apartment:{name:"\u516C\u5BD3\u5854",icon:"tower",cat:"city",level:2,cost:{iron:40,silicon:25,titanium:4},power:-3,r:4.6,hp:400,housing:12,life:12,desc:"\u53EF\u4F4F 12 \u4EBA\u3002\u7A97\u6237\u91CC\u7684\u706F\u5149\uFF0C\u662F\u57CE\u5E02\u7684\u661F\u7A7A\u3002"},vfarm:{name:"\u5782\u76F4\u519C\u573A",icon:"food",cat:"city",level:2,cost:{iron:30,silicon:30,ice:15},power:-4,r:4.2,hp:260,food:14,desc:"\u5341\u56DB\u5C42\u7684\u7ACB\u4F53\u519C\u7530\u3002\u4F9B 14 \u4EBA\u98DF\u7269\u3002"},lifehub:{name:"\u751F\u6001\u4E2D\u67A2",icon:"o2",cat:"city",level:3,cost:{iron:45,silicon:30,ice:30,titanium:6},power:-5,r:6,hp:400,o2:16,water:16,life:20,desc:"\u5927\u578B\u6C27\u6C14\u4E0E\u6C34\u5FAA\u73AF\u7CFB\u7EDF\u3002\u4F9B 16 \u4EBA\u6C27\u6C14\u548C\u7528\u6C34\uFF0C20 \u7C73\u5185\u8865\u6C27\u3002"},terraformer:{name:"\u5927\u6C14\u6539\u9020\u5854",icon:"planet",cat:"stellar",chapter:4,only:"terraformable",cost:{iron:100,silicon:60,titanium:30,ice:50},power:-12,r:7.4,hp:800,desc:"\u5411\u5929\u7A7A\u91CA\u653E\u6E29\u5BA4\u6C14\u4F53\u4E0E\u6C34\u6C7D\u3002\u8BA9\u8FD9\u9897\u661F\u7403\uFF0C\u771F\u6B63\u6210\u4E3A\u5BB6\u3002"},launch:{name:"\u661F\u9645\u53D1\u5C04\u53F0",icon:"ship",cat:"stellar",chapter:5,level:at==="mars"?5:4,only:"route",cost:{iron:160,silicon:120,titanium:60,ice:60},power:-15,r:9.5,hp:900,desc:"\u661F\u9645\u822A\u7EBF\u7684\u8D77\u70B9\u3002\u9760\u8FD1\u6309 E \u6253\u5F00\u661F\u56FE\uFF0C\u524D\u5F80\u65B0\u7684\u661F\u7403\u6216\u56DE\u5230\u5DF2\u5F00\u62D3\u7684\u5BB6\u56ED\u3002"},monument:{name:"\u6587\u660E\u7EAA\u5FF5\u7891",icon:"monument",cat:"stellar",level:5,only:"final",cost:{iron:150,silicon:120,titanium:80},power:-6,r:6.5,hp:900,desc:"\u4E09\u9897\u661F\u7403\uFF0C\u4E00\u4E2A\u4EBA\u7C7B\u3002\u732E\u7ED9\u6240\u6709\u51FA\u53D1\u7684\u4EBA\u3002"}},n0=3,t0=[1,1,1.6,2.2],iT=["lamp","beacon","fabricator","plaza","trade","terraformer","launch","monument"];function ld(n){return!iT.includes(n.type)&&(n.level||1)<n0}function Qi(n,e){let t=n.def,i=n.level||1,s=t[e];if(!s)return 0;if(e==="power")return s>0?s*t0[i]*(n.type==="solar"&&Xt("pv")?1.5:1)*(n.type==="reactor"&&Xt("fusion")?1.4:1):s*(1+.25*(i-1));if(e==="life")return s+3*(i-1);if(e==="range")return s+8*(i-1)+(Xt("plasma")?10:0);if(e==="hp")return s*(1+.5*(i-1))*(Xt("alloy")?1.5:1);let r=e==="o2"&&Xt("sieve")||e==="food"&&Xt("hydro")||e==="water"&&Xt("drill")?1.5:1;return Math.round(s*t0[i]*r)}function i0(n){let e=n.level||1,t={};for(let i in n.def.cost)t[i]=Math.ceil(n.def.cost[i]*(e===1?.8:1.3));return t.titanium=(t.titanium||0)+(e===1?3:8),t}function Nv(n){if(!ld(n))return!1;let e=i0(n);return Ki(e)?(Ul(e),n.level=(n.level||1)+1,zv(n,!0),G.play("place"),oe.ring(new S(n.x,n.y,n.z),n.def.r*1.2,60,[.5,.9,1]),Ms(),!0):!1}function zv(n,e){let t=n.level||1;n.maxHp=Qi(n,"hp"),n.hp=Math.min(n.maxHp,e?n.maxHp:n.hp);let i=1+(t-1)*.12;n.group.scale.set(i,n.group.scale.y,i),n.baseScale=i,n.anim._pips&&n.anim._pips.forEach(r=>n.group.remove(r)),n.anim._pips=[];let s=Math.max(2.5,n.def.r*.9);for(let r=1;r<t;r++)n.anim._pips.push(ve(16757596,1.4,n.group,(r-t/2)*.9,s+1.2,0));if(e){n.buildT=.35;let r=new Z(new De(n.def.r*1.05,.08,6,48),kv.clone());r.rotation.x=Math.PI/2,r.position.set(n.x,n.y,n.z),h.scene.add(r),n.anim._scan=r}}function Es(n){let e=jn[n];return e.only==="terraformable"&&!he.terraformable?{hide:!0}:e.only==="route"&&!he.next&&!(xn.visited||[]).some(t=>t.id!==at)?{hide:!0}:e.only==="final"&&he.next?{hide:!0}:!ai()&&at==="mars"&&e.chapter&&e.chapter>h.chapter?{ok:!1,why:"\u5267\u60C5\u63A8\u8FDB\u540E\u89E3\u9501"}:e.level&&e.level>h.cityLevel?{ok:!1,why:`\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C${Yn[e.level].name}\u300D\u89E3\u9501`}:{ok:!0}}var s0=["solar","oxygen","lamp","habitat","greenhouse","extractor","beacon","fabricator","drones","lab","trade","turret","reactor","plaza","apartment","vfarm","lifehub","terraformer","launch","monument"],sT=["oxygen","lifehub","turret","habitat","apartment","extractor","greenhouse","vfarm","beacon","plaza","lab","trade","drones","fabricator","terraformer","launch","monument"],kv=new He({color:8382207,transparent:!0,opacity:.8,blending:Le,depthWrite:!1,side:ut});function cd(n,e,t,i=0,s,r=!1,o=1){let a=jn[n],l=new ae,c={};ni[n](l,c);let d=de(e,t);if(l.position.set(e,d,t),l.rotation.y=i,h.scene.add(l),r){l.scale.set(1,.001,1);let f=new Z(new De(a.r*1.05,.08,6,48),kv.clone());f.rotation.x=Math.PI/2,f.position.set(e,d,t),h.scene.add(f),c._scan=f}let u={buildT:r?0:1,type:n,def:a,x:e,z:t,y:d,rot:i,group:l,anim:c,hp:s??a.hp,broken:s!==void 0&&s<=0,powered:!0,t:Math.random()*10,cool:0};return u.collider=h.colliders.add({x:e,z:t,r:a.r*(n==="beacon"?.15:n==="plaza"?.28:.9),kind:"building",b:u}),u.level=o,u.maxHp=Qi(u,"hp"),s===void 0&&(u.hp=u.maxHp),o>1&&zv(u,!1),h.buildings.push(u),h.stats.built[n]=(h.stats.built[n]||0)+1,wv(u),Ms(),u}function Ov(n,e=!1){if(e)for(let s in n.def.cost)h.res[s]+=Math.floor(n.def.cost[s]*.5);h.scene.remove(n.group),h.colliders.remove(n.collider),bv(n),n.type==="drones"&&Hv(n);let t=h.buildings.indexOf(n);t>=0&&h.buildings.splice(t,1),h.stats.built[n.type]=Math.max(0,(h.stats.built[n.type]||0)-1);let i=new S(n.x,n.y+2,n.z);oe.burst(i,[1,.6,.3],60,10),oe.dustPuff(i,30,n.def.r*2),xs(i,Math.min(3,n.def.r*.45),16752720),Ms()}function Fv(n){return h.buildings.filter(e=>e.type===n).length}function Ms(){let n=h.colony,e=(h.time.elevation>.05?1:.4)*he.solar,t=0,i=0;for(let r of h.buildings){if(r.broken)continue;let o=Qi(r,"power");o>0?t+=r.type==="solar"?o*e:o:i-=o}let s=t;for(let r of h.buildings)r.powered=r.def.power>=0&&!r.broken,r.maxHp=Qi(r,"hp");for(let r of sT)for(let o of h.buildings){if(o.type!==r)continue;let a=Qi(o,"power");!o.broken&&s>=-a&&(s+=a,o.powered=!0)}n.powerProd=t,n.powerUse=i,n.deficit=i>t+.001,n.housing=0,n.o2=0,n.food=0,n.water=0;for(let r of h.buildings)n.housing+=Qi(r,"housing"),r.powered&&(n.o2+=Qi(r,"o2"),n.food+=Qi(r,"food"),n.water+=Qi(r,"water"));n.support=Math.min(n.housing,n.o2,n.food,n.water)}function Bv(n){for(let e of h.buildings){let t=Qi(e,"life");if(!t||!e.powered)continue;let i=e.x-n.x,s=e.z-n.z;if(i*i+s*s<t*t)return e}return null}var ys=null,rT=null,Gv=new He({color:5636010,transparent:!0,opacity:.35,depthWrite:!1}),oT=new He({color:16729156,transparent:!0,opacity:.35,depthWrite:!1}),Di,It={type:null,rot:0,valid:!1,reason:"",x:0,z:0};function fo(n){if(ys&&(h.scene.remove(ys),ys=null),It.type=n,rT=n,!n){Di&&(Di.visible=!1);return}let e=new ae;ni[n](e,{}),e.traverse(i=>{i.isMesh&&(i.material=Gv,i.castShadow=!1,i.receiveShadow=!1),(i.isSprite||i.userData.found)&&(i.visible=!1)}),ys=e,h.scene.add(e),Di||(Di=new Z(new nn(.96,1,64),new He({color:6741503,transparent:!0,opacity:.5,depthWrite:!1,side:ut})),Di.rotation.x=-Math.PI/2,h.scene.add(Di));let t=jn[n].life||jn[n].range||0;Di.visible=t>0,Di.scale.setScalar(t||1)}function Vv(n,e){if(!ys)return;if(!n){ys.visible=!1,Di.visible=!1,It.valid=!1,It.reason="\u5BF9\u51C6\u5730\u9762";return}ys.visible=!0;let t=jn[It.type],i=n.x,s=n.z,r=Math.hypot(i-e.x,s-e.z),o=t.r+1.2;if(r<o){let d=r>.01?(i-e.x)/r:-Math.sin(h.player.yaw),u=r>.01?(s-e.z)/r:-Math.cos(h.player.yaw);i=e.x+d*o,s=e.z+u*o,r=o}let a=de(i,s);ys.position.set(i,a,s),ys.rotation.y=It.rot,It.x=i,It.z=s,Di.scale.x>1&&(Di.visible=!0,Di.position.set(i,a+.3,s));let l="";Ki(t.cost)?ao(i,s,Math.max(1.5,t.r*.7))>(t.r>4?.32:.45)?l="\u5730\u9762\u592A\u9661":h.colliders.overlaps(i,s,t.r*.85)?l="\u4F4D\u7F6E\u88AB\u5360\u7528":r<t.r+.8?l="\u79BB\u81EA\u5DF1\u592A\u8FD1":Math.abs(i)>ke-170||Math.abs(s)>ke-170?l="\u8D85\u51FA\u53EF\u5EFA\u9020\u533A\u57DF":yv(i,s,t.r)||(l="\u8D85\u51FA\u6B96\u6C11\u5730\u9886\u5730\uFF08\u63D0\u5347\u57CE\u5E02\u7B49\u7EA7\u6765\u6269\u5F20\uFF09"):l="\u8D44\u6E90\u4E0D\u8DB3",It.valid=!l,It.reason=l;let c=l?oT:Gv;ys.traverse(d=>{d.isMesh&&(d.material=c)})}function Wv(){if(!It.type||!It.valid)return G.play("deny"),null;let n=jn[It.type];Ul(n.cost);let e=cd(It.type,It.x,It.z,It.rot,void 0,!0);return G.play("place"),oe.ring(new S(e.x,e.y,e.z),n.r,50),e}var e0=0;function r0(n,e){e0-=n,e0<=0&&(e0=.5,Ms()),Sv(),Uv(n);let t=h.time.night,i=performance.now()*.001;y.window.emissiveIntensity=.3+t*.85,y.lamp.emissiveIntensity=t*4;for(let s of Fl)s.emissiveIntensity=.15+t*1.4;for(let s of h.buildings){let r=s.anim,o=s.powered;if(s.t+=n,s.buildT<1){s.buildT=Math.min(1,s.buildT+n/1.3);let a=s.buildT,l=1+2.2*Math.pow(a-1,3)+1.2*Math.pow(a-1,2);s.group.scale.y=Math.max(.001,l)*(s.baseScale||1);let c=Math.max(3,s.def.r*1.4)*(s.type==="apartment"||s.type==="launch"||s.type==="terraformer"||s.type==="monument"?4:1);r._scan.position.y=s.y+a*c,r._scan.material.opacity=.8*(1-a),r._scan.scale.setScalar(1-a*.25),Math.random()<.5&&oe.spark(new S(s.x+(Math.random()-.5)*s.def.r*2,s.y+a*c,s.z+(Math.random()-.5)*s.def.r*2),[.5,.9,1],1,2,.6),a>=1&&(h.scene.remove(r._scan),r._scan.geometry.dispose(),delete r._scan)}switch(s.hp<s.maxHp&&h.time.night<.5&&(s.hp=Math.min(s.maxHp,s.hp+n*(s.broken?5:2)),s.broken&&s.hp>=s.maxHp*.5&&(s.broken=!1,Ms(),h.events.emit("toast",`\u2713 ${s.def.name} \u5DF2\u4FEE\u590D\uFF0C\u6062\u590D\u8FD0\u8F6C`))),s.broken&&Math.random()<n*6&&oe.dustPuff(new S(s.x+(Math.random()-.5)*s.def.r,s.y+1.5,s.z+(Math.random()-.5)*s.def.r),1,.5,[.15,.13,.12]),s.type){case"solar":{let a=new S(Hn.x,Math.max(Hn.y,.2),Hn.z).applyAxisAngle(new S(0,1,0),-s.rot);r.pivot.rotation.y=Math.atan2(a.x,a.z),r.panel.rotation.x=Math.PI/2-Math.asin(Math.min(1,a.y/a.length()));break}case"oxygen":o&&(r.fan.rotation.z+=n*8),r.light.visible=o;break;case"extractor":o&&(r.drill.position.y=3+Math.sin(s.t*3)*.8),r.light.visible=o;break;case"greenhouse":r.light.material.opacity=o?.3+t*.5:0;break;case"fabricator":o?(r.arm.rotation.y=Math.sin(s.t*.8)*1.2,r.spark.visible=Math.sin(s.t*7)>.6):r.spark.visible=!1;break;case"habitat":r.tip.visible=Math.sin(i*2+s.x)>.3;break;case"apartment":r.tip.visible=Math.sin(i*2+s.z)>.3;break;case"vfarm":r.light.material.opacity=o?.25+t*.5:0;break;case"lifehub":o&&(r.fan.rotation.y+=n*3),r.light.visible=o;break;case"plaza":r.earth.rotation.y+=n*.25,r.earth.position.y=4+Math.sin(i*.8)*.15,r.earth.material.opacity=o?.55-t*.15:.15,r.halo.material.opacity=o?.25+t*.2:0;break;case"lab":r.scope&&(r.scope.rotation.z=Math.sin(i*.2)*.4),r.tip&&(r.tip.visible=Math.sin(i*2.5)>0),r.light&&(r.light.visible=o);break;case"trade":r.jib&&(r.jib.rotation.y=Math.sin(i*.15)*1.2),r.tip&&(r.tip.visible=Math.sin(i*3)>0);break;case"monument":r.rings.forEach((a,l)=>{a.rotation.x=i*(.3+l*.2),a.rotation.y=i*(.2+l*.15)});break;case"reactor":r.r1.rotation.y+=n*.8,r.r2.rotation.z+=n*.6,r.light.material.opacity=.5+Math.sin(i*3)*.2;break;case"beacon":{let a=Math.floor(i*6)%8;r.lights.forEach((l,c)=>{l.visible=o&&(c===a||c===(a+4)%8||t>.3)}),r.tip.visible=Math.sin(i*3)>0;break}case"lamp":r.glow.visible=t>.2,r.glow.material.opacity=t*.6;break;case"turret":aT(s,n,e);break;case"terraformer":{r.rings.forEach((a,l)=>{a.position.y=10+l*8+Math.sin(i*1.5+l)*1.5,a.rotation.x=Math.sin(i+l)*.2}),r.beam.material.opacity=o&&h.terraform<1?.18+Math.sin(i*4)*.05:0,o&&h.terraform<1&&Math.random()<.6&&oe.rise(new S(s.x,s.y+28,s.z),[.4,.9,1],4);break}}}}function aT(n,e,t){let i=n.anim;if(i.eye.visible=n.powered,!n.powered)return;n.cool-=e;let s=null,r=Qi(n,"range");for(let l of h.enemies){if(l.dead)continue;let c=Math.hypot(l.pos.x-n.x,l.pos.z-n.z);c<r&&(r=c,s=l)}if(!s){i.head.rotation.y+=e*.4;return}let a=Math.atan2(-(s.pos.x-n.x),-(s.pos.z-n.z))-n.rot-i.head.rotation.y;if(a=Math.atan2(Math.sin(a),Math.cos(a)),i.head.rotation.y+=Math.sign(a)*Math.min(Math.abs(a),e*5),Math.abs(a)<.15&&n.cool<=0){n.cool=.45;let l=new S(n.x,n.y+2.7,n.z),c=s.pos.clone();c.y+=1;let d=c.sub(l).normalize();l.addScaledVector(d,2.2),t.shoot(l,d,15*t0[n.level||1]*(Xt("plasma")?1.5:1),"turret"),gv(l,d,16760944,1.1),G.play("turret",l)}}function Xv(){return h.buildings.map(n=>[n.type,+n.x.toFixed(2),+n.z.toFixed(2),+n.rot.toFixed(3),Math.round(n.hp),n.level||1])}var rc=new S;function Hi(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;rc.copy(e),rc[i]=0,rc.normalize();let c=.5*o/(o+a),d=1-rc.angleTo(n)/l;return Math.sign(rc[t])===1?d*c:a/(o+a)+c+c*(1-d)}var La=class extends Ke{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new S,l=new S,c=new S(e,t,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,g=new S,x=.5/s;for(let v=0,m=0;v<d.length;v+=3,m+=2)switch(a.fromArray(d,v),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),d[v+0]=c.x*Math.sign(a.x)+l.x*r,d[v+1]=c.y*Math.sign(a.y)+l.y*r,d[v+2]=c.z*Math.sign(a.z)+l.z*r,u[v+0]=l.x,u[v+1]=l.y,u[v+2]=l.z,Math.floor(v/p)){case 0:g.set(1,0,0),f[m+0]=Hi(g,l,"z","y",r,i),f[m+1]=1-Hi(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),f[m+0]=1-Hi(g,l,"z","y",r,i),f[m+1]=1-Hi(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),f[m+0]=1-Hi(g,l,"x","z",r,e),f[m+1]=Hi(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),f[m+0]=1-Hi(g,l,"x","z",r,e),f[m+1]=1-Hi(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),f[m+0]=1-Hi(g,l,"x","y",r,e),f[m+1]=1-Hi(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),f[m+0]=Hi(g,l,"x","y",r,e),f[m+1]=1-Hi(g,l,"y","x",r,t);break}}};var ie=(n,e,t)=>new S(n,e,t);function C(n,e,t=0,i=0,s=0,r,o=0,a=0,l=0){let c=new Z(n,e);return c.position.set(t,i,s),c.rotation.set(o,a,l),c.castShadow=!0,c.receiveShadow=!0,r&&r.add(c),c}var xe=(n,e,t,i=.06)=>new La(n,e,t,2,Math.min(i,n/2.1,e/2.1,t/2.1)),Re=(n,e,t,i=24,s=!1)=>new Ge(n,e,t,i,1,s),kt=(n,e=32)=>new pi(n.map(([t,i])=>new $(t,i)),e);function Pt(n,e,t,i,s,r=10){let o=e.clone().sub(n),a=o.length(),l=C(Re(t,t,a,r),i,0,0,0,s);return l.position.copy(n).add(e).multiplyScalar(.5),l.quaternion.setFromUnitVectors(ie(0,1,0),o.normalize()),l}function lT(n,e,t,i,s){let r=Pt(n,e,t,i,s);for(let o of[n,e]){let a=Pt(o.clone().lerp(e===o?n:e,.02),o,t*1.6,y.metal,s);a.scale.y=1}return r}function Ui(n,e,t,i,s=32){let r=new Tl(n);return C(new Rh(r,s,e,8,!1),t,0,0,0,i)}function cT(n,e,t,i,s,r){let o=n.clone().lerp(e,.5);return o.y-=t,Ui([n,n.clone().lerp(o,.5).add(ie(0,-t*.15,0)),o,e.clone().lerp(o,.5).add(ie(0,-t*.15,0)),e],i,s,r,24)}function dd(n,e,t,i,s,r=0,o=.5){let a=new ae;a.position.set(e,t,i),a.rotation.y=r,n.add(a),C(Re(.035,.035,s,6),y.metal,-o/2,s/2,0,a),C(Re(.035,.035,s,6),y.metal,o/2,s/2,0,a);for(let l=.25;l<s;l+=.32)C(Re(.022,.022,o,6),y.metal,0,l,0,a,0,0,Math.PI/2);return a}function Ni(n,e,t,i,s,r,o=0,a=8){let l=new ae;l.position.set(i,s,r),l.rotation.y=o,n.add(l),C(xe(e,t,.08,.02),y.dark,0,0,0,l);for(let c=0;c<a;c++)C(new Ke(e*.9,t/a*.45,.04),y.metal,0,-t/2+(c+.5)*t/a,.05,l,-.4,0,0);return l}function Lr(n,e,t,i,s,r=0,o=0){let a=new ae;a.position.set(e,t,i),a.rotation.set(o,r,0),n.add(a),C(new De(s,s*.18,8,24),y.metal,0,0,0,a),C(new Ln(s*.95,24),y.window,0,0,-.01,a);for(let l=0;l<8;l++){let c=l/8*Math.PI*2;C(new ze(s*.06,6,4),y.metal,Math.cos(c)*s*1.12,Math.sin(c)*s*1.12,.02,a)}return a}function ud(n,e,t,i,s=.05){for(let r=0;r<i;r++){let o=r/i*Math.PI*2;C(Re(s,s,s*1.2,6),y.metal,Math.cos(o)*e,t,Math.sin(o)*e,n)}}function o0(n,e,t,i,s=.22,r=0,o=0){let a=new ae;a.position.set(e,t,i),a.rotation.set(r,o,0),n.add(a),C(new De(s,s*.12,6,18),y.red2,0,0,0,a);for(let l=0;l<3;l++)C(new Ke(s*2,s*.12,s*.12),y.red2,0,0,0,a,0,0,l*Math.PI/3);return C(Re(s*.25,s*.25,s*.6,8),y.metal,0,0,-s*.3,a,Math.PI/2,0,0),a}function Da(n,e,t,i,s=0){let r=new ae;return r.position.set(e,t,i),r.rotation.y=s,n.add(r),C(Re(.13,.13,.06,18),y.metal,0,0,0,r,Math.PI/2,0,0),C(new Ln(.11,18),y.screen,0,0,.032,r),r}function zi(n,e,t,i,s,r,o=0){return C(new Ke(e,t,.02),y.hazard,i,s,r,n,0,o,0)}function oc(n,e,t,i,s,r,o,a,l=0){let c=new ae;c.rotation.y=l,n.add(c);for(let d=0;d<t;d++){let u=.12+e()*.35,f=.1+e()*.3,p=.04+e()*.12,g=e(),x=g<.5?y.panel:g<.8?y.dark:y.metal;e()<.3?C(Re(u*.3,u*.3,p*2,10),x,i+e()*(s-i),r+e()*(o-r),a+p,c,Math.PI/2,0,0):C(xe(u,f,p,.015),x,i+e()*(s-i),r+e()*(o-r),a+p/2,c)}return c}function Dr(n){let e=n;return()=>(e=e*16807%2147483647,(e-1)/2147483646)}{let n=document.createElement("canvas");n.width=128,n.height=32;let e=n.getContext("2d");e.fillStyle="#f2c11a",e.fillRect(0,0,128,32),e.fillStyle="#1a1a1a";for(let d=-32;d<160;d+=24)e.beginPath(),e.moveTo(d,32),e.lineTo(d+12,32),e.lineTo(d+44,0),e.lineTo(d+32,0),e.fill();let t=new Zt(n);t.colorSpace=_t,t.wrapS=$n,t.repeat.set(2,1),y.hazard=new pe({map:t,roughness:.7}),y.red2=new pe({color:13120030,roughness:.5,metalness:.3}),y.chrome=new pe({color:14738666,roughness:.15,metalness:1}),y.rubber=new pe({color:1842206,roughness:.92}),y.ablative=new pe({color:3811874,roughness:.95,map:y.found.map,bumpMap:y.found.bumpMap,bumpScale:3}),y.soil=new pe({color:3875864,roughness:1}),y.leaf=new pe({color:4168250,roughness:.7,flatShading:!0}),y.leaf2=new pe({color:7127626,roughness:.7,flatShading:!0}),y.fruit=new pe({color:14694428,roughness:.4}),y.growlight=new pe({color:2228241,emissive:16732120,emissiveIntensity:2.2});let i=document.createElement("canvas");i.width=i.height=64;let s=i.getContext("2d");s.fillStyle="#0a1a14",s.fillRect(0,0,64,64),s.strokeStyle="#6dffb5",s.lineWidth=3,s.beginPath(),s.arc(32,36,22,Math.PI*1.1,Math.PI*1.9),s.stroke(),s.beginPath(),s.moveTo(32,36),s.lineTo(46,22),s.stroke();let r=new Zt(i);r.colorSpace=_t,y.screen=new pe({map:r,emissive:16777215,emissiveMap:r,emissiveIntensity:.9});let o=document.createElement("canvas");o.width=128,o.height=128;let a=o.getContext("2d"),l=a.createLinearGradient(0,0,128,128);l.addColorStop(0,"#16285a"),l.addColorStop(.5,"#2a4a9a"),l.addColorStop(1,"#122048"),a.fillStyle=l,a.fillRect(0,0,128,128),a.strokeStyle="rgba(200,220,255,.55)",a.lineWidth=1;for(let d=16;d<128;d+=16)a.beginPath(),a.moveTo(d,0),a.lineTo(d,128),a.stroke();a.strokeStyle="rgba(220,230,255,.8)",a.lineWidth=2,a.beginPath(),a.moveTo(0,64),a.lineTo(128,64),a.stroke();let c=new Zt(o);c.colorSpace=_t,c.anisotropy=8,y.cell=new pe({map:c,roughness:.12,metalness:.6,envMapIntensity:1.8})}function Un(n,e,t=!1){let i=t?C(xe(e*2,4,e*2,.12),y.found,0,-1.8,0,n):C(Re(e,e*1.05,4,32),y.found,0,-1.8,0,n);i.castShadow=!1,i.userData.found=!0}Object.assign(ni,{solar(n,e){Un(n,2.2,!0),C(xe(1.4,.25,1.4,.05),y.panel,0,.12,0,n),ud(n,.55,.27,8,.04),C(kt([[0,0],[.3,0],[.26,.4],[.17,.6],[.15,2.1],[0,2.1]]),y.metal,0,.25,0,n),C(xe(.5,.6,.4,.05),y.dark,.32,.65,0,n),Da(n,.57,.7,0,Math.PI/2),cT(ie(.4,.5,.15),ie(1.3,.05,.9),.15,.03,y.rubber,n);let t=new ae;t.position.y=2.45,n.add(t),C(xe(.5,.42,.5,.06),y.dark,0,0,0,t),C(Re(.12,.12,.9,12),y.chrome,0,.1,0,t,0,0,Math.PI/2);let i=new ae;i.position.y=.25,t.add(i),C(xe(4.4,.1,3,.03),y.metal,0,-.02,0,i);for(let s=0;s<4;s++)for(let r=0;r<3;r++){let o=C(new Ke(1.02,.03,.92),y.cell,-1.6+s*1.07,.045,-.97+r*.97,i);o.castShadow=!0}for(let s of[-1.1,1.1])C(new Ke(4.2,.08,.06),y.metal,0,-.1,s,i);for(let s of[-1.5,0,1.5])C(new Ke(.06,.08,2.6),y.metal,s,-.1,0,i);Pt(ie(-1.5,-.12,-1.1),ie(0,-.35,0),.03,y.metal,i),Pt(ie(1.5,-.12,1.1),ie(0,-.35,0),.03,y.metal,i),Pt(ie(1.5,-.12,-1.1),ie(0,-.35,0),.03,y.metal,i),Pt(ie(-1.5,-.12,1.1),ie(0,-.35,0),.03,y.metal,i),C(xe(.3,.12,.2,.02),y.dark,1.9,.08,1.35,i),e.pivot=t,e.panel=i},oxygen(n,e){Un(n,3);let t=Dr(11);C(Re(3,3.1,.35,40),y.panel,0,.17,0,n);for(let s of[-1.35,1.35]){let r=new ae;r.position.set(s,.35,-.3),n.add(r),C(kt([[0,.2],[.55,.22],[.9,.45],[1,.8],[1,3.2],[.9,3.55],[.55,3.78],[0,3.8]],40),y.white,0,0,0,r);for(let o of[1.2,2.4])C(new De(1.005,.03,6,40),y.metal,0,o,0,r,Math.PI/2,0,0);C(Re(1.015,1.015,.25,40,!0),y.orange,0,1.8,0,r);for(let o of[-.6,.6])C(xe(1.6,.35,.2,.04),y.dark,0,.25,o,r);C(Re(.12,.12,.3,12),y.metal,0,3.9,0,r),o0(r,0,4.1,0,.18,Math.PI/2,0),Da(r,0,2.2,1.02),dd(r,0,.3,-1.05,3.4,Math.PI)}C(xe(1.7,1.9,1.6,.1),y.panel,0,1.3,1.2,n),C(xe(1.8,.2,1.7,.05),y.orange,0,2.3,1.2,n),oc(n,t,10,-.7,.7,.6,2,1.95),Ni(n,1,.5,0,.7,2.01,0,6),C(new De(.42,.06,8,28),y.dark,0,1.75,2.02,n);let i=new ae;i.position.set(0,1.75,2.03),n.add(i);for(let s=0;s<6;s++)C(new Ke(.1,.36,.02),y.metal,Math.sin(s*Math.PI/3)*.2,Math.cos(s*Math.PI/3)*.2,0,i,0,.4,-s*Math.PI/3);C(Re(.08,.08,.06,12),y.chrome,0,0,0,i,Math.PI/2,0,0),e.fan=i;for(let s of[-1.35,1.35])Ui([ie(s,3.2,.5),ie(s*.7,3,.9),ie(s*.3,2.4,1.2),ie(s*.25,2.2,1.3)],.07,y.metal,n);lT(ie(-1.35,.9,.7),ie(1.35,.9,.7),.06,y.metal,n),o0(n,.8,.9,.85,.15,0,0),Da(n,-.5,2,2.01),Da(n,.5,2,2.01),e.light=ve(6741503,.45,n,.6,2.05,2.05),zi(n,1.8,.12,0,.42,2.02)},habitat(n,e){Un(n,6.2);let t=Dr(23);C(kt([[0,0],[6.25,0],[6.3,.15],[6.25,.9],[6.05,1.05],[5.95,1.25],[0,1.25]],64),y.panel,0,0,0,n);for(let o=0;o<16;o++){let a=o/16*Math.PI*2;Math.abs(a-Math.PI/2)<.3||Ni(n,.7,.4,Math.cos(a)*6.28,.55,Math.sin(a)*6.28,-a+Math.PI/2,4)}let i=C(new ze(5.8,64,24,0,Math.PI*2,0,Math.PI/2),y.white,0,1.2,0,n);i.scale.y=.85;for(let o=0;o<12;o++)C(new De(5.86,.08,6,32,Math.PI/2),y.panel,0,1.2,0,n,0,o*Math.PI/6,0).scale.set(1,.85,1);for(let[o,a]of[[2.6,5.62],[4.3,4.6]])C(new De(a,.07,6,64),y.panel,0,o,0,n,Math.PI/2,0,0);e.windows=[];for(let o=0;o<14;o++){let a=o/14*Math.PI*2+.11;if(Math.abs(a-Math.PI/2)<.35)continue;let l=new ae;l.position.set(Math.cos(a)*5.76,2,Math.sin(a)*5.76),l.rotation.y=-a+Math.PI/2,l.rotation.x=-.18,n.add(l),C(xe(1.15,.62,.16,.08),y.metal,0,0,0,l),C(xe(1,.48,.1,.07),y.window,0,0,.05,l)}C(Re(1.2,1.4,.5,32),y.panel,0,6.05,0,n),C(new ze(1,32,12,0,Math.PI*2,0,Math.PI/2),y.glass,0,6.3,0,n).castShadow=!1,C(new De(1.05,.06,6,32),y.metal,0,6.3,0,n,Math.PI/2,0,0),C(Re(.06,.09,3.2,8),y.metal,1.6,7,0,n),e.tip=ve(16728128,1,n,1.6,8.7,0),C(new ze(.55,20,8,0,Math.PI*2,0,Math.PI/3),y.white,-1.4,6.6,.6,n).rotation.set(-.9,.5,0),C(Re(.05,.05,.9,6),y.metal,-1.4,6.1,.6,n),dd(n,0,1.25,-5.4,3.2,0,.45).rotation.x=-.6;let r=new ae;r.position.set(0,0,6.2),n.add(r),C(xe(2.6,2.9,3,.25),y.white,0,1.45,.2,r),C(xe(2.64,.12,3.04,.05),y.orange,0,2.62,.2,r),C(xe(1.5,2.2,.15,.12),y.metal,0,1.25,1.72,r),C(xe(1.2,1.95,.1,.1),y.dark,0,1.2,1.78,r),Lr(r,0,1.75,1.84,.22),C(xe(.12,.4,.08,.03),y.chrome,.45,1.1,1.85,r),zi(r,1.5,.14,0,.12,1.85);for(let o=0;o<3;o++)C(xe(1.4,.12,.35,.03),y.metal,0,.06+o*0,2.05+o*.35,r).position.y=.3-o*.12;ve(16769184,.8,r,1,2.5,1.8),C(xe(.5,.35,.3,.04),y.dark,-1,2.4,1.75,r),oc(r,t,8,-1.2,1.2,.4,2.6,1.7,0),Ui([ie(4.5,1,3.5),ie(5.6,.6,4.2),ie(6.6,.25,4.6),ie(7.6,.2,4.6)],.12,y.metal,n),Ui([ie(-4.5,1,3.5),ie(-5.4,.7,4.4),ie(-6.4,.25,5)],.1,y.orange,n);for(let[o,a,l]of[[-6.3,-2.4,.4],[6.4,-2,-.3]]){let c=new ae;c.position.set(o,0,a),c.rotation.y=l,n.add(c),C(xe(1.4,1.1,1,.08),y.panel,0,.55,0,c),Ni(c,.9,.7,0,.6,.51,0,6),C(new De(.35,.05,6,20),y.dark,0,1.12,0,c,Math.PI/2,0,0)}},extractor(n,e){Un(n,2.6,!0),C(xe(4.6,.5,4.6,.08),y.panel,0,.25,0,n),zi(n,4.6,.15,0,.42,2.31),zi(n,4.6,.15,0,.42,-2.31);let t=6.4,i=.6,s=1.6,r=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let[a,l]of r)Pt(ie(a*s,.5,l*s),ie(a*i,t,l*i),.09,y.orange,n);for(let a=0;a<3;a++){let l=.5+a*(t-.5)/3,c=l+(t-.5)/3,d=s+(i-s)*(a/3),u=s+(i-s)*((a+1)/3);for(let f=0;f<4;f++){let[p,g]=r[f],[x,v]=r[(f+1)%4];Pt(ie(p*d,l,g*d),ie(x*u,c,v*u),.035,y.metal,n),Pt(ie(x*d,l,v*d),ie(p*u,c,g*u),.035,y.metal,n),Pt(ie(p*u,c,g*u),ie(x*u,c,v*u),.04,y.metal,n)}}C(xe(1.8,.3,1.8,.05),y.dark,0,t+.1,0,n);for(let[a,l]of r)C(Re(.03,.03,.7,6),y.metal,a*.85,t+.6,l*.85,n);C(Re(.45,.45,.6,20),y.white,0,t+.55,0,n),e.light=ve(10476799,1,n,0,t+1.1,0);let o=new ae;o.position.y=3,n.add(o),C(Re(.18,.18,4.6,16),y.chrome,0,0,0,o);for(let a=0;a<5;a++)C(new De(.2,.04,6,16),y.metal,0,-2+a*1,0,o,Math.PI/2,0,0);C(new Wt(.3,.7,16),y.dark,0,-2.6,0,o,Math.PI,0,0),e.drill=o,C(kt([[0,0],[.9,0],[1,.2],[1,1.8],[.8,2.1],[0,2.15]],32),y.white,2.1,.5,1.3,n),C(Re(1.01,1.01,.2,32,!0),y.orange,2.1,1.6,1.3,n),Da(n,2.1,1.2,2.31),Ui([ie(.3,1,.3),ie(.9,1.2,.8),ie(1.5,1.6,1.2),ie(2.1,2.7,1.3)],.08,y.metal,n),o0(n,1.2,1.25,1.1,.14,0,.6),C(xe(1.2,1,.9,.08),y.dark,-1.7,1,1.4,n),Ni(n,.8,.5,-1.7,1,1.86,0,5)},greenhouse(n,e){Un(n,5,!0),C(xe(10.4,.5,6.4,.1),y.panel,0,.25,0,n);let t=C(new Ge(3,3,10,40,1,!0,0,Math.PI),y.glass,0,.5,0,n,0,0,Math.PI/2);t.castShadow=!1;for(let s=0;s<9;s++)C(new De(3.02,.06,6,28,Math.PI),y.white,-4.8+s*1.2,.5,0,n,0,Math.PI/2,0);for(let s=1;s<6;s++){let r=s/6*Math.PI;C(Re(.035,.035,9.8,6),y.white,0,.5+Math.sin(r)*3.02,Math.cos(r)*3.02,n,0,0,Math.PI/2)}for(let s of[-1,1]){let r=C(new Ln(3,32,0,Math.PI),y.glass,s*5,.5,0,n,0,s*Math.PI/2,0);r.castShadow=!1,C(xe(.12,2.2,1.3,.04),y.white,s*5,1.6,0,n)}C(xe(.1,1.9,1,.05),y.dark,5.05,1.45,0,n);let i=Dr(71);for(let s of[-1.5,0,1.5]){C(xe(9,.5,.9,.05),y.dark,0,.75,s,n),C(new Ke(8.8,.06,.8),y.soil,0,1.01,s,n);for(let r=0;r<10;r++){let o=-4.1+r*.9+(i()-.5)*.2,a=(r+Math.round(s))%3;if(a===0)for(let l=0;l<4;l++)C(new zn(.22+i()*.12,0),l%2?y.leaf:y.leaf2,o+(i()-.5)*.3,1.2+i()*.25,s+(i()-.5)*.3,n).castShadow=!1;else if(a===1){C(Re(.02,.02,1.2,4),y.leaf,o,1.6,s,n);for(let l=0;l<5;l++)C(new zn(.14,0),y.leaf2,o+(i()-.5)*.3,1.2+l*.22,s+(i()-.5)*.3,n).castShadow=!1;for(let l=0;l<3;l++)C(new ze(.07,8,6),y.fruit,o+(i()-.5)*.3,1.3+i()*.8,s+(i()-.5)*.25,n)}else for(let l=0;l<6;l++){let c=C(new Wt(.05,.5,4),y.leaf2,o+(i()-.5)*.25,1.25,s+(i()-.5)*.25,n,(i()-.5)*.6,0,(i()-.5)*.6);c.castShadow=!1}}}for(let s of[-.75,.75])C(xe(9,.06,.12,.02),y.growlight,0,2.7,s,n);e.light=ve(16737996,4,n,0,2.3,0),C(kt([[0,0],[.6,0],[.65,.1],[.65,1.5],[.5,1.7],[0,1.72]],24),y.white,-4.4,.5,3.6,n),Ui([ie(-4.4,1.6,3.6),ie(-4.2,1.9,3),ie(-4,1.5,2.6)],.05,y.metal,n)}});Object.assign(ni,{fabricator(n,e){Un(n,4,!0);let t=Dr(41);C(xe(7.4,.4,5.4,.08),y.panel,0,.2,0,n),C(xe(7,3.2,5,.18),y.white,0,2,0,n),C(new Ge(2.5,2.5,7,32,1,!1,0,Math.PI),y.panel,0,3.6,0,n,0,0,Math.PI/2).scale.set(1,1,.35);for(let o=0;o<6;o++)C(new De(2.52,.05,6,24,Math.PI),y.metal,-3.3+o*1.32,3.6,0,n,0,Math.PI/2,0).scale.set(1,.35,1);C(xe(7.1,.2,5.1,.05),y.orange,0,3.55,0,n),C(xe(3.4,2.7,.2,.06),y.metal,0,1.75,2.52,n);for(let o=0;o<12;o++)C(new Ke(3,.16,.05),y.dark,0,.55+o*.2,2.64,n);zi(n,3.4,.14,0,.35,2.66);for(let o of[-1.9,1.9])ve(16769184,.7,n,o,3,2.6);oc(n,t,16,-3.2,3.2,.8,3,-2.5,Math.PI),Ni(n,1.2,.8,2.6,1.6,2.52,0,6),Ni(n,1.2,.8,-2.6,1.6,2.52,0,6),Ui([ie(3.5,3,-1.5),ie(4.2,2.5,-1.8),ie(4.4,1,-2),ie(4.4,.4,-2)],.1,y.metal,n);let i=new ae;i.position.set(2.2,3.85,0),n.add(i),C(Re(.45,.55,.4,24),y.dark,0,.2,0,i);let s=new ae;s.position.y=.4,s.rotation.z=.35,i.add(s),C(xe(.32,1.8,.32,.08),y.orange,0,.9,0,s),C(Re(.22,.22,.45,16),y.metal,0,1.8,0,s,Math.PI/2,0,0);let r=new ae;r.position.y=1.8,r.rotation.z=-1.4,s.add(r),C(xe(.25,1.4,.25,.06),y.orange,0,.7,0,r),C(Re(.12,.05,.35,12),y.chrome,0,1.55,0,r),e.arm=i,e.spark=ve(16764006,1,r,0,1.8,0);for(let[o,a,l]of[[-2.6,3.4,1.1],[-1.4,3.3,.9],[-2.1,3.6,.6]])C(xe(l,l,l,.05),y.dark,o,l/2+(l<.7?1.1:0),a,n),C(new Ke(l*1.01,.06,l*1.01),y.orange,o,l*.7+(l<.7?1.1:0),a,n)},turret(n,e){Un(n,1.8),C(kt([[0,0],[1.9,0],[1.95,.15],[1.6,.9],[1.2,1.2],[0,1.2]],32),y.metal,0,0,0,n),ud(n,1.7,.2,12,.06),C(Re(.65,.8,1.2,24),y.dark,0,1.75,0,n);let t=new ae;t.position.y=2.75,n.add(t),C(xe(1.7,1.05,2,.2),y.white,0,0,.1,t),C(xe(1.75,.18,2.05,.06),y.orange,0,.32,.1,t),C(xe(.9,.35,.6,.08),y.dark,0,.6,.4,t);for(let i of[-.42,.42]){C(Re(.16,.16,.5,16),y.dark,i,0,-.95,t,Math.PI/2,0,0),C(Re(.09,.09,1.9,16),y.metal,i,0,-1.9,t,Math.PI/2,0,0);for(let s=0;s<3;s++)C(new De(.11,.025,6,16),y.cyan,i,0,-1.4-s*.35,t);C(Re(.13,.11,.25,16),y.dark,i,0,-2.9,t,Math.PI/2,0,0)}C(Re(.18,.18,.1,16),y.cyan,0,.1,-.92,t,Math.PI/2,0,0),e.eye=ve(3401471,.6,t,0,.1,-.98),Ni(t,.9,.4,0,-.1,1.12,0,4),e.head=t},reactor(n,e){Un(n,5.2),C(kt([[0,0],[5.2,0],[5.3,.2],[5,1.3],[4.6,1.5],[0,1.5]],48),y.panel,0,0,0,n),zi(n,2.5,.16,0,1,5.06);for(let r=0;r<16;r++){let o=r/16*Math.PI*2;Ni(n,.6,.45,Math.cos(o)*5.1,.75,Math.sin(o)*5.1,-o+Math.PI/2,4)}C(new De(2.6,.9,24,64),y.white,0,3,0,n,Math.PI/2,0,0);for(let r=0;r<16;r++){let o=r/16*Math.PI*2,a=C(new De(1,.12,8,24),y.dark,Math.cos(o)*2.6,3,Math.sin(o)*2.6,n);a.rotation.y=-o}let t=C(new ze(1.2,32,24),y.cyan,0,3,0,n);t.castShadow=!1;let i=C(new De(3.9,.12,10,64),y.chrome,0,3,0,n),s=C(new De(3.9,.12,10,64),y.chrome,0,3,0,n);s.rotation.x=Math.PI/2;for(let r=0;r<6;r++){let o=r*Math.PI/3;Pt(ie(Math.cos(o)*4.6,1.5,Math.sin(o)*4.6),ie(Math.cos(o)*3.2,3,Math.sin(o)*3.2),.18,y.metal,n)}for(let r=0;r<4;r++){let o=r*Math.PI/2+Math.PI/4;C(kt([[0,0],[.7,0],[.75,.1],[.75,4.2],[.6,4.5],[0,4.5]],24),y.white,Math.cos(o)*4.4,1.5,Math.sin(o)*4.4,n)}e.core=t,e.r1=i,e.r2=s,e.light=ve(3401471,7,n,0,3,0)},beacon(n,e){C(kt([[0,0],[7.4,0],[7.5,.1],[7.2,.5],[0,.5]],8),y.found,0,-.2,0,n,0,Math.PI/8,0).castShadow=!1,C(Re(7.6,7.9,4,8),y.found,0,-2.3,0,n,0,Math.PI/8,0).castShadow=!1,C(new nn(4.2,4.8,64),y.orange,0,.32,0,n,-Math.PI/2,0,0),C(new nn(5.6,5.75,64),y.white,0,.32,0,n,-Math.PI/2,0,0);let t=document.createElement("canvas");t.width=t.height=128;let i=t.getContext("2d");i.fillStyle="#e8e4dc",i.font="bold 110px sans-serif",i.textAlign="center",i.fillText("H",64,104);let s=new Zt(t);s.colorSpace=_t,C(new In(3,3),new pe({map:s,transparent:!0,roughness:.8}),0,.33,0,n,-Math.PI/2,0,0),e.lights=[];for(let a=0;a<8;a++){let l=a*Math.PI/4+Math.PI/8;C(Re(.15,.2,.15,12),y.dark,Math.cos(l)*6.6,.38,Math.sin(l)*6.6,n),e.lights.push(ve(16755251,1,n,Math.cos(l)*6.6,.55,Math.sin(l)*6.6))}let r=new ae;r.position.set(8.6,0,0),n.add(r);for(let[a,l]of[[-.35,-.35],[.35,-.35],[.35,.35],[-.35,.35]])Pt(ie(a*1.6,0,l*1.6),ie(a*.5,8.5,l*.5),.05,y.metal,r);for(let a=1;a<8.5;a+=1.1){let l=1.6-a/8.5*1.1;C(new De(l*.5,.025,4,4),y.metal,0,a,0,r,Math.PI/2,0,Math.PI/4)}C(new ze(.9,24,8,0,Math.PI*2,0,Math.PI/3),y.white,0,8.4,.4,r).rotation.set(-1,0,0),e.tip=ve(16724016,1.6,r,0,9.3,0),C(xe(1.2,1,.8,.08),y.dark,-9.6,.5,4.5,n),Da(n,-9.6,.6,4.92)}});Object.assign(ni,{lab(n,e){Un(n,4),C(Re(4.1,4.2,.4,40),y.panel,0,.2,0,n),C(Re(3.2,3.4,2.8,40),y.white,0,1.8,0,n),C(Re(3.25,3.25,.2,40),y.orange,0,3.1,0,n);for(let i=0;i<10;i++){let s=i/10*Math.PI*2,r=new ae;r.position.set(Math.cos(s)*3.32,2,Math.sin(s)*3.32),r.rotation.y=-s+Math.PI/2,n.add(r),C(xe(.9,.7,.1,.06),y.metal,0,0,0,r),C(xe(.78,.58,.08,.05),y.window,0,0,.04,r)}C(new ze(2.2,40,16,0,Math.PI*2,0,Math.PI/2),y.white,0,3.2,0,n),C(xe(.9,2.4,.2,.05),y.dark,0,4.4,1.5,n,-.9,0,0);let t=C(Re(.35,.45,2.6,20),y.metal,0,5.2,.9,n,-.7,0,0);C(new De(.37,.05,8,20),y.cyan,0,6.15,1.75,n,-.7+Math.PI/2,0,0),e.scope=t,C(Re(.05,.07,3,8),y.metal,-2.4,4.5,-1.2,n),e.tip=ve(8382207,1,n,-2.4,6.1,-1.2),C(xe(1.5,1,1,.08),y.dark,3.4,.7,-2,n),Ni(n,1,.6,3.4,.7,-1.48,0,5),C(xe(1.3,2.1,.15,.1),y.metal,0,1.25,3.38,n),C(xe(1.1,1.9,.1,.08),y.dark,0,1.2,3.44,n),e.light=ve(8382207,2,n,0,6.3,1.9)},trade(n,e){Un(n,4.8,!0),C(xe(9.6,.4,9.6,.1),y.found,0,.2,0,n),zi(n,9.6,.15,0,.42,4.82);let t=[y.orange,y.white,y.dark,y.red2],i=0;for(let[o,a,l]of[[-3.2,-2.6,2],[-3.2,-.2,1],[-3.2,2.2,2],[.2,-2.6,1],[.2,2.6,1]])for(let c=0;c<l;c++){let d=C(xe(2.2,1.1,2,.05),t[i++%t.length],o,.95+c*1.12,a,n);for(let u=0;u<5;u++)C(new Ke(.04,.9,2.02),y.metal,o-.8+u*.4,.95+c*1.12,a,n)}let s=new ae;s.position.set(3.2,.4,0),n.add(s);for(let[o,a]of[[-.4,-.4],[.4,-.4],[.4,.4],[-.4,.4]])Pt(ie(o,0,a),ie(o*.6,6,a*.6),.06,y.orange,s);for(let o=1;o<6;o+=1.2)C(new De(.42-o*.03,.03,4,4),y.orange,0,o,0,s,Math.PI/2,0,Math.PI/4);let r=new ae;r.position.y=6.1,s.add(r),C(xe(.6,.5,.6,.06),y.dark,0,0,0,r),C(xe(.25,.25,6,.04),y.orange,0,.2,-2,r),C(xe(.6,.6,.8,.05),y.dark,0,.1,1.2,r),Pt(ie(0,.1,-4.6),ie(0,-3,-4.6),.015,y.metal,r),C(xe(.5,.2,.5,.03),y.metal,0,-3.1,-4.6,r),e.jib=r,C(Re(.05,.05,2.4,6),y.metal,-4.2,1.6,4.2,n),e.tip=ve(6750105,1,n,-4.2,2.9,4.2)}});Object.assign(ni,{apartment(n,e){Un(n,4.4,!0);let t=Dr(91),[i,s]=Fl;C(xe(8.6,.6,8.6,.15),y.panel,0,.3,0,n);let r=(o,a,l,c,d)=>{C(xe(l,c,l,.25),d,o,.6+c/2,a,n);for(let u=2.2;u<c;u+=2.2)C(new Ke(l+.08,.12,l+.08),y.white,o,.6+u,a,n);for(let u of[-1,1])C(new Ke(.16,c,.16),y.metal,o+u*l/2,.6+c/2,a+l/2,n),C(new Ke(.16,c,.16),y.metal,o+u*l/2,.6+c/2,a-l/2,n)};r(-1.3,-1.2,4.6,17,i),r(2.1,2,3.6,11,s),C(xe(4,1.2,4,.3),y.white,-1.3,18.2,-1.2,n),C(xe(3,.9,3,.3),y.white,2.1,12.1,2,n),C(xe(2.6,1.1,1.4,.4),y.glass,.6,7.4,.6,n,0,Math.PI/4,0).castShadow=!1;for(let o of[6.9,7.9])C(xe(2.7,.1,1.5,.04),y.metal,.6,o,.6,n,0,Math.PI/4,0);for(let o=0;o<6;o++)C(new zn(.35+t()*.2,0),y.leaf2,1.4+t()*1.4,12.75,1.3+t()*1.4,n);oc(n,t,8,-2.8,.2,18.6,18.9,.6),C(Re(.08,.1,4,8),y.metal,-1.3,20.8,-1.2,n),e.tip=ve(16728128,1.4,n,-1.3,22.9,-1.2),C(xe(2.4,.15,1.6,.05),y.orange,-1.3,3.2,1.9,n);for(let o of[-2.3,-.3])C(Re(.05,.05,2.6,8),y.metal,o,1.9,2.6,n);ve(16767392,1.2,n,-1.3,3,2.2)},vfarm(n,e){Un(n,4),C(Re(4,4.2,.8,40),y.panel,0,.4,0,n);let t=C(Re(3.3,3.3,15,40,!0),y.glass,0,8.3,0,n);t.castShadow=!1;for(let s=0;s<8;s++){let r=s/8*Math.PI*2;C(new Ke(.14,15,.14),y.white,Math.cos(r)*3.32,8.3,Math.sin(r)*3.32,n)}let i=Dr(55);for(let s=0;s<6;s++){let r=1.4+s*2.4;C(Re(3.1,3.1,.18,40),y.white,0,r,0,n),C(new De(3.15,.06,6,40),y.metal,0,r+.1,0,n,Math.PI/2,0,0),C(Re(2.8,2.8,.12,40),y.soil,0,r+.15,0,n);for(let o=0;o<16;o++){let a=o/16*Math.PI*2+s;C(new zn(.22+i()*.12,0),o%2?y.leaf:y.leaf2,Math.cos(a)*(1.7+i()*.9),r+.4,Math.sin(a)*(1.7+i()*.9),n).castShadow=!1}C(new De(2,.04,6,32),y.growlight,0,r+2.1,0,n,Math.PI/2,0,0)}C(Re(.5,.5,15,16),y.metal,0,8.3,0,n),C(new ze(3.3,40,12,0,Math.PI*2,0,Math.PI/2),y.glass,0,15.8,0,n).castShadow=!1,C(new De(3.32,.1,8,40),y.orange,0,15.8,0,n,Math.PI/2,0,0),Ui([ie(3.4,1,1),ie(4.4,.6,1.4),ie(5.2,.3,2.2)],.1,y.metal,n),e.light=ve(16737996,8,n,0,8,0)},lifehub(n,e){Un(n,5.8),C(kt([[0,0],[6,0],[6.1,.2],[5.8,1.2],[0,1.2]],48),y.panel,0,0,0,n),C(new ze(4.4,48,20,0,Math.PI*2,0,Math.PI/2),y.white,0,1.2,0,n).scale.y=.75,C(new De(4.45,.18,10,48),y.orange,0,1.6,0,n,Math.PI/2,0,0);for(let i=0;i<8;i++){let s=i/8*Math.PI*2;Ni(n,1,.5,Math.cos(s)*5.9,.6,Math.sin(s)*5.9,-s+Math.PI/2,4)}for(let i=0;i<4;i++){let s=i*Math.PI/2+Math.PI/4,r=Math.cos(s)*5,o=Math.sin(s)*5;C(kt([[0,0],[.95,0],[1,.2],[1,4.4],[.8,4.8],[0,4.85]],28),y.white,r,.4,o,n),C(Re(1.02,1.02,.3,28,!0),y.cyan,r,3.6,o,n),dd(n,r*1.2,.4,o*1.2,4.2,-s-Math.PI/2,.4),Ui([ie(r*.8,2.6,o*.8),ie(r*.6,2.8,o*.6),ie(r*.45,2.4,o*.45)],.12,y.metal,n)}C(Re(1.6,1.8,.6,32),y.dark,0,4.4,0,n),C(new De(1.7,.08,6,32),y.metal,0,4.75,0,n,Math.PI/2,0,0);let t=new ae;t.position.y=4.8,n.add(t);for(let i=0;i<5;i++)C(xe(1.5,.05,.4,.02),y.metal,Math.cos(i*1.256)*.8,0,Math.sin(i*1.256)*.8,t,0,-i*1.256,.25);e.fan=t,e.light=ve(6741503,4,n,0,5.2,0)},plaza(n,e){Un(n,7.2),C(kt([[0,0],[7.3,0],[7.4,.1],[7.2,.4],[0,.4]],64),y.found,0,0,0,n);for(let s=2.5;s<7;s+=1.5)C(new De(s,.03,4,64),y.metal,0,.41,0,n,Math.PI/2,0,0);C(new nn(5.4,5.75,64),y.orange,0,.42,0,n,-Math.PI/2,0,0),C(kt([[0,0],[2.1,0],[2,.3],[1.5,.5],[1.4,1.3],[1.6,1.45],[0,1.45]],40),y.white,0,.4,0,n),C(new De(1.55,.06,8,40),y.cyan,0,1.85,0,n,Math.PI/2,0,0);for(let s=0;s<6;s++){let r=s*Math.PI/3+Math.PI/6,o=new ae;o.position.set(Math.cos(r)*5,.4,Math.sin(r)*5),o.rotation.y=-r+Math.PI/2,n.add(o),C(xe(2.2,.12,.6,.05),y.panel,0,.45,0,o),C(xe(2.2,.5,.1,.04),y.panel,0,.75,.28,o);for(let l of[-.9,.9])C(xe(.1,.45,.5,.03),y.metal,l,.22,0,o);let a=r+.52;C(kt([[0,0],[.18,0],[.12,.2],[.06,.3],[.05,3.4],[0,3.4]],12),y.metal,Math.cos(a)*6.6,.4,Math.sin(a)*6.6,n),C(new ze(.2,12,8),y.lamp,Math.cos(a)*6.6,3.95,Math.sin(a)*6.6,n),ve(16767392,1.1,n,Math.cos(a)*6.6,3.95,Math.sin(a)*6.6)}let t=C(new ze(1.5,40,24),new He({map:ni._earthTex?ni._earthTex():null,color:10479359,transparent:!0,opacity:.7,blending:Le,depthWrite:!1}),0,4,0,n);t.castShadow=!1;for(let s=0;s<2;s++){let r=C(new De(2+s*.3,.015,4,64),y.cyan,0,4,0,n,Math.PI/2+.3-s*.6,0,0);r.castShadow=!1}let i=ve(6736127,5,n,0,4,0);C(new Ge(1.1,1.5,2.2,32,1,!0),new He({color:8382207,transparent:!0,opacity:.1,blending:Le,depthWrite:!1,side:ut}),0,2.95,0,n).castShadow=!1,e.earth=t,e.halo=i},drones(n,e){Un(n,3.8,!0),C(xe(7.6,.5,7.6,.12),y.panel,0,.25,0,n),zi(n,7.6,.14,0,.42,3.81),zi(n,7.6,.14,0,.42,-3.81);for(let[s,r]of[[-1.9,-1.9],[1.9,-1.9],[-1.9,1.9],[1.9,1.9]]){C(Re(1.15,1.2,.12,32),y.dark,s,.56,r,n),C(new nn(.8,.95,32),y.orange,s,.63,r,n,-Math.PI/2,0,0);for(let o=0;o<4;o++){let a=o*Math.PI/2;C(Re(.06,.06,.06,8),y.lamp,s+Math.cos(a)*1.05,.64,r+Math.sin(a)*1.05,n)}}C(xe(1.4,4.2,1.4,.15),y.white,3,2.4,3,n),C(xe(1.6,.9,1.6,.15),y.glass,3,4.6,3,n).castShadow=!1,C(xe(1.7,.15,1.7,.05),y.orange,3,5.1,3,n),dd(n,3,.5,2.25,4,0,.4);let t=new ae;t.position.set(3,5.5,3),n.add(t);let i=C(new ze(.9,24,8,0,Math.PI*2,0,Math.PI/3),y.white,0,.2,0,t);i.rotation.x=Math.PI*.6,C(Re(.04,.04,.8,6),y.metal,0,.3,.25,t).rotation.x=1.1,e.dish=t,e.light=ve(8382207,1.2,n,3,6.3,3),C(xe(1.6,1,1,.08),y.dark,-3,1,3,n),Ni(n,1,.6,-3,1,3.51,0,5)},terraformer(n,e){Un(n,7),C(kt([[0,0],[7.4,0],[7.5,.3],[7,2],[5.5,2.4],[0,2.4]],6),y.panel,0,0,0,n),C(kt([[0,0],[4.4,0],[3.8,8],[3,16],[2.3,24],[1.6,28],[0,28.5]],6),y.white,0,2.4,0,n);for(let i of[6,14,22])C(new De(4.6-i*.11,.3,6,6),y.orange,0,2.4+i,0,n,Math.PI/2,0,Math.PI/6);for(let i=0;i<6;i++){let s=i*Math.PI/3;Pt(ie(Math.cos(s)*7,2,Math.sin(s)*7),ie(Math.cos(s)*3.5,14,Math.sin(s)*3.5),.35,y.metal,n)}for(let i=0;i<6;i++){let s=i*Math.PI/3+Math.PI/6;Ni(n,1.4,2.4,Math.cos(s)*4,5,Math.sin(s)*4,-s+Math.PI/2,8)}e.rings=[];for(let i=0;i<3;i++){let s=C(new De(6-i*1.2,.22,10,64),y.cyan,0,10+i*8,0,n);s.castShadow=!1,e.rings.push(s)}C(Re(1.2,1.6,2,24),y.dark,0,31.5,0,n);let t=C(new Ge(.6,1.4,400,16,1,!0),new He({color:6743807,transparent:!0,opacity:0,blending:Le,depthWrite:!1,side:ut}),0,232,0,n);t.castShadow=!1,t.receiveShadow=!1,e.beam=t,e.top=ve(6743807,9,n,0,32.5,0)},launch(n,e){Un(n,9,!0),C(xe(18.4,1.2,18.4,.2),y.found,0,.6,0,n),C(new nn(4.8,5.8,48),y.orange,0,1.22,0,n,-Math.PI/2,0,0),C(Re(3.6,3.6,.3,32),y.dark,0,1.3,0,n),zi(n,18.4,.2,0,1.25,9.21);let t=new ae;t.position.set(7.5,1.2,0),n.add(t);for(let[r,o]of[[-1.5,-1.5],[1.5,-1.5],[1.5,1.5],[-1.5,1.5]])Pt(ie(r,0,o),ie(r,34,o),.14,y.orange,t);for(let r=0;r<34;r+=2.5)for(let[o,a,l,c]of[[-1.5,-1.5,1.5,-1.5],[1.5,-1.5,1.5,1.5],[1.5,1.5,-1.5,1.5],[-1.5,1.5,-1.5,-1.5]])Pt(ie(o,r,a),ie(l,r+2.5,c),.04,y.metal,t),Pt(ie(o,r,a),ie(l,r,c),.05,y.metal,t);for(let r of[12,24])C(xe(4.2,.4,1,.06),y.dark,-3.2,r,0,t),Pt(ie(-1.5,r,0),ie(-5,r,0),.06,y.metal,t);let i=new ae;i.position.y=1.4,n.add(i),C(kt([[0,0],[2.6,.2],[2.8,2],[2.7,22],[2.4,25],[1.6,29],[.6,31.5],[0,32]],40),y.white,0,0,0,i);for(let r of[8,19])C(Re(2.79,2.79,1.2,40,!0),y.orange,0,r,0,i);for(let r of[4,12,16,23])C(new De(2.76,.04,6,40),y.metal,0,r,0,i,Math.PI/2,0,0);for(let r=0;r<4;r++)Lr(i,Math.cos(r*1.57)*2.62,25.5,Math.sin(r*1.57)*2.62,.3,Math.PI/2-r*1.57,0);for(let r=0;r<4;r++){let o=r*Math.PI/2,a=C(xe(.35,7,3.4,.1),y.panel,Math.cos(o)*3.1,3.5,Math.sin(o)*3.1,i);a.rotation.y=-o}for(let r=0;r<5;r++){let o=r*Math.PI*2/5;C(kt([[.4,0],[.6,-.3],[1,-1.4],[.9,-1.4],[.5,-.35]],20),y.metal,Math.cos(o)*1.4,.2,Math.sin(o)*1.4,i)}let s=new Z(new Wt(3,16,16,1,!0),y.flame);s.rotation.x=Math.PI,s.position.y=-8,s.visible=!1,i.add(s),e.ship=i,e.flame=s,e.tip=ve(16777215,3,i,0,32.5,0)},monument(n,e){Un(n,6);for(let s=0;s<3;s++)C(Re(6.2-s*1.2,6.4-s*1.2,.6,8),s%2?y.white:y.panel,0,.3+s*.6,0,n,0,Math.PI/8,0);let t=["\u706B\u661F","\u6728\u536B\u4E8C","\u5F00\u666E\u52D2"];for(let s=0;s<3;s++){let r=s*Math.PI*2/3,o=new ae;o.position.set(Math.cos(r)*1,1.8,Math.sin(r)*1),o.rotation.y=-r+Math.PI/2,n.add(o),C(new Ke(1.8,26,.5),y.white,0,13,0,o,0,0,0).geometry.translate(0,0,0);let a=document.createElement("canvas");a.width=128,a.height=512;let l=a.getContext("2d");l.fillStyle="#f0ebe2",l.fillRect(0,0,128,512),l.fillStyle="#b8862e",l.font="600 54px sans-serif",l.textAlign="center",[...t[s]].forEach((d,u)=>l.fillText(d,64,120+u*70));let c=new Zt(a);c.colorSpace=_t,C(new In(1.4,5.6),new pe({map:c,roughness:.6}),0,6,.26,o)}e.rings=[];let i=[16742954,6743807,10551104];for(let s=0;s<3;s++){let r=C(new De(3.6-s*.5,.12,10,64),new pe({color:1118481,emissive:i[s],emissiveIntensity:2}),0,16+s*4,0,n);r.castShadow=!1,e.rings.push(r)}C(new Ai(1,0),y.chrome,0,30,0,n),e.top=ve(16777215,8,n,0,30,0)}});function qv(){let n=new ae,e=Dr(5);C(kt([[0,1],[2.6,1.05],[3.25,1.25],[3.35,1.45],[3.2,1.6],[0,1.6]],48),y.ablative,0,0,0,n),C(kt([[3.05,1.6],[3,2.2],[2.75,3.4],[2.35,4.6],[1.95,5.6],[1.75,6],[0,6]],48),y.white,0,0,0,n),C(kt([[3.02,2.05],[3.04,2.35],[2.98,2.4]],48),y.orange,0,0,0,n),C(kt([[2,5.45],[2.02,5.6],[1.95,5.62]],48),y.orange,0,0,0,n),C(Re(1.6,1.75,.35,40),y.panel,0,6.15,0,n),C(new De(1.25,.12,10,40),y.metal,0,6.38,0,n,Math.PI/2,0,0),C(new ze(1.15,32,12,0,Math.PI*2,0,Math.PI/2),y.white,0,6.35,0,n).scale.y=.6,ud(n,1.45,6.34,16,.04);let t=Lr(n,0,4.55,2.33,.36,0,-.33);Lr(n,-.95,4.35,2.2,.26,-.42,-.33),Lr(n,.95,4.35,2.2,.26,.42,-.33);let i=new ae;i.position.set(2.82,2.75,0),i.rotation.set(0,Math.PI/2,.22),n.add(i),C(xe(1.25,1.75,.14,.12),y.metal,0,0,0,i),C(xe(1.05,1.55,.1,.1),y.panel,0,0,.06,i),C(xe(.1,.45,.08,.03),y.chrome,.38,-.05,.13,i),Lr(i,0,.45,.13,.15),zi(i,1.25,.1,0,-.92,.08);for(let d=0;d<6;d++)C(xe(.9,.06,.28,.02),y.metal,3.3+d*.2,1.75-d*.29,0,n);Pt(ie(3.2,1.9,-.48),ie(4.4,.1,-.48),.035,y.metal,n),Pt(ie(3.2,1.9,.48),ie(4.4,.1,.48),.035,y.metal,n);for(let d=0;d<4;d++){let u=d*Math.PI/2+Math.PI/4,f=new ae;f.position.set(Math.cos(u)*2.15,5,Math.sin(u)*2.15),f.rotation.y=-u,n.add(f),C(xe(.36,.36,.36,.05),y.dark,0,0,0,f);for(let[p,g]of[[.25,0],[-.25,0],[0,.25],[0,-.25]]){let x=C(new Wt(.07,.16,10,1,!0),y.metal,0,g,p,f);x.rotation.x=g?g>0?0:Math.PI:p>0?Math.PI/2:-Math.PI/2}}for(let d=0;d<4;d++){let u=d*Math.PI/2,f=C(kt([[.18,1.05],[.22,.85],[.42,.45],[.55,.2],[.5,.2],[.38,.45],[.15,.85]],24),y.dark,Math.cos(u)*1.2,0,Math.sin(u)*1.2,n);f.material=y.metal}C(Re(.7,.9,.5,24),y.dark,0,.8,0,n);for(let d=0;d<4;d++){let u=d*Math.PI/2+Math.PI/4,f=Math.cos(u),p=Math.sin(u),g=ie(f*2.7,2.1,p*2.7),x=ie(f*3.55,1,p*3.55),v=ie(f*4.1,.18,p*4.1);Pt(g,x,.11,y.white,n),C(new ze(.15,12,8),y.metal,x.x,x.y,x.z,n),Pt(x,v,.075,y.chrome,n),Pt(x.clone().lerp(v,.3),x.clone().lerp(v,.3).add(ie(0,.01,0)),.1,y.metal,n),Pt(ie(f*2.4,1.3,p*2.4),x.clone().lerp(v,.25),.05,y.metal,n),Pt(ie(f*2.6-p*.6,1.7,p*2.6+f*.6),x,.035,y.metal,n),Pt(ie(f*2.6+p*.6,1.7,p*2.6-f*.6),x,.035,y.metal,n),C(kt([[0,0],[.55,0],[.6,.06],[.35,.2],[.1,.22],[0,.22]],24),y.metal,v.x,0,v.z,n)}C(Re(.04,.05,1.8,8),y.metal,.6,7.1,-.4,n),C(new ze(.5,24,8,0,Math.PI*2,0,Math.PI/3.2),y.white,-.7,6.95,.3,n).rotation.set(-.8,.6,0),C(Re(.04,.04,.8,6),y.metal,-.7,6.55,.3,n),Ui([ie(-1.6,5.7,-1.4),ie(-2.3,4.3,-1.9),ie(-2.9,2.6,-2.1),ie(-3.05,1.7,-2.2)],.05,y.dark,n),Ui([ie(1.6,5.7,-1.4),ie(2.3,4.3,-1.9),ie(2.9,2.6,-2.05)],.04,y.orange,n),oc(n,e,14,-1.2,1.2,2.4,3.6,-2.95,Math.PI);let r=document.createElement("canvas");r.width=512,r.height=96;let o=r.getContext("2d");o.clearRect(0,0,512,96),o.fillStyle="#d4581c",o.font="bold 54px sans-serif",o.textAlign="center",o.fillText("\u65B9\u821F\u4E00\u53F7 \xB7 ARK-1",256,66);let a=new Zt(r);a.colorSpace=_t;let l=new Z(new In(3.4,.64),new pe({map:a,transparent:!0,roughness:.6}));l.position.set(0,3.2,-2.87),l.rotation.set(.32,Math.PI,0),n.add(l);let c=ve(6750105,1.4,n,.6,8.05,-.4);return{group:n,beacon:c,window:t}}var hd=new pe({color:2757906,roughness:.28,metalness:.7,flatShading:!0}),a0=new pe({color:2757906,roughness:.35,metalness:.7});function Yv(n,e,t){let i=new ae,s=new ae;i.add(s);let r=new pe({color:2230272,emissive:e.emissive,emissiveIntensity:1.6});C(new zn(.75,1),hd,0,1,.2,s).scale.set(1.05,.62,1),C(new zn(.85,1),hd,0,1.1,-.85,s).scale.set(.95,.7,1.25),C(new zn(.42,1),hd,0,.95,1,s).scale.set(1.1,.7,1);let c=Dr(Math.floor(Math.random()*1e6)+1);for(let u=0;u<9;u++){let f=C(new Ai(.22+c()*.15,0),e,(c()-.5)*.9,1.45+c()*.25,-1.1+c()*1.4,s,(c()-.5)*.8,c()*3,(c()-.5)*.8);f.scale.y=1.8+c()*1.4}for(let[u,f,p]of[[-.17,1.03,.05],[.17,1.03,.05],[-.1,1.12,.035],[.1,1.12,.035]])C(new ze(p,10,8),t,u,f,1.36,s);for(let u of[-1,1])C(new Wt(.06,.45,6),hd,u*.16,.78,1.42,s).rotation.set(Math.PI/2+.3,0,u*.35);let d=[];for(let u=0;u<6;u++){let f=u<3?-1:1,p=u%3-1,g=new ae;g.position.set(f*.62,1,p*.55+.1),s.add(g);let x=ie(0,0,0),v=ie(f*.75,.45,p*.15),m=ie(f*1.35,.1,p*.25),E=ie(f*1.55,-.98,p*.35);Pt(x,v,.08,a0,g,14),Pt(v,m,.065,a0,g,14),Pt(m,E,.045,a0,g,14);for(let w of[v,m])C(new ze(.09,8,6),r,w.x,w.y,w.z,g);C(new Wt(.05,.18,6),e,E.x,E.y-.05,E.z,g,Math.PI,0,0),g.userData.phase=u%2*Math.PI+p*.5,g.userData.side=f,d.push(g)}return i.scale.setScalar(n),{group:i,legs:d,inner:s}}function jv(){let n=new ae;C(kt([[0,.6],[1.9,.7],[2.5,1.2],[2.6,2],[2.2,4.5],[1.6,6.6],[.9,7.8],[0,8.2]],40),y.white,0,0,0,n),C(Re(2.62,2.62,.5,40,!0),y.orange,0,2.2,0,n),C(kt([[0,.3],[2.4,.35],[2.55,.65],[0,.7]],40),y.ablative,0,0,0,n);for(let i=0;i<5;i++)Lr(n,Math.cos(i*1.256)*2.1,4.4,Math.sin(i*1.256)*2.1,.22,Math.PI/2-i*1.256,-.25);for(let i=0;i<3;i++){let s=i*Math.PI*2/3,r=Math.cos(s),o=Math.sin(s);Pt(ie(r*2.2,2,o*2.2),ie(r*3.1,.1,o*3.1),.09,y.chrome,n),C(Re(.45,.5,.1,16),y.metal,r*3.1,.05,o*3.1,n);let a=C(xe(.18,2.4,1.4,.06),y.panel,r*2.55,1.9,o*2.55,n);a.rotation.y=-s}for(let i=0;i<3;i++){let s=i*Math.PI*2/3+1;C(kt([[.3,0],[.45,-.25],[.75,-.9],[.65,-.9],[.35,-.3]],20),y.metal,Math.cos(s)*.9,.35,Math.sin(s)*.9,n)}C(Re(.04,.04,1.2,6),y.metal,0,8.6,0,n),ve(16728128,.8,n,0,9.2,0);let e=new Z(new Wt(1.4,6,14,1,!0),y.flame);e.rotation.x=Math.PI,e.position.y=-2.6,n.add(e);let t=ve(16752704,9,n,0,-.5,0);return{group:n,flame:e,flameGlow:t}}Object.assign(ni,{lamp(n,e){C(Re(.55,.62,.3,8),y.found,0,.1,0,n,0,Math.PI/8,0).castShadow=!1,C(Re(.62,.62,2,8),y.found,0,-1.1,0,n,0,Math.PI/8,0).castShadow=!1,ud(n,.45,.28,6,.035),C(kt([[0,0],[.2,0],[.2,.08],[.13,.2],[.11,.6],[.075,3.6],[.06,4],[0,4]],16),y.metal,0,.25,0,n),C(Re(.135,.135,.5,16),y.hazard,0,.75,0,n),C(xe(.22,.32,.14,.03),y.dark,0,1.3,.14,n),e.led=ve(5635993,.18,n,.06,1.42,.22),Ui([ie(0,1.12,.18),ie(0,.6,.2),ie(0,.3,.32),ie(0,.22,.48)],.02,y.rubber,n,12),C(kt([[0,0],[.62,0],[.66,.05],[.55,.16],[.22,.26],[.08,.3],[0,.3]],32),y.white,0,4.18,0,n),C(new De(.5,.035,8,40),y.lamp,0,4.17,0,n,Math.PI/2,0,0).castShadow=!1;let t=C(new Ln(.42,32),y.lamp,0,4.15,0,n,Math.PI/2,0,0);t.castShadow=!1,C(new De(.64,.02,6,40),y.metal,0,4.2,0,n,Math.PI/2,0,0);let i=new ae;i.position.set(0,4.55,0),i.rotation.x=-.45,n.add(i),C(Re(.025,.025,.25,6),y.metal,0,-.1,0,i),C(xe(.7,.03,.45,.01),y.cell,0,.04,0,i),Pt(ie(.25,4.45,-.1),ie(.3,5.2,-.12),.008,y.metal,n,4),e.glow=ve(16767392,1.7,n,0,4.1,0)}});function Zv(){let n=new ae,e=new ae;e.position.y=.55,n.add(e),C(kt([[1.28,.3],[1.22,.55],[1.05,1.2],[.8,1.9],[.55,2.35],[.42,2.45],[0,2.47]],40),y.white,0,0,0,e),C(kt([[0,0],[.9,.06],[1.24,.2],[1.32,.3],[1.28,.36],[0,.36]],40),y.ablative,0,0,0,e),C(Re(1.18,1.23,.18,40),y.orange,0,.72,0,e);for(let[l,c]of[[.98,1.35],[.66,2.05]])C(new De(l,.015,4,48),y.dark,0,c,0,e,Math.PI/2,0,0);let t=1,i=Math.PI/2,s=new ae;s.position.set(0,1.35,0),e.add(s);let r=C(xe(.62,.72,.06,.08),y.panel,0,0,t-.06,s);r.rotation.x=-.36,Lr(e,.55,1.75,.6,.14,Math.PI/4.2,-.38),zi(s,.62,.06,0,-.42,t-.03+.12).rotation.x=-.36;for(let l=0;l<4;l++){let c=l*Math.PI/2+Math.PI/4,d=Math.cos(c),u=Math.sin(c),f=new ae;f.position.set(d*.98,1.55,u*.98),f.rotation.y=-c,e.add(f),C(xe(.22,.26,.16,.03),y.dark,.05,0,0,f);for(let[p,g]of[[.15,0],[.05,.14]])C(Re(.025,.045,.08,8),y.metal,p,g,0,f,0,0,-Math.PI/2)}C(Re(.3,.38,.2,24),y.panel,0,2.55,0,e),C(Re(.32,.32,.04,24),y.orange,0,2.66,0,e),Pt(ie(.18,2.6,.05),ie(.22,3.4,.08),.012,y.metal,e,4);for(let l=0;l<4;l++){let c=l*Math.PI/2,d=Math.cos(c),u=Math.sin(c);Pt(ie(d*1.05,1.05,u*1.05),ie(d*1.7,.04,u*1.7),.05,y.metal,n,8),Pt(ie(d*1.2,.62,u*1.2),ie(d*1.48,.38,u*1.48),.035,y.chrome,n,8),C(Re(.2,.24,.07,16),y.dark,d*1.72,.035,u*1.72,n)}let o=ve(6750105,1.1,e,.22,3.42,.08),a=new Z(new Wt(.85,4.5,20,1,!0),y.flame);return a.rotation.x=Math.PI,a.position.y=-1.7,n.add(a),{g:n,beacon:o,flame:a}}var hn=n=>()=>Fv(n)>=1,Hr=(n,e)=>({check:()=>h.stats.mined[n]>=e,prog:()=>`${Math.min(h.stats.mined[n],e)}/${e}`}),mo=n=>({text:`\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C${Yn[n].name}\u300D`,check:()=>h.cityLevel>=n,prog:()=>`\u4EBA\u53E3 ${h.colony.pop}/${Yn[n].pop}`}),pd=n=>({text:`\u4EBA\u53E3\u8FBE\u5230 ${n}`,check:()=>h.colony.pop>=n,prog:()=>`${h.colony.pop}/${n}`}),Kv={text:"\u53D1\u5C04\u6B96\u6C11\u8230",check:()=>!!h.launched,prog:()=>"\u9760\u8FD1\u53D1\u5C04\u53F0\u6309 E"},hT=[{title:"\u7B2C\u4E00\u7AE0 \xB7 \u7740\u9646",sub:"\u6D3B\u4E0B\u53BB",goals:[{text:"\u91C7\u96C6\u94C1\u77FF",...Hr("iron",10)},{text:"\u91C7\u96C6\u7845\u6676",...Hr("silicon",6)},{text:"\u91C7\u96C6\u6C34\u51B0",...Hr("ice",6)},{text:"\u5EFA\u9020\u592A\u9633\u80FD\u9635\u5217",check:hn("solar")},{text:"\u5EFA\u9020\u5236\u6C27\u7AD9",check:hn("oxygen")}],radio:[["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u7740\u9646\u6210\u529F\u3002\u5916\u90E8\u6C14\u538B 0.6 \u5343\u5E15\uFF0C\u6C14\u6E29\u96F6\u4E0B 63 \u6444\u6C0F\u5EA6\u3002\u6B22\u8FCE\u6765\u5230\u706B\u661F\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u65B9\u821F\u4E00\u53F7\uFF0C\u8FD9\u91CC\u662F\u5730\u7403\u8054\u5408\u6307\u6325\u4E2D\u5FC3\u3002\u542C\u5230\u8BF7\u56DE\u7B54\u2026\u2026\u5F88\u597D\u3002\u4F60\u662F\u7B2C\u4E00\u4E2A\u8E0F\u4E0A\u8FD9\u7247\u571F\u5730\u7684\u4EBA\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u7740\u9646\u8231\u53EA\u80FD\u5728\u5B83\u5468\u56F4\u5F88\u5C0F\u7684\u8303\u56F4\u5185\u7ED9\u4F60\u8865\u6C27\u3002\u6309\u4F4F\u5DE6\u952E\u7528\u91C7\u77FF\u6FC0\u5149\u91C7\u96C6\u94C1\u77FF\u3001\u7845\u6676\u548C\u6C34\u51B0\uFF0C\u7136\u540E\u6309 B \u5EFA\u8D77\u7B2C\u4E00\u5EA7\u5236\u6C27\u7AD9\u3002"]]},{title:"\u7B2C\u4E8C\u7AE0 \xB7 \u7B2C\u4E00\u4E2A\u5BB6",sub:"\u4E3A\u540E\u6765\u7684\u4EBA\u70B9\u4E00\u76CF\u706F",goals:[{text:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",check:hn("habitat")},{text:"\u5EFA\u9020\u6E29\u5BA4",check:hn("greenhouse")},{text:"\u5EFA\u9020\u6C34\u51B0\u63D0\u53D6\u5668",check:hn("extractor")},{text:"\u5EFA\u9020\u7740\u9646\u573A",check:hn("beacon")},{text:"\u8FCE\u63A5\u7B2C\u4E00\u6279\u79FB\u6C11",check:()=>h.stats.arrived>=1,prog:()=>h.colony.support>0?"\u7B49\u5F85\u98DE\u8239":"\u9700\u8981\u4F4F\u623F/\u6C27/\u6C34/\u98DF\u7269/\u7535"}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5236\u6C27\u7AD9\u8FD0\u8F6C\u6B63\u5E38\uFF01\u5B83\u5468\u56F4 14 \u7C73\u90FD\u80FD\u7ED9\u5B87\u822A\u670D\u8865\u6C27\uFF0C\u4F60\u53EF\u4EE5\u8D70\u5F97\u66F4\u8FDC\u4E86\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5730\u7403\u4E0A\u6709\u5341\u4E07\u4EBA\u62A5\u540D\u4E86\u79FB\u6C11\u8BA1\u5212\u3002\u5EFA\u597D\u7A79\u9876\u3001\u6E29\u5BA4\u3001\u6C34\u6E90\u548C\u7740\u9646\u573A\u2014\u2014\u7ED9\u4ED6\u4EEC\u4E00\u4E2A\u53EF\u4EE5\u56DE\u7684\u5BB6\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u63D0\u793A\uFF1A\u592A\u9633\u80FD\u5728\u591C\u95F4\u53EA\u5269\u56DB\u6210\u529F\u7387\u3002\u591A\u5EFA\u51E0\u5EA7\uFF0C\u6B96\u6C11\u5730\u624D\u4E0D\u4F1A\u5728\u591C\u91CC\u65AD\u7535\u3002"]]},{title:"\u7B2C\u4E09\u7AE0 \xB7 \u957F\u591C",sub:"\u5B88\u62A4\u6211\u4EEC\u7684\u4EBA",goals:[{text:"\u5EFA\u9020\u5236\u9020\u5DE5\u574A",check:hn("fabricator")},{text:"\u5236\u9020\u7B49\u79BB\u5B50\u6B65\u67AA",check:()=>!!h.upgrades.rifle},{text:"\u5EFA\u9020\u9632\u5FA1\u70AE\u5854",check:hn("turret")},{text:"\u51FB\u9000\u9508\u8680\u86DB",check:()=>h.stats.kills>=6,prog:()=>`${Math.min(h.stats.kills,6)}/6`}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u2026\u2026\u7B2C\u4E00\u6279\u79FB\u6C11\u5B89\u5168\u7740\u9646\u4E86\u3002\u6211\u8FD9\u8FB9\u7684\u63A7\u5236\u5BA4\u91CC\uFF0C\u6240\u6709\u4EBA\u90FD\u7AD9\u8D77\u6765\u9F13\u638C\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u5730\u8D28\u96F7\u8FBE\u5728\u591C\u95F4\u63A2\u6D4B\u5230\u5927\u91CF\u5730\u4E0B\u79FB\u52A8\u4FE1\u53F7\u3002\u5B83\u4EEC\u4F3C\u4E4E\u88AB\u6B96\u6C11\u5730\u7684\u70ED\u91CF\u5438\u5F15\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5EFA\u4E00\u5EA7\u5236\u9020\u5DE5\u574A\uFF0C\u9020\u6B66\u5668\uFF0C\u5EFA\u70AE\u5854\u3002\u5B88\u4F4F\u5927\u5BB6\u3002"]]},{title:"\u7B2C\u56DB\u7AE0 \xB7 \u624E\u6839",sub:"\u8BA9\u706F\u706B\u5F7B\u591C\u4E0D\u7184",goals:[{text:"\u6B96\u6C11\u5730\u4EBA\u53E3\u8FBE\u5230 12",check:()=>h.colony.pop>=12,prog:()=>`${h.colony.pop}/12`},{text:"\u91C7\u96C6\u949B\u77FF",...Hr("titanium",12)},{text:"\u5EFA\u9020\u805A\u53D8\u53CD\u5E94\u5806",check:hn("reactor")}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u4F60\u4EEC\u6491\u8FC7\u4E86\u957F\u591C\u3002\u73B0\u5728\uFF0C\u662F\u65F6\u5019\u8BA9\u6B96\u6C11\u5730\u771F\u6B63\u624E\u6839\u4E86\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5728\u8FDC\u65B9\u7684\u7D2B\u8272\u6676\u4F53\u77FF\u8109\u4E2D\u68C0\u6D4B\u5230\u9AD8\u7EAF\u5EA6\u949B\u3002\u6CE8\u610F\uFF1A\u90A3\u91CC\u6709\u4F53\u578B\u66F4\u5927\u7684\u9508\u8680\u86DB\u5B88\u536B\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u63D0\u793A\uFF1A\u5728\u5236\u9020\u5DE5\u574A\u53EF\u4EE5\u9020\u55B7\u6C14\u80CC\u5305\u548C\u5927\u5BB9\u91CF\u6C27\u6C14\u7F50\uFF0C\u9002\u5408\u957F\u9014\u52D8\u63A2\u3002"]]},{title:"\u7B2C\u4E94\u7AE0 \xB7 \u65B0\u5BB6\u56ED",sub:"\u6B64\u5FC3\u5B89\u5904\u662F\u543E\u4E61",goals:[{text:"\u5EFA\u9020\u5927\u6C14\u6539\u9020\u5854",check:hn("terraformer")},{text:"\u6B96\u6C11\u5730\u4EBA\u53E3\u8FBE\u5230 20",check:()=>h.colony.pop>=20,prog:()=>`${h.colony.pop}/20`},{text:"\u5B8C\u6210\u5927\u6C14\u6539\u9020",check:()=>h.terraform>=1&&h.ended&&!h.endingShown,prog:()=>`${Math.floor(h.terraform*100)}%`}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u805A\u53D8\u53CD\u5E94\u5806\u70B9\u706B\u6210\u529F\u3002\u6B96\u6C11\u5730\u7B2C\u4E00\u6B21\u5728\u591C\u91CC\u4E5F\u706F\u706B\u901A\u660E\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u6700\u540E\u4E00\u6B65\u4E86\u3002\u5927\u6C14\u6539\u9020\u5854\u2014\u2014\u5B83\u8981\u51E0\u5341\u5E74\u624D\u80FD\u5F7B\u5E95\u6539\u53D8\u706B\u661F\u3002\u4F46\u7B2C\u4E00\u573A\u96E8\uFF0C\u4E5F\u8BB8\u5C31\u5728\u660E\u5929\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u63D0\u793A\uFF1A\u57CE\u5E02\u7B49\u7EA7\u63D0\u5347\u540E\u9886\u5730\u4F1A\u6269\u5927\uFF0C\u5E76\u89E3\u9501\u516C\u5BD3\u5854\u3001\u5782\u76F4\u519C\u573A\u3001\u751F\u6001\u4E2D\u67A2\u3002"]]},{title:"\u7B2C\u516D\u7AE0 \xB7 \u661F\u8FB0\u5927\u6D77",sub:"\u4E0B\u4E00\u9897\u661F\u7403",goals:[mo(5),{text:"\u5EFA\u9020\u661F\u9645\u53D1\u5C04\u53F0",check:hn("launch")},Kv],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u706B\u661F\u5DF2\u7ECF\u662F\u5BB6\u4E86\u3002\u4F46\u4EBA\u7C7B\u7684\u6545\u4E8B\uFF0C\u4ECE\u6765\u4E0D\u6B62\u4E8E\u4E00\u4E2A\u5BB6\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u6728\u536B\u4E8C\xB7\u6B27\u7F57\u5DF4\uFF1A\u51B0\u58F3\u4E4B\u4E0B\u63A2\u6D4B\u5230\u6DB2\u6001\u6D77\u6D0B\u3002\u628A\u706B\u661F\u53D1\u5C55\u6210\u300C\u661F\u6E2F\u300D\uFF0C\u5C31\u80FD\u5EFA\u9020\u661F\u9645\u53D1\u5C04\u53F0\u3002"]]}],dT=[{title:"\u7B2C\u4E00\u7AE0 \xB7 \u51B0\u539F",sub:"\u5728\u6728\u661F\u7684\u6CE8\u89C6\u4E0B",goals:[{text:"\u91C7\u96C6\u6C34\u51B0",...Hr("ice",15)},{text:"\u91C7\u96C6\u94C1\u77FF",...Hr("iron",10)},{text:"\u5EFA\u9020\u5236\u6C27\u7AD9",check:hn("oxygen")},{text:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",check:hn("habitat")},{text:"\u5EFA\u9020\u7740\u9646\u573A",check:hn("beacon")}],radio:[["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u7740\u9646\u6210\u529F\u3002\u8868\u9762\u6E29\u5EA6\u96F6\u4E0B 160 \u6444\u6C0F\u5EA6\u3002\u91CD\u529B\u53EA\u6709\u5730\u7403\u7684\u4E03\u5206\u4E4B\u4E00\u3002"],["\u706B\u661F\u6B96\u6C11\u5730 \xB7 \u6797\u6653","\u4F60\u5230\u4E86\u5417\uFF1F\u6211\u4EEC\u5728\u706B\u661F\u4E0A\u770B\u5F97\u89C1\u6728\u661F\u7684\u5149\u70B9\u3002\u66FF\u6211\u4EEC\u770B\u4E00\u773C\u5B83\u7684\u5927\u7EA2\u6591\u5427\u3002"],["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u6CE8\u610F\uFF1A\u8FD9\u91CC\u79BB\u592A\u9633\u592A\u8FDC\uFF0C\u592A\u9633\u80FD\u6548\u7387\u53EA\u6709\u706B\u661F\u7684\u4E00\u534A\u3002\u6240\u6709\u6280\u672F\u5DF2\u4ECE\u706B\u661F\u540C\u6B65\u3002"]]},{title:"\u7B2C\u4E8C\u7AE0 \xB7 \u51B0\u4E0B\u4E4B\u57CE",sub:"\u6D77\u6D0B\u4E4B\u4E0A\u7684\u706F\u706B",goals:[pd(8),mo(2),{text:"\u5EFA\u9020\u805A\u53D8\u53CD\u5E94\u5806",check:hn("reactor")}],radio:[["\u5468\u9752\u79BE \xB7 \u6C34\u6587\u5B66\u5BB6","\u51B0\u5C42\u4E0B\u7684\u6D77\u6D0B\u6BD4\u5730\u7403\u6240\u6709\u6D77\u6D0B\u52A0\u8D77\u6765\u8FD8\u591A\u3002\u6709\u6C34\uFF0C\u5C31\u6709\u751F\u547D\u3002"],["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u51B0\u88C2\u7F1D\u91CC\u6709\u4E1C\u897F\u5728\u79FB\u52A8\u3002\u5B83\u4EEC\u548C\u706B\u661F\u7684\u9508\u8680\u86DB\u5F88\u50CF\u2026\u2026\u4F46\u662F\u84DD\u8272\u7684\u3002"]]},{title:"\u7B2C\u4E09\u7AE0 \xB7 \u6DF1\u6E0A\u4E4B\u5149",sub:"\u57CE\u5E02\u5728\u51B0\u539F\u4E0A\u751F\u957F",goals:[mo(3),pd(24),{text:"\u5EFA\u9020\u751F\u6001\u4E2D\u67A2",check:hn("lifehub")}],radio:[["Elena Petrova \xB7 \u5929\u6587\u5B66\u5BB6","\u4F60\u77E5\u9053\u5417\uFF1F\u4ECE\u8FD9\u91CC\u770B\uFF0C\u592A\u9633\u53EA\u662F\u4E00\u9897\u7279\u522B\u4EAE\u7684\u661F\u661F\u3002"]]},{title:"\u7B2C\u56DB\u7AE0 \xB7 \u4E0B\u4E00\u7AD9",sub:"\u4E00\u5343\u4E8C\u767E\u5149\u5E74",goals:[mo(4),{text:"\u5EFA\u9020\u661F\u9645\u53D1\u5C04\u53F0",check:hn("launch")},Kv],radio:[["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u5F00\u666E\u52D2-442b\uFF1A\u4F4D\u4E8E\u5B9C\u5C45\u5E26\u7684\u7C7B\u5730\u884C\u661F\uFF0C\u8DDD\u79BB\u4E00\u5343\u4E8C\u767E\u5149\u5E74\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u8FD9\u5C06\u662F\u4EBA\u7C7B\u7B2C\u4E00\u6B21\u79BB\u5F00\u592A\u9633\u7CFB\u3002\u6211\u8001\u4E86\uFF0C\u7B49\u4E0D\u5230\u4F60\u4EEC\u62B5\u8FBE\u7684\u90A3\u5929\u3002\u4F46\u6211\u4F1A\u4E00\u76F4\u770B\u7740\u661F\u7A7A\u3002"]]}],uT=[{title:"\u7B2C\u4E00\u7AE0 \xB7 \u53CC\u65E5\u4E4B\u4E0B",sub:"\u53E6\u4E00\u9897\u6052\u661F\u7684\u6668\u5149",goals:[{text:"\u91C7\u96C6\u94C1\u77FF",...Hr("iron",15)},{text:"\u91C7\u96C6\u7845\u6676",...Hr("silicon",10)},{text:"\u5EFA\u9020\u5236\u6C27\u7AD9",check:hn("oxygen")},{text:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",check:hn("habitat")},{text:"\u5EFA\u9020\u7740\u9646\u573A",check:hn("beacon")}],radio:[["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u51B7\u51BB\u4F11\u7720\u7ED3\u675F\u3002\u5F53\u524D\u65E5\u671F\uFF1A\u516C\u5143 2401 \u5E74\u3002\u6B22\u8FCE\u6765\u5230\u5F00\u666E\u52D2-442b\u3002"],["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u5927\u6C14\u542B\u6C27 14%\uFF0C\u8FD8\u4E0D\u591F\u547C\u5438\uFF0C\u4F46\u5DF2\u7ECF\u975E\u5E38\u63A5\u8FD1\u4E86\u3002\u8FD9\u91CC\u7684\u91CD\u529B\u6BD4\u5730\u7403\u7565\u5927\u3002"]]},{title:"\u7B2C\u4E8C\u7AE0 \xB7 \u5F02\u661F\u68EE\u6797",sub:"\u4F1A\u53D1\u5149\u7684\u6811",goals:[pd(10),mo(2),{text:"\u5EFA\u9020\u805A\u53D8\u53CD\u5E94\u5806",check:hn("reactor")}],radio:[["Aiko Sato \u7684\u540E\u4EE3 \xB7 \u751F\u7269\u5B66\u5BB6","\u90A3\u4E9B\u4F1E\u83C7\u6811\u5728\u591C\u91CC\u4F1A\u53D1\u5149\u3002\u6211\u7684\u66FE\u66FE\u7956\u6BCD\u4E00\u5B9A\u4F1A\u559C\u6B22\u8FD9\u91CC\u3002"],["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u68EE\u6797\u4E2D\u7684\u63A0\u98DF\u8005\u4F1A\u5728\u591C\u95F4\u51FA\u6CA1\u3002"]]},{title:"\u7B2C\u4E09\u7AE0 \xB7 \u6587\u660E",sub:"\u57CE\u5E02\u8FDE\u6210\u4E86\u661F\u6CB3",goals:[mo(4),pd(36),{text:"\u5EFA\u9020\u751F\u6001\u4E2D\u67A2",check:hn("lifehub")}],radio:[["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u6765\u81EA\u706B\u661F\u548C\u6B27\u7F57\u5DF4\u7684\u4FE1\u53F7\u5DF2\u7ECF\u62B5\u8FBE\u2014\u2014\u5B83\u4EEC\u5728\u4E00\u5343\u4E8C\u767E\u5E74\u524D\u53D1\u51FA\u3002\u4E24\u5EA7\u57CE\u5E02\u90FD\u8FD8\u4EAE\u7740\u3002"]]},{title:"\u7EC8\u7AE0 \xB7 \u661F\u9645\u6587\u660E",sub:"\u4E09\u9897\u661F\u7403\uFF0C\u4E00\u4E2A\u4EBA\u7C7B",goals:[mo(5),{text:"\u5EFA\u9020\u6587\u660E\u7EAA\u5FF5\u7891",check:hn("monument")}],radio:[["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u5EFA\u4E00\u5EA7\u7EAA\u5FF5\u7891\u5427\u3002\u732E\u7ED9\u7B2C\u4E00\u4E2A\u8E0F\u4E0A\u706B\u661F\u7684\u4EBA\u2014\u2014\u4E5F\u5C31\u662F\u4F60\u3002"]]}],ki=at==="europa"?dT:at==="kepler"?uT:hT,Jv=at==="mars"?2:1,Ua={rifle:{name:"\u7B49\u79BB\u5B50\u6B65\u67AA",icon:"rifle",cost:{iron:18,silicon:12},desc:"\u6309 2 \u5207\u6362\u3002\u6D88\u8017\u80FD\u91CF\u53D1\u5C04\u7B49\u79BB\u5B50\u5F39\u3002"},tank:{name:"\u5927\u5BB9\u91CF\u6C27\u6C14\u7F50",icon:"tank",cost:{iron:12,ice:10},desc:"\u5B87\u822A\u670D\u6C27\u6C14\u4E0A\u9650 100 \u2192 180\u3002"},rover:{name:"\u52A0\u538B\u6F2B\u6E38\u8F66",icon:"rover",cost:{iron:35,silicon:20,ice:5},desc:"\u5728\u5DE5\u574A\u65C1\u51FA\u5382\u3002\u6309 E \u4E0A\u8F66\uFF0CShift \u52A0\u901F\u3002\u8F66\u8231\u5185\u81EA\u52A8\u8865\u6C27\uFF0C\u8FD8\u80FD\u649E\u98DE\u9508\u8680\u86DB\u3002"},scanner:{name:"\u5730\u8D28\u626B\u63CF\u4EEA",icon:"scanner",cost:{iron:8,silicon:10},desc:"\u5C0F\u5730\u56FE\u8303\u56F4\u6269\u5927\uFF0C\u7F57\u76D8\u6807\u51FA\u6700\u8FD1\u7684\u949B\u77FF\u3002"},jetpack:{name:"\u55B7\u6C14\u80CC\u5305",icon:"jet",cost:{iron:20,silicon:15,titanium:4},desc:"\u7A7A\u4E2D\u6309\u4F4F\u7A7A\u683C\u98DE\u884C\uFF0C\u6D88\u8017\u80FD\u91CF\u3002"},overclock:{name:"\u6FC0\u5149\u8D85\u9891",icon:"bolt2",cost:{silicon:20,titanium:3},desc:"\u91C7\u77FF\u901F\u5EA6 \xD72\uFF0C\u6FC0\u5149\u4F24\u5BB3\u63D0\u5347\u3002"},armor:{name:"\u590D\u5408\u88C5\u7532",icon:"armor",cost:{iron:30,titanium:6},desc:"\u751F\u547D\u4E0A\u9650 150\uFF0C\u53D7\u5230\u4F24\u5BB3 -40%\u3002"},grenade:{name:"\u9707\u8361\u96F7",icon:"bomb",cost:{iron:16,silicon:10,titanium:2},desc:"\u6309 G \u6295\u63B7\uFF0C\u51B7\u5374 8 \u79D2\u3002\u843D\u5730\u5F39\u8DF3\u540E\u7206\u70B8\uFF0C\u51B2\u51FB\u6CE2\u91CD\u521B\u5E76\u51FB\u9000\u8303\u56F4\u5185\u7684\u9508\u8680\u86DB\u3002"},rifle2:{name:"\u805A\u7126\u7EBF\u5708",icon:"focus",cost:{silicon:18,titanium:6},need:"rifle",desc:"\u7B49\u79BB\u5B50\u6B65\u67AA\u4F24\u5BB3 +60%\u3002"}},h0=[],Ha=null,l0=0;function Lt(n,e){h0.push([n,e])}function Qv(){return Ha}var c0=0,po=200,qs="calm",fd=0,d0=!1;function $v(n){if(Ha&&(l0-=n,l0<=0&&(Ha=null)),!Ha&&h0.length&&(Ha=h0.shift(),l0=3.5+Ha[1].length*.11,G.play("radio")),c0-=n,c0<=0&&h.chapter<ki.length&&!ai()){c0=.5;let i=ki[h.chapter];h.goalDone=h.goalDone||{};let s=!0;i.goals.forEach((r,o)=>{let a=h.chapter+":"+o;r.check()&&!h.goalDone[a]&&(h.goalDone[a]=!0,G.play("objective"),h.events.emit("toast",`\u2713 ${r.text}`)),h.goalDone[a]||(s=!1)}),s&&h.chapter<ki.length-1&&ac(h.chapter+1)}h.buildings.find(i=>i.type==="terraformer"&&i.powered)&&h.terraform<1&&(h.terraform=Math.min(1,h.terraform+n/300*(Xt("atmo")?2:1)),h.terraform>=1&&!d0&&(d0=!0,h.events.emit("ending"))),h.raining=(h.terraform>=1||at==="kepler")&&Math.sin(h.time.t*Math.PI*4+h.time.day*1.7)>.45,he.storms&&h.time.day>=2&&h.terraform<.7&&(po-=n,qs==="calm"&&po<=0&&h.time.night<.5?(qs="warn",po=25,Lt("\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u6C99\u5C18\u66B4\u5C06\u5728 25 \u79D2\u540E\u62B5\u8FBE\u3002\u80FD\u89C1\u5EA6\u4F1A\u6025\u5267\u4E0B\u964D\uFF0C\u6C27\u6C14\u6D88\u8017\u52A0\u5FEB\u3002\u9760\u8FD1\u751F\u547D\u7EF4\u6301\u8BBE\u65BD\u3002")):qs==="warn"&&po<=0?(qs="storm",fd=70+Math.random()*40):qs==="storm"&&(fd-=n,fd<=0&&(qs="calm",po=360+Math.random()*300,Lt("\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u6C99\u5C18\u66B4\u5DF2\u8FC7\u5883\u3002"))));let t=qs==="storm"?1:0;h.storm+=(t-h.storm)*Math.min(1,n*.25),h.storm<.001&&(h.storm=0)}function ac(n,e=!1){h.chapter=n;let t=ki[n];e||(G.play("chapter"),h.events.emit("chapter",t),t.radio.forEach(i=>Lt(i[0],i[1])))}function ex(){return{phase:qs,t:po,left:fd}}function tx(n){n&&(qs=n.phase==="storm"?"calm":n.phase,po=n.t??200)}function nx(n){d0=n}var gd=[],rx=new Ge(.05,.11,2.6,8,1);rx.translate(0,-1.3,0);var fT=new He({color:12121343,transparent:!0,opacity:.95,blending:Le,depthWrite:!1}),pT=new He({color:16760944,transparent:!0,opacity:.95,blending:Le,depthWrite:!1}),mT={player:6743807,turret:16756800};function cc(n,e,t,i){let s=ve(mT[i],i==="player"?1.4:1.1,h.scene);s.position.copy(n);let r=new Z(rx,i==="player"?fT:pT);r.quaternion.setFromUnitVectors(new S(0,1,0),e),r.position.copy(n),r.frustumCulled=!1,h.scene.add(r),gd.push({pos:n.clone(),vel:e.clone().multiplyScalar(i==="player"?110:80),life:1.4,dmg:t,owner:i,s,bolt:r})}function gT(n,e=0){for(let t of h.enemies){if(t.dead)continue;let i=1.3*t.scale+e,s=n.x-t.pos.x,r=n.y-(t.pos.y+1*t.scale),o=n.z-t.pos.z;if(s*s+r*r+o*o<i*i)return t}return null}function ox(n){for(let e=gd.length-1;e>=0;e--){let t=gd[e];t.life-=n;let i=t.life<=0,s=3;for(let r=0;r<s&&!i;r++){t.pos.addScaledVector(t.vel,n/s);let o=gT(t.pos),a=t.owner==="player"?9365503:16756832;o?(xo(o,t.dmg,t.owner),oe.spark(t.pos,t.owner==="player"?[.5,.9,1]:[1,.7,.4],14,8),Gp(t.pos,a,1.2),i=!0):t.pos.y<de(t.pos.x,t.pos.z)&&(oe.spark(t.pos,[1,.7,.4],8,5),oe.dustPuff(t.pos,5,.8),Gp(t.pos,a,.8),i=!0)}t.s.position.copy(t.pos),t.bolt.position.copy(t.pos),Math.random()<.8&&oe.trail(t.pos,t.owner==="player"?[.3,.8,1]:[1,.6,.2],.6),i&&(h.scene.remove(t.s),h.scene.remove(t.bolt),gd.splice(e,1))}}function lc(n,e,t=!1,i=!1){let s=i?3.4:t?1.35:.85+Math.random()*.35,r=Yv(s,va.crystal,va.eye),o=de(n,e);r.group.position.set(n,o,e),h.scene.add(r.group);let a=i?1300+h.time.day*40:t?90:36+h.time.day*3,l={...r,pos:r.group.position,hp:a,maxHp:a,scale:s,guardian:t,home:t?new S(n,o,e):null,boss:i,stomp:4,awake:!t,speed:i?3.4:(t?5.2:4.4)+Math.random()*1.2,phase:Math.random()*6,atk:0,flash:0,sink:0,target:null,retarget:0};return h.enemies.push(l),l}function xo(n,e,t){n.dead||(n.hp-=e,n.flash=.12,n.awake=!0,t==="player"&&G.play("hit"),(t==="player"||t==="laser")&&h.events.emit("enemyHit",{kill:n.hp<=0}),n.hp<=0&&vT(n,t))}function vT(n,e){n.dead=!0;let t=n.pos.clone();if(t.y+=1,oe.burst(t,[1,.4,.1],40,9),oe.dustPuff(t,12,2),xs(t,n.boss?3.5:n.guardian?1.4:n.flyer?.55:.9,16738858),oe.debris(t,n.legs[0].children[0].material,6,5,.45*n.scale),oe.debris(t,n.inner.children[1].material,8,6,.5*n.scale),G.play("kill",n.pos),h.scene.remove(n.group),h.stats.kills++,n.guardian&&(h.stats.guardKills=(h.stats.guardKills||0)+1),n.boss){h.stats.bossKills=(h.stats.bossKills||0)+1,h.res.titanium+=40,h.res.silicon+=40,h.events.emit("pickup",{type:"titanium",n:40,note:"\u6676\u6BCD\u6838\u5FC3"}),h.events.emit("bossDown"),oe.burst(t,[1,.5,.15],200,20),oe.ring(new S(n.pos.x,n.pos.y,n.pos.z),4,120,[1,.5,.2]),oe.debris(t,n.inner.children[1].material,30,12,1.4),G.play("rumble");return}let i=n.guardian?3:Math.random()<.5?1:0;i&&(h.res.titanium+=i,h.stats.mined.titanium+=i,h.events.emit("pickup",{type:"titanium",n:i,note:"\u6676\u4F53\u6B8B\u9AB8"}))}var xT=new He({color:16752752,transparent:!0,opacity:.2,blending:Le,depthWrite:!1,side:ut}),yT=(()=>{let n=new Ln(.5,20);return n.scale(1.15,.32,1),n.rotateZ(-.18),n.translate(.56,-.05,0),n})(),ax=new Ai(.32,0);ax.scale(.8,.8,2);function g0(n,e,t){let s=new ae,r=new ae;r.position.y=1*.8,s.add(r);let o=new Z(new ze(.13,10,8),va.eye);o.position.z=.55,r.add(o);let a=new Z(ax,va.crystal);a.castShadow=!0,r.add(a);let l=new Z(new Wt(.08,.5,6),va.crystal);l.rotation.x=-Math.PI/2,l.position.z=-.8,r.add(l);let c=[];for(let p of[-1,1]){let g=new ae;g.position.set(p*.15,.12,.1),g.scale.x=p,r.add(g);let x=new Z(yT,xT);x.rotation.x=-Math.PI/2,g.add(x),c.push(g)}let d=ve(16734752,1.2,r,0,0,0);s.position.set(n,t,e),h.scene.add(s);let u=22+h.time.day*1.5,f={group:s,inner:r,legs:c,glowS:d,pos:s.position,hp:u,maxHp:u,scale:.8,flyer:!0,state:"orbit",st:2+Math.random()*4,ang:Math.random()*6.28,rad:13+Math.random()*8,alt:7+Math.random()*5,vel:new S,speed:9,phase:Math.random()*6,flash:0,sink:0,atk:0,retarget:0};return h.enemies.push(f),f}var u0=new S,go=new S;function MT(n,e,t,i,s){let r=de(n.pos.x,n.pos.z);if(n.st-=e,s&&(n.state="leave"),n.state==="orbit")n.ang+=e*.9,u0.set(t.x+Math.cos(n.ang)*n.rad,Math.max(r,de(t.x,t.z))+n.alt+Math.sin(i*2+n.phase)*1.2,t.z+Math.sin(n.ang)*n.rad),n.st<=0&&!h.player.dead&&(n.state="windup",n.st=.7,G.play("wasp",n.pos));else if(n.state==="windup")u0.copy(n.pos),n.vel.multiplyScalar(Math.pow(.02,e)),n.st<=0&&(n.state="dive",n.st=1.6,go.set(t.x,t.y+1.3,t.z).sub(n.pos).normalize(),n.vel.copy(go).multiplyScalar(28));else if(n.state==="dive"){go.set(t.x,t.y+1.3,t.z).sub(n.pos);let l=go.length();n.vel.lerp(go.multiplyScalar(28/Math.max(l,.01)),Math.min(1,e*.8)),l<1.6&&!h.player.dead&&(h.player.damage(7*Li().dmg,n.pos),n.state="retreat",n.st=1.4,n.vel.y=14),(n.st<=0||n.pos.y<r+.6)&&(n.state="retreat",n.st=1.2,n.vel.y=Math.abs(n.vel.y)+8)}else n.state==="retreat"?(n.vel.y+=e*6,n.st<=0&&(n.state="orbit",n.st=3+Math.random()*4,n.ang=Math.atan2(n.pos.z-t.z,n.pos.x-t.x))):n.state==="leave"&&(n.vel.y+=e*10,n.pos.y>r+120&&(h.scene.remove(n.group),n.dead=!0,n.gone=!0));n.state==="orbit"&&(go.copy(u0).sub(n.pos),n.vel.lerp(go.multiplyScalar(2.2),Math.min(1,e*2)),n.vel.length()>16&&n.vel.setLength(16)),n.pos.addScaledVector(n.vel,e),n.pos.y<r+.8&&(n.pos.y=r+.8),n.vel.lengthSq()>.5&&(n.group.rotation.y=Math.atan2(n.vel.x,n.vel.z),n.inner.rotation.x=-Math.atan2(n.vel.y,Math.hypot(n.vel.x,n.vel.z))*.7);let o=Math.sin(i*55+n.phase)*.7;n.legs[0].rotation.z=o,n.legs[1].rotation.z=o;let a=n.state==="windup"?1:n.state==="dive"?.7:.25;n.glowS.material.opacity=a*(.7+Math.random()*.3),n.glowS.scale.setScalar(.8+a*1.6),n.state==="dive"&&Math.random()<e*40&&oe.trail(n.pos.clone().setY(n.pos.y+.8),[1,.4,.15],.7),n.flash>0?(n.flash-=e,n.inner.scale.setScalar(1+n.flash*1.5)):n.inner.scale.setScalar(1)}var f0=0,vo=0,ix=!1,p0=5,md=-1,m0=40;function lx(){return h.enemies.find(n=>n.boss&&!n.dead)}function sx(){if(!h.buildings.length)return new S(0,0,0);let n=new S;for(let e of h.buildings)n.x+=e.x,n.z+=e.z;return n.multiplyScalar(1/h.buildings.length)}function cx(n){let e=h.player.pos,t=h.time.night>.6,i=(ai()?h.buildings.some(r=>r.type==="habitat")||h.time.day>=3:h.chapter>=Jv)&&h.terraform<1&&Li().foe>0;if(t&&!ix&&i){vo=Math.round(Math.min(3+(h.nightsSurvived||0)*2+Math.floor(h.colony.pop/4),26)*Li().foe);let r=(h.nightsSurvived||0)%4===3;r&&(vo=Math.min(Math.round(vo*1.8),40),md=25),h.nightsSurvived=(h.nightsSurvived||0)+1,h.events.emit(r?"tide":"nightfall",vo)}if(ix=t,md>0&&t&&(md-=n,md<=0)){let r=sx(),o=Math.random()*Math.PI*2,a=Tt.clamp(r.x+Math.cos(o)*130,-ke+180,ke-180),l=Tt.clamp(r.z+Math.sin(o)*130,-ke+180,ke-180),c=lc(a,l,!1,!0);c.sink=-6,oe.ring(new S(a,de(a,l),l),6,140),oe.dustPuff(new S(a,de(a,l),l),60,12),G.play("rumble"),h.events.emit("bossSpawn")}if(t&&i&&vo>0&&(f0-=n,f0<=0)){f0=3+Math.random()*5;let r=sx(),o=Math.min(vo,1+Math.floor(Math.random()*3)),a=Math.random()*Math.PI*2,l=110+Math.random()*50;for(let c=0;c<o;c++){let d=Tt.clamp(r.x+Math.cos(a)*l+(Math.random()-.5)*10,-ke+180,ke-180),u=Tt.clamp(r.z+Math.sin(a)*l+(Math.random()-.5)*10,-ke+180,ke-180),f=lc(d,u);f.sink=-2,oe.dustPuff(new S(d,de(d,u),u),14,3)}vo-=o}if(p0-=n,p0<=0){p0=30;for(let r of h.nodes){if(r.type!=="titanium"||Math.hypot(r.x-e.x,r.z-e.z)<90)continue;if(!h.enemies.some(a=>a.guardian&&!a.dead&&a.home.distanceTo(r.mesh.position)<25)&&h.terraform<1&&Li().foe>0){let a=Math.random()*6.28;lc(r.x+Math.cos(a)*6,r.z+Math.sin(a)*6,!0)}}}if(t&&i&&(h.nightsSurvived||0)>=2&&(m0-=n,m0<=0)){m0=(55+Math.random()*40)/Math.max(.5,Li().foe);let r=Math.min(2+Math.floor((h.nightsSurvived||0)/3),6),o=Math.random()*6.28,a=Tt.clamp(e.x+Math.cos(o)*70,-ke+150,ke-150),l=Tt.clamp(e.z+Math.sin(o)*70,-ke+150,ke-150);for(let c=0;c<r;c++)g0(a+(Math.random()-.5)*8,l+(Math.random()-.5)*8,de(a,l)+25+Math.random()*8);h.events.emit("toast","\u6676\u7FFC\u8702\u7FA4\u6B63\u5728\u903C\u8FD1")}let s=performance.now()*.001;for(let r=h.enemies.length-1;r>=0;r--){let o=h.enemies[r];if(o.dead){h.enemies.splice(r,1);continue}if(o.flyer){MT(o,n,e,s,h.time.night<.3||h.terraform>=1);continue}if(!o.guardian&&(h.time.night<.3||h.terraform>=1)){o.sink-=n*1.5,o.group.position.y=de(o.pos.x,o.pos.z)+o.sink,o.sink<-3&&(h.scene.remove(o.group),h.enemies.splice(r,1));continue}if(o.sink<0&&(o.sink=Math.min(0,o.sink+n*1.5)),o.kb){o.pos.x+=o.kb.x*n,o.pos.z+=o.kb.z*n;let m=Math.pow(.04,n);o.kb.x*=m,o.kb.z*=m,Math.abs(o.kb.x)+Math.abs(o.kb.z)<.2&&(o.kb=null)}if(o.stun>0){o.stun-=n,o.pos.y=de(o.pos.x,o.pos.z)+o.sink,o.group.rotation.z=Math.sin(s*30)*.08*Math.min(1,o.stun),Math.random()<n*8&&oe.spark(new S(o.pos.x,o.pos.y+1.4*o.scale,o.pos.z),[.6,.85,1],2,2,.4);continue}o.group.rotation.z=0;let a=Math.hypot(e.x-o.pos.x,e.z-o.pos.z);if(o.retarget-=n,o.retarget<=0)if(o.retarget=1,o.target=null,o.guardian)a<22&&(o.awake=!0),o.awake&&a<70&&!h.player.dead?o.target={kind:"player"}:(o.awake=!1,o.target={kind:"home"});else if(a<32&&!h.player.dead)o.target={kind:"player"};else{let m=null,E=400;for(let w of h.buildings){if(w.type==="lamp"||w.broken)continue;let M=Math.hypot(w.x-o.pos.x,w.z-o.pos.z)-w.def.r;M<E&&(E=M,m=w)}o.target=m?{kind:"building",b:m}:{kind:"player"}}let l=e.x,c=e.z,d=1.8*o.scale,u=o.target;if(u?.kind==="building"){if(!h.buildings.includes(u.b)||u.b.broken){o.retarget=0;continue}l=u.b.x,c=u.b.z,d=u.b.def.r*.9+1.4}else u?.kind==="home"&&(l=o.home.x,c=o.home.z,d=2);let f=l-o.pos.x,p=c-o.pos.z,g=Math.hypot(f,p),x=!1;if(g>d){f/=g,p/=g;for(let w of h.enemies){if(w===o)continue;let M=o.pos.x-w.pos.x,L=o.pos.z-w.pos.z,A=Math.hypot(M,L);A<2.5&&A>.01&&(f+=M/A*.6,p+=L/A*.6)}let m=Math.hypot(f,p)||1,E=o.speed*(o.target?.kind==="home"?.5:1);o.pos.x+=f/m*E*n,o.pos.z+=p/m*E*n;for(let w of h.colliders.query(o.pos.x,o.pos.z)){if(w.kind!=="building")continue;let M=o.pos.x-w.x,L=o.pos.z-w.z,A=Math.hypot(M,L),P=w.r+.8;A<P&&A>.01&&(o.pos.x=w.x+M/A*P,o.pos.z=w.z+L/A*P)}o.group.rotation.y=Math.atan2(f,p),x=!0}else u&&u.kind!=="home"&&(o.group.rotation.y=Math.atan2(f,p),o.atk-=n,o.atk<=0&&(o.atk=1,u.kind==="player"?h.player.damage((o.boss?30:o.guardian?14:9)*Li().dmg,o.pos):(u.b.hp-=o.boss?70:o.guardian?20:8,oe.spark(new S(o.pos.x,o.pos.y+1,o.pos.z),[1,.5,.2],8,5),u.b.hp<=0&&(u.b.hp=0,u.b.broken=!0,o.retarget=0,h.events.emit("broken",u.b),Ms())),o.inner.position.z=.6));if(o.boss){o.stomp-=n;let m=Math.hypot(e.x-o.pos.x,e.z-o.pos.z);o.stomp<=0&&m<22&&(o.stomp=4.5,oe.ring(new S(o.pos.x,o.pos.y,o.pos.z),3,100,[.9,.45,.25]),G.play("rumble"),h.player.landDip=Math.max(h.player.landDip,.35),m<13&&!h.driving&&(h.player.damage(18,o.pos),h.player.vel.y=4,h.player.vel.x+=(e.x-o.pos.x)/m*8,h.player.vel.z+=(e.z-o.pos.z)/m*8))}o.inner.position.z*=.85,o.pos.y=de(o.pos.x,o.pos.z)+o.sink;let v=s*(x?12:2)+o.phase;for(let m of o.legs)m.rotation.x=Math.sin(v+m.userData.phase)*(x?.5:.08),m.rotation.z=Math.max(0,Math.cos(v+m.userData.phase))*.25*m.userData.side*(x?1:0);o.inner.position.y=Math.abs(Math.sin(v))*.08,o.flash>0?(o.flash-=n,o.inner.scale.setScalar(1+o.flash*1.2)):o.inner.scale.setScalar(1),Math.random()<n*4&&oe.trail(new S(o.pos.x,o.pos.y+1.6*o.scale,o.pos.z),[1,.35,.1],.8)}}function yo(n,e,t){let i=null,s=t,r=new S;for(let o of h.enemies){if(o.dead)continue;let a=1.3*o.scale;r.set(o.pos.x-n.x,o.pos.y+1*o.scale-n.y,o.pos.z-n.z);let l=r.dot(e);if(l<0)continue;let c=r.lengthSq()-l*l;if(c>a*a)continue;let d=l-Math.sqrt(a*a-c);d<s&&(s=d,i=o)}return i?{e:i,dist:s}:null}var Me={keys:new Set,mouse:[!1,!1,!1],dx:0,dy:0,wheel:0,pressed:new Set,clicked:[!1,!1,!1],sens:.0022,down(n){return this.keys.has(n)},hit(n){return this.pressed.has(n)},endFrame(){this.pressed.clear(),this.dx=0,this.dy=0,this.wheel=0,this.clicked=[!1,!1,!1]}};function hx(n){window.addEventListener("keydown",e=>{e.code==="Tab"&&e.preventDefault(),Me.keys.has(e.code)||Me.pressed.add(e.code),Me.keys.add(e.code)}),window.addEventListener("keyup",e=>Me.keys.delete(e.code)),window.addEventListener("blur",()=>{Me.keys.clear(),Me.mouse=[!1,!1,!1]}),window.addEventListener("mousemove",e=>{h.locked&&(Me.dx+=e.movementX||0,Me.dy+=e.movementY||0)}),n.addEventListener("mousedown",e=>{h.locked&&(Me.mouse[e.button]=!0,Me.clicked[e.button]=!0)}),window.addEventListener("mouseup",e=>{Me.mouse[e.button]=!1}),window.addEventListener("wheel",e=>{h.locked&&(Me.wheel+=Math.sign(e.deltaY))},{passive:!0}),window.addEventListener("contextmenu",e=>e.preventDefault())}var ET=he.gravity,dx=1.7,bt=new S(-6,0,-6),vd=class{constructor(e){this.cam=e,this.pos=new S(0,0,6),this.pos.y=de(this.pos.x,this.pos.z),this.vel=new S,this.yaw=Math.PI*.85,this.pitch=-.05,this.onGround=!0,this.maxHealth=100,this.health=100,this.maxO2=100,this.o2=100,this.energy=100,this.bob=0,this.stepT=0,this.landDip=0,this.dead=!1,this.hurtT=0,this.flashlight=!1,this.inLife=!1,this.alarmT=0,this.lastHitDir=0,this.moving=!1,this.sprinting=!1,this.jetting=!1,this.roll=0,this.fwd=new S}get eye(){return new S(this.pos.x,this.pos.y+dx+this.bobY,this.pos.z)}damage(e,t){if(this.dead)return;let i=h.upgrades.armor?.6:1;this.health-=e*i,this.hurtT=.5,t&&(this.lastHitDir=Math.atan2(t.x-this.pos.x,t.z-this.pos.z)),G.play("hurt"),h.events.emit("hurt",e),this.health<=0&&this.die("\u4F60\u5012\u5728\u4E86\u706B\u661F\u7684\u5C18\u571F\u91CC")}die(e){this.dead||(this.dead=!0,this.health=0,h.events.emit("death",e))}respawn(){let e=h.buildings.find(i=>i.type==="habitat")||null,t=e?new S(e.x,0,e.z+9):bt.clone().add(new S(5,0,8));for(let i in h.res)h.res[i]=Math.floor(h.res[i]*.75);this.pos.set(t.x,de(t.x,t.z),t.z),this.vel.set(0,0,0),this.health=this.maxHealth,this.o2=this.maxO2,this.energy=100,this.dead=!1}update(e){if(this.maxO2=h.upgrades.tank?180:100,this.maxHealth=h.upgrades.armor?150:100,this.dead){this.cam.position.y-=e*.3;return}h.locked&&(this.yaw-=Me.dx*Me.sens,this.pitch=Tt.clamp(this.pitch-Me.dy*Me.sens,-1.5,1.5));let t=0,i=0;h.menuOpen||((Me.down("KeyW")||Me.down("ArrowUp"))&&(i-=1),(Me.down("KeyS")||Me.down("ArrowDown"))&&(i+=1),(Me.down("KeyA")||Me.down("ArrowLeft"))&&(t-=1),(Me.down("KeyD")||Me.down("ArrowRight"))&&(t+=1));let s=Math.hypot(t,i);this.moving=s>0,this.sprinting=this.moving&&Me.down("ShiftLeft")&&i<0&&this.o2>5;let r=this.sprinting?10.5:6.2,o=Math.sin(this.yaw),a=Math.cos(this.yaw),l=0,c=0;if(s){let M=t/s,L=i/s;l=M*a+L*o,c=-M*o+L*a}let d=this.onGround?12:2.5;if(this.vel.x+=(l*r-this.vel.x)*Math.min(1,d*e),this.vel.z+=(c*r-this.vel.z)*Math.min(1,d*e),this.jetting=!1,!h.menuOpen&&Me.hit("Space")&&this.onGround)this.vel.y=5.4,this.onGround=!1,G.play("jump");else if(!h.menuOpen&&Me.down("Space")&&!this.onGround&&h.upgrades.jetpack&&this.energy>1&&this.vel.y<6){this.vel.y+=15*e,this.energy-=22*e,this.jetting=!0,Math.random()<.5&&G.play("jet");let M=new S(this.pos.x+o*.4,this.pos.y+.8,this.pos.z+a*.4);oe.flame(M),oe.flame(M)}this.vel.y-=ET*e;let u=this.pos.x+this.vel.x*e,f=this.pos.z+this.vel.z*e;this.pos.x=Tt.clamp(u,-ke+120,ke-120),this.pos.z=Tt.clamp(f,-ke+120,ke-120),this.pos.y+=this.vel.y*e;for(let M of h.colliders.query(this.pos.x,this.pos.z)){let L=this.pos.x-M.x,A=this.pos.z-M.z,P=Math.hypot(L,A),I=M.r+.45;if(P<I&&P>1e-4){if(M.kind==="rock"&&this.pos.y>de(M.x,M.z)+M.r*.6)continue;this.pos.x=M.x+L/P*I,this.pos.z=M.z+A/P*I}}let p=de(this.pos.x,this.pos.z);this.pos.y<=p?(!this.onGround&&this.vel.y<-4&&(this.landDip=Math.min(.35,-this.vel.y*.04),G.play("land"),oe.dustPuff(this.pos,6,1)),this.pos.y=p,this.vel.y=0,this.onGround=!0):this.onGround&&this.pos.y-p<.5&&this.vel.y<=0?(this.pos.y=p,this.vel.y=0):this.onGround=!1;let g=Math.hypot(this.vel.x,this.vel.z);this.onGround&&g>.5&&(this.bob+=e*g*1.25,this.stepT+=e*g,this.stepT>2.6&&(this.stepT=0,G.play("step"),Math.random()<.4&&oe.dustPuff(this.pos,2,.4))),this.landDip*=Math.pow(.002,e),this.bobY=Math.sin(this.bob*2)*.05*Math.min(1,g/6)-this.landDip;let x=h.shake||0,v=performance.now()*.05;this.cam.position.set(this.pos.x+Math.sin(v*1.7)*x*.25,this.pos.y+dx+this.bobY+Math.sin(v*2.3)*x*.2,this.pos.z+Math.cos(v*1.3)*x*.25),this.roll+=(-t*.025-this.roll)*Math.min(1,e*6);let m=(h.baseFov||72)+(this.sprinting?8:0)+(this.jetting?4:0);Math.abs(this.cam.fov-m)>.05&&(this.cam.fov+=(m-this.cam.fov)*Math.min(1,e*5),this.cam.updateProjectionMatrix()),this.cam.rotation.set(this.pitch,this.yaw,this.roll+Math.sin(this.bob)*.006*Math.min(1,g/6),"YXZ"),this.cam.getWorldDirection(this.fwd);let E=Bv(this.pos),w=this.pos.distanceTo(bt)<11;if(this.inLife=!!E||w,this.inLife)this.o2=Math.min(this.maxO2,this.o2+30*e),this.health=Math.min(this.maxHealth,this.health+4*e);else{let M=.55+(this.sprinting?.6:0)+(this.jetting?.6:0);M*=(1+h.storm*.8)*Li().o2*(Xt("suit")?.65:1),h.terraform>=1&&(M*=.5),this.o2=Math.max(0,this.o2-M*e)}this.o2<=0&&(this.health-=9*e,this.health<=0&&this.die("\u6C27\u6C14\u8017\u5C3D")),this.o2<this.maxO2*.2&&!this.inLife&&(this.alarmT-=e,this.alarmT<=0&&(this.alarmT=2,G.play("alarm"))),this.jetting||(this.energy=Math.min(100,this.energy+(this.onGround?14:4)*e)),this.hurtT=Math.max(0,this.hurtT-e),this.health=Math.min(this.health,this.maxHealth)}};var hc=[],wT=new Ai(.09,0),ux={};function bT(n){let e=n.join();return ux[e]||(ux[e]=new pe({color:new re(...n),emissive:new re(...n),emissiveIntensity:1.6,roughness:.3,metalness:.2}))}var xd=0,v0=0;function fx(n,e){if(hc.length>40)return;let t=new Z(wT,bT(e));t.position.copy(n);let i=ve(new re(...e).getHex(),.5,t);h.scene.add(t);let s=new S((Math.random()-.5)*5,3+Math.random()*3,(Math.random()-.5)*5);hc.push({m:t,gl:i,v:s,t:0,color:e,spin:new S(Math.random()*10,Math.random()*10,Math.random()*10)})}var x0=new S;function px(n){v0-=n,v0<=0&&(xd=0);let e=h.player;for(let t=hc.length-1;t>=0;t--){let i=hc[t],s=i.m.position;if(i.t+=n,x0.set(e.pos.x,e.pos.y+1.1,e.pos.z),i.t<.22)i.v.y-=9*n;else{let r=x0.clone().sub(s),o=r.length(),a=6+(i.t-.22)*40;if(i.v.lerp(r.multiplyScalar(a/Math.max(o,.01)),Math.min(1,n*7)),o<.6||i.t>2.5){h.scene.remove(i.m),hc.splice(t,1),xd=Math.min(xd+1,14),v0=.6,G.tone(660*Math.pow(2,xd/12),.07,"sine",.035),Math.random()<.5&&oe.spark(x0.clone().addScaledVector(e.fwd||new S,.5),i.color,2,1.5,.25);continue}}s.addScaledVector(i.v,n),i.m.rotation.x+=i.spin.x*n,i.m.rotation.y+=i.spin.y*n}}var Nr=[{id:"laser",name:"\u91C7\u77FF\u6FC0\u5149",icon:"laser"},{id:"rifle",name:"\u7B49\u79BB\u5B50\u6B65\u67AA",icon:"rifle",need:"rifle"},{id:"build",name:"\u5EFA\u9020",icon:"build"}],un={index:0,get id(){return Nr[this.index].id}},$i,ST=0,Mo=null,E0,Ys,dc,Ur={},js,ws,Oa,ka,uc,mx=new S(.24,-.22,-.85);function xx(n){Ys=new as,dc=new fn(n.fov,n.aspect,.01,10),Ys.add(new xr(16769224,4202520,1.4));let e=new ls(16777215,1.5);e.position.set(1,2,1),Ys.add(e),Ys.userData.dl=e;let t=(M,L,A,P,I,_)=>{let b=new Z(M,L);return b.position.set(A,P,I),_.add(b),b},i=new ls(8965375,1.2);i.position.set(-2,1,2),Ys.add(i);let s=(M,L,A,P=20)=>{let I=new pi(M.map(([_,b])=>new $(_,b)),P);return I.rotateX(-Math.PI/2),t(I,L,0,0,0,A)},r=new pe({color:15262940,roughness:.35,metalness:.15}),o=new pe({color:2764083,roughness:.45,metalness:.7}),a=new pe({color:16742954,roughness:.4,metalness:.2});E0=new pe({color:3346688,emissive:16747056,emissiveIntensity:1.2});let l=new pe({color:8755,emissive:4515583,emissiveIntensity:1.5}),c=(M,L,A,P,I,_,b)=>{let H=t(new Ge(M,M,L,16),A,P,I,_,b);return H.rotation.x=Math.PI/2,H},d=new ae;s([[0,-.12],[.04,-.12],[.056,-.08],[.058,.18],[.05,.26],[.036,.3],[.03,.36],[0,.36]],r,d),c(.06,.02,a,0,0,-.02,d),c(.06,.012,a,0,0,.1,d),c(.045,.06,o,0,0,.1+.04,d);for(let M=0;M<3;M++){let L=t(new De(.034-M*.003,.007,8,20),E0,0,0,-.33-M*.035,d)}c(.018,.14,o,0,0,-.38,d);let u=t(new ze(.02,12,8),new He({color:16760960}),0,0,-.455,d);t(new Ke(.018,.016,.2),o,0,.062,-.05,d),c(.026,.17,a,.06,-.02,-.02,d),t(new Ke(.032,.07,.045),o,0,-.075,.02,d).rotation.x=.3,t(new Ke(.03,.02,.07),o,0,-.05,.02,d);let f=t(new In(.04,.025),new He({color:6743807}),-.0585,.012,.04,d);f.rotation.y=-Math.PI/2,d.userData.tip=u;let p=new ae;s([[0,-.2],[.04,-.2],[.055,-.15],[.055,.2],[.048,.28],[0,.28]],r,p),c(.035,.32,o,0,0,-.36,p);for(let M=0;M<4;M++)t(new De(.046,.009,8,20),l,0,0,-.27-M*.065,p);c(.05,.03,a,0,0,-.18,p),c(.022,.16,o,0,.075,-.02,p),t(new Ge(.023,.023,.005,12),l,0,.075,-.1,p).rotation.x=Math.PI/2,t(new Ke(.032,.07,.045),o,0,-.075,0,p).rotation.x=.3,t(new Ke(.035,.09,.05),l,0,-.08,-.06,p);let g=new ae;t(new Ke(.32,.22,.018),o,0,0,0,g),t(new Ke(.33,.012,.022),a,0,.112,0,g);let x=document.createElement("canvas");x.width=256,x.height=176;let v=x.getContext("2d");v.fillStyle="#06222e",v.fillRect(0,0,256,176),v.strokeStyle="rgba(127,230,255,.25)";for(let M=0;M<256;M+=16)v.beginPath(),v.moveTo(M,0),v.lineTo(M,176),v.stroke();for(let M=0;M<176;M+=16)v.beginPath(),v.moveTo(0,M),v.lineTo(256,M),v.stroke();v.strokeStyle="#7fe6ff",v.lineWidth=2,v.beginPath(),v.arc(128,110,50,Math.PI,0),v.lineTo(178,140),v.lineTo(78,140),v.closePath(),v.stroke(),v.fillStyle="#7fe6ff",v.font="bold 14px sans-serif",v.fillText("BLUEPRINT",12,22);let m=new Zt(x);m.colorSpace=_t;let E=t(new In(.29,.195),new He({map:m,transparent:!0,opacity:.95}),0,-.004,.01,g);g.userData.scr=E,g.rotation.set(-.5,.25,0),Ur={laser:d,rifle:p,build:g};for(let M in Ur)Ur[M].scale.setScalar(M==="build"?.45:.6),Ur[M].visible=!1,Ys.add(Ur[M]);let w=new Ge(1,1,1,16,24,!0);w.translate(0,.5,0),js=new Z(w,new He({color:16773328,transparent:!0,opacity:.95,blending:Le,depthWrite:!1})),ws=new Z(w,uv(16742960)),js.visible=ws.visible=!1,js.frustumCulled=ws.frustumCulled=!1,h.scene.add(js,ws),Oa=ve(16748608,1.6,h.scene),Oa.visible=!1,$i=new Ci(16747072,0,6,2),h.scene.add($i),uc=ve(6743807,.35,Ys),uc.visible=!1,ka=new ca(16773853,0,70,.42,.45,1.2),n.add(ka),ka.position.set(.3,-.2,0),ka.target.position.set(0,0,-10),n.add(ka.target),h.scene.add(n)}function yd(n){let e=Nr[n];if(e.need&&!h.upgrades[e.need]){h.events.emit("toast",`\u5C1A\u672A\u5236\u9020\uFF1A${e.name}\uFF08\u5728\u5236\u9020\u5DE5\u574A\u5236\u4F5C\uFF09`),G.play("deny");return}un.index===n&&e.id!=="build"||(un.index=n,G.play("ui"),e.id==="build"?h.events.emit("openBuild"):fo(null))}var Na=0,y0=0,za=0,M0=0,Md=0,gx=-1,_T=new S,TT=new S(0,1,0),Fa=new S;function vx(n,e,t){let i=null,s=t;for(let r of h.nodes){let o=r.mesh.scale.x,a=1.5*o+.3;Fa.set(r.x-n.x,r.y+.7*o-n.y,r.z-n.z);let l=Fa.dot(e);if(l<0||l>t+a)continue;let c=Fa.lengthSq()-l*l;if(c>a*a)continue;let d=l-Math.sqrt(a*a-c);d<s&&(s=Math.max(.3,d),i=r)}return i?{n:i,dist:s}:null}function RT(n,e,t){let i=null,s=t;for(let r of h.buildings){let o=Math.max(1.2,r.def.r);Fa.set(r.x-n.x,r.y+Math.min(o,3)*.6-n.y,r.z-n.z);let a=Fa.dot(e);if(a<0)continue;let l=Fa.lengthSq()-a*a;if(l>o*o)continue;let c=a-Math.sqrt(o*o-l);c<s&&(s=c,i=r)}return i}function yx(n,e,t){let i=un.id;gx!==un.index&&(Md=1,gx=un.index),Md=Math.max(0,Md-n*4);for(let x in Ur)Ur[x].visible=x===i;let s=Ur[i],r=Math.hypot(e.vel.x,e.vel.z),o=Math.sin(e.bob)*.012*Math.min(1,r/6),a=Math.abs(Math.cos(e.bob))*.012*Math.min(1,r/6);za*=Math.pow(1e-4,n);let l=i==="build"?[.2,-.24,-.6]:[.24,-.22,-.58];s.position.set(l[0]+o,l[1]+a-Md*.3-(e.sprinting?.04:0),l[2]+za*.08),s.rotation.x=(i==="build"?-.5:0)+za*.15+(e.sprinting?-.25:0),i==="build"&&(s.userData.scr.material.opacity=.6+Math.sin(performance.now()*.005)*.2),dc.aspect=t.aspect,dc.fov=t.fov,dc.updateProjectionMatrix();let c=.4+(1-h.time.night)*1.2;Ys.userData.dl.intensity=c,Me.hit("KeyF")&&!h.menuOpen&&(e.flashlight=!e.flashlight,G.play("ui")),ka.intensity=e.flashlight?60:0;let d=t.position,u=e.fwd;h.lookBuilding=h.menuOpen?null:RT(d,u,14);let f=h.menuOpen?null:vx(d,u,30);h.aimNode=i==="laser"&&!!f&&f.dist<9;let p=h.menuOpen||i==="build"?null:yo(d,u,i==="rifle"?140:40);if(p){let x=p.e;h.aimTarget={id:x,x:x.pos.x,y:x.pos.y+1*x.scale,z:x.pos.z,r:1.7*x.scale,name:x.boss?"\u6676\u6BCD":x.guardian?"\u949B\u77FF\u5B88\u536B":"\u9508\u8680\u86DB",tag:x.boss?"CRYSTAL MOTHER":"HOSTILE",dist:p.dist,bar:Math.max(0,x.hp/x.maxHp),kind:"enemy"}}else if(f&&i!=="build"){let x=f.n;h.aimTarget={id:x,x:x.x,y:x.y+.8*x.mesh.scale.x,z:x.z,r:1.7*x.mesh.scale.x+.3,name:rn[x.type].name,tag:{iron:"FE ORE",silicon:"SI CRYSTAL",ice:"H2O ICE",titanium:"TI ORE"}[x.type],dist:f.dist,bar:Math.max(0,x.amount/x.max),kind:"node",color:rn[x.type].color}}else h.aimTarget=null;if(!h.menuOpen&&!e.dead&&!h.photo){if(Me.hit("Digit1")&&yd(0),Me.hit("Digit2")&&yd(1),(Me.hit("Digit3")||Me.hit("KeyB"))&&yd(2),Me.wheel&&un.id!=="build"){let x=un.index;for(let v=0;v<2&&(x=(x+(Me.wheel>0?1:2))%2,!(!Nr[x].need||h.upgrades[Nr[x].need]));v++);x!==un.index&&yd(x)}un.id==="build"&&It.type&&Me.wheel&&(It.rot+=Me.wheel*.3)}js.visible=ws.visible=Oa.visible=!1,ST-=n,$i.intensity=Math.max(0,$i.intensity-n*120),Mo&&(Mo.mesh.position.set(Mo.x,Mo.y,Mo.z),Mo=null),uc.visible=!1,y0-=n;let g=Me.mouse[0]&&!h.menuOpen&&!e.dead&&h.locked;if(E0.emissiveIntensity=i==="laser"&&g?3+Math.random()*1.5:1+Math.sin(performance.now()*.003)*.3,i==="laser")if(g){let v=vx(d,u,9),m=yo(d,u,9),E=Jh(d,u,9),w=9,M=null;E&&E.dist<w&&(w=E.dist,M="ground"),v&&v.dist<=w&&(w=v.dist,M="node"),m&&m.dist<w&&(w=m.dist,M="enemy");let L=_T.copy(d).addScaledVector(u,w),A=t.localToWorld(mx.clone()),P=L.clone().sub(A),I=P.length();P.normalize();let _=new mn().setFromUnitVectors(TT,P),b=1+Math.sin(performance.now()*.05)*.2;if(js.position.copy(A),js.quaternion.copy(_),js.scale.set(.012*b,I,.012*b),ws.position.copy(A),ws.quaternion.copy(_),ws.scale.set(.085*b,I,.085*b),ws.material.uniforms.uLen.value=I,Math.random()<.35&&oe.spark(L,[1,.75,.4],2,7,.5),js.visible=ws.visible=!0,Oa.position.copy(L),Oa.visible=!0,Oa.scale.setScalar(1.2+Math.random()*.8),za=Math.max(za,.15+Math.random()*.1),$i.position.copy(L).addScaledVector(u,-.6),$i.color.setRGB(1,.55,.25),$i.intensity=5+Math.random()*4,M==="node"){let H=v.n;for($i.color.setRGB(...vs[H.type]),Mo=H,H.mesh.position.set(H.x+(Math.random()-.5)*.07,H.y+(Math.random()-.5)*.05,H.z+(Math.random()-.5)*.07),Math.random()<.15&&oe.dustPuff(L,1,.4),Na+=n*3.2*(h.upgrades.overclock?2:1)*(Xt("laser2")?1.5:1)*Li().yield,Math.random()<.7&&oe.spark(L,vs[H.type],2,5,.4),M0-=n,M0<=0&&(M0=.09,G.play("mine"));Na>=1&&h.nodes.includes(H);)if(Na-=1,h.res[H.type]++,h.stats.mined[H.type]++,H.meteor&&(h.stats.meteorMined=(h.stats.meteorMined||0)+1),h.events.emit("pickup",{type:H.type,n:1}),fx(L.clone().addScaledVector(u,-.3),vs[H.type]),sd(H,1)){G.play("deplete"),Na=0;break}}else M==="enemy"?(xo(m.e,16*n*(h.upgrades.overclock?1.5:1),"laser"),Math.random()<.5&&oe.spark(L,[1,.5,.2],3,5)):M==="ground"&&(Math.random()<.3&&oe.spark(L,[1,.6,.3],1,3),Math.random()<.1&&oe.dustPuff(L,1,.3));G.laser(!0)}else G.laser(!1),Na=Math.min(Na,.9);else G.laser(!1);if(i==="rifle"&&g&&y0<=0)if(e.energy>=5){y0=.16,e.energy-=5,za=1;let x=t.localToWorld(mx.clone()),v=yo(d,u,200),m=Jh(d,u,200),E=200;m&&(E=m.dist),v&&v.dist<E&&(E=v.dist);let M=d.clone().addScaledVector(u,E).sub(x).normalize();cc(x,M,h.upgrades.rifle2?30:19,"player"),G.play("shoot"),uc.visible=!0,uc.position.set(.24,-.21,-.86),$i.position.copy(x),$i.color.setRGB(.4,.9,1),$i.intensity=12}else Me.clicked[0]&&(G.play("deny"),h.events.emit("toast","\u80FD\u91CF\u4E0D\u8DB3"));if(i==="build"){let x=!h.menuOpen&&It.type?Jh(d,u,40):null;if(Vv(x?x.point:null,e.pos),!h.menuOpen&&It.type&&(Me.hit("KeyR")&&(It.rot+=Math.PI/4),Me.clicked[0]))if(It.valid){let v=Wv();v&&h.events.emit("built",v)}else G.play("deny"),h.events.emit("toast",It.reason);Me.clicked[2]&&(fo(null),un.index=0,G.play("ui"))}}function Mx(n){h.player.dead||h.driving||h.photo||(n.autoClear=!1,n.clearDepth(),n.render(Ys,dc),n.autoClear=!0)}var Ba=[["\u6797\u6653","\u690D\u7269\u5B66\u5BB6","\u6211\u4ECE\u4E91\u5357\u5E26\u6765\u4E86\u4E00\u5305\u8336\u6811\u79CD\u5B50\u3002\u603B\u6709\u4E00\u5929\uFF0C\u706B\u661F\u4E0A\u4E5F\u80FD\u6CE1\u4E00\u58F6\u70ED\u8336\u3002"],["Amara Okafor","\u533B\u751F","\u5728\u5730\u7403\u4E0A\uFF0C\u6211\u6551\u8FC7\u5F88\u591A\u4EBA\u3002\u5728\u8FD9\u91CC\uFF0C\u6211\u60F3\u770B\u7740\u5B69\u5B50\u4EEC\u5E73\u5B89\u957F\u5927\u3002"],["\u9648\u9ED8","\u5DE5\u7A0B\u5E08","\u8FD9\u91CC\u7684\u6BCF\u4E00\u9897\u87BA\u4E1D\uFF0C\u90FD\u662F\u6211\u4EEC\u4EB2\u624B\u62E7\u4E0A\u53BB\u7684\u3002"],["Mateo Silva","\u5730\u8D28\u5B66\u5BB6","\u4F60\u770B\u89C1\u90A3\u4E9B\u5CA9\u5C42\u4E86\u5417\uFF1F\u5B83\u4EEC\u6BD4\u4EBA\u7C7B\u7684\u5386\u53F2\u8FD8\u8981\u53E4\u8001\u56DB\u5341\u4EBF\u5E74\u3002"],["\u82CF\u5FF5","\u6559\u5E08",'\u6211\u7684\u7B2C\u4E00\u5802\u8BFE\uFF0C\u5C31\u53EB"\u6211\u4EEC\u4E3A\u4EC0\u4E48\u6765\u5230\u706B\u661F"\u3002'],["Yuki Tanaka","\u98DE\u884C\u5458","\u4ECE\u8F68\u9053\u4E0A\u770B\uFF0C\u4F60\u4EEC\u7684\u706F\u5149\u50CF\u662F\u7EA2\u8272\u6C99\u6F20\u91CC\u7684\u4E00\u4E32\u73CD\u73E0\u3002"],["\u738B\u5927\u5C71","\u53A8\u5E08","\u6E29\u5BA4\u91CC\u7684\u7B2C\u4E00\u6279\u571F\u8C46\uFF0C\u6211\u505A\u4E86\u4E00\u9505\u571F\u8C46\u7096\u83DC\u3002\u5927\u5BB6\u90FD\u54ED\u4E86\u3002"],["Elena Petrova","\u5929\u6587\u5B66\u5BB6","\u665A\u4E0A\u62AC\u5934\uFF0C\u90A3\u9897\u6700\u4EAE\u7684\u84DD\u661F\uFF0C\u5C31\u662F\u5730\u7403\u3002"],["\u8D75\u5C0F\u96E8","\u5B66\u751F","\u6211\u5341\u516D\u5C81\u3002\u6211\u4F1A\u662F\u7B2C\u4E00\u4EE3\u5728\u706B\u661F\u957F\u5927\u7684\u4EBA\u3002"],["Kwame Mensah","\u7535\u5DE5","\u53EA\u8981\u706F\u8FD8\u4EAE\u7740\uFF0C\u8FD9\u91CC\u5C31\u662F\u5BB6\u3002"],["\u5468\u9752\u79BE","\u6C34\u6587\u5B66\u5BB6","\u51B0\u5C42\u4E0B\u9762\u6709\u6C34\u3002\u6709\u6C34\uFF0C\u5C31\u6709\u751F\u547D\u3002"],["Priya Sharma","\u7A0B\u5E8F\u5458","\u6211\u5199\u7684\u4EE3\u7801\u5728\u63A7\u5236\u5236\u6C27\u7AD9\u3002\u522B\u62C5\u5FC3\uFF0C\u6211\u6D4B\u8BD5\u8FC7\u4E09\u5343\u904D\u4E86\u3002"],["\u674E\u957F\u98CE","\u8001\u5175","\u6211\u5E74\u8F7B\u65F6\u5B88\u8FC7\u8FB9\u7586\u3002\u73B0\u5728\uFF0C\u6211\u5B88\u7740\u4EBA\u7C7B\u7684\u65B0\u8FB9\u7586\u3002"],["Sofia Rossi","\u5EFA\u7B51\u5E08","\u7A79\u9876\u7684\u5F27\u5EA6\uFF0C\u662F\u6211\u7167\u7740\u6545\u4E61\u6559\u5802\u7684\u5706\u9876\u753B\u7684\u3002"],["\u4F55\u5B89","\u62A4\u58EB","\u60F3\u5BB6\u7684\u65F6\u5019\uFF0C\u6211\u5C31\u53BB\u6E29\u5BA4\u91CC\u95FB\u95FB\u6CE5\u571F\u7684\u5473\u9053\u3002"],["Jonas Berg","\u673A\u68B0\u5E08","\u706B\u661F\u7684\u6C99\u5B50\u4F1A\u94BB\u8FDB\u4EFB\u4F55\u7F1D\u9699\u3002\u4F46\u6211\u4EEC\u6BD4\u6C99\u5B50\u66F4\u56FA\u6267\u3002"],["\u9A6C\u6674","\u8BB0\u8005","\u6211\u8981\u8BB0\u5F55\u4E0B\u8FD9\u4E00\u5207\u3002\u51E0\u767E\u5E74\u540E\u7684\u4EBA\u4F1A\u60F3\u77E5\u9053\uFF0C\u6700\u521D\u662F\u600E\u6837\u7684\u3002"],["Omar Haddad","\u519C\u5B66\u5BB6","\u6211\u7956\u7236\u5728\u6C99\u6F20\u91CC\u79CD\u51FA\u4E86\u6930\u67A3\u3002\u6211\u8981\u5728\u706B\u661F\u79CD\u51FA\u68EE\u6797\u3002"],["\u5434\u6850","\u753B\u5BB6","\u706B\u661F\u7684\u65E5\u843D\u662F\u84DD\u8272\u7684\u3002\u5730\u7403\u4E0A\u6CA1\u6709\u4EBA\u4F1A\u76F8\u4FE1\u3002"],["Grace Kim","\u5FC3\u7406\u533B\u751F","\u79BB\u5BB6\u5F88\u8FDC\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5F7C\u6B64\u5C31\u662F\u5BB6\u3002"],["\u90ED\u8FDC","\u7236\u4EB2","\u6211\u5973\u513F\u5728\u98DE\u8239\u4E0A\u51FA\u751F\u3002\u5979\u7684\u51FA\u751F\u8BC1\u660E\u4E0A\u5199\u7740\uFF1A\u51FA\u751F\u5730\uFF0C\u661F\u9645\u7A7A\u95F4\u3002"],["Lucas Moreau","\u97F3\u4E50\u5BB6","\u6211\u5E26\u4E86\u4E00\u628A\u5409\u4ED6\u3002\u4ECA\u665A\u7A79\u9876\u91CC\u6709\u97F3\u4E50\u4F1A\uFF0C\u4F60\u6765\u5417\uFF1F"],["\u94B1\u591A\u591A","\u4F1A\u8BA1","\u6211\u7B97\u8FC7\u4E86\uFF1A\u7167\u8FD9\u4E2A\u901F\u5EA6\uFF0C\u4E8C\u5341\u5E74\u540E\u8FD9\u91CC\u4F1A\u6709\u4E00\u5EA7\u57CE\u5E02\u3002"],["Aiko Sato","\u751F\u7269\u5B66\u5BB6","\u90A3\u4E9B\u9508\u8680\u86DB\u2026\u2026\u4E5F\u8BB8\u5B83\u4EEC\u53EA\u662F\u5728\u4FDD\u62A4\u81EA\u5DF1\u7684\u5BB6\u56ED\u3002"],["\u9093\u5353","\u77FF\u5DE5","\u949B\u77FF\u91CC\u85CF\u7740\u706B\u661F\u7684\u5FC3\u8DF3\u3002"],["Nadia Volkova","\u6C14\u8C61\u5B66\u5BB6","\u5927\u6C14\u6539\u9020\u5854\u542F\u52A8\u540E\uFF0C\u4E5F\u8BB8\u6211\u4EEC\u80FD\u770B\u89C1\u706B\u661F\u4E0A\u7684\u7B2C\u4E00\u7247\u4E91\u3002"],["\u9EC4\u4E00\u9E23","\u673A\u5668\u4EBA\u4E13\u5BB6","\u673A\u5668\u53EF\u4EE5\u66FF\u6211\u4EEC\u5E72\u6D3B\uFF0C\u4F46\u53EA\u6709\u4EBA\uFF0C\u624D\u80FD\u628A\u4E00\u4E2A\u5730\u65B9\u53D8\u6210\u5BB6\u3002"],["Samuel Okoro","\u7267\u5E08","\u65E0\u8BBA\u5728\u54EA\u9897\u661F\u7403\u4E0A\uFF0C\u6211\u4EEC\u90FD\u4F1A\u4E3A\u65B0\u751F\u7684\u5B69\u5B50\u795D\u798F\u3002"],["\u53F6\u77E5\u79CB","\u8BD7\u4EBA",'"\u6B64\u5FC3\u5B89\u5904\u662F\u543E\u4E61\u3002"\u2014\u2014\u82CF\u8F7C\u3002\u6211\u60F3\uFF0C\u4ED6\u8BF4\u5F97\u5BF9\u3002'],["Hannah Weber","\u7269\u7406\u5B66\u5BB6","\u805A\u53D8\u53CD\u5E94\u5806\u7684\u5149\uFF0C\u548C\u592A\u9633\u662F\u540C\u4E00\u79CD\u5149\u3002"],["\u5C0F\u6EE1","\u5B69\u5B50","\u53D4\u53D4\uFF0C\u5730\u7403\u662F\u4EC0\u4E48\u6837\u5B50\u7684\uFF1F"],["Diego Ram\xEDrez","\u767B\u5C71\u5BB6","\u5965\u6797\u5E15\u65AF\u5C71\u6709\u4E24\u4E07\u7C73\u9AD8\u3002\u603B\u6709\u4E00\u5929\u6211\u8981\u7AD9\u4E0A\u53BB\u3002"]],Ed=0;function Ex(n,e,t){let i=t?.idx??Ed++,s=Ba[i%Ba.length],r=T1(i);r.group.position.set(n,de(n,e),e),h.scene.add(r.group);let o={...r,idx:i,name:s[0]+(i>=Ba.length?` ${Math.floor(i/Ba.length)+1}\u4E16`:""),job:s[1],line:s[2],pos:r.group.position,target:null,wait:Math.random()*3,phase:Math.random()*6,talked:0};return h.colonists.push(o),o}function AT(n){let e=h.buildings.filter(o=>o.type!=="lamp");if(!e.length)return new S(n.pos.x+(Math.random()-.5)*10,0,n.pos.z+(Math.random()-.5)*10);let t=e;if(h.time.night>.5){let o=e.filter(l=>l.type==="plaza"&&l.powered);if(o.length&&Math.random()<.85){let l=o[n.idx%o.length],c=n.idx*2.399%(Math.PI*2),d=2.8+n.idx%3*.9;return n.atPlaza=l,new S(l.x+Math.cos(c)*d,0,l.z+Math.sin(c)*d)}let a=e.filter(l=>l.type==="habitat"||l.type==="apartment");a.length&&(t=a)}n.atPlaza=null;let i=t[Math.floor(Math.random()*t.length)],s=Math.random()*Math.PI*2,r=i.def.r+1.5+Math.random()*5;return new S(i.x+Math.cos(s)*r,0,i.z+Math.sin(s)*r)}var fc=null,w0=25;function CT(n,e){let t=jv();t.group.userData.shuttle=!0,t.group.position.set(n.x,n.y+260,n.z),h.scene.add(t.group),fc={...t,pad:n,n:e,t:0,phase:"descend"},G.play("rumble"),h.events.emit("shuttleIncoming",e)}function wx(n){let e=h.colony;if(h.popTotal=Math.max(h.popTotal||0,h.colonists.length),e.pop=h.popTotal,e.pop)for(h._work=(h._work||0)+n*e.pop*.04*(Xt("culture")?2:1)*$p();h._work>=1;){h._work-=1;let r=Math.random()<.55?"iron":Math.random()<.6?"silicon":"ice";h.res[r]++}let t=h.buildings.filter(r=>r.type==="beacon"&&r.powered),i=e.support-e.pop;!fc&&t.length&&i>0&&!h.ended&&(w0-=n,w0<=0&&(w0=Math.max(20,50/t.length)*(Xt("pr")?.55:1)/$p(),CT(t[Math.floor(Math.random()*t.length)],Math.min(i,4+(h.cityLevel||0)*2+(Xt("pr")?2:0))))),fc&&PT(n);let s=performance.now()*.001;for(let r of h.colonists){r.target||(r.wait-=n,r.wait<=0&&(r.target=AT(r)));let o=!1;if(r.target){let d=r.target.x-r.pos.x,u=r.target.z-r.pos.z,f=Math.hypot(d,u);if(f<.6)r.target=null,r.wait=3+Math.random()*8;else{r.pos.x+=d/f*1.7*n,r.pos.z+=u/f*1.7*n;for(let g of h.colliders.query(r.pos.x,r.pos.z)){if(g.kind!=="building")continue;let x=r.pos.x-g.x,v=r.pos.z-g.z,m=Math.hypot(x,v),E=g.r+.4;m<E&&m>.01&&(r.pos.x=g.x+x/m*E,r.pos.z=g.z+v/m*E)}r.group.rotation.y=Math.atan2(d,u),o=!0}}let a=Math.hypot(h.player.pos.x-r.pos.x,h.player.pos.z-r.pos.z);a<4&&!o?r.group.rotation.y=Math.atan2(h.player.pos.x-r.pos.x,h.player.pos.z-r.pos.z):!o&&r.atPlaza&&(r.group.rotation.y=Math.atan2(r.atPlaza.x-r.pos.x,r.atPlaza.z-r.pos.z),r.wait=Math.max(r.wait,2),h.time.night<.3&&(r.wait=0)),r.pos.y=de(r.pos.x,r.pos.z);let l=s*7+r.phase,c=o?Math.sin(l)*.6:0;r.legL.rotation.x=c,r.legR.rotation.x=-c,r.armL.rotation.x=-c*.8,r.armR.rotation.x=c*.8,!o&&a<4&&(r.armR.rotation.x=-2.6+Math.sin(s*6)*.3),r.body.position.y=.72+(o?Math.abs(Math.sin(l))*.04:0),r.talked=Math.max(0,r.talked-n)}}function PT(n){let e=fc;e.t+=n;let t=e.pad,i=e.group;if(e.phase==="descend"){let s=Math.min(1,e.t/11),r=1-Math.pow(1-s,3);i.position.y=t.y+.6+260*(1-r),e.flame.scale.set(1,.6+(1-r)*1.2+Math.random()*.2,1);for(let o=0;o<3;o++)oe.flame(i.position);s>.85&&Math.random()<.5&&oe.dustPuff(new S(t.x,t.y,t.z),4,10),s>=1&&(e.phase="landed",e.t=0,oe.ring(new S(t.x,t.y,t.z),3,80),e.flame.visible=!1,e.flameGlow.visible=!1)}else if(e.phase==="landed"){if(e.total=e.total||e.n,e.n>0&&e.t>2+(e.total-e.n)*.6){let s;h.colonists.length<40?(s=Ex(t.x+(Math.random()-.5)*2,t.z+3),s.target=new S(t.x+(Math.random()-.5)*20,0,t.z+10+Math.random()*8)):s={name:Ba[Ed++%Ba.length][0]},e.n--,e.arrived=(e.arrived||[]).concat([s]),h.popTotal=(h.popTotal||0)+1,h.stats.arrived++}e.n<=0&&e.t>7&&(e.phase="ascend",e.t=0,e.flame.visible=!0,e.flameGlow.visible=!0,G.play("rumble"),h.events.emit("colonistsArrived",e.arrived||[]))}else if(e.phase==="ascend"){i.position.y+=n*(5+e.t*12);for(let s=0;s<3;s++)oe.flame(i.position);e.t<1.5&&oe.dustPuff(new S(t.x,t.y,t.z),3,10),e.t>12&&(h.scene.remove(i),fc=null)}}var b0=new S;function bx(n,e){let t=null,i=6;for(let s of h.colonists){b0.set(s.pos.x-n.x,s.pos.y+1.1-n.y,s.pos.z-n.z);let r=b0.dot(e);r<0||r>i||b0.lengthSq()-r*r<.8*.8&&(i=r,t=s)}return t}function Sx(){return h.colonists.map(n=>[n.idx,+n.pos.x.toFixed(1),+n.pos.z.toFixed(1)])}function _x(n){for(let[e,t,i]of n)Ex(t,i,{idx:e});Ed=Math.max(Ed,...n.map(e=>e[0]+1),0)}var S0=8,wd=[],pc=0,IT=new zn(.16,1),LT=new De(.165,.025,6,20);function Tx(){return pc}function Rx(n,e){if(!h.upgrades.grenade)return!1;if(pc>0)return G.play("deny"),!1;pc=S0;let t=new ae,i=new Z(IT,y.dark);i.castShadow=!0,t.add(i);let s=new Z(LT,y.orange);s.rotation.x=Math.PI/2,t.add(s);let r=ve(16728112,.7,t,0,.12,0),o=new S(0,0,-1).applyQuaternion(n.quaternion),a=n.position.clone().addScaledVector(o,.6);a.y-=.2,t.position.copy(a),h.scene.add(t);let l=o.multiplyScalar(21);return l.y+=4.5,e.vel&&l.add(new S(e.vel.x,0,e.vel.z)),wd.push({g:t,led:r,vel:l,t:0,fuse:1.9,spin:new S(Math.random()*8,Math.random()*8,0)}),G.play("whoosh",a),h.stats.grenades=(h.stats.grenades||0)+1,!0}function DT(n){let e=n.g.position.clone();e.y+=.6,h.scene.remove(n.g),n.led.material.dispose(),xs(e,1.7,16752704),Ir(e,10476799,9,.8),oe.dustPuff(e,30,7);let t=9;for(let r of h.enemies){if(r.dead)continue;let o=r.pos.x-e.x,a=r.pos.z-e.z,l=Math.hypot(o,a);if(l>t*(r.boss?1.3:1))continue;let c=1-l/(t*(r.boss?1.3:1));if(xo(r,(r.boss?90:25)+55*c,"player"),!r.boss){let d=l||1;r.kb={x:o/d*16*c+.01,z:a/d*16*c},r.stun=1.1+c}}let i=h.player,s=i.pos.distanceTo(e);s<6&&!h.driving&&(i.landDip=Math.max(i.landDip,.3*(1-s/6)))}function Ax(n){pc=Math.max(0,pc-n);for(let e=wd.length-1;e>=0;e--){let t=wd[e],i=t.g.position;t.t+=n,t.vel.y-=11*n,i.addScaledVector(t.vel,n),t.g.rotation.x+=t.spin.x*n,t.g.rotation.y+=t.spin.y*n;let s=de(i.x,i.z)+.16;i.y<s&&(i.y=s,Math.abs(t.vel.y)>1.5&&(G.play("tick"),oe.dustPuff(i.clone(),3,.8)),t.vel.y=Math.abs(t.vel.y)*.35,t.vel.x*=.55,t.vel.z*=.55,t.spin.multiplyScalar(.6));let r=t.fuse-t.t;t.led.visible=Math.sin(t.t*(10+(1.9-r)*22))>0,Math.random()<n*30&&oe.trail(i.clone(),[1,.4,.2],.25);let o=r<=0;for(let a of h.enemies)if(!a.dead&&Math.hypot(a.pos.x-i.x,a.pos.z-i.z)<1.3*a.scale&&i.y<a.pos.y+2.5*a.scale){o=!0;break}o&&(wd.splice(e,1),DT(t))}}var HT={iron:'<path d="M12 2.5l8.2 4.75v9.5L12 21.5l-8.2-4.75v-9.5z"/><path d="M12 2.5v19M3.8 7.25l16.4 9.5M20.2 7.25L3.8 16.75" opacity=".35"/>',silicon:'<path d="M12 2l7 10-7 10-7-10z"/><path d="M5 12h14M12 2v20" opacity=".35"/>',ice:'<path d="M12 2v20M3.3 7l17.4 10M20.7 7L3.3 17"/><path d="M9.5 3.5L12 6l2.5-2.5M9.5 20.5L12 18l2.5 2.5"/>',titanium:'<path d="M12 2l2.6 7.4L22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6z"/>',power:'<path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H12z"/>',pop:'<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.6 2.7-6 6-6s6 2.4 6 6"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 14.4c3 .1 5.5 2.2 5.5 5.6"/>',house:'<path d="M3 20h18M5 20V10l7-6 7 6v10"/><path d="M10 20v-5h4v5"/>',o2:'<circle cx="9" cy="12" r="5.5"/><path d="M17 15.5c0-1.4 2.6-1.6 2.6-3 0-.9-.7-1.5-1.6-1.5S16.5 11.6 16.5 12.4M16.5 18.5h3.4"/>',food:'<path d="M12 21V9"/><path d="M12 13c-4 0-6-3-6-7 4 0 6 3 6 7zM12 11c0-4 2-7 6-7 0 4-2 7-6 7z"/>',water:'<path d="M12 2.5S5.5 10 5.5 14.5a6.5 6.5 0 0013 0C18.5 10 12 2.5 12 2.5z"/>',laser:'<path d="M3 15l7-7 3 3-7 7z"/><path d="M13 11l2-2M16 8l5-5M17.5 11.5l3 .5M12.5 6.5l-.5-3"/>',bomb:'<circle cx="11" cy="14" r="6.5"/><path d="M15.5 9.5l2-2M17 5l1.5-1.5M19 7h2M17.5 3V1"/>',rifle:'<path d="M2 10h15l3 2-3 2H9l-2 5H4l1-5H2z"/><path d="M12 10V7h3v3"/>',build:'<path d="M3 21h18M6 21V11h12v10M9 11V6h6v5"/><path d="M14 3l5 3" />',rover:'<path d="M3 15h18v-4l-3-4H8l-2 4H3z"/><circle cx="7" cy="17.5" r="2.2"/><circle cx="17" cy="17.5" r="2.2"/><path d="M10 7v4h8"/>',warn:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.01"/>',sun:'<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/>',moon:'<path d="M20 14.5A8.5 8.5 0 019.5 4a8.5 8.5 0 1010.5 10.5z"/>',meteor:'<circle cx="16" cy="16" r="4"/><path d="M13 13L3 3M15 11L8 4M11 15L4 8"/>',radio:'<path d="M5 9a9.5 9.5 0 0114 0M8 12a5 5 0 018 0"/><circle cx="12" cy="15.5" r="1.6"/><path d="M12 17v4"/>',check:'<path d="M4 12.5l5 5L20 6.5"/>',lock:'<rect x="5" y="10.5" width="14" height="10" rx="1"/><path d="M8 10.5V7a4 4 0 018 0v3.5"/>',ship:'<path d="M12 2c3 3 4 7 4 11v4H8v-4c0-4 1-8 4-11z"/><path d="M8 13l-3 4v3l3-2M16 13l3 4v3l-3-2M10 20l2 2 2-2"/>',colony:'<path d="M2 20h20"/><path d="M4 20v-5a4 4 0 018 0v5M13 20V7h7v13"/><path d="M15.5 10h2M15.5 13h2M15.5 16h2"/>',storm:'<path d="M3 8h12a3 3 0 10-3-3M3 12h16a3 3 0 11-3 3M3 16h8"/>',shield:'<path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/>',wrench:'<path d="M14.5 6.5a4 4 0 015.2 5.2L21 13l-8 8-1.3-1.3a4 4 0 01-5.2-5.2L3 11l3-3 3.5 3.5 2-2L8 6l3-3z" transform="scale(.9) translate(1.3 1.3)"/>',tank:'<rect x="7" y="5" width="10" height="16" rx="5"/><path d="M10 2h4v3h-4zM7 10h10"/>',scanner:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 12l6-6"/>',jet:'<path d="M8 3h8v11H8z"/><path d="M9 14l-1 4M15 14l1 4M10 18l2 4 2-4"/>',armor:'<path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/><path d="M8 10l4 2 4-2M12 12v6"/>',focus:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="2"/><path d="M12 1.5v5M12 17.5v5M1.5 12h5M17.5 12h5"/>',bolt2:'<path d="M7 2l-2 9h5l-2 11 9-13h-6l3-7z"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',planet:'<circle cx="12" cy="12" r="6.5"/><path d="M2.5 15.5c3 2 16 -4 19-9" />',trophy:'<path d="M7 3h10v5a5 5 0 01-10 0z"/><path d="M7 5H3c0 3 2 5 4 5M17 5h4c0 3-2 5-4 5M12 13v4M8 21h8M9 17h6"/>',book:'<path d="M4 4h6a2 2 0 012 2v14a2 2 0 00-2-2H4zM20 4h-6a2 2 0 00-2 2v14a2 2 0 012-2h6z"/>',camera:'<path d="M3 7h4l2-3h6l2 3h4v13H3z"/><circle cx="12" cy="13" r="4"/>',gear:'<circle cx="12" cy="12" r="3.2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',drone:'<rect x="9" y="10" width="6" height="4" rx="1"/><path d="M9 11L5 7M15 11l4-4M9 13l-4 4M15 13l4 4"/><circle cx="5" cy="7" r="2.2"/><circle cx="19" cy="7" r="2.2"/><circle cx="5" cy="17" r="2.2"/><circle cx="19" cy="17" r="2.2"/>',boss:'<path d="M12 2l3 6 6 1-4 5 1 7-6-3-6 3 1-7-4-5 6-1z"/><circle cx="12" cy="12" r="2"/>',key:'<circle cx="8" cy="15" r="4.5"/><path d="M11.5 12L20 3.5M17 6.5l2.5 2.5M15 8.5l2 2"/>',dome:'<path d="M3 19h18M4.5 19a7.5 7.5 0 0115 0"/><path d="M12 11.5V8M10 19v-3h4v3"/>',tower:'<path d="M6 21V5h6v16M12 21V10h6v11"/><path d="M8 8h2M8 11h2M8 14h2M14 13h2M14 16h2M3 21h18"/>',monument:'<path d="M10 21l1-16 1-2 1 2 1 16z"/><ellipse cx="12" cy="11" rx="6" ry="2"/><path d="M5 21h14"/>'};function Cx(){return`<svg xmlns="http://www.w3.org/2000/svg" style="display:none">${Object.entries(HT).map(([n,e])=>`<symbol id="i-${n}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${e}</symbol>`).join("")}</svg>`}var pt=(n,e="")=>`<svg class="ico ${e}" aria-hidden="true"><use href="#i-${n}"/></svg>`;var bd={};function Px(n){let e=n.filter(l=>!bd[l]);if(!e.length)return bd;let t=256,i=new aa({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});i.setSize(t,t),i.setPixelRatio(1),i.toneMapping=so,i.toneMappingExposure=1.15;let s=new as;s.add(new xr(14674175,3811876,1.4));let r=new ls(16773344,2.6);r.position.set(4,8,6),s.add(r);let o=new ls(8965375,1.4);o.position.set(-6,4,-6),s.add(o);let a=new fn(30,1,.1,500);for(let l of e){let c=new ae,d={};ni[l](c,d);let u=[];c.traverse(E=>{(E.userData.found||E===d.flame||E===d.beam)&&u.push(E)}),u.forEach(E=>E.parent.remove(E));let f=[];c.traverse(E=>{E.isSprite&&f.push([E,E.parent])}),f.forEach(([E,w])=>w.remove(E)),s.add(c);let p=new ji().setFromObject(c,!0),g=p.getSize(new S),x=p.getCenter(new S);f.forEach(([E,w])=>w.add(E));let m=Math.max(g.x,g.y,g.z)*.62/Math.tan(Tt.degToRad(15))*1.05;a.position.set(x.x+m*.62,x.y+m*.42,x.z+m*.66),a.lookAt(x),a.updateProjectionMatrix(),i.render(s,a),bd[l]=i.domElement.toDataURL("image/png"),s.remove(c)}return i.dispose(),i.forceContextLoss(),bd}var UT={mars:[{id:"zhurong",name:"\u795D\u878D\u53F7\u706B\u661F\u8F66",model:"rover",who:"\u6863\u6848 \xB7 \u795D\u878D\u53F7",text:"\u4E2D\u56FD\u706B\u661F\u8F66\u300C\u795D\u878D\u53F7\u300D\uFF0C2021 \u5E74\u7740\u9646\u5728\u4E4C\u6258\u90A6\u5E73\u539F\u2014\u2014\u5C31\u5728\u4F60\u811A\u4E0B\u8FD9\u7247\u571F\u5730\u3002\u5B83\u7684\u592A\u9633\u80FD\u677F\u4E0A\u79EF\u6EE1\u4E86\u516D\u5341\u591A\u5E74\u7684\u6C99\u5C18\u3002\u4EBA\u7C7B\u5728\u706B\u661F\u4E0A\u7684\u7B2C\u4E00\u884C\u8F66\u8F99\uFF0C\u5C31\u662F\u5B83\u7559\u4E0B\u7684\u3002"},{id:"opportunity",name:"\u673A\u9047\u53F7\u6B8B\u9AB8",model:"rover2",who:"\u6863\u6848 \xB7 \u673A\u9047\u53F7",text:"\u4E00\u5757\u5199\u7740\u300COpportunity\u300D\u7684\u6B8B\u7247\uFF0C\u4E0D\u77E5\u88AB\u54EA\u573A\u6C99\u5C18\u66B4\u5377\u5230\u4E86\u8FD9\u91CC\u3002\u5B83\u5728\u706B\u661F\u4E0A\u5DE5\u4F5C\u4E86\u5341\u4E94\u5E74\u3002\u5B83\u6700\u540E\u4F20\u56DE\u7684\u6570\u636E\uFF0C\u88AB\u4EBA\u4EEC\u7FFB\u8BD1\u6210\u4E00\u53E5\u8BDD\uFF1A\u300C\u6211\u7684\u7535\u91CF\u5F88\u4F4E\uFF0C\u5929\u5FEB\u9ED1\u4E86\u3002\u300D"},{id:"viking",name:"\u6D77\u76D7\u4E00\u53F7\u7740\u9646\u5668",model:"lander",who:"\u6863\u6848 \xB7 \u6D77\u76D7\u4E00\u53F7",text:"1976 \u5E74\uFF0C\u4EBA\u7C7B\u7B2C\u4E00\u4E2A\u5728\u706B\u661F\u6210\u529F\u7740\u9646\u5E76\u4F20\u56DE\u7167\u7247\u7684\u63A2\u6D4B\u5668\u3002\u7167\u7247\u4E0A\uFF0C\u5C31\u662F\u8FD9\u6837\u4E00\u7247\u7EA2\u8272\u7684\u3001\u5E03\u6EE1\u77F3\u5934\u7684\u5E73\u539F\u3002"},{id:"ingenuity",name:"\u673A\u667A\u53F7\u76F4\u5347\u673A",model:"heli",who:"\u6863\u6848 \xB7 \u673A\u667A\u53F7",text:"\u4E00\u67B6\u53EA\u6709 1.8 \u516C\u65A4\u7684\u5C0F\u76F4\u5347\u673A\u30022021 \u5E74\uFF0C\u5B83\u5B8C\u6210\u4E86\u4EBA\u7C7B\u5728\u5730\u7403\u4E4B\u5916\u7684\u7B2C\u4E00\u6B21\u52A8\u529B\u98DE\u884C\u3002\u65CB\u7FFC\u4E0A\u8FD8\u8D34\u7740\u4E00\u5C0F\u5757\u83B1\u7279\u5144\u5F1F\u98DE\u673A\u7684\u5E03\u6599\u3002"}],europa:[{id:"drill",name:"\u51B0\u5C42\u94BB\u63A2\u5668",model:"drill",who:"\u6863\u6848 \xB7 \u51B0\u7A7F\u8005\u53F7",text:"2041 \u5E74\u7684\u65E0\u4EBA\u94BB\u63A2\u5668\u300C\u51B0\u7A7F\u8005\u53F7\u300D\u3002\u5B83\u94BB\u5230\u4E86\u51B0\u4E0B\u4E09\u516C\u91CC\uFF0C\u5728\u6700\u540E\u4E00\u5E27\u753B\u9762\u91CC\uFF0C\u955C\u5934\u524D\u4F3C\u4E4E\u6709\u4EC0\u4E48\u4E1C\u897F\u5728\u53D1\u5149\u2026\u2026\u7136\u540E\u4FE1\u53F7\u4E2D\u65AD\u4E86\u3002"},{id:"hydro",name:"\u65E0\u4EBA\u6C34\u542C\u7AD9",model:"probe",who:"\u6863\u6848 \xB7 \u6C34\u542C\u7AD9",text:"\u4E00\u53F0\u8FD8\u5728\u8FD0\u8F6C\u7684\u6C34\u542C\u5668\u3002\u5B83\u5F55\u5230\u4E86\u51B0\u4E0B\u6D77\u6D0B\u91CC\u67D0\u79CD\u6709\u8282\u594F\u7684\u4F4E\u9891\u58F0\u97F3\uFF0C\u5468\u671F\u662F 17 \u5206\u949F\u3002\u6CA1\u6709\u4EBA\u77E5\u9053\u90A3\u662F\u4EC0\u4E48\u3002"},{id:"galileo",name:"\u523B\u5B57\u7684\u91D1\u5C5E\u7247",model:"plate",who:"\u6863\u6848 \xB7 \u65E0\u540D",text:"\u51B0\u91CC\u51BB\u7740\u4E00\u5757\u91D1\u5C5E\u7247\uFF0C\u4E0A\u9762\u523B\u7740\u4E00\u4E2A\u65E5\u671F\uFF1A1610 \u5E74 1 \u6708 7 \u65E5\u3002\u90A3\u662F\u4F3D\u5229\u7565\u7B2C\u4E00\u6B21\u770B\u89C1\u6728\u661F\u536B\u661F\u7684\u591C\u665A\u3002\u662F\u8C01\u628A\u5B83\u5E26\u5230\u8FD9\u91CC\u7684\uFF1F"}],kepler:[{id:"monolith",name:"\u6676\u4F53\u65B9\u7891",model:"monolith",who:"\u6863\u6848 \xB7 \u672A\u77E5",text:"\u8FD9\u4E0D\u662F\u4EBA\u7C7B\u9020\u7684\u3002\u65B9\u7891\u8868\u9762\u7684\u7EB9\u8DEF\u5728\u4F60\u9760\u8FD1\u65F6\u4E00\u5708\u5708\u4EAE\u8D77\uFF0C\u50CF\u662F\u5728\u8FA8\u8BA4\u4F60\u3002\u5B83\u7684\u5E74\u9F84\u5927\u7EA6\u662F\u56DB\u5343\u4E07\u5E74\u3002"},{id:"pathfinder",name:"\u65B9\u821F\u63A2\u8DEF\u5668",model:"probe",who:"\u6863\u6848 \xB7 \u63A2\u8DEF\u8005",text:"\u4E09\u767E\u5E74\u524D\u5148\u884C\u51FA\u53D1\u7684\u65E0\u4EBA\u63A2\u8DEF\u5668\u3002\u5B83\u7684\u6700\u540E\u4E00\u6761\u65E5\u5FD7\u5199\u7740\uFF1A\u300C\u5DF2\u627E\u5230\u9002\u5B9C\u7740\u9646\u70B9\u3002\u6211\u4F1A\u5728\u8FD9\u91CC\u7B49\u4F60\u4EEC\u3002\u300D\u5B83\u7B49\u4E86\u4E00\u767E\u4E00\u5341\u4E8C\u5E74\u3002"},{id:"fossil",name:"\u5DE8\u578B\u5316\u77F3",model:"fossil",who:"\u6863\u6848 \xB7 \u5316\u77F3",text:"\u4E00\u526F\u5DE8\u5927\u7684\u9AA8\u67B6\uFF0C\u5F27\u5F62\u7684\u808B\u9AA8\u50CF\u62F1\u95E8\u4E00\u6837\u7ACB\u5728\u5730\u4E0A\u3002\u751F\u524D\uFF0C\u5B83\u53EF\u80FD\u50CF\u90A3\u4E9B\u53D1\u5149\u7684\u6C34\u6BCD\u4E00\u6837\uFF0C\u6F02\u6D6E\u5728\u8FD9\u7247\u5929\u7A7A\u91CC\u3002"}]},Eo=[],Oi=new pe({color:8022620,roughness:.9,metalness:.3}),_0=new pe({color:13148240,roughness:.4,metalness:.8}),T0=new pe({color:15260872,roughness:.8,flatShading:!0}),NT=new pe({color:1314844,roughness:.15,metalness:.9,emissive:6308095,emissiveIntensity:.15});function Ot(n,e,t,i,s,r,o=0,a=0,l=0){let c=new Z(n,e);return c.position.set(t,i,s),c.rotation.set(o,a,l),c.castShadow=!0,c.receiveShadow=!0,r.add(c),c}var zT={rover(n){Ot(new Ke(1.6,.5,2.2),Oi,0,.9,0,n,0,0,.08);for(let e of[-1,1])Ot(new Ke(1.4,.05,1.6),y.solar,e*1.4,1.1,0,n,0,0,e*.25);Ot(new Ge(.05,.05,1.2,6),Oi,.4,1.7,-.7,n),Ot(new Ke(.3,.2,.25),Oi,.4,2.35,-.7,n,0,0,.3);for(let e of[-.9,0,.9])for(let t of[-1,1])Ot(new Ge(.28,.28,.22,10),y.dark,t*.95,.3,e,n,0,0,Math.PI/2)},rover2(n){Ot(new Ke(1.4,.45,1.8),Oi,0,.5,0,n,.25,.4,.4),Ot(new Ke(1.2,.05,1.1),y.solar,.9,.35,.3,n,.1,0,-.6),Ot(new Ge(.28,.28,.22,10),y.dark,-1.2,.25,.8,n,.4,0,1.2)},lander(n){Ot(new Ge(1,1.1,.6,6),_0,0,1,0,n);for(let e=0;e<3;e++){let t=e*Math.PI*2/3;Ot(new Ge(.06,.06,1.4,5),Oi,Math.cos(t)*1.1,.5,Math.sin(t)*1.1,n,Math.sin(t)*.4,0,-Math.cos(t)*.4)}Ot(new Ge(.6,.6,.05,16),y.white,0,1.6,.3,n,.6,0,0),Ot(new Ke(.2,.9,.2),Oi,-.5,1.7,-.3,n)},heli(n){Ot(new Ke(.25,.2,.25),_0,0,.45,0,n),Ot(new Ge(.02,.02,.5,4),Oi,0,.75,0,n),Ot(new Ke(1.2,.02,.08),Oi,0,.9,0,n,0,.5,0),Ot(new Ke(1.2,.02,.08),Oi,0,.98,0,n,0,-.4,0);for(let e=0;e<4;e++){let t=e*Math.PI/2+.6;Ot(new Ge(.015,.015,.5,4),Oi,Math.cos(t)*.2,.2,Math.sin(t)*.2,n,Math.sin(t)*.5,0,-Math.cos(t)*.5)}n.scale.setScalar(2.2)},drill(n){Ot(new Ge(.5,.7,1.4,8),Oi,0,.7,0,n),Ot(new Ge(.15,.15,4,8),y.metal,0,2.6,0,n,.15,0,0);for(let e=0;e<3;e++){let t=e*Math.PI*2/3;Ot(new Ke(.15,3,.15),Oi,Math.cos(t)*.9,1.4,Math.sin(t)*.9,n,Math.sin(t)*.25,0,-Math.cos(t)*.25)}},probe(n){Ot(new ze(.8,12,8),y.white,0,.9,0,n),Ot(new De(.85,.08,6,20),y.orange,0,.9,0,n,Math.PI/2,0,0),Ot(new Ge(.03,.03,1.6,4),y.metal,0,2.2,0,n),Ot(new Wt(.5,.3,12,1,!0),y.white,0,3,0,n,Math.PI,0,0)},plate(n){Ot(new Ke(1.2,.8,.06),_0,0,.5,0,n,-.5,0,.1),Ot(new Ri(.9,0),new pe({color:13627135,transparent:!0,opacity:.6,roughness:.05}),0,.4,0,n)},monolith(n){Ot(new Ke(1.4,7,.5),NT,0,3.5,0,n,0,0,.04),n.userData.rings=[];for(let e=0;e<3;e++){let t=Ot(new De(1.4+e*.4,.04,6,32),new He({color:9075455,transparent:!0,opacity:.6}),0,2+e*1.6,0,n,Math.PI/2,0,0);n.userData.rings.push(t)}},fossil(n){for(let e=0;e<9;e++){let t=Ot(new De(3-Math.abs(e-4)*.35,.18,6,16,Math.PI),T0,0,0,-6+e*1.5,n);t.rotation.y=0}Ot(new Ge(.25,.15,14,6),T0,0,3,0,n,Math.PI/2,0,0),Ot(new Ri(1.4,0),T0,0,2.6,-8,n)}};function Ix(){let n=ti(at.length*977+5),e=UT[at]||[];e.forEach((t,i)=>{let s=0,r=0;for(let l=0;l<200;l++){let c=i/e.length*Math.PI*2+n()*1.2,d=160+n()*220;if(s=Math.cos(c)*d,r=Math.sin(c)*d,Math.abs(s)<ke-180&&Math.abs(r)<ke-180&&ao(s,r,3)<.35&&!h.colliders.overlaps(s,r,6))break}let o=new ae;zT[t.model](o),o.position.set(s,de(s,r)-.15,r),o.rotation.y=n()*6.28;let a=ve(16765578,3,h.scene,s,de(s,r)+4,r);h.scene.add(o),h.colliders.add({x:s,z:r,r:t.model==="fossil"?3:1.4,kind:"relic"}),Eo.push({...t,x:s,z:r,g:o,beacon:a,found:(h.relicsFound||[]).includes(t.id)})})}function Lx(n){let e=null,t=1e9;for(let i of Eo){if(i.found)continue;let s=Math.hypot(i.x-n.x,i.z-n.z);s<t&&(t=s,e=i)}return e?{r:e,d:t}:null}function Dx(n){return Eo.find(e=>!e.found&&Math.hypot(e.x-n.x,e.z-n.z)<6)}function bs(){return{found:Eo.filter(n=>n.found).length,total:Eo.length}}function R0(){return Eo}function Hx(n){n.found=!0,h.relicsFound=[...new Set([...h.relicsFound||[],n.id])],Lt(n.who,n.text),h.res.titanium+=8,h.res.silicon+=15,h.events.emit("pickup",{type:"titanium",n:8,note:n.name}),h.events.emit("toast",`\u2713 \u53D1\u73B0\u9057\u8FF9\uFF1A${n.name}`),G.play("objective"),oe.burst(new S(n.x,de(n.x,n.z)+2,n.z),[1,.85,.5],60,8)}function Ux(n){let e=performance.now()*.001;for(let t of Eo)t.beacon.visible=!t.found,t.beacon.material.opacity=.5+Math.sin(e*2+t.x)*.3,t.g.userData.rings&&t.g.userData.rings.forEach((i,s)=>{i.rotation.z=e*(.3+s*.2),i.material.opacity=(t.found?.8:.3)+Math.sin(e*2+s)*.2})}var Sd=[],L0=new Wt(1,1,8,1,!0);L0.rotateX(Math.PI);L0.translate(0,-.5,0);var kT=new S(0,1,0),P0=0,A0=0,_d=0,I0=0,Nx=-1;function OT(){P0=45,I0=0,_d=6,Lt("\u65B9\u821F \xB7 AI","\u770B\u5929\u4E0A\u2014\u2014\u6D41\u661F\u96E8\uFF01\u6709\u51E0\u9897\u4F1A\u843D\u5230\u9644\u8FD1\u3002\u9668\u77F3\u91CC\u5BCC\u542B\u949B\uFF0C\u53BB\u5760\u843D\u70B9\u770B\u770B\u3002"),h.events.emit("toast","\u2604 \u6D41\u661F\u96E8")}function zx(n){let e=h.player.pos,t;if(n){for(let d=0;d<20;d++){let u=Math.random()*Math.PI*2,f=40+Math.random()*110,p=Tt.clamp(e.x+Math.cos(u)*f,-ke+180,ke-180),g=Tt.clamp(e.z+Math.sin(u)*f,-ke+180,ke-180);if(!h.buildings.some(x=>Math.hypot(x.x-p,x.z-g)<x.def.r+14)){t=new S(p,de(p,g),g);break}}if(!t)return}else{let d=Math.random()*Math.PI*2,u=150+Math.random()*350;t=new S(e.x+Math.cos(d)*u,e.y+110+Math.random()*140,e.z+Math.sin(d)*u)}let i=new S((Math.random()-.5)*1.2,-.55-Math.random()*.3,(Math.random()-.5)*1.2).normalize(),s=n?520:420,r=t.clone().addScaledVector(i,-s),o=ve(n?16756848:16769216,n?18:10,h.scene);o.material.fog=!1,o.position.copy(r);let a=new Z(L0,new He({color:n?16751184:16767144,transparent:!0,opacity:.75,blending:Le,depthWrite:!1,fog:!1})),l=n?90:70+Math.random()*70,c=n?2.2:1.3;a.scale.set(c,l,c),a.quaternion.setFromUnitVectors(kT,i),a.position.copy(r),h.scene.add(a),Sd.push({pos:r,vel:i.multiplyScalar(n?150:220),head:o,tail:a,impact:n,target:t,life:s/(n?150:220)})}function kx(n){GT(n),h.time.night>.7&&Nx!==h.time.day&&h.time.day>=2&&h.storm<.1&&!h.ended&&(Nx=h.time.day,Math.random()<.4&&OT()),P0>0&&(P0-=n,A0-=n,_d-=n,A0<=0&&(A0=.15+Math.random()*.35,zx(!1)),_d<=0&&I0<4&&(_d=7+Math.random()*5,I0++,zx(!0)));for(let t=Sd.length-1;t>=0;t--){let i=Sd[t];i.life-=n,i.pos.addScaledVector(i.vel,n),i.head.position.copy(i.pos),i.tail.position.copy(i.pos);for(let s=0;s<3;s++)oe.trail(i.pos.clone().addScaledVector(i.vel,-n*s/3),i.impact?[1,.6,.3]:[1,.85,.6],i.impact?1.2:.7);i.life<=0&&(h.scene.remove(i.head),h.scene.remove(i.tail),i.tail.material.dispose(),Sd.splice(t,1),i.impact&&FT(i.target))}}function FT(n){let e=n.clone();e.y+=1.5,oe.burst(e,[1,.55,.2],120,22),xs(e,2.6,16747072),oe.ring(n,2,90),oe.dustPuff(e,40,8),G.play("rumble",n);let t=n.distanceTo(h.player.pos);if(t<80&&(h.player.landDip=Math.max(h.player.landDip,.4*(1-t/80))),!h.colliders.overlaps(n.x,n.z,2.5)){let i=gs("titanium",n.x,n.z,10+Math.floor(Math.random()*8));i.meteor=!0}h.events.emit("toast",`\u2604 \u9668\u77F3\u5760\u843D\u5728 ${Math.round(t)} \u7C73\u5916`)}var Zs=[],C0=150;function BT(){return Zv()}function D0(n=!0){let e=h.player.pos,t=0,i=0;for(let a=0;a<30;a++){let l=Math.random()*Math.PI*2,c=50+Math.random()*130;if(t=Tt.clamp(e.x+Math.cos(l)*c,-ke+180,ke-180),i=Tt.clamp(e.z+Math.sin(l)*c,-ke+180,ke-180),!h.colliders.overlaps(t,i,4))break}let s=BT(),r=de(t,i);s.g.position.set(t,r+320,i),h.scene.add(s.g);let o={...s,x:t,z:i,y:r,t:0,landed:!1,life:300};return Zs.push(o),G.play("rumble"),h.events.emit("toast",`\u5730\u7403\u8865\u7ED9\u8231\u6B63\u5728\u964D\u843D \xB7 ${Math.round(Math.hypot(t-e.x,i-e.z))} \u7C73\u5916`),o}function GT(n){h.buildings.length&&!h.ended&&h.time.night<.5&&(C0-=n,C0<=0&&(C0=240+Math.random()*180,D0()));let e=performance.now()*.001;for(let t=Zs.length-1;t>=0;t--){let i=Zs[t];if(i.landed)i.life-=n,i.beacon.material.opacity=.55+Math.sin(e*4)*.4,i.life<=0&&(h.scene.remove(i.g),Zs.splice(t,1));else{i.t+=n;let s=Math.min(1,i.t/8),r=1-Math.pow(1-s,2.4);i.g.position.y=i.y+320*(1-r),i.flame.scale.y=.6+(1-r)+Math.random()*.2;for(let o=0;o<2;o++)oe.flame(i.g.position);s>=1&&(i.landed=!0,i.flame.visible=!1,oe.ring(new S(i.x,i.y,i.z),2,70),G.play("land"))}}}function Ox(n){return Zs.find(e=>e.landed&&Math.hypot(e.x-n.x,e.z-n.z)<3.5)}function Fx(n){let e=null,t=1e9;for(let i of Zs){let s=Math.hypot(i.x-n.x,i.z-n.z);s<t&&(t=s,e=i)}return e?{p:e,d:t}:null}function H0(){return Zs}function Bx(n){let e=1+(h.cityLevel||0)*.4,t={iron:Math.round((20+Math.random()*20)*e),silicon:Math.round((15+Math.random()*15)*e),ice:Math.round((10+Math.random()*15)*e)};Math.random()<.6&&(t.titanium=Math.round((3+Math.random()*5)*e));for(let r in t)h.res[r]+=t[r],h.events.emit("pickup",{type:r,n:t[r],note:"\u8865\u7ED9\u8231"});let i=Math.round(10*e);h.rp=(h.rp||0)+i,h.stats.pods=(h.stats.pods||0)+1;let s=["\u5305\u88F9\u91CC\u5939\u7740\u4E00\u5F20\u5B69\u5B50\u753B\u7684\u753B\uFF1A\u4E00\u5EA7\u7EA2\u8272\u661F\u7403\uFF0C\u4E0A\u9762\u6709\u5F88\u591A\u5C0F\u623F\u5B50\u3002","\u9644\u8A00\uFF1A\u300C\u5730\u7403\u8FD9\u8FB9\u4E00\u5207\u90FD\u597D\u3002\u7167\u987E\u597D\u81EA\u5DF1\u3002\u300D","\u7BB1\u5B50\u5E95\u90E8\u6709\u4E00\u5305\u79CD\u5B50\uFF0C\u6807\u7B7E\u4E0A\u5199\u7740\uFF1A\u5411\u65E5\u8475\u3002","\u4E00\u5C01\u624B\u5199\u4FE1\uFF1A\u300C\u6211\u513F\u5B50\u5728\u4F60\u4EEC\u7684\u6B96\u6C11\u5730\u3002\u8BF7\u66FF\u6211\u544A\u8BC9\u4ED6\uFF0C\u5988\u5988\u4E3A\u4ED6\u9A84\u50B2\u3002\u300D","\u8865\u7ED9\u6E05\u5355\u6700\u540E\u4E00\u884C\uFF1A\u300C\u5DE7\u514B\u529B \xD72\u2014\u2014\u7ED9\u7B2C\u4E00\u4E2A\u62C6\u7BB1\u7684\u4EBA\u3002\u300D"];Lt("\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u8865\u7ED9",s[Math.floor(Math.random()*s.length)]+` \u9644\u5E26\u79D1\u7814\u6570\u636E ${i} \u70B9\u3002`),G.play("craft"),oe.burst(new S(n.x,n.y+1.5,n.z),[.5,1,.7],50,6),h.scene.remove(n.g),Zs.splice(Zs.indexOf(n),1)}var me=n=>document.getElementById(n),Pd,O0,be,wo={},F0={mars:"MARS",europa:"EUROPA",kepler:"KEPLER-442b"},VT=["I","II","III","IV","V","VI"];function Qx(n){Pd=n,document.body.insertAdjacentHTML("afterbegin",Cx()),O0=me("minimap"),be=O0.getContext("2d"),me("pl-cn").textContent=he.name,me("kick-planet").textContent=F0[at],me("hotbar").innerHTML=Nr.map((t,i)=>`<div class="slot" data-i="${i}"><span class="key">${i+1}</span><span class="ic">${pt(t.icon)}</span><span class="nm">${t.name}</span></div>`).join("")+`<div class="slot gad hidden" id="gad-g"><span class="key">G</span><span class="ic">${pt("bomb")}</span><span class="nm">\u9707\u8361\u96F7</span><i class="cdf"></i></div>`,me("res").innerHTML=Object.entries(rn).map(([t,i])=>`<div class="r" id="r-${t}" style="--rc:${i.color}"><span class="ic">${pt(t)}</span><span class="tx"><small>${i.name}</small><b>0</b></span></div>`).join(""),h.events.on("toast",t=>Qt(t)),h.events.on("pickup",t=>XT(t));let e=0;h.events.on("enemyHit",t=>{let i=performance.now();if(!t.kill&&i-e<90)return;e=i;let s=me("hitmark");s.classList.toggle("kill",!!t.kill),s.animate([{opacity:1,transform:`translate(-50%,-50%) scale(${t.kill?1.5:1.25})`},{opacity:1,transform:"translate(-50%,-50%) scale(1)",offset:.25},{opacity:0,transform:"translate(-50%,-50%) scale(1)"}],{duration:t.kill?520:260,easing:"ease-out"}),t.kill||G.tone(2400,.03,"square",.015)}),h.events.on("hurt",()=>{let t=h.player;if(!t||t.lastHitDir===void 0)return;let i=t.lastHitDir-t.yaw-Math.PI,s=document.createElement("div");s.className="dd",s.style.transform=`rotate(${-i}rad)`,me("dmgdir").appendChild(s),s.animate([{opacity:0},{opacity:1,offset:.1},{opacity:0}],{duration:1300,easing:"ease-out"}).onfinish=()=>s.remove()}),h.events.on("hurt",t=>{document.body.classList.remove("glitch"),document.body.offsetWidth,document.body.classList.add("glitch"),clearTimeout(h._gl),h._gl=setTimeout(()=>document.body.classList.remove("glitch"),320)}),document.querySelectorAll("[data-close]").forEach(t=>t.addEventListener("click",()=>{G.play("ui"),Zn(!0)})),document.querySelectorAll(".menu button, .bp-tabs button").forEach(t=>t.addEventListener("mouseenter",()=>G.play("tick")))}var Gx={"\u2713":["check","good"],"\u26A0":["warn","warn"],"\u{1F527}":["wrench",""],"\u2600":["sun",""],"\u2604":["meteor",""],"\u{1F680}":["ship",""]};function Qt(n,e="radio",t=""){let i=[...n][0];if(Gx[i]&&([e,t]=Gx[i],n=n.slice(i.length).trim()),t==="warn"||e==="boss")return WT(n,e,t);let s=me("log"),r=[...s.children].find(a=>a.dataset.t===n&&!a.classList.contains("out"));if(r){let a=(+r.dataset.n||1)+1;r.dataset.n=a,r.querySelector("em").textContent="\xD7"+a,clearTimeout(r._to),r._to=setTimeout(()=>B0(r),5e3);return}let o=document.createElement("div");for(o.className="ev "+t,o.dataset.t=n,o.innerHTML=`${pt(e)}<span>${n}</span><em></em>`,s.appendChild(o);s.children.length>3;)s.firstChild.remove();o._to=setTimeout(()=>B0(o),5e3)}function B0(n){n.classList.add("out"),setTimeout(()=>n.remove(),600)}var Vx,Wx=0,Xx=0;function WT(n,e,t){let i=e==="boss"?2:1,s=performance.now();if(i<Wx&&s<Xx){let o=me("log"),a=document.createElement("div");for(a.className="ev warn",a.innerHTML=`${pt(e==="radio"?"warn":e)}<span>${n}</span><em></em>`,o.appendChild(a);o.children.length>3;)o.firstChild.remove();setTimeout(()=>B0(a),5e3);return}Wx=i,Xx=s+4500;let r=me("alert");r.className="show "+(t==="good"?"good":""),r.innerHTML=`${pt(e==="radio"?"warn":e)}<span>${n}</span>`,G.play("alarm"),clearTimeout(Vx),Vx=setTimeout(()=>{r.className=""},4500)}var U0={};function XT({type:n,n:e,note:t}){G.play("pickup");let i=U0[n];i&&i.el.isConnected?(i.n+=e,clearTimeout(i.to)):(i=U0[n]={n:e,el:document.createElement("div")},i.el.className="feed",me("feed").appendChild(i.el));let s=rn[n];i.el.style.setProperty("--rc",s.color),i.el.innerHTML=`<span class="nm">${t||s.name}</span>${pt(n)}<span class="q">+${i.n}</span>`,i.el.classList.remove("out"),i.to=setTimeout(()=>{i.el.classList.add("out"),setTimeout(()=>{i.el.remove(),delete U0[n]},500)},1800);let r=me("r-"+n);r.classList.remove("flash"),r.offsetWidth,r.classList.add("flash")}var Td=[],N0=!1;function bo(n){if(N0){Td.length=0,Td.push(n);return}N0=!0,setTimeout(()=>{N0=!1,Td.length&&bo(Td.shift())},5200);let e=me("chapter"),t=ki.indexOf(n),i=n.k||(t>=0?`CHAPTER ${String(t+1).padStart(2,"0")}`:""),s=n.title.replace(/^第.章 · |^终章 · /,"");e.innerHTML=`<div class="k">${i}</div><div class="t">${s}</div><div class="ln"></div><div class="s">${n.sub}</div>`,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}var qT=["build","craft","pause","starmap","archive","research","trade","mapscr"],qx=null;function YT(n){let e=me(n);e.classList.remove("closing"),e.classList.add("opening"),setTimeout(()=>e.classList.remove("opening"),700),e.querySelectorAll(".bp-grid, .people, .achv, .kv, #starmap-list, .opts").forEach(t=>{t.classList.remove("stagger"),t.offsetWidth,t.classList.add("stagger"),[...t.children].forEach((i,s)=>i.style.setProperty("--i",Math.min(s,18))),setTimeout(()=>t.classList.remove("stagger"),1400)})}function Id(n){n&&(n.classList.remove("swap"),n.offsetWidth,n.classList.add("swap"))}function _s(n){Zn(!1,!0),h.menuOpen=n,me(n).classList.remove("hidden"),document.body.classList.add("menu-open");for(let e in kr)delete kr[e];if(document.pointerLockElement&&document.exitPointerLock(),G.play("open"),n==="build"){if(!wo.solar)try{wo=Px(s0.filter(e=>!Es(e).hide))}catch{wo={}}V0()}n==="craft"&&j0(),n==="research"&&Cd(),n==="trade"&&mc(),n==="mapscr"&&X0(),n==="archive"&&(me("archive-body").innerHTML=Z0()),n==="pause"&&(me("pause-pane").innerHTML=""),YT(n)}function Zn(n,e=!1){clearTimeout(qx);let t=qT.filter(s=>!me(s).classList.contains("hidden"));e||!t.length?t.forEach(s=>{me(s).classList.add("hidden"),me(s).classList.remove("closing")}):(G.play("close"),t.forEach(s=>me(s).classList.add("closing")),qx=setTimeout(()=>t.forEach(s=>{me(s).classList.add("hidden"),me(s).classList.remove("closing")}),260)),e||document.body.classList.remove("menu-open");let i=h.menuOpen;h.menuOpen=!1,i==="build"&&!It.type&&(un.index=0),n&&h.requestLock()}function q0(n){me("pause-pane").innerHTML=n,Id(me("pause-pane"));let e=me("pause-pane").querySelector(".achv, .kv, .people");e&&(e.classList.add("stagger"),[...e.children].forEach((t,i)=>t.style.setProperty("--i",Math.min(i,18))))}var G0={all:"\u5168\u90E8",life:"\u751F\u5B58",city:"\u57CE\u5E02",industry:"\u5DE5\u4E1A",defense:"\u9632\u5FA1",stellar:"\u661F\u9645"},Rd="all",Ss=null;function $x(n){me(n).innerHTML=Object.entries(rn).map(([e,t])=>`<span style="--rc:${t.color}">${pt(e)}${h.res[e]}</span>`).join("")}function ey(n){return`<div class="need">${Object.entries(n).map(([e,t])=>`<div class="row ${h.res[e]>=t?"":"lack"}" style="--rc:${rn[e].color}">${pt(e)}<span class="nm">${rn[e].name}</span>${Math.floor(h.res[e])} / ${t}</div>`).join("")}</div>`}function V0(){$x("bp-res");let n=s0.filter(i=>!Es(i).hide),e=["all",...Object.keys(G0).filter(i=>i!=="all"&&n.some(s=>jn[s].cat===i))];me("bp-tabs").innerHTML=e.map(i=>`<button data-c="${i}" class="${i===Rd?"on":""}">${G0[i]}</button>`).join(""),me("bp-tabs").querySelectorAll("button").forEach(i=>i.addEventListener("click",()=>{Rd=i.dataset.c,G.play("tick"),V0()}));let t=n.filter(i=>Rd==="all"||jn[i].cat===Rd);(!Ss||!t.includes(Ss))&&(Ss=t.find(i=>Es(i).ok)||t[0]),me("build-list").innerHTML=t.map(i=>{let s=jn[i],r=Es(i),o=Ki(s.cost);return`<div class="tile ${r.ok?"":"locked"} ${o?"":"poor"} ${i===Ss?"sel":""}" data-k="${i}">
      <div class="th">${wo[i]?`<img src="${wo[i]}" alt="">`:pt(s.icon)}</div>
      ${r.ok?"":`<div class="lk">${pt("lock")}</div>`}
      <div class="nm">${s.name}</div><div class="cs">${r.ok?ga(s.cost):""}</div></div>`}).join(""),me("build-list").querySelectorAll(".tile").forEach(i=>{i.addEventListener("click",()=>{Ss=i.dataset.k,G.play("tick"),V0()}),i.addEventListener("dblclick",()=>Y0(i.dataset.k))}),ZT()}function jT(n){let e=jn[n],t=Es(n);return at==="mars"&&e.chapter>h.chapter?`\u5728\u300C${ki[e.chapter].title}\u300D\u89E3\u9501`:t.why}function ZT(){let n=Ss;if(!n){me("bp-detail").innerHTML="";return}let e=jn[n],t=Es(n),i=Ki(e.cost),s=[];e.power&&s.push(["\u7535\u529B",`${e.power>0?"+":""}${e.power}`,e.power>0?"pos":"neg"]),e.housing&&s.push(["\u4F4F\u623F",`${e.housing} \u4EBA`]),e.o2&&s.push(["\u4F9B\u6C27",`${e.o2} \u4EBA`]),e.food&&s.push(["\u98DF\u7269",`${e.food} \u4EBA`]),e.water&&s.push(["\u7528\u6C34",`${e.water} \u4EBA`]),e.life&&s.push(["\u8865\u6C27\u534A\u5F84",`${e.life} m`]),e.range&&s.push(["\u5C04\u7A0B",`${e.range} m`]),s.push(["\u8010\u4E45",e.hp]),me("bp-detail").innerHTML=`<div class="pv">${wo[n]?`<img src="${wo[n]}" alt="">`:pt(e.icon)}</div>
    <div class="cat">${G0[e.cat]||""} \xB7 BLUEPRINT</div><h3>${e.name}</h3>
    <div class="ds">${e.desc}</div>
    <div class="stats">${s.map(r=>`<div><small>${r[0]}</small><b class="${r[2]||""}">${r[1]}</b></div>`).join("")}</div>
    ${t.ok?ey(e.cost):`<div class="why">${pt("lock")} ${jT(n)}</div>`}
    <button class="go" ${t.ok?"":"disabled"}>${t.ok?i?"\u5F00\u59CB\u5EFA\u9020":"\u653E\u7F6E\u84DD\u56FE\uFF08\u8D44\u6E90\u4E0D\u8DB3\uFF09":"\u5C1A\u672A\u89E3\u9501"}</button>`,me("bp-detail").querySelector(".go").addEventListener("click",()=>Y0(n)),kr["bp-detail"]!==Ss&&(kr["bp-detail"]=Ss,Id(me("bp-detail")))}function Y0(n){let e=jn[n];if(!Es(n).ok){G.play("deny");return}G.play("ui"),It.rot=0,fo(n),un.index=2,Zn(!0),Ki(e.cost)||Qt("\u8D44\u6E90\u4E0D\u8DB3\uFF0C\u653E\u7F6E\u524D\u5148\u53BB\u91C7\u96C6\u5427","warn","warn")}function ty(n){h.menuOpen==="build"&&n.code==="Enter"&&Ss&&Y0(Ss),h.menuOpen==="craft"&&n.code==="Enter"&&Fi&&W0(Fi)}var Fi=null;function j0(){$x("cr-res");let n=Object.keys(Ua);Fi||(Fi=n.find(s=>!h.upgrades[s])||n[0]),me("craft-list").innerHTML=n.map(s=>{let r=Ua[s],o=h.upgrades[s],a=Ki(r.cost),l=r.need&&!h.upgrades[r.need];return`<div class="tile ${o?"done":""} ${a&&!l?"":"poor"} ${s===Fi?"sel":""}" data-k="${s}">
      ${o?'<span class="tag">\u5DF2\u88C5\u5907</span>':""}
      <div class="th">${pt(r.icon)}</div><div class="nm">${r.name}</div><div class="cs">${o?"":ga(r.cost)}</div></div>`}).join(""),me("craft-list").querySelectorAll(".tile").forEach(s=>{s.addEventListener("click",()=>{Fi=s.dataset.k,G.play("tick"),j0()}),s.addEventListener("dblclick",()=>W0(s.dataset.k))});let e=Ua[Fi],t=h.upgrades[Fi],i=e.need&&!h.upgrades[e.need];me("craft-detail").innerHTML=`<div class="pv">${pt(e.icon)}</div><div class="cat">EQUIPMENT</div><h3>${e.name}</h3>
    <div class="ds">${e.desc}</div>
    ${t?'<div class="why okc">\u5DF2\u5236\u9020\u5E76\u88C5\u5907</div>':i?`<div class="why">${pt("lock")} \u9700\u8981\u5148\u5236\u9020\u7B49\u79BB\u5B50\u6B65\u67AA</div>`:ey(e.cost)}
    <button class="go" ${t||i||!Ki(e.cost)?"disabled":""}>${t?"\u5DF2\u88C5\u5907":Ki(e.cost)?"\u5236\u9020":"\u8D44\u6E90\u4E0D\u8DB3"}</button>`,me("craft-detail").querySelector(".go").addEventListener("click",()=>W0(Fi)),kr["craft-detail"]!==Fi&&(kr["craft-detail"]=Fi,Id(me("craft-detail")))}function W0(n){let e=Ua[n];if(h.upgrades[n]||e.need&&!h.upgrades[e.need]||!Ki(e.cost)){G.play("deny");return}Ul(e.cost),h.upgrades[n]=!0,h.stats.crafted[n]=!0,G.play("craft"),Qt(`\u5236\u9020\u5B8C\u6210\uFF1A${e.name}`,e.icon,"good"),n==="tank"&&(h.player.o2=180),n==="rifle"&&(un.index=1),h.events.emit("crafted",n),Fi=Object.keys(Ua).find(t=>!h.upgrades[t])||n,j0()}var Xa={unlocked:()=>!0,relicLeft:()=>!1,relicFound:()=>0},es=null;function Cd(){me("rs-res").innerHTML=`<span style="--rc:var(--cyan)">${pt("book")}${Math.floor(h.rp||0)} \u79D1\u7814\u70B9</span><span style="--rc:var(--dim)"><small>+${ad().toFixed(2)}/\u79D2</small></span>`;let n=Object.keys(Pa);es||(es=n.find(r=>!Xt(r))||n[0]),me("research-list").innerHTML=n.map(r=>{let o=Pa[r],a=Xt(r),l=(h.rp||0)>=o.cost;return`<div class="tile ${a?"done":""} ${l||a?"":"poor"} ${r===es?"sel":""}" data-k="${r}">${a?'<span class="tag">\u5DF2\u5B8C\u6210</span>':""}
      <div class="th">${pt(o.icon)}</div><div class="nm">${o.name}</div><div class="cs"><span class="cost ${l?"":"lack"}" style="--rc:var(--cyan)">${pt("book")}${o.cost}</span> <small>${o.cat}</small></div></div>`}).join(""),me("research-list").querySelectorAll(".tile").forEach(r=>{r.addEventListener("click",()=>{es=r.dataset.k,G.play("tick"),Cd()}),r.addEventListener("dblclick",()=>{Jp(r.dataset.k)&&Cd()})});let e=Pa[es],t=Xt(es),i=(h.rp||0)>=e.cost,s=h.buildings.some(r=>r.type==="lab");me("research-detail").innerHTML=`<div class="pv">${pt(e.icon)}</div><div class="cat">${e.cat} \xB7 TECHNOLOGY</div><h3>${e.name}</h3>
    <div class="ds">${e.desc}</div>
    ${s?"":'<div class="why">\u5EFA\u9020\u7814\u7A76\u6240\u6765\u4EA7\u51FA\u79D1\u7814\u70B9\u6570</div>'}
    <div class="need"><div class="row ${i||t?"":"lack"}" style="--rc:var(--cyan)">${pt("book")}<span class="nm">\u79D1\u7814\u70B9\u6570</span>${Math.floor(h.rp||0)} / ${e.cost}</div></div>
    <button class="go" ${t||!i?"disabled":""}>${t?"\u5DF2\u5B8C\u6210":i?"\u5F00\u59CB\u7814\u7A76":"\u79D1\u7814\u70B9\u6570\u4E0D\u8DB3"}</button>`,me("research-detail").querySelector(".go").addEventListener("click",()=>{Jp(es)&&(es=Object.keys(Pa).find(r=>!Xt(r))||es,Cd())}),kr["research-detail"]!==es&&(kr["research-detail"]=es,Id(me("research-detail")))}var _n={x:0,y:0,s:80,a:0,id:null,t:0},Ad=new S;function KT(n){let e=me("lock"),t=h.aimTarget;if(t&&(Ad.set(t.x,t.y,t.z).project(h.camera),Ad.z<1)){let i=innerWidth,s=innerHeight,r=(Ad.x*.5+.5)*i,o=(-Ad.y*.5+.5)*s,a=Math.max(46,Math.min(260,t.r/Math.max(1,t.dist)*s*.9));_n.id!==t.id&&(_n.id=t.id,_n.x=r,_n.y=o,_n.s=a*2.6,_n.t=0,G.play("tick"),e.querySelector(".lk-info").animate([{opacity:0,transform:"translateX(-10px)",clipPath:"inset(0 100% 0 0)"},{opacity:1,transform:"none",clipPath:"inset(0 0 0 0)"}],{duration:420,easing:"cubic-bezier(.2,.8,.2,1)",delay:80,fill:"backwards"}),e.querySelectorAll(".c").forEach(d=>d.animate([{opacity:0},{opacity:1,offset:.3},{opacity:.25,offset:.45},{opacity:1}],{duration:420})));let l=Math.min(1,n*14);_n.x+=(r-_n.x)*l,_n.y+=(o-_n.y)*l,_n.s+=(a-_n.s)*Math.min(1,n*9),_n.t+=n,e.style.transform=`translate(${_n.x-_n.s/2}px, ${_n.y-_n.s/2}px)`,e.style.width=e.style.height=_n.s+"px";let c="on "+t.kind;e.className!==c&&(e.className=c),e.style.setProperty("--lc",t.kind==="enemy"?"var(--red)":t.color||"var(--amber)"),e.querySelector(".lk-tag").textContent=t.tag,e.querySelector(".lk-name").textContent=t.name,e.querySelector(".lk-dist").textContent=t.dist.toFixed(1)+" M",e.querySelector(".lk-bar i").style.width=t.bar*100+"%";return}_n.id=null,e.classList.remove("on")}var Yx=!1;function X0(){let n=me("bigmap"),e=n.getContext("2d"),t=n.width,i=h.player,s=t/cn,r=d=>(d+cn/2)*s,o=d=>(d+cn/2)*s;me("map-title").textContent=`${he.name} \xB7 ${he.place}`,e.clearRect(0,0,t,t),e.globalAlpha=.9,e.drawImage(Pd,0,0,t,t),e.globalAlpha=1,e.strokeStyle="rgba(142,231,255,.08)",e.lineWidth=1;for(let d=0;d<=t;d+=t/14)e.beginPath(),e.moveTo(d,0),e.lineTo(d,t),e.stroke(),e.beginPath(),e.moveTo(0,d),e.lineTo(t,d),e.stroke();e.strokeStyle="rgba(142,231,255,.7)",e.setLineDash([6,6]),e.lineWidth=1.5,e.beginPath(),e.arc(r(vi.x),o(vi.z),Yn[h.cityLevel].r*s,0,Math.PI*2),e.stroke(),e.setLineDash([]);let a=(d,u,f,p)=>{e.fillStyle=p,e.beginPath(),e.moveTo(r(d),o(u)-f),e.lineTo(r(d)+f,o(u)),e.lineTo(r(d),o(u)+f),e.lineTo(r(d)-f,o(u)),e.fill()};for(let d of h.nodes)a(d.x,d.z,d.type==="titanium"?3.5:2.2,rn[d.type].color);for(let d of h.buildings){let u=Math.max(2.5,d.def.r*s);e.fillStyle=d.broken?"#ff5a45":"#f3efe8",e.fillRect(r(d.x)-u,o(d.z)-u,u*2,u*2)}for(let d of h.enemies)e.fillStyle="#ff5a45",e.beginPath(),e.arc(r(d.pos.x),o(d.pos.z),d.boss?6:2.5,0,7),e.fill();for(let d of R0())e.strokeStyle=d.found?"rgba(255,210,138,.4)":"#ffd28a",e.lineWidth=2,e.beginPath(),e.arc(r(d.x),o(d.z),6,0,7),e.stroke();for(let d of H0())e.fillStyle="#8bf0a9",e.beginPath(),e.arc(r(d.x),o(d.z),5,0,7),e.fill();if(e.fillStyle="#8bf0a9",e.fillRect(r(bt.x)-3,o(bt.z)-3,6,6),h.waypoint){let d=h.waypoint;e.strokeStyle="#ffb65c",e.lineWidth=2,e.beginPath(),e.arc(r(d.x),o(d.z),9,0,7),e.stroke(),e.beginPath(),e.moveTo(r(d.x),o(d.z)-14),e.lineTo(r(d.x),o(d.z)+14),e.moveTo(r(d.x)-14,o(d.z)),e.lineTo(r(d.x)+14,o(d.z)),e.stroke()}let l=Math.atan2(i.fwd.x,-i.fwd.z);e.save(),e.translate(r(i.pos.x),o(i.pos.z)),e.rotate(l),e.fillStyle="#fff",e.shadowColor="#8ee7ff",e.shadowBlur=10,e.beginPath(),e.moveTo(0,-10),e.lineTo(7,7),e.lineTo(0,3),e.lineTo(-7,7),e.closePath(),e.fill(),e.restore();let c=(d,u,f="dot")=>`<div class="lg"><i class="${f}" style="--c:${d}"></i>${u}</div>`;me("map-legend").innerHTML=`<h4>\u56FE\u4F8B</h4>${c("#fff","\u4F60\u7684\u4F4D\u7F6E","arrow")}${c("#f3efe8","\u5EFA\u7B51","sq")}${Object.values(rn).map(d=>c(d.color,d.name,"dia")).join("")}${c("#ffd28a","\u9057\u8FF9","ring")}${c("#8bf0a9","\u8865\u7ED9\u8231 / \u7740\u9646\u8231")}${c("#ff5a45","\u9508\u8680\u86DB")}${c("#8ee7ff","\u6B96\u6C11\u5730\u9886\u5730","dash")}
    <h4>\u5BFC\u822A</h4><p>\u70B9\u51FB\u5730\u56FE\u4EFB\u610F\u4F4D\u7F6E\u8BBE\u7F6E\u5BFC\u822A\u70B9\uFF0C\u7F57\u76D8\u4F1A\u6307\u5411\u5B83\uFF0C\u5730\u9762\u4F1A\u51FA\u73B0\u5149\u67F1\u3002</p>${h.waypoint?'<button class="go small" id="wp-clear">\u6E05\u9664\u5BFC\u822A\u70B9</button>':""}`,me("wp-clear")?.addEventListener("click",()=>{h.waypoint=null,G.play("tick"),X0()}),Yx||(Yx=!0,n.addEventListener("click",d=>{let u=n.getBoundingClientRect(),f=(d.clientX-u.left)/u.width*cn-cn/2,p=(d.clientY-u.top)/u.height*cn-cn/2;h.waypoint={x:f,z:p},G.play("ui"),X0()}))}var zr="iron",Ks="silicon",Ga=10;function mc(){me("tr-res").innerHTML=Object.entries(rn).map(([t,i])=>`<span style="--rc:${i.color}">${pt(t)}${Math.floor(h.res[t])}</span>`).join("");let n=t=>Object.entries(rn).map(([i,s])=>`<button class="rs ${i===t?"on":""}" data-k="${i}" style="--rc:${s.color}">${pt(i)}<span>${s.name}</span><b>${Math.floor(h.res[i])}</b></button>`).join(""),e=Qp(zr,Ks,Ga);me("trade-body").innerHTML=`<div class="tcol"><h4>\u4EA4\u51FA</h4><div class="rsl" id="tr-from">${n(zr)}</div></div>
    <div class="tmid"><div class="amt">${[10,25,50,100].map(t=>`<button class="${t===Ga?"on":""}" data-n="${t}">${t}</button>`).join("")}</div>
      <div class="deal"><span style="--rc:${rn[zr].color}">${pt(zr)}${Ga}</span><i>\u2192</i><span style="--rc:${rn[Ks].color}">${pt(Ks)}${e}</span></div>
      <div class="note2">\u6C47\u7387\u6309\u5730\u7403\u5E02\u573A\u4EF7\u8BA1\u7B97\uFF0C\u542B 20% \u8FD0\u8F93\u635F\u8017</div>
      <button class="go" ${zr===Ks||e<=0||h.res[zr]<Ga?"disabled":""}>\u4EA4\u6613</button></div>
    <div class="tcol"><h4>\u6362\u53D6</h4><div class="rsl" id="tr-to">${n(Ks)}</div></div>`,me("tr-from").querySelectorAll(".rs").forEach(t=>t.addEventListener("click",()=>{zr=t.dataset.k,G.play("tick"),mc()})),me("tr-to").querySelectorAll(".rs").forEach(t=>t.addEventListener("click",()=>{Ks=t.dataset.k,G.play("tick"),mc()})),me("trade-body").querySelectorAll(".amt button").forEach(t=>t.addEventListener("click",()=>{Ga=+t.dataset.n,G.play("tick"),mc()})),me("trade-body").querySelector(".go").addEventListener("click",()=>{let t=Rv(zr,Ks,Ga);t&&Qt(`\u4EA4\u6613\u5B8C\u6210\uFF1A\u83B7\u5F97${rn[Ks].name} ${t}`,Ks,"good"),mc()})}function Z0(){let n=h.colony,e=h.stats,t=e.mined.iron+e.mined.silicon+e.mined.ice+e.mined.titanium,i=[["\u4EBA\u53E3",n.pop],["\u57CE\u5E02\u7B49\u7EA7",Yn[h.cityLevel].name],["\u8BBE\u65BD",h.buildings.length],["\u706B\u661F\u65E5",h.time.day],["\u7535\u529B",`${Math.round(n.powerProd)} / ${n.powerUse}`],["\u9057\u8FF9",`${bs().found} / ${bs().total}`],["\u53EF\u5BB9\u7EB3",n.support],["\u91C7\u96C6\u8D44\u6E90",t],["\u51FB\u9000\u9508\u8680\u86DB",e.kills],["\u884C\u9A76\u91CC\u7A0B",`${((e.driven||0)/1e3).toFixed(1)} km`],["\u5C45\u6C11\u4EA4\u8C08",(e.talked||[]).length],["\u5E78\u798F\u5EA6",h.morale??"\u2014"],["\u8865\u7ED9\u8231",e.pods||0]],s=xn.visited||[],r=Object.keys(Wn).map(l=>{let c=l===at?{pop:n.pop}:s.find(d=>d.id===l);return`<div><small>${Wn[l].name}</small><b>${c?c.pop+" \u4EBA":"\u2014"}</b></div>`}).join(""),o=h.colonists.map(l=>`<div class="person" data-i="${[...l.name][0]}"><span class="pn">${l.name}</span><span class="pj">${l.job}</span><div class="pl">\u201C${l.line}\u201D</div></div>`).join(""),a=n.pop-h.colonists.length;return`<h3>\u6982\u51B5 \xB7 ${he.name}</h3><div class="kv">${i.map(l=>`<div><small>${l[0]}</small><b>${l[1]}</b></div>`).join("")}</div>
    ${h.moraleFactors&&n.pop?`<h3>\u5E78\u798F\u5EA6\u6784\u6210</h3><div class="kv">${h.moraleFactors.map(l=>`<div><small>${l[0]}</small><b style="color:${l[1]>=0?"var(--green)":"var(--red)"}">${l[1]>0?"+":""}${Math.round(l[1])}</b></div>`).join("")}</div>`:""}
    <h3>\u4EBA\u7C7B\u7684\u8DB3\u8FF9</h3><div class="kv">${r}<div><small>\u661F\u9645\u603B\u4EBA\u53E3</small><b>${s.filter(l=>l.id!==at).reduce((l,c)=>l+c.pop,0)+n.pop}</b></div></div>
    <h3>\u5C45\u6C11\u540D\u518C</h3>${o?`<div class="people">${o}</div>`:'<p style="color:var(--dim)">\u8FD8\u6CA1\u6709\u5C45\u6C11\u3002\u5EFA\u597D\u4F4F\u623F\u3001\u6C27\u6C14\u3001\u98DF\u7269\u3001\u6C34\u548C\u7740\u9646\u573A\uFF0C\u79FB\u6C11\u98DE\u8239\u5C31\u4F1A\u5230\u6765\u3002</p>'}
    ${a>0?`<p style="color:var(--dim);margin-top:14px">\u2026\u2026\u4EE5\u53CA\u53E6\u5916 ${a} \u4F4D\u5C45\u6C11\u3002</p>`:""}`}var Va={},jx={},kr={},z0=0,Zx="",Wa=0,Kx="";function K0(n,e){let t=h.player,i=h.colony;if(z0-=n,z0<=0){z0=.2;let p=Mv(),g=Yn[h.cityLevel],x=p?Math.min(1,Math.min(i.pop/p.pop,h.buildings.length/Math.max(1,p.b))):1,v=`<span class="lv">LV.${VT[h.cityLevel]}</span><span class="nm">${g.name}</span>${p?`<div class="pg"><i style="width:${x*100}%"></i></div><div class="nx">\u4E0B\u4E00\u7EA7\u300C${p.name}\u300D\xB7 \u4EBA\u53E3 ${Math.min(i.pop,p.pop)}/${p.pop} \xB7 \u8BBE\u65BD ${Math.min(h.buildings.length,p.b)}/${p.b}</div>`:'<div class="nx">\u5DF2\u8FBE\u5230\u6700\u9AD8\u7B49\u7EA7</div>'}`;me("city").dataset.k!==v&&(me("city").dataset.k=v,me("city").innerHTML=v);let m="";if(h.buildings.length){if(m+=`<div class="st ${i.deficit?"warn":""}">${pt("power")}<div><small>\u7535\u529B</small><b>${Math.round(i.powerProd)}<em>/${i.powerUse}</em></b></div></div>`,m+=`<div class="st">${pt("pop")}<div><small>\u4EBA\u53E3</small><b>${i.pop}<em>/${i.support}</em></b></div></div>`,i.pop>0&&h.morale!==void 0){let I=h.morale;m+=`<div class="st ${I<35?"warn":I>=75?"tf":""}">${pt("star")}<div><small>\u5E78\u798F</small><b>${I}</b></div></div>`,I<35&&(m+=`<div class="chip">${pt("warn")}\u5C45\u6C11\u4E0D\u5F00\u5FC3\uFF1A\u5EFA\u7167\u660E\u706F\u3001\u5E7F\u573A\u3001\u6E29\u5BA4\uFF0C\u4FEE\u597D\u53D7\u635F\u8BBE\u65BD</div>`)}if(h.terraform>0&&(m+=`<div class="st tf">${pt("planet")}<div><small>\u5927\u6C14\u6539\u9020</small><b>${Math.floor(h.terraform*100)}%</b></div></div>`),i.deficit&&(m+=`<div class="chip">${pt("warn")}\u7535\u529B\u4E0D\u8DB3\uFF1A\u591A\u5EFA\u592A\u9633\u80FD\u6216\u53CD\u5E94\u5806</div>`),i.housing&&h.buildings.some(I=>I.type==="beacon")&&i.support<=i.pop){let I=[["housing","\u4F4F\u623F","house","\u5C45\u4F4F\u7A79\u9876"],["o2","\u6C27\u6C14","o2","\u5236\u6C27\u7AD9"],["food","\u98DF\u7269","food","\u6E29\u5BA4"],["water","\u6C34","water","\u6C34\u51B0\u63D0\u53D6\u5668"]].sort((_,b)=>i[_[0]]-i[b[0]])[0];m+=`<div class="chip">${pt(I[2])}\u7F3A\u5C11${I[1]}\uFF1A\u5EFA\u9020${I[3]}\u6765\u8FCE\u63A5\u65B0\u79FB\u6C11</div>`}}me("colony").dataset.k!==m&&(me("colony").dataset.k=m,me("colony").innerHTML=m);let E=h.storm>.3?"\u6C99\u5C18\u66B4":h.raining?"\u964D\u96E8":"";me("clock").innerHTML=Pp().replace(/^.*? · /,"")+(E?`<span class="wx">${E}</span>`:"");let w=ki[h.chapter],M=h.chapter,A=(ai()?[]:w.goals).map((I,_)=>{let b=h.goalDone?.[M+":"+_],H=I.prog&&!b?I.prog():"",O=/^(\d+)\/(\d+)$/.exec(H);return`<div class="g ${b?"done":""}"><span class="cb"></span><div class="gx">${I.text}${H?`<small>${H}</small>`:""}${O?`<div class="gp"><i style="width:${Math.min(100,O[1]/O[2]*100)}%"></i></div>`:""}</div></div>`}).join(""),P=h.requests||[];P.length?A+='<div class="rq-h">\u5C45\u6C11\u59D4\u6258</div>'+P.map(I=>{let _=Pv(I,Xa);return`<div class="g rq"><span class="cb"></span><div class="gx">${I.text}<small>${I.giver}${I.n>1?` \xB7 ${_}/${I.n}`:""}</small>${I.n>1?`<div class="gp"><i style="width:${_/I.n*100}%"></i></div>`:""}</div></div>`}).join(""):ai()&&(A+='<div class="g"><div class="gx" style="color:var(--dim)">\u5148\u5EFA\u4E00\u5EA7\u8BBE\u65BD\uFF0C\u5C45\u6C11\u4EEC\u4F1A\u5F00\u59CB\u63D0\u51FA\u59D4\u6258</div></div>'),(h.rp>.5||h.buildings.some(I=>I.type==="lab"))&&(A+=`<div class="rq-h">\u79D1\u7814 <b>${Math.floor(h.rp)}</b> \u70B9 <small>+${ad().toFixed(1)}/\u79D2 \xB7 T \u6253\u5F00</small></div>`),A!==Kx&&(Kx=A,me("goals").innerHTML=A,me("goal-ch").textContent=ai()?`\u81EA\u7531\u6A21\u5F0F \xB7 ${Ca[h.diffKey||"normal"].name}`:w.title.replace(/ · /," ")),document.querySelectorAll("#hotbar .slot:not(.gad)").forEach((I,_)=>{I.classList.toggle("on",_===un.index),I.classList.toggle("lock",!!(Nr[_].need&&!h.upgrades[Nr[_].need]))})}for(let p in rn){Va[p]=Va[p]??h.res[p];let g=h.res[p]-Va[p];Va[p]=Math.abs(g)<.5?h.res[p]:Va[p]+g*Math.min(1,n*7+.02);let x=Math.floor(Va[p]+1e-4),v=jx[p]||(jx[p]=me("r-"+p).querySelector("b"));v.textContent!=x&&(v.textContent=x)}{let p=me("gad-g"),g=Tx()/S0;p.classList.toggle("hidden",!h.upgrades.grenade),p.style.setProperty("--cd",g.toFixed(3));let x=g<=0;x!==p._rd&&(p._rd=x,p.classList.toggle("ready",x),x&&h.upgrades.grenade&&p.animate([{boxShadow:"0 0 0 1px rgba(255,180,90,.9), 0 0 22px rgba(255,150,60,.6)"},{boxShadow:"0 0 0 1px rgba(255,180,90,0)"}],{duration:700,easing:"ease-out"}))}k0("d-hp",70,t.health/t.maxHealth),k0("d-o2",58,t.o2/t.maxO2),k0("d-en",47,t.energy/100),me("d-o2n").textContent=Math.ceil(t.o2/t.maxO2*100),me("d-hpn").textContent=Math.ceil(t.health),me("d-enn").textContent=Math.ceil(t.energy),me("pl-en").textContent=Pp().split(" \xB7 ")[0]===he.name?F0[at]:F0[at];let s=me("o2-state"),r=t.inLife?`${pt("o2")} \u8865\u6C27\u4E2D`:t.o2<t.maxO2*.2?`${pt("warn")} \u6C27\u6C14\u4E0D\u8DB3\uFF0C\u7ACB\u5373\u8FD4\u56DE`:"";s.dataset.k!==r&&(s.dataset.k=r,s.innerHTML=r),s.className=t.inLife?"ok":"bad",me("suit").classList.toggle("low",t.o2<t.maxO2*.2&&!t.inLife);let o=Qv(),a=me("radio");if(o){Zx!==o[1]&&(Zx=o[1],Wa=0,a.querySelector(".who").textContent=o[0]);let p=o[1].length;Wa<p&&(Wa=Math.min(p,Wa+n*26+1e-4),n===0&&(Wa=p));let g=Math.floor(Wa);a.querySelector(".txt").innerHTML=o[1].slice(0,g)+(g<p?'<span class="cur"></span>':""),a.classList.toggle("idle",g>=p),a.classList.add("show")}else a.classList.remove("show");let l=me("prompt");l.dataset.k!==(e.prompt||"")&&(l.dataset.k=e.prompt||"",l.innerHTML=e.prompt||""),l.classList.toggle("show",!!e.prompt),l.classList.toggle("drive",!!h.driving);let c=me("buildhint");if(un.id==="build"&&It.type&&!h.menuOpen){let p=jn[It.type];c.innerHTML=`<div class="bn">${p.name}</div><div>${ga(p.cost)}</div>
      <div class="st">${It.valid?'<span class="okc">\u5DE6\u952E\u653E\u7F6E</span>':`<span class="badc">${It.reason}</span>`}</div>
      <div><kbd>R</kbd>\u65CB\u8F6C <kbd>\u53F3\u952E</kbd>\u53D6\u6D88 <kbd>B</kbd>\u66F4\u6362\u84DD\u56FE</div>`,c.classList.add("show")}else c.classList.remove("show");me("hurt").style.opacity=Math.min(1,t.hurtT*1.6+(t.o2<=0?.5+Math.sin(performance.now()*.01)*.2:0)),me("lowo2").style.opacity=!t.inLife&&t.o2<t.maxO2*.2?(.4+Math.sin(performance.now()*.006)*.3)*(1-t.o2/(t.maxO2*.2)*.6):0,me("crosshair").className=e.crossClass||"",KT(n);let d=me("tip");d.dataset.k!==(e.tip||"")&&(d.dataset.k=e.tip||"",d.innerHTML=e.tip?`<div class="tk">\u63D0\u793A</div><div>${e.tip}</div>`:""),d.classList.toggle("show",!!e.tip);let u=lx(),f=u&&Math.hypot(u.pos.x-t.pos.x,u.pos.z-t.pos.z)<260;me("bossbar").classList.toggle("hidden",!f),f&&(me("bossbar").querySelector("i").style.width=Math.max(0,u.hp/u.maxHp*100)+"%"),JT(),QT()}function k0(n,e,t){let i=2*Math.PI*e,s=me(n);s.style.strokeDasharray=i,s.style.strokeDashoffset=i*(1-Math.max(0,Math.min(1,t)))}var Jx={0:"\u5317",45:"\u4E1C\u5317",90:"\u4E1C",135:"\u4E1C\u5357",180:"\u5357",225:"\u897F\u5357",270:"\u897F",315:"\u897F\u5317"};function JT(){let n=h.player,e=n.fwd,t=Math.atan2(e.x,-e.z)*180/Math.PI,i=80,s=520,r=f=>s/2+f/i*(s/2),o="",a=Math.ceil((t-i)/5)*5;for(let f=a;f<=t+i;f+=5){let p=f-t,g=(f%360+360)%360;Jx[g]!==void 0?o+=`<span class="lb ${g%90===0?"big":""}" style="left:${r(p)}px">${Jx[g]}</span>`:o+=`<span class="tk ${g%15===0?"m":""}" style="left:${r(p)}px"></span>`}let l=(f,p)=>Math.atan2(f-n.pos.x,-(p-n.pos.z))*180/Math.PI,c=[{c:"home",t:`${pt("house")}${Math.round(Math.hypot(bt.x-n.pos.x,bt.z-n.pos.z))}m`,a:l(bt.x,bt.z)}];if(h.upgrades.scanner){let f=null,p=1e9;for(let g of h.nodes)if(g.type==="titanium"){let x=Math.hypot(g.x-n.pos.x,g.z-n.pos.z);x<p&&(p=x,f=g)}f&&c.push({c:"ti",t:`${pt("titanium")}${Math.round(p)}m`,a:l(f.x,f.z)})}h.waypoint&&c.push({c:"ship",t:`${pt("star")}\u5BFC\u822A ${Math.round(Math.hypot(h.waypoint.x-n.pos.x,h.waypoint.z-n.pos.z))}m`,a:l(h.waypoint.x,h.waypoint.z)});let d=Fx(n.pos);d&&c.push({c:"home",t:`${pt("ship")}\u8865\u7ED9 ${Math.round(d.d)}m`,a:l(d.p.x,d.p.z)});let u=Lx(n.pos);u&&c.push({c:"ship",t:`? ${Math.round(u.d)}m`,a:l(u.r.x,u.r.z)});for(let f of c){let p=(f.a-t+540)%360-180;Math.abs(p)<i&&(o+=`<span class="mk ${f.c}" style="left:${r(p)}px;top:16px">${f.t}</span>`)}me("compass").innerHTML=o}function QT(){let n=h.player,e=O0.width,t=e/2-6,i=h.upgrades.scanner?220:110,s=Pd.width/cn;be.clearRect(0,0,e,e),be.save(),be.beginPath(),be.arc(e/2,e/2,t,0,Math.PI*2),be.clip(),be.fillStyle="#0c0807",be.fillRect(0,0,e,e),be.globalAlpha=.75;let r=t*2/(i*2);be.drawImage(Pd,(n.pos.x-i+cn/2)*s,(n.pos.z-i+cn/2)*s,i*2*s,i*2*s,e/2-t,e/2-t,t*2,t*2),be.globalAlpha=1;let o=f=>(f-n.pos.x)*r+e/2,a=f=>(f-n.pos.z)*r+e/2;be.strokeStyle="rgba(255,255,255,.1)",be.lineWidth=1;for(let f of[.33,.66])be.beginPath(),be.arc(e/2,e/2,t*f,0,Math.PI*2),be.stroke();be.strokeStyle="rgba(127,230,255,.55)",be.setLineDash([3,4]),be.beginPath(),be.arc(o(vi.x),a(vi.z),Yn[h.cityLevel].r*r,0,Math.PI*2),be.stroke(),be.setLineDash([]);let l=(f,p,g,x)=>{be.fillStyle=x,be.beginPath(),be.arc(o(f),a(p),g,0,Math.PI*2),be.fill()};for(let f of h.nodes){if(Math.abs(f.x-n.pos.x)>i||Math.abs(f.z-n.pos.z)>i)continue;let p=rn[f.type].color,g=o(f.x),x=a(f.z),v=f.type==="titanium"?3.2:2.2;be.fillStyle=p,be.beginPath(),be.moveTo(g,x-v),be.lineTo(g+v,x),be.lineTo(g,x+v),be.lineTo(g-v,x),be.fill()}for(let f of h.buildings){let p=Math.max(2,f.def.r*r*.8);be.fillStyle=f.broken?"#ff5a45":f.powered?"#ece6dc":"#ffb35c",be.fillRect(o(f.x)-p,a(f.z)-p,p*2,p*2)}be.fillStyle="#8dffb0";for(let f of h.colonists)be.fillRect(o(f.pos.x)-1,a(f.pos.z)-1,2,2);let c=Math.sin(performance.now()*.008)>0;for(let f of h.enemies)l(f.pos.x,f.pos.z,f.guardian?3.5:2.6,c?"#ff5a45":"#a02818");l(bt.x,bt.z,3,"#8dffb0");for(let f of H0())be.fillStyle="#8bf0a9",be.beginPath(),be.arc(o(f.x),a(f.z),4.5,0,Math.PI*2),be.fill();for(let f of R0())Math.abs(f.x-n.pos.x)>i*1.2||Math.abs(f.z-n.pos.z)>i*1.2||(be.strokeStyle=f.found?"rgba(255,210,138,.4)":"#ffd28a",be.lineWidth=1.5,be.beginPath(),be.arc(o(f.x),a(f.z),4,0,Math.PI*2),be.stroke());be.restore(),be.save(),be.translate(e/2,e/2),be.strokeStyle="rgba(236,230,220,.35)",be.lineWidth=1,be.beginPath(),be.arc(0,0,t+.5,0,Math.PI*2),be.stroke();for(let f=0;f<72;f++){let p=f/72*Math.PI*2,g=f%18===0?6:f%6===0?4:2;be.strokeStyle=f%18===0?"rgba(255,179,92,.9)":"rgba(236,230,220,.3)",be.beginPath(),be.moveTo(Math.sin(p)*(t+1),-Math.cos(p)*(t+1)),be.lineTo(Math.sin(p)*(t+1+g),-Math.cos(p)*(t+1+g)),be.stroke()}let d=Math.atan2(n.fwd.x,-n.fwd.z);be.rotate(d);let u=be.createRadialGradient(0,0,0,0,0,t*.6);u.addColorStop(0,"rgba(255,179,92,.35)"),u.addColorStop(1,"rgba(255,179,92,0)"),be.fillStyle=u,be.beginPath(),be.moveTo(0,0),be.arc(0,0,t*.6,-Math.PI/2-.55,-Math.PI/2+.55),be.closePath(),be.fill(),be.fillStyle="#fff",be.beginPath(),be.moveTo(0,-7),be.lineTo(5,5),be.lineTo(0,2.5),be.lineTo(-5,5),be.closePath(),be.fill(),be.restore()}function Ld(){let n=me("boot"),e=["ARK OS 3.1  \xB7  VISOR LINK ESTABLISHED","\u751F\u547D\u7EF4\u6301 ........... \u6B63\u5E38","\u5B87\u822A\u670D\u6C14\u5BC6 ......... \u6B63\u5E38","\u5BFC\u822A\u4E0E\u7F57\u76D8 ......... \u6821\u51C6\u5B8C\u6210","\u6B96\u6C11\u5730\u6570\u636E\u94FE ....... \u5DF2\u540C\u6B65","\u5168\u606F\u6295\u5F71 ........... \u542F\u52A8"];n.innerHTML='<div class="bt-ring"></div>'+e.map((t,i)=>`<div class="bt-l" style="animation-delay:${.1+i*.16}s">${t}</div>`).join(""),n.className="show",document.body.classList.add("booting"),G.play("open"),setTimeout(()=>{n.className="out",document.body.classList.remove("booting"),G.play("chapter")},1500),setTimeout(()=>{n.className="",n.innerHTML=""},2300)}var ny="starport-achv",Hd=[{id:"first",name:"\u7B2C\u4E00\u6B65",desc:"\u5728\u5F02\u661F\u91C7\u96C6\u7B2C\u4E00\u5757\u77FF\u77F3",icon:"iron",check:()=>h.stats.mined.iron+h.stats.mined.silicon+h.stats.mined.ice>0},{id:"devil",name:"\u4E58\u98CE\u800C\u4E0A",desc:"\u88AB\u5C18\u5377\u98CE\u5377\u4E0A\u5929\u7A7A",icon:"storm",check:()=>(h.stats.devils||0)>0},{id:"whale",name:"\u9CB8\u6B4C",desc:"\u626B\u63CF\u8BB0\u5F55\u5F00\u666E\u52D2\u7684\u5929\u9CB8",icon:"planet",check:()=>(h.stats.whales||0)>0},{id:"geyser",name:"\u51B0\u4E0A\u98DE\u4EBA",desc:"\u88AB\u6728\u536B\u4E8C\u7684\u51B0\u706B\u5C71\u9001\u4E0A\u5929\u7A7A",icon:"ice",check:()=>(h.stats.geyser||0)>0},{id:"boomer",name:"\u4E00\u96F7\u6E05\u573A",desc:"\u6295\u63B7\u7B2C\u4E00\u9897\u9707\u8361\u96F7",icon:"bomb",check:()=>(h.stats.grenades||0)>0},{id:"breathe",name:"\u547C\u5438",desc:"\u5EFA\u8D77\u7B2C\u4E00\u5EA7\u5236\u6C27\u7AD9",icon:"o2",check:()=>h.stats.built.oxygen>0},{id:"home",name:"\u7B2C\u4E00\u4E2A\u5BB6",desc:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",icon:"dome",check:()=>h.stats.built.habitat>0},{id:"welcome",name:"\u6B22\u8FCE\u56DE\u5BB6",desc:"\u8FCE\u63A5\u7B2C\u4E00\u6279\u79FB\u6C11",icon:"pop",check:()=>h.stats.arrived>0},{id:"listen",name:"\u503E\u542C\u8005",desc:"\u4E0E 8 \u4F4D\u5C45\u6C11\u4EA4\u8C08",icon:"radio",check:()=>(h.stats.talked||[]).length>=8},{id:"night",name:"\u957F\u591C\u5B88\u671B\u8005",desc:"\u51FB\u9000 15 \u53EA\u9508\u8680\u86DB",icon:"shield",check:()=>h.stats.kills>=15},{id:"guardian",name:"\u6676\u4F53\u730E\u4EBA",desc:"\u51FB\u8D25\u4E00\u53EA\u949B\u77FF\u5B88\u536B",icon:"titanium",check:()=>(h.stats.guardKills||0)>0},{id:"road",name:"\u516C\u8DEF\u65C5\u884C",desc:"\u9A7E\u9A76\u6F2B\u6E38\u8F66\u884C\u9A76 3 \u516C\u91CC",icon:"rover",check:()=>(h.stats.driven||0)>=3e3},{id:"meteor",name:"\u661F\u843D\u4E4B\u591C",desc:"\u91C7\u96C6\u4E00\u5757\u9668\u77F3",icon:"meteor",check:()=>(h.stats.meteorMined||0)>0},{id:"storm",name:"\u98CE\u66B4\u4E4B\u4E2D",desc:"\u7ECF\u5386\u4E00\u573A\u6C99\u5C18\u66B4",icon:"storm",check:()=>h.storm>.85},{id:"fly",name:"\u98DE\u7FD4",desc:"\u5236\u9020\u55B7\u6C14\u80CC\u5305",icon:"jet",check:()=>!!h.upgrades.jetpack},{id:"town",name:"\u5C0F\u9547",desc:"\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C\u5C0F\u9547\u300D",icon:"colony",check:()=>h.cityLevel>=2},{id:"metro",name:"\u5927\u90FD\u4F1A",desc:"\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C\u5927\u90FD\u4F1A\u300D",icon:"tower",check:()=>h.cityLevel>=4},{id:"fifty",name:"\u4E94\u5341\u4E2A\u706F\u706B",desc:"\u5355\u9897\u661F\u7403\u4EBA\u53E3\u8FBE\u5230 50",icon:"pop",check:()=>h.colony.pop>=50},{id:"reactor",name:"\u7B2C\u4E8C\u9897\u592A\u9633",desc:"\u70B9\u4EAE\u805A\u53D8\u53CD\u5E94\u5806",icon:"power",check:()=>h.stats.built.reactor>0},{id:"blue",name:"\u84DD\u8272\u5929\u7A7A",desc:"\u5B8C\u6210\u706B\u661F\u5927\u6C14\u6539\u9020",icon:"planet",check:()=>h.terraform>=1},{id:"europa",name:"\u51B0\u4E0B\u4E4B\u6D77",desc:"\u767B\u9646\u6728\u536B\u4E8C\xB7\u6B27\u7F57\u5DF4",icon:"ice",check:()=>at==="europa"},{id:"kepler",name:"\u53CC\u65E5\u4E4B\u5730",desc:"\u62B5\u8FBE\u5F00\u666E\u52D2-442b",icon:"sun",check:()=>at==="kepler"},{id:"civ",name:"\u661F\u9645\u6587\u660E",desc:"\u5EFA\u6210\u6587\u660E\u7EAA\u5FF5\u7891",icon:"monument",check:()=>h.stats.built.monument>0},{id:"relic",name:"\u56DE\u58F0",desc:"\u53D1\u73B0\u7B2C\u4E00\u5904\u9057\u8FF9",icon:"radio",check:()=>bs().found>0},{id:"archaeo",name:"\u8003\u53E4\u5B66\u5BB6",desc:"\u53D1\u73B0\u4E00\u9897\u661F\u7403\u4E0A\u7684\u5168\u90E8\u9057\u8FF9",icon:"book",check:()=>{let n=bs();return n.total>0&&n.found===n.total}},{id:"boss",name:"\u6676\u6BCD\u9668\u843D",desc:"\u5728\u6676\u6F6E\u4E4B\u591C\u51FB\u8D25\u6676\u6BCD",icon:"boss",check:()=>(h.stats.bossKills||0)>0},{id:"fleet",name:"\u65E0\u4EBA\u673A\u8230\u961F",desc:"\u65E0\u4EBA\u673A\u8FD0\u56DE 30 \u6279\u7269\u8D44",icon:"drone",check:()=>(h.stats.droneHauls||0)>=30},{id:"lv3",name:"\u7CBE\u76CA\u6C42\u7CBE",desc:"\u628A\u4E00\u5EA7\u5EFA\u7B51\u5347\u5230 3 \u7EA7",icon:"star",check:()=>h.buildings.some(n=>(n.level||1)>=3)},{id:"buddy",name:"\u597D\u642D\u6863",desc:"\u8BA9\u5C0F\u661F\u626B\u63CF 10 \u6B21",icon:"scanner",check:()=>(h.stats.scans||0)>=10},{id:"helper",name:"\u597D\u90BB\u5C45",desc:"\u5B8C\u6210 10 \u4E2A\u5C45\u6C11\u59D4\u6258",icon:"radio",check:()=>(h.stats.requests||0)>=10},{id:"science",name:"\u79D1\u5B66\u5BB6",desc:"\u5B8C\u6210 6 \u9879\u79D1\u7814",icon:"book",check:()=>Object.keys(h.tech||{}).length>=6},{id:"trader",name:"\u661F\u9645\u5546\u4EBA",desc:"\u5B8C\u6210 10 \u6B21\u661F\u9645\u8D38\u6613",icon:"ship",check:()=>(h.stats.traded||0)>=10},{id:"mail",name:"\u6765\u81EA\u5730\u7403\u7684\u4FE1",desc:"\u6253\u5F00 5 \u4E2A\u8865\u7ED9\u8231",icon:"ship",check:()=>(h.stats.pods||0)>=5},{id:"happy",name:"\u5B89\u5C45\u4E50\u4E1A",desc:"\u5C45\u6C11\u5E78\u798F\u5EA6\u8FBE\u5230 90",icon:"star",check:()=>h.colony.pop>=4&&(h.morale||0)>=90},{id:"fest",name:"\u6B96\u6C11\u5730\u8282",desc:"\u548C\u5C45\u6C11\u4E00\u8D77\u5728\u5E7F\u573A\u770B\u70DF\u82B1",icon:"star",check:()=>(h.stats.festivals||0)>0},{id:"photo",name:"\u6444\u5F71\u5E08",desc:"\u5728\u62CD\u7167\u6A21\u5F0F\u4E2D\u4FDD\u5B58\u4E00\u5F20\u7167\u7247",icon:"camera",check:()=>(h.stats.photos||0)>0},{id:"gather",name:"\u6545\u4E61\u7684\u5149",desc:"\u591C\u91CC\uFF0C\u5C45\u6C11\u4EEC\u805A\u5728\u5E7F\u573A\u4E0A\u770B\u5168\u606F\u5730\u7403",icon:"planet",check:()=>!!h.plazaSeen}],So={};try{So=JSON.parse(localStorage.getItem(ny))||{}}catch{So={}}var J0=[],Q0=0,Dd=0;function iy(n){if(Q0-=n,Dd-=n,Q0<=0){Q0=1;for(let t of Hd){if(So[t.id])continue;let i=!1;try{i=t.check()}catch{i=!1}if(i){So[t.id]=Date.now(),J0.push(t);try{localStorage.setItem(ny,JSON.stringify(So))}catch{}}}}let e=document.getElementById("achv-pop");if(Dd<=0&&e.classList.contains("show")&&e.classList.remove("show"),Dd<=-.6&&J0.length){let t=J0.shift();e.innerHTML=`<div class="ai">${pt(t.icon)}</div><div><div class="k">ACHIEVEMENT UNLOCKED</div><div class="n">${t.name}</div><div class="d">${t.desc}</div></div>`,e.classList.add("show"),Dd=4.5,G.play("achv")}}function $0(){return`<h3>\u6210\u5C31 \xB7 ${Hd.filter(e=>So[e.id]).length} / ${Hd.length}</h3><div class="achv">${Hd.map(e=>`<div class="ach ${So[e.id]?"on":""}"><div class="ai">${pt(e.icon)}</div><div><div class="an">${e.name}</div><div class="ad">${e.desc}</div></div></div>`).join("")}</div>`}var ry=!1,oy=[],ay=[],ly=[];function sy(n,e,t,i,s){let r=new At;r.setAttribute("position",new an(new Float32Array(n*3),3));let o=new fi({size:t,map:Sn(),color:e,transparent:!0,opacity:i,depthWrite:!1,blending:s?Le:ui}),a=new _i(r,o);a.frustumCulled=!1,h.scene.add(a);let l=new Float32Array(n*3);for(let c=0;c<n;c++)l[c*3]=Math.random(),l[c*3+1]=Math.random()*Math.PI*2,l[c*3+2]=Math.random();return{p:a,seed:l,n}}function $T(){if(ry=!0,at==="mars")for(let n=0;n<3;n++){let e=sy(420,14195306,2.4,.45,!1);oy.push({...e,x:0,z:0,vx:0,vz:0,h:40+Math.random()*30,life:0,k:0})}else if(at==="europa"){let n=Vs.slice(0,8).map(e=>({x:e.x+(Math.random()-.5)*e.r*.6,z:e.z+(Math.random()-.5)*e.r*.6}));n.push({x:60,z:70},{x:-90,z:-40},{x:120,z:140});for(let e of n){if(Math.abs(e.x)>ke-200||Math.abs(e.z)>ke-200)continue;let t=sy(500,15267583,2.6,.6,!0);ay.push({...t,x:e.x,z:e.z,y:de(e.x,e.z),t:Math.random()*30,on:0})}}else if(at==="kepler"){let n=new ze(1,12,6,0,Math.PI*2,0,Math.PI/2);for(let e=0;e<34;e++){let t=.45+Math.random()*.4,i=new re().setHSL(t,.9,.6),s=new Z(n,new He({color:i,transparent:!0,opacity:.55,depthWrite:!1,blending:Le})),r=new ri(new ei({map:Sn(),color:i,transparent:!0,depthWrite:!1,blending:Le})),o=new Z(new Wt(.6,3,6,1,!0),s.material);o.position.y=-1.6,o.rotation.x=Math.PI;let a=new ae;a.add(s,r,o),r.scale.setScalar(6);let l=.6+Math.random()*1.2;a.scale.setScalar(l),h.scene.add(a),ly.push({g:a,m:s,s:r,x:(Math.random()-.5)*500,z:(Math.random()-.5)*500,alt:14+Math.random()*30,ph:Math.random()*6,sp:.5+Math.random()})}}}var EP=new S,em=0;function cy(n){ry||$T();let e=h.player.pos,t=performance.now()*.001,i=1-h.time.night;for(let s of oy){if(s.life-=n,s.life<=0){let c=Math.random()*Math.PI*2,d=90+Math.random()*200;s.x=Tt.clamp(e.x+Math.cos(c)*d,-ke+160,ke-160),s.z=Tt.clamp(e.z+Math.sin(c)*d,-ke+160,ke-160);let u=Math.random()*Math.PI*2;s.vx=Math.cos(u)*3,s.vz=Math.sin(u)*3,s.life=40+Math.random()*40,s.h=35+Math.random()*40}s.x+=s.vx*n,s.z+=s.vz*n;let r=Math.min(1,s.life/5,(60-s.life)/5+1)*i*(1-h.storm)*(h.terraform<1?1:.2);s.k+=(r-s.k)*Math.min(1,n),s.p.material.opacity=.45*s.k;let o=s.p.geometry.attributes.position.array,a=de(s.x,s.z);for(let c=0;c<s.n;c++){let d=s.seed,u=(d[c*3]+t*.08*(.6+d[c*3+2]))%1,f=d[c*3+1]+t*(3+(1-u)*2),p=.8+u*u*9+d[c*3+2]*1.5,g=Math.sin(t*.7+u*4)*u*3;o[c*3]=s.x+Math.cos(f)*p+g,o[c*3+1]=a+u*s.h,o[c*3+2]=s.z+Math.sin(f)*p}s.p.geometry.attributes.position.needsUpdate=!0;let l=Math.hypot(e.x-s.x,e.z-s.z);l<8&&s.k>.5&&!h.driving&&(h.player.vel.x+=(e.x-s.x)/l*n*20,h.player.vel.z+=(e.z-s.z)/l*n*20)}em-=n;for(let s of ay){s.t-=n,s.t<=0&&s.on<=0&&(s.on=9,s.t=25+Math.random()*30,Math.hypot(e.x-s.x,e.z-s.z)<120&&G.play("rumble")),s.on-=n;let r=Tt.clamp(Math.min(s.on,9-s.on),0,1.5)/1.5;if(s.p.material.opacity=.6*r,r<=0)continue;let o=s.p.geometry.attributes.position.array,a=70;for(let l=0;l<s.n;l++){let c=s.seed,d=(c[l*3]+t*.35)%1,u=.4+d*9*c[l*3+2]+d*d*4;o[l*3]=s.x+Math.cos(c[l*3+1])*u,o[l*3+1]=s.y+Math.sin(d*Math.PI*.9)*a*(.6+c[l*3+2]*.4),o[l*3+2]=s.z+Math.sin(c[l*3+1])*u}s.p.geometry.attributes.position.needsUpdate=!0,Math.hypot(e.x-s.x,e.z-s.z)<40&&em<=0&&(em=.5,G.play("jet"))}for(let s of ly){s.ph+=n*s.sp,s.x+=Math.sin(s.ph*.3)*n*2,s.z+=Math.cos(s.ph*.23)*n*2,Math.abs(s.x-e.x)>260&&(s.x=e.x-Math.sign(s.x-e.x)*250),Math.abs(s.z-e.z)>260&&(s.z=e.z-Math.sign(s.z-e.z)*250);let r=de(s.x,s.z)+s.alt+Math.sin(s.ph)*2;s.g.position.set(s.x,r,s.z);let o=.75+Math.sin(s.ph*3)*.25;s.m.scale.set(1+Math.sin(s.ph*3)*.12,1-Math.sin(s.ph*3)*.1,1+Math.sin(s.ph*3)*.12);let a=.15+h.time.night*.85;s.m.material.opacity=.5*a*o,s.s.material.opacity=.7*a*o}}var _o=[],im,hy,nm,sm,tm=20;function e3(){im=new pe({color:4086392,roughness:.55,metalness:.05,emissive:661552,emissiveIntensity:.4}),hy=new pe({color:9086132,roughness:.6}),nm=new pe({color:5930912,roughness:.5,transparent:!0,opacity:.85,side:ut,depthWrite:!1}),sm=new ei({map:Sn(),color:734e4,transparent:!0,blending:Le,depthWrite:!1,opacity:.4})}function t3(n){let e=new ae,t=[],i=7,s=e;for(let r=0;r<i;r++){let o=r/(i-1),a=n*.11*Math.sin(Math.PI*(.18+o*.82))+n*.01,l=new ae;l.position.z=r===0?0:-n/i,s.add(l);let c=new Z(new ze(1,20,14),im);c.scale.set(a*1.05,a*.85,n/i*1.3),c.position.z=-n/i*.5,l.add(c);let d=new Z(new ze(1,16,10,0,Math.PI*2,Math.PI*.55,Math.PI*.45),hy);d.scale.copy(c.scale).multiplyScalar(1.01),d.position.copy(c.position),l.add(d);for(let u of[-1,1])for(let f=0;f<2;f++){let p=new ri(sm);p.scale.setScalar(a*.7),p.position.set(u*a*.98,-a*.15+f*a*.3,-n/i*(.3+f*.4)),l.add(p)}if(r===1)for(let u of[-1,1]){let f=new Z(new Ln(1,16),nm);f.scale.set(n*.18,n*.06,1),f.rotation.set(-Math.PI/2,0,u*.4),f.position.set(u*a*1.6,-a*.3,-n/i*.4),l.add(f),l.userData.fins=(l.userData.fins||[]).concat([f])}if(r===i-1){let u=new Z(new Ln(1,16),nm);u.scale.set(n*.16,n*.05,1),u.rotation.x=-Math.PI/2,u.position.z=-n/i*1.1,l.add(u)}t.push(l),s=l}for(let r of[-1,1]){let o=new Z(new ze(n*.012,8,6),new He({color:10485744}));o.position.set(r*n*.075,n*.01,-n*.04),t[0].add(o)}return e.traverse(r=>{r.userData.noAO=!0,r.isMesh&&(r.castShadow=!1)}),{g:e,segs:t}}function dy(n){if(he.id==="kepler"){e3();for(let e=0;e<3;e++){let t=70+e*25,i=t3(t);n.add(i.g),_o.push({...i,len:t,R:200+e*110,alt:130+e*50,ang:e*2.1,sp:(.018+Math.random()*.01)*(e%2?-1:1),cx:(Math.random()-.5)*200,cz:(Math.random()-.5)*200,ph:Math.random()*6,scanned:!1})}}}function uy(){return _o}function fy(n,e){let t=0;for(let i of _o)i.scanned||i.g.position.distanceTo(n)<e+i.alt&&(i.scanned=!0,t++);return t}function py(n){if(!_o.length)return;let e=performance.now()*.001,t=h.time.night;sm.opacity=.15+t*.85,im.emissiveIntensity=.3+t*1.2;for(let i of _o){i.ang+=i.sp*n;let s=i.cx+Math.cos(i.ang)*i.R,r=i.cz+Math.sin(i.ang)*i.R,o=i.alt+Math.sin(e*.13+i.ph)*12;i.g.position.set(s,o,r);let a=-Math.sin(i.ang)*Math.sign(i.sp),l=Math.cos(i.ang)*Math.sign(i.sp);i.g.rotation.y=Math.atan2(a,l),i.g.rotation.z=-Math.sign(i.sp)*.12,i.segs.forEach((c,d)=>{c.rotation.x=Math.sin(e*.9+i.ph-d*.7)*.07*(d?1:.3),c.rotation.y=Math.sin(e*.5+i.ph-d*.5)*.03,c.userData.fins&&c.userData.fins.forEach((u,f)=>{u.rotation.z=(f?1:-1)*(.4+Math.sin(e*.9+i.ph)*.25)})})}if(tm-=n,tm<=0){tm=25+Math.random()*35;let i=_o[Math.floor(Math.random()*_o.length)],s=i.g.position.distanceTo(h.player.pos);if(s<500){let r=.05*(1-s/500),o=90+Math.random()*60;G.tone(o,3.2,"sine",r,1.6),G.tone(o*1.5,2.6,"triangle",r*.4,.7,1.1),G.tone(o*2.01,3.5,"sine",r*.5,.6,2.2)}}}var Ts,rm,vc,om,To,am,Ya=[],xc=0,gc=-1,lm=20,Ud=0,Or=new S,my=new S,gy=new Set,yc=140;function xy(){Ts=new ae;let n=new Z(new ze(.32,20,14),y.white),e=new Z(new De(.33,.04,8,28),y.orange);e.rotation.x=Math.PI/2;let t=new Z(new ze(.2,16,10,-Math.PI*.35,Math.PI*.7,Math.PI*.3,Math.PI*.4),new pe({color:660504,roughness:.1,metalness:.6}));t.position.z=.15,t.rotation.y=Math.PI,rm=ve(8382207,.45,null,0,.02,.33),vc=new Z(new De(.5,.015,6,40),new He({color:8382207,transparent:!0,opacity:.6})),vc.rotation.x=Math.PI/2;let i=new Z(new Wt(.05,.25,6),y.metal);i.position.y=.38,Ts.add(n,e,t,rm,vc,i,ve(16738874,.25,null,0,.5,0)),Ts.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),Ts.scale.setScalar(.8),om=new Ci(12578815,0,22,1.6),Ts.add(om),h.scene.add(Ts);let s=h.player.pos;Or.set(s.x+1.5,s.y+2.2,s.z+1.5),Ts.position.copy(Or),am=new He({color:8382207,transparent:!0,opacity:0,side:ut,depthWrite:!1,blending:Le}),To=new Z(new nn(.94,1,96),am),To.rotation.x=-Math.PI/2,To.visible=!1,h.scene.add(To)}function qa(n,e,t=!0){t&&gy.has(n)||lm>0&&t||(gy.add(n),lm=45,Lt("\u5C0F\u661F \xB7 \u4F19\u4F34\u673A\u5668\u4EBA",e))}var Nd;function n3(){if(Nd)return Nd;let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d");return e.translate(32,32),e.rotate(Math.PI/4),e.strokeStyle="#fff",e.lineWidth=5,e.strokeRect(-14,-14,28,28),e.fillStyle="rgba(255,255,255,.35)",e.fillRect(-9,-9,18,18),Nd=new Zt(n),Nd}function i3(){if(xc>0){h.events.emit("toast",`\u626B\u63CF\u51B7\u5374\u4E2D \xB7 ${Math.ceil(xc)} \u79D2`),G.play("deny");return}xc=12,gc=0,G.play("scan");for(let r of Ya)h.scene.remove(r.s);Ya=[];let n=h.player.pos,e={};for(let r of h.nodes){let o=Math.hypot(r.x-n.x,r.z-n.z);if(o>yc)continue;let a=vs[r.type],l=new ri(new ei({map:n3(),color:new re(a[0],a[1],a[2]),transparent:!0,depthTest:!1,depthWrite:!1,opacity:0,sizeAttenuation:!1}));l.scale.setScalar(r.type==="titanium"?.05:.036),l.position.set(r.x,r.y+3,r.z),l.renderOrder=999,h.scene.add(l),Ya.push({s:l,delay:o/90,life:10}),e[r.type]=(e[r.type]||0)+1}let t={iron:"\u94C1\u77FF",silicon:"\u7845\u6676",ice:"\u6C34\u51B0",titanium:"\u949B\u77FF"},i=Object.entries(e).map(([r,o])=>`${t[r]} ${o}`).join(" \xB7 ");h.events.emit("toast",i?`\u626B\u63CF\u5B8C\u6210 \xB7 ${i}`:"\u626B\u63CF\u5B8C\u6210 \xB7 \u9644\u8FD1\u6CA1\u6709\u77FF\u85CF");let s=fy(n,yc);s&&(h.rp=(h.rp||0)+30*s,h.stats.whales=(h.stats.whales||0)+s,Lt("\u5C0F\u661F",s>1?`\u626B\u5230\u4E86 ${s} \u5934\u5929\u9CB8\uFF01\u5B83\u4EEC\u5728\u7528\u6B21\u58F0\u6CE2\u4EA4\u8C08\u2026\u2026\u8BB0\u5F55\u5B8C\u6BD5\uFF0C\u79D1\u7814\u70B9 +${30*s}\u3002`:"\u626B\u5230\u4E00\u5934\u5929\u9CB8\uFF01\u4F53\u957F\u56DB\u5341\u591A\u7C73\uFF0C\u9760\u4F53\u5185\u7684\u8F7B\u8D28\u6C14\u56CA\u6D6E\u5728\u7A7A\u4E2D\u3002\u8BB0\u5F55\u5B8C\u6BD5\uFF0C\u79D1\u7814\u70B9 +30\u3002")),h.stats.scans=(h.stats.scans||0)+1}function yy(n){if(!Ts)return;let e=h.player,t=performance.now()*.001;xc=Math.max(0,xc-n),lm-=n,Me.hit("KeyQ")&&!h.menuOpen&&!e.dead&&i3();let i=(h.driving,e.yaw),s=new S(Math.cos(i),0,-Math.sin(i)),r=new S(-Math.sin(i),0,-Math.cos(i)),o=e.pos.clone().addScaledVector(s,h.driving?3.5:3).addScaledVector(r,h.driving?2:5.5);o.y=Math.max(e.pos.y+1.55,de(o.x,o.z)+.8)+Math.sin(t*2)*.12,h.driving&&(o.y+=2.2);let a=Or.distanceTo(o)>30?1:Math.min(1,n*3);my.lerp(o.clone().sub(Or).multiplyScalar(4),a),Or.addScaledVector(my,n),Or.distanceTo(o)>40&&Or.copy(o),Ts.position.copy(Or);let l=e.pos.clone().addScaledVector(e.fwd,12);if(l.y+=1.5,Ts.lookAt(l),vc.rotation.z+=n*1.5,vc.rotation.x=Math.PI/2+Math.sin(t*1.3)*.3,rm.material.opacity=.75+Math.sin(t*4)*.25,om.intensity=h.time.night>.4?18*h.time.night:0,gc>=0){gc+=n;let d=gc*90;To.visible=d<yc,To.position.set(e.pos.x,e.pos.y+.6,e.pos.z),To.scale.setScalar(Math.max(.1,d)),am.opacity=.7*(1-d/yc),d>=yc&&(gc=-1)}for(let d=Ya.length-1;d>=0;d--){let u=Ya[d];u.delay-=n,!(u.delay>0)&&(u.life-=n,u.s.material.opacity=Math.min(1,(10-u.life)*3,u.life/2)*(.75+Math.sin(t*5+d)*.25),u.life<=0&&(h.scene.remove(u.s),u.s.material.dispose(),Ya.splice(d,1)))}Ud=Math.hypot(e.vel.x,e.vel.z)>.5?0:Ud+n,!e.inLife&&e.o2<e.maxO2*.3&&qa("o2"+Math.floor(t/120),"\u6C27\u6C14\u4E0D\u591A\u4E86\uFF01\u6700\u8FD1\u7684\u8865\u6C27\u70B9\u5728\u7F57\u76D8\u4E0A\u90A3\u4E2A\u623F\u5B50\u56FE\u6807\u7684\u65B9\u5411\u3002",!1),h.time.night>.6&&!e.flashlight&&qa("dark","\u597D\u9ED1\u2026\u2026\u6309 F \u6253\u5F00\u624B\u7535\u7B52\u5427\u3002\u6211\u4E5F\u4F1A\u5E2E\u4F60\u7167\u7740\u70B9\u3002"),h.enemies.some(d=>!d.dead&&!d.guardian&&d.pos.distanceTo(e.pos)<25)&&qa("enemy"+Math.floor(t/90),"\u68C0\u6D4B\u5230\u9508\u8680\u86DB\u9760\u8FD1\uFF01\u5C0F\u5FC3\uFF01",!1),h.nodes.some(d=>d.type==="titanium"&&Math.hypot(d.x-e.pos.x,d.z-e.pos.z)<40)&&qa("ti","\u9644\u8FD1\u6709\u949B\u77FF\u7684\u4FE1\u53F7\uFF01\u7D2B\u8272\u7684\u90A3\u79CD\uFF0C\u5F88\u7A00\u6709\u54E6\u3002"),Ud>40&&(Ud=-200,qa("idle"+Math.floor(t/300),vy[at][Math.floor(Math.random()*vy[at].length)],!1)),h.stats.scans===void 0&&h.time.day>=1&&t>30&&qa("scanhint","\u6211\u80FD\u626B\u63CF\u9644\u8FD1\u7684\u77FF\u85CF\u2014\u2014\u6309 Q \u8BD5\u8BD5\u3002")}var vy={mars:["\u4F60\u77E5\u9053\u5417\uFF1F\u706B\u661F\u4E0A\u7684\u4E00\u5929\u6BD4\u5730\u7403\u957F 37 \u5206\u949F\u3002","\u706B\u661F\u7684\u65E5\u843D\u662F\u84DD\u8272\u7684\u3002\u7B49\u508D\u665A\u7684\u65F6\u5019\u62AC\u5934\u770B\u770B\u5427\u3002","\u90A3\u5EA7\u6700\u9AD8\u7684\u5C71\u53EB\u5965\u6797\u5E15\u65AF\uFF0C\u662F\u5730\u7403\u73E0\u5CF0\u7684\u4E24\u500D\u591A\u9AD8\u3002","\u6211\u7684\u6570\u636E\u5E93\u91CC\u6709\u4E00\u9996\u5730\u7403\u7684\u6B4C\uFF0C\u53EB\u300A\u6708\u4EAE\u4EE3\u8868\u6211\u7684\u5FC3\u300B\u3002\u8981\u6211\u54FC\u7ED9\u4F60\u542C\u5417\uFF1F\u2026\u2026\u7B97\u4E86\uFF0C\u6211\u8DD1\u8C03\u3002"],europa:["\u6728\u661F\u597D\u5927\u2026\u2026\u611F\u89C9\u5B83\u968F\u65F6\u4F1A\u6389\u4E0B\u6765\u3002","\u51B0\u5C42\u4E0B\u9762\u7684\u6D77\uFF0C\u53EF\u80FD\u6BD4\u5730\u7403\u6240\u6709\u7684\u6D77\u52A0\u8D77\u6765\u8FD8\u8981\u591A\u3002","\u8FD9\u91CC\u7684\u91CD\u529B\u5F88\u5C0F\uFF0C\u8DF3\u9AD8\u4E00\u70B9\u6CA1\u5173\u7CFB\u7684\u3002"],kepler:["\u4E24\u4E2A\u592A\u9633\uFF01\u5F71\u5B50\u90FD\u6709\u4E24\u4E2A\uFF01","\u90A3\u4E9B\u53D1\u5149\u7684\u6C34\u6BCD\u2026\u2026\u5B83\u4EEC\u662F\u5728\u770B\u6211\u4EEC\u5417\uFF1F","\u7A7A\u6C14\u91CC\u7684\u6C27\u6C14\u5DF2\u7ECF\u6709 14% \u4E86\u3002\u518D\u8FC7\u51E0\u5341\u5E74\uFF0C\u4E5F\u8BB8\u5C31\u80FD\u6458\u4E0B\u5934\u76D4\u4E86\u3002"]};var yn=null,My=new mn,cm=new Pn,Mc=new S;function s3(){let n=new ae,e=new ae;n.add(e);let t=(f,p,g,x,v,m=e,E=0,w=0,M=0)=>{let L=new Z(f,p);return L.position.set(g,x,v),L.rotation.set(E,w,M),L.castShadow=!0,L.receiveShadow=!0,m.add(L),L},i=(f,p,g,x=.08)=>new La(f,p,g,2,x),s=(f,p,g,x,v=e)=>{let m=p.clone().sub(f),E=t(new Ge(g,g,m.length(),8),x,0,0,0,v);return E.position.copy(f).add(p).multiplyScalar(.5),E.quaternion.setFromUnitVectors(new S(0,1,0),m.normalize()),E},r=(f,p,g)=>new S(f,p,g);t(i(2.5,.35,4.8,.1),y.dark,0,.85,0),t(i(2.6,.75,3.4,.18),y.white,0,1.35,.5),t(i(2.64,.14,3.44,.05),y.orange,0,1.62,.5),t(i(2.2,.5,1.2,.12),y.panel,0,1.25,-1.9,e,-.25,0,0);let o=t(new ze(1.15,32,16,0,Math.PI*2,0,Math.PI/2),y.glass,0,1.72,-.75);o.scale.set(1,.8,1.15),o.castShadow=!1;for(let f=0;f<5;f++)t(new De(1.16,.035,6,24,Math.PI),y.metal,0,1.72,-.75,e,0,f*Math.PI/5,0).scale.set(1,.8,1.15);for(let f of[-1.15,1.15])s(r(f,1.7,.6),r(f*.9,2.75,.9),.06,y.metal),s(r(f,1.7,2.1),r(f*.9,2.75,1.9),.06,y.metal);s(r(-1.04,2.75,.9),r(1.04,2.75,.9),.06,y.metal),s(r(-1.04,2.75,1.9),r(1.04,2.75,1.9),.06,y.metal),s(r(-1.04,2.75,.9),r(-1.04,2.75,1.9),.06,y.metal),s(r(1.04,2.75,.9),r(1.04,2.75,1.9),.06,y.metal),t(i(1.8,.16,.22,.05),y.dark,0,2.82,.9);let a=[];for(let f=0;f<4;f++)t(new Ln(.07,12),y.lamp,-.6+f*.4,2.82,.78,e,0,Math.PI,0),a.push(ve(16773853,.9,e,-.6+f*.4,2.82,.75));for(let f of[-.85,.85])a.push(ve(16773853,1.2,e,f,1.2,-2.5));for(let f of[-.85,.85])t(i(.35,.18,.08,.04),y.lamp,f,1.2,-2.42);t(i(2.3,.08,1.5,.03),y.metal,0,1.78,1.6);for(let[f,p,g]of[[-.5,1.4,.6],[.4,1.7,.7],[.5,1.1,.45]])t(i(g,g*.8,g,.04),y.dark,f,1.82+g*.4,p);t(new Ge(.02,.02,1.6,4),y.metal,.9,3.5,1.9);let l=ve(16728128,.6,e,.9,4.3,1.9);for(let f=0;f<3;f++)t(i(.06,.06,.5,.02),y.metal,1.33,.75+f*.28,-.2);t(i(.1,.4,1,.04),y.orange,-1.32,1.3,1);let c=[],d=new De(.46,.2,12,28);for(let f of[-1.65,0,1.65])for(let p of[-1.5,1.5]){let g=new ae;g.position.set(p,.62,f),n.add(g);let x=t(d,y.rubber,0,0,0,g,0,Math.PI/2,0);for(let v=0;v<14;v++){let m=v/14*Math.PI*2;t(new Ke(.42,.06,.1),y.rubber,0,Math.cos(m)*.64,Math.sin(m)*.64,g,m,0,0)}t(new Ge(.34,.34,.3,20),y.metal,0,0,0,g,0,0,Math.PI/2);for(let v=0;v<5;v++)t(new Ke(.32,.06,.06),y.dark,p>0?.16:-.16,0,0,g,v*Math.PI/5,0,0).scale.set(.3,1,9);t(new Ge(.1,.1,.34,10),y.chrome,0,0,0,g,0,0,Math.PI/2),s(r(p*.62,.95,f),r(p*.95,.66,f),.07,y.metal,n),s(r(p*.7,1.15,f+.3),r(p*.95,.75,f),.04,y.chrome,n),c.push(g)}let u=new ca(16773853,0,60,.5,.5,1.2);return u.position.set(0,1.2,-2.4),u.target.position.set(0,0,-20),e.add(u,u.target),{g:n,body:e,wheels:c,tip:l,lamp:u,heads:a}}function kd(n,e,t=0){if(yn)return yn;let i=s3();return h.scene.add(i.g),yn={...i,x:n,z:e,y:de(n,e),h:t,speed:0,vy:0,lookYaw:0,pitch:-.05,spin:0,hitT:0,air:!1},yn.collider=h.colliders.add({x:n,z:e,r:2,kind:"rover"}),hm(0),yn}function Od(){return yn}function Ey(){return yn?{x:+yn.x.toFixed(1),z:+yn.z.toFixed(1),h:+yn.h.toFixed(2)}:null}function zd(n,e){return de(n,e)}function hm(n){let e=yn,t=Math.sin(e.h),i=Math.cos(e.h),s=-t,r=-i,o=i,a=-t,l=zd(e.x+s*1.8,e.z+r*1.8),c=zd(e.x-s*1.8,e.z-r*1.8),d=zd(e.x-o*1.3,e.z-a*1.3),u=zd(e.x+o*1.3,e.z+a*1.3),f=Math.atan2(l-c,3.6),p=Math.atan2(u-d,2.6);e.g.position.set(e.x,e.y,e.z),cm.set(e.air?e.g.rotation.x:f,e.h,e.air?e.g.rotation.z:-p,"YXZ"),e.air||e.g.rotation.copy(cm),e.spin+=e.speed*n/.55;for(let g of e.wheels)g.rotation.x=-e.spin;return(l+c+d+u)/4}function wy(){yn&&(h.driving=!0,yn.lookYaw=0,yn.pitch=-.08,h.colliders.remove(yn.collider),G.play("place"))}function dm(n){let e=yn;if(!e)return;h.driving=!1,G.engine(0);let t=Math.cos(e.h),i=Math.sin(e.h),s=e.x+t*3,r=e.z-i*3;h.colliders.overlaps(s,r,.5)&&(s=e.x-t*3,r=e.z+i*3),n.pos.set(s,de(s,r),r),n.vel.set(0,0,0),n.yaw=e.h+e.lookYaw,n.pitch=e.pitch,e.speed=0,e.lamp.intensity=0,e.collider=h.colliders.add({x:e.x,z:e.z,r:2,kind:"rover"})}function by(n,e,t){if(!yn)return;let i=yn;if(i.tip.visible=Math.sin(performance.now()*.005)>0,!h.driving){i.y=hm(0);return}h.locked&&(i.lookYaw=Tt.clamp(i.lookYaw-Me.dx*Me.sens,-2.4,2.4),i.pitch=Tt.clamp(i.pitch-Me.dy*Me.sens,-1,.9));let s=(Me.down("KeyW")||Me.down("ArrowUp")?1:0)-(Me.down("KeyS")||Me.down("ArrowDown")?1:0),r=(Me.down("KeyA")||Me.down("ArrowLeft")?1:0)-(Me.down("KeyD")||Me.down("ArrowRight")?1:0),o=(Me.down("ShiftLeft")?28:17)*(Xt("terrain")?1.3:1);i.air||(s>0?i.speed+=(i.speed<0?22:11)*n:s<0?i.speed-=(i.speed>0?22:7)*n:i.speed*=1-.7*n,Me.down("Space")&&(i.speed*=1-3.5*n),i.speed=Tt.clamp(i.speed,-7,o),i.speed>o&&(i.speed-=20*n),i.h+=r*n*1.5*Tt.clamp(i.speed/5,-1,1)),Mc.set(-Math.sin(i.h),0,-Math.cos(i.h)),h.stats.driven=(h.stats.driven||0)+Math.abs(i.speed)*n,i.x=Tt.clamp(i.x+Mc.x*i.speed*n,-ke+125,ke-125),i.z=Tt.clamp(i.z+Mc.z*i.speed*n,-ke+125,ke-125);for(let c of h.colliders.query(i.x,i.z)){c.kind==="flora"&&Math.abs(i.speed)>0;let d=i.x-c.x,u=i.z-c.z,f=Math.hypot(d,u),p=c.r+1.9;if(f<p&&f>.001){if(c.kind==="rock"&&c.r<1.3)continue;i.x=c.x+d/f*p,i.z=c.z+u/f*p,Math.abs(i.speed)>5&&(G.play("land"),oe.dustPuff(new S(i.x,i.y+1,i.z),6,2)),i.speed*=-.25}}if(i.hitT-=n,Math.abs(i.speed)>6&&i.hitT<=0)for(let c of h.enemies)c.dead||Math.hypot(c.pos.x-i.x,c.pos.z-i.z)<2.6+c.scale&&(xo(c,Math.abs(i.speed)*4,"player"),i.hitT=.4,i.speed*=.7,oe.burst(new S(c.pos.x,c.pos.y+1,c.pos.z),[1,.5,.2],20,6));let a=de(i.x,i.z);if(i.air)i.vy-=he.gravity*n,i.y+=i.vy*n,i.y<=a&&(i.y=a,i.air=!1,i.vy<-5&&(G.play("land"),oe.dustPuff(new S(i.x,i.y,i.z),14,3)),i.vy=0);else{let c=i.y+i.vy*n-.5*he.gravity*n*n;if(a<c-.25&&i.vy>1.5&&Math.abs(i.speed)>12)i.air=!0,i.vy=Math.min(i.vy,7),i.y=c;else{let d=(a-i.y)/Math.max(n,.001);i.vy=i.vy*.6+d*.4,i.y=a}}if(hm(n),Math.abs(i.speed)>4&&!i.air&&Math.random()<.6){let c=new S(i.x-Mc.x*2.5+(Math.random()-.5)*2,i.y+.3,i.z-Mc.z*2.5);oe.dustPuff(c,1,.5)}i.lamp.intensity=h.time.night>.3?80:0;for(let c of i.heads)c.visible=h.time.night>.3;My.setFromEuler(cm.set(i.pitch,i.lookYaw,0,"YXZ")),t.quaternion.copy(i.body.getWorldQuaternion(new mn)).multiply(My);let l=new S(0,2.15,-.7).applyQuaternion(i.g.quaternion).add(i.g.position);t.position.copy(l),t.getWorldDirection(e.fwd),e.pos.set(i.x,i.y,i.z),e.vel.set(0,0,0),e.inLife=!0,e.o2=Math.min(e.maxO2,e.o2+20*n),e.energy=Math.min(100,e.energy+10*n),e.hurtT=Math.max(0,e.hurtT-n),G.engine(Math.abs(i.speed)/28)}function Sy(){return yn?Math.round(Math.abs(yn.speed)*3.6):0}var ja,fm;function r3(){ja||(fm=new He({color:16758364,transparent:!0,opacity:.35,blending:Le,depthWrite:!1,side:ut,fog:!1}),ja=new Z(new Ge(.6,1.2,160,16,1,!0),fm),ja.frustumCulled=!1,h.scene.add(ja))}function o3(){r3();let n=h.waypoint;ja.visible=!!n,n&&(ja.position.set(n.x,de(n.x,n.z)+80,n.z),fm.opacity=.22+Math.sin(performance.now()*.004)*.08,Math.hypot(h.player.pos.x-n.x,h.player.pos.z-n.z)<6&&(h.waypoint=null,h.events.emit("toast","\u2713 \u5DF2\u5230\u8FBE\u5BFC\u822A\u70B9"),G.play("objective")))}var Fd=[],pm=-1,Ec=0,um=null,_y=[[1,.6,.2],[.5,.9,1],[1,.4,.7],[.7,1,.5],[1,.9,.4],[.8,.6,1]];function a3(n){let e=_y[Math.floor(Math.random()*_y.length)];Fd.push({pos:new S(n.x+(Math.random()-.5)*6,n.y+2,n.z+(Math.random()-.5)*6),vel:new S((Math.random()-.5)*4,34+Math.random()*10,(Math.random()-.5)*4),t:1.3+Math.random()*.6,c:e}),G.play("jet")}function l3(n){let t=16+Math.random()*8;for(let i=0;i<90;i++){let s=Math.random()*2-1,r=Math.random()*6.283,o=Math.sqrt(1-s*s);oe.firework(n.pos,o*Math.cos(r)*t,s*t,o*Math.sin(r)*t,n.c)}G.play("kill")}function Ty(n){o3();let e=h.time.t;if(Ec<=0&&h.time.day%5===0&&pm!==h.time.day&&e>.74&&e<.8&&h.colony.pop>=4&&(um=h.buildings.find(t=>t.type==="plaza"&&t.powered),um&&(pm=h.time.day,Ec=60,h.stats.festivals=(h.stats.festivals||0)+1,h.events.emit("festival"),Lt("\u82CF\u5FF5 \xB7 \u6559\u5E08",`\u4ECA\u5929\u662F\u7B2C ${h.time.day} \u4E2A\u706B\u661F\u65E5\u2014\u2014\u6B96\u6C11\u5730\u8282\uFF01\u5927\u5BB6\u90FD\u5230\u5E7F\u573A\u4E0A\u6765\u4E86\uFF0C\u5B69\u5B50\u4EEC\u8BF4\u8981\u653E\u70DF\u82B1\u7ED9\u5730\u7403\u770B\u3002`))),Ec>0){Ec-=n,h.festival=!0;let t=um;t&&Math.random()<n*1.6&&a3({x:t.x,y:t.y,z:t.z})}else h.festival=!1;for(let t=Fd.length-1;t>=0;t--){let i=Fd[t];i.t-=n,i.vel.y-=9*n,i.pos.addScaledVector(i.vel,n);for(let s=0;s<3;s++)oe.trail(i.pos,[1,.85,.6],1.6);i.t<=0&&(l3(i),Fd.splice(t,1))}}function Ry(){Ec=0,pm=-1,h.time.day=5,h.time.t=.745}var Rs=null,Ay=[],Cy=[],wc=0,Js,mm,Bd,c3={mars:[-420,-380],europa:[400,-420],kepler:[-380,420]}[at]||[-420,-380],Ro=2400;function h3(){Rs=new ae;let[n,e]=c3,t=de(n,e);Rs.position.set(n,t-2,e);let i=(a,l,c,d,u)=>{let f=new Z(a,l);return f.position.set(c,d,u),f.castShadow=!0,Rs.add(f),f};for(let a=0;a<4;a++)i(new Ge(38-a*8,42-a*8,10,6),a%2?y.white:y.panel,0,5+a*10,0);for(let a=0;a<6;a++){let l=a*Math.PI/3,c=new S(Math.cos(l)*46,0,Math.sin(l)*46),d=new S(0,120,0),u=d.clone().sub(c),f=i(new Ge(2.2,3.2,u.length(),8),y.metal,0,0,0);f.position.copy(c).add(d).multiplyScalar(.5),f.quaternion.setFromUnitVectors(new S(0,1,0),u.normalize())}i(new Ge(6,14,160,6),y.white,0,120,0);let s=new He({color:10477823,transparent:!0,opacity:.55,fog:!1,blending:Le,depthWrite:!1});for(let a=0;a<3;a++){let l=a*Math.PI*2/3;i(new Ge(.9,1.4,Ro,6),s,Math.cos(l)*3,200+Ro/2,Math.sin(l)*3).castShadow=!1}let r=new pe({color:2240576,metalness:.8,roughness:.4,fog:!1});i(new Ge(1.6,1.6,Ro,8),r,0,200+Ro/2,0);for(let a=260;a<Ro;a+=180)Cy.push(ve(16726570,18,Rs,0,a,0));for(let a=0;a<4;a++){let l=new ae,c=new Z(new Ge(7,7,10,12),new pe({color:15262940,metalness:.3,roughness:.5,fog:!1}));l.add(c,ve(10477823,40,null,0,0,0)),Rs.add(l),Ay.push({g:l,t:a/4,dir:a%2?1:-1})}Js=new ae,Js.position.y=200+Ro,Rs.add(Js);let o=new pe({color:9080729,metalness:.8,roughness:.35,emissive:1122867,fog:!1});mm=new Z(new De(160,9,12,96),o),mm.rotation.x=Math.PI/2,Js.add(mm),Bd=new Z(new De(110,5,10,80),o),Bd.rotation.x=Math.PI/2,Bd.position.y=-40,Js.add(Bd);for(let a=0;a<6;a++){let l=new Z(new Ge(2,2,160,6),o);l.rotation.z=Math.PI/2,l.rotation.y=a*Math.PI/6,Js.add(l)}Js.add(new Z(new ze(30,24,16),o));for(let a=0;a<24;a++){let l=a/24*Math.PI*2;Js.add(ve(a%2?16767392:10477823,30,null,Math.cos(l)*160,0,Math.sin(l)*160))}Rs.scale.y=.001,h.scene.add(Rs)}function Py(n){if(!Rs){if((h.cityLevel||0)<3)return;h3(),wc=h.megaSeen?1:0,h.megaSeen||(h.megaSeen=!0,G.play("rumble"),Lt("\u65B9\u821F \xB7 AI","\u8F68\u9053\u5929\u68AF\u5408\u9F99\u3002\u4ECE\u4ECA\u5929\u8D77\uFF0C\u6B96\u6C11\u5730\u4E0E\u8F68\u9053\u4E4B\u95F4\u53EA\u9694\u4E00\u90E8\u7535\u68AF\u3002\u62AC\u5934\u770B\u2014\u2014\u5B83\u5C31\u5728\u5730\u5E73\u7EBF\u4E0A\u3002"),h.events.emit("toast","\u8F68\u9053\u5929\u68AF\u5B8C\u5DE5"))}wc<1&&(wc=Math.min(1,wc+n/12),Rs.scale.y=Math.max(.001,1-Math.pow(1-wc,3)));let e=performance.now()*.001;for(let t of Ay)t.t+=n*.012*t.dir,t.t>1&&(t.t=1,t.dir=-1),t.t<0&&(t.t=0,t.dir=1),t.g.position.y=210+t.t*(Ro-20);Cy.forEach((t,i)=>{t.visible=Math.sin(e*2+i*.6)>.2}),Js.rotation.y+=n*.02}var d3="attribute vec2 p; void main(){ gl_Position = vec4(p, 0.0, 1.0); }",u3=`precision highp float;
uniform vec2 uR; uniform float uT, uK, uE;
float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
// \u89D2\u5411\u5468\u671F\u566A\u58F0\uFF1Ax \u65B9\u5411\u4EE5 P \u4E3A\u5468\u671F\uFF0C\u907F\u514D atan \u63A5\u7F1D
float n(vec2 p, float P){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  vec2 i1 = vec2(mod(i.x + 1.0, P), i.y); i.x = mod(i.x, P);
  return mix(mix(h(i), h(vec2(i1.x, i.y)), f.x), mix(h(i+vec2(0,1)), h(vec2(i1.x, i.y+1.0)), f.x), f.y); }
void main(){
  vec2 uv = (gl_FragCoord.xy - 0.5*uR) / uR.y;
  float r = length(uv), a = atan(uv.y, uv.x);
  float speed = 0.6 + uK * 5.0;
  // \u96A7\u9053\u5750\u6807\uFF1A\u8D8A\u9760\u4E2D\u5FC3\u8D8A\u8FDC
  float z = 0.35 / max(r, 0.02) + uT * speed;
  float u = a / 6.28318 + 0.5;
  // \u62C9\u957F\u7684\u661F\u5149\u6761\u7EB9\uFF08\u7EC6\u800C\u9510\u5229\uFF09
  float s1 = pow(n(vec2(u * 180.0, z * 0.5), 180.0), 22.0) * 4.0;
  float s2 = pow(n(vec2(u * 96.0, z * 1.1 + 3.0), 96.0), 16.0) * 2.0;
  // \u7F13\u6162\u65CB\u8F6C\u7684\u6C14\u4F53\u58C1
  float sw = z * 0.05;
  float wall = n(vec2((u + sw) * 6.0, z * 0.5), 6.0) * n(vec2((u - sw) * 12.0, z * 1.3), 12.0);
  vec3 gas = mix(vec3(0.04, 0.1, 0.3), vec3(0.8, 0.4, 0.16), smoothstep(0.15, 0.55, wall)) * wall * 0.9;
  float edge = smoothstep(0.0, 0.5, r);
  vec3 col = gas * edge * (0.4 + uK) + vec3(0.75, 0.88, 1.0) * (s1 + s2) * edge * smoothstep(0.02, 0.25, r);
  // \u4E2D\u5FC3\uFF1A\u866B\u6D1E\u51FA\u53E3\uFF0C\u5E26\u5F15\u529B\u900F\u955C\u5149\u73AF
  float core = exp(-r * r * (60.0 - uE * 50.0)) * (0.6 + uE * 3.0);
  float ring = exp(-pow((r - 0.12 - uE * 0.25) * 30.0, 2.0)) * (0.5 + uE);
  col += vec3(1.0, 0.92, 0.8) * core + vec3(0.7, 0.85, 1.0) * ring;
  // \u6697\u89D2
  col *= 1.0 - smoothstep(0.6, 1.3, r) * 0.6;
  col = col / (1.0 + col);
  gl_FragColor = vec4(pow(col, vec3(0.85)), 1.0);
}`;function Iy(n,e,t=7){let i=document.createElement("canvas");i.id="warp",document.body.appendChild(i);let s=document.createElement("div");s.id="warp-cap",s.innerHTML=n.map((L,A)=>`<p style="animation-delay:${.8+A*1.1}s">${L}</p>`).join(""),document.body.appendChild(s);let r=document.createElement("div");r.id="warp-flash",document.body.appendChild(r);let o=i.getContext("webgl"),a=()=>{r.classList.add("on"),setTimeout(e,650)};if(!o){setTimeout(a,t*1e3);return}let l=(L,A)=>{let P=o.createShader(L);return o.shaderSource(P,A),o.compileShader(P),P},c=o.createProgram();o.attachShader(c,l(o.VERTEX_SHADER,d3)),o.attachShader(c,l(o.FRAGMENT_SHADER,u3)),o.linkProgram(c),o.useProgram(c);let d=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,d),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),o.STATIC_DRAW);let u=o.getAttribLocation(c,"p");o.enableVertexAttribArray(u),o.vertexAttribPointer(u,2,o.FLOAT,!1,0,0);let f=L=>o.getUniformLocation(c,L),p=f("uR"),g=f("uT"),x=f("uK"),v=f("uE"),m=performance.now(),E=0,w=m,M=!1;(function L(A){let P=Math.min(.05,(A-w)/1e3);w=A;let I=(A-m)/1e3,_=Math.min(1,I/t),b=Math.min(1,1280/innerWidth),H=Math.round(innerWidth*b),O=Math.round(innerHeight*b);(i.width!==H||i.height!==O)&&(i.width=H,i.height=O),o.viewport(0,0,H,O);let F=Math.min(1,I/1.8)*(1-Math.max(0,_-.85)*2);E+=P*(.5+F*1.2),o.uniform2f(p,H,O),o.uniform1f(g,E),o.uniform1f(x,F),o.uniform1f(v,Math.max(0,(_-.7)/.3)),o.drawArrays(o.TRIANGLES,0,3),_>=1&&!M&&(M=!0,a()),(!M||I<t+1)&&requestAnimationFrame(L)})(m)}var Ao=[],gm=40,Hy={value:0},Ly=(()=>{let n=[];for(let e=0;e<=24;e++){let t=e/24;n.push(new $(1.8+Math.pow(t,1.5)*13,t*75))}return new pi(n,48,0,Math.PI*2)})();function Dy(n){return new ot({uniforms:{uT:Hy,uC:{value:new re(n)},uA:{value:0},uSeed:{value:Math.random()*10}},vertexShader:`uniform float uT, uSeed; varying vec2 vUv; varying float vF; varying vec3 vW;
      void main(){ vUv = uv; vec3 p = position; float k = p.y / 70.0;
        // \u6F0F\u6597\u968F\u9AD8\u5EA6\u6446\u52A8
        p.x += sin(k * 3.0 + uT * 0.7 + uSeed) * k * 6.0; p.z += cos(k * 2.3 + uT * 0.5 + uSeed) * k * 5.0;
        vec4 mv = modelViewMatrix * vec4(p, 1.0); vec3 n = normalize(normalMatrix * normal);
        vF = abs(dot(n, normalize(-mv.xyz))); vW = p; gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform float uT, uA, uSeed; uniform vec3 uC; varying vec2 vUv; varying float vF; varying vec3 vW;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        vec2 j = vec2(mod(i.x + 1.0, 12.0), i.y); i.x = mod(i.x, 12.0);
        return mix(mix(h(i), h(vec2(j.x, i.y)), f.x), mix(h(i + vec2(0,1)), h(vec2(j.x, i.y + 1.0)), f.x), f.y); }
      void main(){
        float k = vUv.y;
        // \u87BA\u65CB\u4E0A\u5347\u7684\u6C99\u5E26
        vec2 q = vec2(vUv.x * 12.0 + k * 9.0 - uT * 1.6, k * 9.0 - uT * 2.2 + uSeed);
        float d = n(q) * 0.65 + n(q * vec2(1.0, 2.3) + 4.0) * 0.35;
        float a = smoothstep(0.32, 0.85, d) * pow(vF, 0.8);
        a *= smoothstep(0.0, 0.08, k) * (1.0 - smoothstep(0.55, 1.0, k));
        a *= uA;
        vec3 c = uC * (0.75 + 0.5 * d) * (0.8 + 0.3 * k);
        gl_FragColor = vec4(c, a);
      }`,transparent:!0,depthWrite:!1,side:ut})}function Uy(){let n=h.player.pos,e=Math.random()*Math.PI*2,t=120+Math.random()*120,i=Tt.clamp(n.x+Math.cos(e)*t,-ke+200,ke-200),s=Tt.clamp(n.z+Math.sin(e)*t,-ke+200,ke-200);if(h.buildings.some(c=>Math.hypot(c.x-i,c.z-s)<40))return;let r=he.id==="kepler"?12103824:13142620,o=new Z(Ly,Dy(r));o.frustumCulled=!1,o.renderOrder=3,o.position.set(i,de(i,s)-1,s),h.scene.add(o);let a=new Z(Ly,Dy(r));a.scale.set(.55,.9,.55),o.add(a),a.material.uniforms.uSeed.value+=3;let l=Math.random()*Math.PI*2;Ao.push({m:o,inner:a,x:i,z:s,life:70+Math.random()*40,t:0,head:l,speed:3+Math.random()*2.5,snd:0,carried:0})}function Ny(){return Uy(),Ao[Ao.length-1]}function zy(n){Hy.value+=n;let e=he.id!=="europa"&&h.storm<.3&&h.time.night<.2&&h.started&&!h.ended;gm-=n,e&&gm<=0&&(gm=70+Math.random()*90,Ao.length<2&&Uy());let t=h.player,i=t.pos;for(let s=Ao.length-1;s>=0;s--){let r=Ao[s];r.t+=n,r.life-=n,r.head+=(Math.random()-.5)*n*.8,r.x+=Math.cos(r.head)*r.speed*n,r.z+=Math.sin(r.head)*r.speed*n,(Math.abs(r.x)>ke-200||Math.abs(r.z)>ke-200)&&(r.head+=Math.PI*n);for(let c of h.buildings){let d=r.x-c.x,u=r.z-c.z;if(Math.hypot(d,u)<c.def.r+18){r.head=Math.atan2(u,d);break}}let o=de(r.x,r.z);r.m.position.set(r.x,o-1,r.z),r.m.rotation.y-=n*2.4,r.inner.rotation.y-=n*2.2;let a=Math.min(1,r.t/5,Math.max(0,r.life)/6);if(r.m.material.uniforms.uA.value=a,r.inner.material.uniforms.uA.value=a*.8,Math.random()<n*18*a){let c=Math.random()*Math.PI*2,d=2+Math.random()*5;oe.dustPuff(new S(r.x+Math.cos(c)*d,o+.5,r.z+Math.sin(c)*d),1,1.5)}Math.random()<n*6*a&&oe.rise(new S(r.x,o+1+Math.random()*10,r.z),[.75,.5,.35],4),r.snd-=n;let l=Math.hypot(i.x-r.x,i.z-r.z);if(r.snd<=0&&l<110&&(r.snd=.55,G.play("whoosh",new S(r.x,o,r.z))),!h.driving&&!t.dead&&a>.5){let c=i.y-o,d=3.2+Math.max(0,c)*.12;if(l<d&&c<46){let u=i.x-r.x,f=i.z-r.z,p=l||1;t.vel.y=Math.max(t.vel.y,8+(1-l/d)*4),t.vel.x+=(-f/p*9-u/p*2-t.vel.x)*Math.min(1,n*4),t.vel.z+=(u/p*9-f/p*2-t.vel.z)*Math.min(1,n*4),t.yaw-=n*1.6,h.shake=Math.max(h.shake||0,.25),t.onGround=!1,r.inside||(r.inside=!0,h.stats.devils=(h.stats.devils||0)+1,h.events.emit("toast","\u88AB\u5C18\u5377\u98CE\u5377\u8D77\u6765\u4E86\uFF01")),r.carried+=n}else if(r.inside&&(l>d+1||c>=46)){r.inside=!1;let u=i.x-r.x,f=i.z-r.z,p=l||1;if(t.vel.x+=u/p*10,t.vel.z+=f/p*10,r.carried>1.5&&!r.dropped){r.dropped=!0;let g=Math.atan2(f,u),x=i.x+Math.cos(g)*22,v=i.z+Math.sin(g)*22;h.colliders.overlaps(x,v,3)||gs("silicon",x,v,8+Math.floor(Math.random()*6))}}}r.life<=0&&(h.scene.remove(r.m),r.m.material.dispose(),r.inner.material.dispose(),Ao.splice(s,1))}}var Za=[],vm={value:0},f3=(()=>{let n=[];for(let e=0;e<=20;e++){let t=e/20;n.push(new $(.9+Math.pow(t,1.3)*7,t*60))}return new pi(n,40)})();function p3(){return new ot({uniforms:{uT:vm,uA:{value:0},uS:{value:Math.random()*9}},vertexShader:"varying vec2 vUv; varying float vF; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position, 1.0); vF = abs(dot(normalize(normalMatrix * normal), normalize(-mv.xyz))); gl_Position = projectionMatrix * mv; }",fragmentShader:`uniform float uT, uA, uS; varying vec2 vUv; varying float vF;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); vec2 j = vec2(mod(i.x+1.0, 10.0), i.y); i.x = mod(i.x, 10.0);
        return mix(mix(h(i), h(vec2(j.x, i.y)), f.x), mix(h(i+vec2(0,1)), h(vec2(j.x, i.y+1.0)), f.x), f.y); }
      void main(){
        float k = vUv.y;
        float d = n(vec2(vUv.x * 10.0, k * 8.0 - uT * 6.0 + uS)) * 0.6 + n(vec2(vUv.x * 10.0 + 3.0, k * 18.0 - uT * 11.0)) * 0.4;
        float top = 1.0 - smoothstep(uA * 0.95 - 0.25, uA * 0.95, k); // \u55B7\u53D1\u9AD8\u5EA6\u968F\u65F6\u95F4\u589E\u957F
        float a = smoothstep(0.25, 0.8, d) * pow(vF, 0.7) * top * (1.0 - k * 0.6) * min(1.0, uA * 3.0);
        vec3 c = mix(vec3(0.75, 0.88, 1.0), vec3(1.0), d) * (1.1 - k * 0.3);
        gl_FragColor = vec4(c, a * 0.72);
      }`,transparent:!0,depthWrite:!1,side:ut})}var ky=new He({color:3844351,transparent:!0,opacity:.7,blending:Le,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4});function Oy(n){if(he.id!=="europa")return;let e=ti(he.seed*3+11);for(let t=0;Za.length<6&&t<200;t++){let i=(e()-.5)*(ke*1.5),s=(e()-.5)*(ke*1.5);if(Math.hypot(i,s)<70||Za.some(c=>Math.hypot(c.x-i,c.z-s)<120))continue;let r=de(i,s),o=new ae;o.position.set(i,r,s),n.add(o);for(let c=0;c<7;c++){let d=e()*Math.PI*2,u=3+e()*6,f=new Z(new In(u,.18+e()*.2),ky);f.rotation.x=-Math.PI/2,f.rotation.z=d,f.position.set(Math.cos(d)*u/2,.08,-Math.sin(d)*u/2),o.add(f)}let a=new Z(new Ln(1.1,24),new He({color:662058}));a.rotation.x=-Math.PI/2,a.position.y=.06,o.add(a);let l=new Z(f3,p3());l.frustumCulled=!1,l.visible=!1,o.add(l),Za.push({x:i,z:s,y:r,g:o,col:l,t:10+e()*30,phase:"idle",k:0})}}function Fy(){return Za}function By(n){n.phase="build",n.t=3}function Gy(n){if(!Za.length)return;vm.value+=n;let e=h.player,t=e.pos;ky.opacity=.45+Math.sin(vm.value*2)*.15;for(let i of Za){i.t-=n;let s=Math.hypot(t.x-i.x,t.z-i.z),r=new S(i.x,i.y+.5,i.z);if(i.phase==="idle")Math.random()<n*3&&oe.dustPuff(r.clone().add(new S((Math.random()-.5)*2,.4,(Math.random()-.5)*2)),1,.6,[.85,.9,.95]),i.t<=0&&(i.phase="build",i.t=3,s<160&&G.play("rumble",r));else if(i.phase==="build")Math.random()<n*25&&oe.dustPuff(r.clone().add(new S((Math.random()-.5)*3,.3,(Math.random()-.5)*3)),2,1.2,[.9,.95,1]),s<40&&(h.shake=Math.max(h.shake||0,.12*(1-s/40))),i.t<=0&&(i.phase="erupt",i.t=7,i.k=0,i.col.visible=!0,Ir(r,12576511,7,.9),ic(.5,r),G.play("boom",r),s<160&&h.events.emit("toast","\u51B0\u706B\u5C71\u55B7\u53D1"));else if(i.phase==="erupt"){i.k=Math.min(1,i.k+n*1.2);let o=Math.min(1,i.t/1.5);i.col.material.uniforms.uA.value=i.k*o;for(let a=0;a<6;a++)oe.rise(r.clone().setY(i.y+1+Math.random()*3),[.85,.95,1],3);if(Math.random()<n*4&&oe.burst(r.clone().setY(i.y+4),[.8,.92,1],12,9),Math.random()<n*20){let a=Math.random()*6.28,l=4+Math.random()*14;oe.dustPuff(new S(i.x+Math.cos(a)*l,i.y+.4,i.z+Math.sin(a)*l),1,.8,[.92,.96,1])}if(!h.driving&&!e.dead&&s<2.6&&t.y-i.y<8&&o>.5&&(e.vel.y=Math.max(e.vel.y,22),e.onGround=!1,i.launched||(i.launched=!0,h.stats.geyser=(h.stats.geyser||0)+1,h.events.emit("toast","\u88AB\u51B0\u706B\u5C71\u9001\u4E0A\u4E86\u5929\uFF01"))),i.t<=0&&(i.phase="idle",i.t=35+Math.random()*40,i.col.visible=!1,i.launched=!1,Math.random()<.7)){let a=Math.random()*6.28,l=i.x+Math.cos(a)*9,c=i.z+Math.sin(a)*9;h.colliders.overlaps(l,c,2)||gs("ice",l,c,10+Math.floor(Math.random()*8))}}}}var ym=3,m3={habitat:[16761466,3.2,1],apartment:[16761466,6,1.3],greenhouse:[16735432,2.6,1.1],vfarm:[16735432,4,1.2],lamp:[16765594,3.9,1.15],reactor:[5223167,4,1.4],plaza:[9426175,3.5,1.2],lab:[10479871,3,.9],fabricator:[16752704,2.5,.9],oxygen:[10477823,5,.45],extractor:[10477823,6,.5],lifehub:[10485712,3,1],trade:[16765056,3,1],launch:[16777215,5,1.4],monument:[16769184,6,1.3],terraformer:[10485728,6,1.4],beacon:[16736336,3,.6],landing:[16773328,2,1.1]},Sc=[],bc,xm=0;function g3(){if(bc)return bc;let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);for(let i=0;i<=10;i++){let s=i/10,r=Math.pow(1-s,2.2)*.9;t.addColorStop(s,`rgba(255,255,255,${r.toFixed(3)})`)}return e.fillStyle=t,e.fillRect(0,0,128,128),bc=new Zt(n),bc.colorSpace=_t,bc}var Wy=new Ge(.22,1.9,4,24,1,!0);Wy.translate(0,-2,0);function v3(n){return new ot({uniforms:{uC:{value:new re(n)},uI:{value:0}},vertexShader:`varying float vY; varying vec3 vN, vV;
      void main(){ vY = position.y; vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }`,fragmentShader:`uniform vec3 uC; uniform float uI; varying float vY; varying vec3 vN, vV;
      void main(){ float h = clamp(1.0 + vY/4.0, 0.0, 1.0); float f = abs(dot(normalize(vN), normalize(vV)));
        float a = pow(h, 1.6) * pow(f, 1.5) * uI; gl_FragColor = vec4(uC * a, a); }`,transparent:!0,blending:Le,depthWrite:!1,side:ut})}var Xy=new In(1,1);Xy.rotateX(-Math.PI/2);function qy(n,e=!0){ym=e?3:0;for(let t=0;t<ym;t++){let i=new Ci(16777215,0,34,1.7);i.userData={b:null,i:0},n.add(i),Sc.push(i)}}function Gd(n){return m3[n.type]}function x3(n,e){let t=n.anim;if(t._pool!==void 0)return t._pool;let i=new He({map:g3(),color:e[0],transparent:!0,opacity:0,blending:Le,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),s=new Z(Xy,i),r=Math.max(5,n.def.r*2.6)*e[2]*1.6;s.scale.set(r,1,r),s.position.set(0,.18,0),s.renderOrder=2,s.castShadow=s.receiveShadow=!1;let o=n.baseScale||1;if(s.scale.x/=o,s.scale.z/=o,s.position.y/=o,n.group.add(s),t._pool=s,n.type==="lamp"){let a=new Z(Wy,v3(e[0]));a.position.y=4.1/o,a.scale.setScalar(1/o),n.group.add(a),s.userData.cone=a}return s}function Mm(n){let e=h.time.night,t=h.player.pos,i=Math.min(1,Math.max(0,(e-.08)/.5))*(1-(h.storm||0)*.3);for(let r of h.buildings){let o=Gd(r);if(!o)continue;let a=x3(r,o),l=r.powered!==!1&&!r.broken&&r.buildT>=1,c=r.type==="lamp"||r.type==="habitat"?1-(Math.random()<.004?.4:0):1,d=l?i*.32*c:0;a.material.opacity+=(d-a.material.opacity)*Math.min(1,n*3),a.visible=a.material.opacity>.004;let u=a.userData.cone;u&&(u.material.uniforms.uI.value=a.material.opacity*1.1*(1-(h.storm||0)*.5),u.visible=a.visible)}xm-=n;let s=null;if(xm<=0&&(xm=.3,s=[],i>.01)){for(let r of h.buildings){let o=Gd(r);if(!o||r.broken||r.powered===!1||r.buildT<1)continue;let a=Math.hypot(r.x-t.x,r.z-t.z);a>140||s.push({b:r,d:a/o[2]})}s.sort((r,o)=>r.d-o.d),s.length=Math.min(s.length,ym)}if(s){let r=new Set(s.map(a=>a.b)),o=s.filter(a=>!Sc.some(l=>l.userData.b===a.b)).map(a=>a.b);for(let a of Sc){let l=a.userData;l.b&&(!r.has(l.b)||!h.buildings.includes(l.b))&&(l.leaving=!0),!l.b&&o.length&&Vy(a,o.shift())}for(let a of Sc)a.userData.leaving&&a.intensity<.5&&o.length&&Vy(a,o.shift())}for(let r of Sc){let o=r.userData,a=0;o.b&&!o.leaving&&(a=Gd(o.b)[2]*70*i),r.intensity+=(a-r.intensity)*Math.min(1,n*(a>r.intensity?2:4)),o.leaving&&r.intensity<.05&&(o.b=null,o.leaving=!1,r.intensity=0)}}function Vy(n,e){let t=Gd(e);n.userData.b=e,n.userData.leaving=!1,n.color.setHex(t[0]),n.intensity=0,n.position.set(e.x,e.y+t[1],e.z),n.distance=Math.max(24,e.def.r*6)*t[2]}var qe=n=>document.getElementById(n);h.debug=/[?&]debug/.test(location.search);var Bi=qe("c"),on=new aa({canvas:Bi,antialias:!0,powerPreference:"high-performance"});on.setPixelRatio(Math.min(window.devicePixelRatio,1.5));on.setSize(window.innerWidth,window.innerHeight);on.shadowMap.enabled=!0;on.shadowMap.type=tp;on.toneMapping=so;on.toneMappingExposure=1;var ns="high";try{ns=localStorage.getItem("starport-quality")||((navigator.hardwareConcurrency||8)<=4?"mid":"high")}catch{}function qd(n,e){ns=n,on.setPixelRatio(n==="high"?Math.min(window.devicePixelRatio,1.5):n==="mid"?1:.75),on.setSize(window.innerWidth,window.innerHeight);let t=n!=="low";on.shadowMap.enabled!==t&&(on.shadowMap.enabled=t,e&&h.scene.traverse(i=>{i.material&&[].concat(i.material).forEach(s=>{s.needsUpdate=!0})})),Tn&&(Tn.setPixelRatio(on.getPixelRatio()),Tn.setSize(window.innerWidth,window.innerHeight))}var Tn=null,Yd=null;function y3(){let n=new ln(window.innerWidth*on.getPixelRatio(),window.innerHeight*on.getPixelRatio(),{type:bn});Tn=new kh(on,n),Tn.addPass(new Oh(Kn,tt)),ts=new ma(Kn,tt,window.innerWidth,window.innerHeight),ts.output=ma.OUTPUT.Default,ts.blendIntensity=1,ts.overrideVisibility=function(){let e=this._visibilityCache;this.scene.traverse(t=>{e.set(t,t.visible);let i=t.material;(t.isPoints||t.isLine||t.isSprite||t.userData.noAO||i&&!Array.isArray(i)&&i.transparent&&(i.depthWrite===!1||i.blending===Le))&&(t.visible=!1)})},ts.updateGtaoMaterial({radius:1.6,distanceExponent:1.4,thickness:1.5,scale:1.2,samples:12}),ts.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),Tn.addPass(ts),Qa=new ro({uniforms:{tDiffuse:{value:null},uSun:{value:new $(.5,.5)},uK:{value:0},uAsp:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uSun; uniform float uK, uAsp; varying vec2 vUv;
      void main(){
        vec4 base = texture2D(tDiffuse, vUv);
        if (uK < 0.001) { gl_FragColor = base; return; }
        vec2 d = (uSun - vUv); float dist = length(d * vec2(uAsp, 1.0));
        d *= 0.92 / 48.0;
        vec2 uv = vUv; float decay = 1.0; vec3 acc = vec3(0.0);
        for (int i = 0; i < 48; i++) {
          uv += d;
          vec3 s = texture2D(tDiffuse, clamp(uv, 0.001, 0.999)).rgb;
          float b = max(max(s.r, s.g), s.b);
          acc += s * smoothstep(1.3, 3.0, b) * decay;
          decay *= 0.965;
        }
        acc *= 0.035 * uK * (1.0 - smoothstep(0.2, 1.1, dist) * 0.6);
        gl_FragColor = vec4(base.rgb + acc, base.a);
      }`}),Tn.addPass(Qa),Yd=new pa(new $(window.innerWidth,window.innerHeight),.55,.5,.88),Tn.addPass(Yd),Tn.addPass(new Fh),jd=new ro({uniforms:{tDiffuse:{value:null},uT:{value:0},uNight:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uT, uNight; varying vec2 vUv;
      float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233)) + uT) * 43758.5453); }
      void main(){
        vec2 d = vUv - 0.5; float r2 = dot(d, d);
        vec2 off = d * r2 * 0.012;
        vec3 c = vec3(texture2D(tDiffuse, vUv + off).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - off).b);
        float l = dot(c, vec3(0.299, 0.587, 0.114));
        c = mix(vec3(l), c, 1.08);
        c = (c - 0.5) * 1.06 + 0.5;
        c += mix(vec3(-0.012, 0.0, 0.025), vec3(0.03, 0.012, -0.02), smoothstep(0.2, 0.8, l));
        c *= 1.0 - r2 * mix(0.55, 0.8, uNight);
        c += (h(vUv * 917.0) - 0.5) * mix(0.022, 0.04, uNight);
        gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
      }`}),Tn.addPass(jd),Yy=new Gh(window.innerWidth*on.getPixelRatio(),window.innerHeight*on.getPixelRatio()),Tn.addPass(Yy)}var jd=null,ts=null,Qa=null,Yy=null,Fr=new S;function Vd(){if(G1(tt.position,Kn.fog.color),ns==="high"&&Tn){Yd.strength=.3+h.time.night*.22,Yd.threshold=.9,Fr.copy(tt.position).addScaledVector(Hn,1e3).project(tt);let e=Fr.z<1&&Math.abs(Fr.x)<1.6&&Math.abs(Fr.y)<1.6?Tt.smoothstep(Hn.y,-.02,.12)*(1-h.storm)*(1-Tt.smoothstep(Math.max(Math.abs(Fr.x),Math.abs(Fr.y)),1,1.6)):0;Qa.uniforms.uK.value+=(e-Qa.uniforms.uK.value)*.1,Qa.uniforms.uSun.value.set(Fr.x*.5+.5,Fr.y*.5+.5),Qa.uniforms.uAsp.value=tt.aspect,jd.uniforms.uT.value=performance.now()*.001%100,jd.uniforms.uNight.value=h.time.night,Tn.render()}else on.render(Kn,tt)}qd(ns,!1);var Kn=new as,tt=new fn(72,window.innerWidth/window.innerHeight,.1,6e3);y3();h.scene=Kn;h.camera=tt;h.renderer=on;h.colliders=new Xh(16);window.addEventListener("resize",()=>{tt.aspect=window.innerWidth/window.innerHeight,tt.updateProjectionMatrix(),on.setSize(window.innerWidth,window.innerHeight),Tn&&Tn.setSize(window.innerWidth,window.innerHeight),ts&&ts.setSize(window.innerWidth,window.innerHeight)});vv();h.hiShadows=ns==="high";H1(Kn);k1(Kn);B1(Kn);K1(Kn);qy(Kn,ns==="high");Oy(Kn);dy(Kn);var el=qv();el.group.position.set(bt.x,de(bt.x,bt.z)+.1,bt.z);el.group.rotation.y=.6;Kn.add(el.group);h.colliders.add({x:bt.x,z:bt.z,r:3.4,kind:"lander"});var Je=new vd(tt);h.player=Je;xx(tt);hx(Bi);Qx(O1(350));Xp(Kn);h.requestLock=()=>{if(h.debug){h.locked=!0;return}let n=()=>setTimeout(()=>{if(!h.locked&&h.started&&!h.menuOpen)try{let e=Bi.requestPointerLock();e&&e.catch&&e.catch(()=>{})}catch{}},1100);try{let e=Bi.requestPointerLock();e&&e.catch&&e.catch(n)}catch{n()}};var sM=0;document.addEventListener("pointerlockerror",()=>{++sM<=2&&setTimeout(()=>{if(!h.locked&&h.started&&!h.menuOpen)try{Bi.requestPointerLock()}catch{}},1100)});document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===Bi&&(sM=0),h.locked=document.pointerLockElement===Bi,!h.locked&&h.started&&!h.menuOpen&&!Je.dead&&!h.endingShown&&!h.cine&&_s("pause")});window.addEventListener("keydown",n=>{n.code!=="Escape"&&h.started&&!h.locked&&!h.menuOpen&&!Je.dead&&!h.endingShown&&!h.cine&&!qe("clickhint").classList.contains("hidden")&&h.requestLock()});Bi.addEventListener("click",()=>{G.init(),h.started&&!h.locked&&!h.menuOpen&&!Je.dead&&h.requestLock()});function $s(n){if(!h.started)return;let e={v:1,res:h.res,upgrades:h.upgrades,stats:h.stats,chapter:h.chapter,goalDone:h.goalDone,terraform:h.terraform,ended:h.ended,nights:h.nightsSurvived||0,city:h.cityLevel,pop:h.popTotal||0,launched:!!h.launched,rover:Ey(),relics:h.relicsFound||[],plazaSeen:!!h.plazaSeen,mode:h.mode,diff:h.diffKey,morale:h.morale,waypoint:h.waypoint||null,megaSeen:!!h.megaSeen,tech:h.tech||{},rp:h.rp||0,requests:h.requests||[],time:{t:h.time.t,day:h.time.day},player:{x:Je.pos.x,z:Je.pos.z,yaw:Je.yaw,o2:Je.o2,hp:Je.health},buildings:Xv(),nodes:cv(),colonists:Sx(),storm:ex()};try{localStorage.setItem(qh,JSON.stringify(e)),n||Qt("\u5DF2\u4FDD\u5B58")}catch{n||Qt("\u4FDD\u5B58\u5931\u8D25")}}function M3(){try{return JSON.parse(localStorage.getItem(qh))}catch{return null}}function E3(n){Object.assign(h.res,n.res),h.upgrades=n.upgrades||{},hv(n.nodes);for(let[e,t,i,s,r,o]of n.buildings)jn[e]&&cd(e,t,i,s,r,!1,o||1);h.stats=n.stats,h.goalDone=n.goalDone||{},h.terraform=n.terraform||0,h.ended=!!n.ended,h.nightsSurvived=n.nights||0,nx(h.terraform>=1),h.time.t=n.time.t,h.time.day=n.time.day,Je.pos.set(n.player.x,de(n.player.x,n.player.z),n.player.z),Je.yaw=n.player.yaw,Je.o2=n.player.o2,Je.health=Math.max(30,n.player.hp),_x(n.colonists||[]),n.rover&&kd(n.rover.x,n.rover.z,n.rover.h),h.relicsFound=n.relics||[],h.plazaSeen=!!n.plazaSeen,h.morale=n.morale,h.waypoint=n.waypoint||null,h.megaSeen=!!n.megaSeen,h.mode=n.mode||"story",h.diffKey=n.diff||"normal",h.tech=n.tech||{},h.rp=n.rp||0,h.requests=n.requests||[],h.cityLevel=n.city||0,h.popTotal=n.pop??(n.colonists||[]).length,h.launched=!!n.launched,Xp(Kn),tx(n.storm),ac(n.chapter,!0),Ms(),h.terraform>0&&Dp(rM(),h.terraform)}var rM=()=>h.buildings.filter(n=>n.type==="terraformer").map(n=>({x:n.x,z:n.z})),w3=he.intro;document.querySelector(".logo span").textContent=he.title;document.title="\u661F\u6E2F\uFF1A"+he.title;xn.visited?.length&&(qe("touch-note").innerHTML="\u5DF2\u5F00\u62D3\uFF1A"+xn.visited.map(n=>`${Wn[n.id].name}\uFF08${n.pop} \u4EBA\uFF09`).join(" \xB7 "));qe("story").innerHTML=w3.map((n,e)=>`<p style="animation-delay:${.4+e*1.1}s">${n}</p>`).join("");var Mi=M3();Mi&&(qe("btn-continue").classList.remove("hidden"),qe("cont-info").textContent=`${Mi.mode==="free"?"\u81EA\u7531":"\u5267\u60C5"} \xB7 ${he.name} \xB7 ${ki[Mi.chapter]?.title||""} \xB7 \u7B2C ${Mi.time.day} \u65E5 \xB7 ${Mi.pop??Mi.colonists?.length??0} \u4F4D\u5C45\u6C11`);matchMedia("(pointer: coarse)").matches&&(qe("touch-note").innerHTML+="\u672C\u6E38\u620F\u9700\u8981\u952E\u76D8\u548C\u9F20\u6807\uFF0C\u8BF7\u5728\u7535\u8111\u4E0A\u6E38\u73A9\u3002");function b3(n){if(h.debug){setTimeout(n,1200);return}let e=qe("cine"),t=he.intro;h.cine=!0,e.classList.remove("hidden","out"),qe("cine-lines").innerHTML=t.map((o,a)=>`<p style="animation-delay:${.6+a*2.1}s">${o}</p>`).join("");let i=!1,s=()=>{i||(i=!0,e.classList.add("out"),h.cine=!1,window.removeEventListener("keydown",r),window.removeEventListener("mousedown",s),setTimeout(()=>e.classList.add("hidden"),1500),setTimeout(n,900))},r=o=>{(o.code==="Space"||o.code==="Escape"||o.code==="Enter")&&s()};window.addEventListener("keydown",r),window.addEventListener("mousedown",s),setTimeout(s,1500+t.length*2100+1800)}function tl(n){if(G.init(),n&&Mi)E3(Mi),setTimeout(Ld,300);else{if(localStorage.removeItem(qh),ov(),xn.carry&&at!=="mars"){Object.assign(h.upgrades,xn.carry.upgrades||{});for(let e in xn.carry.res)h.res[e]+=xn.carry.res[e];h.upgrades.rover&&kd(bt.x+10,bt.z+4,.5),setTimeout(()=>Qt("\u968F\u8230\u7269\u8D44\u5DF2\u5378\u8F7D\uFF0C\u6240\u6709\u88C5\u5907\u5DF2\u540C\u6B65"),4e3)}h.time.t=.29,h.mode=h.mode||"story",h.diffKey=h.diffKey||"normal",ac(0,!0),ai()?$y(()=>{Ld(),setTimeout(()=>bo({k:"FREE MODE",title:he.name,sub:`\u81EA\u7531\u5F00\u62D3 \xB7 ${Ca[h.diffKey].name}`}),1600),Lt("\u65B9\u821F \xB7 AI","\u81EA\u7531\u6A21\u5F0F\u5DF2\u542F\u52A8\u3002\u6CA1\u6709\u4EFB\u52A1\u6E05\u5355\uFF0C\u8FD9\u7247\u571F\u5730\u5B8C\u5168\u5C5E\u4E8E\u4F60\u3002\u5EFA\u597D\u7B2C\u4E00\u5EA7\u8BBE\u65BD\u540E\uFF0C\u5C45\u6C11\u548C\u6307\u6325\u4E2D\u5FC3\u4F1A\u9646\u7EED\u63D0\u51FA\u59D4\u6258\u3002"),Lt("\u65B9\u821F \xB7 AI","\u63D0\u793A\uFF1AB \u5EFA\u9020\uFF0CT \u79D1\u7814\uFF0CTab \u6B96\u6C11\u5730\u6863\u6848\u3002\u795D\u4F60\u597D\u8FD0\u3002")}):b3(()=>$y(()=>{Ld(),setTimeout(()=>bo(ki[0]),1600),ki[0].radio.forEach(e=>Lt(e[0],e[1]))}))}Ix(),xy(),ns!=="low"&&j1(),qe("intro").classList.add("hidden"),document.body.classList.add("playing"),h.started=!0,h.requestLock()}var yi={mode:"story",diff:"normal",planet:"mars"};function Tm(){let n=(t,i,s,r,o)=>`<button class="opt ${o?"on":""}" data-g="${t}" data-k="${i}"><b>${s}</b><span>${r}</span></button>`,e=yi.mode==="free"?`<h3>\u661F\u7403</h3><div class="opts">${Object.values(Wn).map(t=>n("planet",t.id,t.name,t.title+" \xB7 "+t.place,yi.planet===t.id)).join("")}</div>`:'<p class="sm">\u5267\u60C5\u4ECE\u706B\u661F\u5F00\u59CB\u3002\u5B8C\u6210\u6BCF\u9897\u661F\u7403\u7684\u6545\u4E8B\u540E\uFF0C\u4E58\u6B96\u6C11\u8230\u524D\u5F80\u4E0B\u4E00\u9897\u3002</p>';qe("intro-pane").innerHTML=`<h3>\u6A21\u5F0F</h3><div class="opts">${Object.entries(Tv).map(([t,i])=>n("mode",t,i.name,i.desc,yi.mode===t)).join("")}</div>
    <h3>\u96BE\u5EA6</h3><div class="opts three">${Object.entries(Ca).map(([t,i])=>n("diff",t,i.name,i.desc,yi.diff===t)).join("")}</div>
    ${e}
    <button class="launch" id="btn-launch">\u51FA\u53D1</button>`,qe("intro-pane").dataset.k="setup",qe("intro-pane").classList.remove("hidden"),qe("intro-pane").querySelectorAll(".opt").forEach(t=>t.addEventListener("click",()=>{yi[t.dataset.g]=t.dataset.k,t.dataset.g==="mode"&&t.dataset.k==="story"&&(yi.planet="mars"),G.play("tick"),Tm()})),qe("btn-launch").addEventListener("click",S3)}function S3(){let n=yi.mode==="story"?"mars":yi.planet;if(yi.mode==="story"){if((xn.visited?.length||Mi)&&!confirm("\u5267\u60C5\u6A21\u5F0F\u4F1A\u4ECE\u706B\u661F\u91CD\u65B0\u5F00\u59CB\uFF0C\u5E76\u6E05\u9664\u6240\u6709\u661F\u7403\u7684\u8FDB\u5EA6\u3002\u786E\u5B9A\u5417\uFF1F"))return;Sp()}else{if(Zd(n)&&!confirm(`\u5C06\u8986\u76D6 ${Wn[n].name} \u7684\u73B0\u6709\u5B58\u6863\uFF0C\u786E\u5B9A\u5417\uFF1F`))return;try{localStorage.removeItem(n==="mars"?"starport-newhome-v1":"starport-planet-"+n)}catch{}let t=Mr();delete t.carry,t.planet=n,Nl(t)}if(n===at){h.mode=yi.mode,h.diffKey=yi.diff,tl(!1);return}try{localStorage.setItem("starport-newgame",JSON.stringify({mode:yi.mode,diff:yi.diff}))}catch{}let e=Mr();e.planet=n,Nl(e),location.href=location.pathname+(h.debug?"?debug":"")}qe("btn-new").addEventListener("click",()=>{if(G.init(),at!=="mars"&&!Mi&&xn.visited?.length&&!xn.freshFree){h.mode=xn.mode||"story",h.diffKey=xn.diff||"normal",tl(!1);return}Tm()});try{let n=JSON.parse(localStorage.getItem("starport-newgame"));n&&(localStorage.removeItem("starport-newgame"),h.mode=n.mode,h.diffKey=n.diff,setTimeout(()=>tl(!1),60))}catch{}qe("btn-continue").addEventListener("click",()=>tl(!0));qe("tele-planet").textContent=`${he.name} \xB7 ${he.place}`;var _3=`<h3>\u64CD\u4F5C</h3><div class="keys">
  <div><kbd>W A S D</kbd><span>\u79FB\u52A8</span></div><div><kbd>\u9F20\u6807</kbd><span>\u73AF\u89C6</span></div>
  <div><kbd>Shift</kbd><span>\u51B2\u523A</span></div><div><kbd>\u7A7A\u683C</kbd><span>\u8DF3\u8DC3 / \u55B7\u6C14\u80CC\u5305</span></div>
  <div><kbd>\u5DE6\u952E</kbd><span>\u91C7\u77FF \xB7 \u5C04\u51FB \xB7 \u653E\u7F6E\u5EFA\u7B51</span></div><div><kbd>\u53F3\u952E</kbd><span>\u53D6\u6D88\u5EFA\u9020</span></div>
  <div><kbd>1</kbd><kbd>2</kbd><span>\u5207\u6362\u5DE5\u5177</span></div><div><kbd>B</kbd><span>\u5EFA\u9020\u84DD\u56FE</span></div>
  <div><kbd>E</kbd><span>\u4E92\u52A8 \xB7 \u4EA4\u8C08 \xB7 \u4E0A\u8F66</span></div><div><kbd>U</kbd><span>\u5347\u7EA7\u6CE8\u89C6\u7684\u5EFA\u7B51</span></div><div><kbd>T</kbd><span>\u79D1\u7814</span></div>
  <div><kbd>Q</kbd><span>\u5C0F\u661F\u626B\u63CF\u77FF\u85CF</span></div><div><kbd>M</kbd><span>\u661F\u7403\u5730\u56FE / \u5BFC\u822A</span></div><div><kbd>F</kbd><span>\u624B\u7535\u7B52</span></div><div><kbd>Tab</kbd><span>\u6B96\u6C11\u5730\u6863\u6848</span></div>
  <div><kbd>P</kbd><span>\u62CD\u7167\u6A21\u5F0F</span></div><div><kbd>Esc</kbd><span>\u6682\u505C</span></div></div>
  <h3>\u751F\u5B58</h3><p>\u6C27\u6C14\u4F1A\u6301\u7EED\u6D88\u8017\u3002\u7740\u9646\u8231\u3001\u5236\u6C27\u7AD9\u548C\u5C45\u4F4F\u7A79\u9876\u9644\u8FD1\u4F1A\u81EA\u52A8\u8865\u6C27\u3002\u5EFA\u597D\u4F4F\u623F\u3001\u6C27\u6C14\u3001\u98DF\u7269\u3001\u6C34\u548C\u7740\u9646\u573A\uFF0C\u79FB\u6C11\u98DE\u8239\u5C31\u4F1A\u5230\u6765\u3002\u591C\u91CC\u8981\u63D0\u9632\u9508\u8680\u86DB\u3002</p>`,oM=n=>{let e=qe("intro-pane");if(!e.classList.contains("hidden")&&e.dataset.k===n.slice(0,20)){e.classList.add("hidden");return}e.dataset.k=n.slice(0,20),e.innerHTML=n,e.classList.remove("hidden"),G.play("tick")};qe("btn-t-help").addEventListener("click",()=>oM(_3));qe("btn-t-achv").addEventListener("click",()=>oM($0()));at!=="mars"&&!Mi&&(qe("btn-new").textContent=`\u767B\u9646 ${he.name}`);at!=="mars"&&!Mi&&xn.visited?.length&&qe("btn-setup").classList.remove("hidden");qe("btn-setup").addEventListener("click",()=>{G.init(),Tm()});if(xn.autoResume&&Mi){let n=Mr();delete n.autoResume,Nl(n),setTimeout(()=>{tl(!0),Qt(`\u6B22\u8FCE\u56DE\u6765 \xB7 ${he.name}`)},50)}qe("btn-save").addEventListener("click",()=>$s(!1));qe("btn-archive").addEventListener("click",()=>q0(Z0()));qe("btn-achv").addEventListener("click",()=>q0($0()));qe("btn-restart").addEventListener("click",()=>{confirm("\u5C06\u5220\u9664\u6240\u6709\u661F\u7403\u7684\u8FDB\u5EA6\uFF0C\u4ECE\u706B\u661F\u91CD\u65B0\u5F00\u59CB\u3002\u786E\u5B9A\u5417\uFF1F")&&(Sp(),h.started=!1,location.href=location.pathname+(h.debug?"?debug":""))});qe("vol").addEventListener("input",n=>G.setVolume(+n.target.value));qe("quality").value=ns;h.baseFov=72;try{let n=+localStorage.getItem("starport-fov");n>=60&&n<=100&&(h.baseFov=n,tt.fov=n,tt.updateProjectionMatrix(),qe("fov").value=n)}catch{}qe("fov").addEventListener("input",n=>{h.baseFov=+n.target.value,tt.fov=+n.target.value,tt.updateProjectionMatrix();try{localStorage.setItem("starport-fov",n.target.value)}catch{}});qe("quality").addEventListener("change",n=>{qd(n.target.value,!0);try{localStorage.setItem("starport-quality",n.target.value)}catch{}});qe("sens").addEventListener("input",n=>{Me.sens=+n.target.value});qe("btn-respawn").addEventListener("click",()=>{h.driving&&dm(Je),Je.respawn(),qe("death").classList.add("hidden"),h.requestLock()});qe("btn-endcont").addEventListener("click",()=>{qe("ending").classList.add("hidden"),h.endingShown=!1,h.requestLock()});h.events.on("chapter",n=>bo(n));Xa.unlocked=n=>Es(n).ok;Xa.relicLeft=()=>bs().found<bs().total;Xa.relicFound=()=>bs().found;h.events.on("request",n=>{Qt(`\u65B0\u59D4\u6258\uFF1A${n.text}`,"radio"),Lt(`${n.giver} \xB7 \u59D4\u6258`,n.line)});h.events.on("requestDone",n=>{Qt(`\u59D4\u6258\u5B8C\u6210\uFF1A${n.text}`,"check","good"),Lt(n.giver,["\u8C22\u8C22\u4F60\uFF01\u8FD9\u5E2E\u4E86\u5927\u5FD9\u3002","\u592A\u597D\u4E86\uFF0C\u5927\u5BB6\u90FD\u4F1A\u8BB0\u5F97\u7684\u3002","\u8F9B\u82E6\u4E86\uFF01\u8FD9\u662F\u4E00\u70B9\u5FC3\u610F\u3002"][Math.floor(Math.random()*3)])});h.events.on("researched",n=>{(n==="swarm"||n==="alloy")&&Ms()});h.events.on("crafted",n=>{if(n!=="rover")return;let e=h.buildings.find(i=>i.type==="fabricator"),t=e||Je.pos;for(let i=0;i<12;i++){let s=i*.9,r=(e?e.def.r:0)+5+i,o=t.x+Math.cos(s)*r,a=t.z+Math.sin(s)*r;if(!h.colliders.overlaps(o,a,2.6)){kd(o,a,-s);break}}Lt("\u65B9\u821F \xB7 AI","\u6F2B\u6E38\u8F66\u5DF2\u51FA\u5382\u3002\u8F66\u8231\u52A0\u538B\uFF0C\u53EF\u4EE5\u5728\u8F66\u91CC\u8865\u6C27\u3002\u5C0F\u5FC3\u522B\u5F00\u4E0B\u60AC\u5D16\u3002")});h.events.on("cityLevel",n=>{bo({k:`COLONY LEVEL ${["I","II","III","IV","V","VI"][h.cityLevel]}`,title:n.name,sub:`\u57CE\u5E02\u5347\u7EA7 \xB7 \u9886\u5730\u6269\u5C55\u81F3 ${n.r} \u7C73`});let e={1:["\u65B9\u821F \xB7 AI","\u6B96\u6C11\u5730\u5347\u7EA7\u4E3A\u5B9A\u5C45\u70B9\u3002\u9886\u5730\u6269\u5927\u4E86\uFF0C\u66F4\u8FDC\u7684\u571F\u5730\u53EF\u4EE5\u5EFA\u9020\u4E86\u3002"],2:["\u65B9\u821F \xB7 AI","\u5C0F\u9547\u89C4\u6A21\u8FBE\u6210\u3002\u516C\u5BD3\u5854\u4E0E\u5782\u76F4\u519C\u573A\u7684\u8BBE\u8BA1\u56FE\u5DF2\u89E3\u9501\u3002"],3:["\u65B9\u821F \xB7 AI","\u8FD9\u91CC\u5DF2\u7ECF\u662F\u4E00\u5EA7\u57CE\u5E02\u4E86\u3002\u751F\u6001\u4E2D\u67A2\u7684\u8BBE\u8BA1\u56FE\u5DF2\u89E3\u9501\u3002"],4:["\u65B9\u821F \xB7 AI","\u5927\u90FD\u4F1A\u3002\u591C\u91CC\uFF0C\u4ECE\u8F68\u9053\u4E0A\u80FD\u770B\u89C1\u4F60\u4EEC\u7684\u706F\u5149\u3002"],5:["\u65B9\u821F \xB7 AI","\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C\u661F\u6E2F\u300D\u2014\u2014\u4EBA\u7C7B\u53EF\u4EE5\u4ECE\u8FD9\u91CC\u98DE\u5411\u4E0B\u4E00\u9897\u661F\u7403\u4E86\u3002"]}[h.cityLevel];e&&Lt(e[0],e[1]),$s(!0)});h.events.on("openBuild",()=>_s("build"));h.events.on("death",n=>{G.laser(!1),setTimeout(()=>{if(h.endingShown){Je.respawn();return}qe("death-why").textContent=n,qe("death").classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock()},1500)});h.events.on("tide",n=>{G.play("night"),bo({k:"CRYSTAL TIDE",title:"\u6676\u6F6E\u4E4B\u591C",sub:`\u96F7\u8FBE\u63A2\u6D4B\u5230\u7EA6 ${n} \u4E2A\u4FE1\u53F7 \xB7 \u5B88\u4F4F\u6B96\u6C11\u5730`}),Lt("\u65B9\u821F \xB7 AI","\u8B66\u544A\uFF1A\u6676\u6F6E\u6B63\u5728\u903C\u8FD1\u3002\u6570\u91CF\u662F\u5E73\u65F6\u7684\u4E24\u500D\u2026\u2026\u5730\u9707\u4EEA\u8FD8\u8BB0\u5F55\u5230\u4E00\u4E2A\u5DE8\u5927\u7684\u4FE1\u53F7\uFF0C\u5B83\u6B63\u5728\u5411\u5730\u8868\u79FB\u52A8\u3002")});h.events.on("bossSpawn",()=>{Qt("\u6676\u6BCD\u7834\u571F\u800C\u51FA","boss","warn"),Lt("\u65B9\u821F \xB7 AI","\u662F\u6676\u6BCD\uFF01\u4F53\u957F\u8D85\u8FC7\u5341\u7C73\u3002\u5B83\u7684\u51B2\u51FB\u6CE2\u80FD\u9707\u788E\u5EFA\u7B51\u2014\u2014\u7528\u6B65\u67AA\u548C\u70AE\u5854\u96C6\u4E2D\u706B\u529B\uFF01")});h.events.on("bossDown",()=>{Qt("\u6676\u6BCD\u9668\u843D","boss","good"),Lt("\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u2026\u2026\u4F60\u4EEC\u505A\u5230\u4E86\u3002\u6574\u4E2A\u6307\u6325\u4E2D\u5FC3\u90FD\u5728\u6B22\u547C\u3002\u5B83\u7684\u6838\u5FC3\u91CC\u6709\u5927\u91CF\u7684\u949B\uFF0C\u62FF\u53BB\u5EFA\u8BBE\u5427\u3002")});var jy=!0;h.events.on("nightfall",n=>{G.play("night"),Qt(`\u591C\u5E55\u964D\u4E34 \xB7 \u7EA6 ${n} \u4E2A\u79FB\u52A8\u4FE1\u53F7\u63A5\u8FD1`,"moon","warn"),jy&&(jy=!1,Lt("\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5B83\u4EEC\u6765\u4E86\u3002\u9508\u8680\u86DB\u4F1A\u653B\u51FB\u5EFA\u7B51\u548C\u4EBA\u3002\u7528\u6FC0\u5149\u6216\u6B65\u67AA\u51FB\u9000\u5B83\u4EEC\u2014\u2014\u5B83\u4EEC\u7684\u6676\u4F53\u6B8B\u9AB8\u91CC\u542B\u6709\u949B\u3002"))});h.events.on("broken",n=>Qt(`${n.def.name} \u53D7\u635F\u505C\u673A\uFF0C\u767D\u5929\u4F1A\u81EA\u52A8\u4FEE\u590D`,"warn","warn"));var Zy=!0;h.events.on("shuttleIncoming",n=>Qt(`\u79FB\u6C11\u98DE\u8239\u6B63\u5728\u964D\u843D \xB7 ${n} \u4EBA`,"ship"));h.events.on("colonistsArrived",n=>{n.length&&(Qt(`\u6B22\u8FCE\u56DE\u5BB6\uFF1A${n.map(e=>e.name).join("\u3001")}`),Zy&&h.stats.arrived<=4&&(Zy=!1,Lt(n[0].name,"\u4F60\u597D\u2026\u2026\u8FD9\u5C31\u662F\u706B\u661F\uFF1F\u6BD4\u7167\u7247\u4E0A\u8FD8\u8981\u7EA2\u3002\u8C22\u8C22\u4F60\uFF0C\u4E3A\u6211\u4EEC\u70B9\u4EAE\u4E86\u8FD9\u91CC\u7684\u706F\u3002")))});var T3={habitat:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5C45\u4F4F\u7A79\u9876\u52A0\u538B\u5B8C\u6210\u3002\u5BA4\u5185\u6E29\u5EA6 21 \u6444\u6C0F\u5EA6\uFF0C\u6E7F\u5EA6 45%\u3002\u8FD9\u662F\u706B\u661F\u4E0A\u7B2C\u4E00\u4E2A\u53EF\u4EE5\u8131\u4E0B\u5934\u76D4\u7684\u5730\u65B9\u3002"],greenhouse:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u6E29\u5BA4\u542F\u52A8\u3002\u7B2C\u4E00\u6279\u79CD\u5B50\u5DF2\u7ECF\u64AD\u4E0B\uFF1A\u571F\u8C46\u3001\u5C0F\u9EA6\u3001\u756A\u8304\u2026\u2026\u548C\u4E00\u682A\u5411\u65E5\u8475\u3002"],beacon:["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u6536\u5230\u7740\u9646\u573A\u7684\u4FE1\u6807\u4FE1\u53F7\u4E86\uFF01\u53EA\u8981\u6B96\u6C11\u5730\u80FD\u517B\u6D3B\u4ED6\u4EEC\uFF0C\u79FB\u6C11\u98DE\u8239\u5C31\u4F1A\u51FA\u53D1\u3002"],reactor:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u805A\u53D8\u53CD\u5E94\u5806\u70B9\u706B\u6210\u529F\u3002\u8F93\u51FA\u7A33\u5B9A\u3002"],terraformer:["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5927\u6C14\u6539\u9020\u5854\u2026\u2026\u542F\u52A8\u4E86\u3002\u6211\u4EEC\u89C1\u8BC1\u7684\uFF0C\u662F\u4E00\u9897\u661F\u7403\u7684\u82CF\u9192\u3002"],apartment:["\u65B9\u821F \xB7 AI","\u7B2C\u4E00\u5EA7\u516C\u5BD3\u5854\u843D\u6210\u3002\u57CE\u5E02\u5F00\u59CB\u5411\u5929\u7A7A\u751F\u957F\u3002"],launch:["\u65B9\u821F \xB7 AI","\u661F\u9645\u53D1\u5C04\u53F0\u5B8C\u5DE5\u3002\u6B96\u6C11\u8230\u5DF2\u52A0\u6CE8\u5B8C\u6BD5\uFF0C\u968F\u65F6\u53EF\u4EE5\u51FA\u53D1\u3002"],monument:["\u65B9\u821F \xB7 AI","\u7EAA\u5FF5\u7891\u4E0A\u523B\u7740\u4E00\u884C\u5B57\uFF1A\u300C\u81F4\u7B2C\u4E00\u4E2A\u51FA\u53D1\u7684\u4EBA\u300D\u3002"],turret:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u9632\u5FA1\u70AE\u5854\u4E0A\u7EBF\u3002\u5B83\u4EEC\u9700\u8981\u7535\u529B\u624D\u80FD\u8FD0\u8F6C\u3002"],fabricator:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5236\u9020\u5DE5\u574A\u5C31\u7EEA\u3002\u9760\u8FD1\u540E\u6309 E \u6253\u5F00\u3002"]};h.events.on("built",n=>{let e=T3[n.type];e&&h.stats.built[n.type]===1&&Lt(e[0],e[1]),n.type==="monument"&&h.stats.built.monument===1&&setTimeout(L3,6e3),$s(!0)});h.events.on("ending",()=>{Lt("Nadia Volkova","\u5927\u5BB6\u5FEB\u51FA\u6765\u770B\uFF01\u5929\u7A7A\u2026\u2026\u5929\u7A7A\u53D8\u84DD\u4E86\uFF01"),Lt("\u8D75\u5C0F\u96E8","\u4E0B\u96E8\u4E86\uFF01\u8FD9\u662F\u706B\u661F\u4E0A\u7684\u7B2C\u4E00\u573A\u96E8\uFF01"),setTimeout(R3,14e3)});function R3(){h.ended=!0,h.endingShown=!0,Je.dead&&Je.respawn(),qe("death").classList.add("hidden"),document.pointerLockElement&&document.exitPointerLock();let n=h.stats,e=["\u4ECE\u7740\u9646\u8231\u7684\u8231\u95E8\u7B2C\u4E00\u6B21\u6253\u5F00\uFF0C\u5230\u4ECA\u5929\uFF0C\u8FC7\u53BB\u4E86 "+h.time.day+" \u4E2A\u706B\u661F\u65E5\u3002","\u66FE\u7ECF\u53EA\u6709\u98CE\u58F0\u7684\u5E73\u539F\u4E0A\uFF0C\u5982\u4ECA\u4F4F\u7740 "+h.colony.pop+" \u4E2A\u4EBA\u3002","\u4ED6\u4EEC\u6765\u81EA\u5730\u7403\u4E0A\u4E0D\u540C\u7684\u56FD\u5BB6\uFF0C\u8BF4\u7740\u4E0D\u540C\u7684\u8BED\u8A00\u3002","\u4F46\u4ECE\u4ECA\u5929\u8D77\uFF0C\u4ED6\u4EEC\u6709\u4E86\u540C\u4E00\u4E2A\u5730\u5740\u3002",'<div class="big">\u706B\u661F \xB7 \u65B0\u5BB6\u56ED</div>',"\u5B69\u5B50\u4EEC\u7B2C\u4E00\u6B21\u5728\u706B\u661F\u4E0A\uFF0C\u770B\u89C1\u4E86\u84DD\u8272\u7684\u5929\u7A7A\u3002",`<span class="stats">\u91C7\u96C6\u8D44\u6E90 ${n.mined.iron+n.mined.silicon+n.mined.ice+n.mined.titanium} \xB7 \u5EFA\u9020\u8BBE\u65BD ${h.buildings.length} \xB7 \u51FB\u9000\u9508\u8680\u86DB ${n.kills} \xB7 \u8FCE\u63A5\u79FB\u6C11 ${n.arrived}</span>`];qe("ending-text").innerHTML=e.map((t,i)=>`<p style="animation-delay:${i*1.6}s">${t}</p>`).join(""),qe("ending").classList.remove("hidden"),G.play("chapter"),$s(!0)}window.addEventListener("keydown",n=>{if(h.started){if(ty(n),n.code==="Tab"&&!h.endingShown&&!Je.dead){h.menuOpen==="archive"?Zn(!0):h.menuOpen||_s("archive");return}if(n.code==="KeyM"&&!h.endingShown&&!Je.dead){h.menuOpen==="mapscr"?Zn(!0):h.menuOpen||_s("mapscr");return}if(h.menuOpen==="mapscr"&&n.code==="Escape"){Zn(!0);return}if(n.code==="KeyT"&&!h.endingShown&&!Je.dead){h.menuOpen==="research"?Zn(!0):h.menuOpen||_s("research");return}if(h.menuOpen==="research"&&n.code==="Escape"){Zn(!0);return}if(h.menuOpen==="trade"&&(n.code==="Escape"||n.code==="KeyE")){Zn(!0);return}if(n.code==="KeyP"&&!h.menuOpen){h.photo=!h.photo,h.usedPhoto=!0,document.body.classList.toggle("photo",h.photo),Qy(h.photo?Sm:0),G.play("tick");return}if(h.photo&&!h.menuOpen){let e=["Digit1","Digit2","Digit3","Digit4"].indexOf(n.code);if(e>=0){Sm=e,Qy(e),G.play("tick"),n.stopImmediatePropagation();return}if(n.code==="Enter"){h.snap=!0;return}}if(h.menuOpen==="archive"&&n.code==="Escape"){Zn(!0);return}h.menuOpen==="build"&&(n.code==="Escape"||n.code==="KeyB")?(Zn(!0),h.locked||void 0):h.menuOpen==="craft"&&(n.code==="Escape"||n.code==="KeyE")?Zn(!0):h.menuOpen==="starmap"&&n.code==="Escape"&&Zn(!0)}});var Ka=0,Em=30,wm=0,Ky=0,$a={};try{$a=JSON.parse(localStorage.getItem("starport-hints"))||{}}catch{}var Ja=null,bm=0,_c=0,A3=[{id:"move",text:"<kbd>W A S D</kbd>\u79FB\u52A8\u3000<kbd>Shift</kbd>\u51B2\u523A<br><kbd>\u9F20\u6807</kbd>\u73AF\u89C6\u3000<kbd>\u7A7A\u683C</kbd>\u8DF3\u8DC3",when:()=>_c>.5&&_c<40},{id:"mine",text:"\u5BF9\u51C6\u53D1\u5149\u7684\u77FF\u77F3\uFF0C<kbd>\u6309\u4F4F\u5DE6\u952E</kbd> \u7528\u91C7\u77FF\u6FC0\u5149\u91C7\u96C6",when:()=>_c>6&&h.stats.mined.iron+h.stats.mined.silicon===0},{id:"build",text:"\u8D44\u6E90\u591F\u4E86\uFF01\u6309 <kbd>B</kbd> \u6253\u5F00\u5EFA\u9020\u83DC\u5355",when:()=>h.buildings.length===0&&h.res.iron>=8&&h.res.silicon>=6},{id:"o2",text:"\u6C27\u6C14\u5728\u6301\u7EED\u6D88\u8017\u3002\u56DE\u5230\u7740\u9646\u8231\u6216\u5236\u6C27\u7AD9\u9644\u8FD1\u4F1A\u81EA\u52A8\u8865\u6C27",when:()=>!Je.inLife&&Je.o2<Je.maxO2*.5},{id:"night",text:"\u5929\u9ED1\u4E86\uFF0C\u6309 <kbd>F</kbd> \u6253\u5F00\u624B\u7535\u7B52",when:()=>h.time.night>.6&&!Je.flashlight},{id:"craft",text:"\u9760\u8FD1\u5236\u9020\u5DE5\u574A\u6309 <kbd>E</kbd> \u5236\u9020\u6B66\u5668\u548C\u88C5\u5907\u2014\u2014\u8BD5\u8BD5\u52A0\u538B\u6F2B\u6E38\u8F66",when:()=>h.buildings.some(n=>n.type==="fabricator")&&!h.upgrades.rifle},{id:"drive",text:"\u6F2B\u6E38\u8F66\u5C31\u5728\u9644\u8FD1\uFF0C\u8D70\u8FC7\u53BB\u6309 <kbd>E</kbd> \u4E0A\u8F66",when:()=>Od()&&!h.driving&&!$a.drove},{id:"research",text:"\u7814\u7A76\u6240\u5DF2\u5EFA\u6210\uFF0C\u6309 <kbd>T</kbd> \u7528\u79D1\u7814\u70B9\u6570\u89E3\u9501\u79D1\u6280",when:()=>h.buildings.some(n=>n.type==="lab")&&(h.rp||0)>=20},{id:"request",text:"\u5C45\u6C11\u63D0\u51FA\u4E86\u59D4\u6258\uFF08\u53F3\u4FA7\u4EFB\u52A1\u680F\uFF09\uFF0C\u5B8C\u6210\u540E\u6709\u5956\u52B1",when:()=>(h.requests||[]).length>0},{id:"map",text:"\u6309 <kbd>M</kbd> \u6253\u5F00\u661F\u7403\u5730\u56FE\uFF0C\u70B9\u51FB\u53EF\u8BBE\u7F6E\u5BFC\u822A\u70B9",when:()=>_c>90},{id:"talk",text:"\u5BF9\u51C6\u5C45\u6C11\u6309 <kbd>E</kbd>\uFF0C\u542C\u542C\u4ED6\u4EEC\u7684\u6545\u4E8B",when:()=>h.colonists.some(n=>n.pos.distanceTo(Je.pos)<10)},{id:"level",text:"\u4EBA\u53E3\u548C\u8BBE\u65BD\u8D8A\u591A\uFF0C\u57CE\u5E02\u7B49\u7EA7\u8D8A\u9AD8\uFF0C\u9886\u5730\u4E5F\u4F1A\u6269\u5927\uFF08\u770B\u5DE6\u4E0A\u89D2\uFF09",when:()=>h.colony.pop>=2}];function C3(n){if(_c+=n,h.driving&&($a.drove=!0),Ja)if(bm-=n,bm<=0||!Ja.when()){$a[Ja.id]=!0,Ja=null;try{localStorage.setItem("starport-hints",JSON.stringify($a))}catch{}}else return Ja.text;for(let e of A3)if(!$a[e.id]&&e.when())return Ja=e,bm=12,e.text;return""}function aM(){let n=Mr(),e=new Map((n.visited||[]).map(i=>[i.id,i])),t=[];he.next&&t.push({id:he.next,fresh:!e.has(he.next)&&!Zd(he.next)});for(let i of Object.keys(Wn))i!==at&&i!==he.next&&(e.has(i)||Zd(i))&&t.push({id:i,fresh:!1,info:e.get(i)});return t}function Zd(n){try{return!!localStorage.getItem(n==="mars"?"starport-newhome-v1":"starport-planet-"+n)}catch{return!1}}function P3(n){_s("starmap"),qe("starmap-list").innerHTML=aM().map(e=>{let t=Wn[e.id],i={mars:"MARS",europa:"EUROPA",kepler:"KEPLER-442b"}[e.id];return`<div class="dest" data-id="${e.id}"><div class="orb ${e.id}"></div><span class="badge ${e.fresh?"new":"home"}">${e.fresh?"UNCHARTED":"COLONY"}</span>
      <div class="dn">${t.name}</div><div class="de">${i}</div>
      <div class="dst">${t.title} \xB7 ${t.place}${e.info?`<br>\u5C45\u6C11 ${e.info.pop} \u4EBA \xB7 \u7B2C ${e.info.day} \u65E5\u79BB\u5F00`:""}${e.fresh?"<br>\u88C5\u5907\u540C\u6B65 \xB7 \u643A\u5E26\u90E8\u5206\u7269\u8D44":"<br>\u56DE\u5230\u4F60\u5EFA\u7ACB\u7684\u57CE\u5E02"}</div></div>`}).join(""),qe("starmap-list").querySelectorAll(".dest").forEach(e=>e.addEventListener("click",()=>{Zn(!0),lM(n,e.dataset.id)}))}function lM(n,e){let t=new S(n.x,n.y,n.z),i=Math.atan2(Hn.z,Hn.x),s=null,r=null;for(let l=0;l<24&&!r;l++){let c=i+(l%2?1:-1)*Math.ceil(l/2)*.26,d=74,u=new S(Math.cos(c),0,Math.sin(c)),f=t.clone().addScaledVector(u,d);f.y=de(f.x,f.z)+2.6;let p=!h.colliders.overlaps(f.x,f.z,6);for(let g=.05;p&&g<.85;g+=.05){let x=f.x+(t.x-f.x)*g,v=f.z+(t.z-f.z)*g;(h.colliders.overlaps(x,v,2.5)||de(x,v)>f.y+(n.y+10-f.y)*g)&&(p=!1)}p&&(s=u,r=f)}r||(s=new S(Math.cos(i),0,Math.sin(i)),r=t.clone().addScaledVector(s,74),r.y=de(r.x,r.z)+2.6);let o=document.createElement("div");o.id="launch-cap",o.innerHTML='<div class="lc-k">LAUNCH SEQUENCE \xB7 '+Wn[e].name+'</div><div class="lc-n"></div>',document.body.appendChild(o),h.launching={b:n,t:0,dest:e,pad:t,dir:s,cam:r,cap:o,n:-1,look:t.clone().setY(n.y+14),fov:tt.fov,v:0},h.launched=!0,h.cine=!0,document.body.classList.add("cinema"),document.pointerLockElement&&document.exitPointerLock(),G.play("rumble"),Lt("\u65B9\u821F \xB7 AI",`\u6B96\u6C11\u8230\u8FDB\u5165\u53D1\u5C04\u7A0B\u5E8F\u3002\u76EE\u6807\uFF1A${Wn[e].name}\u3002\u5168\u4F53\u4E58\u5458\uFF0C\u795D\u4F60\u4EEC\u597D\u8FD0\u3002`);let a=l=>{(l.type==="mousedown"||l.code==="Space"||l.code==="Escape")&&(h.launching.t=Math.max(h.launching.t,11))};h.launching.skip=a,setTimeout(()=>{window.addEventListener("keydown",a),window.addEventListener("mousedown",a)},300)}var Jy=new S;function cM(n){let e=h.launching;if(!e)return;e.t+=n;let t=e.b.anim.ship,i=e.b.anim.flame,s=3.6,r=5.2,o=e.t<.3?-1:e.t<1.4?3:e.t<2.5?2:e.t<s?1:e.t<r+1.5?0:-2;if(o!==e.n){e.n=o;let g=e.cap.querySelector(".lc-n");o===-2?e.cap.classList.add("out"):o>=0&&(g.textContent=o>0?"T \u2013 "+o:"\u70B9\u706B",g.classList.remove("pop"),g.offsetWidth,g.classList.add("pop"),o>0&&G.play("click"))}t.getWorldPosition(Jy);let a=Jy.clone();if(e.t<s)Math.random()<n*14&&oe.dustPuff(new S(e.pad.x+(Math.random()-.5)*6,e.pad.y+2+Math.random()*3,e.pad.z+(Math.random()-.5)*6),1,1.2,[.9,.9,.92]);else{e.ign||(e.ign=!0,i.visible=!0,Ir(a.clone().setY(e.pad.y+1.5),16765088,18,1.4),ic(1.2),G.play("kill"),G.engine(1));let g=Math.min(1,(e.t-s)/1.2);i.scale.set(.6+g*.5,.4+g*1.1+Math.random()*.15,.6+g*.5);let x=a.y-e.pad.y,v=Math.max(0,1-x/70);for(let E=0;E<Math.round(4*v);E++)mv(e.pad.clone().setY(e.pad.y+.5),1.5);for(let E=0;E<4;E++)oe.flame(a);let m=a.clone();m.y-=4,nc(m,16754784,(2500+Math.random()*900)*g,260,.12),h.shake=Math.max(h.shake||0,.35*v+.08),e.t>r&&(e.v+=n*(1.2+(e.t-r)*3.2),t.position.y+=e.v*n)}let l=Math.min(1,e.t/6),c=e.cam.clone().addScaledVector(e.dir,-l*10);tt.position.copy(c);let d=a.clone();d.y+=14,e.look.lerp(d,1-Math.pow(.02,n)),tt.lookAt(e.look);let u=tt.position.distanceTo(d),f=Tt.radToDeg(2*Math.atan(48/u));tt.fov=Tt.clamp(f,9,e.fov),tt.updateProjectionMatrix();let p=h.shake||0;p>.01&&(tt.position.x+=(Math.random()-.5)*p*.6,tt.position.y+=(Math.random()-.5)*p*.5),h.shake=p*Math.pow(.1,n),e.t>11&&!e.faded&&(e.faded=!0,qe("fade").classList.add("white","on"),G.engine(0)),e.t>12.6&&!e.done&&(e.done=!0,window.removeEventListener("keydown",e.skip),window.removeEventListener("mousedown",e.skip),I3(e.dest))}function I3(n){let e=Mr();e.visited=(e.visited||[]).filter(s=>s.id!==at).concat([{id:at,pop:h.colony.pop,day:h.time.day}]),e.planet=n,e.mode=h.mode||"story",e.diff=h.diffKey||"normal",e.autoResume=Zd(n);let t={};for(let s in h.res)t[s]=Math.min(Math.floor(h.res[s]*.4),80);e.carry={upgrades:h.upgrades,res:t},$s(!0),Nl(e);let i=Wn[n];h.endingShown=!0,document.pointerLockElement&&document.exitPointerLock(),G.play("chapter"),setTimeout(()=>{h.warping=!0},1300),Iy(["WORMHOLE TRANSIT \xB7 \u866B\u6D1E\u7A7F\u8D8A",`<b>${i.name}</b>`,`${i.title}${e.autoResume?" \xB7 \u5DF2\u5F00\u62D3":""}`,`<span class="stats">${he.name}\u7684 ${h.colony.pop} \u4F4D\u5C45\u6C11\uFF0C\u4F1A\u66FF\u4F60\u5B88\u7740\u90A3\u91CC\u7684\u706F\u706B\u3002</span>`],()=>{location.href=location.pathname+(h.debug?"?debug":"")},7.5),setTimeout(()=>qe("fade").classList.remove("on","white"),400)}function L3(){h.endingShown=!0,document.pointerLockElement&&document.exitPointerLock();let e=(Mr().visited||[]).concat([{id:at,pop:h.colony.pop}]),t=e.reduce((s,r)=>s+r.pop,0),i=["\u5F88\u4E45\u5F88\u4E45\u4EE5\u524D\uFF0C\u4E00\u4E2A\u4EBA\u72EC\u81EA\u7AD9\u5728\u706B\u661F\u7684\u7EA2\u8272\u5C18\u571F\u91CC\u3002","\u6C27\u6C14\u53EA\u591F\u6491\u4E09\u5206\u949F\uFF0C\u8EAB\u8FB9\u53EA\u6709\u4E00\u5EA7\u7740\u9646\u8231\u3002",e.map(s=>`${Wn[s.id].name} \xB7 ${s.pop} \u4EBA`).join("\u3000"),`\u4ECA\u5929\uFF0C${t} \u4E2A\u4EBA\uFF0C\u751F\u6D3B\u5728\u4E09\u9897\u661F\u7403\u4E0A\u3002`,'<div class="big">\u661F\u9645\u6587\u660E</div>',"\u8FD9\u4E00\u5207\uFF0C\u90FD\u4ECE\u4F60\u8FC8\u51FA\u7684\u7B2C\u4E00\u6B65\u5F00\u59CB\u3002",'<span class="stats">\u611F\u8C22\u6E38\u73A9\u300A\u661F\u6E2F\u300B\u3002\u4F60\u53EF\u4EE5\u7EE7\u7EED\u5EFA\u8BBE\uFF0C\u57CE\u5E02\u4F1A\u4E00\u76F4\u5728\u8FD9\u91CC\u7B49\u4F60\u3002</span>'];qe("ending-text").innerHTML=i.map((s,r)=>`<p style="animation-delay:${r*1.8}s">${s}</p>`).join(""),qe("ending").classList.remove("hidden"),G.play("chapter"),$s(!0)}function D3(n){let e={prompt:"",crossClass:""};if(Je.dead||h.menuOpen)return e;if(h.driving)return e.prompt=`<span class="big">${Sy()}</span> KM/H<br><kbd>W S</kbd> \u6CB9\u95E8 \xB7 <kbd>A D</kbd> \u8F6C\u5411 \xB7 <kbd>Shift</kbd> \u52A0\u901F \xB7 <kbd>\u7A7A\u683C</kbd> \u5239\u8F66 \xB7 <kbd>E</kbd> \u4E0B\u8F66`,e;let t=Ox(Je.pos);if(t)return e.prompt="<b>\u5730\u7403\u8865\u7ED9\u8231</b><br><kbd>E</kbd>\u6253\u5F00",Me.hit("KeyE")&&Bx(t),e;let i=Dx(Je.pos);if(i)return e.prompt=`<b>${i.name}</b><br><kbd>E</kbd>\u8C03\u67E5`,Me.hit("KeyE")&&Hx(i),e;let s=Od();if(s&&Math.hypot(s.x-Je.pos.x,s.z-Je.pos.z)<4.5)return e.prompt="<b>\u52A0\u538B\u6F2B\u6E38\u8F66</b><br><kbd>E</kbd>\u4E0A\u8F66",Me.hit("KeyE")&&(wy(),Me.pressed.delete("KeyE")),e;let r=tt.position,o=Je.fwd,a=bx(r,o),l=h.buildings.find(f=>f.type==="fabricator"&&Math.hypot(f.x-Je.pos.x,f.z-Je.pos.z)<f.def.r+6);Ka=Math.max(0,Ka-n),Ky=Math.max(0,Ky-n);let c=h.buildings.find(f=>f.type==="trade"&&Math.hypot(f.x-Je.pos.x,f.z-Je.pos.z)<f.def.r+5),d=h.buildings.find(f=>f.type==="launch"&&Math.hypot(f.x-Je.pos.x,f.z-Je.pos.z)<f.def.r+8);if(a){if(e.crossClass="talk",e.prompt=`<b>${a.name}</b> \xB7 ${a.job}<br><kbd>E</kbd> \u4EA4\u8C08`,Me.hit("KeyE")){Lt(a.name,a.line);let f=h.stats.talked=h.stats.talked||[];f.includes(a.idx)||f.push(a.idx)}}else d&&!h.launching?d.powered?aM().length?(e.prompt="<b>\u6B96\u6C11\u8230\u5DF2\u5C31\u7EEA</b><br><kbd>E</kbd>\u6253\u5F00\u661F\u56FE",Me.hit("KeyE")&&P3(d)):e.prompt="\u661F\u9645\u53D1\u5C04\u53F0 \xB7 \u6682\u65E0\u53EF\u7528\u822A\u7EBF":e.prompt='\u661F\u9645\u53D1\u5C04\u53F0 \xB7 <span class="badc">\u7535\u529B\u4E0D\u8DB3</span>':c?(e.prompt=`<b>\u661F\u9645\u8D38\u6613\u7AD9</b>${c.powered?"":' \xB7 <span class="badc">\u505C\u7535</span>'}<br><kbd>E</kbd>\u4EA4\u6613`,Me.hit("KeyE")&&(c.powered?_s("trade"):Qt("\u8D38\u6613\u7AD9\u6CA1\u6709\u7535\u529B","warn","warn"))):l&&(e.prompt=`<kbd>E</kbd> \u6253\u5F00\u5236\u9020\u5DE5\u574A${l.powered?"":"\uFF08\u505C\u7535\u4E2D\uFF09"}`,Me.hit("KeyE")&&(l.powered?_s("craft"):Qt("\u5236\u9020\u5DE5\u574A\u6CA1\u6709\u7535\u529B")));let u=h.lookBuilding;if(!e.prompt&&u&&un.id!=="build"){let f=u.def,p=u.level||1,g=ld(u)?`<br><kbd>U</kbd>\u5347\u7EA7\u5230 Lv.${p+1}\u3000${ga(i0(u))}`:"";e.prompt=`<b>${f.name}</b>\u3000Lv.${p}${p>=n0?"\uFF08\u6EE1\u7EA7\uFF09":""} \xB7 \u8010\u4E45 ${Math.ceil(u.hp)}/${Math.round(u.maxHp)}${f.power<0?u.powered?' \xB7 <span class="okc">\u4F9B\u7535\u4E2D</span>':' \xB7 <span class="badc">\u505C\u7535</span>':""}${g}<br><kbd>X</kbd>${Ka>0?'<span class="badc">\u518D\u6309\u4E00\u6B21\u786E\u8BA4\u62C6\u9664\uFF08\u8FD4\u8FD8 50%\uFF09</span>':"\u62C6\u9664"}`,u.broken&&(e.prompt=e.prompt.replace("</b>",'</b> <span class="badc">\u53D7\u635F\u505C\u673A \xB7 \u767D\u5929\u81EA\u52A8\u4FEE\u590D</span>')),Me.hit("KeyU")&&ld(u)&&(Nv(u)?Qt(`${f.name} \u5347\u7EA7\u5230 Lv.${u.level}`,"star","good"):(G.play("deny"),Qt("\u5347\u7EA7\u6750\u6599\u4E0D\u8DB3","warn","warn"))),Me.hit("KeyX")&&(Ka>0?(Ov(u,!0),Ka=0,Qt(`\u5DF2\u62C6\u9664 ${f.name}`)):Ka=2)}return un.id==="laser"?(h.aimNode&&!e.crossClass&&(e.crossClass="node"),yo(r,o,9)&&(e.crossClass="enemy")):un.id==="rifle"&&yo(r,o,120)&&(e.crossClass="enemy"),e}var Xd=[["\u539F\u8272","none"],["\u80F6\u7247","sepia(.35) contrast(1.12) saturate(1.15) brightness(1.03)"],["\u9ED1\u767D","grayscale(1) contrast(1.25)"],["\u51B7\u8C03","hue-rotate(-18deg) saturate(.85) contrast(1.08) brightness(1.05)"]],Sm=0;function Qy(n){Bi.style.filter=Xd[n][1]==="none"?"":Xd[n][1],qe("photo-bar").innerHTML=Xd.map((e,t)=>`<span class="${t===n?"on":""}"><kbd>${t+1}</kbd>${e[0]}</span>`).join("")+'<span class="sep"></span><span><kbd>Enter</kbd>\u4FDD\u5B58\u7167\u7247</span><span><kbd>P</kbd>\u9000\u51FA</span>'}function H3(){let n=Bi.width,e=Bi.height,t=Math.round(e*.1),i=document.createElement("canvas");i.width=n,i.height=e;let s=i.getContext("2d");s.filter=Xd[Sm][1],s.drawImage(Bi,0,0),s.filter="none",s.fillStyle="#000",s.fillRect(0,0,n,t),s.fillRect(0,e-t,n,t);let r=Math.round(e*.022);s.font=`300 ${r*1.6}px "Noto Sans SC", sans-serif`,s.fillStyle="#fff",s.textBaseline="middle",s.fillText("\u661F \u6E2F",r*2,e-t/2),s.font=`400 ${r}px "Noto Sans SC", sans-serif`,s.fillStyle="rgba(255,255,255,.7)",s.textAlign="right",s.fillText(`${he.name} \xB7 ${he.place} \xB7 \u7B2C ${h.time.day} \u65E5 \xB7 \u4EBA\u53E3 ${h.colony.pop}`,n-r*2,e-t/2);let o=document.createElement("a");o.download=`\u661F\u6E2F-${he.name}-\u7B2C${h.time.day}\u65E5.png`,o.href=i.toDataURL("image/png"),document.body.appendChild(o),o.click(),o.remove(),qe("shutter").classList.remove("on"),qe("shutter").offsetWidth,qe("shutter").classList.add("on"),G.play("shutter"),h.stats.photos=(h.stats.photos||0)+1}var Qs=null,_m=9.5;function $y(n){if(h.debug&&!/landing/.test(location.search)){n();return}h.cine=!0,document.body.classList.add("cinema");let e=el.group,t=de(bt.x,bt.z)+.1,i=new Z(new Wt(1.7,10,18,1,!0),y.flame);i.rotation.x=Math.PI,i.position.y=-4.2,e.add(i);let s=ve(16752704,22,e,0,-.5,0),r=new Ci(16752720,0,120,1.4);r.position.y=-2,e.add(r);let o=new S(bt.x+20,0,bt.z+25);o.y=de(o.x,o.z)+3.2,h.time.t=.282,Qs={t:0,gy:t,flame:i,fglow:s,lamp:r,done:n,camAt:o,landed:!1,shake:0},e.position.y=t+460,G.play("rumble"),G.engine(1);let a=l=>{(l.type==="mousedown"||l.code==="Space"||l.code==="Escape")&&(Qs.t=Math.max(Qs.t,_m+6))};Qs.skip=a,window.addEventListener("keydown",a),window.addEventListener("mousedown",a)}var eM=new mn,tM=new mn,U3=new Pn,nM=new xt;function hM(n){let e=Qs;e.t+=n;let t=el.group,i=Math.min(1,e.t/_m),s=1-Math.pow(1-i,2.6);t.position.y=e.gy+460*(1-s),t.rotation.z=Math.sin(e.t*1.1)*.05*(1-i);let r=i<1;e.flame.visible=e.fglow.visible=r,e.flame.scale.set(1,.5+(1-s)*.9+Math.random()*.15,1),e.lamp.intensity=r?400*(.6+Math.random()*.4):0;let o=t.position.y-e.gy;if(r){let c=new S(t.position.x,t.position.y-1,t.position.z);for(let d=0;d<4;d++)oe.flame(c,1.4);if(o<40)for(let d=0;d<3;d++){let u=Math.random()*Math.PI*2,f=2+Math.random()*(14-o*.25);oe.dustPuff(new S(bt.x+Math.cos(u)*f,e.gy+.3,bt.z+Math.sin(u)*f),1,2)}e.shake=Math.max(e.shake,Math.max(0,1-o/120)*.25)}else e.landed||(e.landed=!0,e.shake=1,oe.ring(new S(bt.x,e.gy,bt.z),4,160),oe.dustPuff(new S(bt.x,e.gy+1,bt.z),70,16),G.play("land"),G.play("rumble"),G.engine(0));e.shake*=Math.pow(.15,n),Ea(0,tt.position),ho(n,tt.position);let a=new S(t.position.x,t.position.y+3,t.position.z),l=e.t-_m-2.2;if(l<0)tt.position.copy(e.camAt),tt.position.x+=Math.sin(e.t*.15)*4,tt.lookAt(a);else{let c=Math.min(1,l/3.2),d=c*c*(3-2*c),u=new S(Je.pos.x,Je.pos.y+1.7,Je.pos.z);if(tt.position.lerpVectors(e.camAt,u,d),nM.lookAt(e.camAt,a,tt.up),eM.setFromRotationMatrix(nM),tM.setFromEuler(U3.set(Je.pitch,Je.yaw,0,"YXZ")),tt.quaternion.slerpQuaternions(eM,tM,d),c>=1){t.remove(e.flame,e.fglow,e.lamp),t.position.y=e.gy,t.rotation.z=0,window.removeEventListener("keydown",e.skip),window.removeEventListener("mousedown",e.skip),document.body.classList.remove("cinema"),h.cine=!1,Qs=null,G.engine(0),e.done();return}}e.shake>.01&&(tt.position.x+=(Math.random()-.5)*e.shake*.5,tt.position.y+=(Math.random()-.5)*e.shake*.4)}var xi={n:0,t0:0,step:0,last:0};function N3(n){if(!xi.t0){xi.t0=n,xi.n=0;return}xi.n++;let e=n-xi.t0;if(e<4)return;let t=xi.n/e;xi.t0=n,xi.n=0,!(t>=32||xi.step>=3||n-xi.last<6)&&(xi.step++,xi.last=n,xi.step===1&&ns==="high"?(ts&&(ts.enabled=!1),on.setPixelRatio(1),Tn&&Tn.setPixelRatio(1),on.setSize(innerWidth,innerHeight),Tn&&Tn.setSize(innerWidth,innerHeight)):ns==="high"?(qd("mid",!0),Qt("\u5DF2\u81EA\u52A8\u8C03\u4F4E\u753B\u8D28\uFF0C\u4FDD\u6301\u6D41\u7545","gear")):ns==="mid"&&(qd("low",!0),Qt("\u5DF2\u81EA\u52A8\u8C03\u4F4E\u753B\u8D28\uFF0C\u4FDD\u6301\u6D41\u7545","gear")))}var iM=new ha,Wd=0;function dM(){requestAnimationFrame(dM);let n=Math.min(iM.getDelta(),.05);if(h.warping)return;if(Qs){hM(n),Ta(n),Vd(),Me.endFrame();return}if(h.launching&&!h.endingShown){cM(n),Ea(n,tt.position),r0(n,{shoot:cc}),Mm(n),ho(n,tt.position),Ta(n),Vd(),Me.endFrame();return}if(!h.started){Wd+=n*.05;let t=30;tt.position.set(bt.x+Math.cos(Wd)*t,de(bt.x,bt.z)+6,bt.z+Math.sin(Wd)*t),tt.lookAt(bt.x,de(bt.x,bt.z)+4,bt.z),h.time.t=.27+Math.sin(Wd*.5)*.01,Ea(0,tt.position),ho(n,tt.position),Ta(n),Vd();return}h.debug&&(h.locked=!0);let e=h.locked&&!h.menuOpen&&!h.endingShown&&!h.cine;e&&!h.debug&&N3(iM.elapsedTime),qe("clickhint").classList.toggle("hidden",!(h.started&&!h.locked&&!h.menuOpen&&!Je.dead&&!h.endingShown&&!h.cine)),e?uM(n):(K0(0,{prompt:""}),Ea(0,tt.position)),ho(e?n:0,tt.position),Ta(e?n:0),Me.endFrame(),Vd(),Mx(on),h.snap&&(h.snap=!1,H3())}function uM(n){{h.driving&&Me.hit("KeyE")&&!h.menuOpen&&(dm(Je),Me.pressed.delete("KeyE")),h.driving||Je.update(n),by(n,Je,tt),Ea(n,tt.position),h.time.dawn&&(h.time.dawn=!1,Qt(`\u7B2C ${h.time.day} \u65E5 \xB7 \u9ECE\u660E`,"sun")),lv(n),h.driving?h.lookBuilding=null:yx(n,Je,tt),Me.hit("KeyG")&&!h.menuOpen&&!Je.dead&&!h.driving&&Rx(tt,Je),Ax(n),zy(n),px(n),Gy(n),py(n),r0(n,{shoot:cc}),Mm(n),wx(n),Ev(n,un.id==="build"&&!!It.type),Hp.emissiveIntensity=.06+h.time.night*(.55+Math.sin(performance.now()*.0015)*.15),cx(n),kx(n),ox(n),$v(n),el.beacon.visible=Math.sin(performance.now()*.004)>0,iy(n),cy(n),Ux(n),yy(n),Iv(n,Xa),Ty(n),Py(n),Z1(),!h.plazaSeen&&h.time.night>.6&&h.colonists.filter(t=>t.atPlaza&&!t.target).length>=4&&(h.plazaSeen=!0,Lt("\u82CF\u5FF5 \xB7 \u6559\u5E08","\u4ECA\u665A\u5927\u5BB6\u90FD\u6765\u4E86\u3002\u6211\u4EEC\u5C31\u8FD9\u6837\u7AD9\u7740\uFF0C\u770B\u7740\u90A3\u9897\u84DD\u8272\u7684\u661F\u7403\u8F6C\u554A\u8F6C\u2026\u2026\u5B69\u5B50\u95EE\u6211\uFF0C\u90A3\u662F\u54EA\u91CC\u3002\u6211\u8BF4\uFF0C\u90A3\u662F\u6211\u4EEC\u51FA\u53D1\u7684\u5730\u65B9\u3002"));let e=D3(n);e.tip=C3(n),K0(n,e),G.update(h.storm,h.time.night),Em-=n,Em<=0&&(Em=45,$s(!0)),h.terraform>0&&h.terraform<=1&&(wm-=n,wm<=0&&(wm=4,Dp(rM(),h.terraform)))}}{let n=()=>{qe("loading").style.transition="opacity .8s",qe("loading").style.opacity=0,setTimeout(()=>qe("loading").remove(),900)},e=null;try{e=on.compileAsync?on.compileAsync(Kn,tt):null}catch{e=null}e&&e.then?Promise.race([e,new Promise(t=>setTimeout(t,8e3))]).then(n,n):n()}dM();window.addEventListener("beforeunload",()=>$s(!0));window.__G=h;window.__dbg={give(n=200){for(let e in rn)h.res[e]+=n},tp(n,e){Je.pos.set(n,de(n,e),e)},time(n){h.time.t=n},build:(n,e,t)=>cd(n,e,t,0),chapter:n=>ac(n),look(n,e){Je.yaw=n,Je.pitch=e},begin:()=>tl(!1),fest:()=>Ry(),boom:(n,e,t,i)=>xs(new S(n,e,t),i),pod:()=>D0(),audio:G,spawnCrawler:lc,spawnDevil:Ny,spawnWasp:g0,geyserList:Fy,triggerGeyser:By,whales:uy,slope:(n,e)=>de(n+3,e)-de(n,e),landStep(n){for(let e=0;e<n&&Qs;e+=.05)hM(.05);return!!Qs},launch(n="europa"){let e=h.buildings.find(t=>t.type==="launch");lM(e,n)},launchStep(n){for(let e=0;e<n&&h.launching&&!h.endingShown;e+=.05)cM(.05),ho(.05,tt.position),Ta(.05);return h.launching.t},step(n,e=.05){for(let t=0;t<n;t+=e)uM(e),ho(e,tt.position),Me.endFrame()},input:Me,save:$s,toast:Qt,setGhost:fo,openMenu:_s,closeMenus:Zn,tool:un,placement:It,rover:Od};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
