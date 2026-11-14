(()=>{var Jf="170";var $y=0,Rm=1,eM=2;var Og=1,Qf=2,Us=3,hr=0,Dn=1,bt=2,Mn=0,li=1,He=2,Cm=3,Pm=4,$f=5,Ei=100,tM=101,nM=102,iM=103,sM=104,ca=200,rM=201,oM=202,aM=203,Ru=204,Cu=205,Rh=206,lM=207,Ch=208,cM=209,hM=210,dM=211,uM=212,fM=213,pM=214,Pu=0,Iu=1,Lu=2,Jo=3,Du=4,Uu=5,Hu=6,Nu=7,Fg=0,mM=1,gM=2,cr=0,ep=1,tp=2,np=3,io=4,vM=5,ip=6,sp=7;var Bg=300,Qo=301,$o=302,zu=303,ku=304,Ph=306,Jn=1e3,Zr=1001,Ou=1002,pn=1003,xM=1004;var Sc=1005;var bi=1006,jd=1007;var Kr=1008;var ei=1009,Gg=1010,Vg=1011,yl=1012,rp=1013,Jr=1014,rs=1015,wn=1016,op=1017,ap=1018,dr=1020,Wg=35902,Xg=1021,qg=1022,ai=1023,Yg=1024,jg=1025,jo=1026,ur=1027,lp=1028,cp=1029,Zg=1030,hp=1031;var dp=1033,$c=33776,eh=33777,th=33778,nh=33779,Fu=35840,Bu=35841,Gu=35842,Vu=35843,Wu=36196,Xu=37492,qu=37496,Yu=37808,ju=37809,Zu=37810,Ku=37811,Ju=37812,Qu=37813,$u=37814,ef=37815,tf=37816,nf=37817,sf=37818,rf=37819,of=37820,af=37821,ih=36492,lf=36494,cf=36495,Kg=36283,hf=36284,df=36285,uf=36286;var sh=2300,ff=2301,Zd=2302,Im=2400,Lm=2401,Dm=2402;var yM=3200,MM=3201;var up=0,EM=1,ar="",_t="srgb",ha="srgb-linear",Ih="linear",Gt="srgb";var Ro=7680;var Um=519,bM=512,wM=513,SM=514,Jg=515,_M=516,TM=517,AM=518,RM=519,pf=35044,fp=35048;var Hm="300 es",Ns=2e3,rh=2001,fr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nm=1234567,pl=Math.PI/180,ea=180/Math.PI;function zs(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Fn[n&255]+Fn[n>>8&255]+Fn[n>>16&255]+Fn[n>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[t&63|128]+Fn[t>>8&255]+"-"+Fn[t>>16&255]+Fn[t>>24&255]+Fn[i&255]+Fn[i>>8&255]+Fn[i>>16&255]+Fn[i>>24&255]).toLowerCase()}function An(n,e,t){return Math.max(e,Math.min(t,n))}function pp(n,e){return(n%e+e)%e}function CM(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function PM(n,e,t){return n!==e?(t-n)/(e-n):0}function ml(n,e,t){return(1-t)*n+t*e}function IM(n,e,t,i){return ml(n,e,1-Math.exp(-t*i))}function LM(n,e=1){return e-Math.abs(pp(n,e*2)-e)}function DM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function UM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function HM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function NM(n,e){return n+Math.random()*(e-n)}function zM(n){return n*(.5-Math.random())}function kM(n){n!==void 0&&(Nm=n);let e=Nm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function OM(n){return n*pl}function FM(n){return n*ea}function BM(n){return(n&n-1)===0&&n!==0}function GM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function VM(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function WM(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),d=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*d,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*d,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*d,a*c);break;case"XZX":n.set(a*d,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*d,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Tt={DEG2RAD:pl,RAD2DEG:ea,generateUUID:zs,clamp:An,euclideanModulo:pp,mapLinear:CM,inverseLerp:PM,lerp:ml,damp:IM,pingpong:LM,smoothstep:DM,smootherstep:UM,randInt:HM,randFloat:NM,randFloatSpread:zM,seededRandom:kM,degToRad:OM,radToDeg:FM,isPowerOfTwo:BM,ceilPowerOfTwo:GM,floorPowerOfTwo:VM,setQuaternionFromProperEuler:WM,normalize:jt,denormalize:qi},$=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(An(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},gt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],u=i[7],f=i[2],p=i[5],g=i[8],x=s[0],v=s[3],m=s[6],E=s[1],b=s[4],M=s[7],L=s[2],R=s[5],P=s[8];return r[0]=o*x+a*E+l*L,r[3]=o*v+a*b+l*R,r[6]=o*m+a*M+l*P,r[1]=c*x+d*E+u*L,r[4]=c*v+d*b+u*R,r[7]=c*m+d*M+u*P,r[2]=f*x+p*E+g*L,r[5]=f*v+p*b+g*R,r[8]=f*m+p*M+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-i*r*d+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*o-a*c,f=a*l-d*r,p=c*r-o*l,g=t*u+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-d*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(d*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Kd.makeScale(e,t)),this}rotate(e){return this.premultiply(Kd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Kd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Kd=new gt;function Qg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function oh(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function XM(){let n=oh("canvas");return n.style.display="block",n}var zm={};function ul(n){n in zm||(zm[n]=!0,console.warn(n))}function qM(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function YM(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function jM(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Ct={enabled:!0,workingColorSpace:ha,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Gt&&(n.r=ks(n.r),n.g=ks(n.g),n.b=ks(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Gt&&(n.r=Zo(n.r),n.g=Zo(n.g),n.b=Zo(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ar?Ih:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function ks(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var km=[.64,.33,.3,.6,.15,.06],Om=[.2126,.7152,.0722],Fm=[.3127,.329],Bm=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gm=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ct.define({[ha]:{primaries:km,whitePoint:Fm,transfer:Ih,toXYZ:Bm,fromXYZ:Gm,luminanceCoefficients:Om,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:km,whitePoint:Fm,transfer:Gt,toXYZ:Bm,fromXYZ:Gm,luminanceCoefficients:Om,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}});var Co,mf=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Co===void 0&&(Co=oh("canvas")),Co.width=e.width,Co.height=e.height;let i=Co.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Co}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=oh("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ks(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ks(t[i]/255)*255):t[i]=ks(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ZM=0,ah=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=zs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Jd(s[o].image)):r.push(Jd(s[o]))}else r=Jd(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Jd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?mf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var KM=0,Rn=class n extends fr{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Zr,s=Zr,r=bi,o=Kr,a=ai,l=ei,c=n.DEFAULT_ANISOTROPY,d=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=zs(),this.name="",this.source=new ah(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jn:e.x=e.x-Math.floor(e.x);break;case Zr:e.x=e.x<0?0:1;break;case Ou:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jn:e.y=e.y-Math.floor(e.y);break;case Zr:e.y=e.y<0?0:1;break;case Ou:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Bg;Rn.DEFAULT_ANISOTROPY=1;var Vt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],d=l[4],u=l[8],f=l[1],p=l[5],g=l[9],x=l[2],v=l[6],m=l[10];if(Math.abs(d-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-v)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+v)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,M=(p+1)/2,L=(m+1)/2,R=(d+f)/4,P=(u+x)/4,I=(g+v)/4;return b>M&&b>L?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=R/i,r=P/i):M>L?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=R/s,r=I/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=P/r,s=I/r),this.set(i,s,r,t),this}let E=Math.sqrt((v-g)*(v-g)+(u-x)*(u-x)+(f-d)*(f-d));return Math.abs(E)<.001&&(E=1),this.x=(v-g)/E,this.y=(u-x)/E,this.z=(f-d)/E,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},gf=class extends fr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Rn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ah(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ln=class extends gf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},lh=class extends Rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var vf=class extends Rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],d=i[s+2],u=i[s+3],f=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==f||c!==p||d!==g){let v=1-a,m=l*f+c*p+d*g+u*x,E=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){let L=Math.sqrt(b),R=Math.atan2(L,m*E);v=Math.sin(v*R)/L,a=Math.sin(a*R)/L}let M=a*E;if(l=l*v+f*M,c=c*v+p*M,d=d*v+g*M,u=u*v+x*M,v===1-a){let L=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=L,c*=L,d*=L,u*=L}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],d=i[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+d*u+l*p-c*f,e[t+1]=l*g+d*f+c*u-a*p,e[t+2]=c*g+d*p+a*f-l*u,e[t+3]=d*g-a*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(s/2),u=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*d*u+c*p*g,this._y=c*p*u-f*d*g,this._z=c*d*g+f*p*u,this._w=c*d*u-f*p*g;break;case"YXZ":this._x=f*d*u+c*p*g,this._y=c*p*u-f*d*g,this._z=c*d*g-f*p*u,this._w=c*d*u+f*p*g;break;case"ZXY":this._x=f*d*u-c*p*g,this._y=c*p*u+f*d*g,this._z=c*d*g+f*p*u,this._w=c*d*u-f*p*g;break;case"ZYX":this._x=f*d*u-c*p*g,this._y=c*p*u+f*d*g,this._z=c*d*g-f*p*u,this._w=c*d*u+f*p*g;break;case"YZX":this._x=f*d*u+c*p*g,this._y=c*p*u+f*d*g,this._z=c*d*g-f*p*u,this._w=c*d*u-f*p*g;break;case"XZY":this._x=f*d*u-c*p*g,this._y=c*p*u-f*d*g,this._z=c*d*g+f*p*u,this._w=c*d*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],f=i+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(d-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+d)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(An(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-i*c,this._z=r*d+o*c+i*l-s*a,this._w=o*d-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),d=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*d,this.y=i+l*d+a*c-r*u,this.z=s+l*u+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qd.copy(this).projectOnVector(e),this.sub(Qd)}reflect(e){return this.sub(Qd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(An(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qd=new S,Vm=new mn,Yi=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vi):Vi.fromBufferAttribute(r,o),Vi.applyMatrix4(e.matrixWorld),this.expandByPoint(Vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_c.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_c.copy(i.boundingBox)),_c.applyMatrix4(e.matrixWorld),this.union(_c)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vi),Vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nl),Tc.subVectors(this.max,nl),Po.subVectors(e.a,nl),Io.subVectors(e.b,nl),Lo.subVectors(e.c,nl),tr.subVectors(Io,Po),nr.subVectors(Lo,Io),Br.subVectors(Po,Lo);let t=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-Br.z,Br.y,tr.z,0,-tr.x,nr.z,0,-nr.x,Br.z,0,-Br.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-Br.y,Br.x,0];return!$d(t,Po,Io,Lo,Tc)||(t=[1,0,0,0,1,0,0,0,1],!$d(t,Po,Io,Lo,Tc))?!1:(Ac.crossVectors(tr,nr),t=[Ac.x,Ac.y,Ac.z],$d(t,Po,Io,Lo,Tc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Cs=[new S,new S,new S,new S,new S,new S,new S,new S],Vi=new S,_c=new Yi,Po=new S,Io=new S,Lo=new S,tr=new S,nr=new S,Br=new S,nl=new S,Tc=new S,Ac=new S,Gr=new S;function $d(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Gr.fromArray(n,r);let a=s.x*Math.abs(Gr.x)+s.y*Math.abs(Gr.y)+s.z*Math.abs(Gr.z),l=e.dot(Gr),c=t.dot(Gr),d=i.dot(Gr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var JM=new Yi,il=new S,eu=new S,pr=class{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):JM.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;il.subVectors(e,this.center);let t=il.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(il,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(il.copy(e.center).add(eu)),this.expandByPoint(il.copy(e.center).sub(eu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ps=new S,tu=new S,Rc=new S,ir=new S,nu=new S,Cc=new S,iu=new S,ch=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ps)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ps.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ps.copy(this.origin).addScaledVector(this.direction,t),Ps.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){tu.copy(e).add(t).multiplyScalar(.5),Rc.copy(t).sub(e).normalize(),ir.copy(this.origin).sub(tu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Rc),a=ir.dot(this.direction),l=-ir.dot(Rc),c=ir.lengthSq(),d=Math.abs(1-o*o),u,f,p,g;if(d>0)if(u=o*l-a,f=o*a-l,g=r*d,u>=0)if(f>=-g)if(f<=g){let x=1/d;u*=x,f*=x,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(tu).addScaledVector(Rc,f),p}intersectSphere(e,t){Ps.subVectors(e.center,this.origin);let i=Ps.dot(this.direction),s=Ps.dot(Ps)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),d>=0?(r=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ps)!==null}intersectTriangle(e,t,i,s,r){nu.subVectors(t,e),Cc.subVectors(i,e),iu.crossVectors(nu,Cc);let o=this.direction.dot(iu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ir.subVectors(this.origin,e);let l=a*this.direction.dot(Cc.crossVectors(ir,Cc));if(l<0)return null;let c=a*this.direction.dot(nu.cross(ir));if(c<0||l+c>o)return null;let d=-a*ir.dot(iu);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vt=class n{constructor(e,t,i,s,r,o,a,l,c,d,u,f,p,g,x,v){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,d,u,f,p,g,x,v)}set(e,t,i,s,r,o,a,l,c,d,u,f,p,g,x,v){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=d,m[10]=u,m[14]=f,m[3]=p,m[7]=g,m[11]=x,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Do.setFromMatrixColumn(e,0).length(),r=1/Do.setFromMatrixColumn(e,1).length(),o=1/Do.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*d,p=o*u,g=a*d,x=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*d,p=l*u,g=c*d,x=c*u;t[0]=f+x*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=p*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*d,p=l*u,g=c*d,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*d,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*d,p=o*u,g=a*d,x=a*u;t[0]=l*d,t[4]=g*c-p,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*d,t[4]=x-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=p*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=f*u+x,t[5]=o*d,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*d,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QM,e,$M)}lookAt(e,t,i){let s=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),sr.crossVectors(i,ri),sr.lengthSq()===0&&(Math.abs(i.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),sr.crossVectors(i,ri)),sr.normalize(),Pc.crossVectors(ri,sr),s[0]=sr.x,s[4]=Pc.x,s[8]=ri.x,s[1]=sr.y,s[5]=Pc.y,s[9]=ri.y,s[2]=sr.z,s[6]=Pc.z,s[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],u=i[5],f=i[9],p=i[13],g=i[2],x=i[6],v=i[10],m=i[14],E=i[3],b=i[7],M=i[11],L=i[15],R=s[0],P=s[4],I=s[8],_=s[12],w=s[1],U=s[5],O=s[9],F=s[13],V=s[2],te=s[6],q=s[10],oe=s[14],Y=s[3],he=s[7],Te=s[11],ze=s[15];return r[0]=o*R+a*w+l*V+c*Y,r[4]=o*P+a*U+l*te+c*he,r[8]=o*I+a*O+l*q+c*Te,r[12]=o*_+a*F+l*oe+c*ze,r[1]=d*R+u*w+f*V+p*Y,r[5]=d*P+u*U+f*te+p*he,r[9]=d*I+u*O+f*q+p*Te,r[13]=d*_+u*F+f*oe+p*ze,r[2]=g*R+x*w+v*V+m*Y,r[6]=g*P+x*U+v*te+m*he,r[10]=g*I+x*O+v*q+m*Te,r[14]=g*_+x*F+v*oe+m*ze,r[3]=E*R+b*w+M*V+L*Y,r[7]=E*P+b*U+M*te+L*he,r[11]=E*I+b*O+M*q+L*Te,r[15]=E*_+b*F+M*oe+L*ze,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],f=e[10],p=e[14],g=e[3],x=e[7],v=e[11],m=e[15];return g*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*p-i*l*p)+x*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*d-r*l*d)+v*(+t*c*u-t*a*p-r*o*u+i*o*p+r*a*d-i*c*d)+m*(-s*a*d-t*l*u+t*a*f+s*o*u-i*o*f+i*l*d)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],f=e[10],p=e[11],g=e[12],x=e[13],v=e[14],m=e[15],E=u*v*c-x*f*c+x*l*p-a*v*p-u*l*m+a*f*m,b=g*f*c-d*v*c-g*l*p+o*v*p+d*l*m-o*f*m,M=d*x*c-g*u*c+g*a*p-o*x*p-d*a*m+o*u*m,L=g*u*l-d*x*l-g*a*f+o*x*f+d*a*v-o*u*v,R=t*E+i*b+s*M+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/R;return e[0]=E*P,e[1]=(x*f*r-u*v*r-x*s*p+i*v*p+u*s*m-i*f*m)*P,e[2]=(a*v*r-x*l*r+x*s*c-i*v*c-a*s*m+i*l*m)*P,e[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*p-i*l*p)*P,e[4]=b*P,e[5]=(d*v*r-g*f*r+g*s*p-t*v*p-d*s*m+t*f*m)*P,e[6]=(g*l*r-o*v*r-g*s*c+t*v*c+o*s*m-t*l*m)*P,e[7]=(o*f*r-d*l*r+d*s*c-t*f*c-o*s*p+t*l*p)*P,e[8]=M*P,e[9]=(g*u*r-d*x*r-g*i*p+t*x*p+d*i*m-t*u*m)*P,e[10]=(o*x*r-g*a*r+g*i*c-t*x*c-o*i*m+t*a*m)*P,e[11]=(d*a*r-o*u*r-d*i*c+t*u*c+o*i*p-t*a*p)*P,e[12]=L*P,e[13]=(d*x*s-g*u*s+g*i*f-t*x*f-d*i*v+t*u*v)*P,e[14]=(g*a*s-o*x*s-g*i*l+t*x*l+o*i*v-t*a*v)*P,e[15]=(o*u*s-d*a*s+d*i*l-t*u*l-o*i*f+t*a*f)*P,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+i,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,u=a+a,f=r*c,p=r*d,g=r*u,x=o*d,v=o*u,m=a*u,E=l*c,b=l*d,M=l*u,L=i.x,R=i.y,P=i.z;return s[0]=(1-(x+m))*L,s[1]=(p+M)*L,s[2]=(g-b)*L,s[3]=0,s[4]=(p-M)*R,s[5]=(1-(f+m))*R,s[6]=(v+E)*R,s[7]=0,s[8]=(g+b)*P,s[9]=(v-E)*P,s[10]=(1-(f+x))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Do.set(s[0],s[1],s[2]).length(),o=Do.set(s[4],s[5],s[6]).length(),a=Do.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Wi.copy(this);let c=1/r,d=1/o,u=1/a;return Wi.elements[0]*=c,Wi.elements[1]*=c,Wi.elements[2]*=c,Wi.elements[4]*=d,Wi.elements[5]*=d,Wi.elements[6]*=d,Wi.elements[8]*=u,Wi.elements[9]*=u,Wi.elements[10]*=u,t.setFromRotationMatrix(Wi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Ns){let l=this.elements,c=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),p,g;if(a===Ns)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===rh)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ns){let l=this.elements,c=1/(t-e),d=1/(i-s),u=1/(o-r),f=(t+e)*c,p=(i+s)*d,g,x;if(a===Ns)g=(o+r)*u,x=-2*u;else if(a===rh)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Do=new S,Wi=new vt,QM=new S(0,0,0),$M=new S(1,1,1),sr=new S,Pc=new S,ri=new S,Wm=new vt,Xm=new mn,Cn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(An(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-An(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(An(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-An(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(An(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-An(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Wm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xm.setFromEuler(this),this.setFromQuaternion(Xm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cn.DEFAULT_ORDER="XYZ";var hh=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},e2=0,qm=new S,Uo=new mn,Is=new vt,Ic=new S,sl=new S,t2=new S,n2=new mn,Ym=new S(1,0,0),jm=new S(0,1,0),Zm=new S(0,0,1),Km={type:"added"},i2={type:"removed"},Ho={type:"childadded",child:null},su={type:"childremoved",child:null},gn=class n extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:e2++}),this.uuid=zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new S,t=new Cn,i=new mn,s=new S(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new gt}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Uo.setFromAxisAngle(e,t),this.quaternion.multiply(Uo),this}rotateOnWorldAxis(e,t){return Uo.setFromAxisAngle(e,t),this.quaternion.premultiply(Uo),this}rotateX(e){return this.rotateOnAxis(Ym,e)}rotateY(e){return this.rotateOnAxis(jm,e)}rotateZ(e){return this.rotateOnAxis(Zm,e)}translateOnAxis(e,t){return qm.copy(e).applyQuaternion(this.quaternion),this.position.add(qm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ym,e)}translateY(e){return this.translateOnAxis(jm,e)}translateZ(e){return this.translateOnAxis(Zm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Is.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ic.copy(e):Ic.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Is.lookAt(sl,Ic,this.up):Is.lookAt(Ic,sl,this.up),this.quaternion.setFromRotationMatrix(Is),s&&(Is.extractRotation(s.matrixWorld),Uo.setFromRotationMatrix(Is),this.quaternion.premultiply(Uo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Km),Ho.child=e,this.dispatchEvent(Ho),Ho.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(i2),su.child=e,this.dispatchEvent(su),su.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Is.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Is.multiply(e.parent.matrixWorld)),e.applyMatrix4(Is),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Km),Ho.child=e,this.dispatchEvent(Ho),Ho.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,e,t2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,n2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};gn.DEFAULT_UP=new S(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xi=new S,Ls=new S,ru=new S,Ds=new S,No=new S,zo=new S,Jm=new S,ou=new S,au=new S,lu=new S,cu=new Vt,hu=new Vt,du=new Vt,lr=class n{constructor(e=new S,t=new S,i=new S){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Xi.subVectors(e,t),s.cross(Xi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Xi.subVectors(s,t),Ls.subVectors(i,t),ru.subVectors(e,t);let o=Xi.dot(Xi),a=Xi.dot(Ls),l=Xi.dot(ru),c=Ls.dot(Ls),d=Ls.dot(ru),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-a*d)*f,g=(o*d-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ds)===null?!1:Ds.x>=0&&Ds.y>=0&&Ds.x+Ds.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ds)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ds.x),l.addScaledVector(o,Ds.y),l.addScaledVector(a,Ds.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return cu.setScalar(0),hu.setScalar(0),du.setScalar(0),cu.fromBufferAttribute(e,t),hu.fromBufferAttribute(e,i),du.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(cu,r.x),o.addScaledVector(hu,r.y),o.addScaledVector(du,r.z),o}static isFrontFacing(e,t,i,s){return Xi.subVectors(i,t),Ls.subVectors(e,t),Xi.cross(Ls).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xi.subVectors(this.c,this.b),Ls.subVectors(this.a,this.b),Xi.cross(Ls).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;No.subVectors(s,i),zo.subVectors(r,i),ou.subVectors(e,i);let l=No.dot(ou),c=zo.dot(ou);if(l<=0&&c<=0)return t.copy(i);au.subVectors(e,s);let d=No.dot(au),u=zo.dot(au);if(d>=0&&u<=d)return t.copy(s);let f=l*u-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(No,o);lu.subVectors(e,r);let p=No.dot(lu),g=zo.dot(lu);if(g>=0&&p<=g)return t.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(zo,a);let v=d*g-p*u;if(v<=0&&u-d>=0&&p-g>=0)return Jm.subVectors(r,s),a=(u-d)/(u-d+(p-g)),t.copy(s).addScaledVector(Jm,a);let m=1/(v+x+f);return o=x*m,a=f*m,t.copy(i).addScaledVector(No,o).addScaledVector(zo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$g={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},Lc={h:0,s:0,l:0};function uu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var re=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ct.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ct.workingColorSpace){if(e=pp(e,1),t=An(t,0,1),i=An(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=uu(o,r,e+1/3),this.g=uu(o,r,e),this.b=uu(o,r,e-1/3)}return Ct.toWorkingColorSpace(this,s),this}setStyle(e,t=_t){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){let i=$g[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}copyLinearToSRGB(e){return this.r=Zo(e.r),this.g=Zo(e.g),this.b=Zo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return Ct.fromWorkingColorSpace(Bn.copy(this),e),Math.round(An(Bn.r*255,0,255))*65536+Math.round(An(Bn.g*255,0,255))*256+Math.round(An(Bn.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(Bn.copy(this),t);let i=Bn.r,s=Bn.g,r=Bn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,d=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(Bn.copy(this),t),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=_t){Ct.fromWorkingColorSpace(Bn.copy(this),e);let t=Bn.r,i=Bn.g,s=Bn.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+t,rr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(rr),e.getHSL(Lc);let i=ml(rr.h,Lc.h,t),s=ml(rr.s,Lc.s,t),r=ml(rr.l,Lc.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bn=new re;re.NAMES=$g;var s2=0,os=class extends fr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:s2++}),this.uuid=zs(),this.name="",this.blending=li,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ru,this.blendDst=Cu,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=Jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Um,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ro,this.stencilZFail=Ro,this.stencilZPass=Ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==li&&(i.blending=this.blending),this.side!==hr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ru&&(i.blendSrc=this.blendSrc),this.blendDst!==Cu&&(i.blendDst=this.blendDst),this.blendEquation!==Ei&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Jo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Um&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ro&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ro&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ro&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ke=class extends os{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Fg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var vn=new S,Dc=new $,an=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=pf,this.updateRanges=[],this.gpuType=rs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Dc.fromBufferAttribute(this,t),Dc.applyMatrix3(e),this.setXY(t,Dc.x,Dc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix3(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=qi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pf&&(e.usage=this.usage),e}};var dh=class extends an{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var uh=class extends an{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var nt=class extends an{constructor(e,t,i){super(new Float32Array(e),t,i)}},r2=0,Mi=new vt,fu=new gn,ko=new S,oi=new Yi,rl=new Yi,Tn=new S,Rt=class n extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:r2++}),this.uuid=zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qg(e)?uh:dh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new gt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,t,i){return Mi.makeTranslation(e,t,i),this.applyMatrix4(Mi),this}scale(e,t,i){return Mi.makeScale(e,t,i),this.applyMatrix4(Mi),this}lookAt(e){return fu.lookAt(e),fu.updateMatrix(),this.applyMatrix4(fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ko).negate(),this.translate(ko.x,ko.y,ko.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nt(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];oi.setFromBufferAttribute(r),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(e){let i=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];rl.setFromBufferAttribute(a),this.morphTargetsRelative?(Tn.addVectors(oi.min,rl.min),oi.expandByPoint(Tn),Tn.addVectors(oi.max,rl.max),oi.expandByPoint(Tn)):(oi.expandByPoint(rl.min),oi.expandByPoint(rl.max))}oi.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Tn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Tn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Tn.fromBufferAttribute(a,c),l&&(ko.fromBufferAttribute(e,c),Tn.add(ko)),s=Math.max(s,i.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new S,l[I]=new S;let c=new S,d=new S,u=new S,f=new $,p=new $,g=new $,x=new S,v=new S;function m(I,_,w){c.fromBufferAttribute(i,I),d.fromBufferAttribute(i,_),u.fromBufferAttribute(i,w),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,_),g.fromBufferAttribute(r,w),d.sub(c),u.sub(c),p.sub(f),g.sub(f);let U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(x.copy(d).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(U),v.copy(u).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(U),a[I].add(x),a[_].add(x),a[w].add(x),l[I].add(v),l[_].add(v),l[w].add(v))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let I=0,_=E.length;I<_;++I){let w=E[I],U=w.start,O=w.count;for(let F=U,V=U+O;F<V;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let b=new S,M=new S,L=new S,R=new S;function P(I){L.fromBufferAttribute(s,I),R.copy(L);let _=a[I];b.copy(_),b.sub(L.multiplyScalar(L.dot(_))).normalize(),M.crossVectors(R,_);let U=M.dot(l[I])<0?-1:1;o.setXYZW(I,b.x,b.y,b.z,U)}for(let I=0,_=E.length;I<_;++I){let w=E[I],U=w.start,O=w.count;for(let F=U,V=U+O;F<V;F+=3)P(e.getX(F+0)),P(e.getX(F+1)),P(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new S,r=new S,o=new S,a=new S,l=new S,c=new S,d=new S,u=new S;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),x=e.getX(f+1),v=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,v),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,v),a.add(d),l.add(d),c.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tn.fromBufferAttribute(e,t),Tn.normalize(),e.setXYZ(t,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(a,l){let c=a.array,d=a.itemSize,u=a.normalized,f=new c.constructor(l.length*d),p=0,g=0;for(let x=0,v=l.length;x<v;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*d;for(let m=0;m<d;m++)f[g++]=c[p++]}return new an(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let d=0,u=c.length;d<u;d++){let f=c[d],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];d.push(p.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],u=r[c];for(let f=0,p=u.length;f<p;f++)d.push(u[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,d=o.length;c<d;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qm=new vt,Vr=new ch,Uc=new pr,$m=new S,Hc=new S,Nc=new S,zc=new S,pu=new S,kc=new S,eg=new S,Oc=new S,Q=class extends gn{constructor(e=new Rt,t=new ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){kc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=a[l],u=r[l];d!==0&&(pu.fromBufferAttribute(u,e),o?kc.addScaledVector(pu,d):kc.addScaledVector(pu.sub(t),d))}t.add(kc)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Uc.copy(i.boundingSphere),Uc.applyMatrix4(r),Vr.copy(e.ray).recast(e.near),!(Uc.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(Uc,$m)===null||Vr.origin.distanceToSquared($m)>(e.far-e.near)**2))&&(Qm.copy(r).invert(),Vr.copy(e.ray).applyMatrix4(Qm),!(i.boundingBox!==null&&Vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let v=f[g],m=o[v.materialIndex],E=Math.max(v.start,p.start),b=Math.min(a.count,Math.min(v.start+v.count,p.start+p.count));for(let M=E,L=b;M<L;M+=3){let R=a.getX(M),P=a.getX(M+1),I=a.getX(M+2);s=Fc(this,m,e,i,c,d,u,R,P,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let v=g,m=x;v<m;v+=3){let E=a.getX(v),b=a.getX(v+1),M=a.getX(v+2);s=Fc(this,o,e,i,c,d,u,E,b,M),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let v=f[g],m=o[v.materialIndex],E=Math.max(v.start,p.start),b=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let M=E,L=b;M<L;M+=3){let R=M,P=M+1,I=M+2;s=Fc(this,m,e,i,c,d,u,R,P,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let v=g,m=x;v<m;v+=3){let E=v,b=v+1,M=v+2;s=Fc(this,o,e,i,c,d,u,E,b,M),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}}};function o2(n,e,t,i,s,r,o,a){let l;if(e.side===Dn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===hr,a),l===null)return null;Oc.copy(a),Oc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Oc);return c<t.near||c>t.far?null:{distance:c,point:Oc.clone(),object:n}}function Fc(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Hc),n.getVertexPosition(l,Nc),n.getVertexPosition(c,zc);let d=o2(n,e,t,i,Hc,Nc,zc,eg);if(d){let u=new S;lr.getBarycoord(eg,Hc,Nc,zc,u),s&&(d.uv=lr.getInterpolatedAttribute(s,a,l,c,u,new $)),r&&(d.uv1=lr.getInterpolatedAttribute(r,a,l,c,u,new $)),o&&(d.normal=lr.getInterpolatedAttribute(o,a,l,c,u,new S),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new S,materialIndex:0};lr.getNormal(Hc,Nc,zc,f.normal),d.face=f,d.barycoord=u}return d}var Ke=class n extends Rt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],d=[],u=[],f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(d,3)),this.setAttribute("uv",new nt(u,2));function g(x,v,m,E,b,M,L,R,P,I,_){let w=M/P,U=L/I,O=M/2,F=L/2,V=R/2,te=P+1,q=I+1,oe=0,Y=0,he=new S;for(let Te=0;Te<q;Te++){let ze=Te*U-F;for(let lt=0;lt<te;lt++){let Dt=lt*w-O;he[x]=Dt*E,he[v]=ze*b,he[m]=V,c.push(he.x,he.y,he.z),he[x]=0,he[v]=0,he[m]=R>0?1:-1,d.push(he.x,he.y,he.z),u.push(lt/P),u.push(1-Te/I),oe+=1}}for(let Te=0;Te<I;Te++)for(let ze=0;ze<P;ze++){let lt=f+ze+te*Te,Dt=f+ze+te*(Te+1),K=f+(ze+1)+te*(Te+1),de=f+(ze+1)+te*Te;l.push(lt,Dt,de),l.push(Dt,K,de),Y+=6}a.addGroup(p,Y,_),p+=Y,f+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ta(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Kn(n){let e={};for(let t=0;t<n.length;t++){let i=ta(n[t]);for(let s in i)e[s]=i[s]}return e}function a2(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ev(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}var Pn={clone:ta,merge:Kn},l2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,c2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ht=class extends os{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=l2,this.fragmentShader=c2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ta(e.uniforms),this.uniformsGroups=a2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},fh=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Ns}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},or=new S,tg=new $,ng=new $,fn=class extends fh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ea*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(pl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ea*2*Math.atan(Math.tan(pl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(or.x,or.y).multiplyScalar(-e/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(or.x,or.y).multiplyScalar(-e/or.z)}getViewSize(e,t){return this.getViewBounds(e,tg,ng),t.subVectors(ng,tg)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(pl*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Oo=-90,Fo=1,xf=class extends gn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new fn(Oo,Fo,e,t);s.layers=this.layers,this.add(s);let r=new fn(Oo,Fo,e,t);r.layers=this.layers,this.add(r);let o=new fn(Oo,Fo,e,t);o.layers=this.layers,this.add(o);let a=new fn(Oo,Fo,e,t);a.layers=this.layers,this.add(a);let l=new fn(Oo,Fo,e,t);l.layers=this.layers,this.add(l);let c=new fn(Oo,Fo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ns)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rh)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,d),e.setRenderTarget(u,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ph=class extends Rn{constructor(e,t,i,s,r,o,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Qo,super(e,t,i,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},yf=class extends ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ph(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ke(5,5,5),r=new ht({name:"CubemapFromEquirect",uniforms:ta(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dn,blending:Mn});r.uniforms.tEquirect.value=t;let o=new Q(s,r),a=t.minFilter;return t.minFilter===Kr&&(t.minFilter=bi),new xf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},mu=new S,h2=new S,d2=new gt,Hs=class{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=mu.subVectors(i,t).cross(h2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(mu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||d2.getNormalMatrix(e),s=this.coplanarPoint(mu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wr=new pr,Bc=new S,Ml=class{constructor(e=new Hs,t=new Hs,i=new Hs,s=new Hs,r=new Hs,o=new Hs){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ns){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],d=s[5],u=s[6],f=s[7],p=s[8],g=s[9],x=s[10],v=s[11],m=s[12],E=s[13],b=s[14],M=s[15];if(i[0].setComponents(l-r,f-c,v-p,M-m).normalize(),i[1].setComponents(l+r,f+c,v+p,M+m).normalize(),i[2].setComponents(l+o,f+d,v+g,M+E).normalize(),i[3].setComponents(l-o,f-d,v-g,M-E).normalize(),i[4].setComponents(l-a,f-u,v-x,M-b).normalize(),t===Ns)i[5].setComponents(l+a,f+u,v+x,M+b).normalize();else if(t===rh)i[5].setComponents(a,u,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){return Wr.center.set(0,0,0),Wr.radius=.7071067811865476,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Bc.x=s.normal.x>0?e.max.x:e.min.x,Bc.y=s.normal.y>0?e.max.y:e.min.y,Bc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function tv(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function u2(n){let e=new WeakMap;function t(a,l){let c=a.array,d=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let d=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,d);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let x=u[p];n.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Gn=class n extends Rt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,d=l+1,u=e/a,f=t/l,p=[],g=[],x=[],v=[];for(let m=0;m<d;m++){let E=m*f-o;for(let b=0;b<c;b++){let M=b*u-r;g.push(M,-E,0),x.push(0,0,1),v.push(b/a),v.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<a;E++){let b=E+c*m,M=E+c*(m+1),L=E+1+c*(m+1),R=E+1+c*m;p.push(b,M,R),p.push(M,L,R)}this.setIndex(p),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(x,3)),this.setAttribute("uv",new nt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},f2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p2=`#ifdef USE_ALPHAHASH
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
#endif`,m2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,x2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y2=`#ifdef USE_AOMAP
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
#endif`,M2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E2=`#ifdef USE_BATCHING
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
#endif`,b2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,w2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T2=`#ifdef USE_IRIDESCENCE
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
#endif`,A2=`#ifdef USE_BUMPMAP
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
#endif`,R2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,C2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,I2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,D2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,U2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,H2=`#if defined( USE_COLOR_ALPHA )
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
#endif`,N2=`#define PI 3.141592653589793
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
} // validated`,z2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,k2=`vec3 transformedNormal = objectNormal;
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
#endif`,O2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V2="gl_FragColor = linearToOutputTexel( gl_FragColor );",W2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,X2=`#ifdef USE_ENVMAP
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
#endif`,q2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Y2=`#ifdef USE_ENVMAP
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
#endif`,j2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Z2=`#ifdef USE_ENVMAP
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
#endif`,K2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,J2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eE=`#ifdef USE_GRADIENTMAP
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
}`,tE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sE=`uniform bool receiveShadow;
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
#endif`,rE=`#ifdef USE_ENVMAP
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
#endif`,oE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hE=`PhysicalMaterial material;
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
#endif`,dE=`struct PhysicalMaterial {
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
}`,uE=`
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
#endif`,fE=`#if defined( RE_IndirectDiffuse )
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
#endif`,pE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ME=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,EE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bE=`#if defined( USE_POINTS_UV )
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
#endif`,wE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,SE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_E=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RE=`#ifdef USE_MORPHTARGETS
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
#endif`,CE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,IE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,LE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HE=`#ifdef USE_NORMALMAP
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
#endif`,NE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,GE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,JE=`float getShadowMask() {
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
}`,QE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$E=`#ifdef USE_SKINNING
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
#endif`,eb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tb=`#ifdef USE_SKINNING
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
#endif`,nb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ib=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ob=`#ifdef USE_TRANSMISSION
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
#endif`,ab=`#ifdef USE_TRANSMISSION
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
#endif`,lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,db=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ub=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fb=`uniform sampler2D t2D;
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
}`,pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xb=`#include <common>
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
}`,yb=`#if DEPTH_PACKING == 3200
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
}`,Mb=`#define DISTANCE
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
}`,Eb=`#define DISTANCE
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
}`,bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sb=`uniform float scale;
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
}`,_b=`uniform vec3 diffuse;
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
}`,Tb=`#include <common>
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
}`,Ab=`uniform vec3 diffuse;
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
}`,Rb=`#define LAMBERT
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
}`,Cb=`#define LAMBERT
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
}`,Pb=`#define MATCAP
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
}`,Ib=`#define MATCAP
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
}`,Lb=`#define NORMAL
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
}`,Db=`#define NORMAL
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
}`,Ub=`#define PHONG
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
}`,Hb=`#define PHONG
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
}`,Nb=`#define STANDARD
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
}`,zb=`#define STANDARD
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
}`,kb=`#define TOON
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
}`,Ob=`#define TOON
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
}`,Fb=`uniform float size;
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
}`,Bb=`uniform vec3 diffuse;
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
}`,Gb=`#include <common>
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
}`,Vb=`uniform vec3 color;
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
}`,Wb=`uniform float rotation;
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
}`,Xb=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:f2,alphahash_pars_fragment:p2,alphamap_fragment:m2,alphamap_pars_fragment:g2,alphatest_fragment:v2,alphatest_pars_fragment:x2,aomap_fragment:y2,aomap_pars_fragment:M2,batching_pars_vertex:E2,batching_vertex:b2,begin_vertex:w2,beginnormal_vertex:S2,bsdfs:_2,iridescence_fragment:T2,bumpmap_pars_fragment:A2,clipping_planes_fragment:R2,clipping_planes_pars_fragment:C2,clipping_planes_pars_vertex:P2,clipping_planes_vertex:I2,color_fragment:L2,color_pars_fragment:D2,color_pars_vertex:U2,color_vertex:H2,common:N2,cube_uv_reflection_fragment:z2,defaultnormal_vertex:k2,displacementmap_pars_vertex:O2,displacementmap_vertex:F2,emissivemap_fragment:B2,emissivemap_pars_fragment:G2,colorspace_fragment:V2,colorspace_pars_fragment:W2,envmap_fragment:X2,envmap_common_pars_fragment:q2,envmap_pars_fragment:Y2,envmap_pars_vertex:j2,envmap_physical_pars_fragment:rE,envmap_vertex:Z2,fog_vertex:K2,fog_pars_vertex:J2,fog_fragment:Q2,fog_pars_fragment:$2,gradientmap_pars_fragment:eE,lightmap_pars_fragment:tE,lights_lambert_fragment:nE,lights_lambert_pars_fragment:iE,lights_pars_begin:sE,lights_toon_fragment:oE,lights_toon_pars_fragment:aE,lights_phong_fragment:lE,lights_phong_pars_fragment:cE,lights_physical_fragment:hE,lights_physical_pars_fragment:dE,lights_fragment_begin:uE,lights_fragment_maps:fE,lights_fragment_end:pE,logdepthbuf_fragment:mE,logdepthbuf_pars_fragment:gE,logdepthbuf_pars_vertex:vE,logdepthbuf_vertex:xE,map_fragment:yE,map_pars_fragment:ME,map_particle_fragment:EE,map_particle_pars_fragment:bE,metalnessmap_fragment:wE,metalnessmap_pars_fragment:SE,morphinstance_vertex:_E,morphcolor_vertex:TE,morphnormal_vertex:AE,morphtarget_pars_vertex:RE,morphtarget_vertex:CE,normal_fragment_begin:PE,normal_fragment_maps:IE,normal_pars_fragment:LE,normal_pars_vertex:DE,normal_vertex:UE,normalmap_pars_fragment:HE,clearcoat_normal_fragment_begin:NE,clearcoat_normal_fragment_maps:zE,clearcoat_pars_fragment:kE,iridescence_pars_fragment:OE,opaque_fragment:FE,packing:BE,premultiplied_alpha_fragment:GE,project_vertex:VE,dithering_fragment:WE,dithering_pars_fragment:XE,roughnessmap_fragment:qE,roughnessmap_pars_fragment:YE,shadowmap_pars_fragment:jE,shadowmap_pars_vertex:ZE,shadowmap_vertex:KE,shadowmask_pars_fragment:JE,skinbase_vertex:QE,skinning_pars_vertex:$E,skinning_vertex:eb,skinnormal_vertex:tb,specularmap_fragment:nb,specularmap_pars_fragment:ib,tonemapping_fragment:sb,tonemapping_pars_fragment:rb,transmission_fragment:ob,transmission_pars_fragment:ab,uv_pars_fragment:lb,uv_pars_vertex:cb,uv_vertex:hb,worldpos_vertex:db,background_vert:ub,background_frag:fb,backgroundCube_vert:pb,backgroundCube_frag:mb,cube_vert:gb,cube_frag:vb,depth_vert:xb,depth_frag:yb,distanceRGBA_vert:Mb,distanceRGBA_frag:Eb,equirect_vert:bb,equirect_frag:wb,linedashed_vert:Sb,linedashed_frag:_b,meshbasic_vert:Tb,meshbasic_frag:Ab,meshlambert_vert:Rb,meshlambert_frag:Cb,meshmatcap_vert:Pb,meshmatcap_frag:Ib,meshnormal_vert:Lb,meshnormal_frag:Db,meshphong_vert:Ub,meshphong_frag:Hb,meshphysical_vert:Nb,meshphysical_frag:zb,meshtoon_vert:kb,meshtoon_frag:Ob,points_vert:Fb,points_frag:Bb,shadow_vert:Gb,shadow_frag:Vb,sprite_vert:Wb,sprite_frag:Xb},Se={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},ss={basic:{uniforms:Kn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Kn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new re(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Kn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Kn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Kn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new re(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Kn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Kn([Se.points,Se.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Kn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Kn([Se.common,Se.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Kn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Kn([Se.sprite,Se.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:Kn([Se.common,Se.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:Kn([Se.lights,Se.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};ss.physical={uniforms:Kn([ss.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new $(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new $},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};var Gc={r:0,b:0,g:0},Xr=new Cn,qb=new vt;function Yb(n,e,t,i,s,r,o){let a=new re(0),l=r===!0?0:1,c,d,u=null,f=0,p=null;function g(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?t:e).get(b)),b}function x(E){let b=!1,M=g(E);M===null?m(a,l):M&&M.isColor&&(m(M,1),b=!0);let L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(E,b){let M=g(b);M&&(M.isCubeTexture||M.mapping===Ph)?(d===void 0&&(d=new Q(new Ke(1,1,1),new ht({name:"BackgroundCubeMaterial",uniforms:ta(ss.backgroundCube.uniforms),vertexShader:ss.backgroundCube.vertexShader,fragmentShader:ss.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Xr.copy(b.backgroundRotation),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(qb.makeRotationFromEuler(Xr)),d.material.toneMapped=Ct.getTransfer(M.colorSpace)!==Gt,(u!==M||f!==M.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,u=M,f=M.version,p=n.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Q(new Gn(2,2),new ht({name:"BackgroundMaterial",uniforms:ta(ss.background.uniforms),vertexShader:ss.background.vertexShader,fragmentShader:ss.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Ct.getTransfer(M.colorSpace)!==Gt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,p=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,b){E.getRGB(Gc,ev(n)),i.buffers.color.setClear(Gc.r,Gc.g,Gc.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(E,b=1){a.set(E),l=b,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,m(a,l)},render:x,addToRenderList:v}}function jb(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(w,U,O,F,V){let te=!1,q=u(F,O,U);r!==q&&(r=q,c(r.object)),te=p(w,F,O,V),te&&g(w,F,O,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,M(w,U,O,F),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(w){return n.bindVertexArray(w)}function d(w){return n.deleteVertexArray(w)}function u(w,U,O){let F=O.wireframe===!0,V=i[w.id];V===void 0&&(V={},i[w.id]=V);let te=V[U.id];te===void 0&&(te={},V[U.id]=te);let q=te[F];return q===void 0&&(q=f(l()),te[F]=q),q}function f(w){let U=[],O=[],F=[];for(let V=0;V<t;V++)U[V]=0,O[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:F,object:w,attributes:{},index:null}}function p(w,U,O,F){let V=r.attributes,te=U.attributes,q=0,oe=O.getAttributes();for(let Y in oe)if(oe[Y].location>=0){let Te=V[Y],ze=te[Y];if(ze===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(ze=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(ze=w.instanceColor)),Te===void 0||Te.attribute!==ze||ze&&Te.data!==ze.data)return!0;q++}return r.attributesNum!==q||r.index!==F}function g(w,U,O,F){let V={},te=U.attributes,q=0,oe=O.getAttributes();for(let Y in oe)if(oe[Y].location>=0){let Te=te[Y];Te===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(Te=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(Te=w.instanceColor));let ze={};ze.attribute=Te,Te&&Te.data&&(ze.data=Te.data),V[Y]=ze,q++}r.attributes=V,r.attributesNum=q,r.index=F}function x(){let w=r.newAttributes;for(let U=0,O=w.length;U<O;U++)w[U]=0}function v(w){m(w,0)}function m(w,U){let O=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;O[w]=1,F[w]===0&&(n.enableVertexAttribArray(w),F[w]=1),V[w]!==U&&(n.vertexAttribDivisor(w,U),V[w]=U)}function E(){let w=r.newAttributes,U=r.enabledAttributes;for(let O=0,F=U.length;O<F;O++)U[O]!==w[O]&&(n.disableVertexAttribArray(O),U[O]=0)}function b(w,U,O,F,V,te,q){q===!0?n.vertexAttribIPointer(w,U,O,V,te):n.vertexAttribPointer(w,U,O,F,V,te)}function M(w,U,O,F){x();let V=F.attributes,te=O.getAttributes(),q=U.defaultAttributeValues;for(let oe in te){let Y=te[oe];if(Y.location>=0){let he=V[oe];if(he===void 0&&(oe==="instanceMatrix"&&w.instanceMatrix&&(he=w.instanceMatrix),oe==="instanceColor"&&w.instanceColor&&(he=w.instanceColor)),he!==void 0){let Te=he.normalized,ze=he.itemSize,lt=e.get(he);if(lt===void 0)continue;let Dt=lt.buffer,K=lt.type,de=lt.bytesPerElement,Ne=K===n.INT||K===n.UNSIGNED_INT||he.gpuType===rp;if(he.isInterleavedBufferAttribute){let ye=he.data,Ye=ye.stride,$e=he.offset;if(ye.isInstancedInterleavedBuffer){for(let st=0;st<Y.locationSize;st++)m(Y.location+st,ye.meshPerAttribute);w.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let st=0;st<Y.locationSize;st++)v(Y.location+st);n.bindBuffer(n.ARRAY_BUFFER,Dt);for(let st=0;st<Y.locationSize;st++)b(Y.location+st,ze/Y.locationSize,K,Te,Ye*de,($e+ze/Y.locationSize*st)*de,Ne)}else{if(he.isInstancedBufferAttribute){for(let ye=0;ye<Y.locationSize;ye++)m(Y.location+ye,he.meshPerAttribute);w.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ye=0;ye<Y.locationSize;ye++)v(Y.location+ye);n.bindBuffer(n.ARRAY_BUFFER,Dt);for(let ye=0;ye<Y.locationSize;ye++)b(Y.location+ye,ze/Y.locationSize,K,Te,ze*de,ze/Y.locationSize*ye*de,Ne)}}else if(q!==void 0){let Te=q[oe];if(Te!==void 0)switch(Te.length){case 2:n.vertexAttrib2fv(Y.location,Te);break;case 3:n.vertexAttrib3fv(Y.location,Te);break;case 4:n.vertexAttrib4fv(Y.location,Te);break;default:n.vertexAttrib1fv(Y.location,Te)}}}}E()}function L(){I();for(let w in i){let U=i[w];for(let O in U){let F=U[O];for(let V in F)d(F[V].object),delete F[V];delete U[O]}delete i[w]}}function R(w){if(i[w.id]===void 0)return;let U=i[w.id];for(let O in U){let F=U[O];for(let V in F)d(F[V].object),delete F[V];delete U[O]}delete i[w.id]}function P(w){for(let U in i){let O=i[U];if(O[w.id]===void 0)continue;let F=O[w.id];for(let V in F)d(F[V].object),delete F[V];delete O[w.id]}}function I(){_(),o=!0,r!==s&&(r=s,c(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:_,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:v,disableUnusedAttributes:E}}function Zb(n,e,t){let i;function s(c){i=c}function r(c,d){n.drawArrays(i,c,d),t.update(d,i,1)}function o(c,d,u){u!==0&&(n.drawArraysInstanced(i,c,d,u),t.update(d,i,u))}function a(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,u);let p=0;for(let g=0;g<u;g++)p+=d[g];t.update(p,i,1)}function l(c,d,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],d[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=d[x]*f[x];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Kb(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==ai&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let I=P===wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ei&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==rs&&!I)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:L,maxSamples:R}}function Jb(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Hs,a=new gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||i!==0||s;return s=f,i=u.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,x=u.clipIntersection,v=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!v)r?d(null):c();else{let E=r?0:i,b=E*4,M=m.clippingState||null;l.value=M,M=d(g,f,b,p);for(let L=0;L!==b;++L)M[L]=t[L];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,f,p,g){let x=u!==null?u.length:0,v=null;if(x!==0){if(v=l.value,g!==!0||v===null){let m=p+x*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(v===null||v.length<m)&&(v=new Float32Array(m));for(let b=0,M=p;b!==x;++b,M+=4)o.copy(u[b]).applyMatrix4(E,a),o.normal.toArray(v,M),v[M+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,v}}function Qb(n){let e=new WeakMap;function t(o,a){return a===zu?o.mapping=Qo:a===ku&&(o.mapping=$o),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===zu||a===ku)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new yf(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var na=class extends fh{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Yo=4,ig=[.125,.215,.35,.446,.526,.582],jr=20,gu=new na,sg=new re,vu=null,xu=0,yu=0,Mu=!1,Yr=(1+Math.sqrt(5))/2,Bo=1/Yr,rg=[new S(-Yr,Bo,0),new S(Yr,Bo,0),new S(-Bo,0,Yr),new S(Bo,0,Yr),new S(0,Yr,-Bo),new S(0,Yr,Bo),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],ia=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){vu=this._renderer.getRenderTarget(),xu=this._renderer.getActiveCubeFace(),yu=this._renderer.getActiveMipmapLevel(),Mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ag(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vu,xu,yu),this._renderer.xr.enabled=Mu,e.scissorTest=!1,Vc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qo||e.mapping===$o?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vu=this._renderer.getRenderTarget(),xu=this._renderer.getActiveCubeFace(),yu=this._renderer.getActiveMipmapLevel(),Mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:wn,format:ai,colorSpace:ha,depthBuffer:!1},s=og(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=og(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$b(r)),this._blurMaterial=ew(r,e,t)}return s}_compileMaterial(e){let t=new Q(this._lodPlanes[0],e);this._renderer.compile(t,gu)}_sceneToCubeUV(e,t,i,s){let a=new fn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(sg),d.toneMapping=cr,d.autoClear=!1;let p=new ke({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),g=new Q(new Ke,p),x=!1,v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,x=!0):(p.color.copy(sg),x=!0);for(let m=0;m<6;m++){let E=m%3;E===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):E===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let b=this._cubeSize;Vc(s,E*b,m>2?b:0,b,b),d.setRenderTarget(s),x&&d.render(g,a),d.render(e,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=v}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Qo||e.mapping===$o;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ag());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Q(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Vc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,gu)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=rg[(s-r-1)%rg.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,u=new Q(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*jr-1),x=r/g,v=isFinite(r)?1+Math.floor(d*x):jr;v>jr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${jr}`);let m=[],E=0;for(let P=0;P<jr;++P){let I=P/x,_=Math.exp(-I*I/2);m.push(_),P===0?E+=_:P<v&&(E+=2*_)}for(let P=0;P<m.length;P++)m[P]=m[P]/E;f.envMap.value=e.texture,f.samples.value=v,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;let M=this._sizeLods[s],L=3*M*(s>b-Yo?s-b+Yo:0),R=4*(this._cubeSize-M);Vc(t,L,R,3*M,2*M),l.setRenderTarget(t),l.render(u,gu)}};function $b(n){let e=[],t=[],i=[],s=n,r=n-Yo+1+ig.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Yo?l=ig[o-n+Yo-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),d=-c,u=1+c,f=[d,d,u,d,u,u,d,d,u,u,d,u],p=6,g=6,x=3,v=2,m=1,E=new Float32Array(x*g*p),b=new Float32Array(v*g*p),M=new Float32Array(m*g*p);for(let R=0;R<p;R++){let P=R%3*2/3-1,I=R>2?0:-1,_=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];E.set(_,x*g*R),b.set(f,v*g*R);let w=[R,R,R,R,R,R];M.set(w,m*g*R)}let L=new Rt;L.setAttribute("position",new an(E,x)),L.setAttribute("uv",new an(b,v)),L.setAttribute("faceIndex",new an(M,m)),e.push(L),s>Yo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function og(n,e,t){let i=new ln(n,e,t);return i.texture.mapping=Ph,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vc(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function ew(n,e,t){let i=new Float32Array(jr),s=new S(0,1,0);return new ht({name:"SphericalGaussianBlur",defines:{n:jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:mp(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function ag(){return new ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mp(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function lg(){return new ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function mp(){return`

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
	`}function tw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===zu||l===ku,d=l===Qo||l===$o;if(c||d){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ia(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||d&&p&&s(p)?(t===null&&(t=new ia(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function nw(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&ul("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function iw(n,e,t,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let v=0,m=x.length;v<m;v++)e.remove(x[v])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let v=0,m=x.length;v<m;v++)e.update(x[v],n.ARRAY_BUFFER)}}function c(u){let f=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let E=p.array;x=p.version;for(let b=0,M=E.length;b<M;b+=3){let L=E[b+0],R=E[b+1],P=E[b+2];f.push(L,R,R,P,P,L)}}else if(g!==void 0){let E=g.array;x=g.version;for(let b=0,M=E.length/3-1;b<M;b+=3){let L=b+0,R=b+1,P=b+2;f.push(L,R,R,P,P,L)}}else return;let v=new(Qg(f)?uh:dh)(f,1);v.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,v)}function d(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function sw(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),t.update(p,i,g))}function d(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let v=0;for(let m=0;m<g;m++)v+=p[m];t.update(v,i,1)}function u(f,p,g,x){if(g===0)return;let v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<f.length;m++)c(f[m]/o,p[m],x[m]);else{v.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,x,0,g);let m=0;for(let E=0;E<g;E++)m+=p[E]*x[E];t.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function rw(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function ow(n,e,t){let i=new WeakMap,s=new Vt;function r(o,a,l){let c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0,f=i.get(a);if(f===void 0||f.count!==u){let _=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",_)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],b=0;p===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let M=a.attributes.position.count*b,L=1;M>e.maxTextureSize&&(L=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let R=new Float32Array(M*L*4*u),P=new lh(R,M,L,u);P.type=rs,P.needsUpdate=!0;let I=b*4;for(let w=0;w<u;w++){let U=v[w],O=m[w],F=E[w],V=M*L*4*w;for(let te=0;te<U.count;te++){let q=te*I;p===!0&&(s.fromBufferAttribute(U,te),R[V+q+0]=s.x,R[V+q+1]=s.y,R[V+q+2]=s.z,R[V+q+3]=0),g===!0&&(s.fromBufferAttribute(O,te),R[V+q+4]=s.x,R[V+q+5]=s.y,R[V+q+6]=s.z,R[V+q+7]=0),x===!0&&(s.fromBufferAttribute(F,te),R[V+q+8]=s.x,R[V+q+9]=s.y,R[V+q+10]=s.z,R[V+q+11]=F.itemSize===4?s.w:1)}}f={count:u,texture:P,size:new $(M,L)},i.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function aw(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,d=l.geometry,u=e.get(l,d);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var sa=class extends Rn{constructor(e,t,i,s,r,o,a,l,c,d=jo){if(d!==jo&&d!==ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===jo&&(i=Jr),i===void 0&&d===ur&&(i=dr),super(null,s,r,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:pn,this.minFilter=l!==void 0?l:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},nv=new Rn,cg=new sa(1,1),iv=new lh,sv=new vf,rv=new ph,hg=[],dg=[],ug=new Float32Array(16),fg=new Float32Array(9),pg=new Float32Array(4);function da(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=hg[s];if(r===void 0&&(r=new Float32Array(s),hg[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function En(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function bn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Lh(n,e){let t=dg[e];t===void 0&&(t=new Int32Array(e),dg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function lw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function cw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;n.uniform2fv(this.addr,e),bn(t,e)}}function hw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(En(t,e))return;n.uniform3fv(this.addr,e),bn(t,e)}}function dw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;n.uniform4fv(this.addr,e),bn(t,e)}}function uw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(En(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bn(t,e)}else{if(En(t,i))return;pg.set(i),n.uniformMatrix2fv(this.addr,!1,pg),bn(t,i)}}function fw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(En(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bn(t,e)}else{if(En(t,i))return;fg.set(i),n.uniformMatrix3fv(this.addr,!1,fg),bn(t,i)}}function pw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(En(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bn(t,e)}else{if(En(t,i))return;ug.set(i),n.uniformMatrix4fv(this.addr,!1,ug),bn(t,i)}}function mw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function gw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;n.uniform2iv(this.addr,e),bn(t,e)}}function vw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(En(t,e))return;n.uniform3iv(this.addr,e),bn(t,e)}}function xw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;n.uniform4iv(this.addr,e),bn(t,e)}}function yw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Mw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;n.uniform2uiv(this.addr,e),bn(t,e)}}function Ew(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(En(t,e))return;n.uniform3uiv(this.addr,e),bn(t,e)}}function bw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;n.uniform4uiv(this.addr,e),bn(t,e)}}function ww(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(cg.compareFunction=Jg,r=cg):r=nv,t.setTexture2D(e||r,s)}function Sw(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||sv,s)}function _w(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||rv,s)}function Tw(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||iv,s)}function Aw(n){switch(n){case 5126:return lw;case 35664:return cw;case 35665:return hw;case 35666:return dw;case 35674:return uw;case 35675:return fw;case 35676:return pw;case 5124:case 35670:return mw;case 35667:case 35671:return gw;case 35668:case 35672:return vw;case 35669:case 35673:return xw;case 5125:return yw;case 36294:return Mw;case 36295:return Ew;case 36296:return bw;case 35678:case 36198:case 36298:case 36306:case 35682:return ww;case 35679:case 36299:case 36307:return Sw;case 35680:case 36300:case 36308:case 36293:return _w;case 36289:case 36303:case 36311:case 36292:return Tw}}function Rw(n,e){n.uniform1fv(this.addr,e)}function Cw(n,e){let t=da(e,this.size,2);n.uniform2fv(this.addr,t)}function Pw(n,e){let t=da(e,this.size,3);n.uniform3fv(this.addr,t)}function Iw(n,e){let t=da(e,this.size,4);n.uniform4fv(this.addr,t)}function Lw(n,e){let t=da(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Dw(n,e){let t=da(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Uw(n,e){let t=da(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Hw(n,e){n.uniform1iv(this.addr,e)}function Nw(n,e){n.uniform2iv(this.addr,e)}function zw(n,e){n.uniform3iv(this.addr,e)}function kw(n,e){n.uniform4iv(this.addr,e)}function Ow(n,e){n.uniform1uiv(this.addr,e)}function Fw(n,e){n.uniform2uiv(this.addr,e)}function Bw(n,e){n.uniform3uiv(this.addr,e)}function Gw(n,e){n.uniform4uiv(this.addr,e)}function Vw(n,e,t){let i=this.cache,s=e.length,r=Lh(t,s);En(i,r)||(n.uniform1iv(this.addr,r),bn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||nv,r[o])}function Ww(n,e,t){let i=this.cache,s=e.length,r=Lh(t,s);En(i,r)||(n.uniform1iv(this.addr,r),bn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||sv,r[o])}function Xw(n,e,t){let i=this.cache,s=e.length,r=Lh(t,s);En(i,r)||(n.uniform1iv(this.addr,r),bn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||rv,r[o])}function qw(n,e,t){let i=this.cache,s=e.length,r=Lh(t,s);En(i,r)||(n.uniform1iv(this.addr,r),bn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||iv,r[o])}function Yw(n){switch(n){case 5126:return Rw;case 35664:return Cw;case 35665:return Pw;case 35666:return Iw;case 35674:return Lw;case 35675:return Dw;case 35676:return Uw;case 5124:case 35670:return Hw;case 35667:case 35671:return Nw;case 35668:case 35672:return zw;case 35669:case 35673:return kw;case 5125:return Ow;case 36294:return Fw;case 36295:return Bw;case 36296:return Gw;case 35678:case 36198:case 36298:case 36306:case 35682:return Vw;case 35679:case 36299:case 36307:return Ww;case 35680:case 36300:case 36308:case 36293:return Xw;case 36289:case 36303:case 36311:case 36292:return qw}}var Mf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Aw(t.type)}},Ef=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yw(t.type)}},bf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Eu=/(\w+)(\])?(\[|\.)?/g;function mg(n,e){n.seq.push(e),n.map[e.id]=e}function jw(n,e,t){let i=n.name,s=i.length;for(Eu.lastIndex=0;;){let r=Eu.exec(i),o=Eu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){mg(t,c===void 0?new Mf(a,n,e):new Ef(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new bf(a),mg(t,u)),t=u}}}var Ko=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);jw(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function gg(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Zw=37297,Kw=0;function Jw(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var vg=new gt;function Qw(n){Ct._getMatrix(vg,Ct.workingColorSpace,n);let e=`mat3( ${vg.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(n)){case Ih:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function xg(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Jw(n.getShaderSource(e),o)}else return s}function $w(n,e){let t=Qw(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function eS(n,e){let t;switch(e){case ep:t="Linear";break;case tp:t="Reinhard";break;case np:t="Cineon";break;case io:t="ACESFilmic";break;case ip:t="AgX";break;case sp:t="Neutral";break;case vM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Wc=new S;function tS(){Ct.getLuminanceCoefficients(Wc);let n=Wc.x.toFixed(4),e=Wc.y.toFixed(4),t=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fl).join(`
`)}function iS(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function sS(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function fl(n){return n!==""}function yg(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var rS=/^[ \t]*#include +<([\w\d./]+)>/gm;function wf(n){return n.replace(rS,aS)}var oS=new Map;function aS(n,e){let t=xt[e];if(t===void 0){let i=oS.get(e);if(i!==void 0)t=xt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wf(t)}var lS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eg(n){return n.replace(lS,cS)}function cS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bg(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function hS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Og?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Qf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Us&&(e="SHADOWMAP_TYPE_VSM"),e}function dS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qo:case $o:e="ENVMAP_TYPE_CUBE";break;case Ph:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $o:e="ENVMAP_MODE_REFRACTION";break}return e}function fS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Fg:e="ENVMAP_BLENDING_MULTIPLY";break;case mM:e="ENVMAP_BLENDING_MIX";break;case gM:e="ENVMAP_BLENDING_ADD";break}return e}function pS(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function mS(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=hS(t),c=dS(t),d=uS(t),u=fS(t),f=pS(t),p=nS(t),g=iS(r),x=s.createProgram(),v,m,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fl).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fl).join(`
`),m.length>0&&(m+=`
`)):(v=[bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fl).join(`
`),m=[bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cr?"#define TONE_MAPPING":"",t.toneMapping!==cr?xt.tonemapping_pars_fragment:"",t.toneMapping!==cr?eS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,$w("linearToOutputTexel",t.outputColorSpace),tS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fl).join(`
`)),o=wf(o),o=yg(o,t),o=Mg(o,t),a=wf(a),a=yg(a,t),a=Mg(a,t),o=Eg(o),a=Eg(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===Hm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=E+v+o,M=E+m+a,L=gg(s,s.VERTEX_SHADER,b),R=gg(s,s.FRAGMENT_SHADER,M);s.attachShader(x,L),s.attachShader(x,R),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(U){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(x).trim(),F=s.getShaderInfoLog(L).trim(),V=s.getShaderInfoLog(R).trim(),te=!0,q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,L,R);else{let oe=xg(s,L,"vertex"),Y=xg(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+O+`
`+oe+`
`+Y)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||V==="")&&(q=!1);q&&(U.diagnostics={runnable:te,programLog:O,vertexShader:{log:F,prefix:v},fragmentShader:{log:V,prefix:m}})}s.deleteShader(L),s.deleteShader(R),I=new Ko(s,x),_=sS(s,x)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let _;this.getAttributes=function(){return _===void 0&&P(this),_};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(x,Zw)),w},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kw++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=R,this}var gS=0,Sf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new _f(e),t.set(e,i)),i}},_f=class{constructor(e){this.id=gS++,this.code=e,this.usedTimes=0}};function vS(n,e,t,i,s,r,o){let a=new hh,l=new Sf,c=new Set,d=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,w,U,O,F){let V=O.fog,te=F.geometry,q=_.isMeshStandardMaterial?O.environment:null,oe=(_.isMeshStandardMaterial?t:e).get(_.envMap||q),Y=oe&&oe.mapping===Ph?oe.image.height:null,he=g[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let Te=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ze=Te!==void 0?Te.length:0,lt=0;te.morphAttributes.position!==void 0&&(lt=1),te.morphAttributes.normal!==void 0&&(lt=2),te.morphAttributes.color!==void 0&&(lt=3);let Dt,K,de,Ne;if(he){let Yt=ss[he];Dt=Yt.vertexShader,K=Yt.fragmentShader}else Dt=_.vertexShader,K=_.fragmentShader,l.update(_),de=l.getVertexShaderID(_),Ne=l.getFragmentShaderID(_);let ye=n.getRenderTarget(),Ye=n.state.buffers.depth.getReversed(),$e=F.isInstancedMesh===!0,st=F.isBatchedMesh===!0,Kt=!!_.map,St=!!_.matcap,$t=!!oe,N=!!_.aoMap,kn=!!_.lightMap,Mt=!!_.bumpMap,Et=!!_.normalMap,Qe=!!_.displacementMap,qt=!!_.emissiveMap,Ze=!!_.metalnessMap,D=!!_.roughnessMap,T=_.anisotropy>0,B=_.clearcoat>0,ee=_.dispersion>0,se=_.iridescence>0,J=_.sheen>0,Oe=_.transmission>0,be=T&&!!_.anisotropyMap,Re=B&&!!_.clearcoatMap,yt=B&&!!_.clearcoatNormalMap,ae=B&&!!_.clearcoatRoughnessMap,De=se&&!!_.iridescenceMap,et=se&&!!_.iridescenceThicknessMap,it=J&&!!_.sheenColorMap,Ue=J&&!!_.sheenRoughnessMap,At=!!_.specularMap,rt=!!_.specularColorMap,Ut=!!_.specularIntensityMap,H=Oe&&!!_.transmissionMap,Ee=Oe&&!!_.thicknessMap,j=!!_.gradientMap,ne=!!_.alphaMap,Ie=_.alphaTest>0,Ce=!!_.alphaHash,pt=!!_.extensions,dn=cr;_.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(dn=n.toneMapping);let On={shaderID:he,shaderType:_.type,shaderName:_.name,vertexShader:Dt,fragmentShader:K,defines:_.defines,customVertexShaderID:de,customFragmentShaderID:Ne,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:st,batchingColor:st&&F._colorsTexture!==null,instancing:$e,instancingColor:$e&&F.instanceColor!==null,instancingMorph:$e&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ye===null?n.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:ha,alphaToCoverage:!!_.alphaToCoverage,map:Kt,matcap:St,envMap:$t,envMapMode:$t&&oe.mapping,envMapCubeUVHeight:Y,aoMap:N,lightMap:kn,bumpMap:Mt,normalMap:Et,displacementMap:f&&Qe,emissiveMap:qt,normalMapObjectSpace:Et&&_.normalMapType===EM,normalMapTangentSpace:Et&&_.normalMapType===up,metalnessMap:Ze,roughnessMap:D,anisotropy:T,anisotropyMap:be,clearcoat:B,clearcoatMap:Re,clearcoatNormalMap:yt,clearcoatRoughnessMap:ae,dispersion:ee,iridescence:se,iridescenceMap:De,iridescenceThicknessMap:et,sheen:J,sheenColorMap:it,sheenRoughnessMap:Ue,specularMap:At,specularColorMap:rt,specularIntensityMap:Ut,transmission:Oe,transmissionMap:H,thicknessMap:Ee,gradientMap:j,opaque:_.transparent===!1&&_.blending===li&&_.alphaToCoverage===!1,alphaMap:ne,alphaTest:Ie,alphaHash:Ce,combine:_.combine,mapUv:Kt&&x(_.map.channel),aoMapUv:N&&x(_.aoMap.channel),lightMapUv:kn&&x(_.lightMap.channel),bumpMapUv:Mt&&x(_.bumpMap.channel),normalMapUv:Et&&x(_.normalMap.channel),displacementMapUv:Qe&&x(_.displacementMap.channel),emissiveMapUv:qt&&x(_.emissiveMap.channel),metalnessMapUv:Ze&&x(_.metalnessMap.channel),roughnessMapUv:D&&x(_.roughnessMap.channel),anisotropyMapUv:be&&x(_.anisotropyMap.channel),clearcoatMapUv:Re&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:yt&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:et&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:it&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&x(_.sheenRoughnessMap.channel),specularMapUv:At&&x(_.specularMap.channel),specularColorMapUv:rt&&x(_.specularColorMap.channel),specularIntensityMapUv:Ut&&x(_.specularIntensityMap.channel),transmissionMapUv:H&&x(_.transmissionMap.channel),thicknessMapUv:Ee&&x(_.thicknessMap.channel),alphaMapUv:ne&&x(_.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Et||T),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!te.attributes.uv&&(Kt||ne),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ye,skinning:F.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:ze,morphTextureStride:lt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:dn,decodeVideoTexture:Kt&&_.map.isVideoTexture===!0&&Ct.getTransfer(_.map.colorSpace)===Gt,decodeVideoTextureEmissive:qt&&_.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(_.emissiveMap.colorSpace)===Gt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===bt,flipSided:_.side===Dn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:pt&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&_.extensions.multiDraw===!0||st)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return On.vertexUv1s=c.has(1),On.vertexUv2s=c.has(2),On.vertexUv3s=c.has(3),c.clear(),On}function m(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let U in _.defines)w.push(U),w.push(_.defines[U]);return _.isRawShaderMaterial===!1&&(E(w,_),b(w,_),w.push(n.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function E(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function b(_,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),_.push(a.mask)}function M(_){let w=g[_.type],U;if(w){let O=ss[w];U=Pn.clone(O.uniforms)}else U=_.uniforms;return U}function L(_,w){let U;for(let O=0,F=d.length;O<F;O++){let V=d[O];if(V.cacheKey===w){U=V,++U.usedTimes;break}}return U===void 0&&(U=new mS(n,w,_,r),d.push(U)),U}function R(_){if(--_.usedTimes===0){let w=d.indexOf(_);d[w]=d[d.length-1],d.pop(),_.destroy()}}function P(_){l.remove(_)}function I(){l.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:M,acquireProgram:L,releaseProgram:R,releaseShaderCache:P,programs:d,dispose:I}}function xS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function yS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function wg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Sg(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,p,g,x,v){let m=n[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:v},n[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=p,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=v),e++,m}function a(u,f,p,g,x,v){let m=o(u,f,p,g,x,v);p.transmission>0?i.push(m):p.transparent===!0?s.push(m):t.push(m)}function l(u,f,p,g,x,v){let m=o(u,f,p,g,x,v);p.transmission>0?i.unshift(m):p.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,f){t.length>1&&t.sort(u||yS),i.length>1&&i.sort(f||wg),s.length>1&&s.sort(f||wg)}function d(){for(let u=e,f=n.length;u<f;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:d,sort:c}}function MS(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Sg,n.set(i,[o])):s>=r.length?(o=new Sg,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ES(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new re};break;case"SpotLight":t={position:new S,direction:new S,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new re,groundColor:new re};break;case"RectAreaLight":t={color:new re,position:new S,halfWidth:new S,halfHeight:new S};break}return n[e.id]=t,t}}}function bS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var wS=0;function SS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function _S(n){let e=new ES,t=bS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new S);let s=new S,r=new vt,o=new vt;function a(c){let d=0,u=0,f=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let p=0,g=0,x=0,v=0,m=0,E=0,b=0,M=0,L=0,R=0,P=0;c.sort(SS);for(let _=0,w=c.length;_<w;_++){let U=c[_],O=U.color,F=U.intensity,V=U.distance,te=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=O.r*F,u+=O.g*F,f+=O.b*F;else if(U.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(U.sh.coefficients[q],F);P++}else if(U.isDirectionalLight){let q=e.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let oe=U.shadow,Y=t.get(U);Y.shadowIntensity=oe.intensity,Y.shadowBias=oe.bias,Y.shadowNormalBias=oe.normalBias,Y.shadowRadius=oe.radius,Y.shadowMapSize=oe.mapSize,i.directionalShadow[p]=Y,i.directionalShadowMap[p]=te,i.directionalShadowMatrix[p]=U.shadow.matrix,E++}i.directional[p]=q,p++}else if(U.isSpotLight){let q=e.get(U);q.position.setFromMatrixPosition(U.matrixWorld),q.color.copy(O).multiplyScalar(F),q.distance=V,q.coneCos=Math.cos(U.angle),q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),q.decay=U.decay,i.spot[x]=q;let oe=U.shadow;if(U.map&&(i.spotLightMap[L]=U.map,L++,oe.updateMatrices(U),U.castShadow&&R++),i.spotLightMatrix[x]=oe.matrix,U.castShadow){let Y=t.get(U);Y.shadowIntensity=oe.intensity,Y.shadowBias=oe.bias,Y.shadowNormalBias=oe.normalBias,Y.shadowRadius=oe.radius,Y.shadowMapSize=oe.mapSize,i.spotShadow[x]=Y,i.spotShadowMap[x]=te,M++}x++}else if(U.isRectAreaLight){let q=e.get(U);q.color.copy(O).multiplyScalar(F),q.halfWidth.set(U.width*.5,0,0),q.halfHeight.set(0,U.height*.5,0),i.rectArea[v]=q,v++}else if(U.isPointLight){let q=e.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),q.distance=U.distance,q.decay=U.decay,U.castShadow){let oe=U.shadow,Y=t.get(U);Y.shadowIntensity=oe.intensity,Y.shadowBias=oe.bias,Y.shadowNormalBias=oe.normalBias,Y.shadowRadius=oe.radius,Y.shadowMapSize=oe.mapSize,Y.shadowCameraNear=oe.camera.near,Y.shadowCameraFar=oe.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=te,i.pointShadowMatrix[g]=U.shadow.matrix,b++}i.point[g]=q,g++}else if(U.isHemisphereLight){let q=e.get(U);q.skyColor.copy(U.color).multiplyScalar(F),q.groundColor.copy(U.groundColor).multiplyScalar(F),i.hemi[m]=q,m++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=f;let I=i.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==v||I.hemiLength!==m||I.numDirectionalShadows!==E||I.numPointShadows!==b||I.numSpotShadows!==M||I.numSpotMaps!==L||I.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=v,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+L-R,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,I.directionalLength=p,I.pointLength=g,I.spotLength=x,I.rectAreaLength=v,I.hemiLength=m,I.numDirectionalShadows=E,I.numPointShadows=b,I.numSpotShadows=M,I.numSpotMaps=L,I.numLightProbes=P,i.version=wS++)}function l(c,d){let u=0,f=0,p=0,g=0,x=0,v=d.matrixWorldInverse;for(let m=0,E=c.length;m<E;m++){let b=c[m];if(b.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),u++}else if(b.isSpotLight){let M=i.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),p++}else if(b.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(v),o.identity(),r.copy(b.matrixWorld),r.premultiply(v),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(v),f++}else if(b.isHemisphereLight){let M=i.hemi[x];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(v),x++}}}return{setup:a,setupView:l,state:i}}function _g(n){let e=new _S(n),t=[],i=[];function s(d){c.camera=d,t.length=0,i.length=0}function r(d){t.push(d)}function o(d){i.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function TS(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new _g(n),e.set(s,[a])):r>=o.length?(a=new _g(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Tf=class extends os{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=yM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Af=class extends os{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},AS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RS=`uniform sampler2D shadow_pass;
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
}`;function CS(n,e,t){let i=new Ml,s=new $,r=new $,o=new Vt,a=new Tf({depthPacking:MM}),l=new Af,c={},d=t.maxTextureSize,u={[hr]:Dn,[Dn]:hr,[bt]:bt},f=new ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:AS,fragmentShader:RS}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Rt;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Q(g,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Og;let m=this.type;this.render=function(R,P,I){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||R.length===0)return;let _=n.getRenderTarget(),w=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Mn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let F=m!==Us&&this.type===Us,V=m===Us&&this.type!==Us;for(let te=0,q=R.length;te<q;te++){let oe=R[te],Y=oe.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let he=Y.getFrameExtents();if(s.multiply(he),r.copy(Y.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/he.x),s.x=r.x*he.x,Y.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/he.y),s.y=r.y*he.y,Y.mapSize.y=r.y)),Y.map===null||F===!0||V===!0){let ze=this.type!==Us?{minFilter:pn,magFilter:pn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new ln(s.x,s.y,ze),Y.map.texture.name=oe.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();let Te=Y.getViewportCount();for(let ze=0;ze<Te;ze++){let lt=Y.getViewport(ze);o.set(r.x*lt.x,r.y*lt.y,r.x*lt.z,r.y*lt.w),O.viewport(o),Y.updateMatrices(oe,ze),i=Y.getFrustum(),M(P,I,Y.camera,oe,this.type)}Y.isPointLightShadow!==!0&&this.type===Us&&E(Y,I),Y.needsUpdate=!1}m=this.type,v.needsUpdate=!1,n.setRenderTarget(_,w,U)};function E(R,P){let I=e.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ln(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(P,null,I,f,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(P,null,I,p,x,null)}function b(R,P,I,_){let w=null,U=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)w=U;else if(w=I.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let O=w.uuid,F=P.uuid,V=c[O];V===void 0&&(V={},c[O]=V);let te=V[F];te===void 0&&(te=w.clone(),V[F]=te,P.addEventListener("dispose",L)),w=te}if(w.visible=P.visible,w.wireframe=P.wireframe,_===Us?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:u[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,I.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let O=n.properties.get(w);O.light=I}return w}function M(R,P,I,_,w){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&w===Us)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);let F=e.update(R),V=R.material;if(Array.isArray(V)){let te=F.groups;for(let q=0,oe=te.length;q<oe;q++){let Y=te[q],he=V[Y.materialIndex];if(he&&he.visible){let Te=b(R,he,_,w);R.onBeforeShadow(n,R,P,I,F,Te,Y),n.renderBufferDirect(I,null,F,Te,R,Y),R.onAfterShadow(n,R,P,I,F,Te,Y)}}}else if(V.visible){let te=b(R,V,_,w);R.onBeforeShadow(n,R,P,I,F,te,null),n.renderBufferDirect(I,null,F,te,R,null),R.onAfterShadow(n,R,P,I,F,te,null)}}let O=R.children;for(let F=0,V=O.length;F<V;F++)M(O[F],P,I,_,w)}function L(R){R.target.removeEventListener("dispose",L);for(let I in c){let _=c[I],w=R.target.uuid;w in _&&(_[w].dispose(),delete _[w])}}}var PS={[Pu]:Iu,[Lu]:Hu,[Du]:Nu,[Jo]:Uu,[Iu]:Pu,[Hu]:Lu,[Nu]:Du,[Uu]:Jo};function IS(n,e){function t(){let H=!1,Ee=new Vt,j=null,ne=new Vt(0,0,0,0);return{setMask:function(Ie){j!==Ie&&!H&&(n.colorMask(Ie,Ie,Ie,Ie),j=Ie)},setLocked:function(Ie){H=Ie},setClear:function(Ie,Ce,pt,dn,On){On===!0&&(Ie*=dn,Ce*=dn,pt*=dn),Ee.set(Ie,Ce,pt,dn),ne.equals(Ee)===!1&&(n.clearColor(Ie,Ce,pt,dn),ne.copy(Ee))},reset:function(){H=!1,j=null,ne.set(-1,0,0,0)}}}function i(){let H=!1,Ee=!1,j=null,ne=null,Ie=null;return{setReversed:function(Ce){if(Ee!==Ce){let pt=e.get("EXT_clip_control");Ee?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT);let dn=Ie;Ie=null,this.setClear(dn)}Ee=Ce},getReversed:function(){return Ee},setTest:function(Ce){Ce?ye(n.DEPTH_TEST):Ye(n.DEPTH_TEST)},setMask:function(Ce){j!==Ce&&!H&&(n.depthMask(Ce),j=Ce)},setFunc:function(Ce){if(Ee&&(Ce=PS[Ce]),ne!==Ce){switch(Ce){case Pu:n.depthFunc(n.NEVER);break;case Iu:n.depthFunc(n.ALWAYS);break;case Lu:n.depthFunc(n.LESS);break;case Jo:n.depthFunc(n.LEQUAL);break;case Du:n.depthFunc(n.EQUAL);break;case Uu:n.depthFunc(n.GEQUAL);break;case Hu:n.depthFunc(n.GREATER);break;case Nu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ne=Ce}},setLocked:function(Ce){H=Ce},setClear:function(Ce){Ie!==Ce&&(Ee&&(Ce=1-Ce),n.clearDepth(Ce),Ie=Ce)},reset:function(){H=!1,j=null,ne=null,Ie=null,Ee=!1}}}function s(){let H=!1,Ee=null,j=null,ne=null,Ie=null,Ce=null,pt=null,dn=null,On=null;return{setTest:function(Yt){H||(Yt?ye(n.STENCIL_TEST):Ye(n.STENCIL_TEST))},setMask:function(Yt){Ee!==Yt&&!H&&(n.stencilMask(Yt),Ee=Yt)},setFunc:function(Yt,Bi,As){(j!==Yt||ne!==Bi||Ie!==As)&&(n.stencilFunc(Yt,Bi,As),j=Yt,ne=Bi,Ie=As)},setOp:function(Yt,Bi,As){(Ce!==Yt||pt!==Bi||dn!==As)&&(n.stencilOp(Yt,Bi,As),Ce=Yt,pt=Bi,dn=As)},setLocked:function(Yt){H=Yt},setClear:function(Yt){On!==Yt&&(n.clearStencil(Yt),On=Yt)},reset:function(){H=!1,Ee=null,j=null,ne=null,Ie=null,Ce=null,pt=null,dn=null,On=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,d={},u={},f=new WeakMap,p=[],g=null,x=!1,v=null,m=null,E=null,b=null,M=null,L=null,R=null,P=new re(0,0,0),I=0,_=!1,w=null,U=null,O=null,F=null,V=null,te=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,oe=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Y)[1]),q=oe>=1):Y.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),q=oe>=2);let he=null,Te={},ze=n.getParameter(n.SCISSOR_BOX),lt=n.getParameter(n.VIEWPORT),Dt=new Vt().fromArray(ze),K=new Vt().fromArray(lt);function de(H,Ee,j,ne){let Ie=new Uint8Array(4),Ce=n.createTexture();n.bindTexture(H,Ce),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let pt=0;pt<j;pt++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,ne,0,n.RGBA,n.UNSIGNED_BYTE,Ie):n.texImage2D(Ee+pt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ie);return Ce}let Ne={};Ne[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),Ne[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ne[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ne[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ye(n.DEPTH_TEST),o.setFunc(Jo),Mt(!1),Et(Rm),ye(n.CULL_FACE),N(Mn);function ye(H){d[H]!==!0&&(n.enable(H),d[H]=!0)}function Ye(H){d[H]!==!1&&(n.disable(H),d[H]=!1)}function $e(H,Ee){return u[H]!==Ee?(n.bindFramebuffer(H,Ee),u[H]=Ee,H===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Ee),H===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}function st(H,Ee){let j=p,ne=!1;if(H){j=f.get(Ee),j===void 0&&(j=[],f.set(Ee,j));let Ie=H.textures;if(j.length!==Ie.length||j[0]!==n.COLOR_ATTACHMENT0){for(let Ce=0,pt=Ie.length;Ce<pt;Ce++)j[Ce]=n.COLOR_ATTACHMENT0+Ce;j.length=Ie.length,ne=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,ne=!0);ne&&n.drawBuffers(j)}function Kt(H){return g!==H?(n.useProgram(H),g=H,!0):!1}let St={[Ei]:n.FUNC_ADD,[tM]:n.FUNC_SUBTRACT,[nM]:n.FUNC_REVERSE_SUBTRACT};St[iM]=n.MIN,St[sM]=n.MAX;let $t={[ca]:n.ZERO,[rM]:n.ONE,[oM]:n.SRC_COLOR,[Ru]:n.SRC_ALPHA,[hM]:n.SRC_ALPHA_SATURATE,[Ch]:n.DST_COLOR,[Rh]:n.DST_ALPHA,[aM]:n.ONE_MINUS_SRC_COLOR,[Cu]:n.ONE_MINUS_SRC_ALPHA,[cM]:n.ONE_MINUS_DST_COLOR,[lM]:n.ONE_MINUS_DST_ALPHA,[dM]:n.CONSTANT_COLOR,[uM]:n.ONE_MINUS_CONSTANT_COLOR,[fM]:n.CONSTANT_ALPHA,[pM]:n.ONE_MINUS_CONSTANT_ALPHA};function N(H,Ee,j,ne,Ie,Ce,pt,dn,On,Yt){if(H===Mn){x===!0&&(Ye(n.BLEND),x=!1);return}if(x===!1&&(ye(n.BLEND),x=!0),H!==$f){if(H!==v||Yt!==_){if((m!==Ei||M!==Ei)&&(n.blendEquation(n.FUNC_ADD),m=Ei,M=Ei),Yt)switch(H){case li:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case He:n.blendFunc(n.ONE,n.ONE);break;case Cm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case li:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case He:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Cm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}E=null,b=null,L=null,R=null,P.set(0,0,0),I=0,v=H,_=Yt}return}Ie=Ie||Ee,Ce=Ce||j,pt=pt||ne,(Ee!==m||Ie!==M)&&(n.blendEquationSeparate(St[Ee],St[Ie]),m=Ee,M=Ie),(j!==E||ne!==b||Ce!==L||pt!==R)&&(n.blendFuncSeparate($t[j],$t[ne],$t[Ce],$t[pt]),E=j,b=ne,L=Ce,R=pt),(dn.equals(P)===!1||On!==I)&&(n.blendColor(dn.r,dn.g,dn.b,On),P.copy(dn),I=On),v=H,_=!1}function kn(H,Ee){H.side===bt?Ye(n.CULL_FACE):ye(n.CULL_FACE);let j=H.side===Dn;Ee&&(j=!j),Mt(j),H.blending===li&&H.transparent===!1?N(Mn):N(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let ne=H.stencilWrite;a.setTest(ne),ne&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),qt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ye(n.SAMPLE_ALPHA_TO_COVERAGE):Ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(H){w!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),w=H)}function Et(H){H!==$y?(ye(n.CULL_FACE),H!==U&&(H===Rm?n.cullFace(n.BACK):H===eM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ye(n.CULL_FACE),U=H}function Qe(H){H!==O&&(q&&n.lineWidth(H),O=H)}function qt(H,Ee,j){H?(ye(n.POLYGON_OFFSET_FILL),(F!==Ee||V!==j)&&(n.polygonOffset(Ee,j),F=Ee,V=j)):Ye(n.POLYGON_OFFSET_FILL)}function Ze(H){H?ye(n.SCISSOR_TEST):Ye(n.SCISSOR_TEST)}function D(H){H===void 0&&(H=n.TEXTURE0+te-1),he!==H&&(n.activeTexture(H),he=H)}function T(H,Ee,j){j===void 0&&(he===null?j=n.TEXTURE0+te-1:j=he);let ne=Te[j];ne===void 0&&(ne={type:void 0,texture:void 0},Te[j]=ne),(ne.type!==H||ne.texture!==Ee)&&(he!==j&&(n.activeTexture(j),he=j),n.bindTexture(H,Ee||Ne[H]),ne.type=H,ne.texture=Ee)}function B(){let H=Te[he];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function se(){try{n.compressedTexImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Oe(){try{n.texSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function be(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Re(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function yt(){try{n.texStorage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function De(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function et(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function it(H){Dt.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Dt.copy(H))}function Ue(H){K.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),K.copy(H))}function At(H,Ee){let j=c.get(Ee);j===void 0&&(j=new WeakMap,c.set(Ee,j));let ne=j.get(H);ne===void 0&&(ne=n.getUniformBlockIndex(Ee,H.name),j.set(H,ne))}function rt(H,Ee){let ne=c.get(Ee).get(H);l.get(Ee)!==ne&&(n.uniformBlockBinding(Ee,ne,H.__bindingPointIndex),l.set(Ee,ne))}function Ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},he=null,Te={},u={},f=new WeakMap,p=[],g=null,x=!1,v=null,m=null,E=null,b=null,M=null,L=null,R=null,P=new re(0,0,0),I=0,_=!1,w=null,U=null,O=null,F=null,V=null,Dt.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ye,disable:Ye,bindFramebuffer:$e,drawBuffers:st,useProgram:Kt,setBlending:N,setMaterial:kn,setFlipSided:Mt,setCullFace:Et,setLineWidth:Qe,setPolygonOffset:qt,setScissorTest:Ze,activeTexture:D,bindTexture:T,unbindTexture:B,compressedTexImage2D:ee,compressedTexImage3D:se,texImage2D:De,texImage3D:et,updateUBOMapping:At,uniformBlockBinding:rt,texStorage2D:yt,texStorage3D:ae,texSubImage2D:J,texSubImage3D:Oe,compressedTexSubImage2D:be,compressedTexSubImage3D:Re,scissor:it,viewport:Ue,reset:Ut}}function Tg(n,e,t,i){let s=LS(i);switch(t){case Xg:return n*e;case Yg:return n*e;case jg:return n*e*2;case lp:return n*e/s.components*s.byteLength;case cp:return n*e/s.components*s.byteLength;case Zg:return n*e*2/s.components*s.byteLength;case hp:return n*e*2/s.components*s.byteLength;case qg:return n*e*3/s.components*s.byteLength;case ai:return n*e*4/s.components*s.byteLength;case dp:return n*e*4/s.components*s.byteLength;case $c:case eh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case th:case nh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bu:case Vu:return Math.max(n,16)*Math.max(e,8)/4;case Fu:case Gu:return Math.max(n,8)*Math.max(e,8)/2;case Wu:case Xu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ju:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Zu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ku:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ju:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Qu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case $u:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ef:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case tf:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case nf:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case sf:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case rf:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case of:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case af:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ih:case lf:case cf:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Kg:case hf:return Math.ceil(n/4)*Math.ceil(e/4)*8;case df:case uf:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function LS(n){switch(n){case ei:case Gg:return{byteLength:1,components:1};case yl:case Vg:case wn:return{byteLength:2,components:1};case op:case ap:return{byteLength:2,components:4};case Jr:case rp:case rs:return{byteLength:4,components:1};case Wg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function DS(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $,d=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,T){return p?new OffscreenCanvas(D,T):oh("canvas")}function x(D,T,B){let ee=1,se=Ze(D);if((se.width>B||se.height>B)&&(ee=B/Math.max(se.width,se.height)),ee<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let J=Math.floor(ee*se.width),Oe=Math.floor(ee*se.height);u===void 0&&(u=g(J,Oe));let be=T?g(J,Oe):u;return be.width=J,be.height=Oe,be.getContext("2d").drawImage(D,0,0,J,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+J+"x"+Oe+")."),be}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),D;return D}function v(D){return D.generateMipmaps}function m(D){n.generateMipmap(D)}function E(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(D,T,B,ee,se=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let J=T;if(T===n.RED&&(B===n.FLOAT&&(J=n.R32F),B===n.HALF_FLOAT&&(J=n.R16F),B===n.UNSIGNED_BYTE&&(J=n.R8)),T===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.R8UI),B===n.UNSIGNED_SHORT&&(J=n.R16UI),B===n.UNSIGNED_INT&&(J=n.R32UI),B===n.BYTE&&(J=n.R8I),B===n.SHORT&&(J=n.R16I),B===n.INT&&(J=n.R32I)),T===n.RG&&(B===n.FLOAT&&(J=n.RG32F),B===n.HALF_FLOAT&&(J=n.RG16F),B===n.UNSIGNED_BYTE&&(J=n.RG8)),T===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RG8UI),B===n.UNSIGNED_SHORT&&(J=n.RG16UI),B===n.UNSIGNED_INT&&(J=n.RG32UI),B===n.BYTE&&(J=n.RG8I),B===n.SHORT&&(J=n.RG16I),B===n.INT&&(J=n.RG32I)),T===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RGB8UI),B===n.UNSIGNED_SHORT&&(J=n.RGB16UI),B===n.UNSIGNED_INT&&(J=n.RGB32UI),B===n.BYTE&&(J=n.RGB8I),B===n.SHORT&&(J=n.RGB16I),B===n.INT&&(J=n.RGB32I)),T===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),B===n.UNSIGNED_INT&&(J=n.RGBA32UI),B===n.BYTE&&(J=n.RGBA8I),B===n.SHORT&&(J=n.RGBA16I),B===n.INT&&(J=n.RGBA32I)),T===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),T===n.RGBA){let Oe=se?Ih:Ct.getTransfer(ee);B===n.FLOAT&&(J=n.RGBA32F),B===n.HALF_FLOAT&&(J=n.RGBA16F),B===n.UNSIGNED_BYTE&&(J=Oe===Gt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function M(D,T){let B;return D?T===null||T===Jr||T===dr?B=n.DEPTH24_STENCIL8:T===rs?B=n.DEPTH32F_STENCIL8:T===yl&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Jr||T===dr?B=n.DEPTH_COMPONENT24:T===rs?B=n.DEPTH_COMPONENT32F:T===yl&&(B=n.DEPTH_COMPONENT16),B}function L(D,T){return v(D)===!0||D.isFramebufferTexture&&D.minFilter!==pn&&D.minFilter!==bi?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function R(D){let T=D.target;T.removeEventListener("dispose",R),I(T),T.isVideoTexture&&d.delete(T)}function P(D){let T=D.target;T.removeEventListener("dispose",P),w(T)}function I(D){let T=i.get(D);if(T.__webglInit===void 0)return;let B=D.source,ee=f.get(B);if(ee){let se=ee[T.__cacheKey];se.usedTimes--,se.usedTimes===0&&_(D),Object.keys(ee).length===0&&f.delete(B)}i.remove(D)}function _(D){let T=i.get(D);n.deleteTexture(T.__webglTexture);let B=D.source,ee=f.get(B);delete ee[T.__cacheKey],o.memory.textures--}function w(D){let T=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(T.__webglFramebuffer[ee]))for(let se=0;se<T.__webglFramebuffer[ee].length;se++)n.deleteFramebuffer(T.__webglFramebuffer[ee][se]);else n.deleteFramebuffer(T.__webglFramebuffer[ee]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[ee])}else{if(Array.isArray(T.__webglFramebuffer))for(let ee=0;ee<T.__webglFramebuffer.length;ee++)n.deleteFramebuffer(T.__webglFramebuffer[ee]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ee=0;ee<T.__webglColorRenderbuffer.length;ee++)T.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[ee]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let B=D.textures;for(let ee=0,se=B.length;ee<se;ee++){let J=i.get(B[ee]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(B[ee])}i.remove(D)}let U=0;function O(){U=0}function F(){let D=U;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),U+=1,D}function V(D){let T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function te(D,T){let B=i.get(D);if(D.isVideoTexture&&Qe(D),D.isRenderTargetTexture===!1&&D.version>0&&B.__version!==D.version){let ee=D.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(B,D,T);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+T)}function q(D,T){let B=i.get(D);if(D.version>0&&B.__version!==D.version){K(B,D,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+T)}function oe(D,T){let B=i.get(D);if(D.version>0&&B.__version!==D.version){K(B,D,T);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+T)}function Y(D,T){let B=i.get(D);if(D.version>0&&B.__version!==D.version){de(B,D,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+T)}let he={[Jn]:n.REPEAT,[Zr]:n.CLAMP_TO_EDGE,[Ou]:n.MIRRORED_REPEAT},Te={[pn]:n.NEAREST,[xM]:n.NEAREST_MIPMAP_NEAREST,[Sc]:n.NEAREST_MIPMAP_LINEAR,[bi]:n.LINEAR,[jd]:n.LINEAR_MIPMAP_NEAREST,[Kr]:n.LINEAR_MIPMAP_LINEAR},ze={[bM]:n.NEVER,[RM]:n.ALWAYS,[wM]:n.LESS,[Jg]:n.LEQUAL,[SM]:n.EQUAL,[AM]:n.GEQUAL,[_M]:n.GREATER,[TM]:n.NOTEQUAL};function lt(D,T){if(T.type===rs&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===bi||T.magFilter===jd||T.magFilter===Sc||T.magFilter===Kr||T.minFilter===bi||T.minFilter===jd||T.minFilter===Sc||T.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,he[T.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,he[T.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,he[T.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,Te[T.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,Te[T.minFilter]),T.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,ze[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===pn||T.minFilter!==Sc&&T.minFilter!==Kr||T.type===rs&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Dt(D,T){let B=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",R));let ee=T.source,se=f.get(ee);se===void 0&&(se={},f.set(ee,se));let J=V(T);if(J!==D.__cacheKey){se[J]===void 0&&(se[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),se[J].usedTimes++;let Oe=se[D.__cacheKey];Oe!==void 0&&(se[D.__cacheKey].usedTimes--,Oe.usedTimes===0&&_(T)),D.__cacheKey=J,D.__webglTexture=se[J].texture}return B}function K(D,T,B){let ee=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ee=n.TEXTURE_3D);let se=Dt(D,T),J=T.source;t.bindTexture(ee,D.__webglTexture,n.TEXTURE0+B);let Oe=i.get(J);if(J.version!==Oe.__version||se===!0){t.activeTexture(n.TEXTURE0+B);let be=Ct.getPrimaries(Ct.workingColorSpace),Re=T.colorSpace===ar?null:Ct.getPrimaries(T.colorSpace),yt=T.colorSpace===ar||be===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let ae=x(T.image,!1,s.maxTextureSize);ae=qt(T,ae);let De=r.convert(T.format,T.colorSpace),et=r.convert(T.type),it=b(T.internalFormat,De,et,T.colorSpace,T.isVideoTexture);lt(ee,T);let Ue,At=T.mipmaps,rt=T.isVideoTexture!==!0,Ut=Oe.__version===void 0||se===!0,H=J.dataReady,Ee=L(T,ae);if(T.isDepthTexture)it=M(T.format===ur,T.type),Ut&&(rt?t.texStorage2D(n.TEXTURE_2D,1,it,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,it,ae.width,ae.height,0,De,et,null));else if(T.isDataTexture)if(At.length>0){rt&&Ut&&t.texStorage2D(n.TEXTURE_2D,Ee,it,At[0].width,At[0].height);for(let j=0,ne=At.length;j<ne;j++)Ue=At[j],rt?H&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,Ue.width,Ue.height,De,et,Ue.data):t.texImage2D(n.TEXTURE_2D,j,it,Ue.width,Ue.height,0,De,et,Ue.data);T.generateMipmaps=!1}else rt?(Ut&&t.texStorage2D(n.TEXTURE_2D,Ee,it,ae.width,ae.height),H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,De,et,ae.data)):t.texImage2D(n.TEXTURE_2D,0,it,ae.width,ae.height,0,De,et,ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){rt&&Ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,it,At[0].width,At[0].height,ae.depth);for(let j=0,ne=At.length;j<ne;j++)if(Ue=At[j],T.format!==ai)if(De!==null)if(rt){if(H)if(T.layerUpdates.size>0){let Ie=Tg(Ue.width,Ue.height,T.format,T.type);for(let Ce of T.layerUpdates){let pt=Ue.data.subarray(Ce*Ie/Ue.data.BYTES_PER_ELEMENT,(Ce+1)*Ie/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,Ce,Ue.width,Ue.height,1,De,pt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,Ue.width,Ue.height,ae.depth,De,Ue.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,it,Ue.width,Ue.height,ae.depth,0,Ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,Ue.width,Ue.height,ae.depth,De,et,Ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,it,Ue.width,Ue.height,ae.depth,0,De,et,Ue.data)}else{rt&&Ut&&t.texStorage2D(n.TEXTURE_2D,Ee,it,At[0].width,At[0].height);for(let j=0,ne=At.length;j<ne;j++)Ue=At[j],T.format!==ai?De!==null?rt?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,Ue.width,Ue.height,De,Ue.data):t.compressedTexImage2D(n.TEXTURE_2D,j,it,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?H&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,Ue.width,Ue.height,De,et,Ue.data):t.texImage2D(n.TEXTURE_2D,j,it,Ue.width,Ue.height,0,De,et,Ue.data)}else if(T.isDataArrayTexture)if(rt){if(Ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,it,ae.width,ae.height,ae.depth),H)if(T.layerUpdates.size>0){let j=Tg(ae.width,ae.height,T.format,T.type);for(let ne of T.layerUpdates){let Ie=ae.data.subarray(ne*j/ae.data.BYTES_PER_ELEMENT,(ne+1)*j/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,ae.width,ae.height,1,De,et,Ie)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,De,et,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,it,ae.width,ae.height,ae.depth,0,De,et,ae.data);else if(T.isData3DTexture)rt?(Ut&&t.texStorage3D(n.TEXTURE_3D,Ee,it,ae.width,ae.height,ae.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,De,et,ae.data)):t.texImage3D(n.TEXTURE_3D,0,it,ae.width,ae.height,ae.depth,0,De,et,ae.data);else if(T.isFramebufferTexture){if(Ut)if(rt)t.texStorage2D(n.TEXTURE_2D,Ee,it,ae.width,ae.height);else{let j=ae.width,ne=ae.height;for(let Ie=0;Ie<Ee;Ie++)t.texImage2D(n.TEXTURE_2D,Ie,it,j,ne,0,De,et,null),j>>=1,ne>>=1}}else if(At.length>0){if(rt&&Ut){let j=Ze(At[0]);t.texStorage2D(n.TEXTURE_2D,Ee,it,j.width,j.height)}for(let j=0,ne=At.length;j<ne;j++)Ue=At[j],rt?H&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,De,et,Ue):t.texImage2D(n.TEXTURE_2D,j,it,De,et,Ue);T.generateMipmaps=!1}else if(rt){if(Ut){let j=Ze(ae);t.texStorage2D(n.TEXTURE_2D,Ee,it,j.width,j.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,De,et,ae)}else t.texImage2D(n.TEXTURE_2D,0,it,De,et,ae);v(T)&&m(ee),Oe.__version=J.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function de(D,T,B){if(T.image.length!==6)return;let ee=Dt(D,T),se=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+B);let J=i.get(se);if(se.version!==J.__version||ee===!0){t.activeTexture(n.TEXTURE0+B);let Oe=Ct.getPrimaries(Ct.workingColorSpace),be=T.colorSpace===ar?null:Ct.getPrimaries(T.colorSpace),Re=T.colorSpace===ar||Oe===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let yt=T.isCompressedTexture||T.image[0].isCompressedTexture,ae=T.image[0]&&T.image[0].isDataTexture,De=[];for(let ne=0;ne<6;ne++)!yt&&!ae?De[ne]=x(T.image[ne],!0,s.maxCubemapSize):De[ne]=ae?T.image[ne].image:T.image[ne],De[ne]=qt(T,De[ne]);let et=De[0],it=r.convert(T.format,T.colorSpace),Ue=r.convert(T.type),At=b(T.internalFormat,it,Ue,T.colorSpace),rt=T.isVideoTexture!==!0,Ut=J.__version===void 0||ee===!0,H=se.dataReady,Ee=L(T,et);lt(n.TEXTURE_CUBE_MAP,T);let j;if(yt){rt&&Ut&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,At,et.width,et.height);for(let ne=0;ne<6;ne++){j=De[ne].mipmaps;for(let Ie=0;Ie<j.length;Ie++){let Ce=j[Ie];T.format!==ai?it!==null?rt?H&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie,0,0,Ce.width,Ce.height,it,Ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie,At,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie,0,0,Ce.width,Ce.height,it,Ue,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie,At,Ce.width,Ce.height,0,it,Ue,Ce.data)}}}else{if(j=T.mipmaps,rt&&Ut){j.length>0&&Ee++;let ne=Ze(De[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,At,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(ae){rt?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,De[ne].width,De[ne].height,it,Ue,De[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,At,De[ne].width,De[ne].height,0,it,Ue,De[ne].data);for(let Ie=0;Ie<j.length;Ie++){let pt=j[Ie].image[ne].image;rt?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie+1,0,0,pt.width,pt.height,it,Ue,pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie+1,At,pt.width,pt.height,0,it,Ue,pt.data)}}else{rt?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,it,Ue,De[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,At,it,Ue,De[ne]);for(let Ie=0;Ie<j.length;Ie++){let Ce=j[Ie];rt?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie+1,0,0,it,Ue,Ce.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie+1,At,it,Ue,Ce.image[ne])}}}v(T)&&m(n.TEXTURE_CUBE_MAP),J.__version=se.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Ne(D,T,B,ee,se,J){let Oe=r.convert(B.format,B.colorSpace),be=r.convert(B.type),Re=b(B.internalFormat,Oe,be,B.colorSpace),yt=i.get(T),ae=i.get(B);if(ae.__renderTarget=T,!yt.__hasExternalTextures){let De=Math.max(1,T.width>>J),et=Math.max(1,T.height>>J);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,J,Re,De,et,T.depth,0,Oe,be,null):t.texImage2D(se,J,Re,De,et,0,Oe,be,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),Et(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,se,ae.__webglTexture,0,Mt(T)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,se,ae.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(D,T,B){if(n.bindRenderbuffer(n.RENDERBUFFER,D),T.depthBuffer){let ee=T.depthTexture,se=ee&&ee.isDepthTexture?ee.type:null,J=M(T.stencilBuffer,se),Oe=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=Mt(T);Et(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,J,T.width,T.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,J,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,J,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Oe,n.RENDERBUFFER,D)}else{let ee=T.textures;for(let se=0;se<ee.length;se++){let J=ee[se],Oe=r.convert(J.format,J.colorSpace),be=r.convert(J.type),Re=b(J.internalFormat,Oe,be,J.colorSpace),yt=Mt(T);B&&Et(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,yt,Re,T.width,T.height):Et(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,yt,Re,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Re,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ye(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ee=i.get(T.depthTexture);ee.__renderTarget=T,(!ee.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),te(T.depthTexture,0);let se=ee.__webglTexture,J=Mt(T);if(T.depthTexture.format===jo)Et(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(T.depthTexture.format===ur)Et(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function $e(D){let T=i.get(D),B=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){let ee=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ee){let se=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ee.removeEventListener("dispose",se)};ee.addEventListener("dispose",se),T.__depthDisposeCallback=se}T.__boundDepthTexture=ee}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ye(T.__webglFramebuffer,D)}else if(B){T.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ee]),T.__webglDepthbuffer[ee]===void 0)T.__webglDepthbuffer[ee]=n.createRenderbuffer(),ye(T.__webglDepthbuffer[ee],D,!1);else{let se=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=T.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,J)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),ye(T.__webglDepthbuffer,D,!1);else{let ee=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,se)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function st(D,T,B){let ee=i.get(D);T!==void 0&&Ne(ee.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&$e(D)}function Kt(D){let T=D.texture,B=i.get(D),ee=i.get(T);D.addEventListener("dispose",P);let se=D.textures,J=D.isWebGLCubeRenderTarget===!0,Oe=se.length>1;if(Oe||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=T.version,o.memory.textures++),J){B.__webglFramebuffer=[];for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer[be]=[];for(let Re=0;Re<T.mipmaps.length;Re++)B.__webglFramebuffer[be][Re]=n.createFramebuffer()}else B.__webglFramebuffer[be]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer=[];for(let be=0;be<T.mipmaps.length;be++)B.__webglFramebuffer[be]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Oe)for(let be=0,Re=se.length;be<Re;be++){let yt=i.get(se[be]);yt.__webglTexture===void 0&&(yt.__webglTexture=n.createTexture(),o.memory.textures++)}if(D.samples>0&&Et(D)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let be=0;be<se.length;be++){let Re=se[be];B.__webglColorRenderbuffer[be]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[be]);let yt=r.convert(Re.format,Re.colorSpace),ae=r.convert(Re.type),De=b(Re.internalFormat,yt,ae,Re.colorSpace,D.isXRRenderTarget===!0),et=Mt(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,et,De,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,B.__webglColorRenderbuffer[be])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ye(B.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),lt(n.TEXTURE_CUBE_MAP,T);for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0)for(let Re=0;Re<T.mipmaps.length;Re++)Ne(B.__webglFramebuffer[be][Re],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Re);else Ne(B.__webglFramebuffer[be],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);v(T)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let be=0,Re=se.length;be<Re;be++){let yt=se[be],ae=i.get(yt);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),lt(n.TEXTURE_2D,yt),Ne(B.__webglFramebuffer,D,yt,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,0),v(yt)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let be=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(be=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,ee.__webglTexture),lt(be,T),T.mipmaps&&T.mipmaps.length>0)for(let Re=0;Re<T.mipmaps.length;Re++)Ne(B.__webglFramebuffer[Re],D,T,n.COLOR_ATTACHMENT0,be,Re);else Ne(B.__webglFramebuffer,D,T,n.COLOR_ATTACHMENT0,be,0);v(T)&&m(be),t.unbindTexture()}D.depthBuffer&&$e(D)}function St(D){let T=D.textures;for(let B=0,ee=T.length;B<ee;B++){let se=T[B];if(v(se)){let J=E(D),Oe=i.get(se).__webglTexture;t.bindTexture(J,Oe),m(J),t.unbindTexture()}}}let $t=[],N=[];function kn(D){if(D.samples>0){if(Et(D)===!1){let T=D.textures,B=D.width,ee=D.height,se=n.COLOR_BUFFER_BIT,J=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Oe=i.get(D),be=T.length>1;if(be)for(let Re=0;Re<T.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Re=0;Re<T.length;Re++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),be){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[Re]);let yt=i.get(T[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,yt,0)}n.blitFramebuffer(0,0,B,ee,0,0,B,ee,se,n.NEAREST),l===!0&&($t.length=0,N.length=0,$t.push(n.COLOR_ATTACHMENT0+Re),D.depthBuffer&&D.resolveDepthBuffer===!1&&($t.push(J),N.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$t))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),be)for(let Re=0;Re<T.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[Re]);let yt=i.get(T[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,yt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){let T=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Mt(D){return Math.min(s.maxSamples,D.samples)}function Et(D){let T=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Qe(D){let T=o.render.frame;d.get(D)!==T&&(d.set(D,T),D.update())}function qt(D,T){let B=D.colorSpace,ee=D.format,se=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||B!==ha&&B!==ar&&(Ct.getTransfer(B)===Gt?(ee!==ai||se!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),T}function Ze(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=te,this.setTexture2DArray=q,this.setTexture3D=oe,this.setTextureCube=Y,this.rebindTextures=st,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=kn,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=Et}function US(n,e){function t(i,s=ar){let r,o=Ct.getTransfer(s);if(i===ei)return n.UNSIGNED_BYTE;if(i===op)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ap)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Wg)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Gg)return n.BYTE;if(i===Vg)return n.SHORT;if(i===yl)return n.UNSIGNED_SHORT;if(i===rp)return n.INT;if(i===Jr)return n.UNSIGNED_INT;if(i===rs)return n.FLOAT;if(i===wn)return n.HALF_FLOAT;if(i===Xg)return n.ALPHA;if(i===qg)return n.RGB;if(i===ai)return n.RGBA;if(i===Yg)return n.LUMINANCE;if(i===jg)return n.LUMINANCE_ALPHA;if(i===jo)return n.DEPTH_COMPONENT;if(i===ur)return n.DEPTH_STENCIL;if(i===lp)return n.RED;if(i===cp)return n.RED_INTEGER;if(i===Zg)return n.RG;if(i===hp)return n.RG_INTEGER;if(i===dp)return n.RGBA_INTEGER;if(i===$c||i===eh||i===th||i===nh)if(o===Gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===$c)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===eh)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===th)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===nh)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===$c)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===eh)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===th)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===nh)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fu||i===Bu||i===Gu||i===Vu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Fu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wu||i===Xu||i===qu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Wu||i===Xu)return o===Gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===qu)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Yu||i===ju||i===Zu||i===Ku||i===Ju||i===Qu||i===$u||i===ef||i===tf||i===nf||i===sf||i===rf||i===of||i===af)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Yu)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ju)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zu)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ku)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ju)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qu)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$u)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ef)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tf)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nf)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sf)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rf)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===of)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===af)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ih||i===lf||i===cf)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ih)return o===Gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cf)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kg||i===hf||i===df||i===uf)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ih)return r.COMPRESSED_RED_RGTC1_EXT;if(i===hf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===df)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===dr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Rf=class extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ce=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},HS={type:"move"},gl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let v=t.getJointPose(x,i),m=this._getHandJoint(c,x);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}let d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=d.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(HS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ce;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},NS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zS=`
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

}`,Cf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new Rn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ht({vertexShader:NS,fragmentShader:zS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Q(new Gn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pf=class extends fr{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,f=null,p=null,g=null,x=new Cf,v=t.getContextAttributes(),m=null,E=null,b=[],M=[],L=new $,R=null,P=new fn;P.viewport=new Vt;let I=new fn;I.viewport=new Vt;let _=[P,I],w=new Rf,U=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let de=b[K];return de===void 0&&(de=new gl,b[K]=de),de.getTargetRaySpace()},this.getControllerGrip=function(K){let de=b[K];return de===void 0&&(de=new gl,b[K]=de),de.getGripSpace()},this.getHand=function(K){let de=b[K];return de===void 0&&(de=new gl,b[K]=de),de.getHandSpace()};function F(K){let de=M.indexOf(K.inputSource);if(de===-1)return;let Ne=b[de];Ne!==void 0&&(Ne.update(K.inputSource,K.frame,c||o),Ne.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",te);for(let K=0;K<b.length;K++){let de=M[K];de!==null&&(M[K]=null,b[K].disconnect(de))}U=null,O=null,x.reset(),e.setRenderTarget(m),p=null,f=null,u=null,s=null,E=null,Dt.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",V),s.addEventListener("inputsourceschange",te),v.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){let de={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new ln(p.framebufferWidth,p.framebufferHeight,{format:ai,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let de=null,Ne=null,ye=null;v.depth&&(ye=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=v.stencil?ur:jo,Ne=v.stencil?dr:Jr);let Ye={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Ye),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new ln(f.textureWidth,f.textureHeight,{format:ai,type:ei,depthTexture:new sa(f.textureWidth,f.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Dt.setContext(s),Dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function te(K){for(let de=0;de<K.removed.length;de++){let Ne=K.removed[de],ye=M.indexOf(Ne);ye>=0&&(M[ye]=null,b[ye].disconnect(Ne))}for(let de=0;de<K.added.length;de++){let Ne=K.added[de],ye=M.indexOf(Ne);if(ye===-1){for(let $e=0;$e<b.length;$e++)if($e>=M.length){M.push(Ne),ye=$e;break}else if(M[$e]===null){M[$e]=Ne,ye=$e;break}if(ye===-1)break}let Ye=b[ye];Ye&&Ye.connect(Ne)}}let q=new S,oe=new S;function Y(K,de,Ne){q.setFromMatrixPosition(de.matrixWorld),oe.setFromMatrixPosition(Ne.matrixWorld);let ye=q.distanceTo(oe),Ye=de.projectionMatrix.elements,$e=Ne.projectionMatrix.elements,st=Ye[14]/(Ye[10]-1),Kt=Ye[14]/(Ye[10]+1),St=(Ye[9]+1)/Ye[5],$t=(Ye[9]-1)/Ye[5],N=(Ye[8]-1)/Ye[0],kn=($e[8]+1)/$e[0],Mt=st*N,Et=st*kn,Qe=ye/(-N+kn),qt=Qe*-N;if(de.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(qt),K.translateZ(Qe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ye[10]===-1)K.projectionMatrix.copy(de.projectionMatrix),K.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{let Ze=st+Qe,D=Kt+Qe,T=Mt-qt,B=Et+(ye-qt),ee=St*Kt/D*Ze,se=$t*Kt/D*Ze;K.projectionMatrix.makePerspective(T,B,ee,se,Ze,D),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function he(K,de){de===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(de.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let de=K.near,Ne=K.far;x.texture!==null&&(x.depthNear>0&&(de=x.depthNear),x.depthFar>0&&(Ne=x.depthFar)),w.near=I.near=P.near=de,w.far=I.far=P.far=Ne,(U!==w.near||O!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),U=w.near,O=w.far),P.layers.mask=K.layers.mask|2,I.layers.mask=K.layers.mask|4,w.layers.mask=P.layers.mask|I.layers.mask;let ye=K.parent,Ye=w.cameras;he(w,ye);for(let $e=0;$e<Ye.length;$e++)he(Ye[$e],ye);Ye.length===2?Y(w,P,I):w.projectionMatrix.copy(P.projectionMatrix),Te(K,w,ye)};function Te(K,de,Ne){Ne===null?K.matrix.copy(de.matrixWorld):(K.matrix.copy(Ne.matrixWorld),K.matrix.invert(),K.matrix.multiply(de.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(de.projectionMatrix),K.projectionMatrixInverse.copy(de.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ea*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(w)};let ze=null;function lt(K,de){if(d=de.getViewerPose(c||o),g=de,d!==null){let Ne=d.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let ye=!1;Ne.length!==w.cameras.length&&(w.cameras.length=0,ye=!0);for(let $e=0;$e<Ne.length;$e++){let st=Ne[$e],Kt=null;if(p!==null)Kt=p.getViewport(st);else{let $t=u.getViewSubImage(f,st);Kt=$t.viewport,$e===0&&(e.setRenderTargetTextures(E,$t.colorTexture,f.ignoreDepthValues?void 0:$t.depthStencilTexture),e.setRenderTarget(E))}let St=_[$e];St===void 0&&(St=new fn,St.layers.enable($e),St.viewport=new Vt,_[$e]=St),St.matrix.fromArray(st.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(st.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),$e===0&&(w.matrix.copy(St.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ye===!0&&w.cameras.push(St)}let Ye=s.enabledFeatures;if(Ye&&Ye.includes("depth-sensing")){let $e=u.getDepthInformation(Ne[0]);$e&&$e.isValid&&$e.texture&&x.init(e,$e,s.renderState)}}for(let Ne=0;Ne<b.length;Ne++){let ye=M[Ne],Ye=b[Ne];ye!==null&&Ye!==void 0&&Ye.update(ye,de,c||o)}ze&&ze(K,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),g=null}let Dt=new tv;Dt.setAnimationLoop(lt),this.setAnimationLoop=function(K){ze=K},this.dispose=function(){}}},qr=new Cn,kS=new vt;function OS(n,e){function t(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function i(v,m){m.color.getRGB(v.fogColor.value,ev(n)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function s(v,m,E,b,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(v,m):m.isMeshToonMaterial?(r(v,m),u(v,m)):m.isMeshPhongMaterial?(r(v,m),d(v,m)):m.isMeshStandardMaterial?(r(v,m),f(v,m),m.isMeshPhysicalMaterial&&p(v,m,M)):m.isMeshMatcapMaterial?(r(v,m),g(v,m)):m.isMeshDepthMaterial?r(v,m):m.isMeshDistanceMaterial?(r(v,m),x(v,m)):m.isMeshNormalMaterial?r(v,m):m.isLineBasicMaterial?(o(v,m),m.isLineDashedMaterial&&a(v,m)):m.isPointsMaterial?l(v,m,E,b):m.isSpriteMaterial?c(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,t(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===Dn&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,t(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===Dn&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,t(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,t(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);let E=e.get(m),b=E.envMap,M=E.envMapRotation;b&&(v.envMap.value=b,qr.copy(M),qr.x*=-1,qr.y*=-1,qr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),v.envMapRotation.value.setFromMatrix4(kS.makeRotationFromEuler(qr)),v.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,v.aoMapTransform))}function o(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform))}function a(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function l(v,m,E,b){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*E,v.scale.value=b*.5,m.map&&(v.map.value=m.map,t(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function c(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function d(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function u(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function f(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function p(v,m,E){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Dn&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=E.texture,v.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,v.specularIntensityMapTransform))}function g(v,m){m.matcap&&(v.matcap.value=m.matcap)}function x(v,m){let E=e.get(m).light;v.referencePosition.value.setFromMatrixPosition(E.matrixWorld),v.nearDistance.value=E.shadow.camera.near,v.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function FS(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){let M=b.program;i.uniformBlockBinding(E,M)}function c(E,b){let M=s[E.id];M===void 0&&(g(E),M=d(E),s[E.id]=M,E.addEventListener("dispose",v));let L=b.program;i.updateUBOMapping(E,L);let R=e.render.frame;r[E.id]!==R&&(f(E),r[E.id]=R)}function d(E){let b=u();E.__bindingPointIndex=b;let M=n.createBuffer(),L=E.__size,R=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,L,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let b=s[E.id],M=E.uniforms,L=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let R=0,P=M.length;R<P;R++){let I=Array.isArray(M[R])?M[R]:[M[R]];for(let _=0,w=I.length;_<w;_++){let U=I[_];if(p(U,R,_,L)===!0){let O=U.__offset,F=Array.isArray(U.value)?U.value:[U.value],V=0;for(let te=0;te<F.length;te++){let q=F[te],oe=x(q);typeof q=="number"||typeof q=="boolean"?(U.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,O+V,U.__data)):q.isMatrix3?(U.__data[0]=q.elements[0],U.__data[1]=q.elements[1],U.__data[2]=q.elements[2],U.__data[3]=0,U.__data[4]=q.elements[3],U.__data[5]=q.elements[4],U.__data[6]=q.elements[5],U.__data[7]=0,U.__data[8]=q.elements[6],U.__data[9]=q.elements[7],U.__data[10]=q.elements[8],U.__data[11]=0):(q.toArray(U.__data,V),V+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,b,M,L){let R=E.value,P=b+"_"+M;if(L[P]===void 0)return typeof R=="number"||typeof R=="boolean"?L[P]=R:L[P]=R.clone(),!0;{let I=L[P];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return L[P]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function g(E){let b=E.uniforms,M=0,L=16;for(let P=0,I=b.length;P<I;P++){let _=Array.isArray(b[P])?b[P]:[b[P]];for(let w=0,U=_.length;w<U;w++){let O=_[w],F=Array.isArray(O.value)?O.value:[O.value];for(let V=0,te=F.length;V<te;V++){let q=F[V],oe=x(q),Y=M%L,he=Y%oe.boundary,Te=Y+he;M+=he,Te!==0&&L-Te<oe.storage&&(M+=L-Te),O.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=oe.storage}}}let R=M%L;return R>0&&(M+=L-R),E.__size=M,E.__cache={},this}function x(E){let b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function v(E){let b=E.target;b.removeEventListener("dispose",v);let M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(let E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var ra=class{constructor(e={}){let{canvas:t=XM(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),v=null,m=null,E=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this.toneMapping=cr,this.toneMappingExposure=1;let M=this,L=!1,R=0,P=0,I=null,_=-1,w=null,U=new Vt,O=new Vt,F=null,V=new re(0),te=0,q=t.width,oe=t.height,Y=1,he=null,Te=null,ze=new Vt(0,0,q,oe),lt=new Vt(0,0,q,oe),Dt=!1,K=new Ml,de=!1,Ne=!1,ye=new vt,Ye=new vt,$e=new S,st=new Vt,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},St=!1;function $t(){return I===null?Y:1}let N=i;function kn(A,z){return t.getContext(A,z)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jf}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),N===null){let z="webgl2";if(N=kn(z,A),N===null)throw kn(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Mt,Et,Qe,qt,Ze,D,T,B,ee,se,J,Oe,be,Re,yt,ae,De,et,it,Ue,At,rt,Ut,H;function Ee(){Mt=new nw(N),Mt.init(),rt=new US(N,Mt),Et=new Kb(N,Mt,e,rt),Qe=new IS(N,Mt),Et.reverseDepthBuffer&&f&&Qe.buffers.depth.setReversed(!0),qt=new rw(N),Ze=new xS,D=new DS(N,Mt,Qe,Ze,Et,rt,qt),T=new Qb(M),B=new tw(M),ee=new u2(N),Ut=new jb(N,ee),se=new iw(N,ee,qt,Ut),J=new aw(N,se,ee,qt),it=new ow(N,Et,D),ae=new Jb(Ze),Oe=new vS(M,T,B,Mt,Et,Ut,ae),be=new OS(M,Ze),Re=new MS,yt=new TS(Mt),et=new Yb(M,T,B,Qe,J,p,l),De=new CS(M,J,Et),H=new FS(N,qt,Et,Qe),Ue=new Zb(N,Mt,qt),At=new sw(N,Mt,qt),qt.programs=Oe.programs,M.capabilities=Et,M.extensions=Mt,M.properties=Ze,M.renderLists=Re,M.shadowMap=De,M.state=Qe,M.info=qt}Ee();let j=new Pf(M,N);this.xr=j,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let A=Mt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Mt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(q,oe,!1))},this.getSize=function(A){return A.set(q,oe)},this.setSize=function(A,z,G=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=A,oe=z,t.width=Math.floor(A*Y),t.height=Math.floor(z*Y),G===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(q*Y,oe*Y).floor()},this.setDrawingBufferSize=function(A,z,G){q=A,oe=z,Y=G,t.width=Math.floor(A*G),t.height=Math.floor(z*G),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(ze)},this.setViewport=function(A,z,G,W){A.isVector4?ze.set(A.x,A.y,A.z,A.w):ze.set(A,z,G,W),Qe.viewport(U.copy(ze).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(lt)},this.setScissor=function(A,z,G,W){A.isVector4?lt.set(A.x,A.y,A.z,A.w):lt.set(A,z,G,W),Qe.scissor(O.copy(lt).multiplyScalar(Y).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(A){Qe.setScissorTest(Dt=A)},this.setOpaqueSort=function(A){he=A},this.setTransparentSort=function(A){Te=A},this.getClearColor=function(A){return A.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(A=!0,z=!0,G=!0){let W=0;if(A){let k=!1;if(I!==null){let me=I.texture.format;k=me===dp||me===hp||me===cp}if(k){let me=I.texture.type,Pe=me===ei||me===Jr||me===yl||me===dr||me===op||me===ap,Ve=et.getClearColor(),We=et.getClearAlpha(),ct=Ve.r,mt=Ve.g,Xe=Ve.b;Pe?(g[0]=ct,g[1]=mt,g[2]=Xe,g[3]=We,N.clearBufferuiv(N.COLOR,0,g)):(x[0]=ct,x[1]=mt,x[2]=Xe,x[3]=We,N.clearBufferiv(N.COLOR,0,x))}else W|=N.COLOR_BUFFER_BIT}z&&(W|=N.DEPTH_BUFFER_BIT),G&&(W|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),Re.dispose(),yt.dispose(),Ze.dispose(),T.dispose(),B.dispose(),J.dispose(),Ut.dispose(),H.dispose(),Oe.dispose(),j.dispose(),j.removeEventListener("sessionstart",Mm),j.removeEventListener("sessionend",Em),Fr.stop()};function ne(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let A=qt.autoReset,z=De.enabled,G=De.autoUpdate,W=De.needsUpdate,k=De.type;Ee(),qt.autoReset=A,De.enabled=z,De.autoUpdate=G,De.needsUpdate=W,De.type=k}function Ce(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function pt(A){let z=A.target;z.removeEventListener("dispose",pt),dn(z)}function dn(A){On(A),Ze.remove(A)}function On(A){let z=Ze.get(A).programs;z!==void 0&&(z.forEach(function(G){Oe.releaseProgram(G)}),A.isShaderMaterial&&Oe.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,G,W,k,me){z===null&&(z=Kt);let Pe=k.isMesh&&k.matrixWorld.determinant()<0,Ve=Ky(A,z,G,W,k);Qe.setMaterial(W,Pe);let We=G.index,ct=1;if(W.wireframe===!0){if(We=se.getWireframeAttribute(G),We===void 0)return;ct=2}let mt=G.drawRange,Xe=G.attributes.position,Ht=mt.start*ct,Jt=(mt.start+mt.count)*ct;me!==null&&(Ht=Math.max(Ht,me.start*ct),Jt=Math.min(Jt,(me.start+me.count)*ct)),We!==null?(Ht=Math.max(Ht,0),Jt=Math.min(Jt,We.count)):Xe!=null&&(Ht=Math.max(Ht,0),Jt=Math.min(Jt,Xe.count));let en=Jt-Ht;if(en<0||en===1/0)return;Ut.setup(k,W,Ve,G,We);let $n,Ft=Ue;if(We!==null&&($n=ee.get(We),Ft=At,Ft.setIndex($n)),k.isMesh)W.wireframe===!0?(Qe.setLineWidth(W.wireframeLinewidth*$t()),Ft.setMode(N.LINES)):Ft.setMode(N.TRIANGLES);else if(k.isLine){let je=W.linewidth;je===void 0&&(je=1),Qe.setLineWidth(je*$t()),k.isLineSegments?Ft.setMode(N.LINES):k.isLineLoop?Ft.setMode(N.LINE_LOOP):Ft.setMode(N.LINE_STRIP)}else k.isPoints?Ft.setMode(N.POINTS):k.isSprite&&Ft.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Ft.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))Ft.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let je=k._multiDrawStarts,Rs=k._multiDrawCounts,Bt=k._multiDrawCount,Gi=We?ee.get(We).bytesPerElement:1,Ao=Ze.get(W).currentProgram.getUniforms();for(let si=0;si<Bt;si++)Ao.setValue(N,"_gl_DrawID",si),Ft.render(je[si]/Gi,Rs[si])}else if(k.isInstancedMesh)Ft.renderInstances(Ht,en,k.count);else if(G.isInstancedBufferGeometry){let je=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Rs=Math.min(G.instanceCount,je);Ft.renderInstances(Ht,en,Rs)}else Ft.render(Ht,en)};function Yt(A,z,G){A.transparent===!0&&A.side===bt&&A.forceSinglePass===!1?(A.side=Dn,A.needsUpdate=!0,wc(A,z,G),A.side=hr,A.needsUpdate=!0,wc(A,z,G),A.side=bt):wc(A,z,G)}this.compile=function(A,z,G=null){G===null&&(G=A),m=yt.get(G),m.init(z),b.push(m),G.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),A!==G&&A.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();let W=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let me=k.material;if(me)if(Array.isArray(me))for(let Pe=0;Pe<me.length;Pe++){let Ve=me[Pe];Yt(Ve,G,k),W.add(Ve)}else Yt(me,G,k),W.add(me)}),b.pop(),m=null,W},this.compileAsync=function(A,z,G=null){let W=this.compile(A,z,G);return new Promise(k=>{function me(){if(W.forEach(function(Pe){Ze.get(Pe).currentProgram.isReady()&&W.delete(Pe)}),W.size===0){k(A);return}setTimeout(me,10)}Mt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Bi=null;function As(A){Bi&&Bi(A)}function Mm(){Fr.stop()}function Em(){Fr.start()}let Fr=new tv;Fr.setAnimationLoop(As),typeof self<"u"&&Fr.setContext(self),this.setAnimationLoop=function(A){Bi=A,j.setAnimationLoop(A),A===null?Fr.stop():Fr.start()},j.addEventListener("sessionstart",Mm),j.addEventListener("sessionend",Em),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(z),z=j.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,z,I),m=yt.get(A,b.length),m.init(z),b.push(m),Ye.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),K.setFromProjectionMatrix(Ye),Ne=this.localClippingEnabled,de=ae.init(this.clippingPlanes,Ne),v=Re.get(A,E.length),v.init(),E.push(v),j.enabled===!0&&j.isPresenting===!0){let me=M.xr.getDepthSensingMesh();me!==null&&Yd(me,z,-1/0,M.sortObjects)}Yd(A,z,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(he,Te),St=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,St&&et.addToRenderList(v,A),this.info.render.frame++,de===!0&&ae.beginShadows();let G=m.state.shadowsArray;De.render(G,A,z),de===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=v.opaque,k=v.transmissive;if(m.setupLights(),z.isArrayCamera){let me=z.cameras;if(k.length>0)for(let Pe=0,Ve=me.length;Pe<Ve;Pe++){let We=me[Pe];wm(W,k,A,We)}St&&et.render(A);for(let Pe=0,Ve=me.length;Pe<Ve;Pe++){let We=me[Pe];bm(v,A,We,We.viewport)}}else k.length>0&&wm(W,k,A,z),St&&et.render(A),bm(v,A,z);I!==null&&(D.updateMultisampleRenderTarget(I),D.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(M,A,z),Ut.resetDefaultState(),_=-1,w=null,b.pop(),b.length>0?(m=b[b.length-1],de===!0&&ae.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,E.pop(),E.length>0?v=E[E.length-1]:v=null};function Yd(A,z,G,W){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||K.intersectsSprite(A)){W&&st.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ye);let Pe=J.update(A),Ve=A.material;Ve.visible&&v.push(A,Pe,Ve,G,st.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||K.intersectsObject(A))){let Pe=J.update(A),Ve=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),st.copy(A.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),st.copy(Pe.boundingSphere.center)),st.applyMatrix4(A.matrixWorld).applyMatrix4(Ye)),Array.isArray(Ve)){let We=Pe.groups;for(let ct=0,mt=We.length;ct<mt;ct++){let Xe=We[ct],Ht=Ve[Xe.materialIndex];Ht&&Ht.visible&&v.push(A,Pe,Ht,G,st.z,Xe)}}else Ve.visible&&v.push(A,Pe,Ve,G,st.z,null)}}let me=A.children;for(let Pe=0,Ve=me.length;Pe<Ve;Pe++)Yd(me[Pe],z,G,W)}function bm(A,z,G,W){let k=A.opaque,me=A.transmissive,Pe=A.transparent;m.setupLightsView(G),de===!0&&ae.setGlobalState(M.clippingPlanes,G),W&&Qe.viewport(U.copy(W)),k.length>0&&bc(k,z,G),me.length>0&&bc(me,z,G),Pe.length>0&&bc(Pe,z,G),Qe.buffers.depth.setTest(!0),Qe.buffers.depth.setMask(!0),Qe.buffers.color.setMask(!0),Qe.setPolygonOffset(!1)}function wm(A,z,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new ln(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float")?wn:ei,minFilter:Kr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));let me=m.state.transmissionRenderTarget[W.id],Pe=W.viewport||U;me.setSize(Pe.z,Pe.w);let Ve=M.getRenderTarget();M.setRenderTarget(me),M.getClearColor(V),te=M.getClearAlpha(),te<1&&M.setClearColor(16777215,.5),M.clear(),St&&et.render(G);let We=M.toneMapping;M.toneMapping=cr;let ct=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),de===!0&&ae.setGlobalState(M.clippingPlanes,W),bc(A,G,W),D.updateMultisampleRenderTarget(me),D.updateRenderTargetMipmap(me),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let mt=!1;for(let Xe=0,Ht=z.length;Xe<Ht;Xe++){let Jt=z[Xe],en=Jt.object,$n=Jt.geometry,Ft=Jt.material,je=Jt.group;if(Ft.side===bt&&en.layers.test(W.layers)){let Rs=Ft.side;Ft.side=Dn,Ft.needsUpdate=!0,Sm(en,G,W,$n,Ft,je),Ft.side=Rs,Ft.needsUpdate=!0,mt=!0}}mt===!0&&(D.updateMultisampleRenderTarget(me),D.updateRenderTargetMipmap(me))}M.setRenderTarget(Ve),M.setClearColor(V,te),ct!==void 0&&(W.viewport=ct),M.toneMapping=We}function bc(A,z,G){let W=z.isScene===!0?z.overrideMaterial:null;for(let k=0,me=A.length;k<me;k++){let Pe=A[k],Ve=Pe.object,We=Pe.geometry,ct=W===null?Pe.material:W,mt=Pe.group;Ve.layers.test(G.layers)&&Sm(Ve,z,G,We,ct,mt)}}function Sm(A,z,G,W,k,me){A.onBeforeRender(M,z,G,W,k,me),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(M,z,G,W,A,me),k.transparent===!0&&k.side===bt&&k.forceSinglePass===!1?(k.side=Dn,k.needsUpdate=!0,M.renderBufferDirect(G,z,W,k,A,me),k.side=hr,k.needsUpdate=!0,M.renderBufferDirect(G,z,W,k,A,me),k.side=bt):M.renderBufferDirect(G,z,W,k,A,me),A.onAfterRender(M,z,G,W,k,me)}function wc(A,z,G){z.isScene!==!0&&(z=Kt);let W=Ze.get(A),k=m.state.lights,me=m.state.shadowsArray,Pe=k.state.version,Ve=Oe.getParameters(A,k.state,me,z,G),We=Oe.getProgramCacheKey(Ve),ct=W.programs;W.environment=A.isMeshStandardMaterial?z.environment:null,W.fog=z.fog,W.envMap=(A.isMeshStandardMaterial?B:T).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,ct===void 0&&(A.addEventListener("dispose",pt),ct=new Map,W.programs=ct);let mt=ct.get(We);if(mt!==void 0){if(W.currentProgram===mt&&W.lightsStateVersion===Pe)return Tm(A,Ve),mt}else Ve.uniforms=Oe.getUniforms(A),A.onBeforeCompile(Ve,M),mt=Oe.acquireProgram(Ve,We),ct.set(We,mt),W.uniforms=Ve.uniforms;let Xe=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=ae.uniform),Tm(A,Ve),W.needsLights=Qy(A),W.lightsStateVersion=Pe,W.needsLights&&(Xe.ambientLightColor.value=k.state.ambient,Xe.lightProbe.value=k.state.probe,Xe.directionalLights.value=k.state.directional,Xe.directionalLightShadows.value=k.state.directionalShadow,Xe.spotLights.value=k.state.spot,Xe.spotLightShadows.value=k.state.spotShadow,Xe.rectAreaLights.value=k.state.rectArea,Xe.ltc_1.value=k.state.rectAreaLTC1,Xe.ltc_2.value=k.state.rectAreaLTC2,Xe.pointLights.value=k.state.point,Xe.pointLightShadows.value=k.state.pointShadow,Xe.hemisphereLights.value=k.state.hemi,Xe.directionalShadowMap.value=k.state.directionalShadowMap,Xe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Xe.spotShadowMap.value=k.state.spotShadowMap,Xe.spotLightMatrix.value=k.state.spotLightMatrix,Xe.spotLightMap.value=k.state.spotLightMap,Xe.pointShadowMap.value=k.state.pointShadowMap,Xe.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=mt,W.uniformsList=null,mt}function _m(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=Ko.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Tm(A,z){let G=Ze.get(A);G.outputColorSpace=z.outputColorSpace,G.batching=z.batching,G.batchingColor=z.batchingColor,G.instancing=z.instancing,G.instancingColor=z.instancingColor,G.instancingMorph=z.instancingMorph,G.skinning=z.skinning,G.morphTargets=z.morphTargets,G.morphNormals=z.morphNormals,G.morphColors=z.morphColors,G.morphTargetsCount=z.morphTargetsCount,G.numClippingPlanes=z.numClippingPlanes,G.numIntersection=z.numClipIntersection,G.vertexAlphas=z.vertexAlphas,G.vertexTangents=z.vertexTangents,G.toneMapping=z.toneMapping}function Ky(A,z,G,W,k){z.isScene!==!0&&(z=Kt),D.resetTextureUnits();let me=z.fog,Pe=W.isMeshStandardMaterial?z.environment:null,Ve=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ha,We=(W.isMeshStandardMaterial?B:T).get(W.envMap||Pe),ct=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,mt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Xe=!!G.morphAttributes.position,Ht=!!G.morphAttributes.normal,Jt=!!G.morphAttributes.color,en=cr;W.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(en=M.toneMapping);let $n=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ft=$n!==void 0?$n.length:0,je=Ze.get(W),Rs=m.state.lights;if(de===!0&&(Ne===!0||A!==w)){let yi=A===w&&W.id===_;ae.setState(W,A,yi)}let Bt=!1;W.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Rs.state.version||je.outputColorSpace!==Ve||k.isBatchedMesh&&je.batching===!1||!k.isBatchedMesh&&je.batching===!0||k.isBatchedMesh&&je.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&je.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&je.instancing===!1||!k.isInstancedMesh&&je.instancing===!0||k.isSkinnedMesh&&je.skinning===!1||!k.isSkinnedMesh&&je.skinning===!0||k.isInstancedMesh&&je.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&je.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&je.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&je.instancingMorph===!1&&k.morphTexture!==null||je.envMap!==We||W.fog===!0&&je.fog!==me||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ae.numPlanes||je.numIntersection!==ae.numIntersection)||je.vertexAlphas!==ct||je.vertexTangents!==mt||je.morphTargets!==Xe||je.morphNormals!==Ht||je.morphColors!==Jt||je.toneMapping!==en||je.morphTargetsCount!==Ft)&&(Bt=!0):(Bt=!0,je.__version=W.version);let Gi=je.currentProgram;Bt===!0&&(Gi=wc(W,z,k));let Ao=!1,si=!1,el=!1,tn=Gi.getUniforms(),is=je.uniforms;if(Qe.useProgram(Gi.program)&&(Ao=!0,si=!0,el=!0),W.id!==_&&(_=W.id,si=!0),Ao||w!==A){Qe.buffers.depth.getReversed()?(ye.copy(A.projectionMatrix),YM(ye),jM(ye),tn.setValue(N,"projectionMatrix",ye)):tn.setValue(N,"projectionMatrix",A.projectionMatrix),tn.setValue(N,"viewMatrix",A.matrixWorldInverse);let $s=tn.map.cameraPosition;$s!==void 0&&$s.setValue(N,$e.setFromMatrixPosition(A.matrixWorld)),Et.logarithmicDepthBuffer&&tn.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&tn.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,si=!0,el=!0)}if(k.isSkinnedMesh){tn.setOptional(N,k,"bindMatrix"),tn.setOptional(N,k,"bindMatrixInverse");let yi=k.skeleton;yi&&(yi.boneTexture===null&&yi.computeBoneTexture(),tn.setValue(N,"boneTexture",yi.boneTexture,D))}k.isBatchedMesh&&(tn.setOptional(N,k,"batchingTexture"),tn.setValue(N,"batchingTexture",k._matricesTexture,D),tn.setOptional(N,k,"batchingIdTexture"),tn.setValue(N,"batchingIdTexture",k._indirectTexture,D),tn.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&tn.setValue(N,"batchingColorTexture",k._colorsTexture,D));let tl=G.morphAttributes;if((tl.position!==void 0||tl.normal!==void 0||tl.color!==void 0)&&it.update(k,G,Gi),(si||je.receiveShadow!==k.receiveShadow)&&(je.receiveShadow=k.receiveShadow,tn.setValue(N,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(is.envMap.value=We,is.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&z.environment!==null&&(is.envMapIntensity.value=z.environmentIntensity),si&&(tn.setValue(N,"toneMappingExposure",M.toneMappingExposure),je.needsLights&&Jy(is,el),me&&W.fog===!0&&be.refreshFogUniforms(is,me),be.refreshMaterialUniforms(is,W,Y,oe,m.state.transmissionRenderTarget[A.id]),Ko.upload(N,_m(je),is,D)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ko.upload(N,_m(je),is,D),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&tn.setValue(N,"center",k.center),tn.setValue(N,"modelViewMatrix",k.modelViewMatrix),tn.setValue(N,"normalMatrix",k.normalMatrix),tn.setValue(N,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let yi=W.uniformsGroups;for(let $s=0,er=yi.length;$s<er;$s++){let Am=yi[$s];H.update(Am,Gi),H.bind(Am,Gi)}}return Gi}function Jy(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Qy(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,z,G){Ze.get(A.texture).__webglTexture=z,Ze.get(A.depthTexture).__webglTexture=G;let W=Ze.get(A);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,z){let G=Ze.get(A);G.__webglFramebuffer=z,G.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,G=0){I=A,R=z,P=G;let W=!0,k=null,me=!1,Pe=!1;if(A){let We=Ze.get(A);if(We.__useDefaultFramebuffer!==void 0)Qe.bindFramebuffer(N.FRAMEBUFFER,null),W=!1;else if(We.__webglFramebuffer===void 0)D.setupRenderTarget(A);else if(We.__hasExternalTextures)D.rebindTextures(A,Ze.get(A.texture).__webglTexture,Ze.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Xe=A.depthTexture;if(We.__boundDepthTexture!==Xe){if(Xe!==null&&Ze.has(Xe)&&(A.width!==Xe.image.width||A.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(A)}}let ct=A.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(Pe=!0);let mt=Ze.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(mt[z])?k=mt[z][G]:k=mt[z],me=!0):A.samples>0&&D.useMultisampledRTT(A)===!1?k=Ze.get(A).__webglMultisampledFramebuffer:Array.isArray(mt)?k=mt[G]:k=mt,U.copy(A.viewport),O.copy(A.scissor),F=A.scissorTest}else U.copy(ze).multiplyScalar(Y).floor(),O.copy(lt).multiplyScalar(Y).floor(),F=Dt;if(Qe.bindFramebuffer(N.FRAMEBUFFER,k)&&W&&Qe.drawBuffers(A,k),Qe.viewport(U),Qe.scissor(O),Qe.setScissorTest(F),me){let We=Ze.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+z,We.__webglTexture,G)}else if(Pe){let We=Ze.get(A.texture),ct=z||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,We.__webglTexture,G||0,ct)}_=-1},this.readRenderTargetPixels=function(A,z,G,W,k,me,Pe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Ze.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ve=Ve[Pe]),Ve){Qe.bindFramebuffer(N.FRAMEBUFFER,Ve);try{let We=A.texture,ct=We.format,mt=We.type;if(!Et.textureFormatReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(mt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-W&&G>=0&&G<=A.height-k&&N.readPixels(z,G,W,k,rt.convert(ct),rt.convert(mt),me)}finally{let We=I!==null?Ze.get(I).__webglFramebuffer:null;Qe.bindFramebuffer(N.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(A,z,G,W,k,me,Pe){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Ze.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ve=Ve[Pe]),Ve){let We=A.texture,ct=We.format,mt=We.type;if(!Et.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=A.width-W&&G>=0&&G<=A.height-k){Qe.bindFramebuffer(N.FRAMEBUFFER,Ve);let Xe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Xe),N.bufferData(N.PIXEL_PACK_BUFFER,me.byteLength,N.STREAM_READ),N.readPixels(z,G,W,k,rt.convert(ct),rt.convert(mt),0);let Ht=I!==null?Ze.get(I).__webglFramebuffer:null;Qe.bindFramebuffer(N.FRAMEBUFFER,Ht);let Jt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await qM(N,Jt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Xe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,me),N.deleteBuffer(Xe),N.deleteSync(Jt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,z=null,G=0){A.isTexture!==!0&&(ul("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,A=arguments[1]);let W=Math.pow(2,-G),k=Math.floor(A.image.width*W),me=Math.floor(A.image.height*W),Pe=z!==null?z.x:0,Ve=z!==null?z.y:0;D.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,Pe,Ve,k,me),Qe.unbindTexture()},this.copyTextureToTexture=function(A,z,G=null,W=null,k=0){A.isTexture!==!0&&(ul("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1],z=arguments[2],k=arguments[3]||0,G=null);let me,Pe,Ve,We,ct,mt,Xe,Ht,Jt,en=A.isCompressedTexture?A.mipmaps[k]:A.image;G!==null?(me=G.max.x-G.min.x,Pe=G.max.y-G.min.y,Ve=G.isBox3?G.max.z-G.min.z:1,We=G.min.x,ct=G.min.y,mt=G.isBox3?G.min.z:0):(me=en.width,Pe=en.height,Ve=en.depth||1,We=0,ct=0,mt=0),W!==null?(Xe=W.x,Ht=W.y,Jt=W.z):(Xe=0,Ht=0,Jt=0);let $n=rt.convert(z.format),Ft=rt.convert(z.type),je;z.isData3DTexture?(D.setTexture3D(z,0),je=N.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(D.setTexture2DArray(z,0),je=N.TEXTURE_2D_ARRAY):(D.setTexture2D(z,0),je=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);let Rs=N.getParameter(N.UNPACK_ROW_LENGTH),Bt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Gi=N.getParameter(N.UNPACK_SKIP_PIXELS),Ao=N.getParameter(N.UNPACK_SKIP_ROWS),si=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,en.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,en.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,We),N.pixelStorei(N.UNPACK_SKIP_ROWS,ct),N.pixelStorei(N.UNPACK_SKIP_IMAGES,mt);let el=A.isDataArrayTexture||A.isData3DTexture,tn=z.isDataArrayTexture||z.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let is=Ze.get(A),tl=Ze.get(z),yi=Ze.get(is.__renderTarget),$s=Ze.get(tl.__renderTarget);Qe.bindFramebuffer(N.READ_FRAMEBUFFER,yi.__webglFramebuffer),Qe.bindFramebuffer(N.DRAW_FRAMEBUFFER,$s.__webglFramebuffer);for(let er=0;er<Ve;er++)el&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ze.get(A).__webglTexture,k,mt+er),A.isDepthTexture?(tn&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ze.get(z).__webglTexture,k,Jt+er),N.blitFramebuffer(We,ct,me,Pe,Xe,Ht,me,Pe,N.DEPTH_BUFFER_BIT,N.NEAREST)):tn?N.copyTexSubImage3D(je,k,Xe,Ht,Jt+er,We,ct,me,Pe):N.copyTexSubImage2D(je,k,Xe,Ht,Jt+er,We,ct,me,Pe);Qe.bindFramebuffer(N.READ_FRAMEBUFFER,null),Qe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else tn?A.isDataTexture||A.isData3DTexture?N.texSubImage3D(je,k,Xe,Ht,Jt,me,Pe,Ve,$n,Ft,en.data):z.isCompressedArrayTexture?N.compressedTexSubImage3D(je,k,Xe,Ht,Jt,me,Pe,Ve,$n,en.data):N.texSubImage3D(je,k,Xe,Ht,Jt,me,Pe,Ve,$n,Ft,en):A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,k,Xe,Ht,me,Pe,$n,Ft,en.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,k,Xe,Ht,en.width,en.height,$n,en.data):N.texSubImage2D(N.TEXTURE_2D,k,Xe,Ht,me,Pe,$n,Ft,en);N.pixelStorei(N.UNPACK_ROW_LENGTH,Rs),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Bt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Gi),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ao),N.pixelStorei(N.UNPACK_SKIP_IMAGES,si),k===0&&z.generateMipmaps&&N.generateMipmap(je),Qe.unbindTexture()},this.copyTextureToTexture3D=function(A,z,G=null,W=null,k=0){return A.isTexture!==!0&&(ul("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,A=arguments[2],z=arguments[3],k=arguments[4]||0),ul('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,z,G,W,k)},this.initRenderTarget=function(A){Ze.get(A).__webglFramebuffer===void 0&&D.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?D.setTextureCube(A,0):A.isData3DTexture?D.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?D.setTexture2DArray(A,0):D.setTexture2D(A,0),Qe.unbindTexture()},this.resetState=function(){R=0,P=0,I=null,Qe.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ns}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}},mh=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new re(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var as=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},El=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pf,this.updateRanges=[],this.version=0,this.uuid=zs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Zn=new S,Qr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Zn.fromBufferAttribute(this,t),Zn.applyMatrix4(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zn.fromBufferAttribute(this,t),Zn.applyNormalMatrix(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zn.fromBufferAttribute(this,t),Zn.transformDirection(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=qi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=jt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new an(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ci=class extends os{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Go,ol=new S,Vo=new S,Wo=new S,Xo=new $,al=new $,ov=new vt,Xc=new S,ll=new S,qc=new S,Ag=new $,bu=new $,Rg=new $,wi=class extends gn{constructor(e=new ci){if(super(),this.isSprite=!0,this.type="Sprite",Go===void 0){Go=new Rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new El(t,5);Go.setIndex([0,1,2,0,2,3]),Go.setAttribute("position",new Qr(i,3,0,!1)),Go.setAttribute("uv",new Qr(i,2,3,!1))}this.geometry=Go,this.material=e,this.center=new $(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vo.setFromMatrixScale(this.matrixWorld),ov.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Wo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vo.multiplyScalar(-Wo.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Yc(Xc.set(-.5,-.5,0),Wo,o,Vo,s,r),Yc(ll.set(.5,-.5,0),Wo,o,Vo,s,r),Yc(qc.set(.5,.5,0),Wo,o,Vo,s,r),Ag.set(0,0),bu.set(1,0),Rg.set(1,1);let a=e.ray.intersectTriangle(Xc,ll,qc,!1,ol);if(a===null&&(Yc(ll.set(-.5,.5,0),Wo,o,Vo,s,r),bu.set(0,1),a=e.ray.intersectTriangle(Xc,qc,ll,!1,ol),a===null))return;let l=e.ray.origin.distanceTo(ol);l<e.near||l>e.far||t.push({distance:l,point:ol.clone(),uv:lr.getInterpolation(ol,Xc,ll,qc,Ag,bu,Rg,new $),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Yc(n,e,t,i,s,r){Xo.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(al.x=r*Xo.x-s*Xo.y,al.y=s*Xo.x+r*Xo.y):al.copy(Xo),n.copy(e),n.x+=al.x,n.y+=al.y,n.applyMatrix4(ov)}var $r=class extends Rn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=pn,d=pn,u,f){super(null,o,a,l,c,d,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gh=class extends an{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},qo=new vt,Cg=new vt,jc=[],Pg=new Yi,BS=new vt,cl=new Q,hl=new pr,mr=class extends Q{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,BS)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qo),Pg.copy(e.boundingBox).applyMatrix4(qo),this.boundingBox.union(Pg)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qo),hl.copy(e.boundingSphere).applyMatrix4(qo),this.boundingSphere.union(hl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(cl.geometry=this.geometry,cl.material=this.material,cl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hl.copy(this.boundingSphere),hl.applyMatrix4(i),e.ray.intersectsSphere(hl)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qo),Cg.multiplyMatrices(i,qo),cl.matrixWorld=Cg,cl.raycast(e,jc);for(let o=0,a=jc.length;o<a;o++){let l=jc[o];l.instanceId=r,l.object=this,t.push(l)}jc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new gh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new $r(new Float32Array(s*this.count),s,this.count,lp,rs));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var hi=class extends os{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ig=new vt,If=new ch,Zc=new pr,Kc=new S,Si=class extends gn{constructor(e=new Rt,t=new hi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zc.copy(i.boundingSphere),Zc.applyMatrix4(s),Zc.radius+=r,e.ray.intersectsSphere(Zc)===!1)return;Ig.copy(s).invert(),If.copy(e.ray).applyMatrix4(Ig);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,x=p;g<x;g++){let v=c.getX(g);Kc.fromBufferAttribute(u,v),Lg(Kc,v,l,s,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,x=p;g<x;g++)Kc.fromBufferAttribute(u,g),Lg(Kc,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Lg(n,e,t,i,s,r,o){let a=If.distanceSqToPoint(n);if(a<t){let l=new S;If.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var bl=class extends Rn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=pn,this.minFilter=pn,this.generateMipmaps=!1,this.needsUpdate=!0}};var Zt=class extends Rn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},_i=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let d=i[s],f=i[s+1]-d,p=(o-d)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new $:new S);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new S,s=[],r=[],o=[],a=new S,l=new vt;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new S)}r[0]=new S,o[0]=new S;let c=Number.MAX_VALUE,d=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);d<=c&&(c=d,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(An(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(An(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},wl=class extends _i{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new $){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*d-p*u+this.aX,c=f*u+p*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Lf=class extends wl{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function gp(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,d,u){let f=(o-r)/c-(a-r)/(c+d)+(a-o)/d,p=(a-o)/d-(l-o)/(d+u)+(l-a)/u;f*=d,p*=d,s(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Jc=new S,wu=new gp,Su=new gp,_u=new gp,Sl=class extends _i{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new S){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,d;this.closed||a>0?c=s[(a-1)%r]:(Jc.subVectors(s[0],s[1]).add(s[0]),c=Jc);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?d=s[(a+2)%r]:(Jc.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Jc),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(d),p);x<1e-4&&(x=1),g<1e-4&&(g=x),v<1e-4&&(v=x),wu.initNonuniformCatmullRom(c.x,u.x,f.x,d.x,g,x,v),Su.initNonuniformCatmullRom(c.y,u.y,f.y,d.y,g,x,v),_u.initNonuniformCatmullRom(c.z,u.z,f.z,d.z,g,x,v)}else this.curveType==="catmullrom"&&(wu.initCatmullRom(c.x,u.x,f.x,d.x,this.tension),Su.initCatmullRom(c.y,u.y,f.y,d.y,this.tension),_u.initCatmullRom(c.z,u.z,f.z,d.z,this.tension));return i.set(wu.calc(l),Su.calc(l),_u.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new S().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Dg(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function GS(n,e){let t=1-n;return t*t*e}function VS(n,e){return 2*(1-n)*n*e}function WS(n,e){return n*n*e}function vl(n,e,t,i){return GS(n,e)+VS(n,t)+WS(n,i)}function XS(n,e){let t=1-n;return t*t*t*e}function qS(n,e){let t=1-n;return 3*t*t*n*e}function YS(n,e){return 3*(1-n)*n*n*e}function jS(n,e){return n*n*n*e}function xl(n,e,t,i,s){return XS(n,e)+qS(n,t)+YS(n,i)+jS(n,s)}var vh=class extends _i{constructor(e=new $,t=new $,i=new $,s=new $){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new $){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(xl(e,s.x,r.x,o.x,a.x),xl(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Df=class extends _i{constructor(e=new S,t=new S,i=new S,s=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new S){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(xl(e,s.x,r.x,o.x,a.x),xl(e,s.y,r.y,o.y,a.y),xl(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xh=class extends _i{constructor(e=new $,t=new $){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new $){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uf=class extends _i{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yh=class extends _i{constructor(e=new $,t=new $,i=new $){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new $){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(vl(e,s.x,r.x,o.x),vl(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mh=class extends _i{constructor(e=new S,t=new S,i=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new S){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(vl(e,s.x,r.x,o.x),vl(e,s.y,r.y,o.y),vl(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Eh=class extends _i{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new $){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],d=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Dg(a,l.x,c.x,d.x,u.x),Dg(a,l.y,c.y,d.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new $().fromArray(s))}return this}},Hf=Object.freeze({__proto__:null,ArcCurve:Lf,CatmullRomCurve3:Sl,CubicBezierCurve:vh,CubicBezierCurve3:Df,EllipseCurve:wl,LineCurve:xh,LineCurve3:Uf,QuadraticBezierCurve:yh,QuadraticBezierCurve3:Mh,SplineCurve:Eh}),Nf=class extends _i{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hf[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let d=l[c];i&&i.equals(d)||(t.push(d),i=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Hf[s.type]().fromJSON(s))}return this}},zf=class extends Nf{constructor(e){super(),this.type="Path",this.currentPoint=new $,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new xh(this.currentPoint.clone(),new $(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new yh(this.currentPoint.clone(),new $(e,t),new $(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new vh(this.currentPoint.clone(),new $(e,t),new $(i,s),new $(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Eh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new wl(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ji=class n extends Rt{constructor(e=[new $(0,-.5),new $(.5,0),new $(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=An(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],d=1/t,u=new S,f=new $,p=new S,g=new S,x=new S,v=0,m=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:v=e[E+1].x-e[E].x,m=e[E+1].y-e[E].y,p.x=m*1,p.y=-v,p.z=m*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:v=e[E+1].x-e[E].x,m=e[E+1].y-e[E].y,p.x=m*1,p.y=-v,p.z=m*0,g.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(g)}for(let E=0;E<=t;E++){let b=i+E*d*s,M=Math.sin(b),L=Math.cos(b);for(let R=0;R<=e.length-1;R++){u.x=e[R].x*M,u.y=e[R].y,u.z=e[R].x*L,o.push(u.x,u.y,u.z),f.x=E/t,f.y=R/(e.length-1),a.push(f.x,f.y);let P=l[3*R+0]*M,I=l[3*R+1],_=l[3*R+0]*L;c.push(P,I,_)}}for(let E=0;E<t;E++)for(let b=0;b<e.length-1;b++){let M=b+E*e.length,L=M,R=M+e.length,P=M+e.length+1,I=M+1;r.push(L,R,I),r.push(P,I,R)}this.setIndex(r),this.setAttribute("position",new nt(o,3)),this.setAttribute("uv",new nt(a,2)),this.setAttribute("normal",new nt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},bh=class n extends ji{constructor(e=1,t=1,i=4,s=8){let r=new zf;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},di=class n extends Rt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new S,d=new $;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let p=i+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[f]/e+1)/2,d.y=(o[f+1]/e+1)/2,l.push(d.x,d.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(a,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Fe=class n extends Rt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],u=[],f=[],p=[],g=0,x=[],v=i/2,m=0;E(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(d),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(p,2));function E(){let M=new S,L=new S,R=0,P=(t-e)/i;for(let I=0;I<=r;I++){let _=[],w=I/r,U=w*(t-e)+e;for(let O=0;O<=s;O++){let F=O/s,V=F*l+a,te=Math.sin(V),q=Math.cos(V);L.x=U*te,L.y=-w*i+v,L.z=U*q,u.push(L.x,L.y,L.z),M.set(te,P,q).normalize(),f.push(M.x,M.y,M.z),p.push(F,1-w),_.push(g++)}x.push(_)}for(let I=0;I<s;I++)for(let _=0;_<r;_++){let w=x[_][I],U=x[_+1][I],O=x[_+1][I+1],F=x[_][I+1];(e>0||_!==0)&&(d.push(w,U,F),R+=3),(t>0||_!==r-1)&&(d.push(U,O,F),R+=3)}c.addGroup(m,R,0),m+=R}function b(M){let L=g,R=new $,P=new S,I=0,_=M===!0?e:t,w=M===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,v*w,0),f.push(0,w,0),p.push(.5,.5),g++;let U=g;for(let O=0;O<=s;O++){let V=O/s*l+a,te=Math.cos(V),q=Math.sin(V);P.x=_*q,P.y=v*w,P.z=_*te,u.push(P.x,P.y,P.z),f.push(0,w,0),R.x=te*.5+.5,R.y=q*.5*w+.5,p.push(R.x,R.y),g++}for(let O=0;O<s;O++){let F=L+O,V=U+O;M===!0?d.push(V,V+1,F):d.push(V+1,V,F),I+=3}c.addGroup(m,I,M===!0?1:2),m+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wt=class n extends Fe{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},_l=class n extends Rt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),d(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){let b=new S,M=new S,L=new S;for(let R=0;R<t.length;R+=3)p(t[R+0],b),p(t[R+1],M),p(t[R+2],L),l(b,M,L,E)}function l(E,b,M,L){let R=L+1,P=[];for(let I=0;I<=R;I++){P[I]=[];let _=E.clone().lerp(M,I/R),w=b.clone().lerp(M,I/R),U=R-I;for(let O=0;O<=U;O++)O===0&&I===R?P[I][O]=_:P[I][O]=_.clone().lerp(w,O/U)}for(let I=0;I<R;I++)for(let _=0;_<2*(R-I)-1;_++){let w=Math.floor(_/2);_%2===0?(f(P[I][w+1]),f(P[I+1][w]),f(P[I][w])):(f(P[I][w+1]),f(P[I+1][w+1]),f(P[I+1][w]))}}function c(E){let b=new S;for(let M=0;M<r.length;M+=3)b.x=r[M+0],b.y=r[M+1],b.z=r[M+2],b.normalize().multiplyScalar(E),r[M+0]=b.x,r[M+1]=b.y,r[M+2]=b.z}function d(){let E=new S;for(let b=0;b<r.length;b+=3){E.x=r[b+0],E.y=r[b+1],E.z=r[b+2];let M=v(E)/2/Math.PI+.5,L=m(E)/Math.PI+.5;o.push(M,1-L)}g(),u()}function u(){for(let E=0;E<o.length;E+=6){let b=o[E+0],M=o[E+2],L=o[E+4],R=Math.max(b,M,L),P=Math.min(b,M,L);R>.9&&P<.1&&(b<.2&&(o[E+0]+=1),M<.2&&(o[E+2]+=1),L<.2&&(o[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function p(E,b){let M=E*3;b.x=e[M+0],b.y=e[M+1],b.z=e[M+2]}function g(){let E=new S,b=new S,M=new S,L=new S,R=new $,P=new $,I=new $;for(let _=0,w=0;_<r.length;_+=9,w+=6){E.set(r[_+0],r[_+1],r[_+2]),b.set(r[_+3],r[_+4],r[_+5]),M.set(r[_+6],r[_+7],r[_+8]),R.set(o[w+0],o[w+1]),P.set(o[w+2],o[w+3]),I.set(o[w+4],o[w+5]),L.copy(E).add(b).add(M).divideScalar(3);let U=v(L);x(R,w+0,E,U),x(P,w+2,b,U),x(I,w+4,M,U)}}function x(E,b,M,L){L<0&&E.x===1&&(o[b]=E.x-1),M.x===0&&M.z===0&&(o[b]=L/2/Math.PI+.5)}function v(E){return Math.atan2(E.z,-E.x)}function m(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},Ti=class n extends _l{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Un=class n extends _l{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ai=class n extends _l{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},nn=class n extends Rt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],d=[],u=e,f=(t-e)/s,p=new S,g=new $;for(let x=0;x<=s;x++){for(let v=0;v<=i;v++){let m=r+v/i*o;p.x=u*Math.cos(m),p.y=u*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,d.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){let v=x*(i+1);for(let m=0;m<i;m++){let E=m+v,b=E,M=E+i+1,L=E+i+2,R=E+1;a.push(b,M,R),a.push(M,L,R)}}this.setIndex(a),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Be=class n extends Rt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,d=[],u=new S,f=new S,p=[],g=[],x=[],v=[];for(let m=0;m<=i;m++){let E=[],b=m/i,M=0;m===0&&o===0?M=.5/t:m===i&&l===Math.PI&&(M=-.5/t);for(let L=0;L<=t;L++){let R=L/t;u.x=-e*Math.cos(s+R*r)*Math.sin(o+b*a),u.y=e*Math.cos(o+b*a),u.z=e*Math.sin(s+R*r)*Math.sin(o+b*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),v.push(R+M,1-b),E.push(c++)}d.push(E)}for(let m=0;m<i;m++)for(let E=0;E<t;E++){let b=d[m][E+1],M=d[m][E],L=d[m+1][E],R=d[m+1][E+1];(m!==0||o>0)&&p.push(b,M,R),(m!==i-1||l<Math.PI)&&p.push(M,L,R)}this.setIndex(p),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(x,3)),this.setAttribute("uv",new nt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Le=class n extends Rt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],d=new S,u=new S,f=new S;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let x=g/s*r,v=p/i*Math.PI*2;u.x=(e+t*Math.cos(v))*Math.cos(x),u.y=(e+t*Math.cos(v))*Math.sin(x),u.z=t*Math.sin(v),a.push(u.x,u.y,u.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),f.subVectors(u,d).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let x=(s+1)*p+g-1,v=(s+1)*(p-1)+g-1,m=(s+1)*(p-1)+g,E=(s+1)*p+g;o.push(x,v,E),o.push(v,m,E)}this.setIndex(o),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var wh=class n extends Rt{constructor(e=new Mh(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new S,l=new S,c=new $,d=new S,u=[],f=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(p,2));function x(){for(let b=0;b<t;b++)v(b);v(r===!1?t:0),E(),m()}function v(b){d=e.getPointAt(b/t,d);let M=o.normals[b],L=o.binormals[b];for(let R=0;R<=s;R++){let P=R/s*Math.PI*2,I=Math.sin(P),_=-Math.cos(P);l.x=_*M.x+I*L.x,l.y=_*M.y+I*L.y,l.z=_*M.z+I*L.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=d.x+i*l.x,a.y=d.y+i*l.y,a.z=d.z+i*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let b=1;b<=t;b++)for(let M=1;M<=s;M++){let L=(s+1)*(b-1)+(M-1),R=(s+1)*b+(M-1),P=(s+1)*b+M,I=(s+1)*(b-1)+M;g.push(L,R,I),g.push(R,P,I)}}function E(){for(let b=0;b<=t;b++)for(let M=0;M<=s;M++)c.x=b/t,c.y=M/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Hf[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var gr=class extends ht{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},ve=class extends os{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=up,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Sh=class extends os{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=up,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function Qc(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ZS(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var oa=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},kf=class extends oa{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Im,endingEnd:Im}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Lm:r=e,a=2*t-i;break;case Dm:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Lm:o=e,l=2*i-t;break;case Dm:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),x=g*g,v=x*g,m=-f*v+2*f*x-f*g,E=(1+f)*v+(-1.5-2*f)*x+(-.5+f)*g+1,b=(-1-p)*v+(1.5+p)*x+.5*g,M=p*v-p*x;for(let L=0;L!==a;++L)r[L]=m*o[d+L]+E*o[c+L]+b*o[l+L]+M*o[u+L];return r}},Of=class extends oa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(i-t)/(s-t),u=1-d;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*d;return r}},Ff=class extends oa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Zi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qc(t,this.TimeBufferType),this.values=Qc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Qc(e.times,Array),values:Qc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ff(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Of(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case sh:t=this.InterpolantFactoryMethodDiscrete;break;case ff:t=this.InterpolantFactoryMethodLinear;break;case Zd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sh;case this.InterpolantFactoryMethodLinear:return ff;case this.InterpolantFactoryMethodSmooth:return Zd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&ZS(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Zd,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,f=u-i,p=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Zi.prototype.TimeBufferType=Float32Array;Zi.prototype.ValueBufferType=Float32Array;Zi.prototype.DefaultInterpolation=ff;var eo=class extends Zi{constructor(e,t,i){super(e,t,i)}};eo.prototype.ValueTypeName="bool";eo.prototype.ValueBufferType=Array;eo.prototype.DefaultInterpolation=sh;eo.prototype.InterpolantFactoryMethodLinear=void 0;eo.prototype.InterpolantFactoryMethodSmooth=void 0;var Bf=class extends Zi{};Bf.prototype.ValueTypeName="color";var Gf=class extends Zi{};Gf.prototype.ValueTypeName="number";var Vf=class extends oa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let d=c+a;c!==d;c+=4)mn.slerpFlat(r,0,o,c-a,o,c,l);return r}},_h=class extends Zi{InterpolantFactoryMethodLinear(e){return new Vf(this.times,this.values,this.getValueSize(),e)}};_h.prototype.ValueTypeName="quaternion";_h.prototype.InterpolantFactoryMethodSmooth=void 0;var to=class extends Zi{constructor(e,t,i){super(e,t,i)}};to.prototype.ValueTypeName="string";to.prototype.ValueBufferType=Array;to.prototype.DefaultInterpolation=sh;to.prototype.InterpolantFactoryMethodLinear=void 0;to.prototype.InterpolantFactoryMethodSmooth=void 0;var Wf=class extends Zi{};Wf.prototype.ValueTypeName="vector";var Xf=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){let u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(d))return g}return null}}},KS=new Xf,qf=class{constructor(e){this.manager=e!==void 0?e:KS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};qf.DEFAULT_MATERIAL_NAME="__DEFAULT";var no=class extends gn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},vr=class extends no{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Tu=new vt,Ug=new S,Hg=new S,Tl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ml,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Ug.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ug),Hg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hg),t.updateMatrixWorld(),Tu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Tu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Yf=class extends Tl{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=ea*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},aa=class extends no{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Yf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ng=new vt,dl=new S,Au=new S,jf=class extends Tl{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $(4,2),this._viewportCount=6,this._viewports=[new Vt(2,1,1,1),new Vt(0,1,1,1),new Vt(3,1,1,1),new Vt(1,1,1,1),new Vt(3,0,1,1),new Vt(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),dl.setFromMatrixPosition(e.matrixWorld),i.position.copy(dl),Au.copy(i.position),Au.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Au),i.updateMatrixWorld(),s.makeTranslation(-dl.x,-dl.y,-dl.z),Ng.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ng)}},Ri=class extends no{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new jf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Zf=class extends Tl{constructor(){super(new na(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ls=class extends no{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new Zf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Th=class extends no{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var la=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=zg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function zg(){return performance.now()}var vp="\\[\\]\\.:\\/",JS=new RegExp("["+vp+"]","g"),xp="[^"+vp+"]",QS="[^"+vp.replace("\\.","")+"]",$S=/((?:WC+[\/:])*)/.source.replace("WC",xp),e_=/(WCOD+)?/.source.replace("WCOD",QS),t_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xp),n_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xp),i_=new RegExp("^"+$S+e_+t_+n_+"$"),s_=["material","materials","bones","map"],Kf=class{constructor(e,t,i){let s=i||sn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},sn=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(JS,"")}static parseTrackName(e){let t=i_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);s_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};sn.Composite=Kf;sn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};sn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};sn.prototype.GetterByBindingType=[sn.prototype._getValue_direct,sn.prototype._getValue_array,sn.prototype._getValue_arrayElement,sn.prototype._getValue_toArray];sn.prototype.SetterByBindingTypeAndVersioning=[[sn.prototype._setValue_direct,sn.prototype._setValue_direct_setNeedsUpdate,sn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_array,sn.prototype._setValue_array_setNeedsUpdate,sn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_arrayElement,sn.prototype._setValue_arrayElement_setNeedsUpdate,sn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_fromArray,sn.prototype._setValue_fromArray_setNeedsUpdate,sn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var g3=new Float32Array(1);var kg=new $,Ah=class{constructor(e=new $(1/0,1/0),t=new $(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=kg.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kg).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jf);var xr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Hn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},r_=new na(-1,1,1,-1,0,1),yp=class extends Rt{constructor(){super(),this.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new nt([0,2,0,0,2,0],2))}},o_=new yp,Ci=class{constructor(e){this._mesh=new Q(o_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,r_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var so=class extends Hn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ht?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Pn.clone(e.uniforms),this.material=new ht({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ci(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Al=class extends Hn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Dh=class extends Hn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Uh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new $);this._width=i.width,this._height=i.height,t=new ln(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:wn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new so(xr),this.copyPass.material.blending=Mn,this.clock=new la}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Al!==void 0&&(o instanceof Al?i=!0:o instanceof Dh&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new $);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Hh=class extends Hn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new re}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var av={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new re(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ua=class n extends Hn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new $(e.x,e.y):new $(256,256),this.clearColor=new re(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ln(r,o,{type:wn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new ln(r,o,{type:wn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new ln(r,o,{type:wn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=av;this.highPassUniforms=Pn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ht({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new $(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let d=xr;this.copyUniforms=Pn.clone(d.uniforms),this.blendMaterial=new ht({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:He,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new re,this.oldClearAlpha=1,this.basic=new ke,this.fsQuad=new Ci(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new $(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new ht({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new $(.5,.5)},direction:{value:new $(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new ht({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};ua.BlurDirectionX=new $(1,0);ua.BlurDirectionY=new $(0,1);var lv={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Nh=class extends Hn{constructor(){super();let e=lv;this.uniforms=Pn.clone(e.uniforms),this.material=new gr({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ci(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ct.getTransfer(this._outputColorSpace)===Gt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ep?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===tp?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===np?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===io?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ip?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===sp&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Rl={name:"SMAAEdgesShader",defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new $(1/1024,1/512)}},vertexShader:`

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

		}`},Cl={name:"SMAAWeightsShader",defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new $(1/1024,1/512)}},vertexShader:`

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

		}`},zh={name:"SMAABlendShader",uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new $(1/1024,1/512)}},vertexShader:`

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

		}`};var kh=class extends Hn{constructor(e,t){super(),this.edgesRT=new ln(e,t,{depthBuffer:!1,type:wn}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new ln(e,t,{depthBuffer:!1,type:wn}),this.weightsRT.texture.name="SMAAPass.weights";let i=this,s=new Image;s.src=this.getAreaTexture(),s.onload=function(){i.areaTexture.needsUpdate=!0},this.areaTexture=new Rn,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=s,this.areaTexture.minFilter=bi,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;let r=new Image;r.src=this.getSearchTexture(),r.onload=function(){i.searchTexture.needsUpdate=!0},this.searchTexture=new Rn,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=r,this.searchTexture.magFilter=pn,this.searchTexture.minFilter=pn,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=Pn.clone(Rl.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/t),this.materialEdges=new ht({defines:Object.assign({},Rl.defines),uniforms:this.uniformsEdges,vertexShader:Rl.vertexShader,fragmentShader:Rl.fragmentShader}),this.uniformsWeights=Pn.clone(Cl.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/t),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new ht({defines:Object.assign({},Cl.defines),uniforms:this.uniformsWeights,vertexShader:Cl.vertexShader,fragmentShader:Cl.fragmentShader}),this.uniformsBlend=Pn.clone(zh.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/t),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new ht({uniforms:this.uniformsBlend,vertexShader:zh.vertexShader,fragmentShader:zh.fragmentShader}),this.fsQuad=new Ci(null)}render(e,t,i){this.uniformsEdges.tDiffuse.value=i.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=i.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){this.edgesRT.setSize(e,t),this.weightsRT.setSize(e,t),this.materialEdges.uniforms.resolution.value.set(1/e,1/t),this.materialWeights.uniforms.resolution.value.set(1/e,1/t),this.materialBlend.uniforms.resolution.value.set(1/e,1/t)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}};var Pl={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new $},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new vt},cameraProjectionMatrixInverse:{value:new vt},cameraWorldMatrix:{value:new vt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new S(-1,-1,-1)},sceneBoxMax:{value:new S(1,1,1)}},vertexShader:`

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
		}`},Il={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Oh={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function cv(n=5){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=a_(e),i=t.length,s=new Uint8Array(i*4);for(let o=0;o<i;++o){let a=t[o],l=2*Math.PI*a/i,c=new S(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new $r(s,e,e);return r.wrapS=Jn,r.wrapT=Jn,r.needsUpdate=!0,r}function a_(n){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),i[s*e+r]!==0){r-=2,s++;continue}else i[s*e+r]=o++;r++,s--}return i}var Ll={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Mp(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new $},cameraProjectionMatrixInverse:{value:new vt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Mp(n,e,t){let i=l_(n,e,t),s="vec3[SAMPLES](";for(let r=0;r<n;r++){let o=i[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<n-1?",":")"}`}return s}function l_(n,e,t){let i=[];for(let s=0;s<n;s++){let r=2*Math.PI*e*s/n,o=Math.pow(s/(n-1),t);i.push(new S(Math.cos(r),Math.sin(r),o))}return i}var Fh=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}noise(e,t){let i,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),d=(3-Math.sqrt(3))/6,u=(l+c)*d,f=l-u,p=c-u,g=e-f,x=t-p,v,m;g>x?(v=1,m=0):(v=0,m=1);let E=g-v+d,b=x-m+d,M=g-1+2*d,L=x-1+2*d,R=l&255,P=c&255,I=this.perm[R+this.perm[P]]%12,_=this.perm[R+v+this.perm[P+m]]%12,w=this.perm[R+1+this.perm[P+1]]%12,U=.5-g*g-x*x;U<0?i=0:(U*=U,i=U*U*this.dot(this.grad3[I],g,x));let O=.5-E*E-b*b;O<0?s=0:(O*=O,s=O*O*this.dot(this.grad3[_],E,b));let F=.5-M*M-L*L;return F<0?r=0:(F*=F,r=F*F*this.dot(this.grad3[w],M,L)),70*(i+s+r)}noise3d(e,t,i){let s,r,o,a,c=(e+t+i)*.3333333333333333,d=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(i+c),p=1/6,g=(d+u+f)*p,x=d-g,v=u-g,m=f-g,E=e-x,b=t-v,M=i-m,L,R,P,I,_,w;E>=b?b>=M?(L=1,R=0,P=0,I=1,_=1,w=0):E>=M?(L=1,R=0,P=0,I=1,_=0,w=1):(L=0,R=0,P=1,I=1,_=0,w=1):b<M?(L=0,R=0,P=1,I=0,_=1,w=1):E<M?(L=0,R=1,P=0,I=0,_=1,w=1):(L=0,R=1,P=0,I=1,_=1,w=0);let U=E-L+p,O=b-R+p,F=M-P+p,V=E-I+2*p,te=b-_+2*p,q=M-w+2*p,oe=E-1+3*p,Y=b-1+3*p,he=M-1+3*p,Te=d&255,ze=u&255,lt=f&255,Dt=this.perm[Te+this.perm[ze+this.perm[lt]]]%12,K=this.perm[Te+L+this.perm[ze+R+this.perm[lt+P]]]%12,de=this.perm[Te+I+this.perm[ze+_+this.perm[lt+w]]]%12,Ne=this.perm[Te+1+this.perm[ze+1+this.perm[lt+1]]]%12,ye=.6-E*E-b*b-M*M;ye<0?s=0:(ye*=ye,s=ye*ye*this.dot3(this.grad3[Dt],E,b,M));let Ye=.6-U*U-O*O-F*F;Ye<0?r=0:(Ye*=Ye,r=Ye*Ye*this.dot3(this.grad3[K],U,O,F));let $e=.6-V*V-te*te-q*q;$e<0?o=0:($e*=$e,o=$e*$e*this.dot3(this.grad3[de],V,te,q));let st=.6-oe*oe-Y*Y-he*he;return st<0?a=0:(st*=st,a=st*st*this.dot3(this.grad3[Ne],oe,Y,he)),32*(s+r+o+a)}noise4d(e,t,i,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,d,u,f,p,g,x=(e+t+i+s)*l,v=Math.floor(e+x),m=Math.floor(t+x),E=Math.floor(i+x),b=Math.floor(s+x),M=(v+m+E+b)*c,L=v-M,R=m-M,P=E-M,I=b-M,_=e-L,w=t-R,U=i-P,O=s-I,F=_>w?32:0,V=_>U?16:0,te=w>U?8:0,q=_>O?4:0,oe=w>O?2:0,Y=U>O?1:0,he=F+V+te+q+oe+Y,Te=o[he][0]>=3?1:0,ze=o[he][1]>=3?1:0,lt=o[he][2]>=3?1:0,Dt=o[he][3]>=3?1:0,K=o[he][0]>=2?1:0,de=o[he][1]>=2?1:0,Ne=o[he][2]>=2?1:0,ye=o[he][3]>=2?1:0,Ye=o[he][0]>=1?1:0,$e=o[he][1]>=1?1:0,st=o[he][2]>=1?1:0,Kt=o[he][3]>=1?1:0,St=_-Te+c,$t=w-ze+c,N=U-lt+c,kn=O-Dt+c,Mt=_-K+2*c,Et=w-de+2*c,Qe=U-Ne+2*c,qt=O-ye+2*c,Ze=_-Ye+3*c,D=w-$e+3*c,T=U-st+3*c,B=O-Kt+3*c,ee=_-1+4*c,se=w-1+4*c,J=U-1+4*c,Oe=O-1+4*c,be=v&255,Re=m&255,yt=E&255,ae=b&255,De=a[be+a[Re+a[yt+a[ae]]]]%32,et=a[be+Te+a[Re+ze+a[yt+lt+a[ae+Dt]]]]%32,it=a[be+K+a[Re+de+a[yt+Ne+a[ae+ye]]]]%32,Ue=a[be+Ye+a[Re+$e+a[yt+st+a[ae+Kt]]]]%32,At=a[be+1+a[Re+1+a[yt+1+a[ae+1]]]]%32,rt=.6-_*_-w*w-U*U-O*O;rt<0?d=0:(rt*=rt,d=rt*rt*this.dot4(r[De],_,w,U,O));let Ut=.6-St*St-$t*$t-N*N-kn*kn;Ut<0?u=0:(Ut*=Ut,u=Ut*Ut*this.dot4(r[et],St,$t,N,kn));let H=.6-Mt*Mt-Et*Et-Qe*Qe-qt*qt;H<0?f=0:(H*=H,f=H*H*this.dot4(r[it],Mt,Et,Qe,qt));let Ee=.6-Ze*Ze-D*D-T*T-B*B;Ee<0?p=0:(Ee*=Ee,p=Ee*Ee*this.dot4(r[Ue],Ze,D,T,B));let j=.6-ee*ee-se*se-J*J-Oe*Oe;return j<0?g=0:(j*=j,g=j*j*this.dot4(r[At],ee,se,J,Oe)),27*(d+u+f+p+g)}};var fa=class n extends Hn{constructor(e,t,i,s,r,o,a){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=cv(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new ln(this.width,this.height,{type:wn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new ht({defines:Object.assign({},Pl.defines),uniforms:Pn.clone(Pl.uniforms),vertexShader:Pl.vertexShader,fragmentShader:Pl.fragmentShader,blending:Mn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Sh,this.normalMaterial.blending=Mn,this.pdMaterial=new ht({defines:Object.assign({},Ll.defines),uniforms:Pn.clone(Ll.uniforms),vertexShader:Ll.vertexShader,fragmentShader:Ll.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new ht({defines:Object.assign({},Il.defines),uniforms:Pn.clone(Il.uniforms),vertexShader:Il.vertexShader,fragmentShader:Il.fragmentShader,blending:Mn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ht({uniforms:Pn.clone(xr.uniforms),vertexShader:xr.vertexShader,fragmentShader:xr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ch,blendDst:ca,blendEquation:Ei,blendSrcAlpha:Rh,blendDstAlpha:ca,blendEquationAlpha:Ei}),this.blendMaterial=new ht({uniforms:Pn.clone(Oh.uniforms),vertexShader:Oh.vertexShader,fragmentShader:Oh.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:$f,blendSrc:Ch,blendDst:ca,blendEquation:Ei,blendSrcAlpha:Rh,blendDstAlpha:ca,blendEquationAlpha:Ei}),this.fsQuad=new Ci(null),this.originalClearColor=new re,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new sa,this.depthTexture.format=ur,this.depthTexture.type=dr,this.normalRenderTarget=new ln(this.width,this.height,{minFilter:pn,magFilter:pn,type:wn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Mp(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Off:break;case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Mn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Mn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Mn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Mn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Mn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){let s=t.get(i);i.visible=s}),t.clear()}generateNoise(e=64){let t=new Fh,i=e*e*4,s=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new $r(s,e,e,ai,ei);return r.wrapS=Jn,r.wrapT=Jn,r.needsUpdate=!0,r}};fa.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var h={scene:null,camera:null,renderer:null,player:null,time:{t:.3,day:1,elevation:1,night:0},res:{iron:0,silicon:0,ice:0,titanium:0},buildings:[],nodes:[],enemies:[],colonists:[],colony:{pop:0,housing:0,o2:0,food:0,water:0,support:0,powerProd:0,powerUse:0,deficit:!1},upgrades:{},stats:{mined:{iron:0,silicon:0,ice:0,titanium:0},built:{},kills:0,arrived:0,crafted:{}},chapter:0,terraform:0,ended:!1,storm:0,menuOpen:!1,locked:!1,started:!1,debug:!1,colliders:null,raining:!1,events:{map:{},on(n,e){var t;((t=this.map)[n]||(t[n]=[])).push(e)},emit(n,e){(this.map[n]||[]).forEach(t=>t(e))}}},rn={iron:{name:"\u94C1\u77FF",icon:"iron",color:"#d08a5e"},silicon:{name:"\u7845\u6676",icon:"silicon",color:"#f1dca0"},ice:{name:"\u6C34\u51B0",icon:"ice",color:"#a9dcff"},titanium:{name:"\u949B\u77FF",icon:"titanium",color:"#b9a6ff"}};function Ki(n){for(let e in n)if((h.res[e]||0)<n[e])return!1;return!0}function Dl(n){for(let e in n)h.res[e]-=n[e]}function pa(n){return Object.entries(n).map(([e,t])=>`<span class="cost ${h.res[e]>=t?"":"lack"}" style="--rc:${rn[e].color}"><svg class="ico"><use href="#i-${e}"/></svg>${t}</span>`).join(" ")}var Bh=class{constructor(e=16){this.cell=e,this.map=new Map}key(e,t){return e*73856093^t*19349663}add(e){let t=this.cell,i=Math.floor((e.x-e.r)/t),s=Math.floor((e.x+e.r)/t),r=Math.floor((e.z-e.r)/t),o=Math.floor((e.z+e.r)/t);e._keys=[];for(let a=i;a<=s;a++)for(let l=r;l<=o;l++){let c=this.key(a,l);this.map.has(c)||this.map.set(c,[]),this.map.get(c).push(e),e._keys.push(c)}return e}remove(e){if(!(!e||!e._keys)){for(let t of e._keys){let i=this.map.get(t);if(!i)continue;let s=i.indexOf(e);s>=0&&i.splice(s,1)}e._keys=null}}query(e,t){return this.map.get(this.key(Math.floor(e/this.cell),Math.floor(t/this.cell)))||[]}overlaps(e,t,i){let s=this.cell,r=new Set;for(let o=Math.floor((e-i)/s);o<=Math.floor((e+i)/s);o++)for(let a=Math.floor((t-i)/s);a<=Math.floor((t+i)/s);a++){let l=this.map.get(this.key(o,a));if(l)for(let c of l){if(r.has(c))continue;r.add(c);let d=c.x-e,u=c.z-t,f=c.r+i;if(d*d+u*u<f*f)return c}}return null}};var Vn={mars:{id:"mars",name:"\u706B\u661F",place:"\u4E4C\u6258\u90A6\u5E73\u539F",title:"\u65B0\u5BB6\u56ED",next:"europa",seed:2089,gravity:5.6,solar:1,terraformable:!0,craters:46,hills:46,ridges:14,detail:1.6,ground:{a:[.56,.25,.14],b:[.74,.4,.24],steep:[.36,.19,.13],low:[.42,.22,.16]},rockHSL:[.04,.45,.22],rock:9062960,sky:{dayTop:[.62,.42,.29],dayHor:[.9,.68,.5],setTop:[.17,.13,.15],setHor:[.58,.4,.33],nightTop:[.006,.008,.022],nightHor:[.035,.035,.055],halo:[.35,.58,.95],storm:[.62,.42,.28]},dust:16765088,enemy:[3808536,9054736,16730640],extras:"moons",storms:!0,intro:["2089 \u5E74\u3002","\u5730\u7403\u4F9D\u7136\u7F8E\u4E3D\uFF0C\u4F46\u5DF2\u7ECF\u592A\u62E5\u6324\u3001\u592A\u708E\u70ED\u3001\u592A\u75B2\u60EB\u3002","\u300C\u65B9\u821F\u8BA1\u5212\u300D\u628A\u4EBA\u7C7B\u7684\u672A\u6765\uFF0C\u62BC\u5728\u4E86\u4E00\u9897\u7EA2\u8272\u661F\u7403\u4E0A\u3002","\u7ECF\u8FC7\u4E03\u4E2A\u6708\u3001\u4E24\u4EBF\u4E24\u5343\u4E94\u767E\u4E07\u516C\u91CC\u7684\u822A\u884C\u2014\u2014","\u4F60\u7684\u7740\u9646\u8231\uFF0C\u5728\u4E4C\u6258\u90A6\u5E73\u539F\u7684\u6668\u5149\u4E2D\u843D\u5730\u3002",'\u4F60\u662F\u7B2C\u4E00\u4E2A\u3002<b style="color:#ff8a3d">\u4F46\u4E0D\u4F1A\u662F\u6700\u540E\u4E00\u4E2A\u3002</b>']},europa:{id:"europa",name:"\u6728\u536B\u4E8C\xB7\u6B27\u7F57\u5DF4",place:"\u5EB7\u7EB3\u9A6C\u62C9\u6DF7\u6C8C\u533A",title:"\u51B0\u4E0B\u4E4B\u6D77",next:"kepler",seed:1610,gravity:3.6,solar:.55,terraformable:!1,craters:14,hills:16,ridges:26,detail:1.1,ground:{a:[.8,.84,.88],b:[.93,.95,.97],steep:[.5,.58,.68],low:[.62,.72,.82]},rockHSL:[.58,.2,.62],rock:12110040,sky:{dayTop:[.02,.025,.05],dayHor:[.16,.18,.26],setTop:[.01,.012,.03],setHor:[.1,.1,.16],nightTop:[.004,.005,.012],nightHor:[.02,.025,.04],halo:[.6,.7,.9],storm:[.5,.6,.7]},dust:14676223,enemy:[1454138,2788e3,4251903],extras:"jupiter",storms:!1,intro:["\u706B\u661F\u7684\u706F\u706B\uFF0C\u5DF2\u7ECF\u5728\u8EAB\u540E\u4EAE\u6210\u4E86\u4E00\u7247\u3002","\u800C\u4F60\uFF0C\u518D\u4E00\u6B21\u51FA\u53D1\u4E86\u3002","\u6728\u661F\u7684\u7B2C\u4E8C\u9897\u536B\u661F\u2014\u2014\u6B27\u7F57\u5DF4\u3002","\u5728\u5B83\u4E8C\u5341\u516C\u91CC\u539A\u7684\u51B0\u58F3\u4E4B\u4E0B\uFF0C\u662F\u4E00\u6574\u7247\u4ECE\u672A\u89C1\u8FC7\u9633\u5149\u7684\u6D77\u6D0B\u3002","\u6728\u661F\uFF0C\u50CF\u4E00\u8F6E\u5DE8\u5927\u7684\u6708\u4EAE\uFF0C\u60AC\u5728\u5730\u5E73\u7EBF\u4E0A\u3002",'<b style="color:#66e6ff">\u4EBA\u7C7B\u7684\u7B2C\u4E8C\u4E2A\u5BB6\uFF0C\u5728\u51B0\u4E0B\u3002</b>']},kepler:{id:"kepler",name:"\u5F00\u666E\u52D2-442b",place:"\u7FE1\u7FE0\u8C37\u5730",title:"\u53CC\u65E5\u4E4B\u5730",next:null,seed:442,gravity:7.2,solar:1.3,terraformable:!1,craters:8,hills:64,ridges:10,detail:2.2,ground:{a:[.18,.36,.3],b:[.32,.52,.34],steep:[.3,.24,.3],low:[.2,.26,.4]},rockHSL:[.75,.25,.3],rock:6969994,sky:{dayTop:[.3,.5,.78],dayHor:[.78,.86,.8],setTop:[.2,.12,.3],setHor:[.9,.5,.4],nightTop:[.01,.01,.04],nightHor:[.05,.04,.09],halo:[1,.6,.4],storm:[.6,.7,.6]},dust:13172696,enemy:[1976854,5939242,10551104],extras:"twinsuns",storms:!1,intro:["\u4E00\u5343\u4E8C\u767E\u5149\u5E74\u3002","\u51B7\u51BB\u8231\u91CC\u7684\u4E09\u767E\u5E74\uFF0C\u5BF9\u4F60\u53EA\u662F\u4E00\u573A\u68A6\u3002","\u8237\u7A97\u5916\uFF0C\u4E24\u9897\u592A\u9633\u6B63\u4ECE\u7D2B\u8272\u7684\u5C71\u810A\u540E\u5347\u8D77\u3002","\u8FD9\u91CC\u6709\u98CE\uFF0C\u6709\u4E91\uFF0C\u6709\u4F1A\u5728\u591C\u91CC\u53D1\u5149\u7684\u68EE\u6797\u3002","\u5F00\u666E\u52D2-442b\u2014\u2014\u4EBA\u7C7B\u7B2C\u4E00\u6B21\uFF0C\u6765\u5230\u53E6\u4E00\u9897\u6052\u661F\u7684\u8EAB\u8FB9\u3002",'<b style="color:#a0ff70">\u4ECE\u8FD9\u91CC\u5F00\u59CB\uFF0C\u4EBA\u7C7B\u6210\u4E3A\u4E86\u661F\u9645\u6587\u660E\u3002</b>']}},dv="starport-meta";function yr(){try{return JSON.parse(localStorage.getItem(dv))||{}}catch{return{}}}function Ul(n){try{localStorage.setItem(dv,JSON.stringify(n))}catch{}}function Ep(){try{for(let n of Object.keys(localStorage))n.startsWith("starport-")&&localStorage.removeItem(n)}catch{}}var hv=new URLSearchParams(location.search).get("planet"),xn=yr(),ot=Vn[hv]?hv:Vn[xn.planet]?xn.planet:"mars",fe=Vn[ot],Gh=ot==="mars"?"starport-newhome-v1":"starport-planet-"+ot;function ui(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Hl(n){let e=ui(n),t=[...Array(256).keys()];for(let l=255;l>0;l--){let c=Math.floor(e()*(l+1));[t[l],t[c]]=[t[c],t[l]]}let i=new Uint8Array(512);for(let l=0;l<512;l++)i[l]=t[l&255];let s=[1,-1,1,-1,1,-1,0,0],r=[1,1,-1,-1,0,0,1,-1],o=.5*(Math.sqrt(3)-1),a=(3-Math.sqrt(3))/6;return function(l,c){let d=0,u=0,f=0,p=(l+c)*o,g=Math.floor(l+p),x=Math.floor(c+p),v=(g+x)*a,m=l-(g-v),E=c-(x-v),b=m>E?1:0,M=m>E?0:1,L=m-b+a,R=E-M+a,P=m-1+2*a,I=E-1+2*a,_=g&255,w=x&255,U=.5-m*m-E*E;if(U>0){let V=i[_+i[w]]&7;U*=U,d=U*U*(s[V]*m+r[V]*E)}let O=.5-L*L-R*R;if(O>0){let V=i[_+b+i[w+M]]&7;O*=O,u=O*O*(s[V]*L+r[V]*R)}let F=.5-P*P-I*I;if(F>0){let V=i[_+1+i[w+1]]&7;F*=F,f=F*F*(s[V]*P+r[V]*I)}return 70*(d+u+f)}}function bp(n,e,t,i=4,s=2,r=.5){let o=1,a=1,l=0,c=0;for(let d=0;d<i;d++)l+=o*n(e*a,t*a),c+=o,o*=r,a*=s;return l/c}var Ji=(n,e,t)=>n<e?e:n>t?t:n,Nt=(n,e,t)=>n+(e-n)*t,Wn=(n,e,t)=>{let i=Ji((t-n)/(e-n),0,1);return i*i*(3-2*i)};var ut=512;function Os(){let n=document.createElement("canvas");return n.width=n.height=ut,n}function Fs(n,e,t=1){let i=new Zt(n);return i.wrapS=i.wrapT=Jn,i.repeat.set(t,t),i.anisotropy=4,e&&(i.colorSpace=_t),i}function Mr(n,e,t,i,s,r,o,a){for(let l=0;l<t;l++){n.fillStyle=`rgba(${i},${s+e()*(r-s)})`;let c=o+e()*(a-o);n.fillRect(e()*ut,e()*ut,c,c)}}function Nl(n=1,e=4){let t=ui(n),i=Os(),s=i.getContext("2d"),r=Os(),o=r.getContext("2d"),a=Os(),l=a.getContext("2d");s.fillStyle="#f2f0ec",s.fillRect(0,0,ut,ut),o.fillStyle="#8c8c8c",o.fillRect(0,0,ut,ut),l.fillStyle="#808080",l.fillRect(0,0,ut,ut);let c=ut/e;for(let u=0;u<e;u++)for(let f=0;f<e;f++){let p=236+Math.floor(t()*18);s.fillStyle=`rgb(${p},${p-2},${p-5})`,s.fillRect(u*c,f*c,c,c);let g=120+Math.floor(t()*40);if(o.fillStyle=`rgb(${g},${g},${g})`,o.fillRect(u*c,f*c,c,c),t()<.35){let x=c*(.25+t()*.3),v=c*(.2+t()*.25),m=u*c+c*.2+t()*c*.3,E=f*c+c*.2+t()*c*.3;l.strokeStyle="#4a4a4a",l.lineWidth=2,l.strokeRect(m,E,x,v),s.strokeStyle="rgba(80,76,70,.35)",s.lineWidth=1.5,s.strokeRect(m,E,x,v)}}for(let u=0;u<=e;u++){let f=u*c;for(let[p,g,x]of[[s,"rgba(70,64,58,.55)",2.5],[l,"#303030",4],[o,"#d0d0d0",3]])p.fillStyle=g,p.fillRect(f-x/2,0,x,ut),p.fillRect(0,f-x/2,ut,x)}for(let u=0;u<e;u++)for(let f=0;f<e;f++)for(let[p,g]of[[.08,.08],[.92,.08],[.08,.92],[.92,.92]]){let x=(u+p)*c,v=(f+g)*c;l.fillStyle="#c8c8c8",l.beginPath(),l.arc(x,v,3,0,7),l.fill(),s.fillStyle="rgba(90,86,80,.5)",s.beginPath(),s.arc(x,v,2.2,0,7),s.fill()}for(let u=0;u<70;u++){let f=t()*ut,p=30+t()*160,g=t()*ut,x=s.createLinearGradient(0,g,0,g+p);x.addColorStop(0,"rgba(150,90,60,0)"),x.addColorStop(.3,`rgba(150,90,60,${.05+t()*.08})`),x.addColorStop(1,"rgba(150,90,60,0)"),s.fillStyle=x,s.fillRect(f,g,1+t()*3,p)}let d=s.createLinearGradient(0,ut*.75,0,ut);d.addColorStop(0,"rgba(170,100,60,0)"),d.addColorStop(1,"rgba(170,100,60,.22)"),s.fillStyle=d,s.fillRect(0,0,ut,ut),Mr(s,t,2500,"120,80,60",.03,.12,1,3),Mr(o,t,1800,"255,255,255",.05,.2,1,4),s.strokeStyle="rgba(255,255,255,.25)",o.strokeStyle="rgba(40,40,40,.4)";for(let u=0;u<40;u++){let f=t()*ut,p=t()*ut,g=(t()-.5)*40,x=(t()-.5)*12;for(let v of[s,o])v.lineWidth=.8,v.beginPath(),v.moveTo(f,p),v.lineTo(f+g,p+x),v.stroke()}return{map:Fs(i,!0),roughnessMap:Fs(r,!1),bumpMap:Fs(a,!1)}}function uv(n=7){let e=ui(n),t=Os(),i=t.getContext("2d"),s=Os(),r=s.getContext("2d");i.fillStyle="#e6e6e6",i.fillRect(0,0,ut,ut),r.fillStyle="#6a6a6a",r.fillRect(0,0,ut,ut);for(let o=0;o<ut;o++){let a=210+Math.floor(e()*45);i.fillStyle=`rgba(${a},${a},${a},.5)`,i.fillRect(0,o,ut,1);let l=80+Math.floor(e()*60);r.fillStyle=`rgba(${l},${l},${l},.5)`,r.fillRect(0,o,ut,1)}return Mr(i,e,800,"60,50,40",.05,.15,1,3),{map:Fs(t,!0),roughnessMap:Fs(s,!1)}}function fv(n=3){let e=ui(n),t=Os(),i=t.getContext("2d"),s=Os(),r=s.getContext("2d");i.fillStyle="#d8d2c8",i.fillRect(0,0,ut,ut),r.fillStyle="#808080",r.fillRect(0,0,ut,ut),Mr(i,e,9e3,"90,80,70",.04,.16,1,4),Mr(i,e,3e3,"255,250,240",.04,.12,1,3),Mr(r,e,6e3,"40,40,40",.1,.4,1,3);for(let a=0;a<6;a++){i.strokeStyle="rgba(70,60,50,.25)",i.lineWidth=1,i.beginPath();let l=e()*ut,c=e()*ut;i.moveTo(l,c);for(let d=0;d<12;d++)l+=(e()-.5)*50,c+=(e()-.5)*50,i.lineTo(l,c);i.stroke()}let o=i.createLinearGradient(0,0,0,ut);return o.addColorStop(0,"rgba(170,100,60,0)"),o.addColorStop(1,"rgba(170,100,60,.3)"),i.fillStyle=o,i.fillRect(0,0,ut,ut),{map:Fs(t,!0,1),bumpMap:Fs(s,!1,1)}}function pv(n=11){let e=ui(n),t=Os(),i=t.getContext("2d"),s=Os(),r=s.getContext("2d");i.fillStyle="#d0c4bc",i.fillRect(0,0,ut,ut),r.fillStyle="#808080",r.fillRect(0,0,ut,ut);for(let o=0;o<300;o++){let a=e()*ut,l=e()*ut,c=6+e()*40,d=Math.floor(150+e()*90);i.fillStyle=`rgba(${d},${d-15},${d-25},.25)`,i.beginPath(),i.ellipse(a,l,c,c*(.4+e()*.6),e()*3,0,7),i.fill(),r.fillStyle=`rgba(${d},${d},${d},.25)`,r.beginPath(),r.ellipse(a,l,c,c*.6,e()*3,0,7),r.fill()}return Mr(i,e,8e3,"60,40,30",.05,.2,1,3),Mr(r,e,8e3,"20,20,20",.1,.5,1,2),{map:Fs(t,!0,1),bumpMap:Fs(s,!1,1)}}var y={white:new ve({color:15328474,roughness:.55,metalness:.1}),panel:new ve({color:13222840,roughness:.6,metalness:.2}),metal:new ve({color:8159110,roughness:.4,metalness:.7}),dark:new ve({color:2895670,roughness:.5,metalness:.5}),orange:new ve({color:16742954,roughness:.5,metalness:.1}),glass:new ve({color:10474751,roughness:.05,metalness:.3,transparent:!0,opacity:.35}),window:new ve({color:2240576,emissive:16761466,emissiveIntensity:0,roughness:.2}),solar:new ve({color:1780826,roughness:.25,metalness:.8}),plant:new ve({color:5221962,roughness:.8,flatShading:!0}),cyan:new ve({color:1127236,emissive:3401471,emissiveIntensity:2}),red:new ve({color:3342336,emissive:16722474,emissiveIntensity:3}),lamp:new ve({color:3351057,emissive:16767392,emissiveIntensity:0}),found:new ve({color:9143160,roughness:.9}),flame:new ke({color:16756832,transparent:!0,opacity:.85,blending:He,depthWrite:!1})};{let n=Nl(1,4),e=Nl(5,3),t=uv(),i=fv(),s=Nl(9,2);Object.assign(y.white,{...n,bumpScale:1.4,roughness:.75,metalness:.15,color:new re(15920612)}),Object.assign(y.panel,{...e,bumpScale:1.2,roughness:.8,metalness:.25,color:new re(13617340)}),Object.assign(y.metal,{...t,roughness:1,metalness:.85,color:new re(10132900)}),Object.assign(y.dark,{...s,bumpScale:1,roughness:.7,metalness:.6,color:new re(3816772)}),Object.assign(y.orange,{...Nl(3,2),bumpScale:.8,roughness:.7,metalness:.15}),Object.assign(y.found,{...i,bumpScale:2,roughness:.95,color:new re(10853004)}),y.glass.roughness=.02,y.glass.metalness=.1,y.glass.opacity=.28,y.glass.envMapIntensity=2.2,y.solar.roughness=.12,y.solar.envMapIntensity=1.8;for(let r in y)y[r].needsUpdate=!0}var cs=pv();{let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d");e.fillStyle="#1d3266",e.fillRect(0,0,64,64),e.strokeStyle="#9fb4e0",e.lineWidth=1.5;for(let i=0;i<=64;i+=16)e.beginPath(),e.moveTo(i,0),e.lineTo(i,64),e.stroke(),e.beginPath(),e.moveTo(0,i),e.lineTo(64,i),e.stroke();let t=new Zt(n);t.colorSpace=_t,t.wrapS=t.wrapT=Jn,t.repeat.set(3,2),y.solar.map=t,y.solar.color.set(16777215)}function Z(n,e,t=0,i=0,s=0,r){let o=new Q(n,e);return o.position.set(t,i,s),o.castShadow=!0,o.receiveShadow=!0,r&&r.add(o),o}var dt=(n,e,t)=>new Ke(n,e,t),at=(n,e,t,i=16)=>new Fe(n,e,t,i),Vh;function Nn(){if(Vh)return Vh;let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.6)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Vh=new Zt(n),Vh}function ge(n,e,t,i=0,s=0,r=0){let o=new wi(new ci({map:Nn(),color:n,transparent:!0,blending:He,depthWrite:!1}));return o.scale.set(e,e,1),o.position.set(i,s,r),t&&t.add(o),o}function Xn(n,e,t=!1){let i=Z(t?dt(e*2,4,e*2):at(e,e*1.05,4,20),y.found,0,-1.8,0,n);i.castShadow=!1,i.userData.found=!0}var Qn={solar(n,e){Xn(n,2.2,!0),Z(at(.18,.25,2.2),y.metal,0,1.1,0,n);let t=new ce;t.position.y=2.3,n.add(t);let i=Z(dt(4.2,.12,2.8),y.solar,0,0,0,t);Z(dt(4.4,.08,.1),y.metal,0,-.05,1.42,t),Z(dt(4.4,.08,.1),y.metal,0,-.05,-1.42,t),e.pivot=t,e.panel=i},oxygen(n,e){Xn(n,3),Z(at(1,1,3.6),y.white,-1.3,1.8,0,n),Z(new Be(1,16,8,0,Math.PI*2,0,Math.PI/2),y.white,-1.3,3.6,0,n),Z(at(1,1,3.6),y.white,1.3,1.8,0,n),Z(new Be(1,16,8,0,Math.PI*2,0,Math.PI/2),y.white,1.3,3.6,0,n),Z(at(1.02,1.02,.3),y.orange,-1.3,2.4,0,n),Z(at(1.02,1.02,.3),y.orange,1.3,2.4,0,n),Z(dt(1.4,1.6,1.8),y.panel,0,.8,1,n),Z(at(.12,.12,2.6),y.metal,0,3.2,0,n).rotation.z=Math.PI/2;let t=new ce;t.position.set(0,1.75,1.95),n.add(t);for(let i=0;i<4;i++){let s=Z(dt(.15,.7,.05),y.dark,0,0,0,t);s.rotation.z=i*Math.PI/2,s.position.set(Math.sin(i*Math.PI/2)*.3,Math.cos(i*Math.PI/2)*.3,0),s.rotation.z=-i*Math.PI/2}e.fan=t,e.light=ge(6741503,1.2,n,0,1.75,2)},habitat(n,e){Xn(n,6.2),Z(at(6,6,1.2,28),y.panel,0,.6,0,n);let t=Z(new Be(5.8,28,12,0,Math.PI*2,0,Math.PI/2),y.white,0,1.2,0,n);t.scale.y=.85;let i=Z(new Fe(5.72,5.84,.7,28,1,!0),y.window,0,2,0,n);Z(at(.1,.1,3),y.metal,0,7.4,0,n),e.tip=ge(16728128,1.2,n,0,8.9,0),Z(dt(2.2,2.6,2.8),y.white,0,1.3,6.4,n),Z(dt(1.2,2,.1),y.dark,0,1.1,7.82,n),Z(dt(2.3,.3,2.9),y.orange,0,2.7,6.4,n),e.windows=[i]},extractor(n,e){Xn(n,2.6,!0),Z(dt(4,.6,4),y.panel,0,.3,0,n);for(let[i,s]of[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4]])Z(at(.12,.15,6),y.metal,i*.7,3.3,s*.7,n).rotation.set(s*.08,0,-i*.08);Z(dt(1.6,.4,1.6),y.orange,0,6.2,0,n);let t=Z(at(.3,.3,4.5),y.metal,0,3,0,n);Z(at(.9,.9,1.6),y.white,1.7,1.4,1.2,n),e.drill=t,e.light=ge(10476799,1.2,n,1.7,2.5,1.2)},greenhouse(n,e){Xn(n,5,!0),Z(dt(10,.5,6),y.panel,0,.25,0,n);let t=Z(new Fe(3,3,10,20,1,!1,0,Math.PI),y.glass,0,.5,0,n);t.rotation.set(0,0,Math.PI/2),t.castShadow=!1;for(let i=0;i<5;i++)Z(new Le(3,.08,6,20,Math.PI),y.white,-4.5+i*2.25,.5,0,n).rotation.y=Math.PI/2;for(let i=0;i<14;i++){let s=-4.2+i%7*1.4,r=i<7?-1.2:1.2,o=Z(new Wt(.45,1.2+i%3*.3,6),y.plant,s,1.2,r,n);o.castShadow=!1}Z(dt(9.6,.3,.5),y.dark,0,.7,-1.2,n),Z(dt(9.6,.3,.5),y.dark,0,.7,1.2,n),e.light=ge(16737996,4,n,0,2.5,0)},fabricator(n,e){Xn(n,4,!0),Z(dt(7,3.6,5),y.panel,0,1.8,0,n),Z(dt(7.1,.4,5.1),y.orange,0,3.4,0,n),Z(dt(3,2.6,.1),y.dark,0,1.3,2.52,n);let t=new ce;t.position.set(2.2,3.6,0),n.add(t),Z(at(.35,.45,.6),y.metal,0,.3,0,t);let i=Z(dt(.3,2.2,.3),y.orange,0,1.4,0,t),s=Z(dt(.25,1.6,.25),y.metal,0,2.4,.6,t);s.rotation.x=.9,e.arm=t,e.spark=ge(16764006,1.2,n,2.2,5.7,1.2),Z(dt(1.2,1.2,1.2),y.dark,-2.4,.6,3.2,n),Z(dt(1,1,1),y.dark,-1.1,.5,3.1,n)},turret(n,e){Xn(n,1.8),Z(at(1.4,1.8,1.2,12),y.metal,0,.6,0,n),Z(at(.5,.7,1.2,10),y.dark,0,1.8,0,n);let t=new ce;t.position.y=2.7,n.add(t),Z(dt(1.6,1,1.8),y.white,0,0,0,t),Z(dt(1.65,.2,1.85),y.orange,0,.35,0,t),Z(at(.12,.12,2.2,8),y.dark,-.4,0,-1.6,t).rotation.x=Math.PI/2,Z(at(.12,.12,2.2,8),y.dark,.4,0,-1.6,t).rotation.x=Math.PI/2,e.eye=ge(3401471,.9,t,0,.1,-.95),e.head=t},reactor(n,e){Xn(n,5.2),Z(at(5,5.2,1.4,24),y.panel,0,.7,0,n);let t=Z(new Be(2,20,14),y.cyan,0,4.2,0,n);t.castShadow=!1;let i=Z(new Le(3.2,.35,10,32),y.white,0,4.2,0,n),s=Z(new Le(3.2,.35,10,32),y.white,0,4.2,0,n);s.rotation.x=Math.PI/2;for(let r=0;r<4;r++){let o=r*Math.PI/2;Z(dt(.6,3,.6),y.metal,Math.cos(o)*3.6,2.2,Math.sin(o)*3.6,n)}e.core=t,e.r1=i,e.r2=s,e.light=ge(3401471,9,n,0,4.2,0)},beacon(n,e){let t=Z(at(7,7.3,.6,8),y.found,0,0,0,n);Z(at(7.3,7.6,4,8),y.found,0,-2.3,0,n).castShadow=!1,Z(new nn(4.2,4.8,32),y.orange,0,.32,0,n).rotation.x=-Math.PI/2,Z(new nn(1.5,2,4),y.white,0,.32,0,n).rotation.x=-Math.PI/2,e.lights=[];for(let i=0;i<8;i++){let s=i*Math.PI/4+Math.PI/8;e.lights.push(ge(16755251,1.2,n,Math.cos(s)*6.6,.5,Math.sin(s)*6.6))}Z(at(.18,.3,9,8),y.metal,8.6,4.2,0,n),Z(dt(1.6,.1,1.2),y.white,8.6,8.7,0,n).rotation.z=.4,e.tip=ge(16724016,2,n,8.6,9.2,0),t.castShadow=!1},lamp(n,e){Z(at(.4,.5,.4,8),y.found,0,0,0,n),Z(at(.08,.1,4.2,6),y.metal,0,2.1,0,n),Z(dt(.6,.2,.6),y.dark,0,4.3,0,n);let t=Z(new Be(.2,8,6),y.lamp,0,4.15,0,n);t.castShadow=!1,e.glow=ge(16767392,1.7,n,0,4.1,0)},terraformer(n,e){Xn(n,7),Z(at(7,7.5,2,6),y.panel,0,1,0,n),Z(at(2.5,4.5,26,6),y.white,0,15,0,n);for(let i=0;i<3;i++)Z(at(4.6-i*.7,4.6-i*.7,.8,6),y.orange,0,6+i*8,0,n);e.rings=[];for(let i=0;i<3;i++){let s=Z(new Le(6-i*1.2,.25,8,40),y.cyan,0,10+i*8,0,n);s.castShadow=!1,e.rings.push(s)}for(let i=0;i<6;i++){let s=i*Math.PI/3,r=Z(dt(1.2,10,1.2),y.metal,Math.cos(s)*6,5,Math.sin(s)*6,n);r.rotation.y=-s}let t=Z(new Fe(.6,1.4,400,12,1,!0),new ke({color:6743807,transparent:!0,opacity:0,blending:He,depthWrite:!1,side:bt}),0,228,0,n);t.castShadow=!1,t.receiveShadow=!1,e.beam=t,e.top=ge(6743807,10,n,0,28,0)}};var mv=[16751162,3850495,8257418,16740277,16769354].map(n=>new ve({color:1118481,emissive:n,emissiveIntensity:.6,roughness:.1,metalness:.6})),gv=[15525596,14278116,15259332].map(n=>new ve({color:n,roughness:.7}));function yv(n){let e=new ce,t=gv[n%gv.length],i=mv[n%mv.length],s=(g,x,v,m,E,b=e)=>{let M=new Q(g,x);return M.position.set(v,m,E),M.castShadow=!0,b.add(M),M},r=new ji([[0,0],[.2,0],[.24,.12],[.27,.42],[.25,.55],[.12,.62],[0,.62]].map(([g,x])=>new $(g,x)),12),o=s(r,t,0,.72,0);o.scale.z=.8,s(new Le(.2,.04,6,16),y.orange,0,.77,0).rotation.x=Math.PI/2,s(new Fe(.16,.18,.06,12),y.dark,0,1.36,0);let a=s(new Be(.21,16,12),t,0,1.58,0),l=s(new Be(.19,16,10,Math.PI*.12,Math.PI*.76,Math.PI*.28,Math.PI*.4),i,0,1.58,.035);s(new Ke(.02,.12,.02),y.metal,.12,1.82,-.05).rotation.z=-.3,s(new Ke(.36,.42,.18),y.panel,0,1.08,-.24),s(new Ke(.3,.06,.19),y.orange,0,1.25,-.24),ge(9306032,.25,e,.12,.96,-.34);let c=(g,x,v,m,E)=>{let b=new ce;b.position.set(g,x,0),e.add(b);let M=s(new bh(m,v,4,8),t,0,-v/2-m,0,b);return s(new Fe(m*1.15,m*1.15,.05,8),E?y.orange:y.dark,0,-v*.45,0,b),E?s(new Ke(m*2.4,.1,m*3.4),y.dark,0,-v-m*1.6,.04,b):s(new Be(m*1.2,8,6),y.dark,0,-v-m*1.6,0,b),b},d=c(-.11,.74,.5,.075,!0),u=c(.11,.74,.5,.075,!0),f=c(-.33,1.27,.42,.06,!1),p=c(.33,1.27,.42,.06,!1);return f.rotation.z=-.12,p.rotation.z=.12,{group:e,legL:d,legR:u,armL:f,armR:p,body:o,head:a,visor:l}}var yA=new ve({color:fe.enemy[0],roughness:.3,metalness:.6,flatShading:!0,emissive:1049856}),c_=new ve({color:fe.enemy[1],emissive:fe.enemy[2],emissiveIntensity:.8,roughness:.2,flatShading:!0}),h_=new ke({color:16764992});function d_(n,e,t){let i=document.createElement("canvas");i.width=128,i.height=256;let s=i.getContext("2d");s.fillStyle="#000",s.fillRect(0,0,128,256);let r=t,o=()=>(r=(r*9301+49297)%233280,r/233280),a=128/n,l=256/e;for(let d=0;d<n;d++)for(let u=0;u<e;u++)o()<.65&&(s.fillStyle=o()<.8?"#ffd9a0":"#a0d8ff",s.fillRect(d*a+a*.2,u*l+l*.25,a*.6,l*.5));let c=new Zt(i);return c.colorSpace=_t,c}var kl=[];function vv(n){let e=new ve({color:14210252,roughness:.5,metalness:.2,emissive:16777215,emissiveMap:d_(6,14,n),emissiveIntensity:.2});return kl.push(e),e}var xv=[vv(7),vv(31)],zl;function Mv(){if(zl)return zl;let n=document.createElement("canvas");n.width=256,n.height=128;let e=n.getContext("2d");e.fillStyle="#0a3a6a",e.fillRect(0,0,256,128),e.strokeStyle="rgba(127,230,255,.35)",e.lineWidth=1;for(let i=0;i<256;i+=16)e.beginPath(),e.moveTo(i,0),e.lineTo(i,128),e.stroke();for(let i=0;i<128;i+=16)e.beginPath(),e.moveTo(0,i),e.lineTo(256,i),e.stroke();e.fillStyle="#7fffc8";let t=[[40,40,22,16],[52,62,10,20],[70,86,12,18],[118,36,16,12],[128,56,14,26],[150,34,40,18],[176,52,22,14],[206,88,16,10],[96,24,12,8],[190,22,20,8]];for(let[i,s,r,o]of t)e.beginPath(),e.ellipse(i,s,r,o,.3,0,Math.PI*2),e.fill();return e.fillStyle="#ffffff",e.fillRect(0,0,256,6),e.fillRect(0,122,256,6),zl=new Zt(n),zl.colorSpace=_t,zl}Object.assign(Qn,{plaza(n,e){Xn(n,7.2),Z(at(7.2,7.4,.4,8),y.panel,0,.2,0,n),Z(new nn(5.4,5.8,48),y.orange,0,.42,0,n).rotation.x=-Math.PI/2,Z(at(1.6,2,1.1,16),y.white,0,.95,0,n),Z(at(1.65,1.65,.15,16),y.cyan,0,1.52,0,n);for(let r=0;r<6;r++){let o=r*Math.PI/3+Math.PI/6,a=Z(dt(2.4,.4,.7),y.panel,Math.cos(o)*5.2,.6,Math.sin(o)*5.2,n);a.rotation.y=-o+Math.PI/2,Z(dt(.12,3.2,.12),y.metal,Math.cos(o+.5)*6.6,1.8,Math.sin(o+.5)*6.6,n),ge(16767392,1.1,n,Math.cos(o+.5)*6.6,3.5,Math.sin(o+.5)*6.6)}let t=new Q(new Be(1.5,32,20),new ke({map:Mv(),transparent:!0,opacity:.75,blending:He,depthWrite:!1}));t.position.y=4,n.add(t);let i=ge(6736127,5,n,0,4,0),s=new Q(new Fe(1.2,1.6,2.4,20,1,!0),new ke({color:8382207,transparent:!0,opacity:.12,blending:He,depthWrite:!1,side:bt}));s.position.y=2.7,n.add(s),e.earth=t,e.halo=i},drones(n,e){Xn(n,3.8,!0),Z(dt(7.4,.5,7.4),y.panel,0,.25,0,n);for(let[s,r]of[[-1.9,-1.9],[1.9,-1.9],[-1.9,1.9],[1.9,1.9]])Z(at(1.1,1.1,.1,16),y.dark,s,.55,r,n),Z(new nn(.75,.9,20),y.orange,s,.62,r,n).rotation.x=-Math.PI/2;Z(dt(1.2,4,1.2),y.white,3,2.2,3,n),Z(dt(1.25,.3,1.25),y.orange,3,3.6,3,n);let t=new ce;t.position.set(3,4.6,3),n.add(t);let i=Z(new Be(.9,12,6,0,Math.PI*2,0,Math.PI/3),y.white,0,0,0,t);i.rotation.x=Math.PI*.6,Z(at(.05,.05,.8,4),y.metal,0,.1,.2,t).rotation.x=1.1,e.dish=t,e.light=ge(8382207,1.4,n,3,5.4,3)},apartment(n,e){Xn(n,4.4,!0),Z(dt(8,1,8),y.panel,0,.5,0,n),Z(dt(5,18,5),xv[0],-1.2,10,-1.2,n),Z(dt(4,12,4),xv[1],2,7,2,n),Z(dt(5.2,.5,5.2),y.orange,-1.2,19.2,-1.2,n),Z(dt(4.2,.5,4.2),y.orange,2,13.2,2,n),Z(at(.1,.1,4,6),y.metal,-1.2,21.4,-1.2,n),e.tip=ge(16728128,1.6,n,-1.2,23.5,-1.2),Z(new Be(1.6,16,8,0,Math.PI*2,0,Math.PI/2),y.glass,2,13.4,2,n).castShadow=!1},vfarm(n,e){Xn(n,4),Z(at(3.8,4,1,16),y.panel,0,.5,0,n);let t=Z(at(3.2,3.2,14,16),y.glass,0,8,0,n);t.castShadow=!1;for(let i=0;i<6;i++){Z(at(3,3,.25,16),y.white,0,2+i*2.3,0,n);for(let s=0;s<7;s++){let r=s/7*Math.PI*2+i,o=Z(new Wt(.4,.9,5),y.plant,Math.cos(r)*2.2,2.6+i*2.3,Math.sin(r)*2.2,n);o.castShadow=!1}}Z(new Be(3.2,16,8,0,Math.PI*2,0,Math.PI/2),y.glass,0,15,0,n).castShadow=!1,e.light=ge(16737996,9,n,0,8,0)},lifehub(n,e){Xn(n,5.5),Z(at(5.5,5.8,1.2,20),y.panel,0,.6,0,n);let t=Z(new Be(4.5,20,12,0,Math.PI*2,0,Math.PI/2),y.white,0,1.2,0,n);Z(new Le(4.6,.3,8,32),y.orange,0,1.6,0,n).rotation.x=Math.PI/2;for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4;Z(at(.9,.9,5,12),y.white,Math.cos(r)*5.2,2.5,Math.sin(r)*5.2,n),Z(at(.95,.95,.4,12),y.cyan,Math.cos(r)*5.2,4.2,Math.sin(r)*5.2,n)}let i=new ce;i.position.y=6,n.add(i);for(let s=0;s<3;s++){let r=Z(dt(4,.1,.6),y.dark,0,0,0,i);r.rotation.y=s*Math.PI/3}e.fan=i,e.light=ge(6741503,5,n,0,6,0)},launch(n,e){Xn(n,9,!0),Z(dt(18,1.2,18),y.found,0,.6,0,n),Z(new nn(5,6,32),y.orange,0,1.25,0,n).rotation.x=-Math.PI/2;for(let[s,r]of[[6,-1.5],[6,1.5],[9,-1.5],[9,1.5]])Z(dt(.4,34,.4),y.metal,s,18,r,n);for(let s=0;s<8;s++)Z(dt(3.4,.25,3.4),y.metal,7.5,4+s*4,0,n);Z(dt(4,.5,.8),y.orange,4.2,26,0,n);let t=new ce;t.position.y=1.2,n.add(t),Z(at(2.4,2.8,24,20),y.white,0,13,0,t),Z(new Wt(2.4,7,20),y.white,0,28.5,0,t),Z(at(2.45,2.45,1.2,20),y.orange,0,20,0,t),Z(at(2.45,2.45,.6,20),y.dark,0,8,0,t);for(let s=0;s<4;s++){let r=s*Math.PI/2,o=Z(dt(.4,6,3),y.panel,Math.cos(r)*2.8,3.5,Math.sin(r)*2.8,t);o.rotation.y=-r}for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4;Z(at(.8,1.2,2,10),y.dark,Math.cos(r)*1.2,.6,Math.sin(r)*1.2,t)}let i=new Q(new Wt(3,16,16,1,!0),y.flame);i.rotation.x=Math.PI,i.position.y=-8,i.visible=!1,t.add(i),e.ship=t,e.flame=i,e.tip=ge(16777215,3,t,0,32.5,0)},monument(n,e){Xn(n,6),Z(at(6,6.5,1.5,8),y.panel,0,.75,0,n),Z(at(4.5,5,1,8),y.white,0,2,0,n);let t=Z(new Fe(.6,1.8,30,4),y.white,0,17,0,n);t.rotation.y=Math.PI/4,e.rings=[];let i=[new ve({color:3346688,emissive:16742954,emissiveIntensity:2}),new ve({color:8755,emissive:6743807,emissiveIntensity:2}),new ve({color:1127168,emissive:10551104,emissiveIntensity:2})];for(let s=0;s<3;s++){let r=Z(new Le(4-s*.6,.18,8,40),i[s],0,14+s*5,0,n);r.castShadow=!1,e.rings.push(r)}e.top=ge(16777215,8,n,0,33,0)}});function Ev(){let n=new ce,e=Z(new Be(.42,14,8),y.white,0,0,0,n);e.scale.y=.55,Z(at(.44,.44,.08,14),y.orange,0,0,0,n);let t=[];for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4,o=Math.cos(r)*.7,a=Math.sin(r)*.7;Z(dt(.6,.05,.08),y.dark,o*.55,0,a*.55,n).rotation.y=-r;let l=Z(at(.28,.28,.02,10),new ke({color:2236962,transparent:!0,opacity:.45}),o,.08,a,n);t.push(l)}let i=ge(8382207,.9,n,0,-.2,0);return{group:n,rotors:t,eye:i}}var ma={crystal:c_,eye:h_};Qn._earthTex=Mv;var Ol=class n extends Q{constructor(){super(n.Geometry,new ke({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;let e=new S,t=new S,i=new bl(16,16),s=new bl(16,16),r=ei,o=n.Geometry,a=new gr({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),l=new gr({uniforms:{map:{value:i},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),c=new Q(o,a),d=[],u=ga.Shader,f=new gr({name:u.name,uniforms:{map:{value:null},occlusionMap:{value:s},color:{value:new re(16777215)},scale:{value:new $},screenPosition:{value:new S}},vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:He,transparent:!0,depthWrite:!1}),p=new Q(o,f);this.addElement=function(E){d.push(E)};let g=new $,x=new $,v=new Ah,m=new Vt;this.onBeforeRender=function(E,b,M){E.getCurrentViewport(m);let L=E.getRenderTarget(),R=L!==null?L.texture.type:ei;r!==R&&(i.dispose(),s.dispose(),i.type=s.type=R,r=R);let P=m.w/m.z,I=m.z/2,_=m.w/2,w=16/m.w;if(g.set(w*P,w),v.min.set(m.x,m.y),v.max.set(m.x+(m.z-16),m.y+(m.w-16)),t.setFromMatrixPosition(this.matrixWorld),t.applyMatrix4(M.matrixWorldInverse),!(t.z>0)&&(e.copy(t).applyMatrix4(M.projectionMatrix),x.x=m.x+e.x*I+I-8,x.y=m.y+e.y*_+_-8,v.containsPoint(x))){E.copyFramebufferToTexture(i,x);let U=a.uniforms;U.scale.value=g,U.screenPosition.value=e,E.renderBufferDirect(M,null,o,a,c,null),E.copyFramebufferToTexture(s,x),U=l.uniforms,U.scale.value=g,U.screenPosition.value=e,E.renderBufferDirect(M,null,o,l,c,null);let O=-e.x*2,F=-e.y*2;for(let V=0,te=d.length;V<te;V++){let q=d[V],oe=f.uniforms;oe.color.value.copy(q.color),oe.map.value=q.texture,oe.screenPosition.value.x=e.x+O*q.distance,oe.screenPosition.value.y=e.y+F*q.distance,w=q.size/m.w;let Y=m.w/m.z;oe.scale.value.set(w*Y,w),f.uniformsNeedUpdate=!0,E.renderBufferDirect(M,null,o,f,p,null)}}},this.dispose=function(){a.dispose(),l.dispose(),f.dispose(),i.dispose(),s.dispose();for(let E=0,b=d.length;E<b;E++)d[E].texture.dispose()}}},ga=class{constructor(e,t=1,i=0,s=new re(16777215)){this.texture=e,this.size=t,this.distance=i,this.color=s}};ga.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

		}`};Ol.Geometry=function(){let n=new Rt,e=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),t=new El(e,5);return n.setIndex([0,1,2,0,2,3]),n.setAttribute("position",new Qr(t,3,0,!1)),n.setAttribute("uv",new Qr(t,2,3,!1)),n}();var u_=540,Bl,va,fi,xa,wp,Gl,Sp,wr,Wl=(n,e,t)=>new re().setRGB(n,e,t,_t),Er=fe.sky,br=n=>Wl(n[0],n[1],n[2]),hs={dayTop:br(Er.dayTop),dayHor:br(Er.dayHor),setTop:br(Er.setTop),setHor:br(Er.setHor),nightTop:br(Er.nightTop),nightHor:br(Er.nightHor),earthTop:Wl(.22,.44,.82),earthHor:Wl(.68,.8,.92),stormHor:br(Er.storm),halo:br(Er.halo)},zn={},Vl,_v=[];function f_(n){let t=document.createElement("canvas");t.width=t.height=256;let i=t.getContext("2d");if(n==="streak"){let s=i.createLinearGradient(0,0,256,0);s.addColorStop(0,"rgba(255,255,255,0)"),s.addColorStop(.5,"rgba(255,255,255,1)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,256/2-2,256,4);let r=i.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);r.addColorStop(0,"rgba(255,255,255,.35)"),r.addColorStop(1,"rgba(255,255,255,0)"),i.globalCompositeOperation="destination-in",i.fillStyle=r,i.fillRect(0,0,256,256)}else if(n==="ring"){let s=i.createRadialGradient(128,128,92.16,128,128,128);s.addColorStop(0,"rgba(255,255,255,0)"),s.addColorStop(.7,"rgba(255,255,255,.35)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,256,256)}else if(n==="hex"){i.fillStyle="rgba(255,255,255,.22)",i.beginPath();for(let s=0;s<6;s++){let r=s*Math.PI/3;i[s?"lineTo":"moveTo"](256/2+Math.cos(r)*256*.45,256/2+Math.sin(r)*256*.45)}i.fill()}else{let s=i.createRadialGradient(128,128,0,128,128,128);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.15,"rgba(255,240,220,.6)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,256,256)}return new Zt(t)}function p_(n){Vl=new gn,n.add(Vl);let e=new Ol,t=(i,s,r,o)=>{let a=new ga(f_(i),s,r,new re(o));a.base=new re(o),e.addElement(a),_v.push(a)};t("glow",380,0,16771276),t("streak",1600,0,10148095),t("streak",900,0,16765088),t("glow",46,.4,3812386),t("ring",130,.62,2366490),t("glow",80,.86,2760728),t("ring",240,1.12,1448482),Vl.add(e)}var _p,bv,Tv,Wh=null,wv=0,Tp={mars:[.35,[.2,.9,.7],[.3,.5,1]],europa:[.6,[.4,.6,1],[.8,.4,1]],kepler:[1,[.3,1,.5],[.9,.3,.9]]}[fe.id],Bs;function m_(n){let e=new Fe(1700,1700,900,160,1,!0,-1.2,2.6);Bs=new Q(e,new ht({uniforms:{uT:{value:0},uI:{value:0},uC1:{value:new re(...Tp[1])},uC2:{value:new re(...Tp[2])}},vertexShader:`uniform float uT; varying vec2 vUv;
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
      }`,transparent:!0,blending:He,depthWrite:!1,side:bt,fog:!1})),Bs.position.y=700,Bs.rotation.y=2.2,Bs.frustumCulled=!1,Bs.renderOrder=-8,n.add(Bs)}var g_=Wl(.36,.42,.62),v_=Wl(.75,.65,.55),Fl=new re,Sv=new re,In=new S;function Av(n){wr=new ht({uniforms:{uTop:{value:new re},uHor:{value:new re},uSunDir:{value:new S(0,1,0)},uSunCol:{value:new re(1,.95,.85)},uHalo:{value:new re},uSunVis:{value:1}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`
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
      }`,side:Dn,depthWrite:!1}),Bl=new Q(new Be(4e3,32,16),wr),Bl.frustumCulled=!1,Bl.renderOrder=-10,n.add(Bl),m_(n);let e=new Rt,t=[],i=[];for(let o=0;o<2600;o++){let a=Math.random()*2-1,l=Math.random()*Math.PI*2,c=Math.sqrt(1-a*a);if(a<-.05)continue;t.push(c*Math.cos(l)*3500,a*3500,c*Math.sin(l)*3500);let d=.35+Math.random()*.45,u=Math.random();i.push(d*(u>.8?1:.85),d*.9,d*(u<.2?1:.95))}t.push(-1800,1500,-2400),i.push(.5,.75,1.4),e.setAttribute("position",new nt(t,3)),e.setAttribute("color",new nt(i,3)),va=new Si(e,new hi({size:3,map:Nn(),sizeAttenuation:!1,vertexColors:!0,transparent:!0,depthWrite:!1,fog:!1})),va.frustumCulled=!1,va.renderOrder=-9,n.add(va);let s=new ve({color:9076080,roughness:1,fog:!1,flatShading:!0});if(Gl=new Q(new Un(60,1),s),Gl.scale.set(1.3,.9,1),Sp=new Q(new Un(24,1),s),fe.extras==="moons"&&n.add(Gl,Sp),fe.extras==="jupiter"){let o=document.createElement("canvas");o.width=512,o.height=256;let a=o.getContext("2d"),l=["#e8d8c0","#c89a70","#f0e6d4","#b07850","#e0c8a8","#9a6a48","#efe2cc","#c8a07a","#e6d6bc"];for(let p=0;p<256;p++)a.fillStyle=l[Math.floor(p/256*l.length*2+Math.sin(p*.3)*.6)%l.length],a.fillRect(0,p,512,1);a.globalAlpha=.25;for(let p=0;p<400;p++)a.fillStyle=l[p%l.length],a.fillRect(Math.random()*512,Math.random()*256,30+Math.random()*80,2);a.globalAlpha=1,a.fillStyle="#b8583a",a.beginPath(),a.ellipse(330,165,34,16,0,0,Math.PI*2),a.fill();let c=new Zt(o);c.colorSpace=_t;let d=new Q(new Be(900,48,32),new ke({map:c,fog:!1}));d.rotation.z=.06;let u=new Q(new Be(905,48,32,Math.PI*.55,Math.PI),new ke({color:0,transparent:!0,opacity:.55,fog:!1}));d.add(u);let f=new Q(new Un(30,2),new ke({color:15257712,fog:!1}));n.add(d,f),zn={jup:d,io:f}}if(fe.extras==="twinsuns"){let o=new wi(new ci({map:Nn(),color:16751200,transparent:!0,blending:He,depthWrite:!1,fog:!1}));o.scale.set(500,500,1);let a=new Q(new nn(700,1100,64),new ke({color:14207231,transparent:!0,opacity:.35,side:bt,fog:!1,depthWrite:!1})),l=new Q(new Be(420,32,24),new ke({color:9075408,fog:!1}));l.add(a),a.rotation.x=1.2,n.add(o,l),zn={s2:o,gas:l};let c=document.createElement("canvas");c.width=c.height=512;let d=c.getContext("2d"),u=d.createRadialGradient(256,256,120,256,256,256);u.addColorStop(0,"rgba(255,250,230,0)"),u.addColorStop(.08,"rgba(255,245,220,1)"),u.addColorStop(.3,"rgba(255,190,110,.85)"),u.addColorStop(.7,"rgba(200,90,40,.35)"),u.addColorStop(1,"rgba(120,40,20,0)"),d.fillStyle=u,d.fillRect(0,0,512,512),d.globalCompositeOperation="destination-out";for(let b=0;b<40;b++)d.strokeStyle=`rgba(0,0,0,${.1+Math.random()*.2})`,d.lineWidth=1+Math.random()*3,d.beginPath(),d.arc(256,256,130+Math.random()*120,0,Math.PI*2),d.stroke();let f=new Zt(c),p=new ce,g=b=>new ke({map:f,transparent:!0,opacity:b,blending:He,depthWrite:!1,side:bt,fog:!1}),x=new Q(new nn(150,560,96,1),g(.9));x.userData.op=.9,x.rotation.x=-1.35,p.add(x);let v=new Q(new nn(150,330,96,1),g(.75));v.userData.op=.75,p.add(v);let m=new Q(new di(150,64),new ke({color:0,fog:!1,transparent:!0,depthWrite:!1}));m.userData.op=1,m.position.z=1,p.add(m);let E=new Q(new nn(150,158,96),new ke({color:16770752,transparent:!0,opacity:.9,blending:He,fog:!1,depthWrite:!1}));E.userData.op=.9,E.position.z=2,p.add(E),p.renderOrder=-7,n.add(p),zn.bh=p,zn.disk=x}fi=new ls(16773341,3),fi.castShadow=!0,fi.shadow.mapSize.set(h.hiShadows?4096:2048,h.hiShadows?4096:2048);let r=fi.shadow.camera;r.left=-70,r.right=70,r.top=70,r.bottom=-70,r.near=1,r.far=400,fi.shadow.bias=-4e-4,fi.shadow.normalBias=.6,n.add(fi,fi.target),p_(n),xa=new vr(16765616,5909530,1),wp=new Th(4213360,.3),n.add(xa,wp),n.fog=new mh(14196848,.0016),x_(n),_p=new as,bv=new Q(new Be(400,32,16),wr),_p.add(bv),Tv=new ia(h.renderer)}var Sr=null;function x_(n){if(fe.id==="europa")return;let e=new ht({uniforms:{uT:{value:0},uHor:{value:new re},uSunC:{value:new re},uSunD:{value:new S},uNight:{value:0},uStorm:{value:0},uCov:{value:fe.id==="kepler"?.58:.5},uTint:{value:new re(fe.id==="kepler"?16777215:15914688)}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:`uniform float uT, uNight, uStorm, uCov; uniform vec3 uHor, uSunC, uSunD, uTint; varying vec3 vD;
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
      }`,transparent:!0,depthWrite:!1,fog:!1,side:Dn});Sr=new Q(new Be(3e3,48,24),e),Sr.frustumCulled=!1,Sr.renderOrder=-2,Sr.userData.noAO=!0,n.add(Sr)}function ya(n,e){let t=h.time,i=t.t;t.t+=n/u_*(t.elevation<0?1.5:1),t.t>=1&&(t.t-=1),i<.25&&t.t>=.25&&(t.day++,t.dawn=!0);let s=(t.t-.25)*Math.PI*2;In.set(Math.cos(s),Math.sin(s),.35).normalize();let r=In.y;t.elevation=r,t.night=Wn(.05,-.18,r);let o=Wn(0,1,h.terraform),a=h.storm,l=Wn(-.05,.35,r),c=1-Math.abs(Ji((r-.05)/.3,-1,1));Fl.copy(hs.dayTop).lerp(hs.earthTop,o),Sv.copy(hs.dayHor).lerp(hs.earthHor,o);let d=wr.uniforms.uTop.value,u=wr.uniforms.uHor.value;d.copy(hs.nightTop).lerp(hs.setTop,Wn(-.25,0,r)).lerp(Fl,l),u.copy(hs.nightHor).lerp(hs.setHor,Wn(-.25,0,r)).lerp(Sv,l),a>0&&(Fl.copy(hs.stormHor).multiplyScalar(.25+.75*(1-t.night)),d.lerp(Fl,a*.85),u.lerp(Fl,a)),wr.uniforms.uHalo.value.copy(hs.halo).multiplyScalar(Ji(c,0,1)*(1-o*.5)*(1-a)),wr.uniforms.uSunDir.value.copy(In),wr.uniforms.uSunVis.value=Wn(-.08,.02,r)*(1-a*.85),Bl.position.copy(e),va.position.copy(e),Bs.position.set(e.x,e.y+700,e.z),Bs.material.uniforms.uT.value=performance.now()*.001,Bs.material.uniforms.uI.value=Tp[0]*t.night*(1-a)*(.75+.25*Math.sin(performance.now()*7e-5+t.day)),va.material.opacity=Math.max(t.night,fe.id==="europa"?.85:0)*(1-a);let f=h.time.t*Math.PI*6,p=-h.time.t*Math.PI*2+2;if(Gl.position.set(e.x+Math.cos(f)*2600,e.y+Math.sin(f)*1700+300,e.z-1300),Gl.lookAt(e),Sp.position.set(e.x+Math.cos(p)*2800,e.y+Math.sin(p)*2200,e.z+1600),zn.jup){zn.jup.position.set(e.x-1800,e.y+650,e.z-2600),zn.jup.rotation.y+=4e-5;let v=h.time.t*Math.PI*8;zn.io.position.set(e.x-1800+Math.cos(v)*1400,e.y+650+Math.sin(v)*300,e.z-2600+Math.sin(v)*1400)}if(Vl){Vl.position.copy(e).addScaledVector(In,3e3);let v=Wn(-.03,.12,r)*(1-a)*(fe.id==="europa"?.6:1);for(let m of _v)m.color.copy(m.base).multiplyScalar(v)}zn.bh&&(zn.bh.position.set(e.x-2200,e.y+900,e.z+1900),zn.bh.lookAt(e),zn.disk.rotation.z+=n*.05,zn.bh.children.forEach(v=>{v.material&&v.material.opacity!==void 0&&v.userData.op&&(v.material.opacity=v.userData.op*(.45+t.night*.55))})),zn.s2&&(zn.s2.position.copy(e).addScaledVector(new S(In.x*.8-.3,In.y*.9-.05,In.z+.4).normalize(),3e3),zn.s2.material.opacity=Wn(-.2,.05,r)*.9,zn.gas.position.set(e.x+1600,e.y+1100,e.z+2400));let g=Wn(-.04,.25,r);if(fi.intensity=3*g*(1-a*.6),fi.color.setRGB(1,Nt(.7,.93,g),Nt(.55,.85,g)),fi.position.copy(e).addScaledVector(In,200),fi.target.position.copy(e),xa.intensity=Nt(.45,.8,l)*(1-a*.3),xa.color.copy(u).lerp(d,.3).lerp(g_,t.night*.85),fe.id==="europa"&&xa.color.lerp(v_,.6),xa.groundColor.setRGB(Nt(.05,.38,l),Nt(.04,.18,l),Nt(.05,.1,l)),wp.intensity=Nt(.8,.2,l),h.scene.fog.color.copy(u),Sr){let v=Sr.material.uniforms;Sr.position.copy(e),v.uT.value+=n*60,v.uHor.value.copy(u),v.uSunC.value.copy(fi.color).multiplyScalar(Math.max(.15,g)),v.uSunD.value.copy(In),v.uNight.value=t.night,v.uStorm.value=a}h.scene.fog.density=Nt(Nt(.0016,.0032,t.night),.03,a)*(fe.id==="europa"?.55:1);let x=performance.now();if(x-wv>4e3||!Wh){wv=x;let v=Wh;Wh=Tv.fromScene(_p,.04,1,1e3),h.scene.environment=Wh.texture,h.scene.environmentIntensity=Nt(.85,.35,t.night),v&&v.dispose()}h.renderer.toneMappingExposure=Nt(1,1.4,t.night)}function Ap(){let n=Math.floor(h.time.t*24.66),e=Math.floor((h.time.t*24.66-n)*60);return`${fe.name} \xB7 \u7B2C ${h.time.day} \u65E5 \xB7 ${String(n).padStart(2,"0")}:${String(e).padStart(2,"0")}`}var cn=1400,Ge=cn/2,Tr=400,Cp=cn/Tr,ds=Tr+1,ql=Hl(fe.seed),Xl=Hl(fe.seed*7+3),Rv=Hl(fe.seed+42),Gs=[],us,_r,qh,ro,Xh;function y_(){let n=ui(fe.seed);for(Gs.push({x:150,z:-120,r:70,depth:16,rim:6});Gs.length<fe.craters;){let e=(n()-.5)*(cn-260),t=(n()-.5)*(cn-260);if(Math.hypot(e,t)<130)continue;let i=10+Math.pow(n(),2.2)*85;Gs.push({x:e,z:t,r:i,depth:i*(.18+n()*.12),rim:i*(.05+n()*.06)})}}var M_=0;function Cv(n,e){let t=bp(ql,n*.0016,e*.0016,5)*fe.hills,i=1-Math.abs(Xl(n*.0042,e*.0042));t+=i*i*i*fe.ridges,t+=bp(Rv,n*.025,e*.025,3)*fe.detail;for(let s of Gs){let r=n-s.x,o=e-s.z,a=r*r+o*o;if(a>s.r*s.r*4)continue;let l=Math.sqrt(a)/s.r;l<1&&(t-=s.depth*(1-l*l)),t+=s.rim*Math.exp(-(((l-1)/.28)**2))}return t}var Pv=0;function E_(n,e){let t=Cv(n,e)-Pv,i=Math.hypot(n,e);t=Nt(M_+Rv(n*.02,e*.02)*.6,t,Wn(45,150,i));let s=Math.max(Math.abs(n),Math.abs(e)),r=Ge-200;if(s>r){let o=(s-r)/200,a=0,l=1,c=.0035;for(let d=0;d<3;d++){let u=1-Math.abs(Xl(n*c,e*c));a+=u*u*l,l*=.45,c*=2}t+=o*o*(110+a*70)*(.75+.25*ql(n*.008,e*.008))}return t}function ue(n,e){let t=Ji((n+Ge)/Cp,0,Tr-.001),i=Ji((e+Ge)/Cp,0,Tr-.001),s=Math.floor(t),r=Math.floor(i),o=t-s,a=i-r,l=us[r*ds+s],c=us[r*ds+s+1],d=us[(r+1)*ds+s],u=us[(r+1)*ds+s+1];return o+a<1?l+(c-l)*o+(d-l)*a:u+(d-u)*(1-o)+(c-u)*(1-a)}function oo(n,e,t=2){let i=ue(n,e);return Math.max(Math.abs(ue(n+t,e)-i),Math.abs(ue(n-t,e)-i),Math.abs(ue(n,e+t)-i),Math.abs(ue(n,e-t)-i))/t}function Yh(n,e,t=60){let i=0;for(let s=.2;s<=t;s+=.25){let r=n.x+e.x*s,o=n.y+e.y*s,a=n.z+e.z*s;if(o<ue(r,a)){let l=i,c=s;for(let d=0;d<8;d++){let u=(l+c)/2;n.y+e.y*u<ue(n.x+e.x*u,n.z+e.z*u)?c=u:l=u}return{dist:c,point:new S(n.x+e.x*c,n.y+e.y*c,n.z+e.z*c)}}i=s}return null}function Iv(n){y_(),Pv=Cv(0,0),us=new Float32Array(ds*ds),ro=new Gn(cn,cn,Tr,Tr),ro.rotateX(-Math.PI/2);let e=ro.attributes.position;for(let s=0;s<e.count;s++){let r=E_(e.getX(s),e.getZ(s));e.setY(s,r),us[s]=r}_r=new Float32Array(e.count*3);let t=new re;for(let s=0;s<e.count;s++){let r=e.getX(s),o=e.getZ(s),a=us[s],l=s%ds,c=s/ds|0,d=us[c*ds+Math.min(l+1,Tr)]-a,u=us[Math.min(c+1,Tr)*ds+l]-a,f=Ji(Math.hypot(d,u)/Cp*1.4,0,1),p=ql(r*.012,o*.012)*.5+.5,g=Xl(r*.08,o*.08)*.5+.5,x=fe.ground.a,v=fe.ground.b,m=fe.ground.steep,E=fe.ground.low,b=Nt(x[0],v[0],p),M=Nt(x[1],v[1],p),L=Nt(x[2],v[2],p);b*=.9+g*.18,M*=.9+g*.16,L*=.9+g*.14,b=Nt(b,m[0],f),M=Nt(M,m[1],f),L=Nt(L,m[2],f);let R=Wn(-4,-16,a);if(b=Nt(b,E[0],R*.6),M=Nt(M,E[1],R*.6),L=Nt(L,E[2],R*.6),fe.id==="europa"){let P=Math.abs(Xl(r*.006,o*.006));if(P<.05){let I=1-P/.05;b=Nt(b,.55,I*.7),M=Nt(M,.32,I*.7),L=Nt(L,.24,I*.7)}}t.setRGB(b,M,L,_t),_r[s*3]=t.r,_r[s*3+1]=t.g,_r[s*3+2]=t.b}qh=new an(_r.slice(),3),ro.setAttribute("color",qh),ro.computeVertexNormals();let i=new ve({vertexColors:!0,roughness:.93,metalness:0});return i.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},Xh=new Q(ro,i),Xh.receiveShadow=!0,n.add(Xh),b_(n),Xh}function b_(n){let e=ui(99),t=new Ti(1,0),i=t.attributes.position;for(let p=0;p<i.count;p++){let g=.75+e()*.5;i.setXYZ(p,i.getX(p)*g,i.getY(p)*g*.8,i.getZ(p)*g)}t.computeVertexNormals();let s=2600,r=new mr(t,new ve({color:fe.rock,roughness:fe.id==="europa"?.35:.92,flatShading:!0,map:cs.map,bumpMap:cs.bumpMap,bumpScale:3}),s);r.castShadow=!0,r.receiveShadow=!0;let o=new vt,a=new mn,l=new S,c=new S,d=new Cn,u=new re,f=0;for(;f<s;){let p=(e()-.5)*(cn-120),g=(e()-.5)*(cn-120);if(Math.hypot(p,g)<22||ql(p*.01,g*.01)<-.1&&e()<.7)continue;let m=e()<.06?1.8+e()*2.5:.2+Math.pow(e(),2)*1.2;l.set(m*(.8+e()*.6),m*(.6+e()*.5),m*(.8+e()*.6)),d.set(e()*.5,e()*Math.PI*2,e()*.5),a.setFromEuler(d),c.set(p,ue(p,g)+l.y*.25,g),o.compose(c,a,l),r.setMatrixAt(f,o),u.setHSL(fe.rockHSL[0]+e()*.02,fe.rockHSL[1]+e()*.2,fe.rockHSL[2]+e()*.14),r.setColorAt(f,u),m>1&&h.colliders.add({x:p,z:g,r:Math.max(l.x,l.z)*.85,kind:"rock"}),f++}n.add(r),fe.id==="kepler"&&__(n,e)}var w_=new re().setRGB(.3,.46,.2,_t),S_=new re().setRGB(.46,.5,.26,_t),Rp=new re().setRGB(.2,.38,.52,_t);function Pp(n,e){let t=ro.attributes.position,i=qh.array,s=60+e*520;for(let r=0;r<t.count;r++){let o=t.getX(r),a=t.getZ(r),l=us[r],c=0;for(let p of n){let g=Math.hypot(o-p.x,a-p.z);c=Math.max(c,Wn(s,s*.55,g))}let d=_r[r*3],u=_r[r*3+1],f=_r[r*3+2];if(c>0){let p=Xl(o*.03,a*.03)*.5+.5,g=c*Ji(p*1.4-.1,0,1)*Ji(e*1.5,0,1),x=p>.6?w_:S_;if(d=Nt(d,x.r,g),u=Nt(u,x.g,g),f=Nt(f,x.b,g),l<-9&&e>.5){let v=c*Wn(-9,-13,l)*Wn(.5,1,e);d=Nt(d,Rp.r,v),u=Nt(u,Rp.g,v),f=Nt(f,Rp.b,v)}}i[r*3]=d,i[r*3+1]=u,i[r*3+2]=f}qh.needsUpdate=!0}function Lv(n=350){let e=document.createElement("canvas");e.width=e.height=n;let t=e.getContext("2d"),i=t.createImageData(n,n);for(let s=0;s<n;s++)for(let r=0;r<n;r++){let o=(r/n-.5)*cn,a=(s/n-.5)*cn,l=ue(o,a),c=ue(o+4,a+4)-l,d=Ji(.55+l*.006-c*.08,.15,1),u=(s*n+r)*4,f=fe.ground.b;i.data[u]=255*f[0]*d,i.data[u+1]=255*f[1]*d,i.data[u+2]=255*f[2]*d,i.data[u+3]=255}return t.putImageData(i,0,0),e}var Ip=new ve({color:8010400,emissive:4259776,emissiveIntensity:.1,roughness:.6,flatShading:!0});function __(n,e){let t=new Fe(.25,.45,1,6);t.translate(0,.5,0);let i=new Be(1,8,5,0,Math.PI*2,0,Math.PI/2),s=900,r=new mr(t,new ve({color:14209208,roughness:.8,flatShading:!0}),s),o=new mr(i,Ip,s);r.castShadow=o.castShadow=!0;let a=new vt,l=new mn,c=new S,d=new S,u=new re,f=0;for(;f<s;){let p=(e()-.5)*(cn-300),g=(e()-.5)*(cn-300);if(Math.hypot(p,g)<50||ql(p*.008,g*.008)<.05||oo(p,g,2)>.5)continue;let x=3+e()*9,v=1.5+e()*3,m=ue(p,g);c.set(1+x*.05,x,1+x*.05),d.set(p,m-.2,g),l.identity(),a.compose(d,l,c),r.setMatrixAt(f,a),c.set(v,v*.5,v),d.set(p,m+x-.3,g),a.compose(d,l,c),o.setMatrixAt(f,a),u.setHSL(.72+e()*.2,.6,.4+e()*.2),o.setColorAt(f,u),h.colliders.add({x:p,z:g,r:.6,kind:"flora"}),f++}n.add(r,o)}var Dv=[];function Uv(n){let e=(i,s,r,o,a,l)=>{let c=Hl(fe.seed*13+o),d=720,u=[],f=[],p=[];for(let m=0;m<=d;m++){let E=m/d*Math.PI*2,b=Math.cos(E),M=Math.sin(E),L=0,R=1,P=1.6;for(let _=0;_<5;_++){let w=1-Math.abs(c(b*P+9,M*P-4));L+=w*w*R,R*=.5,P*=2.2}let I=s+(r-s)*Math.min(1,L/1.4);if(u.push(b*i,-60,M*i,b*i,I*.45,M*i,b*i,I,M*i),f.push(0,.55,1),m<d){let _=m*3;for(let w=0;w<2;w++)p.push(_+w,_+w+3,_+w+1,_+w+1,_+w+3,_+w+4)}}let g=new Rt;g.setAttribute("position",new nt(u,3)),g.setAttribute("k",new nt(f,1)),g.setIndex(p);let x=new ht({uniforms:{uFog:{value:new re},uTint:{value:new re(a)},uD:{value:l},uSky:{value:new re}},vertexShader:"attribute float k; varying float vK; void main(){ vK = k; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 uFog, uTint; uniform float uD; varying float vK; void main(){ float m = uD * smoothstep(0.0, 1.0, vK); vec3 t = uFog * uTint * 1.7; gl_FragColor = vec4(mix(uFog, t, m), 1.0); }",fog:!1,depthWrite:!0}),v=new Q(g,x);v.frustumCulled=!1,v.renderOrder=-1,v.userData.noAO=!0,n.add(v),Dv.push(v)},t=new re(fe.id==="europa"?9083563:fe.id==="kepler"?5925450:9062960);e(2600,220,700,2,t.clone().multiplyScalar(.9),.32),e(1800,120,430,5,t,.5)}function Hv(n,e){for(let t of Dv)t.position.set(n.x,0,n.z),t.material.uniforms.uFog.value.copy(e)}var jh=6e3,fs=60,Ar,Yl,Dp,Lp=new S(1e9,0,0),Nv=new vt,zv=new mn,kv=new S,Ov=new S,Fv=new Cn;function Bv(){let n=new Ti(.12,0),e=new ve({color:16777215,roughness:.95,flatShading:!0,map:cs.map});Ar=new mr(n,e,jh),Ar.receiveShadow=!0,Ar.frustumCulled=!1;let t=ui(31);Yl=new Float32Array(jh*2),Dp=[];let i=new re;for(let s=0;s<jh;s++){Yl[s*2]=t()*fs*2,Yl[s*2+1]=t()*fs*2;let r=Math.pow(t(),3);Dp.push([.4+r*3.2,.25+t()*.6,.4+r*3,t()*6.28,t()*.6]),i.setHSL(fe.rockHSL[0]+t()*.03,fe.rockHSL[1]*(.5+t()*.5),Math.min(.75,fe.rockHSL[2]*(1.2+t()*.9))),Ar.setColorAt(s,i)}h.scene.add(Ar)}function Gv(){if(!Ar)return;let n=h.player.pos;if(Math.abs(n.x-Lp.x)<3&&Math.abs(n.z-Lp.z)<3)return;Lp.copy(n);let e=n.x-fs,t=n.z-fs;for(let i=0;i<jh;i++){let s=e+((Yl[i*2]-e)%(fs*2)+fs*2)%(fs*2),r=t+((Yl[i*2+1]-t)%(fs*2)+fs*2)%(fs*2),o=Dp[i];kv.set(o[0],o[0]*o[1],o[2]),Fv.set(o[4],o[3],0),zv.setFromEuler(Fv),Ov.set(s,ue(s,r)+.02,r),Nv.compose(Ov,zv,kv),Ar.setMatrixAt(i,Nv)}Ar.instanceMatrix.needsUpdate=!0}var Ma=[],T_=new Ai(.22,0),jl=class{constructor(e,t,i,s){this.max=t,this.n=0,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*4),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.base=new Float32Array(t*4),this.grav=new Float32Array(t),this.drag=new Float32Array(t);let r=new Rt;this.pa=new an(this.pos,3),this.ca=new an(this.col,4),this.pa.setUsage(fp),this.ca.setUsage(fp),r.setAttribute("position",this.pa),r.setAttribute("color",this.ca),this.mat=new hi({size:s,map:Nn(),vertexColors:!0,transparent:!0,depthWrite:!1,blending:i?He:li,sizeAttenuation:!0}),this.points=new Si(r,this.mat),this.points.frustumCulled=!1,e.add(this.points)}emit(e,t,i,s,r,o,a,l,c,d,u,f=0,p=0){let g=this.n<this.max?this.n++:Math.floor(Math.random()*this.max);this.pos[g*3]=e,this.pos[g*3+1]=t,this.pos[g*3+2]=i,this.vel[g*3]=s,this.vel[g*3+1]=r,this.vel[g*3+2]=o,this.base[g*4]=a,this.base[g*4+1]=l,this.base[g*4+2]=c,this.base[g*4+3]=d,this.life[g]=u,this.maxLife[g]=u,this.grav[g]=f,this.drag[g]=p}update(e){let t=this.n;for(let i=0;i<t;i++){if(this.life[i]-=e,this.life[i]<=0){if(t--,i!==t){for(let o=0;o<3;o++)this.pos[i*3+o]=this.pos[t*3+o],this.vel[i*3+o]=this.vel[t*3+o];for(let o=0;o<4;o++)this.base[i*4+o]=this.base[t*4+o];this.life[i]=this.life[t],this.maxLife[i]=this.maxLife[t],this.grav[i]=this.grav[t],this.drag[i]=this.drag[t],i--}continue}let s=1-this.drag[i]*e;this.vel[i*3]*=s,this.vel[i*3+2]*=s,this.vel[i*3+1]=this.vel[i*3+1]*s-this.grav[i]*e,this.pos[i*3]+=this.vel[i*3]*e,this.pos[i*3+1]+=this.vel[i*3+1]*e,this.pos[i*3+2]+=this.vel[i*3+2]*e;let r=this.life[i]/this.maxLife[i];this.col[i*4]=this.base[i*4],this.col[i*4+1]=this.base[i*4+1],this.col[i*4+2]=this.base[i*4+2],this.col[i*4+3]=this.base[i*4+3]*Math.min(1,r*2.5)}this.n=t,this.points.geometry.setDrawRange(0,t),this.pa.needsUpdate=!0,this.ca.needsUpdate=!0}},ao,Kh,lo,Ea,Up;function Vv(n){ao=new jl(n,3e3,!0,.35),Up=new jl(n,4e3,!0,1.3),Kh=new jl(n,2500,!1,1.6);let e=new Rt,t=new Float32Array(1500*3);for(let r=0;r<t.length;r++)t[r]=(Math.random()-.5)*80;e.setAttribute("position",new an(t,3)),lo=new Si(e,new hi({size:.25,map:Nn(),color:16765088,transparent:!0,opacity:.5,depthWrite:!1})),lo.frustumCulled=!1,n.add(lo);let i=new Rt,s=new Float32Array(3e3*3);for(let r=0;r<s.length;r++)s[r]=(Math.random()-.5)*70;i.setAttribute("position",new an(s,3)),Ea=new Si(i,new hi({size:.18,map:Nn(),color:12574975,transparent:!0,opacity:0,depthWrite:!1})),Ea.frustumCulled=!1,n.add(Ea)}var le={debris(n,e,t=8,i=7,s=1){for(let r=0;r<t;r++){if(Ma.length>160){let d=Ma.shift();h.scene.remove(d.m)}let o=new Q(T_,e);o.castShadow=!0;let a=s*(.5+Math.random()*.9);o.scale.set(a,a*(1+Math.random()),a),o.position.copy(n),h.scene.add(o);let l=Math.random()*Math.PI*2,c=.4+Math.random()*.8;Ma.push({m:o,v:new S(Math.cos(l)*i*(1-c*.5),i*c,Math.sin(l)*i*(1-c*.5)),w:new S(Math.random()*10,Math.random()*10,Math.random()*10),life:3+Math.random()*2,s:a})}},spark(n,e=[1,.6,.2],t=6,i=4,s=.5){for(let r=0;r<t;r++)ao.emit(n.x,n.y,n.z,(Math.random()-.5)*i,Math.random()*i,(Math.random()-.5)*i,e[0],e[1],e[2],1,s*(.5+Math.random()),6,1)},burst(n,e=[1,.5,.2],t=40,i=9){for(let s=0;s<t;s++){let r=Math.random()*2-1,o=Math.random()*6.283,a=Math.sqrt(1-r*r),l=i*(.4+Math.random()*.6);ao.emit(n.x,n.y,n.z,a*Math.cos(o)*l,r*l,a*Math.sin(o)*l,e[0],e[1],e[2],1,.4+Math.random()*.6,4,2)}},dustPuff(n,e=10,t=2,i=[.72,.45,.3]){for(let s=0;s<e;s++)Kh.emit(n.x+(Math.random()-.5)*t,n.y+Math.random()*.5,n.z+(Math.random()-.5)*t,(Math.random()-.5)*3,Math.random()*1.5,(Math.random()-.5)*3,i[0],i[1],i[2],.55,1.2+Math.random(),-.2,1.5)},ring(n,e,t=60,i=[.72,.45,.3]){for(let s=0;s<t;s++){let r=s/t*6.283,o=6+Math.random()*6;Kh.emit(n.x+Math.cos(r)*e,n.y+.4,n.z+Math.sin(r)*e,Math.cos(r)*o,.5+Math.random(),Math.sin(r)*o,i[0],i[1],i[2],.6,1.5+Math.random(),-.1,1.2)}},firework(n,e,t,i,s){Up.emit(n.x,n.y,n.z,e,t,i,s[0]*1.6,s[1]*1.6,s[2]*1.6,1,1.6+Math.random()*.8,3,1.4)},trail(n,e,t=1){ao.emit(n.x,n.y,n.z,(Math.random()-.5)*.4,(Math.random()-.5)*.4,(Math.random()-.5)*.4,e[0]*t,e[1]*t,e[2]*t,1,.18,0,0)},flame(n,e=1){ao.emit(n.x+(Math.random()-.5)*.6,n.y,n.z+(Math.random()-.5)*.6,(Math.random()-.5)*2,-6*e-Math.random()*6,(Math.random()-.5)*2,1,.55,.2,1,.35,0,0)},rise(n,e,t=6){ao.emit(n.x+(Math.random()-.5)*t,n.y,n.z+(Math.random()-.5)*t,0,6+Math.random()*6,0,e[0],e[1],e[2],1,2.5,-.5,0)}},Zh=0;function co(n,e){ao.update(n),Kh.update(n),Up.update(n);for(let o=Ma.length-1;o>=0;o--){let a=Ma[o];a.life-=n,a.v.y-=9*n,a.m.position.addScaledVector(a.v,n),a.m.rotation.x+=a.w.x*n,a.m.rotation.y+=a.w.y*n,a.m.rotation.z+=a.w.z*n;let l=ue(a.m.position.x,a.m.position.z)+.1;a.m.position.y<l&&(a.m.position.y=l,a.v.y=Math.abs(a.v.y)*.35,a.v.x*=.6,a.v.z*=.6,a.w.multiplyScalar(.5)),a.life<1&&a.m.scale.setScalar(Math.max(.001,a.s*a.life)),a.life<=0&&(h.scene.remove(a.m),Ma.splice(o,1))}let t=h.storm,i=lo.geometry.attributes.position,s=i.array,r=1+t*26;for(let o=0;o<s.length;o+=3){s[o]+=r*n,s[o+1]+=Math.sin(o+performance.now()*5e-4)*n*.2-t*n*1.5;let a=40;s[o]-e.x>a&&(s[o]-=2*a),s[o]-e.x<-a&&(s[o]+=2*a),s[o+1]-e.y>a/2&&(s[o+1]-=a),s[o+1]-e.y<-a/2&&(s[o+1]+=a),s[o+2]-e.z>a&&(s[o+2]-=2*a),s[o+2]-e.z<-a&&(s[o+2]+=2*a)}if(i.needsUpdate=!0,lo.material.size=.25+t*.3,lo.material.opacity=.3+t*.25,lo.material.color.setRGB(1,.8-h.time.night*.4,.62-h.time.night*.3),Zh+=((h.raining?1:0)-Zh)*n*.5,Ea.material.opacity=Zh*.6,Zh>.01){let o=Ea.geometry.attributes.position.array;for(let a=0;a<o.length;a+=3)o[a+1]-=22*n,o[a]+=2*n,o[a+1]<e.y-20&&(o[a+1]+=40),o[a]-e.x>35&&(o[a]-=70),o[a]-e.x<-35&&(o[a]+=70),o[a+2]-e.z>35&&(o[a+2]-=70),o[a+2]-e.z<-35&&(o[a+2]+=70);Ea.geometry.attributes.position.needsUpdate=!0}}var Jh=null,_e,Vs,Rr,ps,Zl,Kl,Qh,Wv,Xv,Jl,Ql,Hp,qv,Yv={x:0,z:0};function A_(n,e){let t=Math.floor(_e.sampleRate*n),i=_e.createBuffer(2,t,_e.sampleRate);for(let s=0;s<2;s++){let r=i.getChannelData(s);for(let o=0;o<t;o++){let a=o/t;r[o]=(Math.random()*2-1)*Math.pow(1-a,e)*(a<.01?a*100:1)}}return i}function jv(n){let e=new Float32Array(n.length+1),t=new Float32Array(n.length+1);return n.forEach((i,s)=>{t[s+1]=i}),_e.createPeriodicWave(e,t)}var Pi={next:0,bar:0,tension:0,night:0,storm:0,calm:1,arp:0,drum:0},Zv=[[57,60,64],[53,57,60],[48,55,60,64],[55,59,62],[57,60,64],[53,57,60,65],[50,57,62,65],[52,56,59,64]],$h=n=>440*Math.pow(2,(n-69)/12),ms=4.2,X={enabled:!0,init(){if(_e){_e.resume();return}try{_e=new(window.AudioContext||window.webkitAudioContext)}catch{return}Rr=_e.createDynamicsCompressor(),Rr.threshold.value=-16,Rr.knee.value=12,Rr.ratio.value=4,Rr.attack.value=.004,Rr.release.value=.25,Vs=_e.createGain(),Vs.gain.value=.75,Vs.connect(Rr),Rr.connect(_e.destination),Kl=_e.createConvolver(),Kl.buffer=A_(4.5,2.6);let n=_e.createGain();n.gain.value=.55,Kl.connect(n),n.connect(Vs),Qh=_e.createGain(),Qh.gain.value=.3,Qh.connect(Kl),ps=_e.createGain(),ps.gain.value=.85,ps.connect(Vs),ps.connect(Qh),Zl=_e.createGain(),Zl.gain.value=.3;let e=_e.createGain();e.gain.value=.55,Zl.connect(e),e.connect(Vs);let t=_e.createGain();t.gain.value=.9,Zl.connect(t),t.connect(Kl),Ql=_e.createBuffer(1,_e.sampleRate*2,_e.sampleRate);let i=Ql.getChannelData(0),s=0;for(let l=0;l<i.length;l++){let c=Math.random()*2-1;s=(s+.02*c)/1.02,i[l]=s*3.5}Hp=jv([1,.55,.32,.22,.08,.12,.03,.06]),qv=jv([1,.2,.08,.03]);let r=(l,c,d)=>{let u=_e.createBufferSource();u.buffer=Ql,u.loop=!0;let f=_e.createBiquadFilter();f.type="bandpass",f.frequency.value=l,f.Q.value=c;let p=_e.createGain();return p.gain.value=d,u.connect(f),f.connect(p),p.connect(Vs),u.start(0,Math.random()*2),[f,p]};[Xv,Wv]=r(400,.6,.12);let[o,a]=r(3200,.4,0);this._sand=a,this._sandF=o,Pi.next=_e.currentTime+.3,setInterval(()=>this.schedule(),200)},setVolume(n){Vs&&(Vs.gain.value=n)},update(n,e){if(!_e)return;let t=_e.currentTime;Wv.gain.setTargetAtTime(.08+n*.55+e*.03,t,.5),Xv.frequency.setTargetAtTime(280+n*520+Math.sin(t*.3)*120,t,.8),this._sand.gain.setTargetAtTime(n*.08,t,.6);let i=0,s=h.player&&h.player.pos;if(s&&h.enemies)for(let r of h.enemies){if(r.dead)continue;let o=Math.hypot(r.pos.x-s.x,r.pos.z-s.z);i=Math.max(i,1-o/70)}Pi.tension+=(i-Pi.tension)*.02,Pi.night=e,Pi.storm=n,s&&(Yv.x=s.x,Yv.z=s.z)},at(n,e=90){if(!_e||!n||!h.camera)return ps;let t=h.camera.position,i=n.x-t.x,s=n.z-t.z,r=Math.hypot(i,s),o=Math.max(0,1-r/e);if(o<=.01)return null;let a=_e.createGain();a.gain.value=o*o;let l=h.player?h.player.yaw:0,c=Math.cos(l)*i-Math.sin(l)*s,d=a;if(_e.createStereoPanner){let u=_e.createStereoPanner();u.pan.value=Math.max(-1,Math.min(1,c/Math.max(4,r)*.9)),a.connect(u),d=u}if(d.connect(ps),r>20){let u=_e.createBiquadFilter();return u.type="lowpass",u.frequency.value=9e3-Math.min(7500,r*90),u.connect(a),setTimeout(()=>{try{u.disconnect(),a.disconnect(),d.disconnect()}catch{}},6e3),u}return setTimeout(()=>{try{a.disconnect(),d.disconnect()}catch{}},6e3),a},tone(n,e,t="sine",i=.3,s=0,r=0,o){if(!_e||o===null)return;let a=_e.currentTime+r,l=_e.createOscillator(),c=_e.createGain();t==="organ"?l.setPeriodicWave(Hp):l.type=t,l.frequency.setValueAtTime(n,a),s&&l.frequency.exponentialRampToValueAtTime(Math.max(20,n*s),a+e),c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(i,a+.008),c.gain.exponentialRampToValueAtTime(1e-4,a+e),l.connect(c),c.connect(o||ps),l.start(a),l.stop(a+e+.05)},noise(n,e=1e3,t=.3,i="lowpass",s=0,r=1,o,a=0){if(!_e||o===null)return;let l=_e.currentTime+s,c=_e.createBufferSource();c.buffer=Ql;let d=_e.createBiquadFilter();d.type=i,d.frequency.setValueAtTime(e,l),d.Q.value=r,a&&d.frequency.exponentialRampToValueAtTime(Math.max(30,e*a),l+n);let u=_e.createGain();u.gain.setValueAtTime(1e-4,l),u.gain.exponentialRampToValueAtTime(t,l+.006),u.gain.exponentialRampToValueAtTime(1e-4,l+n),c.connect(d),d.connect(u),u.connect(o||ps),c.start(l,Math.random()),c.stop(l+n+.05)},thump(n,e,t,i,s=0){this.tone(n,e,"sine",t,.25,s,i)},play(n,e){if(!_e)return;let t=e?this.at(e,n==="boom"||n==="rumble"?260:110):void 0;if(t===null)return;let i=Math.random();switch(n){case"step":this.noise(.09,380+i*260,.1,"lowpass",0,1,t),this.noise(.05,2400+i*800,.025,"bandpass",.01,2,t);break;case"jump":this.noise(.22,600,.12,"bandpass",0,1,t,2.2);break;case"land":this.thump(90,.25,.3,t),this.noise(.3,420,.22,"lowpass",0,1,t);break;case"mine":this.tone(180+i*60,.07,"square",.03,0,0,t),this.noise(.07,2600+i*1500,.06,"bandpass",0,3,t);break;case"pickup":this.tone(988,.12,"sine",.07),this.tone(1480,.16,"sine",.05,0,.05),this.tone(1976,.2,"sine",.025,0,.1);break;case"deplete":this.noise(.6,900,.3,"lowpass",0,1,t,.3),this.thump(140,.5,.25,t),this.tone(330,.6,"triangle",.08,.5,.05,t);break;case"shoot":this.tone(1400,.16,"sawtooth",.07,.18),this.tone(2600,.05,"square",.04,.4),this.noise(.08,4500,.12,"highpass"),this.thump(160,.14,.25);break;case"turret":this.tone(900,.12,"sawtooth",.06,.25,0,t),this.noise(.07,3500,.1,"highpass",0,1,t),this.thump(120,.12,.2,t);break;case"hit":this.noise(.08,2200,.15,"bandpass",0,2,t),this.tone(420,.08,"square",.05,.5,0,t);break;case"kill":this.noise(.7,1600,.25,"bandpass",0,.8,t,.2),this.tone(220,.5,"sawtooth",.08,.3,0,t),this.thump(80,.6,.35,t);break;case"boom":this.thump(70,1.2,.6,t),this.thump(45,1.8,.45,t,.05),this.noise(.35,5e3,.35,"lowpass",0,1,t,.15),this.noise(2.4,600,.3,"lowpass",.05,1,t,.25),this.noise(1.2,2200,.08,"bandpass",.15,1,t,.4);break;case"hurt":this.tone(180,.25,"sawtooth",.12,.5),this.thump(100,.3,.3),this.noise(.2,900,.12,"bandpass",0,2);break;case"place":this.thump(110,.35,.35),this.noise(.5,700,.18,"lowpass",0,1,void 0,.4),[392,523,784].forEach((s,r)=>this.tone(s,.5,"triangle",.08,0,.08+r*.07));break;case"ui":case"click":this.tone(1760,.035,"sine",.05),this.noise(.02,6e3,.03,"highpass");break;case"scan":this.tone(300,1.2,"sine",.1,4),this.tone(600,.9,"triangle",.04,3,.1),this.noise(.8,2e3,.05,"bandpass",0,3,void 0,3);break;case"shutter":this.noise(.05,4e3,.25,"highpass"),this.noise(.09,1500,.15,"bandpass",.07),this.thump(300,.05,.1);break;case"tick":this.tone(2600,.02,"sine",.02);break;case"open":this.noise(.25,800,.05,"bandpass",0,2,void 0,5),this.tone(660,.18,"sine",.04,1.5);break;case"close":this.noise(.2,3e3,.04,"bandpass",0,2,void 0,.25),this.tone(880,.15,"sine",.03,.6);break;case"achv":[523,784,1046,1568].forEach((s,r)=>this.tone(s,1.2,"triangle",.07,0,r*.09)),this.tone(2093,1.6,"sine",.03,0,.36);break;case"deny":this.tone(220,.12,"square",.045),this.tone(165,.18,"square",.045,0,.09);break;case"craft":[523,659,784,1046].forEach((s,r)=>this.tone(s,.35,"triangle",.09,0,r*.07)),this.noise(.3,5e3,.04,"highpass",.25);break;case"radio":this.noise(.15,2500,.1,"bandpass",0,2),this.tone(1200,.05,"sine",.05,0,.12),this.tone(1800,.04,"sine",.03,0,.18);break;case"alarm":for(let s=0;s<2;s++)this.tone(880,.16,"square",.05,.9,s*.36),this.tone(660,.16,"square",.05,.9,s*.36+.18);break;case"objective":[392,523,659,784].forEach((s,r)=>this.tone(s,.8,"organ",.05,0,r*.11));break;case"chapter":[220,330,440,554,659].forEach((s,r)=>this.tone(s,2.6,"organ",.06,0,r*.18)),this.thump(55,2.5,.35);break;case"rumble":this.noise(4,150,.5,"lowpass",0,1,t),this.noise(3,400,.2,"lowpass",.5,1,t),this.thump(40,3,.3,t);break;case"jet":this.noise(.14,900,.09,"bandpass",0,1,t);break;case"night":this.tone(110,3.5,"organ",.06,.8),this.tone(165,3.5,"organ",.04,.8,.3);break;case"wasp":this.tone(1800,.5,"sawtooth",.04,1.8,0,t),this.tone(1830,.5,"square",.025,1.7,0,t);break;case"whoosh":this.noise(.6,400,.12,"bandpass",0,1.5,t,6);break}},engine(n){if(_e&&(n>0||Jh)){if(!Jh){let i=_e.createOscillator(),s=_e.createOscillator(),r=_e.createBiquadFilter(),o=_e.createGain();i.type="sawtooth",s.type="triangle",r.type="lowpass",r.frequency.value=500,o.gain.value=1e-4,i.connect(r),s.connect(r),r.connect(o),o.connect(ps),i.start(),s.start(),Jh={o:i,o2:s,f:r,g:o}}let e=_e.currentTime,t=Jh;t.o.frequency.setTargetAtTime(38+n*70,e,.1),t.o2.frequency.setTargetAtTime(76+n*140,e,.1),t.f.frequency.setTargetAtTime(300+n*900,e,.1),t.g.gain.setTargetAtTime(n>0||h.driving?.03+n*.05:1e-4,e,.15)}},laser(n){if(_e){if(n&&!Jl){let e=_e.createOscillator(),t=_e.createOscillator(),i=_e.createGain(),s=_e.createBiquadFilter(),r=_e.createOscillator(),o=_e.createGain();e.type="sawtooth",e.frequency.value=110,t.type="sawtooth",t.frequency.value=165.7,s.type="bandpass",s.frequency.value=1100,s.Q.value=2.5,i.gain.value=1e-4,r.frequency.value=13,o.gain.value=380,r.connect(o),o.connect(s.frequency);let a=_e.createBufferSource();a.buffer=Ql,a.loop=!0;let l=_e.createBiquadFilter();l.type="highpass",l.frequency.value=5e3;let c=_e.createGain();c.gain.value=.25,a.connect(l),l.connect(c),c.connect(i),i.gain.exponentialRampToValueAtTime(.05,_e.currentTime+.08),e.connect(s),t.connect(s),s.connect(i),i.connect(ps),e.start(),t.start(),r.start(),a.start(),Jl={o:e,o2:t,g:i,lfo:r,hs:a}}else if(!n&&Jl){let e=Jl;Jl=null,e.g.gain.setTargetAtTime(1e-4,_e.currentTime,.04);let t=_e.currentTime+.25;e.o.stop(t),e.o2.stop(t),e.lfo.stop(t),e.hs.stop(t)}}},musicLoop(){},schedule(){if(!(!_e||_e.state!=="running"))for(;Pi.next<_e.currentTime+.6;)this.bar(Pi.next,Pi.bar),Pi.next+=ms,Pi.bar++},bar(n,e){let t=Zv[Math.floor(e/2)%Zv.length],i=e%2===0,s=Pi.night,r=Pi.tension,o=!!h.menuOpen,a=Zl;i&&t.forEach((c,d)=>{let u=_e.createOscillator(),f=_e.createGain(),p=_e.createBiquadFilter();u.setPeriodicWave(d===0?qv:Hp),u.frequency.value=$h(c-12+(d===0?-12:0)),u.detune.value=(Math.random()-.5)*6,p.type="lowpass",p.frequency.value=900+s*500+r*900;let g=(d===0?.075:.04)*(.8+s*.3);f.gain.setValueAtTime(1e-4,n),f.gain.exponentialRampToValueAtTime(g,n+2.6),f.gain.setValueAtTime(g,n+ms*2-1.5),f.gain.exponentialRampToValueAtTime(1e-4,n+ms*2+2.2),u.connect(p),p.connect(f),f.connect(a),u.start(n),u.stop(n+ms*2+2.4)});let l=Math.min(1,s*.9+r*1.2+(e%16>=8?.25:0));if(l>.15&&!o){let c=t.map(u=>u+12).concat([t[0]+24,t[1]+12]),d=ms/8;for(let u=0;u<8;u++){let f=c[[0,1,2,3,2,1,4,2][u]%c.length],p=n+u*d,g=.022*l*(u%2?.7:1),x=_e.createOscillator(),v=_e.createGain();x.type="triangle",x.frequency.value=$h(f),v.gain.setValueAtTime(1e-4,p),v.gain.exponentialRampToValueAtTime(g,p+.01),v.gain.exponentialRampToValueAtTime(1e-4,p+d*1.8),x.connect(v),v.connect(a),x.start(p),x.stop(p+d*2)}}if(s>.5&&!o)for(let c=0;c<4;c++)this.tone(3200,.03,"sine",.012*s,0,n-_e.currentTime+c*ms/4,a);if(r>.2){let c=$h(t[0]-24);for(let d=0;d<16;d++){let u=n+d*ms/16,f=.05*r*(d%4===0?1:.55),p=_e.createOscillator(),g=_e.createGain(),x=_e.createBiquadFilter();p.type="sawtooth",p.frequency.value=c,x.type="lowpass",x.frequency.value=260+r*300,g.gain.setValueAtTime(1e-4,u),g.gain.exponentialRampToValueAtTime(f,u+.008),g.gain.exponentialRampToValueAtTime(1e-4,u+ms/18),p.connect(x),x.connect(g),g.connect(a),p.start(u),p.stop(u+ms/14)}for(let d of[0,2.5,3])if(d===0||r>.5){let u=n-_e.currentTime+d*ms/4;this.tone(70,.9,"sine",.2*r,.5,u,a),this.noise(.3,300,.08*r,"lowpass",u,1,a)}}i&&s<.5&&r<.2&&Math.random()<.55&&[t[t.length-1]+12,t[1]+12,t[2]+12].forEach((d,u)=>{Math.random()<.75&&this.tone($h(d),3,"sine",.018,0,n-_e.currentTime+1.2+u*1.4,a)})}};var $l={iron:new ve({color:6965822,roughness:.4,metalness:.8,flatShading:!0,map:cs.map,bumpMap:cs.bumpMap,bumpScale:4}),ironVein:new ve({color:10246714,roughness:.3,metalness:.9,flatShading:!0,emissive:3806216}),ice:new ve({color:13627135,roughness:.08,metalness:.1,flatShading:!0,transparent:!0,opacity:.9,emissive:1456202}),silicon:new ve({color:15983014,roughness:.15,metalness:.4,flatShading:!0,emissive:2761224}),titanium:new ve({color:10194175,roughness:.1,metalness:.5,flatShading:!0,emissive:5913855,emissiveIntensity:.6}),base:new ve({color:8276790,roughness:.95,flatShading:!0,map:cs.map,bumpMap:cs.bumpMap,bumpScale:4})},Kv={iron:null,ice:8969727,silicon:16770720,titanium:9071871},gs={iron:[1,.55,.3],ice:[.6,.9,1],silicon:[1,.9,.55],titanium:[.7,.55,1]};function R_(n,e,t){let i=new Wt(t,e,5,1);i.translate(0,e/2,0);let s=new Q(i,n);return s.castShadow=!0,s}function C_(n,e){let t=new ce;if(n==="iron")for(let i=0;i<4;i++){let s=new Q(new Ti(.6+e()*.7,0),i===0?$l.ironVein:$l.iron);s.position.set((e()-.5)*1.8,.3+e()*.4,(e()-.5)*1.8),s.rotation.set(e()*3,e()*3,e()*3),s.scale.y=.8,s.castShadow=!0,t.add(s)}else{let i=new Q(new Ti(1.1,0),$l.base);i.scale.set(1.2,.45,1.2),i.castShadow=!0,t.add(i);let s=n==="titanium"?6:7;for(let r=0;r<s;r++){let o=R_($l[n],.8+e()*(n==="ice"?1.6:1.9),.18+e()*.22),a=e()*6.28,l=e()*.8;o.position.set(Math.cos(a)*l,.2,Math.sin(a)*l),o.rotation.set((e()-.5)*.9,e()*3,(e()-.5)*.9),t.add(o)}Kv[n]&&t.add(ge(Kv[n],n==="titanium"?5:3,null,0,1.2,0))}return t}var Jv=Math.random;function Cr(n,e,t,i){let s=C_(n,Jv),r=ue(e,t);s.position.set(e,r,t),s.rotation.y=Jv()*6.28,h.scene.add(s);let o=i??{iron:30,ice:25,silicon:25,titanium:14}[n],a={type:n,x:e,z:t,y:r,amount:o,max:o,mesh:s,r:1.6};return a.collider=h.colliders.add({x:e,z:t,r:1.3,kind:"node"}),h.nodes.push(a),a}function Qv(n,e){for(let t=0;t<200;t++){let i,s;if(n==="ice"&&Math.random()<.75){let o=Gs[Math.floor(Math.random()*Math.min(Gs.length,30))],a=Math.random()*6.28,l=Math.random()*o.r*.7;i=o.x+Math.cos(a)*l,s=o.z+Math.sin(a)*l}else if(e){let o=Math.random()*6.28,a=e[0]+Math.random()*(e[1]-e[0]);i=Math.cos(o)*a,s=Math.sin(o)*a}else i=(Math.random()-.5)*(2*Ge-300),s=(Math.random()-.5)*(2*Ge-300);let r=Math.hypot(i,s);if(!(n==="titanium"&&r<260)&&!(r<18)&&!(Math.abs(i)>Ge-160||Math.abs(s)>Ge-160)&&!(oo(i,s,2)>.6)&&!h.colliders.overlaps(i,s,3))return[i,s]}return null}function $v(){let n=[["iron",22,8],["iron",-18,20],["iron",30,-25],["silicon",-26,-14],["silicon",12,34],["ice",40,10],["iron",-40,-38],["silicon",45,42]];for(let[t,i,s]of n)Cr(t,i,s);let e={iron:70,silicon:50,ice:40,titanium:22};for(let t in e)for(let i=0;i<e[t];i++){let s=Qv(t,t==="titanium"?null:i<e[t]*.35?[40,220]:null);s&&Cr(t,s[0],s[1])}}function ex(n){h.scene.remove(n.mesh),h.colliders.remove(n.collider);let e=h.nodes.indexOf(n);e>=0&&h.nodes.splice(e,1)}var ba=[];function ed(n,e){n.amount-=e;let t=.35+.65*Math.max(0,n.amount/n.max);if(n.mesh.scale.setScalar(t),n.amount<=0){let i=n.mesh.position.clone();i.y+=1,le.burst(i,gs[n.type],40,7);let s=n.mesh.children.find(r=>r.isMesh&&r!==n.mesh.children[0])?.material||n.mesh.children[0].material;return le.debris(i,s,9,5,1.1),le.dustPuff(i,16,3),ex(n),ba.push({type:n.type,t:90+Math.random()*60}),!0}return!1}function tx(n){for(let t=ba.length-1;t>=0;t--)if(ba[t].t-=n,ba[t].t<=0){let i=ba[t].type;ba.splice(t,1);let s=Qv(i,i==="titanium"?null:[60,400]);s&&Cr(i,s[0],s[1])}let e=1+Math.sin(performance.now()*.002)*.15;$l.titanium.emissiveIntensity=.5*e}function nx(){return h.nodes.map(n=>[n.type,+n.x.toFixed(1),+n.z.toFixed(1),Math.round(n.amount)])}function ix(n){for(let e of[...h.nodes])ex(e);for(let[e,t,i,s]of n){let r=Cr(e,t,i);r.amount=s,r.mesh.scale.setScalar(.35+.65*s/r.max)}}var sx=`
  float h3(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
  float n3(vec3 x){ vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z); }
  float fbm3(vec3 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * n3(p); p *= 2.07; a *= 0.5; } return s; }`,zp={value:0},P_=new ht({uniforms:{uT:zp,uPow:{value:1}},vertexShader:`uniform float uT; varying vec2 vUv; varying vec3 vN, vV;
    void main(){ vUv = uv; vec3 p = position;
      float w = sin(uv.y * 14.0 - uT * 40.0) * 0.06 * uv.y;
      p.x += w; p.z += cos(uv.y * 11.0 - uT * 33.0) * 0.06 * uv.y;
      vec4 mv = modelViewMatrix * vec4(p, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);
      gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform float uT, uPow; varying vec2 vUv; varying vec3 vN, vV; ${sx}
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
    }`,transparent:!0,blending:He,depthWrite:!1,side:bt});function rx(n){return new ht({uniforms:{uT:zp,uLen:{value:1},uC:{value:new re(n)},uI:{value:1}},vertexShader:`varying vec2 vUv; varying vec3 vN, vV;
      void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform float uT, uLen, uI; uniform vec3 uC; varying vec2 vUv; varying vec3 vN, vV; ${sx}
      void main(){
        float f = pow(abs(dot(vN, vV)), 2.5);
        float flow = fbm3(vec3(vUv.x * 3.0, vUv.y * uLen * 1.5 - uT * 26.0, uT * 3.0));
        float pulses = smoothstep(0.55, 1.0, sin(vUv.y * uLen * 4.0 - uT * 50.0)) * 0.6;
        float ends = smoothstep(0.0, 0.04, vUv.y) * smoothstep(1.0, 0.92, vUv.y);
        vec3 c = uC * (0.6 + flow * 1.4 + pulses) + vec3(1.0) * pow(f, 6.0) * 1.5;
        gl_FragColor = vec4(c * f * ends * uI, 1.0);
      }`,transparent:!0,blending:He,depthWrite:!1,side:bt})}var pi=[],td=[];for(let n=0;n<2;n++){let e=new Ri(16752720,0,30,1.6);td.push({l:e,t:0,dur:1,peak:0})}var Np=!1;function ox(){Np||!h.scene||(td.forEach(n=>h.scene.add(n.l)),Np=!0)}function ec(n,e,t,i,s){Np||ox();let r=td.reduce((o,a)=>o.t/o.dur>a.t/a.dur||o.peak===0?o:a);r.l.position.copy(n),r.l.color.set(e),r.l.distance=i,r.t=0,r.dur=s,r.peak=t}var I_=(()=>{let n=document.createElement("canvas");n.width=n.height=256;let e=n.getContext("2d"),t=e.createRadialGradient(128,128,70,128,128,128);return t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.75,"rgba(255,255,255,.9)"),t.addColorStop(.85,"rgba(255,255,255,.4)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,256,256),new Zt(n)})(),kp=(()=>{let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");for(let t=0;t<14;t++){let i=64+(Math.random()-.5)*50,s=64+(Math.random()-.5)*50,r=18+Math.random()*34,o=e.createRadialGradient(i,s,0,i,s,r);o.addColorStop(0,"rgba(255,255,255,.55)"),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(0,0,128,128)}return new Zt(n)})(),ax=kp;function Pr(n,e,t,i){let s=new wi(new ci({map:n,color:e,transparent:!0,depthWrite:!1,blending:t,opacity:i}));return h.scene.add(s),s}function Sa(n,e=16760960,t=6,i=.7,s=!0){let r=Pr(I_,e,He,1);if(r.position.copy(n),pi.push({o:r,t:0,dur:i,upd:(o,a)=>{let l=1-Math.pow(1-o,3);a.scale.setScalar(.5+l*t*2),a.material.opacity=(1-o)*(1-o)*.55}}),s){let o=new Q(new nn(.94,1,96),new ke({color:e,transparent:!0,blending:He,depthWrite:!1,side:bt}));o.rotation.x=-Math.PI/2,o.position.set(n.x,n.y-.6,n.z),h.scene.add(o),pi.push({o,t:0,dur:i*1.4,upd:(a,l)=>{let c=1-Math.pow(1-a,2.5);l.scale.setScalar(.3+c*t*1.5),l.material.opacity=(1-a)*(1-a)*.85}})}}var wa=[];function vs(n,e=1,t=16747066){let i=performance.now();for(;wa.length&&i-wa[0]>350;)wa.shift();wa.push(i);let s=1/Math.sqrt(wa.length);wa.length<=3&&X.play("boom",n),ec(n,t,60*e*s,24*e,.6);let r=Pr(Nn(),16773840,He,1);r.position.copy(n),pi.push({o:r,t:0,dur:.28,upd:(o,a)=>{a.scale.setScalar((1.6+o*4)*e),a.material.opacity=(1-o)*(1-o)*s}});for(let o=0;o<11;o++){let a=Pr(kp,16777215,He,1),l=new S((Math.random()-.5)*2.4,Math.random()*1.6,(Math.random()-.5)*2.4).multiplyScalar(e);a.position.copy(n).add(l),a.material.rotation=Math.random()*6;let c=1.5+Math.random()*2.5,d=(1.6+Math.random()*1.6)*e,u=.6+Math.random()*.5;pi.push({o:a,t:0,dur:u,upd:(f,p,g)=>{p.position.y+=g*c*e,p.material.rotation+=g*.8,p.scale.setScalar(d*(.5+f*1.2));let x=p.material.color,v=Math.max(0,1-f*6),m=3.2*(1-f)+.4;x.setRGB(m,m*(.42+v*.3-f*.2),m*(.1+v*.25)),p.material.opacity=(f<.45?1:(1-f)/.55)*s}})}for(let o=0;o<14;o++){let a=.2+Math.random()*.1,l=Pr(ax,new re().setRGB(a*1.15,a*.9,a*.78),li,0),c=Math.random()*Math.PI*2,d=Math.random()*2.2;l.position.copy(n).add(new S(Math.cos(c)*d,.3+Math.random()*1.2,Math.sin(c)*d).multiplyScalar(e));let u=(2.5+Math.random()*3)*e,f=2.8+Math.random()*1.8,p=.8+Math.random()*1.6,g=new S(Math.cos(c),0,Math.sin(c)).multiplyScalar(.6+Math.random());l.material.rotation=Math.random()*6,pi.push({o:l,t:-(.08+.04*o),dur:f,upd:(x,v,m)=>{v.position.y+=m*p*e*(1-x*.6),v.position.addScaledVector(g,m*e),v.scale.setScalar(u*(.5+x*1.3)),v.material.opacity=Math.sin(Math.min(1,x)*Math.PI)*.42,v.material.rotation+=m*.25}})}le.ring(new S(n.x,n.y-1.2,n.z),1.2*e,Math.round(70*e)),Sa(n,16765600,4*e,.6),le.burst(n,[1,.55,.15],Math.round(40*e),14*Math.sqrt(e)),Fp(Math.min(1,.35*e),n)}function lx(n,e=1,t=[.78,.6,.48]){if(pi.length>420)return;let i=Math.random()*Math.PI*2,s=(10+Math.random()*14)*e,r=.75+Math.random()*.35,o=Pr(ax,new re().setRGB(t[0]*r,t[1]*r,t[2]*r),li,0);o.position.set(n.x+Math.cos(i)*1.5*e,n.y+.8+Math.random()*1.5,n.z+Math.sin(i)*1.5*e),o.material.rotation=Math.random()*6;let a=new S(Math.cos(i)*s,.6+Math.random()*2.2,Math.sin(i)*s),l=(4+Math.random()*4)*e,c=4+Math.random()*3;pi.push({o,t:0,dur:c,upd:(d,u,f)=>{u.position.addScaledVector(a,f),a.multiplyScalar(Math.pow(.42,f)),a.y+=f*.5,u.scale.setScalar(l*(.4+Math.sqrt(d)*1.8)),u.material.rotation+=f*.15,u.material.opacity=Math.min(1,d*8)*(1-d)*.75}})}function cx(n,e,t=16760944,i=1){ec(n,t,30*i,14*i,.09);let s=Pr(Nn(),t,He,1);s.position.copy(n),pi.push({o:s,t:0,dur:.09,upd:(o,a)=>{a.scale.setScalar((1.8-o)*i),a.material.opacity=1-o}});let r=Pr(kp,16769200,He,1);r.position.copy(n).addScaledVector(e,.6*i),r.material.rotation=Math.random()*6,pi.push({o:r,t:0,dur:.07,upd:(o,a)=>{a.scale.setScalar((1.2+o)*i),a.material.opacity=1-o}})}function Op(n,e=9365503,t=1){ec(n,e,18*t,8*t,.18);let i=Pr(Nn(),e,He,1);i.position.copy(n),pi.push({o:i,t:0,dur:.22,upd:(s,r)=>{r.scale.setScalar((1+s*3)*t),r.material.opacity=1-s}}),Sa(n,e,1.2*t,.35,!1)}function Fp(n,e){let t=e?e.distanceTo(h.player.pos):0;h.shake=Math.max(h.shake||0,n*Math.max(0,1-t/120))}function _a(n){zp.value=performance.now()*.001;for(let e=pi.length-1;e>=0;e--){let t=pi[e];if(t.t+=n,t.t<0){t.o.visible=!1;continue}t.o.visible=!0;let i=Math.min(1,t.t/t.dur);t.upd(i,t.o,n),i>=1&&(h.scene.remove(t.o),t.o.material.dispose(),t.o.geometry&&!t.o.isSprite&&t.o.geometry.dispose(),pi.splice(e,1))}for(let e of td){if(e.peak<=0)continue;e.t+=n;let t=e.t/e.dur;e.l.intensity=t>=1?0:e.peak*Math.pow(1-t,2),t>=1&&(e.peak=0)}h.shake=(h.shake||0)*Math.pow(.02,n)}function hx(){y.flame=P_,ox()}var qn=[{name:"\u524D\u54E8\u7AD9",pop:0,b:0,r:75},{name:"\u5B9A\u5C45\u70B9",pop:4,b:6,r:120},{name:"\u5C0F\u9547",pop:12,b:14,r:175},{name:"\u57CE\u5E02",pop:24,b:22,r:240},{name:"\u5927\u90FD\u4F1A",pop:36,b:32,r:310},{name:"\u661F\u6E2F",pop:50,b:42,r:390}],mi={x:0,z:0},Ta,Gp,Aa=0;function Vp(n){Gp=new ht({uniforms:{opacity:{value:.1},uT:{value:0},uCam:{value:new S},uC:{value:new re(6743807)}},vertexShader:"attribute vec2 uv2; varying vec2 vU; varying vec3 vW; void main(){ vU = uv2; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform float opacity, uT; uniform vec3 uCam, uC; varying vec2 vU; varying vec3 vW;
      void main(){
        float v = vU.y;
        float base = exp(-v * 9.0) * 0.9 + exp(-v * 2.2) * 0.25;
        float dash = step(0.55, fract(vU.x * 0.25 - uT * 0.6)) * smoothstep(0.35, 0.0, abs(v - 0.06)) * 0.9;
        float tick = smoothstep(0.92, 1.0, fract(vU.x * 0.05)) * (1.0 - v) * 0.8;
        float d = distance(vW.xz, uCam.xz);
        float near = 1.0 - smoothstep(25.0, 70.0, d);
        float a = (base + dash + tick) * opacity * (0.15 + 0.85 * near) * smoothstep(1.0, 0.7, v);
        gl_FragColor = vec4(uC * a * 2.0, a);
      }`,transparent:!0,side:bt,depthWrite:!1,blending:He}),h.cityLevel=h.cityLevel||0,Aa=qn[h.cityLevel].r,dx(Aa)}function dx(n){Ta&&(h.scene.remove(Ta),Ta.geometry.dispose());let e=Math.ceil(n*1.2),t=[],i=[],s=[],r=2.2,o=2*Math.PI*n;for(let l=0;l<=e;l++){let c=l/e*Math.PI*2,d=mi.x+Math.cos(c)*n,u=mi.z+Math.sin(c)*n,f=ue(d,u);if(t.push(d,f,u,d,f+r,u),s.push(l/e*o,0,l/e*o,1),l<e){let p=l*2;i.push(p,p+1,p+2,p+1,p+3,p+2)}}let a=new Rt;a.setAttribute("position",new nt(t,3)),a.setAttribute("uv2",new nt(s,2)),a.setIndex(i),Ta=new Q(a,Gp),Ta.frustumCulled=!1,h.scene.add(Ta)}function ux(n,e,t=0){return Math.hypot(n-mi.x,e-mi.z)<=qn[h.cityLevel].r-t}function fx(){let n=qn[h.cityLevel+1];return n?{...n,curPop:h.colony.pop,curB:h.buildings.length}:null}var Bp=0;function px(n,e){let t=Gp.uniforms;t.opacity.value+=((e?.7:.22)-t.opacity.value)*Math.min(1,n*4),t.uT.value+=n,h.camera&&t.uCam.value.copy(h.camera.position);let i=qn[h.cityLevel].r;if(Aa<i&&(Aa=Math.min(i,Aa+n*40),dx(Aa)),Bp-=n,Bp>0)return;Bp=1;let s=qn[h.cityLevel+1];if(s&&h.colony.pop>=s.pop&&h.buildings.length>=s.b){h.cityLevel++,X.play("chapter"),h.events.emit("cityLevel",qn[h.cityLevel]);let r=new S(mi.x,ue(mi.x,mi.z)+2,mi.z);le.burst(r,[.4,.9,1],120,18)}}var tc=[],L_={mars:6178362,europa:9214120,kepler:5921384}[ot],Wp,Ws,nd=!0;function D_(){return Wp||(Wp=new ve({color:L_,roughness:.95,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),Wp}function U_(n,e,t,i){let s=t-n,r=i-e,o=Math.hypot(s,r);if(o<2)return null;let a=Math.ceil(o/1.5),l=s/o,c=r/o,d=-c,u=l,f=1.3,p=[],g=[],x=[],v=[];for(let b=0;b<=a;b++){let M=b/a,L=n+s*M,R=e+r*M;for(let P of[-1,1]){let I=L+d*f*P,_=R+u*f*P;p.push(I,ue(I,_)+.07,_),x.push(P<0?0:1,M*o/3)}if(b<a){let P=b*2;g.push(P,P+2,P+1,P+1,P+2,P+3)}}for(let b=4;b<o-2;b+=9)for(let M of[-1,1]){let L=n+l*b+d*(f+.35)*M,R=e+c*b+u*(f+.35)*M;v.push(L,ue(L,R)+.25,R)}let m=new Rt;m.setAttribute("position",new nt(p,3)),m.setAttribute("uv",new nt(x,2)),m.setIndex(g),m.computeVertexNormals();let E=new Q(m,D_());return E.receiveShadow=!0,h.scene.add(E),{mesh:E,lamp:v}}function mx(n){if(n.type==="lamp")return;let e=null,t=70;for(let u of h.buildings){if(u===n||u.type==="lamp")continue;let f=Math.hypot(u.x-n.x,u.z-n.z)-u.def.r-n.def.r;f<t&&(t=f,e=u)}if(!e)return;let i=e.x-n.x,s=e.z-n.z,r=Math.hypot(i,s),o=n.x+i/r*(n.def.r+.5),a=n.z+s/r*(n.def.r+.5),l=e.x-i/r*(e.def.r+.5),c=e.z-s/r*(e.def.r+.5),d=U_(o,a,l,c);d&&(tc.push({...d,a:n,b:e}),nd=!0)}function gx(n){for(let e=tc.length-1;e>=0;e--){let t=tc[e];(t.a===n||t.b===n)&&(h.scene.remove(t.mesh),t.mesh.geometry.dispose(),tc.splice(e,1),nd=!0)}}function vx(){if(nd){nd=!1,Ws&&(h.scene.remove(Ws),Ws.geometry.dispose());let n=tc.flatMap(e=>e.lamp);if(n.length){let e=new Rt;e.setAttribute("position",new nt(n,3)),Ws=new Si(e,new hi({size:.9,map:Nn(),color:8382207,transparent:!0,depthWrite:!1,blending:He})),Ws.frustumCulled=!1,h.scene.add(Ws)}else Ws=null}Ws&&(Ws.material.opacity=.15+h.time.night*.85)}var Ra={peace:{name:"\u548C\u5E73",desc:"\u6CA1\u6709\u9508\u8680\u86DB\uFF0C\u5B89\u5FC3\u5EFA\u8BBE",o2:.7,foe:0,dmg:0,yield:1.3},normal:{name:"\u6807\u51C6",desc:"\u63A8\u8350\u7684\u4F53\u9A8C",o2:1,foe:1,dmg:1,yield:1},hard:{name:"\u56F0\u96BE",desc:"\u6C27\u6C14\u6D88\u8017\u66F4\u5FEB\uFF0C\u654C\u4EBA\u66F4\u591A\u66F4\u51F6",o2:1.35,foe:1.6,dmg:1.5,yield:.85}},yx={story:{name:"\u5267\u60C5\u6A21\u5F0F",desc:"\u8DDF\u968F\u7AE0\u8282\uFF0C\u4ECE\u7740\u9646\u4E00\u8DEF\u8D70\u5230\u661F\u9645\u6587\u660E"},free:{name:"\u81EA\u7531\u6A21\u5F0F",desc:"\u6CA1\u6709\u4E3B\u7EBF\uFF0C\u6309\u81EA\u5DF1\u7684\u8282\u594F\u5F00\u62D3\u3002\u5C45\u6C11\u59D4\u6258\u4F1A\u7ED9\u4F60\u65B9\u5411"}},Ii=()=>Ra[h.diffKey||"normal"],ni=()=>h.mode==="free",Ca={pv:{name:"\u9AD8\u6548\u5149\u4F0F",cat:"\u751F\u4EA7",icon:"sun",cost:25,desc:"\u592A\u9633\u80FD\u53D1\u7535 +50%"},sieve:{name:"\u5206\u5B50\u7B5B\u5236\u6C27",cat:"\u751F\u5B58",icon:"o2",cost:30,desc:"\u5236\u6C27\u7AD9\u4E0E\u751F\u6001\u4E2D\u67A2\u4F9B\u6C27 +50%"},hydro:{name:"\u6C34\u57F9\u6280\u672F",cat:"\u751F\u5B58",icon:"food",cost:30,desc:"\u6E29\u5BA4\u4E0E\u5782\u76F4\u519C\u573A\u4EA7\u51FA +50%"},drill:{name:"\u6DF1\u5C42\u94BB\u63A2",cat:"\u751F\u5B58",icon:"water",cost:30,desc:"\u6C34\u51B0\u63D0\u53D6\u5668\u4E0E\u751F\u6001\u4E2D\u67A2\u4F9B\u6C34 +50%"},laser2:{name:"\u91C7\u77FF\u6FC0\u5149 II",cat:"\u751F\u4EA7",icon:"laser",cost:35,desc:"\u624B\u52A8\u91C7\u77FF\u901F\u5EA6 +50%"},suit:{name:"\u5B87\u822A\u670D\u5FAA\u73AF\u7CFB\u7EDF",cat:"\u751F\u5B58",icon:"tank",cost:40,desc:"\u91CE\u5916\u6C27\u6C14\u6D88\u8017 -35%"},alloy:{name:"\u5F3A\u5316\u5408\u91D1",cat:"\u519B\u4E8B",icon:"shield",cost:50,desc:"\u6240\u6709\u5EFA\u7B51\u8010\u4E45 +50%"},plasma:{name:"\u7B49\u79BB\u5B50\u805A\u7126",cat:"\u519B\u4E8B",icon:"focus",cost:60,desc:"\u70AE\u5854\u4F24\u5BB3 +50%\uFF0C\u5C04\u7A0B +10 \u7C73"},swarm:{name:"\u65E0\u4EBA\u673A\u96C6\u7FA4",cat:"\u751F\u4EA7",icon:"drone",cost:60,desc:"\u6BCF\u5EA7\u65E0\u4EBA\u673A\u7AD9\u591A\u4E00\u67B6\u65E0\u4EBA\u673A"},terrain:{name:"\u5168\u5730\u5F62\u60AC\u6302",cat:"\u751F\u4EA7",icon:"rover",cost:45,desc:"\u6F2B\u6E38\u8F66\u6781\u901F +30%"},pr:{name:"\u79FB\u6C11\u5BA3\u4F20",cat:"\u6B96\u6C11",icon:"pop",cost:70,desc:"\u79FB\u6C11\u98DE\u8239\u6765\u5F97\u66F4\u52E4\uFF0C\u6BCF\u6B21\u591A\u5E26 2 \u4EBA"},atmo:{name:"\u5927\u6C14\u5DE5\u7A0B",cat:"\u6B96\u6C11",icon:"planet",cost:120,desc:"\u5927\u6C14\u6539\u9020\u901F\u5EA6 \xD72"},fusion:{name:"\u7D27\u51D1\u805A\u53D8",cat:"\u751F\u4EA7",icon:"power",cost:100,desc:"\u805A\u53D8\u53CD\u5E94\u5806\u53D1\u7535 +40%"},culture:{name:"\u6B96\u6C11\u5730\u6587\u5316",cat:"\u6B96\u6C11",icon:"book",cost:80,desc:"\u5C45\u6C11\u5DE5\u4F5C\u4EA7\u51FA \xD72"}},Xt=n=>!!(h.tech&&h.tech[n]);function Zp(n){let e=Ca[n];return!e||Xt(n)||(h.rp||0)<e.cost?(X.play("deny"),!1):(h.rp-=e.cost,h.tech={...h.tech||{},[n]:!0},X.play("craft"),h.events.emit("toast",`\u2713 \u7814\u7A76\u5B8C\u6210\uFF1A${e.name}`),h.events.emit("researched",n),!0)}function id(){let n=0;for(let e of h.buildings)e.type==="lab"&&e.powered&&(n+=[0,1,1.6,2.2][e.level||1]);return n*(.12+h.colony.pop*.01)}var xx={iron:1,ice:1.2,silicon:1.5,titanium:6};function Kp(n,e,t){return Math.floor(t*xx[n]/xx[e]*.8)}function Mx(n,e,t){let i=Kp(n,e,t);return n===e||i<=0||(h.res[n]||0)<t?(X.play("deny"),0):(h.res[n]-=t,h.res[e]+=i,X.play("pickup"),h.stats.traded=(h.stats.traded||0)+1,i)}var H_=["\u6797\u6653","Amara Okafor","\u9648\u9ED8","Mateo Silva","\u82CF\u5FF5","Yuki Tanaka","\u738B\u5927\u5C71","\u5468\u9752\u79BE","Priya Sharma","\u674E\u957F\u98CE"],Xp={solar:"\u592A\u9633\u80FD\u9635\u5217",oxygen:"\u5236\u6C27\u7AD9",lamp:"\u7167\u660E\u706F",habitat:"\u5C45\u4F4F\u7A79\u9876",greenhouse:"\u6E29\u5BA4",extractor:"\u6C34\u51B0\u63D0\u53D6\u5668",turret:"\u9632\u5FA1\u70AE\u5854",drones:"\u65E0\u4EBA\u673A\u7AD9",plaza:"\u4E2D\u592E\u5E7F\u573A",lab:"\u7814\u7A76\u6240",trade:"\u8D38\u6613\u7AD9",apartment:"\u516C\u5BD3\u5854",vfarm:"\u5782\u76F4\u519C\u573A"},ho={build:["\u6211\u4EEC\u9700\u8981\u4E00\u5EA7{x}\u3002\u62DC\u6258\u4E86\uFF01","\u5982\u679C\u6709{x}\uFF0C\u5927\u5BB6\u7684\u65E5\u5B50\u4F1A\u597D\u8FC7\u5F88\u591A\u3002","\u80FD\u518D\u5EFA\u4E00\u5EA7{x}\u5417\uFF1F"],mine:["\u4ED3\u5E93\u91CC\u7684{x}\u5FEB\u89C1\u5E95\u4E86\uFF0C\u80FD\u5E2E\u5FD9\u91C7\u4E00\u4E9B\u5417\uFF1F","\u6211\u7684\u5B9E\u9A8C\u9700\u8981{x}\u3002"],kill:["\u591C\u91CC\u90A3\u4E9B\u9508\u8680\u86DB\u5435\u5F97\u5B69\u5B50\u4EEC\u7761\u4E0D\u7740\u3002","\u5DE1\u903B\u961F\u9700\u8981\u652F\u63F4\uFF0C\u5E2E\u6211\u4EEC\u6E05\u7406\u4E00\u4E0B\u9644\u8FD1\u3002"],upgrade:["\u8BBE\u65BD\u8BE5\u5347\u7EA7\u4E86\uFF0C\u80FD\u628A\u54EA\u4E00\u5EA7\u5347\u5230 2 \u7EA7\u5417\uFF1F"],relic:["\u6211\u5728\u65E7\u6863\u6848\u91CC\u770B\u5230\u9644\u8FD1\u6709\u9057\u8FF9\u7684\u8BB0\u5F55\uFF0C\u4F60\u80FD\u53BB\u770B\u770B\u5417\uFF1F"],pop:["\u6211\u4EEC\u51C6\u5907\u597D\u8FCE\u63A5\u66F4\u591A\u7684\u4EBA\u4E86\u3002"],scan:["\u8BA9\u5C0F\u661F\u626B\u63CF\u4E00\u4E0B\u9644\u8FD1\u7684\u77FF\u85CF\u5427\uFF0C\u6211\u60F3\u753B\u4E00\u5F20\u5730\u56FE\u3002"]},ti=n=>n[Math.floor(Math.random()*n.length)];function Ex(n){return h.buildings.filter(e=>e.type===n).length}function N_(n){let e=["build","build","mine","mine","scan"];(h.enemies.length||(h.nightsSurvived||0)>0)&&e.push("kill"),h.buildings.length>4&&e.push("upgrade"),n.relicLeft()&&e.push("relic"),h.buildings.some(a=>a.type==="beacon")&&e.push("pop");let t=ti(e),i=h.colonists.length?ti(h.colonists).name:ti(H_),s={id:Date.now()+Math.random(),kind:t,giver:i},r=1+(h.cityLevel||0)*.5;if(t==="build"){let a=Object.keys(Xp).filter(c=>n.unlocked(c)),l=ti(a.length?a:["solar"]);Object.assign(s,{t:l,base:Ex(l),n:1,text:`\u5EFA\u9020${Xp[l]}`,line:ti(ho.build).replace("{x}",Xp[l])})}else if(t==="mine"){let a=ti(h.cityLevel>=2?["iron","silicon","ice","titanium"]:["iron","silicon","ice"]),l=Math.round((a==="titanium"?8:25)*r);Object.assign(s,{t:a,base:h.stats.mined[a],n:l,text:`\u91C7\u96C6${rn[a].name} ${l}`,line:ti(ho.mine).replace("{x}",rn[a].name)})}else if(t==="kill"){let a=Math.round(4*r);Object.assign(s,{base:h.stats.kills,n:a,text:`\u51FB\u9000\u9508\u8680\u86DB ${a} \u53EA`,line:ti(ho.kill)})}else t==="upgrade"?Object.assign(s,{base:h.buildings.filter(a=>(a.level||1)>=2).length,n:1,text:"\u628A\u4E00\u5EA7\u5EFA\u7B51\u5347\u5230 2 \u7EA7",line:ti(ho.upgrade)}):t==="relic"?Object.assign(s,{base:n.relicFound(),n:1,text:"\u8C03\u67E5\u4E00\u5904\u9057\u8FF9",line:ti(ho.relic)}):t==="pop"?Object.assign(s,{base:h.colony.pop,n:4,text:"\u8FCE\u63A5 4 \u4F4D\u65B0\u79FB\u6C11",line:ti(ho.pop)}):Object.assign(s,{base:h.stats.scans||0,n:1,text:"\u7528\u5C0F\u661F\u626B\u63CF\u4E00\u6B21\uFF08Q\uFF09",line:ti(ho.scan)});let o=["iron","silicon","ice"];return s.reward={[ti(o)]:Math.round(20*r),[ti(o)]:Math.round(15*r)},h.cityLevel>=1&&(s.reward.titanium=Math.round(2*r)),s.rp=Math.round(8*r),s}function bx(n,e){switch(n.kind){case"build":return Ex(n.t)-n.base;case"mine":return h.stats.mined[n.t]-n.base;case"kill":return h.stats.kills-n.base;case"upgrade":return h.buildings.filter(t=>(t.level||1)>=2).length-n.base;case"relic":return e.relicFound()-n.base;case"pop":return h.colony.pop-n.base;default:return(h.stats.scans||0)-n.base}}function wx(n,e){return Math.max(0,Math.min(n.n,bx(n,e)))}var qp=25,Yp=0;function Sx(n,e){if(z_(n),h.rp=(h.rp||0)+id()*n,h.requests=h.requests||[],h.buildings.length&&!h.ended){qp-=n;let t=ni()?3:2;if(qp<=0&&h.requests.length<t){qp=ni()?60:110;let i=N_(e);h.requests.push(i),h.events.emit("request",i)}}if(Yp-=n,!(Yp>0)){Yp=.5;for(let t=h.requests.length-1;t>=0;t--){let i=h.requests[t];if(bx(i,e)>=i.n){h.requests.splice(t,1);for(let s in i.reward)h.res[s]+=i.reward[s],h.events.emit("pickup",{type:s,n:i.reward[s],note:"\u59D4\u6258\u5956\u52B1"});h.rp=(h.rp||0)+i.rp,h.stats.requests=(h.stats.requests||0)+1,X.play("objective"),h.events.emit("requestDone",i)}}}}var jp=0;function z_(n){if(jp-=n,jp>0)return;jp=2;let e=h.colony,t=Math.max(1,e.pop),i=[],s=55,r=g=>Math.max(-1,Math.min(1,(e[g]-e.pop)/t)),o=(r("food")+r("o2")+r("water"))*6;s+=o,i.push(["\u751F\u6D3B\u7269\u8D44",o]);let a=h.buildings.filter(g=>g.type==="lamp").length,l=h.buildings.some(g=>g.type==="plaza"&&g.powered),c=Math.min(8,a*1.5)+(l?12:0);s+=c,i.push(["\u7167\u660E\u4E0E\u5E7F\u573A",c]);let d=Math.min(10,h.buildings.filter(g=>g.type==="greenhouse"||g.type==="vfarm").length*3);s+=d,i.push(["\u7EFF\u8272\u690D\u7269",d]);let u=h.buildings.filter(g=>g.broken).length*-6+(e.deficit?-10:0);s+=u,i.push(["\u635F\u574F\u4E0E\u505C\u7535",u]);let f=h.buildings.some(g=>g.type==="turret")?6:Ii().foe>0&&(h.nightsSurvived||0)>0?-8:0;s+=f,i.push(["\u5B89\u5168\u611F",f]);let p=e.housing&&e.pop>e.housing*.9?-8:0;s+=p,i.push(["\u4F4F\u623F\u62E5\u6324",p]),Xt("culture")&&(s+=10,i.push(["\u6B96\u6C11\u5730\u6587\u5316",10])),h.festival&&(s+=15,i.push(["\u6B96\u6C11\u5730\u8282",15])),h.morale=Math.round(Math.max(0,Math.min(100,s))),h.moraleFactors=i.filter(g=>Math.abs(g[1])>=.5)}var Jp=()=>.5+(h.morale??60)/100;var Tx=new Fe(1,1,1,6,1,!0);Tx.translate(0,.5,0);var k_=new S(0,1,0),Pa=new S;function O_(n){let e=1+(n.level||1)+(Xt("swarm")?1:0);for(n.drones=n.drones||[];n.drones.length<e;){let t=Ev(),i=new Q(Tx,new ke({color:16752720,transparent:!0,opacity:.8,blending:He,depthWrite:!1}));i.visible=!1,i.frustumCulled=!1,h.scene.add(t.group,i);let s=n.drones.length,r=new S(n.x+[-1.9,1.9,-1.9,1.9][s%4],n.y+1.1,n.z+[-1.9,-1.9,1.9,1.9][s%4]);t.group.position.copy(r),n.drones.push({...t,beam:i,dock:r,state:"dock",t:1+s*1.3,node:null,cargo:null,pos:t.group.position})}}function Ax(n){for(let e of n.drones||[])h.scene.remove(e.group,e.beam),e.node&&(e.node.claimed=!1);n.drones=[]}function _x(n,e,t,i=15){Pa.copy(e).sub(n.pos);let s=Pa.length(),r=ue(n.pos.x,n.pos.z)+8;s>6&&(Pa.y+=(r-n.pos.y)*2),Pa.normalize().multiplyScalar(Math.min(s,i*t)),n.pos.add(Pa);let a=Math.atan2(e.x-n.pos.x,e.z-n.pos.z)-n.group.rotation.y;return a=Math.atan2(Math.sin(a),Math.cos(a)),n.group.rotation.y+=a*Math.min(1,t*4),n.group.rotation.x=Math.min(.3,s*.02),s<.6}function Rx(n){let e=performance.now()*.001;for(let t of h.buildings)if(t.type==="drones"&&!(t.buildT<1)){O_(t),t.anim.dish&&(t.anim.dish.rotation.y+=n*(t.powered?1.2:0)),t.anim.light&&(t.anim.light.visible=t.powered&&Math.sin(e*3)>-.3);for(let i of t.drones){for(let s of i.rotors)s.rotation.y+=n*40;switch(i.group.position.y+=Math.sin(e*3+i.dock.x)*.003,i.beam.visible=!1,!t.powered&&i.state!=="dock"&&(i.node&&(i.node.claimed=!1),i.node=null,i.state="back"),i.state){case"dock":{if(i.pos.lerp(i.dock,Math.min(1,n*3)),i.t-=n,i.t<=0&&t.powered){i.t=2;let s=null,r=100;for(let o of h.nodes){if(o.claimed||o.type==="titanium"&&(t.level||1)<3)continue;let a=Math.hypot(o.x-t.x,o.z-t.z);a<r&&(r=a,s=o)}s&&(s.claimed=!0,i.node=s,i.state="out")}break}case"out":{let s=i.node;if(!s||!h.nodes.includes(s)){i.node=null,i.state="back";break}_x(i,Pa.set(s.x,s.y+4.5,s.z).clone(),n)&&(i.state="mine",i.t=3.2);break}case"mine":{let s=i.node;if(!s||!h.nodes.includes(s)){i.state="back";break}i.t-=n;let r=new S(s.x+Math.sin(e*5)*.3,s.y+.6,s.z+Math.cos(e*4)*.3),o=i.pos.clone().add(new S(0,-.25,0)),a=r.clone().sub(o),l=a.length();if(i.beam.position.copy(o),i.beam.quaternion.setFromUnitVectors(k_,a.normalize()),i.beam.scale.set(.05,l,.05),i.beam.material.color.setRGB(...gs[s.type]),i.beam.visible=!0,Math.random()<.4&&le.spark(r,gs[s.type],1,3,.4),i.t<=0){let c=Math.min(3,Math.ceil(s.amount));i.cargo={type:s.type,n:c},s.claimed=!1,ed(s,c),i.node=null,i.state="back"}break}case"back":{_x(i,i.dock,n)&&(i.cargo&&(h.res[i.cargo.type]+=i.cargo.n,h.stats.mined[i.cargo.type]+=i.cargo.n,h.stats.droneHauls=(h.stats.droneHauls||0)+1,Math.hypot(h.player.pos.x-t.x,h.player.pos.z-t.z)<45&&h.events.emit("pickup",{type:i.cargo.type,n:i.cargo.n,note:"\u65E0\u4EBA\u673A"}),le.spark(i.pos,[.5,.9,1],6,3),i.cargo=null),i.state="dock",i.t=1.5);break}}}}}var Yn={solar:{name:"\u592A\u9633\u80FD\u9635\u5217",icon:"sun",cat:"life",chapter:0,cost:{iron:8,silicon:6},power:4,r:2.6,hp:120,desc:"\u767D\u5929\u53D1\u7535 4 \u5355\u4F4D\uFF0C\u591C\u95F4\u964D\u81F3 1.6\u3002\u6B96\u6C11\u5730\u7684\u5FC3\u8DF3\u4ECE\u8FD9\u91CC\u5F00\u59CB\u3002"},oxygen:{name:"\u5236\u6C27\u7AD9",icon:"o2",cat:"life",chapter:0,cost:{iron:12,silicon:4,ice:6},power:-2,r:3,hp:160,o2:6,life:14,desc:"\u7535\u89E3\u6C34\u51B0\u5236\u9020\u6C27\u6C14\u3002\u4E3A 6 \u4F4D\u5C45\u6C11\u4F9B\u6C27\uFF0C\u5E76\u5728 14 \u7C73\u5185\u4E3A\u4F60\u7684\u5B87\u822A\u670D\u8865\u6C27\u3002"},lamp:{name:"\u7167\u660E\u706F",icon:"star",cat:"life",chapter:0,cost:{iron:3},power:0,r:.6,hp:60,desc:"\u7167\u4EAE\u706B\u661F\u7684\u957F\u591C\u3002"},habitat:{name:"\u5C45\u4F4F\u7A79\u9876",icon:"dome",cat:"life",chapter:1,cost:{iron:25,silicon:12},power:-1,r:6.4,hp:300,housing:4,life:12,desc:"\u53EF\u4F4F 4 \u4EBA\u3002\u7A79\u9876\u91CC\u6709\u6696\u5149\u3001\u690D\u7269\u548C\u5BB6\u4EBA\u7684\u7167\u7247\u3002"},greenhouse:{name:"\u6E29\u5BA4",icon:"food",cat:"life",chapter:1,cost:{iron:14,silicon:16,ice:8},power:-2,r:5.4,hp:160,food:5,desc:"\u5728\u706B\u661F\u571F\u58E4\u91CC\u79CD\u51FA\u7B2C\u4E00\u68F5\u571F\u8C46\u3002\u4F9B 5 \u4EBA\u98DF\u7269\u3002"},extractor:{name:"\u6C34\u51B0\u63D0\u53D6\u5668",icon:"water",cat:"life",chapter:1,cost:{iron:16,silicon:4,ice:4},power:-2,r:2.8,hp:160,water:6,desc:"\u4ECE\u5730\u4E0B\u51BB\u571F\u4E2D\u94BB\u53D6\u6C34\u3002\u4F9B 6 \u4EBA\u7528\u6C34\u3002"},beacon:{name:"\u7740\u9646\u573A",icon:"ship",cat:"city",chapter:1,cost:{iron:24,silicon:14},power:-1,r:7.4,hp:250,desc:"\u5411\u5730\u7403\u53D1\u51FA\u4FE1\u53F7\u3002\u6761\u4EF6\u6EE1\u8DB3\u65F6\uFF0C\u79FB\u6C11\u98DE\u8239\u4F1A\u5728\u8FD9\u91CC\u964D\u843D\u3002"},fabricator:{name:"\u5236\u9020\u5DE5\u574A",icon:"wrench",cat:"industry",chapter:2,cost:{iron:22,silicon:14},power:-1,r:4.6,hp:220,desc:"\u9760\u8FD1\u6309 E \u5236\u9020\u6B66\u5668\u4E0E\u88C5\u5907\u3002"},drones:{name:"\u65E0\u4EBA\u673A\u7AD9",icon:"drone",cat:"industry",chapter:2,cost:{iron:30,silicon:22},power:-3,r:3.8,hp:220,desc:"\u6D3E\u51FA\u91C7\u77FF\u65E0\u4EBA\u673A\uFF0C\u81EA\u52A8\u91C7\u96C6 100 \u7C73\u5185\u7684\u77FF\u70B9\u5E76\u8FD0\u56DE\u3002\u5347\u7EA7\u540E\u65E0\u4EBA\u673A\u66F4\u591A\uFF0C\u6EE1\u7EA7\u53EF\u91C7\u949B\u3002"},turret:{name:"\u9632\u5FA1\u70AE\u5854",icon:"shield",cat:"defense",chapter:2,cost:{iron:22,silicon:10},power:-2,r:1.9,hp:200,range:40,desc:"\u81EA\u52A8\u653B\u51FB 40 \u7C73\u5185\u7684\u9508\u8680\u86DB\u3002\u9700\u8981\u7535\u529B\u3002"},reactor:{name:"\u805A\u53D8\u53CD\u5E94\u5806",icon:"power",cat:"industry",chapter:3,cost:{iron:40,silicon:20,titanium:12},power:20,r:5.4,hp:400,desc:"\u663C\u591C\u4E0D\u505C +20 \u26A1\u3002\u7528\u706B\u661F\u7684\u949B\uFF0C\u70B9\u4EAE\u4EBA\u7C7B\u7684\u7B2C\u4E8C\u9897\u592A\u9633\u3002"},lab:{name:"\u7814\u7A76\u6240",icon:"book",cat:"industry",chapter:2,level:1,cost:{iron:25,silicon:25},power:-2,r:4.2,hp:260,rp:1,desc:"\u5C45\u6C11\u5728\u8FD9\u91CC\u505A\u7814\u7A76\uFF0C\u4EA7\u51FA\u79D1\u7814\u70B9\u6570\u3002\u4EBA\u53E3\u8D8A\u591A\u8D8A\u5FEB\u3002\u6309 T \u6253\u5F00\u79D1\u7814\u3002"},trade:{name:"\u661F\u9645\u8D38\u6613\u7AD9",icon:"ship",cat:"city",chapter:2,level:1,cost:{iron:30,silicon:18},power:-2,r:5,hp:260,desc:"\u4E0E\u5730\u7403\u548C\u5176\u4ED6\u6B96\u6C11\u5730\u4EA4\u6362\u7269\u8D44\u3002\u9760\u8FD1\u6309 E \u4EA4\u6613\u3002"},plaza:{name:"\u4E2D\u592E\u5E7F\u573A",icon:"planet",cat:"city",level:1,cost:{iron:20,silicon:16},power:-1,r:7.4,hp:300,desc:"\u4E2D\u5FC3\u6709\u4E00\u5EA7\u5168\u606F\u5730\u7403\u3002\u5929\u9ED1\u540E\uFF0C\u5C45\u6C11\u4EEC\u4F1A\u6765\u8FD9\u91CC\u805A\u5728\u4E00\u8D77\uFF0C\u770B\u4E00\u770B\u6545\u4E61\u3002"},apartment:{name:"\u516C\u5BD3\u5854",icon:"tower",cat:"city",level:2,cost:{iron:40,silicon:25,titanium:4},power:-3,r:4.6,hp:400,housing:12,life:12,desc:"\u53EF\u4F4F 12 \u4EBA\u3002\u7A97\u6237\u91CC\u7684\u706F\u5149\uFF0C\u662F\u57CE\u5E02\u7684\u661F\u7A7A\u3002"},vfarm:{name:"\u5782\u76F4\u519C\u573A",icon:"food",cat:"city",level:2,cost:{iron:30,silicon:30,ice:15},power:-4,r:4.2,hp:260,food:14,desc:"\u5341\u56DB\u5C42\u7684\u7ACB\u4F53\u519C\u7530\u3002\u4F9B 14 \u4EBA\u98DF\u7269\u3002"},lifehub:{name:"\u751F\u6001\u4E2D\u67A2",icon:"o2",cat:"city",level:3,cost:{iron:45,silicon:30,ice:30,titanium:6},power:-5,r:6,hp:400,o2:16,water:16,life:20,desc:"\u5927\u578B\u6C27\u6C14\u4E0E\u6C34\u5FAA\u73AF\u7CFB\u7EDF\u3002\u4F9B 16 \u4EBA\u6C27\u6C14\u548C\u7528\u6C34\uFF0C20 \u7C73\u5185\u8865\u6C27\u3002"},terraformer:{name:"\u5927\u6C14\u6539\u9020\u5854",icon:"planet",cat:"stellar",chapter:4,only:"terraformable",cost:{iron:100,silicon:60,titanium:30,ice:50},power:-12,r:7.4,hp:800,desc:"\u5411\u5929\u7A7A\u91CA\u653E\u6E29\u5BA4\u6C14\u4F53\u4E0E\u6C34\u6C7D\u3002\u8BA9\u8FD9\u9897\u661F\u7403\uFF0C\u771F\u6B63\u6210\u4E3A\u5BB6\u3002"},launch:{name:"\u661F\u9645\u53D1\u5C04\u53F0",icon:"ship",cat:"stellar",chapter:5,level:ot==="mars"?5:4,only:"route",cost:{iron:160,silicon:120,titanium:60,ice:60},power:-15,r:9.5,hp:900,desc:"\u661F\u9645\u822A\u7EBF\u7684\u8D77\u70B9\u3002\u9760\u8FD1\u6309 E \u6253\u5F00\u661F\u56FE\uFF0C\u524D\u5F80\u65B0\u7684\u661F\u7403\u6216\u56DE\u5230\u5DF2\u5F00\u62D3\u7684\u5BB6\u56ED\u3002"},monument:{name:"\u6587\u660E\u7EAA\u5FF5\u7891",icon:"monument",cat:"stellar",level:5,only:"final",cost:{iron:150,silicon:120,titanium:80},power:-6,r:6.5,hp:900,desc:"\u4E09\u9897\u661F\u7403\uFF0C\u4E00\u4E2A\u4EBA\u7C7B\u3002\u732E\u7ED9\u6240\u6709\u51FA\u53D1\u7684\u4EBA\u3002"}},e0=3,$p=[1,1,1.6,2.2],F_=["lamp","beacon","fabricator","plaza","trade","terraformer","launch","monument"];function sd(n){return!F_.includes(n.type)&&(n.level||1)<e0}function Qi(n,e){let t=n.def,i=n.level||1,s=t[e];if(!s)return 0;if(e==="power")return s>0?s*$p[i]*(n.type==="solar"&&Xt("pv")?1.5:1)*(n.type==="reactor"&&Xt("fusion")?1.4:1):s*(1+.25*(i-1));if(e==="life")return s+3*(i-1);if(e==="range")return s+8*(i-1)+(Xt("plasma")?10:0);if(e==="hp")return s*(1+.5*(i-1))*(Xt("alloy")?1.5:1);let r=e==="o2"&&Xt("sieve")||e==="food"&&Xt("hydro")||e==="water"&&Xt("drill")?1.5:1;return Math.round(s*$p[i]*r)}function t0(n){let e=n.level||1,t={};for(let i in n.def.cost)t[i]=Math.ceil(n.def.cost[i]*(e===1?.8:1.3));return t.titanium=(t.titanium||0)+(e===1?3:8),t}function Cx(n){if(!sd(n))return!1;let e=t0(n);return Ki(e)?(Dl(e),n.level=(n.level||1)+1,Px(n,!0),X.play("place"),le.ring(new S(n.x,n.y,n.z),n.def.r*1.2,60,[.5,.9,1]),ys(),!0):!1}function Px(n,e){let t=n.level||1;n.maxHp=Qi(n,"hp"),n.hp=Math.min(n.maxHp,e?n.maxHp:n.hp);let i=1+(t-1)*.12;n.group.scale.set(i,n.group.scale.y,i),n.baseScale=i,n.anim._pips&&n.anim._pips.forEach(r=>n.group.remove(r)),n.anim._pips=[];let s=Math.max(2.5,n.def.r*.9);for(let r=1;r<t;r++)n.anim._pips.push(ge(16757596,1.4,n.group,(r-t/2)*.9,s+1.2,0));if(e){n.buildT=.35;let r=new Q(new Le(n.def.r*1.05,.08,6,48),Ix.clone());r.rotation.x=Math.PI/2,r.position.set(n.x,n.y,n.z),h.scene.add(r),n.anim._scan=r}}function Ms(n){let e=Yn[n];return e.only==="terraformable"&&!fe.terraformable?{hide:!0}:e.only==="route"&&!fe.next&&!(xn.visited||[]).some(t=>t.id!==ot)?{hide:!0}:e.only==="final"&&fe.next?{hide:!0}:!ni()&&ot==="mars"&&e.chapter&&e.chapter>h.chapter?{ok:!1,why:"\u5267\u60C5\u63A8\u8FDB\u540E\u89E3\u9501"}:e.level&&e.level>h.cityLevel?{ok:!1,why:`\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C${qn[e.level].name}\u300D\u89E3\u9501`}:{ok:!0}}var n0=["solar","oxygen","lamp","habitat","greenhouse","extractor","beacon","fabricator","drones","lab","trade","turret","reactor","plaza","apartment","vfarm","lifehub","terraformer","launch","monument"],B_=["oxygen","lifehub","turret","habitat","apartment","extractor","greenhouse","vfarm","beacon","plaza","lab","trade","drones","fabricator","terraformer","launch","monument"],Ix=new ke({color:8382207,transparent:!0,opacity:.8,blending:He,depthWrite:!1,side:bt});function rd(n,e,t,i=0,s,r=!1,o=1){let a=Yn[n],l=new ce,c={};Qn[n](l,c);let d=ue(e,t);if(l.position.set(e,d,t),l.rotation.y=i,h.scene.add(l),r){l.scale.set(1,.001,1);let f=new Q(new Le(a.r*1.05,.08,6,48),Ix.clone());f.rotation.x=Math.PI/2,f.position.set(e,d,t),h.scene.add(f),c._scan=f}let u={buildT:r?0:1,type:n,def:a,x:e,z:t,y:d,rot:i,group:l,anim:c,hp:s??a.hp,broken:s!==void 0&&s<=0,powered:!0,t:Math.random()*10,cool:0};return u.collider=h.colliders.add({x:e,z:t,r:a.r*(n==="beacon"?.15:n==="plaza"?.28:.9),kind:"building",b:u}),u.level=o,u.maxHp=Qi(u,"hp"),s===void 0&&(u.hp=u.maxHp),o>1&&Px(u,!1),h.buildings.push(u),h.stats.built[n]=(h.stats.built[n]||0)+1,mx(u),ys(),u}function Lx(n,e=!1){if(e)for(let s in n.def.cost)h.res[s]+=Math.floor(n.def.cost[s]*.5);h.scene.remove(n.group),h.colliders.remove(n.collider),gx(n),n.type==="drones"&&Ax(n);let t=h.buildings.indexOf(n);t>=0&&h.buildings.splice(t,1),h.stats.built[n.type]=Math.max(0,(h.stats.built[n.type]||0)-1);let i=new S(n.x,n.y+2,n.z);le.burst(i,[1,.6,.3],60,10),le.dustPuff(i,30,n.def.r*2),vs(i,Math.min(3,n.def.r*.45),16752720),ys()}function Dx(n){return h.buildings.filter(e=>e.type===n).length}function ys(){let n=h.colony,e=(h.time.elevation>.05?1:.4)*fe.solar,t=0,i=0;for(let r of h.buildings){if(r.broken)continue;let o=Qi(r,"power");o>0?t+=r.type==="solar"?o*e:o:i-=o}let s=t;for(let r of h.buildings)r.powered=r.def.power>=0&&!r.broken,r.maxHp=Qi(r,"hp");for(let r of B_)for(let o of h.buildings){if(o.type!==r)continue;let a=Qi(o,"power");!o.broken&&s>=-a&&(s+=a,o.powered=!0)}n.powerProd=t,n.powerUse=i,n.deficit=i>t+.001,n.housing=0,n.o2=0,n.food=0,n.water=0;for(let r of h.buildings)n.housing+=Qi(r,"housing"),r.powered&&(n.o2+=Qi(r,"o2"),n.food+=Qi(r,"food"),n.water+=Qi(r,"water"));n.support=Math.min(n.housing,n.o2,n.food,n.water)}function Ux(n){for(let e of h.buildings){let t=Qi(e,"life");if(!t||!e.powered)continue;let i=e.x-n.x,s=e.z-n.z;if(i*i+s*s<t*t)return e}return null}var xs=null,G_=null,Hx=new ke({color:5636010,transparent:!0,opacity:.35,depthWrite:!1}),V_=new ke({color:16729156,transparent:!0,opacity:.35,depthWrite:!1}),Li,It={type:null,rot:0,valid:!1,reason:"",x:0,z:0};function uo(n){if(xs&&(h.scene.remove(xs),xs=null),It.type=n,G_=n,!n){Li&&(Li.visible=!1);return}let e=new ce;Qn[n](e,{}),e.traverse(i=>{i.isMesh&&(i.material=Hx,i.castShadow=!1,i.receiveShadow=!1),(i.isSprite||i.userData.found)&&(i.visible=!1)}),xs=e,h.scene.add(e),Li||(Li=new Q(new nn(.96,1,64),new ke({color:6741503,transparent:!0,opacity:.5,depthWrite:!1,side:bt})),Li.rotation.x=-Math.PI/2,h.scene.add(Li));let t=Yn[n].life||Yn[n].range||0;Li.visible=t>0,Li.scale.setScalar(t||1)}function Nx(n,e){if(!xs)return;if(!n){xs.visible=!1,Li.visible=!1,It.valid=!1,It.reason="\u5BF9\u51C6\u5730\u9762";return}xs.visible=!0;let t=Yn[It.type],i=n.x,s=n.z,r=Math.hypot(i-e.x,s-e.z),o=t.r+1.2;if(r<o){let d=r>.01?(i-e.x)/r:-Math.sin(h.player.yaw),u=r>.01?(s-e.z)/r:-Math.cos(h.player.yaw);i=e.x+d*o,s=e.z+u*o,r=o}let a=ue(i,s);xs.position.set(i,a,s),xs.rotation.y=It.rot,It.x=i,It.z=s,Li.scale.x>1&&(Li.visible=!0,Li.position.set(i,a+.3,s));let l="";Ki(t.cost)?oo(i,s,Math.max(1.5,t.r*.7))>(t.r>4?.32:.45)?l="\u5730\u9762\u592A\u9661":h.colliders.overlaps(i,s,t.r*.85)?l="\u4F4D\u7F6E\u88AB\u5360\u7528":r<t.r+.8?l="\u79BB\u81EA\u5DF1\u592A\u8FD1":Math.abs(i)>Ge-170||Math.abs(s)>Ge-170?l="\u8D85\u51FA\u53EF\u5EFA\u9020\u533A\u57DF":ux(i,s,t.r)||(l="\u8D85\u51FA\u6B96\u6C11\u5730\u9886\u5730\uFF08\u63D0\u5347\u57CE\u5E02\u7B49\u7EA7\u6765\u6269\u5F20\uFF09"):l="\u8D44\u6E90\u4E0D\u8DB3",It.valid=!l,It.reason=l;let c=l?V_:Hx;xs.traverse(d=>{d.isMesh&&(d.material=c)})}function zx(){if(!It.type||!It.valid)return X.play("deny"),null;let n=Yn[It.type];Dl(n.cost);let e=rd(It.type,It.x,It.z,It.rot,void 0,!0);return X.play("place"),le.ring(new S(e.x,e.y,e.z),n.r,50),e}var Qp=0;function i0(n,e){Qp-=n,Qp<=0&&(Qp=.5,ys()),vx(),Rx(n);let t=h.time.night,i=performance.now()*.001;y.window.emissiveIntensity=.3+t*.85,y.lamp.emissiveIntensity=t*4;for(let s of kl)s.emissiveIntensity=.15+t*1.4;for(let s of h.buildings){let r=s.anim,o=s.powered;if(s.t+=n,s.buildT<1){s.buildT=Math.min(1,s.buildT+n/1.3);let a=s.buildT,l=1+2.2*Math.pow(a-1,3)+1.2*Math.pow(a-1,2);s.group.scale.y=Math.max(.001,l)*(s.baseScale||1);let c=Math.max(3,s.def.r*1.4)*(s.type==="apartment"||s.type==="launch"||s.type==="terraformer"||s.type==="monument"?4:1);r._scan.position.y=s.y+a*c,r._scan.material.opacity=.8*(1-a),r._scan.scale.setScalar(1-a*.25),Math.random()<.5&&le.spark(new S(s.x+(Math.random()-.5)*s.def.r*2,s.y+a*c,s.z+(Math.random()-.5)*s.def.r*2),[.5,.9,1],1,2,.6),a>=1&&(h.scene.remove(r._scan),r._scan.geometry.dispose(),delete r._scan)}switch(s.hp<s.maxHp&&h.time.night<.5&&(s.hp=Math.min(s.maxHp,s.hp+n*(s.broken?5:2)),s.broken&&s.hp>=s.maxHp*.5&&(s.broken=!1,ys(),h.events.emit("toast",`\u2713 ${s.def.name} \u5DF2\u4FEE\u590D\uFF0C\u6062\u590D\u8FD0\u8F6C`))),s.broken&&Math.random()<n*6&&le.dustPuff(new S(s.x+(Math.random()-.5)*s.def.r,s.y+1.5,s.z+(Math.random()-.5)*s.def.r),1,.5,[.15,.13,.12]),s.type){case"solar":{let a=new S(In.x,Math.max(In.y,.2),In.z).applyAxisAngle(new S(0,1,0),-s.rot);r.pivot.rotation.y=Math.atan2(a.x,a.z),r.panel.rotation.x=Math.PI/2-Math.asin(Math.min(1,a.y/a.length()));break}case"oxygen":o&&(r.fan.rotation.z+=n*8),r.light.visible=o;break;case"extractor":o&&(r.drill.position.y=3+Math.sin(s.t*3)*.8),r.light.visible=o;break;case"greenhouse":r.light.material.opacity=o?.3+t*.5:0;break;case"fabricator":o?(r.arm.rotation.y=Math.sin(s.t*.8)*1.2,r.spark.visible=Math.sin(s.t*7)>.6):r.spark.visible=!1;break;case"habitat":r.tip.visible=Math.sin(i*2+s.x)>.3;break;case"apartment":r.tip.visible=Math.sin(i*2+s.z)>.3;break;case"vfarm":r.light.material.opacity=o?.25+t*.5:0;break;case"lifehub":o&&(r.fan.rotation.y+=n*3),r.light.visible=o;break;case"plaza":r.earth.rotation.y+=n*.25,r.earth.position.y=4+Math.sin(i*.8)*.15,r.earth.material.opacity=o?.55-t*.15:.15,r.halo.material.opacity=o?.25+t*.2:0;break;case"lab":r.scope&&(r.scope.rotation.z=Math.sin(i*.2)*.4),r.tip&&(r.tip.visible=Math.sin(i*2.5)>0),r.light&&(r.light.visible=o);break;case"trade":r.jib&&(r.jib.rotation.y=Math.sin(i*.15)*1.2),r.tip&&(r.tip.visible=Math.sin(i*3)>0);break;case"monument":r.rings.forEach((a,l)=>{a.rotation.x=i*(.3+l*.2),a.rotation.y=i*(.2+l*.15)});break;case"reactor":r.r1.rotation.y+=n*.8,r.r2.rotation.z+=n*.6,r.light.material.opacity=.5+Math.sin(i*3)*.2;break;case"beacon":{let a=Math.floor(i*6)%8;r.lights.forEach((l,c)=>{l.visible=o&&(c===a||c===(a+4)%8||t>.3)}),r.tip.visible=Math.sin(i*3)>0;break}case"lamp":r.glow.visible=t>.2,r.glow.material.opacity=t*.6;break;case"turret":W_(s,n,e);break;case"terraformer":{r.rings.forEach((a,l)=>{a.position.y=10+l*8+Math.sin(i*1.5+l)*1.5,a.rotation.x=Math.sin(i+l)*.2}),r.beam.material.opacity=o&&h.terraform<1?.18+Math.sin(i*4)*.05:0,o&&h.terraform<1&&Math.random()<.6&&le.rise(new S(s.x,s.y+28,s.z),[.4,.9,1],4);break}}}}function W_(n,e,t){let i=n.anim;if(i.eye.visible=n.powered,!n.powered)return;n.cool-=e;let s=null,r=Qi(n,"range");for(let l of h.enemies){if(l.dead)continue;let c=Math.hypot(l.pos.x-n.x,l.pos.z-n.z);c<r&&(r=c,s=l)}if(!s){i.head.rotation.y+=e*.4;return}let a=Math.atan2(-(s.pos.x-n.x),-(s.pos.z-n.z))-n.rot-i.head.rotation.y;if(a=Math.atan2(Math.sin(a),Math.cos(a)),i.head.rotation.y+=Math.sign(a)*Math.min(Math.abs(a),e*5),Math.abs(a)<.15&&n.cool<=0){n.cool=.45;let l=new S(n.x,n.y+2.7,n.z),c=s.pos.clone();c.y+=1;let d=c.sub(l).normalize();l.addScaledVector(d,2.2),t.shoot(l,d,15*$p[n.level||1]*(Xt("plasma")?1.5:1),"turret"),cx(l,d,16760944,1.1),X.play("turret",l)}}function kx(){return h.buildings.map(n=>[n.type,+n.x.toFixed(2),+n.z.toFixed(2),+n.rot.toFixed(3),Math.round(n.hp),n.level||1])}var nc=new S;function Di(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;nc.copy(e),nc[i]=0,nc.normalize();let c=.5*o/(o+a),d=1-nc.angleTo(n)/l;return Math.sign(nc[t])===1?d*c:a/(o+a)+c+c*(1-d)}var Ia=class extends Ke{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new S,l=new S,c=new S(e,t,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,g=new S,x=.5/s;for(let v=0,m=0;v<d.length;v+=3,m+=2)switch(a.fromArray(d,v),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),d[v+0]=c.x*Math.sign(a.x)+l.x*r,d[v+1]=c.y*Math.sign(a.y)+l.y*r,d[v+2]=c.z*Math.sign(a.z)+l.z*r,u[v+0]=l.x,u[v+1]=l.y,u[v+2]=l.z,Math.floor(v/p)){case 0:g.set(1,0,0),f[m+0]=Di(g,l,"z","y",r,i),f[m+1]=1-Di(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),f[m+0]=1-Di(g,l,"z","y",r,i),f[m+1]=1-Di(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),f[m+0]=1-Di(g,l,"x","z",r,e),f[m+1]=Di(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),f[m+0]=1-Di(g,l,"x","z",r,e),f[m+1]=1-Di(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),f[m+0]=1-Di(g,l,"x","y",r,e),f[m+1]=1-Di(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),f[m+0]=Di(g,l,"x","y",r,e),f[m+1]=1-Di(g,l,"y","x",r,t);break}}};var ie=(n,e,t)=>new S(n,e,t);function C(n,e,t=0,i=0,s=0,r,o=0,a=0,l=0){let c=new Q(n,e);return c.position.set(t,i,s),c.rotation.set(o,a,l),c.castShadow=!0,c.receiveShadow=!0,r&&r.add(c),c}var xe=(n,e,t,i=.06)=>new Ia(n,e,t,2,Math.min(i,n/2.1,e/2.1,t/2.1)),Ae=(n,e,t,i=24,s=!1)=>new Fe(n,e,t,i,1,s),kt=(n,e=32)=>new ji(n.map(([t,i])=>new $(t,i)),e);function Pt(n,e,t,i,s,r=10){let o=e.clone().sub(n),a=o.length(),l=C(Ae(t,t,a,r),i,0,0,0,s);return l.position.copy(n).add(e).multiplyScalar(.5),l.quaternion.setFromUnitVectors(ie(0,1,0),o.normalize()),l}function X_(n,e,t,i,s){let r=Pt(n,e,t,i,s);for(let o of[n,e]){let a=Pt(o.clone().lerp(e===o?n:e,.02),o,t*1.6,y.metal,s);a.scale.y=1}return r}function Ui(n,e,t,i,s=32){let r=new Sl(n);return C(new wh(r,s,e,8,!1),t,0,0,0,i)}function q_(n,e,t,i,s,r){let o=n.clone().lerp(e,.5);return o.y-=t,Ui([n,n.clone().lerp(o,.5).add(ie(0,-t*.15,0)),o,e.clone().lerp(o,.5).add(ie(0,-t*.15,0)),e],i,s,r,24)}function ad(n,e,t,i,s,r=0,o=.5){let a=new ce;a.position.set(e,t,i),a.rotation.y=r,n.add(a),C(Ae(.035,.035,s,6),y.metal,-o/2,s/2,0,a),C(Ae(.035,.035,s,6),y.metal,o/2,s/2,0,a);for(let l=.25;l<s;l+=.32)C(Ae(.022,.022,o,6),y.metal,0,l,0,a,0,0,Math.PI/2);return a}function Hi(n,e,t,i,s,r,o=0,a=8){let l=new ce;l.position.set(i,s,r),l.rotation.y=o,n.add(l),C(xe(e,t,.08,.02),y.dark,0,0,0,l);for(let c=0;c<a;c++)C(new Ke(e*.9,t/a*.45,.04),y.metal,0,-t/2+(c+.5)*t/a,.05,l,-.4,0,0);return l}function Ir(n,e,t,i,s,r=0,o=0){let a=new ce;a.position.set(e,t,i),a.rotation.set(o,r,0),n.add(a),C(new Le(s,s*.18,8,24),y.metal,0,0,0,a),C(new di(s*.95,24),y.window,0,0,-.01,a);for(let l=0;l<8;l++){let c=l/8*Math.PI*2;C(new Be(s*.06,6,4),y.metal,Math.cos(c)*s*1.12,Math.sin(c)*s*1.12,.02,a)}return a}function ld(n,e,t,i,s=.05){for(let r=0;r<i;r++){let o=r/i*Math.PI*2;C(Ae(s,s,s*1.2,6),y.metal,Math.cos(o)*e,t,Math.sin(o)*e,n)}}function s0(n,e,t,i,s=.22,r=0,o=0){let a=new ce;a.position.set(e,t,i),a.rotation.set(r,o,0),n.add(a),C(new Le(s,s*.12,6,18),y.red2,0,0,0,a);for(let l=0;l<3;l++)C(new Ke(s*2,s*.12,s*.12),y.red2,0,0,0,a,0,0,l*Math.PI/3);return C(Ae(s*.25,s*.25,s*.6,8),y.metal,0,0,-s*.3,a,Math.PI/2,0,0),a}function La(n,e,t,i,s=0){let r=new ce;return r.position.set(e,t,i),r.rotation.y=s,n.add(r),C(Ae(.13,.13,.06,18),y.metal,0,0,0,r,Math.PI/2,0,0),C(new di(.11,18),y.screen,0,0,.032,r),r}function Ni(n,e,t,i,s,r,o=0){return C(new Ke(e,t,.02),y.hazard,i,s,r,n,0,o,0)}function ic(n,e,t,i,s,r,o,a,l=0){let c=new ce;c.rotation.y=l,n.add(c);for(let d=0;d<t;d++){let u=.12+e()*.35,f=.1+e()*.3,p=.04+e()*.12,g=e(),x=g<.5?y.panel:g<.8?y.dark:y.metal;e()<.3?C(Ae(u*.3,u*.3,p*2,10),x,i+e()*(s-i),r+e()*(o-r),a+p,c,Math.PI/2,0,0):C(xe(u,f,p,.015),x,i+e()*(s-i),r+e()*(o-r),a+p/2,c)}return c}function Lr(n){let e=n;return()=>(e=e*16807%2147483647,(e-1)/2147483646)}{let n=document.createElement("canvas");n.width=128,n.height=32;let e=n.getContext("2d");e.fillStyle="#f2c11a",e.fillRect(0,0,128,32),e.fillStyle="#1a1a1a";for(let d=-32;d<160;d+=24)e.beginPath(),e.moveTo(d,32),e.lineTo(d+12,32),e.lineTo(d+44,0),e.lineTo(d+32,0),e.fill();let t=new Zt(n);t.colorSpace=_t,t.wrapS=Jn,t.repeat.set(2,1),y.hazard=new ve({map:t,roughness:.7}),y.red2=new ve({color:13120030,roughness:.5,metalness:.3}),y.chrome=new ve({color:14738666,roughness:.15,metalness:1}),y.rubber=new ve({color:1842206,roughness:.92}),y.ablative=new ve({color:3811874,roughness:.95,map:y.found.map,bumpMap:y.found.bumpMap,bumpScale:3}),y.soil=new ve({color:3875864,roughness:1}),y.leaf=new ve({color:4168250,roughness:.7,flatShading:!0}),y.leaf2=new ve({color:7127626,roughness:.7,flatShading:!0}),y.fruit=new ve({color:14694428,roughness:.4}),y.growlight=new ve({color:2228241,emissive:16732120,emissiveIntensity:2.2});let i=document.createElement("canvas");i.width=i.height=64;let s=i.getContext("2d");s.fillStyle="#0a1a14",s.fillRect(0,0,64,64),s.strokeStyle="#6dffb5",s.lineWidth=3,s.beginPath(),s.arc(32,36,22,Math.PI*1.1,Math.PI*1.9),s.stroke(),s.beginPath(),s.moveTo(32,36),s.lineTo(46,22),s.stroke();let r=new Zt(i);r.colorSpace=_t,y.screen=new ve({map:r,emissive:16777215,emissiveMap:r,emissiveIntensity:.9});let o=document.createElement("canvas");o.width=128,o.height=128;let a=o.getContext("2d"),l=a.createLinearGradient(0,0,128,128);l.addColorStop(0,"#16285a"),l.addColorStop(.5,"#2a4a9a"),l.addColorStop(1,"#122048"),a.fillStyle=l,a.fillRect(0,0,128,128),a.strokeStyle="rgba(200,220,255,.55)",a.lineWidth=1;for(let d=16;d<128;d+=16)a.beginPath(),a.moveTo(d,0),a.lineTo(d,128),a.stroke();a.strokeStyle="rgba(220,230,255,.8)",a.lineWidth=2,a.beginPath(),a.moveTo(0,64),a.lineTo(128,64),a.stroke();let c=new Zt(o);c.colorSpace=_t,c.anisotropy=8,y.cell=new ve({map:c,roughness:.12,metalness:.6,envMapIntensity:1.8})}function Ln(n,e,t=!1){let i=t?C(xe(e*2,4,e*2,.12),y.found,0,-1.8,0,n):C(Ae(e,e*1.05,4,32),y.found,0,-1.8,0,n);i.castShadow=!1,i.userData.found=!0}Object.assign(Qn,{solar(n,e){Ln(n,2.2,!0),C(xe(1.4,.25,1.4,.05),y.panel,0,.12,0,n),ld(n,.55,.27,8,.04),C(kt([[0,0],[.3,0],[.26,.4],[.17,.6],[.15,2.1],[0,2.1]]),y.metal,0,.25,0,n),C(xe(.5,.6,.4,.05),y.dark,.32,.65,0,n),La(n,.57,.7,0,Math.PI/2),q_(ie(.4,.5,.15),ie(1.3,.05,.9),.15,.03,y.rubber,n);let t=new ce;t.position.y=2.45,n.add(t),C(xe(.5,.42,.5,.06),y.dark,0,0,0,t),C(Ae(.12,.12,.9,12),y.chrome,0,.1,0,t,0,0,Math.PI/2);let i=new ce;i.position.y=.25,t.add(i),C(xe(4.4,.1,3,.03),y.metal,0,-.02,0,i);for(let s=0;s<4;s++)for(let r=0;r<3;r++){let o=C(new Ke(1.02,.03,.92),y.cell,-1.6+s*1.07,.045,-.97+r*.97,i);o.castShadow=!0}for(let s of[-1.1,1.1])C(new Ke(4.2,.08,.06),y.metal,0,-.1,s,i);for(let s of[-1.5,0,1.5])C(new Ke(.06,.08,2.6),y.metal,s,-.1,0,i);Pt(ie(-1.5,-.12,-1.1),ie(0,-.35,0),.03,y.metal,i),Pt(ie(1.5,-.12,1.1),ie(0,-.35,0),.03,y.metal,i),Pt(ie(1.5,-.12,-1.1),ie(0,-.35,0),.03,y.metal,i),Pt(ie(-1.5,-.12,1.1),ie(0,-.35,0),.03,y.metal,i),C(xe(.3,.12,.2,.02),y.dark,1.9,.08,1.35,i),e.pivot=t,e.panel=i},oxygen(n,e){Ln(n,3);let t=Lr(11);C(Ae(3,3.1,.35,40),y.panel,0,.17,0,n);for(let s of[-1.35,1.35]){let r=new ce;r.position.set(s,.35,-.3),n.add(r),C(kt([[0,.2],[.55,.22],[.9,.45],[1,.8],[1,3.2],[.9,3.55],[.55,3.78],[0,3.8]],40),y.white,0,0,0,r);for(let o of[1.2,2.4])C(new Le(1.005,.03,6,40),y.metal,0,o,0,r,Math.PI/2,0,0);C(Ae(1.015,1.015,.25,40,!0),y.orange,0,1.8,0,r);for(let o of[-.6,.6])C(xe(1.6,.35,.2,.04),y.dark,0,.25,o,r);C(Ae(.12,.12,.3,12),y.metal,0,3.9,0,r),s0(r,0,4.1,0,.18,Math.PI/2,0),La(r,0,2.2,1.02),ad(r,0,.3,-1.05,3.4,Math.PI)}C(xe(1.7,1.9,1.6,.1),y.panel,0,1.3,1.2,n),C(xe(1.8,.2,1.7,.05),y.orange,0,2.3,1.2,n),ic(n,t,10,-.7,.7,.6,2,1.95),Hi(n,1,.5,0,.7,2.01,0,6),C(new Le(.42,.06,8,28),y.dark,0,1.75,2.02,n);let i=new ce;i.position.set(0,1.75,2.03),n.add(i);for(let s=0;s<6;s++)C(new Ke(.1,.36,.02),y.metal,Math.sin(s*Math.PI/3)*.2,Math.cos(s*Math.PI/3)*.2,0,i,0,.4,-s*Math.PI/3);C(Ae(.08,.08,.06,12),y.chrome,0,0,0,i,Math.PI/2,0,0),e.fan=i;for(let s of[-1.35,1.35])Ui([ie(s,3.2,.5),ie(s*.7,3,.9),ie(s*.3,2.4,1.2),ie(s*.25,2.2,1.3)],.07,y.metal,n);X_(ie(-1.35,.9,.7),ie(1.35,.9,.7),.06,y.metal,n),s0(n,.8,.9,.85,.15,0,0),La(n,-.5,2,2.01),La(n,.5,2,2.01),e.light=ge(6741503,.45,n,.6,2.05,2.05),Ni(n,1.8,.12,0,.42,2.02)},habitat(n,e){Ln(n,6.2);let t=Lr(23);C(kt([[0,0],[6.25,0],[6.3,.15],[6.25,.9],[6.05,1.05],[5.95,1.25],[0,1.25]],64),y.panel,0,0,0,n);for(let o=0;o<16;o++){let a=o/16*Math.PI*2;Math.abs(a-Math.PI/2)<.3||Hi(n,.7,.4,Math.cos(a)*6.28,.55,Math.sin(a)*6.28,-a+Math.PI/2,4)}let i=C(new Be(5.8,64,24,0,Math.PI*2,0,Math.PI/2),y.white,0,1.2,0,n);i.scale.y=.85;for(let o=0;o<12;o++)C(new Le(5.86,.08,6,32,Math.PI/2),y.panel,0,1.2,0,n,0,o*Math.PI/6,0).scale.set(1,.85,1);for(let[o,a]of[[2.6,5.62],[4.3,4.6]])C(new Le(a,.07,6,64),y.panel,0,o,0,n,Math.PI/2,0,0);e.windows=[];for(let o=0;o<14;o++){let a=o/14*Math.PI*2+.11;if(Math.abs(a-Math.PI/2)<.35)continue;let l=new ce;l.position.set(Math.cos(a)*5.76,2,Math.sin(a)*5.76),l.rotation.y=-a+Math.PI/2,l.rotation.x=-.18,n.add(l),C(xe(1.15,.62,.16,.08),y.metal,0,0,0,l),C(xe(1,.48,.1,.07),y.window,0,0,.05,l)}C(Ae(1.2,1.4,.5,32),y.panel,0,6.05,0,n),C(new Be(1,32,12,0,Math.PI*2,0,Math.PI/2),y.glass,0,6.3,0,n).castShadow=!1,C(new Le(1.05,.06,6,32),y.metal,0,6.3,0,n,Math.PI/2,0,0),C(Ae(.06,.09,3.2,8),y.metal,1.6,7,0,n),e.tip=ge(16728128,1,n,1.6,8.7,0),C(new Be(.55,20,8,0,Math.PI*2,0,Math.PI/3),y.white,-1.4,6.6,.6,n).rotation.set(-.9,.5,0),C(Ae(.05,.05,.9,6),y.metal,-1.4,6.1,.6,n),ad(n,0,1.25,-5.4,3.2,0,.45).rotation.x=-.6;let r=new ce;r.position.set(0,0,6.2),n.add(r),C(xe(2.6,2.9,3,.25),y.white,0,1.45,.2,r),C(xe(2.64,.12,3.04,.05),y.orange,0,2.62,.2,r),C(xe(1.5,2.2,.15,.12),y.metal,0,1.25,1.72,r),C(xe(1.2,1.95,.1,.1),y.dark,0,1.2,1.78,r),Ir(r,0,1.75,1.84,.22),C(xe(.12,.4,.08,.03),y.chrome,.45,1.1,1.85,r),Ni(r,1.5,.14,0,.12,1.85);for(let o=0;o<3;o++)C(xe(1.4,.12,.35,.03),y.metal,0,.06+o*0,2.05+o*.35,r).position.y=.3-o*.12;ge(16769184,.8,r,1,2.5,1.8),C(xe(.5,.35,.3,.04),y.dark,-1,2.4,1.75,r),ic(r,t,8,-1.2,1.2,.4,2.6,1.7,0),Ui([ie(4.5,1,3.5),ie(5.6,.6,4.2),ie(6.6,.25,4.6),ie(7.6,.2,4.6)],.12,y.metal,n),Ui([ie(-4.5,1,3.5),ie(-5.4,.7,4.4),ie(-6.4,.25,5)],.1,y.orange,n);for(let[o,a,l]of[[-6.3,-2.4,.4],[6.4,-2,-.3]]){let c=new ce;c.position.set(o,0,a),c.rotation.y=l,n.add(c),C(xe(1.4,1.1,1,.08),y.panel,0,.55,0,c),Hi(c,.9,.7,0,.6,.51,0,6),C(new Le(.35,.05,6,20),y.dark,0,1.12,0,c,Math.PI/2,0,0)}},extractor(n,e){Ln(n,2.6,!0),C(xe(4.6,.5,4.6,.08),y.panel,0,.25,0,n),Ni(n,4.6,.15,0,.42,2.31),Ni(n,4.6,.15,0,.42,-2.31);let t=6.4,i=.6,s=1.6,r=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let[a,l]of r)Pt(ie(a*s,.5,l*s),ie(a*i,t,l*i),.09,y.orange,n);for(let a=0;a<3;a++){let l=.5+a*(t-.5)/3,c=l+(t-.5)/3,d=s+(i-s)*(a/3),u=s+(i-s)*((a+1)/3);for(let f=0;f<4;f++){let[p,g]=r[f],[x,v]=r[(f+1)%4];Pt(ie(p*d,l,g*d),ie(x*u,c,v*u),.035,y.metal,n),Pt(ie(x*d,l,v*d),ie(p*u,c,g*u),.035,y.metal,n),Pt(ie(p*u,c,g*u),ie(x*u,c,v*u),.04,y.metal,n)}}C(xe(1.8,.3,1.8,.05),y.dark,0,t+.1,0,n);for(let[a,l]of r)C(Ae(.03,.03,.7,6),y.metal,a*.85,t+.6,l*.85,n);C(Ae(.45,.45,.6,20),y.white,0,t+.55,0,n),e.light=ge(10476799,1,n,0,t+1.1,0);let o=new ce;o.position.y=3,n.add(o),C(Ae(.18,.18,4.6,16),y.chrome,0,0,0,o);for(let a=0;a<5;a++)C(new Le(.2,.04,6,16),y.metal,0,-2+a*1,0,o,Math.PI/2,0,0);C(new Wt(.3,.7,16),y.dark,0,-2.6,0,o,Math.PI,0,0),e.drill=o,C(kt([[0,0],[.9,0],[1,.2],[1,1.8],[.8,2.1],[0,2.15]],32),y.white,2.1,.5,1.3,n),C(Ae(1.01,1.01,.2,32,!0),y.orange,2.1,1.6,1.3,n),La(n,2.1,1.2,2.31),Ui([ie(.3,1,.3),ie(.9,1.2,.8),ie(1.5,1.6,1.2),ie(2.1,2.7,1.3)],.08,y.metal,n),s0(n,1.2,1.25,1.1,.14,0,.6),C(xe(1.2,1,.9,.08),y.dark,-1.7,1,1.4,n),Hi(n,.8,.5,-1.7,1,1.86,0,5)},greenhouse(n,e){Ln(n,5,!0),C(xe(10.4,.5,6.4,.1),y.panel,0,.25,0,n);let t=C(new Fe(3,3,10,40,1,!0,0,Math.PI),y.glass,0,.5,0,n,0,0,Math.PI/2);t.castShadow=!1;for(let s=0;s<9;s++)C(new Le(3.02,.06,6,28,Math.PI),y.white,-4.8+s*1.2,.5,0,n,0,Math.PI/2,0);for(let s=1;s<6;s++){let r=s/6*Math.PI;C(Ae(.035,.035,9.8,6),y.white,0,.5+Math.sin(r)*3.02,Math.cos(r)*3.02,n,0,0,Math.PI/2)}for(let s of[-1,1]){let r=C(new di(3,32,0,Math.PI),y.glass,s*5,.5,0,n,0,s*Math.PI/2,0);r.castShadow=!1,C(xe(.12,2.2,1.3,.04),y.white,s*5,1.6,0,n)}C(xe(.1,1.9,1,.05),y.dark,5.05,1.45,0,n);let i=Lr(71);for(let s of[-1.5,0,1.5]){C(xe(9,.5,.9,.05),y.dark,0,.75,s,n),C(new Ke(8.8,.06,.8),y.soil,0,1.01,s,n);for(let r=0;r<10;r++){let o=-4.1+r*.9+(i()-.5)*.2,a=(r+Math.round(s))%3;if(a===0)for(let l=0;l<4;l++)C(new Un(.22+i()*.12,0),l%2?y.leaf:y.leaf2,o+(i()-.5)*.3,1.2+i()*.25,s+(i()-.5)*.3,n).castShadow=!1;else if(a===1){C(Ae(.02,.02,1.2,4),y.leaf,o,1.6,s,n);for(let l=0;l<5;l++)C(new Un(.14,0),y.leaf2,o+(i()-.5)*.3,1.2+l*.22,s+(i()-.5)*.3,n).castShadow=!1;for(let l=0;l<3;l++)C(new Be(.07,8,6),y.fruit,o+(i()-.5)*.3,1.3+i()*.8,s+(i()-.5)*.25,n)}else for(let l=0;l<6;l++){let c=C(new Wt(.05,.5,4),y.leaf2,o+(i()-.5)*.25,1.25,s+(i()-.5)*.25,n,(i()-.5)*.6,0,(i()-.5)*.6);c.castShadow=!1}}}for(let s of[-.75,.75])C(xe(9,.06,.12,.02),y.growlight,0,2.7,s,n);e.light=ge(16737996,4,n,0,2.3,0),C(kt([[0,0],[.6,0],[.65,.1],[.65,1.5],[.5,1.7],[0,1.72]],24),y.white,-4.4,.5,3.6,n),Ui([ie(-4.4,1.6,3.6),ie(-4.2,1.9,3),ie(-4,1.5,2.6)],.05,y.metal,n)}});Object.assign(Qn,{fabricator(n,e){Ln(n,4,!0);let t=Lr(41);C(xe(7.4,.4,5.4,.08),y.panel,0,.2,0,n),C(xe(7,3.2,5,.18),y.white,0,2,0,n),C(new Fe(2.5,2.5,7,32,1,!1,0,Math.PI),y.panel,0,3.6,0,n,0,0,Math.PI/2).scale.set(1,1,.35);for(let o=0;o<6;o++)C(new Le(2.52,.05,6,24,Math.PI),y.metal,-3.3+o*1.32,3.6,0,n,0,Math.PI/2,0).scale.set(1,.35,1);C(xe(7.1,.2,5.1,.05),y.orange,0,3.55,0,n),C(xe(3.4,2.7,.2,.06),y.metal,0,1.75,2.52,n);for(let o=0;o<12;o++)C(new Ke(3,.16,.05),y.dark,0,.55+o*.2,2.64,n);Ni(n,3.4,.14,0,.35,2.66);for(let o of[-1.9,1.9])ge(16769184,.7,n,o,3,2.6);ic(n,t,16,-3.2,3.2,.8,3,-2.5,Math.PI),Hi(n,1.2,.8,2.6,1.6,2.52,0,6),Hi(n,1.2,.8,-2.6,1.6,2.52,0,6),Ui([ie(3.5,3,-1.5),ie(4.2,2.5,-1.8),ie(4.4,1,-2),ie(4.4,.4,-2)],.1,y.metal,n);let i=new ce;i.position.set(2.2,3.85,0),n.add(i),C(Ae(.45,.55,.4,24),y.dark,0,.2,0,i);let s=new ce;s.position.y=.4,s.rotation.z=.35,i.add(s),C(xe(.32,1.8,.32,.08),y.orange,0,.9,0,s),C(Ae(.22,.22,.45,16),y.metal,0,1.8,0,s,Math.PI/2,0,0);let r=new ce;r.position.y=1.8,r.rotation.z=-1.4,s.add(r),C(xe(.25,1.4,.25,.06),y.orange,0,.7,0,r),C(Ae(.12,.05,.35,12),y.chrome,0,1.55,0,r),e.arm=i,e.spark=ge(16764006,1,r,0,1.8,0);for(let[o,a,l]of[[-2.6,3.4,1.1],[-1.4,3.3,.9],[-2.1,3.6,.6]])C(xe(l,l,l,.05),y.dark,o,l/2+(l<.7?1.1:0),a,n),C(new Ke(l*1.01,.06,l*1.01),y.orange,o,l*.7+(l<.7?1.1:0),a,n)},turret(n,e){Ln(n,1.8),C(kt([[0,0],[1.9,0],[1.95,.15],[1.6,.9],[1.2,1.2],[0,1.2]],32),y.metal,0,0,0,n),ld(n,1.7,.2,12,.06),C(Ae(.65,.8,1.2,24),y.dark,0,1.75,0,n);let t=new ce;t.position.y=2.75,n.add(t),C(xe(1.7,1.05,2,.2),y.white,0,0,.1,t),C(xe(1.75,.18,2.05,.06),y.orange,0,.32,.1,t),C(xe(.9,.35,.6,.08),y.dark,0,.6,.4,t);for(let i of[-.42,.42]){C(Ae(.16,.16,.5,16),y.dark,i,0,-.95,t,Math.PI/2,0,0),C(Ae(.09,.09,1.9,16),y.metal,i,0,-1.9,t,Math.PI/2,0,0);for(let s=0;s<3;s++)C(new Le(.11,.025,6,16),y.cyan,i,0,-1.4-s*.35,t);C(Ae(.13,.11,.25,16),y.dark,i,0,-2.9,t,Math.PI/2,0,0)}C(Ae(.18,.18,.1,16),y.cyan,0,.1,-.92,t,Math.PI/2,0,0),e.eye=ge(3401471,.6,t,0,.1,-.98),Hi(t,.9,.4,0,-.1,1.12,0,4),e.head=t},reactor(n,e){Ln(n,5.2),C(kt([[0,0],[5.2,0],[5.3,.2],[5,1.3],[4.6,1.5],[0,1.5]],48),y.panel,0,0,0,n),Ni(n,2.5,.16,0,1,5.06);for(let r=0;r<16;r++){let o=r/16*Math.PI*2;Hi(n,.6,.45,Math.cos(o)*5.1,.75,Math.sin(o)*5.1,-o+Math.PI/2,4)}C(new Le(2.6,.9,24,64),y.white,0,3,0,n,Math.PI/2,0,0);for(let r=0;r<16;r++){let o=r/16*Math.PI*2,a=C(new Le(1,.12,8,24),y.dark,Math.cos(o)*2.6,3,Math.sin(o)*2.6,n);a.rotation.y=-o}let t=C(new Be(1.2,32,24),y.cyan,0,3,0,n);t.castShadow=!1;let i=C(new Le(3.9,.12,10,64),y.chrome,0,3,0,n),s=C(new Le(3.9,.12,10,64),y.chrome,0,3,0,n);s.rotation.x=Math.PI/2;for(let r=0;r<6;r++){let o=r*Math.PI/3;Pt(ie(Math.cos(o)*4.6,1.5,Math.sin(o)*4.6),ie(Math.cos(o)*3.2,3,Math.sin(o)*3.2),.18,y.metal,n)}for(let r=0;r<4;r++){let o=r*Math.PI/2+Math.PI/4;C(kt([[0,0],[.7,0],[.75,.1],[.75,4.2],[.6,4.5],[0,4.5]],24),y.white,Math.cos(o)*4.4,1.5,Math.sin(o)*4.4,n)}e.core=t,e.r1=i,e.r2=s,e.light=ge(3401471,7,n,0,3,0)},beacon(n,e){C(kt([[0,0],[7.4,0],[7.5,.1],[7.2,.5],[0,.5]],8),y.found,0,-.2,0,n,0,Math.PI/8,0).castShadow=!1,C(Ae(7.6,7.9,4,8),y.found,0,-2.3,0,n,0,Math.PI/8,0).castShadow=!1,C(new nn(4.2,4.8,64),y.orange,0,.32,0,n,-Math.PI/2,0,0),C(new nn(5.6,5.75,64),y.white,0,.32,0,n,-Math.PI/2,0,0);let t=document.createElement("canvas");t.width=t.height=128;let i=t.getContext("2d");i.fillStyle="#e8e4dc",i.font="bold 110px sans-serif",i.textAlign="center",i.fillText("H",64,104);let s=new Zt(t);s.colorSpace=_t,C(new Gn(3,3),new ve({map:s,transparent:!0,roughness:.8}),0,.33,0,n,-Math.PI/2,0,0),e.lights=[];for(let a=0;a<8;a++){let l=a*Math.PI/4+Math.PI/8;C(Ae(.15,.2,.15,12),y.dark,Math.cos(l)*6.6,.38,Math.sin(l)*6.6,n),e.lights.push(ge(16755251,1,n,Math.cos(l)*6.6,.55,Math.sin(l)*6.6))}let r=new ce;r.position.set(8.6,0,0),n.add(r);for(let[a,l]of[[-.35,-.35],[.35,-.35],[.35,.35],[-.35,.35]])Pt(ie(a*1.6,0,l*1.6),ie(a*.5,8.5,l*.5),.05,y.metal,r);for(let a=1;a<8.5;a+=1.1){let l=1.6-a/8.5*1.1;C(new Le(l*.5,.025,4,4),y.metal,0,a,0,r,Math.PI/2,0,Math.PI/4)}C(new Be(.9,24,8,0,Math.PI*2,0,Math.PI/3),y.white,0,8.4,.4,r).rotation.set(-1,0,0),e.tip=ge(16724016,1.6,r,0,9.3,0),C(xe(1.2,1,.8,.08),y.dark,-9.6,.5,4.5,n),La(n,-9.6,.6,4.92)}});Object.assign(Qn,{lab(n,e){Ln(n,4),C(Ae(4.1,4.2,.4,40),y.panel,0,.2,0,n),C(Ae(3.2,3.4,2.8,40),y.white,0,1.8,0,n),C(Ae(3.25,3.25,.2,40),y.orange,0,3.1,0,n);for(let i=0;i<10;i++){let s=i/10*Math.PI*2,r=new ce;r.position.set(Math.cos(s)*3.32,2,Math.sin(s)*3.32),r.rotation.y=-s+Math.PI/2,n.add(r),C(xe(.9,.7,.1,.06),y.metal,0,0,0,r),C(xe(.78,.58,.08,.05),y.window,0,0,.04,r)}C(new Be(2.2,40,16,0,Math.PI*2,0,Math.PI/2),y.white,0,3.2,0,n),C(xe(.9,2.4,.2,.05),y.dark,0,4.4,1.5,n,-.9,0,0);let t=C(Ae(.35,.45,2.6,20),y.metal,0,5.2,.9,n,-.7,0,0);C(new Le(.37,.05,8,20),y.cyan,0,6.15,1.75,n,-.7+Math.PI/2,0,0),e.scope=t,C(Ae(.05,.07,3,8),y.metal,-2.4,4.5,-1.2,n),e.tip=ge(8382207,1,n,-2.4,6.1,-1.2),C(xe(1.5,1,1,.08),y.dark,3.4,.7,-2,n),Hi(n,1,.6,3.4,.7,-1.48,0,5),C(xe(1.3,2.1,.15,.1),y.metal,0,1.25,3.38,n),C(xe(1.1,1.9,.1,.08),y.dark,0,1.2,3.44,n),e.light=ge(8382207,2,n,0,6.3,1.9)},trade(n,e){Ln(n,4.8,!0),C(xe(9.6,.4,9.6,.1),y.found,0,.2,0,n),Ni(n,9.6,.15,0,.42,4.82);let t=[y.orange,y.white,y.dark,y.red2],i=0;for(let[o,a,l]of[[-3.2,-2.6,2],[-3.2,-.2,1],[-3.2,2.2,2],[.2,-2.6,1],[.2,2.6,1]])for(let c=0;c<l;c++){let d=C(xe(2.2,1.1,2,.05),t[i++%t.length],o,.95+c*1.12,a,n);for(let u=0;u<5;u++)C(new Ke(.04,.9,2.02),y.metal,o-.8+u*.4,.95+c*1.12,a,n)}let s=new ce;s.position.set(3.2,.4,0),n.add(s);for(let[o,a]of[[-.4,-.4],[.4,-.4],[.4,.4],[-.4,.4]])Pt(ie(o,0,a),ie(o*.6,6,a*.6),.06,y.orange,s);for(let o=1;o<6;o+=1.2)C(new Le(.42-o*.03,.03,4,4),y.orange,0,o,0,s,Math.PI/2,0,Math.PI/4);let r=new ce;r.position.y=6.1,s.add(r),C(xe(.6,.5,.6,.06),y.dark,0,0,0,r),C(xe(.25,.25,6,.04),y.orange,0,.2,-2,r),C(xe(.6,.6,.8,.05),y.dark,0,.1,1.2,r),Pt(ie(0,.1,-4.6),ie(0,-3,-4.6),.015,y.metal,r),C(xe(.5,.2,.5,.03),y.metal,0,-3.1,-4.6,r),e.jib=r,C(Ae(.05,.05,2.4,6),y.metal,-4.2,1.6,4.2,n),e.tip=ge(6750105,1,n,-4.2,2.9,4.2)}});Object.assign(Qn,{apartment(n,e){Ln(n,4.4,!0);let t=Lr(91),[i,s]=kl;C(xe(8.6,.6,8.6,.15),y.panel,0,.3,0,n);let r=(o,a,l,c,d)=>{C(xe(l,c,l,.25),d,o,.6+c/2,a,n);for(let u=2.2;u<c;u+=2.2)C(new Ke(l+.08,.12,l+.08),y.white,o,.6+u,a,n);for(let u of[-1,1])C(new Ke(.16,c,.16),y.metal,o+u*l/2,.6+c/2,a+l/2,n),C(new Ke(.16,c,.16),y.metal,o+u*l/2,.6+c/2,a-l/2,n)};r(-1.3,-1.2,4.6,17,i),r(2.1,2,3.6,11,s),C(xe(4,1.2,4,.3),y.white,-1.3,18.2,-1.2,n),C(xe(3,.9,3,.3),y.white,2.1,12.1,2,n),C(xe(2.6,1.1,1.4,.4),y.glass,.6,7.4,.6,n,0,Math.PI/4,0).castShadow=!1;for(let o of[6.9,7.9])C(xe(2.7,.1,1.5,.04),y.metal,.6,o,.6,n,0,Math.PI/4,0);for(let o=0;o<6;o++)C(new Un(.35+t()*.2,0),y.leaf2,1.4+t()*1.4,12.75,1.3+t()*1.4,n);ic(n,t,8,-2.8,.2,18.6,18.9,.6),C(Ae(.08,.1,4,8),y.metal,-1.3,20.8,-1.2,n),e.tip=ge(16728128,1.4,n,-1.3,22.9,-1.2),C(xe(2.4,.15,1.6,.05),y.orange,-1.3,3.2,1.9,n);for(let o of[-2.3,-.3])C(Ae(.05,.05,2.6,8),y.metal,o,1.9,2.6,n);ge(16767392,1.2,n,-1.3,3,2.2)},vfarm(n,e){Ln(n,4),C(Ae(4,4.2,.8,40),y.panel,0,.4,0,n);let t=C(Ae(3.3,3.3,15,40,!0),y.glass,0,8.3,0,n);t.castShadow=!1;for(let s=0;s<8;s++){let r=s/8*Math.PI*2;C(new Ke(.14,15,.14),y.white,Math.cos(r)*3.32,8.3,Math.sin(r)*3.32,n)}let i=Lr(55);for(let s=0;s<6;s++){let r=1.4+s*2.4;C(Ae(3.1,3.1,.18,40),y.white,0,r,0,n),C(new Le(3.15,.06,6,40),y.metal,0,r+.1,0,n,Math.PI/2,0,0),C(Ae(2.8,2.8,.12,40),y.soil,0,r+.15,0,n);for(let o=0;o<16;o++){let a=o/16*Math.PI*2+s;C(new Un(.22+i()*.12,0),o%2?y.leaf:y.leaf2,Math.cos(a)*(1.7+i()*.9),r+.4,Math.sin(a)*(1.7+i()*.9),n).castShadow=!1}C(new Le(2,.04,6,32),y.growlight,0,r+2.1,0,n,Math.PI/2,0,0)}C(Ae(.5,.5,15,16),y.metal,0,8.3,0,n),C(new Be(3.3,40,12,0,Math.PI*2,0,Math.PI/2),y.glass,0,15.8,0,n).castShadow=!1,C(new Le(3.32,.1,8,40),y.orange,0,15.8,0,n,Math.PI/2,0,0),Ui([ie(3.4,1,1),ie(4.4,.6,1.4),ie(5.2,.3,2.2)],.1,y.metal,n),e.light=ge(16737996,8,n,0,8,0)},lifehub(n,e){Ln(n,5.8),C(kt([[0,0],[6,0],[6.1,.2],[5.8,1.2],[0,1.2]],48),y.panel,0,0,0,n),C(new Be(4.4,48,20,0,Math.PI*2,0,Math.PI/2),y.white,0,1.2,0,n).scale.y=.75,C(new Le(4.45,.18,10,48),y.orange,0,1.6,0,n,Math.PI/2,0,0);for(let i=0;i<8;i++){let s=i/8*Math.PI*2;Hi(n,1,.5,Math.cos(s)*5.9,.6,Math.sin(s)*5.9,-s+Math.PI/2,4)}for(let i=0;i<4;i++){let s=i*Math.PI/2+Math.PI/4,r=Math.cos(s)*5,o=Math.sin(s)*5;C(kt([[0,0],[.95,0],[1,.2],[1,4.4],[.8,4.8],[0,4.85]],28),y.white,r,.4,o,n),C(Ae(1.02,1.02,.3,28,!0),y.cyan,r,3.6,o,n),ad(n,r*1.2,.4,o*1.2,4.2,-s-Math.PI/2,.4),Ui([ie(r*.8,2.6,o*.8),ie(r*.6,2.8,o*.6),ie(r*.45,2.4,o*.45)],.12,y.metal,n)}C(Ae(1.6,1.8,.6,32),y.dark,0,4.4,0,n),C(new Le(1.7,.08,6,32),y.metal,0,4.75,0,n,Math.PI/2,0,0);let t=new ce;t.position.y=4.8,n.add(t);for(let i=0;i<5;i++)C(xe(1.5,.05,.4,.02),y.metal,Math.cos(i*1.256)*.8,0,Math.sin(i*1.256)*.8,t,0,-i*1.256,.25);e.fan=t,e.light=ge(6741503,4,n,0,5.2,0)},plaza(n,e){Ln(n,7.2),C(kt([[0,0],[7.3,0],[7.4,.1],[7.2,.4],[0,.4]],64),y.found,0,0,0,n);for(let s=2.5;s<7;s+=1.5)C(new Le(s,.03,4,64),y.metal,0,.41,0,n,Math.PI/2,0,0);C(new nn(5.4,5.75,64),y.orange,0,.42,0,n,-Math.PI/2,0,0),C(kt([[0,0],[2.1,0],[2,.3],[1.5,.5],[1.4,1.3],[1.6,1.45],[0,1.45]],40),y.white,0,.4,0,n),C(new Le(1.55,.06,8,40),y.cyan,0,1.85,0,n,Math.PI/2,0,0);for(let s=0;s<6;s++){let r=s*Math.PI/3+Math.PI/6,o=new ce;o.position.set(Math.cos(r)*5,.4,Math.sin(r)*5),o.rotation.y=-r+Math.PI/2,n.add(o),C(xe(2.2,.12,.6,.05),y.panel,0,.45,0,o),C(xe(2.2,.5,.1,.04),y.panel,0,.75,.28,o);for(let l of[-.9,.9])C(xe(.1,.45,.5,.03),y.metal,l,.22,0,o);let a=r+.52;C(kt([[0,0],[.18,0],[.12,.2],[.06,.3],[.05,3.4],[0,3.4]],12),y.metal,Math.cos(a)*6.6,.4,Math.sin(a)*6.6,n),C(new Be(.2,12,8),y.lamp,Math.cos(a)*6.6,3.95,Math.sin(a)*6.6,n),ge(16767392,1.1,n,Math.cos(a)*6.6,3.95,Math.sin(a)*6.6)}let t=C(new Be(1.5,40,24),new ke({map:Qn._earthTex?Qn._earthTex():null,color:10479359,transparent:!0,opacity:.7,blending:He,depthWrite:!1}),0,4,0,n);t.castShadow=!1;for(let s=0;s<2;s++){let r=C(new Le(2+s*.3,.015,4,64),y.cyan,0,4,0,n,Math.PI/2+.3-s*.6,0,0);r.castShadow=!1}let i=ge(6736127,5,n,0,4,0);C(new Fe(1.1,1.5,2.2,32,1,!0),new ke({color:8382207,transparent:!0,opacity:.1,blending:He,depthWrite:!1,side:bt}),0,2.95,0,n).castShadow=!1,e.earth=t,e.halo=i},drones(n,e){Ln(n,3.8,!0),C(xe(7.6,.5,7.6,.12),y.panel,0,.25,0,n),Ni(n,7.6,.14,0,.42,3.81),Ni(n,7.6,.14,0,.42,-3.81);for(let[s,r]of[[-1.9,-1.9],[1.9,-1.9],[-1.9,1.9],[1.9,1.9]]){C(Ae(1.15,1.2,.12,32),y.dark,s,.56,r,n),C(new nn(.8,.95,32),y.orange,s,.63,r,n,-Math.PI/2,0,0);for(let o=0;o<4;o++){let a=o*Math.PI/2;C(Ae(.06,.06,.06,8),y.lamp,s+Math.cos(a)*1.05,.64,r+Math.sin(a)*1.05,n)}}C(xe(1.4,4.2,1.4,.15),y.white,3,2.4,3,n),C(xe(1.6,.9,1.6,.15),y.glass,3,4.6,3,n).castShadow=!1,C(xe(1.7,.15,1.7,.05),y.orange,3,5.1,3,n),ad(n,3,.5,2.25,4,0,.4);let t=new ce;t.position.set(3,5.5,3),n.add(t);let i=C(new Be(.9,24,8,0,Math.PI*2,0,Math.PI/3),y.white,0,.2,0,t);i.rotation.x=Math.PI*.6,C(Ae(.04,.04,.8,6),y.metal,0,.3,.25,t).rotation.x=1.1,e.dish=t,e.light=ge(8382207,1.2,n,3,6.3,3),C(xe(1.6,1,1,.08),y.dark,-3,1,3,n),Hi(n,1,.6,-3,1,3.51,0,5)},terraformer(n,e){Ln(n,7),C(kt([[0,0],[7.4,0],[7.5,.3],[7,2],[5.5,2.4],[0,2.4]],6),y.panel,0,0,0,n),C(kt([[0,0],[4.4,0],[3.8,8],[3,16],[2.3,24],[1.6,28],[0,28.5]],6),y.white,0,2.4,0,n);for(let i of[6,14,22])C(new Le(4.6-i*.11,.3,6,6),y.orange,0,2.4+i,0,n,Math.PI/2,0,Math.PI/6);for(let i=0;i<6;i++){let s=i*Math.PI/3;Pt(ie(Math.cos(s)*7,2,Math.sin(s)*7),ie(Math.cos(s)*3.5,14,Math.sin(s)*3.5),.35,y.metal,n)}for(let i=0;i<6;i++){let s=i*Math.PI/3+Math.PI/6;Hi(n,1.4,2.4,Math.cos(s)*4,5,Math.sin(s)*4,-s+Math.PI/2,8)}e.rings=[];for(let i=0;i<3;i++){let s=C(new Le(6-i*1.2,.22,10,64),y.cyan,0,10+i*8,0,n);s.castShadow=!1,e.rings.push(s)}C(Ae(1.2,1.6,2,24),y.dark,0,31.5,0,n);let t=C(new Fe(.6,1.4,400,16,1,!0),new ke({color:6743807,transparent:!0,opacity:0,blending:He,depthWrite:!1,side:bt}),0,232,0,n);t.castShadow=!1,t.receiveShadow=!1,e.beam=t,e.top=ge(6743807,9,n,0,32.5,0)},launch(n,e){Ln(n,9,!0),C(xe(18.4,1.2,18.4,.2),y.found,0,.6,0,n),C(new nn(4.8,5.8,48),y.orange,0,1.22,0,n,-Math.PI/2,0,0),C(Ae(3.6,3.6,.3,32),y.dark,0,1.3,0,n),Ni(n,18.4,.2,0,1.25,9.21);let t=new ce;t.position.set(7.5,1.2,0),n.add(t);for(let[r,o]of[[-1.5,-1.5],[1.5,-1.5],[1.5,1.5],[-1.5,1.5]])Pt(ie(r,0,o),ie(r,34,o),.14,y.orange,t);for(let r=0;r<34;r+=2.5)for(let[o,a,l,c]of[[-1.5,-1.5,1.5,-1.5],[1.5,-1.5,1.5,1.5],[1.5,1.5,-1.5,1.5],[-1.5,1.5,-1.5,-1.5]])Pt(ie(o,r,a),ie(l,r+2.5,c),.04,y.metal,t),Pt(ie(o,r,a),ie(l,r,c),.05,y.metal,t);for(let r of[12,24])C(xe(4.2,.4,1,.06),y.dark,-3.2,r,0,t),Pt(ie(-1.5,r,0),ie(-5,r,0),.06,y.metal,t);let i=new ce;i.position.y=1.4,n.add(i),C(kt([[0,0],[2.6,.2],[2.8,2],[2.7,22],[2.4,25],[1.6,29],[.6,31.5],[0,32]],40),y.white,0,0,0,i);for(let r of[8,19])C(Ae(2.79,2.79,1.2,40,!0),y.orange,0,r,0,i);for(let r of[4,12,16,23])C(new Le(2.76,.04,6,40),y.metal,0,r,0,i,Math.PI/2,0,0);for(let r=0;r<4;r++)Ir(i,Math.cos(r*1.57)*2.62,25.5,Math.sin(r*1.57)*2.62,.3,Math.PI/2-r*1.57,0);for(let r=0;r<4;r++){let o=r*Math.PI/2,a=C(xe(.35,7,3.4,.1),y.panel,Math.cos(o)*3.1,3.5,Math.sin(o)*3.1,i);a.rotation.y=-o}for(let r=0;r<5;r++){let o=r*Math.PI*2/5;C(kt([[.4,0],[.6,-.3],[1,-1.4],[.9,-1.4],[.5,-.35]],20),y.metal,Math.cos(o)*1.4,.2,Math.sin(o)*1.4,i)}let s=new Q(new Wt(3,16,16,1,!0),y.flame);s.rotation.x=Math.PI,s.position.y=-8,s.visible=!1,i.add(s),e.ship=i,e.flame=s,e.tip=ge(16777215,3,i,0,32.5,0)},monument(n,e){Ln(n,6);for(let s=0;s<3;s++)C(Ae(6.2-s*1.2,6.4-s*1.2,.6,8),s%2?y.white:y.panel,0,.3+s*.6,0,n,0,Math.PI/8,0);let t=["\u706B\u661F","\u6728\u536B\u4E8C","\u5F00\u666E\u52D2"];for(let s=0;s<3;s++){let r=s*Math.PI*2/3,o=new ce;o.position.set(Math.cos(r)*1,1.8,Math.sin(r)*1),o.rotation.y=-r+Math.PI/2,n.add(o),C(new Ke(1.8,26,.5),y.white,0,13,0,o,0,0,0).geometry.translate(0,0,0);let a=document.createElement("canvas");a.width=128,a.height=512;let l=a.getContext("2d");l.fillStyle="#f0ebe2",l.fillRect(0,0,128,512),l.fillStyle="#b8862e",l.font="600 54px sans-serif",l.textAlign="center",[...t[s]].forEach((d,u)=>l.fillText(d,64,120+u*70));let c=new Zt(a);c.colorSpace=_t,C(new Gn(1.4,5.6),new ve({map:c,roughness:.6}),0,6,.26,o)}e.rings=[];let i=[16742954,6743807,10551104];for(let s=0;s<3;s++){let r=C(new Le(3.6-s*.5,.12,10,64),new ve({color:1118481,emissive:i[s],emissiveIntensity:2}),0,16+s*4,0,n);r.castShadow=!1,e.rings.push(r)}C(new Ai(1,0),y.chrome,0,30,0,n),e.top=ge(16777215,8,n,0,30,0)}});function Ox(){let n=new ce,e=Lr(5);C(kt([[0,1],[2.6,1.05],[3.25,1.25],[3.35,1.45],[3.2,1.6],[0,1.6]],48),y.ablative,0,0,0,n),C(kt([[3.05,1.6],[3,2.2],[2.75,3.4],[2.35,4.6],[1.95,5.6],[1.75,6],[0,6]],48),y.white,0,0,0,n),C(kt([[3.02,2.05],[3.04,2.35],[2.98,2.4]],48),y.orange,0,0,0,n),C(kt([[2,5.45],[2.02,5.6],[1.95,5.62]],48),y.orange,0,0,0,n),C(Ae(1.6,1.75,.35,40),y.panel,0,6.15,0,n),C(new Le(1.25,.12,10,40),y.metal,0,6.38,0,n,Math.PI/2,0,0),C(new Be(1.15,32,12,0,Math.PI*2,0,Math.PI/2),y.white,0,6.35,0,n).scale.y=.6,ld(n,1.45,6.34,16,.04);let t=Ir(n,0,4.55,2.33,.36,0,-.33);Ir(n,-.95,4.35,2.2,.26,-.42,-.33),Ir(n,.95,4.35,2.2,.26,.42,-.33);let i=new ce;i.position.set(2.82,2.75,0),i.rotation.set(0,Math.PI/2,.22),n.add(i),C(xe(1.25,1.75,.14,.12),y.metal,0,0,0,i),C(xe(1.05,1.55,.1,.1),y.panel,0,0,.06,i),C(xe(.1,.45,.08,.03),y.chrome,.38,-.05,.13,i),Ir(i,0,.45,.13,.15),Ni(i,1.25,.1,0,-.92,.08);for(let d=0;d<6;d++)C(xe(.9,.06,.28,.02),y.metal,3.3+d*.2,1.75-d*.29,0,n);Pt(ie(3.2,1.9,-.48),ie(4.4,.1,-.48),.035,y.metal,n),Pt(ie(3.2,1.9,.48),ie(4.4,.1,.48),.035,y.metal,n);for(let d=0;d<4;d++){let u=d*Math.PI/2+Math.PI/4,f=new ce;f.position.set(Math.cos(u)*2.15,5,Math.sin(u)*2.15),f.rotation.y=-u,n.add(f),C(xe(.36,.36,.36,.05),y.dark,0,0,0,f);for(let[p,g]of[[.25,0],[-.25,0],[0,.25],[0,-.25]]){let x=C(new Wt(.07,.16,10,1,!0),y.metal,0,g,p,f);x.rotation.x=g?g>0?0:Math.PI:p>0?Math.PI/2:-Math.PI/2}}for(let d=0;d<4;d++){let u=d*Math.PI/2,f=C(kt([[.18,1.05],[.22,.85],[.42,.45],[.55,.2],[.5,.2],[.38,.45],[.15,.85]],24),y.dark,Math.cos(u)*1.2,0,Math.sin(u)*1.2,n);f.material=y.metal}C(Ae(.7,.9,.5,24),y.dark,0,.8,0,n);for(let d=0;d<4;d++){let u=d*Math.PI/2+Math.PI/4,f=Math.cos(u),p=Math.sin(u),g=ie(f*2.7,2.1,p*2.7),x=ie(f*3.55,1,p*3.55),v=ie(f*4.1,.18,p*4.1);Pt(g,x,.11,y.white,n),C(new Be(.15,12,8),y.metal,x.x,x.y,x.z,n),Pt(x,v,.075,y.chrome,n),Pt(x.clone().lerp(v,.3),x.clone().lerp(v,.3).add(ie(0,.01,0)),.1,y.metal,n),Pt(ie(f*2.4,1.3,p*2.4),x.clone().lerp(v,.25),.05,y.metal,n),Pt(ie(f*2.6-p*.6,1.7,p*2.6+f*.6),x,.035,y.metal,n),Pt(ie(f*2.6+p*.6,1.7,p*2.6-f*.6),x,.035,y.metal,n),C(kt([[0,0],[.55,0],[.6,.06],[.35,.2],[.1,.22],[0,.22]],24),y.metal,v.x,0,v.z,n)}C(Ae(.04,.05,1.8,8),y.metal,.6,7.1,-.4,n),C(new Be(.5,24,8,0,Math.PI*2,0,Math.PI/3.2),y.white,-.7,6.95,.3,n).rotation.set(-.8,.6,0),C(Ae(.04,.04,.8,6),y.metal,-.7,6.55,.3,n),Ui([ie(-1.6,5.7,-1.4),ie(-2.3,4.3,-1.9),ie(-2.9,2.6,-2.1),ie(-3.05,1.7,-2.2)],.05,y.dark,n),Ui([ie(1.6,5.7,-1.4),ie(2.3,4.3,-1.9),ie(2.9,2.6,-2.05)],.04,y.orange,n),ic(n,e,14,-1.2,1.2,2.4,3.6,-2.95,Math.PI);let r=document.createElement("canvas");r.width=512,r.height=96;let o=r.getContext("2d");o.clearRect(0,0,512,96),o.fillStyle="#d4581c",o.font="bold 54px sans-serif",o.textAlign="center",o.fillText("\u65B9\u821F\u4E00\u53F7 \xB7 ARK-1",256,66);let a=new Zt(r);a.colorSpace=_t;let l=new Q(new Gn(3.4,.64),new ve({map:a,transparent:!0,roughness:.6}));l.position.set(0,3.2,-2.87),l.rotation.set(.32,Math.PI,0),n.add(l);let c=ge(6750105,1.4,n,.6,8.05,-.4);return{group:n,beacon:c,window:t}}var od=new ve({color:2757906,roughness:.28,metalness:.7,flatShading:!0}),r0=new ve({color:2757906,roughness:.35,metalness:.7});function Fx(n,e,t){let i=new ce,s=new ce;i.add(s);let r=new ve({color:2230272,emissive:e.emissive,emissiveIntensity:1.6});C(new Un(.75,1),od,0,1,.2,s).scale.set(1.05,.62,1),C(new Un(.85,1),od,0,1.1,-.85,s).scale.set(.95,.7,1.25),C(new Un(.42,1),od,0,.95,1,s).scale.set(1.1,.7,1);let c=Lr(Math.floor(Math.random()*1e6)+1);for(let u=0;u<9;u++){let f=C(new Ai(.22+c()*.15,0),e,(c()-.5)*.9,1.45+c()*.25,-1.1+c()*1.4,s,(c()-.5)*.8,c()*3,(c()-.5)*.8);f.scale.y=1.8+c()*1.4}for(let[u,f,p]of[[-.17,1.03,.05],[.17,1.03,.05],[-.1,1.12,.035],[.1,1.12,.035]])C(new Be(p,10,8),t,u,f,1.36,s);for(let u of[-1,1])C(new Wt(.06,.45,6),od,u*.16,.78,1.42,s).rotation.set(Math.PI/2+.3,0,u*.35);let d=[];for(let u=0;u<6;u++){let f=u<3?-1:1,p=u%3-1,g=new ce;g.position.set(f*.62,1,p*.55+.1),s.add(g);let x=ie(0,0,0),v=ie(f*.75,.45,p*.15),m=ie(f*1.35,.1,p*.25),E=ie(f*1.55,-.98,p*.35);Pt(x,v,.08,r0,g,14),Pt(v,m,.065,r0,g,14),Pt(m,E,.045,r0,g,14);for(let b of[v,m])C(new Be(.09,8,6),r,b.x,b.y,b.z,g);C(new Wt(.05,.18,6),e,E.x,E.y-.05,E.z,g,Math.PI,0,0),g.userData.phase=u%2*Math.PI+p*.5,g.userData.side=f,d.push(g)}return i.scale.setScalar(n),{group:i,legs:d,inner:s}}function Bx(){let n=new ce;C(kt([[0,.6],[1.9,.7],[2.5,1.2],[2.6,2],[2.2,4.5],[1.6,6.6],[.9,7.8],[0,8.2]],40),y.white,0,0,0,n),C(Ae(2.62,2.62,.5,40,!0),y.orange,0,2.2,0,n),C(kt([[0,.3],[2.4,.35],[2.55,.65],[0,.7]],40),y.ablative,0,0,0,n);for(let i=0;i<5;i++)Ir(n,Math.cos(i*1.256)*2.1,4.4,Math.sin(i*1.256)*2.1,.22,Math.PI/2-i*1.256,-.25);for(let i=0;i<3;i++){let s=i*Math.PI*2/3,r=Math.cos(s),o=Math.sin(s);Pt(ie(r*2.2,2,o*2.2),ie(r*3.1,.1,o*3.1),.09,y.chrome,n),C(Ae(.45,.5,.1,16),y.metal,r*3.1,.05,o*3.1,n);let a=C(xe(.18,2.4,1.4,.06),y.panel,r*2.55,1.9,o*2.55,n);a.rotation.y=-s}for(let i=0;i<3;i++){let s=i*Math.PI*2/3+1;C(kt([[.3,0],[.45,-.25],[.75,-.9],[.65,-.9],[.35,-.3]],20),y.metal,Math.cos(s)*.9,.35,Math.sin(s)*.9,n)}C(Ae(.04,.04,1.2,6),y.metal,0,8.6,0,n),ge(16728128,.8,n,0,9.2,0);let e=new Q(new Wt(1.4,6,14,1,!0),y.flame);e.rotation.x=Math.PI,e.position.y=-2.6,n.add(e);let t=ge(16752704,9,n,0,-.5,0);return{group:n,flame:e,flameGlow:t}}Object.assign(Qn,{lamp(n,e){C(Ae(.55,.62,.3,8),y.found,0,.1,0,n,0,Math.PI/8,0).castShadow=!1,C(Ae(.62,.62,2,8),y.found,0,-1.1,0,n,0,Math.PI/8,0).castShadow=!1,ld(n,.45,.28,6,.035),C(kt([[0,0],[.2,0],[.2,.08],[.13,.2],[.11,.6],[.075,3.6],[.06,4],[0,4]],16),y.metal,0,.25,0,n),C(Ae(.135,.135,.5,16),y.hazard,0,.75,0,n),C(xe(.22,.32,.14,.03),y.dark,0,1.3,.14,n),e.led=ge(5635993,.18,n,.06,1.42,.22),Ui([ie(0,1.12,.18),ie(0,.6,.2),ie(0,.3,.32),ie(0,.22,.48)],.02,y.rubber,n,12),C(kt([[0,0],[.62,0],[.66,.05],[.55,.16],[.22,.26],[.08,.3],[0,.3]],32),y.white,0,4.18,0,n),C(new Le(.5,.035,8,40),y.lamp,0,4.17,0,n,Math.PI/2,0,0).castShadow=!1;let t=C(new di(.42,32),y.lamp,0,4.15,0,n,Math.PI/2,0,0);t.castShadow=!1,C(new Le(.64,.02,6,40),y.metal,0,4.2,0,n,Math.PI/2,0,0);let i=new ce;i.position.set(0,4.55,0),i.rotation.x=-.45,n.add(i),C(Ae(.025,.025,.25,6),y.metal,0,-.1,0,i),C(xe(.7,.03,.45,.01),y.cell,0,.04,0,i),Pt(ie(.25,4.45,-.1),ie(.3,5.2,-.12),.008,y.metal,n,4),e.glow=ge(16767392,1.7,n,0,4.1,0)}});function Gx(){let n=new ce,e=new ce;e.position.y=.55,n.add(e),C(kt([[1.28,.3],[1.22,.55],[1.05,1.2],[.8,1.9],[.55,2.35],[.42,2.45],[0,2.47]],40),y.white,0,0,0,e),C(kt([[0,0],[.9,.06],[1.24,.2],[1.32,.3],[1.28,.36],[0,.36]],40),y.ablative,0,0,0,e),C(Ae(1.18,1.23,.18,40),y.orange,0,.72,0,e);for(let[l,c]of[[.98,1.35],[.66,2.05]])C(new Le(l,.015,4,48),y.dark,0,c,0,e,Math.PI/2,0,0);let t=1,i=Math.PI/2,s=new ce;s.position.set(0,1.35,0),e.add(s);let r=C(xe(.62,.72,.06,.08),y.panel,0,0,t-.06,s);r.rotation.x=-.36,Ir(e,.55,1.75,.6,.14,Math.PI/4.2,-.38),Ni(s,.62,.06,0,-.42,t-.03+.12).rotation.x=-.36;for(let l=0;l<4;l++){let c=l*Math.PI/2+Math.PI/4,d=Math.cos(c),u=Math.sin(c),f=new ce;f.position.set(d*.98,1.55,u*.98),f.rotation.y=-c,e.add(f),C(xe(.22,.26,.16,.03),y.dark,.05,0,0,f);for(let[p,g]of[[.15,0],[.05,.14]])C(Ae(.025,.045,.08,8),y.metal,p,g,0,f,0,0,-Math.PI/2)}C(Ae(.3,.38,.2,24),y.panel,0,2.55,0,e),C(Ae(.32,.32,.04,24),y.orange,0,2.66,0,e),Pt(ie(.18,2.6,.05),ie(.22,3.4,.08),.012,y.metal,e,4);for(let l=0;l<4;l++){let c=l*Math.PI/2,d=Math.cos(c),u=Math.sin(c);Pt(ie(d*1.05,1.05,u*1.05),ie(d*1.7,.04,u*1.7),.05,y.metal,n,8),Pt(ie(d*1.2,.62,u*1.2),ie(d*1.48,.38,u*1.48),.035,y.chrome,n,8),C(Ae(.2,.24,.07,16),y.dark,d*1.72,.035,u*1.72,n)}let o=ge(6750105,1.1,e,.22,3.42,.08),a=new Q(new Wt(.85,4.5,20,1,!0),y.flame);return a.rotation.x=Math.PI,a.position.y=-1.7,n.add(a),{g:n,beacon:o,flame:a}}var hn=n=>()=>Dx(n)>=1,Dr=(n,e)=>({check:()=>h.stats.mined[n]>=e,prog:()=>`${Math.min(h.stats.mined[n],e)}/${e}`}),po=n=>({text:`\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C${qn[n].name}\u300D`,check:()=>h.cityLevel>=n,prog:()=>`\u4EBA\u53E3 ${h.colony.pop}/${qn[n].pop}`}),hd=n=>({text:`\u4EBA\u53E3\u8FBE\u5230 ${n}`,check:()=>h.colony.pop>=n,prog:()=>`${h.colony.pop}/${n}`}),Vx={text:"\u53D1\u5C04\u6B96\u6C11\u8230",check:()=>!!h.launched,prog:()=>"\u9760\u8FD1\u53D1\u5C04\u53F0\u6309 E"},Y_=[{title:"\u7B2C\u4E00\u7AE0 \xB7 \u7740\u9646",sub:"\u6D3B\u4E0B\u53BB",goals:[{text:"\u91C7\u96C6\u94C1\u77FF",...Dr("iron",10)},{text:"\u91C7\u96C6\u7845\u6676",...Dr("silicon",6)},{text:"\u91C7\u96C6\u6C34\u51B0",...Dr("ice",6)},{text:"\u5EFA\u9020\u592A\u9633\u80FD\u9635\u5217",check:hn("solar")},{text:"\u5EFA\u9020\u5236\u6C27\u7AD9",check:hn("oxygen")}],radio:[["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u7740\u9646\u6210\u529F\u3002\u5916\u90E8\u6C14\u538B 0.6 \u5343\u5E15\uFF0C\u6C14\u6E29\u96F6\u4E0B 63 \u6444\u6C0F\u5EA6\u3002\u6B22\u8FCE\u6765\u5230\u706B\u661F\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u65B9\u821F\u4E00\u53F7\uFF0C\u8FD9\u91CC\u662F\u5730\u7403\u8054\u5408\u6307\u6325\u4E2D\u5FC3\u3002\u542C\u5230\u8BF7\u56DE\u7B54\u2026\u2026\u5F88\u597D\u3002\u4F60\u662F\u7B2C\u4E00\u4E2A\u8E0F\u4E0A\u8FD9\u7247\u571F\u5730\u7684\u4EBA\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u7740\u9646\u8231\u53EA\u80FD\u5728\u5B83\u5468\u56F4\u5F88\u5C0F\u7684\u8303\u56F4\u5185\u7ED9\u4F60\u8865\u6C27\u3002\u6309\u4F4F\u5DE6\u952E\u7528\u91C7\u77FF\u6FC0\u5149\u91C7\u96C6\u94C1\u77FF\u3001\u7845\u6676\u548C\u6C34\u51B0\uFF0C\u7136\u540E\u6309 B \u5EFA\u8D77\u7B2C\u4E00\u5EA7\u5236\u6C27\u7AD9\u3002"]]},{title:"\u7B2C\u4E8C\u7AE0 \xB7 \u7B2C\u4E00\u4E2A\u5BB6",sub:"\u4E3A\u540E\u6765\u7684\u4EBA\u70B9\u4E00\u76CF\u706F",goals:[{text:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",check:hn("habitat")},{text:"\u5EFA\u9020\u6E29\u5BA4",check:hn("greenhouse")},{text:"\u5EFA\u9020\u6C34\u51B0\u63D0\u53D6\u5668",check:hn("extractor")},{text:"\u5EFA\u9020\u7740\u9646\u573A",check:hn("beacon")},{text:"\u8FCE\u63A5\u7B2C\u4E00\u6279\u79FB\u6C11",check:()=>h.stats.arrived>=1,prog:()=>h.colony.support>0?"\u7B49\u5F85\u98DE\u8239":"\u9700\u8981\u4F4F\u623F/\u6C27/\u6C34/\u98DF\u7269/\u7535"}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5236\u6C27\u7AD9\u8FD0\u8F6C\u6B63\u5E38\uFF01\u5B83\u5468\u56F4 14 \u7C73\u90FD\u80FD\u7ED9\u5B87\u822A\u670D\u8865\u6C27\uFF0C\u4F60\u53EF\u4EE5\u8D70\u5F97\u66F4\u8FDC\u4E86\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5730\u7403\u4E0A\u6709\u5341\u4E07\u4EBA\u62A5\u540D\u4E86\u79FB\u6C11\u8BA1\u5212\u3002\u5EFA\u597D\u7A79\u9876\u3001\u6E29\u5BA4\u3001\u6C34\u6E90\u548C\u7740\u9646\u573A\u2014\u2014\u7ED9\u4ED6\u4EEC\u4E00\u4E2A\u53EF\u4EE5\u56DE\u7684\u5BB6\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u63D0\u793A\uFF1A\u592A\u9633\u80FD\u5728\u591C\u95F4\u53EA\u5269\u56DB\u6210\u529F\u7387\u3002\u591A\u5EFA\u51E0\u5EA7\uFF0C\u6B96\u6C11\u5730\u624D\u4E0D\u4F1A\u5728\u591C\u91CC\u65AD\u7535\u3002"]]},{title:"\u7B2C\u4E09\u7AE0 \xB7 \u957F\u591C",sub:"\u5B88\u62A4\u6211\u4EEC\u7684\u4EBA",goals:[{text:"\u5EFA\u9020\u5236\u9020\u5DE5\u574A",check:hn("fabricator")},{text:"\u5236\u9020\u7B49\u79BB\u5B50\u6B65\u67AA",check:()=>!!h.upgrades.rifle},{text:"\u5EFA\u9020\u9632\u5FA1\u70AE\u5854",check:hn("turret")},{text:"\u51FB\u9000\u9508\u8680\u86DB",check:()=>h.stats.kills>=6,prog:()=>`${Math.min(h.stats.kills,6)}/6`}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u2026\u2026\u7B2C\u4E00\u6279\u79FB\u6C11\u5B89\u5168\u7740\u9646\u4E86\u3002\u6211\u8FD9\u8FB9\u7684\u63A7\u5236\u5BA4\u91CC\uFF0C\u6240\u6709\u4EBA\u90FD\u7AD9\u8D77\u6765\u9F13\u638C\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u5730\u8D28\u96F7\u8FBE\u5728\u591C\u95F4\u63A2\u6D4B\u5230\u5927\u91CF\u5730\u4E0B\u79FB\u52A8\u4FE1\u53F7\u3002\u5B83\u4EEC\u4F3C\u4E4E\u88AB\u6B96\u6C11\u5730\u7684\u70ED\u91CF\u5438\u5F15\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5EFA\u4E00\u5EA7\u5236\u9020\u5DE5\u574A\uFF0C\u9020\u6B66\u5668\uFF0C\u5EFA\u70AE\u5854\u3002\u5B88\u4F4F\u5927\u5BB6\u3002"]]},{title:"\u7B2C\u56DB\u7AE0 \xB7 \u624E\u6839",sub:"\u8BA9\u706F\u706B\u5F7B\u591C\u4E0D\u7184",goals:[{text:"\u6B96\u6C11\u5730\u4EBA\u53E3\u8FBE\u5230 12",check:()=>h.colony.pop>=12,prog:()=>`${h.colony.pop}/12`},{text:"\u91C7\u96C6\u949B\u77FF",...Dr("titanium",12)},{text:"\u5EFA\u9020\u805A\u53D8\u53CD\u5E94\u5806",check:hn("reactor")}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u4F60\u4EEC\u6491\u8FC7\u4E86\u957F\u591C\u3002\u73B0\u5728\uFF0C\u662F\u65F6\u5019\u8BA9\u6B96\u6C11\u5730\u771F\u6B63\u624E\u6839\u4E86\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5728\u8FDC\u65B9\u7684\u7D2B\u8272\u6676\u4F53\u77FF\u8109\u4E2D\u68C0\u6D4B\u5230\u9AD8\u7EAF\u5EA6\u949B\u3002\u6CE8\u610F\uFF1A\u90A3\u91CC\u6709\u4F53\u578B\u66F4\u5927\u7684\u9508\u8680\u86DB\u5B88\u536B\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u63D0\u793A\uFF1A\u5728\u5236\u9020\u5DE5\u574A\u53EF\u4EE5\u9020\u55B7\u6C14\u80CC\u5305\u548C\u5927\u5BB9\u91CF\u6C27\u6C14\u7F50\uFF0C\u9002\u5408\u957F\u9014\u52D8\u63A2\u3002"]]},{title:"\u7B2C\u4E94\u7AE0 \xB7 \u65B0\u5BB6\u56ED",sub:"\u6B64\u5FC3\u5B89\u5904\u662F\u543E\u4E61",goals:[{text:"\u5EFA\u9020\u5927\u6C14\u6539\u9020\u5854",check:hn("terraformer")},{text:"\u6B96\u6C11\u5730\u4EBA\u53E3\u8FBE\u5230 20",check:()=>h.colony.pop>=20,prog:()=>`${h.colony.pop}/20`},{text:"\u5B8C\u6210\u5927\u6C14\u6539\u9020",check:()=>h.terraform>=1&&h.ended&&!h.endingShown,prog:()=>`${Math.floor(h.terraform*100)}%`}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u805A\u53D8\u53CD\u5E94\u5806\u70B9\u706B\u6210\u529F\u3002\u6B96\u6C11\u5730\u7B2C\u4E00\u6B21\u5728\u591C\u91CC\u4E5F\u706F\u706B\u901A\u660E\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u6700\u540E\u4E00\u6B65\u4E86\u3002\u5927\u6C14\u6539\u9020\u5854\u2014\u2014\u5B83\u8981\u51E0\u5341\u5E74\u624D\u80FD\u5F7B\u5E95\u6539\u53D8\u706B\u661F\u3002\u4F46\u7B2C\u4E00\u573A\u96E8\uFF0C\u4E5F\u8BB8\u5C31\u5728\u660E\u5929\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u63D0\u793A\uFF1A\u57CE\u5E02\u7B49\u7EA7\u63D0\u5347\u540E\u9886\u5730\u4F1A\u6269\u5927\uFF0C\u5E76\u89E3\u9501\u516C\u5BD3\u5854\u3001\u5782\u76F4\u519C\u573A\u3001\u751F\u6001\u4E2D\u67A2\u3002"]]},{title:"\u7B2C\u516D\u7AE0 \xB7 \u661F\u8FB0\u5927\u6D77",sub:"\u4E0B\u4E00\u9897\u661F\u7403",goals:[po(5),{text:"\u5EFA\u9020\u661F\u9645\u53D1\u5C04\u53F0",check:hn("launch")},Vx],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u706B\u661F\u5DF2\u7ECF\u662F\u5BB6\u4E86\u3002\u4F46\u4EBA\u7C7B\u7684\u6545\u4E8B\uFF0C\u4ECE\u6765\u4E0D\u6B62\u4E8E\u4E00\u4E2A\u5BB6\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u6728\u536B\u4E8C\xB7\u6B27\u7F57\u5DF4\uFF1A\u51B0\u58F3\u4E4B\u4E0B\u63A2\u6D4B\u5230\u6DB2\u6001\u6D77\u6D0B\u3002\u628A\u706B\u661F\u53D1\u5C55\u6210\u300C\u661F\u6E2F\u300D\uFF0C\u5C31\u80FD\u5EFA\u9020\u661F\u9645\u53D1\u5C04\u53F0\u3002"]]}],j_=[{title:"\u7B2C\u4E00\u7AE0 \xB7 \u51B0\u539F",sub:"\u5728\u6728\u661F\u7684\u6CE8\u89C6\u4E0B",goals:[{text:"\u91C7\u96C6\u6C34\u51B0",...Dr("ice",15)},{text:"\u91C7\u96C6\u94C1\u77FF",...Dr("iron",10)},{text:"\u5EFA\u9020\u5236\u6C27\u7AD9",check:hn("oxygen")},{text:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",check:hn("habitat")},{text:"\u5EFA\u9020\u7740\u9646\u573A",check:hn("beacon")}],radio:[["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u7740\u9646\u6210\u529F\u3002\u8868\u9762\u6E29\u5EA6\u96F6\u4E0B 160 \u6444\u6C0F\u5EA6\u3002\u91CD\u529B\u53EA\u6709\u5730\u7403\u7684\u4E03\u5206\u4E4B\u4E00\u3002"],["\u706B\u661F\u6B96\u6C11\u5730 \xB7 \u6797\u6653","\u4F60\u5230\u4E86\u5417\uFF1F\u6211\u4EEC\u5728\u706B\u661F\u4E0A\u770B\u5F97\u89C1\u6728\u661F\u7684\u5149\u70B9\u3002\u66FF\u6211\u4EEC\u770B\u4E00\u773C\u5B83\u7684\u5927\u7EA2\u6591\u5427\u3002"],["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u6CE8\u610F\uFF1A\u8FD9\u91CC\u79BB\u592A\u9633\u592A\u8FDC\uFF0C\u592A\u9633\u80FD\u6548\u7387\u53EA\u6709\u706B\u661F\u7684\u4E00\u534A\u3002\u6240\u6709\u6280\u672F\u5DF2\u4ECE\u706B\u661F\u540C\u6B65\u3002"]]},{title:"\u7B2C\u4E8C\u7AE0 \xB7 \u51B0\u4E0B\u4E4B\u57CE",sub:"\u6D77\u6D0B\u4E4B\u4E0A\u7684\u706F\u706B",goals:[hd(8),po(2),{text:"\u5EFA\u9020\u805A\u53D8\u53CD\u5E94\u5806",check:hn("reactor")}],radio:[["\u5468\u9752\u79BE \xB7 \u6C34\u6587\u5B66\u5BB6","\u51B0\u5C42\u4E0B\u7684\u6D77\u6D0B\u6BD4\u5730\u7403\u6240\u6709\u6D77\u6D0B\u52A0\u8D77\u6765\u8FD8\u591A\u3002\u6709\u6C34\uFF0C\u5C31\u6709\u751F\u547D\u3002"],["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u51B0\u88C2\u7F1D\u91CC\u6709\u4E1C\u897F\u5728\u79FB\u52A8\u3002\u5B83\u4EEC\u548C\u706B\u661F\u7684\u9508\u8680\u86DB\u5F88\u50CF\u2026\u2026\u4F46\u662F\u84DD\u8272\u7684\u3002"]]},{title:"\u7B2C\u4E09\u7AE0 \xB7 \u6DF1\u6E0A\u4E4B\u5149",sub:"\u57CE\u5E02\u5728\u51B0\u539F\u4E0A\u751F\u957F",goals:[po(3),hd(24),{text:"\u5EFA\u9020\u751F\u6001\u4E2D\u67A2",check:hn("lifehub")}],radio:[["Elena Petrova \xB7 \u5929\u6587\u5B66\u5BB6","\u4F60\u77E5\u9053\u5417\uFF1F\u4ECE\u8FD9\u91CC\u770B\uFF0C\u592A\u9633\u53EA\u662F\u4E00\u9897\u7279\u522B\u4EAE\u7684\u661F\u661F\u3002"]]},{title:"\u7B2C\u56DB\u7AE0 \xB7 \u4E0B\u4E00\u7AD9",sub:"\u4E00\u5343\u4E8C\u767E\u5149\u5E74",goals:[po(4),{text:"\u5EFA\u9020\u661F\u9645\u53D1\u5C04\u53F0",check:hn("launch")},Vx],radio:[["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u5F00\u666E\u52D2-442b\uFF1A\u4F4D\u4E8E\u5B9C\u5C45\u5E26\u7684\u7C7B\u5730\u884C\u661F\uFF0C\u8DDD\u79BB\u4E00\u5343\u4E8C\u767E\u5149\u5E74\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u8FD9\u5C06\u662F\u4EBA\u7C7B\u7B2C\u4E00\u6B21\u79BB\u5F00\u592A\u9633\u7CFB\u3002\u6211\u8001\u4E86\uFF0C\u7B49\u4E0D\u5230\u4F60\u4EEC\u62B5\u8FBE\u7684\u90A3\u5929\u3002\u4F46\u6211\u4F1A\u4E00\u76F4\u770B\u7740\u661F\u7A7A\u3002"]]}],Z_=[{title:"\u7B2C\u4E00\u7AE0 \xB7 \u53CC\u65E5\u4E4B\u4E0B",sub:"\u53E6\u4E00\u9897\u6052\u661F\u7684\u6668\u5149",goals:[{text:"\u91C7\u96C6\u94C1\u77FF",...Dr("iron",15)},{text:"\u91C7\u96C6\u7845\u6676",...Dr("silicon",10)},{text:"\u5EFA\u9020\u5236\u6C27\u7AD9",check:hn("oxygen")},{text:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",check:hn("habitat")},{text:"\u5EFA\u9020\u7740\u9646\u573A",check:hn("beacon")}],radio:[["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u51B7\u51BB\u4F11\u7720\u7ED3\u675F\u3002\u5F53\u524D\u65E5\u671F\uFF1A\u516C\u5143 2401 \u5E74\u3002\u6B22\u8FCE\u6765\u5230\u5F00\u666E\u52D2-442b\u3002"],["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u5927\u6C14\u542B\u6C27 14%\uFF0C\u8FD8\u4E0D\u591F\u547C\u5438\uFF0C\u4F46\u5DF2\u7ECF\u975E\u5E38\u63A5\u8FD1\u4E86\u3002\u8FD9\u91CC\u7684\u91CD\u529B\u6BD4\u5730\u7403\u7565\u5927\u3002"]]},{title:"\u7B2C\u4E8C\u7AE0 \xB7 \u5F02\u661F\u68EE\u6797",sub:"\u4F1A\u53D1\u5149\u7684\u6811",goals:[hd(10),po(2),{text:"\u5EFA\u9020\u805A\u53D8\u53CD\u5E94\u5806",check:hn("reactor")}],radio:[["Aiko Sato \u7684\u540E\u4EE3 \xB7 \u751F\u7269\u5B66\u5BB6","\u90A3\u4E9B\u4F1E\u83C7\u6811\u5728\u591C\u91CC\u4F1A\u53D1\u5149\u3002\u6211\u7684\u66FE\u66FE\u7956\u6BCD\u4E00\u5B9A\u4F1A\u559C\u6B22\u8FD9\u91CC\u3002"],["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u68EE\u6797\u4E2D\u7684\u63A0\u98DF\u8005\u4F1A\u5728\u591C\u95F4\u51FA\u6CA1\u3002"]]},{title:"\u7B2C\u4E09\u7AE0 \xB7 \u6587\u660E",sub:"\u57CE\u5E02\u8FDE\u6210\u4E86\u661F\u6CB3",goals:[po(4),hd(36),{text:"\u5EFA\u9020\u751F\u6001\u4E2D\u67A2",check:hn("lifehub")}],radio:[["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u6765\u81EA\u706B\u661F\u548C\u6B27\u7F57\u5DF4\u7684\u4FE1\u53F7\u5DF2\u7ECF\u62B5\u8FBE\u2014\u2014\u5B83\u4EEC\u5728\u4E00\u5343\u4E8C\u767E\u5E74\u524D\u53D1\u51FA\u3002\u4E24\u5EA7\u57CE\u5E02\u90FD\u8FD8\u4EAE\u7740\u3002"]]},{title:"\u7EC8\u7AE0 \xB7 \u661F\u9645\u6587\u660E",sub:"\u4E09\u9897\u661F\u7403\uFF0C\u4E00\u4E2A\u4EBA\u7C7B",goals:[po(5),{text:"\u5EFA\u9020\u6587\u660E\u7EAA\u5FF5\u7891",check:hn("monument")}],radio:[["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u5EFA\u4E00\u5EA7\u7EAA\u5FF5\u7891\u5427\u3002\u732E\u7ED9\u7B2C\u4E00\u4E2A\u8E0F\u4E0A\u706B\u661F\u7684\u4EBA\u2014\u2014\u4E5F\u5C31\u662F\u4F60\u3002"]]}],zi=ot==="europa"?j_:ot==="kepler"?Z_:Y_,Wx=ot==="mars"?2:1,Ua={rifle:{name:"\u7B49\u79BB\u5B50\u6B65\u67AA",icon:"rifle",cost:{iron:18,silicon:12},desc:"\u6309 2 \u5207\u6362\u3002\u6D88\u8017\u80FD\u91CF\u53D1\u5C04\u7B49\u79BB\u5B50\u5F39\u3002"},tank:{name:"\u5927\u5BB9\u91CF\u6C27\u6C14\u7F50",icon:"tank",cost:{iron:12,ice:10},desc:"\u5B87\u822A\u670D\u6C27\u6C14\u4E0A\u9650 100 \u2192 180\u3002"},rover:{name:"\u52A0\u538B\u6F2B\u6E38\u8F66",icon:"rover",cost:{iron:35,silicon:20,ice:5},desc:"\u5728\u5DE5\u574A\u65C1\u51FA\u5382\u3002\u6309 E \u4E0A\u8F66\uFF0CShift \u52A0\u901F\u3002\u8F66\u8231\u5185\u81EA\u52A8\u8865\u6C27\uFF0C\u8FD8\u80FD\u649E\u98DE\u9508\u8680\u86DB\u3002"},scanner:{name:"\u5730\u8D28\u626B\u63CF\u4EEA",icon:"scanner",cost:{iron:8,silicon:10},desc:"\u5C0F\u5730\u56FE\u8303\u56F4\u6269\u5927\uFF0C\u7F57\u76D8\u6807\u51FA\u6700\u8FD1\u7684\u949B\u77FF\u3002"},jetpack:{name:"\u55B7\u6C14\u80CC\u5305",icon:"jet",cost:{iron:20,silicon:15,titanium:4},desc:"\u7A7A\u4E2D\u6309\u4F4F\u7A7A\u683C\u98DE\u884C\uFF0C\u6D88\u8017\u80FD\u91CF\u3002"},overclock:{name:"\u6FC0\u5149\u8D85\u9891",icon:"bolt2",cost:{silicon:20,titanium:3},desc:"\u91C7\u77FF\u901F\u5EA6 \xD72\uFF0C\u6FC0\u5149\u4F24\u5BB3\u63D0\u5347\u3002"},armor:{name:"\u590D\u5408\u88C5\u7532",icon:"armor",cost:{iron:30,titanium:6},desc:"\u751F\u547D\u4E0A\u9650 150\uFF0C\u53D7\u5230\u4F24\u5BB3 -40%\u3002"},grenade:{name:"\u9707\u8361\u96F7",icon:"bomb",cost:{iron:16,silicon:10,titanium:2},desc:"\u6309 G \u6295\u63B7\uFF0C\u51B7\u5374 8 \u79D2\u3002\u843D\u5730\u5F39\u8DF3\u540E\u7206\u70B8\uFF0C\u51B2\u51FB\u6CE2\u91CD\u521B\u5E76\u51FB\u9000\u8303\u56F4\u5185\u7684\u9508\u8680\u86DB\u3002"},rifle2:{name:"\u805A\u7126\u7EBF\u5708",icon:"focus",cost:{silicon:18,titanium:6},need:"rifle",desc:"\u7B49\u79BB\u5B50\u6B65\u67AA\u4F24\u5BB3 +60%\u3002"}},l0=[],Da=null,o0=0;function Lt(n,e){l0.push([n,e])}function Xx(){return Da}var a0=0,fo=200,Xs="calm",cd=0,c0=!1;function qx(n){if(Da&&(o0-=n,o0<=0&&(Da=null)),!Da&&l0.length&&(Da=l0.shift(),o0=3.5+Da[1].length*.11,X.play("radio")),a0-=n,a0<=0&&h.chapter<zi.length&&!ni()){a0=.5;let i=zi[h.chapter];h.goalDone=h.goalDone||{};let s=!0;i.goals.forEach((r,o)=>{let a=h.chapter+":"+o;r.check()&&!h.goalDone[a]&&(h.goalDone[a]=!0,X.play("objective"),h.events.emit("toast",`\u2713 ${r.text}`)),h.goalDone[a]||(s=!1)}),s&&h.chapter<zi.length-1&&sc(h.chapter+1)}h.buildings.find(i=>i.type==="terraformer"&&i.powered)&&h.terraform<1&&(h.terraform=Math.min(1,h.terraform+n/300*(Xt("atmo")?2:1)),h.terraform>=1&&!c0&&(c0=!0,h.events.emit("ending"))),h.raining=(h.terraform>=1||ot==="kepler")&&Math.sin(h.time.t*Math.PI*4+h.time.day*1.7)>.45,fe.storms&&h.time.day>=2&&h.terraform<.7&&(fo-=n,Xs==="calm"&&fo<=0&&h.time.night<.5?(Xs="warn",fo=25,Lt("\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u6C99\u5C18\u66B4\u5C06\u5728 25 \u79D2\u540E\u62B5\u8FBE\u3002\u80FD\u89C1\u5EA6\u4F1A\u6025\u5267\u4E0B\u964D\uFF0C\u6C27\u6C14\u6D88\u8017\u52A0\u5FEB\u3002\u9760\u8FD1\u751F\u547D\u7EF4\u6301\u8BBE\u65BD\u3002")):Xs==="warn"&&fo<=0?(Xs="storm",cd=70+Math.random()*40):Xs==="storm"&&(cd-=n,cd<=0&&(Xs="calm",fo=360+Math.random()*300,Lt("\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u6C99\u5C18\u66B4\u5DF2\u8FC7\u5883\u3002"))));let t=Xs==="storm"?1:0;h.storm+=(t-h.storm)*Math.min(1,n*.25),h.storm<.001&&(h.storm=0)}function sc(n,e=!1){h.chapter=n;let t=zi[n];e||(X.play("chapter"),h.events.emit("chapter",t),t.radio.forEach(i=>Lt(i[0],i[1])))}function Yx(){return{phase:Xs,t:fo,left:cd}}function jx(n){n&&(Xs=n.phase==="storm"?"calm":n.phase,fo=n.t??200)}function Zx(n){c0=n}var ud=[],Qx=new Fe(.05,.11,2.6,8,1);Qx.translate(0,-1.3,0);var K_=new ke({color:12121343,transparent:!0,opacity:.95,blending:He,depthWrite:!1}),J_=new ke({color:16760944,transparent:!0,opacity:.95,blending:He,depthWrite:!1}),Q_={player:6743807,turret:16756800};function oc(n,e,t,i){let s=ge(Q_[i],i==="player"?1.4:1.1,h.scene);s.position.copy(n);let r=new Q(Qx,i==="player"?K_:J_);r.quaternion.setFromUnitVectors(new S(0,1,0),e),r.position.copy(n),r.frustumCulled=!1,h.scene.add(r),ud.push({pos:n.clone(),vel:e.clone().multiplyScalar(i==="player"?110:80),life:1.4,dmg:t,owner:i,s,bolt:r})}function $_(n,e=0){for(let t of h.enemies){if(t.dead)continue;let i=1.3*t.scale+e,s=n.x-t.pos.x,r=n.y-(t.pos.y+1*t.scale),o=n.z-t.pos.z;if(s*s+r*r+o*o<i*i)return t}return null}function $x(n){for(let e=ud.length-1;e>=0;e--){let t=ud[e];t.life-=n;let i=t.life<=0,s=3;for(let r=0;r<s&&!i;r++){t.pos.addScaledVector(t.vel,n/s);let o=$_(t.pos),a=t.owner==="player"?9365503:16756832;o?(vo(o,t.dmg,t.owner),le.spark(t.pos,t.owner==="player"?[.5,.9,1]:[1,.7,.4],14,8),Op(t.pos,a,1.2),i=!0):t.pos.y<ue(t.pos.x,t.pos.z)&&(le.spark(t.pos,[1,.7,.4],8,5),le.dustPuff(t.pos,5,.8),Op(t.pos,a,.8),i=!0)}t.s.position.copy(t.pos),t.bolt.position.copy(t.pos),Math.random()<.8&&le.trail(t.pos,t.owner==="player"?[.3,.8,1]:[1,.6,.2],.6),i&&(h.scene.remove(t.s),h.scene.remove(t.bolt),ud.splice(e,1))}}function rc(n,e,t=!1,i=!1){let s=i?3.4:t?1.35:.85+Math.random()*.35,r=Fx(s,ma.crystal,ma.eye),o=ue(n,e);r.group.position.set(n,o,e),h.scene.add(r.group);let a=i?1300+h.time.day*40:t?90:36+h.time.day*3,l={...r,pos:r.group.position,hp:a,maxHp:a,scale:s,guardian:t,home:t?new S(n,o,e):null,boss:i,stomp:4,awake:!t,speed:i?3.4:(t?5.2:4.4)+Math.random()*1.2,phase:Math.random()*6,atk:0,flash:0,sink:0,target:null,retarget:0};return h.enemies.push(l),l}function vo(n,e,t){n.dead||(n.hp-=e,n.flash=.12,n.awake=!0,t==="player"&&X.play("hit"),(t==="player"||t==="laser")&&h.events.emit("enemyHit",{kill:n.hp<=0}),n.hp<=0&&eT(n,t))}function eT(n,e){n.dead=!0;let t=n.pos.clone();if(t.y+=1,le.burst(t,[1,.4,.1],40,9),le.dustPuff(t,12,2),vs(t,n.boss?3.5:n.guardian?1.4:n.flyer?.55:.9,16738858),le.debris(t,n.legs[0].children[0].material,6,5,.45*n.scale),le.debris(t,n.inner.children[1].material,8,6,.5*n.scale),X.play("kill",n.pos),h.scene.remove(n.group),h.stats.kills++,n.guardian&&(h.stats.guardKills=(h.stats.guardKills||0)+1),n.boss){h.stats.bossKills=(h.stats.bossKills||0)+1,h.res.titanium+=40,h.res.silicon+=40,h.events.emit("pickup",{type:"titanium",n:40,note:"\u6676\u6BCD\u6838\u5FC3"}),h.events.emit("bossDown"),le.burst(t,[1,.5,.15],200,20),le.ring(new S(n.pos.x,n.pos.y,n.pos.z),4,120,[1,.5,.2]),le.debris(t,n.inner.children[1].material,30,12,1.4),X.play("rumble");return}let i=n.guardian?3:Math.random()<.5?1:0;i&&(h.res.titanium+=i,h.stats.mined.titanium+=i,h.events.emit("pickup",{type:"titanium",n:i,note:"\u6676\u4F53\u6B8B\u9AB8"}))}var tT=new ke({color:16752752,transparent:!0,opacity:.2,blending:He,depthWrite:!1,side:bt}),nT=(()=>{let n=new di(.5,20);return n.scale(1.15,.32,1),n.rotateZ(-.18),n.translate(.56,-.05,0),n})(),e1=new Ai(.32,0);e1.scale(.8,.8,2);function p0(n,e,t){let s=new ce,r=new ce;r.position.y=1*.8,s.add(r);let o=new Q(new Be(.13,10,8),ma.eye);o.position.z=.55,r.add(o);let a=new Q(e1,ma.crystal);a.castShadow=!0,r.add(a);let l=new Q(new Wt(.08,.5,6),ma.crystal);l.rotation.x=-Math.PI/2,l.position.z=-.8,r.add(l);let c=[];for(let p of[-1,1]){let g=new ce;g.position.set(p*.15,.12,.1),g.scale.x=p,r.add(g);let x=new Q(nT,tT);x.rotation.x=-Math.PI/2,g.add(x),c.push(g)}let d=ge(16734752,1.2,r,0,0,0);s.position.set(n,t,e),h.scene.add(s);let u=22+h.time.day*1.5,f={group:s,inner:r,legs:c,glowS:d,pos:s.position,hp:u,maxHp:u,scale:.8,flyer:!0,state:"orbit",st:2+Math.random()*4,ang:Math.random()*6.28,rad:13+Math.random()*8,alt:7+Math.random()*5,vel:new S,speed:9,phase:Math.random()*6,flash:0,sink:0,atk:0,retarget:0};return h.enemies.push(f),f}var h0=new S,mo=new S;function iT(n,e,t,i,s){let r=ue(n.pos.x,n.pos.z);if(n.st-=e,s&&(n.state="leave"),n.state==="orbit")n.ang+=e*.9,h0.set(t.x+Math.cos(n.ang)*n.rad,Math.max(r,ue(t.x,t.z))+n.alt+Math.sin(i*2+n.phase)*1.2,t.z+Math.sin(n.ang)*n.rad),n.st<=0&&!h.player.dead&&(n.state="windup",n.st=.7,X.play("wasp",n.pos));else if(n.state==="windup")h0.copy(n.pos),n.vel.multiplyScalar(Math.pow(.02,e)),n.st<=0&&(n.state="dive",n.st=1.6,mo.set(t.x,t.y+1.3,t.z).sub(n.pos).normalize(),n.vel.copy(mo).multiplyScalar(28));else if(n.state==="dive"){mo.set(t.x,t.y+1.3,t.z).sub(n.pos);let l=mo.length();n.vel.lerp(mo.multiplyScalar(28/Math.max(l,.01)),Math.min(1,e*.8)),l<1.6&&!h.player.dead&&(h.player.damage(7*Ii().dmg,n.pos),n.state="retreat",n.st=1.4,n.vel.y=14),(n.st<=0||n.pos.y<r+.6)&&(n.state="retreat",n.st=1.2,n.vel.y=Math.abs(n.vel.y)+8)}else n.state==="retreat"?(n.vel.y+=e*6,n.st<=0&&(n.state="orbit",n.st=3+Math.random()*4,n.ang=Math.atan2(n.pos.z-t.z,n.pos.x-t.x))):n.state==="leave"&&(n.vel.y+=e*10,n.pos.y>r+120&&(h.scene.remove(n.group),n.dead=!0,n.gone=!0));n.state==="orbit"&&(mo.copy(h0).sub(n.pos),n.vel.lerp(mo.multiplyScalar(2.2),Math.min(1,e*2)),n.vel.length()>16&&n.vel.setLength(16)),n.pos.addScaledVector(n.vel,e),n.pos.y<r+.8&&(n.pos.y=r+.8),n.vel.lengthSq()>.5&&(n.group.rotation.y=Math.atan2(n.vel.x,n.vel.z),n.inner.rotation.x=-Math.atan2(n.vel.y,Math.hypot(n.vel.x,n.vel.z))*.7);let o=Math.sin(i*55+n.phase)*.7;n.legs[0].rotation.z=o,n.legs[1].rotation.z=o;let a=n.state==="windup"?1:n.state==="dive"?.7:.25;n.glowS.material.opacity=a*(.7+Math.random()*.3),n.glowS.scale.setScalar(.8+a*1.6),n.state==="dive"&&Math.random()<e*40&&le.trail(n.pos.clone().setY(n.pos.y+.8),[1,.4,.15],.7),n.flash>0?(n.flash-=e,n.inner.scale.setScalar(1+n.flash*1.5)):n.inner.scale.setScalar(1)}var d0=0,go=0,Kx=!1,u0=5,dd=-1,f0=40;function t1(){return h.enemies.find(n=>n.boss&&!n.dead)}function Jx(){if(!h.buildings.length)return new S(0,0,0);let n=new S;for(let e of h.buildings)n.x+=e.x,n.z+=e.z;return n.multiplyScalar(1/h.buildings.length)}function n1(n){let e=h.player.pos,t=h.time.night>.6,i=(ni()?h.buildings.some(r=>r.type==="habitat")||h.time.day>=3:h.chapter>=Wx)&&h.terraform<1&&Ii().foe>0;if(t&&!Kx&&i){go=Math.round(Math.min(3+(h.nightsSurvived||0)*2+Math.floor(h.colony.pop/4),26)*Ii().foe);let r=(h.nightsSurvived||0)%4===3;r&&(go=Math.min(Math.round(go*1.8),40),dd=25),h.nightsSurvived=(h.nightsSurvived||0)+1,h.events.emit(r?"tide":"nightfall",go)}if(Kx=t,dd>0&&t&&(dd-=n,dd<=0)){let r=Jx(),o=Math.random()*Math.PI*2,a=Tt.clamp(r.x+Math.cos(o)*130,-Ge+180,Ge-180),l=Tt.clamp(r.z+Math.sin(o)*130,-Ge+180,Ge-180),c=rc(a,l,!1,!0);c.sink=-6,le.ring(new S(a,ue(a,l),l),6,140),le.dustPuff(new S(a,ue(a,l),l),60,12),X.play("rumble"),h.events.emit("bossSpawn")}if(t&&i&&go>0&&(d0-=n,d0<=0)){d0=3+Math.random()*5;let r=Jx(),o=Math.min(go,1+Math.floor(Math.random()*3)),a=Math.random()*Math.PI*2,l=110+Math.random()*50;for(let c=0;c<o;c++){let d=Tt.clamp(r.x+Math.cos(a)*l+(Math.random()-.5)*10,-Ge+180,Ge-180),u=Tt.clamp(r.z+Math.sin(a)*l+(Math.random()-.5)*10,-Ge+180,Ge-180),f=rc(d,u);f.sink=-2,le.dustPuff(new S(d,ue(d,u),u),14,3)}go-=o}if(u0-=n,u0<=0){u0=30;for(let r of h.nodes){if(r.type!=="titanium"||Math.hypot(r.x-e.x,r.z-e.z)<90)continue;if(!h.enemies.some(a=>a.guardian&&!a.dead&&a.home.distanceTo(r.mesh.position)<25)&&h.terraform<1&&Ii().foe>0){let a=Math.random()*6.28;rc(r.x+Math.cos(a)*6,r.z+Math.sin(a)*6,!0)}}}if(t&&i&&(h.nightsSurvived||0)>=2&&(f0-=n,f0<=0)){f0=(55+Math.random()*40)/Math.max(.5,Ii().foe);let r=Math.min(2+Math.floor((h.nightsSurvived||0)/3),6),o=Math.random()*6.28,a=Tt.clamp(e.x+Math.cos(o)*70,-Ge+150,Ge-150),l=Tt.clamp(e.z+Math.sin(o)*70,-Ge+150,Ge-150);for(let c=0;c<r;c++)p0(a+(Math.random()-.5)*8,l+(Math.random()-.5)*8,ue(a,l)+25+Math.random()*8);h.events.emit("toast","\u6676\u7FFC\u8702\u7FA4\u6B63\u5728\u903C\u8FD1")}let s=performance.now()*.001;for(let r=h.enemies.length-1;r>=0;r--){let o=h.enemies[r];if(o.dead){h.enemies.splice(r,1);continue}if(o.flyer){iT(o,n,e,s,h.time.night<.3||h.terraform>=1);continue}if(!o.guardian&&(h.time.night<.3||h.terraform>=1)){o.sink-=n*1.5,o.group.position.y=ue(o.pos.x,o.pos.z)+o.sink,o.sink<-3&&(h.scene.remove(o.group),h.enemies.splice(r,1));continue}if(o.sink<0&&(o.sink=Math.min(0,o.sink+n*1.5)),o.kb){o.pos.x+=o.kb.x*n,o.pos.z+=o.kb.z*n;let m=Math.pow(.04,n);o.kb.x*=m,o.kb.z*=m,Math.abs(o.kb.x)+Math.abs(o.kb.z)<.2&&(o.kb=null)}if(o.stun>0){o.stun-=n,o.pos.y=ue(o.pos.x,o.pos.z)+o.sink,o.group.rotation.z=Math.sin(s*30)*.08*Math.min(1,o.stun),Math.random()<n*8&&le.spark(new S(o.pos.x,o.pos.y+1.4*o.scale,o.pos.z),[.6,.85,1],2,2,.4);continue}o.group.rotation.z=0;let a=Math.hypot(e.x-o.pos.x,e.z-o.pos.z);if(o.retarget-=n,o.retarget<=0)if(o.retarget=1,o.target=null,o.guardian)a<22&&(o.awake=!0),o.awake&&a<70&&!h.player.dead?o.target={kind:"player"}:(o.awake=!1,o.target={kind:"home"});else if(a<32&&!h.player.dead)o.target={kind:"player"};else{let m=null,E=400;for(let b of h.buildings){if(b.type==="lamp"||b.broken)continue;let M=Math.hypot(b.x-o.pos.x,b.z-o.pos.z)-b.def.r;M<E&&(E=M,m=b)}o.target=m?{kind:"building",b:m}:{kind:"player"}}let l=e.x,c=e.z,d=1.8*o.scale,u=o.target;if(u?.kind==="building"){if(!h.buildings.includes(u.b)||u.b.broken){o.retarget=0;continue}l=u.b.x,c=u.b.z,d=u.b.def.r*.9+1.4}else u?.kind==="home"&&(l=o.home.x,c=o.home.z,d=2);let f=l-o.pos.x,p=c-o.pos.z,g=Math.hypot(f,p),x=!1;if(g>d){f/=g,p/=g;for(let b of h.enemies){if(b===o)continue;let M=o.pos.x-b.pos.x,L=o.pos.z-b.pos.z,R=Math.hypot(M,L);R<2.5&&R>.01&&(f+=M/R*.6,p+=L/R*.6)}let m=Math.hypot(f,p)||1,E=o.speed*(o.target?.kind==="home"?.5:1);o.pos.x+=f/m*E*n,o.pos.z+=p/m*E*n;for(let b of h.colliders.query(o.pos.x,o.pos.z)){if(b.kind!=="building")continue;let M=o.pos.x-b.x,L=o.pos.z-b.z,R=Math.hypot(M,L),P=b.r+.8;R<P&&R>.01&&(o.pos.x=b.x+M/R*P,o.pos.z=b.z+L/R*P)}o.group.rotation.y=Math.atan2(f,p),x=!0}else u&&u.kind!=="home"&&(o.group.rotation.y=Math.atan2(f,p),o.atk-=n,o.atk<=0&&(o.atk=1,u.kind==="player"?h.player.damage((o.boss?30:o.guardian?14:9)*Ii().dmg,o.pos):(u.b.hp-=o.boss?70:o.guardian?20:8,le.spark(new S(o.pos.x,o.pos.y+1,o.pos.z),[1,.5,.2],8,5),u.b.hp<=0&&(u.b.hp=0,u.b.broken=!0,o.retarget=0,h.events.emit("broken",u.b),ys())),o.inner.position.z=.6));if(o.boss){o.stomp-=n;let m=Math.hypot(e.x-o.pos.x,e.z-o.pos.z);o.stomp<=0&&m<22&&(o.stomp=4.5,le.ring(new S(o.pos.x,o.pos.y,o.pos.z),3,100,[.9,.45,.25]),X.play("rumble"),h.player.landDip=Math.max(h.player.landDip,.35),m<13&&!h.driving&&(h.player.damage(18,o.pos),h.player.vel.y=4,h.player.vel.x+=(e.x-o.pos.x)/m*8,h.player.vel.z+=(e.z-o.pos.z)/m*8))}o.inner.position.z*=.85,o.pos.y=ue(o.pos.x,o.pos.z)+o.sink;let v=s*(x?12:2)+o.phase;for(let m of o.legs)m.rotation.x=Math.sin(v+m.userData.phase)*(x?.5:.08),m.rotation.z=Math.max(0,Math.cos(v+m.userData.phase))*.25*m.userData.side*(x?1:0);o.inner.position.y=Math.abs(Math.sin(v))*.08,o.flash>0?(o.flash-=n,o.inner.scale.setScalar(1+o.flash*1.2)):o.inner.scale.setScalar(1),Math.random()<n*4&&le.trail(new S(o.pos.x,o.pos.y+1.6*o.scale,o.pos.z),[1,.35,.1],.8)}}function xo(n,e,t){let i=null,s=t,r=new S;for(let o of h.enemies){if(o.dead)continue;let a=1.3*o.scale;r.set(o.pos.x-n.x,o.pos.y+1*o.scale-n.y,o.pos.z-n.z);let l=r.dot(e);if(l<0)continue;let c=r.lengthSq()-l*l;if(c>a*a)continue;let d=l-Math.sqrt(a*a-c);d<s&&(s=d,i=o)}return i?{e:i,dist:s}:null}var Me={keys:new Set,mouse:[!1,!1,!1],dx:0,dy:0,wheel:0,pressed:new Set,clicked:[!1,!1,!1],sens:.0022,down(n){return this.keys.has(n)},hit(n){return this.pressed.has(n)},endFrame(){this.pressed.clear(),this.dx=0,this.dy=0,this.wheel=0,this.clicked=[!1,!1,!1]}};function i1(n){window.addEventListener("keydown",e=>{e.code==="Tab"&&e.preventDefault(),Me.keys.has(e.code)||Me.pressed.add(e.code),Me.keys.add(e.code)}),window.addEventListener("keyup",e=>Me.keys.delete(e.code)),window.addEventListener("blur",()=>{Me.keys.clear(),Me.mouse=[!1,!1,!1]}),window.addEventListener("mousemove",e=>{h.locked&&(Me.dx+=e.movementX||0,Me.dy+=e.movementY||0)}),n.addEventListener("mousedown",e=>{h.locked&&(Me.mouse[e.button]=!0,Me.clicked[e.button]=!0)}),window.addEventListener("mouseup",e=>{Me.mouse[e.button]=!1}),window.addEventListener("wheel",e=>{h.locked&&(Me.wheel+=Math.sign(e.deltaY))},{passive:!0}),window.addEventListener("contextmenu",e=>e.preventDefault())}var sT=fe.gravity,s1=1.7,wt=new S(-6,0,-6),fd=class{constructor(e){this.cam=e,this.pos=new S(0,0,6),this.pos.y=ue(this.pos.x,this.pos.z),this.vel=new S,this.yaw=Math.PI*.85,this.pitch=-.05,this.onGround=!0,this.maxHealth=100,this.health=100,this.maxO2=100,this.o2=100,this.energy=100,this.bob=0,this.stepT=0,this.landDip=0,this.dead=!1,this.hurtT=0,this.flashlight=!1,this.inLife=!1,this.alarmT=0,this.lastHitDir=0,this.moving=!1,this.sprinting=!1,this.jetting=!1,this.roll=0,this.fwd=new S}get eye(){return new S(this.pos.x,this.pos.y+s1+this.bobY,this.pos.z)}damage(e,t){if(this.dead)return;let i=h.upgrades.armor?.6:1;this.health-=e*i,this.hurtT=.5,t&&(this.lastHitDir=Math.atan2(t.x-this.pos.x,t.z-this.pos.z)),X.play("hurt"),h.events.emit("hurt",e),this.health<=0&&this.die("\u4F60\u5012\u5728\u4E86\u706B\u661F\u7684\u5C18\u571F\u91CC")}die(e){this.dead||(this.dead=!0,this.health=0,h.events.emit("death",e))}respawn(){let e=h.buildings.find(i=>i.type==="habitat")||null,t=e?new S(e.x,0,e.z+9):wt.clone().add(new S(5,0,8));for(let i in h.res)h.res[i]=Math.floor(h.res[i]*.75);this.pos.set(t.x,ue(t.x,t.z),t.z),this.vel.set(0,0,0),this.health=this.maxHealth,this.o2=this.maxO2,this.energy=100,this.dead=!1}update(e){if(this.maxO2=h.upgrades.tank?180:100,this.maxHealth=h.upgrades.armor?150:100,this.dead){this.cam.position.y-=e*.3;return}h.locked&&(this.yaw-=Me.dx*Me.sens,this.pitch=Tt.clamp(this.pitch-Me.dy*Me.sens,-1.5,1.5));let t=0,i=0;h.menuOpen||((Me.down("KeyW")||Me.down("ArrowUp"))&&(i-=1),(Me.down("KeyS")||Me.down("ArrowDown"))&&(i+=1),(Me.down("KeyA")||Me.down("ArrowLeft"))&&(t-=1),(Me.down("KeyD")||Me.down("ArrowRight"))&&(t+=1));let s=Math.hypot(t,i);this.moving=s>0,this.sprinting=this.moving&&Me.down("ShiftLeft")&&i<0&&this.o2>5;let r=this.sprinting?10.5:6.2,o=Math.sin(this.yaw),a=Math.cos(this.yaw),l=0,c=0;if(s){let M=t/s,L=i/s;l=M*a+L*o,c=-M*o+L*a}let d=this.onGround?12:2.5;if(this.vel.x+=(l*r-this.vel.x)*Math.min(1,d*e),this.vel.z+=(c*r-this.vel.z)*Math.min(1,d*e),this.jetting=!1,!h.menuOpen&&Me.hit("Space")&&this.onGround)this.vel.y=5.4,this.onGround=!1,X.play("jump");else if(!h.menuOpen&&Me.down("Space")&&!this.onGround&&h.upgrades.jetpack&&this.energy>1&&this.vel.y<6){this.vel.y+=15*e,this.energy-=22*e,this.jetting=!0,Math.random()<.5&&X.play("jet");let M=new S(this.pos.x+o*.4,this.pos.y+.8,this.pos.z+a*.4);le.flame(M),le.flame(M)}this.vel.y-=sT*e;let u=this.pos.x+this.vel.x*e,f=this.pos.z+this.vel.z*e;this.pos.x=Tt.clamp(u,-Ge+120,Ge-120),this.pos.z=Tt.clamp(f,-Ge+120,Ge-120),this.pos.y+=this.vel.y*e;for(let M of h.colliders.query(this.pos.x,this.pos.z)){let L=this.pos.x-M.x,R=this.pos.z-M.z,P=Math.hypot(L,R),I=M.r+.45;if(P<I&&P>1e-4){if(M.kind==="rock"&&this.pos.y>ue(M.x,M.z)+M.r*.6)continue;this.pos.x=M.x+L/P*I,this.pos.z=M.z+R/P*I}}let p=ue(this.pos.x,this.pos.z);this.pos.y<=p?(!this.onGround&&this.vel.y<-4&&(this.landDip=Math.min(.35,-this.vel.y*.04),X.play("land"),le.dustPuff(this.pos,6,1)),this.pos.y=p,this.vel.y=0,this.onGround=!0):this.onGround&&this.pos.y-p<.5&&this.vel.y<=0?(this.pos.y=p,this.vel.y=0):this.onGround=!1;let g=Math.hypot(this.vel.x,this.vel.z);this.onGround&&g>.5&&(this.bob+=e*g*1.25,this.stepT+=e*g,this.stepT>2.6&&(this.stepT=0,X.play("step"),Math.random()<.4&&le.dustPuff(this.pos,2,.4))),this.landDip*=Math.pow(.002,e),this.bobY=Math.sin(this.bob*2)*.05*Math.min(1,g/6)-this.landDip;let x=h.shake||0,v=performance.now()*.05;this.cam.position.set(this.pos.x+Math.sin(v*1.7)*x*.25,this.pos.y+s1+this.bobY+Math.sin(v*2.3)*x*.2,this.pos.z+Math.cos(v*1.3)*x*.25),this.roll+=(-t*.025-this.roll)*Math.min(1,e*6);let m=(h.baseFov||72)+(this.sprinting?8:0)+(this.jetting?4:0);Math.abs(this.cam.fov-m)>.05&&(this.cam.fov+=(m-this.cam.fov)*Math.min(1,e*5),this.cam.updateProjectionMatrix()),this.cam.rotation.set(this.pitch,this.yaw,this.roll+Math.sin(this.bob)*.006*Math.min(1,g/6),"YXZ"),this.cam.getWorldDirection(this.fwd);let E=Ux(this.pos),b=this.pos.distanceTo(wt)<11;if(this.inLife=!!E||b,this.inLife)this.o2=Math.min(this.maxO2,this.o2+30*e),this.health=Math.min(this.maxHealth,this.health+4*e);else{let M=.55+(this.sprinting?.6:0)+(this.jetting?.6:0);M*=(1+h.storm*.8)*Ii().o2*(Xt("suit")?.65:1),h.terraform>=1&&(M*=.5),this.o2=Math.max(0,this.o2-M*e)}this.o2<=0&&(this.health-=9*e,this.health<=0&&this.die("\u6C27\u6C14\u8017\u5C3D")),this.o2<this.maxO2*.2&&!this.inLife&&(this.alarmT-=e,this.alarmT<=0&&(this.alarmT=2,X.play("alarm"))),this.jetting||(this.energy=Math.min(100,this.energy+(this.onGround?14:4)*e)),this.hurtT=Math.max(0,this.hurtT-e),this.health=Math.min(this.health,this.maxHealth)}};var ac=[],rT=new Ai(.09,0),r1={};function oT(n){let e=n.join();return r1[e]||(r1[e]=new ve({color:new re(...n),emissive:new re(...n),emissiveIntensity:1.6,roughness:.3,metalness:.2}))}var pd=0,m0=0;function o1(n,e){if(ac.length>40)return;let t=new Q(rT,oT(e));t.position.copy(n);let i=ge(new re(...e).getHex(),.5,t);h.scene.add(t);let s=new S((Math.random()-.5)*5,3+Math.random()*3,(Math.random()-.5)*5);ac.push({m:t,gl:i,v:s,t:0,color:e,spin:new S(Math.random()*10,Math.random()*10,Math.random()*10)})}var g0=new S;function a1(n){m0-=n,m0<=0&&(pd=0);let e=h.player;for(let t=ac.length-1;t>=0;t--){let i=ac[t],s=i.m.position;if(i.t+=n,g0.set(e.pos.x,e.pos.y+1.1,e.pos.z),i.t<.22)i.v.y-=9*n;else{let r=g0.clone().sub(s),o=r.length(),a=6+(i.t-.22)*40;if(i.v.lerp(r.multiplyScalar(a/Math.max(o,.01)),Math.min(1,n*7)),o<.6||i.t>2.5){h.scene.remove(i.m),ac.splice(t,1),pd=Math.min(pd+1,14),m0=.6,X.tone(660*Math.pow(2,pd/12),.07,"sine",.035),Math.random()<.5&&le.spark(g0.clone().addScaledVector(e.fwd||new S,.5),i.color,2,1.5,.25);continue}}s.addScaledVector(i.v,n),i.m.rotation.x+=i.spin.x*n,i.m.rotation.y+=i.spin.y*n}}var Hr=[{id:"laser",name:"\u91C7\u77FF\u6FC0\u5149",icon:"laser"},{id:"rifle",name:"\u7B49\u79BB\u5B50\u6B65\u67AA",icon:"rifle",need:"rifle"},{id:"build",name:"\u5EFA\u9020",icon:"build"}],un={index:0,get id(){return Hr[this.index].id}},$i,aT=0,yo=null,y0,qs,lc,Ur={},Ys,Es,ka,za,cc,l1=new S(.24,-.22,-.85);function d1(n){qs=new as,lc=new fn(n.fov,n.aspect,.01,10),qs.add(new vr(16769224,4202520,1.4));let e=new ls(16777215,1.5);e.position.set(1,2,1),qs.add(e),qs.userData.dl=e;let t=(M,L,R,P,I,_)=>{let w=new Q(M,L);return w.position.set(R,P,I),_.add(w),w},i=new ls(8965375,1.2);i.position.set(-2,1,2),qs.add(i);let s=(M,L,R,P=20)=>{let I=new ji(M.map(([_,w])=>new $(_,w)),P);return I.rotateX(-Math.PI/2),t(I,L,0,0,0,R)},r=new ve({color:15262940,roughness:.35,metalness:.15}),o=new ve({color:2764083,roughness:.45,metalness:.7}),a=new ve({color:16742954,roughness:.4,metalness:.2});y0=new ve({color:3346688,emissive:16747056,emissiveIntensity:1.2});let l=new ve({color:8755,emissive:4515583,emissiveIntensity:1.5}),c=(M,L,R,P,I,_,w)=>{let U=t(new Fe(M,M,L,16),R,P,I,_,w);return U.rotation.x=Math.PI/2,U},d=new ce;s([[0,-.12],[.04,-.12],[.056,-.08],[.058,.18],[.05,.26],[.036,.3],[.03,.36],[0,.36]],r,d),c(.06,.02,a,0,0,-.02,d),c(.06,.012,a,0,0,.1,d),c(.045,.06,o,0,0,.1+.04,d);for(let M=0;M<3;M++){let L=t(new Le(.034-M*.003,.007,8,20),y0,0,0,-.33-M*.035,d)}c(.018,.14,o,0,0,-.38,d);let u=t(new Be(.02,12,8),new ke({color:16760960}),0,0,-.455,d);t(new Ke(.018,.016,.2),o,0,.062,-.05,d),c(.026,.17,a,.06,-.02,-.02,d),t(new Ke(.032,.07,.045),o,0,-.075,.02,d).rotation.x=.3,t(new Ke(.03,.02,.07),o,0,-.05,.02,d);let f=t(new Gn(.04,.025),new ke({color:6743807}),-.0585,.012,.04,d);f.rotation.y=-Math.PI/2,d.userData.tip=u;let p=new ce;s([[0,-.2],[.04,-.2],[.055,-.15],[.055,.2],[.048,.28],[0,.28]],r,p),c(.035,.32,o,0,0,-.36,p);for(let M=0;M<4;M++)t(new Le(.046,.009,8,20),l,0,0,-.27-M*.065,p);c(.05,.03,a,0,0,-.18,p),c(.022,.16,o,0,.075,-.02,p),t(new Fe(.023,.023,.005,12),l,0,.075,-.1,p).rotation.x=Math.PI/2,t(new Ke(.032,.07,.045),o,0,-.075,0,p).rotation.x=.3,t(new Ke(.035,.09,.05),l,0,-.08,-.06,p);let g=new ce;t(new Ke(.32,.22,.018),o,0,0,0,g),t(new Ke(.33,.012,.022),a,0,.112,0,g);let x=document.createElement("canvas");x.width=256,x.height=176;let v=x.getContext("2d");v.fillStyle="#06222e",v.fillRect(0,0,256,176),v.strokeStyle="rgba(127,230,255,.25)";for(let M=0;M<256;M+=16)v.beginPath(),v.moveTo(M,0),v.lineTo(M,176),v.stroke();for(let M=0;M<176;M+=16)v.beginPath(),v.moveTo(0,M),v.lineTo(256,M),v.stroke();v.strokeStyle="#7fe6ff",v.lineWidth=2,v.beginPath(),v.arc(128,110,50,Math.PI,0),v.lineTo(178,140),v.lineTo(78,140),v.closePath(),v.stroke(),v.fillStyle="#7fe6ff",v.font="bold 14px sans-serif",v.fillText("BLUEPRINT",12,22);let m=new Zt(x);m.colorSpace=_t;let E=t(new Gn(.29,.195),new ke({map:m,transparent:!0,opacity:.95}),0,-.004,.01,g);g.userData.scr=E,g.rotation.set(-.5,.25,0),Ur={laser:d,rifle:p,build:g};for(let M in Ur)Ur[M].scale.setScalar(M==="build"?.45:.6),Ur[M].visible=!1,qs.add(Ur[M]);let b=new Fe(1,1,1,16,24,!0);b.translate(0,.5,0),Ys=new Q(b,new ke({color:16773328,transparent:!0,opacity:.95,blending:He,depthWrite:!1})),Es=new Q(b,rx(16742960)),Ys.visible=Es.visible=!1,Ys.frustumCulled=Es.frustumCulled=!1,h.scene.add(Ys,Es),ka=ge(16748608,1.6,h.scene),ka.visible=!1,$i=new Ri(16747072,0,6,2),h.scene.add($i),cc=ge(6743807,.35,qs),cc.visible=!1,za=new aa(16773853,0,70,.42,.45,1.2),n.add(za),za.position.set(.3,-.2,0),za.target.position.set(0,0,-10),n.add(za.target),h.scene.add(n)}function md(n){let e=Hr[n];if(e.need&&!h.upgrades[e.need]){h.events.emit("toast",`\u5C1A\u672A\u5236\u9020\uFF1A${e.name}\uFF08\u5728\u5236\u9020\u5DE5\u574A\u5236\u4F5C\uFF09`),X.play("deny");return}un.index===n&&e.id!=="build"||(un.index=n,X.play("ui"),e.id==="build"?h.events.emit("openBuild"):uo(null))}var Ha=0,v0=0,Na=0,x0=0,gd=0,c1=-1,lT=new S,cT=new S(0,1,0),Oa=new S;function h1(n,e,t){let i=null,s=t;for(let r of h.nodes){let o=r.mesh.scale.x,a=1.5*o+.3;Oa.set(r.x-n.x,r.y+.7*o-n.y,r.z-n.z);let l=Oa.dot(e);if(l<0||l>t+a)continue;let c=Oa.lengthSq()-l*l;if(c>a*a)continue;let d=l-Math.sqrt(a*a-c);d<s&&(s=Math.max(.3,d),i=r)}return i?{n:i,dist:s}:null}function hT(n,e,t){let i=null,s=t;for(let r of h.buildings){let o=Math.max(1.2,r.def.r);Oa.set(r.x-n.x,r.y+Math.min(o,3)*.6-n.y,r.z-n.z);let a=Oa.dot(e);if(a<0)continue;let l=Oa.lengthSq()-a*a;if(l>o*o)continue;let c=a-Math.sqrt(o*o-l);c<s&&(s=c,i=r)}return i}function u1(n,e,t){let i=un.id;c1!==un.index&&(gd=1,c1=un.index),gd=Math.max(0,gd-n*4);for(let x in Ur)Ur[x].visible=x===i;let s=Ur[i],r=Math.hypot(e.vel.x,e.vel.z),o=Math.sin(e.bob)*.012*Math.min(1,r/6),a=Math.abs(Math.cos(e.bob))*.012*Math.min(1,r/6);Na*=Math.pow(1e-4,n);let l=i==="build"?[.2,-.24,-.6]:[.24,-.22,-.58];s.position.set(l[0]+o,l[1]+a-gd*.3-(e.sprinting?.04:0),l[2]+Na*.08),s.rotation.x=(i==="build"?-.5:0)+Na*.15+(e.sprinting?-.25:0),i==="build"&&(s.userData.scr.material.opacity=.6+Math.sin(performance.now()*.005)*.2),lc.aspect=t.aspect,lc.fov=t.fov,lc.updateProjectionMatrix();let c=.4+(1-h.time.night)*1.2;qs.userData.dl.intensity=c,Me.hit("KeyF")&&!h.menuOpen&&(e.flashlight=!e.flashlight,X.play("ui")),za.intensity=e.flashlight?60:0;let d=t.position,u=e.fwd;h.lookBuilding=h.menuOpen?null:hT(d,u,14);let f=h.menuOpen?null:h1(d,u,30);h.aimNode=i==="laser"&&!!f&&f.dist<9;let p=h.menuOpen||i==="build"?null:xo(d,u,i==="rifle"?140:40);if(p){let x=p.e;h.aimTarget={id:x,x:x.pos.x,y:x.pos.y+1*x.scale,z:x.pos.z,r:1.7*x.scale,name:x.boss?"\u6676\u6BCD":x.guardian?"\u949B\u77FF\u5B88\u536B":"\u9508\u8680\u86DB",tag:x.boss?"CRYSTAL MOTHER":"HOSTILE",dist:p.dist,bar:Math.max(0,x.hp/x.maxHp),kind:"enemy"}}else if(f&&i!=="build"){let x=f.n;h.aimTarget={id:x,x:x.x,y:x.y+.8*x.mesh.scale.x,z:x.z,r:1.7*x.mesh.scale.x+.3,name:rn[x.type].name,tag:{iron:"FE ORE",silicon:"SI CRYSTAL",ice:"H2O ICE",titanium:"TI ORE"}[x.type],dist:f.dist,bar:Math.max(0,x.amount/x.max),kind:"node",color:rn[x.type].color}}else h.aimTarget=null;if(!h.menuOpen&&!e.dead&&!h.photo){if(Me.hit("Digit1")&&md(0),Me.hit("Digit2")&&md(1),(Me.hit("Digit3")||Me.hit("KeyB"))&&md(2),Me.wheel&&un.id!=="build"){let x=un.index;for(let v=0;v<2&&(x=(x+(Me.wheel>0?1:2))%2,!(!Hr[x].need||h.upgrades[Hr[x].need]));v++);x!==un.index&&md(x)}un.id==="build"&&It.type&&Me.wheel&&(It.rot+=Me.wheel*.3)}Ys.visible=Es.visible=ka.visible=!1,aT-=n,$i.intensity=Math.max(0,$i.intensity-n*120),yo&&(yo.mesh.position.set(yo.x,yo.y,yo.z),yo=null),cc.visible=!1,v0-=n;let g=Me.mouse[0]&&!h.menuOpen&&!e.dead&&h.locked;if(y0.emissiveIntensity=i==="laser"&&g?3+Math.random()*1.5:1+Math.sin(performance.now()*.003)*.3,i==="laser")if(g){let v=h1(d,u,9),m=xo(d,u,9),E=Yh(d,u,9),b=9,M=null;E&&E.dist<b&&(b=E.dist,M="ground"),v&&v.dist<=b&&(b=v.dist,M="node"),m&&m.dist<b&&(b=m.dist,M="enemy");let L=lT.copy(d).addScaledVector(u,b),R=t.localToWorld(l1.clone()),P=L.clone().sub(R),I=P.length();P.normalize();let _=new mn().setFromUnitVectors(cT,P),w=1+Math.sin(performance.now()*.05)*.2;if(Ys.position.copy(R),Ys.quaternion.copy(_),Ys.scale.set(.012*w,I,.012*w),Es.position.copy(R),Es.quaternion.copy(_),Es.scale.set(.085*w,I,.085*w),Es.material.uniforms.uLen.value=I,Math.random()<.35&&le.spark(L,[1,.75,.4],2,7,.5),Ys.visible=Es.visible=!0,ka.position.copy(L),ka.visible=!0,ka.scale.setScalar(1.2+Math.random()*.8),Na=Math.max(Na,.15+Math.random()*.1),$i.position.copy(L).addScaledVector(u,-.6),$i.color.setRGB(1,.55,.25),$i.intensity=5+Math.random()*4,M==="node"){let U=v.n;for($i.color.setRGB(...gs[U.type]),yo=U,U.mesh.position.set(U.x+(Math.random()-.5)*.07,U.y+(Math.random()-.5)*.05,U.z+(Math.random()-.5)*.07),Math.random()<.15&&le.dustPuff(L,1,.4),Ha+=n*3.2*(h.upgrades.overclock?2:1)*(Xt("laser2")?1.5:1)*Ii().yield,Math.random()<.7&&le.spark(L,gs[U.type],2,5,.4),x0-=n,x0<=0&&(x0=.09,X.play("mine"));Ha>=1&&h.nodes.includes(U);)if(Ha-=1,h.res[U.type]++,h.stats.mined[U.type]++,U.meteor&&(h.stats.meteorMined=(h.stats.meteorMined||0)+1),h.events.emit("pickup",{type:U.type,n:1}),o1(L.clone().addScaledVector(u,-.3),gs[U.type]),ed(U,1)){X.play("deplete"),Ha=0;break}}else M==="enemy"?(vo(m.e,16*n*(h.upgrades.overclock?1.5:1),"laser"),Math.random()<.5&&le.spark(L,[1,.5,.2],3,5)):M==="ground"&&(Math.random()<.3&&le.spark(L,[1,.6,.3],1,3),Math.random()<.1&&le.dustPuff(L,1,.3));X.laser(!0)}else X.laser(!1),Ha=Math.min(Ha,.9);else X.laser(!1);if(i==="rifle"&&g&&v0<=0)if(e.energy>=5){v0=.16,e.energy-=5,Na=1;let x=t.localToWorld(l1.clone()),v=xo(d,u,200),m=Yh(d,u,200),E=200;m&&(E=m.dist),v&&v.dist<E&&(E=v.dist);let M=d.clone().addScaledVector(u,E).sub(x).normalize();oc(x,M,h.upgrades.rifle2?30:19,"player"),X.play("shoot"),cc.visible=!0,cc.position.set(.24,-.21,-.86),$i.position.copy(x),$i.color.setRGB(.4,.9,1),$i.intensity=12}else Me.clicked[0]&&(X.play("deny"),h.events.emit("toast","\u80FD\u91CF\u4E0D\u8DB3"));if(i==="build"){let x=!h.menuOpen&&It.type?Yh(d,u,40):null;if(Nx(x?x.point:null,e.pos),!h.menuOpen&&It.type&&(Me.hit("KeyR")&&(It.rot+=Math.PI/4),Me.clicked[0]))if(It.valid){let v=zx();v&&h.events.emit("built",v)}else X.play("deny"),h.events.emit("toast",It.reason);Me.clicked[2]&&(uo(null),un.index=0,X.play("ui"))}}function f1(n){h.player.dead||h.driving||h.photo||(n.autoClear=!1,n.clearDepth(),n.render(qs,lc),n.autoClear=!0)}var Fa=[["\u6797\u6653","\u690D\u7269\u5B66\u5BB6","\u6211\u4ECE\u4E91\u5357\u5E26\u6765\u4E86\u4E00\u5305\u8336\u6811\u79CD\u5B50\u3002\u603B\u6709\u4E00\u5929\uFF0C\u706B\u661F\u4E0A\u4E5F\u80FD\u6CE1\u4E00\u58F6\u70ED\u8336\u3002"],["Amara Okafor","\u533B\u751F","\u5728\u5730\u7403\u4E0A\uFF0C\u6211\u6551\u8FC7\u5F88\u591A\u4EBA\u3002\u5728\u8FD9\u91CC\uFF0C\u6211\u60F3\u770B\u7740\u5B69\u5B50\u4EEC\u5E73\u5B89\u957F\u5927\u3002"],["\u9648\u9ED8","\u5DE5\u7A0B\u5E08","\u8FD9\u91CC\u7684\u6BCF\u4E00\u9897\u87BA\u4E1D\uFF0C\u90FD\u662F\u6211\u4EEC\u4EB2\u624B\u62E7\u4E0A\u53BB\u7684\u3002"],["Mateo Silva","\u5730\u8D28\u5B66\u5BB6","\u4F60\u770B\u89C1\u90A3\u4E9B\u5CA9\u5C42\u4E86\u5417\uFF1F\u5B83\u4EEC\u6BD4\u4EBA\u7C7B\u7684\u5386\u53F2\u8FD8\u8981\u53E4\u8001\u56DB\u5341\u4EBF\u5E74\u3002"],["\u82CF\u5FF5","\u6559\u5E08",'\u6211\u7684\u7B2C\u4E00\u5802\u8BFE\uFF0C\u5C31\u53EB"\u6211\u4EEC\u4E3A\u4EC0\u4E48\u6765\u5230\u706B\u661F"\u3002'],["Yuki Tanaka","\u98DE\u884C\u5458","\u4ECE\u8F68\u9053\u4E0A\u770B\uFF0C\u4F60\u4EEC\u7684\u706F\u5149\u50CF\u662F\u7EA2\u8272\u6C99\u6F20\u91CC\u7684\u4E00\u4E32\u73CD\u73E0\u3002"],["\u738B\u5927\u5C71","\u53A8\u5E08","\u6E29\u5BA4\u91CC\u7684\u7B2C\u4E00\u6279\u571F\u8C46\uFF0C\u6211\u505A\u4E86\u4E00\u9505\u571F\u8C46\u7096\u83DC\u3002\u5927\u5BB6\u90FD\u54ED\u4E86\u3002"],["Elena Petrova","\u5929\u6587\u5B66\u5BB6","\u665A\u4E0A\u62AC\u5934\uFF0C\u90A3\u9897\u6700\u4EAE\u7684\u84DD\u661F\uFF0C\u5C31\u662F\u5730\u7403\u3002"],["\u8D75\u5C0F\u96E8","\u5B66\u751F","\u6211\u5341\u516D\u5C81\u3002\u6211\u4F1A\u662F\u7B2C\u4E00\u4EE3\u5728\u706B\u661F\u957F\u5927\u7684\u4EBA\u3002"],["Kwame Mensah","\u7535\u5DE5","\u53EA\u8981\u706F\u8FD8\u4EAE\u7740\uFF0C\u8FD9\u91CC\u5C31\u662F\u5BB6\u3002"],["\u5468\u9752\u79BE","\u6C34\u6587\u5B66\u5BB6","\u51B0\u5C42\u4E0B\u9762\u6709\u6C34\u3002\u6709\u6C34\uFF0C\u5C31\u6709\u751F\u547D\u3002"],["Priya Sharma","\u7A0B\u5E8F\u5458","\u6211\u5199\u7684\u4EE3\u7801\u5728\u63A7\u5236\u5236\u6C27\u7AD9\u3002\u522B\u62C5\u5FC3\uFF0C\u6211\u6D4B\u8BD5\u8FC7\u4E09\u5343\u904D\u4E86\u3002"],["\u674E\u957F\u98CE","\u8001\u5175","\u6211\u5E74\u8F7B\u65F6\u5B88\u8FC7\u8FB9\u7586\u3002\u73B0\u5728\uFF0C\u6211\u5B88\u7740\u4EBA\u7C7B\u7684\u65B0\u8FB9\u7586\u3002"],["Sofia Rossi","\u5EFA\u7B51\u5E08","\u7A79\u9876\u7684\u5F27\u5EA6\uFF0C\u662F\u6211\u7167\u7740\u6545\u4E61\u6559\u5802\u7684\u5706\u9876\u753B\u7684\u3002"],["\u4F55\u5B89","\u62A4\u58EB","\u60F3\u5BB6\u7684\u65F6\u5019\uFF0C\u6211\u5C31\u53BB\u6E29\u5BA4\u91CC\u95FB\u95FB\u6CE5\u571F\u7684\u5473\u9053\u3002"],["Jonas Berg","\u673A\u68B0\u5E08","\u706B\u661F\u7684\u6C99\u5B50\u4F1A\u94BB\u8FDB\u4EFB\u4F55\u7F1D\u9699\u3002\u4F46\u6211\u4EEC\u6BD4\u6C99\u5B50\u66F4\u56FA\u6267\u3002"],["\u9A6C\u6674","\u8BB0\u8005","\u6211\u8981\u8BB0\u5F55\u4E0B\u8FD9\u4E00\u5207\u3002\u51E0\u767E\u5E74\u540E\u7684\u4EBA\u4F1A\u60F3\u77E5\u9053\uFF0C\u6700\u521D\u662F\u600E\u6837\u7684\u3002"],["Omar Haddad","\u519C\u5B66\u5BB6","\u6211\u7956\u7236\u5728\u6C99\u6F20\u91CC\u79CD\u51FA\u4E86\u6930\u67A3\u3002\u6211\u8981\u5728\u706B\u661F\u79CD\u51FA\u68EE\u6797\u3002"],["\u5434\u6850","\u753B\u5BB6","\u706B\u661F\u7684\u65E5\u843D\u662F\u84DD\u8272\u7684\u3002\u5730\u7403\u4E0A\u6CA1\u6709\u4EBA\u4F1A\u76F8\u4FE1\u3002"],["Grace Kim","\u5FC3\u7406\u533B\u751F","\u79BB\u5BB6\u5F88\u8FDC\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5F7C\u6B64\u5C31\u662F\u5BB6\u3002"],["\u90ED\u8FDC","\u7236\u4EB2","\u6211\u5973\u513F\u5728\u98DE\u8239\u4E0A\u51FA\u751F\u3002\u5979\u7684\u51FA\u751F\u8BC1\u660E\u4E0A\u5199\u7740\uFF1A\u51FA\u751F\u5730\uFF0C\u661F\u9645\u7A7A\u95F4\u3002"],["Lucas Moreau","\u97F3\u4E50\u5BB6","\u6211\u5E26\u4E86\u4E00\u628A\u5409\u4ED6\u3002\u4ECA\u665A\u7A79\u9876\u91CC\u6709\u97F3\u4E50\u4F1A\uFF0C\u4F60\u6765\u5417\uFF1F"],["\u94B1\u591A\u591A","\u4F1A\u8BA1","\u6211\u7B97\u8FC7\u4E86\uFF1A\u7167\u8FD9\u4E2A\u901F\u5EA6\uFF0C\u4E8C\u5341\u5E74\u540E\u8FD9\u91CC\u4F1A\u6709\u4E00\u5EA7\u57CE\u5E02\u3002"],["Aiko Sato","\u751F\u7269\u5B66\u5BB6","\u90A3\u4E9B\u9508\u8680\u86DB\u2026\u2026\u4E5F\u8BB8\u5B83\u4EEC\u53EA\u662F\u5728\u4FDD\u62A4\u81EA\u5DF1\u7684\u5BB6\u56ED\u3002"],["\u9093\u5353","\u77FF\u5DE5","\u949B\u77FF\u91CC\u85CF\u7740\u706B\u661F\u7684\u5FC3\u8DF3\u3002"],["Nadia Volkova","\u6C14\u8C61\u5B66\u5BB6","\u5927\u6C14\u6539\u9020\u5854\u542F\u52A8\u540E\uFF0C\u4E5F\u8BB8\u6211\u4EEC\u80FD\u770B\u89C1\u706B\u661F\u4E0A\u7684\u7B2C\u4E00\u7247\u4E91\u3002"],["\u9EC4\u4E00\u9E23","\u673A\u5668\u4EBA\u4E13\u5BB6","\u673A\u5668\u53EF\u4EE5\u66FF\u6211\u4EEC\u5E72\u6D3B\uFF0C\u4F46\u53EA\u6709\u4EBA\uFF0C\u624D\u80FD\u628A\u4E00\u4E2A\u5730\u65B9\u53D8\u6210\u5BB6\u3002"],["Samuel Okoro","\u7267\u5E08","\u65E0\u8BBA\u5728\u54EA\u9897\u661F\u7403\u4E0A\uFF0C\u6211\u4EEC\u90FD\u4F1A\u4E3A\u65B0\u751F\u7684\u5B69\u5B50\u795D\u798F\u3002"],["\u53F6\u77E5\u79CB","\u8BD7\u4EBA",'"\u6B64\u5FC3\u5B89\u5904\u662F\u543E\u4E61\u3002"\u2014\u2014\u82CF\u8F7C\u3002\u6211\u60F3\uFF0C\u4ED6\u8BF4\u5F97\u5BF9\u3002'],["Hannah Weber","\u7269\u7406\u5B66\u5BB6","\u805A\u53D8\u53CD\u5E94\u5806\u7684\u5149\uFF0C\u548C\u592A\u9633\u662F\u540C\u4E00\u79CD\u5149\u3002"],["\u5C0F\u6EE1","\u5B69\u5B50","\u53D4\u53D4\uFF0C\u5730\u7403\u662F\u4EC0\u4E48\u6837\u5B50\u7684\uFF1F"],["Diego Ram\xEDrez","\u767B\u5C71\u5BB6","\u5965\u6797\u5E15\u65AF\u5C71\u6709\u4E24\u4E07\u7C73\u9AD8\u3002\u603B\u6709\u4E00\u5929\u6211\u8981\u7AD9\u4E0A\u53BB\u3002"]],vd=0;function p1(n,e,t){let i=t?.idx??vd++,s=Fa[i%Fa.length],r=yv(i);r.group.position.set(n,ue(n,e),e),h.scene.add(r.group);let o={...r,idx:i,name:s[0]+(i>=Fa.length?` ${Math.floor(i/Fa.length)+1}\u4E16`:""),job:s[1],line:s[2],pos:r.group.position,target:null,wait:Math.random()*3,phase:Math.random()*6,talked:0};return h.colonists.push(o),o}function dT(n){let e=h.buildings.filter(o=>o.type!=="lamp");if(!e.length)return new S(n.pos.x+(Math.random()-.5)*10,0,n.pos.z+(Math.random()-.5)*10);let t=e;if(h.time.night>.5){let o=e.filter(l=>l.type==="plaza"&&l.powered);if(o.length&&Math.random()<.85){let l=o[n.idx%o.length],c=n.idx*2.399%(Math.PI*2),d=2.8+n.idx%3*.9;return n.atPlaza=l,new S(l.x+Math.cos(c)*d,0,l.z+Math.sin(c)*d)}let a=e.filter(l=>l.type==="habitat"||l.type==="apartment");a.length&&(t=a)}n.atPlaza=null;let i=t[Math.floor(Math.random()*t.length)],s=Math.random()*Math.PI*2,r=i.def.r+1.5+Math.random()*5;return new S(i.x+Math.cos(s)*r,0,i.z+Math.sin(s)*r)}var hc=null,M0=25;function uT(n,e){let t=Bx();t.group.userData.shuttle=!0,t.group.position.set(n.x,n.y+260,n.z),h.scene.add(t.group),hc={...t,pad:n,n:e,t:0,phase:"descend"},X.play("rumble"),h.events.emit("shuttleIncoming",e)}function m1(n){let e=h.colony;if(h.popTotal=Math.max(h.popTotal||0,h.colonists.length),e.pop=h.popTotal,e.pop)for(h._work=(h._work||0)+n*e.pop*.04*(Xt("culture")?2:1)*Jp();h._work>=1;){h._work-=1;let r=Math.random()<.55?"iron":Math.random()<.6?"silicon":"ice";h.res[r]++}let t=h.buildings.filter(r=>r.type==="beacon"&&r.powered),i=e.support-e.pop;!hc&&t.length&&i>0&&!h.ended&&(M0-=n,M0<=0&&(M0=Math.max(20,50/t.length)*(Xt("pr")?.55:1)/Jp(),uT(t[Math.floor(Math.random()*t.length)],Math.min(i,4+(h.cityLevel||0)*2+(Xt("pr")?2:0))))),hc&&fT(n);let s=performance.now()*.001;for(let r of h.colonists){r.target||(r.wait-=n,r.wait<=0&&(r.target=dT(r)));let o=!1;if(r.target){let d=r.target.x-r.pos.x,u=r.target.z-r.pos.z,f=Math.hypot(d,u);if(f<.6)r.target=null,r.wait=3+Math.random()*8;else{r.pos.x+=d/f*1.7*n,r.pos.z+=u/f*1.7*n;for(let g of h.colliders.query(r.pos.x,r.pos.z)){if(g.kind!=="building")continue;let x=r.pos.x-g.x,v=r.pos.z-g.z,m=Math.hypot(x,v),E=g.r+.4;m<E&&m>.01&&(r.pos.x=g.x+x/m*E,r.pos.z=g.z+v/m*E)}r.group.rotation.y=Math.atan2(d,u),o=!0}}let a=Math.hypot(h.player.pos.x-r.pos.x,h.player.pos.z-r.pos.z);a<4&&!o?r.group.rotation.y=Math.atan2(h.player.pos.x-r.pos.x,h.player.pos.z-r.pos.z):!o&&r.atPlaza&&(r.group.rotation.y=Math.atan2(r.atPlaza.x-r.pos.x,r.atPlaza.z-r.pos.z),r.wait=Math.max(r.wait,2),h.time.night<.3&&(r.wait=0)),r.pos.y=ue(r.pos.x,r.pos.z);let l=s*7+r.phase,c=o?Math.sin(l)*.6:0;r.legL.rotation.x=c,r.legR.rotation.x=-c,r.armL.rotation.x=-c*.8,r.armR.rotation.x=c*.8,!o&&a<4&&(r.armR.rotation.x=-2.6+Math.sin(s*6)*.3),r.body.position.y=.72+(o?Math.abs(Math.sin(l))*.04:0),r.talked=Math.max(0,r.talked-n)}}function fT(n){let e=hc;e.t+=n;let t=e.pad,i=e.group;if(e.phase==="descend"){let s=Math.min(1,e.t/11),r=1-Math.pow(1-s,3);i.position.y=t.y+.6+260*(1-r),e.flame.scale.set(1,.6+(1-r)*1.2+Math.random()*.2,1);for(let o=0;o<3;o++)le.flame(i.position);s>.85&&Math.random()<.5&&le.dustPuff(new S(t.x,t.y,t.z),4,10),s>=1&&(e.phase="landed",e.t=0,le.ring(new S(t.x,t.y,t.z),3,80),e.flame.visible=!1,e.flameGlow.visible=!1)}else if(e.phase==="landed"){if(e.total=e.total||e.n,e.n>0&&e.t>2+(e.total-e.n)*.6){let s;h.colonists.length<40?(s=p1(t.x+(Math.random()-.5)*2,t.z+3),s.target=new S(t.x+(Math.random()-.5)*20,0,t.z+10+Math.random()*8)):s={name:Fa[vd++%Fa.length][0]},e.n--,e.arrived=(e.arrived||[]).concat([s]),h.popTotal=(h.popTotal||0)+1,h.stats.arrived++}e.n<=0&&e.t>7&&(e.phase="ascend",e.t=0,e.flame.visible=!0,e.flameGlow.visible=!0,X.play("rumble"),h.events.emit("colonistsArrived",e.arrived||[]))}else if(e.phase==="ascend"){i.position.y+=n*(5+e.t*12);for(let s=0;s<3;s++)le.flame(i.position);e.t<1.5&&le.dustPuff(new S(t.x,t.y,t.z),3,10),e.t>12&&(h.scene.remove(i),hc=null)}}var E0=new S;function g1(n,e){let t=null,i=6;for(let s of h.colonists){E0.set(s.pos.x-n.x,s.pos.y+1.1-n.y,s.pos.z-n.z);let r=E0.dot(e);r<0||r>i||E0.lengthSq()-r*r<.8*.8&&(i=r,t=s)}return t}function v1(){return h.colonists.map(n=>[n.idx,+n.pos.x.toFixed(1),+n.pos.z.toFixed(1)])}function x1(n){for(let[e,t,i]of n)p1(t,i,{idx:e});vd=Math.max(vd,...n.map(e=>e[0]+1),0)}var b0=8,xd=[],dc=0,pT=new Un(.16,1),mT=new Le(.165,.025,6,20);function y1(){return dc}function M1(n,e){if(!h.upgrades.grenade)return!1;if(dc>0)return X.play("deny"),!1;dc=b0;let t=new ce,i=new Q(pT,y.dark);i.castShadow=!0,t.add(i);let s=new Q(mT,y.orange);s.rotation.x=Math.PI/2,t.add(s);let r=ge(16728112,.7,t,0,.12,0),o=new S(0,0,-1).applyQuaternion(n.quaternion),a=n.position.clone().addScaledVector(o,.6);a.y-=.2,t.position.copy(a),h.scene.add(t);let l=o.multiplyScalar(21);return l.y+=4.5,e.vel&&l.add(new S(e.vel.x,0,e.vel.z)),xd.push({g:t,led:r,vel:l,t:0,fuse:1.9,spin:new S(Math.random()*8,Math.random()*8,0)}),X.play("whoosh",a),h.stats.grenades=(h.stats.grenades||0)+1,!0}function gT(n){let e=n.g.position.clone();e.y+=.6,h.scene.remove(n.g),n.led.material.dispose(),vs(e,1.7,16752704),Sa(e,10476799,9,.8),le.dustPuff(e,30,7);let t=9;for(let r of h.enemies){if(r.dead)continue;let o=r.pos.x-e.x,a=r.pos.z-e.z,l=Math.hypot(o,a);if(l>t*(r.boss?1.3:1))continue;let c=1-l/(t*(r.boss?1.3:1));if(vo(r,(r.boss?90:25)+55*c,"player"),!r.boss){let d=l||1;r.kb={x:o/d*16*c+.01,z:a/d*16*c},r.stun=1.1+c}}let i=h.player,s=i.pos.distanceTo(e);s<6&&!h.driving&&(i.landDip=Math.max(i.landDip,.3*(1-s/6)))}function E1(n){dc=Math.max(0,dc-n);for(let e=xd.length-1;e>=0;e--){let t=xd[e],i=t.g.position;t.t+=n,t.vel.y-=11*n,i.addScaledVector(t.vel,n),t.g.rotation.x+=t.spin.x*n,t.g.rotation.y+=t.spin.y*n;let s=ue(i.x,i.z)+.16;i.y<s&&(i.y=s,Math.abs(t.vel.y)>1.5&&(X.play("tick"),le.dustPuff(i.clone(),3,.8)),t.vel.y=Math.abs(t.vel.y)*.35,t.vel.x*=.55,t.vel.z*=.55,t.spin.multiplyScalar(.6));let r=t.fuse-t.t;t.led.visible=Math.sin(t.t*(10+(1.9-r)*22))>0,Math.random()<n*30&&le.trail(i.clone(),[1,.4,.2],.25);let o=r<=0;for(let a of h.enemies)if(!a.dead&&Math.hypot(a.pos.x-i.x,a.pos.z-i.z)<1.3*a.scale&&i.y<a.pos.y+2.5*a.scale){o=!0;break}o&&(xd.splice(e,1),gT(t))}}var vT={iron:'<path d="M12 2.5l8.2 4.75v9.5L12 21.5l-8.2-4.75v-9.5z"/><path d="M12 2.5v19M3.8 7.25l16.4 9.5M20.2 7.25L3.8 16.75" opacity=".35"/>',silicon:'<path d="M12 2l7 10-7 10-7-10z"/><path d="M5 12h14M12 2v20" opacity=".35"/>',ice:'<path d="M12 2v20M3.3 7l17.4 10M20.7 7L3.3 17"/><path d="M9.5 3.5L12 6l2.5-2.5M9.5 20.5L12 18l2.5 2.5"/>',titanium:'<path d="M12 2l2.6 7.4L22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6z"/>',power:'<path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H12z"/>',pop:'<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.6 2.7-6 6-6s6 2.4 6 6"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 14.4c3 .1 5.5 2.2 5.5 5.6"/>',house:'<path d="M3 20h18M5 20V10l7-6 7 6v10"/><path d="M10 20v-5h4v5"/>',o2:'<circle cx="9" cy="12" r="5.5"/><path d="M17 15.5c0-1.4 2.6-1.6 2.6-3 0-.9-.7-1.5-1.6-1.5S16.5 11.6 16.5 12.4M16.5 18.5h3.4"/>',food:'<path d="M12 21V9"/><path d="M12 13c-4 0-6-3-6-7 4 0 6 3 6 7zM12 11c0-4 2-7 6-7 0 4-2 7-6 7z"/>',water:'<path d="M12 2.5S5.5 10 5.5 14.5a6.5 6.5 0 0013 0C18.5 10 12 2.5 12 2.5z"/>',laser:'<path d="M3 15l7-7 3 3-7 7z"/><path d="M13 11l2-2M16 8l5-5M17.5 11.5l3 .5M12.5 6.5l-.5-3"/>',bomb:'<circle cx="11" cy="14" r="6.5"/><path d="M15.5 9.5l2-2M17 5l1.5-1.5M19 7h2M17.5 3V1"/>',rifle:'<path d="M2 10h15l3 2-3 2H9l-2 5H4l1-5H2z"/><path d="M12 10V7h3v3"/>',build:'<path d="M3 21h18M6 21V11h12v10M9 11V6h6v5"/><path d="M14 3l5 3" />',rover:'<path d="M3 15h18v-4l-3-4H8l-2 4H3z"/><circle cx="7" cy="17.5" r="2.2"/><circle cx="17" cy="17.5" r="2.2"/><path d="M10 7v4h8"/>',warn:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.01"/>',sun:'<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/>',moon:'<path d="M20 14.5A8.5 8.5 0 019.5 4a8.5 8.5 0 1010.5 10.5z"/>',meteor:'<circle cx="16" cy="16" r="4"/><path d="M13 13L3 3M15 11L8 4M11 15L4 8"/>',radio:'<path d="M5 9a9.5 9.5 0 0114 0M8 12a5 5 0 018 0"/><circle cx="12" cy="15.5" r="1.6"/><path d="M12 17v4"/>',check:'<path d="M4 12.5l5 5L20 6.5"/>',lock:'<rect x="5" y="10.5" width="14" height="10" rx="1"/><path d="M8 10.5V7a4 4 0 018 0v3.5"/>',ship:'<path d="M12 2c3 3 4 7 4 11v4H8v-4c0-4 1-8 4-11z"/><path d="M8 13l-3 4v3l3-2M16 13l3 4v3l-3-2M10 20l2 2 2-2"/>',colony:'<path d="M2 20h20"/><path d="M4 20v-5a4 4 0 018 0v5M13 20V7h7v13"/><path d="M15.5 10h2M15.5 13h2M15.5 16h2"/>',storm:'<path d="M3 8h12a3 3 0 10-3-3M3 12h16a3 3 0 11-3 3M3 16h8"/>',shield:'<path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/>',wrench:'<path d="M14.5 6.5a4 4 0 015.2 5.2L21 13l-8 8-1.3-1.3a4 4 0 01-5.2-5.2L3 11l3-3 3.5 3.5 2-2L8 6l3-3z" transform="scale(.9) translate(1.3 1.3)"/>',tank:'<rect x="7" y="5" width="10" height="16" rx="5"/><path d="M10 2h4v3h-4zM7 10h10"/>',scanner:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 12l6-6"/>',jet:'<path d="M8 3h8v11H8z"/><path d="M9 14l-1 4M15 14l1 4M10 18l2 4 2-4"/>',armor:'<path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/><path d="M8 10l4 2 4-2M12 12v6"/>',focus:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="2"/><path d="M12 1.5v5M12 17.5v5M1.5 12h5M17.5 12h5"/>',bolt2:'<path d="M7 2l-2 9h5l-2 11 9-13h-6l3-7z"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',planet:'<circle cx="12" cy="12" r="6.5"/><path d="M2.5 15.5c3 2 16 -4 19-9" />',trophy:'<path d="M7 3h10v5a5 5 0 01-10 0z"/><path d="M7 5H3c0 3 2 5 4 5M17 5h4c0 3-2 5-4 5M12 13v4M8 21h8M9 17h6"/>',book:'<path d="M4 4h6a2 2 0 012 2v14a2 2 0 00-2-2H4zM20 4h-6a2 2 0 00-2 2v14a2 2 0 012-2h6z"/>',camera:'<path d="M3 7h4l2-3h6l2 3h4v13H3z"/><circle cx="12" cy="13" r="4"/>',gear:'<circle cx="12" cy="12" r="3.2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',drone:'<rect x="9" y="10" width="6" height="4" rx="1"/><path d="M9 11L5 7M15 11l4-4M9 13l-4 4M15 13l4 4"/><circle cx="5" cy="7" r="2.2"/><circle cx="19" cy="7" r="2.2"/><circle cx="5" cy="17" r="2.2"/><circle cx="19" cy="17" r="2.2"/>',boss:'<path d="M12 2l3 6 6 1-4 5 1 7-6-3-6 3 1-7-4-5 6-1z"/><circle cx="12" cy="12" r="2"/>',key:'<circle cx="8" cy="15" r="4.5"/><path d="M11.5 12L20 3.5M17 6.5l2.5 2.5M15 8.5l2 2"/>',dome:'<path d="M3 19h18M4.5 19a7.5 7.5 0 0115 0"/><path d="M12 11.5V8M10 19v-3h4v3"/>',tower:'<path d="M6 21V5h6v16M12 21V10h6v11"/><path d="M8 8h2M8 11h2M8 14h2M14 13h2M14 16h2M3 21h18"/>',monument:'<path d="M10 21l1-16 1-2 1 2 1 16z"/><ellipse cx="12" cy="11" rx="6" ry="2"/><path d="M5 21h14"/>'};function b1(){return`<svg xmlns="http://www.w3.org/2000/svg" style="display:none">${Object.entries(vT).map(([n,e])=>`<symbol id="i-${n}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${e}</symbol>`).join("")}</svg>`}var ft=(n,e="")=>`<svg class="ico ${e}" aria-hidden="true"><use href="#i-${n}"/></svg>`;var yd={};function w1(n){let e=n.filter(l=>!yd[l]);if(!e.length)return yd;let t=256,i=new ra({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});i.setSize(t,t),i.setPixelRatio(1),i.toneMapping=io,i.toneMappingExposure=1.15;let s=new as;s.add(new vr(14674175,3811876,1.4));let r=new ls(16773344,2.6);r.position.set(4,8,6),s.add(r);let o=new ls(8965375,1.4);o.position.set(-6,4,-6),s.add(o);let a=new fn(30,1,.1,500);for(let l of e){let c=new ce,d={};Qn[l](c,d);let u=[];c.traverse(E=>{(E.userData.found||E===d.flame||E===d.beam)&&u.push(E)}),u.forEach(E=>E.parent.remove(E));let f=[];c.traverse(E=>{E.isSprite&&f.push([E,E.parent])}),f.forEach(([E,b])=>b.remove(E)),s.add(c);let p=new Yi().setFromObject(c,!0),g=p.getSize(new S),x=p.getCenter(new S);f.forEach(([E,b])=>b.add(E));let m=Math.max(g.x,g.y,g.z)*.62/Math.tan(Tt.degToRad(15))*1.05;a.position.set(x.x+m*.62,x.y+m*.42,x.z+m*.66),a.lookAt(x),a.updateProjectionMatrix(),i.render(s,a),yd[l]=i.domElement.toDataURL("image/png"),s.remove(c)}return i.dispose(),i.forceContextLoss(),yd}var xT={mars:[{id:"zhurong",name:"\u795D\u878D\u53F7\u706B\u661F\u8F66",model:"rover",who:"\u6863\u6848 \xB7 \u795D\u878D\u53F7",text:"\u4E2D\u56FD\u706B\u661F\u8F66\u300C\u795D\u878D\u53F7\u300D\uFF0C2021 \u5E74\u7740\u9646\u5728\u4E4C\u6258\u90A6\u5E73\u539F\u2014\u2014\u5C31\u5728\u4F60\u811A\u4E0B\u8FD9\u7247\u571F\u5730\u3002\u5B83\u7684\u592A\u9633\u80FD\u677F\u4E0A\u79EF\u6EE1\u4E86\u516D\u5341\u591A\u5E74\u7684\u6C99\u5C18\u3002\u4EBA\u7C7B\u5728\u706B\u661F\u4E0A\u7684\u7B2C\u4E00\u884C\u8F66\u8F99\uFF0C\u5C31\u662F\u5B83\u7559\u4E0B\u7684\u3002"},{id:"opportunity",name:"\u673A\u9047\u53F7\u6B8B\u9AB8",model:"rover2",who:"\u6863\u6848 \xB7 \u673A\u9047\u53F7",text:"\u4E00\u5757\u5199\u7740\u300COpportunity\u300D\u7684\u6B8B\u7247\uFF0C\u4E0D\u77E5\u88AB\u54EA\u573A\u6C99\u5C18\u66B4\u5377\u5230\u4E86\u8FD9\u91CC\u3002\u5B83\u5728\u706B\u661F\u4E0A\u5DE5\u4F5C\u4E86\u5341\u4E94\u5E74\u3002\u5B83\u6700\u540E\u4F20\u56DE\u7684\u6570\u636E\uFF0C\u88AB\u4EBA\u4EEC\u7FFB\u8BD1\u6210\u4E00\u53E5\u8BDD\uFF1A\u300C\u6211\u7684\u7535\u91CF\u5F88\u4F4E\uFF0C\u5929\u5FEB\u9ED1\u4E86\u3002\u300D"},{id:"viking",name:"\u6D77\u76D7\u4E00\u53F7\u7740\u9646\u5668",model:"lander",who:"\u6863\u6848 \xB7 \u6D77\u76D7\u4E00\u53F7",text:"1976 \u5E74\uFF0C\u4EBA\u7C7B\u7B2C\u4E00\u4E2A\u5728\u706B\u661F\u6210\u529F\u7740\u9646\u5E76\u4F20\u56DE\u7167\u7247\u7684\u63A2\u6D4B\u5668\u3002\u7167\u7247\u4E0A\uFF0C\u5C31\u662F\u8FD9\u6837\u4E00\u7247\u7EA2\u8272\u7684\u3001\u5E03\u6EE1\u77F3\u5934\u7684\u5E73\u539F\u3002"},{id:"ingenuity",name:"\u673A\u667A\u53F7\u76F4\u5347\u673A",model:"heli",who:"\u6863\u6848 \xB7 \u673A\u667A\u53F7",text:"\u4E00\u67B6\u53EA\u6709 1.8 \u516C\u65A4\u7684\u5C0F\u76F4\u5347\u673A\u30022021 \u5E74\uFF0C\u5B83\u5B8C\u6210\u4E86\u4EBA\u7C7B\u5728\u5730\u7403\u4E4B\u5916\u7684\u7B2C\u4E00\u6B21\u52A8\u529B\u98DE\u884C\u3002\u65CB\u7FFC\u4E0A\u8FD8\u8D34\u7740\u4E00\u5C0F\u5757\u83B1\u7279\u5144\u5F1F\u98DE\u673A\u7684\u5E03\u6599\u3002"}],europa:[{id:"drill",name:"\u51B0\u5C42\u94BB\u63A2\u5668",model:"drill",who:"\u6863\u6848 \xB7 \u51B0\u7A7F\u8005\u53F7",text:"2041 \u5E74\u7684\u65E0\u4EBA\u94BB\u63A2\u5668\u300C\u51B0\u7A7F\u8005\u53F7\u300D\u3002\u5B83\u94BB\u5230\u4E86\u51B0\u4E0B\u4E09\u516C\u91CC\uFF0C\u5728\u6700\u540E\u4E00\u5E27\u753B\u9762\u91CC\uFF0C\u955C\u5934\u524D\u4F3C\u4E4E\u6709\u4EC0\u4E48\u4E1C\u897F\u5728\u53D1\u5149\u2026\u2026\u7136\u540E\u4FE1\u53F7\u4E2D\u65AD\u4E86\u3002"},{id:"hydro",name:"\u65E0\u4EBA\u6C34\u542C\u7AD9",model:"probe",who:"\u6863\u6848 \xB7 \u6C34\u542C\u7AD9",text:"\u4E00\u53F0\u8FD8\u5728\u8FD0\u8F6C\u7684\u6C34\u542C\u5668\u3002\u5B83\u5F55\u5230\u4E86\u51B0\u4E0B\u6D77\u6D0B\u91CC\u67D0\u79CD\u6709\u8282\u594F\u7684\u4F4E\u9891\u58F0\u97F3\uFF0C\u5468\u671F\u662F 17 \u5206\u949F\u3002\u6CA1\u6709\u4EBA\u77E5\u9053\u90A3\u662F\u4EC0\u4E48\u3002"},{id:"galileo",name:"\u523B\u5B57\u7684\u91D1\u5C5E\u7247",model:"plate",who:"\u6863\u6848 \xB7 \u65E0\u540D",text:"\u51B0\u91CC\u51BB\u7740\u4E00\u5757\u91D1\u5C5E\u7247\uFF0C\u4E0A\u9762\u523B\u7740\u4E00\u4E2A\u65E5\u671F\uFF1A1610 \u5E74 1 \u6708 7 \u65E5\u3002\u90A3\u662F\u4F3D\u5229\u7565\u7B2C\u4E00\u6B21\u770B\u89C1\u6728\u661F\u536B\u661F\u7684\u591C\u665A\u3002\u662F\u8C01\u628A\u5B83\u5E26\u5230\u8FD9\u91CC\u7684\uFF1F"}],kepler:[{id:"monolith",name:"\u6676\u4F53\u65B9\u7891",model:"monolith",who:"\u6863\u6848 \xB7 \u672A\u77E5",text:"\u8FD9\u4E0D\u662F\u4EBA\u7C7B\u9020\u7684\u3002\u65B9\u7891\u8868\u9762\u7684\u7EB9\u8DEF\u5728\u4F60\u9760\u8FD1\u65F6\u4E00\u5708\u5708\u4EAE\u8D77\uFF0C\u50CF\u662F\u5728\u8FA8\u8BA4\u4F60\u3002\u5B83\u7684\u5E74\u9F84\u5927\u7EA6\u662F\u56DB\u5343\u4E07\u5E74\u3002"},{id:"pathfinder",name:"\u65B9\u821F\u63A2\u8DEF\u5668",model:"probe",who:"\u6863\u6848 \xB7 \u63A2\u8DEF\u8005",text:"\u4E09\u767E\u5E74\u524D\u5148\u884C\u51FA\u53D1\u7684\u65E0\u4EBA\u63A2\u8DEF\u5668\u3002\u5B83\u7684\u6700\u540E\u4E00\u6761\u65E5\u5FD7\u5199\u7740\uFF1A\u300C\u5DF2\u627E\u5230\u9002\u5B9C\u7740\u9646\u70B9\u3002\u6211\u4F1A\u5728\u8FD9\u91CC\u7B49\u4F60\u4EEC\u3002\u300D\u5B83\u7B49\u4E86\u4E00\u767E\u4E00\u5341\u4E8C\u5E74\u3002"},{id:"fossil",name:"\u5DE8\u578B\u5316\u77F3",model:"fossil",who:"\u6863\u6848 \xB7 \u5316\u77F3",text:"\u4E00\u526F\u5DE8\u5927\u7684\u9AA8\u67B6\uFF0C\u5F27\u5F62\u7684\u808B\u9AA8\u50CF\u62F1\u95E8\u4E00\u6837\u7ACB\u5728\u5730\u4E0A\u3002\u751F\u524D\uFF0C\u5B83\u53EF\u80FD\u50CF\u90A3\u4E9B\u53D1\u5149\u7684\u6C34\u6BCD\u4E00\u6837\uFF0C\u6F02\u6D6E\u5728\u8FD9\u7247\u5929\u7A7A\u91CC\u3002"}]},Mo=[],ki=new ve({color:8022620,roughness:.9,metalness:.3}),w0=new ve({color:13148240,roughness:.4,metalness:.8}),S0=new ve({color:15260872,roughness:.8,flatShading:!0}),yT=new ve({color:1314844,roughness:.15,metalness:.9,emissive:6308095,emissiveIntensity:.15});function Ot(n,e,t,i,s,r,o=0,a=0,l=0){let c=new Q(n,e);return c.position.set(t,i,s),c.rotation.set(o,a,l),c.castShadow=!0,c.receiveShadow=!0,r.add(c),c}var MT={rover(n){Ot(new Ke(1.6,.5,2.2),ki,0,.9,0,n,0,0,.08);for(let e of[-1,1])Ot(new Ke(1.4,.05,1.6),y.solar,e*1.4,1.1,0,n,0,0,e*.25);Ot(new Fe(.05,.05,1.2,6),ki,.4,1.7,-.7,n),Ot(new Ke(.3,.2,.25),ki,.4,2.35,-.7,n,0,0,.3);for(let e of[-.9,0,.9])for(let t of[-1,1])Ot(new Fe(.28,.28,.22,10),y.dark,t*.95,.3,e,n,0,0,Math.PI/2)},rover2(n){Ot(new Ke(1.4,.45,1.8),ki,0,.5,0,n,.25,.4,.4),Ot(new Ke(1.2,.05,1.1),y.solar,.9,.35,.3,n,.1,0,-.6),Ot(new Fe(.28,.28,.22,10),y.dark,-1.2,.25,.8,n,.4,0,1.2)},lander(n){Ot(new Fe(1,1.1,.6,6),w0,0,1,0,n);for(let e=0;e<3;e++){let t=e*Math.PI*2/3;Ot(new Fe(.06,.06,1.4,5),ki,Math.cos(t)*1.1,.5,Math.sin(t)*1.1,n,Math.sin(t)*.4,0,-Math.cos(t)*.4)}Ot(new Fe(.6,.6,.05,16),y.white,0,1.6,.3,n,.6,0,0),Ot(new Ke(.2,.9,.2),ki,-.5,1.7,-.3,n)},heli(n){Ot(new Ke(.25,.2,.25),w0,0,.45,0,n),Ot(new Fe(.02,.02,.5,4),ki,0,.75,0,n),Ot(new Ke(1.2,.02,.08),ki,0,.9,0,n,0,.5,0),Ot(new Ke(1.2,.02,.08),ki,0,.98,0,n,0,-.4,0);for(let e=0;e<4;e++){let t=e*Math.PI/2+.6;Ot(new Fe(.015,.015,.5,4),ki,Math.cos(t)*.2,.2,Math.sin(t)*.2,n,Math.sin(t)*.5,0,-Math.cos(t)*.5)}n.scale.setScalar(2.2)},drill(n){Ot(new Fe(.5,.7,1.4,8),ki,0,.7,0,n),Ot(new Fe(.15,.15,4,8),y.metal,0,2.6,0,n,.15,0,0);for(let e=0;e<3;e++){let t=e*Math.PI*2/3;Ot(new Ke(.15,3,.15),ki,Math.cos(t)*.9,1.4,Math.sin(t)*.9,n,Math.sin(t)*.25,0,-Math.cos(t)*.25)}},probe(n){Ot(new Be(.8,12,8),y.white,0,.9,0,n),Ot(new Le(.85,.08,6,20),y.orange,0,.9,0,n,Math.PI/2,0,0),Ot(new Fe(.03,.03,1.6,4),y.metal,0,2.2,0,n),Ot(new Wt(.5,.3,12,1,!0),y.white,0,3,0,n,Math.PI,0,0)},plate(n){Ot(new Ke(1.2,.8,.06),w0,0,.5,0,n,-.5,0,.1),Ot(new Ti(.9,0),new ve({color:13627135,transparent:!0,opacity:.6,roughness:.05}),0,.4,0,n)},monolith(n){Ot(new Ke(1.4,7,.5),yT,0,3.5,0,n,0,0,.04),n.userData.rings=[];for(let e=0;e<3;e++){let t=Ot(new Le(1.4+e*.4,.04,6,32),new ke({color:9075455,transparent:!0,opacity:.6}),0,2+e*1.6,0,n,Math.PI/2,0,0);n.userData.rings.push(t)}},fossil(n){for(let e=0;e<9;e++){let t=Ot(new Le(3-Math.abs(e-4)*.35,.18,6,16,Math.PI),S0,0,0,-6+e*1.5,n);t.rotation.y=0}Ot(new Fe(.25,.15,14,6),S0,0,3,0,n,Math.PI/2,0,0),Ot(new Ti(1.4,0),S0,0,2.6,-8,n)}};function S1(){let n=ui(ot.length*977+5),e=xT[ot]||[];e.forEach((t,i)=>{let s=0,r=0;for(let l=0;l<200;l++){let c=i/e.length*Math.PI*2+n()*1.2,d=160+n()*220;if(s=Math.cos(c)*d,r=Math.sin(c)*d,Math.abs(s)<Ge-180&&Math.abs(r)<Ge-180&&oo(s,r,3)<.35&&!h.colliders.overlaps(s,r,6))break}let o=new ce;MT[t.model](o),o.position.set(s,ue(s,r)-.15,r),o.rotation.y=n()*6.28;let a=ge(16765578,3,h.scene,s,ue(s,r)+4,r);h.scene.add(o),h.colliders.add({x:s,z:r,r:t.model==="fossil"?3:1.4,kind:"relic"}),Mo.push({...t,x:s,z:r,g:o,beacon:a,found:(h.relicsFound||[]).includes(t.id)})})}function _1(n){let e=null,t=1e9;for(let i of Mo){if(i.found)continue;let s=Math.hypot(i.x-n.x,i.z-n.z);s<t&&(t=s,e=i)}return e?{r:e,d:t}:null}function T1(n){return Mo.find(e=>!e.found&&Math.hypot(e.x-n.x,e.z-n.z)<6)}function bs(){return{found:Mo.filter(n=>n.found).length,total:Mo.length}}function _0(){return Mo}function A1(n){n.found=!0,h.relicsFound=[...new Set([...h.relicsFound||[],n.id])],Lt(n.who,n.text),h.res.titanium+=8,h.res.silicon+=15,h.events.emit("pickup",{type:"titanium",n:8,note:n.name}),h.events.emit("toast",`\u2713 \u53D1\u73B0\u9057\u8FF9\uFF1A${n.name}`),X.play("objective"),le.burst(new S(n.x,ue(n.x,n.z)+2,n.z),[1,.85,.5],60,8)}function R1(n){let e=performance.now()*.001;for(let t of Mo)t.beacon.visible=!t.found,t.beacon.material.opacity=.5+Math.sin(e*2+t.x)*.3,t.g.userData.rings&&t.g.userData.rings.forEach((i,s)=>{i.rotation.z=e*(.3+s*.2),i.material.opacity=(t.found?.8:.3)+Math.sin(e*2+s)*.2})}var Md=[],P0=new Wt(1,1,8,1,!0);P0.rotateX(Math.PI);P0.translate(0,-.5,0);var ET=new S(0,1,0),R0=0,T0=0,Ed=0,C0=0,C1=-1;function bT(){R0=45,C0=0,Ed=6,Lt("\u65B9\u821F \xB7 AI","\u770B\u5929\u4E0A\u2014\u2014\u6D41\u661F\u96E8\uFF01\u6709\u51E0\u9897\u4F1A\u843D\u5230\u9644\u8FD1\u3002\u9668\u77F3\u91CC\u5BCC\u542B\u949B\uFF0C\u53BB\u5760\u843D\u70B9\u770B\u770B\u3002"),h.events.emit("toast","\u2604 \u6D41\u661F\u96E8")}function P1(n){let e=h.player.pos,t;if(n){for(let d=0;d<20;d++){let u=Math.random()*Math.PI*2,f=40+Math.random()*110,p=Tt.clamp(e.x+Math.cos(u)*f,-Ge+180,Ge-180),g=Tt.clamp(e.z+Math.sin(u)*f,-Ge+180,Ge-180);if(!h.buildings.some(x=>Math.hypot(x.x-p,x.z-g)<x.def.r+14)){t=new S(p,ue(p,g),g);break}}if(!t)return}else{let d=Math.random()*Math.PI*2,u=150+Math.random()*350;t=new S(e.x+Math.cos(d)*u,e.y+110+Math.random()*140,e.z+Math.sin(d)*u)}let i=new S((Math.random()-.5)*1.2,-.55-Math.random()*.3,(Math.random()-.5)*1.2).normalize(),s=n?520:420,r=t.clone().addScaledVector(i,-s),o=ge(n?16756848:16769216,n?18:10,h.scene);o.material.fog=!1,o.position.copy(r);let a=new Q(P0,new ke({color:n?16751184:16767144,transparent:!0,opacity:.75,blending:He,depthWrite:!1,fog:!1})),l=n?90:70+Math.random()*70,c=n?2.2:1.3;a.scale.set(c,l,c),a.quaternion.setFromUnitVectors(ET,i),a.position.copy(r),h.scene.add(a),Md.push({pos:r,vel:i.multiplyScalar(n?150:220),head:o,tail:a,impact:n,target:t,life:s/(n?150:220)})}function I1(n){_T(n),h.time.night>.7&&C1!==h.time.day&&h.time.day>=2&&h.storm<.1&&!h.ended&&(C1=h.time.day,Math.random()<.4&&bT()),R0>0&&(R0-=n,T0-=n,Ed-=n,T0<=0&&(T0=.15+Math.random()*.35,P1(!1)),Ed<=0&&C0<4&&(Ed=7+Math.random()*5,C0++,P1(!0)));for(let t=Md.length-1;t>=0;t--){let i=Md[t];i.life-=n,i.pos.addScaledVector(i.vel,n),i.head.position.copy(i.pos),i.tail.position.copy(i.pos);for(let s=0;s<3;s++)le.trail(i.pos.clone().addScaledVector(i.vel,-n*s/3),i.impact?[1,.6,.3]:[1,.85,.6],i.impact?1.2:.7);i.life<=0&&(h.scene.remove(i.head),h.scene.remove(i.tail),i.tail.material.dispose(),Md.splice(t,1),i.impact&&wT(i.target))}}function wT(n){let e=n.clone();e.y+=1.5,le.burst(e,[1,.55,.2],120,22),vs(e,2.6,16747072),le.ring(n,2,90),le.dustPuff(e,40,8),X.play("rumble",n);let t=n.distanceTo(h.player.pos);if(t<80&&(h.player.landDip=Math.max(h.player.landDip,.4*(1-t/80))),!h.colliders.overlaps(n.x,n.z,2.5)){let i=Cr("titanium",n.x,n.z,10+Math.floor(Math.random()*8));i.meteor=!0}h.events.emit("toast",`\u2604 \u9668\u77F3\u5760\u843D\u5728 ${Math.round(t)} \u7C73\u5916`)}var js=[],A0=150;function ST(){return Gx()}function I0(n=!0){let e=h.player.pos,t=0,i=0;for(let a=0;a<30;a++){let l=Math.random()*Math.PI*2,c=50+Math.random()*130;if(t=Tt.clamp(e.x+Math.cos(l)*c,-Ge+180,Ge-180),i=Tt.clamp(e.z+Math.sin(l)*c,-Ge+180,Ge-180),!h.colliders.overlaps(t,i,4))break}let s=ST(),r=ue(t,i);s.g.position.set(t,r+320,i),h.scene.add(s.g);let o={...s,x:t,z:i,y:r,t:0,landed:!1,life:300};return js.push(o),X.play("rumble"),h.events.emit("toast",`\u5730\u7403\u8865\u7ED9\u8231\u6B63\u5728\u964D\u843D \xB7 ${Math.round(Math.hypot(t-e.x,i-e.z))} \u7C73\u5916`),o}function _T(n){h.buildings.length&&!h.ended&&h.time.night<.5&&(A0-=n,A0<=0&&(A0=240+Math.random()*180,I0()));let e=performance.now()*.001;for(let t=js.length-1;t>=0;t--){let i=js[t];if(i.landed)i.life-=n,i.beacon.material.opacity=.55+Math.sin(e*4)*.4,i.life<=0&&(h.scene.remove(i.g),js.splice(t,1));else{i.t+=n;let s=Math.min(1,i.t/8),r=1-Math.pow(1-s,2.4);i.g.position.y=i.y+320*(1-r),i.flame.scale.y=.6+(1-r)+Math.random()*.2;for(let o=0;o<2;o++)le.flame(i.g.position);s>=1&&(i.landed=!0,i.flame.visible=!1,le.ring(new S(i.x,i.y,i.z),2,70),X.play("land"))}}}function L1(n){return js.find(e=>e.landed&&Math.hypot(e.x-n.x,e.z-n.z)<3.5)}function D1(n){let e=null,t=1e9;for(let i of js){let s=Math.hypot(i.x-n.x,i.z-n.z);s<t&&(t=s,e=i)}return e?{p:e,d:t}:null}function L0(){return js}function U1(n){let e=1+(h.cityLevel||0)*.4,t={iron:Math.round((20+Math.random()*20)*e),silicon:Math.round((15+Math.random()*15)*e),ice:Math.round((10+Math.random()*15)*e)};Math.random()<.6&&(t.titanium=Math.round((3+Math.random()*5)*e));for(let r in t)h.res[r]+=t[r],h.events.emit("pickup",{type:r,n:t[r],note:"\u8865\u7ED9\u8231"});let i=Math.round(10*e);h.rp=(h.rp||0)+i,h.stats.pods=(h.stats.pods||0)+1;let s=["\u5305\u88F9\u91CC\u5939\u7740\u4E00\u5F20\u5B69\u5B50\u753B\u7684\u753B\uFF1A\u4E00\u5EA7\u7EA2\u8272\u661F\u7403\uFF0C\u4E0A\u9762\u6709\u5F88\u591A\u5C0F\u623F\u5B50\u3002","\u9644\u8A00\uFF1A\u300C\u5730\u7403\u8FD9\u8FB9\u4E00\u5207\u90FD\u597D\u3002\u7167\u987E\u597D\u81EA\u5DF1\u3002\u300D","\u7BB1\u5B50\u5E95\u90E8\u6709\u4E00\u5305\u79CD\u5B50\uFF0C\u6807\u7B7E\u4E0A\u5199\u7740\uFF1A\u5411\u65E5\u8475\u3002","\u4E00\u5C01\u624B\u5199\u4FE1\uFF1A\u300C\u6211\u513F\u5B50\u5728\u4F60\u4EEC\u7684\u6B96\u6C11\u5730\u3002\u8BF7\u66FF\u6211\u544A\u8BC9\u4ED6\uFF0C\u5988\u5988\u4E3A\u4ED6\u9A84\u50B2\u3002\u300D","\u8865\u7ED9\u6E05\u5355\u6700\u540E\u4E00\u884C\uFF1A\u300C\u5DE7\u514B\u529B \xD72\u2014\u2014\u7ED9\u7B2C\u4E00\u4E2A\u62C6\u7BB1\u7684\u4EBA\u3002\u300D"];Lt("\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u8865\u7ED9",s[Math.floor(Math.random()*s.length)]+` \u9644\u5E26\u79D1\u7814\u6570\u636E ${i} \u70B9\u3002`),X.play("craft"),le.burst(new S(n.x,n.y+1.5,n.z),[.5,1,.7],50,6),h.scene.remove(n.g),js.splice(js.indexOf(n),1)}var pe=n=>document.getElementById(n),Td,z0,we,Eo={},k0={mars:"MARS",europa:"EUROPA",kepler:"KEPLER-442b"},TT=["I","II","III","IV","V","VI"];function X1(n){Td=n,document.body.insertAdjacentHTML("afterbegin",b1()),z0=pe("minimap"),we=z0.getContext("2d"),pe("pl-cn").textContent=fe.name,pe("kick-planet").textContent=k0[ot],pe("hotbar").innerHTML=Hr.map((t,i)=>`<div class="slot" data-i="${i}"><span class="key">${i+1}</span><span class="ic">${ft(t.icon)}</span><span class="nm">${t.name}</span></div>`).join("")+`<div class="slot gad hidden" id="gad-g"><span class="key">G</span><span class="ic">${ft("bomb")}</span><span class="nm">\u9707\u8361\u96F7</span><i class="cdf"></i></div>`,pe("res").innerHTML=Object.entries(rn).map(([t,i])=>`<div class="r" id="r-${t}" style="--rc:${i.color}"><span class="ic">${ft(t)}</span><span class="tx"><small>${i.name}</small><b>0</b></span></div>`).join(""),h.events.on("toast",t=>Qt(t)),h.events.on("pickup",t=>RT(t));let e=0;h.events.on("enemyHit",t=>{let i=performance.now();if(!t.kill&&i-e<90)return;e=i;let s=pe("hitmark");s.classList.toggle("kill",!!t.kill),s.animate([{opacity:1,transform:`translate(-50%,-50%) scale(${t.kill?1.5:1.25})`},{opacity:1,transform:"translate(-50%,-50%) scale(1)",offset:.25},{opacity:0,transform:"translate(-50%,-50%) scale(1)"}],{duration:t.kill?520:260,easing:"ease-out"}),t.kill||X.tone(2400,.03,"square",.015)}),h.events.on("hurt",()=>{let t=h.player;if(!t||t.lastHitDir===void 0)return;let i=t.lastHitDir-t.yaw-Math.PI,s=document.createElement("div");s.className="dd",s.style.transform=`rotate(${-i}rad)`,pe("dmgdir").appendChild(s),s.animate([{opacity:0},{opacity:1,offset:.1},{opacity:0}],{duration:1300,easing:"ease-out"}).onfinish=()=>s.remove()}),h.events.on("hurt",t=>{document.body.classList.remove("glitch"),document.body.offsetWidth,document.body.classList.add("glitch"),clearTimeout(h._gl),h._gl=setTimeout(()=>document.body.classList.remove("glitch"),320)}),document.querySelectorAll("[data-close]").forEach(t=>t.addEventListener("click",()=>{X.play("ui"),jn(!0)})),document.querySelectorAll(".menu button, .bp-tabs button").forEach(t=>t.addEventListener("mouseenter",()=>X.play("tick")))}var H1={"\u2713":["check","good"],"\u26A0":["warn","warn"],"\u{1F527}":["wrench",""],"\u2600":["sun",""],"\u2604":["meteor",""],"\u{1F680}":["ship",""]};function Qt(n,e="radio",t=""){let i=[...n][0];if(H1[i]&&([e,t]=H1[i],n=n.slice(i.length).trim()),t==="warn"||e==="boss")return AT(n,e,t);let s=pe("log"),r=[...s.children].find(a=>a.dataset.t===n&&!a.classList.contains("out"));if(r){let a=(+r.dataset.n||1)+1;r.dataset.n=a,r.querySelector("em").textContent="\xD7"+a,clearTimeout(r._to),r._to=setTimeout(()=>O0(r),5e3);return}let o=document.createElement("div");for(o.className="ev "+t,o.dataset.t=n,o.innerHTML=`${ft(e)}<span>${n}</span><em></em>`,s.appendChild(o);s.children.length>3;)s.firstChild.remove();o._to=setTimeout(()=>O0(o),5e3)}function O0(n){n.classList.add("out"),setTimeout(()=>n.remove(),600)}var N1,z1=0,k1=0;function AT(n,e,t){let i=e==="boss"?2:1,s=performance.now();if(i<z1&&s<k1){let o=pe("log"),a=document.createElement("div");for(a.className="ev warn",a.innerHTML=`${ft(e==="radio"?"warn":e)}<span>${n}</span><em></em>`,o.appendChild(a);o.children.length>3;)o.firstChild.remove();setTimeout(()=>O0(a),5e3);return}z1=i,k1=s+4500;let r=pe("alert");r.className="show "+(t==="good"?"good":""),r.innerHTML=`${ft(e==="radio"?"warn":e)}<span>${n}</span>`,X.play("alarm"),clearTimeout(N1),N1=setTimeout(()=>{r.className=""},4500)}var D0={};function RT({type:n,n:e,note:t}){X.play("pickup");let i=D0[n];i&&i.el.isConnected?(i.n+=e,clearTimeout(i.to)):(i=D0[n]={n:e,el:document.createElement("div")},i.el.className="feed",pe("feed").appendChild(i.el));let s=rn[n];i.el.style.setProperty("--rc",s.color),i.el.innerHTML=`<span class="nm">${t||s.name}</span>${ft(n)}<span class="q">+${i.n}</span>`,i.el.classList.remove("out"),i.to=setTimeout(()=>{i.el.classList.add("out"),setTimeout(()=>{i.el.remove(),delete D0[n]},500)},1800);let r=pe("r-"+n);r.classList.remove("flash"),r.offsetWidth,r.classList.add("flash")}var bd=[],U0=!1;function bo(n){if(U0){bd.length=0,bd.push(n);return}U0=!0,setTimeout(()=>{U0=!1,bd.length&&bo(bd.shift())},5200);let e=pe("chapter"),t=zi.indexOf(n),i=n.k||(t>=0?`CHAPTER ${String(t+1).padStart(2,"0")}`:""),s=n.title.replace(/^第.章 · |^终章 · /,"");e.innerHTML=`<div class="k">${i}</div><div class="t">${s}</div><div class="ln"></div><div class="s">${n.sub}</div>`,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}var CT=["build","craft","pause","starmap","archive","research","trade","mapscr"],O1=null;function PT(n){let e=pe(n);e.classList.remove("closing"),e.classList.add("opening"),setTimeout(()=>e.classList.remove("opening"),700),e.querySelectorAll(".bp-grid, .people, .achv, .kv, #starmap-list, .opts").forEach(t=>{t.classList.remove("stagger"),t.offsetWidth,t.classList.add("stagger"),[...t.children].forEach((i,s)=>i.style.setProperty("--i",Math.min(s,18))),setTimeout(()=>t.classList.remove("stagger"),1400)})}function Ad(n){n&&(n.classList.remove("swap"),n.offsetWidth,n.classList.add("swap"))}function Ss(n){jn(!1,!0),h.menuOpen=n,pe(n).classList.remove("hidden"),document.body.classList.add("menu-open");for(let e in zr)delete zr[e];if(document.pointerLockElement&&document.exitPointerLock(),X.play("open"),n==="build"){if(!Eo.solar)try{Eo=w1(n0.filter(e=>!Ms(e).hide))}catch{Eo={}}B0()}n==="craft"&&q0(),n==="research"&&_d(),n==="trade"&&uc(),n==="mapscr"&&V0(),n==="archive"&&(pe("archive-body").innerHTML=Y0()),n==="pause"&&(pe("pause-pane").innerHTML=""),PT(n)}function jn(n,e=!1){clearTimeout(O1);let t=CT.filter(s=>!pe(s).classList.contains("hidden"));e||!t.length?t.forEach(s=>{pe(s).classList.add("hidden"),pe(s).classList.remove("closing")}):(X.play("close"),t.forEach(s=>pe(s).classList.add("closing")),O1=setTimeout(()=>t.forEach(s=>{pe(s).classList.add("hidden"),pe(s).classList.remove("closing")}),260)),e||document.body.classList.remove("menu-open");let i=h.menuOpen;h.menuOpen=!1,i==="build"&&!It.type&&(un.index=0),n&&h.requestLock()}function W0(n){pe("pause-pane").innerHTML=n,Ad(pe("pause-pane"));let e=pe("pause-pane").querySelector(".achv, .kv, .people");e&&(e.classList.add("stagger"),[...e.children].forEach((t,i)=>t.style.setProperty("--i",Math.min(i,18))))}var F0={all:"\u5168\u90E8",life:"\u751F\u5B58",city:"\u57CE\u5E02",industry:"\u5DE5\u4E1A",defense:"\u9632\u5FA1",stellar:"\u661F\u9645"},wd="all",ws=null;function q1(n){pe(n).innerHTML=Object.entries(rn).map(([e,t])=>`<span style="--rc:${t.color}">${ft(e)}${h.res[e]}</span>`).join("")}function Y1(n){return`<div class="need">${Object.entries(n).map(([e,t])=>`<div class="row ${h.res[e]>=t?"":"lack"}" style="--rc:${rn[e].color}">${ft(e)}<span class="nm">${rn[e].name}</span>${Math.floor(h.res[e])} / ${t}</div>`).join("")}</div>`}function B0(){q1("bp-res");let n=n0.filter(i=>!Ms(i).hide),e=["all",...Object.keys(F0).filter(i=>i!=="all"&&n.some(s=>Yn[s].cat===i))];pe("bp-tabs").innerHTML=e.map(i=>`<button data-c="${i}" class="${i===wd?"on":""}">${F0[i]}</button>`).join(""),pe("bp-tabs").querySelectorAll("button").forEach(i=>i.addEventListener("click",()=>{wd=i.dataset.c,X.play("tick"),B0()}));let t=n.filter(i=>wd==="all"||Yn[i].cat===wd);(!ws||!t.includes(ws))&&(ws=t.find(i=>Ms(i).ok)||t[0]),pe("build-list").innerHTML=t.map(i=>{let s=Yn[i],r=Ms(i),o=Ki(s.cost);return`<div class="tile ${r.ok?"":"locked"} ${o?"":"poor"} ${i===ws?"sel":""}" data-k="${i}">
      <div class="th">${Eo[i]?`<img src="${Eo[i]}" alt="">`:ft(s.icon)}</div>
      ${r.ok?"":`<div class="lk">${ft("lock")}</div>`}
      <div class="nm">${s.name}</div><div class="cs">${r.ok?pa(s.cost):""}</div></div>`}).join(""),pe("build-list").querySelectorAll(".tile").forEach(i=>{i.addEventListener("click",()=>{ws=i.dataset.k,X.play("tick"),B0()}),i.addEventListener("dblclick",()=>X0(i.dataset.k))}),LT()}function IT(n){let e=Yn[n],t=Ms(n);return ot==="mars"&&e.chapter>h.chapter?`\u5728\u300C${zi[e.chapter].title}\u300D\u89E3\u9501`:t.why}function LT(){let n=ws;if(!n){pe("bp-detail").innerHTML="";return}let e=Yn[n],t=Ms(n),i=Ki(e.cost),s=[];e.power&&s.push(["\u7535\u529B",`${e.power>0?"+":""}${e.power}`,e.power>0?"pos":"neg"]),e.housing&&s.push(["\u4F4F\u623F",`${e.housing} \u4EBA`]),e.o2&&s.push(["\u4F9B\u6C27",`${e.o2} \u4EBA`]),e.food&&s.push(["\u98DF\u7269",`${e.food} \u4EBA`]),e.water&&s.push(["\u7528\u6C34",`${e.water} \u4EBA`]),e.life&&s.push(["\u8865\u6C27\u534A\u5F84",`${e.life} m`]),e.range&&s.push(["\u5C04\u7A0B",`${e.range} m`]),s.push(["\u8010\u4E45",e.hp]),pe("bp-detail").innerHTML=`<div class="pv">${Eo[n]?`<img src="${Eo[n]}" alt="">`:ft(e.icon)}</div>
    <div class="cat">${F0[e.cat]||""} \xB7 BLUEPRINT</div><h3>${e.name}</h3>
    <div class="ds">${e.desc}</div>
    <div class="stats">${s.map(r=>`<div><small>${r[0]}</small><b class="${r[2]||""}">${r[1]}</b></div>`).join("")}</div>
    ${t.ok?Y1(e.cost):`<div class="why">${ft("lock")} ${IT(n)}</div>`}
    <button class="go" ${t.ok?"":"disabled"}>${t.ok?i?"\u5F00\u59CB\u5EFA\u9020":"\u653E\u7F6E\u84DD\u56FE\uFF08\u8D44\u6E90\u4E0D\u8DB3\uFF09":"\u5C1A\u672A\u89E3\u9501"}</button>`,pe("bp-detail").querySelector(".go").addEventListener("click",()=>X0(n)),zr["bp-detail"]!==ws&&(zr["bp-detail"]=ws,Ad(pe("bp-detail")))}function X0(n){let e=Yn[n];if(!Ms(n).ok){X.play("deny");return}X.play("ui"),It.rot=0,uo(n),un.index=2,jn(!0),Ki(e.cost)||Qt("\u8D44\u6E90\u4E0D\u8DB3\uFF0C\u653E\u7F6E\u524D\u5148\u53BB\u91C7\u96C6\u5427","warn","warn")}function j1(n){h.menuOpen==="build"&&n.code==="Enter"&&ws&&X0(ws),h.menuOpen==="craft"&&n.code==="Enter"&&Oi&&G0(Oi)}var Oi=null;function q0(){q1("cr-res");let n=Object.keys(Ua);Oi||(Oi=n.find(s=>!h.upgrades[s])||n[0]),pe("craft-list").innerHTML=n.map(s=>{let r=Ua[s],o=h.upgrades[s],a=Ki(r.cost),l=r.need&&!h.upgrades[r.need];return`<div class="tile ${o?"done":""} ${a&&!l?"":"poor"} ${s===Oi?"sel":""}" data-k="${s}">
      ${o?'<span class="tag">\u5DF2\u88C5\u5907</span>':""}
      <div class="th">${ft(r.icon)}</div><div class="nm">${r.name}</div><div class="cs">${o?"":pa(r.cost)}</div></div>`}).join(""),pe("craft-list").querySelectorAll(".tile").forEach(s=>{s.addEventListener("click",()=>{Oi=s.dataset.k,X.play("tick"),q0()}),s.addEventListener("dblclick",()=>G0(s.dataset.k))});let e=Ua[Oi],t=h.upgrades[Oi],i=e.need&&!h.upgrades[e.need];pe("craft-detail").innerHTML=`<div class="pv">${ft(e.icon)}</div><div class="cat">EQUIPMENT</div><h3>${e.name}</h3>
    <div class="ds">${e.desc}</div>
    ${t?'<div class="why okc">\u5DF2\u5236\u9020\u5E76\u88C5\u5907</div>':i?`<div class="why">${ft("lock")} \u9700\u8981\u5148\u5236\u9020\u7B49\u79BB\u5B50\u6B65\u67AA</div>`:Y1(e.cost)}
    <button class="go" ${t||i||!Ki(e.cost)?"disabled":""}>${t?"\u5DF2\u88C5\u5907":Ki(e.cost)?"\u5236\u9020":"\u8D44\u6E90\u4E0D\u8DB3"}</button>`,pe("craft-detail").querySelector(".go").addEventListener("click",()=>G0(Oi)),zr["craft-detail"]!==Oi&&(zr["craft-detail"]=Oi,Ad(pe("craft-detail")))}function G0(n){let e=Ua[n];if(h.upgrades[n]||e.need&&!h.upgrades[e.need]||!Ki(e.cost)){X.play("deny");return}Dl(e.cost),h.upgrades[n]=!0,h.stats.crafted[n]=!0,X.play("craft"),Qt(`\u5236\u9020\u5B8C\u6210\uFF1A${e.name}`,e.icon,"good"),n==="tank"&&(h.player.o2=180),n==="rifle"&&(un.index=1),h.events.emit("crafted",n),Oi=Object.keys(Ua).find(t=>!h.upgrades[t])||n,q0()}var Wa={unlocked:()=>!0,relicLeft:()=>!1,relicFound:()=>0},es=null;function _d(){pe("rs-res").innerHTML=`<span style="--rc:var(--cyan)">${ft("book")}${Math.floor(h.rp||0)} \u79D1\u7814\u70B9</span><span style="--rc:var(--dim)"><small>+${id().toFixed(2)}/\u79D2</small></span>`;let n=Object.keys(Ca);es||(es=n.find(r=>!Xt(r))||n[0]),pe("research-list").innerHTML=n.map(r=>{let o=Ca[r],a=Xt(r),l=(h.rp||0)>=o.cost;return`<div class="tile ${a?"done":""} ${l||a?"":"poor"} ${r===es?"sel":""}" data-k="${r}">${a?'<span class="tag">\u5DF2\u5B8C\u6210</span>':""}
      <div class="th">${ft(o.icon)}</div><div class="nm">${o.name}</div><div class="cs"><span class="cost ${l?"":"lack"}" style="--rc:var(--cyan)">${ft("book")}${o.cost}</span> <small>${o.cat}</small></div></div>`}).join(""),pe("research-list").querySelectorAll(".tile").forEach(r=>{r.addEventListener("click",()=>{es=r.dataset.k,X.play("tick"),_d()}),r.addEventListener("dblclick",()=>{Zp(r.dataset.k)&&_d()})});let e=Ca[es],t=Xt(es),i=(h.rp||0)>=e.cost,s=h.buildings.some(r=>r.type==="lab");pe("research-detail").innerHTML=`<div class="pv">${ft(e.icon)}</div><div class="cat">${e.cat} \xB7 TECHNOLOGY</div><h3>${e.name}</h3>
    <div class="ds">${e.desc}</div>
    ${s?"":'<div class="why">\u5EFA\u9020\u7814\u7A76\u6240\u6765\u4EA7\u51FA\u79D1\u7814\u70B9\u6570</div>'}
    <div class="need"><div class="row ${i||t?"":"lack"}" style="--rc:var(--cyan)">${ft("book")}<span class="nm">\u79D1\u7814\u70B9\u6570</span>${Math.floor(h.rp||0)} / ${e.cost}</div></div>
    <button class="go" ${t||!i?"disabled":""}>${t?"\u5DF2\u5B8C\u6210":i?"\u5F00\u59CB\u7814\u7A76":"\u79D1\u7814\u70B9\u6570\u4E0D\u8DB3"}</button>`,pe("research-detail").querySelector(".go").addEventListener("click",()=>{Zp(es)&&(es=Object.keys(Ca).find(r=>!Xt(r))||es,_d())}),zr["research-detail"]!==es&&(zr["research-detail"]=es,Ad(pe("research-detail")))}var Sn={x:0,y:0,s:80,a:0,id:null,t:0},Sd=new S;function DT(n){let e=pe("lock"),t=h.aimTarget;if(t&&(Sd.set(t.x,t.y,t.z).project(h.camera),Sd.z<1)){let i=innerWidth,s=innerHeight,r=(Sd.x*.5+.5)*i,o=(-Sd.y*.5+.5)*s,a=Math.max(46,Math.min(260,t.r/Math.max(1,t.dist)*s*.9));Sn.id!==t.id&&(Sn.id=t.id,Sn.x=r,Sn.y=o,Sn.s=a*2.6,Sn.t=0,X.play("tick"),e.querySelector(".lk-info").animate([{opacity:0,transform:"translateX(-10px)",clipPath:"inset(0 100% 0 0)"},{opacity:1,transform:"none",clipPath:"inset(0 0 0 0)"}],{duration:420,easing:"cubic-bezier(.2,.8,.2,1)",delay:80,fill:"backwards"}),e.querySelectorAll(".c").forEach(d=>d.animate([{opacity:0},{opacity:1,offset:.3},{opacity:.25,offset:.45},{opacity:1}],{duration:420})));let l=Math.min(1,n*14);Sn.x+=(r-Sn.x)*l,Sn.y+=(o-Sn.y)*l,Sn.s+=(a-Sn.s)*Math.min(1,n*9),Sn.t+=n,e.style.transform=`translate(${Sn.x-Sn.s/2}px, ${Sn.y-Sn.s/2}px)`,e.style.width=e.style.height=Sn.s+"px";let c="on "+t.kind;e.className!==c&&(e.className=c),e.style.setProperty("--lc",t.kind==="enemy"?"var(--red)":t.color||"var(--amber)"),e.querySelector(".lk-tag").textContent=t.tag,e.querySelector(".lk-name").textContent=t.name,e.querySelector(".lk-dist").textContent=t.dist.toFixed(1)+" M",e.querySelector(".lk-bar i").style.width=t.bar*100+"%";return}Sn.id=null,e.classList.remove("on")}var F1=!1;function V0(){let n=pe("bigmap"),e=n.getContext("2d"),t=n.width,i=h.player,s=t/cn,r=d=>(d+cn/2)*s,o=d=>(d+cn/2)*s;pe("map-title").textContent=`${fe.name} \xB7 ${fe.place}`,e.clearRect(0,0,t,t),e.globalAlpha=.9,e.drawImage(Td,0,0,t,t),e.globalAlpha=1,e.strokeStyle="rgba(142,231,255,.08)",e.lineWidth=1;for(let d=0;d<=t;d+=t/14)e.beginPath(),e.moveTo(d,0),e.lineTo(d,t),e.stroke(),e.beginPath(),e.moveTo(0,d),e.lineTo(t,d),e.stroke();e.strokeStyle="rgba(142,231,255,.7)",e.setLineDash([6,6]),e.lineWidth=1.5,e.beginPath(),e.arc(r(mi.x),o(mi.z),qn[h.cityLevel].r*s,0,Math.PI*2),e.stroke(),e.setLineDash([]);let a=(d,u,f,p)=>{e.fillStyle=p,e.beginPath(),e.moveTo(r(d),o(u)-f),e.lineTo(r(d)+f,o(u)),e.lineTo(r(d),o(u)+f),e.lineTo(r(d)-f,o(u)),e.fill()};for(let d of h.nodes)a(d.x,d.z,d.type==="titanium"?3.5:2.2,rn[d.type].color);for(let d of h.buildings){let u=Math.max(2.5,d.def.r*s);e.fillStyle=d.broken?"#ff5a45":"#f3efe8",e.fillRect(r(d.x)-u,o(d.z)-u,u*2,u*2)}for(let d of h.enemies)e.fillStyle="#ff5a45",e.beginPath(),e.arc(r(d.pos.x),o(d.pos.z),d.boss?6:2.5,0,7),e.fill();for(let d of _0())e.strokeStyle=d.found?"rgba(255,210,138,.4)":"#ffd28a",e.lineWidth=2,e.beginPath(),e.arc(r(d.x),o(d.z),6,0,7),e.stroke();for(let d of L0())e.fillStyle="#8bf0a9",e.beginPath(),e.arc(r(d.x),o(d.z),5,0,7),e.fill();if(e.fillStyle="#8bf0a9",e.fillRect(r(wt.x)-3,o(wt.z)-3,6,6),h.waypoint){let d=h.waypoint;e.strokeStyle="#ffb65c",e.lineWidth=2,e.beginPath(),e.arc(r(d.x),o(d.z),9,0,7),e.stroke(),e.beginPath(),e.moveTo(r(d.x),o(d.z)-14),e.lineTo(r(d.x),o(d.z)+14),e.moveTo(r(d.x)-14,o(d.z)),e.lineTo(r(d.x)+14,o(d.z)),e.stroke()}let l=Math.atan2(i.fwd.x,-i.fwd.z);e.save(),e.translate(r(i.pos.x),o(i.pos.z)),e.rotate(l),e.fillStyle="#fff",e.shadowColor="#8ee7ff",e.shadowBlur=10,e.beginPath(),e.moveTo(0,-10),e.lineTo(7,7),e.lineTo(0,3),e.lineTo(-7,7),e.closePath(),e.fill(),e.restore();let c=(d,u,f="dot")=>`<div class="lg"><i class="${f}" style="--c:${d}"></i>${u}</div>`;pe("map-legend").innerHTML=`<h4>\u56FE\u4F8B</h4>${c("#fff","\u4F60\u7684\u4F4D\u7F6E","arrow")}${c("#f3efe8","\u5EFA\u7B51","sq")}${Object.values(rn).map(d=>c(d.color,d.name,"dia")).join("")}${c("#ffd28a","\u9057\u8FF9","ring")}${c("#8bf0a9","\u8865\u7ED9\u8231 / \u7740\u9646\u8231")}${c("#ff5a45","\u9508\u8680\u86DB")}${c("#8ee7ff","\u6B96\u6C11\u5730\u9886\u5730","dash")}
    <h4>\u5BFC\u822A</h4><p>\u70B9\u51FB\u5730\u56FE\u4EFB\u610F\u4F4D\u7F6E\u8BBE\u7F6E\u5BFC\u822A\u70B9\uFF0C\u7F57\u76D8\u4F1A\u6307\u5411\u5B83\uFF0C\u5730\u9762\u4F1A\u51FA\u73B0\u5149\u67F1\u3002</p>${h.waypoint?'<button class="go small" id="wp-clear">\u6E05\u9664\u5BFC\u822A\u70B9</button>':""}`,pe("wp-clear")?.addEventListener("click",()=>{h.waypoint=null,X.play("tick"),V0()}),F1||(F1=!0,n.addEventListener("click",d=>{let u=n.getBoundingClientRect(),f=(d.clientX-u.left)/u.width*cn-cn/2,p=(d.clientY-u.top)/u.height*cn-cn/2;h.waypoint={x:f,z:p},X.play("ui"),V0()}))}var Nr="iron",Zs="silicon",Ba=10;function uc(){pe("tr-res").innerHTML=Object.entries(rn).map(([t,i])=>`<span style="--rc:${i.color}">${ft(t)}${Math.floor(h.res[t])}</span>`).join("");let n=t=>Object.entries(rn).map(([i,s])=>`<button class="rs ${i===t?"on":""}" data-k="${i}" style="--rc:${s.color}">${ft(i)}<span>${s.name}</span><b>${Math.floor(h.res[i])}</b></button>`).join(""),e=Kp(Nr,Zs,Ba);pe("trade-body").innerHTML=`<div class="tcol"><h4>\u4EA4\u51FA</h4><div class="rsl" id="tr-from">${n(Nr)}</div></div>
    <div class="tmid"><div class="amt">${[10,25,50,100].map(t=>`<button class="${t===Ba?"on":""}" data-n="${t}">${t}</button>`).join("")}</div>
      <div class="deal"><span style="--rc:${rn[Nr].color}">${ft(Nr)}${Ba}</span><i>\u2192</i><span style="--rc:${rn[Zs].color}">${ft(Zs)}${e}</span></div>
      <div class="note2">\u6C47\u7387\u6309\u5730\u7403\u5E02\u573A\u4EF7\u8BA1\u7B97\uFF0C\u542B 20% \u8FD0\u8F93\u635F\u8017</div>
      <button class="go" ${Nr===Zs||e<=0||h.res[Nr]<Ba?"disabled":""}>\u4EA4\u6613</button></div>
    <div class="tcol"><h4>\u6362\u53D6</h4><div class="rsl" id="tr-to">${n(Zs)}</div></div>`,pe("tr-from").querySelectorAll(".rs").forEach(t=>t.addEventListener("click",()=>{Nr=t.dataset.k,X.play("tick"),uc()})),pe("tr-to").querySelectorAll(".rs").forEach(t=>t.addEventListener("click",()=>{Zs=t.dataset.k,X.play("tick"),uc()})),pe("trade-body").querySelectorAll(".amt button").forEach(t=>t.addEventListener("click",()=>{Ba=+t.dataset.n,X.play("tick"),uc()})),pe("trade-body").querySelector(".go").addEventListener("click",()=>{let t=Mx(Nr,Zs,Ba);t&&Qt(`\u4EA4\u6613\u5B8C\u6210\uFF1A\u83B7\u5F97${rn[Zs].name} ${t}`,Zs,"good"),uc()})}function Y0(){let n=h.colony,e=h.stats,t=e.mined.iron+e.mined.silicon+e.mined.ice+e.mined.titanium,i=[["\u4EBA\u53E3",n.pop],["\u57CE\u5E02\u7B49\u7EA7",qn[h.cityLevel].name],["\u8BBE\u65BD",h.buildings.length],["\u706B\u661F\u65E5",h.time.day],["\u7535\u529B",`${Math.round(n.powerProd)} / ${n.powerUse}`],["\u9057\u8FF9",`${bs().found} / ${bs().total}`],["\u53EF\u5BB9\u7EB3",n.support],["\u91C7\u96C6\u8D44\u6E90",t],["\u51FB\u9000\u9508\u8680\u86DB",e.kills],["\u884C\u9A76\u91CC\u7A0B",`${((e.driven||0)/1e3).toFixed(1)} km`],["\u5C45\u6C11\u4EA4\u8C08",(e.talked||[]).length],["\u5E78\u798F\u5EA6",h.morale??"\u2014"],["\u8865\u7ED9\u8231",e.pods||0]],s=xn.visited||[],r=Object.keys(Vn).map(l=>{let c=l===ot?{pop:n.pop}:s.find(d=>d.id===l);return`<div><small>${Vn[l].name}</small><b>${c?c.pop+" \u4EBA":"\u2014"}</b></div>`}).join(""),o=h.colonists.map(l=>`<div class="person" data-i="${[...l.name][0]}"><span class="pn">${l.name}</span><span class="pj">${l.job}</span><div class="pl">\u201C${l.line}\u201D</div></div>`).join(""),a=n.pop-h.colonists.length;return`<h3>\u6982\u51B5 \xB7 ${fe.name}</h3><div class="kv">${i.map(l=>`<div><small>${l[0]}</small><b>${l[1]}</b></div>`).join("")}</div>
    ${h.moraleFactors&&n.pop?`<h3>\u5E78\u798F\u5EA6\u6784\u6210</h3><div class="kv">${h.moraleFactors.map(l=>`<div><small>${l[0]}</small><b style="color:${l[1]>=0?"var(--green)":"var(--red)"}">${l[1]>0?"+":""}${Math.round(l[1])}</b></div>`).join("")}</div>`:""}
    <h3>\u4EBA\u7C7B\u7684\u8DB3\u8FF9</h3><div class="kv">${r}<div><small>\u661F\u9645\u603B\u4EBA\u53E3</small><b>${s.filter(l=>l.id!==ot).reduce((l,c)=>l+c.pop,0)+n.pop}</b></div></div>
    <h3>\u5C45\u6C11\u540D\u518C</h3>${o?`<div class="people">${o}</div>`:'<p style="color:var(--dim)">\u8FD8\u6CA1\u6709\u5C45\u6C11\u3002\u5EFA\u597D\u4F4F\u623F\u3001\u6C27\u6C14\u3001\u98DF\u7269\u3001\u6C34\u548C\u7740\u9646\u573A\uFF0C\u79FB\u6C11\u98DE\u8239\u5C31\u4F1A\u5230\u6765\u3002</p>'}
    ${a>0?`<p style="color:var(--dim);margin-top:14px">\u2026\u2026\u4EE5\u53CA\u53E6\u5916 ${a} \u4F4D\u5C45\u6C11\u3002</p>`:""}`}var Ga={},B1={},zr={},H0=0,G1="",Va=0,V1="";function j0(n,e){let t=h.player,i=h.colony;if(H0-=n,H0<=0){H0=.2;let p=fx(),g=qn[h.cityLevel],x=p?Math.min(1,Math.min(i.pop/p.pop,h.buildings.length/Math.max(1,p.b))):1,v=`<span class="lv">LV.${TT[h.cityLevel]}</span><span class="nm">${g.name}</span>${p?`<div class="pg"><i style="width:${x*100}%"></i></div><div class="nx">\u4E0B\u4E00\u7EA7\u300C${p.name}\u300D\xB7 \u4EBA\u53E3 ${Math.min(i.pop,p.pop)}/${p.pop} \xB7 \u8BBE\u65BD ${Math.min(h.buildings.length,p.b)}/${p.b}</div>`:'<div class="nx">\u5DF2\u8FBE\u5230\u6700\u9AD8\u7B49\u7EA7</div>'}`;pe("city").dataset.k!==v&&(pe("city").dataset.k=v,pe("city").innerHTML=v);let m="";if(h.buildings.length){if(m+=`<div class="st ${i.deficit?"warn":""}">${ft("power")}<div><small>\u7535\u529B</small><b>${Math.round(i.powerProd)}<em>/${i.powerUse}</em></b></div></div>`,m+=`<div class="st">${ft("pop")}<div><small>\u4EBA\u53E3</small><b>${i.pop}<em>/${i.support}</em></b></div></div>`,i.pop>0&&h.morale!==void 0){let I=h.morale;m+=`<div class="st ${I<35?"warn":I>=75?"tf":""}">${ft("star")}<div><small>\u5E78\u798F</small><b>${I}</b></div></div>`,I<35&&(m+=`<div class="chip">${ft("warn")}\u5C45\u6C11\u4E0D\u5F00\u5FC3\uFF1A\u5EFA\u7167\u660E\u706F\u3001\u5E7F\u573A\u3001\u6E29\u5BA4\uFF0C\u4FEE\u597D\u53D7\u635F\u8BBE\u65BD</div>`)}if(h.terraform>0&&(m+=`<div class="st tf">${ft("planet")}<div><small>\u5927\u6C14\u6539\u9020</small><b>${Math.floor(h.terraform*100)}%</b></div></div>`),i.deficit&&(m+=`<div class="chip">${ft("warn")}\u7535\u529B\u4E0D\u8DB3\uFF1A\u591A\u5EFA\u592A\u9633\u80FD\u6216\u53CD\u5E94\u5806</div>`),i.housing&&h.buildings.some(I=>I.type==="beacon")&&i.support<=i.pop){let I=[["housing","\u4F4F\u623F","house","\u5C45\u4F4F\u7A79\u9876"],["o2","\u6C27\u6C14","o2","\u5236\u6C27\u7AD9"],["food","\u98DF\u7269","food","\u6E29\u5BA4"],["water","\u6C34","water","\u6C34\u51B0\u63D0\u53D6\u5668"]].sort((_,w)=>i[_[0]]-i[w[0]])[0];m+=`<div class="chip">${ft(I[2])}\u7F3A\u5C11${I[1]}\uFF1A\u5EFA\u9020${I[3]}\u6765\u8FCE\u63A5\u65B0\u79FB\u6C11</div>`}}pe("colony").dataset.k!==m&&(pe("colony").dataset.k=m,pe("colony").innerHTML=m);let E=h.storm>.3?"\u6C99\u5C18\u66B4":h.raining?"\u964D\u96E8":"";pe("clock").innerHTML=Ap().replace(/^.*? · /,"")+(E?`<span class="wx">${E}</span>`:"");let b=zi[h.chapter],M=h.chapter,R=(ni()?[]:b.goals).map((I,_)=>{let w=h.goalDone?.[M+":"+_],U=I.prog&&!w?I.prog():"",O=/^(\d+)\/(\d+)$/.exec(U);return`<div class="g ${w?"done":""}"><span class="cb"></span><div class="gx">${I.text}${U?`<small>${U}</small>`:""}${O?`<div class="gp"><i style="width:${Math.min(100,O[1]/O[2]*100)}%"></i></div>`:""}</div></div>`}).join(""),P=h.requests||[];P.length?R+='<div class="rq-h">\u5C45\u6C11\u59D4\u6258</div>'+P.map(I=>{let _=wx(I,Wa);return`<div class="g rq"><span class="cb"></span><div class="gx">${I.text}<small>${I.giver}${I.n>1?` \xB7 ${_}/${I.n}`:""}</small>${I.n>1?`<div class="gp"><i style="width:${_/I.n*100}%"></i></div>`:""}</div></div>`}).join(""):ni()&&(R+='<div class="g"><div class="gx" style="color:var(--dim)">\u5148\u5EFA\u4E00\u5EA7\u8BBE\u65BD\uFF0C\u5C45\u6C11\u4EEC\u4F1A\u5F00\u59CB\u63D0\u51FA\u59D4\u6258</div></div>'),(h.rp>.5||h.buildings.some(I=>I.type==="lab"))&&(R+=`<div class="rq-h">\u79D1\u7814 <b>${Math.floor(h.rp)}</b> \u70B9 <small>+${id().toFixed(1)}/\u79D2 \xB7 T \u6253\u5F00</small></div>`),R!==V1&&(V1=R,pe("goals").innerHTML=R,pe("goal-ch").textContent=ni()?`\u81EA\u7531\u6A21\u5F0F \xB7 ${Ra[h.diffKey||"normal"].name}`:b.title.replace(/ · /," ")),document.querySelectorAll("#hotbar .slot:not(.gad)").forEach((I,_)=>{I.classList.toggle("on",_===un.index),I.classList.toggle("lock",!!(Hr[_].need&&!h.upgrades[Hr[_].need]))})}for(let p in rn){Ga[p]=Ga[p]??h.res[p];let g=h.res[p]-Ga[p];Ga[p]=Math.abs(g)<.5?h.res[p]:Ga[p]+g*Math.min(1,n*7+.02);let x=Math.floor(Ga[p]+1e-4),v=B1[p]||(B1[p]=pe("r-"+p).querySelector("b"));v.textContent!=x&&(v.textContent=x)}{let p=pe("gad-g"),g=y1()/b0;p.classList.toggle("hidden",!h.upgrades.grenade),p.style.setProperty("--cd",g.toFixed(3));let x=g<=0;x!==p._rd&&(p._rd=x,p.classList.toggle("ready",x),x&&h.upgrades.grenade&&p.animate([{boxShadow:"0 0 0 1px rgba(255,180,90,.9), 0 0 22px rgba(255,150,60,.6)"},{boxShadow:"0 0 0 1px rgba(255,180,90,0)"}],{duration:700,easing:"ease-out"}))}N0("d-hp",70,t.health/t.maxHealth),N0("d-o2",58,t.o2/t.maxO2),N0("d-en",47,t.energy/100),pe("d-o2n").textContent=Math.ceil(t.o2/t.maxO2*100),pe("d-hpn").textContent=Math.ceil(t.health),pe("d-enn").textContent=Math.ceil(t.energy),pe("pl-en").textContent=Ap().split(" \xB7 ")[0]===fe.name?k0[ot]:k0[ot];let s=pe("o2-state"),r=t.inLife?`${ft("o2")} \u8865\u6C27\u4E2D`:t.o2<t.maxO2*.2?`${ft("warn")} \u6C27\u6C14\u4E0D\u8DB3\uFF0C\u7ACB\u5373\u8FD4\u56DE`:"";s.dataset.k!==r&&(s.dataset.k=r,s.innerHTML=r),s.className=t.inLife?"ok":"bad",pe("suit").classList.toggle("low",t.o2<t.maxO2*.2&&!t.inLife);let o=Xx(),a=pe("radio");if(o){G1!==o[1]&&(G1=o[1],Va=0,a.querySelector(".who").textContent=o[0]);let p=o[1].length;Va<p&&(Va=Math.min(p,Va+n*26+1e-4),n===0&&(Va=p));let g=Math.floor(Va);a.querySelector(".txt").innerHTML=o[1].slice(0,g)+(g<p?'<span class="cur"></span>':""),a.classList.toggle("idle",g>=p),a.classList.add("show")}else a.classList.remove("show");let l=pe("prompt");l.dataset.k!==(e.prompt||"")&&(l.dataset.k=e.prompt||"",l.innerHTML=e.prompt||""),l.classList.toggle("show",!!e.prompt),l.classList.toggle("drive",!!h.driving);let c=pe("buildhint");if(un.id==="build"&&It.type&&!h.menuOpen){let p=Yn[It.type];c.innerHTML=`<div class="bn">${p.name}</div><div>${pa(p.cost)}</div>
      <div class="st">${It.valid?'<span class="okc">\u5DE6\u952E\u653E\u7F6E</span>':`<span class="badc">${It.reason}</span>`}</div>
      <div><kbd>R</kbd>\u65CB\u8F6C <kbd>\u53F3\u952E</kbd>\u53D6\u6D88 <kbd>B</kbd>\u66F4\u6362\u84DD\u56FE</div>`,c.classList.add("show")}else c.classList.remove("show");pe("hurt").style.opacity=Math.min(1,t.hurtT*1.6+(t.o2<=0?.5+Math.sin(performance.now()*.01)*.2:0)),pe("lowo2").style.opacity=!t.inLife&&t.o2<t.maxO2*.2?(.4+Math.sin(performance.now()*.006)*.3)*(1-t.o2/(t.maxO2*.2)*.6):0,pe("crosshair").className=e.crossClass||"",DT(n);let d=pe("tip");d.dataset.k!==(e.tip||"")&&(d.dataset.k=e.tip||"",d.innerHTML=e.tip?`<div class="tk">\u63D0\u793A</div><div>${e.tip}</div>`:""),d.classList.toggle("show",!!e.tip);let u=t1(),f=u&&Math.hypot(u.pos.x-t.pos.x,u.pos.z-t.pos.z)<260;pe("bossbar").classList.toggle("hidden",!f),f&&(pe("bossbar").querySelector("i").style.width=Math.max(0,u.hp/u.maxHp*100)+"%"),UT(),HT()}function N0(n,e,t){let i=2*Math.PI*e,s=pe(n);s.style.strokeDasharray=i,s.style.strokeDashoffset=i*(1-Math.max(0,Math.min(1,t)))}var W1={0:"\u5317",45:"\u4E1C\u5317",90:"\u4E1C",135:"\u4E1C\u5357",180:"\u5357",225:"\u897F\u5357",270:"\u897F",315:"\u897F\u5317"};function UT(){let n=h.player,e=n.fwd,t=Math.atan2(e.x,-e.z)*180/Math.PI,i=80,s=520,r=f=>s/2+f/i*(s/2),o="",a=Math.ceil((t-i)/5)*5;for(let f=a;f<=t+i;f+=5){let p=f-t,g=(f%360+360)%360;W1[g]!==void 0?o+=`<span class="lb ${g%90===0?"big":""}" style="left:${r(p)}px">${W1[g]}</span>`:o+=`<span class="tk ${g%15===0?"m":""}" style="left:${r(p)}px"></span>`}let l=(f,p)=>Math.atan2(f-n.pos.x,-(p-n.pos.z))*180/Math.PI,c=[{c:"home",t:`${ft("house")}${Math.round(Math.hypot(wt.x-n.pos.x,wt.z-n.pos.z))}m`,a:l(wt.x,wt.z)}];if(h.upgrades.scanner){let f=null,p=1e9;for(let g of h.nodes)if(g.type==="titanium"){let x=Math.hypot(g.x-n.pos.x,g.z-n.pos.z);x<p&&(p=x,f=g)}f&&c.push({c:"ti",t:`${ft("titanium")}${Math.round(p)}m`,a:l(f.x,f.z)})}h.waypoint&&c.push({c:"ship",t:`${ft("star")}\u5BFC\u822A ${Math.round(Math.hypot(h.waypoint.x-n.pos.x,h.waypoint.z-n.pos.z))}m`,a:l(h.waypoint.x,h.waypoint.z)});let d=D1(n.pos);d&&c.push({c:"home",t:`${ft("ship")}\u8865\u7ED9 ${Math.round(d.d)}m`,a:l(d.p.x,d.p.z)});let u=_1(n.pos);u&&c.push({c:"ship",t:`? ${Math.round(u.d)}m`,a:l(u.r.x,u.r.z)});for(let f of c){let p=(f.a-t+540)%360-180;Math.abs(p)<i&&(o+=`<span class="mk ${f.c}" style="left:${r(p)}px;top:16px">${f.t}</span>`)}pe("compass").innerHTML=o}function HT(){let n=h.player,e=z0.width,t=e/2-6,i=h.upgrades.scanner?220:110,s=Td.width/cn;we.clearRect(0,0,e,e),we.save(),we.beginPath(),we.arc(e/2,e/2,t,0,Math.PI*2),we.clip(),we.fillStyle="#0c0807",we.fillRect(0,0,e,e),we.globalAlpha=.75;let r=t*2/(i*2);we.drawImage(Td,(n.pos.x-i+cn/2)*s,(n.pos.z-i+cn/2)*s,i*2*s,i*2*s,e/2-t,e/2-t,t*2,t*2),we.globalAlpha=1;let o=f=>(f-n.pos.x)*r+e/2,a=f=>(f-n.pos.z)*r+e/2;we.strokeStyle="rgba(255,255,255,.1)",we.lineWidth=1;for(let f of[.33,.66])we.beginPath(),we.arc(e/2,e/2,t*f,0,Math.PI*2),we.stroke();we.strokeStyle="rgba(127,230,255,.55)",we.setLineDash([3,4]),we.beginPath(),we.arc(o(mi.x),a(mi.z),qn[h.cityLevel].r*r,0,Math.PI*2),we.stroke(),we.setLineDash([]);let l=(f,p,g,x)=>{we.fillStyle=x,we.beginPath(),we.arc(o(f),a(p),g,0,Math.PI*2),we.fill()};for(let f of h.nodes){if(Math.abs(f.x-n.pos.x)>i||Math.abs(f.z-n.pos.z)>i)continue;let p=rn[f.type].color,g=o(f.x),x=a(f.z),v=f.type==="titanium"?3.2:2.2;we.fillStyle=p,we.beginPath(),we.moveTo(g,x-v),we.lineTo(g+v,x),we.lineTo(g,x+v),we.lineTo(g-v,x),we.fill()}for(let f of h.buildings){let p=Math.max(2,f.def.r*r*.8);we.fillStyle=f.broken?"#ff5a45":f.powered?"#ece6dc":"#ffb35c",we.fillRect(o(f.x)-p,a(f.z)-p,p*2,p*2)}we.fillStyle="#8dffb0";for(let f of h.colonists)we.fillRect(o(f.pos.x)-1,a(f.pos.z)-1,2,2);let c=Math.sin(performance.now()*.008)>0;for(let f of h.enemies)l(f.pos.x,f.pos.z,f.guardian?3.5:2.6,c?"#ff5a45":"#a02818");l(wt.x,wt.z,3,"#8dffb0");for(let f of L0())we.fillStyle="#8bf0a9",we.beginPath(),we.arc(o(f.x),a(f.z),4.5,0,Math.PI*2),we.fill();for(let f of _0())Math.abs(f.x-n.pos.x)>i*1.2||Math.abs(f.z-n.pos.z)>i*1.2||(we.strokeStyle=f.found?"rgba(255,210,138,.4)":"#ffd28a",we.lineWidth=1.5,we.beginPath(),we.arc(o(f.x),a(f.z),4,0,Math.PI*2),we.stroke());we.restore(),we.save(),we.translate(e/2,e/2),we.strokeStyle="rgba(236,230,220,.35)",we.lineWidth=1,we.beginPath(),we.arc(0,0,t+.5,0,Math.PI*2),we.stroke();for(let f=0;f<72;f++){let p=f/72*Math.PI*2,g=f%18===0?6:f%6===0?4:2;we.strokeStyle=f%18===0?"rgba(255,179,92,.9)":"rgba(236,230,220,.3)",we.beginPath(),we.moveTo(Math.sin(p)*(t+1),-Math.cos(p)*(t+1)),we.lineTo(Math.sin(p)*(t+1+g),-Math.cos(p)*(t+1+g)),we.stroke()}let d=Math.atan2(n.fwd.x,-n.fwd.z);we.rotate(d);let u=we.createRadialGradient(0,0,0,0,0,t*.6);u.addColorStop(0,"rgba(255,179,92,.35)"),u.addColorStop(1,"rgba(255,179,92,0)"),we.fillStyle=u,we.beginPath(),we.moveTo(0,0),we.arc(0,0,t*.6,-Math.PI/2-.55,-Math.PI/2+.55),we.closePath(),we.fill(),we.fillStyle="#fff",we.beginPath(),we.moveTo(0,-7),we.lineTo(5,5),we.lineTo(0,2.5),we.lineTo(-5,5),we.closePath(),we.fill(),we.restore()}function Rd(){let n=pe("boot"),e=["ARK OS 3.1  \xB7  VISOR LINK ESTABLISHED","\u751F\u547D\u7EF4\u6301 ........... \u6B63\u5E38","\u5B87\u822A\u670D\u6C14\u5BC6 ......... \u6B63\u5E38","\u5BFC\u822A\u4E0E\u7F57\u76D8 ......... \u6821\u51C6\u5B8C\u6210","\u6B96\u6C11\u5730\u6570\u636E\u94FE ....... \u5DF2\u540C\u6B65","\u5168\u606F\u6295\u5F71 ........... \u542F\u52A8"];n.innerHTML='<div class="bt-ring"></div>'+e.map((t,i)=>`<div class="bt-l" style="animation-delay:${.1+i*.16}s">${t}</div>`).join(""),n.className="show",document.body.classList.add("booting"),X.play("open"),setTimeout(()=>{n.className="out",document.body.classList.remove("booting"),X.play("chapter")},1500),setTimeout(()=>{n.className="",n.innerHTML=""},2300)}var Z1="starport-achv",Pd=[{id:"first",name:"\u7B2C\u4E00\u6B65",desc:"\u5728\u5F02\u661F\u91C7\u96C6\u7B2C\u4E00\u5757\u77FF\u77F3",icon:"iron",check:()=>h.stats.mined.iron+h.stats.mined.silicon+h.stats.mined.ice>0},{id:"devil",name:"\u4E58\u98CE\u800C\u4E0A",desc:"\u88AB\u5C18\u5377\u98CE\u5377\u4E0A\u5929\u7A7A",icon:"storm",check:()=>(h.stats.devils||0)>0},{id:"boomer",name:"\u4E00\u96F7\u6E05\u573A",desc:"\u6295\u63B7\u7B2C\u4E00\u9897\u9707\u8361\u96F7",icon:"bomb",check:()=>(h.stats.grenades||0)>0},{id:"breathe",name:"\u547C\u5438",desc:"\u5EFA\u8D77\u7B2C\u4E00\u5EA7\u5236\u6C27\u7AD9",icon:"o2",check:()=>h.stats.built.oxygen>0},{id:"home",name:"\u7B2C\u4E00\u4E2A\u5BB6",desc:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",icon:"dome",check:()=>h.stats.built.habitat>0},{id:"welcome",name:"\u6B22\u8FCE\u56DE\u5BB6",desc:"\u8FCE\u63A5\u7B2C\u4E00\u6279\u79FB\u6C11",icon:"pop",check:()=>h.stats.arrived>0},{id:"listen",name:"\u503E\u542C\u8005",desc:"\u4E0E 8 \u4F4D\u5C45\u6C11\u4EA4\u8C08",icon:"radio",check:()=>(h.stats.talked||[]).length>=8},{id:"night",name:"\u957F\u591C\u5B88\u671B\u8005",desc:"\u51FB\u9000 15 \u53EA\u9508\u8680\u86DB",icon:"shield",check:()=>h.stats.kills>=15},{id:"guardian",name:"\u6676\u4F53\u730E\u4EBA",desc:"\u51FB\u8D25\u4E00\u53EA\u949B\u77FF\u5B88\u536B",icon:"titanium",check:()=>(h.stats.guardKills||0)>0},{id:"road",name:"\u516C\u8DEF\u65C5\u884C",desc:"\u9A7E\u9A76\u6F2B\u6E38\u8F66\u884C\u9A76 3 \u516C\u91CC",icon:"rover",check:()=>(h.stats.driven||0)>=3e3},{id:"meteor",name:"\u661F\u843D\u4E4B\u591C",desc:"\u91C7\u96C6\u4E00\u5757\u9668\u77F3",icon:"meteor",check:()=>(h.stats.meteorMined||0)>0},{id:"storm",name:"\u98CE\u66B4\u4E4B\u4E2D",desc:"\u7ECF\u5386\u4E00\u573A\u6C99\u5C18\u66B4",icon:"storm",check:()=>h.storm>.85},{id:"fly",name:"\u98DE\u7FD4",desc:"\u5236\u9020\u55B7\u6C14\u80CC\u5305",icon:"jet",check:()=>!!h.upgrades.jetpack},{id:"town",name:"\u5C0F\u9547",desc:"\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C\u5C0F\u9547\u300D",icon:"colony",check:()=>h.cityLevel>=2},{id:"metro",name:"\u5927\u90FD\u4F1A",desc:"\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C\u5927\u90FD\u4F1A\u300D",icon:"tower",check:()=>h.cityLevel>=4},{id:"fifty",name:"\u4E94\u5341\u4E2A\u706F\u706B",desc:"\u5355\u9897\u661F\u7403\u4EBA\u53E3\u8FBE\u5230 50",icon:"pop",check:()=>h.colony.pop>=50},{id:"reactor",name:"\u7B2C\u4E8C\u9897\u592A\u9633",desc:"\u70B9\u4EAE\u805A\u53D8\u53CD\u5E94\u5806",icon:"power",check:()=>h.stats.built.reactor>0},{id:"blue",name:"\u84DD\u8272\u5929\u7A7A",desc:"\u5B8C\u6210\u706B\u661F\u5927\u6C14\u6539\u9020",icon:"planet",check:()=>h.terraform>=1},{id:"europa",name:"\u51B0\u4E0B\u4E4B\u6D77",desc:"\u767B\u9646\u6728\u536B\u4E8C\xB7\u6B27\u7F57\u5DF4",icon:"ice",check:()=>ot==="europa"},{id:"kepler",name:"\u53CC\u65E5\u4E4B\u5730",desc:"\u62B5\u8FBE\u5F00\u666E\u52D2-442b",icon:"sun",check:()=>ot==="kepler"},{id:"civ",name:"\u661F\u9645\u6587\u660E",desc:"\u5EFA\u6210\u6587\u660E\u7EAA\u5FF5\u7891",icon:"monument",check:()=>h.stats.built.monument>0},{id:"relic",name:"\u56DE\u58F0",desc:"\u53D1\u73B0\u7B2C\u4E00\u5904\u9057\u8FF9",icon:"radio",check:()=>bs().found>0},{id:"archaeo",name:"\u8003\u53E4\u5B66\u5BB6",desc:"\u53D1\u73B0\u4E00\u9897\u661F\u7403\u4E0A\u7684\u5168\u90E8\u9057\u8FF9",icon:"book",check:()=>{let n=bs();return n.total>0&&n.found===n.total}},{id:"boss",name:"\u6676\u6BCD\u9668\u843D",desc:"\u5728\u6676\u6F6E\u4E4B\u591C\u51FB\u8D25\u6676\u6BCD",icon:"boss",check:()=>(h.stats.bossKills||0)>0},{id:"fleet",name:"\u65E0\u4EBA\u673A\u8230\u961F",desc:"\u65E0\u4EBA\u673A\u8FD0\u56DE 30 \u6279\u7269\u8D44",icon:"drone",check:()=>(h.stats.droneHauls||0)>=30},{id:"lv3",name:"\u7CBE\u76CA\u6C42\u7CBE",desc:"\u628A\u4E00\u5EA7\u5EFA\u7B51\u5347\u5230 3 \u7EA7",icon:"star",check:()=>h.buildings.some(n=>(n.level||1)>=3)},{id:"buddy",name:"\u597D\u642D\u6863",desc:"\u8BA9\u5C0F\u661F\u626B\u63CF 10 \u6B21",icon:"scanner",check:()=>(h.stats.scans||0)>=10},{id:"helper",name:"\u597D\u90BB\u5C45",desc:"\u5B8C\u6210 10 \u4E2A\u5C45\u6C11\u59D4\u6258",icon:"radio",check:()=>(h.stats.requests||0)>=10},{id:"science",name:"\u79D1\u5B66\u5BB6",desc:"\u5B8C\u6210 6 \u9879\u79D1\u7814",icon:"book",check:()=>Object.keys(h.tech||{}).length>=6},{id:"trader",name:"\u661F\u9645\u5546\u4EBA",desc:"\u5B8C\u6210 10 \u6B21\u661F\u9645\u8D38\u6613",icon:"ship",check:()=>(h.stats.traded||0)>=10},{id:"mail",name:"\u6765\u81EA\u5730\u7403\u7684\u4FE1",desc:"\u6253\u5F00 5 \u4E2A\u8865\u7ED9\u8231",icon:"ship",check:()=>(h.stats.pods||0)>=5},{id:"happy",name:"\u5B89\u5C45\u4E50\u4E1A",desc:"\u5C45\u6C11\u5E78\u798F\u5EA6\u8FBE\u5230 90",icon:"star",check:()=>h.colony.pop>=4&&(h.morale||0)>=90},{id:"fest",name:"\u6B96\u6C11\u5730\u8282",desc:"\u548C\u5C45\u6C11\u4E00\u8D77\u5728\u5E7F\u573A\u770B\u70DF\u82B1",icon:"star",check:()=>(h.stats.festivals||0)>0},{id:"photo",name:"\u6444\u5F71\u5E08",desc:"\u5728\u62CD\u7167\u6A21\u5F0F\u4E2D\u4FDD\u5B58\u4E00\u5F20\u7167\u7247",icon:"camera",check:()=>(h.stats.photos||0)>0},{id:"gather",name:"\u6545\u4E61\u7684\u5149",desc:"\u591C\u91CC\uFF0C\u5C45\u6C11\u4EEC\u805A\u5728\u5E7F\u573A\u4E0A\u770B\u5168\u606F\u5730\u7403",icon:"planet",check:()=>!!h.plazaSeen}],wo={};try{wo=JSON.parse(localStorage.getItem(Z1))||{}}catch{wo={}}var Z0=[],K0=0,Cd=0;function K1(n){if(K0-=n,Cd-=n,K0<=0){K0=1;for(let t of Pd){if(wo[t.id])continue;let i=!1;try{i=t.check()}catch{i=!1}if(i){wo[t.id]=Date.now(),Z0.push(t);try{localStorage.setItem(Z1,JSON.stringify(wo))}catch{}}}}let e=document.getElementById("achv-pop");if(Cd<=0&&e.classList.contains("show")&&e.classList.remove("show"),Cd<=-.6&&Z0.length){let t=Z0.shift();e.innerHTML=`<div class="ai">${ft(t.icon)}</div><div><div class="k">ACHIEVEMENT UNLOCKED</div><div class="n">${t.name}</div><div class="d">${t.desc}</div></div>`,e.classList.add("show"),Cd=4.5,X.play("achv")}}function J0(){return`<h3>\u6210\u5C31 \xB7 ${Pd.filter(e=>wo[e.id]).length} / ${Pd.length}</h3><div class="achv">${Pd.map(e=>`<div class="ach ${wo[e.id]?"on":""}"><div class="ai">${ft(e.icon)}</div><div><div class="an">${e.name}</div><div class="ad">${e.desc}</div></div></div>`).join("")}</div>`}var Q1=!1,$1=[],ey=[],ty=[];function J1(n,e,t,i,s){let r=new Rt;r.setAttribute("position",new an(new Float32Array(n*3),3));let o=new hi({size:t,map:Nn(),color:e,transparent:!0,opacity:i,depthWrite:!1,blending:s?He:li}),a=new Si(r,o);a.frustumCulled=!1,h.scene.add(a);let l=new Float32Array(n*3);for(let c=0;c<n;c++)l[c*3]=Math.random(),l[c*3+1]=Math.random()*Math.PI*2,l[c*3+2]=Math.random();return{p:a,seed:l,n}}function NT(){if(Q1=!0,ot==="mars")for(let n=0;n<3;n++){let e=J1(420,14195306,2.4,.45,!1);$1.push({...e,x:0,z:0,vx:0,vz:0,h:40+Math.random()*30,life:0,k:0})}else if(ot==="europa"){let n=Gs.slice(0,8).map(e=>({x:e.x+(Math.random()-.5)*e.r*.6,z:e.z+(Math.random()-.5)*e.r*.6}));n.push({x:60,z:70},{x:-90,z:-40},{x:120,z:140});for(let e of n){if(Math.abs(e.x)>Ge-200||Math.abs(e.z)>Ge-200)continue;let t=J1(500,15267583,2.6,.6,!0);ey.push({...t,x:e.x,z:e.z,y:ue(e.x,e.z),t:Math.random()*30,on:0})}}else if(ot==="kepler"){let n=new Be(1,12,6,0,Math.PI*2,0,Math.PI/2);for(let e=0;e<34;e++){let t=.45+Math.random()*.4,i=new re().setHSL(t,.9,.6),s=new Q(n,new ke({color:i,transparent:!0,opacity:.55,depthWrite:!1,blending:He})),r=new wi(new ci({map:Nn(),color:i,transparent:!0,depthWrite:!1,blending:He})),o=new Q(new Wt(.6,3,6,1,!0),s.material);o.position.y=-1.6,o.rotation.x=Math.PI;let a=new ce;a.add(s,r,o),r.scale.setScalar(6);let l=.6+Math.random()*1.2;a.scale.setScalar(l),h.scene.add(a),ty.push({g:a,m:s,s:r,x:(Math.random()-.5)*500,z:(Math.random()-.5)*500,alt:14+Math.random()*30,ph:Math.random()*6,sp:.5+Math.random()})}}}var eP=new S,Q0=0;function ny(n){Q1||NT();let e=h.player.pos,t=performance.now()*.001,i=1-h.time.night;for(let s of $1){if(s.life-=n,s.life<=0){let c=Math.random()*Math.PI*2,d=90+Math.random()*200;s.x=Tt.clamp(e.x+Math.cos(c)*d,-Ge+160,Ge-160),s.z=Tt.clamp(e.z+Math.sin(c)*d,-Ge+160,Ge-160);let u=Math.random()*Math.PI*2;s.vx=Math.cos(u)*3,s.vz=Math.sin(u)*3,s.life=40+Math.random()*40,s.h=35+Math.random()*40}s.x+=s.vx*n,s.z+=s.vz*n;let r=Math.min(1,s.life/5,(60-s.life)/5+1)*i*(1-h.storm)*(h.terraform<1?1:.2);s.k+=(r-s.k)*Math.min(1,n),s.p.material.opacity=.45*s.k;let o=s.p.geometry.attributes.position.array,a=ue(s.x,s.z);for(let c=0;c<s.n;c++){let d=s.seed,u=(d[c*3]+t*.08*(.6+d[c*3+2]))%1,f=d[c*3+1]+t*(3+(1-u)*2),p=.8+u*u*9+d[c*3+2]*1.5,g=Math.sin(t*.7+u*4)*u*3;o[c*3]=s.x+Math.cos(f)*p+g,o[c*3+1]=a+u*s.h,o[c*3+2]=s.z+Math.sin(f)*p}s.p.geometry.attributes.position.needsUpdate=!0;let l=Math.hypot(e.x-s.x,e.z-s.z);l<8&&s.k>.5&&!h.driving&&(h.player.vel.x+=(e.x-s.x)/l*n*20,h.player.vel.z+=(e.z-s.z)/l*n*20)}Q0-=n;for(let s of ey){s.t-=n,s.t<=0&&s.on<=0&&(s.on=9,s.t=25+Math.random()*30,Math.hypot(e.x-s.x,e.z-s.z)<120&&X.play("rumble")),s.on-=n;let r=Tt.clamp(Math.min(s.on,9-s.on),0,1.5)/1.5;if(s.p.material.opacity=.6*r,r<=0)continue;let o=s.p.geometry.attributes.position.array,a=70;for(let l=0;l<s.n;l++){let c=s.seed,d=(c[l*3]+t*.35)%1,u=.4+d*9*c[l*3+2]+d*d*4;o[l*3]=s.x+Math.cos(c[l*3+1])*u,o[l*3+1]=s.y+Math.sin(d*Math.PI*.9)*a*(.6+c[l*3+2]*.4),o[l*3+2]=s.z+Math.sin(c[l*3+1])*u}s.p.geometry.attributes.position.needsUpdate=!0,Math.hypot(e.x-s.x,e.z-s.z)<40&&Q0<=0&&(Q0=.5,X.play("jet"))}for(let s of ty){s.ph+=n*s.sp,s.x+=Math.sin(s.ph*.3)*n*2,s.z+=Math.cos(s.ph*.23)*n*2,Math.abs(s.x-e.x)>260&&(s.x=e.x-Math.sign(s.x-e.x)*250),Math.abs(s.z-e.z)>260&&(s.z=e.z-Math.sign(s.z-e.z)*250);let r=ue(s.x,s.z)+s.alt+Math.sin(s.ph)*2;s.g.position.set(s.x,r,s.z);let o=.75+Math.sin(s.ph*3)*.25;s.m.scale.set(1+Math.sin(s.ph*3)*.12,1-Math.sin(s.ph*3)*.1,1+Math.sin(s.ph*3)*.12);let a=.15+h.time.night*.85;s.m.material.opacity=.5*a*o,s.s.material.opacity=.7*a*o}}var _s,$0,pc,em,So,tm,qa=[],mc=0,fc=-1,nm=20,Id=0,kr=new S,iy=new S,sy=new Set,Dd=140;function oy(){_s=new ce;let n=new Q(new Be(.32,20,14),y.white),e=new Q(new Le(.33,.04,8,28),y.orange);e.rotation.x=Math.PI/2;let t=new Q(new Be(.2,16,10,-Math.PI*.35,Math.PI*.7,Math.PI*.3,Math.PI*.4),new ve({color:660504,roughness:.1,metalness:.6}));t.position.z=.15,t.rotation.y=Math.PI,$0=ge(8382207,.45,null,0,.02,.33),pc=new Q(new Le(.5,.015,6,40),new ke({color:8382207,transparent:!0,opacity:.6})),pc.rotation.x=Math.PI/2;let i=new Q(new Wt(.05,.25,6),y.metal);i.position.y=.38,_s.add(n,e,t,$0,pc,i,ge(16738874,.25,null,0,.5,0)),_s.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),_s.scale.setScalar(.8),em=new Ri(12578815,0,22,1.6),_s.add(em),h.scene.add(_s);let s=h.player.pos;kr.set(s.x+1.5,s.y+2.2,s.z+1.5),_s.position.copy(kr),tm=new ke({color:8382207,transparent:!0,opacity:0,side:bt,depthWrite:!1,blending:He}),So=new Q(new nn(.94,1,96),tm),So.rotation.x=-Math.PI/2,So.visible=!1,h.scene.add(So)}function Xa(n,e,t=!0){t&&sy.has(n)||nm>0&&t||(sy.add(n),nm=45,Lt("\u5C0F\u661F \xB7 \u4F19\u4F34\u673A\u5668\u4EBA",e))}var Ld;function zT(){if(Ld)return Ld;let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d");return e.translate(32,32),e.rotate(Math.PI/4),e.strokeStyle="#fff",e.lineWidth=5,e.strokeRect(-14,-14,28,28),e.fillStyle="rgba(255,255,255,.35)",e.fillRect(-9,-9,18,18),Ld=new Zt(n),Ld}function kT(){if(mc>0){h.events.emit("toast",`\u626B\u63CF\u51B7\u5374\u4E2D \xB7 ${Math.ceil(mc)} \u79D2`),X.play("deny");return}mc=12,fc=0,X.play("scan");for(let s of qa)h.scene.remove(s.s);qa=[];let n=h.player.pos,e={};for(let s of h.nodes){let r=Math.hypot(s.x-n.x,s.z-n.z);if(r>Dd)continue;let o=gs[s.type],a=new wi(new ci({map:zT(),color:new re(o[0],o[1],o[2]),transparent:!0,depthTest:!1,depthWrite:!1,opacity:0,sizeAttenuation:!1}));a.scale.setScalar(s.type==="titanium"?.05:.036),a.position.set(s.x,s.y+3,s.z),a.renderOrder=999,h.scene.add(a),qa.push({s:a,delay:r/90,life:10}),e[s.type]=(e[s.type]||0)+1}let t={iron:"\u94C1\u77FF",silicon:"\u7845\u6676",ice:"\u6C34\u51B0",titanium:"\u949B\u77FF"},i=Object.entries(e).map(([s,r])=>`${t[s]} ${r}`).join(" \xB7 ");h.events.emit("toast",i?`\u626B\u63CF\u5B8C\u6210 \xB7 ${i}`:"\u626B\u63CF\u5B8C\u6210 \xB7 \u9644\u8FD1\u6CA1\u6709\u77FF\u85CF"),h.stats.scans=(h.stats.scans||0)+1}function ay(n){if(!_s)return;let e=h.player,t=performance.now()*.001;mc=Math.max(0,mc-n),nm-=n,Me.hit("KeyQ")&&!h.menuOpen&&!e.dead&&kT();let i=(h.driving,e.yaw),s=new S(Math.cos(i),0,-Math.sin(i)),r=new S(-Math.sin(i),0,-Math.cos(i)),o=e.pos.clone().addScaledVector(s,h.driving?3.5:3).addScaledVector(r,h.driving?2:5.5);o.y=Math.max(e.pos.y+1.55,ue(o.x,o.z)+.8)+Math.sin(t*2)*.12,h.driving&&(o.y+=2.2);let a=kr.distanceTo(o)>30?1:Math.min(1,n*3);iy.lerp(o.clone().sub(kr).multiplyScalar(4),a),kr.addScaledVector(iy,n),kr.distanceTo(o)>40&&kr.copy(o),_s.position.copy(kr);let l=e.pos.clone().addScaledVector(e.fwd,12);if(l.y+=1.5,_s.lookAt(l),pc.rotation.z+=n*1.5,pc.rotation.x=Math.PI/2+Math.sin(t*1.3)*.3,$0.material.opacity=.75+Math.sin(t*4)*.25,em.intensity=h.time.night>.4?18*h.time.night:0,fc>=0){fc+=n;let d=fc*90;So.visible=d<Dd,So.position.set(e.pos.x,e.pos.y+.6,e.pos.z),So.scale.setScalar(Math.max(.1,d)),tm.opacity=.7*(1-d/Dd),d>=Dd&&(fc=-1)}for(let d=qa.length-1;d>=0;d--){let u=qa[d];u.delay-=n,!(u.delay>0)&&(u.life-=n,u.s.material.opacity=Math.min(1,(10-u.life)*3,u.life/2)*(.75+Math.sin(t*5+d)*.25),u.life<=0&&(h.scene.remove(u.s),u.s.material.dispose(),qa.splice(d,1)))}Id=Math.hypot(e.vel.x,e.vel.z)>.5?0:Id+n,!e.inLife&&e.o2<e.maxO2*.3&&Xa("o2"+Math.floor(t/120),"\u6C27\u6C14\u4E0D\u591A\u4E86\uFF01\u6700\u8FD1\u7684\u8865\u6C27\u70B9\u5728\u7F57\u76D8\u4E0A\u90A3\u4E2A\u623F\u5B50\u56FE\u6807\u7684\u65B9\u5411\u3002",!1),h.time.night>.6&&!e.flashlight&&Xa("dark","\u597D\u9ED1\u2026\u2026\u6309 F \u6253\u5F00\u624B\u7535\u7B52\u5427\u3002\u6211\u4E5F\u4F1A\u5E2E\u4F60\u7167\u7740\u70B9\u3002"),h.enemies.some(d=>!d.dead&&!d.guardian&&d.pos.distanceTo(e.pos)<25)&&Xa("enemy"+Math.floor(t/90),"\u68C0\u6D4B\u5230\u9508\u8680\u86DB\u9760\u8FD1\uFF01\u5C0F\u5FC3\uFF01",!1),h.nodes.some(d=>d.type==="titanium"&&Math.hypot(d.x-e.pos.x,d.z-e.pos.z)<40)&&Xa("ti","\u9644\u8FD1\u6709\u949B\u77FF\u7684\u4FE1\u53F7\uFF01\u7D2B\u8272\u7684\u90A3\u79CD\uFF0C\u5F88\u7A00\u6709\u54E6\u3002"),Id>40&&(Id=-200,Xa("idle"+Math.floor(t/300),ry[ot][Math.floor(Math.random()*ry[ot].length)],!1)),h.stats.scans===void 0&&h.time.day>=1&&t>30&&Xa("scanhint","\u6211\u80FD\u626B\u63CF\u9644\u8FD1\u7684\u77FF\u85CF\u2014\u2014\u6309 Q \u8BD5\u8BD5\u3002")}var ry={mars:["\u4F60\u77E5\u9053\u5417\uFF1F\u706B\u661F\u4E0A\u7684\u4E00\u5929\u6BD4\u5730\u7403\u957F 37 \u5206\u949F\u3002","\u706B\u661F\u7684\u65E5\u843D\u662F\u84DD\u8272\u7684\u3002\u7B49\u508D\u665A\u7684\u65F6\u5019\u62AC\u5934\u770B\u770B\u5427\u3002","\u90A3\u5EA7\u6700\u9AD8\u7684\u5C71\u53EB\u5965\u6797\u5E15\u65AF\uFF0C\u662F\u5730\u7403\u73E0\u5CF0\u7684\u4E24\u500D\u591A\u9AD8\u3002","\u6211\u7684\u6570\u636E\u5E93\u91CC\u6709\u4E00\u9996\u5730\u7403\u7684\u6B4C\uFF0C\u53EB\u300A\u6708\u4EAE\u4EE3\u8868\u6211\u7684\u5FC3\u300B\u3002\u8981\u6211\u54FC\u7ED9\u4F60\u542C\u5417\uFF1F\u2026\u2026\u7B97\u4E86\uFF0C\u6211\u8DD1\u8C03\u3002"],europa:["\u6728\u661F\u597D\u5927\u2026\u2026\u611F\u89C9\u5B83\u968F\u65F6\u4F1A\u6389\u4E0B\u6765\u3002","\u51B0\u5C42\u4E0B\u9762\u7684\u6D77\uFF0C\u53EF\u80FD\u6BD4\u5730\u7403\u6240\u6709\u7684\u6D77\u52A0\u8D77\u6765\u8FD8\u8981\u591A\u3002","\u8FD9\u91CC\u7684\u91CD\u529B\u5F88\u5C0F\uFF0C\u8DF3\u9AD8\u4E00\u70B9\u6CA1\u5173\u7CFB\u7684\u3002"],kepler:["\u4E24\u4E2A\u592A\u9633\uFF01\u5F71\u5B50\u90FD\u6709\u4E24\u4E2A\uFF01","\u90A3\u4E9B\u53D1\u5149\u7684\u6C34\u6BCD\u2026\u2026\u5B83\u4EEC\u662F\u5728\u770B\u6211\u4EEC\u5417\uFF1F","\u7A7A\u6C14\u91CC\u7684\u6C27\u6C14\u5DF2\u7ECF\u6709 14% \u4E86\u3002\u518D\u8FC7\u51E0\u5341\u5E74\uFF0C\u4E5F\u8BB8\u5C31\u80FD\u6458\u4E0B\u5934\u76D4\u4E86\u3002"]};var yn=null,ly=new mn,im=new Cn,gc=new S;function OT(){let n=new ce,e=new ce;n.add(e);let t=(f,p,g,x,v,m=e,E=0,b=0,M=0)=>{let L=new Q(f,p);return L.position.set(g,x,v),L.rotation.set(E,b,M),L.castShadow=!0,L.receiveShadow=!0,m.add(L),L},i=(f,p,g,x=.08)=>new Ia(f,p,g,2,x),s=(f,p,g,x,v=e)=>{let m=p.clone().sub(f),E=t(new Fe(g,g,m.length(),8),x,0,0,0,v);return E.position.copy(f).add(p).multiplyScalar(.5),E.quaternion.setFromUnitVectors(new S(0,1,0),m.normalize()),E},r=(f,p,g)=>new S(f,p,g);t(i(2.5,.35,4.8,.1),y.dark,0,.85,0),t(i(2.6,.75,3.4,.18),y.white,0,1.35,.5),t(i(2.64,.14,3.44,.05),y.orange,0,1.62,.5),t(i(2.2,.5,1.2,.12),y.panel,0,1.25,-1.9,e,-.25,0,0);let o=t(new Be(1.15,32,16,0,Math.PI*2,0,Math.PI/2),y.glass,0,1.72,-.75);o.scale.set(1,.8,1.15),o.castShadow=!1;for(let f=0;f<5;f++)t(new Le(1.16,.035,6,24,Math.PI),y.metal,0,1.72,-.75,e,0,f*Math.PI/5,0).scale.set(1,.8,1.15);for(let f of[-1.15,1.15])s(r(f,1.7,.6),r(f*.9,2.75,.9),.06,y.metal),s(r(f,1.7,2.1),r(f*.9,2.75,1.9),.06,y.metal);s(r(-1.04,2.75,.9),r(1.04,2.75,.9),.06,y.metal),s(r(-1.04,2.75,1.9),r(1.04,2.75,1.9),.06,y.metal),s(r(-1.04,2.75,.9),r(-1.04,2.75,1.9),.06,y.metal),s(r(1.04,2.75,.9),r(1.04,2.75,1.9),.06,y.metal),t(i(1.8,.16,.22,.05),y.dark,0,2.82,.9);let a=[];for(let f=0;f<4;f++)t(new di(.07,12),y.lamp,-.6+f*.4,2.82,.78,e,0,Math.PI,0),a.push(ge(16773853,.9,e,-.6+f*.4,2.82,.75));for(let f of[-.85,.85])a.push(ge(16773853,1.2,e,f,1.2,-2.5));for(let f of[-.85,.85])t(i(.35,.18,.08,.04),y.lamp,f,1.2,-2.42);t(i(2.3,.08,1.5,.03),y.metal,0,1.78,1.6);for(let[f,p,g]of[[-.5,1.4,.6],[.4,1.7,.7],[.5,1.1,.45]])t(i(g,g*.8,g,.04),y.dark,f,1.82+g*.4,p);t(new Fe(.02,.02,1.6,4),y.metal,.9,3.5,1.9);let l=ge(16728128,.6,e,.9,4.3,1.9);for(let f=0;f<3;f++)t(i(.06,.06,.5,.02),y.metal,1.33,.75+f*.28,-.2);t(i(.1,.4,1,.04),y.orange,-1.32,1.3,1);let c=[],d=new Le(.46,.2,12,28);for(let f of[-1.65,0,1.65])for(let p of[-1.5,1.5]){let g=new ce;g.position.set(p,.62,f),n.add(g);let x=t(d,y.rubber,0,0,0,g,0,Math.PI/2,0);for(let v=0;v<14;v++){let m=v/14*Math.PI*2;t(new Ke(.42,.06,.1),y.rubber,0,Math.cos(m)*.64,Math.sin(m)*.64,g,m,0,0)}t(new Fe(.34,.34,.3,20),y.metal,0,0,0,g,0,0,Math.PI/2);for(let v=0;v<5;v++)t(new Ke(.32,.06,.06),y.dark,p>0?.16:-.16,0,0,g,v*Math.PI/5,0,0).scale.set(.3,1,9);t(new Fe(.1,.1,.34,10),y.chrome,0,0,0,g,0,0,Math.PI/2),s(r(p*.62,.95,f),r(p*.95,.66,f),.07,y.metal,n),s(r(p*.7,1.15,f+.3),r(p*.95,.75,f),.04,y.chrome,n),c.push(g)}let u=new aa(16773853,0,60,.5,.5,1.2);return u.position.set(0,1.2,-2.4),u.target.position.set(0,0,-20),e.add(u,u.target),{g:n,body:e,wheels:c,tip:l,lamp:u,heads:a}}function Hd(n,e,t=0){if(yn)return yn;let i=OT();return h.scene.add(i.g),yn={...i,x:n,z:e,y:ue(n,e),h:t,speed:0,vy:0,lookYaw:0,pitch:-.05,spin:0,hitT:0,air:!1},yn.collider=h.colliders.add({x:n,z:e,r:2,kind:"rover"}),sm(0),yn}function Nd(){return yn}function cy(){return yn?{x:+yn.x.toFixed(1),z:+yn.z.toFixed(1),h:+yn.h.toFixed(2)}:null}function Ud(n,e){return ue(n,e)}function sm(n){let e=yn,t=Math.sin(e.h),i=Math.cos(e.h),s=-t,r=-i,o=i,a=-t,l=Ud(e.x+s*1.8,e.z+r*1.8),c=Ud(e.x-s*1.8,e.z-r*1.8),d=Ud(e.x-o*1.3,e.z-a*1.3),u=Ud(e.x+o*1.3,e.z+a*1.3),f=Math.atan2(l-c,3.6),p=Math.atan2(u-d,2.6);e.g.position.set(e.x,e.y,e.z),im.set(e.air?e.g.rotation.x:f,e.h,e.air?e.g.rotation.z:-p,"YXZ"),e.air||e.g.rotation.copy(im),e.spin+=e.speed*n/.55;for(let g of e.wheels)g.rotation.x=-e.spin;return(l+c+d+u)/4}function hy(){yn&&(h.driving=!0,yn.lookYaw=0,yn.pitch=-.08,h.colliders.remove(yn.collider),X.play("place"))}function rm(n){let e=yn;if(!e)return;h.driving=!1,X.engine(0);let t=Math.cos(e.h),i=Math.sin(e.h),s=e.x+t*3,r=e.z-i*3;h.colliders.overlaps(s,r,.5)&&(s=e.x-t*3,r=e.z+i*3),n.pos.set(s,ue(s,r),r),n.vel.set(0,0,0),n.yaw=e.h+e.lookYaw,n.pitch=e.pitch,e.speed=0,e.lamp.intensity=0,e.collider=h.colliders.add({x:e.x,z:e.z,r:2,kind:"rover"})}function dy(n,e,t){if(!yn)return;let i=yn;if(i.tip.visible=Math.sin(performance.now()*.005)>0,!h.driving){i.y=sm(0);return}h.locked&&(i.lookYaw=Tt.clamp(i.lookYaw-Me.dx*Me.sens,-2.4,2.4),i.pitch=Tt.clamp(i.pitch-Me.dy*Me.sens,-1,.9));let s=(Me.down("KeyW")||Me.down("ArrowUp")?1:0)-(Me.down("KeyS")||Me.down("ArrowDown")?1:0),r=(Me.down("KeyA")||Me.down("ArrowLeft")?1:0)-(Me.down("KeyD")||Me.down("ArrowRight")?1:0),o=(Me.down("ShiftLeft")?28:17)*(Xt("terrain")?1.3:1);i.air||(s>0?i.speed+=(i.speed<0?22:11)*n:s<0?i.speed-=(i.speed>0?22:7)*n:i.speed*=1-.7*n,Me.down("Space")&&(i.speed*=1-3.5*n),i.speed=Tt.clamp(i.speed,-7,o),i.speed>o&&(i.speed-=20*n),i.h+=r*n*1.5*Tt.clamp(i.speed/5,-1,1)),gc.set(-Math.sin(i.h),0,-Math.cos(i.h)),h.stats.driven=(h.stats.driven||0)+Math.abs(i.speed)*n,i.x=Tt.clamp(i.x+gc.x*i.speed*n,-Ge+125,Ge-125),i.z=Tt.clamp(i.z+gc.z*i.speed*n,-Ge+125,Ge-125);for(let c of h.colliders.query(i.x,i.z)){c.kind==="flora"&&Math.abs(i.speed)>0;let d=i.x-c.x,u=i.z-c.z,f=Math.hypot(d,u),p=c.r+1.9;if(f<p&&f>.001){if(c.kind==="rock"&&c.r<1.3)continue;i.x=c.x+d/f*p,i.z=c.z+u/f*p,Math.abs(i.speed)>5&&(X.play("land"),le.dustPuff(new S(i.x,i.y+1,i.z),6,2)),i.speed*=-.25}}if(i.hitT-=n,Math.abs(i.speed)>6&&i.hitT<=0)for(let c of h.enemies)c.dead||Math.hypot(c.pos.x-i.x,c.pos.z-i.z)<2.6+c.scale&&(vo(c,Math.abs(i.speed)*4,"player"),i.hitT=.4,i.speed*=.7,le.burst(new S(c.pos.x,c.pos.y+1,c.pos.z),[1,.5,.2],20,6));let a=ue(i.x,i.z);if(i.air)i.vy-=fe.gravity*n,i.y+=i.vy*n,i.y<=a&&(i.y=a,i.air=!1,i.vy<-5&&(X.play("land"),le.dustPuff(new S(i.x,i.y,i.z),14,3)),i.vy=0);else{let c=i.y+i.vy*n-.5*fe.gravity*n*n;if(a<c-.25&&i.vy>1.5&&Math.abs(i.speed)>12)i.air=!0,i.vy=Math.min(i.vy,7),i.y=c;else{let d=(a-i.y)/Math.max(n,.001);i.vy=i.vy*.6+d*.4,i.y=a}}if(sm(n),Math.abs(i.speed)>4&&!i.air&&Math.random()<.6){let c=new S(i.x-gc.x*2.5+(Math.random()-.5)*2,i.y+.3,i.z-gc.z*2.5);le.dustPuff(c,1,.5)}i.lamp.intensity=h.time.night>.3?80:0;for(let c of i.heads)c.visible=h.time.night>.3;ly.setFromEuler(im.set(i.pitch,i.lookYaw,0,"YXZ")),t.quaternion.copy(i.body.getWorldQuaternion(new mn)).multiply(ly);let l=new S(0,2.15,-.7).applyQuaternion(i.g.quaternion).add(i.g.position);t.position.copy(l),t.getWorldDirection(e.fwd),e.pos.set(i.x,i.y,i.z),e.vel.set(0,0,0),e.inLife=!0,e.o2=Math.min(e.maxO2,e.o2+20*n),e.energy=Math.min(100,e.energy+10*n),e.hurtT=Math.max(0,e.hurtT-n),X.engine(Math.abs(i.speed)/28)}function uy(){return yn?Math.round(Math.abs(yn.speed)*3.6):0}var Ya,am;function FT(){Ya||(am=new ke({color:16758364,transparent:!0,opacity:.35,blending:He,depthWrite:!1,side:bt,fog:!1}),Ya=new Q(new Fe(.6,1.2,160,16,1,!0),am),Ya.frustumCulled=!1,h.scene.add(Ya))}function BT(){FT();let n=h.waypoint;Ya.visible=!!n,n&&(Ya.position.set(n.x,ue(n.x,n.z)+80,n.z),am.opacity=.22+Math.sin(performance.now()*.004)*.08,Math.hypot(h.player.pos.x-n.x,h.player.pos.z-n.z)<6&&(h.waypoint=null,h.events.emit("toast","\u2713 \u5DF2\u5230\u8FBE\u5BFC\u822A\u70B9"),X.play("objective")))}var zd=[],lm=-1,vc=0,om=null,fy=[[1,.6,.2],[.5,.9,1],[1,.4,.7],[.7,1,.5],[1,.9,.4],[.8,.6,1]];function GT(n){let e=fy[Math.floor(Math.random()*fy.length)];zd.push({pos:new S(n.x+(Math.random()-.5)*6,n.y+2,n.z+(Math.random()-.5)*6),vel:new S((Math.random()-.5)*4,34+Math.random()*10,(Math.random()-.5)*4),t:1.3+Math.random()*.6,c:e}),X.play("jet")}function VT(n){let t=16+Math.random()*8;for(let i=0;i<90;i++){let s=Math.random()*2-1,r=Math.random()*6.283,o=Math.sqrt(1-s*s);le.firework(n.pos,o*Math.cos(r)*t,s*t,o*Math.sin(r)*t,n.c)}X.play("kill")}function py(n){BT();let e=h.time.t;if(vc<=0&&h.time.day%5===0&&lm!==h.time.day&&e>.74&&e<.8&&h.colony.pop>=4&&(om=h.buildings.find(t=>t.type==="plaza"&&t.powered),om&&(lm=h.time.day,vc=60,h.stats.festivals=(h.stats.festivals||0)+1,h.events.emit("festival"),Lt("\u82CF\u5FF5 \xB7 \u6559\u5E08",`\u4ECA\u5929\u662F\u7B2C ${h.time.day} \u4E2A\u706B\u661F\u65E5\u2014\u2014\u6B96\u6C11\u5730\u8282\uFF01\u5927\u5BB6\u90FD\u5230\u5E7F\u573A\u4E0A\u6765\u4E86\uFF0C\u5B69\u5B50\u4EEC\u8BF4\u8981\u653E\u70DF\u82B1\u7ED9\u5730\u7403\u770B\u3002`))),vc>0){vc-=n,h.festival=!0;let t=om;t&&Math.random()<n*1.6&&GT({x:t.x,y:t.y,z:t.z})}else h.festival=!1;for(let t=zd.length-1;t>=0;t--){let i=zd[t];i.t-=n,i.vel.y-=9*n,i.pos.addScaledVector(i.vel,n);for(let s=0;s<3;s++)le.trail(i.pos,[1,.85,.6],1.6);i.t<=0&&(VT(i),zd.splice(t,1))}}function my(){vc=0,lm=-1,h.time.day=5,h.time.t=.745}var Ts=null,gy=[],vy=[],xc=0,Ks,cm,kd,WT={mars:[-420,-380],europa:[400,-420],kepler:[-380,420]}[ot]||[-420,-380],_o=2400;function XT(){Ts=new ce;let[n,e]=WT,t=ue(n,e);Ts.position.set(n,t-2,e);let i=(a,l,c,d,u)=>{let f=new Q(a,l);return f.position.set(c,d,u),f.castShadow=!0,Ts.add(f),f};for(let a=0;a<4;a++)i(new Fe(38-a*8,42-a*8,10,6),a%2?y.white:y.panel,0,5+a*10,0);for(let a=0;a<6;a++){let l=a*Math.PI/3,c=new S(Math.cos(l)*46,0,Math.sin(l)*46),d=new S(0,120,0),u=d.clone().sub(c),f=i(new Fe(2.2,3.2,u.length(),8),y.metal,0,0,0);f.position.copy(c).add(d).multiplyScalar(.5),f.quaternion.setFromUnitVectors(new S(0,1,0),u.normalize())}i(new Fe(6,14,160,6),y.white,0,120,0);let s=new ke({color:10477823,transparent:!0,opacity:.55,fog:!1,blending:He,depthWrite:!1});for(let a=0;a<3;a++){let l=a*Math.PI*2/3;i(new Fe(.9,1.4,_o,6),s,Math.cos(l)*3,200+_o/2,Math.sin(l)*3).castShadow=!1}let r=new ve({color:2240576,metalness:.8,roughness:.4,fog:!1});i(new Fe(1.6,1.6,_o,8),r,0,200+_o/2,0);for(let a=260;a<_o;a+=180)vy.push(ge(16726570,18,Ts,0,a,0));for(let a=0;a<4;a++){let l=new ce,c=new Q(new Fe(7,7,10,12),new ve({color:15262940,metalness:.3,roughness:.5,fog:!1}));l.add(c,ge(10477823,40,null,0,0,0)),Ts.add(l),gy.push({g:l,t:a/4,dir:a%2?1:-1})}Ks=new ce,Ks.position.y=200+_o,Ts.add(Ks);let o=new ve({color:9080729,metalness:.8,roughness:.35,emissive:1122867,fog:!1});cm=new Q(new Le(160,9,12,96),o),cm.rotation.x=Math.PI/2,Ks.add(cm),kd=new Q(new Le(110,5,10,80),o),kd.rotation.x=Math.PI/2,kd.position.y=-40,Ks.add(kd);for(let a=0;a<6;a++){let l=new Q(new Fe(2,2,160,6),o);l.rotation.z=Math.PI/2,l.rotation.y=a*Math.PI/6,Ks.add(l)}Ks.add(new Q(new Be(30,24,16),o));for(let a=0;a<24;a++){let l=a/24*Math.PI*2;Ks.add(ge(a%2?16767392:10477823,30,null,Math.cos(l)*160,0,Math.sin(l)*160))}Ts.scale.y=.001,h.scene.add(Ts)}function xy(n){if(!Ts){if((h.cityLevel||0)<3)return;XT(),xc=h.megaSeen?1:0,h.megaSeen||(h.megaSeen=!0,X.play("rumble"),Lt("\u65B9\u821F \xB7 AI","\u8F68\u9053\u5929\u68AF\u5408\u9F99\u3002\u4ECE\u4ECA\u5929\u8D77\uFF0C\u6B96\u6C11\u5730\u4E0E\u8F68\u9053\u4E4B\u95F4\u53EA\u9694\u4E00\u90E8\u7535\u68AF\u3002\u62AC\u5934\u770B\u2014\u2014\u5B83\u5C31\u5728\u5730\u5E73\u7EBF\u4E0A\u3002"),h.events.emit("toast","\u8F68\u9053\u5929\u68AF\u5B8C\u5DE5"))}xc<1&&(xc=Math.min(1,xc+n/12),Ts.scale.y=Math.max(.001,1-Math.pow(1-xc,3)));let e=performance.now()*.001;for(let t of gy)t.t+=n*.012*t.dir,t.t>1&&(t.t=1,t.dir=-1),t.t<0&&(t.t=0,t.dir=1),t.g.position.y=210+t.t*(_o-20);vy.forEach((t,i)=>{t.visible=Math.sin(e*2+i*.6)>.2}),Ks.rotation.y+=n*.02}var qT="attribute vec2 p; void main(){ gl_Position = vec4(p, 0.0, 1.0); }",YT=`precision highp float;
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
}`;function yy(n,e,t=7){let i=document.createElement("canvas");i.id="warp",document.body.appendChild(i);let s=document.createElement("div");s.id="warp-cap",s.innerHTML=n.map((L,R)=>`<p style="animation-delay:${.8+R*1.1}s">${L}</p>`).join(""),document.body.appendChild(s);let r=document.createElement("div");r.id="warp-flash",document.body.appendChild(r);let o=i.getContext("webgl"),a=()=>{r.classList.add("on"),setTimeout(e,650)};if(!o){setTimeout(a,t*1e3);return}let l=(L,R)=>{let P=o.createShader(L);return o.shaderSource(P,R),o.compileShader(P),P},c=o.createProgram();o.attachShader(c,l(o.VERTEX_SHADER,qT)),o.attachShader(c,l(o.FRAGMENT_SHADER,YT)),o.linkProgram(c),o.useProgram(c);let d=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,d),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),o.STATIC_DRAW);let u=o.getAttribLocation(c,"p");o.enableVertexAttribArray(u),o.vertexAttribPointer(u,2,o.FLOAT,!1,0,0);let f=L=>o.getUniformLocation(c,L),p=f("uR"),g=f("uT"),x=f("uK"),v=f("uE"),m=performance.now(),E=0,b=m,M=!1;(function L(R){let P=Math.min(.05,(R-b)/1e3);b=R;let I=(R-m)/1e3,_=Math.min(1,I/t),w=Math.min(1,1280/innerWidth),U=Math.round(innerWidth*w),O=Math.round(innerHeight*w);(i.width!==U||i.height!==O)&&(i.width=U,i.height=O),o.viewport(0,0,U,O);let F=Math.min(1,I/1.8)*(1-Math.max(0,_-.85)*2);E+=P*(.5+F*1.2),o.uniform2f(p,U,O),o.uniform1f(g,E),o.uniform1f(x,F),o.uniform1f(v,Math.max(0,(_-.7)/.3)),o.drawArrays(o.TRIANGLES,0,3),_>=1&&!M&&(M=!0,a()),(!M||I<t+1)&&requestAnimationFrame(L)})(m)}var To=[],hm=40,by={value:0},My=(()=>{let n=[];for(let e=0;e<=24;e++){let t=e/24;n.push(new $(1.8+Math.pow(t,1.5)*13,t*75))}return new ji(n,48,0,Math.PI*2)})();function Ey(n){return new ht({uniforms:{uT:by,uC:{value:new re(n)},uA:{value:0},uSeed:{value:Math.random()*10}},vertexShader:`uniform float uT, uSeed; varying vec2 vUv; varying float vF; varying vec3 vW;
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
      }`,transparent:!0,depthWrite:!1,side:bt})}function wy(){let n=h.player.pos,e=Math.random()*Math.PI*2,t=120+Math.random()*120,i=Tt.clamp(n.x+Math.cos(e)*t,-Ge+200,Ge-200),s=Tt.clamp(n.z+Math.sin(e)*t,-Ge+200,Ge-200);if(h.buildings.some(c=>Math.hypot(c.x-i,c.z-s)<40))return;let r=fe.id==="kepler"?12103824:13142620,o=new Q(My,Ey(r));o.frustumCulled=!1,o.renderOrder=3,o.position.set(i,ue(i,s)-1,s),h.scene.add(o);let a=new Q(My,Ey(r));a.scale.set(.55,.9,.55),o.add(a),a.material.uniforms.uSeed.value+=3;let l=Math.random()*Math.PI*2;To.push({m:o,inner:a,x:i,z:s,life:70+Math.random()*40,t:0,head:l,speed:3+Math.random()*2.5,snd:0,carried:0})}function Sy(){return wy(),To[To.length-1]}function _y(n){by.value+=n;let e=fe.id!=="europa"&&h.storm<.3&&h.time.night<.2&&h.started&&!h.ended;hm-=n,e&&hm<=0&&(hm=70+Math.random()*90,To.length<2&&wy());let t=h.player,i=t.pos;for(let s=To.length-1;s>=0;s--){let r=To[s];r.t+=n,r.life-=n,r.head+=(Math.random()-.5)*n*.8,r.x+=Math.cos(r.head)*r.speed*n,r.z+=Math.sin(r.head)*r.speed*n,(Math.abs(r.x)>Ge-200||Math.abs(r.z)>Ge-200)&&(r.head+=Math.PI*n);for(let c of h.buildings){let d=r.x-c.x,u=r.z-c.z;if(Math.hypot(d,u)<c.def.r+18){r.head=Math.atan2(u,d);break}}let o=ue(r.x,r.z);r.m.position.set(r.x,o-1,r.z),r.m.rotation.y-=n*2.4,r.inner.rotation.y-=n*2.2;let a=Math.min(1,r.t/5,Math.max(0,r.life)/6);if(r.m.material.uniforms.uA.value=a,r.inner.material.uniforms.uA.value=a*.8,Math.random()<n*18*a){let c=Math.random()*Math.PI*2,d=2+Math.random()*5;le.dustPuff(new S(r.x+Math.cos(c)*d,o+.5,r.z+Math.sin(c)*d),1,1.5)}Math.random()<n*6*a&&le.rise(new S(r.x,o+1+Math.random()*10,r.z),[.75,.5,.35],4),r.snd-=n;let l=Math.hypot(i.x-r.x,i.z-r.z);if(r.snd<=0&&l<110&&(r.snd=.55,X.play("whoosh",new S(r.x,o,r.z))),!h.driving&&!t.dead&&a>.5){let c=i.y-o,d=3.2+Math.max(0,c)*.12;if(l<d&&c<46){let u=i.x-r.x,f=i.z-r.z,p=l||1;t.vel.y=Math.max(t.vel.y,8+(1-l/d)*4),t.vel.x+=(-f/p*9-u/p*2-t.vel.x)*Math.min(1,n*4),t.vel.z+=(u/p*9-f/p*2-t.vel.z)*Math.min(1,n*4),t.yaw-=n*1.6,h.shake=Math.max(h.shake||0,.25),t.onGround=!1,r.inside||(r.inside=!0,h.stats.devils=(h.stats.devils||0)+1,h.events.emit("toast","\u88AB\u5C18\u5377\u98CE\u5377\u8D77\u6765\u4E86\uFF01")),r.carried+=n}else if(r.inside&&(l>d+1||c>=46)){r.inside=!1;let u=i.x-r.x,f=i.z-r.z,p=l||1;if(t.vel.x+=u/p*10,t.vel.z+=f/p*10,r.carried>1.5&&!r.dropped){r.dropped=!0;let g=Math.atan2(f,u),x=i.x+Math.cos(g)*22,v=i.z+Math.sin(g)*22;h.colliders.overlaps(x,v,3)||Cr("silicon",x,v,8+Math.floor(Math.random()*6))}}}r.life<=0&&(h.scene.remove(r.m),r.m.material.dispose(),r.inner.material.dispose(),To.splice(s,1))}}var um=3,jT={habitat:[16761466,3.2,1],apartment:[16761466,6,1.3],greenhouse:[16735432,2.6,1.1],vfarm:[16735432,4,1.2],lamp:[16765594,3.9,1.15],reactor:[5223167,4,1.4],plaza:[9426175,3.5,1.2],lab:[10479871,3,.9],fabricator:[16752704,2.5,.9],oxygen:[10477823,5,.45],extractor:[10477823,6,.5],lifehub:[10485712,3,1],trade:[16765056,3,1],launch:[16777215,5,1.4],monument:[16769184,6,1.3],terraformer:[10485728,6,1.4],beacon:[16736336,3,.6],landing:[16773328,2,1.1]},Mc=[],yc,dm=0;function ZT(){if(yc)return yc;let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);for(let i=0;i<=10;i++){let s=i/10,r=Math.pow(1-s,2.2)*.9;t.addColorStop(s,`rgba(255,255,255,${r.toFixed(3)})`)}return e.fillStyle=t,e.fillRect(0,0,128,128),yc=new Zt(n),yc.colorSpace=_t,yc}var Ay=new Fe(.22,1.9,4,24,1,!0);Ay.translate(0,-2,0);function KT(n){return new ht({uniforms:{uC:{value:new re(n)},uI:{value:0}},vertexShader:`varying float vY; varying vec3 vN, vV;
      void main(){ vY = position.y; vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }`,fragmentShader:`uniform vec3 uC; uniform float uI; varying float vY; varying vec3 vN, vV;
      void main(){ float h = clamp(1.0 + vY/4.0, 0.0, 1.0); float f = abs(dot(normalize(vN), normalize(vV)));
        float a = pow(h, 1.6) * pow(f, 1.5) * uI; gl_FragColor = vec4(uC * a, a); }`,transparent:!0,blending:He,depthWrite:!1,side:bt})}var Ry=new Gn(1,1);Ry.rotateX(-Math.PI/2);function Cy(n,e=!0){um=e?3:0;for(let t=0;t<um;t++){let i=new Ri(16777215,0,34,1.7);i.userData={b:null,i:0},n.add(i),Mc.push(i)}}function Od(n){return jT[n.type]}function JT(n,e){let t=n.anim;if(t._pool!==void 0)return t._pool;let i=new ke({map:ZT(),color:e[0],transparent:!0,opacity:0,blending:He,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),s=new Q(Ry,i),r=Math.max(5,n.def.r*2.6)*e[2]*1.6;s.scale.set(r,1,r),s.position.set(0,.18,0),s.renderOrder=2,s.castShadow=s.receiveShadow=!1;let o=n.baseScale||1;if(s.scale.x/=o,s.scale.z/=o,s.position.y/=o,n.group.add(s),t._pool=s,n.type==="lamp"){let a=new Q(Ay,KT(e[0]));a.position.y=4.1/o,a.scale.setScalar(1/o),n.group.add(a),s.userData.cone=a}return s}function fm(n){let e=h.time.night,t=h.player.pos,i=Math.min(1,Math.max(0,(e-.08)/.5))*(1-(h.storm||0)*.3);for(let r of h.buildings){let o=Od(r);if(!o)continue;let a=JT(r,o),l=r.powered!==!1&&!r.broken&&r.buildT>=1,c=r.type==="lamp"||r.type==="habitat"?1-(Math.random()<.004?.4:0):1,d=l?i*.32*c:0;a.material.opacity+=(d-a.material.opacity)*Math.min(1,n*3),a.visible=a.material.opacity>.004;let u=a.userData.cone;u&&(u.material.uniforms.uI.value=a.material.opacity*1.1*(1-(h.storm||0)*.5),u.visible=a.visible)}dm-=n;let s=null;if(dm<=0&&(dm=.3,s=[],i>.01)){for(let r of h.buildings){let o=Od(r);if(!o||r.broken||r.powered===!1||r.buildT<1)continue;let a=Math.hypot(r.x-t.x,r.z-t.z);a>140||s.push({b:r,d:a/o[2]})}s.sort((r,o)=>r.d-o.d),s.length=Math.min(s.length,um)}if(s){let r=new Set(s.map(a=>a.b)),o=s.filter(a=>!Mc.some(l=>l.userData.b===a.b)).map(a=>a.b);for(let a of Mc){let l=a.userData;l.b&&(!r.has(l.b)||!h.buildings.includes(l.b))&&(l.leaving=!0),!l.b&&o.length&&Ty(a,o.shift())}for(let a of Mc)a.userData.leaving&&a.intensity<.5&&o.length&&Ty(a,o.shift())}for(let r of Mc){let o=r.userData,a=0;o.b&&!o.leaving&&(a=Od(o.b)[2]*70*i),r.intensity+=(a-r.intensity)*Math.min(1,n*(a>r.intensity?2:4)),o.leaving&&r.intensity<.05&&(o.b=null,o.leaving=!1,r.intensity=0)}}function Ty(n,e){let t=Od(e);n.userData.b=e,n.userData.leaving=!1,n.color.setHex(t[0]),n.intensity=0,n.position.set(e.x,e.y+t[1],e.z),n.distance=Math.max(24,e.def.r*6)*t[2]}var qe=n=>document.getElementById(n);h.debug=/[?&]debug/.test(location.search);var Fi=qe("c"),on=new ra({canvas:Fi,antialias:!0,powerPreference:"high-performance"});on.setPixelRatio(Math.min(window.devicePixelRatio,1.5));on.setSize(window.innerWidth,window.innerHeight);on.shadowMap.enabled=!0;on.shadowMap.type=Qf;on.toneMapping=io;on.toneMappingExposure=1;var ns="high";try{ns=localStorage.getItem("starport-quality")||((navigator.hardwareConcurrency||8)<=4?"mid":"high")}catch{}function Vd(n,e){ns=n,on.setPixelRatio(n==="high"?Math.min(window.devicePixelRatio,1.5):n==="mid"?1:.75),on.setSize(window.innerWidth,window.innerHeight);let t=n!=="low";on.shadowMap.enabled!==t&&(on.shadowMap.enabled=t,e&&h.scene.traverse(i=>{i.material&&[].concat(i.material).forEach(s=>{s.needsUpdate=!0})})),_n&&(_n.setPixelRatio(on.getPixelRatio()),_n.setSize(window.innerWidth,window.innerHeight))}var _n=null,Wd=null;function QT(){let n=new ln(window.innerWidth*on.getPixelRatio(),window.innerHeight*on.getPixelRatio(),{type:wn});_n=new Uh(on,n),_n.addPass(new Hh(ii,tt)),ts=new fa(ii,tt,window.innerWidth,window.innerHeight),ts.output=fa.OUTPUT.Default,ts.blendIntensity=1,ts.overrideVisibility=function(){let e=this._visibilityCache;this.scene.traverse(t=>{e.set(t,t.visible);let i=t.material;(t.isPoints||t.isLine||t.isSprite||t.userData.noAO||i&&!Array.isArray(i)&&i.transparent&&(i.depthWrite===!1||i.blending===He))&&(t.visible=!1)})},ts.updateGtaoMaterial({radius:1.6,distanceExponent:1.4,thickness:1.5,scale:1.2,samples:12}),ts.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),_n.addPass(ts),Ka=new so({uniforms:{tDiffuse:{value:null},uSun:{value:new $(.5,.5)},uK:{value:0},uAsp:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uSun; uniform float uK, uAsp; varying vec2 vUv;
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
      }`}),_n.addPass(Ka),Wd=new ua(new $(window.innerWidth,window.innerHeight),.55,.5,.88),_n.addPass(Wd),_n.addPass(new Nh),Xd=new so({uniforms:{tDiffuse:{value:null},uT:{value:0},uNight:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uT, uNight; varying vec2 vUv;
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
      }`}),_n.addPass(Xd),Py=new kh(window.innerWidth*on.getPixelRatio(),window.innerHeight*on.getPixelRatio()),_n.addPass(Py)}var Xd=null,ts=null,Ka=null,Py=null,Or=new S;function Fd(){if(Hv(tt.position,ii.fog.color),ns==="high"&&_n){Wd.strength=.3+h.time.night*.22,Wd.threshold=.9,Or.copy(tt.position).addScaledVector(In,1e3).project(tt);let e=Or.z<1&&Math.abs(Or.x)<1.6&&Math.abs(Or.y)<1.6?Tt.smoothstep(In.y,-.02,.12)*(1-h.storm)*(1-Tt.smoothstep(Math.max(Math.abs(Or.x),Math.abs(Or.y)),1,1.6)):0;Ka.uniforms.uK.value+=(e-Ka.uniforms.uK.value)*.1,Ka.uniforms.uSun.value.set(Or.x*.5+.5,Or.y*.5+.5),Ka.uniforms.uAsp.value=tt.aspect,Xd.uniforms.uT.value=performance.now()*.001%100,Xd.uniforms.uNight.value=h.time.night,_n.render()}else on.render(ii,tt)}Vd(ns,!1);var ii=new as,tt=new fn(72,window.innerWidth/window.innerHeight,.1,6e3);QT();h.scene=ii;h.camera=tt;h.renderer=on;h.colliders=new Bh(16);window.addEventListener("resize",()=>{tt.aspect=window.innerWidth/window.innerHeight,tt.updateProjectionMatrix(),on.setSize(window.innerWidth,window.innerHeight),_n&&_n.setSize(window.innerWidth,window.innerHeight),ts&&ts.setSize(window.innerWidth,window.innerHeight)});hx();h.hiShadows=ns==="high";Av(ii);Iv(ii);Uv(ii);Vv(ii);Cy(ii,ns==="high");var Qa=Ox();Qa.group.position.set(wt.x,ue(wt.x,wt.z)+.1,wt.z);Qa.group.rotation.y=.6;ii.add(Qa.group);h.colliders.add({x:wt.x,z:wt.z,r:3.4,kind:"lander"});var Je=new fd(tt);h.player=Je;d1(tt);i1(Fi);X1(Lv(350));Vp(ii);h.requestLock=()=>{if(h.debug){h.locked=!0;return}let n=()=>setTimeout(()=>{if(!h.locked&&h.started&&!h.menuOpen)try{let e=Fi.requestPointerLock();e&&e.catch&&e.catch(()=>{})}catch{}},1100);try{let e=Fi.requestPointerLock();e&&e.catch&&e.catch(n)}catch{n()}};var By=0;document.addEventListener("pointerlockerror",()=>{++By<=2&&setTimeout(()=>{if(!h.locked&&h.started&&!h.menuOpen)try{Fi.requestPointerLock()}catch{}},1100)});document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===Fi&&(By=0),h.locked=document.pointerLockElement===Fi,!h.locked&&h.started&&!h.menuOpen&&!Je.dead&&!h.endingShown&&!h.cine&&Ss("pause")});window.addEventListener("keydown",n=>{n.code!=="Escape"&&h.started&&!h.locked&&!h.menuOpen&&!Je.dead&&!h.endingShown&&!h.cine&&!qe("clickhint").classList.contains("hidden")&&h.requestLock()});Fi.addEventListener("click",()=>{X.init(),h.started&&!h.locked&&!h.menuOpen&&!Je.dead&&h.requestLock()});function Qs(n){if(!h.started)return;let e={v:1,res:h.res,upgrades:h.upgrades,stats:h.stats,chapter:h.chapter,goalDone:h.goalDone,terraform:h.terraform,ended:h.ended,nights:h.nightsSurvived||0,city:h.cityLevel,pop:h.popTotal||0,launched:!!h.launched,rover:cy(),relics:h.relicsFound||[],plazaSeen:!!h.plazaSeen,mode:h.mode,diff:h.diffKey,morale:h.morale,waypoint:h.waypoint||null,megaSeen:!!h.megaSeen,tech:h.tech||{},rp:h.rp||0,requests:h.requests||[],time:{t:h.time.t,day:h.time.day},player:{x:Je.pos.x,z:Je.pos.z,yaw:Je.yaw,o2:Je.o2,hp:Je.health},buildings:kx(),nodes:nx(),colonists:v1(),storm:Yx()};try{localStorage.setItem(Gh,JSON.stringify(e)),n||Qt("\u5DF2\u4FDD\u5B58")}catch{n||Qt("\u4FDD\u5B58\u5931\u8D25")}}function $T(){try{return JSON.parse(localStorage.getItem(Gh))}catch{return null}}function e3(n){Object.assign(h.res,n.res),h.upgrades=n.upgrades||{},ix(n.nodes);for(let[e,t,i,s,r,o]of n.buildings)Yn[e]&&rd(e,t,i,s,r,!1,o||1);h.stats=n.stats,h.goalDone=n.goalDone||{},h.terraform=n.terraform||0,h.ended=!!n.ended,h.nightsSurvived=n.nights||0,Zx(h.terraform>=1),h.time.t=n.time.t,h.time.day=n.time.day,Je.pos.set(n.player.x,ue(n.player.x,n.player.z),n.player.z),Je.yaw=n.player.yaw,Je.o2=n.player.o2,Je.health=Math.max(30,n.player.hp),x1(n.colonists||[]),n.rover&&Hd(n.rover.x,n.rover.z,n.rover.h),h.relicsFound=n.relics||[],h.plazaSeen=!!n.plazaSeen,h.morale=n.morale,h.waypoint=n.waypoint||null,h.megaSeen=!!n.megaSeen,h.mode=n.mode||"story",h.diffKey=n.diff||"normal",h.tech=n.tech||{},h.rp=n.rp||0,h.requests=n.requests||[],h.cityLevel=n.city||0,h.popTotal=n.pop??(n.colonists||[]).length,h.launched=!!n.launched,Vp(ii),jx(n.storm),sc(n.chapter,!0),ys(),h.terraform>0&&Pp(Gy(),h.terraform)}var Gy=()=>h.buildings.filter(n=>n.type==="terraformer").map(n=>({x:n.x,z:n.z})),t3=fe.intro;document.querySelector(".logo span").textContent=fe.title;document.title="\u661F\u6E2F\uFF1A"+fe.title;xn.visited?.length&&(qe("touch-note").innerHTML="\u5DF2\u5F00\u62D3\uFF1A"+xn.visited.map(n=>`${Vn[n.id].name}\uFF08${n.pop} \u4EBA\uFF09`).join(" \xB7 "));qe("story").innerHTML=t3.map((n,e)=>`<p style="animation-delay:${.4+e*1.1}s">${n}</p>`).join("");var xi=$T();xi&&(qe("btn-continue").classList.remove("hidden"),qe("cont-info").textContent=`${xi.mode==="free"?"\u81EA\u7531":"\u5267\u60C5"} \xB7 ${fe.name} \xB7 ${zi[xi.chapter]?.title||""} \xB7 \u7B2C ${xi.time.day} \u65E5 \xB7 ${xi.pop??xi.colonists?.length??0} \u4F4D\u5C45\u6C11`);matchMedia("(pointer: coarse)").matches&&(qe("touch-note").innerHTML+="\u672C\u6E38\u620F\u9700\u8981\u952E\u76D8\u548C\u9F20\u6807\uFF0C\u8BF7\u5728\u7535\u8111\u4E0A\u6E38\u73A9\u3002");function n3(n){if(h.debug){setTimeout(n,1200);return}let e=qe("cine"),t=fe.intro;h.cine=!0,e.classList.remove("hidden","out"),qe("cine-lines").innerHTML=t.map((o,a)=>`<p style="animation-delay:${.6+a*2.1}s">${o}</p>`).join("");let i=!1,s=()=>{i||(i=!0,e.classList.add("out"),h.cine=!1,window.removeEventListener("keydown",r),window.removeEventListener("mousedown",s),setTimeout(()=>e.classList.add("hidden"),1500),setTimeout(n,900))},r=o=>{(o.code==="Space"||o.code==="Escape"||o.code==="Enter")&&s()};window.addEventListener("keydown",r),window.addEventListener("mousedown",s),setTimeout(s,1500+t.length*2100+1800)}function $a(n){if(X.init(),n&&xi)e3(xi),setTimeout(Rd,300);else{if(localStorage.removeItem(Gh),$v(),xn.carry&&ot!=="mars"){Object.assign(h.upgrades,xn.carry.upgrades||{});for(let e in xn.carry.res)h.res[e]+=xn.carry.res[e];h.upgrades.rover&&Hd(wt.x+10,wt.z+4,.5),setTimeout(()=>Qt("\u968F\u8230\u7269\u8D44\u5DF2\u5378\u8F7D\uFF0C\u6240\u6709\u88C5\u5907\u5DF2\u540C\u6B65"),4e3)}h.time.t=.29,h.mode=h.mode||"story",h.diffKey=h.diffKey||"normal",sc(0,!0),ni()?Ny(()=>{Rd(),setTimeout(()=>bo({k:"FREE MODE",title:fe.name,sub:`\u81EA\u7531\u5F00\u62D3 \xB7 ${Ra[h.diffKey].name}`}),1600),Lt("\u65B9\u821F \xB7 AI","\u81EA\u7531\u6A21\u5F0F\u5DF2\u542F\u52A8\u3002\u6CA1\u6709\u4EFB\u52A1\u6E05\u5355\uFF0C\u8FD9\u7247\u571F\u5730\u5B8C\u5168\u5C5E\u4E8E\u4F60\u3002\u5EFA\u597D\u7B2C\u4E00\u5EA7\u8BBE\u65BD\u540E\uFF0C\u5C45\u6C11\u548C\u6307\u6325\u4E2D\u5FC3\u4F1A\u9646\u7EED\u63D0\u51FA\u59D4\u6258\u3002"),Lt("\u65B9\u821F \xB7 AI","\u63D0\u793A\uFF1AB \u5EFA\u9020\uFF0CT \u79D1\u7814\uFF0CTab \u6B96\u6C11\u5730\u6863\u6848\u3002\u795D\u4F60\u597D\u8FD0\u3002")}):n3(()=>Ny(()=>{Rd(),setTimeout(()=>bo(zi[0]),1600),zi[0].radio.forEach(e=>Lt(e[0],e[1]))}))}S1(),oy(),ns!=="low"&&Bv(),qe("intro").classList.add("hidden"),document.body.classList.add("playing"),h.started=!0,h.requestLock()}var vi={mode:"story",diff:"normal",planet:"mars"};function ym(){let n=(t,i,s,r,o)=>`<button class="opt ${o?"on":""}" data-g="${t}" data-k="${i}"><b>${s}</b><span>${r}</span></button>`,e=vi.mode==="free"?`<h3>\u661F\u7403</h3><div class="opts">${Object.values(Vn).map(t=>n("planet",t.id,t.name,t.title+" \xB7 "+t.place,vi.planet===t.id)).join("")}</div>`:'<p class="sm">\u5267\u60C5\u4ECE\u706B\u661F\u5F00\u59CB\u3002\u5B8C\u6210\u6BCF\u9897\u661F\u7403\u7684\u6545\u4E8B\u540E\uFF0C\u4E58\u6B96\u6C11\u8230\u524D\u5F80\u4E0B\u4E00\u9897\u3002</p>';qe("intro-pane").innerHTML=`<h3>\u6A21\u5F0F</h3><div class="opts">${Object.entries(yx).map(([t,i])=>n("mode",t,i.name,i.desc,vi.mode===t)).join("")}</div>
    <h3>\u96BE\u5EA6</h3><div class="opts three">${Object.entries(Ra).map(([t,i])=>n("diff",t,i.name,i.desc,vi.diff===t)).join("")}</div>
    ${e}
    <button class="launch" id="btn-launch">\u51FA\u53D1</button>`,qe("intro-pane").dataset.k="setup",qe("intro-pane").classList.remove("hidden"),qe("intro-pane").querySelectorAll(".opt").forEach(t=>t.addEventListener("click",()=>{vi[t.dataset.g]=t.dataset.k,t.dataset.g==="mode"&&t.dataset.k==="story"&&(vi.planet="mars"),X.play("tick"),ym()})),qe("btn-launch").addEventListener("click",i3)}function i3(){let n=vi.mode==="story"?"mars":vi.planet;if(vi.mode==="story"){if((xn.visited?.length||xi)&&!confirm("\u5267\u60C5\u6A21\u5F0F\u4F1A\u4ECE\u706B\u661F\u91CD\u65B0\u5F00\u59CB\uFF0C\u5E76\u6E05\u9664\u6240\u6709\u661F\u7403\u7684\u8FDB\u5EA6\u3002\u786E\u5B9A\u5417\uFF1F"))return;Ep()}else{if(qd(n)&&!confirm(`\u5C06\u8986\u76D6 ${Vn[n].name} \u7684\u73B0\u6709\u5B58\u6863\uFF0C\u786E\u5B9A\u5417\uFF1F`))return;try{localStorage.removeItem(n==="mars"?"starport-newhome-v1":"starport-planet-"+n)}catch{}let t=yr();delete t.carry,t.planet=n,Ul(t)}if(n===ot){h.mode=vi.mode,h.diffKey=vi.diff,$a(!1);return}try{localStorage.setItem("starport-newgame",JSON.stringify({mode:vi.mode,diff:vi.diff}))}catch{}let e=yr();e.planet=n,Ul(e),location.href=location.pathname+(h.debug?"?debug":"")}qe("btn-new").addEventListener("click",()=>{if(X.init(),ot!=="mars"&&!xi&&xn.visited?.length&&!xn.freshFree){h.mode=xn.mode||"story",h.diffKey=xn.diff||"normal",$a(!1);return}ym()});try{let n=JSON.parse(localStorage.getItem("starport-newgame"));n&&(localStorage.removeItem("starport-newgame"),h.mode=n.mode,h.diffKey=n.diff,setTimeout(()=>$a(!1),60))}catch{}qe("btn-continue").addEventListener("click",()=>$a(!0));qe("tele-planet").textContent=`${fe.name} \xB7 ${fe.place}`;var s3=`<h3>\u64CD\u4F5C</h3><div class="keys">
  <div><kbd>W A S D</kbd><span>\u79FB\u52A8</span></div><div><kbd>\u9F20\u6807</kbd><span>\u73AF\u89C6</span></div>
  <div><kbd>Shift</kbd><span>\u51B2\u523A</span></div><div><kbd>\u7A7A\u683C</kbd><span>\u8DF3\u8DC3 / \u55B7\u6C14\u80CC\u5305</span></div>
  <div><kbd>\u5DE6\u952E</kbd><span>\u91C7\u77FF \xB7 \u5C04\u51FB \xB7 \u653E\u7F6E\u5EFA\u7B51</span></div><div><kbd>\u53F3\u952E</kbd><span>\u53D6\u6D88\u5EFA\u9020</span></div>
  <div><kbd>1</kbd><kbd>2</kbd><span>\u5207\u6362\u5DE5\u5177</span></div><div><kbd>B</kbd><span>\u5EFA\u9020\u84DD\u56FE</span></div>
  <div><kbd>E</kbd><span>\u4E92\u52A8 \xB7 \u4EA4\u8C08 \xB7 \u4E0A\u8F66</span></div><div><kbd>U</kbd><span>\u5347\u7EA7\u6CE8\u89C6\u7684\u5EFA\u7B51</span></div><div><kbd>T</kbd><span>\u79D1\u7814</span></div>
  <div><kbd>Q</kbd><span>\u5C0F\u661F\u626B\u63CF\u77FF\u85CF</span></div><div><kbd>M</kbd><span>\u661F\u7403\u5730\u56FE / \u5BFC\u822A</span></div><div><kbd>F</kbd><span>\u624B\u7535\u7B52</span></div><div><kbd>Tab</kbd><span>\u6B96\u6C11\u5730\u6863\u6848</span></div>
  <div><kbd>P</kbd><span>\u62CD\u7167\u6A21\u5F0F</span></div><div><kbd>Esc</kbd><span>\u6682\u505C</span></div></div>
  <h3>\u751F\u5B58</h3><p>\u6C27\u6C14\u4F1A\u6301\u7EED\u6D88\u8017\u3002\u7740\u9646\u8231\u3001\u5236\u6C27\u7AD9\u548C\u5C45\u4F4F\u7A79\u9876\u9644\u8FD1\u4F1A\u81EA\u52A8\u8865\u6C27\u3002\u5EFA\u597D\u4F4F\u623F\u3001\u6C27\u6C14\u3001\u98DF\u7269\u3001\u6C34\u548C\u7740\u9646\u573A\uFF0C\u79FB\u6C11\u98DE\u8239\u5C31\u4F1A\u5230\u6765\u3002\u591C\u91CC\u8981\u63D0\u9632\u9508\u8680\u86DB\u3002</p>`,Vy=n=>{let e=qe("intro-pane");if(!e.classList.contains("hidden")&&e.dataset.k===n.slice(0,20)){e.classList.add("hidden");return}e.dataset.k=n.slice(0,20),e.innerHTML=n,e.classList.remove("hidden"),X.play("tick")};qe("btn-t-help").addEventListener("click",()=>Vy(s3));qe("btn-t-achv").addEventListener("click",()=>Vy(J0()));ot!=="mars"&&!xi&&(qe("btn-new").textContent=`\u767B\u9646 ${fe.name}`);ot!=="mars"&&!xi&&xn.visited?.length&&qe("btn-setup").classList.remove("hidden");qe("btn-setup").addEventListener("click",()=>{X.init(),ym()});if(xn.autoResume&&xi){let n=yr();delete n.autoResume,Ul(n),setTimeout(()=>{$a(!0),Qt(`\u6B22\u8FCE\u56DE\u6765 \xB7 ${fe.name}`)},50)}qe("btn-save").addEventListener("click",()=>Qs(!1));qe("btn-archive").addEventListener("click",()=>W0(Y0()));qe("btn-achv").addEventListener("click",()=>W0(J0()));qe("btn-restart").addEventListener("click",()=>{confirm("\u5C06\u5220\u9664\u6240\u6709\u661F\u7403\u7684\u8FDB\u5EA6\uFF0C\u4ECE\u706B\u661F\u91CD\u65B0\u5F00\u59CB\u3002\u786E\u5B9A\u5417\uFF1F")&&(Ep(),h.started=!1,location.href=location.pathname+(h.debug?"?debug":""))});qe("vol").addEventListener("input",n=>X.setVolume(+n.target.value));qe("quality").value=ns;h.baseFov=72;try{let n=+localStorage.getItem("starport-fov");n>=60&&n<=100&&(h.baseFov=n,tt.fov=n,tt.updateProjectionMatrix(),qe("fov").value=n)}catch{}qe("fov").addEventListener("input",n=>{h.baseFov=+n.target.value,tt.fov=+n.target.value,tt.updateProjectionMatrix();try{localStorage.setItem("starport-fov",n.target.value)}catch{}});qe("quality").addEventListener("change",n=>{Vd(n.target.value,!0);try{localStorage.setItem("starport-quality",n.target.value)}catch{}});qe("sens").addEventListener("input",n=>{Me.sens=+n.target.value});qe("btn-respawn").addEventListener("click",()=>{h.driving&&rm(Je),Je.respawn(),qe("death").classList.add("hidden"),h.requestLock()});qe("btn-endcont").addEventListener("click",()=>{qe("ending").classList.add("hidden"),h.endingShown=!1,h.requestLock()});h.events.on("chapter",n=>bo(n));Wa.unlocked=n=>Ms(n).ok;Wa.relicLeft=()=>bs().found<bs().total;Wa.relicFound=()=>bs().found;h.events.on("request",n=>{Qt(`\u65B0\u59D4\u6258\uFF1A${n.text}`,"radio"),Lt(`${n.giver} \xB7 \u59D4\u6258`,n.line)});h.events.on("requestDone",n=>{Qt(`\u59D4\u6258\u5B8C\u6210\uFF1A${n.text}`,"check","good"),Lt(n.giver,["\u8C22\u8C22\u4F60\uFF01\u8FD9\u5E2E\u4E86\u5927\u5FD9\u3002","\u592A\u597D\u4E86\uFF0C\u5927\u5BB6\u90FD\u4F1A\u8BB0\u5F97\u7684\u3002","\u8F9B\u82E6\u4E86\uFF01\u8FD9\u662F\u4E00\u70B9\u5FC3\u610F\u3002"][Math.floor(Math.random()*3)])});h.events.on("researched",n=>{(n==="swarm"||n==="alloy")&&ys()});h.events.on("crafted",n=>{if(n!=="rover")return;let e=h.buildings.find(i=>i.type==="fabricator"),t=e||Je.pos;for(let i=0;i<12;i++){let s=i*.9,r=(e?e.def.r:0)+5+i,o=t.x+Math.cos(s)*r,a=t.z+Math.sin(s)*r;if(!h.colliders.overlaps(o,a,2.6)){Hd(o,a,-s);break}}Lt("\u65B9\u821F \xB7 AI","\u6F2B\u6E38\u8F66\u5DF2\u51FA\u5382\u3002\u8F66\u8231\u52A0\u538B\uFF0C\u53EF\u4EE5\u5728\u8F66\u91CC\u8865\u6C27\u3002\u5C0F\u5FC3\u522B\u5F00\u4E0B\u60AC\u5D16\u3002")});h.events.on("cityLevel",n=>{bo({k:`COLONY LEVEL ${["I","II","III","IV","V","VI"][h.cityLevel]}`,title:n.name,sub:`\u57CE\u5E02\u5347\u7EA7 \xB7 \u9886\u5730\u6269\u5C55\u81F3 ${n.r} \u7C73`});let e={1:["\u65B9\u821F \xB7 AI","\u6B96\u6C11\u5730\u5347\u7EA7\u4E3A\u5B9A\u5C45\u70B9\u3002\u9886\u5730\u6269\u5927\u4E86\uFF0C\u66F4\u8FDC\u7684\u571F\u5730\u53EF\u4EE5\u5EFA\u9020\u4E86\u3002"],2:["\u65B9\u821F \xB7 AI","\u5C0F\u9547\u89C4\u6A21\u8FBE\u6210\u3002\u516C\u5BD3\u5854\u4E0E\u5782\u76F4\u519C\u573A\u7684\u8BBE\u8BA1\u56FE\u5DF2\u89E3\u9501\u3002"],3:["\u65B9\u821F \xB7 AI","\u8FD9\u91CC\u5DF2\u7ECF\u662F\u4E00\u5EA7\u57CE\u5E02\u4E86\u3002\u751F\u6001\u4E2D\u67A2\u7684\u8BBE\u8BA1\u56FE\u5DF2\u89E3\u9501\u3002"],4:["\u65B9\u821F \xB7 AI","\u5927\u90FD\u4F1A\u3002\u591C\u91CC\uFF0C\u4ECE\u8F68\u9053\u4E0A\u80FD\u770B\u89C1\u4F60\u4EEC\u7684\u706F\u5149\u3002"],5:["\u65B9\u821F \xB7 AI","\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C\u661F\u6E2F\u300D\u2014\u2014\u4EBA\u7C7B\u53EF\u4EE5\u4ECE\u8FD9\u91CC\u98DE\u5411\u4E0B\u4E00\u9897\u661F\u7403\u4E86\u3002"]}[h.cityLevel];e&&Lt(e[0],e[1]),Qs(!0)});h.events.on("openBuild",()=>Ss("build"));h.events.on("death",n=>{X.laser(!1),setTimeout(()=>{if(h.endingShown){Je.respawn();return}qe("death-why").textContent=n,qe("death").classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock()},1500)});h.events.on("tide",n=>{X.play("night"),bo({k:"CRYSTAL TIDE",title:"\u6676\u6F6E\u4E4B\u591C",sub:`\u96F7\u8FBE\u63A2\u6D4B\u5230\u7EA6 ${n} \u4E2A\u4FE1\u53F7 \xB7 \u5B88\u4F4F\u6B96\u6C11\u5730`}),Lt("\u65B9\u821F \xB7 AI","\u8B66\u544A\uFF1A\u6676\u6F6E\u6B63\u5728\u903C\u8FD1\u3002\u6570\u91CF\u662F\u5E73\u65F6\u7684\u4E24\u500D\u2026\u2026\u5730\u9707\u4EEA\u8FD8\u8BB0\u5F55\u5230\u4E00\u4E2A\u5DE8\u5927\u7684\u4FE1\u53F7\uFF0C\u5B83\u6B63\u5728\u5411\u5730\u8868\u79FB\u52A8\u3002")});h.events.on("bossSpawn",()=>{Qt("\u6676\u6BCD\u7834\u571F\u800C\u51FA","boss","warn"),Lt("\u65B9\u821F \xB7 AI","\u662F\u6676\u6BCD\uFF01\u4F53\u957F\u8D85\u8FC7\u5341\u7C73\u3002\u5B83\u7684\u51B2\u51FB\u6CE2\u80FD\u9707\u788E\u5EFA\u7B51\u2014\u2014\u7528\u6B65\u67AA\u548C\u70AE\u5854\u96C6\u4E2D\u706B\u529B\uFF01")});h.events.on("bossDown",()=>{Qt("\u6676\u6BCD\u9668\u843D","boss","good"),Lt("\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u2026\u2026\u4F60\u4EEC\u505A\u5230\u4E86\u3002\u6574\u4E2A\u6307\u6325\u4E2D\u5FC3\u90FD\u5728\u6B22\u547C\u3002\u5B83\u7684\u6838\u5FC3\u91CC\u6709\u5927\u91CF\u7684\u949B\uFF0C\u62FF\u53BB\u5EFA\u8BBE\u5427\u3002")});var Iy=!0;h.events.on("nightfall",n=>{X.play("night"),Qt(`\u591C\u5E55\u964D\u4E34 \xB7 \u7EA6 ${n} \u4E2A\u79FB\u52A8\u4FE1\u53F7\u63A5\u8FD1`,"moon","warn"),Iy&&(Iy=!1,Lt("\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5B83\u4EEC\u6765\u4E86\u3002\u9508\u8680\u86DB\u4F1A\u653B\u51FB\u5EFA\u7B51\u548C\u4EBA\u3002\u7528\u6FC0\u5149\u6216\u6B65\u67AA\u51FB\u9000\u5B83\u4EEC\u2014\u2014\u5B83\u4EEC\u7684\u6676\u4F53\u6B8B\u9AB8\u91CC\u542B\u6709\u949B\u3002"))});h.events.on("broken",n=>Qt(`${n.def.name} \u53D7\u635F\u505C\u673A\uFF0C\u767D\u5929\u4F1A\u81EA\u52A8\u4FEE\u590D`,"warn","warn"));var Ly=!0;h.events.on("shuttleIncoming",n=>Qt(`\u79FB\u6C11\u98DE\u8239\u6B63\u5728\u964D\u843D \xB7 ${n} \u4EBA`,"ship"));h.events.on("colonistsArrived",n=>{n.length&&(Qt(`\u6B22\u8FCE\u56DE\u5BB6\uFF1A${n.map(e=>e.name).join("\u3001")}`),Ly&&h.stats.arrived<=4&&(Ly=!1,Lt(n[0].name,"\u4F60\u597D\u2026\u2026\u8FD9\u5C31\u662F\u706B\u661F\uFF1F\u6BD4\u7167\u7247\u4E0A\u8FD8\u8981\u7EA2\u3002\u8C22\u8C22\u4F60\uFF0C\u4E3A\u6211\u4EEC\u70B9\u4EAE\u4E86\u8FD9\u91CC\u7684\u706F\u3002")))});var r3={habitat:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5C45\u4F4F\u7A79\u9876\u52A0\u538B\u5B8C\u6210\u3002\u5BA4\u5185\u6E29\u5EA6 21 \u6444\u6C0F\u5EA6\uFF0C\u6E7F\u5EA6 45%\u3002\u8FD9\u662F\u706B\u661F\u4E0A\u7B2C\u4E00\u4E2A\u53EF\u4EE5\u8131\u4E0B\u5934\u76D4\u7684\u5730\u65B9\u3002"],greenhouse:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u6E29\u5BA4\u542F\u52A8\u3002\u7B2C\u4E00\u6279\u79CD\u5B50\u5DF2\u7ECF\u64AD\u4E0B\uFF1A\u571F\u8C46\u3001\u5C0F\u9EA6\u3001\u756A\u8304\u2026\u2026\u548C\u4E00\u682A\u5411\u65E5\u8475\u3002"],beacon:["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u6536\u5230\u7740\u9646\u573A\u7684\u4FE1\u6807\u4FE1\u53F7\u4E86\uFF01\u53EA\u8981\u6B96\u6C11\u5730\u80FD\u517B\u6D3B\u4ED6\u4EEC\uFF0C\u79FB\u6C11\u98DE\u8239\u5C31\u4F1A\u51FA\u53D1\u3002"],reactor:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u805A\u53D8\u53CD\u5E94\u5806\u70B9\u706B\u6210\u529F\u3002\u8F93\u51FA\u7A33\u5B9A\u3002"],terraformer:["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5927\u6C14\u6539\u9020\u5854\u2026\u2026\u542F\u52A8\u4E86\u3002\u6211\u4EEC\u89C1\u8BC1\u7684\uFF0C\u662F\u4E00\u9897\u661F\u7403\u7684\u82CF\u9192\u3002"],apartment:["\u65B9\u821F \xB7 AI","\u7B2C\u4E00\u5EA7\u516C\u5BD3\u5854\u843D\u6210\u3002\u57CE\u5E02\u5F00\u59CB\u5411\u5929\u7A7A\u751F\u957F\u3002"],launch:["\u65B9\u821F \xB7 AI","\u661F\u9645\u53D1\u5C04\u53F0\u5B8C\u5DE5\u3002\u6B96\u6C11\u8230\u5DF2\u52A0\u6CE8\u5B8C\u6BD5\uFF0C\u968F\u65F6\u53EF\u4EE5\u51FA\u53D1\u3002"],monument:["\u65B9\u821F \xB7 AI","\u7EAA\u5FF5\u7891\u4E0A\u523B\u7740\u4E00\u884C\u5B57\uFF1A\u300C\u81F4\u7B2C\u4E00\u4E2A\u51FA\u53D1\u7684\u4EBA\u300D\u3002"],turret:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u9632\u5FA1\u70AE\u5854\u4E0A\u7EBF\u3002\u5B83\u4EEC\u9700\u8981\u7535\u529B\u624D\u80FD\u8FD0\u8F6C\u3002"],fabricator:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5236\u9020\u5DE5\u574A\u5C31\u7EEA\u3002\u9760\u8FD1\u540E\u6309 E \u6253\u5F00\u3002"]};h.events.on("built",n=>{let e=r3[n.type];e&&h.stats.built[n.type]===1&&Lt(e[0],e[1]),n.type==="monument"&&h.stats.built.monument===1&&setTimeout(d3,6e3),Qs(!0)});h.events.on("ending",()=>{Lt("Nadia Volkova","\u5927\u5BB6\u5FEB\u51FA\u6765\u770B\uFF01\u5929\u7A7A\u2026\u2026\u5929\u7A7A\u53D8\u84DD\u4E86\uFF01"),Lt("\u8D75\u5C0F\u96E8","\u4E0B\u96E8\u4E86\uFF01\u8FD9\u662F\u706B\u661F\u4E0A\u7684\u7B2C\u4E00\u573A\u96E8\uFF01"),setTimeout(o3,14e3)});function o3(){h.ended=!0,h.endingShown=!0,Je.dead&&Je.respawn(),qe("death").classList.add("hidden"),document.pointerLockElement&&document.exitPointerLock();let n=h.stats,e=["\u4ECE\u7740\u9646\u8231\u7684\u8231\u95E8\u7B2C\u4E00\u6B21\u6253\u5F00\uFF0C\u5230\u4ECA\u5929\uFF0C\u8FC7\u53BB\u4E86 "+h.time.day+" \u4E2A\u706B\u661F\u65E5\u3002","\u66FE\u7ECF\u53EA\u6709\u98CE\u58F0\u7684\u5E73\u539F\u4E0A\uFF0C\u5982\u4ECA\u4F4F\u7740 "+h.colony.pop+" \u4E2A\u4EBA\u3002","\u4ED6\u4EEC\u6765\u81EA\u5730\u7403\u4E0A\u4E0D\u540C\u7684\u56FD\u5BB6\uFF0C\u8BF4\u7740\u4E0D\u540C\u7684\u8BED\u8A00\u3002","\u4F46\u4ECE\u4ECA\u5929\u8D77\uFF0C\u4ED6\u4EEC\u6709\u4E86\u540C\u4E00\u4E2A\u5730\u5740\u3002",'<div class="big">\u706B\u661F \xB7 \u65B0\u5BB6\u56ED</div>',"\u5B69\u5B50\u4EEC\u7B2C\u4E00\u6B21\u5728\u706B\u661F\u4E0A\uFF0C\u770B\u89C1\u4E86\u84DD\u8272\u7684\u5929\u7A7A\u3002",`<span class="stats">\u91C7\u96C6\u8D44\u6E90 ${n.mined.iron+n.mined.silicon+n.mined.ice+n.mined.titanium} \xB7 \u5EFA\u9020\u8BBE\u65BD ${h.buildings.length} \xB7 \u51FB\u9000\u9508\u8680\u86DB ${n.kills} \xB7 \u8FCE\u63A5\u79FB\u6C11 ${n.arrived}</span>`];qe("ending-text").innerHTML=e.map((t,i)=>`<p style="animation-delay:${i*1.6}s">${t}</p>`).join(""),qe("ending").classList.remove("hidden"),X.play("chapter"),Qs(!0)}window.addEventListener("keydown",n=>{if(h.started){if(j1(n),n.code==="Tab"&&!h.endingShown&&!Je.dead){h.menuOpen==="archive"?jn(!0):h.menuOpen||Ss("archive");return}if(n.code==="KeyM"&&!h.endingShown&&!Je.dead){h.menuOpen==="mapscr"?jn(!0):h.menuOpen||Ss("mapscr");return}if(h.menuOpen==="mapscr"&&n.code==="Escape"){jn(!0);return}if(n.code==="KeyT"&&!h.endingShown&&!Je.dead){h.menuOpen==="research"?jn(!0):h.menuOpen||Ss("research");return}if(h.menuOpen==="research"&&n.code==="Escape"){jn(!0);return}if(h.menuOpen==="trade"&&(n.code==="Escape"||n.code==="KeyE")){jn(!0);return}if(n.code==="KeyP"&&!h.menuOpen){h.photo=!h.photo,h.usedPhoto=!0,document.body.classList.toggle("photo",h.photo),Hy(h.photo?vm:0),X.play("tick");return}if(h.photo&&!h.menuOpen){let e=["Digit1","Digit2","Digit3","Digit4"].indexOf(n.code);if(e>=0){vm=e,Hy(e),X.play("tick"),n.stopImmediatePropagation();return}if(n.code==="Enter"){h.snap=!0;return}}if(h.menuOpen==="archive"&&n.code==="Escape"){jn(!0);return}h.menuOpen==="build"&&(n.code==="Escape"||n.code==="KeyB")?(jn(!0),h.locked||void 0):h.menuOpen==="craft"&&(n.code==="Escape"||n.code==="KeyE")?jn(!0):h.menuOpen==="starmap"&&n.code==="Escape"&&jn(!0)}});var ja=0,pm=30,mm=0,Dy=0,Ja={};try{Ja=JSON.parse(localStorage.getItem("starport-hints"))||{}}catch{}var Za=null,gm=0,Ec=0,a3=[{id:"move",text:"<kbd>W A S D</kbd>\u79FB\u52A8\u3000<kbd>Shift</kbd>\u51B2\u523A<br><kbd>\u9F20\u6807</kbd>\u73AF\u89C6\u3000<kbd>\u7A7A\u683C</kbd>\u8DF3\u8DC3",when:()=>Ec>.5&&Ec<40},{id:"mine",text:"\u5BF9\u51C6\u53D1\u5149\u7684\u77FF\u77F3\uFF0C<kbd>\u6309\u4F4F\u5DE6\u952E</kbd> \u7528\u91C7\u77FF\u6FC0\u5149\u91C7\u96C6",when:()=>Ec>6&&h.stats.mined.iron+h.stats.mined.silicon===0},{id:"build",text:"\u8D44\u6E90\u591F\u4E86\uFF01\u6309 <kbd>B</kbd> \u6253\u5F00\u5EFA\u9020\u83DC\u5355",when:()=>h.buildings.length===0&&h.res.iron>=8&&h.res.silicon>=6},{id:"o2",text:"\u6C27\u6C14\u5728\u6301\u7EED\u6D88\u8017\u3002\u56DE\u5230\u7740\u9646\u8231\u6216\u5236\u6C27\u7AD9\u9644\u8FD1\u4F1A\u81EA\u52A8\u8865\u6C27",when:()=>!Je.inLife&&Je.o2<Je.maxO2*.5},{id:"night",text:"\u5929\u9ED1\u4E86\uFF0C\u6309 <kbd>F</kbd> \u6253\u5F00\u624B\u7535\u7B52",when:()=>h.time.night>.6&&!Je.flashlight},{id:"craft",text:"\u9760\u8FD1\u5236\u9020\u5DE5\u574A\u6309 <kbd>E</kbd> \u5236\u9020\u6B66\u5668\u548C\u88C5\u5907\u2014\u2014\u8BD5\u8BD5\u52A0\u538B\u6F2B\u6E38\u8F66",when:()=>h.buildings.some(n=>n.type==="fabricator")&&!h.upgrades.rifle},{id:"drive",text:"\u6F2B\u6E38\u8F66\u5C31\u5728\u9644\u8FD1\uFF0C\u8D70\u8FC7\u53BB\u6309 <kbd>E</kbd> \u4E0A\u8F66",when:()=>Nd()&&!h.driving&&!Ja.drove},{id:"research",text:"\u7814\u7A76\u6240\u5DF2\u5EFA\u6210\uFF0C\u6309 <kbd>T</kbd> \u7528\u79D1\u7814\u70B9\u6570\u89E3\u9501\u79D1\u6280",when:()=>h.buildings.some(n=>n.type==="lab")&&(h.rp||0)>=20},{id:"request",text:"\u5C45\u6C11\u63D0\u51FA\u4E86\u59D4\u6258\uFF08\u53F3\u4FA7\u4EFB\u52A1\u680F\uFF09\uFF0C\u5B8C\u6210\u540E\u6709\u5956\u52B1",when:()=>(h.requests||[]).length>0},{id:"map",text:"\u6309 <kbd>M</kbd> \u6253\u5F00\u661F\u7403\u5730\u56FE\uFF0C\u70B9\u51FB\u53EF\u8BBE\u7F6E\u5BFC\u822A\u70B9",when:()=>Ec>90},{id:"talk",text:"\u5BF9\u51C6\u5C45\u6C11\u6309 <kbd>E</kbd>\uFF0C\u542C\u542C\u4ED6\u4EEC\u7684\u6545\u4E8B",when:()=>h.colonists.some(n=>n.pos.distanceTo(Je.pos)<10)},{id:"level",text:"\u4EBA\u53E3\u548C\u8BBE\u65BD\u8D8A\u591A\uFF0C\u57CE\u5E02\u7B49\u7EA7\u8D8A\u9AD8\uFF0C\u9886\u5730\u4E5F\u4F1A\u6269\u5927\uFF08\u770B\u5DE6\u4E0A\u89D2\uFF09",when:()=>h.colony.pop>=2}];function l3(n){if(Ec+=n,h.driving&&(Ja.drove=!0),Za)if(gm-=n,gm<=0||!Za.when()){Ja[Za.id]=!0,Za=null;try{localStorage.setItem("starport-hints",JSON.stringify(Ja))}catch{}}else return Za.text;for(let e of a3)if(!Ja[e.id]&&e.when())return Za=e,gm=12,e.text;return""}function Wy(){let n=yr(),e=new Map((n.visited||[]).map(i=>[i.id,i])),t=[];fe.next&&t.push({id:fe.next,fresh:!e.has(fe.next)&&!qd(fe.next)});for(let i of Object.keys(Vn))i!==ot&&i!==fe.next&&(e.has(i)||qd(i))&&t.push({id:i,fresh:!1,info:e.get(i)});return t}function qd(n){try{return!!localStorage.getItem(n==="mars"?"starport-newhome-v1":"starport-planet-"+n)}catch{return!1}}function c3(n){Ss("starmap"),qe("starmap-list").innerHTML=Wy().map(e=>{let t=Vn[e.id],i={mars:"MARS",europa:"EUROPA",kepler:"KEPLER-442b"}[e.id];return`<div class="dest" data-id="${e.id}"><div class="orb ${e.id}"></div><span class="badge ${e.fresh?"new":"home"}">${e.fresh?"UNCHARTED":"COLONY"}</span>
      <div class="dn">${t.name}</div><div class="de">${i}</div>
      <div class="dst">${t.title} \xB7 ${t.place}${e.info?`<br>\u5C45\u6C11 ${e.info.pop} \u4EBA \xB7 \u7B2C ${e.info.day} \u65E5\u79BB\u5F00`:""}${e.fresh?"<br>\u88C5\u5907\u540C\u6B65 \xB7 \u643A\u5E26\u90E8\u5206\u7269\u8D44":"<br>\u56DE\u5230\u4F60\u5EFA\u7ACB\u7684\u57CE\u5E02"}</div></div>`}).join(""),qe("starmap-list").querySelectorAll(".dest").forEach(e=>e.addEventListener("click",()=>{jn(!0),Xy(n,e.dataset.id)}))}function Xy(n,e){let t=new S(n.x,n.y,n.z),i=Math.atan2(In.z,In.x),s=null,r=null;for(let l=0;l<24&&!r;l++){let c=i+(l%2?1:-1)*Math.ceil(l/2)*.26,d=74,u=new S(Math.cos(c),0,Math.sin(c)),f=t.clone().addScaledVector(u,d);f.y=ue(f.x,f.z)+2.6;let p=!h.colliders.overlaps(f.x,f.z,6);for(let g=.05;p&&g<.85;g+=.05){let x=f.x+(t.x-f.x)*g,v=f.z+(t.z-f.z)*g;(h.colliders.overlaps(x,v,2.5)||ue(x,v)>f.y+(n.y+10-f.y)*g)&&(p=!1)}p&&(s=u,r=f)}r||(s=new S(Math.cos(i),0,Math.sin(i)),r=t.clone().addScaledVector(s,74),r.y=ue(r.x,r.z)+2.6);let o=document.createElement("div");o.id="launch-cap",o.innerHTML='<div class="lc-k">LAUNCH SEQUENCE \xB7 '+Vn[e].name+'</div><div class="lc-n"></div>',document.body.appendChild(o),h.launching={b:n,t:0,dest:e,pad:t,dir:s,cam:r,cap:o,n:-1,look:t.clone().setY(n.y+14),fov:tt.fov,v:0},h.launched=!0,h.cine=!0,document.body.classList.add("cinema"),document.pointerLockElement&&document.exitPointerLock(),X.play("rumble"),Lt("\u65B9\u821F \xB7 AI",`\u6B96\u6C11\u8230\u8FDB\u5165\u53D1\u5C04\u7A0B\u5E8F\u3002\u76EE\u6807\uFF1A${Vn[e].name}\u3002\u5168\u4F53\u4E58\u5458\uFF0C\u795D\u4F60\u4EEC\u597D\u8FD0\u3002`);let a=l=>{(l.type==="mousedown"||l.code==="Space"||l.code==="Escape")&&(h.launching.t=Math.max(h.launching.t,11))};h.launching.skip=a,setTimeout(()=>{window.addEventListener("keydown",a),window.addEventListener("mousedown",a)},300)}var Uy=new S;function qy(n){let e=h.launching;if(!e)return;e.t+=n;let t=e.b.anim.ship,i=e.b.anim.flame,s=3.6,r=5.2,o=e.t<.3?-1:e.t<1.4?3:e.t<2.5?2:e.t<s?1:e.t<r+1.5?0:-2;if(o!==e.n){e.n=o;let g=e.cap.querySelector(".lc-n");o===-2?e.cap.classList.add("out"):o>=0&&(g.textContent=o>0?"T \u2013 "+o:"\u70B9\u706B",g.classList.remove("pop"),g.offsetWidth,g.classList.add("pop"),o>0&&X.play("click"))}t.getWorldPosition(Uy);let a=Uy.clone();if(e.t<s)Math.random()<n*14&&le.dustPuff(new S(e.pad.x+(Math.random()-.5)*6,e.pad.y+2+Math.random()*3,e.pad.z+(Math.random()-.5)*6),1,1.2,[.9,.9,.92]);else{e.ign||(e.ign=!0,i.visible=!0,Sa(a.clone().setY(e.pad.y+1.5),16765088,18,1.4),Fp(1.2),X.play("kill"),X.engine(1));let g=Math.min(1,(e.t-s)/1.2);i.scale.set(.6+g*.5,.4+g*1.1+Math.random()*.15,.6+g*.5);let x=a.y-e.pad.y,v=Math.max(0,1-x/70);for(let E=0;E<Math.round(4*v);E++)lx(e.pad.clone().setY(e.pad.y+.5),1.5);for(let E=0;E<4;E++)le.flame(a);let m=a.clone();m.y-=4,ec(m,16754784,(2500+Math.random()*900)*g,260,.12),h.shake=Math.max(h.shake||0,.35*v+.08),e.t>r&&(e.v+=n*(1.2+(e.t-r)*3.2),t.position.y+=e.v*n)}let l=Math.min(1,e.t/6),c=e.cam.clone().addScaledVector(e.dir,-l*10);tt.position.copy(c);let d=a.clone();d.y+=14,e.look.lerp(d,1-Math.pow(.02,n)),tt.lookAt(e.look);let u=tt.position.distanceTo(d),f=Tt.radToDeg(2*Math.atan(48/u));tt.fov=Tt.clamp(f,9,e.fov),tt.updateProjectionMatrix();let p=h.shake||0;p>.01&&(tt.position.x+=(Math.random()-.5)*p*.6,tt.position.y+=(Math.random()-.5)*p*.5),h.shake=p*Math.pow(.1,n),e.t>11&&!e.faded&&(e.faded=!0,qe("fade").classList.add("white","on"),X.engine(0)),e.t>12.6&&!e.done&&(e.done=!0,window.removeEventListener("keydown",e.skip),window.removeEventListener("mousedown",e.skip),h3(e.dest))}function h3(n){let e=yr();e.visited=(e.visited||[]).filter(s=>s.id!==ot).concat([{id:ot,pop:h.colony.pop,day:h.time.day}]),e.planet=n,e.mode=h.mode||"story",e.diff=h.diffKey||"normal",e.autoResume=qd(n);let t={};for(let s in h.res)t[s]=Math.min(Math.floor(h.res[s]*.4),80);e.carry={upgrades:h.upgrades,res:t},Qs(!0),Ul(e);let i=Vn[n];h.endingShown=!0,document.pointerLockElement&&document.exitPointerLock(),X.play("chapter"),setTimeout(()=>{h.warping=!0},1300),yy(["WORMHOLE TRANSIT \xB7 \u866B\u6D1E\u7A7F\u8D8A",`<b>${i.name}</b>`,`${i.title}${e.autoResume?" \xB7 \u5DF2\u5F00\u62D3":""}`,`<span class="stats">${fe.name}\u7684 ${h.colony.pop} \u4F4D\u5C45\u6C11\uFF0C\u4F1A\u66FF\u4F60\u5B88\u7740\u90A3\u91CC\u7684\u706F\u706B\u3002</span>`],()=>{location.href=location.pathname+(h.debug?"?debug":"")},7.5),setTimeout(()=>qe("fade").classList.remove("on","white"),400)}function d3(){h.endingShown=!0,document.pointerLockElement&&document.exitPointerLock();let e=(yr().visited||[]).concat([{id:ot,pop:h.colony.pop}]),t=e.reduce((s,r)=>s+r.pop,0),i=["\u5F88\u4E45\u5F88\u4E45\u4EE5\u524D\uFF0C\u4E00\u4E2A\u4EBA\u72EC\u81EA\u7AD9\u5728\u706B\u661F\u7684\u7EA2\u8272\u5C18\u571F\u91CC\u3002","\u6C27\u6C14\u53EA\u591F\u6491\u4E09\u5206\u949F\uFF0C\u8EAB\u8FB9\u53EA\u6709\u4E00\u5EA7\u7740\u9646\u8231\u3002",e.map(s=>`${Vn[s.id].name} \xB7 ${s.pop} \u4EBA`).join("\u3000"),`\u4ECA\u5929\uFF0C${t} \u4E2A\u4EBA\uFF0C\u751F\u6D3B\u5728\u4E09\u9897\u661F\u7403\u4E0A\u3002`,'<div class="big">\u661F\u9645\u6587\u660E</div>',"\u8FD9\u4E00\u5207\uFF0C\u90FD\u4ECE\u4F60\u8FC8\u51FA\u7684\u7B2C\u4E00\u6B65\u5F00\u59CB\u3002",'<span class="stats">\u611F\u8C22\u6E38\u73A9\u300A\u661F\u6E2F\u300B\u3002\u4F60\u53EF\u4EE5\u7EE7\u7EED\u5EFA\u8BBE\uFF0C\u57CE\u5E02\u4F1A\u4E00\u76F4\u5728\u8FD9\u91CC\u7B49\u4F60\u3002</span>'];qe("ending-text").innerHTML=i.map((s,r)=>`<p style="animation-delay:${r*1.8}s">${s}</p>`).join(""),qe("ending").classList.remove("hidden"),X.play("chapter"),Qs(!0)}function u3(n){let e={prompt:"",crossClass:""};if(Je.dead||h.menuOpen)return e;if(h.driving)return e.prompt=`<span class="big">${uy()}</span> KM/H<br><kbd>W S</kbd> \u6CB9\u95E8 \xB7 <kbd>A D</kbd> \u8F6C\u5411 \xB7 <kbd>Shift</kbd> \u52A0\u901F \xB7 <kbd>\u7A7A\u683C</kbd> \u5239\u8F66 \xB7 <kbd>E</kbd> \u4E0B\u8F66`,e;let t=L1(Je.pos);if(t)return e.prompt="<b>\u5730\u7403\u8865\u7ED9\u8231</b><br><kbd>E</kbd>\u6253\u5F00",Me.hit("KeyE")&&U1(t),e;let i=T1(Je.pos);if(i)return e.prompt=`<b>${i.name}</b><br><kbd>E</kbd>\u8C03\u67E5`,Me.hit("KeyE")&&A1(i),e;let s=Nd();if(s&&Math.hypot(s.x-Je.pos.x,s.z-Je.pos.z)<4.5)return e.prompt="<b>\u52A0\u538B\u6F2B\u6E38\u8F66</b><br><kbd>E</kbd>\u4E0A\u8F66",Me.hit("KeyE")&&(hy(),Me.pressed.delete("KeyE")),e;let r=tt.position,o=Je.fwd,a=g1(r,o),l=h.buildings.find(f=>f.type==="fabricator"&&Math.hypot(f.x-Je.pos.x,f.z-Je.pos.z)<f.def.r+6);ja=Math.max(0,ja-n),Dy=Math.max(0,Dy-n);let c=h.buildings.find(f=>f.type==="trade"&&Math.hypot(f.x-Je.pos.x,f.z-Je.pos.z)<f.def.r+5),d=h.buildings.find(f=>f.type==="launch"&&Math.hypot(f.x-Je.pos.x,f.z-Je.pos.z)<f.def.r+8);if(a){if(e.crossClass="talk",e.prompt=`<b>${a.name}</b> \xB7 ${a.job}<br><kbd>E</kbd> \u4EA4\u8C08`,Me.hit("KeyE")){Lt(a.name,a.line);let f=h.stats.talked=h.stats.talked||[];f.includes(a.idx)||f.push(a.idx)}}else d&&!h.launching?d.powered?Wy().length?(e.prompt="<b>\u6B96\u6C11\u8230\u5DF2\u5C31\u7EEA</b><br><kbd>E</kbd>\u6253\u5F00\u661F\u56FE",Me.hit("KeyE")&&c3(d)):e.prompt="\u661F\u9645\u53D1\u5C04\u53F0 \xB7 \u6682\u65E0\u53EF\u7528\u822A\u7EBF":e.prompt='\u661F\u9645\u53D1\u5C04\u53F0 \xB7 <span class="badc">\u7535\u529B\u4E0D\u8DB3</span>':c?(e.prompt=`<b>\u661F\u9645\u8D38\u6613\u7AD9</b>${c.powered?"":' \xB7 <span class="badc">\u505C\u7535</span>'}<br><kbd>E</kbd>\u4EA4\u6613`,Me.hit("KeyE")&&(c.powered?Ss("trade"):Qt("\u8D38\u6613\u7AD9\u6CA1\u6709\u7535\u529B","warn","warn"))):l&&(e.prompt=`<kbd>E</kbd> \u6253\u5F00\u5236\u9020\u5DE5\u574A${l.powered?"":"\uFF08\u505C\u7535\u4E2D\uFF09"}`,Me.hit("KeyE")&&(l.powered?Ss("craft"):Qt("\u5236\u9020\u5DE5\u574A\u6CA1\u6709\u7535\u529B")));let u=h.lookBuilding;if(!e.prompt&&u&&un.id!=="build"){let f=u.def,p=u.level||1,g=sd(u)?`<br><kbd>U</kbd>\u5347\u7EA7\u5230 Lv.${p+1}\u3000${pa(t0(u))}`:"";e.prompt=`<b>${f.name}</b>\u3000Lv.${p}${p>=e0?"\uFF08\u6EE1\u7EA7\uFF09":""} \xB7 \u8010\u4E45 ${Math.ceil(u.hp)}/${Math.round(u.maxHp)}${f.power<0?u.powered?' \xB7 <span class="okc">\u4F9B\u7535\u4E2D</span>':' \xB7 <span class="badc">\u505C\u7535</span>':""}${g}<br><kbd>X</kbd>${ja>0?'<span class="badc">\u518D\u6309\u4E00\u6B21\u786E\u8BA4\u62C6\u9664\uFF08\u8FD4\u8FD8 50%\uFF09</span>':"\u62C6\u9664"}`,u.broken&&(e.prompt=e.prompt.replace("</b>",'</b> <span class="badc">\u53D7\u635F\u505C\u673A \xB7 \u767D\u5929\u81EA\u52A8\u4FEE\u590D</span>')),Me.hit("KeyU")&&sd(u)&&(Cx(u)?Qt(`${f.name} \u5347\u7EA7\u5230 Lv.${u.level}`,"star","good"):(X.play("deny"),Qt("\u5347\u7EA7\u6750\u6599\u4E0D\u8DB3","warn","warn"))),Me.hit("KeyX")&&(ja>0?(Lx(u,!0),ja=0,Qt(`\u5DF2\u62C6\u9664 ${f.name}`)):ja=2)}return un.id==="laser"?(h.aimNode&&!e.crossClass&&(e.crossClass="node"),xo(r,o,9)&&(e.crossClass="enemy")):un.id==="rifle"&&xo(r,o,120)&&(e.crossClass="enemy"),e}var Gd=[["\u539F\u8272","none"],["\u80F6\u7247","sepia(.35) contrast(1.12) saturate(1.15) brightness(1.03)"],["\u9ED1\u767D","grayscale(1) contrast(1.25)"],["\u51B7\u8C03","hue-rotate(-18deg) saturate(.85) contrast(1.08) brightness(1.05)"]],vm=0;function Hy(n){Fi.style.filter=Gd[n][1]==="none"?"":Gd[n][1],qe("photo-bar").innerHTML=Gd.map((e,t)=>`<span class="${t===n?"on":""}"><kbd>${t+1}</kbd>${e[0]}</span>`).join("")+'<span class="sep"></span><span><kbd>Enter</kbd>\u4FDD\u5B58\u7167\u7247</span><span><kbd>P</kbd>\u9000\u51FA</span>'}function f3(){let n=Fi.width,e=Fi.height,t=Math.round(e*.1),i=document.createElement("canvas");i.width=n,i.height=e;let s=i.getContext("2d");s.filter=Gd[vm][1],s.drawImage(Fi,0,0),s.filter="none",s.fillStyle="#000",s.fillRect(0,0,n,t),s.fillRect(0,e-t,n,t);let r=Math.round(e*.022);s.font=`300 ${r*1.6}px "Noto Sans SC", sans-serif`,s.fillStyle="#fff",s.textBaseline="middle",s.fillText("\u661F \u6E2F",r*2,e-t/2),s.font=`400 ${r}px "Noto Sans SC", sans-serif`,s.fillStyle="rgba(255,255,255,.7)",s.textAlign="right",s.fillText(`${fe.name} \xB7 ${fe.place} \xB7 \u7B2C ${h.time.day} \u65E5 \xB7 \u4EBA\u53E3 ${h.colony.pop}`,n-r*2,e-t/2);let o=document.createElement("a");o.download=`\u661F\u6E2F-${fe.name}-\u7B2C${h.time.day}\u65E5.png`,o.href=i.toDataURL("image/png"),document.body.appendChild(o),o.click(),o.remove(),qe("shutter").classList.remove("on"),qe("shutter").offsetWidth,qe("shutter").classList.add("on"),X.play("shutter"),h.stats.photos=(h.stats.photos||0)+1}var Js=null,xm=9.5;function Ny(n){if(h.debug&&!/landing/.test(location.search)){n();return}h.cine=!0,document.body.classList.add("cinema");let e=Qa.group,t=ue(wt.x,wt.z)+.1,i=new Q(new Wt(1.7,10,18,1,!0),y.flame);i.rotation.x=Math.PI,i.position.y=-4.2,e.add(i);let s=ge(16752704,22,e,0,-.5,0),r=new Ri(16752720,0,120,1.4);r.position.y=-2,e.add(r);let o=new S(wt.x+20,0,wt.z+25);o.y=ue(o.x,o.z)+3.2,h.time.t=.282,Js={t:0,gy:t,flame:i,fglow:s,lamp:r,done:n,camAt:o,landed:!1,shake:0},e.position.y=t+460,X.play("rumble"),X.engine(1);let a=l=>{(l.type==="mousedown"||l.code==="Space"||l.code==="Escape")&&(Js.t=Math.max(Js.t,xm+6))};Js.skip=a,window.addEventListener("keydown",a),window.addEventListener("mousedown",a)}var zy=new mn,ky=new mn,p3=new Cn,Oy=new vt;function Yy(n){let e=Js;e.t+=n;let t=Qa.group,i=Math.min(1,e.t/xm),s=1-Math.pow(1-i,2.6);t.position.y=e.gy+460*(1-s),t.rotation.z=Math.sin(e.t*1.1)*.05*(1-i);let r=i<1;e.flame.visible=e.fglow.visible=r,e.flame.scale.set(1,.5+(1-s)*.9+Math.random()*.15,1),e.lamp.intensity=r?400*(.6+Math.random()*.4):0;let o=t.position.y-e.gy;if(r){let c=new S(t.position.x,t.position.y-1,t.position.z);for(let d=0;d<4;d++)le.flame(c,1.4);if(o<40)for(let d=0;d<3;d++){let u=Math.random()*Math.PI*2,f=2+Math.random()*(14-o*.25);le.dustPuff(new S(wt.x+Math.cos(u)*f,e.gy+.3,wt.z+Math.sin(u)*f),1,2)}e.shake=Math.max(e.shake,Math.max(0,1-o/120)*.25)}else e.landed||(e.landed=!0,e.shake=1,le.ring(new S(wt.x,e.gy,wt.z),4,160),le.dustPuff(new S(wt.x,e.gy+1,wt.z),70,16),X.play("land"),X.play("rumble"),X.engine(0));e.shake*=Math.pow(.15,n),ya(0,tt.position),co(n,tt.position);let a=new S(t.position.x,t.position.y+3,t.position.z),l=e.t-xm-2.2;if(l<0)tt.position.copy(e.camAt),tt.position.x+=Math.sin(e.t*.15)*4,tt.lookAt(a);else{let c=Math.min(1,l/3.2),d=c*c*(3-2*c),u=new S(Je.pos.x,Je.pos.y+1.7,Je.pos.z);if(tt.position.lerpVectors(e.camAt,u,d),Oy.lookAt(e.camAt,a,tt.up),zy.setFromRotationMatrix(Oy),ky.setFromEuler(p3.set(Je.pitch,Je.yaw,0,"YXZ")),tt.quaternion.slerpQuaternions(zy,ky,d),c>=1){t.remove(e.flame,e.fglow,e.lamp),t.position.y=e.gy,t.rotation.z=0,window.removeEventListener("keydown",e.skip),window.removeEventListener("mousedown",e.skip),document.body.classList.remove("cinema"),h.cine=!1,Js=null,X.engine(0),e.done();return}}e.shake>.01&&(tt.position.x+=(Math.random()-.5)*e.shake*.5,tt.position.y+=(Math.random()-.5)*e.shake*.4)}var gi={n:0,t0:0,step:0,last:0};function m3(n){if(!gi.t0){gi.t0=n,gi.n=0;return}gi.n++;let e=n-gi.t0;if(e<4)return;let t=gi.n/e;gi.t0=n,gi.n=0,!(t>=32||gi.step>=3||n-gi.last<6)&&(gi.step++,gi.last=n,gi.step===1&&ns==="high"?(ts&&(ts.enabled=!1),on.setPixelRatio(1),_n&&_n.setPixelRatio(1),on.setSize(innerWidth,innerHeight),_n&&_n.setSize(innerWidth,innerHeight)):ns==="high"?(Vd("mid",!0),Qt("\u5DF2\u81EA\u52A8\u8C03\u4F4E\u753B\u8D28\uFF0C\u4FDD\u6301\u6D41\u7545","gear")):ns==="mid"&&(Vd("low",!0),Qt("\u5DF2\u81EA\u52A8\u8C03\u4F4E\u753B\u8D28\uFF0C\u4FDD\u6301\u6D41\u7545","gear")))}var Fy=new la,Bd=0;function jy(){requestAnimationFrame(jy);let n=Math.min(Fy.getDelta(),.05);if(h.warping)return;if(Js){Yy(n),_a(n),Fd(),Me.endFrame();return}if(h.launching&&!h.endingShown){qy(n),ya(n,tt.position),i0(n,{shoot:oc}),fm(n),co(n,tt.position),_a(n),Fd(),Me.endFrame();return}if(!h.started){Bd+=n*.05;let t=30;tt.position.set(wt.x+Math.cos(Bd)*t,ue(wt.x,wt.z)+6,wt.z+Math.sin(Bd)*t),tt.lookAt(wt.x,ue(wt.x,wt.z)+4,wt.z),h.time.t=.27+Math.sin(Bd*.5)*.01,ya(0,tt.position),co(n,tt.position),_a(n),Fd();return}h.debug&&(h.locked=!0);let e=h.locked&&!h.menuOpen&&!h.endingShown&&!h.cine;e&&!h.debug&&m3(Fy.elapsedTime),qe("clickhint").classList.toggle("hidden",!(h.started&&!h.locked&&!h.menuOpen&&!Je.dead&&!h.endingShown&&!h.cine)),e?Zy(n):(j0(0,{prompt:""}),ya(0,tt.position)),co(e?n:0,tt.position),_a(e?n:0),Me.endFrame(),Fd(),f1(on),h.snap&&(h.snap=!1,f3())}function Zy(n){{h.driving&&Me.hit("KeyE")&&!h.menuOpen&&(rm(Je),Me.pressed.delete("KeyE")),h.driving||Je.update(n),dy(n,Je,tt),ya(n,tt.position),h.time.dawn&&(h.time.dawn=!1,Qt(`\u7B2C ${h.time.day} \u65E5 \xB7 \u9ECE\u660E`,"sun")),tx(n),h.driving?h.lookBuilding=null:u1(n,Je,tt),Me.hit("KeyG")&&!h.menuOpen&&!Je.dead&&!h.driving&&M1(tt,Je),E1(n),_y(n),a1(n),i0(n,{shoot:oc}),fm(n),m1(n),px(n,un.id==="build"&&!!It.type),Ip.emissiveIntensity=.06+h.time.night*(.55+Math.sin(performance.now()*.0015)*.15),n1(n),I1(n),$x(n),qx(n),Qa.beacon.visible=Math.sin(performance.now()*.004)>0,K1(n),ny(n),R1(n),ay(n),Sx(n,Wa),py(n),xy(n),Gv(),!h.plazaSeen&&h.time.night>.6&&h.colonists.filter(t=>t.atPlaza&&!t.target).length>=4&&(h.plazaSeen=!0,Lt("\u82CF\u5FF5 \xB7 \u6559\u5E08","\u4ECA\u665A\u5927\u5BB6\u90FD\u6765\u4E86\u3002\u6211\u4EEC\u5C31\u8FD9\u6837\u7AD9\u7740\uFF0C\u770B\u7740\u90A3\u9897\u84DD\u8272\u7684\u661F\u7403\u8F6C\u554A\u8F6C\u2026\u2026\u5B69\u5B50\u95EE\u6211\uFF0C\u90A3\u662F\u54EA\u91CC\u3002\u6211\u8BF4\uFF0C\u90A3\u662F\u6211\u4EEC\u51FA\u53D1\u7684\u5730\u65B9\u3002"));let e=u3(n);e.tip=l3(n),j0(n,e),X.update(h.storm,h.time.night),pm-=n,pm<=0&&(pm=45,Qs(!0)),h.terraform>0&&h.terraform<=1&&(mm-=n,mm<=0&&(mm=4,Pp(Gy(),h.terraform)))}}{let n=()=>{qe("loading").style.transition="opacity .8s",qe("loading").style.opacity=0,setTimeout(()=>qe("loading").remove(),900)},e=null;try{e=on.compileAsync?on.compileAsync(ii,tt):null}catch{e=null}e&&e.then?Promise.race([e,new Promise(t=>setTimeout(t,8e3))]).then(n,n):n()}jy();window.addEventListener("beforeunload",()=>Qs(!0));window.__G=h;window.__dbg={give(n=200){for(let e in rn)h.res[e]+=n},tp(n,e){Je.pos.set(n,ue(n,e),e)},time(n){h.time.t=n},build:(n,e,t)=>rd(n,e,t,0),chapter:n=>sc(n),look(n,e){Je.yaw=n,Je.pitch=e},begin:()=>$a(!1),fest:()=>my(),boom:(n,e,t,i)=>vs(new S(n,e,t),i),pod:()=>I0(),audio:X,spawnCrawler:rc,spawnDevil:Sy,spawnWasp:p0,slope:(n,e)=>ue(n+3,e)-ue(n,e),landStep(n){for(let e=0;e<n&&Js;e+=.05)Yy(.05);return!!Js},launch(n="europa"){let e=h.buildings.find(t=>t.type==="launch");Xy(e,n)},launchStep(n){for(let e=0;e<n&&h.launching&&!h.endingShown;e+=.05)qy(.05),co(.05,tt.position),_a(.05);return h.launching.t},step(n,e=.05){for(let t=0;t<n;t+=e)Zy(e),co(e,tt.position),Me.endFrame()},input:Me,save:Qs,toast:Qt,setGhost:uo,openMenu:Ss,closeMenus:jn,tool:un,placement:It,rover:Nd};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
