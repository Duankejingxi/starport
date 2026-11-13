(()=>{var hu="170";var U0=0,Hd=1,N0=2;var Qf=1,uu=2,Ai=3,is=0,ln=1,sn=2,es=0,li=1,Ae=2,Vd=3,Gd=4,F0=5,Rs=100,O0=101,k0=102,z0=103,B0=104,H0=200,V0=201,G0=202,W0=203,zl=204,Bl=205,X0=206,$0=207,q0=208,Y0=209,Z0=210,J0=211,K0=212,j0=213,Q0=214,Hl=0,Vl=1,Gl=2,br=3,Wl=4,Xl=5,$l=6,ql=7,tp=0,tg=1,eg=2,ns=0,ng=1,ig=2,sg=3,Oo=4,rg=5,og=6,ag=7;var ep=300,Sr=301,wr=302,Yl=303,Zl=304,dc=306,Po=1e3,Is=1001,Jl=1002,Tn=1003,cg=1004;var oa=1005;var ai=1006,rl=1007;var Ps=1008;var Li=1009,np=1010,ip=1011,Lo=1012,du=1013,Ls=1014,ci=1015,ko=1016,fu=1017,pu=1018,Tr=1020,sp=35902,rp=1021,op=1022,$n=1023,ap=1024,cp=1025,_r=1026,Ar=1027,mu=1028,gu=1029,lp=1030,xu=1031;var yu=1033,Na=33776,Fa=33777,Oa=33778,ka=33779,Kl=35840,jl=35841,Ql=35842,th=35843,eh=36196,nh=37492,ih=37496,sh=37808,rh=37809,oh=37810,ah=37811,ch=37812,lh=37813,hh=37814,uh=37815,dh=37816,fh=37817,ph=37818,mh=37819,gh=37820,xh=37821,za=36492,yh=36494,vh=36495,hp=36283,_h=36284,Mh=36285,Eh=36286;var Ba=2300,bh=2301,ol=2302,Wd=2400,Xd=2401,$d=2402;var lg=3200,hg=3201;var up=0,ug=1,Qi="",Ie="srgb",Nr="srgb-linear",fc="linear",be="srgb";var tr=7680;var qd=519,dg=512,fg=513,pg=514,dp=515,mg=516,gg=517,xg=518,yg=519,Sh=35044,vu=35048;var Yd="300 es",Ci=2e3,Ha=2001,ss=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zd=1234567,To=Math.PI/180,Rr=180/Math.PI;function Ii(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function nn(n,t,e){return Math.max(t,Math.min(e,n))}function _u(n,t){return(n%t+t)%t}function vg(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function _g(n,t,e){return n!==t?(e-n)/(t-n):0}function Ao(n,t,e){return(1-e)*n+e*t}function Mg(n,t,e,i){return Ao(n,t,1-Math.exp(-e*i))}function Eg(n,t=1){return t-Math.abs(_u(n,t*2)-t)}function bg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Sg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function wg(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Tg(n,t){return n+Math.random()*(t-n)}function Ag(n){return n*(.5-Math.random())}function Rg(n){n!==void 0&&(Zd=n);let t=Zd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Cg(n){return n*To}function Ig(n){return n*Rr}function Pg(n){return(n&n-1)===0&&n!==0}function Lg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Dg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ug(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),d=o((t-i)/2),p=r((i-t)/2),x=o((i-t)/2);switch(s){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*x,c*p,a*l);break;case"YXY":n.set(c*p,a*h,c*x,a*l);break;case"ZYZ":n.set(c*x,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ee(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Fe={DEG2RAD:To,RAD2DEG:Rr,generateUUID:Ii,clamp:nn,euclideanModulo:_u,mapLinear:vg,inverseLerp:_g,lerp:Ao,damp:Mg,pingpong:Eg,smoothstep:bg,smootherstep:Sg,randInt:wg,randFloat:Tg,randFloatSpread:Ag,seededRandom:Rg,degToRad:Cg,radToDeg:Ig,isPowerOfTwo:Pg,ceilPowerOfTwo:Lg,floorPowerOfTwo:Dg,setQuaternionFromProperEuler:Ug,normalize:Ee,denormalize:Xn},ot=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(nn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class n{constructor(t,e,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],p=i[5],x=i[8],y=s[0],g=s[3],m=s[6],_=s[1],M=s[4],v=s[7],I=s[2],A=s[5],C=s[8];return r[0]=o*y+a*_+c*I,r[3]=o*g+a*M+c*A,r[6]=o*m+a*v+c*C,r[1]=l*y+h*_+u*I,r[4]=l*g+h*M+u*A,r[7]=l*m+h*v+u*C,r[2]=d*y+p*_+x*I,r[5]=d*g+p*M+x*A,r[8]=d*m+p*v+x*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,x=e*u+i*d+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return t[0]=u*y,t[1]=(s*l-h*i)*y,t[2]=(a*i-s*o)*y,t[3]=d*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=p*y,t[7]=(i*c-l*e)*y,t[8]=(o*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(al.makeScale(t,e)),this}rotate(t){return this.premultiply(al.makeRotation(-t)),this}translate(t,e){return this.premultiply(al.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},al=new Zt;function fp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Va(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ng(){let n=Va("canvas");return n.style.display="block",n}var Jd={};function So(n){n in Jd||(Jd[n]=!0,console.warn(n))}function Fg(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Og(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function kg(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var pe={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===be&&(n.r=Pi(n.r),n.g=Pi(n.g),n.b=Pi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===be&&(n.r=Mr(n.r),n.g=Mr(n.g),n.b=Mr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Qi?fc:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Mr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Kd=[.64,.33,.3,.6,.15,.06],jd=[.2126,.7152,.0722],Qd=[.3127,.329],tf=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ef=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);pe.define({[Nr]:{primaries:Kd,whitePoint:Qd,transfer:fc,toXYZ:tf,fromXYZ:ef,luminanceCoefficients:jd,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:Kd,whitePoint:Qd,transfer:be,toXYZ:tf,fromXYZ:ef,luminanceCoefficients:jd,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}});var er,wh=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{er===void 0&&(er=Va("canvas")),er.width=t.width,er.height=t.height;let i=er.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=er}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Va("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Pi(e[i]/255)*255):e[i]=Pi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zg=0,Ga=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=Ii(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(cl(s[o].image)):r.push(cl(s[o]))}else r=cl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function cl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Bg=0,_n=class n extends ss{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Is,s=Is,r=ai,o=Ps,a=$n,c=Li,l=n.DEFAULT_ANISOTROPY,h=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=Ii(),this.name="",this.source=new Ga(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ep)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Po:t.x=t.x-Math.floor(t.x);break;case Is:t.x=t.x<0?0:1;break;case Jl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Po:t.y=t.y-Math.floor(t.y);break;case Is:t.y=t.y<0?0:1;break;case Jl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=ep;_n.DEFAULT_ANISOTROPY=1;var Se=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],x=c[9],y=c[2],g=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(x+g)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,v=(p+1)/2,I=(m+1)/2,A=(h+d)/4,C=(u+y)/4,P=(x+g)/4;return M>v&&M>I?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=A/i,r=C/i):v>I?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=A/s,r=P/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=C/r,s=P/r),this.set(i,s,r,e),this}let _=Math.sqrt((g-x)*(g-x)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-x)/_,this.y=(u-y)/_,this.z=(d-h)/_,this.w=Math.acos((l+p+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Th=class extends ss{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new _n(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ga(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Di=class extends Th{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Wa=class extends _n{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ah=class extends _n{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],p=r[o+1],x=r[o+2],y=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=x,t[e+3]=y;return}if(u!==y||c!==d||l!==p||h!==x){let g=1-a,m=c*d+l*p+h*x+u*y,_=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){let I=Math.sqrt(M),A=Math.atan2(I,m*_);g=Math.sin(g*A)/I,a=Math.sin(a*A)/I}let v=a*_;if(c=c*g+d*v,l=l*g+p*v,h=h*g+x*v,u=u*g+y*v,g===1-a){let I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],d=r[o+1],p=r[o+2],x=r[o+3];return t[e]=a*x+h*u+c*p-l*d,t[e+1]=c*x+h*d+l*u-a*p,t[e+2]=l*x+h*p+a*d-c*u,t[e+3]=h*x-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),d=c(i/2),p=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*x,this._y=l*p*u-d*h*x,this._z=l*h*x+d*p*u,this._w=l*h*u-d*p*x;break;case"YXZ":this._x=d*h*u+l*p*x,this._y=l*p*u-d*h*x,this._z=l*h*x-d*p*u,this._w=l*h*u+d*p*x;break;case"ZXY":this._x=d*h*u-l*p*x,this._y=l*p*u+d*h*x,this._z=l*h*x+d*p*u,this._w=l*h*u-d*p*x;break;case"ZYX":this._x=d*h*u-l*p*x,this._y=l*p*u+d*h*x,this._z=l*h*x-d*p*u,this._w=l*h*u+d*p*x;break;case"YZX":this._x=d*h*u+l*p*x,this._y=l*p*u+d*h*x,this._z=l*h*x-d*p*u,this._w=l*h*u-d*p*x;break;case"XZY":this._x=d*h*u-l*p*x,this._y=l*p*u-d*h*x,this._z=l*h*x+d*p*u,this._w=l*h*u+d*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(nn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ll.copy(this).projectOnVector(t),this.sub(ll)}reflect(t){return this.sub(ll.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(nn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ll=new T,nf=new hn,qn=class{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),aa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),aa.copy(i.boundingBox)),aa.applyMatrix4(t.matrixWorld),this.union(aa)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(po),ca.subVectors(this.max,po),nr.subVectors(t.a,po),ir.subVectors(t.b,po),sr.subVectors(t.c,po),qi.subVectors(ir,nr),Yi.subVectors(sr,ir),Ms.subVectors(nr,sr);let e=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-Ms.z,Ms.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,Ms.z,0,-Ms.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-Ms.y,Ms.x,0];return!hl(e,nr,ir,sr,ca)||(e=[1,0,0,0,1,0,0,0,1],!hl(e,nr,ir,sr,ca))?!1:(la.crossVectors(qi,Yi),e=[la.x,la.y,la.z],hl(e,nr,ir,sr,ca))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ei=[new T,new T,new T,new T,new T,new T,new T,new T],Vn=new T,aa=new qn,nr=new T,ir=new T,sr=new T,qi=new T,Yi=new T,Ms=new T,po=new T,ca=new T,la=new T,Es=new T;function hl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Es.fromArray(n,r);let a=s.x*Math.abs(Es.x)+s.y*Math.abs(Es.y)+s.z*Math.abs(Es.z),c=t.dot(Es),l=e.dot(Es),h=i.dot(Es);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Hg=new qn,mo=new T,ul=new T,rs=class{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Hg.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;mo.subVectors(t,this.center);let e=mo.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(mo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ul.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(mo.copy(t.center).add(ul)),this.expandByPoint(mo.copy(t.center).sub(ul))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},bi=new T,dl=new T,ha=new T,Zi=new T,fl=new T,ua=new T,pl=new T,Xa=class{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=bi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bi.copy(this.origin).addScaledVector(this.direction,e),bi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){dl.copy(t).add(e).multiplyScalar(.5),ha.copy(e).sub(t).normalize(),Zi.copy(this.origin).sub(dl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ha),a=Zi.dot(this.direction),c=-Zi.dot(ha),l=Zi.lengthSq(),h=Math.abs(1-o*o),u,d,p,x;if(h>0)if(u=o*c-a,d=o*a-c,x=r*h,u>=0)if(d>=-x)if(d<=x){let y=1/h;u*=y,d*=y,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-x?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=x?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(dl).addScaledVector(ha,d),p}intersectSphere(t,e){bi.subVectors(t.center,this.origin);let i=bi.dot(this.direction),s=bi.dot(bi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,bi)!==null}intersectTriangle(t,e,i,s,r){fl.subVectors(e,t),ua.subVectors(i,t),pl.crossVectors(fl,ua);let o=this.direction.dot(pl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zi.subVectors(this.origin,t);let c=a*this.direction.dot(ua.crossVectors(Zi,ua));if(c<0)return null;let l=a*this.direction.dot(fl.cross(Zi));if(l<0||c+l>o)return null;let h=-a*Zi.dot(pl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xe=class n{constructor(t,e,i,s,r,o,a,c,l,h,u,d,p,x,y,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,h,u,d,p,x,y,g)}set(t,e,i,s,r,o,a,c,l,h,u,d,p,x,y,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=p,m[7]=x,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/rr.setFromMatrixColumn(t,0).length(),r=1/rr.setFromMatrixColumn(t,1).length(),o=1/rr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,x=a*h,y=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+x*l,e[5]=d-y*l,e[9]=-a*c,e[2]=y-d*l,e[6]=x+p*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,p=c*u,x=l*h,y=l*u;e[0]=d+y*a,e[4]=x*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-x,e[6]=y+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,p=c*u,x=l*h,y=l*u;e[0]=d-y*a,e[4]=-o*u,e[8]=x+p*a,e[1]=p+x*a,e[5]=o*h,e[9]=y-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,p=o*u,x=a*h,y=a*u;e[0]=c*h,e[4]=x*l-p,e[8]=d*l+y,e[1]=c*u,e[5]=y*l+d,e[9]=p*l-x,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,p=o*l,x=a*c,y=a*l;e[0]=c*h,e[4]=y-d*u,e[8]=x*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+x,e[10]=d-y*u}else if(t.order==="XZY"){let d=o*c,p=o*l,x=a*c,y=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+y,e[5]=o*h,e[9]=p*u-x,e[2]=x*u-p,e[6]=a*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vg,t,Gg)}lookAt(t,e,i){let s=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ji.crossVectors(i,Sn),Ji.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ji.crossVectors(i,Sn)),Ji.normalize(),da.crossVectors(Sn,Ji),s[0]=Ji.x,s[4]=da.x,s[8]=Sn.x,s[1]=Ji.y,s[5]=da.y,s[9]=Sn.y,s[2]=Ji.z,s[6]=da.z,s[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],p=i[13],x=i[2],y=i[6],g=i[10],m=i[14],_=i[3],M=i[7],v=i[11],I=i[15],A=s[0],C=s[4],P=s[8],S=s[12],b=s[1],L=s[5],H=s[9],z=s[13],G=s[2],j=s[6],q=s[10],nt=s[14],$=s[3],ht=s[7],yt=s[11],Lt=s[15];return r[0]=o*A+a*b+c*G+l*$,r[4]=o*C+a*L+c*j+l*ht,r[8]=o*P+a*H+c*q+l*yt,r[12]=o*S+a*z+c*nt+l*Lt,r[1]=h*A+u*b+d*G+p*$,r[5]=h*C+u*L+d*j+p*ht,r[9]=h*P+u*H+d*q+p*yt,r[13]=h*S+u*z+d*nt+p*Lt,r[2]=x*A+y*b+g*G+m*$,r[6]=x*C+y*L+g*j+m*ht,r[10]=x*P+y*H+g*q+m*yt,r[14]=x*S+y*z+g*nt+m*Lt,r[3]=_*A+M*b+v*G+I*$,r[7]=_*C+M*L+v*j+I*ht,r[11]=_*P+M*H+v*q+I*yt,r[15]=_*S+M*z+v*nt+I*Lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],x=t[3],y=t[7],g=t[11],m=t[15];return x*(+r*c*u-s*l*u-r*a*d+i*l*d+s*a*p-i*c*p)+y*(+e*c*p-e*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+g*(+e*l*u-e*a*p-r*o*u+i*o*p+r*a*h-i*l*h)+m*(-s*a*h-e*c*u+e*a*d+s*o*u-i*o*d+i*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],x=t[12],y=t[13],g=t[14],m=t[15],_=u*g*l-y*d*l+y*c*p-a*g*p-u*c*m+a*d*m,M=x*d*l-h*g*l-x*c*p+o*g*p+h*c*m-o*d*m,v=h*y*l-x*u*l+x*a*p-o*y*p-h*a*m+o*u*m,I=x*u*c-h*y*c-x*a*d+o*y*d+h*a*g-o*u*g,A=e*_+i*M+s*v+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return t[0]=_*C,t[1]=(y*d*r-u*g*r-y*s*p+i*g*p+u*s*m-i*d*m)*C,t[2]=(a*g*r-y*c*r+y*s*l-i*g*l-a*s*m+i*c*m)*C,t[3]=(u*c*r-a*d*r-u*s*l+i*d*l+a*s*p-i*c*p)*C,t[4]=M*C,t[5]=(h*g*r-x*d*r+x*s*p-e*g*p-h*s*m+e*d*m)*C,t[6]=(x*c*r-o*g*r-x*s*l+e*g*l+o*s*m-e*c*m)*C,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*p+e*c*p)*C,t[8]=v*C,t[9]=(x*u*r-h*y*r-x*i*p+e*y*p+h*i*m-e*u*m)*C,t[10]=(o*y*r-x*a*r+x*i*l-e*y*l-o*i*m+e*a*m)*C,t[11]=(h*a*r-o*u*r-h*i*l+e*u*l+o*i*p-e*a*p)*C,t[12]=I*C,t[13]=(h*y*s-x*u*s+x*i*d-e*y*d-h*i*g+e*u*g)*C,t[14]=(x*a*s-o*y*s-x*i*c+e*y*c+o*i*g-e*a*g)*C,t[15]=(o*u*s-h*a*s+h*i*c-e*u*c-o*i*d+e*a*d)*C,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,x=r*u,y=o*h,g=o*u,m=a*u,_=c*l,M=c*h,v=c*u,I=i.x,A=i.y,C=i.z;return s[0]=(1-(y+m))*I,s[1]=(p+v)*I,s[2]=(x-M)*I,s[3]=0,s[4]=(p-v)*A,s[5]=(1-(d+m))*A,s[6]=(g+_)*A,s[7]=0,s[8]=(x+M)*C,s[9]=(g-_)*C,s[10]=(1-(d+y))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=rr.set(s[0],s[1],s[2]).length(),o=rr.set(s[4],s[5],s[6]).length(),a=rr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Gn.copy(this);let l=1/r,h=1/o,u=1/a;return Gn.elements[0]*=l,Gn.elements[1]*=l,Gn.elements[2]*=l,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=u,Gn.elements[9]*=u,Gn.elements[10]*=u,e.setFromRotationMatrix(Gn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Ci){let c=this.elements,l=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),p,x;if(a===Ci)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ha)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Ci){let c=this.elements,l=1/(e-t),h=1/(i-s),u=1/(o-r),d=(e+t)*l,p=(i+s)*h,x,y;if(a===Ci)x=(o+r)*u,y=-2*u;else if(a===Ha)x=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=y,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},rr=new T,Gn=new xe,Vg=new T(0,0,0),Gg=new T(1,1,1),Ji=new T,da=new T,Sn=new T,sf=new xe,rf=new hn,Mn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(nn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(nn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return sf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rf.setFromEuler(this),this.setFromQuaternion(rf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mn.DEFAULT_ORDER="XYZ";var $a=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Wg=0,of=new T,or=new hn,Si=new xe,fa=new T,go=new T,Xg=new T,$g=new hn,af=new T(1,0,0),cf=new T(0,1,0),lf=new T(0,0,1),hf={type:"added"},qg={type:"removed"},ar={type:"childadded",child:null},ml={type:"childremoved",child:null},Ke=class n extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new T,e=new Mn,i=new hn,s=new T(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new Zt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return or.setFromAxisAngle(t,e),this.quaternion.multiply(or),this}rotateOnWorldAxis(t,e){return or.setFromAxisAngle(t,e),this.quaternion.premultiply(or),this}rotateX(t){return this.rotateOnAxis(af,t)}rotateY(t){return this.rotateOnAxis(cf,t)}rotateZ(t){return this.rotateOnAxis(lf,t)}translateOnAxis(t,e){return of.copy(t).applyQuaternion(this.quaternion),this.position.add(of.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(af,t)}translateY(t){return this.translateOnAxis(cf,t)}translateZ(t){return this.translateOnAxis(lf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?fa.copy(t):fa.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(go,fa,this.up):Si.lookAt(fa,go,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),or.setFromRotationMatrix(Si),this.quaternion.premultiply(or.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hf),ar.child=t,this.dispatchEvent(ar),ar.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qg),ml.child=t,this.dispatchEvent(ml),ml.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hf),ar.child=t,this.dispatchEvent(ar),ar.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,t,Xg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,$g,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),x=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ke.DEFAULT_UP=new T(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wn=new T,wi=new T,gl=new T,Ti=new T,cr=new T,lr=new T,uf=new T,xl=new T,yl=new T,vl=new T,_l=new Se,Ml=new Se,El=new Se,ts=class n{constructor(t=new T,e=new T,i=new T){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Wn.subVectors(t,e),s.cross(Wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Wn.subVectors(s,e),wi.subVectors(i,e),gl.subVectors(t,e);let o=Wn.dot(Wn),a=Wn.dot(wi),c=Wn.dot(gl),l=wi.dot(wi),h=wi.dot(gl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-a*h)*d,x=(o*h-a*c)*d;return r.set(1-p-x,x,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ti.x),c.addScaledVector(o,Ti.y),c.addScaledVector(a,Ti.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return _l.setScalar(0),Ml.setScalar(0),El.setScalar(0),_l.fromBufferAttribute(t,e),Ml.fromBufferAttribute(t,i),El.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(_l,r.x),o.addScaledVector(Ml,r.y),o.addScaledVector(El,r.z),o}static isFrontFacing(t,e,i,s){return Wn.subVectors(i,e),wi.subVectors(t,e),Wn.cross(wi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Wn.cross(wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;cr.subVectors(s,i),lr.subVectors(r,i),xl.subVectors(t,i);let c=cr.dot(xl),l=lr.dot(xl);if(c<=0&&l<=0)return e.copy(i);yl.subVectors(t,s);let h=cr.dot(yl),u=lr.dot(yl);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(cr,o);vl.subVectors(t,r);let p=cr.dot(vl),x=lr.dot(vl);if(x>=0&&p<=x)return e.copy(r);let y=p*l-c*x;if(y<=0&&l>=0&&x<=0)return a=l/(l-x),e.copy(i).addScaledVector(lr,a);let g=h*x-p*u;if(g<=0&&u-h>=0&&p-x>=0)return uf.subVectors(r,s),a=(u-h)/(u-h+(p-x)),e.copy(s).addScaledVector(uf,a);let m=1/(g+y+d);return o=y*m,a=d*m,e.copy(i).addScaledVector(cr,o).addScaledVector(lr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},pp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},pa={h:0,s:0,l:0};function bl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var It=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=i,pe.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=pe.workingColorSpace){if(t=_u(t,1),e=nn(e,0,1),i=nn(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=bl(o,r,t+1/3),this.g=bl(o,r,t),this.b=bl(o,r,t-1/3)}return pe.toWorkingColorSpace(this,s),this}setStyle(t,e=Ie){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let i=pp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}copyLinearToSRGB(t){return this.r=Mr(t.r),this.g=Mr(t.g),this.b=Mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return pe.fromWorkingColorSpace(cn.copy(this),t),Math.round(nn(cn.r*255,0,255))*65536+Math.round(nn(cn.g*255,0,255))*256+Math.round(nn(cn.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(cn.copy(this),e);let i=cn.r,s=cn.g,r=cn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=Ie){pe.fromWorkingColorSpace(cn.copy(this),t);let e=cn.r,i=cn.g,s=cn.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ki),this.setHSL(Ki.h+t,Ki.s+e,Ki.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ki),t.getHSL(pa);let i=Ao(Ki.h,pa.h,e),s=Ao(Ki.s,pa.s,e),r=Ao(Ki.l,pa.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new It;It.NAMES=pp;var Yg=0,Ui=class extends ss{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=Ii(),this.name="",this.blending=li,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zl,this.blendDst=Bl,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==li&&(i.blending=this.blending),this.side!==is&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zl&&(i.blendSrc=this.blendSrc),this.blendDst!==Bl&&(i.blendDst=this.blendDst),this.blendEquation!==Rs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==tr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==tr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},re=class extends Ui{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=tp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var qe=new T,ma=new ot,ze=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Sh,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ma.fromBufferAttribute(this,e),ma.applyMatrix3(t),this.setXY(e,ma.x,ma.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ee(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sh&&(t.usage=this.usage),t}};var qa=class extends ze{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ya=class extends ze{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var se=class extends ze{constructor(t,e,i){super(new Float32Array(t),e,i)}},Zg=0,Pn=new xe,Sl=new Ke,hr=new T,wn=new qn,xo=new qn,en=new T,we=class n extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zg++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fp(t)?Ya:qa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,i){return Pn.makeTranslation(t,e,i),this.applyMatrix4(Pn),this}scale(t,e,i){return Pn.makeScale(t,e,i),this.applyMatrix4(Pn),this}lookAt(t){return Sl.lookAt(t),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){let i=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];xo.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(wn.min,xo.min),wn.expandByPoint(en),en.addVectors(wn.max,xo.max),wn.expandByPoint(en)):(wn.expandByPoint(xo.min),wn.expandByPoint(xo.max))}wn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)en.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(en));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)en.fromBufferAttribute(a,l),c&&(hr.fromBufferAttribute(t,l),en.add(hr)),s=Math.max(s,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<i.count;P++)a[P]=new T,c[P]=new T;let l=new T,h=new T,u=new T,d=new ot,p=new ot,x=new ot,y=new T,g=new T;function m(P,S,b){l.fromBufferAttribute(i,P),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,b),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,S),x.fromBufferAttribute(r,b),h.sub(l),u.sub(l),p.sub(d),x.sub(d);let L=1/(p.x*x.y-x.x*p.y);isFinite(L)&&(y.copy(h).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(L),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(L),a[P].add(y),a[S].add(y),a[b].add(y),c[P].add(g),c[S].add(g),c[b].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let P=0,S=_.length;P<S;++P){let b=_[P],L=b.start,H=b.count;for(let z=L,G=L+H;z<G;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let M=new T,v=new T,I=new T,A=new T;function C(P){I.fromBufferAttribute(s,P),A.copy(I);let S=a[P];M.copy(S),M.sub(I.multiplyScalar(I.dot(S))).normalize(),v.crossVectors(A,S);let L=v.dot(c[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,L)}for(let P=0,S=_.length;P<S;++P){let b=_[P],L=b.start,H=b.count;for(let z=L,G=L+H;z<G;z+=3)C(t.getX(z+0)),C(t.getX(z+1)),C(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new T,r=new T,o=new T,a=new T,c=new T,l=new T,h=new T,u=new T;if(t)for(let d=0,p=t.count;d<p;d+=3){let x=t.getX(d+0),y=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,x),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,g),a.add(h),c.add(h),l.add(h),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),p=0,x=0;for(let y=0,g=c.length;y<g;y++){a.isInterleavedBufferAttribute?p=c[y]*a.data.stride+a.offset:p=c[y]*h;for(let m=0;m<h;m++)d[x++]=l[p++]}return new ze(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=t(d,i);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},df=new xe,bs=new Xa,ga=new rs,ff=new T,xa=new T,ya=new T,va=new T,wl=new T,_a=new T,pf=new T,Ma=new T,bt=class extends Ke{constructor(t=new we,e=new re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){_a.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(wl.fromBufferAttribute(u,t),o?_a.addScaledVector(wl,h):_a.addScaledVector(wl.sub(e),h))}e.add(_a)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(r),bs.copy(t.ray).recast(t.near),!(ga.containsPoint(bs.origin)===!1&&(bs.intersectSphere(ga,ff)===null||bs.origin.distanceToSquared(ff)>(t.far-t.near)**2))&&(df.copy(r).invert(),bs.copy(t.ray).applyMatrix4(df),!(i.boundingBox!==null&&bs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,bs)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=d.length;x<y;x++){let g=d[x],m=o[g.materialIndex],_=Math.max(g.start,p.start),M=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let v=_,I=M;v<I;v+=3){let A=a.getX(v),C=a.getX(v+1),P=a.getX(v+2);s=Ea(this,m,t,i,l,h,u,A,C,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let g=x,m=y;g<m;g+=3){let _=a.getX(g),M=a.getX(g+1),v=a.getX(g+2);s=Ea(this,o,t,i,l,h,u,_,M,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,y=d.length;x<y;x++){let g=d[x],m=o[g.materialIndex],_=Math.max(g.start,p.start),M=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let v=_,I=M;v<I;v+=3){let A=v,C=v+1,P=v+2;s=Ea(this,m,t,i,l,h,u,A,C,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let g=x,m=y;g<m;g+=3){let _=g,M=g+1,v=g+2;s=Ea(this,o,t,i,l,h,u,_,M,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Jg(n,t,e,i,s,r,o,a){let c;if(t.side===ln?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===is,a),c===null)return null;Ma.copy(a),Ma.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Ma);return l<e.near||l>e.far?null:{distance:l,point:Ma.clone(),object:n}}function Ea(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,xa),n.getVertexPosition(c,ya),n.getVertexPosition(l,va);let h=Jg(n,t,e,i,xa,ya,va,pf);if(h){let u=new T;ts.getBarycoord(pf,xa,ya,va,u),s&&(h.uv=ts.getInterpolatedAttribute(s,a,c,l,u,new ot)),r&&(h.uv1=ts.getInterpolatedAttribute(r,a,c,l,u,new ot)),o&&(h.normal=ts.getInterpolatedAttribute(o,a,c,l,u,new T),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new T,materialIndex:0};ts.getNormal(xa,ya,va,d.normal),h.face=d,h.barycoord=u}return h}var ne=class n extends we{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,p=0;x("z","y","x",-1,-1,i,e,t,o,r,0),x("z","y","x",1,-1,i,e,-t,o,r,1),x("x","z","y",1,1,t,i,e,s,o,2),x("x","z","y",1,-1,t,i,-e,s,o,3),x("x","y","z",1,-1,t,e,i,s,r,4),x("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(u,2));function x(y,g,m,_,M,v,I,A,C,P,S){let b=v/C,L=I/P,H=v/2,z=I/2,G=A/2,j=C+1,q=P+1,nt=0,$=0,ht=new T;for(let yt=0;yt<q;yt++){let Lt=yt*L-z;for(let te=0;te<j;te++){let Te=te*b-H;ht[y]=Te*_,ht[g]=Lt*M,ht[m]=G,l.push(ht.x,ht.y,ht.z),ht[y]=0,ht[g]=0,ht[m]=A>0?1:-1,h.push(ht.x,ht.y,ht.z),u.push(te/C),u.push(1-yt/P),nt+=1}}for(let yt=0;yt<P;yt++)for(let Lt=0;Lt<C;Lt++){let te=d+Lt+j*yt,Te=d+Lt+j*(yt+1),Z=d+(Lt+1)+j*(yt+1),it=d+(Lt+1)+j*yt;c.push(te,Te,it),c.push(Te,Z,it),$+=6}a.addGroup(p,$,S),p+=$,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Cr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function pn(n){let t={};for(let e=0;e<n.length;e++){let i=Cr(n[e]);for(let s in i)t[s]=i[s]}return t}function Kg(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function mp(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}var jg={clone:Cr,merge:pn},Qg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ln=class extends Ui{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qg,this.fragmentShader=tx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cr(t.uniforms),this.uniformsGroups=Kg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Za=class extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Ci}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ji=new T,mf=new ot,gf=new ot,Xe=class extends Za{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(To*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(To*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ji.x,ji.y).multiplyScalar(-t/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-t/ji.z)}getViewSize(t,e){return this.getViewBounds(t,mf,gf),e.subVectors(gf,mf)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(To*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ur=-90,dr=1,Rh=class extends Ke{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xe(ur,dr,t,e);s.layers=this.layers,this.add(s);let r=new Xe(ur,dr,t,e);r.layers=this.layers,this.add(r);let o=new Xe(ur,dr,t,e);o.layers=this.layers,this.add(o);let a=new Xe(ur,dr,t,e);a.layers=this.layers,this.add(a);let c=new Xe(ur,dr,t,e);c.layers=this.layers,this.add(c);let l=new Xe(ur,dr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},Ja=class extends _n{constructor(t,e,i,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Sr,super(t,e,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ch=class extends Di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ja(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ai}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ne(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:Cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:es});r.uniforms.tEquirect.value=e;let o=new bt(s,r),a=e.minFilter;return e.minFilter===Ps&&(e.minFilter=ai),new Rh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Tl=new T,ex=new T,nx=new Zt,Ri=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Tl.subVectors(i,e).cross(ex.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Tl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||nx.getNormalMatrix(t),s=this.coplanarPoint(Tl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ss=new rs,ba=new T,Do=class{constructor(t=new Ri,e=new Ri,i=new Ri,s=new Ri,r=new Ri,o=new Ri){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ci){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],x=s[9],y=s[10],g=s[11],m=s[12],_=s[13],M=s[14],v=s[15];if(i[0].setComponents(c-r,d-l,g-p,v-m).normalize(),i[1].setComponents(c+r,d+l,g+p,v+m).normalize(),i[2].setComponents(c+o,d+h,g+x,v+_).normalize(),i[3].setComponents(c-o,d-h,g-x,v-_).normalize(),i[4].setComponents(c-a,d-u,g-y,v-M).normalize(),e===Ci)i[5].setComponents(c+a,d+u,g+y,v+M).normalize();else if(e===Ha)i[5].setComponents(a,u,y,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(t){return Ss.center.set(0,0,0),Ss.radius=.7071067811865476,Ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(ba.x=s.normal.x>0?t.max.x:t.min.x,ba.y=s.normal.y>0?t.max.y:t.min.y,ba.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ba)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function gp(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function ix(n){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<u.length;p++){let x=u[d],y=u[p];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++d,u[d]=y)}u.length=d+1;for(let p=0,x=u.length;p<x;p++){let y=u[p];n.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Yn=class n extends we{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,p=[],x=[],y=[],g=[];for(let m=0;m<h;m++){let _=m*d-o;for(let M=0;M<l;M++){let v=M*u-r;x.push(v,-_,0),y.push(0,0,1),g.push(M/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let _=0;_<a;_++){let M=_+l*m,v=_+l*(m+1),I=_+1+l*(m+1),A=_+1+l*m;p.push(M,v,A),p.push(v,I,A)}this.setIndex(p),this.setAttribute("position",new se(x,3)),this.setAttribute("normal",new se(y,3)),this.setAttribute("uv",new se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},sx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rx=`#ifdef USE_ALPHAHASH
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
#endif`,ox=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ax=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hx=`#ifdef USE_AOMAP
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
#endif`,ux=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dx=`#ifdef USE_BATCHING
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
#endif`,fx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,px=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xx=`#ifdef USE_IRIDESCENCE
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
#endif`,yx=`#ifdef USE_BUMPMAP
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
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ax=`#define PI 3.141592653589793
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
} // validated`,Rx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cx=`vec3 transformedNormal = objectNormal;
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
#endif`,Ix=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Px=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ux="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fx=`#ifdef USE_ENVMAP
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
#endif`,Ox=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kx=`#ifdef USE_ENVMAP
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
#endif`,zx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bx=`#ifdef USE_ENVMAP
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
#endif`,Hx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xx=`#ifdef USE_GRADIENTMAP
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
}`,$x=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zx=`uniform bool receiveShadow;
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
#endif`,Jx=`#ifdef USE_ENVMAP
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
#endif`,Kx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ey=`PhysicalMaterial material;
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
#endif`,ny=`struct PhysicalMaterial {
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
}`,iy=`
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
#endif`,sy=`#if defined( RE_IndirectDiffuse )
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
#endif`,ry=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ay=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ly=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fy=`#if defined( USE_POINTS_UV )
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
#endif`,py=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,my=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vy=`#ifdef USE_MORPHTARGETS
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
#endif`,_y=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,My=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ey=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,by=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ty=`#ifdef USE_NORMALMAP
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
#endif`,Ay=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ry=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Iy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Py=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ly=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ny=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Oy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ky=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,By=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vy=`float getShadowMask() {
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
}`,Gy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wy=`#ifdef USE_SKINNING
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
#endif`,Xy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$y=`#ifdef USE_SKINNING
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
#endif`,qy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ky=`#ifdef USE_TRANSMISSION
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
#endif`,jy=`#ifdef USE_TRANSMISSION
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
#endif`,Qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,iv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sv=`uniform sampler2D t2D;
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
}`,rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ov=`#ifdef ENVMAP_TYPE_CUBE
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
}`,av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lv=`#include <common>
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
}`,hv=`#if DEPTH_PACKING == 3200
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
}`,uv=`#define DISTANCE
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
}`,dv=`#define DISTANCE
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
}`,fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mv=`uniform float scale;
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
}`,gv=`uniform vec3 diffuse;
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
}`,xv=`#include <common>
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
}`,yv=`uniform vec3 diffuse;
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
}`,vv=`#define LAMBERT
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
}`,_v=`#define LAMBERT
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
}`,Mv=`#define MATCAP
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
}`,Ev=`#define MATCAP
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
}`,bv=`#define NORMAL
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
}`,Sv=`#define NORMAL
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
}`,wv=`#define PHONG
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
}`,Tv=`#define PHONG
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
}`,Av=`#define STANDARD
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
}`,Rv=`#define STANDARD
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
}`,Cv=`#define TOON
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
}`,Iv=`#define TOON
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
}`,Pv=`uniform float size;
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
}`,Lv=`uniform vec3 diffuse;
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
}`,Dv=`#include <common>
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
}`,Uv=`uniform vec3 color;
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
}`,Nv=`uniform float rotation;
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
}`,Fv=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:sx,alphahash_pars_fragment:rx,alphamap_fragment:ox,alphamap_pars_fragment:ax,alphatest_fragment:cx,alphatest_pars_fragment:lx,aomap_fragment:hx,aomap_pars_fragment:ux,batching_pars_vertex:dx,batching_vertex:fx,begin_vertex:px,beginnormal_vertex:mx,bsdfs:gx,iridescence_fragment:xx,bumpmap_pars_fragment:yx,clipping_planes_fragment:vx,clipping_planes_pars_fragment:_x,clipping_planes_pars_vertex:Mx,clipping_planes_vertex:Ex,color_fragment:bx,color_pars_fragment:Sx,color_pars_vertex:wx,color_vertex:Tx,common:Ax,cube_uv_reflection_fragment:Rx,defaultnormal_vertex:Cx,displacementmap_pars_vertex:Ix,displacementmap_vertex:Px,emissivemap_fragment:Lx,emissivemap_pars_fragment:Dx,colorspace_fragment:Ux,colorspace_pars_fragment:Nx,envmap_fragment:Fx,envmap_common_pars_fragment:Ox,envmap_pars_fragment:kx,envmap_pars_vertex:zx,envmap_physical_pars_fragment:Jx,envmap_vertex:Bx,fog_vertex:Hx,fog_pars_vertex:Vx,fog_fragment:Gx,fog_pars_fragment:Wx,gradientmap_pars_fragment:Xx,lightmap_pars_fragment:$x,lights_lambert_fragment:qx,lights_lambert_pars_fragment:Yx,lights_pars_begin:Zx,lights_toon_fragment:Kx,lights_toon_pars_fragment:jx,lights_phong_fragment:Qx,lights_phong_pars_fragment:ty,lights_physical_fragment:ey,lights_physical_pars_fragment:ny,lights_fragment_begin:iy,lights_fragment_maps:sy,lights_fragment_end:ry,logdepthbuf_fragment:oy,logdepthbuf_pars_fragment:ay,logdepthbuf_pars_vertex:cy,logdepthbuf_vertex:ly,map_fragment:hy,map_pars_fragment:uy,map_particle_fragment:dy,map_particle_pars_fragment:fy,metalnessmap_fragment:py,metalnessmap_pars_fragment:my,morphinstance_vertex:gy,morphcolor_vertex:xy,morphnormal_vertex:yy,morphtarget_pars_vertex:vy,morphtarget_vertex:_y,normal_fragment_begin:My,normal_fragment_maps:Ey,normal_pars_fragment:by,normal_pars_vertex:Sy,normal_vertex:wy,normalmap_pars_fragment:Ty,clearcoat_normal_fragment_begin:Ay,clearcoat_normal_fragment_maps:Ry,clearcoat_pars_fragment:Cy,iridescence_pars_fragment:Iy,opaque_fragment:Py,packing:Ly,premultiplied_alpha_fragment:Dy,project_vertex:Uy,dithering_fragment:Ny,dithering_pars_fragment:Fy,roughnessmap_fragment:Oy,roughnessmap_pars_fragment:ky,shadowmap_pars_fragment:zy,shadowmap_pars_vertex:By,shadowmap_vertex:Hy,shadowmask_pars_fragment:Vy,skinbase_vertex:Gy,skinning_pars_vertex:Wy,skinning_vertex:Xy,skinnormal_vertex:$y,specularmap_fragment:qy,specularmap_pars_fragment:Yy,tonemapping_fragment:Zy,tonemapping_pars_fragment:Jy,transmission_fragment:Ky,transmission_pars_fragment:jy,uv_pars_fragment:Qy,uv_pars_vertex:tv,uv_vertex:ev,worldpos_vertex:nv,background_vert:iv,background_frag:sv,backgroundCube_vert:rv,backgroundCube_frag:ov,cube_vert:av,cube_frag:cv,depth_vert:lv,depth_frag:hv,distanceRGBA_vert:uv,distanceRGBA_frag:dv,equirect_vert:fv,equirect_frag:pv,linedashed_vert:mv,linedashed_frag:gv,meshbasic_vert:xv,meshbasic_frag:yv,meshlambert_vert:vv,meshlambert_frag:_v,meshmatcap_vert:Mv,meshmatcap_frag:Ev,meshnormal_vert:bv,meshnormal_frag:Sv,meshphong_vert:wv,meshphong_frag:Tv,meshphysical_vert:Av,meshphysical_frag:Rv,meshtoon_vert:Cv,meshtoon_frag:Iv,points_vert:Pv,points_frag:Lv,shadow_vert:Dv,shadow_frag:Uv,sprite_vert:Nv,sprite_frag:Fv},rt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},oi={basic:{uniforms:pn([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:pn([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new It(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:pn([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:pn([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:pn([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new It(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:pn([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:pn([rt.points,rt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:pn([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:pn([rt.common,rt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:pn([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:pn([rt.sprite,rt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:pn([rt.common,rt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:pn([rt.lights,rt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};oi.physical={uniforms:pn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var Sa={r:0,b:0,g:0},ws=new Mn,Ov=new xe;function kv(n,t,e,i,s,r,o){let a=new It(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function x(_){let M=_.isScene===!0?_.background:null;return M&&M.isTexture&&(M=(_.backgroundBlurriness>0?e:t).get(M)),M}function y(_){let M=!1,v=x(_);v===null?m(a,c):v&&v.isColor&&(m(v,1),M=!0);let I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(_,M){let v=x(M);v&&(v.isCubeTexture||v.mapping===dc)?(h===void 0&&(h=new bt(new ne(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Cr(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ws.copy(M.backgroundRotation),ws.x*=-1,ws.y*=-1,ws.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ov.makeRotationFromEuler(ws)),h.material.toneMapped=pe.getTransfer(v.colorSpace)!==be,(u!==v||d!==v.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=n.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new bt(new Yn(2,2),new Ln({name:"BackgroundMaterial",uniforms:Cr(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=pe.getTransfer(v.colorSpace)!==be,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,p=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,M){_.getRGB(Sa,mp(n)),i.buffers.color.setClear(Sa.r,Sa.g,Sa.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),c=M,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,m(a,c)},render:y,addToRenderList:g}}function zv(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(b,L,H,z,G){let j=!1,q=u(z,H,L);r!==q&&(r=q,l(r.object)),j=p(b,z,H,G),j&&x(b,z,H,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,v(b,L,H,z),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return n.createVertexArray()}function l(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function u(b,L,H){let z=H.wireframe===!0,G=i[b.id];G===void 0&&(G={},i[b.id]=G);let j=G[L.id];j===void 0&&(j={},G[L.id]=j);let q=j[z];return q===void 0&&(q=d(c()),j[z]=q),q}function d(b){let L=[],H=[],z=[];for(let G=0;G<e;G++)L[G]=0,H[G]=0,z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:z,object:b,attributes:{},index:null}}function p(b,L,H,z){let G=r.attributes,j=L.attributes,q=0,nt=H.getAttributes();for(let $ in nt)if(nt[$].location>=0){let yt=G[$],Lt=j[$];if(Lt===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(Lt=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(Lt=b.instanceColor)),yt===void 0||yt.attribute!==Lt||Lt&&yt.data!==Lt.data)return!0;q++}return r.attributesNum!==q||r.index!==z}function x(b,L,H,z){let G={},j=L.attributes,q=0,nt=H.getAttributes();for(let $ in nt)if(nt[$].location>=0){let yt=j[$];yt===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(yt=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(yt=b.instanceColor));let Lt={};Lt.attribute=yt,yt&&yt.data&&(Lt.data=yt.data),G[$]=Lt,q++}r.attributes=G,r.attributesNum=q,r.index=z}function y(){let b=r.newAttributes;for(let L=0,H=b.length;L<H;L++)b[L]=0}function g(b){m(b,0)}function m(b,L){let H=r.newAttributes,z=r.enabledAttributes,G=r.attributeDivisors;H[b]=1,z[b]===0&&(n.enableVertexAttribArray(b),z[b]=1),G[b]!==L&&(n.vertexAttribDivisor(b,L),G[b]=L)}function _(){let b=r.newAttributes,L=r.enabledAttributes;for(let H=0,z=L.length;H<z;H++)L[H]!==b[H]&&(n.disableVertexAttribArray(H),L[H]=0)}function M(b,L,H,z,G,j,q){q===!0?n.vertexAttribIPointer(b,L,H,G,j):n.vertexAttribPointer(b,L,H,z,G,j)}function v(b,L,H,z){y();let G=z.attributes,j=H.getAttributes(),q=L.defaultAttributeValues;for(let nt in j){let $=j[nt];if($.location>=0){let ht=G[nt];if(ht===void 0&&(nt==="instanceMatrix"&&b.instanceMatrix&&(ht=b.instanceMatrix),nt==="instanceColor"&&b.instanceColor&&(ht=b.instanceColor)),ht!==void 0){let yt=ht.normalized,Lt=ht.itemSize,te=t.get(ht);if(te===void 0)continue;let Te=te.buffer,Z=te.type,it=te.bytesPerElement,At=Z===n.INT||Z===n.UNSIGNED_INT||ht.gpuType===du;if(ht.isInterleavedBufferAttribute){let ut=ht.data,kt=ut.stride,$t=ht.offset;if(ut.isInstancedInterleavedBuffer){for(let ee=0;ee<$.locationSize;ee++)m($.location+ee,ut.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let ee=0;ee<$.locationSize;ee++)g($.location+ee);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let ee=0;ee<$.locationSize;ee++)M($.location+ee,Lt/$.locationSize,Z,yt,kt*it,($t+Lt/$.locationSize*ee)*it,At)}else{if(ht.isInstancedBufferAttribute){for(let ut=0;ut<$.locationSize;ut++)m($.location+ut,ht.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ut=0;ut<$.locationSize;ut++)g($.location+ut);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let ut=0;ut<$.locationSize;ut++)M($.location+ut,Lt/$.locationSize,Z,yt,Lt*it,Lt/$.locationSize*ut*it,At)}}else if(q!==void 0){let yt=q[nt];if(yt!==void 0)switch(yt.length){case 2:n.vertexAttrib2fv($.location,yt);break;case 3:n.vertexAttrib3fv($.location,yt);break;case 4:n.vertexAttrib4fv($.location,yt);break;default:n.vertexAttrib1fv($.location,yt)}}}}_()}function I(){P();for(let b in i){let L=i[b];for(let H in L){let z=L[H];for(let G in z)h(z[G].object),delete z[G];delete L[H]}delete i[b]}}function A(b){if(i[b.id]===void 0)return;let L=i[b.id];for(let H in L){let z=L[H];for(let G in z)h(z[G].object),delete z[G];delete L[H]}delete i[b.id]}function C(b){for(let L in i){let H=i[L];if(H[b.id]===void 0)continue;let z=H[b.id];for(let G in z)h(z[G].object),delete z[G];delete H[b.id]}}function P(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:g,disableUnusedAttributes:_}}function Bv(n,t,e){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x];e.update(p,i,1)}function c(l,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<l.length;x++)o(l[x],h[x],d[x]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let x=0;for(let y=0;y<u;y++)x+=h[y]*d[y];e.update(x,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Hv(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==$n&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let P=C===ko&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Li&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ci&&!P)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=x>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:I,maxSamples:A}}function Vv(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Ri,a=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let x=u.clippingPlanes,y=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||x===null||x.length===0||r&&!g)r?h(null):l();else{let _=r?0:i,M=_*4,v=m.clippingState||null;c.value=v,v=h(x,d,M,p);for(let I=0;I!==M;++I)v[I]=e[I];m.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,p,x){let y=u!==null?u.length:0,g=null;if(y!==0){if(g=c.value,x!==!0||g===null){let m=p+y*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,v=p;M!==y;++M,v+=4)o.copy(u[M]).applyMatrix4(_,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}function Gv(n){let t=new WeakMap;function e(o,a){return a===Yl?o.mapping=Sr:a===Zl&&(o.mapping=wr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Yl||a===Zl)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ch(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Ka=class extends Za{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},vr=4,xf=[.125,.215,.35,.446,.526,.582],Cs=20,Al=new Ka,yf=new It,Rl=null,Cl=0,Il=0,Pl=!1,As=(1+Math.sqrt(5))/2,fr=1/As,vf=[new T(-As,fr,0),new T(As,fr,0),new T(-fr,0,As),new T(fr,0,As),new T(0,As,-fr),new T(0,As,fr),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],ja=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Rl=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Rl,Cl,Il),this._renderer.xr.enabled=Pl,t.scissorTest=!1,wa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Sr||t.mapping===wr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rl=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:ko,format:$n,colorSpace:Nr,depthBuffer:!1},s=_f(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_f(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wv(r)),this._blurMaterial=Xv(r,t,e)}return s}_compileMaterial(t){let e=new bt(this._lodPlanes[0],t);this._renderer.compile(e,Al)}_sceneToCubeUV(t,e,i,s){let a=new Xe(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(yf),h.toneMapping=ns,h.autoClear=!1;let p=new re({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),x=new bt(new ne,p),y=!1,g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,y=!0):(p.color.copy(yf),y=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):_===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let M=this._cubeSize;wa(s,_*M,m>2?M:0,M,M),h.setRenderTarget(s),y&&h.render(x,a),h.render(t,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Sr||t.mapping===wr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ef()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;wa(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Al)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=vf[(s-r-1)%vf.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new bt(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Cs-1),y=r/x,g=isFinite(r)?1+Math.floor(h*y):Cs;g>Cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Cs}`);let m=[],_=0;for(let C=0;C<Cs;++C){let P=C/y,S=Math.exp(-P*P/2);m.push(S),C===0?_+=S:C<g&&(_+=2*S)}for(let C=0;C<m.length;C++)m[C]=m[C]/_;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=x,d.mipInt.value=M-i;let v=this._sizeLods[s],I=3*v*(s>M-vr?s-M+vr:0),A=4*(this._cubeSize-v);wa(e,I,A,3*v,2*v),c.setRenderTarget(e),c.render(u,Al)}};function Wv(n){let t=[],e=[],i=[],s=n,r=n-vr+1+xf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>n-vr?c=xf[o-n+vr-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,x=6,y=3,g=2,m=1,_=new Float32Array(y*x*p),M=new Float32Array(g*x*p),v=new Float32Array(m*x*p);for(let A=0;A<p;A++){let C=A%3*2/3-1,P=A>2?0:-1,S=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];_.set(S,y*x*A),M.set(d,g*x*A);let b=[A,A,A,A,A,A];v.set(b,m*x*A)}let I=new we;I.setAttribute("position",new ze(_,y)),I.setAttribute("uv",new ze(M,g)),I.setAttribute("faceIndex",new ze(v,m)),t.push(I),s>vr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function _f(n,t,e){let i=new Di(n,t,e);return i.texture.mapping=dc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wa(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Xv(n,t,e){let i=new Float32Array(Cs),s=new T(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function Mf(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function Ef(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Mu(){return`

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
	`}function $v(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Yl||c===Zl,h=c===Sr||c===wr;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ja(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new ja(n)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function qv(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&So("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Yv(n,t,e,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let x in d.attributes)t.remove(d.attributes[x]);for(let x in d.morphAttributes){let y=d.morphAttributes[x];for(let g=0,m=y.length;g<m;g++)t.remove(y[g])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let x in d)t.update(d[x],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let x in p){let y=p[x];for(let g=0,m=y.length;g<m;g++)t.update(y[g],n.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,x=u.attributes.position,y=0;if(p!==null){let _=p.array;y=p.version;for(let M=0,v=_.length;M<v;M+=3){let I=_[M+0],A=_[M+1],C=_[M+2];d.push(I,A,A,C,C,I)}}else if(x!==void 0){let _=x.array;y=x.version;for(let M=0,v=_.length/3-1;M<v;M+=3){let I=M+0,A=M+1,C=M+2;d.push(I,A,A,C,C,I)}}else return;let g=new(fp(d)?Ya:qa)(d,1);g.version=y;let m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Zv(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){n.drawElements(i,p,r,d*o),e.update(p,i,1)}function l(d,p,x){x!==0&&(n.drawElementsInstanced(i,p,r,d*o,x),e.update(p,i,x))}function h(d,p,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,x);let g=0;for(let m=0;m<x;m++)g+=p[m];e.update(g,i,1)}function u(d,p,x,y){if(x===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)l(d[m]/o,p[m],y[m]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,y,0,x);let m=0;for(let _=0;_<x;_++)m+=p[_]*y[_];e.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Jv(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Kv(n,t,e){let i=new WeakMap,s=new Se;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let S=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],M=0;p===!0&&(M=1),x===!0&&(M=2),y===!0&&(M=3);let v=a.attributes.position.count*M,I=1;v>t.maxTextureSize&&(I=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let A=new Float32Array(v*I*4*u),C=new Wa(A,v,I,u);C.type=ci,C.needsUpdate=!0;let P=M*4;for(let b=0;b<u;b++){let L=g[b],H=m[b],z=_[b],G=v*I*4*b;for(let j=0;j<L.count;j++){let q=j*P;p===!0&&(s.fromBufferAttribute(L,j),A[G+q+0]=s.x,A[G+q+1]=s.y,A[G+q+2]=s.z,A[G+q+3]=0),x===!0&&(s.fromBufferAttribute(H,j),A[G+q+4]=s.x,A[G+q+5]=s.y,A[G+q+6]=s.z,A[G+q+7]=0),y===!0&&(s.fromBufferAttribute(z,j),A[G+q+8]=s.x,A[G+q+9]=s.y,A[G+q+10]=s.z,A[G+q+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new ot(v,I)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let y=0;y<l.length;y++)p+=l[y];let x=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function jv(n,t,e,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Qa=class extends _n{constructor(t,e,i,s,r,o,a,c,l,h=_r){if(h!==_r&&h!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===_r&&(i=Ls),i===void 0&&h===Ar&&(i=Tr),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Tn,this.minFilter=c!==void 0?c:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},xp=new _n,bf=new Qa(1,1),yp=new Wa,vp=new Ah,_p=new Ja,Sf=[],wf=[],Tf=new Float32Array(16),Af=new Float32Array(9),Rf=new Float32Array(4);function Fr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Sf[s];if(r===void 0&&(r=new Float32Array(s),Sf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function je(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Qe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function pc(n,t){let e=wf[t];e===void 0&&(e=new Int32Array(t),wf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Qv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function t_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;n.uniform2fv(this.addr,t),Qe(e,t)}}function e_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;n.uniform3fv(this.addr,t),Qe(e,t)}}function n_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;n.uniform4fv(this.addr,t),Qe(e,t)}}function i_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(je(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,i))return;Rf.set(i),n.uniformMatrix2fv(this.addr,!1,Rf),Qe(e,i)}}function s_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(je(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,i))return;Af.set(i),n.uniformMatrix3fv(this.addr,!1,Af),Qe(e,i)}}function r_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(je(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,i))return;Tf.set(i),n.uniformMatrix4fv(this.addr,!1,Tf),Qe(e,i)}}function o_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function a_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;n.uniform2iv(this.addr,t),Qe(e,t)}}function c_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;n.uniform3iv(this.addr,t),Qe(e,t)}}function l_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;n.uniform4iv(this.addr,t),Qe(e,t)}}function h_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function u_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;n.uniform2uiv(this.addr,t),Qe(e,t)}}function d_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;n.uniform3uiv(this.addr,t),Qe(e,t)}}function f_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;n.uniform4uiv(this.addr,t),Qe(e,t)}}function p_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(bf.compareFunction=dp,r=bf):r=xp,e.setTexture2D(t||r,s)}function m_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||vp,s)}function g_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||_p,s)}function x_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||yp,s)}function y_(n){switch(n){case 5126:return Qv;case 35664:return t_;case 35665:return e_;case 35666:return n_;case 35674:return i_;case 35675:return s_;case 35676:return r_;case 5124:case 35670:return o_;case 35667:case 35671:return a_;case 35668:case 35672:return c_;case 35669:case 35673:return l_;case 5125:return h_;case 36294:return u_;case 36295:return d_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return p_;case 35679:case 36299:case 36307:return m_;case 35680:case 36300:case 36308:case 36293:return g_;case 36289:case 36303:case 36311:case 36292:return x_}}function v_(n,t){n.uniform1fv(this.addr,t)}function __(n,t){let e=Fr(t,this.size,2);n.uniform2fv(this.addr,e)}function M_(n,t){let e=Fr(t,this.size,3);n.uniform3fv(this.addr,e)}function E_(n,t){let e=Fr(t,this.size,4);n.uniform4fv(this.addr,e)}function b_(n,t){let e=Fr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function S_(n,t){let e=Fr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function w_(n,t){let e=Fr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function T_(n,t){n.uniform1iv(this.addr,t)}function A_(n,t){n.uniform2iv(this.addr,t)}function R_(n,t){n.uniform3iv(this.addr,t)}function C_(n,t){n.uniform4iv(this.addr,t)}function I_(n,t){n.uniform1uiv(this.addr,t)}function P_(n,t){n.uniform2uiv(this.addr,t)}function L_(n,t){n.uniform3uiv(this.addr,t)}function D_(n,t){n.uniform4uiv(this.addr,t)}function U_(n,t,e){let i=this.cache,s=t.length,r=pc(e,s);je(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||xp,r[o])}function N_(n,t,e){let i=this.cache,s=t.length,r=pc(e,s);je(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||vp,r[o])}function F_(n,t,e){let i=this.cache,s=t.length,r=pc(e,s);je(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||_p,r[o])}function O_(n,t,e){let i=this.cache,s=t.length,r=pc(e,s);je(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||yp,r[o])}function k_(n){switch(n){case 5126:return v_;case 35664:return __;case 35665:return M_;case 35666:return E_;case 35674:return b_;case 35675:return S_;case 35676:return w_;case 5124:case 35670:return T_;case 35667:case 35671:return A_;case 35668:case 35672:return R_;case 35669:case 35673:return C_;case 5125:return I_;case 36294:return P_;case 36295:return L_;case 36296:return D_;case 35678:case 36198:case 36298:case 36306:case 35682:return U_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return F_;case 36289:case 36303:case 36311:case 36292:return O_}}var Ih=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=y_(e.type)}},Ph=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=k_(e.type)}},Lh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Ll=/(\w+)(\])?(\[|\.)?/g;function Cf(n,t){n.seq.push(t),n.map[t.id]=t}function z_(n,t,e){let i=n.name,s=i.length;for(Ll.lastIndex=0;;){let r=Ll.exec(i),o=Ll.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Cf(e,l===void 0?new Ih(a,n,t):new Ph(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Lh(a),Cf(e,u)),e=u}}}var Er=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);z_(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function If(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var B_=37297,H_=0;function V_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Pf=new Zt;function G_(n){pe._getMatrix(Pf,pe.workingColorSpace,n);let t=`mat3( ${Pf.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(n)){case fc:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Lf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+V_(n.getShaderSource(t),o)}else return s}function W_(n,t){let e=G_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function X_(n,t){let e;switch(t){case ng:e="Linear";break;case ig:e="Reinhard";break;case sg:e="Cineon";break;case Oo:e="ACESFilmic";break;case og:e="AgX";break;case ag:e="Neutral";break;case rg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ta=new T;function $_(){pe.getLuminanceCoefficients(Ta);let n=Ta.x.toFixed(4),t=Ta.y.toFixed(4),e=Ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function q_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function Y_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Z_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function wo(n){return n!==""}function Df(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Uf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var J_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dh(n){return n.replace(J_,j_)}var K_=new Map;function j_(n,t){let e=Kt[t];if(e===void 0){let i=K_.get(t);if(i!==void 0)e=Kt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Dh(e)}var Q_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nf(n){return n.replace(Q_,tM)}function tM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ff(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function eM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Qf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===uu?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ai&&(t="SHADOWMAP_TYPE_VSM"),t}function nM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Sr:case wr:t="ENVMAP_TYPE_CUBE";break;case dc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function iM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case wr:t="ENVMAP_MODE_REFRACTION";break}return t}function sM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case tp:t="ENVMAP_BLENDING_MULTIPLY";break;case tg:t="ENVMAP_BLENDING_MIX";break;case eg:t="ENVMAP_BLENDING_ADD";break}return t}function rM(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function oM(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=eM(e),l=nM(e),h=iM(e),u=sM(e),d=rM(e),p=q_(e),x=Y_(r),y=s.createProgram(),g,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(wo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(wo).join(`
`),m.length>0&&(m+=`
`)):(g=[Ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),m=[Ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ns?"#define TONE_MAPPING":"",e.toneMapping!==ns?Kt.tonemapping_pars_fragment:"",e.toneMapping!==ns?X_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,W_("linearToOutputTexel",e.outputColorSpace),$_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wo).join(`
`)),o=Dh(o),o=Df(o,e),o=Uf(o,e),a=Dh(a),a=Df(a,e),a=Uf(a,e),o=Nf(o),a=Nf(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Yd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=_+g+o,v=_+m+a,I=If(s,s.VERTEX_SHADER,M),A=If(s,s.FRAGMENT_SHADER,v);s.attachShader(y,I),s.attachShader(y,A),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(L){if(n.debug.checkShaderErrors){let H=s.getProgramInfoLog(y).trim(),z=s.getShaderInfoLog(I).trim(),G=s.getShaderInfoLog(A).trim(),j=!0,q=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,I,A);else{let nt=Lf(s,I,"vertex"),$=Lf(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+nt+`
`+$)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||G==="")&&(q=!1);q&&(L.diagnostics={runnable:j,programLog:H,vertexShader:{log:z,prefix:g},fragmentShader:{log:G,prefix:m}})}s.deleteShader(I),s.deleteShader(A),P=new Er(s,y),S=Z_(s,y)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(y,B_)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=H_++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=A,this}var aM=0,Uh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Nh(t),e.set(t,i)),i}},Nh=class{constructor(t){this.id=aM++,this.code=t,this.usedTimes=0}};function cM(n,t,e,i,s,r,o){let a=new $a,c=new Uh,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,b,L,H,z){let G=H.fog,j=z.geometry,q=S.isMeshStandardMaterial?H.environment:null,nt=(S.isMeshStandardMaterial?e:t).get(S.envMap||q),$=nt&&nt.mapping===dc?nt.image.height:null,ht=x[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let yt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Lt=yt!==void 0?yt.length:0,te=0;j.morphAttributes.position!==void 0&&(te=1),j.morphAttributes.normal!==void 0&&(te=2),j.morphAttributes.color!==void 0&&(te=3);let Te,Z,it,At;if(ht){let Me=oi[ht];Te=Me.vertexShader,Z=Me.fragmentShader}else Te=S.vertexShader,Z=S.fragmentShader,c.update(S),it=c.getVertexShaderID(S),At=c.getFragmentShaderID(S);let ut=n.getRenderTarget(),kt=n.state.buffers.depth.getReversed(),$t=z.isInstancedMesh===!0,ee=z.isBatchedMesh===!0,ke=!!S.map,de=!!S.matcap,We=!!nt,F=!!S.aoMap,Cn=!!S.lightMap,ae=!!S.bumpMap,ce=!!S.normalMap,Ft=!!S.displacementMap,De=!!S.emissiveMap,Nt=!!S.metalnessMap,R=!!S.roughnessMap,E=S.anisotropy>0,k=S.clearcoat>0,J=S.dispersion>0,Q=S.iridescence>0,Y=S.sheen>0,Rt=S.transmission>0,dt=E&&!!S.anisotropyMap,vt=k&&!!S.clearcoatMap,fe=k&&!!S.clearcoatNormalMap,tt=k&&!!S.clearcoatRoughnessMap,_t=Q&&!!S.iridescenceMap,Ot=Q&&!!S.iridescenceThicknessMap,Bt=Y&&!!S.sheenColorMap,Mt=Y&&!!S.sheenRoughnessMap,le=!!S.specularMap,Jt=!!S.specularColorMap,Re=!!S.specularIntensityMap,D=Rt&&!!S.transmissionMap,ct=Rt&&!!S.thicknessMap,X=!!S.gradientMap,K=!!S.alphaMap,mt=S.alphaTest>0,ft=!!S.alphaHash,qt=!!S.extensions,He=ns;S.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(He=n.toneMapping);let on={shaderID:ht,shaderType:S.type,shaderName:S.name,vertexShader:Te,fragmentShader:Z,defines:S.defines,customVertexShaderID:it,customFragmentShaderID:At,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:ee,batchingColor:ee&&z._colorsTexture!==null,instancing:$t,instancingColor:$t&&z.instanceColor!==null,instancingMorph:$t&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ut===null?n.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Nr,alphaToCoverage:!!S.alphaToCoverage,map:ke,matcap:de,envMap:We,envMapMode:We&&nt.mapping,envMapCubeUVHeight:$,aoMap:F,lightMap:Cn,bumpMap:ae,normalMap:ce,displacementMap:d&&Ft,emissiveMap:De,normalMapObjectSpace:ce&&S.normalMapType===ug,normalMapTangentSpace:ce&&S.normalMapType===up,metalnessMap:Nt,roughnessMap:R,anisotropy:E,anisotropyMap:dt,clearcoat:k,clearcoatMap:vt,clearcoatNormalMap:fe,clearcoatRoughnessMap:tt,dispersion:J,iridescence:Q,iridescenceMap:_t,iridescenceThicknessMap:Ot,sheen:Y,sheenColorMap:Bt,sheenRoughnessMap:Mt,specularMap:le,specularColorMap:Jt,specularIntensityMap:Re,transmission:Rt,transmissionMap:D,thicknessMap:ct,gradientMap:X,opaque:S.transparent===!1&&S.blending===li&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:mt,alphaHash:ft,combine:S.combine,mapUv:ke&&y(S.map.channel),aoMapUv:F&&y(S.aoMap.channel),lightMapUv:Cn&&y(S.lightMap.channel),bumpMapUv:ae&&y(S.bumpMap.channel),normalMapUv:ce&&y(S.normalMap.channel),displacementMapUv:Ft&&y(S.displacementMap.channel),emissiveMapUv:De&&y(S.emissiveMap.channel),metalnessMapUv:Nt&&y(S.metalnessMap.channel),roughnessMapUv:R&&y(S.roughnessMap.channel),anisotropyMapUv:dt&&y(S.anisotropyMap.channel),clearcoatMapUv:vt&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:fe&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&y(S.sheenRoughnessMap.channel),specularMapUv:le&&y(S.specularMap.channel),specularColorMapUv:Jt&&y(S.specularColorMap.channel),specularIntensityMapUv:Re&&y(S.specularIntensityMap.channel),transmissionMapUv:D&&y(S.transmissionMap.channel),thicknessMapUv:ct&&y(S.thicknessMap.channel),alphaMapUv:K&&y(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ce||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!j.attributes.uv&&(ke||K),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:kt,skinning:z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:te,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:He,decodeVideoTexture:ke&&S.map.isVideoTexture===!0&&pe.getTransfer(S.map.colorSpace)===be,decodeVideoTextureEmissive:De&&S.emissiveMap.isVideoTexture===!0&&pe.getTransfer(S.emissiveMap.colorSpace)===be,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===sn,flipSided:S.side===ln,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:qt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&S.extensions.multiDraw===!0||ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return on.vertexUv1s=l.has(1),on.vertexUv2s=l.has(2),on.vertexUv3s=l.has(3),l.clear(),on}function m(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let L in S.defines)b.push(L),b.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(_(b,S),M(b,S),b.push(n.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function _(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function M(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){let b=x[S.type],L;if(b){let H=oi[b];L=jg.clone(H.uniforms)}else L=S.uniforms;return L}function I(S,b){let L;for(let H=0,z=h.length;H<z;H++){let G=h[H];if(G.cacheKey===b){L=G,++L.usedTimes;break}}return L===void 0&&(L=new oM(n,b,S,r),h.push(L)),L}function A(S){if(--S.usedTimes===0){let b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function C(S){c.remove(S)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:I,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:P}}function lM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function hM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Of(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function kf(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,p,x,y,g){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:p,groupOrder:x,renderOrder:u.renderOrder,z:y,group:g},n[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=p,m.groupOrder=x,m.renderOrder=u.renderOrder,m.z=y,m.group=g),t++,m}function a(u,d,p,x,y,g){let m=o(u,d,p,x,y,g);p.transmission>0?i.push(m):p.transparent===!0?s.push(m):e.push(m)}function c(u,d,p,x,y,g){let m=o(u,d,p,x,y,g);p.transmission>0?i.unshift(m):p.transparent===!0?s.unshift(m):e.unshift(m)}function l(u,d){e.length>1&&e.sort(u||hM),i.length>1&&i.sort(d||Of),s.length>1&&s.sort(d||Of)}function h(){for(let u=t,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function uM(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new kf,n.set(i,[o])):s>=r.length?(o=new kf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function dM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new It};break;case"SpotLight":e={position:new T,direction:new T,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new T,halfWidth:new T,halfHeight:new T};break}return n[t.id]=e,e}}}function fM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var pM=0;function mM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function gM(n){let t=new dM,e=fM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new T);let s=new T,r=new xe,o=new xe;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,x=0,y=0,g=0,m=0,_=0,M=0,v=0,I=0,A=0,C=0;l.sort(mM);for(let S=0,b=l.length;S<b;S++){let L=l[S],H=L.color,z=L.intensity,G=L.distance,j=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=H.r*z,u+=H.g*z,d+=H.b*z;else if(L.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(L.sh.coefficients[q],z);C++}else if(L.isDirectionalLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let nt=L.shadow,$=e.get(L);$.shadowIntensity=nt.intensity,$.shadowBias=nt.bias,$.shadowNormalBias=nt.normalBias,$.shadowRadius=nt.radius,$.shadowMapSize=nt.mapSize,i.directionalShadow[p]=$,i.directionalShadowMap[p]=j,i.directionalShadowMatrix[p]=L.shadow.matrix,_++}i.directional[p]=q,p++}else if(L.isSpotLight){let q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(H).multiplyScalar(z),q.distance=G,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,i.spot[y]=q;let nt=L.shadow;if(L.map&&(i.spotLightMap[I]=L.map,I++,nt.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[y]=nt.matrix,L.castShadow){let $=e.get(L);$.shadowIntensity=nt.intensity,$.shadowBias=nt.bias,$.shadowNormalBias=nt.normalBias,$.shadowRadius=nt.radius,$.shadowMapSize=nt.mapSize,i.spotShadow[y]=$,i.spotShadowMap[y]=j,v++}y++}else if(L.isRectAreaLight){let q=t.get(L);q.color.copy(H).multiplyScalar(z),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=q,g++}else if(L.isPointLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let nt=L.shadow,$=e.get(L);$.shadowIntensity=nt.intensity,$.shadowBias=nt.bias,$.shadowNormalBias=nt.normalBias,$.shadowRadius=nt.radius,$.shadowMapSize=nt.mapSize,$.shadowCameraNear=nt.camera.near,$.shadowCameraFar=nt.camera.far,i.pointShadow[x]=$,i.pointShadowMap[x]=j,i.pointShadowMatrix[x]=L.shadow.matrix,M++}i.point[x]=q,x++}else if(L.isHemisphereLight){let q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(z),q.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[m]=q,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let P=i.hash;(P.directionalLength!==p||P.pointLength!==x||P.spotLength!==y||P.rectAreaLength!==g||P.hemiLength!==m||P.numDirectionalShadows!==_||P.numPointShadows!==M||P.numSpotShadows!==v||P.numSpotMaps!==I||P.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=g,i.point.length=x,i.hemi.length=m,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=v+I-A,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,P.directionalLength=p,P.pointLength=x,P.spotLength=y,P.rectAreaLength=g,P.hemiLength=m,P.numDirectionalShadows=_,P.numPointShadows=M,P.numSpotShadows=v,P.numSpotMaps=I,P.numLightProbes=C,i.version=pM++)}function c(l,h){let u=0,d=0,p=0,x=0,y=0,g=h.matrixWorldInverse;for(let m=0,_=l.length;m<_;m++){let M=l[m];if(M.isDirectionalLight){let v=i.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(M.isSpotLight){let v=i.spot[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let v=i.rectArea[x];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let v=i.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){let v=i.hemi[y];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(g),y++}}}return{setup:a,setupView:c,state:i}}function zf(n){let t=new gM(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function xM(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new zf(n),t.set(s,[a])):r>=o.length?(a=new zf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Fh=class extends Ui{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=lg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Oh=class extends Ui{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},yM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vM=`uniform sampler2D shadow_pass;
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
}`;function _M(n,t,e){let i=new Do,s=new ot,r=new ot,o=new Se,a=new Fh({depthPacking:hg}),c=new Oh,l={},h=e.maxTextureSize,u={[is]:ln,[ln]:is,[sn]:sn},d=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:yM,fragmentShader:vM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let x=new we;x.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new bt(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qf;let m=this.type;this.render=function(A,C,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let S=n.getRenderTarget(),b=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),H=n.state;H.setBlending(es),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let z=m!==Ai&&this.type===Ai,G=m===Ai&&this.type!==Ai;for(let j=0,q=A.length;j<q;j++){let nt=A[j],$=nt.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let ht=$.getFrameExtents();if(s.multiply(ht),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,$.mapSize.y=r.y)),$.map===null||z===!0||G===!0){let Lt=this.type!==Ai?{minFilter:Tn,magFilter:Tn}:{};$.map!==null&&$.map.dispose(),$.map=new Di(s.x,s.y,Lt),$.map.texture.name=nt.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();let yt=$.getViewportCount();for(let Lt=0;Lt<yt;Lt++){let te=$.getViewport(Lt);o.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),H.viewport(o),$.updateMatrices(nt,Lt),i=$.getFrustum(),v(C,P,$.camera,nt,this.type)}$.isPointLightShadow!==!0&&this.type===Ai&&_($,P),$.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(S,b,L)};function _(A,C){let P=t.update(y);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Di(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,P,d,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,P,p,y,null)}function M(A,C,P,S){let b=null,L=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)b=L;else if(b=P.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let H=b.uuid,z=C.uuid,G=l[H];G===void 0&&(G={},l[H]=G);let j=G[z];j===void 0&&(j=b.clone(),G[z]=j,C.addEventListener("dispose",I)),b=j}if(b.visible=C.visible,b.wireframe=C.wireframe,S===Ai?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:u[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let H=n.properties.get(b);H.light=P}return b}function v(A,C,P,S,b){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===Ai)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);let z=t.update(A),G=A.material;if(Array.isArray(G)){let j=z.groups;for(let q=0,nt=j.length;q<nt;q++){let $=j[q],ht=G[$.materialIndex];if(ht&&ht.visible){let yt=M(A,ht,S,b);A.onBeforeShadow(n,A,C,P,z,yt,$),n.renderBufferDirect(P,null,z,yt,A,$),A.onAfterShadow(n,A,C,P,z,yt,$)}}}else if(G.visible){let j=M(A,G,S,b);A.onBeforeShadow(n,A,C,P,z,j,null),n.renderBufferDirect(P,null,z,j,A,null),A.onAfterShadow(n,A,C,P,z,j,null)}}let H=A.children;for(let z=0,G=H.length;z<G;z++)v(H[z],C,P,S,b)}function I(A){A.target.removeEventListener("dispose",I);for(let P in l){let S=l[P],b=A.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var MM={[Hl]:Vl,[Gl]:$l,[Wl]:ql,[br]:Xl,[Vl]:Hl,[$l]:Gl,[ql]:Wl,[Xl]:br};function EM(n,t){function e(){let D=!1,ct=new Se,X=null,K=new Se(0,0,0,0);return{setMask:function(mt){X!==mt&&!D&&(n.colorMask(mt,mt,mt,mt),X=mt)},setLocked:function(mt){D=mt},setClear:function(mt,ft,qt,He,on){on===!0&&(mt*=He,ft*=He,qt*=He),ct.set(mt,ft,qt,He),K.equals(ct)===!1&&(n.clearColor(mt,ft,qt,He),K.copy(ct))},reset:function(){D=!1,X=null,K.set(-1,0,0,0)}}}function i(){let D=!1,ct=!1,X=null,K=null,mt=null;return{setReversed:function(ft){if(ct!==ft){let qt=t.get("EXT_clip_control");ct?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);let He=mt;mt=null,this.setClear(He)}ct=ft},getReversed:function(){return ct},setTest:function(ft){ft?ut(n.DEPTH_TEST):kt(n.DEPTH_TEST)},setMask:function(ft){X!==ft&&!D&&(n.depthMask(ft),X=ft)},setFunc:function(ft){if(ct&&(ft=MM[ft]),K!==ft){switch(ft){case Hl:n.depthFunc(n.NEVER);break;case Vl:n.depthFunc(n.ALWAYS);break;case Gl:n.depthFunc(n.LESS);break;case br:n.depthFunc(n.LEQUAL);break;case Wl:n.depthFunc(n.EQUAL);break;case Xl:n.depthFunc(n.GEQUAL);break;case $l:n.depthFunc(n.GREATER);break;case ql:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=ft}},setLocked:function(ft){D=ft},setClear:function(ft){mt!==ft&&(ct&&(ft=1-ft),n.clearDepth(ft),mt=ft)},reset:function(){D=!1,X=null,K=null,mt=null,ct=!1}}}function s(){let D=!1,ct=null,X=null,K=null,mt=null,ft=null,qt=null,He=null,on=null;return{setTest:function(Me){D||(Me?ut(n.STENCIL_TEST):kt(n.STENCIL_TEST))},setMask:function(Me){ct!==Me&&!D&&(n.stencilMask(Me),ct=Me)},setFunc:function(Me,Bn,_i){(X!==Me||K!==Bn||mt!==_i)&&(n.stencilFunc(Me,Bn,_i),X=Me,K=Bn,mt=_i)},setOp:function(Me,Bn,_i){(ft!==Me||qt!==Bn||He!==_i)&&(n.stencilOp(Me,Bn,_i),ft=Me,qt=Bn,He=_i)},setLocked:function(Me){D=Me},setClear:function(Me){on!==Me&&(n.clearStencil(Me),on=Me)},reset:function(){D=!1,ct=null,X=null,K=null,mt=null,ft=null,qt=null,He=null,on=null}}}let r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],x=null,y=!1,g=null,m=null,_=null,M=null,v=null,I=null,A=null,C=new It(0,0,0),P=0,S=!1,b=null,L=null,H=null,z=null,G=null,j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,nt=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec($)[1]),q=nt>=1):$.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=nt>=2);let ht=null,yt={},Lt=n.getParameter(n.SCISSOR_BOX),te=n.getParameter(n.VIEWPORT),Te=new Se().fromArray(Lt),Z=new Se().fromArray(te);function it(D,ct,X,K){let mt=new Uint8Array(4),ft=n.createTexture();n.bindTexture(D,ft),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qt=0;qt<X;qt++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(ct,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,mt):n.texImage2D(ct+qt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,mt);return ft}let At={};At[n.TEXTURE_2D]=it(n.TEXTURE_2D,n.TEXTURE_2D,1),At[n.TEXTURE_CUBE_MAP]=it(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[n.TEXTURE_2D_ARRAY]=it(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),At[n.TEXTURE_3D]=it(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ut(n.DEPTH_TEST),o.setFunc(br),ae(!1),ce(Hd),ut(n.CULL_FACE),F(es);function ut(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function kt(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function $t(D,ct){return u[D]!==ct?(n.bindFramebuffer(D,ct),u[D]=ct,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ct),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ct),!0):!1}function ee(D,ct){let X=p,K=!1;if(D){X=d.get(ct),X===void 0&&(X=[],d.set(ct,X));let mt=D.textures;if(X.length!==mt.length||X[0]!==n.COLOR_ATTACHMENT0){for(let ft=0,qt=mt.length;ft<qt;ft++)X[ft]=n.COLOR_ATTACHMENT0+ft;X.length=mt.length,K=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,K=!0);K&&n.drawBuffers(X)}function ke(D){return x!==D?(n.useProgram(D),x=D,!0):!1}let de={[Rs]:n.FUNC_ADD,[O0]:n.FUNC_SUBTRACT,[k0]:n.FUNC_REVERSE_SUBTRACT};de[z0]=n.MIN,de[B0]=n.MAX;let We={[H0]:n.ZERO,[V0]:n.ONE,[G0]:n.SRC_COLOR,[zl]:n.SRC_ALPHA,[Z0]:n.SRC_ALPHA_SATURATE,[q0]:n.DST_COLOR,[X0]:n.DST_ALPHA,[W0]:n.ONE_MINUS_SRC_COLOR,[Bl]:n.ONE_MINUS_SRC_ALPHA,[Y0]:n.ONE_MINUS_DST_COLOR,[$0]:n.ONE_MINUS_DST_ALPHA,[J0]:n.CONSTANT_COLOR,[K0]:n.ONE_MINUS_CONSTANT_COLOR,[j0]:n.CONSTANT_ALPHA,[Q0]:n.ONE_MINUS_CONSTANT_ALPHA};function F(D,ct,X,K,mt,ft,qt,He,on,Me){if(D===es){y===!0&&(kt(n.BLEND),y=!1);return}if(y===!1&&(ut(n.BLEND),y=!0),D!==F0){if(D!==g||Me!==S){if((m!==Rs||v!==Rs)&&(n.blendEquation(n.FUNC_ADD),m=Rs,v=Rs),Me)switch(D){case li:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ae:n.blendFunc(n.ONE,n.ONE);break;case Vd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case li:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ae:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Vd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}_=null,M=null,I=null,A=null,C.set(0,0,0),P=0,g=D,S=Me}return}mt=mt||ct,ft=ft||X,qt=qt||K,(ct!==m||mt!==v)&&(n.blendEquationSeparate(de[ct],de[mt]),m=ct,v=mt),(X!==_||K!==M||ft!==I||qt!==A)&&(n.blendFuncSeparate(We[X],We[K],We[ft],We[qt]),_=X,M=K,I=ft,A=qt),(He.equals(C)===!1||on!==P)&&(n.blendColor(He.r,He.g,He.b,on),C.copy(He),P=on),g=D,S=!1}function Cn(D,ct){D.side===sn?kt(n.CULL_FACE):ut(n.CULL_FACE);let X=D.side===ln;ct&&(X=!X),ae(X),D.blending===li&&D.transparent===!1?F(es):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let K=D.stencilWrite;a.setTest(K),K&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),De(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ut(n.SAMPLE_ALPHA_TO_COVERAGE):kt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ae(D){b!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),b=D)}function ce(D){D!==U0?(ut(n.CULL_FACE),D!==L&&(D===Hd?n.cullFace(n.BACK):D===N0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):kt(n.CULL_FACE),L=D}function Ft(D){D!==H&&(q&&n.lineWidth(D),H=D)}function De(D,ct,X){D?(ut(n.POLYGON_OFFSET_FILL),(z!==ct||G!==X)&&(n.polygonOffset(ct,X),z=ct,G=X)):kt(n.POLYGON_OFFSET_FILL)}function Nt(D){D?ut(n.SCISSOR_TEST):kt(n.SCISSOR_TEST)}function R(D){D===void 0&&(D=n.TEXTURE0+j-1),ht!==D&&(n.activeTexture(D),ht=D)}function E(D,ct,X){X===void 0&&(ht===null?X=n.TEXTURE0+j-1:X=ht);let K=yt[X];K===void 0&&(K={type:void 0,texture:void 0},yt[X]=K),(K.type!==D||K.texture!==ct)&&(ht!==X&&(n.activeTexture(X),ht=X),n.bindTexture(D,ct||At[D]),K.type=D,K.texture=ct)}function k(){let D=yt[ht];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _t(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ot(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Bt(D){Te.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Te.copy(D))}function Mt(D){Z.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Z.copy(D))}function le(D,ct){let X=l.get(ct);X===void 0&&(X=new WeakMap,l.set(ct,X));let K=X.get(D);K===void 0&&(K=n.getUniformBlockIndex(ct,D.name),X.set(D,K))}function Jt(D,ct){let K=l.get(ct).get(D);c.get(ct)!==K&&(n.uniformBlockBinding(ct,K,D.__bindingPointIndex),c.set(ct,K))}function Re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ht=null,yt={},u={},d=new WeakMap,p=[],x=null,y=!1,g=null,m=null,_=null,M=null,v=null,I=null,A=null,C=new It(0,0,0),P=0,S=!1,b=null,L=null,H=null,z=null,G=null,Te.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ut,disable:kt,bindFramebuffer:$t,drawBuffers:ee,useProgram:ke,setBlending:F,setMaterial:Cn,setFlipSided:ae,setCullFace:ce,setLineWidth:Ft,setPolygonOffset:De,setScissorTest:Nt,activeTexture:R,bindTexture:E,unbindTexture:k,compressedTexImage2D:J,compressedTexImage3D:Q,texImage2D:_t,texImage3D:Ot,updateUBOMapping:le,uniformBlockBinding:Jt,texStorage2D:fe,texStorage3D:tt,texSubImage2D:Y,texSubImage3D:Rt,compressedTexSubImage2D:dt,compressedTexSubImage3D:vt,scissor:Bt,viewport:Mt,reset:Re}}function Bf(n,t,e,i){let s=bM(i);switch(e){case rp:return n*t;case ap:return n*t;case cp:return n*t*2;case mu:return n*t/s.components*s.byteLength;case gu:return n*t/s.components*s.byteLength;case lp:return n*t*2/s.components*s.byteLength;case xu:return n*t*2/s.components*s.byteLength;case op:return n*t*3/s.components*s.byteLength;case $n:return n*t*4/s.components*s.byteLength;case yu:return n*t*4/s.components*s.byteLength;case Na:case Fa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Oa:case ka:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case jl:case th:return Math.max(n,16)*Math.max(t,8)/4;case Kl:case Ql:return Math.max(n,8)*Math.max(t,8)/2;case eh:case nh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ih:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case rh:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case oh:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ah:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ch:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case lh:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case hh:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case uh:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case dh:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case fh:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ph:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case mh:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case gh:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case xh:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case za:case yh:case vh:return Math.ceil(n/4)*Math.ceil(t/4)*16;case hp:case _h:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Mh:case Eh:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function bM(n){switch(n){case Li:case np:return{byteLength:1,components:1};case Lo:case ip:case ko:return{byteLength:2,components:1};case fu:case pu:return{byteLength:2,components:4};case Ls:case du:case ci:return{byteLength:4,components:1};case sp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function SM(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ot,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,E){return p?new OffscreenCanvas(R,E):Va("canvas")}function y(R,E,k){let J=1,Q=Nt(R);if((Q.width>k||Q.height>k)&&(J=k/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Y=Math.floor(J*Q.width),Rt=Math.floor(J*Q.height);u===void 0&&(u=x(Y,Rt));let dt=E?x(Y,Rt):u;return dt.width=Y,dt.height=Rt,dt.getContext("2d").drawImage(R,0,0,Y,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+Rt+")."),dt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function g(R){return R.generateMipmaps}function m(R){n.generateMipmap(R)}function _(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(R,E,k,J,Q=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=E;if(E===n.RED&&(k===n.FLOAT&&(Y=n.R32F),k===n.HALF_FLOAT&&(Y=n.R16F),k===n.UNSIGNED_BYTE&&(Y=n.R8)),E===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.R8UI),k===n.UNSIGNED_SHORT&&(Y=n.R16UI),k===n.UNSIGNED_INT&&(Y=n.R32UI),k===n.BYTE&&(Y=n.R8I),k===n.SHORT&&(Y=n.R16I),k===n.INT&&(Y=n.R32I)),E===n.RG&&(k===n.FLOAT&&(Y=n.RG32F),k===n.HALF_FLOAT&&(Y=n.RG16F),k===n.UNSIGNED_BYTE&&(Y=n.RG8)),E===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.RG8UI),k===n.UNSIGNED_SHORT&&(Y=n.RG16UI),k===n.UNSIGNED_INT&&(Y=n.RG32UI),k===n.BYTE&&(Y=n.RG8I),k===n.SHORT&&(Y=n.RG16I),k===n.INT&&(Y=n.RG32I)),E===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),k===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),k===n.UNSIGNED_INT&&(Y=n.RGB32UI),k===n.BYTE&&(Y=n.RGB8I),k===n.SHORT&&(Y=n.RGB16I),k===n.INT&&(Y=n.RGB32I)),E===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),k===n.UNSIGNED_INT&&(Y=n.RGBA32UI),k===n.BYTE&&(Y=n.RGBA8I),k===n.SHORT&&(Y=n.RGBA16I),k===n.INT&&(Y=n.RGBA32I)),E===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),E===n.RGBA){let Rt=Q?fc:pe.getTransfer(J);k===n.FLOAT&&(Y=n.RGBA32F),k===n.HALF_FLOAT&&(Y=n.RGBA16F),k===n.UNSIGNED_BYTE&&(Y=Rt===be?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(R,E){let k;return R?E===null||E===Ls||E===Tr?k=n.DEPTH24_STENCIL8:E===ci?k=n.DEPTH32F_STENCIL8:E===Lo&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ls||E===Tr?k=n.DEPTH_COMPONENT24:E===ci?k=n.DEPTH_COMPONENT32F:E===Lo&&(k=n.DEPTH_COMPONENT16),k}function I(R,E){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Tn&&R.minFilter!==ai?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function A(R){let E=R.target;E.removeEventListener("dispose",A),P(E),E.isVideoTexture&&h.delete(E)}function C(R){let E=R.target;E.removeEventListener("dispose",C),b(E)}function P(R){let E=i.get(R);if(E.__webglInit===void 0)return;let k=R.source,J=d.get(k);if(J){let Q=J[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(R),Object.keys(J).length===0&&d.delete(k)}i.remove(R)}function S(R){let E=i.get(R);n.deleteTexture(E.__webglTexture);let k=R.source,J=d.get(k);delete J[E.__cacheKey],o.memory.textures--}function b(R){let E=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let Q=0;Q<E.__webglFramebuffer[J].length;Q++)n.deleteFramebuffer(E.__webglFramebuffer[J][Q]);else n.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)n.deleteFramebuffer(E.__webglFramebuffer[J]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let k=R.textures;for(let J=0,Q=k.length;J<Q;J++){let Y=i.get(k[J]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(k[J])}i.remove(R)}let L=0;function H(){L=0}function z(){let R=L;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),L+=1,R}function G(R){let E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function j(R,E){let k=i.get(R);if(R.isVideoTexture&&Ft(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){let J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(k,R,E);return}}e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+E)}function q(R,E){let k=i.get(R);if(R.version>0&&k.__version!==R.version){Z(k,R,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+E)}function nt(R,E){let k=i.get(R);if(R.version>0&&k.__version!==R.version){Z(k,R,E);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+E)}function $(R,E){let k=i.get(R);if(R.version>0&&k.__version!==R.version){it(k,R,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+E)}let ht={[Po]:n.REPEAT,[Is]:n.CLAMP_TO_EDGE,[Jl]:n.MIRRORED_REPEAT},yt={[Tn]:n.NEAREST,[cg]:n.NEAREST_MIPMAP_NEAREST,[oa]:n.NEAREST_MIPMAP_LINEAR,[ai]:n.LINEAR,[rl]:n.LINEAR_MIPMAP_NEAREST,[Ps]:n.LINEAR_MIPMAP_LINEAR},Lt={[dg]:n.NEVER,[yg]:n.ALWAYS,[fg]:n.LESS,[dp]:n.LEQUAL,[pg]:n.EQUAL,[xg]:n.GEQUAL,[mg]:n.GREATER,[gg]:n.NOTEQUAL};function te(R,E){if(E.type===ci&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===ai||E.magFilter===rl||E.magFilter===oa||E.magFilter===Ps||E.minFilter===ai||E.minFilter===rl||E.minFilter===oa||E.minFilter===Ps)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,ht[E.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,ht[E.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,ht[E.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,yt[E.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,yt[E.minFilter]),E.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Lt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==oa&&E.minFilter!==Ps||E.type===ci&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Te(R,E){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",A));let J=E.source,Q=d.get(J);Q===void 0&&(Q={},d.set(J,Q));let Y=G(E);if(Y!==R.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[Y].usedTimes++;let Rt=Q[R.__cacheKey];Rt!==void 0&&(Q[R.__cacheKey].usedTimes--,Rt.usedTimes===0&&S(E)),R.__cacheKey=Y,R.__webglTexture=Q[Y].texture}return k}function Z(R,E,k){let J=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=n.TEXTURE_3D);let Q=Te(R,E),Y=E.source;e.bindTexture(J,R.__webglTexture,n.TEXTURE0+k);let Rt=i.get(Y);if(Y.version!==Rt.__version||Q===!0){e.activeTexture(n.TEXTURE0+k);let dt=pe.getPrimaries(pe.workingColorSpace),vt=E.colorSpace===Qi?null:pe.getPrimaries(E.colorSpace),fe=E.colorSpace===Qi||dt===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let tt=y(E.image,!1,s.maxTextureSize);tt=De(E,tt);let _t=r.convert(E.format,E.colorSpace),Ot=r.convert(E.type),Bt=M(E.internalFormat,_t,Ot,E.colorSpace,E.isVideoTexture);te(J,E);let Mt,le=E.mipmaps,Jt=E.isVideoTexture!==!0,Re=Rt.__version===void 0||Q===!0,D=Y.dataReady,ct=I(E,tt);if(E.isDepthTexture)Bt=v(E.format===Ar,E.type),Re&&(Jt?e.texStorage2D(n.TEXTURE_2D,1,Bt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,Bt,tt.width,tt.height,0,_t,Ot,null));else if(E.isDataTexture)if(le.length>0){Jt&&Re&&e.texStorage2D(n.TEXTURE_2D,ct,Bt,le[0].width,le[0].height);for(let X=0,K=le.length;X<K;X++)Mt=le[X],Jt?D&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,Mt.width,Mt.height,_t,Ot,Mt.data):e.texImage2D(n.TEXTURE_2D,X,Bt,Mt.width,Mt.height,0,_t,Ot,Mt.data);E.generateMipmaps=!1}else Jt?(Re&&e.texStorage2D(n.TEXTURE_2D,ct,Bt,tt.width,tt.height),D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,tt.width,tt.height,_t,Ot,tt.data)):e.texImage2D(n.TEXTURE_2D,0,Bt,tt.width,tt.height,0,_t,Ot,tt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Jt&&Re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,Bt,le[0].width,le[0].height,tt.depth);for(let X=0,K=le.length;X<K;X++)if(Mt=le[X],E.format!==$n)if(_t!==null)if(Jt){if(D)if(E.layerUpdates.size>0){let mt=Bf(Mt.width,Mt.height,E.format,E.type);for(let ft of E.layerUpdates){let qt=Mt.data.subarray(ft*mt/Mt.data.BYTES_PER_ELEMENT,(ft+1)*mt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,ft,Mt.width,Mt.height,1,_t,qt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,Mt.width,Mt.height,tt.depth,_t,Mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Bt,Mt.width,Mt.height,tt.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?D&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,Mt.width,Mt.height,tt.depth,_t,Ot,Mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,X,Bt,Mt.width,Mt.height,tt.depth,0,_t,Ot,Mt.data)}else{Jt&&Re&&e.texStorage2D(n.TEXTURE_2D,ct,Bt,le[0].width,le[0].height);for(let X=0,K=le.length;X<K;X++)Mt=le[X],E.format!==$n?_t!==null?Jt?D&&e.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,Mt.width,Mt.height,_t,Mt.data):e.compressedTexImage2D(n.TEXTURE_2D,X,Bt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?D&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,Mt.width,Mt.height,_t,Ot,Mt.data):e.texImage2D(n.TEXTURE_2D,X,Bt,Mt.width,Mt.height,0,_t,Ot,Mt.data)}else if(E.isDataArrayTexture)if(Jt){if(Re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,Bt,tt.width,tt.height,tt.depth),D)if(E.layerUpdates.size>0){let X=Bf(tt.width,tt.height,E.format,E.type);for(let K of E.layerUpdates){let mt=tt.data.subarray(K*X/tt.data.BYTES_PER_ELEMENT,(K+1)*X/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,tt.width,tt.height,1,_t,Ot,mt)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,_t,Ot,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Bt,tt.width,tt.height,tt.depth,0,_t,Ot,tt.data);else if(E.isData3DTexture)Jt?(Re&&e.texStorage3D(n.TEXTURE_3D,ct,Bt,tt.width,tt.height,tt.depth),D&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,_t,Ot,tt.data)):e.texImage3D(n.TEXTURE_3D,0,Bt,tt.width,tt.height,tt.depth,0,_t,Ot,tt.data);else if(E.isFramebufferTexture){if(Re)if(Jt)e.texStorage2D(n.TEXTURE_2D,ct,Bt,tt.width,tt.height);else{let X=tt.width,K=tt.height;for(let mt=0;mt<ct;mt++)e.texImage2D(n.TEXTURE_2D,mt,Bt,X,K,0,_t,Ot,null),X>>=1,K>>=1}}else if(le.length>0){if(Jt&&Re){let X=Nt(le[0]);e.texStorage2D(n.TEXTURE_2D,ct,Bt,X.width,X.height)}for(let X=0,K=le.length;X<K;X++)Mt=le[X],Jt?D&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,_t,Ot,Mt):e.texImage2D(n.TEXTURE_2D,X,Bt,_t,Ot,Mt);E.generateMipmaps=!1}else if(Jt){if(Re){let X=Nt(tt);e.texStorage2D(n.TEXTURE_2D,ct,Bt,X.width,X.height)}D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t,Ot,tt)}else e.texImage2D(n.TEXTURE_2D,0,Bt,_t,Ot,tt);g(E)&&m(J),Rt.__version=Y.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function it(R,E,k){if(E.image.length!==6)return;let J=Te(R,E),Q=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+k);let Y=i.get(Q);if(Q.version!==Y.__version||J===!0){e.activeTexture(n.TEXTURE0+k);let Rt=pe.getPrimaries(pe.workingColorSpace),dt=E.colorSpace===Qi?null:pe.getPrimaries(E.colorSpace),vt=E.colorSpace===Qi||Rt===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let fe=E.isCompressedTexture||E.image[0].isCompressedTexture,tt=E.image[0]&&E.image[0].isDataTexture,_t=[];for(let K=0;K<6;K++)!fe&&!tt?_t[K]=y(E.image[K],!0,s.maxCubemapSize):_t[K]=tt?E.image[K].image:E.image[K],_t[K]=De(E,_t[K]);let Ot=_t[0],Bt=r.convert(E.format,E.colorSpace),Mt=r.convert(E.type),le=M(E.internalFormat,Bt,Mt,E.colorSpace),Jt=E.isVideoTexture!==!0,Re=Y.__version===void 0||J===!0,D=Q.dataReady,ct=I(E,Ot);te(n.TEXTURE_CUBE_MAP,E);let X;if(fe){Jt&&Re&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,le,Ot.width,Ot.height);for(let K=0;K<6;K++){X=_t[K].mipmaps;for(let mt=0;mt<X.length;mt++){let ft=X[mt];E.format!==$n?Bt!==null?Jt?D&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt,0,0,ft.width,ft.height,Bt,ft.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt,le,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt,0,0,ft.width,ft.height,Bt,Mt,ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt,le,ft.width,ft.height,0,Bt,Mt,ft.data)}}}else{if(X=E.mipmaps,Jt&&Re){X.length>0&&ct++;let K=Nt(_t[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,le,K.width,K.height)}for(let K=0;K<6;K++)if(tt){Jt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,_t[K].width,_t[K].height,Bt,Mt,_t[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,le,_t[K].width,_t[K].height,0,Bt,Mt,_t[K].data);for(let mt=0;mt<X.length;mt++){let qt=X[mt].image[K].image;Jt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt+1,0,0,qt.width,qt.height,Bt,Mt,qt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt+1,le,qt.width,qt.height,0,Bt,Mt,qt.data)}}else{Jt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Bt,Mt,_t[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,le,Bt,Mt,_t[K]);for(let mt=0;mt<X.length;mt++){let ft=X[mt];Jt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt+1,0,0,Bt,Mt,ft.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt+1,le,Bt,Mt,ft.image[K])}}}g(E)&&m(n.TEXTURE_CUBE_MAP),Y.__version=Q.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function At(R,E,k,J,Q,Y){let Rt=r.convert(k.format,k.colorSpace),dt=r.convert(k.type),vt=M(k.internalFormat,Rt,dt,k.colorSpace),fe=i.get(E),tt=i.get(k);if(tt.__renderTarget=E,!fe.__hasExternalTextures){let _t=Math.max(1,E.width>>Y),Ot=Math.max(1,E.height>>Y);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,Y,vt,_t,Ot,E.depth,0,Rt,dt,null):e.texImage2D(Q,Y,vt,_t,Ot,0,Rt,dt,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),ce(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,Q,tt.__webglTexture,0,ae(E)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,Q,tt.__webglTexture,Y),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(R,E,k){if(n.bindRenderbuffer(n.RENDERBUFFER,R),E.depthBuffer){let J=E.depthTexture,Q=J&&J.isDepthTexture?J.type:null,Y=v(E.stencilBuffer,Q),Rt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=ae(E);ce(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt,Y,E.width,E.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,Y,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Y,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Rt,n.RENDERBUFFER,R)}else{let J=E.textures;for(let Q=0;Q<J.length;Q++){let Y=J[Q],Rt=r.convert(Y.format,Y.colorSpace),dt=r.convert(Y.type),vt=M(Y.internalFormat,Rt,dt,Y.colorSpace),fe=ae(E);k&&ce(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,vt,E.width,E.height):ce(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,vt,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,vt,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function kt(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=i.get(E.depthTexture);J.__renderTarget=E,(!J.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),j(E.depthTexture,0);let Q=J.__webglTexture,Y=ae(E);if(E.depthTexture.format===_r)ce(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(E.depthTexture.format===Ar)ce(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function $t(R){let E=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){let J=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){let Q=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),E.__depthDisposeCallback=Q}E.__boundDepthTexture=J}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");kt(E.__webglFramebuffer,R)}else if(k){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=n.createRenderbuffer(),ut(E.__webglDepthbuffer[J],R,!1);else{let Q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),ut(E.__webglDepthbuffer,R,!1);else{let J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,Q)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(R,E,k){let J=i.get(R);E!==void 0&&At(J.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&$t(R)}function ke(R){let E=R.texture,k=i.get(R),J=i.get(E);R.addEventListener("dispose",C);let Q=R.textures,Y=R.isWebGLCubeRenderTarget===!0,Rt=Q.length>1;if(Rt||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=E.version,o.memory.textures++),Y){k.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[dt]=[];for(let vt=0;vt<E.mipmaps.length;vt++)k.__webglFramebuffer[dt][vt]=n.createFramebuffer()}else k.__webglFramebuffer[dt]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let dt=0;dt<E.mipmaps.length;dt++)k.__webglFramebuffer[dt]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Rt)for(let dt=0,vt=Q.length;dt<vt;dt++){let fe=i.get(Q[dt]);fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&ce(R)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let dt=0;dt<Q.length;dt++){let vt=Q[dt];k.__webglColorRenderbuffer[dt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[dt]);let fe=r.convert(vt.format,vt.colorSpace),tt=r.convert(vt.type),_t=M(vt.internalFormat,fe,tt,vt.colorSpace,R.isXRRenderTarget===!0),Ot=ae(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot,_t,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,k.__webglColorRenderbuffer[dt])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),ut(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),te(n.TEXTURE_CUBE_MAP,E);for(let dt=0;dt<6;dt++)if(E.mipmaps&&E.mipmaps.length>0)for(let vt=0;vt<E.mipmaps.length;vt++)At(k.__webglFramebuffer[dt][vt],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,vt);else At(k.__webglFramebuffer[dt],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);g(E)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let dt=0,vt=Q.length;dt<vt;dt++){let fe=Q[dt],tt=i.get(fe);e.bindTexture(n.TEXTURE_2D,tt.__webglTexture),te(n.TEXTURE_2D,fe),At(k.__webglFramebuffer,R,fe,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,0),g(fe)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let dt=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(dt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(dt,J.__webglTexture),te(dt,E),E.mipmaps&&E.mipmaps.length>0)for(let vt=0;vt<E.mipmaps.length;vt++)At(k.__webglFramebuffer[vt],R,E,n.COLOR_ATTACHMENT0,dt,vt);else At(k.__webglFramebuffer,R,E,n.COLOR_ATTACHMENT0,dt,0);g(E)&&m(dt),e.unbindTexture()}R.depthBuffer&&$t(R)}function de(R){let E=R.textures;for(let k=0,J=E.length;k<J;k++){let Q=E[k];if(g(Q)){let Y=_(R),Rt=i.get(Q).__webglTexture;e.bindTexture(Y,Rt),m(Y),e.unbindTexture()}}}let We=[],F=[];function Cn(R){if(R.samples>0){if(ce(R)===!1){let E=R.textures,k=R.width,J=R.height,Q=n.COLOR_BUFFER_BIT,Y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Rt=i.get(R),dt=E.length>1;if(dt)for(let vt=0;vt<E.length;vt++)e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let vt=0;vt<E.length;vt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),dt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Rt.__webglColorRenderbuffer[vt]);let fe=i.get(E[vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,fe,0)}n.blitFramebuffer(0,0,k,J,0,0,k,J,Q,n.NEAREST),c===!0&&(We.length=0,F.length=0,We.push(n.COLOR_ATTACHMENT0+vt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(We.push(Y),F.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,F)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,We))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),dt)for(let vt=0;vt<E.length;vt++){e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,Rt.__webglColorRenderbuffer[vt]);let fe=i.get(E[vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,fe,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let E=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function ae(R){return Math.min(s.maxSamples,R.samples)}function ce(R){let E=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ft(R){let E=o.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function De(R,E){let k=R.colorSpace,J=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Nr&&k!==Qi&&(pe.getTransfer(k)===be?(J!==$n||Q!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}function Nt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.setTexture2D=j,this.setTexture2DArray=q,this.setTexture3D=nt,this.setTextureCube=$,this.rebindTextures=ee,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=Cn,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=At,this.useMultisampledRTT=ce}function wM(n,t){function e(i,s=Qi){let r,o=pe.getTransfer(s);if(i===Li)return n.UNSIGNED_BYTE;if(i===fu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===pu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===sp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===np)return n.BYTE;if(i===ip)return n.SHORT;if(i===Lo)return n.UNSIGNED_SHORT;if(i===du)return n.INT;if(i===Ls)return n.UNSIGNED_INT;if(i===ci)return n.FLOAT;if(i===ko)return n.HALF_FLOAT;if(i===rp)return n.ALPHA;if(i===op)return n.RGB;if(i===$n)return n.RGBA;if(i===ap)return n.LUMINANCE;if(i===cp)return n.LUMINANCE_ALPHA;if(i===_r)return n.DEPTH_COMPONENT;if(i===Ar)return n.DEPTH_STENCIL;if(i===mu)return n.RED;if(i===gu)return n.RED_INTEGER;if(i===lp)return n.RG;if(i===xu)return n.RG_INTEGER;if(i===yu)return n.RGBA_INTEGER;if(i===Na||i===Fa||i===Oa||i===ka)if(o===be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ka)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kl||i===jl||i===Ql||i===th)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ql)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===th)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===eh||i===nh||i===ih)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===eh||i===nh)return o===be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ih)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===sh||i===rh||i===oh||i===ah||i===ch||i===lh||i===hh||i===uh||i===dh||i===fh||i===ph||i===mh||i===gh||i===xh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===sh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===oh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ah)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ch)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ph)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===za||i===yh||i===vh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===za)return o===be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hp||i===_h||i===Mh||i===Eh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===za)return r.COMPRESSED_RED_RGTC1_EXT;if(i===_h)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Eh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Tr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var kh=class extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},jt=class extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},TM={type:"move"},Ro=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,i),m=this._getHandJoint(l,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,x=.005;l.inputState.pinching&&d>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(TM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new jt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},AM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RM=`
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

}`,zh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new _n,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ln({vertexShader:AM,fragmentShader:RM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bt(new Yn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bh=class extends ss{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,x=null,y=new zh,g=e.getContextAttributes(),m=null,_=null,M=[],v=[],I=new ot,A=null,C=new Xe;C.viewport=new Se;let P=new Xe;P.viewport=new Se;let S=[C,P],b=new kh,L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let it=M[Z];return it===void 0&&(it=new Ro,M[Z]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Z){let it=M[Z];return it===void 0&&(it=new Ro,M[Z]=it),it.getGripSpace()},this.getHand=function(Z){let it=M[Z];return it===void 0&&(it=new Ro,M[Z]=it),it.getHandSpace()};function z(Z){let it=v.indexOf(Z.inputSource);if(it===-1)return;let At=M[it];At!==void 0&&(At.update(Z.inputSource,Z.frame,l||o),At.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",j);for(let Z=0;Z<M.length;Z++){let it=v[Z];it!==null&&(v[Z]=null,M[Z].disconnect(it))}L=null,H=null,y.reset(),t.setRenderTarget(m),p=null,d=null,u=null,s=null,_=null,Te.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",G),s.addEventListener("inputsourceschange",j),g.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){let it={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Di(p.framebufferWidth,p.framebufferHeight,{format:$n,type:Li,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let it=null,At=null,ut=null;g.depth&&(ut=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=g.stencil?Ar:_r,At=g.stencil?Tr:Ls);let kt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(kt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new Di(d.textureWidth,d.textureHeight,{format:$n,type:Li,depthTexture:new Qa(d.textureWidth,d.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Te.setContext(s),Te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function j(Z){for(let it=0;it<Z.removed.length;it++){let At=Z.removed[it],ut=v.indexOf(At);ut>=0&&(v[ut]=null,M[ut].disconnect(At))}for(let it=0;it<Z.added.length;it++){let At=Z.added[it],ut=v.indexOf(At);if(ut===-1){for(let $t=0;$t<M.length;$t++)if($t>=v.length){v.push(At),ut=$t;break}else if(v[$t]===null){v[$t]=At,ut=$t;break}if(ut===-1)break}let kt=M[ut];kt&&kt.connect(At)}}let q=new T,nt=new T;function $(Z,it,At){q.setFromMatrixPosition(it.matrixWorld),nt.setFromMatrixPosition(At.matrixWorld);let ut=q.distanceTo(nt),kt=it.projectionMatrix.elements,$t=At.projectionMatrix.elements,ee=kt[14]/(kt[10]-1),ke=kt[14]/(kt[10]+1),de=(kt[9]+1)/kt[5],We=(kt[9]-1)/kt[5],F=(kt[8]-1)/kt[0],Cn=($t[8]+1)/$t[0],ae=ee*F,ce=ee*Cn,Ft=ut/(-F+Cn),De=Ft*-F;if(it.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(De),Z.translateZ(Ft),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),kt[10]===-1)Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let Nt=ee+Ft,R=ke+Ft,E=ae-De,k=ce+(ut-De),J=de*ke/R*Nt,Q=We*ke/R*Nt;Z.projectionMatrix.makePerspective(E,k,J,Q,Nt,R),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ht(Z,it){it===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(it.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let it=Z.near,At=Z.far;y.texture!==null&&(y.depthNear>0&&(it=y.depthNear),y.depthFar>0&&(At=y.depthFar)),b.near=P.near=C.near=it,b.far=P.far=C.far=At,(L!==b.near||H!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,H=b.far),C.layers.mask=Z.layers.mask|2,P.layers.mask=Z.layers.mask|4,b.layers.mask=C.layers.mask|P.layers.mask;let ut=Z.parent,kt=b.cameras;ht(b,ut);for(let $t=0;$t<kt.length;$t++)ht(kt[$t],ut);kt.length===2?$(b,C,P):b.projectionMatrix.copy(C.projectionMatrix),yt(Z,b,ut)};function yt(Z,it,At){At===null?Z.matrix.copy(it.matrixWorld):(Z.matrix.copy(At.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(it.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Rr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(b)};let Lt=null;function te(Z,it){if(h=it.getViewerPose(l||o),x=it,h!==null){let At=h.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let ut=!1;At.length!==b.cameras.length&&(b.cameras.length=0,ut=!0);for(let $t=0;$t<At.length;$t++){let ee=At[$t],ke=null;if(p!==null)ke=p.getViewport(ee);else{let We=u.getViewSubImage(d,ee);ke=We.viewport,$t===0&&(t.setRenderTargetTextures(_,We.colorTexture,d.ignoreDepthValues?void 0:We.depthStencilTexture),t.setRenderTarget(_))}let de=S[$t];de===void 0&&(de=new Xe,de.layers.enable($t),de.viewport=new Se,S[$t]=de),de.matrix.fromArray(ee.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(ee.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(ke.x,ke.y,ke.width,ke.height),$t===0&&(b.matrix.copy(de.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ut===!0&&b.cameras.push(de)}let kt=s.enabledFeatures;if(kt&&kt.includes("depth-sensing")){let $t=u.getDepthInformation(At[0]);$t&&$t.isValid&&$t.texture&&y.init(t,$t,s.renderState)}}for(let At=0;At<M.length;At++){let ut=v[At],kt=M[At];ut!==null&&kt!==void 0&&kt.update(ut,it,l||o)}Lt&&Lt(Z,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),x=null}let Te=new gp;Te.setAnimationLoop(te),this.setAnimationLoop=function(Z){Lt=Z},this.dispose=function(){}}},Ts=new Mn,CM=new xe;function IM(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,mp(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,_,M,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&p(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),x(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),y(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,_,M):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===ln&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===ln&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=t.get(m),M=_.envMap,v=_.envMapRotation;M&&(g.envMap.value=M,Ts.copy(v),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),g.envMapRotation.value.setFromMatrix4(CM.makeRotationFromEuler(Ts)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,_,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=M*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ln&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let _=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function PM(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,M){let v=M.program;i.uniformBlockBinding(_,v)}function l(_,M){let v=s[_.id];v===void 0&&(x(_),v=h(_),s[_.id]=v,_.addEventListener("dispose",g));let I=M.program;i.updateUBOMapping(_,I);let A=t.render.frame;r[_.id]!==A&&(d(_),r[_.id]=A)}function h(_){let M=u();_.__bindingPointIndex=M;let v=n.createBuffer(),I=_.__size,A=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,I,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,v),v}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let M=s[_.id],v=_.uniforms,I=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let A=0,C=v.length;A<C;A++){let P=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,b=P.length;S<b;S++){let L=P[S];if(p(L,A,S,I)===!0){let H=L.__offset,z=Array.isArray(L.value)?L.value:[L.value],G=0;for(let j=0;j<z.length;j++){let q=z[j],nt=y(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,H+G,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,G),G+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,M,v,I){let A=_.value,C=M+"_"+v;if(I[C]===void 0)return typeof A=="number"||typeof A=="boolean"?I[C]=A:I[C]=A.clone(),!0;{let P=I[C];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return I[C]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function x(_){let M=_.uniforms,v=0,I=16;for(let C=0,P=M.length;C<P;C++){let S=Array.isArray(M[C])?M[C]:[M[C]];for(let b=0,L=S.length;b<L;b++){let H=S[b],z=Array.isArray(H.value)?H.value:[H.value];for(let G=0,j=z.length;G<j;G++){let q=z[G],nt=y(q),$=v%I,ht=$%nt.boundary,yt=$+ht;v+=ht,yt!==0&&I-yt<nt.storage&&(v+=I-yt),H.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=v,v+=nt.storage}}}let A=v%I;return A>0&&(v+=I-A),_.__size=v,_.__cache={},this}function y(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),M}function g(_){let M=_.target;M.removeEventListener("dispose",g);let v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}var Ir=class{constructor(t={}){let{canvas:e=Ng(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=new Uint32Array(4),y=new Int32Array(4),g=null,m=null,_=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this.toneMapping=ns,this.toneMappingExposure=1;let v=this,I=!1,A=0,C=0,P=null,S=-1,b=null,L=new Se,H=new Se,z=null,G=new It(0),j=0,q=e.width,nt=e.height,$=1,ht=null,yt=null,Lt=new Se(0,0,q,nt),te=new Se(0,0,q,nt),Te=!1,Z=new Do,it=!1,At=!1,ut=new xe,kt=new xe,$t=new T,ee=new Se,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function We(){return P===null?$:1}let F=i;function Cn(w,U){return e.getContext(w,U)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hu}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),F===null){let U="webgl2";if(F=Cn(U,w),F===null)throw Cn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ae,ce,Ft,De,Nt,R,E,k,J,Q,Y,Rt,dt,vt,fe,tt,_t,Ot,Bt,Mt,le,Jt,Re,D;function ct(){ae=new qv(F),ae.init(),Jt=new wM(F,ae),ce=new Hv(F,ae,t,Jt),Ft=new EM(F,ae),ce.reverseDepthBuffer&&d&&Ft.buffers.depth.setReversed(!0),De=new Jv(F),Nt=new lM,R=new SM(F,ae,Ft,Nt,ce,Jt,De),E=new Gv(v),k=new $v(v),J=new ix(F),Re=new zv(F,J),Q=new Yv(F,J,De,Re),Y=new jv(F,Q,J,De),Bt=new Kv(F,ce,R),tt=new Vv(Nt),Rt=new cM(v,E,k,ae,ce,Re,tt),dt=new IM(v,Nt),vt=new uM,fe=new xM(ae),Ot=new kv(v,E,k,Ft,Y,p,c),_t=new _M(v,Y,ce),D=new PM(F,De,ce,Ft),Mt=new Bv(F,ae,De),le=new Zv(F,ae,De),De.programs=Rt.programs,v.capabilities=ce,v.extensions=ae,v.properties=Nt,v.renderLists=vt,v.shadowMap=_t,v.state=Ft,v.info=De}ct();let X=new Bh(v,F);this.xr=X,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let w=ae.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ae.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(q,nt,!1))},this.getSize=function(w){return w.set(q,nt)},this.setSize=function(w,U,B=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,nt=U,e.width=Math.floor(w*$),e.height=Math.floor(U*$),B===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(q*$,nt*$).floor()},this.setDrawingBufferSize=function(w,U,B){q=w,nt=U,$=B,e.width=Math.floor(w*B),e.height=Math.floor(U*B),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(Lt)},this.setViewport=function(w,U,B,V){w.isVector4?Lt.set(w.x,w.y,w.z,w.w):Lt.set(w,U,B,V),Ft.viewport(L.copy(Lt).multiplyScalar($).round())},this.getScissor=function(w){return w.copy(te)},this.setScissor=function(w,U,B,V){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,U,B,V),Ft.scissor(H.copy(te).multiplyScalar($).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(w){Ft.setScissorTest(Te=w)},this.setOpaqueSort=function(w){ht=w},this.setTransparentSort=function(w){yt=w},this.getClearColor=function(w){return w.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(w=!0,U=!0,B=!0){let V=0;if(w){let N=!1;if(P!==null){let et=P.texture.format;N=et===yu||et===xu||et===gu}if(N){let et=P.texture.type,pt=et===Li||et===Ls||et===Lo||et===Tr||et===fu||et===pu,St=Ot.getClearColor(),wt=Ot.getClearAlpha(),Vt=St.r,Yt=St.g,Tt=St.b;pt?(x[0]=Vt,x[1]=Yt,x[2]=Tt,x[3]=wt,F.clearBufferuiv(F.COLOR,0,x)):(y[0]=Vt,y[1]=Yt,y[2]=Tt,y[3]=wt,F.clearBufferiv(F.COLOR,0,y))}else V|=F.COLOR_BUFFER_BIT}U&&(V|=F.DEPTH_BUFFER_BIT),B&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),vt.dispose(),fe.dispose(),Nt.dispose(),E.dispose(),k.dispose(),Y.dispose(),Re.dispose(),D.dispose(),Rt.dispose(),X.dispose(),X.removeEventListener("sessionstart",Dd),X.removeEventListener("sessionend",Ud),_s.stop()};function K(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let w=De.autoReset,U=_t.enabled,B=_t.autoUpdate,V=_t.needsUpdate,N=_t.type;ct(),De.autoReset=w,_t.enabled=U,_t.autoUpdate=B,_t.needsUpdate=V,_t.type=N}function ft(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function qt(w){let U=w.target;U.removeEventListener("dispose",qt),He(U)}function He(w){on(w),Nt.remove(w)}function on(w){let U=Nt.get(w).programs;U!==void 0&&(U.forEach(function(B){Rt.releaseProgram(B)}),w.isShaderMaterial&&Rt.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,B,V,N,et){U===null&&(U=ke);let pt=N.isMesh&&N.matrixWorld.determinant()<0,St=P0(w,U,B,V,N);Ft.setMaterial(V,pt);let wt=B.index,Vt=1;if(V.wireframe===!0){if(wt=Q.getWireframeAttribute(B),wt===void 0)return;Vt=2}let Yt=B.drawRange,Tt=B.attributes.position,me=Yt.start*Vt,Ce=(Yt.start+Yt.count)*Vt;et!==null&&(me=Math.max(me,et.start*Vt),Ce=Math.min(Ce,(et.start+et.count)*Vt)),wt!==null?(me=Math.max(me,0),Ce=Math.min(Ce,wt.count)):Tt!=null&&(me=Math.max(me,0),Ce=Math.min(Ce,Tt.count));let Ue=Ce-me;if(Ue<0||Ue===1/0)return;Re.setup(N,V,St,B,wt);let vn,ve=Mt;if(wt!==null&&(vn=J.get(wt),ve=le,ve.setIndex(vn)),N.isMesh)V.wireframe===!0?(Ft.setLineWidth(V.wireframeLinewidth*We()),ve.setMode(F.LINES)):ve.setMode(F.TRIANGLES);else if(N.isLine){let Ct=V.linewidth;Ct===void 0&&(Ct=1),Ft.setLineWidth(Ct*We()),N.isLineSegments?ve.setMode(F.LINES):N.isLineLoop?ve.setMode(F.LINE_LOOP):ve.setMode(F.LINE_STRIP)}else N.isPoints?ve.setMode(F.POINTS):N.isSprite&&ve.setMode(F.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ve.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))ve.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Ct=N._multiDrawStarts,Mi=N._multiDrawCounts,_e=N._multiDrawCount,Hn=wt?J.get(wt).bytesPerElement:1,Qs=Nt.get(V).currentProgram.getUniforms();for(let bn=0;bn<_e;bn++)Qs.setValue(F,"_gl_DrawID",bn),ve.render(Ct[bn]/Hn,Mi[bn])}else if(N.isInstancedMesh)ve.renderInstances(me,Ue,N.count);else if(B.isInstancedBufferGeometry){let Ct=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Mi=Math.min(B.instanceCount,Ct);ve.renderInstances(me,Ue,Mi)}else ve.render(me,Ue)};function Me(w,U,B){w.transparent===!0&&w.side===sn&&w.forceSinglePass===!1?(w.side=ln,w.needsUpdate=!0,ra(w,U,B),w.side=is,w.needsUpdate=!0,ra(w,U,B),w.side=sn):ra(w,U,B)}this.compile=function(w,U,B=null){B===null&&(B=w),m=fe.get(B),m.init(U),M.push(m),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),w!==B&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();let V=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let et=N.material;if(et)if(Array.isArray(et))for(let pt=0;pt<et.length;pt++){let St=et[pt];Me(St,B,N),V.add(St)}else Me(et,B,N),V.add(et)}),M.pop(),m=null,V},this.compileAsync=function(w,U,B=null){let V=this.compile(w,U,B);return new Promise(N=>{function et(){if(V.forEach(function(pt){Nt.get(pt).currentProgram.isReady()&&V.delete(pt)}),V.size===0){N(w);return}setTimeout(et,10)}ae.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Bn=null;function _i(w){Bn&&Bn(w)}function Dd(){_s.stop()}function Ud(){_s.start()}let _s=new gp;_s.setAnimationLoop(_i),typeof self<"u"&&_s.setContext(self),this.setAnimationLoop=function(w){Bn=w,X.setAnimationLoop(w),w===null?_s.stop():_s.start()},X.addEventListener("sessionstart",Dd),X.addEventListener("sessionend",Ud),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,U,P),m=fe.get(w,M.length),m.init(U),M.push(m),kt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Z.setFromProjectionMatrix(kt),At=this.localClippingEnabled,it=tt.init(this.clippingPlanes,At),g=vt.get(w,_.length),g.init(),_.push(g),X.enabled===!0&&X.isPresenting===!0){let et=v.xr.getDepthSensingMesh();et!==null&&sl(et,U,-1/0,v.sortObjects)}sl(w,U,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ht,yt),de=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,de&&Ot.addToRenderList(g,w),this.info.render.frame++,it===!0&&tt.beginShadows();let B=m.state.shadowsArray;_t.render(B,w,U),it===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=g.opaque,N=g.transmissive;if(m.setupLights(),U.isArrayCamera){let et=U.cameras;if(N.length>0)for(let pt=0,St=et.length;pt<St;pt++){let wt=et[pt];Fd(V,N,w,wt)}de&&Ot.render(w);for(let pt=0,St=et.length;pt<St;pt++){let wt=et[pt];Nd(g,w,wt,wt.viewport)}}else N.length>0&&Fd(V,N,w,U),de&&Ot.render(w),Nd(g,w,U);P!==null&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(v,w,U),Re.resetDefaultState(),S=-1,b=null,M.pop(),M.length>0?(m=M[M.length-1],it===!0&&tt.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function sl(w,U,B,V){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){V&&ee.setFromMatrixPosition(w.matrixWorld).applyMatrix4(kt);let pt=Y.update(w),St=w.material;St.visible&&g.push(w,pt,St,B,ee.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Z.intersectsObject(w))){let pt=Y.update(w),St=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ee.copy(w.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),ee.copy(pt.boundingSphere.center)),ee.applyMatrix4(w.matrixWorld).applyMatrix4(kt)),Array.isArray(St)){let wt=pt.groups;for(let Vt=0,Yt=wt.length;Vt<Yt;Vt++){let Tt=wt[Vt],me=St[Tt.materialIndex];me&&me.visible&&g.push(w,pt,me,B,ee.z,Tt)}}else St.visible&&g.push(w,pt,St,B,ee.z,null)}}let et=w.children;for(let pt=0,St=et.length;pt<St;pt++)sl(et[pt],U,B,V)}function Nd(w,U,B,V){let N=w.opaque,et=w.transmissive,pt=w.transparent;m.setupLightsView(B),it===!0&&tt.setGlobalState(v.clippingPlanes,B),V&&Ft.viewport(L.copy(V)),N.length>0&&sa(N,U,B),et.length>0&&sa(et,U,B),pt.length>0&&sa(pt,U,B),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function Fd(w,U,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new Di(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?ko:Li,minFilter:Ps,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace}));let et=m.state.transmissionRenderTarget[V.id],pt=V.viewport||L;et.setSize(pt.z,pt.w);let St=v.getRenderTarget();v.setRenderTarget(et),v.getClearColor(G),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear(),de&&Ot.render(B);let wt=v.toneMapping;v.toneMapping=ns;let Vt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),it===!0&&tt.setGlobalState(v.clippingPlanes,V),sa(w,B,V),R.updateMultisampleRenderTarget(et),R.updateRenderTargetMipmap(et),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Tt=0,me=U.length;Tt<me;Tt++){let Ce=U[Tt],Ue=Ce.object,vn=Ce.geometry,ve=Ce.material,Ct=Ce.group;if(ve.side===sn&&Ue.layers.test(V.layers)){let Mi=ve.side;ve.side=ln,ve.needsUpdate=!0,Od(Ue,B,V,vn,ve,Ct),ve.side=Mi,ve.needsUpdate=!0,Yt=!0}}Yt===!0&&(R.updateMultisampleRenderTarget(et),R.updateRenderTargetMipmap(et))}v.setRenderTarget(St),v.setClearColor(G,j),Vt!==void 0&&(V.viewport=Vt),v.toneMapping=wt}function sa(w,U,B){let V=U.isScene===!0?U.overrideMaterial:null;for(let N=0,et=w.length;N<et;N++){let pt=w[N],St=pt.object,wt=pt.geometry,Vt=V===null?pt.material:V,Yt=pt.group;St.layers.test(B.layers)&&Od(St,U,B,wt,Vt,Yt)}}function Od(w,U,B,V,N,et){w.onBeforeRender(v,U,B,V,N,et),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(v,U,B,V,w,et),N.transparent===!0&&N.side===sn&&N.forceSinglePass===!1?(N.side=ln,N.needsUpdate=!0,v.renderBufferDirect(B,U,V,N,w,et),N.side=is,N.needsUpdate=!0,v.renderBufferDirect(B,U,V,N,w,et),N.side=sn):v.renderBufferDirect(B,U,V,N,w,et),w.onAfterRender(v,U,B,V,N,et)}function ra(w,U,B){U.isScene!==!0&&(U=ke);let V=Nt.get(w),N=m.state.lights,et=m.state.shadowsArray,pt=N.state.version,St=Rt.getParameters(w,N.state,et,U,B),wt=Rt.getProgramCacheKey(St),Vt=V.programs;V.environment=w.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(w.isMeshStandardMaterial?k:E).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Vt===void 0&&(w.addEventListener("dispose",qt),Vt=new Map,V.programs=Vt);let Yt=Vt.get(wt);if(Yt!==void 0){if(V.currentProgram===Yt&&V.lightsStateVersion===pt)return zd(w,St),Yt}else St.uniforms=Rt.getUniforms(w),w.onBeforeCompile(St,v),Yt=Rt.acquireProgram(St,wt),Vt.set(wt,Yt),V.uniforms=St.uniforms;let Tt=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Tt.clippingPlanes=tt.uniform),zd(w,St),V.needsLights=D0(w),V.lightsStateVersion=pt,V.needsLights&&(Tt.ambientLightColor.value=N.state.ambient,Tt.lightProbe.value=N.state.probe,Tt.directionalLights.value=N.state.directional,Tt.directionalLightShadows.value=N.state.directionalShadow,Tt.spotLights.value=N.state.spot,Tt.spotLightShadows.value=N.state.spotShadow,Tt.rectAreaLights.value=N.state.rectArea,Tt.ltc_1.value=N.state.rectAreaLTC1,Tt.ltc_2.value=N.state.rectAreaLTC2,Tt.pointLights.value=N.state.point,Tt.pointLightShadows.value=N.state.pointShadow,Tt.hemisphereLights.value=N.state.hemi,Tt.directionalShadowMap.value=N.state.directionalShadowMap,Tt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Tt.spotShadowMap.value=N.state.spotShadowMap,Tt.spotLightMatrix.value=N.state.spotLightMatrix,Tt.spotLightMap.value=N.state.spotLightMap,Tt.pointShadowMap.value=N.state.pointShadowMap,Tt.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Yt,V.uniformsList=null,Yt}function kd(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=Er.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function zd(w,U){let B=Nt.get(w);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function P0(w,U,B,V,N){U.isScene!==!0&&(U=ke),R.resetTextureUnits();let et=U.fog,pt=V.isMeshStandardMaterial?U.environment:null,St=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Nr,wt=(V.isMeshStandardMaterial?k:E).get(V.envMap||pt),Vt=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Yt=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Tt=!!B.morphAttributes.position,me=!!B.morphAttributes.normal,Ce=!!B.morphAttributes.color,Ue=ns;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ue=v.toneMapping);let vn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ve=vn!==void 0?vn.length:0,Ct=Nt.get(V),Mi=m.state.lights;if(it===!0&&(At===!0||w!==b)){let In=w===b&&V.id===S;tt.setState(V,w,In)}let _e=!1;V.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Mi.state.version||Ct.outputColorSpace!==St||N.isBatchedMesh&&Ct.batching===!1||!N.isBatchedMesh&&Ct.batching===!0||N.isBatchedMesh&&Ct.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ct.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ct.instancing===!1||!N.isInstancedMesh&&Ct.instancing===!0||N.isSkinnedMesh&&Ct.skinning===!1||!N.isSkinnedMesh&&Ct.skinning===!0||N.isInstancedMesh&&Ct.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ct.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ct.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ct.instancingMorph===!1&&N.morphTexture!==null||Ct.envMap!==wt||V.fog===!0&&Ct.fog!==et||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==tt.numPlanes||Ct.numIntersection!==tt.numIntersection)||Ct.vertexAlphas!==Vt||Ct.vertexTangents!==Yt||Ct.morphTargets!==Tt||Ct.morphNormals!==me||Ct.morphColors!==Ce||Ct.toneMapping!==Ue||Ct.morphTargetsCount!==ve)&&(_e=!0):(_e=!0,Ct.__version=V.version);let Hn=Ct.currentProgram;_e===!0&&(Hn=ra(V,U,N));let Qs=!1,bn=!1,uo=!1,Ne=Hn.getUniforms(),ri=Ct.uniforms;if(Ft.useProgram(Hn.program)&&(Qs=!0,bn=!0,uo=!0),V.id!==S&&(S=V.id,bn=!0),Qs||b!==w){Ft.buffers.depth.getReversed()?(ut.copy(w.projectionMatrix),Og(ut),kg(ut),Ne.setValue(F,"projectionMatrix",ut)):Ne.setValue(F,"projectionMatrix",w.projectionMatrix),Ne.setValue(F,"viewMatrix",w.matrixWorldInverse);let Xi=Ne.map.cameraPosition;Xi!==void 0&&Xi.setValue(F,$t.setFromMatrixPosition(w.matrixWorld)),ce.logarithmicDepthBuffer&&Ne.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ne.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,bn=!0,uo=!0)}if(N.isSkinnedMesh){Ne.setOptional(F,N,"bindMatrix"),Ne.setOptional(F,N,"bindMatrixInverse");let In=N.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),Ne.setValue(F,"boneTexture",In.boneTexture,R))}N.isBatchedMesh&&(Ne.setOptional(F,N,"batchingTexture"),Ne.setValue(F,"batchingTexture",N._matricesTexture,R),Ne.setOptional(F,N,"batchingIdTexture"),Ne.setValue(F,"batchingIdTexture",N._indirectTexture,R),Ne.setOptional(F,N,"batchingColorTexture"),N._colorsTexture!==null&&Ne.setValue(F,"batchingColorTexture",N._colorsTexture,R));let fo=B.morphAttributes;if((fo.position!==void 0||fo.normal!==void 0||fo.color!==void 0)&&Bt.update(N,B,Hn),(bn||Ct.receiveShadow!==N.receiveShadow)&&(Ct.receiveShadow=N.receiveShadow,Ne.setValue(F,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(ri.envMap.value=wt,ri.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(ri.envMapIntensity.value=U.environmentIntensity),bn&&(Ne.setValue(F,"toneMappingExposure",v.toneMappingExposure),Ct.needsLights&&L0(ri,uo),et&&V.fog===!0&&dt.refreshFogUniforms(ri,et),dt.refreshMaterialUniforms(ri,V,$,nt,m.state.transmissionRenderTarget[w.id]),Er.upload(F,kd(Ct),ri,R)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Er.upload(F,kd(Ct),ri,R),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ne.setValue(F,"center",N.center),Ne.setValue(F,"modelViewMatrix",N.modelViewMatrix),Ne.setValue(F,"normalMatrix",N.normalMatrix),Ne.setValue(F,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let In=V.uniformsGroups;for(let Xi=0,$i=In.length;Xi<$i;Xi++){let Bd=In[Xi];D.update(Bd,Hn),D.bind(Bd,Hn)}}return Hn}function L0(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function D0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,U,B){Nt.get(w.texture).__webglTexture=U,Nt.get(w.depthTexture).__webglTexture=B;let V=Nt.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=B===void 0,V.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){let B=Nt.get(w);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,B=0){P=w,A=U,C=B;let V=!0,N=null,et=!1,pt=!1;if(w){let wt=Nt.get(w);if(wt.__useDefaultFramebuffer!==void 0)Ft.bindFramebuffer(F.FRAMEBUFFER,null),V=!1;else if(wt.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(wt.__hasExternalTextures)R.rebindTextures(w,Nt.get(w.texture).__webglTexture,Nt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Tt=w.depthTexture;if(wt.__boundDepthTexture!==Tt){if(Tt!==null&&Nt.has(Tt)&&(w.width!==Tt.image.width||w.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}let Vt=w.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(pt=!0);let Yt=Nt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Yt[U])?N=Yt[U][B]:N=Yt[U],et=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?N=Nt.get(w).__webglMultisampledFramebuffer:Array.isArray(Yt)?N=Yt[B]:N=Yt,L.copy(w.viewport),H.copy(w.scissor),z=w.scissorTest}else L.copy(Lt).multiplyScalar($).floor(),H.copy(te).multiplyScalar($).floor(),z=Te;if(Ft.bindFramebuffer(F.FRAMEBUFFER,N)&&V&&Ft.drawBuffers(w,N),Ft.viewport(L),Ft.scissor(H),Ft.setScissorTest(z),et){let wt=Nt.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,wt.__webglTexture,B)}else if(pt){let wt=Nt.get(w.texture),Vt=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,wt.__webglTexture,B||0,Vt)}S=-1},this.readRenderTargetPixels=function(w,U,B,V,N,et,pt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Nt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pt!==void 0&&(St=St[pt]),St){Ft.bindFramebuffer(F.FRAMEBUFFER,St);try{let wt=w.texture,Vt=wt.format,Yt=wt.type;if(!ce.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-V&&B>=0&&B<=w.height-N&&F.readPixels(U,B,V,N,Jt.convert(Vt),Jt.convert(Yt),et)}finally{let wt=P!==null?Nt.get(P).__webglFramebuffer:null;Ft.bindFramebuffer(F.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(w,U,B,V,N,et,pt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Nt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pt!==void 0&&(St=St[pt]),St){let wt=w.texture,Vt=wt.format,Yt=wt.type;if(!ce.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-V&&B>=0&&B<=w.height-N){Ft.bindFramebuffer(F.FRAMEBUFFER,St);let Tt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Tt),F.bufferData(F.PIXEL_PACK_BUFFER,et.byteLength,F.STREAM_READ),F.readPixels(U,B,V,N,Jt.convert(Vt),Jt.convert(Yt),0);let me=P!==null?Nt.get(P).__webglFramebuffer:null;Ft.bindFramebuffer(F.FRAMEBUFFER,me);let Ce=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Fg(F,Ce,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Tt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,et),F.deleteBuffer(Tt),F.deleteSync(Ce),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,B=0){w.isTexture!==!0&&(So("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);let V=Math.pow(2,-B),N=Math.floor(w.image.width*V),et=Math.floor(w.image.height*V),pt=U!==null?U.x:0,St=U!==null?U.y:0;R.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,B,0,0,pt,St,N,et),Ft.unbindTexture()},this.copyTextureToTexture=function(w,U,B=null,V=null,N=0){w.isTexture!==!0&&(So("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],U=arguments[2],N=arguments[3]||0,B=null);let et,pt,St,wt,Vt,Yt,Tt,me,Ce,Ue=w.isCompressedTexture?w.mipmaps[N]:w.image;B!==null?(et=B.max.x-B.min.x,pt=B.max.y-B.min.y,St=B.isBox3?B.max.z-B.min.z:1,wt=B.min.x,Vt=B.min.y,Yt=B.isBox3?B.min.z:0):(et=Ue.width,pt=Ue.height,St=Ue.depth||1,wt=0,Vt=0,Yt=0),V!==null?(Tt=V.x,me=V.y,Ce=V.z):(Tt=0,me=0,Ce=0);let vn=Jt.convert(U.format),ve=Jt.convert(U.type),Ct;U.isData3DTexture?(R.setTexture3D(U,0),Ct=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(R.setTexture2DArray(U,0),Ct=F.TEXTURE_2D_ARRAY):(R.setTexture2D(U,0),Ct=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Mi=F.getParameter(F.UNPACK_ROW_LENGTH),_e=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Hn=F.getParameter(F.UNPACK_SKIP_PIXELS),Qs=F.getParameter(F.UNPACK_SKIP_ROWS),bn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ue.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ue.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,wt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Vt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Yt);let uo=w.isDataArrayTexture||w.isData3DTexture,Ne=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let ri=Nt.get(w),fo=Nt.get(U),In=Nt.get(ri.__renderTarget),Xi=Nt.get(fo.__renderTarget);Ft.bindFramebuffer(F.READ_FRAMEBUFFER,In.__webglFramebuffer),Ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let $i=0;$i<St;$i++)uo&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Nt.get(w).__webglTexture,N,Yt+$i),w.isDepthTexture?(Ne&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Nt.get(U).__webglTexture,N,Ce+$i),F.blitFramebuffer(wt,Vt,et,pt,Tt,me,et,pt,F.DEPTH_BUFFER_BIT,F.NEAREST)):Ne?F.copyTexSubImage3D(Ct,N,Tt,me,Ce+$i,wt,Vt,et,pt):F.copyTexSubImage2D(Ct,N,Tt,me,Ce+$i,wt,Vt,et,pt);Ft.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ne?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Ct,N,Tt,me,Ce,et,pt,St,vn,ve,Ue.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Ct,N,Tt,me,Ce,et,pt,St,vn,Ue.data):F.texSubImage3D(Ct,N,Tt,me,Ce,et,pt,St,vn,ve,Ue):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,N,Tt,me,et,pt,vn,ve,Ue.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,N,Tt,me,Ue.width,Ue.height,vn,Ue.data):F.texSubImage2D(F.TEXTURE_2D,N,Tt,me,et,pt,vn,ve,Ue);F.pixelStorei(F.UNPACK_ROW_LENGTH,Mi),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_e),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Hn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Qs),F.pixelStorei(F.UNPACK_SKIP_IMAGES,bn),N===0&&U.generateMipmaps&&F.generateMipmap(Ct),Ft.unbindTexture()},this.copyTextureToTexture3D=function(w,U,B=null,V=null,N=0){return w.isTexture!==!0&&(So("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,V=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0),So('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,B,V,N)},this.initRenderTarget=function(w){Nt.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Ft.unbindTexture()},this.resetState=function(){A=0,C=0,P=null,Ft.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}};var tc=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new It(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},os=class extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Hh=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Sh,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},fn=new T,ec=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix4(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)fn.fromBufferAttribute(this,e),fn.applyNormalMatrix(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)fn.fromBufferAttribute(this,e),fn.transformDirection(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ee(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Xn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Xn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Xn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Xn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),s=Ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ni=class extends Ui{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new It(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},pr,yo=new T,mr=new T,gr=new T,xr=new ot,vo=new ot,Mp=new xe,Aa=new T,_o=new T,Ra=new T,Hf=new ot,Dl=new ot,Vf=new ot,as=class extends Ke{constructor(t=new Ni){if(super(),this.isSprite=!0,this.type="Sprite",pr===void 0){pr=new we;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Hh(e,5);pr.setIndex([0,1,2,0,2,3]),pr.setAttribute("position",new ec(i,3,0,!1)),pr.setAttribute("uv",new ec(i,2,3,!1))}this.geometry=pr,this.material=t,this.center=new ot(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),mr.setFromMatrixScale(this.matrixWorld),Mp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),gr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&mr.multiplyScalar(-gr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Ca(Aa.set(-.5,-.5,0),gr,o,mr,s,r),Ca(_o.set(.5,-.5,0),gr,o,mr,s,r),Ca(Ra.set(.5,.5,0),gr,o,mr,s,r),Hf.set(0,0),Dl.set(1,0),Vf.set(1,1);let a=t.ray.intersectTriangle(Aa,_o,Ra,!1,yo);if(a===null&&(Ca(_o.set(-.5,.5,0),gr,o,mr,s,r),Dl.set(0,1),a=t.ray.intersectTriangle(Aa,Ra,_o,!1,yo),a===null))return;let c=t.ray.origin.distanceTo(yo);c<t.near||c>t.far||e.push({distance:c,point:yo.clone(),uv:ts.getInterpolation(yo,Aa,_o,Ra,Hf,Dl,Vf,new ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ca(n,t,e,i,s,r){xr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(vo.x=r*xr.x-s*xr.y,vo.y=s*xr.x+r*xr.y):vo.copy(xr),n.copy(t),n.x+=vo.x,n.y+=vo.y,n.applyMatrix4(Mp)}var Vh=class extends _n{constructor(t=null,e=1,i=1,s,r,o,a,c,l=Tn,h=Tn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nc=class extends ze{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},yr=new xe,Gf=new xe,Ia=[],Wf=new qn,LM=new xe,Mo=new bt,Eo=new rs,Pr=class extends bt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new nc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,LM)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,yr),Wf.copy(t.boundingBox).applyMatrix4(yr),this.boundingBox.union(Wf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new rs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,yr),Eo.copy(t.boundingSphere).applyMatrix4(yr),this.boundingSphere.union(Eo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Mo.geometry=this.geometry,Mo.material=this.material,Mo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Eo.copy(this.boundingSphere),Eo.applyMatrix4(i),t.ray.intersectsSphere(Eo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,yr),Gf.multiplyMatrices(i,yr),Mo.matrixWorld=Gf,Mo.raycast(t,Ia);for(let o=0,a=Ia.length;o<a;o++){let c=Ia[o];c.instanceId=r,c.object=this,e.push(c)}Ia.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new nc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Vh(new Float32Array(s*this.count),s,this.count,mu,ci));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var An=class extends Ui{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xf=new xe,Gh=new Xa,Pa=new rs,La=new T,Dn=class extends Ke{constructor(t=new we,e=new An){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere),Pa.applyMatrix4(s),Pa.radius+=r,t.ray.intersectsSphere(Pa)===!1)return;Xf.copy(s).invert(),Gh.copy(t.ray).applyMatrix4(Xf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){let d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let x=d,y=p;x<y;x++){let g=l.getX(x);La.fromBufferAttribute(u,g),$f(La,g,c,s,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=d,y=p;x<y;x++)La.fromBufferAttribute(u,x),$f(La,x,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function $f(n,t,e,i,s,r,o){let a=Gh.distanceSqToPoint(n);if(a<e){let c=new T;Gh.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Zn=class extends _n{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ot:new T);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new T,s=[],r=[],o=[],a=new T,c=new xe;for(let p=0;p<=t;p++){let x=p/t;s[p]=this.getTangentAt(x,new T)}r[0]=new T,o[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(nn(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,x))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(nn(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let x=1;x<=t;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],p*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Uo=class extends Un{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ot){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Wh=class extends Uo{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Eu(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var Da=new T,Ul=new Eu,Nl=new Eu,Fl=new Eu,Xh=class extends Un{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new T){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Da.subVectors(s[0],s[1]).add(s[0]),l=Da);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Da.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Da),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,x=Math.pow(l.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(h),p);y<1e-4&&(y=1),x<1e-4&&(x=y),g<1e-4&&(g=y),Ul.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,x,y,g),Nl.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,x,y,g),Fl.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,x,y,g)}else this.curveType==="catmullrom"&&(Ul.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Nl.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Fl.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(Ul.calc(c),Nl.calc(c),Fl.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function qf(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function DM(n,t){let e=1-n;return e*e*t}function UM(n,t){return 2*(1-n)*n*t}function NM(n,t){return n*n*t}function Co(n,t,e,i){return DM(n,t)+UM(n,e)+NM(n,i)}function FM(n,t){let e=1-n;return e*e*e*t}function OM(n,t){let e=1-n;return 3*e*e*n*t}function kM(n,t){return 3*(1-n)*n*n*t}function zM(n,t){return n*n*n*t}function Io(n,t,e,i,s){return FM(n,t)+OM(n,e)+kM(n,i)+zM(n,s)}var ic=class extends Un{constructor(t=new ot,e=new ot,i=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ot){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Io(t,s.x,r.x,o.x,a.x),Io(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$h=class extends Un{constructor(t=new T,e=new T,i=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new T){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Io(t,s.x,r.x,o.x,a.x),Io(t,s.y,r.y,o.y,a.y),Io(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},sc=class extends Un{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qh=class extends Un{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rc=class extends Un{constructor(t=new ot,e=new ot,i=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ot){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Co(t,s.x,r.x,o.x),Co(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yh=class extends Un{constructor(t=new T,e=new T,i=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new T){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Co(t,s.x,r.x,o.x),Co(t,s.y,r.y,o.y),Co(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oc=class extends Un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(qf(a,c.x,l.x,h.x,u.x),qf(a,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new ot().fromArray(s))}return this}},Yf=Object.freeze({__proto__:null,ArcCurve:Wh,CatmullRomCurve3:Xh,CubicBezierCurve:ic,CubicBezierCurve3:$h,EllipseCurve:Uo,LineCurve:sc,LineCurve3:qh,QuadraticBezierCurve:rc,QuadraticBezierCurve3:Yh,SplineCurve:oc}),Zh=class extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yf[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Yf[s.type]().fromJSON(s))}return this}},Jh=class extends Zh{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new sc(this.currentPoint.clone(),new ot(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new rc(this.currentPoint.clone(),new ot(t,e),new ot(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new ic(this.currentPoint.clone(),new ot(t,e),new ot(i,s),new ot(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new oc(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){let l=new Uo(t,e,i,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ds=class n extends we{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=nn(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new T,d=new ot,p=new T,x=new T,y=new T,g=0,m=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:g=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,p.x=m*1,p.y=-g,p.z=m*0,y.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(y.x,y.y,y.z);break;default:g=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,p.x=m*1,p.y=-g,p.z=m*0,x.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),c.push(p.x,p.y,p.z),y.copy(x)}for(let _=0;_<=e;_++){let M=i+_*h*s,v=Math.sin(M),I=Math.cos(M);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*v,u.y=t[A].y,u.z=t[A].x*I,o.push(u.x,u.y,u.z),d.x=_/e,d.y=A/(t.length-1),a.push(d.x,d.y);let C=c[3*A+0]*v,P=c[3*A+1],S=c[3*A+0]*I;l.push(C,P,S)}}for(let _=0;_<e;_++)for(let M=0;M<t.length-1;M++){let v=M+_*t.length,I=v,A=v+t.length,C=v+t.length+1,P=v+1;r.push(I,A,P),r.push(C,P,A)}this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("uv",new se(a,2)),this.setAttribute("normal",new se(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},ac=class n extends Ds{constructor(t=1,e=1,i=4,s=8){let r=new Jh;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new n(t.radius,t.length,t.capSegments,t.radialSegments)}};var oe=class n extends we{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],x=0,y=[],g=i/2,m=0;_(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(d,3)),this.setAttribute("uv",new se(p,2));function _(){let v=new T,I=new T,A=0,C=(e-t)/i;for(let P=0;P<=r;P++){let S=[],b=P/r,L=b*(e-t)+t;for(let H=0;H<=s;H++){let z=H/s,G=z*c+a,j=Math.sin(G),q=Math.cos(G);I.x=L*j,I.y=-b*i+g,I.z=L*q,u.push(I.x,I.y,I.z),v.set(j,C,q).normalize(),d.push(v.x,v.y,v.z),p.push(z,1-b),S.push(x++)}y.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){let b=y[S][P],L=y[S+1][P],H=y[S+1][P+1],z=y[S][P+1];(t>0||S!==0)&&(h.push(b,L,z),A+=3),(e>0||S!==r-1)&&(h.push(L,H,z),A+=3)}l.addGroup(m,A,0),m+=A}function M(v){let I=x,A=new ot,C=new T,P=0,S=v===!0?t:e,b=v===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,g*b,0),d.push(0,b,0),p.push(.5,.5),x++;let L=x;for(let H=0;H<=s;H++){let G=H/s*c+a,j=Math.cos(G),q=Math.sin(G);C.x=S*q,C.y=g*b,C.z=S*j,u.push(C.x,C.y,C.z),d.push(0,b,0),A.x=j*.5+.5,A.y=q*.5*b+.5,p.push(A.x,A.y),x++}for(let H=0;H<s;H++){let z=I+H,G=L+H;v===!0?h.push(G,G+1,z):h.push(G+1,G,z),P+=3}l.addGroup(m,P,v===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},rn=class n extends oe{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},No=class n extends we{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let M=new T,v=new T,I=new T;for(let A=0;A<e.length;A+=3)p(e[A+0],M),p(e[A+1],v),p(e[A+2],I),c(M,v,I,_)}function c(_,M,v,I){let A=I+1,C=[];for(let P=0;P<=A;P++){C[P]=[];let S=_.clone().lerp(v,P/A),b=M.clone().lerp(v,P/A),L=A-P;for(let H=0;H<=L;H++)H===0&&P===A?C[P][H]=S:C[P][H]=S.clone().lerp(b,H/L)}for(let P=0;P<A;P++)for(let S=0;S<2*(A-P)-1;S++){let b=Math.floor(S/2);S%2===0?(d(C[P][b+1]),d(C[P+1][b]),d(C[P][b])):(d(C[P][b+1]),d(C[P+1][b+1]),d(C[P+1][b]))}}function l(_){let M=new T;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(_),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){let _=new T;for(let M=0;M<r.length;M+=3){_.x=r[M+0],_.y=r[M+1],_.z=r[M+2];let v=g(_)/2/Math.PI+.5,I=m(_)/Math.PI+.5;o.push(v,1-I)}x(),u()}function u(){for(let _=0;_<o.length;_+=6){let M=o[_+0],v=o[_+2],I=o[_+4],A=Math.max(M,v,I),C=Math.min(M,v,I);A>.9&&C<.1&&(M<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),I<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function p(_,M){let v=_*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function x(){let _=new T,M=new T,v=new T,I=new T,A=new ot,C=new ot,P=new ot;for(let S=0,b=0;S<r.length;S+=9,b+=6){_.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),A.set(o[b+0],o[b+1]),C.set(o[b+2],o[b+3]),P.set(o[b+4],o[b+5]),I.copy(_).add(M).add(v).divideScalar(3);let L=g(I);y(A,b+0,_,L),y(C,b+2,M,L),y(P,b+4,v,L)}}function y(_,M,v,I){I<0&&_.x===1&&(o[M]=_.x-1),v.x===0&&v.z===0&&(o[M]=I/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}},hi=class n extends No{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var cs=class n extends No{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},Lr=class n extends No{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},Jn=class n extends we{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,d=(e-t)/s,p=new T,x=new ot;for(let y=0;y<=s;y++){for(let g=0;g<=i;g++){let m=r+g/i*o;p.x=u*Math.cos(m),p.y=u*Math.sin(m),c.push(p.x,p.y,p.z),l.push(0,0,1),x.x=(p.x/e+1)/2,x.y=(p.y/e+1)/2,h.push(x.x,x.y)}u+=d}for(let y=0;y<s;y++){let g=y*(i+1);for(let m=0;m<i;m++){let _=m+g,M=_,v=_+i+1,I=_+i+2,A=_+1;a.push(M,v,A),a.push(v,I,A)}}this.setIndex(a),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var he=class n extends we{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new T,d=new T,p=[],x=[],y=[],g=[];for(let m=0;m<=i;m++){let _=[],M=m/i,v=0;m===0&&o===0?v=.5/e:m===i&&c===Math.PI&&(v=-.5/e);for(let I=0;I<=e;I++){let A=I/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+M*a),x.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),g.push(A+v,1-M),_.push(l++)}h.push(_)}for(let m=0;m<i;m++)for(let _=0;_<e;_++){let M=h[m][_+1],v=h[m][_],I=h[m+1][_],A=h[m+1][_+1];(m!==0||o>0)&&p.push(M,v,A),(m!==i-1||c<Math.PI)&&p.push(v,I,A)}this.setIndex(p),this.setAttribute("position",new se(x,3)),this.setAttribute("normal",new se(y,3)),this.setAttribute("uv",new se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ye=class n extends we{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new T,u=new T,d=new T;for(let p=0;p<=i;p++)for(let x=0;x<=s;x++){let y=x/s*r,g=p/i*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(y),u.y=(t+e*Math.cos(g))*Math.sin(y),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(x/s),l.push(p/i)}for(let p=1;p<=i;p++)for(let x=1;x<=s;x++){let y=(s+1)*p+x-1,g=(s+1)*(p-1)+x-1,m=(s+1)*(p-1)+x,_=(s+1)*p+x;o.push(y,g,_),o.push(g,m,_)}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Dt=class extends Ui{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=up,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ua(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function BM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Dr=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Kh=class extends Dr{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wd,endingEnd:Wd}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xd:r=t,a=2*e-i;break;case $d:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Xd:o=t,c=2*i-e;break;case $d:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,x=(i-e)/(s-e),y=x*x,g=y*x,m=-d*g+2*d*y-d*x,_=(1+d)*g+(-1.5-2*d)*y+(-.5+d)*x+1,M=(-1-p)*g+(1.5+p)*y+.5*x,v=p*g-p*y;for(let I=0;I!==a;++I)r[I]=m*o[h+I]+_*o[l+I]+M*o[c+I]+v*o[u+I];return r}},jh=class extends Dr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Qh=class extends Dr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Kn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ua(e,this.TimeBufferType),this.values=Ua(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ua(t.times,Array),values:Ua(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Qh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new jh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Kh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ba:e=this.InterpolantFactoryMethodDiscrete;break;case bh:e=this.InterpolantFactoryMethodLinear;break;case ol:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ba;case this.InterpolantFactoryMethodLinear:return bh;case this.InterpolantFactoryMethodSmooth:return ol}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&BM(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ol,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*i,d=u-i,p=u+i;for(let x=0;x!==i;++x){let y=e[u+x];if(y!==e[d+x]||y!==e[p+x]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let p=0;p!==i;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=bh;var Us=class extends Kn{constructor(t,e,i){super(t,e,i)}};Us.prototype.ValueTypeName="bool";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=Ba;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;var tu=class extends Kn{};tu.prototype.ValueTypeName="color";var eu=class extends Kn{};eu.prototype.ValueTypeName="number";var nu=class extends Dr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)hn.slerpFlat(r,0,o,l-a,o,l,c);return r}},cc=class extends Kn{InterpolantFactoryMethodLinear(t){return new nu(this.times,this.values,this.getValueSize(),t)}};cc.prototype.ValueTypeName="quaternion";cc.prototype.InterpolantFactoryMethodSmooth=void 0;var Ns=class extends Kn{constructor(t,e,i){super(t,e,i)}};Ns.prototype.ValueTypeName="string";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=Ba;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;var iu=class extends Kn{};iu.prototype.ValueTypeName="vector";var su=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],x=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null}}},HM=new su,ru=class{constructor(t){this.manager=t!==void 0?t:HM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ru.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fs=class extends Ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ls=class extends Fs{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ol=new xe,Zf=new T,Jf=new T,Fo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Do,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Zf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zf),Jf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jf),e.updateMatrixWorld(),Ol.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ol),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ou=class extends Fo{constructor(){super(new Xe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=Rr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Ur=class extends Fs{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ou}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Kf=new xe,bo=new T,kl=new T,au=class extends Fo{constructor(){super(new Xe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ot(4,2),this._viewportCount=6,this._viewports=[new Se(2,1,1,1),new Se(0,1,1,1),new Se(3,1,1,1),new Se(1,1,1,1),new Se(3,0,1,1),new Se(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),bo.setFromMatrixPosition(t.matrixWorld),i.position.copy(bo),kl.copy(i.position),kl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(kl),i.updateMatrixWorld(),s.makeTranslation(-bo.x,-bo.y,-bo.z),Kf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kf)}},lc=class extends Fs{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new au}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},cu=class extends Fo{constructor(){super(new Ka(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ui=class extends Fs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new cu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},hc=class extends Fs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var uc=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=jf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function jf(){return performance.now()}var bu="\\[\\]\\.:\\/",VM=new RegExp("["+bu+"]","g"),Su="[^"+bu+"]",GM="[^"+bu.replace("\\.","")+"]",WM=/((?:WC+[\/:])*)/.source.replace("WC",Su),XM=/(WCOD+)?/.source.replace("WCOD",GM),$M=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Su),qM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Su),YM=new RegExp("^"+WM+XM+$M+qM+"$"),ZM=["material","materials","bones","map"],lu=class{constructor(t,e,i){let s=i||Oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Oe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(VM,"")}static parseTrackName(t){let e=YM.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);ZM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=lu;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fE=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hu);var f={scene:null,camera:null,renderer:null,player:null,time:{t:.3,day:1,elevation:1,night:0},res:{iron:0,silicon:0,ice:0,titanium:0},buildings:[],nodes:[],enemies:[],colonists:[],colony:{pop:0,housing:0,o2:0,food:0,water:0,support:0,powerProd:0,powerUse:0,deficit:!1},upgrades:{},stats:{mined:{iron:0,silicon:0,ice:0,titanium:0},built:{},kills:0,arrived:0,crafted:{}},chapter:0,terraform:0,ended:!1,storm:0,menuOpen:!1,locked:!1,started:!1,debug:!1,colliders:null,raining:!1,events:{map:{},on(n,t){var e;((e=this.map)[n]||(e[n]=[])).push(t)},emit(n,t){(this.map[n]||[]).forEach(e=>e(t))}}},jn={iron:{name:"\u94C1\u77FF",icon:"iron",color:"#d08a5e"},silicon:{name:"\u7845\u6676",icon:"silicon",color:"#f1dca0"},ice:{name:"\u6C34\u51B0",icon:"ice",color:"#a9dcff"},titanium:{name:"\u949B\u77FF",icon:"titanium",color:"#b9a6ff"}};function Qn(n){for(let t in n)if((f.res[t]||0)<n[t])return!1;return!0}function zo(n){for(let t in n)f.res[t]-=n[t]}function Or(n){return Object.entries(n).map(([t,e])=>`<span class="cost ${f.res[t]>=e?"":"lack"}" style="--rc:${jn[t].color}"><svg class="ico"><use href="#i-${t}"/></svg>${e}</span>`).join(" ")}var mc=class{constructor(t=16){this.cell=t,this.map=new Map}key(t,e){return t*73856093^e*19349663}add(t){let e=this.cell,i=Math.floor((t.x-t.r)/e),s=Math.floor((t.x+t.r)/e),r=Math.floor((t.z-t.r)/e),o=Math.floor((t.z+t.r)/e);t._keys=[];for(let a=i;a<=s;a++)for(let c=r;c<=o;c++){let l=this.key(a,c);this.map.has(l)||this.map.set(l,[]),this.map.get(l).push(t),t._keys.push(l)}return t}remove(t){if(!(!t||!t._keys)){for(let e of t._keys){let i=this.map.get(e);if(!i)continue;let s=i.indexOf(t);s>=0&&i.splice(s,1)}t._keys=null}}query(t,e){return this.map.get(this.key(Math.floor(t/this.cell),Math.floor(e/this.cell)))||[]}overlaps(t,e,i){let s=this.cell,r=new Set;for(let o=Math.floor((t-i)/s);o<=Math.floor((t+i)/s);o++)for(let a=Math.floor((e-i)/s);a<=Math.floor((e+i)/s);a++){let c=this.map.get(this.key(o,a));if(c)for(let l of c){if(r.has(l))continue;r.add(l);let h=l.x-t,u=l.z-e,d=l.r+i;if(h*h+u*u<d*d)return l}}return null}};function kr(n){return function(){n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function gc(n){let t=kr(n),e=[...Array(256).keys()];for(let c=255;c>0;c--){let l=Math.floor(t()*(c+1));[e[c],e[l]]=[e[l],e[c]]}let i=new Uint8Array(512);for(let c=0;c<512;c++)i[c]=e[c&255];let s=[1,-1,1,-1,1,-1,0,0],r=[1,1,-1,-1,0,0,1,-1],o=.5*(Math.sqrt(3)-1),a=(3-Math.sqrt(3))/6;return function(c,l){let h=0,u=0,d=0,p=(c+l)*o,x=Math.floor(c+p),y=Math.floor(l+p),g=(x+y)*a,m=c-(x-g),_=l-(y-g),M=m>_?1:0,v=m>_?0:1,I=m-M+a,A=_-v+a,C=m-1+2*a,P=_-1+2*a,S=x&255,b=y&255,L=.5-m*m-_*_;if(L>0){let G=i[S+i[b]]&7;L*=L,h=L*L*(s[G]*m+r[G]*_)}let H=.5-I*I-A*A;if(H>0){let G=i[S+M+i[b+v]]&7;H*=H,u=H*H*(s[G]*I+r[G]*A)}let z=.5-C*C-P*P;if(z>0){let G=i[S+1+i[b+1]]&7;z*=z,d=z*z*(s[G]*C+r[G]*P)}return 70*(h+u+d)}}function wu(n,t,e,i=4,s=2,r=.5){let o=1,a=1,c=0,l=0;for(let h=0;h<i;h++)c+=o*n(t*a,e*a),l+=o,o*=r,a*=s;return c/l}var ti=(n,t,e)=>n<t?t:n>e?e:n,ge=(n,t,e)=>n+(t-n)*e,mn=(n,t,e)=>{let i=ti((e-n)/(t-n),0,1);return i*i*(3-2*i)};var Rn={mars:{id:"mars",name:"\u706B\u661F",place:"\u4E4C\u6258\u90A6\u5E73\u539F",title:"\u65B0\u5BB6\u56ED",next:"europa",seed:2089,gravity:5.6,solar:1,terraformable:!0,craters:46,hills:46,ridges:14,detail:1.6,ground:{a:[.56,.25,.14],b:[.74,.4,.24],steep:[.36,.19,.13],low:[.42,.22,.16]},rockHSL:[.04,.45,.22],rock:9062960,sky:{dayTop:[.62,.42,.29],dayHor:[.9,.68,.5],setTop:[.17,.13,.15],setHor:[.58,.4,.33],nightTop:[.006,.008,.022],nightHor:[.035,.035,.055],halo:[.35,.58,.95],storm:[.62,.42,.28]},dust:16765088,enemy:[3808536,9054736,16730640],extras:"moons",storms:!0,intro:["2089 \u5E74\u3002","\u5730\u7403\u4F9D\u7136\u7F8E\u4E3D\uFF0C\u4F46\u5DF2\u7ECF\u592A\u62E5\u6324\u3001\u592A\u708E\u70ED\u3001\u592A\u75B2\u60EB\u3002","\u300C\u65B9\u821F\u8BA1\u5212\u300D\u628A\u4EBA\u7C7B\u7684\u672A\u6765\uFF0C\u62BC\u5728\u4E86\u4E00\u9897\u7EA2\u8272\u661F\u7403\u4E0A\u3002","\u7ECF\u8FC7\u4E03\u4E2A\u6708\u3001\u4E24\u4EBF\u4E24\u5343\u4E94\u767E\u4E07\u516C\u91CC\u7684\u822A\u884C\u2014\u2014","\u4F60\u7684\u7740\u9646\u8231\uFF0C\u5728\u4E4C\u6258\u90A6\u5E73\u539F\u7684\u6668\u5149\u4E2D\u843D\u5730\u3002",'\u4F60\u662F\u7B2C\u4E00\u4E2A\u3002<b style="color:#ff8a3d">\u4F46\u4E0D\u4F1A\u662F\u6700\u540E\u4E00\u4E2A\u3002</b>']},europa:{id:"europa",name:"\u6728\u536B\u4E8C\xB7\u6B27\u7F57\u5DF4",place:"\u5EB7\u7EB3\u9A6C\u62C9\u6DF7\u6C8C\u533A",title:"\u51B0\u4E0B\u4E4B\u6D77",next:"kepler",seed:1610,gravity:3.6,solar:.55,terraformable:!1,craters:14,hills:16,ridges:26,detail:1.1,ground:{a:[.8,.84,.88],b:[.93,.95,.97],steep:[.52,.36,.3],low:[.62,.72,.82]},rockHSL:[.58,.2,.62],rock:12110040,sky:{dayTop:[.02,.025,.05],dayHor:[.16,.18,.26],setTop:[.01,.012,.03],setHor:[.1,.1,.16],nightTop:[.004,.005,.012],nightHor:[.02,.025,.04],halo:[.6,.7,.9],storm:[.5,.6,.7]},dust:14676223,enemy:[1454138,2788e3,4251903],extras:"jupiter",storms:!1,intro:["\u706B\u661F\u7684\u706F\u706B\uFF0C\u5DF2\u7ECF\u5728\u8EAB\u540E\u4EAE\u6210\u4E86\u4E00\u7247\u3002","\u800C\u4F60\uFF0C\u518D\u4E00\u6B21\u51FA\u53D1\u4E86\u3002","\u6728\u661F\u7684\u7B2C\u4E8C\u9897\u536B\u661F\u2014\u2014\u6B27\u7F57\u5DF4\u3002","\u5728\u5B83\u4E8C\u5341\u516C\u91CC\u539A\u7684\u51B0\u58F3\u4E4B\u4E0B\uFF0C\u662F\u4E00\u6574\u7247\u4ECE\u672A\u89C1\u8FC7\u9633\u5149\u7684\u6D77\u6D0B\u3002","\u6728\u661F\uFF0C\u50CF\u4E00\u8F6E\u5DE8\u5927\u7684\u6708\u4EAE\uFF0C\u60AC\u5728\u5730\u5E73\u7EBF\u4E0A\u3002",'<b style="color:#66e6ff">\u4EBA\u7C7B\u7684\u7B2C\u4E8C\u4E2A\u5BB6\uFF0C\u5728\u51B0\u4E0B\u3002</b>']},kepler:{id:"kepler",name:"\u5F00\u666E\u52D2-442b",place:"\u7FE1\u7FE0\u8C37\u5730",title:"\u53CC\u65E5\u4E4B\u5730",next:null,seed:442,gravity:7.2,solar:1.3,terraformable:!1,craters:8,hills:64,ridges:10,detail:2.2,ground:{a:[.18,.36,.3],b:[.32,.52,.34],steep:[.3,.24,.3],low:[.2,.26,.4]},rockHSL:[.75,.25,.3],rock:6969994,sky:{dayTop:[.3,.5,.78],dayHor:[.78,.86,.8],setTop:[.2,.12,.3],setHor:[.9,.5,.4],nightTop:[.01,.01,.04],nightHor:[.05,.04,.09],halo:[1,.6,.4],storm:[.6,.7,.6]},dust:13172696,enemy:[1976854,5939242,10551104],extras:"twinsuns",storms:!1,intro:["\u4E00\u5343\u4E8C\u767E\u5149\u5E74\u3002","\u51B7\u51BB\u8231\u91CC\u7684\u4E09\u767E\u5E74\uFF0C\u5BF9\u4F60\u53EA\u662F\u4E00\u573A\u68A6\u3002","\u8237\u7A97\u5916\uFF0C\u4E24\u9897\u592A\u9633\u6B63\u4ECE\u7D2B\u8272\u7684\u5C71\u810A\u540E\u5347\u8D77\u3002","\u8FD9\u91CC\u6709\u98CE\uFF0C\u6709\u4E91\uFF0C\u6709\u4F1A\u5728\u591C\u91CC\u53D1\u5149\u7684\u68EE\u6797\u3002","\u5F00\u666E\u52D2-442b\u2014\u2014\u4EBA\u7C7B\u7B2C\u4E00\u6B21\uFF0C\u6765\u5230\u53E6\u4E00\u9897\u6052\u661F\u7684\u8EAB\u8FB9\u3002",'<b style="color:#a0ff70">\u4ECE\u8FD9\u91CC\u5F00\u59CB\uFF0C\u4EBA\u7C7B\u6210\u4E3A\u4E86\u661F\u9645\u6587\u660E\u3002</b>']}},bp="starport-meta";function zr(){try{return JSON.parse(localStorage.getItem(bp))||{}}catch{return{}}}function Tu(n){try{localStorage.setItem(bp,JSON.stringify(n))}catch{}}function Sp(){try{for(let n of Object.keys(localStorage))n.startsWith("starport-")&&localStorage.removeItem(n)}catch{}}var Ep=new URLSearchParams(location.search).get("planet"),En=zr(),Qt=Rn[Ep]?Ep:Rn[En.planet]?En.planet:"mars",xt=Rn[Qt],xc=Qt==="mars"?"starport-newhome-v1":"starport-planet-"+Qt;var un=1400,Ht=un/2,us=400,Ru=un/us,di=us+1,Bo=gc(xt.seed),vc=gc(xt.seed*7+3),wp=gc(xt.seed+42),Fi=[],fi,hs,_c,Os,yc;function JM(){let n=kr(xt.seed);for(Fi.push({x:150,z:-120,r:70,depth:16,rim:6});Fi.length<xt.craters;){let t=(n()-.5)*(un-260),e=(n()-.5)*(un-260);if(Math.hypot(t,e)<130)continue;let i=10+Math.pow(n(),2.2)*85;Fi.push({x:t,z:e,r:i,depth:i*(.18+n()*.12),rim:i*(.05+n()*.06)})}}var KM=0;function Tp(n,t){let e=wu(Bo,n*.0016,t*.0016,5)*xt.hills,i=1-Math.abs(vc(n*.0042,t*.0042));e+=i*i*i*xt.ridges,e+=wu(wp,n*.025,t*.025,3)*xt.detail;for(let s of Fi){let r=n-s.x,o=t-s.z,a=r*r+o*o;if(a>s.r*s.r*4)continue;let c=Math.sqrt(a)/s.r;c<1&&(e-=s.depth*(1-c*c)),e+=s.rim*Math.exp(-(((c-1)/.28)**2))}return e}var Ap=0;function jM(n,t){let e=Tp(n,t)-Ap,i=Math.hypot(n,t);e=ge(KM+wp(n*.02,t*.02)*.6,e,mn(45,150,i));let s=Math.max(Math.abs(n),Math.abs(t)),r=Ht-200;if(s>r){let o=(s-r)/200;e+=o*o*160*(.65+.35*Bo(n*.01,t*.01))}return e}function Et(n,t){let e=ti((n+Ht)/Ru,0,us-.001),i=ti((t+Ht)/Ru,0,us-.001),s=Math.floor(e),r=Math.floor(i),o=e-s,a=i-r,c=fi[r*di+s],l=fi[r*di+s+1],h=fi[(r+1)*di+s],u=fi[(r+1)*di+s+1];return o+a<1?c+(l-c)*o+(h-c)*a:u+(h-u)*(1-o)+(l-u)*(1-a)}function ks(n,t,e=2){let i=Et(n,t);return Math.max(Math.abs(Et(n+e,t)-i),Math.abs(Et(n-e,t)-i),Math.abs(Et(n,t+e)-i),Math.abs(Et(n,t-e)-i))/e}function Mc(n,t,e=60){let i=0;for(let s=.2;s<=e;s+=.25){let r=n.x+t.x*s,o=n.y+t.y*s,a=n.z+t.z*s;if(o<Et(r,a)){let c=i,l=s;for(let h=0;h<8;h++){let u=(c+l)/2;n.y+t.y*u<Et(n.x+t.x*u,n.z+t.z*u)?l=u:c=u}return{dist:l,point:new T(n.x+t.x*l,n.y+t.y*l,n.z+t.z*l)}}i=s}return null}function Rp(n){JM(),Ap=Tp(0,0),fi=new Float32Array(di*di),Os=new Yn(un,un,us,us),Os.rotateX(-Math.PI/2);let t=Os.attributes.position;for(let i=0;i<t.count;i++){let s=jM(t.getX(i),t.getZ(i));t.setY(i,s),fi[i]=s}hs=new Float32Array(t.count*3);let e=new It;for(let i=0;i<t.count;i++){let s=t.getX(i),r=t.getZ(i),o=fi[i],a=i%di,c=i/di|0,l=fi[c*di+Math.min(a+1,us)]-o,h=fi[Math.min(c+1,us)*di+a]-o,u=ti(Math.hypot(l,h)/Ru*1.4,0,1),d=Bo(s*.012,r*.012)*.5+.5,p=vc(s*.08,r*.08)*.5+.5,x=xt.ground.a,y=xt.ground.b,g=xt.ground.steep,m=xt.ground.low,_=ge(x[0],y[0],d),M=ge(x[1],y[1],d),v=ge(x[2],y[2],d);_*=.9+p*.18,M*=.9+p*.16,v*=.9+p*.14,_=ge(_,g[0],u),M=ge(M,g[1],u),v=ge(v,g[2],u);let I=mn(-4,-16,o);if(_=ge(_,m[0],I*.6),M=ge(M,m[1],I*.6),v=ge(v,m[2],I*.6),xt.id==="europa"){let A=Math.abs(vc(s*.006,r*.006));if(A<.05){let C=1-A/.05;_=ge(_,.55,C*.7),M=ge(M,.32,C*.7),v=ge(v,.24,C*.7)}}e.setRGB(_,M,v,Ie),hs[i*3]=e.r,hs[i*3+1]=e.g,hs[i*3+2]=e.b}return _c=new ze(hs.slice(),3),Os.setAttribute("color",_c),Os.computeVertexNormals(),yc=new bt(Os,new Dt({vertexColors:!0,roughness:.96,metalness:0,flatShading:!0})),yc.receiveShadow=!0,n.add(yc),QM(n),yc}function QM(n){let t=kr(99),e=new hi(1,0),i=e.attributes.position;for(let p=0;p<i.count;p++){let x=.75+t()*.5;i.setXYZ(p,i.getX(p)*x,i.getY(p)*x*.8,i.getZ(p)*x)}e.computeVertexNormals();let s=2600,r=new Pr(e,new Dt({color:xt.rock,roughness:xt.id==="europa"?.3:.95,flatShading:!0}),s);r.castShadow=!0,r.receiveShadow=!0;let o=new xe,a=new hn,c=new T,l=new T,h=new Mn,u=new It,d=0;for(;d<s;){let p=(t()-.5)*(un-120),x=(t()-.5)*(un-120);if(Math.hypot(p,x)<22||Bo(p*.01,x*.01)<-.1&&t()<.7)continue;let m=t()<.06?1.8+t()*2.5:.2+Math.pow(t(),2)*1.2;c.set(m*(.8+t()*.6),m*(.6+t()*.5),m*(.8+t()*.6)),h.set(t()*.5,t()*Math.PI*2,t()*.5),a.setFromEuler(h),l.set(p,Et(p,x)+c.y*.25,x),o.compose(l,a,c),r.setMatrixAt(d,o),u.setHSL(xt.rockHSL[0]+t()*.02,xt.rockHSL[1]+t()*.2,xt.rockHSL[2]+t()*.14),r.setColorAt(d,u),m>1&&f.colliders.add({x:p,z:x,r:Math.max(c.x,c.z)*.85,kind:"rock"}),d++}n.add(r),xt.id==="kepler"&&n1(n,t)}var t1=new It().setRGB(.3,.46,.2,Ie),e1=new It().setRGB(.46,.5,.26,Ie),Au=new It().setRGB(.2,.38,.52,Ie);function Cu(n,t){let e=Os.attributes.position,i=_c.array,s=60+t*520;for(let r=0;r<e.count;r++){let o=e.getX(r),a=e.getZ(r),c=fi[r],l=0;for(let p of n){let x=Math.hypot(o-p.x,a-p.z);l=Math.max(l,mn(s,s*.55,x))}let h=hs[r*3],u=hs[r*3+1],d=hs[r*3+2];if(l>0){let p=vc(o*.03,a*.03)*.5+.5,x=l*ti(p*1.4-.1,0,1)*ti(t*1.5,0,1),y=p>.6?t1:e1;if(h=ge(h,y.r,x),u=ge(u,y.g,x),d=ge(d,y.b,x),c<-9&&t>.5){let g=l*mn(-9,-13,c)*mn(.5,1,t);h=ge(h,Au.r,g),u=ge(u,Au.g,g),d=ge(d,Au.b,g)}}i[r*3]=h,i[r*3+1]=u,i[r*3+2]=d}_c.needsUpdate=!0}function Cp(n=350){let t=document.createElement("canvas");t.width=t.height=n;let e=t.getContext("2d"),i=e.createImageData(n,n);for(let s=0;s<n;s++)for(let r=0;r<n;r++){let o=(r/n-.5)*un,a=(s/n-.5)*un,c=Et(o,a),l=Et(o+4,a+4)-c,h=ti(.55+c*.006-l*.08,.15,1),u=(s*n+r)*4,d=xt.ground.b;i.data[u]=255*d[0]*h,i.data[u+1]=255*d[1]*h,i.data[u+2]=255*d[2]*h,i.data[u+3]=255}return e.putImageData(i,0,0),t}var Iu=new Dt({color:8010400,emissive:4259776,emissiveIntensity:.1,roughness:.6,flatShading:!0});function n1(n,t){let e=new oe(.25,.45,1,6);e.translate(0,.5,0);let i=new he(1,8,5,0,Math.PI*2,0,Math.PI/2),s=900,r=new Pr(e,new Dt({color:14209208,roughness:.8,flatShading:!0}),s),o=new Pr(i,Iu,s);r.castShadow=o.castShadow=!0;let a=new xe,c=new hn,l=new T,h=new T,u=new It,d=0;for(;d<s;){let p=(t()-.5)*(un-300),x=(t()-.5)*(un-300);if(Math.hypot(p,x)<50||Bo(p*.008,x*.008)<.05||ks(p,x,2)>.5)continue;let y=3+t()*9,g=1.5+t()*3,m=Et(p,x);l.set(1+y*.05,y,1+y*.05),h.set(p,m-.2,x),c.identity(),a.compose(h,c,l),r.setMatrixAt(d,a),l.set(g,g*.5,g),h.set(p,m+y-.3,x),a.compose(h,c,l),o.setMatrixAt(d,a),u.setHSL(.72+t()*.2,.6,.4+t()*.2),o.setColorAt(d,u),f.colliders.add({x:p,z:x,r:.6,kind:"flora"}),d++}n.add(r,o)}var O={white:new Dt({color:15328474,roughness:.55,metalness:.1}),panel:new Dt({color:13222840,roughness:.6,metalness:.2}),metal:new Dt({color:8159110,roughness:.4,metalness:.7}),dark:new Dt({color:2895670,roughness:.5,metalness:.5}),orange:new Dt({color:16742954,roughness:.5,metalness:.1}),glass:new Dt({color:10474751,roughness:.05,metalness:.3,transparent:!0,opacity:.35}),window:new Dt({color:2240576,emissive:16761466,emissiveIntensity:0,roughness:.2}),solar:new Dt({color:1780826,roughness:.25,metalness:.8}),plant:new Dt({color:5221962,roughness:.8,flatShading:!0}),cyan:new Dt({color:1127236,emissive:3401471,emissiveIntensity:2}),red:new Dt({color:3342336,emissive:16722474,emissiveIntensity:3}),lamp:new Dt({color:3351057,emissive:16767392,emissiveIntensity:0}),found:new Dt({color:9143160,roughness:.9}),flame:new re({color:16756832,transparent:!0,opacity:.85,blending:Ae,depthWrite:!1})};{let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");t.fillStyle="#1d3266",t.fillRect(0,0,64,64),t.strokeStyle="#9fb4e0",t.lineWidth=1.5;for(let i=0;i<=64;i+=16)t.beginPath(),t.moveTo(i,0),t.lineTo(i,64),t.stroke(),t.beginPath(),t.moveTo(0,i),t.lineTo(64,i),t.stroke();let e=new Zn(n);e.colorSpace=Ie,e.wrapS=e.wrapT=Po,e.repeat.set(3,2),O.solar.map=e,O.solar.color.set(16777215)}function W(n,t,e=0,i=0,s=0,r){let o=new bt(n,t);return o.position.set(e,i,s),o.castShadow=!0,o.receiveShadow=!0,r&&r.add(o),o}var Gt=(n,t,e)=>new ne(n,t,e),Pt=(n,t,e,i=16)=>new oe(n,t,e,i),Ec;function Nn(){if(Ec)return Ec;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.6)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Ec=new Zn(n),Ec}function ie(n,t,e,i=0,s=0,r=0){let o=new as(new Ni({map:Nn(),color:n,transparent:!0,blending:Ae,depthWrite:!1}));return o.scale.set(t,t,1),o.position.set(i,s,r),e&&e.add(o),o}function gn(n,t,e=!1){let i=W(e?Gt(t*2,4,t*2):Pt(t,t*1.05,4,20),O.found,0,-1.8,0,n);i.castShadow=!1,i.userData.found=!0}var Br={solar(n,t){gn(n,2.2,!0),W(Pt(.18,.25,2.2),O.metal,0,1.1,0,n);let e=new jt;e.position.y=2.3,n.add(e);let i=W(Gt(4.2,.12,2.8),O.solar,0,0,0,e);W(Gt(4.4,.08,.1),O.metal,0,-.05,1.42,e),W(Gt(4.4,.08,.1),O.metal,0,-.05,-1.42,e),t.pivot=e,t.panel=i},oxygen(n,t){gn(n,3),W(Pt(1,1,3.6),O.white,-1.3,1.8,0,n),W(new he(1,16,8,0,Math.PI*2,0,Math.PI/2),O.white,-1.3,3.6,0,n),W(Pt(1,1,3.6),O.white,1.3,1.8,0,n),W(new he(1,16,8,0,Math.PI*2,0,Math.PI/2),O.white,1.3,3.6,0,n),W(Pt(1.02,1.02,.3),O.orange,-1.3,2.4,0,n),W(Pt(1.02,1.02,.3),O.orange,1.3,2.4,0,n),W(Gt(1.4,1.6,1.8),O.panel,0,.8,1,n),W(Pt(.12,.12,2.6),O.metal,0,3.2,0,n).rotation.z=Math.PI/2;let e=new jt;e.position.set(0,1.75,1.95),n.add(e);for(let i=0;i<4;i++){let s=W(Gt(.15,.7,.05),O.dark,0,0,0,e);s.rotation.z=i*Math.PI/2,s.position.set(Math.sin(i*Math.PI/2)*.3,Math.cos(i*Math.PI/2)*.3,0),s.rotation.z=-i*Math.PI/2}t.fan=e,t.light=ie(6741503,1.2,n,0,1.75,2)},habitat(n,t){gn(n,6.2),W(Pt(6,6,1.2,28),O.panel,0,.6,0,n);let e=W(new he(5.8,28,12,0,Math.PI*2,0,Math.PI/2),O.white,0,1.2,0,n);e.scale.y=.85;let i=W(new oe(5.72,5.84,.7,28,1,!0),O.window,0,2,0,n);W(Pt(.1,.1,3),O.metal,0,7.4,0,n),t.tip=ie(16728128,1.2,n,0,8.9,0),W(Gt(2.2,2.6,2.8),O.white,0,1.3,6.4,n),W(Gt(1.2,2,.1),O.dark,0,1.1,7.82,n),W(Gt(2.3,.3,2.9),O.orange,0,2.7,6.4,n),t.windows=[i]},extractor(n,t){gn(n,2.6,!0),W(Gt(4,.6,4),O.panel,0,.3,0,n);for(let[i,s]of[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4]])W(Pt(.12,.15,6),O.metal,i*.7,3.3,s*.7,n).rotation.set(s*.08,0,-i*.08);W(Gt(1.6,.4,1.6),O.orange,0,6.2,0,n);let e=W(Pt(.3,.3,4.5),O.metal,0,3,0,n);W(Pt(.9,.9,1.6),O.white,1.7,1.4,1.2,n),t.drill=e,t.light=ie(10476799,1.2,n,1.7,2.5,1.2)},greenhouse(n,t){gn(n,5,!0),W(Gt(10,.5,6),O.panel,0,.25,0,n);let e=W(new oe(3,3,10,20,1,!1,0,Math.PI),O.glass,0,.5,0,n);e.rotation.set(0,0,Math.PI/2),e.castShadow=!1;for(let i=0;i<5;i++)W(new Ye(3,.08,6,20,Math.PI),O.white,-4.5+i*2.25,.5,0,n).rotation.y=Math.PI/2;for(let i=0;i<14;i++){let s=-4.2+i%7*1.4,r=i<7?-1.2:1.2,o=W(new rn(.45,1.2+i%3*.3,6),O.plant,s,1.2,r,n);o.castShadow=!1}W(Gt(9.6,.3,.5),O.dark,0,.7,-1.2,n),W(Gt(9.6,.3,.5),O.dark,0,.7,1.2,n),t.light=ie(16737996,4,n,0,2.5,0)},fabricator(n,t){gn(n,4,!0),W(Gt(7,3.6,5),O.panel,0,1.8,0,n),W(Gt(7.1,.4,5.1),O.orange,0,3.4,0,n),W(Gt(3,2.6,.1),O.dark,0,1.3,2.52,n);let e=new jt;e.position.set(2.2,3.6,0),n.add(e),W(Pt(.35,.45,.6),O.metal,0,.3,0,e);let i=W(Gt(.3,2.2,.3),O.orange,0,1.4,0,e),s=W(Gt(.25,1.6,.25),O.metal,0,2.4,.6,e);s.rotation.x=.9,t.arm=e,t.spark=ie(16764006,1.2,n,2.2,5.7,1.2),W(Gt(1.2,1.2,1.2),O.dark,-2.4,.6,3.2,n),W(Gt(1,1,1),O.dark,-1.1,.5,3.1,n)},turret(n,t){gn(n,1.8),W(Pt(1.4,1.8,1.2,12),O.metal,0,.6,0,n),W(Pt(.5,.7,1.2,10),O.dark,0,1.8,0,n);let e=new jt;e.position.y=2.7,n.add(e),W(Gt(1.6,1,1.8),O.white,0,0,0,e),W(Gt(1.65,.2,1.85),O.orange,0,.35,0,e),W(Pt(.12,.12,2.2,8),O.dark,-.4,0,-1.6,e).rotation.x=Math.PI/2,W(Pt(.12,.12,2.2,8),O.dark,.4,0,-1.6,e).rotation.x=Math.PI/2,t.eye=ie(3401471,.9,e,0,.1,-.95),t.head=e},reactor(n,t){gn(n,5.2),W(Pt(5,5.2,1.4,24),O.panel,0,.7,0,n);let e=W(new he(2,20,14),O.cyan,0,4.2,0,n);e.castShadow=!1;let i=W(new Ye(3.2,.35,10,32),O.white,0,4.2,0,n),s=W(new Ye(3.2,.35,10,32),O.white,0,4.2,0,n);s.rotation.x=Math.PI/2;for(let r=0;r<4;r++){let o=r*Math.PI/2;W(Gt(.6,3,.6),O.metal,Math.cos(o)*3.6,2.2,Math.sin(o)*3.6,n)}t.core=e,t.r1=i,t.r2=s,t.light=ie(3401471,9,n,0,4.2,0)},beacon(n,t){let e=W(Pt(7,7.3,.6,8),O.found,0,0,0,n);W(Pt(7.3,7.6,4,8),O.found,0,-2.3,0,n).castShadow=!1,W(new Jn(4.2,4.8,32),O.orange,0,.32,0,n).rotation.x=-Math.PI/2,W(new Jn(1.5,2,4),O.white,0,.32,0,n).rotation.x=-Math.PI/2,t.lights=[];for(let i=0;i<8;i++){let s=i*Math.PI/4+Math.PI/8;t.lights.push(ie(16755251,1.2,n,Math.cos(s)*6.6,.5,Math.sin(s)*6.6))}W(Pt(.18,.3,9,8),O.metal,8.6,4.2,0,n),W(Gt(1.6,.1,1.2),O.white,8.6,8.7,0,n).rotation.z=.4,t.tip=ie(16724016,2,n,8.6,9.2,0),e.castShadow=!1},lamp(n,t){W(Pt(.4,.5,.4,8),O.found,0,0,0,n),W(Pt(.08,.1,4.2,6),O.metal,0,2.1,0,n),W(Gt(.6,.2,.6),O.dark,0,4.3,0,n);let e=W(new he(.2,8,6),O.lamp,0,4.15,0,n);e.castShadow=!1,t.glow=ie(16767392,5,n,0,4.1,0)},terraformer(n,t){gn(n,7),W(Pt(7,7.5,2,6),O.panel,0,1,0,n),W(Pt(2.5,4.5,26,6),O.white,0,15,0,n);for(let i=0;i<3;i++)W(Pt(4.6-i*.7,4.6-i*.7,.8,6),O.orange,0,6+i*8,0,n);t.rings=[];for(let i=0;i<3;i++){let s=W(new Ye(6-i*1.2,.25,8,40),O.cyan,0,10+i*8,0,n);s.castShadow=!1,t.rings.push(s)}for(let i=0;i<6;i++){let s=i*Math.PI/3,r=W(Gt(1.2,10,1.2),O.metal,Math.cos(s)*6,5,Math.sin(s)*6,n);r.rotation.y=-s}let e=W(new oe(.6,1.4,400,12,1,!0),new re({color:6743807,transparent:!0,opacity:0,blending:Ae,depthWrite:!1,side:sn}),0,228,0,n);e.castShadow=!1,e.receiveShadow=!1,t.beam=e,t.top=ie(6743807,10,n,0,28,0)}};function Np(){let n=new jt,t=W(Pt(1.6,3.2,4.2,16),O.white,0,3.6,0,n);W(Pt(1.6,1.6,.5,16),O.orange,0,5.9,0,n),W(new he(1.6,16,8,0,Math.PI*2,0,Math.PI/2),O.white,0,6.15,0,n),W(Pt(3.25,3.25,.4,16),O.dark,0,1.4,0,n);for(let c=0;c<4;c++){let l=c*Math.PI/2+Math.PI/4;W(Pt(.12,.12,3.4,6),O.metal,Math.cos(l)*3.3,.9,Math.sin(l)*3.3,n).rotation.set(Math.sin(l)*.45,0,-Math.cos(l)*.45),W(Pt(.6,.6,.15,10),O.metal,Math.cos(l)*4,.05,Math.sin(l)*4,n)}W(Pt(.9,1.3,1,12),O.dark,0,.9,0,n);let e=W(Gt(1.2,.8,.2),O.window,0,4.4,2.5,n);e.rotation.x=-.35;let i=document.createElement("canvas");i.width=256,i.height=64;let s=i.getContext("2d");s.fillStyle="#e9e4da",s.fillRect(0,0,256,64),s.fillStyle="#d4581c",s.font="bold 40px sans-serif",s.textAlign="center",s.fillText("\u65B9\u821F\u4E00\u53F7  ARK-1",128,46);let r=new Zn(i);r.colorSpace=Ie;let o=new bt(new Yn(3.2,.8),new Dt({map:r,roughness:.6}));o.position.set(0,3,-2.75),o.rotation.y=Math.PI,o.rotation.x=.35,n.add(o);let a=ie(6750105,1.6,n,0,7.9,0);return W(Pt(.05,.05,1.4,4),O.metal,0,7.2,0,n),{group:n,beacon:a,window:e}}function Fp(){let n=new jt;W(Pt(1.2,2.4,5,12),O.white,0,3.5,0,n),W(new rn(1.2,2.2,12),O.white,0,7.1,0,n),W(Pt(2.45,2.45,.4,12),O.orange,0,2.4,0,n);for(let i=0;i<3;i++){let s=i*Math.PI*2/3,r=W(Gt(.2,2.4,1.6),O.panel,Math.cos(s)*2.3,1.6,Math.sin(s)*2.3,n);r.rotation.y=-s}let t=new bt(new rn(1.1,5,12,1,!0),O.flame);t.rotation.x=Math.PI,t.position.y=-1.6,n.add(t);let e=ie(16752704,9,n,0,-.5,0);return{group:n,flame:t,flameGlow:e}}var Ip=[16751162,3850495,8257418,16740277,16769354].map(n=>new Dt({color:1118481,emissive:n,emissiveIntensity:.6,roughness:.1,metalness:.6})),Pp=[15525596,14278116,15259332].map(n=>new Dt({color:n,roughness:.7}));function Op(n){let t=new jt,e=Pp[n%Pp.length],i=Ip[n%Ip.length],s=(x,y,g,m,_,M=t)=>{let v=new bt(x,y);return v.position.set(g,m,_),v.castShadow=!0,M.add(v),v},r=new Ds([[0,0],[.2,0],[.24,.12],[.27,.42],[.25,.55],[.12,.62],[0,.62]].map(([x,y])=>new ot(x,y)),12),o=s(r,e,0,.72,0);o.scale.z=.8,s(new Ye(.2,.04,6,16),O.orange,0,.77,0).rotation.x=Math.PI/2,s(new oe(.16,.18,.06,12),O.dark,0,1.36,0);let a=s(new he(.21,16,12),e,0,1.58,0),c=s(new he(.19,16,10,Math.PI*.12,Math.PI*.76,Math.PI*.28,Math.PI*.4),i,0,1.58,.035);s(new ne(.02,.12,.02),O.metal,.12,1.82,-.05).rotation.z=-.3,s(new ne(.36,.42,.18),O.panel,0,1.08,-.24),s(new ne(.3,.06,.19),O.orange,0,1.25,-.24),ie(9306032,.25,t,.12,.96,-.34);let l=(x,y,g,m,_)=>{let M=new jt;M.position.set(x,y,0),t.add(M);let v=s(new ac(m,g,4,8),e,0,-g/2-m,0,M);return s(new oe(m*1.15,m*1.15,.05,8),_?O.orange:O.dark,0,-g*.45,0,M),_?s(new ne(m*2.4,.1,m*3.4),O.dark,0,-g-m*1.6,.04,M):s(new he(m*1.2,8,6),O.dark,0,-g-m*1.6,0,M),M},h=l(-.11,.74,.5,.075,!0),u=l(.11,.74,.5,.075,!0),d=l(-.33,1.27,.42,.06,!1),p=l(.33,1.27,.42,.06,!1);return d.rotation.z=-.12,p.rotation.z=.12,{group:t,legL:h,legR:u,armL:d,armR:p,body:o,head:a,visor:c}}var Pu=new Dt({color:xt.enemy[0],roughness:.3,metalness:.6,flatShading:!0,emissive:1049856}),i1=new Dt({color:xt.enemy[1],emissive:xt.enemy[2],emissiveIntensity:.8,roughness:.2,flatShading:!0}),Lp=new re({color:16764992});function kp(n=1){let t=new jt,e=new jt;t.add(e),W(new cs(.9,0),Pu,0,1,0,e).scale.set(1,.6,1.3);for(let r=0;r<5;r++){let o=W(new Lr(.35,0),i1,(Math.random()-.5)*.8,1.5+Math.random()*.3,(Math.random()-.5)*1.2,e);o.scale.y=1.6+Math.random(),o.rotation.set(Math.random()-.5,0,Math.random()-.5)}W(new he(.1,6,4),Lp,-.25,1.1,1.1,e),W(new he(.1,6,4),Lp,.25,1.1,1.1,e);let s=[];for(let r=0;r<6;r++){let o=r<3?-1:1,a=r%3-1,c=new jt;c.position.set(o*.6,1,a*.6),e.add(c);let l=W(Pt(.07,.09,1.1,5),Pu,o*.45,.25,0,c);l.rotation.z=o*-1.1;let h=W(Pt(.05,.07,1.2,5),Pu,o*.95,-.35,0,c);h.rotation.z=o*.35,c.userData.phase=r%2*Math.PI+a*.5,c.userData.side=o,s.push(c)}return t.scale.setScalar(n),{group:t,legs:s,inner:e}}function s1(n,t,e){let i=document.createElement("canvas");i.width=128,i.height=256;let s=i.getContext("2d");s.fillStyle="#000",s.fillRect(0,0,128,256);let r=e,o=()=>(r=(r*9301+49297)%233280,r/233280),a=128/n,c=256/t;for(let h=0;h<n;h++)for(let u=0;u<t;u++)o()<.65&&(s.fillStyle=o()<.8?"#ffd9a0":"#a0d8ff",s.fillRect(h*a+a*.2,u*c+c*.25,a*.6,c*.5));let l=new Zn(i);return l.colorSpace=Ie,l}var Lu=[];function Dp(n){let t=new Dt({color:14210252,roughness:.5,metalness:.2,emissive:16777215,emissiveMap:s1(6,14,n),emissiveIntensity:.2});return Lu.push(t),t}var Up=[Dp(7),Dp(31)];Object.assign(Br,{drones(n,t){gn(n,3.8,!0),W(Gt(7.4,.5,7.4),O.panel,0,.25,0,n);for(let[s,r]of[[-1.9,-1.9],[1.9,-1.9],[-1.9,1.9],[1.9,1.9]])W(Pt(1.1,1.1,.1,16),O.dark,s,.55,r,n),W(new Jn(.75,.9,20),O.orange,s,.62,r,n).rotation.x=-Math.PI/2;W(Gt(1.2,4,1.2),O.white,3,2.2,3,n),W(Gt(1.25,.3,1.25),O.orange,3,3.6,3,n);let e=new jt;e.position.set(3,4.6,3),n.add(e);let i=W(new he(.9,12,6,0,Math.PI*2,0,Math.PI/3),O.white,0,0,0,e);i.rotation.x=Math.PI*.6,W(Pt(.05,.05,.8,4),O.metal,0,.1,.2,e).rotation.x=1.1,t.dish=e,t.light=ie(8382207,1.4,n,3,5.4,3)},apartment(n,t){gn(n,4.4,!0),W(Gt(8,1,8),O.panel,0,.5,0,n),W(Gt(5,18,5),Up[0],-1.2,10,-1.2,n),W(Gt(4,12,4),Up[1],2,7,2,n),W(Gt(5.2,.5,5.2),O.orange,-1.2,19.2,-1.2,n),W(Gt(4.2,.5,4.2),O.orange,2,13.2,2,n),W(Pt(.1,.1,4,6),O.metal,-1.2,21.4,-1.2,n),t.tip=ie(16728128,1.6,n,-1.2,23.5,-1.2),W(new he(1.6,16,8,0,Math.PI*2,0,Math.PI/2),O.glass,2,13.4,2,n).castShadow=!1},vfarm(n,t){gn(n,4),W(Pt(3.8,4,1,16),O.panel,0,.5,0,n);let e=W(Pt(3.2,3.2,14,16),O.glass,0,8,0,n);e.castShadow=!1;for(let i=0;i<6;i++){W(Pt(3,3,.25,16),O.white,0,2+i*2.3,0,n);for(let s=0;s<7;s++){let r=s/7*Math.PI*2+i,o=W(new rn(.4,.9,5),O.plant,Math.cos(r)*2.2,2.6+i*2.3,Math.sin(r)*2.2,n);o.castShadow=!1}}W(new he(3.2,16,8,0,Math.PI*2,0,Math.PI/2),O.glass,0,15,0,n).castShadow=!1,t.light=ie(16737996,9,n,0,8,0)},lifehub(n,t){gn(n,5.5),W(Pt(5.5,5.8,1.2,20),O.panel,0,.6,0,n);let e=W(new he(4.5,20,12,0,Math.PI*2,0,Math.PI/2),O.white,0,1.2,0,n);W(new Ye(4.6,.3,8,32),O.orange,0,1.6,0,n).rotation.x=Math.PI/2;for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4;W(Pt(.9,.9,5,12),O.white,Math.cos(r)*5.2,2.5,Math.sin(r)*5.2,n),W(Pt(.95,.95,.4,12),O.cyan,Math.cos(r)*5.2,4.2,Math.sin(r)*5.2,n)}let i=new jt;i.position.y=6,n.add(i);for(let s=0;s<3;s++){let r=W(Gt(4,.1,.6),O.dark,0,0,0,i);r.rotation.y=s*Math.PI/3}t.fan=i,t.light=ie(6741503,5,n,0,6,0)},launch(n,t){gn(n,9,!0),W(Gt(18,1.2,18),O.found,0,.6,0,n),W(new Jn(5,6,32),O.orange,0,1.25,0,n).rotation.x=-Math.PI/2;for(let[s,r]of[[6,-1.5],[6,1.5],[9,-1.5],[9,1.5]])W(Gt(.4,34,.4),O.metal,s,18,r,n);for(let s=0;s<8;s++)W(Gt(3.4,.25,3.4),O.metal,7.5,4+s*4,0,n);W(Gt(4,.5,.8),O.orange,4.2,26,0,n);let e=new jt;e.position.y=1.2,n.add(e),W(Pt(2.4,2.8,24,20),O.white,0,13,0,e),W(new rn(2.4,7,20),O.white,0,28.5,0,e),W(Pt(2.45,2.45,1.2,20),O.orange,0,20,0,e),W(Pt(2.45,2.45,.6,20),O.dark,0,8,0,e);for(let s=0;s<4;s++){let r=s*Math.PI/2,o=W(Gt(.4,6,3),O.panel,Math.cos(r)*2.8,3.5,Math.sin(r)*2.8,e);o.rotation.y=-r}for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4;W(Pt(.8,1.2,2,10),O.dark,Math.cos(r)*1.2,.6,Math.sin(r)*1.2,e)}let i=new bt(new rn(3,16,16,1,!0),O.flame);i.rotation.x=Math.PI,i.position.y=-8,i.visible=!1,e.add(i),t.ship=e,t.flame=i,t.tip=ie(16777215,3,e,0,32.5,0)},monument(n,t){gn(n,6),W(Pt(6,6.5,1.5,8),O.panel,0,.75,0,n),W(Pt(4.5,5,1,8),O.white,0,2,0,n);let e=W(new oe(.6,1.8,30,4),O.white,0,17,0,n);e.rotation.y=Math.PI/4,t.rings=[];let i=[new Dt({color:3346688,emissive:16742954,emissiveIntensity:2}),new Dt({color:8755,emissive:6743807,emissiveIntensity:2}),new Dt({color:1127168,emissive:10551104,emissiveIntensity:2})];for(let s=0;s<3;s++){let r=W(new Ye(4-s*.6,.18,8,40),i[s],0,14+s*5,0,n);r.castShadow=!1,t.rings.push(r)}t.top=ie(16777215,8,n,0,33,0)}});function zp(){let n=new jt,t=W(new he(.42,14,8),O.white,0,0,0,n);t.scale.y=.55,W(Pt(.44,.44,.08,14),O.orange,0,0,0,n);let e=[];for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4,o=Math.cos(r)*.7,a=Math.sin(r)*.7;W(Gt(.6,.05,.08),O.dark,o*.55,0,a*.55,n).rotation.y=-r;let c=W(Pt(.28,.28,.02,10),new re({color:2236962,transparent:!0,opacity:.45}),o,.08,a,n);e.push(c)}let i=ie(8382207,.9,n,0,-.2,0);return{group:n,rotors:e,eye:i}}var r1=540,Vo,Hr,Fn,Vr,Du,Go,Uu,zs,Wo=(n,t,e)=>new It().setRGB(n,t,e,Ie),ds=xt.sky,fs=n=>Wo(n[0],n[1],n[2]),pi={dayTop:fs(ds.dayTop),dayHor:fs(ds.dayHor),setTop:fs(ds.setTop),setHor:fs(ds.setHor),nightTop:fs(ds.nightTop),nightHor:fs(ds.nightHor),earthTop:Wo(.22,.44,.82),earthHor:Wo(.68,.8,.92),stormHor:fs(ds.storm),halo:fs(ds.halo)},mi={},o1=Wo(.36,.42,.62),a1=Wo(.75,.65,.55),Ho=new It,Bp=new It,ei=new T;function Hp(n){zs=new Ln({uniforms:{uTop:{value:new It},uHor:{value:new It},uSunDir:{value:new T(0,1,0)},uSunCol:{value:new It(1,.95,.85)},uHalo:{value:new It},uSunVis:{value:1}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`
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
      }`,side:ln,depthWrite:!1}),Vo=new bt(new he(4e3,32,16),zs),Vo.frustumCulled=!1,Vo.renderOrder=-10,n.add(Vo);let t=new we,e=[],i=[];for(let o=0;o<2600;o++){let a=Math.random()*2-1,c=Math.random()*Math.PI*2,l=Math.sqrt(1-a*a);if(a<-.05)continue;e.push(l*Math.cos(c)*3500,a*3500,l*Math.sin(c)*3500);let h=.5+Math.random()*.5,u=Math.random();i.push(h*(u>.8?1:.85),h*.9,h*(u<.2?1:.95))}e.push(-1800,1500,-2400),i.push(.5,.75,1.4),t.setAttribute("position",new se(e,3)),t.setAttribute("color",new se(i,3)),Hr=new Dn(t,new An({size:1.6,sizeAttenuation:!1,vertexColors:!0,transparent:!0,depthWrite:!1,fog:!1})),Hr.frustumCulled=!1,Hr.renderOrder=-9,n.add(Hr);let s=new Dt({color:9076080,roughness:1,fog:!1,flatShading:!0});if(Go=new bt(new cs(60,1),s),Go.scale.set(1.3,.9,1),Uu=new bt(new cs(24,1),s),xt.extras==="moons"&&n.add(Go,Uu),xt.extras==="jupiter"){let o=document.createElement("canvas");o.width=512,o.height=256;let a=o.getContext("2d"),c=["#e8d8c0","#c89a70","#f0e6d4","#b07850","#e0c8a8","#9a6a48","#efe2cc","#c8a07a","#e6d6bc"];for(let p=0;p<256;p++)a.fillStyle=c[Math.floor(p/256*c.length*2+Math.sin(p*.3)*.6)%c.length],a.fillRect(0,p,512,1);a.globalAlpha=.25;for(let p=0;p<400;p++)a.fillStyle=c[p%c.length],a.fillRect(Math.random()*512,Math.random()*256,30+Math.random()*80,2);a.globalAlpha=1,a.fillStyle="#b8583a",a.beginPath(),a.ellipse(330,165,34,16,0,0,Math.PI*2),a.fill();let l=new Zn(o);l.colorSpace=Ie;let h=new bt(new he(900,48,32),new re({map:l,fog:!1}));h.rotation.z=.06;let u=new bt(new he(905,48,32,Math.PI*.55,Math.PI),new re({color:0,transparent:!0,opacity:.55,fog:!1}));h.add(u);let d=new bt(new cs(30,2),new re({color:15257712,fog:!1}));n.add(h,d),mi={jup:h,io:d}}if(xt.extras==="twinsuns"){let o=new as(new Ni({map:Nn(),color:16751200,transparent:!0,blending:Ae,depthWrite:!1,fog:!1}));o.scale.set(500,500,1);let a=new bt(new Jn(700,1100,64),new re({color:14207231,transparent:!0,opacity:.35,side:sn,fog:!1,depthWrite:!1})),c=new bt(new he(420,32,24),new re({color:9075408,fog:!1}));c.add(a),a.rotation.x=1.2,n.add(o,c),mi={s2:o,gas:c}}Fn=new ui(16773341,3),Fn.castShadow=!0,Fn.shadow.mapSize.set(2048,2048);let r=Fn.shadow.camera;r.left=-70,r.right=70,r.top=70,r.bottom=-70,r.near=1,r.far=400,Fn.shadow.bias=-4e-4,Fn.shadow.normalBias=.6,n.add(Fn,Fn.target),Vr=new ls(16765616,5909530,1),Du=new hc(4213360,.3),n.add(Vr,Du),n.fog=new tc(14196848,120,900)}function bc(n,t){let e=f.time,i=e.t;e.t+=n/r1*(e.elevation<0?1.5:1),e.t>=1&&(e.t-=1),i<.25&&e.t>=.25&&(e.day++,e.dawn=!0);let s=(e.t-.25)*Math.PI*2;ei.set(Math.cos(s),Math.sin(s),.35).normalize();let r=ei.y;e.elevation=r,e.night=mn(.05,-.18,r);let o=mn(0,1,f.terraform),a=f.storm,c=mn(-.05,.35,r),l=1-Math.abs(ti((r-.05)/.3,-1,1));Ho.copy(pi.dayTop).lerp(pi.earthTop,o),Bp.copy(pi.dayHor).lerp(pi.earthHor,o);let h=zs.uniforms.uTop.value,u=zs.uniforms.uHor.value;h.copy(pi.nightTop).lerp(pi.setTop,mn(-.25,0,r)).lerp(Ho,c),u.copy(pi.nightHor).lerp(pi.setHor,mn(-.25,0,r)).lerp(Bp,c),a>0&&(Ho.copy(pi.stormHor).multiplyScalar(.25+.75*(1-e.night)),h.lerp(Ho,a*.85),u.lerp(Ho,a)),zs.uniforms.uHalo.value.copy(pi.halo).multiplyScalar(ti(l,0,1)*(1-o*.5)*(1-a)),zs.uniforms.uSunDir.value.copy(ei),zs.uniforms.uSunVis.value=mn(-.08,.02,r)*(1-a*.85),Vo.position.copy(t),Hr.position.copy(t),Hr.material.opacity=Math.max(e.night,xt.id==="europa"?.85:0)*(1-a);let d=f.time.t*Math.PI*6,p=-f.time.t*Math.PI*2+2;if(Go.position.set(t.x+Math.cos(d)*2600,t.y+Math.sin(d)*1700+300,t.z-1300),Go.lookAt(t),Uu.position.set(t.x+Math.cos(p)*2800,t.y+Math.sin(p)*2200,t.z+1600),mi.jup){mi.jup.position.set(t.x-1800,t.y+650,t.z-2600),mi.jup.rotation.y+=4e-5;let y=f.time.t*Math.PI*8;mi.io.position.set(t.x-1800+Math.cos(y)*1400,t.y+650+Math.sin(y)*300,t.z-2600+Math.sin(y)*1400)}mi.s2&&(mi.s2.position.copy(t).addScaledVector(new T(ei.x*.8-.3,ei.y*.9-.05,ei.z+.4).normalize(),3e3),mi.s2.material.opacity=mn(-.2,.05,r)*.9,mi.gas.position.set(t.x+1600,t.y+1100,t.z+2400));let x=mn(-.04,.25,r);Fn.intensity=3*x*(1-a*.6),Fn.color.setRGB(1,ge(.7,.93,x),ge(.55,.85,x)),Fn.position.copy(t).addScaledVector(ei,200),Fn.target.position.copy(t),Vr.intensity=ge(.55,1.1,c)*(1-a*.3),Vr.color.copy(u).lerp(h,.3).lerp(o1,e.night*.85),xt.id==="europa"&&Vr.color.lerp(a1,.6),Vr.groundColor.setRGB(ge(.05,.38,c),ge(.04,.18,c),ge(.05,.1,c)),Du.intensity=ge(.8,.2,c),f.scene.fog.color.copy(u),f.scene.fog.near=ge(120,12,a),f.scene.fog.far=ge(ge(900,380,e.night),90,a),f.renderer.toneMappingExposure=ge(1,1.4,e.night)}function Nu(){let n=Math.floor(f.time.t*24.66),t=Math.floor((f.time.t*24.66-n)*60);return`${xt.name} \xB7 \u7B2C ${f.time.day} \u65E5 \xB7 ${String(n).padStart(2,"0")}:${String(t).padStart(2,"0")}`}var Gr=[],c1=new Lr(.22,0),wc=class{constructor(t,e,i,s){this.max=e,this.n=0,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.base=new Float32Array(e*4),this.grav=new Float32Array(e),this.drag=new Float32Array(e);let r=new we;this.pa=new ze(this.pos,3),this.ca=new ze(this.col,4),this.pa.setUsage(vu),this.ca.setUsage(vu),r.setAttribute("position",this.pa),r.setAttribute("color",this.ca),this.mat=new An({size:s,map:Nn(),vertexColors:!0,transparent:!0,depthWrite:!1,blending:i?Ae:li,sizeAttenuation:!0}),this.points=new Dn(r,this.mat),this.points.frustumCulled=!1,t.add(this.points)}emit(t,e,i,s,r,o,a,c,l,h,u,d=0,p=0){let x=this.n<this.max?this.n++:Math.floor(Math.random()*this.max);this.pos[x*3]=t,this.pos[x*3+1]=e,this.pos[x*3+2]=i,this.vel[x*3]=s,this.vel[x*3+1]=r,this.vel[x*3+2]=o,this.base[x*4]=a,this.base[x*4+1]=c,this.base[x*4+2]=l,this.base[x*4+3]=h,this.life[x]=u,this.maxLife[x]=u,this.grav[x]=d,this.drag[x]=p}update(t){let e=this.n;for(let i=0;i<e;i++){if(this.life[i]-=t,this.life[i]<=0){if(e--,i!==e){for(let o=0;o<3;o++)this.pos[i*3+o]=this.pos[e*3+o],this.vel[i*3+o]=this.vel[e*3+o];for(let o=0;o<4;o++)this.base[i*4+o]=this.base[e*4+o];this.life[i]=this.life[e],this.maxLife[i]=this.maxLife[e],this.grav[i]=this.grav[e],this.drag[i]=this.drag[e],i--}continue}let s=1-this.drag[i]*t;this.vel[i*3]*=s,this.vel[i*3+2]*=s,this.vel[i*3+1]=this.vel[i*3+1]*s-this.grav[i]*t,this.pos[i*3]+=this.vel[i*3]*t,this.pos[i*3+1]+=this.vel[i*3+1]*t,this.pos[i*3+2]+=this.vel[i*3+2]*t;let r=this.life[i]/this.maxLife[i];this.col[i*4]=this.base[i*4],this.col[i*4+1]=this.base[i*4+1],this.col[i*4+2]=this.base[i*4+2],this.col[i*4+3]=this.base[i*4+3]*Math.min(1,r*2.5)}this.n=e,this.points.geometry.setDrawRange(0,e),this.pa.needsUpdate=!0,this.ca.needsUpdate=!0}},Bs,Tc,Hs,Wr;function Vp(n){Bs=new wc(n,3e3,!0,.35),Tc=new wc(n,2500,!1,1.6);let t=new we,e=new Float32Array(1500*3);for(let r=0;r<e.length;r++)e[r]=(Math.random()-.5)*80;t.setAttribute("position",new ze(e,3)),Hs=new Dn(t,new An({size:.25,map:Nn(),color:16765088,transparent:!0,opacity:.5,depthWrite:!1})),Hs.frustumCulled=!1,n.add(Hs);let i=new we,s=new Float32Array(3e3*3);for(let r=0;r<s.length;r++)s[r]=(Math.random()-.5)*70;i.setAttribute("position",new ze(s,3)),Wr=new Dn(i,new An({size:.18,map:Nn(),color:12574975,transparent:!0,opacity:0,depthWrite:!1})),Wr.frustumCulled=!1,n.add(Wr)}var gt={debris(n,t,e=8,i=7,s=1){for(let r=0;r<e;r++){if(Gr.length>160){let h=Gr.shift();f.scene.remove(h.m)}let o=new bt(c1,t);o.castShadow=!0;let a=s*(.5+Math.random()*.9);o.scale.set(a,a*(1+Math.random()),a),o.position.copy(n),f.scene.add(o);let c=Math.random()*Math.PI*2,l=.4+Math.random()*.8;Gr.push({m:o,v:new T(Math.cos(c)*i*(1-l*.5),i*l,Math.sin(c)*i*(1-l*.5)),w:new T(Math.random()*10,Math.random()*10,Math.random()*10),life:3+Math.random()*2,s:a})}},spark(n,t=[1,.6,.2],e=6,i=4,s=.5){for(let r=0;r<e;r++)Bs.emit(n.x,n.y,n.z,(Math.random()-.5)*i,Math.random()*i,(Math.random()-.5)*i,t[0],t[1],t[2],1,s*(.5+Math.random()),6,1)},burst(n,t=[1,.5,.2],e=40,i=9){for(let s=0;s<e;s++){let r=Math.random()*2-1,o=Math.random()*6.283,a=Math.sqrt(1-r*r),c=i*(.4+Math.random()*.6);Bs.emit(n.x,n.y,n.z,a*Math.cos(o)*c,r*c,a*Math.sin(o)*c,t[0],t[1],t[2],1,.4+Math.random()*.6,4,2)}},dustPuff(n,t=10,e=2,i=[.72,.45,.3]){for(let s=0;s<t;s++)Tc.emit(n.x+(Math.random()-.5)*e,n.y+Math.random()*.5,n.z+(Math.random()-.5)*e,(Math.random()-.5)*3,Math.random()*1.5,(Math.random()-.5)*3,i[0],i[1],i[2],.55,1.2+Math.random(),-.2,1.5)},ring(n,t,e=60,i=[.72,.45,.3]){for(let s=0;s<e;s++){let r=s/e*6.283,o=6+Math.random()*6;Tc.emit(n.x+Math.cos(r)*t,n.y+.4,n.z+Math.sin(r)*t,Math.cos(r)*o,.5+Math.random(),Math.sin(r)*o,i[0],i[1],i[2],.6,1.5+Math.random(),-.1,1.2)}},trail(n,t,e=1){Bs.emit(n.x,n.y,n.z,(Math.random()-.5)*.4,(Math.random()-.5)*.4,(Math.random()-.5)*.4,t[0]*e,t[1]*e,t[2]*e,1,.18,0,0)},flame(n,t=1){Bs.emit(n.x+(Math.random()-.5)*.6,n.y,n.z+(Math.random()-.5)*.6,(Math.random()-.5)*2,-6*t-Math.random()*6,(Math.random()-.5)*2,1,.55,.2,1,.35,0,0)},rise(n,t,e=6){Bs.emit(n.x+(Math.random()-.5)*e,n.y,n.z+(Math.random()-.5)*e,0,6+Math.random()*6,0,t[0],t[1],t[2],1,2.5,-.5,0)}},Sc=0;function Ac(n,t){Bs.update(n),Tc.update(n);for(let o=Gr.length-1;o>=0;o--){let a=Gr[o];a.life-=n,a.v.y-=9*n,a.m.position.addScaledVector(a.v,n),a.m.rotation.x+=a.w.x*n,a.m.rotation.y+=a.w.y*n,a.m.rotation.z+=a.w.z*n;let c=Et(a.m.position.x,a.m.position.z)+.1;a.m.position.y<c&&(a.m.position.y=c,a.v.y=Math.abs(a.v.y)*.35,a.v.x*=.6,a.v.z*=.6,a.w.multiplyScalar(.5)),a.life<1&&a.m.scale.setScalar(Math.max(.001,a.s*a.life)),a.life<=0&&(f.scene.remove(a.m),Gr.splice(o,1))}let e=f.storm,i=Hs.geometry.attributes.position,s=i.array,r=1+e*26;for(let o=0;o<s.length;o+=3){s[o]+=r*n,s[o+1]+=Math.sin(o+performance.now()*5e-4)*n*.2-e*n*1.5;let a=40;s[o]-t.x>a&&(s[o]-=2*a),s[o]-t.x<-a&&(s[o]+=2*a),s[o+1]-t.y>a/2&&(s[o+1]-=a),s[o+1]-t.y<-a/2&&(s[o+1]+=a),s[o+2]-t.z>a&&(s[o+2]-=2*a),s[o+2]-t.z<-a&&(s[o+2]+=2*a)}if(i.needsUpdate=!0,Hs.material.size=.25+e*.3,Hs.material.opacity=.3+e*.25,Hs.material.color.setRGB(1,.8-f.time.night*.4,.62-f.time.night*.3),Sc+=((f.raining?1:0)-Sc)*n*.5,Wr.material.opacity=Sc*.6,Sc>.01){let o=Wr.geometry.attributes.position.array;for(let a=0;a<o.length;a+=3)o[a+1]-=22*n,o[a]+=2*n,o[a+1]<t.y-20&&(o[a+1]+=40),o[a]-t.x>35&&(o[a]-=70),o[a]-t.x<-35&&(o[a]+=70),o[a+2]-t.z>35&&(o[a+2]-=70),o[a+2]-t.z<-35&&(o[a+2]+=70);Wr.geometry.attributes.position.needsUpdate=!0}}var Rc=null,Wt,ps,Vs,Xo,$o,Gs,qo,Cc,st={enabled:!0,init(){if(Wt){Wt.resume();return}try{Wt=new(window.AudioContext||window.webkitAudioContext)}catch{return}ps=Wt.createGain(),ps.gain.value=.7,ps.connect(Wt.destination),Vs=Wt.createGain(),Vs.gain.value=.8,Vs.connect(ps),Xo=Wt.createGain(),Xo.gain.value=.22,Xo.connect(ps),Cc=Wt.createBuffer(1,Wt.sampleRate*2,Wt.sampleRate);let n=Cc.getChannelData(0),t=0;for(let i=0;i<n.length;i++){let s=Math.random()*2-1;t=(t+.02*s)/1.02,n[i]=t*3.5}let e=Wt.createBufferSource();e.buffer=Cc,e.loop=!0,Gs=Wt.createBiquadFilter(),Gs.type="bandpass",Gs.frequency.value=400,Gs.Q.value=.6,$o=Wt.createGain(),$o.gain.value=.15,e.connect(Gs),Gs.connect($o),$o.connect(ps),e.start(),this.musicLoop()},setVolume(n){ps&&(ps.gain.value=n)},update(n,t){if(!Wt)return;let e=Wt.currentTime;$o.gain.setTargetAtTime(.1+n*.6+t*.04,e,.5),Gs.frequency.setTargetAtTime(300+n*500+Math.sin(e*.3)*120,e,.8)},tone(n,t,e="sine",i=.3,s=0,r=0,o){if(!Wt)return;let a=Wt.currentTime+r,c=Wt.createOscillator(),l=Wt.createGain();c.type=e,c.frequency.setValueAtTime(n,a),s&&c.frequency.exponentialRampToValueAtTime(Math.max(20,n*s),a+t),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(i,a+.01),l.gain.exponentialRampToValueAtTime(1e-4,a+t),c.connect(l),l.connect(o||Vs),c.start(a),c.stop(a+t+.05)},noise(n,t=1e3,e=.3,i="lowpass",s=0,r=1){if(!Wt)return;let o=Wt.currentTime+s,a=Wt.createBufferSource();a.buffer=Cc;let c=Wt.createBiquadFilter();c.type=i,c.frequency.value=t,c.Q.value=r;let l=Wt.createGain();l.gain.setValueAtTime(e,o),l.gain.exponentialRampToValueAtTime(1e-4,o+n),a.connect(c),c.connect(l),l.connect(Vs),a.start(o,Math.random()),a.stop(o+n+.05)},play(n){if(Wt)switch(n){case"step":this.noise(.12,500+Math.random()*200,.12,"lowpass");break;case"jump":this.noise(.2,400,.15);break;case"land":this.noise(.25,300,.25);break;case"mine":this.tone(180+Math.random()*60,.08,"square",.04),this.noise(.08,2400,.06,"highpass");break;case"pickup":this.tone(880,.08,"sine",.08),this.tone(1320,.1,"sine",.06,0,.05);break;case"deplete":this.noise(.5,900,.3),this.tone(220,.4,"triangle",.15,.5);break;case"shoot":this.tone(900,.15,"sawtooth",.12,.25),this.noise(.1,3e3,.08,"highpass");break;case"turret":this.tone(700,.12,"square",.05,.3);break;case"hit":this.tone(300,.1,"square",.08,.5);break;case"kill":this.noise(.6,1600,.3,"bandpass",0,.8),this.tone(120,.5,"sawtooth",.12,.3);break;case"hurt":this.tone(160,.25,"sawtooth",.15,.6);break;case"place":this.tone(220,.15,"triangle",.2),this.tone(330,.15,"triangle",.2,0,.1),this.tone(440,.3,"triangle",.2,0,.2),this.noise(.4,600,.2);break;case"ui":this.tone(880,.05,"sine",.07),this.tone(1320,.08,"sine",.04,0,.03);break;case"tick":this.tone(2400,.02,"sine",.025);break;case"open":this.tone(440,.12,"sine",.05,1.5),this.noise(.15,3e3,.03,"highpass");break;case"achv":[523,784,1046,1568].forEach((t,e)=>this.tone(t,.9,"triangle",.09,0,e*.09));break;case"deny":this.tone(200,.15,"square",.06),this.tone(150,.2,"square",.06,0,.1);break;case"craft":[523,659,784,1046].forEach((t,e)=>this.tone(t,.25,"triangle",.12,0,e*.08));break;case"radio":this.noise(.15,2500,.12,"bandpass",0,2),this.tone(1200,.05,"sine",.06,0,.12);break;case"alarm":this.tone(880,.18,"square",.06),this.tone(660,.18,"square",.06,0,.2);break;case"objective":[392,523,659].forEach((t,e)=>this.tone(t,.5,"sine",.15,0,e*.12));break;case"chapter":[262,330,392,523,659].forEach((t,e)=>this.tone(t,1.2,"sine",.12,0,e*.15));break;case"rumble":this.noise(4,150,.6),this.noise(3,400,.25,"lowpass",.5);break;case"jet":this.noise(.12,800,.1,"bandpass");break;case"night":this.tone(110,3,"sine",.12,.8),this.tone(165,3,"sine",.08,.8,.3);break}},engine(n){if(Wt&&(n>0||Rc)){if(!Rc){let i=Wt.createOscillator(),s=Wt.createOscillator(),r=Wt.createBiquadFilter(),o=Wt.createGain();i.type="sawtooth",s.type="triangle",r.type="lowpass",r.frequency.value=500,o.gain.value=1e-4,i.connect(r),s.connect(r),r.connect(o),o.connect(Vs),i.start(),s.start(),Rc={o:i,o2:s,f:r,g:o}}let t=Wt.currentTime,e=Rc;e.o.frequency.setTargetAtTime(38+n*70,t,.1),e.o2.frequency.setTargetAtTime(76+n*140,t,.1),e.f.frequency.setTargetAtTime(300+n*900,t,.1),e.g.gain.setTargetAtTime(n>0||f.driving?.03+n*.05:1e-4,t,.15)}},laser(n){if(Wt){if(n&&!qo){let t=Wt.createOscillator(),e=Wt.createOscillator(),i=Wt.createGain(),s=Wt.createBiquadFilter();t.type="sawtooth",t.frequency.value=110,e.type="square",e.frequency.value=113,s.type="lowpass",s.frequency.value=900,i.gain.value=1e-4,i.gain.exponentialRampToValueAtTime(.06,Wt.currentTime+.1),t.connect(s),e.connect(s),s.connect(i),i.connect(Vs),t.start(),e.start(),qo={o:t,o2:e,g:i}}else if(!n&&qo){let t=qo;qo=null,t.g.gain.setTargetAtTime(1e-4,Wt.currentTime,.04),t.o.stop(Wt.currentTime+.2),t.o2.stop(Wt.currentTime+.2)}}},musicLoop(){let n=[[220,277.2,329.6,415.3],[196,246.9,293.7,392],[174.6,220,261.6,349.2],[164.8,207.7,246.9,329.6],[146.8,220,293.7,370]],t=0,e=()=>{if(!Wt)return;let i=n[t++%n.length],s=Wt.currentTime;if(i.forEach((r,o)=>{let a=Wt.createOscillator(),c=Wt.createGain();a.type=o===0?"triangle":"sine",a.frequency.value=r*(o===0?.5:1),a.detune.value=(Math.random()-.5)*8,c.gain.setValueAtTime(1e-4,s),c.gain.exponentialRampToValueAtTime(.06,s+3),c.gain.exponentialRampToValueAtTime(1e-4,s+11),a.connect(c),c.connect(Xo),a.start(s),a.stop(s+11.5)}),Math.random()<.7){let r=i[1+Math.floor(Math.random()*3)]*2;for(let o=0;o<3;o++)Math.random()<.6&&this.tone(r*[1,1.122,1.335][o],2.5,"sine",.025,0,2+o*1.6,Xo)}setTimeout(e,9e3)};e()}};var Yo={iron:new Dt({color:5913134,roughness:.45,metalness:.75,flatShading:!0}),ironVein:new Dt({color:10246714,roughness:.3,metalness:.9,flatShading:!0,emissive:3806216}),ice:new Dt({color:13627135,roughness:.08,metalness:.1,flatShading:!0,transparent:!0,opacity:.9,emissive:1456202}),silicon:new Dt({color:15983014,roughness:.15,metalness:.4,flatShading:!0,emissive:2761224}),titanium:new Dt({color:10194175,roughness:.1,metalness:.5,flatShading:!0,emissive:5913855,emissiveIntensity:.6}),base:new Dt({color:7224102,roughness:.95,flatShading:!0})},Gp={iron:null,ice:8969727,silicon:16770720,titanium:9071871},Ws={iron:[1,.55,.3],ice:[.6,.9,1],silicon:[1,.9,.55],titanium:[.7,.55,1]};function l1(n,t,e){let i=new rn(e,t,5,1);i.translate(0,t/2,0);let s=new bt(i,n);return s.castShadow=!0,s}function h1(n,t){let e=new jt;if(n==="iron")for(let i=0;i<4;i++){let s=new bt(new hi(.6+t()*.7,0),i===0?Yo.ironVein:Yo.iron);s.position.set((t()-.5)*1.8,.3+t()*.4,(t()-.5)*1.8),s.rotation.set(t()*3,t()*3,t()*3),s.scale.y=.8,s.castShadow=!0,e.add(s)}else{let i=new bt(new hi(1.1,0),Yo.base);i.scale.set(1.2,.45,1.2),i.castShadow=!0,e.add(i);let s=n==="titanium"?6:7;for(let r=0;r<s;r++){let o=l1(Yo[n],.8+t()*(n==="ice"?1.6:1.9),.18+t()*.22),a=t()*6.28,c=t()*.8;o.position.set(Math.cos(a)*c,.2,Math.sin(a)*c),o.rotation.set((t()-.5)*.9,t()*3,(t()-.5)*.9),e.add(o)}Gp[n]&&e.add(ie(Gp[n],n==="titanium"?5:3,null,0,1.2,0))}return e}var Wp=Math.random;function $r(n,t,e,i){let s=h1(n,Wp),r=Et(t,e);s.position.set(t,r,e),s.rotation.y=Wp()*6.28,f.scene.add(s);let o=i??{iron:30,ice:25,silicon:25,titanium:14}[n],a={type:n,x:t,z:e,y:r,amount:o,max:o,mesh:s,r:1.6};return a.collider=f.colliders.add({x:t,z:e,r:1.3,kind:"node"}),f.nodes.push(a),a}function Xp(n,t){for(let e=0;e<200;e++){let i,s;if(n==="ice"&&Math.random()<.75){let o=Fi[Math.floor(Math.random()*Math.min(Fi.length,30))],a=Math.random()*6.28,c=Math.random()*o.r*.7;i=o.x+Math.cos(a)*c,s=o.z+Math.sin(a)*c}else if(t){let o=Math.random()*6.28,a=t[0]+Math.random()*(t[1]-t[0]);i=Math.cos(o)*a,s=Math.sin(o)*a}else i=(Math.random()-.5)*(2*Ht-300),s=(Math.random()-.5)*(2*Ht-300);let r=Math.hypot(i,s);if(!(n==="titanium"&&r<260)&&!(r<18)&&!(Math.abs(i)>Ht-160||Math.abs(s)>Ht-160)&&!(ks(i,s,2)>.6)&&!f.colliders.overlaps(i,s,3))return[i,s]}return null}function $p(){let n=[["iron",22,8],["iron",-18,20],["iron",30,-25],["silicon",-26,-14],["silicon",12,34],["ice",40,10],["iron",-40,-38],["silicon",45,42]];for(let[e,i,s]of n)$r(e,i,s);let t={iron:70,silicon:50,ice:40,titanium:22};for(let e in t)for(let i=0;i<t[e];i++){let s=Xp(e,e==="titanium"?null:i<t[e]*.35?[40,220]:null);s&&$r(e,s[0],s[1])}}function qp(n){f.scene.remove(n.mesh),f.colliders.remove(n.collider);let t=f.nodes.indexOf(n);t>=0&&f.nodes.splice(t,1)}var Xr=[];function Ic(n,t){n.amount-=t;let e=.35+.65*Math.max(0,n.amount/n.max);if(n.mesh.scale.setScalar(e),n.amount<=0){let i=n.mesh.position.clone();i.y+=1,gt.burst(i,Ws[n.type],40,7);let s=n.mesh.children.find(r=>r.isMesh&&r!==n.mesh.children[0])?.material||n.mesh.children[0].material;return gt.debris(i,s,9,5,1.1),gt.dustPuff(i,16,3),qp(n),Xr.push({type:n.type,t:90+Math.random()*60}),!0}return!1}function Yp(n){for(let e=Xr.length-1;e>=0;e--)if(Xr[e].t-=n,Xr[e].t<=0){let i=Xr[e].type;Xr.splice(e,1);let s=Xp(i,i==="titanium"?null:[60,400]);s&&$r(i,s[0],s[1])}let t=1+Math.sin(performance.now()*.002)*.15;Yo.titanium.emissiveIntensity=.5*t}function Zp(){return f.nodes.map(n=>[n.type,+n.x.toFixed(1),+n.z.toFixed(1),Math.round(n.amount)])}function Jp(n){for(let t of[...f.nodes])qp(t);for(let[t,e,i,s]of n){let r=$r(t,e,i);r.amount=s,r.mesh.scale.setScalar(.35+.65*s/r.max)}}var xn=[{name:"\u524D\u54E8\u7AD9",pop:0,b:0,r:75},{name:"\u5B9A\u5C45\u70B9",pop:4,b:6,r:120},{name:"\u5C0F\u9547",pop:12,b:14,r:175},{name:"\u57CE\u5E02",pop:24,b:22,r:240},{name:"\u5927\u90FD\u4F1A",pop:36,b:32,r:310},{name:"\u661F\u6E2F",pop:50,b:42,r:390}],ni={x:0,z:0},qr,Pc,Yr=0;function Ou(n){Pc=new re({color:6743807,transparent:!0,opacity:.12,side:sn,depthWrite:!1,blending:Ae}),f.cityLevel=f.cityLevel||0,Yr=xn[f.cityLevel].r,Kp(Yr)}function Kp(n){qr&&(f.scene.remove(qr),qr.geometry.dispose());let t=Math.ceil(n*1.2),e=[],i=[],s=1.4;for(let o=0;o<=t;o++){let a=o/t*Math.PI*2,c=ni.x+Math.cos(a)*n,l=ni.z+Math.sin(a)*n,h=Et(c,l);if(e.push(c,h,l,c,h+s,l),o<t){let u=o*2;i.push(u,u+1,u+2,u+1,u+3,u+2)}}let r=new we;r.setAttribute("position",new se(e,3)),r.setIndex(i),qr=new bt(r,Pc),qr.frustumCulled=!1,f.scene.add(qr)}function jp(n,t,e=0){return Math.hypot(n-ni.x,t-ni.z)<=xn[f.cityLevel].r-e}function Qp(){let n=xn[f.cityLevel+1];return n?{...n,curPop:f.colony.pop,curB:f.buildings.length}:null}var Fu=0;function tm(n,t){Pc.opacity+=((t?.45:.1)-Pc.opacity)*Math.min(1,n*4);let e=xn[f.cityLevel].r;if(Yr<e&&(Yr=Math.min(e,Yr+n*40),Kp(Yr)),Fu-=n,Fu>0)return;Fu=1;let i=xn[f.cityLevel+1];if(i&&f.colony.pop>=i.pop&&f.buildings.length>=i.b){f.cityLevel++,st.play("chapter"),f.events.emit("cityLevel",xn[f.cityLevel]);let s=new T(ni.x,Et(ni.x,ni.z)+2,ni.z);gt.burst(s,[.4,.9,1],120,18)}}var Zo=[],u1={mars:6178362,europa:9214120,kepler:5921384}[Qt],ku,Oi,Lc=!0;function d1(){return ku||(ku=new Dt({color:u1,roughness:.95,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),ku}function f1(n,t,e,i){let s=e-n,r=i-t,o=Math.hypot(s,r);if(o<2)return null;let a=Math.ceil(o/1.5),c=s/o,l=r/o,h=-l,u=c,d=1.3,p=[],x=[],y=[],g=[];for(let M=0;M<=a;M++){let v=M/a,I=n+s*v,A=t+r*v;for(let C of[-1,1]){let P=I+h*d*C,S=A+u*d*C;p.push(P,Et(P,S)+.07,S),y.push(C<0?0:1,v*o/3)}if(M<a){let C=M*2;x.push(C,C+2,C+1,C+1,C+2,C+3)}}for(let M=4;M<o-2;M+=9)for(let v of[-1,1]){let I=n+c*M+h*(d+.35)*v,A=t+l*M+u*(d+.35)*v;g.push(I,Et(I,A)+.25,A)}let m=new we;m.setAttribute("position",new se(p,3)),m.setAttribute("uv",new se(y,2)),m.setIndex(x),m.computeVertexNormals();let _=new bt(m,d1());return _.receiveShadow=!0,f.scene.add(_),{mesh:_,lamp:g}}function em(n){if(n.type==="lamp")return;let t=null,e=70;for(let u of f.buildings){if(u===n||u.type==="lamp")continue;let d=Math.hypot(u.x-n.x,u.z-n.z)-u.def.r-n.def.r;d<e&&(e=d,t=u)}if(!t)return;let i=t.x-n.x,s=t.z-n.z,r=Math.hypot(i,s),o=n.x+i/r*(n.def.r+.5),a=n.z+s/r*(n.def.r+.5),c=t.x-i/r*(t.def.r+.5),l=t.z-s/r*(t.def.r+.5),h=f1(o,a,c,l);h&&(Zo.push({...h,a:n,b:t}),Lc=!0)}function nm(n){for(let t=Zo.length-1;t>=0;t--){let e=Zo[t];(e.a===n||e.b===n)&&(f.scene.remove(e.mesh),e.mesh.geometry.dispose(),Zo.splice(t,1),Lc=!0)}}function im(){if(Lc){Lc=!1,Oi&&(f.scene.remove(Oi),Oi.geometry.dispose());let n=Zo.flatMap(t=>t.lamp);if(n.length){let t=new we;t.setAttribute("position",new se(n,3)),Oi=new Dn(t,new An({size:.9,map:Nn(),color:8382207,transparent:!0,depthWrite:!1,blending:Ae})),Oi.frustumCulled=!1,f.scene.add(Oi)}else Oi=null}Oi&&(Oi.material.opacity=.15+f.time.night*.85)}var rm=new oe(1,1,1,6,1,!0);rm.translate(0,.5,0);var p1=new T(0,1,0),Zr=new T;function m1(n){let t=1+(n.level||1);for(n.drones=n.drones||[];n.drones.length<t;){let e=zp(),i=new bt(rm,new re({color:16752720,transparent:!0,opacity:.8,blending:Ae,depthWrite:!1}));i.visible=!1,i.frustumCulled=!1,f.scene.add(e.group,i);let s=n.drones.length,r=new T(n.x+[-1.9,1.9,-1.9,1.9][s%4],n.y+1.1,n.z+[-1.9,-1.9,1.9,1.9][s%4]);e.group.position.copy(r),n.drones.push({...e,beam:i,dock:r,state:"dock",t:1+s*1.3,node:null,cargo:null,pos:e.group.position})}}function om(n){for(let t of n.drones||[])f.scene.remove(t.group,t.beam),t.node&&(t.node.claimed=!1);n.drones=[]}function sm(n,t,e,i=15){Zr.copy(t).sub(n.pos);let s=Zr.length(),r=Et(n.pos.x,n.pos.z)+8;s>6&&(Zr.y+=(r-n.pos.y)*2),Zr.normalize().multiplyScalar(Math.min(s,i*e)),n.pos.add(Zr);let a=Math.atan2(t.x-n.pos.x,t.z-n.pos.z)-n.group.rotation.y;return a=Math.atan2(Math.sin(a),Math.cos(a)),n.group.rotation.y+=a*Math.min(1,e*4),n.group.rotation.x=Math.min(.3,s*.02),s<.6}function am(n){let t=performance.now()*.001;for(let e of f.buildings)if(e.type==="drones"&&!(e.buildT<1)){m1(e),e.anim.dish&&(e.anim.dish.rotation.y+=n*(e.powered?1.2:0)),e.anim.light&&(e.anim.light.visible=e.powered&&Math.sin(t*3)>-.3);for(let i of e.drones){for(let s of i.rotors)s.rotation.y+=n*40;switch(i.group.position.y+=Math.sin(t*3+i.dock.x)*.003,i.beam.visible=!1,!e.powered&&i.state!=="dock"&&(i.node&&(i.node.claimed=!1),i.node=null,i.state="back"),i.state){case"dock":{if(i.pos.lerp(i.dock,Math.min(1,n*3)),i.t-=n,i.t<=0&&e.powered){i.t=2;let s=null,r=100;for(let o of f.nodes){if(o.claimed||o.type==="titanium"&&(e.level||1)<3)continue;let a=Math.hypot(o.x-e.x,o.z-e.z);a<r&&(r=a,s=o)}s&&(s.claimed=!0,i.node=s,i.state="out")}break}case"out":{let s=i.node;if(!s||!f.nodes.includes(s)){i.node=null,i.state="back";break}sm(i,Zr.set(s.x,s.y+4.5,s.z).clone(),n)&&(i.state="mine",i.t=3.2);break}case"mine":{let s=i.node;if(!s||!f.nodes.includes(s)){i.state="back";break}i.t-=n;let r=new T(s.x+Math.sin(t*5)*.3,s.y+.6,s.z+Math.cos(t*4)*.3),o=i.pos.clone().add(new T(0,-.25,0)),a=r.clone().sub(o),c=a.length();if(i.beam.position.copy(o),i.beam.quaternion.setFromUnitVectors(p1,a.normalize()),i.beam.scale.set(.05,c,.05),i.beam.material.color.setRGB(...Ws[s.type]),i.beam.visible=!0,Math.random()<.4&&gt.spark(r,Ws[s.type],1,3,.4),i.t<=0){let l=Math.min(3,Math.ceil(s.amount));i.cargo={type:s.type,n:l},s.claimed=!1,Ic(s,l),i.node=null,i.state="back"}break}case"back":{sm(i,i.dock,n)&&(i.cargo&&(f.res[i.cargo.type]+=i.cargo.n,f.stats.mined[i.cargo.type]+=i.cargo.n,f.stats.droneHauls=(f.stats.droneHauls||0)+1,Math.hypot(f.player.pos.x-e.x,f.player.pos.z-e.z)<45&&f.events.emit("pickup",{type:i.cargo.type,n:i.cargo.n,note:"\u65E0\u4EBA\u673A"}),gt.spark(i.pos,[.5,.9,1],6,3),i.cargo=null),i.state="dock",i.t=1.5);break}}}}}var dn={solar:{name:"\u592A\u9633\u80FD\u9635\u5217",icon:"sun",cat:"life",chapter:0,cost:{iron:8,silicon:6},power:4,r:2.6,hp:120,desc:"\u767D\u5929\u53D1\u7535 4 \u5355\u4F4D\uFF0C\u591C\u95F4\u964D\u81F3 1.6\u3002\u6B96\u6C11\u5730\u7684\u5FC3\u8DF3\u4ECE\u8FD9\u91CC\u5F00\u59CB\u3002"},oxygen:{name:"\u5236\u6C27\u7AD9",icon:"o2",cat:"life",chapter:0,cost:{iron:12,silicon:4,ice:6},power:-2,r:3,hp:160,o2:6,life:14,desc:"\u7535\u89E3\u6C34\u51B0\u5236\u9020\u6C27\u6C14\u3002\u4E3A 6 \u4F4D\u5C45\u6C11\u4F9B\u6C27\uFF0C\u5E76\u5728 14 \u7C73\u5185\u4E3A\u4F60\u7684\u5B87\u822A\u670D\u8865\u6C27\u3002"},lamp:{name:"\u7167\u660E\u706F",icon:"star",cat:"life",chapter:0,cost:{iron:3},power:0,r:.6,hp:60,desc:"\u7167\u4EAE\u706B\u661F\u7684\u957F\u591C\u3002"},habitat:{name:"\u5C45\u4F4F\u7A79\u9876",icon:"dome",cat:"life",chapter:1,cost:{iron:25,silicon:12},power:-1,r:6.4,hp:300,housing:4,life:12,desc:"\u53EF\u4F4F 4 \u4EBA\u3002\u7A79\u9876\u91CC\u6709\u6696\u5149\u3001\u690D\u7269\u548C\u5BB6\u4EBA\u7684\u7167\u7247\u3002"},greenhouse:{name:"\u6E29\u5BA4",icon:"food",cat:"life",chapter:1,cost:{iron:14,silicon:16,ice:8},power:-2,r:5.4,hp:160,food:5,desc:"\u5728\u706B\u661F\u571F\u58E4\u91CC\u79CD\u51FA\u7B2C\u4E00\u68F5\u571F\u8C46\u3002\u4F9B 5 \u4EBA\u98DF\u7269\u3002"},extractor:{name:"\u6C34\u51B0\u63D0\u53D6\u5668",icon:"water",cat:"life",chapter:1,cost:{iron:16,silicon:4,ice:4},power:-2,r:2.8,hp:160,water:6,desc:"\u4ECE\u5730\u4E0B\u51BB\u571F\u4E2D\u94BB\u53D6\u6C34\u3002\u4F9B 6 \u4EBA\u7528\u6C34\u3002"},beacon:{name:"\u7740\u9646\u573A",icon:"ship",cat:"city",chapter:1,cost:{iron:24,silicon:14},power:-1,r:7.4,hp:250,desc:"\u5411\u5730\u7403\u53D1\u51FA\u4FE1\u53F7\u3002\u6761\u4EF6\u6EE1\u8DB3\u65F6\uFF0C\u79FB\u6C11\u98DE\u8239\u4F1A\u5728\u8FD9\u91CC\u964D\u843D\u3002"},fabricator:{name:"\u5236\u9020\u5DE5\u574A",icon:"wrench",cat:"industry",chapter:2,cost:{iron:22,silicon:14},power:-1,r:4.6,hp:220,desc:"\u9760\u8FD1\u6309 E \u5236\u9020\u6B66\u5668\u4E0E\u88C5\u5907\u3002"},drones:{name:"\u65E0\u4EBA\u673A\u7AD9",icon:"drone",cat:"industry",chapter:2,cost:{iron:30,silicon:22},power:-3,r:3.8,hp:220,desc:"\u6D3E\u51FA\u91C7\u77FF\u65E0\u4EBA\u673A\uFF0C\u81EA\u52A8\u91C7\u96C6 100 \u7C73\u5185\u7684\u77FF\u70B9\u5E76\u8FD0\u56DE\u3002\u5347\u7EA7\u540E\u65E0\u4EBA\u673A\u66F4\u591A\uFF0C\u6EE1\u7EA7\u53EF\u91C7\u949B\u3002"},turret:{name:"\u9632\u5FA1\u70AE\u5854",icon:"shield",cat:"defense",chapter:2,cost:{iron:22,silicon:10},power:-2,r:1.9,hp:200,range:40,desc:"\u81EA\u52A8\u653B\u51FB 40 \u7C73\u5185\u7684\u9508\u8680\u86DB\u3002\u9700\u8981\u7535\u529B\u3002"},reactor:{name:"\u805A\u53D8\u53CD\u5E94\u5806",icon:"power",cat:"industry",chapter:3,cost:{iron:40,silicon:20,titanium:12},power:20,r:5.4,hp:400,desc:"\u663C\u591C\u4E0D\u505C +20 \u26A1\u3002\u7528\u706B\u661F\u7684\u949B\uFF0C\u70B9\u4EAE\u4EBA\u7C7B\u7684\u7B2C\u4E8C\u9897\u592A\u9633\u3002"},apartment:{name:"\u516C\u5BD3\u5854",icon:"tower",cat:"city",level:2,cost:{iron:40,silicon:25,titanium:4},power:-3,r:4.6,hp:400,housing:12,life:12,desc:"\u53EF\u4F4F 12 \u4EBA\u3002\u7A97\u6237\u91CC\u7684\u706F\u5149\uFF0C\u662F\u57CE\u5E02\u7684\u661F\u7A7A\u3002"},vfarm:{name:"\u5782\u76F4\u519C\u573A",icon:"food",cat:"city",level:2,cost:{iron:30,silicon:30,ice:15},power:-4,r:4.2,hp:260,food:14,desc:"\u5341\u56DB\u5C42\u7684\u7ACB\u4F53\u519C\u7530\u3002\u4F9B 14 \u4EBA\u98DF\u7269\u3002"},lifehub:{name:"\u751F\u6001\u4E2D\u67A2",icon:"o2",cat:"city",level:3,cost:{iron:45,silicon:30,ice:30,titanium:6},power:-5,r:6,hp:400,o2:16,water:16,life:20,desc:"\u5927\u578B\u6C27\u6C14\u4E0E\u6C34\u5FAA\u73AF\u7CFB\u7EDF\u3002\u4F9B 16 \u4EBA\u6C27\u6C14\u548C\u7528\u6C34\uFF0C20 \u7C73\u5185\u8865\u6C27\u3002"},terraformer:{name:"\u5927\u6C14\u6539\u9020\u5854",icon:"planet",cat:"stellar",chapter:4,only:"terraformable",cost:{iron:100,silicon:60,titanium:30,ice:50},power:-12,r:7.4,hp:800,desc:"\u5411\u5929\u7A7A\u91CA\u653E\u6E29\u5BA4\u6C14\u4F53\u4E0E\u6C34\u6C7D\u3002\u8BA9\u8FD9\u9897\u661F\u7403\uFF0C\u771F\u6B63\u6210\u4E3A\u5BB6\u3002"},launch:{name:"\u661F\u9645\u53D1\u5C04\u53F0",icon:"ship",cat:"stellar",chapter:5,level:Qt==="mars"?5:4,only:"route",cost:{iron:160,silicon:120,titanium:60,ice:60},power:-15,r:9.5,hp:900,desc:"\u661F\u9645\u822A\u7EBF\u7684\u8D77\u70B9\u3002\u9760\u8FD1\u6309 E \u6253\u5F00\u661F\u56FE\uFF0C\u524D\u5F80\u65B0\u7684\u661F\u7403\u6216\u56DE\u5230\u5DF2\u5F00\u62D3\u7684\u5BB6\u56ED\u3002"},monument:{name:"\u6587\u660E\u7EAA\u5FF5\u7891",icon:"monument",cat:"stellar",level:5,only:"final",cost:{iron:150,silicon:120,titanium:80},power:-6,r:6.5,hp:900,desc:"\u4E09\u9897\u661F\u7403\uFF0C\u4E00\u4E2A\u4EBA\u7C7B\u3002\u732E\u7ED9\u6240\u6709\u51FA\u53D1\u7684\u4EBA\u3002"}},Hu=3,Bu=[1,1,1.6,2.2],g1=["lamp","beacon","fabricator","terraformer","launch","monument"];function Dc(n){return!g1.includes(n.type)&&(n.level||1)<Hu}function gi(n,t){let e=n.def,i=n.level||1,s=e[t];return s?t==="power"?s>0?s*Bu[i]:s*(1+.25*(i-1)):t==="life"?s+3*(i-1):t==="range"?s+8*(i-1):t==="hp"?s*(1+.5*(i-1)):Math.round(s*Bu[i]):0}function Vu(n){let t=n.level||1,e={};for(let i in n.def.cost)e[i]=Math.ceil(n.def.cost[i]*(t===1?.8:1.3));return e.titanium=(e.titanium||0)+(t===1?3:8),e}function cm(n){if(!Dc(n))return!1;let t=Vu(n);return Qn(t)?(zo(t),n.level=(n.level||1)+1,lm(n,!0),st.play("place"),gt.ring(new T(n.x,n.y,n.z),n.def.r*1.2,60,[.5,.9,1]),ki(),!0):!1}function lm(n,t){let e=n.level||1;n.maxHp=gi(n,"hp"),n.hp=Math.min(n.maxHp,t?n.maxHp:n.hp);let i=1+(e-1)*.12;n.group.scale.set(i,n.group.scale.y,i),n.baseScale=i,n.anim._pips&&n.anim._pips.forEach(r=>n.group.remove(r)),n.anim._pips=[];let s=Math.max(2.5,n.def.r*.9);for(let r=1;r<e;r++)n.anim._pips.push(ie(16757596,1.4,n.group,(r-e/2)*.9,s+1.2,0));if(t){n.buildT=.35;let r=new bt(new Ye(n.def.r*1.05,.08,6,48),hm.clone());r.rotation.x=Math.PI/2,r.position.set(n.x,n.y,n.z),f.scene.add(r),n.anim._scan=r}}function ms(n){let t=dn[n];return t.only==="terraformable"&&!xt.terraformable?{hide:!0}:t.only==="route"&&!xt.next&&!(En.visited||[]).some(e=>e.id!==Qt)?{hide:!0}:t.only==="final"&&xt.next?{hide:!0}:Qt==="mars"&&t.chapter&&t.chapter>f.chapter?{ok:!1,why:"\u5267\u60C5\u63A8\u8FDB\u540E\u89E3\u9501"}:t.level&&t.level>f.cityLevel?{ok:!1,why:`\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C${xn[t.level].name}\u300D\u89E3\u9501`}:{ok:!0}}var Gu=["solar","oxygen","lamp","habitat","greenhouse","extractor","beacon","fabricator","drones","turret","reactor","apartment","vfarm","lifehub","terraformer","launch","monument"],x1=["oxygen","lifehub","turret","habitat","apartment","extractor","greenhouse","vfarm","beacon","drones","fabricator","terraformer","launch","monument"],hm=new re({color:8382207,transparent:!0,opacity:.8,blending:Ae,depthWrite:!1,side:sn});function Uc(n,t,e,i=0,s,r=!1,o=1){let a=dn[n],c=new jt,l={};Br[n](c,l);let h=Et(t,e);if(c.position.set(t,h,e),c.rotation.y=i,f.scene.add(c),r){c.scale.set(1,.001,1);let d=new bt(new Ye(a.r*1.05,.08,6,48),hm.clone());d.rotation.x=Math.PI/2,d.position.set(t,h,e),f.scene.add(d),l._scan=d}let u={buildT:r?0:1,type:n,def:a,x:t,z:e,y:h,rot:i,group:c,anim:l,hp:s??a.hp,broken:s!==void 0&&s<=0,powered:!0,t:Math.random()*10,cool:0};return u.collider=f.colliders.add({x:t,z:e,r:a.r*(n==="beacon"?.15:.9),kind:"building",b:u}),u.level=o,u.maxHp=gi(u,"hp"),s===void 0&&(u.hp=u.maxHp),o>1&&lm(u,!1),f.buildings.push(u),f.stats.built[n]=(f.stats.built[n]||0)+1,em(u),ki(),u}function um(n,t=!1){if(t)for(let s in n.def.cost)f.res[s]+=Math.floor(n.def.cost[s]*.5);f.scene.remove(n.group),f.colliders.remove(n.collider),nm(n),n.type==="drones"&&om(n);let e=f.buildings.indexOf(n);e>=0&&f.buildings.splice(e,1),f.stats.built[n.type]=Math.max(0,(f.stats.built[n.type]||0)-1);let i=new T(n.x,n.y+2,n.z);gt.burst(i,[1,.6,.3],60,10),gt.dustPuff(i,30,n.def.r*2),ki()}function dm(n){return f.buildings.filter(t=>t.type===n).length}function ki(){let n=f.colony,t=(f.time.elevation>.05?1:.4)*xt.solar,e=0,i=0;for(let r of f.buildings){if(r.broken)continue;let o=gi(r,"power");o>0?e+=r.type==="solar"?o*t:o:i-=o}let s=e;for(let r of f.buildings)r.powered=r.def.power>=0&&!r.broken;for(let r of x1)for(let o of f.buildings){if(o.type!==r)continue;let a=gi(o,"power");!o.broken&&s>=-a&&(s+=a,o.powered=!0)}n.powerProd=e,n.powerUse=i,n.deficit=i>e+.001,n.housing=0,n.o2=0,n.food=0,n.water=0;for(let r of f.buildings)n.housing+=gi(r,"housing"),r.powered&&(n.o2+=gi(r,"o2"),n.food+=gi(r,"food"),n.water+=gi(r,"water"));n.support=Math.min(n.housing,n.o2,n.food,n.water)}function fm(n){for(let t of f.buildings){let e=gi(t,"life");if(!e||!t.powered)continue;let i=t.x-n.x,s=t.z-n.z;if(i*i+s*s<e*e)return t}return null}var xi=null,y1=null,pm=new re({color:5636010,transparent:!0,opacity:.35,depthWrite:!1}),v1=new re({color:16729156,transparent:!0,opacity:.35,depthWrite:!1}),On,ue={type:null,rot:0,valid:!1,reason:"",x:0,z:0};function Xs(n){if(xi&&(f.scene.remove(xi),xi=null),ue.type=n,y1=n,!n){On&&(On.visible=!1);return}let t=new jt;Br[n](t,{}),t.traverse(i=>{i.isMesh&&(i.material=pm,i.castShadow=!1,i.receiveShadow=!1),(i.isSprite||i.userData.found)&&(i.visible=!1)}),xi=t,f.scene.add(t),On||(On=new bt(new Jn(.96,1,64),new re({color:6741503,transparent:!0,opacity:.5,depthWrite:!1,side:sn})),On.rotation.x=-Math.PI/2,f.scene.add(On));let e=dn[n].life||dn[n].range||0;On.visible=e>0,On.scale.setScalar(e||1)}function mm(n,t){if(!xi)return;if(!n){xi.visible=!1,On.visible=!1,ue.valid=!1,ue.reason="\u5BF9\u51C6\u5730\u9762";return}xi.visible=!0;let e=dn[ue.type],i=n.x,s=n.z,r=Math.hypot(i-t.x,s-t.z),o=e.r+1.2;if(r<o){let h=r>.01?(i-t.x)/r:-Math.sin(f.player.yaw),u=r>.01?(s-t.z)/r:-Math.cos(f.player.yaw);i=t.x+h*o,s=t.z+u*o,r=o}let a=Et(i,s);xi.position.set(i,a,s),xi.rotation.y=ue.rot,ue.x=i,ue.z=s,On.scale.x>1&&(On.visible=!0,On.position.set(i,a+.3,s));let c="";Qn(e.cost)?ks(i,s,Math.max(1.5,e.r*.7))>(e.r>4?.32:.45)?c="\u5730\u9762\u592A\u9661":f.colliders.overlaps(i,s,e.r*.85)?c="\u4F4D\u7F6E\u88AB\u5360\u7528":r<e.r+.8?c="\u79BB\u81EA\u5DF1\u592A\u8FD1":Math.abs(i)>Ht-170||Math.abs(s)>Ht-170?c="\u8D85\u51FA\u53EF\u5EFA\u9020\u533A\u57DF":jp(i,s,e.r)||(c="\u8D85\u51FA\u6B96\u6C11\u5730\u9886\u5730\uFF08\u63D0\u5347\u57CE\u5E02\u7B49\u7EA7\u6765\u6269\u5F20\uFF09"):c="\u8D44\u6E90\u4E0D\u8DB3",ue.valid=!c,ue.reason=c;let l=c?v1:pm;xi.traverse(h=>{h.isMesh&&(h.material=l)})}function gm(){if(!ue.type||!ue.valid)return st.play("deny"),null;let n=dn[ue.type];zo(n.cost);let t=Uc(ue.type,ue.x,ue.z,ue.rot,void 0,!0);return st.play("place"),gt.ring(new T(t.x,t.y,t.z),n.r,50),t}var zu=0;function xm(n,t){zu-=n,zu<=0&&(zu=.5,ki()),im(),am(n);let e=f.time.night,i=performance.now()*.001;O.window.emissiveIntensity=.3+e*1.6,O.lamp.emissiveIntensity=e*4;for(let s of Lu)s.emissiveIntensity=.15+e*1.4;for(let s of f.buildings){let r=s.anim,o=s.powered;if(s.t+=n,s.buildT<1){s.buildT=Math.min(1,s.buildT+n/1.3);let a=s.buildT,c=1+2.2*Math.pow(a-1,3)+1.2*Math.pow(a-1,2);s.group.scale.y=Math.max(.001,c)*(s.baseScale||1);let l=Math.max(3,s.def.r*1.4)*(s.type==="apartment"||s.type==="launch"||s.type==="terraformer"||s.type==="monument"?4:1);r._scan.position.y=s.y+a*l,r._scan.material.opacity=.8*(1-a),r._scan.scale.setScalar(1-a*.25),Math.random()<.5&&gt.spark(new T(s.x+(Math.random()-.5)*s.def.r*2,s.y+a*l,s.z+(Math.random()-.5)*s.def.r*2),[.5,.9,1],1,2,.6),a>=1&&(f.scene.remove(r._scan),r._scan.geometry.dispose(),delete r._scan)}switch(s.hp<s.maxHp&&f.time.night<.5&&(s.hp=Math.min(s.maxHp,s.hp+n*(s.broken?5:2)),s.broken&&s.hp>=s.maxHp*.5&&(s.broken=!1,ki(),f.events.emit("toast",`\u2713 ${s.def.name} \u5DF2\u4FEE\u590D\uFF0C\u6062\u590D\u8FD0\u8F6C`))),s.broken&&Math.random()<n*6&&gt.dustPuff(new T(s.x+(Math.random()-.5)*s.def.r,s.y+1.5,s.z+(Math.random()-.5)*s.def.r),1,.5,[.15,.13,.12]),s.type){case"solar":{let a=new T(ei.x,Math.max(ei.y,.2),ei.z).applyAxisAngle(new T(0,1,0),-s.rot);r.pivot.rotation.y=Math.atan2(a.x,a.z),r.panel.rotation.x=Math.PI/2-Math.asin(Math.min(1,a.y/a.length()));break}case"oxygen":o&&(r.fan.rotation.z+=n*8),r.light.visible=o;break;case"extractor":o&&(r.drill.position.y=3+Math.sin(s.t*3)*.8),r.light.visible=o;break;case"greenhouse":r.light.material.opacity=o?.3+e*.5:0;break;case"fabricator":o?(r.arm.rotation.y=Math.sin(s.t*.8)*1.2,r.spark.visible=Math.sin(s.t*7)>.6):r.spark.visible=!1;break;case"habitat":r.tip.visible=Math.sin(i*2+s.x)>.3;break;case"apartment":r.tip.visible=Math.sin(i*2+s.z)>.3;break;case"vfarm":r.light.material.opacity=o?.25+e*.5:0;break;case"lifehub":o&&(r.fan.rotation.y+=n*3),r.light.visible=o;break;case"monument":r.rings.forEach((a,c)=>{a.rotation.x=i*(.3+c*.2),a.rotation.y=i*(.2+c*.15)});break;case"reactor":r.r1.rotation.y+=n*.8,r.r2.rotation.z+=n*.6,r.light.material.opacity=.5+Math.sin(i*3)*.2;break;case"beacon":{let a=Math.floor(i*6)%8;r.lights.forEach((c,l)=>{c.visible=o&&(l===a||l===(a+4)%8||e>.3)}),r.tip.visible=Math.sin(i*3)>0;break}case"lamp":r.glow.visible=e>.2,r.glow.material.opacity=e;break;case"turret":_1(s,n,t);break;case"terraformer":{r.rings.forEach((a,c)=>{a.position.y=10+c*8+Math.sin(i*1.5+c)*1.5,a.rotation.x=Math.sin(i+c)*.2}),r.beam.material.opacity=o&&f.terraform<1?.18+Math.sin(i*4)*.05:0,o&&f.terraform<1&&Math.random()<.6&&gt.rise(new T(s.x,s.y+28,s.z),[.4,.9,1],4);break}}}}function _1(n,t,e){let i=n.anim;if(i.eye.visible=n.powered,!n.powered)return;n.cool-=t;let s=null,r=gi(n,"range");for(let c of f.enemies){if(c.dead)continue;let l=Math.hypot(c.pos.x-n.x,c.pos.z-n.z);l<r&&(r=l,s=c)}if(!s){i.head.rotation.y+=t*.4;return}let a=Math.atan2(-(s.pos.x-n.x),-(s.pos.z-n.z))-n.rot-i.head.rotation.y;if(a=Math.atan2(Math.sin(a),Math.cos(a)),i.head.rotation.y+=Math.sign(a)*Math.min(Math.abs(a),t*5),Math.abs(a)<.15&&n.cool<=0){n.cool=.45;let c=new T(n.x,n.y+2.7,n.z),l=s.pos.clone();l.y+=1;let h=l.sub(c).normalize();c.addScaledVector(h,2.2),e.shoot(c,h,15*Bu[n.level||1],"turret"),st.play("turret")}}function ym(){return f.buildings.map(n=>[n.type,+n.x.toFixed(2),+n.z.toFixed(2),+n.rot.toFixed(3),Math.round(n.hp),n.level||1])}var Be=n=>()=>dm(n)>=1,gs=(n,t)=>({check:()=>f.stats.mined[n]>=t,prog:()=>`${Math.min(f.stats.mined[n],t)}/${t}`}),qs=n=>({text:`\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C${xn[n].name}\u300D`,check:()=>f.cityLevel>=n,prog:()=>`\u4EBA\u53E3 ${f.colony.pop}/${xn[n].pop}`}),Fc=n=>({text:`\u4EBA\u53E3\u8FBE\u5230 ${n}`,check:()=>f.colony.pop>=n,prog:()=>`${f.colony.pop}/${n}`}),vm={text:"\u53D1\u5C04\u6B96\u6C11\u8230",check:()=>!!f.launched,prog:()=>"\u9760\u8FD1\u53D1\u5C04\u53F0\u6309 E"},M1=[{title:"\u7B2C\u4E00\u7AE0 \xB7 \u7740\u9646",sub:"\u6D3B\u4E0B\u53BB",goals:[{text:"\u91C7\u96C6\u94C1\u77FF",...gs("iron",10)},{text:"\u91C7\u96C6\u7845\u6676",...gs("silicon",6)},{text:"\u91C7\u96C6\u6C34\u51B0",...gs("ice",6)},{text:"\u5EFA\u9020\u592A\u9633\u80FD\u9635\u5217",check:Be("solar")},{text:"\u5EFA\u9020\u5236\u6C27\u7AD9",check:Be("oxygen")}],radio:[["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u7740\u9646\u6210\u529F\u3002\u5916\u90E8\u6C14\u538B 0.6 \u5343\u5E15\uFF0C\u6C14\u6E29\u96F6\u4E0B 63 \u6444\u6C0F\u5EA6\u3002\u6B22\u8FCE\u6765\u5230\u706B\u661F\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u65B9\u821F\u4E00\u53F7\uFF0C\u8FD9\u91CC\u662F\u5730\u7403\u8054\u5408\u6307\u6325\u4E2D\u5FC3\u3002\u542C\u5230\u8BF7\u56DE\u7B54\u2026\u2026\u5F88\u597D\u3002\u4F60\u662F\u7B2C\u4E00\u4E2A\u8E0F\u4E0A\u8FD9\u7247\u571F\u5730\u7684\u4EBA\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u7740\u9646\u8231\u53EA\u80FD\u5728\u5B83\u5468\u56F4\u5F88\u5C0F\u7684\u8303\u56F4\u5185\u7ED9\u4F60\u8865\u6C27\u3002\u6309\u4F4F\u5DE6\u952E\u7528\u91C7\u77FF\u6FC0\u5149\u91C7\u96C6\u94C1\u77FF\u3001\u7845\u6676\u548C\u6C34\u51B0\uFF0C\u7136\u540E\u6309 B \u5EFA\u8D77\u7B2C\u4E00\u5EA7\u5236\u6C27\u7AD9\u3002"]]},{title:"\u7B2C\u4E8C\u7AE0 \xB7 \u7B2C\u4E00\u4E2A\u5BB6",sub:"\u4E3A\u540E\u6765\u7684\u4EBA\u70B9\u4E00\u76CF\u706F",goals:[{text:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",check:Be("habitat")},{text:"\u5EFA\u9020\u6E29\u5BA4",check:Be("greenhouse")},{text:"\u5EFA\u9020\u6C34\u51B0\u63D0\u53D6\u5668",check:Be("extractor")},{text:"\u5EFA\u9020\u7740\u9646\u573A",check:Be("beacon")},{text:"\u8FCE\u63A5\u7B2C\u4E00\u6279\u79FB\u6C11",check:()=>f.stats.arrived>=1,prog:()=>f.colony.support>0?"\u7B49\u5F85\u98DE\u8239":"\u9700\u8981\u4F4F\u623F/\u6C27/\u6C34/\u98DF\u7269/\u7535"}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5236\u6C27\u7AD9\u8FD0\u8F6C\u6B63\u5E38\uFF01\u5B83\u5468\u56F4 14 \u7C73\u90FD\u80FD\u7ED9\u5B87\u822A\u670D\u8865\u6C27\uFF0C\u4F60\u53EF\u4EE5\u8D70\u5F97\u66F4\u8FDC\u4E86\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5730\u7403\u4E0A\u6709\u5341\u4E07\u4EBA\u62A5\u540D\u4E86\u79FB\u6C11\u8BA1\u5212\u3002\u5EFA\u597D\u7A79\u9876\u3001\u6E29\u5BA4\u3001\u6C34\u6E90\u548C\u7740\u9646\u573A\u2014\u2014\u7ED9\u4ED6\u4EEC\u4E00\u4E2A\u53EF\u4EE5\u56DE\u7684\u5BB6\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u63D0\u793A\uFF1A\u592A\u9633\u80FD\u5728\u591C\u95F4\u53EA\u5269\u56DB\u6210\u529F\u7387\u3002\u591A\u5EFA\u51E0\u5EA7\uFF0C\u6B96\u6C11\u5730\u624D\u4E0D\u4F1A\u5728\u591C\u91CC\u65AD\u7535\u3002"]]},{title:"\u7B2C\u4E09\u7AE0 \xB7 \u957F\u591C",sub:"\u5B88\u62A4\u6211\u4EEC\u7684\u4EBA",goals:[{text:"\u5EFA\u9020\u5236\u9020\u5DE5\u574A",check:Be("fabricator")},{text:"\u5236\u9020\u7B49\u79BB\u5B50\u6B65\u67AA",check:()=>!!f.upgrades.rifle},{text:"\u5EFA\u9020\u9632\u5FA1\u70AE\u5854",check:Be("turret")},{text:"\u51FB\u9000\u9508\u8680\u86DB",check:()=>f.stats.kills>=6,prog:()=>`${Math.min(f.stats.kills,6)}/6`}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u2026\u2026\u7B2C\u4E00\u6279\u79FB\u6C11\u5B89\u5168\u7740\u9646\u4E86\u3002\u6211\u8FD9\u8FB9\u7684\u63A7\u5236\u5BA4\u91CC\uFF0C\u6240\u6709\u4EBA\u90FD\u7AD9\u8D77\u6765\u9F13\u638C\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u5730\u8D28\u96F7\u8FBE\u5728\u591C\u95F4\u63A2\u6D4B\u5230\u5927\u91CF\u5730\u4E0B\u79FB\u52A8\u4FE1\u53F7\u3002\u5B83\u4EEC\u4F3C\u4E4E\u88AB\u6B96\u6C11\u5730\u7684\u70ED\u91CF\u5438\u5F15\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5EFA\u4E00\u5EA7\u5236\u9020\u5DE5\u574A\uFF0C\u9020\u6B66\u5668\uFF0C\u5EFA\u70AE\u5854\u3002\u5B88\u4F4F\u5927\u5BB6\u3002"]]},{title:"\u7B2C\u56DB\u7AE0 \xB7 \u624E\u6839",sub:"\u8BA9\u706F\u706B\u5F7B\u591C\u4E0D\u7184",goals:[{text:"\u6B96\u6C11\u5730\u4EBA\u53E3\u8FBE\u5230 12",check:()=>f.colony.pop>=12,prog:()=>`${f.colony.pop}/12`},{text:"\u91C7\u96C6\u949B\u77FF",...gs("titanium",12)},{text:"\u5EFA\u9020\u805A\u53D8\u53CD\u5E94\u5806",check:Be("reactor")}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u4F60\u4EEC\u6491\u8FC7\u4E86\u957F\u591C\u3002\u73B0\u5728\uFF0C\u662F\u65F6\u5019\u8BA9\u6B96\u6C11\u5730\u771F\u6B63\u624E\u6839\u4E86\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5728\u8FDC\u65B9\u7684\u7D2B\u8272\u6676\u4F53\u77FF\u8109\u4E2D\u68C0\u6D4B\u5230\u9AD8\u7EAF\u5EA6\u949B\u3002\u6CE8\u610F\uFF1A\u90A3\u91CC\u6709\u4F53\u578B\u66F4\u5927\u7684\u9508\u8680\u86DB\u5B88\u536B\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u63D0\u793A\uFF1A\u5728\u5236\u9020\u5DE5\u574A\u53EF\u4EE5\u9020\u55B7\u6C14\u80CC\u5305\u548C\u5927\u5BB9\u91CF\u6C27\u6C14\u7F50\uFF0C\u9002\u5408\u957F\u9014\u52D8\u63A2\u3002"]]},{title:"\u7B2C\u4E94\u7AE0 \xB7 \u65B0\u5BB6\u56ED",sub:"\u6B64\u5FC3\u5B89\u5904\u662F\u543E\u4E61",goals:[{text:"\u5EFA\u9020\u5927\u6C14\u6539\u9020\u5854",check:Be("terraformer")},{text:"\u6B96\u6C11\u5730\u4EBA\u53E3\u8FBE\u5230 20",check:()=>f.colony.pop>=20,prog:()=>`${f.colony.pop}/20`},{text:"\u5B8C\u6210\u5927\u6C14\u6539\u9020",check:()=>f.terraform>=1&&f.ended&&!f.endingShown,prog:()=>`${Math.floor(f.terraform*100)}%`}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u805A\u53D8\u53CD\u5E94\u5806\u70B9\u706B\u6210\u529F\u3002\u6B96\u6C11\u5730\u7B2C\u4E00\u6B21\u5728\u591C\u91CC\u4E5F\u706F\u706B\u901A\u660E\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u6700\u540E\u4E00\u6B65\u4E86\u3002\u5927\u6C14\u6539\u9020\u5854\u2014\u2014\u5B83\u8981\u51E0\u5341\u5E74\u624D\u80FD\u5F7B\u5E95\u6539\u53D8\u706B\u661F\u3002\u4F46\u7B2C\u4E00\u573A\u96E8\uFF0C\u4E5F\u8BB8\u5C31\u5728\u660E\u5929\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u63D0\u793A\uFF1A\u57CE\u5E02\u7B49\u7EA7\u63D0\u5347\u540E\u9886\u5730\u4F1A\u6269\u5927\uFF0C\u5E76\u89E3\u9501\u516C\u5BD3\u5854\u3001\u5782\u76F4\u519C\u573A\u3001\u751F\u6001\u4E2D\u67A2\u3002"]]},{title:"\u7B2C\u516D\u7AE0 \xB7 \u661F\u8FB0\u5927\u6D77",sub:"\u4E0B\u4E00\u9897\u661F\u7403",goals:[qs(5),{text:"\u5EFA\u9020\u661F\u9645\u53D1\u5C04\u53F0",check:Be("launch")},vm],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u706B\u661F\u5DF2\u7ECF\u662F\u5BB6\u4E86\u3002\u4F46\u4EBA\u7C7B\u7684\u6545\u4E8B\uFF0C\u4ECE\u6765\u4E0D\u6B62\u4E8E\u4E00\u4E2A\u5BB6\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u6728\u536B\u4E8C\xB7\u6B27\u7F57\u5DF4\uFF1A\u51B0\u58F3\u4E4B\u4E0B\u63A2\u6D4B\u5230\u6DB2\u6001\u6D77\u6D0B\u3002\u628A\u706B\u661F\u53D1\u5C55\u6210\u300C\u661F\u6E2F\u300D\uFF0C\u5C31\u80FD\u5EFA\u9020\u661F\u9645\u53D1\u5C04\u53F0\u3002"]]}],E1=[{title:"\u7B2C\u4E00\u7AE0 \xB7 \u51B0\u539F",sub:"\u5728\u6728\u661F\u7684\u6CE8\u89C6\u4E0B",goals:[{text:"\u91C7\u96C6\u6C34\u51B0",...gs("ice",15)},{text:"\u91C7\u96C6\u94C1\u77FF",...gs("iron",10)},{text:"\u5EFA\u9020\u5236\u6C27\u7AD9",check:Be("oxygen")},{text:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",check:Be("habitat")},{text:"\u5EFA\u9020\u7740\u9646\u573A",check:Be("beacon")}],radio:[["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u7740\u9646\u6210\u529F\u3002\u8868\u9762\u6E29\u5EA6\u96F6\u4E0B 160 \u6444\u6C0F\u5EA6\u3002\u91CD\u529B\u53EA\u6709\u5730\u7403\u7684\u4E03\u5206\u4E4B\u4E00\u3002"],["\u706B\u661F\u6B96\u6C11\u5730 \xB7 \u6797\u6653","\u4F60\u5230\u4E86\u5417\uFF1F\u6211\u4EEC\u5728\u706B\u661F\u4E0A\u770B\u5F97\u89C1\u6728\u661F\u7684\u5149\u70B9\u3002\u66FF\u6211\u4EEC\u770B\u4E00\u773C\u5B83\u7684\u5927\u7EA2\u6591\u5427\u3002"],["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u6CE8\u610F\uFF1A\u8FD9\u91CC\u79BB\u592A\u9633\u592A\u8FDC\uFF0C\u592A\u9633\u80FD\u6548\u7387\u53EA\u6709\u706B\u661F\u7684\u4E00\u534A\u3002\u6240\u6709\u6280\u672F\u5DF2\u4ECE\u706B\u661F\u540C\u6B65\u3002"]]},{title:"\u7B2C\u4E8C\u7AE0 \xB7 \u51B0\u4E0B\u4E4B\u57CE",sub:"\u6D77\u6D0B\u4E4B\u4E0A\u7684\u706F\u706B",goals:[Fc(8),qs(2),{text:"\u5EFA\u9020\u805A\u53D8\u53CD\u5E94\u5806",check:Be("reactor")}],radio:[["\u5468\u9752\u79BE \xB7 \u6C34\u6587\u5B66\u5BB6","\u51B0\u5C42\u4E0B\u7684\u6D77\u6D0B\u6BD4\u5730\u7403\u6240\u6709\u6D77\u6D0B\u52A0\u8D77\u6765\u8FD8\u591A\u3002\u6709\u6C34\uFF0C\u5C31\u6709\u751F\u547D\u3002"],["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u51B0\u88C2\u7F1D\u91CC\u6709\u4E1C\u897F\u5728\u79FB\u52A8\u3002\u5B83\u4EEC\u548C\u706B\u661F\u7684\u9508\u8680\u86DB\u5F88\u50CF\u2026\u2026\u4F46\u662F\u84DD\u8272\u7684\u3002"]]},{title:"\u7B2C\u4E09\u7AE0 \xB7 \u6DF1\u6E0A\u4E4B\u5149",sub:"\u57CE\u5E02\u5728\u51B0\u539F\u4E0A\u751F\u957F",goals:[qs(3),Fc(24),{text:"\u5EFA\u9020\u751F\u6001\u4E2D\u67A2",check:Be("lifehub")}],radio:[["Elena Petrova \xB7 \u5929\u6587\u5B66\u5BB6","\u4F60\u77E5\u9053\u5417\uFF1F\u4ECE\u8FD9\u91CC\u770B\uFF0C\u592A\u9633\u53EA\u662F\u4E00\u9897\u7279\u522B\u4EAE\u7684\u661F\u661F\u3002"]]},{title:"\u7B2C\u56DB\u7AE0 \xB7 \u4E0B\u4E00\u7AD9",sub:"\u4E00\u5343\u4E8C\u767E\u5149\u5E74",goals:[qs(4),{text:"\u5EFA\u9020\u661F\u9645\u53D1\u5C04\u53F0",check:Be("launch")},vm],radio:[["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u5F00\u666E\u52D2-442b\uFF1A\u4F4D\u4E8E\u5B9C\u5C45\u5E26\u7684\u7C7B\u5730\u884C\u661F\uFF0C\u8DDD\u79BB\u4E00\u5343\u4E8C\u767E\u5149\u5E74\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u8FD9\u5C06\u662F\u4EBA\u7C7B\u7B2C\u4E00\u6B21\u79BB\u5F00\u592A\u9633\u7CFB\u3002\u6211\u8001\u4E86\uFF0C\u7B49\u4E0D\u5230\u4F60\u4EEC\u62B5\u8FBE\u7684\u90A3\u5929\u3002\u4F46\u6211\u4F1A\u4E00\u76F4\u770B\u7740\u661F\u7A7A\u3002"]]}],b1=[{title:"\u7B2C\u4E00\u7AE0 \xB7 \u53CC\u65E5\u4E4B\u4E0B",sub:"\u53E6\u4E00\u9897\u6052\u661F\u7684\u6668\u5149",goals:[{text:"\u91C7\u96C6\u94C1\u77FF",...gs("iron",15)},{text:"\u91C7\u96C6\u7845\u6676",...gs("silicon",10)},{text:"\u5EFA\u9020\u5236\u6C27\u7AD9",check:Be("oxygen")},{text:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",check:Be("habitat")},{text:"\u5EFA\u9020\u7740\u9646\u573A",check:Be("beacon")}],radio:[["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u51B7\u51BB\u4F11\u7720\u7ED3\u675F\u3002\u5F53\u524D\u65E5\u671F\uFF1A\u516C\u5143 2401 \u5E74\u3002\u6B22\u8FCE\u6765\u5230\u5F00\u666E\u52D2-442b\u3002"],["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u5927\u6C14\u542B\u6C27 14%\uFF0C\u8FD8\u4E0D\u591F\u547C\u5438\uFF0C\u4F46\u5DF2\u7ECF\u975E\u5E38\u63A5\u8FD1\u4E86\u3002\u8FD9\u91CC\u7684\u91CD\u529B\u6BD4\u5730\u7403\u7565\u5927\u3002"]]},{title:"\u7B2C\u4E8C\u7AE0 \xB7 \u5F02\u661F\u68EE\u6797",sub:"\u4F1A\u53D1\u5149\u7684\u6811",goals:[Fc(10),qs(2),{text:"\u5EFA\u9020\u805A\u53D8\u53CD\u5E94\u5806",check:Be("reactor")}],radio:[["Aiko Sato \u7684\u540E\u4EE3 \xB7 \u751F\u7269\u5B66\u5BB6","\u90A3\u4E9B\u4F1E\u83C7\u6811\u5728\u591C\u91CC\u4F1A\u53D1\u5149\u3002\u6211\u7684\u66FE\u66FE\u7956\u6BCD\u4E00\u5B9A\u4F1A\u559C\u6B22\u8FD9\u91CC\u3002"],["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u68EE\u6797\u4E2D\u7684\u63A0\u98DF\u8005\u4F1A\u5728\u591C\u95F4\u51FA\u6CA1\u3002"]]},{title:"\u7B2C\u4E09\u7AE0 \xB7 \u6587\u660E",sub:"\u57CE\u5E02\u8FDE\u6210\u4E86\u661F\u6CB3",goals:[qs(4),Fc(36),{text:"\u5EFA\u9020\u751F\u6001\u4E2D\u67A2",check:Be("lifehub")}],radio:[["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u6765\u81EA\u706B\u661F\u548C\u6B27\u7F57\u5DF4\u7684\u4FE1\u53F7\u5DF2\u7ECF\u62B5\u8FBE\u2014\u2014\u5B83\u4EEC\u5728\u4E00\u5343\u4E8C\u767E\u5E74\u524D\u53D1\u51FA\u3002\u4E24\u5EA7\u57CE\u5E02\u90FD\u8FD8\u4EAE\u7740\u3002"]]},{title:"\u7EC8\u7AE0 \xB7 \u661F\u9645\u6587\u660E",sub:"\u4E09\u9897\u661F\u7403\uFF0C\u4E00\u4E2A\u4EBA\u7C7B",goals:[qs(5),{text:"\u5EFA\u9020\u6587\u660E\u7EAA\u5FF5\u7891",check:Be("monument")}],radio:[["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u5EFA\u4E00\u5EA7\u7EAA\u5FF5\u7891\u5427\u3002\u732E\u7ED9\u7B2C\u4E00\u4E2A\u8E0F\u4E0A\u706B\u661F\u7684\u4EBA\u2014\u2014\u4E5F\u5C31\u662F\u4F60\u3002"]]}],kn=Qt==="europa"?E1:Qt==="kepler"?b1:M1,_m=Qt==="mars"?2:1,Kr={rifle:{name:"\u7B49\u79BB\u5B50\u6B65\u67AA",icon:"rifle",cost:{iron:18,silicon:12},desc:"\u6309 2 \u5207\u6362\u3002\u6D88\u8017\u80FD\u91CF\u53D1\u5C04\u7B49\u79BB\u5B50\u5F39\u3002"},tank:{name:"\u5927\u5BB9\u91CF\u6C27\u6C14\u7F50",icon:"tank",cost:{iron:12,ice:10},desc:"\u5B87\u822A\u670D\u6C27\u6C14\u4E0A\u9650 100 \u2192 180\u3002"},rover:{name:"\u52A0\u538B\u6F2B\u6E38\u8F66",icon:"rover",cost:{iron:35,silicon:20,ice:5},desc:"\u5728\u5DE5\u574A\u65C1\u51FA\u5382\u3002\u6309 E \u4E0A\u8F66\uFF0CShift \u52A0\u901F\u3002\u8F66\u8231\u5185\u81EA\u52A8\u8865\u6C27\uFF0C\u8FD8\u80FD\u649E\u98DE\u9508\u8680\u86DB\u3002"},scanner:{name:"\u5730\u8D28\u626B\u63CF\u4EEA",icon:"scanner",cost:{iron:8,silicon:10},desc:"\u5C0F\u5730\u56FE\u8303\u56F4\u6269\u5927\uFF0C\u7F57\u76D8\u6807\u51FA\u6700\u8FD1\u7684\u949B\u77FF\u3002"},jetpack:{name:"\u55B7\u6C14\u80CC\u5305",icon:"jet",cost:{iron:20,silicon:15,titanium:4},desc:"\u7A7A\u4E2D\u6309\u4F4F\u7A7A\u683C\u98DE\u884C\uFF0C\u6D88\u8017\u80FD\u91CF\u3002"},overclock:{name:"\u6FC0\u5149\u8D85\u9891",icon:"bolt2",cost:{silicon:20,titanium:3},desc:"\u91C7\u77FF\u901F\u5EA6 \xD72\uFF0C\u6FC0\u5149\u4F24\u5BB3\u63D0\u5347\u3002"},armor:{name:"\u590D\u5408\u88C5\u7532",icon:"armor",cost:{iron:30,titanium:6},desc:"\u751F\u547D\u4E0A\u9650 150\uFF0C\u53D7\u5230\u4F24\u5BB3 -40%\u3002"},rifle2:{name:"\u805A\u7126\u7EBF\u5708",icon:"focus",cost:{silicon:18,titanium:6},need:"rifle",desc:"\u7B49\u79BB\u5B50\u6B65\u67AA\u4F24\u5BB3 +60%\u3002"}},$u=[],Jr=null,Wu=0;function $e(n,t){$u.push([n,t])}function Mm(){return Jr}var Xu=0,$s=200,zi="calm",Nc=0,qu=!1;function Em(n){if(Jr&&(Wu-=n,Wu<=0&&(Jr=null)),!Jr&&$u.length&&(Jr=$u.shift(),Wu=3.5+Jr[1].length*.11,st.play("radio")),Xu-=n,Xu<=0&&f.chapter<kn.length){Xu=.5;let i=kn[f.chapter];f.goalDone=f.goalDone||{};let s=!0;i.goals.forEach((r,o)=>{let a=f.chapter+":"+o;r.check()&&!f.goalDone[a]&&(f.goalDone[a]=!0,st.play("objective"),f.events.emit("toast",`\u2713 ${r.text}`)),f.goalDone[a]||(s=!1)}),s&&f.chapter<kn.length-1&&Jo(f.chapter+1)}f.buildings.find(i=>i.type==="terraformer"&&i.powered)&&f.terraform<1&&(f.terraform=Math.min(1,f.terraform+n/300),f.terraform>=1&&!qu&&(qu=!0,f.events.emit("ending"))),f.raining=(f.terraform>=1||Qt==="kepler")&&Math.sin(f.time.t*Math.PI*4+f.time.day*1.7)>.45,xt.storms&&f.time.day>=2&&f.terraform<.7&&($s-=n,zi==="calm"&&$s<=0&&f.time.night<.5?(zi="warn",$s=25,$e("\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u6C99\u5C18\u66B4\u5C06\u5728 25 \u79D2\u540E\u62B5\u8FBE\u3002\u80FD\u89C1\u5EA6\u4F1A\u6025\u5267\u4E0B\u964D\uFF0C\u6C27\u6C14\u6D88\u8017\u52A0\u5FEB\u3002\u9760\u8FD1\u751F\u547D\u7EF4\u6301\u8BBE\u65BD\u3002")):zi==="warn"&&$s<=0?(zi="storm",Nc=70+Math.random()*40):zi==="storm"&&(Nc-=n,Nc<=0&&(zi="calm",$s=360+Math.random()*300,$e("\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u6C99\u5C18\u66B4\u5DF2\u8FC7\u5883\u3002"))));let e=zi==="storm"?1:0;f.storm+=(e-f.storm)*Math.min(1,n*.25),f.storm<.001&&(f.storm=0)}function Jo(n,t=!1){f.chapter=n;let e=kn[n];t||(st.play("chapter"),f.events.emit("chapter",e),e.radio.forEach(i=>$e(i[0],i[1])))}function bm(){return{phase:zi,t:$s,left:Nc}}function Sm(n){n&&(zi=n.phase==="storm"?"calm":n.phase,$s=n.t??200)}function wm(n){qu=n}var kc=[],S1={player:6743807,turret:16756800};function zc(n,t,e,i){let s=ie(S1[i],i==="player"?1.1:.9,f.scene);s.position.copy(n),kc.push({pos:n.clone(),vel:t.clone().multiplyScalar(i==="player"?110:80),life:1.4,dmg:e,owner:i,s})}function w1(n,t=0){for(let e of f.enemies){if(e.dead)continue;let i=1.3*e.scale+t,s=n.x-e.pos.x,r=n.y-(e.pos.y+1*e.scale),o=n.z-e.pos.z;if(s*s+r*r+o*o<i*i)return e}return null}function Rm(n){for(let t=kc.length-1;t>=0;t--){let e=kc[t];e.life-=n;let i=e.life<=0,s=3;for(let r=0;r<s&&!i;r++){e.pos.addScaledVector(e.vel,n/s);let o=w1(e.pos);o?(Ko(o,e.dmg,e.owner),gt.spark(e.pos,[.5,.9,1],10,6),i=!0):e.pos.y<Et(e.pos.x,e.pos.z)&&(gt.spark(e.pos,[1,.7,.4],6,4),gt.dustPuff(e.pos,3,.5),i=!0)}e.s.position.copy(e.pos),Math.random()<.8&&gt.trail(e.pos,e.owner==="player"?[.3,.8,1]:[1,.6,.2],.6),i&&(f.scene.remove(e.s),kc.splice(t,1))}}function Yu(n,t,e=!1,i=!1){let s=i?3.4:e?1.35:.85+Math.random()*.35,r=kp(s),o=Et(n,t);r.group.position.set(n,o,t),f.scene.add(r.group);let a=i?1300+f.time.day*40:e?90:36+f.time.day*3,c={...r,pos:r.group.position,hp:a,maxHp:a,scale:s,guardian:e,home:e?new T(n,o,t):null,boss:i,stomp:4,awake:!e,speed:i?3.4:(e?5.2:4.4)+Math.random()*1.2,phase:Math.random()*6,atk:0,flash:0,sink:0,target:null,retarget:0};return f.enemies.push(c),c}function Ko(n,t,e){n.dead||(n.hp-=t,n.flash=.12,n.awake=!0,e==="player"&&st.play("hit"),n.hp<=0&&T1(n,e))}function T1(n,t){n.dead=!0;let e=n.pos.clone();if(e.y+=1,gt.burst(e,[1,.4,.1],50,9),gt.dustPuff(e,12,2),gt.debris(e,n.legs[0].children[0].material,6,5,.45*n.scale),gt.debris(e,n.inner.children[1].material,8,6,.5*n.scale),st.play("kill"),f.scene.remove(n.group),f.stats.kills++,n.guardian&&(f.stats.guardKills=(f.stats.guardKills||0)+1),n.boss){f.stats.bossKills=(f.stats.bossKills||0)+1,f.res.titanium+=40,f.res.silicon+=40,f.events.emit("pickup",{type:"titanium",n:40,note:"\u6676\u6BCD\u6838\u5FC3"}),f.events.emit("bossDown"),gt.burst(e,[1,.5,.15],200,20),gt.ring(new T(n.pos.x,n.pos.y,n.pos.z),4,120,[1,.5,.2]),gt.debris(e,n.inner.children[1].material,30,12,1.4),st.play("rumble");return}let i=n.guardian?3:Math.random()<.5?1:0;i&&(f.res.titanium+=i,f.stats.mined.titanium+=i,f.events.emit("pickup",{type:"titanium",n:i,note:"\u6676\u4F53\u6B8B\u9AB8"}))}var Zu=0,Ys=0,Tm=!1,Ju=5,Oc=-1;function Cm(){return f.enemies.find(n=>n.boss&&!n.dead)}function Am(){if(!f.buildings.length)return new T(0,0,0);let n=new T;for(let t of f.buildings)n.x+=t.x,n.z+=t.z;return n.multiplyScalar(1/f.buildings.length)}function Im(n){let t=f.player.pos,e=f.time.night>.6,i=f.chapter>=_m&&f.terraform<1;if(e&&!Tm&&i){Ys=Math.min(3+(f.nightsSurvived||0)*2+Math.floor(f.colony.pop/4),26);let r=(f.nightsSurvived||0)%4===3;r&&(Ys=Math.min(Math.round(Ys*1.8),40),Oc=25),f.nightsSurvived=(f.nightsSurvived||0)+1,f.events.emit(r?"tide":"nightfall",Ys)}if(Tm=e,Oc>0&&e&&(Oc-=n,Oc<=0)){let r=Am(),o=Math.random()*Math.PI*2,a=Fe.clamp(r.x+Math.cos(o)*130,-Ht+180,Ht-180),c=Fe.clamp(r.z+Math.sin(o)*130,-Ht+180,Ht-180),l=Yu(a,c,!1,!0);l.sink=-6,gt.ring(new T(a,Et(a,c),c),6,140),gt.dustPuff(new T(a,Et(a,c),c),60,12),st.play("rumble"),f.events.emit("bossSpawn")}if(e&&i&&Ys>0&&(Zu-=n,Zu<=0)){Zu=3+Math.random()*5;let r=Am(),o=Math.min(Ys,1+Math.floor(Math.random()*3)),a=Math.random()*Math.PI*2,c=110+Math.random()*50;for(let l=0;l<o;l++){let h=Fe.clamp(r.x+Math.cos(a)*c+(Math.random()-.5)*10,-Ht+180,Ht-180),u=Fe.clamp(r.z+Math.sin(a)*c+(Math.random()-.5)*10,-Ht+180,Ht-180),d=Yu(h,u);d.sink=-2,gt.dustPuff(new T(h,Et(h,u),u),14,3)}Ys-=o}if(Ju-=n,Ju<=0){Ju=30;for(let r of f.nodes){if(r.type!=="titanium"||Math.hypot(r.x-t.x,r.z-t.z)<90)continue;if(!f.enemies.some(a=>a.guardian&&!a.dead&&a.home.distanceTo(r.mesh.position)<25)&&f.terraform<1){let a=Math.random()*6.28;Yu(r.x+Math.cos(a)*6,r.z+Math.sin(a)*6,!0)}}}let s=performance.now()*.001;for(let r=f.enemies.length-1;r>=0;r--){let o=f.enemies[r];if(o.dead){f.enemies.splice(r,1);continue}if(!o.guardian&&(f.time.night<.3||f.terraform>=1)){o.sink-=n*1.5,o.group.position.y=Et(o.pos.x,o.pos.z)+o.sink,o.sink<-3&&(f.scene.remove(o.group),f.enemies.splice(r,1));continue}o.sink<0&&(o.sink=Math.min(0,o.sink+n*1.5));let a=Math.hypot(t.x-o.pos.x,t.z-o.pos.z);if(o.retarget-=n,o.retarget<=0)if(o.retarget=1,o.target=null,o.guardian)a<22&&(o.awake=!0),o.awake&&a<70&&!f.player.dead?o.target={kind:"player"}:(o.awake=!1,o.target={kind:"home"});else if(a<32&&!f.player.dead)o.target={kind:"player"};else{let m=null,_=400;for(let M of f.buildings){if(M.type==="lamp"||M.broken)continue;let v=Math.hypot(M.x-o.pos.x,M.z-o.pos.z)-M.def.r;v<_&&(_=v,m=M)}o.target=m?{kind:"building",b:m}:{kind:"player"}}let c=t.x,l=t.z,h=1.8*o.scale,u=o.target;if(u?.kind==="building"){if(!f.buildings.includes(u.b)||u.b.broken){o.retarget=0;continue}c=u.b.x,l=u.b.z,h=u.b.def.r*.9+1.4}else u?.kind==="home"&&(c=o.home.x,l=o.home.z,h=2);let d=c-o.pos.x,p=l-o.pos.z,x=Math.hypot(d,p),y=!1;if(x>h){d/=x,p/=x;for(let M of f.enemies){if(M===o)continue;let v=o.pos.x-M.pos.x,I=o.pos.z-M.pos.z,A=Math.hypot(v,I);A<2.5&&A>.01&&(d+=v/A*.6,p+=I/A*.6)}let m=Math.hypot(d,p)||1,_=o.speed*(o.target?.kind==="home"?.5:1);o.pos.x+=d/m*_*n,o.pos.z+=p/m*_*n;for(let M of f.colliders.query(o.pos.x,o.pos.z)){if(M.kind!=="building")continue;let v=o.pos.x-M.x,I=o.pos.z-M.z,A=Math.hypot(v,I),C=M.r+.8;A<C&&A>.01&&(o.pos.x=M.x+v/A*C,o.pos.z=M.z+I/A*C)}o.group.rotation.y=Math.atan2(d,p),y=!0}else u&&u.kind!=="home"&&(o.group.rotation.y=Math.atan2(d,p),o.atk-=n,o.atk<=0&&(o.atk=1,u.kind==="player"?f.player.damage(o.boss?30:o.guardian?14:9,o.pos):(u.b.hp-=o.boss?70:o.guardian?20:8,gt.spark(new T(o.pos.x,o.pos.y+1,o.pos.z),[1,.5,.2],8,5),u.b.hp<=0&&(u.b.hp=0,u.b.broken=!0,o.retarget=0,f.events.emit("broken",u.b),ki())),o.inner.position.z=.6));if(o.boss){o.stomp-=n;let m=Math.hypot(t.x-o.pos.x,t.z-o.pos.z);o.stomp<=0&&m<22&&(o.stomp=4.5,gt.ring(new T(o.pos.x,o.pos.y,o.pos.z),3,100,[.9,.45,.25]),st.play("rumble"),f.player.landDip=Math.max(f.player.landDip,.35),m<13&&!f.driving&&(f.player.damage(18,o.pos),f.player.vel.y=4,f.player.vel.x+=(t.x-o.pos.x)/m*8,f.player.vel.z+=(t.z-o.pos.z)/m*8))}o.inner.position.z*=.85,o.pos.y=Et(o.pos.x,o.pos.z)+o.sink;let g=s*(y?12:2)+o.phase;for(let m of o.legs)m.rotation.x=Math.sin(g+m.userData.phase)*(y?.5:.08),m.rotation.z=Math.max(0,Math.cos(g+m.userData.phase))*.25*m.userData.side*(y?1:0);o.inner.position.y=Math.abs(Math.sin(g))*.08,o.flash>0?(o.flash-=n,o.inner.scale.setScalar(1+o.flash*1.2)):o.inner.scale.setScalar(1),Math.random()<n*4&&gt.trail(new T(o.pos.x,o.pos.y+1.6*o.scale,o.pos.z),[1,.35,.1],.8)}}function jr(n,t,e){let i=null,s=e,r=new T;for(let o of f.enemies){if(o.dead)continue;let a=1.3*o.scale;r.set(o.pos.x-n.x,o.pos.y+1*o.scale-n.y,o.pos.z-n.z);let c=r.dot(t);if(c<0)continue;let l=r.lengthSq()-c*c;if(l>a*a)continue;let h=c-Math.sqrt(a*a-l);h<s&&(s=h,i=o)}return i?{e:i,dist:s}:null}var at={keys:new Set,mouse:[!1,!1,!1],dx:0,dy:0,wheel:0,pressed:new Set,clicked:[!1,!1,!1],sens:.0022,down(n){return this.keys.has(n)},hit(n){return this.pressed.has(n)},endFrame(){this.pressed.clear(),this.dx=0,this.dy=0,this.wheel=0,this.clicked=[!1,!1,!1]}};function Pm(n){window.addEventListener("keydown",t=>{t.code==="Tab"&&t.preventDefault(),at.keys.has(t.code)||at.pressed.add(t.code),at.keys.add(t.code)}),window.addEventListener("keyup",t=>at.keys.delete(t.code)),window.addEventListener("blur",()=>{at.keys.clear(),at.mouse=[!1,!1,!1]}),window.addEventListener("mousemove",t=>{f.locked&&(at.dx+=t.movementX||0,at.dy+=t.movementY||0)}),n.addEventListener("mousedown",t=>{f.locked&&(at.mouse[t.button]=!0,at.clicked[t.button]=!0)}),window.addEventListener("mouseup",t=>{at.mouse[t.button]=!1}),window.addEventListener("wheel",t=>{f.locked&&(at.wheel+=Math.sign(t.deltaY))},{passive:!0}),window.addEventListener("contextmenu",t=>t.preventDefault())}var A1=xt.gravity,Lm=1.7,Pe=new T(-6,0,-6),Bc=class{constructor(t){this.cam=t,this.pos=new T(0,0,6),this.pos.y=Et(this.pos.x,this.pos.z),this.vel=new T,this.yaw=Math.PI*.85,this.pitch=-.05,this.onGround=!0,this.maxHealth=100,this.health=100,this.maxO2=100,this.o2=100,this.energy=100,this.bob=0,this.stepT=0,this.landDip=0,this.dead=!1,this.hurtT=0,this.flashlight=!1,this.inLife=!1,this.alarmT=0,this.lastHitDir=0,this.moving=!1,this.sprinting=!1,this.jetting=!1,this.roll=0,this.fwd=new T}get eye(){return new T(this.pos.x,this.pos.y+Lm+this.bobY,this.pos.z)}damage(t,e){if(this.dead)return;let i=f.upgrades.armor?.6:1;this.health-=t*i,this.hurtT=.5,e&&(this.lastHitDir=Math.atan2(e.x-this.pos.x,e.z-this.pos.z)),st.play("hurt"),this.health<=0&&this.die("\u4F60\u5012\u5728\u4E86\u706B\u661F\u7684\u5C18\u571F\u91CC")}die(t){this.dead||(this.dead=!0,this.health=0,f.events.emit("death",t))}respawn(){let t=f.buildings.find(i=>i.type==="habitat")||null,e=t?new T(t.x,0,t.z+9):Pe.clone().add(new T(5,0,8));for(let i in f.res)f.res[i]=Math.floor(f.res[i]*.75);this.pos.set(e.x,Et(e.x,e.z),e.z),this.vel.set(0,0,0),this.health=this.maxHealth,this.o2=this.maxO2,this.energy=100,this.dead=!1}update(t){if(this.maxO2=f.upgrades.tank?180:100,this.maxHealth=f.upgrades.armor?150:100,this.dead){this.cam.position.y-=t*.3;return}f.locked&&(this.yaw-=at.dx*at.sens,this.pitch=Fe.clamp(this.pitch-at.dy*at.sens,-1.5,1.5));let e=0,i=0;f.menuOpen||((at.down("KeyW")||at.down("ArrowUp"))&&(i-=1),(at.down("KeyS")||at.down("ArrowDown"))&&(i+=1),(at.down("KeyA")||at.down("ArrowLeft"))&&(e-=1),(at.down("KeyD")||at.down("ArrowRight"))&&(e+=1));let s=Math.hypot(e,i);this.moving=s>0,this.sprinting=this.moving&&at.down("ShiftLeft")&&i<0&&this.o2>5;let r=this.sprinting?10.5:6.2,o=Math.sin(this.yaw),a=Math.cos(this.yaw),c=0,l=0;if(s){let _=e/s,M=i/s;c=_*a+M*o,l=-_*o+M*a}let h=this.onGround?12:2.5;if(this.vel.x+=(c*r-this.vel.x)*Math.min(1,h*t),this.vel.z+=(l*r-this.vel.z)*Math.min(1,h*t),this.jetting=!1,!f.menuOpen&&at.hit("Space")&&this.onGround)this.vel.y=5.4,this.onGround=!1,st.play("jump");else if(!f.menuOpen&&at.down("Space")&&!this.onGround&&f.upgrades.jetpack&&this.energy>1&&this.vel.y<6){this.vel.y+=15*t,this.energy-=22*t,this.jetting=!0,Math.random()<.5&&st.play("jet");let _=new T(this.pos.x+o*.4,this.pos.y+.8,this.pos.z+a*.4);gt.flame(_),gt.flame(_)}this.vel.y-=A1*t;let u=this.pos.x+this.vel.x*t,d=this.pos.z+this.vel.z*t;this.pos.x=Fe.clamp(u,-Ht+120,Ht-120),this.pos.z=Fe.clamp(d,-Ht+120,Ht-120),this.pos.y+=this.vel.y*t;for(let _ of f.colliders.query(this.pos.x,this.pos.z)){let M=this.pos.x-_.x,v=this.pos.z-_.z,I=Math.hypot(M,v),A=_.r+.45;if(I<A&&I>1e-4){if(_.kind==="rock"&&this.pos.y>Et(_.x,_.z)+_.r*.6)continue;this.pos.x=_.x+M/I*A,this.pos.z=_.z+v/I*A}}let p=Et(this.pos.x,this.pos.z);this.pos.y<=p?(!this.onGround&&this.vel.y<-4&&(this.landDip=Math.min(.35,-this.vel.y*.04),st.play("land"),gt.dustPuff(this.pos,6,1)),this.pos.y=p,this.vel.y=0,this.onGround=!0):this.onGround&&this.pos.y-p<.5&&this.vel.y<=0?(this.pos.y=p,this.vel.y=0):this.onGround=!1;let x=Math.hypot(this.vel.x,this.vel.z);this.onGround&&x>.5&&(this.bob+=t*x*1.25,this.stepT+=t*x,this.stepT>2.6&&(this.stepT=0,st.play("step"),Math.random()<.4&&gt.dustPuff(this.pos,2,.4))),this.landDip*=Math.pow(.002,t),this.bobY=Math.sin(this.bob*2)*.05*Math.min(1,x/6)-this.landDip,this.cam.position.set(this.pos.x,this.pos.y+Lm+this.bobY,this.pos.z),this.roll+=(-e*.025-this.roll)*Math.min(1,t*6);let y=(f.baseFov||72)+(this.sprinting?8:0)+(this.jetting?4:0);Math.abs(this.cam.fov-y)>.05&&(this.cam.fov+=(y-this.cam.fov)*Math.min(1,t*5),this.cam.updateProjectionMatrix()),this.cam.rotation.set(this.pitch,this.yaw,this.roll+Math.sin(this.bob)*.006*Math.min(1,x/6),"YXZ"),this.cam.getWorldDirection(this.fwd);let g=fm(this.pos),m=this.pos.distanceTo(Pe)<11;if(this.inLife=!!g||m,this.inLife)this.o2=Math.min(this.maxO2,this.o2+30*t),this.health=Math.min(this.maxHealth,this.health+4*t);else{let _=.55+(this.sprinting?.6:0)+(this.jetting?.6:0);_*=1+f.storm*.8,f.terraform>=1&&(_*=.5),this.o2=Math.max(0,this.o2-_*t)}this.o2<=0&&(this.health-=9*t,this.health<=0&&this.die("\u6C27\u6C14\u8017\u5C3D")),this.o2<this.maxO2*.2&&!this.inLife&&(this.alarmT-=t,this.alarmT<=0&&(this.alarmT=2,st.play("alarm"))),this.jetting||(this.energy=Math.min(100,this.energy+(this.onGround?14:4)*t)),this.hurtT=Math.max(0,this.hurtT-t),this.health=Math.min(this.health,this.maxHealth)}};var ys=[{id:"laser",name:"\u91C7\u77FF\u6FC0\u5149",icon:"laser"},{id:"rifle",name:"\u7B49\u79BB\u5B50\u6B65\u67AA",icon:"rifle",need:"rifle"},{id:"build",name:"\u5EFA\u9020",icon:"build"}],Ve={index:0,get id(){return ys[this.index].id}},ii,R1=0,Zs=null,Qu,Bi,jo,xs={},Hi,Vi,no,eo,Qo,Dm=new T(.24,-.22,-.85);function Fm(n){Bi=new os,jo=new Xe(n.fov,n.aspect,.01,10),Bi.add(new ls(16769224,4202520,1.4));let t=new ui(16777215,1.5);t.position.set(1,2,1),Bi.add(t),Bi.userData.dl=t;let e=(v,I,A,C,P,S)=>{let b=new bt(v,I);return b.position.set(A,C,P),S.add(b),b},i=new ui(8965375,1.2);i.position.set(-2,1,2),Bi.add(i);let s=(v,I,A,C=20)=>{let P=new Ds(v.map(([S,b])=>new ot(S,b)),C);return P.rotateX(-Math.PI/2),e(P,I,0,0,0,A)},r=new Dt({color:15262940,roughness:.35,metalness:.15}),o=new Dt({color:2764083,roughness:.45,metalness:.7}),a=new Dt({color:16742954,roughness:.4,metalness:.2});Qu=new Dt({color:3346688,emissive:16747056,emissiveIntensity:1.2});let c=new Dt({color:8755,emissive:4515583,emissiveIntensity:1.5}),l=(v,I,A,C,P,S,b)=>{let L=e(new oe(v,v,I,16),A,C,P,S,b);return L.rotation.x=Math.PI/2,L},h=new jt;s([[0,-.12],[.04,-.12],[.056,-.08],[.058,.18],[.05,.26],[.036,.3],[.03,.36],[0,.36]],r,h),l(.06,.02,a,0,0,-.02,h),l(.06,.012,a,0,0,.1,h),l(.045,.06,o,0,0,.1+.04,h);for(let v=0;v<3;v++){let I=e(new Ye(.034-v*.003,.007,8,20),Qu,0,0,-.33-v*.035,h)}l(.018,.14,o,0,0,-.38,h);let u=e(new he(.02,12,8),new re({color:16760960}),0,0,-.455,h);e(new ne(.018,.016,.2),o,0,.062,-.05,h),l(.026,.17,a,.06,-.02,-.02,h),e(new ne(.032,.07,.045),o,0,-.075,.02,h).rotation.x=.3,e(new ne(.03,.02,.07),o,0,-.05,.02,h);let d=e(new Yn(.04,.025),new re({color:6743807}),-.0585,.012,.04,h);d.rotation.y=-Math.PI/2,h.userData.tip=u;let p=new jt;s([[0,-.2],[.04,-.2],[.055,-.15],[.055,.2],[.048,.28],[0,.28]],r,p),l(.035,.32,o,0,0,-.36,p);for(let v=0;v<4;v++)e(new Ye(.046,.009,8,20),c,0,0,-.27-v*.065,p);l(.05,.03,a,0,0,-.18,p),l(.022,.16,o,0,.075,-.02,p),e(new oe(.023,.023,.005,12),c,0,.075,-.1,p).rotation.x=Math.PI/2,e(new ne(.032,.07,.045),o,0,-.075,0,p).rotation.x=.3,e(new ne(.035,.09,.05),c,0,-.08,-.06,p);let x=new jt;e(new ne(.32,.22,.018),o,0,0,0,x),e(new ne(.33,.012,.022),a,0,.112,0,x);let y=document.createElement("canvas");y.width=256,y.height=176;let g=y.getContext("2d");g.fillStyle="#06222e",g.fillRect(0,0,256,176),g.strokeStyle="rgba(127,230,255,.25)";for(let v=0;v<256;v+=16)g.beginPath(),g.moveTo(v,0),g.lineTo(v,176),g.stroke();for(let v=0;v<176;v+=16)g.beginPath(),g.moveTo(0,v),g.lineTo(256,v),g.stroke();g.strokeStyle="#7fe6ff",g.lineWidth=2,g.beginPath(),g.arc(128,110,50,Math.PI,0),g.lineTo(178,140),g.lineTo(78,140),g.closePath(),g.stroke(),g.fillStyle="#7fe6ff",g.font="bold 14px sans-serif",g.fillText("BLUEPRINT",12,22);let m=new Zn(y);m.colorSpace=Ie;let _=e(new Yn(.29,.195),new re({map:m,transparent:!0,opacity:.95}),0,-.004,.01,x);x.userData.scr=_,x.rotation.set(-.5,.25,0),xs={laser:h,rifle:p,build:x};for(let v in xs)xs[v].scale.setScalar(v==="build"?.45:.6),xs[v].visible=!1,Bi.add(xs[v]);let M=new oe(1,1,1,8,1,!0);M.translate(0,.5,0),Hi=new bt(M,new re({color:16773328,transparent:!0,opacity:.95,blending:Ae,depthWrite:!1})),Vi=new bt(M,new re({color:16740384,transparent:!0,opacity:.45,blending:Ae,depthWrite:!1})),Hi.visible=Vi.visible=!1,Hi.frustumCulled=Vi.frustumCulled=!1,f.scene.add(Hi,Vi),no=ie(16748608,1.6,f.scene),no.visible=!1,ii=new lc(16747072,0,6,2),f.scene.add(ii),Qo=ie(6743807,.35,Bi),Qo.visible=!1,eo=new Ur(16773853,0,70,.42,.45,1.2),n.add(eo),eo.position.set(.3,-.2,0),eo.target.position.set(0,0,-10),n.add(eo.target),f.scene.add(n)}function Hc(n){let t=ys[n];if(t.need&&!f.upgrades[t.need]){f.events.emit("toast",`\u5C1A\u672A\u5236\u9020\uFF1A${t.name}\uFF08\u5728\u5236\u9020\u5DE5\u574A\u5236\u4F5C\uFF09`),st.play("deny");return}Ve.index===n&&t.id!=="build"||(Ve.index=n,st.play("ui"),t.id==="build"?f.events.emit("openBuild"):Xs(null))}var Qr=0,Ku=0,to=0,ju=0,Vc=0,Um=-1,C1=new T,I1=new T(0,1,0),io=new T;function Nm(n,t,e){let i=null,s=e;for(let r of f.nodes){let o=r.mesh.scale.x,a=1.5*o+.3;io.set(r.x-n.x,r.y+.7*o-n.y,r.z-n.z);let c=io.dot(t);if(c<0||c>e+a)continue;let l=io.lengthSq()-c*c;if(l>a*a)continue;let h=c-Math.sqrt(a*a-l);h<s&&(s=Math.max(.3,h),i=r)}return i?{n:i,dist:s}:null}function P1(n,t,e){let i=null,s=e;for(let r of f.buildings){let o=Math.max(1.2,r.def.r);io.set(r.x-n.x,r.y+Math.min(o,3)*.6-n.y,r.z-n.z);let a=io.dot(t);if(a<0)continue;let c=io.lengthSq()-a*a;if(c>o*o)continue;let l=a-Math.sqrt(o*o-c);l<s&&(s=l,i=r)}return i}function Om(n,t,e){let i=Ve.id;Um!==Ve.index&&(Vc=1,Um=Ve.index),Vc=Math.max(0,Vc-n*4);for(let p in xs)xs[p].visible=p===i;let s=xs[i],r=Math.hypot(t.vel.x,t.vel.z),o=Math.sin(t.bob)*.012*Math.min(1,r/6),a=Math.abs(Math.cos(t.bob))*.012*Math.min(1,r/6);to*=Math.pow(1e-4,n);let c=i==="build"?[.2,-.24,-.6]:[.24,-.22,-.58];s.position.set(c[0]+o,c[1]+a-Vc*.3-(t.sprinting?.04:0),c[2]+to*.08),s.rotation.x=(i==="build"?-.5:0)+to*.15+(t.sprinting?-.25:0),i==="build"&&(s.userData.scr.material.opacity=.6+Math.sin(performance.now()*.005)*.2),jo.aspect=e.aspect,jo.fov=e.fov,jo.updateProjectionMatrix();let l=.4+(1-f.time.night)*1.2;Bi.userData.dl.intensity=l,at.hit("KeyF")&&!f.menuOpen&&(t.flashlight=!t.flashlight,st.play("ui")),eo.intensity=t.flashlight?60:0;let h=e.position,u=t.fwd;if(f.lookBuilding=f.menuOpen?null:P1(h,u,14),f.aimNode=i==="laser"&&!!Nm(h,u,9),!f.menuOpen&&!t.dead){if(at.hit("Digit1")&&Hc(0),at.hit("Digit2")&&Hc(1),(at.hit("Digit3")||at.hit("KeyB"))&&Hc(2),at.wheel&&Ve.id!=="build"){let p=Ve.index;for(let x=0;x<2&&(p=(p+(at.wheel>0?1:2))%2,!(!ys[p].need||f.upgrades[ys[p].need]));x++);p!==Ve.index&&Hc(p)}Ve.id==="build"&&ue.type&&at.wheel&&(ue.rot+=at.wheel*.3)}Hi.visible=Vi.visible=no.visible=!1,R1-=n,ii.intensity=Math.max(0,ii.intensity-n*120),Zs&&(Zs.mesh.position.set(Zs.x,Zs.y,Zs.z),Zs=null),Qo.visible=!1,Ku-=n;let d=at.mouse[0]&&!f.menuOpen&&!t.dead&&f.locked;if(Qu.emissiveIntensity=i==="laser"&&d?3+Math.random()*1.5:1+Math.sin(performance.now()*.003)*.3,i==="laser")if(d){let x=Nm(h,u,9),y=jr(h,u,9),g=Mc(h,u,9),m=9,_=null;g&&g.dist<m&&(m=g.dist,_="ground"),x&&x.dist<=m&&(m=x.dist,_="node"),y&&y.dist<m&&(m=y.dist,_="enemy");let M=C1.copy(h).addScaledVector(u,m),v=e.localToWorld(Dm.clone()),I=M.clone().sub(v),A=I.length();I.normalize();let C=new hn().setFromUnitVectors(I1,I),P=1+Math.sin(performance.now()*.05)*.2;if(Hi.position.copy(v),Hi.quaternion.copy(C),Hi.scale.set(.012*P,A,.012*P),Vi.position.copy(v),Vi.quaternion.copy(C),Vi.scale.set(.04*P,A,.04*P),Hi.visible=Vi.visible=!0,no.position.copy(M),no.visible=!0,no.scale.setScalar(1.2+Math.random()*.8),to=Math.max(to,.15+Math.random()*.1),ii.position.copy(M).addScaledVector(u,-.6),ii.color.setRGB(1,.55,.25),ii.intensity=5+Math.random()*4,_==="node"){let S=x.n;for(ii.color.setRGB(...Ws[S.type]),Zs=S,S.mesh.position.set(S.x+(Math.random()-.5)*.07,S.y+(Math.random()-.5)*.05,S.z+(Math.random()-.5)*.07),Math.random()<.15&&gt.dustPuff(M,1,.4),Qr+=n*3.2*(f.upgrades.overclock?2:1),Math.random()<.7&&gt.spark(M,Ws[S.type],2,5,.4),ju-=n,ju<=0&&(ju=.09,st.play("mine"));Qr>=1&&f.nodes.includes(S);)if(Qr-=1,f.res[S.type]++,f.stats.mined[S.type]++,S.meteor&&(f.stats.meteorMined=(f.stats.meteorMined||0)+1),f.events.emit("pickup",{type:S.type,n:1}),Ic(S,1)){st.play("deplete"),Qr=0;break}}else _==="enemy"?(Ko(y.e,16*n*(f.upgrades.overclock?1.5:1),"laser"),Math.random()<.5&&gt.spark(M,[1,.5,.2],3,5)):_==="ground"&&(Math.random()<.3&&gt.spark(M,[1,.6,.3],1,3),Math.random()<.1&&gt.dustPuff(M,1,.3));st.laser(!0)}else st.laser(!1),Qr=Math.min(Qr,.9);else st.laser(!1);if(i==="rifle"&&d&&Ku<=0)if(t.energy>=5){Ku=.16,t.energy-=5,to=1;let p=e.localToWorld(Dm.clone()),x=jr(h,u,200),y=Mc(h,u,200),g=200;y&&(g=y.dist),x&&x.dist<g&&(g=x.dist);let _=h.clone().addScaledVector(u,g).sub(p).normalize();zc(p,_,f.upgrades.rifle2?30:19,"player"),st.play("shoot"),Qo.visible=!0,Qo.position.set(.24,-.21,-.86),ii.position.copy(p),ii.color.setRGB(.4,.9,1),ii.intensity=12}else at.clicked[0]&&(st.play("deny"),f.events.emit("toast","\u80FD\u91CF\u4E0D\u8DB3"));if(i==="build"){let p=!f.menuOpen&&ue.type?Mc(h,u,40):null;if(mm(p?p.point:null,t.pos),!f.menuOpen&&ue.type&&(at.hit("KeyR")&&(ue.rot+=Math.PI/4),at.clicked[0]))if(ue.valid){let x=gm();x&&f.events.emit("built",x)}else st.play("deny"),f.events.emit("toast",ue.reason);at.clicked[2]&&(Xs(null),Ve.index=0,st.play("ui"))}}function km(n){f.player.dead||f.driving||f.photo||(n.autoClear=!1,n.clearDepth(),n.render(Bi,jo),n.autoClear=!0)}var so=[["\u6797\u6653","\u690D\u7269\u5B66\u5BB6","\u6211\u4ECE\u4E91\u5357\u5E26\u6765\u4E86\u4E00\u5305\u8336\u6811\u79CD\u5B50\u3002\u603B\u6709\u4E00\u5929\uFF0C\u706B\u661F\u4E0A\u4E5F\u80FD\u6CE1\u4E00\u58F6\u70ED\u8336\u3002"],["Amara Okafor","\u533B\u751F","\u5728\u5730\u7403\u4E0A\uFF0C\u6211\u6551\u8FC7\u5F88\u591A\u4EBA\u3002\u5728\u8FD9\u91CC\uFF0C\u6211\u60F3\u770B\u7740\u5B69\u5B50\u4EEC\u5E73\u5B89\u957F\u5927\u3002"],["\u9648\u9ED8","\u5DE5\u7A0B\u5E08","\u8FD9\u91CC\u7684\u6BCF\u4E00\u9897\u87BA\u4E1D\uFF0C\u90FD\u662F\u6211\u4EEC\u4EB2\u624B\u62E7\u4E0A\u53BB\u7684\u3002"],["Mateo Silva","\u5730\u8D28\u5B66\u5BB6","\u4F60\u770B\u89C1\u90A3\u4E9B\u5CA9\u5C42\u4E86\u5417\uFF1F\u5B83\u4EEC\u6BD4\u4EBA\u7C7B\u7684\u5386\u53F2\u8FD8\u8981\u53E4\u8001\u56DB\u5341\u4EBF\u5E74\u3002"],["\u82CF\u5FF5","\u6559\u5E08",'\u6211\u7684\u7B2C\u4E00\u5802\u8BFE\uFF0C\u5C31\u53EB"\u6211\u4EEC\u4E3A\u4EC0\u4E48\u6765\u5230\u706B\u661F"\u3002'],["Yuki Tanaka","\u98DE\u884C\u5458","\u4ECE\u8F68\u9053\u4E0A\u770B\uFF0C\u4F60\u4EEC\u7684\u706F\u5149\u50CF\u662F\u7EA2\u8272\u6C99\u6F20\u91CC\u7684\u4E00\u4E32\u73CD\u73E0\u3002"],["\u738B\u5927\u5C71","\u53A8\u5E08","\u6E29\u5BA4\u91CC\u7684\u7B2C\u4E00\u6279\u571F\u8C46\uFF0C\u6211\u505A\u4E86\u4E00\u9505\u571F\u8C46\u7096\u83DC\u3002\u5927\u5BB6\u90FD\u54ED\u4E86\u3002"],["Elena Petrova","\u5929\u6587\u5B66\u5BB6","\u665A\u4E0A\u62AC\u5934\uFF0C\u90A3\u9897\u6700\u4EAE\u7684\u84DD\u661F\uFF0C\u5C31\u662F\u5730\u7403\u3002"],["\u8D75\u5C0F\u96E8","\u5B66\u751F","\u6211\u5341\u516D\u5C81\u3002\u6211\u4F1A\u662F\u7B2C\u4E00\u4EE3\u5728\u706B\u661F\u957F\u5927\u7684\u4EBA\u3002"],["Kwame Mensah","\u7535\u5DE5","\u53EA\u8981\u706F\u8FD8\u4EAE\u7740\uFF0C\u8FD9\u91CC\u5C31\u662F\u5BB6\u3002"],["\u5468\u9752\u79BE","\u6C34\u6587\u5B66\u5BB6","\u51B0\u5C42\u4E0B\u9762\u6709\u6C34\u3002\u6709\u6C34\uFF0C\u5C31\u6709\u751F\u547D\u3002"],["Priya Sharma","\u7A0B\u5E8F\u5458","\u6211\u5199\u7684\u4EE3\u7801\u5728\u63A7\u5236\u5236\u6C27\u7AD9\u3002\u522B\u62C5\u5FC3\uFF0C\u6211\u6D4B\u8BD5\u8FC7\u4E09\u5343\u904D\u4E86\u3002"],["\u674E\u957F\u98CE","\u8001\u5175","\u6211\u5E74\u8F7B\u65F6\u5B88\u8FC7\u8FB9\u7586\u3002\u73B0\u5728\uFF0C\u6211\u5B88\u7740\u4EBA\u7C7B\u7684\u65B0\u8FB9\u7586\u3002"],["Sofia Rossi","\u5EFA\u7B51\u5E08","\u7A79\u9876\u7684\u5F27\u5EA6\uFF0C\u662F\u6211\u7167\u7740\u6545\u4E61\u6559\u5802\u7684\u5706\u9876\u753B\u7684\u3002"],["\u4F55\u5B89","\u62A4\u58EB","\u60F3\u5BB6\u7684\u65F6\u5019\uFF0C\u6211\u5C31\u53BB\u6E29\u5BA4\u91CC\u95FB\u95FB\u6CE5\u571F\u7684\u5473\u9053\u3002"],["Jonas Berg","\u673A\u68B0\u5E08","\u706B\u661F\u7684\u6C99\u5B50\u4F1A\u94BB\u8FDB\u4EFB\u4F55\u7F1D\u9699\u3002\u4F46\u6211\u4EEC\u6BD4\u6C99\u5B50\u66F4\u56FA\u6267\u3002"],["\u9A6C\u6674","\u8BB0\u8005","\u6211\u8981\u8BB0\u5F55\u4E0B\u8FD9\u4E00\u5207\u3002\u51E0\u767E\u5E74\u540E\u7684\u4EBA\u4F1A\u60F3\u77E5\u9053\uFF0C\u6700\u521D\u662F\u600E\u6837\u7684\u3002"],["Omar Haddad","\u519C\u5B66\u5BB6","\u6211\u7956\u7236\u5728\u6C99\u6F20\u91CC\u79CD\u51FA\u4E86\u6930\u67A3\u3002\u6211\u8981\u5728\u706B\u661F\u79CD\u51FA\u68EE\u6797\u3002"],["\u5434\u6850","\u753B\u5BB6","\u706B\u661F\u7684\u65E5\u843D\u662F\u84DD\u8272\u7684\u3002\u5730\u7403\u4E0A\u6CA1\u6709\u4EBA\u4F1A\u76F8\u4FE1\u3002"],["Grace Kim","\u5FC3\u7406\u533B\u751F","\u79BB\u5BB6\u5F88\u8FDC\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5F7C\u6B64\u5C31\u662F\u5BB6\u3002"],["\u90ED\u8FDC","\u7236\u4EB2","\u6211\u5973\u513F\u5728\u98DE\u8239\u4E0A\u51FA\u751F\u3002\u5979\u7684\u51FA\u751F\u8BC1\u660E\u4E0A\u5199\u7740\uFF1A\u51FA\u751F\u5730\uFF0C\u661F\u9645\u7A7A\u95F4\u3002"],["Lucas Moreau","\u97F3\u4E50\u5BB6","\u6211\u5E26\u4E86\u4E00\u628A\u5409\u4ED6\u3002\u4ECA\u665A\u7A79\u9876\u91CC\u6709\u97F3\u4E50\u4F1A\uFF0C\u4F60\u6765\u5417\uFF1F"],["\u94B1\u591A\u591A","\u4F1A\u8BA1","\u6211\u7B97\u8FC7\u4E86\uFF1A\u7167\u8FD9\u4E2A\u901F\u5EA6\uFF0C\u4E8C\u5341\u5E74\u540E\u8FD9\u91CC\u4F1A\u6709\u4E00\u5EA7\u57CE\u5E02\u3002"],["Aiko Sato","\u751F\u7269\u5B66\u5BB6","\u90A3\u4E9B\u9508\u8680\u86DB\u2026\u2026\u4E5F\u8BB8\u5B83\u4EEC\u53EA\u662F\u5728\u4FDD\u62A4\u81EA\u5DF1\u7684\u5BB6\u56ED\u3002"],["\u9093\u5353","\u77FF\u5DE5","\u949B\u77FF\u91CC\u85CF\u7740\u706B\u661F\u7684\u5FC3\u8DF3\u3002"],["Nadia Volkova","\u6C14\u8C61\u5B66\u5BB6","\u5927\u6C14\u6539\u9020\u5854\u542F\u52A8\u540E\uFF0C\u4E5F\u8BB8\u6211\u4EEC\u80FD\u770B\u89C1\u706B\u661F\u4E0A\u7684\u7B2C\u4E00\u7247\u4E91\u3002"],["\u9EC4\u4E00\u9E23","\u673A\u5668\u4EBA\u4E13\u5BB6","\u673A\u5668\u53EF\u4EE5\u66FF\u6211\u4EEC\u5E72\u6D3B\uFF0C\u4F46\u53EA\u6709\u4EBA\uFF0C\u624D\u80FD\u628A\u4E00\u4E2A\u5730\u65B9\u53D8\u6210\u5BB6\u3002"],["Samuel Okoro","\u7267\u5E08","\u65E0\u8BBA\u5728\u54EA\u9897\u661F\u7403\u4E0A\uFF0C\u6211\u4EEC\u90FD\u4F1A\u4E3A\u65B0\u751F\u7684\u5B69\u5B50\u795D\u798F\u3002"],["\u53F6\u77E5\u79CB","\u8BD7\u4EBA",'"\u6B64\u5FC3\u5B89\u5904\u662F\u543E\u4E61\u3002"\u2014\u2014\u82CF\u8F7C\u3002\u6211\u60F3\uFF0C\u4ED6\u8BF4\u5F97\u5BF9\u3002'],["Hannah Weber","\u7269\u7406\u5B66\u5BB6","\u805A\u53D8\u53CD\u5E94\u5806\u7684\u5149\uFF0C\u548C\u592A\u9633\u662F\u540C\u4E00\u79CD\u5149\u3002"],["\u5C0F\u6EE1","\u5B69\u5B50","\u53D4\u53D4\uFF0C\u5730\u7403\u662F\u4EC0\u4E48\u6837\u5B50\u7684\uFF1F"],["Diego Ram\xEDrez","\u767B\u5C71\u5BB6","\u5965\u6797\u5E15\u65AF\u5C71\u6709\u4E24\u4E07\u7C73\u9AD8\u3002\u603B\u6709\u4E00\u5929\u6211\u8981\u7AD9\u4E0A\u53BB\u3002"]],Gc=0;function zm(n,t,e){let i=e?.idx??Gc++,s=so[i%so.length],r=Op(i);r.group.position.set(n,Et(n,t),t),f.scene.add(r.group);let o={...r,idx:i,name:s[0]+(i>=so.length?` ${Math.floor(i/so.length)+1}\u4E16`:""),job:s[1],line:s[2],pos:r.group.position,target:null,wait:Math.random()*3,phase:Math.random()*6,talked:0};return f.colonists.push(o),o}function L1(n){let t=f.buildings.filter(o=>o.type!=="lamp");if(!t.length)return new T(n.pos.x+(Math.random()-.5)*10,0,n.pos.z+(Math.random()-.5)*10);let e=t;if(f.time.night>.5){let o=t.filter(a=>a.type==="habitat");o.length&&(e=o)}let i=e[Math.floor(Math.random()*e.length)],s=Math.random()*Math.PI*2,r=i.def.r+1.5+Math.random()*5;return new T(i.x+Math.cos(s)*r,0,i.z+Math.sin(s)*r)}var ta=null,td=25;function D1(n,t){let e=Fp();e.group.userData.shuttle=!0,e.group.position.set(n.x,n.y+260,n.z),f.scene.add(e.group),ta={...e,pad:n,n:t,t:0,phase:"descend"},st.play("rumble"),f.events.emit("shuttleIncoming",t)}function Bm(n){let t=f.colony;if(f.popTotal=Math.max(f.popTotal||0,f.colonists.length),t.pop=f.popTotal,t.pop)for(f._work=(f._work||0)+n*t.pop*.04;f._work>=1;){f._work-=1;let r=Math.random()<.55?"iron":Math.random()<.6?"silicon":"ice";f.res[r]++}let e=f.buildings.filter(r=>r.type==="beacon"&&r.powered),i=t.support-t.pop;!ta&&e.length&&i>0&&!f.ended&&(td-=n,td<=0&&(td=Math.max(20,50/e.length),D1(e[Math.floor(Math.random()*e.length)],Math.min(i,4+(f.cityLevel||0)*2)))),ta&&U1(n);let s=performance.now()*.001;for(let r of f.colonists){r.target||(r.wait-=n,r.wait<=0&&(r.target=L1(r)));let o=!1;if(r.target){let h=r.target.x-r.pos.x,u=r.target.z-r.pos.z,d=Math.hypot(h,u);if(d<.6)r.target=null,r.wait=3+Math.random()*8;else{r.pos.x+=h/d*1.7*n,r.pos.z+=u/d*1.7*n;for(let x of f.colliders.query(r.pos.x,r.pos.z)){if(x.kind!=="building")continue;let y=r.pos.x-x.x,g=r.pos.z-x.z,m=Math.hypot(y,g),_=x.r+.4;m<_&&m>.01&&(r.pos.x=x.x+y/m*_,r.pos.z=x.z+g/m*_)}r.group.rotation.y=Math.atan2(h,u),o=!0}}let a=Math.hypot(f.player.pos.x-r.pos.x,f.player.pos.z-r.pos.z);a<4&&!o&&(r.group.rotation.y=Math.atan2(f.player.pos.x-r.pos.x,f.player.pos.z-r.pos.z)),r.pos.y=Et(r.pos.x,r.pos.z);let c=s*7+r.phase,l=o?Math.sin(c)*.6:0;r.legL.rotation.x=l,r.legR.rotation.x=-l,r.armL.rotation.x=-l*.8,r.armR.rotation.x=l*.8,!o&&a<4&&(r.armR.rotation.x=-2.6+Math.sin(s*6)*.3),r.body.position.y=.72+(o?Math.abs(Math.sin(c))*.04:0),r.talked=Math.max(0,r.talked-n)}}function U1(n){let t=ta;t.t+=n;let e=t.pad,i=t.group;if(t.phase==="descend"){let s=Math.min(1,t.t/11),r=1-Math.pow(1-s,3);i.position.y=e.y+.6+260*(1-r),t.flame.scale.set(1,.6+(1-r)*1.2+Math.random()*.2,1);for(let o=0;o<3;o++)gt.flame(i.position);s>.85&&Math.random()<.5&&gt.dustPuff(new T(e.x,e.y,e.z),4,10),s>=1&&(t.phase="landed",t.t=0,gt.ring(new T(e.x,e.y,e.z),3,80),t.flame.visible=!1,t.flameGlow.visible=!1)}else if(t.phase==="landed"){if(t.total=t.total||t.n,t.n>0&&t.t>2+(t.total-t.n)*.6){let s;f.colonists.length<40?(s=zm(e.x+(Math.random()-.5)*2,e.z+3),s.target=new T(e.x+(Math.random()-.5)*20,0,e.z+10+Math.random()*8)):s={name:so[Gc++%so.length][0]},t.n--,t.arrived=(t.arrived||[]).concat([s]),f.popTotal=(f.popTotal||0)+1,f.stats.arrived++}t.n<=0&&t.t>7&&(t.phase="ascend",t.t=0,t.flame.visible=!0,t.flameGlow.visible=!0,st.play("rumble"),f.events.emit("colonistsArrived",t.arrived||[]))}else if(t.phase==="ascend"){i.position.y+=n*(5+t.t*12);for(let s=0;s<3;s++)gt.flame(i.position);t.t<1.5&&gt.dustPuff(new T(e.x,e.y,e.z),3,10),t.t>12&&(f.scene.remove(i),ta=null)}}var ed=new T;function Hm(n,t){let e=null,i=6;for(let s of f.colonists){ed.set(s.pos.x-n.x,s.pos.y+1.1-n.y,s.pos.z-n.z);let r=ed.dot(t);r<0||r>i||ed.lengthSq()-r*r<.8*.8&&(i=r,e=s)}return e}function Vm(){return f.colonists.map(n=>[n.idx,+n.pos.x.toFixed(1),+n.pos.z.toFixed(1)])}function Gm(n){for(let[t,e,i]of n)zm(e,i,{idx:t});Gc=Math.max(Gc,...n.map(t=>t[0]+1),0)}var N1={iron:'<path d="M12 2.5l8.2 4.75v9.5L12 21.5l-8.2-4.75v-9.5z"/><path d="M12 2.5v19M3.8 7.25l16.4 9.5M20.2 7.25L3.8 16.75" opacity=".35"/>',silicon:'<path d="M12 2l7 10-7 10-7-10z"/><path d="M5 12h14M12 2v20" opacity=".35"/>',ice:'<path d="M12 2v20M3.3 7l17.4 10M20.7 7L3.3 17"/><path d="M9.5 3.5L12 6l2.5-2.5M9.5 20.5L12 18l2.5 2.5"/>',titanium:'<path d="M12 2l2.6 7.4L22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6z"/>',power:'<path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H12z"/>',pop:'<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.6 2.7-6 6-6s6 2.4 6 6"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 14.4c3 .1 5.5 2.2 5.5 5.6"/>',house:'<path d="M3 20h18M5 20V10l7-6 7 6v10"/><path d="M10 20v-5h4v5"/>',o2:'<circle cx="9" cy="12" r="5.5"/><path d="M17 15.5c0-1.4 2.6-1.6 2.6-3 0-.9-.7-1.5-1.6-1.5S16.5 11.6 16.5 12.4M16.5 18.5h3.4"/>',food:'<path d="M12 21V9"/><path d="M12 13c-4 0-6-3-6-7 4 0 6 3 6 7zM12 11c0-4 2-7 6-7 0 4-2 7-6 7z"/>',water:'<path d="M12 2.5S5.5 10 5.5 14.5a6.5 6.5 0 0013 0C18.5 10 12 2.5 12 2.5z"/>',laser:'<path d="M3 15l7-7 3 3-7 7z"/><path d="M13 11l2-2M16 8l5-5M17.5 11.5l3 .5M12.5 6.5l-.5-3"/>',rifle:'<path d="M2 10h15l3 2-3 2H9l-2 5H4l1-5H2z"/><path d="M12 10V7h3v3"/>',build:'<path d="M3 21h18M6 21V11h12v10M9 11V6h6v5"/><path d="M14 3l5 3" />',rover:'<path d="M3 15h18v-4l-3-4H8l-2 4H3z"/><circle cx="7" cy="17.5" r="2.2"/><circle cx="17" cy="17.5" r="2.2"/><path d="M10 7v4h8"/>',warn:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.01"/>',sun:'<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/>',moon:'<path d="M20 14.5A8.5 8.5 0 019.5 4a8.5 8.5 0 1010.5 10.5z"/>',meteor:'<circle cx="16" cy="16" r="4"/><path d="M13 13L3 3M15 11L8 4M11 15L4 8"/>',radio:'<path d="M5 9a9.5 9.5 0 0114 0M8 12a5 5 0 018 0"/><circle cx="12" cy="15.5" r="1.6"/><path d="M12 17v4"/>',check:'<path d="M4 12.5l5 5L20 6.5"/>',lock:'<rect x="5" y="10.5" width="14" height="10" rx="1"/><path d="M8 10.5V7a4 4 0 018 0v3.5"/>',ship:'<path d="M12 2c3 3 4 7 4 11v4H8v-4c0-4 1-8 4-11z"/><path d="M8 13l-3 4v3l3-2M16 13l3 4v3l-3-2M10 20l2 2 2-2"/>',colony:'<path d="M2 20h20"/><path d="M4 20v-5a4 4 0 018 0v5M13 20V7h7v13"/><path d="M15.5 10h2M15.5 13h2M15.5 16h2"/>',storm:'<path d="M3 8h12a3 3 0 10-3-3M3 12h16a3 3 0 11-3 3M3 16h8"/>',shield:'<path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/>',wrench:'<path d="M14.5 6.5a4 4 0 015.2 5.2L21 13l-8 8-1.3-1.3a4 4 0 01-5.2-5.2L3 11l3-3 3.5 3.5 2-2L8 6l3-3z" transform="scale(.9) translate(1.3 1.3)"/>',tank:'<rect x="7" y="5" width="10" height="16" rx="5"/><path d="M10 2h4v3h-4zM7 10h10"/>',scanner:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 12l6-6"/>',jet:'<path d="M8 3h8v11H8z"/><path d="M9 14l-1 4M15 14l1 4M10 18l2 4 2-4"/>',armor:'<path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/><path d="M8 10l4 2 4-2M12 12v6"/>',focus:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="2"/><path d="M12 1.5v5M12 17.5v5M1.5 12h5M17.5 12h5"/>',bolt2:'<path d="M7 2l-2 9h5l-2 11 9-13h-6l3-7z"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',planet:'<circle cx="12" cy="12" r="6.5"/><path d="M2.5 15.5c3 2 16 -4 19-9" />',trophy:'<path d="M7 3h10v5a5 5 0 01-10 0z"/><path d="M7 5H3c0 3 2 5 4 5M17 5h4c0 3-2 5-4 5M12 13v4M8 21h8M9 17h6"/>',book:'<path d="M4 4h6a2 2 0 012 2v14a2 2 0 00-2-2H4zM20 4h-6a2 2 0 00-2 2v14a2 2 0 012-2h6z"/>',camera:'<path d="M3 7h4l2-3h6l2 3h4v13H3z"/><circle cx="12" cy="13" r="4"/>',gear:'<circle cx="12" cy="12" r="3.2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',drone:'<rect x="9" y="10" width="6" height="4" rx="1"/><path d="M9 11L5 7M15 11l4-4M9 13l-4 4M15 13l4 4"/><circle cx="5" cy="7" r="2.2"/><circle cx="19" cy="7" r="2.2"/><circle cx="5" cy="17" r="2.2"/><circle cx="19" cy="17" r="2.2"/>',boss:'<path d="M12 2l3 6 6 1-4 5 1 7-6-3-6 3 1-7-4-5 6-1z"/><circle cx="12" cy="12" r="2"/>',key:'<circle cx="8" cy="15" r="4.5"/><path d="M11.5 12L20 3.5M17 6.5l2.5 2.5M15 8.5l2 2"/>',dome:'<path d="M3 19h18M4.5 19a7.5 7.5 0 0115 0"/><path d="M12 11.5V8M10 19v-3h4v3"/>',tower:'<path d="M6 21V5h6v16M12 21V10h6v11"/><path d="M8 8h2M8 11h2M8 14h2M14 13h2M14 16h2M3 21h18"/>',monument:'<path d="M10 21l1-16 1-2 1 2 1 16z"/><ellipse cx="12" cy="11" rx="6" ry="2"/><path d="M5 21h14"/>'};function Wm(){return`<svg xmlns="http://www.w3.org/2000/svg" style="display:none">${Object.entries(N1).map(([n,t])=>`<symbol id="i-${n}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${t}</symbol>`).join("")}</svg>`}var Le=(n,t="")=>`<svg class="ico ${t}" aria-hidden="true"><use href="#i-${n}"/></svg>`;var Wc={};function Xm(n){let t=n.filter(c=>!Wc[c]);if(!t.length)return Wc;let e=256,i=new Ir({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});i.setSize(e,e),i.setPixelRatio(1),i.toneMapping=Oo,i.toneMappingExposure=1.15;let s=new os;s.add(new ls(14674175,3811876,1.4));let r=new ui(16773344,2.6);r.position.set(4,8,6),s.add(r);let o=new ui(8965375,1.4);o.position.set(-6,4,-6),s.add(o);let a=new Xe(30,1,.1,500);for(let c of t){let l=new jt,h={};Br[c](l,h);let u=[];l.traverse(_=>{(_.userData.found||_===h.flame||_===h.beam)&&u.push(_)}),u.forEach(_=>_.parent.remove(_));let d=[];l.traverse(_=>{_.isSprite&&d.push([_,_.parent])}),d.forEach(([_,M])=>M.remove(_)),s.add(l);let p=new qn().setFromObject(l,!0),x=p.getSize(new T),y=p.getCenter(new T);d.forEach(([_,M])=>M.add(_));let m=Math.max(x.x,x.y,x.z)*.62/Math.tan(Fe.degToRad(15))*1.05;a.position.set(y.x+m*.62,y.y+m*.42,y.z+m*.66),a.lookAt(y),a.updateProjectionMatrix(),i.render(s,a),Wc[c]=i.domElement.toDataURL("image/png"),s.remove(l)}return i.dispose(),i.forceContextLoss(),Wc}var F1={mars:[{id:"zhurong",name:"\u795D\u878D\u53F7\u706B\u661F\u8F66",model:"rover",who:"\u6863\u6848 \xB7 \u795D\u878D\u53F7",text:"\u4E2D\u56FD\u706B\u661F\u8F66\u300C\u795D\u878D\u53F7\u300D\uFF0C2021 \u5E74\u7740\u9646\u5728\u4E4C\u6258\u90A6\u5E73\u539F\u2014\u2014\u5C31\u5728\u4F60\u811A\u4E0B\u8FD9\u7247\u571F\u5730\u3002\u5B83\u7684\u592A\u9633\u80FD\u677F\u4E0A\u79EF\u6EE1\u4E86\u516D\u5341\u591A\u5E74\u7684\u6C99\u5C18\u3002\u4EBA\u7C7B\u5728\u706B\u661F\u4E0A\u7684\u7B2C\u4E00\u884C\u8F66\u8F99\uFF0C\u5C31\u662F\u5B83\u7559\u4E0B\u7684\u3002"},{id:"opportunity",name:"\u673A\u9047\u53F7\u6B8B\u9AB8",model:"rover2",who:"\u6863\u6848 \xB7 \u673A\u9047\u53F7",text:"\u4E00\u5757\u5199\u7740\u300COpportunity\u300D\u7684\u6B8B\u7247\uFF0C\u4E0D\u77E5\u88AB\u54EA\u573A\u6C99\u5C18\u66B4\u5377\u5230\u4E86\u8FD9\u91CC\u3002\u5B83\u5728\u706B\u661F\u4E0A\u5DE5\u4F5C\u4E86\u5341\u4E94\u5E74\u3002\u5B83\u6700\u540E\u4F20\u56DE\u7684\u6570\u636E\uFF0C\u88AB\u4EBA\u4EEC\u7FFB\u8BD1\u6210\u4E00\u53E5\u8BDD\uFF1A\u300C\u6211\u7684\u7535\u91CF\u5F88\u4F4E\uFF0C\u5929\u5FEB\u9ED1\u4E86\u3002\u300D"},{id:"viking",name:"\u6D77\u76D7\u4E00\u53F7\u7740\u9646\u5668",model:"lander",who:"\u6863\u6848 \xB7 \u6D77\u76D7\u4E00\u53F7",text:"1976 \u5E74\uFF0C\u4EBA\u7C7B\u7B2C\u4E00\u4E2A\u5728\u706B\u661F\u6210\u529F\u7740\u9646\u5E76\u4F20\u56DE\u7167\u7247\u7684\u63A2\u6D4B\u5668\u3002\u7167\u7247\u4E0A\uFF0C\u5C31\u662F\u8FD9\u6837\u4E00\u7247\u7EA2\u8272\u7684\u3001\u5E03\u6EE1\u77F3\u5934\u7684\u5E73\u539F\u3002"},{id:"ingenuity",name:"\u673A\u667A\u53F7\u76F4\u5347\u673A",model:"heli",who:"\u6863\u6848 \xB7 \u673A\u667A\u53F7",text:"\u4E00\u67B6\u53EA\u6709 1.8 \u516C\u65A4\u7684\u5C0F\u76F4\u5347\u673A\u30022021 \u5E74\uFF0C\u5B83\u5B8C\u6210\u4E86\u4EBA\u7C7B\u5728\u5730\u7403\u4E4B\u5916\u7684\u7B2C\u4E00\u6B21\u52A8\u529B\u98DE\u884C\u3002\u65CB\u7FFC\u4E0A\u8FD8\u8D34\u7740\u4E00\u5C0F\u5757\u83B1\u7279\u5144\u5F1F\u98DE\u673A\u7684\u5E03\u6599\u3002"}],europa:[{id:"drill",name:"\u51B0\u5C42\u94BB\u63A2\u5668",model:"drill",who:"\u6863\u6848 \xB7 \u51B0\u7A7F\u8005\u53F7",text:"2041 \u5E74\u7684\u65E0\u4EBA\u94BB\u63A2\u5668\u300C\u51B0\u7A7F\u8005\u53F7\u300D\u3002\u5B83\u94BB\u5230\u4E86\u51B0\u4E0B\u4E09\u516C\u91CC\uFF0C\u5728\u6700\u540E\u4E00\u5E27\u753B\u9762\u91CC\uFF0C\u955C\u5934\u524D\u4F3C\u4E4E\u6709\u4EC0\u4E48\u4E1C\u897F\u5728\u53D1\u5149\u2026\u2026\u7136\u540E\u4FE1\u53F7\u4E2D\u65AD\u4E86\u3002"},{id:"hydro",name:"\u65E0\u4EBA\u6C34\u542C\u7AD9",model:"probe",who:"\u6863\u6848 \xB7 \u6C34\u542C\u7AD9",text:"\u4E00\u53F0\u8FD8\u5728\u8FD0\u8F6C\u7684\u6C34\u542C\u5668\u3002\u5B83\u5F55\u5230\u4E86\u51B0\u4E0B\u6D77\u6D0B\u91CC\u67D0\u79CD\u6709\u8282\u594F\u7684\u4F4E\u9891\u58F0\u97F3\uFF0C\u5468\u671F\u662F 17 \u5206\u949F\u3002\u6CA1\u6709\u4EBA\u77E5\u9053\u90A3\u662F\u4EC0\u4E48\u3002"},{id:"galileo",name:"\u523B\u5B57\u7684\u91D1\u5C5E\u7247",model:"plate",who:"\u6863\u6848 \xB7 \u65E0\u540D",text:"\u51B0\u91CC\u51BB\u7740\u4E00\u5757\u91D1\u5C5E\u7247\uFF0C\u4E0A\u9762\u523B\u7740\u4E00\u4E2A\u65E5\u671F\uFF1A1610 \u5E74 1 \u6708 7 \u65E5\u3002\u90A3\u662F\u4F3D\u5229\u7565\u7B2C\u4E00\u6B21\u770B\u89C1\u6728\u661F\u536B\u661F\u7684\u591C\u665A\u3002\u662F\u8C01\u628A\u5B83\u5E26\u5230\u8FD9\u91CC\u7684\uFF1F"}],kepler:[{id:"monolith",name:"\u6676\u4F53\u65B9\u7891",model:"monolith",who:"\u6863\u6848 \xB7 \u672A\u77E5",text:"\u8FD9\u4E0D\u662F\u4EBA\u7C7B\u9020\u7684\u3002\u65B9\u7891\u8868\u9762\u7684\u7EB9\u8DEF\u5728\u4F60\u9760\u8FD1\u65F6\u4E00\u5708\u5708\u4EAE\u8D77\uFF0C\u50CF\u662F\u5728\u8FA8\u8BA4\u4F60\u3002\u5B83\u7684\u5E74\u9F84\u5927\u7EA6\u662F\u56DB\u5343\u4E07\u5E74\u3002"},{id:"pathfinder",name:"\u65B9\u821F\u63A2\u8DEF\u5668",model:"probe",who:"\u6863\u6848 \xB7 \u63A2\u8DEF\u8005",text:"\u4E09\u767E\u5E74\u524D\u5148\u884C\u51FA\u53D1\u7684\u65E0\u4EBA\u63A2\u8DEF\u5668\u3002\u5B83\u7684\u6700\u540E\u4E00\u6761\u65E5\u5FD7\u5199\u7740\uFF1A\u300C\u5DF2\u627E\u5230\u9002\u5B9C\u7740\u9646\u70B9\u3002\u6211\u4F1A\u5728\u8FD9\u91CC\u7B49\u4F60\u4EEC\u3002\u300D\u5B83\u7B49\u4E86\u4E00\u767E\u4E00\u5341\u4E8C\u5E74\u3002"},{id:"fossil",name:"\u5DE8\u578B\u5316\u77F3",model:"fossil",who:"\u6863\u6848 \xB7 \u5316\u77F3",text:"\u4E00\u526F\u5DE8\u5927\u7684\u9AA8\u67B6\uFF0C\u5F27\u5F62\u7684\u808B\u9AA8\u50CF\u62F1\u95E8\u4E00\u6837\u7ACB\u5728\u5730\u4E0A\u3002\u751F\u524D\uFF0C\u5B83\u53EF\u80FD\u50CF\u90A3\u4E9B\u53D1\u5149\u7684\u6C34\u6BCD\u4E00\u6837\uFF0C\u6F02\u6D6E\u5728\u8FD9\u7247\u5929\u7A7A\u91CC\u3002"}]},Js=[],zn=new Dt({color:8022620,roughness:.9,metalness:.3}),nd=new Dt({color:13148240,roughness:.4,metalness:.8}),id=new Dt({color:15260872,roughness:.8,flatShading:!0}),O1=new Dt({color:1314844,roughness:.15,metalness:.9,emissive:6308095,emissiveIntensity:.15});function ye(n,t,e,i,s,r,o=0,a=0,c=0){let l=new bt(n,t);return l.position.set(e,i,s),l.rotation.set(o,a,c),l.castShadow=!0,l.receiveShadow=!0,r.add(l),l}var k1={rover(n){ye(new ne(1.6,.5,2.2),zn,0,.9,0,n,0,0,.08);for(let t of[-1,1])ye(new ne(1.4,.05,1.6),O.solar,t*1.4,1.1,0,n,0,0,t*.25);ye(new oe(.05,.05,1.2,6),zn,.4,1.7,-.7,n),ye(new ne(.3,.2,.25),zn,.4,2.35,-.7,n,0,0,.3);for(let t of[-.9,0,.9])for(let e of[-1,1])ye(new oe(.28,.28,.22,10),O.dark,e*.95,.3,t,n,0,0,Math.PI/2)},rover2(n){ye(new ne(1.4,.45,1.8),zn,0,.5,0,n,.25,.4,.4),ye(new ne(1.2,.05,1.1),O.solar,.9,.35,.3,n,.1,0,-.6),ye(new oe(.28,.28,.22,10),O.dark,-1.2,.25,.8,n,.4,0,1.2)},lander(n){ye(new oe(1,1.1,.6,6),nd,0,1,0,n);for(let t=0;t<3;t++){let e=t*Math.PI*2/3;ye(new oe(.06,.06,1.4,5),zn,Math.cos(e)*1.1,.5,Math.sin(e)*1.1,n,Math.sin(e)*.4,0,-Math.cos(e)*.4)}ye(new oe(.6,.6,.05,16),O.white,0,1.6,.3,n,.6,0,0),ye(new ne(.2,.9,.2),zn,-.5,1.7,-.3,n)},heli(n){ye(new ne(.25,.2,.25),nd,0,.45,0,n),ye(new oe(.02,.02,.5,4),zn,0,.75,0,n),ye(new ne(1.2,.02,.08),zn,0,.9,0,n,0,.5,0),ye(new ne(1.2,.02,.08),zn,0,.98,0,n,0,-.4,0);for(let t=0;t<4;t++){let e=t*Math.PI/2+.6;ye(new oe(.015,.015,.5,4),zn,Math.cos(e)*.2,.2,Math.sin(e)*.2,n,Math.sin(e)*.5,0,-Math.cos(e)*.5)}n.scale.setScalar(2.2)},drill(n){ye(new oe(.5,.7,1.4,8),zn,0,.7,0,n),ye(new oe(.15,.15,4,8),O.metal,0,2.6,0,n,.15,0,0);for(let t=0;t<3;t++){let e=t*Math.PI*2/3;ye(new ne(.15,3,.15),zn,Math.cos(e)*.9,1.4,Math.sin(e)*.9,n,Math.sin(e)*.25,0,-Math.cos(e)*.25)}},probe(n){ye(new he(.8,12,8),O.white,0,.9,0,n),ye(new Ye(.85,.08,6,20),O.orange,0,.9,0,n,Math.PI/2,0,0),ye(new oe(.03,.03,1.6,4),O.metal,0,2.2,0,n),ye(new rn(.5,.3,12,1,!0),O.white,0,3,0,n,Math.PI,0,0)},plate(n){ye(new ne(1.2,.8,.06),nd,0,.5,0,n,-.5,0,.1),ye(new hi(.9,0),new Dt({color:13627135,transparent:!0,opacity:.6,roughness:.05}),0,.4,0,n)},monolith(n){ye(new ne(1.4,7,.5),O1,0,3.5,0,n,0,0,.04),n.userData.rings=[];for(let t=0;t<3;t++){let e=ye(new Ye(1.4+t*.4,.04,6,32),new re({color:9075455,transparent:!0,opacity:.6}),0,2+t*1.6,0,n,Math.PI/2,0,0);n.userData.rings.push(e)}},fossil(n){for(let t=0;t<9;t++){let e=ye(new Ye(3-Math.abs(t-4)*.35,.18,6,16,Math.PI),id,0,0,-6+t*1.5,n);e.rotation.y=0}ye(new oe(.25,.15,14,6),id,0,3,0,n,Math.PI/2,0,0),ye(new hi(1.4,0),id,0,2.6,-8,n)}};function $m(){let n=kr(Qt.length*977+5),t=F1[Qt]||[];t.forEach((e,i)=>{let s=0,r=0;for(let c=0;c<200;c++){let l=i/t.length*Math.PI*2+n()*1.2,h=160+n()*220;if(s=Math.cos(l)*h,r=Math.sin(l)*h,Math.abs(s)<Ht-180&&Math.abs(r)<Ht-180&&ks(s,r,3)<.35&&!f.colliders.overlaps(s,r,6))break}let o=new jt;k1[e.model](o),o.position.set(s,Et(s,r)-.15,r),o.rotation.y=n()*6.28;let a=ie(16765578,3,f.scene,s,Et(s,r)+4,r);f.scene.add(o),f.colliders.add({x:s,z:r,r:e.model==="fossil"?3:1.4,kind:"relic"}),Js.push({...e,x:s,z:r,g:o,beacon:a,found:(f.relicsFound||[]).includes(e.id)})})}function qm(n){let t=null,e=1e9;for(let i of Js){if(i.found)continue;let s=Math.hypot(i.x-n.x,i.z-n.z);s<e&&(e=s,t=i)}return t?{r:t,d:e}:null}function Ym(n){return Js.find(t=>!t.found&&Math.hypot(t.x-n.x,t.z-n.z)<6)}function ro(){return{found:Js.filter(n=>n.found).length,total:Js.length}}function Zm(){return Js}function Jm(n){n.found=!0,f.relicsFound=[...new Set([...f.relicsFound||[],n.id])],$e(n.who,n.text),f.res.titanium+=8,f.res.silicon+=15,f.events.emit("pickup",{type:"titanium",n:8,note:n.name}),f.events.emit("toast",`\u2713 \u53D1\u73B0\u9057\u8FF9\uFF1A${n.name}`),st.play("objective"),gt.burst(new T(n.x,Et(n.x,n.z)+2,n.z),[1,.85,.5],60,8)}function Km(n){let t=performance.now()*.001;for(let e of Js)e.beacon.visible=!e.found,e.beacon.material.opacity=.5+Math.sin(t*2+e.x)*.3,e.g.userData.rings&&e.g.userData.rings.forEach((i,s)=>{i.rotation.z=t*(.3+s*.2),i.material.opacity=(e.found?.8:.3)+Math.sin(t*2+s)*.2})}var Ut=n=>document.getElementById(n),ad,cd,lt,ao={},ld={mars:"MARS",europa:"EUROPA",kepler:"KEPLER-442b"},z1=["I","II","III","IV","V","VI"];function n0(n){ad=n,document.body.insertAdjacentHTML("afterbegin",Wm()),cd=Ut("minimap"),lt=cd.getContext("2d"),Ut("pl-cn").textContent=xt.name,Ut("kick-planet").textContent=ld[Qt],Ut("hotbar").innerHTML=ys.map((t,e)=>`<div class="slot" data-i="${e}"><span class="key">${e+1}</span><span class="ic">${Le(t.icon)}</span><span class="nm">${t.name}</span></div>`).join(""),Ut("res").innerHTML=Object.entries(jn).map(([t,e])=>`<div class="r" id="r-${t}" style="--rc:${e.color}"><span class="ic">${Le(t)}</span><span class="tx"><small>${e.name}</small><b>0</b></span></div>`).join(""),f.events.on("toast",t=>Ze(t)),f.events.on("pickup",t=>B1(t)),document.querySelectorAll("[data-close]").forEach(t=>t.addEventListener("click",()=>{st.play("ui"),si(!0)})),document.querySelectorAll(".menu button, .bp-tabs button").forEach(t=>t.addEventListener("mouseenter",()=>st.play("tick")));try{ao=Xm(Gu.filter(t=>!ms(t).hide))}catch{ao={}}}var jm={"\u2713":["check","good"],"\u26A0":["warn","warn"],"\u{1F527}":["wrench",""],"\u2600":["sun",""],"\u2604":["meteor",""],"\u{1F680}":["ship",""]};function Ze(n,t="radio",e=""){let i=[...n][0];jm[i]&&([t,e]=jm[i],n=n.slice(i.length).trim());let s=document.createElement("div");s.className="toast "+e,s.innerHTML=`${Le(t)}<span>${n}</span>`;let r=Ut("toasts");for(r.appendChild(s);r.children.length>3;)r.firstChild.remove();setTimeout(()=>s.classList.add("out"),3e3),setTimeout(()=>s.remove(),3700)}var sd={};function B1({type:n,n:t,note:e}){st.play("pickup");let i=sd[n];i&&i.el.isConnected?(i.n+=t,clearTimeout(i.to)):(i=sd[n]={n:t,el:document.createElement("div")},i.el.className="feed",Ut("feed").appendChild(i.el));let s=jn[n];i.el.style.setProperty("--rc",s.color),i.el.innerHTML=`<span class="nm">${e||s.name}</span>${Le(n)}<span class="q">+${i.n}</span>`,i.el.classList.remove("out"),i.to=setTimeout(()=>{i.el.classList.add("out"),setTimeout(()=>{i.el.remove(),delete sd[n]},500)},1800);let r=Ut("r-"+n);r.classList.remove("flash"),r.offsetWidth,r.classList.add("flash")}function ea(n){let t=Ut("chapter"),e=kn.indexOf(n),i=n.k||(e>=0?`CHAPTER ${String(e+1).padStart(2,"0")}`:""),s=n.title.replace(/^第.章 · |^终章 · /,"");t.innerHTML=`<div class="k">${i}</div><div class="t">${s}</div><div class="ln"></div><div class="s">${n.sub}</div>`,t.classList.remove("show"),t.offsetWidth,t.classList.add("show")}var H1=["build","craft","pause","starmap","archive"];function Ks(n){si(!1),f.menuOpen=n,Ut(n).classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),st.play("open"),n==="build"&&ud(),n==="craft"&&md(),n==="archive"&&(Ut("archive-body").innerHTML=gd()),n==="pause"&&(Ut("pause-pane").innerHTML="")}function si(n){H1.forEach(e=>Ut(e).classList.add("hidden"));let t=f.menuOpen;f.menuOpen=!1,t==="build"&&!ue.type&&(Ve.index=0),n&&f.requestLock()}function fd(n){Ut("pause-pane").innerHTML=n}var hd={all:"\u5168\u90E8",life:"\u751F\u5B58",city:"\u57CE\u5E02",industry:"\u5DE5\u4E1A",defense:"\u9632\u5FA1",stellar:"\u661F\u9645"},Xc="all",vs=null;function i0(n){Ut(n).innerHTML=Object.entries(jn).map(([t,e])=>`<span style="--rc:${e.color}">${Le(t)}${f.res[t]}</span>`).join("")}function s0(n){return`<div class="need">${Object.entries(n).map(([t,e])=>`<div class="row ${f.res[t]>=e?"":"lack"}" style="--rc:${jn[t].color}">${Le(t)}<span class="nm">${jn[t].name}</span>${Math.floor(f.res[t])} / ${e}</div>`).join("")}</div>`}function ud(){i0("bp-res");let n=Gu.filter(i=>!ms(i).hide),t=["all",...Object.keys(hd).filter(i=>i!=="all"&&n.some(s=>dn[s].cat===i))];Ut("bp-tabs").innerHTML=t.map(i=>`<button data-c="${i}" class="${i===Xc?"on":""}">${hd[i]}</button>`).join(""),Ut("bp-tabs").querySelectorAll("button").forEach(i=>i.addEventListener("click",()=>{Xc=i.dataset.c,st.play("tick"),ud()}));let e=n.filter(i=>Xc==="all"||dn[i].cat===Xc);(!vs||!e.includes(vs))&&(vs=e.find(i=>ms(i).ok)||e[0]),Ut("build-list").innerHTML=e.map(i=>{let s=dn[i],r=ms(i),o=Qn(s.cost);return`<div class="tile ${r.ok?"":"locked"} ${o?"":"poor"} ${i===vs?"sel":""}" data-k="${i}">
      <div class="th">${ao[i]?`<img src="${ao[i]}" alt="">`:Le(s.icon)}</div>
      ${r.ok?"":`<div class="lk">${Le("lock")}</div>`}
      <div class="nm">${s.name}</div><div class="cs">${r.ok?Or(s.cost):""}</div></div>`}).join(""),Ut("build-list").querySelectorAll(".tile").forEach(i=>{i.addEventListener("click",()=>{vs=i.dataset.k,st.play("tick"),ud()}),i.addEventListener("dblclick",()=>pd(i.dataset.k))}),G1()}function V1(n){let t=dn[n],e=ms(n);return Qt==="mars"&&t.chapter>f.chapter?`\u5728\u300C${kn[t.chapter].title}\u300D\u89E3\u9501`:e.why}function G1(){let n=vs;if(!n){Ut("bp-detail").innerHTML="";return}let t=dn[n],e=ms(n),i=Qn(t.cost),s=[];t.power&&s.push(["\u7535\u529B",`${t.power>0?"+":""}${t.power}`,t.power>0?"pos":"neg"]),t.housing&&s.push(["\u4F4F\u623F",`${t.housing} \u4EBA`]),t.o2&&s.push(["\u4F9B\u6C27",`${t.o2} \u4EBA`]),t.food&&s.push(["\u98DF\u7269",`${t.food} \u4EBA`]),t.water&&s.push(["\u7528\u6C34",`${t.water} \u4EBA`]),t.life&&s.push(["\u8865\u6C27\u534A\u5F84",`${t.life} m`]),t.range&&s.push(["\u5C04\u7A0B",`${t.range} m`]),s.push(["\u8010\u4E45",t.hp]),Ut("bp-detail").innerHTML=`<div class="pv">${ao[n]?`<img src="${ao[n]}" alt="">`:Le(t.icon)}</div>
    <div class="cat">${hd[t.cat]||""} \xB7 BLUEPRINT</div><h3>${t.name}</h3>
    <div class="ds">${t.desc}</div>
    <div class="stats">${s.map(r=>`<div><small>${r[0]}</small><b class="${r[2]||""}">${r[1]}</b></div>`).join("")}</div>
    ${e.ok?s0(t.cost):`<div class="why">${Le("lock")} ${V1(n)}</div>`}
    <button class="go" ${e.ok?"":"disabled"}>${e.ok?i?"\u5F00\u59CB\u5EFA\u9020":"\u653E\u7F6E\u84DD\u56FE\uFF08\u8D44\u6E90\u4E0D\u8DB3\uFF09":"\u5C1A\u672A\u89E3\u9501"}</button>`,Ut("bp-detail").querySelector(".go").addEventListener("click",()=>pd(n))}function pd(n){let t=dn[n];if(!ms(n).ok){st.play("deny");return}st.play("ui"),ue.rot=0,Xs(n),Ve.index=2,si(!0),Qn(t.cost)||Ze("\u8D44\u6E90\u4E0D\u8DB3\uFF0C\u653E\u7F6E\u524D\u5148\u53BB\u91C7\u96C6\u5427","warn","warn")}function r0(n){f.menuOpen==="build"&&n.code==="Enter"&&vs&&pd(vs),f.menuOpen==="craft"&&n.code==="Enter"&&yi&&dd(yi)}var yi=null;function md(){i0("cr-res");let n=Object.keys(Kr);yi||(yi=n.find(s=>!f.upgrades[s])||n[0]),Ut("craft-list").innerHTML=n.map(s=>{let r=Kr[s],o=f.upgrades[s],a=Qn(r.cost),c=r.need&&!f.upgrades[r.need];return`<div class="tile ${o?"done":""} ${a&&!c?"":"poor"} ${s===yi?"sel":""}" data-k="${s}">
      ${o?'<span class="tag">\u5DF2\u88C5\u5907</span>':""}
      <div class="th">${Le(r.icon)}</div><div class="nm">${r.name}</div><div class="cs">${o?"":Or(r.cost)}</div></div>`}).join(""),Ut("craft-list").querySelectorAll(".tile").forEach(s=>{s.addEventListener("click",()=>{yi=s.dataset.k,st.play("tick"),md()}),s.addEventListener("dblclick",()=>dd(s.dataset.k))});let t=Kr[yi],e=f.upgrades[yi],i=t.need&&!f.upgrades[t.need];Ut("craft-detail").innerHTML=`<div class="pv">${Le(t.icon)}</div><div class="cat">EQUIPMENT</div><h3>${t.name}</h3>
    <div class="ds">${t.desc}</div>
    ${e?'<div class="why okc">\u5DF2\u5236\u9020\u5E76\u88C5\u5907</div>':i?`<div class="why">${Le("lock")} \u9700\u8981\u5148\u5236\u9020\u7B49\u79BB\u5B50\u6B65\u67AA</div>`:s0(t.cost)}
    <button class="go" ${e||i||!Qn(t.cost)?"disabled":""}>${e?"\u5DF2\u88C5\u5907":Qn(t.cost)?"\u5236\u9020":"\u8D44\u6E90\u4E0D\u8DB3"}</button>`,Ut("craft-detail").querySelector(".go").addEventListener("click",()=>dd(yi))}function dd(n){let t=Kr[n];if(f.upgrades[n]||t.need&&!f.upgrades[t.need]||!Qn(t.cost)){st.play("deny");return}zo(t.cost),f.upgrades[n]=!0,f.stats.crafted[n]=!0,st.play("craft"),Ze(`\u5236\u9020\u5B8C\u6210\uFF1A${t.name}`,t.icon,"good"),n==="tank"&&(f.player.o2=180),n==="rifle"&&(Ve.index=1),f.events.emit("crafted",n),yi=Object.keys(Kr).find(e=>!f.upgrades[e])||n,md()}function gd(){let n=f.colony,t=f.stats,e=t.mined.iron+t.mined.silicon+t.mined.ice+t.mined.titanium,i=[["\u4EBA\u53E3",n.pop],["\u57CE\u5E02\u7B49\u7EA7",xn[f.cityLevel].name],["\u8BBE\u65BD",f.buildings.length],["\u706B\u661F\u65E5",f.time.day],["\u7535\u529B",`${Math.round(n.powerProd)} / ${n.powerUse}`],["\u9057\u8FF9",`${ro().found} / ${ro().total}`],["\u53EF\u5BB9\u7EB3",n.support],["\u91C7\u96C6\u8D44\u6E90",e],["\u51FB\u9000\u9508\u8680\u86DB",t.kills],["\u884C\u9A76\u91CC\u7A0B",`${((t.driven||0)/1e3).toFixed(1)} km`],["\u5C45\u6C11\u4EA4\u8C08",(t.talked||[]).length]],s=En.visited||[],r=Object.keys(Rn).map(c=>{let l=c===Qt?{pop:n.pop}:s.find(h=>h.id===c);return`<div><small>${Rn[c].name}</small><b>${l?l.pop+" \u4EBA":"\u2014"}</b></div>`}).join(""),o=f.colonists.map(c=>`<div class="person"><span class="pn">${c.name}</span><span class="pj">${c.job}</span><div class="pl">\u201C${c.line}\u201D</div></div>`).join(""),a=n.pop-f.colonists.length;return`<h3>\u6982\u51B5 \xB7 ${xt.name}</h3><div class="kv">${i.map(c=>`<div><small>${c[0]}</small><b>${c[1]}</b></div>`).join("")}</div>
    <h3>\u4EBA\u7C7B\u7684\u8DB3\u8FF9</h3><div class="kv">${r}<div><small>\u661F\u9645\u603B\u4EBA\u53E3</small><b>${s.filter(c=>c.id!==Qt).reduce((c,l)=>c+l.pop,0)+n.pop}</b></div></div>
    <h3>\u5C45\u6C11\u540D\u518C</h3>${o?`<div class="people">${o}</div>`:'<p style="color:var(--dim)">\u8FD8\u6CA1\u6709\u5C45\u6C11\u3002\u5EFA\u597D\u4F4F\u623F\u3001\u6C27\u6C14\u3001\u98DF\u7269\u3001\u6C34\u548C\u7740\u9646\u573A\uFF0C\u79FB\u6C11\u98DE\u8239\u5C31\u4F1A\u5230\u6765\u3002</p>'}
    ${a>0?`<p style="color:var(--dim);margin-top:14px">\u2026\u2026\u4EE5\u53CA\u53E6\u5916 ${a} \u4F4D\u5C45\u6C11\u3002</p>`:""}`}var rd=0,Qm="",oo=0,t0="";function xd(n,t){let e=f.player,i=f.colony;if(rd-=n,rd<=0){rd=.2;for(let I in jn)Ut("r-"+I).querySelector("b").textContent=Math.floor(f.res[I]);let d=Qp(),p=xn[f.cityLevel],x=d?Math.min(1,Math.min(i.pop/d.pop,f.buildings.length/Math.max(1,d.b))):1,y=`<span class="lv">LV.${z1[f.cityLevel]}</span><span class="nm">${p.name}</span>${d?`<div class="pg"><i style="width:${x*100}%"></i></div><div class="nx">\u4E0B\u4E00\u7EA7\u300C${d.name}\u300D\xB7 \u4EBA\u53E3 ${Math.min(i.pop,d.pop)}/${d.pop} \xB7 \u8BBE\u65BD ${Math.min(f.buildings.length,d.b)}/${d.b}</div>`:'<div class="nx">\u5DF2\u8FBE\u5230\u6700\u9AD8\u7B49\u7EA7</div>'}`;Ut("city").dataset.k!==y&&(Ut("city").dataset.k=y,Ut("city").innerHTML=y);let g="";if(f.buildings.length&&(g+=`<div class="st ${i.deficit?"warn":""}">${Le("power")}<div><small>\u7535\u529B</small><b>${Math.round(i.powerProd)}<em>/${i.powerUse}</em></b></div></div>`,g+=`<div class="st">${Le("pop")}<div><small>\u4EBA\u53E3</small><b>${i.pop}<em>/${i.support}</em></b></div></div>`,f.terraform>0&&(g+=`<div class="st tf">${Le("planet")}<div><small>\u5927\u6C14\u6539\u9020</small><b>${Math.floor(f.terraform*100)}%</b></div></div>`),i.deficit&&(g+=`<div class="chip">${Le("warn")}\u7535\u529B\u4E0D\u8DB3\uFF1A\u591A\u5EFA\u592A\u9633\u80FD\u6216\u53CD\u5E94\u5806</div>`),i.housing&&f.buildings.some(I=>I.type==="beacon")&&i.support<=i.pop)){let I=[["housing","\u4F4F\u623F","house","\u5C45\u4F4F\u7A79\u9876"],["o2","\u6C27\u6C14","o2","\u5236\u6C27\u7AD9"],["food","\u98DF\u7269","food","\u6E29\u5BA4"],["water","\u6C34","water","\u6C34\u51B0\u63D0\u53D6\u5668"]].sort((A,C)=>i[A[0]]-i[C[0]])[0];g+=`<div class="chip">${Le(I[2])}\u7F3A\u5C11${I[1]}\uFF1A\u5EFA\u9020${I[3]}\u6765\u8FCE\u63A5\u65B0\u79FB\u6C11</div>`}Ut("colony").dataset.k!==g&&(Ut("colony").dataset.k=g,Ut("colony").innerHTML=g);let m=f.storm>.3?"\u6C99\u5C18\u66B4":f.raining?"\u964D\u96E8":"";Ut("clock").innerHTML=Nu().replace(/^.*? · /,"")+(m?`<span class="wx">${m}</span>`:"");let _=kn[f.chapter],M=f.chapter,v=_.goals.map((I,A)=>{let C=f.goalDone?.[M+":"+A],P=I.prog&&!C?I.prog():"",S=/^(\d+)\/(\d+)$/.exec(P);return`<div class="g ${C?"done":""}"><span class="cb"></span><div class="gx">${I.text}${P?`<small>${P}</small>`:""}${S?`<div class="gp"><i style="width:${Math.min(100,S[1]/S[2]*100)}%"></i></div>`:""}</div></div>`}).join("");v!==t0&&(t0=v,Ut("goals").innerHTML=v,Ut("goal-ch").textContent=_.title.replace(/ · /," ")),document.querySelectorAll("#hotbar .slot").forEach((I,A)=>{I.classList.toggle("on",A===Ve.index),I.classList.toggle("lock",!!(ys[A].need&&!f.upgrades[ys[A].need]))})}od("d-hp",70,e.health/e.maxHealth),od("d-o2",58,e.o2/e.maxO2),od("d-en",47,e.energy/100),Ut("d-o2n").textContent=Math.ceil(e.o2/e.maxO2*100),Ut("d-hpn").textContent=Math.ceil(e.health),Ut("d-enn").textContent=Math.ceil(e.energy),Ut("pl-en").textContent=Nu().split(" \xB7 ")[0]===xt.name?ld[Qt]:ld[Qt];let s=Ut("o2-state"),r=e.inLife?`${Le("o2")} \u8865\u6C27\u4E2D`:e.o2<e.maxO2*.2?`${Le("warn")} \u6C27\u6C14\u4E0D\u8DB3\uFF0C\u7ACB\u5373\u8FD4\u56DE`:"";s.dataset.k!==r&&(s.dataset.k=r,s.innerHTML=r),s.className=e.inLife?"ok":"bad",Ut("suit").classList.toggle("low",e.o2<e.maxO2*.2&&!e.inLife);let o=Mm(),a=Ut("radio");if(o){Qm!==o[1]&&(Qm=o[1],oo=0,a.querySelector(".who").textContent=o[0]);let d=o[1].length;oo<d&&(oo=Math.min(d,oo+n*26+1e-4),n===0&&(oo=d));let p=Math.floor(oo);a.querySelector(".txt").innerHTML=o[1].slice(0,p)+(p<d?'<span class="cur"></span>':""),a.classList.toggle("idle",p>=d),a.classList.add("show")}else a.classList.remove("show");let c=Ut("prompt");c.dataset.k!==(t.prompt||"")&&(c.dataset.k=t.prompt||"",c.innerHTML=t.prompt||""),c.classList.toggle("show",!!t.prompt),c.classList.toggle("drive",!!f.driving);let l=Ut("buildhint");if(Ve.id==="build"&&ue.type&&!f.menuOpen){let d=dn[ue.type];l.innerHTML=`<div class="bn">${d.name}</div><div>${Or(d.cost)}</div>
      <div class="st">${ue.valid?'<span class="okc">\u5DE6\u952E\u653E\u7F6E</span>':`<span class="badc">${ue.reason}</span>`}</div>
      <div><kbd>R</kbd>\u65CB\u8F6C <kbd>\u53F3\u952E</kbd>\u53D6\u6D88 <kbd>B</kbd>\u66F4\u6362\u84DD\u56FE</div>`,l.classList.add("show")}else l.classList.remove("show");Ut("hurt").style.opacity=Math.min(1,e.hurtT*1.6+(e.o2<=0?.5+Math.sin(performance.now()*.01)*.2:0)),Ut("lowo2").style.opacity=!e.inLife&&e.o2<e.maxO2*.2?(.4+Math.sin(performance.now()*.006)*.3)*(1-e.o2/(e.maxO2*.2)*.6):0,Ut("crosshair").className=t.crossClass||"";let h=Cm(),u=h&&Math.hypot(h.pos.x-e.pos.x,h.pos.z-e.pos.z)<260;Ut("bossbar").classList.toggle("hidden",!u),u&&(Ut("bossbar").querySelector("i").style.width=Math.max(0,h.hp/h.maxHp*100)+"%"),W1(),X1()}function od(n,t,e){let i=2*Math.PI*t,s=Ut(n);s.style.strokeDasharray=i,s.style.strokeDashoffset=i*(1-Math.max(0,Math.min(1,e)))}var e0={0:"\u5317",45:"\u4E1C\u5317",90:"\u4E1C",135:"\u4E1C\u5357",180:"\u5357",225:"\u897F\u5357",270:"\u897F",315:"\u897F\u5317"};function W1(){let n=f.player,t=n.fwd,e=Math.atan2(t.x,-t.z)*180/Math.PI,i=80,s=520,r=u=>s/2+u/i*(s/2),o="",a=Math.ceil((e-i)/5)*5;for(let u=a;u<=e+i;u+=5){let d=u-e,p=(u%360+360)%360;e0[p]!==void 0?o+=`<span class="lb ${p%90===0?"big":""}" style="left:${r(d)}px">${e0[p]}</span>`:o+=`<span class="tk ${p%15===0?"m":""}" style="left:${r(d)}px"></span>`}let c=(u,d)=>Math.atan2(u-n.pos.x,-(d-n.pos.z))*180/Math.PI,l=[{c:"home",t:`${Le("house")}${Math.round(Math.hypot(Pe.x-n.pos.x,Pe.z-n.pos.z))}m`,a:c(Pe.x,Pe.z)}];if(f.upgrades.scanner){let u=null,d=1e9;for(let p of f.nodes)if(p.type==="titanium"){let x=Math.hypot(p.x-n.pos.x,p.z-n.pos.z);x<d&&(d=x,u=p)}u&&l.push({c:"ti",t:`${Le("titanium")}${Math.round(d)}m`,a:c(u.x,u.z)})}let h=qm(n.pos);h&&l.push({c:"ship",t:`? ${Math.round(h.d)}m`,a:c(h.r.x,h.r.z)});for(let u of l){let d=(u.a-e+540)%360-180;Math.abs(d)<i&&(o+=`<span class="mk ${u.c}" style="left:${r(d)}px;top:16px">${u.t}</span>`)}Ut("compass").innerHTML=o}function X1(){let n=f.player,t=cd.width,e=t/2-6,i=f.upgrades.scanner?220:110,s=ad.width/un;lt.clearRect(0,0,t,t),lt.save(),lt.beginPath(),lt.arc(t/2,t/2,e,0,Math.PI*2),lt.clip(),lt.fillStyle="#0c0807",lt.fillRect(0,0,t,t),lt.globalAlpha=.75;let r=e*2/(i*2);lt.drawImage(ad,(n.pos.x-i+un/2)*s,(n.pos.z-i+un/2)*s,i*2*s,i*2*s,t/2-e,t/2-e,e*2,e*2),lt.globalAlpha=1;let o=d=>(d-n.pos.x)*r+t/2,a=d=>(d-n.pos.z)*r+t/2;lt.strokeStyle="rgba(255,255,255,.1)",lt.lineWidth=1;for(let d of[.33,.66])lt.beginPath(),lt.arc(t/2,t/2,e*d,0,Math.PI*2),lt.stroke();lt.strokeStyle="rgba(127,230,255,.55)",lt.setLineDash([3,4]),lt.beginPath(),lt.arc(o(ni.x),a(ni.z),xn[f.cityLevel].r*r,0,Math.PI*2),lt.stroke(),lt.setLineDash([]);let c=(d,p,x,y)=>{lt.fillStyle=y,lt.beginPath(),lt.arc(o(d),a(p),x,0,Math.PI*2),lt.fill()};for(let d of f.nodes){if(Math.abs(d.x-n.pos.x)>i||Math.abs(d.z-n.pos.z)>i)continue;let p=jn[d.type].color,x=o(d.x),y=a(d.z),g=d.type==="titanium"?3.2:2.2;lt.fillStyle=p,lt.beginPath(),lt.moveTo(x,y-g),lt.lineTo(x+g,y),lt.lineTo(x,y+g),lt.lineTo(x-g,y),lt.fill()}for(let d of f.buildings){let p=Math.max(2,d.def.r*r*.8);lt.fillStyle=d.broken?"#ff5a45":d.powered?"#ece6dc":"#ffb35c",lt.fillRect(o(d.x)-p,a(d.z)-p,p*2,p*2)}lt.fillStyle="#8dffb0";for(let d of f.colonists)lt.fillRect(o(d.pos.x)-1,a(d.pos.z)-1,2,2);let l=Math.sin(performance.now()*.008)>0;for(let d of f.enemies)c(d.pos.x,d.pos.z,d.guardian?3.5:2.6,l?"#ff5a45":"#a02818");c(Pe.x,Pe.z,3,"#8dffb0");for(let d of Zm())Math.abs(d.x-n.pos.x)>i*1.2||Math.abs(d.z-n.pos.z)>i*1.2||(lt.strokeStyle=d.found?"rgba(255,210,138,.4)":"#ffd28a",lt.lineWidth=1.5,lt.beginPath(),lt.arc(o(d.x),a(d.z),4,0,Math.PI*2),lt.stroke());lt.restore(),lt.save(),lt.translate(t/2,t/2),lt.strokeStyle="rgba(236,230,220,.35)",lt.lineWidth=1,lt.beginPath(),lt.arc(0,0,e+.5,0,Math.PI*2),lt.stroke();for(let d=0;d<72;d++){let p=d/72*Math.PI*2,x=d%18===0?6:d%6===0?4:2;lt.strokeStyle=d%18===0?"rgba(255,179,92,.9)":"rgba(236,230,220,.3)",lt.beginPath(),lt.moveTo(Math.sin(p)*(e+1),-Math.cos(p)*(e+1)),lt.lineTo(Math.sin(p)*(e+1+x),-Math.cos(p)*(e+1+x)),lt.stroke()}let h=Math.atan2(n.fwd.x,-n.fwd.z);lt.rotate(h);let u=lt.createRadialGradient(0,0,0,0,0,e*.6);u.addColorStop(0,"rgba(255,179,92,.35)"),u.addColorStop(1,"rgba(255,179,92,0)"),lt.fillStyle=u,lt.beginPath(),lt.moveTo(0,0),lt.arc(0,0,e*.6,-Math.PI/2-.55,-Math.PI/2+.55),lt.closePath(),lt.fill(),lt.fillStyle="#fff",lt.beginPath(),lt.moveTo(0,-7),lt.lineTo(5,5),lt.lineTo(0,2.5),lt.lineTo(-5,5),lt.closePath(),lt.fill(),lt.restore()}var o0="starport-achv",qc=[{id:"first",name:"\u7B2C\u4E00\u6B65",desc:"\u5728\u5F02\u661F\u91C7\u96C6\u7B2C\u4E00\u5757\u77FF\u77F3",icon:"iron",check:()=>f.stats.mined.iron+f.stats.mined.silicon+f.stats.mined.ice>0},{id:"breathe",name:"\u547C\u5438",desc:"\u5EFA\u8D77\u7B2C\u4E00\u5EA7\u5236\u6C27\u7AD9",icon:"o2",check:()=>f.stats.built.oxygen>0},{id:"home",name:"\u7B2C\u4E00\u4E2A\u5BB6",desc:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",icon:"dome",check:()=>f.stats.built.habitat>0},{id:"welcome",name:"\u6B22\u8FCE\u56DE\u5BB6",desc:"\u8FCE\u63A5\u7B2C\u4E00\u6279\u79FB\u6C11",icon:"pop",check:()=>f.stats.arrived>0},{id:"listen",name:"\u503E\u542C\u8005",desc:"\u4E0E 8 \u4F4D\u5C45\u6C11\u4EA4\u8C08",icon:"radio",check:()=>(f.stats.talked||[]).length>=8},{id:"night",name:"\u957F\u591C\u5B88\u671B\u8005",desc:"\u51FB\u9000 15 \u53EA\u9508\u8680\u86DB",icon:"shield",check:()=>f.stats.kills>=15},{id:"guardian",name:"\u6676\u4F53\u730E\u4EBA",desc:"\u51FB\u8D25\u4E00\u53EA\u949B\u77FF\u5B88\u536B",icon:"titanium",check:()=>(f.stats.guardKills||0)>0},{id:"road",name:"\u516C\u8DEF\u65C5\u884C",desc:"\u9A7E\u9A76\u6F2B\u6E38\u8F66\u884C\u9A76 3 \u516C\u91CC",icon:"rover",check:()=>(f.stats.driven||0)>=3e3},{id:"meteor",name:"\u661F\u843D\u4E4B\u591C",desc:"\u91C7\u96C6\u4E00\u5757\u9668\u77F3",icon:"meteor",check:()=>(f.stats.meteorMined||0)>0},{id:"storm",name:"\u98CE\u66B4\u4E4B\u4E2D",desc:"\u7ECF\u5386\u4E00\u573A\u6C99\u5C18\u66B4",icon:"storm",check:()=>f.storm>.85},{id:"fly",name:"\u98DE\u7FD4",desc:"\u5236\u9020\u55B7\u6C14\u80CC\u5305",icon:"jet",check:()=>!!f.upgrades.jetpack},{id:"town",name:"\u5C0F\u9547",desc:"\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C\u5C0F\u9547\u300D",icon:"colony",check:()=>f.cityLevel>=2},{id:"metro",name:"\u5927\u90FD\u4F1A",desc:"\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C\u5927\u90FD\u4F1A\u300D",icon:"tower",check:()=>f.cityLevel>=4},{id:"fifty",name:"\u4E94\u5341\u4E2A\u706F\u706B",desc:"\u5355\u9897\u661F\u7403\u4EBA\u53E3\u8FBE\u5230 50",icon:"pop",check:()=>f.colony.pop>=50},{id:"reactor",name:"\u7B2C\u4E8C\u9897\u592A\u9633",desc:"\u70B9\u4EAE\u805A\u53D8\u53CD\u5E94\u5806",icon:"power",check:()=>f.stats.built.reactor>0},{id:"blue",name:"\u84DD\u8272\u5929\u7A7A",desc:"\u5B8C\u6210\u706B\u661F\u5927\u6C14\u6539\u9020",icon:"planet",check:()=>f.terraform>=1},{id:"europa",name:"\u51B0\u4E0B\u4E4B\u6D77",desc:"\u767B\u9646\u6728\u536B\u4E8C\xB7\u6B27\u7F57\u5DF4",icon:"ice",check:()=>Qt==="europa"},{id:"kepler",name:"\u53CC\u65E5\u4E4B\u5730",desc:"\u62B5\u8FBE\u5F00\u666E\u52D2-442b",icon:"sun",check:()=>Qt==="kepler"},{id:"civ",name:"\u661F\u9645\u6587\u660E",desc:"\u5EFA\u6210\u6587\u660E\u7EAA\u5FF5\u7891",icon:"monument",check:()=>f.stats.built.monument>0},{id:"relic",name:"\u56DE\u58F0",desc:"\u53D1\u73B0\u7B2C\u4E00\u5904\u9057\u8FF9",icon:"radio",check:()=>ro().found>0},{id:"archaeo",name:"\u8003\u53E4\u5B66\u5BB6",desc:"\u53D1\u73B0\u4E00\u9897\u661F\u7403\u4E0A\u7684\u5168\u90E8\u9057\u8FF9",icon:"book",check:()=>{let n=ro();return n.total>0&&n.found===n.total}},{id:"boss",name:"\u6676\u6BCD\u9668\u843D",desc:"\u5728\u6676\u6F6E\u4E4B\u591C\u51FB\u8D25\u6676\u6BCD",icon:"boss",check:()=>(f.stats.bossKills||0)>0},{id:"fleet",name:"\u65E0\u4EBA\u673A\u8230\u961F",desc:"\u65E0\u4EBA\u673A\u8FD0\u56DE 30 \u6279\u7269\u8D44",icon:"drone",check:()=>(f.stats.droneHauls||0)>=30},{id:"lv3",name:"\u7CBE\u76CA\u6C42\u7CBE",desc:"\u628A\u4E00\u5EA7\u5EFA\u7B51\u5347\u5230 3 \u7EA7",icon:"star",check:()=>f.buildings.some(n=>(n.level||1)>=3)},{id:"photo",name:"\u6444\u5F71\u5E08",desc:"\u4F7F\u7528\u62CD\u7167\u6A21\u5F0F",icon:"camera",check:()=>!!f.usedPhoto}],js={};try{js=JSON.parse(localStorage.getItem(o0))||{}}catch{js={}}var yd=[],vd=0,$c=0;function a0(n){if(vd-=n,$c-=n,vd<=0){vd=1;for(let e of qc){if(js[e.id])continue;let i=!1;try{i=e.check()}catch{i=!1}if(i){js[e.id]=Date.now(),yd.push(e);try{localStorage.setItem(o0,JSON.stringify(js))}catch{}}}}let t=document.getElementById("achv-pop");if($c<=0&&t.classList.contains("show")&&t.classList.remove("show"),$c<=-.6&&yd.length){let e=yd.shift();t.innerHTML=`<div class="ai">${Le(e.icon)}</div><div><div class="k">ACHIEVEMENT UNLOCKED</div><div class="n">${e.name}</div><div class="d">${e.desc}</div></div>`,t.classList.add("show"),$c=4.5,st.play("achv")}}function _d(){return`<h3>\u6210\u5C31 \xB7 ${qc.filter(t=>js[t.id]).length} / ${qc.length}</h3><div class="achv">${qc.map(t=>`<div class="ach ${js[t.id]?"on":""}"><div class="ai">${Le(t.icon)}</div><div><div class="an">${t.name}</div><div class="ad">${t.desc}</div></div></div>`).join("")}</div>`}var l0=!1,h0=[],u0=[],d0=[];function c0(n,t,e,i,s){let r=new we;r.setAttribute("position",new ze(new Float32Array(n*3),3));let o=new An({size:e,map:Nn(),color:t,transparent:!0,opacity:i,depthWrite:!1,blending:s?Ae:li}),a=new Dn(r,o);a.frustumCulled=!1,f.scene.add(a);let c=new Float32Array(n*3);for(let l=0;l<n;l++)c[l*3]=Math.random(),c[l*3+1]=Math.random()*Math.PI*2,c[l*3+2]=Math.random();return{p:a,seed:c,n}}function $1(){if(l0=!0,Qt==="mars")for(let n=0;n<3;n++){let t=c0(420,14195306,2.4,.45,!1);h0.push({...t,x:0,z:0,vx:0,vz:0,h:40+Math.random()*30,life:0,k:0})}else if(Qt==="europa"){let n=Fi.slice(0,8).map(t=>({x:t.x+(Math.random()-.5)*t.r*.6,z:t.z+(Math.random()-.5)*t.r*.6}));n.push({x:60,z:70},{x:-90,z:-40},{x:120,z:140});for(let t of n){if(Math.abs(t.x)>Ht-200||Math.abs(t.z)>Ht-200)continue;let e=c0(500,15267583,2.6,.6,!0);u0.push({...e,x:t.x,z:t.z,y:Et(t.x,t.z),t:Math.random()*30,on:0})}}else if(Qt==="kepler"){let n=new he(1,12,6,0,Math.PI*2,0,Math.PI/2);for(let t=0;t<34;t++){let e=.45+Math.random()*.4,i=new It().setHSL(e,.9,.6),s=new bt(n,new re({color:i,transparent:!0,opacity:.55,depthWrite:!1,blending:Ae})),r=new as(new Ni({map:Nn(),color:i,transparent:!0,depthWrite:!1,blending:Ae})),o=new bt(new rn(.6,3,6,1,!0),s.material);o.position.y=-1.6,o.rotation.x=Math.PI;let a=new jt;a.add(s,r,o),r.scale.setScalar(6);let c=.6+Math.random()*1.2;a.scale.setScalar(c),f.scene.add(a),d0.push({g:a,m:s,s:r,x:(Math.random()-.5)*500,z:(Math.random()-.5)*500,alt:14+Math.random()*30,ph:Math.random()*6,sp:.5+Math.random()})}}}var OS=new T,Md=0;function f0(n){l0||$1();let t=f.player.pos,e=performance.now()*.001,i=1-f.time.night;for(let s of h0){if(s.life-=n,s.life<=0){let l=Math.random()*Math.PI*2,h=90+Math.random()*200;s.x=Fe.clamp(t.x+Math.cos(l)*h,-Ht+160,Ht-160),s.z=Fe.clamp(t.z+Math.sin(l)*h,-Ht+160,Ht-160);let u=Math.random()*Math.PI*2;s.vx=Math.cos(u)*3,s.vz=Math.sin(u)*3,s.life=40+Math.random()*40,s.h=35+Math.random()*40}s.x+=s.vx*n,s.z+=s.vz*n;let r=Math.min(1,s.life/5,(60-s.life)/5+1)*i*(1-f.storm)*(f.terraform<1?1:.2);s.k+=(r-s.k)*Math.min(1,n),s.p.material.opacity=.45*s.k;let o=s.p.geometry.attributes.position.array,a=Et(s.x,s.z);for(let l=0;l<s.n;l++){let h=s.seed,u=(h[l*3]+e*.08*(.6+h[l*3+2]))%1,d=h[l*3+1]+e*(3+(1-u)*2),p=.8+u*u*9+h[l*3+2]*1.5,x=Math.sin(e*.7+u*4)*u*3;o[l*3]=s.x+Math.cos(d)*p+x,o[l*3+1]=a+u*s.h,o[l*3+2]=s.z+Math.sin(d)*p}s.p.geometry.attributes.position.needsUpdate=!0;let c=Math.hypot(t.x-s.x,t.z-s.z);c<8&&s.k>.5&&!f.driving&&(f.player.vel.x+=(t.x-s.x)/c*n*20,f.player.vel.z+=(t.z-s.z)/c*n*20)}Md-=n;for(let s of u0){s.t-=n,s.t<=0&&s.on<=0&&(s.on=9,s.t=25+Math.random()*30,Math.hypot(t.x-s.x,t.z-s.z)<120&&st.play("rumble")),s.on-=n;let r=Fe.clamp(Math.min(s.on,9-s.on),0,1.5)/1.5;if(s.p.material.opacity=.6*r,r<=0)continue;let o=s.p.geometry.attributes.position.array,a=70;for(let c=0;c<s.n;c++){let l=s.seed,h=(l[c*3]+e*.35)%1,u=.4+h*9*l[c*3+2]+h*h*4;o[c*3]=s.x+Math.cos(l[c*3+1])*u,o[c*3+1]=s.y+Math.sin(h*Math.PI*.9)*a*(.6+l[c*3+2]*.4),o[c*3+2]=s.z+Math.sin(l[c*3+1])*u}s.p.geometry.attributes.position.needsUpdate=!0,Math.hypot(t.x-s.x,t.z-s.z)<40&&Md<=0&&(Md=.5,st.play("jet"))}for(let s of d0){s.ph+=n*s.sp,s.x+=Math.sin(s.ph*.3)*n*2,s.z+=Math.cos(s.ph*.23)*n*2,Math.abs(s.x-t.x)>260&&(s.x=t.x-Math.sign(s.x-t.x)*250),Math.abs(s.z-t.z)>260&&(s.z=t.z-Math.sign(s.z-t.z)*250);let r=Et(s.x,s.z)+s.alt+Math.sin(s.ph)*2;s.g.position.set(s.x,r,s.z);let o=.75+Math.sin(s.ph*3)*.25;s.m.scale.set(1+Math.sin(s.ph*3)*.12,1-Math.sin(s.ph*3)*.1,1+Math.sin(s.ph*3)*.12);let a=.15+f.time.night*.85;s.m.material.opacity=.5*a*o,s.s.material.opacity=.7*a*o}}var Je=null,p0=new hn,Ed=new Mn,na=new T;function q1(){let n=new jt,t=new jt;n.add(t);let e=(l,h,u,d,p,x=t)=>{let y=new bt(l,h);return y.position.set(u,d,p),y.castShadow=!0,y.receiveShadow=!0,x.add(y),y};e(new ne(2.6,.7,4.6),O.white,0,1,0),e(new ne(2.62,.18,4.62),O.orange,0,1.3,0),e(new ne(2.2,.9,2.2),O.panel,0,1.8,.6);let i=e(new he(1.15,16,10,0,Math.PI*2,0,Math.PI/2),O.glass,0,1.75,-.9);i.scale.set(1,.85,1.2),i.castShadow=!1,e(new ne(2.4,.3,.5),O.dark,0,.9,-2.4),e(new oe(.03,.03,1.6,4),O.metal,.9,3,1.4);let s=ie(16728128,.8,t,.9,3.8,1.4),r=[-.8,.8].map(l=>ie(16773853,1.4,t,l,1.05,-2.68)),o=[],a=new oe(.55,.55,.5,14);a.rotateZ(Math.PI/2);for(let l of[-1.6,0,1.6])for(let h of[-1.45,1.45]){let u=e(a,O.dark,h,.55,l,n);e(new oe(.25,.25,.52,6).rotateZ(Math.PI/2),O.metal,0,0,0,u),o.push(u)}let c=new Ur(16773853,0,60,.5,.5,1.2);return c.position.set(0,1.2,-2.4),c.target.position.set(0,0,-20),t.add(c,c.target),{g:n,body:t,wheels:o,tip:s,lamp:c,heads:r}}function Zc(n,t,e=0){if(Je)return Je;let i=q1();return f.scene.add(i.g),Je={...i,x:n,z:t,y:Et(n,t),h:e,speed:0,vy:0,lookYaw:0,pitch:-.05,spin:0,hitT:0,air:!1},Je.collider=f.colliders.add({x:n,z:t,r:2,kind:"rover"}),bd(0),Je}function Jc(){return Je}function m0(){return Je?{x:+Je.x.toFixed(1),z:+Je.z.toFixed(1),h:+Je.h.toFixed(2)}:null}function Yc(n,t){return Et(n,t)}function bd(n){let t=Je,e=Math.sin(t.h),i=Math.cos(t.h),s=-e,r=-i,o=i,a=-e,c=Yc(t.x+s*1.8,t.z+r*1.8),l=Yc(t.x-s*1.8,t.z-r*1.8),h=Yc(t.x-o*1.3,t.z-a*1.3),u=Yc(t.x+o*1.3,t.z+a*1.3),d=Math.atan2(c-l,3.6),p=Math.atan2(u-h,2.6);t.g.position.set(t.x,t.y,t.z),Ed.set(t.air?t.g.rotation.x:d,t.h,t.air?t.g.rotation.z:-p,"YXZ"),t.air||t.g.rotation.copy(Ed),t.spin+=t.speed*n/.55;for(let x of t.wheels)x.rotation.x=-t.spin;return(c+l+h+u)/4}function g0(){Je&&(f.driving=!0,Je.lookYaw=0,Je.pitch=-.08,f.colliders.remove(Je.collider),st.play("place"))}function Sd(n){let t=Je;if(!t)return;f.driving=!1,st.engine(0);let e=Math.cos(t.h),i=Math.sin(t.h),s=t.x+e*3,r=t.z-i*3;f.colliders.overlaps(s,r,.5)&&(s=t.x-e*3,r=t.z+i*3),n.pos.set(s,Et(s,r),r),n.vel.set(0,0,0),n.yaw=t.h+t.lookYaw,n.pitch=t.pitch,t.speed=0,t.lamp.intensity=0,t.collider=f.colliders.add({x:t.x,z:t.z,r:2,kind:"rover"})}function x0(n,t,e){if(!Je)return;let i=Je;if(i.tip.visible=Math.sin(performance.now()*.005)>0,!f.driving){i.y=bd(0);return}f.locked&&(i.lookYaw=Fe.clamp(i.lookYaw-at.dx*at.sens,-2.4,2.4),i.pitch=Fe.clamp(i.pitch-at.dy*at.sens,-1,.9));let s=(at.down("KeyW")||at.down("ArrowUp")?1:0)-(at.down("KeyS")||at.down("ArrowDown")?1:0),r=(at.down("KeyA")||at.down("ArrowLeft")?1:0)-(at.down("KeyD")||at.down("ArrowRight")?1:0),o=at.down("ShiftLeft")?28:17;i.air||(s>0?i.speed+=(i.speed<0?22:11)*n:s<0?i.speed-=(i.speed>0?22:7)*n:i.speed*=1-.7*n,at.down("Space")&&(i.speed*=1-3.5*n),i.speed=Fe.clamp(i.speed,-7,o),i.speed>o&&(i.speed-=20*n),i.h+=r*n*1.5*Fe.clamp(i.speed/5,-1,1)),na.set(-Math.sin(i.h),0,-Math.cos(i.h)),f.stats.driven=(f.stats.driven||0)+Math.abs(i.speed)*n,i.x=Fe.clamp(i.x+na.x*i.speed*n,-Ht+125,Ht-125),i.z=Fe.clamp(i.z+na.z*i.speed*n,-Ht+125,Ht-125);for(let l of f.colliders.query(i.x,i.z)){l.kind==="flora"&&Math.abs(i.speed)>0;let h=i.x-l.x,u=i.z-l.z,d=Math.hypot(h,u),p=l.r+1.9;if(d<p&&d>.001){if(l.kind==="rock"&&l.r<1.3)continue;i.x=l.x+h/d*p,i.z=l.z+u/d*p,Math.abs(i.speed)>5&&(st.play("land"),gt.dustPuff(new T(i.x,i.y+1,i.z),6,2)),i.speed*=-.25}}if(i.hitT-=n,Math.abs(i.speed)>6&&i.hitT<=0)for(let l of f.enemies)l.dead||Math.hypot(l.pos.x-i.x,l.pos.z-i.z)<2.6+l.scale&&(Ko(l,Math.abs(i.speed)*4,"player"),i.hitT=.4,i.speed*=.7,gt.burst(new T(l.pos.x,l.pos.y+1,l.pos.z),[1,.5,.2],20,6));let a=Et(i.x,i.z);if(i.air)i.vy-=xt.gravity*n,i.y+=i.vy*n,i.y<=a&&(i.y=a,i.air=!1,i.vy<-5&&(st.play("land"),gt.dustPuff(new T(i.x,i.y,i.z),14,3)),i.vy=0);else{let l=i.y+i.vy*n-.5*xt.gravity*n*n;if(a<l-.25&&i.vy>1.5&&Math.abs(i.speed)>12)i.air=!0,i.vy=Math.min(i.vy,7),i.y=l;else{let h=(a-i.y)/Math.max(n,.001);i.vy=i.vy*.6+h*.4,i.y=a}}if(bd(n),Math.abs(i.speed)>4&&!i.air&&Math.random()<.6){let l=new T(i.x-na.x*2.5+(Math.random()-.5)*2,i.y+.3,i.z-na.z*2.5);gt.dustPuff(l,1,.5)}i.lamp.intensity=f.time.night>.3?80:0;for(let l of i.heads)l.visible=f.time.night>.3;p0.setFromEuler(Ed.set(i.pitch,i.lookYaw,0,"YXZ")),e.quaternion.copy(i.body.getWorldQuaternion(new hn)).multiply(p0);let c=new T(0,2.15,-.7).applyQuaternion(i.g.quaternion).add(i.g.position);e.position.copy(c),e.getWorldDirection(t.fwd),t.pos.set(i.x,i.y,i.z),t.vel.set(0,0,0),t.inLife=!0,t.o2=Math.min(t.maxO2,t.o2+20*n),t.energy=Math.min(100,t.energy+10*n),t.hurtT=Math.max(0,t.hurtT-n),st.engine(Math.abs(i.speed)/28)}function y0(){return Je?Math.round(Math.abs(Je.speed)*3.6):0}var Kc=[],Rd=new rn(1,1,8,1,!0);Rd.rotateX(Math.PI);Rd.translate(0,-.5,0);var Y1=new T(0,1,0),Td=0,wd=0,jc=0,Ad=0,v0=-1;function Z1(){Td=45,Ad=0,jc=6,$e("\u65B9\u821F \xB7 AI","\u770B\u5929\u4E0A\u2014\u2014\u6D41\u661F\u96E8\uFF01\u6709\u51E0\u9897\u4F1A\u843D\u5230\u9644\u8FD1\u3002\u9668\u77F3\u91CC\u5BCC\u542B\u949B\uFF0C\u53BB\u5760\u843D\u70B9\u770B\u770B\u3002"),f.events.emit("toast","\u2604 \u6D41\u661F\u96E8")}function _0(n){let t=f.player.pos,e;if(n){for(let h=0;h<20;h++){let u=Math.random()*Math.PI*2,d=40+Math.random()*110,p=Fe.clamp(t.x+Math.cos(u)*d,-Ht+180,Ht-180),x=Fe.clamp(t.z+Math.sin(u)*d,-Ht+180,Ht-180);if(!f.buildings.some(y=>Math.hypot(y.x-p,y.z-x)<y.def.r+14)){e=new T(p,Et(p,x),x);break}}if(!e)return}else{let h=Math.random()*Math.PI*2,u=150+Math.random()*350;e=new T(t.x+Math.cos(h)*u,t.y+110+Math.random()*140,t.z+Math.sin(h)*u)}let i=new T((Math.random()-.5)*1.2,-.55-Math.random()*.3,(Math.random()-.5)*1.2).normalize(),s=n?520:420,r=e.clone().addScaledVector(i,-s),o=ie(n?16756848:16769216,n?18:10,f.scene);o.material.fog=!1,o.position.copy(r);let a=new bt(Rd,new re({color:n?16751184:16767144,transparent:!0,opacity:.75,blending:Ae,depthWrite:!1,fog:!1})),c=n?90:70+Math.random()*70,l=n?2.2:1.3;a.scale.set(l,c,l),a.quaternion.setFromUnitVectors(Y1,i),a.position.copy(r),f.scene.add(a),Kc.push({pos:r,vel:i.multiplyScalar(n?150:220),head:o,tail:a,impact:n,target:e,life:s/(n?150:220)})}function M0(n){f.time.night>.7&&v0!==f.time.day&&f.time.day>=2&&f.storm<.1&&!f.ended&&(v0=f.time.day,Math.random()<.4&&Z1()),Td>0&&(Td-=n,wd-=n,jc-=n,wd<=0&&(wd=.15+Math.random()*.35,_0(!1)),jc<=0&&Ad<4&&(jc=7+Math.random()*5,Ad++,_0(!0)));for(let e=Kc.length-1;e>=0;e--){let i=Kc[e];i.life-=n,i.pos.addScaledVector(i.vel,n),i.head.position.copy(i.pos),i.tail.position.copy(i.pos);for(let s=0;s<3;s++)gt.trail(i.pos.clone().addScaledVector(i.vel,-n*s/3),i.impact?[1,.6,.3]:[1,.85,.6],i.impact?1.2:.7);i.life<=0&&(f.scene.remove(i.head),f.scene.remove(i.tail),i.tail.material.dispose(),Kc.splice(e,1),i.impact&&J1(i.target))}}function J1(n){let t=n.clone();t.y+=1.5,gt.burst(t,[1,.55,.2],120,22),gt.ring(n,2,90),gt.dustPuff(t,40,8),st.play("rumble"),st.play("kill");let e=n.distanceTo(f.player.pos);if(e<80&&(f.player.landDip=Math.max(f.player.landDip,.4*(1-e/80))),!f.colliders.overlaps(n.x,n.z,2.5)){let i=$r("titanium",n.x,n.z,10+Math.floor(Math.random()*8));i.meteor=!0}f.events.emit("toast",`\u2604 \u9668\u77F3\u5760\u843D\u5728 ${Math.round(e)} \u7C73\u5916`)}var zt=n=>document.getElementById(n);f.debug=/[?&]debug/.test(location.search);var ia=zt("c"),yn=new Ir({canvas:ia,antialias:!0,powerPreference:"high-performance"});yn.setPixelRatio(Math.min(window.devicePixelRatio,1.5));yn.setSize(window.innerWidth,window.innerHeight);yn.shadowMap.enabled=!0;yn.shadowMap.type=uu;yn.toneMapping=Oo;yn.toneMappingExposure=1;var el="high";try{el=localStorage.getItem("starport-quality")||((navigator.hardwareConcurrency||8)<=4?"mid":"high")}catch{}function w0(n,t){el=n,yn.setPixelRatio(n==="high"?Math.min(window.devicePixelRatio,1.5):n==="mid"?1:.75),yn.setSize(window.innerWidth,window.innerHeight);let e=n!=="low";yn.shadowMap.enabled!==e&&(yn.shadowMap.enabled=e,t&&f.scene.traverse(i=>{i.material&&[].concat(i.material).forEach(s=>{s.needsUpdate=!0})}))}w0(el,!1);var Gi=new os,Ge=new Xe(72,window.innerWidth/window.innerHeight,.1,6e3);f.scene=Gi;f.camera=Ge;f.renderer=yn;f.colliders=new mc(16);window.addEventListener("resize",()=>{Ge.aspect=window.innerWidth/window.innerHeight,Ge.updateProjectionMatrix(),yn.setSize(window.innerWidth,window.innerHeight)});Hp(Gi);Rp(Gi);Vp(Gi);var nl=Np();nl.group.position.set(Pe.x,Et(Pe.x,Pe.z)+.1,Pe.z);nl.group.rotation.y=.6;Gi.add(nl.group);f.colliders.add({x:Pe.x,z:Pe.z,r:3.4,kind:"lander"});var Xt=new Bc(Ge);f.player=Xt;Fm(Ge);Pm(ia);n0(Cp(350));Ou(Gi);f.requestLock=()=>{if(f.debug){f.locked=!0;return}try{let n=ia.requestPointerLock();n&&n.catch&&n.catch(()=>{})}catch{}};document.addEventListener("pointerlockchange",()=>{f.locked=document.pointerLockElement===ia,!f.locked&&f.started&&!f.menuOpen&&!Xt.dead&&!f.endingShown&&!f.cine&&Ks("pause")});ia.addEventListener("click",()=>{st.init(),f.started&&!f.locked&&!f.menuOpen&&!Xt.dead&&f.requestLock()});function Wi(n){if(!f.started)return;let t={v:1,res:f.res,upgrades:f.upgrades,stats:f.stats,chapter:f.chapter,goalDone:f.goalDone,terraform:f.terraform,ended:f.ended,nights:f.nightsSurvived||0,city:f.cityLevel,pop:f.popTotal||0,launched:!!f.launched,rover:m0(),relics:f.relicsFound||[],time:{t:f.time.t,day:f.time.day},player:{x:Xt.pos.x,z:Xt.pos.z,yaw:Xt.yaw,o2:Xt.o2,hp:Xt.health},buildings:ym(),nodes:Zp(),colonists:Vm(),storm:bm()};try{localStorage.setItem(xc,JSON.stringify(t)),n||Ze("\u5DF2\u4FDD\u5B58")}catch{n||Ze("\u4FDD\u5B58\u5931\u8D25")}}function K1(){try{return JSON.parse(localStorage.getItem(xc))}catch{return null}}function j1(n){Object.assign(f.res,n.res),f.upgrades=n.upgrades||{},Jp(n.nodes);for(let[t,e,i,s,r,o]of n.buildings)dn[t]&&Uc(t,e,i,s,r,!1,o||1);f.stats=n.stats,f.goalDone=n.goalDone||{},f.terraform=n.terraform||0,f.ended=!!n.ended,f.nightsSurvived=n.nights||0,wm(f.terraform>=1),f.time.t=n.time.t,f.time.day=n.time.day,Xt.pos.set(n.player.x,Et(n.player.x,n.player.z),n.player.z),Xt.yaw=n.player.yaw,Xt.o2=n.player.o2,Xt.health=Math.max(30,n.player.hp),Gm(n.colonists||[]),n.rover&&Zc(n.rover.x,n.rover.z,n.rover.h),f.relicsFound=n.relics||[],f.cityLevel=n.city||0,f.popTotal=n.pop??(n.colonists||[]).length,f.launched=!!n.launched,Ou(Gi),Sm(n.storm),Jo(n.chapter,!0),ki(),f.terraform>0&&Cu(T0(),f.terraform)}var T0=()=>f.buildings.filter(n=>n.type==="terraformer").map(n=>({x:n.x,z:n.z})),Q1=xt.intro;document.querySelector(".logo span").textContent=xt.title;document.title="\u661F\u6E2F\uFF1A"+xt.title;En.visited?.length&&(zt("touch-note").innerHTML="\u5DF2\u5F00\u62D3\uFF1A"+En.visited.map(n=>`${Rn[n.id].name}\uFF08${n.pop} \u4EBA\uFF09`).join(" \xB7 "));zt("story").innerHTML=Q1.map((n,t)=>`<p style="animation-delay:${.4+t*1.1}s">${n}</p>`).join("");var vi=K1();vi&&(zt("btn-continue").classList.remove("hidden"),zt("cont-info").textContent=`${xt.name} \xB7 ${kn[vi.chapter]?.title||""} \xB7 \u7B2C ${vi.time.day} \u65E5 \xB7 ${vi.pop??vi.colonists?.length??0} \u4F4D\u5C45\u6C11`);matchMedia("(pointer: coarse)").matches&&(zt("touch-note").innerHTML+="\u672C\u6E38\u620F\u9700\u8981\u952E\u76D8\u548C\u9F20\u6807\uFF0C\u8BF7\u5728\u7535\u8111\u4E0A\u6E38\u73A9\u3002");function tE(n){if(f.debug){setTimeout(n,1200);return}let t=zt("cine"),e=xt.intro;f.cine=!0,t.classList.remove("hidden","out"),zt("cine-lines").innerHTML=e.map((o,a)=>`<p style="animation-delay:${.6+a*2.1}s">${o}</p>`).join("");let i=!1,s=()=>{i||(i=!0,t.classList.add("out"),f.cine=!1,window.removeEventListener("keydown",r),window.removeEventListener("mousedown",s),setTimeout(()=>t.classList.add("hidden"),1500),setTimeout(n,900))},r=o=>{(o.code==="Space"||o.code==="Escape"||o.code==="Enter")&&s()};window.addEventListener("keydown",r),window.addEventListener("mousedown",s),setTimeout(s,1500+e.length*2100+1800)}function il(n){if(st.init(),n&&vi)j1(vi);else{if(localStorage.removeItem(xc),$p(),En.carry&&Qt!=="mars"){Object.assign(f.upgrades,En.carry.upgrades||{});for(let t in En.carry.res)f.res[t]+=En.carry.res[t];f.upgrades.rover&&Zc(Pe.x+10,Pe.z+4,.5),setTimeout(()=>Ze("\u968F\u8230\u7269\u8D44\u5DF2\u5378\u8F7D\uFF0C\u6240\u6709\u88C5\u5907\u5DF2\u540C\u6B65"),4e3)}f.time.t=.29,Jo(0,!0),tE(()=>{ea(kn[0]),kn[0].radio.forEach(t=>$e(t[0],t[1]))})}$m(),zt("intro").classList.add("hidden"),document.body.classList.add("playing"),f.started=!0,f.requestLock()}zt("btn-new").addEventListener("click",()=>{vi&&!confirm("\u5F00\u59CB\u65B0\u7684\u65C5\u7A0B\u4F1A\u8986\u76D6\u73B0\u6709\u5B58\u6863\uFF0C\u786E\u5B9A\u5417\uFF1F")||il(!1)});zt("btn-continue").addEventListener("click",()=>il(!0));zt("tele-planet").textContent=`${xt.name} \xB7 ${xt.place}`;var eE=`<h3>\u64CD\u4F5C</h3><div class="keys">
  <div><kbd>W A S D</kbd><span>\u79FB\u52A8</span></div><div><kbd>\u9F20\u6807</kbd><span>\u73AF\u89C6</span></div>
  <div><kbd>Shift</kbd><span>\u51B2\u523A</span></div><div><kbd>\u7A7A\u683C</kbd><span>\u8DF3\u8DC3 / \u55B7\u6C14\u80CC\u5305</span></div>
  <div><kbd>\u5DE6\u952E</kbd><span>\u91C7\u77FF \xB7 \u5C04\u51FB \xB7 \u653E\u7F6E\u5EFA\u7B51</span></div><div><kbd>\u53F3\u952E</kbd><span>\u53D6\u6D88\u5EFA\u9020</span></div>
  <div><kbd>1</kbd><kbd>2</kbd><span>\u5207\u6362\u5DE5\u5177</span></div><div><kbd>B</kbd><span>\u5EFA\u9020\u84DD\u56FE</span></div>
  <div><kbd>E</kbd><span>\u4E92\u52A8 \xB7 \u4EA4\u8C08 \xB7 \u4E0A\u8F66</span></div><div><kbd>U</kbd><span>\u5347\u7EA7\u6CE8\u89C6\u7684\u5EFA\u7B51</span></div>
  <div><kbd>F</kbd><span>\u624B\u7535\u7B52</span></div><div><kbd>Tab</kbd><span>\u6B96\u6C11\u5730\u6863\u6848</span></div>
  <div><kbd>P</kbd><span>\u62CD\u7167\u6A21\u5F0F</span></div><div><kbd>Esc</kbd><span>\u6682\u505C</span></div></div>
  <h3>\u751F\u5B58</h3><p>\u6C27\u6C14\u4F1A\u6301\u7EED\u6D88\u8017\u3002\u7740\u9646\u8231\u3001\u5236\u6C27\u7AD9\u548C\u5C45\u4F4F\u7A79\u9876\u9644\u8FD1\u4F1A\u81EA\u52A8\u8865\u6C27\u3002\u5EFA\u597D\u4F4F\u623F\u3001\u6C27\u6C14\u3001\u98DF\u7269\u3001\u6C34\u548C\u7740\u9646\u573A\uFF0C\u79FB\u6C11\u98DE\u8239\u5C31\u4F1A\u5230\u6765\u3002\u591C\u91CC\u8981\u63D0\u9632\u9508\u8680\u86DB\u3002</p>`,A0=n=>{let t=zt("intro-pane");if(!t.classList.contains("hidden")&&t.dataset.k===n.slice(0,20)){t.classList.add("hidden");return}t.dataset.k=n.slice(0,20),t.innerHTML=n,t.classList.remove("hidden"),st.play("tick")};zt("btn-t-help").addEventListener("click",()=>A0(eE));zt("btn-t-achv").addEventListener("click",()=>A0(_d()));Qt!=="mars"&&!vi&&(zt("btn-new").textContent=`\u767B\u9646 ${xt.name}`);if(En.autoResume&&vi){let n=zr();delete n.autoResume,Tu(n),setTimeout(()=>{il(!0),Ze(`\u6B22\u8FCE\u56DE\u6765 \xB7 ${xt.name}`)},50)}zt("btn-save").addEventListener("click",()=>Wi(!1));zt("btn-archive").addEventListener("click",()=>fd(gd()));zt("btn-achv").addEventListener("click",()=>fd(_d()));zt("btn-restart").addEventListener("click",()=>{confirm("\u5C06\u5220\u9664\u6240\u6709\u661F\u7403\u7684\u8FDB\u5EA6\uFF0C\u4ECE\u706B\u661F\u91CD\u65B0\u5F00\u59CB\u3002\u786E\u5B9A\u5417\uFF1F")&&(Sp(),f.started=!1,location.href=location.pathname+(f.debug?"?debug":""))});zt("vol").addEventListener("input",n=>st.setVolume(+n.target.value));zt("quality").value=el;f.baseFov=72;try{let n=+localStorage.getItem("starport-fov");n>=60&&n<=100&&(f.baseFov=n,Ge.fov=n,Ge.updateProjectionMatrix(),zt("fov").value=n)}catch{}zt("fov").addEventListener("input",n=>{f.baseFov=+n.target.value,Ge.fov=+n.target.value,Ge.updateProjectionMatrix();try{localStorage.setItem("starport-fov",n.target.value)}catch{}});zt("quality").addEventListener("change",n=>{w0(n.target.value,!0);try{localStorage.setItem("starport-quality",n.target.value)}catch{}});zt("sens").addEventListener("input",n=>{at.sens=+n.target.value});zt("btn-respawn").addEventListener("click",()=>{f.driving&&Sd(Xt),Xt.respawn(),zt("death").classList.add("hidden"),f.requestLock()});zt("btn-endcont").addEventListener("click",()=>{zt("ending").classList.add("hidden"),f.endingShown=!1,f.requestLock()});f.events.on("chapter",n=>ea(n));f.events.on("crafted",n=>{if(n!=="rover")return;let t=f.buildings.find(i=>i.type==="fabricator"),e=t||Xt.pos;for(let i=0;i<12;i++){let s=i*.9,r=(t?t.def.r:0)+5+i,o=e.x+Math.cos(s)*r,a=e.z+Math.sin(s)*r;if(!f.colliders.overlaps(o,a,2.6)){Zc(o,a,-s);break}}$e("\u65B9\u821F \xB7 AI","\u6F2B\u6E38\u8F66\u5DF2\u51FA\u5382\u3002\u8F66\u8231\u52A0\u538B\uFF0C\u53EF\u4EE5\u5728\u8F66\u91CC\u8865\u6C27\u3002\u5C0F\u5FC3\u522B\u5F00\u4E0B\u60AC\u5D16\u3002")});f.events.on("cityLevel",n=>{ea({k:`COLONY LEVEL ${["I","II","III","IV","V","VI"][f.cityLevel]}`,title:n.name,sub:`\u57CE\u5E02\u5347\u7EA7 \xB7 \u9886\u5730\u6269\u5C55\u81F3 ${n.r} \u7C73`});let t={1:["\u65B9\u821F \xB7 AI","\u6B96\u6C11\u5730\u5347\u7EA7\u4E3A\u5B9A\u5C45\u70B9\u3002\u9886\u5730\u6269\u5927\u4E86\uFF0C\u66F4\u8FDC\u7684\u571F\u5730\u53EF\u4EE5\u5EFA\u9020\u4E86\u3002"],2:["\u65B9\u821F \xB7 AI","\u5C0F\u9547\u89C4\u6A21\u8FBE\u6210\u3002\u516C\u5BD3\u5854\u4E0E\u5782\u76F4\u519C\u573A\u7684\u8BBE\u8BA1\u56FE\u5DF2\u89E3\u9501\u3002"],3:["\u65B9\u821F \xB7 AI","\u8FD9\u91CC\u5DF2\u7ECF\u662F\u4E00\u5EA7\u57CE\u5E02\u4E86\u3002\u751F\u6001\u4E2D\u67A2\u7684\u8BBE\u8BA1\u56FE\u5DF2\u89E3\u9501\u3002"],4:["\u65B9\u821F \xB7 AI","\u5927\u90FD\u4F1A\u3002\u591C\u91CC\uFF0C\u4ECE\u8F68\u9053\u4E0A\u80FD\u770B\u89C1\u4F60\u4EEC\u7684\u706F\u5149\u3002"],5:["\u65B9\u821F \xB7 AI","\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C\u661F\u6E2F\u300D\u2014\u2014\u4EBA\u7C7B\u53EF\u4EE5\u4ECE\u8FD9\u91CC\u98DE\u5411\u4E0B\u4E00\u9897\u661F\u7403\u4E86\u3002"]}[f.cityLevel];t&&$e(t[0],t[1]),Wi(!0)});f.events.on("openBuild",()=>Ks("build"));f.events.on("death",n=>{st.laser(!1),setTimeout(()=>{if(f.endingShown){Xt.respawn();return}zt("death-why").textContent=n,zt("death").classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock()},1500)});f.events.on("tide",n=>{st.play("night"),ea({k:"CRYSTAL TIDE",title:"\u6676\u6F6E\u4E4B\u591C",sub:`\u96F7\u8FBE\u63A2\u6D4B\u5230\u7EA6 ${n} \u4E2A\u4FE1\u53F7 \xB7 \u5B88\u4F4F\u6B96\u6C11\u5730`}),$e("\u65B9\u821F \xB7 AI","\u8B66\u544A\uFF1A\u6676\u6F6E\u6B63\u5728\u903C\u8FD1\u3002\u6570\u91CF\u662F\u5E73\u65F6\u7684\u4E24\u500D\u2026\u2026\u5730\u9707\u4EEA\u8FD8\u8BB0\u5F55\u5230\u4E00\u4E2A\u5DE8\u5927\u7684\u4FE1\u53F7\uFF0C\u5B83\u6B63\u5728\u5411\u5730\u8868\u79FB\u52A8\u3002")});f.events.on("bossSpawn",()=>{Ze("\u6676\u6BCD\u7834\u571F\u800C\u51FA","boss","warn"),$e("\u65B9\u821F \xB7 AI","\u662F\u6676\u6BCD\uFF01\u4F53\u957F\u8D85\u8FC7\u5341\u7C73\u3002\u5B83\u7684\u51B2\u51FB\u6CE2\u80FD\u9707\u788E\u5EFA\u7B51\u2014\u2014\u7528\u6B65\u67AA\u548C\u70AE\u5854\u96C6\u4E2D\u706B\u529B\uFF01")});f.events.on("bossDown",()=>{Ze("\u6676\u6BCD\u9668\u843D","boss","good"),$e("\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u2026\u2026\u4F60\u4EEC\u505A\u5230\u4E86\u3002\u6574\u4E2A\u6307\u6325\u4E2D\u5FC3\u90FD\u5728\u6B22\u547C\u3002\u5B83\u7684\u6838\u5FC3\u91CC\u6709\u5927\u91CF\u7684\u949B\uFF0C\u62FF\u53BB\u5EFA\u8BBE\u5427\u3002")});var E0=!0;f.events.on("nightfall",n=>{st.play("night"),Ze(`\u591C\u5E55\u964D\u4E34 \xB7 \u96F7\u8FBE\u63A2\u6D4B\u5230\u7EA6 ${n} \u4E2A\u79FB\u52A8\u4FE1\u53F7`),E0&&(E0=!1,$e("\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5B83\u4EEC\u6765\u4E86\u3002\u9508\u8680\u86DB\u4F1A\u653B\u51FB\u5EFA\u7B51\u548C\u4EBA\u3002\u7528\u6FC0\u5149\u6216\u6B65\u67AA\u51FB\u9000\u5B83\u4EEC\u2014\u2014\u5B83\u4EEC\u7684\u6676\u4F53\u6B8B\u9AB8\u91CC\u542B\u6709\u949B\u3002"))});f.events.on("broken",n=>Ze(`${n.def.name} \u53D7\u635F\u505C\u673A\uFF0C\u767D\u5929\u4F1A\u81EA\u52A8\u4FEE\u590D`,"warn","warn"));var b0=!0;f.events.on("shuttleIncoming",n=>Ze(`\u79FB\u6C11\u98DE\u8239\u6B63\u5728\u964D\u843D \xB7 ${n} \u4EBA`,"ship"));f.events.on("colonistsArrived",n=>{n.length&&(Ze(`\u6B22\u8FCE\u56DE\u5BB6\uFF1A${n.map(t=>t.name).join("\u3001")}`),b0&&f.stats.arrived<=4&&(b0=!1,$e(n[0].name,"\u4F60\u597D\u2026\u2026\u8FD9\u5C31\u662F\u706B\u661F\uFF1F\u6BD4\u7167\u7247\u4E0A\u8FD8\u8981\u7EA2\u3002\u8C22\u8C22\u4F60\uFF0C\u4E3A\u6211\u4EEC\u70B9\u4EAE\u4E86\u8FD9\u91CC\u7684\u706F\u3002")))});var nE={habitat:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5C45\u4F4F\u7A79\u9876\u52A0\u538B\u5B8C\u6210\u3002\u5BA4\u5185\u6E29\u5EA6 21 \u6444\u6C0F\u5EA6\uFF0C\u6E7F\u5EA6 45%\u3002\u8FD9\u662F\u706B\u661F\u4E0A\u7B2C\u4E00\u4E2A\u53EF\u4EE5\u8131\u4E0B\u5934\u76D4\u7684\u5730\u65B9\u3002"],greenhouse:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u6E29\u5BA4\u542F\u52A8\u3002\u7B2C\u4E00\u6279\u79CD\u5B50\u5DF2\u7ECF\u64AD\u4E0B\uFF1A\u571F\u8C46\u3001\u5C0F\u9EA6\u3001\u756A\u8304\u2026\u2026\u548C\u4E00\u682A\u5411\u65E5\u8475\u3002"],beacon:["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u6536\u5230\u7740\u9646\u573A\u7684\u4FE1\u6807\u4FE1\u53F7\u4E86\uFF01\u53EA\u8981\u6B96\u6C11\u5730\u80FD\u517B\u6D3B\u4ED6\u4EEC\uFF0C\u79FB\u6C11\u98DE\u8239\u5C31\u4F1A\u51FA\u53D1\u3002"],reactor:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u805A\u53D8\u53CD\u5E94\u5806\u70B9\u706B\u6210\u529F\u3002\u8F93\u51FA\u7A33\u5B9A\u3002"],terraformer:["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5927\u6C14\u6539\u9020\u5854\u2026\u2026\u542F\u52A8\u4E86\u3002\u6211\u4EEC\u89C1\u8BC1\u7684\uFF0C\u662F\u4E00\u9897\u661F\u7403\u7684\u82CF\u9192\u3002"],apartment:["\u65B9\u821F \xB7 AI","\u7B2C\u4E00\u5EA7\u516C\u5BD3\u5854\u843D\u6210\u3002\u57CE\u5E02\u5F00\u59CB\u5411\u5929\u7A7A\u751F\u957F\u3002"],launch:["\u65B9\u821F \xB7 AI","\u661F\u9645\u53D1\u5C04\u53F0\u5B8C\u5DE5\u3002\u6B96\u6C11\u8230\u5DF2\u52A0\u6CE8\u5B8C\u6BD5\uFF0C\u968F\u65F6\u53EF\u4EE5\u51FA\u53D1\u3002"],monument:["\u65B9\u821F \xB7 AI","\u7EAA\u5FF5\u7891\u4E0A\u523B\u7740\u4E00\u884C\u5B57\uFF1A\u300C\u81F4\u7B2C\u4E00\u4E2A\u51FA\u53D1\u7684\u4EBA\u300D\u3002"],turret:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u9632\u5FA1\u70AE\u5854\u4E0A\u7EBF\u3002\u5B83\u4EEC\u9700\u8981\u7535\u529B\u624D\u80FD\u8FD0\u8F6C\u3002"],fabricator:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5236\u9020\u5DE5\u574A\u5C31\u7EEA\u3002\u9760\u8FD1\u540E\u6309 E \u6253\u5F00\u3002"]};f.events.on("built",n=>{let t=nE[n.type];t&&f.stats.built[n.type]===1&&$e(t[0],t[1]),n.type==="monument"&&f.stats.built.monument===1&&setTimeout(hE,6e3),Wi(!0)});f.events.on("ending",()=>{$e("Nadia Volkova","\u5927\u5BB6\u5FEB\u51FA\u6765\u770B\uFF01\u5929\u7A7A\u2026\u2026\u5929\u7A7A\u53D8\u84DD\u4E86\uFF01"),$e("\u8D75\u5C0F\u96E8","\u4E0B\u96E8\u4E86\uFF01\u8FD9\u662F\u706B\u661F\u4E0A\u7684\u7B2C\u4E00\u573A\u96E8\uFF01"),setTimeout(iE,14e3)});function iE(){f.ended=!0,f.endingShown=!0,Xt.dead&&Xt.respawn(),zt("death").classList.add("hidden"),document.pointerLockElement&&document.exitPointerLock();let n=f.stats,t=["\u4ECE\u7740\u9646\u8231\u7684\u8231\u95E8\u7B2C\u4E00\u6B21\u6253\u5F00\uFF0C\u5230\u4ECA\u5929\uFF0C\u8FC7\u53BB\u4E86 "+f.time.day+" \u4E2A\u706B\u661F\u65E5\u3002","\u66FE\u7ECF\u53EA\u6709\u98CE\u58F0\u7684\u5E73\u539F\u4E0A\uFF0C\u5982\u4ECA\u4F4F\u7740 "+f.colony.pop+" \u4E2A\u4EBA\u3002","\u4ED6\u4EEC\u6765\u81EA\u5730\u7403\u4E0A\u4E0D\u540C\u7684\u56FD\u5BB6\uFF0C\u8BF4\u7740\u4E0D\u540C\u7684\u8BED\u8A00\u3002","\u4F46\u4ECE\u4ECA\u5929\u8D77\uFF0C\u4ED6\u4EEC\u6709\u4E86\u540C\u4E00\u4E2A\u5730\u5740\u3002",'<div class="big">\u706B\u661F \xB7 \u65B0\u5BB6\u56ED</div>',"\u5B69\u5B50\u4EEC\u7B2C\u4E00\u6B21\u5728\u706B\u661F\u4E0A\uFF0C\u770B\u89C1\u4E86\u84DD\u8272\u7684\u5929\u7A7A\u3002",`<span class="stats">\u91C7\u96C6\u8D44\u6E90 ${n.mined.iron+n.mined.silicon+n.mined.ice+n.mined.titanium} \xB7 \u5EFA\u9020\u8BBE\u65BD ${f.buildings.length} \xB7 \u51FB\u9000\u9508\u8680\u86DB ${n.kills} \xB7 \u8FCE\u63A5\u79FB\u6C11 ${n.arrived}</span>`];zt("ending-text").innerHTML=t.map((e,i)=>`<p style="animation-delay:${i*1.6}s">${e}</p>`).join(""),zt("ending").classList.remove("hidden"),st.play("chapter"),Wi(!0)}window.addEventListener("keydown",n=>{if(f.started){if(r0(n),n.code==="Tab"&&!f.endingShown&&!Xt.dead){f.menuOpen==="archive"?si(!0):f.menuOpen||Ks("archive");return}if(n.code==="KeyP"&&!f.menuOpen){f.photo=!f.photo,f.usedPhoto=!0,document.body.classList.toggle("photo",f.photo);return}if(f.menuOpen==="archive"&&n.code==="Escape"){si(!0);return}f.menuOpen==="build"&&(n.code==="Escape"||n.code==="KeyB")?(si(!0),f.locked||void 0):f.menuOpen==="craft"&&(n.code==="Escape"||n.code==="KeyE")?si(!0):f.menuOpen==="starmap"&&n.code==="Escape"&&si(!0)}});var co=0,Cd=30,Id=0,S0=0,ho={};try{ho=JSON.parse(localStorage.getItem("starport-hints"))||{}}catch{}var lo=null,Pd=0,tl=0,sE=[{id:"move",text:"<kbd>W A S D</kbd>\u79FB\u52A8\u3000<kbd>\u9F20\u6807</kbd>\u73AF\u89C6\u3000<kbd>Shift</kbd>\u51B2\u523A\u3000<kbd>\u7A7A\u683C</kbd>\u8DF3\u8DC3",when:()=>tl>.5&&tl<40},{id:"mine",text:"\u5BF9\u51C6\u53D1\u5149\u7684\u77FF\u77F3\uFF0C<kbd>\u6309\u4F4F\u5DE6\u952E</kbd> \u7528\u91C7\u77FF\u6FC0\u5149\u91C7\u96C6",when:()=>tl>6&&f.stats.mined.iron+f.stats.mined.silicon===0},{id:"build",text:"\u8D44\u6E90\u591F\u4E86\uFF01\u6309 <kbd>B</kbd> \u6253\u5F00\u5EFA\u9020\u83DC\u5355",when:()=>f.buildings.length===0&&f.res.iron>=8&&f.res.silicon>=6},{id:"o2",text:"\u6C27\u6C14\u5728\u6301\u7EED\u6D88\u8017\u3002\u56DE\u5230\u7740\u9646\u8231\u6216\u5236\u6C27\u7AD9\u9644\u8FD1\u4F1A\u81EA\u52A8\u8865\u6C27",when:()=>!Xt.inLife&&Xt.o2<Xt.maxO2*.5},{id:"night",text:"\u5929\u9ED1\u4E86\uFF0C\u6309 <kbd>F</kbd> \u6253\u5F00\u624B\u7535\u7B52",when:()=>f.time.night>.6&&!Xt.flashlight},{id:"craft",text:"\u9760\u8FD1\u5236\u9020\u5DE5\u574A\u6309 <kbd>E</kbd> \u5236\u9020\u6B66\u5668\u548C\u88C5\u5907\u2014\u2014\u8BD5\u8BD5\u52A0\u538B\u6F2B\u6E38\u8F66",when:()=>f.buildings.some(n=>n.type==="fabricator")&&!f.upgrades.rifle},{id:"drive",text:"\u6F2B\u6E38\u8F66\u5C31\u5728\u9644\u8FD1\uFF0C\u8D70\u8FC7\u53BB\u6309 <kbd>E</kbd> \u4E0A\u8F66",when:()=>Jc()&&!f.driving&&!ho.drove},{id:"talk",text:"\u5BF9\u51C6\u5C45\u6C11\u6309 <kbd>E</kbd>\uFF0C\u542C\u542C\u4ED6\u4EEC\u7684\u6545\u4E8B",when:()=>f.colonists.some(n=>n.pos.distanceTo(Xt.pos)<10)},{id:"level",text:"\u4EBA\u53E3\u548C\u8BBE\u65BD\u8D8A\u591A\uFF0C\u57CE\u5E02\u7B49\u7EA7\u8D8A\u9AD8\uFF0C\u9886\u5730\u4E5F\u4F1A\u6269\u5927\uFF08\u770B\u5DE6\u4E0A\u89D2\uFF09",when:()=>f.colony.pop>=2}];function rE(n){if(tl+=n,f.driving&&(ho.drove=!0),lo)if(Pd-=n,Pd<=0||!lo.when()){ho[lo.id]=!0,lo=null;try{localStorage.setItem("starport-hints",JSON.stringify(ho))}catch{}}else return`<span class="hint">${lo.text}</span>`;for(let t of sE)if(!ho[t.id]&&t.when())return lo=t,Pd=12,`<span class="hint">${t.text}</span>`;return""}function R0(){let n=zr(),t=new Map((n.visited||[]).map(i=>[i.id,i])),e=[];xt.next&&e.push({id:xt.next,fresh:!t.has(xt.next)&&!Ld(xt.next)});for(let i of Object.keys(Rn))i!==Qt&&i!==xt.next&&(t.has(i)||Ld(i))&&e.push({id:i,fresh:!1,info:t.get(i)});return e}function Ld(n){try{return!!localStorage.getItem(n==="mars"?"starport-newhome-v1":"starport-planet-"+n)}catch{return!1}}function oE(n){Ks("starmap"),zt("starmap-list").innerHTML=R0().map(t=>{let e=Rn[t.id],i={mars:"MARS",europa:"EUROPA",kepler:"KEPLER-442b"}[t.id];return`<div class="dest" data-id="${t.id}"><div class="orb ${t.id}"></div><span class="badge ${t.fresh?"new":"home"}">${t.fresh?"UNCHARTED":"COLONY"}</span>
      <div class="dn">${e.name}</div><div class="de">${i}</div>
      <div class="dst">${e.title} \xB7 ${e.place}${t.info?`<br>\u5C45\u6C11 ${t.info.pop} \u4EBA \xB7 \u7B2C ${t.info.day} \u65E5\u79BB\u5F00`:""}${t.fresh?"<br>\u88C5\u5907\u540C\u6B65 \xB7 \u643A\u5E26\u90E8\u5206\u7269\u8D44":"<br>\u56DE\u5230\u4F60\u5EFA\u7ACB\u7684\u57CE\u5E02"}</div></div>`}).join(""),zt("starmap-list").querySelectorAll(".dest").forEach(t=>t.addEventListener("click",()=>{si(!0),aE(n,t.dataset.id)}))}function aE(n,t){f.launching={b:n,t:0,dest:t},f.launched=!0,st.play("rumble"),$e("\u65B9\u821F \xB7 AI",`\u6B96\u6C11\u8230\u70B9\u706B\u3002\u76EE\u6807\uFF1A${Rn[t].name}\u3002\u5168\u4F53\u4E58\u5458\uFF0C\u795D\u4F60\u4EEC\u597D\u8FD0\u3002`),n.anim.flame.visible=!0}function cE(n){let t=f.launching;if(!t)return;t.t+=n;let e=t.b.anim.ship;t.t>2&&(e.position.y+=n*(2+(t.t-2)*9));let i=new T(t.b.x,t.b.y+e.position.y,t.b.z);for(let s=0;s<6;s++)gt.flame(i);t.t<5&&gt.dustPuff(new T(t.b.x+(Math.random()-.5)*16,t.b.y+1,t.b.z+(Math.random()-.5)*16),3,4),Xt.landDip=Math.max(Xt.landDip,Math.min(.15,.03*t.t)*Math.random()),t.t>9&&!t.faded&&(t.faded=!0,zt("fade").classList.add("on")),t.t>11.5&&!t.done&&(t.done=!0,lE(t.dest))}function lE(n){let t=zr();t.visited=(t.visited||[]).filter(s=>s.id!==Qt).concat([{id:Qt,pop:f.colony.pop,day:f.time.day}]),t.planet=n,t.autoResume=Ld(n);let e={};for(let s in f.res)e[s]=Math.min(Math.floor(f.res[s]*.4),80);t.carry={upgrades:f.upgrades,res:e},Wi(!0),Tu(t);let i=Rn[n];zt("ending-text").innerHTML=["\u66F2\u901F\u822A\u884C\u4E2D\u2026\u2026",`\u76EE\u7684\u5730\uFF1A<b>${i.name}</b>${t.autoResume?"\uFF08\u5DF2\u5F00\u62D3\uFF09":""}`,`<span class="stats">${xt.name}\u7684 ${f.colony.pop} \u4F4D\u5C45\u6C11\uFF0C\u4F1A\u66FF\u4F60\u5B88\u7740\u90A3\u91CC\u7684\u706F\u706B\u3002</span>`].map((s,r)=>`<p style="animation-delay:${r*1.2}s">${s}</p>`).join(""),document.querySelector("#ending .btns").classList.add("hidden"),zt("ending").classList.remove("hidden"),zt("fade").classList.remove("on"),f.endingShown=!0,document.pointerLockElement&&document.exitPointerLock(),setTimeout(()=>{location.href=location.pathname+(f.debug?"?debug":"")},5e3)}function hE(){f.endingShown=!0,document.pointerLockElement&&document.exitPointerLock();let t=(zr().visited||[]).concat([{id:Qt,pop:f.colony.pop}]),e=t.reduce((s,r)=>s+r.pop,0),i=["\u5F88\u4E45\u5F88\u4E45\u4EE5\u524D\uFF0C\u4E00\u4E2A\u4EBA\u72EC\u81EA\u7AD9\u5728\u706B\u661F\u7684\u7EA2\u8272\u5C18\u571F\u91CC\u3002","\u6C27\u6C14\u53EA\u591F\u6491\u4E09\u5206\u949F\uFF0C\u8EAB\u8FB9\u53EA\u6709\u4E00\u5EA7\u7740\u9646\u8231\u3002",t.map(s=>`${Rn[s.id].name} \xB7 ${s.pop} \u4EBA`).join("\u3000"),`\u4ECA\u5929\uFF0C${e} \u4E2A\u4EBA\uFF0C\u751F\u6D3B\u5728\u4E09\u9897\u661F\u7403\u4E0A\u3002`,'<div class="big">\u661F\u9645\u6587\u660E</div>',"\u8FD9\u4E00\u5207\uFF0C\u90FD\u4ECE\u4F60\u8FC8\u51FA\u7684\u7B2C\u4E00\u6B65\u5F00\u59CB\u3002",'<span class="stats">\u611F\u8C22\u6E38\u73A9\u300A\u661F\u6E2F\u300B\u3002\u4F60\u53EF\u4EE5\u7EE7\u7EED\u5EFA\u8BBE\uFF0C\u57CE\u5E02\u4F1A\u4E00\u76F4\u5728\u8FD9\u91CC\u7B49\u4F60\u3002</span>'];zt("ending-text").innerHTML=i.map((s,r)=>`<p style="animation-delay:${r*1.8}s">${s}</p>`).join(""),zt("ending").classList.remove("hidden"),st.play("chapter"),Wi(!0)}function uE(n){let t={prompt:"",crossClass:""};if(Xt.dead||f.menuOpen)return t;if(f.driving)return t.prompt=`<span class="big">${y0()}</span> KM/H<br><kbd>W S</kbd> \u6CB9\u95E8 \xB7 <kbd>A D</kbd> \u8F6C\u5411 \xB7 <kbd>Shift</kbd> \u52A0\u901F \xB7 <kbd>\u7A7A\u683C</kbd> \u5239\u8F66 \xB7 <kbd>E</kbd> \u4E0B\u8F66`,t;let e=Ym(Xt.pos);if(e)return t.prompt=`<b>${e.name}</b><br><kbd>E</kbd>\u8C03\u67E5`,at.hit("KeyE")&&Jm(e),t;let i=Jc();if(i&&Math.hypot(i.x-Xt.pos.x,i.z-Xt.pos.z)<4.5)return t.prompt="<b>\u52A0\u538B\u6F2B\u6E38\u8F66</b><br><kbd>E</kbd>\u4E0A\u8F66",at.hit("KeyE")&&(g0(),at.pressed.delete("KeyE")),t;let s=Ge.position,r=Xt.fwd,o=Hm(s,r),a=f.buildings.find(h=>h.type==="fabricator"&&Math.hypot(h.x-Xt.pos.x,h.z-Xt.pos.z)<h.def.r+6);co=Math.max(0,co-n),S0=Math.max(0,S0-n);let c=f.buildings.find(h=>h.type==="launch"&&Math.hypot(h.x-Xt.pos.x,h.z-Xt.pos.z)<h.def.r+8);if(o){if(t.crossClass="talk",t.prompt=`<b>${o.name}</b> \xB7 ${o.job}<br><kbd>E</kbd> \u4EA4\u8C08`,at.hit("KeyE")){$e(o.name,o.line);let h=f.stats.talked=f.stats.talked||[];h.includes(o.idx)||h.push(o.idx)}}else c&&!f.launching?c.powered?R0().length?(t.prompt="<b>\u6B96\u6C11\u8230\u5DF2\u5C31\u7EEA</b><br><kbd>E</kbd>\u6253\u5F00\u661F\u56FE",at.hit("KeyE")&&oE(c)):t.prompt="\u661F\u9645\u53D1\u5C04\u53F0 \xB7 \u6682\u65E0\u53EF\u7528\u822A\u7EBF":t.prompt='\u661F\u9645\u53D1\u5C04\u53F0 \xB7 <span class="badc">\u7535\u529B\u4E0D\u8DB3</span>':a&&(t.prompt=`<kbd>E</kbd> \u6253\u5F00\u5236\u9020\u5DE5\u574A${a.powered?"":"\uFF08\u505C\u7535\u4E2D\uFF09"}`,at.hit("KeyE")&&(a.powered?Ks("craft"):Ze("\u5236\u9020\u5DE5\u574A\u6CA1\u6709\u7535\u529B")));let l=f.lookBuilding;if(!t.prompt&&l&&Ve.id!=="build"){let h=l.def,u=l.level||1,d=Dc(l)?`<br><kbd>U</kbd>\u5347\u7EA7\u5230 Lv.${u+1}\u3000${Or(Vu(l))}`:"";t.prompt=`<b>${h.name}</b>\u3000Lv.${u}${u>=Hu?"\uFF08\u6EE1\u7EA7\uFF09":""} \xB7 \u8010\u4E45 ${Math.ceil(l.hp)}/${Math.round(l.maxHp)}${h.power<0?l.powered?' \xB7 <span class="okc">\u4F9B\u7535\u4E2D</span>':' \xB7 <span class="badc">\u505C\u7535</span>':""}${d}<br><kbd>X</kbd>${co>0?'<span class="badc">\u518D\u6309\u4E00\u6B21\u786E\u8BA4\u62C6\u9664\uFF08\u8FD4\u8FD8 50%\uFF09</span>':"\u62C6\u9664"}`,l.broken&&(t.prompt=t.prompt.replace("</b>",'</b> <span class="badc">\u53D7\u635F\u505C\u673A \xB7 \u767D\u5929\u81EA\u52A8\u4FEE\u590D</span>')),at.hit("KeyU")&&Dc(l)&&(cm(l)?Ze(`${h.name} \u5347\u7EA7\u5230 Lv.${l.level}`,"star","good"):(st.play("deny"),Ze("\u5347\u7EA7\u6750\u6599\u4E0D\u8DB3","warn","warn"))),at.hit("KeyX")&&(co>0?(um(l,!0),co=0,Ze(`\u5DF2\u62C6\u9664 ${h.name}`)):co=2)}return Ve.id==="laser"?(f.aimNode&&!t.crossClass&&(t.crossClass="node"),jr(s,r,9)&&(t.crossClass="enemy")):Ve.id==="rifle"&&jr(s,r,120)&&(t.crossClass="enemy"),t}var dE=new uc,Qc=0;function C0(){requestAnimationFrame(C0);let n=Math.min(dE.getDelta(),.05);if(!f.started){Qc+=n*.05;let e=30;Ge.position.set(Pe.x+Math.cos(Qc)*e,Et(Pe.x,Pe.z)+6,Pe.z+Math.sin(Qc)*e),Ge.lookAt(Pe.x,Et(Pe.x,Pe.z)+4,Pe.z),f.time.t=.27+Math.sin(Qc*.5)*.01,bc(0,Ge.position),Ac(n,Ge.position),yn.render(Gi,Ge);return}f.debug&&(f.locked=!0);let t=f.locked&&!f.menuOpen&&!f.endingShown&&!f.cine;zt("clickhint").classList.toggle("hidden",!(f.started&&!f.locked&&!f.menuOpen&&!Xt.dead&&!f.endingShown&&!f.cine)),t?I0(n):(xd(0,{prompt:""}),bc(0,Ge.position)),Ac(t?n:0,Ge.position),at.endFrame(),yn.render(Gi,Ge),km(yn)}function I0(n){{f.driving&&at.hit("KeyE")&&!f.menuOpen&&(Sd(Xt),at.pressed.delete("KeyE")),f.driving||Xt.update(n),x0(n,Xt,Ge),bc(n,Ge.position),f.time.dawn&&(f.time.dawn=!1,Ze(`\u7B2C ${f.time.day} \u65E5 \xB7 \u9ECE\u660E`,"sun")),Yp(n),f.driving?f.lookBuilding=null:Om(n,Xt,Ge),xm(n,{shoot:zc}),Bm(n),tm(n,Ve.id==="build"&&!!ue.type),cE(n),Iu.emissiveIntensity=.06+f.time.night*(.55+Math.sin(performance.now()*.0015)*.15),Im(n),M0(n),Rm(n),Em(n),nl.beacon.visible=Math.sin(performance.now()*.004)>0,a0(n),f0(n),Km(n);let t=uE(n);t.prompt||(t.prompt=rE(n)),xd(n,t),st.update(f.storm,f.time.night),Cd-=n,Cd<=0&&(Cd=45,Wi(!0)),f.terraform>0&&f.terraform<=1&&(Id-=n,Id<=0&&(Id=4,Cu(T0(),f.terraform)))}}zt("loading").style.transition="opacity .8s";zt("loading").style.opacity=0;setTimeout(()=>zt("loading").remove(),900);C0();window.addEventListener("beforeunload",()=>Wi(!0));window.__G=f;window.__dbg={give(n=200){for(let t in jn)f.res[t]+=n},tp(n,t){Xt.pos.set(n,Et(n,t),t)},time(n){f.time.t=n},build:(n,t,e)=>Uc(n,t,e,0),chapter:n=>Jo(n),look(n,t){Xt.yaw=n,Xt.pitch=t},begin:()=>il(!1),step(n,t=.05){for(let e=0;e<n;e+=t)I0(t),Ac(t,Ge.position),at.endFrame()},input:at,save:Wi,toast:Ze,setGhost:Xs,openMenu:Ks,closeMenus:si,tool:Ve,placement:ue,rover:Jc};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
