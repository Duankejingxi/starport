(()=>{var vd="170";var zx=0,vp=1,Fx=2;var C0=1,_d=2,Yi=3,Is=0,_n=1,Qe=2,Si=0,Ti=1,Me=2,_p=3,Mp=4,Ox=5,hr=100,Bx=101,Vx=102,Gx=103,Wx=104,Xx=200,$x=201,qx=202,Yx=203,Zh=204,Jh=205,Zx=206,Jx=207,Kx=208,jx=209,Qx=210,ty=211,ey=212,ny=213,iy=214,Kh=0,jh=1,Qh=2,ao=3,tu=4,eu=5,nu=6,iu=7,P0=0,sy=1,ry=2,Ps=0,Md=1,Ed=2,bd=3,vr=4,oy=5,wd=6,Sd=7;var I0=300,lo=301,co=302,su=303,ru=304,hc=306,Qi=1e3,dr=1001,ou=1002,kn=1003,ay=1004;var rl=1005;var bi=1006,mh=1007;var fr=1008;var ts=1009,L0=1010,D0=1011,ba=1012,Td=1013,pr=1014,wi=1015,fi=1016,Ad=1017,Rd=1018,ho=1020,U0=35902,N0=1021,H0=1022,ci=1023,k0=1024,z0=1025,so=1026,uo=1027,Cd=1028,Pd=1029,F0=1030,Id=1031;var Ld=1033,Ul=33776,Nl=33777,Hl=33778,kl=33779,au=35840,lu=35841,cu=35842,hu=35843,uu=36196,du=37492,fu=37496,pu=37808,mu=37809,gu=37810,xu=37811,yu=37812,vu=37813,_u=37814,Mu=37815,Eu=37816,bu=37817,wu=37818,Su=37819,Tu=37820,Au=37821,zl=36492,Ru=36494,Cu=36495,O0=36283,Pu=36284,Iu=36285,Lu=36286;var Fl=2300,Du=2301,gh=2302,Ep=2400,bp=2401,wp=2402;var ly=3200,cy=3201;var B0=0,hy=1,Rs="",_e="srgb",Mo="srgb-linear",uc="linear",Le="srgb";var zr=7680;var Sp=519,uy=512,dy=513,fy=514,V0=515,py=516,my=517,gy=518,xy=519,Uu=35044,Dd=35048;var Tp="300 es",Ji=2e3,Ol=2001,Ls=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ap=1234567,ya=Math.PI/180,fo=180/Math.PI;function Ki(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]).toLowerCase()}function pn(n,t,e){return Math.max(t,Math.min(e,n))}function Ud(n,t){return(n%t+t)%t}function yy(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function vy(n,t,e){return n!==t?(e-n)/(t-n):0}function va(n,t,e){return(1-e)*n+e*t}function _y(n,t,e,i){return va(n,t,1-Math.exp(-e*i))}function My(n,t=1){return t-Math.abs(Ud(n,t*2)-t)}function Ey(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function by(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function wy(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Sy(n,t){return n+Math.random()*(t-n)}function Ty(n){return n*(.5-Math.random())}function Ay(n){n!==void 0&&(Ap=n);let t=Ap+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ry(n){return n*ya}function Cy(n){return n*fo}function Py(n){return(n&n-1)===0&&n!==0}function Iy(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ly(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Dy(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),d=o((t-i)/2),f=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function li(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ue(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var We={DEG2RAD:ya,RAD2DEG:fo,generateUUID:Ki,clamp:pn,euclideanModulo:Ud,mapLinear:yy,inverseLerp:vy,lerp:va,damp:_y,pingpong:My,smoothstep:Ey,smootherstep:by,randInt:wy,randFloat:Sy,randFloatSpread:Ty,seededRandom:Ay,degToRad:Ry,radToDeg:Cy,isPowerOfTwo:Py,ceilPowerOfTwo:Iy,floorPowerOfTwo:Ly,setQuaternionFromProperEuler:Dy,normalize:Ue,denormalize:li},nt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(pn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ae=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],y=s[0],x=s[3],m=s[6],_=s[1],E=s[4],v=s[7],I=s[2],R=s[5],P=s[8];return r[0]=o*y+a*_+l*I,r[3]=o*x+a*E+l*R,r[6]=o*m+a*v+l*P,r[1]=c*y+h*_+u*I,r[4]=c*x+h*E+u*R,r[7]=c*m+h*v+u*P,r[2]=d*y+f*_+g*I,r[5]=d*x+f*E+g*R,r[8]=d*m+f*v+g*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*c-h*i)*y,t[2]=(a*i-s*o)*y,t[3]=d*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=f*y,t[7]=(i*l-c*e)*y,t[8]=(o*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(xh.makeScale(t,e)),this}rotate(t){return this.premultiply(xh.makeRotation(-t)),this}translate(t,e){return this.premultiply(xh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},xh=new ae;function G0(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Bl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Uy(){let n=Bl("canvas");return n.style.display="block",n}var Rp={};function ga(n){n in Rp||(Rp[n]=!0,console.warn(n))}function Ny(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Hy(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ky(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var me={enabled:!0,workingColorSpace:Mo,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Le&&(n.r=ji(n.r),n.g=ji(n.g),n.b=ji(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Le&&(n.r=ro(n.r),n.g=ro(n.g),n.b=ro(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Rs?uc:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function ji(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ro(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Cp=[.64,.33,.3,.6,.15,.06],Pp=[.2126,.7152,.0722],Ip=[.3127,.329],Lp=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dp=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);me.define({[Mo]:{primaries:Cp,whitePoint:Ip,transfer:uc,toXYZ:Lp,fromXYZ:Dp,luminanceCoefficients:Pp,workingColorSpaceConfig:{unpackColorSpace:_e},outputColorSpaceConfig:{drawingBufferColorSpace:_e}},[_e]:{primaries:Cp,whitePoint:Ip,transfer:Le,toXYZ:Lp,fromXYZ:Dp,luminanceCoefficients:Pp,outputColorSpaceConfig:{drawingBufferColorSpace:_e}}});var Fr,Nu=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Fr===void 0&&(Fr=Bl("canvas")),Fr.width=t.width,Fr.height=t.height;let i=Fr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Fr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Bl("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ji(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ji(e[i]/255)*255):e[i]=ji(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zy=0,Vl=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=Ki(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(yh(s[o].image)):r.push(yh(s[o]))}else r=yh(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function yh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Nu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Fy=0,Ln=class n extends Ls{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=dr,s=dr,r=bi,o=fr,a=ci,l=ts,c=n.DEFAULT_ANISOTROPY,h=Rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=Ki(),this.name="",this.source=new Vl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==I0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qi:t.x=t.x-Math.floor(t.x);break;case dr:t.x=t.x<0?0:1;break;case ou:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qi:t.y=t.y-Math.floor(t.y);break;case dr:t.y=t.y<0?0:1;break;case ou:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=I0;Ln.DEFAULT_ANISOTROPY=1;var Ne=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],y=l[2],x=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+x)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,v=(f+1)/2,I=(m+1)/2,R=(h+d)/4,P=(u+y)/4,L=(g+x)/4;return E>v&&E>I?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=R/i,r=P/i):v>I?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=R/s,r=L/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=P/r,s=L/r),this.set(i,s,r,e),this}let _=Math.sqrt((x-g)*(x-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(x-g)/_,this.y=(u-y)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Hu=class extends Ls{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Ln(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Vl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},An=class extends Hu{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Gl=class extends Ln{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ku=class extends Ln{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=y;return}if(u!==y||l!==d||c!==f||h!==g){let x=1-a,m=l*d+c*f+h*g+u*y,_=m>=0?1:-1,E=1-m*m;if(E>Number.EPSILON){let I=Math.sqrt(E),R=Math.atan2(I,m*_);x=Math.sin(x*R)/I,a=Math.sin(a*R)/I}let v=a*_;if(l=l*x+d*v,c=c*x+f*v,h=h*x+g*v,u=u*x+y*v,x===1-a){let I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Up.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Up.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return vh.copy(this).projectOnVector(t),this.sub(vh)}reflect(t){return this.sub(vh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(pn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vh=new T,Up=new rn,hi=class{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ri):ri.fromBufferAttribute(r,o),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ol.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ol.copy(i.boundingBox)),ol.applyMatrix4(t.matrixWorld),this.union(ol)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(oa),al.subVectors(this.max,oa),Or.subVectors(t.a,oa),Br.subVectors(t.b,oa),Vr.subVectors(t.c,oa),Es.subVectors(Br,Or),bs.subVectors(Vr,Br),ir.subVectors(Or,Vr);let e=[0,-Es.z,Es.y,0,-bs.z,bs.y,0,-ir.z,ir.y,Es.z,0,-Es.x,bs.z,0,-bs.x,ir.z,0,-ir.x,-Es.y,Es.x,0,-bs.y,bs.x,0,-ir.y,ir.x,0];return!_h(e,Or,Br,Vr,al)||(e=[1,0,0,0,1,0,0,0,1],!_h(e,Or,Br,Vr,al))?!1:(ll.crossVectors(Es,bs),e=[ll.x,ll.y,ll.z],_h(e,Or,Br,Vr,al))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Gi=[new T,new T,new T,new T,new T,new T,new T,new T],ri=new T,ol=new hi,Or=new T,Br=new T,Vr=new T,Es=new T,bs=new T,ir=new T,oa=new T,al=new T,ll=new T,sr=new T;function _h(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){sr.fromArray(n,r);let a=s.x*Math.abs(sr.x)+s.y*Math.abs(sr.y)+s.z*Math.abs(sr.z),l=t.dot(sr),c=e.dot(sr),h=i.dot(sr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Oy=new hi,aa=new T,Mh=new T,Ds=class{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Oy.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;aa.subVectors(t,this.center);let e=aa.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(aa,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(aa.copy(t.center).add(Mh)),this.expandByPoint(aa.copy(t.center).sub(Mh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Wi=new T,Eh=new T,cl=new T,ws=new T,bh=new T,hl=new T,wh=new T,Wl=class{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wi.copy(this.origin).addScaledVector(this.direction,e),Wi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Eh.copy(t).add(e).multiplyScalar(.5),cl.copy(e).sub(t).normalize(),ws.copy(this.origin).sub(Eh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(cl),a=ws.dot(this.direction),l=-ws.dot(cl),c=ws.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Eh).addScaledVector(cl,d),f}intersectSphere(t,e){Wi.subVectors(t.center,this.origin);let i=Wi.dot(this.direction),s=Wi.dot(Wi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Wi)!==null}intersectTriangle(t,e,i,s,r){bh.subVectors(e,t),hl.subVectors(i,t),wh.crossVectors(bh,hl);let o=this.direction.dot(wh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ws.subVectors(this.origin,t);let l=a*this.direction.dot(hl.crossVectors(ws,hl));if(l<0)return null;let c=a*this.direction.dot(bh.cross(ws));if(c<0||l+c>o)return null;let h=-a*ws.dot(wh);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ge=class n{constructor(t,e,i,s,r,o,a,l,c,h,u,d,f,g,y,x){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,f,g,y,x)}set(t,e,i,s,r,o,a,l,c,h,u,d,f,g,y,x){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=y,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Gr.setFromMatrixColumn(t,0).length(),r=1/Gr.setFromMatrixColumn(t,1).length(),o=1/Gr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-y*c,e[9]=-a*l,e[2]=y-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,y=c*u;e[0]=d+y*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=y+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,y=c*u;e[0]=d-y*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=y-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-y*u}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(By,t,Vy)}lookAt(t,e,i){let s=this.elements;return Nn.subVectors(t,e),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Ss.crossVectors(i,Nn),Ss.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Ss.crossVectors(i,Nn)),Ss.normalize(),ul.crossVectors(Nn,Ss),s[0]=Ss.x,s[4]=ul.x,s[8]=Nn.x,s[1]=Ss.y,s[5]=ul.y,s[9]=Nn.y,s[2]=Ss.z,s[6]=ul.z,s[10]=Nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],y=i[6],x=i[10],m=i[14],_=i[3],E=i[7],v=i[11],I=i[15],R=s[0],P=s[4],L=s[8],S=s[12],b=s[1],D=s[5],V=s[9],O=s[13],W=s[2],Q=s[6],Y=s[10],rt=s[14],$=s[3],mt=s[7],St=s[11],kt=s[15];return r[0]=o*R+a*b+l*W+c*$,r[4]=o*P+a*D+l*Q+c*mt,r[8]=o*L+a*V+l*Y+c*St,r[12]=o*S+a*O+l*rt+c*kt,r[1]=h*R+u*b+d*W+f*$,r[5]=h*P+u*D+d*Q+f*mt,r[9]=h*L+u*V+d*Y+f*St,r[13]=h*S+u*O+d*rt+f*kt,r[2]=g*R+y*b+x*W+m*$,r[6]=g*P+y*D+x*Q+m*mt,r[10]=g*L+y*V+x*Y+m*St,r[14]=g*S+y*O+x*rt+m*kt,r[3]=_*R+E*b+v*W+I*$,r[7]=_*P+E*D+v*Q+I*mt,r[11]=_*L+E*V+v*Y+I*St,r[15]=_*S+E*O+v*rt+I*kt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],y=t[7],x=t[11],m=t[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+y*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+x*(+e*c*u-e*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+m*(-s*a*h-e*l*u+e*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],y=t[13],x=t[14],m=t[15],_=u*x*c-y*d*c+y*l*f-a*x*f-u*l*m+a*d*m,E=g*d*c-h*x*c-g*l*f+o*x*f+h*l*m-o*d*m,v=h*y*c-g*u*c+g*a*f-o*y*f-h*a*m+o*u*m,I=g*u*l-h*y*l-g*a*d+o*y*d+h*a*x-o*u*x,R=e*_+i*E+s*v+r*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/R;return t[0]=_*P,t[1]=(y*d*r-u*x*r-y*s*f+i*x*f+u*s*m-i*d*m)*P,t[2]=(a*x*r-y*l*r+y*s*c-i*x*c-a*s*m+i*l*m)*P,t[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*P,t[4]=E*P,t[5]=(h*x*r-g*d*r+g*s*f-e*x*f-h*s*m+e*d*m)*P,t[6]=(g*l*r-o*x*r-g*s*c+e*x*c+o*s*m-e*l*m)*P,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*P,t[8]=v*P,t[9]=(g*u*r-h*y*r-g*i*f+e*y*f+h*i*m-e*u*m)*P,t[10]=(o*y*r-g*a*r+g*i*c-e*y*c-o*i*m+e*a*m)*P,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*f-e*a*f)*P,t[12]=I*P,t[13]=(h*y*s-g*u*s+g*i*d-e*y*d-h*i*x+e*u*x)*P,t[14]=(g*a*s-o*y*s-g*i*l+e*y*l+o*i*x-e*a*x)*P,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*d+e*a*d)*P,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,y=o*h,x=o*u,m=a*u,_=l*c,E=l*h,v=l*u,I=i.x,R=i.y,P=i.z;return s[0]=(1-(y+m))*I,s[1]=(f+v)*I,s[2]=(g-E)*I,s[3]=0,s[4]=(f-v)*R,s[5]=(1-(d+m))*R,s[6]=(x+_)*R,s[7]=0,s[8]=(g+E)*P,s[9]=(x-_)*P,s[10]=(1-(d+y))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Gr.set(s[0],s[1],s[2]).length(),o=Gr.set(s[4],s[5],s[6]).length(),a=Gr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],oi.copy(this);let c=1/r,h=1/o,u=1/a;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=u,oi.elements[9]*=u,oi.elements[10]*=u,e.setFromRotationMatrix(oi),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Ji){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),f,g;if(a===Ji)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ol)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Ji){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),d=(e+t)*c,f=(i+s)*h,g,y;if(a===Ji)g=(o+r)*u,y=-2*u;else if(a===Ol)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Gr=new T,oi=new ge,By=new T(0,0,0),Vy=new T(1,1,1),Ss=new T,ul=new T,Nn=new T,Np=new ge,Hp=new rn,mn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(pn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(pn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-pn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Np.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Np,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hp.setFromEuler(this),this.setFromQuaternion(Hp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mn.DEFAULT_ORDER="XYZ";var Xl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Gy=0,kp=new T,Wr=new rn,Xi=new ge,dl=new T,la=new T,Wy=new T,Xy=new rn,zp=new T(1,0,0),Fp=new T(0,1,0),Op=new T(0,0,1),Bp={type:"added"},$y={type:"removed"},Xr={type:"childadded",child:null},Sh={type:"childremoved",child:null},hn=class n extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new T,e=new mn,i=new rn,s=new T(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new ae}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wr.setFromAxisAngle(t,e),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(t,e){return Wr.setFromAxisAngle(t,e),this.quaternion.premultiply(Wr),this}rotateX(t){return this.rotateOnAxis(zp,t)}rotateY(t){return this.rotateOnAxis(Fp,t)}rotateZ(t){return this.rotateOnAxis(Op,t)}translateOnAxis(t,e){return kp.copy(t).applyQuaternion(this.quaternion),this.position.add(kp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zp,t)}translateY(t){return this.translateOnAxis(Fp,t)}translateZ(t){return this.translateOnAxis(Op,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?dl.copy(t):dl.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(la,dl,this.up):Xi.lookAt(dl,la,this.up),this.quaternion.setFromRotationMatrix(Xi),s&&(Xi.extractRotation(s.matrixWorld),Wr.setFromRotationMatrix(Xi),this.quaternion.premultiply(Wr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bp),Xr.child=t,this.dispatchEvent(Xr),Xr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($y),Sh.child=t,this.dispatchEvent(Sh),Sh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bp),Xr.child=t,this.dispatchEvent(Xr),Xr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,t,Wy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,Xy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};hn.DEFAULT_UP=new T(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ai=new T,$i=new T,Th=new T,qi=new T,$r=new T,qr=new T,Vp=new T,Ah=new T,Rh=new T,Ch=new T,Ph=new Ne,Ih=new Ne,Lh=new Ne,Cs=class n{constructor(t=new T,e=new T,i=new T){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ai.subVectors(t,e),s.cross(ai);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ai.subVectors(s,e),$i.subVectors(i,e),Th.subVectors(t,e);let o=ai.dot(ai),a=ai.dot($i),l=ai.dot(Th),c=$i.dot($i),h=$i.dot(Th),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qi.x),l.addScaledVector(o,qi.y),l.addScaledVector(a,qi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Ph.setScalar(0),Ih.setScalar(0),Lh.setScalar(0),Ph.fromBufferAttribute(t,e),Ih.fromBufferAttribute(t,i),Lh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ph,r.x),o.addScaledVector(Ih,r.y),o.addScaledVector(Lh,r.z),o}static isFrontFacing(t,e,i,s){return ai.subVectors(i,e),$i.subVectors(t,e),ai.cross($i).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),ai.cross($i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;$r.subVectors(s,i),qr.subVectors(r,i),Ah.subVectors(t,i);let l=$r.dot(Ah),c=qr.dot(Ah);if(l<=0&&c<=0)return e.copy(i);Rh.subVectors(t,s);let h=$r.dot(Rh),u=qr.dot(Rh);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector($r,o);Ch.subVectors(t,r);let f=$r.dot(Ch),g=qr.dot(Ch);if(g>=0&&f<=g)return e.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(qr,a);let x=h*g-f*u;if(x<=0&&u-h>=0&&f-g>=0)return Vp.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Vp,a);let m=1/(x+y+d);return o=y*m,a=d*m,e.copy(i).addScaledVector($r,o).addScaledVector(qr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},W0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ts={h:0,s:0,l:0},fl={h:0,s:0,l:0};function Dh(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var dt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=i,me.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=me.workingColorSpace){if(t=Ud(t,1),e=pn(e,0,1),i=pn(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Dh(o,r,t+1/3),this.g=Dh(o,r,t),this.b=Dh(o,r,t-1/3)}return me.toWorkingColorSpace(this,s),this}setStyle(t,e=_e){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_e){let i=W0[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}copyLinearToSRGB(t){return this.r=ro(t.r),this.g=ro(t.g),this.b=ro(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_e){return me.fromWorkingColorSpace(vn.copy(this),t),Math.round(pn(vn.r*255,0,255))*65536+Math.round(pn(vn.g*255,0,255))*256+Math.round(pn(vn.b*255,0,255))}getHexString(t=_e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace(vn.copy(this),e);let i=vn.r,s=vn.g,r=vn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace(vn.copy(this),e),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=_e){me.fromWorkingColorSpace(vn.copy(this),t);let e=vn.r,i=vn.g,s=vn.b;return t!==_e?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ts),this.setHSL(Ts.h+t,Ts.s+e,Ts.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ts),t.getHSL(fl);let i=va(Ts.h,fl.h,e),s=va(Ts.s,fl.s,e),r=va(Ts.l,fl.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new dt;dt.NAMES=W0;var qy=0,es=class extends Ls{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=Ki(),this.name="",this.blending=Ti,this.side=Is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zh,this.blendDst=Jh,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zr,this.stencilZFail=zr,this.stencilZPass=zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(i.blending=this.blending),this.side!==Is&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zh&&(i.blendSrc=this.blendSrc),this.blendDst!==Jh&&(i.blendDst=this.blendDst),this.blendEquation!==hr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ne=class extends es{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=P0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var an=new T,pl=new nt,Ye=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Uu,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)pl.fromBufferAttribute(this,e),pl.applyMatrix3(t),this.setXY(e,pl.x,pl.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)an.fromBufferAttribute(this,e),an.applyMatrix3(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=li(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ue(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=li(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=li(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=li(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=li(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),s=Ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),s=Ue(s,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Uu&&(t.usage=this.usage),t}};var $l=class extends Ye{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ql=class extends Ye{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Yt=class extends Ye{constructor(t,e,i){super(new Float32Array(t),e,i)}},Yy=0,qn=new ge,Uh=new hn,Yr=new T,Hn=new hi,ca=new hi,fn=new T,Te=class n extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yy++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(G0(t)?ql:$l)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ae().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,i){return qn.makeTranslation(t,e,i),this.applyMatrix4(qn),this}scale(t,e,i){return qn.makeScale(t,e,i),this.applyMatrix4(qn),this}lookAt(t){return Uh.lookAt(t),Uh.updateMatrix(),this.applyMatrix4(Uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yr).negate(),this.translate(Yr.x,Yr.y,Yr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yt(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Hn.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ds);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){let i=this.boundingSphere.center;if(Hn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ca.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(Hn.min,ca.min),Hn.expandByPoint(fn),fn.addVectors(Hn.max,ca.max),Hn.expandByPoint(fn)):(Hn.expandByPoint(ca.min),Hn.expandByPoint(ca.max))}Hn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)fn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(fn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)fn.fromBufferAttribute(a,c),l&&(Yr.fromBufferAttribute(t,c),fn.add(Yr)),s=Math.max(s,i.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new T,l[L]=new T;let c=new T,h=new T,u=new T,d=new nt,f=new nt,g=new nt,y=new T,x=new T;function m(L,S,b){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,b),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,b),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),x.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),a[L].add(y),a[S].add(y),a[b].add(y),l[L].add(x),l[S].add(x),l[b].add(x))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let L=0,S=_.length;L<S;++L){let b=_[L],D=b.start,V=b.count;for(let O=D,W=D+V;O<W;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let E=new T,v=new T,I=new T,R=new T;function P(L){I.fromBufferAttribute(s,L),R.copy(I);let S=a[L];E.copy(S),E.sub(I.multiplyScalar(I.dot(S))).normalize(),v.crossVectors(R,S);let D=v.dot(l[L])<0?-1:1;o.setXYZW(L,E.x,E.y,E.z,D)}for(let L=0,S=_.length;L<S;++L){let b=_[L],D=b.start,V=b.count;for(let O=D,W=D+V;O<W;O+=3)P(t.getX(O+0)),P(t.getX(O+1)),P(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new T,r=new T,o=new T,a=new T,l=new T,c=new T,h=new T,u=new T;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),y=t.getX(d+1),x=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,x),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,x),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)fn.fromBufferAttribute(t,e),fn.normalize(),t.setXYZ(e,fn.x,fn.y,fn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let y=0,x=l.length;y<x;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new Ye(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gp=new ge,rr=new Wl,ml=new Ds,Wp=new T,gl=new T,xl=new T,yl=new T,Nh=new T,vl=new T,Xp=new T,_l=new T,at=class extends hn{constructor(t=new Te,e=new ne){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){vl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Nh.fromBufferAttribute(u,t),o?vl.addScaledVector(Nh,h):vl.addScaledVector(Nh.sub(e),h))}e.add(vl)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ml.copy(i.boundingSphere),ml.applyMatrix4(r),rr.copy(t.ray).recast(t.near),!(ml.containsPoint(rr.origin)===!1&&(rr.intersectSphere(ml,Wp)===null||rr.origin.distanceToSquared(Wp)>(t.far-t.near)**2))&&(Gp.copy(r).invert(),rr.copy(t.ray).applyMatrix4(Gp),!(i.boundingBox!==null&&rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,rr)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let x=d[g],m=o[x.materialIndex],_=Math.max(x.start,f.start),E=Math.min(a.count,Math.min(x.start+x.count,f.start+f.count));for(let v=_,I=E;v<I;v+=3){let R=a.getX(v),P=a.getX(v+1),L=a.getX(v+2);s=Ml(this,m,t,i,c,h,u,R,P,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let x=g,m=y;x<m;x+=3){let _=a.getX(x),E=a.getX(x+1),v=a.getX(x+2);s=Ml(this,o,t,i,c,h,u,_,E,v),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let x=d[g],m=o[x.materialIndex],_=Math.max(x.start,f.start),E=Math.min(l.count,Math.min(x.start+x.count,f.start+f.count));for(let v=_,I=E;v<I;v+=3){let R=v,P=v+1,L=v+2;s=Ml(this,m,t,i,c,h,u,R,P,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let x=g,m=y;x<m;x+=3){let _=x,E=x+1,v=x+2;s=Ml(this,o,t,i,c,h,u,_,E,v),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function Zy(n,t,e,i,s,r,o,a){let l;if(t.side===_n?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Is,a),l===null)return null;_l.copy(a),_l.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(_l);return c<e.near||c>e.far?null:{distance:c,point:_l.clone(),object:n}}function Ml(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,gl),n.getVertexPosition(l,xl),n.getVertexPosition(c,yl);let h=Zy(n,t,e,i,gl,xl,yl,Xp);if(h){let u=new T;Cs.getBarycoord(Xp,gl,xl,yl,u),s&&(h.uv=Cs.getInterpolatedAttribute(s,a,l,c,u,new nt)),r&&(h.uv1=Cs.getInterpolatedAttribute(r,a,l,c,u,new nt)),o&&(h.normal=Cs.getInterpolatedAttribute(o,a,l,c,u,new T),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new T,materialIndex:0};Cs.getNormal(gl,xl,yl,d.normal),h.face=d,h.barycoord=u}return h}var Gt=class n extends Te{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(u,2));function g(y,x,m,_,E,v,I,R,P,L,S){let b=v/P,D=I/L,V=v/2,O=I/2,W=R/2,Q=P+1,Y=L+1,rt=0,$=0,mt=new T;for(let St=0;St<Y;St++){let kt=St*D-O;for(let ue=0;ue<Q;ue++){let ke=ue*b-V;mt[y]=ke*_,mt[x]=kt*E,mt[m]=W,c.push(mt.x,mt.y,mt.z),mt[y]=0,mt[x]=0,mt[m]=R>0?1:-1,h.push(mt.x,mt.y,mt.z),u.push(ue/P),u.push(1-St/L),rt+=1}}for(let St=0;St<L;St++)for(let kt=0;kt<P;kt++){let ue=d+kt+Q*St,ke=d+kt+Q*(St+1),J=d+(kt+1)+Q*(St+1),ot=d+(kt+1)+Q*St;l.push(ue,ke,ot),l.push(ke,J,ot),$+=6}a.addGroup(f,$,S),f+=$,d+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function po(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Tn(n){let t={};for(let e=0;e<n.length;e++){let i=po(n[e]);for(let s in i)t[s]=i[s]}return t}function Jy(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function X0(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var zs={clone:po,merge:Tn},Ky=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends es{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ky,this.fragmentShader=jy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=po(t.uniforms),this.uniformsGroups=Jy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Yl=class extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Ji}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},As=new T,$p=new nt,qp=new nt,sn=class extends Yl{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=fo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ya*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fo*2*Math.atan(Math.tan(ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){As.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(As.x,As.y).multiplyScalar(-t/As.z),As.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(As.x,As.y).multiplyScalar(-t/As.z)}getViewSize(t,e){return this.getViewBounds(t,$p,qp),e.subVectors(qp,$p)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ya*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Zr=-90,Jr=1,zu=class extends hn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new sn(Zr,Jr,t,e);s.layers=this.layers,this.add(s);let r=new sn(Zr,Jr,t,e);r.layers=this.layers,this.add(r);let o=new sn(Zr,Jr,t,e);o.layers=this.layers,this.add(o);let a=new sn(Zr,Jr,t,e);a.layers=this.layers,this.add(a);let l=new sn(Zr,Jr,t,e);l.layers=this.layers,this.add(l);let c=new sn(Zr,Jr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Ji)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ol)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Zl=class extends Ln{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:lo,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Fu=class extends An{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Zl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gt(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:po(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Si});r.uniforms.tEquirect.value=e;let o=new at(s,r),a=e.minFilter;return e.minFilter===fr&&(e.minFilter=bi),new zu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Hh=new T,Qy=new T,tv=new ae,Zi=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Hh.subVectors(i,e).cross(Qy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Hh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||tv.getNormalMatrix(t),s=this.coplanarPoint(Hh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},or=new Ds,El=new T,wa=class{constructor(t=new Zi,e=new Zi,i=new Zi,s=new Zi,r=new Zi,o=new Zi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ji){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],y=s[10],x=s[11],m=s[12],_=s[13],E=s[14],v=s[15];if(i[0].setComponents(l-r,d-c,x-f,v-m).normalize(),i[1].setComponents(l+r,d+c,x+f,v+m).normalize(),i[2].setComponents(l+o,d+h,x+g,v+_).normalize(),i[3].setComponents(l-o,d-h,x-g,v-_).normalize(),i[4].setComponents(l-a,d-u,x-y,v-E).normalize(),e===Ji)i[5].setComponents(l+a,d+u,x+y,v+E).normalize();else if(e===Ol)i[5].setComponents(a,u,y,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(t){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(t.matrixWorld),this.intersectsSphere(or)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(El.x=s.normal.x>0?t.max.x:t.min.x,El.y=s.normal.y>0?t.max.y:t.min.y,El.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(El)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function $0(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function ev(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let y=u[f];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var zn=class n extends Te{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],y=[],x=[];for(let m=0;m<h;m++){let _=m*d-o;for(let E=0;E<c;E++){let v=E*u-r;g.push(v,-_,0),y.push(0,0,1),x.push(E/a),x.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let E=_+c*m,v=_+c*(m+1),I=_+1+c*(m+1),R=_+1+c*m;f.push(E,v,R),f.push(v,I,R)}this.setIndex(f),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(y,3)),this.setAttribute("uv",new Yt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},nv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iv=`#ifdef USE_ALPHAHASH
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
#endif`,sv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ov=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,av=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lv=`#ifdef USE_AOMAP
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
#endif`,cv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hv=`#ifdef USE_BATCHING
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
#endif`,uv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mv=`#ifdef USE_IRIDESCENCE
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
#endif`,gv=`#ifdef USE_BUMPMAP
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
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ev=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sv=`#define PI 3.141592653589793
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
} // validated`,Tv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Av=`vec3 transformedNormal = objectNormal;
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
#endif`,Rv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uv=`#ifdef USE_ENVMAP
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
#endif`,Nv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hv=`#ifdef USE_ENVMAP
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
#endif`,kv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zv=`#ifdef USE_ENVMAP
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
#endif`,Fv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ov=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gv=`#ifdef USE_GRADIENTMAP
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
}`,Wv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$v=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qv=`uniform bool receiveShadow;
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
#endif`,Yv=`#ifdef USE_ENVMAP
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
#endif`,Zv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qv=`PhysicalMaterial material;
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
#endif`,t1=`struct PhysicalMaterial {
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
}`,e1=`
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
#endif`,n1=`#if defined( RE_IndirectDiffuse )
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
#endif`,i1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,u1=`#if defined( USE_POINTS_UV )
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
#endif`,d1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x1=`#ifdef USE_MORPHTARGETS
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
#endif`,y1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,M1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,w1=`#ifdef USE_NORMALMAP
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
#endif`,S1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,I1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,O1=`float getShadowMask() {
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
}`,B1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V1=`#ifdef USE_SKINNING
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
#endif`,G1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,W1=`#ifdef USE_SKINNING
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
#endif`,X1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,q1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Y1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z1=`#ifdef USE_TRANSMISSION
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
#endif`,J1=`#ifdef USE_TRANSMISSION
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
#endif`,K1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,e_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n_=`uniform sampler2D t2D;
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
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a_=`#include <common>
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
}`,l_=`#if DEPTH_PACKING == 3200
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
}`,c_=`#define DISTANCE
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
}`,h_=`#define DISTANCE
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
}`,u_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f_=`uniform float scale;
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
}`,p_=`uniform vec3 diffuse;
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
}`,m_=`#include <common>
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
}`,g_=`uniform vec3 diffuse;
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
}`,x_=`#define LAMBERT
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
}`,y_=`#define LAMBERT
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
}`,v_=`#define MATCAP
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
}`,__=`#define MATCAP
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
}`,M_=`#define NORMAL
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
}`,E_=`#define NORMAL
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
}`,b_=`#define PHONG
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
}`,w_=`#define PHONG
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
}`,S_=`#define STANDARD
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
}`,T_=`#define STANDARD
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
}`,A_=`#define TOON
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
}`,R_=`#define TOON
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
}`,C_=`uniform float size;
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
}`,P_=`uniform vec3 diffuse;
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
}`,I_=`#include <common>
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
}`,L_=`uniform vec3 color;
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
}`,D_=`uniform float rotation;
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
}`,U_=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:nv,alphahash_pars_fragment:iv,alphamap_fragment:sv,alphamap_pars_fragment:rv,alphatest_fragment:ov,alphatest_pars_fragment:av,aomap_fragment:lv,aomap_pars_fragment:cv,batching_pars_vertex:hv,batching_vertex:uv,begin_vertex:dv,beginnormal_vertex:fv,bsdfs:pv,iridescence_fragment:mv,bumpmap_pars_fragment:gv,clipping_planes_fragment:xv,clipping_planes_pars_fragment:yv,clipping_planes_pars_vertex:vv,clipping_planes_vertex:_v,color_fragment:Mv,color_pars_fragment:Ev,color_pars_vertex:bv,color_vertex:wv,common:Sv,cube_uv_reflection_fragment:Tv,defaultnormal_vertex:Av,displacementmap_pars_vertex:Rv,displacementmap_vertex:Cv,emissivemap_fragment:Pv,emissivemap_pars_fragment:Iv,colorspace_fragment:Lv,colorspace_pars_fragment:Dv,envmap_fragment:Uv,envmap_common_pars_fragment:Nv,envmap_pars_fragment:Hv,envmap_pars_vertex:kv,envmap_physical_pars_fragment:Yv,envmap_vertex:zv,fog_vertex:Fv,fog_pars_vertex:Ov,fog_fragment:Bv,fog_pars_fragment:Vv,gradientmap_pars_fragment:Gv,lightmap_pars_fragment:Wv,lights_lambert_fragment:Xv,lights_lambert_pars_fragment:$v,lights_pars_begin:qv,lights_toon_fragment:Zv,lights_toon_pars_fragment:Jv,lights_phong_fragment:Kv,lights_phong_pars_fragment:jv,lights_physical_fragment:Qv,lights_physical_pars_fragment:t1,lights_fragment_begin:e1,lights_fragment_maps:n1,lights_fragment_end:i1,logdepthbuf_fragment:s1,logdepthbuf_pars_fragment:r1,logdepthbuf_pars_vertex:o1,logdepthbuf_vertex:a1,map_fragment:l1,map_pars_fragment:c1,map_particle_fragment:h1,map_particle_pars_fragment:u1,metalnessmap_fragment:d1,metalnessmap_pars_fragment:f1,morphinstance_vertex:p1,morphcolor_vertex:m1,morphnormal_vertex:g1,morphtarget_pars_vertex:x1,morphtarget_vertex:y1,normal_fragment_begin:v1,normal_fragment_maps:_1,normal_pars_fragment:M1,normal_pars_vertex:E1,normal_vertex:b1,normalmap_pars_fragment:w1,clearcoat_normal_fragment_begin:S1,clearcoat_normal_fragment_maps:T1,clearcoat_pars_fragment:A1,iridescence_pars_fragment:R1,opaque_fragment:C1,packing:P1,premultiplied_alpha_fragment:I1,project_vertex:L1,dithering_fragment:D1,dithering_pars_fragment:U1,roughnessmap_fragment:N1,roughnessmap_pars_fragment:H1,shadowmap_pars_fragment:k1,shadowmap_pars_vertex:z1,shadowmap_vertex:F1,shadowmask_pars_fragment:O1,skinbase_vertex:B1,skinning_pars_vertex:V1,skinning_vertex:G1,skinnormal_vertex:W1,specularmap_fragment:X1,specularmap_pars_fragment:$1,tonemapping_fragment:q1,tonemapping_pars_fragment:Y1,transmission_fragment:Z1,transmission_pars_fragment:J1,uv_pars_fragment:K1,uv_pars_vertex:j1,uv_vertex:Q1,worldpos_vertex:t_,background_vert:e_,background_frag:n_,backgroundCube_vert:i_,backgroundCube_frag:s_,cube_vert:r_,cube_frag:o_,depth_vert:a_,depth_frag:l_,distanceRGBA_vert:c_,distanceRGBA_frag:h_,equirect_vert:u_,equirect_frag:d_,linedashed_vert:f_,linedashed_frag:p_,meshbasic_vert:m_,meshbasic_frag:g_,meshlambert_vert:x_,meshlambert_frag:y_,meshmatcap_vert:v_,meshmatcap_frag:__,meshnormal_vert:M_,meshnormal_frag:E_,meshphong_vert:b_,meshphong_frag:w_,meshphysical_vert:S_,meshphysical_frag:T_,meshtoon_vert:A_,meshtoon_frag:R_,points_vert:C_,points_frag:P_,shadow_vert:I_,shadow_frag:L_,sprite_vert:D_,sprite_frag:U_},ct={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},Ei={basic:{uniforms:Tn([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Tn([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new dt(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Tn([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Tn([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Tn([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new dt(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Tn([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Tn([ct.points,ct.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Tn([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Tn([ct.common,ct.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Tn([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Tn([ct.sprite,ct.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:Tn([ct.common,ct.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:Tn([ct.lights,ct.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Ei.physical={uniforms:Tn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};var bl={r:0,b:0,g:0},ar=new mn,N_=new ge;function H_(n,t,e,i,s,r,o){let a=new dt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(_){let E=_.isScene===!0?_.background:null;return E&&E.isTexture&&(E=(_.backgroundBlurriness>0?e:t).get(E)),E}function y(_){let E=!1,v=g(_);v===null?m(a,l):v&&v.isColor&&(m(v,1),E=!0);let I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(_,E){let v=g(E);v&&(v.isCubeTexture||v.mapping===hc)?(h===void 0&&(h=new at(new Gt(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:po(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ar.copy(E.backgroundRotation),ar.x*=-1,ar.y*=-1,ar.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(N_.makeRotationFromEuler(ar)),h.material.toneMapped=me.getTransfer(v.colorSpace)!==Le,(u!==v||d!==v.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=n.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new at(new zn(2,2),new tn({name:"BackgroundMaterial",uniforms:po(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Is,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=me.getTransfer(v.colorSpace)!==Le,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,E){_.getRGB(bl,X0(n)),i.buffers.color.setClear(bl.r,bl.g,bl.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(_,E=1){a.set(_),l=E,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,m(a,l)},render:y,addToRenderList:x}}function k_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(b,D,V,O,W){let Q=!1,Y=u(O,V,D);r!==Y&&(r=Y,c(r.object)),Q=f(b,O,V,W),Q&&g(b,O,V,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,v(b,D,V,O),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function u(b,D,V){let O=V.wireframe===!0,W=i[b.id];W===void 0&&(W={},i[b.id]=W);let Q=W[D.id];Q===void 0&&(Q={},W[D.id]=Q);let Y=Q[O];return Y===void 0&&(Y=d(l()),Q[O]=Y),Y}function d(b){let D=[],V=[],O=[];for(let W=0;W<e;W++)D[W]=0,V[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:O,object:b,attributes:{},index:null}}function f(b,D,V,O){let W=r.attributes,Q=D.attributes,Y=0,rt=V.getAttributes();for(let $ in rt)if(rt[$].location>=0){let St=W[$],kt=Q[$];if(kt===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(kt=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(kt=b.instanceColor)),St===void 0||St.attribute!==kt||kt&&St.data!==kt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==O}function g(b,D,V,O){let W={},Q=D.attributes,Y=0,rt=V.getAttributes();for(let $ in rt)if(rt[$].location>=0){let St=Q[$];St===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(St=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(St=b.instanceColor));let kt={};kt.attribute=St,St&&St.data&&(kt.data=St.data),W[$]=kt,Y++}r.attributes=W,r.attributesNum=Y,r.index=O}function y(){let b=r.newAttributes;for(let D=0,V=b.length;D<V;D++)b[D]=0}function x(b){m(b,0)}function m(b,D){let V=r.newAttributes,O=r.enabledAttributes,W=r.attributeDivisors;V[b]=1,O[b]===0&&(n.enableVertexAttribArray(b),O[b]=1),W[b]!==D&&(n.vertexAttribDivisor(b,D),W[b]=D)}function _(){let b=r.newAttributes,D=r.enabledAttributes;for(let V=0,O=D.length;V<O;V++)D[V]!==b[V]&&(n.disableVertexAttribArray(V),D[V]=0)}function E(b,D,V,O,W,Q,Y){Y===!0?n.vertexAttribIPointer(b,D,V,W,Q):n.vertexAttribPointer(b,D,V,O,W,Q)}function v(b,D,V,O){y();let W=O.attributes,Q=V.getAttributes(),Y=D.defaultAttributeValues;for(let rt in Q){let $=Q[rt];if($.location>=0){let mt=W[rt];if(mt===void 0&&(rt==="instanceMatrix"&&b.instanceMatrix&&(mt=b.instanceMatrix),rt==="instanceColor"&&b.instanceColor&&(mt=b.instanceColor)),mt!==void 0){let St=mt.normalized,kt=mt.itemSize,ue=t.get(mt);if(ue===void 0)continue;let ke=ue.buffer,J=ue.type,ot=ue.bytesPerElement,Lt=J===n.INT||J===n.UNSIGNED_INT||mt.gpuType===Td;if(mt.isInterleavedBufferAttribute){let gt=mt.data,$t=gt.stride,ie=mt.offset;if(gt.isInstancedInterleavedBuffer){for(let de=0;de<$.locationSize;de++)m($.location+de,gt.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let de=0;de<$.locationSize;de++)x($.location+de);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let de=0;de<$.locationSize;de++)E($.location+de,kt/$.locationSize,J,St,$t*ot,(ie+kt/$.locationSize*de)*ot,Lt)}else{if(mt.isInstancedBufferAttribute){for(let gt=0;gt<$.locationSize;gt++)m($.location+gt,mt.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let gt=0;gt<$.locationSize;gt++)x($.location+gt);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let gt=0;gt<$.locationSize;gt++)E($.location+gt,kt/$.locationSize,J,St,kt*ot,kt/$.locationSize*gt*ot,Lt)}}else if(Y!==void 0){let St=Y[rt];if(St!==void 0)switch(St.length){case 2:n.vertexAttrib2fv($.location,St);break;case 3:n.vertexAttrib3fv($.location,St);break;case 4:n.vertexAttrib4fv($.location,St);break;default:n.vertexAttrib1fv($.location,St)}}}}_()}function I(){L();for(let b in i){let D=i[b];for(let V in D){let O=D[V];for(let W in O)h(O[W].object),delete O[W];delete D[V]}delete i[b]}}function R(b){if(i[b.id]===void 0)return;let D=i[b.id];for(let V in D){let O=D[V];for(let W in O)h(O[W].object),delete O[W];delete D[V]}delete i[b.id]}function P(b){for(let D in i){let V=i[D];if(V[b.id]===void 0)continue;let O=V[b.id];for(let W in O)h(O[W].object),delete O[W];delete V[b.id]}}function L(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:x,disableUnusedAttributes:_}}function z_(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y]*d[y];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function F_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==ci&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let L=P===fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ts&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==wi&&!L)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:I,maxSamples:R}}function O_(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Zi,a=new ae,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,x=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!x)r?h(null):c();else{let _=r?0:i,E=_*4,v=m.clippingState||null;l.value=v,v=h(g,d,E,f);for(let I=0;I!==E;++I)v[I]=e[I];m.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,x=null;if(y!==0){if(x=l.value,g!==!0||x===null){let m=f+y*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(x===null||x.length<m)&&(x=new Float32Array(m));for(let E=0,v=f;E!==y;++E,v+=4)o.copy(u[E]).applyMatrix4(_,a),o.normal.toArray(x,v),x[v+3]=o.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,x}}function B_(n){let t=new WeakMap;function e(o,a){return a===su?o.mapping=lo:a===ru&&(o.mapping=co),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===su||a===ru)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Fu(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var mo=class extends Yl{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},io=4,Yp=[.125,.215,.35,.446,.526,.582],ur=20,kh=new mo,Zp=new dt,zh=null,Fh=0,Oh=0,Bh=!1,cr=(1+Math.sqrt(5))/2,Kr=1/cr,Jp=[new T(-cr,Kr,0),new T(cr,Kr,0),new T(-Kr,0,cr),new T(Kr,0,cr),new T(0,cr,-Kr),new T(0,cr,Kr),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],go=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){zh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(zh,Fh,Oh),this._renderer.xr.enabled=Bh,t.scissorTest=!1,wl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===lo||t.mapping===co?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:fi,format:ci,colorSpace:Mo,depthBuffer:!1},s=Kp(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kp(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=V_(r)),this._blurMaterial=G_(r,t,e)}return s}_compileMaterial(t){let e=new at(this._lodPlanes[0],t);this._renderer.compile(e,kh)}_sceneToCubeUV(t,e,i,s){let a=new sn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Zp),h.toneMapping=Ps,h.autoClear=!1;let f=new ne({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),g=new at(new Gt,f),y=!1,x=t.background;x?x.isColor&&(f.color.copy(x),t.background=null,y=!0):(f.color.copy(Zp),y=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):_===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let E=this._cubeSize;wl(s,_*E,m>2?E:0,E,E),h.setRenderTarget(s),y&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=x}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===lo||t.mapping===co;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new at(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;wl(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,kh)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Jp[(s-r-1)%Jp.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new at(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ur-1),y=r/g,x=isFinite(r)?1+Math.floor(h*y):ur;x>ur&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ur}`);let m=[],_=0;for(let P=0;P<ur;++P){let L=P/y,S=Math.exp(-L*L/2);m.push(S),P===0?_+=S:P<x&&(_+=2*S)}for(let P=0;P<m.length;P++)m[P]=m[P]/_;d.envMap.value=t.texture,d.samples.value=x,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-i;let v=this._sizeLods[s],I=3*v*(s>E-io?s-E+io:0),R=4*(this._cubeSize-v);wl(e,I,R,3*v,2*v),l.setRenderTarget(e),l.render(u,kh)}};function V_(n){let t=[],e=[],i=[],s=n,r=n-io+1+Yp.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-io?l=Yp[o-n+io-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,y=3,x=2,m=1,_=new Float32Array(y*g*f),E=new Float32Array(x*g*f),v=new Float32Array(m*g*f);for(let R=0;R<f;R++){let P=R%3*2/3-1,L=R>2?0:-1,S=[P,L,0,P+2/3,L,0,P+2/3,L+1,0,P,L,0,P+2/3,L+1,0,P,L+1,0];_.set(S,y*g*R),E.set(d,x*g*R);let b=[R,R,R,R,R,R];v.set(b,m*g*R)}let I=new Te;I.setAttribute("position",new Ye(_,y)),I.setAttribute("uv",new Ye(E,x)),I.setAttribute("faceIndex",new Ye(v,m)),t.push(I),s>io&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Kp(n,t,e){let i=new An(n,t,e);return i.texture.mapping=hc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wl(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function G_(n,t,e){let i=new Float32Array(ur),s=new T(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:ur,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Nd(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function jp(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nd(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Qp(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Nd(){return`

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
	`}function W_(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===su||l===ru,h=l===lo||l===co;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new go(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new go(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function X_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&ga("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function $_(n,t,e,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let x=0,m=y.length;x<m;x++)t.remove(y[x])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let y=f[g];for(let x=0,m=y.length;x<m;x++)t.update(y[x],n.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,y=0;if(f!==null){let _=f.array;y=f.version;for(let E=0,v=_.length;E<v;E+=3){let I=_[E+0],R=_[E+1],P=_[E+2];d.push(I,R,R,P,P,I)}}else if(g!==void 0){let _=g.array;y=g.version;for(let E=0,v=_.length/3-1;E<v;E+=3){let I=E+0,R=E+1,P=E+2;d.push(I,R,R,P,P,I)}}else return;let x=new(G0(d)?ql:$l)(d,1);x.version=y;let m=r.get(u);m&&t.remove(m),r.set(u,x)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function q_(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*o,g),e.update(f,i,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let x=0;for(let m=0;m<g;m++)x+=f[m];e.update(x,i,1)}function u(d,f,g,y){if(g===0)return;let x=t.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],y[m]);else{x.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,y,0,g);let m=0;for(let _=0;_<g;_++)m+=f[_]*y[_];e.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Y_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Z_(n,t,e){let i=new WeakMap,s=new Ne;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let S=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),y===!0&&(E=3);let v=a.attributes.position.count*E,I=1;v>t.maxTextureSize&&(I=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let R=new Float32Array(v*I*4*u),P=new Gl(R,v,I,u);P.type=wi,P.needsUpdate=!0;let L=E*4;for(let b=0;b<u;b++){let D=x[b],V=m[b],O=_[b],W=v*I*4*b;for(let Q=0;Q<D.count;Q++){let Y=Q*L;f===!0&&(s.fromBufferAttribute(D,Q),R[W+Y+0]=s.x,R[W+Y+1]=s.y,R[W+Y+2]=s.z,R[W+Y+3]=0),g===!0&&(s.fromBufferAttribute(V,Q),R[W+Y+4]=s.x,R[W+Y+5]=s.y,R[W+Y+6]=s.z,R[W+Y+7]=0),y===!0&&(s.fromBufferAttribute(O,Q),R[W+Y+8]=s.x,R[W+Y+9]=s.y,R[W+Y+10]=s.z,R[W+Y+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new nt(v,I)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function J_(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Jl=class extends Ln{constructor(t,e,i,s,r,o,a,l,c,h=so){if(h!==so&&h!==uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===so&&(i=pr),i===void 0&&h===uo&&(i=ho),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:kn,this.minFilter=l!==void 0?l:kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},q0=new Ln,t0=new Jl(1,1),Y0=new Gl,Z0=new ku,J0=new Zl,e0=[],n0=[],i0=new Float32Array(16),s0=new Float32Array(9),r0=new Float32Array(4);function Eo(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=e0[s];if(r===void 0&&(r=new Float32Array(s),e0[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function un(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function dn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function dc(n,t){let e=n0[t];e===void 0&&(e=new Int32Array(t),n0[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function K_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function j_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;n.uniform2fv(this.addr,t),dn(e,t)}}function Q_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(un(e,t))return;n.uniform3fv(this.addr,t),dn(e,t)}}function tM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;n.uniform4fv(this.addr,t),dn(e,t)}}function eM(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(un(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),dn(e,t)}else{if(un(e,i))return;r0.set(i),n.uniformMatrix2fv(this.addr,!1,r0),dn(e,i)}}function nM(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(un(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),dn(e,t)}else{if(un(e,i))return;s0.set(i),n.uniformMatrix3fv(this.addr,!1,s0),dn(e,i)}}function iM(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(un(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),dn(e,t)}else{if(un(e,i))return;i0.set(i),n.uniformMatrix4fv(this.addr,!1,i0),dn(e,i)}}function sM(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function rM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;n.uniform2iv(this.addr,t),dn(e,t)}}function oM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;n.uniform3iv(this.addr,t),dn(e,t)}}function aM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;n.uniform4iv(this.addr,t),dn(e,t)}}function lM(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function cM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;n.uniform2uiv(this.addr,t),dn(e,t)}}function hM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;n.uniform3uiv(this.addr,t),dn(e,t)}}function uM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;n.uniform4uiv(this.addr,t),dn(e,t)}}function dM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(t0.compareFunction=V0,r=t0):r=q0,e.setTexture2D(t||r,s)}function fM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Z0,s)}function pM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||J0,s)}function mM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Y0,s)}function gM(n){switch(n){case 5126:return K_;case 35664:return j_;case 35665:return Q_;case 35666:return tM;case 35674:return eM;case 35675:return nM;case 35676:return iM;case 5124:case 35670:return sM;case 35667:case 35671:return rM;case 35668:case 35672:return oM;case 35669:case 35673:return aM;case 5125:return lM;case 36294:return cM;case 36295:return hM;case 36296:return uM;case 35678:case 36198:case 36298:case 36306:case 35682:return dM;case 35679:case 36299:case 36307:return fM;case 35680:case 36300:case 36308:case 36293:return pM;case 36289:case 36303:case 36311:case 36292:return mM}}function xM(n,t){n.uniform1fv(this.addr,t)}function yM(n,t){let e=Eo(t,this.size,2);n.uniform2fv(this.addr,e)}function vM(n,t){let e=Eo(t,this.size,3);n.uniform3fv(this.addr,e)}function _M(n,t){let e=Eo(t,this.size,4);n.uniform4fv(this.addr,e)}function MM(n,t){let e=Eo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function EM(n,t){let e=Eo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function bM(n,t){let e=Eo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function wM(n,t){n.uniform1iv(this.addr,t)}function SM(n,t){n.uniform2iv(this.addr,t)}function TM(n,t){n.uniform3iv(this.addr,t)}function AM(n,t){n.uniform4iv(this.addr,t)}function RM(n,t){n.uniform1uiv(this.addr,t)}function CM(n,t){n.uniform2uiv(this.addr,t)}function PM(n,t){n.uniform3uiv(this.addr,t)}function IM(n,t){n.uniform4uiv(this.addr,t)}function LM(n,t,e){let i=this.cache,s=t.length,r=dc(e,s);un(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||q0,r[o])}function DM(n,t,e){let i=this.cache,s=t.length,r=dc(e,s);un(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Z0,r[o])}function UM(n,t,e){let i=this.cache,s=t.length,r=dc(e,s);un(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||J0,r[o])}function NM(n,t,e){let i=this.cache,s=t.length,r=dc(e,s);un(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Y0,r[o])}function HM(n){switch(n){case 5126:return xM;case 35664:return yM;case 35665:return vM;case 35666:return _M;case 35674:return MM;case 35675:return EM;case 35676:return bM;case 5124:case 35670:return wM;case 35667:case 35671:return SM;case 35668:case 35672:return TM;case 35669:case 35673:return AM;case 5125:return RM;case 36294:return CM;case 36295:return PM;case 36296:return IM;case 35678:case 36198:case 36298:case 36306:case 35682:return LM;case 35679:case 36299:case 36307:return DM;case 35680:case 36300:case 36308:case 36293:return UM;case 36289:case 36303:case 36311:case 36292:return NM}}var Ou=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=gM(e.type)}},Bu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=HM(e.type)}},Vu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Vh=/(\w+)(\])?(\[|\.)?/g;function o0(n,t){n.seq.push(t),n.map[t.id]=t}function kM(n,t,e){let i=n.name,s=i.length;for(Vh.lastIndex=0;;){let r=Vh.exec(i),o=Vh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){o0(e,c===void 0?new Ou(a,n,t):new Bu(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Vu(a),o0(e,u)),e=u}}}var oo=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);kM(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function a0(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var zM=37297,FM=0;function OM(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var l0=new ae;function BM(n){me._getMatrix(l0,me.workingColorSpace,n);let t=`mat3( ${l0.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(n)){case uc:return[t,"LinearTransferOETF"];case Le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function c0(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+OM(n.getShaderSource(t),o)}else return s}function VM(n,t){let e=BM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function GM(n,t){let e;switch(t){case Md:e="Linear";break;case Ed:e="Reinhard";break;case bd:e="Cineon";break;case vr:e="ACESFilmic";break;case wd:e="AgX";break;case Sd:e="Neutral";break;case oy:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Sl=new T;function WM(){me.getLuminanceCoefficients(Sl);let n=Sl.x.toFixed(4),t=Sl.y.toFixed(4),e=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function $M(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function qM(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function xa(n){return n!==""}function h0(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function u0(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var YM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gu(n){return n.replace(YM,JM)}var ZM=new Map;function JM(n,t){let e=he[t];if(e===void 0){let i=ZM.get(t);if(i!==void 0)e=he[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Gu(e)}var KM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function d0(n){return n.replace(KM,jM)}function jM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function f0(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function QM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===C0?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===_d?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Yi&&(t="SHADOWMAP_TYPE_VSM"),t}function tE(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case lo:case co:t="ENVMAP_TYPE_CUBE";break;case hc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function eE(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case co:t="ENVMAP_MODE_REFRACTION";break}return t}function nE(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case P0:t="ENVMAP_BLENDING_MULTIPLY";break;case sy:t="ENVMAP_BLENDING_MIX";break;case ry:t="ENVMAP_BLENDING_ADD";break}return t}function iE(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function sE(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=QM(e),c=tE(e),h=eE(e),u=nE(e),d=iE(e),f=XM(e),g=$M(r),y=s.createProgram(),x,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xa).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xa).join(`
`),m.length>0&&(m+=`
`)):(x=[f0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),m=[f0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ps?"#define TONE_MAPPING":"",e.toneMapping!==Ps?he.tonemapping_pars_fragment:"",e.toneMapping!==Ps?GM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,VM("linearToOutputTexel",e.outputColorSpace),WM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xa).join(`
`)),o=Gu(o),o=h0(o,e),o=u0(o,e),a=Gu(a),a=h0(a,e),a=u0(a,e),o=d0(o),a=d0(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===Tp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=_+x+o,v=_+m+a,I=a0(s,s.VERTEX_SHADER,E),R=a0(s,s.FRAGMENT_SHADER,v);s.attachShader(y,I),s.attachShader(y,R),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function P(D){if(n.debug.checkShaderErrors){let V=s.getProgramInfoLog(y).trim(),O=s.getShaderInfoLog(I).trim(),W=s.getShaderInfoLog(R).trim(),Q=!0,Y=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,I,R);else{let rt=c0(s,I,"vertex"),$=c0(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+rt+`
`+$)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(O===""||W==="")&&(Y=!1);Y&&(D.diagnostics={runnable:Q,programLog:V,vertexShader:{log:O,prefix:x},fragmentShader:{log:W,prefix:m}})}s.deleteShader(I),s.deleteShader(R),L=new oo(s,y),S=qM(s,y)}let L;this.getUniforms=function(){return L===void 0&&P(this),L};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(y,zM)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=FM++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=R,this}var rE=0,Wu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Xu(t),e.set(t,i)),i}},Xu=class{constructor(t){this.id=rE++,this.code=t,this.usedTimes=0}};function oE(n,t,e,i,s,r,o){let a=new Xl,l=new Wu,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return c.add(S),S===0?"uv":`uv${S}`}function x(S,b,D,V,O){let W=V.fog,Q=O.geometry,Y=S.isMeshStandardMaterial?V.environment:null,rt=(S.isMeshStandardMaterial?e:t).get(S.envMap||Y),$=rt&&rt.mapping===hc?rt.image.height:null,mt=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let St=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,kt=St!==void 0?St.length:0,ue=0;Q.morphAttributes.position!==void 0&&(ue=1),Q.morphAttributes.normal!==void 0&&(ue=2),Q.morphAttributes.color!==void 0&&(ue=3);let ke,J,ot,Lt;if(mt){let De=Ei[mt];ke=De.vertexShader,J=De.fragmentShader}else ke=S.vertexShader,J=S.fragmentShader,l.update(S),ot=l.getVertexShaderID(S),Lt=l.getFragmentShaderID(S);let gt=n.getRenderTarget(),$t=n.state.buffers.depth.getReversed(),ie=O.isInstancedMesh===!0,de=O.isBatchedMesh===!0,qe=!!S.map,be=!!S.matcap,nn=!!rt,k=!!S.aoMap,Xn=!!S.lightMap,xe=!!S.bumpMap,ye=!!S.normalMap,Ot=!!S.displacementMap,Be=!!S.emissiveMap,Ft=!!S.metalnessMap,C=!!S.roughnessMap,w=S.anisotropy>0,F=S.clearcoat>0,K=S.dispersion>0,tt=S.iridescence>0,Z=S.sheen>0,Ut=S.transmission>0,xt=w&&!!S.anisotropyMap,Tt=F&&!!S.clearcoatMap,we=F&&!!S.clearcoatNormalMap,it=F&&!!S.clearcoatRoughnessMap,At=tt&&!!S.iridescenceMap,Vt=tt&&!!S.iridescenceThicknessMap,qt=Z&&!!S.sheenColorMap,Rt=Z&&!!S.sheenRoughnessMap,ve=!!S.specularMap,ce=!!S.specularColorMap,Fe=!!S.specularIntensityMap,U=Ut&&!!S.transmissionMap,ft=Ut&&!!S.thicknessMap,X=!!S.gradientMap,j=!!S.alphaMap,bt=S.alphaTest>0,Mt=!!S.alphaHash,re=!!S.extensions,je=Ps;S.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(je=n.toneMapping);let xn={shaderID:mt,shaderType:S.type,shaderName:S.name,vertexShader:ke,fragmentShader:J,defines:S.defines,customVertexShaderID:ot,customFragmentShaderID:Lt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:de,batchingColor:de&&O._colorsTexture!==null,instancing:ie,instancingColor:ie&&O.instanceColor!==null,instancingMorph:ie&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:gt===null?n.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Mo,alphaToCoverage:!!S.alphaToCoverage,map:qe,matcap:be,envMap:nn,envMapMode:nn&&rt.mapping,envMapCubeUVHeight:$,aoMap:k,lightMap:Xn,bumpMap:xe,normalMap:ye,displacementMap:d&&Ot,emissiveMap:Be,normalMapObjectSpace:ye&&S.normalMapType===hy,normalMapTangentSpace:ye&&S.normalMapType===B0,metalnessMap:Ft,roughnessMap:C,anisotropy:w,anisotropyMap:xt,clearcoat:F,clearcoatMap:Tt,clearcoatNormalMap:we,clearcoatRoughnessMap:it,dispersion:K,iridescence:tt,iridescenceMap:At,iridescenceThicknessMap:Vt,sheen:Z,sheenColorMap:qt,sheenRoughnessMap:Rt,specularMap:ve,specularColorMap:ce,specularIntensityMap:Fe,transmission:Ut,transmissionMap:U,thicknessMap:ft,gradientMap:X,opaque:S.transparent===!1&&S.blending===Ti&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:bt,alphaHash:Mt,combine:S.combine,mapUv:qe&&y(S.map.channel),aoMapUv:k&&y(S.aoMap.channel),lightMapUv:Xn&&y(S.lightMap.channel),bumpMapUv:xe&&y(S.bumpMap.channel),normalMapUv:ye&&y(S.normalMap.channel),displacementMapUv:Ot&&y(S.displacementMap.channel),emissiveMapUv:Be&&y(S.emissiveMap.channel),metalnessMapUv:Ft&&y(S.metalnessMap.channel),roughnessMapUv:C&&y(S.roughnessMap.channel),anisotropyMapUv:xt&&y(S.anisotropyMap.channel),clearcoatMapUv:Tt&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:we&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&y(S.sheenRoughnessMap.channel),specularMapUv:ve&&y(S.specularMap.channel),specularColorMapUv:ce&&y(S.specularColorMap.channel),specularIntensityMapUv:Fe&&y(S.specularIntensityMap.channel),transmissionMapUv:U&&y(S.transmissionMap.channel),thicknessMapUv:ft&&y(S.thicknessMap.channel),alphaMapUv:j&&y(S.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(ye||w),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Q.attributes.uv&&(qe||j),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:$t,skinning:O.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:kt,morphTextureStride:ue,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:je,decodeVideoTexture:qe&&S.map.isVideoTexture===!0&&me.getTransfer(S.map.colorSpace)===Le,decodeVideoTextureEmissive:Be&&S.emissiveMap.isVideoTexture===!0&&me.getTransfer(S.emissiveMap.colorSpace)===Le,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Qe,flipSided:S.side===_n,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:re&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&S.extensions.multiDraw===!0||de)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return xn.vertexUv1s=c.has(1),xn.vertexUv2s=c.has(2),xn.vertexUv3s=c.has(3),c.clear(),xn}function m(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let D in S.defines)b.push(D),b.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(_(b,S),E(b,S),b.push(n.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function _(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function E(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){let b=g[S.type],D;if(b){let V=Ei[b];D=zs.clone(V.uniforms)}else D=S.uniforms;return D}function I(S,b){let D;for(let V=0,O=h.length;V<O;V++){let W=h[V];if(W.cacheKey===b){D=W,++D.usedTimes;break}}return D===void 0&&(D=new sE(n,b,S,r),h.push(D)),D}function R(S){if(--S.usedTimes===0){let b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function P(S){l.remove(S)}function L(){l.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:v,acquireProgram:I,releaseProgram:R,releaseShaderCache:P,programs:h,dispose:L}}function aE(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function lE(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function p0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function m0(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,f,g,y,x){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:y,group:x},n[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=y,m.group=x),t++,m}function a(u,d,f,g,y,x){let m=o(u,d,f,g,y,x);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(u,d,f,g,y,x){let m=o(u,d,f,g,y,x);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||lE),i.length>1&&i.sort(d||p0),s.length>1&&s.sort(d||p0)}function h(){for(let u=t,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function cE(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new m0,n.set(i,[o])):s>=r.length?(o=new m0,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function hE(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new dt};break;case"SpotLight":e={position:new T,direction:new T,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":e={color:new dt,position:new T,halfWidth:new T,halfHeight:new T};break}return n[t.id]=e,e}}}function uE(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var dE=0;function fE(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function pE(n){let t=new hE,e=uE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new T);let s=new T,r=new ge,o=new ge;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,g=0,y=0,x=0,m=0,_=0,E=0,v=0,I=0,R=0,P=0;c.sort(fE);for(let S=0,b=c.length;S<b;S++){let D=c[S],V=D.color,O=D.intensity,W=D.distance,Q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=V.r*O,u+=V.g*O,d+=V.b*O;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(D.sh.coefficients[Y],O);P++}else if(D.isDirectionalLight){let Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let rt=D.shadow,$=e.get(D);$.shadowIntensity=rt.intensity,$.shadowBias=rt.bias,$.shadowNormalBias=rt.normalBias,$.shadowRadius=rt.radius,$.shadowMapSize=rt.mapSize,i.directionalShadow[f]=$,i.directionalShadowMap[f]=Q,i.directionalShadowMatrix[f]=D.shadow.matrix,_++}i.directional[f]=Y,f++}else if(D.isSpotLight){let Y=t.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(V).multiplyScalar(O),Y.distance=W,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,i.spot[y]=Y;let rt=D.shadow;if(D.map&&(i.spotLightMap[I]=D.map,I++,rt.updateMatrices(D),D.castShadow&&R++),i.spotLightMatrix[y]=rt.matrix,D.castShadow){let $=e.get(D);$.shadowIntensity=rt.intensity,$.shadowBias=rt.bias,$.shadowNormalBias=rt.normalBias,$.shadowRadius=rt.radius,$.shadowMapSize=rt.mapSize,i.spotShadow[y]=$,i.spotShadowMap[y]=Q,v++}y++}else if(D.isRectAreaLight){let Y=t.get(D);Y.color.copy(V).multiplyScalar(O),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),i.rectArea[x]=Y,x++}else if(D.isPointLight){let Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){let rt=D.shadow,$=e.get(D);$.shadowIntensity=rt.intensity,$.shadowBias=rt.bias,$.shadowNormalBias=rt.normalBias,$.shadowRadius=rt.radius,$.shadowMapSize=rt.mapSize,$.shadowCameraNear=rt.camera.near,$.shadowCameraFar=rt.camera.far,i.pointShadow[g]=$,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=D.shadow.matrix,E++}i.point[g]=Y,g++}else if(D.isHemisphereLight){let Y=t.get(D);Y.skyColor.copy(D.color).multiplyScalar(O),Y.groundColor.copy(D.groundColor).multiplyScalar(O),i.hemi[m]=Y,m++}}x>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let L=i.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==y||L.rectAreaLength!==x||L.hemiLength!==m||L.numDirectionalShadows!==_||L.numPointShadows!==E||L.numSpotShadows!==v||L.numSpotMaps!==I||L.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=x,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=v+I-R,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,L.directionalLength=f,L.pointLength=g,L.spotLength=y,L.rectAreaLength=x,L.hemiLength=m,L.numDirectionalShadows=_,L.numPointShadows=E,L.numSpotShadows=v,L.numSpotMaps=I,L.numLightProbes=P,i.version=dE++)}function l(c,h){let u=0,d=0,f=0,g=0,y=0,x=h.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){let E=c[m];if(E.isDirectionalLight){let v=i.directional[u];v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(x),u++}else if(E.isSpotLight){let v=i.spot[f];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(x),v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(x),f++}else if(E.isRectAreaLight){let v=i.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(x),o.identity(),r.copy(E.matrixWorld),r.premultiply(x),o.extractRotation(r),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){let v=i.point[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(x),d++}else if(E.isHemisphereLight){let v=i.hemi[y];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(x),y++}}}return{setup:a,setupView:l,state:i}}function g0(n){let t=new pE(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function mE(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new g0(n),t.set(s,[a])):r>=o.length?(a=new g0(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var $u=class extends es{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ly,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qu=class extends es{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},gE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xE=`uniform sampler2D shadow_pass;
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
}`;function yE(n,t,e){let i=new wa,s=new nt,r=new nt,o=new Ne,a=new $u({depthPacking:cy}),l=new qu,c={},h=e.maxTextureSize,u={[Is]:_n,[_n]:Is,[Qe]:Qe},d=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:gE,fragmentShader:xE}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Te;g.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new at(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=C0;let m=this.type;this.render=function(R,P,L){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||R.length===0)return;let S=n.getRenderTarget(),b=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Si),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let O=m!==Yi&&this.type===Yi,W=m===Yi&&this.type!==Yi;for(let Q=0,Y=R.length;Q<Y;Q++){let rt=R[Q],$=rt.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let mt=$.getFrameExtents();if(s.multiply(mt),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/mt.x),s.x=r.x*mt.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/mt.y),s.y=r.y*mt.y,$.mapSize.y=r.y)),$.map===null||O===!0||W===!0){let kt=this.type!==Yi?{minFilter:kn,magFilter:kn}:{};$.map!==null&&$.map.dispose(),$.map=new An(s.x,s.y,kt),$.map.texture.name=rt.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();let St=$.getViewportCount();for(let kt=0;kt<St;kt++){let ue=$.getViewport(kt);o.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),V.viewport(o),$.updateMatrices(rt,kt),i=$.getFrustum(),v(P,L,$.camera,rt,this.type)}$.isPointLightShadow!==!0&&this.type===Yi&&_($,L),$.needsUpdate=!1}m=this.type,x.needsUpdate=!1,n.setRenderTarget(S,b,D)};function _(R,P){let L=t.update(y);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new An(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(P,null,L,d,y,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(P,null,L,f,y,null)}function E(R,P,L,S){let b=null,D=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)b=D;else if(b=L.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let V=b.uuid,O=P.uuid,W=c[V];W===void 0&&(W={},c[V]=W);let Q=W[O];Q===void 0&&(Q=b.clone(),W[O]=Q,P.addEventListener("dispose",I)),b=Q}if(b.visible=P.visible,b.wireframe=P.wireframe,S===Yi?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:u[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let V=n.properties.get(b);V.light=L}return b}function v(R,P,L,S,b){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===Yi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);let O=t.update(R),W=R.material;if(Array.isArray(W)){let Q=O.groups;for(let Y=0,rt=Q.length;Y<rt;Y++){let $=Q[Y],mt=W[$.materialIndex];if(mt&&mt.visible){let St=E(R,mt,S,b);R.onBeforeShadow(n,R,P,L,O,St,$),n.renderBufferDirect(L,null,O,St,R,$),R.onAfterShadow(n,R,P,L,O,St,$)}}}else if(W.visible){let Q=E(R,W,S,b);R.onBeforeShadow(n,R,P,L,O,Q,null),n.renderBufferDirect(L,null,O,Q,R,null),R.onAfterShadow(n,R,P,L,O,Q,null)}}let V=R.children;for(let O=0,W=V.length;O<W;O++)v(V[O],P,L,S,b)}function I(R){R.target.removeEventListener("dispose",I);for(let L in c){let S=c[L],b=R.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var vE={[Kh]:jh,[Qh]:nu,[tu]:iu,[ao]:eu,[jh]:Kh,[nu]:Qh,[iu]:tu,[eu]:ao};function _E(n,t){function e(){let U=!1,ft=new Ne,X=null,j=new Ne(0,0,0,0);return{setMask:function(bt){X!==bt&&!U&&(n.colorMask(bt,bt,bt,bt),X=bt)},setLocked:function(bt){U=bt},setClear:function(bt,Mt,re,je,xn){xn===!0&&(bt*=je,Mt*=je,re*=je),ft.set(bt,Mt,re,je),j.equals(ft)===!1&&(n.clearColor(bt,Mt,re,je),j.copy(ft))},reset:function(){U=!1,X=null,j.set(-1,0,0,0)}}}function i(){let U=!1,ft=!1,X=null,j=null,bt=null;return{setReversed:function(Mt){if(ft!==Mt){let re=t.get("EXT_clip_control");ft?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT);let je=bt;bt=null,this.setClear(je)}ft=Mt},getReversed:function(){return ft},setTest:function(Mt){Mt?gt(n.DEPTH_TEST):$t(n.DEPTH_TEST)},setMask:function(Mt){X!==Mt&&!U&&(n.depthMask(Mt),X=Mt)},setFunc:function(Mt){if(ft&&(Mt=vE[Mt]),j!==Mt){switch(Mt){case Kh:n.depthFunc(n.NEVER);break;case jh:n.depthFunc(n.ALWAYS);break;case Qh:n.depthFunc(n.LESS);break;case ao:n.depthFunc(n.LEQUAL);break;case tu:n.depthFunc(n.EQUAL);break;case eu:n.depthFunc(n.GEQUAL);break;case nu:n.depthFunc(n.GREATER);break;case iu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=Mt}},setLocked:function(Mt){U=Mt},setClear:function(Mt){bt!==Mt&&(ft&&(Mt=1-Mt),n.clearDepth(Mt),bt=Mt)},reset:function(){U=!1,X=null,j=null,bt=null,ft=!1}}}function s(){let U=!1,ft=null,X=null,j=null,bt=null,Mt=null,re=null,je=null,xn=null;return{setTest:function(De){U||(De?gt(n.STENCIL_TEST):$t(n.STENCIL_TEST))},setMask:function(De){ft!==De&&!U&&(n.stencilMask(De),ft=De)},setFunc:function(De,ii,Bi){(X!==De||j!==ii||bt!==Bi)&&(n.stencilFunc(De,ii,Bi),X=De,j=ii,bt=Bi)},setOp:function(De,ii,Bi){(Mt!==De||re!==ii||je!==Bi)&&(n.stencilOp(De,ii,Bi),Mt=De,re=ii,je=Bi)},setLocked:function(De){U=De},setClear:function(De){xn!==De&&(n.clearStencil(De),xn=De)},reset:function(){U=!1,ft=null,X=null,j=null,bt=null,Mt=null,re=null,je=null,xn=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,y=!1,x=null,m=null,_=null,E=null,v=null,I=null,R=null,P=new dt(0,0,0),L=0,S=!1,b=null,D=null,V=null,O=null,W=null,Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,rt=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec($)[1]),Y=rt>=1):$.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Y=rt>=2);let mt=null,St={},kt=n.getParameter(n.SCISSOR_BOX),ue=n.getParameter(n.VIEWPORT),ke=new Ne().fromArray(kt),J=new Ne().fromArray(ue);function ot(U,ft,X,j){let bt=new Uint8Array(4),Mt=n.createTexture();n.bindTexture(U,Mt),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let re=0;re<X;re++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ft,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,bt):n.texImage2D(ft+re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,bt);return Mt}let Lt={};Lt[n.TEXTURE_2D]=ot(n.TEXTURE_2D,n.TEXTURE_2D,1),Lt[n.TEXTURE_CUBE_MAP]=ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Lt[n.TEXTURE_2D_ARRAY]=ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Lt[n.TEXTURE_3D]=ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),gt(n.DEPTH_TEST),o.setFunc(ao),xe(!1),ye(vp),gt(n.CULL_FACE),k(Si);function gt(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function $t(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function ie(U,ft){return u[U]!==ft?(n.bindFramebuffer(U,ft),u[U]=ft,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ft),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ft),!0):!1}function de(U,ft){let X=f,j=!1;if(U){X=d.get(ft),X===void 0&&(X=[],d.set(ft,X));let bt=U.textures;if(X.length!==bt.length||X[0]!==n.COLOR_ATTACHMENT0){for(let Mt=0,re=bt.length;Mt<re;Mt++)X[Mt]=n.COLOR_ATTACHMENT0+Mt;X.length=bt.length,j=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,j=!0);j&&n.drawBuffers(X)}function qe(U){return g!==U?(n.useProgram(U),g=U,!0):!1}let be={[hr]:n.FUNC_ADD,[Bx]:n.FUNC_SUBTRACT,[Vx]:n.FUNC_REVERSE_SUBTRACT};be[Gx]=n.MIN,be[Wx]=n.MAX;let nn={[Xx]:n.ZERO,[$x]:n.ONE,[qx]:n.SRC_COLOR,[Zh]:n.SRC_ALPHA,[Qx]:n.SRC_ALPHA_SATURATE,[Kx]:n.DST_COLOR,[Zx]:n.DST_ALPHA,[Yx]:n.ONE_MINUS_SRC_COLOR,[Jh]:n.ONE_MINUS_SRC_ALPHA,[jx]:n.ONE_MINUS_DST_COLOR,[Jx]:n.ONE_MINUS_DST_ALPHA,[ty]:n.CONSTANT_COLOR,[ey]:n.ONE_MINUS_CONSTANT_COLOR,[ny]:n.CONSTANT_ALPHA,[iy]:n.ONE_MINUS_CONSTANT_ALPHA};function k(U,ft,X,j,bt,Mt,re,je,xn,De){if(U===Si){y===!0&&($t(n.BLEND),y=!1);return}if(y===!1&&(gt(n.BLEND),y=!0),U!==Ox){if(U!==x||De!==S){if((m!==hr||v!==hr)&&(n.blendEquation(n.FUNC_ADD),m=hr,v=hr),De)switch(U){case Ti:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Me:n.blendFunc(n.ONE,n.ONE);break;case _p:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ti:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Me:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case _p:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}_=null,E=null,I=null,R=null,P.set(0,0,0),L=0,x=U,S=De}return}bt=bt||ft,Mt=Mt||X,re=re||j,(ft!==m||bt!==v)&&(n.blendEquationSeparate(be[ft],be[bt]),m=ft,v=bt),(X!==_||j!==E||Mt!==I||re!==R)&&(n.blendFuncSeparate(nn[X],nn[j],nn[Mt],nn[re]),_=X,E=j,I=Mt,R=re),(je.equals(P)===!1||xn!==L)&&(n.blendColor(je.r,je.g,je.b,xn),P.copy(je),L=xn),x=U,S=!1}function Xn(U,ft){U.side===Qe?$t(n.CULL_FACE):gt(n.CULL_FACE);let X=U.side===_n;ft&&(X=!X),xe(X),U.blending===Ti&&U.transparent===!1?k(Si):k(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let j=U.stencilWrite;a.setTest(j),j&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Be(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?gt(n.SAMPLE_ALPHA_TO_COVERAGE):$t(n.SAMPLE_ALPHA_TO_COVERAGE)}function xe(U){b!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),b=U)}function ye(U){U!==zx?(gt(n.CULL_FACE),U!==D&&(U===vp?n.cullFace(n.BACK):U===Fx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):$t(n.CULL_FACE),D=U}function Ot(U){U!==V&&(Y&&n.lineWidth(U),V=U)}function Be(U,ft,X){U?(gt(n.POLYGON_OFFSET_FILL),(O!==ft||W!==X)&&(n.polygonOffset(ft,X),O=ft,W=X)):$t(n.POLYGON_OFFSET_FILL)}function Ft(U){U?gt(n.SCISSOR_TEST):$t(n.SCISSOR_TEST)}function C(U){U===void 0&&(U=n.TEXTURE0+Q-1),mt!==U&&(n.activeTexture(U),mt=U)}function w(U,ft,X){X===void 0&&(mt===null?X=n.TEXTURE0+Q-1:X=mt);let j=St[X];j===void 0&&(j={type:void 0,texture:void 0},St[X]=j),(j.type!==U||j.texture!==ft)&&(mt!==X&&(n.activeTexture(X),mt=X),n.bindTexture(U,ft||Lt[U]),j.type=U,j.texture=ft)}function F(){let U=St[mt];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ut(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Tt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Vt(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qt(U){ke.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),ke.copy(U))}function Rt(U){J.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),J.copy(U))}function ve(U,ft){let X=c.get(ft);X===void 0&&(X=new WeakMap,c.set(ft,X));let j=X.get(U);j===void 0&&(j=n.getUniformBlockIndex(ft,U.name),X.set(U,j))}function ce(U,ft){let j=c.get(ft).get(U);l.get(ft)!==j&&(n.uniformBlockBinding(ft,j,U.__bindingPointIndex),l.set(ft,j))}function Fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},mt=null,St={},u={},d=new WeakMap,f=[],g=null,y=!1,x=null,m=null,_=null,E=null,v=null,I=null,R=null,P=new dt(0,0,0),L=0,S=!1,b=null,D=null,V=null,O=null,W=null,ke.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:gt,disable:$t,bindFramebuffer:ie,drawBuffers:de,useProgram:qe,setBlending:k,setMaterial:Xn,setFlipSided:xe,setCullFace:ye,setLineWidth:Ot,setPolygonOffset:Be,setScissorTest:Ft,activeTexture:C,bindTexture:w,unbindTexture:F,compressedTexImage2D:K,compressedTexImage3D:tt,texImage2D:At,texImage3D:Vt,updateUBOMapping:ve,uniformBlockBinding:ce,texStorage2D:we,texStorage3D:it,texSubImage2D:Z,texSubImage3D:Ut,compressedTexSubImage2D:xt,compressedTexSubImage3D:Tt,scissor:qt,viewport:Rt,reset:Fe}}function x0(n,t,e,i){let s=ME(i);switch(e){case N0:return n*t;case k0:return n*t;case z0:return n*t*2;case Cd:return n*t/s.components*s.byteLength;case Pd:return n*t/s.components*s.byteLength;case F0:return n*t*2/s.components*s.byteLength;case Id:return n*t*2/s.components*s.byteLength;case H0:return n*t*3/s.components*s.byteLength;case ci:return n*t*4/s.components*s.byteLength;case Ld:return n*t*4/s.components*s.byteLength;case Ul:case Nl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Hl:case kl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case lu:case hu:return Math.max(n,16)*Math.max(t,8)/4;case au:case cu:return Math.max(n,8)*Math.max(t,8)/2;case uu:case du:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case fu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case pu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case mu:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case gu:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case xu:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case yu:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case vu:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case _u:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Mu:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Eu:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case bu:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case wu:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Su:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Tu:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Au:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case zl:case Ru:case Cu:return Math.ceil(n/4)*Math.ceil(t/4)*16;case O0:case Pu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Iu:case Lu:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ME(n){switch(n){case ts:case L0:return{byteLength:1,components:1};case ba:case D0:case fi:return{byteLength:2,components:1};case Ad:case Rd:return{byteLength:2,components:4};case pr:case Td:case wi:return{byteLength:4,components:1};case U0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function EE(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,w){return f?new OffscreenCanvas(C,w):Bl("canvas")}function y(C,w,F){let K=1,tt=Ft(C);if((tt.width>F||tt.height>F)&&(K=F/Math.max(tt.width,tt.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Z=Math.floor(K*tt.width),Ut=Math.floor(K*tt.height);u===void 0&&(u=g(Z,Ut));let xt=w?g(Z,Ut):u;return xt.width=Z,xt.height=Ut,xt.getContext("2d").drawImage(C,0,0,Z,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Z+"x"+Ut+")."),xt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),C;return C}function x(C){return C.generateMipmaps}function m(C){n.generateMipmap(C)}function _(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(C,w,F,K,tt=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=w;if(w===n.RED&&(F===n.FLOAT&&(Z=n.R32F),F===n.HALF_FLOAT&&(Z=n.R16F),F===n.UNSIGNED_BYTE&&(Z=n.R8)),w===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.R8UI),F===n.UNSIGNED_SHORT&&(Z=n.R16UI),F===n.UNSIGNED_INT&&(Z=n.R32UI),F===n.BYTE&&(Z=n.R8I),F===n.SHORT&&(Z=n.R16I),F===n.INT&&(Z=n.R32I)),w===n.RG&&(F===n.FLOAT&&(Z=n.RG32F),F===n.HALF_FLOAT&&(Z=n.RG16F),F===n.UNSIGNED_BYTE&&(Z=n.RG8)),w===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.RG8UI),F===n.UNSIGNED_SHORT&&(Z=n.RG16UI),F===n.UNSIGNED_INT&&(Z=n.RG32UI),F===n.BYTE&&(Z=n.RG8I),F===n.SHORT&&(Z=n.RG16I),F===n.INT&&(Z=n.RG32I)),w===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),F===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),F===n.UNSIGNED_INT&&(Z=n.RGB32UI),F===n.BYTE&&(Z=n.RGB8I),F===n.SHORT&&(Z=n.RGB16I),F===n.INT&&(Z=n.RGB32I)),w===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),F===n.UNSIGNED_INT&&(Z=n.RGBA32UI),F===n.BYTE&&(Z=n.RGBA8I),F===n.SHORT&&(Z=n.RGBA16I),F===n.INT&&(Z=n.RGBA32I)),w===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),w===n.RGBA){let Ut=tt?uc:me.getTransfer(K);F===n.FLOAT&&(Z=n.RGBA32F),F===n.HALF_FLOAT&&(Z=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Z=Ut===Le?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(C,w){let F;return C?w===null||w===pr||w===ho?F=n.DEPTH24_STENCIL8:w===wi?F=n.DEPTH32F_STENCIL8:w===ba&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===pr||w===ho?F=n.DEPTH_COMPONENT24:w===wi?F=n.DEPTH_COMPONENT32F:w===ba&&(F=n.DEPTH_COMPONENT16),F}function I(C,w){return x(C)===!0||C.isFramebufferTexture&&C.minFilter!==kn&&C.minFilter!==bi?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function R(C){let w=C.target;w.removeEventListener("dispose",R),L(w),w.isVideoTexture&&h.delete(w)}function P(C){let w=C.target;w.removeEventListener("dispose",P),b(w)}function L(C){let w=i.get(C);if(w.__webglInit===void 0)return;let F=C.source,K=d.get(F);if(K){let tt=K[w.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&S(C),Object.keys(K).length===0&&d.delete(F)}i.remove(C)}function S(C){let w=i.get(C);n.deleteTexture(w.__webglTexture);let F=C.source,K=d.get(F);delete K[w.__cacheKey],o.memory.textures--}function b(C){let w=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(w.__webglFramebuffer[K]))for(let tt=0;tt<w.__webglFramebuffer[K].length;tt++)n.deleteFramebuffer(w.__webglFramebuffer[K][tt]);else n.deleteFramebuffer(w.__webglFramebuffer[K]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[K])}else{if(Array.isArray(w.__webglFramebuffer))for(let K=0;K<w.__webglFramebuffer.length;K++)n.deleteFramebuffer(w.__webglFramebuffer[K]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let K=0;K<w.__webglColorRenderbuffer.length;K++)w.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[K]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let F=C.textures;for(let K=0,tt=F.length;K<tt;K++){let Z=i.get(F[K]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(F[K])}i.remove(C)}let D=0;function V(){D=0}function O(){let C=D;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function W(C){let w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function Q(C,w){let F=i.get(C);if(C.isVideoTexture&&Ot(C),C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){let K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(F,C,w);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+w)}function Y(C,w){let F=i.get(C);if(C.version>0&&F.__version!==C.version){J(F,C,w);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+w)}function rt(C,w){let F=i.get(C);if(C.version>0&&F.__version!==C.version){J(F,C,w);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+w)}function $(C,w){let F=i.get(C);if(C.version>0&&F.__version!==C.version){ot(F,C,w);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+w)}let mt={[Qi]:n.REPEAT,[dr]:n.CLAMP_TO_EDGE,[ou]:n.MIRRORED_REPEAT},St={[kn]:n.NEAREST,[ay]:n.NEAREST_MIPMAP_NEAREST,[rl]:n.NEAREST_MIPMAP_LINEAR,[bi]:n.LINEAR,[mh]:n.LINEAR_MIPMAP_NEAREST,[fr]:n.LINEAR_MIPMAP_LINEAR},kt={[uy]:n.NEVER,[xy]:n.ALWAYS,[dy]:n.LESS,[V0]:n.LEQUAL,[fy]:n.EQUAL,[gy]:n.GEQUAL,[py]:n.GREATER,[my]:n.NOTEQUAL};function ue(C,w){if(w.type===wi&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===bi||w.magFilter===mh||w.magFilter===rl||w.magFilter===fr||w.minFilter===bi||w.minFilter===mh||w.minFilter===rl||w.minFilter===fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,mt[w.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,mt[w.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,mt[w.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,St[w.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,St[w.minFilter]),w.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,kt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===kn||w.minFilter!==rl&&w.minFilter!==fr||w.type===wi&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ke(C,w){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",R));let K=w.source,tt=d.get(K);tt===void 0&&(tt={},d.set(K,tt));let Z=W(w);if(Z!==C.__cacheKey){tt[Z]===void 0&&(tt[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),tt[Z].usedTimes++;let Ut=tt[C.__cacheKey];Ut!==void 0&&(tt[C.__cacheKey].usedTimes--,Ut.usedTimes===0&&S(w)),C.__cacheKey=Z,C.__webglTexture=tt[Z].texture}return F}function J(C,w,F){let K=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(K=n.TEXTURE_3D);let tt=ke(C,w),Z=w.source;e.bindTexture(K,C.__webglTexture,n.TEXTURE0+F);let Ut=i.get(Z);if(Z.version!==Ut.__version||tt===!0){e.activeTexture(n.TEXTURE0+F);let xt=me.getPrimaries(me.workingColorSpace),Tt=w.colorSpace===Rs?null:me.getPrimaries(w.colorSpace),we=w.colorSpace===Rs||xt===Tt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let it=y(w.image,!1,s.maxTextureSize);it=Be(w,it);let At=r.convert(w.format,w.colorSpace),Vt=r.convert(w.type),qt=E(w.internalFormat,At,Vt,w.colorSpace,w.isVideoTexture);ue(K,w);let Rt,ve=w.mipmaps,ce=w.isVideoTexture!==!0,Fe=Ut.__version===void 0||tt===!0,U=Z.dataReady,ft=I(w,it);if(w.isDepthTexture)qt=v(w.format===uo,w.type),Fe&&(ce?e.texStorage2D(n.TEXTURE_2D,1,qt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,qt,it.width,it.height,0,At,Vt,null));else if(w.isDataTexture)if(ve.length>0){ce&&Fe&&e.texStorage2D(n.TEXTURE_2D,ft,qt,ve[0].width,ve[0].height);for(let X=0,j=ve.length;X<j;X++)Rt=ve[X],ce?U&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,Rt.width,Rt.height,At,Vt,Rt.data):e.texImage2D(n.TEXTURE_2D,X,qt,Rt.width,Rt.height,0,At,Vt,Rt.data);w.generateMipmaps=!1}else ce?(Fe&&e.texStorage2D(n.TEXTURE_2D,ft,qt,it.width,it.height),U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,it.width,it.height,At,Vt,it.data)):e.texImage2D(n.TEXTURE_2D,0,qt,it.width,it.height,0,At,Vt,it.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ce&&Fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,qt,ve[0].width,ve[0].height,it.depth);for(let X=0,j=ve.length;X<j;X++)if(Rt=ve[X],w.format!==ci)if(At!==null)if(ce){if(U)if(w.layerUpdates.size>0){let bt=x0(Rt.width,Rt.height,w.format,w.type);for(let Mt of w.layerUpdates){let re=Rt.data.subarray(Mt*bt/Rt.data.BYTES_PER_ELEMENT,(Mt+1)*bt/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,Mt,Rt.width,Rt.height,1,At,re)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,Rt.width,Rt.height,it.depth,At,Rt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,qt,Rt.width,Rt.height,it.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,Rt.width,Rt.height,it.depth,At,Vt,Rt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,X,qt,Rt.width,Rt.height,it.depth,0,At,Vt,Rt.data)}else{ce&&Fe&&e.texStorage2D(n.TEXTURE_2D,ft,qt,ve[0].width,ve[0].height);for(let X=0,j=ve.length;X<j;X++)Rt=ve[X],w.format!==ci?At!==null?ce?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,Rt.width,Rt.height,At,Rt.data):e.compressedTexImage2D(n.TEXTURE_2D,X,qt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?U&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,Rt.width,Rt.height,At,Vt,Rt.data):e.texImage2D(n.TEXTURE_2D,X,qt,Rt.width,Rt.height,0,At,Vt,Rt.data)}else if(w.isDataArrayTexture)if(ce){if(Fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,qt,it.width,it.height,it.depth),U)if(w.layerUpdates.size>0){let X=x0(it.width,it.height,w.format,w.type);for(let j of w.layerUpdates){let bt=it.data.subarray(j*X/it.data.BYTES_PER_ELEMENT,(j+1)*X/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,it.width,it.height,1,At,Vt,bt)}w.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,At,Vt,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,qt,it.width,it.height,it.depth,0,At,Vt,it.data);else if(w.isData3DTexture)ce?(Fe&&e.texStorage3D(n.TEXTURE_3D,ft,qt,it.width,it.height,it.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,At,Vt,it.data)):e.texImage3D(n.TEXTURE_3D,0,qt,it.width,it.height,it.depth,0,At,Vt,it.data);else if(w.isFramebufferTexture){if(Fe)if(ce)e.texStorage2D(n.TEXTURE_2D,ft,qt,it.width,it.height);else{let X=it.width,j=it.height;for(let bt=0;bt<ft;bt++)e.texImage2D(n.TEXTURE_2D,bt,qt,X,j,0,At,Vt,null),X>>=1,j>>=1}}else if(ve.length>0){if(ce&&Fe){let X=Ft(ve[0]);e.texStorage2D(n.TEXTURE_2D,ft,qt,X.width,X.height)}for(let X=0,j=ve.length;X<j;X++)Rt=ve[X],ce?U&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,At,Vt,Rt):e.texImage2D(n.TEXTURE_2D,X,qt,At,Vt,Rt);w.generateMipmaps=!1}else if(ce){if(Fe){let X=Ft(it);e.texStorage2D(n.TEXTURE_2D,ft,qt,X.width,X.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,At,Vt,it)}else e.texImage2D(n.TEXTURE_2D,0,qt,At,Vt,it);x(w)&&m(K),Ut.__version=Z.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ot(C,w,F){if(w.image.length!==6)return;let K=ke(C,w),tt=w.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+F);let Z=i.get(tt);if(tt.version!==Z.__version||K===!0){e.activeTexture(n.TEXTURE0+F);let Ut=me.getPrimaries(me.workingColorSpace),xt=w.colorSpace===Rs?null:me.getPrimaries(w.colorSpace),Tt=w.colorSpace===Rs||Ut===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let we=w.isCompressedTexture||w.image[0].isCompressedTexture,it=w.image[0]&&w.image[0].isDataTexture,At=[];for(let j=0;j<6;j++)!we&&!it?At[j]=y(w.image[j],!0,s.maxCubemapSize):At[j]=it?w.image[j].image:w.image[j],At[j]=Be(w,At[j]);let Vt=At[0],qt=r.convert(w.format,w.colorSpace),Rt=r.convert(w.type),ve=E(w.internalFormat,qt,Rt,w.colorSpace),ce=w.isVideoTexture!==!0,Fe=Z.__version===void 0||K===!0,U=tt.dataReady,ft=I(w,Vt);ue(n.TEXTURE_CUBE_MAP,w);let X;if(we){ce&&Fe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,ve,Vt.width,Vt.height);for(let j=0;j<6;j++){X=At[j].mipmaps;for(let bt=0;bt<X.length;bt++){let Mt=X[bt];w.format!==ci?qt!==null?ce?U&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt,0,0,Mt.width,Mt.height,qt,Mt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt,ve,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt,0,0,Mt.width,Mt.height,qt,Rt,Mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt,ve,Mt.width,Mt.height,0,qt,Rt,Mt.data)}}}else{if(X=w.mipmaps,ce&&Fe){X.length>0&&ft++;let j=Ft(At[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,ve,j.width,j.height)}for(let j=0;j<6;j++)if(it){ce?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,At[j].width,At[j].height,qt,Rt,At[j].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ve,At[j].width,At[j].height,0,qt,Rt,At[j].data);for(let bt=0;bt<X.length;bt++){let re=X[bt].image[j].image;ce?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt+1,0,0,re.width,re.height,qt,Rt,re.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt+1,ve,re.width,re.height,0,qt,Rt,re.data)}}else{ce?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,qt,Rt,At[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ve,qt,Rt,At[j]);for(let bt=0;bt<X.length;bt++){let Mt=X[bt];ce?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt+1,0,0,qt,Rt,Mt.image[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt+1,ve,qt,Rt,Mt.image[j])}}}x(w)&&m(n.TEXTURE_CUBE_MAP),Z.__version=tt.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Lt(C,w,F,K,tt,Z){let Ut=r.convert(F.format,F.colorSpace),xt=r.convert(F.type),Tt=E(F.internalFormat,Ut,xt,F.colorSpace),we=i.get(w),it=i.get(F);if(it.__renderTarget=w,!we.__hasExternalTextures){let At=Math.max(1,w.width>>Z),Vt=Math.max(1,w.height>>Z);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,Z,Tt,At,Vt,w.depth,0,Ut,xt,null):e.texImage2D(tt,Z,Tt,At,Vt,0,Ut,xt,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),ye(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,tt,it.__webglTexture,0,xe(w)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,tt,it.__webglTexture,Z),e.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(C,w,F){if(n.bindRenderbuffer(n.RENDERBUFFER,C),w.depthBuffer){let K=w.depthTexture,tt=K&&K.isDepthTexture?K.type:null,Z=v(w.stencilBuffer,tt),Ut=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=xe(w);ye(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt,Z,w.width,w.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,Z,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Z,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ut,n.RENDERBUFFER,C)}else{let K=w.textures;for(let tt=0;tt<K.length;tt++){let Z=K[tt],Ut=r.convert(Z.format,Z.colorSpace),xt=r.convert(Z.type),Tt=E(Z.internalFormat,Ut,xt,Z.colorSpace),we=xe(w);F&&ye(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,Tt,w.width,w.height):ye(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,Tt,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Tt,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function $t(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=i.get(w.depthTexture);K.__renderTarget=w,(!K.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Q(w.depthTexture,0);let tt=K.__webglTexture,Z=xe(w);if(w.depthTexture.format===so)ye(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0);else if(w.depthTexture.format===uo)ye(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function ie(C){let w=i.get(C),F=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){let K=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),K){let tt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,K.removeEventListener("dispose",tt)};K.addEventListener("dispose",tt),w.__depthDisposeCallback=tt}w.__boundDepthTexture=K}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");$t(w.__webglFramebuffer,C)}else if(F){w.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[K]),w.__webglDepthbuffer[K]===void 0)w.__webglDepthbuffer[K]=n.createRenderbuffer(),gt(w.__webglDepthbuffer[K],C,!1);else{let tt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=w.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),gt(w.__webglDepthbuffer,C,!1);else{let K=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,tt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function de(C,w,F){let K=i.get(C);w!==void 0&&Lt(K.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&ie(C)}function qe(C){let w=C.texture,F=i.get(C),K=i.get(w);C.addEventListener("dispose",P);let tt=C.textures,Z=C.isWebGLCubeRenderTarget===!0,Ut=tt.length>1;if(Ut||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=w.version,o.memory.textures++),Z){F.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(w.mipmaps&&w.mipmaps.length>0){F.__webglFramebuffer[xt]=[];for(let Tt=0;Tt<w.mipmaps.length;Tt++)F.__webglFramebuffer[xt][Tt]=n.createFramebuffer()}else F.__webglFramebuffer[xt]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){F.__webglFramebuffer=[];for(let xt=0;xt<w.mipmaps.length;xt++)F.__webglFramebuffer[xt]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Ut)for(let xt=0,Tt=tt.length;xt<Tt;xt++){let we=i.get(tt[xt]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&ye(C)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let xt=0;xt<tt.length;xt++){let Tt=tt[xt];F.__webglColorRenderbuffer[xt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[xt]);let we=r.convert(Tt.format,Tt.colorSpace),it=r.convert(Tt.type),At=E(Tt.internalFormat,we,it,Tt.colorSpace,C.isXRRenderTarget===!0),Vt=xe(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt,At,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,F.__webglColorRenderbuffer[xt])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),gt(F.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),ue(n.TEXTURE_CUBE_MAP,w);for(let xt=0;xt<6;xt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Tt=0;Tt<w.mipmaps.length;Tt++)Lt(F.__webglFramebuffer[xt][Tt],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Tt);else Lt(F.__webglFramebuffer[xt],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);x(w)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let xt=0,Tt=tt.length;xt<Tt;xt++){let we=tt[xt],it=i.get(we);e.bindTexture(n.TEXTURE_2D,it.__webglTexture),ue(n.TEXTURE_2D,we),Lt(F.__webglFramebuffer,C,we,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,0),x(we)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let xt=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(xt,K.__webglTexture),ue(xt,w),w.mipmaps&&w.mipmaps.length>0)for(let Tt=0;Tt<w.mipmaps.length;Tt++)Lt(F.__webglFramebuffer[Tt],C,w,n.COLOR_ATTACHMENT0,xt,Tt);else Lt(F.__webglFramebuffer,C,w,n.COLOR_ATTACHMENT0,xt,0);x(w)&&m(xt),e.unbindTexture()}C.depthBuffer&&ie(C)}function be(C){let w=C.textures;for(let F=0,K=w.length;F<K;F++){let tt=w[F];if(x(tt)){let Z=_(C),Ut=i.get(tt).__webglTexture;e.bindTexture(Z,Ut),m(Z),e.unbindTexture()}}}let nn=[],k=[];function Xn(C){if(C.samples>0){if(ye(C)===!1){let w=C.textures,F=C.width,K=C.height,tt=n.COLOR_BUFFER_BIT,Z=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ut=i.get(C),xt=w.length>1;if(xt)for(let Tt=0;Tt<w.length;Tt++)e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Tt=0;Tt<w.length;Tt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),xt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ut.__webglColorRenderbuffer[Tt]);let we=i.get(w[Tt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,we,0)}n.blitFramebuffer(0,0,F,K,0,0,F,K,tt,n.NEAREST),l===!0&&(nn.length=0,k.length=0,nn.push(n.COLOR_ATTACHMENT0+Tt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(nn.push(Z),k.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,k)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,nn))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xt)for(let Tt=0;Tt<w.length;Tt++){e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,Ut.__webglColorRenderbuffer[Tt]);let we=i.get(w[Tt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,we,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let w=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function xe(C){return Math.min(s.maxSamples,C.samples)}function ye(C){let w=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ot(C){let w=o.render.frame;h.get(C)!==w&&(h.set(C,w),C.update())}function Be(C,w){let F=C.colorSpace,K=C.format,tt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==Mo&&F!==Rs&&(me.getTransfer(F)===Le?(K!==ci||tt!==ts)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),w}function Ft(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=V,this.setTexture2D=Q,this.setTexture2DArray=Y,this.setTexture3D=rt,this.setTextureCube=$,this.rebindTextures=de,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=Xn,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=ye}function bE(n,t){function e(i,s=Rs){let r,o=me.getTransfer(s);if(i===ts)return n.UNSIGNED_BYTE;if(i===Ad)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Rd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===U0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===L0)return n.BYTE;if(i===D0)return n.SHORT;if(i===ba)return n.UNSIGNED_SHORT;if(i===Td)return n.INT;if(i===pr)return n.UNSIGNED_INT;if(i===wi)return n.FLOAT;if(i===fi)return n.HALF_FLOAT;if(i===N0)return n.ALPHA;if(i===H0)return n.RGB;if(i===ci)return n.RGBA;if(i===k0)return n.LUMINANCE;if(i===z0)return n.LUMINANCE_ALPHA;if(i===so)return n.DEPTH_COMPONENT;if(i===uo)return n.DEPTH_STENCIL;if(i===Cd)return n.RED;if(i===Pd)return n.RED_INTEGER;if(i===F0)return n.RG;if(i===Id)return n.RG_INTEGER;if(i===Ld)return n.RGBA_INTEGER;if(i===Ul||i===Nl||i===Hl||i===kl)if(o===Le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ul)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Nl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Hl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===kl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ul)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Nl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Hl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===kl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===au||i===lu||i===cu||i===hu)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===au)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===lu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===cu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===uu||i===du||i===fu)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===uu||i===du)return o===Le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===fu)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===pu||i===mu||i===gu||i===xu||i===yu||i===vu||i===_u||i===Mu||i===Eu||i===bu||i===wu||i===Su||i===Tu||i===Au)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===pu)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===mu)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gu)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xu)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yu)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vu)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_u)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Mu)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Eu)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bu)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wu)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Su)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tu)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Au)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zl||i===Ru||i===Cu)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===zl)return o===Le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ru)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Cu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===O0||i===Pu||i===Iu||i===Lu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===zl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Pu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Iu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Lu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ho?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Yu=class extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},wt=class extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}},wE={type:"move"},_a=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let x=e.getJointPose(y,i),m=this._getHandJoint(c,y);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wE)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new wt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},SE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TE=`
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

}`,Zu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Ln,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new tn({vertexShader:SE,fragmentShader:TE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new at(new zn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ju=class extends Ls{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,y=new Zu,x=e.getContextAttributes(),m=null,_=null,E=[],v=[],I=new nt,R=null,P=new sn;P.viewport=new Ne;let L=new sn;L.viewport=new Ne;let S=[P,L],b=new Yu,D=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ot=E[J];return ot===void 0&&(ot=new _a,E[J]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(J){let ot=E[J];return ot===void 0&&(ot=new _a,E[J]=ot),ot.getGripSpace()},this.getHand=function(J){let ot=E[J];return ot===void 0&&(ot=new _a,E[J]=ot),ot.getHandSpace()};function O(J){let ot=v.indexOf(J.inputSource);if(ot===-1)return;let Lt=E[ot];Lt!==void 0&&(Lt.update(J.inputSource,J.frame,c||o),Lt.dispatchEvent({type:J.type,data:J.inputSource}))}function W(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Q);for(let J=0;J<E.length;J++){let ot=v[J];ot!==null&&(v[J]=null,E[J].disconnect(ot))}D=null,V=null,y.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,_=null,ke.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Q),x.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){let ot={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new An(f.framebufferWidth,f.framebufferHeight,{format:ci,type:ts,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let ot=null,Lt=null,gt=null;x.depth&&(gt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=x.stencil?uo:so,Lt=x.stencil?ho:pr);let $t={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer($t),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new An(d.textureWidth,d.textureHeight,{format:ci,type:ts,depthTexture:new Jl(d.textureWidth,d.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ke.setContext(s),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Q(J){for(let ot=0;ot<J.removed.length;ot++){let Lt=J.removed[ot],gt=v.indexOf(Lt);gt>=0&&(v[gt]=null,E[gt].disconnect(Lt))}for(let ot=0;ot<J.added.length;ot++){let Lt=J.added[ot],gt=v.indexOf(Lt);if(gt===-1){for(let ie=0;ie<E.length;ie++)if(ie>=v.length){v.push(Lt),gt=ie;break}else if(v[ie]===null){v[ie]=Lt,gt=ie;break}if(gt===-1)break}let $t=E[gt];$t&&$t.connect(Lt)}}let Y=new T,rt=new T;function $(J,ot,Lt){Y.setFromMatrixPosition(ot.matrixWorld),rt.setFromMatrixPosition(Lt.matrixWorld);let gt=Y.distanceTo(rt),$t=ot.projectionMatrix.elements,ie=Lt.projectionMatrix.elements,de=$t[14]/($t[10]-1),qe=$t[14]/($t[10]+1),be=($t[9]+1)/$t[5],nn=($t[9]-1)/$t[5],k=($t[8]-1)/$t[0],Xn=(ie[8]+1)/ie[0],xe=de*k,ye=de*Xn,Ot=gt/(-k+Xn),Be=Ot*-k;if(ot.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Be),J.translateZ(Ot),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),$t[10]===-1)J.projectionMatrix.copy(ot.projectionMatrix),J.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let Ft=de+Ot,C=qe+Ot,w=xe-Be,F=ye+(gt-Be),K=be*qe/C*Ft,tt=nn*qe/C*Ft;J.projectionMatrix.makePerspective(w,F,K,tt,Ft,C),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function mt(J,ot){ot===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ot.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ot=J.near,Lt=J.far;y.texture!==null&&(y.depthNear>0&&(ot=y.depthNear),y.depthFar>0&&(Lt=y.depthFar)),b.near=L.near=P.near=ot,b.far=L.far=P.far=Lt,(D!==b.near||V!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),D=b.near,V=b.far),P.layers.mask=J.layers.mask|2,L.layers.mask=J.layers.mask|4,b.layers.mask=P.layers.mask|L.layers.mask;let gt=J.parent,$t=b.cameras;mt(b,gt);for(let ie=0;ie<$t.length;ie++)mt($t[ie],gt);$t.length===2?$(b,P,L):b.projectionMatrix.copy(P.projectionMatrix),St(J,b,gt)};function St(J,ot,Lt){Lt===null?J.matrix.copy(ot.matrixWorld):(J.matrix.copy(Lt.matrixWorld),J.matrix.invert(),J.matrix.multiply(ot.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ot.projectionMatrix),J.projectionMatrixInverse.copy(ot.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=fo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(b)};let kt=null;function ue(J,ot){if(h=ot.getViewerPose(c||o),g=ot,h!==null){let Lt=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let gt=!1;Lt.length!==b.cameras.length&&(b.cameras.length=0,gt=!0);for(let ie=0;ie<Lt.length;ie++){let de=Lt[ie],qe=null;if(f!==null)qe=f.getViewport(de);else{let nn=u.getViewSubImage(d,de);qe=nn.viewport,ie===0&&(t.setRenderTargetTextures(_,nn.colorTexture,d.ignoreDepthValues?void 0:nn.depthStencilTexture),t.setRenderTarget(_))}let be=S[ie];be===void 0&&(be=new sn,be.layers.enable(ie),be.viewport=new Ne,S[ie]=be),be.matrix.fromArray(de.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(de.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(qe.x,qe.y,qe.width,qe.height),ie===0&&(b.matrix.copy(be.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),gt===!0&&b.cameras.push(be)}let $t=s.enabledFeatures;if($t&&$t.includes("depth-sensing")){let ie=u.getDepthInformation(Lt[0]);ie&&ie.isValid&&ie.texture&&y.init(t,ie,s.renderState)}}for(let Lt=0;Lt<E.length;Lt++){let gt=v[Lt],$t=E[Lt];gt!==null&&$t!==void 0&&$t.update(gt,ot,c||o)}kt&&kt(J,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),g=null}let ke=new $0;ke.setAnimationLoop(ue),this.setAnimationLoop=function(J){kt=J},this.dispose=function(){}}},lr=new mn,AE=new ge;function RE(n,t){function e(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function i(x,m){m.color.getRGB(x.fogColor.value,X0(n)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function s(x,m,_,E,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(x,m):m.isMeshToonMaterial?(r(x,m),u(x,m)):m.isMeshPhongMaterial?(r(x,m),h(x,m)):m.isMeshStandardMaterial?(r(x,m),d(x,m),m.isMeshPhysicalMaterial&&f(x,m,v)):m.isMeshMatcapMaterial?(r(x,m),g(x,m)):m.isMeshDepthMaterial?r(x,m):m.isMeshDistanceMaterial?(r(x,m),y(x,m)):m.isMeshNormalMaterial?r(x,m):m.isLineBasicMaterial?(o(x,m),m.isLineDashedMaterial&&a(x,m)):m.isPointsMaterial?l(x,m,_,E):m.isSpriteMaterial?c(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,e(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===_n&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,e(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===_n&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,e(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,e(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);let _=t.get(m),E=_.envMap,v=_.envMapRotation;E&&(x.envMap.value=E,lr.copy(v),lr.x*=-1,lr.y*=-1,lr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),x.envMapRotation.value.setFromMatrix4(AE.makeRotationFromEuler(lr)),x.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,x.aoMapTransform))}function o(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform))}function a(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function l(x,m,_,E){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*_,x.scale.value=E*.5,m.map&&(x.map.value=m.map,e(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function c(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function h(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function u(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function d(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function f(x,m,_){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===_n&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=_.texture,x.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,m){m.matcap&&(x.matcap.value=m.matcap)}function y(x,m){let _=t.get(m).light;x.referencePosition.value.setFromMatrixPosition(_.matrixWorld),x.nearDistance.value=_.shadow.camera.near,x.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function CE(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,E){let v=E.program;i.uniformBlockBinding(_,v)}function c(_,E){let v=s[_.id];v===void 0&&(g(_),v=h(_),s[_.id]=v,_.addEventListener("dispose",x));let I=E.program;i.updateUBOMapping(_,I);let R=t.render.frame;r[_.id]!==R&&(d(_),r[_.id]=R)}function h(_){let E=u();_.__bindingPointIndex=E;let v=n.createBuffer(),I=_.__size,R=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,I,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,v),v}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let E=s[_.id],v=_.uniforms,I=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let R=0,P=v.length;R<P;R++){let L=Array.isArray(v[R])?v[R]:[v[R]];for(let S=0,b=L.length;S<b;S++){let D=L[S];if(f(D,R,S,I)===!0){let V=D.__offset,O=Array.isArray(D.value)?D.value:[D.value],W=0;for(let Q=0;Q<O.length;Q++){let Y=O[Q],rt=y(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,V+W,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,W),W+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,E,v,I){let R=_.value,P=E+"_"+v;if(I[P]===void 0)return typeof R=="number"||typeof R=="boolean"?I[P]=R:I[P]=R.clone(),!0;{let L=I[P];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return I[P]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function g(_){let E=_.uniforms,v=0,I=16;for(let P=0,L=E.length;P<L;P++){let S=Array.isArray(E[P])?E[P]:[E[P]];for(let b=0,D=S.length;b<D;b++){let V=S[b],O=Array.isArray(V.value)?V.value:[V.value];for(let W=0,Q=O.length;W<Q;W++){let Y=O[W],rt=y(Y),$=v%I,mt=$%rt.boundary,St=$+mt;v+=mt,St!==0&&I-St<rt.storage&&(v+=I-St),V.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=v,v+=rt.storage}}}let R=v%I;return R>0&&(v+=I-R),_.__size=v,_.__cache={},this}function y(_){let E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),E}function x(_){let E=_.target;E.removeEventListener("dispose",x);let v=o.indexOf(E.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var xo=class{constructor(t={}){let{canvas:e=Uy(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),y=new Int32Array(4),x=null,m=null,_=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_e,this.toneMapping=Ps,this.toneMappingExposure=1;let v=this,I=!1,R=0,P=0,L=null,S=-1,b=null,D=new Ne,V=new Ne,O=null,W=new dt(0),Q=0,Y=e.width,rt=e.height,$=1,mt=null,St=null,kt=new Ne(0,0,Y,rt),ue=new Ne(0,0,Y,rt),ke=!1,J=new wa,ot=!1,Lt=!1,gt=new ge,$t=new ge,ie=new T,de=new Ne,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},be=!1;function nn(){return L===null?$:1}let k=i;function Xn(A,N){return e.getContext(A,N)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vd}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),k===null){let N="webgl2";if(k=Xn(N,A),k===null)throw Xn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let xe,ye,Ot,Be,Ft,C,w,F,K,tt,Z,Ut,xt,Tt,we,it,At,Vt,qt,Rt,ve,ce,Fe,U;function ft(){xe=new X_(k),xe.init(),ce=new bE(k,xe),ye=new F_(k,xe,t,ce),Ot=new _E(k,xe),ye.reverseDepthBuffer&&d&&Ot.buffers.depth.setReversed(!0),Be=new Y_(k),Ft=new aE,C=new EE(k,xe,Ot,Ft,ye,ce,Be),w=new B_(v),F=new W_(v),K=new ev(k),Fe=new k_(k,K),tt=new $_(k,K,Be,Fe),Z=new J_(k,tt,K,Be),qt=new Z_(k,ye,C),it=new O_(Ft),Ut=new oE(v,w,F,xe,ye,Fe,it),xt=new RE(v,Ft),Tt=new cE,we=new mE(xe),Vt=new H_(v,w,F,Ot,Z,f,l),At=new yE(v,Z,ye),U=new CE(k,Be,ye,Ot),Rt=new z_(k,xe,Be),ve=new q_(k,xe,Be),Be.programs=Ut.programs,v.capabilities=ye,v.extensions=xe,v.properties=Ft,v.renderLists=Tt,v.shadowMap=At,v.state=Ot,v.info=Be}ft();let X=new Ju(v,k);this.xr=X,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let A=xe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=xe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(Y,rt,!1))},this.getSize=function(A){return A.set(Y,rt)},this.setSize=function(A,N,B=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=A,rt=N,e.width=Math.floor(A*$),e.height=Math.floor(N*$),B===!0&&(e.style.width=A+"px",e.style.height=N+"px"),this.setViewport(0,0,A,N)},this.getDrawingBufferSize=function(A){return A.set(Y*$,rt*$).floor()},this.setDrawingBufferSize=function(A,N,B){Y=A,rt=N,$=B,e.width=Math.floor(A*B),e.height=Math.floor(N*B),this.setViewport(0,0,A,N)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(kt)},this.setViewport=function(A,N,B,G){A.isVector4?kt.set(A.x,A.y,A.z,A.w):kt.set(A,N,B,G),Ot.viewport(D.copy(kt).multiplyScalar($).round())},this.getScissor=function(A){return A.copy(ue)},this.setScissor=function(A,N,B,G){A.isVector4?ue.set(A.x,A.y,A.z,A.w):ue.set(A,N,B,G),Ot.scissor(V.copy(ue).multiplyScalar($).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(A){Ot.setScissorTest(ke=A)},this.setOpaqueSort=function(A){mt=A},this.setTransparentSort=function(A){St=A},this.getClearColor=function(A){return A.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(A=!0,N=!0,B=!0){let G=0;if(A){let H=!1;if(L!==null){let st=L.texture.format;H=st===Ld||st===Id||st===Pd}if(H){let st=L.texture.type,Et=st===ts||st===pr||st===ba||st===ho||st===Ad||st===Rd,Ct=Vt.getClearColor(),Pt=Vt.getClearAlpha(),Qt=Ct.r,oe=Ct.g,It=Ct.b;Et?(g[0]=Qt,g[1]=oe,g[2]=It,g[3]=Pt,k.clearBufferuiv(k.COLOR,0,g)):(y[0]=Qt,y[1]=oe,y[2]=It,y[3]=Pt,k.clearBufferiv(k.COLOR,0,y))}else G|=k.COLOR_BUFFER_BIT}N&&(G|=k.DEPTH_BUFFER_BIT),B&&(G|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),Tt.dispose(),we.dispose(),Ft.dispose(),w.dispose(),F.dispose(),Z.dispose(),Fe.dispose(),U.dispose(),Ut.dispose(),X.dispose(),X.removeEventListener("sessionstart",up),X.removeEventListener("sessionend",dp),nr.stop()};function j(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let A=Be.autoReset,N=At.enabled,B=At.autoUpdate,G=At.needsUpdate,H=At.type;ft(),Be.autoReset=A,At.enabled=N,At.autoUpdate=B,At.needsUpdate=G,At.type=H}function Mt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function re(A){let N=A.target;N.removeEventListener("dispose",re),je(N)}function je(A){xn(A),Ft.remove(A)}function xn(A){let N=Ft.get(A).programs;N!==void 0&&(N.forEach(function(B){Ut.releaseProgram(B)}),A.isShaderMaterial&&Ut.releaseShaderCache(A))}this.renderBufferDirect=function(A,N,B,G,H,st){N===null&&(N=qe);let Et=H.isMesh&&H.matrixWorld.determinant()<0,Ct=Nx(A,N,B,G,H);Ot.setMaterial(G,Et);let Pt=B.index,Qt=1;if(G.wireframe===!0){if(Pt=tt.getWireframeAttribute(B),Pt===void 0)return;Qt=2}let oe=B.drawRange,It=B.attributes.position,Se=oe.start*Qt,Oe=(oe.start+oe.count)*Qt;st!==null&&(Se=Math.max(Se,st.start*Qt),Oe=Math.min(Oe,(st.start+st.count)*Qt)),Pt!==null?(Se=Math.max(Se,0),Oe=Math.min(Oe,Pt.count)):It!=null&&(Se=Math.max(Se,0),Oe=Math.min(Oe,It.count));let Ve=Oe-Se;if(Ve<0||Ve===1/0)return;Fe.setup(H,G,Ct,B,Pt);let In,Pe=Rt;if(Pt!==null&&(In=K.get(Pt),Pe=ve,Pe.setIndex(In)),H.isMesh)G.wireframe===!0?(Ot.setLineWidth(G.wireframeLinewidth*nn()),Pe.setMode(k.LINES)):Pe.setMode(k.TRIANGLES);else if(H.isLine){let Nt=G.linewidth;Nt===void 0&&(Nt=1),Ot.setLineWidth(Nt*nn()),H.isLineSegments?Pe.setMode(k.LINES):H.isLineLoop?Pe.setMode(k.LINE_LOOP):Pe.setMode(k.LINE_STRIP)}else H.isPoints?Pe.setMode(k.POINTS):H.isSprite&&Pe.setMode(k.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Pe.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(xe.get("WEBGL_multi_draw"))Pe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Nt=H._multiDrawStarts,Vi=H._multiDrawCounts,Ie=H._multiDrawCount,si=Pt?K.get(Pt).bytesPerElement:1,kr=Ft.get(G).currentProgram.getUniforms();for(let Un=0;Un<Ie;Un++)kr.setValue(k,"_gl_DrawID",Un),Pe.render(Nt[Un]/si,Vi[Un])}else if(H.isInstancedMesh)Pe.renderInstances(Se,Ve,H.count);else if(B.isInstancedBufferGeometry){let Nt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Vi=Math.min(B.instanceCount,Nt);Pe.renderInstances(Se,Ve,Vi)}else Pe.render(Se,Ve)};function De(A,N,B){A.transparent===!0&&A.side===Qe&&A.forceSinglePass===!1?(A.side=_n,A.needsUpdate=!0,sl(A,N,B),A.side=Is,A.needsUpdate=!0,sl(A,N,B),A.side=Qe):sl(A,N,B)}this.compile=function(A,N,B=null){B===null&&(B=A),m=we.get(B),m.init(N),E.push(m),B.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),A!==B&&A.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();let G=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let st=H.material;if(st)if(Array.isArray(st))for(let Et=0;Et<st.length;Et++){let Ct=st[Et];De(Ct,B,H),G.add(Ct)}else De(st,B,H),G.add(st)}),E.pop(),m=null,G},this.compileAsync=function(A,N,B=null){let G=this.compile(A,N,B);return new Promise(H=>{function st(){if(G.forEach(function(Et){Ft.get(Et).currentProgram.isReady()&&G.delete(Et)}),G.size===0){H(A);return}setTimeout(st,10)}xe.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let ii=null;function Bi(A){ii&&ii(A)}function up(){nr.stop()}function dp(){nr.start()}let nr=new $0;nr.setAnimationLoop(Bi),typeof self<"u"&&nr.setContext(self),this.setAnimationLoop=function(A){ii=A,X.setAnimationLoop(A),A===null?nr.stop():nr.start()},X.addEventListener("sessionstart",up),X.addEventListener("sessionend",dp),this.render=function(A,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(N),N=X.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,N,L),m=we.get(A,E.length),m.init(N),E.push(m),$t.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),J.setFromProjectionMatrix($t),Lt=this.localClippingEnabled,ot=it.init(this.clippingPlanes,Lt),x=Tt.get(A,_.length),x.init(),_.push(x),X.enabled===!0&&X.isPresenting===!0){let st=v.xr.getDepthSensingMesh();st!==null&&ph(st,N,-1/0,v.sortObjects)}ph(A,N,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(mt,St),be=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,be&&Vt.addToRenderList(x,A),this.info.render.frame++,ot===!0&&it.beginShadows();let B=m.state.shadowsArray;At.render(B,A,N),ot===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=x.opaque,H=x.transmissive;if(m.setupLights(),N.isArrayCamera){let st=N.cameras;if(H.length>0)for(let Et=0,Ct=st.length;Et<Ct;Et++){let Pt=st[Et];pp(G,H,A,Pt)}be&&Vt.render(A);for(let Et=0,Ct=st.length;Et<Ct;Et++){let Pt=st[Et];fp(x,A,Pt,Pt.viewport)}}else H.length>0&&pp(G,H,A,N),be&&Vt.render(A),fp(x,A,N);L!==null&&(C.updateMultisampleRenderTarget(L),C.updateRenderTargetMipmap(L)),A.isScene===!0&&A.onAfterRender(v,A,N),Fe.resetDefaultState(),S=-1,b=null,E.pop(),E.length>0?(m=E[E.length-1],ot===!0&&it.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?x=_[_.length-1]:x=null};function ph(A,N,B,G){if(A.visible===!1)return;if(A.layers.test(N.layers)){if(A.isGroup)B=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(N);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||J.intersectsSprite(A)){G&&de.setFromMatrixPosition(A.matrixWorld).applyMatrix4($t);let Et=Z.update(A),Ct=A.material;Ct.visible&&x.push(A,Et,Ct,B,de.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||J.intersectsObject(A))){let Et=Z.update(A),Ct=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),de.copy(A.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),de.copy(Et.boundingSphere.center)),de.applyMatrix4(A.matrixWorld).applyMatrix4($t)),Array.isArray(Ct)){let Pt=Et.groups;for(let Qt=0,oe=Pt.length;Qt<oe;Qt++){let It=Pt[Qt],Se=Ct[It.materialIndex];Se&&Se.visible&&x.push(A,Et,Se,B,de.z,It)}}else Ct.visible&&x.push(A,Et,Ct,B,de.z,null)}}let st=A.children;for(let Et=0,Ct=st.length;Et<Ct;Et++)ph(st[Et],N,B,G)}function fp(A,N,B,G){let H=A.opaque,st=A.transmissive,Et=A.transparent;m.setupLightsView(B),ot===!0&&it.setGlobalState(v.clippingPlanes,B),G&&Ot.viewport(D.copy(G)),H.length>0&&il(H,N,B),st.length>0&&il(st,N,B),Et.length>0&&il(Et,N,B),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function pp(A,N,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new An(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float")?fi:ts,minFilter:fr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace}));let st=m.state.transmissionRenderTarget[G.id],Et=G.viewport||D;st.setSize(Et.z,Et.w);let Ct=v.getRenderTarget();v.setRenderTarget(st),v.getClearColor(W),Q=v.getClearAlpha(),Q<1&&v.setClearColor(16777215,.5),v.clear(),be&&Vt.render(B);let Pt=v.toneMapping;v.toneMapping=Ps;let Qt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),ot===!0&&it.setGlobalState(v.clippingPlanes,G),il(A,B,G),C.updateMultisampleRenderTarget(st),C.updateRenderTargetMipmap(st),xe.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let It=0,Se=N.length;It<Se;It++){let Oe=N[It],Ve=Oe.object,In=Oe.geometry,Pe=Oe.material,Nt=Oe.group;if(Pe.side===Qe&&Ve.layers.test(G.layers)){let Vi=Pe.side;Pe.side=_n,Pe.needsUpdate=!0,mp(Ve,B,G,In,Pe,Nt),Pe.side=Vi,Pe.needsUpdate=!0,oe=!0}}oe===!0&&(C.updateMultisampleRenderTarget(st),C.updateRenderTargetMipmap(st))}v.setRenderTarget(Ct),v.setClearColor(W,Q),Qt!==void 0&&(G.viewport=Qt),v.toneMapping=Pt}function il(A,N,B){let G=N.isScene===!0?N.overrideMaterial:null;for(let H=0,st=A.length;H<st;H++){let Et=A[H],Ct=Et.object,Pt=Et.geometry,Qt=G===null?Et.material:G,oe=Et.group;Ct.layers.test(B.layers)&&mp(Ct,N,B,Pt,Qt,oe)}}function mp(A,N,B,G,H,st){A.onBeforeRender(v,N,B,G,H,st),A.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(v,N,B,G,A,st),H.transparent===!0&&H.side===Qe&&H.forceSinglePass===!1?(H.side=_n,H.needsUpdate=!0,v.renderBufferDirect(B,N,G,H,A,st),H.side=Is,H.needsUpdate=!0,v.renderBufferDirect(B,N,G,H,A,st),H.side=Qe):v.renderBufferDirect(B,N,G,H,A,st),A.onAfterRender(v,N,B,G,H,st)}function sl(A,N,B){N.isScene!==!0&&(N=qe);let G=Ft.get(A),H=m.state.lights,st=m.state.shadowsArray,Et=H.state.version,Ct=Ut.getParameters(A,H.state,st,N,B),Pt=Ut.getProgramCacheKey(Ct),Qt=G.programs;G.environment=A.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(A.isMeshStandardMaterial?F:w).get(A.envMap||G.environment),G.envMapRotation=G.environment!==null&&A.envMap===null?N.environmentRotation:A.envMapRotation,Qt===void 0&&(A.addEventListener("dispose",re),Qt=new Map,G.programs=Qt);let oe=Qt.get(Pt);if(oe!==void 0){if(G.currentProgram===oe&&G.lightsStateVersion===Et)return xp(A,Ct),oe}else Ct.uniforms=Ut.getUniforms(A),A.onBeforeCompile(Ct,v),oe=Ut.acquireProgram(Ct,Pt),Qt.set(Pt,oe),G.uniforms=Ct.uniforms;let It=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(It.clippingPlanes=it.uniform),xp(A,Ct),G.needsLights=kx(A),G.lightsStateVersion=Et,G.needsLights&&(It.ambientLightColor.value=H.state.ambient,It.lightProbe.value=H.state.probe,It.directionalLights.value=H.state.directional,It.directionalLightShadows.value=H.state.directionalShadow,It.spotLights.value=H.state.spot,It.spotLightShadows.value=H.state.spotShadow,It.rectAreaLights.value=H.state.rectArea,It.ltc_1.value=H.state.rectAreaLTC1,It.ltc_2.value=H.state.rectAreaLTC2,It.pointLights.value=H.state.point,It.pointLightShadows.value=H.state.pointShadow,It.hemisphereLights.value=H.state.hemi,It.directionalShadowMap.value=H.state.directionalShadowMap,It.directionalShadowMatrix.value=H.state.directionalShadowMatrix,It.spotShadowMap.value=H.state.spotShadowMap,It.spotLightMatrix.value=H.state.spotLightMatrix,It.spotLightMap.value=H.state.spotLightMap,It.pointShadowMap.value=H.state.pointShadowMap,It.pointShadowMatrix.value=H.state.pointShadowMatrix),G.currentProgram=oe,G.uniformsList=null,oe}function gp(A){if(A.uniformsList===null){let N=A.currentProgram.getUniforms();A.uniformsList=oo.seqWithValue(N.seq,A.uniforms)}return A.uniformsList}function xp(A,N){let B=Ft.get(A);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function Nx(A,N,B,G,H){N.isScene!==!0&&(N=qe),C.resetTextureUnits();let st=N.fog,Et=G.isMeshStandardMaterial?N.environment:null,Ct=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Mo,Pt=(G.isMeshStandardMaterial?F:w).get(G.envMap||Et),Qt=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,oe=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),It=!!B.morphAttributes.position,Se=!!B.morphAttributes.normal,Oe=!!B.morphAttributes.color,Ve=Ps;G.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ve=v.toneMapping);let In=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Pe=In!==void 0?In.length:0,Nt=Ft.get(G),Vi=m.state.lights;if(ot===!0&&(Lt===!0||A!==b)){let $n=A===b&&G.id===S;it.setState(G,A,$n)}let Ie=!1;G.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Vi.state.version||Nt.outputColorSpace!==Ct||H.isBatchedMesh&&Nt.batching===!1||!H.isBatchedMesh&&Nt.batching===!0||H.isBatchedMesh&&Nt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Nt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Nt.instancing===!1||!H.isInstancedMesh&&Nt.instancing===!0||H.isSkinnedMesh&&Nt.skinning===!1||!H.isSkinnedMesh&&Nt.skinning===!0||H.isInstancedMesh&&Nt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Nt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Nt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Nt.instancingMorph===!1&&H.morphTexture!==null||Nt.envMap!==Pt||G.fog===!0&&Nt.fog!==st||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==it.numPlanes||Nt.numIntersection!==it.numIntersection)||Nt.vertexAlphas!==Qt||Nt.vertexTangents!==oe||Nt.morphTargets!==It||Nt.morphNormals!==Se||Nt.morphColors!==Oe||Nt.toneMapping!==Ve||Nt.morphTargetsCount!==Pe)&&(Ie=!0):(Ie=!0,Nt.__version=G.version);let si=Nt.currentProgram;Ie===!0&&(si=sl(G,N,H));let kr=!1,Un=!1,sa=!1,Ge=si.getUniforms(),Mi=Nt.uniforms;if(Ot.useProgram(si.program)&&(kr=!0,Un=!0,sa=!0),G.id!==S&&(S=G.id,Un=!0),kr||b!==A){Ot.buffers.depth.getReversed()?(gt.copy(A.projectionMatrix),Hy(gt),ky(gt),Ge.setValue(k,"projectionMatrix",gt)):Ge.setValue(k,"projectionMatrix",A.projectionMatrix),Ge.setValue(k,"viewMatrix",A.matrixWorldInverse);let _s=Ge.map.cameraPosition;_s!==void 0&&_s.setValue(k,ie.setFromMatrixPosition(A.matrixWorld)),ye.logarithmicDepthBuffer&&Ge.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ge.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,Un=!0,sa=!0)}if(H.isSkinnedMesh){Ge.setOptional(k,H,"bindMatrix"),Ge.setOptional(k,H,"bindMatrixInverse");let $n=H.skeleton;$n&&($n.boneTexture===null&&$n.computeBoneTexture(),Ge.setValue(k,"boneTexture",$n.boneTexture,C))}H.isBatchedMesh&&(Ge.setOptional(k,H,"batchingTexture"),Ge.setValue(k,"batchingTexture",H._matricesTexture,C),Ge.setOptional(k,H,"batchingIdTexture"),Ge.setValue(k,"batchingIdTexture",H._indirectTexture,C),Ge.setOptional(k,H,"batchingColorTexture"),H._colorsTexture!==null&&Ge.setValue(k,"batchingColorTexture",H._colorsTexture,C));let ra=B.morphAttributes;if((ra.position!==void 0||ra.normal!==void 0||ra.color!==void 0)&&qt.update(H,B,si),(Un||Nt.receiveShadow!==H.receiveShadow)&&(Nt.receiveShadow=H.receiveShadow,Ge.setValue(k,"receiveShadow",H.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Mi.envMap.value=Pt,Mi.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(Mi.envMapIntensity.value=N.environmentIntensity),Un&&(Ge.setValue(k,"toneMappingExposure",v.toneMappingExposure),Nt.needsLights&&Hx(Mi,sa),st&&G.fog===!0&&xt.refreshFogUniforms(Mi,st),xt.refreshMaterialUniforms(Mi,G,$,rt,m.state.transmissionRenderTarget[A.id]),oo.upload(k,gp(Nt),Mi,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(oo.upload(k,gp(Nt),Mi,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ge.setValue(k,"center",H.center),Ge.setValue(k,"modelViewMatrix",H.modelViewMatrix),Ge.setValue(k,"normalMatrix",H.normalMatrix),Ge.setValue(k,"modelMatrix",H.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let $n=G.uniformsGroups;for(let _s=0,Ms=$n.length;_s<Ms;_s++){let yp=$n[_s];U.update(yp,si),U.bind(yp,si)}}return si}function Hx(A,N){A.ambientLightColor.needsUpdate=N,A.lightProbe.needsUpdate=N,A.directionalLights.needsUpdate=N,A.directionalLightShadows.needsUpdate=N,A.pointLights.needsUpdate=N,A.pointLightShadows.needsUpdate=N,A.spotLights.needsUpdate=N,A.spotLightShadows.needsUpdate=N,A.rectAreaLights.needsUpdate=N,A.hemisphereLights.needsUpdate=N}function kx(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(A,N,B){Ft.get(A.texture).__webglTexture=N,Ft.get(A.depthTexture).__webglTexture=B;let G=Ft.get(A);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=B===void 0,G.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,N){let B=Ft.get(A);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(A,N=0,B=0){L=A,R=N,P=B;let G=!0,H=null,st=!1,Et=!1;if(A){let Pt=Ft.get(A);if(Pt.__useDefaultFramebuffer!==void 0)Ot.bindFramebuffer(k.FRAMEBUFFER,null),G=!1;else if(Pt.__webglFramebuffer===void 0)C.setupRenderTarget(A);else if(Pt.__hasExternalTextures)C.rebindTextures(A,Ft.get(A.texture).__webglTexture,Ft.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let It=A.depthTexture;if(Pt.__boundDepthTexture!==It){if(It!==null&&Ft.has(It)&&(A.width!==It.image.width||A.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(A)}}let Qt=A.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Et=!0);let oe=Ft.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(oe[N])?H=oe[N][B]:H=oe[N],st=!0):A.samples>0&&C.useMultisampledRTT(A)===!1?H=Ft.get(A).__webglMultisampledFramebuffer:Array.isArray(oe)?H=oe[B]:H=oe,D.copy(A.viewport),V.copy(A.scissor),O=A.scissorTest}else D.copy(kt).multiplyScalar($).floor(),V.copy(ue).multiplyScalar($).floor(),O=ke;if(Ot.bindFramebuffer(k.FRAMEBUFFER,H)&&G&&Ot.drawBuffers(A,H),Ot.viewport(D),Ot.scissor(V),Ot.setScissorTest(O),st){let Pt=Ft.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+N,Pt.__webglTexture,B)}else if(Et){let Pt=Ft.get(A.texture),Qt=N||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Pt.__webglTexture,B||0,Qt)}S=-1},this.readRenderTargetPixels=function(A,N,B,G,H,st,Et){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Ft.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Et!==void 0&&(Ct=Ct[Et]),Ct){Ot.bindFramebuffer(k.FRAMEBUFFER,Ct);try{let Pt=A.texture,Qt=Pt.format,oe=Pt.type;if(!ye.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=A.width-G&&B>=0&&B<=A.height-H&&k.readPixels(N,B,G,H,ce.convert(Qt),ce.convert(oe),st)}finally{let Pt=L!==null?Ft.get(L).__webglFramebuffer:null;Ot.bindFramebuffer(k.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(A,N,B,G,H,st,Et){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Ft.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Et!==void 0&&(Ct=Ct[Et]),Ct){let Pt=A.texture,Qt=Pt.format,oe=Pt.type;if(!ye.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=A.width-G&&B>=0&&B<=A.height-H){Ot.bindFramebuffer(k.FRAMEBUFFER,Ct);let It=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,It),k.bufferData(k.PIXEL_PACK_BUFFER,st.byteLength,k.STREAM_READ),k.readPixels(N,B,G,H,ce.convert(Qt),ce.convert(oe),0);let Se=L!==null?Ft.get(L).__webglFramebuffer:null;Ot.bindFramebuffer(k.FRAMEBUFFER,Se);let Oe=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Ny(k,Oe,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,It),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,st),k.deleteBuffer(It),k.deleteSync(Oe),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,N=null,B=0){A.isTexture!==!0&&(ga("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,A=arguments[1]);let G=Math.pow(2,-B),H=Math.floor(A.image.width*G),st=Math.floor(A.image.height*G),Et=N!==null?N.x:0,Ct=N!==null?N.y:0;C.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,B,0,0,Et,Ct,H,st),Ot.unbindTexture()},this.copyTextureToTexture=function(A,N,B=null,G=null,H=0){A.isTexture!==!0&&(ga("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,A=arguments[1],N=arguments[2],H=arguments[3]||0,B=null);let st,Et,Ct,Pt,Qt,oe,It,Se,Oe,Ve=A.isCompressedTexture?A.mipmaps[H]:A.image;B!==null?(st=B.max.x-B.min.x,Et=B.max.y-B.min.y,Ct=B.isBox3?B.max.z-B.min.z:1,Pt=B.min.x,Qt=B.min.y,oe=B.isBox3?B.min.z:0):(st=Ve.width,Et=Ve.height,Ct=Ve.depth||1,Pt=0,Qt=0,oe=0),G!==null?(It=G.x,Se=G.y,Oe=G.z):(It=0,Se=0,Oe=0);let In=ce.convert(N.format),Pe=ce.convert(N.type),Nt;N.isData3DTexture?(C.setTexture3D(N,0),Nt=k.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(C.setTexture2DArray(N,0),Nt=k.TEXTURE_2D_ARRAY):(C.setTexture2D(N,0),Nt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,N.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,N.unpackAlignment);let Vi=k.getParameter(k.UNPACK_ROW_LENGTH),Ie=k.getParameter(k.UNPACK_IMAGE_HEIGHT),si=k.getParameter(k.UNPACK_SKIP_PIXELS),kr=k.getParameter(k.UNPACK_SKIP_ROWS),Un=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ve.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ve.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Pt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Qt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,oe);let sa=A.isDataArrayTexture||A.isData3DTexture,Ge=N.isDataArrayTexture||N.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let Mi=Ft.get(A),ra=Ft.get(N),$n=Ft.get(Mi.__renderTarget),_s=Ft.get(ra.__renderTarget);Ot.bindFramebuffer(k.READ_FRAMEBUFFER,$n.__webglFramebuffer),Ot.bindFramebuffer(k.DRAW_FRAMEBUFFER,_s.__webglFramebuffer);for(let Ms=0;Ms<Ct;Ms++)sa&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ft.get(A).__webglTexture,H,oe+Ms),A.isDepthTexture?(Ge&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ft.get(N).__webglTexture,H,Oe+Ms),k.blitFramebuffer(Pt,Qt,st,Et,It,Se,st,Et,k.DEPTH_BUFFER_BIT,k.NEAREST)):Ge?k.copyTexSubImage3D(Nt,H,It,Se,Oe+Ms,Pt,Qt,st,Et):k.copyTexSubImage2D(Nt,H,It,Se,Oe+Ms,Pt,Qt,st,Et);Ot.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ge?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Nt,H,It,Se,Oe,st,Et,Ct,In,Pe,Ve.data):N.isCompressedArrayTexture?k.compressedTexSubImage3D(Nt,H,It,Se,Oe,st,Et,Ct,In,Ve.data):k.texSubImage3D(Nt,H,It,Se,Oe,st,Et,Ct,In,Pe,Ve):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,H,It,Se,st,Et,In,Pe,Ve.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,H,It,Se,Ve.width,Ve.height,In,Ve.data):k.texSubImage2D(k.TEXTURE_2D,H,It,Se,st,Et,In,Pe,Ve);k.pixelStorei(k.UNPACK_ROW_LENGTH,Vi),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ie),k.pixelStorei(k.UNPACK_SKIP_PIXELS,si),k.pixelStorei(k.UNPACK_SKIP_ROWS,kr),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Un),H===0&&N.generateMipmaps&&k.generateMipmap(Nt),Ot.unbindTexture()},this.copyTextureToTexture3D=function(A,N,B=null,G=null,H=0){return A.isTexture!==!0&&(ga("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,G=arguments[1]||null,A=arguments[2],N=arguments[3],H=arguments[4]||0),ga('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,N,B,G,H)},this.initRenderTarget=function(A){Ft.get(A).__webglFramebuffer===void 0&&C.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),Ot.unbindTexture()},this.resetState=function(){R=0,P=0,L=null,Ot.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}},Kl=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new dt(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ai=class extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ku=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Uu,this.updateRanges=[],this.version=0,this.uuid=Ki()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Sn=new T,jl=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Sn.fromBufferAttribute(this,e),Sn.applyMatrix4(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Sn.fromBufferAttribute(this,e),Sn.applyNormalMatrix(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Sn.fromBufferAttribute(this,e),Sn.transformDirection(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=li(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ue(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=li(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=li(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=li(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=li(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),s=Ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),s=Ue(s,this.array),r=Ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ui=class extends es{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},jr,ha=new T,Qr=new T,to=new T,eo=new nt,ua=new nt,K0=new ge,Tl=new T,da=new T,Al=new T,y0=new nt,Gh=new nt,v0=new nt,Ri=class extends hn{constructor(t=new ui){if(super(),this.isSprite=!0,this.type="Sprite",jr===void 0){jr=new Te;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ku(e,5);jr.setIndex([0,1,2,0,2,3]),jr.setAttribute("position",new jl(i,3,0,!1)),jr.setAttribute("uv",new jl(i,2,3,!1))}this.geometry=jr,this.material=t,this.center=new nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qr.setFromMatrixScale(this.matrixWorld),K0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),to.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qr.multiplyScalar(-to.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Rl(Tl.set(-.5,-.5,0),to,o,Qr,s,r),Rl(da.set(.5,-.5,0),to,o,Qr,s,r),Rl(Al.set(.5,.5,0),to,o,Qr,s,r),y0.set(0,0),Gh.set(1,0),v0.set(1,1);let a=t.ray.intersectTriangle(Tl,da,Al,!1,ha);if(a===null&&(Rl(da.set(-.5,.5,0),to,o,Qr,s,r),Gh.set(0,1),a=t.ray.intersectTriangle(Tl,Al,da,!1,ha),a===null))return;let l=t.ray.origin.distanceTo(ha);l<t.near||l>t.far||e.push({distance:l,point:ha.clone(),uv:Cs.getInterpolation(ha,Tl,da,Al,y0,Gh,v0,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Rl(n,t,e,i,s,r){eo.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(ua.x=r*eo.x-s*eo.y,ua.y=s*eo.x+r*eo.y):ua.copy(eo),n.copy(t),n.x+=ua.x,n.y+=ua.y,n.applyMatrix4(K0)}var ju=class extends Ln{constructor(t=null,e=1,i=1,s,r,o,a,l,c=kn,h=kn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ql=class extends Ye{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},no=new ge,_0=new ge,Cl=[],M0=new hi,PE=new ge,fa=new at,pa=new Ds,Us=class extends at{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ql(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,PE)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new hi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,no),M0.copy(t.boundingBox).applyMatrix4(no),this.boundingBox.union(M0)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ds),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,no),pa.copy(t.boundingSphere).applyMatrix4(no),this.boundingSphere.union(pa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(fa.geometry=this.geometry,fa.material=this.material,fa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pa.copy(this.boundingSphere),pa.applyMatrix4(i),t.ray.intersectsSphere(pa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,no),_0.multiplyMatrices(i,no),fa.matrixWorld=_0,fa.raycast(t,Cl);for(let o=0,a=Cl.length;o<a;o++){let l=Cl[o];l.instanceId=r,l.object=this,e.push(l)}Cl.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ql(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ju(new Float32Array(s*this.count),s,this.count,Cd,wi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Fn=class extends es{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},E0=new ge,Qu=new Wl,Pl=new Ds,Il=new T,Yn=class extends hn{constructor(t=new Te,e=new Fn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pl.copy(i.boundingSphere),Pl.applyMatrix4(s),Pl.radius+=r,t.ray.intersectsSphere(Pl)===!1)return;E0.copy(s).invert(),Qu.copy(t.ray).applyMatrix4(E0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,y=f;g<y;g++){let x=c.getX(g);Il.fromBufferAttribute(u,x),b0(Il,x,l,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,y=f;g<y;g++)Il.fromBufferAttribute(u,g),b0(Il,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function b0(n,t,e,i,s,r,o){let a=Qu.distanceSqToPoint(n);if(a<e){let l=new T;Qu.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var on=class extends Ln{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new nt:new T);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new T,s=[],r=[],o=[],a=new T,l=new ge;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new T)}r[0]=new T,o[0]=new T;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(pn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(pn(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Sa=class extends Zn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new nt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},td=class extends Sa{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Hd(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var Ll=new T,Wh=new Hd,Xh=new Hd,$h=new Hd,Ta=class extends Zn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new T){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ll.subVectors(s[0],s[1]).add(s[0]),c=Ll);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ll.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ll),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),x<1e-4&&(x=y),Wh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,x),Xh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,x),$h.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,x)}else this.curveType==="catmullrom"&&(Wh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Xh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),$h.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Wh.calc(l),Xh.calc(l),$h.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function w0(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function IE(n,t){let e=1-n;return e*e*t}function LE(n,t){return 2*(1-n)*n*t}function DE(n,t){return n*n*t}function Ma(n,t,e,i){return IE(n,t)+LE(n,e)+DE(n,i)}function UE(n,t){let e=1-n;return e*e*e*t}function NE(n,t){let e=1-n;return 3*e*e*n*t}function HE(n,t){return 3*(1-n)*n*n*t}function kE(n,t){return n*n*n*t}function Ea(n,t,e,i,s){return UE(n,t)+NE(n,e)+HE(n,i)+kE(n,s)}var tc=class extends Zn{constructor(t=new nt,e=new nt,i=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new nt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ea(t,s.x,r.x,o.x,a.x),Ea(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ed=class extends Zn{constructor(t=new T,e=new T,i=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new T){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ea(t,s.x,r.x,o.x,a.x),Ea(t,s.y,r.y,o.y,a.y),Ea(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ec=class extends Zn{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},nd=class extends Zn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},nc=class extends Zn{constructor(t=new nt,e=new nt,i=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new nt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Ma(t,s.x,r.x,o.x),Ma(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ic=class extends Zn{constructor(t=new T,e=new T,i=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new T){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Ma(t,s.x,r.x,o.x),Ma(t,s.y,r.y,o.y),Ma(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sc=class extends Zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(w0(a,l.x,c.x,h.x,u.x),w0(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new nt().fromArray(s))}return this}},id=Object.freeze({__proto__:null,ArcCurve:td,CatmullRomCurve3:Ta,CubicBezierCurve:tc,CubicBezierCurve3:ed,EllipseCurve:Sa,LineCurve:ec,LineCurve3:nd,QuadraticBezierCurve:nc,QuadraticBezierCurve3:ic,SplineCurve:sc}),sd=class extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new id[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new id[s.type]().fromJSON(s))}return this}},rd=class extends sd{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new ec(this.currentPoint.clone(),new nt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new nc(this.currentPoint.clone(),new nt(t,e),new nt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new tc(this.currentPoint.clone(),new nt(t,e),new nt(i,s),new nt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new sc(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new Sa(t,e,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ns=class n extends Te{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=pn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new T,d=new nt,f=new T,g=new T,y=new T,x=0,m=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:x=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,f.x=m*1,f.y=-x,f.z=m*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:x=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,f.x=m*1,f.y=-x,f.z=m*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let _=0;_<=e;_++){let E=i+_*h*s,v=Math.sin(E),I=Math.cos(E);for(let R=0;R<=t.length-1;R++){u.x=t[R].x*v,u.y=t[R].y,u.z=t[R].x*I,o.push(u.x,u.y,u.z),d.x=_/e,d.y=R/(t.length-1),a.push(d.x,d.y);let P=l[3*R+0]*v,L=l[3*R+1],S=l[3*R+0]*I;c.push(P,L,S)}}for(let _=0;_<e;_++)for(let E=0;E<t.length-1;E++){let v=E+_*t.length,I=v,R=v+t.length,P=v+t.length+1,L=v+1;r.push(I,R,L),r.push(P,L,R)}this.setIndex(r),this.setAttribute("position",new Yt(o,3)),this.setAttribute("uv",new Yt(a,2)),this.setAttribute("normal",new Yt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},rc=class n extends ns{constructor(t=1,e=1,i=4,s=8){let r=new rd;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new n(t.radius,t.length,t.capSegments,t.radialSegments)}},Ns=class n extends Te{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new T,h=new nt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(a,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},te=class n extends Te{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,y=[],x=i/2,m=0;_(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(f,2));function _(){let v=new T,I=new T,R=0,P=(e-t)/i;for(let L=0;L<=r;L++){let S=[],b=L/r,D=b*(e-t)+t;for(let V=0;V<=s;V++){let O=V/s,W=O*l+a,Q=Math.sin(W),Y=Math.cos(W);I.x=D*Q,I.y=-b*i+x,I.z=D*Y,u.push(I.x,I.y,I.z),v.set(Q,P,Y).normalize(),d.push(v.x,v.y,v.z),f.push(O,1-b),S.push(g++)}y.push(S)}for(let L=0;L<s;L++)for(let S=0;S<r;S++){let b=y[S][L],D=y[S+1][L],V=y[S+1][L+1],O=y[S][L+1];(t>0||S!==0)&&(h.push(b,D,O),R+=3),(e>0||S!==r-1)&&(h.push(D,V,O),R+=3)}c.addGroup(m,R,0),m+=R}function E(v){let I=g,R=new nt,P=new T,L=0,S=v===!0?t:e,b=v===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,x*b,0),d.push(0,b,0),f.push(.5,.5),g++;let D=g;for(let V=0;V<=s;V++){let W=V/s*l+a,Q=Math.cos(W),Y=Math.sin(W);P.x=S*Y,P.y=x*b,P.z=S*Q,u.push(P.x,P.y,P.z),d.push(0,b,0),R.x=Q*.5+.5,R.y=Y*.5*b+.5,f.push(R.x,R.y),g++}for(let V=0;V<s;V++){let O=I+V,W=D+V;v===!0?h.push(W,W+1,O):h.push(W+1,W,O),L+=3}c.addGroup(m,L,v===!0?1:2),m+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ze=class n extends te{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Aa=class n extends Te{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(r.slice(),3)),this.setAttribute("uv",new Yt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let E=new T,v=new T,I=new T;for(let R=0;R<e.length;R+=3)f(e[R+0],E),f(e[R+1],v),f(e[R+2],I),l(E,v,I,_)}function l(_,E,v,I){let R=I+1,P=[];for(let L=0;L<=R;L++){P[L]=[];let S=_.clone().lerp(v,L/R),b=E.clone().lerp(v,L/R),D=R-L;for(let V=0;V<=D;V++)V===0&&L===R?P[L][V]=S:P[L][V]=S.clone().lerp(b,V/D)}for(let L=0;L<R;L++)for(let S=0;S<2*(R-L)-1;S++){let b=Math.floor(S/2);S%2===0?(d(P[L][b+1]),d(P[L+1][b]),d(P[L][b])):(d(P[L][b+1]),d(P[L+1][b+1]),d(P[L+1][b]))}}function c(_){let E=new T;for(let v=0;v<r.length;v+=3)E.x=r[v+0],E.y=r[v+1],E.z=r[v+2],E.normalize().multiplyScalar(_),r[v+0]=E.x,r[v+1]=E.y,r[v+2]=E.z}function h(){let _=new T;for(let E=0;E<r.length;E+=3){_.x=r[E+0],_.y=r[E+1],_.z=r[E+2];let v=x(_)/2/Math.PI+.5,I=m(_)/Math.PI+.5;o.push(v,1-I)}g(),u()}function u(){for(let _=0;_<o.length;_+=6){let E=o[_+0],v=o[_+2],I=o[_+4],R=Math.max(E,v,I),P=Math.min(E,v,I);R>.9&&P<.1&&(E<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),I<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,E){let v=_*3;E.x=t[v+0],E.y=t[v+1],E.z=t[v+2]}function g(){let _=new T,E=new T,v=new T,I=new T,R=new nt,P=new nt,L=new nt;for(let S=0,b=0;S<r.length;S+=9,b+=6){_.set(r[S+0],r[S+1],r[S+2]),E.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),R.set(o[b+0],o[b+1]),P.set(o[b+2],o[b+3]),L.set(o[b+4],o[b+5]),I.copy(_).add(E).add(v).divideScalar(3);let D=x(I);y(R,b+0,_,D),y(P,b+2,E,D),y(L,b+4,v,D)}}function y(_,E,v,I){I<0&&_.x===1&&(o[E]=_.x-1),v.x===0&&v.z===0&&(o[E]=I/2/Math.PI+.5)}function x(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}},Jn=class n extends Aa{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var On=class n extends Aa{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},mr=class n extends Aa{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},gn=class n extends Te{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new T,g=new nt;for(let y=0;y<=s;y++){for(let x=0;x<=i;x++){let m=r+x/i*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let y=0;y<s;y++){let x=y*(i+1);for(let m=0;m<i;m++){let _=m+x,E=_,v=_+i+1,I=_+i+2,R=_+1;a.push(E,v,R),a.push(v,I,R)}}this.setIndex(a),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Bt=class n extends Te{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new T,d=new T,f=[],g=[],y=[],x=[];for(let m=0;m<=i;m++){let _=[],E=m/i,v=0;m===0&&o===0?v=.5/e:m===i&&l===Math.PI&&(v=-.5/e);for(let I=0;I<=e;I++){let R=I/e;u.x=-t*Math.cos(s+R*r)*Math.sin(o+E*a),u.y=t*Math.cos(o+E*a),u.z=t*Math.sin(s+R*r)*Math.sin(o+E*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),x.push(R+v,1-E),_.push(c++)}h.push(_)}for(let m=0;m<i;m++)for(let _=0;_<e;_++){let E=h[m][_+1],v=h[m][_],I=h[m+1][_],R=h[m+1][_+1];(m!==0||o>0)&&f.push(E,v,R),(m!==i-1||l<Math.PI)&&f.push(v,I,R)}this.setIndex(f),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(y,3)),this.setAttribute("uv",new Yt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Zt=class n extends Te{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new T,u=new T,d=new T;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let y=g/s*r,x=f/i*Math.PI*2;u.x=(t+e*Math.cos(x))*Math.cos(y),u.y=(t+e*Math.cos(x))*Math.sin(y),u.z=e*Math.sin(x),a.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let y=(s+1)*f+g-1,x=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,_=(s+1)*f+g;o.push(y,x,_),o.push(x,m,_)}this.setIndex(o),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var oc=class n extends Te{constructor(t=new ic(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new T,l=new T,c=new nt,h=new T,u=[],d=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(f,2));function y(){for(let E=0;E<e;E++)x(E);x(r===!1?e:0),_(),m()}function x(E){h=t.getPointAt(E/e,h);let v=o.normals[E],I=o.binormals[E];for(let R=0;R<=s;R++){let P=R/s*Math.PI*2,L=Math.sin(P),S=-Math.cos(P);l.x=S*v.x+L*I.x,l.y=S*v.y+L*I.y,l.z=S*v.z+L*I.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let E=1;E<=e;E++)for(let v=1;v<=s;v++){let I=(s+1)*(E-1)+(v-1),R=(s+1)*E+(v-1),P=(s+1)*E+v,L=(s+1)*(E-1)+v;g.push(I,R,L),g.push(R,P,L)}}function _(){for(let E=0;E<=e;E++)for(let v=0;v<=s;v++)c.x=E/e,c.y=v/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new id[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var ac=class extends tn{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},ht=class extends es{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=B0,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Dl(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function zE(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var yo=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},od=class extends yo{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ep,endingEnd:Ep}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case bp:r=t,a=2*e-i;break;case wp:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case bp:o=t,l=2*i-e;break;case wp:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),y=g*g,x=y*g,m=-d*x+2*d*y-d*g,_=(1+d)*x+(-1.5-2*d)*y+(-.5+d)*g+1,E=(-1-f)*x+(1.5+f)*y+.5*g,v=f*x-f*y;for(let I=0;I!==a;++I)r[I]=m*o[h+I]+_*o[c+I]+E*o[l+I]+v*o[u+I];return r}},ad=class extends yo{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},ld=class extends yo{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},di=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Dl(e,this.TimeBufferType),this.values=Dl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Dl(t.times,Array),values:Dl(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ld(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ad(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new od(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Fl:e=this.InterpolantFactoryMethodDiscrete;break;case Du:e=this.InterpolantFactoryMethodLinear;break;case gh:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fl;case this.InterpolantFactoryMethodLinear:return Du;case this.InterpolantFactoryMethodSmooth:return gh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&zE(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===gh,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let y=e[u+g];if(y!==e[d+g]||y!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=Du;var gr=class extends di{constructor(t,e,i){super(t,e,i)}};gr.prototype.ValueTypeName="bool";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=Fl;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;var cd=class extends di{};cd.prototype.ValueTypeName="color";var hd=class extends di{};hd.prototype.ValueTypeName="number";var ud=class extends yo{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)rn.slerpFlat(r,0,o,c-a,o,c,l);return r}},lc=class extends di{InterpolantFactoryMethodLinear(t){return new ud(this.times,this.values,this.getValueSize(),t)}};lc.prototype.ValueTypeName="quaternion";lc.prototype.InterpolantFactoryMethodSmooth=void 0;var xr=class extends di{constructor(t,e,i){super(t,e,i)}};xr.prototype.ValueTypeName="string";xr.prototype.ValueBufferType=Array;xr.prototype.DefaultInterpolation=Fl;xr.prototype.InterpolantFactoryMethodLinear=void 0;xr.prototype.InterpolantFactoryMethodSmooth=void 0;var dd=class extends di{};dd.prototype.ValueTypeName="vector";var fd=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},FE=new fd,pd=class{constructor(t){this.manager=t!==void 0?t:FE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};pd.DEFAULT_MATERIAL_NAME="__DEFAULT";var yr=class extends hn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Hs=class extends yr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},qh=new ge,S0=new T,T0=new T,Ra=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wa,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;S0.setFromMatrixPosition(t.matrixWorld),e.position.copy(S0),T0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(T0),e.updateMatrixWorld(),qh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},md=class extends Ra{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=fo*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},vo=class extends yr{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new md}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},A0=new ge,ma=new T,Yh=new T,gd=class extends Ra{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new Ne(2,1,1,1),new Ne(0,1,1,1),new Ne(3,1,1,1),new Ne(1,1,1,1),new Ne(3,0,1,1),new Ne(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ma.setFromMatrixPosition(t.matrixWorld),i.position.copy(ma),Yh.copy(i.position),Yh.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Yh),i.updateMatrixWorld(),s.makeTranslation(-ma.x,-ma.y,-ma.z),A0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(A0)}},ks=class extends yr{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new gd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},xd=class extends Ra{constructor(){super(new mo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ci=class extends yr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new xd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},cc=class extends yr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var _o=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=R0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=R0();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function R0(){return performance.now()}var kd="\\[\\]\\.:\\/",OE=new RegExp("["+kd+"]","g"),zd="[^"+kd+"]",BE="[^"+kd.replace("\\.","")+"]",VE=/((?:WC+[\/:])*)/.source.replace("WC",zd),GE=/(WCOD+)?/.source.replace("WCOD",BE),WE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zd),XE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zd),$E=new RegExp("^"+VE+GE+WE+XE+"$"),qE=["material","materials","bones","map"],yd=class{constructor(t,e,i){let s=i||Xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Xe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(OE,"")}static parseTrackName(t){let e=$E.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);qE.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xe.Composite=yd;Xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xe.prototype.GetterByBindingType=[Xe.prototype._getValue_direct,Xe.prototype._getValue_array,Xe.prototype._getValue_arrayElement,Xe.prototype._getValue_toArray];Xe.prototype.SetterByBindingTypeAndVersioning=[[Xe.prototype._setValue_direct,Xe.prototype._setValue_direct_setNeedsUpdate,Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_array,Xe.prototype._setValue_array_setNeedsUpdate,Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_arrayElement,Xe.prototype._setValue_arrayElement_setNeedsUpdate,Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_fromArray,Xe.prototype._setValue_fromArray_setNeedsUpdate,Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sb=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vd);var fc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Bn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},YE=new mo(-1,1,1,-1,0,1),Fd=class extends Te{constructor(){super(),this.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Yt([0,2,0,0,2,0],2))}},ZE=new Fd,Fs=class{constructor(t){this._mesh=new at(ZE,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,YE)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var bo=class extends Bn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof tn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=zs.clone(t.uniforms),this.material=new tn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Fs(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ca=class extends Bn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},pc=class extends Bn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var mc=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new nt);this._width=i.width,this._height=i.height,e=new An(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new bo(fc),this.copyPass.material.blending=Si,this.clock=new _o}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ca!==void 0&&(o instanceof Ca?i=!0:o instanceof pc&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var gc=class extends Bn{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new dt}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var j0={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new dt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var wo=class n extends Bn{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new nt(t.x,t.y):new nt(256,256),this.clearColor=new dt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new An(r,o,{type:fi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new An(r,o,{type:fi});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new An(r,o,{type:fi});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=j0;this.highPassUniforms=zs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new tn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new nt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=fc;this.copyUniforms=zs.clone(h.uniforms),this.blendMaterial=new tn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Me,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new dt,this.oldClearAlpha=1,this.basic=new ne,this.fsQuad=new Fs(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new nt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new tn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new tn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};wo.BlurDirectionX=new nt(1,0);wo.BlurDirectionY=new nt(0,1);var Q0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var xc=class extends Bn{constructor(){super();let t=Q0;this.uniforms=zs.clone(t.uniforms),this.material=new ac({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Fs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},me.getTransfer(this._outputColorSpace)===Le&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Md?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ed?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===bd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===vr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===wd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Sd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var p={scene:null,camera:null,renderer:null,player:null,time:{t:.3,day:1,elevation:1,night:0},res:{iron:0,silicon:0,ice:0,titanium:0},buildings:[],nodes:[],enemies:[],colonists:[],colony:{pop:0,housing:0,o2:0,food:0,water:0,support:0,powerProd:0,powerUse:0,deficit:!1},upgrades:{},stats:{mined:{iron:0,silicon:0,ice:0,titanium:0},built:{},kills:0,arrived:0,crafted:{}},chapter:0,terraform:0,ended:!1,storm:0,menuOpen:!1,locked:!1,started:!1,debug:!1,colliders:null,raining:!1,events:{map:{},on(n,t){var e;((e=this.map)[n]||(e[n]=[])).push(t)},emit(n,t){(this.map[n]||[]).forEach(e=>e(t))}}},pi={iron:{name:"\u94C1\u77FF",icon:"iron",color:"#d08a5e"},silicon:{name:"\u7845\u6676",icon:"silicon",color:"#f1dca0"},ice:{name:"\u6C34\u51B0",icon:"ice",color:"#a9dcff"},titanium:{name:"\u949B\u77FF",icon:"titanium",color:"#b9a6ff"}};function mi(n){for(let t in n)if((p.res[t]||0)<n[t])return!1;return!0}function Pa(n){for(let t in n)p.res[t]-=n[t]}function So(n){return Object.entries(n).map(([t,e])=>`<span class="cost ${p.res[t]>=e?"":"lack"}" style="--rc:${pi[t].color}"><svg class="ico"><use href="#i-${t}"/></svg>${e}</span>`).join(" ")}var yc=class{constructor(t=16){this.cell=t,this.map=new Map}key(t,e){return t*73856093^e*19349663}add(t){let e=this.cell,i=Math.floor((t.x-t.r)/e),s=Math.floor((t.x+t.r)/e),r=Math.floor((t.z-t.r)/e),o=Math.floor((t.z+t.r)/e);t._keys=[];for(let a=i;a<=s;a++)for(let l=r;l<=o;l++){let c=this.key(a,l);this.map.has(c)||this.map.set(c,[]),this.map.get(c).push(t),t._keys.push(c)}return t}remove(t){if(!(!t||!t._keys)){for(let e of t._keys){let i=this.map.get(e);if(!i)continue;let s=i.indexOf(t);s>=0&&i.splice(s,1)}t._keys=null}}query(t,e){return this.map.get(this.key(Math.floor(t/this.cell),Math.floor(e/this.cell)))||[]}overlaps(t,e,i){let s=this.cell,r=new Set;for(let o=Math.floor((t-i)/s);o<=Math.floor((t+i)/s);o++)for(let a=Math.floor((e-i)/s);a<=Math.floor((e+i)/s);a++){let l=this.map.get(this.key(o,a));if(l)for(let c of l){if(r.has(c))continue;r.add(c);let h=c.x-t,u=c.z-e,d=c.r+i;if(h*h+u*u<d*d)return c}}return null}};function Vn(n){return function(){n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function vc(n){let t=Vn(n),e=[...Array(256).keys()];for(let l=255;l>0;l--){let c=Math.floor(t()*(l+1));[e[l],e[c]]=[e[c],e[l]]}let i=new Uint8Array(512);for(let l=0;l<512;l++)i[l]=e[l&255];let s=[1,-1,1,-1,1,-1,0,0],r=[1,1,-1,-1,0,0,1,-1],o=.5*(Math.sqrt(3)-1),a=(3-Math.sqrt(3))/6;return function(l,c){let h=0,u=0,d=0,f=(l+c)*o,g=Math.floor(l+f),y=Math.floor(c+f),x=(g+y)*a,m=l-(g-x),_=c-(y-x),E=m>_?1:0,v=m>_?0:1,I=m-E+a,R=_-v+a,P=m-1+2*a,L=_-1+2*a,S=g&255,b=y&255,D=.5-m*m-_*_;if(D>0){let W=i[S+i[b]]&7;D*=D,h=D*D*(s[W]*m+r[W]*_)}let V=.5-I*I-R*R;if(V>0){let W=i[S+E+i[b+v]]&7;V*=V,u=V*V*(s[W]*I+r[W]*R)}let O=.5-P*P-L*L;if(O>0){let W=i[S+1+i[b+1]]&7;O*=O,d=O*O*(s[W]*P+r[W]*L)}return 70*(h+u+d)}}function Od(n,t,e,i=4,s=2,r=.5){let o=1,a=1,l=0,c=0;for(let h=0;h<i;h++)l+=o*n(t*a,e*a),c+=o,o*=r,a*=s;return l/c}var gi=(n,t,e)=>n<t?t:n>e?e:n,Ae=(n,t,e)=>n+(t-n)*e,Rn=(n,t,e)=>{let i=gi((e-n)/(t-n),0,1);return i*i*(3-2*i)};var Gn={mars:{id:"mars",name:"\u706B\u661F",place:"\u4E4C\u6258\u90A6\u5E73\u539F",title:"\u65B0\u5BB6\u56ED",next:"europa",seed:2089,gravity:5.6,solar:1,terraformable:!0,craters:46,hills:46,ridges:14,detail:1.6,ground:{a:[.56,.25,.14],b:[.74,.4,.24],steep:[.36,.19,.13],low:[.42,.22,.16]},rockHSL:[.04,.45,.22],rock:9062960,sky:{dayTop:[.62,.42,.29],dayHor:[.9,.68,.5],setTop:[.17,.13,.15],setHor:[.58,.4,.33],nightTop:[.006,.008,.022],nightHor:[.035,.035,.055],halo:[.35,.58,.95],storm:[.62,.42,.28]},dust:16765088,enemy:[3808536,9054736,16730640],extras:"moons",storms:!0,intro:["2089 \u5E74\u3002","\u5730\u7403\u4F9D\u7136\u7F8E\u4E3D\uFF0C\u4F46\u5DF2\u7ECF\u592A\u62E5\u6324\u3001\u592A\u708E\u70ED\u3001\u592A\u75B2\u60EB\u3002","\u300C\u65B9\u821F\u8BA1\u5212\u300D\u628A\u4EBA\u7C7B\u7684\u672A\u6765\uFF0C\u62BC\u5728\u4E86\u4E00\u9897\u7EA2\u8272\u661F\u7403\u4E0A\u3002","\u7ECF\u8FC7\u4E03\u4E2A\u6708\u3001\u4E24\u4EBF\u4E24\u5343\u4E94\u767E\u4E07\u516C\u91CC\u7684\u822A\u884C\u2014\u2014","\u4F60\u7684\u7740\u9646\u8231\uFF0C\u5728\u4E4C\u6258\u90A6\u5E73\u539F\u7684\u6668\u5149\u4E2D\u843D\u5730\u3002",'\u4F60\u662F\u7B2C\u4E00\u4E2A\u3002<b style="color:#ff8a3d">\u4F46\u4E0D\u4F1A\u662F\u6700\u540E\u4E00\u4E2A\u3002</b>']},europa:{id:"europa",name:"\u6728\u536B\u4E8C\xB7\u6B27\u7F57\u5DF4",place:"\u5EB7\u7EB3\u9A6C\u62C9\u6DF7\u6C8C\u533A",title:"\u51B0\u4E0B\u4E4B\u6D77",next:"kepler",seed:1610,gravity:3.6,solar:.55,terraformable:!1,craters:14,hills:16,ridges:26,detail:1.1,ground:{a:[.8,.84,.88],b:[.93,.95,.97],steep:[.52,.36,.3],low:[.62,.72,.82]},rockHSL:[.58,.2,.62],rock:12110040,sky:{dayTop:[.02,.025,.05],dayHor:[.16,.18,.26],setTop:[.01,.012,.03],setHor:[.1,.1,.16],nightTop:[.004,.005,.012],nightHor:[.02,.025,.04],halo:[.6,.7,.9],storm:[.5,.6,.7]},dust:14676223,enemy:[1454138,2788e3,4251903],extras:"jupiter",storms:!1,intro:["\u706B\u661F\u7684\u706F\u706B\uFF0C\u5DF2\u7ECF\u5728\u8EAB\u540E\u4EAE\u6210\u4E86\u4E00\u7247\u3002","\u800C\u4F60\uFF0C\u518D\u4E00\u6B21\u51FA\u53D1\u4E86\u3002","\u6728\u661F\u7684\u7B2C\u4E8C\u9897\u536B\u661F\u2014\u2014\u6B27\u7F57\u5DF4\u3002","\u5728\u5B83\u4E8C\u5341\u516C\u91CC\u539A\u7684\u51B0\u58F3\u4E4B\u4E0B\uFF0C\u662F\u4E00\u6574\u7247\u4ECE\u672A\u89C1\u8FC7\u9633\u5149\u7684\u6D77\u6D0B\u3002","\u6728\u661F\uFF0C\u50CF\u4E00\u8F6E\u5DE8\u5927\u7684\u6708\u4EAE\uFF0C\u60AC\u5728\u5730\u5E73\u7EBF\u4E0A\u3002",'<b style="color:#66e6ff">\u4EBA\u7C7B\u7684\u7B2C\u4E8C\u4E2A\u5BB6\uFF0C\u5728\u51B0\u4E0B\u3002</b>']},kepler:{id:"kepler",name:"\u5F00\u666E\u52D2-442b",place:"\u7FE1\u7FE0\u8C37\u5730",title:"\u53CC\u65E5\u4E4B\u5730",next:null,seed:442,gravity:7.2,solar:1.3,terraformable:!1,craters:8,hills:64,ridges:10,detail:2.2,ground:{a:[.18,.36,.3],b:[.32,.52,.34],steep:[.3,.24,.3],low:[.2,.26,.4]},rockHSL:[.75,.25,.3],rock:6969994,sky:{dayTop:[.3,.5,.78],dayHor:[.78,.86,.8],setTop:[.2,.12,.3],setHor:[.9,.5,.4],nightTop:[.01,.01,.04],nightHor:[.05,.04,.09],halo:[1,.6,.4],storm:[.6,.7,.6]},dust:13172696,enemy:[1976854,5939242,10551104],extras:"twinsuns",storms:!1,intro:["\u4E00\u5343\u4E8C\u767E\u5149\u5E74\u3002","\u51B7\u51BB\u8231\u91CC\u7684\u4E09\u767E\u5E74\uFF0C\u5BF9\u4F60\u53EA\u662F\u4E00\u573A\u68A6\u3002","\u8237\u7A97\u5916\uFF0C\u4E24\u9897\u592A\u9633\u6B63\u4ECE\u7D2B\u8272\u7684\u5C71\u810A\u540E\u5347\u8D77\u3002","\u8FD9\u91CC\u6709\u98CE\uFF0C\u6709\u4E91\uFF0C\u6709\u4F1A\u5728\u591C\u91CC\u53D1\u5149\u7684\u68EE\u6797\u3002","\u5F00\u666E\u52D2-442b\u2014\u2014\u4EBA\u7C7B\u7B2C\u4E00\u6B21\uFF0C\u6765\u5230\u53E6\u4E00\u9897\u6052\u661F\u7684\u8EAB\u8FB9\u3002",'<b style="color:#a0ff70">\u4ECE\u8FD9\u91CC\u5F00\u59CB\uFF0C\u4EBA\u7C7B\u6210\u4E3A\u4E86\u661F\u9645\u6587\u660E\u3002</b>']}},em="starport-meta";function To(){try{return JSON.parse(localStorage.getItem(em))||{}}catch{return{}}}function Bd(n){try{localStorage.setItem(em,JSON.stringify(n))}catch{}}function nm(){try{for(let n of Object.keys(localStorage))n.startsWith("starport-")&&localStorage.removeItem(n)}catch{}}var tm=new URLSearchParams(location.search).get("planet"),Dn=To(),le=Gn[tm]?tm:Gn[Dn.planet]?Dn.planet:"mars",ut=Gn[le],_c=le==="mars"?"starport-newhome-v1":"starport-planet-"+le;var se=512;function is(){let n=document.createElement("canvas");return n.width=n.height=se,n}function ss(n,t,e=1){let i=new on(n);return i.wrapS=i.wrapT=Qi,i.repeat.set(e,e),i.anisotropy=4,t&&(i.colorSpace=_e),i}function Os(n,t,e,i,s,r,o,a){for(let l=0;l<e;l++){n.fillStyle=`rgba(${i},${s+t()*(r-s)})`;let c=o+t()*(a-o);n.fillRect(t()*se,t()*se,c,c)}}function Ia(n=1,t=4){let e=Vn(n),i=is(),s=i.getContext("2d"),r=is(),o=r.getContext("2d"),a=is(),l=a.getContext("2d");s.fillStyle="#f2f0ec",s.fillRect(0,0,se,se),o.fillStyle="#8c8c8c",o.fillRect(0,0,se,se),l.fillStyle="#808080",l.fillRect(0,0,se,se);let c=se/t;for(let u=0;u<t;u++)for(let d=0;d<t;d++){let f=236+Math.floor(e()*18);s.fillStyle=`rgb(${f},${f-2},${f-5})`,s.fillRect(u*c,d*c,c,c);let g=120+Math.floor(e()*40);if(o.fillStyle=`rgb(${g},${g},${g})`,o.fillRect(u*c,d*c,c,c),e()<.35){let y=c*(.25+e()*.3),x=c*(.2+e()*.25),m=u*c+c*.2+e()*c*.3,_=d*c+c*.2+e()*c*.3;l.strokeStyle="#4a4a4a",l.lineWidth=2,l.strokeRect(m,_,y,x),s.strokeStyle="rgba(80,76,70,.35)",s.lineWidth=1.5,s.strokeRect(m,_,y,x)}}for(let u=0;u<=t;u++){let d=u*c;for(let[f,g,y]of[[s,"rgba(70,64,58,.55)",2.5],[l,"#303030",4],[o,"#d0d0d0",3]])f.fillStyle=g,f.fillRect(d-y/2,0,y,se),f.fillRect(0,d-y/2,se,y)}for(let u=0;u<t;u++)for(let d=0;d<t;d++)for(let[f,g]of[[.08,.08],[.92,.08],[.08,.92],[.92,.92]]){let y=(u+f)*c,x=(d+g)*c;l.fillStyle="#c8c8c8",l.beginPath(),l.arc(y,x,3,0,7),l.fill(),s.fillStyle="rgba(90,86,80,.5)",s.beginPath(),s.arc(y,x,2.2,0,7),s.fill()}for(let u=0;u<70;u++){let d=e()*se,f=30+e()*160,g=e()*se,y=s.createLinearGradient(0,g,0,g+f);y.addColorStop(0,"rgba(150,90,60,0)"),y.addColorStop(.3,`rgba(150,90,60,${.05+e()*.08})`),y.addColorStop(1,"rgba(150,90,60,0)"),s.fillStyle=y,s.fillRect(d,g,1+e()*3,f)}let h=s.createLinearGradient(0,se*.75,0,se);h.addColorStop(0,"rgba(170,100,60,0)"),h.addColorStop(1,"rgba(170,100,60,.22)"),s.fillStyle=h,s.fillRect(0,0,se,se),Os(s,e,2500,"120,80,60",.03,.12,1,3),Os(o,e,1800,"255,255,255",.05,.2,1,4),s.strokeStyle="rgba(255,255,255,.25)",o.strokeStyle="rgba(40,40,40,.4)";for(let u=0;u<40;u++){let d=e()*se,f=e()*se,g=(e()-.5)*40,y=(e()-.5)*12;for(let x of[s,o])x.lineWidth=.8,x.beginPath(),x.moveTo(d,f),x.lineTo(d+g,f+y),x.stroke()}return{map:ss(i,!0),roughnessMap:ss(r,!1),bumpMap:ss(a,!1)}}function im(n=7){let t=Vn(n),e=is(),i=e.getContext("2d"),s=is(),r=s.getContext("2d");i.fillStyle="#e6e6e6",i.fillRect(0,0,se,se),r.fillStyle="#6a6a6a",r.fillRect(0,0,se,se);for(let o=0;o<se;o++){let a=210+Math.floor(t()*45);i.fillStyle=`rgba(${a},${a},${a},.5)`,i.fillRect(0,o,se,1);let l=80+Math.floor(t()*60);r.fillStyle=`rgba(${l},${l},${l},.5)`,r.fillRect(0,o,se,1)}return Os(i,t,800,"60,50,40",.05,.15,1,3),{map:ss(e,!0),roughnessMap:ss(s,!1)}}function sm(n=3){let t=Vn(n),e=is(),i=e.getContext("2d"),s=is(),r=s.getContext("2d");i.fillStyle="#d8d2c8",i.fillRect(0,0,se,se),r.fillStyle="#808080",r.fillRect(0,0,se,se),Os(i,t,9e3,"90,80,70",.04,.16,1,4),Os(i,t,3e3,"255,250,240",.04,.12,1,3),Os(r,t,6e3,"40,40,40",.1,.4,1,3);for(let a=0;a<6;a++){i.strokeStyle="rgba(70,60,50,.25)",i.lineWidth=1,i.beginPath();let l=t()*se,c=t()*se;i.moveTo(l,c);for(let h=0;h<12;h++)l+=(t()-.5)*50,c+=(t()-.5)*50,i.lineTo(l,c);i.stroke()}let o=i.createLinearGradient(0,0,0,se);return o.addColorStop(0,"rgba(170,100,60,0)"),o.addColorStop(1,"rgba(170,100,60,.3)"),i.fillStyle=o,i.fillRect(0,0,se,se),{map:ss(e,!0,1),bumpMap:ss(s,!1,1)}}function rm(n=11){let t=Vn(n),e=is(),i=e.getContext("2d"),s=is(),r=s.getContext("2d");i.fillStyle="#d0c4bc",i.fillRect(0,0,se,se),r.fillStyle="#808080",r.fillRect(0,0,se,se);for(let o=0;o<300;o++){let a=t()*se,l=t()*se,c=6+t()*40,h=Math.floor(150+t()*90);i.fillStyle=`rgba(${h},${h-15},${h-25},.25)`,i.beginPath(),i.ellipse(a,l,c,c*(.4+t()*.6),t()*3,0,7),i.fill(),r.fillStyle=`rgba(${h},${h},${h},.25)`,r.beginPath(),r.ellipse(a,l,c,c*.6,t()*3,0,7),r.fill()}return Os(i,t,8e3,"60,40,30",.05,.2,1,3),Os(r,t,8e3,"20,20,20",.1,.5,1,2),{map:ss(e,!0,1),bumpMap:ss(s,!1,1)}}var M={white:new ht({color:15328474,roughness:.55,metalness:.1}),panel:new ht({color:13222840,roughness:.6,metalness:.2}),metal:new ht({color:8159110,roughness:.4,metalness:.7}),dark:new ht({color:2895670,roughness:.5,metalness:.5}),orange:new ht({color:16742954,roughness:.5,metalness:.1}),glass:new ht({color:10474751,roughness:.05,metalness:.3,transparent:!0,opacity:.35}),window:new ht({color:2240576,emissive:16761466,emissiveIntensity:0,roughness:.2}),solar:new ht({color:1780826,roughness:.25,metalness:.8}),plant:new ht({color:5221962,roughness:.8,flatShading:!0}),cyan:new ht({color:1127236,emissive:3401471,emissiveIntensity:2}),red:new ht({color:3342336,emissive:16722474,emissiveIntensity:3}),lamp:new ht({color:3351057,emissive:16767392,emissiveIntensity:0}),found:new ht({color:9143160,roughness:.9}),flame:new ne({color:16756832,transparent:!0,opacity:.85,blending:Me,depthWrite:!1})};{let n=Ia(1,4),t=Ia(5,3),e=im(),i=sm(),s=Ia(9,2);Object.assign(M.white,{...n,bumpScale:1.4,roughness:.75,metalness:.15,color:new dt(15920612)}),Object.assign(M.panel,{...t,bumpScale:1.2,roughness:.8,metalness:.25,color:new dt(13617340)}),Object.assign(M.metal,{...e,roughness:1,metalness:.85,color:new dt(10132900)}),Object.assign(M.dark,{...s,bumpScale:1,roughness:.7,metalness:.6,color:new dt(3816772)}),Object.assign(M.orange,{...Ia(3,2),bumpScale:.8,roughness:.7,metalness:.15}),Object.assign(M.found,{...i,bumpScale:2,roughness:.95,color:new dt(10853004)}),M.glass.roughness=.02,M.glass.metalness=.1,M.glass.opacity=.28,M.glass.envMapIntensity=2.2,M.solar.roughness=.12,M.solar.envMapIntensity=1.8;for(let r in M)M[r].needsUpdate=!0}var Pi=rm();{let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");t.fillStyle="#1d3266",t.fillRect(0,0,64,64),t.strokeStyle="#9fb4e0",t.lineWidth=1.5;for(let i=0;i<=64;i+=16)t.beginPath(),t.moveTo(i,0),t.lineTo(i,64),t.stroke(),t.beginPath(),t.moveTo(0,i),t.lineTo(64,i),t.stroke();let e=new on(n);e.colorSpace=_e,e.wrapS=e.wrapT=Qi,e.repeat.set(3,2),M.solar.map=e,M.solar.color.set(16777215)}function q(n,t,e=0,i=0,s=0,r){let o=new at(n,t);return o.position.set(e,i,s),o.castShadow=!0,o.receiveShadow=!0,r&&r.add(o),o}var Jt=(n,t,e)=>new Gt(n,t,e),Wt=(n,t,e,i=16)=>new te(n,t,e,i),Mc;function Wn(){if(Mc)return Mc;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.6)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Mc=new on(n),Mc}function Dt(n,t,e,i=0,s=0,r=0){let o=new Ri(new ui({map:Wn(),color:n,transparent:!0,blending:Me,depthWrite:!1}));return o.scale.set(t,t,1),o.position.set(i,s,r),e&&e.add(o),o}function Mn(n,t,e=!1){let i=q(e?Jt(t*2,4,t*2):Wt(t,t*1.05,4,20),M.found,0,-1.8,0,n);i.castShadow=!1,i.userData.found=!0}var rs={solar(n,t){Mn(n,2.2,!0),q(Wt(.18,.25,2.2),M.metal,0,1.1,0,n);let e=new wt;e.position.y=2.3,n.add(e);let i=q(Jt(4.2,.12,2.8),M.solar,0,0,0,e);q(Jt(4.4,.08,.1),M.metal,0,-.05,1.42,e),q(Jt(4.4,.08,.1),M.metal,0,-.05,-1.42,e),t.pivot=e,t.panel=i},oxygen(n,t){Mn(n,3),q(Wt(1,1,3.6),M.white,-1.3,1.8,0,n),q(new Bt(1,16,8,0,Math.PI*2,0,Math.PI/2),M.white,-1.3,3.6,0,n),q(Wt(1,1,3.6),M.white,1.3,1.8,0,n),q(new Bt(1,16,8,0,Math.PI*2,0,Math.PI/2),M.white,1.3,3.6,0,n),q(Wt(1.02,1.02,.3),M.orange,-1.3,2.4,0,n),q(Wt(1.02,1.02,.3),M.orange,1.3,2.4,0,n),q(Jt(1.4,1.6,1.8),M.panel,0,.8,1,n),q(Wt(.12,.12,2.6),M.metal,0,3.2,0,n).rotation.z=Math.PI/2;let e=new wt;e.position.set(0,1.75,1.95),n.add(e);for(let i=0;i<4;i++){let s=q(Jt(.15,.7,.05),M.dark,0,0,0,e);s.rotation.z=i*Math.PI/2,s.position.set(Math.sin(i*Math.PI/2)*.3,Math.cos(i*Math.PI/2)*.3,0),s.rotation.z=-i*Math.PI/2}t.fan=e,t.light=Dt(6741503,1.2,n,0,1.75,2)},habitat(n,t){Mn(n,6.2),q(Wt(6,6,1.2,28),M.panel,0,.6,0,n);let e=q(new Bt(5.8,28,12,0,Math.PI*2,0,Math.PI/2),M.white,0,1.2,0,n);e.scale.y=.85;let i=q(new te(5.72,5.84,.7,28,1,!0),M.window,0,2,0,n);q(Wt(.1,.1,3),M.metal,0,7.4,0,n),t.tip=Dt(16728128,1.2,n,0,8.9,0),q(Jt(2.2,2.6,2.8),M.white,0,1.3,6.4,n),q(Jt(1.2,2,.1),M.dark,0,1.1,7.82,n),q(Jt(2.3,.3,2.9),M.orange,0,2.7,6.4,n),t.windows=[i]},extractor(n,t){Mn(n,2.6,!0),q(Jt(4,.6,4),M.panel,0,.3,0,n);for(let[i,s]of[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4]])q(Wt(.12,.15,6),M.metal,i*.7,3.3,s*.7,n).rotation.set(s*.08,0,-i*.08);q(Jt(1.6,.4,1.6),M.orange,0,6.2,0,n);let e=q(Wt(.3,.3,4.5),M.metal,0,3,0,n);q(Wt(.9,.9,1.6),M.white,1.7,1.4,1.2,n),t.drill=e,t.light=Dt(10476799,1.2,n,1.7,2.5,1.2)},greenhouse(n,t){Mn(n,5,!0),q(Jt(10,.5,6),M.panel,0,.25,0,n);let e=q(new te(3,3,10,20,1,!1,0,Math.PI),M.glass,0,.5,0,n);e.rotation.set(0,0,Math.PI/2),e.castShadow=!1;for(let i=0;i<5;i++)q(new Zt(3,.08,6,20,Math.PI),M.white,-4.5+i*2.25,.5,0,n).rotation.y=Math.PI/2;for(let i=0;i<14;i++){let s=-4.2+i%7*1.4,r=i<7?-1.2:1.2,o=q(new ze(.45,1.2+i%3*.3,6),M.plant,s,1.2,r,n);o.castShadow=!1}q(Jt(9.6,.3,.5),M.dark,0,.7,-1.2,n),q(Jt(9.6,.3,.5),M.dark,0,.7,1.2,n),t.light=Dt(16737996,4,n,0,2.5,0)},fabricator(n,t){Mn(n,4,!0),q(Jt(7,3.6,5),M.panel,0,1.8,0,n),q(Jt(7.1,.4,5.1),M.orange,0,3.4,0,n),q(Jt(3,2.6,.1),M.dark,0,1.3,2.52,n);let e=new wt;e.position.set(2.2,3.6,0),n.add(e),q(Wt(.35,.45,.6),M.metal,0,.3,0,e);let i=q(Jt(.3,2.2,.3),M.orange,0,1.4,0,e),s=q(Jt(.25,1.6,.25),M.metal,0,2.4,.6,e);s.rotation.x=.9,t.arm=e,t.spark=Dt(16764006,1.2,n,2.2,5.7,1.2),q(Jt(1.2,1.2,1.2),M.dark,-2.4,.6,3.2,n),q(Jt(1,1,1),M.dark,-1.1,.5,3.1,n)},turret(n,t){Mn(n,1.8),q(Wt(1.4,1.8,1.2,12),M.metal,0,.6,0,n),q(Wt(.5,.7,1.2,10),M.dark,0,1.8,0,n);let e=new wt;e.position.y=2.7,n.add(e),q(Jt(1.6,1,1.8),M.white,0,0,0,e),q(Jt(1.65,.2,1.85),M.orange,0,.35,0,e),q(Wt(.12,.12,2.2,8),M.dark,-.4,0,-1.6,e).rotation.x=Math.PI/2,q(Wt(.12,.12,2.2,8),M.dark,.4,0,-1.6,e).rotation.x=Math.PI/2,t.eye=Dt(3401471,.9,e,0,.1,-.95),t.head=e},reactor(n,t){Mn(n,5.2),q(Wt(5,5.2,1.4,24),M.panel,0,.7,0,n);let e=q(new Bt(2,20,14),M.cyan,0,4.2,0,n);e.castShadow=!1;let i=q(new Zt(3.2,.35,10,32),M.white,0,4.2,0,n),s=q(new Zt(3.2,.35,10,32),M.white,0,4.2,0,n);s.rotation.x=Math.PI/2;for(let r=0;r<4;r++){let o=r*Math.PI/2;q(Jt(.6,3,.6),M.metal,Math.cos(o)*3.6,2.2,Math.sin(o)*3.6,n)}t.core=e,t.r1=i,t.r2=s,t.light=Dt(3401471,9,n,0,4.2,0)},beacon(n,t){let e=q(Wt(7,7.3,.6,8),M.found,0,0,0,n);q(Wt(7.3,7.6,4,8),M.found,0,-2.3,0,n).castShadow=!1,q(new gn(4.2,4.8,32),M.orange,0,.32,0,n).rotation.x=-Math.PI/2,q(new gn(1.5,2,4),M.white,0,.32,0,n).rotation.x=-Math.PI/2,t.lights=[];for(let i=0;i<8;i++){let s=i*Math.PI/4+Math.PI/8;t.lights.push(Dt(16755251,1.2,n,Math.cos(s)*6.6,.5,Math.sin(s)*6.6))}q(Wt(.18,.3,9,8),M.metal,8.6,4.2,0,n),q(Jt(1.6,.1,1.2),M.white,8.6,8.7,0,n).rotation.z=.4,t.tip=Dt(16724016,2,n,8.6,9.2,0),e.castShadow=!1},lamp(n,t){q(Wt(.4,.5,.4,8),M.found,0,0,0,n),q(Wt(.08,.1,4.2,6),M.metal,0,2.1,0,n),q(Jt(.6,.2,.6),M.dark,0,4.3,0,n);let e=q(new Bt(.2,8,6),M.lamp,0,4.15,0,n);e.castShadow=!1,t.glow=Dt(16767392,3,n,0,4.1,0)},terraformer(n,t){Mn(n,7),q(Wt(7,7.5,2,6),M.panel,0,1,0,n),q(Wt(2.5,4.5,26,6),M.white,0,15,0,n);for(let i=0;i<3;i++)q(Wt(4.6-i*.7,4.6-i*.7,.8,6),M.orange,0,6+i*8,0,n);t.rings=[];for(let i=0;i<3;i++){let s=q(new Zt(6-i*1.2,.25,8,40),M.cyan,0,10+i*8,0,n);s.castShadow=!1,t.rings.push(s)}for(let i=0;i<6;i++){let s=i*Math.PI/3,r=q(Jt(1.2,10,1.2),M.metal,Math.cos(s)*6,5,Math.sin(s)*6,n);r.rotation.y=-s}let e=q(new te(.6,1.4,400,12,1,!0),new ne({color:6743807,transparent:!0,opacity:0,blending:Me,depthWrite:!1,side:Qe}),0,228,0,n);e.castShadow=!1,e.receiveShadow=!1,t.beam=e,t.top=Dt(6743807,10,n,0,28,0)}};function hm(){let n=new wt;q(Wt(1.2,2.4,5,12),M.white,0,3.5,0,n),q(new ze(1.2,2.2,12),M.white,0,7.1,0,n),q(Wt(2.45,2.45,.4,12),M.orange,0,2.4,0,n);for(let i=0;i<3;i++){let s=i*Math.PI*2/3,r=q(Jt(.2,2.4,1.6),M.panel,Math.cos(s)*2.3,1.6,Math.sin(s)*2.3,n);r.rotation.y=-s}let t=new at(new ze(1.1,5,12,1,!0),M.flame);t.rotation.x=Math.PI,t.position.y=-1.6,n.add(t);let e=Dt(16752704,9,n,0,-.5,0);return{group:n,flame:t,flameGlow:e}}var om=[16751162,3850495,8257418,16740277,16769354].map(n=>new ht({color:1118481,emissive:n,emissiveIntensity:.6,roughness:.1,metalness:.6})),am=[15525596,14278116,15259332].map(n=>new ht({color:n,roughness:.7}));function um(n){let t=new wt,e=am[n%am.length],i=om[n%om.length],s=(g,y,x,m,_,E=t)=>{let v=new at(g,y);return v.position.set(x,m,_),v.castShadow=!0,E.add(v),v},r=new ns([[0,0],[.2,0],[.24,.12],[.27,.42],[.25,.55],[.12,.62],[0,.62]].map(([g,y])=>new nt(g,y)),12),o=s(r,e,0,.72,0);o.scale.z=.8,s(new Zt(.2,.04,6,16),M.orange,0,.77,0).rotation.x=Math.PI/2,s(new te(.16,.18,.06,12),M.dark,0,1.36,0);let a=s(new Bt(.21,16,12),e,0,1.58,0),l=s(new Bt(.19,16,10,Math.PI*.12,Math.PI*.76,Math.PI*.28,Math.PI*.4),i,0,1.58,.035);s(new Gt(.02,.12,.02),M.metal,.12,1.82,-.05).rotation.z=-.3,s(new Gt(.36,.42,.18),M.panel,0,1.08,-.24),s(new Gt(.3,.06,.19),M.orange,0,1.25,-.24),Dt(9306032,.25,t,.12,.96,-.34);let c=(g,y,x,m,_)=>{let E=new wt;E.position.set(g,y,0),t.add(E);let v=s(new rc(m,x,4,8),e,0,-x/2-m,0,E);return s(new te(m*1.15,m*1.15,.05,8),_?M.orange:M.dark,0,-x*.45,0,E),_?s(new Gt(m*2.4,.1,m*3.4),M.dark,0,-x-m*1.6,.04,E):s(new Bt(m*1.2,8,6),M.dark,0,-x-m*1.6,0,E),E},h=c(-.11,.74,.5,.075,!0),u=c(.11,.74,.5,.075,!0),d=c(-.33,1.27,.42,.06,!1),f=c(.33,1.27,.42,.06,!1);return d.rotation.z=-.12,f.rotation.z=.12,{group:t,legL:h,legR:u,armL:d,armR:f,body:o,head:a,visor:l}}var lw=new ht({color:ut.enemy[0],roughness:.3,metalness:.6,flatShading:!0,emissive:1049856}),JE=new ht({color:ut.enemy[1],emissive:ut.enemy[2],emissiveIntensity:.8,roughness:.2,flatShading:!0}),KE=new ne({color:16764992});function jE(n,t,e){let i=document.createElement("canvas");i.width=128,i.height=256;let s=i.getContext("2d");s.fillStyle="#000",s.fillRect(0,0,128,256);let r=e,o=()=>(r=(r*9301+49297)%233280,r/233280),a=128/n,l=256/t;for(let h=0;h<n;h++)for(let u=0;u<t;u++)o()<.65&&(s.fillStyle=o()<.8?"#ffd9a0":"#a0d8ff",s.fillRect(h*a+a*.2,u*l+l*.25,a*.6,l*.5));let c=new on(i);return c.colorSpace=_e,c}var Vd=[];function lm(n){let t=new ht({color:14210252,roughness:.5,metalness:.2,emissive:16777215,emissiveMap:jE(6,14,n),emissiveIntensity:.2});return Vd.push(t),t}var cm=[lm(7),lm(31)],La;function QE(){if(La)return La;let n=document.createElement("canvas");n.width=256,n.height=128;let t=n.getContext("2d");t.fillStyle="#0a3a6a",t.fillRect(0,0,256,128),t.strokeStyle="rgba(127,230,255,.35)",t.lineWidth=1;for(let i=0;i<256;i+=16)t.beginPath(),t.moveTo(i,0),t.lineTo(i,128),t.stroke();for(let i=0;i<128;i+=16)t.beginPath(),t.moveTo(0,i),t.lineTo(256,i),t.stroke();t.fillStyle="#7fffc8";let e=[[40,40,22,16],[52,62,10,20],[70,86,12,18],[118,36,16,12],[128,56,14,26],[150,34,40,18],[176,52,22,14],[206,88,16,10],[96,24,12,8],[190,22,20,8]];for(let[i,s,r,o]of e)t.beginPath(),t.ellipse(i,s,r,o,.3,0,Math.PI*2),t.fill();return t.fillStyle="#ffffff",t.fillRect(0,0,256,6),t.fillRect(0,122,256,6),La=new on(n),La.colorSpace=_e,La}Object.assign(rs,{plaza(n,t){Mn(n,7.2),q(Wt(7.2,7.4,.4,8),M.panel,0,.2,0,n),q(new gn(5.4,5.8,48),M.orange,0,.42,0,n).rotation.x=-Math.PI/2,q(Wt(1.6,2,1.1,16),M.white,0,.95,0,n),q(Wt(1.65,1.65,.15,16),M.cyan,0,1.52,0,n);for(let r=0;r<6;r++){let o=r*Math.PI/3+Math.PI/6,a=q(Jt(2.4,.4,.7),M.panel,Math.cos(o)*5.2,.6,Math.sin(o)*5.2,n);a.rotation.y=-o+Math.PI/2,q(Jt(.12,3.2,.12),M.metal,Math.cos(o+.5)*6.6,1.8,Math.sin(o+.5)*6.6,n),Dt(16767392,1.1,n,Math.cos(o+.5)*6.6,3.5,Math.sin(o+.5)*6.6)}let e=new at(new Bt(1.5,32,20),new ne({map:QE(),transparent:!0,opacity:.75,blending:Me,depthWrite:!1}));e.position.y=4,n.add(e);let i=Dt(6736127,5,n,0,4,0),s=new at(new te(1.2,1.6,2.4,20,1,!0),new ne({color:8382207,transparent:!0,opacity:.12,blending:Me,depthWrite:!1,side:Qe}));s.position.y=2.7,n.add(s),t.earth=e,t.halo=i},drones(n,t){Mn(n,3.8,!0),q(Jt(7.4,.5,7.4),M.panel,0,.25,0,n);for(let[s,r]of[[-1.9,-1.9],[1.9,-1.9],[-1.9,1.9],[1.9,1.9]])q(Wt(1.1,1.1,.1,16),M.dark,s,.55,r,n),q(new gn(.75,.9,20),M.orange,s,.62,r,n).rotation.x=-Math.PI/2;q(Jt(1.2,4,1.2),M.white,3,2.2,3,n),q(Jt(1.25,.3,1.25),M.orange,3,3.6,3,n);let e=new wt;e.position.set(3,4.6,3),n.add(e);let i=q(new Bt(.9,12,6,0,Math.PI*2,0,Math.PI/3),M.white,0,0,0,e);i.rotation.x=Math.PI*.6,q(Wt(.05,.05,.8,4),M.metal,0,.1,.2,e).rotation.x=1.1,t.dish=e,t.light=Dt(8382207,1.4,n,3,5.4,3)},apartment(n,t){Mn(n,4.4,!0),q(Jt(8,1,8),M.panel,0,.5,0,n),q(Jt(5,18,5),cm[0],-1.2,10,-1.2,n),q(Jt(4,12,4),cm[1],2,7,2,n),q(Jt(5.2,.5,5.2),M.orange,-1.2,19.2,-1.2,n),q(Jt(4.2,.5,4.2),M.orange,2,13.2,2,n),q(Wt(.1,.1,4,6),M.metal,-1.2,21.4,-1.2,n),t.tip=Dt(16728128,1.6,n,-1.2,23.5,-1.2),q(new Bt(1.6,16,8,0,Math.PI*2,0,Math.PI/2),M.glass,2,13.4,2,n).castShadow=!1},vfarm(n,t){Mn(n,4),q(Wt(3.8,4,1,16),M.panel,0,.5,0,n);let e=q(Wt(3.2,3.2,14,16),M.glass,0,8,0,n);e.castShadow=!1;for(let i=0;i<6;i++){q(Wt(3,3,.25,16),M.white,0,2+i*2.3,0,n);for(let s=0;s<7;s++){let r=s/7*Math.PI*2+i,o=q(new ze(.4,.9,5),M.plant,Math.cos(r)*2.2,2.6+i*2.3,Math.sin(r)*2.2,n);o.castShadow=!1}}q(new Bt(3.2,16,8,0,Math.PI*2,0,Math.PI/2),M.glass,0,15,0,n).castShadow=!1,t.light=Dt(16737996,9,n,0,8,0)},lifehub(n,t){Mn(n,5.5),q(Wt(5.5,5.8,1.2,20),M.panel,0,.6,0,n);let e=q(new Bt(4.5,20,12,0,Math.PI*2,0,Math.PI/2),M.white,0,1.2,0,n);q(new Zt(4.6,.3,8,32),M.orange,0,1.6,0,n).rotation.x=Math.PI/2;for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4;q(Wt(.9,.9,5,12),M.white,Math.cos(r)*5.2,2.5,Math.sin(r)*5.2,n),q(Wt(.95,.95,.4,12),M.cyan,Math.cos(r)*5.2,4.2,Math.sin(r)*5.2,n)}let i=new wt;i.position.y=6,n.add(i);for(let s=0;s<3;s++){let r=q(Jt(4,.1,.6),M.dark,0,0,0,i);r.rotation.y=s*Math.PI/3}t.fan=i,t.light=Dt(6741503,5,n,0,6,0)},launch(n,t){Mn(n,9,!0),q(Jt(18,1.2,18),M.found,0,.6,0,n),q(new gn(5,6,32),M.orange,0,1.25,0,n).rotation.x=-Math.PI/2;for(let[s,r]of[[6,-1.5],[6,1.5],[9,-1.5],[9,1.5]])q(Jt(.4,34,.4),M.metal,s,18,r,n);for(let s=0;s<8;s++)q(Jt(3.4,.25,3.4),M.metal,7.5,4+s*4,0,n);q(Jt(4,.5,.8),M.orange,4.2,26,0,n);let e=new wt;e.position.y=1.2,n.add(e),q(Wt(2.4,2.8,24,20),M.white,0,13,0,e),q(new ze(2.4,7,20),M.white,0,28.5,0,e),q(Wt(2.45,2.45,1.2,20),M.orange,0,20,0,e),q(Wt(2.45,2.45,.6,20),M.dark,0,8,0,e);for(let s=0;s<4;s++){let r=s*Math.PI/2,o=q(Jt(.4,6,3),M.panel,Math.cos(r)*2.8,3.5,Math.sin(r)*2.8,e);o.rotation.y=-r}for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4;q(Wt(.8,1.2,2,10),M.dark,Math.cos(r)*1.2,.6,Math.sin(r)*1.2,e)}let i=new at(new ze(3,16,16,1,!0),M.flame);i.rotation.x=Math.PI,i.position.y=-8,i.visible=!1,e.add(i),t.ship=e,t.flame=i,t.tip=Dt(16777215,3,e,0,32.5,0)},monument(n,t){Mn(n,6),q(Wt(6,6.5,1.5,8),M.panel,0,.75,0,n),q(Wt(4.5,5,1,8),M.white,0,2,0,n);let e=q(new te(.6,1.8,30,4),M.white,0,17,0,n);e.rotation.y=Math.PI/4,t.rings=[];let i=[new ht({color:3346688,emissive:16742954,emissiveIntensity:2}),new ht({color:8755,emissive:6743807,emissiveIntensity:2}),new ht({color:1127168,emissive:10551104,emissiveIntensity:2})];for(let s=0;s<3;s++){let r=q(new Zt(4-s*.6,.18,8,40),i[s],0,14+s*5,0,n);r.castShadow=!1,t.rings.push(r)}t.top=Dt(16777215,8,n,0,33,0)}});function dm(){let n=new wt,t=q(new Bt(.42,14,8),M.white,0,0,0,n);t.scale.y=.55,q(Wt(.44,.44,.08,14),M.orange,0,0,0,n);let e=[];for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4,o=Math.cos(r)*.7,a=Math.sin(r)*.7;q(Jt(.6,.05,.08),M.dark,o*.55,0,a*.55,n).rotation.y=-r;let l=q(Wt(.28,.28,.02,10),new ne({color:2236962,transparent:!0,opacity:.45}),o,.08,a,n);e.push(l)}let i=Dt(8382207,.9,n,0,-.2,0);return{group:n,rotors:e,eye:i}}var Gd={crystal:JE,eye:KE};var En=1400,Kt=En/2,Vs=400,Xd=En/Vs,Ii=Vs+1,Da=vc(ut.seed),bc=vc(ut.seed*7+3),fm=vc(ut.seed+42),os=[],Li,Bs,wc,_r,Ec;function t2(){let n=Vn(ut.seed);for(os.push({x:150,z:-120,r:70,depth:16,rim:6});os.length<ut.craters;){let t=(n()-.5)*(En-260),e=(n()-.5)*(En-260);if(Math.hypot(t,e)<130)continue;let i=10+Math.pow(n(),2.2)*85;os.push({x:t,z:e,r:i,depth:i*(.18+n()*.12),rim:i*(.05+n()*.06)})}}var e2=0;function pm(n,t){let e=Od(Da,n*.0016,t*.0016,5)*ut.hills,i=1-Math.abs(bc(n*.0042,t*.0042));e+=i*i*i*ut.ridges,e+=Od(fm,n*.025,t*.025,3)*ut.detail;for(let s of os){let r=n-s.x,o=t-s.z,a=r*r+o*o;if(a>s.r*s.r*4)continue;let l=Math.sqrt(a)/s.r;l<1&&(e-=s.depth*(1-l*l)),e+=s.rim*Math.exp(-(((l-1)/.28)**2))}return e}var mm=0;function n2(n,t){let e=pm(n,t)-mm,i=Math.hypot(n,t);e=Ae(e2+fm(n*.02,t*.02)*.6,e,Rn(45,150,i));let s=Math.max(Math.abs(n),Math.abs(t)),r=Kt-200;if(s>r){let o=(s-r)/200;e+=o*o*160*(.65+.35*Da(n*.01,t*.01))}return e}function yt(n,t){let e=gi((n+Kt)/Xd,0,Vs-.001),i=gi((t+Kt)/Xd,0,Vs-.001),s=Math.floor(e),r=Math.floor(i),o=e-s,a=i-r,l=Li[r*Ii+s],c=Li[r*Ii+s+1],h=Li[(r+1)*Ii+s],u=Li[(r+1)*Ii+s+1];return o+a<1?l+(c-l)*o+(h-l)*a:u+(h-u)*(1-o)+(c-u)*(1-a)}function Mr(n,t,e=2){let i=yt(n,t);return Math.max(Math.abs(yt(n+e,t)-i),Math.abs(yt(n-e,t)-i),Math.abs(yt(n,t+e)-i),Math.abs(yt(n,t-e)-i))/e}function Sc(n,t,e=60){let i=0;for(let s=.2;s<=e;s+=.25){let r=n.x+t.x*s,o=n.y+t.y*s,a=n.z+t.z*s;if(o<yt(r,a)){let l=i,c=s;for(let h=0;h<8;h++){let u=(l+c)/2;n.y+t.y*u<yt(n.x+t.x*u,n.z+t.z*u)?c=u:l=u}return{dist:c,point:new T(n.x+t.x*c,n.y+t.y*c,n.z+t.z*c)}}i=s}return null}function gm(n){t2(),mm=pm(0,0),Li=new Float32Array(Ii*Ii),_r=new zn(En,En,Vs,Vs),_r.rotateX(-Math.PI/2);let t=_r.attributes.position;for(let s=0;s<t.count;s++){let r=n2(t.getX(s),t.getZ(s));t.setY(s,r),Li[s]=r}Bs=new Float32Array(t.count*3);let e=new dt;for(let s=0;s<t.count;s++){let r=t.getX(s),o=t.getZ(s),a=Li[s],l=s%Ii,c=s/Ii|0,h=Li[c*Ii+Math.min(l+1,Vs)]-a,u=Li[Math.min(c+1,Vs)*Ii+l]-a,d=gi(Math.hypot(h,u)/Xd*1.4,0,1),f=Da(r*.012,o*.012)*.5+.5,g=bc(r*.08,o*.08)*.5+.5,y=ut.ground.a,x=ut.ground.b,m=ut.ground.steep,_=ut.ground.low,E=Ae(y[0],x[0],f),v=Ae(y[1],x[1],f),I=Ae(y[2],x[2],f);E*=.9+g*.18,v*=.9+g*.16,I*=.9+g*.14,E=Ae(E,m[0],d),v=Ae(v,m[1],d),I=Ae(I,m[2],d);let R=Rn(-4,-16,a);if(E=Ae(E,_[0],R*.6),v=Ae(v,_[1],R*.6),I=Ae(I,_[2],R*.6),ut.id==="europa"){let P=Math.abs(bc(r*.006,o*.006));if(P<.05){let L=1-P/.05;E=Ae(E,.55,L*.7),v=Ae(v,.32,L*.7),I=Ae(I,.24,L*.7)}}e.setRGB(E,v,I,_e),Bs[s*3]=e.r,Bs[s*3+1]=e.g,Bs[s*3+2]=e.b}wc=new Ye(Bs.slice(),3),_r.setAttribute("color",wc),_r.computeVertexNormals();let i=new ht({vertexColors:!0,roughness:.93,metalness:0});return i.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},Ec=new at(_r,i),Ec.receiveShadow=!0,n.add(Ec),i2(n),Ec}function i2(n){let t=Vn(99),e=new Jn(1,0),i=e.attributes.position;for(let f=0;f<i.count;f++){let g=.75+t()*.5;i.setXYZ(f,i.getX(f)*g,i.getY(f)*g*.8,i.getZ(f)*g)}e.computeVertexNormals();let s=2600,r=new Us(e,new ht({color:ut.rock,roughness:ut.id==="europa"?.35:.92,flatShading:!0,map:Pi.map,bumpMap:Pi.bumpMap,bumpScale:3}),s);r.castShadow=!0,r.receiveShadow=!0;let o=new ge,a=new rn,l=new T,c=new T,h=new mn,u=new dt,d=0;for(;d<s;){let f=(t()-.5)*(En-120),g=(t()-.5)*(En-120);if(Math.hypot(f,g)<22||Da(f*.01,g*.01)<-.1&&t()<.7)continue;let m=t()<.06?1.8+t()*2.5:.2+Math.pow(t(),2)*1.2;l.set(m*(.8+t()*.6),m*(.6+t()*.5),m*(.8+t()*.6)),h.set(t()*.5,t()*Math.PI*2,t()*.5),a.setFromEuler(h),c.set(f,yt(f,g)+l.y*.25,g),o.compose(c,a,l),r.setMatrixAt(d,o),u.setHSL(ut.rockHSL[0]+t()*.02,ut.rockHSL[1]+t()*.2,ut.rockHSL[2]+t()*.14),r.setColorAt(d,u),m>1&&p.colliders.add({x:f,z:g,r:Math.max(l.x,l.z)*.85,kind:"rock"}),d++}n.add(r),ut.id==="kepler"&&o2(n,t)}var s2=new dt().setRGB(.3,.46,.2,_e),r2=new dt().setRGB(.46,.5,.26,_e),Wd=new dt().setRGB(.2,.38,.52,_e);function $d(n,t){let e=_r.attributes.position,i=wc.array,s=60+t*520;for(let r=0;r<e.count;r++){let o=e.getX(r),a=e.getZ(r),l=Li[r],c=0;for(let f of n){let g=Math.hypot(o-f.x,a-f.z);c=Math.max(c,Rn(s,s*.55,g))}let h=Bs[r*3],u=Bs[r*3+1],d=Bs[r*3+2];if(c>0){let f=bc(o*.03,a*.03)*.5+.5,g=c*gi(f*1.4-.1,0,1)*gi(t*1.5,0,1),y=f>.6?s2:r2;if(h=Ae(h,y.r,g),u=Ae(u,y.g,g),d=Ae(d,y.b,g),l<-9&&t>.5){let x=c*Rn(-9,-13,l)*Rn(.5,1,t);h=Ae(h,Wd.r,x),u=Ae(u,Wd.g,x),d=Ae(d,Wd.b,x)}}i[r*3]=h,i[r*3+1]=u,i[r*3+2]=d}wc.needsUpdate=!0}function xm(n=350){let t=document.createElement("canvas");t.width=t.height=n;let e=t.getContext("2d"),i=e.createImageData(n,n);for(let s=0;s<n;s++)for(let r=0;r<n;r++){let o=(r/n-.5)*En,a=(s/n-.5)*En,l=yt(o,a),c=yt(o+4,a+4)-l,h=gi(.55+l*.006-c*.08,.15,1),u=(s*n+r)*4,d=ut.ground.b;i.data[u]=255*d[0]*h,i.data[u+1]=255*d[1]*h,i.data[u+2]=255*d[2]*h,i.data[u+3]=255}return e.putImageData(i,0,0),t}var qd=new ht({color:8010400,emissive:4259776,emissiveIntensity:.1,roughness:.6,flatShading:!0});function o2(n,t){let e=new te(.25,.45,1,6);e.translate(0,.5,0);let i=new Bt(1,8,5,0,Math.PI*2,0,Math.PI/2),s=900,r=new Us(e,new ht({color:14209208,roughness:.8,flatShading:!0}),s),o=new Us(i,qd,s);r.castShadow=o.castShadow=!0;let a=new ge,l=new rn,c=new T,h=new T,u=new dt,d=0;for(;d<s;){let f=(t()-.5)*(En-300),g=(t()-.5)*(En-300);if(Math.hypot(f,g)<50||Da(f*.008,g*.008)<.05||Mr(f,g,2)>.5)continue;let y=3+t()*9,x=1.5+t()*3,m=yt(f,g);c.set(1+y*.05,y,1+y*.05),h.set(f,m-.2,g),l.identity(),a.compose(h,l,c),r.setMatrixAt(d,a),c.set(x,x*.5,x),h.set(f,m+y-.3,g),a.compose(h,l,c),o.setMatrixAt(d,a),u.setHSL(.72+t()*.2,.6,.4+t()*.2),o.setColorAt(d,u),p.colliders.add({x:f,z:g,r:.6,kind:"flora"}),d++}n.add(r,o)}var Tc=6e3,Di=60,Gs,Ua,Zd,Yd=new T(1e9,0,0),ym=new ge,vm=new rn,_m=new T,Mm=new T,Em=new mn;function bm(){let n=new Jn(.12,0),t=new ht({color:16777215,roughness:.95,flatShading:!0,map:Pi.map});Gs=new Us(n,t,Tc),Gs.receiveShadow=!0,Gs.frustumCulled=!1;let e=Vn(31);Ua=new Float32Array(Tc*2),Zd=[];let i=new dt;for(let s=0;s<Tc;s++){Ua[s*2]=e()*Di*2,Ua[s*2+1]=e()*Di*2;let r=Math.pow(e(),3);Zd.push([.4+r*3.2,.25+e()*.6,.4+r*3,e()*6.28,e()*.6]),i.setHSL(ut.rockHSL[0]+e()*.03,ut.rockHSL[1]*(.5+e()*.5),Math.min(.75,ut.rockHSL[2]*(1.2+e()*.9))),Gs.setColorAt(s,i)}p.scene.add(Gs)}function wm(){if(!Gs)return;let n=p.player.pos;if(Math.abs(n.x-Yd.x)<3&&Math.abs(n.z-Yd.z)<3)return;Yd.copy(n);let t=n.x-Di,e=n.z-Di;for(let i=0;i<Tc;i++){let s=t+((Ua[i*2]-t)%(Di*2)+Di*2)%(Di*2),r=e+((Ua[i*2+1]-e)%(Di*2)+Di*2)%(Di*2),o=Zd[i];_m.set(o[0],o[0]*o[1],o[2]),Em.set(o[4],o[3],0),vm.setFromEuler(Em),Mm.set(s,yt(s,r)+.02,r),ym.compose(Mm,vm,_m),Gs.setMatrixAt(i,ym)}Gs.instanceMatrix.needsUpdate=!0}var a2=540,Ha,Ao,Kn,Ro,Jd,ka,Kd,$s,za=(n,t,e)=>new dt().setRGB(n,t,e,_e),Ws=ut.sky,Xs=n=>za(n[0],n[1],n[2]),Ui={dayTop:Xs(Ws.dayTop),dayHor:Xs(Ws.dayHor),setTop:Xs(Ws.setTop),setHor:Xs(Ws.setHor),nightTop:Xs(Ws.nightTop),nightHor:Xs(Ws.nightHor),earthTop:za(.22,.44,.82),earthHor:za(.68,.8,.92),stormHor:Xs(Ws.storm),halo:Xs(Ws.halo)},Ni={},jd,Sm,Rm,Ac=null,Tm=0,Qd={mars:[.35,[.2,.9,.7],[.3,.5,1]],europa:[.6,[.4,.6,1],[.8,.4,1]],kepler:[1,[.3,1,.5],[.9,.3,.9]]}[ut.id],as;function l2(n){let t=new te(1700,1700,900,160,1,!0,-1.2,2.6);as=new at(t,new tn({uniforms:{uT:{value:0},uI:{value:0},uC1:{value:new dt(...Qd[1])},uC2:{value:new dt(...Qd[2])}},vertexShader:`uniform float uT; varying vec2 vUv;
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
      }`,transparent:!0,blending:Me,depthWrite:!1,side:Qe,fog:!1})),as.position.y=700,as.rotation.y=2.2,as.frustumCulled=!1,as.renderOrder=-8,n.add(as)}var c2=za(.36,.42,.62),h2=za(.75,.65,.55),Na=new dt,Am=new dt,xi=new T;function Cm(n){$s=new tn({uniforms:{uTop:{value:new dt},uHor:{value:new dt},uSunDir:{value:new T(0,1,0)},uSunCol:{value:new dt(1,.95,.85)},uHalo:{value:new dt},uSunVis:{value:1}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`
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
      }`,side:_n,depthWrite:!1}),Ha=new at(new Bt(4e3,32,16),$s),Ha.frustumCulled=!1,Ha.renderOrder=-10,n.add(Ha),l2(n);let t=new Te,e=[],i=[];for(let o=0;o<2600;o++){let a=Math.random()*2-1,l=Math.random()*Math.PI*2,c=Math.sqrt(1-a*a);if(a<-.05)continue;e.push(c*Math.cos(l)*3500,a*3500,c*Math.sin(l)*3500);let h=.35+Math.random()*.45,u=Math.random();i.push(h*(u>.8?1:.85),h*.9,h*(u<.2?1:.95))}e.push(-1800,1500,-2400),i.push(.5,.75,1.4),t.setAttribute("position",new Yt(e,3)),t.setAttribute("color",new Yt(i,3)),Ao=new Yn(t,new Fn({size:3,map:Wn(),sizeAttenuation:!1,vertexColors:!0,transparent:!0,depthWrite:!1,fog:!1})),Ao.frustumCulled=!1,Ao.renderOrder=-9,n.add(Ao);let s=new ht({color:9076080,roughness:1,fog:!1,flatShading:!0});if(ka=new at(new On(60,1),s),ka.scale.set(1.3,.9,1),Kd=new at(new On(24,1),s),ut.extras==="moons"&&n.add(ka,Kd),ut.extras==="jupiter"){let o=document.createElement("canvas");o.width=512,o.height=256;let a=o.getContext("2d"),l=["#e8d8c0","#c89a70","#f0e6d4","#b07850","#e0c8a8","#9a6a48","#efe2cc","#c8a07a","#e6d6bc"];for(let f=0;f<256;f++)a.fillStyle=l[Math.floor(f/256*l.length*2+Math.sin(f*.3)*.6)%l.length],a.fillRect(0,f,512,1);a.globalAlpha=.25;for(let f=0;f<400;f++)a.fillStyle=l[f%l.length],a.fillRect(Math.random()*512,Math.random()*256,30+Math.random()*80,2);a.globalAlpha=1,a.fillStyle="#b8583a",a.beginPath(),a.ellipse(330,165,34,16,0,0,Math.PI*2),a.fill();let c=new on(o);c.colorSpace=_e;let h=new at(new Bt(900,48,32),new ne({map:c,fog:!1}));h.rotation.z=.06;let u=new at(new Bt(905,48,32,Math.PI*.55,Math.PI),new ne({color:0,transparent:!0,opacity:.55,fog:!1}));h.add(u);let d=new at(new On(30,2),new ne({color:15257712,fog:!1}));n.add(h,d),Ni={jup:h,io:d}}if(ut.extras==="twinsuns"){let o=new Ri(new ui({map:Wn(),color:16751200,transparent:!0,blending:Me,depthWrite:!1,fog:!1}));o.scale.set(500,500,1);let a=new at(new gn(700,1100,64),new ne({color:14207231,transparent:!0,opacity:.35,side:Qe,fog:!1,depthWrite:!1})),l=new at(new Bt(420,32,24),new ne({color:9075408,fog:!1}));l.add(a),a.rotation.x=1.2,n.add(o,l),Ni={s2:o,gas:l}}Kn=new Ci(16773341,3),Kn.castShadow=!0,Kn.shadow.mapSize.set(p.hiShadows?4096:2048,p.hiShadows?4096:2048);let r=Kn.shadow.camera;r.left=-70,r.right=70,r.top=70,r.bottom=-70,r.near=1,r.far=400,Kn.shadow.bias=-4e-4,Kn.shadow.normalBias=.6,n.add(Kn,Kn.target),Ro=new Hs(16765616,5909530,1),Jd=new cc(4213360,.3),n.add(Ro,Jd),n.fog=new Kl(14196848,.0016),jd=new Ai,Sm=new at(new Bt(400,32,16),$s),jd.add(Sm),Rm=new go(p.renderer)}function Fa(n,t){let e=p.time,i=e.t;e.t+=n/a2*(e.elevation<0?1.5:1),e.t>=1&&(e.t-=1),i<.25&&e.t>=.25&&(e.day++,e.dawn=!0);let s=(e.t-.25)*Math.PI*2;xi.set(Math.cos(s),Math.sin(s),.35).normalize();let r=xi.y;e.elevation=r,e.night=Rn(.05,-.18,r);let o=Rn(0,1,p.terraform),a=p.storm,l=Rn(-.05,.35,r),c=1-Math.abs(gi((r-.05)/.3,-1,1));Na.copy(Ui.dayTop).lerp(Ui.earthTop,o),Am.copy(Ui.dayHor).lerp(Ui.earthHor,o);let h=$s.uniforms.uTop.value,u=$s.uniforms.uHor.value;h.copy(Ui.nightTop).lerp(Ui.setTop,Rn(-.25,0,r)).lerp(Na,l),u.copy(Ui.nightHor).lerp(Ui.setHor,Rn(-.25,0,r)).lerp(Am,l),a>0&&(Na.copy(Ui.stormHor).multiplyScalar(.25+.75*(1-e.night)),h.lerp(Na,a*.85),u.lerp(Na,a)),$s.uniforms.uHalo.value.copy(Ui.halo).multiplyScalar(gi(c,0,1)*(1-o*.5)*(1-a)),$s.uniforms.uSunDir.value.copy(xi),$s.uniforms.uSunVis.value=Rn(-.08,.02,r)*(1-a*.85),Ha.position.copy(t),Ao.position.copy(t),as.position.set(t.x,t.y+700,t.z),as.material.uniforms.uT.value=performance.now()*.001,as.material.uniforms.uI.value=Qd[0]*e.night*(1-a)*(.75+.25*Math.sin(performance.now()*7e-5+e.day)),Ao.material.opacity=Math.max(e.night,ut.id==="europa"?.85:0)*(1-a);let d=p.time.t*Math.PI*6,f=-p.time.t*Math.PI*2+2;if(ka.position.set(t.x+Math.cos(d)*2600,t.y+Math.sin(d)*1700+300,t.z-1300),ka.lookAt(t),Kd.position.set(t.x+Math.cos(f)*2800,t.y+Math.sin(f)*2200,t.z+1600),Ni.jup){Ni.jup.position.set(t.x-1800,t.y+650,t.z-2600),Ni.jup.rotation.y+=4e-5;let x=p.time.t*Math.PI*8;Ni.io.position.set(t.x-1800+Math.cos(x)*1400,t.y+650+Math.sin(x)*300,t.z-2600+Math.sin(x)*1400)}Ni.s2&&(Ni.s2.position.copy(t).addScaledVector(new T(xi.x*.8-.3,xi.y*.9-.05,xi.z+.4).normalize(),3e3),Ni.s2.material.opacity=Rn(-.2,.05,r)*.9,Ni.gas.position.set(t.x+1600,t.y+1100,t.z+2400));let g=Rn(-.04,.25,r);Kn.intensity=3*g*(1-a*.6),Kn.color.setRGB(1,Ae(.7,.93,g),Ae(.55,.85,g)),Kn.position.copy(t).addScaledVector(xi,200),Kn.target.position.copy(t),Ro.intensity=Ae(.45,.8,l)*(1-a*.3),Ro.color.copy(u).lerp(h,.3).lerp(c2,e.night*.85),ut.id==="europa"&&Ro.color.lerp(h2,.6),Ro.groundColor.setRGB(Ae(.05,.38,l),Ae(.04,.18,l),Ae(.05,.1,l)),Jd.intensity=Ae(.8,.2,l),p.scene.fog.color.copy(u),p.scene.fog.density=Ae(Ae(.0016,.0032,e.night),.03,a)*(ut.id==="europa"?.55:1);let y=performance.now();if(y-Tm>4e3||!Ac){Tm=y;let x=Ac;Ac=Rm.fromScene(jd,.04,1,1e3),p.scene.environment=Ac.texture,p.scene.environmentIntensity=Ae(.85,.35,e.night),x&&x.dispose()}p.renderer.toneMappingExposure=Ae(1,1.4,e.night)}function tf(){let n=Math.floor(p.time.t*24.66),t=Math.floor((p.time.t*24.66-n)*60);return`${ut.name} \xB7 \u7B2C ${p.time.day} \u65E5 \xB7 ${String(n).padStart(2,"0")}:${String(t).padStart(2,"0")}`}var Co=[],u2=new mr(.22,0),Cc=class{constructor(t,e,i,s){this.max=e,this.n=0,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.base=new Float32Array(e*4),this.grav=new Float32Array(e),this.drag=new Float32Array(e);let r=new Te;this.pa=new Ye(this.pos,3),this.ca=new Ye(this.col,4),this.pa.setUsage(Dd),this.ca.setUsage(Dd),r.setAttribute("position",this.pa),r.setAttribute("color",this.ca),this.mat=new Fn({size:s,map:Wn(),vertexColors:!0,transparent:!0,depthWrite:!1,blending:i?Me:Ti,sizeAttenuation:!0}),this.points=new Yn(r,this.mat),this.points.frustumCulled=!1,t.add(this.points)}emit(t,e,i,s,r,o,a,l,c,h,u,d=0,f=0){let g=this.n<this.max?this.n++:Math.floor(Math.random()*this.max);this.pos[g*3]=t,this.pos[g*3+1]=e,this.pos[g*3+2]=i,this.vel[g*3]=s,this.vel[g*3+1]=r,this.vel[g*3+2]=o,this.base[g*4]=a,this.base[g*4+1]=l,this.base[g*4+2]=c,this.base[g*4+3]=h,this.life[g]=u,this.maxLife[g]=u,this.grav[g]=d,this.drag[g]=f}update(t){let e=this.n;for(let i=0;i<e;i++){if(this.life[i]-=t,this.life[i]<=0){if(e--,i!==e){for(let o=0;o<3;o++)this.pos[i*3+o]=this.pos[e*3+o],this.vel[i*3+o]=this.vel[e*3+o];for(let o=0;o<4;o++)this.base[i*4+o]=this.base[e*4+o];this.life[i]=this.life[e],this.maxLife[i]=this.maxLife[e],this.grav[i]=this.grav[e],this.drag[i]=this.drag[e],i--}continue}let s=1-this.drag[i]*t;this.vel[i*3]*=s,this.vel[i*3+2]*=s,this.vel[i*3+1]=this.vel[i*3+1]*s-this.grav[i]*t,this.pos[i*3]+=this.vel[i*3]*t,this.pos[i*3+1]+=this.vel[i*3+1]*t,this.pos[i*3+2]+=this.vel[i*3+2]*t;let r=this.life[i]/this.maxLife[i];this.col[i*4]=this.base[i*4],this.col[i*4+1]=this.base[i*4+1],this.col[i*4+2]=this.base[i*4+2],this.col[i*4+3]=this.base[i*4+3]*Math.min(1,r*2.5)}this.n=e,this.points.geometry.setDrawRange(0,e),this.pa.needsUpdate=!0,this.ca.needsUpdate=!0}},Er,Pc,br,Po;function Pm(n){Er=new Cc(n,3e3,!0,.35),Pc=new Cc(n,2500,!1,1.6);let t=new Te,e=new Float32Array(1500*3);for(let r=0;r<e.length;r++)e[r]=(Math.random()-.5)*80;t.setAttribute("position",new Ye(e,3)),br=new Yn(t,new Fn({size:.25,map:Wn(),color:16765088,transparent:!0,opacity:.5,depthWrite:!1})),br.frustumCulled=!1,n.add(br);let i=new Te,s=new Float32Array(3e3*3);for(let r=0;r<s.length;r++)s[r]=(Math.random()-.5)*70;i.setAttribute("position",new Ye(s,3)),Po=new Yn(i,new Fn({size:.18,map:Wn(),color:12574975,transparent:!0,opacity:0,depthWrite:!1})),Po.frustumCulled=!1,n.add(Po)}var vt={debris(n,t,e=8,i=7,s=1){for(let r=0;r<e;r++){if(Co.length>160){let h=Co.shift();p.scene.remove(h.m)}let o=new at(u2,t);o.castShadow=!0;let a=s*(.5+Math.random()*.9);o.scale.set(a,a*(1+Math.random()),a),o.position.copy(n),p.scene.add(o);let l=Math.random()*Math.PI*2,c=.4+Math.random()*.8;Co.push({m:o,v:new T(Math.cos(l)*i*(1-c*.5),i*c,Math.sin(l)*i*(1-c*.5)),w:new T(Math.random()*10,Math.random()*10,Math.random()*10),life:3+Math.random()*2,s:a})}},spark(n,t=[1,.6,.2],e=6,i=4,s=.5){for(let r=0;r<e;r++)Er.emit(n.x,n.y,n.z,(Math.random()-.5)*i,Math.random()*i,(Math.random()-.5)*i,t[0],t[1],t[2],1,s*(.5+Math.random()),6,1)},burst(n,t=[1,.5,.2],e=40,i=9){for(let s=0;s<e;s++){let r=Math.random()*2-1,o=Math.random()*6.283,a=Math.sqrt(1-r*r),l=i*(.4+Math.random()*.6);Er.emit(n.x,n.y,n.z,a*Math.cos(o)*l,r*l,a*Math.sin(o)*l,t[0],t[1],t[2],1,.4+Math.random()*.6,4,2)}},dustPuff(n,t=10,e=2,i=[.72,.45,.3]){for(let s=0;s<t;s++)Pc.emit(n.x+(Math.random()-.5)*e,n.y+Math.random()*.5,n.z+(Math.random()-.5)*e,(Math.random()-.5)*3,Math.random()*1.5,(Math.random()-.5)*3,i[0],i[1],i[2],.55,1.2+Math.random(),-.2,1.5)},ring(n,t,e=60,i=[.72,.45,.3]){for(let s=0;s<e;s++){let r=s/e*6.283,o=6+Math.random()*6;Pc.emit(n.x+Math.cos(r)*t,n.y+.4,n.z+Math.sin(r)*t,Math.cos(r)*o,.5+Math.random(),Math.sin(r)*o,i[0],i[1],i[2],.6,1.5+Math.random(),-.1,1.2)}},trail(n,t,e=1){Er.emit(n.x,n.y,n.z,(Math.random()-.5)*.4,(Math.random()-.5)*.4,(Math.random()-.5)*.4,t[0]*e,t[1]*e,t[2]*e,1,.18,0,0)},flame(n,t=1){Er.emit(n.x+(Math.random()-.5)*.6,n.y,n.z+(Math.random()-.5)*.6,(Math.random()-.5)*2,-6*t-Math.random()*6,(Math.random()-.5)*2,1,.55,.2,1,.35,0,0)},rise(n,t,e=6){Er.emit(n.x+(Math.random()-.5)*e,n.y,n.z+(Math.random()-.5)*e,0,6+Math.random()*6,0,t[0],t[1],t[2],1,2.5,-.5,0)}},Rc=0;function Oa(n,t){Er.update(n),Pc.update(n);for(let o=Co.length-1;o>=0;o--){let a=Co[o];a.life-=n,a.v.y-=9*n,a.m.position.addScaledVector(a.v,n),a.m.rotation.x+=a.w.x*n,a.m.rotation.y+=a.w.y*n,a.m.rotation.z+=a.w.z*n;let l=yt(a.m.position.x,a.m.position.z)+.1;a.m.position.y<l&&(a.m.position.y=l,a.v.y=Math.abs(a.v.y)*.35,a.v.x*=.6,a.v.z*=.6,a.w.multiplyScalar(.5)),a.life<1&&a.m.scale.setScalar(Math.max(.001,a.s*a.life)),a.life<=0&&(p.scene.remove(a.m),Co.splice(o,1))}let e=p.storm,i=br.geometry.attributes.position,s=i.array,r=1+e*26;for(let o=0;o<s.length;o+=3){s[o]+=r*n,s[o+1]+=Math.sin(o+performance.now()*5e-4)*n*.2-e*n*1.5;let a=40;s[o]-t.x>a&&(s[o]-=2*a),s[o]-t.x<-a&&(s[o]+=2*a),s[o+1]-t.y>a/2&&(s[o+1]-=a),s[o+1]-t.y<-a/2&&(s[o+1]+=a),s[o+2]-t.z>a&&(s[o+2]-=2*a),s[o+2]-t.z<-a&&(s[o+2]+=2*a)}if(i.needsUpdate=!0,br.material.size=.25+e*.3,br.material.opacity=.3+e*.25,br.material.color.setRGB(1,.8-p.time.night*.4,.62-p.time.night*.3),Rc+=((p.raining?1:0)-Rc)*n*.5,Po.material.opacity=Rc*.6,Rc>.01){let o=Po.geometry.attributes.position.array;for(let a=0;a<o.length;a+=3)o[a+1]-=22*n,o[a]+=2*n,o[a+1]<t.y-20&&(o[a+1]+=40),o[a]-t.x>35&&(o[a]-=70),o[a]-t.x<-35&&(o[a]+=70),o[a+2]-t.z>35&&(o[a+2]-=70),o[a+2]-t.z<-35&&(o[a+2]+=70);Po.geometry.attributes.position.needsUpdate=!0}}var Ic=null,ee,qs,wr,Ba,Va,Sr,Ga,Lc,et={enabled:!0,init(){if(ee){ee.resume();return}try{ee=new(window.AudioContext||window.webkitAudioContext)}catch{return}qs=ee.createGain(),qs.gain.value=.7,qs.connect(ee.destination),wr=ee.createGain(),wr.gain.value=.8,wr.connect(qs),Ba=ee.createGain(),Ba.gain.value=.22,Ba.connect(qs),Lc=ee.createBuffer(1,ee.sampleRate*2,ee.sampleRate);let n=Lc.getChannelData(0),t=0;for(let i=0;i<n.length;i++){let s=Math.random()*2-1;t=(t+.02*s)/1.02,n[i]=t*3.5}let e=ee.createBufferSource();e.buffer=Lc,e.loop=!0,Sr=ee.createBiquadFilter(),Sr.type="bandpass",Sr.frequency.value=400,Sr.Q.value=.6,Va=ee.createGain(),Va.gain.value=.15,e.connect(Sr),Sr.connect(Va),Va.connect(qs),e.start(),this.musicLoop()},setVolume(n){qs&&(qs.gain.value=n)},update(n,t){if(!ee)return;let e=ee.currentTime;Va.gain.setTargetAtTime(.1+n*.6+t*.04,e,.5),Sr.frequency.setTargetAtTime(300+n*500+Math.sin(e*.3)*120,e,.8)},tone(n,t,e="sine",i=.3,s=0,r=0,o){if(!ee)return;let a=ee.currentTime+r,l=ee.createOscillator(),c=ee.createGain();l.type=e,l.frequency.setValueAtTime(n,a),s&&l.frequency.exponentialRampToValueAtTime(Math.max(20,n*s),a+t),c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(i,a+.01),c.gain.exponentialRampToValueAtTime(1e-4,a+t),l.connect(c),c.connect(o||wr),l.start(a),l.stop(a+t+.05)},noise(n,t=1e3,e=.3,i="lowpass",s=0,r=1){if(!ee)return;let o=ee.currentTime+s,a=ee.createBufferSource();a.buffer=Lc;let l=ee.createBiquadFilter();l.type=i,l.frequency.value=t,l.Q.value=r;let c=ee.createGain();c.gain.setValueAtTime(e,o),c.gain.exponentialRampToValueAtTime(1e-4,o+n),a.connect(l),l.connect(c),c.connect(wr),a.start(o,Math.random()),a.stop(o+n+.05)},play(n){if(ee)switch(n){case"step":this.noise(.12,500+Math.random()*200,.12,"lowpass");break;case"jump":this.noise(.2,400,.15);break;case"land":this.noise(.25,300,.25);break;case"mine":this.tone(180+Math.random()*60,.08,"square",.04),this.noise(.08,2400,.06,"highpass");break;case"pickup":this.tone(880,.08,"sine",.08),this.tone(1320,.1,"sine",.06,0,.05);break;case"deplete":this.noise(.5,900,.3),this.tone(220,.4,"triangle",.15,.5);break;case"shoot":this.tone(900,.15,"sawtooth",.12,.25),this.noise(.1,3e3,.08,"highpass");break;case"turret":this.tone(700,.12,"square",.05,.3);break;case"hit":this.tone(300,.1,"square",.08,.5);break;case"kill":this.noise(.6,1600,.3,"bandpass",0,.8),this.tone(120,.5,"sawtooth",.12,.3);break;case"hurt":this.tone(160,.25,"sawtooth",.15,.6);break;case"place":this.tone(220,.15,"triangle",.2),this.tone(330,.15,"triangle",.2,0,.1),this.tone(440,.3,"triangle",.2,0,.2),this.noise(.4,600,.2);break;case"ui":this.tone(880,.05,"sine",.07),this.tone(1320,.08,"sine",.04,0,.03);break;case"scan":this.tone(300,1.2,"sine",.12,4),this.tone(600,.9,"triangle",.05,3,.1),this.noise(.8,2e3,.05,"bandpass",0,3);break;case"shutter":this.noise(.06,4e3,.25,"highpass"),this.noise(.1,1500,.15,"bandpass",.07);break;case"tick":this.tone(2400,.02,"sine",.025);break;case"open":this.tone(440,.12,"sine",.05,1.5),this.noise(.15,3e3,.03,"highpass");break;case"achv":[523,784,1046,1568].forEach((t,e)=>this.tone(t,.9,"triangle",.09,0,e*.09));break;case"deny":this.tone(200,.15,"square",.06),this.tone(150,.2,"square",.06,0,.1);break;case"craft":[523,659,784,1046].forEach((t,e)=>this.tone(t,.25,"triangle",.12,0,e*.08));break;case"radio":this.noise(.15,2500,.12,"bandpass",0,2),this.tone(1200,.05,"sine",.06,0,.12);break;case"alarm":this.tone(880,.18,"square",.06),this.tone(660,.18,"square",.06,0,.2);break;case"objective":[392,523,659].forEach((t,e)=>this.tone(t,.5,"sine",.15,0,e*.12));break;case"chapter":[262,330,392,523,659].forEach((t,e)=>this.tone(t,1.2,"sine",.12,0,e*.15));break;case"rumble":this.noise(4,150,.6),this.noise(3,400,.25,"lowpass",.5);break;case"jet":this.noise(.12,800,.1,"bandpass");break;case"night":this.tone(110,3,"sine",.12,.8),this.tone(165,3,"sine",.08,.8,.3);break}},engine(n){if(ee&&(n>0||Ic)){if(!Ic){let i=ee.createOscillator(),s=ee.createOscillator(),r=ee.createBiquadFilter(),o=ee.createGain();i.type="sawtooth",s.type="triangle",r.type="lowpass",r.frequency.value=500,o.gain.value=1e-4,i.connect(r),s.connect(r),r.connect(o),o.connect(wr),i.start(),s.start(),Ic={o:i,o2:s,f:r,g:o}}let t=ee.currentTime,e=Ic;e.o.frequency.setTargetAtTime(38+n*70,t,.1),e.o2.frequency.setTargetAtTime(76+n*140,t,.1),e.f.frequency.setTargetAtTime(300+n*900,t,.1),e.g.gain.setTargetAtTime(n>0||p.driving?.03+n*.05:1e-4,t,.15)}},laser(n){if(ee){if(n&&!Ga){let t=ee.createOscillator(),e=ee.createOscillator(),i=ee.createGain(),s=ee.createBiquadFilter();t.type="sawtooth",t.frequency.value=110,e.type="square",e.frequency.value=113,s.type="lowpass",s.frequency.value=900,i.gain.value=1e-4,i.gain.exponentialRampToValueAtTime(.06,ee.currentTime+.1),t.connect(s),e.connect(s),s.connect(i),i.connect(wr),t.start(),e.start(),Ga={o:t,o2:e,g:i}}else if(!n&&Ga){let t=Ga;Ga=null,t.g.gain.setTargetAtTime(1e-4,ee.currentTime,.04),t.o.stop(ee.currentTime+.2),t.o2.stop(ee.currentTime+.2)}}},musicLoop(){let n=[[220,277.2,329.6,415.3],[196,246.9,293.7,392],[174.6,220,261.6,349.2],[164.8,207.7,246.9,329.6],[146.8,220,293.7,370]],t=0,e=()=>{if(!ee)return;let i=n[t++%n.length],s=ee.currentTime;if(i.forEach((r,o)=>{let a=ee.createOscillator(),l=ee.createGain();a.type=o===0?"triangle":"sine",a.frequency.value=r*(o===0?.5:1),a.detune.value=(Math.random()-.5)*8,l.gain.setValueAtTime(1e-4,s),l.gain.exponentialRampToValueAtTime(.06,s+3),l.gain.exponentialRampToValueAtTime(1e-4,s+11),a.connect(l),l.connect(Ba),a.start(s),a.stop(s+11.5)}),Math.random()<.7){let r=i[1+Math.floor(Math.random()*3)]*2;for(let o=0;o<3;o++)Math.random()<.6&&this.tone(r*[1,1.122,1.335][o],2.5,"sine",.025,0,2+o*1.6,Ba)}setTimeout(e,9e3)};e()}};var Wa={iron:new ht({color:6965822,roughness:.4,metalness:.8,flatShading:!0,map:Pi.map,bumpMap:Pi.bumpMap,bumpScale:4}),ironVein:new ht({color:10246714,roughness:.3,metalness:.9,flatShading:!0,emissive:3806216}),ice:new ht({color:13627135,roughness:.08,metalness:.1,flatShading:!0,transparent:!0,opacity:.9,emissive:1456202}),silicon:new ht({color:15983014,roughness:.15,metalness:.4,flatShading:!0,emissive:2761224}),titanium:new ht({color:10194175,roughness:.1,metalness:.5,flatShading:!0,emissive:5913855,emissiveIntensity:.6}),base:new ht({color:8276790,roughness:.95,flatShading:!0,map:Pi.map,bumpMap:Pi.bumpMap,bumpScale:4})},Im={iron:null,ice:8969727,silicon:16770720,titanium:9071871},ls={iron:[1,.55,.3],ice:[.6,.9,1],silicon:[1,.9,.55],titanium:[.7,.55,1]};function d2(n,t,e){let i=new ze(e,t,5,1);i.translate(0,t/2,0);let s=new at(i,n);return s.castShadow=!0,s}function f2(n,t){let e=new wt;if(n==="iron")for(let i=0;i<4;i++){let s=new at(new Jn(.6+t()*.7,0),i===0?Wa.ironVein:Wa.iron);s.position.set((t()-.5)*1.8,.3+t()*.4,(t()-.5)*1.8),s.rotation.set(t()*3,t()*3,t()*3),s.scale.y=.8,s.castShadow=!0,e.add(s)}else{let i=new at(new Jn(1.1,0),Wa.base);i.scale.set(1.2,.45,1.2),i.castShadow=!0,e.add(i);let s=n==="titanium"?6:7;for(let r=0;r<s;r++){let o=d2(Wa[n],.8+t()*(n==="ice"?1.6:1.9),.18+t()*.22),a=t()*6.28,l=t()*.8;o.position.set(Math.cos(a)*l,.2,Math.sin(a)*l),o.rotation.set((t()-.5)*.9,t()*3,(t()-.5)*.9),e.add(o)}Im[n]&&e.add(Dt(Im[n],n==="titanium"?5:3,null,0,1.2,0))}return e}var Lm=Math.random;function Lo(n,t,e,i){let s=f2(n,Lm),r=yt(t,e);s.position.set(t,r,e),s.rotation.y=Lm()*6.28,p.scene.add(s);let o=i??{iron:30,ice:25,silicon:25,titanium:14}[n],a={type:n,x:t,z:e,y:r,amount:o,max:o,mesh:s,r:1.6};return a.collider=p.colliders.add({x:t,z:e,r:1.3,kind:"node"}),p.nodes.push(a),a}function Dm(n,t){for(let e=0;e<200;e++){let i,s;if(n==="ice"&&Math.random()<.75){let o=os[Math.floor(Math.random()*Math.min(os.length,30))],a=Math.random()*6.28,l=Math.random()*o.r*.7;i=o.x+Math.cos(a)*l,s=o.z+Math.sin(a)*l}else if(t){let o=Math.random()*6.28,a=t[0]+Math.random()*(t[1]-t[0]);i=Math.cos(o)*a,s=Math.sin(o)*a}else i=(Math.random()-.5)*(2*Kt-300),s=(Math.random()-.5)*(2*Kt-300);let r=Math.hypot(i,s);if(!(n==="titanium"&&r<260)&&!(r<18)&&!(Math.abs(i)>Kt-160||Math.abs(s)>Kt-160)&&!(Mr(i,s,2)>.6)&&!p.colliders.overlaps(i,s,3))return[i,s]}return null}function Um(){let n=[["iron",22,8],["iron",-18,20],["iron",30,-25],["silicon",-26,-14],["silicon",12,34],["ice",40,10],["iron",-40,-38],["silicon",45,42]];for(let[e,i,s]of n)Lo(e,i,s);let t={iron:70,silicon:50,ice:40,titanium:22};for(let e in t)for(let i=0;i<t[e];i++){let s=Dm(e,e==="titanium"?null:i<t[e]*.35?[40,220]:null);s&&Lo(e,s[0],s[1])}}function Nm(n){p.scene.remove(n.mesh),p.colliders.remove(n.collider);let t=p.nodes.indexOf(n);t>=0&&p.nodes.splice(t,1)}var Io=[];function Dc(n,t){n.amount-=t;let e=.35+.65*Math.max(0,n.amount/n.max);if(n.mesh.scale.setScalar(e),n.amount<=0){let i=n.mesh.position.clone();i.y+=1,vt.burst(i,ls[n.type],40,7);let s=n.mesh.children.find(r=>r.isMesh&&r!==n.mesh.children[0])?.material||n.mesh.children[0].material;return vt.debris(i,s,9,5,1.1),vt.dustPuff(i,16,3),Nm(n),Io.push({type:n.type,t:90+Math.random()*60}),!0}return!1}function Hm(n){for(let e=Io.length-1;e>=0;e--)if(Io[e].t-=n,Io[e].t<=0){let i=Io[e].type;Io.splice(e,1);let s=Dm(i,i==="titanium"?null:[60,400]);s&&Lo(i,s[0],s[1])}let t=1+Math.sin(performance.now()*.002)*.15;Wa.titanium.emissiveIntensity=.5*t}function km(){return p.nodes.map(n=>[n.type,+n.x.toFixed(1),+n.z.toFixed(1),Math.round(n.amount)])}function zm(n){for(let t of[...p.nodes])Nm(t);for(let[t,e,i,s]of n){let r=Lo(t,e,i);r.amount=s,r.mesh.scale.setScalar(.35+.65*s/r.max)}}var Cn=[{name:"\u524D\u54E8\u7AD9",pop:0,b:0,r:75},{name:"\u5B9A\u5C45\u70B9",pop:4,b:6,r:120},{name:"\u5C0F\u9547",pop:12,b:14,r:175},{name:"\u57CE\u5E02",pop:24,b:22,r:240},{name:"\u5927\u90FD\u4F1A",pop:36,b:32,r:310},{name:"\u661F\u6E2F",pop:50,b:42,r:390}],yi={x:0,z:0},Do,Uc,Uo=0;function nf(n){Uc=new ne({color:6743807,transparent:!0,opacity:.12,side:Qe,depthWrite:!1,blending:Me}),p.cityLevel=p.cityLevel||0,Uo=Cn[p.cityLevel].r,Fm(Uo)}function Fm(n){Do&&(p.scene.remove(Do),Do.geometry.dispose());let t=Math.ceil(n*1.2),e=[],i=[],s=1.4;for(let o=0;o<=t;o++){let a=o/t*Math.PI*2,l=yi.x+Math.cos(a)*n,c=yi.z+Math.sin(a)*n,h=yt(l,c);if(e.push(l,h,c,l,h+s,c),o<t){let u=o*2;i.push(u,u+1,u+2,u+1,u+3,u+2)}}let r=new Te;r.setAttribute("position",new Yt(e,3)),r.setIndex(i),Do=new at(r,Uc),Do.frustumCulled=!1,p.scene.add(Do)}function Om(n,t,e=0){return Math.hypot(n-yi.x,t-yi.z)<=Cn[p.cityLevel].r-e}function Bm(){let n=Cn[p.cityLevel+1];return n?{...n,curPop:p.colony.pop,curB:p.buildings.length}:null}var ef=0;function Vm(n,t){Uc.opacity+=((t?.45:.1)-Uc.opacity)*Math.min(1,n*4);let e=Cn[p.cityLevel].r;if(Uo<e&&(Uo=Math.min(e,Uo+n*40),Fm(Uo)),ef-=n,ef>0)return;ef=1;let i=Cn[p.cityLevel+1];if(i&&p.colony.pop>=i.pop&&p.buildings.length>=i.b){p.cityLevel++,et.play("chapter"),p.events.emit("cityLevel",Cn[p.cityLevel]);let s=new T(yi.x,yt(yi.x,yi.z)+2,yi.z);vt.burst(s,[.4,.9,1],120,18)}}var Xa=[],p2={mars:6178362,europa:9214120,kepler:5921384}[le],sf,cs,Nc=!0;function m2(){return sf||(sf=new ht({color:p2,roughness:.95,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),sf}function g2(n,t,e,i){let s=e-n,r=i-t,o=Math.hypot(s,r);if(o<2)return null;let a=Math.ceil(o/1.5),l=s/o,c=r/o,h=-c,u=l,d=1.3,f=[],g=[],y=[],x=[];for(let E=0;E<=a;E++){let v=E/a,I=n+s*v,R=t+r*v;for(let P of[-1,1]){let L=I+h*d*P,S=R+u*d*P;f.push(L,yt(L,S)+.07,S),y.push(P<0?0:1,v*o/3)}if(E<a){let P=E*2;g.push(P,P+2,P+1,P+1,P+2,P+3)}}for(let E=4;E<o-2;E+=9)for(let v of[-1,1]){let I=n+l*E+h*(d+.35)*v,R=t+c*E+u*(d+.35)*v;x.push(I,yt(I,R)+.25,R)}let m=new Te;m.setAttribute("position",new Yt(f,3)),m.setAttribute("uv",new Yt(y,2)),m.setIndex(g),m.computeVertexNormals();let _=new at(m,m2());return _.receiveShadow=!0,p.scene.add(_),{mesh:_,lamp:x}}function Gm(n){if(n.type==="lamp")return;let t=null,e=70;for(let u of p.buildings){if(u===n||u.type==="lamp")continue;let d=Math.hypot(u.x-n.x,u.z-n.z)-u.def.r-n.def.r;d<e&&(e=d,t=u)}if(!t)return;let i=t.x-n.x,s=t.z-n.z,r=Math.hypot(i,s),o=n.x+i/r*(n.def.r+.5),a=n.z+s/r*(n.def.r+.5),l=t.x-i/r*(t.def.r+.5),c=t.z-s/r*(t.def.r+.5),h=g2(o,a,l,c);h&&(Xa.push({...h,a:n,b:t}),Nc=!0)}function Wm(n){for(let t=Xa.length-1;t>=0;t--){let e=Xa[t];(e.a===n||e.b===n)&&(p.scene.remove(e.mesh),e.mesh.geometry.dispose(),Xa.splice(t,1),Nc=!0)}}function Xm(){if(Nc){Nc=!1,cs&&(p.scene.remove(cs),cs.geometry.dispose());let n=Xa.flatMap(t=>t.lamp);if(n.length){let t=new Te;t.setAttribute("position",new Yt(n,3)),cs=new Yn(t,new Fn({size:.9,map:Wn(),color:8382207,transparent:!0,depthWrite:!1,blending:Me})),cs.frustumCulled=!1,p.scene.add(cs)}else cs=null}cs&&(cs.material.opacity=.15+p.time.night*.85)}var qm=new te(1,1,1,6,1,!0);qm.translate(0,.5,0);var x2=new T(0,1,0),No=new T;function y2(n){let t=1+(n.level||1);for(n.drones=n.drones||[];n.drones.length<t;){let e=dm(),i=new at(qm,new ne({color:16752720,transparent:!0,opacity:.8,blending:Me,depthWrite:!1}));i.visible=!1,i.frustumCulled=!1,p.scene.add(e.group,i);let s=n.drones.length,r=new T(n.x+[-1.9,1.9,-1.9,1.9][s%4],n.y+1.1,n.z+[-1.9,-1.9,1.9,1.9][s%4]);e.group.position.copy(r),n.drones.push({...e,beam:i,dock:r,state:"dock",t:1+s*1.3,node:null,cargo:null,pos:e.group.position})}}function Ym(n){for(let t of n.drones||[])p.scene.remove(t.group,t.beam),t.node&&(t.node.claimed=!1);n.drones=[]}function $m(n,t,e,i=15){No.copy(t).sub(n.pos);let s=No.length(),r=yt(n.pos.x,n.pos.z)+8;s>6&&(No.y+=(r-n.pos.y)*2),No.normalize().multiplyScalar(Math.min(s,i*e)),n.pos.add(No);let a=Math.atan2(t.x-n.pos.x,t.z-n.pos.z)-n.group.rotation.y;return a=Math.atan2(Math.sin(a),Math.cos(a)),n.group.rotation.y+=a*Math.min(1,e*4),n.group.rotation.x=Math.min(.3,s*.02),s<.6}function Zm(n){let t=performance.now()*.001;for(let e of p.buildings)if(e.type==="drones"&&!(e.buildT<1)){y2(e),e.anim.dish&&(e.anim.dish.rotation.y+=n*(e.powered?1.2:0)),e.anim.light&&(e.anim.light.visible=e.powered&&Math.sin(t*3)>-.3);for(let i of e.drones){for(let s of i.rotors)s.rotation.y+=n*40;switch(i.group.position.y+=Math.sin(t*3+i.dock.x)*.003,i.beam.visible=!1,!e.powered&&i.state!=="dock"&&(i.node&&(i.node.claimed=!1),i.node=null,i.state="back"),i.state){case"dock":{if(i.pos.lerp(i.dock,Math.min(1,n*3)),i.t-=n,i.t<=0&&e.powered){i.t=2;let s=null,r=100;for(let o of p.nodes){if(o.claimed||o.type==="titanium"&&(e.level||1)<3)continue;let a=Math.hypot(o.x-e.x,o.z-e.z);a<r&&(r=a,s=o)}s&&(s.claimed=!0,i.node=s,i.state="out")}break}case"out":{let s=i.node;if(!s||!p.nodes.includes(s)){i.node=null,i.state="back";break}$m(i,No.set(s.x,s.y+4.5,s.z).clone(),n)&&(i.state="mine",i.t=3.2);break}case"mine":{let s=i.node;if(!s||!p.nodes.includes(s)){i.state="back";break}i.t-=n;let r=new T(s.x+Math.sin(t*5)*.3,s.y+.6,s.z+Math.cos(t*4)*.3),o=i.pos.clone().add(new T(0,-.25,0)),a=r.clone().sub(o),l=a.length();if(i.beam.position.copy(o),i.beam.quaternion.setFromUnitVectors(x2,a.normalize()),i.beam.scale.set(.05,l,.05),i.beam.material.color.setRGB(...ls[s.type]),i.beam.visible=!0,Math.random()<.4&&vt.spark(r,ls[s.type],1,3,.4),i.t<=0){let c=Math.min(3,Math.ceil(s.amount));i.cargo={type:s.type,n:c},s.claimed=!1,Dc(s,c),i.node=null,i.state="back"}break}case"back":{$m(i,i.dock,n)&&(i.cargo&&(p.res[i.cargo.type]+=i.cargo.n,p.stats.mined[i.cargo.type]+=i.cargo.n,p.stats.droneHauls=(p.stats.droneHauls||0)+1,Math.hypot(p.player.pos.x-e.x,p.player.pos.z-e.z)<45&&p.events.emit("pickup",{type:i.cargo.type,n:i.cargo.n,note:"\u65E0\u4EBA\u673A"}),vt.spark(i.pos,[.5,.9,1],6,3),i.cargo=null),i.state="dock",i.t=1.5);break}}}}}var bn={solar:{name:"\u592A\u9633\u80FD\u9635\u5217",icon:"sun",cat:"life",chapter:0,cost:{iron:8,silicon:6},power:4,r:2.6,hp:120,desc:"\u767D\u5929\u53D1\u7535 4 \u5355\u4F4D\uFF0C\u591C\u95F4\u964D\u81F3 1.6\u3002\u6B96\u6C11\u5730\u7684\u5FC3\u8DF3\u4ECE\u8FD9\u91CC\u5F00\u59CB\u3002"},oxygen:{name:"\u5236\u6C27\u7AD9",icon:"o2",cat:"life",chapter:0,cost:{iron:12,silicon:4,ice:6},power:-2,r:3,hp:160,o2:6,life:14,desc:"\u7535\u89E3\u6C34\u51B0\u5236\u9020\u6C27\u6C14\u3002\u4E3A 6 \u4F4D\u5C45\u6C11\u4F9B\u6C27\uFF0C\u5E76\u5728 14 \u7C73\u5185\u4E3A\u4F60\u7684\u5B87\u822A\u670D\u8865\u6C27\u3002"},lamp:{name:"\u7167\u660E\u706F",icon:"star",cat:"life",chapter:0,cost:{iron:3},power:0,r:.6,hp:60,desc:"\u7167\u4EAE\u706B\u661F\u7684\u957F\u591C\u3002"},habitat:{name:"\u5C45\u4F4F\u7A79\u9876",icon:"dome",cat:"life",chapter:1,cost:{iron:25,silicon:12},power:-1,r:6.4,hp:300,housing:4,life:12,desc:"\u53EF\u4F4F 4 \u4EBA\u3002\u7A79\u9876\u91CC\u6709\u6696\u5149\u3001\u690D\u7269\u548C\u5BB6\u4EBA\u7684\u7167\u7247\u3002"},greenhouse:{name:"\u6E29\u5BA4",icon:"food",cat:"life",chapter:1,cost:{iron:14,silicon:16,ice:8},power:-2,r:5.4,hp:160,food:5,desc:"\u5728\u706B\u661F\u571F\u58E4\u91CC\u79CD\u51FA\u7B2C\u4E00\u68F5\u571F\u8C46\u3002\u4F9B 5 \u4EBA\u98DF\u7269\u3002"},extractor:{name:"\u6C34\u51B0\u63D0\u53D6\u5668",icon:"water",cat:"life",chapter:1,cost:{iron:16,silicon:4,ice:4},power:-2,r:2.8,hp:160,water:6,desc:"\u4ECE\u5730\u4E0B\u51BB\u571F\u4E2D\u94BB\u53D6\u6C34\u3002\u4F9B 6 \u4EBA\u7528\u6C34\u3002"},beacon:{name:"\u7740\u9646\u573A",icon:"ship",cat:"city",chapter:1,cost:{iron:24,silicon:14},power:-1,r:7.4,hp:250,desc:"\u5411\u5730\u7403\u53D1\u51FA\u4FE1\u53F7\u3002\u6761\u4EF6\u6EE1\u8DB3\u65F6\uFF0C\u79FB\u6C11\u98DE\u8239\u4F1A\u5728\u8FD9\u91CC\u964D\u843D\u3002"},fabricator:{name:"\u5236\u9020\u5DE5\u574A",icon:"wrench",cat:"industry",chapter:2,cost:{iron:22,silicon:14},power:-1,r:4.6,hp:220,desc:"\u9760\u8FD1\u6309 E \u5236\u9020\u6B66\u5668\u4E0E\u88C5\u5907\u3002"},drones:{name:"\u65E0\u4EBA\u673A\u7AD9",icon:"drone",cat:"industry",chapter:2,cost:{iron:30,silicon:22},power:-3,r:3.8,hp:220,desc:"\u6D3E\u51FA\u91C7\u77FF\u65E0\u4EBA\u673A\uFF0C\u81EA\u52A8\u91C7\u96C6 100 \u7C73\u5185\u7684\u77FF\u70B9\u5E76\u8FD0\u56DE\u3002\u5347\u7EA7\u540E\u65E0\u4EBA\u673A\u66F4\u591A\uFF0C\u6EE1\u7EA7\u53EF\u91C7\u949B\u3002"},turret:{name:"\u9632\u5FA1\u70AE\u5854",icon:"shield",cat:"defense",chapter:2,cost:{iron:22,silicon:10},power:-2,r:1.9,hp:200,range:40,desc:"\u81EA\u52A8\u653B\u51FB 40 \u7C73\u5185\u7684\u9508\u8680\u86DB\u3002\u9700\u8981\u7535\u529B\u3002"},reactor:{name:"\u805A\u53D8\u53CD\u5E94\u5806",icon:"power",cat:"industry",chapter:3,cost:{iron:40,silicon:20,titanium:12},power:20,r:5.4,hp:400,desc:"\u663C\u591C\u4E0D\u505C +20 \u26A1\u3002\u7528\u706B\u661F\u7684\u949B\uFF0C\u70B9\u4EAE\u4EBA\u7C7B\u7684\u7B2C\u4E8C\u9897\u592A\u9633\u3002"},plaza:{name:"\u4E2D\u592E\u5E7F\u573A",icon:"planet",cat:"city",level:1,cost:{iron:20,silicon:16},power:-1,r:7.4,hp:300,desc:"\u4E2D\u5FC3\u6709\u4E00\u5EA7\u5168\u606F\u5730\u7403\u3002\u5929\u9ED1\u540E\uFF0C\u5C45\u6C11\u4EEC\u4F1A\u6765\u8FD9\u91CC\u805A\u5728\u4E00\u8D77\uFF0C\u770B\u4E00\u770B\u6545\u4E61\u3002"},apartment:{name:"\u516C\u5BD3\u5854",icon:"tower",cat:"city",level:2,cost:{iron:40,silicon:25,titanium:4},power:-3,r:4.6,hp:400,housing:12,life:12,desc:"\u53EF\u4F4F 12 \u4EBA\u3002\u7A97\u6237\u91CC\u7684\u706F\u5149\uFF0C\u662F\u57CE\u5E02\u7684\u661F\u7A7A\u3002"},vfarm:{name:"\u5782\u76F4\u519C\u573A",icon:"food",cat:"city",level:2,cost:{iron:30,silicon:30,ice:15},power:-4,r:4.2,hp:260,food:14,desc:"\u5341\u56DB\u5C42\u7684\u7ACB\u4F53\u519C\u7530\u3002\u4F9B 14 \u4EBA\u98DF\u7269\u3002"},lifehub:{name:"\u751F\u6001\u4E2D\u67A2",icon:"o2",cat:"city",level:3,cost:{iron:45,silicon:30,ice:30,titanium:6},power:-5,r:6,hp:400,o2:16,water:16,life:20,desc:"\u5927\u578B\u6C27\u6C14\u4E0E\u6C34\u5FAA\u73AF\u7CFB\u7EDF\u3002\u4F9B 16 \u4EBA\u6C27\u6C14\u548C\u7528\u6C34\uFF0C20 \u7C73\u5185\u8865\u6C27\u3002"},terraformer:{name:"\u5927\u6C14\u6539\u9020\u5854",icon:"planet",cat:"stellar",chapter:4,only:"terraformable",cost:{iron:100,silicon:60,titanium:30,ice:50},power:-12,r:7.4,hp:800,desc:"\u5411\u5929\u7A7A\u91CA\u653E\u6E29\u5BA4\u6C14\u4F53\u4E0E\u6C34\u6C7D\u3002\u8BA9\u8FD9\u9897\u661F\u7403\uFF0C\u771F\u6B63\u6210\u4E3A\u5BB6\u3002"},launch:{name:"\u661F\u9645\u53D1\u5C04\u53F0",icon:"ship",cat:"stellar",chapter:5,level:le==="mars"?5:4,only:"route",cost:{iron:160,silicon:120,titanium:60,ice:60},power:-15,r:9.5,hp:900,desc:"\u661F\u9645\u822A\u7EBF\u7684\u8D77\u70B9\u3002\u9760\u8FD1\u6309 E \u6253\u5F00\u661F\u56FE\uFF0C\u524D\u5F80\u65B0\u7684\u661F\u7403\u6216\u56DE\u5230\u5DF2\u5F00\u62D3\u7684\u5BB6\u56ED\u3002"},monument:{name:"\u6587\u660E\u7EAA\u5FF5\u7891",icon:"monument",cat:"stellar",level:5,only:"final",cost:{iron:150,silicon:120,titanium:80},power:-6,r:6.5,hp:900,desc:"\u4E09\u9897\u661F\u7403\uFF0C\u4E00\u4E2A\u4EBA\u7C7B\u3002\u732E\u7ED9\u6240\u6709\u51FA\u53D1\u7684\u4EBA\u3002"}},af=3,of=[1,1,1.6,2.2],v2=["lamp","beacon","fabricator","plaza","terraformer","launch","monument"];function Hc(n){return!v2.includes(n.type)&&(n.level||1)<af}function Hi(n,t){let e=n.def,i=n.level||1,s=e[t];return s?t==="power"?s>0?s*of[i]:s*(1+.25*(i-1)):t==="life"?s+3*(i-1):t==="range"?s+8*(i-1):t==="hp"?s*(1+.5*(i-1)):Math.round(s*of[i]):0}function lf(n){let t=n.level||1,e={};for(let i in n.def.cost)e[i]=Math.ceil(n.def.cost[i]*(t===1?.8:1.3));return e.titanium=(e.titanium||0)+(t===1?3:8),e}function Jm(n){if(!Hc(n))return!1;let t=lf(n);return mi(t)?(Pa(t),n.level=(n.level||1)+1,Km(n,!0),et.play("place"),vt.ring(new T(n.x,n.y,n.z),n.def.r*1.2,60,[.5,.9,1]),hs(),!0):!1}function Km(n,t){let e=n.level||1;n.maxHp=Hi(n,"hp"),n.hp=Math.min(n.maxHp,t?n.maxHp:n.hp);let i=1+(e-1)*.12;n.group.scale.set(i,n.group.scale.y,i),n.baseScale=i,n.anim._pips&&n.anim._pips.forEach(r=>n.group.remove(r)),n.anim._pips=[];let s=Math.max(2.5,n.def.r*.9);for(let r=1;r<e;r++)n.anim._pips.push(Dt(16757596,1.4,n.group,(r-e/2)*.9,s+1.2,0));if(t){n.buildT=.35;let r=new at(new Zt(n.def.r*1.05,.08,6,48),jm.clone());r.rotation.x=Math.PI/2,r.position.set(n.x,n.y,n.z),p.scene.add(r),n.anim._scan=r}}function Ys(n){let t=bn[n];return t.only==="terraformable"&&!ut.terraformable?{hide:!0}:t.only==="route"&&!ut.next&&!(Dn.visited||[]).some(e=>e.id!==le)?{hide:!0}:t.only==="final"&&ut.next?{hide:!0}:le==="mars"&&t.chapter&&t.chapter>p.chapter?{ok:!1,why:"\u5267\u60C5\u63A8\u8FDB\u540E\u89E3\u9501"}:t.level&&t.level>p.cityLevel?{ok:!1,why:`\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C${Cn[t.level].name}\u300D\u89E3\u9501`}:{ok:!0}}var cf=["solar","oxygen","lamp","habitat","greenhouse","extractor","beacon","fabricator","drones","turret","reactor","plaza","apartment","vfarm","lifehub","terraformer","launch","monument"],_2=["oxygen","lifehub","turret","habitat","apartment","extractor","greenhouse","vfarm","beacon","plaza","drones","fabricator","terraformer","launch","monument"],jm=new ne({color:8382207,transparent:!0,opacity:.8,blending:Me,depthWrite:!1,side:Qe});function kc(n,t,e,i=0,s,r=!1,o=1){let a=bn[n],l=new wt,c={};rs[n](l,c);let h=yt(t,e);if(l.position.set(t,h,e),l.rotation.y=i,p.scene.add(l),r){l.scale.set(1,.001,1);let d=new at(new Zt(a.r*1.05,.08,6,48),jm.clone());d.rotation.x=Math.PI/2,d.position.set(t,h,e),p.scene.add(d),c._scan=d}let u={buildT:r?0:1,type:n,def:a,x:t,z:e,y:h,rot:i,group:l,anim:c,hp:s??a.hp,broken:s!==void 0&&s<=0,powered:!0,t:Math.random()*10,cool:0};return u.collider=p.colliders.add({x:t,z:e,r:a.r*(n==="beacon"?.15:n==="plaza"?.28:.9),kind:"building",b:u}),u.level=o,u.maxHp=Hi(u,"hp"),s===void 0&&(u.hp=u.maxHp),o>1&&Km(u,!1),p.buildings.push(u),p.stats.built[n]=(p.stats.built[n]||0)+1,Gm(u),hs(),u}function Qm(n,t=!1){if(t)for(let s in n.def.cost)p.res[s]+=Math.floor(n.def.cost[s]*.5);p.scene.remove(n.group),p.colliders.remove(n.collider),Wm(n),n.type==="drones"&&Ym(n);let e=p.buildings.indexOf(n);e>=0&&p.buildings.splice(e,1),p.stats.built[n.type]=Math.max(0,(p.stats.built[n.type]||0)-1);let i=new T(n.x,n.y+2,n.z);vt.burst(i,[1,.6,.3],60,10),vt.dustPuff(i,30,n.def.r*2),hs()}function tg(n){return p.buildings.filter(t=>t.type===n).length}function hs(){let n=p.colony,t=(p.time.elevation>.05?1:.4)*ut.solar,e=0,i=0;for(let r of p.buildings){if(r.broken)continue;let o=Hi(r,"power");o>0?e+=r.type==="solar"?o*t:o:i-=o}let s=e;for(let r of p.buildings)r.powered=r.def.power>=0&&!r.broken;for(let r of _2)for(let o of p.buildings){if(o.type!==r)continue;let a=Hi(o,"power");!o.broken&&s>=-a&&(s+=a,o.powered=!0)}n.powerProd=e,n.powerUse=i,n.deficit=i>e+.001,n.housing=0,n.o2=0,n.food=0,n.water=0;for(let r of p.buildings)n.housing+=Hi(r,"housing"),r.powered&&(n.o2+=Hi(r,"o2"),n.food+=Hi(r,"food"),n.water+=Hi(r,"water"));n.support=Math.min(n.housing,n.o2,n.food,n.water)}function eg(n){for(let t of p.buildings){let e=Hi(t,"life");if(!e||!t.powered)continue;let i=t.x-n.x,s=t.z-n.z;if(i*i+s*s<e*e)return t}return null}var ki=null,M2=null,ng=new ne({color:5636010,transparent:!0,opacity:.35,depthWrite:!1}),E2=new ne({color:16729156,transparent:!0,opacity:.35,depthWrite:!1}),jn,Ee={type:null,rot:0,valid:!1,reason:"",x:0,z:0};function Tr(n){if(ki&&(p.scene.remove(ki),ki=null),Ee.type=n,M2=n,!n){jn&&(jn.visible=!1);return}let t=new wt;rs[n](t,{}),t.traverse(i=>{i.isMesh&&(i.material=ng,i.castShadow=!1,i.receiveShadow=!1),(i.isSprite||i.userData.found)&&(i.visible=!1)}),ki=t,p.scene.add(t),jn||(jn=new at(new gn(.96,1,64),new ne({color:6741503,transparent:!0,opacity:.5,depthWrite:!1,side:Qe})),jn.rotation.x=-Math.PI/2,p.scene.add(jn));let e=bn[n].life||bn[n].range||0;jn.visible=e>0,jn.scale.setScalar(e||1)}function ig(n,t){if(!ki)return;if(!n){ki.visible=!1,jn.visible=!1,Ee.valid=!1,Ee.reason="\u5BF9\u51C6\u5730\u9762";return}ki.visible=!0;let e=bn[Ee.type],i=n.x,s=n.z,r=Math.hypot(i-t.x,s-t.z),o=e.r+1.2;if(r<o){let h=r>.01?(i-t.x)/r:-Math.sin(p.player.yaw),u=r>.01?(s-t.z)/r:-Math.cos(p.player.yaw);i=t.x+h*o,s=t.z+u*o,r=o}let a=yt(i,s);ki.position.set(i,a,s),ki.rotation.y=Ee.rot,Ee.x=i,Ee.z=s,jn.scale.x>1&&(jn.visible=!0,jn.position.set(i,a+.3,s));let l="";mi(e.cost)?Mr(i,s,Math.max(1.5,e.r*.7))>(e.r>4?.32:.45)?l="\u5730\u9762\u592A\u9661":p.colliders.overlaps(i,s,e.r*.85)?l="\u4F4D\u7F6E\u88AB\u5360\u7528":r<e.r+.8?l="\u79BB\u81EA\u5DF1\u592A\u8FD1":Math.abs(i)>Kt-170||Math.abs(s)>Kt-170?l="\u8D85\u51FA\u53EF\u5EFA\u9020\u533A\u57DF":Om(i,s,e.r)||(l="\u8D85\u51FA\u6B96\u6C11\u5730\u9886\u5730\uFF08\u63D0\u5347\u57CE\u5E02\u7B49\u7EA7\u6765\u6269\u5F20\uFF09"):l="\u8D44\u6E90\u4E0D\u8DB3",Ee.valid=!l,Ee.reason=l;let c=l?E2:ng;ki.traverse(h=>{h.isMesh&&(h.material=c)})}function sg(){if(!Ee.type||!Ee.valid)return et.play("deny"),null;let n=bn[Ee.type];Pa(n.cost);let t=kc(Ee.type,Ee.x,Ee.z,Ee.rot,void 0,!0);return et.play("place"),vt.ring(new T(t.x,t.y,t.z),n.r,50),t}var rf=0;function rg(n,t){rf-=n,rf<=0&&(rf=.5,hs()),Xm(),Zm(n);let e=p.time.night,i=performance.now()*.001;M.window.emissiveIntensity=.3+e*.85,M.lamp.emissiveIntensity=e*4;for(let s of Vd)s.emissiveIntensity=.15+e*1.4;for(let s of p.buildings){let r=s.anim,o=s.powered;if(s.t+=n,s.buildT<1){s.buildT=Math.min(1,s.buildT+n/1.3);let a=s.buildT,l=1+2.2*Math.pow(a-1,3)+1.2*Math.pow(a-1,2);s.group.scale.y=Math.max(.001,l)*(s.baseScale||1);let c=Math.max(3,s.def.r*1.4)*(s.type==="apartment"||s.type==="launch"||s.type==="terraformer"||s.type==="monument"?4:1);r._scan.position.y=s.y+a*c,r._scan.material.opacity=.8*(1-a),r._scan.scale.setScalar(1-a*.25),Math.random()<.5&&vt.spark(new T(s.x+(Math.random()-.5)*s.def.r*2,s.y+a*c,s.z+(Math.random()-.5)*s.def.r*2),[.5,.9,1],1,2,.6),a>=1&&(p.scene.remove(r._scan),r._scan.geometry.dispose(),delete r._scan)}switch(s.hp<s.maxHp&&p.time.night<.5&&(s.hp=Math.min(s.maxHp,s.hp+n*(s.broken?5:2)),s.broken&&s.hp>=s.maxHp*.5&&(s.broken=!1,hs(),p.events.emit("toast",`\u2713 ${s.def.name} \u5DF2\u4FEE\u590D\uFF0C\u6062\u590D\u8FD0\u8F6C`))),s.broken&&Math.random()<n*6&&vt.dustPuff(new T(s.x+(Math.random()-.5)*s.def.r,s.y+1.5,s.z+(Math.random()-.5)*s.def.r),1,.5,[.15,.13,.12]),s.type){case"solar":{let a=new T(xi.x,Math.max(xi.y,.2),xi.z).applyAxisAngle(new T(0,1,0),-s.rot);r.pivot.rotation.y=Math.atan2(a.x,a.z),r.panel.rotation.x=Math.PI/2-Math.asin(Math.min(1,a.y/a.length()));break}case"oxygen":o&&(r.fan.rotation.z+=n*8),r.light.visible=o;break;case"extractor":o&&(r.drill.position.y=3+Math.sin(s.t*3)*.8),r.light.visible=o;break;case"greenhouse":r.light.material.opacity=o?.3+e*.5:0;break;case"fabricator":o?(r.arm.rotation.y=Math.sin(s.t*.8)*1.2,r.spark.visible=Math.sin(s.t*7)>.6):r.spark.visible=!1;break;case"habitat":r.tip.visible=Math.sin(i*2+s.x)>.3;break;case"apartment":r.tip.visible=Math.sin(i*2+s.z)>.3;break;case"vfarm":r.light.material.opacity=o?.25+e*.5:0;break;case"lifehub":o&&(r.fan.rotation.y+=n*3),r.light.visible=o;break;case"plaza":r.earth.rotation.y+=n*.25,r.earth.position.y=4+Math.sin(i*.8)*.15,r.earth.material.opacity=o?.55-e*.15:.15,r.halo.material.opacity=o?.25+e*.2:0;break;case"monument":r.rings.forEach((a,l)=>{a.rotation.x=i*(.3+l*.2),a.rotation.y=i*(.2+l*.15)});break;case"reactor":r.r1.rotation.y+=n*.8,r.r2.rotation.z+=n*.6,r.light.material.opacity=.5+Math.sin(i*3)*.2;break;case"beacon":{let a=Math.floor(i*6)%8;r.lights.forEach((l,c)=>{l.visible=o&&(c===a||c===(a+4)%8||e>.3)}),r.tip.visible=Math.sin(i*3)>0;break}case"lamp":r.glow.visible=e>.2,r.glow.material.opacity=e*.6;break;case"turret":b2(s,n,t);break;case"terraformer":{r.rings.forEach((a,l)=>{a.position.y=10+l*8+Math.sin(i*1.5+l)*1.5,a.rotation.x=Math.sin(i+l)*.2}),r.beam.material.opacity=o&&p.terraform<1?.18+Math.sin(i*4)*.05:0,o&&p.terraform<1&&Math.random()<.6&&vt.rise(new T(s.x,s.y+28,s.z),[.4,.9,1],4);break}}}}function b2(n,t,e){let i=n.anim;if(i.eye.visible=n.powered,!n.powered)return;n.cool-=t;let s=null,r=Hi(n,"range");for(let l of p.enemies){if(l.dead)continue;let c=Math.hypot(l.pos.x-n.x,l.pos.z-n.z);c<r&&(r=c,s=l)}if(!s){i.head.rotation.y+=t*.4;return}let a=Math.atan2(-(s.pos.x-n.x),-(s.pos.z-n.z))-n.rot-i.head.rotation.y;if(a=Math.atan2(Math.sin(a),Math.cos(a)),i.head.rotation.y+=Math.sign(a)*Math.min(Math.abs(a),t*5),Math.abs(a)<.15&&n.cool<=0){n.cool=.45;let l=new T(n.x,n.y+2.7,n.z),c=s.pos.clone();c.y+=1;let h=c.sub(l).normalize();l.addScaledVector(h,2.2),e.shoot(l,h,15*of[n.level||1],"turret"),et.play("turret")}}function og(){return p.buildings.map(n=>[n.type,+n.x.toFixed(2),+n.z.toFixed(2),+n.rot.toFixed(3),Math.round(n.hp),n.level||1])}var $a=new T;function Qn(n,t,e,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;$a.copy(t),$a[i]=0,$a.normalize();let c=.5*o/(o+a),h=1-$a.angleTo(n)/l;return Math.sign($a[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Ho=class extends Gt{constructor(t=1,e=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new T,l=new T,c=new T(t,e,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new T,y=.5/s;for(let x=0,m=0;x<h.length;x+=3,m+=2)switch(a.fromArray(h,x),l.copy(a),l.x-=Math.sign(l.x)*y,l.y-=Math.sign(l.y)*y,l.z-=Math.sign(l.z)*y,l.normalize(),h[x+0]=c.x*Math.sign(a.x)+l.x*r,h[x+1]=c.y*Math.sign(a.y)+l.y*r,h[x+2]=c.z*Math.sign(a.z)+l.z*r,u[x+0]=l.x,u[x+1]=l.y,u[x+2]=l.z,Math.floor(x/f)){case 0:g.set(1,0,0),d[m+0]=Qn(g,l,"z","y",r,i),d[m+1]=1-Qn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[m+0]=1-Qn(g,l,"z","y",r,i),d[m+1]=1-Qn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[m+0]=1-Qn(g,l,"x","z",r,t),d[m+1]=Qn(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),d[m+0]=1-Qn(g,l,"x","z",r,t),d[m+1]=1-Qn(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),d[m+0]=1-Qn(g,l,"x","y",r,t),d[m+1]=1-Qn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[m+0]=Qn(g,l,"x","y",r,t),d[m+1]=1-Qn(g,l,"y","x",r,e);break}}};var _t=(n,t,e)=>new T(n,t,e);function z(n,t,e=0,i=0,s=0,r,o=0,a=0,l=0){let c=new at(n,t);return c.position.set(e,i,s),c.rotation.set(o,a,l),c.castShadow=!0,c.receiveShadow=!0,r&&r.add(c),c}var jt=(n,t,e,i=.06)=>new Ho(n,t,e,2,Math.min(i,n/2.1,t/2.1,e/2.1)),fe=(n,t,e,i=24,s=!1)=>new te(n,t,e,i,1,s),Pn=(n,t=32)=>new ns(n.map(([e,i])=>new nt(e,i)),t);function Je(n,t,e,i,s,r=10){let o=t.clone().sub(n),a=o.length(),l=z(fe(e,e,a,r),i,0,0,0,s);return l.position.copy(n).add(t).multiplyScalar(.5),l.quaternion.setFromUnitVectors(_t(0,1,0),o.normalize()),l}function w2(n,t,e,i,s){let r=Je(n,t,e,i,s);for(let o of[n,t]){let a=Je(o.clone().lerp(t===o?n:t,.02),o,e*1.6,M.metal,s);a.scale.y=1}return r}function us(n,t,e,i,s=32){let r=new Ta(n);return z(new oc(r,s,t,8,!1),e,0,0,0,i)}function S2(n,t,e,i,s,r){let o=n.clone().lerp(t,.5);return o.y-=e,us([n,n.clone().lerp(o,.5).add(_t(0,-e*.15,0)),o,t.clone().lerp(o,.5).add(_t(0,-e*.15,0)),t],i,s,r,24)}function ag(n,t,e,i,s,r=0,o=.5){let a=new wt;a.position.set(t,e,i),a.rotation.y=r,n.add(a),z(fe(.035,.035,s,6),M.metal,-o/2,s/2,0,a),z(fe(.035,.035,s,6),M.metal,o/2,s/2,0,a);for(let l=.25;l<s;l+=.32)z(fe(.022,.022,o,6),M.metal,0,l,0,a,0,0,Math.PI/2);return a}function Js(n,t,e,i,s,r,o=0,a=8){let l=new wt;l.position.set(i,s,r),l.rotation.y=o,n.add(l),z(jt(t,e,.08,.02),M.dark,0,0,0,l);for(let c=0;c<a;c++)z(new Gt(t*.9,e/a*.45,.04),M.metal,0,-e/2+(c+.5)*e/a,.05,l,-.4,0,0);return l}function qa(n,t,e,i,s,r=0,o=0){let a=new wt;a.position.set(t,e,i),a.rotation.set(o,r,0),n.add(a),z(new Zt(s,s*.18,8,24),M.metal,0,0,0,a),z(new Ns(s*.95,24),M.window,0,0,-.01,a);for(let l=0;l<8;l++){let c=l/8*Math.PI*2;z(new Bt(s*.06,6,4),M.metal,Math.cos(c)*s*1.12,Math.sin(c)*s*1.12,.02,a)}return a}function df(n,t,e,i,s=.05){for(let r=0;r<i;r++){let o=r/i*Math.PI*2;z(fe(s,s,s*1.2,6),M.metal,Math.cos(o)*t,e,Math.sin(o)*t,n)}}function hf(n,t,e,i,s=.22,r=0,o=0){let a=new wt;a.position.set(t,e,i),a.rotation.set(r,o,0),n.add(a),z(new Zt(s,s*.12,6,18),M.red2,0,0,0,a);for(let l=0;l<3;l++)z(new Gt(s*2,s*.12,s*.12),M.red2,0,0,0,a,0,0,l*Math.PI/3);return z(fe(s*.25,s*.25,s*.6,8),M.metal,0,0,-s*.3,a,Math.PI/2,0,0),a}function ko(n,t,e,i,s=0){let r=new wt;return r.position.set(t,e,i),r.rotation.y=s,n.add(r),z(fe(.13,.13,.06,18),M.metal,0,0,0,r,Math.PI/2,0,0),z(new Ns(.11,18),M.screen,0,0,.032,r),r}function Ar(n,t,e,i,s,r,o=0){return z(new Gt(t,e,.02),M.hazard,i,s,r,n,0,o,0)}function Fc(n,t,e,i,s,r,o,a,l=0){let c=new wt;c.rotation.y=l,n.add(c);for(let h=0;h<e;h++){let u=.12+t()*.35,d=.1+t()*.3,f=.04+t()*.12,g=t(),y=g<.5?M.panel:g<.8?M.dark:M.metal;t()<.3?z(fe(u*.3,u*.3,f*2,10),y,i+t()*(s-i),r+t()*(o-r),a+f,c,Math.PI/2,0,0):z(jt(u,d,f,.015),y,i+t()*(s-i),r+t()*(o-r),a+f/2,c)}return c}function zo(n){let t=n;return()=>(t=t*16807%2147483647,(t-1)/2147483646)}{let n=document.createElement("canvas");n.width=128,n.height=32;let t=n.getContext("2d");t.fillStyle="#f2c11a",t.fillRect(0,0,128,32),t.fillStyle="#1a1a1a";for(let h=-32;h<160;h+=24)t.beginPath(),t.moveTo(h,32),t.lineTo(h+12,32),t.lineTo(h+44,0),t.lineTo(h+32,0),t.fill();let e=new on(n);e.colorSpace=_e,e.wrapS=Qi,e.repeat.set(2,1),M.hazard=new ht({map:e,roughness:.7}),M.red2=new ht({color:13120030,roughness:.5,metalness:.3}),M.chrome=new ht({color:14738666,roughness:.15,metalness:1}),M.rubber=new ht({color:1842206,roughness:.92}),M.ablative=new ht({color:3811874,roughness:.95,map:M.found.map,bumpMap:M.found.bumpMap,bumpScale:3}),M.soil=new ht({color:3875864,roughness:1}),M.leaf=new ht({color:4168250,roughness:.7,flatShading:!0}),M.leaf2=new ht({color:7127626,roughness:.7,flatShading:!0}),M.fruit=new ht({color:14694428,roughness:.4}),M.growlight=new ht({color:2228241,emissive:16732120,emissiveIntensity:2.2});let i=document.createElement("canvas");i.width=i.height=64;let s=i.getContext("2d");s.fillStyle="#0a1a14",s.fillRect(0,0,64,64),s.strokeStyle="#6dffb5",s.lineWidth=3,s.beginPath(),s.arc(32,36,22,Math.PI*1.1,Math.PI*1.9),s.stroke(),s.beginPath(),s.moveTo(32,36),s.lineTo(46,22),s.stroke();let r=new on(i);r.colorSpace=_e,M.screen=new ht({map:r,emissive:16777215,emissiveMap:r,emissiveIntensity:.9});let o=document.createElement("canvas");o.width=128,o.height=128;let a=o.getContext("2d"),l=a.createLinearGradient(0,0,128,128);l.addColorStop(0,"#16285a"),l.addColorStop(.5,"#2a4a9a"),l.addColorStop(1,"#122048"),a.fillStyle=l,a.fillRect(0,0,128,128),a.strokeStyle="rgba(200,220,255,.55)",a.lineWidth=1;for(let h=16;h<128;h+=16)a.beginPath(),a.moveTo(h,0),a.lineTo(h,128),a.stroke();a.strokeStyle="rgba(220,230,255,.8)",a.lineWidth=2,a.beginPath(),a.moveTo(0,64),a.lineTo(128,64),a.stroke();let c=new on(o);c.colorSpace=_e,c.anisotropy=8,M.cell=new ht({map:c,roughness:.12,metalness:.6,envMapIntensity:1.8})}function Zs(n,t,e=!1){let i=e?z(jt(t*2,4,t*2,.12),M.found,0,-1.8,0,n):z(fe(t,t*1.05,4,32),M.found,0,-1.8,0,n);i.castShadow=!1,i.userData.found=!0}Object.assign(rs,{solar(n,t){Zs(n,2.2,!0),z(jt(1.4,.25,1.4,.05),M.panel,0,.12,0,n),df(n,.55,.27,8,.04),z(Pn([[0,0],[.3,0],[.26,.4],[.17,.6],[.15,2.1],[0,2.1]]),M.metal,0,.25,0,n),z(jt(.5,.6,.4,.05),M.dark,.32,.65,0,n),ko(n,.57,.7,0,Math.PI/2),S2(_t(.4,.5,.15),_t(1.3,.05,.9),.15,.03,M.rubber,n);let e=new wt;e.position.y=2.45,n.add(e),z(jt(.5,.42,.5,.06),M.dark,0,0,0,e),z(fe(.12,.12,.9,12),M.chrome,0,.1,0,e,0,0,Math.PI/2);let i=new wt;i.position.y=.25,e.add(i),z(jt(4.4,.1,3,.03),M.metal,0,-.02,0,i);for(let s=0;s<4;s++)for(let r=0;r<3;r++){let o=z(new Gt(1.02,.03,.92),M.cell,-1.6+s*1.07,.045,-.97+r*.97,i);o.castShadow=!0}for(let s of[-1.1,1.1])z(new Gt(4.2,.08,.06),M.metal,0,-.1,s,i);for(let s of[-1.5,0,1.5])z(new Gt(.06,.08,2.6),M.metal,s,-.1,0,i);Je(_t(-1.5,-.12,-1.1),_t(0,-.35,0),.03,M.metal,i),Je(_t(1.5,-.12,1.1),_t(0,-.35,0),.03,M.metal,i),Je(_t(1.5,-.12,-1.1),_t(0,-.35,0),.03,M.metal,i),Je(_t(-1.5,-.12,1.1),_t(0,-.35,0),.03,M.metal,i),z(jt(.3,.12,.2,.02),M.dark,1.9,.08,1.35,i),t.pivot=e,t.panel=i},oxygen(n,t){Zs(n,3);let e=zo(11);z(fe(3,3.1,.35,40),M.panel,0,.17,0,n);for(let s of[-1.35,1.35]){let r=new wt;r.position.set(s,.35,-.3),n.add(r),z(Pn([[0,.2],[.55,.22],[.9,.45],[1,.8],[1,3.2],[.9,3.55],[.55,3.78],[0,3.8]],40),M.white,0,0,0,r);for(let o of[1.2,2.4])z(new Zt(1.005,.03,6,40),M.metal,0,o,0,r,Math.PI/2,0,0);z(fe(1.015,1.015,.25,40,!0),M.orange,0,1.8,0,r);for(let o of[-.6,.6])z(jt(1.6,.35,.2,.04),M.dark,0,.25,o,r);z(fe(.12,.12,.3,12),M.metal,0,3.9,0,r),hf(r,0,4.1,0,.18,Math.PI/2,0),ko(r,0,2.2,1.02),ag(r,0,.3,-1.05,3.4,Math.PI)}z(jt(1.7,1.9,1.6,.1),M.panel,0,1.3,1.2,n),z(jt(1.8,.2,1.7,.05),M.orange,0,2.3,1.2,n),Fc(n,e,10,-.7,.7,.6,2,1.95),Js(n,1,.5,0,.7,2.01,0,6),z(new Zt(.42,.06,8,28),M.dark,0,1.75,2.02,n);let i=new wt;i.position.set(0,1.75,2.03),n.add(i);for(let s=0;s<6;s++)z(new Gt(.1,.36,.02),M.metal,Math.sin(s*Math.PI/3)*.2,Math.cos(s*Math.PI/3)*.2,0,i,0,.4,-s*Math.PI/3);z(fe(.08,.08,.06,12),M.chrome,0,0,0,i,Math.PI/2,0,0),t.fan=i;for(let s of[-1.35,1.35])us([_t(s,3.2,.5),_t(s*.7,3,.9),_t(s*.3,2.4,1.2),_t(s*.25,2.2,1.3)],.07,M.metal,n);w2(_t(-1.35,.9,.7),_t(1.35,.9,.7),.06,M.metal,n),hf(n,.8,.9,.85,.15,0,0),ko(n,-.5,2,2.01),ko(n,.5,2,2.01),t.light=Dt(6741503,.45,n,.6,2.05,2.05),Ar(n,1.8,.12,0,.42,2.02)},habitat(n,t){Zs(n,6.2);let e=zo(23);z(Pn([[0,0],[6.25,0],[6.3,.15],[6.25,.9],[6.05,1.05],[5.95,1.25],[0,1.25]],64),M.panel,0,0,0,n);for(let o=0;o<16;o++){let a=o/16*Math.PI*2;Math.abs(a-Math.PI/2)<.3||Js(n,.7,.4,Math.cos(a)*6.28,.55,Math.sin(a)*6.28,-a+Math.PI/2,4)}let i=z(new Bt(5.8,64,24,0,Math.PI*2,0,Math.PI/2),M.white,0,1.2,0,n);i.scale.y=.85;for(let o=0;o<12;o++)z(new Zt(5.86,.08,6,32,Math.PI/2),M.panel,0,1.2,0,n,0,o*Math.PI/6,0).scale.set(1,.85,1);for(let[o,a]of[[2.6,5.62],[4.3,4.6]])z(new Zt(a,.07,6,64),M.panel,0,o,0,n,Math.PI/2,0,0);t.windows=[];for(let o=0;o<14;o++){let a=o/14*Math.PI*2+.11;if(Math.abs(a-Math.PI/2)<.35)continue;let l=new wt;l.position.set(Math.cos(a)*5.76,2,Math.sin(a)*5.76),l.rotation.y=-a+Math.PI/2,l.rotation.x=-.18,n.add(l),z(jt(1.15,.62,.16,.08),M.metal,0,0,0,l),z(jt(1,.48,.1,.07),M.window,0,0,.05,l)}z(fe(1.2,1.4,.5,32),M.panel,0,6.05,0,n),z(new Bt(1,32,12,0,Math.PI*2,0,Math.PI/2),M.glass,0,6.3,0,n).castShadow=!1,z(new Zt(1.05,.06,6,32),M.metal,0,6.3,0,n,Math.PI/2,0,0),z(fe(.06,.09,3.2,8),M.metal,1.6,7,0,n),t.tip=Dt(16728128,1,n,1.6,8.7,0),z(new Bt(.55,20,8,0,Math.PI*2,0,Math.PI/3),M.white,-1.4,6.6,.6,n).rotation.set(-.9,.5,0),z(fe(.05,.05,.9,6),M.metal,-1.4,6.1,.6,n),ag(n,0,1.25,-5.4,3.2,0,.45).rotation.x=-.6;let r=new wt;r.position.set(0,0,6.2),n.add(r),z(jt(2.6,2.9,3,.25),M.white,0,1.45,.2,r),z(jt(2.64,.12,3.04,.05),M.orange,0,2.62,.2,r),z(jt(1.5,2.2,.15,.12),M.metal,0,1.25,1.72,r),z(jt(1.2,1.95,.1,.1),M.dark,0,1.2,1.78,r),qa(r,0,1.75,1.84,.22),z(jt(.12,.4,.08,.03),M.chrome,.45,1.1,1.85,r),Ar(r,1.5,.14,0,.12,1.85);for(let o=0;o<3;o++)z(jt(1.4,.12,.35,.03),M.metal,0,.06+o*0,2.05+o*.35,r).position.y=.3-o*.12;Dt(16769184,.8,r,1,2.5,1.8),z(jt(.5,.35,.3,.04),M.dark,-1,2.4,1.75,r),Fc(r,e,8,-1.2,1.2,.4,2.6,1.7,0),us([_t(4.5,1,3.5),_t(5.6,.6,4.2),_t(6.6,.25,4.6),_t(7.6,.2,4.6)],.12,M.metal,n),us([_t(-4.5,1,3.5),_t(-5.4,.7,4.4),_t(-6.4,.25,5)],.1,M.orange,n);for(let[o,a,l]of[[-6.3,-2.4,.4],[6.4,-2,-.3]]){let c=new wt;c.position.set(o,0,a),c.rotation.y=l,n.add(c),z(jt(1.4,1.1,1,.08),M.panel,0,.55,0,c),Js(c,.9,.7,0,.6,.51,0,6),z(new Zt(.35,.05,6,20),M.dark,0,1.12,0,c,Math.PI/2,0,0)}},extractor(n,t){Zs(n,2.6,!0),z(jt(4.6,.5,4.6,.08),M.panel,0,.25,0,n),Ar(n,4.6,.15,0,.42,2.31),Ar(n,4.6,.15,0,.42,-2.31);let e=6.4,i=.6,s=1.6,r=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let[a,l]of r)Je(_t(a*s,.5,l*s),_t(a*i,e,l*i),.09,M.orange,n);for(let a=0;a<3;a++){let l=.5+a*(e-.5)/3,c=l+(e-.5)/3,h=s+(i-s)*(a/3),u=s+(i-s)*((a+1)/3);for(let d=0;d<4;d++){let[f,g]=r[d],[y,x]=r[(d+1)%4];Je(_t(f*h,l,g*h),_t(y*u,c,x*u),.035,M.metal,n),Je(_t(y*h,l,x*h),_t(f*u,c,g*u),.035,M.metal,n),Je(_t(f*u,c,g*u),_t(y*u,c,x*u),.04,M.metal,n)}}z(jt(1.8,.3,1.8,.05),M.dark,0,e+.1,0,n);for(let[a,l]of r)z(fe(.03,.03,.7,6),M.metal,a*.85,e+.6,l*.85,n);z(fe(.45,.45,.6,20),M.white,0,e+.55,0,n),t.light=Dt(10476799,1,n,0,e+1.1,0);let o=new wt;o.position.y=3,n.add(o),z(fe(.18,.18,4.6,16),M.chrome,0,0,0,o);for(let a=0;a<5;a++)z(new Zt(.2,.04,6,16),M.metal,0,-2+a*1,0,o,Math.PI/2,0,0);z(new ze(.3,.7,16),M.dark,0,-2.6,0,o,Math.PI,0,0),t.drill=o,z(Pn([[0,0],[.9,0],[1,.2],[1,1.8],[.8,2.1],[0,2.15]],32),M.white,2.1,.5,1.3,n),z(fe(1.01,1.01,.2,32,!0),M.orange,2.1,1.6,1.3,n),ko(n,2.1,1.2,2.31),us([_t(.3,1,.3),_t(.9,1.2,.8),_t(1.5,1.6,1.2),_t(2.1,2.7,1.3)],.08,M.metal,n),hf(n,1.2,1.25,1.1,.14,0,.6),z(jt(1.2,1,.9,.08),M.dark,-1.7,1,1.4,n),Js(n,.8,.5,-1.7,1,1.86,0,5)},greenhouse(n,t){Zs(n,5,!0),z(jt(10.4,.5,6.4,.1),M.panel,0,.25,0,n);let e=z(new te(3,3,10,40,1,!0,0,Math.PI),M.glass,0,.5,0,n,0,0,Math.PI/2);e.castShadow=!1;for(let s=0;s<9;s++)z(new Zt(3.02,.06,6,28,Math.PI),M.white,-4.8+s*1.2,.5,0,n,0,Math.PI/2,0);for(let s=1;s<6;s++){let r=s/6*Math.PI;z(fe(.035,.035,9.8,6),M.white,0,.5+Math.sin(r)*3.02,Math.cos(r)*3.02,n,0,0,Math.PI/2)}for(let s of[-1,1]){let r=z(new Ns(3,32,0,Math.PI),M.glass,s*5,.5,0,n,0,s*Math.PI/2,0);r.castShadow=!1,z(jt(.12,2.2,1.3,.04),M.white,s*5,1.6,0,n)}z(jt(.1,1.9,1,.05),M.dark,5.05,1.45,0,n);let i=zo(71);for(let s of[-1.5,0,1.5]){z(jt(9,.5,.9,.05),M.dark,0,.75,s,n),z(new Gt(8.8,.06,.8),M.soil,0,1.01,s,n);for(let r=0;r<10;r++){let o=-4.1+r*.9+(i()-.5)*.2,a=(r+Math.round(s))%3;if(a===0)for(let l=0;l<4;l++)z(new On(.22+i()*.12,0),l%2?M.leaf:M.leaf2,o+(i()-.5)*.3,1.2+i()*.25,s+(i()-.5)*.3,n).castShadow=!1;else if(a===1){z(fe(.02,.02,1.2,4),M.leaf,o,1.6,s,n);for(let l=0;l<5;l++)z(new On(.14,0),M.leaf2,o+(i()-.5)*.3,1.2+l*.22,s+(i()-.5)*.3,n).castShadow=!1;for(let l=0;l<3;l++)z(new Bt(.07,8,6),M.fruit,o+(i()-.5)*.3,1.3+i()*.8,s+(i()-.5)*.25,n)}else for(let l=0;l<6;l++){let c=z(new ze(.05,.5,4),M.leaf2,o+(i()-.5)*.25,1.25,s+(i()-.5)*.25,n,(i()-.5)*.6,0,(i()-.5)*.6);c.castShadow=!1}}}for(let s of[-.75,.75])z(jt(9,.06,.12,.02),M.growlight,0,2.7,s,n);t.light=Dt(16737996,4,n,0,2.3,0),z(Pn([[0,0],[.6,0],[.65,.1],[.65,1.5],[.5,1.7],[0,1.72]],24),M.white,-4.4,.5,3.6,n),us([_t(-4.4,1.6,3.6),_t(-4.2,1.9,3),_t(-4,1.5,2.6)],.05,M.metal,n)}});Object.assign(rs,{fabricator(n,t){Zs(n,4,!0);let e=zo(41);z(jt(7.4,.4,5.4,.08),M.panel,0,.2,0,n),z(jt(7,3.2,5,.18),M.white,0,2,0,n),z(new te(2.5,2.5,7,32,1,!1,0,Math.PI),M.panel,0,3.6,0,n,0,0,Math.PI/2).scale.set(1,1,.35);for(let o=0;o<6;o++)z(new Zt(2.52,.05,6,24,Math.PI),M.metal,-3.3+o*1.32,3.6,0,n,0,Math.PI/2,0).scale.set(1,.35,1);z(jt(7.1,.2,5.1,.05),M.orange,0,3.55,0,n),z(jt(3.4,2.7,.2,.06),M.metal,0,1.75,2.52,n);for(let o=0;o<12;o++)z(new Gt(3,.16,.05),M.dark,0,.55+o*.2,2.64,n);Ar(n,3.4,.14,0,.35,2.66);for(let o of[-1.9,1.9])Dt(16769184,.7,n,o,3,2.6);Fc(n,e,16,-3.2,3.2,.8,3,-2.5,Math.PI),Js(n,1.2,.8,2.6,1.6,2.52,0,6),Js(n,1.2,.8,-2.6,1.6,2.52,0,6),us([_t(3.5,3,-1.5),_t(4.2,2.5,-1.8),_t(4.4,1,-2),_t(4.4,.4,-2)],.1,M.metal,n);let i=new wt;i.position.set(2.2,3.85,0),n.add(i),z(fe(.45,.55,.4,24),M.dark,0,.2,0,i);let s=new wt;s.position.y=.4,s.rotation.z=.35,i.add(s),z(jt(.32,1.8,.32,.08),M.orange,0,.9,0,s),z(fe(.22,.22,.45,16),M.metal,0,1.8,0,s,Math.PI/2,0,0);let r=new wt;r.position.y=1.8,r.rotation.z=-1.4,s.add(r),z(jt(.25,1.4,.25,.06),M.orange,0,.7,0,r),z(fe(.12,.05,.35,12),M.chrome,0,1.55,0,r),t.arm=i,t.spark=Dt(16764006,1,r,0,1.8,0);for(let[o,a,l]of[[-2.6,3.4,1.1],[-1.4,3.3,.9],[-2.1,3.6,.6]])z(jt(l,l,l,.05),M.dark,o,l/2+(l<.7?1.1:0),a,n),z(new Gt(l*1.01,.06,l*1.01),M.orange,o,l*.7+(l<.7?1.1:0),a,n)},turret(n,t){Zs(n,1.8),z(Pn([[0,0],[1.9,0],[1.95,.15],[1.6,.9],[1.2,1.2],[0,1.2]],32),M.metal,0,0,0,n),df(n,1.7,.2,12,.06),z(fe(.65,.8,1.2,24),M.dark,0,1.75,0,n);let e=new wt;e.position.y=2.75,n.add(e),z(jt(1.7,1.05,2,.2),M.white,0,0,.1,e),z(jt(1.75,.18,2.05,.06),M.orange,0,.32,.1,e),z(jt(.9,.35,.6,.08),M.dark,0,.6,.4,e);for(let i of[-.42,.42]){z(fe(.16,.16,.5,16),M.dark,i,0,-.95,e,Math.PI/2,0,0),z(fe(.09,.09,1.9,16),M.metal,i,0,-1.9,e,Math.PI/2,0,0);for(let s=0;s<3;s++)z(new Zt(.11,.025,6,16),M.cyan,i,0,-1.4-s*.35,e);z(fe(.13,.11,.25,16),M.dark,i,0,-2.9,e,Math.PI/2,0,0)}z(fe(.18,.18,.1,16),M.cyan,0,.1,-.92,e,Math.PI/2,0,0),t.eye=Dt(3401471,.6,e,0,.1,-.98),Js(e,.9,.4,0,-.1,1.12,0,4),t.head=e},reactor(n,t){Zs(n,5.2),z(Pn([[0,0],[5.2,0],[5.3,.2],[5,1.3],[4.6,1.5],[0,1.5]],48),M.panel,0,0,0,n),Ar(n,2.5,.16,0,1,5.06);for(let r=0;r<16;r++){let o=r/16*Math.PI*2;Js(n,.6,.45,Math.cos(o)*5.1,.75,Math.sin(o)*5.1,-o+Math.PI/2,4)}z(new Zt(2.6,.9,24,64),M.white,0,3,0,n,Math.PI/2,0,0);for(let r=0;r<16;r++){let o=r/16*Math.PI*2,a=z(new Zt(1,.12,8,24),M.dark,Math.cos(o)*2.6,3,Math.sin(o)*2.6,n);a.rotation.y=-o}let e=z(new Bt(1.2,32,24),M.cyan,0,3,0,n);e.castShadow=!1;let i=z(new Zt(3.9,.12,10,64),M.chrome,0,3,0,n),s=z(new Zt(3.9,.12,10,64),M.chrome,0,3,0,n);s.rotation.x=Math.PI/2;for(let r=0;r<6;r++){let o=r*Math.PI/3;Je(_t(Math.cos(o)*4.6,1.5,Math.sin(o)*4.6),_t(Math.cos(o)*3.2,3,Math.sin(o)*3.2),.18,M.metal,n)}for(let r=0;r<4;r++){let o=r*Math.PI/2+Math.PI/4;z(Pn([[0,0],[.7,0],[.75,.1],[.75,4.2],[.6,4.5],[0,4.5]],24),M.white,Math.cos(o)*4.4,1.5,Math.sin(o)*4.4,n)}t.core=e,t.r1=i,t.r2=s,t.light=Dt(3401471,7,n,0,3,0)},beacon(n,t){z(Pn([[0,0],[7.4,0],[7.5,.1],[7.2,.5],[0,.5]],8),M.found,0,-.2,0,n,0,Math.PI/8,0).castShadow=!1,z(fe(7.6,7.9,4,8),M.found,0,-2.3,0,n,0,Math.PI/8,0).castShadow=!1,z(new gn(4.2,4.8,64),M.orange,0,.32,0,n,-Math.PI/2,0,0),z(new gn(5.6,5.75,64),M.white,0,.32,0,n,-Math.PI/2,0,0);let e=document.createElement("canvas");e.width=e.height=128;let i=e.getContext("2d");i.fillStyle="#e8e4dc",i.font="bold 110px sans-serif",i.textAlign="center",i.fillText("H",64,104);let s=new on(e);s.colorSpace=_e,z(new zn(3,3),new ht({map:s,transparent:!0,roughness:.8}),0,.33,0,n,-Math.PI/2,0,0),t.lights=[];for(let a=0;a<8;a++){let l=a*Math.PI/4+Math.PI/8;z(fe(.15,.2,.15,12),M.dark,Math.cos(l)*6.6,.38,Math.sin(l)*6.6,n),t.lights.push(Dt(16755251,1,n,Math.cos(l)*6.6,.55,Math.sin(l)*6.6))}let r=new wt;r.position.set(8.6,0,0),n.add(r);for(let[a,l]of[[-.35,-.35],[.35,-.35],[.35,.35],[-.35,.35]])Je(_t(a*1.6,0,l*1.6),_t(a*.5,8.5,l*.5),.05,M.metal,r);for(let a=1;a<8.5;a+=1.1){let l=1.6-a/8.5*1.1;z(new Zt(l*.5,.025,4,4),M.metal,0,a,0,r,Math.PI/2,0,Math.PI/4)}z(new Bt(.9,24,8,0,Math.PI*2,0,Math.PI/3),M.white,0,8.4,.4,r).rotation.set(-1,0,0),t.tip=Dt(16724016,1.6,r,0,9.3,0),z(jt(1.2,1,.8,.08),M.dark,-9.6,.5,4.5,n),ko(n,-9.6,.6,4.92)}});function lg(){let n=new wt,t=zo(5);z(Pn([[0,1],[2.6,1.05],[3.25,1.25],[3.35,1.45],[3.2,1.6],[0,1.6]],48),M.ablative,0,0,0,n),z(Pn([[3.05,1.6],[3,2.2],[2.75,3.4],[2.35,4.6],[1.95,5.6],[1.75,6],[0,6]],48),M.white,0,0,0,n),z(Pn([[3.02,2.05],[3.04,2.35],[2.98,2.4]],48),M.orange,0,0,0,n),z(Pn([[2,5.45],[2.02,5.6],[1.95,5.62]],48),M.orange,0,0,0,n),z(fe(1.6,1.75,.35,40),M.panel,0,6.15,0,n),z(new Zt(1.25,.12,10,40),M.metal,0,6.38,0,n,Math.PI/2,0,0),z(new Bt(1.15,32,12,0,Math.PI*2,0,Math.PI/2),M.white,0,6.35,0,n).scale.y=.6,df(n,1.45,6.34,16,.04);let e=qa(n,0,4.55,2.33,.36,0,-.33);qa(n,-.95,4.35,2.2,.26,-.42,-.33),qa(n,.95,4.35,2.2,.26,.42,-.33);let i=new wt;i.position.set(2.82,2.75,0),i.rotation.set(0,Math.PI/2,.22),n.add(i),z(jt(1.25,1.75,.14,.12),M.metal,0,0,0,i),z(jt(1.05,1.55,.1,.1),M.panel,0,0,.06,i),z(jt(.1,.45,.08,.03),M.chrome,.38,-.05,.13,i),qa(i,0,.45,.13,.15),Ar(i,1.25,.1,0,-.92,.08);for(let h=0;h<6;h++)z(jt(.9,.06,.28,.02),M.metal,3.3+h*.2,1.75-h*.29,0,n);Je(_t(3.2,1.9,-.48),_t(4.4,.1,-.48),.035,M.metal,n),Je(_t(3.2,1.9,.48),_t(4.4,.1,.48),.035,M.metal,n);for(let h=0;h<4;h++){let u=h*Math.PI/2+Math.PI/4,d=new wt;d.position.set(Math.cos(u)*2.15,5,Math.sin(u)*2.15),d.rotation.y=-u,n.add(d),z(jt(.36,.36,.36,.05),M.dark,0,0,0,d);for(let[f,g]of[[.25,0],[-.25,0],[0,.25],[0,-.25]]){let y=z(new ze(.07,.16,10,1,!0),M.metal,0,g,f,d);y.rotation.x=g?g>0?0:Math.PI:f>0?Math.PI/2:-Math.PI/2}}for(let h=0;h<4;h++){let u=h*Math.PI/2,d=z(Pn([[.18,1.05],[.22,.85],[.42,.45],[.55,.2],[.5,.2],[.38,.45],[.15,.85]],24),M.dark,Math.cos(u)*1.2,0,Math.sin(u)*1.2,n);d.material=M.metal}z(fe(.7,.9,.5,24),M.dark,0,.8,0,n);for(let h=0;h<4;h++){let u=h*Math.PI/2+Math.PI/4,d=Math.cos(u),f=Math.sin(u),g=_t(d*2.7,2.1,f*2.7),y=_t(d*3.55,1,f*3.55),x=_t(d*4.1,.18,f*4.1);Je(g,y,.11,M.white,n),z(new Bt(.15,12,8),M.metal,y.x,y.y,y.z,n),Je(y,x,.075,M.chrome,n),Je(y.clone().lerp(x,.3),y.clone().lerp(x,.3).add(_t(0,.01,0)),.1,M.metal,n),Je(_t(d*2.4,1.3,f*2.4),y.clone().lerp(x,.25),.05,M.metal,n),Je(_t(d*2.6-f*.6,1.7,f*2.6+d*.6),y,.035,M.metal,n),Je(_t(d*2.6+f*.6,1.7,f*2.6-d*.6),y,.035,M.metal,n),z(Pn([[0,0],[.55,0],[.6,.06],[.35,.2],[.1,.22],[0,.22]],24),M.metal,x.x,0,x.z,n)}z(fe(.04,.05,1.8,8),M.metal,.6,7.1,-.4,n),z(new Bt(.5,24,8,0,Math.PI*2,0,Math.PI/3.2),M.white,-.7,6.95,.3,n).rotation.set(-.8,.6,0),z(fe(.04,.04,.8,6),M.metal,-.7,6.55,.3,n),us([_t(-1.6,5.7,-1.4),_t(-2.3,4.3,-1.9),_t(-2.9,2.6,-2.1),_t(-3.05,1.7,-2.2)],.05,M.dark,n),us([_t(1.6,5.7,-1.4),_t(2.3,4.3,-1.9),_t(2.9,2.6,-2.05)],.04,M.orange,n),Fc(n,t,14,-1.2,1.2,2.4,3.6,-2.95,Math.PI);let r=document.createElement("canvas");r.width=512,r.height=96;let o=r.getContext("2d");o.clearRect(0,0,512,96),o.fillStyle="#d4581c",o.font="bold 54px sans-serif",o.textAlign="center",o.fillText("\u65B9\u821F\u4E00\u53F7 \xB7 ARK-1",256,66);let a=new on(r);a.colorSpace=_e;let l=new at(new zn(3.4,.64),new ht({map:a,transparent:!0,roughness:.6}));l.position.set(0,3.2,-2.87),l.rotation.set(.32,Math.PI,0),n.add(l);let c=Dt(6750105,1.4,n,.6,8.05,-.4);return{group:n,beacon:c,window:e}}var zc=new ht({color:2757906,roughness:.28,metalness:.7,flatShading:!0}),uf=new ht({color:2757906,roughness:.35,metalness:.7});function cg(n,t,e){let i=new wt,s=new wt;i.add(s);let r=new ht({color:2230272,emissive:t.emissive,emissiveIntensity:1.6});z(new On(.75,1),zc,0,1,.2,s).scale.set(1.05,.62,1),z(new On(.85,1),zc,0,1.1,-.85,s).scale.set(.95,.7,1.25),z(new On(.42,1),zc,0,.95,1,s).scale.set(1.1,.7,1);let c=zo(Math.floor(Math.random()*1e6)+1);for(let u=0;u<9;u++){let d=z(new mr(.22+c()*.15,0),t,(c()-.5)*.9,1.45+c()*.25,-1.1+c()*1.4,s,(c()-.5)*.8,c()*3,(c()-.5)*.8);d.scale.y=1.8+c()*1.4}for(let[u,d,f]of[[-.17,1.03,.05],[.17,1.03,.05],[-.1,1.12,.035],[.1,1.12,.035]])z(new Bt(f,10,8),e,u,d,1.36,s);for(let u of[-1,1])z(new ze(.06,.45,6),zc,u*.16,.78,1.42,s).rotation.set(Math.PI/2+.3,0,u*.35);let h=[];for(let u=0;u<6;u++){let d=u<3?-1:1,f=u%3-1,g=new wt;g.position.set(d*.62,1,f*.55+.1),s.add(g);let y=_t(0,0,0),x=_t(d*.75,.45,f*.15),m=_t(d*1.35,.1,f*.25),_=_t(d*1.55,-.98,f*.35);Je(y,x,.08,uf,g,14),Je(x,m,.065,uf,g,14),Je(m,_,.045,uf,g,14);for(let E of[x,m])z(new Bt(.09,8,6),r,E.x,E.y,E.z,g);z(new ze(.05,.18,6),t,_.x,_.y-.05,_.z,g,Math.PI,0,0),g.userData.phase=u%2*Math.PI+f*.5,g.userData.side=d,h.push(g)}return i.scale.setScalar(n),{group:i,legs:h,inner:s}}var Ke=n=>()=>tg(n)>=1,Ks=(n,t)=>({check:()=>p.stats.mined[n]>=t,prog:()=>`${Math.min(p.stats.mined[n],t)}/${t}`}),Cr=n=>({text:`\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C${Cn[n].name}\u300D`,check:()=>p.cityLevel>=n,prog:()=>`\u4EBA\u53E3 ${p.colony.pop}/${Cn[n].pop}`}),Bc=n=>({text:`\u4EBA\u53E3\u8FBE\u5230 ${n}`,check:()=>p.colony.pop>=n,prog:()=>`${p.colony.pop}/${n}`}),hg={text:"\u53D1\u5C04\u6B96\u6C11\u8230",check:()=>!!p.launched,prog:()=>"\u9760\u8FD1\u53D1\u5C04\u53F0\u6309 E"},T2=[{title:"\u7B2C\u4E00\u7AE0 \xB7 \u7740\u9646",sub:"\u6D3B\u4E0B\u53BB",goals:[{text:"\u91C7\u96C6\u94C1\u77FF",...Ks("iron",10)},{text:"\u91C7\u96C6\u7845\u6676",...Ks("silicon",6)},{text:"\u91C7\u96C6\u6C34\u51B0",...Ks("ice",6)},{text:"\u5EFA\u9020\u592A\u9633\u80FD\u9635\u5217",check:Ke("solar")},{text:"\u5EFA\u9020\u5236\u6C27\u7AD9",check:Ke("oxygen")}],radio:[["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u7740\u9646\u6210\u529F\u3002\u5916\u90E8\u6C14\u538B 0.6 \u5343\u5E15\uFF0C\u6C14\u6E29\u96F6\u4E0B 63 \u6444\u6C0F\u5EA6\u3002\u6B22\u8FCE\u6765\u5230\u706B\u661F\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u65B9\u821F\u4E00\u53F7\uFF0C\u8FD9\u91CC\u662F\u5730\u7403\u8054\u5408\u6307\u6325\u4E2D\u5FC3\u3002\u542C\u5230\u8BF7\u56DE\u7B54\u2026\u2026\u5F88\u597D\u3002\u4F60\u662F\u7B2C\u4E00\u4E2A\u8E0F\u4E0A\u8FD9\u7247\u571F\u5730\u7684\u4EBA\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u7740\u9646\u8231\u53EA\u80FD\u5728\u5B83\u5468\u56F4\u5F88\u5C0F\u7684\u8303\u56F4\u5185\u7ED9\u4F60\u8865\u6C27\u3002\u6309\u4F4F\u5DE6\u952E\u7528\u91C7\u77FF\u6FC0\u5149\u91C7\u96C6\u94C1\u77FF\u3001\u7845\u6676\u548C\u6C34\u51B0\uFF0C\u7136\u540E\u6309 B \u5EFA\u8D77\u7B2C\u4E00\u5EA7\u5236\u6C27\u7AD9\u3002"]]},{title:"\u7B2C\u4E8C\u7AE0 \xB7 \u7B2C\u4E00\u4E2A\u5BB6",sub:"\u4E3A\u540E\u6765\u7684\u4EBA\u70B9\u4E00\u76CF\u706F",goals:[{text:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",check:Ke("habitat")},{text:"\u5EFA\u9020\u6E29\u5BA4",check:Ke("greenhouse")},{text:"\u5EFA\u9020\u6C34\u51B0\u63D0\u53D6\u5668",check:Ke("extractor")},{text:"\u5EFA\u9020\u7740\u9646\u573A",check:Ke("beacon")},{text:"\u8FCE\u63A5\u7B2C\u4E00\u6279\u79FB\u6C11",check:()=>p.stats.arrived>=1,prog:()=>p.colony.support>0?"\u7B49\u5F85\u98DE\u8239":"\u9700\u8981\u4F4F\u623F/\u6C27/\u6C34/\u98DF\u7269/\u7535"}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5236\u6C27\u7AD9\u8FD0\u8F6C\u6B63\u5E38\uFF01\u5B83\u5468\u56F4 14 \u7C73\u90FD\u80FD\u7ED9\u5B87\u822A\u670D\u8865\u6C27\uFF0C\u4F60\u53EF\u4EE5\u8D70\u5F97\u66F4\u8FDC\u4E86\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5730\u7403\u4E0A\u6709\u5341\u4E07\u4EBA\u62A5\u540D\u4E86\u79FB\u6C11\u8BA1\u5212\u3002\u5EFA\u597D\u7A79\u9876\u3001\u6E29\u5BA4\u3001\u6C34\u6E90\u548C\u7740\u9646\u573A\u2014\u2014\u7ED9\u4ED6\u4EEC\u4E00\u4E2A\u53EF\u4EE5\u56DE\u7684\u5BB6\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u63D0\u793A\uFF1A\u592A\u9633\u80FD\u5728\u591C\u95F4\u53EA\u5269\u56DB\u6210\u529F\u7387\u3002\u591A\u5EFA\u51E0\u5EA7\uFF0C\u6B96\u6C11\u5730\u624D\u4E0D\u4F1A\u5728\u591C\u91CC\u65AD\u7535\u3002"]]},{title:"\u7B2C\u4E09\u7AE0 \xB7 \u957F\u591C",sub:"\u5B88\u62A4\u6211\u4EEC\u7684\u4EBA",goals:[{text:"\u5EFA\u9020\u5236\u9020\u5DE5\u574A",check:Ke("fabricator")},{text:"\u5236\u9020\u7B49\u79BB\u5B50\u6B65\u67AA",check:()=>!!p.upgrades.rifle},{text:"\u5EFA\u9020\u9632\u5FA1\u70AE\u5854",check:Ke("turret")},{text:"\u51FB\u9000\u9508\u8680\u86DB",check:()=>p.stats.kills>=6,prog:()=>`${Math.min(p.stats.kills,6)}/6`}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u2026\u2026\u7B2C\u4E00\u6279\u79FB\u6C11\u5B89\u5168\u7740\u9646\u4E86\u3002\u6211\u8FD9\u8FB9\u7684\u63A7\u5236\u5BA4\u91CC\uFF0C\u6240\u6709\u4EBA\u90FD\u7AD9\u8D77\u6765\u9F13\u638C\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u5730\u8D28\u96F7\u8FBE\u5728\u591C\u95F4\u63A2\u6D4B\u5230\u5927\u91CF\u5730\u4E0B\u79FB\u52A8\u4FE1\u53F7\u3002\u5B83\u4EEC\u4F3C\u4E4E\u88AB\u6B96\u6C11\u5730\u7684\u70ED\u91CF\u5438\u5F15\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5EFA\u4E00\u5EA7\u5236\u9020\u5DE5\u574A\uFF0C\u9020\u6B66\u5668\uFF0C\u5EFA\u70AE\u5854\u3002\u5B88\u4F4F\u5927\u5BB6\u3002"]]},{title:"\u7B2C\u56DB\u7AE0 \xB7 \u624E\u6839",sub:"\u8BA9\u706F\u706B\u5F7B\u591C\u4E0D\u7184",goals:[{text:"\u6B96\u6C11\u5730\u4EBA\u53E3\u8FBE\u5230 12",check:()=>p.colony.pop>=12,prog:()=>`${p.colony.pop}/12`},{text:"\u91C7\u96C6\u949B\u77FF",...Ks("titanium",12)},{text:"\u5EFA\u9020\u805A\u53D8\u53CD\u5E94\u5806",check:Ke("reactor")}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u4F60\u4EEC\u6491\u8FC7\u4E86\u957F\u591C\u3002\u73B0\u5728\uFF0C\u662F\u65F6\u5019\u8BA9\u6B96\u6C11\u5730\u771F\u6B63\u624E\u6839\u4E86\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5728\u8FDC\u65B9\u7684\u7D2B\u8272\u6676\u4F53\u77FF\u8109\u4E2D\u68C0\u6D4B\u5230\u9AD8\u7EAF\u5EA6\u949B\u3002\u6CE8\u610F\uFF1A\u90A3\u91CC\u6709\u4F53\u578B\u66F4\u5927\u7684\u9508\u8680\u86DB\u5B88\u536B\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u63D0\u793A\uFF1A\u5728\u5236\u9020\u5DE5\u574A\u53EF\u4EE5\u9020\u55B7\u6C14\u80CC\u5305\u548C\u5927\u5BB9\u91CF\u6C27\u6C14\u7F50\uFF0C\u9002\u5408\u957F\u9014\u52D8\u63A2\u3002"]]},{title:"\u7B2C\u4E94\u7AE0 \xB7 \u65B0\u5BB6\u56ED",sub:"\u6B64\u5FC3\u5B89\u5904\u662F\u543E\u4E61",goals:[{text:"\u5EFA\u9020\u5927\u6C14\u6539\u9020\u5854",check:Ke("terraformer")},{text:"\u6B96\u6C11\u5730\u4EBA\u53E3\u8FBE\u5230 20",check:()=>p.colony.pop>=20,prog:()=>`${p.colony.pop}/20`},{text:"\u5B8C\u6210\u5927\u6C14\u6539\u9020",check:()=>p.terraform>=1&&p.ended&&!p.endingShown,prog:()=>`${Math.floor(p.terraform*100)}%`}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u805A\u53D8\u53CD\u5E94\u5806\u70B9\u706B\u6210\u529F\u3002\u6B96\u6C11\u5730\u7B2C\u4E00\u6B21\u5728\u591C\u91CC\u4E5F\u706F\u706B\u901A\u660E\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u6700\u540E\u4E00\u6B65\u4E86\u3002\u5927\u6C14\u6539\u9020\u5854\u2014\u2014\u5B83\u8981\u51E0\u5341\u5E74\u624D\u80FD\u5F7B\u5E95\u6539\u53D8\u706B\u661F\u3002\u4F46\u7B2C\u4E00\u573A\u96E8\uFF0C\u4E5F\u8BB8\u5C31\u5728\u660E\u5929\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u63D0\u793A\uFF1A\u57CE\u5E02\u7B49\u7EA7\u63D0\u5347\u540E\u9886\u5730\u4F1A\u6269\u5927\uFF0C\u5E76\u89E3\u9501\u516C\u5BD3\u5854\u3001\u5782\u76F4\u519C\u573A\u3001\u751F\u6001\u4E2D\u67A2\u3002"]]},{title:"\u7B2C\u516D\u7AE0 \xB7 \u661F\u8FB0\u5927\u6D77",sub:"\u4E0B\u4E00\u9897\u661F\u7403",goals:[Cr(5),{text:"\u5EFA\u9020\u661F\u9645\u53D1\u5C04\u53F0",check:Ke("launch")},hg],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u706B\u661F\u5DF2\u7ECF\u662F\u5BB6\u4E86\u3002\u4F46\u4EBA\u7C7B\u7684\u6545\u4E8B\uFF0C\u4ECE\u6765\u4E0D\u6B62\u4E8E\u4E00\u4E2A\u5BB6\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u6728\u536B\u4E8C\xB7\u6B27\u7F57\u5DF4\uFF1A\u51B0\u58F3\u4E4B\u4E0B\u63A2\u6D4B\u5230\u6DB2\u6001\u6D77\u6D0B\u3002\u628A\u706B\u661F\u53D1\u5C55\u6210\u300C\u661F\u6E2F\u300D\uFF0C\u5C31\u80FD\u5EFA\u9020\u661F\u9645\u53D1\u5C04\u53F0\u3002"]]}],A2=[{title:"\u7B2C\u4E00\u7AE0 \xB7 \u51B0\u539F",sub:"\u5728\u6728\u661F\u7684\u6CE8\u89C6\u4E0B",goals:[{text:"\u91C7\u96C6\u6C34\u51B0",...Ks("ice",15)},{text:"\u91C7\u96C6\u94C1\u77FF",...Ks("iron",10)},{text:"\u5EFA\u9020\u5236\u6C27\u7AD9",check:Ke("oxygen")},{text:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",check:Ke("habitat")},{text:"\u5EFA\u9020\u7740\u9646\u573A",check:Ke("beacon")}],radio:[["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u7740\u9646\u6210\u529F\u3002\u8868\u9762\u6E29\u5EA6\u96F6\u4E0B 160 \u6444\u6C0F\u5EA6\u3002\u91CD\u529B\u53EA\u6709\u5730\u7403\u7684\u4E03\u5206\u4E4B\u4E00\u3002"],["\u706B\u661F\u6B96\u6C11\u5730 \xB7 \u6797\u6653","\u4F60\u5230\u4E86\u5417\uFF1F\u6211\u4EEC\u5728\u706B\u661F\u4E0A\u770B\u5F97\u89C1\u6728\u661F\u7684\u5149\u70B9\u3002\u66FF\u6211\u4EEC\u770B\u4E00\u773C\u5B83\u7684\u5927\u7EA2\u6591\u5427\u3002"],["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u6CE8\u610F\uFF1A\u8FD9\u91CC\u79BB\u592A\u9633\u592A\u8FDC\uFF0C\u592A\u9633\u80FD\u6548\u7387\u53EA\u6709\u706B\u661F\u7684\u4E00\u534A\u3002\u6240\u6709\u6280\u672F\u5DF2\u4ECE\u706B\u661F\u540C\u6B65\u3002"]]},{title:"\u7B2C\u4E8C\u7AE0 \xB7 \u51B0\u4E0B\u4E4B\u57CE",sub:"\u6D77\u6D0B\u4E4B\u4E0A\u7684\u706F\u706B",goals:[Bc(8),Cr(2),{text:"\u5EFA\u9020\u805A\u53D8\u53CD\u5E94\u5806",check:Ke("reactor")}],radio:[["\u5468\u9752\u79BE \xB7 \u6C34\u6587\u5B66\u5BB6","\u51B0\u5C42\u4E0B\u7684\u6D77\u6D0B\u6BD4\u5730\u7403\u6240\u6709\u6D77\u6D0B\u52A0\u8D77\u6765\u8FD8\u591A\u3002\u6709\u6C34\uFF0C\u5C31\u6709\u751F\u547D\u3002"],["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u51B0\u88C2\u7F1D\u91CC\u6709\u4E1C\u897F\u5728\u79FB\u52A8\u3002\u5B83\u4EEC\u548C\u706B\u661F\u7684\u9508\u8680\u86DB\u5F88\u50CF\u2026\u2026\u4F46\u662F\u84DD\u8272\u7684\u3002"]]},{title:"\u7B2C\u4E09\u7AE0 \xB7 \u6DF1\u6E0A\u4E4B\u5149",sub:"\u57CE\u5E02\u5728\u51B0\u539F\u4E0A\u751F\u957F",goals:[Cr(3),Bc(24),{text:"\u5EFA\u9020\u751F\u6001\u4E2D\u67A2",check:Ke("lifehub")}],radio:[["Elena Petrova \xB7 \u5929\u6587\u5B66\u5BB6","\u4F60\u77E5\u9053\u5417\uFF1F\u4ECE\u8FD9\u91CC\u770B\uFF0C\u592A\u9633\u53EA\u662F\u4E00\u9897\u7279\u522B\u4EAE\u7684\u661F\u661F\u3002"]]},{title:"\u7B2C\u56DB\u7AE0 \xB7 \u4E0B\u4E00\u7AD9",sub:"\u4E00\u5343\u4E8C\u767E\u5149\u5E74",goals:[Cr(4),{text:"\u5EFA\u9020\u661F\u9645\u53D1\u5C04\u53F0",check:Ke("launch")},hg],radio:[["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u5F00\u666E\u52D2-442b\uFF1A\u4F4D\u4E8E\u5B9C\u5C45\u5E26\u7684\u7C7B\u5730\u884C\u661F\uFF0C\u8DDD\u79BB\u4E00\u5343\u4E8C\u767E\u5149\u5E74\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u8FD9\u5C06\u662F\u4EBA\u7C7B\u7B2C\u4E00\u6B21\u79BB\u5F00\u592A\u9633\u7CFB\u3002\u6211\u8001\u4E86\uFF0C\u7B49\u4E0D\u5230\u4F60\u4EEC\u62B5\u8FBE\u7684\u90A3\u5929\u3002\u4F46\u6211\u4F1A\u4E00\u76F4\u770B\u7740\u661F\u7A7A\u3002"]]}],R2=[{title:"\u7B2C\u4E00\u7AE0 \xB7 \u53CC\u65E5\u4E4B\u4E0B",sub:"\u53E6\u4E00\u9897\u6052\u661F\u7684\u6668\u5149",goals:[{text:"\u91C7\u96C6\u94C1\u77FF",...Ks("iron",15)},{text:"\u91C7\u96C6\u7845\u6676",...Ks("silicon",10)},{text:"\u5EFA\u9020\u5236\u6C27\u7AD9",check:Ke("oxygen")},{text:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",check:Ke("habitat")},{text:"\u5EFA\u9020\u7740\u9646\u573A",check:Ke("beacon")}],radio:[["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u51B7\u51BB\u4F11\u7720\u7ED3\u675F\u3002\u5F53\u524D\u65E5\u671F\uFF1A\u516C\u5143 2401 \u5E74\u3002\u6B22\u8FCE\u6765\u5230\u5F00\u666E\u52D2-442b\u3002"],["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u5927\u6C14\u542B\u6C27 14%\uFF0C\u8FD8\u4E0D\u591F\u547C\u5438\uFF0C\u4F46\u5DF2\u7ECF\u975E\u5E38\u63A5\u8FD1\u4E86\u3002\u8FD9\u91CC\u7684\u91CD\u529B\u6BD4\u5730\u7403\u7565\u5927\u3002"]]},{title:"\u7B2C\u4E8C\u7AE0 \xB7 \u5F02\u661F\u68EE\u6797",sub:"\u4F1A\u53D1\u5149\u7684\u6811",goals:[Bc(10),Cr(2),{text:"\u5EFA\u9020\u805A\u53D8\u53CD\u5E94\u5806",check:Ke("reactor")}],radio:[["Aiko Sato \u7684\u540E\u4EE3 \xB7 \u751F\u7269\u5B66\u5BB6","\u90A3\u4E9B\u4F1E\u83C7\u6811\u5728\u591C\u91CC\u4F1A\u53D1\u5149\u3002\u6211\u7684\u66FE\u66FE\u7956\u6BCD\u4E00\u5B9A\u4F1A\u559C\u6B22\u8FD9\u91CC\u3002"],["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u68EE\u6797\u4E2D\u7684\u63A0\u98DF\u8005\u4F1A\u5728\u591C\u95F4\u51FA\u6CA1\u3002"]]},{title:"\u7B2C\u4E09\u7AE0 \xB7 \u6587\u660E",sub:"\u57CE\u5E02\u8FDE\u6210\u4E86\u661F\u6CB3",goals:[Cr(4),Bc(36),{text:"\u5EFA\u9020\u751F\u6001\u4E2D\u67A2",check:Ke("lifehub")}],radio:[["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u6765\u81EA\u706B\u661F\u548C\u6B27\u7F57\u5DF4\u7684\u4FE1\u53F7\u5DF2\u7ECF\u62B5\u8FBE\u2014\u2014\u5B83\u4EEC\u5728\u4E00\u5343\u4E8C\u767E\u5E74\u524D\u53D1\u51FA\u3002\u4E24\u5EA7\u57CE\u5E02\u90FD\u8FD8\u4EAE\u7740\u3002"]]},{title:"\u7EC8\u7AE0 \xB7 \u661F\u9645\u6587\u660E",sub:"\u4E09\u9897\u661F\u7403\uFF0C\u4E00\u4E2A\u4EBA\u7C7B",goals:[Cr(5),{text:"\u5EFA\u9020\u6587\u660E\u7EAA\u5FF5\u7891",check:Ke("monument")}],radio:[["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u5EFA\u4E00\u5EA7\u7EAA\u5FF5\u7891\u5427\u3002\u732E\u7ED9\u7B2C\u4E00\u4E2A\u8E0F\u4E0A\u706B\u661F\u7684\u4EBA\u2014\u2014\u4E5F\u5C31\u662F\u4F60\u3002"]]}],ti=le==="europa"?A2:le==="kepler"?R2:T2,ug=le==="mars"?2:1,Oo={rifle:{name:"\u7B49\u79BB\u5B50\u6B65\u67AA",icon:"rifle",cost:{iron:18,silicon:12},desc:"\u6309 2 \u5207\u6362\u3002\u6D88\u8017\u80FD\u91CF\u53D1\u5C04\u7B49\u79BB\u5B50\u5F39\u3002"},tank:{name:"\u5927\u5BB9\u91CF\u6C27\u6C14\u7F50",icon:"tank",cost:{iron:12,ice:10},desc:"\u5B87\u822A\u670D\u6C27\u6C14\u4E0A\u9650 100 \u2192 180\u3002"},rover:{name:"\u52A0\u538B\u6F2B\u6E38\u8F66",icon:"rover",cost:{iron:35,silicon:20,ice:5},desc:"\u5728\u5DE5\u574A\u65C1\u51FA\u5382\u3002\u6309 E \u4E0A\u8F66\uFF0CShift \u52A0\u901F\u3002\u8F66\u8231\u5185\u81EA\u52A8\u8865\u6C27\uFF0C\u8FD8\u80FD\u649E\u98DE\u9508\u8680\u86DB\u3002"},scanner:{name:"\u5730\u8D28\u626B\u63CF\u4EEA",icon:"scanner",cost:{iron:8,silicon:10},desc:"\u5C0F\u5730\u56FE\u8303\u56F4\u6269\u5927\uFF0C\u7F57\u76D8\u6807\u51FA\u6700\u8FD1\u7684\u949B\u77FF\u3002"},jetpack:{name:"\u55B7\u6C14\u80CC\u5305",icon:"jet",cost:{iron:20,silicon:15,titanium:4},desc:"\u7A7A\u4E2D\u6309\u4F4F\u7A7A\u683C\u98DE\u884C\uFF0C\u6D88\u8017\u80FD\u91CF\u3002"},overclock:{name:"\u6FC0\u5149\u8D85\u9891",icon:"bolt2",cost:{silicon:20,titanium:3},desc:"\u91C7\u77FF\u901F\u5EA6 \xD72\uFF0C\u6FC0\u5149\u4F24\u5BB3\u63D0\u5347\u3002"},armor:{name:"\u590D\u5408\u88C5\u7532",icon:"armor",cost:{iron:30,titanium:6},desc:"\u751F\u547D\u4E0A\u9650 150\uFF0C\u53D7\u5230\u4F24\u5BB3 -40%\u3002"},rifle2:{name:"\u805A\u7126\u7EBF\u5708",icon:"focus",cost:{silicon:18,titanium:6},need:"rifle",desc:"\u7B49\u79BB\u5B50\u6B65\u67AA\u4F24\u5BB3 +60%\u3002"}},mf=[],Fo=null,ff=0;function $e(n,t){mf.push([n,t])}function dg(){return Fo}var pf=0,Rr=200,ds="calm",Oc=0,gf=!1;function fg(n){if(Fo&&(ff-=n,ff<=0&&(Fo=null)),!Fo&&mf.length&&(Fo=mf.shift(),ff=3.5+Fo[1].length*.11,et.play("radio")),pf-=n,pf<=0&&p.chapter<ti.length){pf=.5;let i=ti[p.chapter];p.goalDone=p.goalDone||{};let s=!0;i.goals.forEach((r,o)=>{let a=p.chapter+":"+o;r.check()&&!p.goalDone[a]&&(p.goalDone[a]=!0,et.play("objective"),p.events.emit("toast",`\u2713 ${r.text}`)),p.goalDone[a]||(s=!1)}),s&&p.chapter<ti.length-1&&Ya(p.chapter+1)}p.buildings.find(i=>i.type==="terraformer"&&i.powered)&&p.terraform<1&&(p.terraform=Math.min(1,p.terraform+n/300),p.terraform>=1&&!gf&&(gf=!0,p.events.emit("ending"))),p.raining=(p.terraform>=1||le==="kepler")&&Math.sin(p.time.t*Math.PI*4+p.time.day*1.7)>.45,ut.storms&&p.time.day>=2&&p.terraform<.7&&(Rr-=n,ds==="calm"&&Rr<=0&&p.time.night<.5?(ds="warn",Rr=25,$e("\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u6C99\u5C18\u66B4\u5C06\u5728 25 \u79D2\u540E\u62B5\u8FBE\u3002\u80FD\u89C1\u5EA6\u4F1A\u6025\u5267\u4E0B\u964D\uFF0C\u6C27\u6C14\u6D88\u8017\u52A0\u5FEB\u3002\u9760\u8FD1\u751F\u547D\u7EF4\u6301\u8BBE\u65BD\u3002")):ds==="warn"&&Rr<=0?(ds="storm",Oc=70+Math.random()*40):ds==="storm"&&(Oc-=n,Oc<=0&&(ds="calm",Rr=360+Math.random()*300,$e("\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u6C99\u5C18\u66B4\u5DF2\u8FC7\u5883\u3002"))));let e=ds==="storm"?1:0;p.storm+=(e-p.storm)*Math.min(1,n*.25),p.storm<.001&&(p.storm=0)}function Ya(n,t=!1){p.chapter=n;let e=ti[n];t||(et.play("chapter"),p.events.emit("chapter",e),e.radio.forEach(i=>$e(i[0],i[1])))}function pg(){return{phase:ds,t:Rr,left:Oc}}function mg(n){n&&(ds=n.phase==="storm"?"calm":n.phase,Rr=n.t??200)}function gg(n){gf=n}var Gc=[],C2={player:6743807,turret:16756800};function Wc(n,t,e,i){let s=Dt(C2[i],i==="player"?1.1:.9,p.scene);s.position.copy(n),Gc.push({pos:n.clone(),vel:t.clone().multiplyScalar(i==="player"?110:80),life:1.4,dmg:e,owner:i,s})}function P2(n,t=0){for(let e of p.enemies){if(e.dead)continue;let i=1.3*e.scale+t,s=n.x-e.pos.x,r=n.y-(e.pos.y+1*e.scale),o=n.z-e.pos.z;if(s*s+r*r+o*o<i*i)return e}return null}function vg(n){for(let t=Gc.length-1;t>=0;t--){let e=Gc[t];e.life-=n;let i=e.life<=0,s=3;for(let r=0;r<s&&!i;r++){e.pos.addScaledVector(e.vel,n/s);let o=P2(e.pos);o?(Za(o,e.dmg,e.owner),vt.spark(e.pos,[.5,.9,1],10,6),i=!0):e.pos.y<yt(e.pos.x,e.pos.z)&&(vt.spark(e.pos,[1,.7,.4],6,4),vt.dustPuff(e.pos,3,.5),i=!0)}e.s.position.copy(e.pos),Math.random()<.8&&vt.trail(e.pos,e.owner==="player"?[.3,.8,1]:[1,.6,.2],.6),i&&(p.scene.remove(e.s),Gc.splice(t,1))}}function xf(n,t,e=!1,i=!1){let s=i?3.4:e?1.35:.85+Math.random()*.35,r=cg(s,Gd.crystal,Gd.eye),o=yt(n,t);r.group.position.set(n,o,t),p.scene.add(r.group);let a=i?1300+p.time.day*40:e?90:36+p.time.day*3,l={...r,pos:r.group.position,hp:a,maxHp:a,scale:s,guardian:e,home:e?new T(n,o,t):null,boss:i,stomp:4,awake:!e,speed:i?3.4:(e?5.2:4.4)+Math.random()*1.2,phase:Math.random()*6,atk:0,flash:0,sink:0,target:null,retarget:0};return p.enemies.push(l),l}function Za(n,t,e){n.dead||(n.hp-=t,n.flash=.12,n.awake=!0,e==="player"&&et.play("hit"),n.hp<=0&&I2(n,e))}function I2(n,t){n.dead=!0;let e=n.pos.clone();if(e.y+=1,vt.burst(e,[1,.4,.1],50,9),vt.dustPuff(e,12,2),vt.debris(e,n.legs[0].children[0].material,6,5,.45*n.scale),vt.debris(e,n.inner.children[1].material,8,6,.5*n.scale),et.play("kill"),p.scene.remove(n.group),p.stats.kills++,n.guardian&&(p.stats.guardKills=(p.stats.guardKills||0)+1),n.boss){p.stats.bossKills=(p.stats.bossKills||0)+1,p.res.titanium+=40,p.res.silicon+=40,p.events.emit("pickup",{type:"titanium",n:40,note:"\u6676\u6BCD\u6838\u5FC3"}),p.events.emit("bossDown"),vt.burst(e,[1,.5,.15],200,20),vt.ring(new T(n.pos.x,n.pos.y,n.pos.z),4,120,[1,.5,.2]),vt.debris(e,n.inner.children[1].material,30,12,1.4),et.play("rumble");return}let i=n.guardian?3:Math.random()<.5?1:0;i&&(p.res.titanium+=i,p.stats.mined.titanium+=i,p.events.emit("pickup",{type:"titanium",n:i,note:"\u6676\u4F53\u6B8B\u9AB8"}))}var yf=0,Pr=0,xg=!1,vf=5,Vc=-1;function _g(){return p.enemies.find(n=>n.boss&&!n.dead)}function yg(){if(!p.buildings.length)return new T(0,0,0);let n=new T;for(let t of p.buildings)n.x+=t.x,n.z+=t.z;return n.multiplyScalar(1/p.buildings.length)}function Mg(n){let t=p.player.pos,e=p.time.night>.6,i=p.chapter>=ug&&p.terraform<1;if(e&&!xg&&i){Pr=Math.min(3+(p.nightsSurvived||0)*2+Math.floor(p.colony.pop/4),26);let r=(p.nightsSurvived||0)%4===3;r&&(Pr=Math.min(Math.round(Pr*1.8),40),Vc=25),p.nightsSurvived=(p.nightsSurvived||0)+1,p.events.emit(r?"tide":"nightfall",Pr)}if(xg=e,Vc>0&&e&&(Vc-=n,Vc<=0)){let r=yg(),o=Math.random()*Math.PI*2,a=We.clamp(r.x+Math.cos(o)*130,-Kt+180,Kt-180),l=We.clamp(r.z+Math.sin(o)*130,-Kt+180,Kt-180),c=xf(a,l,!1,!0);c.sink=-6,vt.ring(new T(a,yt(a,l),l),6,140),vt.dustPuff(new T(a,yt(a,l),l),60,12),et.play("rumble"),p.events.emit("bossSpawn")}if(e&&i&&Pr>0&&(yf-=n,yf<=0)){yf=3+Math.random()*5;let r=yg(),o=Math.min(Pr,1+Math.floor(Math.random()*3)),a=Math.random()*Math.PI*2,l=110+Math.random()*50;for(let c=0;c<o;c++){let h=We.clamp(r.x+Math.cos(a)*l+(Math.random()-.5)*10,-Kt+180,Kt-180),u=We.clamp(r.z+Math.sin(a)*l+(Math.random()-.5)*10,-Kt+180,Kt-180),d=xf(h,u);d.sink=-2,vt.dustPuff(new T(h,yt(h,u),u),14,3)}Pr-=o}if(vf-=n,vf<=0){vf=30;for(let r of p.nodes){if(r.type!=="titanium"||Math.hypot(r.x-t.x,r.z-t.z)<90)continue;if(!p.enemies.some(a=>a.guardian&&!a.dead&&a.home.distanceTo(r.mesh.position)<25)&&p.terraform<1){let a=Math.random()*6.28;xf(r.x+Math.cos(a)*6,r.z+Math.sin(a)*6,!0)}}}let s=performance.now()*.001;for(let r=p.enemies.length-1;r>=0;r--){let o=p.enemies[r];if(o.dead){p.enemies.splice(r,1);continue}if(!o.guardian&&(p.time.night<.3||p.terraform>=1)){o.sink-=n*1.5,o.group.position.y=yt(o.pos.x,o.pos.z)+o.sink,o.sink<-3&&(p.scene.remove(o.group),p.enemies.splice(r,1));continue}o.sink<0&&(o.sink=Math.min(0,o.sink+n*1.5));let a=Math.hypot(t.x-o.pos.x,t.z-o.pos.z);if(o.retarget-=n,o.retarget<=0)if(o.retarget=1,o.target=null,o.guardian)a<22&&(o.awake=!0),o.awake&&a<70&&!p.player.dead?o.target={kind:"player"}:(o.awake=!1,o.target={kind:"home"});else if(a<32&&!p.player.dead)o.target={kind:"player"};else{let m=null,_=400;for(let E of p.buildings){if(E.type==="lamp"||E.broken)continue;let v=Math.hypot(E.x-o.pos.x,E.z-o.pos.z)-E.def.r;v<_&&(_=v,m=E)}o.target=m?{kind:"building",b:m}:{kind:"player"}}let l=t.x,c=t.z,h=1.8*o.scale,u=o.target;if(u?.kind==="building"){if(!p.buildings.includes(u.b)||u.b.broken){o.retarget=0;continue}l=u.b.x,c=u.b.z,h=u.b.def.r*.9+1.4}else u?.kind==="home"&&(l=o.home.x,c=o.home.z,h=2);let d=l-o.pos.x,f=c-o.pos.z,g=Math.hypot(d,f),y=!1;if(g>h){d/=g,f/=g;for(let E of p.enemies){if(E===o)continue;let v=o.pos.x-E.pos.x,I=o.pos.z-E.pos.z,R=Math.hypot(v,I);R<2.5&&R>.01&&(d+=v/R*.6,f+=I/R*.6)}let m=Math.hypot(d,f)||1,_=o.speed*(o.target?.kind==="home"?.5:1);o.pos.x+=d/m*_*n,o.pos.z+=f/m*_*n;for(let E of p.colliders.query(o.pos.x,o.pos.z)){if(E.kind!=="building")continue;let v=o.pos.x-E.x,I=o.pos.z-E.z,R=Math.hypot(v,I),P=E.r+.8;R<P&&R>.01&&(o.pos.x=E.x+v/R*P,o.pos.z=E.z+I/R*P)}o.group.rotation.y=Math.atan2(d,f),y=!0}else u&&u.kind!=="home"&&(o.group.rotation.y=Math.atan2(d,f),o.atk-=n,o.atk<=0&&(o.atk=1,u.kind==="player"?p.player.damage(o.boss?30:o.guardian?14:9,o.pos):(u.b.hp-=o.boss?70:o.guardian?20:8,vt.spark(new T(o.pos.x,o.pos.y+1,o.pos.z),[1,.5,.2],8,5),u.b.hp<=0&&(u.b.hp=0,u.b.broken=!0,o.retarget=0,p.events.emit("broken",u.b),hs())),o.inner.position.z=.6));if(o.boss){o.stomp-=n;let m=Math.hypot(t.x-o.pos.x,t.z-o.pos.z);o.stomp<=0&&m<22&&(o.stomp=4.5,vt.ring(new T(o.pos.x,o.pos.y,o.pos.z),3,100,[.9,.45,.25]),et.play("rumble"),p.player.landDip=Math.max(p.player.landDip,.35),m<13&&!p.driving&&(p.player.damage(18,o.pos),p.player.vel.y=4,p.player.vel.x+=(t.x-o.pos.x)/m*8,p.player.vel.z+=(t.z-o.pos.z)/m*8))}o.inner.position.z*=.85,o.pos.y=yt(o.pos.x,o.pos.z)+o.sink;let x=s*(y?12:2)+o.phase;for(let m of o.legs)m.rotation.x=Math.sin(x+m.userData.phase)*(y?.5:.08),m.rotation.z=Math.max(0,Math.cos(x+m.userData.phase))*.25*m.userData.side*(y?1:0);o.inner.position.y=Math.abs(Math.sin(x))*.08,o.flash>0?(o.flash-=n,o.inner.scale.setScalar(1+o.flash*1.2)):o.inner.scale.setScalar(1),Math.random()<n*4&&vt.trail(new T(o.pos.x,o.pos.y+1.6*o.scale,o.pos.z),[1,.35,.1],.8)}}function Bo(n,t,e){let i=null,s=e,r=new T;for(let o of p.enemies){if(o.dead)continue;let a=1.3*o.scale;r.set(o.pos.x-n.x,o.pos.y+1*o.scale-n.y,o.pos.z-n.z);let l=r.dot(t);if(l<0)continue;let c=r.lengthSq()-l*l;if(c>a*a)continue;let h=l-Math.sqrt(a*a-c);h<s&&(s=h,i=o)}return i?{e:i,dist:s}:null}var lt={keys:new Set,mouse:[!1,!1,!1],dx:0,dy:0,wheel:0,pressed:new Set,clicked:[!1,!1,!1],sens:.0022,down(n){return this.keys.has(n)},hit(n){return this.pressed.has(n)},endFrame(){this.pressed.clear(),this.dx=0,this.dy=0,this.wheel=0,this.clicked=[!1,!1,!1]}};function Eg(n){window.addEventListener("keydown",t=>{t.code==="Tab"&&t.preventDefault(),lt.keys.has(t.code)||lt.pressed.add(t.code),lt.keys.add(t.code)}),window.addEventListener("keyup",t=>lt.keys.delete(t.code)),window.addEventListener("blur",()=>{lt.keys.clear(),lt.mouse=[!1,!1,!1]}),window.addEventListener("mousemove",t=>{p.locked&&(lt.dx+=t.movementX||0,lt.dy+=t.movementY||0)}),n.addEventListener("mousedown",t=>{p.locked&&(lt.mouse[t.button]=!0,lt.clicked[t.button]=!0)}),window.addEventListener("mouseup",t=>{lt.mouse[t.button]=!1}),window.addEventListener("wheel",t=>{p.locked&&(lt.wheel+=Math.sign(t.deltaY))},{passive:!0}),window.addEventListener("contextmenu",t=>t.preventDefault())}var L2=ut.gravity,bg=1.7,pe=new T(-6,0,-6),Xc=class{constructor(t){this.cam=t,this.pos=new T(0,0,6),this.pos.y=yt(this.pos.x,this.pos.z),this.vel=new T,this.yaw=Math.PI*.85,this.pitch=-.05,this.onGround=!0,this.maxHealth=100,this.health=100,this.maxO2=100,this.o2=100,this.energy=100,this.bob=0,this.stepT=0,this.landDip=0,this.dead=!1,this.hurtT=0,this.flashlight=!1,this.inLife=!1,this.alarmT=0,this.lastHitDir=0,this.moving=!1,this.sprinting=!1,this.jetting=!1,this.roll=0,this.fwd=new T}get eye(){return new T(this.pos.x,this.pos.y+bg+this.bobY,this.pos.z)}damage(t,e){if(this.dead)return;let i=p.upgrades.armor?.6:1;this.health-=t*i,this.hurtT=.5,e&&(this.lastHitDir=Math.atan2(e.x-this.pos.x,e.z-this.pos.z)),et.play("hurt"),this.health<=0&&this.die("\u4F60\u5012\u5728\u4E86\u706B\u661F\u7684\u5C18\u571F\u91CC")}die(t){this.dead||(this.dead=!0,this.health=0,p.events.emit("death",t))}respawn(){let t=p.buildings.find(i=>i.type==="habitat")||null,e=t?new T(t.x,0,t.z+9):pe.clone().add(new T(5,0,8));for(let i in p.res)p.res[i]=Math.floor(p.res[i]*.75);this.pos.set(e.x,yt(e.x,e.z),e.z),this.vel.set(0,0,0),this.health=this.maxHealth,this.o2=this.maxO2,this.energy=100,this.dead=!1}update(t){if(this.maxO2=p.upgrades.tank?180:100,this.maxHealth=p.upgrades.armor?150:100,this.dead){this.cam.position.y-=t*.3;return}p.locked&&(this.yaw-=lt.dx*lt.sens,this.pitch=We.clamp(this.pitch-lt.dy*lt.sens,-1.5,1.5));let e=0,i=0;p.menuOpen||((lt.down("KeyW")||lt.down("ArrowUp"))&&(i-=1),(lt.down("KeyS")||lt.down("ArrowDown"))&&(i+=1),(lt.down("KeyA")||lt.down("ArrowLeft"))&&(e-=1),(lt.down("KeyD")||lt.down("ArrowRight"))&&(e+=1));let s=Math.hypot(e,i);this.moving=s>0,this.sprinting=this.moving&&lt.down("ShiftLeft")&&i<0&&this.o2>5;let r=this.sprinting?10.5:6.2,o=Math.sin(this.yaw),a=Math.cos(this.yaw),l=0,c=0;if(s){let _=e/s,E=i/s;l=_*a+E*o,c=-_*o+E*a}let h=this.onGround?12:2.5;if(this.vel.x+=(l*r-this.vel.x)*Math.min(1,h*t),this.vel.z+=(c*r-this.vel.z)*Math.min(1,h*t),this.jetting=!1,!p.menuOpen&&lt.hit("Space")&&this.onGround)this.vel.y=5.4,this.onGround=!1,et.play("jump");else if(!p.menuOpen&&lt.down("Space")&&!this.onGround&&p.upgrades.jetpack&&this.energy>1&&this.vel.y<6){this.vel.y+=15*t,this.energy-=22*t,this.jetting=!0,Math.random()<.5&&et.play("jet");let _=new T(this.pos.x+o*.4,this.pos.y+.8,this.pos.z+a*.4);vt.flame(_),vt.flame(_)}this.vel.y-=L2*t;let u=this.pos.x+this.vel.x*t,d=this.pos.z+this.vel.z*t;this.pos.x=We.clamp(u,-Kt+120,Kt-120),this.pos.z=We.clamp(d,-Kt+120,Kt-120),this.pos.y+=this.vel.y*t;for(let _ of p.colliders.query(this.pos.x,this.pos.z)){let E=this.pos.x-_.x,v=this.pos.z-_.z,I=Math.hypot(E,v),R=_.r+.45;if(I<R&&I>1e-4){if(_.kind==="rock"&&this.pos.y>yt(_.x,_.z)+_.r*.6)continue;this.pos.x=_.x+E/I*R,this.pos.z=_.z+v/I*R}}let f=yt(this.pos.x,this.pos.z);this.pos.y<=f?(!this.onGround&&this.vel.y<-4&&(this.landDip=Math.min(.35,-this.vel.y*.04),et.play("land"),vt.dustPuff(this.pos,6,1)),this.pos.y=f,this.vel.y=0,this.onGround=!0):this.onGround&&this.pos.y-f<.5&&this.vel.y<=0?(this.pos.y=f,this.vel.y=0):this.onGround=!1;let g=Math.hypot(this.vel.x,this.vel.z);this.onGround&&g>.5&&(this.bob+=t*g*1.25,this.stepT+=t*g,this.stepT>2.6&&(this.stepT=0,et.play("step"),Math.random()<.4&&vt.dustPuff(this.pos,2,.4))),this.landDip*=Math.pow(.002,t),this.bobY=Math.sin(this.bob*2)*.05*Math.min(1,g/6)-this.landDip,this.cam.position.set(this.pos.x,this.pos.y+bg+this.bobY,this.pos.z),this.roll+=(-e*.025-this.roll)*Math.min(1,t*6);let y=(p.baseFov||72)+(this.sprinting?8:0)+(this.jetting?4:0);Math.abs(this.cam.fov-y)>.05&&(this.cam.fov+=(y-this.cam.fov)*Math.min(1,t*5),this.cam.updateProjectionMatrix()),this.cam.rotation.set(this.pitch,this.yaw,this.roll+Math.sin(this.bob)*.006*Math.min(1,g/6),"YXZ"),this.cam.getWorldDirection(this.fwd);let x=eg(this.pos),m=this.pos.distanceTo(pe)<11;if(this.inLife=!!x||m,this.inLife)this.o2=Math.min(this.maxO2,this.o2+30*t),this.health=Math.min(this.maxHealth,this.health+4*t);else{let _=.55+(this.sprinting?.6:0)+(this.jetting?.6:0);_*=1+p.storm*.8,p.terraform>=1&&(_*=.5),this.o2=Math.max(0,this.o2-_*t)}this.o2<=0&&(this.health-=9*t,this.health<=0&&this.die("\u6C27\u6C14\u8017\u5C3D")),this.o2<this.maxO2*.2&&!this.inLife&&(this.alarmT-=t,this.alarmT<=0&&(this.alarmT=2,et.play("alarm"))),this.jetting||(this.energy=Math.min(100,this.energy+(this.onGround?14:4)*t)),this.hurtT=Math.max(0,this.hurtT-t),this.health=Math.min(this.health,this.maxHealth)}};var Qs=[{id:"laser",name:"\u91C7\u77FF\u6FC0\u5149",icon:"laser"},{id:"rifle",name:"\u7B49\u79BB\u5B50\u6B65\u67AA",icon:"rifle",need:"rifle"},{id:"build",name:"\u5EFA\u9020",icon:"build"}],en={index:0,get id(){return Qs[this.index].id}},vi,D2=0,Ir=null,Ef,fs,Ja,js={},ps,ms,Xo,Wo,Ka,wg=new T(.24,-.22,-.85);function Ag(n){fs=new Ai,Ja=new sn(n.fov,n.aspect,.01,10),fs.add(new Hs(16769224,4202520,1.4));let t=new Ci(16777215,1.5);t.position.set(1,2,1),fs.add(t),fs.userData.dl=t;let e=(v,I,R,P,L,S)=>{let b=new at(v,I);return b.position.set(R,P,L),S.add(b),b},i=new Ci(8965375,1.2);i.position.set(-2,1,2),fs.add(i);let s=(v,I,R,P=20)=>{let L=new ns(v.map(([S,b])=>new nt(S,b)),P);return L.rotateX(-Math.PI/2),e(L,I,0,0,0,R)},r=new ht({color:15262940,roughness:.35,metalness:.15}),o=new ht({color:2764083,roughness:.45,metalness:.7}),a=new ht({color:16742954,roughness:.4,metalness:.2});Ef=new ht({color:3346688,emissive:16747056,emissiveIntensity:1.2});let l=new ht({color:8755,emissive:4515583,emissiveIntensity:1.5}),c=(v,I,R,P,L,S,b)=>{let D=e(new te(v,v,I,16),R,P,L,S,b);return D.rotation.x=Math.PI/2,D},h=new wt;s([[0,-.12],[.04,-.12],[.056,-.08],[.058,.18],[.05,.26],[.036,.3],[.03,.36],[0,.36]],r,h),c(.06,.02,a,0,0,-.02,h),c(.06,.012,a,0,0,.1,h),c(.045,.06,o,0,0,.1+.04,h);for(let v=0;v<3;v++){let I=e(new Zt(.034-v*.003,.007,8,20),Ef,0,0,-.33-v*.035,h)}c(.018,.14,o,0,0,-.38,h);let u=e(new Bt(.02,12,8),new ne({color:16760960}),0,0,-.455,h);e(new Gt(.018,.016,.2),o,0,.062,-.05,h),c(.026,.17,a,.06,-.02,-.02,h),e(new Gt(.032,.07,.045),o,0,-.075,.02,h).rotation.x=.3,e(new Gt(.03,.02,.07),o,0,-.05,.02,h);let d=e(new zn(.04,.025),new ne({color:6743807}),-.0585,.012,.04,h);d.rotation.y=-Math.PI/2,h.userData.tip=u;let f=new wt;s([[0,-.2],[.04,-.2],[.055,-.15],[.055,.2],[.048,.28],[0,.28]],r,f),c(.035,.32,o,0,0,-.36,f);for(let v=0;v<4;v++)e(new Zt(.046,.009,8,20),l,0,0,-.27-v*.065,f);c(.05,.03,a,0,0,-.18,f),c(.022,.16,o,0,.075,-.02,f),e(new te(.023,.023,.005,12),l,0,.075,-.1,f).rotation.x=Math.PI/2,e(new Gt(.032,.07,.045),o,0,-.075,0,f).rotation.x=.3,e(new Gt(.035,.09,.05),l,0,-.08,-.06,f);let g=new wt;e(new Gt(.32,.22,.018),o,0,0,0,g),e(new Gt(.33,.012,.022),a,0,.112,0,g);let y=document.createElement("canvas");y.width=256,y.height=176;let x=y.getContext("2d");x.fillStyle="#06222e",x.fillRect(0,0,256,176),x.strokeStyle="rgba(127,230,255,.25)";for(let v=0;v<256;v+=16)x.beginPath(),x.moveTo(v,0),x.lineTo(v,176),x.stroke();for(let v=0;v<176;v+=16)x.beginPath(),x.moveTo(0,v),x.lineTo(256,v),x.stroke();x.strokeStyle="#7fe6ff",x.lineWidth=2,x.beginPath(),x.arc(128,110,50,Math.PI,0),x.lineTo(178,140),x.lineTo(78,140),x.closePath(),x.stroke(),x.fillStyle="#7fe6ff",x.font="bold 14px sans-serif",x.fillText("BLUEPRINT",12,22);let m=new on(y);m.colorSpace=_e;let _=e(new zn(.29,.195),new ne({map:m,transparent:!0,opacity:.95}),0,-.004,.01,g);g.userData.scr=_,g.rotation.set(-.5,.25,0),js={laser:h,rifle:f,build:g};for(let v in js)js[v].scale.setScalar(v==="build"?.45:.6),js[v].visible=!1,fs.add(js[v]);let E=new te(1,1,1,8,1,!0);E.translate(0,.5,0),ps=new at(E,new ne({color:16773328,transparent:!0,opacity:.95,blending:Me,depthWrite:!1})),ms=new at(E,new ne({color:16740384,transparent:!0,opacity:.45,blending:Me,depthWrite:!1})),ps.visible=ms.visible=!1,ps.frustumCulled=ms.frustumCulled=!1,p.scene.add(ps,ms),Xo=Dt(16748608,1.6,p.scene),Xo.visible=!1,vi=new ks(16747072,0,6,2),p.scene.add(vi),Ka=Dt(6743807,.35,fs),Ka.visible=!1,Wo=new vo(16773853,0,70,.42,.45,1.2),n.add(Wo),Wo.position.set(.3,-.2,0),Wo.target.position.set(0,0,-10),n.add(Wo.target),p.scene.add(n)}function $c(n){let t=Qs[n];if(t.need&&!p.upgrades[t.need]){p.events.emit("toast",`\u5C1A\u672A\u5236\u9020\uFF1A${t.name}\uFF08\u5728\u5236\u9020\u5DE5\u574A\u5236\u4F5C\uFF09`),et.play("deny");return}en.index===n&&t.id!=="build"||(en.index=n,et.play("ui"),t.id==="build"?p.events.emit("openBuild"):Tr(null))}var Vo=0,_f=0,Go=0,Mf=0,qc=0,Sg=-1,U2=new T,N2=new T(0,1,0),$o=new T;function Tg(n,t,e){let i=null,s=e;for(let r of p.nodes){let o=r.mesh.scale.x,a=1.5*o+.3;$o.set(r.x-n.x,r.y+.7*o-n.y,r.z-n.z);let l=$o.dot(t);if(l<0||l>e+a)continue;let c=$o.lengthSq()-l*l;if(c>a*a)continue;let h=l-Math.sqrt(a*a-c);h<s&&(s=Math.max(.3,h),i=r)}return i?{n:i,dist:s}:null}function H2(n,t,e){let i=null,s=e;for(let r of p.buildings){let o=Math.max(1.2,r.def.r);$o.set(r.x-n.x,r.y+Math.min(o,3)*.6-n.y,r.z-n.z);let a=$o.dot(t);if(a<0)continue;let l=$o.lengthSq()-a*a;if(l>o*o)continue;let c=a-Math.sqrt(o*o-l);c<s&&(s=c,i=r)}return i}function Rg(n,t,e){let i=en.id;Sg!==en.index&&(qc=1,Sg=en.index),qc=Math.max(0,qc-n*4);for(let f in js)js[f].visible=f===i;let s=js[i],r=Math.hypot(t.vel.x,t.vel.z),o=Math.sin(t.bob)*.012*Math.min(1,r/6),a=Math.abs(Math.cos(t.bob))*.012*Math.min(1,r/6);Go*=Math.pow(1e-4,n);let l=i==="build"?[.2,-.24,-.6]:[.24,-.22,-.58];s.position.set(l[0]+o,l[1]+a-qc*.3-(t.sprinting?.04:0),l[2]+Go*.08),s.rotation.x=(i==="build"?-.5:0)+Go*.15+(t.sprinting?-.25:0),i==="build"&&(s.userData.scr.material.opacity=.6+Math.sin(performance.now()*.005)*.2),Ja.aspect=e.aspect,Ja.fov=e.fov,Ja.updateProjectionMatrix();let c=.4+(1-p.time.night)*1.2;fs.userData.dl.intensity=c,lt.hit("KeyF")&&!p.menuOpen&&(t.flashlight=!t.flashlight,et.play("ui")),Wo.intensity=t.flashlight?60:0;let h=e.position,u=t.fwd;if(p.lookBuilding=p.menuOpen?null:H2(h,u,14),p.aimNode=i==="laser"&&!!Tg(h,u,9),!p.menuOpen&&!t.dead&&!p.photo){if(lt.hit("Digit1")&&$c(0),lt.hit("Digit2")&&$c(1),(lt.hit("Digit3")||lt.hit("KeyB"))&&$c(2),lt.wheel&&en.id!=="build"){let f=en.index;for(let g=0;g<2&&(f=(f+(lt.wheel>0?1:2))%2,!(!Qs[f].need||p.upgrades[Qs[f].need]));g++);f!==en.index&&$c(f)}en.id==="build"&&Ee.type&&lt.wheel&&(Ee.rot+=lt.wheel*.3)}ps.visible=ms.visible=Xo.visible=!1,D2-=n,vi.intensity=Math.max(0,vi.intensity-n*120),Ir&&(Ir.mesh.position.set(Ir.x,Ir.y,Ir.z),Ir=null),Ka.visible=!1,_f-=n;let d=lt.mouse[0]&&!p.menuOpen&&!t.dead&&p.locked;if(Ef.emissiveIntensity=i==="laser"&&d?3+Math.random()*1.5:1+Math.sin(performance.now()*.003)*.3,i==="laser")if(d){let g=Tg(h,u,9),y=Bo(h,u,9),x=Sc(h,u,9),m=9,_=null;x&&x.dist<m&&(m=x.dist,_="ground"),g&&g.dist<=m&&(m=g.dist,_="node"),y&&y.dist<m&&(m=y.dist,_="enemy");let E=U2.copy(h).addScaledVector(u,m),v=e.localToWorld(wg.clone()),I=E.clone().sub(v),R=I.length();I.normalize();let P=new rn().setFromUnitVectors(N2,I),L=1+Math.sin(performance.now()*.05)*.2;if(ps.position.copy(v),ps.quaternion.copy(P),ps.scale.set(.012*L,R,.012*L),ms.position.copy(v),ms.quaternion.copy(P),ms.scale.set(.04*L,R,.04*L),ps.visible=ms.visible=!0,Xo.position.copy(E),Xo.visible=!0,Xo.scale.setScalar(1.2+Math.random()*.8),Go=Math.max(Go,.15+Math.random()*.1),vi.position.copy(E).addScaledVector(u,-.6),vi.color.setRGB(1,.55,.25),vi.intensity=5+Math.random()*4,_==="node"){let S=g.n;for(vi.color.setRGB(...ls[S.type]),Ir=S,S.mesh.position.set(S.x+(Math.random()-.5)*.07,S.y+(Math.random()-.5)*.05,S.z+(Math.random()-.5)*.07),Math.random()<.15&&vt.dustPuff(E,1,.4),Vo+=n*3.2*(p.upgrades.overclock?2:1),Math.random()<.7&&vt.spark(E,ls[S.type],2,5,.4),Mf-=n,Mf<=0&&(Mf=.09,et.play("mine"));Vo>=1&&p.nodes.includes(S);)if(Vo-=1,p.res[S.type]++,p.stats.mined[S.type]++,S.meteor&&(p.stats.meteorMined=(p.stats.meteorMined||0)+1),p.events.emit("pickup",{type:S.type,n:1}),Dc(S,1)){et.play("deplete"),Vo=0;break}}else _==="enemy"?(Za(y.e,16*n*(p.upgrades.overclock?1.5:1),"laser"),Math.random()<.5&&vt.spark(E,[1,.5,.2],3,5)):_==="ground"&&(Math.random()<.3&&vt.spark(E,[1,.6,.3],1,3),Math.random()<.1&&vt.dustPuff(E,1,.3));et.laser(!0)}else et.laser(!1),Vo=Math.min(Vo,.9);else et.laser(!1);if(i==="rifle"&&d&&_f<=0)if(t.energy>=5){_f=.16,t.energy-=5,Go=1;let f=e.localToWorld(wg.clone()),g=Bo(h,u,200),y=Sc(h,u,200),x=200;y&&(x=y.dist),g&&g.dist<x&&(x=g.dist);let _=h.clone().addScaledVector(u,x).sub(f).normalize();Wc(f,_,p.upgrades.rifle2?30:19,"player"),et.play("shoot"),Ka.visible=!0,Ka.position.set(.24,-.21,-.86),vi.position.copy(f),vi.color.setRGB(.4,.9,1),vi.intensity=12}else lt.clicked[0]&&(et.play("deny"),p.events.emit("toast","\u80FD\u91CF\u4E0D\u8DB3"));if(i==="build"){let f=!p.menuOpen&&Ee.type?Sc(h,u,40):null;if(ig(f?f.point:null,t.pos),!p.menuOpen&&Ee.type&&(lt.hit("KeyR")&&(Ee.rot+=Math.PI/4),lt.clicked[0]))if(Ee.valid){let g=sg();g&&p.events.emit("built",g)}else et.play("deny"),p.events.emit("toast",Ee.reason);lt.clicked[2]&&(Tr(null),en.index=0,et.play("ui"))}}function Cg(n){p.player.dead||p.driving||p.photo||(n.autoClear=!1,n.clearDepth(),n.render(fs,Ja),n.autoClear=!0)}var qo=[["\u6797\u6653","\u690D\u7269\u5B66\u5BB6","\u6211\u4ECE\u4E91\u5357\u5E26\u6765\u4E86\u4E00\u5305\u8336\u6811\u79CD\u5B50\u3002\u603B\u6709\u4E00\u5929\uFF0C\u706B\u661F\u4E0A\u4E5F\u80FD\u6CE1\u4E00\u58F6\u70ED\u8336\u3002"],["Amara Okafor","\u533B\u751F","\u5728\u5730\u7403\u4E0A\uFF0C\u6211\u6551\u8FC7\u5F88\u591A\u4EBA\u3002\u5728\u8FD9\u91CC\uFF0C\u6211\u60F3\u770B\u7740\u5B69\u5B50\u4EEC\u5E73\u5B89\u957F\u5927\u3002"],["\u9648\u9ED8","\u5DE5\u7A0B\u5E08","\u8FD9\u91CC\u7684\u6BCF\u4E00\u9897\u87BA\u4E1D\uFF0C\u90FD\u662F\u6211\u4EEC\u4EB2\u624B\u62E7\u4E0A\u53BB\u7684\u3002"],["Mateo Silva","\u5730\u8D28\u5B66\u5BB6","\u4F60\u770B\u89C1\u90A3\u4E9B\u5CA9\u5C42\u4E86\u5417\uFF1F\u5B83\u4EEC\u6BD4\u4EBA\u7C7B\u7684\u5386\u53F2\u8FD8\u8981\u53E4\u8001\u56DB\u5341\u4EBF\u5E74\u3002"],["\u82CF\u5FF5","\u6559\u5E08",'\u6211\u7684\u7B2C\u4E00\u5802\u8BFE\uFF0C\u5C31\u53EB"\u6211\u4EEC\u4E3A\u4EC0\u4E48\u6765\u5230\u706B\u661F"\u3002'],["Yuki Tanaka","\u98DE\u884C\u5458","\u4ECE\u8F68\u9053\u4E0A\u770B\uFF0C\u4F60\u4EEC\u7684\u706F\u5149\u50CF\u662F\u7EA2\u8272\u6C99\u6F20\u91CC\u7684\u4E00\u4E32\u73CD\u73E0\u3002"],["\u738B\u5927\u5C71","\u53A8\u5E08","\u6E29\u5BA4\u91CC\u7684\u7B2C\u4E00\u6279\u571F\u8C46\uFF0C\u6211\u505A\u4E86\u4E00\u9505\u571F\u8C46\u7096\u83DC\u3002\u5927\u5BB6\u90FD\u54ED\u4E86\u3002"],["Elena Petrova","\u5929\u6587\u5B66\u5BB6","\u665A\u4E0A\u62AC\u5934\uFF0C\u90A3\u9897\u6700\u4EAE\u7684\u84DD\u661F\uFF0C\u5C31\u662F\u5730\u7403\u3002"],["\u8D75\u5C0F\u96E8","\u5B66\u751F","\u6211\u5341\u516D\u5C81\u3002\u6211\u4F1A\u662F\u7B2C\u4E00\u4EE3\u5728\u706B\u661F\u957F\u5927\u7684\u4EBA\u3002"],["Kwame Mensah","\u7535\u5DE5","\u53EA\u8981\u706F\u8FD8\u4EAE\u7740\uFF0C\u8FD9\u91CC\u5C31\u662F\u5BB6\u3002"],["\u5468\u9752\u79BE","\u6C34\u6587\u5B66\u5BB6","\u51B0\u5C42\u4E0B\u9762\u6709\u6C34\u3002\u6709\u6C34\uFF0C\u5C31\u6709\u751F\u547D\u3002"],["Priya Sharma","\u7A0B\u5E8F\u5458","\u6211\u5199\u7684\u4EE3\u7801\u5728\u63A7\u5236\u5236\u6C27\u7AD9\u3002\u522B\u62C5\u5FC3\uFF0C\u6211\u6D4B\u8BD5\u8FC7\u4E09\u5343\u904D\u4E86\u3002"],["\u674E\u957F\u98CE","\u8001\u5175","\u6211\u5E74\u8F7B\u65F6\u5B88\u8FC7\u8FB9\u7586\u3002\u73B0\u5728\uFF0C\u6211\u5B88\u7740\u4EBA\u7C7B\u7684\u65B0\u8FB9\u7586\u3002"],["Sofia Rossi","\u5EFA\u7B51\u5E08","\u7A79\u9876\u7684\u5F27\u5EA6\uFF0C\u662F\u6211\u7167\u7740\u6545\u4E61\u6559\u5802\u7684\u5706\u9876\u753B\u7684\u3002"],["\u4F55\u5B89","\u62A4\u58EB","\u60F3\u5BB6\u7684\u65F6\u5019\uFF0C\u6211\u5C31\u53BB\u6E29\u5BA4\u91CC\u95FB\u95FB\u6CE5\u571F\u7684\u5473\u9053\u3002"],["Jonas Berg","\u673A\u68B0\u5E08","\u706B\u661F\u7684\u6C99\u5B50\u4F1A\u94BB\u8FDB\u4EFB\u4F55\u7F1D\u9699\u3002\u4F46\u6211\u4EEC\u6BD4\u6C99\u5B50\u66F4\u56FA\u6267\u3002"],["\u9A6C\u6674","\u8BB0\u8005","\u6211\u8981\u8BB0\u5F55\u4E0B\u8FD9\u4E00\u5207\u3002\u51E0\u767E\u5E74\u540E\u7684\u4EBA\u4F1A\u60F3\u77E5\u9053\uFF0C\u6700\u521D\u662F\u600E\u6837\u7684\u3002"],["Omar Haddad","\u519C\u5B66\u5BB6","\u6211\u7956\u7236\u5728\u6C99\u6F20\u91CC\u79CD\u51FA\u4E86\u6930\u67A3\u3002\u6211\u8981\u5728\u706B\u661F\u79CD\u51FA\u68EE\u6797\u3002"],["\u5434\u6850","\u753B\u5BB6","\u706B\u661F\u7684\u65E5\u843D\u662F\u84DD\u8272\u7684\u3002\u5730\u7403\u4E0A\u6CA1\u6709\u4EBA\u4F1A\u76F8\u4FE1\u3002"],["Grace Kim","\u5FC3\u7406\u533B\u751F","\u79BB\u5BB6\u5F88\u8FDC\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5F7C\u6B64\u5C31\u662F\u5BB6\u3002"],["\u90ED\u8FDC","\u7236\u4EB2","\u6211\u5973\u513F\u5728\u98DE\u8239\u4E0A\u51FA\u751F\u3002\u5979\u7684\u51FA\u751F\u8BC1\u660E\u4E0A\u5199\u7740\uFF1A\u51FA\u751F\u5730\uFF0C\u661F\u9645\u7A7A\u95F4\u3002"],["Lucas Moreau","\u97F3\u4E50\u5BB6","\u6211\u5E26\u4E86\u4E00\u628A\u5409\u4ED6\u3002\u4ECA\u665A\u7A79\u9876\u91CC\u6709\u97F3\u4E50\u4F1A\uFF0C\u4F60\u6765\u5417\uFF1F"],["\u94B1\u591A\u591A","\u4F1A\u8BA1","\u6211\u7B97\u8FC7\u4E86\uFF1A\u7167\u8FD9\u4E2A\u901F\u5EA6\uFF0C\u4E8C\u5341\u5E74\u540E\u8FD9\u91CC\u4F1A\u6709\u4E00\u5EA7\u57CE\u5E02\u3002"],["Aiko Sato","\u751F\u7269\u5B66\u5BB6","\u90A3\u4E9B\u9508\u8680\u86DB\u2026\u2026\u4E5F\u8BB8\u5B83\u4EEC\u53EA\u662F\u5728\u4FDD\u62A4\u81EA\u5DF1\u7684\u5BB6\u56ED\u3002"],["\u9093\u5353","\u77FF\u5DE5","\u949B\u77FF\u91CC\u85CF\u7740\u706B\u661F\u7684\u5FC3\u8DF3\u3002"],["Nadia Volkova","\u6C14\u8C61\u5B66\u5BB6","\u5927\u6C14\u6539\u9020\u5854\u542F\u52A8\u540E\uFF0C\u4E5F\u8BB8\u6211\u4EEC\u80FD\u770B\u89C1\u706B\u661F\u4E0A\u7684\u7B2C\u4E00\u7247\u4E91\u3002"],["\u9EC4\u4E00\u9E23","\u673A\u5668\u4EBA\u4E13\u5BB6","\u673A\u5668\u53EF\u4EE5\u66FF\u6211\u4EEC\u5E72\u6D3B\uFF0C\u4F46\u53EA\u6709\u4EBA\uFF0C\u624D\u80FD\u628A\u4E00\u4E2A\u5730\u65B9\u53D8\u6210\u5BB6\u3002"],["Samuel Okoro","\u7267\u5E08","\u65E0\u8BBA\u5728\u54EA\u9897\u661F\u7403\u4E0A\uFF0C\u6211\u4EEC\u90FD\u4F1A\u4E3A\u65B0\u751F\u7684\u5B69\u5B50\u795D\u798F\u3002"],["\u53F6\u77E5\u79CB","\u8BD7\u4EBA",'"\u6B64\u5FC3\u5B89\u5904\u662F\u543E\u4E61\u3002"\u2014\u2014\u82CF\u8F7C\u3002\u6211\u60F3\uFF0C\u4ED6\u8BF4\u5F97\u5BF9\u3002'],["Hannah Weber","\u7269\u7406\u5B66\u5BB6","\u805A\u53D8\u53CD\u5E94\u5806\u7684\u5149\uFF0C\u548C\u592A\u9633\u662F\u540C\u4E00\u79CD\u5149\u3002"],["\u5C0F\u6EE1","\u5B69\u5B50","\u53D4\u53D4\uFF0C\u5730\u7403\u662F\u4EC0\u4E48\u6837\u5B50\u7684\uFF1F"],["Diego Ram\xEDrez","\u767B\u5C71\u5BB6","\u5965\u6797\u5E15\u65AF\u5C71\u6709\u4E24\u4E07\u7C73\u9AD8\u3002\u603B\u6709\u4E00\u5929\u6211\u8981\u7AD9\u4E0A\u53BB\u3002"]],Yc=0;function Pg(n,t,e){let i=e?.idx??Yc++,s=qo[i%qo.length],r=um(i);r.group.position.set(n,yt(n,t),t),p.scene.add(r.group);let o={...r,idx:i,name:s[0]+(i>=qo.length?` ${Math.floor(i/qo.length)+1}\u4E16`:""),job:s[1],line:s[2],pos:r.group.position,target:null,wait:Math.random()*3,phase:Math.random()*6,talked:0};return p.colonists.push(o),o}function k2(n){let t=p.buildings.filter(o=>o.type!=="lamp");if(!t.length)return new T(n.pos.x+(Math.random()-.5)*10,0,n.pos.z+(Math.random()-.5)*10);let e=t;if(p.time.night>.5){let o=t.filter(l=>l.type==="plaza"&&l.powered);if(o.length&&Math.random()<.85){let l=o[n.idx%o.length],c=n.idx*2.399%(Math.PI*2),h=2.8+n.idx%3*.9;return n.atPlaza=l,new T(l.x+Math.cos(c)*h,0,l.z+Math.sin(c)*h)}let a=t.filter(l=>l.type==="habitat"||l.type==="apartment");a.length&&(e=a)}n.atPlaza=null;let i=e[Math.floor(Math.random()*e.length)],s=Math.random()*Math.PI*2,r=i.def.r+1.5+Math.random()*5;return new T(i.x+Math.cos(s)*r,0,i.z+Math.sin(s)*r)}var ja=null,bf=25;function z2(n,t){let e=hm();e.group.userData.shuttle=!0,e.group.position.set(n.x,n.y+260,n.z),p.scene.add(e.group),ja={...e,pad:n,n:t,t:0,phase:"descend"},et.play("rumble"),p.events.emit("shuttleIncoming",t)}function Ig(n){let t=p.colony;if(p.popTotal=Math.max(p.popTotal||0,p.colonists.length),t.pop=p.popTotal,t.pop)for(p._work=(p._work||0)+n*t.pop*.04;p._work>=1;){p._work-=1;let r=Math.random()<.55?"iron":Math.random()<.6?"silicon":"ice";p.res[r]++}let e=p.buildings.filter(r=>r.type==="beacon"&&r.powered),i=t.support-t.pop;!ja&&e.length&&i>0&&!p.ended&&(bf-=n,bf<=0&&(bf=Math.max(20,50/e.length),z2(e[Math.floor(Math.random()*e.length)],Math.min(i,4+(p.cityLevel||0)*2)))),ja&&F2(n);let s=performance.now()*.001;for(let r of p.colonists){r.target||(r.wait-=n,r.wait<=0&&(r.target=k2(r)));let o=!1;if(r.target){let h=r.target.x-r.pos.x,u=r.target.z-r.pos.z,d=Math.hypot(h,u);if(d<.6)r.target=null,r.wait=3+Math.random()*8;else{r.pos.x+=h/d*1.7*n,r.pos.z+=u/d*1.7*n;for(let g of p.colliders.query(r.pos.x,r.pos.z)){if(g.kind!=="building")continue;let y=r.pos.x-g.x,x=r.pos.z-g.z,m=Math.hypot(y,x),_=g.r+.4;m<_&&m>.01&&(r.pos.x=g.x+y/m*_,r.pos.z=g.z+x/m*_)}r.group.rotation.y=Math.atan2(h,u),o=!0}}let a=Math.hypot(p.player.pos.x-r.pos.x,p.player.pos.z-r.pos.z);a<4&&!o?r.group.rotation.y=Math.atan2(p.player.pos.x-r.pos.x,p.player.pos.z-r.pos.z):!o&&r.atPlaza&&(r.group.rotation.y=Math.atan2(r.atPlaza.x-r.pos.x,r.atPlaza.z-r.pos.z),r.wait=Math.max(r.wait,2),p.time.night<.3&&(r.wait=0)),r.pos.y=yt(r.pos.x,r.pos.z);let l=s*7+r.phase,c=o?Math.sin(l)*.6:0;r.legL.rotation.x=c,r.legR.rotation.x=-c,r.armL.rotation.x=-c*.8,r.armR.rotation.x=c*.8,!o&&a<4&&(r.armR.rotation.x=-2.6+Math.sin(s*6)*.3),r.body.position.y=.72+(o?Math.abs(Math.sin(l))*.04:0),r.talked=Math.max(0,r.talked-n)}}function F2(n){let t=ja;t.t+=n;let e=t.pad,i=t.group;if(t.phase==="descend"){let s=Math.min(1,t.t/11),r=1-Math.pow(1-s,3);i.position.y=e.y+.6+260*(1-r),t.flame.scale.set(1,.6+(1-r)*1.2+Math.random()*.2,1);for(let o=0;o<3;o++)vt.flame(i.position);s>.85&&Math.random()<.5&&vt.dustPuff(new T(e.x,e.y,e.z),4,10),s>=1&&(t.phase="landed",t.t=0,vt.ring(new T(e.x,e.y,e.z),3,80),t.flame.visible=!1,t.flameGlow.visible=!1)}else if(t.phase==="landed"){if(t.total=t.total||t.n,t.n>0&&t.t>2+(t.total-t.n)*.6){let s;p.colonists.length<40?(s=Pg(e.x+(Math.random()-.5)*2,e.z+3),s.target=new T(e.x+(Math.random()-.5)*20,0,e.z+10+Math.random()*8)):s={name:qo[Yc++%qo.length][0]},t.n--,t.arrived=(t.arrived||[]).concat([s]),p.popTotal=(p.popTotal||0)+1,p.stats.arrived++}t.n<=0&&t.t>7&&(t.phase="ascend",t.t=0,t.flame.visible=!0,t.flameGlow.visible=!0,et.play("rumble"),p.events.emit("colonistsArrived",t.arrived||[]))}else if(t.phase==="ascend"){i.position.y+=n*(5+t.t*12);for(let s=0;s<3;s++)vt.flame(i.position);t.t<1.5&&vt.dustPuff(new T(e.x,e.y,e.z),3,10),t.t>12&&(p.scene.remove(i),ja=null)}}var wf=new T;function Lg(n,t){let e=null,i=6;for(let s of p.colonists){wf.set(s.pos.x-n.x,s.pos.y+1.1-n.y,s.pos.z-n.z);let r=wf.dot(t);r<0||r>i||wf.lengthSq()-r*r<.8*.8&&(i=r,e=s)}return e}function Dg(){return p.colonists.map(n=>[n.idx,+n.pos.x.toFixed(1),+n.pos.z.toFixed(1)])}function Ug(n){for(let[t,e,i]of n)Pg(e,i,{idx:t});Yc=Math.max(Yc,...n.map(t=>t[0]+1),0)}var O2={iron:'<path d="M12 2.5l8.2 4.75v9.5L12 21.5l-8.2-4.75v-9.5z"/><path d="M12 2.5v19M3.8 7.25l16.4 9.5M20.2 7.25L3.8 16.75" opacity=".35"/>',silicon:'<path d="M12 2l7 10-7 10-7-10z"/><path d="M5 12h14M12 2v20" opacity=".35"/>',ice:'<path d="M12 2v20M3.3 7l17.4 10M20.7 7L3.3 17"/><path d="M9.5 3.5L12 6l2.5-2.5M9.5 20.5L12 18l2.5 2.5"/>',titanium:'<path d="M12 2l2.6 7.4L22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6z"/>',power:'<path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H12z"/>',pop:'<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.6 2.7-6 6-6s6 2.4 6 6"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 14.4c3 .1 5.5 2.2 5.5 5.6"/>',house:'<path d="M3 20h18M5 20V10l7-6 7 6v10"/><path d="M10 20v-5h4v5"/>',o2:'<circle cx="9" cy="12" r="5.5"/><path d="M17 15.5c0-1.4 2.6-1.6 2.6-3 0-.9-.7-1.5-1.6-1.5S16.5 11.6 16.5 12.4M16.5 18.5h3.4"/>',food:'<path d="M12 21V9"/><path d="M12 13c-4 0-6-3-6-7 4 0 6 3 6 7zM12 11c0-4 2-7 6-7 0 4-2 7-6 7z"/>',water:'<path d="M12 2.5S5.5 10 5.5 14.5a6.5 6.5 0 0013 0C18.5 10 12 2.5 12 2.5z"/>',laser:'<path d="M3 15l7-7 3 3-7 7z"/><path d="M13 11l2-2M16 8l5-5M17.5 11.5l3 .5M12.5 6.5l-.5-3"/>',rifle:'<path d="M2 10h15l3 2-3 2H9l-2 5H4l1-5H2z"/><path d="M12 10V7h3v3"/>',build:'<path d="M3 21h18M6 21V11h12v10M9 11V6h6v5"/><path d="M14 3l5 3" />',rover:'<path d="M3 15h18v-4l-3-4H8l-2 4H3z"/><circle cx="7" cy="17.5" r="2.2"/><circle cx="17" cy="17.5" r="2.2"/><path d="M10 7v4h8"/>',warn:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.01"/>',sun:'<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/>',moon:'<path d="M20 14.5A8.5 8.5 0 019.5 4a8.5 8.5 0 1010.5 10.5z"/>',meteor:'<circle cx="16" cy="16" r="4"/><path d="M13 13L3 3M15 11L8 4M11 15L4 8"/>',radio:'<path d="M5 9a9.5 9.5 0 0114 0M8 12a5 5 0 018 0"/><circle cx="12" cy="15.5" r="1.6"/><path d="M12 17v4"/>',check:'<path d="M4 12.5l5 5L20 6.5"/>',lock:'<rect x="5" y="10.5" width="14" height="10" rx="1"/><path d="M8 10.5V7a4 4 0 018 0v3.5"/>',ship:'<path d="M12 2c3 3 4 7 4 11v4H8v-4c0-4 1-8 4-11z"/><path d="M8 13l-3 4v3l3-2M16 13l3 4v3l-3-2M10 20l2 2 2-2"/>',colony:'<path d="M2 20h20"/><path d="M4 20v-5a4 4 0 018 0v5M13 20V7h7v13"/><path d="M15.5 10h2M15.5 13h2M15.5 16h2"/>',storm:'<path d="M3 8h12a3 3 0 10-3-3M3 12h16a3 3 0 11-3 3M3 16h8"/>',shield:'<path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/>',wrench:'<path d="M14.5 6.5a4 4 0 015.2 5.2L21 13l-8 8-1.3-1.3a4 4 0 01-5.2-5.2L3 11l3-3 3.5 3.5 2-2L8 6l3-3z" transform="scale(.9) translate(1.3 1.3)"/>',tank:'<rect x="7" y="5" width="10" height="16" rx="5"/><path d="M10 2h4v3h-4zM7 10h10"/>',scanner:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 12l6-6"/>',jet:'<path d="M8 3h8v11H8z"/><path d="M9 14l-1 4M15 14l1 4M10 18l2 4 2-4"/>',armor:'<path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/><path d="M8 10l4 2 4-2M12 12v6"/>',focus:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="2"/><path d="M12 1.5v5M12 17.5v5M1.5 12h5M17.5 12h5"/>',bolt2:'<path d="M7 2l-2 9h5l-2 11 9-13h-6l3-7z"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',planet:'<circle cx="12" cy="12" r="6.5"/><path d="M2.5 15.5c3 2 16 -4 19-9" />',trophy:'<path d="M7 3h10v5a5 5 0 01-10 0z"/><path d="M7 5H3c0 3 2 5 4 5M17 5h4c0 3-2 5-4 5M12 13v4M8 21h8M9 17h6"/>',book:'<path d="M4 4h6a2 2 0 012 2v14a2 2 0 00-2-2H4zM20 4h-6a2 2 0 00-2 2v14a2 2 0 012-2h6z"/>',camera:'<path d="M3 7h4l2-3h6l2 3h4v13H3z"/><circle cx="12" cy="13" r="4"/>',gear:'<circle cx="12" cy="12" r="3.2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',drone:'<rect x="9" y="10" width="6" height="4" rx="1"/><path d="M9 11L5 7M15 11l4-4M9 13l-4 4M15 13l4 4"/><circle cx="5" cy="7" r="2.2"/><circle cx="19" cy="7" r="2.2"/><circle cx="5" cy="17" r="2.2"/><circle cx="19" cy="17" r="2.2"/>',boss:'<path d="M12 2l3 6 6 1-4 5 1 7-6-3-6 3 1-7-4-5 6-1z"/><circle cx="12" cy="12" r="2"/>',key:'<circle cx="8" cy="15" r="4.5"/><path d="M11.5 12L20 3.5M17 6.5l2.5 2.5M15 8.5l2 2"/>',dome:'<path d="M3 19h18M4.5 19a7.5 7.5 0 0115 0"/><path d="M12 11.5V8M10 19v-3h4v3"/>',tower:'<path d="M6 21V5h6v16M12 21V10h6v11"/><path d="M8 8h2M8 11h2M8 14h2M14 13h2M14 16h2M3 21h18"/>',monument:'<path d="M10 21l1-16 1-2 1 2 1 16z"/><ellipse cx="12" cy="11" rx="6" ry="2"/><path d="M5 21h14"/>'};function Ng(){return`<svg xmlns="http://www.w3.org/2000/svg" style="display:none">${Object.entries(O2).map(([n,t])=>`<symbol id="i-${n}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${t}</symbol>`).join("")}</svg>`}var He=(n,t="")=>`<svg class="ico ${t}" aria-hidden="true"><use href="#i-${n}"/></svg>`;var Zc={};function Hg(n){let t=n.filter(l=>!Zc[l]);if(!t.length)return Zc;let e=256,i=new xo({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});i.setSize(e,e),i.setPixelRatio(1),i.toneMapping=vr,i.toneMappingExposure=1.15;let s=new Ai;s.add(new Hs(14674175,3811876,1.4));let r=new Ci(16773344,2.6);r.position.set(4,8,6),s.add(r);let o=new Ci(8965375,1.4);o.position.set(-6,4,-6),s.add(o);let a=new sn(30,1,.1,500);for(let l of t){let c=new wt,h={};rs[l](c,h);let u=[];c.traverse(_=>{(_.userData.found||_===h.flame||_===h.beam)&&u.push(_)}),u.forEach(_=>_.parent.remove(_));let d=[];c.traverse(_=>{_.isSprite&&d.push([_,_.parent])}),d.forEach(([_,E])=>E.remove(_)),s.add(c);let f=new hi().setFromObject(c,!0),g=f.getSize(new T),y=f.getCenter(new T);d.forEach(([_,E])=>E.add(_));let m=Math.max(g.x,g.y,g.z)*.62/Math.tan(We.degToRad(15))*1.05;a.position.set(y.x+m*.62,y.y+m*.42,y.z+m*.66),a.lookAt(y),a.updateProjectionMatrix(),i.render(s,a),Zc[l]=i.domElement.toDataURL("image/png"),s.remove(c)}return i.dispose(),i.forceContextLoss(),Zc}var B2={mars:[{id:"zhurong",name:"\u795D\u878D\u53F7\u706B\u661F\u8F66",model:"rover",who:"\u6863\u6848 \xB7 \u795D\u878D\u53F7",text:"\u4E2D\u56FD\u706B\u661F\u8F66\u300C\u795D\u878D\u53F7\u300D\uFF0C2021 \u5E74\u7740\u9646\u5728\u4E4C\u6258\u90A6\u5E73\u539F\u2014\u2014\u5C31\u5728\u4F60\u811A\u4E0B\u8FD9\u7247\u571F\u5730\u3002\u5B83\u7684\u592A\u9633\u80FD\u677F\u4E0A\u79EF\u6EE1\u4E86\u516D\u5341\u591A\u5E74\u7684\u6C99\u5C18\u3002\u4EBA\u7C7B\u5728\u706B\u661F\u4E0A\u7684\u7B2C\u4E00\u884C\u8F66\u8F99\uFF0C\u5C31\u662F\u5B83\u7559\u4E0B\u7684\u3002"},{id:"opportunity",name:"\u673A\u9047\u53F7\u6B8B\u9AB8",model:"rover2",who:"\u6863\u6848 \xB7 \u673A\u9047\u53F7",text:"\u4E00\u5757\u5199\u7740\u300COpportunity\u300D\u7684\u6B8B\u7247\uFF0C\u4E0D\u77E5\u88AB\u54EA\u573A\u6C99\u5C18\u66B4\u5377\u5230\u4E86\u8FD9\u91CC\u3002\u5B83\u5728\u706B\u661F\u4E0A\u5DE5\u4F5C\u4E86\u5341\u4E94\u5E74\u3002\u5B83\u6700\u540E\u4F20\u56DE\u7684\u6570\u636E\uFF0C\u88AB\u4EBA\u4EEC\u7FFB\u8BD1\u6210\u4E00\u53E5\u8BDD\uFF1A\u300C\u6211\u7684\u7535\u91CF\u5F88\u4F4E\uFF0C\u5929\u5FEB\u9ED1\u4E86\u3002\u300D"},{id:"viking",name:"\u6D77\u76D7\u4E00\u53F7\u7740\u9646\u5668",model:"lander",who:"\u6863\u6848 \xB7 \u6D77\u76D7\u4E00\u53F7",text:"1976 \u5E74\uFF0C\u4EBA\u7C7B\u7B2C\u4E00\u4E2A\u5728\u706B\u661F\u6210\u529F\u7740\u9646\u5E76\u4F20\u56DE\u7167\u7247\u7684\u63A2\u6D4B\u5668\u3002\u7167\u7247\u4E0A\uFF0C\u5C31\u662F\u8FD9\u6837\u4E00\u7247\u7EA2\u8272\u7684\u3001\u5E03\u6EE1\u77F3\u5934\u7684\u5E73\u539F\u3002"},{id:"ingenuity",name:"\u673A\u667A\u53F7\u76F4\u5347\u673A",model:"heli",who:"\u6863\u6848 \xB7 \u673A\u667A\u53F7",text:"\u4E00\u67B6\u53EA\u6709 1.8 \u516C\u65A4\u7684\u5C0F\u76F4\u5347\u673A\u30022021 \u5E74\uFF0C\u5B83\u5B8C\u6210\u4E86\u4EBA\u7C7B\u5728\u5730\u7403\u4E4B\u5916\u7684\u7B2C\u4E00\u6B21\u52A8\u529B\u98DE\u884C\u3002\u65CB\u7FFC\u4E0A\u8FD8\u8D34\u7740\u4E00\u5C0F\u5757\u83B1\u7279\u5144\u5F1F\u98DE\u673A\u7684\u5E03\u6599\u3002"}],europa:[{id:"drill",name:"\u51B0\u5C42\u94BB\u63A2\u5668",model:"drill",who:"\u6863\u6848 \xB7 \u51B0\u7A7F\u8005\u53F7",text:"2041 \u5E74\u7684\u65E0\u4EBA\u94BB\u63A2\u5668\u300C\u51B0\u7A7F\u8005\u53F7\u300D\u3002\u5B83\u94BB\u5230\u4E86\u51B0\u4E0B\u4E09\u516C\u91CC\uFF0C\u5728\u6700\u540E\u4E00\u5E27\u753B\u9762\u91CC\uFF0C\u955C\u5934\u524D\u4F3C\u4E4E\u6709\u4EC0\u4E48\u4E1C\u897F\u5728\u53D1\u5149\u2026\u2026\u7136\u540E\u4FE1\u53F7\u4E2D\u65AD\u4E86\u3002"},{id:"hydro",name:"\u65E0\u4EBA\u6C34\u542C\u7AD9",model:"probe",who:"\u6863\u6848 \xB7 \u6C34\u542C\u7AD9",text:"\u4E00\u53F0\u8FD8\u5728\u8FD0\u8F6C\u7684\u6C34\u542C\u5668\u3002\u5B83\u5F55\u5230\u4E86\u51B0\u4E0B\u6D77\u6D0B\u91CC\u67D0\u79CD\u6709\u8282\u594F\u7684\u4F4E\u9891\u58F0\u97F3\uFF0C\u5468\u671F\u662F 17 \u5206\u949F\u3002\u6CA1\u6709\u4EBA\u77E5\u9053\u90A3\u662F\u4EC0\u4E48\u3002"},{id:"galileo",name:"\u523B\u5B57\u7684\u91D1\u5C5E\u7247",model:"plate",who:"\u6863\u6848 \xB7 \u65E0\u540D",text:"\u51B0\u91CC\u51BB\u7740\u4E00\u5757\u91D1\u5C5E\u7247\uFF0C\u4E0A\u9762\u523B\u7740\u4E00\u4E2A\u65E5\u671F\uFF1A1610 \u5E74 1 \u6708 7 \u65E5\u3002\u90A3\u662F\u4F3D\u5229\u7565\u7B2C\u4E00\u6B21\u770B\u89C1\u6728\u661F\u536B\u661F\u7684\u591C\u665A\u3002\u662F\u8C01\u628A\u5B83\u5E26\u5230\u8FD9\u91CC\u7684\uFF1F"}],kepler:[{id:"monolith",name:"\u6676\u4F53\u65B9\u7891",model:"monolith",who:"\u6863\u6848 \xB7 \u672A\u77E5",text:"\u8FD9\u4E0D\u662F\u4EBA\u7C7B\u9020\u7684\u3002\u65B9\u7891\u8868\u9762\u7684\u7EB9\u8DEF\u5728\u4F60\u9760\u8FD1\u65F6\u4E00\u5708\u5708\u4EAE\u8D77\uFF0C\u50CF\u662F\u5728\u8FA8\u8BA4\u4F60\u3002\u5B83\u7684\u5E74\u9F84\u5927\u7EA6\u662F\u56DB\u5343\u4E07\u5E74\u3002"},{id:"pathfinder",name:"\u65B9\u821F\u63A2\u8DEF\u5668",model:"probe",who:"\u6863\u6848 \xB7 \u63A2\u8DEF\u8005",text:"\u4E09\u767E\u5E74\u524D\u5148\u884C\u51FA\u53D1\u7684\u65E0\u4EBA\u63A2\u8DEF\u5668\u3002\u5B83\u7684\u6700\u540E\u4E00\u6761\u65E5\u5FD7\u5199\u7740\uFF1A\u300C\u5DF2\u627E\u5230\u9002\u5B9C\u7740\u9646\u70B9\u3002\u6211\u4F1A\u5728\u8FD9\u91CC\u7B49\u4F60\u4EEC\u3002\u300D\u5B83\u7B49\u4E86\u4E00\u767E\u4E00\u5341\u4E8C\u5E74\u3002"},{id:"fossil",name:"\u5DE8\u578B\u5316\u77F3",model:"fossil",who:"\u6863\u6848 \xB7 \u5316\u77F3",text:"\u4E00\u526F\u5DE8\u5927\u7684\u9AA8\u67B6\uFF0C\u5F27\u5F62\u7684\u808B\u9AA8\u50CF\u62F1\u95E8\u4E00\u6837\u7ACB\u5728\u5730\u4E0A\u3002\u751F\u524D\uFF0C\u5B83\u53EF\u80FD\u50CF\u90A3\u4E9B\u53D1\u5149\u7684\u6C34\u6BCD\u4E00\u6837\uFF0C\u6F02\u6D6E\u5728\u8FD9\u7247\u5929\u7A7A\u91CC\u3002"}]},Lr=[],ei=new ht({color:8022620,roughness:.9,metalness:.3}),Sf=new ht({color:13148240,roughness:.4,metalness:.8}),Tf=new ht({color:15260872,roughness:.8,flatShading:!0}),V2=new ht({color:1314844,roughness:.15,metalness:.9,emissive:6308095,emissiveIntensity:.15});function Ce(n,t,e,i,s,r,o=0,a=0,l=0){let c=new at(n,t);return c.position.set(e,i,s),c.rotation.set(o,a,l),c.castShadow=!0,c.receiveShadow=!0,r.add(c),c}var G2={rover(n){Ce(new Gt(1.6,.5,2.2),ei,0,.9,0,n,0,0,.08);for(let t of[-1,1])Ce(new Gt(1.4,.05,1.6),M.solar,t*1.4,1.1,0,n,0,0,t*.25);Ce(new te(.05,.05,1.2,6),ei,.4,1.7,-.7,n),Ce(new Gt(.3,.2,.25),ei,.4,2.35,-.7,n,0,0,.3);for(let t of[-.9,0,.9])for(let e of[-1,1])Ce(new te(.28,.28,.22,10),M.dark,e*.95,.3,t,n,0,0,Math.PI/2)},rover2(n){Ce(new Gt(1.4,.45,1.8),ei,0,.5,0,n,.25,.4,.4),Ce(new Gt(1.2,.05,1.1),M.solar,.9,.35,.3,n,.1,0,-.6),Ce(new te(.28,.28,.22,10),M.dark,-1.2,.25,.8,n,.4,0,1.2)},lander(n){Ce(new te(1,1.1,.6,6),Sf,0,1,0,n);for(let t=0;t<3;t++){let e=t*Math.PI*2/3;Ce(new te(.06,.06,1.4,5),ei,Math.cos(e)*1.1,.5,Math.sin(e)*1.1,n,Math.sin(e)*.4,0,-Math.cos(e)*.4)}Ce(new te(.6,.6,.05,16),M.white,0,1.6,.3,n,.6,0,0),Ce(new Gt(.2,.9,.2),ei,-.5,1.7,-.3,n)},heli(n){Ce(new Gt(.25,.2,.25),Sf,0,.45,0,n),Ce(new te(.02,.02,.5,4),ei,0,.75,0,n),Ce(new Gt(1.2,.02,.08),ei,0,.9,0,n,0,.5,0),Ce(new Gt(1.2,.02,.08),ei,0,.98,0,n,0,-.4,0);for(let t=0;t<4;t++){let e=t*Math.PI/2+.6;Ce(new te(.015,.015,.5,4),ei,Math.cos(e)*.2,.2,Math.sin(e)*.2,n,Math.sin(e)*.5,0,-Math.cos(e)*.5)}n.scale.setScalar(2.2)},drill(n){Ce(new te(.5,.7,1.4,8),ei,0,.7,0,n),Ce(new te(.15,.15,4,8),M.metal,0,2.6,0,n,.15,0,0);for(let t=0;t<3;t++){let e=t*Math.PI*2/3;Ce(new Gt(.15,3,.15),ei,Math.cos(e)*.9,1.4,Math.sin(e)*.9,n,Math.sin(e)*.25,0,-Math.cos(e)*.25)}},probe(n){Ce(new Bt(.8,12,8),M.white,0,.9,0,n),Ce(new Zt(.85,.08,6,20),M.orange,0,.9,0,n,Math.PI/2,0,0),Ce(new te(.03,.03,1.6,4),M.metal,0,2.2,0,n),Ce(new ze(.5,.3,12,1,!0),M.white,0,3,0,n,Math.PI,0,0)},plate(n){Ce(new Gt(1.2,.8,.06),Sf,0,.5,0,n,-.5,0,.1),Ce(new Jn(.9,0),new ht({color:13627135,transparent:!0,opacity:.6,roughness:.05}),0,.4,0,n)},monolith(n){Ce(new Gt(1.4,7,.5),V2,0,3.5,0,n,0,0,.04),n.userData.rings=[];for(let t=0;t<3;t++){let e=Ce(new Zt(1.4+t*.4,.04,6,32),new ne({color:9075455,transparent:!0,opacity:.6}),0,2+t*1.6,0,n,Math.PI/2,0,0);n.userData.rings.push(e)}},fossil(n){for(let t=0;t<9;t++){let e=Ce(new Zt(3-Math.abs(t-4)*.35,.18,6,16,Math.PI),Tf,0,0,-6+t*1.5,n);e.rotation.y=0}Ce(new te(.25,.15,14,6),Tf,0,3,0,n,Math.PI/2,0,0),Ce(new Jn(1.4,0),Tf,0,2.6,-8,n)}};function kg(){let n=Vn(le.length*977+5),t=B2[le]||[];t.forEach((e,i)=>{let s=0,r=0;for(let l=0;l<200;l++){let c=i/t.length*Math.PI*2+n()*1.2,h=160+n()*220;if(s=Math.cos(c)*h,r=Math.sin(c)*h,Math.abs(s)<Kt-180&&Math.abs(r)<Kt-180&&Mr(s,r,3)<.35&&!p.colliders.overlaps(s,r,6))break}let o=new wt;G2[e.model](o),o.position.set(s,yt(s,r)-.15,r),o.rotation.y=n()*6.28;let a=Dt(16765578,3,p.scene,s,yt(s,r)+4,r);p.scene.add(o),p.colliders.add({x:s,z:r,r:e.model==="fossil"?3:1.4,kind:"relic"}),Lr.push({...e,x:s,z:r,g:o,beacon:a,found:(p.relicsFound||[]).includes(e.id)})})}function zg(n){let t=null,e=1e9;for(let i of Lr){if(i.found)continue;let s=Math.hypot(i.x-n.x,i.z-n.z);s<e&&(e=s,t=i)}return t?{r:t,d:e}:null}function Fg(n){return Lr.find(t=>!t.found&&Math.hypot(t.x-n.x,t.z-n.z)<6)}function Yo(){return{found:Lr.filter(n=>n.found).length,total:Lr.length}}function Og(){return Lr}function Bg(n){n.found=!0,p.relicsFound=[...new Set([...p.relicsFound||[],n.id])],$e(n.who,n.text),p.res.titanium+=8,p.res.silicon+=15,p.events.emit("pickup",{type:"titanium",n:8,note:n.name}),p.events.emit("toast",`\u2713 \u53D1\u73B0\u9057\u8FF9\uFF1A${n.name}`),et.play("objective"),vt.burst(new T(n.x,yt(n.x,n.z)+2,n.z),[1,.85,.5],60,8)}function Vg(n){let t=performance.now()*.001;for(let e of Lr)e.beacon.visible=!e.found,e.beacon.material.opacity=.5+Math.sin(t*2+e.x)*.3,e.g.userData.rings&&e.g.userData.rings.forEach((i,s)=>{i.rotation.z=t*(.3+s*.2),i.material.opacity=(e.found?.8:.3)+Math.sin(t*2+s)*.2})}var Ht=n=>document.getElementById(n),If,Lf,pt,Jo={},Df={mars:"MARS",europa:"EUROPA",kepler:"KEPLER-442b"},W2=["I","II","III","IV","V","VI"];function Jg(n){If=n,document.body.insertAdjacentHTML("afterbegin",Ng()),Lf=Ht("minimap"),pt=Lf.getContext("2d"),Ht("pl-cn").textContent=ut.name,Ht("kick-planet").textContent=Df[le],Ht("hotbar").innerHTML=Qs.map((t,e)=>`<div class="slot" data-i="${e}"><span class="key">${e+1}</span><span class="ic">${He(t.icon)}</span><span class="nm">${t.name}</span></div>`).join(""),Ht("res").innerHTML=Object.entries(pi).map(([t,e])=>`<div class="r" id="r-${t}" style="--rc:${e.color}"><span class="ic">${He(t)}</span><span class="tx"><small>${e.name}</small><b>0</b></span></div>`).join(""),p.events.on("toast",t=>ln(t)),p.events.on("pickup",t=>$2(t)),document.querySelectorAll("[data-close]").forEach(t=>t.addEventListener("click",()=>{et.play("ui"),_i(!0)})),document.querySelectorAll(".menu button, .bp-tabs button").forEach(t=>t.addEventListener("mouseenter",()=>et.play("tick")));try{Jo=Hg(cf.filter(t=>!Ys(t).hide))}catch{Jo={}}}var Gg={"\u2713":["check","good"],"\u26A0":["warn","warn"],"\u{1F527}":["wrench",""],"\u2600":["sun",""],"\u2604":["meteor",""],"\u{1F680}":["ship",""]};function ln(n,t="radio",e=""){let i=[...n][0];if(Gg[i]&&([t,e]=Gg[i],n=n.slice(i.length).trim()),e==="warn"||t==="boss")return X2(n,t,e);let s=Ht("log"),r=[...s.children].find(a=>a.dataset.t===n&&!a.classList.contains("out"));if(r){let a=(+r.dataset.n||1)+1;r.dataset.n=a,r.querySelector("em").textContent="\xD7"+a,clearTimeout(r._to),r._to=setTimeout(()=>Uf(r),5e3);return}let o=document.createElement("div");for(o.className="ev "+e,o.dataset.t=n,o.innerHTML=`${He(t)}<span>${n}</span><em></em>`,s.appendChild(o);s.children.length>3;)s.firstChild.remove();o._to=setTimeout(()=>Uf(o),5e3)}function Uf(n){n.classList.add("out"),setTimeout(()=>n.remove(),600)}var Wg,Xg=0,$g=0;function X2(n,t,e){let i=t==="boss"?2:1,s=performance.now();if(i<Xg&&s<$g){let o=Ht("log"),a=document.createElement("div");for(a.className="ev warn",a.innerHTML=`${He(t==="radio"?"warn":t)}<span>${n}</span><em></em>`,o.appendChild(a);o.children.length>3;)o.firstChild.remove();setTimeout(()=>Uf(a),5e3);return}Xg=i,$g=s+4500;let r=Ht("alert");r.className="show "+(e==="good"?"good":""),r.innerHTML=`${He(t==="radio"?"warn":t)}<span>${n}</span>`,et.play("alarm"),clearTimeout(Wg),Wg=setTimeout(()=>{r.className=""},4500)}var Af={};function $2({type:n,n:t,note:e}){et.play("pickup");let i=Af[n];i&&i.el.isConnected?(i.n+=t,clearTimeout(i.to)):(i=Af[n]={n:t,el:document.createElement("div")},i.el.className="feed",Ht("feed").appendChild(i.el));let s=pi[n];i.el.style.setProperty("--rc",s.color),i.el.innerHTML=`<span class="nm">${e||s.name}</span>${He(n)}<span class="q">+${i.n}</span>`,i.el.classList.remove("out"),i.to=setTimeout(()=>{i.el.classList.add("out"),setTimeout(()=>{i.el.remove(),delete Af[n]},500)},1800);let r=Ht("r-"+n);r.classList.remove("flash"),r.offsetWidth,r.classList.add("flash")}var Jc=[],Rf=!1;function Ko(n){if(Rf){Jc.length=0,Jc.push(n);return}Rf=!0,setTimeout(()=>{Rf=!1,Jc.length&&Ko(Jc.shift())},5200);let t=Ht("chapter"),e=ti.indexOf(n),i=n.k||(e>=0?`CHAPTER ${String(e+1).padStart(2,"0")}`:""),s=n.title.replace(/^第.章 · |^终章 · /,"");t.innerHTML=`<div class="k">${i}</div><div class="t">${s}</div><div class="ln"></div><div class="s">${n.sub}</div>`,t.classList.remove("show"),t.offsetWidth,t.classList.add("show")}var q2=["build","craft","pause","starmap","archive"];function Dr(n){_i(!1),p.menuOpen=n,Ht(n).classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),et.play("open"),n==="build"&&Hf(),n==="craft"&&Of(),n==="archive"&&(Ht("archive-body").innerHTML=Bf()),n==="pause"&&(Ht("pause-pane").innerHTML="")}function _i(n){q2.forEach(e=>Ht(e).classList.add("hidden"));let t=p.menuOpen;p.menuOpen=!1,t==="build"&&!Ee.type&&(en.index=0),n&&p.requestLock()}function zf(n){Ht("pause-pane").innerHTML=n}var Nf={all:"\u5168\u90E8",life:"\u751F\u5B58",city:"\u57CE\u5E02",industry:"\u5DE5\u4E1A",defense:"\u9632\u5FA1",stellar:"\u661F\u9645"},Kc="all",tr=null;function Kg(n){Ht(n).innerHTML=Object.entries(pi).map(([t,e])=>`<span style="--rc:${e.color}">${He(t)}${p.res[t]}</span>`).join("")}function jg(n){return`<div class="need">${Object.entries(n).map(([t,e])=>`<div class="row ${p.res[t]>=e?"":"lack"}" style="--rc:${pi[t].color}">${He(t)}<span class="nm">${pi[t].name}</span>${Math.floor(p.res[t])} / ${e}</div>`).join("")}</div>`}function Hf(){Kg("bp-res");let n=cf.filter(i=>!Ys(i).hide),t=["all",...Object.keys(Nf).filter(i=>i!=="all"&&n.some(s=>bn[s].cat===i))];Ht("bp-tabs").innerHTML=t.map(i=>`<button data-c="${i}" class="${i===Kc?"on":""}">${Nf[i]}</button>`).join(""),Ht("bp-tabs").querySelectorAll("button").forEach(i=>i.addEventListener("click",()=>{Kc=i.dataset.c,et.play("tick"),Hf()}));let e=n.filter(i=>Kc==="all"||bn[i].cat===Kc);(!tr||!e.includes(tr))&&(tr=e.find(i=>Ys(i).ok)||e[0]),Ht("build-list").innerHTML=e.map(i=>{let s=bn[i],r=Ys(i),o=mi(s.cost);return`<div class="tile ${r.ok?"":"locked"} ${o?"":"poor"} ${i===tr?"sel":""}" data-k="${i}">
      <div class="th">${Jo[i]?`<img src="${Jo[i]}" alt="">`:He(s.icon)}</div>
      ${r.ok?"":`<div class="lk">${He("lock")}</div>`}
      <div class="nm">${s.name}</div><div class="cs">${r.ok?So(s.cost):""}</div></div>`}).join(""),Ht("build-list").querySelectorAll(".tile").forEach(i=>{i.addEventListener("click",()=>{tr=i.dataset.k,et.play("tick"),Hf()}),i.addEventListener("dblclick",()=>Ff(i.dataset.k))}),Z2()}function Y2(n){let t=bn[n],e=Ys(n);return le==="mars"&&t.chapter>p.chapter?`\u5728\u300C${ti[t.chapter].title}\u300D\u89E3\u9501`:e.why}function Z2(){let n=tr;if(!n){Ht("bp-detail").innerHTML="";return}let t=bn[n],e=Ys(n),i=mi(t.cost),s=[];t.power&&s.push(["\u7535\u529B",`${t.power>0?"+":""}${t.power}`,t.power>0?"pos":"neg"]),t.housing&&s.push(["\u4F4F\u623F",`${t.housing} \u4EBA`]),t.o2&&s.push(["\u4F9B\u6C27",`${t.o2} \u4EBA`]),t.food&&s.push(["\u98DF\u7269",`${t.food} \u4EBA`]),t.water&&s.push(["\u7528\u6C34",`${t.water} \u4EBA`]),t.life&&s.push(["\u8865\u6C27\u534A\u5F84",`${t.life} m`]),t.range&&s.push(["\u5C04\u7A0B",`${t.range} m`]),s.push(["\u8010\u4E45",t.hp]),Ht("bp-detail").innerHTML=`<div class="pv">${Jo[n]?`<img src="${Jo[n]}" alt="">`:He(t.icon)}</div>
    <div class="cat">${Nf[t.cat]||""} \xB7 BLUEPRINT</div><h3>${t.name}</h3>
    <div class="ds">${t.desc}</div>
    <div class="stats">${s.map(r=>`<div><small>${r[0]}</small><b class="${r[2]||""}">${r[1]}</b></div>`).join("")}</div>
    ${e.ok?jg(t.cost):`<div class="why">${He("lock")} ${Y2(n)}</div>`}
    <button class="go" ${e.ok?"":"disabled"}>${e.ok?i?"\u5F00\u59CB\u5EFA\u9020":"\u653E\u7F6E\u84DD\u56FE\uFF08\u8D44\u6E90\u4E0D\u8DB3\uFF09":"\u5C1A\u672A\u89E3\u9501"}</button>`,Ht("bp-detail").querySelector(".go").addEventListener("click",()=>Ff(n))}function Ff(n){let t=bn[n];if(!Ys(n).ok){et.play("deny");return}et.play("ui"),Ee.rot=0,Tr(n),en.index=2,_i(!0),mi(t.cost)||ln("\u8D44\u6E90\u4E0D\u8DB3\uFF0C\u653E\u7F6E\u524D\u5148\u53BB\u91C7\u96C6\u5427","warn","warn")}function Qg(n){p.menuOpen==="build"&&n.code==="Enter"&&tr&&Ff(tr),p.menuOpen==="craft"&&n.code==="Enter"&&zi&&kf(zi)}var zi=null;function Of(){Kg("cr-res");let n=Object.keys(Oo);zi||(zi=n.find(s=>!p.upgrades[s])||n[0]),Ht("craft-list").innerHTML=n.map(s=>{let r=Oo[s],o=p.upgrades[s],a=mi(r.cost),l=r.need&&!p.upgrades[r.need];return`<div class="tile ${o?"done":""} ${a&&!l?"":"poor"} ${s===zi?"sel":""}" data-k="${s}">
      ${o?'<span class="tag">\u5DF2\u88C5\u5907</span>':""}
      <div class="th">${He(r.icon)}</div><div class="nm">${r.name}</div><div class="cs">${o?"":So(r.cost)}</div></div>`}).join(""),Ht("craft-list").querySelectorAll(".tile").forEach(s=>{s.addEventListener("click",()=>{zi=s.dataset.k,et.play("tick"),Of()}),s.addEventListener("dblclick",()=>kf(s.dataset.k))});let t=Oo[zi],e=p.upgrades[zi],i=t.need&&!p.upgrades[t.need];Ht("craft-detail").innerHTML=`<div class="pv">${He(t.icon)}</div><div class="cat">EQUIPMENT</div><h3>${t.name}</h3>
    <div class="ds">${t.desc}</div>
    ${e?'<div class="why okc">\u5DF2\u5236\u9020\u5E76\u88C5\u5907</div>':i?`<div class="why">${He("lock")} \u9700\u8981\u5148\u5236\u9020\u7B49\u79BB\u5B50\u6B65\u67AA</div>`:jg(t.cost)}
    <button class="go" ${e||i||!mi(t.cost)?"disabled":""}>${e?"\u5DF2\u88C5\u5907":mi(t.cost)?"\u5236\u9020":"\u8D44\u6E90\u4E0D\u8DB3"}</button>`,Ht("craft-detail").querySelector(".go").addEventListener("click",()=>kf(zi))}function kf(n){let t=Oo[n];if(p.upgrades[n]||t.need&&!p.upgrades[t.need]||!mi(t.cost)){et.play("deny");return}Pa(t.cost),p.upgrades[n]=!0,p.stats.crafted[n]=!0,et.play("craft"),ln(`\u5236\u9020\u5B8C\u6210\uFF1A${t.name}`,t.icon,"good"),n==="tank"&&(p.player.o2=180),n==="rifle"&&(en.index=1),p.events.emit("crafted",n),zi=Object.keys(Oo).find(e=>!p.upgrades[e])||n,Of()}function Bf(){let n=p.colony,t=p.stats,e=t.mined.iron+t.mined.silicon+t.mined.ice+t.mined.titanium,i=[["\u4EBA\u53E3",n.pop],["\u57CE\u5E02\u7B49\u7EA7",Cn[p.cityLevel].name],["\u8BBE\u65BD",p.buildings.length],["\u706B\u661F\u65E5",p.time.day],["\u7535\u529B",`${Math.round(n.powerProd)} / ${n.powerUse}`],["\u9057\u8FF9",`${Yo().found} / ${Yo().total}`],["\u53EF\u5BB9\u7EB3",n.support],["\u91C7\u96C6\u8D44\u6E90",e],["\u51FB\u9000\u9508\u8680\u86DB",t.kills],["\u884C\u9A76\u91CC\u7A0B",`${((t.driven||0)/1e3).toFixed(1)} km`],["\u5C45\u6C11\u4EA4\u8C08",(t.talked||[]).length]],s=Dn.visited||[],r=Object.keys(Gn).map(l=>{let c=l===le?{pop:n.pop}:s.find(h=>h.id===l);return`<div><small>${Gn[l].name}</small><b>${c?c.pop+" \u4EBA":"\u2014"}</b></div>`}).join(""),o=p.colonists.map(l=>`<div class="person"><span class="pn">${l.name}</span><span class="pj">${l.job}</span><div class="pl">\u201C${l.line}\u201D</div></div>`).join(""),a=n.pop-p.colonists.length;return`<h3>\u6982\u51B5 \xB7 ${ut.name}</h3><div class="kv">${i.map(l=>`<div><small>${l[0]}</small><b>${l[1]}</b></div>`).join("")}</div>
    <h3>\u4EBA\u7C7B\u7684\u8DB3\u8FF9</h3><div class="kv">${r}<div><small>\u661F\u9645\u603B\u4EBA\u53E3</small><b>${s.filter(l=>l.id!==le).reduce((l,c)=>l+c.pop,0)+n.pop}</b></div></div>
    <h3>\u5C45\u6C11\u540D\u518C</h3>${o?`<div class="people">${o}</div>`:'<p style="color:var(--dim)">\u8FD8\u6CA1\u6709\u5C45\u6C11\u3002\u5EFA\u597D\u4F4F\u623F\u3001\u6C27\u6C14\u3001\u98DF\u7269\u3001\u6C34\u548C\u7740\u9646\u573A\uFF0C\u79FB\u6C11\u98DE\u8239\u5C31\u4F1A\u5230\u6765\u3002</p>'}
    ${a>0?`<p style="color:var(--dim);margin-top:14px">\u2026\u2026\u4EE5\u53CA\u53E6\u5916 ${a} \u4F4D\u5C45\u6C11\u3002</p>`:""}`}var Cf=0,qg="",Zo=0,Yg="";function Vf(n,t){let e=p.player,i=p.colony;if(Cf-=n,Cf<=0){Cf=.2;for(let R in pi)Ht("r-"+R).querySelector("b").textContent=Math.floor(p.res[R]);let f=Bm(),g=Cn[p.cityLevel],y=f?Math.min(1,Math.min(i.pop/f.pop,p.buildings.length/Math.max(1,f.b))):1,x=`<span class="lv">LV.${W2[p.cityLevel]}</span><span class="nm">${g.name}</span>${f?`<div class="pg"><i style="width:${y*100}%"></i></div><div class="nx">\u4E0B\u4E00\u7EA7\u300C${f.name}\u300D\xB7 \u4EBA\u53E3 ${Math.min(i.pop,f.pop)}/${f.pop} \xB7 \u8BBE\u65BD ${Math.min(p.buildings.length,f.b)}/${f.b}</div>`:'<div class="nx">\u5DF2\u8FBE\u5230\u6700\u9AD8\u7B49\u7EA7</div>'}`;Ht("city").dataset.k!==x&&(Ht("city").dataset.k=x,Ht("city").innerHTML=x);let m="";if(p.buildings.length&&(m+=`<div class="st ${i.deficit?"warn":""}">${He("power")}<div><small>\u7535\u529B</small><b>${Math.round(i.powerProd)}<em>/${i.powerUse}</em></b></div></div>`,m+=`<div class="st">${He("pop")}<div><small>\u4EBA\u53E3</small><b>${i.pop}<em>/${i.support}</em></b></div></div>`,p.terraform>0&&(m+=`<div class="st tf">${He("planet")}<div><small>\u5927\u6C14\u6539\u9020</small><b>${Math.floor(p.terraform*100)}%</b></div></div>`),i.deficit&&(m+=`<div class="chip">${He("warn")}\u7535\u529B\u4E0D\u8DB3\uFF1A\u591A\u5EFA\u592A\u9633\u80FD\u6216\u53CD\u5E94\u5806</div>`),i.housing&&p.buildings.some(R=>R.type==="beacon")&&i.support<=i.pop)){let R=[["housing","\u4F4F\u623F","house","\u5C45\u4F4F\u7A79\u9876"],["o2","\u6C27\u6C14","o2","\u5236\u6C27\u7AD9"],["food","\u98DF\u7269","food","\u6E29\u5BA4"],["water","\u6C34","water","\u6C34\u51B0\u63D0\u53D6\u5668"]].sort((P,L)=>i[P[0]]-i[L[0]])[0];m+=`<div class="chip">${He(R[2])}\u7F3A\u5C11${R[1]}\uFF1A\u5EFA\u9020${R[3]}\u6765\u8FCE\u63A5\u65B0\u79FB\u6C11</div>`}Ht("colony").dataset.k!==m&&(Ht("colony").dataset.k=m,Ht("colony").innerHTML=m);let _=p.storm>.3?"\u6C99\u5C18\u66B4":p.raining?"\u964D\u96E8":"";Ht("clock").innerHTML=tf().replace(/^.*? · /,"")+(_?`<span class="wx">${_}</span>`:"");let E=ti[p.chapter],v=p.chapter,I=E.goals.map((R,P)=>{let L=p.goalDone?.[v+":"+P],S=R.prog&&!L?R.prog():"",b=/^(\d+)\/(\d+)$/.exec(S);return`<div class="g ${L?"done":""}"><span class="cb"></span><div class="gx">${R.text}${S?`<small>${S}</small>`:""}${b?`<div class="gp"><i style="width:${Math.min(100,b[1]/b[2]*100)}%"></i></div>`:""}</div></div>`}).join("");I!==Yg&&(Yg=I,Ht("goals").innerHTML=I,Ht("goal-ch").textContent=E.title.replace(/ · /," ")),document.querySelectorAll("#hotbar .slot").forEach((R,P)=>{R.classList.toggle("on",P===en.index),R.classList.toggle("lock",!!(Qs[P].need&&!p.upgrades[Qs[P].need]))})}Pf("d-hp",70,e.health/e.maxHealth),Pf("d-o2",58,e.o2/e.maxO2),Pf("d-en",47,e.energy/100),Ht("d-o2n").textContent=Math.ceil(e.o2/e.maxO2*100),Ht("d-hpn").textContent=Math.ceil(e.health),Ht("d-enn").textContent=Math.ceil(e.energy),Ht("pl-en").textContent=tf().split(" \xB7 ")[0]===ut.name?Df[le]:Df[le];let s=Ht("o2-state"),r=e.inLife?`${He("o2")} \u8865\u6C27\u4E2D`:e.o2<e.maxO2*.2?`${He("warn")} \u6C27\u6C14\u4E0D\u8DB3\uFF0C\u7ACB\u5373\u8FD4\u56DE`:"";s.dataset.k!==r&&(s.dataset.k=r,s.innerHTML=r),s.className=e.inLife?"ok":"bad",Ht("suit").classList.toggle("low",e.o2<e.maxO2*.2&&!e.inLife);let o=dg(),a=Ht("radio");if(o){qg!==o[1]&&(qg=o[1],Zo=0,a.querySelector(".who").textContent=o[0]);let f=o[1].length;Zo<f&&(Zo=Math.min(f,Zo+n*26+1e-4),n===0&&(Zo=f));let g=Math.floor(Zo);a.querySelector(".txt").innerHTML=o[1].slice(0,g)+(g<f?'<span class="cur"></span>':""),a.classList.toggle("idle",g>=f),a.classList.add("show")}else a.classList.remove("show");let l=Ht("prompt");l.dataset.k!==(t.prompt||"")&&(l.dataset.k=t.prompt||"",l.innerHTML=t.prompt||""),l.classList.toggle("show",!!t.prompt),l.classList.toggle("drive",!!p.driving);let c=Ht("buildhint");if(en.id==="build"&&Ee.type&&!p.menuOpen){let f=bn[Ee.type];c.innerHTML=`<div class="bn">${f.name}</div><div>${So(f.cost)}</div>
      <div class="st">${Ee.valid?'<span class="okc">\u5DE6\u952E\u653E\u7F6E</span>':`<span class="badc">${Ee.reason}</span>`}</div>
      <div><kbd>R</kbd>\u65CB\u8F6C <kbd>\u53F3\u952E</kbd>\u53D6\u6D88 <kbd>B</kbd>\u66F4\u6362\u84DD\u56FE</div>`,c.classList.add("show")}else c.classList.remove("show");Ht("hurt").style.opacity=Math.min(1,e.hurtT*1.6+(e.o2<=0?.5+Math.sin(performance.now()*.01)*.2:0)),Ht("lowo2").style.opacity=!e.inLife&&e.o2<e.maxO2*.2?(.4+Math.sin(performance.now()*.006)*.3)*(1-e.o2/(e.maxO2*.2)*.6):0,Ht("crosshair").className=t.crossClass||"";let h=Ht("tip");h.dataset.k!==(t.tip||"")&&(h.dataset.k=t.tip||"",h.innerHTML=t.tip?`<div class="tk">\u63D0\u793A</div><div>${t.tip}</div>`:""),h.classList.toggle("show",!!t.tip);let u=_g(),d=u&&Math.hypot(u.pos.x-e.pos.x,u.pos.z-e.pos.z)<260;Ht("bossbar").classList.toggle("hidden",!d),d&&(Ht("bossbar").querySelector("i").style.width=Math.max(0,u.hp/u.maxHp*100)+"%"),J2(),K2()}function Pf(n,t,e){let i=2*Math.PI*t,s=Ht(n);s.style.strokeDasharray=i,s.style.strokeDashoffset=i*(1-Math.max(0,Math.min(1,e)))}var Zg={0:"\u5317",45:"\u4E1C\u5317",90:"\u4E1C",135:"\u4E1C\u5357",180:"\u5357",225:"\u897F\u5357",270:"\u897F",315:"\u897F\u5317"};function J2(){let n=p.player,t=n.fwd,e=Math.atan2(t.x,-t.z)*180/Math.PI,i=80,s=520,r=u=>s/2+u/i*(s/2),o="",a=Math.ceil((e-i)/5)*5;for(let u=a;u<=e+i;u+=5){let d=u-e,f=(u%360+360)%360;Zg[f]!==void 0?o+=`<span class="lb ${f%90===0?"big":""}" style="left:${r(d)}px">${Zg[f]}</span>`:o+=`<span class="tk ${f%15===0?"m":""}" style="left:${r(d)}px"></span>`}let l=(u,d)=>Math.atan2(u-n.pos.x,-(d-n.pos.z))*180/Math.PI,c=[{c:"home",t:`${He("house")}${Math.round(Math.hypot(pe.x-n.pos.x,pe.z-n.pos.z))}m`,a:l(pe.x,pe.z)}];if(p.upgrades.scanner){let u=null,d=1e9;for(let f of p.nodes)if(f.type==="titanium"){let g=Math.hypot(f.x-n.pos.x,f.z-n.pos.z);g<d&&(d=g,u=f)}u&&c.push({c:"ti",t:`${He("titanium")}${Math.round(d)}m`,a:l(u.x,u.z)})}let h=zg(n.pos);h&&c.push({c:"ship",t:`? ${Math.round(h.d)}m`,a:l(h.r.x,h.r.z)});for(let u of c){let d=(u.a-e+540)%360-180;Math.abs(d)<i&&(o+=`<span class="mk ${u.c}" style="left:${r(d)}px;top:16px">${u.t}</span>`)}Ht("compass").innerHTML=o}function K2(){let n=p.player,t=Lf.width,e=t/2-6,i=p.upgrades.scanner?220:110,s=If.width/En;pt.clearRect(0,0,t,t),pt.save(),pt.beginPath(),pt.arc(t/2,t/2,e,0,Math.PI*2),pt.clip(),pt.fillStyle="#0c0807",pt.fillRect(0,0,t,t),pt.globalAlpha=.75;let r=e*2/(i*2);pt.drawImage(If,(n.pos.x-i+En/2)*s,(n.pos.z-i+En/2)*s,i*2*s,i*2*s,t/2-e,t/2-e,e*2,e*2),pt.globalAlpha=1;let o=d=>(d-n.pos.x)*r+t/2,a=d=>(d-n.pos.z)*r+t/2;pt.strokeStyle="rgba(255,255,255,.1)",pt.lineWidth=1;for(let d of[.33,.66])pt.beginPath(),pt.arc(t/2,t/2,e*d,0,Math.PI*2),pt.stroke();pt.strokeStyle="rgba(127,230,255,.55)",pt.setLineDash([3,4]),pt.beginPath(),pt.arc(o(yi.x),a(yi.z),Cn[p.cityLevel].r*r,0,Math.PI*2),pt.stroke(),pt.setLineDash([]);let l=(d,f,g,y)=>{pt.fillStyle=y,pt.beginPath(),pt.arc(o(d),a(f),g,0,Math.PI*2),pt.fill()};for(let d of p.nodes){if(Math.abs(d.x-n.pos.x)>i||Math.abs(d.z-n.pos.z)>i)continue;let f=pi[d.type].color,g=o(d.x),y=a(d.z),x=d.type==="titanium"?3.2:2.2;pt.fillStyle=f,pt.beginPath(),pt.moveTo(g,y-x),pt.lineTo(g+x,y),pt.lineTo(g,y+x),pt.lineTo(g-x,y),pt.fill()}for(let d of p.buildings){let f=Math.max(2,d.def.r*r*.8);pt.fillStyle=d.broken?"#ff5a45":d.powered?"#ece6dc":"#ffb35c",pt.fillRect(o(d.x)-f,a(d.z)-f,f*2,f*2)}pt.fillStyle="#8dffb0";for(let d of p.colonists)pt.fillRect(o(d.pos.x)-1,a(d.pos.z)-1,2,2);let c=Math.sin(performance.now()*.008)>0;for(let d of p.enemies)l(d.pos.x,d.pos.z,d.guardian?3.5:2.6,c?"#ff5a45":"#a02818");l(pe.x,pe.z,3,"#8dffb0");for(let d of Og())Math.abs(d.x-n.pos.x)>i*1.2||Math.abs(d.z-n.pos.z)>i*1.2||(pt.strokeStyle=d.found?"rgba(255,210,138,.4)":"#ffd28a",pt.lineWidth=1.5,pt.beginPath(),pt.arc(o(d.x),a(d.z),4,0,Math.PI*2),pt.stroke());pt.restore(),pt.save(),pt.translate(t/2,t/2),pt.strokeStyle="rgba(236,230,220,.35)",pt.lineWidth=1,pt.beginPath(),pt.arc(0,0,e+.5,0,Math.PI*2),pt.stroke();for(let d=0;d<72;d++){let f=d/72*Math.PI*2,g=d%18===0?6:d%6===0?4:2;pt.strokeStyle=d%18===0?"rgba(255,179,92,.9)":"rgba(236,230,220,.3)",pt.beginPath(),pt.moveTo(Math.sin(f)*(e+1),-Math.cos(f)*(e+1)),pt.lineTo(Math.sin(f)*(e+1+g),-Math.cos(f)*(e+1+g)),pt.stroke()}let h=Math.atan2(n.fwd.x,-n.fwd.z);pt.rotate(h);let u=pt.createRadialGradient(0,0,0,0,0,e*.6);u.addColorStop(0,"rgba(255,179,92,.35)"),u.addColorStop(1,"rgba(255,179,92,0)"),pt.fillStyle=u,pt.beginPath(),pt.moveTo(0,0),pt.arc(0,0,e*.6,-Math.PI/2-.55,-Math.PI/2+.55),pt.closePath(),pt.fill(),pt.fillStyle="#fff",pt.beginPath(),pt.moveTo(0,-7),pt.lineTo(5,5),pt.lineTo(0,2.5),pt.lineTo(-5,5),pt.closePath(),pt.fill(),pt.restore()}var tx="starport-achv",Qc=[{id:"first",name:"\u7B2C\u4E00\u6B65",desc:"\u5728\u5F02\u661F\u91C7\u96C6\u7B2C\u4E00\u5757\u77FF\u77F3",icon:"iron",check:()=>p.stats.mined.iron+p.stats.mined.silicon+p.stats.mined.ice>0},{id:"breathe",name:"\u547C\u5438",desc:"\u5EFA\u8D77\u7B2C\u4E00\u5EA7\u5236\u6C27\u7AD9",icon:"o2",check:()=>p.stats.built.oxygen>0},{id:"home",name:"\u7B2C\u4E00\u4E2A\u5BB6",desc:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",icon:"dome",check:()=>p.stats.built.habitat>0},{id:"welcome",name:"\u6B22\u8FCE\u56DE\u5BB6",desc:"\u8FCE\u63A5\u7B2C\u4E00\u6279\u79FB\u6C11",icon:"pop",check:()=>p.stats.arrived>0},{id:"listen",name:"\u503E\u542C\u8005",desc:"\u4E0E 8 \u4F4D\u5C45\u6C11\u4EA4\u8C08",icon:"radio",check:()=>(p.stats.talked||[]).length>=8},{id:"night",name:"\u957F\u591C\u5B88\u671B\u8005",desc:"\u51FB\u9000 15 \u53EA\u9508\u8680\u86DB",icon:"shield",check:()=>p.stats.kills>=15},{id:"guardian",name:"\u6676\u4F53\u730E\u4EBA",desc:"\u51FB\u8D25\u4E00\u53EA\u949B\u77FF\u5B88\u536B",icon:"titanium",check:()=>(p.stats.guardKills||0)>0},{id:"road",name:"\u516C\u8DEF\u65C5\u884C",desc:"\u9A7E\u9A76\u6F2B\u6E38\u8F66\u884C\u9A76 3 \u516C\u91CC",icon:"rover",check:()=>(p.stats.driven||0)>=3e3},{id:"meteor",name:"\u661F\u843D\u4E4B\u591C",desc:"\u91C7\u96C6\u4E00\u5757\u9668\u77F3",icon:"meteor",check:()=>(p.stats.meteorMined||0)>0},{id:"storm",name:"\u98CE\u66B4\u4E4B\u4E2D",desc:"\u7ECF\u5386\u4E00\u573A\u6C99\u5C18\u66B4",icon:"storm",check:()=>p.storm>.85},{id:"fly",name:"\u98DE\u7FD4",desc:"\u5236\u9020\u55B7\u6C14\u80CC\u5305",icon:"jet",check:()=>!!p.upgrades.jetpack},{id:"town",name:"\u5C0F\u9547",desc:"\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C\u5C0F\u9547\u300D",icon:"colony",check:()=>p.cityLevel>=2},{id:"metro",name:"\u5927\u90FD\u4F1A",desc:"\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C\u5927\u90FD\u4F1A\u300D",icon:"tower",check:()=>p.cityLevel>=4},{id:"fifty",name:"\u4E94\u5341\u4E2A\u706F\u706B",desc:"\u5355\u9897\u661F\u7403\u4EBA\u53E3\u8FBE\u5230 50",icon:"pop",check:()=>p.colony.pop>=50},{id:"reactor",name:"\u7B2C\u4E8C\u9897\u592A\u9633",desc:"\u70B9\u4EAE\u805A\u53D8\u53CD\u5E94\u5806",icon:"power",check:()=>p.stats.built.reactor>0},{id:"blue",name:"\u84DD\u8272\u5929\u7A7A",desc:"\u5B8C\u6210\u706B\u661F\u5927\u6C14\u6539\u9020",icon:"planet",check:()=>p.terraform>=1},{id:"europa",name:"\u51B0\u4E0B\u4E4B\u6D77",desc:"\u767B\u9646\u6728\u536B\u4E8C\xB7\u6B27\u7F57\u5DF4",icon:"ice",check:()=>le==="europa"},{id:"kepler",name:"\u53CC\u65E5\u4E4B\u5730",desc:"\u62B5\u8FBE\u5F00\u666E\u52D2-442b",icon:"sun",check:()=>le==="kepler"},{id:"civ",name:"\u661F\u9645\u6587\u660E",desc:"\u5EFA\u6210\u6587\u660E\u7EAA\u5FF5\u7891",icon:"monument",check:()=>p.stats.built.monument>0},{id:"relic",name:"\u56DE\u58F0",desc:"\u53D1\u73B0\u7B2C\u4E00\u5904\u9057\u8FF9",icon:"radio",check:()=>Yo().found>0},{id:"archaeo",name:"\u8003\u53E4\u5B66\u5BB6",desc:"\u53D1\u73B0\u4E00\u9897\u661F\u7403\u4E0A\u7684\u5168\u90E8\u9057\u8FF9",icon:"book",check:()=>{let n=Yo();return n.total>0&&n.found===n.total}},{id:"boss",name:"\u6676\u6BCD\u9668\u843D",desc:"\u5728\u6676\u6F6E\u4E4B\u591C\u51FB\u8D25\u6676\u6BCD",icon:"boss",check:()=>(p.stats.bossKills||0)>0},{id:"fleet",name:"\u65E0\u4EBA\u673A\u8230\u961F",desc:"\u65E0\u4EBA\u673A\u8FD0\u56DE 30 \u6279\u7269\u8D44",icon:"drone",check:()=>(p.stats.droneHauls||0)>=30},{id:"lv3",name:"\u7CBE\u76CA\u6C42\u7CBE",desc:"\u628A\u4E00\u5EA7\u5EFA\u7B51\u5347\u5230 3 \u7EA7",icon:"star",check:()=>p.buildings.some(n=>(n.level||1)>=3)},{id:"buddy",name:"\u597D\u642D\u6863",desc:"\u8BA9\u5C0F\u661F\u626B\u63CF 10 \u6B21",icon:"scanner",check:()=>(p.stats.scans||0)>=10},{id:"photo",name:"\u6444\u5F71\u5E08",desc:"\u5728\u62CD\u7167\u6A21\u5F0F\u4E2D\u4FDD\u5B58\u4E00\u5F20\u7167\u7247",icon:"camera",check:()=>(p.stats.photos||0)>0},{id:"gather",name:"\u6545\u4E61\u7684\u5149",desc:"\u591C\u91CC\uFF0C\u5C45\u6C11\u4EEC\u805A\u5728\u5E7F\u573A\u4E0A\u770B\u5168\u606F\u5730\u7403",icon:"planet",check:()=>!!p.plazaSeen}],Ur={};try{Ur=JSON.parse(localStorage.getItem(tx))||{}}catch{Ur={}}var Gf=[],Wf=0,jc=0;function ex(n){if(Wf-=n,jc-=n,Wf<=0){Wf=1;for(let e of Qc){if(Ur[e.id])continue;let i=!1;try{i=e.check()}catch{i=!1}if(i){Ur[e.id]=Date.now(),Gf.push(e);try{localStorage.setItem(tx,JSON.stringify(Ur))}catch{}}}}let t=document.getElementById("achv-pop");if(jc<=0&&t.classList.contains("show")&&t.classList.remove("show"),jc<=-.6&&Gf.length){let e=Gf.shift();t.innerHTML=`<div class="ai">${He(e.icon)}</div><div><div class="k">ACHIEVEMENT UNLOCKED</div><div class="n">${e.name}</div><div class="d">${e.desc}</div></div>`,t.classList.add("show"),jc=4.5,et.play("achv")}}function Xf(){return`<h3>\u6210\u5C31 \xB7 ${Qc.filter(t=>Ur[t.id]).length} / ${Qc.length}</h3><div class="achv">${Qc.map(t=>`<div class="ach ${Ur[t.id]?"on":""}"><div class="ai">${He(t.icon)}</div><div><div class="an">${t.name}</div><div class="ad">${t.desc}</div></div></div>`).join("")}</div>`}var ix=!1,sx=[],rx=[],ox=[];function nx(n,t,e,i,s){let r=new Te;r.setAttribute("position",new Ye(new Float32Array(n*3),3));let o=new Fn({size:e,map:Wn(),color:t,transparent:!0,opacity:i,depthWrite:!1,blending:s?Me:Ti}),a=new Yn(r,o);a.frustumCulled=!1,p.scene.add(a);let l=new Float32Array(n*3);for(let c=0;c<n;c++)l[c*3]=Math.random(),l[c*3+1]=Math.random()*Math.PI*2,l[c*3+2]=Math.random();return{p:a,seed:l,n}}function j2(){if(ix=!0,le==="mars")for(let n=0;n<3;n++){let t=nx(420,14195306,2.4,.45,!1);sx.push({...t,x:0,z:0,vx:0,vz:0,h:40+Math.random()*30,life:0,k:0})}else if(le==="europa"){let n=os.slice(0,8).map(t=>({x:t.x+(Math.random()-.5)*t.r*.6,z:t.z+(Math.random()-.5)*t.r*.6}));n.push({x:60,z:70},{x:-90,z:-40},{x:120,z:140});for(let t of n){if(Math.abs(t.x)>Kt-200||Math.abs(t.z)>Kt-200)continue;let e=nx(500,15267583,2.6,.6,!0);rx.push({...e,x:t.x,z:t.z,y:yt(t.x,t.z),t:Math.random()*30,on:0})}}else if(le==="kepler"){let n=new Bt(1,12,6,0,Math.PI*2,0,Math.PI/2);for(let t=0;t<34;t++){let e=.45+Math.random()*.4,i=new dt().setHSL(e,.9,.6),s=new at(n,new ne({color:i,transparent:!0,opacity:.55,depthWrite:!1,blending:Me})),r=new Ri(new ui({map:Wn(),color:i,transparent:!0,depthWrite:!1,blending:Me})),o=new at(new ze(.6,3,6,1,!0),s.material);o.position.y=-1.6,o.rotation.x=Math.PI;let a=new wt;a.add(s,r,o),r.scale.setScalar(6);let l=.6+Math.random()*1.2;a.scale.setScalar(l),p.scene.add(a),ox.push({g:a,m:s,s:r,x:(Math.random()-.5)*500,z:(Math.random()-.5)*500,alt:14+Math.random()*30,ph:Math.random()*6,sp:.5+Math.random()})}}}var BT=new T,$f=0;function ax(n){ix||j2();let t=p.player.pos,e=performance.now()*.001,i=1-p.time.night;for(let s of sx){if(s.life-=n,s.life<=0){let c=Math.random()*Math.PI*2,h=90+Math.random()*200;s.x=We.clamp(t.x+Math.cos(c)*h,-Kt+160,Kt-160),s.z=We.clamp(t.z+Math.sin(c)*h,-Kt+160,Kt-160);let u=Math.random()*Math.PI*2;s.vx=Math.cos(u)*3,s.vz=Math.sin(u)*3,s.life=40+Math.random()*40,s.h=35+Math.random()*40}s.x+=s.vx*n,s.z+=s.vz*n;let r=Math.min(1,s.life/5,(60-s.life)/5+1)*i*(1-p.storm)*(p.terraform<1?1:.2);s.k+=(r-s.k)*Math.min(1,n),s.p.material.opacity=.45*s.k;let o=s.p.geometry.attributes.position.array,a=yt(s.x,s.z);for(let c=0;c<s.n;c++){let h=s.seed,u=(h[c*3]+e*.08*(.6+h[c*3+2]))%1,d=h[c*3+1]+e*(3+(1-u)*2),f=.8+u*u*9+h[c*3+2]*1.5,g=Math.sin(e*.7+u*4)*u*3;o[c*3]=s.x+Math.cos(d)*f+g,o[c*3+1]=a+u*s.h,o[c*3+2]=s.z+Math.sin(d)*f}s.p.geometry.attributes.position.needsUpdate=!0;let l=Math.hypot(t.x-s.x,t.z-s.z);l<8&&s.k>.5&&!p.driving&&(p.player.vel.x+=(t.x-s.x)/l*n*20,p.player.vel.z+=(t.z-s.z)/l*n*20)}$f-=n;for(let s of rx){s.t-=n,s.t<=0&&s.on<=0&&(s.on=9,s.t=25+Math.random()*30,Math.hypot(t.x-s.x,t.z-s.z)<120&&et.play("rumble")),s.on-=n;let r=We.clamp(Math.min(s.on,9-s.on),0,1.5)/1.5;if(s.p.material.opacity=.6*r,r<=0)continue;let o=s.p.geometry.attributes.position.array,a=70;for(let l=0;l<s.n;l++){let c=s.seed,h=(c[l*3]+e*.35)%1,u=.4+h*9*c[l*3+2]+h*h*4;o[l*3]=s.x+Math.cos(c[l*3+1])*u,o[l*3+1]=s.y+Math.sin(h*Math.PI*.9)*a*(.6+c[l*3+2]*.4),o[l*3+2]=s.z+Math.sin(c[l*3+1])*u}s.p.geometry.attributes.position.needsUpdate=!0,Math.hypot(t.x-s.x,t.z-s.z)<40&&$f<=0&&($f=.5,et.play("jet"))}for(let s of ox){s.ph+=n*s.sp,s.x+=Math.sin(s.ph*.3)*n*2,s.z+=Math.cos(s.ph*.23)*n*2,Math.abs(s.x-t.x)>260&&(s.x=t.x-Math.sign(s.x-t.x)*250),Math.abs(s.z-t.z)>260&&(s.z=t.z-Math.sign(s.z-t.z)*250);let r=yt(s.x,s.z)+s.alt+Math.sin(s.ph)*2;s.g.position.set(s.x,r,s.z);let o=.75+Math.sin(s.ph*3)*.25;s.m.scale.set(1+Math.sin(s.ph*3)*.12,1-Math.sin(s.ph*3)*.1,1+Math.sin(s.ph*3)*.12);let a=.15+p.time.night*.85;s.m.material.opacity=.5*a*o,s.s.material.opacity=.7*a*o}}var Fi,qf,tl,Yf,Nr,Zf,Qo=[],el=0,Qa=-1,Jf=20,th=0,er=new T,lx=new T,cx=new Set,nh=140;function ux(){Fi=new wt;let n=new at(new Bt(.32,20,14),M.white),t=new at(new Zt(.33,.04,8,28),M.orange);t.rotation.x=Math.PI/2;let e=new at(new Bt(.2,16,10,-Math.PI*.35,Math.PI*.7,Math.PI*.3,Math.PI*.4),new ht({color:660504,roughness:.1,metalness:.6}));e.position.z=.15,e.rotation.y=Math.PI,qf=Dt(8382207,.45,null,0,.02,.33),tl=new at(new Zt(.5,.015,6,40),new ne({color:8382207,transparent:!0,opacity:.6})),tl.rotation.x=Math.PI/2;let i=new at(new ze(.05,.25,6),M.metal);i.position.y=.38,Fi.add(n,t,e,qf,tl,i,Dt(16738874,.25,null,0,.5,0)),Fi.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),Fi.scale.setScalar(.8),Yf=new ks(12578815,0,22,1.6),Fi.add(Yf),p.scene.add(Fi);let s=p.player.pos;er.set(s.x+1.5,s.y+2.2,s.z+1.5),Fi.position.copy(er),Zf=new ne({color:8382207,transparent:!0,opacity:0,side:Qe,depthWrite:!1,blending:Me}),Nr=new at(new gn(.94,1,96),Zf),Nr.rotation.x=-Math.PI/2,Nr.visible=!1,p.scene.add(Nr)}function jo(n,t,e=!0){e&&cx.has(n)||Jf>0&&e||(cx.add(n),Jf=45,$e("\u5C0F\u661F \xB7 \u4F19\u4F34\u673A\u5668\u4EBA",t))}var eh;function Q2(){if(eh)return eh;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");return t.translate(32,32),t.rotate(Math.PI/4),t.strokeStyle="#fff",t.lineWidth=5,t.strokeRect(-14,-14,28,28),t.fillStyle="rgba(255,255,255,.35)",t.fillRect(-9,-9,18,18),eh=new on(n),eh}function tb(){if(el>0){p.events.emit("toast",`\u626B\u63CF\u51B7\u5374\u4E2D \xB7 ${Math.ceil(el)} \u79D2`),et.play("deny");return}el=12,Qa=0,et.play("scan");for(let s of Qo)p.scene.remove(s.s);Qo=[];let n=p.player.pos,t={};for(let s of p.nodes){let r=Math.hypot(s.x-n.x,s.z-n.z);if(r>nh)continue;let o=ls[s.type],a=new Ri(new ui({map:Q2(),color:new dt(o[0],o[1],o[2]),transparent:!0,depthTest:!1,depthWrite:!1,opacity:0,sizeAttenuation:!1}));a.scale.setScalar(s.type==="titanium"?.05:.036),a.position.set(s.x,s.y+3,s.z),a.renderOrder=999,p.scene.add(a),Qo.push({s:a,delay:r/90,life:10}),t[s.type]=(t[s.type]||0)+1}let e={iron:"\u94C1\u77FF",silicon:"\u7845\u6676",ice:"\u6C34\u51B0",titanium:"\u949B\u77FF"},i=Object.entries(t).map(([s,r])=>`${e[s]} ${r}`).join(" \xB7 ");p.events.emit("toast",i?`\u626B\u63CF\u5B8C\u6210 \xB7 ${i}`:"\u626B\u63CF\u5B8C\u6210 \xB7 \u9644\u8FD1\u6CA1\u6709\u77FF\u85CF"),p.stats.scans=(p.stats.scans||0)+1}function dx(n){if(!Fi)return;let t=p.player,e=performance.now()*.001;el=Math.max(0,el-n),Jf-=n,lt.hit("KeyQ")&&!p.menuOpen&&!t.dead&&tb();let i=(p.driving,t.yaw),s=new T(Math.cos(i),0,-Math.sin(i)),r=new T(-Math.sin(i),0,-Math.cos(i)),o=t.pos.clone().addScaledVector(s,p.driving?3.5:3).addScaledVector(r,p.driving?2:5.5);o.y=Math.max(t.pos.y+1.55,yt(o.x,o.z)+.8)+Math.sin(e*2)*.12,p.driving&&(o.y+=2.2);let a=er.distanceTo(o)>30?1:Math.min(1,n*3);lx.lerp(o.clone().sub(er).multiplyScalar(4),a),er.addScaledVector(lx,n),er.distanceTo(o)>40&&er.copy(o),Fi.position.copy(er);let l=t.pos.clone().addScaledVector(t.fwd,12);if(l.y+=1.5,Fi.lookAt(l),tl.rotation.z+=n*1.5,tl.rotation.x=Math.PI/2+Math.sin(e*1.3)*.3,qf.material.opacity=.75+Math.sin(e*4)*.25,Yf.intensity=p.time.night>.4?18*p.time.night:0,Qa>=0){Qa+=n;let h=Qa*90;Nr.visible=h<nh,Nr.position.set(t.pos.x,t.pos.y+.6,t.pos.z),Nr.scale.setScalar(Math.max(.1,h)),Zf.opacity=.7*(1-h/nh),h>=nh&&(Qa=-1)}for(let h=Qo.length-1;h>=0;h--){let u=Qo[h];u.delay-=n,!(u.delay>0)&&(u.life-=n,u.s.material.opacity=Math.min(1,(10-u.life)*3,u.life/2)*(.75+Math.sin(e*5+h)*.25),u.life<=0&&(p.scene.remove(u.s),u.s.material.dispose(),Qo.splice(h,1)))}th=Math.hypot(t.vel.x,t.vel.z)>.5?0:th+n,!t.inLife&&t.o2<t.maxO2*.3&&jo("o2"+Math.floor(e/120),"\u6C27\u6C14\u4E0D\u591A\u4E86\uFF01\u6700\u8FD1\u7684\u8865\u6C27\u70B9\u5728\u7F57\u76D8\u4E0A\u90A3\u4E2A\u623F\u5B50\u56FE\u6807\u7684\u65B9\u5411\u3002",!1),p.time.night>.6&&!t.flashlight&&jo("dark","\u597D\u9ED1\u2026\u2026\u6309 F \u6253\u5F00\u624B\u7535\u7B52\u5427\u3002\u6211\u4E5F\u4F1A\u5E2E\u4F60\u7167\u7740\u70B9\u3002"),p.enemies.some(h=>!h.dead&&!h.guardian&&h.pos.distanceTo(t.pos)<25)&&jo("enemy"+Math.floor(e/90),"\u68C0\u6D4B\u5230\u9508\u8680\u86DB\u9760\u8FD1\uFF01\u5C0F\u5FC3\uFF01",!1),p.nodes.some(h=>h.type==="titanium"&&Math.hypot(h.x-t.pos.x,h.z-t.pos.z)<40)&&jo("ti","\u9644\u8FD1\u6709\u949B\u77FF\u7684\u4FE1\u53F7\uFF01\u7D2B\u8272\u7684\u90A3\u79CD\uFF0C\u5F88\u7A00\u6709\u54E6\u3002"),th>40&&(th=-200,jo("idle"+Math.floor(e/300),hx[le][Math.floor(Math.random()*hx[le].length)],!1)),p.stats.scans===void 0&&p.time.day>=1&&e>30&&jo("scanhint","\u6211\u80FD\u626B\u63CF\u9644\u8FD1\u7684\u77FF\u85CF\u2014\u2014\u6309 Q \u8BD5\u8BD5\u3002")}var hx={mars:["\u4F60\u77E5\u9053\u5417\uFF1F\u706B\u661F\u4E0A\u7684\u4E00\u5929\u6BD4\u5730\u7403\u957F 37 \u5206\u949F\u3002","\u706B\u661F\u7684\u65E5\u843D\u662F\u84DD\u8272\u7684\u3002\u7B49\u508D\u665A\u7684\u65F6\u5019\u62AC\u5934\u770B\u770B\u5427\u3002","\u90A3\u5EA7\u6700\u9AD8\u7684\u5C71\u53EB\u5965\u6797\u5E15\u65AF\uFF0C\u662F\u5730\u7403\u73E0\u5CF0\u7684\u4E24\u500D\u591A\u9AD8\u3002","\u6211\u7684\u6570\u636E\u5E93\u91CC\u6709\u4E00\u9996\u5730\u7403\u7684\u6B4C\uFF0C\u53EB\u300A\u6708\u4EAE\u4EE3\u8868\u6211\u7684\u5FC3\u300B\u3002\u8981\u6211\u54FC\u7ED9\u4F60\u542C\u5417\uFF1F\u2026\u2026\u7B97\u4E86\uFF0C\u6211\u8DD1\u8C03\u3002"],europa:["\u6728\u661F\u597D\u5927\u2026\u2026\u611F\u89C9\u5B83\u968F\u65F6\u4F1A\u6389\u4E0B\u6765\u3002","\u51B0\u5C42\u4E0B\u9762\u7684\u6D77\uFF0C\u53EF\u80FD\u6BD4\u5730\u7403\u6240\u6709\u7684\u6D77\u52A0\u8D77\u6765\u8FD8\u8981\u591A\u3002","\u8FD9\u91CC\u7684\u91CD\u529B\u5F88\u5C0F\uFF0C\u8DF3\u9AD8\u4E00\u70B9\u6CA1\u5173\u7CFB\u7684\u3002"],kepler:["\u4E24\u4E2A\u592A\u9633\uFF01\u5F71\u5B50\u90FD\u6709\u4E24\u4E2A\uFF01","\u90A3\u4E9B\u53D1\u5149\u7684\u6C34\u6BCD\u2026\u2026\u5B83\u4EEC\u662F\u5728\u770B\u6211\u4EEC\u5417\uFF1F","\u7A7A\u6C14\u91CC\u7684\u6C27\u6C14\u5DF2\u7ECF\u6709 14% \u4E86\u3002\u518D\u8FC7\u51E0\u5341\u5E74\uFF0C\u4E5F\u8BB8\u5C31\u80FD\u6458\u4E0B\u5934\u76D4\u4E86\u3002"]};var cn=null,fx=new rn,Kf=new mn,nl=new T;function eb(){let n=new wt,t=new wt;n.add(t);let e=(d,f,g,y,x,m=t,_=0,E=0,v=0)=>{let I=new at(d,f);return I.position.set(g,y,x),I.rotation.set(_,E,v),I.castShadow=!0,I.receiveShadow=!0,m.add(I),I},i=(d,f,g,y=.08)=>new Ho(d,f,g,2,y),s=(d,f,g,y,x=t)=>{let m=f.clone().sub(d),_=e(new te(g,g,m.length(),8),y,0,0,0,x);return _.position.copy(d).add(f).multiplyScalar(.5),_.quaternion.setFromUnitVectors(new T(0,1,0),m.normalize()),_},r=(d,f,g)=>new T(d,f,g);e(i(2.5,.35,4.8,.1),M.dark,0,.85,0),e(i(2.6,.75,3.4,.18),M.white,0,1.35,.5),e(i(2.64,.14,3.44,.05),M.orange,0,1.62,.5),e(i(2.2,.5,1.2,.12),M.panel,0,1.25,-1.9,t,-.25,0,0);let o=e(new Bt(1.15,32,16,0,Math.PI*2,0,Math.PI/2),M.glass,0,1.72,-.75);o.scale.set(1,.8,1.15),o.castShadow=!1;for(let d=0;d<5;d++)e(new Zt(1.16,.035,6,24,Math.PI),M.metal,0,1.72,-.75,t,0,d*Math.PI/5,0).scale.set(1,.8,1.15);for(let d of[-1.15,1.15])s(r(d,1.7,.6),r(d*.9,2.75,.9),.06,M.metal),s(r(d,1.7,2.1),r(d*.9,2.75,1.9),.06,M.metal);s(r(-1.04,2.75,.9),r(1.04,2.75,.9),.06,M.metal),s(r(-1.04,2.75,1.9),r(1.04,2.75,1.9),.06,M.metal),s(r(-1.04,2.75,.9),r(-1.04,2.75,1.9),.06,M.metal),s(r(1.04,2.75,.9),r(1.04,2.75,1.9),.06,M.metal),e(i(1.8,.16,.22,.05),M.dark,0,2.82,.9);let a=[];for(let d=0;d<4;d++)e(new Ns(.07,12),M.lamp,-.6+d*.4,2.82,.78,t,0,Math.PI,0),a.push(Dt(16773853,.9,t,-.6+d*.4,2.82,.75));for(let d of[-.85,.85])a.push(Dt(16773853,1.2,t,d,1.2,-2.5));for(let d of[-.85,.85])e(i(.35,.18,.08,.04),M.lamp,d,1.2,-2.42);e(i(2.3,.08,1.5,.03),M.metal,0,1.78,1.6);for(let[d,f,g]of[[-.5,1.4,.6],[.4,1.7,.7],[.5,1.1,.45]])e(i(g,g*.8,g,.04),M.dark,d,1.82+g*.4,f);e(new te(.02,.02,1.6,4),M.metal,.9,3.5,1.9);let l=Dt(16728128,.6,t,.9,4.3,1.9);for(let d=0;d<3;d++)e(i(.06,.06,.5,.02),M.metal,1.33,.75+d*.28,-.2);e(i(.1,.4,1,.04),M.orange,-1.32,1.3,1);let c=[],h=new Zt(.46,.2,12,28);for(let d of[-1.65,0,1.65])for(let f of[-1.5,1.5]){let g=new wt;g.position.set(f,.62,d),n.add(g);let y=e(h,M.rubber,0,0,0,g,0,Math.PI/2,0);for(let x=0;x<14;x++){let m=x/14*Math.PI*2;e(new Gt(.42,.06,.1),M.rubber,0,Math.cos(m)*.64,Math.sin(m)*.64,g,m,0,0)}e(new te(.34,.34,.3,20),M.metal,0,0,0,g,0,0,Math.PI/2);for(let x=0;x<5;x++)e(new Gt(.32,.06,.06),M.dark,f>0?.16:-.16,0,0,g,x*Math.PI/5,0,0).scale.set(.3,1,9);e(new te(.1,.1,.34,10),M.chrome,0,0,0,g,0,0,Math.PI/2),s(r(f*.62,.95,d),r(f*.95,.66,d),.07,M.metal,n),s(r(f*.7,1.15,d+.3),r(f*.95,.75,d),.04,M.chrome,n),c.push(g)}let u=new vo(16773853,0,60,.5,.5,1.2);return u.position.set(0,1.2,-2.4),u.target.position.set(0,0,-20),t.add(u,u.target),{g:n,body:t,wheels:c,tip:l,lamp:u,heads:a}}function sh(n,t,e=0){if(cn)return cn;let i=eb();return p.scene.add(i.g),cn={...i,x:n,z:t,y:yt(n,t),h:e,speed:0,vy:0,lookYaw:0,pitch:-.05,spin:0,hitT:0,air:!1},cn.collider=p.colliders.add({x:n,z:t,r:2,kind:"rover"}),jf(0),cn}function rh(){return cn}function px(){return cn?{x:+cn.x.toFixed(1),z:+cn.z.toFixed(1),h:+cn.h.toFixed(2)}:null}function ih(n,t){return yt(n,t)}function jf(n){let t=cn,e=Math.sin(t.h),i=Math.cos(t.h),s=-e,r=-i,o=i,a=-e,l=ih(t.x+s*1.8,t.z+r*1.8),c=ih(t.x-s*1.8,t.z-r*1.8),h=ih(t.x-o*1.3,t.z-a*1.3),u=ih(t.x+o*1.3,t.z+a*1.3),d=Math.atan2(l-c,3.6),f=Math.atan2(u-h,2.6);t.g.position.set(t.x,t.y,t.z),Kf.set(t.air?t.g.rotation.x:d,t.h,t.air?t.g.rotation.z:-f,"YXZ"),t.air||t.g.rotation.copy(Kf),t.spin+=t.speed*n/.55;for(let g of t.wheels)g.rotation.x=-t.spin;return(l+c+h+u)/4}function mx(){cn&&(p.driving=!0,cn.lookYaw=0,cn.pitch=-.08,p.colliders.remove(cn.collider),et.play("place"))}function Qf(n){let t=cn;if(!t)return;p.driving=!1,et.engine(0);let e=Math.cos(t.h),i=Math.sin(t.h),s=t.x+e*3,r=t.z-i*3;p.colliders.overlaps(s,r,.5)&&(s=t.x-e*3,r=t.z+i*3),n.pos.set(s,yt(s,r),r),n.vel.set(0,0,0),n.yaw=t.h+t.lookYaw,n.pitch=t.pitch,t.speed=0,t.lamp.intensity=0,t.collider=p.colliders.add({x:t.x,z:t.z,r:2,kind:"rover"})}function gx(n,t,e){if(!cn)return;let i=cn;if(i.tip.visible=Math.sin(performance.now()*.005)>0,!p.driving){i.y=jf(0);return}p.locked&&(i.lookYaw=We.clamp(i.lookYaw-lt.dx*lt.sens,-2.4,2.4),i.pitch=We.clamp(i.pitch-lt.dy*lt.sens,-1,.9));let s=(lt.down("KeyW")||lt.down("ArrowUp")?1:0)-(lt.down("KeyS")||lt.down("ArrowDown")?1:0),r=(lt.down("KeyA")||lt.down("ArrowLeft")?1:0)-(lt.down("KeyD")||lt.down("ArrowRight")?1:0),o=lt.down("ShiftLeft")?28:17;i.air||(s>0?i.speed+=(i.speed<0?22:11)*n:s<0?i.speed-=(i.speed>0?22:7)*n:i.speed*=1-.7*n,lt.down("Space")&&(i.speed*=1-3.5*n),i.speed=We.clamp(i.speed,-7,o),i.speed>o&&(i.speed-=20*n),i.h+=r*n*1.5*We.clamp(i.speed/5,-1,1)),nl.set(-Math.sin(i.h),0,-Math.cos(i.h)),p.stats.driven=(p.stats.driven||0)+Math.abs(i.speed)*n,i.x=We.clamp(i.x+nl.x*i.speed*n,-Kt+125,Kt-125),i.z=We.clamp(i.z+nl.z*i.speed*n,-Kt+125,Kt-125);for(let c of p.colliders.query(i.x,i.z)){c.kind==="flora"&&Math.abs(i.speed)>0;let h=i.x-c.x,u=i.z-c.z,d=Math.hypot(h,u),f=c.r+1.9;if(d<f&&d>.001){if(c.kind==="rock"&&c.r<1.3)continue;i.x=c.x+h/d*f,i.z=c.z+u/d*f,Math.abs(i.speed)>5&&(et.play("land"),vt.dustPuff(new T(i.x,i.y+1,i.z),6,2)),i.speed*=-.25}}if(i.hitT-=n,Math.abs(i.speed)>6&&i.hitT<=0)for(let c of p.enemies)c.dead||Math.hypot(c.pos.x-i.x,c.pos.z-i.z)<2.6+c.scale&&(Za(c,Math.abs(i.speed)*4,"player"),i.hitT=.4,i.speed*=.7,vt.burst(new T(c.pos.x,c.pos.y+1,c.pos.z),[1,.5,.2],20,6));let a=yt(i.x,i.z);if(i.air)i.vy-=ut.gravity*n,i.y+=i.vy*n,i.y<=a&&(i.y=a,i.air=!1,i.vy<-5&&(et.play("land"),vt.dustPuff(new T(i.x,i.y,i.z),14,3)),i.vy=0);else{let c=i.y+i.vy*n-.5*ut.gravity*n*n;if(a<c-.25&&i.vy>1.5&&Math.abs(i.speed)>12)i.air=!0,i.vy=Math.min(i.vy,7),i.y=c;else{let h=(a-i.y)/Math.max(n,.001);i.vy=i.vy*.6+h*.4,i.y=a}}if(jf(n),Math.abs(i.speed)>4&&!i.air&&Math.random()<.6){let c=new T(i.x-nl.x*2.5+(Math.random()-.5)*2,i.y+.3,i.z-nl.z*2.5);vt.dustPuff(c,1,.5)}i.lamp.intensity=p.time.night>.3?80:0;for(let c of i.heads)c.visible=p.time.night>.3;fx.setFromEuler(Kf.set(i.pitch,i.lookYaw,0,"YXZ")),e.quaternion.copy(i.body.getWorldQuaternion(new rn)).multiply(fx);let l=new T(0,2.15,-.7).applyQuaternion(i.g.quaternion).add(i.g.position);e.position.copy(l),e.getWorldDirection(t.fwd),t.pos.set(i.x,i.y,i.z),t.vel.set(0,0,0),t.inLife=!0,t.o2=Math.min(t.maxO2,t.o2+20*n),t.energy=Math.min(100,t.energy+10*n),t.hurtT=Math.max(0,t.hurtT-n),et.engine(Math.abs(i.speed)/28)}function xx(){return cn?Math.round(Math.abs(cn.speed)*3.6):0}var oh=[],ip=new ze(1,1,8,1,!0);ip.rotateX(Math.PI);ip.translate(0,-.5,0);var nb=new T(0,1,0),ep=0,tp=0,ah=0,np=0,yx=-1;function ib(){ep=45,np=0,ah=6,$e("\u65B9\u821F \xB7 AI","\u770B\u5929\u4E0A\u2014\u2014\u6D41\u661F\u96E8\uFF01\u6709\u51E0\u9897\u4F1A\u843D\u5230\u9644\u8FD1\u3002\u9668\u77F3\u91CC\u5BCC\u542B\u949B\uFF0C\u53BB\u5760\u843D\u70B9\u770B\u770B\u3002"),p.events.emit("toast","\u2604 \u6D41\u661F\u96E8")}function vx(n){let t=p.player.pos,e;if(n){for(let h=0;h<20;h++){let u=Math.random()*Math.PI*2,d=40+Math.random()*110,f=We.clamp(t.x+Math.cos(u)*d,-Kt+180,Kt-180),g=We.clamp(t.z+Math.sin(u)*d,-Kt+180,Kt-180);if(!p.buildings.some(y=>Math.hypot(y.x-f,y.z-g)<y.def.r+14)){e=new T(f,yt(f,g),g);break}}if(!e)return}else{let h=Math.random()*Math.PI*2,u=150+Math.random()*350;e=new T(t.x+Math.cos(h)*u,t.y+110+Math.random()*140,t.z+Math.sin(h)*u)}let i=new T((Math.random()-.5)*1.2,-.55-Math.random()*.3,(Math.random()-.5)*1.2).normalize(),s=n?520:420,r=e.clone().addScaledVector(i,-s),o=Dt(n?16756848:16769216,n?18:10,p.scene);o.material.fog=!1,o.position.copy(r);let a=new at(ip,new ne({color:n?16751184:16767144,transparent:!0,opacity:.75,blending:Me,depthWrite:!1,fog:!1})),l=n?90:70+Math.random()*70,c=n?2.2:1.3;a.scale.set(c,l,c),a.quaternion.setFromUnitVectors(nb,i),a.position.copy(r),p.scene.add(a),oh.push({pos:r,vel:i.multiplyScalar(n?150:220),head:o,tail:a,impact:n,target:e,life:s/(n?150:220)})}function _x(n){p.time.night>.7&&yx!==p.time.day&&p.time.day>=2&&p.storm<.1&&!p.ended&&(yx=p.time.day,Math.random()<.4&&ib()),ep>0&&(ep-=n,tp-=n,ah-=n,tp<=0&&(tp=.15+Math.random()*.35,vx(!1)),ah<=0&&np<4&&(ah=7+Math.random()*5,np++,vx(!0)));for(let e=oh.length-1;e>=0;e--){let i=oh[e];i.life-=n,i.pos.addScaledVector(i.vel,n),i.head.position.copy(i.pos),i.tail.position.copy(i.pos);for(let s=0;s<3;s++)vt.trail(i.pos.clone().addScaledVector(i.vel,-n*s/3),i.impact?[1,.6,.3]:[1,.85,.6],i.impact?1.2:.7);i.life<=0&&(p.scene.remove(i.head),p.scene.remove(i.tail),i.tail.material.dispose(),oh.splice(e,1),i.impact&&sb(i.target))}}function sb(n){let t=n.clone();t.y+=1.5,vt.burst(t,[1,.55,.2],120,22),vt.ring(n,2,90),vt.dustPuff(t,40,8),et.play("rumble"),et.play("kill");let e=n.distanceTo(p.player.pos);if(e<80&&(p.player.landDip=Math.max(p.player.landDip,.4*(1-e/80))),!p.colliders.overlaps(n.x,n.z,2.5)){let i=Lo("titanium",n.x,n.z,10+Math.floor(Math.random()*8));i.meteor=!0}p.events.emit("toast",`\u2604 \u9668\u77F3\u5760\u843D\u5728 ${Math.round(e)} \u7C73\u5916`)}var zt=n=>document.getElementById(n);p.debug=/[?&]debug/.test(location.search);var xs=zt("c"),wn=new xo({canvas:xs,antialias:!0,powerPreference:"high-performance"});wn.setPixelRatio(Math.min(window.devicePixelRatio,1.5));wn.setSize(window.innerWidth,window.innerHeight);wn.shadowMap.enabled=!0;wn.shadowMap.type=_d;wn.toneMapping=vr;wn.toneMappingExposure=1;var Hr="high";try{Hr=localStorage.getItem("starport-quality")||((navigator.hardwareConcurrency||8)<=4?"mid":"high")}catch{}function Rx(n,t){Hr=n,wn.setPixelRatio(n==="high"?Math.min(window.devicePixelRatio,1.5):n==="mid"?1:.75),wn.setSize(window.innerWidth,window.innerHeight);let e=n!=="low";wn.shadowMap.enabled!==e&&(wn.shadowMap.enabled=e,t&&p.scene.traverse(i=>{i.material&&[].concat(i.material).forEach(s=>{s.needsUpdate=!0})})),ni&&(ni.setPixelRatio(wn.getPixelRatio()),ni.setSize(window.innerWidth,window.innerHeight))}var ni=null,uh=null;function rb(){ni=new mc(wn),ni.addPass(new gc(ys,Re)),uh=new wo(new nt(window.innerWidth,window.innerHeight),.55,.5,.88),ni.addPass(uh),ni.addPass(new xc),dh=new bo({uniforms:{tDiffuse:{value:null},uT:{value:0},uNight:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uT, uNight; varying vec2 vUv;
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
      }`}),ni.addPass(dh)}var dh=null;function sp(){Hr==="high"&&ni?(uh.strength=.3+p.time.night*.22,uh.threshold=.9,dh.uniforms.uT.value=performance.now()*.001%100,dh.uniforms.uNight.value=p.time.night,ni.render()):wn.render(ys,Re)}Rx(Hr,!1);var ys=new Ai,Re=new sn(72,window.innerWidth/window.innerHeight,.1,6e3);rb();p.scene=ys;p.camera=Re;p.renderer=wn;p.colliders=new yc(16);window.addEventListener("resize",()=>{Re.aspect=window.innerWidth/window.innerHeight,Re.updateProjectionMatrix(),wn.setSize(window.innerWidth,window.innerHeight),ni&&ni.setSize(window.innerWidth,window.innerHeight)});p.hiShadows=Hr==="high";Cm(ys);gm(ys);Pm(ys);var ia=lg();ia.group.position.set(pe.x,yt(pe.x,pe.z)+.1,pe.z);ia.group.rotation.y=.6;ys.add(ia.group);p.colliders.add({x:pe.x,z:pe.z,r:3.4,kind:"lander"});var Xt=new Xc(Re);p.player=Xt;Ag(Re);Eg(xs);Jg(xm(350));nf(ys);p.requestLock=()=>{if(p.debug){p.locked=!0;return}try{let n=xs.requestPointerLock();n&&n.catch&&n.catch(()=>{})}catch{}};document.addEventListener("pointerlockchange",()=>{p.locked=document.pointerLockElement===xs,!p.locked&&p.started&&!p.menuOpen&&!Xt.dead&&!p.endingShown&&!p.cine&&Dr("pause")});xs.addEventListener("click",()=>{et.init(),p.started&&!p.locked&&!p.menuOpen&&!Xt.dead&&p.requestLock()});function vs(n){if(!p.started)return;let t={v:1,res:p.res,upgrades:p.upgrades,stats:p.stats,chapter:p.chapter,goalDone:p.goalDone,terraform:p.terraform,ended:p.ended,nights:p.nightsSurvived||0,city:p.cityLevel,pop:p.popTotal||0,launched:!!p.launched,rover:px(),relics:p.relicsFound||[],plazaSeen:!!p.plazaSeen,time:{t:p.time.t,day:p.time.day},player:{x:Xt.pos.x,z:Xt.pos.z,yaw:Xt.yaw,o2:Xt.o2,hp:Xt.health},buildings:og(),nodes:km(),colonists:Dg(),storm:pg()};try{localStorage.setItem(_c,JSON.stringify(t)),n||ln("\u5DF2\u4FDD\u5B58")}catch{n||ln("\u4FDD\u5B58\u5931\u8D25")}}function ob(){try{return JSON.parse(localStorage.getItem(_c))}catch{return null}}function ab(n){Object.assign(p.res,n.res),p.upgrades=n.upgrades||{},zm(n.nodes);for(let[t,e,i,s,r,o]of n.buildings)bn[t]&&kc(t,e,i,s,r,!1,o||1);p.stats=n.stats,p.goalDone=n.goalDone||{},p.terraform=n.terraform||0,p.ended=!!n.ended,p.nightsSurvived=n.nights||0,gg(p.terraform>=1),p.time.t=n.time.t,p.time.day=n.time.day,Xt.pos.set(n.player.x,yt(n.player.x,n.player.z),n.player.z),Xt.yaw=n.player.yaw,Xt.o2=n.player.o2,Xt.health=Math.max(30,n.player.hp),Ug(n.colonists||[]),n.rover&&sh(n.rover.x,n.rover.z,n.rover.h),p.relicsFound=n.relics||[],p.plazaSeen=!!n.plazaSeen,p.cityLevel=n.city||0,p.popTotal=n.pop??(n.colonists||[]).length,p.launched=!!n.launched,nf(ys),mg(n.storm),Ya(n.chapter,!0),hs(),p.terraform>0&&$d(Cx(),p.terraform)}var Cx=()=>p.buildings.filter(n=>n.type==="terraformer").map(n=>({x:n.x,z:n.z})),lb=ut.intro;document.querySelector(".logo span").textContent=ut.title;document.title="\u661F\u6E2F\uFF1A"+ut.title;Dn.visited?.length&&(zt("touch-note").innerHTML="\u5DF2\u5F00\u62D3\uFF1A"+Dn.visited.map(n=>`${Gn[n.id].name}\uFF08${n.pop} \u4EBA\uFF09`).join(" \xB7 "));zt("story").innerHTML=lb.map((n,t)=>`<p style="animation-delay:${.4+t*1.1}s">${n}</p>`).join("");var Oi=ob();Oi&&(zt("btn-continue").classList.remove("hidden"),zt("cont-info").textContent=`${ut.name} \xB7 ${ti[Oi.chapter]?.title||""} \xB7 \u7B2C ${Oi.time.day} \u65E5 \xB7 ${Oi.pop??Oi.colonists?.length??0} \u4F4D\u5C45\u6C11`);matchMedia("(pointer: coarse)").matches&&(zt("touch-note").innerHTML+="\u672C\u6E38\u620F\u9700\u8981\u952E\u76D8\u548C\u9F20\u6807\uFF0C\u8BF7\u5728\u7535\u8111\u4E0A\u6E38\u73A9\u3002");function cb(n){if(p.debug){setTimeout(n,1200);return}let t=zt("cine"),e=ut.intro;p.cine=!0,t.classList.remove("hidden","out"),zt("cine-lines").innerHTML=e.map((o,a)=>`<p style="animation-delay:${.6+a*2.1}s">${o}</p>`).join("");let i=!1,s=()=>{i||(i=!0,t.classList.add("out"),p.cine=!1,window.removeEventListener("keydown",r),window.removeEventListener("mousedown",s),setTimeout(()=>t.classList.add("hidden"),1500),setTimeout(n,900))},r=o=>{(o.code==="Space"||o.code==="Escape"||o.code==="Enter")&&s()};window.addEventListener("keydown",r),window.addEventListener("mousedown",s),setTimeout(s,1500+e.length*2100+1800)}function fh(n){if(et.init(),n&&Oi)ab(Oi);else{if(localStorage.removeItem(_c),Um(),Dn.carry&&le!=="mars"){Object.assign(p.upgrades,Dn.carry.upgrades||{});for(let t in Dn.carry.res)p.res[t]+=Dn.carry.res[t];p.upgrades.rover&&sh(pe.x+10,pe.z+4,.5),setTimeout(()=>ln("\u968F\u8230\u7269\u8D44\u5DF2\u5378\u8F7D\uFF0C\u6240\u6709\u88C5\u5907\u5DF2\u540C\u6B65"),4e3)}p.time.t=.29,Ya(0,!0),cb(()=>Eb(()=>{Ko(ti[0]),ti[0].radio.forEach(t=>$e(t[0],t[1]))}))}kg(),ux(),Hr!=="low"&&bm(),zt("intro").classList.add("hidden"),document.body.classList.add("playing"),p.started=!0,p.requestLock()}zt("btn-new").addEventListener("click",()=>{Oi&&!confirm("\u5F00\u59CB\u65B0\u7684\u65C5\u7A0B\u4F1A\u8986\u76D6\u73B0\u6709\u5B58\u6863\uFF0C\u786E\u5B9A\u5417\uFF1F")||fh(!1)});zt("btn-continue").addEventListener("click",()=>fh(!0));zt("tele-planet").textContent=`${ut.name} \xB7 ${ut.place}`;var hb=`<h3>\u64CD\u4F5C</h3><div class="keys">
  <div><kbd>W A S D</kbd><span>\u79FB\u52A8</span></div><div><kbd>\u9F20\u6807</kbd><span>\u73AF\u89C6</span></div>
  <div><kbd>Shift</kbd><span>\u51B2\u523A</span></div><div><kbd>\u7A7A\u683C</kbd><span>\u8DF3\u8DC3 / \u55B7\u6C14\u80CC\u5305</span></div>
  <div><kbd>\u5DE6\u952E</kbd><span>\u91C7\u77FF \xB7 \u5C04\u51FB \xB7 \u653E\u7F6E\u5EFA\u7B51</span></div><div><kbd>\u53F3\u952E</kbd><span>\u53D6\u6D88\u5EFA\u9020</span></div>
  <div><kbd>1</kbd><kbd>2</kbd><span>\u5207\u6362\u5DE5\u5177</span></div><div><kbd>B</kbd><span>\u5EFA\u9020\u84DD\u56FE</span></div>
  <div><kbd>E</kbd><span>\u4E92\u52A8 \xB7 \u4EA4\u8C08 \xB7 \u4E0A\u8F66</span></div><div><kbd>U</kbd><span>\u5347\u7EA7\u6CE8\u89C6\u7684\u5EFA\u7B51</span></div>
  <div><kbd>Q</kbd><span>\u5C0F\u661F\u626B\u63CF\u77FF\u85CF</span></div><div><kbd>F</kbd><span>\u624B\u7535\u7B52</span></div><div><kbd>Tab</kbd><span>\u6B96\u6C11\u5730\u6863\u6848</span></div>
  <div><kbd>P</kbd><span>\u62CD\u7167\u6A21\u5F0F</span></div><div><kbd>Esc</kbd><span>\u6682\u505C</span></div></div>
  <h3>\u751F\u5B58</h3><p>\u6C27\u6C14\u4F1A\u6301\u7EED\u6D88\u8017\u3002\u7740\u9646\u8231\u3001\u5236\u6C27\u7AD9\u548C\u5C45\u4F4F\u7A79\u9876\u9644\u8FD1\u4F1A\u81EA\u52A8\u8865\u6C27\u3002\u5EFA\u597D\u4F4F\u623F\u3001\u6C27\u6C14\u3001\u98DF\u7269\u3001\u6C34\u548C\u7740\u9646\u573A\uFF0C\u79FB\u6C11\u98DE\u8239\u5C31\u4F1A\u5230\u6765\u3002\u591C\u91CC\u8981\u63D0\u9632\u9508\u8680\u86DB\u3002</p>`,Px=n=>{let t=zt("intro-pane");if(!t.classList.contains("hidden")&&t.dataset.k===n.slice(0,20)){t.classList.add("hidden");return}t.dataset.k=n.slice(0,20),t.innerHTML=n,t.classList.remove("hidden"),et.play("tick")};zt("btn-t-help").addEventListener("click",()=>Px(hb));zt("btn-t-achv").addEventListener("click",()=>Px(Xf()));le!=="mars"&&!Oi&&(zt("btn-new").textContent=`\u767B\u9646 ${ut.name}`);if(Dn.autoResume&&Oi){let n=To();delete n.autoResume,Bd(n),setTimeout(()=>{fh(!0),ln(`\u6B22\u8FCE\u56DE\u6765 \xB7 ${ut.name}`)},50)}zt("btn-save").addEventListener("click",()=>vs(!1));zt("btn-archive").addEventListener("click",()=>zf(Bf()));zt("btn-achv").addEventListener("click",()=>zf(Xf()));zt("btn-restart").addEventListener("click",()=>{confirm("\u5C06\u5220\u9664\u6240\u6709\u661F\u7403\u7684\u8FDB\u5EA6\uFF0C\u4ECE\u706B\u661F\u91CD\u65B0\u5F00\u59CB\u3002\u786E\u5B9A\u5417\uFF1F")&&(nm(),p.started=!1,location.href=location.pathname+(p.debug?"?debug":""))});zt("vol").addEventListener("input",n=>et.setVolume(+n.target.value));zt("quality").value=Hr;p.baseFov=72;try{let n=+localStorage.getItem("starport-fov");n>=60&&n<=100&&(p.baseFov=n,Re.fov=n,Re.updateProjectionMatrix(),zt("fov").value=n)}catch{}zt("fov").addEventListener("input",n=>{p.baseFov=+n.target.value,Re.fov=+n.target.value,Re.updateProjectionMatrix();try{localStorage.setItem("starport-fov",n.target.value)}catch{}});zt("quality").addEventListener("change",n=>{Rx(n.target.value,!0);try{localStorage.setItem("starport-quality",n.target.value)}catch{}});zt("sens").addEventListener("input",n=>{lt.sens=+n.target.value});zt("btn-respawn").addEventListener("click",()=>{p.driving&&Qf(Xt),Xt.respawn(),zt("death").classList.add("hidden"),p.requestLock()});zt("btn-endcont").addEventListener("click",()=>{zt("ending").classList.add("hidden"),p.endingShown=!1,p.requestLock()});p.events.on("chapter",n=>Ko(n));p.events.on("crafted",n=>{if(n!=="rover")return;let t=p.buildings.find(i=>i.type==="fabricator"),e=t||Xt.pos;for(let i=0;i<12;i++){let s=i*.9,r=(t?t.def.r:0)+5+i,o=e.x+Math.cos(s)*r,a=e.z+Math.sin(s)*r;if(!p.colliders.overlaps(o,a,2.6)){sh(o,a,-s);break}}$e("\u65B9\u821F \xB7 AI","\u6F2B\u6E38\u8F66\u5DF2\u51FA\u5382\u3002\u8F66\u8231\u52A0\u538B\uFF0C\u53EF\u4EE5\u5728\u8F66\u91CC\u8865\u6C27\u3002\u5C0F\u5FC3\u522B\u5F00\u4E0B\u60AC\u5D16\u3002")});p.events.on("cityLevel",n=>{Ko({k:`COLONY LEVEL ${["I","II","III","IV","V","VI"][p.cityLevel]}`,title:n.name,sub:`\u57CE\u5E02\u5347\u7EA7 \xB7 \u9886\u5730\u6269\u5C55\u81F3 ${n.r} \u7C73`});let t={1:["\u65B9\u821F \xB7 AI","\u6B96\u6C11\u5730\u5347\u7EA7\u4E3A\u5B9A\u5C45\u70B9\u3002\u9886\u5730\u6269\u5927\u4E86\uFF0C\u66F4\u8FDC\u7684\u571F\u5730\u53EF\u4EE5\u5EFA\u9020\u4E86\u3002"],2:["\u65B9\u821F \xB7 AI","\u5C0F\u9547\u89C4\u6A21\u8FBE\u6210\u3002\u516C\u5BD3\u5854\u4E0E\u5782\u76F4\u519C\u573A\u7684\u8BBE\u8BA1\u56FE\u5DF2\u89E3\u9501\u3002"],3:["\u65B9\u821F \xB7 AI","\u8FD9\u91CC\u5DF2\u7ECF\u662F\u4E00\u5EA7\u57CE\u5E02\u4E86\u3002\u751F\u6001\u4E2D\u67A2\u7684\u8BBE\u8BA1\u56FE\u5DF2\u89E3\u9501\u3002"],4:["\u65B9\u821F \xB7 AI","\u5927\u90FD\u4F1A\u3002\u591C\u91CC\uFF0C\u4ECE\u8F68\u9053\u4E0A\u80FD\u770B\u89C1\u4F60\u4EEC\u7684\u706F\u5149\u3002"],5:["\u65B9\u821F \xB7 AI","\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C\u661F\u6E2F\u300D\u2014\u2014\u4EBA\u7C7B\u53EF\u4EE5\u4ECE\u8FD9\u91CC\u98DE\u5411\u4E0B\u4E00\u9897\u661F\u7403\u4E86\u3002"]}[p.cityLevel];t&&$e(t[0],t[1]),vs(!0)});p.events.on("openBuild",()=>Dr("build"));p.events.on("death",n=>{et.laser(!1),setTimeout(()=>{if(p.endingShown){Xt.respawn();return}zt("death-why").textContent=n,zt("death").classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock()},1500)});p.events.on("tide",n=>{et.play("night"),Ko({k:"CRYSTAL TIDE",title:"\u6676\u6F6E\u4E4B\u591C",sub:`\u96F7\u8FBE\u63A2\u6D4B\u5230\u7EA6 ${n} \u4E2A\u4FE1\u53F7 \xB7 \u5B88\u4F4F\u6B96\u6C11\u5730`}),$e("\u65B9\u821F \xB7 AI","\u8B66\u544A\uFF1A\u6676\u6F6E\u6B63\u5728\u903C\u8FD1\u3002\u6570\u91CF\u662F\u5E73\u65F6\u7684\u4E24\u500D\u2026\u2026\u5730\u9707\u4EEA\u8FD8\u8BB0\u5F55\u5230\u4E00\u4E2A\u5DE8\u5927\u7684\u4FE1\u53F7\uFF0C\u5B83\u6B63\u5728\u5411\u5730\u8868\u79FB\u52A8\u3002")});p.events.on("bossSpawn",()=>{ln("\u6676\u6BCD\u7834\u571F\u800C\u51FA","boss","warn"),$e("\u65B9\u821F \xB7 AI","\u662F\u6676\u6BCD\uFF01\u4F53\u957F\u8D85\u8FC7\u5341\u7C73\u3002\u5B83\u7684\u51B2\u51FB\u6CE2\u80FD\u9707\u788E\u5EFA\u7B51\u2014\u2014\u7528\u6B65\u67AA\u548C\u70AE\u5854\u96C6\u4E2D\u706B\u529B\uFF01")});p.events.on("bossDown",()=>{ln("\u6676\u6BCD\u9668\u843D","boss","good"),$e("\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u2026\u2026\u4F60\u4EEC\u505A\u5230\u4E86\u3002\u6574\u4E2A\u6307\u6325\u4E2D\u5FC3\u90FD\u5728\u6B22\u547C\u3002\u5B83\u7684\u6838\u5FC3\u91CC\u6709\u5927\u91CF\u7684\u949B\uFF0C\u62FF\u53BB\u5EFA\u8BBE\u5427\u3002")});var Mx=!0;p.events.on("nightfall",n=>{et.play("night"),ln(`\u591C\u5E55\u964D\u4E34 \xB7 \u7EA6 ${n} \u4E2A\u79FB\u52A8\u4FE1\u53F7\u63A5\u8FD1`,"moon","warn"),Mx&&(Mx=!1,$e("\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5B83\u4EEC\u6765\u4E86\u3002\u9508\u8680\u86DB\u4F1A\u653B\u51FB\u5EFA\u7B51\u548C\u4EBA\u3002\u7528\u6FC0\u5149\u6216\u6B65\u67AA\u51FB\u9000\u5B83\u4EEC\u2014\u2014\u5B83\u4EEC\u7684\u6676\u4F53\u6B8B\u9AB8\u91CC\u542B\u6709\u949B\u3002"))});p.events.on("broken",n=>ln(`${n.def.name} \u53D7\u635F\u505C\u673A\uFF0C\u767D\u5929\u4F1A\u81EA\u52A8\u4FEE\u590D`,"warn","warn"));var Ex=!0;p.events.on("shuttleIncoming",n=>ln(`\u79FB\u6C11\u98DE\u8239\u6B63\u5728\u964D\u843D \xB7 ${n} \u4EBA`,"ship"));p.events.on("colonistsArrived",n=>{n.length&&(ln(`\u6B22\u8FCE\u56DE\u5BB6\uFF1A${n.map(t=>t.name).join("\u3001")}`),Ex&&p.stats.arrived<=4&&(Ex=!1,$e(n[0].name,"\u4F60\u597D\u2026\u2026\u8FD9\u5C31\u662F\u706B\u661F\uFF1F\u6BD4\u7167\u7247\u4E0A\u8FD8\u8981\u7EA2\u3002\u8C22\u8C22\u4F60\uFF0C\u4E3A\u6211\u4EEC\u70B9\u4EAE\u4E86\u8FD9\u91CC\u7684\u706F\u3002")))});var ub={habitat:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5C45\u4F4F\u7A79\u9876\u52A0\u538B\u5B8C\u6210\u3002\u5BA4\u5185\u6E29\u5EA6 21 \u6444\u6C0F\u5EA6\uFF0C\u6E7F\u5EA6 45%\u3002\u8FD9\u662F\u706B\u661F\u4E0A\u7B2C\u4E00\u4E2A\u53EF\u4EE5\u8131\u4E0B\u5934\u76D4\u7684\u5730\u65B9\u3002"],greenhouse:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u6E29\u5BA4\u542F\u52A8\u3002\u7B2C\u4E00\u6279\u79CD\u5B50\u5DF2\u7ECF\u64AD\u4E0B\uFF1A\u571F\u8C46\u3001\u5C0F\u9EA6\u3001\u756A\u8304\u2026\u2026\u548C\u4E00\u682A\u5411\u65E5\u8475\u3002"],beacon:["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u6536\u5230\u7740\u9646\u573A\u7684\u4FE1\u6807\u4FE1\u53F7\u4E86\uFF01\u53EA\u8981\u6B96\u6C11\u5730\u80FD\u517B\u6D3B\u4ED6\u4EEC\uFF0C\u79FB\u6C11\u98DE\u8239\u5C31\u4F1A\u51FA\u53D1\u3002"],reactor:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u805A\u53D8\u53CD\u5E94\u5806\u70B9\u706B\u6210\u529F\u3002\u8F93\u51FA\u7A33\u5B9A\u3002"],terraformer:["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5927\u6C14\u6539\u9020\u5854\u2026\u2026\u542F\u52A8\u4E86\u3002\u6211\u4EEC\u89C1\u8BC1\u7684\uFF0C\u662F\u4E00\u9897\u661F\u7403\u7684\u82CF\u9192\u3002"],apartment:["\u65B9\u821F \xB7 AI","\u7B2C\u4E00\u5EA7\u516C\u5BD3\u5854\u843D\u6210\u3002\u57CE\u5E02\u5F00\u59CB\u5411\u5929\u7A7A\u751F\u957F\u3002"],launch:["\u65B9\u821F \xB7 AI","\u661F\u9645\u53D1\u5C04\u53F0\u5B8C\u5DE5\u3002\u6B96\u6C11\u8230\u5DF2\u52A0\u6CE8\u5B8C\u6BD5\uFF0C\u968F\u65F6\u53EF\u4EE5\u51FA\u53D1\u3002"],monument:["\u65B9\u821F \xB7 AI","\u7EAA\u5FF5\u7891\u4E0A\u523B\u7740\u4E00\u884C\u5B57\uFF1A\u300C\u81F4\u7B2C\u4E00\u4E2A\u51FA\u53D1\u7684\u4EBA\u300D\u3002"],turret:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u9632\u5FA1\u70AE\u5854\u4E0A\u7EBF\u3002\u5B83\u4EEC\u9700\u8981\u7535\u529B\u624D\u80FD\u8FD0\u8F6C\u3002"],fabricator:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5236\u9020\u5DE5\u574A\u5C31\u7EEA\u3002\u9760\u8FD1\u540E\u6309 E \u6253\u5F00\u3002"]};p.events.on("built",n=>{let t=ub[n.type];t&&p.stats.built[n.type]===1&&$e(t[0],t[1]),n.type==="monument"&&p.stats.built.monument===1&&setTimeout(vb,6e3),vs(!0)});p.events.on("ending",()=>{$e("Nadia Volkova","\u5927\u5BB6\u5FEB\u51FA\u6765\u770B\uFF01\u5929\u7A7A\u2026\u2026\u5929\u7A7A\u53D8\u84DD\u4E86\uFF01"),$e("\u8D75\u5C0F\u96E8","\u4E0B\u96E8\u4E86\uFF01\u8FD9\u662F\u706B\u661F\u4E0A\u7684\u7B2C\u4E00\u573A\u96E8\uFF01"),setTimeout(db,14e3)});function db(){p.ended=!0,p.endingShown=!0,Xt.dead&&Xt.respawn(),zt("death").classList.add("hidden"),document.pointerLockElement&&document.exitPointerLock();let n=p.stats,t=["\u4ECE\u7740\u9646\u8231\u7684\u8231\u95E8\u7B2C\u4E00\u6B21\u6253\u5F00\uFF0C\u5230\u4ECA\u5929\uFF0C\u8FC7\u53BB\u4E86 "+p.time.day+" \u4E2A\u706B\u661F\u65E5\u3002","\u66FE\u7ECF\u53EA\u6709\u98CE\u58F0\u7684\u5E73\u539F\u4E0A\uFF0C\u5982\u4ECA\u4F4F\u7740 "+p.colony.pop+" \u4E2A\u4EBA\u3002","\u4ED6\u4EEC\u6765\u81EA\u5730\u7403\u4E0A\u4E0D\u540C\u7684\u56FD\u5BB6\uFF0C\u8BF4\u7740\u4E0D\u540C\u7684\u8BED\u8A00\u3002","\u4F46\u4ECE\u4ECA\u5929\u8D77\uFF0C\u4ED6\u4EEC\u6709\u4E86\u540C\u4E00\u4E2A\u5730\u5740\u3002",'<div class="big">\u706B\u661F \xB7 \u65B0\u5BB6\u56ED</div>',"\u5B69\u5B50\u4EEC\u7B2C\u4E00\u6B21\u5728\u706B\u661F\u4E0A\uFF0C\u770B\u89C1\u4E86\u84DD\u8272\u7684\u5929\u7A7A\u3002",`<span class="stats">\u91C7\u96C6\u8D44\u6E90 ${n.mined.iron+n.mined.silicon+n.mined.ice+n.mined.titanium} \xB7 \u5EFA\u9020\u8BBE\u65BD ${p.buildings.length} \xB7 \u51FB\u9000\u9508\u8680\u86DB ${n.kills} \xB7 \u8FCE\u63A5\u79FB\u6C11 ${n.arrived}</span>`];zt("ending-text").innerHTML=t.map((e,i)=>`<p style="animation-delay:${i*1.6}s">${e}</p>`).join(""),zt("ending").classList.remove("hidden"),et.play("chapter"),vs(!0)}window.addEventListener("keydown",n=>{if(p.started){if(Qg(n),n.code==="Tab"&&!p.endingShown&&!Xt.dead){p.menuOpen==="archive"?_i(!0):p.menuOpen||Dr("archive");return}if(n.code==="KeyP"&&!p.menuOpen){p.photo=!p.photo,p.usedPhoto=!0,document.body.classList.toggle("photo",p.photo),wx(p.photo?cp:0),et.play("tick");return}if(p.photo&&!p.menuOpen){let t=["Digit1","Digit2","Digit3","Digit4"].indexOf(n.code);if(t>=0){cp=t,wx(t),et.play("tick"),n.stopImmediatePropagation();return}if(n.code==="Enter"){p.snap=!0;return}}if(p.menuOpen==="archive"&&n.code==="Escape"){_i(!0);return}p.menuOpen==="build"&&(n.code==="Escape"||n.code==="KeyB")?(_i(!0),p.locked||void 0):p.menuOpen==="craft"&&(n.code==="Escape"||n.code==="KeyE")?_i(!0):p.menuOpen==="starmap"&&n.code==="Escape"&&_i(!0)}});var ta=0,rp=30,op=0,bx=0,na={};try{na=JSON.parse(localStorage.getItem("starport-hints"))||{}}catch{}var ea=null,ap=0,ch=0,fb=[{id:"move",text:"<kbd>W A S D</kbd>\u79FB\u52A8\u3000<kbd>Shift</kbd>\u51B2\u523A<br><kbd>\u9F20\u6807</kbd>\u73AF\u89C6\u3000<kbd>\u7A7A\u683C</kbd>\u8DF3\u8DC3",when:()=>ch>.5&&ch<40},{id:"mine",text:"\u5BF9\u51C6\u53D1\u5149\u7684\u77FF\u77F3\uFF0C<kbd>\u6309\u4F4F\u5DE6\u952E</kbd> \u7528\u91C7\u77FF\u6FC0\u5149\u91C7\u96C6",when:()=>ch>6&&p.stats.mined.iron+p.stats.mined.silicon===0},{id:"build",text:"\u8D44\u6E90\u591F\u4E86\uFF01\u6309 <kbd>B</kbd> \u6253\u5F00\u5EFA\u9020\u83DC\u5355",when:()=>p.buildings.length===0&&p.res.iron>=8&&p.res.silicon>=6},{id:"o2",text:"\u6C27\u6C14\u5728\u6301\u7EED\u6D88\u8017\u3002\u56DE\u5230\u7740\u9646\u8231\u6216\u5236\u6C27\u7AD9\u9644\u8FD1\u4F1A\u81EA\u52A8\u8865\u6C27",when:()=>!Xt.inLife&&Xt.o2<Xt.maxO2*.5},{id:"night",text:"\u5929\u9ED1\u4E86\uFF0C\u6309 <kbd>F</kbd> \u6253\u5F00\u624B\u7535\u7B52",when:()=>p.time.night>.6&&!Xt.flashlight},{id:"craft",text:"\u9760\u8FD1\u5236\u9020\u5DE5\u574A\u6309 <kbd>E</kbd> \u5236\u9020\u6B66\u5668\u548C\u88C5\u5907\u2014\u2014\u8BD5\u8BD5\u52A0\u538B\u6F2B\u6E38\u8F66",when:()=>p.buildings.some(n=>n.type==="fabricator")&&!p.upgrades.rifle},{id:"drive",text:"\u6F2B\u6E38\u8F66\u5C31\u5728\u9644\u8FD1\uFF0C\u8D70\u8FC7\u53BB\u6309 <kbd>E</kbd> \u4E0A\u8F66",when:()=>rh()&&!p.driving&&!na.drove},{id:"talk",text:"\u5BF9\u51C6\u5C45\u6C11\u6309 <kbd>E</kbd>\uFF0C\u542C\u542C\u4ED6\u4EEC\u7684\u6545\u4E8B",when:()=>p.colonists.some(n=>n.pos.distanceTo(Xt.pos)<10)},{id:"level",text:"\u4EBA\u53E3\u548C\u8BBE\u65BD\u8D8A\u591A\uFF0C\u57CE\u5E02\u7B49\u7EA7\u8D8A\u9AD8\uFF0C\u9886\u5730\u4E5F\u4F1A\u6269\u5927\uFF08\u770B\u5DE6\u4E0A\u89D2\uFF09",when:()=>p.colony.pop>=2}];function pb(n){if(ch+=n,p.driving&&(na.drove=!0),ea)if(ap-=n,ap<=0||!ea.when()){na[ea.id]=!0,ea=null;try{localStorage.setItem("starport-hints",JSON.stringify(na))}catch{}}else return ea.text;for(let t of fb)if(!na[t.id]&&t.when())return ea=t,ap=12,t.text;return""}function Ix(){let n=To(),t=new Map((n.visited||[]).map(i=>[i.id,i])),e=[];ut.next&&e.push({id:ut.next,fresh:!t.has(ut.next)&&!lp(ut.next)});for(let i of Object.keys(Gn))i!==le&&i!==ut.next&&(t.has(i)||lp(i))&&e.push({id:i,fresh:!1,info:t.get(i)});return e}function lp(n){try{return!!localStorage.getItem(n==="mars"?"starport-newhome-v1":"starport-planet-"+n)}catch{return!1}}function mb(n){Dr("starmap"),zt("starmap-list").innerHTML=Ix().map(t=>{let e=Gn[t.id],i={mars:"MARS",europa:"EUROPA",kepler:"KEPLER-442b"}[t.id];return`<div class="dest" data-id="${t.id}"><div class="orb ${t.id}"></div><span class="badge ${t.fresh?"new":"home"}">${t.fresh?"UNCHARTED":"COLONY"}</span>
      <div class="dn">${e.name}</div><div class="de">${i}</div>
      <div class="dst">${e.title} \xB7 ${e.place}${t.info?`<br>\u5C45\u6C11 ${t.info.pop} \u4EBA \xB7 \u7B2C ${t.info.day} \u65E5\u79BB\u5F00`:""}${t.fresh?"<br>\u88C5\u5907\u540C\u6B65 \xB7 \u643A\u5E26\u90E8\u5206\u7269\u8D44":"<br>\u56DE\u5230\u4F60\u5EFA\u7ACB\u7684\u57CE\u5E02"}</div></div>`}).join(""),zt("starmap-list").querySelectorAll(".dest").forEach(t=>t.addEventListener("click",()=>{_i(!0),gb(n,t.dataset.id)}))}function gb(n,t){p.launching={b:n,t:0,dest:t},p.launched=!0,et.play("rumble"),$e("\u65B9\u821F \xB7 AI",`\u6B96\u6C11\u8230\u70B9\u706B\u3002\u76EE\u6807\uFF1A${Gn[t].name}\u3002\u5168\u4F53\u4E58\u5458\uFF0C\u795D\u4F60\u4EEC\u597D\u8FD0\u3002`),n.anim.flame.visible=!0}function xb(n){let t=p.launching;if(!t)return;t.t+=n;let e=t.b.anim.ship;t.t>2&&(e.position.y+=n*(2+(t.t-2)*9));let i=new T(t.b.x,t.b.y+e.position.y,t.b.z);for(let s=0;s<6;s++)vt.flame(i);t.t<5&&vt.dustPuff(new T(t.b.x+(Math.random()-.5)*16,t.b.y+1,t.b.z+(Math.random()-.5)*16),3,4),Xt.landDip=Math.max(Xt.landDip,Math.min(.15,.03*t.t)*Math.random()),t.t>9&&!t.faded&&(t.faded=!0,zt("fade").classList.add("on")),t.t>11.5&&!t.done&&(t.done=!0,yb(t.dest))}function yb(n){let t=To();t.visited=(t.visited||[]).filter(s=>s.id!==le).concat([{id:le,pop:p.colony.pop,day:p.time.day}]),t.planet=n,t.autoResume=lp(n);let e={};for(let s in p.res)e[s]=Math.min(Math.floor(p.res[s]*.4),80);t.carry={upgrades:p.upgrades,res:e},vs(!0),Bd(t);let i=Gn[n];zt("ending-text").innerHTML=["\u66F2\u901F\u822A\u884C\u4E2D\u2026\u2026",`\u76EE\u7684\u5730\uFF1A<b>${i.name}</b>${t.autoResume?"\uFF08\u5DF2\u5F00\u62D3\uFF09":""}`,`<span class="stats">${ut.name}\u7684 ${p.colony.pop} \u4F4D\u5C45\u6C11\uFF0C\u4F1A\u66FF\u4F60\u5B88\u7740\u90A3\u91CC\u7684\u706F\u706B\u3002</span>`].map((s,r)=>`<p style="animation-delay:${r*1.2}s">${s}</p>`).join(""),document.querySelector("#ending .btns").classList.add("hidden"),zt("ending").classList.remove("hidden"),zt("fade").classList.remove("on"),p.endingShown=!0,document.pointerLockElement&&document.exitPointerLock(),setTimeout(()=>{location.href=location.pathname+(p.debug?"?debug":"")},5e3)}function vb(){p.endingShown=!0,document.pointerLockElement&&document.exitPointerLock();let t=(To().visited||[]).concat([{id:le,pop:p.colony.pop}]),e=t.reduce((s,r)=>s+r.pop,0),i=["\u5F88\u4E45\u5F88\u4E45\u4EE5\u524D\uFF0C\u4E00\u4E2A\u4EBA\u72EC\u81EA\u7AD9\u5728\u706B\u661F\u7684\u7EA2\u8272\u5C18\u571F\u91CC\u3002","\u6C27\u6C14\u53EA\u591F\u6491\u4E09\u5206\u949F\uFF0C\u8EAB\u8FB9\u53EA\u6709\u4E00\u5EA7\u7740\u9646\u8231\u3002",t.map(s=>`${Gn[s.id].name} \xB7 ${s.pop} \u4EBA`).join("\u3000"),`\u4ECA\u5929\uFF0C${e} \u4E2A\u4EBA\uFF0C\u751F\u6D3B\u5728\u4E09\u9897\u661F\u7403\u4E0A\u3002`,'<div class="big">\u661F\u9645\u6587\u660E</div>',"\u8FD9\u4E00\u5207\uFF0C\u90FD\u4ECE\u4F60\u8FC8\u51FA\u7684\u7B2C\u4E00\u6B65\u5F00\u59CB\u3002",'<span class="stats">\u611F\u8C22\u6E38\u73A9\u300A\u661F\u6E2F\u300B\u3002\u4F60\u53EF\u4EE5\u7EE7\u7EED\u5EFA\u8BBE\uFF0C\u57CE\u5E02\u4F1A\u4E00\u76F4\u5728\u8FD9\u91CC\u7B49\u4F60\u3002</span>'];zt("ending-text").innerHTML=i.map((s,r)=>`<p style="animation-delay:${r*1.8}s">${s}</p>`).join(""),zt("ending").classList.remove("hidden"),et.play("chapter"),vs(!0)}function _b(n){let t={prompt:"",crossClass:""};if(Xt.dead||p.menuOpen)return t;if(p.driving)return t.prompt=`<span class="big">${xx()}</span> KM/H<br><kbd>W S</kbd> \u6CB9\u95E8 \xB7 <kbd>A D</kbd> \u8F6C\u5411 \xB7 <kbd>Shift</kbd> \u52A0\u901F \xB7 <kbd>\u7A7A\u683C</kbd> \u5239\u8F66 \xB7 <kbd>E</kbd> \u4E0B\u8F66`,t;let e=Fg(Xt.pos);if(e)return t.prompt=`<b>${e.name}</b><br><kbd>E</kbd>\u8C03\u67E5`,lt.hit("KeyE")&&Bg(e),t;let i=rh();if(i&&Math.hypot(i.x-Xt.pos.x,i.z-Xt.pos.z)<4.5)return t.prompt="<b>\u52A0\u538B\u6F2B\u6E38\u8F66</b><br><kbd>E</kbd>\u4E0A\u8F66",lt.hit("KeyE")&&(mx(),lt.pressed.delete("KeyE")),t;let s=Re.position,r=Xt.fwd,o=Lg(s,r),a=p.buildings.find(h=>h.type==="fabricator"&&Math.hypot(h.x-Xt.pos.x,h.z-Xt.pos.z)<h.def.r+6);ta=Math.max(0,ta-n),bx=Math.max(0,bx-n);let l=p.buildings.find(h=>h.type==="launch"&&Math.hypot(h.x-Xt.pos.x,h.z-Xt.pos.z)<h.def.r+8);if(o){if(t.crossClass="talk",t.prompt=`<b>${o.name}</b> \xB7 ${o.job}<br><kbd>E</kbd> \u4EA4\u8C08`,lt.hit("KeyE")){$e(o.name,o.line);let h=p.stats.talked=p.stats.talked||[];h.includes(o.idx)||h.push(o.idx)}}else l&&!p.launching?l.powered?Ix().length?(t.prompt="<b>\u6B96\u6C11\u8230\u5DF2\u5C31\u7EEA</b><br><kbd>E</kbd>\u6253\u5F00\u661F\u56FE",lt.hit("KeyE")&&mb(l)):t.prompt="\u661F\u9645\u53D1\u5C04\u53F0 \xB7 \u6682\u65E0\u53EF\u7528\u822A\u7EBF":t.prompt='\u661F\u9645\u53D1\u5C04\u53F0 \xB7 <span class="badc">\u7535\u529B\u4E0D\u8DB3</span>':a&&(t.prompt=`<kbd>E</kbd> \u6253\u5F00\u5236\u9020\u5DE5\u574A${a.powered?"":"\uFF08\u505C\u7535\u4E2D\uFF09"}`,lt.hit("KeyE")&&(a.powered?Dr("craft"):ln("\u5236\u9020\u5DE5\u574A\u6CA1\u6709\u7535\u529B")));let c=p.lookBuilding;if(!t.prompt&&c&&en.id!=="build"){let h=c.def,u=c.level||1,d=Hc(c)?`<br><kbd>U</kbd>\u5347\u7EA7\u5230 Lv.${u+1}\u3000${So(lf(c))}`:"";t.prompt=`<b>${h.name}</b>\u3000Lv.${u}${u>=af?"\uFF08\u6EE1\u7EA7\uFF09":""} \xB7 \u8010\u4E45 ${Math.ceil(c.hp)}/${Math.round(c.maxHp)}${h.power<0?c.powered?' \xB7 <span class="okc">\u4F9B\u7535\u4E2D</span>':' \xB7 <span class="badc">\u505C\u7535</span>':""}${d}<br><kbd>X</kbd>${ta>0?'<span class="badc">\u518D\u6309\u4E00\u6B21\u786E\u8BA4\u62C6\u9664\uFF08\u8FD4\u8FD8 50%\uFF09</span>':"\u62C6\u9664"}`,c.broken&&(t.prompt=t.prompt.replace("</b>",'</b> <span class="badc">\u53D7\u635F\u505C\u673A \xB7 \u767D\u5929\u81EA\u52A8\u4FEE\u590D</span>')),lt.hit("KeyU")&&Hc(c)&&(Jm(c)?ln(`${h.name} \u5347\u7EA7\u5230 Lv.${c.level}`,"star","good"):(et.play("deny"),ln("\u5347\u7EA7\u6750\u6599\u4E0D\u8DB3","warn","warn"))),lt.hit("KeyX")&&(ta>0?(Qm(c,!0),ta=0,ln(`\u5DF2\u62C6\u9664 ${h.name}`)):ta=2)}return en.id==="laser"?(p.aimNode&&!t.crossClass&&(t.crossClass="node"),Bo(s,r,9)&&(t.crossClass="enemy")):en.id==="rifle"&&Bo(s,r,120)&&(t.crossClass="enemy"),t}var hh=[["\u539F\u8272","none"],["\u80F6\u7247","sepia(.35) contrast(1.12) saturate(1.15) brightness(1.03)"],["\u9ED1\u767D","grayscale(1) contrast(1.25)"],["\u51B7\u8C03","hue-rotate(-18deg) saturate(.85) contrast(1.08) brightness(1.05)"]],cp=0;function wx(n){xs.style.filter=hh[n][1]==="none"?"":hh[n][1],zt("photo-bar").innerHTML=hh.map((t,e)=>`<span class="${e===n?"on":""}"><kbd>${e+1}</kbd>${t[0]}</span>`).join("")+'<span class="sep"></span><span><kbd>Enter</kbd>\u4FDD\u5B58\u7167\u7247</span><span><kbd>P</kbd>\u9000\u51FA</span>'}function Mb(){let n=xs.width,t=xs.height,e=Math.round(t*.1),i=document.createElement("canvas");i.width=n,i.height=t;let s=i.getContext("2d");s.filter=hh[cp][1],s.drawImage(xs,0,0),s.filter="none",s.fillStyle="#000",s.fillRect(0,0,n,e),s.fillRect(0,t-e,n,e);let r=Math.round(t*.022);s.font=`300 ${r*1.6}px "Noto Sans SC", sans-serif`,s.fillStyle="#fff",s.textBaseline="middle",s.fillText("\u661F \u6E2F",r*2,t-e/2),s.font=`400 ${r}px "Noto Sans SC", sans-serif`,s.fillStyle="rgba(255,255,255,.7)",s.textAlign="right",s.fillText(`${ut.name} \xB7 ${ut.place} \xB7 \u7B2C ${p.time.day} \u65E5 \xB7 \u4EBA\u53E3 ${p.colony.pop}`,n-r*2,t-e/2);let o=document.createElement("a");o.download=`\u661F\u6E2F-${ut.name}-\u7B2C${p.time.day}\u65E5.png`,o.href=i.toDataURL("image/png"),document.body.appendChild(o),o.click(),o.remove(),zt("shutter").classList.remove("on"),zt("shutter").offsetWidth,zt("shutter").classList.add("on"),et.play("shutter"),p.stats.photos=(p.stats.photos||0)+1}var gs=null,hp=9.5;function Eb(n){if(p.debug&&!/landing/.test(location.search)){n();return}p.cine=!0,document.body.classList.add("cinema");let t=ia.group,e=yt(pe.x,pe.z)+.1,i=new at(new ze(1.7,10,18,1,!0),M.flame);i.rotation.x=Math.PI,i.position.y=-4.2,t.add(i);let s=Dt(16752704,22,t,0,-.5,0),r=new ks(16752720,0,120,1.4);r.position.y=-2,t.add(r);let o=new T(pe.x+20,0,pe.z+25);o.y=yt(o.x,o.z)+3.2,p.time.t=.282,gs={t:0,gy:e,flame:i,fglow:s,lamp:r,done:n,camAt:o,landed:!1,shake:0},t.position.y=e+460,et.play("rumble"),et.engine(1);let a=l=>{(l.type==="mousedown"||l.code==="Space"||l.code==="Escape")&&(gs.t=Math.max(gs.t,hp+6))};gs.skip=a,window.addEventListener("keydown",a),window.addEventListener("mousedown",a)}var Sx=new rn,Tx=new rn,bb=new mn,Ax=new ge;function Lx(n){let t=gs;t.t+=n;let e=ia.group,i=Math.min(1,t.t/hp),s=1-Math.pow(1-i,2.6);e.position.y=t.gy+460*(1-s),e.rotation.z=Math.sin(t.t*1.1)*.05*(1-i);let r=i<1;t.flame.visible=t.fglow.visible=r,t.flame.scale.set(1,.5+(1-s)*.9+Math.random()*.15,1),t.lamp.intensity=r?400*(.6+Math.random()*.4):0;let o=e.position.y-t.gy;if(r){let c=new T(e.position.x,e.position.y-1,e.position.z);for(let h=0;h<4;h++)vt.flame(c,1.4);if(o<40)for(let h=0;h<3;h++){let u=Math.random()*Math.PI*2,d=2+Math.random()*(14-o*.25);vt.dustPuff(new T(pe.x+Math.cos(u)*d,t.gy+.3,pe.z+Math.sin(u)*d),1,2)}t.shake=Math.max(t.shake,Math.max(0,1-o/120)*.25)}else t.landed||(t.landed=!0,t.shake=1,vt.ring(new T(pe.x,t.gy,pe.z),4,160),vt.dustPuff(new T(pe.x,t.gy+1,pe.z),70,16),et.play("land"),et.play("rumble"),et.engine(0));t.shake*=Math.pow(.15,n),Fa(0,Re.position),Oa(n,Re.position);let a=new T(e.position.x,e.position.y+3,e.position.z),l=t.t-hp-2.2;if(l<0)Re.position.copy(t.camAt),Re.position.x+=Math.sin(t.t*.15)*4,Re.lookAt(a);else{let c=Math.min(1,l/3.2),h=c*c*(3-2*c),u=new T(Xt.pos.x,Xt.pos.y+1.7,Xt.pos.z);if(Re.position.lerpVectors(t.camAt,u,h),Ax.lookAt(t.camAt,a,Re.up),Sx.setFromRotationMatrix(Ax),Tx.setFromEuler(bb.set(Xt.pitch,Xt.yaw,0,"YXZ")),Re.quaternion.slerpQuaternions(Sx,Tx,h),c>=1){e.remove(t.flame,t.fglow,t.lamp),e.position.y=t.gy,e.rotation.z=0,window.removeEventListener("keydown",t.skip),window.removeEventListener("mousedown",t.skip),document.body.classList.remove("cinema"),p.cine=!1,gs=null,et.engine(0),t.done();return}}t.shake>.01&&(Re.position.x+=(Math.random()-.5)*t.shake*.5,Re.position.y+=(Math.random()-.5)*t.shake*.4)}var wb=new _o,lh=0;function Dx(){requestAnimationFrame(Dx);let n=Math.min(wb.getDelta(),.05);if(gs){Lx(n),sp(),lt.endFrame();return}if(!p.started){lh+=n*.05;let e=30;Re.position.set(pe.x+Math.cos(lh)*e,yt(pe.x,pe.z)+6,pe.z+Math.sin(lh)*e),Re.lookAt(pe.x,yt(pe.x,pe.z)+4,pe.z),p.time.t=.27+Math.sin(lh*.5)*.01,Fa(0,Re.position),Oa(n,Re.position),sp();return}p.debug&&(p.locked=!0);let t=p.locked&&!p.menuOpen&&!p.endingShown&&!p.cine;zt("clickhint").classList.toggle("hidden",!(p.started&&!p.locked&&!p.menuOpen&&!Xt.dead&&!p.endingShown&&!p.cine)),t?Ux(n):(Vf(0,{prompt:""}),Fa(0,Re.position)),Oa(t?n:0,Re.position),lt.endFrame(),sp(),Cg(wn),p.snap&&(p.snap=!1,Mb())}function Ux(n){{p.driving&&lt.hit("KeyE")&&!p.menuOpen&&(Qf(Xt),lt.pressed.delete("KeyE")),p.driving||Xt.update(n),gx(n,Xt,Re),Fa(n,Re.position),p.time.dawn&&(p.time.dawn=!1,ln(`\u7B2C ${p.time.day} \u65E5 \xB7 \u9ECE\u660E`,"sun")),Hm(n),p.driving?p.lookBuilding=null:Rg(n,Xt,Re),rg(n,{shoot:Wc}),Ig(n),Vm(n,en.id==="build"&&!!Ee.type),xb(n),qd.emissiveIntensity=.06+p.time.night*(.55+Math.sin(performance.now()*.0015)*.15),Mg(n),_x(n),vg(n),fg(n),ia.beacon.visible=Math.sin(performance.now()*.004)>0,ex(n),ax(n),Vg(n),dx(n),wm(),!p.plazaSeen&&p.time.night>.6&&p.colonists.filter(e=>e.atPlaza&&!e.target).length>=4&&(p.plazaSeen=!0,$e("\u82CF\u5FF5 \xB7 \u6559\u5E08","\u4ECA\u665A\u5927\u5BB6\u90FD\u6765\u4E86\u3002\u6211\u4EEC\u5C31\u8FD9\u6837\u7AD9\u7740\uFF0C\u770B\u7740\u90A3\u9897\u84DD\u8272\u7684\u661F\u7403\u8F6C\u554A\u8F6C\u2026\u2026\u5B69\u5B50\u95EE\u6211\uFF0C\u90A3\u662F\u54EA\u91CC\u3002\u6211\u8BF4\uFF0C\u90A3\u662F\u6211\u4EEC\u51FA\u53D1\u7684\u5730\u65B9\u3002"));let t=_b(n);t.tip=pb(n),Vf(n,t),et.update(p.storm,p.time.night),rp-=n,rp<=0&&(rp=45,vs(!0)),p.terraform>0&&p.terraform<=1&&(op-=n,op<=0&&(op=4,$d(Cx(),p.terraform)))}}zt("loading").style.transition="opacity .8s";zt("loading").style.opacity=0;setTimeout(()=>zt("loading").remove(),900);Dx();window.addEventListener("beforeunload",()=>vs(!0));window.__G=p;window.__dbg={give(n=200){for(let t in pi)p.res[t]+=n},tp(n,t){Xt.pos.set(n,yt(n,t),t)},time(n){p.time.t=n},build:(n,t,e)=>kc(n,t,e,0),chapter:n=>Ya(n),look(n,t){Xt.yaw=n,Xt.pitch=t},begin:()=>fh(!1),slope:(n,t)=>yt(n+3,t)-yt(n,t),landStep(n){for(let t=0;t<n&&gs;t+=.05)Lx(.05);return!!gs},step(n,t=.05){for(let e=0;e<n;e+=t)Ux(t),Oa(t,Re.position),lt.endFrame()},input:lt,save:vs,toast:ln,setGhost:Tr,openMenu:Dr,closeMenus:_i,tool:en,placement:Ee,rover:rh};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
