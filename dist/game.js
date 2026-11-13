(()=>{var Hd="170";var py=0,Gp=1,my=2;var j0=1,Fd=2,is=3,Vs=0,bn=1,tn=2,Ii=0,Li=1,Et=2,Vp=3,Wp=4,gy=5,Er=100,xy=101,yy=102,vy=103,My=104,_y=200,Ey=201,by=202,wy=203,fu=204,pu=205,Sy=206,Ty=207,Ay=208,Ry=209,Cy=210,Py=211,Iy=212,Ly=213,Dy=214,mu=0,gu=1,xu=2,Mo=3,yu=4,vu=5,Mu=6,_u=7,Q0=0,Uy=1,Ny=2,Gs=0,Od=1,zd=2,Bd=3,Ir=4,ky=5,Gd=6,Vd=7;var em=300,_o=301,Eo=302,Eu=303,bu=304,Tc=306,ls=1e3,wr=1001,wu=1002,Vn=1003,Hy=1004;var _l=1005;var Ci=1006,Dh=1007;var Sr=1008;var cs=1009,tm=1010,nm=1011,Ha=1012,Wd=1013,Tr=1014,Pi=1015,Mi=1016,$d=1017,Xd=1018,bo=1020,im=35902,sm=1021,rm=1022,gi=1023,om=1024,am=1025,xo=1026,wo=1027,qd=1028,Yd=1029,lm=1030,Zd=1031;var Kd=1033,Kl=33776,Jl=33777,jl=33778,Ql=33779,Su=35840,Tu=35841,Au=35842,Ru=35843,Cu=36196,Pu=37492,Iu=37496,Lu=37808,Du=37809,Uu=37810,Nu=37811,ku=37812,Hu=37813,Fu=37814,Ou=37815,zu=37816,Bu=37817,Gu=37818,Vu=37819,Wu=37820,$u=37821,ec=36492,Xu=36494,qu=36495,cm=36283,Yu=36284,Zu=36285,Ku=36286;var tc=2300,Ju=2301,Uh=2302,$p=2400,Xp=2401,qp=2402;var Fy=3200,Oy=3201;var hm=0,zy=1,zs="",_t="srgb",Do="srgb-linear",Ac="linear",Dt="srgb";var Kr=7680;var Yp=519,By=512,Gy=513,Vy=514,um=515,Wy=516,$y=517,Xy=518,qy=519,ju=35044,Jd=35048;var Zp="300 es",rs=2e3,nc=2001,Ws=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kp=1234567,La=Math.PI/180,So=180/Math.PI;function os(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function xn(n,e,t){return Math.max(e,Math.min(t,n))}function jd(n,e){return(n%e+e)%e}function Yy(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Zy(n,e,t){return n!==e?(t-n)/(e-n):0}function Da(n,e,t){return(1-t)*n+t*e}function Ky(n,e,t,i){return Da(n,e,1-Math.exp(-t*i))}function Jy(n,e=1){return e-Math.abs(jd(n,e*2)-e)}function jy(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Qy(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ev(n,e){return n+Math.floor(Math.random()*(e-n+1))}function tv(n,e){return n+Math.random()*(e-n)}function nv(n){return n*(.5-Math.random())}function iv(n){n!==void 0&&(Kp=n);let e=Kp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sv(n){return n*La}function rv(n){return n*So}function ov(n){return(n&n-1)===0&&n!==0}function av(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function lv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function cv(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Xt={DEG2RAD:La,RAD2DEG:So,generateUUID:os,clamp:xn,euclideanModulo:jd,mapLinear:Yy,inverseLerp:Zy,lerp:Da,damp:Ky,pingpong:Jy,smoothstep:jy,smootherstep:Qy,randInt:ev,randFloat:tv,randFloatSpread:nv,seededRandom:iv,degToRad:sv,radToDeg:rv,isPowerOfTwo:ov,ceilPowerOfTwo:av,floorPowerOfTwo:lv,setQuaternionFromProperEuler:cv,normalize:Nt,denormalize:mi},ne=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(xn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ct=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],p=i[5],g=i[8],y=s[0],x=s[3],m=s[6],_=s[1],E=s[4],v=s[7],L=s[2],R=s[5],I=s[8];return r[0]=o*y+a*_+l*L,r[3]=o*x+a*E+l*R,r[6]=o*m+a*v+l*I,r[1]=c*y+h*_+u*L,r[4]=c*x+h*E+u*R,r[7]=c*m+h*v+u*I,r[2]=f*y+p*_+g*L,r[5]=f*x+p*E+g*R,r[8]=f*m+p*v+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=t*u+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(s*c-h*i)*y,e[2]=(a*i-s*o)*y,e[3]=f*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Nh.makeScale(e,t)),this}rotate(e){return this.premultiply(Nh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Nh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Nh=new ct;function dm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ic(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hv(){let n=ic("canvas");return n.style.display="block",n}var Jp={};function Pa(n){n in Jp||(Jp[n]=!0,console.warn(n))}function uv(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function dv(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function fv(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var gt={enabled:!0,workingColorSpace:Do,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Dt&&(n.r=as(n.r),n.g=as(n.g),n.b=as(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Dt&&(n.r=yo(n.r),n.g=yo(n.g),n.b=yo(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===zs?Ac:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function as(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function yo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var jp=[.64,.33,.3,.6,.15,.06],Qp=[.2126,.7152,.0722],e0=[.3127,.329],t0=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),n0=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);gt.define({[Do]:{primaries:jp,whitePoint:e0,transfer:Ac,toXYZ:t0,fromXYZ:n0,luminanceCoefficients:Qp,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:jp,whitePoint:e0,transfer:Dt,toXYZ:t0,fromXYZ:n0,luminanceCoefficients:Qp,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}});var Jr,Qu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Jr===void 0&&(Jr=ic("canvas")),Jr.width=e.width,Jr.height=e.height;let i=Jr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Jr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ic("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=as(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(as(t[i]/255)*255):t[i]=as(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},pv=0,sc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=os(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(kh(s[o].image)):r.push(kh(s[o]))}else r=kh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function kh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var mv=0,kn=class n extends Ws{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=wr,s=wr,r=Ci,o=Sr,a=gi,l=cs,c=n.DEFAULT_ANISOTROPY,h=zs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=os(),this.name="",this.source=new sc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==em)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ls:e.x=e.x-Math.floor(e.x);break;case wr:e.x=e.x<0?0:1;break;case wu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ls:e.y=e.y-Math.floor(e.y);break;case wr:e.y=e.y<0?0:1;break;case wu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=em;kn.DEFAULT_ANISOTROPY=1;var Ht=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],y=l[2],x=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(g+x)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,v=(p+1)/2,L=(m+1)/2,R=(h+f)/4,I=(u+y)/4,P=(g+x)/4;return E>v&&E>L?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=R/i,r=I/i):v>L?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=R/s,r=P/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=I/r,s=P/r),this.set(i,s,r,t),this}let _=Math.sqrt((x-g)*(x-g)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(x-g)/_,this.y=(u-y)/_,this.z=(f-h)/_,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ed=class extends Ws{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new kn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new sc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class extends ed{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},rc=class extends kn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var td=class extends kn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var an=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],p=r[o+1],g=r[o+2],y=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(u!==y||l!==f||c!==p||h!==g){let x=1-a,m=l*f+c*p+h*g+u*y,_=m>=0?1:-1,E=1-m*m;if(E>Number.EPSILON){let L=Math.sqrt(E),R=Math.atan2(L,m*_);x=Math.sin(x*R)/L,a=Math.sin(a*R)/L}let v=a*_;if(l=l*x+f*v,c=c*x+p*v,h=h*x+g*v,u=u*x+y*v,x===1-a){let L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*p-c*f,e[t+1]=l*g+h*f+c*u-a*p,e[t+2]=c*g+h*p+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(i0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(i0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hh.copy(this).projectOnVector(e),this.sub(Hh)}reflect(e){return this.sub(Hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(xn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hh=new T,i0=new an,xi=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,di):di.fromBufferAttribute(r,o),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),El.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),El.copy(i.boundingBox)),El.applyMatrix4(e.matrixWorld),this.union(El)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ma),bl.subVectors(this.max,Ma),jr.subVectors(e.a,Ma),Qr.subVectors(e.b,Ma),eo.subVectors(e.c,Ma),Us.subVectors(Qr,jr),Ns.subVectors(eo,Qr),mr.subVectors(jr,eo);let t=[0,-Us.z,Us.y,0,-Ns.z,Ns.y,0,-mr.z,mr.y,Us.z,0,-Us.x,Ns.z,0,-Ns.x,mr.z,0,-mr.x,-Us.y,Us.x,0,-Ns.y,Ns.x,0,-mr.y,mr.x,0];return!Fh(t,jr,Qr,eo,bl)||(t=[1,0,0,0,1,0,0,0,1],!Fh(t,jr,Qr,eo,bl))?!1:(wl.crossVectors(Us,Ns),t=[wl.x,wl.y,wl.z],Fh(t,jr,Qr,eo,bl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ji=[new T,new T,new T,new T,new T,new T,new T,new T],di=new T,El=new xi,jr=new T,Qr=new T,eo=new T,Us=new T,Ns=new T,mr=new T,Ma=new T,bl=new T,wl=new T,gr=new T;function Fh(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){gr.fromArray(n,r);let a=s.x*Math.abs(gr.x)+s.y*Math.abs(gr.y)+s.z*Math.abs(gr.z),l=e.dot(gr),c=t.dot(gr),h=i.dot(gr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var gv=new xi,_a=new T,Oh=new T,$s=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):gv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);let t=_a.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(_a,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(Oh)),this.expandByPoint(_a.copy(e.center).sub(Oh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Qi=new T,zh=new T,Sl=new T,ks=new T,Bh=new T,Tl=new T,Gh=new T,oc=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,t),Qi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){zh.copy(e).add(t).multiplyScalar(.5),Sl.copy(t).sub(e).normalize(),ks.copy(this.origin).sub(zh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Sl),a=ks.dot(this.direction),l=-ks.dot(Sl),c=ks.lengthSq(),h=Math.abs(1-o*o),u,f,p,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let y=1/h;u*=y,f*=y,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(zh).addScaledVector(Sl,f),p}intersectSphere(e,t){Qi.subVectors(e.center,this.origin);let i=Qi.dot(this.direction),s=Qi.dot(Qi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,t,i,s,r){Bh.subVectors(t,e),Tl.subVectors(i,e),Gh.crossVectors(Bh,Tl);let o=this.direction.dot(Gh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ks.subVectors(this.origin,e);let l=a*this.direction.dot(Tl.crossVectors(ks,Tl));if(l<0)return null;let c=a*this.direction.dot(Bh.cross(ks));if(c<0||l+c>o)return null;let h=-a*ks.dot(Gh);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xt=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,f,p,g,y,x){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,f,p,g,y,x)}set(e,t,i,s,r,o,a,l,c,h,u,f,p,g,y,x){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=p,m[7]=g,m[11]=y,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/to.setFromMatrixColumn(e,0).length(),r=1/to.setFromMatrixColumn(e,1).length(),o=1/to.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,p=o*u,g=a*h,y=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-y*c,t[9]=-a*l,t[2]=y-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,p=l*u,g=c*h,y=c*u;t[0]=f+y*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=y+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,p=l*u,g=c*h,y=c*u;t[0]=f-y*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=y-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,p=o*u,g=a*h,y=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+y,t[1]=l*u,t[5]=y*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=y-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=f-y*u}else if(e.order==="XZY"){let f=o*l,p=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+y,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=y*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xv,e,yv)}lookAt(e,t,i){let s=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),Hs.crossVectors(i,Bn),Hs.lengthSq()===0&&(Math.abs(i.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),Hs.crossVectors(i,Bn)),Hs.normalize(),Al.crossVectors(Bn,Hs),s[0]=Hs.x,s[4]=Al.x,s[8]=Bn.x,s[1]=Hs.y,s[5]=Al.y,s[9]=Bn.y,s[2]=Hs.z,s[6]=Al.z,s[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],p=i[13],g=i[2],y=i[6],x=i[10],m=i[14],_=i[3],E=i[7],v=i[11],L=i[15],R=s[0],I=s[4],P=s[8],w=s[12],b=s[1],D=s[5],B=s[9],z=s[13],W=s[2],ee=s[6],Y=s[10],re=s[14],X=s[3],ge=s[7],Te=s[11],Oe=s[15];return r[0]=o*R+a*b+l*W+c*X,r[4]=o*I+a*D+l*ee+c*ge,r[8]=o*P+a*B+l*Y+c*Te,r[12]=o*w+a*z+l*re+c*Oe,r[1]=h*R+u*b+f*W+p*X,r[5]=h*I+u*D+f*ee+p*ge,r[9]=h*P+u*B+f*Y+p*Te,r[13]=h*w+u*z+f*re+p*Oe,r[2]=g*R+y*b+x*W+m*X,r[6]=g*I+y*D+x*ee+m*ge,r[10]=g*P+y*B+x*Y+m*Te,r[14]=g*w+y*z+x*re+m*Oe,r[3]=_*R+E*b+v*W+L*X,r[7]=_*I+E*D+v*ee+L*ge,r[11]=_*P+E*B+v*Y+L*Te,r[15]=_*w+E*z+v*re+L*Oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],y=e[7],x=e[11],m=e[15];return g*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*p-i*l*p)+y*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+x*(+t*c*u-t*a*p-r*o*u+i*o*p+r*a*h-i*c*h)+m*(-s*a*h-t*l*u+t*a*f+s*o*u-i*o*f+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],y=e[13],x=e[14],m=e[15],_=u*x*c-y*f*c+y*l*p-a*x*p-u*l*m+a*f*m,E=g*f*c-h*x*c-g*l*p+o*x*p+h*l*m-o*f*m,v=h*y*c-g*u*c+g*a*p-o*y*p-h*a*m+o*u*m,L=g*u*l-h*y*l-g*a*f+o*y*f+h*a*x-o*u*x,R=t*_+i*E+s*v+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/R;return e[0]=_*I,e[1]=(y*f*r-u*x*r-y*s*p+i*x*p+u*s*m-i*f*m)*I,e[2]=(a*x*r-y*l*r+y*s*c-i*x*c-a*s*m+i*l*m)*I,e[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*p-i*l*p)*I,e[4]=E*I,e[5]=(h*x*r-g*f*r+g*s*p-t*x*p-h*s*m+t*f*m)*I,e[6]=(g*l*r-o*x*r-g*s*c+t*x*c+o*s*m-t*l*m)*I,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*p+t*l*p)*I,e[8]=v*I,e[9]=(g*u*r-h*y*r-g*i*p+t*y*p+h*i*m-t*u*m)*I,e[10]=(o*y*r-g*a*r+g*i*c-t*y*c-o*i*m+t*a*m)*I,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*p-t*a*p)*I,e[12]=L*I,e[13]=(h*y*s-g*u*s+g*i*f-t*y*f-h*i*x+t*u*x)*I,e[14]=(g*a*s-o*y*s-g*i*l+t*y*l+o*i*x-t*a*x)*I,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*f+t*a*f)*I,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,g=r*u,y=o*h,x=o*u,m=a*u,_=l*c,E=l*h,v=l*u,L=i.x,R=i.y,I=i.z;return s[0]=(1-(y+m))*L,s[1]=(p+v)*L,s[2]=(g-E)*L,s[3]=0,s[4]=(p-v)*R,s[5]=(1-(f+m))*R,s[6]=(x+_)*R,s[7]=0,s[8]=(g+E)*I,s[9]=(x-_)*I,s[10]=(1-(f+y))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=to.set(s[0],s[1],s[2]).length(),o=to.set(s[4],s[5],s[6]).length(),a=to.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],fi.copy(this);let c=1/r,h=1/o,u=1/a;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=h,fi.elements[5]*=h,fi.elements[6]*=h,fi.elements[8]*=u,fi.elements[9]*=u,fi.elements[10]*=u,t.setFromRotationMatrix(fi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=rs){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),p,g;if(a===rs)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===nc)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=rs){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),f=(t+e)*c,p=(i+s)*h,g,y;if(a===rs)g=(o+r)*u,y=-2*u;else if(a===nc)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},to=new T,fi=new xt,xv=new T(0,0,0),yv=new T(1,1,1),Hs=new T,Al=new T,Bn=new T,s0=new xt,r0=new an,yn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(xn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(xn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return s0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(s0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return r0.setFromEuler(this),this.setFromQuaternion(r0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yn.DEFAULT_ORDER="XYZ";var ac=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},vv=0,o0=new T,no=new an,es=new xt,Rl=new T,Ea=new T,Mv=new T,_v=new an,a0=new T(1,0,0),l0=new T(0,1,0),c0=new T(0,0,1),h0={type:"added"},Ev={type:"removed"},io={type:"childadded",child:null},Vh={type:"childremoved",child:null},dn=class n extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new T,t=new yn,i=new an,s=new T(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new ct}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ac,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return no.setFromAxisAngle(e,t),this.quaternion.multiply(no),this}rotateOnWorldAxis(e,t){return no.setFromAxisAngle(e,t),this.quaternion.premultiply(no),this}rotateX(e){return this.rotateOnAxis(a0,e)}rotateY(e){return this.rotateOnAxis(l0,e)}rotateZ(e){return this.rotateOnAxis(c0,e)}translateOnAxis(e,t){return o0.copy(e).applyQuaternion(this.quaternion),this.position.add(o0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(a0,e)}translateY(e){return this.translateOnAxis(l0,e)}translateZ(e){return this.translateOnAxis(c0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(es.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Rl.copy(e):Rl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?es.lookAt(Ea,Rl,this.up):es.lookAt(Rl,Ea,this.up),this.quaternion.setFromRotationMatrix(es),s&&(es.extractRotation(s.matrixWorld),no.setFromRotationMatrix(es),this.quaternion.premultiply(no.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(h0),io.child=e,this.dispatchEvent(io),io.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ev),Vh.child=e,this.dispatchEvent(Vh),Vh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),es.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),es.multiply(e.parent.matrixWorld)),e.applyMatrix4(es),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(h0),io.child=e,this.dispatchEvent(io),io.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,e,Mv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,_v,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};dn.DEFAULT_UP=new T(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pi=new T,ts=new T,Wh=new T,ns=new T,so=new T,ro=new T,u0=new T,$h=new T,Xh=new T,qh=new T,Yh=new Ht,Zh=new Ht,Kh=new Ht,Bs=class n{constructor(e=new T,t=new T,i=new T){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),pi.subVectors(e,t),s.cross(pi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){pi.subVectors(s,t),ts.subVectors(i,t),Wh.subVectors(e,t);let o=pi.dot(pi),a=pi.dot(ts),l=pi.dot(Wh),c=ts.dot(ts),h=ts.dot(Wh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ns)===null?!1:ns.x>=0&&ns.y>=0&&ns.x+ns.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ns)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ns.x),l.addScaledVector(o,ns.y),l.addScaledVector(a,ns.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Yh.setScalar(0),Zh.setScalar(0),Kh.setScalar(0),Yh.fromBufferAttribute(e,t),Zh.fromBufferAttribute(e,i),Kh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Yh,r.x),o.addScaledVector(Zh,r.y),o.addScaledVector(Kh,r.z),o}static isFrontFacing(e,t,i,s){return pi.subVectors(i,t),ts.subVectors(e,t),pi.cross(ts).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),ts.subVectors(this.a,this.b),pi.cross(ts).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;so.subVectors(s,i),ro.subVectors(r,i),$h.subVectors(e,i);let l=so.dot($h),c=ro.dot($h);if(l<=0&&c<=0)return t.copy(i);Xh.subVectors(e,s);let h=so.dot(Xh),u=ro.dot(Xh);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(so,o);qh.subVectors(e,r);let p=so.dot(qh),g=ro.dot(qh);if(g>=0&&p<=g)return t.copy(r);let y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(ro,a);let x=h*g-p*u;if(x<=0&&u-h>=0&&p-g>=0)return u0.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(u0,a);let m=1/(x+y+f);return o=y*m,a=f*m,t.copy(i).addScaledVector(so,o).addScaledVector(ro,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},fm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fs={h:0,s:0,l:0},Cl={h:0,s:0,l:0};function Jh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var fe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=gt.workingColorSpace){if(e=jd(e,1),t=xn(t,0,1),i=xn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Jh(o,r,e+1/3),this.g=Jh(o,r,e),this.b=Jh(o,r,e-1/3)}return gt.toWorkingColorSpace(this,s),this}setStyle(e,t=_t){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){let i=fm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}copyLinearToSRGB(e){return this.r=yo(e.r),this.g=yo(e.g),this.b=yo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return gt.fromWorkingColorSpace(En.copy(this),e),Math.round(xn(En.r*255,0,255))*65536+Math.round(xn(En.g*255,0,255))*256+Math.round(xn(En.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(En.copy(this),t);let i=En.r,s=En.g,r=En.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=_t){gt.fromWorkingColorSpace(En.copy(this),e);let t=En.r,i=En.g,s=En.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Fs),this.setHSL(Fs.h+e,Fs.s+t,Fs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fs),e.getHSL(Cl);let i=Da(Fs.h,Cl.h,t),s=Da(Fs.s,Cl.s,t),r=Da(Fs.l,Cl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},En=new fe;fe.NAMES=fm;var bv=0,hs=class extends Ws{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bv++}),this.uuid=os(),this.name="",this.blending=Li,this.side=Vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fu,this.blendDst=pu,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(i.blending=this.blending),this.side!==Vs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fu&&(i.blendSrc=this.blendSrc),this.blendDst!==pu&&(i.blendDst=this.blendDst),this.blendEquation!==Er&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Mo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Kr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Kr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},it=class extends hs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Q0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var cn=new T,Pl=new ne,Jt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ju,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Pl.fromBufferAttribute(this,t),Pl.applyMatrix3(e),this.setXY(t,Pl.x,Pl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ju&&(e.usage=this.usage),e}};var lc=class extends Jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var cc=class extends Jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ke=class extends Jt{constructor(e,t,i){super(new Float32Array(e),t,i)}},wv=0,ei=new xt,jh=new dn,oo=new T,Gn=new xi,ba=new xi,gn=new T,At=class n extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dm(e)?cc:lc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ct().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,i){return ei.makeTranslation(e,t,i),this.applyMatrix4(ei),this}scale(e,t,i){return ei.makeScale(e,t,i),this.applyMatrix4(ei),this}lookAt(e){return jh.lookAt(e),jh.updateMatrix(),this.applyMatrix4(jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oo).negate(),this.translate(oo.x,oo.y,oo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ke(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $s);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){let i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ba.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(Gn.min,ba.min),Gn.expandByPoint(gn),gn.addVectors(Gn.max,ba.max),Gn.expandByPoint(gn)):(Gn.expandByPoint(ba.min),Gn.expandByPoint(ba.max))}Gn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)gn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(gn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)gn.fromBufferAttribute(a,c),l&&(oo.fromBufferAttribute(e,c),gn.add(oo)),s=Math.max(s,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new T,l[P]=new T;let c=new T,h=new T,u=new T,f=new ne,p=new ne,g=new ne,y=new T,x=new T;function m(P,w,b){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,b),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,b),h.sub(c),u.sub(c),p.sub(f),g.sub(f);let D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(D),x.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(D),a[P].add(y),a[w].add(y),a[b].add(y),l[P].add(x),l[w].add(x),l[b].add(x))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,w=_.length;P<w;++P){let b=_[P],D=b.start,B=b.count;for(let z=D,W=D+B;z<W;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let E=new T,v=new T,L=new T,R=new T;function I(P){L.fromBufferAttribute(s,P),R.copy(L);let w=a[P];E.copy(w),E.sub(L.multiplyScalar(L.dot(w))).normalize(),v.crossVectors(R,w);let D=v.dot(l[P])<0?-1:1;o.setXYZW(P,E.x,E.y,E.z,D)}for(let P=0,w=_.length;P<w;++P){let b=_[P],D=b.start,B=b.count;for(let z=D,W=D+B;z<W;z+=3)I(e.getX(z+0)),I(e.getX(z+1)),I(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new T,r=new T,o=new T,a=new T,l=new T,c=new T,h=new T,u=new T;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),y=e.getX(f+1),x=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,x),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,x),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let y=0,x=l.length;y<x;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*h;for(let m=0;m<h;m++)f[g++]=c[p++]}return new Jt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},d0=new xt,xr=new oc,Il=new $s,f0=new T,Ll=new T,Dl=new T,Ul=new T,Qh=new T,Nl=new T,p0=new T,kl=new T,le=class extends dn{constructor(e=new At,t=new it){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Nl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Qh.fromBufferAttribute(u,e),o?Nl.addScaledVector(Qh,h):Nl.addScaledVector(Qh.sub(t),h))}t.add(Nl)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Il.copy(i.boundingSphere),Il.applyMatrix4(r),xr.copy(e.ray).recast(e.near),!(Il.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Il,f0)===null||xr.origin.distanceToSquared(f0)>(e.far-e.near)**2))&&(d0.copy(r).invert(),xr.copy(e.ray).applyMatrix4(d0),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xr)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let x=f[g],m=o[x.materialIndex],_=Math.max(x.start,p.start),E=Math.min(a.count,Math.min(x.start+x.count,p.start+p.count));for(let v=_,L=E;v<L;v+=3){let R=a.getX(v),I=a.getX(v+1),P=a.getX(v+2);s=Hl(this,m,e,i,c,h,u,R,I,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let x=g,m=y;x<m;x+=3){let _=a.getX(x),E=a.getX(x+1),v=a.getX(x+2);s=Hl(this,o,e,i,c,h,u,_,E,v),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let x=f[g],m=o[x.materialIndex],_=Math.max(x.start,p.start),E=Math.min(l.count,Math.min(x.start+x.count,p.start+p.count));for(let v=_,L=E;v<L;v+=3){let R=v,I=v+1,P=v+2;s=Hl(this,m,e,i,c,h,u,R,I,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let x=g,m=y;x<m;x+=3){let _=x,E=x+1,v=x+2;s=Hl(this,o,e,i,c,h,u,_,E,v),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}};function Sv(n,e,t,i,s,r,o,a){let l;if(e.side===bn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Vs,a),l===null)return null;kl.copy(a),kl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(kl);return c<t.near||c>t.far?null:{distance:c,point:kl.clone(),object:n}}function Hl(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ll),n.getVertexPosition(l,Dl),n.getVertexPosition(c,Ul);let h=Sv(n,e,t,i,Ll,Dl,Ul,p0);if(h){let u=new T;Bs.getBarycoord(p0,Ll,Dl,Ul,u),s&&(h.uv=Bs.getInterpolatedAttribute(s,a,l,c,u,new ne)),r&&(h.uv1=Bs.getInterpolatedAttribute(r,a,l,c,u,new ne)),o&&(h.normal=Bs.getInterpolatedAttribute(o,a,l,c,u,new T),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new T,materialIndex:0};Bs.getNormal(Ll,Dl,Ul,f.normal),h.face=f,h.barycoord=u}return h}var We=class n extends At{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2));function g(y,x,m,_,E,v,L,R,I,P,w){let b=v/I,D=L/P,B=v/2,z=L/2,W=R/2,ee=I+1,Y=P+1,re=0,X=0,ge=new T;for(let Te=0;Te<Y;Te++){let Oe=Te*D-z;for(let dt=0;dt<ee;dt++){let Ot=dt*b-B;ge[y]=Ot*_,ge[x]=Oe*E,ge[m]=W,c.push(ge.x,ge.y,ge.z),ge[y]=0,ge[x]=0,ge[m]=R>0?1:-1,h.push(ge.x,ge.y,ge.z),u.push(dt/I),u.push(1-Te/P),re+=1}}for(let Te=0;Te<P;Te++)for(let Oe=0;Oe<I;Oe++){let dt=f+Oe+ee*Te,Ot=f+Oe+ee*(Te+1),K=f+(Oe+1)+ee*(Te+1),oe=f+(Oe+1)+ee*Te;l.push(dt,Ot,oe),l.push(Ot,K,oe),X+=6}a.addGroup(p,X,w),p+=X,f+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function To(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Cn(n){let e={};for(let t=0;t<n.length;t++){let i=To(n[t]);for(let s in i)e[s]=i[s]}return e}function Tv(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function pm(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}var Ks={clone:To,merge:Cn},Av=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nn=class extends hs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Av,this.fragmentShader=Rv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=To(e.uniforms),this.uniformsGroups=Tv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},hc=class extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=rs}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Os=new T,m0=new ne,g0=new ne,on=class extends hc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=So*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(La*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return So*2*Math.atan(Math.tan(La*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Os.x,Os.y).multiplyScalar(-e/Os.z),Os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Os.x,Os.y).multiplyScalar(-e/Os.z)}getViewSize(e,t){return this.getViewBounds(e,m0,g0),t.subVectors(g0,m0)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(La*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ao=-90,lo=1,nd=class extends dn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(ao,lo,e,t);s.layers=this.layers,this.add(s);let r=new on(ao,lo,e,t);r.layers=this.layers,this.add(r);let o=new on(ao,lo,e,t);o.layers=this.layers,this.add(o);let a=new on(ao,lo,e,t);a.layers=this.layers,this.add(a);let l=new on(ao,lo,e,t);l.layers=this.layers,this.add(l);let c=new on(ao,lo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===rs)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},uc=class extends kn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:_o,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},id=class extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new uc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ci}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new We(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:To(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:Ii});r.uniforms.tEquirect.value=t;let o=new le(s,r),a=t.minFilter;return t.minFilter===Sr&&(t.minFilter=Ci),new nd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},eu=new T,Cv=new T,Pv=new ct,ss=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=eu.subVectors(i,t).cross(Cv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(eu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Pv.getNormalMatrix(e),s=this.coplanarPoint(eu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},yr=new $s,Fl=new T,Fa=class{constructor(e=new ss,t=new ss,i=new ss,s=new ss,r=new ss,o=new ss){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=rs){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],y=s[10],x=s[11],m=s[12],_=s[13],E=s[14],v=s[15];if(i[0].setComponents(l-r,f-c,x-p,v-m).normalize(),i[1].setComponents(l+r,f+c,x+p,v+m).normalize(),i[2].setComponents(l+o,f+h,x+g,v+_).normalize(),i[3].setComponents(l-o,f-h,x-g,v-_).normalize(),i[4].setComponents(l-a,f-u,x-y,v-E).normalize(),t===rs)i[5].setComponents(l+a,f+u,x+y,v+E).normalize();else if(t===nc)i[5].setComponents(a,u,y,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Fl.x=s.normal.x>0?e.max.x:e.min.x,Fl.y=s.normal.y>0?e.max.y:e.min.y,Fl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function mm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Iv(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],y=u[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,u[f]=y)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let y=u[p];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Wn=class n extends At{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,p=[],g=[],y=[],x=[];for(let m=0;m<h;m++){let _=m*f-o;for(let E=0;E<c;E++){let v=E*u-r;g.push(v,-_,0),y.push(0,0,1),x.push(E/a),x.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let E=_+c*m,v=_+c*(m+1),L=_+1+c*(m+1),R=_+1+c*m;p.push(E,v,R),p.push(v,L,R)}this.setIndex(p),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(y,3)),this.setAttribute("uv",new Ke(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Lv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dv=`#ifdef USE_ALPHAHASH
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
#endif`,Uv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fv=`#ifdef USE_AOMAP
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
#endif`,Ov=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zv=`#ifdef USE_BATCHING
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
#endif`,Bv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$v=`#ifdef USE_IRIDESCENCE
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
#endif`,Xv=`#ifdef USE_BUMPMAP
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
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,e1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,t1=`#define PI 3.141592653589793
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
} // validated`,n1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,i1=`vec3 transformedNormal = objectNormal;
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
#endif`,s1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,o1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,a1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,l1="gl_FragColor = linearToOutputTexel( gl_FragColor );",c1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,h1=`#ifdef USE_ENVMAP
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
#endif`,u1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,d1=`#ifdef USE_ENVMAP
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
#endif`,f1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,p1=`#ifdef USE_ENVMAP
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
#endif`,m1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,g1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,x1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v1=`#ifdef USE_GRADIENTMAP
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
}`,M1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,E1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b1=`uniform bool receiveShadow;
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
#endif`,w1=`#ifdef USE_ENVMAP
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
#endif`,S1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,T1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,A1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,R1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C1=`PhysicalMaterial material;
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
#endif`,P1=`struct PhysicalMaterial {
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
}`,I1=`
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
#endif`,L1=`#if defined( RE_IndirectDiffuse )
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
#endif`,D1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,U1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,N1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,B1=`#if defined( USE_POINTS_UV )
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
#endif`,G1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,W1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,X1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q1=`#ifdef USE_MORPHTARGETS
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
#endif`,Y1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,K1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,J1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eM=`#ifdef USE_NORMALMAP
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
#endif`,tM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,aM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gM=`float getShadowMask() {
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
}`,xM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yM=`#ifdef USE_SKINNING
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
#endif`,vM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,MM=`#ifdef USE_SKINNING
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
#endif`,_M=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,EM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,SM=`#ifdef USE_TRANSMISSION
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
#endif`,TM=`#ifdef USE_TRANSMISSION
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
#endif`,RM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,IM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LM=`uniform sampler2D t2D;
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
}`,DM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,NM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HM=`#include <common>
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
}`,FM=`#if DEPTH_PACKING == 3200
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
}`,OM=`#define DISTANCE
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
}`,zM=`#define DISTANCE
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
}`,BM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VM=`uniform float scale;
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
}`,WM=`uniform vec3 diffuse;
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
}`,$M=`#include <common>
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
}`,XM=`uniform vec3 diffuse;
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
}`,qM=`#define LAMBERT
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
}`,YM=`#define LAMBERT
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
}`,ZM=`#define MATCAP
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
}`,KM=`#define MATCAP
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
}`,JM=`#define NORMAL
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
}`,jM=`#define NORMAL
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
}`,QM=`#define PHONG
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
}`,e_=`#define PHONG
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
}`,t_=`#define STANDARD
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
}`,n_=`#define STANDARD
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
}`,i_=`#define TOON
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
}`,s_=`#define TOON
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
}`,r_=`uniform float size;
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
}`,o_=`uniform vec3 diffuse;
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
}`,a_=`#include <common>
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
}`,l_=`uniform vec3 color;
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
}`,c_=`uniform float rotation;
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
}`,h_=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:Lv,alphahash_pars_fragment:Dv,alphamap_fragment:Uv,alphamap_pars_fragment:Nv,alphatest_fragment:kv,alphatest_pars_fragment:Hv,aomap_fragment:Fv,aomap_pars_fragment:Ov,batching_pars_vertex:zv,batching_vertex:Bv,begin_vertex:Gv,beginnormal_vertex:Vv,bsdfs:Wv,iridescence_fragment:$v,bumpmap_pars_fragment:Xv,clipping_planes_fragment:qv,clipping_planes_pars_fragment:Yv,clipping_planes_pars_vertex:Zv,clipping_planes_vertex:Kv,color_fragment:Jv,color_pars_fragment:jv,color_pars_vertex:Qv,color_vertex:e1,common:t1,cube_uv_reflection_fragment:n1,defaultnormal_vertex:i1,displacementmap_pars_vertex:s1,displacementmap_vertex:r1,emissivemap_fragment:o1,emissivemap_pars_fragment:a1,colorspace_fragment:l1,colorspace_pars_fragment:c1,envmap_fragment:h1,envmap_common_pars_fragment:u1,envmap_pars_fragment:d1,envmap_pars_vertex:f1,envmap_physical_pars_fragment:w1,envmap_vertex:p1,fog_vertex:m1,fog_pars_vertex:g1,fog_fragment:x1,fog_pars_fragment:y1,gradientmap_pars_fragment:v1,lightmap_pars_fragment:M1,lights_lambert_fragment:_1,lights_lambert_pars_fragment:E1,lights_pars_begin:b1,lights_toon_fragment:S1,lights_toon_pars_fragment:T1,lights_phong_fragment:A1,lights_phong_pars_fragment:R1,lights_physical_fragment:C1,lights_physical_pars_fragment:P1,lights_fragment_begin:I1,lights_fragment_maps:L1,lights_fragment_end:D1,logdepthbuf_fragment:U1,logdepthbuf_pars_fragment:N1,logdepthbuf_pars_vertex:k1,logdepthbuf_vertex:H1,map_fragment:F1,map_pars_fragment:O1,map_particle_fragment:z1,map_particle_pars_fragment:B1,metalnessmap_fragment:G1,metalnessmap_pars_fragment:V1,morphinstance_vertex:W1,morphcolor_vertex:$1,morphnormal_vertex:X1,morphtarget_pars_vertex:q1,morphtarget_vertex:Y1,normal_fragment_begin:Z1,normal_fragment_maps:K1,normal_pars_fragment:J1,normal_pars_vertex:j1,normal_vertex:Q1,normalmap_pars_fragment:eM,clearcoat_normal_fragment_begin:tM,clearcoat_normal_fragment_maps:nM,clearcoat_pars_fragment:iM,iridescence_pars_fragment:sM,opaque_fragment:rM,packing:oM,premultiplied_alpha_fragment:aM,project_vertex:lM,dithering_fragment:cM,dithering_pars_fragment:hM,roughnessmap_fragment:uM,roughnessmap_pars_fragment:dM,shadowmap_pars_fragment:fM,shadowmap_pars_vertex:pM,shadowmap_vertex:mM,shadowmask_pars_fragment:gM,skinbase_vertex:xM,skinning_pars_vertex:yM,skinning_vertex:vM,skinnormal_vertex:MM,specularmap_fragment:_M,specularmap_pars_fragment:EM,tonemapping_fragment:bM,tonemapping_pars_fragment:wM,transmission_fragment:SM,transmission_pars_fragment:TM,uv_pars_fragment:AM,uv_pars_vertex:RM,uv_vertex:CM,worldpos_vertex:PM,background_vert:IM,background_frag:LM,backgroundCube_vert:DM,backgroundCube_frag:UM,cube_vert:NM,cube_frag:kM,depth_vert:HM,depth_frag:FM,distanceRGBA_vert:OM,distanceRGBA_frag:zM,equirect_vert:BM,equirect_frag:GM,linedashed_vert:VM,linedashed_frag:WM,meshbasic_vert:$M,meshbasic_frag:XM,meshlambert_vert:qM,meshlambert_frag:YM,meshmatcap_vert:ZM,meshmatcap_frag:KM,meshnormal_vert:JM,meshnormal_frag:jM,meshphong_vert:QM,meshphong_frag:e_,meshphysical_vert:t_,meshphysical_frag:n_,meshtoon_vert:i_,meshtoon_frag:s_,points_vert:r_,points_frag:o_,shadow_vert:a_,shadow_frag:l_,sprite_vert:c_,sprite_frag:h_},ce={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Ri={basic:{uniforms:Cn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Cn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new fe(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Cn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Cn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Cn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new fe(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Cn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Cn([ce.points,ce.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Cn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Cn([ce.common,ce.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Cn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Cn([ce.sprite,ce.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:Cn([ce.common,ce.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:Cn([ce.lights,ce.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Ri.physical={uniforms:Cn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};var Ol={r:0,b:0,g:0},vr=new yn,u_=new xt;function d_(n,e,t,i,s,r,o){let a=new fe(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(_){let E=_.isScene===!0?_.background:null;return E&&E.isTexture&&(E=(_.backgroundBlurriness>0?t:e).get(E)),E}function y(_){let E=!1,v=g(_);v===null?m(a,l):v&&v.isColor&&(m(v,1),E=!0);let L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(_,E){let v=g(E);v&&(v.isCubeTexture||v.mapping===Tc)?(h===void 0&&(h=new le(new We(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:To(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),vr.copy(E.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(u_.makeRotationFromEuler(vr)),h.material.toneMapped=gt.getTransfer(v.colorSpace)!==Dt,(u!==v||f!==v.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,p=n.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new le(new Wn(2,2),new nn({name:"BackgroundMaterial",uniforms:To(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Vs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=gt.getTransfer(v.colorSpace)!==Dt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,p=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,E){_.getRGB(Ol,pm(n)),i.buffers.color.setClear(Ol.r,Ol.g,Ol.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(_,E=1){a.set(_),l=E,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,m(a,l)},render:y,addToRenderList:x}}function f_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(b,D,B,z,W){let ee=!1,Y=u(z,B,D);r!==Y&&(r=Y,c(r.object)),ee=p(b,z,B,W),ee&&g(b,z,B,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,v(b,D,B,z),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function u(b,D,B){let z=B.wireframe===!0,W=i[b.id];W===void 0&&(W={},i[b.id]=W);let ee=W[D.id];ee===void 0&&(ee={},W[D.id]=ee);let Y=ee[z];return Y===void 0&&(Y=f(l()),ee[z]=Y),Y}function f(b){let D=[],B=[],z=[];for(let W=0;W<t;W++)D[W]=0,B[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:z,object:b,attributes:{},index:null}}function p(b,D,B,z){let W=r.attributes,ee=D.attributes,Y=0,re=B.getAttributes();for(let X in re)if(re[X].location>=0){let Te=W[X],Oe=ee[X];if(Oe===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(Oe=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(Oe=b.instanceColor)),Te===void 0||Te.attribute!==Oe||Oe&&Te.data!==Oe.data)return!0;Y++}return r.attributesNum!==Y||r.index!==z}function g(b,D,B,z){let W={},ee=D.attributes,Y=0,re=B.getAttributes();for(let X in re)if(re[X].location>=0){let Te=ee[X];Te===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(Te=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(Te=b.instanceColor));let Oe={};Oe.attribute=Te,Te&&Te.data&&(Oe.data=Te.data),W[X]=Oe,Y++}r.attributes=W,r.attributesNum=Y,r.index=z}function y(){let b=r.newAttributes;for(let D=0,B=b.length;D<B;D++)b[D]=0}function x(b){m(b,0)}function m(b,D){let B=r.newAttributes,z=r.enabledAttributes,W=r.attributeDivisors;B[b]=1,z[b]===0&&(n.enableVertexAttribArray(b),z[b]=1),W[b]!==D&&(n.vertexAttribDivisor(b,D),W[b]=D)}function _(){let b=r.newAttributes,D=r.enabledAttributes;for(let B=0,z=D.length;B<z;B++)D[B]!==b[B]&&(n.disableVertexAttribArray(B),D[B]=0)}function E(b,D,B,z,W,ee,Y){Y===!0?n.vertexAttribIPointer(b,D,B,W,ee):n.vertexAttribPointer(b,D,B,z,W,ee)}function v(b,D,B,z){y();let W=z.attributes,ee=B.getAttributes(),Y=D.defaultAttributeValues;for(let re in ee){let X=ee[re];if(X.location>=0){let ge=W[re];if(ge===void 0&&(re==="instanceMatrix"&&b.instanceMatrix&&(ge=b.instanceMatrix),re==="instanceColor"&&b.instanceColor&&(ge=b.instanceColor)),ge!==void 0){let Te=ge.normalized,Oe=ge.itemSize,dt=e.get(ge);if(dt===void 0)continue;let Ot=dt.buffer,K=dt.type,oe=dt.bytesPerElement,Ne=K===n.INT||K===n.UNSIGNED_INT||ge.gpuType===Wd;if(ge.isInterleavedBufferAttribute){let xe=ge.data,qe=xe.stride,rt=ge.offset;if(xe.isInstancedInterleavedBuffer){for(let ft=0;ft<X.locationSize;ft++)m(X.location+ft,xe.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let ft=0;ft<X.locationSize;ft++)x(X.location+ft);n.bindBuffer(n.ARRAY_BUFFER,Ot);for(let ft=0;ft<X.locationSize;ft++)E(X.location+ft,Oe/X.locationSize,K,Te,qe*oe,(rt+Oe/X.locationSize*ft)*oe,Ne)}else{if(ge.isInstancedBufferAttribute){for(let xe=0;xe<X.locationSize;xe++)m(X.location+xe,ge.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let xe=0;xe<X.locationSize;xe++)x(X.location+xe);n.bindBuffer(n.ARRAY_BUFFER,Ot);for(let xe=0;xe<X.locationSize;xe++)E(X.location+xe,Oe/X.locationSize,K,Te,Oe*oe,Oe/X.locationSize*xe*oe,Ne)}}else if(Y!==void 0){let Te=Y[re];if(Te!==void 0)switch(Te.length){case 2:n.vertexAttrib2fv(X.location,Te);break;case 3:n.vertexAttrib3fv(X.location,Te);break;case 4:n.vertexAttrib4fv(X.location,Te);break;default:n.vertexAttrib1fv(X.location,Te)}}}}_()}function L(){P();for(let b in i){let D=i[b];for(let B in D){let z=D[B];for(let W in z)h(z[W].object),delete z[W];delete D[B]}delete i[b]}}function R(b){if(i[b.id]===void 0)return;let D=i[b.id];for(let B in D){let z=D[B];for(let W in z)h(z[W].object),delete z[W];delete D[B]}delete i[b.id]}function I(b){for(let D in i){let B=i[D];if(B[b.id]===void 0)continue;let z=B[b.id];for(let W in z)h(z[W].object),delete z[W];delete B[b.id]}}function P(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:x,disableUnusedAttributes:_}}function p_(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,i,1)}function l(c,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y]*f[y];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function m_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==gi&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let P=I===Mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==cs&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Pi&&!P)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:L,maxSamples:R}}function g_(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ss,a=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||i!==0||s;return s=f,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,y=u.clipIntersection,x=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!x)r?h(null):c();else{let _=r?0:i,E=_*4,v=m.clippingState||null;l.value=v,v=h(g,f,E,p);for(let L=0;L!==E;++L)v[L]=t[L];m.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,p,g){let y=u!==null?u.length:0,x=null;if(y!==0){if(x=l.value,g!==!0||x===null){let m=p+y*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(x===null||x.length<m)&&(x=new Float32Array(m));for(let E=0,v=p;E!==y;++E,v+=4)o.copy(u[E]).applyMatrix4(_,a),o.normal.toArray(x,v),x[v+3]=o.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,x}}function x_(n){let e=new WeakMap;function t(o,a){return a===Eu?o.mapping=_o:a===bu&&(o.mapping=Eo),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Eu||a===bu)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new id(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Ao=class extends hc{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},go=4,x0=[.125,.215,.35,.446,.526,.582],br=20,tu=new Ao,y0=new fe,nu=null,iu=0,su=0,ru=!1,_r=(1+Math.sqrt(5))/2,co=1/_r,v0=[new T(-_r,co,0),new T(_r,co,0),new T(-co,0,_r),new T(co,0,_r),new T(0,_r,-co),new T(0,_r,co),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],Ro=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){nu=this._renderer.getRenderTarget(),iu=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=E0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nu,iu,su),this._renderer.xr.enabled=ru,e.scissorTest=!1,zl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_o||e.mapping===Eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nu=this._renderer.getRenderTarget(),iu=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:Mi,format:gi,colorSpace:Do,depthBuffer:!1},s=M0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=M0(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=y_(r)),this._blurMaterial=v_(r,e,t)}return s}_compileMaterial(e){let t=new le(this._lodPlanes[0],e);this._renderer.compile(t,tu)}_sceneToCubeUV(e,t,i,s){let a=new on(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(y0),h.toneMapping=Gs,h.autoClear=!1;let p=new it({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),g=new le(new We,p),y=!1,x=e.background;x?x.isColor&&(p.color.copy(x),e.background=null,y=!0):(p.color.copy(y0),y=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):_===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let E=this._cubeSize;zl(s,_*E,m>2?E:0,E,E),h.setRenderTarget(s),y&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=x}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===_o||e.mapping===Eo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=E0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_0());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new le(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;zl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,tu)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=v0[(s-r-1)%v0.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new le(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*br-1),y=r/g,x=isFinite(r)?1+Math.floor(h*y):br;x>br&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${br}`);let m=[],_=0;for(let I=0;I<br;++I){let P=I/y,w=Math.exp(-P*P/2);m.push(w),I===0?_+=w:I<x&&(_+=2*w)}for(let I=0;I<m.length;I++)m[I]=m[I]/_;f.envMap.value=e.texture,f.samples.value=x,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;let v=this._sizeLods[s],L=3*v*(s>E-go?s-E+go:0),R=4*(this._cubeSize-v);zl(t,L,R,3*v,2*v),l.setRenderTarget(t),l.render(u,tu)}};function y_(n){let e=[],t=[],i=[],s=n,r=n-go+1+x0.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-go?l=x0[o-n+go-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,y=3,x=2,m=1,_=new Float32Array(y*g*p),E=new Float32Array(x*g*p),v=new Float32Array(m*g*p);for(let R=0;R<p;R++){let I=R%3*2/3-1,P=R>2?0:-1,w=[I,P,0,I+2/3,P,0,I+2/3,P+1,0,I,P,0,I+2/3,P+1,0,I,P+1,0];_.set(w,y*g*R),E.set(f,x*g*R);let b=[R,R,R,R,R,R];v.set(b,m*g*R)}let L=new At;L.setAttribute("position",new Jt(_,y)),L.setAttribute("uv",new Jt(E,x)),L.setAttribute("faceIndex",new Jt(v,m)),e.push(L),s>go&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function M0(n,e,t){let i=new Pn(n,e,t);return i.texture.mapping=Tc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zl(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function v_(n,e,t){let i=new Float32Array(br),s=new T(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qd(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function _0(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qd(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function E0(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Qd(){return`

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
	`}function M_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Eu||l===bu,h=l===_o||l===Eo;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Ro(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Ro(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function __(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Pa("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function E_(n,e,t,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let y=f.morphAttributes[g];for(let x=0,m=y.length;x<m;x++)e.remove(y[x])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let y=p[g];for(let x=0,m=y.length;x<m;x++)e.update(y[x],n.ARRAY_BUFFER)}}function c(u){let f=[],p=u.index,g=u.attributes.position,y=0;if(p!==null){let _=p.array;y=p.version;for(let E=0,v=_.length;E<v;E+=3){let L=_[E+0],R=_[E+1],I=_[E+2];f.push(L,R,R,I,I,L)}}else if(g!==void 0){let _=g.array;y=g.version;for(let E=0,v=_.length/3-1;E<v;E+=3){let L=E+0,R=E+1,I=E+2;f.push(L,R,R,I,I,L)}}else return;let x=new(dm(f)?cc:lc)(f,1);x.version=y;let m=r.get(u);m&&e.remove(m),r.set(u,x)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function b_(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),t.update(p,i,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let x=0;for(let m=0;m<g;m++)x+=p[m];t.update(x,i,1)}function u(f,p,g,y){if(g===0)return;let x=e.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<f.length;m++)c(f[m]/o,p[m],y[m]);else{x.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,y,0,g);let m=0;for(let _=0;_<g;_++)m+=p[_]*y[_];t.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function w_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function S_(n,e,t){let i=new WeakMap,s=new Ht;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let w=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],E=0;p===!0&&(E=1),g===!0&&(E=2),y===!0&&(E=3);let v=a.attributes.position.count*E,L=1;v>e.maxTextureSize&&(L=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let R=new Float32Array(v*L*4*u),I=new rc(R,v,L,u);I.type=Pi,I.needsUpdate=!0;let P=E*4;for(let b=0;b<u;b++){let D=x[b],B=m[b],z=_[b],W=v*L*4*b;for(let ee=0;ee<D.count;ee++){let Y=ee*P;p===!0&&(s.fromBufferAttribute(D,ee),R[W+Y+0]=s.x,R[W+Y+1]=s.y,R[W+Y+2]=s.z,R[W+Y+3]=0),g===!0&&(s.fromBufferAttribute(B,ee),R[W+Y+4]=s.x,R[W+Y+5]=s.y,R[W+Y+6]=s.z,R[W+Y+7]=0),y===!0&&(s.fromBufferAttribute(z,ee),R[W+Y+8]=s.x,R[W+Y+9]=s.y,R[W+Y+10]=s.z,R[W+Y+11]=z.itemSize===4?s.w:1)}}f={count:u,texture:I,size:new ne(v,L)},i.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function T_(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var dc=class extends kn{constructor(e,t,i,s,r,o,a,l,c,h=xo){if(h!==xo&&h!==wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===xo&&(i=Tr),i===void 0&&h===wo&&(i=bo),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vn,this.minFilter=l!==void 0?l:Vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},gm=new kn,b0=new dc(1,1),xm=new rc,ym=new td,vm=new uc,w0=[],S0=[],T0=new Float32Array(16),A0=new Float32Array(9),R0=new Float32Array(4);function Uo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=w0[s];if(r===void 0&&(r=new Float32Array(s),w0[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function fn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Rc(n,e){let t=S0[e];t===void 0&&(t=new Int32Array(e),S0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function A_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function R_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2fv(this.addr,e),pn(t,e)}}function C_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;n.uniform3fv(this.addr,e),pn(t,e)}}function P_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4fv(this.addr,e),pn(t,e)}}function I_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,i))return;R0.set(i),n.uniformMatrix2fv(this.addr,!1,R0),pn(t,i)}}function L_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,i))return;A0.set(i),n.uniformMatrix3fv(this.addr,!1,A0),pn(t,i)}}function D_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,i))return;T0.set(i),n.uniformMatrix4fv(this.addr,!1,T0),pn(t,i)}}function U_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function N_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2iv(this.addr,e),pn(t,e)}}function k_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3iv(this.addr,e),pn(t,e)}}function H_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4iv(this.addr,e),pn(t,e)}}function F_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function O_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2uiv(this.addr,e),pn(t,e)}}function z_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3uiv(this.addr,e),pn(t,e)}}function B_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4uiv(this.addr,e),pn(t,e)}}function G_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(b0.compareFunction=um,r=b0):r=gm,t.setTexture2D(e||r,s)}function V_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ym,s)}function W_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||vm,s)}function $_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||xm,s)}function X_(n){switch(n){case 5126:return A_;case 35664:return R_;case 35665:return C_;case 35666:return P_;case 35674:return I_;case 35675:return L_;case 35676:return D_;case 5124:case 35670:return U_;case 35667:case 35671:return N_;case 35668:case 35672:return k_;case 35669:case 35673:return H_;case 5125:return F_;case 36294:return O_;case 36295:return z_;case 36296:return B_;case 35678:case 36198:case 36298:case 36306:case 35682:return G_;case 35679:case 36299:case 36307:return V_;case 35680:case 36300:case 36308:case 36293:return W_;case 36289:case 36303:case 36311:case 36292:return $_}}function q_(n,e){n.uniform1fv(this.addr,e)}function Y_(n,e){let t=Uo(e,this.size,2);n.uniform2fv(this.addr,t)}function Z_(n,e){let t=Uo(e,this.size,3);n.uniform3fv(this.addr,t)}function K_(n,e){let t=Uo(e,this.size,4);n.uniform4fv(this.addr,t)}function J_(n,e){let t=Uo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function j_(n,e){let t=Uo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Q_(n,e){let t=Uo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function eE(n,e){n.uniform1iv(this.addr,e)}function tE(n,e){n.uniform2iv(this.addr,e)}function nE(n,e){n.uniform3iv(this.addr,e)}function iE(n,e){n.uniform4iv(this.addr,e)}function sE(n,e){n.uniform1uiv(this.addr,e)}function rE(n,e){n.uniform2uiv(this.addr,e)}function oE(n,e){n.uniform3uiv(this.addr,e)}function aE(n,e){n.uniform4uiv(this.addr,e)}function lE(n,e,t){let i=this.cache,s=e.length,r=Rc(t,s);fn(i,r)||(n.uniform1iv(this.addr,r),pn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||gm,r[o])}function cE(n,e,t){let i=this.cache,s=e.length,r=Rc(t,s);fn(i,r)||(n.uniform1iv(this.addr,r),pn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ym,r[o])}function hE(n,e,t){let i=this.cache,s=e.length,r=Rc(t,s);fn(i,r)||(n.uniform1iv(this.addr,r),pn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||vm,r[o])}function uE(n,e,t){let i=this.cache,s=e.length,r=Rc(t,s);fn(i,r)||(n.uniform1iv(this.addr,r),pn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||xm,r[o])}function dE(n){switch(n){case 5126:return q_;case 35664:return Y_;case 35665:return Z_;case 35666:return K_;case 35674:return J_;case 35675:return j_;case 35676:return Q_;case 5124:case 35670:return eE;case 35667:case 35671:return tE;case 35668:case 35672:return nE;case 35669:case 35673:return iE;case 5125:return sE;case 36294:return rE;case 36295:return oE;case 36296:return aE;case 35678:case 36198:case 36298:case 36306:case 35682:return lE;case 35679:case 36299:case 36307:return cE;case 35680:case 36300:case 36308:case 36293:return hE;case 36289:case 36303:case 36311:case 36292:return uE}}var sd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=X_(t.type)}},rd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dE(t.type)}},od=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},ou=/(\w+)(\])?(\[|\.)?/g;function C0(n,e){n.seq.push(e),n.map[e.id]=e}function fE(n,e,t){let i=n.name,s=i.length;for(ou.lastIndex=0;;){let r=ou.exec(i),o=ou.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){C0(t,c===void 0?new sd(a,n,e):new rd(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new od(a),C0(t,u)),t=u}}}var vo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);fE(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function P0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var pE=37297,mE=0;function gE(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var I0=new ct;function xE(n){gt._getMatrix(I0,gt.workingColorSpace,n);let e=`mat3( ${I0.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(n)){case Ac:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function L0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+gE(n.getShaderSource(e),o)}else return s}function yE(n,e){let t=xE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function vE(n,e){let t;switch(e){case Od:t="Linear";break;case zd:t="Reinhard";break;case Bd:t="Cineon";break;case Ir:t="ACESFilmic";break;case Gd:t="AgX";break;case Vd:t="Neutral";break;case ky:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Bl=new T;function ME(){gt.getLuminanceCoefficients(Bl);let n=Bl.x.toFixed(4),e=Bl.y.toFixed(4),t=Bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _E(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ia).join(`
`)}function EE(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function bE(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ia(n){return n!==""}function D0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function U0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var wE=/^[ \t]*#include +<([\w\d./]+)>/gm;function ad(n){return n.replace(wE,TE)}var SE=new Map;function TE(n,e){let t=ut[e];if(t===void 0){let i=SE.get(e);if(i!==void 0)t=ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ad(t)}var AE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function N0(n){return n.replace(AE,RE)}function RE(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function k0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function CE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===j0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Fd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===is&&(e="SHADOWMAP_TYPE_VSM"),e}function PE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _o:case Eo:e="ENVMAP_TYPE_CUBE";break;case Tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function IE(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Eo:e="ENVMAP_MODE_REFRACTION";break}return e}function LE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Q0:e="ENVMAP_BLENDING_MULTIPLY";break;case Uy:e="ENVMAP_BLENDING_MIX";break;case Ny:e="ENVMAP_BLENDING_ADD";break}return e}function DE(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function UE(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=CE(t),c=PE(t),h=IE(t),u=LE(t),f=DE(t),p=_E(t),g=EE(r),y=s.createProgram(),x,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ia).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ia).join(`
`),m.length>0&&(m+=`
`)):(x=[k0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),m=[k0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gs?"#define TONE_MAPPING":"",t.toneMapping!==Gs?ut.tonemapping_pars_fragment:"",t.toneMapping!==Gs?vE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,yE("linearToOutputTexel",t.outputColorSpace),ME(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ia).join(`
`)),o=ad(o),o=D0(o,t),o=U0(o,t),a=ad(a),a=D0(a,t),a=U0(a,t),o=N0(o),a=N0(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,x=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===Zp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=_+x+o,v=_+m+a,L=P0(s,s.VERTEX_SHADER,E),R=P0(s,s.FRAGMENT_SHADER,v);s.attachShader(y,L),s.attachShader(y,R),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function I(D){if(n.debug.checkShaderErrors){let B=s.getProgramInfoLog(y).trim(),z=s.getShaderInfoLog(L).trim(),W=s.getShaderInfoLog(R).trim(),ee=!0,Y=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,L,R);else{let re=L0(s,L,"vertex"),X=L0(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+re+`
`+X)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(z===""||W==="")&&(Y=!1);Y&&(D.diagnostics={runnable:ee,programLog:B,vertexShader:{log:z,prefix:x},fragmentShader:{log:W,prefix:m}})}s.deleteShader(L),s.deleteShader(R),P=new vo(s,y),w=bE(s,y)}let P;this.getUniforms=function(){return P===void 0&&I(this),P};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(y,pE)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mE++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=L,this.fragmentShader=R,this}var NE=0,ld=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new cd(e),t.set(e,i)),i}},cd=class{constructor(e){this.id=NE++,this.code=e,this.usedTimes=0}};function kE(n,e,t,i,s,r,o){let a=new ac,l=new ld,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return c.add(w),w===0?"uv":`uv${w}`}function x(w,b,D,B,z){let W=B.fog,ee=z.geometry,Y=w.isMeshStandardMaterial?B.environment:null,re=(w.isMeshStandardMaterial?t:e).get(w.envMap||Y),X=re&&re.mapping===Tc?re.image.height:null,ge=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));let Te=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Oe=Te!==void 0?Te.length:0,dt=0;ee.morphAttributes.position!==void 0&&(dt=1),ee.morphAttributes.normal!==void 0&&(dt=2),ee.morphAttributes.color!==void 0&&(dt=3);let Ot,K,oe,Ne;if(ge){let Ut=Ri[ge];Ot=Ut.vertexShader,K=Ut.fragmentShader}else Ot=w.vertexShader,K=w.fragmentShader,l.update(w),oe=l.getVertexShaderID(w),Ne=l.getFragmentShaderID(w);let xe=n.getRenderTarget(),qe=n.state.buffers.depth.getReversed(),rt=z.isInstancedMesh===!0,ft=z.isBatchedMesh===!0,Kt=!!w.map,wt=!!w.matcap,rn=!!re,F=!!w.aoMap,jn=!!w.lightMap,yt=!!w.bumpMap,vt=!!w.normalMap,Ve=!!w.displacementMap,Vt=!!w.emissiveMap,Be=!!w.metalnessMap,C=!!w.roughnessMap,S=w.anisotropy>0,O=w.clearcoat>0,j=w.dispersion>0,te=w.iridescence>0,Z=w.sheen>0,He=w.transmission>0,ye=S&&!!w.anisotropyMap,Ae=O&&!!w.clearcoatMap,St=O&&!!w.clearcoatNormalMap,ie=O&&!!w.clearcoatRoughnessMap,Re=te&&!!w.iridescenceMap,$e=te&&!!w.iridescenceThicknessMap,Ze=Z&&!!w.sheenColorMap,Ce=Z&&!!w.sheenRoughnessMap,Mt=!!w.specularMap,ht=!!w.specularColorMap,Bt=!!w.specularIntensityMap,U=He&&!!w.transmissionMap,pe=He&&!!w.thicknessMap,$=!!w.gradientMap,Q=!!w.alphaMap,be=w.alphaTest>0,_e=!!w.alphaHash,at=!!w.extensions,en=Gs;w.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(en=n.toneMapping);let Mn={shaderID:ge,shaderType:w.type,shaderName:w.name,vertexShader:Ot,fragmentShader:K,defines:w.defines,customVertexShaderID:oe,customFragmentShaderID:Ne,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:ft,batchingColor:ft&&z._colorsTexture!==null,instancing:rt,instancingColor:rt&&z.instanceColor!==null,instancingMorph:rt&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:xe===null?n.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Do,alphaToCoverage:!!w.alphaToCoverage,map:Kt,matcap:wt,envMap:rn,envMapMode:rn&&re.mapping,envMapCubeUVHeight:X,aoMap:F,lightMap:jn,bumpMap:yt,normalMap:vt,displacementMap:f&&Ve,emissiveMap:Vt,normalMapObjectSpace:vt&&w.normalMapType===zy,normalMapTangentSpace:vt&&w.normalMapType===hm,metalnessMap:Be,roughnessMap:C,anisotropy:S,anisotropyMap:ye,clearcoat:O,clearcoatMap:Ae,clearcoatNormalMap:St,clearcoatRoughnessMap:ie,dispersion:j,iridescence:te,iridescenceMap:Re,iridescenceThicknessMap:$e,sheen:Z,sheenColorMap:Ze,sheenRoughnessMap:Ce,specularMap:Mt,specularColorMap:ht,specularIntensityMap:Bt,transmission:He,transmissionMap:U,thicknessMap:pe,gradientMap:$,opaque:w.transparent===!1&&w.blending===Li&&w.alphaToCoverage===!1,alphaMap:Q,alphaTest:be,alphaHash:_e,combine:w.combine,mapUv:Kt&&y(w.map.channel),aoMapUv:F&&y(w.aoMap.channel),lightMapUv:jn&&y(w.lightMap.channel),bumpMapUv:yt&&y(w.bumpMap.channel),normalMapUv:vt&&y(w.normalMap.channel),displacementMapUv:Ve&&y(w.displacementMap.channel),emissiveMapUv:Vt&&y(w.emissiveMap.channel),metalnessMapUv:Be&&y(w.metalnessMap.channel),roughnessMapUv:C&&y(w.roughnessMap.channel),anisotropyMapUv:ye&&y(w.anisotropyMap.channel),clearcoatMapUv:Ae&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:St&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&y(w.sheenRoughnessMap.channel),specularMapUv:Mt&&y(w.specularMap.channel),specularColorMapUv:ht&&y(w.specularColorMap.channel),specularIntensityMapUv:Bt&&y(w.specularIntensityMap.channel),transmissionMapUv:U&&y(w.transmissionMap.channel),thicknessMapUv:pe&&y(w.thicknessMap.channel),alphaMapUv:Q&&y(w.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(vt||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!ee.attributes.uv&&(Kt||Q),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:qe,skinning:z.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:dt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:en,decodeVideoTexture:Kt&&w.map.isVideoTexture===!0&&gt.getTransfer(w.map.colorSpace)===Dt,decodeVideoTextureEmissive:Vt&&w.emissiveMap.isVideoTexture===!0&&gt.getTransfer(w.emissiveMap.colorSpace)===Dt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===tn,flipSided:w.side===bn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:at&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&w.extensions.multiDraw===!0||ft)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Mn.vertexUv1s=c.has(1),Mn.vertexUv2s=c.has(2),Mn.vertexUv3s=c.has(3),c.clear(),Mn}function m(w){let b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(let D in w.defines)b.push(D),b.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(_(b,w),E(b,w),b.push(n.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function _(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function E(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){let b=g[w.type],D;if(b){let B=Ri[b];D=Ks.clone(B.uniforms)}else D=w.uniforms;return D}function L(w,b){let D;for(let B=0,z=h.length;B<z;B++){let W=h[B];if(W.cacheKey===b){D=W,++D.usedTimes;break}}return D===void 0&&(D=new UE(n,b,w,r),h.push(D)),D}function R(w){if(--w.usedTimes===0){let b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function I(w){l.remove(w)}function P(){l.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:v,acquireProgram:L,releaseProgram:R,releaseShaderCache:I,programs:h,dispose:P}}function HE(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function FE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function H0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function F0(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,p,g,y,x){let m=n[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:y,group:x},n[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=p,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=y,m.group=x),e++,m}function a(u,f,p,g,y,x){let m=o(u,f,p,g,y,x);p.transmission>0?i.push(m):p.transparent===!0?s.push(m):t.push(m)}function l(u,f,p,g,y,x){let m=o(u,f,p,g,y,x);p.transmission>0?i.unshift(m):p.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,f){t.length>1&&t.sort(u||FE),i.length>1&&i.sort(f||H0),s.length>1&&s.sort(f||H0)}function h(){for(let u=e,f=n.length;u<f;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function OE(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new F0,n.set(i,[o])):s>=r.length?(o=new F0,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function zE(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new fe};break;case"SpotLight":t={position:new T,direction:new T,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":t={color:new fe,position:new T,halfWidth:new T,halfHeight:new T};break}return n[e.id]=t,t}}}function BE(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var GE=0;function VE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function WE(n){let e=new zE,t=BE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new T);let s=new T,r=new xt,o=new xt;function a(c){let h=0,u=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,y=0,x=0,m=0,_=0,E=0,v=0,L=0,R=0,I=0;c.sort(VE);for(let w=0,b=c.length;w<b;w++){let D=c[w],B=D.color,z=D.intensity,W=D.distance,ee=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=B.r*z,u+=B.g*z,f+=B.b*z;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(D.sh.coefficients[Y],z);I++}else if(D.isDirectionalLight){let Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let re=D.shadow,X=t.get(D);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=ee,i.directionalShadowMatrix[p]=D.shadow.matrix,_++}i.directional[p]=Y,p++}else if(D.isSpotLight){let Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(B).multiplyScalar(z),Y.distance=W,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,i.spot[y]=Y;let re=D.shadow;if(D.map&&(i.spotLightMap[L]=D.map,L++,re.updateMatrices(D),D.castShadow&&R++),i.spotLightMatrix[y]=re.matrix,D.castShadow){let X=t.get(D);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,i.spotShadow[y]=X,i.spotShadowMap[y]=ee,v++}y++}else if(D.isRectAreaLight){let Y=e.get(D);Y.color.copy(B).multiplyScalar(z),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),i.rectArea[x]=Y,x++}else if(D.isPointLight){let Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){let re=D.shadow,X=t.get(D);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,X.shadowCameraNear=re.camera.near,X.shadowCameraFar=re.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=ee,i.pointShadowMatrix[g]=D.shadow.matrix,E++}i.point[g]=Y,g++}else if(D.isHemisphereLight){let Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(z),Y.groundColor.copy(D.groundColor).multiplyScalar(z),i.hemi[m]=Y,m++}}x>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==x||P.hemiLength!==m||P.numDirectionalShadows!==_||P.numPointShadows!==E||P.numSpotShadows!==v||P.numSpotMaps!==L||P.numLightProbes!==I)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=x,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=v+L-R,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=I,P.directionalLength=p,P.pointLength=g,P.spotLength=y,P.rectAreaLength=x,P.hemiLength=m,P.numDirectionalShadows=_,P.numPointShadows=E,P.numSpotShadows=v,P.numSpotMaps=L,P.numLightProbes=I,i.version=GE++)}function l(c,h){let u=0,f=0,p=0,g=0,y=0,x=h.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){let E=c[m];if(E.isDirectionalLight){let v=i.directional[u];v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(x),u++}else if(E.isSpotLight){let v=i.spot[p];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(x),v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(x),p++}else if(E.isRectAreaLight){let v=i.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(x),o.identity(),r.copy(E.matrixWorld),r.premultiply(x),o.extractRotation(r),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(x),f++}else if(E.isHemisphereLight){let v=i.hemi[y];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(x),y++}}}return{setup:a,setupView:l,state:i}}function O0(n){let e=new WE(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function $E(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new O0(n),e.set(s,[a])):r>=o.length?(a=new O0(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var hd=class extends hs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Fy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ud=class extends hs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},XE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qE=`uniform sampler2D shadow_pass;
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
}`;function YE(n,e,t){let i=new Fa,s=new ne,r=new ne,o=new Ht,a=new hd({depthPacking:Oy}),l=new ud,c={},h=t.maxTextureSize,u={[Vs]:bn,[bn]:Vs,[tn]:tn},f=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:XE,fragmentShader:qE}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new At;g.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new le(g,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=j0;let m=this.type;this.render=function(R,I,P){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||R.length===0)return;let w=n.getRenderTarget(),b=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Ii),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let z=m!==is&&this.type===is,W=m===is&&this.type!==is;for(let ee=0,Y=R.length;ee<Y;ee++){let re=R[ee],X=re.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ge=X.getFrameExtents();if(s.multiply(ge),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ge.x),s.x=r.x*ge.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ge.y),s.y=r.y*ge.y,X.mapSize.y=r.y)),X.map===null||z===!0||W===!0){let Oe=this.type!==is?{minFilter:Vn,magFilter:Vn}:{};X.map!==null&&X.map.dispose(),X.map=new Pn(s.x,s.y,Oe),X.map.texture.name=re.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();let Te=X.getViewportCount();for(let Oe=0;Oe<Te;Oe++){let dt=X.getViewport(Oe);o.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),B.viewport(o),X.updateMatrices(re,Oe),i=X.getFrustum(),v(I,P,X.camera,re,this.type)}X.isPointLightShadow!==!0&&this.type===is&&_(X,P),X.needsUpdate=!1}m=this.type,x.needsUpdate=!1,n.setRenderTarget(w,b,D)};function _(R,I){let P=e.update(y);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Pn(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(I,null,P,f,y,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(I,null,P,p,y,null)}function E(R,I,P,w){let b=null,D=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)b=D;else if(b=P.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let B=b.uuid,z=I.uuid,W=c[B];W===void 0&&(W={},c[B]=W);let ee=W[z];ee===void 0&&(ee=b.clone(),W[z]=ee,I.addEventListener("dispose",L)),b=ee}if(b.visible=I.visible,b.wireframe=I.wireframe,w===is?b.side=I.shadowSide!==null?I.shadowSide:I.side:b.side=I.shadowSide!==null?I.shadowSide:u[I.side],b.alphaMap=I.alphaMap,b.alphaTest=I.alphaTest,b.map=I.map,b.clipShadows=I.clipShadows,b.clippingPlanes=I.clippingPlanes,b.clipIntersection=I.clipIntersection,b.displacementMap=I.displacementMap,b.displacementScale=I.displacementScale,b.displacementBias=I.displacementBias,b.wireframeLinewidth=I.wireframeLinewidth,b.linewidth=I.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let B=n.properties.get(b);B.light=P}return b}function v(R,I,P,w,b){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===is)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);let z=e.update(R),W=R.material;if(Array.isArray(W)){let ee=z.groups;for(let Y=0,re=ee.length;Y<re;Y++){let X=ee[Y],ge=W[X.materialIndex];if(ge&&ge.visible){let Te=E(R,ge,w,b);R.onBeforeShadow(n,R,I,P,z,Te,X),n.renderBufferDirect(P,null,z,Te,R,X),R.onAfterShadow(n,R,I,P,z,Te,X)}}}else if(W.visible){let ee=E(R,W,w,b);R.onBeforeShadow(n,R,I,P,z,ee,null),n.renderBufferDirect(P,null,z,ee,R,null),R.onAfterShadow(n,R,I,P,z,ee,null)}}let B=R.children;for(let z=0,W=B.length;z<W;z++)v(B[z],I,P,w,b)}function L(R){R.target.removeEventListener("dispose",L);for(let P in c){let w=c[P],b=R.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}var ZE={[mu]:gu,[xu]:Mu,[yu]:_u,[Mo]:vu,[gu]:mu,[Mu]:xu,[_u]:yu,[vu]:Mo};function KE(n,e){function t(){let U=!1,pe=new Ht,$=null,Q=new Ht(0,0,0,0);return{setMask:function(be){$!==be&&!U&&(n.colorMask(be,be,be,be),$=be)},setLocked:function(be){U=be},setClear:function(be,_e,at,en,Mn){Mn===!0&&(be*=en,_e*=en,at*=en),pe.set(be,_e,at,en),Q.equals(pe)===!1&&(n.clearColor(be,_e,at,en),Q.copy(pe))},reset:function(){U=!1,$=null,Q.set(-1,0,0,0)}}}function i(){let U=!1,pe=!1,$=null,Q=null,be=null;return{setReversed:function(_e){if(pe!==_e){let at=e.get("EXT_clip_control");pe?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT);let en=be;be=null,this.setClear(en)}pe=_e},getReversed:function(){return pe},setTest:function(_e){_e?xe(n.DEPTH_TEST):qe(n.DEPTH_TEST)},setMask:function(_e){$!==_e&&!U&&(n.depthMask(_e),$=_e)},setFunc:function(_e){if(pe&&(_e=ZE[_e]),Q!==_e){switch(_e){case mu:n.depthFunc(n.NEVER);break;case gu:n.depthFunc(n.ALWAYS);break;case xu:n.depthFunc(n.LESS);break;case Mo:n.depthFunc(n.LEQUAL);break;case yu:n.depthFunc(n.EQUAL);break;case vu:n.depthFunc(n.GEQUAL);break;case Mu:n.depthFunc(n.GREATER);break;case _u:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=_e}},setLocked:function(_e){U=_e},setClear:function(_e){be!==_e&&(pe&&(_e=1-_e),n.clearDepth(_e),be=_e)},reset:function(){U=!1,$=null,Q=null,be=null,pe=!1}}}function s(){let U=!1,pe=null,$=null,Q=null,be=null,_e=null,at=null,en=null,Mn=null;return{setTest:function(Ut){U||(Ut?xe(n.STENCIL_TEST):qe(n.STENCIL_TEST))},setMask:function(Ut){pe!==Ut&&!U&&(n.stencilMask(Ut),pe=Ut)},setFunc:function(Ut,hi,Ki){($!==Ut||Q!==hi||be!==Ki)&&(n.stencilFunc(Ut,hi,Ki),$=Ut,Q=hi,be=Ki)},setOp:function(Ut,hi,Ki){(_e!==Ut||at!==hi||en!==Ki)&&(n.stencilOp(Ut,hi,Ki),_e=Ut,at=hi,en=Ki)},setLocked:function(Ut){U=Ut},setClear:function(Ut){Mn!==Ut&&(n.clearStencil(Ut),Mn=Ut)},reset:function(){U=!1,pe=null,$=null,Q=null,be=null,_e=null,at=null,en=null,Mn=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,p=[],g=null,y=!1,x=null,m=null,_=null,E=null,v=null,L=null,R=null,I=new fe(0,0,0),P=0,w=!1,b=null,D=null,B=null,z=null,W=null,ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,re=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=re>=1):X.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=re>=2);let ge=null,Te={},Oe=n.getParameter(n.SCISSOR_BOX),dt=n.getParameter(n.VIEWPORT),Ot=new Ht().fromArray(Oe),K=new Ht().fromArray(dt);function oe(U,pe,$,Q){let be=new Uint8Array(4),_e=n.createTexture();n.bindTexture(U,_e),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let at=0;at<$;at++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(pe,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(pe+at,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return _e}let Ne={};Ne[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),Ne[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ne[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ne[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),xe(n.DEPTH_TEST),o.setFunc(Mo),yt(!1),vt(Gp),xe(n.CULL_FACE),F(Ii);function xe(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function qe(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function rt(U,pe){return u[U]!==pe?(n.bindFramebuffer(U,pe),u[U]=pe,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=pe),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=pe),!0):!1}function ft(U,pe){let $=p,Q=!1;if(U){$=f.get(pe),$===void 0&&($=[],f.set(pe,$));let be=U.textures;if($.length!==be.length||$[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,at=be.length;_e<at;_e++)$[_e]=n.COLOR_ATTACHMENT0+_e;$.length=be.length,Q=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,Q=!0);Q&&n.drawBuffers($)}function Kt(U){return g!==U?(n.useProgram(U),g=U,!0):!1}let wt={[Er]:n.FUNC_ADD,[xy]:n.FUNC_SUBTRACT,[yy]:n.FUNC_REVERSE_SUBTRACT};wt[vy]=n.MIN,wt[My]=n.MAX;let rn={[_y]:n.ZERO,[Ey]:n.ONE,[by]:n.SRC_COLOR,[fu]:n.SRC_ALPHA,[Cy]:n.SRC_ALPHA_SATURATE,[Ay]:n.DST_COLOR,[Sy]:n.DST_ALPHA,[wy]:n.ONE_MINUS_SRC_COLOR,[pu]:n.ONE_MINUS_SRC_ALPHA,[Ry]:n.ONE_MINUS_DST_COLOR,[Ty]:n.ONE_MINUS_DST_ALPHA,[Py]:n.CONSTANT_COLOR,[Iy]:n.ONE_MINUS_CONSTANT_COLOR,[Ly]:n.CONSTANT_ALPHA,[Dy]:n.ONE_MINUS_CONSTANT_ALPHA};function F(U,pe,$,Q,be,_e,at,en,Mn,Ut){if(U===Ii){y===!0&&(qe(n.BLEND),y=!1);return}if(y===!1&&(xe(n.BLEND),y=!0),U!==gy){if(U!==x||Ut!==w){if((m!==Er||v!==Er)&&(n.blendEquation(n.FUNC_ADD),m=Er,v=Er),Ut)switch(U){case Li:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Et:n.blendFunc(n.ONE,n.ONE);break;case Vp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Li:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Et:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Vp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}_=null,E=null,L=null,R=null,I.set(0,0,0),P=0,x=U,w=Ut}return}be=be||pe,_e=_e||$,at=at||Q,(pe!==m||be!==v)&&(n.blendEquationSeparate(wt[pe],wt[be]),m=pe,v=be),($!==_||Q!==E||_e!==L||at!==R)&&(n.blendFuncSeparate(rn[$],rn[Q],rn[_e],rn[at]),_=$,E=Q,L=_e,R=at),(en.equals(I)===!1||Mn!==P)&&(n.blendColor(en.r,en.g,en.b,Mn),I.copy(en),P=Mn),x=U,w=!1}function jn(U,pe){U.side===tn?qe(n.CULL_FACE):xe(n.CULL_FACE);let $=U.side===bn;pe&&($=!$),yt($),U.blending===Li&&U.transparent===!1?F(Ii):F(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let Q=U.stencilWrite;a.setTest(Q),Q&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Vt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?xe(n.SAMPLE_ALPHA_TO_COVERAGE):qe(n.SAMPLE_ALPHA_TO_COVERAGE)}function yt(U){b!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),b=U)}function vt(U){U!==py?(xe(n.CULL_FACE),U!==D&&(U===Gp?n.cullFace(n.BACK):U===my?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):qe(n.CULL_FACE),D=U}function Ve(U){U!==B&&(Y&&n.lineWidth(U),B=U)}function Vt(U,pe,$){U?(xe(n.POLYGON_OFFSET_FILL),(z!==pe||W!==$)&&(n.polygonOffset(pe,$),z=pe,W=$)):qe(n.POLYGON_OFFSET_FILL)}function Be(U){U?xe(n.SCISSOR_TEST):qe(n.SCISSOR_TEST)}function C(U){U===void 0&&(U=n.TEXTURE0+ee-1),ge!==U&&(n.activeTexture(U),ge=U)}function S(U,pe,$){$===void 0&&(ge===null?$=n.TEXTURE0+ee-1:$=ge);let Q=Te[$];Q===void 0&&(Q={type:void 0,texture:void 0},Te[$]=Q),(Q.type!==U||Q.texture!==pe)&&(ge!==$&&(n.activeTexture($),ge=$),n.bindTexture(U,pe||Ne[U]),Q.type=U,Q.texture=pe)}function O(){let U=Te[ge];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function He(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $e(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ze(U){Ot.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Ot.copy(U))}function Ce(U){K.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),K.copy(U))}function Mt(U,pe){let $=c.get(pe);$===void 0&&($=new WeakMap,c.set(pe,$));let Q=$.get(U);Q===void 0&&(Q=n.getUniformBlockIndex(pe,U.name),$.set(U,Q))}function ht(U,pe){let Q=c.get(pe).get(U);l.get(pe)!==Q&&(n.uniformBlockBinding(pe,Q,U.__bindingPointIndex),l.set(pe,Q))}function Bt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ge=null,Te={},u={},f=new WeakMap,p=[],g=null,y=!1,x=null,m=null,_=null,E=null,v=null,L=null,R=null,I=new fe(0,0,0),P=0,w=!1,b=null,D=null,B=null,z=null,W=null,Ot.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:xe,disable:qe,bindFramebuffer:rt,drawBuffers:ft,useProgram:Kt,setBlending:F,setMaterial:jn,setFlipSided:yt,setCullFace:vt,setLineWidth:Ve,setPolygonOffset:Vt,setScissorTest:Be,activeTexture:C,bindTexture:S,unbindTexture:O,compressedTexImage2D:j,compressedTexImage3D:te,texImage2D:Re,texImage3D:$e,updateUBOMapping:Mt,uniformBlockBinding:ht,texStorage2D:St,texStorage3D:ie,texSubImage2D:Z,texSubImage3D:He,compressedTexSubImage2D:ye,compressedTexSubImage3D:Ae,scissor:Ze,viewport:Ce,reset:Bt}}function z0(n,e,t,i){let s=JE(i);switch(t){case sm:return n*e;case om:return n*e;case am:return n*e*2;case qd:return n*e/s.components*s.byteLength;case Yd:return n*e/s.components*s.byteLength;case lm:return n*e*2/s.components*s.byteLength;case Zd:return n*e*2/s.components*s.byteLength;case rm:return n*e*3/s.components*s.byteLength;case gi:return n*e*4/s.components*s.byteLength;case Kd:return n*e*4/s.components*s.byteLength;case Kl:case Jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jl:case Ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Tu:case Ru:return Math.max(n,16)*Math.max(e,8)/4;case Su:case Au:return Math.max(n,8)*Math.max(e,8)/2;case Cu:case Pu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Iu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Lu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Du:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Uu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Nu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ku:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Hu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Fu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ou:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case zu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Bu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Gu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Vu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Wu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case $u:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ec:case Xu:case qu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case cm:case Yu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Zu:case Ku:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function JE(n){switch(n){case cs:case tm:return{byteLength:1,components:1};case Ha:case nm:case Mi:return{byteLength:2,components:1};case $d:case Xd:return{byteLength:2,components:4};case Tr:case Wd:case Pi:return{byteLength:4,components:1};case im:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function jE(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return p?new OffscreenCanvas(C,S):ic("canvas")}function y(C,S,O){let j=1,te=Be(C);if((te.width>O||te.height>O)&&(j=O/Math.max(te.width,te.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Z=Math.floor(j*te.width),He=Math.floor(j*te.height);u===void 0&&(u=g(Z,He));let ye=S?g(Z,He):u;return ye.width=Z,ye.height=He,ye.getContext("2d").drawImage(C,0,0,Z,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Z+"x"+He+")."),ye}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),C;return C}function x(C){return C.generateMipmaps}function m(C){n.generateMipmap(C)}function _(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(C,S,O,j,te=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=S;if(S===n.RED&&(O===n.FLOAT&&(Z=n.R32F),O===n.HALF_FLOAT&&(Z=n.R16F),O===n.UNSIGNED_BYTE&&(Z=n.R8)),S===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.R8UI),O===n.UNSIGNED_SHORT&&(Z=n.R16UI),O===n.UNSIGNED_INT&&(Z=n.R32UI),O===n.BYTE&&(Z=n.R8I),O===n.SHORT&&(Z=n.R16I),O===n.INT&&(Z=n.R32I)),S===n.RG&&(O===n.FLOAT&&(Z=n.RG32F),O===n.HALF_FLOAT&&(Z=n.RG16F),O===n.UNSIGNED_BYTE&&(Z=n.RG8)),S===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RG8UI),O===n.UNSIGNED_SHORT&&(Z=n.RG16UI),O===n.UNSIGNED_INT&&(Z=n.RG32UI),O===n.BYTE&&(Z=n.RG8I),O===n.SHORT&&(Z=n.RG16I),O===n.INT&&(Z=n.RG32I)),S===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),O===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),O===n.UNSIGNED_INT&&(Z=n.RGB32UI),O===n.BYTE&&(Z=n.RGB8I),O===n.SHORT&&(Z=n.RGB16I),O===n.INT&&(Z=n.RGB32I)),S===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),O===n.UNSIGNED_INT&&(Z=n.RGBA32UI),O===n.BYTE&&(Z=n.RGBA8I),O===n.SHORT&&(Z=n.RGBA16I),O===n.INT&&(Z=n.RGBA32I)),S===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),S===n.RGBA){let He=te?Ac:gt.getTransfer(j);O===n.FLOAT&&(Z=n.RGBA32F),O===n.HALF_FLOAT&&(Z=n.RGBA16F),O===n.UNSIGNED_BYTE&&(Z=He===Dt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(C,S){let O;return C?S===null||S===Tr||S===bo?O=n.DEPTH24_STENCIL8:S===Pi?O=n.DEPTH32F_STENCIL8:S===Ha&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Tr||S===bo?O=n.DEPTH_COMPONENT24:S===Pi?O=n.DEPTH_COMPONENT32F:S===Ha&&(O=n.DEPTH_COMPONENT16),O}function L(C,S){return x(C)===!0||C.isFramebufferTexture&&C.minFilter!==Vn&&C.minFilter!==Ci?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function R(C){let S=C.target;S.removeEventListener("dispose",R),P(S),S.isVideoTexture&&h.delete(S)}function I(C){let S=C.target;S.removeEventListener("dispose",I),b(S)}function P(C){let S=i.get(C);if(S.__webglInit===void 0)return;let O=C.source,j=f.get(O);if(j){let te=j[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&w(C),Object.keys(j).length===0&&f.delete(O)}i.remove(C)}function w(C){let S=i.get(C);n.deleteTexture(S.__webglTexture);let O=C.source,j=f.get(O);delete j[S.__cacheKey],o.memory.textures--}function b(C){let S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let te=0;te<S.__webglFramebuffer[j].length;te++)n.deleteFramebuffer(S.__webglFramebuffer[j][te]);else n.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)n.deleteFramebuffer(S.__webglFramebuffer[j]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let O=C.textures;for(let j=0,te=O.length;j<te;j++){let Z=i.get(O[j]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(O[j])}i.remove(C)}let D=0;function B(){D=0}function z(){let C=D;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function W(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function ee(C,S){let O=i.get(C);if(C.isVideoTexture&&Ve(C),C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){let j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(O,C,S);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+S)}function Y(C,S){let O=i.get(C);if(C.version>0&&O.__version!==C.version){K(O,C,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+S)}function re(C,S){let O=i.get(C);if(C.version>0&&O.__version!==C.version){K(O,C,S);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+S)}function X(C,S){let O=i.get(C);if(C.version>0&&O.__version!==C.version){oe(O,C,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+S)}let ge={[ls]:n.REPEAT,[wr]:n.CLAMP_TO_EDGE,[wu]:n.MIRRORED_REPEAT},Te={[Vn]:n.NEAREST,[Hy]:n.NEAREST_MIPMAP_NEAREST,[_l]:n.NEAREST_MIPMAP_LINEAR,[Ci]:n.LINEAR,[Dh]:n.LINEAR_MIPMAP_NEAREST,[Sr]:n.LINEAR_MIPMAP_LINEAR},Oe={[By]:n.NEVER,[qy]:n.ALWAYS,[Gy]:n.LESS,[um]:n.LEQUAL,[Vy]:n.EQUAL,[Xy]:n.GEQUAL,[Wy]:n.GREATER,[$y]:n.NOTEQUAL};function dt(C,S){if(S.type===Pi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ci||S.magFilter===Dh||S.magFilter===_l||S.magFilter===Sr||S.minFilter===Ci||S.minFilter===Dh||S.minFilter===_l||S.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,ge[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,ge[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,ge[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Te[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Te[S.minFilter]),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Oe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Vn||S.minFilter!==_l&&S.minFilter!==Sr||S.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Ot(C,S){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",R));let j=S.source,te=f.get(j);te===void 0&&(te={},f.set(j,te));let Z=W(S);if(Z!==C.__cacheKey){te[Z]===void 0&&(te[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),te[Z].usedTimes++;let He=te[C.__cacheKey];He!==void 0&&(te[C.__cacheKey].usedTimes--,He.usedTimes===0&&w(S)),C.__cacheKey=Z,C.__webglTexture=te[Z].texture}return O}function K(C,S,O){let j=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=n.TEXTURE_3D);let te=Ot(C,S),Z=S.source;t.bindTexture(j,C.__webglTexture,n.TEXTURE0+O);let He=i.get(Z);if(Z.version!==He.__version||te===!0){t.activeTexture(n.TEXTURE0+O);let ye=gt.getPrimaries(gt.workingColorSpace),Ae=S.colorSpace===zs?null:gt.getPrimaries(S.colorSpace),St=S.colorSpace===zs||ye===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let ie=y(S.image,!1,s.maxTextureSize);ie=Vt(S,ie);let Re=r.convert(S.format,S.colorSpace),$e=r.convert(S.type),Ze=E(S.internalFormat,Re,$e,S.colorSpace,S.isVideoTexture);dt(j,S);let Ce,Mt=S.mipmaps,ht=S.isVideoTexture!==!0,Bt=He.__version===void 0||te===!0,U=Z.dataReady,pe=L(S,ie);if(S.isDepthTexture)Ze=v(S.format===wo,S.type),Bt&&(ht?t.texStorage2D(n.TEXTURE_2D,1,Ze,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Ze,ie.width,ie.height,0,Re,$e,null));else if(S.isDataTexture)if(Mt.length>0){ht&&Bt&&t.texStorage2D(n.TEXTURE_2D,pe,Ze,Mt[0].width,Mt[0].height);for(let $=0,Q=Mt.length;$<Q;$++)Ce=Mt[$],ht?U&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,Ce.width,Ce.height,Re,$e,Ce.data):t.texImage2D(n.TEXTURE_2D,$,Ze,Ce.width,Ce.height,0,Re,$e,Ce.data);S.generateMipmaps=!1}else ht?(Bt&&t.texStorage2D(n.TEXTURE_2D,pe,Ze,ie.width,ie.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,Re,$e,ie.data)):t.texImage2D(n.TEXTURE_2D,0,Ze,ie.width,ie.height,0,Re,$e,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ht&&Bt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Ze,Mt[0].width,Mt[0].height,ie.depth);for(let $=0,Q=Mt.length;$<Q;$++)if(Ce=Mt[$],S.format!==gi)if(Re!==null)if(ht){if(U)if(S.layerUpdates.size>0){let be=z0(Ce.width,Ce.height,S.format,S.type);for(let _e of S.layerUpdates){let at=Ce.data.subarray(_e*be/Ce.data.BYTES_PER_ELEMENT,(_e+1)*be/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,_e,Ce.width,Ce.height,1,Re,at)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Ce.width,Ce.height,ie.depth,Re,Ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Ze,Ce.width,Ce.height,ie.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Ce.width,Ce.height,ie.depth,Re,$e,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,Ze,Ce.width,Ce.height,ie.depth,0,Re,$e,Ce.data)}else{ht&&Bt&&t.texStorage2D(n.TEXTURE_2D,pe,Ze,Mt[0].width,Mt[0].height);for(let $=0,Q=Mt.length;$<Q;$++)Ce=Mt[$],S.format!==gi?Re!==null?ht?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,Ce.width,Ce.height,Re,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,$,Ze,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?U&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,Ce.width,Ce.height,Re,$e,Ce.data):t.texImage2D(n.TEXTURE_2D,$,Ze,Ce.width,Ce.height,0,Re,$e,Ce.data)}else if(S.isDataArrayTexture)if(ht){if(Bt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Ze,ie.width,ie.height,ie.depth),U)if(S.layerUpdates.size>0){let $=z0(ie.width,ie.height,S.format,S.type);for(let Q of S.layerUpdates){let be=ie.data.subarray(Q*$/ie.data.BYTES_PER_ELEMENT,(Q+1)*$/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,ie.width,ie.height,1,Re,$e,be)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Re,$e,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ze,ie.width,ie.height,ie.depth,0,Re,$e,ie.data);else if(S.isData3DTexture)ht?(Bt&&t.texStorage3D(n.TEXTURE_3D,pe,Ze,ie.width,ie.height,ie.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Re,$e,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Ze,ie.width,ie.height,ie.depth,0,Re,$e,ie.data);else if(S.isFramebufferTexture){if(Bt)if(ht)t.texStorage2D(n.TEXTURE_2D,pe,Ze,ie.width,ie.height);else{let $=ie.width,Q=ie.height;for(let be=0;be<pe;be++)t.texImage2D(n.TEXTURE_2D,be,Ze,$,Q,0,Re,$e,null),$>>=1,Q>>=1}}else if(Mt.length>0){if(ht&&Bt){let $=Be(Mt[0]);t.texStorage2D(n.TEXTURE_2D,pe,Ze,$.width,$.height)}for(let $=0,Q=Mt.length;$<Q;$++)Ce=Mt[$],ht?U&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,Re,$e,Ce):t.texImage2D(n.TEXTURE_2D,$,Ze,Re,$e,Ce);S.generateMipmaps=!1}else if(ht){if(Bt){let $=Be(ie);t.texStorage2D(n.TEXTURE_2D,pe,Ze,$.width,$.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,$e,ie)}else t.texImage2D(n.TEXTURE_2D,0,Ze,Re,$e,ie);x(S)&&m(j),He.__version=Z.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function oe(C,S,O){if(S.image.length!==6)return;let j=Ot(C,S),te=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+O);let Z=i.get(te);if(te.version!==Z.__version||j===!0){t.activeTexture(n.TEXTURE0+O);let He=gt.getPrimaries(gt.workingColorSpace),ye=S.colorSpace===zs?null:gt.getPrimaries(S.colorSpace),Ae=S.colorSpace===zs||He===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let St=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,Re=[];for(let Q=0;Q<6;Q++)!St&&!ie?Re[Q]=y(S.image[Q],!0,s.maxCubemapSize):Re[Q]=ie?S.image[Q].image:S.image[Q],Re[Q]=Vt(S,Re[Q]);let $e=Re[0],Ze=r.convert(S.format,S.colorSpace),Ce=r.convert(S.type),Mt=E(S.internalFormat,Ze,Ce,S.colorSpace),ht=S.isVideoTexture!==!0,Bt=Z.__version===void 0||j===!0,U=te.dataReady,pe=L(S,$e);dt(n.TEXTURE_CUBE_MAP,S);let $;if(St){ht&&Bt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Mt,$e.width,$e.height);for(let Q=0;Q<6;Q++){$=Re[Q].mipmaps;for(let be=0;be<$.length;be++){let _e=$[be];S.format!==gi?Ze!==null?ht?U&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,0,0,_e.width,_e.height,Ze,_e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,Mt,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ht?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,0,0,_e.width,_e.height,Ze,Ce,_e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,Mt,_e.width,_e.height,0,Ze,Ce,_e.data)}}}else{if($=S.mipmaps,ht&&Bt){$.length>0&&pe++;let Q=Be(Re[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Mt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ie){ht?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Re[Q].width,Re[Q].height,Ze,Ce,Re[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Mt,Re[Q].width,Re[Q].height,0,Ze,Ce,Re[Q].data);for(let be=0;be<$.length;be++){let at=$[be].image[Q].image;ht?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,0,0,at.width,at.height,Ze,Ce,at.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,Mt,at.width,at.height,0,Ze,Ce,at.data)}}else{ht?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ze,Ce,Re[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Mt,Ze,Ce,Re[Q]);for(let be=0;be<$.length;be++){let _e=$[be];ht?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,0,0,Ze,Ce,_e.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,Mt,Ze,Ce,_e.image[Q])}}}x(S)&&m(n.TEXTURE_CUBE_MAP),Z.__version=te.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Ne(C,S,O,j,te,Z){let He=r.convert(O.format,O.colorSpace),ye=r.convert(O.type),Ae=E(O.internalFormat,He,ye,O.colorSpace),St=i.get(S),ie=i.get(O);if(ie.__renderTarget=S,!St.__hasExternalTextures){let Re=Math.max(1,S.width>>Z),$e=Math.max(1,S.height>>Z);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,Z,Ae,Re,$e,S.depth,0,He,ye,null):t.texImage2D(te,Z,Ae,Re,$e,0,He,ye,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),vt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,te,ie.__webglTexture,0,yt(S)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,te,ie.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(C,S,O){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer){let j=S.depthTexture,te=j&&j.isDepthTexture?j.type:null,Z=v(S.stencilBuffer,te),He=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=yt(S);vt(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,Z,S.width,S.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,Z,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Z,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,He,n.RENDERBUFFER,C)}else{let j=S.textures;for(let te=0;te<j.length;te++){let Z=j[te],He=r.convert(Z.format,Z.colorSpace),ye=r.convert(Z.type),Ae=E(Z.internalFormat,He,ye,Z.colorSpace),St=yt(S);O&&vt(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,St,Ae,S.width,S.height):vt(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St,Ae,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function qe(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=i.get(S.depthTexture);j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ee(S.depthTexture,0);let te=j.__webglTexture,Z=yt(S);if(S.depthTexture.format===xo)vt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(S.depthTexture.format===wo)vt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function rt(C){let S=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let j=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){let te=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",te)};j.addEventListener("dispose",te),S.__depthDisposeCallback=te}S.__boundDepthTexture=j}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");qe(S.__webglFramebuffer,C)}else if(O){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=n.createRenderbuffer(),xe(S.__webglDepthbuffer[j],C,!1);else{let te=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),xe(S.__webglDepthbuffer,C,!1);else{let j=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,te)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ft(C,S,O){let j=i.get(C);S!==void 0&&Ne(j.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&rt(C)}function Kt(C){let S=C.texture,O=i.get(C),j=i.get(S);C.addEventListener("dispose",I);let te=C.textures,Z=C.isWebGLCubeRenderTarget===!0,He=te.length>1;if(He||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=S.version,o.memory.textures++),Z){O.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[ye]=[];for(let Ae=0;Ae<S.mipmaps.length;Ae++)O.__webglFramebuffer[ye][Ae]=n.createFramebuffer()}else O.__webglFramebuffer[ye]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let ye=0;ye<S.mipmaps.length;ye++)O.__webglFramebuffer[ye]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(He)for(let ye=0,Ae=te.length;ye<Ae;ye++){let St=i.get(te[ye]);St.__webglTexture===void 0&&(St.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&vt(C)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ye=0;ye<te.length;ye++){let Ae=te[ye];O.__webglColorRenderbuffer[ye]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ye]);let St=r.convert(Ae.format,Ae.colorSpace),ie=r.convert(Ae.type),Re=E(Ae.internalFormat,St,ie,Ae.colorSpace,C.isXRRenderTarget===!0),$e=yt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,$e,Re,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,O.__webglColorRenderbuffer[ye])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),xe(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),dt(n.TEXTURE_CUBE_MAP,S);for(let ye=0;ye<6;ye++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ae=0;Ae<S.mipmaps.length;Ae++)Ne(O.__webglFramebuffer[ye][Ae],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ae);else Ne(O.__webglFramebuffer[ye],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);x(S)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let ye=0,Ae=te.length;ye<Ae;ye++){let St=te[ye],ie=i.get(St);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),dt(n.TEXTURE_2D,St),Ne(O.__webglFramebuffer,C,St,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,0),x(St)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let ye=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ye=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ye,j.__webglTexture),dt(ye,S),S.mipmaps&&S.mipmaps.length>0)for(let Ae=0;Ae<S.mipmaps.length;Ae++)Ne(O.__webglFramebuffer[Ae],C,S,n.COLOR_ATTACHMENT0,ye,Ae);else Ne(O.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,ye,0);x(S)&&m(ye),t.unbindTexture()}C.depthBuffer&&rt(C)}function wt(C){let S=C.textures;for(let O=0,j=S.length;O<j;O++){let te=S[O];if(x(te)){let Z=_(C),He=i.get(te).__webglTexture;t.bindTexture(Z,He),m(Z),t.unbindTexture()}}}let rn=[],F=[];function jn(C){if(C.samples>0){if(vt(C)===!1){let S=C.textures,O=C.width,j=C.height,te=n.COLOR_BUFFER_BIT,Z=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,He=i.get(C),ye=S.length>1;if(ye)for(let Ae=0;Ae<S.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,He.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,He.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Ae=0;Ae<S.length;Ae++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),ye){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,He.__webglColorRenderbuffer[Ae]);let St=i.get(S[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,St,0)}n.blitFramebuffer(0,0,O,j,0,0,O,j,te,n.NEAREST),l===!0&&(rn.length=0,F.length=0,rn.push(n.COLOR_ATTACHMENT0+Ae),C.depthBuffer&&C.resolveDepthBuffer===!1&&(rn.push(Z),F.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,F)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,rn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ye)for(let Ae=0;Ae<S.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,He.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,He.__webglColorRenderbuffer[Ae]);let St=i.get(S[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,He.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,St,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let S=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function yt(C){return Math.min(s.maxSamples,C.samples)}function vt(C){let S=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ve(C){let S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Vt(C,S){let O=C.colorSpace,j=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Do&&O!==zs&&(gt.getTransfer(O)===Dt?(j!==gi||te!==cs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function Be(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=B,this.setTexture2D=ee,this.setTexture2DArray=Y,this.setTexture3D=re,this.setTextureCube=X,this.rebindTextures=ft,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=jn,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=vt}function QE(n,e){function t(i,s=zs){let r,o=gt.getTransfer(s);if(i===cs)return n.UNSIGNED_BYTE;if(i===$d)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===im)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===tm)return n.BYTE;if(i===nm)return n.SHORT;if(i===Ha)return n.UNSIGNED_SHORT;if(i===Wd)return n.INT;if(i===Tr)return n.UNSIGNED_INT;if(i===Pi)return n.FLOAT;if(i===Mi)return n.HALF_FLOAT;if(i===sm)return n.ALPHA;if(i===rm)return n.RGB;if(i===gi)return n.RGBA;if(i===om)return n.LUMINANCE;if(i===am)return n.LUMINANCE_ALPHA;if(i===xo)return n.DEPTH_COMPONENT;if(i===wo)return n.DEPTH_STENCIL;if(i===qd)return n.RED;if(i===Yd)return n.RED_INTEGER;if(i===lm)return n.RG;if(i===Zd)return n.RG_INTEGER;if(i===Kd)return n.RGBA_INTEGER;if(i===Kl||i===Jl||i===jl||i===Ql)if(o===Dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Kl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Jl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ql)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Kl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Jl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ql)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Su||i===Tu||i===Au||i===Ru)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Su)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Au)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ru)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cu||i===Pu||i===Iu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Cu||i===Pu)return o===Dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Iu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Lu||i===Du||i===Uu||i===Nu||i===ku||i===Hu||i===Fu||i===Ou||i===zu||i===Bu||i===Gu||i===Vu||i===Wu||i===$u)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Lu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Du)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Uu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ku)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ou)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$u)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ec||i===Xu||i===qu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ec)return o===Dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cm||i===Yu||i===Zu||i===Ku)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ec)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Yu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ku)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var dd=class extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},we=class extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},e2={type:"move"},Ua=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new we,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new we,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new we,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let x=t.getJointPose(y,i),m=this._getHandJoint(c,y);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(e2)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new we;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},t2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n2=`
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

}`,fd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new kn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new nn({vertexShader:t2,fragmentShader:n2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new le(new Wn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},pd=class extends Ws{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null,y=new fd,x=t.getContextAttributes(),m=null,_=null,E=[],v=[],L=new ne,R=null,I=new on;I.viewport=new Ht;let P=new on;P.viewport=new Ht;let w=[I,P],b=new dd,D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let oe=E[K];return oe===void 0&&(oe=new Ua,E[K]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(K){let oe=E[K];return oe===void 0&&(oe=new Ua,E[K]=oe),oe.getGripSpace()},this.getHand=function(K){let oe=E[K];return oe===void 0&&(oe=new Ua,E[K]=oe),oe.getHandSpace()};function z(K){let oe=v.indexOf(K.inputSource);if(oe===-1)return;let Ne=E[oe];Ne!==void 0&&(Ne.update(K.inputSource,K.frame,c||o),Ne.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",ee);for(let K=0;K<E.length;K++){let oe=v[K];oe!==null&&(v[K]=null,E[K].disconnect(oe))}D=null,B=null,y.reset(),e.setRenderTarget(m),p=null,f=null,u=null,s=null,_=null,Ot.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",W),s.addEventListener("inputsourceschange",ee),x.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){let oe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Pn(p.framebufferWidth,p.framebufferHeight,{format:gi,type:cs,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let oe=null,Ne=null,xe=null;x.depth&&(xe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=x.stencil?wo:xo,Ne=x.stencil?bo:Tr);let qe={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(qe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Pn(f.textureWidth,f.textureHeight,{format:gi,type:cs,depthTexture:new dc(f.textureWidth,f.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ot.setContext(s),Ot.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ee(K){for(let oe=0;oe<K.removed.length;oe++){let Ne=K.removed[oe],xe=v.indexOf(Ne);xe>=0&&(v[xe]=null,E[xe].disconnect(Ne))}for(let oe=0;oe<K.added.length;oe++){let Ne=K.added[oe],xe=v.indexOf(Ne);if(xe===-1){for(let rt=0;rt<E.length;rt++)if(rt>=v.length){v.push(Ne),xe=rt;break}else if(v[rt]===null){v[rt]=Ne,xe=rt;break}if(xe===-1)break}let qe=E[xe];qe&&qe.connect(Ne)}}let Y=new T,re=new T;function X(K,oe,Ne){Y.setFromMatrixPosition(oe.matrixWorld),re.setFromMatrixPosition(Ne.matrixWorld);let xe=Y.distanceTo(re),qe=oe.projectionMatrix.elements,rt=Ne.projectionMatrix.elements,ft=qe[14]/(qe[10]-1),Kt=qe[14]/(qe[10]+1),wt=(qe[9]+1)/qe[5],rn=(qe[9]-1)/qe[5],F=(qe[8]-1)/qe[0],jn=(rt[8]+1)/rt[0],yt=ft*F,vt=ft*jn,Ve=xe/(-F+jn),Vt=Ve*-F;if(oe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Vt),K.translateZ(Ve),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),qe[10]===-1)K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let Be=ft+Ve,C=Kt+Ve,S=yt-Vt,O=vt+(xe-Vt),j=wt*Kt/C*Be,te=rn*Kt/C*Be;K.projectionMatrix.makePerspective(S,O,j,te,Be,C),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ge(K,oe){oe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(oe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let oe=K.near,Ne=K.far;y.texture!==null&&(y.depthNear>0&&(oe=y.depthNear),y.depthFar>0&&(Ne=y.depthFar)),b.near=P.near=I.near=oe,b.far=P.far=I.far=Ne,(D!==b.near||B!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),D=b.near,B=b.far),I.layers.mask=K.layers.mask|2,P.layers.mask=K.layers.mask|4,b.layers.mask=I.layers.mask|P.layers.mask;let xe=K.parent,qe=b.cameras;ge(b,xe);for(let rt=0;rt<qe.length;rt++)ge(qe[rt],xe);qe.length===2?X(b,I,P):b.projectionMatrix.copy(I.projectionMatrix),Te(K,b,xe)};function Te(K,oe,Ne){Ne===null?K.matrix.copy(oe.matrixWorld):(K.matrix.copy(Ne.matrixWorld),K.matrix.invert(),K.matrix.multiply(oe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=So*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(b)};let Oe=null;function dt(K,oe){if(h=oe.getViewerPose(c||o),g=oe,h!==null){let Ne=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let xe=!1;Ne.length!==b.cameras.length&&(b.cameras.length=0,xe=!0);for(let rt=0;rt<Ne.length;rt++){let ft=Ne[rt],Kt=null;if(p!==null)Kt=p.getViewport(ft);else{let rn=u.getViewSubImage(f,ft);Kt=rn.viewport,rt===0&&(e.setRenderTargetTextures(_,rn.colorTexture,f.ignoreDepthValues?void 0:rn.depthStencilTexture),e.setRenderTarget(_))}let wt=w[rt];wt===void 0&&(wt=new on,wt.layers.enable(rt),wt.viewport=new Ht,w[rt]=wt),wt.matrix.fromArray(ft.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(ft.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),rt===0&&(b.matrix.copy(wt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),xe===!0&&b.cameras.push(wt)}let qe=s.enabledFeatures;if(qe&&qe.includes("depth-sensing")){let rt=u.getDepthInformation(Ne[0]);rt&&rt.isValid&&rt.texture&&y.init(e,rt,s.renderState)}}for(let Ne=0;Ne<E.length;Ne++){let xe=v[Ne],qe=E[Ne];xe!==null&&qe!==void 0&&qe.update(xe,oe,c||o)}Oe&&Oe(K,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}let Ot=new mm;Ot.setAnimationLoop(dt),this.setAnimationLoop=function(K){Oe=K},this.dispose=function(){}}},Mr=new yn,i2=new xt;function s2(n,e){function t(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function i(x,m){m.color.getRGB(x.fogColor.value,pm(n)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function s(x,m,_,E,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(x,m):m.isMeshToonMaterial?(r(x,m),u(x,m)):m.isMeshPhongMaterial?(r(x,m),h(x,m)):m.isMeshStandardMaterial?(r(x,m),f(x,m),m.isMeshPhysicalMaterial&&p(x,m,v)):m.isMeshMatcapMaterial?(r(x,m),g(x,m)):m.isMeshDepthMaterial?r(x,m):m.isMeshDistanceMaterial?(r(x,m),y(x,m)):m.isMeshNormalMaterial?r(x,m):m.isLineBasicMaterial?(o(x,m),m.isLineDashedMaterial&&a(x,m)):m.isPointsMaterial?l(x,m,_,E):m.isSpriteMaterial?c(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,t(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===bn&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,t(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===bn&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,t(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,t(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);let _=e.get(m),E=_.envMap,v=_.envMapRotation;E&&(x.envMap.value=E,Mr.copy(v),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),x.envMapRotation.value.setFromMatrix4(i2.makeRotationFromEuler(Mr)),x.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,x.aoMapTransform))}function o(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform))}function a(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function l(x,m,_,E){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*_,x.scale.value=E*.5,m.map&&(x.map.value=m.map,t(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function c(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function h(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function u(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function f(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function p(x,m,_){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===bn&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=_.texture,x.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,m){m.matcap&&(x.matcap.value=m.matcap)}function y(x,m){let _=e.get(m).light;x.referencePosition.value.setFromMatrixPosition(_.matrixWorld),x.nearDistance.value=_.shadow.camera.near,x.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function r2(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,E){let v=E.program;i.uniformBlockBinding(_,v)}function c(_,E){let v=s[_.id];v===void 0&&(g(_),v=h(_),s[_.id]=v,_.addEventListener("dispose",x));let L=E.program;i.updateUBOMapping(_,L);let R=e.render.frame;r[_.id]!==R&&(f(_),r[_.id]=R)}function h(_){let E=u();_.__bindingPointIndex=E;let v=n.createBuffer(),L=_.__size,R=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,L,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,v),v}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let E=s[_.id],v=_.uniforms,L=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let R=0,I=v.length;R<I;R++){let P=Array.isArray(v[R])?v[R]:[v[R]];for(let w=0,b=P.length;w<b;w++){let D=P[w];if(p(D,R,w,L)===!0){let B=D.__offset,z=Array.isArray(D.value)?D.value:[D.value],W=0;for(let ee=0;ee<z.length;ee++){let Y=z[ee],re=y(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,B+W,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,W),W+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,E,v,L){let R=_.value,I=E+"_"+v;if(L[I]===void 0)return typeof R=="number"||typeof R=="boolean"?L[I]=R:L[I]=R.clone(),!0;{let P=L[I];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return L[I]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function g(_){let E=_.uniforms,v=0,L=16;for(let I=0,P=E.length;I<P;I++){let w=Array.isArray(E[I])?E[I]:[E[I]];for(let b=0,D=w.length;b<D;b++){let B=w[b],z=Array.isArray(B.value)?B.value:[B.value];for(let W=0,ee=z.length;W<ee;W++){let Y=z[W],re=y(Y),X=v%L,ge=X%re.boundary,Te=X+ge;v+=ge,Te!==0&&L-Te<re.storage&&(v+=L-Te),B.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=re.storage}}}let R=v%L;return R>0&&(v+=L-R),_.__size=v,_.__cache={},this}function y(_){let E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),E}function x(_){let E=_.target;E.removeEventListener("dispose",x);let v=o.indexOf(E.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Co=class{constructor(e={}){let{canvas:t=hv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),y=new Int32Array(4),x=null,m=null,_=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this.toneMapping=Gs,this.toneMappingExposure=1;let v=this,L=!1,R=0,I=0,P=null,w=-1,b=null,D=new Ht,B=new Ht,z=null,W=new fe(0),ee=0,Y=t.width,re=t.height,X=1,ge=null,Te=null,Oe=new Ht(0,0,Y,re),dt=new Ht(0,0,Y,re),Ot=!1,K=new Fa,oe=!1,Ne=!1,xe=new xt,qe=new xt,rt=new T,ft=new Ht,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},wt=!1;function rn(){return P===null?X:1}let F=i;function jn(A,k){return t.getContext(A,k)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hd}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",_e,!1),F===null){let k="webgl2";if(F=jn(k,A),F===null)throw jn(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let yt,vt,Ve,Vt,Be,C,S,O,j,te,Z,He,ye,Ae,St,ie,Re,$e,Ze,Ce,Mt,ht,Bt,U;function pe(){yt=new __(F),yt.init(),ht=new QE(F,yt),vt=new m_(F,yt,e,ht),Ve=new KE(F,yt),vt.reverseDepthBuffer&&f&&Ve.buffers.depth.setReversed(!0),Vt=new w_(F),Be=new HE,C=new jE(F,yt,Ve,Be,vt,ht,Vt),S=new x_(v),O=new M_(v),j=new Iv(F),Bt=new f_(F,j),te=new E_(F,j,Vt,Bt),Z=new T_(F,te,j,Vt),Ze=new S_(F,vt,C),ie=new g_(Be),He=new kE(v,S,O,yt,vt,Bt,ie),ye=new s2(v,Be),Ae=new OE,St=new $E(yt),$e=new d_(v,S,O,Ve,Z,p,l),Re=new YE(v,Z,vt),U=new r2(F,Vt,vt,Ve),Ce=new p_(F,yt,Vt),Mt=new b_(F,yt,Vt),Vt.programs=He.programs,v.capabilities=vt,v.extensions=yt,v.properties=Be,v.renderLists=Ae,v.shadowMap=Re,v.state=Ve,v.info=Vt}pe();let $=new pd(v,F);this.xr=$,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let A=yt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=yt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(Y,re,!1))},this.getSize=function(A){return A.set(Y,re)},this.setSize=function(A,k,G=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=A,re=k,t.width=Math.floor(A*X),t.height=Math.floor(k*X),G===!0&&(t.style.width=A+"px",t.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(Y*X,re*X).floor()},this.setDrawingBufferSize=function(A,k,G){Y=A,re=k,X=G,t.width=Math.floor(A*G),t.height=Math.floor(k*G),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(Oe)},this.setViewport=function(A,k,G,V){A.isVector4?Oe.set(A.x,A.y,A.z,A.w):Oe.set(A,k,G,V),Ve.viewport(D.copy(Oe).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(dt)},this.setScissor=function(A,k,G,V){A.isVector4?dt.set(A.x,A.y,A.z,A.w):dt.set(A,k,G,V),Ve.scissor(B.copy(dt).multiplyScalar(X).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(A){Ve.setScissorTest(Ot=A)},this.setOpaqueSort=function(A){ge=A},this.setTransparentSort=function(A){Te=A},this.getClearColor=function(A){return A.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(A=!0,k=!0,G=!0){let V=0;if(A){let H=!1;if(P!==null){let se=P.texture.format;H=se===Kd||se===Zd||se===Yd}if(H){let se=P.texture.type,Ee=se===cs||se===Tr||se===Ha||se===bo||se===$d||se===Xd,Ie=$e.getClearColor(),Le=$e.getClearAlpha(),Qe=Ie.r,lt=Ie.g,De=Ie.b;Ee?(g[0]=Qe,g[1]=lt,g[2]=De,g[3]=Le,F.clearBufferuiv(F.COLOR,0,g)):(y[0]=Qe,y[1]=lt,y[2]=De,y[3]=Le,F.clearBufferiv(F.COLOR,0,y))}else V|=F.COLOR_BUFFER_BIT}k&&(V|=F.DEPTH_BUFFER_BIT),G&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Ae.dispose(),St.dispose(),Be.dispose(),S.dispose(),O.dispose(),Z.dispose(),Bt.dispose(),U.dispose(),He.dispose(),$.dispose(),$.removeEventListener("sessionstart",Up),$.removeEventListener("sessionend",Np),pr.stop()};function Q(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let A=Vt.autoReset,k=Re.enabled,G=Re.autoUpdate,V=Re.needsUpdate,H=Re.type;pe(),Vt.autoReset=A,Re.enabled=k,Re.autoUpdate=G,Re.needsUpdate=V,Re.type=H}function _e(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function at(A){let k=A.target;k.removeEventListener("dispose",at),en(k)}function en(A){Mn(A),Be.remove(A)}function Mn(A){let k=Be.get(A).programs;k!==void 0&&(k.forEach(function(G){He.releaseProgram(G)}),A.isShaderMaterial&&He.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,G,V,H,se){k===null&&(k=Kt);let Ee=H.isMesh&&H.matrixWorld.determinant()<0,Ie=uy(A,k,G,V,H);Ve.setMaterial(V,Ee);let Le=G.index,Qe=1;if(V.wireframe===!0){if(Le=te.getWireframeAttribute(G),Le===void 0)return;Qe=2}let lt=G.drawRange,De=G.attributes.position,Tt=lt.start*Qe,Gt=(lt.start+lt.count)*Qe;se!==null&&(Tt=Math.max(Tt,se.start*Qe),Gt=Math.min(Gt,(se.start+se.count)*Qe)),Le!==null?(Tt=Math.max(Tt,0),Gt=Math.min(Gt,Le.count)):De!=null&&(Tt=Math.max(Tt,0),Gt=Math.min(Gt,De.count));let Wt=Gt-Tt;if(Wt<0||Wt===1/0)return;Bt.setup(H,V,Ie,G,Le);let Nn,It=Ce;if(Le!==null&&(Nn=j.get(Le),It=Mt,It.setIndex(Nn)),H.isMesh)V.wireframe===!0?(Ve.setLineWidth(V.wireframeLinewidth*rn()),It.setMode(F.LINES)):It.setMode(F.TRIANGLES);else if(H.isLine){let Fe=V.linewidth;Fe===void 0&&(Fe=1),Ve.setLineWidth(Fe*rn()),H.isLineSegments?It.setMode(F.LINES):H.isLineLoop?It.setMode(F.LINE_LOOP):It.setMode(F.LINE_STRIP)}else H.isPoints?It.setMode(F.POINTS):H.isSprite&&It.setMode(F.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)It.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))It.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Fe=H._multiDrawStarts,Ji=H._multiDrawCounts,Lt=H._multiDrawCount,ui=Le?j.get(Le).bytesPerElement:1,Zr=Be.get(V).currentProgram.getUniforms();for(let zn=0;zn<Lt;zn++)Zr.setValue(F,"_gl_DrawID",zn),It.render(Fe[zn]/ui,Ji[zn])}else if(H.isInstancedMesh)It.renderInstances(Tt,Wt,H.count);else if(G.isInstancedBufferGeometry){let Fe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ji=Math.min(G.instanceCount,Fe);It.renderInstances(Tt,Wt,Ji)}else It.render(Tt,Wt)};function Ut(A,k,G){A.transparent===!0&&A.side===tn&&A.forceSinglePass===!1?(A.side=bn,A.needsUpdate=!0,Ml(A,k,G),A.side=Vs,A.needsUpdate=!0,Ml(A,k,G),A.side=tn):Ml(A,k,G)}this.compile=function(A,k,G=null){G===null&&(G=A),m=St.get(G),m.init(k),E.push(m),G.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),A!==G&&A.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();let V=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let se=H.material;if(se)if(Array.isArray(se))for(let Ee=0;Ee<se.length;Ee++){let Ie=se[Ee];Ut(Ie,G,H),V.add(Ie)}else Ut(se,G,H),V.add(se)}),E.pop(),m=null,V},this.compileAsync=function(A,k,G=null){let V=this.compile(A,k,G);return new Promise(H=>{function se(){if(V.forEach(function(Ee){Be.get(Ee).currentProgram.isReady()&&V.delete(Ee)}),V.size===0){H(A);return}setTimeout(se,10)}yt.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let hi=null;function Ki(A){hi&&hi(A)}function Up(){pr.stop()}function Np(){pr.start()}let pr=new mm;pr.setAnimationLoop(Ki),typeof self<"u"&&pr.setContext(self),this.setAnimationLoop=function(A){hi=A,$.setAnimationLoop(A),A===null?pr.stop():pr.start()},$.addEventListener("sessionstart",Up),$.addEventListener("sessionend",Np),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(k),k=$.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,k,P),m=St.get(A,E.length),m.init(k),E.push(m),qe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),K.setFromProjectionMatrix(qe),Ne=this.localClippingEnabled,oe=ie.init(this.clippingPlanes,Ne),x=Ae.get(A,_.length),x.init(),_.push(x),$.enabled===!0&&$.isPresenting===!0){let se=v.xr.getDepthSensingMesh();se!==null&&Lh(se,k,-1/0,v.sortObjects)}Lh(A,k,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(ge,Te),wt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,wt&&$e.addToRenderList(x,A),this.info.render.frame++,oe===!0&&ie.beginShadows();let G=m.state.shadowsArray;Re.render(G,A,k),oe===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=x.opaque,H=x.transmissive;if(m.setupLights(),k.isArrayCamera){let se=k.cameras;if(H.length>0)for(let Ee=0,Ie=se.length;Ee<Ie;Ee++){let Le=se[Ee];Hp(V,H,A,Le)}wt&&$e.render(A);for(let Ee=0,Ie=se.length;Ee<Ie;Ee++){let Le=se[Ee];kp(x,A,Le,Le.viewport)}}else H.length>0&&Hp(V,H,A,k),wt&&$e.render(A),kp(x,A,k);P!==null&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(v,A,k),Bt.resetDefaultState(),w=-1,b=null,E.pop(),E.length>0?(m=E[E.length-1],oe===!0&&ie.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?x=_[_.length-1]:x=null};function Lh(A,k,G,V){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||K.intersectsSprite(A)){V&&ft.setFromMatrixPosition(A.matrixWorld).applyMatrix4(qe);let Ee=Z.update(A),Ie=A.material;Ie.visible&&x.push(A,Ee,Ie,G,ft.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||K.intersectsObject(A))){let Ee=Z.update(A),Ie=A.material;if(V&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ft.copy(A.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),ft.copy(Ee.boundingSphere.center)),ft.applyMatrix4(A.matrixWorld).applyMatrix4(qe)),Array.isArray(Ie)){let Le=Ee.groups;for(let Qe=0,lt=Le.length;Qe<lt;Qe++){let De=Le[Qe],Tt=Ie[De.materialIndex];Tt&&Tt.visible&&x.push(A,Ee,Tt,G,ft.z,De)}}else Ie.visible&&x.push(A,Ee,Ie,G,ft.z,null)}}let se=A.children;for(let Ee=0,Ie=se.length;Ee<Ie;Ee++)Lh(se[Ee],k,G,V)}function kp(A,k,G,V){let H=A.opaque,se=A.transmissive,Ee=A.transparent;m.setupLightsView(G),oe===!0&&ie.setGlobalState(v.clippingPlanes,G),V&&Ve.viewport(D.copy(V)),H.length>0&&vl(H,k,G),se.length>0&&vl(se,k,G),Ee.length>0&&vl(Ee,k,G),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Hp(A,k,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new Pn(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float")?Mi:cs,minFilter:Sr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));let se=m.state.transmissionRenderTarget[V.id],Ee=V.viewport||D;se.setSize(Ee.z,Ee.w);let Ie=v.getRenderTarget();v.setRenderTarget(se),v.getClearColor(W),ee=v.getClearAlpha(),ee<1&&v.setClearColor(16777215,.5),v.clear(),wt&&$e.render(G);let Le=v.toneMapping;v.toneMapping=Gs;let Qe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),oe===!0&&ie.setGlobalState(v.clippingPlanes,V),vl(A,G,V),C.updateMultisampleRenderTarget(se),C.updateRenderTargetMipmap(se),yt.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let De=0,Tt=k.length;De<Tt;De++){let Gt=k[De],Wt=Gt.object,Nn=Gt.geometry,It=Gt.material,Fe=Gt.group;if(It.side===tn&&Wt.layers.test(V.layers)){let Ji=It.side;It.side=bn,It.needsUpdate=!0,Fp(Wt,G,V,Nn,It,Fe),It.side=Ji,It.needsUpdate=!0,lt=!0}}lt===!0&&(C.updateMultisampleRenderTarget(se),C.updateRenderTargetMipmap(se))}v.setRenderTarget(Ie),v.setClearColor(W,ee),Qe!==void 0&&(V.viewport=Qe),v.toneMapping=Le}function vl(A,k,G){let V=k.isScene===!0?k.overrideMaterial:null;for(let H=0,se=A.length;H<se;H++){let Ee=A[H],Ie=Ee.object,Le=Ee.geometry,Qe=V===null?Ee.material:V,lt=Ee.group;Ie.layers.test(G.layers)&&Fp(Ie,k,G,Le,Qe,lt)}}function Fp(A,k,G,V,H,se){A.onBeforeRender(v,k,G,V,H,se),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(v,k,G,V,A,se),H.transparent===!0&&H.side===tn&&H.forceSinglePass===!1?(H.side=bn,H.needsUpdate=!0,v.renderBufferDirect(G,k,V,H,A,se),H.side=Vs,H.needsUpdate=!0,v.renderBufferDirect(G,k,V,H,A,se),H.side=tn):v.renderBufferDirect(G,k,V,H,A,se),A.onAfterRender(v,k,G,V,H,se)}function Ml(A,k,G){k.isScene!==!0&&(k=Kt);let V=Be.get(A),H=m.state.lights,se=m.state.shadowsArray,Ee=H.state.version,Ie=He.getParameters(A,H.state,se,k,G),Le=He.getProgramCacheKey(Ie),Qe=V.programs;V.environment=A.isMeshStandardMaterial?k.environment:null,V.fog=k.fog,V.envMap=(A.isMeshStandardMaterial?O:S).get(A.envMap||V.environment),V.envMapRotation=V.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Qe===void 0&&(A.addEventListener("dispose",at),Qe=new Map,V.programs=Qe);let lt=Qe.get(Le);if(lt!==void 0){if(V.currentProgram===lt&&V.lightsStateVersion===Ee)return zp(A,Ie),lt}else Ie.uniforms=He.getUniforms(A),A.onBeforeCompile(Ie,v),lt=He.acquireProgram(Ie,Le),Qe.set(Le,lt),V.uniforms=Ie.uniforms;let De=V.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(De.clippingPlanes=ie.uniform),zp(A,Ie),V.needsLights=fy(A),V.lightsStateVersion=Ee,V.needsLights&&(De.ambientLightColor.value=H.state.ambient,De.lightProbe.value=H.state.probe,De.directionalLights.value=H.state.directional,De.directionalLightShadows.value=H.state.directionalShadow,De.spotLights.value=H.state.spot,De.spotLightShadows.value=H.state.spotShadow,De.rectAreaLights.value=H.state.rectArea,De.ltc_1.value=H.state.rectAreaLTC1,De.ltc_2.value=H.state.rectAreaLTC2,De.pointLights.value=H.state.point,De.pointLightShadows.value=H.state.pointShadow,De.hemisphereLights.value=H.state.hemi,De.directionalShadowMap.value=H.state.directionalShadowMap,De.directionalShadowMatrix.value=H.state.directionalShadowMatrix,De.spotShadowMap.value=H.state.spotShadowMap,De.spotLightMatrix.value=H.state.spotLightMatrix,De.spotLightMap.value=H.state.spotLightMap,De.pointShadowMap.value=H.state.pointShadowMap,De.pointShadowMatrix.value=H.state.pointShadowMatrix),V.currentProgram=lt,V.uniformsList=null,lt}function Op(A){if(A.uniformsList===null){let k=A.currentProgram.getUniforms();A.uniformsList=vo.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function zp(A,k){let G=Be.get(A);G.outputColorSpace=k.outputColorSpace,G.batching=k.batching,G.batchingColor=k.batchingColor,G.instancing=k.instancing,G.instancingColor=k.instancingColor,G.instancingMorph=k.instancingMorph,G.skinning=k.skinning,G.morphTargets=k.morphTargets,G.morphNormals=k.morphNormals,G.morphColors=k.morphColors,G.morphTargetsCount=k.morphTargetsCount,G.numClippingPlanes=k.numClippingPlanes,G.numIntersection=k.numClipIntersection,G.vertexAlphas=k.vertexAlphas,G.vertexTangents=k.vertexTangents,G.toneMapping=k.toneMapping}function uy(A,k,G,V,H){k.isScene!==!0&&(k=Kt),C.resetTextureUnits();let se=k.fog,Ee=V.isMeshStandardMaterial?k.environment:null,Ie=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Do,Le=(V.isMeshStandardMaterial?O:S).get(V.envMap||Ee),Qe=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,lt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),De=!!G.morphAttributes.position,Tt=!!G.morphAttributes.normal,Gt=!!G.morphAttributes.color,Wt=Gs;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Wt=v.toneMapping);let Nn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,It=Nn!==void 0?Nn.length:0,Fe=Be.get(V),Ji=m.state.lights;if(oe===!0&&(Ne===!0||A!==b)){let Qn=A===b&&V.id===w;ie.setState(V,A,Qn)}let Lt=!1;V.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Ji.state.version||Fe.outputColorSpace!==Ie||H.isBatchedMesh&&Fe.batching===!1||!H.isBatchedMesh&&Fe.batching===!0||H.isBatchedMesh&&Fe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Fe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Fe.instancing===!1||!H.isInstancedMesh&&Fe.instancing===!0||H.isSkinnedMesh&&Fe.skinning===!1||!H.isSkinnedMesh&&Fe.skinning===!0||H.isInstancedMesh&&Fe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Fe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Fe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Fe.instancingMorph===!1&&H.morphTexture!==null||Fe.envMap!==Le||V.fog===!0&&Fe.fog!==se||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ie.numPlanes||Fe.numIntersection!==ie.numIntersection)||Fe.vertexAlphas!==Qe||Fe.vertexTangents!==lt||Fe.morphTargets!==De||Fe.morphNormals!==Tt||Fe.morphColors!==Gt||Fe.toneMapping!==Wt||Fe.morphTargetsCount!==It)&&(Lt=!0):(Lt=!0,Fe.__version=V.version);let ui=Fe.currentProgram;Lt===!0&&(ui=Ml(V,k,H));let Zr=!1,zn=!1,ya=!1,$t=ui.getUniforms(),Ai=Fe.uniforms;if(Ve.useProgram(ui.program)&&(Zr=!0,zn=!0,ya=!0),V.id!==w&&(w=V.id,zn=!0),Zr||b!==A){Ve.buffers.depth.getReversed()?(xe.copy(A.projectionMatrix),dv(xe),fv(xe),$t.setValue(F,"projectionMatrix",xe)):$t.setValue(F,"projectionMatrix",A.projectionMatrix),$t.setValue(F,"viewMatrix",A.matrixWorldInverse);let Ls=$t.map.cameraPosition;Ls!==void 0&&Ls.setValue(F,rt.setFromMatrixPosition(A.matrixWorld)),vt.logarithmicDepthBuffer&&$t.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&$t.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,zn=!0,ya=!0)}if(H.isSkinnedMesh){$t.setOptional(F,H,"bindMatrix"),$t.setOptional(F,H,"bindMatrixInverse");let Qn=H.skeleton;Qn&&(Qn.boneTexture===null&&Qn.computeBoneTexture(),$t.setValue(F,"boneTexture",Qn.boneTexture,C))}H.isBatchedMesh&&($t.setOptional(F,H,"batchingTexture"),$t.setValue(F,"batchingTexture",H._matricesTexture,C),$t.setOptional(F,H,"batchingIdTexture"),$t.setValue(F,"batchingIdTexture",H._indirectTexture,C),$t.setOptional(F,H,"batchingColorTexture"),H._colorsTexture!==null&&$t.setValue(F,"batchingColorTexture",H._colorsTexture,C));let va=G.morphAttributes;if((va.position!==void 0||va.normal!==void 0||va.color!==void 0)&&Ze.update(H,G,ui),(zn||Fe.receiveShadow!==H.receiveShadow)&&(Fe.receiveShadow=H.receiveShadow,$t.setValue(F,"receiveShadow",H.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ai.envMap.value=Le,Ai.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&k.environment!==null&&(Ai.envMapIntensity.value=k.environmentIntensity),zn&&($t.setValue(F,"toneMappingExposure",v.toneMappingExposure),Fe.needsLights&&dy(Ai,ya),se&&V.fog===!0&&ye.refreshFogUniforms(Ai,se),ye.refreshMaterialUniforms(Ai,V,X,re,m.state.transmissionRenderTarget[A.id]),vo.upload(F,Op(Fe),Ai,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(vo.upload(F,Op(Fe),Ai,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&$t.setValue(F,"center",H.center),$t.setValue(F,"modelViewMatrix",H.modelViewMatrix),$t.setValue(F,"normalMatrix",H.normalMatrix),$t.setValue(F,"modelMatrix",H.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Qn=V.uniformsGroups;for(let Ls=0,Ds=Qn.length;Ls<Ds;Ls++){let Bp=Qn[Ls];U.update(Bp,ui),U.bind(Bp,ui)}}return ui}function dy(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function fy(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,k,G){Be.get(A.texture).__webglTexture=k,Be.get(A.depthTexture).__webglTexture=G;let V=Be.get(A);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,k){let G=Be.get(A);G.__webglFramebuffer=k,G.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,G=0){P=A,R=k,I=G;let V=!0,H=null,se=!1,Ee=!1;if(A){let Le=Be.get(A);if(Le.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(F.FRAMEBUFFER,null),V=!1;else if(Le.__webglFramebuffer===void 0)C.setupRenderTarget(A);else if(Le.__hasExternalTextures)C.rebindTextures(A,Be.get(A.texture).__webglTexture,Be.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let De=A.depthTexture;if(Le.__boundDepthTexture!==De){if(De!==null&&Be.has(De)&&(A.width!==De.image.width||A.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(A)}}let Qe=A.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Ee=!0);let lt=Be.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(lt[k])?H=lt[k][G]:H=lt[k],se=!0):A.samples>0&&C.useMultisampledRTT(A)===!1?H=Be.get(A).__webglMultisampledFramebuffer:Array.isArray(lt)?H=lt[G]:H=lt,D.copy(A.viewport),B.copy(A.scissor),z=A.scissorTest}else D.copy(Oe).multiplyScalar(X).floor(),B.copy(dt).multiplyScalar(X).floor(),z=Ot;if(Ve.bindFramebuffer(F.FRAMEBUFFER,H)&&V&&Ve.drawBuffers(A,H),Ve.viewport(D),Ve.scissor(B),Ve.setScissorTest(z),se){let Le=Be.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,Le.__webglTexture,G)}else if(Ee){let Le=Be.get(A.texture),Qe=k||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Le.__webglTexture,G||0,Qe)}w=-1},this.readRenderTargetPixels=function(A,k,G,V,H,se,Ee){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Be.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ie=Ie[Ee]),Ie){Ve.bindFramebuffer(F.FRAMEBUFFER,Ie);try{let Le=A.texture,Qe=Le.format,lt=Le.type;if(!vt.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-V&&G>=0&&G<=A.height-H&&F.readPixels(k,G,V,H,ht.convert(Qe),ht.convert(lt),se)}finally{let Le=P!==null?Be.get(P).__webglFramebuffer:null;Ve.bindFramebuffer(F.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(A,k,G,V,H,se,Ee){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Be.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ie=Ie[Ee]),Ie){let Le=A.texture,Qe=Le.format,lt=Le.type;if(!vt.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=A.width-V&&G>=0&&G<=A.height-H){Ve.bindFramebuffer(F.FRAMEBUFFER,Ie);let De=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,De),F.bufferData(F.PIXEL_PACK_BUFFER,se.byteLength,F.STREAM_READ),F.readPixels(k,G,V,H,ht.convert(Qe),ht.convert(lt),0);let Tt=P!==null?Be.get(P).__webglFramebuffer:null;Ve.bindFramebuffer(F.FRAMEBUFFER,Tt);let Gt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await uv(F,Gt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,De),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,se),F.deleteBuffer(De),F.deleteSync(Gt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,k=null,G=0){A.isTexture!==!0&&(Pa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,A=arguments[1]);let V=Math.pow(2,-G),H=Math.floor(A.image.width*V),se=Math.floor(A.image.height*V),Ee=k!==null?k.x:0,Ie=k!==null?k.y:0;C.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,G,0,0,Ee,Ie,H,se),Ve.unbindTexture()},this.copyTextureToTexture=function(A,k,G=null,V=null,H=0){A.isTexture!==!0&&(Pa("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,A=arguments[1],k=arguments[2],H=arguments[3]||0,G=null);let se,Ee,Ie,Le,Qe,lt,De,Tt,Gt,Wt=A.isCompressedTexture?A.mipmaps[H]:A.image;G!==null?(se=G.max.x-G.min.x,Ee=G.max.y-G.min.y,Ie=G.isBox3?G.max.z-G.min.z:1,Le=G.min.x,Qe=G.min.y,lt=G.isBox3?G.min.z:0):(se=Wt.width,Ee=Wt.height,Ie=Wt.depth||1,Le=0,Qe=0,lt=0),V!==null?(De=V.x,Tt=V.y,Gt=V.z):(De=0,Tt=0,Gt=0);let Nn=ht.convert(k.format),It=ht.convert(k.type),Fe;k.isData3DTexture?(C.setTexture3D(k,0),Fe=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(C.setTexture2DArray(k,0),Fe=F.TEXTURE_2D_ARRAY):(C.setTexture2D(k,0),Fe=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);let Ji=F.getParameter(F.UNPACK_ROW_LENGTH),Lt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ui=F.getParameter(F.UNPACK_SKIP_PIXELS),Zr=F.getParameter(F.UNPACK_SKIP_ROWS),zn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Wt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Wt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Le),F.pixelStorei(F.UNPACK_SKIP_ROWS,Qe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,lt);let ya=A.isDataArrayTexture||A.isData3DTexture,$t=k.isDataArrayTexture||k.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let Ai=Be.get(A),va=Be.get(k),Qn=Be.get(Ai.__renderTarget),Ls=Be.get(va.__renderTarget);Ve.bindFramebuffer(F.READ_FRAMEBUFFER,Qn.__webglFramebuffer),Ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ls.__webglFramebuffer);for(let Ds=0;Ds<Ie;Ds++)ya&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Be.get(A).__webglTexture,H,lt+Ds),A.isDepthTexture?($t&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Be.get(k).__webglTexture,H,Gt+Ds),F.blitFramebuffer(Le,Qe,se,Ee,De,Tt,se,Ee,F.DEPTH_BUFFER_BIT,F.NEAREST)):$t?F.copyTexSubImage3D(Fe,H,De,Tt,Gt+Ds,Le,Qe,se,Ee):F.copyTexSubImage2D(Fe,H,De,Tt,Gt+Ds,Le,Qe,se,Ee);Ve.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else $t?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Fe,H,De,Tt,Gt,se,Ee,Ie,Nn,It,Wt.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(Fe,H,De,Tt,Gt,se,Ee,Ie,Nn,Wt.data):F.texSubImage3D(Fe,H,De,Tt,Gt,se,Ee,Ie,Nn,It,Wt):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,H,De,Tt,se,Ee,Nn,It,Wt.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,H,De,Tt,Wt.width,Wt.height,Nn,Wt.data):F.texSubImage2D(F.TEXTURE_2D,H,De,Tt,se,Ee,Nn,It,Wt);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ji),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Lt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ui),F.pixelStorei(F.UNPACK_SKIP_ROWS,Zr),F.pixelStorei(F.UNPACK_SKIP_IMAGES,zn),H===0&&k.generateMipmaps&&F.generateMipmap(Fe),Ve.unbindTexture()},this.copyTextureToTexture3D=function(A,k,G=null,V=null,H=0){return A.isTexture!==!0&&(Pa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,A=arguments[2],k=arguments[3],H=arguments[4]||0),Pa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,k,G,V,H)},this.initRenderTarget=function(A){Be.get(A).__webglFramebuffer===void 0&&C.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),Ve.unbindTexture()},this.resetState=function(){R=0,I=0,P=null,Ve.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}},fc=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new fe(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Di=class extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},md=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ju,this.updateRanges=[],this.version=0,this.uuid=os()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=os()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=os()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Rn=new T,pc=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},yi=class extends hs{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ho,wa=new T,uo=new T,fo=new T,po=new ne,Sa=new ne,Mm=new xt,Gl=new T,Ta=new T,Vl=new T,B0=new ne,au=new ne,G0=new ne,Ui=class extends dn{constructor(e=new yi){if(super(),this.isSprite=!0,this.type="Sprite",ho===void 0){ho=new At;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new md(t,5);ho.setIndex([0,1,2,0,2,3]),ho.setAttribute("position",new pc(i,3,0,!1)),ho.setAttribute("uv",new pc(i,2,3,!1))}this.geometry=ho,this.material=e,this.center=new ne(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),uo.setFromMatrixScale(this.matrixWorld),Mm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),fo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&uo.multiplyScalar(-fo.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Wl(Gl.set(-.5,-.5,0),fo,o,uo,s,r),Wl(Ta.set(.5,-.5,0),fo,o,uo,s,r),Wl(Vl.set(.5,.5,0),fo,o,uo,s,r),B0.set(0,0),au.set(1,0),G0.set(1,1);let a=e.ray.intersectTriangle(Gl,Ta,Vl,!1,wa);if(a===null&&(Wl(Ta.set(-.5,.5,0),fo,o,uo,s,r),au.set(0,1),a=e.ray.intersectTriangle(Gl,Vl,Ta,!1,wa),a===null))return;let l=e.ray.origin.distanceTo(wa);l<e.near||l>e.far||t.push({distance:l,point:wa.clone(),uv:Bs.getInterpolation(wa,Gl,Ta,Vl,B0,au,G0,new ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Wl(n,e,t,i,s,r){po.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Sa.x=r*po.x-s*po.y,Sa.y=s*po.x+r*po.y):Sa.copy(po),n.copy(e),n.x+=Sa.x,n.y+=Sa.y,n.applyMatrix4(Mm)}var gd=class extends kn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Vn,h=Vn,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mc=class extends Jt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},mo=new xt,V0=new xt,$l=[],W0=new xi,o2=new xt,Aa=new le,Ra=new $s,Xs=class extends le{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,o2)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,mo),W0.copy(e.boundingBox).applyMatrix4(mo),this.boundingBox.union(W0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $s),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,mo),Ra.copy(e.boundingSphere).applyMatrix4(mo),this.boundingSphere.union(Ra)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Aa.geometry=this.geometry,Aa.material=this.material,Aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ra.copy(this.boundingSphere),Ra.applyMatrix4(i),e.ray.intersectsSphere(Ra)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,mo),V0.multiplyMatrices(i,mo),Aa.matrixWorld=V0,Aa.raycast(e,$l);for(let o=0,a=$l.length;o<a;o++){let l=$l[o];l.instanceId=r,l.object=this,t.push(l)}$l.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new mc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new gd(new Float32Array(s*this.count),s,this.count,qd,Pi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var $n=class extends hs{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$0=new xt,xd=new oc,Xl=new $s,ql=new T,ti=class extends dn{constructor(e=new At,t=new $n){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xl.copy(i.boundingSphere),Xl.applyMatrix4(s),Xl.radius+=r,e.ray.intersectsSphere(Xl)===!1)return;$0.copy(s).invert(),xd.copy(e.ray).applyMatrix4($0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,y=p;g<y;g++){let x=c.getX(g);ql.fromBufferAttribute(u,x),X0(ql,x,l,s,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,y=p;g<y;g++)ql.fromBufferAttribute(u,g),X0(ql,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function X0(n,e,t,i,s,r,o){let a=xd.distanceSqToPoint(n);if(a<t){let l=new T;xd.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ln=class extends kn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ni=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ne:new T);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new T,s=[],r=[],o=[],a=new T,l=new xt;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new T)}r[0]=new T,o[0]=new T;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(xn(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(xn(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Oa=class extends ni{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ne){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},yd=class extends Oa{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ef(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,p*=h,s(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Yl=new T,lu=new ef,cu=new ef,hu=new ef,za=class extends ni{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new T){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Yl.subVectors(s[0],s[1]).add(s[0]),c=Yl);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Yl.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Yl),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(h),p);y<1e-4&&(y=1),g<1e-4&&(g=y),x<1e-4&&(x=y),lu.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,y,x),cu.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,y,x),hu.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,y,x)}else this.curveType==="catmullrom"&&(lu.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),cu.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),hu.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(lu.calc(l),cu.calc(l),hu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new T().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function q0(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function a2(n,e){let t=1-n;return t*t*e}function l2(n,e){return 2*(1-n)*n*e}function c2(n,e){return n*n*e}function Na(n,e,t,i){return a2(n,e)+l2(n,t)+c2(n,i)}function h2(n,e){let t=1-n;return t*t*t*e}function u2(n,e){let t=1-n;return 3*t*t*n*e}function d2(n,e){return 3*(1-n)*n*n*e}function f2(n,e){return n*n*n*e}function ka(n,e,t,i,s){return h2(n,e)+u2(n,t)+d2(n,i)+f2(n,s)}var gc=class extends ni{constructor(e=new ne,t=new ne,i=new ne,s=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ne){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ka(e,s.x,r.x,o.x,a.x),ka(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vd=class extends ni{constructor(e=new T,t=new T,i=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new T){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ka(e,s.x,r.x,o.x,a.x),ka(e,s.y,r.y,o.y,a.y),ka(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xc=class extends ni{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Md=class extends ni{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yc=class extends ni{constructor(e=new ne,t=new ne,i=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ne){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Na(e,s.x,r.x,o.x),Na(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vc=class extends ni{constructor(e=new T,t=new T,i=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new T){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Na(e,s.x,r.x,o.x),Na(e,s.y,r.y,o.y),Na(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mc=class extends ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(q0(a,l.x,c.x,h.x,u.x),q0(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ne().fromArray(s))}return this}},_d=Object.freeze({__proto__:null,ArcCurve:yd,CatmullRomCurve3:za,CubicBezierCurve:gc,CubicBezierCurve3:vd,EllipseCurve:Oa,LineCurve:xc,LineCurve3:Md,QuadraticBezierCurve:yc,QuadraticBezierCurve3:vc,SplineCurve:Mc}),Ed=class extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _d[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new _d[s.type]().fromJSON(s))}return this}},bd=class extends Ed{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new xc(this.currentPoint.clone(),new ne(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new yc(this.currentPoint.clone(),new ne(e,t),new ne(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new gc(this.currentPoint.clone(),new ne(e,t),new ne(i,s),new ne(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Mc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Oa(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},us=class n extends At{constructor(e=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=xn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new T,f=new ne,p=new T,g=new T,y=new T,x=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:x=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,p.x=m*1,p.y=-x,p.z=m*0,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:x=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,p.x=m*1,p.y=-x,p.z=m*0,g.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(g)}for(let _=0;_<=t;_++){let E=i+_*h*s,v=Math.sin(E),L=Math.cos(E);for(let R=0;R<=e.length-1;R++){u.x=e[R].x*v,u.y=e[R].y,u.z=e[R].x*L,o.push(u.x,u.y,u.z),f.x=_/t,f.y=R/(e.length-1),a.push(f.x,f.y);let I=l[3*R+0]*v,P=l[3*R+1],w=l[3*R+0]*L;c.push(I,P,w)}}for(let _=0;_<t;_++)for(let E=0;E<e.length-1;E++){let v=E+_*e.length,L=v,R=v+e.length,I=v+e.length+1,P=v+1;r.push(L,R,P),r.push(I,P,R)}this.setIndex(r),this.setAttribute("position",new Ke(o,3)),this.setAttribute("uv",new Ke(a,2)),this.setAttribute("normal",new Ke(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},_c=class n extends us{constructor(e=1,t=1,i=4,s=8){let r=new bd;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},qs=class n extends At{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new T,h=new ne;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let p=i+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(a,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},et=class n extends At{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],g=0,y=[],x=i/2,m=0;_(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(f,3)),this.setAttribute("uv",new Ke(p,2));function _(){let v=new T,L=new T,R=0,I=(t-e)/i;for(let P=0;P<=r;P++){let w=[],b=P/r,D=b*(t-e)+e;for(let B=0;B<=s;B++){let z=B/s,W=z*l+a,ee=Math.sin(W),Y=Math.cos(W);L.x=D*ee,L.y=-b*i+x,L.z=D*Y,u.push(L.x,L.y,L.z),v.set(ee,I,Y).normalize(),f.push(v.x,v.y,v.z),p.push(z,1-b),w.push(g++)}y.push(w)}for(let P=0;P<s;P++)for(let w=0;w<r;w++){let b=y[w][P],D=y[w+1][P],B=y[w+1][P+1],z=y[w][P+1];(e>0||w!==0)&&(h.push(b,D,z),R+=3),(t>0||w!==r-1)&&(h.push(D,B,z),R+=3)}c.addGroup(m,R,0),m+=R}function E(v){let L=g,R=new ne,I=new T,P=0,w=v===!0?e:t,b=v===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,x*b,0),f.push(0,b,0),p.push(.5,.5),g++;let D=g;for(let B=0;B<=s;B++){let W=B/s*l+a,ee=Math.cos(W),Y=Math.sin(W);I.x=w*Y,I.y=x*b,I.z=w*ee,u.push(I.x,I.y,I.z),f.push(0,b,0),R.x=ee*.5+.5,R.y=Y*.5*b+.5,p.push(R.x,R.y),g++}for(let B=0;B<s;B++){let z=L+B,W=D+B;v===!0?h.push(W,W+1,z):h.push(W+1,W,z),P+=3}c.addGroup(m,P,v===!0?1:2),m+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},zt=class n extends et{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ba=class n extends At{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Ke(r,3)),this.setAttribute("normal",new Ke(r.slice(),3)),this.setAttribute("uv",new Ke(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let E=new T,v=new T,L=new T;for(let R=0;R<t.length;R+=3)p(t[R+0],E),p(t[R+1],v),p(t[R+2],L),l(E,v,L,_)}function l(_,E,v,L){let R=L+1,I=[];for(let P=0;P<=R;P++){I[P]=[];let w=_.clone().lerp(v,P/R),b=E.clone().lerp(v,P/R),D=R-P;for(let B=0;B<=D;B++)B===0&&P===R?I[P][B]=w:I[P][B]=w.clone().lerp(b,B/D)}for(let P=0;P<R;P++)for(let w=0;w<2*(R-P)-1;w++){let b=Math.floor(w/2);w%2===0?(f(I[P][b+1]),f(I[P+1][b]),f(I[P][b])):(f(I[P][b+1]),f(I[P+1][b+1]),f(I[P+1][b]))}}function c(_){let E=new T;for(let v=0;v<r.length;v+=3)E.x=r[v+0],E.y=r[v+1],E.z=r[v+2],E.normalize().multiplyScalar(_),r[v+0]=E.x,r[v+1]=E.y,r[v+2]=E.z}function h(){let _=new T;for(let E=0;E<r.length;E+=3){_.x=r[E+0],_.y=r[E+1],_.z=r[E+2];let v=x(_)/2/Math.PI+.5,L=m(_)/Math.PI+.5;o.push(v,1-L)}g(),u()}function u(){for(let _=0;_<o.length;_+=6){let E=o[_+0],v=o[_+2],L=o[_+4],R=Math.max(E,v,L),I=Math.min(E,v,L);R>.9&&I<.1&&(E<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),L<.2&&(o[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function p(_,E){let v=_*3;E.x=e[v+0],E.y=e[v+1],E.z=e[v+2]}function g(){let _=new T,E=new T,v=new T,L=new T,R=new ne,I=new ne,P=new ne;for(let w=0,b=0;w<r.length;w+=9,b+=6){_.set(r[w+0],r[w+1],r[w+2]),E.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),R.set(o[b+0],o[b+1]),I.set(o[b+2],o[b+3]),P.set(o[b+4],o[b+5]),L.copy(_).add(E).add(v).divideScalar(3);let D=x(L);y(R,b+0,_,D),y(I,b+2,E,D),y(P,b+4,v,D)}}function y(_,E,v,L){L<0&&_.x===1&&(o[E]=_.x-1),v.x===0&&v.z===0&&(o[E]=L/2/Math.PI+.5)}function x(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},ii=class n extends Ba{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Xn=class n extends Ba{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ar=class n extends Ba{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},vn=class n extends At{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/s,p=new T,g=new ne;for(let y=0;y<=s;y++){for(let x=0;x<=i;x++){let m=r+x/i*o;p.x=u*Math.cos(m),p.y=u*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let y=0;y<s;y++){let x=y*(i+1);for(let m=0;m<i;m++){let _=m+x,E=_,v=_+i+1,L=_+i+2,R=_+1;a.push(E,v,R),a.push(v,L,R)}}this.setIndex(a),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ge=class n extends At{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new T,f=new T,p=[],g=[],y=[],x=[];for(let m=0;m<=i;m++){let _=[],E=m/i,v=0;m===0&&o===0?v=.5/t:m===i&&l===Math.PI&&(v=-.5/t);for(let L=0;L<=t;L++){let R=L/t;u.x=-e*Math.cos(s+R*r)*Math.sin(o+E*a),u.y=e*Math.cos(o+E*a),u.z=e*Math.sin(s+R*r)*Math.sin(o+E*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),x.push(R+v,1-E),_.push(c++)}h.push(_)}for(let m=0;m<i;m++)for(let _=0;_<t;_++){let E=h[m][_+1],v=h[m][_],L=h[m+1][_],R=h[m+1][_+1];(m!==0||o>0)&&p.push(E,v,R),(m!==i-1||l<Math.PI)&&p.push(v,L,R)}this.setIndex(p),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(y,3)),this.setAttribute("uv",new Ke(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ye=class n extends At{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new T,u=new T,f=new T;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let y=g/s*r,x=p/i*Math.PI*2;u.x=(e+t*Math.cos(x))*Math.cos(y),u.y=(e+t*Math.cos(x))*Math.sin(y),u.z=t*Math.sin(x),a.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let y=(s+1)*p+g-1,x=(s+1)*(p-1)+g-1,m=(s+1)*(p-1)+g,_=(s+1)*p+g;o.push(y,x,_),o.push(x,m,_)}this.setIndex(o),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ec=class n extends At{constructor(e=new vc(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new T,l=new T,c=new ne,h=new T,u=[],f=[],p=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(f,3)),this.setAttribute("uv",new Ke(p,2));function y(){for(let E=0;E<t;E++)x(E);x(r===!1?t:0),_(),m()}function x(E){h=e.getPointAt(E/t,h);let v=o.normals[E],L=o.binormals[E];for(let R=0;R<=s;R++){let I=R/s*Math.PI*2,P=Math.sin(I),w=-Math.cos(I);l.x=w*v.x+P*L.x,l.y=w*v.y+P*L.y,l.z=w*v.z+P*L.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let E=1;E<=t;E++)for(let v=1;v<=s;v++){let L=(s+1)*(E-1)+(v-1),R=(s+1)*E+(v-1),I=(s+1)*E+v,P=(s+1)*(E-1)+v;g.push(L,R,P),g.push(R,I,P)}}function _(){for(let E=0;E<=t;E++)for(let v=0;v<=s;v++)c.x=E/t,c.y=v/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new _d[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var bc=class extends nn{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},de=class extends hs{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hm,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Zl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function p2(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Po=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wd=class extends Po{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$p,endingEnd:$p}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xp:r=e,a=2*t-i;break;case qp:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Xp:o=e,l=2*i-t;break;case qp:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),y=g*g,x=y*g,m=-f*x+2*f*y-f*g,_=(1+f)*x+(-1.5-2*f)*y+(-.5+f)*g+1,E=(-1-p)*x+(1.5+p)*y+.5*g,v=p*x-p*y;for(let L=0;L!==a;++L)r[L]=m*o[h+L]+_*o[c+L]+E*o[l+L]+v*o[u+L];return r}},Sd=class extends Po{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Td=class extends Po{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},vi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zl(t,this.TimeBufferType),this.values=Zl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Zl(e.times,Array),values:Zl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Td(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Sd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case tc:t=this.InterpolantFactoryMethodDiscrete;break;case Ju:t=this.InterpolantFactoryMethodLinear;break;case Uh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tc;case this.InterpolantFactoryMethodLinear:return Ju;case this.InterpolantFactoryMethodSmooth:return Uh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&p2(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Uh,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,f=u-i,p=u+i;for(let g=0;g!==i;++g){let y=t[u+g];if(y!==t[f+g]||y!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};vi.prototype.TimeBufferType=Float32Array;vi.prototype.ValueBufferType=Float32Array;vi.prototype.DefaultInterpolation=Ju;var Rr=class extends vi{constructor(e,t,i){super(e,t,i)}};Rr.prototype.ValueTypeName="bool";Rr.prototype.ValueBufferType=Array;Rr.prototype.DefaultInterpolation=tc;Rr.prototype.InterpolantFactoryMethodLinear=void 0;Rr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ad=class extends vi{};Ad.prototype.ValueTypeName="color";var Rd=class extends vi{};Rd.prototype.ValueTypeName="number";var Cd=class extends Po{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)an.slerpFlat(r,0,o,c-a,o,c,l);return r}},wc=class extends vi{InterpolantFactoryMethodLinear(e){return new Cd(this.times,this.values,this.getValueSize(),e)}};wc.prototype.ValueTypeName="quaternion";wc.prototype.InterpolantFactoryMethodSmooth=void 0;var Cr=class extends vi{constructor(e,t,i){super(e,t,i)}};Cr.prototype.ValueTypeName="string";Cr.prototype.ValueBufferType=Array;Cr.prototype.DefaultInterpolation=tc;Cr.prototype.InterpolantFactoryMethodLinear=void 0;Cr.prototype.InterpolantFactoryMethodSmooth=void 0;var Pd=class extends vi{};Pd.prototype.ValueTypeName="vector";var Id=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},m2=new Id,Ld=class{constructor(e){this.manager=e!==void 0?e:m2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ld.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pr=class extends dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ys=class extends Pr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},uu=new xt,Y0=new T,Z0=new T,Ga=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fa,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Y0.setFromMatrixPosition(e.matrixWorld),t.position.copy(Y0),Z0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Z0),t.updateMatrixWorld(),uu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(uu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Dd=class extends Ga{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=So*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Io=class extends Pr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Dd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},K0=new xt,Ca=new T,du=new T,Ud=class extends Ga{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new Ht(2,1,1,1),new Ht(0,1,1,1),new Ht(3,1,1,1),new Ht(1,1,1,1),new Ht(3,0,1,1),new Ht(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ca.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ca),du.copy(i.position),du.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(du),i.updateMatrixWorld(),s.makeTranslation(-Ca.x,-Ca.y,-Ca.z),K0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(K0)}},Zs=class extends Pr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ud}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Nd=class extends Ga{constructor(){super(new Ao(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ni=class extends Pr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new Nd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Sc=class extends Pr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Lo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=J0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=J0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function J0(){return performance.now()}var tf="\\[\\]\\.:\\/",g2=new RegExp("["+tf+"]","g"),nf="[^"+tf+"]",x2="[^"+tf.replace("\\.","")+"]",y2=/((?:WC+[\/:])*)/.source.replace("WC",nf),v2=/(WCOD+)?/.source.replace("WCOD",x2),M2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nf),_2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nf),E2=new RegExp("^"+y2+v2+M2+_2+"$"),b2=["material","materials","bones","map"],kd=class{constructor(e,t,i){let s=i||Yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Yt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(g2,"")}static parseTrackName(e){let t=E2.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);b2.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Yt.Composite=kd;Yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Yt.prototype.GetterByBindingType=[Yt.prototype._getValue_direct,Yt.prototype._getValue_array,Yt.prototype._getValue_arrayElement,Yt.prototype._getValue_toArray];Yt.prototype.SetterByBindingTypeAndVersioning=[[Yt.prototype._setValue_direct,Yt.prototype._setValue_direct_setNeedsUpdate,Yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_array,Yt.prototype._setValue_array_setNeedsUpdate,Yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_arrayElement,Yt.prototype._setValue_arrayElement_setNeedsUpdate,Yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_fromArray,Yt.prototype._setValue_fromArray_setNeedsUpdate,Yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iw=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hd);var Cc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var qn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},w2=new Ao(-1,1,1,-1,0,1),sf=class extends At{constructor(){super(),this.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ke([0,2,0,0,2,0],2))}},S2=new sf,Js=class{constructor(e){this._mesh=new le(S2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,w2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var No=class extends qn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof nn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ks.clone(e.uniforms),this.material=new nn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Js(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Va=class extends qn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Pc=class extends qn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ic=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ne);this._width=i.width,this._height=i.height,t=new Pn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Mi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new No(Cc),this.copyPass.material.blending=Ii,this.clock=new Lo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Va!==void 0&&(o instanceof Va?i=!0:o instanceof Pc&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Lc=class extends qn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new fe}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var _m={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new fe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ko=class n extends qn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ne(e.x,e.y):new ne(256,256),this.clearColor=new fe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Pn(r,o,{type:Mi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Pn(r,o,{type:Mi});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new Pn(r,o,{type:Mi});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=_m;this.highPassUniforms=Ks.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new nn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ne(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Cc;this.copyUniforms=Ks.clone(h.uniforms),this.blendMaterial=new nn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Et,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new fe,this.oldClearAlpha=1,this.basic=new it,this.fsQuad=new Js(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ne(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new nn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ne(.5,.5)},direction:{value:new ne(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new nn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};ko.BlurDirectionX=new ne(1,0);ko.BlurDirectionY=new ne(0,1);var Em={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Dc=class extends qn{constructor(){super();let e=Em;this.uniforms=Ks.clone(e.uniforms),this.material=new bc({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Js(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},gt.getTransfer(this._outputColorSpace)===Dt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Od?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===zd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Bd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ir?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Gd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Vd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var d={scene:null,camera:null,renderer:null,player:null,time:{t:.3,day:1,elevation:1,night:0},res:{iron:0,silicon:0,ice:0,titanium:0},buildings:[],nodes:[],enemies:[],colonists:[],colony:{pop:0,housing:0,o2:0,food:0,water:0,support:0,powerProd:0,powerUse:0,deficit:!1},upgrades:{},stats:{mined:{iron:0,silicon:0,ice:0,titanium:0},built:{},kills:0,arrived:0,crafted:{}},chapter:0,terraform:0,ended:!1,storm:0,menuOpen:!1,locked:!1,started:!1,debug:!1,colliders:null,raining:!1,events:{map:{},on(n,e){var t;((t=this.map)[n]||(t[n]=[])).push(e)},emit(n,e){(this.map[n]||[]).forEach(t=>t(e))}}},mn={iron:{name:"\u94C1\u77FF",icon:"iron",color:"#d08a5e"},silicon:{name:"\u7845\u6676",icon:"silicon",color:"#f1dca0"},ice:{name:"\u6C34\u51B0",icon:"ice",color:"#a9dcff"},titanium:{name:"\u949B\u77FF",icon:"titanium",color:"#b9a6ff"}};function _i(n){for(let e in n)if((d.res[e]||0)<n[e])return!1;return!0}function Wa(n){for(let e in n)d.res[e]-=n[e]}function Ho(n){return Object.entries(n).map(([e,t])=>`<span class="cost ${d.res[e]>=t?"":"lack"}" style="--rc:${mn[e].color}"><svg class="ico"><use href="#i-${e}"/></svg>${t}</span>`).join(" ")}var Uc=class{constructor(e=16){this.cell=e,this.map=new Map}key(e,t){return e*73856093^t*19349663}add(e){let t=this.cell,i=Math.floor((e.x-e.r)/t),s=Math.floor((e.x+e.r)/t),r=Math.floor((e.z-e.r)/t),o=Math.floor((e.z+e.r)/t);e._keys=[];for(let a=i;a<=s;a++)for(let l=r;l<=o;l++){let c=this.key(a,l);this.map.has(c)||this.map.set(c,[]),this.map.get(c).push(e),e._keys.push(c)}return e}remove(e){if(!(!e||!e._keys)){for(let t of e._keys){let i=this.map.get(t);if(!i)continue;let s=i.indexOf(e);s>=0&&i.splice(s,1)}e._keys=null}}query(e,t){return this.map.get(this.key(Math.floor(e/this.cell),Math.floor(t/this.cell)))||[]}overlaps(e,t,i){let s=this.cell,r=new Set;for(let o=Math.floor((e-i)/s);o<=Math.floor((e+i)/s);o++)for(let a=Math.floor((t-i)/s);a<=Math.floor((t+i)/s);a++){let l=this.map.get(this.key(o,a));if(l)for(let c of l){if(r.has(c))continue;r.add(c);let h=c.x-e,u=c.z-t,f=c.r+i;if(h*h+u*u<f*f)return c}}return null}};function Yn(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Nc(n){let e=Yn(n),t=[...Array(256).keys()];for(let l=255;l>0;l--){let c=Math.floor(e()*(l+1));[t[l],t[c]]=[t[c],t[l]]}let i=new Uint8Array(512);for(let l=0;l<512;l++)i[l]=t[l&255];let s=[1,-1,1,-1,1,-1,0,0],r=[1,1,-1,-1,0,0,1,-1],o=.5*(Math.sqrt(3)-1),a=(3-Math.sqrt(3))/6;return function(l,c){let h=0,u=0,f=0,p=(l+c)*o,g=Math.floor(l+p),y=Math.floor(c+p),x=(g+y)*a,m=l-(g-x),_=c-(y-x),E=m>_?1:0,v=m>_?0:1,L=m-E+a,R=_-v+a,I=m-1+2*a,P=_-1+2*a,w=g&255,b=y&255,D=.5-m*m-_*_;if(D>0){let W=i[w+i[b]]&7;D*=D,h=D*D*(s[W]*m+r[W]*_)}let B=.5-L*L-R*R;if(B>0){let W=i[w+E+i[b+v]]&7;B*=B,u=B*B*(s[W]*L+r[W]*R)}let z=.5-I*I-P*P;if(z>0){let W=i[w+1+i[b+1]]&7;z*=z,f=z*z*(s[W]*I+r[W]*P)}return 70*(h+u+f)}}function rf(n,e,t,i=4,s=2,r=.5){let o=1,a=1,l=0,c=0;for(let h=0;h<i;h++)l+=o*n(e*a,t*a),c+=o,o*=r,a*=s;return l/c}var Ei=(n,e,t)=>n<e?e:n>t?t:n,Rt=(n,e,t)=>n+(e-n)*t,In=(n,e,t)=>{let i=Ei((t-n)/(e-n),0,1);return i*i*(3-2*i)};var Ln={mars:{id:"mars",name:"\u706B\u661F",place:"\u4E4C\u6258\u90A6\u5E73\u539F",title:"\u65B0\u5BB6\u56ED",next:"europa",seed:2089,gravity:5.6,solar:1,terraformable:!0,craters:46,hills:46,ridges:14,detail:1.6,ground:{a:[.56,.25,.14],b:[.74,.4,.24],steep:[.36,.19,.13],low:[.42,.22,.16]},rockHSL:[.04,.45,.22],rock:9062960,sky:{dayTop:[.62,.42,.29],dayHor:[.9,.68,.5],setTop:[.17,.13,.15],setHor:[.58,.4,.33],nightTop:[.006,.008,.022],nightHor:[.035,.035,.055],halo:[.35,.58,.95],storm:[.62,.42,.28]},dust:16765088,enemy:[3808536,9054736,16730640],extras:"moons",storms:!0,intro:["2089 \u5E74\u3002","\u5730\u7403\u4F9D\u7136\u7F8E\u4E3D\uFF0C\u4F46\u5DF2\u7ECF\u592A\u62E5\u6324\u3001\u592A\u708E\u70ED\u3001\u592A\u75B2\u60EB\u3002","\u300C\u65B9\u821F\u8BA1\u5212\u300D\u628A\u4EBA\u7C7B\u7684\u672A\u6765\uFF0C\u62BC\u5728\u4E86\u4E00\u9897\u7EA2\u8272\u661F\u7403\u4E0A\u3002","\u7ECF\u8FC7\u4E03\u4E2A\u6708\u3001\u4E24\u4EBF\u4E24\u5343\u4E94\u767E\u4E07\u516C\u91CC\u7684\u822A\u884C\u2014\u2014","\u4F60\u7684\u7740\u9646\u8231\uFF0C\u5728\u4E4C\u6258\u90A6\u5E73\u539F\u7684\u6668\u5149\u4E2D\u843D\u5730\u3002",'\u4F60\u662F\u7B2C\u4E00\u4E2A\u3002<b style="color:#ff8a3d">\u4F46\u4E0D\u4F1A\u662F\u6700\u540E\u4E00\u4E2A\u3002</b>']},europa:{id:"europa",name:"\u6728\u536B\u4E8C\xB7\u6B27\u7F57\u5DF4",place:"\u5EB7\u7EB3\u9A6C\u62C9\u6DF7\u6C8C\u533A",title:"\u51B0\u4E0B\u4E4B\u6D77",next:"kepler",seed:1610,gravity:3.6,solar:.55,terraformable:!1,craters:14,hills:16,ridges:26,detail:1.1,ground:{a:[.8,.84,.88],b:[.93,.95,.97],steep:[.52,.36,.3],low:[.62,.72,.82]},rockHSL:[.58,.2,.62],rock:12110040,sky:{dayTop:[.02,.025,.05],dayHor:[.16,.18,.26],setTop:[.01,.012,.03],setHor:[.1,.1,.16],nightTop:[.004,.005,.012],nightHor:[.02,.025,.04],halo:[.6,.7,.9],storm:[.5,.6,.7]},dust:14676223,enemy:[1454138,2788e3,4251903],extras:"jupiter",storms:!1,intro:["\u706B\u661F\u7684\u706F\u706B\uFF0C\u5DF2\u7ECF\u5728\u8EAB\u540E\u4EAE\u6210\u4E86\u4E00\u7247\u3002","\u800C\u4F60\uFF0C\u518D\u4E00\u6B21\u51FA\u53D1\u4E86\u3002","\u6728\u661F\u7684\u7B2C\u4E8C\u9897\u536B\u661F\u2014\u2014\u6B27\u7F57\u5DF4\u3002","\u5728\u5B83\u4E8C\u5341\u516C\u91CC\u539A\u7684\u51B0\u58F3\u4E4B\u4E0B\uFF0C\u662F\u4E00\u6574\u7247\u4ECE\u672A\u89C1\u8FC7\u9633\u5149\u7684\u6D77\u6D0B\u3002","\u6728\u661F\uFF0C\u50CF\u4E00\u8F6E\u5DE8\u5927\u7684\u6708\u4EAE\uFF0C\u60AC\u5728\u5730\u5E73\u7EBF\u4E0A\u3002",'<b style="color:#66e6ff">\u4EBA\u7C7B\u7684\u7B2C\u4E8C\u4E2A\u5BB6\uFF0C\u5728\u51B0\u4E0B\u3002</b>']},kepler:{id:"kepler",name:"\u5F00\u666E\u52D2-442b",place:"\u7FE1\u7FE0\u8C37\u5730",title:"\u53CC\u65E5\u4E4B\u5730",next:null,seed:442,gravity:7.2,solar:1.3,terraformable:!1,craters:8,hills:64,ridges:10,detail:2.2,ground:{a:[.18,.36,.3],b:[.32,.52,.34],steep:[.3,.24,.3],low:[.2,.26,.4]},rockHSL:[.75,.25,.3],rock:6969994,sky:{dayTop:[.3,.5,.78],dayHor:[.78,.86,.8],setTop:[.2,.12,.3],setHor:[.9,.5,.4],nightTop:[.01,.01,.04],nightHor:[.05,.04,.09],halo:[1,.6,.4],storm:[.6,.7,.6]},dust:13172696,enemy:[1976854,5939242,10551104],extras:"twinsuns",storms:!1,intro:["\u4E00\u5343\u4E8C\u767E\u5149\u5E74\u3002","\u51B7\u51BB\u8231\u91CC\u7684\u4E09\u767E\u5E74\uFF0C\u5BF9\u4F60\u53EA\u662F\u4E00\u573A\u68A6\u3002","\u8237\u7A97\u5916\uFF0C\u4E24\u9897\u592A\u9633\u6B63\u4ECE\u7D2B\u8272\u7684\u5C71\u810A\u540E\u5347\u8D77\u3002","\u8FD9\u91CC\u6709\u98CE\uFF0C\u6709\u4E91\uFF0C\u6709\u4F1A\u5728\u591C\u91CC\u53D1\u5149\u7684\u68EE\u6797\u3002","\u5F00\u666E\u52D2-442b\u2014\u2014\u4EBA\u7C7B\u7B2C\u4E00\u6B21\uFF0C\u6765\u5230\u53E6\u4E00\u9897\u6052\u661F\u7684\u8EAB\u8FB9\u3002",'<b style="color:#a0ff70">\u4ECE\u8FD9\u91CC\u5F00\u59CB\uFF0C\u4EBA\u7C7B\u6210\u4E3A\u4E86\u661F\u9645\u6587\u660E\u3002</b>']}},wm="starport-meta";function js(){try{return JSON.parse(localStorage.getItem(wm))||{}}catch{return{}}}function $a(n){try{localStorage.setItem(wm,JSON.stringify(n))}catch{}}function of(){try{for(let n of Object.keys(localStorage))n.startsWith("starport-")&&localStorage.removeItem(n)}catch{}}var bm=new URLSearchParams(location.search).get("planet"),hn=js(),tt=Ln[bm]?bm:Ln[hn.planet]?hn.planet:"mars",he=Ln[tt],kc=tt==="mars"?"starport-newhome-v1":"starport-planet-"+tt;var ot=512;function ds(){let n=document.createElement("canvas");return n.width=n.height=ot,n}function fs(n,e,t=1){let i=new ln(n);return i.wrapS=i.wrapT=ls,i.repeat.set(t,t),i.anisotropy=4,e&&(i.colorSpace=_t),i}function Qs(n,e,t,i,s,r,o,a){for(let l=0;l<t;l++){n.fillStyle=`rgba(${i},${s+e()*(r-s)})`;let c=o+e()*(a-o);n.fillRect(e()*ot,e()*ot,c,c)}}function Xa(n=1,e=4){let t=Yn(n),i=ds(),s=i.getContext("2d"),r=ds(),o=r.getContext("2d"),a=ds(),l=a.getContext("2d");s.fillStyle="#f2f0ec",s.fillRect(0,0,ot,ot),o.fillStyle="#8c8c8c",o.fillRect(0,0,ot,ot),l.fillStyle="#808080",l.fillRect(0,0,ot,ot);let c=ot/e;for(let u=0;u<e;u++)for(let f=0;f<e;f++){let p=236+Math.floor(t()*18);s.fillStyle=`rgb(${p},${p-2},${p-5})`,s.fillRect(u*c,f*c,c,c);let g=120+Math.floor(t()*40);if(o.fillStyle=`rgb(${g},${g},${g})`,o.fillRect(u*c,f*c,c,c),t()<.35){let y=c*(.25+t()*.3),x=c*(.2+t()*.25),m=u*c+c*.2+t()*c*.3,_=f*c+c*.2+t()*c*.3;l.strokeStyle="#4a4a4a",l.lineWidth=2,l.strokeRect(m,_,y,x),s.strokeStyle="rgba(80,76,70,.35)",s.lineWidth=1.5,s.strokeRect(m,_,y,x)}}for(let u=0;u<=e;u++){let f=u*c;for(let[p,g,y]of[[s,"rgba(70,64,58,.55)",2.5],[l,"#303030",4],[o,"#d0d0d0",3]])p.fillStyle=g,p.fillRect(f-y/2,0,y,ot),p.fillRect(0,f-y/2,ot,y)}for(let u=0;u<e;u++)for(let f=0;f<e;f++)for(let[p,g]of[[.08,.08],[.92,.08],[.08,.92],[.92,.92]]){let y=(u+p)*c,x=(f+g)*c;l.fillStyle="#c8c8c8",l.beginPath(),l.arc(y,x,3,0,7),l.fill(),s.fillStyle="rgba(90,86,80,.5)",s.beginPath(),s.arc(y,x,2.2,0,7),s.fill()}for(let u=0;u<70;u++){let f=t()*ot,p=30+t()*160,g=t()*ot,y=s.createLinearGradient(0,g,0,g+p);y.addColorStop(0,"rgba(150,90,60,0)"),y.addColorStop(.3,`rgba(150,90,60,${.05+t()*.08})`),y.addColorStop(1,"rgba(150,90,60,0)"),s.fillStyle=y,s.fillRect(f,g,1+t()*3,p)}let h=s.createLinearGradient(0,ot*.75,0,ot);h.addColorStop(0,"rgba(170,100,60,0)"),h.addColorStop(1,"rgba(170,100,60,.22)"),s.fillStyle=h,s.fillRect(0,0,ot,ot),Qs(s,t,2500,"120,80,60",.03,.12,1,3),Qs(o,t,1800,"255,255,255",.05,.2,1,4),s.strokeStyle="rgba(255,255,255,.25)",o.strokeStyle="rgba(40,40,40,.4)";for(let u=0;u<40;u++){let f=t()*ot,p=t()*ot,g=(t()-.5)*40,y=(t()-.5)*12;for(let x of[s,o])x.lineWidth=.8,x.beginPath(),x.moveTo(f,p),x.lineTo(f+g,p+y),x.stroke()}return{map:fs(i,!0),roughnessMap:fs(r,!1),bumpMap:fs(a,!1)}}function Sm(n=7){let e=Yn(n),t=ds(),i=t.getContext("2d"),s=ds(),r=s.getContext("2d");i.fillStyle="#e6e6e6",i.fillRect(0,0,ot,ot),r.fillStyle="#6a6a6a",r.fillRect(0,0,ot,ot);for(let o=0;o<ot;o++){let a=210+Math.floor(e()*45);i.fillStyle=`rgba(${a},${a},${a},.5)`,i.fillRect(0,o,ot,1);let l=80+Math.floor(e()*60);r.fillStyle=`rgba(${l},${l},${l},.5)`,r.fillRect(0,o,ot,1)}return Qs(i,e,800,"60,50,40",.05,.15,1,3),{map:fs(t,!0),roughnessMap:fs(s,!1)}}function Tm(n=3){let e=Yn(n),t=ds(),i=t.getContext("2d"),s=ds(),r=s.getContext("2d");i.fillStyle="#d8d2c8",i.fillRect(0,0,ot,ot),r.fillStyle="#808080",r.fillRect(0,0,ot,ot),Qs(i,e,9e3,"90,80,70",.04,.16,1,4),Qs(i,e,3e3,"255,250,240",.04,.12,1,3),Qs(r,e,6e3,"40,40,40",.1,.4,1,3);for(let a=0;a<6;a++){i.strokeStyle="rgba(70,60,50,.25)",i.lineWidth=1,i.beginPath();let l=e()*ot,c=e()*ot;i.moveTo(l,c);for(let h=0;h<12;h++)l+=(e()-.5)*50,c+=(e()-.5)*50,i.lineTo(l,c);i.stroke()}let o=i.createLinearGradient(0,0,0,ot);return o.addColorStop(0,"rgba(170,100,60,0)"),o.addColorStop(1,"rgba(170,100,60,.3)"),i.fillStyle=o,i.fillRect(0,0,ot,ot),{map:fs(t,!0,1),bumpMap:fs(s,!1,1)}}function Am(n=11){let e=Yn(n),t=ds(),i=t.getContext("2d"),s=ds(),r=s.getContext("2d");i.fillStyle="#d0c4bc",i.fillRect(0,0,ot,ot),r.fillStyle="#808080",r.fillRect(0,0,ot,ot);for(let o=0;o<300;o++){let a=e()*ot,l=e()*ot,c=6+e()*40,h=Math.floor(150+e()*90);i.fillStyle=`rgba(${h},${h-15},${h-25},.25)`,i.beginPath(),i.ellipse(a,l,c,c*(.4+e()*.6),e()*3,0,7),i.fill(),r.fillStyle=`rgba(${h},${h},${h},.25)`,r.beginPath(),r.ellipse(a,l,c,c*.6,e()*3,0,7),r.fill()}return Qs(i,e,8e3,"60,40,30",.05,.2,1,3),Qs(r,e,8e3,"20,20,20",.1,.5,1,2),{map:fs(t,!0,1),bumpMap:fs(s,!1,1)}}var M={white:new de({color:15328474,roughness:.55,metalness:.1}),panel:new de({color:13222840,roughness:.6,metalness:.2}),metal:new de({color:8159110,roughness:.4,metalness:.7}),dark:new de({color:2895670,roughness:.5,metalness:.5}),orange:new de({color:16742954,roughness:.5,metalness:.1}),glass:new de({color:10474751,roughness:.05,metalness:.3,transparent:!0,opacity:.35}),window:new de({color:2240576,emissive:16761466,emissiveIntensity:0,roughness:.2}),solar:new de({color:1780826,roughness:.25,metalness:.8}),plant:new de({color:5221962,roughness:.8,flatShading:!0}),cyan:new de({color:1127236,emissive:3401471,emissiveIntensity:2}),red:new de({color:3342336,emissive:16722474,emissiveIntensity:3}),lamp:new de({color:3351057,emissive:16767392,emissiveIntensity:0}),found:new de({color:9143160,roughness:.9}),flame:new it({color:16756832,transparent:!0,opacity:.85,blending:Et,depthWrite:!1})};{let n=Xa(1,4),e=Xa(5,3),t=Sm(),i=Tm(),s=Xa(9,2);Object.assign(M.white,{...n,bumpScale:1.4,roughness:.75,metalness:.15,color:new fe(15920612)}),Object.assign(M.panel,{...e,bumpScale:1.2,roughness:.8,metalness:.25,color:new fe(13617340)}),Object.assign(M.metal,{...t,roughness:1,metalness:.85,color:new fe(10132900)}),Object.assign(M.dark,{...s,bumpScale:1,roughness:.7,metalness:.6,color:new fe(3816772)}),Object.assign(M.orange,{...Xa(3,2),bumpScale:.8,roughness:.7,metalness:.15}),Object.assign(M.found,{...i,bumpScale:2,roughness:.95,color:new fe(10853004)}),M.glass.roughness=.02,M.glass.metalness=.1,M.glass.opacity=.28,M.glass.envMapIntensity=2.2,M.solar.roughness=.12,M.solar.envMapIntensity=1.8;for(let r in M)M[r].needsUpdate=!0}var ki=Am();{let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d");e.fillStyle="#1d3266",e.fillRect(0,0,64,64),e.strokeStyle="#9fb4e0",e.lineWidth=1.5;for(let i=0;i<=64;i+=16)e.beginPath(),e.moveTo(i,0),e.lineTo(i,64),e.stroke(),e.beginPath(),e.moveTo(0,i),e.lineTo(64,i),e.stroke();let t=new ln(n);t.colorSpace=_t,t.wrapS=t.wrapT=ls,t.repeat.set(3,2),M.solar.map=t,M.solar.color.set(16777215)}function q(n,e,t=0,i=0,s=0,r){let o=new le(n,e);return o.position.set(t,i,s),o.castShadow=!0,o.receiveShadow=!0,r&&r.add(o),o}var Je=(n,e,t)=>new We(n,e,t),Xe=(n,e,t,i=16)=>new et(n,e,t,i),Hc;function Zn(){if(Hc)return Hc;let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.6)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Hc=new ln(n),Hc}function Pe(n,e,t,i=0,s=0,r=0){let o=new Ui(new yi({map:Zn(),color:n,transparent:!0,blending:Et,depthWrite:!1}));return o.scale.set(e,e,1),o.position.set(i,s,r),t&&t.add(o),o}function wn(n,e,t=!1){let i=q(t?Je(e*2,4,e*2):Xe(e,e*1.05,4,20),M.found,0,-1.8,0,n);i.castShadow=!1,i.userData.found=!0}var Hi={solar(n,e){wn(n,2.2,!0),q(Xe(.18,.25,2.2),M.metal,0,1.1,0,n);let t=new we;t.position.y=2.3,n.add(t);let i=q(Je(4.2,.12,2.8),M.solar,0,0,0,t);q(Je(4.4,.08,.1),M.metal,0,-.05,1.42,t),q(Je(4.4,.08,.1),M.metal,0,-.05,-1.42,t),e.pivot=t,e.panel=i},oxygen(n,e){wn(n,3),q(Xe(1,1,3.6),M.white,-1.3,1.8,0,n),q(new Ge(1,16,8,0,Math.PI*2,0,Math.PI/2),M.white,-1.3,3.6,0,n),q(Xe(1,1,3.6),M.white,1.3,1.8,0,n),q(new Ge(1,16,8,0,Math.PI*2,0,Math.PI/2),M.white,1.3,3.6,0,n),q(Xe(1.02,1.02,.3),M.orange,-1.3,2.4,0,n),q(Xe(1.02,1.02,.3),M.orange,1.3,2.4,0,n),q(Je(1.4,1.6,1.8),M.panel,0,.8,1,n),q(Xe(.12,.12,2.6),M.metal,0,3.2,0,n).rotation.z=Math.PI/2;let t=new we;t.position.set(0,1.75,1.95),n.add(t);for(let i=0;i<4;i++){let s=q(Je(.15,.7,.05),M.dark,0,0,0,t);s.rotation.z=i*Math.PI/2,s.position.set(Math.sin(i*Math.PI/2)*.3,Math.cos(i*Math.PI/2)*.3,0),s.rotation.z=-i*Math.PI/2}e.fan=t,e.light=Pe(6741503,1.2,n,0,1.75,2)},habitat(n,e){wn(n,6.2),q(Xe(6,6,1.2,28),M.panel,0,.6,0,n);let t=q(new Ge(5.8,28,12,0,Math.PI*2,0,Math.PI/2),M.white,0,1.2,0,n);t.scale.y=.85;let i=q(new et(5.72,5.84,.7,28,1,!0),M.window,0,2,0,n);q(Xe(.1,.1,3),M.metal,0,7.4,0,n),e.tip=Pe(16728128,1.2,n,0,8.9,0),q(Je(2.2,2.6,2.8),M.white,0,1.3,6.4,n),q(Je(1.2,2,.1),M.dark,0,1.1,7.82,n),q(Je(2.3,.3,2.9),M.orange,0,2.7,6.4,n),e.windows=[i]},extractor(n,e){wn(n,2.6,!0),q(Je(4,.6,4),M.panel,0,.3,0,n);for(let[i,s]of[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4]])q(Xe(.12,.15,6),M.metal,i*.7,3.3,s*.7,n).rotation.set(s*.08,0,-i*.08);q(Je(1.6,.4,1.6),M.orange,0,6.2,0,n);let t=q(Xe(.3,.3,4.5),M.metal,0,3,0,n);q(Xe(.9,.9,1.6),M.white,1.7,1.4,1.2,n),e.drill=t,e.light=Pe(10476799,1.2,n,1.7,2.5,1.2)},greenhouse(n,e){wn(n,5,!0),q(Je(10,.5,6),M.panel,0,.25,0,n);let t=q(new et(3,3,10,20,1,!1,0,Math.PI),M.glass,0,.5,0,n);t.rotation.set(0,0,Math.PI/2),t.castShadow=!1;for(let i=0;i<5;i++)q(new Ye(3,.08,6,20,Math.PI),M.white,-4.5+i*2.25,.5,0,n).rotation.y=Math.PI/2;for(let i=0;i<14;i++){let s=-4.2+i%7*1.4,r=i<7?-1.2:1.2,o=q(new zt(.45,1.2+i%3*.3,6),M.plant,s,1.2,r,n);o.castShadow=!1}q(Je(9.6,.3,.5),M.dark,0,.7,-1.2,n),q(Je(9.6,.3,.5),M.dark,0,.7,1.2,n),e.light=Pe(16737996,4,n,0,2.5,0)},fabricator(n,e){wn(n,4,!0),q(Je(7,3.6,5),M.panel,0,1.8,0,n),q(Je(7.1,.4,5.1),M.orange,0,3.4,0,n),q(Je(3,2.6,.1),M.dark,0,1.3,2.52,n);let t=new we;t.position.set(2.2,3.6,0),n.add(t),q(Xe(.35,.45,.6),M.metal,0,.3,0,t);let i=q(Je(.3,2.2,.3),M.orange,0,1.4,0,t),s=q(Je(.25,1.6,.25),M.metal,0,2.4,.6,t);s.rotation.x=.9,e.arm=t,e.spark=Pe(16764006,1.2,n,2.2,5.7,1.2),q(Je(1.2,1.2,1.2),M.dark,-2.4,.6,3.2,n),q(Je(1,1,1),M.dark,-1.1,.5,3.1,n)},turret(n,e){wn(n,1.8),q(Xe(1.4,1.8,1.2,12),M.metal,0,.6,0,n),q(Xe(.5,.7,1.2,10),M.dark,0,1.8,0,n);let t=new we;t.position.y=2.7,n.add(t),q(Je(1.6,1,1.8),M.white,0,0,0,t),q(Je(1.65,.2,1.85),M.orange,0,.35,0,t),q(Xe(.12,.12,2.2,8),M.dark,-.4,0,-1.6,t).rotation.x=Math.PI/2,q(Xe(.12,.12,2.2,8),M.dark,.4,0,-1.6,t).rotation.x=Math.PI/2,e.eye=Pe(3401471,.9,t,0,.1,-.95),e.head=t},reactor(n,e){wn(n,5.2),q(Xe(5,5.2,1.4,24),M.panel,0,.7,0,n);let t=q(new Ge(2,20,14),M.cyan,0,4.2,0,n);t.castShadow=!1;let i=q(new Ye(3.2,.35,10,32),M.white,0,4.2,0,n),s=q(new Ye(3.2,.35,10,32),M.white,0,4.2,0,n);s.rotation.x=Math.PI/2;for(let r=0;r<4;r++){let o=r*Math.PI/2;q(Je(.6,3,.6),M.metal,Math.cos(o)*3.6,2.2,Math.sin(o)*3.6,n)}e.core=t,e.r1=i,e.r2=s,e.light=Pe(3401471,9,n,0,4.2,0)},beacon(n,e){let t=q(Xe(7,7.3,.6,8),M.found,0,0,0,n);q(Xe(7.3,7.6,4,8),M.found,0,-2.3,0,n).castShadow=!1,q(new vn(4.2,4.8,32),M.orange,0,.32,0,n).rotation.x=-Math.PI/2,q(new vn(1.5,2,4),M.white,0,.32,0,n).rotation.x=-Math.PI/2,e.lights=[];for(let i=0;i<8;i++){let s=i*Math.PI/4+Math.PI/8;e.lights.push(Pe(16755251,1.2,n,Math.cos(s)*6.6,.5,Math.sin(s)*6.6))}q(Xe(.18,.3,9,8),M.metal,8.6,4.2,0,n),q(Je(1.6,.1,1.2),M.white,8.6,8.7,0,n).rotation.z=.4,e.tip=Pe(16724016,2,n,8.6,9.2,0),t.castShadow=!1},lamp(n,e){q(Xe(.4,.5,.4,8),M.found,0,0,0,n),q(Xe(.08,.1,4.2,6),M.metal,0,2.1,0,n),q(Je(.6,.2,.6),M.dark,0,4.3,0,n);let t=q(new Ge(.2,8,6),M.lamp,0,4.15,0,n);t.castShadow=!1,e.glow=Pe(16767392,3,n,0,4.1,0)},terraformer(n,e){wn(n,7),q(Xe(7,7.5,2,6),M.panel,0,1,0,n),q(Xe(2.5,4.5,26,6),M.white,0,15,0,n);for(let i=0;i<3;i++)q(Xe(4.6-i*.7,4.6-i*.7,.8,6),M.orange,0,6+i*8,0,n);e.rings=[];for(let i=0;i<3;i++){let s=q(new Ye(6-i*1.2,.25,8,40),M.cyan,0,10+i*8,0,n);s.castShadow=!1,e.rings.push(s)}for(let i=0;i<6;i++){let s=i*Math.PI/3,r=q(Je(1.2,10,1.2),M.metal,Math.cos(s)*6,5,Math.sin(s)*6,n);r.rotation.y=-s}let t=q(new et(.6,1.4,400,12,1,!0),new it({color:6743807,transparent:!0,opacity:0,blending:Et,depthWrite:!1,side:tn}),0,228,0,n);t.castShadow=!1,t.receiveShadow=!1,e.beam=t,e.top=Pe(6743807,10,n,0,28,0)}};function Lm(){let n=new we;q(Xe(1.2,2.4,5,12),M.white,0,3.5,0,n),q(new zt(1.2,2.2,12),M.white,0,7.1,0,n),q(Xe(2.45,2.45,.4,12),M.orange,0,2.4,0,n);for(let i=0;i<3;i++){let s=i*Math.PI*2/3,r=q(Je(.2,2.4,1.6),M.panel,Math.cos(s)*2.3,1.6,Math.sin(s)*2.3,n);r.rotation.y=-s}let e=new le(new zt(1.1,5,12,1,!0),M.flame);e.rotation.x=Math.PI,e.position.y=-1.6,n.add(e);let t=Pe(16752704,9,n,0,-.5,0);return{group:n,flame:e,flameGlow:t}}var Rm=[16751162,3850495,8257418,16740277,16769354].map(n=>new de({color:1118481,emissive:n,emissiveIntensity:.6,roughness:.1,metalness:.6})),Cm=[15525596,14278116,15259332].map(n=>new de({color:n,roughness:.7}));function Dm(n){let e=new we,t=Cm[n%Cm.length],i=Rm[n%Rm.length],s=(g,y,x,m,_,E=e)=>{let v=new le(g,y);return v.position.set(x,m,_),v.castShadow=!0,E.add(v),v},r=new us([[0,0],[.2,0],[.24,.12],[.27,.42],[.25,.55],[.12,.62],[0,.62]].map(([g,y])=>new ne(g,y)),12),o=s(r,t,0,.72,0);o.scale.z=.8,s(new Ye(.2,.04,6,16),M.orange,0,.77,0).rotation.x=Math.PI/2,s(new et(.16,.18,.06,12),M.dark,0,1.36,0);let a=s(new Ge(.21,16,12),t,0,1.58,0),l=s(new Ge(.19,16,10,Math.PI*.12,Math.PI*.76,Math.PI*.28,Math.PI*.4),i,0,1.58,.035);s(new We(.02,.12,.02),M.metal,.12,1.82,-.05).rotation.z=-.3,s(new We(.36,.42,.18),M.panel,0,1.08,-.24),s(new We(.3,.06,.19),M.orange,0,1.25,-.24),Pe(9306032,.25,e,.12,.96,-.34);let c=(g,y,x,m,_)=>{let E=new we;E.position.set(g,y,0),e.add(E);let v=s(new _c(m,x,4,8),t,0,-x/2-m,0,E);return s(new et(m*1.15,m*1.15,.05,8),_?M.orange:M.dark,0,-x*.45,0,E),_?s(new We(m*2.4,.1,m*3.4),M.dark,0,-x-m*1.6,.04,E):s(new Ge(m*1.2,8,6),M.dark,0,-x-m*1.6,0,E),E},h=c(-.11,.74,.5,.075,!0),u=c(.11,.74,.5,.075,!0),f=c(-.33,1.27,.42,.06,!1),p=c(.33,1.27,.42,.06,!1);return f.rotation.z=-.12,p.rotation.z=.12,{group:e,legL:h,legR:u,armL:f,armR:p,body:o,head:a,visor:l}}var zw=new de({color:he.enemy[0],roughness:.3,metalness:.6,flatShading:!0,emissive:1049856}),T2=new de({color:he.enemy[1],emissive:he.enemy[2],emissiveIntensity:.8,roughness:.2,flatShading:!0}),A2=new it({color:16764992});function R2(n,e,t){let i=document.createElement("canvas");i.width=128,i.height=256;let s=i.getContext("2d");s.fillStyle="#000",s.fillRect(0,0,128,256);let r=t,o=()=>(r=(r*9301+49297)%233280,r/233280),a=128/n,l=256/e;for(let h=0;h<n;h++)for(let u=0;u<e;u++)o()<.65&&(s.fillStyle=o()<.8?"#ffd9a0":"#a0d8ff",s.fillRect(h*a+a*.2,u*l+l*.25,a*.6,l*.5));let c=new ln(i);return c.colorSpace=_t,c}var af=[];function Pm(n){let e=new de({color:14210252,roughness:.5,metalness:.2,emissive:16777215,emissiveMap:R2(6,14,n),emissiveIntensity:.2});return af.push(e),e}var Im=[Pm(7),Pm(31)],qa;function C2(){if(qa)return qa;let n=document.createElement("canvas");n.width=256,n.height=128;let e=n.getContext("2d");e.fillStyle="#0a3a6a",e.fillRect(0,0,256,128),e.strokeStyle="rgba(127,230,255,.35)",e.lineWidth=1;for(let i=0;i<256;i+=16)e.beginPath(),e.moveTo(i,0),e.lineTo(i,128),e.stroke();for(let i=0;i<128;i+=16)e.beginPath(),e.moveTo(0,i),e.lineTo(256,i),e.stroke();e.fillStyle="#7fffc8";let t=[[40,40,22,16],[52,62,10,20],[70,86,12,18],[118,36,16,12],[128,56,14,26],[150,34,40,18],[176,52,22,14],[206,88,16,10],[96,24,12,8],[190,22,20,8]];for(let[i,s,r,o]of t)e.beginPath(),e.ellipse(i,s,r,o,.3,0,Math.PI*2),e.fill();return e.fillStyle="#ffffff",e.fillRect(0,0,256,6),e.fillRect(0,122,256,6),qa=new ln(n),qa.colorSpace=_t,qa}Object.assign(Hi,{plaza(n,e){wn(n,7.2),q(Xe(7.2,7.4,.4,8),M.panel,0,.2,0,n),q(new vn(5.4,5.8,48),M.orange,0,.42,0,n).rotation.x=-Math.PI/2,q(Xe(1.6,2,1.1,16),M.white,0,.95,0,n),q(Xe(1.65,1.65,.15,16),M.cyan,0,1.52,0,n);for(let r=0;r<6;r++){let o=r*Math.PI/3+Math.PI/6,a=q(Je(2.4,.4,.7),M.panel,Math.cos(o)*5.2,.6,Math.sin(o)*5.2,n);a.rotation.y=-o+Math.PI/2,q(Je(.12,3.2,.12),M.metal,Math.cos(o+.5)*6.6,1.8,Math.sin(o+.5)*6.6,n),Pe(16767392,1.1,n,Math.cos(o+.5)*6.6,3.5,Math.sin(o+.5)*6.6)}let t=new le(new Ge(1.5,32,20),new it({map:C2(),transparent:!0,opacity:.75,blending:Et,depthWrite:!1}));t.position.y=4,n.add(t);let i=Pe(6736127,5,n,0,4,0),s=new le(new et(1.2,1.6,2.4,20,1,!0),new it({color:8382207,transparent:!0,opacity:.12,blending:Et,depthWrite:!1,side:tn}));s.position.y=2.7,n.add(s),e.earth=t,e.halo=i},drones(n,e){wn(n,3.8,!0),q(Je(7.4,.5,7.4),M.panel,0,.25,0,n);for(let[s,r]of[[-1.9,-1.9],[1.9,-1.9],[-1.9,1.9],[1.9,1.9]])q(Xe(1.1,1.1,.1,16),M.dark,s,.55,r,n),q(new vn(.75,.9,20),M.orange,s,.62,r,n).rotation.x=-Math.PI/2;q(Je(1.2,4,1.2),M.white,3,2.2,3,n),q(Je(1.25,.3,1.25),M.orange,3,3.6,3,n);let t=new we;t.position.set(3,4.6,3),n.add(t);let i=q(new Ge(.9,12,6,0,Math.PI*2,0,Math.PI/3),M.white,0,0,0,t);i.rotation.x=Math.PI*.6,q(Xe(.05,.05,.8,4),M.metal,0,.1,.2,t).rotation.x=1.1,e.dish=t,e.light=Pe(8382207,1.4,n,3,5.4,3)},apartment(n,e){wn(n,4.4,!0),q(Je(8,1,8),M.panel,0,.5,0,n),q(Je(5,18,5),Im[0],-1.2,10,-1.2,n),q(Je(4,12,4),Im[1],2,7,2,n),q(Je(5.2,.5,5.2),M.orange,-1.2,19.2,-1.2,n),q(Je(4.2,.5,4.2),M.orange,2,13.2,2,n),q(Xe(.1,.1,4,6),M.metal,-1.2,21.4,-1.2,n),e.tip=Pe(16728128,1.6,n,-1.2,23.5,-1.2),q(new Ge(1.6,16,8,0,Math.PI*2,0,Math.PI/2),M.glass,2,13.4,2,n).castShadow=!1},vfarm(n,e){wn(n,4),q(Xe(3.8,4,1,16),M.panel,0,.5,0,n);let t=q(Xe(3.2,3.2,14,16),M.glass,0,8,0,n);t.castShadow=!1;for(let i=0;i<6;i++){q(Xe(3,3,.25,16),M.white,0,2+i*2.3,0,n);for(let s=0;s<7;s++){let r=s/7*Math.PI*2+i,o=q(new zt(.4,.9,5),M.plant,Math.cos(r)*2.2,2.6+i*2.3,Math.sin(r)*2.2,n);o.castShadow=!1}}q(new Ge(3.2,16,8,0,Math.PI*2,0,Math.PI/2),M.glass,0,15,0,n).castShadow=!1,e.light=Pe(16737996,9,n,0,8,0)},lifehub(n,e){wn(n,5.5),q(Xe(5.5,5.8,1.2,20),M.panel,0,.6,0,n);let t=q(new Ge(4.5,20,12,0,Math.PI*2,0,Math.PI/2),M.white,0,1.2,0,n);q(new Ye(4.6,.3,8,32),M.orange,0,1.6,0,n).rotation.x=Math.PI/2;for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4;q(Xe(.9,.9,5,12),M.white,Math.cos(r)*5.2,2.5,Math.sin(r)*5.2,n),q(Xe(.95,.95,.4,12),M.cyan,Math.cos(r)*5.2,4.2,Math.sin(r)*5.2,n)}let i=new we;i.position.y=6,n.add(i);for(let s=0;s<3;s++){let r=q(Je(4,.1,.6),M.dark,0,0,0,i);r.rotation.y=s*Math.PI/3}e.fan=i,e.light=Pe(6741503,5,n,0,6,0)},launch(n,e){wn(n,9,!0),q(Je(18,1.2,18),M.found,0,.6,0,n),q(new vn(5,6,32),M.orange,0,1.25,0,n).rotation.x=-Math.PI/2;for(let[s,r]of[[6,-1.5],[6,1.5],[9,-1.5],[9,1.5]])q(Je(.4,34,.4),M.metal,s,18,r,n);for(let s=0;s<8;s++)q(Je(3.4,.25,3.4),M.metal,7.5,4+s*4,0,n);q(Je(4,.5,.8),M.orange,4.2,26,0,n);let t=new we;t.position.y=1.2,n.add(t),q(Xe(2.4,2.8,24,20),M.white,0,13,0,t),q(new zt(2.4,7,20),M.white,0,28.5,0,t),q(Xe(2.45,2.45,1.2,20),M.orange,0,20,0,t),q(Xe(2.45,2.45,.6,20),M.dark,0,8,0,t);for(let s=0;s<4;s++){let r=s*Math.PI/2,o=q(Je(.4,6,3),M.panel,Math.cos(r)*2.8,3.5,Math.sin(r)*2.8,t);o.rotation.y=-r}for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4;q(Xe(.8,1.2,2,10),M.dark,Math.cos(r)*1.2,.6,Math.sin(r)*1.2,t)}let i=new le(new zt(3,16,16,1,!0),M.flame);i.rotation.x=Math.PI,i.position.y=-8,i.visible=!1,t.add(i),e.ship=t,e.flame=i,e.tip=Pe(16777215,3,t,0,32.5,0)},monument(n,e){wn(n,6),q(Xe(6,6.5,1.5,8),M.panel,0,.75,0,n),q(Xe(4.5,5,1,8),M.white,0,2,0,n);let t=q(new et(.6,1.8,30,4),M.white,0,17,0,n);t.rotation.y=Math.PI/4,e.rings=[];let i=[new de({color:3346688,emissive:16742954,emissiveIntensity:2}),new de({color:8755,emissive:6743807,emissiveIntensity:2}),new de({color:1127168,emissive:10551104,emissiveIntensity:2})];for(let s=0;s<3;s++){let r=q(new Ye(4-s*.6,.18,8,40),i[s],0,14+s*5,0,n);r.castShadow=!1,e.rings.push(r)}e.top=Pe(16777215,8,n,0,33,0)}});function Um(){let n=new we,e=q(new Ge(.42,14,8),M.white,0,0,0,n);e.scale.y=.55,q(Xe(.44,.44,.08,14),M.orange,0,0,0,n);let t=[];for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4,o=Math.cos(r)*.7,a=Math.sin(r)*.7;q(Je(.6,.05,.08),M.dark,o*.55,0,a*.55,n).rotation.y=-r;let l=q(Xe(.28,.28,.02,10),new it({color:2236962,transparent:!0,opacity:.45}),o,.08,a,n);t.push(l)}let i=Pe(8382207,.9,n,0,-.2,0);return{group:n,rotors:t,eye:i}}var lf={crystal:T2,eye:A2};var Sn=1400,je=Sn/2,tr=400,hf=Sn/tr,Fi=tr+1,Ya=Nc(he.seed),Oc=Nc(he.seed*7+3),Nm=Nc(he.seed+42),ps=[],Oi,er,zc,Lr,Fc;function P2(){let n=Yn(he.seed);for(ps.push({x:150,z:-120,r:70,depth:16,rim:6});ps.length<he.craters;){let e=(n()-.5)*(Sn-260),t=(n()-.5)*(Sn-260);if(Math.hypot(e,t)<130)continue;let i=10+Math.pow(n(),2.2)*85;ps.push({x:e,z:t,r:i,depth:i*(.18+n()*.12),rim:i*(.05+n()*.06)})}}var I2=0;function km(n,e){let t=rf(Ya,n*.0016,e*.0016,5)*he.hills,i=1-Math.abs(Oc(n*.0042,e*.0042));t+=i*i*i*he.ridges,t+=rf(Nm,n*.025,e*.025,3)*he.detail;for(let s of ps){let r=n-s.x,o=e-s.z,a=r*r+o*o;if(a>s.r*s.r*4)continue;let l=Math.sqrt(a)/s.r;l<1&&(t-=s.depth*(1-l*l)),t+=s.rim*Math.exp(-(((l-1)/.28)**2))}return t}var Hm=0;function L2(n,e){let t=km(n,e)-Hm,i=Math.hypot(n,e);t=Rt(I2+Nm(n*.02,e*.02)*.6,t,In(45,150,i));let s=Math.max(Math.abs(n),Math.abs(e)),r=je-200;if(s>r){let o=(s-r)/200;t+=o*o*160*(.65+.35*Ya(n*.01,e*.01))}return t}function ve(n,e){let t=Ei((n+je)/hf,0,tr-.001),i=Ei((e+je)/hf,0,tr-.001),s=Math.floor(t),r=Math.floor(i),o=t-s,a=i-r,l=Oi[r*Fi+s],c=Oi[r*Fi+s+1],h=Oi[(r+1)*Fi+s],u=Oi[(r+1)*Fi+s+1];return o+a<1?l+(c-l)*o+(h-l)*a:u+(h-u)*(1-o)+(c-u)*(1-a)}function Dr(n,e,t=2){let i=ve(n,e);return Math.max(Math.abs(ve(n+t,e)-i),Math.abs(ve(n-t,e)-i),Math.abs(ve(n,e+t)-i),Math.abs(ve(n,e-t)-i))/t}function Bc(n,e,t=60){let i=0;for(let s=.2;s<=t;s+=.25){let r=n.x+e.x*s,o=n.y+e.y*s,a=n.z+e.z*s;if(o<ve(r,a)){let l=i,c=s;for(let h=0;h<8;h++){let u=(l+c)/2;n.y+e.y*u<ve(n.x+e.x*u,n.z+e.z*u)?c=u:l=u}return{dist:c,point:new T(n.x+e.x*c,n.y+e.y*c,n.z+e.z*c)}}i=s}return null}function Fm(n){P2(),Hm=km(0,0),Oi=new Float32Array(Fi*Fi),Lr=new Wn(Sn,Sn,tr,tr),Lr.rotateX(-Math.PI/2);let e=Lr.attributes.position;for(let s=0;s<e.count;s++){let r=L2(e.getX(s),e.getZ(s));e.setY(s,r),Oi[s]=r}er=new Float32Array(e.count*3);let t=new fe;for(let s=0;s<e.count;s++){let r=e.getX(s),o=e.getZ(s),a=Oi[s],l=s%Fi,c=s/Fi|0,h=Oi[c*Fi+Math.min(l+1,tr)]-a,u=Oi[Math.min(c+1,tr)*Fi+l]-a,f=Ei(Math.hypot(h,u)/hf*1.4,0,1),p=Ya(r*.012,o*.012)*.5+.5,g=Oc(r*.08,o*.08)*.5+.5,y=he.ground.a,x=he.ground.b,m=he.ground.steep,_=he.ground.low,E=Rt(y[0],x[0],p),v=Rt(y[1],x[1],p),L=Rt(y[2],x[2],p);E*=.9+g*.18,v*=.9+g*.16,L*=.9+g*.14,E=Rt(E,m[0],f),v=Rt(v,m[1],f),L=Rt(L,m[2],f);let R=In(-4,-16,a);if(E=Rt(E,_[0],R*.6),v=Rt(v,_[1],R*.6),L=Rt(L,_[2],R*.6),he.id==="europa"){let I=Math.abs(Oc(r*.006,o*.006));if(I<.05){let P=1-I/.05;E=Rt(E,.55,P*.7),v=Rt(v,.32,P*.7),L=Rt(L,.24,P*.7)}}t.setRGB(E,v,L,_t),er[s*3]=t.r,er[s*3+1]=t.g,er[s*3+2]=t.b}zc=new Jt(er.slice(),3),Lr.setAttribute("color",zc),Lr.computeVertexNormals();let i=new de({vertexColors:!0,roughness:.93,metalness:0});return i.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},Fc=new le(Lr,i),Fc.receiveShadow=!0,n.add(Fc),D2(n),Fc}function D2(n){let e=Yn(99),t=new ii(1,0),i=t.attributes.position;for(let p=0;p<i.count;p++){let g=.75+e()*.5;i.setXYZ(p,i.getX(p)*g,i.getY(p)*g*.8,i.getZ(p)*g)}t.computeVertexNormals();let s=2600,r=new Xs(t,new de({color:he.rock,roughness:he.id==="europa"?.35:.92,flatShading:!0,map:ki.map,bumpMap:ki.bumpMap,bumpScale:3}),s);r.castShadow=!0,r.receiveShadow=!0;let o=new xt,a=new an,l=new T,c=new T,h=new yn,u=new fe,f=0;for(;f<s;){let p=(e()-.5)*(Sn-120),g=(e()-.5)*(Sn-120);if(Math.hypot(p,g)<22||Ya(p*.01,g*.01)<-.1&&e()<.7)continue;let m=e()<.06?1.8+e()*2.5:.2+Math.pow(e(),2)*1.2;l.set(m*(.8+e()*.6),m*(.6+e()*.5),m*(.8+e()*.6)),h.set(e()*.5,e()*Math.PI*2,e()*.5),a.setFromEuler(h),c.set(p,ve(p,g)+l.y*.25,g),o.compose(c,a,l),r.setMatrixAt(f,o),u.setHSL(he.rockHSL[0]+e()*.02,he.rockHSL[1]+e()*.2,he.rockHSL[2]+e()*.14),r.setColorAt(f,u),m>1&&d.colliders.add({x:p,z:g,r:Math.max(l.x,l.z)*.85,kind:"rock"}),f++}n.add(r),he.id==="kepler"&&k2(n,e)}var U2=new fe().setRGB(.3,.46,.2,_t),N2=new fe().setRGB(.46,.5,.26,_t),cf=new fe().setRGB(.2,.38,.52,_t);function uf(n,e){let t=Lr.attributes.position,i=zc.array,s=60+e*520;for(let r=0;r<t.count;r++){let o=t.getX(r),a=t.getZ(r),l=Oi[r],c=0;for(let p of n){let g=Math.hypot(o-p.x,a-p.z);c=Math.max(c,In(s,s*.55,g))}let h=er[r*3],u=er[r*3+1],f=er[r*3+2];if(c>0){let p=Oc(o*.03,a*.03)*.5+.5,g=c*Ei(p*1.4-.1,0,1)*Ei(e*1.5,0,1),y=p>.6?U2:N2;if(h=Rt(h,y.r,g),u=Rt(u,y.g,g),f=Rt(f,y.b,g),l<-9&&e>.5){let x=c*In(-9,-13,l)*In(.5,1,e);h=Rt(h,cf.r,x),u=Rt(u,cf.g,x),f=Rt(f,cf.b,x)}}i[r*3]=h,i[r*3+1]=u,i[r*3+2]=f}zc.needsUpdate=!0}function Om(n=350){let e=document.createElement("canvas");e.width=e.height=n;let t=e.getContext("2d"),i=t.createImageData(n,n);for(let s=0;s<n;s++)for(let r=0;r<n;r++){let o=(r/n-.5)*Sn,a=(s/n-.5)*Sn,l=ve(o,a),c=ve(o+4,a+4)-l,h=Ei(.55+l*.006-c*.08,.15,1),u=(s*n+r)*4,f=he.ground.b;i.data[u]=255*f[0]*h,i.data[u+1]=255*f[1]*h,i.data[u+2]=255*f[2]*h,i.data[u+3]=255}return t.putImageData(i,0,0),e}var df=new de({color:8010400,emissive:4259776,emissiveIntensity:.1,roughness:.6,flatShading:!0});function k2(n,e){let t=new et(.25,.45,1,6);t.translate(0,.5,0);let i=new Ge(1,8,5,0,Math.PI*2,0,Math.PI/2),s=900,r=new Xs(t,new de({color:14209208,roughness:.8,flatShading:!0}),s),o=new Xs(i,df,s);r.castShadow=o.castShadow=!0;let a=new xt,l=new an,c=new T,h=new T,u=new fe,f=0;for(;f<s;){let p=(e()-.5)*(Sn-300),g=(e()-.5)*(Sn-300);if(Math.hypot(p,g)<50||Ya(p*.008,g*.008)<.05||Dr(p,g,2)>.5)continue;let y=3+e()*9,x=1.5+e()*3,m=ve(p,g);c.set(1+y*.05,y,1+y*.05),h.set(p,m-.2,g),l.identity(),a.compose(h,l,c),r.setMatrixAt(f,a),c.set(x,x*.5,x),h.set(p,m+y-.3,g),a.compose(h,l,c),o.setMatrixAt(f,a),u.setHSL(.72+e()*.2,.6,.4+e()*.2),o.setColorAt(f,u),d.colliders.add({x:p,z:g,r:.6,kind:"flora"}),f++}n.add(r,o)}var Gc=6e3,zi=60,nr,Za,pf,ff=new T(1e9,0,0),zm=new xt,Bm=new an,Gm=new T,Vm=new T,Wm=new yn;function $m(){let n=new ii(.12,0),e=new de({color:16777215,roughness:.95,flatShading:!0,map:ki.map});nr=new Xs(n,e,Gc),nr.receiveShadow=!0,nr.frustumCulled=!1;let t=Yn(31);Za=new Float32Array(Gc*2),pf=[];let i=new fe;for(let s=0;s<Gc;s++){Za[s*2]=t()*zi*2,Za[s*2+1]=t()*zi*2;let r=Math.pow(t(),3);pf.push([.4+r*3.2,.25+t()*.6,.4+r*3,t()*6.28,t()*.6]),i.setHSL(he.rockHSL[0]+t()*.03,he.rockHSL[1]*(.5+t()*.5),Math.min(.75,he.rockHSL[2]*(1.2+t()*.9))),nr.setColorAt(s,i)}d.scene.add(nr)}function Xm(){if(!nr)return;let n=d.player.pos;if(Math.abs(n.x-ff.x)<3&&Math.abs(n.z-ff.z)<3)return;ff.copy(n);let e=n.x-zi,t=n.z-zi;for(let i=0;i<Gc;i++){let s=e+((Za[i*2]-e)%(zi*2)+zi*2)%(zi*2),r=t+((Za[i*2+1]-t)%(zi*2)+zi*2)%(zi*2),o=pf[i];Gm.set(o[0],o[0]*o[1],o[2]),Wm.set(o[4],o[3],0),Bm.setFromEuler(Wm),Vm.set(s,ve(s,r)+.02,r),zm.compose(Vm,Bm,Gm),nr.setMatrixAt(i,zm)}nr.instanceMatrix.needsUpdate=!0}var H2=540,Ja,Fo,si,Oo,mf,ja,gf,rr,Qa=(n,e,t)=>new fe().setRGB(n,e,t,_t),ir=he.sky,sr=n=>Qa(n[0],n[1],n[2]),Bi={dayTop:sr(ir.dayTop),dayHor:sr(ir.dayHor),setTop:sr(ir.setTop),setHor:sr(ir.setHor),nightTop:sr(ir.nightTop),nightHor:sr(ir.nightHor),earthTop:Qa(.22,.44,.82),earthHor:Qa(.68,.8,.92),stormHor:sr(ir.storm),halo:sr(ir.halo)},Gi={},xf,qm,Km,Vc=null,Ym=0,yf={mars:[.35,[.2,.9,.7],[.3,.5,1]],europa:[.6,[.4,.6,1],[.8,.4,1]],kepler:[1,[.3,1,.5],[.9,.3,.9]]}[he.id],ms;function F2(n){let e=new et(1700,1700,900,160,1,!0,-1.2,2.6);ms=new le(e,new nn({uniforms:{uT:{value:0},uI:{value:0},uC1:{value:new fe(...yf[1])},uC2:{value:new fe(...yf[2])}},vertexShader:`uniform float uT; varying vec2 vUv;
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
      }`,transparent:!0,blending:Et,depthWrite:!1,side:tn,fog:!1})),ms.position.y=700,ms.rotation.y=2.2,ms.frustumCulled=!1,ms.renderOrder=-8,n.add(ms)}var O2=Qa(.36,.42,.62),z2=Qa(.75,.65,.55),Ka=new fe,Zm=new fe,bi=new T;function Jm(n){rr=new nn({uniforms:{uTop:{value:new fe},uHor:{value:new fe},uSunDir:{value:new T(0,1,0)},uSunCol:{value:new fe(1,.95,.85)},uHalo:{value:new fe},uSunVis:{value:1}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`
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
      }`,side:bn,depthWrite:!1}),Ja=new le(new Ge(4e3,32,16),rr),Ja.frustumCulled=!1,Ja.renderOrder=-10,n.add(Ja),F2(n);let e=new At,t=[],i=[];for(let o=0;o<2600;o++){let a=Math.random()*2-1,l=Math.random()*Math.PI*2,c=Math.sqrt(1-a*a);if(a<-.05)continue;t.push(c*Math.cos(l)*3500,a*3500,c*Math.sin(l)*3500);let h=.35+Math.random()*.45,u=Math.random();i.push(h*(u>.8?1:.85),h*.9,h*(u<.2?1:.95))}t.push(-1800,1500,-2400),i.push(.5,.75,1.4),e.setAttribute("position",new Ke(t,3)),e.setAttribute("color",new Ke(i,3)),Fo=new ti(e,new $n({size:3,map:Zn(),sizeAttenuation:!1,vertexColors:!0,transparent:!0,depthWrite:!1,fog:!1})),Fo.frustumCulled=!1,Fo.renderOrder=-9,n.add(Fo);let s=new de({color:9076080,roughness:1,fog:!1,flatShading:!0});if(ja=new le(new Xn(60,1),s),ja.scale.set(1.3,.9,1),gf=new le(new Xn(24,1),s),he.extras==="moons"&&n.add(ja,gf),he.extras==="jupiter"){let o=document.createElement("canvas");o.width=512,o.height=256;let a=o.getContext("2d"),l=["#e8d8c0","#c89a70","#f0e6d4","#b07850","#e0c8a8","#9a6a48","#efe2cc","#c8a07a","#e6d6bc"];for(let p=0;p<256;p++)a.fillStyle=l[Math.floor(p/256*l.length*2+Math.sin(p*.3)*.6)%l.length],a.fillRect(0,p,512,1);a.globalAlpha=.25;for(let p=0;p<400;p++)a.fillStyle=l[p%l.length],a.fillRect(Math.random()*512,Math.random()*256,30+Math.random()*80,2);a.globalAlpha=1,a.fillStyle="#b8583a",a.beginPath(),a.ellipse(330,165,34,16,0,0,Math.PI*2),a.fill();let c=new ln(o);c.colorSpace=_t;let h=new le(new Ge(900,48,32),new it({map:c,fog:!1}));h.rotation.z=.06;let u=new le(new Ge(905,48,32,Math.PI*.55,Math.PI),new it({color:0,transparent:!0,opacity:.55,fog:!1}));h.add(u);let f=new le(new Xn(30,2),new it({color:15257712,fog:!1}));n.add(h,f),Gi={jup:h,io:f}}if(he.extras==="twinsuns"){let o=new Ui(new yi({map:Zn(),color:16751200,transparent:!0,blending:Et,depthWrite:!1,fog:!1}));o.scale.set(500,500,1);let a=new le(new vn(700,1100,64),new it({color:14207231,transparent:!0,opacity:.35,side:tn,fog:!1,depthWrite:!1})),l=new le(new Ge(420,32,24),new it({color:9075408,fog:!1}));l.add(a),a.rotation.x=1.2,n.add(o,l),Gi={s2:o,gas:l}}si=new Ni(16773341,3),si.castShadow=!0,si.shadow.mapSize.set(d.hiShadows?4096:2048,d.hiShadows?4096:2048);let r=si.shadow.camera;r.left=-70,r.right=70,r.top=70,r.bottom=-70,r.near=1,r.far=400,si.shadow.bias=-4e-4,si.shadow.normalBias=.6,n.add(si,si.target),Oo=new Ys(16765616,5909530,1),mf=new Sc(4213360,.3),n.add(Oo,mf),n.fog=new fc(14196848,.0016),xf=new Di,qm=new le(new Ge(400,32,16),rr),xf.add(qm),Km=new Ro(d.renderer)}function el(n,e){let t=d.time,i=t.t;t.t+=n/H2*(t.elevation<0?1.5:1),t.t>=1&&(t.t-=1),i<.25&&t.t>=.25&&(t.day++,t.dawn=!0);let s=(t.t-.25)*Math.PI*2;bi.set(Math.cos(s),Math.sin(s),.35).normalize();let r=bi.y;t.elevation=r,t.night=In(.05,-.18,r);let o=In(0,1,d.terraform),a=d.storm,l=In(-.05,.35,r),c=1-Math.abs(Ei((r-.05)/.3,-1,1));Ka.copy(Bi.dayTop).lerp(Bi.earthTop,o),Zm.copy(Bi.dayHor).lerp(Bi.earthHor,o);let h=rr.uniforms.uTop.value,u=rr.uniforms.uHor.value;h.copy(Bi.nightTop).lerp(Bi.setTop,In(-.25,0,r)).lerp(Ka,l),u.copy(Bi.nightHor).lerp(Bi.setHor,In(-.25,0,r)).lerp(Zm,l),a>0&&(Ka.copy(Bi.stormHor).multiplyScalar(.25+.75*(1-t.night)),h.lerp(Ka,a*.85),u.lerp(Ka,a)),rr.uniforms.uHalo.value.copy(Bi.halo).multiplyScalar(Ei(c,0,1)*(1-o*.5)*(1-a)),rr.uniforms.uSunDir.value.copy(bi),rr.uniforms.uSunVis.value=In(-.08,.02,r)*(1-a*.85),Ja.position.copy(e),Fo.position.copy(e),ms.position.set(e.x,e.y+700,e.z),ms.material.uniforms.uT.value=performance.now()*.001,ms.material.uniforms.uI.value=yf[0]*t.night*(1-a)*(.75+.25*Math.sin(performance.now()*7e-5+t.day)),Fo.material.opacity=Math.max(t.night,he.id==="europa"?.85:0)*(1-a);let f=d.time.t*Math.PI*6,p=-d.time.t*Math.PI*2+2;if(ja.position.set(e.x+Math.cos(f)*2600,e.y+Math.sin(f)*1700+300,e.z-1300),ja.lookAt(e),gf.position.set(e.x+Math.cos(p)*2800,e.y+Math.sin(p)*2200,e.z+1600),Gi.jup){Gi.jup.position.set(e.x-1800,e.y+650,e.z-2600),Gi.jup.rotation.y+=4e-5;let x=d.time.t*Math.PI*8;Gi.io.position.set(e.x-1800+Math.cos(x)*1400,e.y+650+Math.sin(x)*300,e.z-2600+Math.sin(x)*1400)}Gi.s2&&(Gi.s2.position.copy(e).addScaledVector(new T(bi.x*.8-.3,bi.y*.9-.05,bi.z+.4).normalize(),3e3),Gi.s2.material.opacity=In(-.2,.05,r)*.9,Gi.gas.position.set(e.x+1600,e.y+1100,e.z+2400));let g=In(-.04,.25,r);si.intensity=3*g*(1-a*.6),si.color.setRGB(1,Rt(.7,.93,g),Rt(.55,.85,g)),si.position.copy(e).addScaledVector(bi,200),si.target.position.copy(e),Oo.intensity=Rt(.45,.8,l)*(1-a*.3),Oo.color.copy(u).lerp(h,.3).lerp(O2,t.night*.85),he.id==="europa"&&Oo.color.lerp(z2,.6),Oo.groundColor.setRGB(Rt(.05,.38,l),Rt(.04,.18,l),Rt(.05,.1,l)),mf.intensity=Rt(.8,.2,l),d.scene.fog.color.copy(u),d.scene.fog.density=Rt(Rt(.0016,.0032,t.night),.03,a)*(he.id==="europa"?.55:1);let y=performance.now();if(y-Ym>4e3||!Vc){Ym=y;let x=Vc;Vc=Km.fromScene(xf,.04,1,1e3),d.scene.environment=Vc.texture,d.scene.environmentIntensity=Rt(.85,.35,t.night),x&&x.dispose()}d.renderer.toneMappingExposure=Rt(1,1.4,t.night)}function vf(){let n=Math.floor(d.time.t*24.66),e=Math.floor((d.time.t*24.66-n)*60);return`${he.name} \xB7 \u7B2C ${d.time.day} \u65E5 \xB7 ${String(n).padStart(2,"0")}:${String(e).padStart(2,"0")}`}var zo=[],B2=new Ar(.22,0),$c=class{constructor(e,t,i,s){this.max=t,this.n=0,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*4),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.base=new Float32Array(t*4),this.grav=new Float32Array(t),this.drag=new Float32Array(t);let r=new At;this.pa=new Jt(this.pos,3),this.ca=new Jt(this.col,4),this.pa.setUsage(Jd),this.ca.setUsage(Jd),r.setAttribute("position",this.pa),r.setAttribute("color",this.ca),this.mat=new $n({size:s,map:Zn(),vertexColors:!0,transparent:!0,depthWrite:!1,blending:i?Et:Li,sizeAttenuation:!0}),this.points=new ti(r,this.mat),this.points.frustumCulled=!1,e.add(this.points)}emit(e,t,i,s,r,o,a,l,c,h,u,f=0,p=0){let g=this.n<this.max?this.n++:Math.floor(Math.random()*this.max);this.pos[g*3]=e,this.pos[g*3+1]=t,this.pos[g*3+2]=i,this.vel[g*3]=s,this.vel[g*3+1]=r,this.vel[g*3+2]=o,this.base[g*4]=a,this.base[g*4+1]=l,this.base[g*4+2]=c,this.base[g*4+3]=h,this.life[g]=u,this.maxLife[g]=u,this.grav[g]=f,this.drag[g]=p}update(e){let t=this.n;for(let i=0;i<t;i++){if(this.life[i]-=e,this.life[i]<=0){if(t--,i!==t){for(let o=0;o<3;o++)this.pos[i*3+o]=this.pos[t*3+o],this.vel[i*3+o]=this.vel[t*3+o];for(let o=0;o<4;o++)this.base[i*4+o]=this.base[t*4+o];this.life[i]=this.life[t],this.maxLife[i]=this.maxLife[t],this.grav[i]=this.grav[t],this.drag[i]=this.drag[t],i--}continue}let s=1-this.drag[i]*e;this.vel[i*3]*=s,this.vel[i*3+2]*=s,this.vel[i*3+1]=this.vel[i*3+1]*s-this.grav[i]*e,this.pos[i*3]+=this.vel[i*3]*e,this.pos[i*3+1]+=this.vel[i*3+1]*e,this.pos[i*3+2]+=this.vel[i*3+2]*e;let r=this.life[i]/this.maxLife[i];this.col[i*4]=this.base[i*4],this.col[i*4+1]=this.base[i*4+1],this.col[i*4+2]=this.base[i*4+2],this.col[i*4+3]=this.base[i*4+3]*Math.min(1,r*2.5)}this.n=t,this.points.geometry.setDrawRange(0,t),this.pa.needsUpdate=!0,this.ca.needsUpdate=!0}},Ur,Xc,Nr,Bo;function jm(n){Ur=new $c(n,3e3,!0,.35),Xc=new $c(n,2500,!1,1.6);let e=new At,t=new Float32Array(1500*3);for(let r=0;r<t.length;r++)t[r]=(Math.random()-.5)*80;e.setAttribute("position",new Jt(t,3)),Nr=new ti(e,new $n({size:.25,map:Zn(),color:16765088,transparent:!0,opacity:.5,depthWrite:!1})),Nr.frustumCulled=!1,n.add(Nr);let i=new At,s=new Float32Array(3e3*3);for(let r=0;r<s.length;r++)s[r]=(Math.random()-.5)*70;i.setAttribute("position",new Jt(s,3)),Bo=new ti(i,new $n({size:.18,map:Zn(),color:12574975,transparent:!0,opacity:0,depthWrite:!1})),Bo.frustumCulled=!1,n.add(Bo)}var Me={debris(n,e,t=8,i=7,s=1){for(let r=0;r<t;r++){if(zo.length>160){let h=zo.shift();d.scene.remove(h.m)}let o=new le(B2,e);o.castShadow=!0;let a=s*(.5+Math.random()*.9);o.scale.set(a,a*(1+Math.random()),a),o.position.copy(n),d.scene.add(o);let l=Math.random()*Math.PI*2,c=.4+Math.random()*.8;zo.push({m:o,v:new T(Math.cos(l)*i*(1-c*.5),i*c,Math.sin(l)*i*(1-c*.5)),w:new T(Math.random()*10,Math.random()*10,Math.random()*10),life:3+Math.random()*2,s:a})}},spark(n,e=[1,.6,.2],t=6,i=4,s=.5){for(let r=0;r<t;r++)Ur.emit(n.x,n.y,n.z,(Math.random()-.5)*i,Math.random()*i,(Math.random()-.5)*i,e[0],e[1],e[2],1,s*(.5+Math.random()),6,1)},burst(n,e=[1,.5,.2],t=40,i=9){for(let s=0;s<t;s++){let r=Math.random()*2-1,o=Math.random()*6.283,a=Math.sqrt(1-r*r),l=i*(.4+Math.random()*.6);Ur.emit(n.x,n.y,n.z,a*Math.cos(o)*l,r*l,a*Math.sin(o)*l,e[0],e[1],e[2],1,.4+Math.random()*.6,4,2)}},dustPuff(n,e=10,t=2,i=[.72,.45,.3]){for(let s=0;s<e;s++)Xc.emit(n.x+(Math.random()-.5)*t,n.y+Math.random()*.5,n.z+(Math.random()-.5)*t,(Math.random()-.5)*3,Math.random()*1.5,(Math.random()-.5)*3,i[0],i[1],i[2],.55,1.2+Math.random(),-.2,1.5)},ring(n,e,t=60,i=[.72,.45,.3]){for(let s=0;s<t;s++){let r=s/t*6.283,o=6+Math.random()*6;Xc.emit(n.x+Math.cos(r)*e,n.y+.4,n.z+Math.sin(r)*e,Math.cos(r)*o,.5+Math.random(),Math.sin(r)*o,i[0],i[1],i[2],.6,1.5+Math.random(),-.1,1.2)}},trail(n,e,t=1){Ur.emit(n.x,n.y,n.z,(Math.random()-.5)*.4,(Math.random()-.5)*.4,(Math.random()-.5)*.4,e[0]*t,e[1]*t,e[2]*t,1,.18,0,0)},flame(n,e=1){Ur.emit(n.x+(Math.random()-.5)*.6,n.y,n.z+(Math.random()-.5)*.6,(Math.random()-.5)*2,-6*e-Math.random()*6,(Math.random()-.5)*2,1,.55,.2,1,.35,0,0)},rise(n,e,t=6){Ur.emit(n.x+(Math.random()-.5)*t,n.y,n.z+(Math.random()-.5)*t,0,6+Math.random()*6,0,e[0],e[1],e[2],1,2.5,-.5,0)}},Wc=0;function tl(n,e){Ur.update(n),Xc.update(n);for(let o=zo.length-1;o>=0;o--){let a=zo[o];a.life-=n,a.v.y-=9*n,a.m.position.addScaledVector(a.v,n),a.m.rotation.x+=a.w.x*n,a.m.rotation.y+=a.w.y*n,a.m.rotation.z+=a.w.z*n;let l=ve(a.m.position.x,a.m.position.z)+.1;a.m.position.y<l&&(a.m.position.y=l,a.v.y=Math.abs(a.v.y)*.35,a.v.x*=.6,a.v.z*=.6,a.w.multiplyScalar(.5)),a.life<1&&a.m.scale.setScalar(Math.max(.001,a.s*a.life)),a.life<=0&&(d.scene.remove(a.m),zo.splice(o,1))}let t=d.storm,i=Nr.geometry.attributes.position,s=i.array,r=1+t*26;for(let o=0;o<s.length;o+=3){s[o]+=r*n,s[o+1]+=Math.sin(o+performance.now()*5e-4)*n*.2-t*n*1.5;let a=40;s[o]-e.x>a&&(s[o]-=2*a),s[o]-e.x<-a&&(s[o]+=2*a),s[o+1]-e.y>a/2&&(s[o+1]-=a),s[o+1]-e.y<-a/2&&(s[o+1]+=a),s[o+2]-e.z>a&&(s[o+2]-=2*a),s[o+2]-e.z<-a&&(s[o+2]+=2*a)}if(i.needsUpdate=!0,Nr.material.size=.25+t*.3,Nr.material.opacity=.3+t*.25,Nr.material.color.setRGB(1,.8-d.time.night*.4,.62-d.time.night*.3),Wc+=((d.raining?1:0)-Wc)*n*.5,Bo.material.opacity=Wc*.6,Wc>.01){let o=Bo.geometry.attributes.position.array;for(let a=0;a<o.length;a+=3)o[a+1]-=22*n,o[a]+=2*n,o[a+1]<e.y-20&&(o[a+1]+=40),o[a]-e.x>35&&(o[a]-=70),o[a]-e.x<-35&&(o[a]+=70),o[a+2]-e.z>35&&(o[a+2]-=70),o[a+2]-e.z<-35&&(o[a+2]+=70);Bo.geometry.attributes.position.needsUpdate=!0}}var qc=null,nt,or,kr,nl,il,Hr,sl,Yc,J={enabled:!0,init(){if(nt){nt.resume();return}try{nt=new(window.AudioContext||window.webkitAudioContext)}catch{return}or=nt.createGain(),or.gain.value=.7,or.connect(nt.destination),kr=nt.createGain(),kr.gain.value=.8,kr.connect(or),nl=nt.createGain(),nl.gain.value=.22,nl.connect(or),Yc=nt.createBuffer(1,nt.sampleRate*2,nt.sampleRate);let n=Yc.getChannelData(0),e=0;for(let i=0;i<n.length;i++){let s=Math.random()*2-1;e=(e+.02*s)/1.02,n[i]=e*3.5}let t=nt.createBufferSource();t.buffer=Yc,t.loop=!0,Hr=nt.createBiquadFilter(),Hr.type="bandpass",Hr.frequency.value=400,Hr.Q.value=.6,il=nt.createGain(),il.gain.value=.15,t.connect(Hr),Hr.connect(il),il.connect(or),t.start(),this.musicLoop()},setVolume(n){or&&(or.gain.value=n)},update(n,e){if(!nt)return;let t=nt.currentTime;il.gain.setTargetAtTime(.1+n*.6+e*.04,t,.5),Hr.frequency.setTargetAtTime(300+n*500+Math.sin(t*.3)*120,t,.8)},tone(n,e,t="sine",i=.3,s=0,r=0,o){if(!nt)return;let a=nt.currentTime+r,l=nt.createOscillator(),c=nt.createGain();l.type=t,l.frequency.setValueAtTime(n,a),s&&l.frequency.exponentialRampToValueAtTime(Math.max(20,n*s),a+e),c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(i,a+.01),c.gain.exponentialRampToValueAtTime(1e-4,a+e),l.connect(c),c.connect(o||kr),l.start(a),l.stop(a+e+.05)},noise(n,e=1e3,t=.3,i="lowpass",s=0,r=1){if(!nt)return;let o=nt.currentTime+s,a=nt.createBufferSource();a.buffer=Yc;let l=nt.createBiquadFilter();l.type=i,l.frequency.value=e,l.Q.value=r;let c=nt.createGain();c.gain.setValueAtTime(t,o),c.gain.exponentialRampToValueAtTime(1e-4,o+n),a.connect(l),l.connect(c),c.connect(kr),a.start(o,Math.random()),a.stop(o+n+.05)},play(n){if(nt)switch(n){case"step":this.noise(.12,500+Math.random()*200,.12,"lowpass");break;case"jump":this.noise(.2,400,.15);break;case"land":this.noise(.25,300,.25);break;case"mine":this.tone(180+Math.random()*60,.08,"square",.04),this.noise(.08,2400,.06,"highpass");break;case"pickup":this.tone(880,.08,"sine",.08),this.tone(1320,.1,"sine",.06,0,.05);break;case"deplete":this.noise(.5,900,.3),this.tone(220,.4,"triangle",.15,.5);break;case"shoot":this.tone(900,.15,"sawtooth",.12,.25),this.noise(.1,3e3,.08,"highpass");break;case"turret":this.tone(700,.12,"square",.05,.3);break;case"hit":this.tone(300,.1,"square",.08,.5);break;case"kill":this.noise(.6,1600,.3,"bandpass",0,.8),this.tone(120,.5,"sawtooth",.12,.3);break;case"hurt":this.tone(160,.25,"sawtooth",.15,.6);break;case"place":this.tone(220,.15,"triangle",.2),this.tone(330,.15,"triangle",.2,0,.1),this.tone(440,.3,"triangle",.2,0,.2),this.noise(.4,600,.2);break;case"ui":this.tone(880,.05,"sine",.07),this.tone(1320,.08,"sine",.04,0,.03);break;case"scan":this.tone(300,1.2,"sine",.12,4),this.tone(600,.9,"triangle",.05,3,.1),this.noise(.8,2e3,.05,"bandpass",0,3);break;case"shutter":this.noise(.06,4e3,.25,"highpass"),this.noise(.1,1500,.15,"bandpass",.07);break;case"tick":this.tone(2400,.02,"sine",.025);break;case"open":this.tone(440,.12,"sine",.05,1.5),this.noise(.15,3e3,.03,"highpass");break;case"achv":[523,784,1046,1568].forEach((e,t)=>this.tone(e,.9,"triangle",.09,0,t*.09));break;case"deny":this.tone(200,.15,"square",.06),this.tone(150,.2,"square",.06,0,.1);break;case"craft":[523,659,784,1046].forEach((e,t)=>this.tone(e,.25,"triangle",.12,0,t*.08));break;case"radio":this.noise(.15,2500,.12,"bandpass",0,2),this.tone(1200,.05,"sine",.06,0,.12);break;case"alarm":this.tone(880,.18,"square",.06),this.tone(660,.18,"square",.06,0,.2);break;case"objective":[392,523,659].forEach((e,t)=>this.tone(e,.5,"sine",.15,0,t*.12));break;case"chapter":[262,330,392,523,659].forEach((e,t)=>this.tone(e,1.2,"sine",.12,0,t*.15));break;case"rumble":this.noise(4,150,.6),this.noise(3,400,.25,"lowpass",.5);break;case"jet":this.noise(.12,800,.1,"bandpass");break;case"night":this.tone(110,3,"sine",.12,.8),this.tone(165,3,"sine",.08,.8,.3);break}},engine(n){if(nt&&(n>0||qc)){if(!qc){let i=nt.createOscillator(),s=nt.createOscillator(),r=nt.createBiquadFilter(),o=nt.createGain();i.type="sawtooth",s.type="triangle",r.type="lowpass",r.frequency.value=500,o.gain.value=1e-4,i.connect(r),s.connect(r),r.connect(o),o.connect(kr),i.start(),s.start(),qc={o:i,o2:s,f:r,g:o}}let e=nt.currentTime,t=qc;t.o.frequency.setTargetAtTime(38+n*70,e,.1),t.o2.frequency.setTargetAtTime(76+n*140,e,.1),t.f.frequency.setTargetAtTime(300+n*900,e,.1),t.g.gain.setTargetAtTime(n>0||d.driving?.03+n*.05:1e-4,e,.15)}},laser(n){if(nt){if(n&&!sl){let e=nt.createOscillator(),t=nt.createOscillator(),i=nt.createGain(),s=nt.createBiquadFilter();e.type="sawtooth",e.frequency.value=110,t.type="square",t.frequency.value=113,s.type="lowpass",s.frequency.value=900,i.gain.value=1e-4,i.gain.exponentialRampToValueAtTime(.06,nt.currentTime+.1),e.connect(s),t.connect(s),s.connect(i),i.connect(kr),e.start(),t.start(),sl={o:e,o2:t,g:i}}else if(!n&&sl){let e=sl;sl=null,e.g.gain.setTargetAtTime(1e-4,nt.currentTime,.04),e.o.stop(nt.currentTime+.2),e.o2.stop(nt.currentTime+.2)}}},musicLoop(){let n=[[220,277.2,329.6,415.3],[196,246.9,293.7,392],[174.6,220,261.6,349.2],[164.8,207.7,246.9,329.6],[146.8,220,293.7,370]],e=0,t=()=>{if(!nt)return;let i=n[e++%n.length],s=nt.currentTime;if(i.forEach((r,o)=>{let a=nt.createOscillator(),l=nt.createGain();a.type=o===0?"triangle":"sine",a.frequency.value=r*(o===0?.5:1),a.detune.value=(Math.random()-.5)*8,l.gain.setValueAtTime(1e-4,s),l.gain.exponentialRampToValueAtTime(.06,s+3),l.gain.exponentialRampToValueAtTime(1e-4,s+11),a.connect(l),l.connect(nl),a.start(s),a.stop(s+11.5)}),Math.random()<.7){let r=i[1+Math.floor(Math.random()*3)]*2;for(let o=0;o<3;o++)Math.random()<.6&&this.tone(r*[1,1.122,1.335][o],2.5,"sine",.025,0,2+o*1.6,nl)}setTimeout(t,9e3)};t()}};var rl={iron:new de({color:6965822,roughness:.4,metalness:.8,flatShading:!0,map:ki.map,bumpMap:ki.bumpMap,bumpScale:4}),ironVein:new de({color:10246714,roughness:.3,metalness:.9,flatShading:!0,emissive:3806216}),ice:new de({color:13627135,roughness:.08,metalness:.1,flatShading:!0,transparent:!0,opacity:.9,emissive:1456202}),silicon:new de({color:15983014,roughness:.15,metalness:.4,flatShading:!0,emissive:2761224}),titanium:new de({color:10194175,roughness:.1,metalness:.5,flatShading:!0,emissive:5913855,emissiveIntensity:.6}),base:new de({color:8276790,roughness:.95,flatShading:!0,map:ki.map,bumpMap:ki.bumpMap,bumpScale:4})},Qm={iron:null,ice:8969727,silicon:16770720,titanium:9071871},gs={iron:[1,.55,.3],ice:[.6,.9,1],silicon:[1,.9,.55],titanium:[.7,.55,1]};function G2(n,e,t){let i=new zt(t,e,5,1);i.translate(0,e/2,0);let s=new le(i,n);return s.castShadow=!0,s}function V2(n,e){let t=new we;if(n==="iron")for(let i=0;i<4;i++){let s=new le(new ii(.6+e()*.7,0),i===0?rl.ironVein:rl.iron);s.position.set((e()-.5)*1.8,.3+e()*.4,(e()-.5)*1.8),s.rotation.set(e()*3,e()*3,e()*3),s.scale.y=.8,s.castShadow=!0,t.add(s)}else{let i=new le(new ii(1.1,0),rl.base);i.scale.set(1.2,.45,1.2),i.castShadow=!0,t.add(i);let s=n==="titanium"?6:7;for(let r=0;r<s;r++){let o=G2(rl[n],.8+e()*(n==="ice"?1.6:1.9),.18+e()*.22),a=e()*6.28,l=e()*.8;o.position.set(Math.cos(a)*l,.2,Math.sin(a)*l),o.rotation.set((e()-.5)*.9,e()*3,(e()-.5)*.9),t.add(o)}Qm[n]&&t.add(Pe(Qm[n],n==="titanium"?5:3,null,0,1.2,0))}return t}var eg=Math.random;function Vo(n,e,t,i){let s=V2(n,eg),r=ve(e,t);s.position.set(e,r,t),s.rotation.y=eg()*6.28,d.scene.add(s);let o=i??{iron:30,ice:25,silicon:25,titanium:14}[n],a={type:n,x:e,z:t,y:r,amount:o,max:o,mesh:s,r:1.6};return a.collider=d.colliders.add({x:e,z:t,r:1.3,kind:"node"}),d.nodes.push(a),a}function tg(n,e){for(let t=0;t<200;t++){let i,s;if(n==="ice"&&Math.random()<.75){let o=ps[Math.floor(Math.random()*Math.min(ps.length,30))],a=Math.random()*6.28,l=Math.random()*o.r*.7;i=o.x+Math.cos(a)*l,s=o.z+Math.sin(a)*l}else if(e){let o=Math.random()*6.28,a=e[0]+Math.random()*(e[1]-e[0]);i=Math.cos(o)*a,s=Math.sin(o)*a}else i=(Math.random()-.5)*(2*je-300),s=(Math.random()-.5)*(2*je-300);let r=Math.hypot(i,s);if(!(n==="titanium"&&r<260)&&!(r<18)&&!(Math.abs(i)>je-160||Math.abs(s)>je-160)&&!(Dr(i,s,2)>.6)&&!d.colliders.overlaps(i,s,3))return[i,s]}return null}function ng(){let n=[["iron",22,8],["iron",-18,20],["iron",30,-25],["silicon",-26,-14],["silicon",12,34],["ice",40,10],["iron",-40,-38],["silicon",45,42]];for(let[t,i,s]of n)Vo(t,i,s);let e={iron:70,silicon:50,ice:40,titanium:22};for(let t in e)for(let i=0;i<e[t];i++){let s=tg(t,t==="titanium"?null:i<e[t]*.35?[40,220]:null);s&&Vo(t,s[0],s[1])}}function ig(n){d.scene.remove(n.mesh),d.colliders.remove(n.collider);let e=d.nodes.indexOf(n);e>=0&&d.nodes.splice(e,1)}var Go=[];function Zc(n,e){n.amount-=e;let t=.35+.65*Math.max(0,n.amount/n.max);if(n.mesh.scale.setScalar(t),n.amount<=0){let i=n.mesh.position.clone();i.y+=1,Me.burst(i,gs[n.type],40,7);let s=n.mesh.children.find(r=>r.isMesh&&r!==n.mesh.children[0])?.material||n.mesh.children[0].material;return Me.debris(i,s,9,5,1.1),Me.dustPuff(i,16,3),ig(n),Go.push({type:n.type,t:90+Math.random()*60}),!0}return!1}function sg(n){for(let t=Go.length-1;t>=0;t--)if(Go[t].t-=n,Go[t].t<=0){let i=Go[t].type;Go.splice(t,1);let s=tg(i,i==="titanium"?null:[60,400]);s&&Vo(i,s[0],s[1])}let e=1+Math.sin(performance.now()*.002)*.15;rl.titanium.emissiveIntensity=.5*e}function rg(){return d.nodes.map(n=>[n.type,+n.x.toFixed(1),+n.z.toFixed(1),Math.round(n.amount)])}function og(n){for(let e of[...d.nodes])ig(e);for(let[e,t,i,s]of n){let r=Vo(e,t,i);r.amount=s,r.mesh.scale.setScalar(.35+.65*s/r.max)}}var Dn=[{name:"\u524D\u54E8\u7AD9",pop:0,b:0,r:75},{name:"\u5B9A\u5C45\u70B9",pop:4,b:6,r:120},{name:"\u5C0F\u9547",pop:12,b:14,r:175},{name:"\u57CE\u5E02",pop:24,b:22,r:240},{name:"\u5927\u90FD\u4F1A",pop:36,b:32,r:310},{name:"\u661F\u6E2F",pop:50,b:42,r:390}],wi={x:0,z:0},Wo,Kc,$o=0;function _f(n){Kc=new it({color:6743807,transparent:!0,opacity:.12,side:tn,depthWrite:!1,blending:Et}),d.cityLevel=d.cityLevel||0,$o=Dn[d.cityLevel].r,ag($o)}function ag(n){Wo&&(d.scene.remove(Wo),Wo.geometry.dispose());let e=Math.ceil(n*1.2),t=[],i=[],s=1.4;for(let o=0;o<=e;o++){let a=o/e*Math.PI*2,l=wi.x+Math.cos(a)*n,c=wi.z+Math.sin(a)*n,h=ve(l,c);if(t.push(l,h,c,l,h+s,c),o<e){let u=o*2;i.push(u,u+1,u+2,u+1,u+3,u+2)}}let r=new At;r.setAttribute("position",new Ke(t,3)),r.setIndex(i),Wo=new le(r,Kc),Wo.frustumCulled=!1,d.scene.add(Wo)}function lg(n,e,t=0){return Math.hypot(n-wi.x,e-wi.z)<=Dn[d.cityLevel].r-t}function cg(){let n=Dn[d.cityLevel+1];return n?{...n,curPop:d.colony.pop,curB:d.buildings.length}:null}var Mf=0;function hg(n,e){Kc.opacity+=((e?.45:.1)-Kc.opacity)*Math.min(1,n*4);let t=Dn[d.cityLevel].r;if($o<t&&($o=Math.min(t,$o+n*40),ag($o)),Mf-=n,Mf>0)return;Mf=1;let i=Dn[d.cityLevel+1];if(i&&d.colony.pop>=i.pop&&d.buildings.length>=i.b){d.cityLevel++,J.play("chapter"),d.events.emit("cityLevel",Dn[d.cityLevel]);let s=new T(wi.x,ve(wi.x,wi.z)+2,wi.z);Me.burst(s,[.4,.9,1],120,18)}}var ol=[],W2={mars:6178362,europa:9214120,kepler:5921384}[tt],Ef,xs,Jc=!0;function $2(){return Ef||(Ef=new de({color:W2,roughness:.95,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),Ef}function X2(n,e,t,i){let s=t-n,r=i-e,o=Math.hypot(s,r);if(o<2)return null;let a=Math.ceil(o/1.5),l=s/o,c=r/o,h=-c,u=l,f=1.3,p=[],g=[],y=[],x=[];for(let E=0;E<=a;E++){let v=E/a,L=n+s*v,R=e+r*v;for(let I of[-1,1]){let P=L+h*f*I,w=R+u*f*I;p.push(P,ve(P,w)+.07,w),y.push(I<0?0:1,v*o/3)}if(E<a){let I=E*2;g.push(I,I+2,I+1,I+1,I+2,I+3)}}for(let E=4;E<o-2;E+=9)for(let v of[-1,1]){let L=n+l*E+h*(f+.35)*v,R=e+c*E+u*(f+.35)*v;x.push(L,ve(L,R)+.25,R)}let m=new At;m.setAttribute("position",new Ke(p,3)),m.setAttribute("uv",new Ke(y,2)),m.setIndex(g),m.computeVertexNormals();let _=new le(m,$2());return _.receiveShadow=!0,d.scene.add(_),{mesh:_,lamp:x}}function ug(n){if(n.type==="lamp")return;let e=null,t=70;for(let u of d.buildings){if(u===n||u.type==="lamp")continue;let f=Math.hypot(u.x-n.x,u.z-n.z)-u.def.r-n.def.r;f<t&&(t=f,e=u)}if(!e)return;let i=e.x-n.x,s=e.z-n.z,r=Math.hypot(i,s),o=n.x+i/r*(n.def.r+.5),a=n.z+s/r*(n.def.r+.5),l=e.x-i/r*(e.def.r+.5),c=e.z-s/r*(e.def.r+.5),h=X2(o,a,l,c);h&&(ol.push({...h,a:n,b:e}),Jc=!0)}function dg(n){for(let e=ol.length-1;e>=0;e--){let t=ol[e];(t.a===n||t.b===n)&&(d.scene.remove(t.mesh),t.mesh.geometry.dispose(),ol.splice(e,1),Jc=!0)}}function fg(){if(Jc){Jc=!1,xs&&(d.scene.remove(xs),xs.geometry.dispose());let n=ol.flatMap(e=>e.lamp);if(n.length){let e=new At;e.setAttribute("position",new Ke(n,3)),xs=new ti(e,new $n({size:.9,map:Zn(),color:8382207,transparent:!0,depthWrite:!1,blending:Et})),xs.frustumCulled=!1,d.scene.add(xs)}else xs=null}xs&&(xs.material.opacity=.15+d.time.night*.85)}var Xo={peace:{name:"\u548C\u5E73",desc:"\u6CA1\u6709\u9508\u8680\u86DB\uFF0C\u5B89\u5FC3\u5EFA\u8BBE",o2:.7,foe:0,dmg:0,yield:1.3},normal:{name:"\u6807\u51C6",desc:"\u63A8\u8350\u7684\u4F53\u9A8C",o2:1,foe:1,dmg:1,yield:1},hard:{name:"\u56F0\u96BE",desc:"\u6C27\u6C14\u6D88\u8017\u66F4\u5FEB\uFF0C\u654C\u4EBA\u66F4\u591A\u66F4\u51F6",o2:1.35,foe:1.6,dmg:1.5,yield:.85}},mg={story:{name:"\u5267\u60C5\u6A21\u5F0F",desc:"\u8DDF\u968F\u7AE0\u8282\uFF0C\u4ECE\u7740\u9646\u4E00\u8DEF\u8D70\u5230\u661F\u9645\u6587\u660E"},free:{name:"\u81EA\u7531\u6A21\u5F0F",desc:"\u6CA1\u6709\u4E3B\u7EBF\uFF0C\u6309\u81EA\u5DF1\u7684\u8282\u594F\u5F00\u62D3\u3002\u5C45\u6C11\u59D4\u6258\u4F1A\u7ED9\u4F60\u65B9\u5411"}},ys=()=>Xo[d.diffKey||"normal"],Fn=()=>d.mode==="free",qo={pv:{name:"\u9AD8\u6548\u5149\u4F0F",cat:"\u751F\u4EA7",icon:"sun",cost:25,desc:"\u592A\u9633\u80FD\u53D1\u7535 +50%"},sieve:{name:"\u5206\u5B50\u7B5B\u5236\u6C27",cat:"\u751F\u5B58",icon:"o2",cost:30,desc:"\u5236\u6C27\u7AD9\u4E0E\u751F\u6001\u4E2D\u67A2\u4F9B\u6C27 +50%"},hydro:{name:"\u6C34\u57F9\u6280\u672F",cat:"\u751F\u5B58",icon:"food",cost:30,desc:"\u6E29\u5BA4\u4E0E\u5782\u76F4\u519C\u573A\u4EA7\u51FA +50%"},drill:{name:"\u6DF1\u5C42\u94BB\u63A2",cat:"\u751F\u5B58",icon:"water",cost:30,desc:"\u6C34\u51B0\u63D0\u53D6\u5668\u4E0E\u751F\u6001\u4E2D\u67A2\u4F9B\u6C34 +50%"},laser2:{name:"\u91C7\u77FF\u6FC0\u5149 II",cat:"\u751F\u4EA7",icon:"laser",cost:35,desc:"\u624B\u52A8\u91C7\u77FF\u901F\u5EA6 +50%"},suit:{name:"\u5B87\u822A\u670D\u5FAA\u73AF\u7CFB\u7EDF",cat:"\u751F\u5B58",icon:"tank",cost:40,desc:"\u91CE\u5916\u6C27\u6C14\u6D88\u8017 -35%"},alloy:{name:"\u5F3A\u5316\u5408\u91D1",cat:"\u519B\u4E8B",icon:"shield",cost:50,desc:"\u6240\u6709\u5EFA\u7B51\u8010\u4E45 +50%"},plasma:{name:"\u7B49\u79BB\u5B50\u805A\u7126",cat:"\u519B\u4E8B",icon:"focus",cost:60,desc:"\u70AE\u5854\u4F24\u5BB3 +50%\uFF0C\u5C04\u7A0B +10 \u7C73"},swarm:{name:"\u65E0\u4EBA\u673A\u96C6\u7FA4",cat:"\u751F\u4EA7",icon:"drone",cost:60,desc:"\u6BCF\u5EA7\u65E0\u4EBA\u673A\u7AD9\u591A\u4E00\u67B6\u65E0\u4EBA\u673A"},terrain:{name:"\u5168\u5730\u5F62\u60AC\u6302",cat:"\u751F\u4EA7",icon:"rover",cost:45,desc:"\u6F2B\u6E38\u8F66\u6781\u901F +30%"},pr:{name:"\u79FB\u6C11\u5BA3\u4F20",cat:"\u6B96\u6C11",icon:"pop",cost:70,desc:"\u79FB\u6C11\u98DE\u8239\u6765\u5F97\u66F4\u52E4\uFF0C\u6BCF\u6B21\u591A\u5E26 2 \u4EBA"},atmo:{name:"\u5927\u6C14\u5DE5\u7A0B",cat:"\u6B96\u6C11",icon:"planet",cost:120,desc:"\u5927\u6C14\u6539\u9020\u901F\u5EA6 \xD72"},fusion:{name:"\u7D27\u51D1\u805A\u53D8",cat:"\u751F\u4EA7",icon:"power",cost:100,desc:"\u805A\u53D8\u53CD\u5E94\u5806\u53D1\u7535 +40%"},culture:{name:"\u6B96\u6C11\u5730\u6587\u5316",cat:"\u6B96\u6C11",icon:"book",cost:80,desc:"\u5C45\u6C11\u5DE5\u4F5C\u4EA7\u51FA \xD72"}},kt=n=>!!(d.tech&&d.tech[n]);function Tf(n){let e=qo[n];return!e||kt(n)||(d.rp||0)<e.cost?(J.play("deny"),!1):(d.rp-=e.cost,d.tech={...d.tech||{},[n]:!0},J.play("craft"),d.events.emit("toast",`\u2713 \u7814\u7A76\u5B8C\u6210\uFF1A${e.name}`),d.events.emit("researched",n),!0)}function jc(){let n=0;for(let e of d.buildings)e.type==="lab"&&e.powered&&(n+=[0,1,1.6,2.2][e.level||1]);return n*(.12+d.colony.pop*.01)}var pg={iron:1,ice:1.2,silicon:1.5,titanium:6};function Af(n,e,t){return Math.floor(t*pg[n]/pg[e]*.8)}function gg(n,e,t){let i=Af(n,e,t);return n===e||i<=0||(d.res[n]||0)<t?(J.play("deny"),0):(d.res[n]-=t,d.res[e]+=i,J.play("pickup"),d.stats.traded=(d.stats.traded||0)+1,i)}var q2=["\u6797\u6653","Amara Okafor","\u9648\u9ED8","Mateo Silva","\u82CF\u5FF5","Yuki Tanaka","\u738B\u5927\u5C71","\u5468\u9752\u79BE","Priya Sharma","\u674E\u957F\u98CE"],bf={solar:"\u592A\u9633\u80FD\u9635\u5217",oxygen:"\u5236\u6C27\u7AD9",lamp:"\u7167\u660E\u706F",habitat:"\u5C45\u4F4F\u7A79\u9876",greenhouse:"\u6E29\u5BA4",extractor:"\u6C34\u51B0\u63D0\u53D6\u5668",turret:"\u9632\u5FA1\u70AE\u5854",drones:"\u65E0\u4EBA\u673A\u7AD9",plaza:"\u4E2D\u592E\u5E7F\u573A",lab:"\u7814\u7A76\u6240",trade:"\u8D38\u6613\u7AD9",apartment:"\u516C\u5BD3\u5854",vfarm:"\u5782\u76F4\u519C\u573A"},Fr={build:["\u6211\u4EEC\u9700\u8981\u4E00\u5EA7{x}\u3002\u62DC\u6258\u4E86\uFF01","\u5982\u679C\u6709{x}\uFF0C\u5927\u5BB6\u7684\u65E5\u5B50\u4F1A\u597D\u8FC7\u5F88\u591A\u3002","\u80FD\u518D\u5EFA\u4E00\u5EA7{x}\u5417\uFF1F"],mine:["\u4ED3\u5E93\u91CC\u7684{x}\u5FEB\u89C1\u5E95\u4E86\uFF0C\u80FD\u5E2E\u5FD9\u91C7\u4E00\u4E9B\u5417\uFF1F","\u6211\u7684\u5B9E\u9A8C\u9700\u8981{x}\u3002"],kill:["\u591C\u91CC\u90A3\u4E9B\u9508\u8680\u86DB\u5435\u5F97\u5B69\u5B50\u4EEC\u7761\u4E0D\u7740\u3002","\u5DE1\u903B\u961F\u9700\u8981\u652F\u63F4\uFF0C\u5E2E\u6211\u4EEC\u6E05\u7406\u4E00\u4E0B\u9644\u8FD1\u3002"],upgrade:["\u8BBE\u65BD\u8BE5\u5347\u7EA7\u4E86\uFF0C\u80FD\u628A\u54EA\u4E00\u5EA7\u5347\u5230 2 \u7EA7\u5417\uFF1F"],relic:["\u6211\u5728\u65E7\u6863\u6848\u91CC\u770B\u5230\u9644\u8FD1\u6709\u9057\u8FF9\u7684\u8BB0\u5F55\uFF0C\u4F60\u80FD\u53BB\u770B\u770B\u5417\uFF1F"],pop:["\u6211\u4EEC\u51C6\u5907\u597D\u8FCE\u63A5\u66F4\u591A\u7684\u4EBA\u4E86\u3002"],scan:["\u8BA9\u5C0F\u661F\u626B\u63CF\u4E00\u4E0B\u9644\u8FD1\u7684\u77FF\u85CF\u5427\uFF0C\u6211\u60F3\u753B\u4E00\u5F20\u5730\u56FE\u3002"]},Hn=n=>n[Math.floor(Math.random()*n.length)];function xg(n){return d.buildings.filter(e=>e.type===n).length}function Y2(n){let e=["build","build","mine","mine","scan"];(d.enemies.length||(d.nightsSurvived||0)>0)&&e.push("kill"),d.buildings.length>4&&e.push("upgrade"),n.relicLeft()&&e.push("relic"),d.buildings.some(a=>a.type==="beacon")&&e.push("pop");let t=Hn(e),i=d.colonists.length?Hn(d.colonists).name:Hn(q2),s={id:Date.now()+Math.random(),kind:t,giver:i},r=1+(d.cityLevel||0)*.5;if(t==="build"){let a=Object.keys(bf).filter(c=>n.unlocked(c)),l=Hn(a.length?a:["solar"]);Object.assign(s,{t:l,base:xg(l),n:1,text:`\u5EFA\u9020${bf[l]}`,line:Hn(Fr.build).replace("{x}",bf[l])})}else if(t==="mine"){let a=Hn(d.cityLevel>=2?["iron","silicon","ice","titanium"]:["iron","silicon","ice"]),l=Math.round((a==="titanium"?8:25)*r);Object.assign(s,{t:a,base:d.stats.mined[a],n:l,text:`\u91C7\u96C6${mn[a].name} ${l}`,line:Hn(Fr.mine).replace("{x}",mn[a].name)})}else if(t==="kill"){let a=Math.round(4*r);Object.assign(s,{base:d.stats.kills,n:a,text:`\u51FB\u9000\u9508\u8680\u86DB ${a} \u53EA`,line:Hn(Fr.kill)})}else t==="upgrade"?Object.assign(s,{base:d.buildings.filter(a=>(a.level||1)>=2).length,n:1,text:"\u628A\u4E00\u5EA7\u5EFA\u7B51\u5347\u5230 2 \u7EA7",line:Hn(Fr.upgrade)}):t==="relic"?Object.assign(s,{base:n.relicFound(),n:1,text:"\u8C03\u67E5\u4E00\u5904\u9057\u8FF9",line:Hn(Fr.relic)}):t==="pop"?Object.assign(s,{base:d.colony.pop,n:4,text:"\u8FCE\u63A5 4 \u4F4D\u65B0\u79FB\u6C11",line:Hn(Fr.pop)}):Object.assign(s,{base:d.stats.scans||0,n:1,text:"\u7528\u5C0F\u661F\u626B\u63CF\u4E00\u6B21\uFF08Q\uFF09",line:Hn(Fr.scan)});let o=["iron","silicon","ice"];return s.reward={[Hn(o)]:Math.round(20*r),[Hn(o)]:Math.round(15*r)},d.cityLevel>=1&&(s.reward.titanium=Math.round(2*r)),s.rp=Math.round(8*r),s}function yg(n,e){switch(n.kind){case"build":return xg(n.t)-n.base;case"mine":return d.stats.mined[n.t]-n.base;case"kill":return d.stats.kills-n.base;case"upgrade":return d.buildings.filter(t=>(t.level||1)>=2).length-n.base;case"relic":return e.relicFound()-n.base;case"pop":return d.colony.pop-n.base;default:return(d.stats.scans||0)-n.base}}function vg(n,e){return Math.max(0,Math.min(n.n,yg(n,e)))}var wf=25,Sf=0;function Mg(n,e){if(d.rp=(d.rp||0)+jc()*n,d.requests=d.requests||[],d.buildings.length&&!d.ended){wf-=n;let t=Fn()?3:2;if(wf<=0&&d.requests.length<t){wf=Fn()?60:110;let i=Y2(e);d.requests.push(i),d.events.emit("request",i)}}if(Sf-=n,!(Sf>0)){Sf=.5;for(let t=d.requests.length-1;t>=0;t--){let i=d.requests[t];if(yg(i,e)>=i.n){d.requests.splice(t,1);for(let s in i.reward)d.res[s]+=i.reward[s],d.events.emit("pickup",{type:s,n:i.reward[s],note:"\u59D4\u6258\u5956\u52B1"});d.rp=(d.rp||0)+i.rp,d.stats.requests=(d.stats.requests||0)+1,J.play("objective"),d.events.emit("requestDone",i)}}}}var Eg=new et(1,1,1,6,1,!0);Eg.translate(0,.5,0);var Z2=new T(0,1,0),Yo=new T;function K2(n){let e=1+(n.level||1)+(kt("swarm")?1:0);for(n.drones=n.drones||[];n.drones.length<e;){let t=Um(),i=new le(Eg,new it({color:16752720,transparent:!0,opacity:.8,blending:Et,depthWrite:!1}));i.visible=!1,i.frustumCulled=!1,d.scene.add(t.group,i);let s=n.drones.length,r=new T(n.x+[-1.9,1.9,-1.9,1.9][s%4],n.y+1.1,n.z+[-1.9,-1.9,1.9,1.9][s%4]);t.group.position.copy(r),n.drones.push({...t,beam:i,dock:r,state:"dock",t:1+s*1.3,node:null,cargo:null,pos:t.group.position})}}function bg(n){for(let e of n.drones||[])d.scene.remove(e.group,e.beam),e.node&&(e.node.claimed=!1);n.drones=[]}function _g(n,e,t,i=15){Yo.copy(e).sub(n.pos);let s=Yo.length(),r=ve(n.pos.x,n.pos.z)+8;s>6&&(Yo.y+=(r-n.pos.y)*2),Yo.normalize().multiplyScalar(Math.min(s,i*t)),n.pos.add(Yo);let a=Math.atan2(e.x-n.pos.x,e.z-n.pos.z)-n.group.rotation.y;return a=Math.atan2(Math.sin(a),Math.cos(a)),n.group.rotation.y+=a*Math.min(1,t*4),n.group.rotation.x=Math.min(.3,s*.02),s<.6}function wg(n){let e=performance.now()*.001;for(let t of d.buildings)if(t.type==="drones"&&!(t.buildT<1)){K2(t),t.anim.dish&&(t.anim.dish.rotation.y+=n*(t.powered?1.2:0)),t.anim.light&&(t.anim.light.visible=t.powered&&Math.sin(e*3)>-.3);for(let i of t.drones){for(let s of i.rotors)s.rotation.y+=n*40;switch(i.group.position.y+=Math.sin(e*3+i.dock.x)*.003,i.beam.visible=!1,!t.powered&&i.state!=="dock"&&(i.node&&(i.node.claimed=!1),i.node=null,i.state="back"),i.state){case"dock":{if(i.pos.lerp(i.dock,Math.min(1,n*3)),i.t-=n,i.t<=0&&t.powered){i.t=2;let s=null,r=100;for(let o of d.nodes){if(o.claimed||o.type==="titanium"&&(t.level||1)<3)continue;let a=Math.hypot(o.x-t.x,o.z-t.z);a<r&&(r=a,s=o)}s&&(s.claimed=!0,i.node=s,i.state="out")}break}case"out":{let s=i.node;if(!s||!d.nodes.includes(s)){i.node=null,i.state="back";break}_g(i,Yo.set(s.x,s.y+4.5,s.z).clone(),n)&&(i.state="mine",i.t=3.2);break}case"mine":{let s=i.node;if(!s||!d.nodes.includes(s)){i.state="back";break}i.t-=n;let r=new T(s.x+Math.sin(e*5)*.3,s.y+.6,s.z+Math.cos(e*4)*.3),o=i.pos.clone().add(new T(0,-.25,0)),a=r.clone().sub(o),l=a.length();if(i.beam.position.copy(o),i.beam.quaternion.setFromUnitVectors(Z2,a.normalize()),i.beam.scale.set(.05,l,.05),i.beam.material.color.setRGB(...gs[s.type]),i.beam.visible=!0,Math.random()<.4&&Me.spark(r,gs[s.type],1,3,.4),i.t<=0){let c=Math.min(3,Math.ceil(s.amount));i.cargo={type:s.type,n:c},s.claimed=!1,Zc(s,c),i.node=null,i.state="back"}break}case"back":{_g(i,i.dock,n)&&(i.cargo&&(d.res[i.cargo.type]+=i.cargo.n,d.stats.mined[i.cargo.type]+=i.cargo.n,d.stats.droneHauls=(d.stats.droneHauls||0)+1,Math.hypot(d.player.pos.x-t.x,d.player.pos.z-t.z)<45&&d.events.emit("pickup",{type:i.cargo.type,n:i.cargo.n,note:"\u65E0\u4EBA\u673A"}),Me.spark(i.pos,[.5,.9,1],6,3),i.cargo=null),i.state="dock",i.t=1.5);break}}}}}var Tn={solar:{name:"\u592A\u9633\u80FD\u9635\u5217",icon:"sun",cat:"life",chapter:0,cost:{iron:8,silicon:6},power:4,r:2.6,hp:120,desc:"\u767D\u5929\u53D1\u7535 4 \u5355\u4F4D\uFF0C\u591C\u95F4\u964D\u81F3 1.6\u3002\u6B96\u6C11\u5730\u7684\u5FC3\u8DF3\u4ECE\u8FD9\u91CC\u5F00\u59CB\u3002"},oxygen:{name:"\u5236\u6C27\u7AD9",icon:"o2",cat:"life",chapter:0,cost:{iron:12,silicon:4,ice:6},power:-2,r:3,hp:160,o2:6,life:14,desc:"\u7535\u89E3\u6C34\u51B0\u5236\u9020\u6C27\u6C14\u3002\u4E3A 6 \u4F4D\u5C45\u6C11\u4F9B\u6C27\uFF0C\u5E76\u5728 14 \u7C73\u5185\u4E3A\u4F60\u7684\u5B87\u822A\u670D\u8865\u6C27\u3002"},lamp:{name:"\u7167\u660E\u706F",icon:"star",cat:"life",chapter:0,cost:{iron:3},power:0,r:.6,hp:60,desc:"\u7167\u4EAE\u706B\u661F\u7684\u957F\u591C\u3002"},habitat:{name:"\u5C45\u4F4F\u7A79\u9876",icon:"dome",cat:"life",chapter:1,cost:{iron:25,silicon:12},power:-1,r:6.4,hp:300,housing:4,life:12,desc:"\u53EF\u4F4F 4 \u4EBA\u3002\u7A79\u9876\u91CC\u6709\u6696\u5149\u3001\u690D\u7269\u548C\u5BB6\u4EBA\u7684\u7167\u7247\u3002"},greenhouse:{name:"\u6E29\u5BA4",icon:"food",cat:"life",chapter:1,cost:{iron:14,silicon:16,ice:8},power:-2,r:5.4,hp:160,food:5,desc:"\u5728\u706B\u661F\u571F\u58E4\u91CC\u79CD\u51FA\u7B2C\u4E00\u68F5\u571F\u8C46\u3002\u4F9B 5 \u4EBA\u98DF\u7269\u3002"},extractor:{name:"\u6C34\u51B0\u63D0\u53D6\u5668",icon:"water",cat:"life",chapter:1,cost:{iron:16,silicon:4,ice:4},power:-2,r:2.8,hp:160,water:6,desc:"\u4ECE\u5730\u4E0B\u51BB\u571F\u4E2D\u94BB\u53D6\u6C34\u3002\u4F9B 6 \u4EBA\u7528\u6C34\u3002"},beacon:{name:"\u7740\u9646\u573A",icon:"ship",cat:"city",chapter:1,cost:{iron:24,silicon:14},power:-1,r:7.4,hp:250,desc:"\u5411\u5730\u7403\u53D1\u51FA\u4FE1\u53F7\u3002\u6761\u4EF6\u6EE1\u8DB3\u65F6\uFF0C\u79FB\u6C11\u98DE\u8239\u4F1A\u5728\u8FD9\u91CC\u964D\u843D\u3002"},fabricator:{name:"\u5236\u9020\u5DE5\u574A",icon:"wrench",cat:"industry",chapter:2,cost:{iron:22,silicon:14},power:-1,r:4.6,hp:220,desc:"\u9760\u8FD1\u6309 E \u5236\u9020\u6B66\u5668\u4E0E\u88C5\u5907\u3002"},drones:{name:"\u65E0\u4EBA\u673A\u7AD9",icon:"drone",cat:"industry",chapter:2,cost:{iron:30,silicon:22},power:-3,r:3.8,hp:220,desc:"\u6D3E\u51FA\u91C7\u77FF\u65E0\u4EBA\u673A\uFF0C\u81EA\u52A8\u91C7\u96C6 100 \u7C73\u5185\u7684\u77FF\u70B9\u5E76\u8FD0\u56DE\u3002\u5347\u7EA7\u540E\u65E0\u4EBA\u673A\u66F4\u591A\uFF0C\u6EE1\u7EA7\u53EF\u91C7\u949B\u3002"},turret:{name:"\u9632\u5FA1\u70AE\u5854",icon:"shield",cat:"defense",chapter:2,cost:{iron:22,silicon:10},power:-2,r:1.9,hp:200,range:40,desc:"\u81EA\u52A8\u653B\u51FB 40 \u7C73\u5185\u7684\u9508\u8680\u86DB\u3002\u9700\u8981\u7535\u529B\u3002"},reactor:{name:"\u805A\u53D8\u53CD\u5E94\u5806",icon:"power",cat:"industry",chapter:3,cost:{iron:40,silicon:20,titanium:12},power:20,r:5.4,hp:400,desc:"\u663C\u591C\u4E0D\u505C +20 \u26A1\u3002\u7528\u706B\u661F\u7684\u949B\uFF0C\u70B9\u4EAE\u4EBA\u7C7B\u7684\u7B2C\u4E8C\u9897\u592A\u9633\u3002"},lab:{name:"\u7814\u7A76\u6240",icon:"book",cat:"industry",chapter:2,level:1,cost:{iron:25,silicon:25},power:-2,r:4.2,hp:260,rp:1,desc:"\u5C45\u6C11\u5728\u8FD9\u91CC\u505A\u7814\u7A76\uFF0C\u4EA7\u51FA\u79D1\u7814\u70B9\u6570\u3002\u4EBA\u53E3\u8D8A\u591A\u8D8A\u5FEB\u3002\u6309 T \u6253\u5F00\u79D1\u7814\u3002"},trade:{name:"\u661F\u9645\u8D38\u6613\u7AD9",icon:"ship",cat:"city",chapter:2,level:1,cost:{iron:30,silicon:18},power:-2,r:5,hp:260,desc:"\u4E0E\u5730\u7403\u548C\u5176\u4ED6\u6B96\u6C11\u5730\u4EA4\u6362\u7269\u8D44\u3002\u9760\u8FD1\u6309 E \u4EA4\u6613\u3002"},plaza:{name:"\u4E2D\u592E\u5E7F\u573A",icon:"planet",cat:"city",level:1,cost:{iron:20,silicon:16},power:-1,r:7.4,hp:300,desc:"\u4E2D\u5FC3\u6709\u4E00\u5EA7\u5168\u606F\u5730\u7403\u3002\u5929\u9ED1\u540E\uFF0C\u5C45\u6C11\u4EEC\u4F1A\u6765\u8FD9\u91CC\u805A\u5728\u4E00\u8D77\uFF0C\u770B\u4E00\u770B\u6545\u4E61\u3002"},apartment:{name:"\u516C\u5BD3\u5854",icon:"tower",cat:"city",level:2,cost:{iron:40,silicon:25,titanium:4},power:-3,r:4.6,hp:400,housing:12,life:12,desc:"\u53EF\u4F4F 12 \u4EBA\u3002\u7A97\u6237\u91CC\u7684\u706F\u5149\uFF0C\u662F\u57CE\u5E02\u7684\u661F\u7A7A\u3002"},vfarm:{name:"\u5782\u76F4\u519C\u573A",icon:"food",cat:"city",level:2,cost:{iron:30,silicon:30,ice:15},power:-4,r:4.2,hp:260,food:14,desc:"\u5341\u56DB\u5C42\u7684\u7ACB\u4F53\u519C\u7530\u3002\u4F9B 14 \u4EBA\u98DF\u7269\u3002"},lifehub:{name:"\u751F\u6001\u4E2D\u67A2",icon:"o2",cat:"city",level:3,cost:{iron:45,silicon:30,ice:30,titanium:6},power:-5,r:6,hp:400,o2:16,water:16,life:20,desc:"\u5927\u578B\u6C27\u6C14\u4E0E\u6C34\u5FAA\u73AF\u7CFB\u7EDF\u3002\u4F9B 16 \u4EBA\u6C27\u6C14\u548C\u7528\u6C34\uFF0C20 \u7C73\u5185\u8865\u6C27\u3002"},terraformer:{name:"\u5927\u6C14\u6539\u9020\u5854",icon:"planet",cat:"stellar",chapter:4,only:"terraformable",cost:{iron:100,silicon:60,titanium:30,ice:50},power:-12,r:7.4,hp:800,desc:"\u5411\u5929\u7A7A\u91CA\u653E\u6E29\u5BA4\u6C14\u4F53\u4E0E\u6C34\u6C7D\u3002\u8BA9\u8FD9\u9897\u661F\u7403\uFF0C\u771F\u6B63\u6210\u4E3A\u5BB6\u3002"},launch:{name:"\u661F\u9645\u53D1\u5C04\u53F0",icon:"ship",cat:"stellar",chapter:5,level:tt==="mars"?5:4,only:"route",cost:{iron:160,silicon:120,titanium:60,ice:60},power:-15,r:9.5,hp:900,desc:"\u661F\u9645\u822A\u7EBF\u7684\u8D77\u70B9\u3002\u9760\u8FD1\u6309 E \u6253\u5F00\u661F\u56FE\uFF0C\u524D\u5F80\u65B0\u7684\u661F\u7403\u6216\u56DE\u5230\u5DF2\u5F00\u62D3\u7684\u5BB6\u56ED\u3002"},monument:{name:"\u6587\u660E\u7EAA\u5FF5\u7891",icon:"monument",cat:"stellar",level:5,only:"final",cost:{iron:150,silicon:120,titanium:80},power:-6,r:6.5,hp:900,desc:"\u4E09\u9897\u661F\u7403\uFF0C\u4E00\u4E2A\u4EBA\u7C7B\u3002\u732E\u7ED9\u6240\u6709\u51FA\u53D1\u7684\u4EBA\u3002"}},Pf=3,Cf=[1,1,1.6,2.2],J2=["lamp","beacon","fabricator","plaza","trade","terraformer","launch","monument"];function Qc(n){return!J2.includes(n.type)&&(n.level||1)<Pf}function Si(n,e){let t=n.def,i=n.level||1,s=t[e];if(!s)return 0;if(e==="power")return s>0?s*Cf[i]*(n.type==="solar"&&kt("pv")?1.5:1)*(n.type==="reactor"&&kt("fusion")?1.4:1):s*(1+.25*(i-1));if(e==="life")return s+3*(i-1);if(e==="range")return s+8*(i-1)+(kt("plasma")?10:0);if(e==="hp")return s*(1+.5*(i-1))*(kt("alloy")?1.5:1);let r=e==="o2"&&kt("sieve")||e==="food"&&kt("hydro")||e==="water"&&kt("drill")?1.5:1;return Math.round(s*Cf[i]*r)}function If(n){let e=n.level||1,t={};for(let i in n.def.cost)t[i]=Math.ceil(n.def.cost[i]*(e===1?.8:1.3));return t.titanium=(t.titanium||0)+(e===1?3:8),t}function Sg(n){if(!Qc(n))return!1;let e=If(n);return _i(e)?(Wa(e),n.level=(n.level||1)+1,Tg(n,!0),J.play("place"),Me.ring(new T(n.x,n.y,n.z),n.def.r*1.2,60,[.5,.9,1]),Wi(),!0):!1}function Tg(n,e){let t=n.level||1;n.maxHp=Si(n,"hp"),n.hp=Math.min(n.maxHp,e?n.maxHp:n.hp);let i=1+(t-1)*.12;n.group.scale.set(i,n.group.scale.y,i),n.baseScale=i,n.anim._pips&&n.anim._pips.forEach(r=>n.group.remove(r)),n.anim._pips=[];let s=Math.max(2.5,n.def.r*.9);for(let r=1;r<t;r++)n.anim._pips.push(Pe(16757596,1.4,n.group,(r-t/2)*.9,s+1.2,0));if(e){n.buildT=.35;let r=new le(new Ye(n.def.r*1.05,.08,6,48),Ag.clone());r.rotation.x=Math.PI/2,r.position.set(n.x,n.y,n.z),d.scene.add(r),n.anim._scan=r}}function $i(n){let e=Tn[n];return e.only==="terraformable"&&!he.terraformable?{hide:!0}:e.only==="route"&&!he.next&&!(hn.visited||[]).some(t=>t.id!==tt)?{hide:!0}:e.only==="final"&&he.next?{hide:!0}:!Fn()&&tt==="mars"&&e.chapter&&e.chapter>d.chapter?{ok:!1,why:"\u5267\u60C5\u63A8\u8FDB\u540E\u89E3\u9501"}:e.level&&e.level>d.cityLevel?{ok:!1,why:`\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C${Dn[e.level].name}\u300D\u89E3\u9501`}:{ok:!0}}var Lf=["solar","oxygen","lamp","habitat","greenhouse","extractor","beacon","fabricator","drones","lab","trade","turret","reactor","plaza","apartment","vfarm","lifehub","terraformer","launch","monument"],j2=["oxygen","lifehub","turret","habitat","apartment","extractor","greenhouse","vfarm","beacon","plaza","lab","trade","drones","fabricator","terraformer","launch","monument"],Ag=new it({color:8382207,transparent:!0,opacity:.8,blending:Et,depthWrite:!1,side:tn});function eh(n,e,t,i=0,s,r=!1,o=1){let a=Tn[n],l=new we,c={};Hi[n](l,c);let h=ve(e,t);if(l.position.set(e,h,t),l.rotation.y=i,d.scene.add(l),r){l.scale.set(1,.001,1);let f=new le(new Ye(a.r*1.05,.08,6,48),Ag.clone());f.rotation.x=Math.PI/2,f.position.set(e,h,t),d.scene.add(f),c._scan=f}let u={buildT:r?0:1,type:n,def:a,x:e,z:t,y:h,rot:i,group:l,anim:c,hp:s??a.hp,broken:s!==void 0&&s<=0,powered:!0,t:Math.random()*10,cool:0};return u.collider=d.colliders.add({x:e,z:t,r:a.r*(n==="beacon"?.15:n==="plaza"?.28:.9),kind:"building",b:u}),u.level=o,u.maxHp=Si(u,"hp"),s===void 0&&(u.hp=u.maxHp),o>1&&Tg(u,!1),d.buildings.push(u),d.stats.built[n]=(d.stats.built[n]||0)+1,ug(u),Wi(),u}function Rg(n,e=!1){if(e)for(let s in n.def.cost)d.res[s]+=Math.floor(n.def.cost[s]*.5);d.scene.remove(n.group),d.colliders.remove(n.collider),dg(n),n.type==="drones"&&bg(n);let t=d.buildings.indexOf(n);t>=0&&d.buildings.splice(t,1),d.stats.built[n.type]=Math.max(0,(d.stats.built[n.type]||0)-1);let i=new T(n.x,n.y+2,n.z);Me.burst(i,[1,.6,.3],60,10),Me.dustPuff(i,30,n.def.r*2),Wi()}function Cg(n){return d.buildings.filter(e=>e.type===n).length}function Wi(){let n=d.colony,e=(d.time.elevation>.05?1:.4)*he.solar,t=0,i=0;for(let r of d.buildings){if(r.broken)continue;let o=Si(r,"power");o>0?t+=r.type==="solar"?o*e:o:i-=o}let s=t;for(let r of d.buildings)r.powered=r.def.power>=0&&!r.broken,r.maxHp=Si(r,"hp");for(let r of j2)for(let o of d.buildings){if(o.type!==r)continue;let a=Si(o,"power");!o.broken&&s>=-a&&(s+=a,o.powered=!0)}n.powerProd=t,n.powerUse=i,n.deficit=i>t+.001,n.housing=0,n.o2=0,n.food=0,n.water=0;for(let r of d.buildings)n.housing+=Si(r,"housing"),r.powered&&(n.o2+=Si(r,"o2"),n.food+=Si(r,"food"),n.water+=Si(r,"water"));n.support=Math.min(n.housing,n.o2,n.food,n.water)}function Pg(n){for(let e of d.buildings){let t=Si(e,"life");if(!t||!e.powered)continue;let i=e.x-n.x,s=e.z-n.z;if(i*i+s*s<t*t)return e}return null}var Vi=null,Q2=null,Ig=new it({color:5636010,transparent:!0,opacity:.35,depthWrite:!1}),eb=new it({color:16729156,transparent:!0,opacity:.35,depthWrite:!1}),ri,bt={type:null,rot:0,valid:!1,reason:"",x:0,z:0};function Or(n){if(Vi&&(d.scene.remove(Vi),Vi=null),bt.type=n,Q2=n,!n){ri&&(ri.visible=!1);return}let e=new we;Hi[n](e,{}),e.traverse(i=>{i.isMesh&&(i.material=Ig,i.castShadow=!1,i.receiveShadow=!1),(i.isSprite||i.userData.found)&&(i.visible=!1)}),Vi=e,d.scene.add(e),ri||(ri=new le(new vn(.96,1,64),new it({color:6741503,transparent:!0,opacity:.5,depthWrite:!1,side:tn})),ri.rotation.x=-Math.PI/2,d.scene.add(ri));let t=Tn[n].life||Tn[n].range||0;ri.visible=t>0,ri.scale.setScalar(t||1)}function Lg(n,e){if(!Vi)return;if(!n){Vi.visible=!1,ri.visible=!1,bt.valid=!1,bt.reason="\u5BF9\u51C6\u5730\u9762";return}Vi.visible=!0;let t=Tn[bt.type],i=n.x,s=n.z,r=Math.hypot(i-e.x,s-e.z),o=t.r+1.2;if(r<o){let h=r>.01?(i-e.x)/r:-Math.sin(d.player.yaw),u=r>.01?(s-e.z)/r:-Math.cos(d.player.yaw);i=e.x+h*o,s=e.z+u*o,r=o}let a=ve(i,s);Vi.position.set(i,a,s),Vi.rotation.y=bt.rot,bt.x=i,bt.z=s,ri.scale.x>1&&(ri.visible=!0,ri.position.set(i,a+.3,s));let l="";_i(t.cost)?Dr(i,s,Math.max(1.5,t.r*.7))>(t.r>4?.32:.45)?l="\u5730\u9762\u592A\u9661":d.colliders.overlaps(i,s,t.r*.85)?l="\u4F4D\u7F6E\u88AB\u5360\u7528":r<t.r+.8?l="\u79BB\u81EA\u5DF1\u592A\u8FD1":Math.abs(i)>je-170||Math.abs(s)>je-170?l="\u8D85\u51FA\u53EF\u5EFA\u9020\u533A\u57DF":lg(i,s,t.r)||(l="\u8D85\u51FA\u6B96\u6C11\u5730\u9886\u5730\uFF08\u63D0\u5347\u57CE\u5E02\u7B49\u7EA7\u6765\u6269\u5F20\uFF09"):l="\u8D44\u6E90\u4E0D\u8DB3",bt.valid=!l,bt.reason=l;let c=l?eb:Ig;Vi.traverse(h=>{h.isMesh&&(h.material=c)})}function Dg(){if(!bt.type||!bt.valid)return J.play("deny"),null;let n=Tn[bt.type];Wa(n.cost);let e=eh(bt.type,bt.x,bt.z,bt.rot,void 0,!0);return J.play("place"),Me.ring(new T(e.x,e.y,e.z),n.r,50),e}var Rf=0;function Ug(n,e){Rf-=n,Rf<=0&&(Rf=.5,Wi()),fg(),wg(n);let t=d.time.night,i=performance.now()*.001;M.window.emissiveIntensity=.3+t*.85,M.lamp.emissiveIntensity=t*4;for(let s of af)s.emissiveIntensity=.15+t*1.4;for(let s of d.buildings){let r=s.anim,o=s.powered;if(s.t+=n,s.buildT<1){s.buildT=Math.min(1,s.buildT+n/1.3);let a=s.buildT,l=1+2.2*Math.pow(a-1,3)+1.2*Math.pow(a-1,2);s.group.scale.y=Math.max(.001,l)*(s.baseScale||1);let c=Math.max(3,s.def.r*1.4)*(s.type==="apartment"||s.type==="launch"||s.type==="terraformer"||s.type==="monument"?4:1);r._scan.position.y=s.y+a*c,r._scan.material.opacity=.8*(1-a),r._scan.scale.setScalar(1-a*.25),Math.random()<.5&&Me.spark(new T(s.x+(Math.random()-.5)*s.def.r*2,s.y+a*c,s.z+(Math.random()-.5)*s.def.r*2),[.5,.9,1],1,2,.6),a>=1&&(d.scene.remove(r._scan),r._scan.geometry.dispose(),delete r._scan)}switch(s.hp<s.maxHp&&d.time.night<.5&&(s.hp=Math.min(s.maxHp,s.hp+n*(s.broken?5:2)),s.broken&&s.hp>=s.maxHp*.5&&(s.broken=!1,Wi(),d.events.emit("toast",`\u2713 ${s.def.name} \u5DF2\u4FEE\u590D\uFF0C\u6062\u590D\u8FD0\u8F6C`))),s.broken&&Math.random()<n*6&&Me.dustPuff(new T(s.x+(Math.random()-.5)*s.def.r,s.y+1.5,s.z+(Math.random()-.5)*s.def.r),1,.5,[.15,.13,.12]),s.type){case"solar":{let a=new T(bi.x,Math.max(bi.y,.2),bi.z).applyAxisAngle(new T(0,1,0),-s.rot);r.pivot.rotation.y=Math.atan2(a.x,a.z),r.panel.rotation.x=Math.PI/2-Math.asin(Math.min(1,a.y/a.length()));break}case"oxygen":o&&(r.fan.rotation.z+=n*8),r.light.visible=o;break;case"extractor":o&&(r.drill.position.y=3+Math.sin(s.t*3)*.8),r.light.visible=o;break;case"greenhouse":r.light.material.opacity=o?.3+t*.5:0;break;case"fabricator":o?(r.arm.rotation.y=Math.sin(s.t*.8)*1.2,r.spark.visible=Math.sin(s.t*7)>.6):r.spark.visible=!1;break;case"habitat":r.tip.visible=Math.sin(i*2+s.x)>.3;break;case"apartment":r.tip.visible=Math.sin(i*2+s.z)>.3;break;case"vfarm":r.light.material.opacity=o?.25+t*.5:0;break;case"lifehub":o&&(r.fan.rotation.y+=n*3),r.light.visible=o;break;case"plaza":r.earth.rotation.y+=n*.25,r.earth.position.y=4+Math.sin(i*.8)*.15,r.earth.material.opacity=o?.55-t*.15:.15,r.halo.material.opacity=o?.25+t*.2:0;break;case"lab":r.scope&&(r.scope.rotation.z=Math.sin(i*.2)*.4),r.tip&&(r.tip.visible=Math.sin(i*2.5)>0),r.light&&(r.light.visible=o);break;case"trade":r.jib&&(r.jib.rotation.y=Math.sin(i*.15)*1.2),r.tip&&(r.tip.visible=Math.sin(i*3)>0);break;case"monument":r.rings.forEach((a,l)=>{a.rotation.x=i*(.3+l*.2),a.rotation.y=i*(.2+l*.15)});break;case"reactor":r.r1.rotation.y+=n*.8,r.r2.rotation.z+=n*.6,r.light.material.opacity=.5+Math.sin(i*3)*.2;break;case"beacon":{let a=Math.floor(i*6)%8;r.lights.forEach((l,c)=>{l.visible=o&&(c===a||c===(a+4)%8||t>.3)}),r.tip.visible=Math.sin(i*3)>0;break}case"lamp":r.glow.visible=t>.2,r.glow.material.opacity=t*.6;break;case"turret":tb(s,n,e);break;case"terraformer":{r.rings.forEach((a,l)=>{a.position.y=10+l*8+Math.sin(i*1.5+l)*1.5,a.rotation.x=Math.sin(i+l)*.2}),r.beam.material.opacity=o&&d.terraform<1?.18+Math.sin(i*4)*.05:0,o&&d.terraform<1&&Math.random()<.6&&Me.rise(new T(s.x,s.y+28,s.z),[.4,.9,1],4);break}}}}function tb(n,e,t){let i=n.anim;if(i.eye.visible=n.powered,!n.powered)return;n.cool-=e;let s=null,r=Si(n,"range");for(let l of d.enemies){if(l.dead)continue;let c=Math.hypot(l.pos.x-n.x,l.pos.z-n.z);c<r&&(r=c,s=l)}if(!s){i.head.rotation.y+=e*.4;return}let a=Math.atan2(-(s.pos.x-n.x),-(s.pos.z-n.z))-n.rot-i.head.rotation.y;if(a=Math.atan2(Math.sin(a),Math.cos(a)),i.head.rotation.y+=Math.sign(a)*Math.min(Math.abs(a),e*5),Math.abs(a)<.15&&n.cool<=0){n.cool=.45;let l=new T(n.x,n.y+2.7,n.z),c=s.pos.clone();c.y+=1;let h=c.sub(l).normalize();l.addScaledVector(h,2.2),t.shoot(l,h,15*Cf[n.level||1]*(kt("plasma")?1.5:1),"turret"),J.play("turret")}}function Ng(){return d.buildings.map(n=>[n.type,+n.x.toFixed(2),+n.z.toFixed(2),+n.rot.toFixed(3),Math.round(n.hp),n.level||1])}var al=new T;function oi(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;al.copy(e),al[i]=0,al.normalize();let c=.5*o/(o+a),h=1-al.angleTo(n)/l;return Math.sign(al[t])===1?h*c:a/(o+a)+c+c*(1-h)}var Zo=class extends We{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new T,l=new T,c=new T(e,t,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=h.length/6,g=new T,y=.5/s;for(let x=0,m=0;x<h.length;x+=3,m+=2)switch(a.fromArray(h,x),l.copy(a),l.x-=Math.sign(l.x)*y,l.y-=Math.sign(l.y)*y,l.z-=Math.sign(l.z)*y,l.normalize(),h[x+0]=c.x*Math.sign(a.x)+l.x*r,h[x+1]=c.y*Math.sign(a.y)+l.y*r,h[x+2]=c.z*Math.sign(a.z)+l.z*r,u[x+0]=l.x,u[x+1]=l.y,u[x+2]=l.z,Math.floor(x/p)){case 0:g.set(1,0,0),f[m+0]=oi(g,l,"z","y",r,i),f[m+1]=1-oi(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),f[m+0]=1-oi(g,l,"z","y",r,i),f[m+1]=1-oi(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),f[m+0]=1-oi(g,l,"x","z",r,e),f[m+1]=oi(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),f[m+0]=1-oi(g,l,"x","z",r,e),f[m+1]=1-oi(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),f[m+0]=1-oi(g,l,"x","y",r,e),f[m+1]=1-oi(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),f[m+0]=oi(g,l,"x","y",r,e),f[m+1]=1-oi(g,l,"y","x",r,t);break}}};var ue=(n,e,t)=>new T(n,e,t);function N(n,e,t=0,i=0,s=0,r,o=0,a=0,l=0){let c=new le(n,e);return c.position.set(t,i,s),c.rotation.set(o,a,l),c.castShadow=!0,c.receiveShadow=!0,r&&r.add(c),c}var ke=(n,e,t,i=.06)=>new Zo(n,e,t,2,Math.min(i,n/2.1,e/2.1,t/2.1)),st=(n,e,t,i=24,s=!1)=>new et(n,e,t,i,1,s),Un=(n,e=32)=>new us(n.map(([t,i])=>new ne(t,i)),e);function qt(n,e,t,i,s,r=10){let o=e.clone().sub(n),a=o.length(),l=N(st(t,t,a,r),i,0,0,0,s);return l.position.copy(n).add(e).multiplyScalar(.5),l.quaternion.setFromUnitVectors(ue(0,1,0),o.normalize()),l}function nb(n,e,t,i,s){let r=qt(n,e,t,i,s);for(let o of[n,e]){let a=qt(o.clone().lerp(e===o?n:e,.02),o,t*1.6,M.metal,s);a.scale.y=1}return r}function vs(n,e,t,i,s=32){let r=new za(n);return N(new Ec(r,s,e,8,!1),t,0,0,0,i)}function ib(n,e,t,i,s,r){let o=n.clone().lerp(e,.5);return o.y-=t,vs([n,n.clone().lerp(o,.5).add(ue(0,-t*.15,0)),o,e.clone().lerp(o,.5).add(ue(0,-t*.15,0)),e],i,s,r,24)}function kg(n,e,t,i,s,r=0,o=.5){let a=new we;a.position.set(e,t,i),a.rotation.y=r,n.add(a),N(st(.035,.035,s,6),M.metal,-o/2,s/2,0,a),N(st(.035,.035,s,6),M.metal,o/2,s/2,0,a);for(let l=.25;l<s;l+=.32)N(st(.022,.022,o,6),M.metal,0,l,0,a,0,0,Math.PI/2);return a}function Ms(n,e,t,i,s,r,o=0,a=8){let l=new we;l.position.set(i,s,r),l.rotation.y=o,n.add(l),N(ke(e,t,.08,.02),M.dark,0,0,0,l);for(let c=0;c<a;c++)N(new We(e*.9,t/a*.45,.04),M.metal,0,-t/2+(c+.5)*t/a,.05,l,-.4,0,0);return l}function ll(n,e,t,i,s,r=0,o=0){let a=new we;a.position.set(e,t,i),a.rotation.set(o,r,0),n.add(a),N(new Ye(s,s*.18,8,24),M.metal,0,0,0,a),N(new qs(s*.95,24),M.window,0,0,-.01,a);for(let l=0;l<8;l++){let c=l/8*Math.PI*2;N(new Ge(s*.06,6,4),M.metal,Math.cos(c)*s*1.12,Math.sin(c)*s*1.12,.02,a)}return a}function Nf(n,e,t,i,s=.05){for(let r=0;r<i;r++){let o=r/i*Math.PI*2;N(st(s,s,s*1.2,6),M.metal,Math.cos(o)*e,t,Math.sin(o)*e,n)}}function Df(n,e,t,i,s=.22,r=0,o=0){let a=new we;a.position.set(e,t,i),a.rotation.set(r,o,0),n.add(a),N(new Ye(s,s*.12,6,18),M.red2,0,0,0,a);for(let l=0;l<3;l++)N(new We(s*2,s*.12,s*.12),M.red2,0,0,0,a,0,0,l*Math.PI/3);return N(st(s*.25,s*.25,s*.6,8),M.metal,0,0,-s*.3,a,Math.PI/2,0,0),a}function Ko(n,e,t,i,s=0){let r=new we;return r.position.set(e,t,i),r.rotation.y=s,n.add(r),N(st(.13,.13,.06,18),M.metal,0,0,0,r,Math.PI/2,0,0),N(new qs(.11,18),M.screen,0,0,.032,r),r}function ar(n,e,t,i,s,r,o=0){return N(new We(e,t,.02),M.hazard,i,s,r,n,0,o,0)}function nh(n,e,t,i,s,r,o,a,l=0){let c=new we;c.rotation.y=l,n.add(c);for(let h=0;h<t;h++){let u=.12+e()*.35,f=.1+e()*.3,p=.04+e()*.12,g=e(),y=g<.5?M.panel:g<.8?M.dark:M.metal;e()<.3?N(st(u*.3,u*.3,p*2,10),y,i+e()*(s-i),r+e()*(o-r),a+p,c,Math.PI/2,0,0):N(ke(u,f,p,.015),y,i+e()*(s-i),r+e()*(o-r),a+p/2,c)}return c}function Jo(n){let e=n;return()=>(e=e*16807%2147483647,(e-1)/2147483646)}{let n=document.createElement("canvas");n.width=128,n.height=32;let e=n.getContext("2d");e.fillStyle="#f2c11a",e.fillRect(0,0,128,32),e.fillStyle="#1a1a1a";for(let h=-32;h<160;h+=24)e.beginPath(),e.moveTo(h,32),e.lineTo(h+12,32),e.lineTo(h+44,0),e.lineTo(h+32,0),e.fill();let t=new ln(n);t.colorSpace=_t,t.wrapS=ls,t.repeat.set(2,1),M.hazard=new de({map:t,roughness:.7}),M.red2=new de({color:13120030,roughness:.5,metalness:.3}),M.chrome=new de({color:14738666,roughness:.15,metalness:1}),M.rubber=new de({color:1842206,roughness:.92}),M.ablative=new de({color:3811874,roughness:.95,map:M.found.map,bumpMap:M.found.bumpMap,bumpScale:3}),M.soil=new de({color:3875864,roughness:1}),M.leaf=new de({color:4168250,roughness:.7,flatShading:!0}),M.leaf2=new de({color:7127626,roughness:.7,flatShading:!0}),M.fruit=new de({color:14694428,roughness:.4}),M.growlight=new de({color:2228241,emissive:16732120,emissiveIntensity:2.2});let i=document.createElement("canvas");i.width=i.height=64;let s=i.getContext("2d");s.fillStyle="#0a1a14",s.fillRect(0,0,64,64),s.strokeStyle="#6dffb5",s.lineWidth=3,s.beginPath(),s.arc(32,36,22,Math.PI*1.1,Math.PI*1.9),s.stroke(),s.beginPath(),s.moveTo(32,36),s.lineTo(46,22),s.stroke();let r=new ln(i);r.colorSpace=_t,M.screen=new de({map:r,emissive:16777215,emissiveMap:r,emissiveIntensity:.9});let o=document.createElement("canvas");o.width=128,o.height=128;let a=o.getContext("2d"),l=a.createLinearGradient(0,0,128,128);l.addColorStop(0,"#16285a"),l.addColorStop(.5,"#2a4a9a"),l.addColorStop(1,"#122048"),a.fillStyle=l,a.fillRect(0,0,128,128),a.strokeStyle="rgba(200,220,255,.55)",a.lineWidth=1;for(let h=16;h<128;h+=16)a.beginPath(),a.moveTo(h,0),a.lineTo(h,128),a.stroke();a.strokeStyle="rgba(220,230,255,.8)",a.lineWidth=2,a.beginPath(),a.moveTo(0,64),a.lineTo(128,64),a.stroke();let c=new ln(o);c.colorSpace=_t,c.anisotropy=8,M.cell=new de({map:c,roughness:.12,metalness:.6,envMapIntensity:1.8})}function Xi(n,e,t=!1){let i=t?N(ke(e*2,4,e*2,.12),M.found,0,-1.8,0,n):N(st(e,e*1.05,4,32),M.found,0,-1.8,0,n);i.castShadow=!1,i.userData.found=!0}Object.assign(Hi,{solar(n,e){Xi(n,2.2,!0),N(ke(1.4,.25,1.4,.05),M.panel,0,.12,0,n),Nf(n,.55,.27,8,.04),N(Un([[0,0],[.3,0],[.26,.4],[.17,.6],[.15,2.1],[0,2.1]]),M.metal,0,.25,0,n),N(ke(.5,.6,.4,.05),M.dark,.32,.65,0,n),Ko(n,.57,.7,0,Math.PI/2),ib(ue(.4,.5,.15),ue(1.3,.05,.9),.15,.03,M.rubber,n);let t=new we;t.position.y=2.45,n.add(t),N(ke(.5,.42,.5,.06),M.dark,0,0,0,t),N(st(.12,.12,.9,12),M.chrome,0,.1,0,t,0,0,Math.PI/2);let i=new we;i.position.y=.25,t.add(i),N(ke(4.4,.1,3,.03),M.metal,0,-.02,0,i);for(let s=0;s<4;s++)for(let r=0;r<3;r++){let o=N(new We(1.02,.03,.92),M.cell,-1.6+s*1.07,.045,-.97+r*.97,i);o.castShadow=!0}for(let s of[-1.1,1.1])N(new We(4.2,.08,.06),M.metal,0,-.1,s,i);for(let s of[-1.5,0,1.5])N(new We(.06,.08,2.6),M.metal,s,-.1,0,i);qt(ue(-1.5,-.12,-1.1),ue(0,-.35,0),.03,M.metal,i),qt(ue(1.5,-.12,1.1),ue(0,-.35,0),.03,M.metal,i),qt(ue(1.5,-.12,-1.1),ue(0,-.35,0),.03,M.metal,i),qt(ue(-1.5,-.12,1.1),ue(0,-.35,0),.03,M.metal,i),N(ke(.3,.12,.2,.02),M.dark,1.9,.08,1.35,i),e.pivot=t,e.panel=i},oxygen(n,e){Xi(n,3);let t=Jo(11);N(st(3,3.1,.35,40),M.panel,0,.17,0,n);for(let s of[-1.35,1.35]){let r=new we;r.position.set(s,.35,-.3),n.add(r),N(Un([[0,.2],[.55,.22],[.9,.45],[1,.8],[1,3.2],[.9,3.55],[.55,3.78],[0,3.8]],40),M.white,0,0,0,r);for(let o of[1.2,2.4])N(new Ye(1.005,.03,6,40),M.metal,0,o,0,r,Math.PI/2,0,0);N(st(1.015,1.015,.25,40,!0),M.orange,0,1.8,0,r);for(let o of[-.6,.6])N(ke(1.6,.35,.2,.04),M.dark,0,.25,o,r);N(st(.12,.12,.3,12),M.metal,0,3.9,0,r),Df(r,0,4.1,0,.18,Math.PI/2,0),Ko(r,0,2.2,1.02),kg(r,0,.3,-1.05,3.4,Math.PI)}N(ke(1.7,1.9,1.6,.1),M.panel,0,1.3,1.2,n),N(ke(1.8,.2,1.7,.05),M.orange,0,2.3,1.2,n),nh(n,t,10,-.7,.7,.6,2,1.95),Ms(n,1,.5,0,.7,2.01,0,6),N(new Ye(.42,.06,8,28),M.dark,0,1.75,2.02,n);let i=new we;i.position.set(0,1.75,2.03),n.add(i);for(let s=0;s<6;s++)N(new We(.1,.36,.02),M.metal,Math.sin(s*Math.PI/3)*.2,Math.cos(s*Math.PI/3)*.2,0,i,0,.4,-s*Math.PI/3);N(st(.08,.08,.06,12),M.chrome,0,0,0,i,Math.PI/2,0,0),e.fan=i;for(let s of[-1.35,1.35])vs([ue(s,3.2,.5),ue(s*.7,3,.9),ue(s*.3,2.4,1.2),ue(s*.25,2.2,1.3)],.07,M.metal,n);nb(ue(-1.35,.9,.7),ue(1.35,.9,.7),.06,M.metal,n),Df(n,.8,.9,.85,.15,0,0),Ko(n,-.5,2,2.01),Ko(n,.5,2,2.01),e.light=Pe(6741503,.45,n,.6,2.05,2.05),ar(n,1.8,.12,0,.42,2.02)},habitat(n,e){Xi(n,6.2);let t=Jo(23);N(Un([[0,0],[6.25,0],[6.3,.15],[6.25,.9],[6.05,1.05],[5.95,1.25],[0,1.25]],64),M.panel,0,0,0,n);for(let o=0;o<16;o++){let a=o/16*Math.PI*2;Math.abs(a-Math.PI/2)<.3||Ms(n,.7,.4,Math.cos(a)*6.28,.55,Math.sin(a)*6.28,-a+Math.PI/2,4)}let i=N(new Ge(5.8,64,24,0,Math.PI*2,0,Math.PI/2),M.white,0,1.2,0,n);i.scale.y=.85;for(let o=0;o<12;o++)N(new Ye(5.86,.08,6,32,Math.PI/2),M.panel,0,1.2,0,n,0,o*Math.PI/6,0).scale.set(1,.85,1);for(let[o,a]of[[2.6,5.62],[4.3,4.6]])N(new Ye(a,.07,6,64),M.panel,0,o,0,n,Math.PI/2,0,0);e.windows=[];for(let o=0;o<14;o++){let a=o/14*Math.PI*2+.11;if(Math.abs(a-Math.PI/2)<.35)continue;let l=new we;l.position.set(Math.cos(a)*5.76,2,Math.sin(a)*5.76),l.rotation.y=-a+Math.PI/2,l.rotation.x=-.18,n.add(l),N(ke(1.15,.62,.16,.08),M.metal,0,0,0,l),N(ke(1,.48,.1,.07),M.window,0,0,.05,l)}N(st(1.2,1.4,.5,32),M.panel,0,6.05,0,n),N(new Ge(1,32,12,0,Math.PI*2,0,Math.PI/2),M.glass,0,6.3,0,n).castShadow=!1,N(new Ye(1.05,.06,6,32),M.metal,0,6.3,0,n,Math.PI/2,0,0),N(st(.06,.09,3.2,8),M.metal,1.6,7,0,n),e.tip=Pe(16728128,1,n,1.6,8.7,0),N(new Ge(.55,20,8,0,Math.PI*2,0,Math.PI/3),M.white,-1.4,6.6,.6,n).rotation.set(-.9,.5,0),N(st(.05,.05,.9,6),M.metal,-1.4,6.1,.6,n),kg(n,0,1.25,-5.4,3.2,0,.45).rotation.x=-.6;let r=new we;r.position.set(0,0,6.2),n.add(r),N(ke(2.6,2.9,3,.25),M.white,0,1.45,.2,r),N(ke(2.64,.12,3.04,.05),M.orange,0,2.62,.2,r),N(ke(1.5,2.2,.15,.12),M.metal,0,1.25,1.72,r),N(ke(1.2,1.95,.1,.1),M.dark,0,1.2,1.78,r),ll(r,0,1.75,1.84,.22),N(ke(.12,.4,.08,.03),M.chrome,.45,1.1,1.85,r),ar(r,1.5,.14,0,.12,1.85);for(let o=0;o<3;o++)N(ke(1.4,.12,.35,.03),M.metal,0,.06+o*0,2.05+o*.35,r).position.y=.3-o*.12;Pe(16769184,.8,r,1,2.5,1.8),N(ke(.5,.35,.3,.04),M.dark,-1,2.4,1.75,r),nh(r,t,8,-1.2,1.2,.4,2.6,1.7,0),vs([ue(4.5,1,3.5),ue(5.6,.6,4.2),ue(6.6,.25,4.6),ue(7.6,.2,4.6)],.12,M.metal,n),vs([ue(-4.5,1,3.5),ue(-5.4,.7,4.4),ue(-6.4,.25,5)],.1,M.orange,n);for(let[o,a,l]of[[-6.3,-2.4,.4],[6.4,-2,-.3]]){let c=new we;c.position.set(o,0,a),c.rotation.y=l,n.add(c),N(ke(1.4,1.1,1,.08),M.panel,0,.55,0,c),Ms(c,.9,.7,0,.6,.51,0,6),N(new Ye(.35,.05,6,20),M.dark,0,1.12,0,c,Math.PI/2,0,0)}},extractor(n,e){Xi(n,2.6,!0),N(ke(4.6,.5,4.6,.08),M.panel,0,.25,0,n),ar(n,4.6,.15,0,.42,2.31),ar(n,4.6,.15,0,.42,-2.31);let t=6.4,i=.6,s=1.6,r=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let[a,l]of r)qt(ue(a*s,.5,l*s),ue(a*i,t,l*i),.09,M.orange,n);for(let a=0;a<3;a++){let l=.5+a*(t-.5)/3,c=l+(t-.5)/3,h=s+(i-s)*(a/3),u=s+(i-s)*((a+1)/3);for(let f=0;f<4;f++){let[p,g]=r[f],[y,x]=r[(f+1)%4];qt(ue(p*h,l,g*h),ue(y*u,c,x*u),.035,M.metal,n),qt(ue(y*h,l,x*h),ue(p*u,c,g*u),.035,M.metal,n),qt(ue(p*u,c,g*u),ue(y*u,c,x*u),.04,M.metal,n)}}N(ke(1.8,.3,1.8,.05),M.dark,0,t+.1,0,n);for(let[a,l]of r)N(st(.03,.03,.7,6),M.metal,a*.85,t+.6,l*.85,n);N(st(.45,.45,.6,20),M.white,0,t+.55,0,n),e.light=Pe(10476799,1,n,0,t+1.1,0);let o=new we;o.position.y=3,n.add(o),N(st(.18,.18,4.6,16),M.chrome,0,0,0,o);for(let a=0;a<5;a++)N(new Ye(.2,.04,6,16),M.metal,0,-2+a*1,0,o,Math.PI/2,0,0);N(new zt(.3,.7,16),M.dark,0,-2.6,0,o,Math.PI,0,0),e.drill=o,N(Un([[0,0],[.9,0],[1,.2],[1,1.8],[.8,2.1],[0,2.15]],32),M.white,2.1,.5,1.3,n),N(st(1.01,1.01,.2,32,!0),M.orange,2.1,1.6,1.3,n),Ko(n,2.1,1.2,2.31),vs([ue(.3,1,.3),ue(.9,1.2,.8),ue(1.5,1.6,1.2),ue(2.1,2.7,1.3)],.08,M.metal,n),Df(n,1.2,1.25,1.1,.14,0,.6),N(ke(1.2,1,.9,.08),M.dark,-1.7,1,1.4,n),Ms(n,.8,.5,-1.7,1,1.86,0,5)},greenhouse(n,e){Xi(n,5,!0),N(ke(10.4,.5,6.4,.1),M.panel,0,.25,0,n);let t=N(new et(3,3,10,40,1,!0,0,Math.PI),M.glass,0,.5,0,n,0,0,Math.PI/2);t.castShadow=!1;for(let s=0;s<9;s++)N(new Ye(3.02,.06,6,28,Math.PI),M.white,-4.8+s*1.2,.5,0,n,0,Math.PI/2,0);for(let s=1;s<6;s++){let r=s/6*Math.PI;N(st(.035,.035,9.8,6),M.white,0,.5+Math.sin(r)*3.02,Math.cos(r)*3.02,n,0,0,Math.PI/2)}for(let s of[-1,1]){let r=N(new qs(3,32,0,Math.PI),M.glass,s*5,.5,0,n,0,s*Math.PI/2,0);r.castShadow=!1,N(ke(.12,2.2,1.3,.04),M.white,s*5,1.6,0,n)}N(ke(.1,1.9,1,.05),M.dark,5.05,1.45,0,n);let i=Jo(71);for(let s of[-1.5,0,1.5]){N(ke(9,.5,.9,.05),M.dark,0,.75,s,n),N(new We(8.8,.06,.8),M.soil,0,1.01,s,n);for(let r=0;r<10;r++){let o=-4.1+r*.9+(i()-.5)*.2,a=(r+Math.round(s))%3;if(a===0)for(let l=0;l<4;l++)N(new Xn(.22+i()*.12,0),l%2?M.leaf:M.leaf2,o+(i()-.5)*.3,1.2+i()*.25,s+(i()-.5)*.3,n).castShadow=!1;else if(a===1){N(st(.02,.02,1.2,4),M.leaf,o,1.6,s,n);for(let l=0;l<5;l++)N(new Xn(.14,0),M.leaf2,o+(i()-.5)*.3,1.2+l*.22,s+(i()-.5)*.3,n).castShadow=!1;for(let l=0;l<3;l++)N(new Ge(.07,8,6),M.fruit,o+(i()-.5)*.3,1.3+i()*.8,s+(i()-.5)*.25,n)}else for(let l=0;l<6;l++){let c=N(new zt(.05,.5,4),M.leaf2,o+(i()-.5)*.25,1.25,s+(i()-.5)*.25,n,(i()-.5)*.6,0,(i()-.5)*.6);c.castShadow=!1}}}for(let s of[-.75,.75])N(ke(9,.06,.12,.02),M.growlight,0,2.7,s,n);e.light=Pe(16737996,4,n,0,2.3,0),N(Un([[0,0],[.6,0],[.65,.1],[.65,1.5],[.5,1.7],[0,1.72]],24),M.white,-4.4,.5,3.6,n),vs([ue(-4.4,1.6,3.6),ue(-4.2,1.9,3),ue(-4,1.5,2.6)],.05,M.metal,n)}});Object.assign(Hi,{fabricator(n,e){Xi(n,4,!0);let t=Jo(41);N(ke(7.4,.4,5.4,.08),M.panel,0,.2,0,n),N(ke(7,3.2,5,.18),M.white,0,2,0,n),N(new et(2.5,2.5,7,32,1,!1,0,Math.PI),M.panel,0,3.6,0,n,0,0,Math.PI/2).scale.set(1,1,.35);for(let o=0;o<6;o++)N(new Ye(2.52,.05,6,24,Math.PI),M.metal,-3.3+o*1.32,3.6,0,n,0,Math.PI/2,0).scale.set(1,.35,1);N(ke(7.1,.2,5.1,.05),M.orange,0,3.55,0,n),N(ke(3.4,2.7,.2,.06),M.metal,0,1.75,2.52,n);for(let o=0;o<12;o++)N(new We(3,.16,.05),M.dark,0,.55+o*.2,2.64,n);ar(n,3.4,.14,0,.35,2.66);for(let o of[-1.9,1.9])Pe(16769184,.7,n,o,3,2.6);nh(n,t,16,-3.2,3.2,.8,3,-2.5,Math.PI),Ms(n,1.2,.8,2.6,1.6,2.52,0,6),Ms(n,1.2,.8,-2.6,1.6,2.52,0,6),vs([ue(3.5,3,-1.5),ue(4.2,2.5,-1.8),ue(4.4,1,-2),ue(4.4,.4,-2)],.1,M.metal,n);let i=new we;i.position.set(2.2,3.85,0),n.add(i),N(st(.45,.55,.4,24),M.dark,0,.2,0,i);let s=new we;s.position.y=.4,s.rotation.z=.35,i.add(s),N(ke(.32,1.8,.32,.08),M.orange,0,.9,0,s),N(st(.22,.22,.45,16),M.metal,0,1.8,0,s,Math.PI/2,0,0);let r=new we;r.position.y=1.8,r.rotation.z=-1.4,s.add(r),N(ke(.25,1.4,.25,.06),M.orange,0,.7,0,r),N(st(.12,.05,.35,12),M.chrome,0,1.55,0,r),e.arm=i,e.spark=Pe(16764006,1,r,0,1.8,0);for(let[o,a,l]of[[-2.6,3.4,1.1],[-1.4,3.3,.9],[-2.1,3.6,.6]])N(ke(l,l,l,.05),M.dark,o,l/2+(l<.7?1.1:0),a,n),N(new We(l*1.01,.06,l*1.01),M.orange,o,l*.7+(l<.7?1.1:0),a,n)},turret(n,e){Xi(n,1.8),N(Un([[0,0],[1.9,0],[1.95,.15],[1.6,.9],[1.2,1.2],[0,1.2]],32),M.metal,0,0,0,n),Nf(n,1.7,.2,12,.06),N(st(.65,.8,1.2,24),M.dark,0,1.75,0,n);let t=new we;t.position.y=2.75,n.add(t),N(ke(1.7,1.05,2,.2),M.white,0,0,.1,t),N(ke(1.75,.18,2.05,.06),M.orange,0,.32,.1,t),N(ke(.9,.35,.6,.08),M.dark,0,.6,.4,t);for(let i of[-.42,.42]){N(st(.16,.16,.5,16),M.dark,i,0,-.95,t,Math.PI/2,0,0),N(st(.09,.09,1.9,16),M.metal,i,0,-1.9,t,Math.PI/2,0,0);for(let s=0;s<3;s++)N(new Ye(.11,.025,6,16),M.cyan,i,0,-1.4-s*.35,t);N(st(.13,.11,.25,16),M.dark,i,0,-2.9,t,Math.PI/2,0,0)}N(st(.18,.18,.1,16),M.cyan,0,.1,-.92,t,Math.PI/2,0,0),e.eye=Pe(3401471,.6,t,0,.1,-.98),Ms(t,.9,.4,0,-.1,1.12,0,4),e.head=t},reactor(n,e){Xi(n,5.2),N(Un([[0,0],[5.2,0],[5.3,.2],[5,1.3],[4.6,1.5],[0,1.5]],48),M.panel,0,0,0,n),ar(n,2.5,.16,0,1,5.06);for(let r=0;r<16;r++){let o=r/16*Math.PI*2;Ms(n,.6,.45,Math.cos(o)*5.1,.75,Math.sin(o)*5.1,-o+Math.PI/2,4)}N(new Ye(2.6,.9,24,64),M.white,0,3,0,n,Math.PI/2,0,0);for(let r=0;r<16;r++){let o=r/16*Math.PI*2,a=N(new Ye(1,.12,8,24),M.dark,Math.cos(o)*2.6,3,Math.sin(o)*2.6,n);a.rotation.y=-o}let t=N(new Ge(1.2,32,24),M.cyan,0,3,0,n);t.castShadow=!1;let i=N(new Ye(3.9,.12,10,64),M.chrome,0,3,0,n),s=N(new Ye(3.9,.12,10,64),M.chrome,0,3,0,n);s.rotation.x=Math.PI/2;for(let r=0;r<6;r++){let o=r*Math.PI/3;qt(ue(Math.cos(o)*4.6,1.5,Math.sin(o)*4.6),ue(Math.cos(o)*3.2,3,Math.sin(o)*3.2),.18,M.metal,n)}for(let r=0;r<4;r++){let o=r*Math.PI/2+Math.PI/4;N(Un([[0,0],[.7,0],[.75,.1],[.75,4.2],[.6,4.5],[0,4.5]],24),M.white,Math.cos(o)*4.4,1.5,Math.sin(o)*4.4,n)}e.core=t,e.r1=i,e.r2=s,e.light=Pe(3401471,7,n,0,3,0)},beacon(n,e){N(Un([[0,0],[7.4,0],[7.5,.1],[7.2,.5],[0,.5]],8),M.found,0,-.2,0,n,0,Math.PI/8,0).castShadow=!1,N(st(7.6,7.9,4,8),M.found,0,-2.3,0,n,0,Math.PI/8,0).castShadow=!1,N(new vn(4.2,4.8,64),M.orange,0,.32,0,n,-Math.PI/2,0,0),N(new vn(5.6,5.75,64),M.white,0,.32,0,n,-Math.PI/2,0,0);let t=document.createElement("canvas");t.width=t.height=128;let i=t.getContext("2d");i.fillStyle="#e8e4dc",i.font="bold 110px sans-serif",i.textAlign="center",i.fillText("H",64,104);let s=new ln(t);s.colorSpace=_t,N(new Wn(3,3),new de({map:s,transparent:!0,roughness:.8}),0,.33,0,n,-Math.PI/2,0,0),e.lights=[];for(let a=0;a<8;a++){let l=a*Math.PI/4+Math.PI/8;N(st(.15,.2,.15,12),M.dark,Math.cos(l)*6.6,.38,Math.sin(l)*6.6,n),e.lights.push(Pe(16755251,1,n,Math.cos(l)*6.6,.55,Math.sin(l)*6.6))}let r=new we;r.position.set(8.6,0,0),n.add(r);for(let[a,l]of[[-.35,-.35],[.35,-.35],[.35,.35],[-.35,.35]])qt(ue(a*1.6,0,l*1.6),ue(a*.5,8.5,l*.5),.05,M.metal,r);for(let a=1;a<8.5;a+=1.1){let l=1.6-a/8.5*1.1;N(new Ye(l*.5,.025,4,4),M.metal,0,a,0,r,Math.PI/2,0,Math.PI/4)}N(new Ge(.9,24,8,0,Math.PI*2,0,Math.PI/3),M.white,0,8.4,.4,r).rotation.set(-1,0,0),e.tip=Pe(16724016,1.6,r,0,9.3,0),N(ke(1.2,1,.8,.08),M.dark,-9.6,.5,4.5,n),Ko(n,-9.6,.6,4.92)}});Object.assign(Hi,{lab(n,e){Xi(n,4),N(st(4.1,4.2,.4,40),M.panel,0,.2,0,n),N(st(3.2,3.4,2.8,40),M.white,0,1.8,0,n),N(st(3.25,3.25,.2,40),M.orange,0,3.1,0,n);for(let i=0;i<10;i++){let s=i/10*Math.PI*2,r=new we;r.position.set(Math.cos(s)*3.32,2,Math.sin(s)*3.32),r.rotation.y=-s+Math.PI/2,n.add(r),N(ke(.9,.7,.1,.06),M.metal,0,0,0,r),N(ke(.78,.58,.08,.05),M.window,0,0,.04,r)}N(new Ge(2.2,40,16,0,Math.PI*2,0,Math.PI/2),M.white,0,3.2,0,n),N(ke(.9,2.4,.2,.05),M.dark,0,4.4,1.5,n,-.9,0,0);let t=N(st(.35,.45,2.6,20),M.metal,0,5.2,.9,n,-.7,0,0);N(new Ye(.37,.05,8,20),M.cyan,0,6.15,1.75,n,-.7+Math.PI/2,0,0),e.scope=t,N(st(.05,.07,3,8),M.metal,-2.4,4.5,-1.2,n),e.tip=Pe(8382207,1,n,-2.4,6.1,-1.2),N(ke(1.5,1,1,.08),M.dark,3.4,.7,-2,n),Ms(n,1,.6,3.4,.7,-1.48,0,5),N(ke(1.3,2.1,.15,.1),M.metal,0,1.25,3.38,n),N(ke(1.1,1.9,.1,.08),M.dark,0,1.2,3.44,n),e.light=Pe(8382207,2,n,0,6.3,1.9)},trade(n,e){Xi(n,4.8,!0),N(ke(9.6,.4,9.6,.1),M.found,0,.2,0,n),ar(n,9.6,.15,0,.42,4.82);let t=[M.orange,M.white,M.dark,M.red2],i=0;for(let[o,a,l]of[[-3.2,-2.6,2],[-3.2,-.2,1],[-3.2,2.2,2],[.2,-2.6,1],[.2,2.6,1]])for(let c=0;c<l;c++){let h=N(ke(2.2,1.1,2,.05),t[i++%t.length],o,.95+c*1.12,a,n);for(let u=0;u<5;u++)N(new We(.04,.9,2.02),M.metal,o-.8+u*.4,.95+c*1.12,a,n)}let s=new we;s.position.set(3.2,.4,0),n.add(s);for(let[o,a]of[[-.4,-.4],[.4,-.4],[.4,.4],[-.4,.4]])qt(ue(o,0,a),ue(o*.6,6,a*.6),.06,M.orange,s);for(let o=1;o<6;o+=1.2)N(new Ye(.42-o*.03,.03,4,4),M.orange,0,o,0,s,Math.PI/2,0,Math.PI/4);let r=new we;r.position.y=6.1,s.add(r),N(ke(.6,.5,.6,.06),M.dark,0,0,0,r),N(ke(.25,.25,6,.04),M.orange,0,.2,-2,r),N(ke(.6,.6,.8,.05),M.dark,0,.1,1.2,r),qt(ue(0,.1,-4.6),ue(0,-3,-4.6),.015,M.metal,r),N(ke(.5,.2,.5,.03),M.metal,0,-3.1,-4.6,r),e.jib=r,N(st(.05,.05,2.4,6),M.metal,-4.2,1.6,4.2,n),e.tip=Pe(6750105,1,n,-4.2,2.9,4.2)}});function Hg(){let n=new we,e=Jo(5);N(Un([[0,1],[2.6,1.05],[3.25,1.25],[3.35,1.45],[3.2,1.6],[0,1.6]],48),M.ablative,0,0,0,n),N(Un([[3.05,1.6],[3,2.2],[2.75,3.4],[2.35,4.6],[1.95,5.6],[1.75,6],[0,6]],48),M.white,0,0,0,n),N(Un([[3.02,2.05],[3.04,2.35],[2.98,2.4]],48),M.orange,0,0,0,n),N(Un([[2,5.45],[2.02,5.6],[1.95,5.62]],48),M.orange,0,0,0,n),N(st(1.6,1.75,.35,40),M.panel,0,6.15,0,n),N(new Ye(1.25,.12,10,40),M.metal,0,6.38,0,n,Math.PI/2,0,0),N(new Ge(1.15,32,12,0,Math.PI*2,0,Math.PI/2),M.white,0,6.35,0,n).scale.y=.6,Nf(n,1.45,6.34,16,.04);let t=ll(n,0,4.55,2.33,.36,0,-.33);ll(n,-.95,4.35,2.2,.26,-.42,-.33),ll(n,.95,4.35,2.2,.26,.42,-.33);let i=new we;i.position.set(2.82,2.75,0),i.rotation.set(0,Math.PI/2,.22),n.add(i),N(ke(1.25,1.75,.14,.12),M.metal,0,0,0,i),N(ke(1.05,1.55,.1,.1),M.panel,0,0,.06,i),N(ke(.1,.45,.08,.03),M.chrome,.38,-.05,.13,i),ll(i,0,.45,.13,.15),ar(i,1.25,.1,0,-.92,.08);for(let h=0;h<6;h++)N(ke(.9,.06,.28,.02),M.metal,3.3+h*.2,1.75-h*.29,0,n);qt(ue(3.2,1.9,-.48),ue(4.4,.1,-.48),.035,M.metal,n),qt(ue(3.2,1.9,.48),ue(4.4,.1,.48),.035,M.metal,n);for(let h=0;h<4;h++){let u=h*Math.PI/2+Math.PI/4,f=new we;f.position.set(Math.cos(u)*2.15,5,Math.sin(u)*2.15),f.rotation.y=-u,n.add(f),N(ke(.36,.36,.36,.05),M.dark,0,0,0,f);for(let[p,g]of[[.25,0],[-.25,0],[0,.25],[0,-.25]]){let y=N(new zt(.07,.16,10,1,!0),M.metal,0,g,p,f);y.rotation.x=g?g>0?0:Math.PI:p>0?Math.PI/2:-Math.PI/2}}for(let h=0;h<4;h++){let u=h*Math.PI/2,f=N(Un([[.18,1.05],[.22,.85],[.42,.45],[.55,.2],[.5,.2],[.38,.45],[.15,.85]],24),M.dark,Math.cos(u)*1.2,0,Math.sin(u)*1.2,n);f.material=M.metal}N(st(.7,.9,.5,24),M.dark,0,.8,0,n);for(let h=0;h<4;h++){let u=h*Math.PI/2+Math.PI/4,f=Math.cos(u),p=Math.sin(u),g=ue(f*2.7,2.1,p*2.7),y=ue(f*3.55,1,p*3.55),x=ue(f*4.1,.18,p*4.1);qt(g,y,.11,M.white,n),N(new Ge(.15,12,8),M.metal,y.x,y.y,y.z,n),qt(y,x,.075,M.chrome,n),qt(y.clone().lerp(x,.3),y.clone().lerp(x,.3).add(ue(0,.01,0)),.1,M.metal,n),qt(ue(f*2.4,1.3,p*2.4),y.clone().lerp(x,.25),.05,M.metal,n),qt(ue(f*2.6-p*.6,1.7,p*2.6+f*.6),y,.035,M.metal,n),qt(ue(f*2.6+p*.6,1.7,p*2.6-f*.6),y,.035,M.metal,n),N(Un([[0,0],[.55,0],[.6,.06],[.35,.2],[.1,.22],[0,.22]],24),M.metal,x.x,0,x.z,n)}N(st(.04,.05,1.8,8),M.metal,.6,7.1,-.4,n),N(new Ge(.5,24,8,0,Math.PI*2,0,Math.PI/3.2),M.white,-.7,6.95,.3,n).rotation.set(-.8,.6,0),N(st(.04,.04,.8,6),M.metal,-.7,6.55,.3,n),vs([ue(-1.6,5.7,-1.4),ue(-2.3,4.3,-1.9),ue(-2.9,2.6,-2.1),ue(-3.05,1.7,-2.2)],.05,M.dark,n),vs([ue(1.6,5.7,-1.4),ue(2.3,4.3,-1.9),ue(2.9,2.6,-2.05)],.04,M.orange,n),nh(n,e,14,-1.2,1.2,2.4,3.6,-2.95,Math.PI);let r=document.createElement("canvas");r.width=512,r.height=96;let o=r.getContext("2d");o.clearRect(0,0,512,96),o.fillStyle="#d4581c",o.font="bold 54px sans-serif",o.textAlign="center",o.fillText("\u65B9\u821F\u4E00\u53F7 \xB7 ARK-1",256,66);let a=new ln(r);a.colorSpace=_t;let l=new le(new Wn(3.4,.64),new de({map:a,transparent:!0,roughness:.6}));l.position.set(0,3.2,-2.87),l.rotation.set(.32,Math.PI,0),n.add(l);let c=Pe(6750105,1.4,n,.6,8.05,-.4);return{group:n,beacon:c,window:t}}var th=new de({color:2757906,roughness:.28,metalness:.7,flatShading:!0}),Uf=new de({color:2757906,roughness:.35,metalness:.7});function Fg(n,e,t){let i=new we,s=new we;i.add(s);let r=new de({color:2230272,emissive:e.emissive,emissiveIntensity:1.6});N(new Xn(.75,1),th,0,1,.2,s).scale.set(1.05,.62,1),N(new Xn(.85,1),th,0,1.1,-.85,s).scale.set(.95,.7,1.25),N(new Xn(.42,1),th,0,.95,1,s).scale.set(1.1,.7,1);let c=Jo(Math.floor(Math.random()*1e6)+1);for(let u=0;u<9;u++){let f=N(new Ar(.22+c()*.15,0),e,(c()-.5)*.9,1.45+c()*.25,-1.1+c()*1.4,s,(c()-.5)*.8,c()*3,(c()-.5)*.8);f.scale.y=1.8+c()*1.4}for(let[u,f,p]of[[-.17,1.03,.05],[.17,1.03,.05],[-.1,1.12,.035],[.1,1.12,.035]])N(new Ge(p,10,8),t,u,f,1.36,s);for(let u of[-1,1])N(new zt(.06,.45,6),th,u*.16,.78,1.42,s).rotation.set(Math.PI/2+.3,0,u*.35);let h=[];for(let u=0;u<6;u++){let f=u<3?-1:1,p=u%3-1,g=new we;g.position.set(f*.62,1,p*.55+.1),s.add(g);let y=ue(0,0,0),x=ue(f*.75,.45,p*.15),m=ue(f*1.35,.1,p*.25),_=ue(f*1.55,-.98,p*.35);qt(y,x,.08,Uf,g,14),qt(x,m,.065,Uf,g,14),qt(m,_,.045,Uf,g,14);for(let E of[x,m])N(new Ge(.09,8,6),r,E.x,E.y,E.z,g);N(new zt(.05,.18,6),e,_.x,_.y-.05,_.z,g,Math.PI,0,0),g.userData.phase=u%2*Math.PI+p*.5,g.userData.side=f,h.push(g)}return i.scale.setScalar(n),{group:i,legs:h,inner:s}}var Qt=n=>()=>Cg(n)>=1,lr=(n,e)=>({check:()=>d.stats.mined[n]>=e,prog:()=>`${Math.min(d.stats.mined[n],e)}/${e}`}),Br=n=>({text:`\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C${Dn[n].name}\u300D`,check:()=>d.cityLevel>=n,prog:()=>`\u4EBA\u53E3 ${d.colony.pop}/${Dn[n].pop}`}),sh=n=>({text:`\u4EBA\u53E3\u8FBE\u5230 ${n}`,check:()=>d.colony.pop>=n,prog:()=>`${d.colony.pop}/${n}`}),Og={text:"\u53D1\u5C04\u6B96\u6C11\u8230",check:()=>!!d.launched,prog:()=>"\u9760\u8FD1\u53D1\u5C04\u53F0\u6309 E"},sb=[{title:"\u7B2C\u4E00\u7AE0 \xB7 \u7740\u9646",sub:"\u6D3B\u4E0B\u53BB",goals:[{text:"\u91C7\u96C6\u94C1\u77FF",...lr("iron",10)},{text:"\u91C7\u96C6\u7845\u6676",...lr("silicon",6)},{text:"\u91C7\u96C6\u6C34\u51B0",...lr("ice",6)},{text:"\u5EFA\u9020\u592A\u9633\u80FD\u9635\u5217",check:Qt("solar")},{text:"\u5EFA\u9020\u5236\u6C27\u7AD9",check:Qt("oxygen")}],radio:[["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u7740\u9646\u6210\u529F\u3002\u5916\u90E8\u6C14\u538B 0.6 \u5343\u5E15\uFF0C\u6C14\u6E29\u96F6\u4E0B 63 \u6444\u6C0F\u5EA6\u3002\u6B22\u8FCE\u6765\u5230\u706B\u661F\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u65B9\u821F\u4E00\u53F7\uFF0C\u8FD9\u91CC\u662F\u5730\u7403\u8054\u5408\u6307\u6325\u4E2D\u5FC3\u3002\u542C\u5230\u8BF7\u56DE\u7B54\u2026\u2026\u5F88\u597D\u3002\u4F60\u662F\u7B2C\u4E00\u4E2A\u8E0F\u4E0A\u8FD9\u7247\u571F\u5730\u7684\u4EBA\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u7740\u9646\u8231\u53EA\u80FD\u5728\u5B83\u5468\u56F4\u5F88\u5C0F\u7684\u8303\u56F4\u5185\u7ED9\u4F60\u8865\u6C27\u3002\u6309\u4F4F\u5DE6\u952E\u7528\u91C7\u77FF\u6FC0\u5149\u91C7\u96C6\u94C1\u77FF\u3001\u7845\u6676\u548C\u6C34\u51B0\uFF0C\u7136\u540E\u6309 B \u5EFA\u8D77\u7B2C\u4E00\u5EA7\u5236\u6C27\u7AD9\u3002"]]},{title:"\u7B2C\u4E8C\u7AE0 \xB7 \u7B2C\u4E00\u4E2A\u5BB6",sub:"\u4E3A\u540E\u6765\u7684\u4EBA\u70B9\u4E00\u76CF\u706F",goals:[{text:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",check:Qt("habitat")},{text:"\u5EFA\u9020\u6E29\u5BA4",check:Qt("greenhouse")},{text:"\u5EFA\u9020\u6C34\u51B0\u63D0\u53D6\u5668",check:Qt("extractor")},{text:"\u5EFA\u9020\u7740\u9646\u573A",check:Qt("beacon")},{text:"\u8FCE\u63A5\u7B2C\u4E00\u6279\u79FB\u6C11",check:()=>d.stats.arrived>=1,prog:()=>d.colony.support>0?"\u7B49\u5F85\u98DE\u8239":"\u9700\u8981\u4F4F\u623F/\u6C27/\u6C34/\u98DF\u7269/\u7535"}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5236\u6C27\u7AD9\u8FD0\u8F6C\u6B63\u5E38\uFF01\u5B83\u5468\u56F4 14 \u7C73\u90FD\u80FD\u7ED9\u5B87\u822A\u670D\u8865\u6C27\uFF0C\u4F60\u53EF\u4EE5\u8D70\u5F97\u66F4\u8FDC\u4E86\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5730\u7403\u4E0A\u6709\u5341\u4E07\u4EBA\u62A5\u540D\u4E86\u79FB\u6C11\u8BA1\u5212\u3002\u5EFA\u597D\u7A79\u9876\u3001\u6E29\u5BA4\u3001\u6C34\u6E90\u548C\u7740\u9646\u573A\u2014\u2014\u7ED9\u4ED6\u4EEC\u4E00\u4E2A\u53EF\u4EE5\u56DE\u7684\u5BB6\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u63D0\u793A\uFF1A\u592A\u9633\u80FD\u5728\u591C\u95F4\u53EA\u5269\u56DB\u6210\u529F\u7387\u3002\u591A\u5EFA\u51E0\u5EA7\uFF0C\u6B96\u6C11\u5730\u624D\u4E0D\u4F1A\u5728\u591C\u91CC\u65AD\u7535\u3002"]]},{title:"\u7B2C\u4E09\u7AE0 \xB7 \u957F\u591C",sub:"\u5B88\u62A4\u6211\u4EEC\u7684\u4EBA",goals:[{text:"\u5EFA\u9020\u5236\u9020\u5DE5\u574A",check:Qt("fabricator")},{text:"\u5236\u9020\u7B49\u79BB\u5B50\u6B65\u67AA",check:()=>!!d.upgrades.rifle},{text:"\u5EFA\u9020\u9632\u5FA1\u70AE\u5854",check:Qt("turret")},{text:"\u51FB\u9000\u9508\u8680\u86DB",check:()=>d.stats.kills>=6,prog:()=>`${Math.min(d.stats.kills,6)}/6`}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u2026\u2026\u7B2C\u4E00\u6279\u79FB\u6C11\u5B89\u5168\u7740\u9646\u4E86\u3002\u6211\u8FD9\u8FB9\u7684\u63A7\u5236\u5BA4\u91CC\uFF0C\u6240\u6709\u4EBA\u90FD\u7AD9\u8D77\u6765\u9F13\u638C\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u5730\u8D28\u96F7\u8FBE\u5728\u591C\u95F4\u63A2\u6D4B\u5230\u5927\u91CF\u5730\u4E0B\u79FB\u52A8\u4FE1\u53F7\u3002\u5B83\u4EEC\u4F3C\u4E4E\u88AB\u6B96\u6C11\u5730\u7684\u70ED\u91CF\u5438\u5F15\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5EFA\u4E00\u5EA7\u5236\u9020\u5DE5\u574A\uFF0C\u9020\u6B66\u5668\uFF0C\u5EFA\u70AE\u5854\u3002\u5B88\u4F4F\u5927\u5BB6\u3002"]]},{title:"\u7B2C\u56DB\u7AE0 \xB7 \u624E\u6839",sub:"\u8BA9\u706F\u706B\u5F7B\u591C\u4E0D\u7184",goals:[{text:"\u6B96\u6C11\u5730\u4EBA\u53E3\u8FBE\u5230 12",check:()=>d.colony.pop>=12,prog:()=>`${d.colony.pop}/12`},{text:"\u91C7\u96C6\u949B\u77FF",...lr("titanium",12)},{text:"\u5EFA\u9020\u805A\u53D8\u53CD\u5E94\u5806",check:Qt("reactor")}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u4F60\u4EEC\u6491\u8FC7\u4E86\u957F\u591C\u3002\u73B0\u5728\uFF0C\u662F\u65F6\u5019\u8BA9\u6B96\u6C11\u5730\u771F\u6B63\u624E\u6839\u4E86\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5728\u8FDC\u65B9\u7684\u7D2B\u8272\u6676\u4F53\u77FF\u8109\u4E2D\u68C0\u6D4B\u5230\u9AD8\u7EAF\u5EA6\u949B\u3002\u6CE8\u610F\uFF1A\u90A3\u91CC\u6709\u4F53\u578B\u66F4\u5927\u7684\u9508\u8680\u86DB\u5B88\u536B\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u63D0\u793A\uFF1A\u5728\u5236\u9020\u5DE5\u574A\u53EF\u4EE5\u9020\u55B7\u6C14\u80CC\u5305\u548C\u5927\u5BB9\u91CF\u6C27\u6C14\u7F50\uFF0C\u9002\u5408\u957F\u9014\u52D8\u63A2\u3002"]]},{title:"\u7B2C\u4E94\u7AE0 \xB7 \u65B0\u5BB6\u56ED",sub:"\u6B64\u5FC3\u5B89\u5904\u662F\u543E\u4E61",goals:[{text:"\u5EFA\u9020\u5927\u6C14\u6539\u9020\u5854",check:Qt("terraformer")},{text:"\u6B96\u6C11\u5730\u4EBA\u53E3\u8FBE\u5230 20",check:()=>d.colony.pop>=20,prog:()=>`${d.colony.pop}/20`},{text:"\u5B8C\u6210\u5927\u6C14\u6539\u9020",check:()=>d.terraform>=1&&d.ended&&!d.endingShown,prog:()=>`${Math.floor(d.terraform*100)}%`}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u805A\u53D8\u53CD\u5E94\u5806\u70B9\u706B\u6210\u529F\u3002\u6B96\u6C11\u5730\u7B2C\u4E00\u6B21\u5728\u591C\u91CC\u4E5F\u706F\u706B\u901A\u660E\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u6700\u540E\u4E00\u6B65\u4E86\u3002\u5927\u6C14\u6539\u9020\u5854\u2014\u2014\u5B83\u8981\u51E0\u5341\u5E74\u624D\u80FD\u5F7B\u5E95\u6539\u53D8\u706B\u661F\u3002\u4F46\u7B2C\u4E00\u573A\u96E8\uFF0C\u4E5F\u8BB8\u5C31\u5728\u660E\u5929\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u63D0\u793A\uFF1A\u57CE\u5E02\u7B49\u7EA7\u63D0\u5347\u540E\u9886\u5730\u4F1A\u6269\u5927\uFF0C\u5E76\u89E3\u9501\u516C\u5BD3\u5854\u3001\u5782\u76F4\u519C\u573A\u3001\u751F\u6001\u4E2D\u67A2\u3002"]]},{title:"\u7B2C\u516D\u7AE0 \xB7 \u661F\u8FB0\u5927\u6D77",sub:"\u4E0B\u4E00\u9897\u661F\u7403",goals:[Br(5),{text:"\u5EFA\u9020\u661F\u9645\u53D1\u5C04\u53F0",check:Qt("launch")},Og],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u706B\u661F\u5DF2\u7ECF\u662F\u5BB6\u4E86\u3002\u4F46\u4EBA\u7C7B\u7684\u6545\u4E8B\uFF0C\u4ECE\u6765\u4E0D\u6B62\u4E8E\u4E00\u4E2A\u5BB6\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u6728\u536B\u4E8C\xB7\u6B27\u7F57\u5DF4\uFF1A\u51B0\u58F3\u4E4B\u4E0B\u63A2\u6D4B\u5230\u6DB2\u6001\u6D77\u6D0B\u3002\u628A\u706B\u661F\u53D1\u5C55\u6210\u300C\u661F\u6E2F\u300D\uFF0C\u5C31\u80FD\u5EFA\u9020\u661F\u9645\u53D1\u5C04\u53F0\u3002"]]}],rb=[{title:"\u7B2C\u4E00\u7AE0 \xB7 \u51B0\u539F",sub:"\u5728\u6728\u661F\u7684\u6CE8\u89C6\u4E0B",goals:[{text:"\u91C7\u96C6\u6C34\u51B0",...lr("ice",15)},{text:"\u91C7\u96C6\u94C1\u77FF",...lr("iron",10)},{text:"\u5EFA\u9020\u5236\u6C27\u7AD9",check:Qt("oxygen")},{text:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",check:Qt("habitat")},{text:"\u5EFA\u9020\u7740\u9646\u573A",check:Qt("beacon")}],radio:[["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u7740\u9646\u6210\u529F\u3002\u8868\u9762\u6E29\u5EA6\u96F6\u4E0B 160 \u6444\u6C0F\u5EA6\u3002\u91CD\u529B\u53EA\u6709\u5730\u7403\u7684\u4E03\u5206\u4E4B\u4E00\u3002"],["\u706B\u661F\u6B96\u6C11\u5730 \xB7 \u6797\u6653","\u4F60\u5230\u4E86\u5417\uFF1F\u6211\u4EEC\u5728\u706B\u661F\u4E0A\u770B\u5F97\u89C1\u6728\u661F\u7684\u5149\u70B9\u3002\u66FF\u6211\u4EEC\u770B\u4E00\u773C\u5B83\u7684\u5927\u7EA2\u6591\u5427\u3002"],["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u6CE8\u610F\uFF1A\u8FD9\u91CC\u79BB\u592A\u9633\u592A\u8FDC\uFF0C\u592A\u9633\u80FD\u6548\u7387\u53EA\u6709\u706B\u661F\u7684\u4E00\u534A\u3002\u6240\u6709\u6280\u672F\u5DF2\u4ECE\u706B\u661F\u540C\u6B65\u3002"]]},{title:"\u7B2C\u4E8C\u7AE0 \xB7 \u51B0\u4E0B\u4E4B\u57CE",sub:"\u6D77\u6D0B\u4E4B\u4E0A\u7684\u706F\u706B",goals:[sh(8),Br(2),{text:"\u5EFA\u9020\u805A\u53D8\u53CD\u5E94\u5806",check:Qt("reactor")}],radio:[["\u5468\u9752\u79BE \xB7 \u6C34\u6587\u5B66\u5BB6","\u51B0\u5C42\u4E0B\u7684\u6D77\u6D0B\u6BD4\u5730\u7403\u6240\u6709\u6D77\u6D0B\u52A0\u8D77\u6765\u8FD8\u591A\u3002\u6709\u6C34\uFF0C\u5C31\u6709\u751F\u547D\u3002"],["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u51B0\u88C2\u7F1D\u91CC\u6709\u4E1C\u897F\u5728\u79FB\u52A8\u3002\u5B83\u4EEC\u548C\u706B\u661F\u7684\u9508\u8680\u86DB\u5F88\u50CF\u2026\u2026\u4F46\u662F\u84DD\u8272\u7684\u3002"]]},{title:"\u7B2C\u4E09\u7AE0 \xB7 \u6DF1\u6E0A\u4E4B\u5149",sub:"\u57CE\u5E02\u5728\u51B0\u539F\u4E0A\u751F\u957F",goals:[Br(3),sh(24),{text:"\u5EFA\u9020\u751F\u6001\u4E2D\u67A2",check:Qt("lifehub")}],radio:[["Elena Petrova \xB7 \u5929\u6587\u5B66\u5BB6","\u4F60\u77E5\u9053\u5417\uFF1F\u4ECE\u8FD9\u91CC\u770B\uFF0C\u592A\u9633\u53EA\u662F\u4E00\u9897\u7279\u522B\u4EAE\u7684\u661F\u661F\u3002"]]},{title:"\u7B2C\u56DB\u7AE0 \xB7 \u4E0B\u4E00\u7AD9",sub:"\u4E00\u5343\u4E8C\u767E\u5149\u5E74",goals:[Br(4),{text:"\u5EFA\u9020\u661F\u9645\u53D1\u5C04\u53F0",check:Qt("launch")},Og],radio:[["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u5F00\u666E\u52D2-442b\uFF1A\u4F4D\u4E8E\u5B9C\u5C45\u5E26\u7684\u7C7B\u5730\u884C\u661F\uFF0C\u8DDD\u79BB\u4E00\u5343\u4E8C\u767E\u5149\u5E74\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u8FD9\u5C06\u662F\u4EBA\u7C7B\u7B2C\u4E00\u6B21\u79BB\u5F00\u592A\u9633\u7CFB\u3002\u6211\u8001\u4E86\uFF0C\u7B49\u4E0D\u5230\u4F60\u4EEC\u62B5\u8FBE\u7684\u90A3\u5929\u3002\u4F46\u6211\u4F1A\u4E00\u76F4\u770B\u7740\u661F\u7A7A\u3002"]]}],ob=[{title:"\u7B2C\u4E00\u7AE0 \xB7 \u53CC\u65E5\u4E4B\u4E0B",sub:"\u53E6\u4E00\u9897\u6052\u661F\u7684\u6668\u5149",goals:[{text:"\u91C7\u96C6\u94C1\u77FF",...lr("iron",15)},{text:"\u91C7\u96C6\u7845\u6676",...lr("silicon",10)},{text:"\u5EFA\u9020\u5236\u6C27\u7AD9",check:Qt("oxygen")},{text:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",check:Qt("habitat")},{text:"\u5EFA\u9020\u7740\u9646\u573A",check:Qt("beacon")}],radio:[["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u51B7\u51BB\u4F11\u7720\u7ED3\u675F\u3002\u5F53\u524D\u65E5\u671F\uFF1A\u516C\u5143 2401 \u5E74\u3002\u6B22\u8FCE\u6765\u5230\u5F00\u666E\u52D2-442b\u3002"],["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u5927\u6C14\u542B\u6C27 14%\uFF0C\u8FD8\u4E0D\u591F\u547C\u5438\uFF0C\u4F46\u5DF2\u7ECF\u975E\u5E38\u63A5\u8FD1\u4E86\u3002\u8FD9\u91CC\u7684\u91CD\u529B\u6BD4\u5730\u7403\u7565\u5927\u3002"]]},{title:"\u7B2C\u4E8C\u7AE0 \xB7 \u5F02\u661F\u68EE\u6797",sub:"\u4F1A\u53D1\u5149\u7684\u6811",goals:[sh(10),Br(2),{text:"\u5EFA\u9020\u805A\u53D8\u53CD\u5E94\u5806",check:Qt("reactor")}],radio:[["Aiko Sato \u7684\u540E\u4EE3 \xB7 \u751F\u7269\u5B66\u5BB6","\u90A3\u4E9B\u4F1E\u83C7\u6811\u5728\u591C\u91CC\u4F1A\u53D1\u5149\u3002\u6211\u7684\u66FE\u66FE\u7956\u6BCD\u4E00\u5B9A\u4F1A\u559C\u6B22\u8FD9\u91CC\u3002"],["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u68EE\u6797\u4E2D\u7684\u63A0\u98DF\u8005\u4F1A\u5728\u591C\u95F4\u51FA\u6CA1\u3002"]]},{title:"\u7B2C\u4E09\u7AE0 \xB7 \u6587\u660E",sub:"\u57CE\u5E02\u8FDE\u6210\u4E86\u661F\u6CB3",goals:[Br(4),sh(36),{text:"\u5EFA\u9020\u751F\u6001\u4E2D\u67A2",check:Qt("lifehub")}],radio:[["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u6765\u81EA\u706B\u661F\u548C\u6B27\u7F57\u5DF4\u7684\u4FE1\u53F7\u5DF2\u7ECF\u62B5\u8FBE\u2014\u2014\u5B83\u4EEC\u5728\u4E00\u5343\u4E8C\u767E\u5E74\u524D\u53D1\u51FA\u3002\u4E24\u5EA7\u57CE\u5E02\u90FD\u8FD8\u4EAE\u7740\u3002"]]},{title:"\u7EC8\u7AE0 \xB7 \u661F\u9645\u6587\u660E",sub:"\u4E09\u9897\u661F\u7403\uFF0C\u4E00\u4E2A\u4EBA\u7C7B",goals:[Br(5),{text:"\u5EFA\u9020\u6587\u660E\u7EAA\u5FF5\u7891",check:Qt("monument")}],radio:[["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u5EFA\u4E00\u5EA7\u7EAA\u5FF5\u7891\u5427\u3002\u732E\u7ED9\u7B2C\u4E00\u4E2A\u8E0F\u4E0A\u706B\u661F\u7684\u4EBA\u2014\u2014\u4E5F\u5C31\u662F\u4F60\u3002"]]}],ai=tt==="europa"?rb:tt==="kepler"?ob:sb,zg=tt==="mars"?2:1,Qo={rifle:{name:"\u7B49\u79BB\u5B50\u6B65\u67AA",icon:"rifle",cost:{iron:18,silicon:12},desc:"\u6309 2 \u5207\u6362\u3002\u6D88\u8017\u80FD\u91CF\u53D1\u5C04\u7B49\u79BB\u5B50\u5F39\u3002"},tank:{name:"\u5927\u5BB9\u91CF\u6C27\u6C14\u7F50",icon:"tank",cost:{iron:12,ice:10},desc:"\u5B87\u822A\u670D\u6C27\u6C14\u4E0A\u9650 100 \u2192 180\u3002"},rover:{name:"\u52A0\u538B\u6F2B\u6E38\u8F66",icon:"rover",cost:{iron:35,silicon:20,ice:5},desc:"\u5728\u5DE5\u574A\u65C1\u51FA\u5382\u3002\u6309 E \u4E0A\u8F66\uFF0CShift \u52A0\u901F\u3002\u8F66\u8231\u5185\u81EA\u52A8\u8865\u6C27\uFF0C\u8FD8\u80FD\u649E\u98DE\u9508\u8680\u86DB\u3002"},scanner:{name:"\u5730\u8D28\u626B\u63CF\u4EEA",icon:"scanner",cost:{iron:8,silicon:10},desc:"\u5C0F\u5730\u56FE\u8303\u56F4\u6269\u5927\uFF0C\u7F57\u76D8\u6807\u51FA\u6700\u8FD1\u7684\u949B\u77FF\u3002"},jetpack:{name:"\u55B7\u6C14\u80CC\u5305",icon:"jet",cost:{iron:20,silicon:15,titanium:4},desc:"\u7A7A\u4E2D\u6309\u4F4F\u7A7A\u683C\u98DE\u884C\uFF0C\u6D88\u8017\u80FD\u91CF\u3002"},overclock:{name:"\u6FC0\u5149\u8D85\u9891",icon:"bolt2",cost:{silicon:20,titanium:3},desc:"\u91C7\u77FF\u901F\u5EA6 \xD72\uFF0C\u6FC0\u5149\u4F24\u5BB3\u63D0\u5347\u3002"},armor:{name:"\u590D\u5408\u88C5\u7532",icon:"armor",cost:{iron:30,titanium:6},desc:"\u751F\u547D\u4E0A\u9650 150\uFF0C\u53D7\u5230\u4F24\u5BB3 -40%\u3002"},rifle2:{name:"\u805A\u7126\u7EBF\u5708",icon:"focus",cost:{silicon:18,titanium:6},need:"rifle",desc:"\u7B49\u79BB\u5B50\u6B65\u67AA\u4F24\u5BB3 +60%\u3002"}},Ff=[],jo=null,kf=0;function Ft(n,e){Ff.push([n,e])}function Bg(){return jo}var Hf=0,zr=200,_s="calm",ih=0,Of=!1;function Gg(n){if(jo&&(kf-=n,kf<=0&&(jo=null)),!jo&&Ff.length&&(jo=Ff.shift(),kf=3.5+jo[1].length*.11,J.play("radio")),Hf-=n,Hf<=0&&d.chapter<ai.length&&!Fn()){Hf=.5;let i=ai[d.chapter];d.goalDone=d.goalDone||{};let s=!0;i.goals.forEach((r,o)=>{let a=d.chapter+":"+o;r.check()&&!d.goalDone[a]&&(d.goalDone[a]=!0,J.play("objective"),d.events.emit("toast",`\u2713 ${r.text}`)),d.goalDone[a]||(s=!1)}),s&&d.chapter<ai.length-1&&cl(d.chapter+1)}d.buildings.find(i=>i.type==="terraformer"&&i.powered)&&d.terraform<1&&(d.terraform=Math.min(1,d.terraform+n/300*(kt("atmo")?2:1)),d.terraform>=1&&!Of&&(Of=!0,d.events.emit("ending"))),d.raining=(d.terraform>=1||tt==="kepler")&&Math.sin(d.time.t*Math.PI*4+d.time.day*1.7)>.45,he.storms&&d.time.day>=2&&d.terraform<.7&&(zr-=n,_s==="calm"&&zr<=0&&d.time.night<.5?(_s="warn",zr=25,Ft("\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u6C99\u5C18\u66B4\u5C06\u5728 25 \u79D2\u540E\u62B5\u8FBE\u3002\u80FD\u89C1\u5EA6\u4F1A\u6025\u5267\u4E0B\u964D\uFF0C\u6C27\u6C14\u6D88\u8017\u52A0\u5FEB\u3002\u9760\u8FD1\u751F\u547D\u7EF4\u6301\u8BBE\u65BD\u3002")):_s==="warn"&&zr<=0?(_s="storm",ih=70+Math.random()*40):_s==="storm"&&(ih-=n,ih<=0&&(_s="calm",zr=360+Math.random()*300,Ft("\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u6C99\u5C18\u66B4\u5DF2\u8FC7\u5883\u3002"))));let t=_s==="storm"?1:0;d.storm+=(t-d.storm)*Math.min(1,n*.25),d.storm<.001&&(d.storm=0)}function cl(n,e=!1){d.chapter=n;let t=ai[n];e||(J.play("chapter"),d.events.emit("chapter",t),t.radio.forEach(i=>Ft(i[0],i[1])))}function Vg(){return{phase:_s,t:zr,left:ih}}function Wg(n){n&&(_s=n.phase==="storm"?"calm":n.phase,zr=n.t??200)}function $g(n){Of=n}var oh=[],ab={player:6743807,turret:16756800};function ah(n,e,t,i){let s=Pe(ab[i],i==="player"?1.1:.9,d.scene);s.position.copy(n),oh.push({pos:n.clone(),vel:e.clone().multiplyScalar(i==="player"?110:80),life:1.4,dmg:t,owner:i,s})}function lb(n,e=0){for(let t of d.enemies){if(t.dead)continue;let i=1.3*t.scale+e,s=n.x-t.pos.x,r=n.y-(t.pos.y+1*t.scale),o=n.z-t.pos.z;if(s*s+r*r+o*o<i*i)return t}return null}function Yg(n){for(let e=oh.length-1;e>=0;e--){let t=oh[e];t.life-=n;let i=t.life<=0,s=3;for(let r=0;r<s&&!i;r++){t.pos.addScaledVector(t.vel,n/s);let o=lb(t.pos);o?(hl(o,t.dmg,t.owner),Me.spark(t.pos,[.5,.9,1],10,6),i=!0):t.pos.y<ve(t.pos.x,t.pos.z)&&(Me.spark(t.pos,[1,.7,.4],6,4),Me.dustPuff(t.pos,3,.5),i=!0)}t.s.position.copy(t.pos),Math.random()<.8&&Me.trail(t.pos,t.owner==="player"?[.3,.8,1]:[1,.6,.2],.6),i&&(d.scene.remove(t.s),oh.splice(e,1))}}function zf(n,e,t=!1,i=!1){let s=i?3.4:t?1.35:.85+Math.random()*.35,r=Fg(s,lf.crystal,lf.eye),o=ve(n,e);r.group.position.set(n,o,e),d.scene.add(r.group);let a=i?1300+d.time.day*40:t?90:36+d.time.day*3,l={...r,pos:r.group.position,hp:a,maxHp:a,scale:s,guardian:t,home:t?new T(n,o,e):null,boss:i,stomp:4,awake:!t,speed:i?3.4:(t?5.2:4.4)+Math.random()*1.2,phase:Math.random()*6,atk:0,flash:0,sink:0,target:null,retarget:0};return d.enemies.push(l),l}function hl(n,e,t){n.dead||(n.hp-=e,n.flash=.12,n.awake=!0,t==="player"&&J.play("hit"),n.hp<=0&&cb(n,t))}function cb(n,e){n.dead=!0;let t=n.pos.clone();if(t.y+=1,Me.burst(t,[1,.4,.1],50,9),Me.dustPuff(t,12,2),Me.debris(t,n.legs[0].children[0].material,6,5,.45*n.scale),Me.debris(t,n.inner.children[1].material,8,6,.5*n.scale),J.play("kill"),d.scene.remove(n.group),d.stats.kills++,n.guardian&&(d.stats.guardKills=(d.stats.guardKills||0)+1),n.boss){d.stats.bossKills=(d.stats.bossKills||0)+1,d.res.titanium+=40,d.res.silicon+=40,d.events.emit("pickup",{type:"titanium",n:40,note:"\u6676\u6BCD\u6838\u5FC3"}),d.events.emit("bossDown"),Me.burst(t,[1,.5,.15],200,20),Me.ring(new T(n.pos.x,n.pos.y,n.pos.z),4,120,[1,.5,.2]),Me.debris(t,n.inner.children[1].material,30,12,1.4),J.play("rumble");return}let i=n.guardian?3:Math.random()<.5?1:0;i&&(d.res.titanium+=i,d.stats.mined.titanium+=i,d.events.emit("pickup",{type:"titanium",n:i,note:"\u6676\u4F53\u6B8B\u9AB8"}))}var Bf=0,Gr=0,Xg=!1,Gf=5,rh=-1;function Zg(){return d.enemies.find(n=>n.boss&&!n.dead)}function qg(){if(!d.buildings.length)return new T(0,0,0);let n=new T;for(let e of d.buildings)n.x+=e.x,n.z+=e.z;return n.multiplyScalar(1/d.buildings.length)}function Kg(n){let e=d.player.pos,t=d.time.night>.6,i=(Fn()?d.buildings.some(r=>r.type==="habitat")||d.time.day>=3:d.chapter>=zg)&&d.terraform<1&&ys().foe>0;if(t&&!Xg&&i){Gr=Math.round(Math.min(3+(d.nightsSurvived||0)*2+Math.floor(d.colony.pop/4),26)*ys().foe);let r=(d.nightsSurvived||0)%4===3;r&&(Gr=Math.min(Math.round(Gr*1.8),40),rh=25),d.nightsSurvived=(d.nightsSurvived||0)+1,d.events.emit(r?"tide":"nightfall",Gr)}if(Xg=t,rh>0&&t&&(rh-=n,rh<=0)){let r=qg(),o=Math.random()*Math.PI*2,a=Xt.clamp(r.x+Math.cos(o)*130,-je+180,je-180),l=Xt.clamp(r.z+Math.sin(o)*130,-je+180,je-180),c=zf(a,l,!1,!0);c.sink=-6,Me.ring(new T(a,ve(a,l),l),6,140),Me.dustPuff(new T(a,ve(a,l),l),60,12),J.play("rumble"),d.events.emit("bossSpawn")}if(t&&i&&Gr>0&&(Bf-=n,Bf<=0)){Bf=3+Math.random()*5;let r=qg(),o=Math.min(Gr,1+Math.floor(Math.random()*3)),a=Math.random()*Math.PI*2,l=110+Math.random()*50;for(let c=0;c<o;c++){let h=Xt.clamp(r.x+Math.cos(a)*l+(Math.random()-.5)*10,-je+180,je-180),u=Xt.clamp(r.z+Math.sin(a)*l+(Math.random()-.5)*10,-je+180,je-180),f=zf(h,u);f.sink=-2,Me.dustPuff(new T(h,ve(h,u),u),14,3)}Gr-=o}if(Gf-=n,Gf<=0){Gf=30;for(let r of d.nodes){if(r.type!=="titanium"||Math.hypot(r.x-e.x,r.z-e.z)<90)continue;if(!d.enemies.some(a=>a.guardian&&!a.dead&&a.home.distanceTo(r.mesh.position)<25)&&d.terraform<1&&ys().foe>0){let a=Math.random()*6.28;zf(r.x+Math.cos(a)*6,r.z+Math.sin(a)*6,!0)}}}let s=performance.now()*.001;for(let r=d.enemies.length-1;r>=0;r--){let o=d.enemies[r];if(o.dead){d.enemies.splice(r,1);continue}if(!o.guardian&&(d.time.night<.3||d.terraform>=1)){o.sink-=n*1.5,o.group.position.y=ve(o.pos.x,o.pos.z)+o.sink,o.sink<-3&&(d.scene.remove(o.group),d.enemies.splice(r,1));continue}o.sink<0&&(o.sink=Math.min(0,o.sink+n*1.5));let a=Math.hypot(e.x-o.pos.x,e.z-o.pos.z);if(o.retarget-=n,o.retarget<=0)if(o.retarget=1,o.target=null,o.guardian)a<22&&(o.awake=!0),o.awake&&a<70&&!d.player.dead?o.target={kind:"player"}:(o.awake=!1,o.target={kind:"home"});else if(a<32&&!d.player.dead)o.target={kind:"player"};else{let m=null,_=400;for(let E of d.buildings){if(E.type==="lamp"||E.broken)continue;let v=Math.hypot(E.x-o.pos.x,E.z-o.pos.z)-E.def.r;v<_&&(_=v,m=E)}o.target=m?{kind:"building",b:m}:{kind:"player"}}let l=e.x,c=e.z,h=1.8*o.scale,u=o.target;if(u?.kind==="building"){if(!d.buildings.includes(u.b)||u.b.broken){o.retarget=0;continue}l=u.b.x,c=u.b.z,h=u.b.def.r*.9+1.4}else u?.kind==="home"&&(l=o.home.x,c=o.home.z,h=2);let f=l-o.pos.x,p=c-o.pos.z,g=Math.hypot(f,p),y=!1;if(g>h){f/=g,p/=g;for(let E of d.enemies){if(E===o)continue;let v=o.pos.x-E.pos.x,L=o.pos.z-E.pos.z,R=Math.hypot(v,L);R<2.5&&R>.01&&(f+=v/R*.6,p+=L/R*.6)}let m=Math.hypot(f,p)||1,_=o.speed*(o.target?.kind==="home"?.5:1);o.pos.x+=f/m*_*n,o.pos.z+=p/m*_*n;for(let E of d.colliders.query(o.pos.x,o.pos.z)){if(E.kind!=="building")continue;let v=o.pos.x-E.x,L=o.pos.z-E.z,R=Math.hypot(v,L),I=E.r+.8;R<I&&R>.01&&(o.pos.x=E.x+v/R*I,o.pos.z=E.z+L/R*I)}o.group.rotation.y=Math.atan2(f,p),y=!0}else u&&u.kind!=="home"&&(o.group.rotation.y=Math.atan2(f,p),o.atk-=n,o.atk<=0&&(o.atk=1,u.kind==="player"?d.player.damage((o.boss?30:o.guardian?14:9)*ys().dmg,o.pos):(u.b.hp-=o.boss?70:o.guardian?20:8,Me.spark(new T(o.pos.x,o.pos.y+1,o.pos.z),[1,.5,.2],8,5),u.b.hp<=0&&(u.b.hp=0,u.b.broken=!0,o.retarget=0,d.events.emit("broken",u.b),Wi())),o.inner.position.z=.6));if(o.boss){o.stomp-=n;let m=Math.hypot(e.x-o.pos.x,e.z-o.pos.z);o.stomp<=0&&m<22&&(o.stomp=4.5,Me.ring(new T(o.pos.x,o.pos.y,o.pos.z),3,100,[.9,.45,.25]),J.play("rumble"),d.player.landDip=Math.max(d.player.landDip,.35),m<13&&!d.driving&&(d.player.damage(18,o.pos),d.player.vel.y=4,d.player.vel.x+=(e.x-o.pos.x)/m*8,d.player.vel.z+=(e.z-o.pos.z)/m*8))}o.inner.position.z*=.85,o.pos.y=ve(o.pos.x,o.pos.z)+o.sink;let x=s*(y?12:2)+o.phase;for(let m of o.legs)m.rotation.x=Math.sin(x+m.userData.phase)*(y?.5:.08),m.rotation.z=Math.max(0,Math.cos(x+m.userData.phase))*.25*m.userData.side*(y?1:0);o.inner.position.y=Math.abs(Math.sin(x))*.08,o.flash>0?(o.flash-=n,o.inner.scale.setScalar(1+o.flash*1.2)):o.inner.scale.setScalar(1),Math.random()<n*4&&Me.trail(new T(o.pos.x,o.pos.y+1.6*o.scale,o.pos.z),[1,.35,.1],.8)}}function ea(n,e,t){let i=null,s=t,r=new T;for(let o of d.enemies){if(o.dead)continue;let a=1.3*o.scale;r.set(o.pos.x-n.x,o.pos.y+1*o.scale-n.y,o.pos.z-n.z);let l=r.dot(e);if(l<0)continue;let c=r.lengthSq()-l*l;if(c>a*a)continue;let h=l-Math.sqrt(a*a-c);h<s&&(s=h,i=o)}return i?{e:i,dist:s}:null}var ae={keys:new Set,mouse:[!1,!1,!1],dx:0,dy:0,wheel:0,pressed:new Set,clicked:[!1,!1,!1],sens:.0022,down(n){return this.keys.has(n)},hit(n){return this.pressed.has(n)},endFrame(){this.pressed.clear(),this.dx=0,this.dy=0,this.wheel=0,this.clicked=[!1,!1,!1]}};function Jg(n){window.addEventListener("keydown",e=>{e.code==="Tab"&&e.preventDefault(),ae.keys.has(e.code)||ae.pressed.add(e.code),ae.keys.add(e.code)}),window.addEventListener("keyup",e=>ae.keys.delete(e.code)),window.addEventListener("blur",()=>{ae.keys.clear(),ae.mouse=[!1,!1,!1]}),window.addEventListener("mousemove",e=>{d.locked&&(ae.dx+=e.movementX||0,ae.dy+=e.movementY||0)}),n.addEventListener("mousedown",e=>{d.locked&&(ae.mouse[e.button]=!0,ae.clicked[e.button]=!0)}),window.addEventListener("mouseup",e=>{ae.mouse[e.button]=!1}),window.addEventListener("wheel",e=>{d.locked&&(ae.wheel+=Math.sign(e.deltaY))},{passive:!0}),window.addEventListener("contextmenu",e=>e.preventDefault())}var hb=he.gravity,jg=1.7,mt=new T(-6,0,-6),lh=class{constructor(e){this.cam=e,this.pos=new T(0,0,6),this.pos.y=ve(this.pos.x,this.pos.z),this.vel=new T,this.yaw=Math.PI*.85,this.pitch=-.05,this.onGround=!0,this.maxHealth=100,this.health=100,this.maxO2=100,this.o2=100,this.energy=100,this.bob=0,this.stepT=0,this.landDip=0,this.dead=!1,this.hurtT=0,this.flashlight=!1,this.inLife=!1,this.alarmT=0,this.lastHitDir=0,this.moving=!1,this.sprinting=!1,this.jetting=!1,this.roll=0,this.fwd=new T}get eye(){return new T(this.pos.x,this.pos.y+jg+this.bobY,this.pos.z)}damage(e,t){if(this.dead)return;let i=d.upgrades.armor?.6:1;this.health-=e*i,this.hurtT=.5,t&&(this.lastHitDir=Math.atan2(t.x-this.pos.x,t.z-this.pos.z)),J.play("hurt"),this.health<=0&&this.die("\u4F60\u5012\u5728\u4E86\u706B\u661F\u7684\u5C18\u571F\u91CC")}die(e){this.dead||(this.dead=!0,this.health=0,d.events.emit("death",e))}respawn(){let e=d.buildings.find(i=>i.type==="habitat")||null,t=e?new T(e.x,0,e.z+9):mt.clone().add(new T(5,0,8));for(let i in d.res)d.res[i]=Math.floor(d.res[i]*.75);this.pos.set(t.x,ve(t.x,t.z),t.z),this.vel.set(0,0,0),this.health=this.maxHealth,this.o2=this.maxO2,this.energy=100,this.dead=!1}update(e){if(this.maxO2=d.upgrades.tank?180:100,this.maxHealth=d.upgrades.armor?150:100,this.dead){this.cam.position.y-=e*.3;return}d.locked&&(this.yaw-=ae.dx*ae.sens,this.pitch=Xt.clamp(this.pitch-ae.dy*ae.sens,-1.5,1.5));let t=0,i=0;d.menuOpen||((ae.down("KeyW")||ae.down("ArrowUp"))&&(i-=1),(ae.down("KeyS")||ae.down("ArrowDown"))&&(i+=1),(ae.down("KeyA")||ae.down("ArrowLeft"))&&(t-=1),(ae.down("KeyD")||ae.down("ArrowRight"))&&(t+=1));let s=Math.hypot(t,i);this.moving=s>0,this.sprinting=this.moving&&ae.down("ShiftLeft")&&i<0&&this.o2>5;let r=this.sprinting?10.5:6.2,o=Math.sin(this.yaw),a=Math.cos(this.yaw),l=0,c=0;if(s){let _=t/s,E=i/s;l=_*a+E*o,c=-_*o+E*a}let h=this.onGround?12:2.5;if(this.vel.x+=(l*r-this.vel.x)*Math.min(1,h*e),this.vel.z+=(c*r-this.vel.z)*Math.min(1,h*e),this.jetting=!1,!d.menuOpen&&ae.hit("Space")&&this.onGround)this.vel.y=5.4,this.onGround=!1,J.play("jump");else if(!d.menuOpen&&ae.down("Space")&&!this.onGround&&d.upgrades.jetpack&&this.energy>1&&this.vel.y<6){this.vel.y+=15*e,this.energy-=22*e,this.jetting=!0,Math.random()<.5&&J.play("jet");let _=new T(this.pos.x+o*.4,this.pos.y+.8,this.pos.z+a*.4);Me.flame(_),Me.flame(_)}this.vel.y-=hb*e;let u=this.pos.x+this.vel.x*e,f=this.pos.z+this.vel.z*e;this.pos.x=Xt.clamp(u,-je+120,je-120),this.pos.z=Xt.clamp(f,-je+120,je-120),this.pos.y+=this.vel.y*e;for(let _ of d.colliders.query(this.pos.x,this.pos.z)){let E=this.pos.x-_.x,v=this.pos.z-_.z,L=Math.hypot(E,v),R=_.r+.45;if(L<R&&L>1e-4){if(_.kind==="rock"&&this.pos.y>ve(_.x,_.z)+_.r*.6)continue;this.pos.x=_.x+E/L*R,this.pos.z=_.z+v/L*R}}let p=ve(this.pos.x,this.pos.z);this.pos.y<=p?(!this.onGround&&this.vel.y<-4&&(this.landDip=Math.min(.35,-this.vel.y*.04),J.play("land"),Me.dustPuff(this.pos,6,1)),this.pos.y=p,this.vel.y=0,this.onGround=!0):this.onGround&&this.pos.y-p<.5&&this.vel.y<=0?(this.pos.y=p,this.vel.y=0):this.onGround=!1;let g=Math.hypot(this.vel.x,this.vel.z);this.onGround&&g>.5&&(this.bob+=e*g*1.25,this.stepT+=e*g,this.stepT>2.6&&(this.stepT=0,J.play("step"),Math.random()<.4&&Me.dustPuff(this.pos,2,.4))),this.landDip*=Math.pow(.002,e),this.bobY=Math.sin(this.bob*2)*.05*Math.min(1,g/6)-this.landDip,this.cam.position.set(this.pos.x,this.pos.y+jg+this.bobY,this.pos.z),this.roll+=(-t*.025-this.roll)*Math.min(1,e*6);let y=(d.baseFov||72)+(this.sprinting?8:0)+(this.jetting?4:0);Math.abs(this.cam.fov-y)>.05&&(this.cam.fov+=(y-this.cam.fov)*Math.min(1,e*5),this.cam.updateProjectionMatrix()),this.cam.rotation.set(this.pitch,this.yaw,this.roll+Math.sin(this.bob)*.006*Math.min(1,g/6),"YXZ"),this.cam.getWorldDirection(this.fwd);let x=Pg(this.pos),m=this.pos.distanceTo(mt)<11;if(this.inLife=!!x||m,this.inLife)this.o2=Math.min(this.maxO2,this.o2+30*e),this.health=Math.min(this.maxHealth,this.health+4*e);else{let _=.55+(this.sprinting?.6:0)+(this.jetting?.6:0);_*=(1+d.storm*.8)*ys().o2*(kt("suit")?.65:1),d.terraform>=1&&(_*=.5),this.o2=Math.max(0,this.o2-_*e)}this.o2<=0&&(this.health-=9*e,this.health<=0&&this.die("\u6C27\u6C14\u8017\u5C3D")),this.o2<this.maxO2*.2&&!this.inLife&&(this.alarmT-=e,this.alarmT<=0&&(this.alarmT=2,J.play("alarm"))),this.jetting||(this.energy=Math.min(100,this.energy+(this.onGround?14:4)*e)),this.hurtT=Math.max(0,this.hurtT-e),this.health=Math.min(this.health,this.maxHealth)}};var hr=[{id:"laser",name:"\u91C7\u77FF\u6FC0\u5149",icon:"laser"},{id:"rifle",name:"\u7B49\u79BB\u5B50\u6B65\u67AA",icon:"rifle",need:"rifle"},{id:"build",name:"\u5EFA\u9020",icon:"build"}],sn={index:0,get id(){return hr[this.index].id}},Ti,ub=0,Vr=null,$f,Es,ul,cr={},bs,ws,sa,ia,dl,Qg=new T(.24,-.22,-.85);function nx(n){Es=new Di,ul=new on(n.fov,n.aspect,.01,10),Es.add(new Ys(16769224,4202520,1.4));let e=new Ni(16777215,1.5);e.position.set(1,2,1),Es.add(e),Es.userData.dl=e;let t=(v,L,R,I,P,w)=>{let b=new le(v,L);return b.position.set(R,I,P),w.add(b),b},i=new Ni(8965375,1.2);i.position.set(-2,1,2),Es.add(i);let s=(v,L,R,I=20)=>{let P=new us(v.map(([w,b])=>new ne(w,b)),I);return P.rotateX(-Math.PI/2),t(P,L,0,0,0,R)},r=new de({color:15262940,roughness:.35,metalness:.15}),o=new de({color:2764083,roughness:.45,metalness:.7}),a=new de({color:16742954,roughness:.4,metalness:.2});$f=new de({color:3346688,emissive:16747056,emissiveIntensity:1.2});let l=new de({color:8755,emissive:4515583,emissiveIntensity:1.5}),c=(v,L,R,I,P,w,b)=>{let D=t(new et(v,v,L,16),R,I,P,w,b);return D.rotation.x=Math.PI/2,D},h=new we;s([[0,-.12],[.04,-.12],[.056,-.08],[.058,.18],[.05,.26],[.036,.3],[.03,.36],[0,.36]],r,h),c(.06,.02,a,0,0,-.02,h),c(.06,.012,a,0,0,.1,h),c(.045,.06,o,0,0,.1+.04,h);for(let v=0;v<3;v++){let L=t(new Ye(.034-v*.003,.007,8,20),$f,0,0,-.33-v*.035,h)}c(.018,.14,o,0,0,-.38,h);let u=t(new Ge(.02,12,8),new it({color:16760960}),0,0,-.455,h);t(new We(.018,.016,.2),o,0,.062,-.05,h),c(.026,.17,a,.06,-.02,-.02,h),t(new We(.032,.07,.045),o,0,-.075,.02,h).rotation.x=.3,t(new We(.03,.02,.07),o,0,-.05,.02,h);let f=t(new Wn(.04,.025),new it({color:6743807}),-.0585,.012,.04,h);f.rotation.y=-Math.PI/2,h.userData.tip=u;let p=new we;s([[0,-.2],[.04,-.2],[.055,-.15],[.055,.2],[.048,.28],[0,.28]],r,p),c(.035,.32,o,0,0,-.36,p);for(let v=0;v<4;v++)t(new Ye(.046,.009,8,20),l,0,0,-.27-v*.065,p);c(.05,.03,a,0,0,-.18,p),c(.022,.16,o,0,.075,-.02,p),t(new et(.023,.023,.005,12),l,0,.075,-.1,p).rotation.x=Math.PI/2,t(new We(.032,.07,.045),o,0,-.075,0,p).rotation.x=.3,t(new We(.035,.09,.05),l,0,-.08,-.06,p);let g=new we;t(new We(.32,.22,.018),o,0,0,0,g),t(new We(.33,.012,.022),a,0,.112,0,g);let y=document.createElement("canvas");y.width=256,y.height=176;let x=y.getContext("2d");x.fillStyle="#06222e",x.fillRect(0,0,256,176),x.strokeStyle="rgba(127,230,255,.25)";for(let v=0;v<256;v+=16)x.beginPath(),x.moveTo(v,0),x.lineTo(v,176),x.stroke();for(let v=0;v<176;v+=16)x.beginPath(),x.moveTo(0,v),x.lineTo(256,v),x.stroke();x.strokeStyle="#7fe6ff",x.lineWidth=2,x.beginPath(),x.arc(128,110,50,Math.PI,0),x.lineTo(178,140),x.lineTo(78,140),x.closePath(),x.stroke(),x.fillStyle="#7fe6ff",x.font="bold 14px sans-serif",x.fillText("BLUEPRINT",12,22);let m=new ln(y);m.colorSpace=_t;let _=t(new Wn(.29,.195),new it({map:m,transparent:!0,opacity:.95}),0,-.004,.01,g);g.userData.scr=_,g.rotation.set(-.5,.25,0),cr={laser:h,rifle:p,build:g};for(let v in cr)cr[v].scale.setScalar(v==="build"?.45:.6),cr[v].visible=!1,Es.add(cr[v]);let E=new et(1,1,1,8,1,!0);E.translate(0,.5,0),bs=new le(E,new it({color:16773328,transparent:!0,opacity:.95,blending:Et,depthWrite:!1})),ws=new le(E,new it({color:16740384,transparent:!0,opacity:.45,blending:Et,depthWrite:!1})),bs.visible=ws.visible=!1,bs.frustumCulled=ws.frustumCulled=!1,d.scene.add(bs,ws),sa=Pe(16748608,1.6,d.scene),sa.visible=!1,Ti=new Zs(16747072,0,6,2),d.scene.add(Ti),dl=Pe(6743807,.35,Es),dl.visible=!1,ia=new Io(16773853,0,70,.42,.45,1.2),n.add(ia),ia.position.set(.3,-.2,0),ia.target.position.set(0,0,-10),n.add(ia.target),d.scene.add(n)}function ch(n){let e=hr[n];if(e.need&&!d.upgrades[e.need]){d.events.emit("toast",`\u5C1A\u672A\u5236\u9020\uFF1A${e.name}\uFF08\u5728\u5236\u9020\u5DE5\u574A\u5236\u4F5C\uFF09`),J.play("deny");return}sn.index===n&&e.id!=="build"||(sn.index=n,J.play("ui"),e.id==="build"?d.events.emit("openBuild"):Or(null))}var ta=0,Vf=0,na=0,Wf=0,hh=0,ex=-1,db=new T,fb=new T(0,1,0),ra=new T;function tx(n,e,t){let i=null,s=t;for(let r of d.nodes){let o=r.mesh.scale.x,a=1.5*o+.3;ra.set(r.x-n.x,r.y+.7*o-n.y,r.z-n.z);let l=ra.dot(e);if(l<0||l>t+a)continue;let c=ra.lengthSq()-l*l;if(c>a*a)continue;let h=l-Math.sqrt(a*a-c);h<s&&(s=Math.max(.3,h),i=r)}return i?{n:i,dist:s}:null}function pb(n,e,t){let i=null,s=t;for(let r of d.buildings){let o=Math.max(1.2,r.def.r);ra.set(r.x-n.x,r.y+Math.min(o,3)*.6-n.y,r.z-n.z);let a=ra.dot(e);if(a<0)continue;let l=ra.lengthSq()-a*a;if(l>o*o)continue;let c=a-Math.sqrt(o*o-l);c<s&&(s=c,i=r)}return i}function ix(n,e,t){let i=sn.id;ex!==sn.index&&(hh=1,ex=sn.index),hh=Math.max(0,hh-n*4);for(let p in cr)cr[p].visible=p===i;let s=cr[i],r=Math.hypot(e.vel.x,e.vel.z),o=Math.sin(e.bob)*.012*Math.min(1,r/6),a=Math.abs(Math.cos(e.bob))*.012*Math.min(1,r/6);na*=Math.pow(1e-4,n);let l=i==="build"?[.2,-.24,-.6]:[.24,-.22,-.58];s.position.set(l[0]+o,l[1]+a-hh*.3-(e.sprinting?.04:0),l[2]+na*.08),s.rotation.x=(i==="build"?-.5:0)+na*.15+(e.sprinting?-.25:0),i==="build"&&(s.userData.scr.material.opacity=.6+Math.sin(performance.now()*.005)*.2),ul.aspect=t.aspect,ul.fov=t.fov,ul.updateProjectionMatrix();let c=.4+(1-d.time.night)*1.2;Es.userData.dl.intensity=c,ae.hit("KeyF")&&!d.menuOpen&&(e.flashlight=!e.flashlight,J.play("ui")),ia.intensity=e.flashlight?60:0;let h=t.position,u=e.fwd;if(d.lookBuilding=d.menuOpen?null:pb(h,u,14),d.aimNode=i==="laser"&&!!tx(h,u,9),!d.menuOpen&&!e.dead&&!d.photo){if(ae.hit("Digit1")&&ch(0),ae.hit("Digit2")&&ch(1),(ae.hit("Digit3")||ae.hit("KeyB"))&&ch(2),ae.wheel&&sn.id!=="build"){let p=sn.index;for(let g=0;g<2&&(p=(p+(ae.wheel>0?1:2))%2,!(!hr[p].need||d.upgrades[hr[p].need]));g++);p!==sn.index&&ch(p)}sn.id==="build"&&bt.type&&ae.wheel&&(bt.rot+=ae.wheel*.3)}bs.visible=ws.visible=sa.visible=!1,ub-=n,Ti.intensity=Math.max(0,Ti.intensity-n*120),Vr&&(Vr.mesh.position.set(Vr.x,Vr.y,Vr.z),Vr=null),dl.visible=!1,Vf-=n;let f=ae.mouse[0]&&!d.menuOpen&&!e.dead&&d.locked;if($f.emissiveIntensity=i==="laser"&&f?3+Math.random()*1.5:1+Math.sin(performance.now()*.003)*.3,i==="laser")if(f){let g=tx(h,u,9),y=ea(h,u,9),x=Bc(h,u,9),m=9,_=null;x&&x.dist<m&&(m=x.dist,_="ground"),g&&g.dist<=m&&(m=g.dist,_="node"),y&&y.dist<m&&(m=y.dist,_="enemy");let E=db.copy(h).addScaledVector(u,m),v=t.localToWorld(Qg.clone()),L=E.clone().sub(v),R=L.length();L.normalize();let I=new an().setFromUnitVectors(fb,L),P=1+Math.sin(performance.now()*.05)*.2;if(bs.position.copy(v),bs.quaternion.copy(I),bs.scale.set(.012*P,R,.012*P),ws.position.copy(v),ws.quaternion.copy(I),ws.scale.set(.04*P,R,.04*P),bs.visible=ws.visible=!0,sa.position.copy(E),sa.visible=!0,sa.scale.setScalar(1.2+Math.random()*.8),na=Math.max(na,.15+Math.random()*.1),Ti.position.copy(E).addScaledVector(u,-.6),Ti.color.setRGB(1,.55,.25),Ti.intensity=5+Math.random()*4,_==="node"){let w=g.n;for(Ti.color.setRGB(...gs[w.type]),Vr=w,w.mesh.position.set(w.x+(Math.random()-.5)*.07,w.y+(Math.random()-.5)*.05,w.z+(Math.random()-.5)*.07),Math.random()<.15&&Me.dustPuff(E,1,.4),ta+=n*3.2*(d.upgrades.overclock?2:1)*(kt("laser2")?1.5:1)*ys().yield,Math.random()<.7&&Me.spark(E,gs[w.type],2,5,.4),Wf-=n,Wf<=0&&(Wf=.09,J.play("mine"));ta>=1&&d.nodes.includes(w);)if(ta-=1,d.res[w.type]++,d.stats.mined[w.type]++,w.meteor&&(d.stats.meteorMined=(d.stats.meteorMined||0)+1),d.events.emit("pickup",{type:w.type,n:1}),Zc(w,1)){J.play("deplete"),ta=0;break}}else _==="enemy"?(hl(y.e,16*n*(d.upgrades.overclock?1.5:1),"laser"),Math.random()<.5&&Me.spark(E,[1,.5,.2],3,5)):_==="ground"&&(Math.random()<.3&&Me.spark(E,[1,.6,.3],1,3),Math.random()<.1&&Me.dustPuff(E,1,.3));J.laser(!0)}else J.laser(!1),ta=Math.min(ta,.9);else J.laser(!1);if(i==="rifle"&&f&&Vf<=0)if(e.energy>=5){Vf=.16,e.energy-=5,na=1;let p=t.localToWorld(Qg.clone()),g=ea(h,u,200),y=Bc(h,u,200),x=200;y&&(x=y.dist),g&&g.dist<x&&(x=g.dist);let _=h.clone().addScaledVector(u,x).sub(p).normalize();ah(p,_,d.upgrades.rifle2?30:19,"player"),J.play("shoot"),dl.visible=!0,dl.position.set(.24,-.21,-.86),Ti.position.copy(p),Ti.color.setRGB(.4,.9,1),Ti.intensity=12}else ae.clicked[0]&&(J.play("deny"),d.events.emit("toast","\u80FD\u91CF\u4E0D\u8DB3"));if(i==="build"){let p=!d.menuOpen&&bt.type?Bc(h,u,40):null;if(Lg(p?p.point:null,e.pos),!d.menuOpen&&bt.type&&(ae.hit("KeyR")&&(bt.rot+=Math.PI/4),ae.clicked[0]))if(bt.valid){let g=Dg();g&&d.events.emit("built",g)}else J.play("deny"),d.events.emit("toast",bt.reason);ae.clicked[2]&&(Or(null),sn.index=0,J.play("ui"))}}function sx(n){d.player.dead||d.driving||d.photo||(n.autoClear=!1,n.clearDepth(),n.render(Es,ul),n.autoClear=!0)}var oa=[["\u6797\u6653","\u690D\u7269\u5B66\u5BB6","\u6211\u4ECE\u4E91\u5357\u5E26\u6765\u4E86\u4E00\u5305\u8336\u6811\u79CD\u5B50\u3002\u603B\u6709\u4E00\u5929\uFF0C\u706B\u661F\u4E0A\u4E5F\u80FD\u6CE1\u4E00\u58F6\u70ED\u8336\u3002"],["Amara Okafor","\u533B\u751F","\u5728\u5730\u7403\u4E0A\uFF0C\u6211\u6551\u8FC7\u5F88\u591A\u4EBA\u3002\u5728\u8FD9\u91CC\uFF0C\u6211\u60F3\u770B\u7740\u5B69\u5B50\u4EEC\u5E73\u5B89\u957F\u5927\u3002"],["\u9648\u9ED8","\u5DE5\u7A0B\u5E08","\u8FD9\u91CC\u7684\u6BCF\u4E00\u9897\u87BA\u4E1D\uFF0C\u90FD\u662F\u6211\u4EEC\u4EB2\u624B\u62E7\u4E0A\u53BB\u7684\u3002"],["Mateo Silva","\u5730\u8D28\u5B66\u5BB6","\u4F60\u770B\u89C1\u90A3\u4E9B\u5CA9\u5C42\u4E86\u5417\uFF1F\u5B83\u4EEC\u6BD4\u4EBA\u7C7B\u7684\u5386\u53F2\u8FD8\u8981\u53E4\u8001\u56DB\u5341\u4EBF\u5E74\u3002"],["\u82CF\u5FF5","\u6559\u5E08",'\u6211\u7684\u7B2C\u4E00\u5802\u8BFE\uFF0C\u5C31\u53EB"\u6211\u4EEC\u4E3A\u4EC0\u4E48\u6765\u5230\u706B\u661F"\u3002'],["Yuki Tanaka","\u98DE\u884C\u5458","\u4ECE\u8F68\u9053\u4E0A\u770B\uFF0C\u4F60\u4EEC\u7684\u706F\u5149\u50CF\u662F\u7EA2\u8272\u6C99\u6F20\u91CC\u7684\u4E00\u4E32\u73CD\u73E0\u3002"],["\u738B\u5927\u5C71","\u53A8\u5E08","\u6E29\u5BA4\u91CC\u7684\u7B2C\u4E00\u6279\u571F\u8C46\uFF0C\u6211\u505A\u4E86\u4E00\u9505\u571F\u8C46\u7096\u83DC\u3002\u5927\u5BB6\u90FD\u54ED\u4E86\u3002"],["Elena Petrova","\u5929\u6587\u5B66\u5BB6","\u665A\u4E0A\u62AC\u5934\uFF0C\u90A3\u9897\u6700\u4EAE\u7684\u84DD\u661F\uFF0C\u5C31\u662F\u5730\u7403\u3002"],["\u8D75\u5C0F\u96E8","\u5B66\u751F","\u6211\u5341\u516D\u5C81\u3002\u6211\u4F1A\u662F\u7B2C\u4E00\u4EE3\u5728\u706B\u661F\u957F\u5927\u7684\u4EBA\u3002"],["Kwame Mensah","\u7535\u5DE5","\u53EA\u8981\u706F\u8FD8\u4EAE\u7740\uFF0C\u8FD9\u91CC\u5C31\u662F\u5BB6\u3002"],["\u5468\u9752\u79BE","\u6C34\u6587\u5B66\u5BB6","\u51B0\u5C42\u4E0B\u9762\u6709\u6C34\u3002\u6709\u6C34\uFF0C\u5C31\u6709\u751F\u547D\u3002"],["Priya Sharma","\u7A0B\u5E8F\u5458","\u6211\u5199\u7684\u4EE3\u7801\u5728\u63A7\u5236\u5236\u6C27\u7AD9\u3002\u522B\u62C5\u5FC3\uFF0C\u6211\u6D4B\u8BD5\u8FC7\u4E09\u5343\u904D\u4E86\u3002"],["\u674E\u957F\u98CE","\u8001\u5175","\u6211\u5E74\u8F7B\u65F6\u5B88\u8FC7\u8FB9\u7586\u3002\u73B0\u5728\uFF0C\u6211\u5B88\u7740\u4EBA\u7C7B\u7684\u65B0\u8FB9\u7586\u3002"],["Sofia Rossi","\u5EFA\u7B51\u5E08","\u7A79\u9876\u7684\u5F27\u5EA6\uFF0C\u662F\u6211\u7167\u7740\u6545\u4E61\u6559\u5802\u7684\u5706\u9876\u753B\u7684\u3002"],["\u4F55\u5B89","\u62A4\u58EB","\u60F3\u5BB6\u7684\u65F6\u5019\uFF0C\u6211\u5C31\u53BB\u6E29\u5BA4\u91CC\u95FB\u95FB\u6CE5\u571F\u7684\u5473\u9053\u3002"],["Jonas Berg","\u673A\u68B0\u5E08","\u706B\u661F\u7684\u6C99\u5B50\u4F1A\u94BB\u8FDB\u4EFB\u4F55\u7F1D\u9699\u3002\u4F46\u6211\u4EEC\u6BD4\u6C99\u5B50\u66F4\u56FA\u6267\u3002"],["\u9A6C\u6674","\u8BB0\u8005","\u6211\u8981\u8BB0\u5F55\u4E0B\u8FD9\u4E00\u5207\u3002\u51E0\u767E\u5E74\u540E\u7684\u4EBA\u4F1A\u60F3\u77E5\u9053\uFF0C\u6700\u521D\u662F\u600E\u6837\u7684\u3002"],["Omar Haddad","\u519C\u5B66\u5BB6","\u6211\u7956\u7236\u5728\u6C99\u6F20\u91CC\u79CD\u51FA\u4E86\u6930\u67A3\u3002\u6211\u8981\u5728\u706B\u661F\u79CD\u51FA\u68EE\u6797\u3002"],["\u5434\u6850","\u753B\u5BB6","\u706B\u661F\u7684\u65E5\u843D\u662F\u84DD\u8272\u7684\u3002\u5730\u7403\u4E0A\u6CA1\u6709\u4EBA\u4F1A\u76F8\u4FE1\u3002"],["Grace Kim","\u5FC3\u7406\u533B\u751F","\u79BB\u5BB6\u5F88\u8FDC\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5F7C\u6B64\u5C31\u662F\u5BB6\u3002"],["\u90ED\u8FDC","\u7236\u4EB2","\u6211\u5973\u513F\u5728\u98DE\u8239\u4E0A\u51FA\u751F\u3002\u5979\u7684\u51FA\u751F\u8BC1\u660E\u4E0A\u5199\u7740\uFF1A\u51FA\u751F\u5730\uFF0C\u661F\u9645\u7A7A\u95F4\u3002"],["Lucas Moreau","\u97F3\u4E50\u5BB6","\u6211\u5E26\u4E86\u4E00\u628A\u5409\u4ED6\u3002\u4ECA\u665A\u7A79\u9876\u91CC\u6709\u97F3\u4E50\u4F1A\uFF0C\u4F60\u6765\u5417\uFF1F"],["\u94B1\u591A\u591A","\u4F1A\u8BA1","\u6211\u7B97\u8FC7\u4E86\uFF1A\u7167\u8FD9\u4E2A\u901F\u5EA6\uFF0C\u4E8C\u5341\u5E74\u540E\u8FD9\u91CC\u4F1A\u6709\u4E00\u5EA7\u57CE\u5E02\u3002"],["Aiko Sato","\u751F\u7269\u5B66\u5BB6","\u90A3\u4E9B\u9508\u8680\u86DB\u2026\u2026\u4E5F\u8BB8\u5B83\u4EEC\u53EA\u662F\u5728\u4FDD\u62A4\u81EA\u5DF1\u7684\u5BB6\u56ED\u3002"],["\u9093\u5353","\u77FF\u5DE5","\u949B\u77FF\u91CC\u85CF\u7740\u706B\u661F\u7684\u5FC3\u8DF3\u3002"],["Nadia Volkova","\u6C14\u8C61\u5B66\u5BB6","\u5927\u6C14\u6539\u9020\u5854\u542F\u52A8\u540E\uFF0C\u4E5F\u8BB8\u6211\u4EEC\u80FD\u770B\u89C1\u706B\u661F\u4E0A\u7684\u7B2C\u4E00\u7247\u4E91\u3002"],["\u9EC4\u4E00\u9E23","\u673A\u5668\u4EBA\u4E13\u5BB6","\u673A\u5668\u53EF\u4EE5\u66FF\u6211\u4EEC\u5E72\u6D3B\uFF0C\u4F46\u53EA\u6709\u4EBA\uFF0C\u624D\u80FD\u628A\u4E00\u4E2A\u5730\u65B9\u53D8\u6210\u5BB6\u3002"],["Samuel Okoro","\u7267\u5E08","\u65E0\u8BBA\u5728\u54EA\u9897\u661F\u7403\u4E0A\uFF0C\u6211\u4EEC\u90FD\u4F1A\u4E3A\u65B0\u751F\u7684\u5B69\u5B50\u795D\u798F\u3002"],["\u53F6\u77E5\u79CB","\u8BD7\u4EBA",'"\u6B64\u5FC3\u5B89\u5904\u662F\u543E\u4E61\u3002"\u2014\u2014\u82CF\u8F7C\u3002\u6211\u60F3\uFF0C\u4ED6\u8BF4\u5F97\u5BF9\u3002'],["Hannah Weber","\u7269\u7406\u5B66\u5BB6","\u805A\u53D8\u53CD\u5E94\u5806\u7684\u5149\uFF0C\u548C\u592A\u9633\u662F\u540C\u4E00\u79CD\u5149\u3002"],["\u5C0F\u6EE1","\u5B69\u5B50","\u53D4\u53D4\uFF0C\u5730\u7403\u662F\u4EC0\u4E48\u6837\u5B50\u7684\uFF1F"],["Diego Ram\xEDrez","\u767B\u5C71\u5BB6","\u5965\u6797\u5E15\u65AF\u5C71\u6709\u4E24\u4E07\u7C73\u9AD8\u3002\u603B\u6709\u4E00\u5929\u6211\u8981\u7AD9\u4E0A\u53BB\u3002"]],uh=0;function rx(n,e,t){let i=t?.idx??uh++,s=oa[i%oa.length],r=Dm(i);r.group.position.set(n,ve(n,e),e),d.scene.add(r.group);let o={...r,idx:i,name:s[0]+(i>=oa.length?` ${Math.floor(i/oa.length)+1}\u4E16`:""),job:s[1],line:s[2],pos:r.group.position,target:null,wait:Math.random()*3,phase:Math.random()*6,talked:0};return d.colonists.push(o),o}function mb(n){let e=d.buildings.filter(o=>o.type!=="lamp");if(!e.length)return new T(n.pos.x+(Math.random()-.5)*10,0,n.pos.z+(Math.random()-.5)*10);let t=e;if(d.time.night>.5){let o=e.filter(l=>l.type==="plaza"&&l.powered);if(o.length&&Math.random()<.85){let l=o[n.idx%o.length],c=n.idx*2.399%(Math.PI*2),h=2.8+n.idx%3*.9;return n.atPlaza=l,new T(l.x+Math.cos(c)*h,0,l.z+Math.sin(c)*h)}let a=e.filter(l=>l.type==="habitat"||l.type==="apartment");a.length&&(t=a)}n.atPlaza=null;let i=t[Math.floor(Math.random()*t.length)],s=Math.random()*Math.PI*2,r=i.def.r+1.5+Math.random()*5;return new T(i.x+Math.cos(s)*r,0,i.z+Math.sin(s)*r)}var fl=null,Xf=25;function gb(n,e){let t=Lm();t.group.userData.shuttle=!0,t.group.position.set(n.x,n.y+260,n.z),d.scene.add(t.group),fl={...t,pad:n,n:e,t:0,phase:"descend"},J.play("rumble"),d.events.emit("shuttleIncoming",e)}function ox(n){let e=d.colony;if(d.popTotal=Math.max(d.popTotal||0,d.colonists.length),e.pop=d.popTotal,e.pop)for(d._work=(d._work||0)+n*e.pop*.04*(kt("culture")?2:1);d._work>=1;){d._work-=1;let r=Math.random()<.55?"iron":Math.random()<.6?"silicon":"ice";d.res[r]++}let t=d.buildings.filter(r=>r.type==="beacon"&&r.powered),i=e.support-e.pop;!fl&&t.length&&i>0&&!d.ended&&(Xf-=n,Xf<=0&&(Xf=Math.max(20,50/t.length)*(kt("pr")?.55:1),gb(t[Math.floor(Math.random()*t.length)],Math.min(i,4+(d.cityLevel||0)*2+(kt("pr")?2:0))))),fl&&xb(n);let s=performance.now()*.001;for(let r of d.colonists){r.target||(r.wait-=n,r.wait<=0&&(r.target=mb(r)));let o=!1;if(r.target){let h=r.target.x-r.pos.x,u=r.target.z-r.pos.z,f=Math.hypot(h,u);if(f<.6)r.target=null,r.wait=3+Math.random()*8;else{r.pos.x+=h/f*1.7*n,r.pos.z+=u/f*1.7*n;for(let g of d.colliders.query(r.pos.x,r.pos.z)){if(g.kind!=="building")continue;let y=r.pos.x-g.x,x=r.pos.z-g.z,m=Math.hypot(y,x),_=g.r+.4;m<_&&m>.01&&(r.pos.x=g.x+y/m*_,r.pos.z=g.z+x/m*_)}r.group.rotation.y=Math.atan2(h,u),o=!0}}let a=Math.hypot(d.player.pos.x-r.pos.x,d.player.pos.z-r.pos.z);a<4&&!o?r.group.rotation.y=Math.atan2(d.player.pos.x-r.pos.x,d.player.pos.z-r.pos.z):!o&&r.atPlaza&&(r.group.rotation.y=Math.atan2(r.atPlaza.x-r.pos.x,r.atPlaza.z-r.pos.z),r.wait=Math.max(r.wait,2),d.time.night<.3&&(r.wait=0)),r.pos.y=ve(r.pos.x,r.pos.z);let l=s*7+r.phase,c=o?Math.sin(l)*.6:0;r.legL.rotation.x=c,r.legR.rotation.x=-c,r.armL.rotation.x=-c*.8,r.armR.rotation.x=c*.8,!o&&a<4&&(r.armR.rotation.x=-2.6+Math.sin(s*6)*.3),r.body.position.y=.72+(o?Math.abs(Math.sin(l))*.04:0),r.talked=Math.max(0,r.talked-n)}}function xb(n){let e=fl;e.t+=n;let t=e.pad,i=e.group;if(e.phase==="descend"){let s=Math.min(1,e.t/11),r=1-Math.pow(1-s,3);i.position.y=t.y+.6+260*(1-r),e.flame.scale.set(1,.6+(1-r)*1.2+Math.random()*.2,1);for(let o=0;o<3;o++)Me.flame(i.position);s>.85&&Math.random()<.5&&Me.dustPuff(new T(t.x,t.y,t.z),4,10),s>=1&&(e.phase="landed",e.t=0,Me.ring(new T(t.x,t.y,t.z),3,80),e.flame.visible=!1,e.flameGlow.visible=!1)}else if(e.phase==="landed"){if(e.total=e.total||e.n,e.n>0&&e.t>2+(e.total-e.n)*.6){let s;d.colonists.length<40?(s=rx(t.x+(Math.random()-.5)*2,t.z+3),s.target=new T(t.x+(Math.random()-.5)*20,0,t.z+10+Math.random()*8)):s={name:oa[uh++%oa.length][0]},e.n--,e.arrived=(e.arrived||[]).concat([s]),d.popTotal=(d.popTotal||0)+1,d.stats.arrived++}e.n<=0&&e.t>7&&(e.phase="ascend",e.t=0,e.flame.visible=!0,e.flameGlow.visible=!0,J.play("rumble"),d.events.emit("colonistsArrived",e.arrived||[]))}else if(e.phase==="ascend"){i.position.y+=n*(5+e.t*12);for(let s=0;s<3;s++)Me.flame(i.position);e.t<1.5&&Me.dustPuff(new T(t.x,t.y,t.z),3,10),e.t>12&&(d.scene.remove(i),fl=null)}}var qf=new T;function ax(n,e){let t=null,i=6;for(let s of d.colonists){qf.set(s.pos.x-n.x,s.pos.y+1.1-n.y,s.pos.z-n.z);let r=qf.dot(e);r<0||r>i||qf.lengthSq()-r*r<.8*.8&&(i=r,t=s)}return t}function lx(){return d.colonists.map(n=>[n.idx,+n.pos.x.toFixed(1),+n.pos.z.toFixed(1)])}function cx(n){for(let[e,t,i]of n)rx(t,i,{idx:e});uh=Math.max(uh,...n.map(e=>e[0]+1),0)}var yb={iron:'<path d="M12 2.5l8.2 4.75v9.5L12 21.5l-8.2-4.75v-9.5z"/><path d="M12 2.5v19M3.8 7.25l16.4 9.5M20.2 7.25L3.8 16.75" opacity=".35"/>',silicon:'<path d="M12 2l7 10-7 10-7-10z"/><path d="M5 12h14M12 2v20" opacity=".35"/>',ice:'<path d="M12 2v20M3.3 7l17.4 10M20.7 7L3.3 17"/><path d="M9.5 3.5L12 6l2.5-2.5M9.5 20.5L12 18l2.5 2.5"/>',titanium:'<path d="M12 2l2.6 7.4L22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6z"/>',power:'<path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H12z"/>',pop:'<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.6 2.7-6 6-6s6 2.4 6 6"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 14.4c3 .1 5.5 2.2 5.5 5.6"/>',house:'<path d="M3 20h18M5 20V10l7-6 7 6v10"/><path d="M10 20v-5h4v5"/>',o2:'<circle cx="9" cy="12" r="5.5"/><path d="M17 15.5c0-1.4 2.6-1.6 2.6-3 0-.9-.7-1.5-1.6-1.5S16.5 11.6 16.5 12.4M16.5 18.5h3.4"/>',food:'<path d="M12 21V9"/><path d="M12 13c-4 0-6-3-6-7 4 0 6 3 6 7zM12 11c0-4 2-7 6-7 0 4-2 7-6 7z"/>',water:'<path d="M12 2.5S5.5 10 5.5 14.5a6.5 6.5 0 0013 0C18.5 10 12 2.5 12 2.5z"/>',laser:'<path d="M3 15l7-7 3 3-7 7z"/><path d="M13 11l2-2M16 8l5-5M17.5 11.5l3 .5M12.5 6.5l-.5-3"/>',rifle:'<path d="M2 10h15l3 2-3 2H9l-2 5H4l1-5H2z"/><path d="M12 10V7h3v3"/>',build:'<path d="M3 21h18M6 21V11h12v10M9 11V6h6v5"/><path d="M14 3l5 3" />',rover:'<path d="M3 15h18v-4l-3-4H8l-2 4H3z"/><circle cx="7" cy="17.5" r="2.2"/><circle cx="17" cy="17.5" r="2.2"/><path d="M10 7v4h8"/>',warn:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.01"/>',sun:'<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/>',moon:'<path d="M20 14.5A8.5 8.5 0 019.5 4a8.5 8.5 0 1010.5 10.5z"/>',meteor:'<circle cx="16" cy="16" r="4"/><path d="M13 13L3 3M15 11L8 4M11 15L4 8"/>',radio:'<path d="M5 9a9.5 9.5 0 0114 0M8 12a5 5 0 018 0"/><circle cx="12" cy="15.5" r="1.6"/><path d="M12 17v4"/>',check:'<path d="M4 12.5l5 5L20 6.5"/>',lock:'<rect x="5" y="10.5" width="14" height="10" rx="1"/><path d="M8 10.5V7a4 4 0 018 0v3.5"/>',ship:'<path d="M12 2c3 3 4 7 4 11v4H8v-4c0-4 1-8 4-11z"/><path d="M8 13l-3 4v3l3-2M16 13l3 4v3l-3-2M10 20l2 2 2-2"/>',colony:'<path d="M2 20h20"/><path d="M4 20v-5a4 4 0 018 0v5M13 20V7h7v13"/><path d="M15.5 10h2M15.5 13h2M15.5 16h2"/>',storm:'<path d="M3 8h12a3 3 0 10-3-3M3 12h16a3 3 0 11-3 3M3 16h8"/>',shield:'<path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/>',wrench:'<path d="M14.5 6.5a4 4 0 015.2 5.2L21 13l-8 8-1.3-1.3a4 4 0 01-5.2-5.2L3 11l3-3 3.5 3.5 2-2L8 6l3-3z" transform="scale(.9) translate(1.3 1.3)"/>',tank:'<rect x="7" y="5" width="10" height="16" rx="5"/><path d="M10 2h4v3h-4zM7 10h10"/>',scanner:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 12l6-6"/>',jet:'<path d="M8 3h8v11H8z"/><path d="M9 14l-1 4M15 14l1 4M10 18l2 4 2-4"/>',armor:'<path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/><path d="M8 10l4 2 4-2M12 12v6"/>',focus:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="2"/><path d="M12 1.5v5M12 17.5v5M1.5 12h5M17.5 12h5"/>',bolt2:'<path d="M7 2l-2 9h5l-2 11 9-13h-6l3-7z"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',planet:'<circle cx="12" cy="12" r="6.5"/><path d="M2.5 15.5c3 2 16 -4 19-9" />',trophy:'<path d="M7 3h10v5a5 5 0 01-10 0z"/><path d="M7 5H3c0 3 2 5 4 5M17 5h4c0 3-2 5-4 5M12 13v4M8 21h8M9 17h6"/>',book:'<path d="M4 4h6a2 2 0 012 2v14a2 2 0 00-2-2H4zM20 4h-6a2 2 0 00-2 2v14a2 2 0 012-2h6z"/>',camera:'<path d="M3 7h4l2-3h6l2 3h4v13H3z"/><circle cx="12" cy="13" r="4"/>',gear:'<circle cx="12" cy="12" r="3.2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',drone:'<rect x="9" y="10" width="6" height="4" rx="1"/><path d="M9 11L5 7M15 11l4-4M9 13l-4 4M15 13l4 4"/><circle cx="5" cy="7" r="2.2"/><circle cx="19" cy="7" r="2.2"/><circle cx="5" cy="17" r="2.2"/><circle cx="19" cy="17" r="2.2"/>',boss:'<path d="M12 2l3 6 6 1-4 5 1 7-6-3-6 3 1-7-4-5 6-1z"/><circle cx="12" cy="12" r="2"/>',key:'<circle cx="8" cy="15" r="4.5"/><path d="M11.5 12L20 3.5M17 6.5l2.5 2.5M15 8.5l2 2"/>',dome:'<path d="M3 19h18M4.5 19a7.5 7.5 0 0115 0"/><path d="M12 11.5V8M10 19v-3h4v3"/>',tower:'<path d="M6 21V5h6v16M12 21V10h6v11"/><path d="M8 8h2M8 11h2M8 14h2M14 13h2M14 16h2M3 21h18"/>',monument:'<path d="M10 21l1-16 1-2 1 2 1 16z"/><ellipse cx="12" cy="11" rx="6" ry="2"/><path d="M5 21h14"/>'};function hx(){return`<svg xmlns="http://www.w3.org/2000/svg" style="display:none">${Object.entries(yb).map(([n,e])=>`<symbol id="i-${n}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${e}</symbol>`).join("")}</svg>`}var pt=(n,e="")=>`<svg class="ico ${e}" aria-hidden="true"><use href="#i-${n}"/></svg>`;var dh={};function ux(n){let e=n.filter(l=>!dh[l]);if(!e.length)return dh;let t=256,i=new Co({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});i.setSize(t,t),i.setPixelRatio(1),i.toneMapping=Ir,i.toneMappingExposure=1.15;let s=new Di;s.add(new Ys(14674175,3811876,1.4));let r=new Ni(16773344,2.6);r.position.set(4,8,6),s.add(r);let o=new Ni(8965375,1.4);o.position.set(-6,4,-6),s.add(o);let a=new on(30,1,.1,500);for(let l of e){let c=new we,h={};Hi[l](c,h);let u=[];c.traverse(_=>{(_.userData.found||_===h.flame||_===h.beam)&&u.push(_)}),u.forEach(_=>_.parent.remove(_));let f=[];c.traverse(_=>{_.isSprite&&f.push([_,_.parent])}),f.forEach(([_,E])=>E.remove(_)),s.add(c);let p=new xi().setFromObject(c,!0),g=p.getSize(new T),y=p.getCenter(new T);f.forEach(([_,E])=>E.add(_));let m=Math.max(g.x,g.y,g.z)*.62/Math.tan(Xt.degToRad(15))*1.05;a.position.set(y.x+m*.62,y.y+m*.42,y.z+m*.66),a.lookAt(y),a.updateProjectionMatrix(),i.render(s,a),dh[l]=i.domElement.toDataURL("image/png"),s.remove(c)}return i.dispose(),i.forceContextLoss(),dh}var vb={mars:[{id:"zhurong",name:"\u795D\u878D\u53F7\u706B\u661F\u8F66",model:"rover",who:"\u6863\u6848 \xB7 \u795D\u878D\u53F7",text:"\u4E2D\u56FD\u706B\u661F\u8F66\u300C\u795D\u878D\u53F7\u300D\uFF0C2021 \u5E74\u7740\u9646\u5728\u4E4C\u6258\u90A6\u5E73\u539F\u2014\u2014\u5C31\u5728\u4F60\u811A\u4E0B\u8FD9\u7247\u571F\u5730\u3002\u5B83\u7684\u592A\u9633\u80FD\u677F\u4E0A\u79EF\u6EE1\u4E86\u516D\u5341\u591A\u5E74\u7684\u6C99\u5C18\u3002\u4EBA\u7C7B\u5728\u706B\u661F\u4E0A\u7684\u7B2C\u4E00\u884C\u8F66\u8F99\uFF0C\u5C31\u662F\u5B83\u7559\u4E0B\u7684\u3002"},{id:"opportunity",name:"\u673A\u9047\u53F7\u6B8B\u9AB8",model:"rover2",who:"\u6863\u6848 \xB7 \u673A\u9047\u53F7",text:"\u4E00\u5757\u5199\u7740\u300COpportunity\u300D\u7684\u6B8B\u7247\uFF0C\u4E0D\u77E5\u88AB\u54EA\u573A\u6C99\u5C18\u66B4\u5377\u5230\u4E86\u8FD9\u91CC\u3002\u5B83\u5728\u706B\u661F\u4E0A\u5DE5\u4F5C\u4E86\u5341\u4E94\u5E74\u3002\u5B83\u6700\u540E\u4F20\u56DE\u7684\u6570\u636E\uFF0C\u88AB\u4EBA\u4EEC\u7FFB\u8BD1\u6210\u4E00\u53E5\u8BDD\uFF1A\u300C\u6211\u7684\u7535\u91CF\u5F88\u4F4E\uFF0C\u5929\u5FEB\u9ED1\u4E86\u3002\u300D"},{id:"viking",name:"\u6D77\u76D7\u4E00\u53F7\u7740\u9646\u5668",model:"lander",who:"\u6863\u6848 \xB7 \u6D77\u76D7\u4E00\u53F7",text:"1976 \u5E74\uFF0C\u4EBA\u7C7B\u7B2C\u4E00\u4E2A\u5728\u706B\u661F\u6210\u529F\u7740\u9646\u5E76\u4F20\u56DE\u7167\u7247\u7684\u63A2\u6D4B\u5668\u3002\u7167\u7247\u4E0A\uFF0C\u5C31\u662F\u8FD9\u6837\u4E00\u7247\u7EA2\u8272\u7684\u3001\u5E03\u6EE1\u77F3\u5934\u7684\u5E73\u539F\u3002"},{id:"ingenuity",name:"\u673A\u667A\u53F7\u76F4\u5347\u673A",model:"heli",who:"\u6863\u6848 \xB7 \u673A\u667A\u53F7",text:"\u4E00\u67B6\u53EA\u6709 1.8 \u516C\u65A4\u7684\u5C0F\u76F4\u5347\u673A\u30022021 \u5E74\uFF0C\u5B83\u5B8C\u6210\u4E86\u4EBA\u7C7B\u5728\u5730\u7403\u4E4B\u5916\u7684\u7B2C\u4E00\u6B21\u52A8\u529B\u98DE\u884C\u3002\u65CB\u7FFC\u4E0A\u8FD8\u8D34\u7740\u4E00\u5C0F\u5757\u83B1\u7279\u5144\u5F1F\u98DE\u673A\u7684\u5E03\u6599\u3002"}],europa:[{id:"drill",name:"\u51B0\u5C42\u94BB\u63A2\u5668",model:"drill",who:"\u6863\u6848 \xB7 \u51B0\u7A7F\u8005\u53F7",text:"2041 \u5E74\u7684\u65E0\u4EBA\u94BB\u63A2\u5668\u300C\u51B0\u7A7F\u8005\u53F7\u300D\u3002\u5B83\u94BB\u5230\u4E86\u51B0\u4E0B\u4E09\u516C\u91CC\uFF0C\u5728\u6700\u540E\u4E00\u5E27\u753B\u9762\u91CC\uFF0C\u955C\u5934\u524D\u4F3C\u4E4E\u6709\u4EC0\u4E48\u4E1C\u897F\u5728\u53D1\u5149\u2026\u2026\u7136\u540E\u4FE1\u53F7\u4E2D\u65AD\u4E86\u3002"},{id:"hydro",name:"\u65E0\u4EBA\u6C34\u542C\u7AD9",model:"probe",who:"\u6863\u6848 \xB7 \u6C34\u542C\u7AD9",text:"\u4E00\u53F0\u8FD8\u5728\u8FD0\u8F6C\u7684\u6C34\u542C\u5668\u3002\u5B83\u5F55\u5230\u4E86\u51B0\u4E0B\u6D77\u6D0B\u91CC\u67D0\u79CD\u6709\u8282\u594F\u7684\u4F4E\u9891\u58F0\u97F3\uFF0C\u5468\u671F\u662F 17 \u5206\u949F\u3002\u6CA1\u6709\u4EBA\u77E5\u9053\u90A3\u662F\u4EC0\u4E48\u3002"},{id:"galileo",name:"\u523B\u5B57\u7684\u91D1\u5C5E\u7247",model:"plate",who:"\u6863\u6848 \xB7 \u65E0\u540D",text:"\u51B0\u91CC\u51BB\u7740\u4E00\u5757\u91D1\u5C5E\u7247\uFF0C\u4E0A\u9762\u523B\u7740\u4E00\u4E2A\u65E5\u671F\uFF1A1610 \u5E74 1 \u6708 7 \u65E5\u3002\u90A3\u662F\u4F3D\u5229\u7565\u7B2C\u4E00\u6B21\u770B\u89C1\u6728\u661F\u536B\u661F\u7684\u591C\u665A\u3002\u662F\u8C01\u628A\u5B83\u5E26\u5230\u8FD9\u91CC\u7684\uFF1F"}],kepler:[{id:"monolith",name:"\u6676\u4F53\u65B9\u7891",model:"monolith",who:"\u6863\u6848 \xB7 \u672A\u77E5",text:"\u8FD9\u4E0D\u662F\u4EBA\u7C7B\u9020\u7684\u3002\u65B9\u7891\u8868\u9762\u7684\u7EB9\u8DEF\u5728\u4F60\u9760\u8FD1\u65F6\u4E00\u5708\u5708\u4EAE\u8D77\uFF0C\u50CF\u662F\u5728\u8FA8\u8BA4\u4F60\u3002\u5B83\u7684\u5E74\u9F84\u5927\u7EA6\u662F\u56DB\u5343\u4E07\u5E74\u3002"},{id:"pathfinder",name:"\u65B9\u821F\u63A2\u8DEF\u5668",model:"probe",who:"\u6863\u6848 \xB7 \u63A2\u8DEF\u8005",text:"\u4E09\u767E\u5E74\u524D\u5148\u884C\u51FA\u53D1\u7684\u65E0\u4EBA\u63A2\u8DEF\u5668\u3002\u5B83\u7684\u6700\u540E\u4E00\u6761\u65E5\u5FD7\u5199\u7740\uFF1A\u300C\u5DF2\u627E\u5230\u9002\u5B9C\u7740\u9646\u70B9\u3002\u6211\u4F1A\u5728\u8FD9\u91CC\u7B49\u4F60\u4EEC\u3002\u300D\u5B83\u7B49\u4E86\u4E00\u767E\u4E00\u5341\u4E8C\u5E74\u3002"},{id:"fossil",name:"\u5DE8\u578B\u5316\u77F3",model:"fossil",who:"\u6863\u6848 \xB7 \u5316\u77F3",text:"\u4E00\u526F\u5DE8\u5927\u7684\u9AA8\u67B6\uFF0C\u5F27\u5F62\u7684\u808B\u9AA8\u50CF\u62F1\u95E8\u4E00\u6837\u7ACB\u5728\u5730\u4E0A\u3002\u751F\u524D\uFF0C\u5B83\u53EF\u80FD\u50CF\u90A3\u4E9B\u53D1\u5149\u7684\u6C34\u6BCD\u4E00\u6837\uFF0C\u6F02\u6D6E\u5728\u8FD9\u7247\u5929\u7A7A\u91CC\u3002"}]},Wr=[],li=new de({color:8022620,roughness:.9,metalness:.3}),Yf=new de({color:13148240,roughness:.4,metalness:.8}),Zf=new de({color:15260872,roughness:.8,flatShading:!0}),Mb=new de({color:1314844,roughness:.15,metalness:.9,emissive:6308095,emissiveIntensity:.15});function Pt(n,e,t,i,s,r,o=0,a=0,l=0){let c=new le(n,e);return c.position.set(t,i,s),c.rotation.set(o,a,l),c.castShadow=!0,c.receiveShadow=!0,r.add(c),c}var _b={rover(n){Pt(new We(1.6,.5,2.2),li,0,.9,0,n,0,0,.08);for(let e of[-1,1])Pt(new We(1.4,.05,1.6),M.solar,e*1.4,1.1,0,n,0,0,e*.25);Pt(new et(.05,.05,1.2,6),li,.4,1.7,-.7,n),Pt(new We(.3,.2,.25),li,.4,2.35,-.7,n,0,0,.3);for(let e of[-.9,0,.9])for(let t of[-1,1])Pt(new et(.28,.28,.22,10),M.dark,t*.95,.3,e,n,0,0,Math.PI/2)},rover2(n){Pt(new We(1.4,.45,1.8),li,0,.5,0,n,.25,.4,.4),Pt(new We(1.2,.05,1.1),M.solar,.9,.35,.3,n,.1,0,-.6),Pt(new et(.28,.28,.22,10),M.dark,-1.2,.25,.8,n,.4,0,1.2)},lander(n){Pt(new et(1,1.1,.6,6),Yf,0,1,0,n);for(let e=0;e<3;e++){let t=e*Math.PI*2/3;Pt(new et(.06,.06,1.4,5),li,Math.cos(t)*1.1,.5,Math.sin(t)*1.1,n,Math.sin(t)*.4,0,-Math.cos(t)*.4)}Pt(new et(.6,.6,.05,16),M.white,0,1.6,.3,n,.6,0,0),Pt(new We(.2,.9,.2),li,-.5,1.7,-.3,n)},heli(n){Pt(new We(.25,.2,.25),Yf,0,.45,0,n),Pt(new et(.02,.02,.5,4),li,0,.75,0,n),Pt(new We(1.2,.02,.08),li,0,.9,0,n,0,.5,0),Pt(new We(1.2,.02,.08),li,0,.98,0,n,0,-.4,0);for(let e=0;e<4;e++){let t=e*Math.PI/2+.6;Pt(new et(.015,.015,.5,4),li,Math.cos(t)*.2,.2,Math.sin(t)*.2,n,Math.sin(t)*.5,0,-Math.cos(t)*.5)}n.scale.setScalar(2.2)},drill(n){Pt(new et(.5,.7,1.4,8),li,0,.7,0,n),Pt(new et(.15,.15,4,8),M.metal,0,2.6,0,n,.15,0,0);for(let e=0;e<3;e++){let t=e*Math.PI*2/3;Pt(new We(.15,3,.15),li,Math.cos(t)*.9,1.4,Math.sin(t)*.9,n,Math.sin(t)*.25,0,-Math.cos(t)*.25)}},probe(n){Pt(new Ge(.8,12,8),M.white,0,.9,0,n),Pt(new Ye(.85,.08,6,20),M.orange,0,.9,0,n,Math.PI/2,0,0),Pt(new et(.03,.03,1.6,4),M.metal,0,2.2,0,n),Pt(new zt(.5,.3,12,1,!0),M.white,0,3,0,n,Math.PI,0,0)},plate(n){Pt(new We(1.2,.8,.06),Yf,0,.5,0,n,-.5,0,.1),Pt(new ii(.9,0),new de({color:13627135,transparent:!0,opacity:.6,roughness:.05}),0,.4,0,n)},monolith(n){Pt(new We(1.4,7,.5),Mb,0,3.5,0,n,0,0,.04),n.userData.rings=[];for(let e=0;e<3;e++){let t=Pt(new Ye(1.4+e*.4,.04,6,32),new it({color:9075455,transparent:!0,opacity:.6}),0,2+e*1.6,0,n,Math.PI/2,0,0);n.userData.rings.push(t)}},fossil(n){for(let e=0;e<9;e++){let t=Pt(new Ye(3-Math.abs(e-4)*.35,.18,6,16,Math.PI),Zf,0,0,-6+e*1.5,n);t.rotation.y=0}Pt(new et(.25,.15,14,6),Zf,0,3,0,n,Math.PI/2,0,0),Pt(new ii(1.4,0),Zf,0,2.6,-8,n)}};function dx(){let n=Yn(tt.length*977+5),e=vb[tt]||[];e.forEach((t,i)=>{let s=0,r=0;for(let l=0;l<200;l++){let c=i/e.length*Math.PI*2+n()*1.2,h=160+n()*220;if(s=Math.cos(c)*h,r=Math.sin(c)*h,Math.abs(s)<je-180&&Math.abs(r)<je-180&&Dr(s,r,3)<.35&&!d.colliders.overlaps(s,r,6))break}let o=new we;_b[t.model](o),o.position.set(s,ve(s,r)-.15,r),o.rotation.y=n()*6.28;let a=Pe(16765578,3,d.scene,s,ve(s,r)+4,r);d.scene.add(o),d.colliders.add({x:s,z:r,r:t.model==="fossil"?3:1.4,kind:"relic"}),Wr.push({...t,x:s,z:r,g:o,beacon:a,found:(d.relicsFound||[]).includes(t.id)})})}function fx(n){let e=null,t=1e9;for(let i of Wr){if(i.found)continue;let s=Math.hypot(i.x-n.x,i.z-n.z);s<t&&(t=s,e=i)}return e?{r:e,d:t}:null}function px(n){return Wr.find(e=>!e.found&&Math.hypot(e.x-n.x,e.z-n.z)<6)}function qi(){return{found:Wr.filter(n=>n.found).length,total:Wr.length}}function mx(){return Wr}function gx(n){n.found=!0,d.relicsFound=[...new Set([...d.relicsFound||[],n.id])],Ft(n.who,n.text),d.res.titanium+=8,d.res.silicon+=15,d.events.emit("pickup",{type:"titanium",n:8,note:n.name}),d.events.emit("toast",`\u2713 \u53D1\u73B0\u9057\u8FF9\uFF1A${n.name}`),J.play("objective"),Me.burst(new T(n.x,ve(n.x,n.z)+2,n.z),[1,.85,.5],60,8)}function xx(n){let e=performance.now()*.001;for(let t of Wr)t.beacon.visible=!t.found,t.beacon.material.opacity=.5+Math.sin(e*2+t.x)*.3,t.g.userData.rings&&t.g.userData.rings.forEach((i,s)=>{i.rotation.z=e*(.3+s*.2),i.material.opacity=(t.found?.8:.3)+Math.sin(e*2+s)*.2})}var Se=n=>document.getElementById(n),ep,tp,me,ca={},np={mars:"MARS",europa:"EUROPA",kepler:"KEPLER-442b"},Eb=["I","II","III","IV","V","VI"];function Sx(n){ep=n,document.body.insertAdjacentHTML("afterbegin",hx()),tp=Se("minimap"),me=tp.getContext("2d"),Se("pl-cn").textContent=he.name,Se("kick-planet").textContent=np[tt],Se("hotbar").innerHTML=hr.map((e,t)=>`<div class="slot" data-i="${t}"><span class="key">${t+1}</span><span class="ic">${pt(e.icon)}</span><span class="nm">${e.name}</span></div>`).join(""),Se("res").innerHTML=Object.entries(mn).map(([e,t])=>`<div class="r" id="r-${e}" style="--rc:${t.color}"><span class="ic">${pt(e)}</span><span class="tx"><small>${t.name}</small><b>0</b></span></div>`).join(""),d.events.on("toast",e=>Zt(e)),d.events.on("pickup",e=>wb(e)),document.querySelectorAll("[data-close]").forEach(e=>e.addEventListener("click",()=>{J.play("ui"),On(!0)})),document.querySelectorAll(".menu button, .bp-tabs button").forEach(e=>e.addEventListener("mouseenter",()=>J.play("tick")));try{ca=ux(Lf.filter(e=>!$i(e).hide))}catch{ca={}}}var yx={"\u2713":["check","good"],"\u26A0":["warn","warn"],"\u{1F527}":["wrench",""],"\u2600":["sun",""],"\u2604":["meteor",""],"\u{1F680}":["ship",""]};function Zt(n,e="radio",t=""){let i=[...n][0];if(yx[i]&&([e,t]=yx[i],n=n.slice(i.length).trim()),t==="warn"||e==="boss")return bb(n,e,t);let s=Se("log"),r=[...s.children].find(a=>a.dataset.t===n&&!a.classList.contains("out"));if(r){let a=(+r.dataset.n||1)+1;r.dataset.n=a,r.querySelector("em").textContent="\xD7"+a,clearTimeout(r._to),r._to=setTimeout(()=>ip(r),5e3);return}let o=document.createElement("div");for(o.className="ev "+t,o.dataset.t=n,o.innerHTML=`${pt(e)}<span>${n}</span><em></em>`,s.appendChild(o);s.children.length>3;)s.firstChild.remove();o._to=setTimeout(()=>ip(o),5e3)}function ip(n){n.classList.add("out"),setTimeout(()=>n.remove(),600)}var vx,Mx=0,_x=0;function bb(n,e,t){let i=e==="boss"?2:1,s=performance.now();if(i<Mx&&s<_x){let o=Se("log"),a=document.createElement("div");for(a.className="ev warn",a.innerHTML=`${pt(e==="radio"?"warn":e)}<span>${n}</span><em></em>`,o.appendChild(a);o.children.length>3;)o.firstChild.remove();setTimeout(()=>ip(a),5e3);return}Mx=i,_x=s+4500;let r=Se("alert");r.className="show "+(t==="good"?"good":""),r.innerHTML=`${pt(e==="radio"?"warn":e)}<span>${n}</span>`,J.play("alarm"),clearTimeout(vx),vx=setTimeout(()=>{r.className=""},4500)}var Kf={};function wb({type:n,n:e,note:t}){J.play("pickup");let i=Kf[n];i&&i.el.isConnected?(i.n+=e,clearTimeout(i.to)):(i=Kf[n]={n:e,el:document.createElement("div")},i.el.className="feed",Se("feed").appendChild(i.el));let s=mn[n];i.el.style.setProperty("--rc",s.color),i.el.innerHTML=`<span class="nm">${t||s.name}</span>${pt(n)}<span class="q">+${i.n}</span>`,i.el.classList.remove("out"),i.to=setTimeout(()=>{i.el.classList.add("out"),setTimeout(()=>{i.el.remove(),delete Kf[n]},500)},1800);let r=Se("r-"+n);r.classList.remove("flash"),r.offsetWidth,r.classList.add("flash")}var fh=[],Jf=!1;function $r(n){if(Jf){fh.length=0,fh.push(n);return}Jf=!0,setTimeout(()=>{Jf=!1,fh.length&&$r(fh.shift())},5200);let e=Se("chapter"),t=ai.indexOf(n),i=n.k||(t>=0?`CHAPTER ${String(t+1).padStart(2,"0")}`:""),s=n.title.replace(/^第.章 · |^终章 · /,"");e.innerHTML=`<div class="k">${i}</div><div class="t">${s}</div><div class="ln"></div><div class="s">${n.sub}</div>`,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}var Sb=["build","craft","pause","starmap","archive","research","trade"];function As(n){On(!1),d.menuOpen=n,Se(n).classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),J.play("open"),n==="build"&&rp(),n==="craft"&&cp(),n==="research"&&mh(),n==="trade"&&pl(),n==="archive"&&(Se("archive-body").innerHTML=hp()),n==="pause"&&(Se("pause-pane").innerHTML="")}function On(n){Sb.forEach(t=>Se(t).classList.add("hidden"));let e=d.menuOpen;d.menuOpen=!1,e==="build"&&!bt.type&&(sn.index=0),n&&d.requestLock()}function ap(n){Se("pause-pane").innerHTML=n}var sp={all:"\u5168\u90E8",life:"\u751F\u5B58",city:"\u57CE\u5E02",industry:"\u5DE5\u4E1A",defense:"\u9632\u5FA1",stellar:"\u661F\u9645"},ph="all",dr=null;function Tx(n){Se(n).innerHTML=Object.entries(mn).map(([e,t])=>`<span style="--rc:${t.color}">${pt(e)}${d.res[e]}</span>`).join("")}function Ax(n){return`<div class="need">${Object.entries(n).map(([e,t])=>`<div class="row ${d.res[e]>=t?"":"lack"}" style="--rc:${mn[e].color}">${pt(e)}<span class="nm">${mn[e].name}</span>${Math.floor(d.res[e])} / ${t}</div>`).join("")}</div>`}function rp(){Tx("bp-res");let n=Lf.filter(i=>!$i(i).hide),e=["all",...Object.keys(sp).filter(i=>i!=="all"&&n.some(s=>Tn[s].cat===i))];Se("bp-tabs").innerHTML=e.map(i=>`<button data-c="${i}" class="${i===ph?"on":""}">${sp[i]}</button>`).join(""),Se("bp-tabs").querySelectorAll("button").forEach(i=>i.addEventListener("click",()=>{ph=i.dataset.c,J.play("tick"),rp()}));let t=n.filter(i=>ph==="all"||Tn[i].cat===ph);(!dr||!t.includes(dr))&&(dr=t.find(i=>$i(i).ok)||t[0]),Se("build-list").innerHTML=t.map(i=>{let s=Tn[i],r=$i(i),o=_i(s.cost);return`<div class="tile ${r.ok?"":"locked"} ${o?"":"poor"} ${i===dr?"sel":""}" data-k="${i}">
      <div class="th">${ca[i]?`<img src="${ca[i]}" alt="">`:pt(s.icon)}</div>
      ${r.ok?"":`<div class="lk">${pt("lock")}</div>`}
      <div class="nm">${s.name}</div><div class="cs">${r.ok?Ho(s.cost):""}</div></div>`}).join(""),Se("build-list").querySelectorAll(".tile").forEach(i=>{i.addEventListener("click",()=>{dr=i.dataset.k,J.play("tick"),rp()}),i.addEventListener("dblclick",()=>lp(i.dataset.k))}),Ab()}function Tb(n){let e=Tn[n],t=$i(n);return tt==="mars"&&e.chapter>d.chapter?`\u5728\u300C${ai[e.chapter].title}\u300D\u89E3\u9501`:t.why}function Ab(){let n=dr;if(!n){Se("bp-detail").innerHTML="";return}let e=Tn[n],t=$i(n),i=_i(e.cost),s=[];e.power&&s.push(["\u7535\u529B",`${e.power>0?"+":""}${e.power}`,e.power>0?"pos":"neg"]),e.housing&&s.push(["\u4F4F\u623F",`${e.housing} \u4EBA`]),e.o2&&s.push(["\u4F9B\u6C27",`${e.o2} \u4EBA`]),e.food&&s.push(["\u98DF\u7269",`${e.food} \u4EBA`]),e.water&&s.push(["\u7528\u6C34",`${e.water} \u4EBA`]),e.life&&s.push(["\u8865\u6C27\u534A\u5F84",`${e.life} m`]),e.range&&s.push(["\u5C04\u7A0B",`${e.range} m`]),s.push(["\u8010\u4E45",e.hp]),Se("bp-detail").innerHTML=`<div class="pv">${ca[n]?`<img src="${ca[n]}" alt="">`:pt(e.icon)}</div>
    <div class="cat">${sp[e.cat]||""} \xB7 BLUEPRINT</div><h3>${e.name}</h3>
    <div class="ds">${e.desc}</div>
    <div class="stats">${s.map(r=>`<div><small>${r[0]}</small><b class="${r[2]||""}">${r[1]}</b></div>`).join("")}</div>
    ${t.ok?Ax(e.cost):`<div class="why">${pt("lock")} ${Tb(n)}</div>`}
    <button class="go" ${t.ok?"":"disabled"}>${t.ok?i?"\u5F00\u59CB\u5EFA\u9020":"\u653E\u7F6E\u84DD\u56FE\uFF08\u8D44\u6E90\u4E0D\u8DB3\uFF09":"\u5C1A\u672A\u89E3\u9501"}</button>`,Se("bp-detail").querySelector(".go").addEventListener("click",()=>lp(n))}function lp(n){let e=Tn[n];if(!$i(n).ok){J.play("deny");return}J.play("ui"),bt.rot=0,Or(n),sn.index=2,On(!0),_i(e.cost)||Zt("\u8D44\u6E90\u4E0D\u8DB3\uFF0C\u653E\u7F6E\u524D\u5148\u53BB\u91C7\u96C6\u5427","warn","warn")}function Rx(n){d.menuOpen==="build"&&n.code==="Enter"&&dr&&lp(dr),d.menuOpen==="craft"&&n.code==="Enter"&&Yi&&op(Yi)}var Yi=null;function cp(){Tx("cr-res");let n=Object.keys(Qo);Yi||(Yi=n.find(s=>!d.upgrades[s])||n[0]),Se("craft-list").innerHTML=n.map(s=>{let r=Qo[s],o=d.upgrades[s],a=_i(r.cost),l=r.need&&!d.upgrades[r.need];return`<div class="tile ${o?"done":""} ${a&&!l?"":"poor"} ${s===Yi?"sel":""}" data-k="${s}">
      ${o?'<span class="tag">\u5DF2\u88C5\u5907</span>':""}
      <div class="th">${pt(r.icon)}</div><div class="nm">${r.name}</div><div class="cs">${o?"":Ho(r.cost)}</div></div>`}).join(""),Se("craft-list").querySelectorAll(".tile").forEach(s=>{s.addEventListener("click",()=>{Yi=s.dataset.k,J.play("tick"),cp()}),s.addEventListener("dblclick",()=>op(s.dataset.k))});let e=Qo[Yi],t=d.upgrades[Yi],i=e.need&&!d.upgrades[e.need];Se("craft-detail").innerHTML=`<div class="pv">${pt(e.icon)}</div><div class="cat">EQUIPMENT</div><h3>${e.name}</h3>
    <div class="ds">${e.desc}</div>
    ${t?'<div class="why okc">\u5DF2\u5236\u9020\u5E76\u88C5\u5907</div>':i?`<div class="why">${pt("lock")} \u9700\u8981\u5148\u5236\u9020\u7B49\u79BB\u5B50\u6B65\u67AA</div>`:Ax(e.cost)}
    <button class="go" ${t||i||!_i(e.cost)?"disabled":""}>${t?"\u5DF2\u88C5\u5907":_i(e.cost)?"\u5236\u9020":"\u8D44\u6E90\u4E0D\u8DB3"}</button>`,Se("craft-detail").querySelector(".go").addEventListener("click",()=>op(Yi))}function op(n){let e=Qo[n];if(d.upgrades[n]||e.need&&!d.upgrades[e.need]||!_i(e.cost)){J.play("deny");return}Wa(e.cost),d.upgrades[n]=!0,d.stats.crafted[n]=!0,J.play("craft"),Zt(`\u5236\u9020\u5B8C\u6210\uFF1A${e.name}`,e.icon,"good"),n==="tank"&&(d.player.o2=180),n==="rifle"&&(sn.index=1),d.events.emit("crafted",n),Yi=Object.keys(Qo).find(t=>!d.upgrades[t])||n,cp()}var ha={unlocked:()=>!0,relicLeft:()=>!1,relicFound:()=>0},Ss=null;function mh(){Se("rs-res").innerHTML=`<span style="--rc:var(--cyan)">${pt("book")}${Math.floor(d.rp||0)} \u79D1\u7814\u70B9</span><span style="--rc:var(--dim)"><small>+${jc().toFixed(2)}/\u79D2</small></span>`;let n=Object.keys(qo);Ss||(Ss=n.find(r=>!kt(r))||n[0]),Se("research-list").innerHTML=n.map(r=>{let o=qo[r],a=kt(r),l=(d.rp||0)>=o.cost;return`<div class="tile ${a?"done":""} ${l||a?"":"poor"} ${r===Ss?"sel":""}" data-k="${r}">${a?'<span class="tag">\u5DF2\u5B8C\u6210</span>':""}
      <div class="th">${pt(o.icon)}</div><div class="nm">${o.name}</div><div class="cs"><span class="cost ${l?"":"lack"}" style="--rc:var(--cyan)">${pt("book")}${o.cost}</span> <small>${o.cat}</small></div></div>`}).join(""),Se("research-list").querySelectorAll(".tile").forEach(r=>{r.addEventListener("click",()=>{Ss=r.dataset.k,J.play("tick"),mh()}),r.addEventListener("dblclick",()=>{Tf(r.dataset.k)&&mh()})});let e=qo[Ss],t=kt(Ss),i=(d.rp||0)>=e.cost,s=d.buildings.some(r=>r.type==="lab");Se("research-detail").innerHTML=`<div class="pv">${pt(e.icon)}</div><div class="cat">${e.cat} \xB7 TECHNOLOGY</div><h3>${e.name}</h3>
    <div class="ds">${e.desc}</div>
    ${s?"":'<div class="why">\u5EFA\u9020\u7814\u7A76\u6240\u6765\u4EA7\u51FA\u79D1\u7814\u70B9\u6570</div>'}
    <div class="need"><div class="row ${i||t?"":"lack"}" style="--rc:var(--cyan)">${pt("book")}<span class="nm">\u79D1\u7814\u70B9\u6570</span>${Math.floor(d.rp||0)} / ${e.cost}</div></div>
    <button class="go" ${t||!i?"disabled":""}>${t?"\u5DF2\u5B8C\u6210":i?"\u5F00\u59CB\u7814\u7A76":"\u79D1\u7814\u70B9\u6570\u4E0D\u8DB3"}</button>`,Se("research-detail").querySelector(".go").addEventListener("click",()=>{Tf(Ss)&&(Ss=Object.keys(qo).find(r=>!kt(r))||Ss,mh())})}var ur="iron",Ts="silicon",aa=10;function pl(){Se("tr-res").innerHTML=Object.entries(mn).map(([t,i])=>`<span style="--rc:${i.color}">${pt(t)}${Math.floor(d.res[t])}</span>`).join("");let n=t=>Object.entries(mn).map(([i,s])=>`<button class="rs ${i===t?"on":""}" data-k="${i}" style="--rc:${s.color}">${pt(i)}<span>${s.name}</span><b>${Math.floor(d.res[i])}</b></button>`).join(""),e=Af(ur,Ts,aa);Se("trade-body").innerHTML=`<div class="tcol"><h4>\u4EA4\u51FA</h4><div class="rsl" id="tr-from">${n(ur)}</div></div>
    <div class="tmid"><div class="amt">${[10,25,50,100].map(t=>`<button class="${t===aa?"on":""}" data-n="${t}">${t}</button>`).join("")}</div>
      <div class="deal"><span style="--rc:${mn[ur].color}">${pt(ur)}${aa}</span><i>\u2192</i><span style="--rc:${mn[Ts].color}">${pt(Ts)}${e}</span></div>
      <div class="note2">\u6C47\u7387\u6309\u5730\u7403\u5E02\u573A\u4EF7\u8BA1\u7B97\uFF0C\u542B 20% \u8FD0\u8F93\u635F\u8017</div>
      <button class="go" ${ur===Ts||e<=0||d.res[ur]<aa?"disabled":""}>\u4EA4\u6613</button></div>
    <div class="tcol"><h4>\u6362\u53D6</h4><div class="rsl" id="tr-to">${n(Ts)}</div></div>`,Se("tr-from").querySelectorAll(".rs").forEach(t=>t.addEventListener("click",()=>{ur=t.dataset.k,J.play("tick"),pl()})),Se("tr-to").querySelectorAll(".rs").forEach(t=>t.addEventListener("click",()=>{Ts=t.dataset.k,J.play("tick"),pl()})),Se("trade-body").querySelectorAll(".amt button").forEach(t=>t.addEventListener("click",()=>{aa=+t.dataset.n,J.play("tick"),pl()})),Se("trade-body").querySelector(".go").addEventListener("click",()=>{let t=gg(ur,Ts,aa);t&&Zt(`\u4EA4\u6613\u5B8C\u6210\uFF1A\u83B7\u5F97${mn[Ts].name} ${t}`,Ts,"good"),pl()})}function hp(){let n=d.colony,e=d.stats,t=e.mined.iron+e.mined.silicon+e.mined.ice+e.mined.titanium,i=[["\u4EBA\u53E3",n.pop],["\u57CE\u5E02\u7B49\u7EA7",Dn[d.cityLevel].name],["\u8BBE\u65BD",d.buildings.length],["\u706B\u661F\u65E5",d.time.day],["\u7535\u529B",`${Math.round(n.powerProd)} / ${n.powerUse}`],["\u9057\u8FF9",`${qi().found} / ${qi().total}`],["\u53EF\u5BB9\u7EB3",n.support],["\u91C7\u96C6\u8D44\u6E90",t],["\u51FB\u9000\u9508\u8680\u86DB",e.kills],["\u884C\u9A76\u91CC\u7A0B",`${((e.driven||0)/1e3).toFixed(1)} km`],["\u5C45\u6C11\u4EA4\u8C08",(e.talked||[]).length]],s=hn.visited||[],r=Object.keys(Ln).map(l=>{let c=l===tt?{pop:n.pop}:s.find(h=>h.id===l);return`<div><small>${Ln[l].name}</small><b>${c?c.pop+" \u4EBA":"\u2014"}</b></div>`}).join(""),o=d.colonists.map(l=>`<div class="person"><span class="pn">${l.name}</span><span class="pj">${l.job}</span><div class="pl">\u201C${l.line}\u201D</div></div>`).join(""),a=n.pop-d.colonists.length;return`<h3>\u6982\u51B5 \xB7 ${he.name}</h3><div class="kv">${i.map(l=>`<div><small>${l[0]}</small><b>${l[1]}</b></div>`).join("")}</div>
    <h3>\u4EBA\u7C7B\u7684\u8DB3\u8FF9</h3><div class="kv">${r}<div><small>\u661F\u9645\u603B\u4EBA\u53E3</small><b>${s.filter(l=>l.id!==tt).reduce((l,c)=>l+c.pop,0)+n.pop}</b></div></div>
    <h3>\u5C45\u6C11\u540D\u518C</h3>${o?`<div class="people">${o}</div>`:'<p style="color:var(--dim)">\u8FD8\u6CA1\u6709\u5C45\u6C11\u3002\u5EFA\u597D\u4F4F\u623F\u3001\u6C27\u6C14\u3001\u98DF\u7269\u3001\u6C34\u548C\u7740\u9646\u573A\uFF0C\u79FB\u6C11\u98DE\u8239\u5C31\u4F1A\u5230\u6765\u3002</p>'}
    ${a>0?`<p style="color:var(--dim);margin-top:14px">\u2026\u2026\u4EE5\u53CA\u53E6\u5916 ${a} \u4F4D\u5C45\u6C11\u3002</p>`:""}`}var jf=0,Ex="",la=0,bx="";function up(n,e){let t=d.player,i=d.colony;if(jf-=n,jf<=0){jf=.2;for(let P in mn)Se("r-"+P).querySelector("b").textContent=Math.floor(d.res[P]);let p=cg(),g=Dn[d.cityLevel],y=p?Math.min(1,Math.min(i.pop/p.pop,d.buildings.length/Math.max(1,p.b))):1,x=`<span class="lv">LV.${Eb[d.cityLevel]}</span><span class="nm">${g.name}</span>${p?`<div class="pg"><i style="width:${y*100}%"></i></div><div class="nx">\u4E0B\u4E00\u7EA7\u300C${p.name}\u300D\xB7 \u4EBA\u53E3 ${Math.min(i.pop,p.pop)}/${p.pop} \xB7 \u8BBE\u65BD ${Math.min(d.buildings.length,p.b)}/${p.b}</div>`:'<div class="nx">\u5DF2\u8FBE\u5230\u6700\u9AD8\u7B49\u7EA7</div>'}`;Se("city").dataset.k!==x&&(Se("city").dataset.k=x,Se("city").innerHTML=x);let m="";if(d.buildings.length&&(m+=`<div class="st ${i.deficit?"warn":""}">${pt("power")}<div><small>\u7535\u529B</small><b>${Math.round(i.powerProd)}<em>/${i.powerUse}</em></b></div></div>`,m+=`<div class="st">${pt("pop")}<div><small>\u4EBA\u53E3</small><b>${i.pop}<em>/${i.support}</em></b></div></div>`,d.terraform>0&&(m+=`<div class="st tf">${pt("planet")}<div><small>\u5927\u6C14\u6539\u9020</small><b>${Math.floor(d.terraform*100)}%</b></div></div>`),i.deficit&&(m+=`<div class="chip">${pt("warn")}\u7535\u529B\u4E0D\u8DB3\uFF1A\u591A\u5EFA\u592A\u9633\u80FD\u6216\u53CD\u5E94\u5806</div>`),i.housing&&d.buildings.some(P=>P.type==="beacon")&&i.support<=i.pop)){let P=[["housing","\u4F4F\u623F","house","\u5C45\u4F4F\u7A79\u9876"],["o2","\u6C27\u6C14","o2","\u5236\u6C27\u7AD9"],["food","\u98DF\u7269","food","\u6E29\u5BA4"],["water","\u6C34","water","\u6C34\u51B0\u63D0\u53D6\u5668"]].sort((w,b)=>i[w[0]]-i[b[0]])[0];m+=`<div class="chip">${pt(P[2])}\u7F3A\u5C11${P[1]}\uFF1A\u5EFA\u9020${P[3]}\u6765\u8FCE\u63A5\u65B0\u79FB\u6C11</div>`}Se("colony").dataset.k!==m&&(Se("colony").dataset.k=m,Se("colony").innerHTML=m);let _=d.storm>.3?"\u6C99\u5C18\u66B4":d.raining?"\u964D\u96E8":"";Se("clock").innerHTML=vf().replace(/^.*? · /,"")+(_?`<span class="wx">${_}</span>`:"");let E=ai[d.chapter],v=d.chapter,R=(Fn()?[]:E.goals).map((P,w)=>{let b=d.goalDone?.[v+":"+w],D=P.prog&&!b?P.prog():"",B=/^(\d+)\/(\d+)$/.exec(D);return`<div class="g ${b?"done":""}"><span class="cb"></span><div class="gx">${P.text}${D?`<small>${D}</small>`:""}${B?`<div class="gp"><i style="width:${Math.min(100,B[1]/B[2]*100)}%"></i></div>`:""}</div></div>`}).join(""),I=d.requests||[];I.length?R+='<div class="rq-h">\u5C45\u6C11\u59D4\u6258</div>'+I.map(P=>{let w=vg(P,ha);return`<div class="g rq"><span class="cb"></span><div class="gx">${P.text}<small>${P.giver}${P.n>1?` \xB7 ${w}/${P.n}`:""}</small>${P.n>1?`<div class="gp"><i style="width:${w/P.n*100}%"></i></div>`:""}</div></div>`}).join(""):Fn()&&(R+='<div class="g"><div class="gx" style="color:var(--dim)">\u5148\u5EFA\u4E00\u5EA7\u8BBE\u65BD\uFF0C\u5C45\u6C11\u4EEC\u4F1A\u5F00\u59CB\u63D0\u51FA\u59D4\u6258</div></div>'),(d.rp>.5||d.buildings.some(P=>P.type==="lab"))&&(R+=`<div class="rq-h">\u79D1\u7814 <b>${Math.floor(d.rp)}</b> \u70B9 <small>+${jc().toFixed(1)}/\u79D2 \xB7 T \u6253\u5F00</small></div>`),R!==bx&&(bx=R,Se("goals").innerHTML=R,Se("goal-ch").textContent=Fn()?`\u81EA\u7531\u6A21\u5F0F \xB7 ${Xo[d.diffKey||"normal"].name}`:E.title.replace(/ · /," ")),document.querySelectorAll("#hotbar .slot").forEach((P,w)=>{P.classList.toggle("on",w===sn.index),P.classList.toggle("lock",!!(hr[w].need&&!d.upgrades[hr[w].need]))})}Qf("d-hp",70,t.health/t.maxHealth),Qf("d-o2",58,t.o2/t.maxO2),Qf("d-en",47,t.energy/100),Se("d-o2n").textContent=Math.ceil(t.o2/t.maxO2*100),Se("d-hpn").textContent=Math.ceil(t.health),Se("d-enn").textContent=Math.ceil(t.energy),Se("pl-en").textContent=vf().split(" \xB7 ")[0]===he.name?np[tt]:np[tt];let s=Se("o2-state"),r=t.inLife?`${pt("o2")} \u8865\u6C27\u4E2D`:t.o2<t.maxO2*.2?`${pt("warn")} \u6C27\u6C14\u4E0D\u8DB3\uFF0C\u7ACB\u5373\u8FD4\u56DE`:"";s.dataset.k!==r&&(s.dataset.k=r,s.innerHTML=r),s.className=t.inLife?"ok":"bad",Se("suit").classList.toggle("low",t.o2<t.maxO2*.2&&!t.inLife);let o=Bg(),a=Se("radio");if(o){Ex!==o[1]&&(Ex=o[1],la=0,a.querySelector(".who").textContent=o[0]);let p=o[1].length;la<p&&(la=Math.min(p,la+n*26+1e-4),n===0&&(la=p));let g=Math.floor(la);a.querySelector(".txt").innerHTML=o[1].slice(0,g)+(g<p?'<span class="cur"></span>':""),a.classList.toggle("idle",g>=p),a.classList.add("show")}else a.classList.remove("show");let l=Se("prompt");l.dataset.k!==(e.prompt||"")&&(l.dataset.k=e.prompt||"",l.innerHTML=e.prompt||""),l.classList.toggle("show",!!e.prompt),l.classList.toggle("drive",!!d.driving);let c=Se("buildhint");if(sn.id==="build"&&bt.type&&!d.menuOpen){let p=Tn[bt.type];c.innerHTML=`<div class="bn">${p.name}</div><div>${Ho(p.cost)}</div>
      <div class="st">${bt.valid?'<span class="okc">\u5DE6\u952E\u653E\u7F6E</span>':`<span class="badc">${bt.reason}</span>`}</div>
      <div><kbd>R</kbd>\u65CB\u8F6C <kbd>\u53F3\u952E</kbd>\u53D6\u6D88 <kbd>B</kbd>\u66F4\u6362\u84DD\u56FE</div>`,c.classList.add("show")}else c.classList.remove("show");Se("hurt").style.opacity=Math.min(1,t.hurtT*1.6+(t.o2<=0?.5+Math.sin(performance.now()*.01)*.2:0)),Se("lowo2").style.opacity=!t.inLife&&t.o2<t.maxO2*.2?(.4+Math.sin(performance.now()*.006)*.3)*(1-t.o2/(t.maxO2*.2)*.6):0,Se("crosshair").className=e.crossClass||"";let h=Se("tip");h.dataset.k!==(e.tip||"")&&(h.dataset.k=e.tip||"",h.innerHTML=e.tip?`<div class="tk">\u63D0\u793A</div><div>${e.tip}</div>`:""),h.classList.toggle("show",!!e.tip);let u=Zg(),f=u&&Math.hypot(u.pos.x-t.pos.x,u.pos.z-t.pos.z)<260;Se("bossbar").classList.toggle("hidden",!f),f&&(Se("bossbar").querySelector("i").style.width=Math.max(0,u.hp/u.maxHp*100)+"%"),Rb(),Cb()}function Qf(n,e,t){let i=2*Math.PI*e,s=Se(n);s.style.strokeDasharray=i,s.style.strokeDashoffset=i*(1-Math.max(0,Math.min(1,t)))}var wx={0:"\u5317",45:"\u4E1C\u5317",90:"\u4E1C",135:"\u4E1C\u5357",180:"\u5357",225:"\u897F\u5357",270:"\u897F",315:"\u897F\u5317"};function Rb(){let n=d.player,e=n.fwd,t=Math.atan2(e.x,-e.z)*180/Math.PI,i=80,s=520,r=u=>s/2+u/i*(s/2),o="",a=Math.ceil((t-i)/5)*5;for(let u=a;u<=t+i;u+=5){let f=u-t,p=(u%360+360)%360;wx[p]!==void 0?o+=`<span class="lb ${p%90===0?"big":""}" style="left:${r(f)}px">${wx[p]}</span>`:o+=`<span class="tk ${p%15===0?"m":""}" style="left:${r(f)}px"></span>`}let l=(u,f)=>Math.atan2(u-n.pos.x,-(f-n.pos.z))*180/Math.PI,c=[{c:"home",t:`${pt("house")}${Math.round(Math.hypot(mt.x-n.pos.x,mt.z-n.pos.z))}m`,a:l(mt.x,mt.z)}];if(d.upgrades.scanner){let u=null,f=1e9;for(let p of d.nodes)if(p.type==="titanium"){let g=Math.hypot(p.x-n.pos.x,p.z-n.pos.z);g<f&&(f=g,u=p)}u&&c.push({c:"ti",t:`${pt("titanium")}${Math.round(f)}m`,a:l(u.x,u.z)})}let h=fx(n.pos);h&&c.push({c:"ship",t:`? ${Math.round(h.d)}m`,a:l(h.r.x,h.r.z)});for(let u of c){let f=(u.a-t+540)%360-180;Math.abs(f)<i&&(o+=`<span class="mk ${u.c}" style="left:${r(f)}px;top:16px">${u.t}</span>`)}Se("compass").innerHTML=o}function Cb(){let n=d.player,e=tp.width,t=e/2-6,i=d.upgrades.scanner?220:110,s=ep.width/Sn;me.clearRect(0,0,e,e),me.save(),me.beginPath(),me.arc(e/2,e/2,t,0,Math.PI*2),me.clip(),me.fillStyle="#0c0807",me.fillRect(0,0,e,e),me.globalAlpha=.75;let r=t*2/(i*2);me.drawImage(ep,(n.pos.x-i+Sn/2)*s,(n.pos.z-i+Sn/2)*s,i*2*s,i*2*s,e/2-t,e/2-t,t*2,t*2),me.globalAlpha=1;let o=f=>(f-n.pos.x)*r+e/2,a=f=>(f-n.pos.z)*r+e/2;me.strokeStyle="rgba(255,255,255,.1)",me.lineWidth=1;for(let f of[.33,.66])me.beginPath(),me.arc(e/2,e/2,t*f,0,Math.PI*2),me.stroke();me.strokeStyle="rgba(127,230,255,.55)",me.setLineDash([3,4]),me.beginPath(),me.arc(o(wi.x),a(wi.z),Dn[d.cityLevel].r*r,0,Math.PI*2),me.stroke(),me.setLineDash([]);let l=(f,p,g,y)=>{me.fillStyle=y,me.beginPath(),me.arc(o(f),a(p),g,0,Math.PI*2),me.fill()};for(let f of d.nodes){if(Math.abs(f.x-n.pos.x)>i||Math.abs(f.z-n.pos.z)>i)continue;let p=mn[f.type].color,g=o(f.x),y=a(f.z),x=f.type==="titanium"?3.2:2.2;me.fillStyle=p,me.beginPath(),me.moveTo(g,y-x),me.lineTo(g+x,y),me.lineTo(g,y+x),me.lineTo(g-x,y),me.fill()}for(let f of d.buildings){let p=Math.max(2,f.def.r*r*.8);me.fillStyle=f.broken?"#ff5a45":f.powered?"#ece6dc":"#ffb35c",me.fillRect(o(f.x)-p,a(f.z)-p,p*2,p*2)}me.fillStyle="#8dffb0";for(let f of d.colonists)me.fillRect(o(f.pos.x)-1,a(f.pos.z)-1,2,2);let c=Math.sin(performance.now()*.008)>0;for(let f of d.enemies)l(f.pos.x,f.pos.z,f.guardian?3.5:2.6,c?"#ff5a45":"#a02818");l(mt.x,mt.z,3,"#8dffb0");for(let f of mx())Math.abs(f.x-n.pos.x)>i*1.2||Math.abs(f.z-n.pos.z)>i*1.2||(me.strokeStyle=f.found?"rgba(255,210,138,.4)":"#ffd28a",me.lineWidth=1.5,me.beginPath(),me.arc(o(f.x),a(f.z),4,0,Math.PI*2),me.stroke());me.restore(),me.save(),me.translate(e/2,e/2),me.strokeStyle="rgba(236,230,220,.35)",me.lineWidth=1,me.beginPath(),me.arc(0,0,t+.5,0,Math.PI*2),me.stroke();for(let f=0;f<72;f++){let p=f/72*Math.PI*2,g=f%18===0?6:f%6===0?4:2;me.strokeStyle=f%18===0?"rgba(255,179,92,.9)":"rgba(236,230,220,.3)",me.beginPath(),me.moveTo(Math.sin(p)*(t+1),-Math.cos(p)*(t+1)),me.lineTo(Math.sin(p)*(t+1+g),-Math.cos(p)*(t+1+g)),me.stroke()}let h=Math.atan2(n.fwd.x,-n.fwd.z);me.rotate(h);let u=me.createRadialGradient(0,0,0,0,0,t*.6);u.addColorStop(0,"rgba(255,179,92,.35)"),u.addColorStop(1,"rgba(255,179,92,0)"),me.fillStyle=u,me.beginPath(),me.moveTo(0,0),me.arc(0,0,t*.6,-Math.PI/2-.55,-Math.PI/2+.55),me.closePath(),me.fill(),me.fillStyle="#fff",me.beginPath(),me.moveTo(0,-7),me.lineTo(5,5),me.lineTo(0,2.5),me.lineTo(-5,5),me.closePath(),me.fill(),me.restore()}var Cx="starport-achv",xh=[{id:"first",name:"\u7B2C\u4E00\u6B65",desc:"\u5728\u5F02\u661F\u91C7\u96C6\u7B2C\u4E00\u5757\u77FF\u77F3",icon:"iron",check:()=>d.stats.mined.iron+d.stats.mined.silicon+d.stats.mined.ice>0},{id:"breathe",name:"\u547C\u5438",desc:"\u5EFA\u8D77\u7B2C\u4E00\u5EA7\u5236\u6C27\u7AD9",icon:"o2",check:()=>d.stats.built.oxygen>0},{id:"home",name:"\u7B2C\u4E00\u4E2A\u5BB6",desc:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",icon:"dome",check:()=>d.stats.built.habitat>0},{id:"welcome",name:"\u6B22\u8FCE\u56DE\u5BB6",desc:"\u8FCE\u63A5\u7B2C\u4E00\u6279\u79FB\u6C11",icon:"pop",check:()=>d.stats.arrived>0},{id:"listen",name:"\u503E\u542C\u8005",desc:"\u4E0E 8 \u4F4D\u5C45\u6C11\u4EA4\u8C08",icon:"radio",check:()=>(d.stats.talked||[]).length>=8},{id:"night",name:"\u957F\u591C\u5B88\u671B\u8005",desc:"\u51FB\u9000 15 \u53EA\u9508\u8680\u86DB",icon:"shield",check:()=>d.stats.kills>=15},{id:"guardian",name:"\u6676\u4F53\u730E\u4EBA",desc:"\u51FB\u8D25\u4E00\u53EA\u949B\u77FF\u5B88\u536B",icon:"titanium",check:()=>(d.stats.guardKills||0)>0},{id:"road",name:"\u516C\u8DEF\u65C5\u884C",desc:"\u9A7E\u9A76\u6F2B\u6E38\u8F66\u884C\u9A76 3 \u516C\u91CC",icon:"rover",check:()=>(d.stats.driven||0)>=3e3},{id:"meteor",name:"\u661F\u843D\u4E4B\u591C",desc:"\u91C7\u96C6\u4E00\u5757\u9668\u77F3",icon:"meteor",check:()=>(d.stats.meteorMined||0)>0},{id:"storm",name:"\u98CE\u66B4\u4E4B\u4E2D",desc:"\u7ECF\u5386\u4E00\u573A\u6C99\u5C18\u66B4",icon:"storm",check:()=>d.storm>.85},{id:"fly",name:"\u98DE\u7FD4",desc:"\u5236\u9020\u55B7\u6C14\u80CC\u5305",icon:"jet",check:()=>!!d.upgrades.jetpack},{id:"town",name:"\u5C0F\u9547",desc:"\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C\u5C0F\u9547\u300D",icon:"colony",check:()=>d.cityLevel>=2},{id:"metro",name:"\u5927\u90FD\u4F1A",desc:"\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C\u5927\u90FD\u4F1A\u300D",icon:"tower",check:()=>d.cityLevel>=4},{id:"fifty",name:"\u4E94\u5341\u4E2A\u706F\u706B",desc:"\u5355\u9897\u661F\u7403\u4EBA\u53E3\u8FBE\u5230 50",icon:"pop",check:()=>d.colony.pop>=50},{id:"reactor",name:"\u7B2C\u4E8C\u9897\u592A\u9633",desc:"\u70B9\u4EAE\u805A\u53D8\u53CD\u5E94\u5806",icon:"power",check:()=>d.stats.built.reactor>0},{id:"blue",name:"\u84DD\u8272\u5929\u7A7A",desc:"\u5B8C\u6210\u706B\u661F\u5927\u6C14\u6539\u9020",icon:"planet",check:()=>d.terraform>=1},{id:"europa",name:"\u51B0\u4E0B\u4E4B\u6D77",desc:"\u767B\u9646\u6728\u536B\u4E8C\xB7\u6B27\u7F57\u5DF4",icon:"ice",check:()=>tt==="europa"},{id:"kepler",name:"\u53CC\u65E5\u4E4B\u5730",desc:"\u62B5\u8FBE\u5F00\u666E\u52D2-442b",icon:"sun",check:()=>tt==="kepler"},{id:"civ",name:"\u661F\u9645\u6587\u660E",desc:"\u5EFA\u6210\u6587\u660E\u7EAA\u5FF5\u7891",icon:"monument",check:()=>d.stats.built.monument>0},{id:"relic",name:"\u56DE\u58F0",desc:"\u53D1\u73B0\u7B2C\u4E00\u5904\u9057\u8FF9",icon:"radio",check:()=>qi().found>0},{id:"archaeo",name:"\u8003\u53E4\u5B66\u5BB6",desc:"\u53D1\u73B0\u4E00\u9897\u661F\u7403\u4E0A\u7684\u5168\u90E8\u9057\u8FF9",icon:"book",check:()=>{let n=qi();return n.total>0&&n.found===n.total}},{id:"boss",name:"\u6676\u6BCD\u9668\u843D",desc:"\u5728\u6676\u6F6E\u4E4B\u591C\u51FB\u8D25\u6676\u6BCD",icon:"boss",check:()=>(d.stats.bossKills||0)>0},{id:"fleet",name:"\u65E0\u4EBA\u673A\u8230\u961F",desc:"\u65E0\u4EBA\u673A\u8FD0\u56DE 30 \u6279\u7269\u8D44",icon:"drone",check:()=>(d.stats.droneHauls||0)>=30},{id:"lv3",name:"\u7CBE\u76CA\u6C42\u7CBE",desc:"\u628A\u4E00\u5EA7\u5EFA\u7B51\u5347\u5230 3 \u7EA7",icon:"star",check:()=>d.buildings.some(n=>(n.level||1)>=3)},{id:"buddy",name:"\u597D\u642D\u6863",desc:"\u8BA9\u5C0F\u661F\u626B\u63CF 10 \u6B21",icon:"scanner",check:()=>(d.stats.scans||0)>=10},{id:"helper",name:"\u597D\u90BB\u5C45",desc:"\u5B8C\u6210 10 \u4E2A\u5C45\u6C11\u59D4\u6258",icon:"radio",check:()=>(d.stats.requests||0)>=10},{id:"science",name:"\u79D1\u5B66\u5BB6",desc:"\u5B8C\u6210 6 \u9879\u79D1\u7814",icon:"book",check:()=>Object.keys(d.tech||{}).length>=6},{id:"trader",name:"\u661F\u9645\u5546\u4EBA",desc:"\u5B8C\u6210 10 \u6B21\u661F\u9645\u8D38\u6613",icon:"ship",check:()=>(d.stats.traded||0)>=10},{id:"photo",name:"\u6444\u5F71\u5E08",desc:"\u5728\u62CD\u7167\u6A21\u5F0F\u4E2D\u4FDD\u5B58\u4E00\u5F20\u7167\u7247",icon:"camera",check:()=>(d.stats.photos||0)>0},{id:"gather",name:"\u6545\u4E61\u7684\u5149",desc:"\u591C\u91CC\uFF0C\u5C45\u6C11\u4EEC\u805A\u5728\u5E7F\u573A\u4E0A\u770B\u5168\u606F\u5730\u7403",icon:"planet",check:()=>!!d.plazaSeen}],Xr={};try{Xr=JSON.parse(localStorage.getItem(Cx))||{}}catch{Xr={}}var dp=[],fp=0,gh=0;function Px(n){if(fp-=n,gh-=n,fp<=0){fp=1;for(let t of xh){if(Xr[t.id])continue;let i=!1;try{i=t.check()}catch{i=!1}if(i){Xr[t.id]=Date.now(),dp.push(t);try{localStorage.setItem(Cx,JSON.stringify(Xr))}catch{}}}}let e=document.getElementById("achv-pop");if(gh<=0&&e.classList.contains("show")&&e.classList.remove("show"),gh<=-.6&&dp.length){let t=dp.shift();e.innerHTML=`<div class="ai">${pt(t.icon)}</div><div><div class="k">ACHIEVEMENT UNLOCKED</div><div class="n">${t.name}</div><div class="d">${t.desc}</div></div>`,e.classList.add("show"),gh=4.5,J.play("achv")}}function pp(){return`<h3>\u6210\u5C31 \xB7 ${xh.filter(e=>Xr[e.id]).length} / ${xh.length}</h3><div class="achv">${xh.map(e=>`<div class="ach ${Xr[e.id]?"on":""}"><div class="ai">${pt(e.icon)}</div><div><div class="an">${e.name}</div><div class="ad">${e.desc}</div></div></div>`).join("")}</div>`}var Lx=!1,Dx=[],Ux=[],Nx=[];function Ix(n,e,t,i,s){let r=new At;r.setAttribute("position",new Jt(new Float32Array(n*3),3));let o=new $n({size:t,map:Zn(),color:e,transparent:!0,opacity:i,depthWrite:!1,blending:s?Et:Li}),a=new ti(r,o);a.frustumCulled=!1,d.scene.add(a);let l=new Float32Array(n*3);for(let c=0;c<n;c++)l[c*3]=Math.random(),l[c*3+1]=Math.random()*Math.PI*2,l[c*3+2]=Math.random();return{p:a,seed:l,n}}function Pb(){if(Lx=!0,tt==="mars")for(let n=0;n<3;n++){let e=Ix(420,14195306,2.4,.45,!1);Dx.push({...e,x:0,z:0,vx:0,vz:0,h:40+Math.random()*30,life:0,k:0})}else if(tt==="europa"){let n=ps.slice(0,8).map(e=>({x:e.x+(Math.random()-.5)*e.r*.6,z:e.z+(Math.random()-.5)*e.r*.6}));n.push({x:60,z:70},{x:-90,z:-40},{x:120,z:140});for(let e of n){if(Math.abs(e.x)>je-200||Math.abs(e.z)>je-200)continue;let t=Ix(500,15267583,2.6,.6,!0);Ux.push({...t,x:e.x,z:e.z,y:ve(e.x,e.z),t:Math.random()*30,on:0})}}else if(tt==="kepler"){let n=new Ge(1,12,6,0,Math.PI*2,0,Math.PI/2);for(let e=0;e<34;e++){let t=.45+Math.random()*.4,i=new fe().setHSL(t,.9,.6),s=new le(n,new it({color:i,transparent:!0,opacity:.55,depthWrite:!1,blending:Et})),r=new Ui(new yi({map:Zn(),color:i,transparent:!0,depthWrite:!1,blending:Et})),o=new le(new zt(.6,3,6,1,!0),s.material);o.position.y=-1.6,o.rotation.x=Math.PI;let a=new we;a.add(s,r,o),r.scale.setScalar(6);let l=.6+Math.random()*1.2;a.scale.setScalar(l),d.scene.add(a),Nx.push({g:a,m:s,s:r,x:(Math.random()-.5)*500,z:(Math.random()-.5)*500,alt:14+Math.random()*30,ph:Math.random()*6,sp:.5+Math.random()})}}}var UA=new T,mp=0;function kx(n){Lx||Pb();let e=d.player.pos,t=performance.now()*.001,i=1-d.time.night;for(let s of Dx){if(s.life-=n,s.life<=0){let c=Math.random()*Math.PI*2,h=90+Math.random()*200;s.x=Xt.clamp(e.x+Math.cos(c)*h,-je+160,je-160),s.z=Xt.clamp(e.z+Math.sin(c)*h,-je+160,je-160);let u=Math.random()*Math.PI*2;s.vx=Math.cos(u)*3,s.vz=Math.sin(u)*3,s.life=40+Math.random()*40,s.h=35+Math.random()*40}s.x+=s.vx*n,s.z+=s.vz*n;let r=Math.min(1,s.life/5,(60-s.life)/5+1)*i*(1-d.storm)*(d.terraform<1?1:.2);s.k+=(r-s.k)*Math.min(1,n),s.p.material.opacity=.45*s.k;let o=s.p.geometry.attributes.position.array,a=ve(s.x,s.z);for(let c=0;c<s.n;c++){let h=s.seed,u=(h[c*3]+t*.08*(.6+h[c*3+2]))%1,f=h[c*3+1]+t*(3+(1-u)*2),p=.8+u*u*9+h[c*3+2]*1.5,g=Math.sin(t*.7+u*4)*u*3;o[c*3]=s.x+Math.cos(f)*p+g,o[c*3+1]=a+u*s.h,o[c*3+2]=s.z+Math.sin(f)*p}s.p.geometry.attributes.position.needsUpdate=!0;let l=Math.hypot(e.x-s.x,e.z-s.z);l<8&&s.k>.5&&!d.driving&&(d.player.vel.x+=(e.x-s.x)/l*n*20,d.player.vel.z+=(e.z-s.z)/l*n*20)}mp-=n;for(let s of Ux){s.t-=n,s.t<=0&&s.on<=0&&(s.on=9,s.t=25+Math.random()*30,Math.hypot(e.x-s.x,e.z-s.z)<120&&J.play("rumble")),s.on-=n;let r=Xt.clamp(Math.min(s.on,9-s.on),0,1.5)/1.5;if(s.p.material.opacity=.6*r,r<=0)continue;let o=s.p.geometry.attributes.position.array,a=70;for(let l=0;l<s.n;l++){let c=s.seed,h=(c[l*3]+t*.35)%1,u=.4+h*9*c[l*3+2]+h*h*4;o[l*3]=s.x+Math.cos(c[l*3+1])*u,o[l*3+1]=s.y+Math.sin(h*Math.PI*.9)*a*(.6+c[l*3+2]*.4),o[l*3+2]=s.z+Math.sin(c[l*3+1])*u}s.p.geometry.attributes.position.needsUpdate=!0,Math.hypot(e.x-s.x,e.z-s.z)<40&&mp<=0&&(mp=.5,J.play("jet"))}for(let s of Nx){s.ph+=n*s.sp,s.x+=Math.sin(s.ph*.3)*n*2,s.z+=Math.cos(s.ph*.23)*n*2,Math.abs(s.x-e.x)>260&&(s.x=e.x-Math.sign(s.x-e.x)*250),Math.abs(s.z-e.z)>260&&(s.z=e.z-Math.sign(s.z-e.z)*250);let r=ve(s.x,s.z)+s.alt+Math.sin(s.ph)*2;s.g.position.set(s.x,r,s.z);let o=.75+Math.sin(s.ph*3)*.25;s.m.scale.set(1+Math.sin(s.ph*3)*.12,1-Math.sin(s.ph*3)*.1,1+Math.sin(s.ph*3)*.12);let a=.15+d.time.night*.85;s.m.material.opacity=.5*a*o,s.s.material.opacity=.7*a*o}}var Zi,gp,gl,xp,qr,yp,da=[],xl=0,ml=-1,vp=20,yh=0,fr=new T,Hx=new T,Fx=new Set,Mh=140;function zx(){Zi=new we;let n=new le(new Ge(.32,20,14),M.white),e=new le(new Ye(.33,.04,8,28),M.orange);e.rotation.x=Math.PI/2;let t=new le(new Ge(.2,16,10,-Math.PI*.35,Math.PI*.7,Math.PI*.3,Math.PI*.4),new de({color:660504,roughness:.1,metalness:.6}));t.position.z=.15,t.rotation.y=Math.PI,gp=Pe(8382207,.45,null,0,.02,.33),gl=new le(new Ye(.5,.015,6,40),new it({color:8382207,transparent:!0,opacity:.6})),gl.rotation.x=Math.PI/2;let i=new le(new zt(.05,.25,6),M.metal);i.position.y=.38,Zi.add(n,e,t,gp,gl,i,Pe(16738874,.25,null,0,.5,0)),Zi.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),Zi.scale.setScalar(.8),xp=new Zs(12578815,0,22,1.6),Zi.add(xp),d.scene.add(Zi);let s=d.player.pos;fr.set(s.x+1.5,s.y+2.2,s.z+1.5),Zi.position.copy(fr),yp=new it({color:8382207,transparent:!0,opacity:0,side:tn,depthWrite:!1,blending:Et}),qr=new le(new vn(.94,1,96),yp),qr.rotation.x=-Math.PI/2,qr.visible=!1,d.scene.add(qr)}function ua(n,e,t=!0){t&&Fx.has(n)||vp>0&&t||(Fx.add(n),vp=45,Ft("\u5C0F\u661F \xB7 \u4F19\u4F34\u673A\u5668\u4EBA",e))}var vh;function Ib(){if(vh)return vh;let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d");return e.translate(32,32),e.rotate(Math.PI/4),e.strokeStyle="#fff",e.lineWidth=5,e.strokeRect(-14,-14,28,28),e.fillStyle="rgba(255,255,255,.35)",e.fillRect(-9,-9,18,18),vh=new ln(n),vh}function Lb(){if(xl>0){d.events.emit("toast",`\u626B\u63CF\u51B7\u5374\u4E2D \xB7 ${Math.ceil(xl)} \u79D2`),J.play("deny");return}xl=12,ml=0,J.play("scan");for(let s of da)d.scene.remove(s.s);da=[];let n=d.player.pos,e={};for(let s of d.nodes){let r=Math.hypot(s.x-n.x,s.z-n.z);if(r>Mh)continue;let o=gs[s.type],a=new Ui(new yi({map:Ib(),color:new fe(o[0],o[1],o[2]),transparent:!0,depthTest:!1,depthWrite:!1,opacity:0,sizeAttenuation:!1}));a.scale.setScalar(s.type==="titanium"?.05:.036),a.position.set(s.x,s.y+3,s.z),a.renderOrder=999,d.scene.add(a),da.push({s:a,delay:r/90,life:10}),e[s.type]=(e[s.type]||0)+1}let t={iron:"\u94C1\u77FF",silicon:"\u7845\u6676",ice:"\u6C34\u51B0",titanium:"\u949B\u77FF"},i=Object.entries(e).map(([s,r])=>`${t[s]} ${r}`).join(" \xB7 ");d.events.emit("toast",i?`\u626B\u63CF\u5B8C\u6210 \xB7 ${i}`:"\u626B\u63CF\u5B8C\u6210 \xB7 \u9644\u8FD1\u6CA1\u6709\u77FF\u85CF"),d.stats.scans=(d.stats.scans||0)+1}function Bx(n){if(!Zi)return;let e=d.player,t=performance.now()*.001;xl=Math.max(0,xl-n),vp-=n,ae.hit("KeyQ")&&!d.menuOpen&&!e.dead&&Lb();let i=(d.driving,e.yaw),s=new T(Math.cos(i),0,-Math.sin(i)),r=new T(-Math.sin(i),0,-Math.cos(i)),o=e.pos.clone().addScaledVector(s,d.driving?3.5:3).addScaledVector(r,d.driving?2:5.5);o.y=Math.max(e.pos.y+1.55,ve(o.x,o.z)+.8)+Math.sin(t*2)*.12,d.driving&&(o.y+=2.2);let a=fr.distanceTo(o)>30?1:Math.min(1,n*3);Hx.lerp(o.clone().sub(fr).multiplyScalar(4),a),fr.addScaledVector(Hx,n),fr.distanceTo(o)>40&&fr.copy(o),Zi.position.copy(fr);let l=e.pos.clone().addScaledVector(e.fwd,12);if(l.y+=1.5,Zi.lookAt(l),gl.rotation.z+=n*1.5,gl.rotation.x=Math.PI/2+Math.sin(t*1.3)*.3,gp.material.opacity=.75+Math.sin(t*4)*.25,xp.intensity=d.time.night>.4?18*d.time.night:0,ml>=0){ml+=n;let h=ml*90;qr.visible=h<Mh,qr.position.set(e.pos.x,e.pos.y+.6,e.pos.z),qr.scale.setScalar(Math.max(.1,h)),yp.opacity=.7*(1-h/Mh),h>=Mh&&(ml=-1)}for(let h=da.length-1;h>=0;h--){let u=da[h];u.delay-=n,!(u.delay>0)&&(u.life-=n,u.s.material.opacity=Math.min(1,(10-u.life)*3,u.life/2)*(.75+Math.sin(t*5+h)*.25),u.life<=0&&(d.scene.remove(u.s),u.s.material.dispose(),da.splice(h,1)))}yh=Math.hypot(e.vel.x,e.vel.z)>.5?0:yh+n,!e.inLife&&e.o2<e.maxO2*.3&&ua("o2"+Math.floor(t/120),"\u6C27\u6C14\u4E0D\u591A\u4E86\uFF01\u6700\u8FD1\u7684\u8865\u6C27\u70B9\u5728\u7F57\u76D8\u4E0A\u90A3\u4E2A\u623F\u5B50\u56FE\u6807\u7684\u65B9\u5411\u3002",!1),d.time.night>.6&&!e.flashlight&&ua("dark","\u597D\u9ED1\u2026\u2026\u6309 F \u6253\u5F00\u624B\u7535\u7B52\u5427\u3002\u6211\u4E5F\u4F1A\u5E2E\u4F60\u7167\u7740\u70B9\u3002"),d.enemies.some(h=>!h.dead&&!h.guardian&&h.pos.distanceTo(e.pos)<25)&&ua("enemy"+Math.floor(t/90),"\u68C0\u6D4B\u5230\u9508\u8680\u86DB\u9760\u8FD1\uFF01\u5C0F\u5FC3\uFF01",!1),d.nodes.some(h=>h.type==="titanium"&&Math.hypot(h.x-e.pos.x,h.z-e.pos.z)<40)&&ua("ti","\u9644\u8FD1\u6709\u949B\u77FF\u7684\u4FE1\u53F7\uFF01\u7D2B\u8272\u7684\u90A3\u79CD\uFF0C\u5F88\u7A00\u6709\u54E6\u3002"),yh>40&&(yh=-200,ua("idle"+Math.floor(t/300),Ox[tt][Math.floor(Math.random()*Ox[tt].length)],!1)),d.stats.scans===void 0&&d.time.day>=1&&t>30&&ua("scanhint","\u6211\u80FD\u626B\u63CF\u9644\u8FD1\u7684\u77FF\u85CF\u2014\u2014\u6309 Q \u8BD5\u8BD5\u3002")}var Ox={mars:["\u4F60\u77E5\u9053\u5417\uFF1F\u706B\u661F\u4E0A\u7684\u4E00\u5929\u6BD4\u5730\u7403\u957F 37 \u5206\u949F\u3002","\u706B\u661F\u7684\u65E5\u843D\u662F\u84DD\u8272\u7684\u3002\u7B49\u508D\u665A\u7684\u65F6\u5019\u62AC\u5934\u770B\u770B\u5427\u3002","\u90A3\u5EA7\u6700\u9AD8\u7684\u5C71\u53EB\u5965\u6797\u5E15\u65AF\uFF0C\u662F\u5730\u7403\u73E0\u5CF0\u7684\u4E24\u500D\u591A\u9AD8\u3002","\u6211\u7684\u6570\u636E\u5E93\u91CC\u6709\u4E00\u9996\u5730\u7403\u7684\u6B4C\uFF0C\u53EB\u300A\u6708\u4EAE\u4EE3\u8868\u6211\u7684\u5FC3\u300B\u3002\u8981\u6211\u54FC\u7ED9\u4F60\u542C\u5417\uFF1F\u2026\u2026\u7B97\u4E86\uFF0C\u6211\u8DD1\u8C03\u3002"],europa:["\u6728\u661F\u597D\u5927\u2026\u2026\u611F\u89C9\u5B83\u968F\u65F6\u4F1A\u6389\u4E0B\u6765\u3002","\u51B0\u5C42\u4E0B\u9762\u7684\u6D77\uFF0C\u53EF\u80FD\u6BD4\u5730\u7403\u6240\u6709\u7684\u6D77\u52A0\u8D77\u6765\u8FD8\u8981\u591A\u3002","\u8FD9\u91CC\u7684\u91CD\u529B\u5F88\u5C0F\uFF0C\u8DF3\u9AD8\u4E00\u70B9\u6CA1\u5173\u7CFB\u7684\u3002"],kepler:["\u4E24\u4E2A\u592A\u9633\uFF01\u5F71\u5B50\u90FD\u6709\u4E24\u4E2A\uFF01","\u90A3\u4E9B\u53D1\u5149\u7684\u6C34\u6BCD\u2026\u2026\u5B83\u4EEC\u662F\u5728\u770B\u6211\u4EEC\u5417\uFF1F","\u7A7A\u6C14\u91CC\u7684\u6C27\u6C14\u5DF2\u7ECF\u6709 14% \u4E86\u3002\u518D\u8FC7\u51E0\u5341\u5E74\uFF0C\u4E5F\u8BB8\u5C31\u80FD\u6458\u4E0B\u5934\u76D4\u4E86\u3002"]};var un=null,Gx=new an,Mp=new yn,yl=new T;function Db(){let n=new we,e=new we;n.add(e);let t=(f,p,g,y,x,m=e,_=0,E=0,v=0)=>{let L=new le(f,p);return L.position.set(g,y,x),L.rotation.set(_,E,v),L.castShadow=!0,L.receiveShadow=!0,m.add(L),L},i=(f,p,g,y=.08)=>new Zo(f,p,g,2,y),s=(f,p,g,y,x=e)=>{let m=p.clone().sub(f),_=t(new et(g,g,m.length(),8),y,0,0,0,x);return _.position.copy(f).add(p).multiplyScalar(.5),_.quaternion.setFromUnitVectors(new T(0,1,0),m.normalize()),_},r=(f,p,g)=>new T(f,p,g);t(i(2.5,.35,4.8,.1),M.dark,0,.85,0),t(i(2.6,.75,3.4,.18),M.white,0,1.35,.5),t(i(2.64,.14,3.44,.05),M.orange,0,1.62,.5),t(i(2.2,.5,1.2,.12),M.panel,0,1.25,-1.9,e,-.25,0,0);let o=t(new Ge(1.15,32,16,0,Math.PI*2,0,Math.PI/2),M.glass,0,1.72,-.75);o.scale.set(1,.8,1.15),o.castShadow=!1;for(let f=0;f<5;f++)t(new Ye(1.16,.035,6,24,Math.PI),M.metal,0,1.72,-.75,e,0,f*Math.PI/5,0).scale.set(1,.8,1.15);for(let f of[-1.15,1.15])s(r(f,1.7,.6),r(f*.9,2.75,.9),.06,M.metal),s(r(f,1.7,2.1),r(f*.9,2.75,1.9),.06,M.metal);s(r(-1.04,2.75,.9),r(1.04,2.75,.9),.06,M.metal),s(r(-1.04,2.75,1.9),r(1.04,2.75,1.9),.06,M.metal),s(r(-1.04,2.75,.9),r(-1.04,2.75,1.9),.06,M.metal),s(r(1.04,2.75,.9),r(1.04,2.75,1.9),.06,M.metal),t(i(1.8,.16,.22,.05),M.dark,0,2.82,.9);let a=[];for(let f=0;f<4;f++)t(new qs(.07,12),M.lamp,-.6+f*.4,2.82,.78,e,0,Math.PI,0),a.push(Pe(16773853,.9,e,-.6+f*.4,2.82,.75));for(let f of[-.85,.85])a.push(Pe(16773853,1.2,e,f,1.2,-2.5));for(let f of[-.85,.85])t(i(.35,.18,.08,.04),M.lamp,f,1.2,-2.42);t(i(2.3,.08,1.5,.03),M.metal,0,1.78,1.6);for(let[f,p,g]of[[-.5,1.4,.6],[.4,1.7,.7],[.5,1.1,.45]])t(i(g,g*.8,g,.04),M.dark,f,1.82+g*.4,p);t(new et(.02,.02,1.6,4),M.metal,.9,3.5,1.9);let l=Pe(16728128,.6,e,.9,4.3,1.9);for(let f=0;f<3;f++)t(i(.06,.06,.5,.02),M.metal,1.33,.75+f*.28,-.2);t(i(.1,.4,1,.04),M.orange,-1.32,1.3,1);let c=[],h=new Ye(.46,.2,12,28);for(let f of[-1.65,0,1.65])for(let p of[-1.5,1.5]){let g=new we;g.position.set(p,.62,f),n.add(g);let y=t(h,M.rubber,0,0,0,g,0,Math.PI/2,0);for(let x=0;x<14;x++){let m=x/14*Math.PI*2;t(new We(.42,.06,.1),M.rubber,0,Math.cos(m)*.64,Math.sin(m)*.64,g,m,0,0)}t(new et(.34,.34,.3,20),M.metal,0,0,0,g,0,0,Math.PI/2);for(let x=0;x<5;x++)t(new We(.32,.06,.06),M.dark,p>0?.16:-.16,0,0,g,x*Math.PI/5,0,0).scale.set(.3,1,9);t(new et(.1,.1,.34,10),M.chrome,0,0,0,g,0,0,Math.PI/2),s(r(p*.62,.95,f),r(p*.95,.66,f),.07,M.metal,n),s(r(p*.7,1.15,f+.3),r(p*.95,.75,f),.04,M.chrome,n),c.push(g)}let u=new Io(16773853,0,60,.5,.5,1.2);return u.position.set(0,1.2,-2.4),u.target.position.set(0,0,-20),e.add(u,u.target),{g:n,body:e,wheels:c,tip:l,lamp:u,heads:a}}function Eh(n,e,t=0){if(un)return un;let i=Db();return d.scene.add(i.g),un={...i,x:n,z:e,y:ve(n,e),h:t,speed:0,vy:0,lookYaw:0,pitch:-.05,spin:0,hitT:0,air:!1},un.collider=d.colliders.add({x:n,z:e,r:2,kind:"rover"}),_p(0),un}function bh(){return un}function Vx(){return un?{x:+un.x.toFixed(1),z:+un.z.toFixed(1),h:+un.h.toFixed(2)}:null}function _h(n,e){return ve(n,e)}function _p(n){let e=un,t=Math.sin(e.h),i=Math.cos(e.h),s=-t,r=-i,o=i,a=-t,l=_h(e.x+s*1.8,e.z+r*1.8),c=_h(e.x-s*1.8,e.z-r*1.8),h=_h(e.x-o*1.3,e.z-a*1.3),u=_h(e.x+o*1.3,e.z+a*1.3),f=Math.atan2(l-c,3.6),p=Math.atan2(u-h,2.6);e.g.position.set(e.x,e.y,e.z),Mp.set(e.air?e.g.rotation.x:f,e.h,e.air?e.g.rotation.z:-p,"YXZ"),e.air||e.g.rotation.copy(Mp),e.spin+=e.speed*n/.55;for(let g of e.wheels)g.rotation.x=-e.spin;return(l+c+h+u)/4}function Wx(){un&&(d.driving=!0,un.lookYaw=0,un.pitch=-.08,d.colliders.remove(un.collider),J.play("place"))}function Ep(n){let e=un;if(!e)return;d.driving=!1,J.engine(0);let t=Math.cos(e.h),i=Math.sin(e.h),s=e.x+t*3,r=e.z-i*3;d.colliders.overlaps(s,r,.5)&&(s=e.x-t*3,r=e.z+i*3),n.pos.set(s,ve(s,r),r),n.vel.set(0,0,0),n.yaw=e.h+e.lookYaw,n.pitch=e.pitch,e.speed=0,e.lamp.intensity=0,e.collider=d.colliders.add({x:e.x,z:e.z,r:2,kind:"rover"})}function $x(n,e,t){if(!un)return;let i=un;if(i.tip.visible=Math.sin(performance.now()*.005)>0,!d.driving){i.y=_p(0);return}d.locked&&(i.lookYaw=Xt.clamp(i.lookYaw-ae.dx*ae.sens,-2.4,2.4),i.pitch=Xt.clamp(i.pitch-ae.dy*ae.sens,-1,.9));let s=(ae.down("KeyW")||ae.down("ArrowUp")?1:0)-(ae.down("KeyS")||ae.down("ArrowDown")?1:0),r=(ae.down("KeyA")||ae.down("ArrowLeft")?1:0)-(ae.down("KeyD")||ae.down("ArrowRight")?1:0),o=(ae.down("ShiftLeft")?28:17)*(kt("terrain")?1.3:1);i.air||(s>0?i.speed+=(i.speed<0?22:11)*n:s<0?i.speed-=(i.speed>0?22:7)*n:i.speed*=1-.7*n,ae.down("Space")&&(i.speed*=1-3.5*n),i.speed=Xt.clamp(i.speed,-7,o),i.speed>o&&(i.speed-=20*n),i.h+=r*n*1.5*Xt.clamp(i.speed/5,-1,1)),yl.set(-Math.sin(i.h),0,-Math.cos(i.h)),d.stats.driven=(d.stats.driven||0)+Math.abs(i.speed)*n,i.x=Xt.clamp(i.x+yl.x*i.speed*n,-je+125,je-125),i.z=Xt.clamp(i.z+yl.z*i.speed*n,-je+125,je-125);for(let c of d.colliders.query(i.x,i.z)){c.kind==="flora"&&Math.abs(i.speed)>0;let h=i.x-c.x,u=i.z-c.z,f=Math.hypot(h,u),p=c.r+1.9;if(f<p&&f>.001){if(c.kind==="rock"&&c.r<1.3)continue;i.x=c.x+h/f*p,i.z=c.z+u/f*p,Math.abs(i.speed)>5&&(J.play("land"),Me.dustPuff(new T(i.x,i.y+1,i.z),6,2)),i.speed*=-.25}}if(i.hitT-=n,Math.abs(i.speed)>6&&i.hitT<=0)for(let c of d.enemies)c.dead||Math.hypot(c.pos.x-i.x,c.pos.z-i.z)<2.6+c.scale&&(hl(c,Math.abs(i.speed)*4,"player"),i.hitT=.4,i.speed*=.7,Me.burst(new T(c.pos.x,c.pos.y+1,c.pos.z),[1,.5,.2],20,6));let a=ve(i.x,i.z);if(i.air)i.vy-=he.gravity*n,i.y+=i.vy*n,i.y<=a&&(i.y=a,i.air=!1,i.vy<-5&&(J.play("land"),Me.dustPuff(new T(i.x,i.y,i.z),14,3)),i.vy=0);else{let c=i.y+i.vy*n-.5*he.gravity*n*n;if(a<c-.25&&i.vy>1.5&&Math.abs(i.speed)>12)i.air=!0,i.vy=Math.min(i.vy,7),i.y=c;else{let h=(a-i.y)/Math.max(n,.001);i.vy=i.vy*.6+h*.4,i.y=a}}if(_p(n),Math.abs(i.speed)>4&&!i.air&&Math.random()<.6){let c=new T(i.x-yl.x*2.5+(Math.random()-.5)*2,i.y+.3,i.z-yl.z*2.5);Me.dustPuff(c,1,.5)}i.lamp.intensity=d.time.night>.3?80:0;for(let c of i.heads)c.visible=d.time.night>.3;Gx.setFromEuler(Mp.set(i.pitch,i.lookYaw,0,"YXZ")),t.quaternion.copy(i.body.getWorldQuaternion(new an)).multiply(Gx);let l=new T(0,2.15,-.7).applyQuaternion(i.g.quaternion).add(i.g.position);t.position.copy(l),t.getWorldDirection(e.fwd),e.pos.set(i.x,i.y,i.z),e.vel.set(0,0,0),e.inLife=!0,e.o2=Math.min(e.maxO2,e.o2+20*n),e.energy=Math.min(100,e.energy+10*n),e.hurtT=Math.max(0,e.hurtT-n),J.engine(Math.abs(i.speed)/28)}function Xx(){return un?Math.round(Math.abs(un.speed)*3.6):0}var wh=[],Tp=new zt(1,1,8,1,!0);Tp.rotateX(Math.PI);Tp.translate(0,-.5,0);var Ub=new T(0,1,0),wp=0,bp=0,Sh=0,Sp=0,qx=-1;function Nb(){wp=45,Sp=0,Sh=6,Ft("\u65B9\u821F \xB7 AI","\u770B\u5929\u4E0A\u2014\u2014\u6D41\u661F\u96E8\uFF01\u6709\u51E0\u9897\u4F1A\u843D\u5230\u9644\u8FD1\u3002\u9668\u77F3\u91CC\u5BCC\u542B\u949B\uFF0C\u53BB\u5760\u843D\u70B9\u770B\u770B\u3002"),d.events.emit("toast","\u2604 \u6D41\u661F\u96E8")}function Yx(n){let e=d.player.pos,t;if(n){for(let h=0;h<20;h++){let u=Math.random()*Math.PI*2,f=40+Math.random()*110,p=Xt.clamp(e.x+Math.cos(u)*f,-je+180,je-180),g=Xt.clamp(e.z+Math.sin(u)*f,-je+180,je-180);if(!d.buildings.some(y=>Math.hypot(y.x-p,y.z-g)<y.def.r+14)){t=new T(p,ve(p,g),g);break}}if(!t)return}else{let h=Math.random()*Math.PI*2,u=150+Math.random()*350;t=new T(e.x+Math.cos(h)*u,e.y+110+Math.random()*140,e.z+Math.sin(h)*u)}let i=new T((Math.random()-.5)*1.2,-.55-Math.random()*.3,(Math.random()-.5)*1.2).normalize(),s=n?520:420,r=t.clone().addScaledVector(i,-s),o=Pe(n?16756848:16769216,n?18:10,d.scene);o.material.fog=!1,o.position.copy(r);let a=new le(Tp,new it({color:n?16751184:16767144,transparent:!0,opacity:.75,blending:Et,depthWrite:!1,fog:!1})),l=n?90:70+Math.random()*70,c=n?2.2:1.3;a.scale.set(c,l,c),a.quaternion.setFromUnitVectors(Ub,i),a.position.copy(r),d.scene.add(a),wh.push({pos:r,vel:i.multiplyScalar(n?150:220),head:o,tail:a,impact:n,target:t,life:s/(n?150:220)})}function Zx(n){d.time.night>.7&&qx!==d.time.day&&d.time.day>=2&&d.storm<.1&&!d.ended&&(qx=d.time.day,Math.random()<.4&&Nb()),wp>0&&(wp-=n,bp-=n,Sh-=n,bp<=0&&(bp=.15+Math.random()*.35,Yx(!1)),Sh<=0&&Sp<4&&(Sh=7+Math.random()*5,Sp++,Yx(!0)));for(let t=wh.length-1;t>=0;t--){let i=wh[t];i.life-=n,i.pos.addScaledVector(i.vel,n),i.head.position.copy(i.pos),i.tail.position.copy(i.pos);for(let s=0;s<3;s++)Me.trail(i.pos.clone().addScaledVector(i.vel,-n*s/3),i.impact?[1,.6,.3]:[1,.85,.6],i.impact?1.2:.7);i.life<=0&&(d.scene.remove(i.head),d.scene.remove(i.tail),i.tail.material.dispose(),wh.splice(t,1),i.impact&&kb(i.target))}}function kb(n){let e=n.clone();e.y+=1.5,Me.burst(e,[1,.55,.2],120,22),Me.ring(n,2,90),Me.dustPuff(e,40,8),J.play("rumble"),J.play("kill");let t=n.distanceTo(d.player.pos);if(t<80&&(d.player.landDip=Math.max(d.player.landDip,.4*(1-t/80))),!d.colliders.overlaps(n.x,n.z,2.5)){let i=Vo("titanium",n.x,n.z,10+Math.floor(Math.random()*8));i.meteor=!0}d.events.emit("toast",`\u2604 \u9668\u77F3\u5760\u843D\u5728 ${Math.round(t)} \u7C73\u5916`)}var Ue=n=>document.getElementById(n);d.debug=/[?&]debug/.test(location.search);var Cs=Ue("c"),An=new Co({canvas:Cs,antialias:!0,powerPreference:"high-performance"});An.setPixelRatio(Math.min(window.devicePixelRatio,1.5));An.setSize(window.innerWidth,window.innerHeight);An.shadowMap.enabled=!0;An.shadowMap.type=Fd;An.toneMapping=Ir;An.toneMappingExposure=1;var Yr="high";try{Yr=localStorage.getItem("starport-quality")||((navigator.hardwareConcurrency||8)<=4?"mid":"high")}catch{}function sy(n,e){Yr=n,An.setPixelRatio(n==="high"?Math.min(window.devicePixelRatio,1.5):n==="mid"?1:.75),An.setSize(window.innerWidth,window.innerHeight);let t=n!=="low";An.shadowMap.enabled!==t&&(An.shadowMap.enabled=t,e&&d.scene.traverse(i=>{i.material&&[].concat(i.material).forEach(s=>{s.needsUpdate=!0})})),ci&&(ci.setPixelRatio(An.getPixelRatio()),ci.setSize(window.innerWidth,window.innerHeight))}var ci=null,Ch=null;function Hb(){ci=new Ic(An),ci.addPass(new Lc(Ps,Ct)),Ch=new ko(new ne(window.innerWidth,window.innerHeight),.55,.5,.88),ci.addPass(Ch),ci.addPass(new Dc),Ph=new No({uniforms:{tDiffuse:{value:null},uT:{value:0},uNight:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uT, uNight; varying vec2 vUv;
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
      }`}),ci.addPass(Ph)}var Ph=null;function Ap(){Yr==="high"&&ci?(Ch.strength=.3+d.time.night*.22,Ch.threshold=.9,Ph.uniforms.uT.value=performance.now()*.001%100,Ph.uniforms.uNight.value=d.time.night,ci.render()):An.render(Ps,Ct)}sy(Yr,!1);var Ps=new Di,Ct=new on(72,window.innerWidth/window.innerHeight,.1,6e3);Hb();d.scene=Ps;d.camera=Ct;d.renderer=An;d.colliders=new Uc(16);window.addEventListener("resize",()=>{Ct.aspect=window.innerWidth/window.innerHeight,Ct.updateProjectionMatrix(),An.setSize(window.innerWidth,window.innerHeight),ci&&ci.setSize(window.innerWidth,window.innerHeight)});d.hiShadows=Yr==="high";Jm(Ps);Fm(Ps);jm(Ps);var ga=Hg();ga.group.position.set(mt.x,ve(mt.x,mt.z)+.1,mt.z);ga.group.rotation.y=.6;Ps.add(ga.group);d.colliders.add({x:mt.x,z:mt.z,r:3.4,kind:"lander"});var ze=new lh(Ct);d.player=ze;nx(Ct);Jg(Cs);Sx(Om(350));_f(Ps);d.requestLock=()=>{if(d.debug){d.locked=!0;return}try{let n=Cs.requestPointerLock();n&&n.catch&&n.catch(()=>{})}catch{}};document.addEventListener("pointerlockchange",()=>{d.locked=document.pointerLockElement===Cs,!d.locked&&d.started&&!d.menuOpen&&!ze.dead&&!d.endingShown&&!d.cine&&As("pause")});Cs.addEventListener("click",()=>{J.init(),d.started&&!d.locked&&!d.menuOpen&&!ze.dead&&d.requestLock()});function Is(n){if(!d.started)return;let e={v:1,res:d.res,upgrades:d.upgrades,stats:d.stats,chapter:d.chapter,goalDone:d.goalDone,terraform:d.terraform,ended:d.ended,nights:d.nightsSurvived||0,city:d.cityLevel,pop:d.popTotal||0,launched:!!d.launched,rover:Vx(),relics:d.relicsFound||[],plazaSeen:!!d.plazaSeen,mode:d.mode,diff:d.diffKey,tech:d.tech||{},rp:d.rp||0,requests:d.requests||[],time:{t:d.time.t,day:d.time.day},player:{x:ze.pos.x,z:ze.pos.z,yaw:ze.yaw,o2:ze.o2,hp:ze.health},buildings:Ng(),nodes:rg(),colonists:lx(),storm:Vg()};try{localStorage.setItem(kc,JSON.stringify(e)),n||Zt("\u5DF2\u4FDD\u5B58")}catch{n||Zt("\u4FDD\u5B58\u5931\u8D25")}}function Fb(){try{return JSON.parse(localStorage.getItem(kc))}catch{return null}}function Ob(n){Object.assign(d.res,n.res),d.upgrades=n.upgrades||{},og(n.nodes);for(let[e,t,i,s,r,o]of n.buildings)Tn[e]&&eh(e,t,i,s,r,!1,o||1);d.stats=n.stats,d.goalDone=n.goalDone||{},d.terraform=n.terraform||0,d.ended=!!n.ended,d.nightsSurvived=n.nights||0,$g(d.terraform>=1),d.time.t=n.time.t,d.time.day=n.time.day,ze.pos.set(n.player.x,ve(n.player.x,n.player.z),n.player.z),ze.yaw=n.player.yaw,ze.o2=n.player.o2,ze.health=Math.max(30,n.player.hp),cx(n.colonists||[]),n.rover&&Eh(n.rover.x,n.rover.z,n.rover.h),d.relicsFound=n.relics||[],d.plazaSeen=!!n.plazaSeen,d.mode=n.mode||"story",d.diffKey=n.diff||"normal",d.tech=n.tech||{},d.rp=n.rp||0,d.requests=n.requests||[],d.cityLevel=n.city||0,d.popTotal=n.pop??(n.colonists||[]).length,d.launched=!!n.launched,_f(Ps),Wg(n.storm),cl(n.chapter,!0),Wi(),d.terraform>0&&uf(ry(),d.terraform)}var ry=()=>d.buildings.filter(n=>n.type==="terraformer").map(n=>({x:n.x,z:n.z})),zb=he.intro;document.querySelector(".logo span").textContent=he.title;document.title="\u661F\u6E2F\uFF1A"+he.title;hn.visited?.length&&(Ue("touch-note").innerHTML="\u5DF2\u5F00\u62D3\uFF1A"+hn.visited.map(n=>`${Ln[n.id].name}\uFF08${n.pop} \u4EBA\uFF09`).join(" \xB7 "));Ue("story").innerHTML=zb.map((n,e)=>`<p style="animation-delay:${.4+e*1.1}s">${n}</p>`).join("");var Jn=Fb();Jn&&(Ue("btn-continue").classList.remove("hidden"),Ue("cont-info").textContent=`${Jn.mode==="free"?"\u81EA\u7531":"\u5267\u60C5"} \xB7 ${he.name} \xB7 ${ai[Jn.chapter]?.title||""} \xB7 \u7B2C ${Jn.time.day} \u65E5 \xB7 ${Jn.pop??Jn.colonists?.length??0} \u4F4D\u5C45\u6C11`);matchMedia("(pointer: coarse)").matches&&(Ue("touch-note").innerHTML+="\u672C\u6E38\u620F\u9700\u8981\u952E\u76D8\u548C\u9F20\u6807\uFF0C\u8BF7\u5728\u7535\u8111\u4E0A\u6E38\u73A9\u3002");function Bb(n){if(d.debug){setTimeout(n,1200);return}let e=Ue("cine"),t=he.intro;d.cine=!0,e.classList.remove("hidden","out"),Ue("cine-lines").innerHTML=t.map((o,a)=>`<p style="animation-delay:${.6+a*2.1}s">${o}</p>`).join("");let i=!1,s=()=>{i||(i=!0,e.classList.add("out"),d.cine=!1,window.removeEventListener("keydown",r),window.removeEventListener("mousedown",s),setTimeout(()=>e.classList.add("hidden"),1500),setTimeout(n,900))},r=o=>{(o.code==="Space"||o.code==="Escape"||o.code==="Enter")&&s()};window.addEventListener("keydown",r),window.addEventListener("mousedown",s),setTimeout(s,1500+t.length*2100+1800)}function xa(n){if(J.init(),n&&Jn)Ob(Jn);else{if(localStorage.removeItem(kc),ng(),hn.carry&&tt!=="mars"){Object.assign(d.upgrades,hn.carry.upgrades||{});for(let e in hn.carry.res)d.res[e]+=hn.carry.res[e];d.upgrades.rover&&Eh(mt.x+10,mt.z+4,.5),setTimeout(()=>Zt("\u968F\u8230\u7269\u8D44\u5DF2\u5378\u8F7D\uFF0C\u6240\u6709\u88C5\u5907\u5DF2\u540C\u6B65"),4e3)}d.time.t=.29,d.mode=d.mode||"story",d.diffKey=d.diffKey||"normal",cl(0,!0),Fn()?ey(()=>{$r({k:"FREE MODE",title:he.name,sub:`\u81EA\u7531\u5F00\u62D3 \xB7 ${Xo[d.diffKey].name}`}),Ft("\u65B9\u821F \xB7 AI","\u81EA\u7531\u6A21\u5F0F\u5DF2\u542F\u52A8\u3002\u6CA1\u6709\u4EFB\u52A1\u6E05\u5355\uFF0C\u8FD9\u7247\u571F\u5730\u5B8C\u5168\u5C5E\u4E8E\u4F60\u3002\u5EFA\u597D\u7B2C\u4E00\u5EA7\u8BBE\u65BD\u540E\uFF0C\u5C45\u6C11\u548C\u6307\u6325\u4E2D\u5FC3\u4F1A\u9646\u7EED\u63D0\u51FA\u59D4\u6258\u3002"),Ft("\u65B9\u821F \xB7 AI","\u63D0\u793A\uFF1AB \u5EFA\u9020\uFF0CT \u79D1\u7814\uFF0CTab \u6B96\u6C11\u5730\u6863\u6848\u3002\u795D\u4F60\u597D\u8FD0\u3002")}):Bb(()=>ey(()=>{$r(ai[0]),ai[0].radio.forEach(e=>Ft(e[0],e[1]))}))}dx(),zx(),Yr!=="low"&&$m(),Ue("intro").classList.add("hidden"),document.body.classList.add("playing"),d.started=!0,d.requestLock()}var Kn={mode:"story",diff:"normal",planet:"mars"};function Dp(){let n=(t,i,s,r,o)=>`<button class="opt ${o?"on":""}" data-g="${t}" data-k="${i}"><b>${s}</b><span>${r}</span></button>`,e=Kn.mode==="free"?`<h3>\u661F\u7403</h3><div class="opts">${Object.values(Ln).map(t=>n("planet",t.id,t.name,t.title+" \xB7 "+t.place,Kn.planet===t.id)).join("")}</div>`:'<p class="sm">\u5267\u60C5\u4ECE\u706B\u661F\u5F00\u59CB\u3002\u5B8C\u6210\u6BCF\u9897\u661F\u7403\u7684\u6545\u4E8B\u540E\uFF0C\u4E58\u6B96\u6C11\u8230\u524D\u5F80\u4E0B\u4E00\u9897\u3002</p>';Ue("intro-pane").innerHTML=`<h3>\u6A21\u5F0F</h3><div class="opts">${Object.entries(mg).map(([t,i])=>n("mode",t,i.name,i.desc,Kn.mode===t)).join("")}</div>
    <h3>\u96BE\u5EA6</h3><div class="opts three">${Object.entries(Xo).map(([t,i])=>n("diff",t,i.name,i.desc,Kn.diff===t)).join("")}</div>
    ${e}
    <button class="launch" id="btn-launch">\u51FA\u53D1</button>`,Ue("intro-pane").dataset.k="setup",Ue("intro-pane").classList.remove("hidden"),Ue("intro-pane").querySelectorAll(".opt").forEach(t=>t.addEventListener("click",()=>{Kn[t.dataset.g]=t.dataset.k,t.dataset.g==="mode"&&t.dataset.k==="story"&&(Kn.planet="mars"),J.play("tick"),Dp()})),Ue("btn-launch").addEventListener("click",Gb)}function Gb(){let n=Kn.mode==="story"?"mars":Kn.planet;if(Kn.mode==="story"){if((hn.visited?.length||Jn)&&!confirm("\u5267\u60C5\u6A21\u5F0F\u4F1A\u4ECE\u706B\u661F\u91CD\u65B0\u5F00\u59CB\uFF0C\u5E76\u6E05\u9664\u6240\u6709\u661F\u7403\u7684\u8FDB\u5EA6\u3002\u786E\u5B9A\u5417\uFF1F"))return;of()}else{if(Ih(n)&&!confirm(`\u5C06\u8986\u76D6 ${Ln[n].name} \u7684\u73B0\u6709\u5B58\u6863\uFF0C\u786E\u5B9A\u5417\uFF1F`))return;try{localStorage.removeItem(n==="mars"?"starport-newhome-v1":"starport-planet-"+n)}catch{}let t=js();delete t.carry,t.planet=n,$a(t)}if(n===tt){d.mode=Kn.mode,d.diffKey=Kn.diff,xa(!1);return}try{localStorage.setItem("starport-newgame",JSON.stringify({mode:Kn.mode,diff:Kn.diff}))}catch{}let e=js();e.planet=n,$a(e),location.href=location.pathname+(d.debug?"?debug":"")}Ue("btn-new").addEventListener("click",()=>{if(J.init(),tt!=="mars"&&!Jn&&hn.visited?.length&&!hn.freshFree){d.mode=hn.mode||"story",d.diffKey=hn.diff||"normal",xa(!1);return}Dp()});try{let n=JSON.parse(localStorage.getItem("starport-newgame"));n&&(localStorage.removeItem("starport-newgame"),d.mode=n.mode,d.diffKey=n.diff,setTimeout(()=>xa(!1),60))}catch{}Ue("btn-continue").addEventListener("click",()=>xa(!0));Ue("tele-planet").textContent=`${he.name} \xB7 ${he.place}`;var Vb=`<h3>\u64CD\u4F5C</h3><div class="keys">
  <div><kbd>W A S D</kbd><span>\u79FB\u52A8</span></div><div><kbd>\u9F20\u6807</kbd><span>\u73AF\u89C6</span></div>
  <div><kbd>Shift</kbd><span>\u51B2\u523A</span></div><div><kbd>\u7A7A\u683C</kbd><span>\u8DF3\u8DC3 / \u55B7\u6C14\u80CC\u5305</span></div>
  <div><kbd>\u5DE6\u952E</kbd><span>\u91C7\u77FF \xB7 \u5C04\u51FB \xB7 \u653E\u7F6E\u5EFA\u7B51</span></div><div><kbd>\u53F3\u952E</kbd><span>\u53D6\u6D88\u5EFA\u9020</span></div>
  <div><kbd>1</kbd><kbd>2</kbd><span>\u5207\u6362\u5DE5\u5177</span></div><div><kbd>B</kbd><span>\u5EFA\u9020\u84DD\u56FE</span></div>
  <div><kbd>E</kbd><span>\u4E92\u52A8 \xB7 \u4EA4\u8C08 \xB7 \u4E0A\u8F66</span></div><div><kbd>U</kbd><span>\u5347\u7EA7\u6CE8\u89C6\u7684\u5EFA\u7B51</span></div><div><kbd>T</kbd><span>\u79D1\u7814</span></div>
  <div><kbd>Q</kbd><span>\u5C0F\u661F\u626B\u63CF\u77FF\u85CF</span></div><div><kbd>F</kbd><span>\u624B\u7535\u7B52</span></div><div><kbd>Tab</kbd><span>\u6B96\u6C11\u5730\u6863\u6848</span></div>
  <div><kbd>P</kbd><span>\u62CD\u7167\u6A21\u5F0F</span></div><div><kbd>Esc</kbd><span>\u6682\u505C</span></div></div>
  <h3>\u751F\u5B58</h3><p>\u6C27\u6C14\u4F1A\u6301\u7EED\u6D88\u8017\u3002\u7740\u9646\u8231\u3001\u5236\u6C27\u7AD9\u548C\u5C45\u4F4F\u7A79\u9876\u9644\u8FD1\u4F1A\u81EA\u52A8\u8865\u6C27\u3002\u5EFA\u597D\u4F4F\u623F\u3001\u6C27\u6C14\u3001\u98DF\u7269\u3001\u6C34\u548C\u7740\u9646\u573A\uFF0C\u79FB\u6C11\u98DE\u8239\u5C31\u4F1A\u5230\u6765\u3002\u591C\u91CC\u8981\u63D0\u9632\u9508\u8680\u86DB\u3002</p>`,oy=n=>{let e=Ue("intro-pane");if(!e.classList.contains("hidden")&&e.dataset.k===n.slice(0,20)){e.classList.add("hidden");return}e.dataset.k=n.slice(0,20),e.innerHTML=n,e.classList.remove("hidden"),J.play("tick")};Ue("btn-t-help").addEventListener("click",()=>oy(Vb));Ue("btn-t-achv").addEventListener("click",()=>oy(pp()));tt!=="mars"&&!Jn&&(Ue("btn-new").textContent=`\u767B\u9646 ${he.name}`);tt!=="mars"&&!Jn&&hn.visited?.length&&Ue("btn-setup").classList.remove("hidden");Ue("btn-setup").addEventListener("click",()=>{J.init(),Dp()});if(hn.autoResume&&Jn){let n=js();delete n.autoResume,$a(n),setTimeout(()=>{xa(!0),Zt(`\u6B22\u8FCE\u56DE\u6765 \xB7 ${he.name}`)},50)}Ue("btn-save").addEventListener("click",()=>Is(!1));Ue("btn-archive").addEventListener("click",()=>ap(hp()));Ue("btn-achv").addEventListener("click",()=>ap(pp()));Ue("btn-restart").addEventListener("click",()=>{confirm("\u5C06\u5220\u9664\u6240\u6709\u661F\u7403\u7684\u8FDB\u5EA6\uFF0C\u4ECE\u706B\u661F\u91CD\u65B0\u5F00\u59CB\u3002\u786E\u5B9A\u5417\uFF1F")&&(of(),d.started=!1,location.href=location.pathname+(d.debug?"?debug":""))});Ue("vol").addEventListener("input",n=>J.setVolume(+n.target.value));Ue("quality").value=Yr;d.baseFov=72;try{let n=+localStorage.getItem("starport-fov");n>=60&&n<=100&&(d.baseFov=n,Ct.fov=n,Ct.updateProjectionMatrix(),Ue("fov").value=n)}catch{}Ue("fov").addEventListener("input",n=>{d.baseFov=+n.target.value,Ct.fov=+n.target.value,Ct.updateProjectionMatrix();try{localStorage.setItem("starport-fov",n.target.value)}catch{}});Ue("quality").addEventListener("change",n=>{sy(n.target.value,!0);try{localStorage.setItem("starport-quality",n.target.value)}catch{}});Ue("sens").addEventListener("input",n=>{ae.sens=+n.target.value});Ue("btn-respawn").addEventListener("click",()=>{d.driving&&Ep(ze),ze.respawn(),Ue("death").classList.add("hidden"),d.requestLock()});Ue("btn-endcont").addEventListener("click",()=>{Ue("ending").classList.add("hidden"),d.endingShown=!1,d.requestLock()});d.events.on("chapter",n=>$r(n));ha.unlocked=n=>$i(n).ok;ha.relicLeft=()=>qi().found<qi().total;ha.relicFound=()=>qi().found;d.events.on("request",n=>{Zt(`\u65B0\u59D4\u6258\uFF1A${n.text}`,"radio"),Ft(`${n.giver} \xB7 \u59D4\u6258`,n.line)});d.events.on("requestDone",n=>{Zt(`\u59D4\u6258\u5B8C\u6210\uFF1A${n.text}`,"check","good"),Ft(n.giver,["\u8C22\u8C22\u4F60\uFF01\u8FD9\u5E2E\u4E86\u5927\u5FD9\u3002","\u592A\u597D\u4E86\uFF0C\u5927\u5BB6\u90FD\u4F1A\u8BB0\u5F97\u7684\u3002","\u8F9B\u82E6\u4E86\uFF01\u8FD9\u662F\u4E00\u70B9\u5FC3\u610F\u3002"][Math.floor(Math.random()*3)])});d.events.on("researched",n=>{(n==="swarm"||n==="alloy")&&Wi()});d.events.on("crafted",n=>{if(n!=="rover")return;let e=d.buildings.find(i=>i.type==="fabricator"),t=e||ze.pos;for(let i=0;i<12;i++){let s=i*.9,r=(e?e.def.r:0)+5+i,o=t.x+Math.cos(s)*r,a=t.z+Math.sin(s)*r;if(!d.colliders.overlaps(o,a,2.6)){Eh(o,a,-s);break}}Ft("\u65B9\u821F \xB7 AI","\u6F2B\u6E38\u8F66\u5DF2\u51FA\u5382\u3002\u8F66\u8231\u52A0\u538B\uFF0C\u53EF\u4EE5\u5728\u8F66\u91CC\u8865\u6C27\u3002\u5C0F\u5FC3\u522B\u5F00\u4E0B\u60AC\u5D16\u3002")});d.events.on("cityLevel",n=>{$r({k:`COLONY LEVEL ${["I","II","III","IV","V","VI"][d.cityLevel]}`,title:n.name,sub:`\u57CE\u5E02\u5347\u7EA7 \xB7 \u9886\u5730\u6269\u5C55\u81F3 ${n.r} \u7C73`});let e={1:["\u65B9\u821F \xB7 AI","\u6B96\u6C11\u5730\u5347\u7EA7\u4E3A\u5B9A\u5C45\u70B9\u3002\u9886\u5730\u6269\u5927\u4E86\uFF0C\u66F4\u8FDC\u7684\u571F\u5730\u53EF\u4EE5\u5EFA\u9020\u4E86\u3002"],2:["\u65B9\u821F \xB7 AI","\u5C0F\u9547\u89C4\u6A21\u8FBE\u6210\u3002\u516C\u5BD3\u5854\u4E0E\u5782\u76F4\u519C\u573A\u7684\u8BBE\u8BA1\u56FE\u5DF2\u89E3\u9501\u3002"],3:["\u65B9\u821F \xB7 AI","\u8FD9\u91CC\u5DF2\u7ECF\u662F\u4E00\u5EA7\u57CE\u5E02\u4E86\u3002\u751F\u6001\u4E2D\u67A2\u7684\u8BBE\u8BA1\u56FE\u5DF2\u89E3\u9501\u3002"],4:["\u65B9\u821F \xB7 AI","\u5927\u90FD\u4F1A\u3002\u591C\u91CC\uFF0C\u4ECE\u8F68\u9053\u4E0A\u80FD\u770B\u89C1\u4F60\u4EEC\u7684\u706F\u5149\u3002"],5:["\u65B9\u821F \xB7 AI","\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C\u661F\u6E2F\u300D\u2014\u2014\u4EBA\u7C7B\u53EF\u4EE5\u4ECE\u8FD9\u91CC\u98DE\u5411\u4E0B\u4E00\u9897\u661F\u7403\u4E86\u3002"]}[d.cityLevel];e&&Ft(e[0],e[1]),Is(!0)});d.events.on("openBuild",()=>As("build"));d.events.on("death",n=>{J.laser(!1),setTimeout(()=>{if(d.endingShown){ze.respawn();return}Ue("death-why").textContent=n,Ue("death").classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock()},1500)});d.events.on("tide",n=>{J.play("night"),$r({k:"CRYSTAL TIDE",title:"\u6676\u6F6E\u4E4B\u591C",sub:`\u96F7\u8FBE\u63A2\u6D4B\u5230\u7EA6 ${n} \u4E2A\u4FE1\u53F7 \xB7 \u5B88\u4F4F\u6B96\u6C11\u5730`}),Ft("\u65B9\u821F \xB7 AI","\u8B66\u544A\uFF1A\u6676\u6F6E\u6B63\u5728\u903C\u8FD1\u3002\u6570\u91CF\u662F\u5E73\u65F6\u7684\u4E24\u500D\u2026\u2026\u5730\u9707\u4EEA\u8FD8\u8BB0\u5F55\u5230\u4E00\u4E2A\u5DE8\u5927\u7684\u4FE1\u53F7\uFF0C\u5B83\u6B63\u5728\u5411\u5730\u8868\u79FB\u52A8\u3002")});d.events.on("bossSpawn",()=>{Zt("\u6676\u6BCD\u7834\u571F\u800C\u51FA","boss","warn"),Ft("\u65B9\u821F \xB7 AI","\u662F\u6676\u6BCD\uFF01\u4F53\u957F\u8D85\u8FC7\u5341\u7C73\u3002\u5B83\u7684\u51B2\u51FB\u6CE2\u80FD\u9707\u788E\u5EFA\u7B51\u2014\u2014\u7528\u6B65\u67AA\u548C\u70AE\u5854\u96C6\u4E2D\u706B\u529B\uFF01")});d.events.on("bossDown",()=>{Zt("\u6676\u6BCD\u9668\u843D","boss","good"),Ft("\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u2026\u2026\u4F60\u4EEC\u505A\u5230\u4E86\u3002\u6574\u4E2A\u6307\u6325\u4E2D\u5FC3\u90FD\u5728\u6B22\u547C\u3002\u5B83\u7684\u6838\u5FC3\u91CC\u6709\u5927\u91CF\u7684\u949B\uFF0C\u62FF\u53BB\u5EFA\u8BBE\u5427\u3002")});var Kx=!0;d.events.on("nightfall",n=>{J.play("night"),Zt(`\u591C\u5E55\u964D\u4E34 \xB7 \u7EA6 ${n} \u4E2A\u79FB\u52A8\u4FE1\u53F7\u63A5\u8FD1`,"moon","warn"),Kx&&(Kx=!1,Ft("\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5B83\u4EEC\u6765\u4E86\u3002\u9508\u8680\u86DB\u4F1A\u653B\u51FB\u5EFA\u7B51\u548C\u4EBA\u3002\u7528\u6FC0\u5149\u6216\u6B65\u67AA\u51FB\u9000\u5B83\u4EEC\u2014\u2014\u5B83\u4EEC\u7684\u6676\u4F53\u6B8B\u9AB8\u91CC\u542B\u6709\u949B\u3002"))});d.events.on("broken",n=>Zt(`${n.def.name} \u53D7\u635F\u505C\u673A\uFF0C\u767D\u5929\u4F1A\u81EA\u52A8\u4FEE\u590D`,"warn","warn"));var Jx=!0;d.events.on("shuttleIncoming",n=>Zt(`\u79FB\u6C11\u98DE\u8239\u6B63\u5728\u964D\u843D \xB7 ${n} \u4EBA`,"ship"));d.events.on("colonistsArrived",n=>{n.length&&(Zt(`\u6B22\u8FCE\u56DE\u5BB6\uFF1A${n.map(e=>e.name).join("\u3001")}`),Jx&&d.stats.arrived<=4&&(Jx=!1,Ft(n[0].name,"\u4F60\u597D\u2026\u2026\u8FD9\u5C31\u662F\u706B\u661F\uFF1F\u6BD4\u7167\u7247\u4E0A\u8FD8\u8981\u7EA2\u3002\u8C22\u8C22\u4F60\uFF0C\u4E3A\u6211\u4EEC\u70B9\u4EAE\u4E86\u8FD9\u91CC\u7684\u706F\u3002")))});var Wb={habitat:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5C45\u4F4F\u7A79\u9876\u52A0\u538B\u5B8C\u6210\u3002\u5BA4\u5185\u6E29\u5EA6 21 \u6444\u6C0F\u5EA6\uFF0C\u6E7F\u5EA6 45%\u3002\u8FD9\u662F\u706B\u661F\u4E0A\u7B2C\u4E00\u4E2A\u53EF\u4EE5\u8131\u4E0B\u5934\u76D4\u7684\u5730\u65B9\u3002"],greenhouse:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u6E29\u5BA4\u542F\u52A8\u3002\u7B2C\u4E00\u6279\u79CD\u5B50\u5DF2\u7ECF\u64AD\u4E0B\uFF1A\u571F\u8C46\u3001\u5C0F\u9EA6\u3001\u756A\u8304\u2026\u2026\u548C\u4E00\u682A\u5411\u65E5\u8475\u3002"],beacon:["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u6536\u5230\u7740\u9646\u573A\u7684\u4FE1\u6807\u4FE1\u53F7\u4E86\uFF01\u53EA\u8981\u6B96\u6C11\u5730\u80FD\u517B\u6D3B\u4ED6\u4EEC\uFF0C\u79FB\u6C11\u98DE\u8239\u5C31\u4F1A\u51FA\u53D1\u3002"],reactor:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u805A\u53D8\u53CD\u5E94\u5806\u70B9\u706B\u6210\u529F\u3002\u8F93\u51FA\u7A33\u5B9A\u3002"],terraformer:["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5927\u6C14\u6539\u9020\u5854\u2026\u2026\u542F\u52A8\u4E86\u3002\u6211\u4EEC\u89C1\u8BC1\u7684\uFF0C\u662F\u4E00\u9897\u661F\u7403\u7684\u82CF\u9192\u3002"],apartment:["\u65B9\u821F \xB7 AI","\u7B2C\u4E00\u5EA7\u516C\u5BD3\u5854\u843D\u6210\u3002\u57CE\u5E02\u5F00\u59CB\u5411\u5929\u7A7A\u751F\u957F\u3002"],launch:["\u65B9\u821F \xB7 AI","\u661F\u9645\u53D1\u5C04\u53F0\u5B8C\u5DE5\u3002\u6B96\u6C11\u8230\u5DF2\u52A0\u6CE8\u5B8C\u6BD5\uFF0C\u968F\u65F6\u53EF\u4EE5\u51FA\u53D1\u3002"],monument:["\u65B9\u821F \xB7 AI","\u7EAA\u5FF5\u7891\u4E0A\u523B\u7740\u4E00\u884C\u5B57\uFF1A\u300C\u81F4\u7B2C\u4E00\u4E2A\u51FA\u53D1\u7684\u4EBA\u300D\u3002"],turret:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u9632\u5FA1\u70AE\u5854\u4E0A\u7EBF\u3002\u5B83\u4EEC\u9700\u8981\u7535\u529B\u624D\u80FD\u8FD0\u8F6C\u3002"],fabricator:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5236\u9020\u5DE5\u574A\u5C31\u7EEA\u3002\u9760\u8FD1\u540E\u6309 E \u6253\u5F00\u3002"]};d.events.on("built",n=>{let e=Wb[n.type];e&&d.stats.built[n.type]===1&&Ft(e[0],e[1]),n.type==="monument"&&d.stats.built.monument===1&&setTimeout(jb,6e3),Is(!0)});d.events.on("ending",()=>{Ft("Nadia Volkova","\u5927\u5BB6\u5FEB\u51FA\u6765\u770B\uFF01\u5929\u7A7A\u2026\u2026\u5929\u7A7A\u53D8\u84DD\u4E86\uFF01"),Ft("\u8D75\u5C0F\u96E8","\u4E0B\u96E8\u4E86\uFF01\u8FD9\u662F\u706B\u661F\u4E0A\u7684\u7B2C\u4E00\u573A\u96E8\uFF01"),setTimeout($b,14e3)});function $b(){d.ended=!0,d.endingShown=!0,ze.dead&&ze.respawn(),Ue("death").classList.add("hidden"),document.pointerLockElement&&document.exitPointerLock();let n=d.stats,e=["\u4ECE\u7740\u9646\u8231\u7684\u8231\u95E8\u7B2C\u4E00\u6B21\u6253\u5F00\uFF0C\u5230\u4ECA\u5929\uFF0C\u8FC7\u53BB\u4E86 "+d.time.day+" \u4E2A\u706B\u661F\u65E5\u3002","\u66FE\u7ECF\u53EA\u6709\u98CE\u58F0\u7684\u5E73\u539F\u4E0A\uFF0C\u5982\u4ECA\u4F4F\u7740 "+d.colony.pop+" \u4E2A\u4EBA\u3002","\u4ED6\u4EEC\u6765\u81EA\u5730\u7403\u4E0A\u4E0D\u540C\u7684\u56FD\u5BB6\uFF0C\u8BF4\u7740\u4E0D\u540C\u7684\u8BED\u8A00\u3002","\u4F46\u4ECE\u4ECA\u5929\u8D77\uFF0C\u4ED6\u4EEC\u6709\u4E86\u540C\u4E00\u4E2A\u5730\u5740\u3002",'<div class="big">\u706B\u661F \xB7 \u65B0\u5BB6\u56ED</div>',"\u5B69\u5B50\u4EEC\u7B2C\u4E00\u6B21\u5728\u706B\u661F\u4E0A\uFF0C\u770B\u89C1\u4E86\u84DD\u8272\u7684\u5929\u7A7A\u3002",`<span class="stats">\u91C7\u96C6\u8D44\u6E90 ${n.mined.iron+n.mined.silicon+n.mined.ice+n.mined.titanium} \xB7 \u5EFA\u9020\u8BBE\u65BD ${d.buildings.length} \xB7 \u51FB\u9000\u9508\u8680\u86DB ${n.kills} \xB7 \u8FCE\u63A5\u79FB\u6C11 ${n.arrived}</span>`];Ue("ending-text").innerHTML=e.map((t,i)=>`<p style="animation-delay:${i*1.6}s">${t}</p>`).join(""),Ue("ending").classList.remove("hidden"),J.play("chapter"),Is(!0)}window.addEventListener("keydown",n=>{if(d.started){if(Rx(n),n.code==="Tab"&&!d.endingShown&&!ze.dead){d.menuOpen==="archive"?On(!0):d.menuOpen||As("archive");return}if(n.code==="KeyT"&&!d.endingShown&&!ze.dead){d.menuOpen==="research"?On(!0):d.menuOpen||As("research");return}if(d.menuOpen==="research"&&n.code==="Escape"){On(!0);return}if(d.menuOpen==="trade"&&(n.code==="Escape"||n.code==="KeyE")){On(!0);return}if(n.code==="KeyP"&&!d.menuOpen){d.photo=!d.photo,d.usedPhoto=!0,document.body.classList.toggle("photo",d.photo),Qx(d.photo?Ip:0),J.play("tick");return}if(d.photo&&!d.menuOpen){let e=["Digit1","Digit2","Digit3","Digit4"].indexOf(n.code);if(e>=0){Ip=e,Qx(e),J.play("tick"),n.stopImmediatePropagation();return}if(n.code==="Enter"){d.snap=!0;return}}if(d.menuOpen==="archive"&&n.code==="Escape"){On(!0);return}d.menuOpen==="build"&&(n.code==="Escape"||n.code==="KeyB")?(On(!0),d.locked||void 0):d.menuOpen==="craft"&&(n.code==="Escape"||n.code==="KeyE")?On(!0):d.menuOpen==="starmap"&&n.code==="Escape"&&On(!0)}});var fa=0,Rp=30,Cp=0,jx=0,ma={};try{ma=JSON.parse(localStorage.getItem("starport-hints"))||{}}catch{}var pa=null,Pp=0,Ah=0,Xb=[{id:"move",text:"<kbd>W A S D</kbd>\u79FB\u52A8\u3000<kbd>Shift</kbd>\u51B2\u523A<br><kbd>\u9F20\u6807</kbd>\u73AF\u89C6\u3000<kbd>\u7A7A\u683C</kbd>\u8DF3\u8DC3",when:()=>Ah>.5&&Ah<40},{id:"mine",text:"\u5BF9\u51C6\u53D1\u5149\u7684\u77FF\u77F3\uFF0C<kbd>\u6309\u4F4F\u5DE6\u952E</kbd> \u7528\u91C7\u77FF\u6FC0\u5149\u91C7\u96C6",when:()=>Ah>6&&d.stats.mined.iron+d.stats.mined.silicon===0},{id:"build",text:"\u8D44\u6E90\u591F\u4E86\uFF01\u6309 <kbd>B</kbd> \u6253\u5F00\u5EFA\u9020\u83DC\u5355",when:()=>d.buildings.length===0&&d.res.iron>=8&&d.res.silicon>=6},{id:"o2",text:"\u6C27\u6C14\u5728\u6301\u7EED\u6D88\u8017\u3002\u56DE\u5230\u7740\u9646\u8231\u6216\u5236\u6C27\u7AD9\u9644\u8FD1\u4F1A\u81EA\u52A8\u8865\u6C27",when:()=>!ze.inLife&&ze.o2<ze.maxO2*.5},{id:"night",text:"\u5929\u9ED1\u4E86\uFF0C\u6309 <kbd>F</kbd> \u6253\u5F00\u624B\u7535\u7B52",when:()=>d.time.night>.6&&!ze.flashlight},{id:"craft",text:"\u9760\u8FD1\u5236\u9020\u5DE5\u574A\u6309 <kbd>E</kbd> \u5236\u9020\u6B66\u5668\u548C\u88C5\u5907\u2014\u2014\u8BD5\u8BD5\u52A0\u538B\u6F2B\u6E38\u8F66",when:()=>d.buildings.some(n=>n.type==="fabricator")&&!d.upgrades.rifle},{id:"drive",text:"\u6F2B\u6E38\u8F66\u5C31\u5728\u9644\u8FD1\uFF0C\u8D70\u8FC7\u53BB\u6309 <kbd>E</kbd> \u4E0A\u8F66",when:()=>bh()&&!d.driving&&!ma.drove},{id:"research",text:"\u7814\u7A76\u6240\u5DF2\u5EFA\u6210\uFF0C\u6309 <kbd>T</kbd> \u7528\u79D1\u7814\u70B9\u6570\u89E3\u9501\u79D1\u6280",when:()=>d.buildings.some(n=>n.type==="lab")&&(d.rp||0)>=20},{id:"request",text:"\u5C45\u6C11\u63D0\u51FA\u4E86\u59D4\u6258\uFF08\u53F3\u4FA7\u4EFB\u52A1\u680F\uFF09\uFF0C\u5B8C\u6210\u540E\u6709\u5956\u52B1",when:()=>(d.requests||[]).length>0},{id:"talk",text:"\u5BF9\u51C6\u5C45\u6C11\u6309 <kbd>E</kbd>\uFF0C\u542C\u542C\u4ED6\u4EEC\u7684\u6545\u4E8B",when:()=>d.colonists.some(n=>n.pos.distanceTo(ze.pos)<10)},{id:"level",text:"\u4EBA\u53E3\u548C\u8BBE\u65BD\u8D8A\u591A\uFF0C\u57CE\u5E02\u7B49\u7EA7\u8D8A\u9AD8\uFF0C\u9886\u5730\u4E5F\u4F1A\u6269\u5927\uFF08\u770B\u5DE6\u4E0A\u89D2\uFF09",when:()=>d.colony.pop>=2}];function qb(n){if(Ah+=n,d.driving&&(ma.drove=!0),pa)if(Pp-=n,Pp<=0||!pa.when()){ma[pa.id]=!0,pa=null;try{localStorage.setItem("starport-hints",JSON.stringify(ma))}catch{}}else return pa.text;for(let e of Xb)if(!ma[e.id]&&e.when())return pa=e,Pp=12,e.text;return""}function ay(){let n=js(),e=new Map((n.visited||[]).map(i=>[i.id,i])),t=[];he.next&&t.push({id:he.next,fresh:!e.has(he.next)&&!Ih(he.next)});for(let i of Object.keys(Ln))i!==tt&&i!==he.next&&(e.has(i)||Ih(i))&&t.push({id:i,fresh:!1,info:e.get(i)});return t}function Ih(n){try{return!!localStorage.getItem(n==="mars"?"starport-newhome-v1":"starport-planet-"+n)}catch{return!1}}function Yb(n){As("starmap"),Ue("starmap-list").innerHTML=ay().map(e=>{let t=Ln[e.id],i={mars:"MARS",europa:"EUROPA",kepler:"KEPLER-442b"}[e.id];return`<div class="dest" data-id="${e.id}"><div class="orb ${e.id}"></div><span class="badge ${e.fresh?"new":"home"}">${e.fresh?"UNCHARTED":"COLONY"}</span>
      <div class="dn">${t.name}</div><div class="de">${i}</div>
      <div class="dst">${t.title} \xB7 ${t.place}${e.info?`<br>\u5C45\u6C11 ${e.info.pop} \u4EBA \xB7 \u7B2C ${e.info.day} \u65E5\u79BB\u5F00`:""}${e.fresh?"<br>\u88C5\u5907\u540C\u6B65 \xB7 \u643A\u5E26\u90E8\u5206\u7269\u8D44":"<br>\u56DE\u5230\u4F60\u5EFA\u7ACB\u7684\u57CE\u5E02"}</div></div>`}).join(""),Ue("starmap-list").querySelectorAll(".dest").forEach(e=>e.addEventListener("click",()=>{On(!0),Zb(n,e.dataset.id)}))}function Zb(n,e){d.launching={b:n,t:0,dest:e},d.launched=!0,J.play("rumble"),Ft("\u65B9\u821F \xB7 AI",`\u6B96\u6C11\u8230\u70B9\u706B\u3002\u76EE\u6807\uFF1A${Ln[e].name}\u3002\u5168\u4F53\u4E58\u5458\uFF0C\u795D\u4F60\u4EEC\u597D\u8FD0\u3002`),n.anim.flame.visible=!0}function Kb(n){let e=d.launching;if(!e)return;e.t+=n;let t=e.b.anim.ship;e.t>2&&(t.position.y+=n*(2+(e.t-2)*9));let i=new T(e.b.x,e.b.y+t.position.y,e.b.z);for(let s=0;s<6;s++)Me.flame(i);e.t<5&&Me.dustPuff(new T(e.b.x+(Math.random()-.5)*16,e.b.y+1,e.b.z+(Math.random()-.5)*16),3,4),ze.landDip=Math.max(ze.landDip,Math.min(.15,.03*e.t)*Math.random()),e.t>9&&!e.faded&&(e.faded=!0,Ue("fade").classList.add("on")),e.t>11.5&&!e.done&&(e.done=!0,Jb(e.dest))}function Jb(n){let e=js();e.visited=(e.visited||[]).filter(s=>s.id!==tt).concat([{id:tt,pop:d.colony.pop,day:d.time.day}]),e.planet=n,e.mode=d.mode||"story",e.diff=d.diffKey||"normal",e.autoResume=Ih(n);let t={};for(let s in d.res)t[s]=Math.min(Math.floor(d.res[s]*.4),80);e.carry={upgrades:d.upgrades,res:t},Is(!0),$a(e);let i=Ln[n];Ue("ending-text").innerHTML=["\u66F2\u901F\u822A\u884C\u4E2D\u2026\u2026",`\u76EE\u7684\u5730\uFF1A<b>${i.name}</b>${e.autoResume?"\uFF08\u5DF2\u5F00\u62D3\uFF09":""}`,`<span class="stats">${he.name}\u7684 ${d.colony.pop} \u4F4D\u5C45\u6C11\uFF0C\u4F1A\u66FF\u4F60\u5B88\u7740\u90A3\u91CC\u7684\u706F\u706B\u3002</span>`].map((s,r)=>`<p style="animation-delay:${r*1.2}s">${s}</p>`).join(""),document.querySelector("#ending .btns").classList.add("hidden"),Ue("ending").classList.remove("hidden"),Ue("fade").classList.remove("on"),d.endingShown=!0,document.pointerLockElement&&document.exitPointerLock(),setTimeout(()=>{location.href=location.pathname+(d.debug?"?debug":"")},5e3)}function jb(){d.endingShown=!0,document.pointerLockElement&&document.exitPointerLock();let e=(js().visited||[]).concat([{id:tt,pop:d.colony.pop}]),t=e.reduce((s,r)=>s+r.pop,0),i=["\u5F88\u4E45\u5F88\u4E45\u4EE5\u524D\uFF0C\u4E00\u4E2A\u4EBA\u72EC\u81EA\u7AD9\u5728\u706B\u661F\u7684\u7EA2\u8272\u5C18\u571F\u91CC\u3002","\u6C27\u6C14\u53EA\u591F\u6491\u4E09\u5206\u949F\uFF0C\u8EAB\u8FB9\u53EA\u6709\u4E00\u5EA7\u7740\u9646\u8231\u3002",e.map(s=>`${Ln[s.id].name} \xB7 ${s.pop} \u4EBA`).join("\u3000"),`\u4ECA\u5929\uFF0C${t} \u4E2A\u4EBA\uFF0C\u751F\u6D3B\u5728\u4E09\u9897\u661F\u7403\u4E0A\u3002`,'<div class="big">\u661F\u9645\u6587\u660E</div>',"\u8FD9\u4E00\u5207\uFF0C\u90FD\u4ECE\u4F60\u8FC8\u51FA\u7684\u7B2C\u4E00\u6B65\u5F00\u59CB\u3002",'<span class="stats">\u611F\u8C22\u6E38\u73A9\u300A\u661F\u6E2F\u300B\u3002\u4F60\u53EF\u4EE5\u7EE7\u7EED\u5EFA\u8BBE\uFF0C\u57CE\u5E02\u4F1A\u4E00\u76F4\u5728\u8FD9\u91CC\u7B49\u4F60\u3002</span>'];Ue("ending-text").innerHTML=i.map((s,r)=>`<p style="animation-delay:${r*1.8}s">${s}</p>`).join(""),Ue("ending").classList.remove("hidden"),J.play("chapter"),Is(!0)}function Qb(n){let e={prompt:"",crossClass:""};if(ze.dead||d.menuOpen)return e;if(d.driving)return e.prompt=`<span class="big">${Xx()}</span> KM/H<br><kbd>W S</kbd> \u6CB9\u95E8 \xB7 <kbd>A D</kbd> \u8F6C\u5411 \xB7 <kbd>Shift</kbd> \u52A0\u901F \xB7 <kbd>\u7A7A\u683C</kbd> \u5239\u8F66 \xB7 <kbd>E</kbd> \u4E0B\u8F66`,e;let t=px(ze.pos);if(t)return e.prompt=`<b>${t.name}</b><br><kbd>E</kbd>\u8C03\u67E5`,ae.hit("KeyE")&&gx(t),e;let i=bh();if(i&&Math.hypot(i.x-ze.pos.x,i.z-ze.pos.z)<4.5)return e.prompt="<b>\u52A0\u538B\u6F2B\u6E38\u8F66</b><br><kbd>E</kbd>\u4E0A\u8F66",ae.hit("KeyE")&&(Wx(),ae.pressed.delete("KeyE")),e;let s=Ct.position,r=ze.fwd,o=ax(s,r),a=d.buildings.find(u=>u.type==="fabricator"&&Math.hypot(u.x-ze.pos.x,u.z-ze.pos.z)<u.def.r+6);fa=Math.max(0,fa-n),jx=Math.max(0,jx-n);let l=d.buildings.find(u=>u.type==="trade"&&Math.hypot(u.x-ze.pos.x,u.z-ze.pos.z)<u.def.r+5),c=d.buildings.find(u=>u.type==="launch"&&Math.hypot(u.x-ze.pos.x,u.z-ze.pos.z)<u.def.r+8);if(o){if(e.crossClass="talk",e.prompt=`<b>${o.name}</b> \xB7 ${o.job}<br><kbd>E</kbd> \u4EA4\u8C08`,ae.hit("KeyE")){Ft(o.name,o.line);let u=d.stats.talked=d.stats.talked||[];u.includes(o.idx)||u.push(o.idx)}}else c&&!d.launching?c.powered?ay().length?(e.prompt="<b>\u6B96\u6C11\u8230\u5DF2\u5C31\u7EEA</b><br><kbd>E</kbd>\u6253\u5F00\u661F\u56FE",ae.hit("KeyE")&&Yb(c)):e.prompt="\u661F\u9645\u53D1\u5C04\u53F0 \xB7 \u6682\u65E0\u53EF\u7528\u822A\u7EBF":e.prompt='\u661F\u9645\u53D1\u5C04\u53F0 \xB7 <span class="badc">\u7535\u529B\u4E0D\u8DB3</span>':l?(e.prompt=`<b>\u661F\u9645\u8D38\u6613\u7AD9</b>${l.powered?"":' \xB7 <span class="badc">\u505C\u7535</span>'}<br><kbd>E</kbd>\u4EA4\u6613`,ae.hit("KeyE")&&(l.powered?As("trade"):Zt("\u8D38\u6613\u7AD9\u6CA1\u6709\u7535\u529B","warn","warn"))):a&&(e.prompt=`<kbd>E</kbd> \u6253\u5F00\u5236\u9020\u5DE5\u574A${a.powered?"":"\uFF08\u505C\u7535\u4E2D\uFF09"}`,ae.hit("KeyE")&&(a.powered?As("craft"):Zt("\u5236\u9020\u5DE5\u574A\u6CA1\u6709\u7535\u529B")));let h=d.lookBuilding;if(!e.prompt&&h&&sn.id!=="build"){let u=h.def,f=h.level||1,p=Qc(h)?`<br><kbd>U</kbd>\u5347\u7EA7\u5230 Lv.${f+1}\u3000${Ho(If(h))}`:"";e.prompt=`<b>${u.name}</b>\u3000Lv.${f}${f>=Pf?"\uFF08\u6EE1\u7EA7\uFF09":""} \xB7 \u8010\u4E45 ${Math.ceil(h.hp)}/${Math.round(h.maxHp)}${u.power<0?h.powered?' \xB7 <span class="okc">\u4F9B\u7535\u4E2D</span>':' \xB7 <span class="badc">\u505C\u7535</span>':""}${p}<br><kbd>X</kbd>${fa>0?'<span class="badc">\u518D\u6309\u4E00\u6B21\u786E\u8BA4\u62C6\u9664\uFF08\u8FD4\u8FD8 50%\uFF09</span>':"\u62C6\u9664"}`,h.broken&&(e.prompt=e.prompt.replace("</b>",'</b> <span class="badc">\u53D7\u635F\u505C\u673A \xB7 \u767D\u5929\u81EA\u52A8\u4FEE\u590D</span>')),ae.hit("KeyU")&&Qc(h)&&(Sg(h)?Zt(`${u.name} \u5347\u7EA7\u5230 Lv.${h.level}`,"star","good"):(J.play("deny"),Zt("\u5347\u7EA7\u6750\u6599\u4E0D\u8DB3","warn","warn"))),ae.hit("KeyX")&&(fa>0?(Rg(h,!0),fa=0,Zt(`\u5DF2\u62C6\u9664 ${u.name}`)):fa=2)}return sn.id==="laser"?(d.aimNode&&!e.crossClass&&(e.crossClass="node"),ea(s,r,9)&&(e.crossClass="enemy")):sn.id==="rifle"&&ea(s,r,120)&&(e.crossClass="enemy"),e}var Rh=[["\u539F\u8272","none"],["\u80F6\u7247","sepia(.35) contrast(1.12) saturate(1.15) brightness(1.03)"],["\u9ED1\u767D","grayscale(1) contrast(1.25)"],["\u51B7\u8C03","hue-rotate(-18deg) saturate(.85) contrast(1.08) brightness(1.05)"]],Ip=0;function Qx(n){Cs.style.filter=Rh[n][1]==="none"?"":Rh[n][1],Ue("photo-bar").innerHTML=Rh.map((e,t)=>`<span class="${t===n?"on":""}"><kbd>${t+1}</kbd>${e[0]}</span>`).join("")+'<span class="sep"></span><span><kbd>Enter</kbd>\u4FDD\u5B58\u7167\u7247</span><span><kbd>P</kbd>\u9000\u51FA</span>'}function ew(){let n=Cs.width,e=Cs.height,t=Math.round(e*.1),i=document.createElement("canvas");i.width=n,i.height=e;let s=i.getContext("2d");s.filter=Rh[Ip][1],s.drawImage(Cs,0,0),s.filter="none",s.fillStyle="#000",s.fillRect(0,0,n,t),s.fillRect(0,e-t,n,t);let r=Math.round(e*.022);s.font=`300 ${r*1.6}px "Noto Sans SC", sans-serif`,s.fillStyle="#fff",s.textBaseline="middle",s.fillText("\u661F \u6E2F",r*2,e-t/2),s.font=`400 ${r}px "Noto Sans SC", sans-serif`,s.fillStyle="rgba(255,255,255,.7)",s.textAlign="right",s.fillText(`${he.name} \xB7 ${he.place} \xB7 \u7B2C ${d.time.day} \u65E5 \xB7 \u4EBA\u53E3 ${d.colony.pop}`,n-r*2,e-t/2);let o=document.createElement("a");o.download=`\u661F\u6E2F-${he.name}-\u7B2C${d.time.day}\u65E5.png`,o.href=i.toDataURL("image/png"),document.body.appendChild(o),o.click(),o.remove(),Ue("shutter").classList.remove("on"),Ue("shutter").offsetWidth,Ue("shutter").classList.add("on"),J.play("shutter"),d.stats.photos=(d.stats.photos||0)+1}var Rs=null,Lp=9.5;function ey(n){if(d.debug&&!/landing/.test(location.search)){n();return}d.cine=!0,document.body.classList.add("cinema");let e=ga.group,t=ve(mt.x,mt.z)+.1,i=new le(new zt(1.7,10,18,1,!0),M.flame);i.rotation.x=Math.PI,i.position.y=-4.2,e.add(i);let s=Pe(16752704,22,e,0,-.5,0),r=new Zs(16752720,0,120,1.4);r.position.y=-2,e.add(r);let o=new T(mt.x+20,0,mt.z+25);o.y=ve(o.x,o.z)+3.2,d.time.t=.282,Rs={t:0,gy:t,flame:i,fglow:s,lamp:r,done:n,camAt:o,landed:!1,shake:0},e.position.y=t+460,J.play("rumble"),J.engine(1);let a=l=>{(l.type==="mousedown"||l.code==="Space"||l.code==="Escape")&&(Rs.t=Math.max(Rs.t,Lp+6))};Rs.skip=a,window.addEventListener("keydown",a),window.addEventListener("mousedown",a)}var ty=new an,ny=new an,tw=new yn,iy=new xt;function ly(n){let e=Rs;e.t+=n;let t=ga.group,i=Math.min(1,e.t/Lp),s=1-Math.pow(1-i,2.6);t.position.y=e.gy+460*(1-s),t.rotation.z=Math.sin(e.t*1.1)*.05*(1-i);let r=i<1;e.flame.visible=e.fglow.visible=r,e.flame.scale.set(1,.5+(1-s)*.9+Math.random()*.15,1),e.lamp.intensity=r?400*(.6+Math.random()*.4):0;let o=t.position.y-e.gy;if(r){let c=new T(t.position.x,t.position.y-1,t.position.z);for(let h=0;h<4;h++)Me.flame(c,1.4);if(o<40)for(let h=0;h<3;h++){let u=Math.random()*Math.PI*2,f=2+Math.random()*(14-o*.25);Me.dustPuff(new T(mt.x+Math.cos(u)*f,e.gy+.3,mt.z+Math.sin(u)*f),1,2)}e.shake=Math.max(e.shake,Math.max(0,1-o/120)*.25)}else e.landed||(e.landed=!0,e.shake=1,Me.ring(new T(mt.x,e.gy,mt.z),4,160),Me.dustPuff(new T(mt.x,e.gy+1,mt.z),70,16),J.play("land"),J.play("rumble"),J.engine(0));e.shake*=Math.pow(.15,n),el(0,Ct.position),tl(n,Ct.position);let a=new T(t.position.x,t.position.y+3,t.position.z),l=e.t-Lp-2.2;if(l<0)Ct.position.copy(e.camAt),Ct.position.x+=Math.sin(e.t*.15)*4,Ct.lookAt(a);else{let c=Math.min(1,l/3.2),h=c*c*(3-2*c),u=new T(ze.pos.x,ze.pos.y+1.7,ze.pos.z);if(Ct.position.lerpVectors(e.camAt,u,h),iy.lookAt(e.camAt,a,Ct.up),ty.setFromRotationMatrix(iy),ny.setFromEuler(tw.set(ze.pitch,ze.yaw,0,"YXZ")),Ct.quaternion.slerpQuaternions(ty,ny,h),c>=1){t.remove(e.flame,e.fglow,e.lamp),t.position.y=e.gy,t.rotation.z=0,window.removeEventListener("keydown",e.skip),window.removeEventListener("mousedown",e.skip),document.body.classList.remove("cinema"),d.cine=!1,Rs=null,J.engine(0),e.done();return}}e.shake>.01&&(Ct.position.x+=(Math.random()-.5)*e.shake*.5,Ct.position.y+=(Math.random()-.5)*e.shake*.4)}var nw=new Lo,Th=0;function cy(){requestAnimationFrame(cy);let n=Math.min(nw.getDelta(),.05);if(Rs){ly(n),Ap(),ae.endFrame();return}if(!d.started){Th+=n*.05;let t=30;Ct.position.set(mt.x+Math.cos(Th)*t,ve(mt.x,mt.z)+6,mt.z+Math.sin(Th)*t),Ct.lookAt(mt.x,ve(mt.x,mt.z)+4,mt.z),d.time.t=.27+Math.sin(Th*.5)*.01,el(0,Ct.position),tl(n,Ct.position),Ap();return}d.debug&&(d.locked=!0);let e=d.locked&&!d.menuOpen&&!d.endingShown&&!d.cine;Ue("clickhint").classList.toggle("hidden",!(d.started&&!d.locked&&!d.menuOpen&&!ze.dead&&!d.endingShown&&!d.cine)),e?hy(n):(up(0,{prompt:""}),el(0,Ct.position)),tl(e?n:0,Ct.position),ae.endFrame(),Ap(),sx(An),d.snap&&(d.snap=!1,ew())}function hy(n){{d.driving&&ae.hit("KeyE")&&!d.menuOpen&&(Ep(ze),ae.pressed.delete("KeyE")),d.driving||ze.update(n),$x(n,ze,Ct),el(n,Ct.position),d.time.dawn&&(d.time.dawn=!1,Zt(`\u7B2C ${d.time.day} \u65E5 \xB7 \u9ECE\u660E`,"sun")),sg(n),d.driving?d.lookBuilding=null:ix(n,ze,Ct),Ug(n,{shoot:ah}),ox(n),hg(n,sn.id==="build"&&!!bt.type),Kb(n),df.emissiveIntensity=.06+d.time.night*(.55+Math.sin(performance.now()*.0015)*.15),Kg(n),Zx(n),Yg(n),Gg(n),ga.beacon.visible=Math.sin(performance.now()*.004)>0,Px(n),kx(n),xx(n),Bx(n),Mg(n,ha),Xm(),!d.plazaSeen&&d.time.night>.6&&d.colonists.filter(t=>t.atPlaza&&!t.target).length>=4&&(d.plazaSeen=!0,Ft("\u82CF\u5FF5 \xB7 \u6559\u5E08","\u4ECA\u665A\u5927\u5BB6\u90FD\u6765\u4E86\u3002\u6211\u4EEC\u5C31\u8FD9\u6837\u7AD9\u7740\uFF0C\u770B\u7740\u90A3\u9897\u84DD\u8272\u7684\u661F\u7403\u8F6C\u554A\u8F6C\u2026\u2026\u5B69\u5B50\u95EE\u6211\uFF0C\u90A3\u662F\u54EA\u91CC\u3002\u6211\u8BF4\uFF0C\u90A3\u662F\u6211\u4EEC\u51FA\u53D1\u7684\u5730\u65B9\u3002"));let e=Qb(n);e.tip=qb(n),up(n,e),J.update(d.storm,d.time.night),Rp-=n,Rp<=0&&(Rp=45,Is(!0)),d.terraform>0&&d.terraform<=1&&(Cp-=n,Cp<=0&&(Cp=4,uf(ry(),d.terraform)))}}Ue("loading").style.transition="opacity .8s";Ue("loading").style.opacity=0;setTimeout(()=>Ue("loading").remove(),900);cy();window.addEventListener("beforeunload",()=>Is(!0));window.__G=d;window.__dbg={give(n=200){for(let e in mn)d.res[e]+=n},tp(n,e){ze.pos.set(n,ve(n,e),e)},time(n){d.time.t=n},build:(n,e,t)=>eh(n,e,t,0),chapter:n=>cl(n),look(n,e){ze.yaw=n,ze.pitch=e},begin:()=>xa(!1),slope:(n,e)=>ve(n+3,e)-ve(n,e),landStep(n){for(let e=0;e<n&&Rs;e+=.05)ly(.05);return!!Rs},step(n,e=.05){for(let t=0;t<n;t+=e)hy(e),tl(e,Ct.position),ae.endFrame()},input:ae,save:Is,toast:Zt,setGhost:Or,openMenu:As,closeMenus:On,tool:sn,placement:bt,rover:bh};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
