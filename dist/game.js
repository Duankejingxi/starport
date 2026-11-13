(()=>{var Od="170";var my=0,Vp=1,gy=2;var Q0=1,zd=2,os=3,Ws=0,Sn=1,qt=2,ki=0,Hi=1,dt=2,Wp=3,$p=4,xy=5,wr=100,yy=101,vy=102,My=103,_y=104,Ey=200,by=201,wy=202,Sy=203,mu=204,gu=205,Ty=206,Ry=207,Ay=208,Cy=209,Py=210,Iy=211,Ly=212,Dy=213,Uy=214,xu=0,yu=1,vu=2,_o=3,Mu=4,_u=5,Eu=6,bu=7,em=0,Ny=1,ky=2,Vs=0,Bd=1,Gd=2,Vd=3,Lr=4,Hy=5,Wd=6,$d=7;var tm=300,Eo=301,bo=302,wu=303,Su=304,Ac=306,us=1e3,Tr=1001,Tu=1002,qn=1003,Fy=1004;var bl=1005;var Ui=1006,Nh=1007;var Rr=1008;var ds=1009,nm=1010,im=1011,Fa=1012,Xd=1013,Ar=1014,Ni=1015,bi=1016,qd=1017,Yd=1018,wo=1020,sm=35902,rm=1021,om=1022,vi=1023,am=1024,lm=1025,yo=1026,So=1027,Zd=1028,Kd=1029,cm=1030,Jd=1031;var jd=1033,jl=33776,Ql=33777,ec=33778,tc=33779,Ru=35840,Au=35841,Cu=35842,Pu=35843,Iu=36196,Lu=37492,Du=37496,Uu=37808,Nu=37809,ku=37810,Hu=37811,Fu=37812,Ou=37813,zu=37814,Bu=37815,Gu=37816,Vu=37817,Wu=37818,$u=37819,Xu=37820,qu=37821,nc=36492,Yu=36494,Zu=36495,hm=36283,Ku=36284,Ju=36285,ju=36286;var ic=2300,Qu=2301,kh=2302,Xp=2400,qp=2401,Yp=2402;var Oy=3200,zy=3201;var um=0,By=1,Bs="",yt="srgb",Uo="srgb-linear",Cc="linear",Dt="srgb";var Jr=7680;var Zp=519,Gy=512,Vy=513,Wy=514,dm=515,$y=516,Xy=517,qy=518,Yy=519,ed=35044,Qd=35048;var Kp="300 es",ls=2e3,sc=2001,$s=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jp=1234567,Da=Math.PI/180,To=180/Math.PI;function cs(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]).toLowerCase()}function vn(n,e,t){return Math.max(e,Math.min(t,n))}function ef(n,e){return(n%e+e)%e}function Zy(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Ky(n,e,t){return n!==e?(t-n)/(e-n):0}function Ua(n,e,t){return(1-t)*n+t*e}function Jy(n,e,t,i){return Ua(n,e,1-Math.exp(-t*i))}function jy(n,e=1){return e-Math.abs(ef(n,e*2)-e)}function Qy(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function e1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function t1(n,e){return n+Math.floor(Math.random()*(e-n+1))}function n1(n,e){return n+Math.random()*(e-n)}function i1(n){return n*(.5-Math.random())}function s1(n){n!==void 0&&(Jp=n);let e=Jp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function r1(n){return n*Da}function o1(n){return n*To}function a1(n){return(n&n-1)===0&&n!==0}function l1(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function c1(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function h1(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Yt={DEG2RAD:Da,RAD2DEG:To,generateUUID:cs,clamp:vn,euclideanModulo:ef,mapLinear:Zy,inverseLerp:Ky,lerp:Ua,damp:Jy,pingpong:jy,smoothstep:Qy,smootherstep:e1,randInt:t1,randFloat:n1,randFloatSpread:i1,seededRandom:s1,degToRad:r1,radToDeg:o1,isPowerOfTwo:a1,ceilPowerOfTwo:l1,floorPowerOfTwo:c1,setQuaternionFromProperEuler:h1,normalize:kt,denormalize:yi},ne=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(vn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ct=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],p=i[5],g=i[8],v=s[0],x=s[3],m=s[6],_=s[1],E=s[4],M=s[7],D=s[2],A=s[5],L=s[8];return r[0]=o*v+a*_+l*D,r[3]=o*x+a*E+l*A,r[6]=o*m+a*M+l*L,r[1]=c*v+h*_+u*D,r[4]=c*x+h*E+u*A,r[7]=c*m+h*M+u*L,r[2]=f*v+p*_+g*D,r[5]=f*x+p*E+g*A,r[8]=f*m+p*M+g*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=t*u+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-h*i)*v,e[2]=(a*i-s*o)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Hh.makeScale(e,t)),this}rotate(e){return this.premultiply(Hh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Hh=new ct;function fm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function rc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function u1(){let n=rc("canvas");return n.style.display="block",n}var jp={};function Ia(n){n in jp||(jp[n]=!0,console.warn(n))}function d1(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function f1(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function p1(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var xt={enabled:!0,workingColorSpace:Uo,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Dt&&(n.r=hs(n.r),n.g=hs(n.g),n.b=hs(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Dt&&(n.r=vo(n.r),n.g=vo(n.g),n.b=vo(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Bs?Cc:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function hs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Qp=[.64,.33,.3,.6,.15,.06],e0=[.2126,.7152,.0722],t0=[.3127,.329],n0=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),i0=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);xt.define({[Uo]:{primaries:Qp,whitePoint:t0,transfer:Cc,toXYZ:n0,fromXYZ:i0,luminanceCoefficients:e0,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:Qp,whitePoint:t0,transfer:Dt,toXYZ:n0,fromXYZ:i0,luminanceCoefficients:e0,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}});var jr,td=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{jr===void 0&&(jr=rc("canvas")),jr.width=e.width,jr.height=e.height;let i=jr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=jr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=rc("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=hs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hs(t[i]/255)*255):t[i]=hs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},m1=0,oc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:m1++}),this.uuid=cs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fh(s[o].image)):r.push(Fh(s[o]))}else r=Fh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Fh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?td.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var g1=0,Fn=class n extends $s{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Tr,s=Tr,r=Ui,o=Rr,a=vi,l=ds,c=n.DEFAULT_ANISOTROPY,h=Bs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:g1++}),this.uuid=cs(),this.name="",this.source=new oc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case us:e.x=e.x-Math.floor(e.x);break;case Tr:e.x=e.x<0?0:1;break;case Tu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case us:e.y=e.y-Math.floor(e.y);break;case Tr:e.y=e.y<0?0:1;break;case Tu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=tm;Fn.DEFAULT_ANISOTROPY=1;var Ft=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],v=l[2],x=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+x)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,M=(p+1)/2,D=(m+1)/2,A=(h+f)/4,L=(u+v)/4,I=(g+x)/4;return E>M&&E>D?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=A/i,r=L/i):M>D?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=A/s,r=I/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=L/r,s=I/r),this.set(i,s,r,t),this}let _=Math.sqrt((x-g)*(x-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(x-g)/_,this.y=(u-v)/_,this.z=(f-h)/_,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nd=class extends $s{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Fn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new oc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ln=class extends nd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ac=class extends Fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=qn,this.minFilter=qn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var id=class extends Fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=qn,this.minFilter=qn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==f||c!==p||h!==g){let x=1-a,m=l*f+c*p+h*g+u*v,_=m>=0?1:-1,E=1-m*m;if(E>Number.EPSILON){let D=Math.sqrt(E),A=Math.atan2(D,m*_);x=Math.sin(x*A)/D,a=Math.sin(a*A)/D}let M=a*_;if(l=l*x+f*M,c=c*x+p*M,h=h*x+g*M,u=u*x+v*M,x===1-a){let D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*p-c*f,e[t+1]=l*g+h*f+c*u-a*p,e[t+2]=c*g+h*p+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(s0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(s0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Oh.copy(this).projectOnVector(e),this.sub(Oh)}reflect(e){return this.sub(Oh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(vn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Oh=new T,s0=new cn,Mi=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mi):mi.fromBufferAttribute(r,o),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wl.copy(i.boundingBox)),wl.applyMatrix4(e.matrixWorld),this.union(wl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_a),Sl.subVectors(this.max,_a),Qr.subVectors(e.a,_a),eo.subVectors(e.b,_a),to.subVectors(e.c,_a),Ns.subVectors(eo,Qr),ks.subVectors(to,eo),xr.subVectors(Qr,to);let t=[0,-Ns.z,Ns.y,0,-ks.z,ks.y,0,-xr.z,xr.y,Ns.z,0,-Ns.x,ks.z,0,-ks.x,xr.z,0,-xr.x,-Ns.y,Ns.x,0,-ks.y,ks.x,0,-xr.y,xr.x,0];return!zh(t,Qr,eo,to,Sl)||(t=[1,0,0,0,1,0,0,0,1],!zh(t,Qr,eo,to,Sl))?!1:(Tl.crossVectors(Ns,ks),t=[Tl.x,Tl.y,Tl.z],zh(t,Qr,eo,to,Sl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ts),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ts=[new T,new T,new T,new T,new T,new T,new T,new T],mi=new T,wl=new Mi,Qr=new T,eo=new T,to=new T,Ns=new T,ks=new T,xr=new T,_a=new T,Sl=new T,Tl=new T,yr=new T;function zh(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){yr.fromArray(n,r);let a=s.x*Math.abs(yr.x)+s.y*Math.abs(yr.y)+s.z*Math.abs(yr.z),l=e.dot(yr),c=t.dot(yr),h=i.dot(yr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var x1=new Mi,Ea=new T,Bh=new T,Xs=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):x1.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ea.subVectors(e,this.center);let t=Ea.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ea,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ea.copy(e.center).add(Bh)),this.expandByPoint(Ea.copy(e.center).sub(Bh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ns=new T,Gh=new T,Rl=new T,Hs=new T,Vh=new T,Al=new T,Wh=new T,lc=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ns)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ns.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ns.copy(this.origin).addScaledVector(this.direction,t),ns.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Gh.copy(e).add(t).multiplyScalar(.5),Rl.copy(t).sub(e).normalize(),Hs.copy(this.origin).sub(Gh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Rl),a=Hs.dot(this.direction),l=-Hs.dot(Rl),c=Hs.lengthSq(),h=Math.abs(1-o*o),u,f,p,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let v=1/h;u*=v,f*=v,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Gh).addScaledVector(Rl,f),p}intersectSphere(e,t){ns.subVectors(e.center,this.origin);let i=ns.dot(this.direction),s=ns.dot(ns)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ns)!==null}intersectTriangle(e,t,i,s,r){Vh.subVectors(t,e),Al.subVectors(i,e),Wh.crossVectors(Vh,Al);let o=this.direction.dot(Wh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hs.subVectors(this.origin,e);let l=a*this.direction.dot(Al.crossVectors(Hs,Al));if(l<0)return null;let c=a*this.direction.dot(Vh.cross(Hs));if(c<0||l+c>o)return null;let h=-a*Hs.dot(Wh);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vt=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,f,p,g,v,x){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,f,p,g,v,x)}set(e,t,i,s,r,o,a,l,c,h,u,f,p,g,v,x){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=p,m[7]=g,m[11]=v,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/no.setFromMatrixColumn(e,0).length(),r=1/no.setFromMatrixColumn(e,1).length(),o=1/no.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,p=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,p=l*u,g=c*h,v=c*u;t[0]=f+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,p=l*u,g=c*h,v=c*u;t[0]=f-v*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,p=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=f-v*u}else if(e.order==="XZY"){let f=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(y1,e,v1)}lookAt(e,t,i){let s=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Fs.crossVectors(i,$n),Fs.lengthSq()===0&&(Math.abs(i.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Fs.crossVectors(i,$n)),Fs.normalize(),Cl.crossVectors($n,Fs),s[0]=Fs.x,s[4]=Cl.x,s[8]=$n.x,s[1]=Fs.y,s[5]=Cl.y,s[9]=$n.y,s[2]=Fs.z,s[6]=Cl.z,s[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],p=i[13],g=i[2],v=i[6],x=i[10],m=i[14],_=i[3],E=i[7],M=i[11],D=i[15],A=s[0],L=s[4],I=s[8],w=s[12],b=s[1],U=s[5],B=s[9],z=s[13],W=s[2],ee=s[6],Y=s[10],oe=s[14],X=s[3],ye=s[7],Ae=s[11],Ve=s[15];return r[0]=o*A+a*b+l*W+c*X,r[4]=o*L+a*U+l*ee+c*ye,r[8]=o*I+a*B+l*Y+c*Ae,r[12]=o*w+a*z+l*oe+c*Ve,r[1]=h*A+u*b+f*W+p*X,r[5]=h*L+u*U+f*ee+p*ye,r[9]=h*I+u*B+f*Y+p*Ae,r[13]=h*w+u*z+f*oe+p*Ve,r[2]=g*A+v*b+x*W+m*X,r[6]=g*L+v*U+x*ee+m*ye,r[10]=g*I+v*B+x*Y+m*Ae,r[14]=g*w+v*z+x*oe+m*Ve,r[3]=_*A+E*b+M*W+D*X,r[7]=_*L+E*U+M*ee+D*ye,r[11]=_*I+E*B+M*Y+D*Ae,r[15]=_*w+E*z+M*oe+D*Ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],v=e[7],x=e[11],m=e[15];return g*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*p-i*l*p)+v*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+x*(+t*c*u-t*a*p-r*o*u+i*o*p+r*a*h-i*c*h)+m*(-s*a*h-t*l*u+t*a*f+s*o*u-i*o*f+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],v=e[13],x=e[14],m=e[15],_=u*x*c-v*f*c+v*l*p-a*x*p-u*l*m+a*f*m,E=g*f*c-h*x*c-g*l*p+o*x*p+h*l*m-o*f*m,M=h*v*c-g*u*c+g*a*p-o*v*p-h*a*m+o*u*m,D=g*u*l-h*v*l-g*a*f+o*v*f+h*a*x-o*u*x,A=t*_+i*E+s*M+r*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/A;return e[0]=_*L,e[1]=(v*f*r-u*x*r-v*s*p+i*x*p+u*s*m-i*f*m)*L,e[2]=(a*x*r-v*l*r+v*s*c-i*x*c-a*s*m+i*l*m)*L,e[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*p-i*l*p)*L,e[4]=E*L,e[5]=(h*x*r-g*f*r+g*s*p-t*x*p-h*s*m+t*f*m)*L,e[6]=(g*l*r-o*x*r-g*s*c+t*x*c+o*s*m-t*l*m)*L,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*p+t*l*p)*L,e[8]=M*L,e[9]=(g*u*r-h*v*r-g*i*p+t*v*p+h*i*m-t*u*m)*L,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*m+t*a*m)*L,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*p-t*a*p)*L,e[12]=D*L,e[13]=(h*v*s-g*u*s+g*i*f-t*v*f-h*i*x+t*u*x)*L,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*x-t*a*x)*L,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*f+t*a*f)*L,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,g=r*u,v=o*h,x=o*u,m=a*u,_=l*c,E=l*h,M=l*u,D=i.x,A=i.y,L=i.z;return s[0]=(1-(v+m))*D,s[1]=(p+M)*D,s[2]=(g-E)*D,s[3]=0,s[4]=(p-M)*A,s[5]=(1-(f+m))*A,s[6]=(x+_)*A,s[7]=0,s[8]=(g+E)*L,s[9]=(x-_)*L,s[10]=(1-(f+v))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=no.set(s[0],s[1],s[2]).length(),o=no.set(s[4],s[5],s[6]).length(),a=no.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],gi.copy(this);let c=1/r,h=1/o,u=1/a;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=h,gi.elements[5]*=h,gi.elements[6]*=h,gi.elements[8]*=u,gi.elements[9]*=u,gi.elements[10]*=u,t.setFromRotationMatrix(gi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ls){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),p,g;if(a===ls)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===sc)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ls){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),f=(t+e)*c,p=(i+s)*h,g,v;if(a===ls)g=(o+r)*u,v=-2*u;else if(a===sc)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},no=new T,gi=new vt,y1=new T(0,0,0),v1=new T(1,1,1),Fs=new T,Cl=new T,$n=new T,r0=new vt,o0=new cn,Mn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(vn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(vn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-vn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(vn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-vn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return r0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(r0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return o0.setFromEuler(this),this.setFromQuaternion(o0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mn.DEFAULT_ORDER="XYZ";var cc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},M1=0,a0=new T,io=new cn,is=new vt,Pl=new T,ba=new T,_1=new T,E1=new cn,l0=new T(1,0,0),c0=new T(0,1,0),h0=new T(0,0,1),u0={type:"added"},b1={type:"removed"},so={type:"childadded",child:null},$h={type:"childremoved",child:null},pn=class n extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:M1++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new T,t=new Mn,i=new cn,s=new T(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new ct}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return io.setFromAxisAngle(e,t),this.quaternion.multiply(io),this}rotateOnWorldAxis(e,t){return io.setFromAxisAngle(e,t),this.quaternion.premultiply(io),this}rotateX(e){return this.rotateOnAxis(l0,e)}rotateY(e){return this.rotateOnAxis(c0,e)}rotateZ(e){return this.rotateOnAxis(h0,e)}translateOnAxis(e,t){return a0.copy(e).applyQuaternion(this.quaternion),this.position.add(a0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(l0,e)}translateY(e){return this.translateOnAxis(c0,e)}translateZ(e){return this.translateOnAxis(h0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(is.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Pl.copy(e):Pl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?is.lookAt(ba,Pl,this.up):is.lookAt(Pl,ba,this.up),this.quaternion.setFromRotationMatrix(is),s&&(is.extractRotation(s.matrixWorld),io.setFromRotationMatrix(is),this.quaternion.premultiply(io.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(u0),so.child=e,this.dispatchEvent(so),so.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(b1),$h.child=e,this.dispatchEvent($h),$h.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),is.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),is.multiply(e.parent.matrixWorld)),e.applyMatrix4(is),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(u0),so.child=e,this.dispatchEvent(so),so.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,e,_1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,E1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};pn.DEFAULT_UP=new T(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xi=new T,ss=new T,Xh=new T,rs=new T,ro=new T,oo=new T,d0=new T,qh=new T,Yh=new T,Zh=new T,Kh=new Ft,Jh=new Ft,jh=new Ft,Gs=class n{constructor(e=new T,t=new T,i=new T){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),xi.subVectors(e,t),s.cross(xi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){xi.subVectors(s,t),ss.subVectors(i,t),Xh.subVectors(e,t);let o=xi.dot(xi),a=xi.dot(ss),l=xi.dot(Xh),c=ss.dot(ss),h=ss.dot(Xh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,rs)===null?!1:rs.x>=0&&rs.y>=0&&rs.x+rs.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,rs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,rs.x),l.addScaledVector(o,rs.y),l.addScaledVector(a,rs.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Kh.setScalar(0),Jh.setScalar(0),jh.setScalar(0),Kh.fromBufferAttribute(e,t),Jh.fromBufferAttribute(e,i),jh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Kh,r.x),o.addScaledVector(Jh,r.y),o.addScaledVector(jh,r.z),o}static isFrontFacing(e,t,i,s){return xi.subVectors(i,t),ss.subVectors(e,t),xi.cross(ss).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),ss.subVectors(this.a,this.b),xi.cross(ss).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;ro.subVectors(s,i),oo.subVectors(r,i),qh.subVectors(e,i);let l=ro.dot(qh),c=oo.dot(qh);if(l<=0&&c<=0)return t.copy(i);Yh.subVectors(e,s);let h=ro.dot(Yh),u=oo.dot(Yh);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(ro,o);Zh.subVectors(e,r);let p=ro.dot(Zh),g=oo.dot(Zh);if(g>=0&&p<=g)return t.copy(r);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(oo,a);let x=h*g-p*u;if(x<=0&&u-h>=0&&p-g>=0)return d0.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(d0,a);let m=1/(x+v+f);return o=v*m,a=f*m,t.copy(i).addScaledVector(ro,o).addScaledVector(oo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Os={h:0,s:0,l:0},Il={h:0,s:0,l:0};function Qh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var me=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=xt.workingColorSpace){if(e=ef(e,1),t=vn(t,0,1),i=vn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Qh(o,r,e+1/3),this.g=Qh(o,r,e),this.b=Qh(o,r,e-1/3)}return xt.toWorkingColorSpace(this,s),this}setStyle(e,t=yt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let i=pm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=vo(e.r),this.g=vo(e.g),this.b=vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return xt.fromWorkingColorSpace(wn.copy(this),e),Math.round(vn(wn.r*255,0,255))*65536+Math.round(vn(wn.g*255,0,255))*256+Math.round(vn(wn.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(wn.copy(this),t);let i=wn.r,s=wn.g,r=wn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=yt){xt.fromWorkingColorSpace(wn.copy(this),e);let t=wn.r,i=wn.g,s=wn.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Os),this.setHSL(Os.h+e,Os.s+t,Os.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Os),e.getHSL(Il);let i=Ua(Os.h,Il.h,t),s=Ua(Os.s,Il.s,t),r=Ua(Os.l,Il.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new me;me.NAMES=pm;var w1=0,fs=class extends $s{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w1++}),this.uuid=cs(),this.name="",this.blending=Hi,this.side=Ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mu,this.blendDst=gu,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(i.blending=this.blending),this.side!==Ws&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mu&&(i.blendSrc=this.blendSrc),this.blendDst!==gu&&(i.blendDst=this.blendDst),this.blendEquation!==wr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_o&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ke=class extends fs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=em,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var hn=new T,Ll=new ne,Qt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ed,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ll.fromBufferAttribute(this,t),Ll.applyMatrix3(e),this.setXY(t,Ll.x,Ll.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=yi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=kt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),s=kt(s,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ed&&(e.usage=this.usage),e}};var hc=class extends Qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var uc=class extends Qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Qe=class extends Qt{constructor(e,t,i){super(new Float32Array(e),t,i)}},S1=0,ni=new vt,eu=new pn,ao=new T,Xn=new Mi,wa=new Mi,yn=new T,Rt=class n extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S1++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fm(e)?uc:hc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ct().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,i){return ni.makeTranslation(e,t,i),this.applyMatrix4(ni),this}scale(e,t,i){return ni.makeScale(e,t,i),this.applyMatrix4(ni),this}lookAt(e){return eu.lookAt(e),eu.updateMatrix(),this.applyMatrix4(eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qe(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Xn.setFromBufferAttribute(r),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){let i=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];wa.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors(Xn.min,wa.min),Xn.expandByPoint(yn),yn.addVectors(Xn.max,wa.max),Xn.expandByPoint(yn)):(Xn.expandByPoint(wa.min),Xn.expandByPoint(wa.max))}Xn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)yn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(yn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)yn.fromBufferAttribute(a,c),l&&(ao.fromBufferAttribute(e,c),yn.add(ao)),s=Math.max(s,i.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new T,l[I]=new T;let c=new T,h=new T,u=new T,f=new ne,p=new ne,g=new ne,v=new T,x=new T;function m(I,w,b){c.fromBufferAttribute(i,I),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,b),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,b),h.sub(c),u.sub(c),p.sub(f),g.sub(f);let U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(U),x.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(U),a[I].add(v),a[w].add(v),a[b].add(v),l[I].add(x),l[w].add(x),l[b].add(x))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let I=0,w=_.length;I<w;++I){let b=_[I],U=b.start,B=b.count;for(let z=U,W=U+B;z<W;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let E=new T,M=new T,D=new T,A=new T;function L(I){D.fromBufferAttribute(s,I),A.copy(D);let w=a[I];E.copy(w),E.sub(D.multiplyScalar(D.dot(w))).normalize(),M.crossVectors(A,w);let U=M.dot(l[I])<0?-1:1;o.setXYZW(I,E.x,E.y,E.z,U)}for(let I=0,w=_.length;I<w;++I){let b=_[I],U=b.start,B=b.count;for(let z=U,W=U+B;z<W;z+=3)L(e.getX(z+0)),L(e.getX(z+1)),L(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new T,r=new T,o=new T,a=new T,l=new T,c=new T,h=new T,u=new T;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),v=e.getX(f+1),x=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,x),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,x),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let v=0,x=l.length;v<x;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let m=0;m<h;m++)f[g++]=c[p++]}return new Qt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},f0=new vt,vr=new lc,Dl=new Xs,p0=new T,Ul=new T,Nl=new T,kl=new T,tu=new T,Hl=new T,m0=new T,Fl=new T,le=class extends pn{constructor(e=new Rt,t=new Ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Hl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(tu.fromBufferAttribute(u,e),o?Hl.addScaledVector(tu,h):Hl.addScaledVector(tu.sub(t),h))}t.add(Hl)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Dl.copy(i.boundingSphere),Dl.applyMatrix4(r),vr.copy(e.ray).recast(e.near),!(Dl.containsPoint(vr.origin)===!1&&(vr.intersectSphere(Dl,p0)===null||vr.origin.distanceToSquared(p0)>(e.far-e.near)**2))&&(f0.copy(r).invert(),vr.copy(e.ray).applyMatrix4(f0),!(i.boundingBox!==null&&vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,vr)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let x=f[g],m=o[x.materialIndex],_=Math.max(x.start,p.start),E=Math.min(a.count,Math.min(x.start+x.count,p.start+p.count));for(let M=_,D=E;M<D;M+=3){let A=a.getX(M),L=a.getX(M+1),I=a.getX(M+2);s=Ol(this,m,e,i,c,h,u,A,L,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let x=g,m=v;x<m;x+=3){let _=a.getX(x),E=a.getX(x+1),M=a.getX(x+2);s=Ol(this,o,e,i,c,h,u,_,E,M),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let x=f[g],m=o[x.materialIndex],_=Math.max(x.start,p.start),E=Math.min(l.count,Math.min(x.start+x.count,p.start+p.count));for(let M=_,D=E;M<D;M+=3){let A=M,L=M+1,I=M+2;s=Ol(this,m,e,i,c,h,u,A,L,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let x=g,m=v;x<m;x+=3){let _=x,E=x+1,M=x+2;s=Ol(this,o,e,i,c,h,u,_,E,M),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}};function T1(n,e,t,i,s,r,o,a){let l;if(e.side===Sn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ws,a),l===null)return null;Fl.copy(a),Fl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Fl);return c<t.near||c>t.far?null:{distance:c,point:Fl.clone(),object:n}}function Ol(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ul),n.getVertexPosition(l,Nl),n.getVertexPosition(c,kl);let h=T1(n,e,t,i,Ul,Nl,kl,m0);if(h){let u=new T;Gs.getBarycoord(m0,Ul,Nl,kl,u),s&&(h.uv=Gs.getInterpolatedAttribute(s,a,l,c,u,new ne)),r&&(h.uv1=Gs.getInterpolatedAttribute(r,a,l,c,u,new ne)),o&&(h.normal=Gs.getInterpolatedAttribute(o,a,l,c,u,new T),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new T,materialIndex:0};Gs.getNormal(Ul,Nl,kl,f.normal),h.face=f,h.barycoord=u}return h}var Ge=class n extends Rt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(u,2));function g(v,x,m,_,E,M,D,A,L,I,w){let b=M/L,U=D/I,B=M/2,z=D/2,W=A/2,ee=L+1,Y=I+1,oe=0,X=0,ye=new T;for(let Ae=0;Ae<Y;Ae++){let Ve=Ae*U-z;for(let ft=0;ft<ee;ft++){let Bt=ft*b-B;ye[v]=Bt*_,ye[x]=Ve*E,ye[m]=W,c.push(ye.x,ye.y,ye.z),ye[v]=0,ye[x]=0,ye[m]=A>0?1:-1,h.push(ye.x,ye.y,ye.z),u.push(ft/L),u.push(1-Ae/I),oe+=1}}for(let Ae=0;Ae<I;Ae++)for(let Ve=0;Ve<L;Ve++){let ft=f+Ve+ee*Ae,Bt=f+Ve+ee*(Ae+1),K=f+(Ve+1)+ee*(Ae+1),ae=f+(Ve+1)+ee*Ae;l.push(ft,Bt,ae),l.push(Bt,K,ae),X+=6}a.addGroup(p,X,w),p+=X,f+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ro(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function In(n){let e={};for(let t=0;t<n.length;t++){let i=Ro(n[t]);for(let s in i)e[s]=i[s]}return e}function R1(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function mm(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}var js={clone:Ro,merge:In},A1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends fs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=A1,this.fragmentShader=C1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ro(e.uniforms),this.uniformsGroups=R1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},dc=class extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=ls}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},zs=new T,g0=new ne,x0=new ne,ln=class extends dc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=To*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return To*2*Math.atan(Math.tan(Da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zs.x,zs.y).multiplyScalar(-e/zs.z),zs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zs.x,zs.y).multiplyScalar(-e/zs.z)}getViewSize(e,t){return this.getViewBounds(e,g0,x0),t.subVectors(x0,g0)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Da*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},lo=-90,co=1,sd=class extends pn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ln(lo,co,e,t);s.layers=this.layers,this.add(s);let r=new ln(lo,co,e,t);r.layers=this.layers,this.add(r);let o=new ln(lo,co,e,t);o.layers=this.layers,this.add(o);let a=new ln(lo,co,e,t);a.layers=this.layers,this.add(a);let l=new ln(lo,co,e,t);l.layers=this.layers,this.add(l);let c=new ln(lo,co,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ls)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},fc=class extends Fn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Eo,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},rd=class extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new fc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ui}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ge(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:Ro(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:ki});r.uniforms.tEquirect.value=t;let o=new le(s,r),a=t.minFilter;return t.minFilter===Rr&&(t.minFilter=Ui),new sd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},nu=new T,P1=new T,I1=new ct,as=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=nu.subVectors(i,t).cross(P1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(nu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||I1.getNormalMatrix(e),s=this.coplanarPoint(nu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Mr=new Xs,zl=new T,Oa=class{constructor(e=new as,t=new as,i=new as,s=new as,r=new as,o=new as){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ls){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],v=s[10],x=s[11],m=s[12],_=s[13],E=s[14],M=s[15];if(i[0].setComponents(l-r,f-c,x-p,M-m).normalize(),i[1].setComponents(l+r,f+c,x+p,M+m).normalize(),i[2].setComponents(l+o,f+h,x+g,M+_).normalize(),i[3].setComponents(l-o,f-h,x-g,M-_).normalize(),i[4].setComponents(l-a,f-u,x-v,M-E).normalize(),t===ls)i[5].setComponents(l+a,f+u,x+v,M+E).normalize();else if(t===sc)i[5].setComponents(a,u,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){return Mr.center.set(0,0,0),Mr.radius=.7071067811865476,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(zl.x=s.normal.x>0?e.max.x:e.min.x,zl.y=s.normal.y>0?e.max.y:e.min.y,zl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function gm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function L1(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let v=u[p];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var On=class n extends Rt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,p=[],g=[],v=[],x=[];for(let m=0;m<h;m++){let _=m*f-o;for(let E=0;E<c;E++){let M=E*u-r;g.push(M,-_,0),v.push(0,0,1),x.push(E/a),x.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let E=_+c*m,M=_+c*(m+1),D=_+1+c*(m+1),A=_+1+c*m;p.push(E,M,A),p.push(M,D,A)}this.setIndex(p),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(v,3)),this.setAttribute("uv",new Qe(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},D1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,U1=`#ifdef USE_ALPHAHASH
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
#endif`,N1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,k1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,O1=`#ifdef USE_AOMAP
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
#endif`,z1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B1=`#ifdef USE_BATCHING
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
#endif`,G1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,V1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,W1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,X1=`#ifdef USE_IRIDESCENCE
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
#endif`,q1=`#ifdef USE_BUMPMAP
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
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Z1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,K1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,J1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Q1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ev=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nv=`#define PI 3.141592653589793
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
} // validated`,iv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sv=`vec3 transformedNormal = objectNormal;
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
#endif`,rv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ov=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,av=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cv="gl_FragColor = linearToOutputTexel( gl_FragColor );",hv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uv=`#ifdef USE_ENVMAP
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
#endif`,dv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fv=`#ifdef USE_ENVMAP
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
#endif`,pv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mv=`#ifdef USE_ENVMAP
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
#endif`,gv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mv=`#ifdef USE_GRADIENTMAP
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
}`,_v=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ev=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wv=`uniform bool receiveShadow;
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
#endif`,Sv=`#ifdef USE_ENVMAP
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
#endif`,Tv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Av=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pv=`PhysicalMaterial material;
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
#endif`,Iv=`struct PhysicalMaterial {
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
}`,Lv=`
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
#endif`,Dv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Uv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ov=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gv=`#if defined( USE_POINTS_UV )
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
#endif`,Vv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$v=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yv=`#ifdef USE_MORPHTARGETS
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
#endif`,Zv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tM=`#ifdef USE_NORMALMAP
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
#endif`,nM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xM=`float getShadowMask() {
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
}`,yM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vM=`#ifdef USE_SKINNING
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
#endif`,MM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_M=`#ifdef USE_SKINNING
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
#endif`,EM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,TM=`#ifdef USE_TRANSMISSION
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
#endif`,RM=`#ifdef USE_TRANSMISSION
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
#endif`,AM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,LM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DM=`uniform sampler2D t2D;
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
}`,UM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FM=`#include <common>
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
}`,OM=`#if DEPTH_PACKING == 3200
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
}`,zM=`#define DISTANCE
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
}`,BM=`#define DISTANCE
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
}`,GM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WM=`uniform float scale;
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
}`,$M=`uniform vec3 diffuse;
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
}`,XM=`#include <common>
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
}`,qM=`uniform vec3 diffuse;
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
}`,YM=`#define LAMBERT
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
}`,ZM=`#define LAMBERT
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
}`,KM=`#define MATCAP
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
}`,JM=`#define MATCAP
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
}`,jM=`#define NORMAL
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
}`,QM=`#define NORMAL
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
}`,e_=`#define PHONG
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
}`,t_=`#define PHONG
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
}`,n_=`#define STANDARD
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
}`,i_=`#define STANDARD
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
}`,s_=`#define TOON
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
}`,r_=`#define TOON
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
}`,o_=`uniform float size;
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
}`,a_=`uniform vec3 diffuse;
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
}`,l_=`#include <common>
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
}`,c_=`uniform vec3 color;
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
}`,h_=`uniform float rotation;
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
}`,u_=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:D1,alphahash_pars_fragment:U1,alphamap_fragment:N1,alphamap_pars_fragment:k1,alphatest_fragment:H1,alphatest_pars_fragment:F1,aomap_fragment:O1,aomap_pars_fragment:z1,batching_pars_vertex:B1,batching_vertex:G1,begin_vertex:V1,beginnormal_vertex:W1,bsdfs:$1,iridescence_fragment:X1,bumpmap_pars_fragment:q1,clipping_planes_fragment:Y1,clipping_planes_pars_fragment:Z1,clipping_planes_pars_vertex:K1,clipping_planes_vertex:J1,color_fragment:j1,color_pars_fragment:Q1,color_pars_vertex:ev,color_vertex:tv,common:nv,cube_uv_reflection_fragment:iv,defaultnormal_vertex:sv,displacementmap_pars_vertex:rv,displacementmap_vertex:ov,emissivemap_fragment:av,emissivemap_pars_fragment:lv,colorspace_fragment:cv,colorspace_pars_fragment:hv,envmap_fragment:uv,envmap_common_pars_fragment:dv,envmap_pars_fragment:fv,envmap_pars_vertex:pv,envmap_physical_pars_fragment:Sv,envmap_vertex:mv,fog_vertex:gv,fog_pars_vertex:xv,fog_fragment:yv,fog_pars_fragment:vv,gradientmap_pars_fragment:Mv,lightmap_pars_fragment:_v,lights_lambert_fragment:Ev,lights_lambert_pars_fragment:bv,lights_pars_begin:wv,lights_toon_fragment:Tv,lights_toon_pars_fragment:Rv,lights_phong_fragment:Av,lights_phong_pars_fragment:Cv,lights_physical_fragment:Pv,lights_physical_pars_fragment:Iv,lights_fragment_begin:Lv,lights_fragment_maps:Dv,lights_fragment_end:Uv,logdepthbuf_fragment:Nv,logdepthbuf_pars_fragment:kv,logdepthbuf_pars_vertex:Hv,logdepthbuf_vertex:Fv,map_fragment:Ov,map_pars_fragment:zv,map_particle_fragment:Bv,map_particle_pars_fragment:Gv,metalnessmap_fragment:Vv,metalnessmap_pars_fragment:Wv,morphinstance_vertex:$v,morphcolor_vertex:Xv,morphnormal_vertex:qv,morphtarget_pars_vertex:Yv,morphtarget_vertex:Zv,normal_fragment_begin:Kv,normal_fragment_maps:Jv,normal_pars_fragment:jv,normal_pars_vertex:Qv,normal_vertex:eM,normalmap_pars_fragment:tM,clearcoat_normal_fragment_begin:nM,clearcoat_normal_fragment_maps:iM,clearcoat_pars_fragment:sM,iridescence_pars_fragment:rM,opaque_fragment:oM,packing:aM,premultiplied_alpha_fragment:lM,project_vertex:cM,dithering_fragment:hM,dithering_pars_fragment:uM,roughnessmap_fragment:dM,roughnessmap_pars_fragment:fM,shadowmap_pars_fragment:pM,shadowmap_pars_vertex:mM,shadowmap_vertex:gM,shadowmask_pars_fragment:xM,skinbase_vertex:yM,skinning_pars_vertex:vM,skinning_vertex:MM,skinnormal_vertex:_M,specularmap_fragment:EM,specularmap_pars_fragment:bM,tonemapping_fragment:wM,tonemapping_pars_fragment:SM,transmission_fragment:TM,transmission_pars_fragment:RM,uv_pars_fragment:AM,uv_pars_vertex:CM,uv_vertex:PM,worldpos_vertex:IM,background_vert:LM,background_frag:DM,backgroundCube_vert:UM,backgroundCube_frag:NM,cube_vert:kM,cube_frag:HM,depth_vert:FM,depth_frag:OM,distanceRGBA_vert:zM,distanceRGBA_frag:BM,equirect_vert:GM,equirect_frag:VM,linedashed_vert:WM,linedashed_frag:$M,meshbasic_vert:XM,meshbasic_frag:qM,meshlambert_vert:YM,meshlambert_frag:ZM,meshmatcap_vert:KM,meshmatcap_frag:JM,meshnormal_vert:jM,meshnormal_frag:QM,meshphong_vert:e_,meshphong_frag:t_,meshphysical_vert:n_,meshphysical_frag:i_,meshtoon_vert:s_,meshtoon_frag:r_,points_vert:o_,points_frag:a_,shadow_vert:l_,shadow_frag:c_,sprite_vert:h_,sprite_frag:u_},de={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Di={basic:{uniforms:In([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:In([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new me(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:In([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:In([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:In([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new me(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:In([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:In([de.points,de.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:In([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:In([de.common,de.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:In([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:In([de.sprite,de.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:In([de.common,de.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:In([de.lights,de.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Di.physical={uniforms:In([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};var Bl={r:0,b:0,g:0},_r=new Mn,d_=new vt;function f_(n,e,t,i,s,r,o){let a=new me(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(_){let E=_.isScene===!0?_.background:null;return E&&E.isTexture&&(E=(_.backgroundBlurriness>0?t:e).get(E)),E}function v(_){let E=!1,M=g(_);M===null?m(a,l):M&&M.isColor&&(m(M,1),E=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(_,E){let M=g(E);M&&(M.isCubeTexture||M.mapping===Ac)?(h===void 0&&(h=new le(new Ge(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:Ro(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_r.copy(E.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(d_.makeRotationFromEuler(_r)),h.material.toneMapped=xt.getTransfer(M.colorSpace)!==Dt,(u!==M||f!==M.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,p=n.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new le(new On(2,2),new sn({name:"BackgroundMaterial",uniforms:Ro(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Ws,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=xt.getTransfer(M.colorSpace)!==Dt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,p=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,E){_.getRGB(Bl,mm(n)),i.buffers.color.setClear(Bl.r,Bl.g,Bl.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(_,E=1){a.set(_),l=E,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,m(a,l)},render:v,addToRenderList:x}}function p_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(b,U,B,z,W){let ee=!1,Y=u(z,B,U);r!==Y&&(r=Y,c(r.object)),ee=p(b,z,B,W),ee&&g(b,z,B,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,M(b,U,B,z),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function u(b,U,B){let z=B.wireframe===!0,W=i[b.id];W===void 0&&(W={},i[b.id]=W);let ee=W[U.id];ee===void 0&&(ee={},W[U.id]=ee);let Y=ee[z];return Y===void 0&&(Y=f(l()),ee[z]=Y),Y}function f(b){let U=[],B=[],z=[];for(let W=0;W<t;W++)U[W]=0,B[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:z,object:b,attributes:{},index:null}}function p(b,U,B,z){let W=r.attributes,ee=U.attributes,Y=0,oe=B.getAttributes();for(let X in oe)if(oe[X].location>=0){let Ae=W[X],Ve=ee[X];if(Ve===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(Ve=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(Ve=b.instanceColor)),Ae===void 0||Ae.attribute!==Ve||Ve&&Ae.data!==Ve.data)return!0;Y++}return r.attributesNum!==Y||r.index!==z}function g(b,U,B,z){let W={},ee=U.attributes,Y=0,oe=B.getAttributes();for(let X in oe)if(oe[X].location>=0){let Ae=ee[X];Ae===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(Ae=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(Ae=b.instanceColor));let Ve={};Ve.attribute=Ae,Ae&&Ae.data&&(Ve.data=Ae.data),W[X]=Ve,Y++}r.attributes=W,r.attributesNum=Y,r.index=z}function v(){let b=r.newAttributes;for(let U=0,B=b.length;U<B;U++)b[U]=0}function x(b){m(b,0)}function m(b,U){let B=r.newAttributes,z=r.enabledAttributes,W=r.attributeDivisors;B[b]=1,z[b]===0&&(n.enableVertexAttribArray(b),z[b]=1),W[b]!==U&&(n.vertexAttribDivisor(b,U),W[b]=U)}function _(){let b=r.newAttributes,U=r.enabledAttributes;for(let B=0,z=U.length;B<z;B++)U[B]!==b[B]&&(n.disableVertexAttribArray(B),U[B]=0)}function E(b,U,B,z,W,ee,Y){Y===!0?n.vertexAttribIPointer(b,U,B,W,ee):n.vertexAttribPointer(b,U,B,z,W,ee)}function M(b,U,B,z){v();let W=z.attributes,ee=B.getAttributes(),Y=U.defaultAttributeValues;for(let oe in ee){let X=ee[oe];if(X.location>=0){let ye=W[oe];if(ye===void 0&&(oe==="instanceMatrix"&&b.instanceMatrix&&(ye=b.instanceMatrix),oe==="instanceColor"&&b.instanceColor&&(ye=b.instanceColor)),ye!==void 0){let Ae=ye.normalized,Ve=ye.itemSize,ft=e.get(ye);if(ft===void 0)continue;let Bt=ft.buffer,K=ft.type,ae=ft.bytesPerElement,Fe=K===n.INT||K===n.UNSIGNED_INT||ye.gpuType===Xd;if(ye.isInterleavedBufferAttribute){let ve=ye.data,Ze=ve.stride,rt=ye.offset;if(ve.isInstancedInterleavedBuffer){for(let pt=0;pt<X.locationSize;pt++)m(X.location+pt,ve.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let pt=0;pt<X.locationSize;pt++)x(X.location+pt);n.bindBuffer(n.ARRAY_BUFFER,Bt);for(let pt=0;pt<X.locationSize;pt++)E(X.location+pt,Ve/X.locationSize,K,Ae,Ze*ae,(rt+Ve/X.locationSize*pt)*ae,Fe)}else{if(ye.isInstancedBufferAttribute){for(let ve=0;ve<X.locationSize;ve++)m(X.location+ve,ye.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let ve=0;ve<X.locationSize;ve++)x(X.location+ve);n.bindBuffer(n.ARRAY_BUFFER,Bt);for(let ve=0;ve<X.locationSize;ve++)E(X.location+ve,Ve/X.locationSize,K,Ae,Ve*ae,Ve/X.locationSize*ve*ae,Fe)}}else if(Y!==void 0){let Ae=Y[oe];if(Ae!==void 0)switch(Ae.length){case 2:n.vertexAttrib2fv(X.location,Ae);break;case 3:n.vertexAttrib3fv(X.location,Ae);break;case 4:n.vertexAttrib4fv(X.location,Ae);break;default:n.vertexAttrib1fv(X.location,Ae)}}}}_()}function D(){I();for(let b in i){let U=i[b];for(let B in U){let z=U[B];for(let W in z)h(z[W].object),delete z[W];delete U[B]}delete i[b]}}function A(b){if(i[b.id]===void 0)return;let U=i[b.id];for(let B in U){let z=U[B];for(let W in z)h(z[W].object),delete z[W];delete U[B]}delete i[b.id]}function L(b){for(let U in i){let B=i[U];if(B[b.id]===void 0)continue;let z=B[b.id];for(let W in z)h(z[W].object),delete z[W];delete B[b.id]}}function I(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:w,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:x,disableUnusedAttributes:_}}function m_(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,i,1)}function l(c,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function g_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==vi&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let I=L===bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==ds&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Ni&&!I)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:D,maxSamples:A}}function x_(n){let e=this,t=null,i=0,s=!1,r=!1,o=new as,a=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||i!==0||s;return s=f,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,v=u.clipIntersection,x=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!x)r?h(null):c();else{let _=r?0:i,E=_*4,M=m.clippingState||null;l.value=M,M=h(g,f,E,p);for(let D=0;D!==E;++D)M[D]=t[D];m.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,p,g){let v=u!==null?u.length:0,x=null;if(v!==0){if(x=l.value,g!==!0||x===null){let m=p+v*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(x===null||x.length<m)&&(x=new Float32Array(m));for(let E=0,M=p;E!==v;++E,M+=4)o.copy(u[E]).applyMatrix4(_,a),o.normal.toArray(x,M),x[M+3]=o.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}function y_(n){let e=new WeakMap;function t(o,a){return a===wu?o.mapping=Eo:a===Su&&(o.mapping=bo),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===wu||a===Su)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new rd(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Ao=class extends dc{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},xo=4,y0=[.125,.215,.35,.446,.526,.582],Sr=20,iu=new Ao,v0=new me,su=null,ru=0,ou=0,au=!1,br=(1+Math.sqrt(5))/2,ho=1/br,M0=[new T(-br,ho,0),new T(br,ho,0),new T(-ho,0,br),new T(ho,0,br),new T(0,br,-ho),new T(0,br,ho),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],Co=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){su=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),ou=this._renderer.getActiveMipmapLevel(),au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=b0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=E0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(su,ru,ou),this._renderer.xr.enabled=au,e.scissorTest=!1,Gl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Eo||e.mapping===bo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),su=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),ou=this._renderer.getActiveMipmapLevel(),au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ui,minFilter:Ui,generateMipmaps:!1,type:bi,format:vi,colorSpace:Uo,depthBuffer:!1},s=_0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_0(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=v_(r)),this._blurMaterial=M_(r,e,t)}return s}_compileMaterial(e){let t=new le(this._lodPlanes[0],e);this._renderer.compile(t,iu)}_sceneToCubeUV(e,t,i,s){let a=new ln(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(v0),h.toneMapping=Vs,h.autoClear=!1;let p=new Ke({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),g=new le(new Ge,p),v=!1,x=e.background;x?x.isColor&&(p.color.copy(x),e.background=null,v=!0):(p.color.copy(v0),v=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):_===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let E=this._cubeSize;Gl(s,_*E,m>2?E:0,E,E),h.setRenderTarget(s),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=x}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Eo||e.mapping===bo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=b0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=E0());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new le(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Gl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,iu)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=M0[(s-r-1)%M0.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new le(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Sr-1),v=r/g,x=isFinite(r)?1+Math.floor(h*v):Sr;x>Sr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Sr}`);let m=[],_=0;for(let L=0;L<Sr;++L){let I=L/v,w=Math.exp(-I*I/2);m.push(w),L===0?_+=w:L<x&&(_+=2*w)}for(let L=0;L<m.length;L++)m[L]=m[L]/_;f.envMap.value=e.texture,f.samples.value=x,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;let M=this._sizeLods[s],D=3*M*(s>E-xo?s-E+xo:0),A=4*(this._cubeSize-M);Gl(t,D,A,3*M,2*M),l.setRenderTarget(t),l.render(u,iu)}};function v_(n){let e=[],t=[],i=[],s=n,r=n-xo+1+y0.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-xo?l=y0[o-n+xo-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,x=2,m=1,_=new Float32Array(v*g*p),E=new Float32Array(x*g*p),M=new Float32Array(m*g*p);for(let A=0;A<p;A++){let L=A%3*2/3-1,I=A>2?0:-1,w=[L,I,0,L+2/3,I,0,L+2/3,I+1,0,L,I,0,L+2/3,I+1,0,L,I+1,0];_.set(w,v*g*A),E.set(f,x*g*A);let b=[A,A,A,A,A,A];M.set(b,m*g*A)}let D=new Rt;D.setAttribute("position",new Qt(_,v)),D.setAttribute("uv",new Qt(E,x)),D.setAttribute("faceIndex",new Qt(M,m)),e.push(D),s>xo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _0(n,e,t){let i=new Ln(n,e,t);return i.texture.mapping=Ac,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gl(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function M_(n,e,t){let i=new Float32Array(Sr),s=new T(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:tf(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function E0(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tf(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function b0(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function tf(){return`

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
	`}function __(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===wu||l===Su,h=l===Eo||l===bo;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Co(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Co(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function E_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ia("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function b_(n,e,t,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let v=f.morphAttributes[g];for(let x=0,m=v.length;x<m;x++)e.remove(v[x])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let v=p[g];for(let x=0,m=v.length;x<m;x++)e.update(v[x],n.ARRAY_BUFFER)}}function c(u){let f=[],p=u.index,g=u.attributes.position,v=0;if(p!==null){let _=p.array;v=p.version;for(let E=0,M=_.length;E<M;E+=3){let D=_[E+0],A=_[E+1],L=_[E+2];f.push(D,A,A,L,L,D)}}else if(g!==void 0){let _=g.array;v=g.version;for(let E=0,M=_.length/3-1;E<M;E+=3){let D=E+0,A=E+1,L=E+2;f.push(D,A,A,L,L,D)}}else return;let x=new(fm(f)?uc:hc)(f,1);x.version=v;let m=r.get(u);m&&e.remove(m),r.set(u,x)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function w_(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),t.update(p,i,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let x=0;for(let m=0;m<g;m++)x+=p[m];t.update(x,i,1)}function u(f,p,g,v){if(g===0)return;let x=e.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<f.length;m++)c(f[m]/o,p[m],v[m]);else{x.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,v,0,g);let m=0;for(let _=0;_<g;_++)m+=p[_]*v[_];t.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function S_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function T_(n,e,t){let i=new WeakMap,s=new Ft;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let w=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],E=0;p===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let M=a.attributes.position.count*E,D=1;M>e.maxTextureSize&&(D=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let A=new Float32Array(M*D*4*u),L=new ac(A,M,D,u);L.type=Ni,L.needsUpdate=!0;let I=E*4;for(let b=0;b<u;b++){let U=x[b],B=m[b],z=_[b],W=M*D*4*b;for(let ee=0;ee<U.count;ee++){let Y=ee*I;p===!0&&(s.fromBufferAttribute(U,ee),A[W+Y+0]=s.x,A[W+Y+1]=s.y,A[W+Y+2]=s.z,A[W+Y+3]=0),g===!0&&(s.fromBufferAttribute(B,ee),A[W+Y+4]=s.x,A[W+Y+5]=s.y,A[W+Y+6]=s.z,A[W+Y+7]=0),v===!0&&(s.fromBufferAttribute(z,ee),A[W+Y+8]=s.x,A[W+Y+9]=s.y,A[W+Y+10]=s.z,A[W+Y+11]=z.itemSize===4?s.w:1)}}f={count:u,texture:L,size:new ne(M,D)},i.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function R_(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var pc=class extends Fn{constructor(e,t,i,s,r,o,a,l,c,h=yo){if(h!==yo&&h!==So)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===yo&&(i=Ar),i===void 0&&h===So&&(i=wo),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:qn,this.minFilter=l!==void 0?l:qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},xm=new Fn,w0=new pc(1,1),ym=new ac,vm=new id,Mm=new fc,S0=[],T0=[],R0=new Float32Array(16),A0=new Float32Array(9),C0=new Float32Array(4);function No(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=S0[s];if(r===void 0&&(r=new Float32Array(s),S0[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function mn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function gn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Pc(n,e){let t=T0[e];t===void 0&&(t=new Int32Array(e),T0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function A_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function C_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2fv(this.addr,e),gn(t,e)}}function P_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;n.uniform3fv(this.addr,e),gn(t,e)}}function I_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4fv(this.addr,e),gn(t,e)}}function L_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;C0.set(i),n.uniformMatrix2fv(this.addr,!1,C0),gn(t,i)}}function D_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;A0.set(i),n.uniformMatrix3fv(this.addr,!1,A0),gn(t,i)}}function U_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;R0.set(i),n.uniformMatrix4fv(this.addr,!1,R0),gn(t,i)}}function N_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function k_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2iv(this.addr,e),gn(t,e)}}function H_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;n.uniform3iv(this.addr,e),gn(t,e)}}function F_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4iv(this.addr,e),gn(t,e)}}function O_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function z_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2uiv(this.addr,e),gn(t,e)}}function B_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;n.uniform3uiv(this.addr,e),gn(t,e)}}function G_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4uiv(this.addr,e),gn(t,e)}}function V_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(w0.compareFunction=dm,r=w0):r=xm,t.setTexture2D(e||r,s)}function W_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||vm,s)}function $_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Mm,s)}function X_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ym,s)}function q_(n){switch(n){case 5126:return A_;case 35664:return C_;case 35665:return P_;case 35666:return I_;case 35674:return L_;case 35675:return D_;case 35676:return U_;case 5124:case 35670:return N_;case 35667:case 35671:return k_;case 35668:case 35672:return H_;case 35669:case 35673:return F_;case 5125:return O_;case 36294:return z_;case 36295:return B_;case 36296:return G_;case 35678:case 36198:case 36298:case 36306:case 35682:return V_;case 35679:case 36299:case 36307:return W_;case 35680:case 36300:case 36308:case 36293:return $_;case 36289:case 36303:case 36311:case 36292:return X_}}function Y_(n,e){n.uniform1fv(this.addr,e)}function Z_(n,e){let t=No(e,this.size,2);n.uniform2fv(this.addr,t)}function K_(n,e){let t=No(e,this.size,3);n.uniform3fv(this.addr,t)}function J_(n,e){let t=No(e,this.size,4);n.uniform4fv(this.addr,t)}function j_(n,e){let t=No(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Q_(n,e){let t=No(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function e2(n,e){let t=No(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function t2(n,e){n.uniform1iv(this.addr,e)}function n2(n,e){n.uniform2iv(this.addr,e)}function i2(n,e){n.uniform3iv(this.addr,e)}function s2(n,e){n.uniform4iv(this.addr,e)}function r2(n,e){n.uniform1uiv(this.addr,e)}function o2(n,e){n.uniform2uiv(this.addr,e)}function a2(n,e){n.uniform3uiv(this.addr,e)}function l2(n,e){n.uniform4uiv(this.addr,e)}function c2(n,e,t){let i=this.cache,s=e.length,r=Pc(t,s);mn(i,r)||(n.uniform1iv(this.addr,r),gn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||xm,r[o])}function h2(n,e,t){let i=this.cache,s=e.length,r=Pc(t,s);mn(i,r)||(n.uniform1iv(this.addr,r),gn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||vm,r[o])}function u2(n,e,t){let i=this.cache,s=e.length,r=Pc(t,s);mn(i,r)||(n.uniform1iv(this.addr,r),gn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Mm,r[o])}function d2(n,e,t){let i=this.cache,s=e.length,r=Pc(t,s);mn(i,r)||(n.uniform1iv(this.addr,r),gn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ym,r[o])}function f2(n){switch(n){case 5126:return Y_;case 35664:return Z_;case 35665:return K_;case 35666:return J_;case 35674:return j_;case 35675:return Q_;case 35676:return e2;case 5124:case 35670:return t2;case 35667:case 35671:return n2;case 35668:case 35672:return i2;case 35669:case 35673:return s2;case 5125:return r2;case 36294:return o2;case 36295:return a2;case 36296:return l2;case 35678:case 36198:case 36298:case 36306:case 35682:return c2;case 35679:case 36299:case 36307:return h2;case 35680:case 36300:case 36308:case 36293:return u2;case 36289:case 36303:case 36311:case 36292:return d2}}var od=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=q_(t.type)}},ad=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=f2(t.type)}},ld=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},lu=/(\w+)(\])?(\[|\.)?/g;function P0(n,e){n.seq.push(e),n.map[e.id]=e}function p2(n,e,t){let i=n.name,s=i.length;for(lu.lastIndex=0;;){let r=lu.exec(i),o=lu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){P0(t,c===void 0?new od(a,n,e):new ad(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new ld(a),P0(t,u)),t=u}}}var Mo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);p2(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function I0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var m2=37297,g2=0;function x2(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var L0=new ct;function y2(n){xt._getMatrix(L0,xt.workingColorSpace,n);let e=`mat3( ${L0.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(n)){case Cc:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function D0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+x2(n.getShaderSource(e),o)}else return s}function v2(n,e){let t=y2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function M2(n,e){let t;switch(e){case Bd:t="Linear";break;case Gd:t="Reinhard";break;case Vd:t="Cineon";break;case Lr:t="ACESFilmic";break;case Wd:t="AgX";break;case $d:t="Neutral";break;case Hy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Vl=new T;function _2(){xt.getLuminanceCoefficients(Vl);let n=Vl.x.toFixed(4),e=Vl.y.toFixed(4),t=Vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(La).join(`
`)}function b2(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function w2(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function La(n){return n!==""}function U0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function N0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var S2=/^[ \t]*#include +<([\w\d./]+)>/gm;function cd(n){return n.replace(S2,R2)}var T2=new Map;function R2(n,e){let t=ut[e];if(t===void 0){let i=T2.get(e);if(i!==void 0)t=ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cd(t)}var A2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function k0(n){return n.replace(A2,C2)}function C2(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function H0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function P2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Q0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===zd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===os&&(e="SHADOWMAP_TYPE_VSM"),e}function I2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Eo:case bo:e="ENVMAP_TYPE_CUBE";break;case Ac:e="ENVMAP_TYPE_CUBE_UV";break}return e}function L2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case bo:e="ENVMAP_MODE_REFRACTION";break}return e}function D2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case em:e="ENVMAP_BLENDING_MULTIPLY";break;case Ny:e="ENVMAP_BLENDING_MIX";break;case ky:e="ENVMAP_BLENDING_ADD";break}return e}function U2(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function N2(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=P2(t),c=I2(t),h=L2(t),u=D2(t),f=U2(t),p=E2(t),g=b2(r),v=s.createProgram(),x,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(La).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(La).join(`
`),m.length>0&&(m+=`
`)):(x=[H0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(La).join(`
`),m=[H0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vs?"#define TONE_MAPPING":"",t.toneMapping!==Vs?ut.tonemapping_pars_fragment:"",t.toneMapping!==Vs?M2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,v2("linearToOutputTexel",t.outputColorSpace),_2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(La).join(`
`)),o=cd(o),o=U0(o,t),o=N0(o,t),a=cd(a),a=U0(a,t),a=N0(a,t),o=k0(o),a=k0(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,x=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===Kp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=_+x+o,M=_+m+a,D=I0(s,s.VERTEX_SHADER,E),A=I0(s,s.FRAGMENT_SHADER,M);s.attachShader(v,D),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function L(U){if(n.debug.checkShaderErrors){let B=s.getProgramInfoLog(v).trim(),z=s.getShaderInfoLog(D).trim(),W=s.getShaderInfoLog(A).trim(),ee=!0,Y=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,D,A);else{let oe=D0(s,D,"vertex"),X=D0(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+B+`
`+oe+`
`+X)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(z===""||W==="")&&(Y=!1);Y&&(U.diagnostics={runnable:ee,programLog:B,vertexShader:{log:z,prefix:x},fragmentShader:{log:W,prefix:m}})}s.deleteShader(D),s.deleteShader(A),I=new Mo(s,v),w=w2(s,v)}let I;this.getUniforms=function(){return I===void 0&&L(this),I};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,m2)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=g2++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=A,this}var k2=0,hd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ud(e),t.set(e,i)),i}},ud=class{constructor(e){this.id=k2++,this.code=e,this.usedTimes=0}};function H2(n,e,t,i,s,r,o){let a=new cc,l=new hd,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function x(w,b,U,B,z){let W=B.fog,ee=z.geometry,Y=w.isMeshStandardMaterial?B.environment:null,oe=(w.isMeshStandardMaterial?t:e).get(w.envMap||Y),X=oe&&oe.mapping===Ac?oe.image.height:null,ye=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));let Ae=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Ve=Ae!==void 0?Ae.length:0,ft=0;ee.morphAttributes.position!==void 0&&(ft=1),ee.morphAttributes.normal!==void 0&&(ft=2),ee.morphAttributes.color!==void 0&&(ft=3);let Bt,K,ae,Fe;if(ye){let Nt=Di[ye];Bt=Nt.vertexShader,K=Nt.fragmentShader}else Bt=w.vertexShader,K=w.fragmentShader,l.update(w),ae=l.getVertexShaderID(w),Fe=l.getFragmentShaderID(w);let ve=n.getRenderTarget(),Ze=n.state.buffers.depth.getReversed(),rt=z.isInstancedMesh===!0,pt=z.isBatchedMesh===!0,jt=!!w.map,wt=!!w.matcap,an=!!oe,F=!!w.aoMap,ei=!!w.lightMap,Mt=!!w.bumpMap,_t=!!w.normalMap,Xe=!!w.displacementMap,Wt=!!w.emissiveMap,$e=!!w.metalnessMap,C=!!w.roughnessMap,S=w.anisotropy>0,O=w.clearcoat>0,j=w.dispersion>0,te=w.iridescence>0,Z=w.sheen>0,Oe=w.transmission>0,Me=S&&!!w.anisotropyMap,Ce=O&&!!w.clearcoatMap,St=O&&!!w.clearcoatNormalMap,se=O&&!!w.clearcoatRoughnessMap,Pe=te&&!!w.iridescenceMap,qe=te&&!!w.iridescenceThicknessMap,je=Z&&!!w.sheenColorMap,Ie=Z&&!!w.sheenRoughnessMap,Et=!!w.specularMap,ht=!!w.specularColorMap,Gt=!!w.specularIntensityMap,N=Oe&&!!w.transmissionMap,ge=Oe&&!!w.thicknessMap,$=!!w.gradientMap,Q=!!w.alphaMap,Te=w.alphaTest>0,be=!!w.alphaHash,at=!!w.extensions,nn=Vs;w.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(nn=n.toneMapping);let En={shaderID:ye,shaderType:w.type,shaderName:w.name,vertexShader:Bt,fragmentShader:K,defines:w.defines,customVertexShaderID:ae,customFragmentShaderID:Fe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:pt,batchingColor:pt&&z._colorsTexture!==null,instancing:rt,instancingColor:rt&&z.instanceColor!==null,instancingMorph:rt&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Uo,alphaToCoverage:!!w.alphaToCoverage,map:jt,matcap:wt,envMap:an,envMapMode:an&&oe.mapping,envMapCubeUVHeight:X,aoMap:F,lightMap:ei,bumpMap:Mt,normalMap:_t,displacementMap:f&&Xe,emissiveMap:Wt,normalMapObjectSpace:_t&&w.normalMapType===By,normalMapTangentSpace:_t&&w.normalMapType===um,metalnessMap:$e,roughnessMap:C,anisotropy:S,anisotropyMap:Me,clearcoat:O,clearcoatMap:Ce,clearcoatNormalMap:St,clearcoatRoughnessMap:se,dispersion:j,iridescence:te,iridescenceMap:Pe,iridescenceThicknessMap:qe,sheen:Z,sheenColorMap:je,sheenRoughnessMap:Ie,specularMap:Et,specularColorMap:ht,specularIntensityMap:Gt,transmission:Oe,transmissionMap:N,thicknessMap:ge,gradientMap:$,opaque:w.transparent===!1&&w.blending===Hi&&w.alphaToCoverage===!1,alphaMap:Q,alphaTest:Te,alphaHash:be,combine:w.combine,mapUv:jt&&v(w.map.channel),aoMapUv:F&&v(w.aoMap.channel),lightMapUv:ei&&v(w.lightMap.channel),bumpMapUv:Mt&&v(w.bumpMap.channel),normalMapUv:_t&&v(w.normalMap.channel),displacementMapUv:Xe&&v(w.displacementMap.channel),emissiveMapUv:Wt&&v(w.emissiveMap.channel),metalnessMapUv:$e&&v(w.metalnessMap.channel),roughnessMapUv:C&&v(w.roughnessMap.channel),anisotropyMapUv:Me&&v(w.anisotropyMap.channel),clearcoatMapUv:Ce&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:St&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:je&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&v(w.sheenRoughnessMap.channel),specularMapUv:Et&&v(w.specularMap.channel),specularColorMapUv:ht&&v(w.specularColorMap.channel),specularIntensityMapUv:Gt&&v(w.specularIntensityMap.channel),transmissionMapUv:N&&v(w.transmissionMap.channel),thicknessMapUv:ge&&v(w.thicknessMap.channel),alphaMapUv:Q&&v(w.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(_t||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!ee.attributes.uv&&(jt||Q),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ze,skinning:z.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Ve,morphTextureStride:ft,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:nn,decodeVideoTexture:jt&&w.map.isVideoTexture===!0&&xt.getTransfer(w.map.colorSpace)===Dt,decodeVideoTextureEmissive:Wt&&w.emissiveMap.isVideoTexture===!0&&xt.getTransfer(w.emissiveMap.colorSpace)===Dt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===qt,flipSided:w.side===Sn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:at&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&w.extensions.multiDraw===!0||pt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return En.vertexUv1s=c.has(1),En.vertexUv2s=c.has(2),En.vertexUv3s=c.has(3),c.clear(),En}function m(w){let b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(let U in w.defines)b.push(U),b.push(w.defines[U]);return w.isRawShaderMaterial===!1&&(_(b,w),E(b,w),b.push(n.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function _(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function E(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function M(w){let b=g[w.type],U;if(b){let B=Di[b];U=js.clone(B.uniforms)}else U=w.uniforms;return U}function D(w,b){let U;for(let B=0,z=h.length;B<z;B++){let W=h[B];if(W.cacheKey===b){U=W,++U.usedTimes;break}}return U===void 0&&(U=new N2(n,b,w,r),h.push(U)),U}function A(w){if(--w.usedTimes===0){let b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function L(w){l.remove(w)}function I(){l.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:M,acquireProgram:D,releaseProgram:A,releaseShaderCache:L,programs:h,dispose:I}}function F2(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function O2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function F0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function O0(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,p,g,v,x){let m=n[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:x},n[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=p,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=v,m.group=x),e++,m}function a(u,f,p,g,v,x){let m=o(u,f,p,g,v,x);p.transmission>0?i.push(m):p.transparent===!0?s.push(m):t.push(m)}function l(u,f,p,g,v,x){let m=o(u,f,p,g,v,x);p.transmission>0?i.unshift(m):p.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,f){t.length>1&&t.sort(u||O2),i.length>1&&i.sort(f||F0),s.length>1&&s.sort(f||F0)}function h(){for(let u=e,f=n.length;u<f;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function z2(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new O0,n.set(i,[o])):s>=r.length?(o=new O0,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function B2(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new me};break;case"SpotLight":t={position:new T,direction:new T,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new T,halfWidth:new T,halfHeight:new T};break}return n[e.id]=t,t}}}function G2(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var V2=0;function W2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $2(n){let e=new B2,t=G2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new T);let s=new T,r=new vt,o=new vt;function a(c){let h=0,u=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,v=0,x=0,m=0,_=0,E=0,M=0,D=0,A=0,L=0;c.sort(W2);for(let w=0,b=c.length;w<b;w++){let U=c[w],B=U.color,z=U.intensity,W=U.distance,ee=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=B.r*z,u+=B.g*z,f+=B.b*z;else if(U.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(U.sh.coefficients[Y],z);L++}else if(U.isDirectionalLight){let Y=e.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let oe=U.shadow,X=t.get(U);X.shadowIntensity=oe.intensity,X.shadowBias=oe.bias,X.shadowNormalBias=oe.normalBias,X.shadowRadius=oe.radius,X.shadowMapSize=oe.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=ee,i.directionalShadowMatrix[p]=U.shadow.matrix,_++}i.directional[p]=Y,p++}else if(U.isSpotLight){let Y=e.get(U);Y.position.setFromMatrixPosition(U.matrixWorld),Y.color.copy(B).multiplyScalar(z),Y.distance=W,Y.coneCos=Math.cos(U.angle),Y.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Y.decay=U.decay,i.spot[v]=Y;let oe=U.shadow;if(U.map&&(i.spotLightMap[D]=U.map,D++,oe.updateMatrices(U),U.castShadow&&A++),i.spotLightMatrix[v]=oe.matrix,U.castShadow){let X=t.get(U);X.shadowIntensity=oe.intensity,X.shadowBias=oe.bias,X.shadowNormalBias=oe.normalBias,X.shadowRadius=oe.radius,X.shadowMapSize=oe.mapSize,i.spotShadow[v]=X,i.spotShadowMap[v]=ee,M++}v++}else if(U.isRectAreaLight){let Y=e.get(U);Y.color.copy(B).multiplyScalar(z),Y.halfWidth.set(U.width*.5,0,0),Y.halfHeight.set(0,U.height*.5,0),i.rectArea[x]=Y,x++}else if(U.isPointLight){let Y=e.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),Y.distance=U.distance,Y.decay=U.decay,U.castShadow){let oe=U.shadow,X=t.get(U);X.shadowIntensity=oe.intensity,X.shadowBias=oe.bias,X.shadowNormalBias=oe.normalBias,X.shadowRadius=oe.radius,X.shadowMapSize=oe.mapSize,X.shadowCameraNear=oe.camera.near,X.shadowCameraFar=oe.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=ee,i.pointShadowMatrix[g]=U.shadow.matrix,E++}i.point[g]=Y,g++}else if(U.isHemisphereLight){let Y=e.get(U);Y.skyColor.copy(U.color).multiplyScalar(z),Y.groundColor.copy(U.groundColor).multiplyScalar(z),i.hemi[m]=Y,m++}}x>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let I=i.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==x||I.hemiLength!==m||I.numDirectionalShadows!==_||I.numPointShadows!==E||I.numSpotShadows!==M||I.numSpotMaps!==D||I.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=x,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=M+D-A,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=L,I.directionalLength=p,I.pointLength=g,I.spotLength=v,I.rectAreaLength=x,I.hemiLength=m,I.numDirectionalShadows=_,I.numPointShadows=E,I.numSpotShadows=M,I.numSpotMaps=D,I.numLightProbes=L,i.version=V2++)}function l(c,h){let u=0,f=0,p=0,g=0,v=0,x=h.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){let E=c[m];if(E.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),u++}else if(E.isSpotLight){let M=i.spot[p];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),p++}else if(E.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(x),o.identity(),r.copy(E.matrixWorld),r.premultiply(x),o.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(x),f++}else if(E.isHemisphereLight){let M=i.hemi[v];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(x),v++}}}return{setup:a,setupView:l,state:i}}function z0(n){let e=new $2(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function X2(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new z0(n),e.set(s,[a])):r>=o.length?(a=new z0(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var dd=class extends fs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Oy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fd=class extends fs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},q2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y2=`uniform sampler2D shadow_pass;
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
}`;function Z2(n,e,t){let i=new Oa,s=new ne,r=new ne,o=new Ft,a=new dd({depthPacking:zy}),l=new fd,c={},h=t.maxTextureSize,u={[Ws]:Sn,[Sn]:Ws,[qt]:qt},f=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:q2,fragmentShader:Y2}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Rt;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new le(g,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Q0;let m=this.type;this.render=function(A,L,I){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||A.length===0)return;let w=n.getRenderTarget(),b=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),B=n.state;B.setBlending(ki),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let z=m!==os&&this.type===os,W=m===os&&this.type!==os;for(let ee=0,Y=A.length;ee<Y;ee++){let oe=A[ee],X=oe.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ye=X.getFrameExtents();if(s.multiply(ye),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ye.x),s.x=r.x*ye.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ye.y),s.y=r.y*ye.y,X.mapSize.y=r.y)),X.map===null||z===!0||W===!0){let Ve=this.type!==os?{minFilter:qn,magFilter:qn}:{};X.map!==null&&X.map.dispose(),X.map=new Ln(s.x,s.y,Ve),X.map.texture.name=oe.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();let Ae=X.getViewportCount();for(let Ve=0;Ve<Ae;Ve++){let ft=X.getViewport(Ve);o.set(r.x*ft.x,r.y*ft.y,r.x*ft.z,r.y*ft.w),B.viewport(o),X.updateMatrices(oe,Ve),i=X.getFrustum(),M(L,I,X.camera,oe,this.type)}X.isPointLightShadow!==!0&&this.type===os&&_(X,I),X.needsUpdate=!1}m=this.type,x.needsUpdate=!1,n.setRenderTarget(w,b,U)};function _(A,L){let I=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ln(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(L,null,I,f,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(L,null,I,p,v,null)}function E(A,L,I,w){let b=null,U=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)b=U;else if(b=I.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let B=b.uuid,z=L.uuid,W=c[B];W===void 0&&(W={},c[B]=W);let ee=W[z];ee===void 0&&(ee=b.clone(),W[z]=ee,L.addEventListener("dispose",D)),b=ee}if(b.visible=L.visible,b.wireframe=L.wireframe,w===os?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:u[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let B=n.properties.get(b);B.light=I}return b}function M(A,L,I,w,b){if(A.visible===!1)return;if(A.layers.test(L.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===os)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);let z=e.update(A),W=A.material;if(Array.isArray(W)){let ee=z.groups;for(let Y=0,oe=ee.length;Y<oe;Y++){let X=ee[Y],ye=W[X.materialIndex];if(ye&&ye.visible){let Ae=E(A,ye,w,b);A.onBeforeShadow(n,A,L,I,z,Ae,X),n.renderBufferDirect(I,null,z,Ae,A,X),A.onAfterShadow(n,A,L,I,z,Ae,X)}}}else if(W.visible){let ee=E(A,W,w,b);A.onBeforeShadow(n,A,L,I,z,ee,null),n.renderBufferDirect(I,null,z,ee,A,null),A.onAfterShadow(n,A,L,I,z,ee,null)}}let B=A.children;for(let z=0,W=B.length;z<W;z++)M(B[z],L,I,w,b)}function D(A){A.target.removeEventListener("dispose",D);for(let I in c){let w=c[I],b=A.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}var K2={[xu]:yu,[vu]:Eu,[Mu]:bu,[_o]:_u,[yu]:xu,[Eu]:vu,[bu]:Mu,[_u]:_o};function J2(n,e){function t(){let N=!1,ge=new Ft,$=null,Q=new Ft(0,0,0,0);return{setMask:function(Te){$!==Te&&!N&&(n.colorMask(Te,Te,Te,Te),$=Te)},setLocked:function(Te){N=Te},setClear:function(Te,be,at,nn,En){En===!0&&(Te*=nn,be*=nn,at*=nn),ge.set(Te,be,at,nn),Q.equals(ge)===!1&&(n.clearColor(Te,be,at,nn),Q.copy(ge))},reset:function(){N=!1,$=null,Q.set(-1,0,0,0)}}}function i(){let N=!1,ge=!1,$=null,Q=null,Te=null;return{setReversed:function(be){if(ge!==be){let at=e.get("EXT_clip_control");ge?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT);let nn=Te;Te=null,this.setClear(nn)}ge=be},getReversed:function(){return ge},setTest:function(be){be?ve(n.DEPTH_TEST):Ze(n.DEPTH_TEST)},setMask:function(be){$!==be&&!N&&(n.depthMask(be),$=be)},setFunc:function(be){if(ge&&(be=K2[be]),Q!==be){switch(be){case xu:n.depthFunc(n.NEVER);break;case yu:n.depthFunc(n.ALWAYS);break;case vu:n.depthFunc(n.LESS);break;case _o:n.depthFunc(n.LEQUAL);break;case Mu:n.depthFunc(n.EQUAL);break;case _u:n.depthFunc(n.GEQUAL);break;case Eu:n.depthFunc(n.GREATER);break;case bu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=be}},setLocked:function(be){N=be},setClear:function(be){Te!==be&&(ge&&(be=1-be),n.clearDepth(be),Te=be)},reset:function(){N=!1,$=null,Q=null,Te=null,ge=!1}}}function s(){let N=!1,ge=null,$=null,Q=null,Te=null,be=null,at=null,nn=null,En=null;return{setTest:function(Nt){N||(Nt?ve(n.STENCIL_TEST):Ze(n.STENCIL_TEST))},setMask:function(Nt){ge!==Nt&&!N&&(n.stencilMask(Nt),ge=Nt)},setFunc:function(Nt,fi,Qi){($!==Nt||Q!==fi||Te!==Qi)&&(n.stencilFunc(Nt,fi,Qi),$=Nt,Q=fi,Te=Qi)},setOp:function(Nt,fi,Qi){(be!==Nt||at!==fi||nn!==Qi)&&(n.stencilOp(Nt,fi,Qi),be=Nt,at=fi,nn=Qi)},setLocked:function(Nt){N=Nt},setClear:function(Nt){En!==Nt&&(n.clearStencil(Nt),En=Nt)},reset:function(){N=!1,ge=null,$=null,Q=null,Te=null,be=null,at=null,nn=null,En=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,p=[],g=null,v=!1,x=null,m=null,_=null,E=null,M=null,D=null,A=null,L=new me(0,0,0),I=0,w=!1,b=null,U=null,B=null,z=null,W=null,ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,oe=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=oe>=1):X.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=oe>=2);let ye=null,Ae={},Ve=n.getParameter(n.SCISSOR_BOX),ft=n.getParameter(n.VIEWPORT),Bt=new Ft().fromArray(Ve),K=new Ft().fromArray(ft);function ae(N,ge,$,Q){let Te=new Uint8Array(4),be=n.createTexture();n.bindTexture(N,be),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let at=0;at<$;at++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,Te):n.texImage2D(ge+at,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Te);return be}let Fe={};Fe[n.TEXTURE_2D]=ae(n.TEXTURE_2D,n.TEXTURE_2D,1),Fe[n.TEXTURE_CUBE_MAP]=ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Fe[n.TEXTURE_2D_ARRAY]=ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Fe[n.TEXTURE_3D]=ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ve(n.DEPTH_TEST),o.setFunc(_o),Mt(!1),_t(Vp),ve(n.CULL_FACE),F(ki);function ve(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function Ze(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function rt(N,ge){return u[N]!==ge?(n.bindFramebuffer(N,ge),u[N]=ge,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ge),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function pt(N,ge){let $=p,Q=!1;if(N){$=f.get(ge),$===void 0&&($=[],f.set(ge,$));let Te=N.textures;if($.length!==Te.length||$[0]!==n.COLOR_ATTACHMENT0){for(let be=0,at=Te.length;be<at;be++)$[be]=n.COLOR_ATTACHMENT0+be;$.length=Te.length,Q=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,Q=!0);Q&&n.drawBuffers($)}function jt(N){return g!==N?(n.useProgram(N),g=N,!0):!1}let wt={[wr]:n.FUNC_ADD,[yy]:n.FUNC_SUBTRACT,[vy]:n.FUNC_REVERSE_SUBTRACT};wt[My]=n.MIN,wt[_y]=n.MAX;let an={[Ey]:n.ZERO,[by]:n.ONE,[wy]:n.SRC_COLOR,[mu]:n.SRC_ALPHA,[Py]:n.SRC_ALPHA_SATURATE,[Ay]:n.DST_COLOR,[Ty]:n.DST_ALPHA,[Sy]:n.ONE_MINUS_SRC_COLOR,[gu]:n.ONE_MINUS_SRC_ALPHA,[Cy]:n.ONE_MINUS_DST_COLOR,[Ry]:n.ONE_MINUS_DST_ALPHA,[Iy]:n.CONSTANT_COLOR,[Ly]:n.ONE_MINUS_CONSTANT_COLOR,[Dy]:n.CONSTANT_ALPHA,[Uy]:n.ONE_MINUS_CONSTANT_ALPHA};function F(N,ge,$,Q,Te,be,at,nn,En,Nt){if(N===ki){v===!0&&(Ze(n.BLEND),v=!1);return}if(v===!1&&(ve(n.BLEND),v=!0),N!==xy){if(N!==x||Nt!==w){if((m!==wr||M!==wr)&&(n.blendEquation(n.FUNC_ADD),m=wr,M=wr),Nt)switch(N){case Hi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dt:n.blendFunc(n.ONE,n.ONE);break;case Wp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $p:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Hi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dt:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Wp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $p:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}_=null,E=null,D=null,A=null,L.set(0,0,0),I=0,x=N,w=Nt}return}Te=Te||ge,be=be||$,at=at||Q,(ge!==m||Te!==M)&&(n.blendEquationSeparate(wt[ge],wt[Te]),m=ge,M=Te),($!==_||Q!==E||be!==D||at!==A)&&(n.blendFuncSeparate(an[$],an[Q],an[be],an[at]),_=$,E=Q,D=be,A=at),(nn.equals(L)===!1||En!==I)&&(n.blendColor(nn.r,nn.g,nn.b,En),L.copy(nn),I=En),x=N,w=!1}function ei(N,ge){N.side===qt?Ze(n.CULL_FACE):ve(n.CULL_FACE);let $=N.side===Sn;ge&&($=!$),Mt($),N.blending===Hi&&N.transparent===!1?F(ki):F(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let Q=N.stencilWrite;a.setTest(Q),Q&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Wt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Ze(n.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(N){b!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),b=N)}function _t(N){N!==my?(ve(n.CULL_FACE),N!==U&&(N===Vp?n.cullFace(n.BACK):N===gy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ze(n.CULL_FACE),U=N}function Xe(N){N!==B&&(Y&&n.lineWidth(N),B=N)}function Wt(N,ge,$){N?(ve(n.POLYGON_OFFSET_FILL),(z!==ge||W!==$)&&(n.polygonOffset(ge,$),z=ge,W=$)):Ze(n.POLYGON_OFFSET_FILL)}function $e(N){N?ve(n.SCISSOR_TEST):Ze(n.SCISSOR_TEST)}function C(N){N===void 0&&(N=n.TEXTURE0+ee-1),ye!==N&&(n.activeTexture(N),ye=N)}function S(N,ge,$){$===void 0&&(ye===null?$=n.TEXTURE0+ee-1:$=ye);let Q=Ae[$];Q===void 0&&(Q={type:void 0,texture:void 0},Ae[$]=Q),(Q.type!==N||Q.texture!==ge)&&(ye!==$&&(n.activeTexture($),ye=$),n.bindTexture(N,ge||Fe[N]),Q.type=N,Q.texture=ge)}function O(){let N=Ae[ye];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Oe(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function qe(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function je(N){Bt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Bt.copy(N))}function Ie(N){K.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),K.copy(N))}function Et(N,ge){let $=c.get(ge);$===void 0&&($=new WeakMap,c.set(ge,$));let Q=$.get(N);Q===void 0&&(Q=n.getUniformBlockIndex(ge,N.name),$.set(N,Q))}function ht(N,ge){let Q=c.get(ge).get(N);l.get(ge)!==Q&&(n.uniformBlockBinding(ge,Q,N.__bindingPointIndex),l.set(ge,Q))}function Gt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ye=null,Ae={},u={},f=new WeakMap,p=[],g=null,v=!1,x=null,m=null,_=null,E=null,M=null,D=null,A=null,L=new me(0,0,0),I=0,w=!1,b=null,U=null,B=null,z=null,W=null,Bt.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ve,disable:Ze,bindFramebuffer:rt,drawBuffers:pt,useProgram:jt,setBlending:F,setMaterial:ei,setFlipSided:Mt,setCullFace:_t,setLineWidth:Xe,setPolygonOffset:Wt,setScissorTest:$e,activeTexture:C,bindTexture:S,unbindTexture:O,compressedTexImage2D:j,compressedTexImage3D:te,texImage2D:Pe,texImage3D:qe,updateUBOMapping:Et,uniformBlockBinding:ht,texStorage2D:St,texStorage3D:se,texSubImage2D:Z,texSubImage3D:Oe,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ce,scissor:je,viewport:Ie,reset:Gt}}function B0(n,e,t,i){let s=j2(i);switch(t){case rm:return n*e;case am:return n*e;case lm:return n*e*2;case Zd:return n*e/s.components*s.byteLength;case Kd:return n*e/s.components*s.byteLength;case cm:return n*e*2/s.components*s.byteLength;case Jd:return n*e*2/s.components*s.byteLength;case om:return n*e*3/s.components*s.byteLength;case vi:return n*e*4/s.components*s.byteLength;case jd:return n*e*4/s.components*s.byteLength;case jl:case Ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ec:case tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Au:case Pu:return Math.max(n,16)*Math.max(e,8)/4;case Ru:case Cu:return Math.max(n,8)*Math.max(e,8)/2;case Iu:case Lu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Du:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ku:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Hu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Fu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ou:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case zu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Bu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Gu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Vu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Wu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case $u:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Xu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case qu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case nc:case Yu:case Zu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case hm:case Ku:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ju:case ju:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function j2(n){switch(n){case ds:case nm:return{byteLength:1,components:1};case Fa:case im:case bi:return{byteLength:2,components:1};case qd:case Yd:return{byteLength:2,components:4};case Ar:case Xd:case Ni:return{byteLength:4,components:1};case sm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Q2(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return p?new OffscreenCanvas(C,S):rc("canvas")}function v(C,S,O){let j=1,te=$e(C);if((te.width>O||te.height>O)&&(j=O/Math.max(te.width,te.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Z=Math.floor(j*te.width),Oe=Math.floor(j*te.height);u===void 0&&(u=g(Z,Oe));let Me=S?g(Z,Oe):u;return Me.width=Z,Me.height=Oe,Me.getContext("2d").drawImage(C,0,0,Z,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Z+"x"+Oe+")."),Me}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),C;return C}function x(C){return C.generateMipmaps}function m(C){n.generateMipmap(C)}function _(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(C,S,O,j,te=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=S;if(S===n.RED&&(O===n.FLOAT&&(Z=n.R32F),O===n.HALF_FLOAT&&(Z=n.R16F),O===n.UNSIGNED_BYTE&&(Z=n.R8)),S===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.R8UI),O===n.UNSIGNED_SHORT&&(Z=n.R16UI),O===n.UNSIGNED_INT&&(Z=n.R32UI),O===n.BYTE&&(Z=n.R8I),O===n.SHORT&&(Z=n.R16I),O===n.INT&&(Z=n.R32I)),S===n.RG&&(O===n.FLOAT&&(Z=n.RG32F),O===n.HALF_FLOAT&&(Z=n.RG16F),O===n.UNSIGNED_BYTE&&(Z=n.RG8)),S===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RG8UI),O===n.UNSIGNED_SHORT&&(Z=n.RG16UI),O===n.UNSIGNED_INT&&(Z=n.RG32UI),O===n.BYTE&&(Z=n.RG8I),O===n.SHORT&&(Z=n.RG16I),O===n.INT&&(Z=n.RG32I)),S===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),O===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),O===n.UNSIGNED_INT&&(Z=n.RGB32UI),O===n.BYTE&&(Z=n.RGB8I),O===n.SHORT&&(Z=n.RGB16I),O===n.INT&&(Z=n.RGB32I)),S===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),O===n.UNSIGNED_INT&&(Z=n.RGBA32UI),O===n.BYTE&&(Z=n.RGBA8I),O===n.SHORT&&(Z=n.RGBA16I),O===n.INT&&(Z=n.RGBA32I)),S===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),S===n.RGBA){let Oe=te?Cc:xt.getTransfer(j);O===n.FLOAT&&(Z=n.RGBA32F),O===n.HALF_FLOAT&&(Z=n.RGBA16F),O===n.UNSIGNED_BYTE&&(Z=Oe===Dt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function M(C,S){let O;return C?S===null||S===Ar||S===wo?O=n.DEPTH24_STENCIL8:S===Ni?O=n.DEPTH32F_STENCIL8:S===Fa&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ar||S===wo?O=n.DEPTH_COMPONENT24:S===Ni?O=n.DEPTH_COMPONENT32F:S===Fa&&(O=n.DEPTH_COMPONENT16),O}function D(C,S){return x(C)===!0||C.isFramebufferTexture&&C.minFilter!==qn&&C.minFilter!==Ui?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){let S=C.target;S.removeEventListener("dispose",A),I(S),S.isVideoTexture&&h.delete(S)}function L(C){let S=C.target;S.removeEventListener("dispose",L),b(S)}function I(C){let S=i.get(C);if(S.__webglInit===void 0)return;let O=C.source,j=f.get(O);if(j){let te=j[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&w(C),Object.keys(j).length===0&&f.delete(O)}i.remove(C)}function w(C){let S=i.get(C);n.deleteTexture(S.__webglTexture);let O=C.source,j=f.get(O);delete j[S.__cacheKey],o.memory.textures--}function b(C){let S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let te=0;te<S.__webglFramebuffer[j].length;te++)n.deleteFramebuffer(S.__webglFramebuffer[j][te]);else n.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)n.deleteFramebuffer(S.__webglFramebuffer[j]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let O=C.textures;for(let j=0,te=O.length;j<te;j++){let Z=i.get(O[j]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(O[j])}i.remove(C)}let U=0;function B(){U=0}function z(){let C=U;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),U+=1,C}function W(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function ee(C,S){let O=i.get(C);if(C.isVideoTexture&&Xe(C),C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){let j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(O,C,S);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+S)}function Y(C,S){let O=i.get(C);if(C.version>0&&O.__version!==C.version){K(O,C,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+S)}function oe(C,S){let O=i.get(C);if(C.version>0&&O.__version!==C.version){K(O,C,S);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+S)}function X(C,S){let O=i.get(C);if(C.version>0&&O.__version!==C.version){ae(O,C,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+S)}let ye={[us]:n.REPEAT,[Tr]:n.CLAMP_TO_EDGE,[Tu]:n.MIRRORED_REPEAT},Ae={[qn]:n.NEAREST,[Fy]:n.NEAREST_MIPMAP_NEAREST,[bl]:n.NEAREST_MIPMAP_LINEAR,[Ui]:n.LINEAR,[Nh]:n.LINEAR_MIPMAP_NEAREST,[Rr]:n.LINEAR_MIPMAP_LINEAR},Ve={[Gy]:n.NEVER,[Yy]:n.ALWAYS,[Vy]:n.LESS,[dm]:n.LEQUAL,[Wy]:n.EQUAL,[qy]:n.GEQUAL,[$y]:n.GREATER,[Xy]:n.NOTEQUAL};function ft(C,S){if(S.type===Ni&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ui||S.magFilter===Nh||S.magFilter===bl||S.magFilter===Rr||S.minFilter===Ui||S.minFilter===Nh||S.minFilter===bl||S.minFilter===Rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,ye[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,ye[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,ye[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Ae[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Ae[S.minFilter]),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Ve[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===qn||S.minFilter!==bl&&S.minFilter!==Rr||S.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Bt(C,S){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",A));let j=S.source,te=f.get(j);te===void 0&&(te={},f.set(j,te));let Z=W(S);if(Z!==C.__cacheKey){te[Z]===void 0&&(te[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),te[Z].usedTimes++;let Oe=te[C.__cacheKey];Oe!==void 0&&(te[C.__cacheKey].usedTimes--,Oe.usedTimes===0&&w(S)),C.__cacheKey=Z,C.__webglTexture=te[Z].texture}return O}function K(C,S,O){let j=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=n.TEXTURE_3D);let te=Bt(C,S),Z=S.source;t.bindTexture(j,C.__webglTexture,n.TEXTURE0+O);let Oe=i.get(Z);if(Z.version!==Oe.__version||te===!0){t.activeTexture(n.TEXTURE0+O);let Me=xt.getPrimaries(xt.workingColorSpace),Ce=S.colorSpace===Bs?null:xt.getPrimaries(S.colorSpace),St=S.colorSpace===Bs||Me===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let se=v(S.image,!1,s.maxTextureSize);se=Wt(S,se);let Pe=r.convert(S.format,S.colorSpace),qe=r.convert(S.type),je=E(S.internalFormat,Pe,qe,S.colorSpace,S.isVideoTexture);ft(j,S);let Ie,Et=S.mipmaps,ht=S.isVideoTexture!==!0,Gt=Oe.__version===void 0||te===!0,N=Z.dataReady,ge=D(S,se);if(S.isDepthTexture)je=M(S.format===So,S.type),Gt&&(ht?t.texStorage2D(n.TEXTURE_2D,1,je,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,je,se.width,se.height,0,Pe,qe,null));else if(S.isDataTexture)if(Et.length>0){ht&&Gt&&t.texStorage2D(n.TEXTURE_2D,ge,je,Et[0].width,Et[0].height);for(let $=0,Q=Et.length;$<Q;$++)Ie=Et[$],ht?N&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,Ie.width,Ie.height,Pe,qe,Ie.data):t.texImage2D(n.TEXTURE_2D,$,je,Ie.width,Ie.height,0,Pe,qe,Ie.data);S.generateMipmaps=!1}else ht?(Gt&&t.texStorage2D(n.TEXTURE_2D,ge,je,se.width,se.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,Pe,qe,se.data)):t.texImage2D(n.TEXTURE_2D,0,je,se.width,se.height,0,Pe,qe,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ht&&Gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,je,Et[0].width,Et[0].height,se.depth);for(let $=0,Q=Et.length;$<Q;$++)if(Ie=Et[$],S.format!==vi)if(Pe!==null)if(ht){if(N)if(S.layerUpdates.size>0){let Te=B0(Ie.width,Ie.height,S.format,S.type);for(let be of S.layerUpdates){let at=Ie.data.subarray(be*Te/Ie.data.BYTES_PER_ELEMENT,(be+1)*Te/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,be,Ie.width,Ie.height,1,Pe,at)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Ie.width,Ie.height,se.depth,Pe,Ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,je,Ie.width,Ie.height,se.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Ie.width,Ie.height,se.depth,Pe,qe,Ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,je,Ie.width,Ie.height,se.depth,0,Pe,qe,Ie.data)}else{ht&&Gt&&t.texStorage2D(n.TEXTURE_2D,ge,je,Et[0].width,Et[0].height);for(let $=0,Q=Et.length;$<Q;$++)Ie=Et[$],S.format!==vi?Pe!==null?ht?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,Ie.width,Ie.height,Pe,Ie.data):t.compressedTexImage2D(n.TEXTURE_2D,$,je,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?N&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,Ie.width,Ie.height,Pe,qe,Ie.data):t.texImage2D(n.TEXTURE_2D,$,je,Ie.width,Ie.height,0,Pe,qe,Ie.data)}else if(S.isDataArrayTexture)if(ht){if(Gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,je,se.width,se.height,se.depth),N)if(S.layerUpdates.size>0){let $=B0(se.width,se.height,S.format,S.type);for(let Q of S.layerUpdates){let Te=se.data.subarray(Q*$/se.data.BYTES_PER_ELEMENT,(Q+1)*$/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,se.width,se.height,1,Pe,qe,Te)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Pe,qe,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,je,se.width,se.height,se.depth,0,Pe,qe,se.data);else if(S.isData3DTexture)ht?(Gt&&t.texStorage3D(n.TEXTURE_3D,ge,je,se.width,se.height,se.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Pe,qe,se.data)):t.texImage3D(n.TEXTURE_3D,0,je,se.width,se.height,se.depth,0,Pe,qe,se.data);else if(S.isFramebufferTexture){if(Gt)if(ht)t.texStorage2D(n.TEXTURE_2D,ge,je,se.width,se.height);else{let $=se.width,Q=se.height;for(let Te=0;Te<ge;Te++)t.texImage2D(n.TEXTURE_2D,Te,je,$,Q,0,Pe,qe,null),$>>=1,Q>>=1}}else if(Et.length>0){if(ht&&Gt){let $=$e(Et[0]);t.texStorage2D(n.TEXTURE_2D,ge,je,$.width,$.height)}for(let $=0,Q=Et.length;$<Q;$++)Ie=Et[$],ht?N&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,Pe,qe,Ie):t.texImage2D(n.TEXTURE_2D,$,je,Pe,qe,Ie);S.generateMipmaps=!1}else if(ht){if(Gt){let $=$e(se);t.texStorage2D(n.TEXTURE_2D,ge,je,$.width,$.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,qe,se)}else t.texImage2D(n.TEXTURE_2D,0,je,Pe,qe,se);x(S)&&m(j),Oe.__version=Z.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ae(C,S,O){if(S.image.length!==6)return;let j=Bt(C,S),te=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+O);let Z=i.get(te);if(te.version!==Z.__version||j===!0){t.activeTexture(n.TEXTURE0+O);let Oe=xt.getPrimaries(xt.workingColorSpace),Me=S.colorSpace===Bs?null:xt.getPrimaries(S.colorSpace),Ce=S.colorSpace===Bs||Oe===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let St=S.isCompressedTexture||S.image[0].isCompressedTexture,se=S.image[0]&&S.image[0].isDataTexture,Pe=[];for(let Q=0;Q<6;Q++)!St&&!se?Pe[Q]=v(S.image[Q],!0,s.maxCubemapSize):Pe[Q]=se?S.image[Q].image:S.image[Q],Pe[Q]=Wt(S,Pe[Q]);let qe=Pe[0],je=r.convert(S.format,S.colorSpace),Ie=r.convert(S.type),Et=E(S.internalFormat,je,Ie,S.colorSpace),ht=S.isVideoTexture!==!0,Gt=Z.__version===void 0||j===!0,N=te.dataReady,ge=D(S,qe);ft(n.TEXTURE_CUBE_MAP,S);let $;if(St){ht&&Gt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Et,qe.width,qe.height);for(let Q=0;Q<6;Q++){$=Pe[Q].mipmaps;for(let Te=0;Te<$.length;Te++){let be=$[Te];S.format!==vi?je!==null?ht?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,0,0,be.width,be.height,je,be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,Et,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ht?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,0,0,be.width,be.height,je,Ie,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,Et,be.width,be.height,0,je,Ie,be.data)}}}else{if($=S.mipmaps,ht&&Gt){$.length>0&&ge++;let Q=$e(Pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Et,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(se){ht?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Pe[Q].width,Pe[Q].height,je,Ie,Pe[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Et,Pe[Q].width,Pe[Q].height,0,je,Ie,Pe[Q].data);for(let Te=0;Te<$.length;Te++){let at=$[Te].image[Q].image;ht?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,0,0,at.width,at.height,je,Ie,at.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,Et,at.width,at.height,0,je,Ie,at.data)}}else{ht?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,je,Ie,Pe[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Et,je,Ie,Pe[Q]);for(let Te=0;Te<$.length;Te++){let be=$[Te];ht?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,0,0,je,Ie,be.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,Et,je,Ie,be.image[Q])}}}x(S)&&m(n.TEXTURE_CUBE_MAP),Z.__version=te.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Fe(C,S,O,j,te,Z){let Oe=r.convert(O.format,O.colorSpace),Me=r.convert(O.type),Ce=E(O.internalFormat,Oe,Me,O.colorSpace),St=i.get(S),se=i.get(O);if(se.__renderTarget=S,!St.__hasExternalTextures){let Pe=Math.max(1,S.width>>Z),qe=Math.max(1,S.height>>Z);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,Z,Ce,Pe,qe,S.depth,0,Oe,Me,null):t.texImage2D(te,Z,Ce,Pe,qe,0,Oe,Me,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),_t(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,te,se.__webglTexture,0,Mt(S)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,te,se.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(C,S,O){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer){let j=S.depthTexture,te=j&&j.isDepthTexture?j.type:null,Z=M(S.stencilBuffer,te),Oe=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=Mt(S);_t(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me,Z,S.width,S.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,Z,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Z,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Oe,n.RENDERBUFFER,C)}else{let j=S.textures;for(let te=0;te<j.length;te++){let Z=j[te],Oe=r.convert(Z.format,Z.colorSpace),Me=r.convert(Z.type),Ce=E(Z.internalFormat,Oe,Me,Z.colorSpace),St=Mt(S);O&&_t(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,St,Ce,S.width,S.height):_t(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St,Ce,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ze(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=i.get(S.depthTexture);j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ee(S.depthTexture,0);let te=j.__webglTexture,Z=Mt(S);if(S.depthTexture.format===yo)_t(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(S.depthTexture.format===So)_t(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function rt(C){let S=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let j=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){let te=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",te)};j.addEventListener("dispose",te),S.__depthDisposeCallback=te}S.__boundDepthTexture=j}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ze(S.__webglFramebuffer,C)}else if(O){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=n.createRenderbuffer(),ve(S.__webglDepthbuffer[j],C,!1);else{let te=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),ve(S.__webglDepthbuffer,C,!1);else{let j=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,te)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(C,S,O){let j=i.get(C);S!==void 0&&Fe(j.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&rt(C)}function jt(C){let S=C.texture,O=i.get(C),j=i.get(S);C.addEventListener("dispose",L);let te=C.textures,Z=C.isWebGLCubeRenderTarget===!0,Oe=te.length>1;if(Oe||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=S.version,o.memory.textures++),Z){O.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[Me]=[];for(let Ce=0;Ce<S.mipmaps.length;Ce++)O.__webglFramebuffer[Me][Ce]=n.createFramebuffer()}else O.__webglFramebuffer[Me]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let Me=0;Me<S.mipmaps.length;Me++)O.__webglFramebuffer[Me]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Oe)for(let Me=0,Ce=te.length;Me<Ce;Me++){let St=i.get(te[Me]);St.__webglTexture===void 0&&(St.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&_t(C)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Me=0;Me<te.length;Me++){let Ce=te[Me];O.__webglColorRenderbuffer[Me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[Me]);let St=r.convert(Ce.format,Ce.colorSpace),se=r.convert(Ce.type),Pe=E(Ce.internalFormat,St,se,Ce.colorSpace,C.isXRRenderTarget===!0),qe=Mt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,Pe,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,O.__webglColorRenderbuffer[Me])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),ft(n.TEXTURE_CUBE_MAP,S);for(let Me=0;Me<6;Me++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)Fe(O.__webglFramebuffer[Me][Ce],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ce);else Fe(O.__webglFramebuffer[Me],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);x(S)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let Me=0,Ce=te.length;Me<Ce;Me++){let St=te[Me],se=i.get(St);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),ft(n.TEXTURE_2D,St),Fe(O.__webglFramebuffer,C,St,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,0),x(St)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let Me=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Me=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Me,j.__webglTexture),ft(Me,S),S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)Fe(O.__webglFramebuffer[Ce],C,S,n.COLOR_ATTACHMENT0,Me,Ce);else Fe(O.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,Me,0);x(S)&&m(Me),t.unbindTexture()}C.depthBuffer&&rt(C)}function wt(C){let S=C.textures;for(let O=0,j=S.length;O<j;O++){let te=S[O];if(x(te)){let Z=_(C),Oe=i.get(te).__webglTexture;t.bindTexture(Z,Oe),m(Z),t.unbindTexture()}}}let an=[],F=[];function ei(C){if(C.samples>0){if(_t(C)===!1){let S=C.textures,O=C.width,j=C.height,te=n.COLOR_BUFFER_BIT,Z=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Oe=i.get(C),Me=S.length>1;if(Me)for(let Ce=0;Ce<S.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Ce=0;Ce<S.length;Ce++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),Me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ce]);let St=i.get(S[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,St,0)}n.blitFramebuffer(0,0,O,j,0,0,O,j,te,n.NEAREST),l===!0&&(an.length=0,F.length=0,an.push(n.COLOR_ATTACHMENT0+Ce),C.depthBuffer&&C.resolveDepthBuffer===!1&&(an.push(Z),F.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,F)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,an))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Me)for(let Ce=0;Ce<S.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ce]);let St=i.get(S[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,St,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let S=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Mt(C){return Math.min(s.maxSamples,C.samples)}function _t(C){let S=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Xe(C){let S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Wt(C,S){let O=C.colorSpace,j=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Uo&&O!==Bs&&(xt.getTransfer(O)===Dt?(j!==vi||te!==ds)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function $e(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=B,this.setTexture2D=ee,this.setTexture2DArray=Y,this.setTexture3D=oe,this.setTextureCube=X,this.rebindTextures=pt,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=ei,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=_t}function eE(n,e){function t(i,s=Bs){let r,o=xt.getTransfer(s);if(i===ds)return n.UNSIGNED_BYTE;if(i===qd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===sm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===nm)return n.BYTE;if(i===im)return n.SHORT;if(i===Fa)return n.UNSIGNED_SHORT;if(i===Xd)return n.INT;if(i===Ar)return n.UNSIGNED_INT;if(i===Ni)return n.FLOAT;if(i===bi)return n.HALF_FLOAT;if(i===rm)return n.ALPHA;if(i===om)return n.RGB;if(i===vi)return n.RGBA;if(i===am)return n.LUMINANCE;if(i===lm)return n.LUMINANCE_ALPHA;if(i===yo)return n.DEPTH_COMPONENT;if(i===So)return n.DEPTH_STENCIL;if(i===Zd)return n.RED;if(i===Kd)return n.RED_INTEGER;if(i===cm)return n.RG;if(i===Jd)return n.RG_INTEGER;if(i===jd)return n.RGBA_INTEGER;if(i===jl||i===Ql||i===ec||i===tc)if(o===Dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===jl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ql)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ec)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===tc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===jl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ql)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ec)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===tc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ru||i===Au||i===Cu||i===Pu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ru)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Au)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Iu||i===Lu||i===Du)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Iu||i===Lu)return o===Dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Du)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Uu||i===Nu||i===ku||i===Hu||i===Fu||i===Ou||i===zu||i===Bu||i===Gu||i===Vu||i===Wu||i===$u||i===Xu||i===qu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Uu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ku)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ou)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$u)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nc||i===Yu||i===Zu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===nc)return o===Dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hm||i===Ku||i===Ju||i===ju)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===nc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ku)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ju)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ju)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===wo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var pd=class extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},pe=class extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},tE={type:"move"},Na=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let x=t.getJointPose(v,i),m=this._getHandJoint(c,v);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tE)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new pe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},nE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iE=`
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

}`,md=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new Fn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new sn({vertexShader:nE,fragmentShader:iE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new le(new On(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gd=class extends $s{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null,v=new md,x=t.getContextAttributes(),m=null,_=null,E=[],M=[],D=new ne,A=null,L=new ln;L.viewport=new Ft;let I=new ln;I.viewport=new Ft;let w=[L,I],b=new pd,U=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ae=E[K];return ae===void 0&&(ae=new Na,E[K]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(K){let ae=E[K];return ae===void 0&&(ae=new Na,E[K]=ae),ae.getGripSpace()},this.getHand=function(K){let ae=E[K];return ae===void 0&&(ae=new Na,E[K]=ae),ae.getHandSpace()};function z(K){let ae=M.indexOf(K.inputSource);if(ae===-1)return;let Fe=E[ae];Fe!==void 0&&(Fe.update(K.inputSource,K.frame,c||o),Fe.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",ee);for(let K=0;K<E.length;K++){let ae=M[K];ae!==null&&(M[K]=null,E[K].disconnect(ae))}U=null,B=null,v.reset(),e.setRenderTarget(m),p=null,f=null,u=null,s=null,_=null,Bt.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",W),s.addEventListener("inputsourceschange",ee),x.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){let ae={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Ln(p.framebufferWidth,p.framebufferHeight,{format:vi,type:ds,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ae=null,Fe=null,ve=null;x.depth&&(ve=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=x.stencil?So:yo,Fe=x.stencil?wo:Ar);let Ze={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Ze),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Ln(f.textureWidth,f.textureHeight,{format:vi,type:ds,depthTexture:new pc(f.textureWidth,f.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Bt.setContext(s),Bt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ee(K){for(let ae=0;ae<K.removed.length;ae++){let Fe=K.removed[ae],ve=M.indexOf(Fe);ve>=0&&(M[ve]=null,E[ve].disconnect(Fe))}for(let ae=0;ae<K.added.length;ae++){let Fe=K.added[ae],ve=M.indexOf(Fe);if(ve===-1){for(let rt=0;rt<E.length;rt++)if(rt>=M.length){M.push(Fe),ve=rt;break}else if(M[rt]===null){M[rt]=Fe,ve=rt;break}if(ve===-1)break}let Ze=E[ve];Ze&&Ze.connect(Fe)}}let Y=new T,oe=new T;function X(K,ae,Fe){Y.setFromMatrixPosition(ae.matrixWorld),oe.setFromMatrixPosition(Fe.matrixWorld);let ve=Y.distanceTo(oe),Ze=ae.projectionMatrix.elements,rt=Fe.projectionMatrix.elements,pt=Ze[14]/(Ze[10]-1),jt=Ze[14]/(Ze[10]+1),wt=(Ze[9]+1)/Ze[5],an=(Ze[9]-1)/Ze[5],F=(Ze[8]-1)/Ze[0],ei=(rt[8]+1)/rt[0],Mt=pt*F,_t=pt*ei,Xe=ve/(-F+ei),Wt=Xe*-F;if(ae.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Wt),K.translateZ(Xe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ze[10]===-1)K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let $e=pt+Xe,C=jt+Xe,S=Mt-Wt,O=_t+(ve-Wt),j=wt*jt/C*$e,te=an*jt/C*$e;K.projectionMatrix.makePerspective(S,O,j,te,$e,C),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ye(K,ae){ae===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ae.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ae=K.near,Fe=K.far;v.texture!==null&&(v.depthNear>0&&(ae=v.depthNear),v.depthFar>0&&(Fe=v.depthFar)),b.near=I.near=L.near=ae,b.far=I.far=L.far=Fe,(U!==b.near||B!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),U=b.near,B=b.far),L.layers.mask=K.layers.mask|2,I.layers.mask=K.layers.mask|4,b.layers.mask=L.layers.mask|I.layers.mask;let ve=K.parent,Ze=b.cameras;ye(b,ve);for(let rt=0;rt<Ze.length;rt++)ye(Ze[rt],ve);Ze.length===2?X(b,L,I):b.projectionMatrix.copy(L.projectionMatrix),Ae(K,b,ve)};function Ae(K,ae,Fe){Fe===null?K.matrix.copy(ae.matrixWorld):(K.matrix.copy(Fe.matrixWorld),K.matrix.invert(),K.matrix.multiply(ae.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=To*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let Ve=null;function ft(K,ae){if(h=ae.getViewerPose(c||o),g=ae,h!==null){let Fe=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ve=!1;Fe.length!==b.cameras.length&&(b.cameras.length=0,ve=!0);for(let rt=0;rt<Fe.length;rt++){let pt=Fe[rt],jt=null;if(p!==null)jt=p.getViewport(pt);else{let an=u.getViewSubImage(f,pt);jt=an.viewport,rt===0&&(e.setRenderTargetTextures(_,an.colorTexture,f.ignoreDepthValues?void 0:an.depthStencilTexture),e.setRenderTarget(_))}let wt=w[rt];wt===void 0&&(wt=new ln,wt.layers.enable(rt),wt.viewport=new Ft,w[rt]=wt),wt.matrix.fromArray(pt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(pt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(jt.x,jt.y,jt.width,jt.height),rt===0&&(b.matrix.copy(wt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ve===!0&&b.cameras.push(wt)}let Ze=s.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")){let rt=u.getDepthInformation(Fe[0]);rt&&rt.isValid&&rt.texture&&v.init(e,rt,s.renderState)}}for(let Fe=0;Fe<E.length;Fe++){let ve=M[Fe],Ze=E[Fe];ve!==null&&Ze!==void 0&&Ze.update(ve,ae,c||o)}Ve&&Ve(K,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}let Bt=new gm;Bt.setAnimationLoop(ft),this.setAnimationLoop=function(K){Ve=K},this.dispose=function(){}}},Er=new Mn,sE=new vt;function rE(n,e){function t(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function i(x,m){m.color.getRGB(x.fogColor.value,mm(n)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function s(x,m,_,E,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(x,m):m.isMeshToonMaterial?(r(x,m),u(x,m)):m.isMeshPhongMaterial?(r(x,m),h(x,m)):m.isMeshStandardMaterial?(r(x,m),f(x,m),m.isMeshPhysicalMaterial&&p(x,m,M)):m.isMeshMatcapMaterial?(r(x,m),g(x,m)):m.isMeshDepthMaterial?r(x,m):m.isMeshDistanceMaterial?(r(x,m),v(x,m)):m.isMeshNormalMaterial?r(x,m):m.isLineBasicMaterial?(o(x,m),m.isLineDashedMaterial&&a(x,m)):m.isPointsMaterial?l(x,m,_,E):m.isSpriteMaterial?c(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,t(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===Sn&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,t(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===Sn&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,t(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,t(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);let _=e.get(m),E=_.envMap,M=_.envMapRotation;E&&(x.envMap.value=E,Er.copy(M),Er.x*=-1,Er.y*=-1,Er.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),x.envMapRotation.value.setFromMatrix4(sE.makeRotationFromEuler(Er)),x.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,x.aoMapTransform))}function o(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform))}function a(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function l(x,m,_,E){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*_,x.scale.value=E*.5,m.map&&(x.map.value=m.map,t(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function c(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function h(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function u(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function f(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function p(x,m,_){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Sn&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=_.texture,x.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,m){m.matcap&&(x.matcap.value=m.matcap)}function v(x,m){let _=e.get(m).light;x.referencePosition.value.setFromMatrixPosition(_.matrixWorld),x.nearDistance.value=_.shadow.camera.near,x.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function oE(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,E){let M=E.program;i.uniformBlockBinding(_,M)}function c(_,E){let M=s[_.id];M===void 0&&(g(_),M=h(_),s[_.id]=M,_.addEventListener("dispose",x));let D=E.program;i.updateUBOMapping(_,D);let A=e.render.frame;r[_.id]!==A&&(f(_),r[_.id]=A)}function h(_){let E=u();_.__bindingPointIndex=E;let M=n.createBuffer(),D=_.__size,A=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,D,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,M),M}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let E=s[_.id],M=_.uniforms,D=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let A=0,L=M.length;A<L;A++){let I=Array.isArray(M[A])?M[A]:[M[A]];for(let w=0,b=I.length;w<b;w++){let U=I[w];if(p(U,A,w,D)===!0){let B=U.__offset,z=Array.isArray(U.value)?U.value:[U.value],W=0;for(let ee=0;ee<z.length;ee++){let Y=z[ee],oe=v(Y);typeof Y=="number"||typeof Y=="boolean"?(U.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,B+W,U.__data)):Y.isMatrix3?(U.__data[0]=Y.elements[0],U.__data[1]=Y.elements[1],U.__data[2]=Y.elements[2],U.__data[3]=0,U.__data[4]=Y.elements[3],U.__data[5]=Y.elements[4],U.__data[6]=Y.elements[5],U.__data[7]=0,U.__data[8]=Y.elements[6],U.__data[9]=Y.elements[7],U.__data[10]=Y.elements[8],U.__data[11]=0):(Y.toArray(U.__data,W),W+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,E,M,D){let A=_.value,L=E+"_"+M;if(D[L]===void 0)return typeof A=="number"||typeof A=="boolean"?D[L]=A:D[L]=A.clone(),!0;{let I=D[L];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return D[L]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(_){let E=_.uniforms,M=0,D=16;for(let L=0,I=E.length;L<I;L++){let w=Array.isArray(E[L])?E[L]:[E[L]];for(let b=0,U=w.length;b<U;b++){let B=w[b],z=Array.isArray(B.value)?B.value:[B.value];for(let W=0,ee=z.length;W<ee;W++){let Y=z[W],oe=v(Y),X=M%D,ye=X%oe.boundary,Ae=X+ye;M+=ye,Ae!==0&&D-Ae<oe.storage&&(M+=D-Ae),B.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=oe.storage}}}let A=M%D;return A>0&&(M+=D-A),_.__size=M,_.__cache={},this}function v(_){let E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),E}function x(_){let E=_.target;E.removeEventListener("dispose",x);let M=o.indexOf(E.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Po=class{constructor(e={}){let{canvas:t=u1(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),v=new Int32Array(4),x=null,m=null,_=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this.toneMapping=Vs,this.toneMappingExposure=1;let M=this,D=!1,A=0,L=0,I=null,w=-1,b=null,U=new Ft,B=new Ft,z=null,W=new me(0),ee=0,Y=t.width,oe=t.height,X=1,ye=null,Ae=null,Ve=new Ft(0,0,Y,oe),ft=new Ft(0,0,Y,oe),Bt=!1,K=new Oa,ae=!1,Fe=!1,ve=new vt,Ze=new vt,rt=new T,pt=new Ft,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},wt=!1;function an(){return I===null?X:1}let F=i;function ei(R,k){return t.getContext(R,k)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Od}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",be,!1),F===null){let k="webgl2";if(F=ei(k,R),F===null)throw ei(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Mt,_t,Xe,Wt,$e,C,S,O,j,te,Z,Oe,Me,Ce,St,se,Pe,qe,je,Ie,Et,ht,Gt,N;function ge(){Mt=new E_(F),Mt.init(),ht=new eE(F,Mt),_t=new g_(F,Mt,e,ht),Xe=new J2(F,Mt),_t.reverseDepthBuffer&&f&&Xe.buffers.depth.setReversed(!0),Wt=new S_(F),$e=new F2,C=new Q2(F,Mt,Xe,$e,_t,ht,Wt),S=new y_(M),O=new __(M),j=new L1(F),Gt=new p_(F,j),te=new b_(F,j,Wt,Gt),Z=new R_(F,te,j,Wt),je=new T_(F,_t,C),se=new x_($e),Oe=new H2(M,S,O,Mt,_t,Gt,se),Me=new rE(M,$e),Ce=new z2,St=new X2(Mt),qe=new f_(M,S,O,Xe,Z,p,l),Pe=new Z2(M,Z,_t),N=new oE(F,Wt,_t,Xe),Ie=new m_(F,Mt,Wt),Et=new w_(F,Mt,Wt),Wt.programs=Oe.programs,M.capabilities=_t,M.extensions=Mt,M.properties=$e,M.renderLists=Ce,M.shadowMap=Pe,M.state=Xe,M.info=Wt}ge();let $=new gd(M,F);this.xr=$,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let R=Mt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Mt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(R){R!==void 0&&(X=R,this.setSize(Y,oe,!1))},this.getSize=function(R){return R.set(Y,oe)},this.setSize=function(R,k,G=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=R,oe=k,t.width=Math.floor(R*X),t.height=Math.floor(k*X),G===!0&&(t.style.width=R+"px",t.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(Y*X,oe*X).floor()},this.setDrawingBufferSize=function(R,k,G){Y=R,oe=k,X=G,t.width=Math.floor(R*G),t.height=Math.floor(k*G),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(U)},this.getViewport=function(R){return R.copy(Ve)},this.setViewport=function(R,k,G,V){R.isVector4?Ve.set(R.x,R.y,R.z,R.w):Ve.set(R,k,G,V),Xe.viewport(U.copy(Ve).multiplyScalar(X).round())},this.getScissor=function(R){return R.copy(ft)},this.setScissor=function(R,k,G,V){R.isVector4?ft.set(R.x,R.y,R.z,R.w):ft.set(R,k,G,V),Xe.scissor(B.copy(ft).multiplyScalar(X).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(R){Xe.setScissorTest(Bt=R)},this.setOpaqueSort=function(R){ye=R},this.setTransparentSort=function(R){Ae=R},this.getClearColor=function(R){return R.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(R=!0,k=!0,G=!0){let V=0;if(R){let H=!1;if(I!==null){let re=I.texture.format;H=re===jd||re===Jd||re===Kd}if(H){let re=I.texture.type,we=re===ds||re===Ar||re===Fa||re===wo||re===qd||re===Yd,Ue=qe.getClearColor(),Ne=qe.getClearAlpha(),nt=Ue.r,lt=Ue.g,ke=Ue.b;we?(g[0]=nt,g[1]=lt,g[2]=ke,g[3]=Ne,F.clearBufferuiv(F.COLOR,0,g)):(v[0]=nt,v[1]=lt,v[2]=ke,v[3]=Ne,F.clearBufferiv(F.COLOR,0,v))}else V|=F.COLOR_BUFFER_BIT}k&&(V|=F.DEPTH_BUFFER_BIT),G&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Ce.dispose(),St.dispose(),$e.dispose(),S.dispose(),O.dispose(),Z.dispose(),Gt.dispose(),N.dispose(),Oe.dispose(),$.dispose(),$.removeEventListener("sessionstart",Np),$.removeEventListener("sessionend",kp),gr.stop()};function Q(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let R=Wt.autoReset,k=Pe.enabled,G=Pe.autoUpdate,V=Pe.needsUpdate,H=Pe.type;ge(),Wt.autoReset=R,Pe.enabled=k,Pe.autoUpdate=G,Pe.needsUpdate=V,Pe.type=H}function be(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function at(R){let k=R.target;k.removeEventListener("dispose",at),nn(k)}function nn(R){En(R),$e.remove(R)}function En(R){let k=$e.get(R).programs;k!==void 0&&(k.forEach(function(G){Oe.releaseProgram(G)}),R.isShaderMaterial&&Oe.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,G,V,H,re){k===null&&(k=jt);let we=H.isMesh&&H.matrixWorld.determinant()<0,Ue=dy(R,k,G,V,H);Xe.setMaterial(V,we);let Ne=G.index,nt=1;if(V.wireframe===!0){if(Ne=te.getWireframeAttribute(G),Ne===void 0)return;nt=2}let lt=G.drawRange,ke=G.attributes.position,Tt=lt.start*nt,Vt=(lt.start+lt.count)*nt;re!==null&&(Tt=Math.max(Tt,re.start*nt),Vt=Math.min(Vt,(re.start+re.count)*nt)),Ne!==null?(Tt=Math.max(Tt,0),Vt=Math.min(Vt,Ne.count)):ke!=null&&(Tt=Math.max(Tt,0),Vt=Math.min(Vt,ke.count));let $t=Vt-Tt;if($t<0||$t===1/0)return;Gt.setup(H,V,Ue,G,Ne);let Hn,It=Ie;if(Ne!==null&&(Hn=j.get(Ne),It=Et,It.setIndex(Hn)),H.isMesh)V.wireframe===!0?(Xe.setLineWidth(V.wireframeLinewidth*an()),It.setMode(F.LINES)):It.setMode(F.TRIANGLES);else if(H.isLine){let ze=V.linewidth;ze===void 0&&(ze=1),Xe.setLineWidth(ze*an()),H.isLineSegments?It.setMode(F.LINES):H.isLineLoop?It.setMode(F.LINE_LOOP):It.setMode(F.LINE_STRIP)}else H.isPoints?It.setMode(F.POINTS):H.isSprite&&It.setMode(F.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)It.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))It.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let ze=H._multiDrawStarts,es=H._multiDrawCounts,Lt=H._multiDrawCount,pi=Ne?j.get(Ne).bytesPerElement:1,Kr=$e.get(V).currentProgram.getUniforms();for(let Wn=0;Wn<Lt;Wn++)Kr.setValue(F,"_gl_DrawID",Wn),It.render(ze[Wn]/pi,es[Wn])}else if(H.isInstancedMesh)It.renderInstances(Tt,$t,H.count);else if(G.isInstancedBufferGeometry){let ze=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,es=Math.min(G.instanceCount,ze);It.renderInstances(Tt,$t,es)}else It.render(Tt,$t)};function Nt(R,k,G){R.transparent===!0&&R.side===qt&&R.forceSinglePass===!1?(R.side=Sn,R.needsUpdate=!0,El(R,k,G),R.side=Ws,R.needsUpdate=!0,El(R,k,G),R.side=qt):El(R,k,G)}this.compile=function(R,k,G=null){G===null&&(G=R),m=St.get(G),m.init(k),E.push(m),G.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),R!==G&&R.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();let V=new Set;return R.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let re=H.material;if(re)if(Array.isArray(re))for(let we=0;we<re.length;we++){let Ue=re[we];Nt(Ue,G,H),V.add(Ue)}else Nt(re,G,H),V.add(re)}),E.pop(),m=null,V},this.compileAsync=function(R,k,G=null){let V=this.compile(R,k,G);return new Promise(H=>{function re(){if(V.forEach(function(we){$e.get(we).currentProgram.isReady()&&V.delete(we)}),V.size===0){H(R);return}setTimeout(re,10)}Mt.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let fi=null;function Qi(R){fi&&fi(R)}function Np(){gr.stop()}function kp(){gr.start()}let gr=new gm;gr.setAnimationLoop(Qi),typeof self<"u"&&gr.setContext(self),this.setAnimationLoop=function(R){fi=R,$.setAnimationLoop(R),R===null?gr.stop():gr.start()},$.addEventListener("sessionstart",Np),$.addEventListener("sessionend",kp),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(k),k=$.getCamera()),R.isScene===!0&&R.onBeforeRender(M,R,k,I),m=St.get(R,E.length),m.init(k),E.push(m),Ze.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),K.setFromProjectionMatrix(Ze),Fe=this.localClippingEnabled,ae=se.init(this.clippingPlanes,Fe),x=Ce.get(R,_.length),x.init(),_.push(x),$.enabled===!0&&$.isPresenting===!0){let re=M.xr.getDepthSensingMesh();re!==null&&Uh(re,k,-1/0,M.sortObjects)}Uh(R,k,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(ye,Ae),wt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,wt&&qe.addToRenderList(x,R),this.info.render.frame++,ae===!0&&se.beginShadows();let G=m.state.shadowsArray;Pe.render(G,R,k),ae===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=x.opaque,H=x.transmissive;if(m.setupLights(),k.isArrayCamera){let re=k.cameras;if(H.length>0)for(let we=0,Ue=re.length;we<Ue;we++){let Ne=re[we];Fp(V,H,R,Ne)}wt&&qe.render(R);for(let we=0,Ue=re.length;we<Ue;we++){let Ne=re[we];Hp(x,R,Ne,Ne.viewport)}}else H.length>0&&Fp(V,H,R,k),wt&&qe.render(R),Hp(x,R,k);I!==null&&(C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I)),R.isScene===!0&&R.onAfterRender(M,R,k),Gt.resetDefaultState(),w=-1,b=null,E.pop(),E.length>0?(m=E[E.length-1],ae===!0&&se.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?x=_[_.length-1]:x=null};function Uh(R,k,G,V){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)G=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||K.intersectsSprite(R)){V&&pt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ze);let we=Z.update(R),Ue=R.material;Ue.visible&&x.push(R,we,Ue,G,pt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||K.intersectsObject(R))){let we=Z.update(R),Ue=R.material;if(V&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),pt.copy(R.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),pt.copy(we.boundingSphere.center)),pt.applyMatrix4(R.matrixWorld).applyMatrix4(Ze)),Array.isArray(Ue)){let Ne=we.groups;for(let nt=0,lt=Ne.length;nt<lt;nt++){let ke=Ne[nt],Tt=Ue[ke.materialIndex];Tt&&Tt.visible&&x.push(R,we,Tt,G,pt.z,ke)}}else Ue.visible&&x.push(R,we,Ue,G,pt.z,null)}}let re=R.children;for(let we=0,Ue=re.length;we<Ue;we++)Uh(re[we],k,G,V)}function Hp(R,k,G,V){let H=R.opaque,re=R.transmissive,we=R.transparent;m.setupLightsView(G),ae===!0&&se.setGlobalState(M.clippingPlanes,G),V&&Xe.viewport(U.copy(V)),H.length>0&&_l(H,k,G),re.length>0&&_l(re,k,G),we.length>0&&_l(we,k,G),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Fp(R,k,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new Ln(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float")?bi:ds,minFilter:Rr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));let re=m.state.transmissionRenderTarget[V.id],we=V.viewport||U;re.setSize(we.z,we.w);let Ue=M.getRenderTarget();M.setRenderTarget(re),M.getClearColor(W),ee=M.getClearAlpha(),ee<1&&M.setClearColor(16777215,.5),M.clear(),wt&&qe.render(G);let Ne=M.toneMapping;M.toneMapping=Vs;let nt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),ae===!0&&se.setGlobalState(M.clippingPlanes,V),_l(R,G,V),C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let ke=0,Tt=k.length;ke<Tt;ke++){let Vt=k[ke],$t=Vt.object,Hn=Vt.geometry,It=Vt.material,ze=Vt.group;if(It.side===qt&&$t.layers.test(V.layers)){let es=It.side;It.side=Sn,It.needsUpdate=!0,Op($t,G,V,Hn,It,ze),It.side=es,It.needsUpdate=!0,lt=!0}}lt===!0&&(C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re))}M.setRenderTarget(Ue),M.setClearColor(W,ee),nt!==void 0&&(V.viewport=nt),M.toneMapping=Ne}function _l(R,k,G){let V=k.isScene===!0?k.overrideMaterial:null;for(let H=0,re=R.length;H<re;H++){let we=R[H],Ue=we.object,Ne=we.geometry,nt=V===null?we.material:V,lt=we.group;Ue.layers.test(G.layers)&&Op(Ue,k,G,Ne,nt,lt)}}function Op(R,k,G,V,H,re){R.onBeforeRender(M,k,G,V,H,re),R.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),H.onBeforeRender(M,k,G,V,R,re),H.transparent===!0&&H.side===qt&&H.forceSinglePass===!1?(H.side=Sn,H.needsUpdate=!0,M.renderBufferDirect(G,k,V,H,R,re),H.side=Ws,H.needsUpdate=!0,M.renderBufferDirect(G,k,V,H,R,re),H.side=qt):M.renderBufferDirect(G,k,V,H,R,re),R.onAfterRender(M,k,G,V,H,re)}function El(R,k,G){k.isScene!==!0&&(k=jt);let V=$e.get(R),H=m.state.lights,re=m.state.shadowsArray,we=H.state.version,Ue=Oe.getParameters(R,H.state,re,k,G),Ne=Oe.getProgramCacheKey(Ue),nt=V.programs;V.environment=R.isMeshStandardMaterial?k.environment:null,V.fog=k.fog,V.envMap=(R.isMeshStandardMaterial?O:S).get(R.envMap||V.environment),V.envMapRotation=V.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,nt===void 0&&(R.addEventListener("dispose",at),nt=new Map,V.programs=nt);let lt=nt.get(Ne);if(lt!==void 0){if(V.currentProgram===lt&&V.lightsStateVersion===we)return Bp(R,Ue),lt}else Ue.uniforms=Oe.getUniforms(R),R.onBeforeCompile(Ue,M),lt=Oe.acquireProgram(Ue,Ne),nt.set(Ne,lt),V.uniforms=Ue.uniforms;let ke=V.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ke.clippingPlanes=se.uniform),Bp(R,Ue),V.needsLights=py(R),V.lightsStateVersion=we,V.needsLights&&(ke.ambientLightColor.value=H.state.ambient,ke.lightProbe.value=H.state.probe,ke.directionalLights.value=H.state.directional,ke.directionalLightShadows.value=H.state.directionalShadow,ke.spotLights.value=H.state.spot,ke.spotLightShadows.value=H.state.spotShadow,ke.rectAreaLights.value=H.state.rectArea,ke.ltc_1.value=H.state.rectAreaLTC1,ke.ltc_2.value=H.state.rectAreaLTC2,ke.pointLights.value=H.state.point,ke.pointLightShadows.value=H.state.pointShadow,ke.hemisphereLights.value=H.state.hemi,ke.directionalShadowMap.value=H.state.directionalShadowMap,ke.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ke.spotShadowMap.value=H.state.spotShadowMap,ke.spotLightMatrix.value=H.state.spotLightMatrix,ke.spotLightMap.value=H.state.spotLightMap,ke.pointShadowMap.value=H.state.pointShadowMap,ke.pointShadowMatrix.value=H.state.pointShadowMatrix),V.currentProgram=lt,V.uniformsList=null,lt}function zp(R){if(R.uniformsList===null){let k=R.currentProgram.getUniforms();R.uniformsList=Mo.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function Bp(R,k){let G=$e.get(R);G.outputColorSpace=k.outputColorSpace,G.batching=k.batching,G.batchingColor=k.batchingColor,G.instancing=k.instancing,G.instancingColor=k.instancingColor,G.instancingMorph=k.instancingMorph,G.skinning=k.skinning,G.morphTargets=k.morphTargets,G.morphNormals=k.morphNormals,G.morphColors=k.morphColors,G.morphTargetsCount=k.morphTargetsCount,G.numClippingPlanes=k.numClippingPlanes,G.numIntersection=k.numClipIntersection,G.vertexAlphas=k.vertexAlphas,G.vertexTangents=k.vertexTangents,G.toneMapping=k.toneMapping}function dy(R,k,G,V,H){k.isScene!==!0&&(k=jt),C.resetTextureUnits();let re=k.fog,we=V.isMeshStandardMaterial?k.environment:null,Ue=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Uo,Ne=(V.isMeshStandardMaterial?O:S).get(V.envMap||we),nt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,lt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),ke=!!G.morphAttributes.position,Tt=!!G.morphAttributes.normal,Vt=!!G.morphAttributes.color,$t=Vs;V.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&($t=M.toneMapping);let Hn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,It=Hn!==void 0?Hn.length:0,ze=$e.get(V),es=m.state.lights;if(ae===!0&&(Fe===!0||R!==b)){let ti=R===b&&V.id===w;se.setState(V,R,ti)}let Lt=!1;V.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==es.state.version||ze.outputColorSpace!==Ue||H.isBatchedMesh&&ze.batching===!1||!H.isBatchedMesh&&ze.batching===!0||H.isBatchedMesh&&ze.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&ze.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&ze.instancing===!1||!H.isInstancedMesh&&ze.instancing===!0||H.isSkinnedMesh&&ze.skinning===!1||!H.isSkinnedMesh&&ze.skinning===!0||H.isInstancedMesh&&ze.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ze.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ze.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ze.instancingMorph===!1&&H.morphTexture!==null||ze.envMap!==Ne||V.fog===!0&&ze.fog!==re||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==se.numPlanes||ze.numIntersection!==se.numIntersection)||ze.vertexAlphas!==nt||ze.vertexTangents!==lt||ze.morphTargets!==ke||ze.morphNormals!==Tt||ze.morphColors!==Vt||ze.toneMapping!==$t||ze.morphTargetsCount!==It)&&(Lt=!0):(Lt=!0,ze.__version=V.version);let pi=ze.currentProgram;Lt===!0&&(pi=El(V,k,H));let Kr=!1,Wn=!1,va=!1,Xt=pi.getUniforms(),Li=ze.uniforms;if(Xe.useProgram(pi.program)&&(Kr=!0,Wn=!0,va=!0),V.id!==w&&(w=V.id,Wn=!0),Kr||b!==R){Xe.buffers.depth.getReversed()?(ve.copy(R.projectionMatrix),f1(ve),p1(ve),Xt.setValue(F,"projectionMatrix",ve)):Xt.setValue(F,"projectionMatrix",R.projectionMatrix),Xt.setValue(F,"viewMatrix",R.matrixWorldInverse);let Ds=Xt.map.cameraPosition;Ds!==void 0&&Ds.setValue(F,rt.setFromMatrixPosition(R.matrixWorld)),_t.logarithmicDepthBuffer&&Xt.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Xt.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,Wn=!0,va=!0)}if(H.isSkinnedMesh){Xt.setOptional(F,H,"bindMatrix"),Xt.setOptional(F,H,"bindMatrixInverse");let ti=H.skeleton;ti&&(ti.boneTexture===null&&ti.computeBoneTexture(),Xt.setValue(F,"boneTexture",ti.boneTexture,C))}H.isBatchedMesh&&(Xt.setOptional(F,H,"batchingTexture"),Xt.setValue(F,"batchingTexture",H._matricesTexture,C),Xt.setOptional(F,H,"batchingIdTexture"),Xt.setValue(F,"batchingIdTexture",H._indirectTexture,C),Xt.setOptional(F,H,"batchingColorTexture"),H._colorsTexture!==null&&Xt.setValue(F,"batchingColorTexture",H._colorsTexture,C));let Ma=G.morphAttributes;if((Ma.position!==void 0||Ma.normal!==void 0||Ma.color!==void 0)&&je.update(H,G,pi),(Wn||ze.receiveShadow!==H.receiveShadow)&&(ze.receiveShadow=H.receiveShadow,Xt.setValue(F,"receiveShadow",H.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Li.envMap.value=Ne,Li.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&k.environment!==null&&(Li.envMapIntensity.value=k.environmentIntensity),Wn&&(Xt.setValue(F,"toneMappingExposure",M.toneMappingExposure),ze.needsLights&&fy(Li,va),re&&V.fog===!0&&Me.refreshFogUniforms(Li,re),Me.refreshMaterialUniforms(Li,V,X,oe,m.state.transmissionRenderTarget[R.id]),Mo.upload(F,zp(ze),Li,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Mo.upload(F,zp(ze),Li,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Xt.setValue(F,"center",H.center),Xt.setValue(F,"modelViewMatrix",H.modelViewMatrix),Xt.setValue(F,"normalMatrix",H.normalMatrix),Xt.setValue(F,"modelMatrix",H.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let ti=V.uniformsGroups;for(let Ds=0,Us=ti.length;Ds<Us;Ds++){let Gp=ti[Ds];N.update(Gp,pi),N.bind(Gp,pi)}}return pi}function fy(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function py(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,k,G){$e.get(R.texture).__webglTexture=k,$e.get(R.depthTexture).__webglTexture=G;let V=$e.get(R);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,k){let G=$e.get(R);G.__webglFramebuffer=k,G.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,G=0){I=R,A=k,L=G;let V=!0,H=null,re=!1,we=!1;if(R){let Ne=$e.get(R);if(Ne.__useDefaultFramebuffer!==void 0)Xe.bindFramebuffer(F.FRAMEBUFFER,null),V=!1;else if(Ne.__webglFramebuffer===void 0)C.setupRenderTarget(R);else if(Ne.__hasExternalTextures)C.rebindTextures(R,$e.get(R.texture).__webglTexture,$e.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ke=R.depthTexture;if(Ne.__boundDepthTexture!==ke){if(ke!==null&&$e.has(ke)&&(R.width!==ke.image.width||R.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(R)}}let nt=R.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(we=!0);let lt=$e.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(lt[k])?H=lt[k][G]:H=lt[k],re=!0):R.samples>0&&C.useMultisampledRTT(R)===!1?H=$e.get(R).__webglMultisampledFramebuffer:Array.isArray(lt)?H=lt[G]:H=lt,U.copy(R.viewport),B.copy(R.scissor),z=R.scissorTest}else U.copy(Ve).multiplyScalar(X).floor(),B.copy(ft).multiplyScalar(X).floor(),z=Bt;if(Xe.bindFramebuffer(F.FRAMEBUFFER,H)&&V&&Xe.drawBuffers(R,H),Xe.viewport(U),Xe.scissor(B),Xe.setScissorTest(z),re){let Ne=$e.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ne.__webglTexture,G)}else if(we){let Ne=$e.get(R.texture),nt=k||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ne.__webglTexture,G||0,nt)}w=-1},this.readRenderTargetPixels=function(R,k,G,V,H,re,we){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=$e.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(Ue=Ue[we]),Ue){Xe.bindFramebuffer(F.FRAMEBUFFER,Ue);try{let Ne=R.texture,nt=Ne.format,lt=Ne.type;if(!_t.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-V&&G>=0&&G<=R.height-H&&F.readPixels(k,G,V,H,ht.convert(nt),ht.convert(lt),re)}finally{let Ne=I!==null?$e.get(I).__webglFramebuffer:null;Xe.bindFramebuffer(F.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(R,k,G,V,H,re,we){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=$e.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(Ue=Ue[we]),Ue){let Ne=R.texture,nt=Ne.format,lt=Ne.type;if(!_t.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=R.width-V&&G>=0&&G<=R.height-H){Xe.bindFramebuffer(F.FRAMEBUFFER,Ue);let ke=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ke),F.bufferData(F.PIXEL_PACK_BUFFER,re.byteLength,F.STREAM_READ),F.readPixels(k,G,V,H,ht.convert(nt),ht.convert(lt),0);let Tt=I!==null?$e.get(I).__webglFramebuffer:null;Xe.bindFramebuffer(F.FRAMEBUFFER,Tt);let Vt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await d1(F,Vt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ke),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,re),F.deleteBuffer(ke),F.deleteSync(Vt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,k=null,G=0){R.isTexture!==!0&&(Ia("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,R=arguments[1]);let V=Math.pow(2,-G),H=Math.floor(R.image.width*V),re=Math.floor(R.image.height*V),we=k!==null?k.x:0,Ue=k!==null?k.y:0;C.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,G,0,0,we,Ue,H,re),Xe.unbindTexture()},this.copyTextureToTexture=function(R,k,G=null,V=null,H=0){R.isTexture!==!0&&(Ia("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,R=arguments[1],k=arguments[2],H=arguments[3]||0,G=null);let re,we,Ue,Ne,nt,lt,ke,Tt,Vt,$t=R.isCompressedTexture?R.mipmaps[H]:R.image;G!==null?(re=G.max.x-G.min.x,we=G.max.y-G.min.y,Ue=G.isBox3?G.max.z-G.min.z:1,Ne=G.min.x,nt=G.min.y,lt=G.isBox3?G.min.z:0):(re=$t.width,we=$t.height,Ue=$t.depth||1,Ne=0,nt=0,lt=0),V!==null?(ke=V.x,Tt=V.y,Vt=V.z):(ke=0,Tt=0,Vt=0);let Hn=ht.convert(k.format),It=ht.convert(k.type),ze;k.isData3DTexture?(C.setTexture3D(k,0),ze=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(C.setTexture2DArray(k,0),ze=F.TEXTURE_2D_ARRAY):(C.setTexture2D(k,0),ze=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);let es=F.getParameter(F.UNPACK_ROW_LENGTH),Lt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),pi=F.getParameter(F.UNPACK_SKIP_PIXELS),Kr=F.getParameter(F.UNPACK_SKIP_ROWS),Wn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,$t.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,$t.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ne),F.pixelStorei(F.UNPACK_SKIP_ROWS,nt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,lt);let va=R.isDataArrayTexture||R.isData3DTexture,Xt=k.isDataArrayTexture||k.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let Li=$e.get(R),Ma=$e.get(k),ti=$e.get(Li.__renderTarget),Ds=$e.get(Ma.__renderTarget);Xe.bindFramebuffer(F.READ_FRAMEBUFFER,ti.__webglFramebuffer),Xe.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ds.__webglFramebuffer);for(let Us=0;Us<Ue;Us++)va&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$e.get(R).__webglTexture,H,lt+Us),R.isDepthTexture?(Xt&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$e.get(k).__webglTexture,H,Vt+Us),F.blitFramebuffer(Ne,nt,re,we,ke,Tt,re,we,F.DEPTH_BUFFER_BIT,F.NEAREST)):Xt?F.copyTexSubImage3D(ze,H,ke,Tt,Vt+Us,Ne,nt,re,we):F.copyTexSubImage2D(ze,H,ke,Tt,Vt+Us,Ne,nt,re,we);Xe.bindFramebuffer(F.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Xt?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(ze,H,ke,Tt,Vt,re,we,Ue,Hn,It,$t.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(ze,H,ke,Tt,Vt,re,we,Ue,Hn,$t.data):F.texSubImage3D(ze,H,ke,Tt,Vt,re,we,Ue,Hn,It,$t):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,H,ke,Tt,re,we,Hn,It,$t.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,H,ke,Tt,$t.width,$t.height,Hn,$t.data):F.texSubImage2D(F.TEXTURE_2D,H,ke,Tt,re,we,Hn,It,$t);F.pixelStorei(F.UNPACK_ROW_LENGTH,es),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Lt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,pi),F.pixelStorei(F.UNPACK_SKIP_ROWS,Kr),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Wn),H===0&&k.generateMipmaps&&F.generateMipmap(ze),Xe.unbindTexture()},this.copyTextureToTexture3D=function(R,k,G=null,V=null,H=0){return R.isTexture!==!0&&(Ia("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,R=arguments[2],k=arguments[3],H=arguments[4]||0),Ia('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,k,G,V,H)},this.initRenderTarget=function(R){$e.get(R).__webglFramebuffer===void 0&&C.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?C.setTextureCube(R,0):R.isData3DTexture?C.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?C.setTexture2DArray(R,0):C.setTexture2D(R,0),Xe.unbindTexture()},this.resetState=function(){A=0,L=0,I=null,Xe.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ls}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}},mc=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new me(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Fi=class extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},xd=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ed,this.updateRanges=[],this.version=0,this.uuid=cs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Pn=new T,gc=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.applyMatrix4(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.applyNormalMatrix(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.transformDirection(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=yi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=kt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),s=kt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),s=kt(s,this.array),r=kt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},_i=class extends fs{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},uo,Sa=new T,fo=new T,po=new T,mo=new ne,Ta=new ne,_m=new vt,Wl=new T,Ra=new T,$l=new T,G0=new ne,cu=new ne,V0=new ne,Oi=class extends pn{constructor(e=new _i){if(super(),this.isSprite=!0,this.type="Sprite",uo===void 0){uo=new Rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new xd(t,5);uo.setIndex([0,1,2,0,2,3]),uo.setAttribute("position",new gc(i,3,0,!1)),uo.setAttribute("uv",new gc(i,2,3,!1))}this.geometry=uo,this.material=e,this.center=new ne(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fo.setFromMatrixScale(this.matrixWorld),_m.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),po.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fo.multiplyScalar(-po.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Xl(Wl.set(-.5,-.5,0),po,o,fo,s,r),Xl(Ra.set(.5,-.5,0),po,o,fo,s,r),Xl($l.set(.5,.5,0),po,o,fo,s,r),G0.set(0,0),cu.set(1,0),V0.set(1,1);let a=e.ray.intersectTriangle(Wl,Ra,$l,!1,Sa);if(a===null&&(Xl(Ra.set(-.5,.5,0),po,o,fo,s,r),cu.set(0,1),a=e.ray.intersectTriangle(Wl,$l,Ra,!1,Sa),a===null))return;let l=e.ray.origin.distanceTo(Sa);l<e.near||l>e.far||t.push({distance:l,point:Sa.clone(),uv:Gs.getInterpolation(Sa,Wl,Ra,$l,G0,cu,V0,new ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Xl(n,e,t,i,s,r){mo.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Ta.x=r*mo.x-s*mo.y,Ta.y=s*mo.x+r*mo.y):Ta.copy(mo),n.copy(e),n.x+=Ta.x,n.y+=Ta.y,n.applyMatrix4(_m)}var yd=class extends Fn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=qn,h=qn,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xc=class extends Qt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},go=new vt,W0=new vt,ql=[],$0=new Mi,aE=new vt,Aa=new le,Ca=new Xs,qs=class extends le{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,aE)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,go),$0.copy(e.boundingBox).applyMatrix4(go),this.boundingBox.union($0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,go),Ca.copy(e.boundingSphere).applyMatrix4(go),this.boundingSphere.union(Ca)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Aa.geometry=this.geometry,Aa.material=this.material,Aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ca.copy(this.boundingSphere),Ca.applyMatrix4(i),e.ray.intersectsSphere(Ca)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,go),W0.multiplyMatrices(i,go),Aa.matrixWorld=W0,Aa.raycast(e,ql);for(let o=0,a=ql.length;o<a;o++){let l=ql[o];l.instanceId=r,l.object=this,t.push(l)}ql.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new yd(new Float32Array(s*this.count),s,this.count,Zd,Ni));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Yn=class extends fs{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},X0=new vt,vd=new lc,Yl=new Xs,Zl=new T,ii=class extends pn{constructor(e=new Rt,t=new Yn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yl.copy(i.boundingSphere),Yl.applyMatrix4(s),Yl.radius+=r,e.ray.intersectsSphere(Yl)===!1)return;X0.copy(s).invert(),vd.copy(e.ray).applyMatrix4(X0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,v=p;g<v;g++){let x=c.getX(g);Zl.fromBufferAttribute(u,x),q0(Zl,x,l,s,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,v=p;g<v;g++)Zl.fromBufferAttribute(u,g),q0(Zl,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function q0(n,e,t,i,s,r,o){let a=vd.distanceSqToPoint(n);if(a<t){let l=new T;vd.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var rn=class extends Fn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},si=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ne:new T);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new T,s=[],r=[],o=[],a=new T,l=new vt;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new T)}r[0]=new T,o[0]=new T;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(vn(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(vn(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},za=class extends si{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ne){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Md=class extends za{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function nf(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,p*=h,s(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Kl=new T,hu=new nf,uu=new nf,du=new nf,Ba=class extends si{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new T){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Kl.subVectors(s[0],s[1]).add(s[0]),c=Kl);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Kl.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Kl),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),x<1e-4&&(x=v),hu.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,x),uu.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,x),du.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,x)}else this.curveType==="catmullrom"&&(hu.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),uu.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),du.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(hu.calc(l),uu.calc(l),du.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new T().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Y0(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function lE(n,e){let t=1-n;return t*t*e}function cE(n,e){return 2*(1-n)*n*e}function hE(n,e){return n*n*e}function ka(n,e,t,i){return lE(n,e)+cE(n,t)+hE(n,i)}function uE(n,e){let t=1-n;return t*t*t*e}function dE(n,e){let t=1-n;return 3*t*t*n*e}function fE(n,e){return 3*(1-n)*n*n*e}function pE(n,e){return n*n*n*e}function Ha(n,e,t,i,s){return uE(n,e)+dE(n,t)+fE(n,i)+pE(n,s)}var yc=class extends si{constructor(e=new ne,t=new ne,i=new ne,s=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ne){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ha(e,s.x,r.x,o.x,a.x),Ha(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_d=class extends si{constructor(e=new T,t=new T,i=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new T){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ha(e,s.x,r.x,o.x,a.x),Ha(e,s.y,r.y,o.y,a.y),Ha(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vc=class extends si{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ed=class extends si{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mc=class extends si{constructor(e=new ne,t=new ne,i=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ne){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ka(e,s.x,r.x,o.x),ka(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_c=class extends si{constructor(e=new T,t=new T,i=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new T){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ka(e,s.x,r.x,o.x),ka(e,s.y,r.y,o.y),ka(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ec=class extends si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Y0(a,l.x,c.x,h.x,u.x),Y0(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ne().fromArray(s))}return this}},bd=Object.freeze({__proto__:null,ArcCurve:Md,CatmullRomCurve3:Ba,CubicBezierCurve:yc,CubicBezierCurve3:_d,EllipseCurve:za,LineCurve:vc,LineCurve3:Ed,QuadraticBezierCurve:Mc,QuadraticBezierCurve3:_c,SplineCurve:Ec}),wd=class extends si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bd[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new bd[s.type]().fromJSON(s))}return this}},Sd=class extends wd{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new vc(this.currentPoint.clone(),new ne(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Mc(this.currentPoint.clone(),new ne(e,t),new ne(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new yc(this.currentPoint.clone(),new ne(e,t),new ne(i,s),new ne(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ec(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new za(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ps=class n extends Rt{constructor(e=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=vn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new T,f=new ne,p=new T,g=new T,v=new T,x=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:x=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,p.x=m*1,p.y=-x,p.z=m*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:x=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,p.x=m*1,p.y=-x,p.z=m*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(g)}for(let _=0;_<=t;_++){let E=i+_*h*s,M=Math.sin(E),D=Math.cos(E);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*M,u.y=e[A].y,u.z=e[A].x*D,o.push(u.x,u.y,u.z),f.x=_/t,f.y=A/(e.length-1),a.push(f.x,f.y);let L=l[3*A+0]*M,I=l[3*A+1],w=l[3*A+0]*D;c.push(L,I,w)}}for(let _=0;_<t;_++)for(let E=0;E<e.length-1;E++){let M=E+_*e.length,D=M,A=M+e.length,L=M+e.length+1,I=M+1;r.push(D,A,I),r.push(L,I,A)}this.setIndex(r),this.setAttribute("position",new Qe(o,3)),this.setAttribute("uv",new Qe(a,2)),this.setAttribute("normal",new Qe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},bc=class n extends ps{constructor(e=1,t=1,i=4,s=8){let r=new Sd;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},Ys=class n extends Rt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new T,h=new ne;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let p=i+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(a,3)),this.setAttribute("uv",new Qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Je=class n extends Rt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],g=0,v=[],x=i/2,m=0;_(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(f,3)),this.setAttribute("uv",new Qe(p,2));function _(){let M=new T,D=new T,A=0,L=(t-e)/i;for(let I=0;I<=r;I++){let w=[],b=I/r,U=b*(t-e)+e;for(let B=0;B<=s;B++){let z=B/s,W=z*l+a,ee=Math.sin(W),Y=Math.cos(W);D.x=U*ee,D.y=-b*i+x,D.z=U*Y,u.push(D.x,D.y,D.z),M.set(ee,L,Y).normalize(),f.push(M.x,M.y,M.z),p.push(z,1-b),w.push(g++)}v.push(w)}for(let I=0;I<s;I++)for(let w=0;w<r;w++){let b=v[w][I],U=v[w+1][I],B=v[w+1][I+1],z=v[w][I+1];(e>0||w!==0)&&(h.push(b,U,z),A+=3),(t>0||w!==r-1)&&(h.push(U,B,z),A+=3)}c.addGroup(m,A,0),m+=A}function E(M){let D=g,A=new ne,L=new T,I=0,w=M===!0?e:t,b=M===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,x*b,0),f.push(0,b,0),p.push(.5,.5),g++;let U=g;for(let B=0;B<=s;B++){let W=B/s*l+a,ee=Math.cos(W),Y=Math.sin(W);L.x=w*Y,L.y=x*b,L.z=w*ee,u.push(L.x,L.y,L.z),f.push(0,b,0),A.x=ee*.5+.5,A.y=Y*.5*b+.5,p.push(A.x,A.y),g++}for(let B=0;B<s;B++){let z=D+B,W=U+B;M===!0?h.push(W,W+1,z):h.push(W+1,W,z),I+=3}c.addGroup(m,I,M===!0?1:2),m+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ot=class n extends Je{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ga=class n extends Rt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Qe(r,3)),this.setAttribute("normal",new Qe(r.slice(),3)),this.setAttribute("uv",new Qe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let E=new T,M=new T,D=new T;for(let A=0;A<t.length;A+=3)p(t[A+0],E),p(t[A+1],M),p(t[A+2],D),l(E,M,D,_)}function l(_,E,M,D){let A=D+1,L=[];for(let I=0;I<=A;I++){L[I]=[];let w=_.clone().lerp(M,I/A),b=E.clone().lerp(M,I/A),U=A-I;for(let B=0;B<=U;B++)B===0&&I===A?L[I][B]=w:L[I][B]=w.clone().lerp(b,B/U)}for(let I=0;I<A;I++)for(let w=0;w<2*(A-I)-1;w++){let b=Math.floor(w/2);w%2===0?(f(L[I][b+1]),f(L[I+1][b]),f(L[I][b])):(f(L[I][b+1]),f(L[I+1][b+1]),f(L[I+1][b]))}}function c(_){let E=new T;for(let M=0;M<r.length;M+=3)E.x=r[M+0],E.y=r[M+1],E.z=r[M+2],E.normalize().multiplyScalar(_),r[M+0]=E.x,r[M+1]=E.y,r[M+2]=E.z}function h(){let _=new T;for(let E=0;E<r.length;E+=3){_.x=r[E+0],_.y=r[E+1],_.z=r[E+2];let M=x(_)/2/Math.PI+.5,D=m(_)/Math.PI+.5;o.push(M,1-D)}g(),u()}function u(){for(let _=0;_<o.length;_+=6){let E=o[_+0],M=o[_+2],D=o[_+4],A=Math.max(E,M,D),L=Math.min(E,M,D);A>.9&&L<.1&&(E<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),D<.2&&(o[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function p(_,E){let M=_*3;E.x=e[M+0],E.y=e[M+1],E.z=e[M+2]}function g(){let _=new T,E=new T,M=new T,D=new T,A=new ne,L=new ne,I=new ne;for(let w=0,b=0;w<r.length;w+=9,b+=6){_.set(r[w+0],r[w+1],r[w+2]),E.set(r[w+3],r[w+4],r[w+5]),M.set(r[w+6],r[w+7],r[w+8]),A.set(o[b+0],o[b+1]),L.set(o[b+2],o[b+3]),I.set(o[b+4],o[b+5]),D.copy(_).add(E).add(M).divideScalar(3);let U=x(D);v(A,b+0,_,U),v(L,b+2,E,U),v(I,b+4,M,U)}}function v(_,E,M,D){D<0&&_.x===1&&(o[E]=_.x-1),M.x===0&&M.z===0&&(o[E]=D/2/Math.PI+.5)}function x(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},ri=class n extends Ga{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Dn=class n extends Ga{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Zs=class n extends Ga{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},un=class n extends Rt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/s,p=new T,g=new ne;for(let v=0;v<=s;v++){for(let x=0;x<=i;x++){let m=r+x/i*o;p.x=u*Math.cos(m),p.y=u*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let v=0;v<s;v++){let x=v*(i+1);for(let m=0;m<i;m++){let _=m+x,E=_,M=_+i+1,D=_+i+2,A=_+1;a.push(E,M,A),a.push(M,D,A)}}this.setIndex(a),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Be=class n extends Rt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new T,f=new T,p=[],g=[],v=[],x=[];for(let m=0;m<=i;m++){let _=[],E=m/i,M=0;m===0&&o===0?M=.5/t:m===i&&l===Math.PI&&(M=-.5/t);for(let D=0;D<=t;D++){let A=D/t;u.x=-e*Math.cos(s+A*r)*Math.sin(o+E*a),u.y=e*Math.cos(o+E*a),u.z=e*Math.sin(s+A*r)*Math.sin(o+E*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),x.push(A+M,1-E),_.push(c++)}h.push(_)}for(let m=0;m<i;m++)for(let _=0;_<t;_++){let E=h[m][_+1],M=h[m][_],D=h[m+1][_],A=h[m+1][_+1];(m!==0||o>0)&&p.push(E,M,A),(m!==i-1||l<Math.PI)&&p.push(M,D,A)}this.setIndex(p),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(v,3)),this.setAttribute("uv",new Qe(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Le=class n extends Rt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new T,u=new T,f=new T;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let v=g/s*r,x=p/i*Math.PI*2;u.x=(e+t*Math.cos(x))*Math.cos(v),u.y=(e+t*Math.cos(x))*Math.sin(v),u.z=t*Math.sin(x),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let v=(s+1)*p+g-1,x=(s+1)*(p-1)+g-1,m=(s+1)*(p-1)+g,_=(s+1)*p+g;o.push(v,x,_),o.push(x,m,_)}this.setIndex(o),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var wc=class n extends Rt{constructor(e=new _c(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new T,l=new T,c=new ne,h=new T,u=[],f=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(f,3)),this.setAttribute("uv",new Qe(p,2));function v(){for(let E=0;E<t;E++)x(E);x(r===!1?t:0),_(),m()}function x(E){h=e.getPointAt(E/t,h);let M=o.normals[E],D=o.binormals[E];for(let A=0;A<=s;A++){let L=A/s*Math.PI*2,I=Math.sin(L),w=-Math.cos(L);l.x=w*M.x+I*D.x,l.y=w*M.y+I*D.y,l.z=w*M.z+I*D.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let E=1;E<=t;E++)for(let M=1;M<=s;M++){let D=(s+1)*(E-1)+(M-1),A=(s+1)*E+(M-1),L=(s+1)*E+M,I=(s+1)*(E-1)+M;g.push(D,A,I),g.push(A,L,I)}}function _(){for(let E=0;E<=t;E++)for(let M=0;M<=s;M++)c.x=E/t,c.y=M/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new bd[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Sc=class extends sn{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},he=class extends fs{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=um,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Jl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function mE(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Io=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Td=class extends Io{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xp,endingEnd:Xp}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case qp:r=e,a=2*t-i;break;case Yp:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case qp:o=e,l=2*i-t;break;case Yp:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),v=g*g,x=v*g,m=-f*x+2*f*v-f*g,_=(1+f)*x+(-1.5-2*f)*v+(-.5+f)*g+1,E=(-1-p)*x+(1.5+p)*v+.5*g,M=p*x-p*v;for(let D=0;D!==a;++D)r[D]=m*o[h+D]+_*o[c+D]+E*o[l+D]+M*o[u+D];return r}},Rd=class extends Io{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Ad=class extends Io{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ei=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Jl(t,this.TimeBufferType),this.values=Jl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Jl(e.times,Array),values:Jl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ad(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Td(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ic:t=this.InterpolantFactoryMethodDiscrete;break;case Qu:t=this.InterpolantFactoryMethodLinear;break;case kh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ic;case this.InterpolantFactoryMethodLinear:return Qu;case this.InterpolantFactoryMethodSmooth:return kh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&mE(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===kh,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,f=u-i,p=u+i;for(let g=0;g!==i;++g){let v=t[u+g];if(v!==t[f+g]||v!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Ei.prototype.TimeBufferType=Float32Array;Ei.prototype.ValueBufferType=Float32Array;Ei.prototype.DefaultInterpolation=Qu;var Cr=class extends Ei{constructor(e,t,i){super(e,t,i)}};Cr.prototype.ValueTypeName="bool";Cr.prototype.ValueBufferType=Array;Cr.prototype.DefaultInterpolation=ic;Cr.prototype.InterpolantFactoryMethodLinear=void 0;Cr.prototype.InterpolantFactoryMethodSmooth=void 0;var Cd=class extends Ei{};Cd.prototype.ValueTypeName="color";var Pd=class extends Ei{};Pd.prototype.ValueTypeName="number";var Id=class extends Io{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)cn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Tc=class extends Ei{InterpolantFactoryMethodLinear(e){return new Id(this.times,this.values,this.getValueSize(),e)}};Tc.prototype.ValueTypeName="quaternion";Tc.prototype.InterpolantFactoryMethodSmooth=void 0;var Pr=class extends Ei{constructor(e,t,i){super(e,t,i)}};Pr.prototype.ValueTypeName="string";Pr.prototype.ValueBufferType=Array;Pr.prototype.DefaultInterpolation=ic;Pr.prototype.InterpolantFactoryMethodLinear=void 0;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ld=class extends Ei{};Ld.prototype.ValueTypeName="vector";var Dd=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},gE=new Dd,Ud=class{constructor(e){this.manager=e!==void 0?e:gE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ud.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ir=class extends pn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ks=class extends Ir{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},fu=new vt,Z0=new T,K0=new T,Va=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oa,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Z0.setFromMatrixPosition(e.matrixWorld),t.position.copy(Z0),K0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(K0),t.updateMatrixWorld(),fu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(fu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Nd=class extends Va{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=To*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Lo=class extends Ir{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Nd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},J0=new vt,Pa=new T,pu=new T,kd=class extends Va{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new Ft(2,1,1,1),new Ft(0,1,1,1),new Ft(3,1,1,1),new Ft(1,1,1,1),new Ft(3,0,1,1),new Ft(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Pa.setFromMatrixPosition(e.matrixWorld),i.position.copy(Pa),pu.copy(i.position),pu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(pu),i.updateMatrixWorld(),s.makeTranslation(-Pa.x,-Pa.y,-Pa.z),J0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(J0)}},Js=class extends Ir{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new kd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Hd=class extends Va{constructor(){super(new Ao(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zi=class extends Ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new Hd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Rc=class extends Ir{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Do=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=j0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=j0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function j0(){return performance.now()}var sf="\\[\\]\\.:\\/",xE=new RegExp("["+sf+"]","g"),rf="[^"+sf+"]",yE="[^"+sf.replace("\\.","")+"]",vE=/((?:WC+[\/:])*)/.source.replace("WC",rf),ME=/(WCOD+)?/.source.replace("WCOD",yE),_E=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rf),EE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rf),bE=new RegExp("^"+vE+ME+_E+EE+"$"),wE=["material","materials","bones","map"],Fd=class{constructor(e,t,i){let s=i||Zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Zt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xE,"")}static parseTrackName(e){let t=bE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);wE.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Zt.Composite=Fd;Zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Zt.prototype.GetterByBindingType=[Zt.prototype._getValue_direct,Zt.prototype._getValue_array,Zt.prototype._getValue_arrayElement,Zt.prototype._getValue_toArray];Zt.prototype.SetterByBindingTypeAndVersioning=[[Zt.prototype._setValue_direct,Zt.prototype._setValue_direct_setNeedsUpdate,Zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_array,Zt.prototype._setValue_array_setNeedsUpdate,Zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_arrayElement,Zt.prototype._setValue_arrayElement_setNeedsUpdate,Zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_fromArray,Zt.prototype._setValue_fromArray_setNeedsUpdate,Zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iw=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Od}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Od);var Ic={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Zn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},SE=new Ao(-1,1,1,-1,0,1),of=class extends Rt{constructor(){super(),this.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qe([0,2,0,0,2,0],2))}},TE=new of,Qs=class{constructor(e){this._mesh=new le(TE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,SE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ko=class extends Zn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof sn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=js.clone(e.uniforms),this.material=new sn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Qs(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Wa=class extends Zn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Lc=class extends Zn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Dc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ne);this._width=i.width,this._height=i.height,t=new Ln(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ko(Ic),this.copyPass.material.blending=ki,this.clock=new Do}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Wa!==void 0&&(o instanceof Wa?i=!0:o instanceof Lc&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Uc=class extends Zn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new me}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Em={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new me(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ho=class n extends Zn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ne(e.x,e.y):new ne(256,256),this.clearColor=new me(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ln(r,o,{type:bi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Ln(r,o,{type:bi});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new Ln(r,o,{type:bi});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=Em;this.highPassUniforms=js.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new sn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ne(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Ic;this.copyUniforms=js.clone(h.uniforms),this.blendMaterial=new sn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:dt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new me,this.oldClearAlpha=1,this.basic=new Ke,this.fsQuad=new Qs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ne(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new sn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ne(.5,.5)},direction:{value:new ne(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new sn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Ho.BlurDirectionX=new ne(1,0);Ho.BlurDirectionY=new ne(0,1);var bm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Nc=class extends Zn{constructor(){super();let e=bm;this.uniforms=js.clone(e.uniforms),this.material=new Sc({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Qs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},xt.getTransfer(this._outputColorSpace)===Dt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Bd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Gd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Vd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Lr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Wd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===$d&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var d={scene:null,camera:null,renderer:null,player:null,time:{t:.3,day:1,elevation:1,night:0},res:{iron:0,silicon:0,ice:0,titanium:0},buildings:[],nodes:[],enemies:[],colonists:[],colony:{pop:0,housing:0,o2:0,food:0,water:0,support:0,powerProd:0,powerUse:0,deficit:!1},upgrades:{},stats:{mined:{iron:0,silicon:0,ice:0,titanium:0},built:{},kills:0,arrived:0,crafted:{}},chapter:0,terraform:0,ended:!1,storm:0,menuOpen:!1,locked:!1,started:!1,debug:!1,colliders:null,raining:!1,events:{map:{},on(n,e){var t;((t=this.map)[n]||(t[n]=[])).push(e)},emit(n,e){(this.map[n]||[]).forEach(t=>t(e))}}},xn={iron:{name:"\u94C1\u77FF",icon:"iron",color:"#d08a5e"},silicon:{name:"\u7845\u6676",icon:"silicon",color:"#f1dca0"},ice:{name:"\u6C34\u51B0",icon:"ice",color:"#a9dcff"},titanium:{name:"\u949B\u77FF",icon:"titanium",color:"#b9a6ff"}};function wi(n){for(let e in n)if((d.res[e]||0)<n[e])return!1;return!0}function $a(n){for(let e in n)d.res[e]-=n[e]}function Fo(n){return Object.entries(n).map(([e,t])=>`<span class="cost ${d.res[e]>=t?"":"lack"}" style="--rc:${xn[e].color}"><svg class="ico"><use href="#i-${e}"/></svg>${t}</span>`).join(" ")}var kc=class{constructor(e=16){this.cell=e,this.map=new Map}key(e,t){return e*73856093^t*19349663}add(e){let t=this.cell,i=Math.floor((e.x-e.r)/t),s=Math.floor((e.x+e.r)/t),r=Math.floor((e.z-e.r)/t),o=Math.floor((e.z+e.r)/t);e._keys=[];for(let a=i;a<=s;a++)for(let l=r;l<=o;l++){let c=this.key(a,l);this.map.has(c)||this.map.set(c,[]),this.map.get(c).push(e),e._keys.push(c)}return e}remove(e){if(!(!e||!e._keys)){for(let t of e._keys){let i=this.map.get(t);if(!i)continue;let s=i.indexOf(e);s>=0&&i.splice(s,1)}e._keys=null}}query(e,t){return this.map.get(this.key(Math.floor(e/this.cell),Math.floor(t/this.cell)))||[]}overlaps(e,t,i){let s=this.cell,r=new Set;for(let o=Math.floor((e-i)/s);o<=Math.floor((e+i)/s);o++)for(let a=Math.floor((t-i)/s);a<=Math.floor((t+i)/s);a++){let l=this.map.get(this.key(o,a));if(l)for(let c of l){if(r.has(c))continue;r.add(c);let h=c.x-e,u=c.z-t,f=c.r+i;if(h*h+u*u<f*f)return c}}return null}};function Kn(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Hc(n){let e=Kn(n),t=[...Array(256).keys()];for(let l=255;l>0;l--){let c=Math.floor(e()*(l+1));[t[l],t[c]]=[t[c],t[l]]}let i=new Uint8Array(512);for(let l=0;l<512;l++)i[l]=t[l&255];let s=[1,-1,1,-1,1,-1,0,0],r=[1,1,-1,-1,0,0,1,-1],o=.5*(Math.sqrt(3)-1),a=(3-Math.sqrt(3))/6;return function(l,c){let h=0,u=0,f=0,p=(l+c)*o,g=Math.floor(l+p),v=Math.floor(c+p),x=(g+v)*a,m=l-(g-x),_=c-(v-x),E=m>_?1:0,M=m>_?0:1,D=m-E+a,A=_-M+a,L=m-1+2*a,I=_-1+2*a,w=g&255,b=v&255,U=.5-m*m-_*_;if(U>0){let W=i[w+i[b]]&7;U*=U,h=U*U*(s[W]*m+r[W]*_)}let B=.5-D*D-A*A;if(B>0){let W=i[w+E+i[b+M]]&7;B*=B,u=B*B*(s[W]*D+r[W]*A)}let z=.5-L*L-I*I;if(z>0){let W=i[w+1+i[b+1]]&7;z*=z,f=z*z*(s[W]*L+r[W]*I)}return 70*(h+u+f)}}function af(n,e,t,i=4,s=2,r=.5){let o=1,a=1,l=0,c=0;for(let h=0;h<i;h++)l+=o*n(e*a,t*a),c+=o,o*=r,a*=s;return l/c}var Si=(n,e,t)=>n<e?e:n>t?t:n,At=(n,e,t)=>n+(e-n)*t,Un=(n,e,t)=>{let i=Si((t-n)/(e-n),0,1);return i*i*(3-2*i)};var Nn={mars:{id:"mars",name:"\u706B\u661F",place:"\u4E4C\u6258\u90A6\u5E73\u539F",title:"\u65B0\u5BB6\u56ED",next:"europa",seed:2089,gravity:5.6,solar:1,terraformable:!0,craters:46,hills:46,ridges:14,detail:1.6,ground:{a:[.56,.25,.14],b:[.74,.4,.24],steep:[.36,.19,.13],low:[.42,.22,.16]},rockHSL:[.04,.45,.22],rock:9062960,sky:{dayTop:[.62,.42,.29],dayHor:[.9,.68,.5],setTop:[.17,.13,.15],setHor:[.58,.4,.33],nightTop:[.006,.008,.022],nightHor:[.035,.035,.055],halo:[.35,.58,.95],storm:[.62,.42,.28]},dust:16765088,enemy:[3808536,9054736,16730640],extras:"moons",storms:!0,intro:["2089 \u5E74\u3002","\u5730\u7403\u4F9D\u7136\u7F8E\u4E3D\uFF0C\u4F46\u5DF2\u7ECF\u592A\u62E5\u6324\u3001\u592A\u708E\u70ED\u3001\u592A\u75B2\u60EB\u3002","\u300C\u65B9\u821F\u8BA1\u5212\u300D\u628A\u4EBA\u7C7B\u7684\u672A\u6765\uFF0C\u62BC\u5728\u4E86\u4E00\u9897\u7EA2\u8272\u661F\u7403\u4E0A\u3002","\u7ECF\u8FC7\u4E03\u4E2A\u6708\u3001\u4E24\u4EBF\u4E24\u5343\u4E94\u767E\u4E07\u516C\u91CC\u7684\u822A\u884C\u2014\u2014","\u4F60\u7684\u7740\u9646\u8231\uFF0C\u5728\u4E4C\u6258\u90A6\u5E73\u539F\u7684\u6668\u5149\u4E2D\u843D\u5730\u3002",'\u4F60\u662F\u7B2C\u4E00\u4E2A\u3002<b style="color:#ff8a3d">\u4F46\u4E0D\u4F1A\u662F\u6700\u540E\u4E00\u4E2A\u3002</b>']},europa:{id:"europa",name:"\u6728\u536B\u4E8C\xB7\u6B27\u7F57\u5DF4",place:"\u5EB7\u7EB3\u9A6C\u62C9\u6DF7\u6C8C\u533A",title:"\u51B0\u4E0B\u4E4B\u6D77",next:"kepler",seed:1610,gravity:3.6,solar:.55,terraformable:!1,craters:14,hills:16,ridges:26,detail:1.1,ground:{a:[.8,.84,.88],b:[.93,.95,.97],steep:[.52,.36,.3],low:[.62,.72,.82]},rockHSL:[.58,.2,.62],rock:12110040,sky:{dayTop:[.02,.025,.05],dayHor:[.16,.18,.26],setTop:[.01,.012,.03],setHor:[.1,.1,.16],nightTop:[.004,.005,.012],nightHor:[.02,.025,.04],halo:[.6,.7,.9],storm:[.5,.6,.7]},dust:14676223,enemy:[1454138,2788e3,4251903],extras:"jupiter",storms:!1,intro:["\u706B\u661F\u7684\u706F\u706B\uFF0C\u5DF2\u7ECF\u5728\u8EAB\u540E\u4EAE\u6210\u4E86\u4E00\u7247\u3002","\u800C\u4F60\uFF0C\u518D\u4E00\u6B21\u51FA\u53D1\u4E86\u3002","\u6728\u661F\u7684\u7B2C\u4E8C\u9897\u536B\u661F\u2014\u2014\u6B27\u7F57\u5DF4\u3002","\u5728\u5B83\u4E8C\u5341\u516C\u91CC\u539A\u7684\u51B0\u58F3\u4E4B\u4E0B\uFF0C\u662F\u4E00\u6574\u7247\u4ECE\u672A\u89C1\u8FC7\u9633\u5149\u7684\u6D77\u6D0B\u3002","\u6728\u661F\uFF0C\u50CF\u4E00\u8F6E\u5DE8\u5927\u7684\u6708\u4EAE\uFF0C\u60AC\u5728\u5730\u5E73\u7EBF\u4E0A\u3002",'<b style="color:#66e6ff">\u4EBA\u7C7B\u7684\u7B2C\u4E8C\u4E2A\u5BB6\uFF0C\u5728\u51B0\u4E0B\u3002</b>']},kepler:{id:"kepler",name:"\u5F00\u666E\u52D2-442b",place:"\u7FE1\u7FE0\u8C37\u5730",title:"\u53CC\u65E5\u4E4B\u5730",next:null,seed:442,gravity:7.2,solar:1.3,terraformable:!1,craters:8,hills:64,ridges:10,detail:2.2,ground:{a:[.18,.36,.3],b:[.32,.52,.34],steep:[.3,.24,.3],low:[.2,.26,.4]},rockHSL:[.75,.25,.3],rock:6969994,sky:{dayTop:[.3,.5,.78],dayHor:[.78,.86,.8],setTop:[.2,.12,.3],setHor:[.9,.5,.4],nightTop:[.01,.01,.04],nightHor:[.05,.04,.09],halo:[1,.6,.4],storm:[.6,.7,.6]},dust:13172696,enemy:[1976854,5939242,10551104],extras:"twinsuns",storms:!1,intro:["\u4E00\u5343\u4E8C\u767E\u5149\u5E74\u3002","\u51B7\u51BB\u8231\u91CC\u7684\u4E09\u767E\u5E74\uFF0C\u5BF9\u4F60\u53EA\u662F\u4E00\u573A\u68A6\u3002","\u8237\u7A97\u5916\uFF0C\u4E24\u9897\u592A\u9633\u6B63\u4ECE\u7D2B\u8272\u7684\u5C71\u810A\u540E\u5347\u8D77\u3002","\u8FD9\u91CC\u6709\u98CE\uFF0C\u6709\u4E91\uFF0C\u6709\u4F1A\u5728\u591C\u91CC\u53D1\u5149\u7684\u68EE\u6797\u3002","\u5F00\u666E\u52D2-442b\u2014\u2014\u4EBA\u7C7B\u7B2C\u4E00\u6B21\uFF0C\u6765\u5230\u53E6\u4E00\u9897\u6052\u661F\u7684\u8EAB\u8FB9\u3002",'<b style="color:#a0ff70">\u4ECE\u8FD9\u91CC\u5F00\u59CB\uFF0C\u4EBA\u7C7B\u6210\u4E3A\u4E86\u661F\u9645\u6587\u660E\u3002</b>']}},Sm="starport-meta";function er(){try{return JSON.parse(localStorage.getItem(Sm))||{}}catch{return{}}}function Xa(n){try{localStorage.setItem(Sm,JSON.stringify(n))}catch{}}function lf(){try{for(let n of Object.keys(localStorage))n.startsWith("starport-")&&localStorage.removeItem(n)}catch{}}var wm=new URLSearchParams(location.search).get("planet"),dn=er(),it=Nn[wm]?wm:Nn[dn.planet]?dn.planet:"mars",fe=Nn[it],Fc=it==="mars"?"starport-newhome-v1":"starport-planet-"+it;var ot=512;function ms(){let n=document.createElement("canvas");return n.width=n.height=ot,n}function gs(n,e,t=1){let i=new rn(n);return i.wrapS=i.wrapT=us,i.repeat.set(t,t),i.anisotropy=4,e&&(i.colorSpace=yt),i}function tr(n,e,t,i,s,r,o,a){for(let l=0;l<t;l++){n.fillStyle=`rgba(${i},${s+e()*(r-s)})`;let c=o+e()*(a-o);n.fillRect(e()*ot,e()*ot,c,c)}}function qa(n=1,e=4){let t=Kn(n),i=ms(),s=i.getContext("2d"),r=ms(),o=r.getContext("2d"),a=ms(),l=a.getContext("2d");s.fillStyle="#f2f0ec",s.fillRect(0,0,ot,ot),o.fillStyle="#8c8c8c",o.fillRect(0,0,ot,ot),l.fillStyle="#808080",l.fillRect(0,0,ot,ot);let c=ot/e;for(let u=0;u<e;u++)for(let f=0;f<e;f++){let p=236+Math.floor(t()*18);s.fillStyle=`rgb(${p},${p-2},${p-5})`,s.fillRect(u*c,f*c,c,c);let g=120+Math.floor(t()*40);if(o.fillStyle=`rgb(${g},${g},${g})`,o.fillRect(u*c,f*c,c,c),t()<.35){let v=c*(.25+t()*.3),x=c*(.2+t()*.25),m=u*c+c*.2+t()*c*.3,_=f*c+c*.2+t()*c*.3;l.strokeStyle="#4a4a4a",l.lineWidth=2,l.strokeRect(m,_,v,x),s.strokeStyle="rgba(80,76,70,.35)",s.lineWidth=1.5,s.strokeRect(m,_,v,x)}}for(let u=0;u<=e;u++){let f=u*c;for(let[p,g,v]of[[s,"rgba(70,64,58,.55)",2.5],[l,"#303030",4],[o,"#d0d0d0",3]])p.fillStyle=g,p.fillRect(f-v/2,0,v,ot),p.fillRect(0,f-v/2,ot,v)}for(let u=0;u<e;u++)for(let f=0;f<e;f++)for(let[p,g]of[[.08,.08],[.92,.08],[.08,.92],[.92,.92]]){let v=(u+p)*c,x=(f+g)*c;l.fillStyle="#c8c8c8",l.beginPath(),l.arc(v,x,3,0,7),l.fill(),s.fillStyle="rgba(90,86,80,.5)",s.beginPath(),s.arc(v,x,2.2,0,7),s.fill()}for(let u=0;u<70;u++){let f=t()*ot,p=30+t()*160,g=t()*ot,v=s.createLinearGradient(0,g,0,g+p);v.addColorStop(0,"rgba(150,90,60,0)"),v.addColorStop(.3,`rgba(150,90,60,${.05+t()*.08})`),v.addColorStop(1,"rgba(150,90,60,0)"),s.fillStyle=v,s.fillRect(f,g,1+t()*3,p)}let h=s.createLinearGradient(0,ot*.75,0,ot);h.addColorStop(0,"rgba(170,100,60,0)"),h.addColorStop(1,"rgba(170,100,60,.22)"),s.fillStyle=h,s.fillRect(0,0,ot,ot),tr(s,t,2500,"120,80,60",.03,.12,1,3),tr(o,t,1800,"255,255,255",.05,.2,1,4),s.strokeStyle="rgba(255,255,255,.25)",o.strokeStyle="rgba(40,40,40,.4)";for(let u=0;u<40;u++){let f=t()*ot,p=t()*ot,g=(t()-.5)*40,v=(t()-.5)*12;for(let x of[s,o])x.lineWidth=.8,x.beginPath(),x.moveTo(f,p),x.lineTo(f+g,p+v),x.stroke()}return{map:gs(i,!0),roughnessMap:gs(r,!1),bumpMap:gs(a,!1)}}function Tm(n=7){let e=Kn(n),t=ms(),i=t.getContext("2d"),s=ms(),r=s.getContext("2d");i.fillStyle="#e6e6e6",i.fillRect(0,0,ot,ot),r.fillStyle="#6a6a6a",r.fillRect(0,0,ot,ot);for(let o=0;o<ot;o++){let a=210+Math.floor(e()*45);i.fillStyle=`rgba(${a},${a},${a},.5)`,i.fillRect(0,o,ot,1);let l=80+Math.floor(e()*60);r.fillStyle=`rgba(${l},${l},${l},.5)`,r.fillRect(0,o,ot,1)}return tr(i,e,800,"60,50,40",.05,.15,1,3),{map:gs(t,!0),roughnessMap:gs(s,!1)}}function Rm(n=3){let e=Kn(n),t=ms(),i=t.getContext("2d"),s=ms(),r=s.getContext("2d");i.fillStyle="#d8d2c8",i.fillRect(0,0,ot,ot),r.fillStyle="#808080",r.fillRect(0,0,ot,ot),tr(i,e,9e3,"90,80,70",.04,.16,1,4),tr(i,e,3e3,"255,250,240",.04,.12,1,3),tr(r,e,6e3,"40,40,40",.1,.4,1,3);for(let a=0;a<6;a++){i.strokeStyle="rgba(70,60,50,.25)",i.lineWidth=1,i.beginPath();let l=e()*ot,c=e()*ot;i.moveTo(l,c);for(let h=0;h<12;h++)l+=(e()-.5)*50,c+=(e()-.5)*50,i.lineTo(l,c);i.stroke()}let o=i.createLinearGradient(0,0,0,ot);return o.addColorStop(0,"rgba(170,100,60,0)"),o.addColorStop(1,"rgba(170,100,60,.3)"),i.fillStyle=o,i.fillRect(0,0,ot,ot),{map:gs(t,!0,1),bumpMap:gs(s,!1,1)}}function Am(n=11){let e=Kn(n),t=ms(),i=t.getContext("2d"),s=ms(),r=s.getContext("2d");i.fillStyle="#d0c4bc",i.fillRect(0,0,ot,ot),r.fillStyle="#808080",r.fillRect(0,0,ot,ot);for(let o=0;o<300;o++){let a=e()*ot,l=e()*ot,c=6+e()*40,h=Math.floor(150+e()*90);i.fillStyle=`rgba(${h},${h-15},${h-25},.25)`,i.beginPath(),i.ellipse(a,l,c,c*(.4+e()*.6),e()*3,0,7),i.fill(),r.fillStyle=`rgba(${h},${h},${h},.25)`,r.beginPath(),r.ellipse(a,l,c,c*.6,e()*3,0,7),r.fill()}return tr(i,e,8e3,"60,40,30",.05,.2,1,3),tr(r,e,8e3,"20,20,20",.1,.5,1,2),{map:gs(t,!0,1),bumpMap:gs(s,!1,1)}}var y={white:new he({color:15328474,roughness:.55,metalness:.1}),panel:new he({color:13222840,roughness:.6,metalness:.2}),metal:new he({color:8159110,roughness:.4,metalness:.7}),dark:new he({color:2895670,roughness:.5,metalness:.5}),orange:new he({color:16742954,roughness:.5,metalness:.1}),glass:new he({color:10474751,roughness:.05,metalness:.3,transparent:!0,opacity:.35}),window:new he({color:2240576,emissive:16761466,emissiveIntensity:0,roughness:.2}),solar:new he({color:1780826,roughness:.25,metalness:.8}),plant:new he({color:5221962,roughness:.8,flatShading:!0}),cyan:new he({color:1127236,emissive:3401471,emissiveIntensity:2}),red:new he({color:3342336,emissive:16722474,emissiveIntensity:3}),lamp:new he({color:3351057,emissive:16767392,emissiveIntensity:0}),found:new he({color:9143160,roughness:.9}),flame:new Ke({color:16756832,transparent:!0,opacity:.85,blending:dt,depthWrite:!1})};{let n=qa(1,4),e=qa(5,3),t=Tm(),i=Rm(),s=qa(9,2);Object.assign(y.white,{...n,bumpScale:1.4,roughness:.75,metalness:.15,color:new me(15920612)}),Object.assign(y.panel,{...e,bumpScale:1.2,roughness:.8,metalness:.25,color:new me(13617340)}),Object.assign(y.metal,{...t,roughness:1,metalness:.85,color:new me(10132900)}),Object.assign(y.dark,{...s,bumpScale:1,roughness:.7,metalness:.6,color:new me(3816772)}),Object.assign(y.orange,{...qa(3,2),bumpScale:.8,roughness:.7,metalness:.15}),Object.assign(y.found,{...i,bumpScale:2,roughness:.95,color:new me(10853004)}),y.glass.roughness=.02,y.glass.metalness=.1,y.glass.opacity=.28,y.glass.envMapIntensity=2.2,y.solar.roughness=.12,y.solar.envMapIntensity=1.8;for(let r in y)y[r].needsUpdate=!0}var Bi=Am();{let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d");e.fillStyle="#1d3266",e.fillRect(0,0,64,64),e.strokeStyle="#9fb4e0",e.lineWidth=1.5;for(let i=0;i<=64;i+=16)e.beginPath(),e.moveTo(i,0),e.lineTo(i,64),e.stroke(),e.beginPath(),e.moveTo(0,i),e.lineTo(64,i),e.stroke();let t=new rn(n);t.colorSpace=yt,t.wrapS=t.wrapT=us,t.repeat.set(3,2),y.solar.map=t,y.solar.color.set(16777215)}function q(n,e,t=0,i=0,s=0,r){let o=new le(n,e);return o.position.set(t,i,s),o.castShadow=!0,o.receiveShadow=!0,r&&r.add(o),o}var et=(n,e,t)=>new Ge(n,e,t),Ye=(n,e,t,i=16)=>new Je(n,e,t,i),Oc;function Jn(){if(Oc)return Oc;let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.6)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Oc=new rn(n),Oc}function Se(n,e,t,i=0,s=0,r=0){let o=new Oi(new _i({map:Jn(),color:n,transparent:!0,blending:dt,depthWrite:!1}));return o.scale.set(e,e,1),o.position.set(i,s,r),t&&t.add(o),o}function Tn(n,e,t=!1){let i=q(t?et(e*2,4,e*2):Ye(e,e*1.05,4,20),y.found,0,-1.8,0,n);i.castShadow=!1,i.userData.found=!0}var zn={solar(n,e){Tn(n,2.2,!0),q(Ye(.18,.25,2.2),y.metal,0,1.1,0,n);let t=new pe;t.position.y=2.3,n.add(t);let i=q(et(4.2,.12,2.8),y.solar,0,0,0,t);q(et(4.4,.08,.1),y.metal,0,-.05,1.42,t),q(et(4.4,.08,.1),y.metal,0,-.05,-1.42,t),e.pivot=t,e.panel=i},oxygen(n,e){Tn(n,3),q(Ye(1,1,3.6),y.white,-1.3,1.8,0,n),q(new Be(1,16,8,0,Math.PI*2,0,Math.PI/2),y.white,-1.3,3.6,0,n),q(Ye(1,1,3.6),y.white,1.3,1.8,0,n),q(new Be(1,16,8,0,Math.PI*2,0,Math.PI/2),y.white,1.3,3.6,0,n),q(Ye(1.02,1.02,.3),y.orange,-1.3,2.4,0,n),q(Ye(1.02,1.02,.3),y.orange,1.3,2.4,0,n),q(et(1.4,1.6,1.8),y.panel,0,.8,1,n),q(Ye(.12,.12,2.6),y.metal,0,3.2,0,n).rotation.z=Math.PI/2;let t=new pe;t.position.set(0,1.75,1.95),n.add(t);for(let i=0;i<4;i++){let s=q(et(.15,.7,.05),y.dark,0,0,0,t);s.rotation.z=i*Math.PI/2,s.position.set(Math.sin(i*Math.PI/2)*.3,Math.cos(i*Math.PI/2)*.3,0),s.rotation.z=-i*Math.PI/2}e.fan=t,e.light=Se(6741503,1.2,n,0,1.75,2)},habitat(n,e){Tn(n,6.2),q(Ye(6,6,1.2,28),y.panel,0,.6,0,n);let t=q(new Be(5.8,28,12,0,Math.PI*2,0,Math.PI/2),y.white,0,1.2,0,n);t.scale.y=.85;let i=q(new Je(5.72,5.84,.7,28,1,!0),y.window,0,2,0,n);q(Ye(.1,.1,3),y.metal,0,7.4,0,n),e.tip=Se(16728128,1.2,n,0,8.9,0),q(et(2.2,2.6,2.8),y.white,0,1.3,6.4,n),q(et(1.2,2,.1),y.dark,0,1.1,7.82,n),q(et(2.3,.3,2.9),y.orange,0,2.7,6.4,n),e.windows=[i]},extractor(n,e){Tn(n,2.6,!0),q(et(4,.6,4),y.panel,0,.3,0,n);for(let[i,s]of[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4]])q(Ye(.12,.15,6),y.metal,i*.7,3.3,s*.7,n).rotation.set(s*.08,0,-i*.08);q(et(1.6,.4,1.6),y.orange,0,6.2,0,n);let t=q(Ye(.3,.3,4.5),y.metal,0,3,0,n);q(Ye(.9,.9,1.6),y.white,1.7,1.4,1.2,n),e.drill=t,e.light=Se(10476799,1.2,n,1.7,2.5,1.2)},greenhouse(n,e){Tn(n,5,!0),q(et(10,.5,6),y.panel,0,.25,0,n);let t=q(new Je(3,3,10,20,1,!1,0,Math.PI),y.glass,0,.5,0,n);t.rotation.set(0,0,Math.PI/2),t.castShadow=!1;for(let i=0;i<5;i++)q(new Le(3,.08,6,20,Math.PI),y.white,-4.5+i*2.25,.5,0,n).rotation.y=Math.PI/2;for(let i=0;i<14;i++){let s=-4.2+i%7*1.4,r=i<7?-1.2:1.2,o=q(new Ot(.45,1.2+i%3*.3,6),y.plant,s,1.2,r,n);o.castShadow=!1}q(et(9.6,.3,.5),y.dark,0,.7,-1.2,n),q(et(9.6,.3,.5),y.dark,0,.7,1.2,n),e.light=Se(16737996,4,n,0,2.5,0)},fabricator(n,e){Tn(n,4,!0),q(et(7,3.6,5),y.panel,0,1.8,0,n),q(et(7.1,.4,5.1),y.orange,0,3.4,0,n),q(et(3,2.6,.1),y.dark,0,1.3,2.52,n);let t=new pe;t.position.set(2.2,3.6,0),n.add(t),q(Ye(.35,.45,.6),y.metal,0,.3,0,t);let i=q(et(.3,2.2,.3),y.orange,0,1.4,0,t),s=q(et(.25,1.6,.25),y.metal,0,2.4,.6,t);s.rotation.x=.9,e.arm=t,e.spark=Se(16764006,1.2,n,2.2,5.7,1.2),q(et(1.2,1.2,1.2),y.dark,-2.4,.6,3.2,n),q(et(1,1,1),y.dark,-1.1,.5,3.1,n)},turret(n,e){Tn(n,1.8),q(Ye(1.4,1.8,1.2,12),y.metal,0,.6,0,n),q(Ye(.5,.7,1.2,10),y.dark,0,1.8,0,n);let t=new pe;t.position.y=2.7,n.add(t),q(et(1.6,1,1.8),y.white,0,0,0,t),q(et(1.65,.2,1.85),y.orange,0,.35,0,t),q(Ye(.12,.12,2.2,8),y.dark,-.4,0,-1.6,t).rotation.x=Math.PI/2,q(Ye(.12,.12,2.2,8),y.dark,.4,0,-1.6,t).rotation.x=Math.PI/2,e.eye=Se(3401471,.9,t,0,.1,-.95),e.head=t},reactor(n,e){Tn(n,5.2),q(Ye(5,5.2,1.4,24),y.panel,0,.7,0,n);let t=q(new Be(2,20,14),y.cyan,0,4.2,0,n);t.castShadow=!1;let i=q(new Le(3.2,.35,10,32),y.white,0,4.2,0,n),s=q(new Le(3.2,.35,10,32),y.white,0,4.2,0,n);s.rotation.x=Math.PI/2;for(let r=0;r<4;r++){let o=r*Math.PI/2;q(et(.6,3,.6),y.metal,Math.cos(o)*3.6,2.2,Math.sin(o)*3.6,n)}e.core=t,e.r1=i,e.r2=s,e.light=Se(3401471,9,n,0,4.2,0)},beacon(n,e){let t=q(Ye(7,7.3,.6,8),y.found,0,0,0,n);q(Ye(7.3,7.6,4,8),y.found,0,-2.3,0,n).castShadow=!1,q(new un(4.2,4.8,32),y.orange,0,.32,0,n).rotation.x=-Math.PI/2,q(new un(1.5,2,4),y.white,0,.32,0,n).rotation.x=-Math.PI/2,e.lights=[];for(let i=0;i<8;i++){let s=i*Math.PI/4+Math.PI/8;e.lights.push(Se(16755251,1.2,n,Math.cos(s)*6.6,.5,Math.sin(s)*6.6))}q(Ye(.18,.3,9,8),y.metal,8.6,4.2,0,n),q(et(1.6,.1,1.2),y.white,8.6,8.7,0,n).rotation.z=.4,e.tip=Se(16724016,2,n,8.6,9.2,0),t.castShadow=!1},lamp(n,e){q(Ye(.4,.5,.4,8),y.found,0,0,0,n),q(Ye(.08,.1,4.2,6),y.metal,0,2.1,0,n),q(et(.6,.2,.6),y.dark,0,4.3,0,n);let t=q(new Be(.2,8,6),y.lamp,0,4.15,0,n);t.castShadow=!1,e.glow=Se(16767392,3,n,0,4.1,0)},terraformer(n,e){Tn(n,7),q(Ye(7,7.5,2,6),y.panel,0,1,0,n),q(Ye(2.5,4.5,26,6),y.white,0,15,0,n);for(let i=0;i<3;i++)q(Ye(4.6-i*.7,4.6-i*.7,.8,6),y.orange,0,6+i*8,0,n);e.rings=[];for(let i=0;i<3;i++){let s=q(new Le(6-i*1.2,.25,8,40),y.cyan,0,10+i*8,0,n);s.castShadow=!1,e.rings.push(s)}for(let i=0;i<6;i++){let s=i*Math.PI/3,r=q(et(1.2,10,1.2),y.metal,Math.cos(s)*6,5,Math.sin(s)*6,n);r.rotation.y=-s}let t=q(new Je(.6,1.4,400,12,1,!0),new Ke({color:6743807,transparent:!0,opacity:0,blending:dt,depthWrite:!1,side:qt}),0,228,0,n);t.castShadow=!1,t.receiveShadow=!1,e.beam=t,e.top=Se(6743807,10,n,0,28,0)}};function Dm(){let n=new pe;q(Ye(1.2,2.4,5,12),y.white,0,3.5,0,n),q(new Ot(1.2,2.2,12),y.white,0,7.1,0,n),q(Ye(2.45,2.45,.4,12),y.orange,0,2.4,0,n);for(let i=0;i<3;i++){let s=i*Math.PI*2/3,r=q(et(.2,2.4,1.6),y.panel,Math.cos(s)*2.3,1.6,Math.sin(s)*2.3,n);r.rotation.y=-s}let e=new le(new Ot(1.1,5,12,1,!0),y.flame);e.rotation.x=Math.PI,e.position.y=-1.6,n.add(e);let t=Se(16752704,9,n,0,-.5,0);return{group:n,flame:e,flameGlow:t}}var Cm=[16751162,3850495,8257418,16740277,16769354].map(n=>new he({color:1118481,emissive:n,emissiveIntensity:.6,roughness:.1,metalness:.6})),Pm=[15525596,14278116,15259332].map(n=>new he({color:n,roughness:.7}));function Um(n){let e=new pe,t=Pm[n%Pm.length],i=Cm[n%Cm.length],s=(g,v,x,m,_,E=e)=>{let M=new le(g,v);return M.position.set(x,m,_),M.castShadow=!0,E.add(M),M},r=new ps([[0,0],[.2,0],[.24,.12],[.27,.42],[.25,.55],[.12,.62],[0,.62]].map(([g,v])=>new ne(g,v)),12),o=s(r,t,0,.72,0);o.scale.z=.8,s(new Le(.2,.04,6,16),y.orange,0,.77,0).rotation.x=Math.PI/2,s(new Je(.16,.18,.06,12),y.dark,0,1.36,0);let a=s(new Be(.21,16,12),t,0,1.58,0),l=s(new Be(.19,16,10,Math.PI*.12,Math.PI*.76,Math.PI*.28,Math.PI*.4),i,0,1.58,.035);s(new Ge(.02,.12,.02),y.metal,.12,1.82,-.05).rotation.z=-.3,s(new Ge(.36,.42,.18),y.panel,0,1.08,-.24),s(new Ge(.3,.06,.19),y.orange,0,1.25,-.24),Se(9306032,.25,e,.12,.96,-.34);let c=(g,v,x,m,_)=>{let E=new pe;E.position.set(g,v,0),e.add(E);let M=s(new bc(m,x,4,8),t,0,-x/2-m,0,E);return s(new Je(m*1.15,m*1.15,.05,8),_?y.orange:y.dark,0,-x*.45,0,E),_?s(new Ge(m*2.4,.1,m*3.4),y.dark,0,-x-m*1.6,.04,E):s(new Be(m*1.2,8,6),y.dark,0,-x-m*1.6,0,E),E},h=c(-.11,.74,.5,.075,!0),u=c(.11,.74,.5,.075,!0),f=c(-.33,1.27,.42,.06,!1),p=c(.33,1.27,.42,.06,!1);return f.rotation.z=-.12,p.rotation.z=.12,{group:e,legL:h,legR:u,armL:f,armR:p,body:o,head:a,visor:l}}var zw=new he({color:fe.enemy[0],roughness:.3,metalness:.6,flatShading:!0,emissive:1049856}),RE=new he({color:fe.enemy[1],emissive:fe.enemy[2],emissiveIntensity:.8,roughness:.2,flatShading:!0}),AE=new Ke({color:16764992});function CE(n,e,t){let i=document.createElement("canvas");i.width=128,i.height=256;let s=i.getContext("2d");s.fillStyle="#000",s.fillRect(0,0,128,256);let r=t,o=()=>(r=(r*9301+49297)%233280,r/233280),a=128/n,l=256/e;for(let h=0;h<n;h++)for(let u=0;u<e;u++)o()<.65&&(s.fillStyle=o()<.8?"#ffd9a0":"#a0d8ff",s.fillRect(h*a+a*.2,u*l+l*.25,a*.6,l*.5));let c=new rn(i);return c.colorSpace=yt,c}var Za=[];function Im(n){let e=new he({color:14210252,roughness:.5,metalness:.2,emissive:16777215,emissiveMap:CE(6,14,n),emissiveIntensity:.2});return Za.push(e),e}var Lm=[Im(7),Im(31)],Ya;function Nm(){if(Ya)return Ya;let n=document.createElement("canvas");n.width=256,n.height=128;let e=n.getContext("2d");e.fillStyle="#0a3a6a",e.fillRect(0,0,256,128),e.strokeStyle="rgba(127,230,255,.35)",e.lineWidth=1;for(let i=0;i<256;i+=16)e.beginPath(),e.moveTo(i,0),e.lineTo(i,128),e.stroke();for(let i=0;i<128;i+=16)e.beginPath(),e.moveTo(0,i),e.lineTo(256,i),e.stroke();e.fillStyle="#7fffc8";let t=[[40,40,22,16],[52,62,10,20],[70,86,12,18],[118,36,16,12],[128,56,14,26],[150,34,40,18],[176,52,22,14],[206,88,16,10],[96,24,12,8],[190,22,20,8]];for(let[i,s,r,o]of t)e.beginPath(),e.ellipse(i,s,r,o,.3,0,Math.PI*2),e.fill();return e.fillStyle="#ffffff",e.fillRect(0,0,256,6),e.fillRect(0,122,256,6),Ya=new rn(n),Ya.colorSpace=yt,Ya}Object.assign(zn,{plaza(n,e){Tn(n,7.2),q(Ye(7.2,7.4,.4,8),y.panel,0,.2,0,n),q(new un(5.4,5.8,48),y.orange,0,.42,0,n).rotation.x=-Math.PI/2,q(Ye(1.6,2,1.1,16),y.white,0,.95,0,n),q(Ye(1.65,1.65,.15,16),y.cyan,0,1.52,0,n);for(let r=0;r<6;r++){let o=r*Math.PI/3+Math.PI/6,a=q(et(2.4,.4,.7),y.panel,Math.cos(o)*5.2,.6,Math.sin(o)*5.2,n);a.rotation.y=-o+Math.PI/2,q(et(.12,3.2,.12),y.metal,Math.cos(o+.5)*6.6,1.8,Math.sin(o+.5)*6.6,n),Se(16767392,1.1,n,Math.cos(o+.5)*6.6,3.5,Math.sin(o+.5)*6.6)}let t=new le(new Be(1.5,32,20),new Ke({map:Nm(),transparent:!0,opacity:.75,blending:dt,depthWrite:!1}));t.position.y=4,n.add(t);let i=Se(6736127,5,n,0,4,0),s=new le(new Je(1.2,1.6,2.4,20,1,!0),new Ke({color:8382207,transparent:!0,opacity:.12,blending:dt,depthWrite:!1,side:qt}));s.position.y=2.7,n.add(s),e.earth=t,e.halo=i},drones(n,e){Tn(n,3.8,!0),q(et(7.4,.5,7.4),y.panel,0,.25,0,n);for(let[s,r]of[[-1.9,-1.9],[1.9,-1.9],[-1.9,1.9],[1.9,1.9]])q(Ye(1.1,1.1,.1,16),y.dark,s,.55,r,n),q(new un(.75,.9,20),y.orange,s,.62,r,n).rotation.x=-Math.PI/2;q(et(1.2,4,1.2),y.white,3,2.2,3,n),q(et(1.25,.3,1.25),y.orange,3,3.6,3,n);let t=new pe;t.position.set(3,4.6,3),n.add(t);let i=q(new Be(.9,12,6,0,Math.PI*2,0,Math.PI/3),y.white,0,0,0,t);i.rotation.x=Math.PI*.6,q(Ye(.05,.05,.8,4),y.metal,0,.1,.2,t).rotation.x=1.1,e.dish=t,e.light=Se(8382207,1.4,n,3,5.4,3)},apartment(n,e){Tn(n,4.4,!0),q(et(8,1,8),y.panel,0,.5,0,n),q(et(5,18,5),Lm[0],-1.2,10,-1.2,n),q(et(4,12,4),Lm[1],2,7,2,n),q(et(5.2,.5,5.2),y.orange,-1.2,19.2,-1.2,n),q(et(4.2,.5,4.2),y.orange,2,13.2,2,n),q(Ye(.1,.1,4,6),y.metal,-1.2,21.4,-1.2,n),e.tip=Se(16728128,1.6,n,-1.2,23.5,-1.2),q(new Be(1.6,16,8,0,Math.PI*2,0,Math.PI/2),y.glass,2,13.4,2,n).castShadow=!1},vfarm(n,e){Tn(n,4),q(Ye(3.8,4,1,16),y.panel,0,.5,0,n);let t=q(Ye(3.2,3.2,14,16),y.glass,0,8,0,n);t.castShadow=!1;for(let i=0;i<6;i++){q(Ye(3,3,.25,16),y.white,0,2+i*2.3,0,n);for(let s=0;s<7;s++){let r=s/7*Math.PI*2+i,o=q(new Ot(.4,.9,5),y.plant,Math.cos(r)*2.2,2.6+i*2.3,Math.sin(r)*2.2,n);o.castShadow=!1}}q(new Be(3.2,16,8,0,Math.PI*2,0,Math.PI/2),y.glass,0,15,0,n).castShadow=!1,e.light=Se(16737996,9,n,0,8,0)},lifehub(n,e){Tn(n,5.5),q(Ye(5.5,5.8,1.2,20),y.panel,0,.6,0,n);let t=q(new Be(4.5,20,12,0,Math.PI*2,0,Math.PI/2),y.white,0,1.2,0,n);q(new Le(4.6,.3,8,32),y.orange,0,1.6,0,n).rotation.x=Math.PI/2;for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4;q(Ye(.9,.9,5,12),y.white,Math.cos(r)*5.2,2.5,Math.sin(r)*5.2,n),q(Ye(.95,.95,.4,12),y.cyan,Math.cos(r)*5.2,4.2,Math.sin(r)*5.2,n)}let i=new pe;i.position.y=6,n.add(i);for(let s=0;s<3;s++){let r=q(et(4,.1,.6),y.dark,0,0,0,i);r.rotation.y=s*Math.PI/3}e.fan=i,e.light=Se(6741503,5,n,0,6,0)},launch(n,e){Tn(n,9,!0),q(et(18,1.2,18),y.found,0,.6,0,n),q(new un(5,6,32),y.orange,0,1.25,0,n).rotation.x=-Math.PI/2;for(let[s,r]of[[6,-1.5],[6,1.5],[9,-1.5],[9,1.5]])q(et(.4,34,.4),y.metal,s,18,r,n);for(let s=0;s<8;s++)q(et(3.4,.25,3.4),y.metal,7.5,4+s*4,0,n);q(et(4,.5,.8),y.orange,4.2,26,0,n);let t=new pe;t.position.y=1.2,n.add(t),q(Ye(2.4,2.8,24,20),y.white,0,13,0,t),q(new Ot(2.4,7,20),y.white,0,28.5,0,t),q(Ye(2.45,2.45,1.2,20),y.orange,0,20,0,t),q(Ye(2.45,2.45,.6,20),y.dark,0,8,0,t);for(let s=0;s<4;s++){let r=s*Math.PI/2,o=q(et(.4,6,3),y.panel,Math.cos(r)*2.8,3.5,Math.sin(r)*2.8,t);o.rotation.y=-r}for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4;q(Ye(.8,1.2,2,10),y.dark,Math.cos(r)*1.2,.6,Math.sin(r)*1.2,t)}let i=new le(new Ot(3,16,16,1,!0),y.flame);i.rotation.x=Math.PI,i.position.y=-8,i.visible=!1,t.add(i),e.ship=t,e.flame=i,e.tip=Se(16777215,3,t,0,32.5,0)},monument(n,e){Tn(n,6),q(Ye(6,6.5,1.5,8),y.panel,0,.75,0,n),q(Ye(4.5,5,1,8),y.white,0,2,0,n);let t=q(new Je(.6,1.8,30,4),y.white,0,17,0,n);t.rotation.y=Math.PI/4,e.rings=[];let i=[new he({color:3346688,emissive:16742954,emissiveIntensity:2}),new he({color:8755,emissive:6743807,emissiveIntensity:2}),new he({color:1127168,emissive:10551104,emissiveIntensity:2})];for(let s=0;s<3;s++){let r=q(new Le(4-s*.6,.18,8,40),i[s],0,14+s*5,0,n);r.castShadow=!1,e.rings.push(r)}e.top=Se(16777215,8,n,0,33,0)}});function km(){let n=new pe,e=q(new Be(.42,14,8),y.white,0,0,0,n);e.scale.y=.55,q(Ye(.44,.44,.08,14),y.orange,0,0,0,n);let t=[];for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4,o=Math.cos(r)*.7,a=Math.sin(r)*.7;q(et(.6,.05,.08),y.dark,o*.55,0,a*.55,n).rotation.y=-r;let l=q(Ye(.28,.28,.02,10),new Ke({color:2236962,transparent:!0,opacity:.45}),o,.08,a,n);t.push(l)}let i=Se(8382207,.9,n,0,-.2,0);return{group:n,rotors:t,eye:i}}var cf={crystal:RE,eye:AE};zn._earthTex=Nm;var Rn=1400,tt=Rn/2,ir=400,uf=Rn/ir,Gi=ir+1,Ka=Hc(fe.seed),Bc=Hc(fe.seed*7+3),Hm=Hc(fe.seed+42),xs=[],Vi,nr,Gc,Dr,zc;function PE(){let n=Kn(fe.seed);for(xs.push({x:150,z:-120,r:70,depth:16,rim:6});xs.length<fe.craters;){let e=(n()-.5)*(Rn-260),t=(n()-.5)*(Rn-260);if(Math.hypot(e,t)<130)continue;let i=10+Math.pow(n(),2.2)*85;xs.push({x:e,z:t,r:i,depth:i*(.18+n()*.12),rim:i*(.05+n()*.06)})}}var IE=0;function Fm(n,e){let t=af(Ka,n*.0016,e*.0016,5)*fe.hills,i=1-Math.abs(Bc(n*.0042,e*.0042));t+=i*i*i*fe.ridges,t+=af(Hm,n*.025,e*.025,3)*fe.detail;for(let s of xs){let r=n-s.x,o=e-s.z,a=r*r+o*o;if(a>s.r*s.r*4)continue;let l=Math.sqrt(a)/s.r;l<1&&(t-=s.depth*(1-l*l)),t+=s.rim*Math.exp(-(((l-1)/.28)**2))}return t}var Om=0;function LE(n,e){let t=Fm(n,e)-Om,i=Math.hypot(n,e);t=At(IE+Hm(n*.02,e*.02)*.6,t,Un(45,150,i));let s=Math.max(Math.abs(n),Math.abs(e)),r=tt-200;if(s>r){let o=(s-r)/200;t+=o*o*160*(.65+.35*Ka(n*.01,e*.01))}return t}function _e(n,e){let t=Si((n+tt)/uf,0,ir-.001),i=Si((e+tt)/uf,0,ir-.001),s=Math.floor(t),r=Math.floor(i),o=t-s,a=i-r,l=Vi[r*Gi+s],c=Vi[r*Gi+s+1],h=Vi[(r+1)*Gi+s],u=Vi[(r+1)*Gi+s+1];return o+a<1?l+(c-l)*o+(h-l)*a:u+(h-u)*(1-o)+(c-u)*(1-a)}function Ur(n,e,t=2){let i=_e(n,e);return Math.max(Math.abs(_e(n+t,e)-i),Math.abs(_e(n-t,e)-i),Math.abs(_e(n,e+t)-i),Math.abs(_e(n,e-t)-i))/t}function Vc(n,e,t=60){let i=0;for(let s=.2;s<=t;s+=.25){let r=n.x+e.x*s,o=n.y+e.y*s,a=n.z+e.z*s;if(o<_e(r,a)){let l=i,c=s;for(let h=0;h<8;h++){let u=(l+c)/2;n.y+e.y*u<_e(n.x+e.x*u,n.z+e.z*u)?c=u:l=u}return{dist:c,point:new T(n.x+e.x*c,n.y+e.y*c,n.z+e.z*c)}}i=s}return null}function zm(n){PE(),Om=Fm(0,0),Vi=new Float32Array(Gi*Gi),Dr=new On(Rn,Rn,ir,ir),Dr.rotateX(-Math.PI/2);let e=Dr.attributes.position;for(let s=0;s<e.count;s++){let r=LE(e.getX(s),e.getZ(s));e.setY(s,r),Vi[s]=r}nr=new Float32Array(e.count*3);let t=new me;for(let s=0;s<e.count;s++){let r=e.getX(s),o=e.getZ(s),a=Vi[s],l=s%Gi,c=s/Gi|0,h=Vi[c*Gi+Math.min(l+1,ir)]-a,u=Vi[Math.min(c+1,ir)*Gi+l]-a,f=Si(Math.hypot(h,u)/uf*1.4,0,1),p=Ka(r*.012,o*.012)*.5+.5,g=Bc(r*.08,o*.08)*.5+.5,v=fe.ground.a,x=fe.ground.b,m=fe.ground.steep,_=fe.ground.low,E=At(v[0],x[0],p),M=At(v[1],x[1],p),D=At(v[2],x[2],p);E*=.9+g*.18,M*=.9+g*.16,D*=.9+g*.14,E=At(E,m[0],f),M=At(M,m[1],f),D=At(D,m[2],f);let A=Un(-4,-16,a);if(E=At(E,_[0],A*.6),M=At(M,_[1],A*.6),D=At(D,_[2],A*.6),fe.id==="europa"){let L=Math.abs(Bc(r*.006,o*.006));if(L<.05){let I=1-L/.05;E=At(E,.55,I*.7),M=At(M,.32,I*.7),D=At(D,.24,I*.7)}}t.setRGB(E,M,D,yt),nr[s*3]=t.r,nr[s*3+1]=t.g,nr[s*3+2]=t.b}Gc=new Qt(nr.slice(),3),Dr.setAttribute("color",Gc),Dr.computeVertexNormals();let i=new he({vertexColors:!0,roughness:.93,metalness:0});return i.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},zc=new le(Dr,i),zc.receiveShadow=!0,n.add(zc),DE(n),zc}function DE(n){let e=Kn(99),t=new ri(1,0),i=t.attributes.position;for(let p=0;p<i.count;p++){let g=.75+e()*.5;i.setXYZ(p,i.getX(p)*g,i.getY(p)*g*.8,i.getZ(p)*g)}t.computeVertexNormals();let s=2600,r=new qs(t,new he({color:fe.rock,roughness:fe.id==="europa"?.35:.92,flatShading:!0,map:Bi.map,bumpMap:Bi.bumpMap,bumpScale:3}),s);r.castShadow=!0,r.receiveShadow=!0;let o=new vt,a=new cn,l=new T,c=new T,h=new Mn,u=new me,f=0;for(;f<s;){let p=(e()-.5)*(Rn-120),g=(e()-.5)*(Rn-120);if(Math.hypot(p,g)<22||Ka(p*.01,g*.01)<-.1&&e()<.7)continue;let m=e()<.06?1.8+e()*2.5:.2+Math.pow(e(),2)*1.2;l.set(m*(.8+e()*.6),m*(.6+e()*.5),m*(.8+e()*.6)),h.set(e()*.5,e()*Math.PI*2,e()*.5),a.setFromEuler(h),c.set(p,_e(p,g)+l.y*.25,g),o.compose(c,a,l),r.setMatrixAt(f,o),u.setHSL(fe.rockHSL[0]+e()*.02,fe.rockHSL[1]+e()*.2,fe.rockHSL[2]+e()*.14),r.setColorAt(f,u),m>1&&d.colliders.add({x:p,z:g,r:Math.max(l.x,l.z)*.85,kind:"rock"}),f++}n.add(r),fe.id==="kepler"&&kE(n,e)}var UE=new me().setRGB(.3,.46,.2,yt),NE=new me().setRGB(.46,.5,.26,yt),hf=new me().setRGB(.2,.38,.52,yt);function df(n,e){let t=Dr.attributes.position,i=Gc.array,s=60+e*520;for(let r=0;r<t.count;r++){let o=t.getX(r),a=t.getZ(r),l=Vi[r],c=0;for(let p of n){let g=Math.hypot(o-p.x,a-p.z);c=Math.max(c,Un(s,s*.55,g))}let h=nr[r*3],u=nr[r*3+1],f=nr[r*3+2];if(c>0){let p=Bc(o*.03,a*.03)*.5+.5,g=c*Si(p*1.4-.1,0,1)*Si(e*1.5,0,1),v=p>.6?UE:NE;if(h=At(h,v.r,g),u=At(u,v.g,g),f=At(f,v.b,g),l<-9&&e>.5){let x=c*Un(-9,-13,l)*Un(.5,1,e);h=At(h,hf.r,x),u=At(u,hf.g,x),f=At(f,hf.b,x)}}i[r*3]=h,i[r*3+1]=u,i[r*3+2]=f}Gc.needsUpdate=!0}function Bm(n=350){let e=document.createElement("canvas");e.width=e.height=n;let t=e.getContext("2d"),i=t.createImageData(n,n);for(let s=0;s<n;s++)for(let r=0;r<n;r++){let o=(r/n-.5)*Rn,a=(s/n-.5)*Rn,l=_e(o,a),c=_e(o+4,a+4)-l,h=Si(.55+l*.006-c*.08,.15,1),u=(s*n+r)*4,f=fe.ground.b;i.data[u]=255*f[0]*h,i.data[u+1]=255*f[1]*h,i.data[u+2]=255*f[2]*h,i.data[u+3]=255}return t.putImageData(i,0,0),e}var ff=new he({color:8010400,emissive:4259776,emissiveIntensity:.1,roughness:.6,flatShading:!0});function kE(n,e){let t=new Je(.25,.45,1,6);t.translate(0,.5,0);let i=new Be(1,8,5,0,Math.PI*2,0,Math.PI/2),s=900,r=new qs(t,new he({color:14209208,roughness:.8,flatShading:!0}),s),o=new qs(i,ff,s);r.castShadow=o.castShadow=!0;let a=new vt,l=new cn,c=new T,h=new T,u=new me,f=0;for(;f<s;){let p=(e()-.5)*(Rn-300),g=(e()-.5)*(Rn-300);if(Math.hypot(p,g)<50||Ka(p*.008,g*.008)<.05||Ur(p,g,2)>.5)continue;let v=3+e()*9,x=1.5+e()*3,m=_e(p,g);c.set(1+v*.05,v,1+v*.05),h.set(p,m-.2,g),l.identity(),a.compose(h,l,c),r.setMatrixAt(f,a),c.set(x,x*.5,x),h.set(p,m+v-.3,g),a.compose(h,l,c),o.setMatrixAt(f,a),u.setHSL(.72+e()*.2,.6,.4+e()*.2),o.setColorAt(f,u),d.colliders.add({x:p,z:g,r:.6,kind:"flora"}),f++}n.add(r,o)}var Wc=6e3,Wi=60,sr,Ja,mf,pf=new T(1e9,0,0),Gm=new vt,Vm=new cn,Wm=new T,$m=new T,Xm=new Mn;function qm(){let n=new ri(.12,0),e=new he({color:16777215,roughness:.95,flatShading:!0,map:Bi.map});sr=new qs(n,e,Wc),sr.receiveShadow=!0,sr.frustumCulled=!1;let t=Kn(31);Ja=new Float32Array(Wc*2),mf=[];let i=new me;for(let s=0;s<Wc;s++){Ja[s*2]=t()*Wi*2,Ja[s*2+1]=t()*Wi*2;let r=Math.pow(t(),3);mf.push([.4+r*3.2,.25+t()*.6,.4+r*3,t()*6.28,t()*.6]),i.setHSL(fe.rockHSL[0]+t()*.03,fe.rockHSL[1]*(.5+t()*.5),Math.min(.75,fe.rockHSL[2]*(1.2+t()*.9))),sr.setColorAt(s,i)}d.scene.add(sr)}function Ym(){if(!sr)return;let n=d.player.pos;if(Math.abs(n.x-pf.x)<3&&Math.abs(n.z-pf.z)<3)return;pf.copy(n);let e=n.x-Wi,t=n.z-Wi;for(let i=0;i<Wc;i++){let s=e+((Ja[i*2]-e)%(Wi*2)+Wi*2)%(Wi*2),r=t+((Ja[i*2+1]-t)%(Wi*2)+Wi*2)%(Wi*2),o=mf[i];Wm.set(o[0],o[0]*o[1],o[2]),Xm.set(o[4],o[3],0),Vm.setFromEuler(Xm),$m.set(s,_e(s,r)+.02,r),Gm.compose($m,Vm,Wm),sr.setMatrixAt(i,Gm)}sr.instanceMatrix.needsUpdate=!0}var HE=540,Qa,Oo,oi,zo,gf,el,xf,ar,tl=(n,e,t)=>new me().setRGB(n,e,t,yt),rr=fe.sky,or=n=>tl(n[0],n[1],n[2]),$i={dayTop:or(rr.dayTop),dayHor:or(rr.dayHor),setTop:or(rr.setTop),setHor:or(rr.setHor),nightTop:or(rr.nightTop),nightHor:or(rr.nightHor),earthTop:tl(.22,.44,.82),earthHor:tl(.68,.8,.92),stormHor:or(rr.storm),halo:or(rr.halo)},Xi={},yf,Zm,jm,$c=null,Km=0,vf={mars:[.35,[.2,.9,.7],[.3,.5,1]],europa:[.6,[.4,.6,1],[.8,.4,1]],kepler:[1,[.3,1,.5],[.9,.3,.9]]}[fe.id],ys;function FE(n){let e=new Je(1700,1700,900,160,1,!0,-1.2,2.6);ys=new le(e,new sn({uniforms:{uT:{value:0},uI:{value:0},uC1:{value:new me(...vf[1])},uC2:{value:new me(...vf[2])}},vertexShader:`uniform float uT; varying vec2 vUv;
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
      }`,transparent:!0,blending:dt,depthWrite:!1,side:qt,fog:!1})),ys.position.y=700,ys.rotation.y=2.2,ys.frustumCulled=!1,ys.renderOrder=-8,n.add(ys)}var OE=tl(.36,.42,.62),zE=tl(.75,.65,.55),ja=new me,Jm=new me,Ti=new T;function Qm(n){ar=new sn({uniforms:{uTop:{value:new me},uHor:{value:new me},uSunDir:{value:new T(0,1,0)},uSunCol:{value:new me(1,.95,.85)},uHalo:{value:new me},uSunVis:{value:1}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`
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
      }`,side:Sn,depthWrite:!1}),Qa=new le(new Be(4e3,32,16),ar),Qa.frustumCulled=!1,Qa.renderOrder=-10,n.add(Qa),FE(n);let e=new Rt,t=[],i=[];for(let o=0;o<2600;o++){let a=Math.random()*2-1,l=Math.random()*Math.PI*2,c=Math.sqrt(1-a*a);if(a<-.05)continue;t.push(c*Math.cos(l)*3500,a*3500,c*Math.sin(l)*3500);let h=.35+Math.random()*.45,u=Math.random();i.push(h*(u>.8?1:.85),h*.9,h*(u<.2?1:.95))}t.push(-1800,1500,-2400),i.push(.5,.75,1.4),e.setAttribute("position",new Qe(t,3)),e.setAttribute("color",new Qe(i,3)),Oo=new ii(e,new Yn({size:3,map:Jn(),sizeAttenuation:!1,vertexColors:!0,transparent:!0,depthWrite:!1,fog:!1})),Oo.frustumCulled=!1,Oo.renderOrder=-9,n.add(Oo);let s=new he({color:9076080,roughness:1,fog:!1,flatShading:!0});if(el=new le(new Dn(60,1),s),el.scale.set(1.3,.9,1),xf=new le(new Dn(24,1),s),fe.extras==="moons"&&n.add(el,xf),fe.extras==="jupiter"){let o=document.createElement("canvas");o.width=512,o.height=256;let a=o.getContext("2d"),l=["#e8d8c0","#c89a70","#f0e6d4","#b07850","#e0c8a8","#9a6a48","#efe2cc","#c8a07a","#e6d6bc"];for(let p=0;p<256;p++)a.fillStyle=l[Math.floor(p/256*l.length*2+Math.sin(p*.3)*.6)%l.length],a.fillRect(0,p,512,1);a.globalAlpha=.25;for(let p=0;p<400;p++)a.fillStyle=l[p%l.length],a.fillRect(Math.random()*512,Math.random()*256,30+Math.random()*80,2);a.globalAlpha=1,a.fillStyle="#b8583a",a.beginPath(),a.ellipse(330,165,34,16,0,0,Math.PI*2),a.fill();let c=new rn(o);c.colorSpace=yt;let h=new le(new Be(900,48,32),new Ke({map:c,fog:!1}));h.rotation.z=.06;let u=new le(new Be(905,48,32,Math.PI*.55,Math.PI),new Ke({color:0,transparent:!0,opacity:.55,fog:!1}));h.add(u);let f=new le(new Dn(30,2),new Ke({color:15257712,fog:!1}));n.add(h,f),Xi={jup:h,io:f}}if(fe.extras==="twinsuns"){let o=new Oi(new _i({map:Jn(),color:16751200,transparent:!0,blending:dt,depthWrite:!1,fog:!1}));o.scale.set(500,500,1);let a=new le(new un(700,1100,64),new Ke({color:14207231,transparent:!0,opacity:.35,side:qt,fog:!1,depthWrite:!1})),l=new le(new Be(420,32,24),new Ke({color:9075408,fog:!1}));l.add(a),a.rotation.x=1.2,n.add(o,l),Xi={s2:o,gas:l}}oi=new zi(16773341,3),oi.castShadow=!0,oi.shadow.mapSize.set(d.hiShadows?4096:2048,d.hiShadows?4096:2048);let r=oi.shadow.camera;r.left=-70,r.right=70,r.top=70,r.bottom=-70,r.near=1,r.far=400,oi.shadow.bias=-4e-4,oi.shadow.normalBias=.6,n.add(oi,oi.target),zo=new Ks(16765616,5909530,1),gf=new Rc(4213360,.3),n.add(zo,gf),n.fog=new mc(14196848,.0016),yf=new Fi,Zm=new le(new Be(400,32,16),ar),yf.add(Zm),jm=new Co(d.renderer)}function nl(n,e){let t=d.time,i=t.t;t.t+=n/HE*(t.elevation<0?1.5:1),t.t>=1&&(t.t-=1),i<.25&&t.t>=.25&&(t.day++,t.dawn=!0);let s=(t.t-.25)*Math.PI*2;Ti.set(Math.cos(s),Math.sin(s),.35).normalize();let r=Ti.y;t.elevation=r,t.night=Un(.05,-.18,r);let o=Un(0,1,d.terraform),a=d.storm,l=Un(-.05,.35,r),c=1-Math.abs(Si((r-.05)/.3,-1,1));ja.copy($i.dayTop).lerp($i.earthTop,o),Jm.copy($i.dayHor).lerp($i.earthHor,o);let h=ar.uniforms.uTop.value,u=ar.uniforms.uHor.value;h.copy($i.nightTop).lerp($i.setTop,Un(-.25,0,r)).lerp(ja,l),u.copy($i.nightHor).lerp($i.setHor,Un(-.25,0,r)).lerp(Jm,l),a>0&&(ja.copy($i.stormHor).multiplyScalar(.25+.75*(1-t.night)),h.lerp(ja,a*.85),u.lerp(ja,a)),ar.uniforms.uHalo.value.copy($i.halo).multiplyScalar(Si(c,0,1)*(1-o*.5)*(1-a)),ar.uniforms.uSunDir.value.copy(Ti),ar.uniforms.uSunVis.value=Un(-.08,.02,r)*(1-a*.85),Qa.position.copy(e),Oo.position.copy(e),ys.position.set(e.x,e.y+700,e.z),ys.material.uniforms.uT.value=performance.now()*.001,ys.material.uniforms.uI.value=vf[0]*t.night*(1-a)*(.75+.25*Math.sin(performance.now()*7e-5+t.day)),Oo.material.opacity=Math.max(t.night,fe.id==="europa"?.85:0)*(1-a);let f=d.time.t*Math.PI*6,p=-d.time.t*Math.PI*2+2;if(el.position.set(e.x+Math.cos(f)*2600,e.y+Math.sin(f)*1700+300,e.z-1300),el.lookAt(e),xf.position.set(e.x+Math.cos(p)*2800,e.y+Math.sin(p)*2200,e.z+1600),Xi.jup){Xi.jup.position.set(e.x-1800,e.y+650,e.z-2600),Xi.jup.rotation.y+=4e-5;let x=d.time.t*Math.PI*8;Xi.io.position.set(e.x-1800+Math.cos(x)*1400,e.y+650+Math.sin(x)*300,e.z-2600+Math.sin(x)*1400)}Xi.s2&&(Xi.s2.position.copy(e).addScaledVector(new T(Ti.x*.8-.3,Ti.y*.9-.05,Ti.z+.4).normalize(),3e3),Xi.s2.material.opacity=Un(-.2,.05,r)*.9,Xi.gas.position.set(e.x+1600,e.y+1100,e.z+2400));let g=Un(-.04,.25,r);oi.intensity=3*g*(1-a*.6),oi.color.setRGB(1,At(.7,.93,g),At(.55,.85,g)),oi.position.copy(e).addScaledVector(Ti,200),oi.target.position.copy(e),zo.intensity=At(.45,.8,l)*(1-a*.3),zo.color.copy(u).lerp(h,.3).lerp(OE,t.night*.85),fe.id==="europa"&&zo.color.lerp(zE,.6),zo.groundColor.setRGB(At(.05,.38,l),At(.04,.18,l),At(.05,.1,l)),gf.intensity=At(.8,.2,l),d.scene.fog.color.copy(u),d.scene.fog.density=At(At(.0016,.0032,t.night),.03,a)*(fe.id==="europa"?.55:1);let v=performance.now();if(v-Km>4e3||!$c){Km=v;let x=$c;$c=jm.fromScene(yf,.04,1,1e3),d.scene.environment=$c.texture,d.scene.environmentIntensity=At(.85,.35,t.night),x&&x.dispose()}d.renderer.toneMappingExposure=At(1,1.4,t.night)}function Mf(){let n=Math.floor(d.time.t*24.66),e=Math.floor((d.time.t*24.66-n)*60);return`${fe.name} \xB7 \u7B2C ${d.time.day} \u65E5 \xB7 ${String(n).padStart(2,"0")}:${String(e).padStart(2,"0")}`}var Bo=[],BE=new Zs(.22,0),qc=class{constructor(e,t,i,s){this.max=t,this.n=0,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*4),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.base=new Float32Array(t*4),this.grav=new Float32Array(t),this.drag=new Float32Array(t);let r=new Rt;this.pa=new Qt(this.pos,3),this.ca=new Qt(this.col,4),this.pa.setUsage(Qd),this.ca.setUsage(Qd),r.setAttribute("position",this.pa),r.setAttribute("color",this.ca),this.mat=new Yn({size:s,map:Jn(),vertexColors:!0,transparent:!0,depthWrite:!1,blending:i?dt:Hi,sizeAttenuation:!0}),this.points=new ii(r,this.mat),this.points.frustumCulled=!1,e.add(this.points)}emit(e,t,i,s,r,o,a,l,c,h,u,f=0,p=0){let g=this.n<this.max?this.n++:Math.floor(Math.random()*this.max);this.pos[g*3]=e,this.pos[g*3+1]=t,this.pos[g*3+2]=i,this.vel[g*3]=s,this.vel[g*3+1]=r,this.vel[g*3+2]=o,this.base[g*4]=a,this.base[g*4+1]=l,this.base[g*4+2]=c,this.base[g*4+3]=h,this.life[g]=u,this.maxLife[g]=u,this.grav[g]=f,this.drag[g]=p}update(e){let t=this.n;for(let i=0;i<t;i++){if(this.life[i]-=e,this.life[i]<=0){if(t--,i!==t){for(let o=0;o<3;o++)this.pos[i*3+o]=this.pos[t*3+o],this.vel[i*3+o]=this.vel[t*3+o];for(let o=0;o<4;o++)this.base[i*4+o]=this.base[t*4+o];this.life[i]=this.life[t],this.maxLife[i]=this.maxLife[t],this.grav[i]=this.grav[t],this.drag[i]=this.drag[t],i--}continue}let s=1-this.drag[i]*e;this.vel[i*3]*=s,this.vel[i*3+2]*=s,this.vel[i*3+1]=this.vel[i*3+1]*s-this.grav[i]*e,this.pos[i*3]+=this.vel[i*3]*e,this.pos[i*3+1]+=this.vel[i*3+1]*e,this.pos[i*3+2]+=this.vel[i*3+2]*e;let r=this.life[i]/this.maxLife[i];this.col[i*4]=this.base[i*4],this.col[i*4+1]=this.base[i*4+1],this.col[i*4+2]=this.base[i*4+2],this.col[i*4+3]=this.base[i*4+3]*Math.min(1,r*2.5)}this.n=t,this.points.geometry.setDrawRange(0,t),this.pa.needsUpdate=!0,this.ca.needsUpdate=!0}},Nr,Yc,kr,Go;function eg(n){Nr=new qc(n,3e3,!0,.35),Yc=new qc(n,2500,!1,1.6);let e=new Rt,t=new Float32Array(1500*3);for(let r=0;r<t.length;r++)t[r]=(Math.random()-.5)*80;e.setAttribute("position",new Qt(t,3)),kr=new ii(e,new Yn({size:.25,map:Jn(),color:16765088,transparent:!0,opacity:.5,depthWrite:!1})),kr.frustumCulled=!1,n.add(kr);let i=new Rt,s=new Float32Array(3e3*3);for(let r=0;r<s.length;r++)s[r]=(Math.random()-.5)*70;i.setAttribute("position",new Qt(s,3)),Go=new ii(i,new Yn({size:.18,map:Jn(),color:12574975,transparent:!0,opacity:0,depthWrite:!1})),Go.frustumCulled=!1,n.add(Go)}var Ee={debris(n,e,t=8,i=7,s=1){for(let r=0;r<t;r++){if(Bo.length>160){let h=Bo.shift();d.scene.remove(h.m)}let o=new le(BE,e);o.castShadow=!0;let a=s*(.5+Math.random()*.9);o.scale.set(a,a*(1+Math.random()),a),o.position.copy(n),d.scene.add(o);let l=Math.random()*Math.PI*2,c=.4+Math.random()*.8;Bo.push({m:o,v:new T(Math.cos(l)*i*(1-c*.5),i*c,Math.sin(l)*i*(1-c*.5)),w:new T(Math.random()*10,Math.random()*10,Math.random()*10),life:3+Math.random()*2,s:a})}},spark(n,e=[1,.6,.2],t=6,i=4,s=.5){for(let r=0;r<t;r++)Nr.emit(n.x,n.y,n.z,(Math.random()-.5)*i,Math.random()*i,(Math.random()-.5)*i,e[0],e[1],e[2],1,s*(.5+Math.random()),6,1)},burst(n,e=[1,.5,.2],t=40,i=9){for(let s=0;s<t;s++){let r=Math.random()*2-1,o=Math.random()*6.283,a=Math.sqrt(1-r*r),l=i*(.4+Math.random()*.6);Nr.emit(n.x,n.y,n.z,a*Math.cos(o)*l,r*l,a*Math.sin(o)*l,e[0],e[1],e[2],1,.4+Math.random()*.6,4,2)}},dustPuff(n,e=10,t=2,i=[.72,.45,.3]){for(let s=0;s<e;s++)Yc.emit(n.x+(Math.random()-.5)*t,n.y+Math.random()*.5,n.z+(Math.random()-.5)*t,(Math.random()-.5)*3,Math.random()*1.5,(Math.random()-.5)*3,i[0],i[1],i[2],.55,1.2+Math.random(),-.2,1.5)},ring(n,e,t=60,i=[.72,.45,.3]){for(let s=0;s<t;s++){let r=s/t*6.283,o=6+Math.random()*6;Yc.emit(n.x+Math.cos(r)*e,n.y+.4,n.z+Math.sin(r)*e,Math.cos(r)*o,.5+Math.random(),Math.sin(r)*o,i[0],i[1],i[2],.6,1.5+Math.random(),-.1,1.2)}},trail(n,e,t=1){Nr.emit(n.x,n.y,n.z,(Math.random()-.5)*.4,(Math.random()-.5)*.4,(Math.random()-.5)*.4,e[0]*t,e[1]*t,e[2]*t,1,.18,0,0)},flame(n,e=1){Nr.emit(n.x+(Math.random()-.5)*.6,n.y,n.z+(Math.random()-.5)*.6,(Math.random()-.5)*2,-6*e-Math.random()*6,(Math.random()-.5)*2,1,.55,.2,1,.35,0,0)},rise(n,e,t=6){Nr.emit(n.x+(Math.random()-.5)*t,n.y,n.z+(Math.random()-.5)*t,0,6+Math.random()*6,0,e[0],e[1],e[2],1,2.5,-.5,0)}},Xc=0;function il(n,e){Nr.update(n),Yc.update(n);for(let o=Bo.length-1;o>=0;o--){let a=Bo[o];a.life-=n,a.v.y-=9*n,a.m.position.addScaledVector(a.v,n),a.m.rotation.x+=a.w.x*n,a.m.rotation.y+=a.w.y*n,a.m.rotation.z+=a.w.z*n;let l=_e(a.m.position.x,a.m.position.z)+.1;a.m.position.y<l&&(a.m.position.y=l,a.v.y=Math.abs(a.v.y)*.35,a.v.x*=.6,a.v.z*=.6,a.w.multiplyScalar(.5)),a.life<1&&a.m.scale.setScalar(Math.max(.001,a.s*a.life)),a.life<=0&&(d.scene.remove(a.m),Bo.splice(o,1))}let t=d.storm,i=kr.geometry.attributes.position,s=i.array,r=1+t*26;for(let o=0;o<s.length;o+=3){s[o]+=r*n,s[o+1]+=Math.sin(o+performance.now()*5e-4)*n*.2-t*n*1.5;let a=40;s[o]-e.x>a&&(s[o]-=2*a),s[o]-e.x<-a&&(s[o]+=2*a),s[o+1]-e.y>a/2&&(s[o+1]-=a),s[o+1]-e.y<-a/2&&(s[o+1]+=a),s[o+2]-e.z>a&&(s[o+2]-=2*a),s[o+2]-e.z<-a&&(s[o+2]+=2*a)}if(i.needsUpdate=!0,kr.material.size=.25+t*.3,kr.material.opacity=.3+t*.25,kr.material.color.setRGB(1,.8-d.time.night*.4,.62-d.time.night*.3),Xc+=((d.raining?1:0)-Xc)*n*.5,Go.material.opacity=Xc*.6,Xc>.01){let o=Go.geometry.attributes.position.array;for(let a=0;a<o.length;a+=3)o[a+1]-=22*n,o[a]+=2*n,o[a+1]<e.y-20&&(o[a+1]+=40),o[a]-e.x>35&&(o[a]-=70),o[a]-e.x<-35&&(o[a]+=70),o[a+2]-e.z>35&&(o[a+2]-=70),o[a+2]-e.z<-35&&(o[a+2]+=70);Go.geometry.attributes.position.needsUpdate=!0}}var Zc=null,st,lr,Hr,sl,rl,Fr,ol,Kc,J={enabled:!0,init(){if(st){st.resume();return}try{st=new(window.AudioContext||window.webkitAudioContext)}catch{return}lr=st.createGain(),lr.gain.value=.7,lr.connect(st.destination),Hr=st.createGain(),Hr.gain.value=.8,Hr.connect(lr),sl=st.createGain(),sl.gain.value=.22,sl.connect(lr),Kc=st.createBuffer(1,st.sampleRate*2,st.sampleRate);let n=Kc.getChannelData(0),e=0;for(let i=0;i<n.length;i++){let s=Math.random()*2-1;e=(e+.02*s)/1.02,n[i]=e*3.5}let t=st.createBufferSource();t.buffer=Kc,t.loop=!0,Fr=st.createBiquadFilter(),Fr.type="bandpass",Fr.frequency.value=400,Fr.Q.value=.6,rl=st.createGain(),rl.gain.value=.15,t.connect(Fr),Fr.connect(rl),rl.connect(lr),t.start(),this.musicLoop()},setVolume(n){lr&&(lr.gain.value=n)},update(n,e){if(!st)return;let t=st.currentTime;rl.gain.setTargetAtTime(.1+n*.6+e*.04,t,.5),Fr.frequency.setTargetAtTime(300+n*500+Math.sin(t*.3)*120,t,.8)},tone(n,e,t="sine",i=.3,s=0,r=0,o){if(!st)return;let a=st.currentTime+r,l=st.createOscillator(),c=st.createGain();l.type=t,l.frequency.setValueAtTime(n,a),s&&l.frequency.exponentialRampToValueAtTime(Math.max(20,n*s),a+e),c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(i,a+.01),c.gain.exponentialRampToValueAtTime(1e-4,a+e),l.connect(c),c.connect(o||Hr),l.start(a),l.stop(a+e+.05)},noise(n,e=1e3,t=.3,i="lowpass",s=0,r=1){if(!st)return;let o=st.currentTime+s,a=st.createBufferSource();a.buffer=Kc;let l=st.createBiquadFilter();l.type=i,l.frequency.value=e,l.Q.value=r;let c=st.createGain();c.gain.setValueAtTime(t,o),c.gain.exponentialRampToValueAtTime(1e-4,o+n),a.connect(l),l.connect(c),c.connect(Hr),a.start(o,Math.random()),a.stop(o+n+.05)},play(n){if(st)switch(n){case"step":this.noise(.12,500+Math.random()*200,.12,"lowpass");break;case"jump":this.noise(.2,400,.15);break;case"land":this.noise(.25,300,.25);break;case"mine":this.tone(180+Math.random()*60,.08,"square",.04),this.noise(.08,2400,.06,"highpass");break;case"pickup":this.tone(880,.08,"sine",.08),this.tone(1320,.1,"sine",.06,0,.05);break;case"deplete":this.noise(.5,900,.3),this.tone(220,.4,"triangle",.15,.5);break;case"shoot":this.tone(900,.15,"sawtooth",.12,.25),this.noise(.1,3e3,.08,"highpass");break;case"turret":this.tone(700,.12,"square",.05,.3);break;case"hit":this.tone(300,.1,"square",.08,.5);break;case"kill":this.noise(.6,1600,.3,"bandpass",0,.8),this.tone(120,.5,"sawtooth",.12,.3);break;case"hurt":this.tone(160,.25,"sawtooth",.15,.6);break;case"place":this.tone(220,.15,"triangle",.2),this.tone(330,.15,"triangle",.2,0,.1),this.tone(440,.3,"triangle",.2,0,.2),this.noise(.4,600,.2);break;case"ui":this.tone(880,.05,"sine",.07),this.tone(1320,.08,"sine",.04,0,.03);break;case"scan":this.tone(300,1.2,"sine",.12,4),this.tone(600,.9,"triangle",.05,3,.1),this.noise(.8,2e3,.05,"bandpass",0,3);break;case"shutter":this.noise(.06,4e3,.25,"highpass"),this.noise(.1,1500,.15,"bandpass",.07);break;case"tick":this.tone(2400,.02,"sine",.025);break;case"open":this.tone(440,.12,"sine",.05,1.5),this.noise(.15,3e3,.03,"highpass");break;case"achv":[523,784,1046,1568].forEach((e,t)=>this.tone(e,.9,"triangle",.09,0,t*.09));break;case"deny":this.tone(200,.15,"square",.06),this.tone(150,.2,"square",.06,0,.1);break;case"craft":[523,659,784,1046].forEach((e,t)=>this.tone(e,.25,"triangle",.12,0,t*.08));break;case"radio":this.noise(.15,2500,.12,"bandpass",0,2),this.tone(1200,.05,"sine",.06,0,.12);break;case"alarm":this.tone(880,.18,"square",.06),this.tone(660,.18,"square",.06,0,.2);break;case"objective":[392,523,659].forEach((e,t)=>this.tone(e,.5,"sine",.15,0,t*.12));break;case"chapter":[262,330,392,523,659].forEach((e,t)=>this.tone(e,1.2,"sine",.12,0,t*.15));break;case"rumble":this.noise(4,150,.6),this.noise(3,400,.25,"lowpass",.5);break;case"jet":this.noise(.12,800,.1,"bandpass");break;case"night":this.tone(110,3,"sine",.12,.8),this.tone(165,3,"sine",.08,.8,.3);break}},engine(n){if(st&&(n>0||Zc)){if(!Zc){let i=st.createOscillator(),s=st.createOscillator(),r=st.createBiquadFilter(),o=st.createGain();i.type="sawtooth",s.type="triangle",r.type="lowpass",r.frequency.value=500,o.gain.value=1e-4,i.connect(r),s.connect(r),r.connect(o),o.connect(Hr),i.start(),s.start(),Zc={o:i,o2:s,f:r,g:o}}let e=st.currentTime,t=Zc;t.o.frequency.setTargetAtTime(38+n*70,e,.1),t.o2.frequency.setTargetAtTime(76+n*140,e,.1),t.f.frequency.setTargetAtTime(300+n*900,e,.1),t.g.gain.setTargetAtTime(n>0||d.driving?.03+n*.05:1e-4,e,.15)}},laser(n){if(st){if(n&&!ol){let e=st.createOscillator(),t=st.createOscillator(),i=st.createGain(),s=st.createBiquadFilter();e.type="sawtooth",e.frequency.value=110,t.type="square",t.frequency.value=113,s.type="lowpass",s.frequency.value=900,i.gain.value=1e-4,i.gain.exponentialRampToValueAtTime(.06,st.currentTime+.1),e.connect(s),t.connect(s),s.connect(i),i.connect(Hr),e.start(),t.start(),ol={o:e,o2:t,g:i}}else if(!n&&ol){let e=ol;ol=null,e.g.gain.setTargetAtTime(1e-4,st.currentTime,.04),e.o.stop(st.currentTime+.2),e.o2.stop(st.currentTime+.2)}}},musicLoop(){let n=[[220,277.2,329.6,415.3],[196,246.9,293.7,392],[174.6,220,261.6,349.2],[164.8,207.7,246.9,329.6],[146.8,220,293.7,370]],e=0,t=()=>{if(!st)return;let i=n[e++%n.length],s=st.currentTime;if(i.forEach((r,o)=>{let a=st.createOscillator(),l=st.createGain();a.type=o===0?"triangle":"sine",a.frequency.value=r*(o===0?.5:1),a.detune.value=(Math.random()-.5)*8,l.gain.setValueAtTime(1e-4,s),l.gain.exponentialRampToValueAtTime(.06,s+3),l.gain.exponentialRampToValueAtTime(1e-4,s+11),a.connect(l),l.connect(sl),a.start(s),a.stop(s+11.5)}),Math.random()<.7){let r=i[1+Math.floor(Math.random()*3)]*2;for(let o=0;o<3;o++)Math.random()<.6&&this.tone(r*[1,1.122,1.335][o],2.5,"sine",.025,0,2+o*1.6,sl)}setTimeout(t,9e3)};t()}};var al={iron:new he({color:6965822,roughness:.4,metalness:.8,flatShading:!0,map:Bi.map,bumpMap:Bi.bumpMap,bumpScale:4}),ironVein:new he({color:10246714,roughness:.3,metalness:.9,flatShading:!0,emissive:3806216}),ice:new he({color:13627135,roughness:.08,metalness:.1,flatShading:!0,transparent:!0,opacity:.9,emissive:1456202}),silicon:new he({color:15983014,roughness:.15,metalness:.4,flatShading:!0,emissive:2761224}),titanium:new he({color:10194175,roughness:.1,metalness:.5,flatShading:!0,emissive:5913855,emissiveIntensity:.6}),base:new he({color:8276790,roughness:.95,flatShading:!0,map:Bi.map,bumpMap:Bi.bumpMap,bumpScale:4})},tg={iron:null,ice:8969727,silicon:16770720,titanium:9071871},vs={iron:[1,.55,.3],ice:[.6,.9,1],silicon:[1,.9,.55],titanium:[.7,.55,1]};function GE(n,e,t){let i=new Ot(t,e,5,1);i.translate(0,e/2,0);let s=new le(i,n);return s.castShadow=!0,s}function VE(n,e){let t=new pe;if(n==="iron")for(let i=0;i<4;i++){let s=new le(new ri(.6+e()*.7,0),i===0?al.ironVein:al.iron);s.position.set((e()-.5)*1.8,.3+e()*.4,(e()-.5)*1.8),s.rotation.set(e()*3,e()*3,e()*3),s.scale.y=.8,s.castShadow=!0,t.add(s)}else{let i=new le(new ri(1.1,0),al.base);i.scale.set(1.2,.45,1.2),i.castShadow=!0,t.add(i);let s=n==="titanium"?6:7;for(let r=0;r<s;r++){let o=GE(al[n],.8+e()*(n==="ice"?1.6:1.9),.18+e()*.22),a=e()*6.28,l=e()*.8;o.position.set(Math.cos(a)*l,.2,Math.sin(a)*l),o.rotation.set((e()-.5)*.9,e()*3,(e()-.5)*.9),t.add(o)}tg[n]&&t.add(Se(tg[n],n==="titanium"?5:3,null,0,1.2,0))}return t}var ng=Math.random;function Wo(n,e,t,i){let s=VE(n,ng),r=_e(e,t);s.position.set(e,r,t),s.rotation.y=ng()*6.28,d.scene.add(s);let o=i??{iron:30,ice:25,silicon:25,titanium:14}[n],a={type:n,x:e,z:t,y:r,amount:o,max:o,mesh:s,r:1.6};return a.collider=d.colliders.add({x:e,z:t,r:1.3,kind:"node"}),d.nodes.push(a),a}function ig(n,e){for(let t=0;t<200;t++){let i,s;if(n==="ice"&&Math.random()<.75){let o=xs[Math.floor(Math.random()*Math.min(xs.length,30))],a=Math.random()*6.28,l=Math.random()*o.r*.7;i=o.x+Math.cos(a)*l,s=o.z+Math.sin(a)*l}else if(e){let o=Math.random()*6.28,a=e[0]+Math.random()*(e[1]-e[0]);i=Math.cos(o)*a,s=Math.sin(o)*a}else i=(Math.random()-.5)*(2*tt-300),s=(Math.random()-.5)*(2*tt-300);let r=Math.hypot(i,s);if(!(n==="titanium"&&r<260)&&!(r<18)&&!(Math.abs(i)>tt-160||Math.abs(s)>tt-160)&&!(Ur(i,s,2)>.6)&&!d.colliders.overlaps(i,s,3))return[i,s]}return null}function sg(){let n=[["iron",22,8],["iron",-18,20],["iron",30,-25],["silicon",-26,-14],["silicon",12,34],["ice",40,10],["iron",-40,-38],["silicon",45,42]];for(let[t,i,s]of n)Wo(t,i,s);let e={iron:70,silicon:50,ice:40,titanium:22};for(let t in e)for(let i=0;i<e[t];i++){let s=ig(t,t==="titanium"?null:i<e[t]*.35?[40,220]:null);s&&Wo(t,s[0],s[1])}}function rg(n){d.scene.remove(n.mesh),d.colliders.remove(n.collider);let e=d.nodes.indexOf(n);e>=0&&d.nodes.splice(e,1)}var Vo=[];function Jc(n,e){n.amount-=e;let t=.35+.65*Math.max(0,n.amount/n.max);if(n.mesh.scale.setScalar(t),n.amount<=0){let i=n.mesh.position.clone();i.y+=1,Ee.burst(i,vs[n.type],40,7);let s=n.mesh.children.find(r=>r.isMesh&&r!==n.mesh.children[0])?.material||n.mesh.children[0].material;return Ee.debris(i,s,9,5,1.1),Ee.dustPuff(i,16,3),rg(n),Vo.push({type:n.type,t:90+Math.random()*60}),!0}return!1}function og(n){for(let t=Vo.length-1;t>=0;t--)if(Vo[t].t-=n,Vo[t].t<=0){let i=Vo[t].type;Vo.splice(t,1);let s=ig(i,i==="titanium"?null:[60,400]);s&&Wo(i,s[0],s[1])}let e=1+Math.sin(performance.now()*.002)*.15;al.titanium.emissiveIntensity=.5*e}function ag(){return d.nodes.map(n=>[n.type,+n.x.toFixed(1),+n.z.toFixed(1),Math.round(n.amount)])}function lg(n){for(let e of[...d.nodes])rg(e);for(let[e,t,i,s]of n){let r=Wo(e,t,i);r.amount=s,r.mesh.scale.setScalar(.35+.65*s/r.max)}}var kn=[{name:"\u524D\u54E8\u7AD9",pop:0,b:0,r:75},{name:"\u5B9A\u5C45\u70B9",pop:4,b:6,r:120},{name:"\u5C0F\u9547",pop:12,b:14,r:175},{name:"\u57CE\u5E02",pop:24,b:22,r:240},{name:"\u5927\u90FD\u4F1A",pop:36,b:32,r:310},{name:"\u661F\u6E2F",pop:50,b:42,r:390}],Ri={x:0,z:0},$o,jc,Xo=0;function Ef(n){jc=new Ke({color:6743807,transparent:!0,opacity:.12,side:qt,depthWrite:!1,blending:dt}),d.cityLevel=d.cityLevel||0,Xo=kn[d.cityLevel].r,cg(Xo)}function cg(n){$o&&(d.scene.remove($o),$o.geometry.dispose());let e=Math.ceil(n*1.2),t=[],i=[],s=1.4;for(let o=0;o<=e;o++){let a=o/e*Math.PI*2,l=Ri.x+Math.cos(a)*n,c=Ri.z+Math.sin(a)*n,h=_e(l,c);if(t.push(l,h,c,l,h+s,c),o<e){let u=o*2;i.push(u,u+1,u+2,u+1,u+3,u+2)}}let r=new Rt;r.setAttribute("position",new Qe(t,3)),r.setIndex(i),$o=new le(r,jc),$o.frustumCulled=!1,d.scene.add($o)}function hg(n,e,t=0){return Math.hypot(n-Ri.x,e-Ri.z)<=kn[d.cityLevel].r-t}function ug(){let n=kn[d.cityLevel+1];return n?{...n,curPop:d.colony.pop,curB:d.buildings.length}:null}var _f=0;function dg(n,e){jc.opacity+=((e?.45:.1)-jc.opacity)*Math.min(1,n*4);let t=kn[d.cityLevel].r;if(Xo<t&&(Xo=Math.min(t,Xo+n*40),cg(Xo)),_f-=n,_f>0)return;_f=1;let i=kn[d.cityLevel+1];if(i&&d.colony.pop>=i.pop&&d.buildings.length>=i.b){d.cityLevel++,J.play("chapter"),d.events.emit("cityLevel",kn[d.cityLevel]);let s=new T(Ri.x,_e(Ri.x,Ri.z)+2,Ri.z);Ee.burst(s,[.4,.9,1],120,18)}}var ll=[],WE={mars:6178362,europa:9214120,kepler:5921384}[it],bf,Ms,Qc=!0;function $E(){return bf||(bf=new he({color:WE,roughness:.95,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),bf}function XE(n,e,t,i){let s=t-n,r=i-e,o=Math.hypot(s,r);if(o<2)return null;let a=Math.ceil(o/1.5),l=s/o,c=r/o,h=-c,u=l,f=1.3,p=[],g=[],v=[],x=[];for(let E=0;E<=a;E++){let M=E/a,D=n+s*M,A=e+r*M;for(let L of[-1,1]){let I=D+h*f*L,w=A+u*f*L;p.push(I,_e(I,w)+.07,w),v.push(L<0?0:1,M*o/3)}if(E<a){let L=E*2;g.push(L,L+2,L+1,L+1,L+2,L+3)}}for(let E=4;E<o-2;E+=9)for(let M of[-1,1]){let D=n+l*E+h*(f+.35)*M,A=e+c*E+u*(f+.35)*M;x.push(D,_e(D,A)+.25,A)}let m=new Rt;m.setAttribute("position",new Qe(p,3)),m.setAttribute("uv",new Qe(v,2)),m.setIndex(g),m.computeVertexNormals();let _=new le(m,$E());return _.receiveShadow=!0,d.scene.add(_),{mesh:_,lamp:x}}function fg(n){if(n.type==="lamp")return;let e=null,t=70;for(let u of d.buildings){if(u===n||u.type==="lamp")continue;let f=Math.hypot(u.x-n.x,u.z-n.z)-u.def.r-n.def.r;f<t&&(t=f,e=u)}if(!e)return;let i=e.x-n.x,s=e.z-n.z,r=Math.hypot(i,s),o=n.x+i/r*(n.def.r+.5),a=n.z+s/r*(n.def.r+.5),l=e.x-i/r*(e.def.r+.5),c=e.z-s/r*(e.def.r+.5),h=XE(o,a,l,c);h&&(ll.push({...h,a:n,b:e}),Qc=!0)}function pg(n){for(let e=ll.length-1;e>=0;e--){let t=ll[e];(t.a===n||t.b===n)&&(d.scene.remove(t.mesh),t.mesh.geometry.dispose(),ll.splice(e,1),Qc=!0)}}function mg(){if(Qc){Qc=!1,Ms&&(d.scene.remove(Ms),Ms.geometry.dispose());let n=ll.flatMap(e=>e.lamp);if(n.length){let e=new Rt;e.setAttribute("position",new Qe(n,3)),Ms=new ii(e,new Yn({size:.9,map:Jn(),color:8382207,transparent:!0,depthWrite:!1,blending:dt})),Ms.frustumCulled=!1,d.scene.add(Ms)}else Ms=null}Ms&&(Ms.material.opacity=.15+d.time.night*.85)}var qo={peace:{name:"\u548C\u5E73",desc:"\u6CA1\u6709\u9508\u8680\u86DB\uFF0C\u5B89\u5FC3\u5EFA\u8BBE",o2:.7,foe:0,dmg:0,yield:1.3},normal:{name:"\u6807\u51C6",desc:"\u63A8\u8350\u7684\u4F53\u9A8C",o2:1,foe:1,dmg:1,yield:1},hard:{name:"\u56F0\u96BE",desc:"\u6C27\u6C14\u6D88\u8017\u66F4\u5FEB\uFF0C\u654C\u4EBA\u66F4\u591A\u66F4\u51F6",o2:1.35,foe:1.6,dmg:1.5,yield:.85}},xg={story:{name:"\u5267\u60C5\u6A21\u5F0F",desc:"\u8DDF\u968F\u7AE0\u8282\uFF0C\u4ECE\u7740\u9646\u4E00\u8DEF\u8D70\u5230\u661F\u9645\u6587\u660E"},free:{name:"\u81EA\u7531\u6A21\u5F0F",desc:"\u6CA1\u6709\u4E3B\u7EBF\uFF0C\u6309\u81EA\u5DF1\u7684\u8282\u594F\u5F00\u62D3\u3002\u5C45\u6C11\u59D4\u6258\u4F1A\u7ED9\u4F60\u65B9\u5411"}},_s=()=>qo[d.diffKey||"normal"],Gn=()=>d.mode==="free",Yo={pv:{name:"\u9AD8\u6548\u5149\u4F0F",cat:"\u751F\u4EA7",icon:"sun",cost:25,desc:"\u592A\u9633\u80FD\u53D1\u7535 +50%"},sieve:{name:"\u5206\u5B50\u7B5B\u5236\u6C27",cat:"\u751F\u5B58",icon:"o2",cost:30,desc:"\u5236\u6C27\u7AD9\u4E0E\u751F\u6001\u4E2D\u67A2\u4F9B\u6C27 +50%"},hydro:{name:"\u6C34\u57F9\u6280\u672F",cat:"\u751F\u5B58",icon:"food",cost:30,desc:"\u6E29\u5BA4\u4E0E\u5782\u76F4\u519C\u573A\u4EA7\u51FA +50%"},drill:{name:"\u6DF1\u5C42\u94BB\u63A2",cat:"\u751F\u5B58",icon:"water",cost:30,desc:"\u6C34\u51B0\u63D0\u53D6\u5668\u4E0E\u751F\u6001\u4E2D\u67A2\u4F9B\u6C34 +50%"},laser2:{name:"\u91C7\u77FF\u6FC0\u5149 II",cat:"\u751F\u4EA7",icon:"laser",cost:35,desc:"\u624B\u52A8\u91C7\u77FF\u901F\u5EA6 +50%"},suit:{name:"\u5B87\u822A\u670D\u5FAA\u73AF\u7CFB\u7EDF",cat:"\u751F\u5B58",icon:"tank",cost:40,desc:"\u91CE\u5916\u6C27\u6C14\u6D88\u8017 -35%"},alloy:{name:"\u5F3A\u5316\u5408\u91D1",cat:"\u519B\u4E8B",icon:"shield",cost:50,desc:"\u6240\u6709\u5EFA\u7B51\u8010\u4E45 +50%"},plasma:{name:"\u7B49\u79BB\u5B50\u805A\u7126",cat:"\u519B\u4E8B",icon:"focus",cost:60,desc:"\u70AE\u5854\u4F24\u5BB3 +50%\uFF0C\u5C04\u7A0B +10 \u7C73"},swarm:{name:"\u65E0\u4EBA\u673A\u96C6\u7FA4",cat:"\u751F\u4EA7",icon:"drone",cost:60,desc:"\u6BCF\u5EA7\u65E0\u4EBA\u673A\u7AD9\u591A\u4E00\u67B6\u65E0\u4EBA\u673A"},terrain:{name:"\u5168\u5730\u5F62\u60AC\u6302",cat:"\u751F\u4EA7",icon:"rover",cost:45,desc:"\u6F2B\u6E38\u8F66\u6781\u901F +30%"},pr:{name:"\u79FB\u6C11\u5BA3\u4F20",cat:"\u6B96\u6C11",icon:"pop",cost:70,desc:"\u79FB\u6C11\u98DE\u8239\u6765\u5F97\u66F4\u52E4\uFF0C\u6BCF\u6B21\u591A\u5E26 2 \u4EBA"},atmo:{name:"\u5927\u6C14\u5DE5\u7A0B",cat:"\u6B96\u6C11",icon:"planet",cost:120,desc:"\u5927\u6C14\u6539\u9020\u901F\u5EA6 \xD72"},fusion:{name:"\u7D27\u51D1\u805A\u53D8",cat:"\u751F\u4EA7",icon:"power",cost:100,desc:"\u805A\u53D8\u53CD\u5E94\u5806\u53D1\u7535 +40%"},culture:{name:"\u6B96\u6C11\u5730\u6587\u5316",cat:"\u6B96\u6C11",icon:"book",cost:80,desc:"\u5C45\u6C11\u5DE5\u4F5C\u4EA7\u51FA \xD72"}},Ht=n=>!!(d.tech&&d.tech[n]);function Rf(n){let e=Yo[n];return!e||Ht(n)||(d.rp||0)<e.cost?(J.play("deny"),!1):(d.rp-=e.cost,d.tech={...d.tech||{},[n]:!0},J.play("craft"),d.events.emit("toast",`\u2713 \u7814\u7A76\u5B8C\u6210\uFF1A${e.name}`),d.events.emit("researched",n),!0)}function eh(){let n=0;for(let e of d.buildings)e.type==="lab"&&e.powered&&(n+=[0,1,1.6,2.2][e.level||1]);return n*(.12+d.colony.pop*.01)}var gg={iron:1,ice:1.2,silicon:1.5,titanium:6};function Af(n,e,t){return Math.floor(t*gg[n]/gg[e]*.8)}function yg(n,e,t){let i=Af(n,e,t);return n===e||i<=0||(d.res[n]||0)<t?(J.play("deny"),0):(d.res[n]-=t,d.res[e]+=i,J.play("pickup"),d.stats.traded=(d.stats.traded||0)+1,i)}var qE=["\u6797\u6653","Amara Okafor","\u9648\u9ED8","Mateo Silva","\u82CF\u5FF5","Yuki Tanaka","\u738B\u5927\u5C71","\u5468\u9752\u79BE","Priya Sharma","\u674E\u957F\u98CE"],wf={solar:"\u592A\u9633\u80FD\u9635\u5217",oxygen:"\u5236\u6C27\u7AD9",lamp:"\u7167\u660E\u706F",habitat:"\u5C45\u4F4F\u7A79\u9876",greenhouse:"\u6E29\u5BA4",extractor:"\u6C34\u51B0\u63D0\u53D6\u5668",turret:"\u9632\u5FA1\u70AE\u5854",drones:"\u65E0\u4EBA\u673A\u7AD9",plaza:"\u4E2D\u592E\u5E7F\u573A",lab:"\u7814\u7A76\u6240",trade:"\u8D38\u6613\u7AD9",apartment:"\u516C\u5BD3\u5854",vfarm:"\u5782\u76F4\u519C\u573A"},Or={build:["\u6211\u4EEC\u9700\u8981\u4E00\u5EA7{x}\u3002\u62DC\u6258\u4E86\uFF01","\u5982\u679C\u6709{x}\uFF0C\u5927\u5BB6\u7684\u65E5\u5B50\u4F1A\u597D\u8FC7\u5F88\u591A\u3002","\u80FD\u518D\u5EFA\u4E00\u5EA7{x}\u5417\uFF1F"],mine:["\u4ED3\u5E93\u91CC\u7684{x}\u5FEB\u89C1\u5E95\u4E86\uFF0C\u80FD\u5E2E\u5FD9\u91C7\u4E00\u4E9B\u5417\uFF1F","\u6211\u7684\u5B9E\u9A8C\u9700\u8981{x}\u3002"],kill:["\u591C\u91CC\u90A3\u4E9B\u9508\u8680\u86DB\u5435\u5F97\u5B69\u5B50\u4EEC\u7761\u4E0D\u7740\u3002","\u5DE1\u903B\u961F\u9700\u8981\u652F\u63F4\uFF0C\u5E2E\u6211\u4EEC\u6E05\u7406\u4E00\u4E0B\u9644\u8FD1\u3002"],upgrade:["\u8BBE\u65BD\u8BE5\u5347\u7EA7\u4E86\uFF0C\u80FD\u628A\u54EA\u4E00\u5EA7\u5347\u5230 2 \u7EA7\u5417\uFF1F"],relic:["\u6211\u5728\u65E7\u6863\u6848\u91CC\u770B\u5230\u9644\u8FD1\u6709\u9057\u8FF9\u7684\u8BB0\u5F55\uFF0C\u4F60\u80FD\u53BB\u770B\u770B\u5417\uFF1F"],pop:["\u6211\u4EEC\u51C6\u5907\u597D\u8FCE\u63A5\u66F4\u591A\u7684\u4EBA\u4E86\u3002"],scan:["\u8BA9\u5C0F\u661F\u626B\u63CF\u4E00\u4E0B\u9644\u8FD1\u7684\u77FF\u85CF\u5427\uFF0C\u6211\u60F3\u753B\u4E00\u5F20\u5730\u56FE\u3002"]},Bn=n=>n[Math.floor(Math.random()*n.length)];function vg(n){return d.buildings.filter(e=>e.type===n).length}function YE(n){let e=["build","build","mine","mine","scan"];(d.enemies.length||(d.nightsSurvived||0)>0)&&e.push("kill"),d.buildings.length>4&&e.push("upgrade"),n.relicLeft()&&e.push("relic"),d.buildings.some(a=>a.type==="beacon")&&e.push("pop");let t=Bn(e),i=d.colonists.length?Bn(d.colonists).name:Bn(qE),s={id:Date.now()+Math.random(),kind:t,giver:i},r=1+(d.cityLevel||0)*.5;if(t==="build"){let a=Object.keys(wf).filter(c=>n.unlocked(c)),l=Bn(a.length?a:["solar"]);Object.assign(s,{t:l,base:vg(l),n:1,text:`\u5EFA\u9020${wf[l]}`,line:Bn(Or.build).replace("{x}",wf[l])})}else if(t==="mine"){let a=Bn(d.cityLevel>=2?["iron","silicon","ice","titanium"]:["iron","silicon","ice"]),l=Math.round((a==="titanium"?8:25)*r);Object.assign(s,{t:a,base:d.stats.mined[a],n:l,text:`\u91C7\u96C6${xn[a].name} ${l}`,line:Bn(Or.mine).replace("{x}",xn[a].name)})}else if(t==="kill"){let a=Math.round(4*r);Object.assign(s,{base:d.stats.kills,n:a,text:`\u51FB\u9000\u9508\u8680\u86DB ${a} \u53EA`,line:Bn(Or.kill)})}else t==="upgrade"?Object.assign(s,{base:d.buildings.filter(a=>(a.level||1)>=2).length,n:1,text:"\u628A\u4E00\u5EA7\u5EFA\u7B51\u5347\u5230 2 \u7EA7",line:Bn(Or.upgrade)}):t==="relic"?Object.assign(s,{base:n.relicFound(),n:1,text:"\u8C03\u67E5\u4E00\u5904\u9057\u8FF9",line:Bn(Or.relic)}):t==="pop"?Object.assign(s,{base:d.colony.pop,n:4,text:"\u8FCE\u63A5 4 \u4F4D\u65B0\u79FB\u6C11",line:Bn(Or.pop)}):Object.assign(s,{base:d.stats.scans||0,n:1,text:"\u7528\u5C0F\u661F\u626B\u63CF\u4E00\u6B21\uFF08Q\uFF09",line:Bn(Or.scan)});let o=["iron","silicon","ice"];return s.reward={[Bn(o)]:Math.round(20*r),[Bn(o)]:Math.round(15*r)},d.cityLevel>=1&&(s.reward.titanium=Math.round(2*r)),s.rp=Math.round(8*r),s}function Mg(n,e){switch(n.kind){case"build":return vg(n.t)-n.base;case"mine":return d.stats.mined[n.t]-n.base;case"kill":return d.stats.kills-n.base;case"upgrade":return d.buildings.filter(t=>(t.level||1)>=2).length-n.base;case"relic":return e.relicFound()-n.base;case"pop":return d.colony.pop-n.base;default:return(d.stats.scans||0)-n.base}}function _g(n,e){return Math.max(0,Math.min(n.n,Mg(n,e)))}var Sf=25,Tf=0;function Eg(n,e){if(d.rp=(d.rp||0)+eh()*n,d.requests=d.requests||[],d.buildings.length&&!d.ended){Sf-=n;let t=Gn()?3:2;if(Sf<=0&&d.requests.length<t){Sf=Gn()?60:110;let i=YE(e);d.requests.push(i),d.events.emit("request",i)}}if(Tf-=n,!(Tf>0)){Tf=.5;for(let t=d.requests.length-1;t>=0;t--){let i=d.requests[t];if(Mg(i,e)>=i.n){d.requests.splice(t,1);for(let s in i.reward)d.res[s]+=i.reward[s],d.events.emit("pickup",{type:s,n:i.reward[s],note:"\u59D4\u6258\u5956\u52B1"});d.rp=(d.rp||0)+i.rp,d.stats.requests=(d.stats.requests||0)+1,J.play("objective"),d.events.emit("requestDone",i)}}}}var wg=new Je(1,1,1,6,1,!0);wg.translate(0,.5,0);var ZE=new T(0,1,0),Zo=new T;function KE(n){let e=1+(n.level||1)+(Ht("swarm")?1:0);for(n.drones=n.drones||[];n.drones.length<e;){let t=km(),i=new le(wg,new Ke({color:16752720,transparent:!0,opacity:.8,blending:dt,depthWrite:!1}));i.visible=!1,i.frustumCulled=!1,d.scene.add(t.group,i);let s=n.drones.length,r=new T(n.x+[-1.9,1.9,-1.9,1.9][s%4],n.y+1.1,n.z+[-1.9,-1.9,1.9,1.9][s%4]);t.group.position.copy(r),n.drones.push({...t,beam:i,dock:r,state:"dock",t:1+s*1.3,node:null,cargo:null,pos:t.group.position})}}function Sg(n){for(let e of n.drones||[])d.scene.remove(e.group,e.beam),e.node&&(e.node.claimed=!1);n.drones=[]}function bg(n,e,t,i=15){Zo.copy(e).sub(n.pos);let s=Zo.length(),r=_e(n.pos.x,n.pos.z)+8;s>6&&(Zo.y+=(r-n.pos.y)*2),Zo.normalize().multiplyScalar(Math.min(s,i*t)),n.pos.add(Zo);let a=Math.atan2(e.x-n.pos.x,e.z-n.pos.z)-n.group.rotation.y;return a=Math.atan2(Math.sin(a),Math.cos(a)),n.group.rotation.y+=a*Math.min(1,t*4),n.group.rotation.x=Math.min(.3,s*.02),s<.6}function Tg(n){let e=performance.now()*.001;for(let t of d.buildings)if(t.type==="drones"&&!(t.buildT<1)){KE(t),t.anim.dish&&(t.anim.dish.rotation.y+=n*(t.powered?1.2:0)),t.anim.light&&(t.anim.light.visible=t.powered&&Math.sin(e*3)>-.3);for(let i of t.drones){for(let s of i.rotors)s.rotation.y+=n*40;switch(i.group.position.y+=Math.sin(e*3+i.dock.x)*.003,i.beam.visible=!1,!t.powered&&i.state!=="dock"&&(i.node&&(i.node.claimed=!1),i.node=null,i.state="back"),i.state){case"dock":{if(i.pos.lerp(i.dock,Math.min(1,n*3)),i.t-=n,i.t<=0&&t.powered){i.t=2;let s=null,r=100;for(let o of d.nodes){if(o.claimed||o.type==="titanium"&&(t.level||1)<3)continue;let a=Math.hypot(o.x-t.x,o.z-t.z);a<r&&(r=a,s=o)}s&&(s.claimed=!0,i.node=s,i.state="out")}break}case"out":{let s=i.node;if(!s||!d.nodes.includes(s)){i.node=null,i.state="back";break}bg(i,Zo.set(s.x,s.y+4.5,s.z).clone(),n)&&(i.state="mine",i.t=3.2);break}case"mine":{let s=i.node;if(!s||!d.nodes.includes(s)){i.state="back";break}i.t-=n;let r=new T(s.x+Math.sin(e*5)*.3,s.y+.6,s.z+Math.cos(e*4)*.3),o=i.pos.clone().add(new T(0,-.25,0)),a=r.clone().sub(o),l=a.length();if(i.beam.position.copy(o),i.beam.quaternion.setFromUnitVectors(ZE,a.normalize()),i.beam.scale.set(.05,l,.05),i.beam.material.color.setRGB(...vs[s.type]),i.beam.visible=!0,Math.random()<.4&&Ee.spark(r,vs[s.type],1,3,.4),i.t<=0){let c=Math.min(3,Math.ceil(s.amount));i.cargo={type:s.type,n:c},s.claimed=!1,Jc(s,c),i.node=null,i.state="back"}break}case"back":{bg(i,i.dock,n)&&(i.cargo&&(d.res[i.cargo.type]+=i.cargo.n,d.stats.mined[i.cargo.type]+=i.cargo.n,d.stats.droneHauls=(d.stats.droneHauls||0)+1,Math.hypot(d.player.pos.x-t.x,d.player.pos.z-t.z)<45&&d.events.emit("pickup",{type:i.cargo.type,n:i.cargo.n,note:"\u65E0\u4EBA\u673A"}),Ee.spark(i.pos,[.5,.9,1],6,3),i.cargo=null),i.state="dock",i.t=1.5);break}}}}}var An={solar:{name:"\u592A\u9633\u80FD\u9635\u5217",icon:"sun",cat:"life",chapter:0,cost:{iron:8,silicon:6},power:4,r:2.6,hp:120,desc:"\u767D\u5929\u53D1\u7535 4 \u5355\u4F4D\uFF0C\u591C\u95F4\u964D\u81F3 1.6\u3002\u6B96\u6C11\u5730\u7684\u5FC3\u8DF3\u4ECE\u8FD9\u91CC\u5F00\u59CB\u3002"},oxygen:{name:"\u5236\u6C27\u7AD9",icon:"o2",cat:"life",chapter:0,cost:{iron:12,silicon:4,ice:6},power:-2,r:3,hp:160,o2:6,life:14,desc:"\u7535\u89E3\u6C34\u51B0\u5236\u9020\u6C27\u6C14\u3002\u4E3A 6 \u4F4D\u5C45\u6C11\u4F9B\u6C27\uFF0C\u5E76\u5728 14 \u7C73\u5185\u4E3A\u4F60\u7684\u5B87\u822A\u670D\u8865\u6C27\u3002"},lamp:{name:"\u7167\u660E\u706F",icon:"star",cat:"life",chapter:0,cost:{iron:3},power:0,r:.6,hp:60,desc:"\u7167\u4EAE\u706B\u661F\u7684\u957F\u591C\u3002"},habitat:{name:"\u5C45\u4F4F\u7A79\u9876",icon:"dome",cat:"life",chapter:1,cost:{iron:25,silicon:12},power:-1,r:6.4,hp:300,housing:4,life:12,desc:"\u53EF\u4F4F 4 \u4EBA\u3002\u7A79\u9876\u91CC\u6709\u6696\u5149\u3001\u690D\u7269\u548C\u5BB6\u4EBA\u7684\u7167\u7247\u3002"},greenhouse:{name:"\u6E29\u5BA4",icon:"food",cat:"life",chapter:1,cost:{iron:14,silicon:16,ice:8},power:-2,r:5.4,hp:160,food:5,desc:"\u5728\u706B\u661F\u571F\u58E4\u91CC\u79CD\u51FA\u7B2C\u4E00\u68F5\u571F\u8C46\u3002\u4F9B 5 \u4EBA\u98DF\u7269\u3002"},extractor:{name:"\u6C34\u51B0\u63D0\u53D6\u5668",icon:"water",cat:"life",chapter:1,cost:{iron:16,silicon:4,ice:4},power:-2,r:2.8,hp:160,water:6,desc:"\u4ECE\u5730\u4E0B\u51BB\u571F\u4E2D\u94BB\u53D6\u6C34\u3002\u4F9B 6 \u4EBA\u7528\u6C34\u3002"},beacon:{name:"\u7740\u9646\u573A",icon:"ship",cat:"city",chapter:1,cost:{iron:24,silicon:14},power:-1,r:7.4,hp:250,desc:"\u5411\u5730\u7403\u53D1\u51FA\u4FE1\u53F7\u3002\u6761\u4EF6\u6EE1\u8DB3\u65F6\uFF0C\u79FB\u6C11\u98DE\u8239\u4F1A\u5728\u8FD9\u91CC\u964D\u843D\u3002"},fabricator:{name:"\u5236\u9020\u5DE5\u574A",icon:"wrench",cat:"industry",chapter:2,cost:{iron:22,silicon:14},power:-1,r:4.6,hp:220,desc:"\u9760\u8FD1\u6309 E \u5236\u9020\u6B66\u5668\u4E0E\u88C5\u5907\u3002"},drones:{name:"\u65E0\u4EBA\u673A\u7AD9",icon:"drone",cat:"industry",chapter:2,cost:{iron:30,silicon:22},power:-3,r:3.8,hp:220,desc:"\u6D3E\u51FA\u91C7\u77FF\u65E0\u4EBA\u673A\uFF0C\u81EA\u52A8\u91C7\u96C6 100 \u7C73\u5185\u7684\u77FF\u70B9\u5E76\u8FD0\u56DE\u3002\u5347\u7EA7\u540E\u65E0\u4EBA\u673A\u66F4\u591A\uFF0C\u6EE1\u7EA7\u53EF\u91C7\u949B\u3002"},turret:{name:"\u9632\u5FA1\u70AE\u5854",icon:"shield",cat:"defense",chapter:2,cost:{iron:22,silicon:10},power:-2,r:1.9,hp:200,range:40,desc:"\u81EA\u52A8\u653B\u51FB 40 \u7C73\u5185\u7684\u9508\u8680\u86DB\u3002\u9700\u8981\u7535\u529B\u3002"},reactor:{name:"\u805A\u53D8\u53CD\u5E94\u5806",icon:"power",cat:"industry",chapter:3,cost:{iron:40,silicon:20,titanium:12},power:20,r:5.4,hp:400,desc:"\u663C\u591C\u4E0D\u505C +20 \u26A1\u3002\u7528\u706B\u661F\u7684\u949B\uFF0C\u70B9\u4EAE\u4EBA\u7C7B\u7684\u7B2C\u4E8C\u9897\u592A\u9633\u3002"},lab:{name:"\u7814\u7A76\u6240",icon:"book",cat:"industry",chapter:2,level:1,cost:{iron:25,silicon:25},power:-2,r:4.2,hp:260,rp:1,desc:"\u5C45\u6C11\u5728\u8FD9\u91CC\u505A\u7814\u7A76\uFF0C\u4EA7\u51FA\u79D1\u7814\u70B9\u6570\u3002\u4EBA\u53E3\u8D8A\u591A\u8D8A\u5FEB\u3002\u6309 T \u6253\u5F00\u79D1\u7814\u3002"},trade:{name:"\u661F\u9645\u8D38\u6613\u7AD9",icon:"ship",cat:"city",chapter:2,level:1,cost:{iron:30,silicon:18},power:-2,r:5,hp:260,desc:"\u4E0E\u5730\u7403\u548C\u5176\u4ED6\u6B96\u6C11\u5730\u4EA4\u6362\u7269\u8D44\u3002\u9760\u8FD1\u6309 E \u4EA4\u6613\u3002"},plaza:{name:"\u4E2D\u592E\u5E7F\u573A",icon:"planet",cat:"city",level:1,cost:{iron:20,silicon:16},power:-1,r:7.4,hp:300,desc:"\u4E2D\u5FC3\u6709\u4E00\u5EA7\u5168\u606F\u5730\u7403\u3002\u5929\u9ED1\u540E\uFF0C\u5C45\u6C11\u4EEC\u4F1A\u6765\u8FD9\u91CC\u805A\u5728\u4E00\u8D77\uFF0C\u770B\u4E00\u770B\u6545\u4E61\u3002"},apartment:{name:"\u516C\u5BD3\u5854",icon:"tower",cat:"city",level:2,cost:{iron:40,silicon:25,titanium:4},power:-3,r:4.6,hp:400,housing:12,life:12,desc:"\u53EF\u4F4F 12 \u4EBA\u3002\u7A97\u6237\u91CC\u7684\u706F\u5149\uFF0C\u662F\u57CE\u5E02\u7684\u661F\u7A7A\u3002"},vfarm:{name:"\u5782\u76F4\u519C\u573A",icon:"food",cat:"city",level:2,cost:{iron:30,silicon:30,ice:15},power:-4,r:4.2,hp:260,food:14,desc:"\u5341\u56DB\u5C42\u7684\u7ACB\u4F53\u519C\u7530\u3002\u4F9B 14 \u4EBA\u98DF\u7269\u3002"},lifehub:{name:"\u751F\u6001\u4E2D\u67A2",icon:"o2",cat:"city",level:3,cost:{iron:45,silicon:30,ice:30,titanium:6},power:-5,r:6,hp:400,o2:16,water:16,life:20,desc:"\u5927\u578B\u6C27\u6C14\u4E0E\u6C34\u5FAA\u73AF\u7CFB\u7EDF\u3002\u4F9B 16 \u4EBA\u6C27\u6C14\u548C\u7528\u6C34\uFF0C20 \u7C73\u5185\u8865\u6C27\u3002"},terraformer:{name:"\u5927\u6C14\u6539\u9020\u5854",icon:"planet",cat:"stellar",chapter:4,only:"terraformable",cost:{iron:100,silicon:60,titanium:30,ice:50},power:-12,r:7.4,hp:800,desc:"\u5411\u5929\u7A7A\u91CA\u653E\u6E29\u5BA4\u6C14\u4F53\u4E0E\u6C34\u6C7D\u3002\u8BA9\u8FD9\u9897\u661F\u7403\uFF0C\u771F\u6B63\u6210\u4E3A\u5BB6\u3002"},launch:{name:"\u661F\u9645\u53D1\u5C04\u53F0",icon:"ship",cat:"stellar",chapter:5,level:it==="mars"?5:4,only:"route",cost:{iron:160,silicon:120,titanium:60,ice:60},power:-15,r:9.5,hp:900,desc:"\u661F\u9645\u822A\u7EBF\u7684\u8D77\u70B9\u3002\u9760\u8FD1\u6309 E \u6253\u5F00\u661F\u56FE\uFF0C\u524D\u5F80\u65B0\u7684\u661F\u7403\u6216\u56DE\u5230\u5DF2\u5F00\u62D3\u7684\u5BB6\u56ED\u3002"},monument:{name:"\u6587\u660E\u7EAA\u5FF5\u7891",icon:"monument",cat:"stellar",level:5,only:"final",cost:{iron:150,silicon:120,titanium:80},power:-6,r:6.5,hp:900,desc:"\u4E09\u9897\u661F\u7403\uFF0C\u4E00\u4E2A\u4EBA\u7C7B\u3002\u732E\u7ED9\u6240\u6709\u51FA\u53D1\u7684\u4EBA\u3002"}},If=3,Pf=[1,1,1.6,2.2],JE=["lamp","beacon","fabricator","plaza","trade","terraformer","launch","monument"];function th(n){return!JE.includes(n.type)&&(n.level||1)<If}function Ai(n,e){let t=n.def,i=n.level||1,s=t[e];if(!s)return 0;if(e==="power")return s>0?s*Pf[i]*(n.type==="solar"&&Ht("pv")?1.5:1)*(n.type==="reactor"&&Ht("fusion")?1.4:1):s*(1+.25*(i-1));if(e==="life")return s+3*(i-1);if(e==="range")return s+8*(i-1)+(Ht("plasma")?10:0);if(e==="hp")return s*(1+.5*(i-1))*(Ht("alloy")?1.5:1);let r=e==="o2"&&Ht("sieve")||e==="food"&&Ht("hydro")||e==="water"&&Ht("drill")?1.5:1;return Math.round(s*Pf[i]*r)}function Lf(n){let e=n.level||1,t={};for(let i in n.def.cost)t[i]=Math.ceil(n.def.cost[i]*(e===1?.8:1.3));return t.titanium=(t.titanium||0)+(e===1?3:8),t}function Rg(n){if(!th(n))return!1;let e=Lf(n);return wi(e)?($a(e),n.level=(n.level||1)+1,Ag(n,!0),J.play("place"),Ee.ring(new T(n.x,n.y,n.z),n.def.r*1.2,60,[.5,.9,1]),Yi(),!0):!1}function Ag(n,e){let t=n.level||1;n.maxHp=Ai(n,"hp"),n.hp=Math.min(n.maxHp,e?n.maxHp:n.hp);let i=1+(t-1)*.12;n.group.scale.set(i,n.group.scale.y,i),n.baseScale=i,n.anim._pips&&n.anim._pips.forEach(r=>n.group.remove(r)),n.anim._pips=[];let s=Math.max(2.5,n.def.r*.9);for(let r=1;r<t;r++)n.anim._pips.push(Se(16757596,1.4,n.group,(r-t/2)*.9,s+1.2,0));if(e){n.buildT=.35;let r=new le(new Le(n.def.r*1.05,.08,6,48),Cg.clone());r.rotation.x=Math.PI/2,r.position.set(n.x,n.y,n.z),d.scene.add(r),n.anim._scan=r}}function Zi(n){let e=An[n];return e.only==="terraformable"&&!fe.terraformable?{hide:!0}:e.only==="route"&&!fe.next&&!(dn.visited||[]).some(t=>t.id!==it)?{hide:!0}:e.only==="final"&&fe.next?{hide:!0}:!Gn()&&it==="mars"&&e.chapter&&e.chapter>d.chapter?{ok:!1,why:"\u5267\u60C5\u63A8\u8FDB\u540E\u89E3\u9501"}:e.level&&e.level>d.cityLevel?{ok:!1,why:`\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C${kn[e.level].name}\u300D\u89E3\u9501`}:{ok:!0}}var Df=["solar","oxygen","lamp","habitat","greenhouse","extractor","beacon","fabricator","drones","lab","trade","turret","reactor","plaza","apartment","vfarm","lifehub","terraformer","launch","monument"],jE=["oxygen","lifehub","turret","habitat","apartment","extractor","greenhouse","vfarm","beacon","plaza","lab","trade","drones","fabricator","terraformer","launch","monument"],Cg=new Ke({color:8382207,transparent:!0,opacity:.8,blending:dt,depthWrite:!1,side:qt});function nh(n,e,t,i=0,s,r=!1,o=1){let a=An[n],l=new pe,c={};zn[n](l,c);let h=_e(e,t);if(l.position.set(e,h,t),l.rotation.y=i,d.scene.add(l),r){l.scale.set(1,.001,1);let f=new le(new Le(a.r*1.05,.08,6,48),Cg.clone());f.rotation.x=Math.PI/2,f.position.set(e,h,t),d.scene.add(f),c._scan=f}let u={buildT:r?0:1,type:n,def:a,x:e,z:t,y:h,rot:i,group:l,anim:c,hp:s??a.hp,broken:s!==void 0&&s<=0,powered:!0,t:Math.random()*10,cool:0};return u.collider=d.colliders.add({x:e,z:t,r:a.r*(n==="beacon"?.15:n==="plaza"?.28:.9),kind:"building",b:u}),u.level=o,u.maxHp=Ai(u,"hp"),s===void 0&&(u.hp=u.maxHp),o>1&&Ag(u,!1),d.buildings.push(u),d.stats.built[n]=(d.stats.built[n]||0)+1,fg(u),Yi(),u}function Pg(n,e=!1){if(e)for(let s in n.def.cost)d.res[s]+=Math.floor(n.def.cost[s]*.5);d.scene.remove(n.group),d.colliders.remove(n.collider),pg(n),n.type==="drones"&&Sg(n);let t=d.buildings.indexOf(n);t>=0&&d.buildings.splice(t,1),d.stats.built[n.type]=Math.max(0,(d.stats.built[n.type]||0)-1);let i=new T(n.x,n.y+2,n.z);Ee.burst(i,[1,.6,.3],60,10),Ee.dustPuff(i,30,n.def.r*2),Yi()}function Ig(n){return d.buildings.filter(e=>e.type===n).length}function Yi(){let n=d.colony,e=(d.time.elevation>.05?1:.4)*fe.solar,t=0,i=0;for(let r of d.buildings){if(r.broken)continue;let o=Ai(r,"power");o>0?t+=r.type==="solar"?o*e:o:i-=o}let s=t;for(let r of d.buildings)r.powered=r.def.power>=0&&!r.broken,r.maxHp=Ai(r,"hp");for(let r of jE)for(let o of d.buildings){if(o.type!==r)continue;let a=Ai(o,"power");!o.broken&&s>=-a&&(s+=a,o.powered=!0)}n.powerProd=t,n.powerUse=i,n.deficit=i>t+.001,n.housing=0,n.o2=0,n.food=0,n.water=0;for(let r of d.buildings)n.housing+=Ai(r,"housing"),r.powered&&(n.o2+=Ai(r,"o2"),n.food+=Ai(r,"food"),n.water+=Ai(r,"water"));n.support=Math.min(n.housing,n.o2,n.food,n.water)}function Lg(n){for(let e of d.buildings){let t=Ai(e,"life");if(!t||!e.powered)continue;let i=e.x-n.x,s=e.z-n.z;if(i*i+s*s<t*t)return e}return null}var qi=null,QE=null,Dg=new Ke({color:5636010,transparent:!0,opacity:.35,depthWrite:!1}),eb=new Ke({color:16729156,transparent:!0,opacity:.35,depthWrite:!1}),ai,bt={type:null,rot:0,valid:!1,reason:"",x:0,z:0};function zr(n){if(qi&&(d.scene.remove(qi),qi=null),bt.type=n,QE=n,!n){ai&&(ai.visible=!1);return}let e=new pe;zn[n](e,{}),e.traverse(i=>{i.isMesh&&(i.material=Dg,i.castShadow=!1,i.receiveShadow=!1),(i.isSprite||i.userData.found)&&(i.visible=!1)}),qi=e,d.scene.add(e),ai||(ai=new le(new un(.96,1,64),new Ke({color:6741503,transparent:!0,opacity:.5,depthWrite:!1,side:qt})),ai.rotation.x=-Math.PI/2,d.scene.add(ai));let t=An[n].life||An[n].range||0;ai.visible=t>0,ai.scale.setScalar(t||1)}function Ug(n,e){if(!qi)return;if(!n){qi.visible=!1,ai.visible=!1,bt.valid=!1,bt.reason="\u5BF9\u51C6\u5730\u9762";return}qi.visible=!0;let t=An[bt.type],i=n.x,s=n.z,r=Math.hypot(i-e.x,s-e.z),o=t.r+1.2;if(r<o){let h=r>.01?(i-e.x)/r:-Math.sin(d.player.yaw),u=r>.01?(s-e.z)/r:-Math.cos(d.player.yaw);i=e.x+h*o,s=e.z+u*o,r=o}let a=_e(i,s);qi.position.set(i,a,s),qi.rotation.y=bt.rot,bt.x=i,bt.z=s,ai.scale.x>1&&(ai.visible=!0,ai.position.set(i,a+.3,s));let l="";wi(t.cost)?Ur(i,s,Math.max(1.5,t.r*.7))>(t.r>4?.32:.45)?l="\u5730\u9762\u592A\u9661":d.colliders.overlaps(i,s,t.r*.85)?l="\u4F4D\u7F6E\u88AB\u5360\u7528":r<t.r+.8?l="\u79BB\u81EA\u5DF1\u592A\u8FD1":Math.abs(i)>tt-170||Math.abs(s)>tt-170?l="\u8D85\u51FA\u53EF\u5EFA\u9020\u533A\u57DF":hg(i,s,t.r)||(l="\u8D85\u51FA\u6B96\u6C11\u5730\u9886\u5730\uFF08\u63D0\u5347\u57CE\u5E02\u7B49\u7EA7\u6765\u6269\u5F20\uFF09"):l="\u8D44\u6E90\u4E0D\u8DB3",bt.valid=!l,bt.reason=l;let c=l?eb:Dg;qi.traverse(h=>{h.isMesh&&(h.material=c)})}function Ng(){if(!bt.type||!bt.valid)return J.play("deny"),null;let n=An[bt.type];$a(n.cost);let e=nh(bt.type,bt.x,bt.z,bt.rot,void 0,!0);return J.play("place"),Ee.ring(new T(e.x,e.y,e.z),n.r,50),e}var Cf=0;function kg(n,e){Cf-=n,Cf<=0&&(Cf=.5,Yi()),mg(),Tg(n);let t=d.time.night,i=performance.now()*.001;y.window.emissiveIntensity=.3+t*.85,y.lamp.emissiveIntensity=t*4;for(let s of Za)s.emissiveIntensity=.15+t*1.4;for(let s of d.buildings){let r=s.anim,o=s.powered;if(s.t+=n,s.buildT<1){s.buildT=Math.min(1,s.buildT+n/1.3);let a=s.buildT,l=1+2.2*Math.pow(a-1,3)+1.2*Math.pow(a-1,2);s.group.scale.y=Math.max(.001,l)*(s.baseScale||1);let c=Math.max(3,s.def.r*1.4)*(s.type==="apartment"||s.type==="launch"||s.type==="terraformer"||s.type==="monument"?4:1);r._scan.position.y=s.y+a*c,r._scan.material.opacity=.8*(1-a),r._scan.scale.setScalar(1-a*.25),Math.random()<.5&&Ee.spark(new T(s.x+(Math.random()-.5)*s.def.r*2,s.y+a*c,s.z+(Math.random()-.5)*s.def.r*2),[.5,.9,1],1,2,.6),a>=1&&(d.scene.remove(r._scan),r._scan.geometry.dispose(),delete r._scan)}switch(s.hp<s.maxHp&&d.time.night<.5&&(s.hp=Math.min(s.maxHp,s.hp+n*(s.broken?5:2)),s.broken&&s.hp>=s.maxHp*.5&&(s.broken=!1,Yi(),d.events.emit("toast",`\u2713 ${s.def.name} \u5DF2\u4FEE\u590D\uFF0C\u6062\u590D\u8FD0\u8F6C`))),s.broken&&Math.random()<n*6&&Ee.dustPuff(new T(s.x+(Math.random()-.5)*s.def.r,s.y+1.5,s.z+(Math.random()-.5)*s.def.r),1,.5,[.15,.13,.12]),s.type){case"solar":{let a=new T(Ti.x,Math.max(Ti.y,.2),Ti.z).applyAxisAngle(new T(0,1,0),-s.rot);r.pivot.rotation.y=Math.atan2(a.x,a.z),r.panel.rotation.x=Math.PI/2-Math.asin(Math.min(1,a.y/a.length()));break}case"oxygen":o&&(r.fan.rotation.z+=n*8),r.light.visible=o;break;case"extractor":o&&(r.drill.position.y=3+Math.sin(s.t*3)*.8),r.light.visible=o;break;case"greenhouse":r.light.material.opacity=o?.3+t*.5:0;break;case"fabricator":o?(r.arm.rotation.y=Math.sin(s.t*.8)*1.2,r.spark.visible=Math.sin(s.t*7)>.6):r.spark.visible=!1;break;case"habitat":r.tip.visible=Math.sin(i*2+s.x)>.3;break;case"apartment":r.tip.visible=Math.sin(i*2+s.z)>.3;break;case"vfarm":r.light.material.opacity=o?.25+t*.5:0;break;case"lifehub":o&&(r.fan.rotation.y+=n*3),r.light.visible=o;break;case"plaza":r.earth.rotation.y+=n*.25,r.earth.position.y=4+Math.sin(i*.8)*.15,r.earth.material.opacity=o?.55-t*.15:.15,r.halo.material.opacity=o?.25+t*.2:0;break;case"lab":r.scope&&(r.scope.rotation.z=Math.sin(i*.2)*.4),r.tip&&(r.tip.visible=Math.sin(i*2.5)>0),r.light&&(r.light.visible=o);break;case"trade":r.jib&&(r.jib.rotation.y=Math.sin(i*.15)*1.2),r.tip&&(r.tip.visible=Math.sin(i*3)>0);break;case"monument":r.rings.forEach((a,l)=>{a.rotation.x=i*(.3+l*.2),a.rotation.y=i*(.2+l*.15)});break;case"reactor":r.r1.rotation.y+=n*.8,r.r2.rotation.z+=n*.6,r.light.material.opacity=.5+Math.sin(i*3)*.2;break;case"beacon":{let a=Math.floor(i*6)%8;r.lights.forEach((l,c)=>{l.visible=o&&(c===a||c===(a+4)%8||t>.3)}),r.tip.visible=Math.sin(i*3)>0;break}case"lamp":r.glow.visible=t>.2,r.glow.material.opacity=t*.6;break;case"turret":tb(s,n,e);break;case"terraformer":{r.rings.forEach((a,l)=>{a.position.y=10+l*8+Math.sin(i*1.5+l)*1.5,a.rotation.x=Math.sin(i+l)*.2}),r.beam.material.opacity=o&&d.terraform<1?.18+Math.sin(i*4)*.05:0,o&&d.terraform<1&&Math.random()<.6&&Ee.rise(new T(s.x,s.y+28,s.z),[.4,.9,1],4);break}}}}function tb(n,e,t){let i=n.anim;if(i.eye.visible=n.powered,!n.powered)return;n.cool-=e;let s=null,r=Ai(n,"range");for(let l of d.enemies){if(l.dead)continue;let c=Math.hypot(l.pos.x-n.x,l.pos.z-n.z);c<r&&(r=c,s=l)}if(!s){i.head.rotation.y+=e*.4;return}let a=Math.atan2(-(s.pos.x-n.x),-(s.pos.z-n.z))-n.rot-i.head.rotation.y;if(a=Math.atan2(Math.sin(a),Math.cos(a)),i.head.rotation.y+=Math.sign(a)*Math.min(Math.abs(a),e*5),Math.abs(a)<.15&&n.cool<=0){n.cool=.45;let l=new T(n.x,n.y+2.7,n.z),c=s.pos.clone();c.y+=1;let h=c.sub(l).normalize();l.addScaledVector(h,2.2),t.shoot(l,h,15*Pf[n.level||1]*(Ht("plasma")?1.5:1),"turret"),J.play("turret")}}function Hg(){return d.buildings.map(n=>[n.type,+n.x.toFixed(2),+n.z.toFixed(2),+n.rot.toFixed(3),Math.round(n.hp),n.level||1])}var cl=new T;function li(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;cl.copy(e),cl[i]=0,cl.normalize();let c=.5*o/(o+a),h=1-cl.angleTo(n)/l;return Math.sign(cl[t])===1?h*c:a/(o+a)+c+c*(1-h)}var Ko=class extends Ge{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new T,l=new T,c=new T(e,t,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=h.length/6,g=new T,v=.5/s;for(let x=0,m=0;x<h.length;x+=3,m+=2)switch(a.fromArray(h,x),l.copy(a),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),h[x+0]=c.x*Math.sign(a.x)+l.x*r,h[x+1]=c.y*Math.sign(a.y)+l.y*r,h[x+2]=c.z*Math.sign(a.z)+l.z*r,u[x+0]=l.x,u[x+1]=l.y,u[x+2]=l.z,Math.floor(x/p)){case 0:g.set(1,0,0),f[m+0]=li(g,l,"z","y",r,i),f[m+1]=1-li(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),f[m+0]=1-li(g,l,"z","y",r,i),f[m+1]=1-li(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),f[m+0]=1-li(g,l,"x","z",r,e),f[m+1]=li(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),f[m+0]=1-li(g,l,"x","z",r,e),f[m+1]=1-li(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),f[m+0]=1-li(g,l,"x","y",r,e),f[m+1]=1-li(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),f[m+0]=li(g,l,"x","y",r,e),f[m+1]=1-li(g,l,"y","x",r,t);break}}};var ie=(n,e,t)=>new T(n,e,t);function P(n,e,t=0,i=0,s=0,r,o=0,a=0,l=0){let c=new le(n,e);return c.position.set(t,i,s),c.rotation.set(o,a,l),c.castShadow=!0,c.receiveShadow=!0,r&&r.add(c),c}var ue=(n,e,t,i=.06)=>new Ko(n,e,t,2,Math.min(i,n/2.1,e/2.1,t/2.1)),De=(n,e,t,i=24,s=!1)=>new Je(n,e,t,i,1,s),Kt=(n,e=32)=>new ps(n.map(([t,i])=>new ne(t,i)),e);function Ut(n,e,t,i,s,r=10){let o=e.clone().sub(n),a=o.length(),l=P(De(t,t,a,r),i,0,0,0,s);return l.position.copy(n).add(e).multiplyScalar(.5),l.quaternion.setFromUnitVectors(ie(0,1,0),o.normalize()),l}function nb(n,e,t,i,s){let r=Ut(n,e,t,i,s);for(let o of[n,e]){let a=Ut(o.clone().lerp(e===o?n:e,.02),o,t*1.6,y.metal,s);a.scale.y=1}return r}function Ci(n,e,t,i,s=32){let r=new Ba(n);return P(new wc(r,s,e,8,!1),t,0,0,0,i)}function ib(n,e,t,i,s,r){let o=n.clone().lerp(e,.5);return o.y-=t,Ci([n,n.clone().lerp(o,.5).add(ie(0,-t*.15,0)),o,e.clone().lerp(o,.5).add(ie(0,-t*.15,0)),e],i,s,r,24)}function sh(n,e,t,i,s,r=0,o=.5){let a=new pe;a.position.set(e,t,i),a.rotation.y=r,n.add(a),P(De(.035,.035,s,6),y.metal,-o/2,s/2,0,a),P(De(.035,.035,s,6),y.metal,o/2,s/2,0,a);for(let l=.25;l<s;l+=.32)P(De(.022,.022,o,6),y.metal,0,l,0,a,0,0,Math.PI/2);return a}function ci(n,e,t,i,s,r,o=0,a=8){let l=new pe;l.position.set(i,s,r),l.rotation.y=o,n.add(l),P(ue(e,t,.08,.02),y.dark,0,0,0,l);for(let c=0;c<a;c++)P(new Ge(e*.9,t/a*.45,.04),y.metal,0,-t/2+(c+.5)*t/a,.05,l,-.4,0,0);return l}function jo(n,e,t,i,s,r=0,o=0){let a=new pe;a.position.set(e,t,i),a.rotation.set(o,r,0),n.add(a),P(new Le(s,s*.18,8,24),y.metal,0,0,0,a),P(new Ys(s*.95,24),y.window,0,0,-.01,a);for(let l=0;l<8;l++){let c=l/8*Math.PI*2;P(new Be(s*.06,6,4),y.metal,Math.cos(c)*s*1.12,Math.sin(c)*s*1.12,.02,a)}return a}function kf(n,e,t,i,s=.05){for(let r=0;r<i;r++){let o=r/i*Math.PI*2;P(De(s,s,s*1.2,6),y.metal,Math.cos(o)*e,t,Math.sin(o)*e,n)}}function Uf(n,e,t,i,s=.22,r=0,o=0){let a=new pe;a.position.set(e,t,i),a.rotation.set(r,o,0),n.add(a),P(new Le(s,s*.12,6,18),y.red2,0,0,0,a);for(let l=0;l<3;l++)P(new Ge(s*2,s*.12,s*.12),y.red2,0,0,0,a,0,0,l*Math.PI/3);return P(De(s*.25,s*.25,s*.6,8),y.metal,0,0,-s*.3,a,Math.PI/2,0,0),a}function Jo(n,e,t,i,s=0){let r=new pe;return r.position.set(e,t,i),r.rotation.y=s,n.add(r),P(De(.13,.13,.06,18),y.metal,0,0,0,r,Math.PI/2,0,0),P(new Ys(.11,18),y.screen,0,0,.032,r),r}function Pi(n,e,t,i,s,r,o=0){return P(new Ge(e,t,.02),y.hazard,i,s,r,n,0,o,0)}function hl(n,e,t,i,s,r,o,a,l=0){let c=new pe;c.rotation.y=l,n.add(c);for(let h=0;h<t;h++){let u=.12+e()*.35,f=.1+e()*.3,p=.04+e()*.12,g=e(),v=g<.5?y.panel:g<.8?y.dark:y.metal;e()<.3?P(De(u*.3,u*.3,p*2,10),v,i+e()*(s-i),r+e()*(o-r),a+p,c,Math.PI/2,0,0):P(ue(u,f,p,.015),v,i+e()*(s-i),r+e()*(o-r),a+p/2,c)}return c}function cr(n){let e=n;return()=>(e=e*16807%2147483647,(e-1)/2147483646)}{let n=document.createElement("canvas");n.width=128,n.height=32;let e=n.getContext("2d");e.fillStyle="#f2c11a",e.fillRect(0,0,128,32),e.fillStyle="#1a1a1a";for(let h=-32;h<160;h+=24)e.beginPath(),e.moveTo(h,32),e.lineTo(h+12,32),e.lineTo(h+44,0),e.lineTo(h+32,0),e.fill();let t=new rn(n);t.colorSpace=yt,t.wrapS=us,t.repeat.set(2,1),y.hazard=new he({map:t,roughness:.7}),y.red2=new he({color:13120030,roughness:.5,metalness:.3}),y.chrome=new he({color:14738666,roughness:.15,metalness:1}),y.rubber=new he({color:1842206,roughness:.92}),y.ablative=new he({color:3811874,roughness:.95,map:y.found.map,bumpMap:y.found.bumpMap,bumpScale:3}),y.soil=new he({color:3875864,roughness:1}),y.leaf=new he({color:4168250,roughness:.7,flatShading:!0}),y.leaf2=new he({color:7127626,roughness:.7,flatShading:!0}),y.fruit=new he({color:14694428,roughness:.4}),y.growlight=new he({color:2228241,emissive:16732120,emissiveIntensity:2.2});let i=document.createElement("canvas");i.width=i.height=64;let s=i.getContext("2d");s.fillStyle="#0a1a14",s.fillRect(0,0,64,64),s.strokeStyle="#6dffb5",s.lineWidth=3,s.beginPath(),s.arc(32,36,22,Math.PI*1.1,Math.PI*1.9),s.stroke(),s.beginPath(),s.moveTo(32,36),s.lineTo(46,22),s.stroke();let r=new rn(i);r.colorSpace=yt,y.screen=new he({map:r,emissive:16777215,emissiveMap:r,emissiveIntensity:.9});let o=document.createElement("canvas");o.width=128,o.height=128;let a=o.getContext("2d"),l=a.createLinearGradient(0,0,128,128);l.addColorStop(0,"#16285a"),l.addColorStop(.5,"#2a4a9a"),l.addColorStop(1,"#122048"),a.fillStyle=l,a.fillRect(0,0,128,128),a.strokeStyle="rgba(200,220,255,.55)",a.lineWidth=1;for(let h=16;h<128;h+=16)a.beginPath(),a.moveTo(h,0),a.lineTo(h,128),a.stroke();a.strokeStyle="rgba(220,230,255,.8)",a.lineWidth=2,a.beginPath(),a.moveTo(0,64),a.lineTo(128,64),a.stroke();let c=new rn(o);c.colorSpace=yt,c.anisotropy=8,y.cell=new he({map:c,roughness:.12,metalness:.6,envMapIntensity:1.8})}function _n(n,e,t=!1){let i=t?P(ue(e*2,4,e*2,.12),y.found,0,-1.8,0,n):P(De(e,e*1.05,4,32),y.found,0,-1.8,0,n);i.castShadow=!1,i.userData.found=!0}Object.assign(zn,{solar(n,e){_n(n,2.2,!0),P(ue(1.4,.25,1.4,.05),y.panel,0,.12,0,n),kf(n,.55,.27,8,.04),P(Kt([[0,0],[.3,0],[.26,.4],[.17,.6],[.15,2.1],[0,2.1]]),y.metal,0,.25,0,n),P(ue(.5,.6,.4,.05),y.dark,.32,.65,0,n),Jo(n,.57,.7,0,Math.PI/2),ib(ie(.4,.5,.15),ie(1.3,.05,.9),.15,.03,y.rubber,n);let t=new pe;t.position.y=2.45,n.add(t),P(ue(.5,.42,.5,.06),y.dark,0,0,0,t),P(De(.12,.12,.9,12),y.chrome,0,.1,0,t,0,0,Math.PI/2);let i=new pe;i.position.y=.25,t.add(i),P(ue(4.4,.1,3,.03),y.metal,0,-.02,0,i);for(let s=0;s<4;s++)for(let r=0;r<3;r++){let o=P(new Ge(1.02,.03,.92),y.cell,-1.6+s*1.07,.045,-.97+r*.97,i);o.castShadow=!0}for(let s of[-1.1,1.1])P(new Ge(4.2,.08,.06),y.metal,0,-.1,s,i);for(let s of[-1.5,0,1.5])P(new Ge(.06,.08,2.6),y.metal,s,-.1,0,i);Ut(ie(-1.5,-.12,-1.1),ie(0,-.35,0),.03,y.metal,i),Ut(ie(1.5,-.12,1.1),ie(0,-.35,0),.03,y.metal,i),Ut(ie(1.5,-.12,-1.1),ie(0,-.35,0),.03,y.metal,i),Ut(ie(-1.5,-.12,1.1),ie(0,-.35,0),.03,y.metal,i),P(ue(.3,.12,.2,.02),y.dark,1.9,.08,1.35,i),e.pivot=t,e.panel=i},oxygen(n,e){_n(n,3);let t=cr(11);P(De(3,3.1,.35,40),y.panel,0,.17,0,n);for(let s of[-1.35,1.35]){let r=new pe;r.position.set(s,.35,-.3),n.add(r),P(Kt([[0,.2],[.55,.22],[.9,.45],[1,.8],[1,3.2],[.9,3.55],[.55,3.78],[0,3.8]],40),y.white,0,0,0,r);for(let o of[1.2,2.4])P(new Le(1.005,.03,6,40),y.metal,0,o,0,r,Math.PI/2,0,0);P(De(1.015,1.015,.25,40,!0),y.orange,0,1.8,0,r);for(let o of[-.6,.6])P(ue(1.6,.35,.2,.04),y.dark,0,.25,o,r);P(De(.12,.12,.3,12),y.metal,0,3.9,0,r),Uf(r,0,4.1,0,.18,Math.PI/2,0),Jo(r,0,2.2,1.02),sh(r,0,.3,-1.05,3.4,Math.PI)}P(ue(1.7,1.9,1.6,.1),y.panel,0,1.3,1.2,n),P(ue(1.8,.2,1.7,.05),y.orange,0,2.3,1.2,n),hl(n,t,10,-.7,.7,.6,2,1.95),ci(n,1,.5,0,.7,2.01,0,6),P(new Le(.42,.06,8,28),y.dark,0,1.75,2.02,n);let i=new pe;i.position.set(0,1.75,2.03),n.add(i);for(let s=0;s<6;s++)P(new Ge(.1,.36,.02),y.metal,Math.sin(s*Math.PI/3)*.2,Math.cos(s*Math.PI/3)*.2,0,i,0,.4,-s*Math.PI/3);P(De(.08,.08,.06,12),y.chrome,0,0,0,i,Math.PI/2,0,0),e.fan=i;for(let s of[-1.35,1.35])Ci([ie(s,3.2,.5),ie(s*.7,3,.9),ie(s*.3,2.4,1.2),ie(s*.25,2.2,1.3)],.07,y.metal,n);nb(ie(-1.35,.9,.7),ie(1.35,.9,.7),.06,y.metal,n),Uf(n,.8,.9,.85,.15,0,0),Jo(n,-.5,2,2.01),Jo(n,.5,2,2.01),e.light=Se(6741503,.45,n,.6,2.05,2.05),Pi(n,1.8,.12,0,.42,2.02)},habitat(n,e){_n(n,6.2);let t=cr(23);P(Kt([[0,0],[6.25,0],[6.3,.15],[6.25,.9],[6.05,1.05],[5.95,1.25],[0,1.25]],64),y.panel,0,0,0,n);for(let o=0;o<16;o++){let a=o/16*Math.PI*2;Math.abs(a-Math.PI/2)<.3||ci(n,.7,.4,Math.cos(a)*6.28,.55,Math.sin(a)*6.28,-a+Math.PI/2,4)}let i=P(new Be(5.8,64,24,0,Math.PI*2,0,Math.PI/2),y.white,0,1.2,0,n);i.scale.y=.85;for(let o=0;o<12;o++)P(new Le(5.86,.08,6,32,Math.PI/2),y.panel,0,1.2,0,n,0,o*Math.PI/6,0).scale.set(1,.85,1);for(let[o,a]of[[2.6,5.62],[4.3,4.6]])P(new Le(a,.07,6,64),y.panel,0,o,0,n,Math.PI/2,0,0);e.windows=[];for(let o=0;o<14;o++){let a=o/14*Math.PI*2+.11;if(Math.abs(a-Math.PI/2)<.35)continue;let l=new pe;l.position.set(Math.cos(a)*5.76,2,Math.sin(a)*5.76),l.rotation.y=-a+Math.PI/2,l.rotation.x=-.18,n.add(l),P(ue(1.15,.62,.16,.08),y.metal,0,0,0,l),P(ue(1,.48,.1,.07),y.window,0,0,.05,l)}P(De(1.2,1.4,.5,32),y.panel,0,6.05,0,n),P(new Be(1,32,12,0,Math.PI*2,0,Math.PI/2),y.glass,0,6.3,0,n).castShadow=!1,P(new Le(1.05,.06,6,32),y.metal,0,6.3,0,n,Math.PI/2,0,0),P(De(.06,.09,3.2,8),y.metal,1.6,7,0,n),e.tip=Se(16728128,1,n,1.6,8.7,0),P(new Be(.55,20,8,0,Math.PI*2,0,Math.PI/3),y.white,-1.4,6.6,.6,n).rotation.set(-.9,.5,0),P(De(.05,.05,.9,6),y.metal,-1.4,6.1,.6,n),sh(n,0,1.25,-5.4,3.2,0,.45).rotation.x=-.6;let r=new pe;r.position.set(0,0,6.2),n.add(r),P(ue(2.6,2.9,3,.25),y.white,0,1.45,.2,r),P(ue(2.64,.12,3.04,.05),y.orange,0,2.62,.2,r),P(ue(1.5,2.2,.15,.12),y.metal,0,1.25,1.72,r),P(ue(1.2,1.95,.1,.1),y.dark,0,1.2,1.78,r),jo(r,0,1.75,1.84,.22),P(ue(.12,.4,.08,.03),y.chrome,.45,1.1,1.85,r),Pi(r,1.5,.14,0,.12,1.85);for(let o=0;o<3;o++)P(ue(1.4,.12,.35,.03),y.metal,0,.06+o*0,2.05+o*.35,r).position.y=.3-o*.12;Se(16769184,.8,r,1,2.5,1.8),P(ue(.5,.35,.3,.04),y.dark,-1,2.4,1.75,r),hl(r,t,8,-1.2,1.2,.4,2.6,1.7,0),Ci([ie(4.5,1,3.5),ie(5.6,.6,4.2),ie(6.6,.25,4.6),ie(7.6,.2,4.6)],.12,y.metal,n),Ci([ie(-4.5,1,3.5),ie(-5.4,.7,4.4),ie(-6.4,.25,5)],.1,y.orange,n);for(let[o,a,l]of[[-6.3,-2.4,.4],[6.4,-2,-.3]]){let c=new pe;c.position.set(o,0,a),c.rotation.y=l,n.add(c),P(ue(1.4,1.1,1,.08),y.panel,0,.55,0,c),ci(c,.9,.7,0,.6,.51,0,6),P(new Le(.35,.05,6,20),y.dark,0,1.12,0,c,Math.PI/2,0,0)}},extractor(n,e){_n(n,2.6,!0),P(ue(4.6,.5,4.6,.08),y.panel,0,.25,0,n),Pi(n,4.6,.15,0,.42,2.31),Pi(n,4.6,.15,0,.42,-2.31);let t=6.4,i=.6,s=1.6,r=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let[a,l]of r)Ut(ie(a*s,.5,l*s),ie(a*i,t,l*i),.09,y.orange,n);for(let a=0;a<3;a++){let l=.5+a*(t-.5)/3,c=l+(t-.5)/3,h=s+(i-s)*(a/3),u=s+(i-s)*((a+1)/3);for(let f=0;f<4;f++){let[p,g]=r[f],[v,x]=r[(f+1)%4];Ut(ie(p*h,l,g*h),ie(v*u,c,x*u),.035,y.metal,n),Ut(ie(v*h,l,x*h),ie(p*u,c,g*u),.035,y.metal,n),Ut(ie(p*u,c,g*u),ie(v*u,c,x*u),.04,y.metal,n)}}P(ue(1.8,.3,1.8,.05),y.dark,0,t+.1,0,n);for(let[a,l]of r)P(De(.03,.03,.7,6),y.metal,a*.85,t+.6,l*.85,n);P(De(.45,.45,.6,20),y.white,0,t+.55,0,n),e.light=Se(10476799,1,n,0,t+1.1,0);let o=new pe;o.position.y=3,n.add(o),P(De(.18,.18,4.6,16),y.chrome,0,0,0,o);for(let a=0;a<5;a++)P(new Le(.2,.04,6,16),y.metal,0,-2+a*1,0,o,Math.PI/2,0,0);P(new Ot(.3,.7,16),y.dark,0,-2.6,0,o,Math.PI,0,0),e.drill=o,P(Kt([[0,0],[.9,0],[1,.2],[1,1.8],[.8,2.1],[0,2.15]],32),y.white,2.1,.5,1.3,n),P(De(1.01,1.01,.2,32,!0),y.orange,2.1,1.6,1.3,n),Jo(n,2.1,1.2,2.31),Ci([ie(.3,1,.3),ie(.9,1.2,.8),ie(1.5,1.6,1.2),ie(2.1,2.7,1.3)],.08,y.metal,n),Uf(n,1.2,1.25,1.1,.14,0,.6),P(ue(1.2,1,.9,.08),y.dark,-1.7,1,1.4,n),ci(n,.8,.5,-1.7,1,1.86,0,5)},greenhouse(n,e){_n(n,5,!0),P(ue(10.4,.5,6.4,.1),y.panel,0,.25,0,n);let t=P(new Je(3,3,10,40,1,!0,0,Math.PI),y.glass,0,.5,0,n,0,0,Math.PI/2);t.castShadow=!1;for(let s=0;s<9;s++)P(new Le(3.02,.06,6,28,Math.PI),y.white,-4.8+s*1.2,.5,0,n,0,Math.PI/2,0);for(let s=1;s<6;s++){let r=s/6*Math.PI;P(De(.035,.035,9.8,6),y.white,0,.5+Math.sin(r)*3.02,Math.cos(r)*3.02,n,0,0,Math.PI/2)}for(let s of[-1,1]){let r=P(new Ys(3,32,0,Math.PI),y.glass,s*5,.5,0,n,0,s*Math.PI/2,0);r.castShadow=!1,P(ue(.12,2.2,1.3,.04),y.white,s*5,1.6,0,n)}P(ue(.1,1.9,1,.05),y.dark,5.05,1.45,0,n);let i=cr(71);for(let s of[-1.5,0,1.5]){P(ue(9,.5,.9,.05),y.dark,0,.75,s,n),P(new Ge(8.8,.06,.8),y.soil,0,1.01,s,n);for(let r=0;r<10;r++){let o=-4.1+r*.9+(i()-.5)*.2,a=(r+Math.round(s))%3;if(a===0)for(let l=0;l<4;l++)P(new Dn(.22+i()*.12,0),l%2?y.leaf:y.leaf2,o+(i()-.5)*.3,1.2+i()*.25,s+(i()-.5)*.3,n).castShadow=!1;else if(a===1){P(De(.02,.02,1.2,4),y.leaf,o,1.6,s,n);for(let l=0;l<5;l++)P(new Dn(.14,0),y.leaf2,o+(i()-.5)*.3,1.2+l*.22,s+(i()-.5)*.3,n).castShadow=!1;for(let l=0;l<3;l++)P(new Be(.07,8,6),y.fruit,o+(i()-.5)*.3,1.3+i()*.8,s+(i()-.5)*.25,n)}else for(let l=0;l<6;l++){let c=P(new Ot(.05,.5,4),y.leaf2,o+(i()-.5)*.25,1.25,s+(i()-.5)*.25,n,(i()-.5)*.6,0,(i()-.5)*.6);c.castShadow=!1}}}for(let s of[-.75,.75])P(ue(9,.06,.12,.02),y.growlight,0,2.7,s,n);e.light=Se(16737996,4,n,0,2.3,0),P(Kt([[0,0],[.6,0],[.65,.1],[.65,1.5],[.5,1.7],[0,1.72]],24),y.white,-4.4,.5,3.6,n),Ci([ie(-4.4,1.6,3.6),ie(-4.2,1.9,3),ie(-4,1.5,2.6)],.05,y.metal,n)}});Object.assign(zn,{fabricator(n,e){_n(n,4,!0);let t=cr(41);P(ue(7.4,.4,5.4,.08),y.panel,0,.2,0,n),P(ue(7,3.2,5,.18),y.white,0,2,0,n),P(new Je(2.5,2.5,7,32,1,!1,0,Math.PI),y.panel,0,3.6,0,n,0,0,Math.PI/2).scale.set(1,1,.35);for(let o=0;o<6;o++)P(new Le(2.52,.05,6,24,Math.PI),y.metal,-3.3+o*1.32,3.6,0,n,0,Math.PI/2,0).scale.set(1,.35,1);P(ue(7.1,.2,5.1,.05),y.orange,0,3.55,0,n),P(ue(3.4,2.7,.2,.06),y.metal,0,1.75,2.52,n);for(let o=0;o<12;o++)P(new Ge(3,.16,.05),y.dark,0,.55+o*.2,2.64,n);Pi(n,3.4,.14,0,.35,2.66);for(let o of[-1.9,1.9])Se(16769184,.7,n,o,3,2.6);hl(n,t,16,-3.2,3.2,.8,3,-2.5,Math.PI),ci(n,1.2,.8,2.6,1.6,2.52,0,6),ci(n,1.2,.8,-2.6,1.6,2.52,0,6),Ci([ie(3.5,3,-1.5),ie(4.2,2.5,-1.8),ie(4.4,1,-2),ie(4.4,.4,-2)],.1,y.metal,n);let i=new pe;i.position.set(2.2,3.85,0),n.add(i),P(De(.45,.55,.4,24),y.dark,0,.2,0,i);let s=new pe;s.position.y=.4,s.rotation.z=.35,i.add(s),P(ue(.32,1.8,.32,.08),y.orange,0,.9,0,s),P(De(.22,.22,.45,16),y.metal,0,1.8,0,s,Math.PI/2,0,0);let r=new pe;r.position.y=1.8,r.rotation.z=-1.4,s.add(r),P(ue(.25,1.4,.25,.06),y.orange,0,.7,0,r),P(De(.12,.05,.35,12),y.chrome,0,1.55,0,r),e.arm=i,e.spark=Se(16764006,1,r,0,1.8,0);for(let[o,a,l]of[[-2.6,3.4,1.1],[-1.4,3.3,.9],[-2.1,3.6,.6]])P(ue(l,l,l,.05),y.dark,o,l/2+(l<.7?1.1:0),a,n),P(new Ge(l*1.01,.06,l*1.01),y.orange,o,l*.7+(l<.7?1.1:0),a,n)},turret(n,e){_n(n,1.8),P(Kt([[0,0],[1.9,0],[1.95,.15],[1.6,.9],[1.2,1.2],[0,1.2]],32),y.metal,0,0,0,n),kf(n,1.7,.2,12,.06),P(De(.65,.8,1.2,24),y.dark,0,1.75,0,n);let t=new pe;t.position.y=2.75,n.add(t),P(ue(1.7,1.05,2,.2),y.white,0,0,.1,t),P(ue(1.75,.18,2.05,.06),y.orange,0,.32,.1,t),P(ue(.9,.35,.6,.08),y.dark,0,.6,.4,t);for(let i of[-.42,.42]){P(De(.16,.16,.5,16),y.dark,i,0,-.95,t,Math.PI/2,0,0),P(De(.09,.09,1.9,16),y.metal,i,0,-1.9,t,Math.PI/2,0,0);for(let s=0;s<3;s++)P(new Le(.11,.025,6,16),y.cyan,i,0,-1.4-s*.35,t);P(De(.13,.11,.25,16),y.dark,i,0,-2.9,t,Math.PI/2,0,0)}P(De(.18,.18,.1,16),y.cyan,0,.1,-.92,t,Math.PI/2,0,0),e.eye=Se(3401471,.6,t,0,.1,-.98),ci(t,.9,.4,0,-.1,1.12,0,4),e.head=t},reactor(n,e){_n(n,5.2),P(Kt([[0,0],[5.2,0],[5.3,.2],[5,1.3],[4.6,1.5],[0,1.5]],48),y.panel,0,0,0,n),Pi(n,2.5,.16,0,1,5.06);for(let r=0;r<16;r++){let o=r/16*Math.PI*2;ci(n,.6,.45,Math.cos(o)*5.1,.75,Math.sin(o)*5.1,-o+Math.PI/2,4)}P(new Le(2.6,.9,24,64),y.white,0,3,0,n,Math.PI/2,0,0);for(let r=0;r<16;r++){let o=r/16*Math.PI*2,a=P(new Le(1,.12,8,24),y.dark,Math.cos(o)*2.6,3,Math.sin(o)*2.6,n);a.rotation.y=-o}let t=P(new Be(1.2,32,24),y.cyan,0,3,0,n);t.castShadow=!1;let i=P(new Le(3.9,.12,10,64),y.chrome,0,3,0,n),s=P(new Le(3.9,.12,10,64),y.chrome,0,3,0,n);s.rotation.x=Math.PI/2;for(let r=0;r<6;r++){let o=r*Math.PI/3;Ut(ie(Math.cos(o)*4.6,1.5,Math.sin(o)*4.6),ie(Math.cos(o)*3.2,3,Math.sin(o)*3.2),.18,y.metal,n)}for(let r=0;r<4;r++){let o=r*Math.PI/2+Math.PI/4;P(Kt([[0,0],[.7,0],[.75,.1],[.75,4.2],[.6,4.5],[0,4.5]],24),y.white,Math.cos(o)*4.4,1.5,Math.sin(o)*4.4,n)}e.core=t,e.r1=i,e.r2=s,e.light=Se(3401471,7,n,0,3,0)},beacon(n,e){P(Kt([[0,0],[7.4,0],[7.5,.1],[7.2,.5],[0,.5]],8),y.found,0,-.2,0,n,0,Math.PI/8,0).castShadow=!1,P(De(7.6,7.9,4,8),y.found,0,-2.3,0,n,0,Math.PI/8,0).castShadow=!1,P(new un(4.2,4.8,64),y.orange,0,.32,0,n,-Math.PI/2,0,0),P(new un(5.6,5.75,64),y.white,0,.32,0,n,-Math.PI/2,0,0);let t=document.createElement("canvas");t.width=t.height=128;let i=t.getContext("2d");i.fillStyle="#e8e4dc",i.font="bold 110px sans-serif",i.textAlign="center",i.fillText("H",64,104);let s=new rn(t);s.colorSpace=yt,P(new On(3,3),new he({map:s,transparent:!0,roughness:.8}),0,.33,0,n,-Math.PI/2,0,0),e.lights=[];for(let a=0;a<8;a++){let l=a*Math.PI/4+Math.PI/8;P(De(.15,.2,.15,12),y.dark,Math.cos(l)*6.6,.38,Math.sin(l)*6.6,n),e.lights.push(Se(16755251,1,n,Math.cos(l)*6.6,.55,Math.sin(l)*6.6))}let r=new pe;r.position.set(8.6,0,0),n.add(r);for(let[a,l]of[[-.35,-.35],[.35,-.35],[.35,.35],[-.35,.35]])Ut(ie(a*1.6,0,l*1.6),ie(a*.5,8.5,l*.5),.05,y.metal,r);for(let a=1;a<8.5;a+=1.1){let l=1.6-a/8.5*1.1;P(new Le(l*.5,.025,4,4),y.metal,0,a,0,r,Math.PI/2,0,Math.PI/4)}P(new Be(.9,24,8,0,Math.PI*2,0,Math.PI/3),y.white,0,8.4,.4,r).rotation.set(-1,0,0),e.tip=Se(16724016,1.6,r,0,9.3,0),P(ue(1.2,1,.8,.08),y.dark,-9.6,.5,4.5,n),Jo(n,-9.6,.6,4.92)}});Object.assign(zn,{lab(n,e){_n(n,4),P(De(4.1,4.2,.4,40),y.panel,0,.2,0,n),P(De(3.2,3.4,2.8,40),y.white,0,1.8,0,n),P(De(3.25,3.25,.2,40),y.orange,0,3.1,0,n);for(let i=0;i<10;i++){let s=i/10*Math.PI*2,r=new pe;r.position.set(Math.cos(s)*3.32,2,Math.sin(s)*3.32),r.rotation.y=-s+Math.PI/2,n.add(r),P(ue(.9,.7,.1,.06),y.metal,0,0,0,r),P(ue(.78,.58,.08,.05),y.window,0,0,.04,r)}P(new Be(2.2,40,16,0,Math.PI*2,0,Math.PI/2),y.white,0,3.2,0,n),P(ue(.9,2.4,.2,.05),y.dark,0,4.4,1.5,n,-.9,0,0);let t=P(De(.35,.45,2.6,20),y.metal,0,5.2,.9,n,-.7,0,0);P(new Le(.37,.05,8,20),y.cyan,0,6.15,1.75,n,-.7+Math.PI/2,0,0),e.scope=t,P(De(.05,.07,3,8),y.metal,-2.4,4.5,-1.2,n),e.tip=Se(8382207,1,n,-2.4,6.1,-1.2),P(ue(1.5,1,1,.08),y.dark,3.4,.7,-2,n),ci(n,1,.6,3.4,.7,-1.48,0,5),P(ue(1.3,2.1,.15,.1),y.metal,0,1.25,3.38,n),P(ue(1.1,1.9,.1,.08),y.dark,0,1.2,3.44,n),e.light=Se(8382207,2,n,0,6.3,1.9)},trade(n,e){_n(n,4.8,!0),P(ue(9.6,.4,9.6,.1),y.found,0,.2,0,n),Pi(n,9.6,.15,0,.42,4.82);let t=[y.orange,y.white,y.dark,y.red2],i=0;for(let[o,a,l]of[[-3.2,-2.6,2],[-3.2,-.2,1],[-3.2,2.2,2],[.2,-2.6,1],[.2,2.6,1]])for(let c=0;c<l;c++){let h=P(ue(2.2,1.1,2,.05),t[i++%t.length],o,.95+c*1.12,a,n);for(let u=0;u<5;u++)P(new Ge(.04,.9,2.02),y.metal,o-.8+u*.4,.95+c*1.12,a,n)}let s=new pe;s.position.set(3.2,.4,0),n.add(s);for(let[o,a]of[[-.4,-.4],[.4,-.4],[.4,.4],[-.4,.4]])Ut(ie(o,0,a),ie(o*.6,6,a*.6),.06,y.orange,s);for(let o=1;o<6;o+=1.2)P(new Le(.42-o*.03,.03,4,4),y.orange,0,o,0,s,Math.PI/2,0,Math.PI/4);let r=new pe;r.position.y=6.1,s.add(r),P(ue(.6,.5,.6,.06),y.dark,0,0,0,r),P(ue(.25,.25,6,.04),y.orange,0,.2,-2,r),P(ue(.6,.6,.8,.05),y.dark,0,.1,1.2,r),Ut(ie(0,.1,-4.6),ie(0,-3,-4.6),.015,y.metal,r),P(ue(.5,.2,.5,.03),y.metal,0,-3.1,-4.6,r),e.jib=r,P(De(.05,.05,2.4,6),y.metal,-4.2,1.6,4.2,n),e.tip=Se(6750105,1,n,-4.2,2.9,4.2)}});Object.assign(zn,{apartment(n,e){_n(n,4.4,!0);let t=cr(91),[i,s]=Za;P(ue(8.6,.6,8.6,.15),y.panel,0,.3,0,n);let r=(o,a,l,c,h)=>{P(ue(l,c,l,.25),h,o,.6+c/2,a,n);for(let u=2.2;u<c;u+=2.2)P(new Ge(l+.08,.12,l+.08),y.white,o,.6+u,a,n);for(let u of[-1,1])P(new Ge(.16,c,.16),y.metal,o+u*l/2,.6+c/2,a+l/2,n),P(new Ge(.16,c,.16),y.metal,o+u*l/2,.6+c/2,a-l/2,n)};r(-1.3,-1.2,4.6,17,i),r(2.1,2,3.6,11,s),P(ue(4,1.2,4,.3),y.white,-1.3,18.2,-1.2,n),P(ue(3,.9,3,.3),y.white,2.1,12.1,2,n),P(ue(2.6,1.1,1.4,.4),y.glass,.6,7.4,.6,n,0,Math.PI/4,0).castShadow=!1;for(let o of[6.9,7.9])P(ue(2.7,.1,1.5,.04),y.metal,.6,o,.6,n,0,Math.PI/4,0);for(let o=0;o<6;o++)P(new Dn(.35+t()*.2,0),y.leaf2,1.4+t()*1.4,12.75,1.3+t()*1.4,n);hl(n,t,8,-2.8,.2,18.6,18.9,.6),P(De(.08,.1,4,8),y.metal,-1.3,20.8,-1.2,n),e.tip=Se(16728128,1.4,n,-1.3,22.9,-1.2),P(ue(2.4,.15,1.6,.05),y.orange,-1.3,3.2,1.9,n);for(let o of[-2.3,-.3])P(De(.05,.05,2.6,8),y.metal,o,1.9,2.6,n);Se(16767392,1.2,n,-1.3,3,2.2)},vfarm(n,e){_n(n,4),P(De(4,4.2,.8,40),y.panel,0,.4,0,n);let t=P(De(3.3,3.3,15,40,!0),y.glass,0,8.3,0,n);t.castShadow=!1;for(let s=0;s<8;s++){let r=s/8*Math.PI*2;P(new Ge(.14,15,.14),y.white,Math.cos(r)*3.32,8.3,Math.sin(r)*3.32,n)}let i=cr(55);for(let s=0;s<6;s++){let r=1.4+s*2.4;P(De(3.1,3.1,.18,40),y.white,0,r,0,n),P(new Le(3.15,.06,6,40),y.metal,0,r+.1,0,n,Math.PI/2,0,0),P(De(2.8,2.8,.12,40),y.soil,0,r+.15,0,n);for(let o=0;o<16;o++){let a=o/16*Math.PI*2+s;P(new Dn(.22+i()*.12,0),o%2?y.leaf:y.leaf2,Math.cos(a)*(1.7+i()*.9),r+.4,Math.sin(a)*(1.7+i()*.9),n).castShadow=!1}P(new Le(2,.04,6,32),y.growlight,0,r+2.1,0,n,Math.PI/2,0,0)}P(De(.5,.5,15,16),y.metal,0,8.3,0,n),P(new Be(3.3,40,12,0,Math.PI*2,0,Math.PI/2),y.glass,0,15.8,0,n).castShadow=!1,P(new Le(3.32,.1,8,40),y.orange,0,15.8,0,n,Math.PI/2,0,0),Ci([ie(3.4,1,1),ie(4.4,.6,1.4),ie(5.2,.3,2.2)],.1,y.metal,n),e.light=Se(16737996,8,n,0,8,0)},lifehub(n,e){_n(n,5.8),P(Kt([[0,0],[6,0],[6.1,.2],[5.8,1.2],[0,1.2]],48),y.panel,0,0,0,n),P(new Be(4.4,48,20,0,Math.PI*2,0,Math.PI/2),y.white,0,1.2,0,n).scale.y=.75,P(new Le(4.45,.18,10,48),y.orange,0,1.6,0,n,Math.PI/2,0,0);for(let i=0;i<8;i++){let s=i/8*Math.PI*2;ci(n,1,.5,Math.cos(s)*5.9,.6,Math.sin(s)*5.9,-s+Math.PI/2,4)}for(let i=0;i<4;i++){let s=i*Math.PI/2+Math.PI/4,r=Math.cos(s)*5,o=Math.sin(s)*5;P(Kt([[0,0],[.95,0],[1,.2],[1,4.4],[.8,4.8],[0,4.85]],28),y.white,r,.4,o,n),P(De(1.02,1.02,.3,28,!0),y.cyan,r,3.6,o,n),sh(n,r*1.2,.4,o*1.2,4.2,-s-Math.PI/2,.4),Ci([ie(r*.8,2.6,o*.8),ie(r*.6,2.8,o*.6),ie(r*.45,2.4,o*.45)],.12,y.metal,n)}P(De(1.6,1.8,.6,32),y.dark,0,4.4,0,n),P(new Le(1.7,.08,6,32),y.metal,0,4.75,0,n,Math.PI/2,0,0);let t=new pe;t.position.y=4.8,n.add(t);for(let i=0;i<5;i++)P(ue(1.5,.05,.4,.02),y.metal,Math.cos(i*1.256)*.8,0,Math.sin(i*1.256)*.8,t,0,-i*1.256,.25);e.fan=t,e.light=Se(6741503,4,n,0,5.2,0)},plaza(n,e){_n(n,7.2),P(Kt([[0,0],[7.3,0],[7.4,.1],[7.2,.4],[0,.4]],64),y.found,0,0,0,n);for(let s=2.5;s<7;s+=1.5)P(new Le(s,.03,4,64),y.metal,0,.41,0,n,Math.PI/2,0,0);P(new un(5.4,5.75,64),y.orange,0,.42,0,n,-Math.PI/2,0,0),P(Kt([[0,0],[2.1,0],[2,.3],[1.5,.5],[1.4,1.3],[1.6,1.45],[0,1.45]],40),y.white,0,.4,0,n),P(new Le(1.55,.06,8,40),y.cyan,0,1.85,0,n,Math.PI/2,0,0);for(let s=0;s<6;s++){let r=s*Math.PI/3+Math.PI/6,o=new pe;o.position.set(Math.cos(r)*5,.4,Math.sin(r)*5),o.rotation.y=-r+Math.PI/2,n.add(o),P(ue(2.2,.12,.6,.05),y.panel,0,.45,0,o),P(ue(2.2,.5,.1,.04),y.panel,0,.75,.28,o);for(let l of[-.9,.9])P(ue(.1,.45,.5,.03),y.metal,l,.22,0,o);let a=r+.52;P(Kt([[0,0],[.18,0],[.12,.2],[.06,.3],[.05,3.4],[0,3.4]],12),y.metal,Math.cos(a)*6.6,.4,Math.sin(a)*6.6,n),P(new Be(.2,12,8),y.lamp,Math.cos(a)*6.6,3.95,Math.sin(a)*6.6,n),Se(16767392,1.1,n,Math.cos(a)*6.6,3.95,Math.sin(a)*6.6)}let t=P(new Be(1.5,40,24),new Ke({map:zn._earthTex?zn._earthTex():null,color:10479359,transparent:!0,opacity:.7,blending:dt,depthWrite:!1}),0,4,0,n);t.castShadow=!1;for(let s=0;s<2;s++){let r=P(new Le(2+s*.3,.015,4,64),y.cyan,0,4,0,n,Math.PI/2+.3-s*.6,0,0);r.castShadow=!1}let i=Se(6736127,5,n,0,4,0);P(new Je(1.1,1.5,2.2,32,1,!0),new Ke({color:8382207,transparent:!0,opacity:.1,blending:dt,depthWrite:!1,side:qt}),0,2.95,0,n).castShadow=!1,e.earth=t,e.halo=i},drones(n,e){_n(n,3.8,!0),P(ue(7.6,.5,7.6,.12),y.panel,0,.25,0,n),Pi(n,7.6,.14,0,.42,3.81),Pi(n,7.6,.14,0,.42,-3.81);for(let[s,r]of[[-1.9,-1.9],[1.9,-1.9],[-1.9,1.9],[1.9,1.9]]){P(De(1.15,1.2,.12,32),y.dark,s,.56,r,n),P(new un(.8,.95,32),y.orange,s,.63,r,n,-Math.PI/2,0,0);for(let o=0;o<4;o++){let a=o*Math.PI/2;P(De(.06,.06,.06,8),y.lamp,s+Math.cos(a)*1.05,.64,r+Math.sin(a)*1.05,n)}}P(ue(1.4,4.2,1.4,.15),y.white,3,2.4,3,n),P(ue(1.6,.9,1.6,.15),y.glass,3,4.6,3,n).castShadow=!1,P(ue(1.7,.15,1.7,.05),y.orange,3,5.1,3,n),sh(n,3,.5,2.25,4,0,.4);let t=new pe;t.position.set(3,5.5,3),n.add(t);let i=P(new Be(.9,24,8,0,Math.PI*2,0,Math.PI/3),y.white,0,.2,0,t);i.rotation.x=Math.PI*.6,P(De(.04,.04,.8,6),y.metal,0,.3,.25,t).rotation.x=1.1,e.dish=t,e.light=Se(8382207,1.2,n,3,6.3,3),P(ue(1.6,1,1,.08),y.dark,-3,1,3,n),ci(n,1,.6,-3,1,3.51,0,5)},terraformer(n,e){_n(n,7),P(Kt([[0,0],[7.4,0],[7.5,.3],[7,2],[5.5,2.4],[0,2.4]],6),y.panel,0,0,0,n),P(Kt([[0,0],[4.4,0],[3.8,8],[3,16],[2.3,24],[1.6,28],[0,28.5]],6),y.white,0,2.4,0,n);for(let i of[6,14,22])P(new Le(4.6-i*.11,.3,6,6),y.orange,0,2.4+i,0,n,Math.PI/2,0,Math.PI/6);for(let i=0;i<6;i++){let s=i*Math.PI/3;Ut(ie(Math.cos(s)*7,2,Math.sin(s)*7),ie(Math.cos(s)*3.5,14,Math.sin(s)*3.5),.35,y.metal,n)}for(let i=0;i<6;i++){let s=i*Math.PI/3+Math.PI/6;ci(n,1.4,2.4,Math.cos(s)*4,5,Math.sin(s)*4,-s+Math.PI/2,8)}e.rings=[];for(let i=0;i<3;i++){let s=P(new Le(6-i*1.2,.22,10,64),y.cyan,0,10+i*8,0,n);s.castShadow=!1,e.rings.push(s)}P(De(1.2,1.6,2,24),y.dark,0,31.5,0,n);let t=P(new Je(.6,1.4,400,16,1,!0),new Ke({color:6743807,transparent:!0,opacity:0,blending:dt,depthWrite:!1,side:qt}),0,232,0,n);t.castShadow=!1,t.receiveShadow=!1,e.beam=t,e.top=Se(6743807,9,n,0,32.5,0)},launch(n,e){_n(n,9,!0),P(ue(18.4,1.2,18.4,.2),y.found,0,.6,0,n),P(new un(4.8,5.8,48),y.orange,0,1.22,0,n,-Math.PI/2,0,0),P(De(3.6,3.6,.3,32),y.dark,0,1.3,0,n),Pi(n,18.4,.2,0,1.25,9.21);let t=new pe;t.position.set(7.5,1.2,0),n.add(t);for(let[r,o]of[[-1.5,-1.5],[1.5,-1.5],[1.5,1.5],[-1.5,1.5]])Ut(ie(r,0,o),ie(r,34,o),.14,y.orange,t);for(let r=0;r<34;r+=2.5)for(let[o,a,l,c]of[[-1.5,-1.5,1.5,-1.5],[1.5,-1.5,1.5,1.5],[1.5,1.5,-1.5,1.5],[-1.5,1.5,-1.5,-1.5]])Ut(ie(o,r,a),ie(l,r+2.5,c),.04,y.metal,t),Ut(ie(o,r,a),ie(l,r,c),.05,y.metal,t);for(let r of[12,24])P(ue(4.2,.4,1,.06),y.dark,-3.2,r,0,t),Ut(ie(-1.5,r,0),ie(-5,r,0),.06,y.metal,t);let i=new pe;i.position.y=1.4,n.add(i),P(Kt([[0,0],[2.6,.2],[2.8,2],[2.7,22],[2.4,25],[1.6,29],[.6,31.5],[0,32]],40),y.white,0,0,0,i);for(let r of[8,19])P(De(2.79,2.79,1.2,40,!0),y.orange,0,r,0,i);for(let r of[4,12,16,23])P(new Le(2.76,.04,6,40),y.metal,0,r,0,i,Math.PI/2,0,0);for(let r=0;r<4;r++)jo(i,Math.cos(r*1.57)*2.62,25.5,Math.sin(r*1.57)*2.62,.3,Math.PI/2-r*1.57,0);for(let r=0;r<4;r++){let o=r*Math.PI/2,a=P(ue(.35,7,3.4,.1),y.panel,Math.cos(o)*3.1,3.5,Math.sin(o)*3.1,i);a.rotation.y=-o}for(let r=0;r<5;r++){let o=r*Math.PI*2/5;P(Kt([[.4,0],[.6,-.3],[1,-1.4],[.9,-1.4],[.5,-.35]],20),y.metal,Math.cos(o)*1.4,.2,Math.sin(o)*1.4,i)}let s=new le(new Ot(3,16,16,1,!0),y.flame);s.rotation.x=Math.PI,s.position.y=-8,s.visible=!1,i.add(s),e.ship=i,e.flame=s,e.tip=Se(16777215,3,i,0,32.5,0)},monument(n,e){_n(n,6);for(let s=0;s<3;s++)P(De(6.2-s*1.2,6.4-s*1.2,.6,8),s%2?y.white:y.panel,0,.3+s*.6,0,n,0,Math.PI/8,0);let t=["\u706B\u661F","\u6728\u536B\u4E8C","\u5F00\u666E\u52D2"];for(let s=0;s<3;s++){let r=s*Math.PI*2/3,o=new pe;o.position.set(Math.cos(r)*1,1.8,Math.sin(r)*1),o.rotation.y=-r+Math.PI/2,n.add(o),P(new Ge(1.8,26,.5),y.white,0,13,0,o,0,0,0).geometry.translate(0,0,0);let a=document.createElement("canvas");a.width=128,a.height=512;let l=a.getContext("2d");l.fillStyle="#f0ebe2",l.fillRect(0,0,128,512),l.fillStyle="#b8862e",l.font="600 54px sans-serif",l.textAlign="center",[...t[s]].forEach((h,u)=>l.fillText(h,64,120+u*70));let c=new rn(a);c.colorSpace=yt,P(new On(1.4,5.6),new he({map:c,roughness:.6}),0,6,.26,o)}e.rings=[];let i=[16742954,6743807,10551104];for(let s=0;s<3;s++){let r=P(new Le(3.6-s*.5,.12,10,64),new he({color:1118481,emissive:i[s],emissiveIntensity:2}),0,16+s*4,0,n);r.castShadow=!1,e.rings.push(r)}P(new Zs(1,0),y.chrome,0,30,0,n),e.top=Se(16777215,8,n,0,30,0)}});function Fg(){let n=new pe,e=cr(5);P(Kt([[0,1],[2.6,1.05],[3.25,1.25],[3.35,1.45],[3.2,1.6],[0,1.6]],48),y.ablative,0,0,0,n),P(Kt([[3.05,1.6],[3,2.2],[2.75,3.4],[2.35,4.6],[1.95,5.6],[1.75,6],[0,6]],48),y.white,0,0,0,n),P(Kt([[3.02,2.05],[3.04,2.35],[2.98,2.4]],48),y.orange,0,0,0,n),P(Kt([[2,5.45],[2.02,5.6],[1.95,5.62]],48),y.orange,0,0,0,n),P(De(1.6,1.75,.35,40),y.panel,0,6.15,0,n),P(new Le(1.25,.12,10,40),y.metal,0,6.38,0,n,Math.PI/2,0,0),P(new Be(1.15,32,12,0,Math.PI*2,0,Math.PI/2),y.white,0,6.35,0,n).scale.y=.6,kf(n,1.45,6.34,16,.04);let t=jo(n,0,4.55,2.33,.36,0,-.33);jo(n,-.95,4.35,2.2,.26,-.42,-.33),jo(n,.95,4.35,2.2,.26,.42,-.33);let i=new pe;i.position.set(2.82,2.75,0),i.rotation.set(0,Math.PI/2,.22),n.add(i),P(ue(1.25,1.75,.14,.12),y.metal,0,0,0,i),P(ue(1.05,1.55,.1,.1),y.panel,0,0,.06,i),P(ue(.1,.45,.08,.03),y.chrome,.38,-.05,.13,i),jo(i,0,.45,.13,.15),Pi(i,1.25,.1,0,-.92,.08);for(let h=0;h<6;h++)P(ue(.9,.06,.28,.02),y.metal,3.3+h*.2,1.75-h*.29,0,n);Ut(ie(3.2,1.9,-.48),ie(4.4,.1,-.48),.035,y.metal,n),Ut(ie(3.2,1.9,.48),ie(4.4,.1,.48),.035,y.metal,n);for(let h=0;h<4;h++){let u=h*Math.PI/2+Math.PI/4,f=new pe;f.position.set(Math.cos(u)*2.15,5,Math.sin(u)*2.15),f.rotation.y=-u,n.add(f),P(ue(.36,.36,.36,.05),y.dark,0,0,0,f);for(let[p,g]of[[.25,0],[-.25,0],[0,.25],[0,-.25]]){let v=P(new Ot(.07,.16,10,1,!0),y.metal,0,g,p,f);v.rotation.x=g?g>0?0:Math.PI:p>0?Math.PI/2:-Math.PI/2}}for(let h=0;h<4;h++){let u=h*Math.PI/2,f=P(Kt([[.18,1.05],[.22,.85],[.42,.45],[.55,.2],[.5,.2],[.38,.45],[.15,.85]],24),y.dark,Math.cos(u)*1.2,0,Math.sin(u)*1.2,n);f.material=y.metal}P(De(.7,.9,.5,24),y.dark,0,.8,0,n);for(let h=0;h<4;h++){let u=h*Math.PI/2+Math.PI/4,f=Math.cos(u),p=Math.sin(u),g=ie(f*2.7,2.1,p*2.7),v=ie(f*3.55,1,p*3.55),x=ie(f*4.1,.18,p*4.1);Ut(g,v,.11,y.white,n),P(new Be(.15,12,8),y.metal,v.x,v.y,v.z,n),Ut(v,x,.075,y.chrome,n),Ut(v.clone().lerp(x,.3),v.clone().lerp(x,.3).add(ie(0,.01,0)),.1,y.metal,n),Ut(ie(f*2.4,1.3,p*2.4),v.clone().lerp(x,.25),.05,y.metal,n),Ut(ie(f*2.6-p*.6,1.7,p*2.6+f*.6),v,.035,y.metal,n),Ut(ie(f*2.6+p*.6,1.7,p*2.6-f*.6),v,.035,y.metal,n),P(Kt([[0,0],[.55,0],[.6,.06],[.35,.2],[.1,.22],[0,.22]],24),y.metal,x.x,0,x.z,n)}P(De(.04,.05,1.8,8),y.metal,.6,7.1,-.4,n),P(new Be(.5,24,8,0,Math.PI*2,0,Math.PI/3.2),y.white,-.7,6.95,.3,n).rotation.set(-.8,.6,0),P(De(.04,.04,.8,6),y.metal,-.7,6.55,.3,n),Ci([ie(-1.6,5.7,-1.4),ie(-2.3,4.3,-1.9),ie(-2.9,2.6,-2.1),ie(-3.05,1.7,-2.2)],.05,y.dark,n),Ci([ie(1.6,5.7,-1.4),ie(2.3,4.3,-1.9),ie(2.9,2.6,-2.05)],.04,y.orange,n),hl(n,e,14,-1.2,1.2,2.4,3.6,-2.95,Math.PI);let r=document.createElement("canvas");r.width=512,r.height=96;let o=r.getContext("2d");o.clearRect(0,0,512,96),o.fillStyle="#d4581c",o.font="bold 54px sans-serif",o.textAlign="center",o.fillText("\u65B9\u821F\u4E00\u53F7 \xB7 ARK-1",256,66);let a=new rn(r);a.colorSpace=yt;let l=new le(new On(3.4,.64),new he({map:a,transparent:!0,roughness:.6}));l.position.set(0,3.2,-2.87),l.rotation.set(.32,Math.PI,0),n.add(l);let c=Se(6750105,1.4,n,.6,8.05,-.4);return{group:n,beacon:c,window:t}}var ih=new he({color:2757906,roughness:.28,metalness:.7,flatShading:!0}),Nf=new he({color:2757906,roughness:.35,metalness:.7});function Og(n,e,t){let i=new pe,s=new pe;i.add(s);let r=new he({color:2230272,emissive:e.emissive,emissiveIntensity:1.6});P(new Dn(.75,1),ih,0,1,.2,s).scale.set(1.05,.62,1),P(new Dn(.85,1),ih,0,1.1,-.85,s).scale.set(.95,.7,1.25),P(new Dn(.42,1),ih,0,.95,1,s).scale.set(1.1,.7,1);let c=cr(Math.floor(Math.random()*1e6)+1);for(let u=0;u<9;u++){let f=P(new Zs(.22+c()*.15,0),e,(c()-.5)*.9,1.45+c()*.25,-1.1+c()*1.4,s,(c()-.5)*.8,c()*3,(c()-.5)*.8);f.scale.y=1.8+c()*1.4}for(let[u,f,p]of[[-.17,1.03,.05],[.17,1.03,.05],[-.1,1.12,.035],[.1,1.12,.035]])P(new Be(p,10,8),t,u,f,1.36,s);for(let u of[-1,1])P(new Ot(.06,.45,6),ih,u*.16,.78,1.42,s).rotation.set(Math.PI/2+.3,0,u*.35);let h=[];for(let u=0;u<6;u++){let f=u<3?-1:1,p=u%3-1,g=new pe;g.position.set(f*.62,1,p*.55+.1),s.add(g);let v=ie(0,0,0),x=ie(f*.75,.45,p*.15),m=ie(f*1.35,.1,p*.25),_=ie(f*1.55,-.98,p*.35);Ut(v,x,.08,Nf,g,14),Ut(x,m,.065,Nf,g,14),Ut(m,_,.045,Nf,g,14);for(let E of[x,m])P(new Be(.09,8,6),r,E.x,E.y,E.z,g);P(new Ot(.05,.18,6),e,_.x,_.y-.05,_.z,g,Math.PI,0,0),g.userData.phase=u%2*Math.PI+p*.5,g.userData.side=f,h.push(g)}return i.scale.setScalar(n),{group:i,legs:h,inner:s}}var tn=n=>()=>Ig(n)>=1,hr=(n,e)=>({check:()=>d.stats.mined[n]>=e,prog:()=>`${Math.min(d.stats.mined[n],e)}/${e}`}),Gr=n=>({text:`\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C${kn[n].name}\u300D`,check:()=>d.cityLevel>=n,prog:()=>`\u4EBA\u53E3 ${d.colony.pop}/${kn[n].pop}`}),oh=n=>({text:`\u4EBA\u53E3\u8FBE\u5230 ${n}`,check:()=>d.colony.pop>=n,prog:()=>`${d.colony.pop}/${n}`}),zg={text:"\u53D1\u5C04\u6B96\u6C11\u8230",check:()=>!!d.launched,prog:()=>"\u9760\u8FD1\u53D1\u5C04\u53F0\u6309 E"},sb=[{title:"\u7B2C\u4E00\u7AE0 \xB7 \u7740\u9646",sub:"\u6D3B\u4E0B\u53BB",goals:[{text:"\u91C7\u96C6\u94C1\u77FF",...hr("iron",10)},{text:"\u91C7\u96C6\u7845\u6676",...hr("silicon",6)},{text:"\u91C7\u96C6\u6C34\u51B0",...hr("ice",6)},{text:"\u5EFA\u9020\u592A\u9633\u80FD\u9635\u5217",check:tn("solar")},{text:"\u5EFA\u9020\u5236\u6C27\u7AD9",check:tn("oxygen")}],radio:[["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u7740\u9646\u6210\u529F\u3002\u5916\u90E8\u6C14\u538B 0.6 \u5343\u5E15\uFF0C\u6C14\u6E29\u96F6\u4E0B 63 \u6444\u6C0F\u5EA6\u3002\u6B22\u8FCE\u6765\u5230\u706B\u661F\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u65B9\u821F\u4E00\u53F7\uFF0C\u8FD9\u91CC\u662F\u5730\u7403\u8054\u5408\u6307\u6325\u4E2D\u5FC3\u3002\u542C\u5230\u8BF7\u56DE\u7B54\u2026\u2026\u5F88\u597D\u3002\u4F60\u662F\u7B2C\u4E00\u4E2A\u8E0F\u4E0A\u8FD9\u7247\u571F\u5730\u7684\u4EBA\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u7740\u9646\u8231\u53EA\u80FD\u5728\u5B83\u5468\u56F4\u5F88\u5C0F\u7684\u8303\u56F4\u5185\u7ED9\u4F60\u8865\u6C27\u3002\u6309\u4F4F\u5DE6\u952E\u7528\u91C7\u77FF\u6FC0\u5149\u91C7\u96C6\u94C1\u77FF\u3001\u7845\u6676\u548C\u6C34\u51B0\uFF0C\u7136\u540E\u6309 B \u5EFA\u8D77\u7B2C\u4E00\u5EA7\u5236\u6C27\u7AD9\u3002"]]},{title:"\u7B2C\u4E8C\u7AE0 \xB7 \u7B2C\u4E00\u4E2A\u5BB6",sub:"\u4E3A\u540E\u6765\u7684\u4EBA\u70B9\u4E00\u76CF\u706F",goals:[{text:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",check:tn("habitat")},{text:"\u5EFA\u9020\u6E29\u5BA4",check:tn("greenhouse")},{text:"\u5EFA\u9020\u6C34\u51B0\u63D0\u53D6\u5668",check:tn("extractor")},{text:"\u5EFA\u9020\u7740\u9646\u573A",check:tn("beacon")},{text:"\u8FCE\u63A5\u7B2C\u4E00\u6279\u79FB\u6C11",check:()=>d.stats.arrived>=1,prog:()=>d.colony.support>0?"\u7B49\u5F85\u98DE\u8239":"\u9700\u8981\u4F4F\u623F/\u6C27/\u6C34/\u98DF\u7269/\u7535"}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5236\u6C27\u7AD9\u8FD0\u8F6C\u6B63\u5E38\uFF01\u5B83\u5468\u56F4 14 \u7C73\u90FD\u80FD\u7ED9\u5B87\u822A\u670D\u8865\u6C27\uFF0C\u4F60\u53EF\u4EE5\u8D70\u5F97\u66F4\u8FDC\u4E86\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5730\u7403\u4E0A\u6709\u5341\u4E07\u4EBA\u62A5\u540D\u4E86\u79FB\u6C11\u8BA1\u5212\u3002\u5EFA\u597D\u7A79\u9876\u3001\u6E29\u5BA4\u3001\u6C34\u6E90\u548C\u7740\u9646\u573A\u2014\u2014\u7ED9\u4ED6\u4EEC\u4E00\u4E2A\u53EF\u4EE5\u56DE\u7684\u5BB6\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u63D0\u793A\uFF1A\u592A\u9633\u80FD\u5728\u591C\u95F4\u53EA\u5269\u56DB\u6210\u529F\u7387\u3002\u591A\u5EFA\u51E0\u5EA7\uFF0C\u6B96\u6C11\u5730\u624D\u4E0D\u4F1A\u5728\u591C\u91CC\u65AD\u7535\u3002"]]},{title:"\u7B2C\u4E09\u7AE0 \xB7 \u957F\u591C",sub:"\u5B88\u62A4\u6211\u4EEC\u7684\u4EBA",goals:[{text:"\u5EFA\u9020\u5236\u9020\u5DE5\u574A",check:tn("fabricator")},{text:"\u5236\u9020\u7B49\u79BB\u5B50\u6B65\u67AA",check:()=>!!d.upgrades.rifle},{text:"\u5EFA\u9020\u9632\u5FA1\u70AE\u5854",check:tn("turret")},{text:"\u51FB\u9000\u9508\u8680\u86DB",check:()=>d.stats.kills>=6,prog:()=>`${Math.min(d.stats.kills,6)}/6`}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u2026\u2026\u7B2C\u4E00\u6279\u79FB\u6C11\u5B89\u5168\u7740\u9646\u4E86\u3002\u6211\u8FD9\u8FB9\u7684\u63A7\u5236\u5BA4\u91CC\uFF0C\u6240\u6709\u4EBA\u90FD\u7AD9\u8D77\u6765\u9F13\u638C\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u5730\u8D28\u96F7\u8FBE\u5728\u591C\u95F4\u63A2\u6D4B\u5230\u5927\u91CF\u5730\u4E0B\u79FB\u52A8\u4FE1\u53F7\u3002\u5B83\u4EEC\u4F3C\u4E4E\u88AB\u6B96\u6C11\u5730\u7684\u70ED\u91CF\u5438\u5F15\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5EFA\u4E00\u5EA7\u5236\u9020\u5DE5\u574A\uFF0C\u9020\u6B66\u5668\uFF0C\u5EFA\u70AE\u5854\u3002\u5B88\u4F4F\u5927\u5BB6\u3002"]]},{title:"\u7B2C\u56DB\u7AE0 \xB7 \u624E\u6839",sub:"\u8BA9\u706F\u706B\u5F7B\u591C\u4E0D\u7184",goals:[{text:"\u6B96\u6C11\u5730\u4EBA\u53E3\u8FBE\u5230 12",check:()=>d.colony.pop>=12,prog:()=>`${d.colony.pop}/12`},{text:"\u91C7\u96C6\u949B\u77FF",...hr("titanium",12)},{text:"\u5EFA\u9020\u805A\u53D8\u53CD\u5E94\u5806",check:tn("reactor")}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u4F60\u4EEC\u6491\u8FC7\u4E86\u957F\u591C\u3002\u73B0\u5728\uFF0C\u662F\u65F6\u5019\u8BA9\u6B96\u6C11\u5730\u771F\u6B63\u624E\u6839\u4E86\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5728\u8FDC\u65B9\u7684\u7D2B\u8272\u6676\u4F53\u77FF\u8109\u4E2D\u68C0\u6D4B\u5230\u9AD8\u7EAF\u5EA6\u949B\u3002\u6CE8\u610F\uFF1A\u90A3\u91CC\u6709\u4F53\u578B\u66F4\u5927\u7684\u9508\u8680\u86DB\u5B88\u536B\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u63D0\u793A\uFF1A\u5728\u5236\u9020\u5DE5\u574A\u53EF\u4EE5\u9020\u55B7\u6C14\u80CC\u5305\u548C\u5927\u5BB9\u91CF\u6C27\u6C14\u7F50\uFF0C\u9002\u5408\u957F\u9014\u52D8\u63A2\u3002"]]},{title:"\u7B2C\u4E94\u7AE0 \xB7 \u65B0\u5BB6\u56ED",sub:"\u6B64\u5FC3\u5B89\u5904\u662F\u543E\u4E61",goals:[{text:"\u5EFA\u9020\u5927\u6C14\u6539\u9020\u5854",check:tn("terraformer")},{text:"\u6B96\u6C11\u5730\u4EBA\u53E3\u8FBE\u5230 20",check:()=>d.colony.pop>=20,prog:()=>`${d.colony.pop}/20`},{text:"\u5B8C\u6210\u5927\u6C14\u6539\u9020",check:()=>d.terraform>=1&&d.ended&&!d.endingShown,prog:()=>`${Math.floor(d.terraform*100)}%`}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u805A\u53D8\u53CD\u5E94\u5806\u70B9\u706B\u6210\u529F\u3002\u6B96\u6C11\u5730\u7B2C\u4E00\u6B21\u5728\u591C\u91CC\u4E5F\u706F\u706B\u901A\u660E\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u6700\u540E\u4E00\u6B65\u4E86\u3002\u5927\u6C14\u6539\u9020\u5854\u2014\u2014\u5B83\u8981\u51E0\u5341\u5E74\u624D\u80FD\u5F7B\u5E95\u6539\u53D8\u706B\u661F\u3002\u4F46\u7B2C\u4E00\u573A\u96E8\uFF0C\u4E5F\u8BB8\u5C31\u5728\u660E\u5929\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u63D0\u793A\uFF1A\u57CE\u5E02\u7B49\u7EA7\u63D0\u5347\u540E\u9886\u5730\u4F1A\u6269\u5927\uFF0C\u5E76\u89E3\u9501\u516C\u5BD3\u5854\u3001\u5782\u76F4\u519C\u573A\u3001\u751F\u6001\u4E2D\u67A2\u3002"]]},{title:"\u7B2C\u516D\u7AE0 \xB7 \u661F\u8FB0\u5927\u6D77",sub:"\u4E0B\u4E00\u9897\u661F\u7403",goals:[Gr(5),{text:"\u5EFA\u9020\u661F\u9645\u53D1\u5C04\u53F0",check:tn("launch")},zg],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u706B\u661F\u5DF2\u7ECF\u662F\u5BB6\u4E86\u3002\u4F46\u4EBA\u7C7B\u7684\u6545\u4E8B\uFF0C\u4ECE\u6765\u4E0D\u6B62\u4E8E\u4E00\u4E2A\u5BB6\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u6728\u536B\u4E8C\xB7\u6B27\u7F57\u5DF4\uFF1A\u51B0\u58F3\u4E4B\u4E0B\u63A2\u6D4B\u5230\u6DB2\u6001\u6D77\u6D0B\u3002\u628A\u706B\u661F\u53D1\u5C55\u6210\u300C\u661F\u6E2F\u300D\uFF0C\u5C31\u80FD\u5EFA\u9020\u661F\u9645\u53D1\u5C04\u53F0\u3002"]]}],rb=[{title:"\u7B2C\u4E00\u7AE0 \xB7 \u51B0\u539F",sub:"\u5728\u6728\u661F\u7684\u6CE8\u89C6\u4E0B",goals:[{text:"\u91C7\u96C6\u6C34\u51B0",...hr("ice",15)},{text:"\u91C7\u96C6\u94C1\u77FF",...hr("iron",10)},{text:"\u5EFA\u9020\u5236\u6C27\u7AD9",check:tn("oxygen")},{text:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",check:tn("habitat")},{text:"\u5EFA\u9020\u7740\u9646\u573A",check:tn("beacon")}],radio:[["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u7740\u9646\u6210\u529F\u3002\u8868\u9762\u6E29\u5EA6\u96F6\u4E0B 160 \u6444\u6C0F\u5EA6\u3002\u91CD\u529B\u53EA\u6709\u5730\u7403\u7684\u4E03\u5206\u4E4B\u4E00\u3002"],["\u706B\u661F\u6B96\u6C11\u5730 \xB7 \u6797\u6653","\u4F60\u5230\u4E86\u5417\uFF1F\u6211\u4EEC\u5728\u706B\u661F\u4E0A\u770B\u5F97\u89C1\u6728\u661F\u7684\u5149\u70B9\u3002\u66FF\u6211\u4EEC\u770B\u4E00\u773C\u5B83\u7684\u5927\u7EA2\u6591\u5427\u3002"],["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u6CE8\u610F\uFF1A\u8FD9\u91CC\u79BB\u592A\u9633\u592A\u8FDC\uFF0C\u592A\u9633\u80FD\u6548\u7387\u53EA\u6709\u706B\u661F\u7684\u4E00\u534A\u3002\u6240\u6709\u6280\u672F\u5DF2\u4ECE\u706B\u661F\u540C\u6B65\u3002"]]},{title:"\u7B2C\u4E8C\u7AE0 \xB7 \u51B0\u4E0B\u4E4B\u57CE",sub:"\u6D77\u6D0B\u4E4B\u4E0A\u7684\u706F\u706B",goals:[oh(8),Gr(2),{text:"\u5EFA\u9020\u805A\u53D8\u53CD\u5E94\u5806",check:tn("reactor")}],radio:[["\u5468\u9752\u79BE \xB7 \u6C34\u6587\u5B66\u5BB6","\u51B0\u5C42\u4E0B\u7684\u6D77\u6D0B\u6BD4\u5730\u7403\u6240\u6709\u6D77\u6D0B\u52A0\u8D77\u6765\u8FD8\u591A\u3002\u6709\u6C34\uFF0C\u5C31\u6709\u751F\u547D\u3002"],["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u51B0\u88C2\u7F1D\u91CC\u6709\u4E1C\u897F\u5728\u79FB\u52A8\u3002\u5B83\u4EEC\u548C\u706B\u661F\u7684\u9508\u8680\u86DB\u5F88\u50CF\u2026\u2026\u4F46\u662F\u84DD\u8272\u7684\u3002"]]},{title:"\u7B2C\u4E09\u7AE0 \xB7 \u6DF1\u6E0A\u4E4B\u5149",sub:"\u57CE\u5E02\u5728\u51B0\u539F\u4E0A\u751F\u957F",goals:[Gr(3),oh(24),{text:"\u5EFA\u9020\u751F\u6001\u4E2D\u67A2",check:tn("lifehub")}],radio:[["Elena Petrova \xB7 \u5929\u6587\u5B66\u5BB6","\u4F60\u77E5\u9053\u5417\uFF1F\u4ECE\u8FD9\u91CC\u770B\uFF0C\u592A\u9633\u53EA\u662F\u4E00\u9897\u7279\u522B\u4EAE\u7684\u661F\u661F\u3002"]]},{title:"\u7B2C\u56DB\u7AE0 \xB7 \u4E0B\u4E00\u7AD9",sub:"\u4E00\u5343\u4E8C\u767E\u5149\u5E74",goals:[Gr(4),{text:"\u5EFA\u9020\u661F\u9645\u53D1\u5C04\u53F0",check:tn("launch")},zg],radio:[["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u5F00\u666E\u52D2-442b\uFF1A\u4F4D\u4E8E\u5B9C\u5C45\u5E26\u7684\u7C7B\u5730\u884C\u661F\uFF0C\u8DDD\u79BB\u4E00\u5343\u4E8C\u767E\u5149\u5E74\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u8FD9\u5C06\u662F\u4EBA\u7C7B\u7B2C\u4E00\u6B21\u79BB\u5F00\u592A\u9633\u7CFB\u3002\u6211\u8001\u4E86\uFF0C\u7B49\u4E0D\u5230\u4F60\u4EEC\u62B5\u8FBE\u7684\u90A3\u5929\u3002\u4F46\u6211\u4F1A\u4E00\u76F4\u770B\u7740\u661F\u7A7A\u3002"]]}],ob=[{title:"\u7B2C\u4E00\u7AE0 \xB7 \u53CC\u65E5\u4E4B\u4E0B",sub:"\u53E6\u4E00\u9897\u6052\u661F\u7684\u6668\u5149",goals:[{text:"\u91C7\u96C6\u94C1\u77FF",...hr("iron",15)},{text:"\u91C7\u96C6\u7845\u6676",...hr("silicon",10)},{text:"\u5EFA\u9020\u5236\u6C27\u7AD9",check:tn("oxygen")},{text:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",check:tn("habitat")},{text:"\u5EFA\u9020\u7740\u9646\u573A",check:tn("beacon")}],radio:[["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u51B7\u51BB\u4F11\u7720\u7ED3\u675F\u3002\u5F53\u524D\u65E5\u671F\uFF1A\u516C\u5143 2401 \u5E74\u3002\u6B22\u8FCE\u6765\u5230\u5F00\u666E\u52D2-442b\u3002"],["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u5927\u6C14\u542B\u6C27 14%\uFF0C\u8FD8\u4E0D\u591F\u547C\u5438\uFF0C\u4F46\u5DF2\u7ECF\u975E\u5E38\u63A5\u8FD1\u4E86\u3002\u8FD9\u91CC\u7684\u91CD\u529B\u6BD4\u5730\u7403\u7565\u5927\u3002"]]},{title:"\u7B2C\u4E8C\u7AE0 \xB7 \u5F02\u661F\u68EE\u6797",sub:"\u4F1A\u53D1\u5149\u7684\u6811",goals:[oh(10),Gr(2),{text:"\u5EFA\u9020\u805A\u53D8\u53CD\u5E94\u5806",check:tn("reactor")}],radio:[["Aiko Sato \u7684\u540E\u4EE3 \xB7 \u751F\u7269\u5B66\u5BB6","\u90A3\u4E9B\u4F1E\u83C7\u6811\u5728\u591C\u91CC\u4F1A\u53D1\u5149\u3002\u6211\u7684\u66FE\u66FE\u7956\u6BCD\u4E00\u5B9A\u4F1A\u559C\u6B22\u8FD9\u91CC\u3002"],["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u68EE\u6797\u4E2D\u7684\u63A0\u98DF\u8005\u4F1A\u5728\u591C\u95F4\u51FA\u6CA1\u3002"]]},{title:"\u7B2C\u4E09\u7AE0 \xB7 \u6587\u660E",sub:"\u57CE\u5E02\u8FDE\u6210\u4E86\u661F\u6CB3",goals:[Gr(4),oh(36),{text:"\u5EFA\u9020\u751F\u6001\u4E2D\u67A2",check:tn("lifehub")}],radio:[["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u6765\u81EA\u706B\u661F\u548C\u6B27\u7F57\u5DF4\u7684\u4FE1\u53F7\u5DF2\u7ECF\u62B5\u8FBE\u2014\u2014\u5B83\u4EEC\u5728\u4E00\u5343\u4E8C\u767E\u5E74\u524D\u53D1\u51FA\u3002\u4E24\u5EA7\u57CE\u5E02\u90FD\u8FD8\u4EAE\u7740\u3002"]]},{title:"\u7EC8\u7AE0 \xB7 \u661F\u9645\u6587\u660E",sub:"\u4E09\u9897\u661F\u7403\uFF0C\u4E00\u4E2A\u4EBA\u7C7B",goals:[Gr(5),{text:"\u5EFA\u9020\u6587\u660E\u7EAA\u5FF5\u7891",check:tn("monument")}],radio:[["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u5EFA\u4E00\u5EA7\u7EAA\u5FF5\u7891\u5427\u3002\u732E\u7ED9\u7B2C\u4E00\u4E2A\u8E0F\u4E0A\u706B\u661F\u7684\u4EBA\u2014\u2014\u4E5F\u5C31\u662F\u4F60\u3002"]]}],hi=it==="europa"?rb:it==="kepler"?ob:sb,Bg=it==="mars"?2:1,ea={rifle:{name:"\u7B49\u79BB\u5B50\u6B65\u67AA",icon:"rifle",cost:{iron:18,silicon:12},desc:"\u6309 2 \u5207\u6362\u3002\u6D88\u8017\u80FD\u91CF\u53D1\u5C04\u7B49\u79BB\u5B50\u5F39\u3002"},tank:{name:"\u5927\u5BB9\u91CF\u6C27\u6C14\u7F50",icon:"tank",cost:{iron:12,ice:10},desc:"\u5B87\u822A\u670D\u6C27\u6C14\u4E0A\u9650 100 \u2192 180\u3002"},rover:{name:"\u52A0\u538B\u6F2B\u6E38\u8F66",icon:"rover",cost:{iron:35,silicon:20,ice:5},desc:"\u5728\u5DE5\u574A\u65C1\u51FA\u5382\u3002\u6309 E \u4E0A\u8F66\uFF0CShift \u52A0\u901F\u3002\u8F66\u8231\u5185\u81EA\u52A8\u8865\u6C27\uFF0C\u8FD8\u80FD\u649E\u98DE\u9508\u8680\u86DB\u3002"},scanner:{name:"\u5730\u8D28\u626B\u63CF\u4EEA",icon:"scanner",cost:{iron:8,silicon:10},desc:"\u5C0F\u5730\u56FE\u8303\u56F4\u6269\u5927\uFF0C\u7F57\u76D8\u6807\u51FA\u6700\u8FD1\u7684\u949B\u77FF\u3002"},jetpack:{name:"\u55B7\u6C14\u80CC\u5305",icon:"jet",cost:{iron:20,silicon:15,titanium:4},desc:"\u7A7A\u4E2D\u6309\u4F4F\u7A7A\u683C\u98DE\u884C\uFF0C\u6D88\u8017\u80FD\u91CF\u3002"},overclock:{name:"\u6FC0\u5149\u8D85\u9891",icon:"bolt2",cost:{silicon:20,titanium:3},desc:"\u91C7\u77FF\u901F\u5EA6 \xD72\uFF0C\u6FC0\u5149\u4F24\u5BB3\u63D0\u5347\u3002"},armor:{name:"\u590D\u5408\u88C5\u7532",icon:"armor",cost:{iron:30,titanium:6},desc:"\u751F\u547D\u4E0A\u9650 150\uFF0C\u53D7\u5230\u4F24\u5BB3 -40%\u3002"},rifle2:{name:"\u805A\u7126\u7EBF\u5708",icon:"focus",cost:{silicon:18,titanium:6},need:"rifle",desc:"\u7B49\u79BB\u5B50\u6B65\u67AA\u4F24\u5BB3 +60%\u3002"}},Of=[],Qo=null,Hf=0;function zt(n,e){Of.push([n,e])}function Gg(){return Qo}var Ff=0,Br=200,Es="calm",rh=0,zf=!1;function Vg(n){if(Qo&&(Hf-=n,Hf<=0&&(Qo=null)),!Qo&&Of.length&&(Qo=Of.shift(),Hf=3.5+Qo[1].length*.11,J.play("radio")),Ff-=n,Ff<=0&&d.chapter<hi.length&&!Gn()){Ff=.5;let i=hi[d.chapter];d.goalDone=d.goalDone||{};let s=!0;i.goals.forEach((r,o)=>{let a=d.chapter+":"+o;r.check()&&!d.goalDone[a]&&(d.goalDone[a]=!0,J.play("objective"),d.events.emit("toast",`\u2713 ${r.text}`)),d.goalDone[a]||(s=!1)}),s&&d.chapter<hi.length-1&&ul(d.chapter+1)}d.buildings.find(i=>i.type==="terraformer"&&i.powered)&&d.terraform<1&&(d.terraform=Math.min(1,d.terraform+n/300*(Ht("atmo")?2:1)),d.terraform>=1&&!zf&&(zf=!0,d.events.emit("ending"))),d.raining=(d.terraform>=1||it==="kepler")&&Math.sin(d.time.t*Math.PI*4+d.time.day*1.7)>.45,fe.storms&&d.time.day>=2&&d.terraform<.7&&(Br-=n,Es==="calm"&&Br<=0&&d.time.night<.5?(Es="warn",Br=25,zt("\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u6C99\u5C18\u66B4\u5C06\u5728 25 \u79D2\u540E\u62B5\u8FBE\u3002\u80FD\u89C1\u5EA6\u4F1A\u6025\u5267\u4E0B\u964D\uFF0C\u6C27\u6C14\u6D88\u8017\u52A0\u5FEB\u3002\u9760\u8FD1\u751F\u547D\u7EF4\u6301\u8BBE\u65BD\u3002")):Es==="warn"&&Br<=0?(Es="storm",rh=70+Math.random()*40):Es==="storm"&&(rh-=n,rh<=0&&(Es="calm",Br=360+Math.random()*300,zt("\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u6C99\u5C18\u66B4\u5DF2\u8FC7\u5883\u3002"))));let t=Es==="storm"?1:0;d.storm+=(t-d.storm)*Math.min(1,n*.25),d.storm<.001&&(d.storm=0)}function ul(n,e=!1){d.chapter=n;let t=hi[n];e||(J.play("chapter"),d.events.emit("chapter",t),t.radio.forEach(i=>zt(i[0],i[1])))}function Wg(){return{phase:Es,t:Br,left:rh}}function $g(n){n&&(Es=n.phase==="storm"?"calm":n.phase,Br=n.t??200)}function Xg(n){zf=n}var lh=[],ab={player:6743807,turret:16756800};function ch(n,e,t,i){let s=Se(ab[i],i==="player"?1.1:.9,d.scene);s.position.copy(n),lh.push({pos:n.clone(),vel:e.clone().multiplyScalar(i==="player"?110:80),life:1.4,dmg:t,owner:i,s})}function lb(n,e=0){for(let t of d.enemies){if(t.dead)continue;let i=1.3*t.scale+e,s=n.x-t.pos.x,r=n.y-(t.pos.y+1*t.scale),o=n.z-t.pos.z;if(s*s+r*r+o*o<i*i)return t}return null}function Zg(n){for(let e=lh.length-1;e>=0;e--){let t=lh[e];t.life-=n;let i=t.life<=0,s=3;for(let r=0;r<s&&!i;r++){t.pos.addScaledVector(t.vel,n/s);let o=lb(t.pos);o?(dl(o,t.dmg,t.owner),Ee.spark(t.pos,[.5,.9,1],10,6),i=!0):t.pos.y<_e(t.pos.x,t.pos.z)&&(Ee.spark(t.pos,[1,.7,.4],6,4),Ee.dustPuff(t.pos,3,.5),i=!0)}t.s.position.copy(t.pos),Math.random()<.8&&Ee.trail(t.pos,t.owner==="player"?[.3,.8,1]:[1,.6,.2],.6),i&&(d.scene.remove(t.s),lh.splice(e,1))}}function Bf(n,e,t=!1,i=!1){let s=i?3.4:t?1.35:.85+Math.random()*.35,r=Og(s,cf.crystal,cf.eye),o=_e(n,e);r.group.position.set(n,o,e),d.scene.add(r.group);let a=i?1300+d.time.day*40:t?90:36+d.time.day*3,l={...r,pos:r.group.position,hp:a,maxHp:a,scale:s,guardian:t,home:t?new T(n,o,e):null,boss:i,stomp:4,awake:!t,speed:i?3.4:(t?5.2:4.4)+Math.random()*1.2,phase:Math.random()*6,atk:0,flash:0,sink:0,target:null,retarget:0};return d.enemies.push(l),l}function dl(n,e,t){n.dead||(n.hp-=e,n.flash=.12,n.awake=!0,t==="player"&&J.play("hit"),n.hp<=0&&cb(n,t))}function cb(n,e){n.dead=!0;let t=n.pos.clone();if(t.y+=1,Ee.burst(t,[1,.4,.1],50,9),Ee.dustPuff(t,12,2),Ee.debris(t,n.legs[0].children[0].material,6,5,.45*n.scale),Ee.debris(t,n.inner.children[1].material,8,6,.5*n.scale),J.play("kill"),d.scene.remove(n.group),d.stats.kills++,n.guardian&&(d.stats.guardKills=(d.stats.guardKills||0)+1),n.boss){d.stats.bossKills=(d.stats.bossKills||0)+1,d.res.titanium+=40,d.res.silicon+=40,d.events.emit("pickup",{type:"titanium",n:40,note:"\u6676\u6BCD\u6838\u5FC3"}),d.events.emit("bossDown"),Ee.burst(t,[1,.5,.15],200,20),Ee.ring(new T(n.pos.x,n.pos.y,n.pos.z),4,120,[1,.5,.2]),Ee.debris(t,n.inner.children[1].material,30,12,1.4),J.play("rumble");return}let i=n.guardian?3:Math.random()<.5?1:0;i&&(d.res.titanium+=i,d.stats.mined.titanium+=i,d.events.emit("pickup",{type:"titanium",n:i,note:"\u6676\u4F53\u6B8B\u9AB8"}))}var Gf=0,Vr=0,qg=!1,Vf=5,ah=-1;function Kg(){return d.enemies.find(n=>n.boss&&!n.dead)}function Yg(){if(!d.buildings.length)return new T(0,0,0);let n=new T;for(let e of d.buildings)n.x+=e.x,n.z+=e.z;return n.multiplyScalar(1/d.buildings.length)}function Jg(n){let e=d.player.pos,t=d.time.night>.6,i=(Gn()?d.buildings.some(r=>r.type==="habitat")||d.time.day>=3:d.chapter>=Bg)&&d.terraform<1&&_s().foe>0;if(t&&!qg&&i){Vr=Math.round(Math.min(3+(d.nightsSurvived||0)*2+Math.floor(d.colony.pop/4),26)*_s().foe);let r=(d.nightsSurvived||0)%4===3;r&&(Vr=Math.min(Math.round(Vr*1.8),40),ah=25),d.nightsSurvived=(d.nightsSurvived||0)+1,d.events.emit(r?"tide":"nightfall",Vr)}if(qg=t,ah>0&&t&&(ah-=n,ah<=0)){let r=Yg(),o=Math.random()*Math.PI*2,a=Yt.clamp(r.x+Math.cos(o)*130,-tt+180,tt-180),l=Yt.clamp(r.z+Math.sin(o)*130,-tt+180,tt-180),c=Bf(a,l,!1,!0);c.sink=-6,Ee.ring(new T(a,_e(a,l),l),6,140),Ee.dustPuff(new T(a,_e(a,l),l),60,12),J.play("rumble"),d.events.emit("bossSpawn")}if(t&&i&&Vr>0&&(Gf-=n,Gf<=0)){Gf=3+Math.random()*5;let r=Yg(),o=Math.min(Vr,1+Math.floor(Math.random()*3)),a=Math.random()*Math.PI*2,l=110+Math.random()*50;for(let c=0;c<o;c++){let h=Yt.clamp(r.x+Math.cos(a)*l+(Math.random()-.5)*10,-tt+180,tt-180),u=Yt.clamp(r.z+Math.sin(a)*l+(Math.random()-.5)*10,-tt+180,tt-180),f=Bf(h,u);f.sink=-2,Ee.dustPuff(new T(h,_e(h,u),u),14,3)}Vr-=o}if(Vf-=n,Vf<=0){Vf=30;for(let r of d.nodes){if(r.type!=="titanium"||Math.hypot(r.x-e.x,r.z-e.z)<90)continue;if(!d.enemies.some(a=>a.guardian&&!a.dead&&a.home.distanceTo(r.mesh.position)<25)&&d.terraform<1&&_s().foe>0){let a=Math.random()*6.28;Bf(r.x+Math.cos(a)*6,r.z+Math.sin(a)*6,!0)}}}let s=performance.now()*.001;for(let r=d.enemies.length-1;r>=0;r--){let o=d.enemies[r];if(o.dead){d.enemies.splice(r,1);continue}if(!o.guardian&&(d.time.night<.3||d.terraform>=1)){o.sink-=n*1.5,o.group.position.y=_e(o.pos.x,o.pos.z)+o.sink,o.sink<-3&&(d.scene.remove(o.group),d.enemies.splice(r,1));continue}o.sink<0&&(o.sink=Math.min(0,o.sink+n*1.5));let a=Math.hypot(e.x-o.pos.x,e.z-o.pos.z);if(o.retarget-=n,o.retarget<=0)if(o.retarget=1,o.target=null,o.guardian)a<22&&(o.awake=!0),o.awake&&a<70&&!d.player.dead?o.target={kind:"player"}:(o.awake=!1,o.target={kind:"home"});else if(a<32&&!d.player.dead)o.target={kind:"player"};else{let m=null,_=400;for(let E of d.buildings){if(E.type==="lamp"||E.broken)continue;let M=Math.hypot(E.x-o.pos.x,E.z-o.pos.z)-E.def.r;M<_&&(_=M,m=E)}o.target=m?{kind:"building",b:m}:{kind:"player"}}let l=e.x,c=e.z,h=1.8*o.scale,u=o.target;if(u?.kind==="building"){if(!d.buildings.includes(u.b)||u.b.broken){o.retarget=0;continue}l=u.b.x,c=u.b.z,h=u.b.def.r*.9+1.4}else u?.kind==="home"&&(l=o.home.x,c=o.home.z,h=2);let f=l-o.pos.x,p=c-o.pos.z,g=Math.hypot(f,p),v=!1;if(g>h){f/=g,p/=g;for(let E of d.enemies){if(E===o)continue;let M=o.pos.x-E.pos.x,D=o.pos.z-E.pos.z,A=Math.hypot(M,D);A<2.5&&A>.01&&(f+=M/A*.6,p+=D/A*.6)}let m=Math.hypot(f,p)||1,_=o.speed*(o.target?.kind==="home"?.5:1);o.pos.x+=f/m*_*n,o.pos.z+=p/m*_*n;for(let E of d.colliders.query(o.pos.x,o.pos.z)){if(E.kind!=="building")continue;let M=o.pos.x-E.x,D=o.pos.z-E.z,A=Math.hypot(M,D),L=E.r+.8;A<L&&A>.01&&(o.pos.x=E.x+M/A*L,o.pos.z=E.z+D/A*L)}o.group.rotation.y=Math.atan2(f,p),v=!0}else u&&u.kind!=="home"&&(o.group.rotation.y=Math.atan2(f,p),o.atk-=n,o.atk<=0&&(o.atk=1,u.kind==="player"?d.player.damage((o.boss?30:o.guardian?14:9)*_s().dmg,o.pos):(u.b.hp-=o.boss?70:o.guardian?20:8,Ee.spark(new T(o.pos.x,o.pos.y+1,o.pos.z),[1,.5,.2],8,5),u.b.hp<=0&&(u.b.hp=0,u.b.broken=!0,o.retarget=0,d.events.emit("broken",u.b),Yi())),o.inner.position.z=.6));if(o.boss){o.stomp-=n;let m=Math.hypot(e.x-o.pos.x,e.z-o.pos.z);o.stomp<=0&&m<22&&(o.stomp=4.5,Ee.ring(new T(o.pos.x,o.pos.y,o.pos.z),3,100,[.9,.45,.25]),J.play("rumble"),d.player.landDip=Math.max(d.player.landDip,.35),m<13&&!d.driving&&(d.player.damage(18,o.pos),d.player.vel.y=4,d.player.vel.x+=(e.x-o.pos.x)/m*8,d.player.vel.z+=(e.z-o.pos.z)/m*8))}o.inner.position.z*=.85,o.pos.y=_e(o.pos.x,o.pos.z)+o.sink;let x=s*(v?12:2)+o.phase;for(let m of o.legs)m.rotation.x=Math.sin(x+m.userData.phase)*(v?.5:.08),m.rotation.z=Math.max(0,Math.cos(x+m.userData.phase))*.25*m.userData.side*(v?1:0);o.inner.position.y=Math.abs(Math.sin(x))*.08,o.flash>0?(o.flash-=n,o.inner.scale.setScalar(1+o.flash*1.2)):o.inner.scale.setScalar(1),Math.random()<n*4&&Ee.trail(new T(o.pos.x,o.pos.y+1.6*o.scale,o.pos.z),[1,.35,.1],.8)}}function ta(n,e,t){let i=null,s=t,r=new T;for(let o of d.enemies){if(o.dead)continue;let a=1.3*o.scale;r.set(o.pos.x-n.x,o.pos.y+1*o.scale-n.y,o.pos.z-n.z);let l=r.dot(e);if(l<0)continue;let c=r.lengthSq()-l*l;if(c>a*a)continue;let h=l-Math.sqrt(a*a-c);h<s&&(s=h,i=o)}return i?{e:i,dist:s}:null}var ce={keys:new Set,mouse:[!1,!1,!1],dx:0,dy:0,wheel:0,pressed:new Set,clicked:[!1,!1,!1],sens:.0022,down(n){return this.keys.has(n)},hit(n){return this.pressed.has(n)},endFrame(){this.pressed.clear(),this.dx=0,this.dy=0,this.wheel=0,this.clicked=[!1,!1,!1]}};function jg(n){window.addEventListener("keydown",e=>{e.code==="Tab"&&e.preventDefault(),ce.keys.has(e.code)||ce.pressed.add(e.code),ce.keys.add(e.code)}),window.addEventListener("keyup",e=>ce.keys.delete(e.code)),window.addEventListener("blur",()=>{ce.keys.clear(),ce.mouse=[!1,!1,!1]}),window.addEventListener("mousemove",e=>{d.locked&&(ce.dx+=e.movementX||0,ce.dy+=e.movementY||0)}),n.addEventListener("mousedown",e=>{d.locked&&(ce.mouse[e.button]=!0,ce.clicked[e.button]=!0)}),window.addEventListener("mouseup",e=>{ce.mouse[e.button]=!1}),window.addEventListener("wheel",e=>{d.locked&&(ce.wheel+=Math.sign(e.deltaY))},{passive:!0}),window.addEventListener("contextmenu",e=>e.preventDefault())}var hb=fe.gravity,Qg=1.7,gt=new T(-6,0,-6),hh=class{constructor(e){this.cam=e,this.pos=new T(0,0,6),this.pos.y=_e(this.pos.x,this.pos.z),this.vel=new T,this.yaw=Math.PI*.85,this.pitch=-.05,this.onGround=!0,this.maxHealth=100,this.health=100,this.maxO2=100,this.o2=100,this.energy=100,this.bob=0,this.stepT=0,this.landDip=0,this.dead=!1,this.hurtT=0,this.flashlight=!1,this.inLife=!1,this.alarmT=0,this.lastHitDir=0,this.moving=!1,this.sprinting=!1,this.jetting=!1,this.roll=0,this.fwd=new T}get eye(){return new T(this.pos.x,this.pos.y+Qg+this.bobY,this.pos.z)}damage(e,t){if(this.dead)return;let i=d.upgrades.armor?.6:1;this.health-=e*i,this.hurtT=.5,t&&(this.lastHitDir=Math.atan2(t.x-this.pos.x,t.z-this.pos.z)),J.play("hurt"),this.health<=0&&this.die("\u4F60\u5012\u5728\u4E86\u706B\u661F\u7684\u5C18\u571F\u91CC")}die(e){this.dead||(this.dead=!0,this.health=0,d.events.emit("death",e))}respawn(){let e=d.buildings.find(i=>i.type==="habitat")||null,t=e?new T(e.x,0,e.z+9):gt.clone().add(new T(5,0,8));for(let i in d.res)d.res[i]=Math.floor(d.res[i]*.75);this.pos.set(t.x,_e(t.x,t.z),t.z),this.vel.set(0,0,0),this.health=this.maxHealth,this.o2=this.maxO2,this.energy=100,this.dead=!1}update(e){if(this.maxO2=d.upgrades.tank?180:100,this.maxHealth=d.upgrades.armor?150:100,this.dead){this.cam.position.y-=e*.3;return}d.locked&&(this.yaw-=ce.dx*ce.sens,this.pitch=Yt.clamp(this.pitch-ce.dy*ce.sens,-1.5,1.5));let t=0,i=0;d.menuOpen||((ce.down("KeyW")||ce.down("ArrowUp"))&&(i-=1),(ce.down("KeyS")||ce.down("ArrowDown"))&&(i+=1),(ce.down("KeyA")||ce.down("ArrowLeft"))&&(t-=1),(ce.down("KeyD")||ce.down("ArrowRight"))&&(t+=1));let s=Math.hypot(t,i);this.moving=s>0,this.sprinting=this.moving&&ce.down("ShiftLeft")&&i<0&&this.o2>5;let r=this.sprinting?10.5:6.2,o=Math.sin(this.yaw),a=Math.cos(this.yaw),l=0,c=0;if(s){let _=t/s,E=i/s;l=_*a+E*o,c=-_*o+E*a}let h=this.onGround?12:2.5;if(this.vel.x+=(l*r-this.vel.x)*Math.min(1,h*e),this.vel.z+=(c*r-this.vel.z)*Math.min(1,h*e),this.jetting=!1,!d.menuOpen&&ce.hit("Space")&&this.onGround)this.vel.y=5.4,this.onGround=!1,J.play("jump");else if(!d.menuOpen&&ce.down("Space")&&!this.onGround&&d.upgrades.jetpack&&this.energy>1&&this.vel.y<6){this.vel.y+=15*e,this.energy-=22*e,this.jetting=!0,Math.random()<.5&&J.play("jet");let _=new T(this.pos.x+o*.4,this.pos.y+.8,this.pos.z+a*.4);Ee.flame(_),Ee.flame(_)}this.vel.y-=hb*e;let u=this.pos.x+this.vel.x*e,f=this.pos.z+this.vel.z*e;this.pos.x=Yt.clamp(u,-tt+120,tt-120),this.pos.z=Yt.clamp(f,-tt+120,tt-120),this.pos.y+=this.vel.y*e;for(let _ of d.colliders.query(this.pos.x,this.pos.z)){let E=this.pos.x-_.x,M=this.pos.z-_.z,D=Math.hypot(E,M),A=_.r+.45;if(D<A&&D>1e-4){if(_.kind==="rock"&&this.pos.y>_e(_.x,_.z)+_.r*.6)continue;this.pos.x=_.x+E/D*A,this.pos.z=_.z+M/D*A}}let p=_e(this.pos.x,this.pos.z);this.pos.y<=p?(!this.onGround&&this.vel.y<-4&&(this.landDip=Math.min(.35,-this.vel.y*.04),J.play("land"),Ee.dustPuff(this.pos,6,1)),this.pos.y=p,this.vel.y=0,this.onGround=!0):this.onGround&&this.pos.y-p<.5&&this.vel.y<=0?(this.pos.y=p,this.vel.y=0):this.onGround=!1;let g=Math.hypot(this.vel.x,this.vel.z);this.onGround&&g>.5&&(this.bob+=e*g*1.25,this.stepT+=e*g,this.stepT>2.6&&(this.stepT=0,J.play("step"),Math.random()<.4&&Ee.dustPuff(this.pos,2,.4))),this.landDip*=Math.pow(.002,e),this.bobY=Math.sin(this.bob*2)*.05*Math.min(1,g/6)-this.landDip,this.cam.position.set(this.pos.x,this.pos.y+Qg+this.bobY,this.pos.z),this.roll+=(-t*.025-this.roll)*Math.min(1,e*6);let v=(d.baseFov||72)+(this.sprinting?8:0)+(this.jetting?4:0);Math.abs(this.cam.fov-v)>.05&&(this.cam.fov+=(v-this.cam.fov)*Math.min(1,e*5),this.cam.updateProjectionMatrix()),this.cam.rotation.set(this.pitch,this.yaw,this.roll+Math.sin(this.bob)*.006*Math.min(1,g/6),"YXZ"),this.cam.getWorldDirection(this.fwd);let x=Lg(this.pos),m=this.pos.distanceTo(gt)<11;if(this.inLife=!!x||m,this.inLife)this.o2=Math.min(this.maxO2,this.o2+30*e),this.health=Math.min(this.maxHealth,this.health+4*e);else{let _=.55+(this.sprinting?.6:0)+(this.jetting?.6:0);_*=(1+d.storm*.8)*_s().o2*(Ht("suit")?.65:1),d.terraform>=1&&(_*=.5),this.o2=Math.max(0,this.o2-_*e)}this.o2<=0&&(this.health-=9*e,this.health<=0&&this.die("\u6C27\u6C14\u8017\u5C3D")),this.o2<this.maxO2*.2&&!this.inLife&&(this.alarmT-=e,this.alarmT<=0&&(this.alarmT=2,J.play("alarm"))),this.jetting||(this.energy=Math.min(100,this.energy+(this.onGround?14:4)*e)),this.hurtT=Math.max(0,this.hurtT-e),this.health=Math.min(this.health,this.maxHealth)}};var dr=[{id:"laser",name:"\u91C7\u77FF\u6FC0\u5149",icon:"laser"},{id:"rifle",name:"\u7B49\u79BB\u5B50\u6B65\u67AA",icon:"rifle",need:"rifle"},{id:"build",name:"\u5EFA\u9020",icon:"build"}],on={index:0,get id(){return dr[this.index].id}},Ii,ub=0,Wr=null,Xf,bs,fl,ur={},ws,Ss,ra,sa,pl,ex=new T(.24,-.22,-.85);function ix(n){bs=new Fi,fl=new ln(n.fov,n.aspect,.01,10),bs.add(new Ks(16769224,4202520,1.4));let e=new zi(16777215,1.5);e.position.set(1,2,1),bs.add(e),bs.userData.dl=e;let t=(M,D,A,L,I,w)=>{let b=new le(M,D);return b.position.set(A,L,I),w.add(b),b},i=new zi(8965375,1.2);i.position.set(-2,1,2),bs.add(i);let s=(M,D,A,L=20)=>{let I=new ps(M.map(([w,b])=>new ne(w,b)),L);return I.rotateX(-Math.PI/2),t(I,D,0,0,0,A)},r=new he({color:15262940,roughness:.35,metalness:.15}),o=new he({color:2764083,roughness:.45,metalness:.7}),a=new he({color:16742954,roughness:.4,metalness:.2});Xf=new he({color:3346688,emissive:16747056,emissiveIntensity:1.2});let l=new he({color:8755,emissive:4515583,emissiveIntensity:1.5}),c=(M,D,A,L,I,w,b)=>{let U=t(new Je(M,M,D,16),A,L,I,w,b);return U.rotation.x=Math.PI/2,U},h=new pe;s([[0,-.12],[.04,-.12],[.056,-.08],[.058,.18],[.05,.26],[.036,.3],[.03,.36],[0,.36]],r,h),c(.06,.02,a,0,0,-.02,h),c(.06,.012,a,0,0,.1,h),c(.045,.06,o,0,0,.1+.04,h);for(let M=0;M<3;M++){let D=t(new Le(.034-M*.003,.007,8,20),Xf,0,0,-.33-M*.035,h)}c(.018,.14,o,0,0,-.38,h);let u=t(new Be(.02,12,8),new Ke({color:16760960}),0,0,-.455,h);t(new Ge(.018,.016,.2),o,0,.062,-.05,h),c(.026,.17,a,.06,-.02,-.02,h),t(new Ge(.032,.07,.045),o,0,-.075,.02,h).rotation.x=.3,t(new Ge(.03,.02,.07),o,0,-.05,.02,h);let f=t(new On(.04,.025),new Ke({color:6743807}),-.0585,.012,.04,h);f.rotation.y=-Math.PI/2,h.userData.tip=u;let p=new pe;s([[0,-.2],[.04,-.2],[.055,-.15],[.055,.2],[.048,.28],[0,.28]],r,p),c(.035,.32,o,0,0,-.36,p);for(let M=0;M<4;M++)t(new Le(.046,.009,8,20),l,0,0,-.27-M*.065,p);c(.05,.03,a,0,0,-.18,p),c(.022,.16,o,0,.075,-.02,p),t(new Je(.023,.023,.005,12),l,0,.075,-.1,p).rotation.x=Math.PI/2,t(new Ge(.032,.07,.045),o,0,-.075,0,p).rotation.x=.3,t(new Ge(.035,.09,.05),l,0,-.08,-.06,p);let g=new pe;t(new Ge(.32,.22,.018),o,0,0,0,g),t(new Ge(.33,.012,.022),a,0,.112,0,g);let v=document.createElement("canvas");v.width=256,v.height=176;let x=v.getContext("2d");x.fillStyle="#06222e",x.fillRect(0,0,256,176),x.strokeStyle="rgba(127,230,255,.25)";for(let M=0;M<256;M+=16)x.beginPath(),x.moveTo(M,0),x.lineTo(M,176),x.stroke();for(let M=0;M<176;M+=16)x.beginPath(),x.moveTo(0,M),x.lineTo(256,M),x.stroke();x.strokeStyle="#7fe6ff",x.lineWidth=2,x.beginPath(),x.arc(128,110,50,Math.PI,0),x.lineTo(178,140),x.lineTo(78,140),x.closePath(),x.stroke(),x.fillStyle="#7fe6ff",x.font="bold 14px sans-serif",x.fillText("BLUEPRINT",12,22);let m=new rn(v);m.colorSpace=yt;let _=t(new On(.29,.195),new Ke({map:m,transparent:!0,opacity:.95}),0,-.004,.01,g);g.userData.scr=_,g.rotation.set(-.5,.25,0),ur={laser:h,rifle:p,build:g};for(let M in ur)ur[M].scale.setScalar(M==="build"?.45:.6),ur[M].visible=!1,bs.add(ur[M]);let E=new Je(1,1,1,8,1,!0);E.translate(0,.5,0),ws=new le(E,new Ke({color:16773328,transparent:!0,opacity:.95,blending:dt,depthWrite:!1})),Ss=new le(E,new Ke({color:16740384,transparent:!0,opacity:.45,blending:dt,depthWrite:!1})),ws.visible=Ss.visible=!1,ws.frustumCulled=Ss.frustumCulled=!1,d.scene.add(ws,Ss),ra=Se(16748608,1.6,d.scene),ra.visible=!1,Ii=new Js(16747072,0,6,2),d.scene.add(Ii),pl=Se(6743807,.35,bs),pl.visible=!1,sa=new Lo(16773853,0,70,.42,.45,1.2),n.add(sa),sa.position.set(.3,-.2,0),sa.target.position.set(0,0,-10),n.add(sa.target),d.scene.add(n)}function uh(n){let e=dr[n];if(e.need&&!d.upgrades[e.need]){d.events.emit("toast",`\u5C1A\u672A\u5236\u9020\uFF1A${e.name}\uFF08\u5728\u5236\u9020\u5DE5\u574A\u5236\u4F5C\uFF09`),J.play("deny");return}on.index===n&&e.id!=="build"||(on.index=n,J.play("ui"),e.id==="build"?d.events.emit("openBuild"):zr(null))}var na=0,Wf=0,ia=0,$f=0,dh=0,tx=-1,db=new T,fb=new T(0,1,0),oa=new T;function nx(n,e,t){let i=null,s=t;for(let r of d.nodes){let o=r.mesh.scale.x,a=1.5*o+.3;oa.set(r.x-n.x,r.y+.7*o-n.y,r.z-n.z);let l=oa.dot(e);if(l<0||l>t+a)continue;let c=oa.lengthSq()-l*l;if(c>a*a)continue;let h=l-Math.sqrt(a*a-c);h<s&&(s=Math.max(.3,h),i=r)}return i?{n:i,dist:s}:null}function pb(n,e,t){let i=null,s=t;for(let r of d.buildings){let o=Math.max(1.2,r.def.r);oa.set(r.x-n.x,r.y+Math.min(o,3)*.6-n.y,r.z-n.z);let a=oa.dot(e);if(a<0)continue;let l=oa.lengthSq()-a*a;if(l>o*o)continue;let c=a-Math.sqrt(o*o-l);c<s&&(s=c,i=r)}return i}function sx(n,e,t){let i=on.id;tx!==on.index&&(dh=1,tx=on.index),dh=Math.max(0,dh-n*4);for(let p in ur)ur[p].visible=p===i;let s=ur[i],r=Math.hypot(e.vel.x,e.vel.z),o=Math.sin(e.bob)*.012*Math.min(1,r/6),a=Math.abs(Math.cos(e.bob))*.012*Math.min(1,r/6);ia*=Math.pow(1e-4,n);let l=i==="build"?[.2,-.24,-.6]:[.24,-.22,-.58];s.position.set(l[0]+o,l[1]+a-dh*.3-(e.sprinting?.04:0),l[2]+ia*.08),s.rotation.x=(i==="build"?-.5:0)+ia*.15+(e.sprinting?-.25:0),i==="build"&&(s.userData.scr.material.opacity=.6+Math.sin(performance.now()*.005)*.2),fl.aspect=t.aspect,fl.fov=t.fov,fl.updateProjectionMatrix();let c=.4+(1-d.time.night)*1.2;bs.userData.dl.intensity=c,ce.hit("KeyF")&&!d.menuOpen&&(e.flashlight=!e.flashlight,J.play("ui")),sa.intensity=e.flashlight?60:0;let h=t.position,u=e.fwd;if(d.lookBuilding=d.menuOpen?null:pb(h,u,14),d.aimNode=i==="laser"&&!!nx(h,u,9),!d.menuOpen&&!e.dead&&!d.photo){if(ce.hit("Digit1")&&uh(0),ce.hit("Digit2")&&uh(1),(ce.hit("Digit3")||ce.hit("KeyB"))&&uh(2),ce.wheel&&on.id!=="build"){let p=on.index;for(let g=0;g<2&&(p=(p+(ce.wheel>0?1:2))%2,!(!dr[p].need||d.upgrades[dr[p].need]));g++);p!==on.index&&uh(p)}on.id==="build"&&bt.type&&ce.wheel&&(bt.rot+=ce.wheel*.3)}ws.visible=Ss.visible=ra.visible=!1,ub-=n,Ii.intensity=Math.max(0,Ii.intensity-n*120),Wr&&(Wr.mesh.position.set(Wr.x,Wr.y,Wr.z),Wr=null),pl.visible=!1,Wf-=n;let f=ce.mouse[0]&&!d.menuOpen&&!e.dead&&d.locked;if(Xf.emissiveIntensity=i==="laser"&&f?3+Math.random()*1.5:1+Math.sin(performance.now()*.003)*.3,i==="laser")if(f){let g=nx(h,u,9),v=ta(h,u,9),x=Vc(h,u,9),m=9,_=null;x&&x.dist<m&&(m=x.dist,_="ground"),g&&g.dist<=m&&(m=g.dist,_="node"),v&&v.dist<m&&(m=v.dist,_="enemy");let E=db.copy(h).addScaledVector(u,m),M=t.localToWorld(ex.clone()),D=E.clone().sub(M),A=D.length();D.normalize();let L=new cn().setFromUnitVectors(fb,D),I=1+Math.sin(performance.now()*.05)*.2;if(ws.position.copy(M),ws.quaternion.copy(L),ws.scale.set(.012*I,A,.012*I),Ss.position.copy(M),Ss.quaternion.copy(L),Ss.scale.set(.04*I,A,.04*I),ws.visible=Ss.visible=!0,ra.position.copy(E),ra.visible=!0,ra.scale.setScalar(1.2+Math.random()*.8),ia=Math.max(ia,.15+Math.random()*.1),Ii.position.copy(E).addScaledVector(u,-.6),Ii.color.setRGB(1,.55,.25),Ii.intensity=5+Math.random()*4,_==="node"){let w=g.n;for(Ii.color.setRGB(...vs[w.type]),Wr=w,w.mesh.position.set(w.x+(Math.random()-.5)*.07,w.y+(Math.random()-.5)*.05,w.z+(Math.random()-.5)*.07),Math.random()<.15&&Ee.dustPuff(E,1,.4),na+=n*3.2*(d.upgrades.overclock?2:1)*(Ht("laser2")?1.5:1)*_s().yield,Math.random()<.7&&Ee.spark(E,vs[w.type],2,5,.4),$f-=n,$f<=0&&($f=.09,J.play("mine"));na>=1&&d.nodes.includes(w);)if(na-=1,d.res[w.type]++,d.stats.mined[w.type]++,w.meteor&&(d.stats.meteorMined=(d.stats.meteorMined||0)+1),d.events.emit("pickup",{type:w.type,n:1}),Jc(w,1)){J.play("deplete"),na=0;break}}else _==="enemy"?(dl(v.e,16*n*(d.upgrades.overclock?1.5:1),"laser"),Math.random()<.5&&Ee.spark(E,[1,.5,.2],3,5)):_==="ground"&&(Math.random()<.3&&Ee.spark(E,[1,.6,.3],1,3),Math.random()<.1&&Ee.dustPuff(E,1,.3));J.laser(!0)}else J.laser(!1),na=Math.min(na,.9);else J.laser(!1);if(i==="rifle"&&f&&Wf<=0)if(e.energy>=5){Wf=.16,e.energy-=5,ia=1;let p=t.localToWorld(ex.clone()),g=ta(h,u,200),v=Vc(h,u,200),x=200;v&&(x=v.dist),g&&g.dist<x&&(x=g.dist);let _=h.clone().addScaledVector(u,x).sub(p).normalize();ch(p,_,d.upgrades.rifle2?30:19,"player"),J.play("shoot"),pl.visible=!0,pl.position.set(.24,-.21,-.86),Ii.position.copy(p),Ii.color.setRGB(.4,.9,1),Ii.intensity=12}else ce.clicked[0]&&(J.play("deny"),d.events.emit("toast","\u80FD\u91CF\u4E0D\u8DB3"));if(i==="build"){let p=!d.menuOpen&&bt.type?Vc(h,u,40):null;if(Ug(p?p.point:null,e.pos),!d.menuOpen&&bt.type&&(ce.hit("KeyR")&&(bt.rot+=Math.PI/4),ce.clicked[0]))if(bt.valid){let g=Ng();g&&d.events.emit("built",g)}else J.play("deny"),d.events.emit("toast",bt.reason);ce.clicked[2]&&(zr(null),on.index=0,J.play("ui"))}}function rx(n){d.player.dead||d.driving||d.photo||(n.autoClear=!1,n.clearDepth(),n.render(bs,fl),n.autoClear=!0)}var aa=[["\u6797\u6653","\u690D\u7269\u5B66\u5BB6","\u6211\u4ECE\u4E91\u5357\u5E26\u6765\u4E86\u4E00\u5305\u8336\u6811\u79CD\u5B50\u3002\u603B\u6709\u4E00\u5929\uFF0C\u706B\u661F\u4E0A\u4E5F\u80FD\u6CE1\u4E00\u58F6\u70ED\u8336\u3002"],["Amara Okafor","\u533B\u751F","\u5728\u5730\u7403\u4E0A\uFF0C\u6211\u6551\u8FC7\u5F88\u591A\u4EBA\u3002\u5728\u8FD9\u91CC\uFF0C\u6211\u60F3\u770B\u7740\u5B69\u5B50\u4EEC\u5E73\u5B89\u957F\u5927\u3002"],["\u9648\u9ED8","\u5DE5\u7A0B\u5E08","\u8FD9\u91CC\u7684\u6BCF\u4E00\u9897\u87BA\u4E1D\uFF0C\u90FD\u662F\u6211\u4EEC\u4EB2\u624B\u62E7\u4E0A\u53BB\u7684\u3002"],["Mateo Silva","\u5730\u8D28\u5B66\u5BB6","\u4F60\u770B\u89C1\u90A3\u4E9B\u5CA9\u5C42\u4E86\u5417\uFF1F\u5B83\u4EEC\u6BD4\u4EBA\u7C7B\u7684\u5386\u53F2\u8FD8\u8981\u53E4\u8001\u56DB\u5341\u4EBF\u5E74\u3002"],["\u82CF\u5FF5","\u6559\u5E08",'\u6211\u7684\u7B2C\u4E00\u5802\u8BFE\uFF0C\u5C31\u53EB"\u6211\u4EEC\u4E3A\u4EC0\u4E48\u6765\u5230\u706B\u661F"\u3002'],["Yuki Tanaka","\u98DE\u884C\u5458","\u4ECE\u8F68\u9053\u4E0A\u770B\uFF0C\u4F60\u4EEC\u7684\u706F\u5149\u50CF\u662F\u7EA2\u8272\u6C99\u6F20\u91CC\u7684\u4E00\u4E32\u73CD\u73E0\u3002"],["\u738B\u5927\u5C71","\u53A8\u5E08","\u6E29\u5BA4\u91CC\u7684\u7B2C\u4E00\u6279\u571F\u8C46\uFF0C\u6211\u505A\u4E86\u4E00\u9505\u571F\u8C46\u7096\u83DC\u3002\u5927\u5BB6\u90FD\u54ED\u4E86\u3002"],["Elena Petrova","\u5929\u6587\u5B66\u5BB6","\u665A\u4E0A\u62AC\u5934\uFF0C\u90A3\u9897\u6700\u4EAE\u7684\u84DD\u661F\uFF0C\u5C31\u662F\u5730\u7403\u3002"],["\u8D75\u5C0F\u96E8","\u5B66\u751F","\u6211\u5341\u516D\u5C81\u3002\u6211\u4F1A\u662F\u7B2C\u4E00\u4EE3\u5728\u706B\u661F\u957F\u5927\u7684\u4EBA\u3002"],["Kwame Mensah","\u7535\u5DE5","\u53EA\u8981\u706F\u8FD8\u4EAE\u7740\uFF0C\u8FD9\u91CC\u5C31\u662F\u5BB6\u3002"],["\u5468\u9752\u79BE","\u6C34\u6587\u5B66\u5BB6","\u51B0\u5C42\u4E0B\u9762\u6709\u6C34\u3002\u6709\u6C34\uFF0C\u5C31\u6709\u751F\u547D\u3002"],["Priya Sharma","\u7A0B\u5E8F\u5458","\u6211\u5199\u7684\u4EE3\u7801\u5728\u63A7\u5236\u5236\u6C27\u7AD9\u3002\u522B\u62C5\u5FC3\uFF0C\u6211\u6D4B\u8BD5\u8FC7\u4E09\u5343\u904D\u4E86\u3002"],["\u674E\u957F\u98CE","\u8001\u5175","\u6211\u5E74\u8F7B\u65F6\u5B88\u8FC7\u8FB9\u7586\u3002\u73B0\u5728\uFF0C\u6211\u5B88\u7740\u4EBA\u7C7B\u7684\u65B0\u8FB9\u7586\u3002"],["Sofia Rossi","\u5EFA\u7B51\u5E08","\u7A79\u9876\u7684\u5F27\u5EA6\uFF0C\u662F\u6211\u7167\u7740\u6545\u4E61\u6559\u5802\u7684\u5706\u9876\u753B\u7684\u3002"],["\u4F55\u5B89","\u62A4\u58EB","\u60F3\u5BB6\u7684\u65F6\u5019\uFF0C\u6211\u5C31\u53BB\u6E29\u5BA4\u91CC\u95FB\u95FB\u6CE5\u571F\u7684\u5473\u9053\u3002"],["Jonas Berg","\u673A\u68B0\u5E08","\u706B\u661F\u7684\u6C99\u5B50\u4F1A\u94BB\u8FDB\u4EFB\u4F55\u7F1D\u9699\u3002\u4F46\u6211\u4EEC\u6BD4\u6C99\u5B50\u66F4\u56FA\u6267\u3002"],["\u9A6C\u6674","\u8BB0\u8005","\u6211\u8981\u8BB0\u5F55\u4E0B\u8FD9\u4E00\u5207\u3002\u51E0\u767E\u5E74\u540E\u7684\u4EBA\u4F1A\u60F3\u77E5\u9053\uFF0C\u6700\u521D\u662F\u600E\u6837\u7684\u3002"],["Omar Haddad","\u519C\u5B66\u5BB6","\u6211\u7956\u7236\u5728\u6C99\u6F20\u91CC\u79CD\u51FA\u4E86\u6930\u67A3\u3002\u6211\u8981\u5728\u706B\u661F\u79CD\u51FA\u68EE\u6797\u3002"],["\u5434\u6850","\u753B\u5BB6","\u706B\u661F\u7684\u65E5\u843D\u662F\u84DD\u8272\u7684\u3002\u5730\u7403\u4E0A\u6CA1\u6709\u4EBA\u4F1A\u76F8\u4FE1\u3002"],["Grace Kim","\u5FC3\u7406\u533B\u751F","\u79BB\u5BB6\u5F88\u8FDC\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5F7C\u6B64\u5C31\u662F\u5BB6\u3002"],["\u90ED\u8FDC","\u7236\u4EB2","\u6211\u5973\u513F\u5728\u98DE\u8239\u4E0A\u51FA\u751F\u3002\u5979\u7684\u51FA\u751F\u8BC1\u660E\u4E0A\u5199\u7740\uFF1A\u51FA\u751F\u5730\uFF0C\u661F\u9645\u7A7A\u95F4\u3002"],["Lucas Moreau","\u97F3\u4E50\u5BB6","\u6211\u5E26\u4E86\u4E00\u628A\u5409\u4ED6\u3002\u4ECA\u665A\u7A79\u9876\u91CC\u6709\u97F3\u4E50\u4F1A\uFF0C\u4F60\u6765\u5417\uFF1F"],["\u94B1\u591A\u591A","\u4F1A\u8BA1","\u6211\u7B97\u8FC7\u4E86\uFF1A\u7167\u8FD9\u4E2A\u901F\u5EA6\uFF0C\u4E8C\u5341\u5E74\u540E\u8FD9\u91CC\u4F1A\u6709\u4E00\u5EA7\u57CE\u5E02\u3002"],["Aiko Sato","\u751F\u7269\u5B66\u5BB6","\u90A3\u4E9B\u9508\u8680\u86DB\u2026\u2026\u4E5F\u8BB8\u5B83\u4EEC\u53EA\u662F\u5728\u4FDD\u62A4\u81EA\u5DF1\u7684\u5BB6\u56ED\u3002"],["\u9093\u5353","\u77FF\u5DE5","\u949B\u77FF\u91CC\u85CF\u7740\u706B\u661F\u7684\u5FC3\u8DF3\u3002"],["Nadia Volkova","\u6C14\u8C61\u5B66\u5BB6","\u5927\u6C14\u6539\u9020\u5854\u542F\u52A8\u540E\uFF0C\u4E5F\u8BB8\u6211\u4EEC\u80FD\u770B\u89C1\u706B\u661F\u4E0A\u7684\u7B2C\u4E00\u7247\u4E91\u3002"],["\u9EC4\u4E00\u9E23","\u673A\u5668\u4EBA\u4E13\u5BB6","\u673A\u5668\u53EF\u4EE5\u66FF\u6211\u4EEC\u5E72\u6D3B\uFF0C\u4F46\u53EA\u6709\u4EBA\uFF0C\u624D\u80FD\u628A\u4E00\u4E2A\u5730\u65B9\u53D8\u6210\u5BB6\u3002"],["Samuel Okoro","\u7267\u5E08","\u65E0\u8BBA\u5728\u54EA\u9897\u661F\u7403\u4E0A\uFF0C\u6211\u4EEC\u90FD\u4F1A\u4E3A\u65B0\u751F\u7684\u5B69\u5B50\u795D\u798F\u3002"],["\u53F6\u77E5\u79CB","\u8BD7\u4EBA",'"\u6B64\u5FC3\u5B89\u5904\u662F\u543E\u4E61\u3002"\u2014\u2014\u82CF\u8F7C\u3002\u6211\u60F3\uFF0C\u4ED6\u8BF4\u5F97\u5BF9\u3002'],["Hannah Weber","\u7269\u7406\u5B66\u5BB6","\u805A\u53D8\u53CD\u5E94\u5806\u7684\u5149\uFF0C\u548C\u592A\u9633\u662F\u540C\u4E00\u79CD\u5149\u3002"],["\u5C0F\u6EE1","\u5B69\u5B50","\u53D4\u53D4\uFF0C\u5730\u7403\u662F\u4EC0\u4E48\u6837\u5B50\u7684\uFF1F"],["Diego Ram\xEDrez","\u767B\u5C71\u5BB6","\u5965\u6797\u5E15\u65AF\u5C71\u6709\u4E24\u4E07\u7C73\u9AD8\u3002\u603B\u6709\u4E00\u5929\u6211\u8981\u7AD9\u4E0A\u53BB\u3002"]],fh=0;function ox(n,e,t){let i=t?.idx??fh++,s=aa[i%aa.length],r=Um(i);r.group.position.set(n,_e(n,e),e),d.scene.add(r.group);let o={...r,idx:i,name:s[0]+(i>=aa.length?` ${Math.floor(i/aa.length)+1}\u4E16`:""),job:s[1],line:s[2],pos:r.group.position,target:null,wait:Math.random()*3,phase:Math.random()*6,talked:0};return d.colonists.push(o),o}function mb(n){let e=d.buildings.filter(o=>o.type!=="lamp");if(!e.length)return new T(n.pos.x+(Math.random()-.5)*10,0,n.pos.z+(Math.random()-.5)*10);let t=e;if(d.time.night>.5){let o=e.filter(l=>l.type==="plaza"&&l.powered);if(o.length&&Math.random()<.85){let l=o[n.idx%o.length],c=n.idx*2.399%(Math.PI*2),h=2.8+n.idx%3*.9;return n.atPlaza=l,new T(l.x+Math.cos(c)*h,0,l.z+Math.sin(c)*h)}let a=e.filter(l=>l.type==="habitat"||l.type==="apartment");a.length&&(t=a)}n.atPlaza=null;let i=t[Math.floor(Math.random()*t.length)],s=Math.random()*Math.PI*2,r=i.def.r+1.5+Math.random()*5;return new T(i.x+Math.cos(s)*r,0,i.z+Math.sin(s)*r)}var ml=null,qf=25;function gb(n,e){let t=Dm();t.group.userData.shuttle=!0,t.group.position.set(n.x,n.y+260,n.z),d.scene.add(t.group),ml={...t,pad:n,n:e,t:0,phase:"descend"},J.play("rumble"),d.events.emit("shuttleIncoming",e)}function ax(n){let e=d.colony;if(d.popTotal=Math.max(d.popTotal||0,d.colonists.length),e.pop=d.popTotal,e.pop)for(d._work=(d._work||0)+n*e.pop*.04*(Ht("culture")?2:1);d._work>=1;){d._work-=1;let r=Math.random()<.55?"iron":Math.random()<.6?"silicon":"ice";d.res[r]++}let t=d.buildings.filter(r=>r.type==="beacon"&&r.powered),i=e.support-e.pop;!ml&&t.length&&i>0&&!d.ended&&(qf-=n,qf<=0&&(qf=Math.max(20,50/t.length)*(Ht("pr")?.55:1),gb(t[Math.floor(Math.random()*t.length)],Math.min(i,4+(d.cityLevel||0)*2+(Ht("pr")?2:0))))),ml&&xb(n);let s=performance.now()*.001;for(let r of d.colonists){r.target||(r.wait-=n,r.wait<=0&&(r.target=mb(r)));let o=!1;if(r.target){let h=r.target.x-r.pos.x,u=r.target.z-r.pos.z,f=Math.hypot(h,u);if(f<.6)r.target=null,r.wait=3+Math.random()*8;else{r.pos.x+=h/f*1.7*n,r.pos.z+=u/f*1.7*n;for(let g of d.colliders.query(r.pos.x,r.pos.z)){if(g.kind!=="building")continue;let v=r.pos.x-g.x,x=r.pos.z-g.z,m=Math.hypot(v,x),_=g.r+.4;m<_&&m>.01&&(r.pos.x=g.x+v/m*_,r.pos.z=g.z+x/m*_)}r.group.rotation.y=Math.atan2(h,u),o=!0}}let a=Math.hypot(d.player.pos.x-r.pos.x,d.player.pos.z-r.pos.z);a<4&&!o?r.group.rotation.y=Math.atan2(d.player.pos.x-r.pos.x,d.player.pos.z-r.pos.z):!o&&r.atPlaza&&(r.group.rotation.y=Math.atan2(r.atPlaza.x-r.pos.x,r.atPlaza.z-r.pos.z),r.wait=Math.max(r.wait,2),d.time.night<.3&&(r.wait=0)),r.pos.y=_e(r.pos.x,r.pos.z);let l=s*7+r.phase,c=o?Math.sin(l)*.6:0;r.legL.rotation.x=c,r.legR.rotation.x=-c,r.armL.rotation.x=-c*.8,r.armR.rotation.x=c*.8,!o&&a<4&&(r.armR.rotation.x=-2.6+Math.sin(s*6)*.3),r.body.position.y=.72+(o?Math.abs(Math.sin(l))*.04:0),r.talked=Math.max(0,r.talked-n)}}function xb(n){let e=ml;e.t+=n;let t=e.pad,i=e.group;if(e.phase==="descend"){let s=Math.min(1,e.t/11),r=1-Math.pow(1-s,3);i.position.y=t.y+.6+260*(1-r),e.flame.scale.set(1,.6+(1-r)*1.2+Math.random()*.2,1);for(let o=0;o<3;o++)Ee.flame(i.position);s>.85&&Math.random()<.5&&Ee.dustPuff(new T(t.x,t.y,t.z),4,10),s>=1&&(e.phase="landed",e.t=0,Ee.ring(new T(t.x,t.y,t.z),3,80),e.flame.visible=!1,e.flameGlow.visible=!1)}else if(e.phase==="landed"){if(e.total=e.total||e.n,e.n>0&&e.t>2+(e.total-e.n)*.6){let s;d.colonists.length<40?(s=ox(t.x+(Math.random()-.5)*2,t.z+3),s.target=new T(t.x+(Math.random()-.5)*20,0,t.z+10+Math.random()*8)):s={name:aa[fh++%aa.length][0]},e.n--,e.arrived=(e.arrived||[]).concat([s]),d.popTotal=(d.popTotal||0)+1,d.stats.arrived++}e.n<=0&&e.t>7&&(e.phase="ascend",e.t=0,e.flame.visible=!0,e.flameGlow.visible=!0,J.play("rumble"),d.events.emit("colonistsArrived",e.arrived||[]))}else if(e.phase==="ascend"){i.position.y+=n*(5+e.t*12);for(let s=0;s<3;s++)Ee.flame(i.position);e.t<1.5&&Ee.dustPuff(new T(t.x,t.y,t.z),3,10),e.t>12&&(d.scene.remove(i),ml=null)}}var Yf=new T;function lx(n,e){let t=null,i=6;for(let s of d.colonists){Yf.set(s.pos.x-n.x,s.pos.y+1.1-n.y,s.pos.z-n.z);let r=Yf.dot(e);r<0||r>i||Yf.lengthSq()-r*r<.8*.8&&(i=r,t=s)}return t}function cx(){return d.colonists.map(n=>[n.idx,+n.pos.x.toFixed(1),+n.pos.z.toFixed(1)])}function hx(n){for(let[e,t,i]of n)ox(t,i,{idx:e});fh=Math.max(fh,...n.map(e=>e[0]+1),0)}var yb={iron:'<path d="M12 2.5l8.2 4.75v9.5L12 21.5l-8.2-4.75v-9.5z"/><path d="M12 2.5v19M3.8 7.25l16.4 9.5M20.2 7.25L3.8 16.75" opacity=".35"/>',silicon:'<path d="M12 2l7 10-7 10-7-10z"/><path d="M5 12h14M12 2v20" opacity=".35"/>',ice:'<path d="M12 2v20M3.3 7l17.4 10M20.7 7L3.3 17"/><path d="M9.5 3.5L12 6l2.5-2.5M9.5 20.5L12 18l2.5 2.5"/>',titanium:'<path d="M12 2l2.6 7.4L22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6z"/>',power:'<path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H12z"/>',pop:'<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.6 2.7-6 6-6s6 2.4 6 6"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 14.4c3 .1 5.5 2.2 5.5 5.6"/>',house:'<path d="M3 20h18M5 20V10l7-6 7 6v10"/><path d="M10 20v-5h4v5"/>',o2:'<circle cx="9" cy="12" r="5.5"/><path d="M17 15.5c0-1.4 2.6-1.6 2.6-3 0-.9-.7-1.5-1.6-1.5S16.5 11.6 16.5 12.4M16.5 18.5h3.4"/>',food:'<path d="M12 21V9"/><path d="M12 13c-4 0-6-3-6-7 4 0 6 3 6 7zM12 11c0-4 2-7 6-7 0 4-2 7-6 7z"/>',water:'<path d="M12 2.5S5.5 10 5.5 14.5a6.5 6.5 0 0013 0C18.5 10 12 2.5 12 2.5z"/>',laser:'<path d="M3 15l7-7 3 3-7 7z"/><path d="M13 11l2-2M16 8l5-5M17.5 11.5l3 .5M12.5 6.5l-.5-3"/>',rifle:'<path d="M2 10h15l3 2-3 2H9l-2 5H4l1-5H2z"/><path d="M12 10V7h3v3"/>',build:'<path d="M3 21h18M6 21V11h12v10M9 11V6h6v5"/><path d="M14 3l5 3" />',rover:'<path d="M3 15h18v-4l-3-4H8l-2 4H3z"/><circle cx="7" cy="17.5" r="2.2"/><circle cx="17" cy="17.5" r="2.2"/><path d="M10 7v4h8"/>',warn:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.01"/>',sun:'<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/>',moon:'<path d="M20 14.5A8.5 8.5 0 019.5 4a8.5 8.5 0 1010.5 10.5z"/>',meteor:'<circle cx="16" cy="16" r="4"/><path d="M13 13L3 3M15 11L8 4M11 15L4 8"/>',radio:'<path d="M5 9a9.5 9.5 0 0114 0M8 12a5 5 0 018 0"/><circle cx="12" cy="15.5" r="1.6"/><path d="M12 17v4"/>',check:'<path d="M4 12.5l5 5L20 6.5"/>',lock:'<rect x="5" y="10.5" width="14" height="10" rx="1"/><path d="M8 10.5V7a4 4 0 018 0v3.5"/>',ship:'<path d="M12 2c3 3 4 7 4 11v4H8v-4c0-4 1-8 4-11z"/><path d="M8 13l-3 4v3l3-2M16 13l3 4v3l-3-2M10 20l2 2 2-2"/>',colony:'<path d="M2 20h20"/><path d="M4 20v-5a4 4 0 018 0v5M13 20V7h7v13"/><path d="M15.5 10h2M15.5 13h2M15.5 16h2"/>',storm:'<path d="M3 8h12a3 3 0 10-3-3M3 12h16a3 3 0 11-3 3M3 16h8"/>',shield:'<path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/>',wrench:'<path d="M14.5 6.5a4 4 0 015.2 5.2L21 13l-8 8-1.3-1.3a4 4 0 01-5.2-5.2L3 11l3-3 3.5 3.5 2-2L8 6l3-3z" transform="scale(.9) translate(1.3 1.3)"/>',tank:'<rect x="7" y="5" width="10" height="16" rx="5"/><path d="M10 2h4v3h-4zM7 10h10"/>',scanner:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 12l6-6"/>',jet:'<path d="M8 3h8v11H8z"/><path d="M9 14l-1 4M15 14l1 4M10 18l2 4 2-4"/>',armor:'<path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/><path d="M8 10l4 2 4-2M12 12v6"/>',focus:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="2"/><path d="M12 1.5v5M12 17.5v5M1.5 12h5M17.5 12h5"/>',bolt2:'<path d="M7 2l-2 9h5l-2 11 9-13h-6l3-7z"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',planet:'<circle cx="12" cy="12" r="6.5"/><path d="M2.5 15.5c3 2 16 -4 19-9" />',trophy:'<path d="M7 3h10v5a5 5 0 01-10 0z"/><path d="M7 5H3c0 3 2 5 4 5M17 5h4c0 3-2 5-4 5M12 13v4M8 21h8M9 17h6"/>',book:'<path d="M4 4h6a2 2 0 012 2v14a2 2 0 00-2-2H4zM20 4h-6a2 2 0 00-2 2v14a2 2 0 012-2h6z"/>',camera:'<path d="M3 7h4l2-3h6l2 3h4v13H3z"/><circle cx="12" cy="13" r="4"/>',gear:'<circle cx="12" cy="12" r="3.2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',drone:'<rect x="9" y="10" width="6" height="4" rx="1"/><path d="M9 11L5 7M15 11l4-4M9 13l-4 4M15 13l4 4"/><circle cx="5" cy="7" r="2.2"/><circle cx="19" cy="7" r="2.2"/><circle cx="5" cy="17" r="2.2"/><circle cx="19" cy="17" r="2.2"/>',boss:'<path d="M12 2l3 6 6 1-4 5 1 7-6-3-6 3 1-7-4-5 6-1z"/><circle cx="12" cy="12" r="2"/>',key:'<circle cx="8" cy="15" r="4.5"/><path d="M11.5 12L20 3.5M17 6.5l2.5 2.5M15 8.5l2 2"/>',dome:'<path d="M3 19h18M4.5 19a7.5 7.5 0 0115 0"/><path d="M12 11.5V8M10 19v-3h4v3"/>',tower:'<path d="M6 21V5h6v16M12 21V10h6v11"/><path d="M8 8h2M8 11h2M8 14h2M14 13h2M14 16h2M3 21h18"/>',monument:'<path d="M10 21l1-16 1-2 1 2 1 16z"/><ellipse cx="12" cy="11" rx="6" ry="2"/><path d="M5 21h14"/>'};function ux(){return`<svg xmlns="http://www.w3.org/2000/svg" style="display:none">${Object.entries(yb).map(([n,e])=>`<symbol id="i-${n}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${e}</symbol>`).join("")}</svg>`}var mt=(n,e="")=>`<svg class="ico ${e}" aria-hidden="true"><use href="#i-${n}"/></svg>`;var ph={};function dx(n){let e=n.filter(l=>!ph[l]);if(!e.length)return ph;let t=256,i=new Po({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});i.setSize(t,t),i.setPixelRatio(1),i.toneMapping=Lr,i.toneMappingExposure=1.15;let s=new Fi;s.add(new Ks(14674175,3811876,1.4));let r=new zi(16773344,2.6);r.position.set(4,8,6),s.add(r);let o=new zi(8965375,1.4);o.position.set(-6,4,-6),s.add(o);let a=new ln(30,1,.1,500);for(let l of e){let c=new pe,h={};zn[l](c,h);let u=[];c.traverse(_=>{(_.userData.found||_===h.flame||_===h.beam)&&u.push(_)}),u.forEach(_=>_.parent.remove(_));let f=[];c.traverse(_=>{_.isSprite&&f.push([_,_.parent])}),f.forEach(([_,E])=>E.remove(_)),s.add(c);let p=new Mi().setFromObject(c,!0),g=p.getSize(new T),v=p.getCenter(new T);f.forEach(([_,E])=>E.add(_));let m=Math.max(g.x,g.y,g.z)*.62/Math.tan(Yt.degToRad(15))*1.05;a.position.set(v.x+m*.62,v.y+m*.42,v.z+m*.66),a.lookAt(v),a.updateProjectionMatrix(),i.render(s,a),ph[l]=i.domElement.toDataURL("image/png"),s.remove(c)}return i.dispose(),i.forceContextLoss(),ph}var vb={mars:[{id:"zhurong",name:"\u795D\u878D\u53F7\u706B\u661F\u8F66",model:"rover",who:"\u6863\u6848 \xB7 \u795D\u878D\u53F7",text:"\u4E2D\u56FD\u706B\u661F\u8F66\u300C\u795D\u878D\u53F7\u300D\uFF0C2021 \u5E74\u7740\u9646\u5728\u4E4C\u6258\u90A6\u5E73\u539F\u2014\u2014\u5C31\u5728\u4F60\u811A\u4E0B\u8FD9\u7247\u571F\u5730\u3002\u5B83\u7684\u592A\u9633\u80FD\u677F\u4E0A\u79EF\u6EE1\u4E86\u516D\u5341\u591A\u5E74\u7684\u6C99\u5C18\u3002\u4EBA\u7C7B\u5728\u706B\u661F\u4E0A\u7684\u7B2C\u4E00\u884C\u8F66\u8F99\uFF0C\u5C31\u662F\u5B83\u7559\u4E0B\u7684\u3002"},{id:"opportunity",name:"\u673A\u9047\u53F7\u6B8B\u9AB8",model:"rover2",who:"\u6863\u6848 \xB7 \u673A\u9047\u53F7",text:"\u4E00\u5757\u5199\u7740\u300COpportunity\u300D\u7684\u6B8B\u7247\uFF0C\u4E0D\u77E5\u88AB\u54EA\u573A\u6C99\u5C18\u66B4\u5377\u5230\u4E86\u8FD9\u91CC\u3002\u5B83\u5728\u706B\u661F\u4E0A\u5DE5\u4F5C\u4E86\u5341\u4E94\u5E74\u3002\u5B83\u6700\u540E\u4F20\u56DE\u7684\u6570\u636E\uFF0C\u88AB\u4EBA\u4EEC\u7FFB\u8BD1\u6210\u4E00\u53E5\u8BDD\uFF1A\u300C\u6211\u7684\u7535\u91CF\u5F88\u4F4E\uFF0C\u5929\u5FEB\u9ED1\u4E86\u3002\u300D"},{id:"viking",name:"\u6D77\u76D7\u4E00\u53F7\u7740\u9646\u5668",model:"lander",who:"\u6863\u6848 \xB7 \u6D77\u76D7\u4E00\u53F7",text:"1976 \u5E74\uFF0C\u4EBA\u7C7B\u7B2C\u4E00\u4E2A\u5728\u706B\u661F\u6210\u529F\u7740\u9646\u5E76\u4F20\u56DE\u7167\u7247\u7684\u63A2\u6D4B\u5668\u3002\u7167\u7247\u4E0A\uFF0C\u5C31\u662F\u8FD9\u6837\u4E00\u7247\u7EA2\u8272\u7684\u3001\u5E03\u6EE1\u77F3\u5934\u7684\u5E73\u539F\u3002"},{id:"ingenuity",name:"\u673A\u667A\u53F7\u76F4\u5347\u673A",model:"heli",who:"\u6863\u6848 \xB7 \u673A\u667A\u53F7",text:"\u4E00\u67B6\u53EA\u6709 1.8 \u516C\u65A4\u7684\u5C0F\u76F4\u5347\u673A\u30022021 \u5E74\uFF0C\u5B83\u5B8C\u6210\u4E86\u4EBA\u7C7B\u5728\u5730\u7403\u4E4B\u5916\u7684\u7B2C\u4E00\u6B21\u52A8\u529B\u98DE\u884C\u3002\u65CB\u7FFC\u4E0A\u8FD8\u8D34\u7740\u4E00\u5C0F\u5757\u83B1\u7279\u5144\u5F1F\u98DE\u673A\u7684\u5E03\u6599\u3002"}],europa:[{id:"drill",name:"\u51B0\u5C42\u94BB\u63A2\u5668",model:"drill",who:"\u6863\u6848 \xB7 \u51B0\u7A7F\u8005\u53F7",text:"2041 \u5E74\u7684\u65E0\u4EBA\u94BB\u63A2\u5668\u300C\u51B0\u7A7F\u8005\u53F7\u300D\u3002\u5B83\u94BB\u5230\u4E86\u51B0\u4E0B\u4E09\u516C\u91CC\uFF0C\u5728\u6700\u540E\u4E00\u5E27\u753B\u9762\u91CC\uFF0C\u955C\u5934\u524D\u4F3C\u4E4E\u6709\u4EC0\u4E48\u4E1C\u897F\u5728\u53D1\u5149\u2026\u2026\u7136\u540E\u4FE1\u53F7\u4E2D\u65AD\u4E86\u3002"},{id:"hydro",name:"\u65E0\u4EBA\u6C34\u542C\u7AD9",model:"probe",who:"\u6863\u6848 \xB7 \u6C34\u542C\u7AD9",text:"\u4E00\u53F0\u8FD8\u5728\u8FD0\u8F6C\u7684\u6C34\u542C\u5668\u3002\u5B83\u5F55\u5230\u4E86\u51B0\u4E0B\u6D77\u6D0B\u91CC\u67D0\u79CD\u6709\u8282\u594F\u7684\u4F4E\u9891\u58F0\u97F3\uFF0C\u5468\u671F\u662F 17 \u5206\u949F\u3002\u6CA1\u6709\u4EBA\u77E5\u9053\u90A3\u662F\u4EC0\u4E48\u3002"},{id:"galileo",name:"\u523B\u5B57\u7684\u91D1\u5C5E\u7247",model:"plate",who:"\u6863\u6848 \xB7 \u65E0\u540D",text:"\u51B0\u91CC\u51BB\u7740\u4E00\u5757\u91D1\u5C5E\u7247\uFF0C\u4E0A\u9762\u523B\u7740\u4E00\u4E2A\u65E5\u671F\uFF1A1610 \u5E74 1 \u6708 7 \u65E5\u3002\u90A3\u662F\u4F3D\u5229\u7565\u7B2C\u4E00\u6B21\u770B\u89C1\u6728\u661F\u536B\u661F\u7684\u591C\u665A\u3002\u662F\u8C01\u628A\u5B83\u5E26\u5230\u8FD9\u91CC\u7684\uFF1F"}],kepler:[{id:"monolith",name:"\u6676\u4F53\u65B9\u7891",model:"monolith",who:"\u6863\u6848 \xB7 \u672A\u77E5",text:"\u8FD9\u4E0D\u662F\u4EBA\u7C7B\u9020\u7684\u3002\u65B9\u7891\u8868\u9762\u7684\u7EB9\u8DEF\u5728\u4F60\u9760\u8FD1\u65F6\u4E00\u5708\u5708\u4EAE\u8D77\uFF0C\u50CF\u662F\u5728\u8FA8\u8BA4\u4F60\u3002\u5B83\u7684\u5E74\u9F84\u5927\u7EA6\u662F\u56DB\u5343\u4E07\u5E74\u3002"},{id:"pathfinder",name:"\u65B9\u821F\u63A2\u8DEF\u5668",model:"probe",who:"\u6863\u6848 \xB7 \u63A2\u8DEF\u8005",text:"\u4E09\u767E\u5E74\u524D\u5148\u884C\u51FA\u53D1\u7684\u65E0\u4EBA\u63A2\u8DEF\u5668\u3002\u5B83\u7684\u6700\u540E\u4E00\u6761\u65E5\u5FD7\u5199\u7740\uFF1A\u300C\u5DF2\u627E\u5230\u9002\u5B9C\u7740\u9646\u70B9\u3002\u6211\u4F1A\u5728\u8FD9\u91CC\u7B49\u4F60\u4EEC\u3002\u300D\u5B83\u7B49\u4E86\u4E00\u767E\u4E00\u5341\u4E8C\u5E74\u3002"},{id:"fossil",name:"\u5DE8\u578B\u5316\u77F3",model:"fossil",who:"\u6863\u6848 \xB7 \u5316\u77F3",text:"\u4E00\u526F\u5DE8\u5927\u7684\u9AA8\u67B6\uFF0C\u5F27\u5F62\u7684\u808B\u9AA8\u50CF\u62F1\u95E8\u4E00\u6837\u7ACB\u5728\u5730\u4E0A\u3002\u751F\u524D\uFF0C\u5B83\u53EF\u80FD\u50CF\u90A3\u4E9B\u53D1\u5149\u7684\u6C34\u6BCD\u4E00\u6837\uFF0C\u6F02\u6D6E\u5728\u8FD9\u7247\u5929\u7A7A\u91CC\u3002"}]},$r=[],ui=new he({color:8022620,roughness:.9,metalness:.3}),Zf=new he({color:13148240,roughness:.4,metalness:.8}),Kf=new he({color:15260872,roughness:.8,flatShading:!0}),Mb=new he({color:1314844,roughness:.15,metalness:.9,emissive:6308095,emissiveIntensity:.15});function Pt(n,e,t,i,s,r,o=0,a=0,l=0){let c=new le(n,e);return c.position.set(t,i,s),c.rotation.set(o,a,l),c.castShadow=!0,c.receiveShadow=!0,r.add(c),c}var _b={rover(n){Pt(new Ge(1.6,.5,2.2),ui,0,.9,0,n,0,0,.08);for(let e of[-1,1])Pt(new Ge(1.4,.05,1.6),y.solar,e*1.4,1.1,0,n,0,0,e*.25);Pt(new Je(.05,.05,1.2,6),ui,.4,1.7,-.7,n),Pt(new Ge(.3,.2,.25),ui,.4,2.35,-.7,n,0,0,.3);for(let e of[-.9,0,.9])for(let t of[-1,1])Pt(new Je(.28,.28,.22,10),y.dark,t*.95,.3,e,n,0,0,Math.PI/2)},rover2(n){Pt(new Ge(1.4,.45,1.8),ui,0,.5,0,n,.25,.4,.4),Pt(new Ge(1.2,.05,1.1),y.solar,.9,.35,.3,n,.1,0,-.6),Pt(new Je(.28,.28,.22,10),y.dark,-1.2,.25,.8,n,.4,0,1.2)},lander(n){Pt(new Je(1,1.1,.6,6),Zf,0,1,0,n);for(let e=0;e<3;e++){let t=e*Math.PI*2/3;Pt(new Je(.06,.06,1.4,5),ui,Math.cos(t)*1.1,.5,Math.sin(t)*1.1,n,Math.sin(t)*.4,0,-Math.cos(t)*.4)}Pt(new Je(.6,.6,.05,16),y.white,0,1.6,.3,n,.6,0,0),Pt(new Ge(.2,.9,.2),ui,-.5,1.7,-.3,n)},heli(n){Pt(new Ge(.25,.2,.25),Zf,0,.45,0,n),Pt(new Je(.02,.02,.5,4),ui,0,.75,0,n),Pt(new Ge(1.2,.02,.08),ui,0,.9,0,n,0,.5,0),Pt(new Ge(1.2,.02,.08),ui,0,.98,0,n,0,-.4,0);for(let e=0;e<4;e++){let t=e*Math.PI/2+.6;Pt(new Je(.015,.015,.5,4),ui,Math.cos(t)*.2,.2,Math.sin(t)*.2,n,Math.sin(t)*.5,0,-Math.cos(t)*.5)}n.scale.setScalar(2.2)},drill(n){Pt(new Je(.5,.7,1.4,8),ui,0,.7,0,n),Pt(new Je(.15,.15,4,8),y.metal,0,2.6,0,n,.15,0,0);for(let e=0;e<3;e++){let t=e*Math.PI*2/3;Pt(new Ge(.15,3,.15),ui,Math.cos(t)*.9,1.4,Math.sin(t)*.9,n,Math.sin(t)*.25,0,-Math.cos(t)*.25)}},probe(n){Pt(new Be(.8,12,8),y.white,0,.9,0,n),Pt(new Le(.85,.08,6,20),y.orange,0,.9,0,n,Math.PI/2,0,0),Pt(new Je(.03,.03,1.6,4),y.metal,0,2.2,0,n),Pt(new Ot(.5,.3,12,1,!0),y.white,0,3,0,n,Math.PI,0,0)},plate(n){Pt(new Ge(1.2,.8,.06),Zf,0,.5,0,n,-.5,0,.1),Pt(new ri(.9,0),new he({color:13627135,transparent:!0,opacity:.6,roughness:.05}),0,.4,0,n)},monolith(n){Pt(new Ge(1.4,7,.5),Mb,0,3.5,0,n,0,0,.04),n.userData.rings=[];for(let e=0;e<3;e++){let t=Pt(new Le(1.4+e*.4,.04,6,32),new Ke({color:9075455,transparent:!0,opacity:.6}),0,2+e*1.6,0,n,Math.PI/2,0,0);n.userData.rings.push(t)}},fossil(n){for(let e=0;e<9;e++){let t=Pt(new Le(3-Math.abs(e-4)*.35,.18,6,16,Math.PI),Kf,0,0,-6+e*1.5,n);t.rotation.y=0}Pt(new Je(.25,.15,14,6),Kf,0,3,0,n,Math.PI/2,0,0),Pt(new ri(1.4,0),Kf,0,2.6,-8,n)}};function fx(){let n=Kn(it.length*977+5),e=vb[it]||[];e.forEach((t,i)=>{let s=0,r=0;for(let l=0;l<200;l++){let c=i/e.length*Math.PI*2+n()*1.2,h=160+n()*220;if(s=Math.cos(c)*h,r=Math.sin(c)*h,Math.abs(s)<tt-180&&Math.abs(r)<tt-180&&Ur(s,r,3)<.35&&!d.colliders.overlaps(s,r,6))break}let o=new pe;_b[t.model](o),o.position.set(s,_e(s,r)-.15,r),o.rotation.y=n()*6.28;let a=Se(16765578,3,d.scene,s,_e(s,r)+4,r);d.scene.add(o),d.colliders.add({x:s,z:r,r:t.model==="fossil"?3:1.4,kind:"relic"}),$r.push({...t,x:s,z:r,g:o,beacon:a,found:(d.relicsFound||[]).includes(t.id)})})}function px(n){let e=null,t=1e9;for(let i of $r){if(i.found)continue;let s=Math.hypot(i.x-n.x,i.z-n.z);s<t&&(t=s,e=i)}return e?{r:e,d:t}:null}function mx(n){return $r.find(e=>!e.found&&Math.hypot(e.x-n.x,e.z-n.z)<6)}function Ki(){return{found:$r.filter(n=>n.found).length,total:$r.length}}function gx(){return $r}function xx(n){n.found=!0,d.relicsFound=[...new Set([...d.relicsFound||[],n.id])],zt(n.who,n.text),d.res.titanium+=8,d.res.silicon+=15,d.events.emit("pickup",{type:"titanium",n:8,note:n.name}),d.events.emit("toast",`\u2713 \u53D1\u73B0\u9057\u8FF9\uFF1A${n.name}`),J.play("objective"),Ee.burst(new T(n.x,_e(n.x,n.z)+2,n.z),[1,.85,.5],60,8)}function yx(n){let e=performance.now()*.001;for(let t of $r)t.beacon.visible=!t.found,t.beacon.material.opacity=.5+Math.sin(e*2+t.x)*.3,t.g.userData.rings&&t.g.userData.rings.forEach((i,s)=>{i.rotation.z=e*(.3+s*.2),i.material.opacity=(t.found?.8:.3)+Math.sin(e*2+s)*.2})}var Re=n=>document.getElementById(n),tp,np,xe,ha={},ip={mars:"MARS",europa:"EUROPA",kepler:"KEPLER-442b"},Eb=["I","II","III","IV","V","VI"];function Tx(n){tp=n,document.body.insertAdjacentHTML("afterbegin",ux()),np=Re("minimap"),xe=np.getContext("2d"),Re("pl-cn").textContent=fe.name,Re("kick-planet").textContent=ip[it],Re("hotbar").innerHTML=dr.map((e,t)=>`<div class="slot" data-i="${t}"><span class="key">${t+1}</span><span class="ic">${mt(e.icon)}</span><span class="nm">${e.name}</span></div>`).join(""),Re("res").innerHTML=Object.entries(xn).map(([e,t])=>`<div class="r" id="r-${e}" style="--rc:${t.color}"><span class="ic">${mt(e)}</span><span class="tx"><small>${t.name}</small><b>0</b></span></div>`).join(""),d.events.on("toast",e=>Jt(e)),d.events.on("pickup",e=>wb(e)),document.querySelectorAll("[data-close]").forEach(e=>e.addEventListener("click",()=>{J.play("ui"),Vn(!0)})),document.querySelectorAll(".menu button, .bp-tabs button").forEach(e=>e.addEventListener("mouseenter",()=>J.play("tick")));try{ha=dx(Df.filter(e=>!Zi(e).hide))}catch{ha={}}}var vx={"\u2713":["check","good"],"\u26A0":["warn","warn"],"\u{1F527}":["wrench",""],"\u2600":["sun",""],"\u2604":["meteor",""],"\u{1F680}":["ship",""]};function Jt(n,e="radio",t=""){let i=[...n][0];if(vx[i]&&([e,t]=vx[i],n=n.slice(i.length).trim()),t==="warn"||e==="boss")return bb(n,e,t);let s=Re("log"),r=[...s.children].find(a=>a.dataset.t===n&&!a.classList.contains("out"));if(r){let a=(+r.dataset.n||1)+1;r.dataset.n=a,r.querySelector("em").textContent="\xD7"+a,clearTimeout(r._to),r._to=setTimeout(()=>sp(r),5e3);return}let o=document.createElement("div");for(o.className="ev "+t,o.dataset.t=n,o.innerHTML=`${mt(e)}<span>${n}</span><em></em>`,s.appendChild(o);s.children.length>3;)s.firstChild.remove();o._to=setTimeout(()=>sp(o),5e3)}function sp(n){n.classList.add("out"),setTimeout(()=>n.remove(),600)}var Mx,_x=0,Ex=0;function bb(n,e,t){let i=e==="boss"?2:1,s=performance.now();if(i<_x&&s<Ex){let o=Re("log"),a=document.createElement("div");for(a.className="ev warn",a.innerHTML=`${mt(e==="radio"?"warn":e)}<span>${n}</span><em></em>`,o.appendChild(a);o.children.length>3;)o.firstChild.remove();setTimeout(()=>sp(a),5e3);return}_x=i,Ex=s+4500;let r=Re("alert");r.className="show "+(t==="good"?"good":""),r.innerHTML=`${mt(e==="radio"?"warn":e)}<span>${n}</span>`,J.play("alarm"),clearTimeout(Mx),Mx=setTimeout(()=>{r.className=""},4500)}var Jf={};function wb({type:n,n:e,note:t}){J.play("pickup");let i=Jf[n];i&&i.el.isConnected?(i.n+=e,clearTimeout(i.to)):(i=Jf[n]={n:e,el:document.createElement("div")},i.el.className="feed",Re("feed").appendChild(i.el));let s=xn[n];i.el.style.setProperty("--rc",s.color),i.el.innerHTML=`<span class="nm">${t||s.name}</span>${mt(n)}<span class="q">+${i.n}</span>`,i.el.classList.remove("out"),i.to=setTimeout(()=>{i.el.classList.add("out"),setTimeout(()=>{i.el.remove(),delete Jf[n]},500)},1800);let r=Re("r-"+n);r.classList.remove("flash"),r.offsetWidth,r.classList.add("flash")}var mh=[],jf=!1;function Xr(n){if(jf){mh.length=0,mh.push(n);return}jf=!0,setTimeout(()=>{jf=!1,mh.length&&Xr(mh.shift())},5200);let e=Re("chapter"),t=hi.indexOf(n),i=n.k||(t>=0?`CHAPTER ${String(t+1).padStart(2,"0")}`:""),s=n.title.replace(/^第.章 · |^终章 · /,"");e.innerHTML=`<div class="k">${i}</div><div class="t">${s}</div><div class="ln"></div><div class="s">${n.sub}</div>`,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}var Sb=["build","craft","pause","starmap","archive","research","trade"];function As(n){Vn(!1),d.menuOpen=n,Re(n).classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),J.play("open"),n==="build"&&op(),n==="craft"&&hp(),n==="research"&&xh(),n==="trade"&&gl(),n==="archive"&&(Re("archive-body").innerHTML=up()),n==="pause"&&(Re("pause-pane").innerHTML="")}function Vn(n){Sb.forEach(t=>Re(t).classList.add("hidden"));let e=d.menuOpen;d.menuOpen=!1,e==="build"&&!bt.type&&(on.index=0),n&&d.requestLock()}function lp(n){Re("pause-pane").innerHTML=n}var rp={all:"\u5168\u90E8",life:"\u751F\u5B58",city:"\u57CE\u5E02",industry:"\u5DE5\u4E1A",defense:"\u9632\u5FA1",stellar:"\u661F\u9645"},gh="all",pr=null;function Rx(n){Re(n).innerHTML=Object.entries(xn).map(([e,t])=>`<span style="--rc:${t.color}">${mt(e)}${d.res[e]}</span>`).join("")}function Ax(n){return`<div class="need">${Object.entries(n).map(([e,t])=>`<div class="row ${d.res[e]>=t?"":"lack"}" style="--rc:${xn[e].color}">${mt(e)}<span class="nm">${xn[e].name}</span>${Math.floor(d.res[e])} / ${t}</div>`).join("")}</div>`}function op(){Rx("bp-res");let n=Df.filter(i=>!Zi(i).hide),e=["all",...Object.keys(rp).filter(i=>i!=="all"&&n.some(s=>An[s].cat===i))];Re("bp-tabs").innerHTML=e.map(i=>`<button data-c="${i}" class="${i===gh?"on":""}">${rp[i]}</button>`).join(""),Re("bp-tabs").querySelectorAll("button").forEach(i=>i.addEventListener("click",()=>{gh=i.dataset.c,J.play("tick"),op()}));let t=n.filter(i=>gh==="all"||An[i].cat===gh);(!pr||!t.includes(pr))&&(pr=t.find(i=>Zi(i).ok)||t[0]),Re("build-list").innerHTML=t.map(i=>{let s=An[i],r=Zi(i),o=wi(s.cost);return`<div class="tile ${r.ok?"":"locked"} ${o?"":"poor"} ${i===pr?"sel":""}" data-k="${i}">
      <div class="th">${ha[i]?`<img src="${ha[i]}" alt="">`:mt(s.icon)}</div>
      ${r.ok?"":`<div class="lk">${mt("lock")}</div>`}
      <div class="nm">${s.name}</div><div class="cs">${r.ok?Fo(s.cost):""}</div></div>`}).join(""),Re("build-list").querySelectorAll(".tile").forEach(i=>{i.addEventListener("click",()=>{pr=i.dataset.k,J.play("tick"),op()}),i.addEventListener("dblclick",()=>cp(i.dataset.k))}),Rb()}function Tb(n){let e=An[n],t=Zi(n);return it==="mars"&&e.chapter>d.chapter?`\u5728\u300C${hi[e.chapter].title}\u300D\u89E3\u9501`:t.why}function Rb(){let n=pr;if(!n){Re("bp-detail").innerHTML="";return}let e=An[n],t=Zi(n),i=wi(e.cost),s=[];e.power&&s.push(["\u7535\u529B",`${e.power>0?"+":""}${e.power}`,e.power>0?"pos":"neg"]),e.housing&&s.push(["\u4F4F\u623F",`${e.housing} \u4EBA`]),e.o2&&s.push(["\u4F9B\u6C27",`${e.o2} \u4EBA`]),e.food&&s.push(["\u98DF\u7269",`${e.food} \u4EBA`]),e.water&&s.push(["\u7528\u6C34",`${e.water} \u4EBA`]),e.life&&s.push(["\u8865\u6C27\u534A\u5F84",`${e.life} m`]),e.range&&s.push(["\u5C04\u7A0B",`${e.range} m`]),s.push(["\u8010\u4E45",e.hp]),Re("bp-detail").innerHTML=`<div class="pv">${ha[n]?`<img src="${ha[n]}" alt="">`:mt(e.icon)}</div>
    <div class="cat">${rp[e.cat]||""} \xB7 BLUEPRINT</div><h3>${e.name}</h3>
    <div class="ds">${e.desc}</div>
    <div class="stats">${s.map(r=>`<div><small>${r[0]}</small><b class="${r[2]||""}">${r[1]}</b></div>`).join("")}</div>
    ${t.ok?Ax(e.cost):`<div class="why">${mt("lock")} ${Tb(n)}</div>`}
    <button class="go" ${t.ok?"":"disabled"}>${t.ok?i?"\u5F00\u59CB\u5EFA\u9020":"\u653E\u7F6E\u84DD\u56FE\uFF08\u8D44\u6E90\u4E0D\u8DB3\uFF09":"\u5C1A\u672A\u89E3\u9501"}</button>`,Re("bp-detail").querySelector(".go").addEventListener("click",()=>cp(n))}function cp(n){let e=An[n];if(!Zi(n).ok){J.play("deny");return}J.play("ui"),bt.rot=0,zr(n),on.index=2,Vn(!0),wi(e.cost)||Jt("\u8D44\u6E90\u4E0D\u8DB3\uFF0C\u653E\u7F6E\u524D\u5148\u53BB\u91C7\u96C6\u5427","warn","warn")}function Cx(n){d.menuOpen==="build"&&n.code==="Enter"&&pr&&cp(pr),d.menuOpen==="craft"&&n.code==="Enter"&&Ji&&ap(Ji)}var Ji=null;function hp(){Rx("cr-res");let n=Object.keys(ea);Ji||(Ji=n.find(s=>!d.upgrades[s])||n[0]),Re("craft-list").innerHTML=n.map(s=>{let r=ea[s],o=d.upgrades[s],a=wi(r.cost),l=r.need&&!d.upgrades[r.need];return`<div class="tile ${o?"done":""} ${a&&!l?"":"poor"} ${s===Ji?"sel":""}" data-k="${s}">
      ${o?'<span class="tag">\u5DF2\u88C5\u5907</span>':""}
      <div class="th">${mt(r.icon)}</div><div class="nm">${r.name}</div><div class="cs">${o?"":Fo(r.cost)}</div></div>`}).join(""),Re("craft-list").querySelectorAll(".tile").forEach(s=>{s.addEventListener("click",()=>{Ji=s.dataset.k,J.play("tick"),hp()}),s.addEventListener("dblclick",()=>ap(s.dataset.k))});let e=ea[Ji],t=d.upgrades[Ji],i=e.need&&!d.upgrades[e.need];Re("craft-detail").innerHTML=`<div class="pv">${mt(e.icon)}</div><div class="cat">EQUIPMENT</div><h3>${e.name}</h3>
    <div class="ds">${e.desc}</div>
    ${t?'<div class="why okc">\u5DF2\u5236\u9020\u5E76\u88C5\u5907</div>':i?`<div class="why">${mt("lock")} \u9700\u8981\u5148\u5236\u9020\u7B49\u79BB\u5B50\u6B65\u67AA</div>`:Ax(e.cost)}
    <button class="go" ${t||i||!wi(e.cost)?"disabled":""}>${t?"\u5DF2\u88C5\u5907":wi(e.cost)?"\u5236\u9020":"\u8D44\u6E90\u4E0D\u8DB3"}</button>`,Re("craft-detail").querySelector(".go").addEventListener("click",()=>ap(Ji))}function ap(n){let e=ea[n];if(d.upgrades[n]||e.need&&!d.upgrades[e.need]||!wi(e.cost)){J.play("deny");return}$a(e.cost),d.upgrades[n]=!0,d.stats.crafted[n]=!0,J.play("craft"),Jt(`\u5236\u9020\u5B8C\u6210\uFF1A${e.name}`,e.icon,"good"),n==="tank"&&(d.player.o2=180),n==="rifle"&&(on.index=1),d.events.emit("crafted",n),Ji=Object.keys(ea).find(t=>!d.upgrades[t])||n,hp()}var ua={unlocked:()=>!0,relicLeft:()=>!1,relicFound:()=>0},Ts=null;function xh(){Re("rs-res").innerHTML=`<span style="--rc:var(--cyan)">${mt("book")}${Math.floor(d.rp||0)} \u79D1\u7814\u70B9</span><span style="--rc:var(--dim)"><small>+${eh().toFixed(2)}/\u79D2</small></span>`;let n=Object.keys(Yo);Ts||(Ts=n.find(r=>!Ht(r))||n[0]),Re("research-list").innerHTML=n.map(r=>{let o=Yo[r],a=Ht(r),l=(d.rp||0)>=o.cost;return`<div class="tile ${a?"done":""} ${l||a?"":"poor"} ${r===Ts?"sel":""}" data-k="${r}">${a?'<span class="tag">\u5DF2\u5B8C\u6210</span>':""}
      <div class="th">${mt(o.icon)}</div><div class="nm">${o.name}</div><div class="cs"><span class="cost ${l?"":"lack"}" style="--rc:var(--cyan)">${mt("book")}${o.cost}</span> <small>${o.cat}</small></div></div>`}).join(""),Re("research-list").querySelectorAll(".tile").forEach(r=>{r.addEventListener("click",()=>{Ts=r.dataset.k,J.play("tick"),xh()}),r.addEventListener("dblclick",()=>{Rf(r.dataset.k)&&xh()})});let e=Yo[Ts],t=Ht(Ts),i=(d.rp||0)>=e.cost,s=d.buildings.some(r=>r.type==="lab");Re("research-detail").innerHTML=`<div class="pv">${mt(e.icon)}</div><div class="cat">${e.cat} \xB7 TECHNOLOGY</div><h3>${e.name}</h3>
    <div class="ds">${e.desc}</div>
    ${s?"":'<div class="why">\u5EFA\u9020\u7814\u7A76\u6240\u6765\u4EA7\u51FA\u79D1\u7814\u70B9\u6570</div>'}
    <div class="need"><div class="row ${i||t?"":"lack"}" style="--rc:var(--cyan)">${mt("book")}<span class="nm">\u79D1\u7814\u70B9\u6570</span>${Math.floor(d.rp||0)} / ${e.cost}</div></div>
    <button class="go" ${t||!i?"disabled":""}>${t?"\u5DF2\u5B8C\u6210":i?"\u5F00\u59CB\u7814\u7A76":"\u79D1\u7814\u70B9\u6570\u4E0D\u8DB3"}</button>`,Re("research-detail").querySelector(".go").addEventListener("click",()=>{Rf(Ts)&&(Ts=Object.keys(Yo).find(r=>!Ht(r))||Ts,xh())})}var fr="iron",Rs="silicon",la=10;function gl(){Re("tr-res").innerHTML=Object.entries(xn).map(([t,i])=>`<span style="--rc:${i.color}">${mt(t)}${Math.floor(d.res[t])}</span>`).join("");let n=t=>Object.entries(xn).map(([i,s])=>`<button class="rs ${i===t?"on":""}" data-k="${i}" style="--rc:${s.color}">${mt(i)}<span>${s.name}</span><b>${Math.floor(d.res[i])}</b></button>`).join(""),e=Af(fr,Rs,la);Re("trade-body").innerHTML=`<div class="tcol"><h4>\u4EA4\u51FA</h4><div class="rsl" id="tr-from">${n(fr)}</div></div>
    <div class="tmid"><div class="amt">${[10,25,50,100].map(t=>`<button class="${t===la?"on":""}" data-n="${t}">${t}</button>`).join("")}</div>
      <div class="deal"><span style="--rc:${xn[fr].color}">${mt(fr)}${la}</span><i>\u2192</i><span style="--rc:${xn[Rs].color}">${mt(Rs)}${e}</span></div>
      <div class="note2">\u6C47\u7387\u6309\u5730\u7403\u5E02\u573A\u4EF7\u8BA1\u7B97\uFF0C\u542B 20% \u8FD0\u8F93\u635F\u8017</div>
      <button class="go" ${fr===Rs||e<=0||d.res[fr]<la?"disabled":""}>\u4EA4\u6613</button></div>
    <div class="tcol"><h4>\u6362\u53D6</h4><div class="rsl" id="tr-to">${n(Rs)}</div></div>`,Re("tr-from").querySelectorAll(".rs").forEach(t=>t.addEventListener("click",()=>{fr=t.dataset.k,J.play("tick"),gl()})),Re("tr-to").querySelectorAll(".rs").forEach(t=>t.addEventListener("click",()=>{Rs=t.dataset.k,J.play("tick"),gl()})),Re("trade-body").querySelectorAll(".amt button").forEach(t=>t.addEventListener("click",()=>{la=+t.dataset.n,J.play("tick"),gl()})),Re("trade-body").querySelector(".go").addEventListener("click",()=>{let t=yg(fr,Rs,la);t&&Jt(`\u4EA4\u6613\u5B8C\u6210\uFF1A\u83B7\u5F97${xn[Rs].name} ${t}`,Rs,"good"),gl()})}function up(){let n=d.colony,e=d.stats,t=e.mined.iron+e.mined.silicon+e.mined.ice+e.mined.titanium,i=[["\u4EBA\u53E3",n.pop],["\u57CE\u5E02\u7B49\u7EA7",kn[d.cityLevel].name],["\u8BBE\u65BD",d.buildings.length],["\u706B\u661F\u65E5",d.time.day],["\u7535\u529B",`${Math.round(n.powerProd)} / ${n.powerUse}`],["\u9057\u8FF9",`${Ki().found} / ${Ki().total}`],["\u53EF\u5BB9\u7EB3",n.support],["\u91C7\u96C6\u8D44\u6E90",t],["\u51FB\u9000\u9508\u8680\u86DB",e.kills],["\u884C\u9A76\u91CC\u7A0B",`${((e.driven||0)/1e3).toFixed(1)} km`],["\u5C45\u6C11\u4EA4\u8C08",(e.talked||[]).length]],s=dn.visited||[],r=Object.keys(Nn).map(l=>{let c=l===it?{pop:n.pop}:s.find(h=>h.id===l);return`<div><small>${Nn[l].name}</small><b>${c?c.pop+" \u4EBA":"\u2014"}</b></div>`}).join(""),o=d.colonists.map(l=>`<div class="person" data-i="${[...l.name][0]}"><span class="pn">${l.name}</span><span class="pj">${l.job}</span><div class="pl">\u201C${l.line}\u201D</div></div>`).join(""),a=n.pop-d.colonists.length;return`<h3>\u6982\u51B5 \xB7 ${fe.name}</h3><div class="kv">${i.map(l=>`<div><small>${l[0]}</small><b>${l[1]}</b></div>`).join("")}</div>
    <h3>\u4EBA\u7C7B\u7684\u8DB3\u8FF9</h3><div class="kv">${r}<div><small>\u661F\u9645\u603B\u4EBA\u53E3</small><b>${s.filter(l=>l.id!==it).reduce((l,c)=>l+c.pop,0)+n.pop}</b></div></div>
    <h3>\u5C45\u6C11\u540D\u518C</h3>${o?`<div class="people">${o}</div>`:'<p style="color:var(--dim)">\u8FD8\u6CA1\u6709\u5C45\u6C11\u3002\u5EFA\u597D\u4F4F\u623F\u3001\u6C27\u6C14\u3001\u98DF\u7269\u3001\u6C34\u548C\u7740\u9646\u573A\uFF0C\u79FB\u6C11\u98DE\u8239\u5C31\u4F1A\u5230\u6765\u3002</p>'}
    ${a>0?`<p style="color:var(--dim);margin-top:14px">\u2026\u2026\u4EE5\u53CA\u53E6\u5916 ${a} \u4F4D\u5C45\u6C11\u3002</p>`:""}`}var Qf=0,bx="",ca=0,wx="";function dp(n,e){let t=d.player,i=d.colony;if(Qf-=n,Qf<=0){Qf=.2;for(let I in xn)Re("r-"+I).querySelector("b").textContent=Math.floor(d.res[I]);let p=ug(),g=kn[d.cityLevel],v=p?Math.min(1,Math.min(i.pop/p.pop,d.buildings.length/Math.max(1,p.b))):1,x=`<span class="lv">LV.${Eb[d.cityLevel]}</span><span class="nm">${g.name}</span>${p?`<div class="pg"><i style="width:${v*100}%"></i></div><div class="nx">\u4E0B\u4E00\u7EA7\u300C${p.name}\u300D\xB7 \u4EBA\u53E3 ${Math.min(i.pop,p.pop)}/${p.pop} \xB7 \u8BBE\u65BD ${Math.min(d.buildings.length,p.b)}/${p.b}</div>`:'<div class="nx">\u5DF2\u8FBE\u5230\u6700\u9AD8\u7B49\u7EA7</div>'}`;Re("city").dataset.k!==x&&(Re("city").dataset.k=x,Re("city").innerHTML=x);let m="";if(d.buildings.length&&(m+=`<div class="st ${i.deficit?"warn":""}">${mt("power")}<div><small>\u7535\u529B</small><b>${Math.round(i.powerProd)}<em>/${i.powerUse}</em></b></div></div>`,m+=`<div class="st">${mt("pop")}<div><small>\u4EBA\u53E3</small><b>${i.pop}<em>/${i.support}</em></b></div></div>`,d.terraform>0&&(m+=`<div class="st tf">${mt("planet")}<div><small>\u5927\u6C14\u6539\u9020</small><b>${Math.floor(d.terraform*100)}%</b></div></div>`),i.deficit&&(m+=`<div class="chip">${mt("warn")}\u7535\u529B\u4E0D\u8DB3\uFF1A\u591A\u5EFA\u592A\u9633\u80FD\u6216\u53CD\u5E94\u5806</div>`),i.housing&&d.buildings.some(I=>I.type==="beacon")&&i.support<=i.pop)){let I=[["housing","\u4F4F\u623F","house","\u5C45\u4F4F\u7A79\u9876"],["o2","\u6C27\u6C14","o2","\u5236\u6C27\u7AD9"],["food","\u98DF\u7269","food","\u6E29\u5BA4"],["water","\u6C34","water","\u6C34\u51B0\u63D0\u53D6\u5668"]].sort((w,b)=>i[w[0]]-i[b[0]])[0];m+=`<div class="chip">${mt(I[2])}\u7F3A\u5C11${I[1]}\uFF1A\u5EFA\u9020${I[3]}\u6765\u8FCE\u63A5\u65B0\u79FB\u6C11</div>`}Re("colony").dataset.k!==m&&(Re("colony").dataset.k=m,Re("colony").innerHTML=m);let _=d.storm>.3?"\u6C99\u5C18\u66B4":d.raining?"\u964D\u96E8":"";Re("clock").innerHTML=Mf().replace(/^.*? · /,"")+(_?`<span class="wx">${_}</span>`:"");let E=hi[d.chapter],M=d.chapter,A=(Gn()?[]:E.goals).map((I,w)=>{let b=d.goalDone?.[M+":"+w],U=I.prog&&!b?I.prog():"",B=/^(\d+)\/(\d+)$/.exec(U);return`<div class="g ${b?"done":""}"><span class="cb"></span><div class="gx">${I.text}${U?`<small>${U}</small>`:""}${B?`<div class="gp"><i style="width:${Math.min(100,B[1]/B[2]*100)}%"></i></div>`:""}</div></div>`}).join(""),L=d.requests||[];L.length?A+='<div class="rq-h">\u5C45\u6C11\u59D4\u6258</div>'+L.map(I=>{let w=_g(I,ua);return`<div class="g rq"><span class="cb"></span><div class="gx">${I.text}<small>${I.giver}${I.n>1?` \xB7 ${w}/${I.n}`:""}</small>${I.n>1?`<div class="gp"><i style="width:${w/I.n*100}%"></i></div>`:""}</div></div>`}).join(""):Gn()&&(A+='<div class="g"><div class="gx" style="color:var(--dim)">\u5148\u5EFA\u4E00\u5EA7\u8BBE\u65BD\uFF0C\u5C45\u6C11\u4EEC\u4F1A\u5F00\u59CB\u63D0\u51FA\u59D4\u6258</div></div>'),(d.rp>.5||d.buildings.some(I=>I.type==="lab"))&&(A+=`<div class="rq-h">\u79D1\u7814 <b>${Math.floor(d.rp)}</b> \u70B9 <small>+${eh().toFixed(1)}/\u79D2 \xB7 T \u6253\u5F00</small></div>`),A!==wx&&(wx=A,Re("goals").innerHTML=A,Re("goal-ch").textContent=Gn()?`\u81EA\u7531\u6A21\u5F0F \xB7 ${qo[d.diffKey||"normal"].name}`:E.title.replace(/ · /," ")),document.querySelectorAll("#hotbar .slot").forEach((I,w)=>{I.classList.toggle("on",w===on.index),I.classList.toggle("lock",!!(dr[w].need&&!d.upgrades[dr[w].need]))})}ep("d-hp",70,t.health/t.maxHealth),ep("d-o2",58,t.o2/t.maxO2),ep("d-en",47,t.energy/100),Re("d-o2n").textContent=Math.ceil(t.o2/t.maxO2*100),Re("d-hpn").textContent=Math.ceil(t.health),Re("d-enn").textContent=Math.ceil(t.energy),Re("pl-en").textContent=Mf().split(" \xB7 ")[0]===fe.name?ip[it]:ip[it];let s=Re("o2-state"),r=t.inLife?`${mt("o2")} \u8865\u6C27\u4E2D`:t.o2<t.maxO2*.2?`${mt("warn")} \u6C27\u6C14\u4E0D\u8DB3\uFF0C\u7ACB\u5373\u8FD4\u56DE`:"";s.dataset.k!==r&&(s.dataset.k=r,s.innerHTML=r),s.className=t.inLife?"ok":"bad",Re("suit").classList.toggle("low",t.o2<t.maxO2*.2&&!t.inLife);let o=Gg(),a=Re("radio");if(o){bx!==o[1]&&(bx=o[1],ca=0,a.querySelector(".who").textContent=o[0]);let p=o[1].length;ca<p&&(ca=Math.min(p,ca+n*26+1e-4),n===0&&(ca=p));let g=Math.floor(ca);a.querySelector(".txt").innerHTML=o[1].slice(0,g)+(g<p?'<span class="cur"></span>':""),a.classList.toggle("idle",g>=p),a.classList.add("show")}else a.classList.remove("show");let l=Re("prompt");l.dataset.k!==(e.prompt||"")&&(l.dataset.k=e.prompt||"",l.innerHTML=e.prompt||""),l.classList.toggle("show",!!e.prompt),l.classList.toggle("drive",!!d.driving);let c=Re("buildhint");if(on.id==="build"&&bt.type&&!d.menuOpen){let p=An[bt.type];c.innerHTML=`<div class="bn">${p.name}</div><div>${Fo(p.cost)}</div>
      <div class="st">${bt.valid?'<span class="okc">\u5DE6\u952E\u653E\u7F6E</span>':`<span class="badc">${bt.reason}</span>`}</div>
      <div><kbd>R</kbd>\u65CB\u8F6C <kbd>\u53F3\u952E</kbd>\u53D6\u6D88 <kbd>B</kbd>\u66F4\u6362\u84DD\u56FE</div>`,c.classList.add("show")}else c.classList.remove("show");Re("hurt").style.opacity=Math.min(1,t.hurtT*1.6+(t.o2<=0?.5+Math.sin(performance.now()*.01)*.2:0)),Re("lowo2").style.opacity=!t.inLife&&t.o2<t.maxO2*.2?(.4+Math.sin(performance.now()*.006)*.3)*(1-t.o2/(t.maxO2*.2)*.6):0,Re("crosshair").className=e.crossClass||"";let h=Re("tip");h.dataset.k!==(e.tip||"")&&(h.dataset.k=e.tip||"",h.innerHTML=e.tip?`<div class="tk">\u63D0\u793A</div><div>${e.tip}</div>`:""),h.classList.toggle("show",!!e.tip);let u=Kg(),f=u&&Math.hypot(u.pos.x-t.pos.x,u.pos.z-t.pos.z)<260;Re("bossbar").classList.toggle("hidden",!f),f&&(Re("bossbar").querySelector("i").style.width=Math.max(0,u.hp/u.maxHp*100)+"%"),Ab(),Cb()}function ep(n,e,t){let i=2*Math.PI*e,s=Re(n);s.style.strokeDasharray=i,s.style.strokeDashoffset=i*(1-Math.max(0,Math.min(1,t)))}var Sx={0:"\u5317",45:"\u4E1C\u5317",90:"\u4E1C",135:"\u4E1C\u5357",180:"\u5357",225:"\u897F\u5357",270:"\u897F",315:"\u897F\u5317"};function Ab(){let n=d.player,e=n.fwd,t=Math.atan2(e.x,-e.z)*180/Math.PI,i=80,s=520,r=u=>s/2+u/i*(s/2),o="",a=Math.ceil((t-i)/5)*5;for(let u=a;u<=t+i;u+=5){let f=u-t,p=(u%360+360)%360;Sx[p]!==void 0?o+=`<span class="lb ${p%90===0?"big":""}" style="left:${r(f)}px">${Sx[p]}</span>`:o+=`<span class="tk ${p%15===0?"m":""}" style="left:${r(f)}px"></span>`}let l=(u,f)=>Math.atan2(u-n.pos.x,-(f-n.pos.z))*180/Math.PI,c=[{c:"home",t:`${mt("house")}${Math.round(Math.hypot(gt.x-n.pos.x,gt.z-n.pos.z))}m`,a:l(gt.x,gt.z)}];if(d.upgrades.scanner){let u=null,f=1e9;for(let p of d.nodes)if(p.type==="titanium"){let g=Math.hypot(p.x-n.pos.x,p.z-n.pos.z);g<f&&(f=g,u=p)}u&&c.push({c:"ti",t:`${mt("titanium")}${Math.round(f)}m`,a:l(u.x,u.z)})}let h=px(n.pos);h&&c.push({c:"ship",t:`? ${Math.round(h.d)}m`,a:l(h.r.x,h.r.z)});for(let u of c){let f=(u.a-t+540)%360-180;Math.abs(f)<i&&(o+=`<span class="mk ${u.c}" style="left:${r(f)}px;top:16px">${u.t}</span>`)}Re("compass").innerHTML=o}function Cb(){let n=d.player,e=np.width,t=e/2-6,i=d.upgrades.scanner?220:110,s=tp.width/Rn;xe.clearRect(0,0,e,e),xe.save(),xe.beginPath(),xe.arc(e/2,e/2,t,0,Math.PI*2),xe.clip(),xe.fillStyle="#0c0807",xe.fillRect(0,0,e,e),xe.globalAlpha=.75;let r=t*2/(i*2);xe.drawImage(tp,(n.pos.x-i+Rn/2)*s,(n.pos.z-i+Rn/2)*s,i*2*s,i*2*s,e/2-t,e/2-t,t*2,t*2),xe.globalAlpha=1;let o=f=>(f-n.pos.x)*r+e/2,a=f=>(f-n.pos.z)*r+e/2;xe.strokeStyle="rgba(255,255,255,.1)",xe.lineWidth=1;for(let f of[.33,.66])xe.beginPath(),xe.arc(e/2,e/2,t*f,0,Math.PI*2),xe.stroke();xe.strokeStyle="rgba(127,230,255,.55)",xe.setLineDash([3,4]),xe.beginPath(),xe.arc(o(Ri.x),a(Ri.z),kn[d.cityLevel].r*r,0,Math.PI*2),xe.stroke(),xe.setLineDash([]);let l=(f,p,g,v)=>{xe.fillStyle=v,xe.beginPath(),xe.arc(o(f),a(p),g,0,Math.PI*2),xe.fill()};for(let f of d.nodes){if(Math.abs(f.x-n.pos.x)>i||Math.abs(f.z-n.pos.z)>i)continue;let p=xn[f.type].color,g=o(f.x),v=a(f.z),x=f.type==="titanium"?3.2:2.2;xe.fillStyle=p,xe.beginPath(),xe.moveTo(g,v-x),xe.lineTo(g+x,v),xe.lineTo(g,v+x),xe.lineTo(g-x,v),xe.fill()}for(let f of d.buildings){let p=Math.max(2,f.def.r*r*.8);xe.fillStyle=f.broken?"#ff5a45":f.powered?"#ece6dc":"#ffb35c",xe.fillRect(o(f.x)-p,a(f.z)-p,p*2,p*2)}xe.fillStyle="#8dffb0";for(let f of d.colonists)xe.fillRect(o(f.pos.x)-1,a(f.pos.z)-1,2,2);let c=Math.sin(performance.now()*.008)>0;for(let f of d.enemies)l(f.pos.x,f.pos.z,f.guardian?3.5:2.6,c?"#ff5a45":"#a02818");l(gt.x,gt.z,3,"#8dffb0");for(let f of gx())Math.abs(f.x-n.pos.x)>i*1.2||Math.abs(f.z-n.pos.z)>i*1.2||(xe.strokeStyle=f.found?"rgba(255,210,138,.4)":"#ffd28a",xe.lineWidth=1.5,xe.beginPath(),xe.arc(o(f.x),a(f.z),4,0,Math.PI*2),xe.stroke());xe.restore(),xe.save(),xe.translate(e/2,e/2),xe.strokeStyle="rgba(236,230,220,.35)",xe.lineWidth=1,xe.beginPath(),xe.arc(0,0,t+.5,0,Math.PI*2),xe.stroke();for(let f=0;f<72;f++){let p=f/72*Math.PI*2,g=f%18===0?6:f%6===0?4:2;xe.strokeStyle=f%18===0?"rgba(255,179,92,.9)":"rgba(236,230,220,.3)",xe.beginPath(),xe.moveTo(Math.sin(p)*(t+1),-Math.cos(p)*(t+1)),xe.lineTo(Math.sin(p)*(t+1+g),-Math.cos(p)*(t+1+g)),xe.stroke()}let h=Math.atan2(n.fwd.x,-n.fwd.z);xe.rotate(h);let u=xe.createRadialGradient(0,0,0,0,0,t*.6);u.addColorStop(0,"rgba(255,179,92,.35)"),u.addColorStop(1,"rgba(255,179,92,0)"),xe.fillStyle=u,xe.beginPath(),xe.moveTo(0,0),xe.arc(0,0,t*.6,-Math.PI/2-.55,-Math.PI/2+.55),xe.closePath(),xe.fill(),xe.fillStyle="#fff",xe.beginPath(),xe.moveTo(0,-7),xe.lineTo(5,5),xe.lineTo(0,2.5),xe.lineTo(-5,5),xe.closePath(),xe.fill(),xe.restore()}var Px="starport-achv",vh=[{id:"first",name:"\u7B2C\u4E00\u6B65",desc:"\u5728\u5F02\u661F\u91C7\u96C6\u7B2C\u4E00\u5757\u77FF\u77F3",icon:"iron",check:()=>d.stats.mined.iron+d.stats.mined.silicon+d.stats.mined.ice>0},{id:"breathe",name:"\u547C\u5438",desc:"\u5EFA\u8D77\u7B2C\u4E00\u5EA7\u5236\u6C27\u7AD9",icon:"o2",check:()=>d.stats.built.oxygen>0},{id:"home",name:"\u7B2C\u4E00\u4E2A\u5BB6",desc:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",icon:"dome",check:()=>d.stats.built.habitat>0},{id:"welcome",name:"\u6B22\u8FCE\u56DE\u5BB6",desc:"\u8FCE\u63A5\u7B2C\u4E00\u6279\u79FB\u6C11",icon:"pop",check:()=>d.stats.arrived>0},{id:"listen",name:"\u503E\u542C\u8005",desc:"\u4E0E 8 \u4F4D\u5C45\u6C11\u4EA4\u8C08",icon:"radio",check:()=>(d.stats.talked||[]).length>=8},{id:"night",name:"\u957F\u591C\u5B88\u671B\u8005",desc:"\u51FB\u9000 15 \u53EA\u9508\u8680\u86DB",icon:"shield",check:()=>d.stats.kills>=15},{id:"guardian",name:"\u6676\u4F53\u730E\u4EBA",desc:"\u51FB\u8D25\u4E00\u53EA\u949B\u77FF\u5B88\u536B",icon:"titanium",check:()=>(d.stats.guardKills||0)>0},{id:"road",name:"\u516C\u8DEF\u65C5\u884C",desc:"\u9A7E\u9A76\u6F2B\u6E38\u8F66\u884C\u9A76 3 \u516C\u91CC",icon:"rover",check:()=>(d.stats.driven||0)>=3e3},{id:"meteor",name:"\u661F\u843D\u4E4B\u591C",desc:"\u91C7\u96C6\u4E00\u5757\u9668\u77F3",icon:"meteor",check:()=>(d.stats.meteorMined||0)>0},{id:"storm",name:"\u98CE\u66B4\u4E4B\u4E2D",desc:"\u7ECF\u5386\u4E00\u573A\u6C99\u5C18\u66B4",icon:"storm",check:()=>d.storm>.85},{id:"fly",name:"\u98DE\u7FD4",desc:"\u5236\u9020\u55B7\u6C14\u80CC\u5305",icon:"jet",check:()=>!!d.upgrades.jetpack},{id:"town",name:"\u5C0F\u9547",desc:"\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C\u5C0F\u9547\u300D",icon:"colony",check:()=>d.cityLevel>=2},{id:"metro",name:"\u5927\u90FD\u4F1A",desc:"\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C\u5927\u90FD\u4F1A\u300D",icon:"tower",check:()=>d.cityLevel>=4},{id:"fifty",name:"\u4E94\u5341\u4E2A\u706F\u706B",desc:"\u5355\u9897\u661F\u7403\u4EBA\u53E3\u8FBE\u5230 50",icon:"pop",check:()=>d.colony.pop>=50},{id:"reactor",name:"\u7B2C\u4E8C\u9897\u592A\u9633",desc:"\u70B9\u4EAE\u805A\u53D8\u53CD\u5E94\u5806",icon:"power",check:()=>d.stats.built.reactor>0},{id:"blue",name:"\u84DD\u8272\u5929\u7A7A",desc:"\u5B8C\u6210\u706B\u661F\u5927\u6C14\u6539\u9020",icon:"planet",check:()=>d.terraform>=1},{id:"europa",name:"\u51B0\u4E0B\u4E4B\u6D77",desc:"\u767B\u9646\u6728\u536B\u4E8C\xB7\u6B27\u7F57\u5DF4",icon:"ice",check:()=>it==="europa"},{id:"kepler",name:"\u53CC\u65E5\u4E4B\u5730",desc:"\u62B5\u8FBE\u5F00\u666E\u52D2-442b",icon:"sun",check:()=>it==="kepler"},{id:"civ",name:"\u661F\u9645\u6587\u660E",desc:"\u5EFA\u6210\u6587\u660E\u7EAA\u5FF5\u7891",icon:"monument",check:()=>d.stats.built.monument>0},{id:"relic",name:"\u56DE\u58F0",desc:"\u53D1\u73B0\u7B2C\u4E00\u5904\u9057\u8FF9",icon:"radio",check:()=>Ki().found>0},{id:"archaeo",name:"\u8003\u53E4\u5B66\u5BB6",desc:"\u53D1\u73B0\u4E00\u9897\u661F\u7403\u4E0A\u7684\u5168\u90E8\u9057\u8FF9",icon:"book",check:()=>{let n=Ki();return n.total>0&&n.found===n.total}},{id:"boss",name:"\u6676\u6BCD\u9668\u843D",desc:"\u5728\u6676\u6F6E\u4E4B\u591C\u51FB\u8D25\u6676\u6BCD",icon:"boss",check:()=>(d.stats.bossKills||0)>0},{id:"fleet",name:"\u65E0\u4EBA\u673A\u8230\u961F",desc:"\u65E0\u4EBA\u673A\u8FD0\u56DE 30 \u6279\u7269\u8D44",icon:"drone",check:()=>(d.stats.droneHauls||0)>=30},{id:"lv3",name:"\u7CBE\u76CA\u6C42\u7CBE",desc:"\u628A\u4E00\u5EA7\u5EFA\u7B51\u5347\u5230 3 \u7EA7",icon:"star",check:()=>d.buildings.some(n=>(n.level||1)>=3)},{id:"buddy",name:"\u597D\u642D\u6863",desc:"\u8BA9\u5C0F\u661F\u626B\u63CF 10 \u6B21",icon:"scanner",check:()=>(d.stats.scans||0)>=10},{id:"helper",name:"\u597D\u90BB\u5C45",desc:"\u5B8C\u6210 10 \u4E2A\u5C45\u6C11\u59D4\u6258",icon:"radio",check:()=>(d.stats.requests||0)>=10},{id:"science",name:"\u79D1\u5B66\u5BB6",desc:"\u5B8C\u6210 6 \u9879\u79D1\u7814",icon:"book",check:()=>Object.keys(d.tech||{}).length>=6},{id:"trader",name:"\u661F\u9645\u5546\u4EBA",desc:"\u5B8C\u6210 10 \u6B21\u661F\u9645\u8D38\u6613",icon:"ship",check:()=>(d.stats.traded||0)>=10},{id:"photo",name:"\u6444\u5F71\u5E08",desc:"\u5728\u62CD\u7167\u6A21\u5F0F\u4E2D\u4FDD\u5B58\u4E00\u5F20\u7167\u7247",icon:"camera",check:()=>(d.stats.photos||0)>0},{id:"gather",name:"\u6545\u4E61\u7684\u5149",desc:"\u591C\u91CC\uFF0C\u5C45\u6C11\u4EEC\u805A\u5728\u5E7F\u573A\u4E0A\u770B\u5168\u606F\u5730\u7403",icon:"planet",check:()=>!!d.plazaSeen}],qr={};try{qr=JSON.parse(localStorage.getItem(Px))||{}}catch{qr={}}var fp=[],pp=0,yh=0;function Ix(n){if(pp-=n,yh-=n,pp<=0){pp=1;for(let t of vh){if(qr[t.id])continue;let i=!1;try{i=t.check()}catch{i=!1}if(i){qr[t.id]=Date.now(),fp.push(t);try{localStorage.setItem(Px,JSON.stringify(qr))}catch{}}}}let e=document.getElementById("achv-pop");if(yh<=0&&e.classList.contains("show")&&e.classList.remove("show"),yh<=-.6&&fp.length){let t=fp.shift();e.innerHTML=`<div class="ai">${mt(t.icon)}</div><div><div class="k">ACHIEVEMENT UNLOCKED</div><div class="n">${t.name}</div><div class="d">${t.desc}</div></div>`,e.classList.add("show"),yh=4.5,J.play("achv")}}function mp(){return`<h3>\u6210\u5C31 \xB7 ${vh.filter(e=>qr[e.id]).length} / ${vh.length}</h3><div class="achv">${vh.map(e=>`<div class="ach ${qr[e.id]?"on":""}"><div class="ai">${mt(e.icon)}</div><div><div class="an">${e.name}</div><div class="ad">${e.desc}</div></div></div>`).join("")}</div>`}var Dx=!1,Ux=[],Nx=[],kx=[];function Lx(n,e,t,i,s){let r=new Rt;r.setAttribute("position",new Qt(new Float32Array(n*3),3));let o=new Yn({size:t,map:Jn(),color:e,transparent:!0,opacity:i,depthWrite:!1,blending:s?dt:Hi}),a=new ii(r,o);a.frustumCulled=!1,d.scene.add(a);let l=new Float32Array(n*3);for(let c=0;c<n;c++)l[c*3]=Math.random(),l[c*3+1]=Math.random()*Math.PI*2,l[c*3+2]=Math.random();return{p:a,seed:l,n}}function Pb(){if(Dx=!0,it==="mars")for(let n=0;n<3;n++){let e=Lx(420,14195306,2.4,.45,!1);Ux.push({...e,x:0,z:0,vx:0,vz:0,h:40+Math.random()*30,life:0,k:0})}else if(it==="europa"){let n=xs.slice(0,8).map(e=>({x:e.x+(Math.random()-.5)*e.r*.6,z:e.z+(Math.random()-.5)*e.r*.6}));n.push({x:60,z:70},{x:-90,z:-40},{x:120,z:140});for(let e of n){if(Math.abs(e.x)>tt-200||Math.abs(e.z)>tt-200)continue;let t=Lx(500,15267583,2.6,.6,!0);Nx.push({...t,x:e.x,z:e.z,y:_e(e.x,e.z),t:Math.random()*30,on:0})}}else if(it==="kepler"){let n=new Be(1,12,6,0,Math.PI*2,0,Math.PI/2);for(let e=0;e<34;e++){let t=.45+Math.random()*.4,i=new me().setHSL(t,.9,.6),s=new le(n,new Ke({color:i,transparent:!0,opacity:.55,depthWrite:!1,blending:dt})),r=new Oi(new _i({map:Jn(),color:i,transparent:!0,depthWrite:!1,blending:dt})),o=new le(new Ot(.6,3,6,1,!0),s.material);o.position.y=-1.6,o.rotation.x=Math.PI;let a=new pe;a.add(s,r,o),r.scale.setScalar(6);let l=.6+Math.random()*1.2;a.scale.setScalar(l),d.scene.add(a),kx.push({g:a,m:s,s:r,x:(Math.random()-.5)*500,z:(Math.random()-.5)*500,alt:14+Math.random()*30,ph:Math.random()*6,sp:.5+Math.random()})}}}var UR=new T,gp=0;function Hx(n){Dx||Pb();let e=d.player.pos,t=performance.now()*.001,i=1-d.time.night;for(let s of Ux){if(s.life-=n,s.life<=0){let c=Math.random()*Math.PI*2,h=90+Math.random()*200;s.x=Yt.clamp(e.x+Math.cos(c)*h,-tt+160,tt-160),s.z=Yt.clamp(e.z+Math.sin(c)*h,-tt+160,tt-160);let u=Math.random()*Math.PI*2;s.vx=Math.cos(u)*3,s.vz=Math.sin(u)*3,s.life=40+Math.random()*40,s.h=35+Math.random()*40}s.x+=s.vx*n,s.z+=s.vz*n;let r=Math.min(1,s.life/5,(60-s.life)/5+1)*i*(1-d.storm)*(d.terraform<1?1:.2);s.k+=(r-s.k)*Math.min(1,n),s.p.material.opacity=.45*s.k;let o=s.p.geometry.attributes.position.array,a=_e(s.x,s.z);for(let c=0;c<s.n;c++){let h=s.seed,u=(h[c*3]+t*.08*(.6+h[c*3+2]))%1,f=h[c*3+1]+t*(3+(1-u)*2),p=.8+u*u*9+h[c*3+2]*1.5,g=Math.sin(t*.7+u*4)*u*3;o[c*3]=s.x+Math.cos(f)*p+g,o[c*3+1]=a+u*s.h,o[c*3+2]=s.z+Math.sin(f)*p}s.p.geometry.attributes.position.needsUpdate=!0;let l=Math.hypot(e.x-s.x,e.z-s.z);l<8&&s.k>.5&&!d.driving&&(d.player.vel.x+=(e.x-s.x)/l*n*20,d.player.vel.z+=(e.z-s.z)/l*n*20)}gp-=n;for(let s of Nx){s.t-=n,s.t<=0&&s.on<=0&&(s.on=9,s.t=25+Math.random()*30,Math.hypot(e.x-s.x,e.z-s.z)<120&&J.play("rumble")),s.on-=n;let r=Yt.clamp(Math.min(s.on,9-s.on),0,1.5)/1.5;if(s.p.material.opacity=.6*r,r<=0)continue;let o=s.p.geometry.attributes.position.array,a=70;for(let l=0;l<s.n;l++){let c=s.seed,h=(c[l*3]+t*.35)%1,u=.4+h*9*c[l*3+2]+h*h*4;o[l*3]=s.x+Math.cos(c[l*3+1])*u,o[l*3+1]=s.y+Math.sin(h*Math.PI*.9)*a*(.6+c[l*3+2]*.4),o[l*3+2]=s.z+Math.sin(c[l*3+1])*u}s.p.geometry.attributes.position.needsUpdate=!0,Math.hypot(e.x-s.x,e.z-s.z)<40&&gp<=0&&(gp=.5,J.play("jet"))}for(let s of kx){s.ph+=n*s.sp,s.x+=Math.sin(s.ph*.3)*n*2,s.z+=Math.cos(s.ph*.23)*n*2,Math.abs(s.x-e.x)>260&&(s.x=e.x-Math.sign(s.x-e.x)*250),Math.abs(s.z-e.z)>260&&(s.z=e.z-Math.sign(s.z-e.z)*250);let r=_e(s.x,s.z)+s.alt+Math.sin(s.ph)*2;s.g.position.set(s.x,r,s.z);let o=.75+Math.sin(s.ph*3)*.25;s.m.scale.set(1+Math.sin(s.ph*3)*.12,1-Math.sin(s.ph*3)*.1,1+Math.sin(s.ph*3)*.12);let a=.15+d.time.night*.85;s.m.material.opacity=.5*a*o,s.s.material.opacity=.7*a*o}}var ji,xp,yl,yp,Yr,vp,fa=[],vl=0,xl=-1,Mp=20,Mh=0,mr=new T,Fx=new T,Ox=new Set,Eh=140;function Bx(){ji=new pe;let n=new le(new Be(.32,20,14),y.white),e=new le(new Le(.33,.04,8,28),y.orange);e.rotation.x=Math.PI/2;let t=new le(new Be(.2,16,10,-Math.PI*.35,Math.PI*.7,Math.PI*.3,Math.PI*.4),new he({color:660504,roughness:.1,metalness:.6}));t.position.z=.15,t.rotation.y=Math.PI,xp=Se(8382207,.45,null,0,.02,.33),yl=new le(new Le(.5,.015,6,40),new Ke({color:8382207,transparent:!0,opacity:.6})),yl.rotation.x=Math.PI/2;let i=new le(new Ot(.05,.25,6),y.metal);i.position.y=.38,ji.add(n,e,t,xp,yl,i,Se(16738874,.25,null,0,.5,0)),ji.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),ji.scale.setScalar(.8),yp=new Js(12578815,0,22,1.6),ji.add(yp),d.scene.add(ji);let s=d.player.pos;mr.set(s.x+1.5,s.y+2.2,s.z+1.5),ji.position.copy(mr),vp=new Ke({color:8382207,transparent:!0,opacity:0,side:qt,depthWrite:!1,blending:dt}),Yr=new le(new un(.94,1,96),vp),Yr.rotation.x=-Math.PI/2,Yr.visible=!1,d.scene.add(Yr)}function da(n,e,t=!0){t&&Ox.has(n)||Mp>0&&t||(Ox.add(n),Mp=45,zt("\u5C0F\u661F \xB7 \u4F19\u4F34\u673A\u5668\u4EBA",e))}var _h;function Ib(){if(_h)return _h;let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d");return e.translate(32,32),e.rotate(Math.PI/4),e.strokeStyle="#fff",e.lineWidth=5,e.strokeRect(-14,-14,28,28),e.fillStyle="rgba(255,255,255,.35)",e.fillRect(-9,-9,18,18),_h=new rn(n),_h}function Lb(){if(vl>0){d.events.emit("toast",`\u626B\u63CF\u51B7\u5374\u4E2D \xB7 ${Math.ceil(vl)} \u79D2`),J.play("deny");return}vl=12,xl=0,J.play("scan");for(let s of fa)d.scene.remove(s.s);fa=[];let n=d.player.pos,e={};for(let s of d.nodes){let r=Math.hypot(s.x-n.x,s.z-n.z);if(r>Eh)continue;let o=vs[s.type],a=new Oi(new _i({map:Ib(),color:new me(o[0],o[1],o[2]),transparent:!0,depthTest:!1,depthWrite:!1,opacity:0,sizeAttenuation:!1}));a.scale.setScalar(s.type==="titanium"?.05:.036),a.position.set(s.x,s.y+3,s.z),a.renderOrder=999,d.scene.add(a),fa.push({s:a,delay:r/90,life:10}),e[s.type]=(e[s.type]||0)+1}let t={iron:"\u94C1\u77FF",silicon:"\u7845\u6676",ice:"\u6C34\u51B0",titanium:"\u949B\u77FF"},i=Object.entries(e).map(([s,r])=>`${t[s]} ${r}`).join(" \xB7 ");d.events.emit("toast",i?`\u626B\u63CF\u5B8C\u6210 \xB7 ${i}`:"\u626B\u63CF\u5B8C\u6210 \xB7 \u9644\u8FD1\u6CA1\u6709\u77FF\u85CF"),d.stats.scans=(d.stats.scans||0)+1}function Gx(n){if(!ji)return;let e=d.player,t=performance.now()*.001;vl=Math.max(0,vl-n),Mp-=n,ce.hit("KeyQ")&&!d.menuOpen&&!e.dead&&Lb();let i=(d.driving,e.yaw),s=new T(Math.cos(i),0,-Math.sin(i)),r=new T(-Math.sin(i),0,-Math.cos(i)),o=e.pos.clone().addScaledVector(s,d.driving?3.5:3).addScaledVector(r,d.driving?2:5.5);o.y=Math.max(e.pos.y+1.55,_e(o.x,o.z)+.8)+Math.sin(t*2)*.12,d.driving&&(o.y+=2.2);let a=mr.distanceTo(o)>30?1:Math.min(1,n*3);Fx.lerp(o.clone().sub(mr).multiplyScalar(4),a),mr.addScaledVector(Fx,n),mr.distanceTo(o)>40&&mr.copy(o),ji.position.copy(mr);let l=e.pos.clone().addScaledVector(e.fwd,12);if(l.y+=1.5,ji.lookAt(l),yl.rotation.z+=n*1.5,yl.rotation.x=Math.PI/2+Math.sin(t*1.3)*.3,xp.material.opacity=.75+Math.sin(t*4)*.25,yp.intensity=d.time.night>.4?18*d.time.night:0,xl>=0){xl+=n;let h=xl*90;Yr.visible=h<Eh,Yr.position.set(e.pos.x,e.pos.y+.6,e.pos.z),Yr.scale.setScalar(Math.max(.1,h)),vp.opacity=.7*(1-h/Eh),h>=Eh&&(xl=-1)}for(let h=fa.length-1;h>=0;h--){let u=fa[h];u.delay-=n,!(u.delay>0)&&(u.life-=n,u.s.material.opacity=Math.min(1,(10-u.life)*3,u.life/2)*(.75+Math.sin(t*5+h)*.25),u.life<=0&&(d.scene.remove(u.s),u.s.material.dispose(),fa.splice(h,1)))}Mh=Math.hypot(e.vel.x,e.vel.z)>.5?0:Mh+n,!e.inLife&&e.o2<e.maxO2*.3&&da("o2"+Math.floor(t/120),"\u6C27\u6C14\u4E0D\u591A\u4E86\uFF01\u6700\u8FD1\u7684\u8865\u6C27\u70B9\u5728\u7F57\u76D8\u4E0A\u90A3\u4E2A\u623F\u5B50\u56FE\u6807\u7684\u65B9\u5411\u3002",!1),d.time.night>.6&&!e.flashlight&&da("dark","\u597D\u9ED1\u2026\u2026\u6309 F \u6253\u5F00\u624B\u7535\u7B52\u5427\u3002\u6211\u4E5F\u4F1A\u5E2E\u4F60\u7167\u7740\u70B9\u3002"),d.enemies.some(h=>!h.dead&&!h.guardian&&h.pos.distanceTo(e.pos)<25)&&da("enemy"+Math.floor(t/90),"\u68C0\u6D4B\u5230\u9508\u8680\u86DB\u9760\u8FD1\uFF01\u5C0F\u5FC3\uFF01",!1),d.nodes.some(h=>h.type==="titanium"&&Math.hypot(h.x-e.pos.x,h.z-e.pos.z)<40)&&da("ti","\u9644\u8FD1\u6709\u949B\u77FF\u7684\u4FE1\u53F7\uFF01\u7D2B\u8272\u7684\u90A3\u79CD\uFF0C\u5F88\u7A00\u6709\u54E6\u3002"),Mh>40&&(Mh=-200,da("idle"+Math.floor(t/300),zx[it][Math.floor(Math.random()*zx[it].length)],!1)),d.stats.scans===void 0&&d.time.day>=1&&t>30&&da("scanhint","\u6211\u80FD\u626B\u63CF\u9644\u8FD1\u7684\u77FF\u85CF\u2014\u2014\u6309 Q \u8BD5\u8BD5\u3002")}var zx={mars:["\u4F60\u77E5\u9053\u5417\uFF1F\u706B\u661F\u4E0A\u7684\u4E00\u5929\u6BD4\u5730\u7403\u957F 37 \u5206\u949F\u3002","\u706B\u661F\u7684\u65E5\u843D\u662F\u84DD\u8272\u7684\u3002\u7B49\u508D\u665A\u7684\u65F6\u5019\u62AC\u5934\u770B\u770B\u5427\u3002","\u90A3\u5EA7\u6700\u9AD8\u7684\u5C71\u53EB\u5965\u6797\u5E15\u65AF\uFF0C\u662F\u5730\u7403\u73E0\u5CF0\u7684\u4E24\u500D\u591A\u9AD8\u3002","\u6211\u7684\u6570\u636E\u5E93\u91CC\u6709\u4E00\u9996\u5730\u7403\u7684\u6B4C\uFF0C\u53EB\u300A\u6708\u4EAE\u4EE3\u8868\u6211\u7684\u5FC3\u300B\u3002\u8981\u6211\u54FC\u7ED9\u4F60\u542C\u5417\uFF1F\u2026\u2026\u7B97\u4E86\uFF0C\u6211\u8DD1\u8C03\u3002"],europa:["\u6728\u661F\u597D\u5927\u2026\u2026\u611F\u89C9\u5B83\u968F\u65F6\u4F1A\u6389\u4E0B\u6765\u3002","\u51B0\u5C42\u4E0B\u9762\u7684\u6D77\uFF0C\u53EF\u80FD\u6BD4\u5730\u7403\u6240\u6709\u7684\u6D77\u52A0\u8D77\u6765\u8FD8\u8981\u591A\u3002","\u8FD9\u91CC\u7684\u91CD\u529B\u5F88\u5C0F\uFF0C\u8DF3\u9AD8\u4E00\u70B9\u6CA1\u5173\u7CFB\u7684\u3002"],kepler:["\u4E24\u4E2A\u592A\u9633\uFF01\u5F71\u5B50\u90FD\u6709\u4E24\u4E2A\uFF01","\u90A3\u4E9B\u53D1\u5149\u7684\u6C34\u6BCD\u2026\u2026\u5B83\u4EEC\u662F\u5728\u770B\u6211\u4EEC\u5417\uFF1F","\u7A7A\u6C14\u91CC\u7684\u6C27\u6C14\u5DF2\u7ECF\u6709 14% \u4E86\u3002\u518D\u8FC7\u51E0\u5341\u5E74\uFF0C\u4E5F\u8BB8\u5C31\u80FD\u6458\u4E0B\u5934\u76D4\u4E86\u3002"]};var fn=null,Vx=new cn,_p=new Mn,Ml=new T;function Db(){let n=new pe,e=new pe;n.add(e);let t=(f,p,g,v,x,m=e,_=0,E=0,M=0)=>{let D=new le(f,p);return D.position.set(g,v,x),D.rotation.set(_,E,M),D.castShadow=!0,D.receiveShadow=!0,m.add(D),D},i=(f,p,g,v=.08)=>new Ko(f,p,g,2,v),s=(f,p,g,v,x=e)=>{let m=p.clone().sub(f),_=t(new Je(g,g,m.length(),8),v,0,0,0,x);return _.position.copy(f).add(p).multiplyScalar(.5),_.quaternion.setFromUnitVectors(new T(0,1,0),m.normalize()),_},r=(f,p,g)=>new T(f,p,g);t(i(2.5,.35,4.8,.1),y.dark,0,.85,0),t(i(2.6,.75,3.4,.18),y.white,0,1.35,.5),t(i(2.64,.14,3.44,.05),y.orange,0,1.62,.5),t(i(2.2,.5,1.2,.12),y.panel,0,1.25,-1.9,e,-.25,0,0);let o=t(new Be(1.15,32,16,0,Math.PI*2,0,Math.PI/2),y.glass,0,1.72,-.75);o.scale.set(1,.8,1.15),o.castShadow=!1;for(let f=0;f<5;f++)t(new Le(1.16,.035,6,24,Math.PI),y.metal,0,1.72,-.75,e,0,f*Math.PI/5,0).scale.set(1,.8,1.15);for(let f of[-1.15,1.15])s(r(f,1.7,.6),r(f*.9,2.75,.9),.06,y.metal),s(r(f,1.7,2.1),r(f*.9,2.75,1.9),.06,y.metal);s(r(-1.04,2.75,.9),r(1.04,2.75,.9),.06,y.metal),s(r(-1.04,2.75,1.9),r(1.04,2.75,1.9),.06,y.metal),s(r(-1.04,2.75,.9),r(-1.04,2.75,1.9),.06,y.metal),s(r(1.04,2.75,.9),r(1.04,2.75,1.9),.06,y.metal),t(i(1.8,.16,.22,.05),y.dark,0,2.82,.9);let a=[];for(let f=0;f<4;f++)t(new Ys(.07,12),y.lamp,-.6+f*.4,2.82,.78,e,0,Math.PI,0),a.push(Se(16773853,.9,e,-.6+f*.4,2.82,.75));for(let f of[-.85,.85])a.push(Se(16773853,1.2,e,f,1.2,-2.5));for(let f of[-.85,.85])t(i(.35,.18,.08,.04),y.lamp,f,1.2,-2.42);t(i(2.3,.08,1.5,.03),y.metal,0,1.78,1.6);for(let[f,p,g]of[[-.5,1.4,.6],[.4,1.7,.7],[.5,1.1,.45]])t(i(g,g*.8,g,.04),y.dark,f,1.82+g*.4,p);t(new Je(.02,.02,1.6,4),y.metal,.9,3.5,1.9);let l=Se(16728128,.6,e,.9,4.3,1.9);for(let f=0;f<3;f++)t(i(.06,.06,.5,.02),y.metal,1.33,.75+f*.28,-.2);t(i(.1,.4,1,.04),y.orange,-1.32,1.3,1);let c=[],h=new Le(.46,.2,12,28);for(let f of[-1.65,0,1.65])for(let p of[-1.5,1.5]){let g=new pe;g.position.set(p,.62,f),n.add(g);let v=t(h,y.rubber,0,0,0,g,0,Math.PI/2,0);for(let x=0;x<14;x++){let m=x/14*Math.PI*2;t(new Ge(.42,.06,.1),y.rubber,0,Math.cos(m)*.64,Math.sin(m)*.64,g,m,0,0)}t(new Je(.34,.34,.3,20),y.metal,0,0,0,g,0,0,Math.PI/2);for(let x=0;x<5;x++)t(new Ge(.32,.06,.06),y.dark,p>0?.16:-.16,0,0,g,x*Math.PI/5,0,0).scale.set(.3,1,9);t(new Je(.1,.1,.34,10),y.chrome,0,0,0,g,0,0,Math.PI/2),s(r(p*.62,.95,f),r(p*.95,.66,f),.07,y.metal,n),s(r(p*.7,1.15,f+.3),r(p*.95,.75,f),.04,y.chrome,n),c.push(g)}let u=new Lo(16773853,0,60,.5,.5,1.2);return u.position.set(0,1.2,-2.4),u.target.position.set(0,0,-20),e.add(u,u.target),{g:n,body:e,wheels:c,tip:l,lamp:u,heads:a}}function wh(n,e,t=0){if(fn)return fn;let i=Db();return d.scene.add(i.g),fn={...i,x:n,z:e,y:_e(n,e),h:t,speed:0,vy:0,lookYaw:0,pitch:-.05,spin:0,hitT:0,air:!1},fn.collider=d.colliders.add({x:n,z:e,r:2,kind:"rover"}),Ep(0),fn}function Sh(){return fn}function Wx(){return fn?{x:+fn.x.toFixed(1),z:+fn.z.toFixed(1),h:+fn.h.toFixed(2)}:null}function bh(n,e){return _e(n,e)}function Ep(n){let e=fn,t=Math.sin(e.h),i=Math.cos(e.h),s=-t,r=-i,o=i,a=-t,l=bh(e.x+s*1.8,e.z+r*1.8),c=bh(e.x-s*1.8,e.z-r*1.8),h=bh(e.x-o*1.3,e.z-a*1.3),u=bh(e.x+o*1.3,e.z+a*1.3),f=Math.atan2(l-c,3.6),p=Math.atan2(u-h,2.6);e.g.position.set(e.x,e.y,e.z),_p.set(e.air?e.g.rotation.x:f,e.h,e.air?e.g.rotation.z:-p,"YXZ"),e.air||e.g.rotation.copy(_p),e.spin+=e.speed*n/.55;for(let g of e.wheels)g.rotation.x=-e.spin;return(l+c+h+u)/4}function $x(){fn&&(d.driving=!0,fn.lookYaw=0,fn.pitch=-.08,d.colliders.remove(fn.collider),J.play("place"))}function bp(n){let e=fn;if(!e)return;d.driving=!1,J.engine(0);let t=Math.cos(e.h),i=Math.sin(e.h),s=e.x+t*3,r=e.z-i*3;d.colliders.overlaps(s,r,.5)&&(s=e.x-t*3,r=e.z+i*3),n.pos.set(s,_e(s,r),r),n.vel.set(0,0,0),n.yaw=e.h+e.lookYaw,n.pitch=e.pitch,e.speed=0,e.lamp.intensity=0,e.collider=d.colliders.add({x:e.x,z:e.z,r:2,kind:"rover"})}function Xx(n,e,t){if(!fn)return;let i=fn;if(i.tip.visible=Math.sin(performance.now()*.005)>0,!d.driving){i.y=Ep(0);return}d.locked&&(i.lookYaw=Yt.clamp(i.lookYaw-ce.dx*ce.sens,-2.4,2.4),i.pitch=Yt.clamp(i.pitch-ce.dy*ce.sens,-1,.9));let s=(ce.down("KeyW")||ce.down("ArrowUp")?1:0)-(ce.down("KeyS")||ce.down("ArrowDown")?1:0),r=(ce.down("KeyA")||ce.down("ArrowLeft")?1:0)-(ce.down("KeyD")||ce.down("ArrowRight")?1:0),o=(ce.down("ShiftLeft")?28:17)*(Ht("terrain")?1.3:1);i.air||(s>0?i.speed+=(i.speed<0?22:11)*n:s<0?i.speed-=(i.speed>0?22:7)*n:i.speed*=1-.7*n,ce.down("Space")&&(i.speed*=1-3.5*n),i.speed=Yt.clamp(i.speed,-7,o),i.speed>o&&(i.speed-=20*n),i.h+=r*n*1.5*Yt.clamp(i.speed/5,-1,1)),Ml.set(-Math.sin(i.h),0,-Math.cos(i.h)),d.stats.driven=(d.stats.driven||0)+Math.abs(i.speed)*n,i.x=Yt.clamp(i.x+Ml.x*i.speed*n,-tt+125,tt-125),i.z=Yt.clamp(i.z+Ml.z*i.speed*n,-tt+125,tt-125);for(let c of d.colliders.query(i.x,i.z)){c.kind==="flora"&&Math.abs(i.speed)>0;let h=i.x-c.x,u=i.z-c.z,f=Math.hypot(h,u),p=c.r+1.9;if(f<p&&f>.001){if(c.kind==="rock"&&c.r<1.3)continue;i.x=c.x+h/f*p,i.z=c.z+u/f*p,Math.abs(i.speed)>5&&(J.play("land"),Ee.dustPuff(new T(i.x,i.y+1,i.z),6,2)),i.speed*=-.25}}if(i.hitT-=n,Math.abs(i.speed)>6&&i.hitT<=0)for(let c of d.enemies)c.dead||Math.hypot(c.pos.x-i.x,c.pos.z-i.z)<2.6+c.scale&&(dl(c,Math.abs(i.speed)*4,"player"),i.hitT=.4,i.speed*=.7,Ee.burst(new T(c.pos.x,c.pos.y+1,c.pos.z),[1,.5,.2],20,6));let a=_e(i.x,i.z);if(i.air)i.vy-=fe.gravity*n,i.y+=i.vy*n,i.y<=a&&(i.y=a,i.air=!1,i.vy<-5&&(J.play("land"),Ee.dustPuff(new T(i.x,i.y,i.z),14,3)),i.vy=0);else{let c=i.y+i.vy*n-.5*fe.gravity*n*n;if(a<c-.25&&i.vy>1.5&&Math.abs(i.speed)>12)i.air=!0,i.vy=Math.min(i.vy,7),i.y=c;else{let h=(a-i.y)/Math.max(n,.001);i.vy=i.vy*.6+h*.4,i.y=a}}if(Ep(n),Math.abs(i.speed)>4&&!i.air&&Math.random()<.6){let c=new T(i.x-Ml.x*2.5+(Math.random()-.5)*2,i.y+.3,i.z-Ml.z*2.5);Ee.dustPuff(c,1,.5)}i.lamp.intensity=d.time.night>.3?80:0;for(let c of i.heads)c.visible=d.time.night>.3;Vx.setFromEuler(_p.set(i.pitch,i.lookYaw,0,"YXZ")),t.quaternion.copy(i.body.getWorldQuaternion(new cn)).multiply(Vx);let l=new T(0,2.15,-.7).applyQuaternion(i.g.quaternion).add(i.g.position);t.position.copy(l),t.getWorldDirection(e.fwd),e.pos.set(i.x,i.y,i.z),e.vel.set(0,0,0),e.inLife=!0,e.o2=Math.min(e.maxO2,e.o2+20*n),e.energy=Math.min(100,e.energy+10*n),e.hurtT=Math.max(0,e.hurtT-n),J.engine(Math.abs(i.speed)/28)}function qx(){return fn?Math.round(Math.abs(fn.speed)*3.6):0}var Th=[],Rp=new Ot(1,1,8,1,!0);Rp.rotateX(Math.PI);Rp.translate(0,-.5,0);var Ub=new T(0,1,0),Sp=0,wp=0,Rh=0,Tp=0,Yx=-1;function Nb(){Sp=45,Tp=0,Rh=6,zt("\u65B9\u821F \xB7 AI","\u770B\u5929\u4E0A\u2014\u2014\u6D41\u661F\u96E8\uFF01\u6709\u51E0\u9897\u4F1A\u843D\u5230\u9644\u8FD1\u3002\u9668\u77F3\u91CC\u5BCC\u542B\u949B\uFF0C\u53BB\u5760\u843D\u70B9\u770B\u770B\u3002"),d.events.emit("toast","\u2604 \u6D41\u661F\u96E8")}function Zx(n){let e=d.player.pos,t;if(n){for(let h=0;h<20;h++){let u=Math.random()*Math.PI*2,f=40+Math.random()*110,p=Yt.clamp(e.x+Math.cos(u)*f,-tt+180,tt-180),g=Yt.clamp(e.z+Math.sin(u)*f,-tt+180,tt-180);if(!d.buildings.some(v=>Math.hypot(v.x-p,v.z-g)<v.def.r+14)){t=new T(p,_e(p,g),g);break}}if(!t)return}else{let h=Math.random()*Math.PI*2,u=150+Math.random()*350;t=new T(e.x+Math.cos(h)*u,e.y+110+Math.random()*140,e.z+Math.sin(h)*u)}let i=new T((Math.random()-.5)*1.2,-.55-Math.random()*.3,(Math.random()-.5)*1.2).normalize(),s=n?520:420,r=t.clone().addScaledVector(i,-s),o=Se(n?16756848:16769216,n?18:10,d.scene);o.material.fog=!1,o.position.copy(r);let a=new le(Rp,new Ke({color:n?16751184:16767144,transparent:!0,opacity:.75,blending:dt,depthWrite:!1,fog:!1})),l=n?90:70+Math.random()*70,c=n?2.2:1.3;a.scale.set(c,l,c),a.quaternion.setFromUnitVectors(Ub,i),a.position.copy(r),d.scene.add(a),Th.push({pos:r,vel:i.multiplyScalar(n?150:220),head:o,tail:a,impact:n,target:t,life:s/(n?150:220)})}function Kx(n){d.time.night>.7&&Yx!==d.time.day&&d.time.day>=2&&d.storm<.1&&!d.ended&&(Yx=d.time.day,Math.random()<.4&&Nb()),Sp>0&&(Sp-=n,wp-=n,Rh-=n,wp<=0&&(wp=.15+Math.random()*.35,Zx(!1)),Rh<=0&&Tp<4&&(Rh=7+Math.random()*5,Tp++,Zx(!0)));for(let t=Th.length-1;t>=0;t--){let i=Th[t];i.life-=n,i.pos.addScaledVector(i.vel,n),i.head.position.copy(i.pos),i.tail.position.copy(i.pos);for(let s=0;s<3;s++)Ee.trail(i.pos.clone().addScaledVector(i.vel,-n*s/3),i.impact?[1,.6,.3]:[1,.85,.6],i.impact?1.2:.7);i.life<=0&&(d.scene.remove(i.head),d.scene.remove(i.tail),i.tail.material.dispose(),Th.splice(t,1),i.impact&&kb(i.target))}}function kb(n){let e=n.clone();e.y+=1.5,Ee.burst(e,[1,.55,.2],120,22),Ee.ring(n,2,90),Ee.dustPuff(e,40,8),J.play("rumble"),J.play("kill");let t=n.distanceTo(d.player.pos);if(t<80&&(d.player.landDip=Math.max(d.player.landDip,.4*(1-t/80))),!d.colliders.overlaps(n.x,n.z,2.5)){let i=Wo("titanium",n.x,n.z,10+Math.floor(Math.random()*8));i.meteor=!0}d.events.emit("toast",`\u2604 \u9668\u77F3\u5760\u843D\u5728 ${Math.round(t)} \u7C73\u5916`)}var He=n=>document.getElementById(n);d.debug=/[?&]debug/.test(location.search);var Ps=He("c"),Cn=new Po({canvas:Ps,antialias:!0,powerPreference:"high-performance"});Cn.setPixelRatio(Math.min(window.devicePixelRatio,1.5));Cn.setSize(window.innerWidth,window.innerHeight);Cn.shadowMap.enabled=!0;Cn.shadowMap.type=zd;Cn.toneMapping=Lr;Cn.toneMappingExposure=1;var Zr="high";try{Zr=localStorage.getItem("starport-quality")||((navigator.hardwareConcurrency||8)<=4?"mid":"high")}catch{}function ry(n,e){Zr=n,Cn.setPixelRatio(n==="high"?Math.min(window.devicePixelRatio,1.5):n==="mid"?1:.75),Cn.setSize(window.innerWidth,window.innerHeight);let t=n!=="low";Cn.shadowMap.enabled!==t&&(Cn.shadowMap.enabled=t,e&&d.scene.traverse(i=>{i.material&&[].concat(i.material).forEach(s=>{s.needsUpdate=!0})})),di&&(di.setPixelRatio(Cn.getPixelRatio()),di.setSize(window.innerWidth,window.innerHeight))}var di=null,Ih=null;function Hb(){di=new Dc(Cn),di.addPass(new Uc(Is,Ct)),Ih=new Ho(new ne(window.innerWidth,window.innerHeight),.55,.5,.88),di.addPass(Ih),di.addPass(new Nc),Lh=new ko({uniforms:{tDiffuse:{value:null},uT:{value:0},uNight:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uT, uNight; varying vec2 vUv;
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
      }`}),di.addPass(Lh)}var Lh=null;function Ap(){Zr==="high"&&di?(Ih.strength=.3+d.time.night*.22,Ih.threshold=.9,Lh.uniforms.uT.value=performance.now()*.001%100,Lh.uniforms.uNight.value=d.time.night,di.render()):Cn.render(Is,Ct)}ry(Zr,!1);var Is=new Fi,Ct=new ln(72,window.innerWidth/window.innerHeight,.1,6e3);Hb();d.scene=Is;d.camera=Ct;d.renderer=Cn;d.colliders=new kc(16);window.addEventListener("resize",()=>{Ct.aspect=window.innerWidth/window.innerHeight,Ct.updateProjectionMatrix(),Cn.setSize(window.innerWidth,window.innerHeight),di&&di.setSize(window.innerWidth,window.innerHeight)});d.hiShadows=Zr==="high";Qm(Is);zm(Is);eg(Is);var xa=Fg();xa.group.position.set(gt.x,_e(gt.x,gt.z)+.1,gt.z);xa.group.rotation.y=.6;Is.add(xa.group);d.colliders.add({x:gt.x,z:gt.z,r:3.4,kind:"lander"});var We=new hh(Ct);d.player=We;ix(Ct);jg(Ps);Tx(Bm(350));Ef(Is);d.requestLock=()=>{if(d.debug){d.locked=!0;return}try{let n=Ps.requestPointerLock();n&&n.catch&&n.catch(()=>{})}catch{}};document.addEventListener("pointerlockchange",()=>{d.locked=document.pointerLockElement===Ps,!d.locked&&d.started&&!d.menuOpen&&!We.dead&&!d.endingShown&&!d.cine&&As("pause")});Ps.addEventListener("click",()=>{J.init(),d.started&&!d.locked&&!d.menuOpen&&!We.dead&&d.requestLock()});function Ls(n){if(!d.started)return;let e={v:1,res:d.res,upgrades:d.upgrades,stats:d.stats,chapter:d.chapter,goalDone:d.goalDone,terraform:d.terraform,ended:d.ended,nights:d.nightsSurvived||0,city:d.cityLevel,pop:d.popTotal||0,launched:!!d.launched,rover:Wx(),relics:d.relicsFound||[],plazaSeen:!!d.plazaSeen,mode:d.mode,diff:d.diffKey,tech:d.tech||{},rp:d.rp||0,requests:d.requests||[],time:{t:d.time.t,day:d.time.day},player:{x:We.pos.x,z:We.pos.z,yaw:We.yaw,o2:We.o2,hp:We.health},buildings:Hg(),nodes:ag(),colonists:cx(),storm:Wg()};try{localStorage.setItem(Fc,JSON.stringify(e)),n||Jt("\u5DF2\u4FDD\u5B58")}catch{n||Jt("\u4FDD\u5B58\u5931\u8D25")}}function Fb(){try{return JSON.parse(localStorage.getItem(Fc))}catch{return null}}function Ob(n){Object.assign(d.res,n.res),d.upgrades=n.upgrades||{},lg(n.nodes);for(let[e,t,i,s,r,o]of n.buildings)An[e]&&nh(e,t,i,s,r,!1,o||1);d.stats=n.stats,d.goalDone=n.goalDone||{},d.terraform=n.terraform||0,d.ended=!!n.ended,d.nightsSurvived=n.nights||0,Xg(d.terraform>=1),d.time.t=n.time.t,d.time.day=n.time.day,We.pos.set(n.player.x,_e(n.player.x,n.player.z),n.player.z),We.yaw=n.player.yaw,We.o2=n.player.o2,We.health=Math.max(30,n.player.hp),hx(n.colonists||[]),n.rover&&wh(n.rover.x,n.rover.z,n.rover.h),d.relicsFound=n.relics||[],d.plazaSeen=!!n.plazaSeen,d.mode=n.mode||"story",d.diffKey=n.diff||"normal",d.tech=n.tech||{},d.rp=n.rp||0,d.requests=n.requests||[],d.cityLevel=n.city||0,d.popTotal=n.pop??(n.colonists||[]).length,d.launched=!!n.launched,Ef(Is),$g(n.storm),ul(n.chapter,!0),Yi(),d.terraform>0&&df(oy(),d.terraform)}var oy=()=>d.buildings.filter(n=>n.type==="terraformer").map(n=>({x:n.x,z:n.z})),zb=fe.intro;document.querySelector(".logo span").textContent=fe.title;document.title="\u661F\u6E2F\uFF1A"+fe.title;dn.visited?.length&&(He("touch-note").innerHTML="\u5DF2\u5F00\u62D3\uFF1A"+dn.visited.map(n=>`${Nn[n.id].name}\uFF08${n.pop} \u4EBA\uFF09`).join(" \xB7 "));He("story").innerHTML=zb.map((n,e)=>`<p style="animation-delay:${.4+e*1.1}s">${n}</p>`).join("");var Qn=Fb();Qn&&(He("btn-continue").classList.remove("hidden"),He("cont-info").textContent=`${Qn.mode==="free"?"\u81EA\u7531":"\u5267\u60C5"} \xB7 ${fe.name} \xB7 ${hi[Qn.chapter]?.title||""} \xB7 \u7B2C ${Qn.time.day} \u65E5 \xB7 ${Qn.pop??Qn.colonists?.length??0} \u4F4D\u5C45\u6C11`);matchMedia("(pointer: coarse)").matches&&(He("touch-note").innerHTML+="\u672C\u6E38\u620F\u9700\u8981\u952E\u76D8\u548C\u9F20\u6807\uFF0C\u8BF7\u5728\u7535\u8111\u4E0A\u6E38\u73A9\u3002");function Bb(n){if(d.debug){setTimeout(n,1200);return}let e=He("cine"),t=fe.intro;d.cine=!0,e.classList.remove("hidden","out"),He("cine-lines").innerHTML=t.map((o,a)=>`<p style="animation-delay:${.6+a*2.1}s">${o}</p>`).join("");let i=!1,s=()=>{i||(i=!0,e.classList.add("out"),d.cine=!1,window.removeEventListener("keydown",r),window.removeEventListener("mousedown",s),setTimeout(()=>e.classList.add("hidden"),1500),setTimeout(n,900))},r=o=>{(o.code==="Space"||o.code==="Escape"||o.code==="Enter")&&s()};window.addEventListener("keydown",r),window.addEventListener("mousedown",s),setTimeout(s,1500+t.length*2100+1800)}function ya(n){if(J.init(),n&&Qn)Ob(Qn);else{if(localStorage.removeItem(Fc),sg(),dn.carry&&it!=="mars"){Object.assign(d.upgrades,dn.carry.upgrades||{});for(let e in dn.carry.res)d.res[e]+=dn.carry.res[e];d.upgrades.rover&&wh(gt.x+10,gt.z+4,.5),setTimeout(()=>Jt("\u968F\u8230\u7269\u8D44\u5DF2\u5378\u8F7D\uFF0C\u6240\u6709\u88C5\u5907\u5DF2\u540C\u6B65"),4e3)}d.time.t=.29,d.mode=d.mode||"story",d.diffKey=d.diffKey||"normal",ul(0,!0),Gn()?ty(()=>{Xr({k:"FREE MODE",title:fe.name,sub:`\u81EA\u7531\u5F00\u62D3 \xB7 ${qo[d.diffKey].name}`}),zt("\u65B9\u821F \xB7 AI","\u81EA\u7531\u6A21\u5F0F\u5DF2\u542F\u52A8\u3002\u6CA1\u6709\u4EFB\u52A1\u6E05\u5355\uFF0C\u8FD9\u7247\u571F\u5730\u5B8C\u5168\u5C5E\u4E8E\u4F60\u3002\u5EFA\u597D\u7B2C\u4E00\u5EA7\u8BBE\u65BD\u540E\uFF0C\u5C45\u6C11\u548C\u6307\u6325\u4E2D\u5FC3\u4F1A\u9646\u7EED\u63D0\u51FA\u59D4\u6258\u3002"),zt("\u65B9\u821F \xB7 AI","\u63D0\u793A\uFF1AB \u5EFA\u9020\uFF0CT \u79D1\u7814\uFF0CTab \u6B96\u6C11\u5730\u6863\u6848\u3002\u795D\u4F60\u597D\u8FD0\u3002")}):Bb(()=>ty(()=>{Xr(hi[0]),hi[0].radio.forEach(e=>zt(e[0],e[1]))}))}fx(),Bx(),Zr!=="low"&&qm(),He("intro").classList.add("hidden"),document.body.classList.add("playing"),d.started=!0,d.requestLock()}var jn={mode:"story",diff:"normal",planet:"mars"};function Up(){let n=(t,i,s,r,o)=>`<button class="opt ${o?"on":""}" data-g="${t}" data-k="${i}"><b>${s}</b><span>${r}</span></button>`,e=jn.mode==="free"?`<h3>\u661F\u7403</h3><div class="opts">${Object.values(Nn).map(t=>n("planet",t.id,t.name,t.title+" \xB7 "+t.place,jn.planet===t.id)).join("")}</div>`:'<p class="sm">\u5267\u60C5\u4ECE\u706B\u661F\u5F00\u59CB\u3002\u5B8C\u6210\u6BCF\u9897\u661F\u7403\u7684\u6545\u4E8B\u540E\uFF0C\u4E58\u6B96\u6C11\u8230\u524D\u5F80\u4E0B\u4E00\u9897\u3002</p>';He("intro-pane").innerHTML=`<h3>\u6A21\u5F0F</h3><div class="opts">${Object.entries(xg).map(([t,i])=>n("mode",t,i.name,i.desc,jn.mode===t)).join("")}</div>
    <h3>\u96BE\u5EA6</h3><div class="opts three">${Object.entries(qo).map(([t,i])=>n("diff",t,i.name,i.desc,jn.diff===t)).join("")}</div>
    ${e}
    <button class="launch" id="btn-launch">\u51FA\u53D1</button>`,He("intro-pane").dataset.k="setup",He("intro-pane").classList.remove("hidden"),He("intro-pane").querySelectorAll(".opt").forEach(t=>t.addEventListener("click",()=>{jn[t.dataset.g]=t.dataset.k,t.dataset.g==="mode"&&t.dataset.k==="story"&&(jn.planet="mars"),J.play("tick"),Up()})),He("btn-launch").addEventListener("click",Gb)}function Gb(){let n=jn.mode==="story"?"mars":jn.planet;if(jn.mode==="story"){if((dn.visited?.length||Qn)&&!confirm("\u5267\u60C5\u6A21\u5F0F\u4F1A\u4ECE\u706B\u661F\u91CD\u65B0\u5F00\u59CB\uFF0C\u5E76\u6E05\u9664\u6240\u6709\u661F\u7403\u7684\u8FDB\u5EA6\u3002\u786E\u5B9A\u5417\uFF1F"))return;lf()}else{if(Dh(n)&&!confirm(`\u5C06\u8986\u76D6 ${Nn[n].name} \u7684\u73B0\u6709\u5B58\u6863\uFF0C\u786E\u5B9A\u5417\uFF1F`))return;try{localStorage.removeItem(n==="mars"?"starport-newhome-v1":"starport-planet-"+n)}catch{}let t=er();delete t.carry,t.planet=n,Xa(t)}if(n===it){d.mode=jn.mode,d.diffKey=jn.diff,ya(!1);return}try{localStorage.setItem("starport-newgame",JSON.stringify({mode:jn.mode,diff:jn.diff}))}catch{}let e=er();e.planet=n,Xa(e),location.href=location.pathname+(d.debug?"?debug":"")}He("btn-new").addEventListener("click",()=>{if(J.init(),it!=="mars"&&!Qn&&dn.visited?.length&&!dn.freshFree){d.mode=dn.mode||"story",d.diffKey=dn.diff||"normal",ya(!1);return}Up()});try{let n=JSON.parse(localStorage.getItem("starport-newgame"));n&&(localStorage.removeItem("starport-newgame"),d.mode=n.mode,d.diffKey=n.diff,setTimeout(()=>ya(!1),60))}catch{}He("btn-continue").addEventListener("click",()=>ya(!0));He("tele-planet").textContent=`${fe.name} \xB7 ${fe.place}`;var Vb=`<h3>\u64CD\u4F5C</h3><div class="keys">
  <div><kbd>W A S D</kbd><span>\u79FB\u52A8</span></div><div><kbd>\u9F20\u6807</kbd><span>\u73AF\u89C6</span></div>
  <div><kbd>Shift</kbd><span>\u51B2\u523A</span></div><div><kbd>\u7A7A\u683C</kbd><span>\u8DF3\u8DC3 / \u55B7\u6C14\u80CC\u5305</span></div>
  <div><kbd>\u5DE6\u952E</kbd><span>\u91C7\u77FF \xB7 \u5C04\u51FB \xB7 \u653E\u7F6E\u5EFA\u7B51</span></div><div><kbd>\u53F3\u952E</kbd><span>\u53D6\u6D88\u5EFA\u9020</span></div>
  <div><kbd>1</kbd><kbd>2</kbd><span>\u5207\u6362\u5DE5\u5177</span></div><div><kbd>B</kbd><span>\u5EFA\u9020\u84DD\u56FE</span></div>
  <div><kbd>E</kbd><span>\u4E92\u52A8 \xB7 \u4EA4\u8C08 \xB7 \u4E0A\u8F66</span></div><div><kbd>U</kbd><span>\u5347\u7EA7\u6CE8\u89C6\u7684\u5EFA\u7B51</span></div><div><kbd>T</kbd><span>\u79D1\u7814</span></div>
  <div><kbd>Q</kbd><span>\u5C0F\u661F\u626B\u63CF\u77FF\u85CF</span></div><div><kbd>F</kbd><span>\u624B\u7535\u7B52</span></div><div><kbd>Tab</kbd><span>\u6B96\u6C11\u5730\u6863\u6848</span></div>
  <div><kbd>P</kbd><span>\u62CD\u7167\u6A21\u5F0F</span></div><div><kbd>Esc</kbd><span>\u6682\u505C</span></div></div>
  <h3>\u751F\u5B58</h3><p>\u6C27\u6C14\u4F1A\u6301\u7EED\u6D88\u8017\u3002\u7740\u9646\u8231\u3001\u5236\u6C27\u7AD9\u548C\u5C45\u4F4F\u7A79\u9876\u9644\u8FD1\u4F1A\u81EA\u52A8\u8865\u6C27\u3002\u5EFA\u597D\u4F4F\u623F\u3001\u6C27\u6C14\u3001\u98DF\u7269\u3001\u6C34\u548C\u7740\u9646\u573A\uFF0C\u79FB\u6C11\u98DE\u8239\u5C31\u4F1A\u5230\u6765\u3002\u591C\u91CC\u8981\u63D0\u9632\u9508\u8680\u86DB\u3002</p>`,ay=n=>{let e=He("intro-pane");if(!e.classList.contains("hidden")&&e.dataset.k===n.slice(0,20)){e.classList.add("hidden");return}e.dataset.k=n.slice(0,20),e.innerHTML=n,e.classList.remove("hidden"),J.play("tick")};He("btn-t-help").addEventListener("click",()=>ay(Vb));He("btn-t-achv").addEventListener("click",()=>ay(mp()));it!=="mars"&&!Qn&&(He("btn-new").textContent=`\u767B\u9646 ${fe.name}`);it!=="mars"&&!Qn&&dn.visited?.length&&He("btn-setup").classList.remove("hidden");He("btn-setup").addEventListener("click",()=>{J.init(),Up()});if(dn.autoResume&&Qn){let n=er();delete n.autoResume,Xa(n),setTimeout(()=>{ya(!0),Jt(`\u6B22\u8FCE\u56DE\u6765 \xB7 ${fe.name}`)},50)}He("btn-save").addEventListener("click",()=>Ls(!1));He("btn-archive").addEventListener("click",()=>lp(up()));He("btn-achv").addEventListener("click",()=>lp(mp()));He("btn-restart").addEventListener("click",()=>{confirm("\u5C06\u5220\u9664\u6240\u6709\u661F\u7403\u7684\u8FDB\u5EA6\uFF0C\u4ECE\u706B\u661F\u91CD\u65B0\u5F00\u59CB\u3002\u786E\u5B9A\u5417\uFF1F")&&(lf(),d.started=!1,location.href=location.pathname+(d.debug?"?debug":""))});He("vol").addEventListener("input",n=>J.setVolume(+n.target.value));He("quality").value=Zr;d.baseFov=72;try{let n=+localStorage.getItem("starport-fov");n>=60&&n<=100&&(d.baseFov=n,Ct.fov=n,Ct.updateProjectionMatrix(),He("fov").value=n)}catch{}He("fov").addEventListener("input",n=>{d.baseFov=+n.target.value,Ct.fov=+n.target.value,Ct.updateProjectionMatrix();try{localStorage.setItem("starport-fov",n.target.value)}catch{}});He("quality").addEventListener("change",n=>{ry(n.target.value,!0);try{localStorage.setItem("starport-quality",n.target.value)}catch{}});He("sens").addEventListener("input",n=>{ce.sens=+n.target.value});He("btn-respawn").addEventListener("click",()=>{d.driving&&bp(We),We.respawn(),He("death").classList.add("hidden"),d.requestLock()});He("btn-endcont").addEventListener("click",()=>{He("ending").classList.add("hidden"),d.endingShown=!1,d.requestLock()});d.events.on("chapter",n=>Xr(n));ua.unlocked=n=>Zi(n).ok;ua.relicLeft=()=>Ki().found<Ki().total;ua.relicFound=()=>Ki().found;d.events.on("request",n=>{Jt(`\u65B0\u59D4\u6258\uFF1A${n.text}`,"radio"),zt(`${n.giver} \xB7 \u59D4\u6258`,n.line)});d.events.on("requestDone",n=>{Jt(`\u59D4\u6258\u5B8C\u6210\uFF1A${n.text}`,"check","good"),zt(n.giver,["\u8C22\u8C22\u4F60\uFF01\u8FD9\u5E2E\u4E86\u5927\u5FD9\u3002","\u592A\u597D\u4E86\uFF0C\u5927\u5BB6\u90FD\u4F1A\u8BB0\u5F97\u7684\u3002","\u8F9B\u82E6\u4E86\uFF01\u8FD9\u662F\u4E00\u70B9\u5FC3\u610F\u3002"][Math.floor(Math.random()*3)])});d.events.on("researched",n=>{(n==="swarm"||n==="alloy")&&Yi()});d.events.on("crafted",n=>{if(n!=="rover")return;let e=d.buildings.find(i=>i.type==="fabricator"),t=e||We.pos;for(let i=0;i<12;i++){let s=i*.9,r=(e?e.def.r:0)+5+i,o=t.x+Math.cos(s)*r,a=t.z+Math.sin(s)*r;if(!d.colliders.overlaps(o,a,2.6)){wh(o,a,-s);break}}zt("\u65B9\u821F \xB7 AI","\u6F2B\u6E38\u8F66\u5DF2\u51FA\u5382\u3002\u8F66\u8231\u52A0\u538B\uFF0C\u53EF\u4EE5\u5728\u8F66\u91CC\u8865\u6C27\u3002\u5C0F\u5FC3\u522B\u5F00\u4E0B\u60AC\u5D16\u3002")});d.events.on("cityLevel",n=>{Xr({k:`COLONY LEVEL ${["I","II","III","IV","V","VI"][d.cityLevel]}`,title:n.name,sub:`\u57CE\u5E02\u5347\u7EA7 \xB7 \u9886\u5730\u6269\u5C55\u81F3 ${n.r} \u7C73`});let e={1:["\u65B9\u821F \xB7 AI","\u6B96\u6C11\u5730\u5347\u7EA7\u4E3A\u5B9A\u5C45\u70B9\u3002\u9886\u5730\u6269\u5927\u4E86\uFF0C\u66F4\u8FDC\u7684\u571F\u5730\u53EF\u4EE5\u5EFA\u9020\u4E86\u3002"],2:["\u65B9\u821F \xB7 AI","\u5C0F\u9547\u89C4\u6A21\u8FBE\u6210\u3002\u516C\u5BD3\u5854\u4E0E\u5782\u76F4\u519C\u573A\u7684\u8BBE\u8BA1\u56FE\u5DF2\u89E3\u9501\u3002"],3:["\u65B9\u821F \xB7 AI","\u8FD9\u91CC\u5DF2\u7ECF\u662F\u4E00\u5EA7\u57CE\u5E02\u4E86\u3002\u751F\u6001\u4E2D\u67A2\u7684\u8BBE\u8BA1\u56FE\u5DF2\u89E3\u9501\u3002"],4:["\u65B9\u821F \xB7 AI","\u5927\u90FD\u4F1A\u3002\u591C\u91CC\uFF0C\u4ECE\u8F68\u9053\u4E0A\u80FD\u770B\u89C1\u4F60\u4EEC\u7684\u706F\u5149\u3002"],5:["\u65B9\u821F \xB7 AI","\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C\u661F\u6E2F\u300D\u2014\u2014\u4EBA\u7C7B\u53EF\u4EE5\u4ECE\u8FD9\u91CC\u98DE\u5411\u4E0B\u4E00\u9897\u661F\u7403\u4E86\u3002"]}[d.cityLevel];e&&zt(e[0],e[1]),Ls(!0)});d.events.on("openBuild",()=>As("build"));d.events.on("death",n=>{J.laser(!1),setTimeout(()=>{if(d.endingShown){We.respawn();return}He("death-why").textContent=n,He("death").classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock()},1500)});d.events.on("tide",n=>{J.play("night"),Xr({k:"CRYSTAL TIDE",title:"\u6676\u6F6E\u4E4B\u591C",sub:`\u96F7\u8FBE\u63A2\u6D4B\u5230\u7EA6 ${n} \u4E2A\u4FE1\u53F7 \xB7 \u5B88\u4F4F\u6B96\u6C11\u5730`}),zt("\u65B9\u821F \xB7 AI","\u8B66\u544A\uFF1A\u6676\u6F6E\u6B63\u5728\u903C\u8FD1\u3002\u6570\u91CF\u662F\u5E73\u65F6\u7684\u4E24\u500D\u2026\u2026\u5730\u9707\u4EEA\u8FD8\u8BB0\u5F55\u5230\u4E00\u4E2A\u5DE8\u5927\u7684\u4FE1\u53F7\uFF0C\u5B83\u6B63\u5728\u5411\u5730\u8868\u79FB\u52A8\u3002")});d.events.on("bossSpawn",()=>{Jt("\u6676\u6BCD\u7834\u571F\u800C\u51FA","boss","warn"),zt("\u65B9\u821F \xB7 AI","\u662F\u6676\u6BCD\uFF01\u4F53\u957F\u8D85\u8FC7\u5341\u7C73\u3002\u5B83\u7684\u51B2\u51FB\u6CE2\u80FD\u9707\u788E\u5EFA\u7B51\u2014\u2014\u7528\u6B65\u67AA\u548C\u70AE\u5854\u96C6\u4E2D\u706B\u529B\uFF01")});d.events.on("bossDown",()=>{Jt("\u6676\u6BCD\u9668\u843D","boss","good"),zt("\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u2026\u2026\u4F60\u4EEC\u505A\u5230\u4E86\u3002\u6574\u4E2A\u6307\u6325\u4E2D\u5FC3\u90FD\u5728\u6B22\u547C\u3002\u5B83\u7684\u6838\u5FC3\u91CC\u6709\u5927\u91CF\u7684\u949B\uFF0C\u62FF\u53BB\u5EFA\u8BBE\u5427\u3002")});var Jx=!0;d.events.on("nightfall",n=>{J.play("night"),Jt(`\u591C\u5E55\u964D\u4E34 \xB7 \u7EA6 ${n} \u4E2A\u79FB\u52A8\u4FE1\u53F7\u63A5\u8FD1`,"moon","warn"),Jx&&(Jx=!1,zt("\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5B83\u4EEC\u6765\u4E86\u3002\u9508\u8680\u86DB\u4F1A\u653B\u51FB\u5EFA\u7B51\u548C\u4EBA\u3002\u7528\u6FC0\u5149\u6216\u6B65\u67AA\u51FB\u9000\u5B83\u4EEC\u2014\u2014\u5B83\u4EEC\u7684\u6676\u4F53\u6B8B\u9AB8\u91CC\u542B\u6709\u949B\u3002"))});d.events.on("broken",n=>Jt(`${n.def.name} \u53D7\u635F\u505C\u673A\uFF0C\u767D\u5929\u4F1A\u81EA\u52A8\u4FEE\u590D`,"warn","warn"));var jx=!0;d.events.on("shuttleIncoming",n=>Jt(`\u79FB\u6C11\u98DE\u8239\u6B63\u5728\u964D\u843D \xB7 ${n} \u4EBA`,"ship"));d.events.on("colonistsArrived",n=>{n.length&&(Jt(`\u6B22\u8FCE\u56DE\u5BB6\uFF1A${n.map(e=>e.name).join("\u3001")}`),jx&&d.stats.arrived<=4&&(jx=!1,zt(n[0].name,"\u4F60\u597D\u2026\u2026\u8FD9\u5C31\u662F\u706B\u661F\uFF1F\u6BD4\u7167\u7247\u4E0A\u8FD8\u8981\u7EA2\u3002\u8C22\u8C22\u4F60\uFF0C\u4E3A\u6211\u4EEC\u70B9\u4EAE\u4E86\u8FD9\u91CC\u7684\u706F\u3002")))});var Wb={habitat:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5C45\u4F4F\u7A79\u9876\u52A0\u538B\u5B8C\u6210\u3002\u5BA4\u5185\u6E29\u5EA6 21 \u6444\u6C0F\u5EA6\uFF0C\u6E7F\u5EA6 45%\u3002\u8FD9\u662F\u706B\u661F\u4E0A\u7B2C\u4E00\u4E2A\u53EF\u4EE5\u8131\u4E0B\u5934\u76D4\u7684\u5730\u65B9\u3002"],greenhouse:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u6E29\u5BA4\u542F\u52A8\u3002\u7B2C\u4E00\u6279\u79CD\u5B50\u5DF2\u7ECF\u64AD\u4E0B\uFF1A\u571F\u8C46\u3001\u5C0F\u9EA6\u3001\u756A\u8304\u2026\u2026\u548C\u4E00\u682A\u5411\u65E5\u8475\u3002"],beacon:["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u6536\u5230\u7740\u9646\u573A\u7684\u4FE1\u6807\u4FE1\u53F7\u4E86\uFF01\u53EA\u8981\u6B96\u6C11\u5730\u80FD\u517B\u6D3B\u4ED6\u4EEC\uFF0C\u79FB\u6C11\u98DE\u8239\u5C31\u4F1A\u51FA\u53D1\u3002"],reactor:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u805A\u53D8\u53CD\u5E94\u5806\u70B9\u706B\u6210\u529F\u3002\u8F93\u51FA\u7A33\u5B9A\u3002"],terraformer:["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5927\u6C14\u6539\u9020\u5854\u2026\u2026\u542F\u52A8\u4E86\u3002\u6211\u4EEC\u89C1\u8BC1\u7684\uFF0C\u662F\u4E00\u9897\u661F\u7403\u7684\u82CF\u9192\u3002"],apartment:["\u65B9\u821F \xB7 AI","\u7B2C\u4E00\u5EA7\u516C\u5BD3\u5854\u843D\u6210\u3002\u57CE\u5E02\u5F00\u59CB\u5411\u5929\u7A7A\u751F\u957F\u3002"],launch:["\u65B9\u821F \xB7 AI","\u661F\u9645\u53D1\u5C04\u53F0\u5B8C\u5DE5\u3002\u6B96\u6C11\u8230\u5DF2\u52A0\u6CE8\u5B8C\u6BD5\uFF0C\u968F\u65F6\u53EF\u4EE5\u51FA\u53D1\u3002"],monument:["\u65B9\u821F \xB7 AI","\u7EAA\u5FF5\u7891\u4E0A\u523B\u7740\u4E00\u884C\u5B57\uFF1A\u300C\u81F4\u7B2C\u4E00\u4E2A\u51FA\u53D1\u7684\u4EBA\u300D\u3002"],turret:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u9632\u5FA1\u70AE\u5854\u4E0A\u7EBF\u3002\u5B83\u4EEC\u9700\u8981\u7535\u529B\u624D\u80FD\u8FD0\u8F6C\u3002"],fabricator:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5236\u9020\u5DE5\u574A\u5C31\u7EEA\u3002\u9760\u8FD1\u540E\u6309 E \u6253\u5F00\u3002"]};d.events.on("built",n=>{let e=Wb[n.type];e&&d.stats.built[n.type]===1&&zt(e[0],e[1]),n.type==="monument"&&d.stats.built.monument===1&&setTimeout(jb,6e3),Ls(!0)});d.events.on("ending",()=>{zt("Nadia Volkova","\u5927\u5BB6\u5FEB\u51FA\u6765\u770B\uFF01\u5929\u7A7A\u2026\u2026\u5929\u7A7A\u53D8\u84DD\u4E86\uFF01"),zt("\u8D75\u5C0F\u96E8","\u4E0B\u96E8\u4E86\uFF01\u8FD9\u662F\u706B\u661F\u4E0A\u7684\u7B2C\u4E00\u573A\u96E8\uFF01"),setTimeout($b,14e3)});function $b(){d.ended=!0,d.endingShown=!0,We.dead&&We.respawn(),He("death").classList.add("hidden"),document.pointerLockElement&&document.exitPointerLock();let n=d.stats,e=["\u4ECE\u7740\u9646\u8231\u7684\u8231\u95E8\u7B2C\u4E00\u6B21\u6253\u5F00\uFF0C\u5230\u4ECA\u5929\uFF0C\u8FC7\u53BB\u4E86 "+d.time.day+" \u4E2A\u706B\u661F\u65E5\u3002","\u66FE\u7ECF\u53EA\u6709\u98CE\u58F0\u7684\u5E73\u539F\u4E0A\uFF0C\u5982\u4ECA\u4F4F\u7740 "+d.colony.pop+" \u4E2A\u4EBA\u3002","\u4ED6\u4EEC\u6765\u81EA\u5730\u7403\u4E0A\u4E0D\u540C\u7684\u56FD\u5BB6\uFF0C\u8BF4\u7740\u4E0D\u540C\u7684\u8BED\u8A00\u3002","\u4F46\u4ECE\u4ECA\u5929\u8D77\uFF0C\u4ED6\u4EEC\u6709\u4E86\u540C\u4E00\u4E2A\u5730\u5740\u3002",'<div class="big">\u706B\u661F \xB7 \u65B0\u5BB6\u56ED</div>',"\u5B69\u5B50\u4EEC\u7B2C\u4E00\u6B21\u5728\u706B\u661F\u4E0A\uFF0C\u770B\u89C1\u4E86\u84DD\u8272\u7684\u5929\u7A7A\u3002",`<span class="stats">\u91C7\u96C6\u8D44\u6E90 ${n.mined.iron+n.mined.silicon+n.mined.ice+n.mined.titanium} \xB7 \u5EFA\u9020\u8BBE\u65BD ${d.buildings.length} \xB7 \u51FB\u9000\u9508\u8680\u86DB ${n.kills} \xB7 \u8FCE\u63A5\u79FB\u6C11 ${n.arrived}</span>`];He("ending-text").innerHTML=e.map((t,i)=>`<p style="animation-delay:${i*1.6}s">${t}</p>`).join(""),He("ending").classList.remove("hidden"),J.play("chapter"),Ls(!0)}window.addEventListener("keydown",n=>{if(d.started){if(Cx(n),n.code==="Tab"&&!d.endingShown&&!We.dead){d.menuOpen==="archive"?Vn(!0):d.menuOpen||As("archive");return}if(n.code==="KeyT"&&!d.endingShown&&!We.dead){d.menuOpen==="research"?Vn(!0):d.menuOpen||As("research");return}if(d.menuOpen==="research"&&n.code==="Escape"){Vn(!0);return}if(d.menuOpen==="trade"&&(n.code==="Escape"||n.code==="KeyE")){Vn(!0);return}if(n.code==="KeyP"&&!d.menuOpen){d.photo=!d.photo,d.usedPhoto=!0,document.body.classList.toggle("photo",d.photo),ey(d.photo?Lp:0),J.play("tick");return}if(d.photo&&!d.menuOpen){let e=["Digit1","Digit2","Digit3","Digit4"].indexOf(n.code);if(e>=0){Lp=e,ey(e),J.play("tick"),n.stopImmediatePropagation();return}if(n.code==="Enter"){d.snap=!0;return}}if(d.menuOpen==="archive"&&n.code==="Escape"){Vn(!0);return}d.menuOpen==="build"&&(n.code==="Escape"||n.code==="KeyB")?(Vn(!0),d.locked||void 0):d.menuOpen==="craft"&&(n.code==="Escape"||n.code==="KeyE")?Vn(!0):d.menuOpen==="starmap"&&n.code==="Escape"&&Vn(!0)}});var pa=0,Cp=30,Pp=0,Qx=0,ga={};try{ga=JSON.parse(localStorage.getItem("starport-hints"))||{}}catch{}var ma=null,Ip=0,Ch=0,Xb=[{id:"move",text:"<kbd>W A S D</kbd>\u79FB\u52A8\u3000<kbd>Shift</kbd>\u51B2\u523A<br><kbd>\u9F20\u6807</kbd>\u73AF\u89C6\u3000<kbd>\u7A7A\u683C</kbd>\u8DF3\u8DC3",when:()=>Ch>.5&&Ch<40},{id:"mine",text:"\u5BF9\u51C6\u53D1\u5149\u7684\u77FF\u77F3\uFF0C<kbd>\u6309\u4F4F\u5DE6\u952E</kbd> \u7528\u91C7\u77FF\u6FC0\u5149\u91C7\u96C6",when:()=>Ch>6&&d.stats.mined.iron+d.stats.mined.silicon===0},{id:"build",text:"\u8D44\u6E90\u591F\u4E86\uFF01\u6309 <kbd>B</kbd> \u6253\u5F00\u5EFA\u9020\u83DC\u5355",when:()=>d.buildings.length===0&&d.res.iron>=8&&d.res.silicon>=6},{id:"o2",text:"\u6C27\u6C14\u5728\u6301\u7EED\u6D88\u8017\u3002\u56DE\u5230\u7740\u9646\u8231\u6216\u5236\u6C27\u7AD9\u9644\u8FD1\u4F1A\u81EA\u52A8\u8865\u6C27",when:()=>!We.inLife&&We.o2<We.maxO2*.5},{id:"night",text:"\u5929\u9ED1\u4E86\uFF0C\u6309 <kbd>F</kbd> \u6253\u5F00\u624B\u7535\u7B52",when:()=>d.time.night>.6&&!We.flashlight},{id:"craft",text:"\u9760\u8FD1\u5236\u9020\u5DE5\u574A\u6309 <kbd>E</kbd> \u5236\u9020\u6B66\u5668\u548C\u88C5\u5907\u2014\u2014\u8BD5\u8BD5\u52A0\u538B\u6F2B\u6E38\u8F66",when:()=>d.buildings.some(n=>n.type==="fabricator")&&!d.upgrades.rifle},{id:"drive",text:"\u6F2B\u6E38\u8F66\u5C31\u5728\u9644\u8FD1\uFF0C\u8D70\u8FC7\u53BB\u6309 <kbd>E</kbd> \u4E0A\u8F66",when:()=>Sh()&&!d.driving&&!ga.drove},{id:"research",text:"\u7814\u7A76\u6240\u5DF2\u5EFA\u6210\uFF0C\u6309 <kbd>T</kbd> \u7528\u79D1\u7814\u70B9\u6570\u89E3\u9501\u79D1\u6280",when:()=>d.buildings.some(n=>n.type==="lab")&&(d.rp||0)>=20},{id:"request",text:"\u5C45\u6C11\u63D0\u51FA\u4E86\u59D4\u6258\uFF08\u53F3\u4FA7\u4EFB\u52A1\u680F\uFF09\uFF0C\u5B8C\u6210\u540E\u6709\u5956\u52B1",when:()=>(d.requests||[]).length>0},{id:"talk",text:"\u5BF9\u51C6\u5C45\u6C11\u6309 <kbd>E</kbd>\uFF0C\u542C\u542C\u4ED6\u4EEC\u7684\u6545\u4E8B",when:()=>d.colonists.some(n=>n.pos.distanceTo(We.pos)<10)},{id:"level",text:"\u4EBA\u53E3\u548C\u8BBE\u65BD\u8D8A\u591A\uFF0C\u57CE\u5E02\u7B49\u7EA7\u8D8A\u9AD8\uFF0C\u9886\u5730\u4E5F\u4F1A\u6269\u5927\uFF08\u770B\u5DE6\u4E0A\u89D2\uFF09",when:()=>d.colony.pop>=2}];function qb(n){if(Ch+=n,d.driving&&(ga.drove=!0),ma)if(Ip-=n,Ip<=0||!ma.when()){ga[ma.id]=!0,ma=null;try{localStorage.setItem("starport-hints",JSON.stringify(ga))}catch{}}else return ma.text;for(let e of Xb)if(!ga[e.id]&&e.when())return ma=e,Ip=12,e.text;return""}function ly(){let n=er(),e=new Map((n.visited||[]).map(i=>[i.id,i])),t=[];fe.next&&t.push({id:fe.next,fresh:!e.has(fe.next)&&!Dh(fe.next)});for(let i of Object.keys(Nn))i!==it&&i!==fe.next&&(e.has(i)||Dh(i))&&t.push({id:i,fresh:!1,info:e.get(i)});return t}function Dh(n){try{return!!localStorage.getItem(n==="mars"?"starport-newhome-v1":"starport-planet-"+n)}catch{return!1}}function Yb(n){As("starmap"),He("starmap-list").innerHTML=ly().map(e=>{let t=Nn[e.id],i={mars:"MARS",europa:"EUROPA",kepler:"KEPLER-442b"}[e.id];return`<div class="dest" data-id="${e.id}"><div class="orb ${e.id}"></div><span class="badge ${e.fresh?"new":"home"}">${e.fresh?"UNCHARTED":"COLONY"}</span>
      <div class="dn">${t.name}</div><div class="de">${i}</div>
      <div class="dst">${t.title} \xB7 ${t.place}${e.info?`<br>\u5C45\u6C11 ${e.info.pop} \u4EBA \xB7 \u7B2C ${e.info.day} \u65E5\u79BB\u5F00`:""}${e.fresh?"<br>\u88C5\u5907\u540C\u6B65 \xB7 \u643A\u5E26\u90E8\u5206\u7269\u8D44":"<br>\u56DE\u5230\u4F60\u5EFA\u7ACB\u7684\u57CE\u5E02"}</div></div>`}).join(""),He("starmap-list").querySelectorAll(".dest").forEach(e=>e.addEventListener("click",()=>{Vn(!0),Zb(n,e.dataset.id)}))}function Zb(n,e){d.launching={b:n,t:0,dest:e},d.launched=!0,J.play("rumble"),zt("\u65B9\u821F \xB7 AI",`\u6B96\u6C11\u8230\u70B9\u706B\u3002\u76EE\u6807\uFF1A${Nn[e].name}\u3002\u5168\u4F53\u4E58\u5458\uFF0C\u795D\u4F60\u4EEC\u597D\u8FD0\u3002`),n.anim.flame.visible=!0}function Kb(n){let e=d.launching;if(!e)return;e.t+=n;let t=e.b.anim.ship;e.t>2&&(t.position.y+=n*(2+(e.t-2)*9));let i=new T(e.b.x,e.b.y+t.position.y,e.b.z);for(let s=0;s<6;s++)Ee.flame(i);e.t<5&&Ee.dustPuff(new T(e.b.x+(Math.random()-.5)*16,e.b.y+1,e.b.z+(Math.random()-.5)*16),3,4),We.landDip=Math.max(We.landDip,Math.min(.15,.03*e.t)*Math.random()),e.t>9&&!e.faded&&(e.faded=!0,He("fade").classList.add("on")),e.t>11.5&&!e.done&&(e.done=!0,Jb(e.dest))}function Jb(n){let e=er();e.visited=(e.visited||[]).filter(s=>s.id!==it).concat([{id:it,pop:d.colony.pop,day:d.time.day}]),e.planet=n,e.mode=d.mode||"story",e.diff=d.diffKey||"normal",e.autoResume=Dh(n);let t={};for(let s in d.res)t[s]=Math.min(Math.floor(d.res[s]*.4),80);e.carry={upgrades:d.upgrades,res:t},Ls(!0),Xa(e);let i=Nn[n];He("ending-text").innerHTML=["\u66F2\u901F\u822A\u884C\u4E2D\u2026\u2026",`\u76EE\u7684\u5730\uFF1A<b>${i.name}</b>${e.autoResume?"\uFF08\u5DF2\u5F00\u62D3\uFF09":""}`,`<span class="stats">${fe.name}\u7684 ${d.colony.pop} \u4F4D\u5C45\u6C11\uFF0C\u4F1A\u66FF\u4F60\u5B88\u7740\u90A3\u91CC\u7684\u706F\u706B\u3002</span>`].map((s,r)=>`<p style="animation-delay:${r*1.2}s">${s}</p>`).join(""),document.querySelector("#ending .btns").classList.add("hidden"),He("ending").classList.remove("hidden"),He("fade").classList.remove("on"),d.endingShown=!0,document.pointerLockElement&&document.exitPointerLock(),setTimeout(()=>{location.href=location.pathname+(d.debug?"?debug":"")},5e3)}function jb(){d.endingShown=!0,document.pointerLockElement&&document.exitPointerLock();let e=(er().visited||[]).concat([{id:it,pop:d.colony.pop}]),t=e.reduce((s,r)=>s+r.pop,0),i=["\u5F88\u4E45\u5F88\u4E45\u4EE5\u524D\uFF0C\u4E00\u4E2A\u4EBA\u72EC\u81EA\u7AD9\u5728\u706B\u661F\u7684\u7EA2\u8272\u5C18\u571F\u91CC\u3002","\u6C27\u6C14\u53EA\u591F\u6491\u4E09\u5206\u949F\uFF0C\u8EAB\u8FB9\u53EA\u6709\u4E00\u5EA7\u7740\u9646\u8231\u3002",e.map(s=>`${Nn[s.id].name} \xB7 ${s.pop} \u4EBA`).join("\u3000"),`\u4ECA\u5929\uFF0C${t} \u4E2A\u4EBA\uFF0C\u751F\u6D3B\u5728\u4E09\u9897\u661F\u7403\u4E0A\u3002`,'<div class="big">\u661F\u9645\u6587\u660E</div>',"\u8FD9\u4E00\u5207\uFF0C\u90FD\u4ECE\u4F60\u8FC8\u51FA\u7684\u7B2C\u4E00\u6B65\u5F00\u59CB\u3002",'<span class="stats">\u611F\u8C22\u6E38\u73A9\u300A\u661F\u6E2F\u300B\u3002\u4F60\u53EF\u4EE5\u7EE7\u7EED\u5EFA\u8BBE\uFF0C\u57CE\u5E02\u4F1A\u4E00\u76F4\u5728\u8FD9\u91CC\u7B49\u4F60\u3002</span>'];He("ending-text").innerHTML=i.map((s,r)=>`<p style="animation-delay:${r*1.8}s">${s}</p>`).join(""),He("ending").classList.remove("hidden"),J.play("chapter"),Ls(!0)}function Qb(n){let e={prompt:"",crossClass:""};if(We.dead||d.menuOpen)return e;if(d.driving)return e.prompt=`<span class="big">${qx()}</span> KM/H<br><kbd>W S</kbd> \u6CB9\u95E8 \xB7 <kbd>A D</kbd> \u8F6C\u5411 \xB7 <kbd>Shift</kbd> \u52A0\u901F \xB7 <kbd>\u7A7A\u683C</kbd> \u5239\u8F66 \xB7 <kbd>E</kbd> \u4E0B\u8F66`,e;let t=mx(We.pos);if(t)return e.prompt=`<b>${t.name}</b><br><kbd>E</kbd>\u8C03\u67E5`,ce.hit("KeyE")&&xx(t),e;let i=Sh();if(i&&Math.hypot(i.x-We.pos.x,i.z-We.pos.z)<4.5)return e.prompt="<b>\u52A0\u538B\u6F2B\u6E38\u8F66</b><br><kbd>E</kbd>\u4E0A\u8F66",ce.hit("KeyE")&&($x(),ce.pressed.delete("KeyE")),e;let s=Ct.position,r=We.fwd,o=lx(s,r),a=d.buildings.find(u=>u.type==="fabricator"&&Math.hypot(u.x-We.pos.x,u.z-We.pos.z)<u.def.r+6);pa=Math.max(0,pa-n),Qx=Math.max(0,Qx-n);let l=d.buildings.find(u=>u.type==="trade"&&Math.hypot(u.x-We.pos.x,u.z-We.pos.z)<u.def.r+5),c=d.buildings.find(u=>u.type==="launch"&&Math.hypot(u.x-We.pos.x,u.z-We.pos.z)<u.def.r+8);if(o){if(e.crossClass="talk",e.prompt=`<b>${o.name}</b> \xB7 ${o.job}<br><kbd>E</kbd> \u4EA4\u8C08`,ce.hit("KeyE")){zt(o.name,o.line);let u=d.stats.talked=d.stats.talked||[];u.includes(o.idx)||u.push(o.idx)}}else c&&!d.launching?c.powered?ly().length?(e.prompt="<b>\u6B96\u6C11\u8230\u5DF2\u5C31\u7EEA</b><br><kbd>E</kbd>\u6253\u5F00\u661F\u56FE",ce.hit("KeyE")&&Yb(c)):e.prompt="\u661F\u9645\u53D1\u5C04\u53F0 \xB7 \u6682\u65E0\u53EF\u7528\u822A\u7EBF":e.prompt='\u661F\u9645\u53D1\u5C04\u53F0 \xB7 <span class="badc">\u7535\u529B\u4E0D\u8DB3</span>':l?(e.prompt=`<b>\u661F\u9645\u8D38\u6613\u7AD9</b>${l.powered?"":' \xB7 <span class="badc">\u505C\u7535</span>'}<br><kbd>E</kbd>\u4EA4\u6613`,ce.hit("KeyE")&&(l.powered?As("trade"):Jt("\u8D38\u6613\u7AD9\u6CA1\u6709\u7535\u529B","warn","warn"))):a&&(e.prompt=`<kbd>E</kbd> \u6253\u5F00\u5236\u9020\u5DE5\u574A${a.powered?"":"\uFF08\u505C\u7535\u4E2D\uFF09"}`,ce.hit("KeyE")&&(a.powered?As("craft"):Jt("\u5236\u9020\u5DE5\u574A\u6CA1\u6709\u7535\u529B")));let h=d.lookBuilding;if(!e.prompt&&h&&on.id!=="build"){let u=h.def,f=h.level||1,p=th(h)?`<br><kbd>U</kbd>\u5347\u7EA7\u5230 Lv.${f+1}\u3000${Fo(Lf(h))}`:"";e.prompt=`<b>${u.name}</b>\u3000Lv.${f}${f>=If?"\uFF08\u6EE1\u7EA7\uFF09":""} \xB7 \u8010\u4E45 ${Math.ceil(h.hp)}/${Math.round(h.maxHp)}${u.power<0?h.powered?' \xB7 <span class="okc">\u4F9B\u7535\u4E2D</span>':' \xB7 <span class="badc">\u505C\u7535</span>':""}${p}<br><kbd>X</kbd>${pa>0?'<span class="badc">\u518D\u6309\u4E00\u6B21\u786E\u8BA4\u62C6\u9664\uFF08\u8FD4\u8FD8 50%\uFF09</span>':"\u62C6\u9664"}`,h.broken&&(e.prompt=e.prompt.replace("</b>",'</b> <span class="badc">\u53D7\u635F\u505C\u673A \xB7 \u767D\u5929\u81EA\u52A8\u4FEE\u590D</span>')),ce.hit("KeyU")&&th(h)&&(Rg(h)?Jt(`${u.name} \u5347\u7EA7\u5230 Lv.${h.level}`,"star","good"):(J.play("deny"),Jt("\u5347\u7EA7\u6750\u6599\u4E0D\u8DB3","warn","warn"))),ce.hit("KeyX")&&(pa>0?(Pg(h,!0),pa=0,Jt(`\u5DF2\u62C6\u9664 ${u.name}`)):pa=2)}return on.id==="laser"?(d.aimNode&&!e.crossClass&&(e.crossClass="node"),ta(s,r,9)&&(e.crossClass="enemy")):on.id==="rifle"&&ta(s,r,120)&&(e.crossClass="enemy"),e}var Ph=[["\u539F\u8272","none"],["\u80F6\u7247","sepia(.35) contrast(1.12) saturate(1.15) brightness(1.03)"],["\u9ED1\u767D","grayscale(1) contrast(1.25)"],["\u51B7\u8C03","hue-rotate(-18deg) saturate(.85) contrast(1.08) brightness(1.05)"]],Lp=0;function ey(n){Ps.style.filter=Ph[n][1]==="none"?"":Ph[n][1],He("photo-bar").innerHTML=Ph.map((e,t)=>`<span class="${t===n?"on":""}"><kbd>${t+1}</kbd>${e[0]}</span>`).join("")+'<span class="sep"></span><span><kbd>Enter</kbd>\u4FDD\u5B58\u7167\u7247</span><span><kbd>P</kbd>\u9000\u51FA</span>'}function ew(){let n=Ps.width,e=Ps.height,t=Math.round(e*.1),i=document.createElement("canvas");i.width=n,i.height=e;let s=i.getContext("2d");s.filter=Ph[Lp][1],s.drawImage(Ps,0,0),s.filter="none",s.fillStyle="#000",s.fillRect(0,0,n,t),s.fillRect(0,e-t,n,t);let r=Math.round(e*.022);s.font=`300 ${r*1.6}px "Noto Sans SC", sans-serif`,s.fillStyle="#fff",s.textBaseline="middle",s.fillText("\u661F \u6E2F",r*2,e-t/2),s.font=`400 ${r}px "Noto Sans SC", sans-serif`,s.fillStyle="rgba(255,255,255,.7)",s.textAlign="right",s.fillText(`${fe.name} \xB7 ${fe.place} \xB7 \u7B2C ${d.time.day} \u65E5 \xB7 \u4EBA\u53E3 ${d.colony.pop}`,n-r*2,e-t/2);let o=document.createElement("a");o.download=`\u661F\u6E2F-${fe.name}-\u7B2C${d.time.day}\u65E5.png`,o.href=i.toDataURL("image/png"),document.body.appendChild(o),o.click(),o.remove(),He("shutter").classList.remove("on"),He("shutter").offsetWidth,He("shutter").classList.add("on"),J.play("shutter"),d.stats.photos=(d.stats.photos||0)+1}var Cs=null,Dp=9.5;function ty(n){if(d.debug&&!/landing/.test(location.search)){n();return}d.cine=!0,document.body.classList.add("cinema");let e=xa.group,t=_e(gt.x,gt.z)+.1,i=new le(new Ot(1.7,10,18,1,!0),y.flame);i.rotation.x=Math.PI,i.position.y=-4.2,e.add(i);let s=Se(16752704,22,e,0,-.5,0),r=new Js(16752720,0,120,1.4);r.position.y=-2,e.add(r);let o=new T(gt.x+20,0,gt.z+25);o.y=_e(o.x,o.z)+3.2,d.time.t=.282,Cs={t:0,gy:t,flame:i,fglow:s,lamp:r,done:n,camAt:o,landed:!1,shake:0},e.position.y=t+460,J.play("rumble"),J.engine(1);let a=l=>{(l.type==="mousedown"||l.code==="Space"||l.code==="Escape")&&(Cs.t=Math.max(Cs.t,Dp+6))};Cs.skip=a,window.addEventListener("keydown",a),window.addEventListener("mousedown",a)}var ny=new cn,iy=new cn,tw=new Mn,sy=new vt;function cy(n){let e=Cs;e.t+=n;let t=xa.group,i=Math.min(1,e.t/Dp),s=1-Math.pow(1-i,2.6);t.position.y=e.gy+460*(1-s),t.rotation.z=Math.sin(e.t*1.1)*.05*(1-i);let r=i<1;e.flame.visible=e.fglow.visible=r,e.flame.scale.set(1,.5+(1-s)*.9+Math.random()*.15,1),e.lamp.intensity=r?400*(.6+Math.random()*.4):0;let o=t.position.y-e.gy;if(r){let c=new T(t.position.x,t.position.y-1,t.position.z);for(let h=0;h<4;h++)Ee.flame(c,1.4);if(o<40)for(let h=0;h<3;h++){let u=Math.random()*Math.PI*2,f=2+Math.random()*(14-o*.25);Ee.dustPuff(new T(gt.x+Math.cos(u)*f,e.gy+.3,gt.z+Math.sin(u)*f),1,2)}e.shake=Math.max(e.shake,Math.max(0,1-o/120)*.25)}else e.landed||(e.landed=!0,e.shake=1,Ee.ring(new T(gt.x,e.gy,gt.z),4,160),Ee.dustPuff(new T(gt.x,e.gy+1,gt.z),70,16),J.play("land"),J.play("rumble"),J.engine(0));e.shake*=Math.pow(.15,n),nl(0,Ct.position),il(n,Ct.position);let a=new T(t.position.x,t.position.y+3,t.position.z),l=e.t-Dp-2.2;if(l<0)Ct.position.copy(e.camAt),Ct.position.x+=Math.sin(e.t*.15)*4,Ct.lookAt(a);else{let c=Math.min(1,l/3.2),h=c*c*(3-2*c),u=new T(We.pos.x,We.pos.y+1.7,We.pos.z);if(Ct.position.lerpVectors(e.camAt,u,h),sy.lookAt(e.camAt,a,Ct.up),ny.setFromRotationMatrix(sy),iy.setFromEuler(tw.set(We.pitch,We.yaw,0,"YXZ")),Ct.quaternion.slerpQuaternions(ny,iy,h),c>=1){t.remove(e.flame,e.fglow,e.lamp),t.position.y=e.gy,t.rotation.z=0,window.removeEventListener("keydown",e.skip),window.removeEventListener("mousedown",e.skip),document.body.classList.remove("cinema"),d.cine=!1,Cs=null,J.engine(0),e.done();return}}e.shake>.01&&(Ct.position.x+=(Math.random()-.5)*e.shake*.5,Ct.position.y+=(Math.random()-.5)*e.shake*.4)}var nw=new Do,Ah=0;function hy(){requestAnimationFrame(hy);let n=Math.min(nw.getDelta(),.05);if(Cs){cy(n),Ap(),ce.endFrame();return}if(!d.started){Ah+=n*.05;let t=30;Ct.position.set(gt.x+Math.cos(Ah)*t,_e(gt.x,gt.z)+6,gt.z+Math.sin(Ah)*t),Ct.lookAt(gt.x,_e(gt.x,gt.z)+4,gt.z),d.time.t=.27+Math.sin(Ah*.5)*.01,nl(0,Ct.position),il(n,Ct.position),Ap();return}d.debug&&(d.locked=!0);let e=d.locked&&!d.menuOpen&&!d.endingShown&&!d.cine;He("clickhint").classList.toggle("hidden",!(d.started&&!d.locked&&!d.menuOpen&&!We.dead&&!d.endingShown&&!d.cine)),e?uy(n):(dp(0,{prompt:""}),nl(0,Ct.position)),il(e?n:0,Ct.position),ce.endFrame(),Ap(),rx(Cn),d.snap&&(d.snap=!1,ew())}function uy(n){{d.driving&&ce.hit("KeyE")&&!d.menuOpen&&(bp(We),ce.pressed.delete("KeyE")),d.driving||We.update(n),Xx(n,We,Ct),nl(n,Ct.position),d.time.dawn&&(d.time.dawn=!1,Jt(`\u7B2C ${d.time.day} \u65E5 \xB7 \u9ECE\u660E`,"sun")),og(n),d.driving?d.lookBuilding=null:sx(n,We,Ct),kg(n,{shoot:ch}),ax(n),dg(n,on.id==="build"&&!!bt.type),Kb(n),ff.emissiveIntensity=.06+d.time.night*(.55+Math.sin(performance.now()*.0015)*.15),Jg(n),Kx(n),Zg(n),Vg(n),xa.beacon.visible=Math.sin(performance.now()*.004)>0,Ix(n),Hx(n),yx(n),Gx(n),Eg(n,ua),Ym(),!d.plazaSeen&&d.time.night>.6&&d.colonists.filter(t=>t.atPlaza&&!t.target).length>=4&&(d.plazaSeen=!0,zt("\u82CF\u5FF5 \xB7 \u6559\u5E08","\u4ECA\u665A\u5927\u5BB6\u90FD\u6765\u4E86\u3002\u6211\u4EEC\u5C31\u8FD9\u6837\u7AD9\u7740\uFF0C\u770B\u7740\u90A3\u9897\u84DD\u8272\u7684\u661F\u7403\u8F6C\u554A\u8F6C\u2026\u2026\u5B69\u5B50\u95EE\u6211\uFF0C\u90A3\u662F\u54EA\u91CC\u3002\u6211\u8BF4\uFF0C\u90A3\u662F\u6211\u4EEC\u51FA\u53D1\u7684\u5730\u65B9\u3002"));let e=Qb(n);e.tip=qb(n),dp(n,e),J.update(d.storm,d.time.night),Cp-=n,Cp<=0&&(Cp=45,Ls(!0)),d.terraform>0&&d.terraform<=1&&(Pp-=n,Pp<=0&&(Pp=4,df(oy(),d.terraform)))}}He("loading").style.transition="opacity .8s";He("loading").style.opacity=0;setTimeout(()=>He("loading").remove(),900);hy();window.addEventListener("beforeunload",()=>Ls(!0));window.__G=d;window.__dbg={give(n=200){for(let e in xn)d.res[e]+=n},tp(n,e){We.pos.set(n,_e(n,e),e)},time(n){d.time.t=n},build:(n,e,t)=>nh(n,e,t,0),chapter:n=>ul(n),look(n,e){We.yaw=n,We.pitch=e},begin:()=>ya(!1),slope:(n,e)=>_e(n+3,e)-_e(n,e),landStep(n){for(let e=0;e<n&&Cs;e+=.05)cy(.05);return!!Cs},step(n,e=.05){for(let t=0;t<n;t+=e)uy(e),il(e,Ct.position),ce.endFrame()},input:ce,save:Ls,toast:Jt,setGhost:zr,openMenu:As,closeMenus:Vn,tool:on,placement:bt,rover:Sh};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
