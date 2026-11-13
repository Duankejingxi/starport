(()=>{var Wd="170";var k1=0,s0=1,H1=2;var pm=1,$d=2,ls=3,$s=0,Tn=1,Ge=2,ki=0,Hi=1,fe=2,r0=3,o0=4,z1=5,Sr=100,F1=101,O1=102,B1=103,G1=104,V1=200,W1=201,$1=202,X1=203,Mu=204,_u=205,q1=206,Y1=207,Z1=208,K1=209,J1=210,j1=211,Q1=212,ty=213,ey=214,Eu=0,bu=1,wu=2,wo=3,Su=4,Tu=5,Ru=6,Au=7,mm=0,ny=1,iy=2,Ws=0,Xd=1,qd=2,Yd=3,Dr=4,sy=5,Zd=6,Kd=7;var gm=300,So=301,To=302,Cu=303,Pu=304,Dc=306,fs=1e3,Rr=1001,Iu=1002,qn=1003,ry=1004;var Al=1005;var Ui=1006,Oh=1007;var Ar=1008;var ps=1009,xm=1010,ym=1011,Oa=1012,Jd=1013,Cr=1014,Ni=1015,wi=1016,jd=1017,Qd=1018,Ro=1020,vm=35902,Mm=1021,_m=1022,Mi=1023,Em=1024,bm=1025,_o=1026,Ao=1027,tf=1028,ef=1029,wm=1030,nf=1031;var sf=1033,ic=33776,sc=33777,rc=33778,oc=33779,Lu=35840,Du=35841,Uu=35842,Nu=35843,ku=36196,Hu=37492,zu=37496,Fu=37808,Ou=37809,Bu=37810,Gu=37811,Vu=37812,Wu=37813,$u=37814,Xu=37815,qu=37816,Yu=37817,Zu=37818,Ku=37819,Ju=37820,ju=37821,ac=36492,Qu=36494,td=36495,Sm=36283,ed=36284,nd=36285,id=36286;var lc=2300,sd=2301,Bh=2302,a0=2400,l0=2401,c0=2402;var oy=3200,ay=3201;var Tm=0,ly=1,Gs="",ye="srgb",Ho="srgb-linear",Uc="linear",Ne="srgb";var to=7680;var h0=519,cy=512,hy=513,uy=514,Rm=515,dy=516,fy=517,py=518,my=519,rd=35044,rf=35048;var u0="300 es",hs=2e3,cc=2001,Xs=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],d0=1234567,Na=Math.PI/180,Co=180/Math.PI;function us(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[e&63|128]+wn[e>>8&255]+"-"+wn[e>>16&255]+wn[e>>24&255]+wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]).toLowerCase()}function Mn(n,t,e){return Math.max(t,Math.min(e,n))}function of(n,t){return(n%t+t)%t}function gy(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function xy(n,t,e){return n!==t?(e-n)/(t-n):0}function ka(n,t,e){return(1-e)*n+e*t}function yy(n,t,e,i){return ka(n,t,1-Math.exp(-e*i))}function vy(n,t=1){return t-Math.abs(of(n,t*2)-t)}function My(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function _y(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Ey(n,t){return n+Math.floor(Math.random()*(t-n+1))}function by(n,t){return n+Math.random()*(t-n)}function wy(n){return n*(.5-Math.random())}function Sy(n){n!==void 0&&(d0=n);let t=d0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ty(n){return n*Na}function Ry(n){return n*Co}function Ay(n){return(n&n-1)===0&&n!==0}function Cy(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Py(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Iy(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),u=o((t+i)/2),d=r((t-i)/2),f=o((t-i)/2),p=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ze(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ve={DEG2RAD:Na,RAD2DEG:Co,generateUUID:us,clamp:Mn,euclideanModulo:of,mapLinear:gy,inverseLerp:xy,lerp:ka,damp:yy,pingpong:vy,smoothstep:My,smootherstep:_y,randInt:Ey,randFloat:by,randFloatSpread:wy,seededRandom:Sy,degToRad:Ty,radToDeg:Ry,isPowerOfTwo:Ay,ceilPowerOfTwo:Cy,floorPowerOfTwo:Py,setQuaternionFromProperEuler:Iy,normalize:ze,denormalize:vi},nt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Mn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ce=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],v=s[0],x=s[3],m=s[6],_=s[1],E=s[4],M=s[7],D=s[2],A=s[5],L=s[8];return r[0]=o*v+a*_+l*D,r[3]=o*x+a*E+l*A,r[6]=o*m+a*M+l*L,r[1]=c*v+u*_+d*D,r[4]=c*x+u*E+d*A,r[7]=c*m+u*M+d*L,r[2]=f*v+p*_+g*D,r[5]=f*x+p*E+g*A,r[8]=f*m+p*M+g*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,f=a*l-u*r,p=c*r-o*l,g=e*d+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=d*v,t[1]=(s*c-u*i)*v,t[2]=(a*i-s*o)*v,t[3]=f*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Gh.makeScale(t,e)),this}rotate(t){return this.premultiply(Gh.makeRotation(-t)),this}translate(t,e){return this.premultiply(Gh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Gh=new ce;function Am(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function hc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ly(){let n=hc("canvas");return n.style.display="block",n}var f0={};function Da(n){n in f0||(f0[n]=!0,console.warn(n))}function Dy(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Uy(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ny(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var xe={enabled:!0,workingColorSpace:Ho,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ne&&(n.r=ds(n.r),n.g=ds(n.g),n.b=ds(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ne&&(n.r=Eo(n.r),n.g=Eo(n.g),n.b=Eo(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Gs?Uc:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function ds(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Eo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var p0=[.64,.33,.3,.6,.15,.06],m0=[.2126,.7152,.0722],g0=[.3127,.329],x0=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),y0=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);xe.define({[Ho]:{primaries:p0,whitePoint:g0,transfer:Uc,toXYZ:x0,fromXYZ:y0,luminanceCoefficients:m0,workingColorSpaceConfig:{unpackColorSpace:ye},outputColorSpaceConfig:{drawingBufferColorSpace:ye}},[ye]:{primaries:p0,whitePoint:g0,transfer:Ne,toXYZ:x0,fromXYZ:y0,luminanceCoefficients:m0,outputColorSpaceConfig:{drawingBufferColorSpace:ye}}});var eo,od=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{eo===void 0&&(eo=hc("canvas")),eo.width=t.width,eo.height=t.height;let i=eo.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=eo}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=hc("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ds(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ds(e[i]/255)*255):e[i]=ds(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ky=0,uc=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=us(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Vh(s[o].image)):r.push(Vh(s[o]))}else r=Vh(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Vh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?od.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Hy=0,Fn=class n extends Xs{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Rr,s=Rr,r=Ui,o=Ar,a=Mi,l=ps,c=n.DEFAULT_ANISOTROPY,u=Gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=us(),this.name="",this.source=new uc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fs:t.x=t.x-Math.floor(t.x);break;case Rr:t.x=t.x<0?0:1;break;case Iu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fs:t.y=t.y-Math.floor(t.y);break;case Rr:t.y=t.y<0?0:1;break;case Iu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=gm;Fn.DEFAULT_ANISOTROPY=1;var Oe=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],g=l[9],v=l[2],x=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-x)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+x)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,M=(p+1)/2,D=(m+1)/2,A=(u+f)/4,L=(d+v)/4,I=(g+x)/4;return E>M&&E>D?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=A/i,r=L/i):M>D?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=A/s,r=I/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=L/r,s=I/r),this.set(i,s,r,e),this}let _=Math.sqrt((x-g)*(x-g)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(x-g)/_,this.y=(d-v)/_,this.z=(f-u)/_,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ad=class extends Xs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Fn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new uc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Un=class extends ad{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},dc=class extends Fn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=qn,this.minFilter=qn,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ld=class extends Fn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=qn,this.minFilter=qn,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],f=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==f||c!==p||u!==g){let x=1-a,m=l*f+c*p+u*g+d*v,_=m>=0?1:-1,E=1-m*m;if(E>Number.EPSILON){let D=Math.sqrt(E),A=Math.atan2(D,m*_);x=Math.sin(x*A)/D,a=Math.sin(a*A)/D}let M=a*_;if(l=l*x+f*M,c=c*x+p*M,u=u*x+g*M,d=d*x+v*M,x===1-a){let D=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=D,c*=D,u*=D,d*=D}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*d+l*p-c*f,t[e+1]=l*g+u*f+c*d-a*p,t[e+2]=c*g+u*p+a*f-l*d,t[e+3]=u*g-a*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"YZX":this._x=f*u*d+c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d-f*p*g;break;case"XZY":this._x=f*u*d-c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=i+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Mn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(v0.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(v0.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Wh.copy(this).projectOnVector(t),this.sub(Wh)}reflect(t){return this.sub(Wh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Mn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wh=new T,v0=new hn,_i=class{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(gi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(gi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=gi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,gi):gi.fromBufferAttribute(r,o),gi.applyMatrix4(t.matrixWorld),this.expandByPoint(gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cl.copy(i.boundingBox)),Cl.applyMatrix4(t.matrixWorld),this.union(Cl)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gi),gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ba),Pl.subVectors(this.max,ba),no.subVectors(t.a,ba),io.subVectors(t.b,ba),so.subVectors(t.c,ba),ks.subVectors(io,no),Hs.subVectors(so,io),yr.subVectors(no,so);let e=[0,-ks.z,ks.y,0,-Hs.z,Hs.y,0,-yr.z,yr.y,ks.z,0,-ks.x,Hs.z,0,-Hs.x,yr.z,0,-yr.x,-ks.y,ks.x,0,-Hs.y,Hs.x,0,-yr.y,yr.x,0];return!$h(e,no,io,so,Pl)||(e=[1,0,0,0,1,0,0,0,1],!$h(e,no,io,so,Pl))?!1:(Il.crossVectors(ks,Hs),e=[Il.x,Il.y,Il.z],$h(e,no,io,so,Pl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(is[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),is[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),is[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),is[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),is[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),is[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),is[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),is[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(is),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},is=[new T,new T,new T,new T,new T,new T,new T,new T],gi=new T,Cl=new _i,no=new T,io=new T,so=new T,ks=new T,Hs=new T,yr=new T,ba=new T,Pl=new T,Il=new T,vr=new T;function $h(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){vr.fromArray(n,r);let a=s.x*Math.abs(vr.x)+s.y*Math.abs(vr.y)+s.z*Math.abs(vr.z),l=t.dot(vr),c=e.dot(vr),u=i.dot(vr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var zy=new _i,wa=new T,Xh=new T,qs=class{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):zy.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wa.subVectors(t,this.center);let e=wa.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(wa,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wa.copy(t.center).add(Xh)),this.expandByPoint(wa.copy(t.center).sub(Xh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ss=new T,qh=new T,Ll=new T,zs=new T,Yh=new T,Dl=new T,Zh=new T,fc=class{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ss)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ss.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ss.copy(this.origin).addScaledVector(this.direction,e),ss.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){qh.copy(t).add(e).multiplyScalar(.5),Ll.copy(e).sub(t).normalize(),zs.copy(this.origin).sub(qh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ll),a=zs.dot(this.direction),l=-zs.dot(Ll),c=zs.lengthSq(),u=Math.abs(1-o*o),d,f,p,g;if(u>0)if(d=o*l-a,f=o*a-l,g=r*u,d>=0)if(f>=-g)if(f<=g){let v=1/u;d*=v,f*=v,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(qh).addScaledVector(Ll,f),p}intersectSphere(t,e){ss.subVectors(t.center,this.origin);let i=ss.dot(this.direction),s=ss.dot(ss)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ss)!==null}intersectTriangle(t,e,i,s,r){Yh.subVectors(e,t),Dl.subVectors(i,t),Zh.crossVectors(Yh,Dl);let o=this.direction.dot(Zh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zs.subVectors(this.origin,t);let l=a*this.direction.dot(Dl.crossVectors(zs,Dl));if(l<0)return null;let c=a*this.direction.dot(Yh.cross(zs));if(c<0||l+c>o)return null;let u=-a*zs.dot(Zh);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ve=class n{constructor(t,e,i,s,r,o,a,l,c,u,d,f,p,g,v,x){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,d,f,p,g,v,x)}set(t,e,i,s,r,o,a,l,c,u,d,f,p,g,v,x){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=p,m[7]=g,m[11]=v,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/ro.setFromMatrixColumn(t,0).length(),r=1/ro.setFromMatrixColumn(t,1).length(),o=1/ro.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*u,p=o*d,g=a*u,v=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,p=l*d,g=c*u,v=c*d;e[0]=f+v*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,p=l*d,g=c*u,v=c*d;e[0]=f-v*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,p=o*d,g=a*u,v=a*d;e[0]=l*u,e[4]=g*c-p,e[8]=f*c+v,e[1]=l*d,e[5]=v*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*u,e[4]=v-f*d,e[8]=g*d+p,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*d+g,e[10]=f-v*d}else if(t.order==="XZY"){let f=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+v,e[5]=o*u,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*u,e[10]=v*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fy,t,Oy)}lookAt(t,e,i){let s=this.elements;return $n.subVectors(t,e),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Fs.crossVectors(i,$n),Fs.lengthSq()===0&&(Math.abs(i.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Fs.crossVectors(i,$n)),Fs.normalize(),Ul.crossVectors($n,Fs),s[0]=Fs.x,s[4]=Ul.x,s[8]=$n.x,s[1]=Fs.y,s[5]=Ul.y,s[9]=$n.y,s[2]=Fs.z,s[6]=Ul.z,s[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],v=i[6],x=i[10],m=i[14],_=i[3],E=i[7],M=i[11],D=i[15],A=s[0],L=s[4],I=s[8],w=s[12],b=s[1],U=s[5],B=s[9],O=s[13],W=s[2],tt=s[6],q=s[10],ot=s[14],X=s[3],_t=s[7],At=s[11],Vt=s[15];return r[0]=o*A+a*b+l*W+c*X,r[4]=o*L+a*U+l*tt+c*_t,r[8]=o*I+a*B+l*q+c*At,r[12]=o*w+a*O+l*ot+c*Vt,r[1]=u*A+d*b+f*W+p*X,r[5]=u*L+d*U+f*tt+p*_t,r[9]=u*I+d*B+f*q+p*At,r[13]=u*w+d*O+f*ot+p*Vt,r[2]=g*A+v*b+x*W+m*X,r[6]=g*L+v*U+x*tt+m*_t,r[10]=g*I+v*B+x*q+m*At,r[14]=g*w+v*O+x*ot+m*Vt,r[3]=_*A+E*b+M*W+D*X,r[7]=_*L+E*U+M*tt+D*_t,r[11]=_*I+E*B+M*q+D*At,r[15]=_*w+E*O+M*ot+D*Vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],p=t[14],g=t[3],v=t[7],x=t[11],m=t[15];return g*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*p-i*l*p)+v*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+x*(+e*c*d-e*a*p-r*o*d+i*o*p+r*a*u-i*c*u)+m*(-s*a*u-e*l*d+e*a*f+s*o*d-i*o*f+i*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],p=t[11],g=t[12],v=t[13],x=t[14],m=t[15],_=d*x*c-v*f*c+v*l*p-a*x*p-d*l*m+a*f*m,E=g*f*c-u*x*c-g*l*p+o*x*p+u*l*m-o*f*m,M=u*v*c-g*d*c+g*a*p-o*v*p-u*a*m+o*d*m,D=g*d*l-u*v*l-g*a*f+o*v*f+u*a*x-o*d*x,A=e*_+i*E+s*M+r*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/A;return t[0]=_*L,t[1]=(v*f*r-d*x*r-v*s*p+i*x*p+d*s*m-i*f*m)*L,t[2]=(a*x*r-v*l*r+v*s*c-i*x*c-a*s*m+i*l*m)*L,t[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*p-i*l*p)*L,t[4]=E*L,t[5]=(u*x*r-g*f*r+g*s*p-e*x*p-u*s*m+e*f*m)*L,t[6]=(g*l*r-o*x*r-g*s*c+e*x*c+o*s*m-e*l*m)*L,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*p+e*l*p)*L,t[8]=M*L,t[9]=(g*d*r-u*v*r-g*i*p+e*v*p+u*i*m-e*d*m)*L,t[10]=(o*v*r-g*a*r+g*i*c-e*v*c-o*i*m+e*a*m)*L,t[11]=(u*a*r-o*d*r-u*i*c+e*d*c+o*i*p-e*a*p)*L,t[12]=D*L,t[13]=(u*v*s-g*d*s+g*i*f-e*v*f-u*i*x+e*d*x)*L,t[14]=(g*a*s-o*v*s-g*i*l+e*v*l+o*i*x-e*a*x)*L,t[15]=(o*d*s-u*a*s+u*i*l-e*d*l-o*i*f+e*a*f)*L,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,f=r*c,p=r*u,g=r*d,v=o*u,x=o*d,m=a*d,_=l*c,E=l*u,M=l*d,D=i.x,A=i.y,L=i.z;return s[0]=(1-(v+m))*D,s[1]=(p+M)*D,s[2]=(g-E)*D,s[3]=0,s[4]=(p-M)*A,s[5]=(1-(f+m))*A,s[6]=(x+_)*A,s[7]=0,s[8]=(g+E)*L,s[9]=(x-_)*L,s[10]=(1-(f+v))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=ro.set(s[0],s[1],s[2]).length(),o=ro.set(s[4],s[5],s[6]).length(),a=ro.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],xi.copy(this);let c=1/r,u=1/o,d=1/a;return xi.elements[0]*=c,xi.elements[1]*=c,xi.elements[2]*=c,xi.elements[4]*=u,xi.elements[5]*=u,xi.elements[6]*=u,xi.elements[8]*=d,xi.elements[9]*=d,xi.elements[10]*=d,e.setFromRotationMatrix(xi),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=hs){let l=this.elements,c=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s),p,g;if(a===hs)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===cc)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=hs){let l=this.elements,c=1/(e-t),u=1/(i-s),d=1/(o-r),f=(e+t)*c,p=(i+s)*u,g,v;if(a===hs)g=(o+r)*d,v=-2*d;else if(a===cc)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},ro=new T,xi=new ve,Fy=new T(0,0,0),Oy=new T(1,1,1),Fs=new T,Ul=new T,$n=new T,M0=new ve,_0=new hn,_n=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Mn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return M0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(M0,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _0.setFromEuler(this),this.setFromQuaternion(_0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_n.DEFAULT_ORDER="XYZ";var pc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},By=0,E0=new T,oo=new hn,rs=new ve,Nl=new T,Sa=new T,Gy=new T,Vy=new hn,b0=new T(1,0,0),w0=new T(0,1,0),S0=new T(0,0,1),T0={type:"added"},Wy={type:"removed"},ao={type:"childadded",child:null},Kh={type:"childremoved",child:null},gn=class n extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new T,e=new _n,i=new hn,s=new T(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new ce}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return oo.setFromAxisAngle(t,e),this.quaternion.multiply(oo),this}rotateOnWorldAxis(t,e){return oo.setFromAxisAngle(t,e),this.quaternion.premultiply(oo),this}rotateX(t){return this.rotateOnAxis(b0,t)}rotateY(t){return this.rotateOnAxis(w0,t)}rotateZ(t){return this.rotateOnAxis(S0,t)}translateOnAxis(t,e){return E0.copy(t).applyQuaternion(this.quaternion),this.position.add(E0.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(b0,t)}translateY(t){return this.translateOnAxis(w0,t)}translateZ(t){return this.translateOnAxis(S0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rs.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Nl.copy(t):Nl.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rs.lookAt(Sa,Nl,this.up):rs.lookAt(Nl,Sa,this.up),this.quaternion.setFromRotationMatrix(rs),s&&(rs.extractRotation(s.matrixWorld),oo.setFromRotationMatrix(rs),this.quaternion.premultiply(oo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(T0),ao.child=t,this.dispatchEvent(ao),ao.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wy),Kh.child=t,this.dispatchEvent(Kh),Kh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rs.multiply(t.parent.matrixWorld)),t.applyMatrix4(rs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(T0),ao.child=t,this.dispatchEvent(ao),ao.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,t,Gy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,Vy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};gn.DEFAULT_UP=new T(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yi=new T,os=new T,Jh=new T,as=new T,lo=new T,co=new T,R0=new T,jh=new T,Qh=new T,tu=new T,eu=new Oe,nu=new Oe,iu=new Oe,Vs=class n{constructor(t=new T,e=new T,i=new T){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),yi.subVectors(t,e),s.cross(yi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){yi.subVectors(s,e),os.subVectors(i,e),Jh.subVectors(t,e);let o=yi.dot(yi),a=yi.dot(os),l=yi.dot(Jh),c=os.dot(os),u=os.dot(Jh),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,as)===null?!1:as.x>=0&&as.y>=0&&as.x+as.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,as)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,as.x),l.addScaledVector(o,as.y),l.addScaledVector(a,as.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return eu.setScalar(0),nu.setScalar(0),iu.setScalar(0),eu.fromBufferAttribute(t,e),nu.fromBufferAttribute(t,i),iu.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(eu,r.x),o.addScaledVector(nu,r.y),o.addScaledVector(iu,r.z),o}static isFrontFacing(t,e,i,s){return yi.subVectors(i,e),os.subVectors(t,e),yi.cross(os).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),os.subVectors(this.a,this.b),yi.cross(os).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;lo.subVectors(s,i),co.subVectors(r,i),jh.subVectors(t,i);let l=lo.dot(jh),c=co.dot(jh);if(l<=0&&c<=0)return e.copy(i);Qh.subVectors(t,s);let u=lo.dot(Qh),d=co.dot(Qh);if(u>=0&&d<=u)return e.copy(s);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(lo,o);tu.subVectors(t,r);let p=lo.dot(tu),g=co.dot(tu);if(g>=0&&p<=g)return e.copy(r);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(co,a);let x=u*g-p*d;if(x<=0&&d-u>=0&&p-g>=0)return R0.subVectors(r,s),a=(d-u)/(d-u+(p-g)),e.copy(s).addScaledVector(R0,a);let m=1/(x+v+f);return o=v*m,a=f*m,e.copy(i).addScaledVector(lo,o).addScaledVector(co,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Cm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Os={h:0,s:0,l:0},kl={h:0,s:0,l:0};function su(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var yt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=xe.workingColorSpace){return this.r=t,this.g=e,this.b=i,xe.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=xe.workingColorSpace){if(t=of(t,1),e=Mn(e,0,1),i=Mn(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=su(o,r,t+1/3),this.g=su(o,r,t),this.b=su(o,r,t-1/3)}return xe.toWorkingColorSpace(this,s),this}setStyle(t,e=ye){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){let i=Cm[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}copyLinearToSRGB(t){return this.r=Eo(t.r),this.g=Eo(t.g),this.b=Eo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return xe.fromWorkingColorSpace(Sn.copy(this),t),Math.round(Mn(Sn.r*255,0,255))*65536+Math.round(Mn(Sn.g*255,0,255))*256+Math.round(Mn(Sn.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.fromWorkingColorSpace(Sn.copy(this),e);let i=Sn.r,s=Sn.g,r=Sn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=xe.workingColorSpace){return xe.fromWorkingColorSpace(Sn.copy(this),e),t.r=Sn.r,t.g=Sn.g,t.b=Sn.b,t}getStyle(t=ye){xe.fromWorkingColorSpace(Sn.copy(this),t);let e=Sn.r,i=Sn.g,s=Sn.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Os),this.setHSL(Os.h+t,Os.s+e,Os.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Os),t.getHSL(kl);let i=ka(Os.h,kl.h,e),s=ka(Os.s,kl.s,e),r=ka(Os.l,kl.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new yt;yt.NAMES=Cm;var $y=0,ms=class extends Xs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=us(),this.name="",this.blending=Hi,this.side=$s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mu,this.blendDst=_u,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=h0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=to,this.stencilZFail=to,this.stencilZPass=to,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(i.blending=this.blending),this.side!==$s&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Mu&&(i.blendSrc=this.blendSrc),this.blendDst!==_u&&(i.blendDst=this.blendDst),this.blendEquation!==Sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==h0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==to&&(i.stencilFail=this.stencilFail),this.stencilZFail!==to&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==to&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Yt=class extends ms{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=mm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var dn=new T,Hl=new nt,tn=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=rd,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Hl.fromBufferAttribute(this,e),Hl.applyMatrix3(t),this.setXY(e,Hl.x,Hl.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix3(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix4(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)dn.fromBufferAttribute(this,e),dn.applyNormalMatrix(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)dn.fromBufferAttribute(this,e),dn.transformDirection(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=vi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ze(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rd&&(t.usage=this.usage),t}};var mc=class extends tn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var gc=class extends tn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var te=class extends tn{constructor(t,e,i){super(new Float32Array(t),e,i)}},Xy=0,ii=new ve,ru=new gn,ho=new T,Xn=new _i,Ta=new _i,vn=new T,Re=class n extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Am(t)?gc:mc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ce().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ii.makeRotationFromQuaternion(t),this.applyMatrix4(ii),this}rotateX(t){return ii.makeRotationX(t),this.applyMatrix4(ii),this}rotateY(t){return ii.makeRotationY(t),this.applyMatrix4(ii),this}rotateZ(t){return ii.makeRotationZ(t),this.applyMatrix4(ii),this}translate(t,e,i){return ii.makeTranslation(t,e,i),this.applyMatrix4(ii),this}scale(t,e,i){return ii.makeScale(t,e,i),this.applyMatrix4(ii),this}lookAt(t){return ru.lookAt(t),ru.updateMatrix(),this.applyMatrix4(ru.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ho).negate(),this.translate(ho.x,ho.y,ho.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Xn.setFromBufferAttribute(r),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){let i=this.boundingSphere.center;if(Xn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ta.setFromBufferAttribute(a),this.morphTargetsRelative?(vn.addVectors(Xn.min,Ta.min),Xn.expandByPoint(vn),vn.addVectors(Xn.max,Ta.max),Xn.expandByPoint(vn)):(Xn.expandByPoint(Ta.min),Xn.expandByPoint(Ta.max))}Xn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)vn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(vn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)vn.fromBufferAttribute(a,c),l&&(ho.fromBufferAttribute(t,c),vn.add(ho)),s=Math.max(s,i.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new T,l[I]=new T;let c=new T,u=new T,d=new T,f=new nt,p=new nt,g=new nt,v=new T,x=new T;function m(I,w,b){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,b),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,b),u.sub(c),d.sub(c),p.sub(f),g.sub(f);let U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(U),x.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(U),a[I].add(v),a[w].add(v),a[b].add(v),l[I].add(x),l[w].add(x),l[b].add(x))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let I=0,w=_.length;I<w;++I){let b=_[I],U=b.start,B=b.count;for(let O=U,W=U+B;O<W;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let E=new T,M=new T,D=new T,A=new T;function L(I){D.fromBufferAttribute(s,I),A.copy(D);let w=a[I];E.copy(w),E.sub(D.multiplyScalar(D.dot(w))).normalize(),M.crossVectors(A,w);let U=M.dot(l[I])<0?-1:1;o.setXYZW(I,E.x,E.y,E.z,U)}for(let I=0,w=_.length;I<w;++I){let b=_[I],U=b.start,B=b.count;for(let O=U,W=U+B;O<W;O+=3)L(t.getX(O+0)),L(t.getX(O+1)),L(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new T,r=new T,o=new T,a=new T,l=new T,c=new T,u=new T,d=new T;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),v=t.getX(f+1),x=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,x),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,x),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)vn.fromBufferAttribute(t,e),vn.normalize(),t.setXYZ(e,vn.x,vn.y,vn.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u),p=0,g=0;for(let v=0,x=l.length;v<x;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let m=0;m<u;m++)f[g++]=c[p++]}return new tn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let f=c[u],p=t(f,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},A0=new ve,Mr=new fc,zl=new qs,C0=new T,Fl=new T,Ol=new T,Bl=new T,ou=new T,Gl=new T,P0=new T,Vl=new T,lt=class extends gn{constructor(t=new Re,e=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Gl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(ou.fromBufferAttribute(d,t),o?Gl.addScaledVector(ou,u):Gl.addScaledVector(ou.sub(e),u))}e.add(Gl)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zl.copy(i.boundingSphere),zl.applyMatrix4(r),Mr.copy(t.ray).recast(t.near),!(zl.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(zl,C0)===null||Mr.origin.distanceToSquared(C0)>(t.far-t.near)**2))&&(A0.copy(r).invert(),Mr.copy(t.ray).applyMatrix4(A0),!(i.boundingBox!==null&&Mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Mr)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let x=f[g],m=o[x.materialIndex],_=Math.max(x.start,p.start),E=Math.min(a.count,Math.min(x.start+x.count,p.start+p.count));for(let M=_,D=E;M<D;M+=3){let A=a.getX(M),L=a.getX(M+1),I=a.getX(M+2);s=Wl(this,m,t,i,c,u,d,A,L,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let x=g,m=v;x<m;x+=3){let _=a.getX(x),E=a.getX(x+1),M=a.getX(x+2);s=Wl(this,o,t,i,c,u,d,_,E,M),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let x=f[g],m=o[x.materialIndex],_=Math.max(x.start,p.start),E=Math.min(l.count,Math.min(x.start+x.count,p.start+p.count));for(let M=_,D=E;M<D;M+=3){let A=M,L=M+1,I=M+2;s=Wl(this,m,t,i,c,u,d,A,L,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let x=g,m=v;x<m;x+=3){let _=x,E=x+1,M=x+2;s=Wl(this,o,t,i,c,u,d,_,E,M),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function qy(n,t,e,i,s,r,o,a){let l;if(t.side===Tn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===$s,a),l===null)return null;Vl.copy(a),Vl.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Vl);return c<e.near||c>e.far?null:{distance:c,point:Vl.clone(),object:n}}function Wl(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Fl),n.getVertexPosition(l,Ol),n.getVertexPosition(c,Bl);let u=qy(n,t,e,i,Fl,Ol,Bl,P0);if(u){let d=new T;Vs.getBarycoord(P0,Fl,Ol,Bl,d),s&&(u.uv=Vs.getInterpolatedAttribute(s,a,l,c,d,new nt)),r&&(u.uv1=Vs.getInterpolatedAttribute(r,a,l,c,d,new nt)),o&&(u.normal=Vs.getInterpolatedAttribute(o,a,l,c,d,new T),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new T,materialIndex:0};Vs.getNormal(Fl,Ol,Bl,f.normal),u.face=f,u.barycoord=d}return u}var Gt=class n extends Re{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],f=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(u,3)),this.setAttribute("uv",new te(d,2));function g(v,x,m,_,E,M,D,A,L,I,w){let b=M/L,U=D/I,B=M/2,O=D/2,W=A/2,tt=L+1,q=I+1,ot=0,X=0,_t=new T;for(let At=0;At<q;At++){let Vt=At*U-O;for(let me=0;me<tt;me++){let Be=me*b-B;_t[v]=Be*_,_t[x]=Vt*E,_t[m]=W,c.push(_t.x,_t.y,_t.z),_t[v]=0,_t[x]=0,_t[m]=A>0?1:-1,u.push(_t.x,_t.y,_t.z),d.push(me/L),d.push(1-At/I),ot+=1}}for(let At=0;At<I;At++)for(let Vt=0;Vt<L;Vt++){let me=f+Vt+tt*At,Be=f+Vt+tt*(At+1),J=f+(Vt+1)+tt*(At+1),at=f+(Vt+1)+tt*At;l.push(me,Be,at),l.push(Be,J,at),X+=6}a.addGroup(p,X,w),p+=X,f+=ot}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Po(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Dn(n){let t={};for(let e=0;e<n.length;e++){let i=Po(n[e]);for(let s in i)t[s]=i[s]}return t}function Yy(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Pm(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}var Qs={clone:Po,merge:Dn},Zy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ky=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends ms{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zy,this.fragmentShader=Ky,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Po(t.uniforms),this.uniformsGroups=Yy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},xc=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=hs}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Bs=new T,I0=new nt,L0=new nt,cn=class extends xc{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Co*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Na*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Co*2*Math.atan(Math.tan(Na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Bs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bs.x,Bs.y).multiplyScalar(-t/Bs.z),Bs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bs.x,Bs.y).multiplyScalar(-t/Bs.z)}getViewSize(t,e){return this.getViewBounds(t,I0,L0),e.subVectors(L0,I0)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Na*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},uo=-90,fo=1,cd=class extends gn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new cn(uo,fo,t,e);s.layers=this.layers,this.add(s);let r=new cn(uo,fo,t,e);r.layers=this.layers,this.add(r);let o=new cn(uo,fo,t,e);o.layers=this.layers,this.add(o);let a=new cn(uo,fo,t,e);a.layers=this.layers,this.add(a);let l=new cn(uo,fo,t,e);l.layers=this.layers,this.add(l);let c=new cn(uo,fo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===hs)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===cc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(d,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},yc=class extends Fn{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:So,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},hd=class extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new yc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ui}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gt(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:Po(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:ki});r.uniforms.tEquirect.value=e;let o=new lt(s,r),a=e.minFilter;return e.minFilter===Ar&&(e.minFilter=Ui),new cd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},au=new T,Jy=new T,jy=new ce,cs=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=au.subVectors(i,e).cross(Jy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(au),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||jy.getNormalMatrix(t),s=this.coplanarPoint(au).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},_r=new qs,$l=new T,Ba=class{constructor(t=new cs,e=new cs,i=new cs,s=new cs,r=new cs,o=new cs){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=hs){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],p=s[8],g=s[9],v=s[10],x=s[11],m=s[12],_=s[13],E=s[14],M=s[15];if(i[0].setComponents(l-r,f-c,x-p,M-m).normalize(),i[1].setComponents(l+r,f+c,x+p,M+m).normalize(),i[2].setComponents(l+o,f+u,x+g,M+_).normalize(),i[3].setComponents(l-o,f-u,x-g,M-_).normalize(),i[4].setComponents(l-a,f-d,x-v,M-E).normalize(),e===hs)i[5].setComponents(l+a,f+d,x+v,M+E).normalize();else if(e===cc)i[5].setComponents(a,d,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(t){return _r.center.set(0,0,0),_r.radius=.7071067811865476,_r.applyMatrix4(t.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if($l.x=s.normal.x>0?t.max.x:t.min.x,$l.y=s.normal.y>0?t.max.y:t.min.y,$l.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint($l)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Im(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Qy(n){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){let g=d[f],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){let v=d[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var On=class n extends Re{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=t/a,f=e/l,p=[],g=[],v=[],x=[];for(let m=0;m<u;m++){let _=m*f-o;for(let E=0;E<c;E++){let M=E*d-r;g.push(M,-_,0),v.push(0,0,1),x.push(E/a),x.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let E=_+c*m,M=_+c*(m+1),D=_+1+c*(m+1),A=_+1+c*m;p.push(E,M,A),p.push(M,D,A)}this.setIndex(p),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(v,3)),this.setAttribute("uv",new te(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},tv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ev=`#ifdef USE_ALPHAHASH
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
#endif`,nv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ov=`#ifdef USE_AOMAP
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
#endif`,av=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lv=`#ifdef USE_BATCHING
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
#endif`,cv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fv=`#ifdef USE_IRIDESCENCE
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
#endif`,pv=`#ifdef USE_BUMPMAP
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
#endif`,mv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_v=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ev=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bv=`#define PI 3.141592653589793
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
} // validated`,wv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sv=`vec3 transformedNormal = objectNormal;
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
#endif`,Tv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Av=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lv=`#ifdef USE_ENVMAP
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
#endif`,Dv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uv=`#ifdef USE_ENVMAP
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
#endif`,Nv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kv=`#ifdef USE_ENVMAP
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
#endif`,Hv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ov=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bv=`#ifdef USE_GRADIENTMAP
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
}`,Gv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$v=`uniform bool receiveShadow;
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
#endif`,Xv=`#ifdef USE_ENVMAP
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
#endif`,qv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jv=`PhysicalMaterial material;
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
#endif`,jv=`struct PhysicalMaterial {
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
}`,Qv=`
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
#endif`,tM=`#if defined( RE_IndirectDiffuse )
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
#endif`,eM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cM=`#if defined( USE_POINTS_UV )
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
#endif`,hM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mM=`#ifdef USE_MORPHTARGETS
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
#endif`,gM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_M=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,EM=`#ifdef USE_NORMALMAP
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
#endif`,bM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,CM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zM=`float getShadowMask() {
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
}`,FM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OM=`#ifdef USE_SKINNING
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
#endif`,BM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GM=`#ifdef USE_SKINNING
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
#endif`,VM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$M=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qM=`#ifdef USE_TRANSMISSION
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
#endif`,YM=`#ifdef USE_TRANSMISSION
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
#endif`,ZM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,QM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t_=`uniform sampler2D t2D;
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
}`,e_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r_=`#include <common>
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
}`,o_=`#if DEPTH_PACKING == 3200
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
}`,a_=`#define DISTANCE
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
}`,l_=`#define DISTANCE
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
}`,c_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u_=`uniform float scale;
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
}`,d_=`uniform vec3 diffuse;
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
}`,f_=`#include <common>
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
}`,p_=`uniform vec3 diffuse;
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
}`,m_=`#define LAMBERT
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
}`,g_=`#define LAMBERT
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
}`,x_=`#define MATCAP
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
}`,y_=`#define MATCAP
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
}`,v_=`#define NORMAL
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
}`,M_=`#define NORMAL
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
}`,__=`#define PHONG
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
}`,E_=`#define PHONG
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
}`,b_=`#define STANDARD
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
}`,w_=`#define STANDARD
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
}`,S_=`#define TOON
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
}`,T_=`#define TOON
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
}`,R_=`uniform float size;
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
}`,A_=`uniform vec3 diffuse;
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
}`,C_=`#include <common>
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
}`,P_=`uniform vec3 color;
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
}`,I_=`uniform float rotation;
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
}`,L_=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:tv,alphahash_pars_fragment:ev,alphamap_fragment:nv,alphamap_pars_fragment:iv,alphatest_fragment:sv,alphatest_pars_fragment:rv,aomap_fragment:ov,aomap_pars_fragment:av,batching_pars_vertex:lv,batching_vertex:cv,begin_vertex:hv,beginnormal_vertex:uv,bsdfs:dv,iridescence_fragment:fv,bumpmap_pars_fragment:pv,clipping_planes_fragment:mv,clipping_planes_pars_fragment:gv,clipping_planes_pars_vertex:xv,clipping_planes_vertex:yv,color_fragment:vv,color_pars_fragment:Mv,color_pars_vertex:_v,color_vertex:Ev,common:bv,cube_uv_reflection_fragment:wv,defaultnormal_vertex:Sv,displacementmap_pars_vertex:Tv,displacementmap_vertex:Rv,emissivemap_fragment:Av,emissivemap_pars_fragment:Cv,colorspace_fragment:Pv,colorspace_pars_fragment:Iv,envmap_fragment:Lv,envmap_common_pars_fragment:Dv,envmap_pars_fragment:Uv,envmap_pars_vertex:Nv,envmap_physical_pars_fragment:Xv,envmap_vertex:kv,fog_vertex:Hv,fog_pars_vertex:zv,fog_fragment:Fv,fog_pars_fragment:Ov,gradientmap_pars_fragment:Bv,lightmap_pars_fragment:Gv,lights_lambert_fragment:Vv,lights_lambert_pars_fragment:Wv,lights_pars_begin:$v,lights_toon_fragment:qv,lights_toon_pars_fragment:Yv,lights_phong_fragment:Zv,lights_phong_pars_fragment:Kv,lights_physical_fragment:Jv,lights_physical_pars_fragment:jv,lights_fragment_begin:Qv,lights_fragment_maps:tM,lights_fragment_end:eM,logdepthbuf_fragment:nM,logdepthbuf_pars_fragment:iM,logdepthbuf_pars_vertex:sM,logdepthbuf_vertex:rM,map_fragment:oM,map_pars_fragment:aM,map_particle_fragment:lM,map_particle_pars_fragment:cM,metalnessmap_fragment:hM,metalnessmap_pars_fragment:uM,morphinstance_vertex:dM,morphcolor_vertex:fM,morphnormal_vertex:pM,morphtarget_pars_vertex:mM,morphtarget_vertex:gM,normal_fragment_begin:xM,normal_fragment_maps:yM,normal_pars_fragment:vM,normal_pars_vertex:MM,normal_vertex:_M,normalmap_pars_fragment:EM,clearcoat_normal_fragment_begin:bM,clearcoat_normal_fragment_maps:wM,clearcoat_pars_fragment:SM,iridescence_pars_fragment:TM,opaque_fragment:RM,packing:AM,premultiplied_alpha_fragment:CM,project_vertex:PM,dithering_fragment:IM,dithering_pars_fragment:LM,roughnessmap_fragment:DM,roughnessmap_pars_fragment:UM,shadowmap_pars_fragment:NM,shadowmap_pars_vertex:kM,shadowmap_vertex:HM,shadowmask_pars_fragment:zM,skinbase_vertex:FM,skinning_pars_vertex:OM,skinning_vertex:BM,skinnormal_vertex:GM,specularmap_fragment:VM,specularmap_pars_fragment:WM,tonemapping_fragment:$M,tonemapping_pars_fragment:XM,transmission_fragment:qM,transmission_pars_fragment:YM,uv_pars_fragment:ZM,uv_pars_vertex:KM,uv_vertex:JM,worldpos_vertex:jM,background_vert:QM,background_frag:t_,backgroundCube_vert:e_,backgroundCube_frag:n_,cube_vert:i_,cube_frag:s_,depth_vert:r_,depth_frag:o_,distanceRGBA_vert:a_,distanceRGBA_frag:l_,equirect_vert:c_,equirect_frag:h_,linedashed_vert:u_,linedashed_frag:d_,meshbasic_vert:f_,meshbasic_frag:p_,meshlambert_vert:m_,meshlambert_frag:g_,meshmatcap_vert:x_,meshmatcap_frag:y_,meshnormal_vert:v_,meshnormal_frag:M_,meshphong_vert:__,meshphong_frag:E_,meshphysical_vert:b_,meshphysical_frag:w_,meshtoon_vert:S_,meshtoon_frag:T_,points_vert:R_,points_frag:A_,shadow_vert:C_,shadow_frag:P_,sprite_vert:I_,sprite_frag:L_},gt={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Di={basic:{uniforms:Dn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Dn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new yt(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Dn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Dn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Dn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new yt(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Dn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Dn([gt.points,gt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Dn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Dn([gt.common,gt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Dn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Dn([gt.sprite,gt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:Dn([gt.common,gt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:Dn([gt.lights,gt.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Di.physical={uniforms:Dn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};var Xl={r:0,b:0,g:0},Er=new _n,D_=new ve;function U_(n,t,e,i,s,r,o){let a=new yt(0),l=r===!0?0:1,c,u,d=null,f=0,p=null;function g(_){let E=_.isScene===!0?_.background:null;return E&&E.isTexture&&(E=(_.backgroundBlurriness>0?e:t).get(E)),E}function v(_){let E=!1,M=g(_);M===null?m(a,l):M&&M.isColor&&(m(M,1),E=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(_,E){let M=g(E);M&&(M.isCubeTexture||M.mapping===Dc)?(u===void 0&&(u=new lt(new Gt(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Po(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Er.copy(E.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(D_.makeRotationFromEuler(Er)),u.material.toneMapped=xe.getTransfer(M.colorSpace)!==Ne,(d!==M||f!==M.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=M,f=M.version,p=n.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new lt(new On(2,2),new rn({name:"BackgroundMaterial",uniforms:Po(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:$s,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=xe.getTransfer(M.colorSpace)!==Ne,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,p=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,E){_.getRGB(Xl,Pm(n)),i.buffers.color.setClear(Xl.r,Xl.g,Xl.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(_,E=1){a.set(_),l=E,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,m(a,l)},render:v,addToRenderList:x}}function N_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(b,U,B,O,W){let tt=!1,q=d(O,B,U);r!==q&&(r=q,c(r.object)),tt=p(b,O,B,W),tt&&g(b,O,B,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(tt||o)&&(o=!1,M(b,U,B,O),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function d(b,U,B){let O=B.wireframe===!0,W=i[b.id];W===void 0&&(W={},i[b.id]=W);let tt=W[U.id];tt===void 0&&(tt={},W[U.id]=tt);let q=tt[O];return q===void 0&&(q=f(l()),tt[O]=q),q}function f(b){let U=[],B=[],O=[];for(let W=0;W<e;W++)U[W]=0,B[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:O,object:b,attributes:{},index:null}}function p(b,U,B,O){let W=r.attributes,tt=U.attributes,q=0,ot=B.getAttributes();for(let X in ot)if(ot[X].location>=0){let At=W[X],Vt=tt[X];if(Vt===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(Vt=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(Vt=b.instanceColor)),At===void 0||At.attribute!==Vt||Vt&&At.data!==Vt.data)return!0;q++}return r.attributesNum!==q||r.index!==O}function g(b,U,B,O){let W={},tt=U.attributes,q=0,ot=B.getAttributes();for(let X in ot)if(ot[X].location>=0){let At=tt[X];At===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(At=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(At=b.instanceColor));let Vt={};Vt.attribute=At,At&&At.data&&(Vt.data=At.data),W[X]=Vt,q++}r.attributes=W,r.attributesNum=q,r.index=O}function v(){let b=r.newAttributes;for(let U=0,B=b.length;U<B;U++)b[U]=0}function x(b){m(b,0)}function m(b,U){let B=r.newAttributes,O=r.enabledAttributes,W=r.attributeDivisors;B[b]=1,O[b]===0&&(n.enableVertexAttribArray(b),O[b]=1),W[b]!==U&&(n.vertexAttribDivisor(b,U),W[b]=U)}function _(){let b=r.newAttributes,U=r.enabledAttributes;for(let B=0,O=U.length;B<O;B++)U[B]!==b[B]&&(n.disableVertexAttribArray(B),U[B]=0)}function E(b,U,B,O,W,tt,q){q===!0?n.vertexAttribIPointer(b,U,B,W,tt):n.vertexAttribPointer(b,U,B,O,W,tt)}function M(b,U,B,O){v();let W=O.attributes,tt=B.getAttributes(),q=U.defaultAttributeValues;for(let ot in tt){let X=tt[ot];if(X.location>=0){let _t=W[ot];if(_t===void 0&&(ot==="instanceMatrix"&&b.instanceMatrix&&(_t=b.instanceMatrix),ot==="instanceColor"&&b.instanceColor&&(_t=b.instanceColor)),_t!==void 0){let At=_t.normalized,Vt=_t.itemSize,me=t.get(_t);if(me===void 0)continue;let Be=me.buffer,J=me.type,at=me.bytesPerElement,zt=J===n.INT||J===n.UNSIGNED_INT||_t.gpuType===Jd;if(_t.isInterleavedBufferAttribute){let Et=_t.data,Jt=Et.stride,re=_t.offset;if(Et.isInstancedInterleavedBuffer){for(let ge=0;ge<X.locationSize;ge++)m(X.location+ge,Et.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let ge=0;ge<X.locationSize;ge++)x(X.location+ge);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let ge=0;ge<X.locationSize;ge++)E(X.location+ge,Vt/X.locationSize,J,At,Jt*at,(re+Vt/X.locationSize*ge)*at,zt)}else{if(_t.isInstancedBufferAttribute){for(let Et=0;Et<X.locationSize;Et++)m(X.location+Et,_t.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Et=0;Et<X.locationSize;Et++)x(X.location+Et);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let Et=0;Et<X.locationSize;Et++)E(X.location+Et,Vt/X.locationSize,J,At,Vt*at,Vt/X.locationSize*Et*at,zt)}}else if(q!==void 0){let At=q[ot];if(At!==void 0)switch(At.length){case 2:n.vertexAttrib2fv(X.location,At);break;case 3:n.vertexAttrib3fv(X.location,At);break;case 4:n.vertexAttrib4fv(X.location,At);break;default:n.vertexAttrib1fv(X.location,At)}}}}_()}function D(){I();for(let b in i){let U=i[b];for(let B in U){let O=U[B];for(let W in O)u(O[W].object),delete O[W];delete U[B]}delete i[b]}}function A(b){if(i[b.id]===void 0)return;let U=i[b.id];for(let B in U){let O=U[B];for(let W in O)u(O[W].object),delete O[W];delete U[B]}delete i[b.id]}function L(b){for(let U in i){let B=i[U];if(B[b.id]===void 0)continue;let O=B[b.id];for(let W in O)u(O[W].object),delete O[W];delete B[b.id]}}function I(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:w,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:x,disableUnusedAttributes:_}}function k_(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),e.update(u,i,d))}function a(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];e.update(p,i,1)}function l(c,u,d,f){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*f[v];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function H_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Mi&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let I=L===wi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==ps&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Ni&&!I)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:D,maxSamples:A}}function z_(n){let t=this,e=null,i=0,s=!1,r=!1,o=new cs,a=new ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,p){let g=d.clippingPlanes,v=d.clipIntersection,x=d.clipShadows,m=n.get(d);if(!s||g===null||g.length===0||r&&!x)r?u(null):c();else{let _=r?0:i,E=_*4,M=m.clippingState||null;l.value=M,M=u(g,f,E,p);for(let D=0;D!==E;++D)M[D]=e[D];m.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,p,g){let v=d!==null?d.length:0,x=null;if(v!==0){if(x=l.value,g!==!0||x===null){let m=p+v*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(x===null||x.length<m)&&(x=new Float32Array(m));for(let E=0,M=p;E!==v;++E,M+=4)o.copy(d[E]).applyMatrix4(_,a),o.normal.toArray(x,M),x[M+3]=o.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,x}}function F_(n){let t=new WeakMap;function e(o,a){return a===Cu?o.mapping=So:a===Pu&&(o.mapping=To),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Cu||a===Pu)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new hd(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Io=class extends xc{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Mo=4,D0=[.125,.215,.35,.446,.526,.582],Tr=20,lu=new Io,U0=new yt,cu=null,hu=0,uu=0,du=!1,wr=(1+Math.sqrt(5))/2,po=1/wr,N0=[new T(-wr,po,0),new T(wr,po,0),new T(-po,0,wr),new T(po,0,wr),new T(0,wr,-po),new T(0,wr,po),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],Lo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){cu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=z0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=H0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(cu,hu,uu),this._renderer.xr.enabled=du,t.scissorTest=!1,ql(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===So||t.mapping===To?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ui,minFilter:Ui,generateMipmaps:!1,type:wi,format:Mi,colorSpace:Ho,depthBuffer:!1},s=k0(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=k0(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=O_(r)),this._blurMaterial=B_(r,t,e)}return s}_compileMaterial(t){let e=new lt(this._lodPlanes[0],t);this._renderer.compile(e,lu)}_sceneToCubeUV(t,e,i,s){let a=new cn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(U0),u.toneMapping=Ws,u.autoClear=!1;let p=new Yt({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),g=new lt(new Gt,p),v=!1,x=t.background;x?x.isColor&&(p.color.copy(x),t.background=null,v=!0):(p.color.copy(U0),v=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):_===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let E=this._cubeSize;ql(s,_*E,m>2?E:0,E,E),u.setRenderTarget(s),v&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=x}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===So||t.mapping===To;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=z0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=H0());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new lt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;ql(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,lu)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=N0[(s-r-1)%N0.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new lt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Tr-1),v=r/g,x=isFinite(r)?1+Math.floor(u*v):Tr;x>Tr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Tr}`);let m=[],_=0;for(let L=0;L<Tr;++L){let I=L/v,w=Math.exp(-I*I/2);m.push(w),L===0?_+=w:L<x&&(_+=2*w)}for(let L=0;L<m.length;L++)m[L]=m[L]/_;f.envMap.value=t.texture,f.samples.value=x,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;let M=this._sizeLods[s],D=3*M*(s>E-Mo?s-E+Mo:0),A=4*(this._cubeSize-M);ql(e,D,A,3*M,2*M),l.setRenderTarget(e),l.render(d,lu)}};function O_(n){let t=[],e=[],i=[],s=n,r=n-Mo+1+D0.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Mo?l=D0[o-n+Mo-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,v=3,x=2,m=1,_=new Float32Array(v*g*p),E=new Float32Array(x*g*p),M=new Float32Array(m*g*p);for(let A=0;A<p;A++){let L=A%3*2/3-1,I=A>2?0:-1,w=[L,I,0,L+2/3,I,0,L+2/3,I+1,0,L,I,0,L+2/3,I+1,0,L,I+1,0];_.set(w,v*g*A),E.set(f,x*g*A);let b=[A,A,A,A,A,A];M.set(b,m*g*A)}let D=new Re;D.setAttribute("position",new tn(_,v)),D.setAttribute("uv",new tn(E,x)),D.setAttribute("faceIndex",new tn(M,m)),t.push(D),s>Mo&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function k0(n,t,e){let i=new Un(n,t,e);return i.texture.mapping=Dc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ql(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function B_(n,t,e){let i=new Float32Array(Tr),s=new T(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:af(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function H0(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:af(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function z0(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function af(){return`

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
	`}function G_(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Cu||l===Pu,u=l===So||l===To;if(c||u){let d=t.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Lo(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Lo(n)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function V_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Da("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function W_(n,t,e,i){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let v=f.morphAttributes[g];for(let x=0,m=v.length;x<m;x++)t.remove(v[x])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let g in f)t.update(f[g],n.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let v=p[g];for(let x=0,m=v.length;x<m;x++)t.update(v[x],n.ARRAY_BUFFER)}}function c(d){let f=[],p=d.index,g=d.attributes.position,v=0;if(p!==null){let _=p.array;v=p.version;for(let E=0,M=_.length;E<M;E+=3){let D=_[E+0],A=_[E+1],L=_[E+2];f.push(D,A,A,L,L,D)}}else if(g!==void 0){let _=g.array;v=g.version;for(let E=0,M=_.length/3-1;E<M;E+=3){let D=E+0,A=E+1,L=E+2;f.push(D,A,A,L,L,D)}}else return;let x=new(Am(f)?gc:mc)(f,1);x.version=v;let m=r.get(d);m&&t.remove(m),r.set(d,x)}function u(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function $_(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),e.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),e.update(p,i,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let x=0;for(let m=0;m<g;m++)x+=p[m];e.update(x,i,1)}function d(f,p,g,v){if(g===0)return;let x=t.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<f.length;m++)c(f[m]/o,p[m],v[m]);else{x.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,v,0,g);let m=0;for(let _=0;_<g;_++)m+=p[_]*v[_];e.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function X_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function q_(n,t,e){let i=new WeakMap,s=new Oe;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let w=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],E=0;p===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let M=a.attributes.position.count*E,D=1;M>t.maxTextureSize&&(D=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let A=new Float32Array(M*D*4*d),L=new dc(A,M,D,d);L.type=Ni,L.needsUpdate=!0;let I=E*4;for(let b=0;b<d;b++){let U=x[b],B=m[b],O=_[b],W=M*D*4*b;for(let tt=0;tt<U.count;tt++){let q=tt*I;p===!0&&(s.fromBufferAttribute(U,tt),A[W+q+0]=s.x,A[W+q+1]=s.y,A[W+q+2]=s.z,A[W+q+3]=0),g===!0&&(s.fromBufferAttribute(B,tt),A[W+q+4]=s.x,A[W+q+5]=s.y,A[W+q+6]=s.z,A[W+q+7]=0),v===!0&&(s.fromBufferAttribute(O,tt),A[W+q+8]=s.x,A[W+q+9]=s.y,A[W+q+10]=s.z,A[W+q+11]=O.itemSize===4?s.w:1)}}f={count:d,texture:L,size:new nt(M,D)},i.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Y_(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var vc=class extends Fn{constructor(t,e,i,s,r,o,a,l,c,u=_o){if(u!==_o&&u!==Ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===_o&&(i=Cr),i===void 0&&u===Ao&&(i=Ro),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qn,this.minFilter=l!==void 0?l:qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Lm=new Fn,F0=new vc(1,1),Dm=new dc,Um=new ld,Nm=new yc,O0=[],B0=[],G0=new Float32Array(16),V0=new Float32Array(9),W0=new Float32Array(4);function zo(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=O0[s];if(r===void 0&&(r=new Float32Array(s),O0[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function xn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function yn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Nc(n,t){let e=B0[t];e===void 0&&(e=new Int32Array(t),B0[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Z_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function K_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xn(e,t))return;n.uniform2fv(this.addr,t),yn(e,t)}}function J_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xn(e,t))return;n.uniform3fv(this.addr,t),yn(e,t)}}function j_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xn(e,t))return;n.uniform4fv(this.addr,t),yn(e,t)}}function Q_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(xn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),yn(e,t)}else{if(xn(e,i))return;W0.set(i),n.uniformMatrix2fv(this.addr,!1,W0),yn(e,i)}}function t2(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(xn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),yn(e,t)}else{if(xn(e,i))return;V0.set(i),n.uniformMatrix3fv(this.addr,!1,V0),yn(e,i)}}function e2(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(xn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),yn(e,t)}else{if(xn(e,i))return;G0.set(i),n.uniformMatrix4fv(this.addr,!1,G0),yn(e,i)}}function n2(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function i2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xn(e,t))return;n.uniform2iv(this.addr,t),yn(e,t)}}function s2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xn(e,t))return;n.uniform3iv(this.addr,t),yn(e,t)}}function r2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xn(e,t))return;n.uniform4iv(this.addr,t),yn(e,t)}}function o2(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function a2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xn(e,t))return;n.uniform2uiv(this.addr,t),yn(e,t)}}function l2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xn(e,t))return;n.uniform3uiv(this.addr,t),yn(e,t)}}function c2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xn(e,t))return;n.uniform4uiv(this.addr,t),yn(e,t)}}function h2(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(F0.compareFunction=Rm,r=F0):r=Lm,e.setTexture2D(t||r,s)}function u2(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Um,s)}function d2(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Nm,s)}function f2(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Dm,s)}function p2(n){switch(n){case 5126:return Z_;case 35664:return K_;case 35665:return J_;case 35666:return j_;case 35674:return Q_;case 35675:return t2;case 35676:return e2;case 5124:case 35670:return n2;case 35667:case 35671:return i2;case 35668:case 35672:return s2;case 35669:case 35673:return r2;case 5125:return o2;case 36294:return a2;case 36295:return l2;case 36296:return c2;case 35678:case 36198:case 36298:case 36306:case 35682:return h2;case 35679:case 36299:case 36307:return u2;case 35680:case 36300:case 36308:case 36293:return d2;case 36289:case 36303:case 36311:case 36292:return f2}}function m2(n,t){n.uniform1fv(this.addr,t)}function g2(n,t){let e=zo(t,this.size,2);n.uniform2fv(this.addr,e)}function x2(n,t){let e=zo(t,this.size,3);n.uniform3fv(this.addr,e)}function y2(n,t){let e=zo(t,this.size,4);n.uniform4fv(this.addr,e)}function v2(n,t){let e=zo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function M2(n,t){let e=zo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function _2(n,t){let e=zo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function E2(n,t){n.uniform1iv(this.addr,t)}function b2(n,t){n.uniform2iv(this.addr,t)}function w2(n,t){n.uniform3iv(this.addr,t)}function S2(n,t){n.uniform4iv(this.addr,t)}function T2(n,t){n.uniform1uiv(this.addr,t)}function R2(n,t){n.uniform2uiv(this.addr,t)}function A2(n,t){n.uniform3uiv(this.addr,t)}function C2(n,t){n.uniform4uiv(this.addr,t)}function P2(n,t,e){let i=this.cache,s=t.length,r=Nc(e,s);xn(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Lm,r[o])}function I2(n,t,e){let i=this.cache,s=t.length,r=Nc(e,s);xn(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Um,r[o])}function L2(n,t,e){let i=this.cache,s=t.length,r=Nc(e,s);xn(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Nm,r[o])}function D2(n,t,e){let i=this.cache,s=t.length,r=Nc(e,s);xn(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Dm,r[o])}function U2(n){switch(n){case 5126:return m2;case 35664:return g2;case 35665:return x2;case 35666:return y2;case 35674:return v2;case 35675:return M2;case 35676:return _2;case 5124:case 35670:return E2;case 35667:case 35671:return b2;case 35668:case 35672:return w2;case 35669:case 35673:return S2;case 5125:return T2;case 36294:return R2;case 36295:return A2;case 36296:return C2;case 35678:case 36198:case 36298:case 36306:case 35682:return P2;case 35679:case 36299:case 36307:return I2;case 35680:case 36300:case 36308:case 36293:return L2;case 36289:case 36303:case 36311:case 36292:return D2}}var ud=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=p2(e.type)}},dd=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=U2(e.type)}},fd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},fu=/(\w+)(\])?(\[|\.)?/g;function $0(n,t){n.seq.push(t),n.map[t.id]=t}function N2(n,t,e){let i=n.name,s=i.length;for(fu.lastIndex=0;;){let r=fu.exec(i),o=fu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){$0(e,c===void 0?new ud(a,n,t):new dd(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new fd(a),$0(e,d)),e=d}}}var bo=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);N2(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function X0(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var k2=37297,H2=0;function z2(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var q0=new ce;function F2(n){xe._getMatrix(q0,xe.workingColorSpace,n);let t=`mat3( ${q0.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(n)){case Uc:return[t,"LinearTransferOETF"];case Ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Y0(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+z2(n.getShaderSource(t),o)}else return s}function O2(n,t){let e=F2(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function B2(n,t){let e;switch(t){case Xd:e="Linear";break;case qd:e="Reinhard";break;case Yd:e="Cineon";break;case Dr:e="ACESFilmic";break;case Zd:e="AgX";break;case Kd:e="Neutral";break;case sy:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Yl=new T;function G2(){xe.getLuminanceCoefficients(Yl);let n=Yl.x.toFixed(4),t=Yl.y.toFixed(4),e=Yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ua).join(`
`)}function W2(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function $2(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ua(n){return n!==""}function Z0(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function K0(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var X2=/^[ \t]*#include +<([\w\d./]+)>/gm;function pd(n){return n.replace(X2,Y2)}var q2=new Map;function Y2(n,t){let e=de[t];if(e===void 0){let i=q2.get(t);if(i!==void 0)e=de[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return pd(e)}var Z2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function J0(n){return n.replace(Z2,K2)}function K2(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function j0(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function J2(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pm?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===$d?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ls&&(t="SHADOWMAP_TYPE_VSM"),t}function j2(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case So:case To:t="ENVMAP_TYPE_CUBE";break;case Dc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Q2(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case To:t="ENVMAP_MODE_REFRACTION";break}return t}function tE(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case mm:t="ENVMAP_BLENDING_MULTIPLY";break;case ny:t="ENVMAP_BLENDING_MIX";break;case iy:t="ENVMAP_BLENDING_ADD";break}return t}function eE(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function nE(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=J2(e),c=j2(e),u=Q2(e),d=tE(e),f=eE(e),p=V2(e),g=W2(r),v=s.createProgram(),x,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ua).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ua).join(`
`),m.length>0&&(m+=`
`)):(x=[j0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ua).join(`
`),m=[j0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ws?"#define TONE_MAPPING":"",e.toneMapping!==Ws?de.tonemapping_pars_fragment:"",e.toneMapping!==Ws?B2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,O2("linearToOutputTexel",e.outputColorSpace),G2(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ua).join(`
`)),o=pd(o),o=Z0(o,e),o=K0(o,e),a=pd(a),a=Z0(a,e),a=K0(a,e),o=J0(o),a=J0(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,x=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===u0?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===u0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=_+x+o,M=_+m+a,D=X0(s,s.VERTEX_SHADER,E),A=X0(s,s.FRAGMENT_SHADER,M);s.attachShader(v,D),s.attachShader(v,A),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function L(U){if(n.debug.checkShaderErrors){let B=s.getProgramInfoLog(v).trim(),O=s.getShaderInfoLog(D).trim(),W=s.getShaderInfoLog(A).trim(),tt=!0,q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(tt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,D,A);else{let ot=Y0(s,D,"vertex"),X=Y0(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+B+`
`+ot+`
`+X)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(O===""||W==="")&&(q=!1);q&&(U.diagnostics={runnable:tt,programLog:B,vertexShader:{log:O,prefix:x},fragmentShader:{log:W,prefix:m}})}s.deleteShader(D),s.deleteShader(A),I=new bo(s,v),w=$2(s,v)}let I;this.getUniforms=function(){return I===void 0&&L(this),I};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,k2)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=H2++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=A,this}var iE=0,md=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new gd(t),e.set(t,i)),i}},gd=class{constructor(t){this.id=iE++,this.code=t,this.usedTimes=0}};function sE(n,t,e,i,s,r,o){let a=new pc,l=new md,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function x(w,b,U,B,O){let W=B.fog,tt=O.geometry,q=w.isMeshStandardMaterial?B.environment:null,ot=(w.isMeshStandardMaterial?e:t).get(w.envMap||q),X=ot&&ot.mapping===Dc?ot.image.height:null,_t=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));let At=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Vt=At!==void 0?At.length:0,me=0;tt.morphAttributes.position!==void 0&&(me=1),tt.morphAttributes.normal!==void 0&&(me=2),tt.morphAttributes.color!==void 0&&(me=3);let Be,J,at,zt;if(_t){let He=Di[_t];Be=He.vertexShader,J=He.fragmentShader}else Be=w.vertexShader,J=w.fragmentShader,l.update(w),at=l.getVertexShaderID(w),zt=l.getFragmentShaderID(w);let Et=n.getRenderTarget(),Jt=n.state.buffers.depth.getReversed(),re=O.isInstancedMesh===!0,ge=O.isBatchedMesh===!0,Qe=!!w.map,we=!!w.matcap,ln=!!ot,z=!!w.aoMap,ei=!!w.lightMap,Me=!!w.bumpMap,_e=!!w.normalMap,qt=!!w.displacementMap,qe=!!w.emissiveMap,Xt=!!w.metalnessMap,P=!!w.roughnessMap,S=w.anisotropy>0,F=w.clearcoat>0,j=w.dispersion>0,et=w.iridescence>0,K=w.sheen>0,Ft=w.transmission>0,bt=S&&!!w.anisotropyMap,Ct=F&&!!w.clearcoatMap,Se=F&&!!w.clearcoatNormalMap,st=F&&!!w.clearcoatRoughnessMap,Pt=et&&!!w.iridescenceMap,Kt=et&&!!w.iridescenceThicknessMap,Qt=K&&!!w.sheenColorMap,It=K&&!!w.sheenRoughnessMap,Ee=!!w.specularMap,ue=!!w.specularColorMap,$e=!!w.specularIntensityMap,N=Ft&&!!w.transmissionMap,vt=Ft&&!!w.thicknessMap,$=!!w.gradientMap,Q=!!w.alphaMap,Rt=w.alphaTest>0,wt=!!w.alphaHash,ae=!!w.extensions,sn=Ws;w.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(sn=n.toneMapping);let bn={shaderID:_t,shaderType:w.type,shaderName:w.name,vertexShader:Be,fragmentShader:J,defines:w.defines,customVertexShaderID:at,customFragmentShaderID:zt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:ge,batchingColor:ge&&O._colorsTexture!==null,instancing:re,instancingColor:re&&O.instanceColor!==null,instancingMorph:re&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Et===null?n.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:Ho,alphaToCoverage:!!w.alphaToCoverage,map:Qe,matcap:we,envMap:ln,envMapMode:ln&&ot.mapping,envMapCubeUVHeight:X,aoMap:z,lightMap:ei,bumpMap:Me,normalMap:_e,displacementMap:f&&qt,emissiveMap:qe,normalMapObjectSpace:_e&&w.normalMapType===ly,normalMapTangentSpace:_e&&w.normalMapType===Tm,metalnessMap:Xt,roughnessMap:P,anisotropy:S,anisotropyMap:bt,clearcoat:F,clearcoatMap:Ct,clearcoatNormalMap:Se,clearcoatRoughnessMap:st,dispersion:j,iridescence:et,iridescenceMap:Pt,iridescenceThicknessMap:Kt,sheen:K,sheenColorMap:Qt,sheenRoughnessMap:It,specularMap:Ee,specularColorMap:ue,specularIntensityMap:$e,transmission:Ft,transmissionMap:N,thicknessMap:vt,gradientMap:$,opaque:w.transparent===!1&&w.blending===Hi&&w.alphaToCoverage===!1,alphaMap:Q,alphaTest:Rt,alphaHash:wt,combine:w.combine,mapUv:Qe&&v(w.map.channel),aoMapUv:z&&v(w.aoMap.channel),lightMapUv:ei&&v(w.lightMap.channel),bumpMapUv:Me&&v(w.bumpMap.channel),normalMapUv:_e&&v(w.normalMap.channel),displacementMapUv:qt&&v(w.displacementMap.channel),emissiveMapUv:qe&&v(w.emissiveMap.channel),metalnessMapUv:Xt&&v(w.metalnessMap.channel),roughnessMapUv:P&&v(w.roughnessMap.channel),anisotropyMapUv:bt&&v(w.anisotropyMap.channel),clearcoatMapUv:Ct&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Se&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Qt&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:It&&v(w.sheenRoughnessMap.channel),specularMapUv:Ee&&v(w.specularMap.channel),specularColorMapUv:ue&&v(w.specularColorMap.channel),specularIntensityMapUv:$e&&v(w.specularIntensityMap.channel),transmissionMapUv:N&&v(w.transmissionMap.channel),thicknessMapUv:vt&&v(w.thicknessMap.channel),alphaMapUv:Q&&v(w.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(_e||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!tt.attributes.uv&&(Qe||Q),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Jt,skinning:O.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:Vt,morphTextureStride:me,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:sn,decodeVideoTexture:Qe&&w.map.isVideoTexture===!0&&xe.getTransfer(w.map.colorSpace)===Ne,decodeVideoTextureEmissive:qe&&w.emissiveMap.isVideoTexture===!0&&xe.getTransfer(w.emissiveMap.colorSpace)===Ne,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ge,flipSided:w.side===Tn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ae&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&w.extensions.multiDraw===!0||ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return bn.vertexUv1s=c.has(1),bn.vertexUv2s=c.has(2),bn.vertexUv3s=c.has(3),c.clear(),bn}function m(w){let b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(let U in w.defines)b.push(U),b.push(w.defines[U]);return w.isRawShaderMaterial===!1&&(_(b,w),E(b,w),b.push(n.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function _(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function E(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function M(w){let b=g[w.type],U;if(b){let B=Di[b];U=Qs.clone(B.uniforms)}else U=w.uniforms;return U}function D(w,b){let U;for(let B=0,O=u.length;B<O;B++){let W=u[B];if(W.cacheKey===b){U=W,++U.usedTimes;break}}return U===void 0&&(U=new nE(n,b,w,r),u.push(U)),U}function A(w){if(--w.usedTimes===0){let b=u.indexOf(w);u[b]=u[u.length-1],u.pop(),w.destroy()}}function L(w){l.remove(w)}function I(){l.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:M,acquireProgram:D,releaseProgram:A,releaseShaderCache:L,programs:u,dispose:I}}function rE(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function oE(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Q0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function tm(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,f,p,g,v,x){let m=n[t];return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:x},n[t]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=v,m.group=x),t++,m}function a(d,f,p,g,v,x){let m=o(d,f,p,g,v,x);p.transmission>0?i.push(m):p.transparent===!0?s.push(m):e.push(m)}function l(d,f,p,g,v,x){let m=o(d,f,p,g,v,x);p.transmission>0?i.unshift(m):p.transparent===!0?s.unshift(m):e.unshift(m)}function c(d,f){e.length>1&&e.sort(d||oE),i.length>1&&i.sort(f||Q0),s.length>1&&s.sort(f||Q0)}function u(){for(let d=t,f=n.length;d<f;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function aE(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new tm,n.set(i,[o])):s>=r.length?(o=new tm,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function lE(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new yt};break;case"SpotLight":e={position:new T,direction:new T,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":e={color:new yt,position:new T,halfWidth:new T,halfHeight:new T};break}return n[t.id]=e,e}}}function cE(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var hE=0;function uE(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function dE(n){let t=new lE,e=cE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new T);let s=new T,r=new ve,o=new ve;function a(c){let u=0,d=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,v=0,x=0,m=0,_=0,E=0,M=0,D=0,A=0,L=0;c.sort(uE);for(let w=0,b=c.length;w<b;w++){let U=c[w],B=U.color,O=U.intensity,W=U.distance,tt=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=B.r*O,d+=B.g*O,f+=B.b*O;else if(U.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(U.sh.coefficients[q],O);L++}else if(U.isDirectionalLight){let q=t.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let ot=U.shadow,X=e.get(U);X.shadowIntensity=ot.intensity,X.shadowBias=ot.bias,X.shadowNormalBias=ot.normalBias,X.shadowRadius=ot.radius,X.shadowMapSize=ot.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=tt,i.directionalShadowMatrix[p]=U.shadow.matrix,_++}i.directional[p]=q,p++}else if(U.isSpotLight){let q=t.get(U);q.position.setFromMatrixPosition(U.matrixWorld),q.color.copy(B).multiplyScalar(O),q.distance=W,q.coneCos=Math.cos(U.angle),q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),q.decay=U.decay,i.spot[v]=q;let ot=U.shadow;if(U.map&&(i.spotLightMap[D]=U.map,D++,ot.updateMatrices(U),U.castShadow&&A++),i.spotLightMatrix[v]=ot.matrix,U.castShadow){let X=e.get(U);X.shadowIntensity=ot.intensity,X.shadowBias=ot.bias,X.shadowNormalBias=ot.normalBias,X.shadowRadius=ot.radius,X.shadowMapSize=ot.mapSize,i.spotShadow[v]=X,i.spotShadowMap[v]=tt,M++}v++}else if(U.isRectAreaLight){let q=t.get(U);q.color.copy(B).multiplyScalar(O),q.halfWidth.set(U.width*.5,0,0),q.halfHeight.set(0,U.height*.5,0),i.rectArea[x]=q,x++}else if(U.isPointLight){let q=t.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),q.distance=U.distance,q.decay=U.decay,U.castShadow){let ot=U.shadow,X=e.get(U);X.shadowIntensity=ot.intensity,X.shadowBias=ot.bias,X.shadowNormalBias=ot.normalBias,X.shadowRadius=ot.radius,X.shadowMapSize=ot.mapSize,X.shadowCameraNear=ot.camera.near,X.shadowCameraFar=ot.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=tt,i.pointShadowMatrix[g]=U.shadow.matrix,E++}i.point[g]=q,g++}else if(U.isHemisphereLight){let q=t.get(U);q.skyColor.copy(U.color).multiplyScalar(O),q.groundColor.copy(U.groundColor).multiplyScalar(O),i.hemi[m]=q,m++}}x>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let I=i.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==x||I.hemiLength!==m||I.numDirectionalShadows!==_||I.numPointShadows!==E||I.numSpotShadows!==M||I.numSpotMaps!==D||I.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=x,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=M+D-A,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=L,I.directionalLength=p,I.pointLength=g,I.spotLength=v,I.rectAreaLength=x,I.hemiLength=m,I.numDirectionalShadows=_,I.numPointShadows=E,I.numSpotShadows=M,I.numSpotMaps=D,I.numLightProbes=L,i.version=hE++)}function l(c,u){let d=0,f=0,p=0,g=0,v=0,x=u.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){let E=c[m];if(E.isDirectionalLight){let M=i.directional[d];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),d++}else if(E.isSpotLight){let M=i.spot[p];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),p++}else if(E.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(x),o.identity(),r.copy(E.matrixWorld),r.premultiply(x),o.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(x),f++}else if(E.isHemisphereLight){let M=i.hemi[v];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(x),v++}}}return{setup:a,setupView:l,state:i}}function em(n){let t=new dE(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function fE(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new em(n),t.set(s,[a])):r>=o.length?(a=new em(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var xd=class extends ms{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=oy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},yd=class extends ms{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},pE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mE=`uniform sampler2D shadow_pass;
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
}`;function gE(n,t,e){let i=new Ba,s=new nt,r=new nt,o=new Oe,a=new xd({depthPacking:ay}),l=new yd,c={},u=e.maxTextureSize,d={[$s]:Tn,[Tn]:$s,[Ge]:Ge},f=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:pE,fragmentShader:mE}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Re;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new lt(g,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pm;let m=this.type;this.render=function(A,L,I){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||A.length===0)return;let w=n.getRenderTarget(),b=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),B=n.state;B.setBlending(ki),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let O=m!==ls&&this.type===ls,W=m===ls&&this.type!==ls;for(let tt=0,q=A.length;tt<q;tt++){let ot=A[tt],X=ot.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ot,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let _t=X.getFrameExtents();if(s.multiply(_t),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/_t.x),s.x=r.x*_t.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/_t.y),s.y=r.y*_t.y,X.mapSize.y=r.y)),X.map===null||O===!0||W===!0){let Vt=this.type!==ls?{minFilter:qn,magFilter:qn}:{};X.map!==null&&X.map.dispose(),X.map=new Un(s.x,s.y,Vt),X.map.texture.name=ot.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();let At=X.getViewportCount();for(let Vt=0;Vt<At;Vt++){let me=X.getViewport(Vt);o.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),B.viewport(o),X.updateMatrices(ot,Vt),i=X.getFrustum(),M(L,I,X.camera,ot,this.type)}X.isPointLightShadow!==!0&&this.type===ls&&_(X,I),X.needsUpdate=!1}m=this.type,x.needsUpdate=!1,n.setRenderTarget(w,b,U)};function _(A,L){let I=t.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Un(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(L,null,I,f,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(L,null,I,p,v,null)}function E(A,L,I,w){let b=null,U=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)b=U;else if(b=I.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let B=b.uuid,O=L.uuid,W=c[B];W===void 0&&(W={},c[B]=W);let tt=W[O];tt===void 0&&(tt=b.clone(),W[O]=tt,L.addEventListener("dispose",D)),b=tt}if(b.visible=L.visible,b.wireframe=L.wireframe,w===ls?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:d[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let B=n.properties.get(b);B.light=I}return b}function M(A,L,I,w,b){if(A.visible===!1)return;if(A.layers.test(L.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===ls)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);let O=t.update(A),W=A.material;if(Array.isArray(W)){let tt=O.groups;for(let q=0,ot=tt.length;q<ot;q++){let X=tt[q],_t=W[X.materialIndex];if(_t&&_t.visible){let At=E(A,_t,w,b);A.onBeforeShadow(n,A,L,I,O,At,X),n.renderBufferDirect(I,null,O,At,A,X),A.onAfterShadow(n,A,L,I,O,At,X)}}}else if(W.visible){let tt=E(A,W,w,b);A.onBeforeShadow(n,A,L,I,O,tt,null),n.renderBufferDirect(I,null,O,tt,A,null),A.onAfterShadow(n,A,L,I,O,tt,null)}}let B=A.children;for(let O=0,W=B.length;O<W;O++)M(B[O],L,I,w,b)}function D(A){A.target.removeEventListener("dispose",D);for(let I in c){let w=c[I],b=A.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}var xE={[Eu]:bu,[wu]:Ru,[Su]:Au,[wo]:Tu,[bu]:Eu,[Ru]:wu,[Au]:Su,[Tu]:wo};function yE(n,t){function e(){let N=!1,vt=new Oe,$=null,Q=new Oe(0,0,0,0);return{setMask:function(Rt){$!==Rt&&!N&&(n.colorMask(Rt,Rt,Rt,Rt),$=Rt)},setLocked:function(Rt){N=Rt},setClear:function(Rt,wt,ae,sn,bn){bn===!0&&(Rt*=sn,wt*=sn,ae*=sn),vt.set(Rt,wt,ae,sn),Q.equals(vt)===!1&&(n.clearColor(Rt,wt,ae,sn),Q.copy(vt))},reset:function(){N=!1,$=null,Q.set(-1,0,0,0)}}}function i(){let N=!1,vt=!1,$=null,Q=null,Rt=null;return{setReversed:function(wt){if(vt!==wt){let ae=t.get("EXT_clip_control");vt?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT);let sn=Rt;Rt=null,this.setClear(sn)}vt=wt},getReversed:function(){return vt},setTest:function(wt){wt?Et(n.DEPTH_TEST):Jt(n.DEPTH_TEST)},setMask:function(wt){$!==wt&&!N&&(n.depthMask(wt),$=wt)},setFunc:function(wt){if(vt&&(wt=xE[wt]),Q!==wt){switch(wt){case Eu:n.depthFunc(n.NEVER);break;case bu:n.depthFunc(n.ALWAYS);break;case wu:n.depthFunc(n.LESS);break;case wo:n.depthFunc(n.LEQUAL);break;case Su:n.depthFunc(n.EQUAL);break;case Tu:n.depthFunc(n.GEQUAL);break;case Ru:n.depthFunc(n.GREATER);break;case Au:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=wt}},setLocked:function(wt){N=wt},setClear:function(wt){Rt!==wt&&(vt&&(wt=1-wt),n.clearDepth(wt),Rt=wt)},reset:function(){N=!1,$=null,Q=null,Rt=null,vt=!1}}}function s(){let N=!1,vt=null,$=null,Q=null,Rt=null,wt=null,ae=null,sn=null,bn=null;return{setTest:function(He){N||(He?Et(n.STENCIL_TEST):Jt(n.STENCIL_TEST))},setMask:function(He){vt!==He&&!N&&(n.stencilMask(He),vt=He)},setFunc:function(He,pi,es){($!==He||Q!==pi||Rt!==es)&&(n.stencilFunc(He,pi,es),$=He,Q=pi,Rt=es)},setOp:function(He,pi,es){(wt!==He||ae!==pi||sn!==es)&&(n.stencilOp(He,pi,es),wt=He,ae=pi,sn=es)},setLocked:function(He){N=He},setClear:function(He){bn!==He&&(n.clearStencil(He),bn=He)},reset:function(){N=!1,vt=null,$=null,Q=null,Rt=null,wt=null,ae=null,sn=null,bn=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},d={},f=new WeakMap,p=[],g=null,v=!1,x=null,m=null,_=null,E=null,M=null,D=null,A=null,L=new yt(0,0,0),I=0,w=!1,b=null,U=null,B=null,O=null,W=null,tt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,ot=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=ot>=1):X.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=ot>=2);let _t=null,At={},Vt=n.getParameter(n.SCISSOR_BOX),me=n.getParameter(n.VIEWPORT),Be=new Oe().fromArray(Vt),J=new Oe().fromArray(me);function at(N,vt,$,Q){let Rt=new Uint8Array(4),wt=n.createTexture();n.bindTexture(N,wt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ae=0;ae<$;ae++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(vt,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,Rt):n.texImage2D(vt+ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Rt);return wt}let zt={};zt[n.TEXTURE_2D]=at(n.TEXTURE_2D,n.TEXTURE_2D,1),zt[n.TEXTURE_CUBE_MAP]=at(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),zt[n.TEXTURE_2D_ARRAY]=at(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),zt[n.TEXTURE_3D]=at(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Et(n.DEPTH_TEST),o.setFunc(wo),Me(!1),_e(s0),Et(n.CULL_FACE),z(ki);function Et(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function Jt(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function re(N,vt){return d[N]!==vt?(n.bindFramebuffer(N,vt),d[N]=vt,N===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=vt),N===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=vt),!0):!1}function ge(N,vt){let $=p,Q=!1;if(N){$=f.get(vt),$===void 0&&($=[],f.set(vt,$));let Rt=N.textures;if($.length!==Rt.length||$[0]!==n.COLOR_ATTACHMENT0){for(let wt=0,ae=Rt.length;wt<ae;wt++)$[wt]=n.COLOR_ATTACHMENT0+wt;$.length=Rt.length,Q=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,Q=!0);Q&&n.drawBuffers($)}function Qe(N){return g!==N?(n.useProgram(N),g=N,!0):!1}let we={[Sr]:n.FUNC_ADD,[F1]:n.FUNC_SUBTRACT,[O1]:n.FUNC_REVERSE_SUBTRACT};we[B1]=n.MIN,we[G1]=n.MAX;let ln={[V1]:n.ZERO,[W1]:n.ONE,[$1]:n.SRC_COLOR,[Mu]:n.SRC_ALPHA,[J1]:n.SRC_ALPHA_SATURATE,[Z1]:n.DST_COLOR,[q1]:n.DST_ALPHA,[X1]:n.ONE_MINUS_SRC_COLOR,[_u]:n.ONE_MINUS_SRC_ALPHA,[K1]:n.ONE_MINUS_DST_COLOR,[Y1]:n.ONE_MINUS_DST_ALPHA,[j1]:n.CONSTANT_COLOR,[Q1]:n.ONE_MINUS_CONSTANT_COLOR,[ty]:n.CONSTANT_ALPHA,[ey]:n.ONE_MINUS_CONSTANT_ALPHA};function z(N,vt,$,Q,Rt,wt,ae,sn,bn,He){if(N===ki){v===!0&&(Jt(n.BLEND),v=!1);return}if(v===!1&&(Et(n.BLEND),v=!0),N!==z1){if(N!==x||He!==w){if((m!==Sr||M!==Sr)&&(n.blendEquation(n.FUNC_ADD),m=Sr,M=Sr),He)switch(N){case Hi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fe:n.blendFunc(n.ONE,n.ONE);break;case r0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case o0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Hi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fe:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case r0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case o0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}_=null,E=null,D=null,A=null,L.set(0,0,0),I=0,x=N,w=He}return}Rt=Rt||vt,wt=wt||$,ae=ae||Q,(vt!==m||Rt!==M)&&(n.blendEquationSeparate(we[vt],we[Rt]),m=vt,M=Rt),($!==_||Q!==E||wt!==D||ae!==A)&&(n.blendFuncSeparate(ln[$],ln[Q],ln[wt],ln[ae]),_=$,E=Q,D=wt,A=ae),(sn.equals(L)===!1||bn!==I)&&(n.blendColor(sn.r,sn.g,sn.b,bn),L.copy(sn),I=bn),x=N,w=!1}function ei(N,vt){N.side===Ge?Jt(n.CULL_FACE):Et(n.CULL_FACE);let $=N.side===Tn;vt&&($=!$),Me($),N.blending===Hi&&N.transparent===!1?z(ki):z(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let Q=N.stencilWrite;a.setTest(Q),Q&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),qe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Et(n.SAMPLE_ALPHA_TO_COVERAGE):Jt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Me(N){b!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),b=N)}function _e(N){N!==k1?(Et(n.CULL_FACE),N!==U&&(N===s0?n.cullFace(n.BACK):N===H1?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Jt(n.CULL_FACE),U=N}function qt(N){N!==B&&(q&&n.lineWidth(N),B=N)}function qe(N,vt,$){N?(Et(n.POLYGON_OFFSET_FILL),(O!==vt||W!==$)&&(n.polygonOffset(vt,$),O=vt,W=$)):Jt(n.POLYGON_OFFSET_FILL)}function Xt(N){N?Et(n.SCISSOR_TEST):Jt(n.SCISSOR_TEST)}function P(N){N===void 0&&(N=n.TEXTURE0+tt-1),_t!==N&&(n.activeTexture(N),_t=N)}function S(N,vt,$){$===void 0&&(_t===null?$=n.TEXTURE0+tt-1:$=_t);let Q=At[$];Q===void 0&&(Q={type:void 0,texture:void 0},At[$]=Q),(Q.type!==N||Q.texture!==vt)&&(_t!==$&&(n.activeTexture($),_t=$),n.bindTexture(N,vt||zt[N]),Q.type=N,Q.texture=vt)}function F(){let N=At[_t];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ft(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ct(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Kt(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Qt(N){Be.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Be.copy(N))}function It(N){J.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),J.copy(N))}function Ee(N,vt){let $=c.get(vt);$===void 0&&($=new WeakMap,c.set(vt,$));let Q=$.get(N);Q===void 0&&(Q=n.getUniformBlockIndex(vt,N.name),$.set(N,Q))}function ue(N,vt){let Q=c.get(vt).get(N);l.get(vt)!==Q&&(n.uniformBlockBinding(vt,Q,N.__bindingPointIndex),l.set(vt,Q))}function $e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},_t=null,At={},d={},f=new WeakMap,p=[],g=null,v=!1,x=null,m=null,_=null,E=null,M=null,D=null,A=null,L=new yt(0,0,0),I=0,w=!1,b=null,U=null,B=null,O=null,W=null,Be.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Et,disable:Jt,bindFramebuffer:re,drawBuffers:ge,useProgram:Qe,setBlending:z,setMaterial:ei,setFlipSided:Me,setCullFace:_e,setLineWidth:qt,setPolygonOffset:qe,setScissorTest:Xt,activeTexture:P,bindTexture:S,unbindTexture:F,compressedTexImage2D:j,compressedTexImage3D:et,texImage2D:Pt,texImage3D:Kt,updateUBOMapping:Ee,uniformBlockBinding:ue,texStorage2D:Se,texStorage3D:st,texSubImage2D:K,texSubImage3D:Ft,compressedTexSubImage2D:bt,compressedTexSubImage3D:Ct,scissor:Qt,viewport:It,reset:$e}}function nm(n,t,e,i){let s=vE(i);switch(e){case Mm:return n*t;case Em:return n*t;case bm:return n*t*2;case tf:return n*t/s.components*s.byteLength;case ef:return n*t/s.components*s.byteLength;case wm:return n*t*2/s.components*s.byteLength;case nf:return n*t*2/s.components*s.byteLength;case _m:return n*t*3/s.components*s.byteLength;case Mi:return n*t*4/s.components*s.byteLength;case sf:return n*t*4/s.components*s.byteLength;case ic:case sc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case rc:case oc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Du:case Nu:return Math.max(n,16)*Math.max(t,8)/4;case Lu:case Uu:return Math.max(n,8)*Math.max(t,8)/2;case ku:case Hu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case zu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Fu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ou:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Bu:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Gu:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Vu:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Wu:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case $u:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Xu:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case qu:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Yu:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Zu:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ku:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ju:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ju:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ac:case Qu:case td:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Sm:case ed:return Math.ceil(n/4)*Math.ceil(t/4)*8;case nd:case id:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vE(n){switch(n){case ps:case xm:return{byteLength:1,components:1};case Oa:case ym:case wi:return{byteLength:2,components:1};case jd:case Qd:return{byteLength:2,components:4};case Cr:case Jd:case Ni:return{byteLength:4,components:1};case vm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function ME(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,S){return p?new OffscreenCanvas(P,S):hc("canvas")}function v(P,S,F){let j=1,et=Xt(P);if((et.width>F||et.height>F)&&(j=F/Math.max(et.width,et.height)),j<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let K=Math.floor(j*et.width),Ft=Math.floor(j*et.height);d===void 0&&(d=g(K,Ft));let bt=S?g(K,Ft):d;return bt.width=K,bt.height=Ft,bt.getContext("2d").drawImage(P,0,0,K,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+K+"x"+Ft+")."),bt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),P;return P}function x(P){return P.generateMipmaps}function m(P){n.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(P,S,F,j,et=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let K=S;if(S===n.RED&&(F===n.FLOAT&&(K=n.R32F),F===n.HALF_FLOAT&&(K=n.R16F),F===n.UNSIGNED_BYTE&&(K=n.R8)),S===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.R8UI),F===n.UNSIGNED_SHORT&&(K=n.R16UI),F===n.UNSIGNED_INT&&(K=n.R32UI),F===n.BYTE&&(K=n.R8I),F===n.SHORT&&(K=n.R16I),F===n.INT&&(K=n.R32I)),S===n.RG&&(F===n.FLOAT&&(K=n.RG32F),F===n.HALF_FLOAT&&(K=n.RG16F),F===n.UNSIGNED_BYTE&&(K=n.RG8)),S===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.RG8UI),F===n.UNSIGNED_SHORT&&(K=n.RG16UI),F===n.UNSIGNED_INT&&(K=n.RG32UI),F===n.BYTE&&(K=n.RG8I),F===n.SHORT&&(K=n.RG16I),F===n.INT&&(K=n.RG32I)),S===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.RGB8UI),F===n.UNSIGNED_SHORT&&(K=n.RGB16UI),F===n.UNSIGNED_INT&&(K=n.RGB32UI),F===n.BYTE&&(K=n.RGB8I),F===n.SHORT&&(K=n.RGB16I),F===n.INT&&(K=n.RGB32I)),S===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),F===n.UNSIGNED_INT&&(K=n.RGBA32UI),F===n.BYTE&&(K=n.RGBA8I),F===n.SHORT&&(K=n.RGBA16I),F===n.INT&&(K=n.RGBA32I)),S===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),S===n.RGBA){let Ft=et?Uc:xe.getTransfer(j);F===n.FLOAT&&(K=n.RGBA32F),F===n.HALF_FLOAT&&(K=n.RGBA16F),F===n.UNSIGNED_BYTE&&(K=Ft===Ne?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function M(P,S){let F;return P?S===null||S===Cr||S===Ro?F=n.DEPTH24_STENCIL8:S===Ni?F=n.DEPTH32F_STENCIL8:S===Oa&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Cr||S===Ro?F=n.DEPTH_COMPONENT24:S===Ni?F=n.DEPTH_COMPONENT32F:S===Oa&&(F=n.DEPTH_COMPONENT16),F}function D(P,S){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==qn&&P.minFilter!==Ui?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function A(P){let S=P.target;S.removeEventListener("dispose",A),I(S),S.isVideoTexture&&u.delete(S)}function L(P){let S=P.target;S.removeEventListener("dispose",L),b(S)}function I(P){let S=i.get(P);if(S.__webglInit===void 0)return;let F=P.source,j=f.get(F);if(j){let et=j[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&w(P),Object.keys(j).length===0&&f.delete(F)}i.remove(P)}function w(P){let S=i.get(P);n.deleteTexture(S.__webglTexture);let F=P.source,j=f.get(F);delete j[S.__cacheKey],o.memory.textures--}function b(P){let S=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let et=0;et<S.__webglFramebuffer[j].length;et++)n.deleteFramebuffer(S.__webglFramebuffer[j][et]);else n.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)n.deleteFramebuffer(S.__webglFramebuffer[j]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let F=P.textures;for(let j=0,et=F.length;j<et;j++){let K=i.get(F[j]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(F[j])}i.remove(P)}let U=0;function B(){U=0}function O(){let P=U;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),U+=1,P}function W(P){let S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function tt(P,S){let F=i.get(P);if(P.isVideoTexture&&qt(P),P.isRenderTargetTexture===!1&&P.version>0&&F.__version!==P.version){let j=P.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(F,P,S);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+S)}function q(P,S){let F=i.get(P);if(P.version>0&&F.__version!==P.version){J(F,P,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+S)}function ot(P,S){let F=i.get(P);if(P.version>0&&F.__version!==P.version){J(F,P,S);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+S)}function X(P,S){let F=i.get(P);if(P.version>0&&F.__version!==P.version){at(F,P,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+S)}let _t={[fs]:n.REPEAT,[Rr]:n.CLAMP_TO_EDGE,[Iu]:n.MIRRORED_REPEAT},At={[qn]:n.NEAREST,[ry]:n.NEAREST_MIPMAP_NEAREST,[Al]:n.NEAREST_MIPMAP_LINEAR,[Ui]:n.LINEAR,[Oh]:n.LINEAR_MIPMAP_NEAREST,[Ar]:n.LINEAR_MIPMAP_LINEAR},Vt={[cy]:n.NEVER,[my]:n.ALWAYS,[hy]:n.LESS,[Rm]:n.LEQUAL,[uy]:n.EQUAL,[py]:n.GEQUAL,[dy]:n.GREATER,[fy]:n.NOTEQUAL};function me(P,S){if(S.type===Ni&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ui||S.magFilter===Oh||S.magFilter===Al||S.magFilter===Ar||S.minFilter===Ui||S.minFilter===Oh||S.minFilter===Al||S.minFilter===Ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,_t[S.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,_t[S.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,_t[S.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,At[S.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,At[S.minFilter]),S.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Vt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===qn||S.minFilter!==Al&&S.minFilter!==Ar||S.type===Ni&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Be(P,S){let F=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",A));let j=S.source,et=f.get(j);et===void 0&&(et={},f.set(j,et));let K=W(S);if(K!==P.__cacheKey){et[K]===void 0&&(et[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),et[K].usedTimes++;let Ft=et[P.__cacheKey];Ft!==void 0&&(et[P.__cacheKey].usedTimes--,Ft.usedTimes===0&&w(S)),P.__cacheKey=K,P.__webglTexture=et[K].texture}return F}function J(P,S,F){let j=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=n.TEXTURE_3D);let et=Be(P,S),K=S.source;e.bindTexture(j,P.__webglTexture,n.TEXTURE0+F);let Ft=i.get(K);if(K.version!==Ft.__version||et===!0){e.activeTexture(n.TEXTURE0+F);let bt=xe.getPrimaries(xe.workingColorSpace),Ct=S.colorSpace===Gs?null:xe.getPrimaries(S.colorSpace),Se=S.colorSpace===Gs||bt===Ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let st=v(S.image,!1,s.maxTextureSize);st=qe(S,st);let Pt=r.convert(S.format,S.colorSpace),Kt=r.convert(S.type),Qt=E(S.internalFormat,Pt,Kt,S.colorSpace,S.isVideoTexture);me(j,S);let It,Ee=S.mipmaps,ue=S.isVideoTexture!==!0,$e=Ft.__version===void 0||et===!0,N=K.dataReady,vt=D(S,st);if(S.isDepthTexture)Qt=M(S.format===Ao,S.type),$e&&(ue?e.texStorage2D(n.TEXTURE_2D,1,Qt,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,Qt,st.width,st.height,0,Pt,Kt,null));else if(S.isDataTexture)if(Ee.length>0){ue&&$e&&e.texStorage2D(n.TEXTURE_2D,vt,Qt,Ee[0].width,Ee[0].height);for(let $=0,Q=Ee.length;$<Q;$++)It=Ee[$],ue?N&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,It.width,It.height,Pt,Kt,It.data):e.texImage2D(n.TEXTURE_2D,$,Qt,It.width,It.height,0,Pt,Kt,It.data);S.generateMipmaps=!1}else ue?($e&&e.texStorage2D(n.TEXTURE_2D,vt,Qt,st.width,st.height),N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,st.width,st.height,Pt,Kt,st.data)):e.texImage2D(n.TEXTURE_2D,0,Qt,st.width,st.height,0,Pt,Kt,st.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ue&&$e&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Qt,Ee[0].width,Ee[0].height,st.depth);for(let $=0,Q=Ee.length;$<Q;$++)if(It=Ee[$],S.format!==Mi)if(Pt!==null)if(ue){if(N)if(S.layerUpdates.size>0){let Rt=nm(It.width,It.height,S.format,S.type);for(let wt of S.layerUpdates){let ae=It.data.subarray(wt*Rt/It.data.BYTES_PER_ELEMENT,(wt+1)*Rt/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,wt,It.width,It.height,1,Pt,ae)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,It.width,It.height,st.depth,Pt,It.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Qt,It.width,It.height,st.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,It.width,It.height,st.depth,Pt,Kt,It.data):e.texImage3D(n.TEXTURE_2D_ARRAY,$,Qt,It.width,It.height,st.depth,0,Pt,Kt,It.data)}else{ue&&$e&&e.texStorage2D(n.TEXTURE_2D,vt,Qt,Ee[0].width,Ee[0].height);for(let $=0,Q=Ee.length;$<Q;$++)It=Ee[$],S.format!==Mi?Pt!==null?ue?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,It.width,It.height,Pt,It.data):e.compressedTexImage2D(n.TEXTURE_2D,$,Qt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?N&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,It.width,It.height,Pt,Kt,It.data):e.texImage2D(n.TEXTURE_2D,$,Qt,It.width,It.height,0,Pt,Kt,It.data)}else if(S.isDataArrayTexture)if(ue){if($e&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Qt,st.width,st.height,st.depth),N)if(S.layerUpdates.size>0){let $=nm(st.width,st.height,S.format,S.type);for(let Q of S.layerUpdates){let Rt=st.data.subarray(Q*$/st.data.BYTES_PER_ELEMENT,(Q+1)*$/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,st.width,st.height,1,Pt,Kt,Rt)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Pt,Kt,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Qt,st.width,st.height,st.depth,0,Pt,Kt,st.data);else if(S.isData3DTexture)ue?($e&&e.texStorage3D(n.TEXTURE_3D,vt,Qt,st.width,st.height,st.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Pt,Kt,st.data)):e.texImage3D(n.TEXTURE_3D,0,Qt,st.width,st.height,st.depth,0,Pt,Kt,st.data);else if(S.isFramebufferTexture){if($e)if(ue)e.texStorage2D(n.TEXTURE_2D,vt,Qt,st.width,st.height);else{let $=st.width,Q=st.height;for(let Rt=0;Rt<vt;Rt++)e.texImage2D(n.TEXTURE_2D,Rt,Qt,$,Q,0,Pt,Kt,null),$>>=1,Q>>=1}}else if(Ee.length>0){if(ue&&$e){let $=Xt(Ee[0]);e.texStorage2D(n.TEXTURE_2D,vt,Qt,$.width,$.height)}for(let $=0,Q=Ee.length;$<Q;$++)It=Ee[$],ue?N&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,Pt,Kt,It):e.texImage2D(n.TEXTURE_2D,$,Qt,Pt,Kt,It);S.generateMipmaps=!1}else if(ue){if($e){let $=Xt(st);e.texStorage2D(n.TEXTURE_2D,vt,Qt,$.width,$.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Pt,Kt,st)}else e.texImage2D(n.TEXTURE_2D,0,Qt,Pt,Kt,st);x(S)&&m(j),Ft.__version=K.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function at(P,S,F){if(S.image.length!==6)return;let j=Be(P,S),et=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+F);let K=i.get(et);if(et.version!==K.__version||j===!0){e.activeTexture(n.TEXTURE0+F);let Ft=xe.getPrimaries(xe.workingColorSpace),bt=S.colorSpace===Gs?null:xe.getPrimaries(S.colorSpace),Ct=S.colorSpace===Gs||Ft===bt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let Se=S.isCompressedTexture||S.image[0].isCompressedTexture,st=S.image[0]&&S.image[0].isDataTexture,Pt=[];for(let Q=0;Q<6;Q++)!Se&&!st?Pt[Q]=v(S.image[Q],!0,s.maxCubemapSize):Pt[Q]=st?S.image[Q].image:S.image[Q],Pt[Q]=qe(S,Pt[Q]);let Kt=Pt[0],Qt=r.convert(S.format,S.colorSpace),It=r.convert(S.type),Ee=E(S.internalFormat,Qt,It,S.colorSpace),ue=S.isVideoTexture!==!0,$e=K.__version===void 0||j===!0,N=et.dataReady,vt=D(S,Kt);me(n.TEXTURE_CUBE_MAP,S);let $;if(Se){ue&&$e&&e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Ee,Kt.width,Kt.height);for(let Q=0;Q<6;Q++){$=Pt[Q].mipmaps;for(let Rt=0;Rt<$.length;Rt++){let wt=$[Rt];S.format!==Mi?Qt!==null?ue?N&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt,0,0,wt.width,wt.height,Qt,wt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt,Ee,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt,0,0,wt.width,wt.height,Qt,It,wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt,Ee,wt.width,wt.height,0,Qt,It,wt.data)}}}else{if($=S.mipmaps,ue&&$e){$.length>0&&vt++;let Q=Xt(Pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Ee,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(st){ue?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Pt[Q].width,Pt[Q].height,Qt,It,Pt[Q].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ee,Pt[Q].width,Pt[Q].height,0,Qt,It,Pt[Q].data);for(let Rt=0;Rt<$.length;Rt++){let ae=$[Rt].image[Q].image;ue?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt+1,0,0,ae.width,ae.height,Qt,It,ae.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt+1,Ee,ae.width,ae.height,0,Qt,It,ae.data)}}else{ue?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Qt,It,Pt[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ee,Qt,It,Pt[Q]);for(let Rt=0;Rt<$.length;Rt++){let wt=$[Rt];ue?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt+1,0,0,Qt,It,wt.image[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt+1,Ee,Qt,It,wt.image[Q])}}}x(S)&&m(n.TEXTURE_CUBE_MAP),K.__version=et.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function zt(P,S,F,j,et,K){let Ft=r.convert(F.format,F.colorSpace),bt=r.convert(F.type),Ct=E(F.internalFormat,Ft,bt,F.colorSpace),Se=i.get(S),st=i.get(F);if(st.__renderTarget=S,!Se.__hasExternalTextures){let Pt=Math.max(1,S.width>>K),Kt=Math.max(1,S.height>>K);et===n.TEXTURE_3D||et===n.TEXTURE_2D_ARRAY?e.texImage3D(et,K,Ct,Pt,Kt,S.depth,0,Ft,bt,null):e.texImage2D(et,K,Ct,Pt,Kt,0,Ft,bt,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),_e(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,et,st.__webglTexture,0,Me(S)):(et===n.TEXTURE_2D||et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,et,st.__webglTexture,K),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Et(P,S,F){if(n.bindRenderbuffer(n.RENDERBUFFER,P),S.depthBuffer){let j=S.depthTexture,et=j&&j.isDepthTexture?j.type:null,K=M(S.stencilBuffer,et),Ft=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=Me(S);_e(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,bt,K,S.width,S.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,bt,K,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,K,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ft,n.RENDERBUFFER,P)}else{let j=S.textures;for(let et=0;et<j.length;et++){let K=j[et],Ft=r.convert(K.format,K.colorSpace),bt=r.convert(K.type),Ct=E(K.internalFormat,Ft,bt,K.colorSpace),Se=Me(S);F&&_e(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,Ct,S.width,S.height):_e(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,Ct,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Ct,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Jt(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=i.get(S.depthTexture);j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),tt(S.depthTexture,0);let et=j.__webglTexture,K=Me(S);if(S.depthTexture.format===_o)_e(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0);else if(S.depthTexture.format===Ao)_e(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function re(P){let S=i.get(P),F=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){let j=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){let et=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",et)};j.addEventListener("dispose",et),S.__depthDisposeCallback=et}S.__boundDepthTexture=j}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Jt(S.__webglFramebuffer,P)}else if(F){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=n.createRenderbuffer(),Et(S.__webglDepthbuffer[j],P,!1);else{let et=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,K)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Et(S.__webglDepthbuffer,P,!1);else{let j=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,et),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,et)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(P,S,F){let j=i.get(P);S!==void 0&&zt(j.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&re(P)}function Qe(P){let S=P.texture,F=i.get(P),j=i.get(S);P.addEventListener("dispose",L);let et=P.textures,K=P.isWebGLCubeRenderTarget===!0,Ft=et.length>1;if(Ft||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=S.version,o.memory.textures++),K){F.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[bt]=[];for(let Ct=0;Ct<S.mipmaps.length;Ct++)F.__webglFramebuffer[bt][Ct]=n.createFramebuffer()}else F.__webglFramebuffer[bt]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let bt=0;bt<S.mipmaps.length;bt++)F.__webglFramebuffer[bt]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Ft)for(let bt=0,Ct=et.length;bt<Ct;bt++){let Se=i.get(et[bt]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&_e(P)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let bt=0;bt<et.length;bt++){let Ct=et[bt];F.__webglColorRenderbuffer[bt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[bt]);let Se=r.convert(Ct.format,Ct.colorSpace),st=r.convert(Ct.type),Pt=E(Ct.internalFormat,Se,st,Ct.colorSpace,P.isXRRenderTarget===!0),Kt=Me(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Kt,Pt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,F.__webglColorRenderbuffer[bt])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Et(F.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),me(n.TEXTURE_CUBE_MAP,S);for(let bt=0;bt<6;bt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ct=0;Ct<S.mipmaps.length;Ct++)zt(F.__webglFramebuffer[bt][Ct],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ct);else zt(F.__webglFramebuffer[bt],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);x(S)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let bt=0,Ct=et.length;bt<Ct;bt++){let Se=et[bt],st=i.get(Se);e.bindTexture(n.TEXTURE_2D,st.__webglTexture),me(n.TEXTURE_2D,Se),zt(F.__webglFramebuffer,P,Se,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,0),x(Se)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let bt=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(bt=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(bt,j.__webglTexture),me(bt,S),S.mipmaps&&S.mipmaps.length>0)for(let Ct=0;Ct<S.mipmaps.length;Ct++)zt(F.__webglFramebuffer[Ct],P,S,n.COLOR_ATTACHMENT0,bt,Ct);else zt(F.__webglFramebuffer,P,S,n.COLOR_ATTACHMENT0,bt,0);x(S)&&m(bt),e.unbindTexture()}P.depthBuffer&&re(P)}function we(P){let S=P.textures;for(let F=0,j=S.length;F<j;F++){let et=S[F];if(x(et)){let K=_(P),Ft=i.get(et).__webglTexture;e.bindTexture(K,Ft),m(K),e.unbindTexture()}}}let ln=[],z=[];function ei(P){if(P.samples>0){if(_e(P)===!1){let S=P.textures,F=P.width,j=P.height,et=n.COLOR_BUFFER_BIT,K=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ft=i.get(P),bt=S.length>1;if(bt)for(let Ct=0;Ct<S.length;Ct++)e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Ct=0;Ct<S.length;Ct++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(et|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(et|=n.STENCIL_BUFFER_BIT)),bt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ft.__webglColorRenderbuffer[Ct]);let Se=i.get(S[Ct]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Se,0)}n.blitFramebuffer(0,0,F,j,0,0,F,j,et,n.NEAREST),l===!0&&(ln.length=0,z.length=0,ln.push(n.COLOR_ATTACHMENT0+Ct),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ln.push(K),z.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ln))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),bt)for(let Ct=0;Ct<S.length;Ct++){e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.RENDERBUFFER,Ft.__webglColorRenderbuffer[Ct]);let Se=i.get(S[Ct]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.TEXTURE_2D,Se,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let S=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Me(P){return Math.min(s.maxSamples,P.samples)}function _e(P){let S=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function qt(P){let S=o.render.frame;u.get(P)!==S&&(u.set(P,S),P.update())}function qe(P,S){let F=P.colorSpace,j=P.format,et=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||F!==Ho&&F!==Gs&&(xe.getTransfer(F)===Ne?(j!==Mi||et!==ps)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}function Xt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.setTexture2D=tt,this.setTexture2DArray=q,this.setTexture3D=ot,this.setTextureCube=X,this.rebindTextures=ge,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=ei,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=zt,this.useMultisampledRTT=_e}function _E(n,t){function e(i,s=Gs){let r,o=xe.getTransfer(s);if(i===ps)return n.UNSIGNED_BYTE;if(i===jd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Qd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===vm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===xm)return n.BYTE;if(i===ym)return n.SHORT;if(i===Oa)return n.UNSIGNED_SHORT;if(i===Jd)return n.INT;if(i===Cr)return n.UNSIGNED_INT;if(i===Ni)return n.FLOAT;if(i===wi)return n.HALF_FLOAT;if(i===Mm)return n.ALPHA;if(i===_m)return n.RGB;if(i===Mi)return n.RGBA;if(i===Em)return n.LUMINANCE;if(i===bm)return n.LUMINANCE_ALPHA;if(i===_o)return n.DEPTH_COMPONENT;if(i===Ao)return n.DEPTH_STENCIL;if(i===tf)return n.RED;if(i===ef)return n.RED_INTEGER;if(i===wm)return n.RG;if(i===nf)return n.RG_INTEGER;if(i===sf)return n.RGBA_INTEGER;if(i===ic||i===sc||i===rc||i===oc)if(o===Ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ic)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ic)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Lu||i===Du||i===Uu||i===Nu)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Lu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Du)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Uu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ku||i===Hu||i===zu)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ku||i===Hu)return o===Ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===zu)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Fu||i===Ou||i===Bu||i===Gu||i===Vu||i===Wu||i===$u||i===Xu||i===qu||i===Yu||i===Zu||i===Ku||i===Ju||i===ju)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Fu)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ou)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bu)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gu)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vu)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wu)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$u)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xu)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qu)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yu)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zu)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ku)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ju)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ju)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ac||i===Qu||i===td)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ac)return o===Ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===td)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sm||i===ed||i===nd||i===id)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ac)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ed)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nd)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===id)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ro?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var vd=class extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ft=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},EE={type:"move"},Ha=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let x=e.getJointPose(v,i),m=this._getHandJoint(c,v);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(EE)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ft;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},bE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wE=`
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

}`,Md=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Fn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new rn({vertexShader:bE,fragmentShader:wE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new lt(new On(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_d=class extends Xs{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,g=null,v=new Md,x=e.getContextAttributes(),m=null,_=null,E=[],M=[],D=new nt,A=null,L=new cn;L.viewport=new Oe;let I=new cn;I.viewport=new Oe;let w=[L,I],b=new vd,U=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let at=E[J];return at===void 0&&(at=new Ha,E[J]=at),at.getTargetRaySpace()},this.getControllerGrip=function(J){let at=E[J];return at===void 0&&(at=new Ha,E[J]=at),at.getGripSpace()},this.getHand=function(J){let at=E[J];return at===void 0&&(at=new Ha,E[J]=at),at.getHandSpace()};function O(J){let at=M.indexOf(J.inputSource);if(at===-1)return;let zt=E[at];zt!==void 0&&(zt.update(J.inputSource,J.frame,c||o),zt.dispatchEvent({type:J.type,data:J.inputSource}))}function W(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",tt);for(let J=0;J<E.length;J++){let at=M[J];at!==null&&(M[J]=null,E[J].disconnect(at))}U=null,B=null,v.reset(),t.setRenderTarget(m),p=null,f=null,d=null,s=null,_=null,Be.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",W),s.addEventListener("inputsourceschange",tt),x.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){let at={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Un(p.framebufferWidth,p.framebufferHeight,{format:Mi,type:ps,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let at=null,zt=null,Et=null;x.depth&&(Et=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=x.stencil?Ao:_o,zt=x.stencil?Ro:Cr);let Jt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(Jt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Un(f.textureWidth,f.textureHeight,{format:Mi,type:ps,depthTexture:new vc(f.textureWidth,f.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Be.setContext(s),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function tt(J){for(let at=0;at<J.removed.length;at++){let zt=J.removed[at],Et=M.indexOf(zt);Et>=0&&(M[Et]=null,E[Et].disconnect(zt))}for(let at=0;at<J.added.length;at++){let zt=J.added[at],Et=M.indexOf(zt);if(Et===-1){for(let re=0;re<E.length;re++)if(re>=M.length){M.push(zt),Et=re;break}else if(M[re]===null){M[re]=zt,Et=re;break}if(Et===-1)break}let Jt=E[Et];Jt&&Jt.connect(zt)}}let q=new T,ot=new T;function X(J,at,zt){q.setFromMatrixPosition(at.matrixWorld),ot.setFromMatrixPosition(zt.matrixWorld);let Et=q.distanceTo(ot),Jt=at.projectionMatrix.elements,re=zt.projectionMatrix.elements,ge=Jt[14]/(Jt[10]-1),Qe=Jt[14]/(Jt[10]+1),we=(Jt[9]+1)/Jt[5],ln=(Jt[9]-1)/Jt[5],z=(Jt[8]-1)/Jt[0],ei=(re[8]+1)/re[0],Me=ge*z,_e=ge*ei,qt=Et/(-z+ei),qe=qt*-z;if(at.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(qe),J.translateZ(qt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Jt[10]===-1)J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{let Xt=ge+qt,P=Qe+qt,S=Me-qe,F=_e+(Et-qe),j=we*Qe/P*Xt,et=ln*Qe/P*Xt;J.projectionMatrix.makePerspective(S,F,j,et,Xt,P),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function _t(J,at){at===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(at.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let at=J.near,zt=J.far;v.texture!==null&&(v.depthNear>0&&(at=v.depthNear),v.depthFar>0&&(zt=v.depthFar)),b.near=I.near=L.near=at,b.far=I.far=L.far=zt,(U!==b.near||B!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),U=b.near,B=b.far),L.layers.mask=J.layers.mask|2,I.layers.mask=J.layers.mask|4,b.layers.mask=L.layers.mask|I.layers.mask;let Et=J.parent,Jt=b.cameras;_t(b,Et);for(let re=0;re<Jt.length;re++)_t(Jt[re],Et);Jt.length===2?X(b,L,I):b.projectionMatrix.copy(L.projectionMatrix),At(J,b,Et)};function At(J,at,zt){zt===null?J.matrix.copy(at.matrixWorld):(J.matrix.copy(zt.matrixWorld),J.matrix.invert(),J.matrix.multiply(at.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Co*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let Vt=null;function me(J,at){if(u=at.getViewerPose(c||o),g=at,u!==null){let zt=u.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let Et=!1;zt.length!==b.cameras.length&&(b.cameras.length=0,Et=!0);for(let re=0;re<zt.length;re++){let ge=zt[re],Qe=null;if(p!==null)Qe=p.getViewport(ge);else{let ln=d.getViewSubImage(f,ge);Qe=ln.viewport,re===0&&(t.setRenderTargetTextures(_,ln.colorTexture,f.ignoreDepthValues?void 0:ln.depthStencilTexture),t.setRenderTarget(_))}let we=w[re];we===void 0&&(we=new cn,we.layers.enable(re),we.viewport=new Oe,w[re]=we),we.matrix.fromArray(ge.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(ge.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),re===0&&(b.matrix.copy(we.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Et===!0&&b.cameras.push(we)}let Jt=s.enabledFeatures;if(Jt&&Jt.includes("depth-sensing")){let re=d.getDepthInformation(zt[0]);re&&re.isValid&&re.texture&&v.init(t,re,s.renderState)}}for(let zt=0;zt<E.length;zt++){let Et=M[zt],Jt=E[zt];Et!==null&&Jt!==void 0&&Jt.update(Et,at,c||o)}Vt&&Vt(J,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),g=null}let Be=new Im;Be.setAnimationLoop(me),this.setAnimationLoop=function(J){Vt=J},this.dispose=function(){}}},br=new _n,SE=new ve;function TE(n,t){function e(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function i(x,m){m.color.getRGB(x.fogColor.value,Pm(n)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function s(x,m,_,E,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(x,m):m.isMeshToonMaterial?(r(x,m),d(x,m)):m.isMeshPhongMaterial?(r(x,m),u(x,m)):m.isMeshStandardMaterial?(r(x,m),f(x,m),m.isMeshPhysicalMaterial&&p(x,m,M)):m.isMeshMatcapMaterial?(r(x,m),g(x,m)):m.isMeshDepthMaterial?r(x,m):m.isMeshDistanceMaterial?(r(x,m),v(x,m)):m.isMeshNormalMaterial?r(x,m):m.isLineBasicMaterial?(o(x,m),m.isLineDashedMaterial&&a(x,m)):m.isPointsMaterial?l(x,m,_,E):m.isSpriteMaterial?c(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,e(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===Tn&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,e(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===Tn&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,e(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,e(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);let _=t.get(m),E=_.envMap,M=_.envMapRotation;E&&(x.envMap.value=E,br.copy(M),br.x*=-1,br.y*=-1,br.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),x.envMapRotation.value.setFromMatrix4(SE.makeRotationFromEuler(br)),x.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,x.aoMapTransform))}function o(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform))}function a(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function l(x,m,_,E){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*_,x.scale.value=E*.5,m.map&&(x.map.value=m.map,e(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function c(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function u(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function d(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function f(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function p(x,m,_){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Tn&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=_.texture,x.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,m){m.matcap&&(x.matcap.value=m.matcap)}function v(x,m){let _=t.get(m).light;x.referencePosition.value.setFromMatrixPosition(_.matrixWorld),x.nearDistance.value=_.shadow.camera.near,x.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function RE(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,E){let M=E.program;i.uniformBlockBinding(_,M)}function c(_,E){let M=s[_.id];M===void 0&&(g(_),M=u(_),s[_.id]=M,_.addEventListener("dispose",x));let D=E.program;i.updateUBOMapping(_,D);let A=t.render.frame;r[_.id]!==A&&(f(_),r[_.id]=A)}function u(_){let E=d();_.__bindingPointIndex=E;let M=n.createBuffer(),D=_.__size,A=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,D,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,M),M}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let E=s[_.id],M=_.uniforms,D=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let A=0,L=M.length;A<L;A++){let I=Array.isArray(M[A])?M[A]:[M[A]];for(let w=0,b=I.length;w<b;w++){let U=I[w];if(p(U,A,w,D)===!0){let B=U.__offset,O=Array.isArray(U.value)?U.value:[U.value],W=0;for(let tt=0;tt<O.length;tt++){let q=O[tt],ot=v(q);typeof q=="number"||typeof q=="boolean"?(U.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,B+W,U.__data)):q.isMatrix3?(U.__data[0]=q.elements[0],U.__data[1]=q.elements[1],U.__data[2]=q.elements[2],U.__data[3]=0,U.__data[4]=q.elements[3],U.__data[5]=q.elements[4],U.__data[6]=q.elements[5],U.__data[7]=0,U.__data[8]=q.elements[6],U.__data[9]=q.elements[7],U.__data[10]=q.elements[8],U.__data[11]=0):(q.toArray(U.__data,W),W+=ot.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,E,M,D){let A=_.value,L=E+"_"+M;if(D[L]===void 0)return typeof A=="number"||typeof A=="boolean"?D[L]=A:D[L]=A.clone(),!0;{let I=D[L];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return D[L]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(_){let E=_.uniforms,M=0,D=16;for(let L=0,I=E.length;L<I;L++){let w=Array.isArray(E[L])?E[L]:[E[L]];for(let b=0,U=w.length;b<U;b++){let B=w[b],O=Array.isArray(B.value)?B.value:[B.value];for(let W=0,tt=O.length;W<tt;W++){let q=O[W],ot=v(q),X=M%D,_t=X%ot.boundary,At=X+_t;M+=_t,At!==0&&D-At<ot.storage&&(M+=D-At),B.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=ot.storage}}}let A=M%D;return A>0&&(M+=D-A),_.__size=M,_.__cache={},this}function v(_){let E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),E}function x(_){let E=_.target;E.removeEventListener("dispose",x);let M=o.indexOf(E.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Do=class{constructor(t={}){let{canvas:e=Ly(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),v=new Int32Array(4),x=null,m=null,_=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ye,this.toneMapping=Ws,this.toneMappingExposure=1;let M=this,D=!1,A=0,L=0,I=null,w=-1,b=null,U=new Oe,B=new Oe,O=null,W=new yt(0),tt=0,q=e.width,ot=e.height,X=1,_t=null,At=null,Vt=new Oe(0,0,q,ot),me=new Oe(0,0,q,ot),Be=!1,J=new Ba,at=!1,zt=!1,Et=new ve,Jt=new ve,re=new T,ge=new Oe,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},we=!1;function ln(){return I===null?X:1}let z=i;function ei(R,k){return e.getContext(R,k)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wd}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",wt,!1),z===null){let k="webgl2";if(z=ei(k,R),z===null)throw ei(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Me,_e,qt,qe,Xt,P,S,F,j,et,K,Ft,bt,Ct,Se,st,Pt,Kt,Qt,It,Ee,ue,$e,N;function vt(){Me=new V_(z),Me.init(),ue=new _E(z,Me),_e=new H_(z,Me,t,ue),qt=new yE(z,Me),_e.reverseDepthBuffer&&f&&qt.buffers.depth.setReversed(!0),qe=new X_(z),Xt=new rE,P=new ME(z,Me,qt,Xt,_e,ue,qe),S=new F_(M),F=new G_(M),j=new Qy(z),$e=new N_(z,j),et=new W_(z,j,qe,$e),K=new Y_(z,et,j,qe),Qt=new q_(z,_e,P),st=new z_(Xt),Ft=new sE(M,S,F,Me,_e,$e,st),bt=new TE(M,Xt),Ct=new aE,Se=new fE(Me),Kt=new U_(M,S,F,qt,K,p,l),Pt=new gE(M,K,_e),N=new RE(z,qe,_e,qt),It=new k_(z,Me,qe),Ee=new $_(z,Me,qe),qe.programs=Ft.programs,M.capabilities=_e,M.extensions=Me,M.properties=Xt,M.renderLists=Ct,M.shadowMap=Pt,M.state=qt,M.info=qe}vt();let $=new _d(M,z);this.xr=$,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let R=Me.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Me.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(R){R!==void 0&&(X=R,this.setSize(q,ot,!1))},this.getSize=function(R){return R.set(q,ot)},this.setSize=function(R,k,G=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=R,ot=k,e.width=Math.floor(R*X),e.height=Math.floor(k*X),G===!0&&(e.style.width=R+"px",e.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(q*X,ot*X).floor()},this.setDrawingBufferSize=function(R,k,G){q=R,ot=k,X=G,e.width=Math.floor(R*G),e.height=Math.floor(k*G),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(U)},this.getViewport=function(R){return R.copy(Vt)},this.setViewport=function(R,k,G,V){R.isVector4?Vt.set(R.x,R.y,R.z,R.w):Vt.set(R,k,G,V),qt.viewport(U.copy(Vt).multiplyScalar(X).round())},this.getScissor=function(R){return R.copy(me)},this.setScissor=function(R,k,G,V){R.isVector4?me.set(R.x,R.y,R.z,R.w):me.set(R,k,G,V),qt.scissor(B.copy(me).multiplyScalar(X).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(R){qt.setScissorTest(Be=R)},this.setOpaqueSort=function(R){_t=R},this.setTransparentSort=function(R){At=R},this.getClearColor=function(R){return R.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor.apply(Kt,arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha.apply(Kt,arguments)},this.clear=function(R=!0,k=!0,G=!0){let V=0;if(R){let H=!1;if(I!==null){let rt=I.texture.format;H=rt===sf||rt===nf||rt===ef}if(H){let rt=I.texture.type,St=rt===ps||rt===Cr||rt===Oa||rt===Ro||rt===jd||rt===Qd,Ut=Kt.getClearColor(),Nt=Kt.getClearAlpha(),ee=Ut.r,le=Ut.g,kt=Ut.b;St?(g[0]=ee,g[1]=le,g[2]=kt,g[3]=Nt,z.clearBufferuiv(z.COLOR,0,g)):(v[0]=ee,v[1]=le,v[2]=kt,v[3]=Nt,z.clearBufferiv(z.COLOR,0,v))}else V|=z.COLOR_BUFFER_BIT}k&&(V|=z.DEPTH_BUFFER_BIT),G&&(V|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),Ct.dispose(),Se.dispose(),Xt.dispose(),S.dispose(),F.dispose(),K.dispose(),$e.dispose(),N.dispose(),Ft.dispose(),$.dispose(),$.removeEventListener("sessionstart",Kp),$.removeEventListener("sessionend",Jp),xr.stop()};function Q(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let R=qe.autoReset,k=Pt.enabled,G=Pt.autoUpdate,V=Pt.needsUpdate,H=Pt.type;vt(),qe.autoReset=R,Pt.enabled=k,Pt.autoUpdate=G,Pt.needsUpdate=V,Pt.type=H}function wt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ae(R){let k=R.target;k.removeEventListener("dispose",ae),sn(k)}function sn(R){bn(R),Xt.remove(R)}function bn(R){let k=Xt.get(R).programs;k!==void 0&&(k.forEach(function(G){Ft.releaseProgram(G)}),R.isShaderMaterial&&Ft.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,G,V,H,rt){k===null&&(k=Qe);let St=H.isMesh&&H.matrixWorld.determinant()<0,Ut=D1(R,k,G,V,H);qt.setMaterial(V,St);let Nt=G.index,ee=1;if(V.wireframe===!0){if(Nt=et.getWireframeAttribute(G),Nt===void 0)return;ee=2}let le=G.drawRange,kt=G.attributes.position,Te=le.start*ee,Xe=(le.start+le.count)*ee;rt!==null&&(Te=Math.max(Te,rt.start*ee),Xe=Math.min(Xe,(rt.start+rt.count)*ee)),Nt!==null?(Te=Math.max(Te,0),Xe=Math.min(Xe,Nt.count)):kt!=null&&(Te=Math.max(Te,0),Xe=Math.min(Xe,kt.count));let Ye=Xe-Te;if(Ye<0||Ye===1/0)return;$e.setup(H,V,Ut,G,Nt);let zn,De=It;if(Nt!==null&&(zn=j.get(Nt),De=Ee,De.setIndex(zn)),H.isMesh)V.wireframe===!0?(qt.setLineWidth(V.wireframeLinewidth*ln()),De.setMode(z.LINES)):De.setMode(z.TRIANGLES);else if(H.isLine){let Ot=V.linewidth;Ot===void 0&&(Ot=1),qt.setLineWidth(Ot*ln()),H.isLineSegments?De.setMode(z.LINES):H.isLineLoop?De.setMode(z.LINE_LOOP):De.setMode(z.LINE_STRIP)}else H.isPoints?De.setMode(z.POINTS):H.isSprite&&De.setMode(z.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)De.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))De.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Ot=H._multiDrawStarts,ns=H._multiDrawCounts,Ue=H._multiDrawCount,mi=Nt?j.get(Nt).bytesPerElement:1,Qr=Xt.get(V).currentProgram.getUniforms();for(let Wn=0;Wn<Ue;Wn++)Qr.setValue(z,"_gl_DrawID",Wn),De.render(Ot[Wn]/mi,ns[Wn])}else if(H.isInstancedMesh)De.renderInstances(Te,Ye,H.count);else if(G.isInstancedBufferGeometry){let Ot=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ns=Math.min(G.instanceCount,Ot);De.renderInstances(Te,Ye,ns)}else De.render(Te,Ye)};function He(R,k,G){R.transparent===!0&&R.side===Ge&&R.forceSinglePass===!1?(R.side=Tn,R.needsUpdate=!0,Rl(R,k,G),R.side=$s,R.needsUpdate=!0,Rl(R,k,G),R.side=Ge):Rl(R,k,G)}this.compile=function(R,k,G=null){G===null&&(G=R),m=Se.get(G),m.init(k),E.push(m),G.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),R!==G&&R.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();let V=new Set;return R.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let rt=H.material;if(rt)if(Array.isArray(rt))for(let St=0;St<rt.length;St++){let Ut=rt[St];He(Ut,G,H),V.add(Ut)}else He(rt,G,H),V.add(rt)}),E.pop(),m=null,V},this.compileAsync=function(R,k,G=null){let V=this.compile(R,k,G);return new Promise(H=>{function rt(){if(V.forEach(function(St){Xt.get(St).currentProgram.isReady()&&V.delete(St)}),V.size===0){H(R);return}setTimeout(rt,10)}Me.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let pi=null;function es(R){pi&&pi(R)}function Kp(){xr.stop()}function Jp(){xr.start()}let xr=new Im;xr.setAnimationLoop(es),typeof self<"u"&&xr.setContext(self),this.setAnimationLoop=function(R){pi=R,$.setAnimationLoop(R),R===null?xr.stop():xr.start()},$.addEventListener("sessionstart",Kp),$.addEventListener("sessionend",Jp),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(k),k=$.getCamera()),R.isScene===!0&&R.onBeforeRender(M,R,k,I),m=Se.get(R,E.length),m.init(k),E.push(m),Jt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),J.setFromProjectionMatrix(Jt),zt=this.localClippingEnabled,at=st.init(this.clippingPlanes,zt),x=Ct.get(R,_.length),x.init(),_.push(x),$.enabled===!0&&$.isPresenting===!0){let rt=M.xr.getDepthSensingMesh();rt!==null&&Fh(rt,k,-1/0,M.sortObjects)}Fh(R,k,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(_t,At),we=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,we&&Kt.addToRenderList(x,R),this.info.render.frame++,at===!0&&st.beginShadows();let G=m.state.shadowsArray;Pt.render(G,R,k),at===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=x.opaque,H=x.transmissive;if(m.setupLights(),k.isArrayCamera){let rt=k.cameras;if(H.length>0)for(let St=0,Ut=rt.length;St<Ut;St++){let Nt=rt[St];Qp(V,H,R,Nt)}we&&Kt.render(R);for(let St=0,Ut=rt.length;St<Ut;St++){let Nt=rt[St];jp(x,R,Nt,Nt.viewport)}}else H.length>0&&Qp(V,H,R,k),we&&Kt.render(R),jp(x,R,k);I!==null&&(P.updateMultisampleRenderTarget(I),P.updateRenderTargetMipmap(I)),R.isScene===!0&&R.onAfterRender(M,R,k),$e.resetDefaultState(),w=-1,b=null,E.pop(),E.length>0?(m=E[E.length-1],at===!0&&st.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?x=_[_.length-1]:x=null};function Fh(R,k,G,V){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)G=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){V&&ge.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Jt);let St=K.update(R),Ut=R.material;Ut.visible&&x.push(R,St,Ut,G,ge.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){let St=K.update(R),Ut=R.material;if(V&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ge.copy(R.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),ge.copy(St.boundingSphere.center)),ge.applyMatrix4(R.matrixWorld).applyMatrix4(Jt)),Array.isArray(Ut)){let Nt=St.groups;for(let ee=0,le=Nt.length;ee<le;ee++){let kt=Nt[ee],Te=Ut[kt.materialIndex];Te&&Te.visible&&x.push(R,St,Te,G,ge.z,kt)}}else Ut.visible&&x.push(R,St,Ut,G,ge.z,null)}}let rt=R.children;for(let St=0,Ut=rt.length;St<Ut;St++)Fh(rt[St],k,G,V)}function jp(R,k,G,V){let H=R.opaque,rt=R.transmissive,St=R.transparent;m.setupLightsView(G),at===!0&&st.setGlobalState(M.clippingPlanes,G),V&&qt.viewport(U.copy(V)),H.length>0&&Tl(H,k,G),rt.length>0&&Tl(rt,k,G),St.length>0&&Tl(St,k,G),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function Qp(R,k,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new Un(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float")?wi:ps,minFilter:Ar,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xe.workingColorSpace}));let rt=m.state.transmissionRenderTarget[V.id],St=V.viewport||U;rt.setSize(St.z,St.w);let Ut=M.getRenderTarget();M.setRenderTarget(rt),M.getClearColor(W),tt=M.getClearAlpha(),tt<1&&M.setClearColor(16777215,.5),M.clear(),we&&Kt.render(G);let Nt=M.toneMapping;M.toneMapping=Ws;let ee=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),at===!0&&st.setGlobalState(M.clippingPlanes,V),Tl(R,G,V),P.updateMultisampleRenderTarget(rt),P.updateRenderTargetMipmap(rt),Me.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let kt=0,Te=k.length;kt<Te;kt++){let Xe=k[kt],Ye=Xe.object,zn=Xe.geometry,De=Xe.material,Ot=Xe.group;if(De.side===Ge&&Ye.layers.test(V.layers)){let ns=De.side;De.side=Tn,De.needsUpdate=!0,t0(Ye,G,V,zn,De,Ot),De.side=ns,De.needsUpdate=!0,le=!0}}le===!0&&(P.updateMultisampleRenderTarget(rt),P.updateRenderTargetMipmap(rt))}M.setRenderTarget(Ut),M.setClearColor(W,tt),ee!==void 0&&(V.viewport=ee),M.toneMapping=Nt}function Tl(R,k,G){let V=k.isScene===!0?k.overrideMaterial:null;for(let H=0,rt=R.length;H<rt;H++){let St=R[H],Ut=St.object,Nt=St.geometry,ee=V===null?St.material:V,le=St.group;Ut.layers.test(G.layers)&&t0(Ut,k,G,Nt,ee,le)}}function t0(R,k,G,V,H,rt){R.onBeforeRender(M,k,G,V,H,rt),R.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),H.onBeforeRender(M,k,G,V,R,rt),H.transparent===!0&&H.side===Ge&&H.forceSinglePass===!1?(H.side=Tn,H.needsUpdate=!0,M.renderBufferDirect(G,k,V,H,R,rt),H.side=$s,H.needsUpdate=!0,M.renderBufferDirect(G,k,V,H,R,rt),H.side=Ge):M.renderBufferDirect(G,k,V,H,R,rt),R.onAfterRender(M,k,G,V,H,rt)}function Rl(R,k,G){k.isScene!==!0&&(k=Qe);let V=Xt.get(R),H=m.state.lights,rt=m.state.shadowsArray,St=H.state.version,Ut=Ft.getParameters(R,H.state,rt,k,G),Nt=Ft.getProgramCacheKey(Ut),ee=V.programs;V.environment=R.isMeshStandardMaterial?k.environment:null,V.fog=k.fog,V.envMap=(R.isMeshStandardMaterial?F:S).get(R.envMap||V.environment),V.envMapRotation=V.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,ee===void 0&&(R.addEventListener("dispose",ae),ee=new Map,V.programs=ee);let le=ee.get(Nt);if(le!==void 0){if(V.currentProgram===le&&V.lightsStateVersion===St)return n0(R,Ut),le}else Ut.uniforms=Ft.getUniforms(R),R.onBeforeCompile(Ut,M),le=Ft.acquireProgram(Ut,Nt),ee.set(Nt,le),V.uniforms=Ut.uniforms;let kt=V.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(kt.clippingPlanes=st.uniform),n0(R,Ut),V.needsLights=N1(R),V.lightsStateVersion=St,V.needsLights&&(kt.ambientLightColor.value=H.state.ambient,kt.lightProbe.value=H.state.probe,kt.directionalLights.value=H.state.directional,kt.directionalLightShadows.value=H.state.directionalShadow,kt.spotLights.value=H.state.spot,kt.spotLightShadows.value=H.state.spotShadow,kt.rectAreaLights.value=H.state.rectArea,kt.ltc_1.value=H.state.rectAreaLTC1,kt.ltc_2.value=H.state.rectAreaLTC2,kt.pointLights.value=H.state.point,kt.pointLightShadows.value=H.state.pointShadow,kt.hemisphereLights.value=H.state.hemi,kt.directionalShadowMap.value=H.state.directionalShadowMap,kt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,kt.spotShadowMap.value=H.state.spotShadowMap,kt.spotLightMatrix.value=H.state.spotLightMatrix,kt.spotLightMap.value=H.state.spotLightMap,kt.pointShadowMap.value=H.state.pointShadowMap,kt.pointShadowMatrix.value=H.state.pointShadowMatrix),V.currentProgram=le,V.uniformsList=null,le}function e0(R){if(R.uniformsList===null){let k=R.currentProgram.getUniforms();R.uniformsList=bo.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function n0(R,k){let G=Xt.get(R);G.outputColorSpace=k.outputColorSpace,G.batching=k.batching,G.batchingColor=k.batchingColor,G.instancing=k.instancing,G.instancingColor=k.instancingColor,G.instancingMorph=k.instancingMorph,G.skinning=k.skinning,G.morphTargets=k.morphTargets,G.morphNormals=k.morphNormals,G.morphColors=k.morphColors,G.morphTargetsCount=k.morphTargetsCount,G.numClippingPlanes=k.numClippingPlanes,G.numIntersection=k.numClipIntersection,G.vertexAlphas=k.vertexAlphas,G.vertexTangents=k.vertexTangents,G.toneMapping=k.toneMapping}function D1(R,k,G,V,H){k.isScene!==!0&&(k=Qe),P.resetTextureUnits();let rt=k.fog,St=V.isMeshStandardMaterial?k.environment:null,Ut=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ho,Nt=(V.isMeshStandardMaterial?F:S).get(V.envMap||St),ee=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,le=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),kt=!!G.morphAttributes.position,Te=!!G.morphAttributes.normal,Xe=!!G.morphAttributes.color,Ye=Ws;V.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ye=M.toneMapping);let zn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,De=zn!==void 0?zn.length:0,Ot=Xt.get(V),ns=m.state.lights;if(at===!0&&(zt===!0||R!==b)){let ni=R===b&&V.id===w;st.setState(V,R,ni)}let Ue=!1;V.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==ns.state.version||Ot.outputColorSpace!==Ut||H.isBatchedMesh&&Ot.batching===!1||!H.isBatchedMesh&&Ot.batching===!0||H.isBatchedMesh&&Ot.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ot.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ot.instancing===!1||!H.isInstancedMesh&&Ot.instancing===!0||H.isSkinnedMesh&&Ot.skinning===!1||!H.isSkinnedMesh&&Ot.skinning===!0||H.isInstancedMesh&&Ot.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ot.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ot.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ot.instancingMorph===!1&&H.morphTexture!==null||Ot.envMap!==Nt||V.fog===!0&&Ot.fog!==rt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==st.numPlanes||Ot.numIntersection!==st.numIntersection)||Ot.vertexAlphas!==ee||Ot.vertexTangents!==le||Ot.morphTargets!==kt||Ot.morphNormals!==Te||Ot.morphColors!==Xe||Ot.toneMapping!==Ye||Ot.morphTargetsCount!==De)&&(Ue=!0):(Ue=!0,Ot.__version=V.version);let mi=Ot.currentProgram;Ue===!0&&(mi=Rl(V,k,H));let Qr=!1,Wn=!1,_a=!1,Ze=mi.getUniforms(),Li=Ot.uniforms;if(qt.useProgram(mi.program)&&(Qr=!0,Wn=!0,_a=!0),V.id!==w&&(w=V.id,Wn=!0),Qr||b!==R){qt.buffers.depth.getReversed()?(Et.copy(R.projectionMatrix),Uy(Et),Ny(Et),Ze.setValue(z,"projectionMatrix",Et)):Ze.setValue(z,"projectionMatrix",R.projectionMatrix),Ze.setValue(z,"viewMatrix",R.matrixWorldInverse);let Us=Ze.map.cameraPosition;Us!==void 0&&Us.setValue(z,re.setFromMatrixPosition(R.matrixWorld)),_e.logarithmicDepthBuffer&&Ze.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ze.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,Wn=!0,_a=!0)}if(H.isSkinnedMesh){Ze.setOptional(z,H,"bindMatrix"),Ze.setOptional(z,H,"bindMatrixInverse");let ni=H.skeleton;ni&&(ni.boneTexture===null&&ni.computeBoneTexture(),Ze.setValue(z,"boneTexture",ni.boneTexture,P))}H.isBatchedMesh&&(Ze.setOptional(z,H,"batchingTexture"),Ze.setValue(z,"batchingTexture",H._matricesTexture,P),Ze.setOptional(z,H,"batchingIdTexture"),Ze.setValue(z,"batchingIdTexture",H._indirectTexture,P),Ze.setOptional(z,H,"batchingColorTexture"),H._colorsTexture!==null&&Ze.setValue(z,"batchingColorTexture",H._colorsTexture,P));let Ea=G.morphAttributes;if((Ea.position!==void 0||Ea.normal!==void 0||Ea.color!==void 0)&&Qt.update(H,G,mi),(Wn||Ot.receiveShadow!==H.receiveShadow)&&(Ot.receiveShadow=H.receiveShadow,Ze.setValue(z,"receiveShadow",H.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Li.envMap.value=Nt,Li.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&k.environment!==null&&(Li.envMapIntensity.value=k.environmentIntensity),Wn&&(Ze.setValue(z,"toneMappingExposure",M.toneMappingExposure),Ot.needsLights&&U1(Li,_a),rt&&V.fog===!0&&bt.refreshFogUniforms(Li,rt),bt.refreshMaterialUniforms(Li,V,X,ot,m.state.transmissionRenderTarget[R.id]),bo.upload(z,e0(Ot),Li,P)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(bo.upload(z,e0(Ot),Li,P),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ze.setValue(z,"center",H.center),Ze.setValue(z,"modelViewMatrix",H.modelViewMatrix),Ze.setValue(z,"normalMatrix",H.normalMatrix),Ze.setValue(z,"modelMatrix",H.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let ni=V.uniformsGroups;for(let Us=0,Ns=ni.length;Us<Ns;Us++){let i0=ni[Us];N.update(i0,mi),N.bind(i0,mi)}}return mi}function U1(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function N1(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,k,G){Xt.get(R.texture).__webglTexture=k,Xt.get(R.depthTexture).__webglTexture=G;let V=Xt.get(R);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,k){let G=Xt.get(R);G.__webglFramebuffer=k,G.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,G=0){I=R,A=k,L=G;let V=!0,H=null,rt=!1,St=!1;if(R){let Nt=Xt.get(R);if(Nt.__useDefaultFramebuffer!==void 0)qt.bindFramebuffer(z.FRAMEBUFFER,null),V=!1;else if(Nt.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(Nt.__hasExternalTextures)P.rebindTextures(R,Xt.get(R.texture).__webglTexture,Xt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let kt=R.depthTexture;if(Nt.__boundDepthTexture!==kt){if(kt!==null&&Xt.has(kt)&&(R.width!==kt.image.width||R.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}let ee=R.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(St=!0);let le=Xt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(le[k])?H=le[k][G]:H=le[k],rt=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?H=Xt.get(R).__webglMultisampledFramebuffer:Array.isArray(le)?H=le[G]:H=le,U.copy(R.viewport),B.copy(R.scissor),O=R.scissorTest}else U.copy(Vt).multiplyScalar(X).floor(),B.copy(me).multiplyScalar(X).floor(),O=Be;if(qt.bindFramebuffer(z.FRAMEBUFFER,H)&&V&&qt.drawBuffers(R,H),qt.viewport(U),qt.scissor(B),qt.setScissorTest(O),rt){let Nt=Xt.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,Nt.__webglTexture,G)}else if(St){let Nt=Xt.get(R.texture),ee=k||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Nt.__webglTexture,G||0,ee)}w=-1},this.readRenderTargetPixels=function(R,k,G,V,H,rt,St){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Xt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&St!==void 0&&(Ut=Ut[St]),Ut){qt.bindFramebuffer(z.FRAMEBUFFER,Ut);try{let Nt=R.texture,ee=Nt.format,le=Nt.type;if(!_e.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-V&&G>=0&&G<=R.height-H&&z.readPixels(k,G,V,H,ue.convert(ee),ue.convert(le),rt)}finally{let Nt=I!==null?Xt.get(I).__webglFramebuffer:null;qt.bindFramebuffer(z.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(R,k,G,V,H,rt,St){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=Xt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&St!==void 0&&(Ut=Ut[St]),Ut){let Nt=R.texture,ee=Nt.format,le=Nt.type;if(!_e.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=R.width-V&&G>=0&&G<=R.height-H){qt.bindFramebuffer(z.FRAMEBUFFER,Ut);let kt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,kt),z.bufferData(z.PIXEL_PACK_BUFFER,rt.byteLength,z.STREAM_READ),z.readPixels(k,G,V,H,ue.convert(ee),ue.convert(le),0);let Te=I!==null?Xt.get(I).__webglFramebuffer:null;qt.bindFramebuffer(z.FRAMEBUFFER,Te);let Xe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Dy(z,Xe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,kt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,rt),z.deleteBuffer(kt),z.deleteSync(Xe),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,k=null,G=0){R.isTexture!==!0&&(Da("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,R=arguments[1]);let V=Math.pow(2,-G),H=Math.floor(R.image.width*V),rt=Math.floor(R.image.height*V),St=k!==null?k.x:0,Ut=k!==null?k.y:0;P.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,G,0,0,St,Ut,H,rt),qt.unbindTexture()},this.copyTextureToTexture=function(R,k,G=null,V=null,H=0){R.isTexture!==!0&&(Da("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,R=arguments[1],k=arguments[2],H=arguments[3]||0,G=null);let rt,St,Ut,Nt,ee,le,kt,Te,Xe,Ye=R.isCompressedTexture?R.mipmaps[H]:R.image;G!==null?(rt=G.max.x-G.min.x,St=G.max.y-G.min.y,Ut=G.isBox3?G.max.z-G.min.z:1,Nt=G.min.x,ee=G.min.y,le=G.isBox3?G.min.z:0):(rt=Ye.width,St=Ye.height,Ut=Ye.depth||1,Nt=0,ee=0,le=0),V!==null?(kt=V.x,Te=V.y,Xe=V.z):(kt=0,Te=0,Xe=0);let zn=ue.convert(k.format),De=ue.convert(k.type),Ot;k.isData3DTexture?(P.setTexture3D(k,0),Ot=z.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(P.setTexture2DArray(k,0),Ot=z.TEXTURE_2D_ARRAY):(P.setTexture2D(k,0),Ot=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,k.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,k.unpackAlignment);let ns=z.getParameter(z.UNPACK_ROW_LENGTH),Ue=z.getParameter(z.UNPACK_IMAGE_HEIGHT),mi=z.getParameter(z.UNPACK_SKIP_PIXELS),Qr=z.getParameter(z.UNPACK_SKIP_ROWS),Wn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ye.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ye.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Nt),z.pixelStorei(z.UNPACK_SKIP_ROWS,ee),z.pixelStorei(z.UNPACK_SKIP_IMAGES,le);let _a=R.isDataArrayTexture||R.isData3DTexture,Ze=k.isDataArrayTexture||k.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let Li=Xt.get(R),Ea=Xt.get(k),ni=Xt.get(Li.__renderTarget),Us=Xt.get(Ea.__renderTarget);qt.bindFramebuffer(z.READ_FRAMEBUFFER,ni.__webglFramebuffer),qt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Us.__webglFramebuffer);for(let Ns=0;Ns<Ut;Ns++)_a&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xt.get(R).__webglTexture,H,le+Ns),R.isDepthTexture?(Ze&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xt.get(k).__webglTexture,H,Xe+Ns),z.blitFramebuffer(Nt,ee,rt,St,kt,Te,rt,St,z.DEPTH_BUFFER_BIT,z.NEAREST)):Ze?z.copyTexSubImage3D(Ot,H,kt,Te,Xe+Ns,Nt,ee,rt,St):z.copyTexSubImage2D(Ot,H,kt,Te,Xe+Ns,Nt,ee,rt,St);qt.bindFramebuffer(z.READ_FRAMEBUFFER,null),qt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ze?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(Ot,H,kt,Te,Xe,rt,St,Ut,zn,De,Ye.data):k.isCompressedArrayTexture?z.compressedTexSubImage3D(Ot,H,kt,Te,Xe,rt,St,Ut,zn,Ye.data):z.texSubImage3D(Ot,H,kt,Te,Xe,rt,St,Ut,zn,De,Ye):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,H,kt,Te,rt,St,zn,De,Ye.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,H,kt,Te,Ye.width,Ye.height,zn,Ye.data):z.texSubImage2D(z.TEXTURE_2D,H,kt,Te,rt,St,zn,De,Ye);z.pixelStorei(z.UNPACK_ROW_LENGTH,ns),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ue),z.pixelStorei(z.UNPACK_SKIP_PIXELS,mi),z.pixelStorei(z.UNPACK_SKIP_ROWS,Qr),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Wn),H===0&&k.generateMipmaps&&z.generateMipmap(Ot),qt.unbindTexture()},this.copyTextureToTexture3D=function(R,k,G=null,V=null,H=0){return R.isTexture!==!0&&(Da("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,R=arguments[2],k=arguments[3],H=arguments[4]||0),Da('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,k,G,V,H)},this.initRenderTarget=function(R){Xt.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),qt.unbindTexture()},this.resetState=function(){A=0,L=0,I=null,qt.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}},Mc=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new yt(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var zi=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ed=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=rd,this.updateRanges=[],this.version=0,this.uuid=us()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=us()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=us()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ln=new T,_c=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ln.fromBufferAttribute(this,e),Ln.applyMatrix4(t),this.setXYZ(e,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ln.fromBufferAttribute(this,e),Ln.applyNormalMatrix(t),this.setXYZ(e,Ln.x,Ln.y,Ln.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ln.fromBufferAttribute(this,e),Ln.transformDirection(t),this.setXYZ(e,Ln.x,Ln.y,Ln.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=vi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ze(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=vi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=vi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=vi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=vi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new tn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ei=class extends ms{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},mo,Ra=new T,go=new T,xo=new T,yo=new nt,Aa=new nt,km=new ve,Zl=new T,Ca=new T,Kl=new T,im=new nt,pu=new nt,sm=new nt,Fi=class extends gn{constructor(t=new Ei){if(super(),this.isSprite=!0,this.type="Sprite",mo===void 0){mo=new Re;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ed(e,5);mo.setIndex([0,1,2,0,2,3]),mo.setAttribute("position",new _c(i,3,0,!1)),mo.setAttribute("uv",new _c(i,2,3,!1))}this.geometry=mo,this.material=t,this.center=new nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),go.setFromMatrixScale(this.matrixWorld),km.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),xo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&go.multiplyScalar(-xo.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Jl(Zl.set(-.5,-.5,0),xo,o,go,s,r),Jl(Ca.set(.5,-.5,0),xo,o,go,s,r),Jl(Kl.set(.5,.5,0),xo,o,go,s,r),im.set(0,0),pu.set(1,0),sm.set(1,1);let a=t.ray.intersectTriangle(Zl,Ca,Kl,!1,Ra);if(a===null&&(Jl(Ca.set(-.5,.5,0),xo,o,go,s,r),pu.set(0,1),a=t.ray.intersectTriangle(Zl,Kl,Ca,!1,Ra),a===null))return;let l=t.ray.origin.distanceTo(Ra);l<t.near||l>t.far||e.push({distance:l,point:Ra.clone(),uv:Vs.getInterpolation(Ra,Zl,Ca,Kl,im,pu,sm,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Jl(n,t,e,i,s,r){yo.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Aa.x=r*yo.x-s*yo.y,Aa.y=s*yo.x+r*yo.y):Aa.copy(yo),n.copy(t),n.x+=Aa.x,n.y+=Aa.y,n.applyMatrix4(km)}var bd=class extends Fn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=qn,u=qn,d,f){super(null,o,a,l,c,u,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ec=class extends tn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},vo=new ve,rm=new ve,jl=[],om=new _i,AE=new ve,Pa=new lt,Ia=new qs,Ys=class extends lt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ec(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,AE)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new _i),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,vo),om.copy(t.boundingBox).applyMatrix4(vo),this.boundingBox.union(om)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,vo),Ia.copy(t.boundingSphere).applyMatrix4(vo),this.boundingSphere.union(Ia)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Pa.geometry=this.geometry,Pa.material=this.material,Pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ia.copy(this.boundingSphere),Ia.applyMatrix4(i),t.ray.intersectsSphere(Ia)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vo),rm.multiplyMatrices(i,vo),Pa.matrixWorld=rm,Pa.raycast(t,jl);for(let o=0,a=jl.length;o<a;o++){let l=jl[o];l.instanceId=r,l.object=this,e.push(l)}jl.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ec(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new bd(new Float32Array(s*this.count),s,this.count,tf,Ni));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Yn=class extends ms{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},am=new ve,wd=new fc,Ql=new qs,tc=new T,si=class extends gn{constructor(t=new Re,e=new Yn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ql.copy(i.boundingSphere),Ql.applyMatrix4(s),Ql.radius+=r,t.ray.intersectsSphere(Ql)===!1)return;am.copy(s).invert(),wd.copy(t.ray).applyMatrix4(am);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,v=p;g<v;g++){let x=c.getX(g);tc.fromBufferAttribute(d,x),lm(tc,x,l,s,t,e,this)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=f,v=p;g<v;g++)tc.fromBufferAttribute(d,g),lm(tc,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function lm(n,t,e,i,s,r,o){let a=wd.distanceSqToPoint(n);if(a<e){let l=new T;wd.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var on=class extends Fn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ri=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],f=i[s+1]-u,p=(o-u)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new nt:new T);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new T,s=[],r=[],o=[],a=new T,l=new ve;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new T)}r[0]=new T,o[0]=new T;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Mn(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Mn(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ga=class extends ri{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new nt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*d+this.aX,c=f*d+p*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Sd=class extends Ga{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function lf(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,p*=u,s(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var ec=new T,mu=new lf,gu=new lf,xu=new lf,Va=class extends ri{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new T){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(ec.subVectors(s[0],s[1]).add(s[0]),c=ec);let d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(ec.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ec),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),x<1e-4&&(x=v),mu.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,g,v,x),gu.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,g,v,x),xu.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,g,v,x)}else this.curveType==="catmullrom"&&(mu.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),gu.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),xu.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(mu.calc(l),gu.calc(l),xu.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function cm(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function CE(n,t){let e=1-n;return e*e*t}function PE(n,t){return 2*(1-n)*n*t}function IE(n,t){return n*n*t}function za(n,t,e,i){return CE(n,t)+PE(n,e)+IE(n,i)}function LE(n,t){let e=1-n;return e*e*e*t}function DE(n,t){let e=1-n;return 3*e*e*n*t}function UE(n,t){return 3*(1-n)*n*n*t}function NE(n,t){return n*n*n*t}function Fa(n,t,e,i,s){return LE(n,t)+DE(n,e)+UE(n,i)+NE(n,s)}var bc=class extends ri{constructor(t=new nt,e=new nt,i=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new nt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Fa(t,s.x,r.x,o.x,a.x),Fa(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Td=class extends ri{constructor(t=new T,e=new T,i=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new T){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Fa(t,s.x,r.x,o.x,a.x),Fa(t,s.y,r.y,o.y,a.y),Fa(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},wc=class extends ri{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rd=class extends ri{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sc=class extends ri{constructor(t=new nt,e=new nt,i=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new nt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(za(t,s.x,r.x,o.x),za(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Tc=class extends ri{constructor(t=new T,e=new T,i=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new T){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(za(t,s.x,r.x,o.x),za(t,s.y,r.y,o.y),za(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rc=class extends ri{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(cm(a,l.x,c.x,u.x,d.x),cm(a,l.y,c.y,u.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new nt().fromArray(s))}return this}},Ad=Object.freeze({__proto__:null,ArcCurve:Sd,CatmullRomCurve3:Va,CubicBezierCurve:bc,CubicBezierCurve3:Td,EllipseCurve:Ga,LineCurve:wc,LineCurve3:Rd,QuadraticBezierCurve:Sc,QuadraticBezierCurve3:Tc,SplineCurve:Rc}),Cd=class extends ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ad[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Ad[s.type]().fromJSON(s))}return this}},Pd=class extends Cd{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new wc(this.currentPoint.clone(),new nt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Sc(this.currentPoint.clone(),new nt(t,e),new nt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new bc(this.currentPoint.clone(),new nt(t,e),new nt(i,s),new nt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Rc(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new Ga(t,e,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},gs=class n extends Re{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Mn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/e,d=new T,f=new nt,p=new T,g=new T,v=new T,x=0,m=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:x=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,p.x=m*1,p.y=-x,p.z=m*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:x=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,p.x=m*1,p.y=-x,p.z=m*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(g)}for(let _=0;_<=e;_++){let E=i+_*u*s,M=Math.sin(E),D=Math.cos(E);for(let A=0;A<=t.length-1;A++){d.x=t[A].x*M,d.y=t[A].y,d.z=t[A].x*D,o.push(d.x,d.y,d.z),f.x=_/e,f.y=A/(t.length-1),a.push(f.x,f.y);let L=l[3*A+0]*M,I=l[3*A+1],w=l[3*A+0]*D;c.push(L,I,w)}}for(let _=0;_<e;_++)for(let E=0;E<t.length-1;E++){let M=E+_*t.length,D=M,A=M+t.length,L=M+t.length+1,I=M+1;r.push(D,A,I),r.push(L,I,A)}this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("uv",new te(a,2)),this.setAttribute("normal",new te(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},Ac=class n extends gs{constructor(t=1,e=1,i=4,s=8){let r=new Pd;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new n(t.radius,t.length,t.capSegments,t.radialSegments)}},Zs=class n extends Re{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new T,u=new nt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){let p=i+d/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Wt=class n extends Re{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],f=[],p=[],g=0,v=[],x=i/2,m=0;_(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new te(d,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(p,2));function _(){let M=new T,D=new T,A=0,L=(e-t)/i;for(let I=0;I<=r;I++){let w=[],b=I/r,U=b*(e-t)+t;for(let B=0;B<=s;B++){let O=B/s,W=O*l+a,tt=Math.sin(W),q=Math.cos(W);D.x=U*tt,D.y=-b*i+x,D.z=U*q,d.push(D.x,D.y,D.z),M.set(tt,L,q).normalize(),f.push(M.x,M.y,M.z),p.push(O,1-b),w.push(g++)}v.push(w)}for(let I=0;I<s;I++)for(let w=0;w<r;w++){let b=v[w][I],U=v[w+1][I],B=v[w+1][I+1],O=v[w][I+1];(t>0||w!==0)&&(u.push(b,U,O),A+=3),(e>0||w!==r-1)&&(u.push(U,B,O),A+=3)}c.addGroup(m,A,0),m+=A}function E(M){let D=g,A=new nt,L=new T,I=0,w=M===!0?t:e,b=M===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,x*b,0),f.push(0,b,0),p.push(.5,.5),g++;let U=g;for(let B=0;B<=s;B++){let W=B/s*l+a,tt=Math.cos(W),q=Math.sin(W);L.x=w*q,L.y=x*b,L.z=w*tt,d.push(L.x,L.y,L.z),f.push(0,b,0),A.x=tt*.5+.5,A.y=q*.5*b+.5,p.push(A.x,A.y),g++}for(let B=0;B<s;B++){let O=D+B,W=U+B;M===!0?u.push(W,W+1,O):u.push(W+1,W,O),I+=3}c.addGroup(m,I,M===!0?1:2),m+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fe=class n extends Wt{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Wa=class n extends Re{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let E=new T,M=new T,D=new T;for(let A=0;A<e.length;A+=3)p(e[A+0],E),p(e[A+1],M),p(e[A+2],D),l(E,M,D,_)}function l(_,E,M,D){let A=D+1,L=[];for(let I=0;I<=A;I++){L[I]=[];let w=_.clone().lerp(M,I/A),b=E.clone().lerp(M,I/A),U=A-I;for(let B=0;B<=U;B++)B===0&&I===A?L[I][B]=w:L[I][B]=w.clone().lerp(b,B/U)}for(let I=0;I<A;I++)for(let w=0;w<2*(A-I)-1;w++){let b=Math.floor(w/2);w%2===0?(f(L[I][b+1]),f(L[I+1][b]),f(L[I][b])):(f(L[I][b+1]),f(L[I+1][b+1]),f(L[I+1][b]))}}function c(_){let E=new T;for(let M=0;M<r.length;M+=3)E.x=r[M+0],E.y=r[M+1],E.z=r[M+2],E.normalize().multiplyScalar(_),r[M+0]=E.x,r[M+1]=E.y,r[M+2]=E.z}function u(){let _=new T;for(let E=0;E<r.length;E+=3){_.x=r[E+0],_.y=r[E+1],_.z=r[E+2];let M=x(_)/2/Math.PI+.5,D=m(_)/Math.PI+.5;o.push(M,1-D)}g(),d()}function d(){for(let _=0;_<o.length;_+=6){let E=o[_+0],M=o[_+2],D=o[_+4],A=Math.max(E,M,D),L=Math.min(E,M,D);A>.9&&L<.1&&(E<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),D<.2&&(o[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function p(_,E){let M=_*3;E.x=t[M+0],E.y=t[M+1],E.z=t[M+2]}function g(){let _=new T,E=new T,M=new T,D=new T,A=new nt,L=new nt,I=new nt;for(let w=0,b=0;w<r.length;w+=9,b+=6){_.set(r[w+0],r[w+1],r[w+2]),E.set(r[w+3],r[w+4],r[w+5]),M.set(r[w+6],r[w+7],r[w+8]),A.set(o[b+0],o[b+1]),L.set(o[b+2],o[b+3]),I.set(o[b+4],o[b+5]),D.copy(_).add(E).add(M).divideScalar(3);let U=x(D);v(A,b+0,_,U),v(L,b+2,E,U),v(I,b+4,M,U)}}function v(_,E,M,D){D<0&&_.x===1&&(o[E]=_.x-1),M.x===0&&M.z===0&&(o[E]=D/2/Math.PI+.5)}function x(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}},oi=class n extends Wa{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Nn=class n extends Wa{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},Ks=class n extends Wa{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},fn=class n extends Re{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],d=t,f=(e-t)/s,p=new T,g=new nt;for(let v=0;v<=s;v++){for(let x=0;x<=i;x++){let m=r+x/i*o;p.x=d*Math.cos(m),p.y=d*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}d+=f}for(let v=0;v<s;v++){let x=v*(i+1);for(let m=0;m<i;m++){let _=m+x,E=_,M=_+i+1,D=_+i+2,A=_+1;a.push(E,M,A),a.push(M,D,A)}}this.setIndex(a),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Bt=class n extends Re{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new T,f=new T,p=[],g=[],v=[],x=[];for(let m=0;m<=i;m++){let _=[],E=m/i,M=0;m===0&&o===0?M=.5/e:m===i&&l===Math.PI&&(M=-.5/e);for(let D=0;D<=e;D++){let A=D/e;d.x=-t*Math.cos(s+A*r)*Math.sin(o+E*a),d.y=t*Math.cos(o+E*a),d.z=t*Math.sin(s+A*r)*Math.sin(o+E*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),x.push(A+M,1-E),_.push(c++)}u.push(_)}for(let m=0;m<i;m++)for(let _=0;_<e;_++){let E=u[m][_+1],M=u[m][_],D=u[m+1][_],A=u[m+1][_+1];(m!==0||o>0)&&p.push(E,M,A),(m!==i-1||l<Math.PI)&&p.push(M,D,A)}this.setIndex(p),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(v,3)),this.setAttribute("uv",new te(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Dt=class n extends Re{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new T,d=new T,f=new T;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let v=g/s*r,x=p/i*Math.PI*2;d.x=(t+e*Math.cos(x))*Math.cos(v),d.y=(t+e*Math.cos(x))*Math.sin(v),d.z=e*Math.sin(x),a.push(d.x,d.y,d.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let v=(s+1)*p+g-1,x=(s+1)*(p-1)+g-1,m=(s+1)*(p-1)+g,_=(s+1)*p+g;o.push(v,x,_),o.push(x,m,_)}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Cc=class n extends Re{constructor(t=new Tc(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new T,l=new T,c=new nt,u=new T,d=[],f=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new te(d,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(p,2));function v(){for(let E=0;E<e;E++)x(E);x(r===!1?e:0),_(),m()}function x(E){u=t.getPointAt(E/e,u);let M=o.normals[E],D=o.binormals[E];for(let A=0;A<=s;A++){let L=A/s*Math.PI*2,I=Math.sin(L),w=-Math.cos(L);l.x=w*M.x+I*D.x,l.y=w*M.y+I*D.y,l.z=w*M.z+I*D.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,d.push(a.x,a.y,a.z)}}function m(){for(let E=1;E<=e;E++)for(let M=1;M<=s;M++){let D=(s+1)*(E-1)+(M-1),A=(s+1)*E+(M-1),L=(s+1)*E+M,I=(s+1)*(E-1)+M;g.push(D,A,I),g.push(A,L,I)}}function _(){for(let E=0;E<=e;E++)for(let M=0;M<=s;M++)c.x=E/e,c.y=M/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new Ad[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Pc=class extends rn{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},pt=class extends ms{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tm,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function nc(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function kE(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Uo=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Id=class extends Uo{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:a0,endingEnd:a0}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case l0:r=t,a=2*e-i;break;case c0:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case l0:o=t,l=2*i-e;break;case c0:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-e)/(s-e),v=g*g,x=v*g,m=-f*x+2*f*v-f*g,_=(1+f)*x+(-1.5-2*f)*v+(-.5+f)*g+1,E=(-1-p)*x+(1.5+p)*v+.5*g,M=p*x-p*v;for(let D=0;D!==a;++D)r[D]=m*o[u+D]+_*o[c+D]+E*o[l+D]+M*o[d+D];return r}},Ld=class extends Uo{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(i-e)/(s-e),d=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*u;return r}},Dd=class extends Uo{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},bi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=nc(e,this.TimeBufferType),this.values=nc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:nc(t.times,Array),values:nc(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Dd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ld(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Id(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case lc:e=this.InterpolantFactoryMethodDiscrete;break;case sd:e=this.InterpolantFactoryMethodLinear;break;case Bh:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lc;case this.InterpolantFactoryMethodLinear:return sd;case this.InterpolantFactoryMethodSmooth:return Bh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&kE(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Bh,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,f=d-i,p=d+i;for(let g=0;g!==i;++g){let v=e[d+g];if(v!==e[f+g]||v!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,f=o*i;for(let p=0;p!==i;++p)e[f+p]=e[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=sd;var Pr=class extends bi{constructor(t,e,i){super(t,e,i)}};Pr.prototype.ValueTypeName="bool";Pr.prototype.ValueBufferType=Array;Pr.prototype.DefaultInterpolation=lc;Pr.prototype.InterpolantFactoryMethodLinear=void 0;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ud=class extends bi{};Ud.prototype.ValueTypeName="color";var Nd=class extends bi{};Nd.prototype.ValueTypeName="number";var kd=class extends Uo{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)hn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ic=class extends bi{InterpolantFactoryMethodLinear(t){return new kd(this.times,this.values,this.getValueSize(),t)}};Ic.prototype.ValueTypeName="quaternion";Ic.prototype.InterpolantFactoryMethodSmooth=void 0;var Ir=class extends bi{constructor(t,e,i){super(t,e,i)}};Ir.prototype.ValueTypeName="string";Ir.prototype.ValueBufferType=Array;Ir.prototype.DefaultInterpolation=lc;Ir.prototype.InterpolantFactoryMethodLinear=void 0;Ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Hd=class extends bi{};Hd.prototype.ValueTypeName="vector";var zd=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},HE=new zd,Fd=class{constructor(t){this.manager=t!==void 0?t:HE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Fd.DEFAULT_MATERIAL_NAME="__DEFAULT";var Lr=class extends gn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Js=class extends Lr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},yu=new ve,hm=new T,um=new T,$a=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ba,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;hm.setFromMatrixPosition(t.matrixWorld),e.position.copy(hm),um.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(um),e.updateMatrixWorld(),yu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Od=class extends $a{constructor(){super(new cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=Co*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},No=class extends Lr{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Od}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},dm=new ve,La=new T,vu=new T,Bd=class extends $a{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new Oe(2,1,1,1),new Oe(0,1,1,1),new Oe(3,1,1,1),new Oe(1,1,1,1),new Oe(3,0,1,1),new Oe(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),La.setFromMatrixPosition(t.matrixWorld),i.position.copy(La),vu.copy(i.position),vu.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(vu),i.updateMatrixWorld(),s.makeTranslation(-La.x,-La.y,-La.z),dm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dm)}},js=class extends Lr{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Bd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Gd=class extends $a{constructor(){super(new Io(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Oi=class extends Lr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new Gd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Lc=class extends Lr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var ko=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=fm();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function fm(){return performance.now()}var cf="\\[\\]\\.:\\/",zE=new RegExp("["+cf+"]","g"),hf="[^"+cf+"]",FE="[^"+cf.replace("\\.","")+"]",OE=/((?:WC+[\/:])*)/.source.replace("WC",hf),BE=/(WCOD+)?/.source.replace("WCOD",FE),GE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hf),VE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hf),WE=new RegExp("^"+OE+BE+GE+VE+"$"),$E=["material","materials","bones","map"],Vd=class{constructor(t,e,i){let s=i||Ke.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ke=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(zE,"")}static parseTrackName(t){let e=WE.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);$E.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ke.Composite=Vd;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Iw=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wd);var kc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Zn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},XE=new Io(-1,1,1,-1,0,1),uf=class extends Re{constructor(){super(),this.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new te([0,2,0,0,2,0],2))}},qE=new uf,tr=class{constructor(t){this._mesh=new lt(qE,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,XE)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Fo=class extends Zn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof rn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Qs.clone(t.uniforms),this.material=new rn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new tr(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Xa=class extends Zn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Hc=class extends Zn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var zc=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new nt);this._width=i.width,this._height=i.height,e=new Un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:wi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fo(kc),this.copyPass.material.blending=ki,this.clock=new ko}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Xa!==void 0&&(o instanceof Xa?i=!0:o instanceof Hc&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Fc=class extends Zn{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new yt}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Hm={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new yt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Oo=class n extends Zn{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new nt(t.x,t.y):new nt(256,256),this.clearColor=new yt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Un(r,o,{type:wi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let f=new Un(r,o,{type:wi});f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new Un(r,o,{type:wi});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=Hm;this.highPassUniforms=Qs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new rn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new nt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=kc;this.copyUniforms=Qs.clone(u.uniforms),this.blendMaterial=new rn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:fe,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new yt,this.oldClearAlpha=1,this.basic=new Yt,this.fsQuad=new tr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new nt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new rn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new rn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Oo.BlurDirectionX=new nt(1,0);Oo.BlurDirectionY=new nt(0,1);var zm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Oc=class extends Zn{constructor(){super();let t=zm;this.uniforms=Qs.clone(t.uniforms),this.material=new Pc({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new tr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},xe.getTransfer(this._outputColorSpace)===Ne&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Xd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===qd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Yd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Dr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Zd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Kd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var h={scene:null,camera:null,renderer:null,player:null,time:{t:.3,day:1,elevation:1,night:0},res:{iron:0,silicon:0,ice:0,titanium:0},buildings:[],nodes:[],enemies:[],colonists:[],colony:{pop:0,housing:0,o2:0,food:0,water:0,support:0,powerProd:0,powerUse:0,deficit:!1},upgrades:{},stats:{mined:{iron:0,silicon:0,ice:0,titanium:0},built:{},kills:0,arrived:0,crafted:{}},chapter:0,terraform:0,ended:!1,storm:0,menuOpen:!1,locked:!1,started:!1,debug:!1,colliders:null,raining:!1,events:{map:{},on(n,t){var e;((e=this.map)[n]||(e[n]=[])).push(t)},emit(n,t){(this.map[n]||[]).forEach(e=>e(t))}}},un={iron:{name:"\u94C1\u77FF",icon:"iron",color:"#d08a5e"},silicon:{name:"\u7845\u6676",icon:"silicon",color:"#f1dca0"},ice:{name:"\u6C34\u51B0",icon:"ice",color:"#a9dcff"},titanium:{name:"\u949B\u77FF",icon:"titanium",color:"#b9a6ff"}};function Si(n){for(let t in n)if((h.res[t]||0)<n[t])return!1;return!0}function qa(n){for(let t in n)h.res[t]-=n[t]}function Bo(n){return Object.entries(n).map(([t,e])=>`<span class="cost ${h.res[t]>=e?"":"lack"}" style="--rc:${un[t].color}"><svg class="ico"><use href="#i-${t}"/></svg>${e}</span>`).join(" ")}var Bc=class{constructor(t=16){this.cell=t,this.map=new Map}key(t,e){return t*73856093^e*19349663}add(t){let e=this.cell,i=Math.floor((t.x-t.r)/e),s=Math.floor((t.x+t.r)/e),r=Math.floor((t.z-t.r)/e),o=Math.floor((t.z+t.r)/e);t._keys=[];for(let a=i;a<=s;a++)for(let l=r;l<=o;l++){let c=this.key(a,l);this.map.has(c)||this.map.set(c,[]),this.map.get(c).push(t),t._keys.push(c)}return t}remove(t){if(!(!t||!t._keys)){for(let e of t._keys){let i=this.map.get(e);if(!i)continue;let s=i.indexOf(t);s>=0&&i.splice(s,1)}t._keys=null}}query(t,e){return this.map.get(this.key(Math.floor(t/this.cell),Math.floor(e/this.cell)))||[]}overlaps(t,e,i){let s=this.cell,r=new Set;for(let o=Math.floor((t-i)/s);o<=Math.floor((t+i)/s);o++)for(let a=Math.floor((e-i)/s);a<=Math.floor((e+i)/s);a++){let l=this.map.get(this.key(o,a));if(l)for(let c of l){if(r.has(c))continue;r.add(c);let u=c.x-t,d=c.z-e,f=c.r+i;if(u*u+d*d<f*f)return c}}return null}};function Kn(n){return function(){n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Gc(n){let t=Kn(n),e=[...Array(256).keys()];for(let l=255;l>0;l--){let c=Math.floor(t()*(l+1));[e[l],e[c]]=[e[c],e[l]]}let i=new Uint8Array(512);for(let l=0;l<512;l++)i[l]=e[l&255];let s=[1,-1,1,-1,1,-1,0,0],r=[1,1,-1,-1,0,0,1,-1],o=.5*(Math.sqrt(3)-1),a=(3-Math.sqrt(3))/6;return function(l,c){let u=0,d=0,f=0,p=(l+c)*o,g=Math.floor(l+p),v=Math.floor(c+p),x=(g+v)*a,m=l-(g-x),_=c-(v-x),E=m>_?1:0,M=m>_?0:1,D=m-E+a,A=_-M+a,L=m-1+2*a,I=_-1+2*a,w=g&255,b=v&255,U=.5-m*m-_*_;if(U>0){let W=i[w+i[b]]&7;U*=U,u=U*U*(s[W]*m+r[W]*_)}let B=.5-D*D-A*A;if(B>0){let W=i[w+E+i[b+M]]&7;B*=B,d=B*B*(s[W]*D+r[W]*A)}let O=.5-L*L-I*I;if(O>0){let W=i[w+1+i[b+1]]&7;O*=O,f=O*O*(s[W]*L+r[W]*I)}return 70*(u+d+f)}}function df(n,t,e,i=4,s=2,r=.5){let o=1,a=1,l=0,c=0;for(let u=0;u<i;u++)l+=o*n(t*a,e*a),c+=o,o*=r,a*=s;return l/c}var Ti=(n,t,e)=>n<t?t:n>e?e:n,Ae=(n,t,e)=>n+(t-n)*e,kn=(n,t,e)=>{let i=Ti((e-n)/(t-n),0,1);return i*i*(3-2*i)};var Hn={mars:{id:"mars",name:"\u706B\u661F",place:"\u4E4C\u6258\u90A6\u5E73\u539F",title:"\u65B0\u5BB6\u56ED",next:"europa",seed:2089,gravity:5.6,solar:1,terraformable:!0,craters:46,hills:46,ridges:14,detail:1.6,ground:{a:[.56,.25,.14],b:[.74,.4,.24],steep:[.36,.19,.13],low:[.42,.22,.16]},rockHSL:[.04,.45,.22],rock:9062960,sky:{dayTop:[.62,.42,.29],dayHor:[.9,.68,.5],setTop:[.17,.13,.15],setHor:[.58,.4,.33],nightTop:[.006,.008,.022],nightHor:[.035,.035,.055],halo:[.35,.58,.95],storm:[.62,.42,.28]},dust:16765088,enemy:[3808536,9054736,16730640],extras:"moons",storms:!0,intro:["2089 \u5E74\u3002","\u5730\u7403\u4F9D\u7136\u7F8E\u4E3D\uFF0C\u4F46\u5DF2\u7ECF\u592A\u62E5\u6324\u3001\u592A\u708E\u70ED\u3001\u592A\u75B2\u60EB\u3002","\u300C\u65B9\u821F\u8BA1\u5212\u300D\u628A\u4EBA\u7C7B\u7684\u672A\u6765\uFF0C\u62BC\u5728\u4E86\u4E00\u9897\u7EA2\u8272\u661F\u7403\u4E0A\u3002","\u7ECF\u8FC7\u4E03\u4E2A\u6708\u3001\u4E24\u4EBF\u4E24\u5343\u4E94\u767E\u4E07\u516C\u91CC\u7684\u822A\u884C\u2014\u2014","\u4F60\u7684\u7740\u9646\u8231\uFF0C\u5728\u4E4C\u6258\u90A6\u5E73\u539F\u7684\u6668\u5149\u4E2D\u843D\u5730\u3002",'\u4F60\u662F\u7B2C\u4E00\u4E2A\u3002<b style="color:#ff8a3d">\u4F46\u4E0D\u4F1A\u662F\u6700\u540E\u4E00\u4E2A\u3002</b>']},europa:{id:"europa",name:"\u6728\u536B\u4E8C\xB7\u6B27\u7F57\u5DF4",place:"\u5EB7\u7EB3\u9A6C\u62C9\u6DF7\u6C8C\u533A",title:"\u51B0\u4E0B\u4E4B\u6D77",next:"kepler",seed:1610,gravity:3.6,solar:.55,terraformable:!1,craters:14,hills:16,ridges:26,detail:1.1,ground:{a:[.8,.84,.88],b:[.93,.95,.97],steep:[.52,.36,.3],low:[.62,.72,.82]},rockHSL:[.58,.2,.62],rock:12110040,sky:{dayTop:[.02,.025,.05],dayHor:[.16,.18,.26],setTop:[.01,.012,.03],setHor:[.1,.1,.16],nightTop:[.004,.005,.012],nightHor:[.02,.025,.04],halo:[.6,.7,.9],storm:[.5,.6,.7]},dust:14676223,enemy:[1454138,2788e3,4251903],extras:"jupiter",storms:!1,intro:["\u706B\u661F\u7684\u706F\u706B\uFF0C\u5DF2\u7ECF\u5728\u8EAB\u540E\u4EAE\u6210\u4E86\u4E00\u7247\u3002","\u800C\u4F60\uFF0C\u518D\u4E00\u6B21\u51FA\u53D1\u4E86\u3002","\u6728\u661F\u7684\u7B2C\u4E8C\u9897\u536B\u661F\u2014\u2014\u6B27\u7F57\u5DF4\u3002","\u5728\u5B83\u4E8C\u5341\u516C\u91CC\u539A\u7684\u51B0\u58F3\u4E4B\u4E0B\uFF0C\u662F\u4E00\u6574\u7247\u4ECE\u672A\u89C1\u8FC7\u9633\u5149\u7684\u6D77\u6D0B\u3002","\u6728\u661F\uFF0C\u50CF\u4E00\u8F6E\u5DE8\u5927\u7684\u6708\u4EAE\uFF0C\u60AC\u5728\u5730\u5E73\u7EBF\u4E0A\u3002",'<b style="color:#66e6ff">\u4EBA\u7C7B\u7684\u7B2C\u4E8C\u4E2A\u5BB6\uFF0C\u5728\u51B0\u4E0B\u3002</b>']},kepler:{id:"kepler",name:"\u5F00\u666E\u52D2-442b",place:"\u7FE1\u7FE0\u8C37\u5730",title:"\u53CC\u65E5\u4E4B\u5730",next:null,seed:442,gravity:7.2,solar:1.3,terraformable:!1,craters:8,hills:64,ridges:10,detail:2.2,ground:{a:[.18,.36,.3],b:[.32,.52,.34],steep:[.3,.24,.3],low:[.2,.26,.4]},rockHSL:[.75,.25,.3],rock:6969994,sky:{dayTop:[.3,.5,.78],dayHor:[.78,.86,.8],setTop:[.2,.12,.3],setHor:[.9,.5,.4],nightTop:[.01,.01,.04],nightHor:[.05,.04,.09],halo:[1,.6,.4],storm:[.6,.7,.6]},dust:13172696,enemy:[1976854,5939242,10551104],extras:"twinsuns",storms:!1,intro:["\u4E00\u5343\u4E8C\u767E\u5149\u5E74\u3002","\u51B7\u51BB\u8231\u91CC\u7684\u4E09\u767E\u5E74\uFF0C\u5BF9\u4F60\u53EA\u662F\u4E00\u573A\u68A6\u3002","\u8237\u7A97\u5916\uFF0C\u4E24\u9897\u592A\u9633\u6B63\u4ECE\u7D2B\u8272\u7684\u5C71\u810A\u540E\u5347\u8D77\u3002","\u8FD9\u91CC\u6709\u98CE\uFF0C\u6709\u4E91\uFF0C\u6709\u4F1A\u5728\u591C\u91CC\u53D1\u5149\u7684\u68EE\u6797\u3002","\u5F00\u666E\u52D2-442b\u2014\u2014\u4EBA\u7C7B\u7B2C\u4E00\u6B21\uFF0C\u6765\u5230\u53E6\u4E00\u9897\u6052\u661F\u7684\u8EAB\u8FB9\u3002",'<b style="color:#a0ff70">\u4ECE\u8FD9\u91CC\u5F00\u59CB\uFF0C\u4EBA\u7C7B\u6210\u4E3A\u4E86\u661F\u9645\u6587\u660E\u3002</b>']}},Om="starport-meta";function er(){try{return JSON.parse(localStorage.getItem(Om))||{}}catch{return{}}}function Ya(n){try{localStorage.setItem(Om,JSON.stringify(n))}catch{}}function ff(){try{for(let n of Object.keys(localStorage))n.startsWith("starport-")&&localStorage.removeItem(n)}catch{}}var Fm=new URLSearchParams(location.search).get("planet"),pn=er(),ne=Hn[Fm]?Fm:Hn[pn.planet]?pn.planet:"mars",ht=Hn[ne],Vc=ne==="mars"?"starport-newhome-v1":"starport-planet-"+ne;var oe=512;function xs(){let n=document.createElement("canvas");return n.width=n.height=oe,n}function ys(n,t,e=1){let i=new on(n);return i.wrapS=i.wrapT=fs,i.repeat.set(e,e),i.anisotropy=4,t&&(i.colorSpace=ye),i}function nr(n,t,e,i,s,r,o,a){for(let l=0;l<e;l++){n.fillStyle=`rgba(${i},${s+t()*(r-s)})`;let c=o+t()*(a-o);n.fillRect(t()*oe,t()*oe,c,c)}}function Za(n=1,t=4){let e=Kn(n),i=xs(),s=i.getContext("2d"),r=xs(),o=r.getContext("2d"),a=xs(),l=a.getContext("2d");s.fillStyle="#f2f0ec",s.fillRect(0,0,oe,oe),o.fillStyle="#8c8c8c",o.fillRect(0,0,oe,oe),l.fillStyle="#808080",l.fillRect(0,0,oe,oe);let c=oe/t;for(let d=0;d<t;d++)for(let f=0;f<t;f++){let p=236+Math.floor(e()*18);s.fillStyle=`rgb(${p},${p-2},${p-5})`,s.fillRect(d*c,f*c,c,c);let g=120+Math.floor(e()*40);if(o.fillStyle=`rgb(${g},${g},${g})`,o.fillRect(d*c,f*c,c,c),e()<.35){let v=c*(.25+e()*.3),x=c*(.2+e()*.25),m=d*c+c*.2+e()*c*.3,_=f*c+c*.2+e()*c*.3;l.strokeStyle="#4a4a4a",l.lineWidth=2,l.strokeRect(m,_,v,x),s.strokeStyle="rgba(80,76,70,.35)",s.lineWidth=1.5,s.strokeRect(m,_,v,x)}}for(let d=0;d<=t;d++){let f=d*c;for(let[p,g,v]of[[s,"rgba(70,64,58,.55)",2.5],[l,"#303030",4],[o,"#d0d0d0",3]])p.fillStyle=g,p.fillRect(f-v/2,0,v,oe),p.fillRect(0,f-v/2,oe,v)}for(let d=0;d<t;d++)for(let f=0;f<t;f++)for(let[p,g]of[[.08,.08],[.92,.08],[.08,.92],[.92,.92]]){let v=(d+p)*c,x=(f+g)*c;l.fillStyle="#c8c8c8",l.beginPath(),l.arc(v,x,3,0,7),l.fill(),s.fillStyle="rgba(90,86,80,.5)",s.beginPath(),s.arc(v,x,2.2,0,7),s.fill()}for(let d=0;d<70;d++){let f=e()*oe,p=30+e()*160,g=e()*oe,v=s.createLinearGradient(0,g,0,g+p);v.addColorStop(0,"rgba(150,90,60,0)"),v.addColorStop(.3,`rgba(150,90,60,${.05+e()*.08})`),v.addColorStop(1,"rgba(150,90,60,0)"),s.fillStyle=v,s.fillRect(f,g,1+e()*3,p)}let u=s.createLinearGradient(0,oe*.75,0,oe);u.addColorStop(0,"rgba(170,100,60,0)"),u.addColorStop(1,"rgba(170,100,60,.22)"),s.fillStyle=u,s.fillRect(0,0,oe,oe),nr(s,e,2500,"120,80,60",.03,.12,1,3),nr(o,e,1800,"255,255,255",.05,.2,1,4),s.strokeStyle="rgba(255,255,255,.25)",o.strokeStyle="rgba(40,40,40,.4)";for(let d=0;d<40;d++){let f=e()*oe,p=e()*oe,g=(e()-.5)*40,v=(e()-.5)*12;for(let x of[s,o])x.lineWidth=.8,x.beginPath(),x.moveTo(f,p),x.lineTo(f+g,p+v),x.stroke()}return{map:ys(i,!0),roughnessMap:ys(r,!1),bumpMap:ys(a,!1)}}function Bm(n=7){let t=Kn(n),e=xs(),i=e.getContext("2d"),s=xs(),r=s.getContext("2d");i.fillStyle="#e6e6e6",i.fillRect(0,0,oe,oe),r.fillStyle="#6a6a6a",r.fillRect(0,0,oe,oe);for(let o=0;o<oe;o++){let a=210+Math.floor(t()*45);i.fillStyle=`rgba(${a},${a},${a},.5)`,i.fillRect(0,o,oe,1);let l=80+Math.floor(t()*60);r.fillStyle=`rgba(${l},${l},${l},.5)`,r.fillRect(0,o,oe,1)}return nr(i,t,800,"60,50,40",.05,.15,1,3),{map:ys(e,!0),roughnessMap:ys(s,!1)}}function Gm(n=3){let t=Kn(n),e=xs(),i=e.getContext("2d"),s=xs(),r=s.getContext("2d");i.fillStyle="#d8d2c8",i.fillRect(0,0,oe,oe),r.fillStyle="#808080",r.fillRect(0,0,oe,oe),nr(i,t,9e3,"90,80,70",.04,.16,1,4),nr(i,t,3e3,"255,250,240",.04,.12,1,3),nr(r,t,6e3,"40,40,40",.1,.4,1,3);for(let a=0;a<6;a++){i.strokeStyle="rgba(70,60,50,.25)",i.lineWidth=1,i.beginPath();let l=t()*oe,c=t()*oe;i.moveTo(l,c);for(let u=0;u<12;u++)l+=(t()-.5)*50,c+=(t()-.5)*50,i.lineTo(l,c);i.stroke()}let o=i.createLinearGradient(0,0,0,oe);return o.addColorStop(0,"rgba(170,100,60,0)"),o.addColorStop(1,"rgba(170,100,60,.3)"),i.fillStyle=o,i.fillRect(0,0,oe,oe),{map:ys(e,!0,1),bumpMap:ys(s,!1,1)}}function Vm(n=11){let t=Kn(n),e=xs(),i=e.getContext("2d"),s=xs(),r=s.getContext("2d");i.fillStyle="#d0c4bc",i.fillRect(0,0,oe,oe),r.fillStyle="#808080",r.fillRect(0,0,oe,oe);for(let o=0;o<300;o++){let a=t()*oe,l=t()*oe,c=6+t()*40,u=Math.floor(150+t()*90);i.fillStyle=`rgba(${u},${u-15},${u-25},.25)`,i.beginPath(),i.ellipse(a,l,c,c*(.4+t()*.6),t()*3,0,7),i.fill(),r.fillStyle=`rgba(${u},${u},${u},.25)`,r.beginPath(),r.ellipse(a,l,c,c*.6,t()*3,0,7),r.fill()}return nr(i,t,8e3,"60,40,30",.05,.2,1,3),nr(r,t,8e3,"20,20,20",.1,.5,1,2),{map:ys(e,!0,1),bumpMap:ys(s,!1,1)}}var y={white:new pt({color:15328474,roughness:.55,metalness:.1}),panel:new pt({color:13222840,roughness:.6,metalness:.2}),metal:new pt({color:8159110,roughness:.4,metalness:.7}),dark:new pt({color:2895670,roughness:.5,metalness:.5}),orange:new pt({color:16742954,roughness:.5,metalness:.1}),glass:new pt({color:10474751,roughness:.05,metalness:.3,transparent:!0,opacity:.35}),window:new pt({color:2240576,emissive:16761466,emissiveIntensity:0,roughness:.2}),solar:new pt({color:1780826,roughness:.25,metalness:.8}),plant:new pt({color:5221962,roughness:.8,flatShading:!0}),cyan:new pt({color:1127236,emissive:3401471,emissiveIntensity:2}),red:new pt({color:3342336,emissive:16722474,emissiveIntensity:3}),lamp:new pt({color:3351057,emissive:16767392,emissiveIntensity:0}),found:new pt({color:9143160,roughness:.9}),flame:new Yt({color:16756832,transparent:!0,opacity:.85,blending:fe,depthWrite:!1})};{let n=Za(1,4),t=Za(5,3),e=Bm(),i=Gm(),s=Za(9,2);Object.assign(y.white,{...n,bumpScale:1.4,roughness:.75,metalness:.15,color:new yt(15920612)}),Object.assign(y.panel,{...t,bumpScale:1.2,roughness:.8,metalness:.25,color:new yt(13617340)}),Object.assign(y.metal,{...e,roughness:1,metalness:.85,color:new yt(10132900)}),Object.assign(y.dark,{...s,bumpScale:1,roughness:.7,metalness:.6,color:new yt(3816772)}),Object.assign(y.orange,{...Za(3,2),bumpScale:.8,roughness:.7,metalness:.15}),Object.assign(y.found,{...i,bumpScale:2,roughness:.95,color:new yt(10853004)}),y.glass.roughness=.02,y.glass.metalness=.1,y.glass.opacity=.28,y.glass.envMapIntensity=2.2,y.solar.roughness=.12,y.solar.envMapIntensity=1.8;for(let r in y)y[r].needsUpdate=!0}var Bi=Vm();{let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");t.fillStyle="#1d3266",t.fillRect(0,0,64,64),t.strokeStyle="#9fb4e0",t.lineWidth=1.5;for(let i=0;i<=64;i+=16)t.beginPath(),t.moveTo(i,0),t.lineTo(i,64),t.stroke(),t.beginPath(),t.moveTo(0,i),t.lineTo(64,i),t.stroke();let e=new on(n);e.colorSpace=ye,e.wrapS=e.wrapT=fs,e.repeat.set(3,2),y.solar.map=e,y.solar.color.set(16777215)}function Y(n,t,e=0,i=0,s=0,r){let o=new lt(n,t);return o.position.set(e,i,s),o.castShadow=!0,o.receiveShadow=!0,r&&r.add(o),o}var ie=(n,t,e)=>new Gt(n,t,e),jt=(n,t,e,i=16)=>new Wt(n,t,e,i),Wc;function Jn(){if(Wc)return Wc;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.6)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Wc=new on(n),Wc}function Mt(n,t,e,i=0,s=0,r=0){let o=new Fi(new Ei({map:Jn(),color:n,transparent:!0,blending:fe,depthWrite:!1}));return o.scale.set(t,t,1),o.position.set(i,s,r),e&&e.add(o),o}function Rn(n,t,e=!1){let i=Y(e?ie(t*2,4,t*2):jt(t,t*1.05,4,20),y.found,0,-1.8,0,n);i.castShadow=!1,i.userData.found=!0}var Bn={solar(n,t){Rn(n,2.2,!0),Y(jt(.18,.25,2.2),y.metal,0,1.1,0,n);let e=new ft;e.position.y=2.3,n.add(e);let i=Y(ie(4.2,.12,2.8),y.solar,0,0,0,e);Y(ie(4.4,.08,.1),y.metal,0,-.05,1.42,e),Y(ie(4.4,.08,.1),y.metal,0,-.05,-1.42,e),t.pivot=e,t.panel=i},oxygen(n,t){Rn(n,3),Y(jt(1,1,3.6),y.white,-1.3,1.8,0,n),Y(new Bt(1,16,8,0,Math.PI*2,0,Math.PI/2),y.white,-1.3,3.6,0,n),Y(jt(1,1,3.6),y.white,1.3,1.8,0,n),Y(new Bt(1,16,8,0,Math.PI*2,0,Math.PI/2),y.white,1.3,3.6,0,n),Y(jt(1.02,1.02,.3),y.orange,-1.3,2.4,0,n),Y(jt(1.02,1.02,.3),y.orange,1.3,2.4,0,n),Y(ie(1.4,1.6,1.8),y.panel,0,.8,1,n),Y(jt(.12,.12,2.6),y.metal,0,3.2,0,n).rotation.z=Math.PI/2;let e=new ft;e.position.set(0,1.75,1.95),n.add(e);for(let i=0;i<4;i++){let s=Y(ie(.15,.7,.05),y.dark,0,0,0,e);s.rotation.z=i*Math.PI/2,s.position.set(Math.sin(i*Math.PI/2)*.3,Math.cos(i*Math.PI/2)*.3,0),s.rotation.z=-i*Math.PI/2}t.fan=e,t.light=Mt(6741503,1.2,n,0,1.75,2)},habitat(n,t){Rn(n,6.2),Y(jt(6,6,1.2,28),y.panel,0,.6,0,n);let e=Y(new Bt(5.8,28,12,0,Math.PI*2,0,Math.PI/2),y.white,0,1.2,0,n);e.scale.y=.85;let i=Y(new Wt(5.72,5.84,.7,28,1,!0),y.window,0,2,0,n);Y(jt(.1,.1,3),y.metal,0,7.4,0,n),t.tip=Mt(16728128,1.2,n,0,8.9,0),Y(ie(2.2,2.6,2.8),y.white,0,1.3,6.4,n),Y(ie(1.2,2,.1),y.dark,0,1.1,7.82,n),Y(ie(2.3,.3,2.9),y.orange,0,2.7,6.4,n),t.windows=[i]},extractor(n,t){Rn(n,2.6,!0),Y(ie(4,.6,4),y.panel,0,.3,0,n);for(let[i,s]of[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4]])Y(jt(.12,.15,6),y.metal,i*.7,3.3,s*.7,n).rotation.set(s*.08,0,-i*.08);Y(ie(1.6,.4,1.6),y.orange,0,6.2,0,n);let e=Y(jt(.3,.3,4.5),y.metal,0,3,0,n);Y(jt(.9,.9,1.6),y.white,1.7,1.4,1.2,n),t.drill=e,t.light=Mt(10476799,1.2,n,1.7,2.5,1.2)},greenhouse(n,t){Rn(n,5,!0),Y(ie(10,.5,6),y.panel,0,.25,0,n);let e=Y(new Wt(3,3,10,20,1,!1,0,Math.PI),y.glass,0,.5,0,n);e.rotation.set(0,0,Math.PI/2),e.castShadow=!1;for(let i=0;i<5;i++)Y(new Dt(3,.08,6,20,Math.PI),y.white,-4.5+i*2.25,.5,0,n).rotation.y=Math.PI/2;for(let i=0;i<14;i++){let s=-4.2+i%7*1.4,r=i<7?-1.2:1.2,o=Y(new Fe(.45,1.2+i%3*.3,6),y.plant,s,1.2,r,n);o.castShadow=!1}Y(ie(9.6,.3,.5),y.dark,0,.7,-1.2,n),Y(ie(9.6,.3,.5),y.dark,0,.7,1.2,n),t.light=Mt(16737996,4,n,0,2.5,0)},fabricator(n,t){Rn(n,4,!0),Y(ie(7,3.6,5),y.panel,0,1.8,0,n),Y(ie(7.1,.4,5.1),y.orange,0,3.4,0,n),Y(ie(3,2.6,.1),y.dark,0,1.3,2.52,n);let e=new ft;e.position.set(2.2,3.6,0),n.add(e),Y(jt(.35,.45,.6),y.metal,0,.3,0,e);let i=Y(ie(.3,2.2,.3),y.orange,0,1.4,0,e),s=Y(ie(.25,1.6,.25),y.metal,0,2.4,.6,e);s.rotation.x=.9,t.arm=e,t.spark=Mt(16764006,1.2,n,2.2,5.7,1.2),Y(ie(1.2,1.2,1.2),y.dark,-2.4,.6,3.2,n),Y(ie(1,1,1),y.dark,-1.1,.5,3.1,n)},turret(n,t){Rn(n,1.8),Y(jt(1.4,1.8,1.2,12),y.metal,0,.6,0,n),Y(jt(.5,.7,1.2,10),y.dark,0,1.8,0,n);let e=new ft;e.position.y=2.7,n.add(e),Y(ie(1.6,1,1.8),y.white,0,0,0,e),Y(ie(1.65,.2,1.85),y.orange,0,.35,0,e),Y(jt(.12,.12,2.2,8),y.dark,-.4,0,-1.6,e).rotation.x=Math.PI/2,Y(jt(.12,.12,2.2,8),y.dark,.4,0,-1.6,e).rotation.x=Math.PI/2,t.eye=Mt(3401471,.9,e,0,.1,-.95),t.head=e},reactor(n,t){Rn(n,5.2),Y(jt(5,5.2,1.4,24),y.panel,0,.7,0,n);let e=Y(new Bt(2,20,14),y.cyan,0,4.2,0,n);e.castShadow=!1;let i=Y(new Dt(3.2,.35,10,32),y.white,0,4.2,0,n),s=Y(new Dt(3.2,.35,10,32),y.white,0,4.2,0,n);s.rotation.x=Math.PI/2;for(let r=0;r<4;r++){let o=r*Math.PI/2;Y(ie(.6,3,.6),y.metal,Math.cos(o)*3.6,2.2,Math.sin(o)*3.6,n)}t.core=e,t.r1=i,t.r2=s,t.light=Mt(3401471,9,n,0,4.2,0)},beacon(n,t){let e=Y(jt(7,7.3,.6,8),y.found,0,0,0,n);Y(jt(7.3,7.6,4,8),y.found,0,-2.3,0,n).castShadow=!1,Y(new fn(4.2,4.8,32),y.orange,0,.32,0,n).rotation.x=-Math.PI/2,Y(new fn(1.5,2,4),y.white,0,.32,0,n).rotation.x=-Math.PI/2,t.lights=[];for(let i=0;i<8;i++){let s=i*Math.PI/4+Math.PI/8;t.lights.push(Mt(16755251,1.2,n,Math.cos(s)*6.6,.5,Math.sin(s)*6.6))}Y(jt(.18,.3,9,8),y.metal,8.6,4.2,0,n),Y(ie(1.6,.1,1.2),y.white,8.6,8.7,0,n).rotation.z=.4,t.tip=Mt(16724016,2,n,8.6,9.2,0),e.castShadow=!1},lamp(n,t){Y(jt(.4,.5,.4,8),y.found,0,0,0,n),Y(jt(.08,.1,4.2,6),y.metal,0,2.1,0,n),Y(ie(.6,.2,.6),y.dark,0,4.3,0,n);let e=Y(new Bt(.2,8,6),y.lamp,0,4.15,0,n);e.castShadow=!1,t.glow=Mt(16767392,3,n,0,4.1,0)},terraformer(n,t){Rn(n,7),Y(jt(7,7.5,2,6),y.panel,0,1,0,n),Y(jt(2.5,4.5,26,6),y.white,0,15,0,n);for(let i=0;i<3;i++)Y(jt(4.6-i*.7,4.6-i*.7,.8,6),y.orange,0,6+i*8,0,n);t.rings=[];for(let i=0;i<3;i++){let s=Y(new Dt(6-i*1.2,.25,8,40),y.cyan,0,10+i*8,0,n);s.castShadow=!1,t.rings.push(s)}for(let i=0;i<6;i++){let s=i*Math.PI/3,r=Y(ie(1.2,10,1.2),y.metal,Math.cos(s)*6,5,Math.sin(s)*6,n);r.rotation.y=-s}let e=Y(new Wt(.6,1.4,400,12,1,!0),new Yt({color:6743807,transparent:!0,opacity:0,blending:fe,depthWrite:!1,side:Ge}),0,228,0,n);e.castShadow=!1,e.receiveShadow=!1,t.beam=e,t.top=Mt(6743807,10,n,0,28,0)}};var Wm=[16751162,3850495,8257418,16740277,16769354].map(n=>new pt({color:1118481,emissive:n,emissiveIntensity:.6,roughness:.1,metalness:.6})),$m=[15525596,14278116,15259332].map(n=>new pt({color:n,roughness:.7}));function Ym(n){let t=new ft,e=$m[n%$m.length],i=Wm[n%Wm.length],s=(g,v,x,m,_,E=t)=>{let M=new lt(g,v);return M.position.set(x,m,_),M.castShadow=!0,E.add(M),M},r=new gs([[0,0],[.2,0],[.24,.12],[.27,.42],[.25,.55],[.12,.62],[0,.62]].map(([g,v])=>new nt(g,v)),12),o=s(r,e,0,.72,0);o.scale.z=.8,s(new Dt(.2,.04,6,16),y.orange,0,.77,0).rotation.x=Math.PI/2,s(new Wt(.16,.18,.06,12),y.dark,0,1.36,0);let a=s(new Bt(.21,16,12),e,0,1.58,0),l=s(new Bt(.19,16,10,Math.PI*.12,Math.PI*.76,Math.PI*.28,Math.PI*.4),i,0,1.58,.035);s(new Gt(.02,.12,.02),y.metal,.12,1.82,-.05).rotation.z=-.3,s(new Gt(.36,.42,.18),y.panel,0,1.08,-.24),s(new Gt(.3,.06,.19),y.orange,0,1.25,-.24),Mt(9306032,.25,t,.12,.96,-.34);let c=(g,v,x,m,_)=>{let E=new ft;E.position.set(g,v,0),t.add(E);let M=s(new Ac(m,x,4,8),e,0,-x/2-m,0,E);return s(new Wt(m*1.15,m*1.15,.05,8),_?y.orange:y.dark,0,-x*.45,0,E),_?s(new Gt(m*2.4,.1,m*3.4),y.dark,0,-x-m*1.6,.04,E):s(new Bt(m*1.2,8,6),y.dark,0,-x-m*1.6,0,E),E},u=c(-.11,.74,.5,.075,!0),d=c(.11,.74,.5,.075,!0),f=c(-.33,1.27,.42,.06,!1),p=c(.33,1.27,.42,.06,!1);return f.rotation.z=-.12,p.rotation.z=.12,{group:t,legL:u,legR:d,armL:f,armR:p,body:o,head:a,visor:l}}var pS=new pt({color:ht.enemy[0],roughness:.3,metalness:.6,flatShading:!0,emissive:1049856}),YE=new pt({color:ht.enemy[1],emissive:ht.enemy[2],emissiveIntensity:.8,roughness:.2,flatShading:!0}),ZE=new Yt({color:16764992});function KE(n,t,e){let i=document.createElement("canvas");i.width=128,i.height=256;let s=i.getContext("2d");s.fillStyle="#000",s.fillRect(0,0,128,256);let r=e,o=()=>(r=(r*9301+49297)%233280,r/233280),a=128/n,l=256/t;for(let u=0;u<n;u++)for(let d=0;d<t;d++)o()<.65&&(s.fillStyle=o()<.8?"#ffd9a0":"#a0d8ff",s.fillRect(u*a+a*.2,d*l+l*.25,a*.6,l*.5));let c=new on(i);return c.colorSpace=ye,c}var Ja=[];function Xm(n){let t=new pt({color:14210252,roughness:.5,metalness:.2,emissive:16777215,emissiveMap:KE(6,14,n),emissiveIntensity:.2});return Ja.push(t),t}var qm=[Xm(7),Xm(31)],Ka;function Zm(){if(Ka)return Ka;let n=document.createElement("canvas");n.width=256,n.height=128;let t=n.getContext("2d");t.fillStyle="#0a3a6a",t.fillRect(0,0,256,128),t.strokeStyle="rgba(127,230,255,.35)",t.lineWidth=1;for(let i=0;i<256;i+=16)t.beginPath(),t.moveTo(i,0),t.lineTo(i,128),t.stroke();for(let i=0;i<128;i+=16)t.beginPath(),t.moveTo(0,i),t.lineTo(256,i),t.stroke();t.fillStyle="#7fffc8";let e=[[40,40,22,16],[52,62,10,20],[70,86,12,18],[118,36,16,12],[128,56,14,26],[150,34,40,18],[176,52,22,14],[206,88,16,10],[96,24,12,8],[190,22,20,8]];for(let[i,s,r,o]of e)t.beginPath(),t.ellipse(i,s,r,o,.3,0,Math.PI*2),t.fill();return t.fillStyle="#ffffff",t.fillRect(0,0,256,6),t.fillRect(0,122,256,6),Ka=new on(n),Ka.colorSpace=ye,Ka}Object.assign(Bn,{plaza(n,t){Rn(n,7.2),Y(jt(7.2,7.4,.4,8),y.panel,0,.2,0,n),Y(new fn(5.4,5.8,48),y.orange,0,.42,0,n).rotation.x=-Math.PI/2,Y(jt(1.6,2,1.1,16),y.white,0,.95,0,n),Y(jt(1.65,1.65,.15,16),y.cyan,0,1.52,0,n);for(let r=0;r<6;r++){let o=r*Math.PI/3+Math.PI/6,a=Y(ie(2.4,.4,.7),y.panel,Math.cos(o)*5.2,.6,Math.sin(o)*5.2,n);a.rotation.y=-o+Math.PI/2,Y(ie(.12,3.2,.12),y.metal,Math.cos(o+.5)*6.6,1.8,Math.sin(o+.5)*6.6,n),Mt(16767392,1.1,n,Math.cos(o+.5)*6.6,3.5,Math.sin(o+.5)*6.6)}let e=new lt(new Bt(1.5,32,20),new Yt({map:Zm(),transparent:!0,opacity:.75,blending:fe,depthWrite:!1}));e.position.y=4,n.add(e);let i=Mt(6736127,5,n,0,4,0),s=new lt(new Wt(1.2,1.6,2.4,20,1,!0),new Yt({color:8382207,transparent:!0,opacity:.12,blending:fe,depthWrite:!1,side:Ge}));s.position.y=2.7,n.add(s),t.earth=e,t.halo=i},drones(n,t){Rn(n,3.8,!0),Y(ie(7.4,.5,7.4),y.panel,0,.25,0,n);for(let[s,r]of[[-1.9,-1.9],[1.9,-1.9],[-1.9,1.9],[1.9,1.9]])Y(jt(1.1,1.1,.1,16),y.dark,s,.55,r,n),Y(new fn(.75,.9,20),y.orange,s,.62,r,n).rotation.x=-Math.PI/2;Y(ie(1.2,4,1.2),y.white,3,2.2,3,n),Y(ie(1.25,.3,1.25),y.orange,3,3.6,3,n);let e=new ft;e.position.set(3,4.6,3),n.add(e);let i=Y(new Bt(.9,12,6,0,Math.PI*2,0,Math.PI/3),y.white,0,0,0,e);i.rotation.x=Math.PI*.6,Y(jt(.05,.05,.8,4),y.metal,0,.1,.2,e).rotation.x=1.1,t.dish=e,t.light=Mt(8382207,1.4,n,3,5.4,3)},apartment(n,t){Rn(n,4.4,!0),Y(ie(8,1,8),y.panel,0,.5,0,n),Y(ie(5,18,5),qm[0],-1.2,10,-1.2,n),Y(ie(4,12,4),qm[1],2,7,2,n),Y(ie(5.2,.5,5.2),y.orange,-1.2,19.2,-1.2,n),Y(ie(4.2,.5,4.2),y.orange,2,13.2,2,n),Y(jt(.1,.1,4,6),y.metal,-1.2,21.4,-1.2,n),t.tip=Mt(16728128,1.6,n,-1.2,23.5,-1.2),Y(new Bt(1.6,16,8,0,Math.PI*2,0,Math.PI/2),y.glass,2,13.4,2,n).castShadow=!1},vfarm(n,t){Rn(n,4),Y(jt(3.8,4,1,16),y.panel,0,.5,0,n);let e=Y(jt(3.2,3.2,14,16),y.glass,0,8,0,n);e.castShadow=!1;for(let i=0;i<6;i++){Y(jt(3,3,.25,16),y.white,0,2+i*2.3,0,n);for(let s=0;s<7;s++){let r=s/7*Math.PI*2+i,o=Y(new Fe(.4,.9,5),y.plant,Math.cos(r)*2.2,2.6+i*2.3,Math.sin(r)*2.2,n);o.castShadow=!1}}Y(new Bt(3.2,16,8,0,Math.PI*2,0,Math.PI/2),y.glass,0,15,0,n).castShadow=!1,t.light=Mt(16737996,9,n,0,8,0)},lifehub(n,t){Rn(n,5.5),Y(jt(5.5,5.8,1.2,20),y.panel,0,.6,0,n);let e=Y(new Bt(4.5,20,12,0,Math.PI*2,0,Math.PI/2),y.white,0,1.2,0,n);Y(new Dt(4.6,.3,8,32),y.orange,0,1.6,0,n).rotation.x=Math.PI/2;for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4;Y(jt(.9,.9,5,12),y.white,Math.cos(r)*5.2,2.5,Math.sin(r)*5.2,n),Y(jt(.95,.95,.4,12),y.cyan,Math.cos(r)*5.2,4.2,Math.sin(r)*5.2,n)}let i=new ft;i.position.y=6,n.add(i);for(let s=0;s<3;s++){let r=Y(ie(4,.1,.6),y.dark,0,0,0,i);r.rotation.y=s*Math.PI/3}t.fan=i,t.light=Mt(6741503,5,n,0,6,0)},launch(n,t){Rn(n,9,!0),Y(ie(18,1.2,18),y.found,0,.6,0,n),Y(new fn(5,6,32),y.orange,0,1.25,0,n).rotation.x=-Math.PI/2;for(let[s,r]of[[6,-1.5],[6,1.5],[9,-1.5],[9,1.5]])Y(ie(.4,34,.4),y.metal,s,18,r,n);for(let s=0;s<8;s++)Y(ie(3.4,.25,3.4),y.metal,7.5,4+s*4,0,n);Y(ie(4,.5,.8),y.orange,4.2,26,0,n);let e=new ft;e.position.y=1.2,n.add(e),Y(jt(2.4,2.8,24,20),y.white,0,13,0,e),Y(new Fe(2.4,7,20),y.white,0,28.5,0,e),Y(jt(2.45,2.45,1.2,20),y.orange,0,20,0,e),Y(jt(2.45,2.45,.6,20),y.dark,0,8,0,e);for(let s=0;s<4;s++){let r=s*Math.PI/2,o=Y(ie(.4,6,3),y.panel,Math.cos(r)*2.8,3.5,Math.sin(r)*2.8,e);o.rotation.y=-r}for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4;Y(jt(.8,1.2,2,10),y.dark,Math.cos(r)*1.2,.6,Math.sin(r)*1.2,e)}let i=new lt(new Fe(3,16,16,1,!0),y.flame);i.rotation.x=Math.PI,i.position.y=-8,i.visible=!1,e.add(i),t.ship=e,t.flame=i,t.tip=Mt(16777215,3,e,0,32.5,0)},monument(n,t){Rn(n,6),Y(jt(6,6.5,1.5,8),y.panel,0,.75,0,n),Y(jt(4.5,5,1,8),y.white,0,2,0,n);let e=Y(new Wt(.6,1.8,30,4),y.white,0,17,0,n);e.rotation.y=Math.PI/4,t.rings=[];let i=[new pt({color:3346688,emissive:16742954,emissiveIntensity:2}),new pt({color:8755,emissive:6743807,emissiveIntensity:2}),new pt({color:1127168,emissive:10551104,emissiveIntensity:2})];for(let s=0;s<3;s++){let r=Y(new Dt(4-s*.6,.18,8,40),i[s],0,14+s*5,0,n);r.castShadow=!1,t.rings.push(r)}t.top=Mt(16777215,8,n,0,33,0)}});function Km(){let n=new ft,t=Y(new Bt(.42,14,8),y.white,0,0,0,n);t.scale.y=.55,Y(jt(.44,.44,.08,14),y.orange,0,0,0,n);let e=[];for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4,o=Math.cos(r)*.7,a=Math.sin(r)*.7;Y(ie(.6,.05,.08),y.dark,o*.55,0,a*.55,n).rotation.y=-r;let l=Y(jt(.28,.28,.02,10),new Yt({color:2236962,transparent:!0,opacity:.45}),o,.08,a,n);e.push(l)}let i=Mt(8382207,.9,n,0,-.2,0);return{group:n,rotors:e,eye:i}}var pf={crystal:YE,eye:ZE};Bn._earthTex=Zm;var en=1400,Zt=en/2,sr=400,gf=en/sr,Gi=sr+1,ja=Gc(ht.seed),Xc=Gc(ht.seed*7+3),Jm=Gc(ht.seed+42),vs=[],Vi,ir,qc,Ur,$c;function JE(){let n=Kn(ht.seed);for(vs.push({x:150,z:-120,r:70,depth:16,rim:6});vs.length<ht.craters;){let t=(n()-.5)*(en-260),e=(n()-.5)*(en-260);if(Math.hypot(t,e)<130)continue;let i=10+Math.pow(n(),2.2)*85;vs.push({x:t,z:e,r:i,depth:i*(.18+n()*.12),rim:i*(.05+n()*.06)})}}var jE=0;function jm(n,t){let e=df(ja,n*.0016,t*.0016,5)*ht.hills,i=1-Math.abs(Xc(n*.0042,t*.0042));e+=i*i*i*ht.ridges,e+=df(Jm,n*.025,t*.025,3)*ht.detail;for(let s of vs){let r=n-s.x,o=t-s.z,a=r*r+o*o;if(a>s.r*s.r*4)continue;let l=Math.sqrt(a)/s.r;l<1&&(e-=s.depth*(1-l*l)),e+=s.rim*Math.exp(-(((l-1)/.28)**2))}return e}var Qm=0;function QE(n,t){let e=jm(n,t)-Qm,i=Math.hypot(n,t);e=Ae(jE+Jm(n*.02,t*.02)*.6,e,kn(45,150,i));let s=Math.max(Math.abs(n),Math.abs(t)),r=Zt-200;if(s>r){let o=(s-r)/200;e+=o*o*160*(.65+.35*ja(n*.01,t*.01))}return e}function xt(n,t){let e=Ti((n+Zt)/gf,0,sr-.001),i=Ti((t+Zt)/gf,0,sr-.001),s=Math.floor(e),r=Math.floor(i),o=e-s,a=i-r,l=Vi[r*Gi+s],c=Vi[r*Gi+s+1],u=Vi[(r+1)*Gi+s],d=Vi[(r+1)*Gi+s+1];return o+a<1?l+(c-l)*o+(u-l)*a:d+(u-d)*(1-o)+(c-d)*(1-a)}function Nr(n,t,e=2){let i=xt(n,t);return Math.max(Math.abs(xt(n+e,t)-i),Math.abs(xt(n-e,t)-i),Math.abs(xt(n,t+e)-i),Math.abs(xt(n,t-e)-i))/e}function Yc(n,t,e=60){let i=0;for(let s=.2;s<=e;s+=.25){let r=n.x+t.x*s,o=n.y+t.y*s,a=n.z+t.z*s;if(o<xt(r,a)){let l=i,c=s;for(let u=0;u<8;u++){let d=(l+c)/2;n.y+t.y*d<xt(n.x+t.x*d,n.z+t.z*d)?c=d:l=d}return{dist:c,point:new T(n.x+t.x*c,n.y+t.y*c,n.z+t.z*c)}}i=s}return null}function tg(n){JE(),Qm=jm(0,0),Vi=new Float32Array(Gi*Gi),Ur=new On(en,en,sr,sr),Ur.rotateX(-Math.PI/2);let t=Ur.attributes.position;for(let s=0;s<t.count;s++){let r=QE(t.getX(s),t.getZ(s));t.setY(s,r),Vi[s]=r}ir=new Float32Array(t.count*3);let e=new yt;for(let s=0;s<t.count;s++){let r=t.getX(s),o=t.getZ(s),a=Vi[s],l=s%Gi,c=s/Gi|0,u=Vi[c*Gi+Math.min(l+1,sr)]-a,d=Vi[Math.min(c+1,sr)*Gi+l]-a,f=Ti(Math.hypot(u,d)/gf*1.4,0,1),p=ja(r*.012,o*.012)*.5+.5,g=Xc(r*.08,o*.08)*.5+.5,v=ht.ground.a,x=ht.ground.b,m=ht.ground.steep,_=ht.ground.low,E=Ae(v[0],x[0],p),M=Ae(v[1],x[1],p),D=Ae(v[2],x[2],p);E*=.9+g*.18,M*=.9+g*.16,D*=.9+g*.14,E=Ae(E,m[0],f),M=Ae(M,m[1],f),D=Ae(D,m[2],f);let A=kn(-4,-16,a);if(E=Ae(E,_[0],A*.6),M=Ae(M,_[1],A*.6),D=Ae(D,_[2],A*.6),ht.id==="europa"){let L=Math.abs(Xc(r*.006,o*.006));if(L<.05){let I=1-L/.05;E=Ae(E,.55,I*.7),M=Ae(M,.32,I*.7),D=Ae(D,.24,I*.7)}}e.setRGB(E,M,D,ye),ir[s*3]=e.r,ir[s*3+1]=e.g,ir[s*3+2]=e.b}qc=new tn(ir.slice(),3),Ur.setAttribute("color",qc),Ur.computeVertexNormals();let i=new pt({vertexColors:!0,roughness:.93,metalness:0});return i.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},$c=new lt(Ur,i),$c.receiveShadow=!0,n.add($c),tb(n),$c}function tb(n){let t=Kn(99),e=new oi(1,0),i=e.attributes.position;for(let p=0;p<i.count;p++){let g=.75+t()*.5;i.setXYZ(p,i.getX(p)*g,i.getY(p)*g*.8,i.getZ(p)*g)}e.computeVertexNormals();let s=2600,r=new Ys(e,new pt({color:ht.rock,roughness:ht.id==="europa"?.35:.92,flatShading:!0,map:Bi.map,bumpMap:Bi.bumpMap,bumpScale:3}),s);r.castShadow=!0,r.receiveShadow=!0;let o=new ve,a=new hn,l=new T,c=new T,u=new _n,d=new yt,f=0;for(;f<s;){let p=(t()-.5)*(en-120),g=(t()-.5)*(en-120);if(Math.hypot(p,g)<22||ja(p*.01,g*.01)<-.1&&t()<.7)continue;let m=t()<.06?1.8+t()*2.5:.2+Math.pow(t(),2)*1.2;l.set(m*(.8+t()*.6),m*(.6+t()*.5),m*(.8+t()*.6)),u.set(t()*.5,t()*Math.PI*2,t()*.5),a.setFromEuler(u),c.set(p,xt(p,g)+l.y*.25,g),o.compose(c,a,l),r.setMatrixAt(f,o),d.setHSL(ht.rockHSL[0]+t()*.02,ht.rockHSL[1]+t()*.2,ht.rockHSL[2]+t()*.14),r.setColorAt(f,d),m>1&&h.colliders.add({x:p,z:g,r:Math.max(l.x,l.z)*.85,kind:"rock"}),f++}n.add(r),ht.id==="kepler"&&ib(n,t)}var eb=new yt().setRGB(.3,.46,.2,ye),nb=new yt().setRGB(.46,.5,.26,ye),mf=new yt().setRGB(.2,.38,.52,ye);function xf(n,t){let e=Ur.attributes.position,i=qc.array,s=60+t*520;for(let r=0;r<e.count;r++){let o=e.getX(r),a=e.getZ(r),l=Vi[r],c=0;for(let p of n){let g=Math.hypot(o-p.x,a-p.z);c=Math.max(c,kn(s,s*.55,g))}let u=ir[r*3],d=ir[r*3+1],f=ir[r*3+2];if(c>0){let p=Xc(o*.03,a*.03)*.5+.5,g=c*Ti(p*1.4-.1,0,1)*Ti(t*1.5,0,1),v=p>.6?eb:nb;if(u=Ae(u,v.r,g),d=Ae(d,v.g,g),f=Ae(f,v.b,g),l<-9&&t>.5){let x=c*kn(-9,-13,l)*kn(.5,1,t);u=Ae(u,mf.r,x),d=Ae(d,mf.g,x),f=Ae(f,mf.b,x)}}i[r*3]=u,i[r*3+1]=d,i[r*3+2]=f}qc.needsUpdate=!0}function eg(n=350){let t=document.createElement("canvas");t.width=t.height=n;let e=t.getContext("2d"),i=e.createImageData(n,n);for(let s=0;s<n;s++)for(let r=0;r<n;r++){let o=(r/n-.5)*en,a=(s/n-.5)*en,l=xt(o,a),c=xt(o+4,a+4)-l,u=Ti(.55+l*.006-c*.08,.15,1),d=(s*n+r)*4,f=ht.ground.b;i.data[d]=255*f[0]*u,i.data[d+1]=255*f[1]*u,i.data[d+2]=255*f[2]*u,i.data[d+3]=255}return e.putImageData(i,0,0),t}var yf=new pt({color:8010400,emissive:4259776,emissiveIntensity:.1,roughness:.6,flatShading:!0});function ib(n,t){let e=new Wt(.25,.45,1,6);e.translate(0,.5,0);let i=new Bt(1,8,5,0,Math.PI*2,0,Math.PI/2),s=900,r=new Ys(e,new pt({color:14209208,roughness:.8,flatShading:!0}),s),o=new Ys(i,yf,s);r.castShadow=o.castShadow=!0;let a=new ve,l=new hn,c=new T,u=new T,d=new yt,f=0;for(;f<s;){let p=(t()-.5)*(en-300),g=(t()-.5)*(en-300);if(Math.hypot(p,g)<50||ja(p*.008,g*.008)<.05||Nr(p,g,2)>.5)continue;let v=3+t()*9,x=1.5+t()*3,m=xt(p,g);c.set(1+v*.05,v,1+v*.05),u.set(p,m-.2,g),l.identity(),a.compose(u,l,c),r.setMatrixAt(f,a),c.set(x,x*.5,x),u.set(p,m+v-.3,g),a.compose(u,l,c),o.setMatrixAt(f,a),d.setHSL(.72+t()*.2,.6,.4+t()*.2),o.setColorAt(f,d),h.colliders.add({x:p,z:g,r:.6,kind:"flora"}),f++}n.add(r,o)}var Zc=6e3,Wi=60,rr,Qa,Mf,vf=new T(1e9,0,0),ng=new ve,ig=new hn,sg=new T,rg=new T,og=new _n;function ag(){let n=new oi(.12,0),t=new pt({color:16777215,roughness:.95,flatShading:!0,map:Bi.map});rr=new Ys(n,t,Zc),rr.receiveShadow=!0,rr.frustumCulled=!1;let e=Kn(31);Qa=new Float32Array(Zc*2),Mf=[];let i=new yt;for(let s=0;s<Zc;s++){Qa[s*2]=e()*Wi*2,Qa[s*2+1]=e()*Wi*2;let r=Math.pow(e(),3);Mf.push([.4+r*3.2,.25+e()*.6,.4+r*3,e()*6.28,e()*.6]),i.setHSL(ht.rockHSL[0]+e()*.03,ht.rockHSL[1]*(.5+e()*.5),Math.min(.75,ht.rockHSL[2]*(1.2+e()*.9))),rr.setColorAt(s,i)}h.scene.add(rr)}function lg(){if(!rr)return;let n=h.player.pos;if(Math.abs(n.x-vf.x)<3&&Math.abs(n.z-vf.z)<3)return;vf.copy(n);let t=n.x-Wi,e=n.z-Wi;for(let i=0;i<Zc;i++){let s=t+((Qa[i*2]-t)%(Wi*2)+Wi*2)%(Wi*2),r=e+((Qa[i*2+1]-e)%(Wi*2)+Wi*2)%(Wi*2),o=Mf[i];sg.set(o[0],o[0]*o[1],o[2]),og.set(o[4],o[3],0),ig.setFromEuler(og),rg.set(s,xt(s,r)+.02,r),ng.compose(rg,ig,sg),rr.setMatrixAt(i,ng)}rr.instanceMatrix.needsUpdate=!0}var sb=540,el,Go,ai,Vo,_f,nl,Ef,lr,il=(n,t,e)=>new yt().setRGB(n,t,e,ye),or=ht.sky,ar=n=>il(n[0],n[1],n[2]),$i={dayTop:ar(or.dayTop),dayHor:ar(or.dayHor),setTop:ar(or.setTop),setHor:ar(or.setHor),nightTop:ar(or.nightTop),nightHor:ar(or.nightHor),earthTop:il(.22,.44,.82),earthHor:il(.68,.8,.92),stormHor:ar(or.storm),halo:ar(or.halo)},Xi={},bf,cg,dg,Kc=null,hg=0,wf={mars:[.35,[.2,.9,.7],[.3,.5,1]],europa:[.6,[.4,.6,1],[.8,.4,1]],kepler:[1,[.3,1,.5],[.9,.3,.9]]}[ht.id],Ms;function rb(n){let t=new Wt(1700,1700,900,160,1,!0,-1.2,2.6);Ms=new lt(t,new rn({uniforms:{uT:{value:0},uI:{value:0},uC1:{value:new yt(...wf[1])},uC2:{value:new yt(...wf[2])}},vertexShader:`uniform float uT; varying vec2 vUv;
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
      }`,transparent:!0,blending:fe,depthWrite:!1,side:Ge,fog:!1})),Ms.position.y=700,Ms.rotation.y=2.2,Ms.frustumCulled=!1,Ms.renderOrder=-8,n.add(Ms)}var ob=il(.36,.42,.62),ab=il(.75,.65,.55),tl=new yt,ug=new yt,Ri=new T;function fg(n){lr=new rn({uniforms:{uTop:{value:new yt},uHor:{value:new yt},uSunDir:{value:new T(0,1,0)},uSunCol:{value:new yt(1,.95,.85)},uHalo:{value:new yt},uSunVis:{value:1}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`
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
      }`,side:Tn,depthWrite:!1}),el=new lt(new Bt(4e3,32,16),lr),el.frustumCulled=!1,el.renderOrder=-10,n.add(el),rb(n);let t=new Re,e=[],i=[];for(let o=0;o<2600;o++){let a=Math.random()*2-1,l=Math.random()*Math.PI*2,c=Math.sqrt(1-a*a);if(a<-.05)continue;e.push(c*Math.cos(l)*3500,a*3500,c*Math.sin(l)*3500);let u=.35+Math.random()*.45,d=Math.random();i.push(u*(d>.8?1:.85),u*.9,u*(d<.2?1:.95))}e.push(-1800,1500,-2400),i.push(.5,.75,1.4),t.setAttribute("position",new te(e,3)),t.setAttribute("color",new te(i,3)),Go=new si(t,new Yn({size:3,map:Jn(),sizeAttenuation:!1,vertexColors:!0,transparent:!0,depthWrite:!1,fog:!1})),Go.frustumCulled=!1,Go.renderOrder=-9,n.add(Go);let s=new pt({color:9076080,roughness:1,fog:!1,flatShading:!0});if(nl=new lt(new Nn(60,1),s),nl.scale.set(1.3,.9,1),Ef=new lt(new Nn(24,1),s),ht.extras==="moons"&&n.add(nl,Ef),ht.extras==="jupiter"){let o=document.createElement("canvas");o.width=512,o.height=256;let a=o.getContext("2d"),l=["#e8d8c0","#c89a70","#f0e6d4","#b07850","#e0c8a8","#9a6a48","#efe2cc","#c8a07a","#e6d6bc"];for(let p=0;p<256;p++)a.fillStyle=l[Math.floor(p/256*l.length*2+Math.sin(p*.3)*.6)%l.length],a.fillRect(0,p,512,1);a.globalAlpha=.25;for(let p=0;p<400;p++)a.fillStyle=l[p%l.length],a.fillRect(Math.random()*512,Math.random()*256,30+Math.random()*80,2);a.globalAlpha=1,a.fillStyle="#b8583a",a.beginPath(),a.ellipse(330,165,34,16,0,0,Math.PI*2),a.fill();let c=new on(o);c.colorSpace=ye;let u=new lt(new Bt(900,48,32),new Yt({map:c,fog:!1}));u.rotation.z=.06;let d=new lt(new Bt(905,48,32,Math.PI*.55,Math.PI),new Yt({color:0,transparent:!0,opacity:.55,fog:!1}));u.add(d);let f=new lt(new Nn(30,2),new Yt({color:15257712,fog:!1}));n.add(u,f),Xi={jup:u,io:f}}if(ht.extras==="twinsuns"){let o=new Fi(new Ei({map:Jn(),color:16751200,transparent:!0,blending:fe,depthWrite:!1,fog:!1}));o.scale.set(500,500,1);let a=new lt(new fn(700,1100,64),new Yt({color:14207231,transparent:!0,opacity:.35,side:Ge,fog:!1,depthWrite:!1})),l=new lt(new Bt(420,32,24),new Yt({color:9075408,fog:!1}));l.add(a),a.rotation.x=1.2,n.add(o,l),Xi={s2:o,gas:l}}ai=new Oi(16773341,3),ai.castShadow=!0,ai.shadow.mapSize.set(h.hiShadows?4096:2048,h.hiShadows?4096:2048);let r=ai.shadow.camera;r.left=-70,r.right=70,r.top=70,r.bottom=-70,r.near=1,r.far=400,ai.shadow.bias=-4e-4,ai.shadow.normalBias=.6,n.add(ai,ai.target),Vo=new Js(16765616,5909530,1),_f=new Lc(4213360,.3),n.add(Vo,_f),n.fog=new Mc(14196848,.0016),bf=new zi,cg=new lt(new Bt(400,32,16),lr),bf.add(cg),dg=new Lo(h.renderer)}function sl(n,t){let e=h.time,i=e.t;e.t+=n/sb*(e.elevation<0?1.5:1),e.t>=1&&(e.t-=1),i<.25&&e.t>=.25&&(e.day++,e.dawn=!0);let s=(e.t-.25)*Math.PI*2;Ri.set(Math.cos(s),Math.sin(s),.35).normalize();let r=Ri.y;e.elevation=r,e.night=kn(.05,-.18,r);let o=kn(0,1,h.terraform),a=h.storm,l=kn(-.05,.35,r),c=1-Math.abs(Ti((r-.05)/.3,-1,1));tl.copy($i.dayTop).lerp($i.earthTop,o),ug.copy($i.dayHor).lerp($i.earthHor,o);let u=lr.uniforms.uTop.value,d=lr.uniforms.uHor.value;u.copy($i.nightTop).lerp($i.setTop,kn(-.25,0,r)).lerp(tl,l),d.copy($i.nightHor).lerp($i.setHor,kn(-.25,0,r)).lerp(ug,l),a>0&&(tl.copy($i.stormHor).multiplyScalar(.25+.75*(1-e.night)),u.lerp(tl,a*.85),d.lerp(tl,a)),lr.uniforms.uHalo.value.copy($i.halo).multiplyScalar(Ti(c,0,1)*(1-o*.5)*(1-a)),lr.uniforms.uSunDir.value.copy(Ri),lr.uniforms.uSunVis.value=kn(-.08,.02,r)*(1-a*.85),el.position.copy(t),Go.position.copy(t),Ms.position.set(t.x,t.y+700,t.z),Ms.material.uniforms.uT.value=performance.now()*.001,Ms.material.uniforms.uI.value=wf[0]*e.night*(1-a)*(.75+.25*Math.sin(performance.now()*7e-5+e.day)),Go.material.opacity=Math.max(e.night,ht.id==="europa"?.85:0)*(1-a);let f=h.time.t*Math.PI*6,p=-h.time.t*Math.PI*2+2;if(nl.position.set(t.x+Math.cos(f)*2600,t.y+Math.sin(f)*1700+300,t.z-1300),nl.lookAt(t),Ef.position.set(t.x+Math.cos(p)*2800,t.y+Math.sin(p)*2200,t.z+1600),Xi.jup){Xi.jup.position.set(t.x-1800,t.y+650,t.z-2600),Xi.jup.rotation.y+=4e-5;let x=h.time.t*Math.PI*8;Xi.io.position.set(t.x-1800+Math.cos(x)*1400,t.y+650+Math.sin(x)*300,t.z-2600+Math.sin(x)*1400)}Xi.s2&&(Xi.s2.position.copy(t).addScaledVector(new T(Ri.x*.8-.3,Ri.y*.9-.05,Ri.z+.4).normalize(),3e3),Xi.s2.material.opacity=kn(-.2,.05,r)*.9,Xi.gas.position.set(t.x+1600,t.y+1100,t.z+2400));let g=kn(-.04,.25,r);ai.intensity=3*g*(1-a*.6),ai.color.setRGB(1,Ae(.7,.93,g),Ae(.55,.85,g)),ai.position.copy(t).addScaledVector(Ri,200),ai.target.position.copy(t),Vo.intensity=Ae(.45,.8,l)*(1-a*.3),Vo.color.copy(d).lerp(u,.3).lerp(ob,e.night*.85),ht.id==="europa"&&Vo.color.lerp(ab,.6),Vo.groundColor.setRGB(Ae(.05,.38,l),Ae(.04,.18,l),Ae(.05,.1,l)),_f.intensity=Ae(.8,.2,l),h.scene.fog.color.copy(d),h.scene.fog.density=Ae(Ae(.0016,.0032,e.night),.03,a)*(ht.id==="europa"?.55:1);let v=performance.now();if(v-hg>4e3||!Kc){hg=v;let x=Kc;Kc=dg.fromScene(bf,.04,1,1e3),h.scene.environment=Kc.texture,h.scene.environmentIntensity=Ae(.85,.35,e.night),x&&x.dispose()}h.renderer.toneMappingExposure=Ae(1,1.4,e.night)}function Sf(){let n=Math.floor(h.time.t*24.66),t=Math.floor((h.time.t*24.66-n)*60);return`${ht.name} \xB7 \u7B2C ${h.time.day} \u65E5 \xB7 ${String(n).padStart(2,"0")}:${String(t).padStart(2,"0")}`}var Wo=[],lb=new Ks(.22,0),rl=class{constructor(t,e,i,s){this.max=e,this.n=0,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.base=new Float32Array(e*4),this.grav=new Float32Array(e),this.drag=new Float32Array(e);let r=new Re;this.pa=new tn(this.pos,3),this.ca=new tn(this.col,4),this.pa.setUsage(rf),this.ca.setUsage(rf),r.setAttribute("position",this.pa),r.setAttribute("color",this.ca),this.mat=new Yn({size:s,map:Jn(),vertexColors:!0,transparent:!0,depthWrite:!1,blending:i?fe:Hi,sizeAttenuation:!0}),this.points=new si(r,this.mat),this.points.frustumCulled=!1,t.add(this.points)}emit(t,e,i,s,r,o,a,l,c,u,d,f=0,p=0){let g=this.n<this.max?this.n++:Math.floor(Math.random()*this.max);this.pos[g*3]=t,this.pos[g*3+1]=e,this.pos[g*3+2]=i,this.vel[g*3]=s,this.vel[g*3+1]=r,this.vel[g*3+2]=o,this.base[g*4]=a,this.base[g*4+1]=l,this.base[g*4+2]=c,this.base[g*4+3]=u,this.life[g]=d,this.maxLife[g]=d,this.grav[g]=f,this.drag[g]=p}update(t){let e=this.n;for(let i=0;i<e;i++){if(this.life[i]-=t,this.life[i]<=0){if(e--,i!==e){for(let o=0;o<3;o++)this.pos[i*3+o]=this.pos[e*3+o],this.vel[i*3+o]=this.vel[e*3+o];for(let o=0;o<4;o++)this.base[i*4+o]=this.base[e*4+o];this.life[i]=this.life[e],this.maxLife[i]=this.maxLife[e],this.grav[i]=this.grav[e],this.drag[i]=this.drag[e],i--}continue}let s=1-this.drag[i]*t;this.vel[i*3]*=s,this.vel[i*3+2]*=s,this.vel[i*3+1]=this.vel[i*3+1]*s-this.grav[i]*t,this.pos[i*3]+=this.vel[i*3]*t,this.pos[i*3+1]+=this.vel[i*3+1]*t,this.pos[i*3+2]+=this.vel[i*3+2]*t;let r=this.life[i]/this.maxLife[i];this.col[i*4]=this.base[i*4],this.col[i*4+1]=this.base[i*4+1],this.col[i*4+2]=this.base[i*4+2],this.col[i*4+3]=this.base[i*4+3]*Math.min(1,r*2.5)}this.n=e,this.points.geometry.setDrawRange(0,e),this.pa.needsUpdate=!0,this.ca.needsUpdate=!0}},kr,jc,Hr,$o,Tf;function pg(n){kr=new rl(n,3e3,!0,.35),Tf=new rl(n,4e3,!0,1.3),jc=new rl(n,2500,!1,1.6);let t=new Re,e=new Float32Array(1500*3);for(let r=0;r<e.length;r++)e[r]=(Math.random()-.5)*80;t.setAttribute("position",new tn(e,3)),Hr=new si(t,new Yn({size:.25,map:Jn(),color:16765088,transparent:!0,opacity:.5,depthWrite:!1})),Hr.frustumCulled=!1,n.add(Hr);let i=new Re,s=new Float32Array(3e3*3);for(let r=0;r<s.length;r++)s[r]=(Math.random()-.5)*70;i.setAttribute("position",new tn(s,3)),$o=new si(i,new Yn({size:.18,map:Jn(),color:12574975,transparent:!0,opacity:0,depthWrite:!1})),$o.frustumCulled=!1,n.add($o)}var ut={debris(n,t,e=8,i=7,s=1){for(let r=0;r<e;r++){if(Wo.length>160){let u=Wo.shift();h.scene.remove(u.m)}let o=new lt(lb,t);o.castShadow=!0;let a=s*(.5+Math.random()*.9);o.scale.set(a,a*(1+Math.random()),a),o.position.copy(n),h.scene.add(o);let l=Math.random()*Math.PI*2,c=.4+Math.random()*.8;Wo.push({m:o,v:new T(Math.cos(l)*i*(1-c*.5),i*c,Math.sin(l)*i*(1-c*.5)),w:new T(Math.random()*10,Math.random()*10,Math.random()*10),life:3+Math.random()*2,s:a})}},spark(n,t=[1,.6,.2],e=6,i=4,s=.5){for(let r=0;r<e;r++)kr.emit(n.x,n.y,n.z,(Math.random()-.5)*i,Math.random()*i,(Math.random()-.5)*i,t[0],t[1],t[2],1,s*(.5+Math.random()),6,1)},burst(n,t=[1,.5,.2],e=40,i=9){for(let s=0;s<e;s++){let r=Math.random()*2-1,o=Math.random()*6.283,a=Math.sqrt(1-r*r),l=i*(.4+Math.random()*.6);kr.emit(n.x,n.y,n.z,a*Math.cos(o)*l,r*l,a*Math.sin(o)*l,t[0],t[1],t[2],1,.4+Math.random()*.6,4,2)}},dustPuff(n,t=10,e=2,i=[.72,.45,.3]){for(let s=0;s<t;s++)jc.emit(n.x+(Math.random()-.5)*e,n.y+Math.random()*.5,n.z+(Math.random()-.5)*e,(Math.random()-.5)*3,Math.random()*1.5,(Math.random()-.5)*3,i[0],i[1],i[2],.55,1.2+Math.random(),-.2,1.5)},ring(n,t,e=60,i=[.72,.45,.3]){for(let s=0;s<e;s++){let r=s/e*6.283,o=6+Math.random()*6;jc.emit(n.x+Math.cos(r)*t,n.y+.4,n.z+Math.sin(r)*t,Math.cos(r)*o,.5+Math.random(),Math.sin(r)*o,i[0],i[1],i[2],.6,1.5+Math.random(),-.1,1.2)}},firework(n,t,e,i,s){Tf.emit(n.x,n.y,n.z,t,e,i,s[0]*1.6,s[1]*1.6,s[2]*1.6,1,1.6+Math.random()*.8,3,1.4)},trail(n,t,e=1){kr.emit(n.x,n.y,n.z,(Math.random()-.5)*.4,(Math.random()-.5)*.4,(Math.random()-.5)*.4,t[0]*e,t[1]*e,t[2]*e,1,.18,0,0)},flame(n,t=1){kr.emit(n.x+(Math.random()-.5)*.6,n.y,n.z+(Math.random()-.5)*.6,(Math.random()-.5)*2,-6*t-Math.random()*6,(Math.random()-.5)*2,1,.55,.2,1,.35,0,0)},rise(n,t,e=6){kr.emit(n.x+(Math.random()-.5)*e,n.y,n.z+(Math.random()-.5)*e,0,6+Math.random()*6,0,t[0],t[1],t[2],1,2.5,-.5,0)}},Jc=0;function ol(n,t){kr.update(n),jc.update(n),Tf.update(n);for(let o=Wo.length-1;o>=0;o--){let a=Wo[o];a.life-=n,a.v.y-=9*n,a.m.position.addScaledVector(a.v,n),a.m.rotation.x+=a.w.x*n,a.m.rotation.y+=a.w.y*n,a.m.rotation.z+=a.w.z*n;let l=xt(a.m.position.x,a.m.position.z)+.1;a.m.position.y<l&&(a.m.position.y=l,a.v.y=Math.abs(a.v.y)*.35,a.v.x*=.6,a.v.z*=.6,a.w.multiplyScalar(.5)),a.life<1&&a.m.scale.setScalar(Math.max(.001,a.s*a.life)),a.life<=0&&(h.scene.remove(a.m),Wo.splice(o,1))}let e=h.storm,i=Hr.geometry.attributes.position,s=i.array,r=1+e*26;for(let o=0;o<s.length;o+=3){s[o]+=r*n,s[o+1]+=Math.sin(o+performance.now()*5e-4)*n*.2-e*n*1.5;let a=40;s[o]-t.x>a&&(s[o]-=2*a),s[o]-t.x<-a&&(s[o]+=2*a),s[o+1]-t.y>a/2&&(s[o+1]-=a),s[o+1]-t.y<-a/2&&(s[o+1]+=a),s[o+2]-t.z>a&&(s[o+2]-=2*a),s[o+2]-t.z<-a&&(s[o+2]+=2*a)}if(i.needsUpdate=!0,Hr.material.size=.25+e*.3,Hr.material.opacity=.3+e*.25,Hr.material.color.setRGB(1,.8-h.time.night*.4,.62-h.time.night*.3),Jc+=((h.raining?1:0)-Jc)*n*.5,$o.material.opacity=Jc*.6,Jc>.01){let o=$o.geometry.attributes.position.array;for(let a=0;a<o.length;a+=3)o[a+1]-=22*n,o[a]+=2*n,o[a+1]<t.y-20&&(o[a+1]+=40),o[a]-t.x>35&&(o[a]-=70),o[a]-t.x<-35&&(o[a]+=70),o[a+2]-t.z>35&&(o[a+2]-=70),o[a+2]-t.z<-35&&(o[a+2]+=70);$o.geometry.attributes.position.needsUpdate=!0}}var Qc=null,se,cr,zr,al,ll,Fr,cl,th,Z={enabled:!0,init(){if(se){se.resume();return}try{se=new(window.AudioContext||window.webkitAudioContext)}catch{return}cr=se.createGain(),cr.gain.value=.7,cr.connect(se.destination),zr=se.createGain(),zr.gain.value=.8,zr.connect(cr),al=se.createGain(),al.gain.value=.22,al.connect(cr),th=se.createBuffer(1,se.sampleRate*2,se.sampleRate);let n=th.getChannelData(0),t=0;for(let i=0;i<n.length;i++){let s=Math.random()*2-1;t=(t+.02*s)/1.02,n[i]=t*3.5}let e=se.createBufferSource();e.buffer=th,e.loop=!0,Fr=se.createBiquadFilter(),Fr.type="bandpass",Fr.frequency.value=400,Fr.Q.value=.6,ll=se.createGain(),ll.gain.value=.15,e.connect(Fr),Fr.connect(ll),ll.connect(cr),e.start(),this.musicLoop()},setVolume(n){cr&&(cr.gain.value=n)},update(n,t){if(!se)return;let e=se.currentTime;ll.gain.setTargetAtTime(.1+n*.6+t*.04,e,.5),Fr.frequency.setTargetAtTime(300+n*500+Math.sin(e*.3)*120,e,.8)},tone(n,t,e="sine",i=.3,s=0,r=0,o){if(!se)return;let a=se.currentTime+r,l=se.createOscillator(),c=se.createGain();l.type=e,l.frequency.setValueAtTime(n,a),s&&l.frequency.exponentialRampToValueAtTime(Math.max(20,n*s),a+t),c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(i,a+.01),c.gain.exponentialRampToValueAtTime(1e-4,a+t),l.connect(c),c.connect(o||zr),l.start(a),l.stop(a+t+.05)},noise(n,t=1e3,e=.3,i="lowpass",s=0,r=1){if(!se)return;let o=se.currentTime+s,a=se.createBufferSource();a.buffer=th;let l=se.createBiquadFilter();l.type=i,l.frequency.value=t,l.Q.value=r;let c=se.createGain();c.gain.setValueAtTime(e,o),c.gain.exponentialRampToValueAtTime(1e-4,o+n),a.connect(l),l.connect(c),c.connect(zr),a.start(o,Math.random()),a.stop(o+n+.05)},play(n){if(se)switch(n){case"step":this.noise(.12,500+Math.random()*200,.12,"lowpass");break;case"jump":this.noise(.2,400,.15);break;case"land":this.noise(.25,300,.25);break;case"mine":this.tone(180+Math.random()*60,.08,"square",.04),this.noise(.08,2400,.06,"highpass");break;case"pickup":this.tone(880,.08,"sine",.08),this.tone(1320,.1,"sine",.06,0,.05);break;case"deplete":this.noise(.5,900,.3),this.tone(220,.4,"triangle",.15,.5);break;case"shoot":this.tone(900,.15,"sawtooth",.12,.25),this.noise(.1,3e3,.08,"highpass");break;case"turret":this.tone(700,.12,"square",.05,.3);break;case"hit":this.tone(300,.1,"square",.08,.5);break;case"kill":this.noise(.6,1600,.3,"bandpass",0,.8),this.tone(120,.5,"sawtooth",.12,.3);break;case"hurt":this.tone(160,.25,"sawtooth",.15,.6);break;case"place":this.tone(220,.15,"triangle",.2),this.tone(330,.15,"triangle",.2,0,.1),this.tone(440,.3,"triangle",.2,0,.2),this.noise(.4,600,.2);break;case"ui":this.tone(880,.05,"sine",.07),this.tone(1320,.08,"sine",.04,0,.03);break;case"scan":this.tone(300,1.2,"sine",.12,4),this.tone(600,.9,"triangle",.05,3,.1),this.noise(.8,2e3,.05,"bandpass",0,3);break;case"shutter":this.noise(.06,4e3,.25,"highpass"),this.noise(.1,1500,.15,"bandpass",.07);break;case"tick":this.tone(2400,.02,"sine",.025);break;case"open":this.tone(440,.12,"sine",.05,1.5),this.noise(.15,3e3,.03,"highpass");break;case"achv":[523,784,1046,1568].forEach((t,e)=>this.tone(t,.9,"triangle",.09,0,e*.09));break;case"deny":this.tone(200,.15,"square",.06),this.tone(150,.2,"square",.06,0,.1);break;case"craft":[523,659,784,1046].forEach((t,e)=>this.tone(t,.25,"triangle",.12,0,e*.08));break;case"radio":this.noise(.15,2500,.12,"bandpass",0,2),this.tone(1200,.05,"sine",.06,0,.12);break;case"alarm":this.tone(880,.18,"square",.06),this.tone(660,.18,"square",.06,0,.2);break;case"objective":[392,523,659].forEach((t,e)=>this.tone(t,.5,"sine",.15,0,e*.12));break;case"chapter":[262,330,392,523,659].forEach((t,e)=>this.tone(t,1.2,"sine",.12,0,e*.15));break;case"rumble":this.noise(4,150,.6),this.noise(3,400,.25,"lowpass",.5);break;case"jet":this.noise(.12,800,.1,"bandpass");break;case"night":this.tone(110,3,"sine",.12,.8),this.tone(165,3,"sine",.08,.8,.3);break}},engine(n){if(se&&(n>0||Qc)){if(!Qc){let i=se.createOscillator(),s=se.createOscillator(),r=se.createBiquadFilter(),o=se.createGain();i.type="sawtooth",s.type="triangle",r.type="lowpass",r.frequency.value=500,o.gain.value=1e-4,i.connect(r),s.connect(r),r.connect(o),o.connect(zr),i.start(),s.start(),Qc={o:i,o2:s,f:r,g:o}}let t=se.currentTime,e=Qc;e.o.frequency.setTargetAtTime(38+n*70,t,.1),e.o2.frequency.setTargetAtTime(76+n*140,t,.1),e.f.frequency.setTargetAtTime(300+n*900,t,.1),e.g.gain.setTargetAtTime(n>0||h.driving?.03+n*.05:1e-4,t,.15)}},laser(n){if(se){if(n&&!cl){let t=se.createOscillator(),e=se.createOscillator(),i=se.createGain(),s=se.createBiquadFilter();t.type="sawtooth",t.frequency.value=110,e.type="square",e.frequency.value=113,s.type="lowpass",s.frequency.value=900,i.gain.value=1e-4,i.gain.exponentialRampToValueAtTime(.06,se.currentTime+.1),t.connect(s),e.connect(s),s.connect(i),i.connect(zr),t.start(),e.start(),cl={o:t,o2:e,g:i}}else if(!n&&cl){let t=cl;cl=null,t.g.gain.setTargetAtTime(1e-4,se.currentTime,.04),t.o.stop(se.currentTime+.2),t.o2.stop(se.currentTime+.2)}}},musicLoop(){let n=[[220,277.2,329.6,415.3],[196,246.9,293.7,392],[174.6,220,261.6,349.2],[164.8,207.7,246.9,329.6],[146.8,220,293.7,370]],t=0,e=()=>{if(!se)return;let i=n[t++%n.length],s=se.currentTime;if(i.forEach((r,o)=>{let a=se.createOscillator(),l=se.createGain();a.type=o===0?"triangle":"sine",a.frequency.value=r*(o===0?.5:1),a.detune.value=(Math.random()-.5)*8,l.gain.setValueAtTime(1e-4,s),l.gain.exponentialRampToValueAtTime(.06,s+3),l.gain.exponentialRampToValueAtTime(1e-4,s+11),a.connect(l),l.connect(al),a.start(s),a.stop(s+11.5)}),Math.random()<.7){let r=i[1+Math.floor(Math.random()*3)]*2;for(let o=0;o<3;o++)Math.random()<.6&&this.tone(r*[1,1.122,1.335][o],2.5,"sine",.025,0,2+o*1.6,al)}setTimeout(e,9e3)};e()}};var hl={iron:new pt({color:6965822,roughness:.4,metalness:.8,flatShading:!0,map:Bi.map,bumpMap:Bi.bumpMap,bumpScale:4}),ironVein:new pt({color:10246714,roughness:.3,metalness:.9,flatShading:!0,emissive:3806216}),ice:new pt({color:13627135,roughness:.08,metalness:.1,flatShading:!0,transparent:!0,opacity:.9,emissive:1456202}),silicon:new pt({color:15983014,roughness:.15,metalness:.4,flatShading:!0,emissive:2761224}),titanium:new pt({color:10194175,roughness:.1,metalness:.5,flatShading:!0,emissive:5913855,emissiveIntensity:.6}),base:new pt({color:8276790,roughness:.95,flatShading:!0,map:Bi.map,bumpMap:Bi.bumpMap,bumpScale:4})},mg={iron:null,ice:8969727,silicon:16770720,titanium:9071871},_s={iron:[1,.55,.3],ice:[.6,.9,1],silicon:[1,.9,.55],titanium:[.7,.55,1]};function cb(n,t,e){let i=new Fe(e,t,5,1);i.translate(0,t/2,0);let s=new lt(i,n);return s.castShadow=!0,s}function hb(n,t){let e=new ft;if(n==="iron")for(let i=0;i<4;i++){let s=new lt(new oi(.6+t()*.7,0),i===0?hl.ironVein:hl.iron);s.position.set((t()-.5)*1.8,.3+t()*.4,(t()-.5)*1.8),s.rotation.set(t()*3,t()*3,t()*3),s.scale.y=.8,s.castShadow=!0,e.add(s)}else{let i=new lt(new oi(1.1,0),hl.base);i.scale.set(1.2,.45,1.2),i.castShadow=!0,e.add(i);let s=n==="titanium"?6:7;for(let r=0;r<s;r++){let o=cb(hl[n],.8+t()*(n==="ice"?1.6:1.9),.18+t()*.22),a=t()*6.28,l=t()*.8;o.position.set(Math.cos(a)*l,.2,Math.sin(a)*l),o.rotation.set((t()-.5)*.9,t()*3,(t()-.5)*.9),e.add(o)}mg[n]&&e.add(Mt(mg[n],n==="titanium"?5:3,null,0,1.2,0))}return e}var gg=Math.random;function qo(n,t,e,i){let s=hb(n,gg),r=xt(t,e);s.position.set(t,r,e),s.rotation.y=gg()*6.28,h.scene.add(s);let o=i??{iron:30,ice:25,silicon:25,titanium:14}[n],a={type:n,x:t,z:e,y:r,amount:o,max:o,mesh:s,r:1.6};return a.collider=h.colliders.add({x:t,z:e,r:1.3,kind:"node"}),h.nodes.push(a),a}function xg(n,t){for(let e=0;e<200;e++){let i,s;if(n==="ice"&&Math.random()<.75){let o=vs[Math.floor(Math.random()*Math.min(vs.length,30))],a=Math.random()*6.28,l=Math.random()*o.r*.7;i=o.x+Math.cos(a)*l,s=o.z+Math.sin(a)*l}else if(t){let o=Math.random()*6.28,a=t[0]+Math.random()*(t[1]-t[0]);i=Math.cos(o)*a,s=Math.sin(o)*a}else i=(Math.random()-.5)*(2*Zt-300),s=(Math.random()-.5)*(2*Zt-300);let r=Math.hypot(i,s);if(!(n==="titanium"&&r<260)&&!(r<18)&&!(Math.abs(i)>Zt-160||Math.abs(s)>Zt-160)&&!(Nr(i,s,2)>.6)&&!h.colliders.overlaps(i,s,3))return[i,s]}return null}function yg(){let n=[["iron",22,8],["iron",-18,20],["iron",30,-25],["silicon",-26,-14],["silicon",12,34],["ice",40,10],["iron",-40,-38],["silicon",45,42]];for(let[e,i,s]of n)qo(e,i,s);let t={iron:70,silicon:50,ice:40,titanium:22};for(let e in t)for(let i=0;i<t[e];i++){let s=xg(e,e==="titanium"?null:i<t[e]*.35?[40,220]:null);s&&qo(e,s[0],s[1])}}function vg(n){h.scene.remove(n.mesh),h.colliders.remove(n.collider);let t=h.nodes.indexOf(n);t>=0&&h.nodes.splice(t,1)}var Xo=[];function eh(n,t){n.amount-=t;let e=.35+.65*Math.max(0,n.amount/n.max);if(n.mesh.scale.setScalar(e),n.amount<=0){let i=n.mesh.position.clone();i.y+=1,ut.burst(i,_s[n.type],40,7);let s=n.mesh.children.find(r=>r.isMesh&&r!==n.mesh.children[0])?.material||n.mesh.children[0].material;return ut.debris(i,s,9,5,1.1),ut.dustPuff(i,16,3),vg(n),Xo.push({type:n.type,t:90+Math.random()*60}),!0}return!1}function Mg(n){for(let e=Xo.length-1;e>=0;e--)if(Xo[e].t-=n,Xo[e].t<=0){let i=Xo[e].type;Xo.splice(e,1);let s=xg(i,i==="titanium"?null:[60,400]);s&&qo(i,s[0],s[1])}let t=1+Math.sin(performance.now()*.002)*.15;hl.titanium.emissiveIntensity=.5*t}function _g(){return h.nodes.map(n=>[n.type,+n.x.toFixed(1),+n.z.toFixed(1),Math.round(n.amount)])}function Eg(n){for(let t of[...h.nodes])vg(t);for(let[t,e,i,s]of n){let r=qo(t,e,i);r.amount=s,r.mesh.scale.setScalar(.35+.65*s/r.max)}}var An=[{name:"\u524D\u54E8\u7AD9",pop:0,b:0,r:75},{name:"\u5B9A\u5C45\u70B9",pop:4,b:6,r:120},{name:"\u5C0F\u9547",pop:12,b:14,r:175},{name:"\u57CE\u5E02",pop:24,b:22,r:240},{name:"\u5927\u90FD\u4F1A",pop:36,b:32,r:310},{name:"\u661F\u6E2F",pop:50,b:42,r:390}],jn={x:0,z:0},Yo,nh,Zo=0;function Af(n){nh=new Yt({color:6743807,transparent:!0,opacity:.12,side:Ge,depthWrite:!1,blending:fe}),h.cityLevel=h.cityLevel||0,Zo=An[h.cityLevel].r,bg(Zo)}function bg(n){Yo&&(h.scene.remove(Yo),Yo.geometry.dispose());let t=Math.ceil(n*1.2),e=[],i=[],s=1.4;for(let o=0;o<=t;o++){let a=o/t*Math.PI*2,l=jn.x+Math.cos(a)*n,c=jn.z+Math.sin(a)*n,u=xt(l,c);if(e.push(l,u,c,l,u+s,c),o<t){let d=o*2;i.push(d,d+1,d+2,d+1,d+3,d+2)}}let r=new Re;r.setAttribute("position",new te(e,3)),r.setIndex(i),Yo=new lt(r,nh),Yo.frustumCulled=!1,h.scene.add(Yo)}function wg(n,t,e=0){return Math.hypot(n-jn.x,t-jn.z)<=An[h.cityLevel].r-e}function Sg(){let n=An[h.cityLevel+1];return n?{...n,curPop:h.colony.pop,curB:h.buildings.length}:null}var Rf=0;function Tg(n,t){nh.opacity+=((t?.45:.1)-nh.opacity)*Math.min(1,n*4);let e=An[h.cityLevel].r;if(Zo<e&&(Zo=Math.min(e,Zo+n*40),bg(Zo)),Rf-=n,Rf>0)return;Rf=1;let i=An[h.cityLevel+1];if(i&&h.colony.pop>=i.pop&&h.buildings.length>=i.b){h.cityLevel++,Z.play("chapter"),h.events.emit("cityLevel",An[h.cityLevel]);let s=new T(jn.x,xt(jn.x,jn.z)+2,jn.z);ut.burst(s,[.4,.9,1],120,18)}}var ul=[],ub={mars:6178362,europa:9214120,kepler:5921384}[ne],Cf,Es,ih=!0;function db(){return Cf||(Cf=new pt({color:ub,roughness:.95,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),Cf}function fb(n,t,e,i){let s=e-n,r=i-t,o=Math.hypot(s,r);if(o<2)return null;let a=Math.ceil(o/1.5),l=s/o,c=r/o,u=-c,d=l,f=1.3,p=[],g=[],v=[],x=[];for(let E=0;E<=a;E++){let M=E/a,D=n+s*M,A=t+r*M;for(let L of[-1,1]){let I=D+u*f*L,w=A+d*f*L;p.push(I,xt(I,w)+.07,w),v.push(L<0?0:1,M*o/3)}if(E<a){let L=E*2;g.push(L,L+2,L+1,L+1,L+2,L+3)}}for(let E=4;E<o-2;E+=9)for(let M of[-1,1]){let D=n+l*E+u*(f+.35)*M,A=t+c*E+d*(f+.35)*M;x.push(D,xt(D,A)+.25,A)}let m=new Re;m.setAttribute("position",new te(p,3)),m.setAttribute("uv",new te(v,2)),m.setIndex(g),m.computeVertexNormals();let _=new lt(m,db());return _.receiveShadow=!0,h.scene.add(_),{mesh:_,lamp:x}}function Rg(n){if(n.type==="lamp")return;let t=null,e=70;for(let d of h.buildings){if(d===n||d.type==="lamp")continue;let f=Math.hypot(d.x-n.x,d.z-n.z)-d.def.r-n.def.r;f<e&&(e=f,t=d)}if(!t)return;let i=t.x-n.x,s=t.z-n.z,r=Math.hypot(i,s),o=n.x+i/r*(n.def.r+.5),a=n.z+s/r*(n.def.r+.5),l=t.x-i/r*(t.def.r+.5),c=t.z-s/r*(t.def.r+.5),u=fb(o,a,l,c);u&&(ul.push({...u,a:n,b:t}),ih=!0)}function Ag(n){for(let t=ul.length-1;t>=0;t--){let e=ul[t];(e.a===n||e.b===n)&&(h.scene.remove(e.mesh),e.mesh.geometry.dispose(),ul.splice(t,1),ih=!0)}}function Cg(){if(ih){ih=!1,Es&&(h.scene.remove(Es),Es.geometry.dispose());let n=ul.flatMap(t=>t.lamp);if(n.length){let t=new Re;t.setAttribute("position",new te(n,3)),Es=new si(t,new Yn({size:.9,map:Jn(),color:8382207,transparent:!0,depthWrite:!1,blending:fe})),Es.frustumCulled=!1,h.scene.add(Es)}else Es=null}Es&&(Es.material.opacity=.15+h.time.night*.85)}var Ko={peace:{name:"\u548C\u5E73",desc:"\u6CA1\u6709\u9508\u8680\u86DB\uFF0C\u5B89\u5FC3\u5EFA\u8BBE",o2:.7,foe:0,dmg:0,yield:1.3},normal:{name:"\u6807\u51C6",desc:"\u63A8\u8350\u7684\u4F53\u9A8C",o2:1,foe:1,dmg:1,yield:1},hard:{name:"\u56F0\u96BE",desc:"\u6C27\u6C14\u6D88\u8017\u66F4\u5FEB\uFF0C\u654C\u4EBA\u66F4\u591A\u66F4\u51F6",o2:1.35,foe:1.6,dmg:1.5,yield:.85}},Ig={story:{name:"\u5267\u60C5\u6A21\u5F0F",desc:"\u8DDF\u968F\u7AE0\u8282\uFF0C\u4ECE\u7740\u9646\u4E00\u8DEF\u8D70\u5230\u661F\u9645\u6587\u660E"},free:{name:"\u81EA\u7531\u6A21\u5F0F",desc:"\u6CA1\u6709\u4E3B\u7EBF\uFF0C\u6309\u81EA\u5DF1\u7684\u8282\u594F\u5F00\u62D3\u3002\u5C45\u6C11\u59D4\u6258\u4F1A\u7ED9\u4F60\u65B9\u5411"}},qi=()=>Ko[h.diffKey||"normal"],Vn=()=>h.mode==="free",Jo={pv:{name:"\u9AD8\u6548\u5149\u4F0F",cat:"\u751F\u4EA7",icon:"sun",cost:25,desc:"\u592A\u9633\u80FD\u53D1\u7535 +50%"},sieve:{name:"\u5206\u5B50\u7B5B\u5236\u6C27",cat:"\u751F\u5B58",icon:"o2",cost:30,desc:"\u5236\u6C27\u7AD9\u4E0E\u751F\u6001\u4E2D\u67A2\u4F9B\u6C27 +50%"},hydro:{name:"\u6C34\u57F9\u6280\u672F",cat:"\u751F\u5B58",icon:"food",cost:30,desc:"\u6E29\u5BA4\u4E0E\u5782\u76F4\u519C\u573A\u4EA7\u51FA +50%"},drill:{name:"\u6DF1\u5C42\u94BB\u63A2",cat:"\u751F\u5B58",icon:"water",cost:30,desc:"\u6C34\u51B0\u63D0\u53D6\u5668\u4E0E\u751F\u6001\u4E2D\u67A2\u4F9B\u6C34 +50%"},laser2:{name:"\u91C7\u77FF\u6FC0\u5149 II",cat:"\u751F\u4EA7",icon:"laser",cost:35,desc:"\u624B\u52A8\u91C7\u77FF\u901F\u5EA6 +50%"},suit:{name:"\u5B87\u822A\u670D\u5FAA\u73AF\u7CFB\u7EDF",cat:"\u751F\u5B58",icon:"tank",cost:40,desc:"\u91CE\u5916\u6C27\u6C14\u6D88\u8017 -35%"},alloy:{name:"\u5F3A\u5316\u5408\u91D1",cat:"\u519B\u4E8B",icon:"shield",cost:50,desc:"\u6240\u6709\u5EFA\u7B51\u8010\u4E45 +50%"},plasma:{name:"\u7B49\u79BB\u5B50\u805A\u7126",cat:"\u519B\u4E8B",icon:"focus",cost:60,desc:"\u70AE\u5854\u4F24\u5BB3 +50%\uFF0C\u5C04\u7A0B +10 \u7C73"},swarm:{name:"\u65E0\u4EBA\u673A\u96C6\u7FA4",cat:"\u751F\u4EA7",icon:"drone",cost:60,desc:"\u6BCF\u5EA7\u65E0\u4EBA\u673A\u7AD9\u591A\u4E00\u67B6\u65E0\u4EBA\u673A"},terrain:{name:"\u5168\u5730\u5F62\u60AC\u6302",cat:"\u751F\u4EA7",icon:"rover",cost:45,desc:"\u6F2B\u6E38\u8F66\u6781\u901F +30%"},pr:{name:"\u79FB\u6C11\u5BA3\u4F20",cat:"\u6B96\u6C11",icon:"pop",cost:70,desc:"\u79FB\u6C11\u98DE\u8239\u6765\u5F97\u66F4\u52E4\uFF0C\u6BCF\u6B21\u591A\u5E26 2 \u4EBA"},atmo:{name:"\u5927\u6C14\u5DE5\u7A0B",cat:"\u6B96\u6C11",icon:"planet",cost:120,desc:"\u5927\u6C14\u6539\u9020\u901F\u5EA6 \xD72"},fusion:{name:"\u7D27\u51D1\u805A\u53D8",cat:"\u751F\u4EA7",icon:"power",cost:100,desc:"\u805A\u53D8\u53CD\u5E94\u5806\u53D1\u7535 +40%"},culture:{name:"\u6B96\u6C11\u5730\u6587\u5316",cat:"\u6B96\u6C11",icon:"book",cost:80,desc:"\u5C45\u6C11\u5DE5\u4F5C\u4EA7\u51FA \xD72"}},ke=n=>!!(h.tech&&h.tech[n]);function Uf(n){let t=Jo[n];return!t||ke(n)||(h.rp||0)<t.cost?(Z.play("deny"),!1):(h.rp-=t.cost,h.tech={...h.tech||{},[n]:!0},Z.play("craft"),h.events.emit("toast",`\u2713 \u7814\u7A76\u5B8C\u6210\uFF1A${t.name}`),h.events.emit("researched",n),!0)}function sh(){let n=0;for(let t of h.buildings)t.type==="lab"&&t.powered&&(n+=[0,1,1.6,2.2][t.level||1]);return n*(.12+h.colony.pop*.01)}var Pg={iron:1,ice:1.2,silicon:1.5,titanium:6};function Nf(n,t,e){return Math.floor(e*Pg[n]/Pg[t]*.8)}function Lg(n,t,e){let i=Nf(n,t,e);return n===t||i<=0||(h.res[n]||0)<e?(Z.play("deny"),0):(h.res[n]-=e,h.res[t]+=i,Z.play("pickup"),h.stats.traded=(h.stats.traded||0)+1,i)}var pb=["\u6797\u6653","Amara Okafor","\u9648\u9ED8","Mateo Silva","\u82CF\u5FF5","Yuki Tanaka","\u738B\u5927\u5C71","\u5468\u9752\u79BE","Priya Sharma","\u674E\u957F\u98CE"],Pf={solar:"\u592A\u9633\u80FD\u9635\u5217",oxygen:"\u5236\u6C27\u7AD9",lamp:"\u7167\u660E\u706F",habitat:"\u5C45\u4F4F\u7A79\u9876",greenhouse:"\u6E29\u5BA4",extractor:"\u6C34\u51B0\u63D0\u53D6\u5668",turret:"\u9632\u5FA1\u70AE\u5854",drones:"\u65E0\u4EBA\u673A\u7AD9",plaza:"\u4E2D\u592E\u5E7F\u573A",lab:"\u7814\u7A76\u6240",trade:"\u8D38\u6613\u7AD9",apartment:"\u516C\u5BD3\u5854",vfarm:"\u5782\u76F4\u519C\u573A"},Or={build:["\u6211\u4EEC\u9700\u8981\u4E00\u5EA7{x}\u3002\u62DC\u6258\u4E86\uFF01","\u5982\u679C\u6709{x}\uFF0C\u5927\u5BB6\u7684\u65E5\u5B50\u4F1A\u597D\u8FC7\u5F88\u591A\u3002","\u80FD\u518D\u5EFA\u4E00\u5EA7{x}\u5417\uFF1F"],mine:["\u4ED3\u5E93\u91CC\u7684{x}\u5FEB\u89C1\u5E95\u4E86\uFF0C\u80FD\u5E2E\u5FD9\u91C7\u4E00\u4E9B\u5417\uFF1F","\u6211\u7684\u5B9E\u9A8C\u9700\u8981{x}\u3002"],kill:["\u591C\u91CC\u90A3\u4E9B\u9508\u8680\u86DB\u5435\u5F97\u5B69\u5B50\u4EEC\u7761\u4E0D\u7740\u3002","\u5DE1\u903B\u961F\u9700\u8981\u652F\u63F4\uFF0C\u5E2E\u6211\u4EEC\u6E05\u7406\u4E00\u4E0B\u9644\u8FD1\u3002"],upgrade:["\u8BBE\u65BD\u8BE5\u5347\u7EA7\u4E86\uFF0C\u80FD\u628A\u54EA\u4E00\u5EA7\u5347\u5230 2 \u7EA7\u5417\uFF1F"],relic:["\u6211\u5728\u65E7\u6863\u6848\u91CC\u770B\u5230\u9644\u8FD1\u6709\u9057\u8FF9\u7684\u8BB0\u5F55\uFF0C\u4F60\u80FD\u53BB\u770B\u770B\u5417\uFF1F"],pop:["\u6211\u4EEC\u51C6\u5907\u597D\u8FCE\u63A5\u66F4\u591A\u7684\u4EBA\u4E86\u3002"],scan:["\u8BA9\u5C0F\u661F\u626B\u63CF\u4E00\u4E0B\u9644\u8FD1\u7684\u77FF\u85CF\u5427\uFF0C\u6211\u60F3\u753B\u4E00\u5F20\u5730\u56FE\u3002"]},Gn=n=>n[Math.floor(Math.random()*n.length)];function Dg(n){return h.buildings.filter(t=>t.type===n).length}function mb(n){let t=["build","build","mine","mine","scan"];(h.enemies.length||(h.nightsSurvived||0)>0)&&t.push("kill"),h.buildings.length>4&&t.push("upgrade"),n.relicLeft()&&t.push("relic"),h.buildings.some(a=>a.type==="beacon")&&t.push("pop");let e=Gn(t),i=h.colonists.length?Gn(h.colonists).name:Gn(pb),s={id:Date.now()+Math.random(),kind:e,giver:i},r=1+(h.cityLevel||0)*.5;if(e==="build"){let a=Object.keys(Pf).filter(c=>n.unlocked(c)),l=Gn(a.length?a:["solar"]);Object.assign(s,{t:l,base:Dg(l),n:1,text:`\u5EFA\u9020${Pf[l]}`,line:Gn(Or.build).replace("{x}",Pf[l])})}else if(e==="mine"){let a=Gn(h.cityLevel>=2?["iron","silicon","ice","titanium"]:["iron","silicon","ice"]),l=Math.round((a==="titanium"?8:25)*r);Object.assign(s,{t:a,base:h.stats.mined[a],n:l,text:`\u91C7\u96C6${un[a].name} ${l}`,line:Gn(Or.mine).replace("{x}",un[a].name)})}else if(e==="kill"){let a=Math.round(4*r);Object.assign(s,{base:h.stats.kills,n:a,text:`\u51FB\u9000\u9508\u8680\u86DB ${a} \u53EA`,line:Gn(Or.kill)})}else e==="upgrade"?Object.assign(s,{base:h.buildings.filter(a=>(a.level||1)>=2).length,n:1,text:"\u628A\u4E00\u5EA7\u5EFA\u7B51\u5347\u5230 2 \u7EA7",line:Gn(Or.upgrade)}):e==="relic"?Object.assign(s,{base:n.relicFound(),n:1,text:"\u8C03\u67E5\u4E00\u5904\u9057\u8FF9",line:Gn(Or.relic)}):e==="pop"?Object.assign(s,{base:h.colony.pop,n:4,text:"\u8FCE\u63A5 4 \u4F4D\u65B0\u79FB\u6C11",line:Gn(Or.pop)}):Object.assign(s,{base:h.stats.scans||0,n:1,text:"\u7528\u5C0F\u661F\u626B\u63CF\u4E00\u6B21\uFF08Q\uFF09",line:Gn(Or.scan)});let o=["iron","silicon","ice"];return s.reward={[Gn(o)]:Math.round(20*r),[Gn(o)]:Math.round(15*r)},h.cityLevel>=1&&(s.reward.titanium=Math.round(2*r)),s.rp=Math.round(8*r),s}function Ug(n,t){switch(n.kind){case"build":return Dg(n.t)-n.base;case"mine":return h.stats.mined[n.t]-n.base;case"kill":return h.stats.kills-n.base;case"upgrade":return h.buildings.filter(e=>(e.level||1)>=2).length-n.base;case"relic":return t.relicFound()-n.base;case"pop":return h.colony.pop-n.base;default:return(h.stats.scans||0)-n.base}}function Ng(n,t){return Math.max(0,Math.min(n.n,Ug(n,t)))}var If=25,Lf=0;function kg(n,t){if(gb(n),h.rp=(h.rp||0)+sh()*n,h.requests=h.requests||[],h.buildings.length&&!h.ended){If-=n;let e=Vn()?3:2;if(If<=0&&h.requests.length<e){If=Vn()?60:110;let i=mb(t);h.requests.push(i),h.events.emit("request",i)}}if(Lf-=n,!(Lf>0)){Lf=.5;for(let e=h.requests.length-1;e>=0;e--){let i=h.requests[e];if(Ug(i,t)>=i.n){h.requests.splice(e,1);for(let s in i.reward)h.res[s]+=i.reward[s],h.events.emit("pickup",{type:s,n:i.reward[s],note:"\u59D4\u6258\u5956\u52B1"});h.rp=(h.rp||0)+i.rp,h.stats.requests=(h.stats.requests||0)+1,Z.play("objective"),h.events.emit("requestDone",i)}}}}var Df=0;function gb(n){if(Df-=n,Df>0)return;Df=2;let t=h.colony,e=Math.max(1,t.pop),i=[],s=55,r=g=>Math.max(-1,Math.min(1,(t[g]-t.pop)/e)),o=(r("food")+r("o2")+r("water"))*6;s+=o,i.push(["\u751F\u6D3B\u7269\u8D44",o]);let a=h.buildings.filter(g=>g.type==="lamp").length,l=h.buildings.some(g=>g.type==="plaza"&&g.powered),c=Math.min(8,a*1.5)+(l?12:0);s+=c,i.push(["\u7167\u660E\u4E0E\u5E7F\u573A",c]);let u=Math.min(10,h.buildings.filter(g=>g.type==="greenhouse"||g.type==="vfarm").length*3);s+=u,i.push(["\u7EFF\u8272\u690D\u7269",u]);let d=h.buildings.filter(g=>g.broken).length*-6+(t.deficit?-10:0);s+=d,i.push(["\u635F\u574F\u4E0E\u505C\u7535",d]);let f=h.buildings.some(g=>g.type==="turret")?6:qi().foe>0&&(h.nightsSurvived||0)>0?-8:0;s+=f,i.push(["\u5B89\u5168\u611F",f]);let p=t.housing&&t.pop>t.housing*.9?-8:0;s+=p,i.push(["\u4F4F\u623F\u62E5\u6324",p]),ke("culture")&&(s+=10,i.push(["\u6B96\u6C11\u5730\u6587\u5316",10])),h.festival&&(s+=15,i.push(["\u6B96\u6C11\u5730\u8282",15])),h.morale=Math.round(Math.max(0,Math.min(100,s))),h.moraleFactors=i.filter(g=>Math.abs(g[1])>=.5)}var kf=()=>.5+(h.morale??60)/100;var zg=new Wt(1,1,1,6,1,!0);zg.translate(0,.5,0);var xb=new T(0,1,0),jo=new T;function yb(n){let t=1+(n.level||1)+(ke("swarm")?1:0);for(n.drones=n.drones||[];n.drones.length<t;){let e=Km(),i=new lt(zg,new Yt({color:16752720,transparent:!0,opacity:.8,blending:fe,depthWrite:!1}));i.visible=!1,i.frustumCulled=!1,h.scene.add(e.group,i);let s=n.drones.length,r=new T(n.x+[-1.9,1.9,-1.9,1.9][s%4],n.y+1.1,n.z+[-1.9,-1.9,1.9,1.9][s%4]);e.group.position.copy(r),n.drones.push({...e,beam:i,dock:r,state:"dock",t:1+s*1.3,node:null,cargo:null,pos:e.group.position})}}function Fg(n){for(let t of n.drones||[])h.scene.remove(t.group,t.beam),t.node&&(t.node.claimed=!1);n.drones=[]}function Hg(n,t,e,i=15){jo.copy(t).sub(n.pos);let s=jo.length(),r=xt(n.pos.x,n.pos.z)+8;s>6&&(jo.y+=(r-n.pos.y)*2),jo.normalize().multiplyScalar(Math.min(s,i*e)),n.pos.add(jo);let a=Math.atan2(t.x-n.pos.x,t.z-n.pos.z)-n.group.rotation.y;return a=Math.atan2(Math.sin(a),Math.cos(a)),n.group.rotation.y+=a*Math.min(1,e*4),n.group.rotation.x=Math.min(.3,s*.02),s<.6}function Og(n){let t=performance.now()*.001;for(let e of h.buildings)if(e.type==="drones"&&!(e.buildT<1)){yb(e),e.anim.dish&&(e.anim.dish.rotation.y+=n*(e.powered?1.2:0)),e.anim.light&&(e.anim.light.visible=e.powered&&Math.sin(t*3)>-.3);for(let i of e.drones){for(let s of i.rotors)s.rotation.y+=n*40;switch(i.group.position.y+=Math.sin(t*3+i.dock.x)*.003,i.beam.visible=!1,!e.powered&&i.state!=="dock"&&(i.node&&(i.node.claimed=!1),i.node=null,i.state="back"),i.state){case"dock":{if(i.pos.lerp(i.dock,Math.min(1,n*3)),i.t-=n,i.t<=0&&e.powered){i.t=2;let s=null,r=100;for(let o of h.nodes){if(o.claimed||o.type==="titanium"&&(e.level||1)<3)continue;let a=Math.hypot(o.x-e.x,o.z-e.z);a<r&&(r=a,s=o)}s&&(s.claimed=!0,i.node=s,i.state="out")}break}case"out":{let s=i.node;if(!s||!h.nodes.includes(s)){i.node=null,i.state="back";break}Hg(i,jo.set(s.x,s.y+4.5,s.z).clone(),n)&&(i.state="mine",i.t=3.2);break}case"mine":{let s=i.node;if(!s||!h.nodes.includes(s)){i.state="back";break}i.t-=n;let r=new T(s.x+Math.sin(t*5)*.3,s.y+.6,s.z+Math.cos(t*4)*.3),o=i.pos.clone().add(new T(0,-.25,0)),a=r.clone().sub(o),l=a.length();if(i.beam.position.copy(o),i.beam.quaternion.setFromUnitVectors(xb,a.normalize()),i.beam.scale.set(.05,l,.05),i.beam.material.color.setRGB(..._s[s.type]),i.beam.visible=!0,Math.random()<.4&&ut.spark(r,_s[s.type],1,3,.4),i.t<=0){let c=Math.min(3,Math.ceil(s.amount));i.cargo={type:s.type,n:c},s.claimed=!1,eh(s,c),i.node=null,i.state="back"}break}case"back":{Hg(i,i.dock,n)&&(i.cargo&&(h.res[i.cargo.type]+=i.cargo.n,h.stats.mined[i.cargo.type]+=i.cargo.n,h.stats.droneHauls=(h.stats.droneHauls||0)+1,Math.hypot(h.player.pos.x-e.x,h.player.pos.z-e.z)<45&&h.events.emit("pickup",{type:i.cargo.type,n:i.cargo.n,note:"\u65E0\u4EBA\u673A"}),ut.spark(i.pos,[.5,.9,1],6,3),i.cargo=null),i.state="dock",i.t=1.5);break}}}}}var Cn={solar:{name:"\u592A\u9633\u80FD\u9635\u5217",icon:"sun",cat:"life",chapter:0,cost:{iron:8,silicon:6},power:4,r:2.6,hp:120,desc:"\u767D\u5929\u53D1\u7535 4 \u5355\u4F4D\uFF0C\u591C\u95F4\u964D\u81F3 1.6\u3002\u6B96\u6C11\u5730\u7684\u5FC3\u8DF3\u4ECE\u8FD9\u91CC\u5F00\u59CB\u3002"},oxygen:{name:"\u5236\u6C27\u7AD9",icon:"o2",cat:"life",chapter:0,cost:{iron:12,silicon:4,ice:6},power:-2,r:3,hp:160,o2:6,life:14,desc:"\u7535\u89E3\u6C34\u51B0\u5236\u9020\u6C27\u6C14\u3002\u4E3A 6 \u4F4D\u5C45\u6C11\u4F9B\u6C27\uFF0C\u5E76\u5728 14 \u7C73\u5185\u4E3A\u4F60\u7684\u5B87\u822A\u670D\u8865\u6C27\u3002"},lamp:{name:"\u7167\u660E\u706F",icon:"star",cat:"life",chapter:0,cost:{iron:3},power:0,r:.6,hp:60,desc:"\u7167\u4EAE\u706B\u661F\u7684\u957F\u591C\u3002"},habitat:{name:"\u5C45\u4F4F\u7A79\u9876",icon:"dome",cat:"life",chapter:1,cost:{iron:25,silicon:12},power:-1,r:6.4,hp:300,housing:4,life:12,desc:"\u53EF\u4F4F 4 \u4EBA\u3002\u7A79\u9876\u91CC\u6709\u6696\u5149\u3001\u690D\u7269\u548C\u5BB6\u4EBA\u7684\u7167\u7247\u3002"},greenhouse:{name:"\u6E29\u5BA4",icon:"food",cat:"life",chapter:1,cost:{iron:14,silicon:16,ice:8},power:-2,r:5.4,hp:160,food:5,desc:"\u5728\u706B\u661F\u571F\u58E4\u91CC\u79CD\u51FA\u7B2C\u4E00\u68F5\u571F\u8C46\u3002\u4F9B 5 \u4EBA\u98DF\u7269\u3002"},extractor:{name:"\u6C34\u51B0\u63D0\u53D6\u5668",icon:"water",cat:"life",chapter:1,cost:{iron:16,silicon:4,ice:4},power:-2,r:2.8,hp:160,water:6,desc:"\u4ECE\u5730\u4E0B\u51BB\u571F\u4E2D\u94BB\u53D6\u6C34\u3002\u4F9B 6 \u4EBA\u7528\u6C34\u3002"},beacon:{name:"\u7740\u9646\u573A",icon:"ship",cat:"city",chapter:1,cost:{iron:24,silicon:14},power:-1,r:7.4,hp:250,desc:"\u5411\u5730\u7403\u53D1\u51FA\u4FE1\u53F7\u3002\u6761\u4EF6\u6EE1\u8DB3\u65F6\uFF0C\u79FB\u6C11\u98DE\u8239\u4F1A\u5728\u8FD9\u91CC\u964D\u843D\u3002"},fabricator:{name:"\u5236\u9020\u5DE5\u574A",icon:"wrench",cat:"industry",chapter:2,cost:{iron:22,silicon:14},power:-1,r:4.6,hp:220,desc:"\u9760\u8FD1\u6309 E \u5236\u9020\u6B66\u5668\u4E0E\u88C5\u5907\u3002"},drones:{name:"\u65E0\u4EBA\u673A\u7AD9",icon:"drone",cat:"industry",chapter:2,cost:{iron:30,silicon:22},power:-3,r:3.8,hp:220,desc:"\u6D3E\u51FA\u91C7\u77FF\u65E0\u4EBA\u673A\uFF0C\u81EA\u52A8\u91C7\u96C6 100 \u7C73\u5185\u7684\u77FF\u70B9\u5E76\u8FD0\u56DE\u3002\u5347\u7EA7\u540E\u65E0\u4EBA\u673A\u66F4\u591A\uFF0C\u6EE1\u7EA7\u53EF\u91C7\u949B\u3002"},turret:{name:"\u9632\u5FA1\u70AE\u5854",icon:"shield",cat:"defense",chapter:2,cost:{iron:22,silicon:10},power:-2,r:1.9,hp:200,range:40,desc:"\u81EA\u52A8\u653B\u51FB 40 \u7C73\u5185\u7684\u9508\u8680\u86DB\u3002\u9700\u8981\u7535\u529B\u3002"},reactor:{name:"\u805A\u53D8\u53CD\u5E94\u5806",icon:"power",cat:"industry",chapter:3,cost:{iron:40,silicon:20,titanium:12},power:20,r:5.4,hp:400,desc:"\u663C\u591C\u4E0D\u505C +20 \u26A1\u3002\u7528\u706B\u661F\u7684\u949B\uFF0C\u70B9\u4EAE\u4EBA\u7C7B\u7684\u7B2C\u4E8C\u9897\u592A\u9633\u3002"},lab:{name:"\u7814\u7A76\u6240",icon:"book",cat:"industry",chapter:2,level:1,cost:{iron:25,silicon:25},power:-2,r:4.2,hp:260,rp:1,desc:"\u5C45\u6C11\u5728\u8FD9\u91CC\u505A\u7814\u7A76\uFF0C\u4EA7\u51FA\u79D1\u7814\u70B9\u6570\u3002\u4EBA\u53E3\u8D8A\u591A\u8D8A\u5FEB\u3002\u6309 T \u6253\u5F00\u79D1\u7814\u3002"},trade:{name:"\u661F\u9645\u8D38\u6613\u7AD9",icon:"ship",cat:"city",chapter:2,level:1,cost:{iron:30,silicon:18},power:-2,r:5,hp:260,desc:"\u4E0E\u5730\u7403\u548C\u5176\u4ED6\u6B96\u6C11\u5730\u4EA4\u6362\u7269\u8D44\u3002\u9760\u8FD1\u6309 E \u4EA4\u6613\u3002"},plaza:{name:"\u4E2D\u592E\u5E7F\u573A",icon:"planet",cat:"city",level:1,cost:{iron:20,silicon:16},power:-1,r:7.4,hp:300,desc:"\u4E2D\u5FC3\u6709\u4E00\u5EA7\u5168\u606F\u5730\u7403\u3002\u5929\u9ED1\u540E\uFF0C\u5C45\u6C11\u4EEC\u4F1A\u6765\u8FD9\u91CC\u805A\u5728\u4E00\u8D77\uFF0C\u770B\u4E00\u770B\u6545\u4E61\u3002"},apartment:{name:"\u516C\u5BD3\u5854",icon:"tower",cat:"city",level:2,cost:{iron:40,silicon:25,titanium:4},power:-3,r:4.6,hp:400,housing:12,life:12,desc:"\u53EF\u4F4F 12 \u4EBA\u3002\u7A97\u6237\u91CC\u7684\u706F\u5149\uFF0C\u662F\u57CE\u5E02\u7684\u661F\u7A7A\u3002"},vfarm:{name:"\u5782\u76F4\u519C\u573A",icon:"food",cat:"city",level:2,cost:{iron:30,silicon:30,ice:15},power:-4,r:4.2,hp:260,food:14,desc:"\u5341\u56DB\u5C42\u7684\u7ACB\u4F53\u519C\u7530\u3002\u4F9B 14 \u4EBA\u98DF\u7269\u3002"},lifehub:{name:"\u751F\u6001\u4E2D\u67A2",icon:"o2",cat:"city",level:3,cost:{iron:45,silicon:30,ice:30,titanium:6},power:-5,r:6,hp:400,o2:16,water:16,life:20,desc:"\u5927\u578B\u6C27\u6C14\u4E0E\u6C34\u5FAA\u73AF\u7CFB\u7EDF\u3002\u4F9B 16 \u4EBA\u6C27\u6C14\u548C\u7528\u6C34\uFF0C20 \u7C73\u5185\u8865\u6C27\u3002"},terraformer:{name:"\u5927\u6C14\u6539\u9020\u5854",icon:"planet",cat:"stellar",chapter:4,only:"terraformable",cost:{iron:100,silicon:60,titanium:30,ice:50},power:-12,r:7.4,hp:800,desc:"\u5411\u5929\u7A7A\u91CA\u653E\u6E29\u5BA4\u6C14\u4F53\u4E0E\u6C34\u6C7D\u3002\u8BA9\u8FD9\u9897\u661F\u7403\uFF0C\u771F\u6B63\u6210\u4E3A\u5BB6\u3002"},launch:{name:"\u661F\u9645\u53D1\u5C04\u53F0",icon:"ship",cat:"stellar",chapter:5,level:ne==="mars"?5:4,only:"route",cost:{iron:160,silicon:120,titanium:60,ice:60},power:-15,r:9.5,hp:900,desc:"\u661F\u9645\u822A\u7EBF\u7684\u8D77\u70B9\u3002\u9760\u8FD1\u6309 E \u6253\u5F00\u661F\u56FE\uFF0C\u524D\u5F80\u65B0\u7684\u661F\u7403\u6216\u56DE\u5230\u5DF2\u5F00\u62D3\u7684\u5BB6\u56ED\u3002"},monument:{name:"\u6587\u660E\u7EAA\u5FF5\u7891",icon:"monument",cat:"stellar",level:5,only:"final",cost:{iron:150,silicon:120,titanium:80},power:-6,r:6.5,hp:900,desc:"\u4E09\u9897\u661F\u7403\uFF0C\u4E00\u4E2A\u4EBA\u7C7B\u3002\u732E\u7ED9\u6240\u6709\u51FA\u53D1\u7684\u4EBA\u3002"}},Ff=3,zf=[1,1,1.6,2.2],vb=["lamp","beacon","fabricator","plaza","trade","terraformer","launch","monument"];function rh(n){return!vb.includes(n.type)&&(n.level||1)<Ff}function Ai(n,t){let e=n.def,i=n.level||1,s=e[t];if(!s)return 0;if(t==="power")return s>0?s*zf[i]*(n.type==="solar"&&ke("pv")?1.5:1)*(n.type==="reactor"&&ke("fusion")?1.4:1):s*(1+.25*(i-1));if(t==="life")return s+3*(i-1);if(t==="range")return s+8*(i-1)+(ke("plasma")?10:0);if(t==="hp")return s*(1+.5*(i-1))*(ke("alloy")?1.5:1);let r=t==="o2"&&ke("sieve")||t==="food"&&ke("hydro")||t==="water"&&ke("drill")?1.5:1;return Math.round(s*zf[i]*r)}function Of(n){let t=n.level||1,e={};for(let i in n.def.cost)e[i]=Math.ceil(n.def.cost[i]*(t===1?.8:1.3));return e.titanium=(e.titanium||0)+(t===1?3:8),e}function Bg(n){if(!rh(n))return!1;let t=Of(n);return Si(t)?(qa(t),n.level=(n.level||1)+1,Gg(n,!0),Z.play("place"),ut.ring(new T(n.x,n.y,n.z),n.def.r*1.2,60,[.5,.9,1]),Zi(),!0):!1}function Gg(n,t){let e=n.level||1;n.maxHp=Ai(n,"hp"),n.hp=Math.min(n.maxHp,t?n.maxHp:n.hp);let i=1+(e-1)*.12;n.group.scale.set(i,n.group.scale.y,i),n.baseScale=i,n.anim._pips&&n.anim._pips.forEach(r=>n.group.remove(r)),n.anim._pips=[];let s=Math.max(2.5,n.def.r*.9);for(let r=1;r<e;r++)n.anim._pips.push(Mt(16757596,1.4,n.group,(r-e/2)*.9,s+1.2,0));if(t){n.buildT=.35;let r=new lt(new Dt(n.def.r*1.05,.08,6,48),Vg.clone());r.rotation.x=Math.PI/2,r.position.set(n.x,n.y,n.z),h.scene.add(r),n.anim._scan=r}}function Ki(n){let t=Cn[n];return t.only==="terraformable"&&!ht.terraformable?{hide:!0}:t.only==="route"&&!ht.next&&!(pn.visited||[]).some(e=>e.id!==ne)?{hide:!0}:t.only==="final"&&ht.next?{hide:!0}:!Vn()&&ne==="mars"&&t.chapter&&t.chapter>h.chapter?{ok:!1,why:"\u5267\u60C5\u63A8\u8FDB\u540E\u89E3\u9501"}:t.level&&t.level>h.cityLevel?{ok:!1,why:`\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C${An[t.level].name}\u300D\u89E3\u9501`}:{ok:!0}}var Bf=["solar","oxygen","lamp","habitat","greenhouse","extractor","beacon","fabricator","drones","lab","trade","turret","reactor","plaza","apartment","vfarm","lifehub","terraformer","launch","monument"],Mb=["oxygen","lifehub","turret","habitat","apartment","extractor","greenhouse","vfarm","beacon","plaza","lab","trade","drones","fabricator","terraformer","launch","monument"],Vg=new Yt({color:8382207,transparent:!0,opacity:.8,blending:fe,depthWrite:!1,side:Ge});function oh(n,t,e,i=0,s,r=!1,o=1){let a=Cn[n],l=new ft,c={};Bn[n](l,c);let u=xt(t,e);if(l.position.set(t,u,e),l.rotation.y=i,h.scene.add(l),r){l.scale.set(1,.001,1);let f=new lt(new Dt(a.r*1.05,.08,6,48),Vg.clone());f.rotation.x=Math.PI/2,f.position.set(t,u,e),h.scene.add(f),c._scan=f}let d={buildT:r?0:1,type:n,def:a,x:t,z:e,y:u,rot:i,group:l,anim:c,hp:s??a.hp,broken:s!==void 0&&s<=0,powered:!0,t:Math.random()*10,cool:0};return d.collider=h.colliders.add({x:t,z:e,r:a.r*(n==="beacon"?.15:n==="plaza"?.28:.9),kind:"building",b:d}),d.level=o,d.maxHp=Ai(d,"hp"),s===void 0&&(d.hp=d.maxHp),o>1&&Gg(d,!1),h.buildings.push(d),h.stats.built[n]=(h.stats.built[n]||0)+1,Rg(d),Zi(),d}function Wg(n,t=!1){if(t)for(let s in n.def.cost)h.res[s]+=Math.floor(n.def.cost[s]*.5);h.scene.remove(n.group),h.colliders.remove(n.collider),Ag(n),n.type==="drones"&&Fg(n);let e=h.buildings.indexOf(n);e>=0&&h.buildings.splice(e,1),h.stats.built[n.type]=Math.max(0,(h.stats.built[n.type]||0)-1);let i=new T(n.x,n.y+2,n.z);ut.burst(i,[1,.6,.3],60,10),ut.dustPuff(i,30,n.def.r*2),Zi()}function $g(n){return h.buildings.filter(t=>t.type===n).length}function Zi(){let n=h.colony,t=(h.time.elevation>.05?1:.4)*ht.solar,e=0,i=0;for(let r of h.buildings){if(r.broken)continue;let o=Ai(r,"power");o>0?e+=r.type==="solar"?o*t:o:i-=o}let s=e;for(let r of h.buildings)r.powered=r.def.power>=0&&!r.broken,r.maxHp=Ai(r,"hp");for(let r of Mb)for(let o of h.buildings){if(o.type!==r)continue;let a=Ai(o,"power");!o.broken&&s>=-a&&(s+=a,o.powered=!0)}n.powerProd=e,n.powerUse=i,n.deficit=i>e+.001,n.housing=0,n.o2=0,n.food=0,n.water=0;for(let r of h.buildings)n.housing+=Ai(r,"housing"),r.powered&&(n.o2+=Ai(r,"o2"),n.food+=Ai(r,"food"),n.water+=Ai(r,"water"));n.support=Math.min(n.housing,n.o2,n.food,n.water)}function Xg(n){for(let t of h.buildings){let e=Ai(t,"life");if(!e||!t.powered)continue;let i=t.x-n.x,s=t.z-n.z;if(i*i+s*s<e*e)return t}return null}var Yi=null,_b=null,qg=new Yt({color:5636010,transparent:!0,opacity:.35,depthWrite:!1}),Eb=new Yt({color:16729156,transparent:!0,opacity:.35,depthWrite:!1}),li,be={type:null,rot:0,valid:!1,reason:"",x:0,z:0};function Br(n){if(Yi&&(h.scene.remove(Yi),Yi=null),be.type=n,_b=n,!n){li&&(li.visible=!1);return}let t=new ft;Bn[n](t,{}),t.traverse(i=>{i.isMesh&&(i.material=qg,i.castShadow=!1,i.receiveShadow=!1),(i.isSprite||i.userData.found)&&(i.visible=!1)}),Yi=t,h.scene.add(t),li||(li=new lt(new fn(.96,1,64),new Yt({color:6741503,transparent:!0,opacity:.5,depthWrite:!1,side:Ge})),li.rotation.x=-Math.PI/2,h.scene.add(li));let e=Cn[n].life||Cn[n].range||0;li.visible=e>0,li.scale.setScalar(e||1)}function Yg(n,t){if(!Yi)return;if(!n){Yi.visible=!1,li.visible=!1,be.valid=!1,be.reason="\u5BF9\u51C6\u5730\u9762";return}Yi.visible=!0;let e=Cn[be.type],i=n.x,s=n.z,r=Math.hypot(i-t.x,s-t.z),o=e.r+1.2;if(r<o){let u=r>.01?(i-t.x)/r:-Math.sin(h.player.yaw),d=r>.01?(s-t.z)/r:-Math.cos(h.player.yaw);i=t.x+u*o,s=t.z+d*o,r=o}let a=xt(i,s);Yi.position.set(i,a,s),Yi.rotation.y=be.rot,be.x=i,be.z=s,li.scale.x>1&&(li.visible=!0,li.position.set(i,a+.3,s));let l="";Si(e.cost)?Nr(i,s,Math.max(1.5,e.r*.7))>(e.r>4?.32:.45)?l="\u5730\u9762\u592A\u9661":h.colliders.overlaps(i,s,e.r*.85)?l="\u4F4D\u7F6E\u88AB\u5360\u7528":r<e.r+.8?l="\u79BB\u81EA\u5DF1\u592A\u8FD1":Math.abs(i)>Zt-170||Math.abs(s)>Zt-170?l="\u8D85\u51FA\u53EF\u5EFA\u9020\u533A\u57DF":wg(i,s,e.r)||(l="\u8D85\u51FA\u6B96\u6C11\u5730\u9886\u5730\uFF08\u63D0\u5347\u57CE\u5E02\u7B49\u7EA7\u6765\u6269\u5F20\uFF09"):l="\u8D44\u6E90\u4E0D\u8DB3",be.valid=!l,be.reason=l;let c=l?Eb:qg;Yi.traverse(u=>{u.isMesh&&(u.material=c)})}function Zg(){if(!be.type||!be.valid)return Z.play("deny"),null;let n=Cn[be.type];qa(n.cost);let t=oh(be.type,be.x,be.z,be.rot,void 0,!0);return Z.play("place"),ut.ring(new T(t.x,t.y,t.z),n.r,50),t}var Hf=0;function Kg(n,t){Hf-=n,Hf<=0&&(Hf=.5,Zi()),Cg(),Og(n);let e=h.time.night,i=performance.now()*.001;y.window.emissiveIntensity=.3+e*.85,y.lamp.emissiveIntensity=e*4;for(let s of Ja)s.emissiveIntensity=.15+e*1.4;for(let s of h.buildings){let r=s.anim,o=s.powered;if(s.t+=n,s.buildT<1){s.buildT=Math.min(1,s.buildT+n/1.3);let a=s.buildT,l=1+2.2*Math.pow(a-1,3)+1.2*Math.pow(a-1,2);s.group.scale.y=Math.max(.001,l)*(s.baseScale||1);let c=Math.max(3,s.def.r*1.4)*(s.type==="apartment"||s.type==="launch"||s.type==="terraformer"||s.type==="monument"?4:1);r._scan.position.y=s.y+a*c,r._scan.material.opacity=.8*(1-a),r._scan.scale.setScalar(1-a*.25),Math.random()<.5&&ut.spark(new T(s.x+(Math.random()-.5)*s.def.r*2,s.y+a*c,s.z+(Math.random()-.5)*s.def.r*2),[.5,.9,1],1,2,.6),a>=1&&(h.scene.remove(r._scan),r._scan.geometry.dispose(),delete r._scan)}switch(s.hp<s.maxHp&&h.time.night<.5&&(s.hp=Math.min(s.maxHp,s.hp+n*(s.broken?5:2)),s.broken&&s.hp>=s.maxHp*.5&&(s.broken=!1,Zi(),h.events.emit("toast",`\u2713 ${s.def.name} \u5DF2\u4FEE\u590D\uFF0C\u6062\u590D\u8FD0\u8F6C`))),s.broken&&Math.random()<n*6&&ut.dustPuff(new T(s.x+(Math.random()-.5)*s.def.r,s.y+1.5,s.z+(Math.random()-.5)*s.def.r),1,.5,[.15,.13,.12]),s.type){case"solar":{let a=new T(Ri.x,Math.max(Ri.y,.2),Ri.z).applyAxisAngle(new T(0,1,0),-s.rot);r.pivot.rotation.y=Math.atan2(a.x,a.z),r.panel.rotation.x=Math.PI/2-Math.asin(Math.min(1,a.y/a.length()));break}case"oxygen":o&&(r.fan.rotation.z+=n*8),r.light.visible=o;break;case"extractor":o&&(r.drill.position.y=3+Math.sin(s.t*3)*.8),r.light.visible=o;break;case"greenhouse":r.light.material.opacity=o?.3+e*.5:0;break;case"fabricator":o?(r.arm.rotation.y=Math.sin(s.t*.8)*1.2,r.spark.visible=Math.sin(s.t*7)>.6):r.spark.visible=!1;break;case"habitat":r.tip.visible=Math.sin(i*2+s.x)>.3;break;case"apartment":r.tip.visible=Math.sin(i*2+s.z)>.3;break;case"vfarm":r.light.material.opacity=o?.25+e*.5:0;break;case"lifehub":o&&(r.fan.rotation.y+=n*3),r.light.visible=o;break;case"plaza":r.earth.rotation.y+=n*.25,r.earth.position.y=4+Math.sin(i*.8)*.15,r.earth.material.opacity=o?.55-e*.15:.15,r.halo.material.opacity=o?.25+e*.2:0;break;case"lab":r.scope&&(r.scope.rotation.z=Math.sin(i*.2)*.4),r.tip&&(r.tip.visible=Math.sin(i*2.5)>0),r.light&&(r.light.visible=o);break;case"trade":r.jib&&(r.jib.rotation.y=Math.sin(i*.15)*1.2),r.tip&&(r.tip.visible=Math.sin(i*3)>0);break;case"monument":r.rings.forEach((a,l)=>{a.rotation.x=i*(.3+l*.2),a.rotation.y=i*(.2+l*.15)});break;case"reactor":r.r1.rotation.y+=n*.8,r.r2.rotation.z+=n*.6,r.light.material.opacity=.5+Math.sin(i*3)*.2;break;case"beacon":{let a=Math.floor(i*6)%8;r.lights.forEach((l,c)=>{l.visible=o&&(c===a||c===(a+4)%8||e>.3)}),r.tip.visible=Math.sin(i*3)>0;break}case"lamp":r.glow.visible=e>.2,r.glow.material.opacity=e*.6;break;case"turret":bb(s,n,t);break;case"terraformer":{r.rings.forEach((a,l)=>{a.position.y=10+l*8+Math.sin(i*1.5+l)*1.5,a.rotation.x=Math.sin(i+l)*.2}),r.beam.material.opacity=o&&h.terraform<1?.18+Math.sin(i*4)*.05:0,o&&h.terraform<1&&Math.random()<.6&&ut.rise(new T(s.x,s.y+28,s.z),[.4,.9,1],4);break}}}}function bb(n,t,e){let i=n.anim;if(i.eye.visible=n.powered,!n.powered)return;n.cool-=t;let s=null,r=Ai(n,"range");for(let l of h.enemies){if(l.dead)continue;let c=Math.hypot(l.pos.x-n.x,l.pos.z-n.z);c<r&&(r=c,s=l)}if(!s){i.head.rotation.y+=t*.4;return}let a=Math.atan2(-(s.pos.x-n.x),-(s.pos.z-n.z))-n.rot-i.head.rotation.y;if(a=Math.atan2(Math.sin(a),Math.cos(a)),i.head.rotation.y+=Math.sign(a)*Math.min(Math.abs(a),t*5),Math.abs(a)<.15&&n.cool<=0){n.cool=.45;let l=new T(n.x,n.y+2.7,n.z),c=s.pos.clone();c.y+=1;let u=c.sub(l).normalize();l.addScaledVector(u,2.2),e.shoot(l,u,15*zf[n.level||1]*(ke("plasma")?1.5:1),"turret"),Z.play("turret")}}function Jg(){return h.buildings.map(n=>[n.type,+n.x.toFixed(2),+n.z.toFixed(2),+n.rot.toFixed(3),Math.round(n.hp),n.level||1])}var dl=new T;function ci(n,t,e,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;dl.copy(t),dl[i]=0,dl.normalize();let c=.5*o/(o+a),u=1-dl.angleTo(n)/l;return Math.sign(dl[e])===1?u*c:a/(o+a)+c+c*(1-u)}var Qo=class extends Gt{constructor(t=1,e=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new T,l=new T,c=new T(t,e,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,g=new T,v=.5/s;for(let x=0,m=0;x<u.length;x+=3,m+=2)switch(a.fromArray(u,x),l.copy(a),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),u[x+0]=c.x*Math.sign(a.x)+l.x*r,u[x+1]=c.y*Math.sign(a.y)+l.y*r,u[x+2]=c.z*Math.sign(a.z)+l.z*r,d[x+0]=l.x,d[x+1]=l.y,d[x+2]=l.z,Math.floor(x/p)){case 0:g.set(1,0,0),f[m+0]=ci(g,l,"z","y",r,i),f[m+1]=1-ci(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),f[m+0]=1-ci(g,l,"z","y",r,i),f[m+1]=1-ci(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),f[m+0]=1-ci(g,l,"x","z",r,t),f[m+1]=ci(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),f[m+0]=1-ci(g,l,"x","z",r,t),f[m+1]=1-ci(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),f[m+0]=1-ci(g,l,"x","y",r,t),f[m+1]=1-ci(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),f[m+0]=ci(g,l,"x","y",r,t),f[m+1]=1-ci(g,l,"y","x",r,e);break}}};var it=(n,t,e)=>new T(n,t,e);function C(n,t,e=0,i=0,s=0,r,o=0,a=0,l=0){let c=new lt(n,t);return c.position.set(e,i,s),c.rotation.set(o,a,l),c.castShadow=!0,c.receiveShadow=!0,r&&r.add(c),c}var dt=(n,t,e,i=.06)=>new Qo(n,t,e,2,Math.min(i,n/2.1,t/2.1,e/2.1)),Lt=(n,t,e,i=24,s=!1)=>new Wt(n,t,e,i,1,s),We=(n,t=32)=>new gs(n.map(([e,i])=>new nt(e,i)),t);function Pe(n,t,e,i,s,r=10){let o=t.clone().sub(n),a=o.length(),l=C(Lt(e,e,a,r),i,0,0,0,s);return l.position.copy(n).add(t).multiplyScalar(.5),l.quaternion.setFromUnitVectors(it(0,1,0),o.normalize()),l}function wb(n,t,e,i,s){let r=Pe(n,t,e,i,s);for(let o of[n,t]){let a=Pe(o.clone().lerp(t===o?n:t,.02),o,e*1.6,y.metal,s);a.scale.y=1}return r}function Ci(n,t,e,i,s=32){let r=new Va(n);return C(new Cc(r,s,t,8,!1),e,0,0,0,i)}function Sb(n,t,e,i,s,r){let o=n.clone().lerp(t,.5);return o.y-=e,Ci([n,n.clone().lerp(o,.5).add(it(0,-e*.15,0)),o,t.clone().lerp(o,.5).add(it(0,-e*.15,0)),t],i,s,r,24)}function lh(n,t,e,i,s,r=0,o=.5){let a=new ft;a.position.set(t,e,i),a.rotation.y=r,n.add(a),C(Lt(.035,.035,s,6),y.metal,-o/2,s/2,0,a),C(Lt(.035,.035,s,6),y.metal,o/2,s/2,0,a);for(let l=.25;l<s;l+=.32)C(Lt(.022,.022,o,6),y.metal,0,l,0,a,0,0,Math.PI/2);return a}function hi(n,t,e,i,s,r,o=0,a=8){let l=new ft;l.position.set(i,s,r),l.rotation.y=o,n.add(l),C(dt(t,e,.08,.02),y.dark,0,0,0,l);for(let c=0;c<a;c++)C(new Gt(t*.9,e/a*.45,.04),y.metal,0,-e/2+(c+.5)*e/a,.05,l,-.4,0,0);return l}function Gr(n,t,e,i,s,r=0,o=0){let a=new ft;a.position.set(t,e,i),a.rotation.set(o,r,0),n.add(a),C(new Dt(s,s*.18,8,24),y.metal,0,0,0,a),C(new Zs(s*.95,24),y.window,0,0,-.01,a);for(let l=0;l<8;l++){let c=l/8*Math.PI*2;C(new Bt(s*.06,6,4),y.metal,Math.cos(c)*s*1.12,Math.sin(c)*s*1.12,.02,a)}return a}function Wf(n,t,e,i,s=.05){for(let r=0;r<i;r++){let o=r/i*Math.PI*2;C(Lt(s,s,s*1.2,6),y.metal,Math.cos(o)*t,e,Math.sin(o)*t,n)}}function Gf(n,t,e,i,s=.22,r=0,o=0){let a=new ft;a.position.set(t,e,i),a.rotation.set(r,o,0),n.add(a),C(new Dt(s,s*.12,6,18),y.red2,0,0,0,a);for(let l=0;l<3;l++)C(new Gt(s*2,s*.12,s*.12),y.red2,0,0,0,a,0,0,l*Math.PI/3);return C(Lt(s*.25,s*.25,s*.6,8),y.metal,0,0,-s*.3,a,Math.PI/2,0,0),a}function ta(n,t,e,i,s=0){let r=new ft;return r.position.set(t,e,i),r.rotation.y=s,n.add(r),C(Lt(.13,.13,.06,18),y.metal,0,0,0,r,Math.PI/2,0,0),C(new Zs(.11,18),y.screen,0,0,.032,r),r}function Pi(n,t,e,i,s,r,o=0){return C(new Gt(t,e,.02),y.hazard,i,s,r,n,0,o,0)}function fl(n,t,e,i,s,r,o,a,l=0){let c=new ft;c.rotation.y=l,n.add(c);for(let u=0;u<e;u++){let d=.12+t()*.35,f=.1+t()*.3,p=.04+t()*.12,g=t(),v=g<.5?y.panel:g<.8?y.dark:y.metal;t()<.3?C(Lt(d*.3,d*.3,p*2,10),v,i+t()*(s-i),r+t()*(o-r),a+p,c,Math.PI/2,0,0):C(dt(d,f,p,.015),v,i+t()*(s-i),r+t()*(o-r),a+p/2,c)}return c}function hr(n){let t=n;return()=>(t=t*16807%2147483647,(t-1)/2147483646)}{let n=document.createElement("canvas");n.width=128,n.height=32;let t=n.getContext("2d");t.fillStyle="#f2c11a",t.fillRect(0,0,128,32),t.fillStyle="#1a1a1a";for(let u=-32;u<160;u+=24)t.beginPath(),t.moveTo(u,32),t.lineTo(u+12,32),t.lineTo(u+44,0),t.lineTo(u+32,0),t.fill();let e=new on(n);e.colorSpace=ye,e.wrapS=fs,e.repeat.set(2,1),y.hazard=new pt({map:e,roughness:.7}),y.red2=new pt({color:13120030,roughness:.5,metalness:.3}),y.chrome=new pt({color:14738666,roughness:.15,metalness:1}),y.rubber=new pt({color:1842206,roughness:.92}),y.ablative=new pt({color:3811874,roughness:.95,map:y.found.map,bumpMap:y.found.bumpMap,bumpScale:3}),y.soil=new pt({color:3875864,roughness:1}),y.leaf=new pt({color:4168250,roughness:.7,flatShading:!0}),y.leaf2=new pt({color:7127626,roughness:.7,flatShading:!0}),y.fruit=new pt({color:14694428,roughness:.4}),y.growlight=new pt({color:2228241,emissive:16732120,emissiveIntensity:2.2});let i=document.createElement("canvas");i.width=i.height=64;let s=i.getContext("2d");s.fillStyle="#0a1a14",s.fillRect(0,0,64,64),s.strokeStyle="#6dffb5",s.lineWidth=3,s.beginPath(),s.arc(32,36,22,Math.PI*1.1,Math.PI*1.9),s.stroke(),s.beginPath(),s.moveTo(32,36),s.lineTo(46,22),s.stroke();let r=new on(i);r.colorSpace=ye,y.screen=new pt({map:r,emissive:16777215,emissiveMap:r,emissiveIntensity:.9});let o=document.createElement("canvas");o.width=128,o.height=128;let a=o.getContext("2d"),l=a.createLinearGradient(0,0,128,128);l.addColorStop(0,"#16285a"),l.addColorStop(.5,"#2a4a9a"),l.addColorStop(1,"#122048"),a.fillStyle=l,a.fillRect(0,0,128,128),a.strokeStyle="rgba(200,220,255,.55)",a.lineWidth=1;for(let u=16;u<128;u+=16)a.beginPath(),a.moveTo(u,0),a.lineTo(u,128),a.stroke();a.strokeStyle="rgba(220,230,255,.8)",a.lineWidth=2,a.beginPath(),a.moveTo(0,64),a.lineTo(128,64),a.stroke();let c=new on(o);c.colorSpace=ye,c.anisotropy=8,y.cell=new pt({map:c,roughness:.12,metalness:.6,envMapIntensity:1.8})}function En(n,t,e=!1){let i=e?C(dt(t*2,4,t*2,.12),y.found,0,-1.8,0,n):C(Lt(t,t*1.05,4,32),y.found,0,-1.8,0,n);i.castShadow=!1,i.userData.found=!0}Object.assign(Bn,{solar(n,t){En(n,2.2,!0),C(dt(1.4,.25,1.4,.05),y.panel,0,.12,0,n),Wf(n,.55,.27,8,.04),C(We([[0,0],[.3,0],[.26,.4],[.17,.6],[.15,2.1],[0,2.1]]),y.metal,0,.25,0,n),C(dt(.5,.6,.4,.05),y.dark,.32,.65,0,n),ta(n,.57,.7,0,Math.PI/2),Sb(it(.4,.5,.15),it(1.3,.05,.9),.15,.03,y.rubber,n);let e=new ft;e.position.y=2.45,n.add(e),C(dt(.5,.42,.5,.06),y.dark,0,0,0,e),C(Lt(.12,.12,.9,12),y.chrome,0,.1,0,e,0,0,Math.PI/2);let i=new ft;i.position.y=.25,e.add(i),C(dt(4.4,.1,3,.03),y.metal,0,-.02,0,i);for(let s=0;s<4;s++)for(let r=0;r<3;r++){let o=C(new Gt(1.02,.03,.92),y.cell,-1.6+s*1.07,.045,-.97+r*.97,i);o.castShadow=!0}for(let s of[-1.1,1.1])C(new Gt(4.2,.08,.06),y.metal,0,-.1,s,i);for(let s of[-1.5,0,1.5])C(new Gt(.06,.08,2.6),y.metal,s,-.1,0,i);Pe(it(-1.5,-.12,-1.1),it(0,-.35,0),.03,y.metal,i),Pe(it(1.5,-.12,1.1),it(0,-.35,0),.03,y.metal,i),Pe(it(1.5,-.12,-1.1),it(0,-.35,0),.03,y.metal,i),Pe(it(-1.5,-.12,1.1),it(0,-.35,0),.03,y.metal,i),C(dt(.3,.12,.2,.02),y.dark,1.9,.08,1.35,i),t.pivot=e,t.panel=i},oxygen(n,t){En(n,3);let e=hr(11);C(Lt(3,3.1,.35,40),y.panel,0,.17,0,n);for(let s of[-1.35,1.35]){let r=new ft;r.position.set(s,.35,-.3),n.add(r),C(We([[0,.2],[.55,.22],[.9,.45],[1,.8],[1,3.2],[.9,3.55],[.55,3.78],[0,3.8]],40),y.white,0,0,0,r);for(let o of[1.2,2.4])C(new Dt(1.005,.03,6,40),y.metal,0,o,0,r,Math.PI/2,0,0);C(Lt(1.015,1.015,.25,40,!0),y.orange,0,1.8,0,r);for(let o of[-.6,.6])C(dt(1.6,.35,.2,.04),y.dark,0,.25,o,r);C(Lt(.12,.12,.3,12),y.metal,0,3.9,0,r),Gf(r,0,4.1,0,.18,Math.PI/2,0),ta(r,0,2.2,1.02),lh(r,0,.3,-1.05,3.4,Math.PI)}C(dt(1.7,1.9,1.6,.1),y.panel,0,1.3,1.2,n),C(dt(1.8,.2,1.7,.05),y.orange,0,2.3,1.2,n),fl(n,e,10,-.7,.7,.6,2,1.95),hi(n,1,.5,0,.7,2.01,0,6),C(new Dt(.42,.06,8,28),y.dark,0,1.75,2.02,n);let i=new ft;i.position.set(0,1.75,2.03),n.add(i);for(let s=0;s<6;s++)C(new Gt(.1,.36,.02),y.metal,Math.sin(s*Math.PI/3)*.2,Math.cos(s*Math.PI/3)*.2,0,i,0,.4,-s*Math.PI/3);C(Lt(.08,.08,.06,12),y.chrome,0,0,0,i,Math.PI/2,0,0),t.fan=i;for(let s of[-1.35,1.35])Ci([it(s,3.2,.5),it(s*.7,3,.9),it(s*.3,2.4,1.2),it(s*.25,2.2,1.3)],.07,y.metal,n);wb(it(-1.35,.9,.7),it(1.35,.9,.7),.06,y.metal,n),Gf(n,.8,.9,.85,.15,0,0),ta(n,-.5,2,2.01),ta(n,.5,2,2.01),t.light=Mt(6741503,.45,n,.6,2.05,2.05),Pi(n,1.8,.12,0,.42,2.02)},habitat(n,t){En(n,6.2);let e=hr(23);C(We([[0,0],[6.25,0],[6.3,.15],[6.25,.9],[6.05,1.05],[5.95,1.25],[0,1.25]],64),y.panel,0,0,0,n);for(let o=0;o<16;o++){let a=o/16*Math.PI*2;Math.abs(a-Math.PI/2)<.3||hi(n,.7,.4,Math.cos(a)*6.28,.55,Math.sin(a)*6.28,-a+Math.PI/2,4)}let i=C(new Bt(5.8,64,24,0,Math.PI*2,0,Math.PI/2),y.white,0,1.2,0,n);i.scale.y=.85;for(let o=0;o<12;o++)C(new Dt(5.86,.08,6,32,Math.PI/2),y.panel,0,1.2,0,n,0,o*Math.PI/6,0).scale.set(1,.85,1);for(let[o,a]of[[2.6,5.62],[4.3,4.6]])C(new Dt(a,.07,6,64),y.panel,0,o,0,n,Math.PI/2,0,0);t.windows=[];for(let o=0;o<14;o++){let a=o/14*Math.PI*2+.11;if(Math.abs(a-Math.PI/2)<.35)continue;let l=new ft;l.position.set(Math.cos(a)*5.76,2,Math.sin(a)*5.76),l.rotation.y=-a+Math.PI/2,l.rotation.x=-.18,n.add(l),C(dt(1.15,.62,.16,.08),y.metal,0,0,0,l),C(dt(1,.48,.1,.07),y.window,0,0,.05,l)}C(Lt(1.2,1.4,.5,32),y.panel,0,6.05,0,n),C(new Bt(1,32,12,0,Math.PI*2,0,Math.PI/2),y.glass,0,6.3,0,n).castShadow=!1,C(new Dt(1.05,.06,6,32),y.metal,0,6.3,0,n,Math.PI/2,0,0),C(Lt(.06,.09,3.2,8),y.metal,1.6,7,0,n),t.tip=Mt(16728128,1,n,1.6,8.7,0),C(new Bt(.55,20,8,0,Math.PI*2,0,Math.PI/3),y.white,-1.4,6.6,.6,n).rotation.set(-.9,.5,0),C(Lt(.05,.05,.9,6),y.metal,-1.4,6.1,.6,n),lh(n,0,1.25,-5.4,3.2,0,.45).rotation.x=-.6;let r=new ft;r.position.set(0,0,6.2),n.add(r),C(dt(2.6,2.9,3,.25),y.white,0,1.45,.2,r),C(dt(2.64,.12,3.04,.05),y.orange,0,2.62,.2,r),C(dt(1.5,2.2,.15,.12),y.metal,0,1.25,1.72,r),C(dt(1.2,1.95,.1,.1),y.dark,0,1.2,1.78,r),Gr(r,0,1.75,1.84,.22),C(dt(.12,.4,.08,.03),y.chrome,.45,1.1,1.85,r),Pi(r,1.5,.14,0,.12,1.85);for(let o=0;o<3;o++)C(dt(1.4,.12,.35,.03),y.metal,0,.06+o*0,2.05+o*.35,r).position.y=.3-o*.12;Mt(16769184,.8,r,1,2.5,1.8),C(dt(.5,.35,.3,.04),y.dark,-1,2.4,1.75,r),fl(r,e,8,-1.2,1.2,.4,2.6,1.7,0),Ci([it(4.5,1,3.5),it(5.6,.6,4.2),it(6.6,.25,4.6),it(7.6,.2,4.6)],.12,y.metal,n),Ci([it(-4.5,1,3.5),it(-5.4,.7,4.4),it(-6.4,.25,5)],.1,y.orange,n);for(let[o,a,l]of[[-6.3,-2.4,.4],[6.4,-2,-.3]]){let c=new ft;c.position.set(o,0,a),c.rotation.y=l,n.add(c),C(dt(1.4,1.1,1,.08),y.panel,0,.55,0,c),hi(c,.9,.7,0,.6,.51,0,6),C(new Dt(.35,.05,6,20),y.dark,0,1.12,0,c,Math.PI/2,0,0)}},extractor(n,t){En(n,2.6,!0),C(dt(4.6,.5,4.6,.08),y.panel,0,.25,0,n),Pi(n,4.6,.15,0,.42,2.31),Pi(n,4.6,.15,0,.42,-2.31);let e=6.4,i=.6,s=1.6,r=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let[a,l]of r)Pe(it(a*s,.5,l*s),it(a*i,e,l*i),.09,y.orange,n);for(let a=0;a<3;a++){let l=.5+a*(e-.5)/3,c=l+(e-.5)/3,u=s+(i-s)*(a/3),d=s+(i-s)*((a+1)/3);for(let f=0;f<4;f++){let[p,g]=r[f],[v,x]=r[(f+1)%4];Pe(it(p*u,l,g*u),it(v*d,c,x*d),.035,y.metal,n),Pe(it(v*u,l,x*u),it(p*d,c,g*d),.035,y.metal,n),Pe(it(p*d,c,g*d),it(v*d,c,x*d),.04,y.metal,n)}}C(dt(1.8,.3,1.8,.05),y.dark,0,e+.1,0,n);for(let[a,l]of r)C(Lt(.03,.03,.7,6),y.metal,a*.85,e+.6,l*.85,n);C(Lt(.45,.45,.6,20),y.white,0,e+.55,0,n),t.light=Mt(10476799,1,n,0,e+1.1,0);let o=new ft;o.position.y=3,n.add(o),C(Lt(.18,.18,4.6,16),y.chrome,0,0,0,o);for(let a=0;a<5;a++)C(new Dt(.2,.04,6,16),y.metal,0,-2+a*1,0,o,Math.PI/2,0,0);C(new Fe(.3,.7,16),y.dark,0,-2.6,0,o,Math.PI,0,0),t.drill=o,C(We([[0,0],[.9,0],[1,.2],[1,1.8],[.8,2.1],[0,2.15]],32),y.white,2.1,.5,1.3,n),C(Lt(1.01,1.01,.2,32,!0),y.orange,2.1,1.6,1.3,n),ta(n,2.1,1.2,2.31),Ci([it(.3,1,.3),it(.9,1.2,.8),it(1.5,1.6,1.2),it(2.1,2.7,1.3)],.08,y.metal,n),Gf(n,1.2,1.25,1.1,.14,0,.6),C(dt(1.2,1,.9,.08),y.dark,-1.7,1,1.4,n),hi(n,.8,.5,-1.7,1,1.86,0,5)},greenhouse(n,t){En(n,5,!0),C(dt(10.4,.5,6.4,.1),y.panel,0,.25,0,n);let e=C(new Wt(3,3,10,40,1,!0,0,Math.PI),y.glass,0,.5,0,n,0,0,Math.PI/2);e.castShadow=!1;for(let s=0;s<9;s++)C(new Dt(3.02,.06,6,28,Math.PI),y.white,-4.8+s*1.2,.5,0,n,0,Math.PI/2,0);for(let s=1;s<6;s++){let r=s/6*Math.PI;C(Lt(.035,.035,9.8,6),y.white,0,.5+Math.sin(r)*3.02,Math.cos(r)*3.02,n,0,0,Math.PI/2)}for(let s of[-1,1]){let r=C(new Zs(3,32,0,Math.PI),y.glass,s*5,.5,0,n,0,s*Math.PI/2,0);r.castShadow=!1,C(dt(.12,2.2,1.3,.04),y.white,s*5,1.6,0,n)}C(dt(.1,1.9,1,.05),y.dark,5.05,1.45,0,n);let i=hr(71);for(let s of[-1.5,0,1.5]){C(dt(9,.5,.9,.05),y.dark,0,.75,s,n),C(new Gt(8.8,.06,.8),y.soil,0,1.01,s,n);for(let r=0;r<10;r++){let o=-4.1+r*.9+(i()-.5)*.2,a=(r+Math.round(s))%3;if(a===0)for(let l=0;l<4;l++)C(new Nn(.22+i()*.12,0),l%2?y.leaf:y.leaf2,o+(i()-.5)*.3,1.2+i()*.25,s+(i()-.5)*.3,n).castShadow=!1;else if(a===1){C(Lt(.02,.02,1.2,4),y.leaf,o,1.6,s,n);for(let l=0;l<5;l++)C(new Nn(.14,0),y.leaf2,o+(i()-.5)*.3,1.2+l*.22,s+(i()-.5)*.3,n).castShadow=!1;for(let l=0;l<3;l++)C(new Bt(.07,8,6),y.fruit,o+(i()-.5)*.3,1.3+i()*.8,s+(i()-.5)*.25,n)}else for(let l=0;l<6;l++){let c=C(new Fe(.05,.5,4),y.leaf2,o+(i()-.5)*.25,1.25,s+(i()-.5)*.25,n,(i()-.5)*.6,0,(i()-.5)*.6);c.castShadow=!1}}}for(let s of[-.75,.75])C(dt(9,.06,.12,.02),y.growlight,0,2.7,s,n);t.light=Mt(16737996,4,n,0,2.3,0),C(We([[0,0],[.6,0],[.65,.1],[.65,1.5],[.5,1.7],[0,1.72]],24),y.white,-4.4,.5,3.6,n),Ci([it(-4.4,1.6,3.6),it(-4.2,1.9,3),it(-4,1.5,2.6)],.05,y.metal,n)}});Object.assign(Bn,{fabricator(n,t){En(n,4,!0);let e=hr(41);C(dt(7.4,.4,5.4,.08),y.panel,0,.2,0,n),C(dt(7,3.2,5,.18),y.white,0,2,0,n),C(new Wt(2.5,2.5,7,32,1,!1,0,Math.PI),y.panel,0,3.6,0,n,0,0,Math.PI/2).scale.set(1,1,.35);for(let o=0;o<6;o++)C(new Dt(2.52,.05,6,24,Math.PI),y.metal,-3.3+o*1.32,3.6,0,n,0,Math.PI/2,0).scale.set(1,.35,1);C(dt(7.1,.2,5.1,.05),y.orange,0,3.55,0,n),C(dt(3.4,2.7,.2,.06),y.metal,0,1.75,2.52,n);for(let o=0;o<12;o++)C(new Gt(3,.16,.05),y.dark,0,.55+o*.2,2.64,n);Pi(n,3.4,.14,0,.35,2.66);for(let o of[-1.9,1.9])Mt(16769184,.7,n,o,3,2.6);fl(n,e,16,-3.2,3.2,.8,3,-2.5,Math.PI),hi(n,1.2,.8,2.6,1.6,2.52,0,6),hi(n,1.2,.8,-2.6,1.6,2.52,0,6),Ci([it(3.5,3,-1.5),it(4.2,2.5,-1.8),it(4.4,1,-2),it(4.4,.4,-2)],.1,y.metal,n);let i=new ft;i.position.set(2.2,3.85,0),n.add(i),C(Lt(.45,.55,.4,24),y.dark,0,.2,0,i);let s=new ft;s.position.y=.4,s.rotation.z=.35,i.add(s),C(dt(.32,1.8,.32,.08),y.orange,0,.9,0,s),C(Lt(.22,.22,.45,16),y.metal,0,1.8,0,s,Math.PI/2,0,0);let r=new ft;r.position.y=1.8,r.rotation.z=-1.4,s.add(r),C(dt(.25,1.4,.25,.06),y.orange,0,.7,0,r),C(Lt(.12,.05,.35,12),y.chrome,0,1.55,0,r),t.arm=i,t.spark=Mt(16764006,1,r,0,1.8,0);for(let[o,a,l]of[[-2.6,3.4,1.1],[-1.4,3.3,.9],[-2.1,3.6,.6]])C(dt(l,l,l,.05),y.dark,o,l/2+(l<.7?1.1:0),a,n),C(new Gt(l*1.01,.06,l*1.01),y.orange,o,l*.7+(l<.7?1.1:0),a,n)},turret(n,t){En(n,1.8),C(We([[0,0],[1.9,0],[1.95,.15],[1.6,.9],[1.2,1.2],[0,1.2]],32),y.metal,0,0,0,n),Wf(n,1.7,.2,12,.06),C(Lt(.65,.8,1.2,24),y.dark,0,1.75,0,n);let e=new ft;e.position.y=2.75,n.add(e),C(dt(1.7,1.05,2,.2),y.white,0,0,.1,e),C(dt(1.75,.18,2.05,.06),y.orange,0,.32,.1,e),C(dt(.9,.35,.6,.08),y.dark,0,.6,.4,e);for(let i of[-.42,.42]){C(Lt(.16,.16,.5,16),y.dark,i,0,-.95,e,Math.PI/2,0,0),C(Lt(.09,.09,1.9,16),y.metal,i,0,-1.9,e,Math.PI/2,0,0);for(let s=0;s<3;s++)C(new Dt(.11,.025,6,16),y.cyan,i,0,-1.4-s*.35,e);C(Lt(.13,.11,.25,16),y.dark,i,0,-2.9,e,Math.PI/2,0,0)}C(Lt(.18,.18,.1,16),y.cyan,0,.1,-.92,e,Math.PI/2,0,0),t.eye=Mt(3401471,.6,e,0,.1,-.98),hi(e,.9,.4,0,-.1,1.12,0,4),t.head=e},reactor(n,t){En(n,5.2),C(We([[0,0],[5.2,0],[5.3,.2],[5,1.3],[4.6,1.5],[0,1.5]],48),y.panel,0,0,0,n),Pi(n,2.5,.16,0,1,5.06);for(let r=0;r<16;r++){let o=r/16*Math.PI*2;hi(n,.6,.45,Math.cos(o)*5.1,.75,Math.sin(o)*5.1,-o+Math.PI/2,4)}C(new Dt(2.6,.9,24,64),y.white,0,3,0,n,Math.PI/2,0,0);for(let r=0;r<16;r++){let o=r/16*Math.PI*2,a=C(new Dt(1,.12,8,24),y.dark,Math.cos(o)*2.6,3,Math.sin(o)*2.6,n);a.rotation.y=-o}let e=C(new Bt(1.2,32,24),y.cyan,0,3,0,n);e.castShadow=!1;let i=C(new Dt(3.9,.12,10,64),y.chrome,0,3,0,n),s=C(new Dt(3.9,.12,10,64),y.chrome,0,3,0,n);s.rotation.x=Math.PI/2;for(let r=0;r<6;r++){let o=r*Math.PI/3;Pe(it(Math.cos(o)*4.6,1.5,Math.sin(o)*4.6),it(Math.cos(o)*3.2,3,Math.sin(o)*3.2),.18,y.metal,n)}for(let r=0;r<4;r++){let o=r*Math.PI/2+Math.PI/4;C(We([[0,0],[.7,0],[.75,.1],[.75,4.2],[.6,4.5],[0,4.5]],24),y.white,Math.cos(o)*4.4,1.5,Math.sin(o)*4.4,n)}t.core=e,t.r1=i,t.r2=s,t.light=Mt(3401471,7,n,0,3,0)},beacon(n,t){C(We([[0,0],[7.4,0],[7.5,.1],[7.2,.5],[0,.5]],8),y.found,0,-.2,0,n,0,Math.PI/8,0).castShadow=!1,C(Lt(7.6,7.9,4,8),y.found,0,-2.3,0,n,0,Math.PI/8,0).castShadow=!1,C(new fn(4.2,4.8,64),y.orange,0,.32,0,n,-Math.PI/2,0,0),C(new fn(5.6,5.75,64),y.white,0,.32,0,n,-Math.PI/2,0,0);let e=document.createElement("canvas");e.width=e.height=128;let i=e.getContext("2d");i.fillStyle="#e8e4dc",i.font="bold 110px sans-serif",i.textAlign="center",i.fillText("H",64,104);let s=new on(e);s.colorSpace=ye,C(new On(3,3),new pt({map:s,transparent:!0,roughness:.8}),0,.33,0,n,-Math.PI/2,0,0),t.lights=[];for(let a=0;a<8;a++){let l=a*Math.PI/4+Math.PI/8;C(Lt(.15,.2,.15,12),y.dark,Math.cos(l)*6.6,.38,Math.sin(l)*6.6,n),t.lights.push(Mt(16755251,1,n,Math.cos(l)*6.6,.55,Math.sin(l)*6.6))}let r=new ft;r.position.set(8.6,0,0),n.add(r);for(let[a,l]of[[-.35,-.35],[.35,-.35],[.35,.35],[-.35,.35]])Pe(it(a*1.6,0,l*1.6),it(a*.5,8.5,l*.5),.05,y.metal,r);for(let a=1;a<8.5;a+=1.1){let l=1.6-a/8.5*1.1;C(new Dt(l*.5,.025,4,4),y.metal,0,a,0,r,Math.PI/2,0,Math.PI/4)}C(new Bt(.9,24,8,0,Math.PI*2,0,Math.PI/3),y.white,0,8.4,.4,r).rotation.set(-1,0,0),t.tip=Mt(16724016,1.6,r,0,9.3,0),C(dt(1.2,1,.8,.08),y.dark,-9.6,.5,4.5,n),ta(n,-9.6,.6,4.92)}});Object.assign(Bn,{lab(n,t){En(n,4),C(Lt(4.1,4.2,.4,40),y.panel,0,.2,0,n),C(Lt(3.2,3.4,2.8,40),y.white,0,1.8,0,n),C(Lt(3.25,3.25,.2,40),y.orange,0,3.1,0,n);for(let i=0;i<10;i++){let s=i/10*Math.PI*2,r=new ft;r.position.set(Math.cos(s)*3.32,2,Math.sin(s)*3.32),r.rotation.y=-s+Math.PI/2,n.add(r),C(dt(.9,.7,.1,.06),y.metal,0,0,0,r),C(dt(.78,.58,.08,.05),y.window,0,0,.04,r)}C(new Bt(2.2,40,16,0,Math.PI*2,0,Math.PI/2),y.white,0,3.2,0,n),C(dt(.9,2.4,.2,.05),y.dark,0,4.4,1.5,n,-.9,0,0);let e=C(Lt(.35,.45,2.6,20),y.metal,0,5.2,.9,n,-.7,0,0);C(new Dt(.37,.05,8,20),y.cyan,0,6.15,1.75,n,-.7+Math.PI/2,0,0),t.scope=e,C(Lt(.05,.07,3,8),y.metal,-2.4,4.5,-1.2,n),t.tip=Mt(8382207,1,n,-2.4,6.1,-1.2),C(dt(1.5,1,1,.08),y.dark,3.4,.7,-2,n),hi(n,1,.6,3.4,.7,-1.48,0,5),C(dt(1.3,2.1,.15,.1),y.metal,0,1.25,3.38,n),C(dt(1.1,1.9,.1,.08),y.dark,0,1.2,3.44,n),t.light=Mt(8382207,2,n,0,6.3,1.9)},trade(n,t){En(n,4.8,!0),C(dt(9.6,.4,9.6,.1),y.found,0,.2,0,n),Pi(n,9.6,.15,0,.42,4.82);let e=[y.orange,y.white,y.dark,y.red2],i=0;for(let[o,a,l]of[[-3.2,-2.6,2],[-3.2,-.2,1],[-3.2,2.2,2],[.2,-2.6,1],[.2,2.6,1]])for(let c=0;c<l;c++){let u=C(dt(2.2,1.1,2,.05),e[i++%e.length],o,.95+c*1.12,a,n);for(let d=0;d<5;d++)C(new Gt(.04,.9,2.02),y.metal,o-.8+d*.4,.95+c*1.12,a,n)}let s=new ft;s.position.set(3.2,.4,0),n.add(s);for(let[o,a]of[[-.4,-.4],[.4,-.4],[.4,.4],[-.4,.4]])Pe(it(o,0,a),it(o*.6,6,a*.6),.06,y.orange,s);for(let o=1;o<6;o+=1.2)C(new Dt(.42-o*.03,.03,4,4),y.orange,0,o,0,s,Math.PI/2,0,Math.PI/4);let r=new ft;r.position.y=6.1,s.add(r),C(dt(.6,.5,.6,.06),y.dark,0,0,0,r),C(dt(.25,.25,6,.04),y.orange,0,.2,-2,r),C(dt(.6,.6,.8,.05),y.dark,0,.1,1.2,r),Pe(it(0,.1,-4.6),it(0,-3,-4.6),.015,y.metal,r),C(dt(.5,.2,.5,.03),y.metal,0,-3.1,-4.6,r),t.jib=r,C(Lt(.05,.05,2.4,6),y.metal,-4.2,1.6,4.2,n),t.tip=Mt(6750105,1,n,-4.2,2.9,4.2)}});Object.assign(Bn,{apartment(n,t){En(n,4.4,!0);let e=hr(91),[i,s]=Ja;C(dt(8.6,.6,8.6,.15),y.panel,0,.3,0,n);let r=(o,a,l,c,u)=>{C(dt(l,c,l,.25),u,o,.6+c/2,a,n);for(let d=2.2;d<c;d+=2.2)C(new Gt(l+.08,.12,l+.08),y.white,o,.6+d,a,n);for(let d of[-1,1])C(new Gt(.16,c,.16),y.metal,o+d*l/2,.6+c/2,a+l/2,n),C(new Gt(.16,c,.16),y.metal,o+d*l/2,.6+c/2,a-l/2,n)};r(-1.3,-1.2,4.6,17,i),r(2.1,2,3.6,11,s),C(dt(4,1.2,4,.3),y.white,-1.3,18.2,-1.2,n),C(dt(3,.9,3,.3),y.white,2.1,12.1,2,n),C(dt(2.6,1.1,1.4,.4),y.glass,.6,7.4,.6,n,0,Math.PI/4,0).castShadow=!1;for(let o of[6.9,7.9])C(dt(2.7,.1,1.5,.04),y.metal,.6,o,.6,n,0,Math.PI/4,0);for(let o=0;o<6;o++)C(new Nn(.35+e()*.2,0),y.leaf2,1.4+e()*1.4,12.75,1.3+e()*1.4,n);fl(n,e,8,-2.8,.2,18.6,18.9,.6),C(Lt(.08,.1,4,8),y.metal,-1.3,20.8,-1.2,n),t.tip=Mt(16728128,1.4,n,-1.3,22.9,-1.2),C(dt(2.4,.15,1.6,.05),y.orange,-1.3,3.2,1.9,n);for(let o of[-2.3,-.3])C(Lt(.05,.05,2.6,8),y.metal,o,1.9,2.6,n);Mt(16767392,1.2,n,-1.3,3,2.2)},vfarm(n,t){En(n,4),C(Lt(4,4.2,.8,40),y.panel,0,.4,0,n);let e=C(Lt(3.3,3.3,15,40,!0),y.glass,0,8.3,0,n);e.castShadow=!1;for(let s=0;s<8;s++){let r=s/8*Math.PI*2;C(new Gt(.14,15,.14),y.white,Math.cos(r)*3.32,8.3,Math.sin(r)*3.32,n)}let i=hr(55);for(let s=0;s<6;s++){let r=1.4+s*2.4;C(Lt(3.1,3.1,.18,40),y.white,0,r,0,n),C(new Dt(3.15,.06,6,40),y.metal,0,r+.1,0,n,Math.PI/2,0,0),C(Lt(2.8,2.8,.12,40),y.soil,0,r+.15,0,n);for(let o=0;o<16;o++){let a=o/16*Math.PI*2+s;C(new Nn(.22+i()*.12,0),o%2?y.leaf:y.leaf2,Math.cos(a)*(1.7+i()*.9),r+.4,Math.sin(a)*(1.7+i()*.9),n).castShadow=!1}C(new Dt(2,.04,6,32),y.growlight,0,r+2.1,0,n,Math.PI/2,0,0)}C(Lt(.5,.5,15,16),y.metal,0,8.3,0,n),C(new Bt(3.3,40,12,0,Math.PI*2,0,Math.PI/2),y.glass,0,15.8,0,n).castShadow=!1,C(new Dt(3.32,.1,8,40),y.orange,0,15.8,0,n,Math.PI/2,0,0),Ci([it(3.4,1,1),it(4.4,.6,1.4),it(5.2,.3,2.2)],.1,y.metal,n),t.light=Mt(16737996,8,n,0,8,0)},lifehub(n,t){En(n,5.8),C(We([[0,0],[6,0],[6.1,.2],[5.8,1.2],[0,1.2]],48),y.panel,0,0,0,n),C(new Bt(4.4,48,20,0,Math.PI*2,0,Math.PI/2),y.white,0,1.2,0,n).scale.y=.75,C(new Dt(4.45,.18,10,48),y.orange,0,1.6,0,n,Math.PI/2,0,0);for(let i=0;i<8;i++){let s=i/8*Math.PI*2;hi(n,1,.5,Math.cos(s)*5.9,.6,Math.sin(s)*5.9,-s+Math.PI/2,4)}for(let i=0;i<4;i++){let s=i*Math.PI/2+Math.PI/4,r=Math.cos(s)*5,o=Math.sin(s)*5;C(We([[0,0],[.95,0],[1,.2],[1,4.4],[.8,4.8],[0,4.85]],28),y.white,r,.4,o,n),C(Lt(1.02,1.02,.3,28,!0),y.cyan,r,3.6,o,n),lh(n,r*1.2,.4,o*1.2,4.2,-s-Math.PI/2,.4),Ci([it(r*.8,2.6,o*.8),it(r*.6,2.8,o*.6),it(r*.45,2.4,o*.45)],.12,y.metal,n)}C(Lt(1.6,1.8,.6,32),y.dark,0,4.4,0,n),C(new Dt(1.7,.08,6,32),y.metal,0,4.75,0,n,Math.PI/2,0,0);let e=new ft;e.position.y=4.8,n.add(e);for(let i=0;i<5;i++)C(dt(1.5,.05,.4,.02),y.metal,Math.cos(i*1.256)*.8,0,Math.sin(i*1.256)*.8,e,0,-i*1.256,.25);t.fan=e,t.light=Mt(6741503,4,n,0,5.2,0)},plaza(n,t){En(n,7.2),C(We([[0,0],[7.3,0],[7.4,.1],[7.2,.4],[0,.4]],64),y.found,0,0,0,n);for(let s=2.5;s<7;s+=1.5)C(new Dt(s,.03,4,64),y.metal,0,.41,0,n,Math.PI/2,0,0);C(new fn(5.4,5.75,64),y.orange,0,.42,0,n,-Math.PI/2,0,0),C(We([[0,0],[2.1,0],[2,.3],[1.5,.5],[1.4,1.3],[1.6,1.45],[0,1.45]],40),y.white,0,.4,0,n),C(new Dt(1.55,.06,8,40),y.cyan,0,1.85,0,n,Math.PI/2,0,0);for(let s=0;s<6;s++){let r=s*Math.PI/3+Math.PI/6,o=new ft;o.position.set(Math.cos(r)*5,.4,Math.sin(r)*5),o.rotation.y=-r+Math.PI/2,n.add(o),C(dt(2.2,.12,.6,.05),y.panel,0,.45,0,o),C(dt(2.2,.5,.1,.04),y.panel,0,.75,.28,o);for(let l of[-.9,.9])C(dt(.1,.45,.5,.03),y.metal,l,.22,0,o);let a=r+.52;C(We([[0,0],[.18,0],[.12,.2],[.06,.3],[.05,3.4],[0,3.4]],12),y.metal,Math.cos(a)*6.6,.4,Math.sin(a)*6.6,n),C(new Bt(.2,12,8),y.lamp,Math.cos(a)*6.6,3.95,Math.sin(a)*6.6,n),Mt(16767392,1.1,n,Math.cos(a)*6.6,3.95,Math.sin(a)*6.6)}let e=C(new Bt(1.5,40,24),new Yt({map:Bn._earthTex?Bn._earthTex():null,color:10479359,transparent:!0,opacity:.7,blending:fe,depthWrite:!1}),0,4,0,n);e.castShadow=!1;for(let s=0;s<2;s++){let r=C(new Dt(2+s*.3,.015,4,64),y.cyan,0,4,0,n,Math.PI/2+.3-s*.6,0,0);r.castShadow=!1}let i=Mt(6736127,5,n,0,4,0);C(new Wt(1.1,1.5,2.2,32,1,!0),new Yt({color:8382207,transparent:!0,opacity:.1,blending:fe,depthWrite:!1,side:Ge}),0,2.95,0,n).castShadow=!1,t.earth=e,t.halo=i},drones(n,t){En(n,3.8,!0),C(dt(7.6,.5,7.6,.12),y.panel,0,.25,0,n),Pi(n,7.6,.14,0,.42,3.81),Pi(n,7.6,.14,0,.42,-3.81);for(let[s,r]of[[-1.9,-1.9],[1.9,-1.9],[-1.9,1.9],[1.9,1.9]]){C(Lt(1.15,1.2,.12,32),y.dark,s,.56,r,n),C(new fn(.8,.95,32),y.orange,s,.63,r,n,-Math.PI/2,0,0);for(let o=0;o<4;o++){let a=o*Math.PI/2;C(Lt(.06,.06,.06,8),y.lamp,s+Math.cos(a)*1.05,.64,r+Math.sin(a)*1.05,n)}}C(dt(1.4,4.2,1.4,.15),y.white,3,2.4,3,n),C(dt(1.6,.9,1.6,.15),y.glass,3,4.6,3,n).castShadow=!1,C(dt(1.7,.15,1.7,.05),y.orange,3,5.1,3,n),lh(n,3,.5,2.25,4,0,.4);let e=new ft;e.position.set(3,5.5,3),n.add(e);let i=C(new Bt(.9,24,8,0,Math.PI*2,0,Math.PI/3),y.white,0,.2,0,e);i.rotation.x=Math.PI*.6,C(Lt(.04,.04,.8,6),y.metal,0,.3,.25,e).rotation.x=1.1,t.dish=e,t.light=Mt(8382207,1.2,n,3,6.3,3),C(dt(1.6,1,1,.08),y.dark,-3,1,3,n),hi(n,1,.6,-3,1,3.51,0,5)},terraformer(n,t){En(n,7),C(We([[0,0],[7.4,0],[7.5,.3],[7,2],[5.5,2.4],[0,2.4]],6),y.panel,0,0,0,n),C(We([[0,0],[4.4,0],[3.8,8],[3,16],[2.3,24],[1.6,28],[0,28.5]],6),y.white,0,2.4,0,n);for(let i of[6,14,22])C(new Dt(4.6-i*.11,.3,6,6),y.orange,0,2.4+i,0,n,Math.PI/2,0,Math.PI/6);for(let i=0;i<6;i++){let s=i*Math.PI/3;Pe(it(Math.cos(s)*7,2,Math.sin(s)*7),it(Math.cos(s)*3.5,14,Math.sin(s)*3.5),.35,y.metal,n)}for(let i=0;i<6;i++){let s=i*Math.PI/3+Math.PI/6;hi(n,1.4,2.4,Math.cos(s)*4,5,Math.sin(s)*4,-s+Math.PI/2,8)}t.rings=[];for(let i=0;i<3;i++){let s=C(new Dt(6-i*1.2,.22,10,64),y.cyan,0,10+i*8,0,n);s.castShadow=!1,t.rings.push(s)}C(Lt(1.2,1.6,2,24),y.dark,0,31.5,0,n);let e=C(new Wt(.6,1.4,400,16,1,!0),new Yt({color:6743807,transparent:!0,opacity:0,blending:fe,depthWrite:!1,side:Ge}),0,232,0,n);e.castShadow=!1,e.receiveShadow=!1,t.beam=e,t.top=Mt(6743807,9,n,0,32.5,0)},launch(n,t){En(n,9,!0),C(dt(18.4,1.2,18.4,.2),y.found,0,.6,0,n),C(new fn(4.8,5.8,48),y.orange,0,1.22,0,n,-Math.PI/2,0,0),C(Lt(3.6,3.6,.3,32),y.dark,0,1.3,0,n),Pi(n,18.4,.2,0,1.25,9.21);let e=new ft;e.position.set(7.5,1.2,0),n.add(e);for(let[r,o]of[[-1.5,-1.5],[1.5,-1.5],[1.5,1.5],[-1.5,1.5]])Pe(it(r,0,o),it(r,34,o),.14,y.orange,e);for(let r=0;r<34;r+=2.5)for(let[o,a,l,c]of[[-1.5,-1.5,1.5,-1.5],[1.5,-1.5,1.5,1.5],[1.5,1.5,-1.5,1.5],[-1.5,1.5,-1.5,-1.5]])Pe(it(o,r,a),it(l,r+2.5,c),.04,y.metal,e),Pe(it(o,r,a),it(l,r,c),.05,y.metal,e);for(let r of[12,24])C(dt(4.2,.4,1,.06),y.dark,-3.2,r,0,e),Pe(it(-1.5,r,0),it(-5,r,0),.06,y.metal,e);let i=new ft;i.position.y=1.4,n.add(i),C(We([[0,0],[2.6,.2],[2.8,2],[2.7,22],[2.4,25],[1.6,29],[.6,31.5],[0,32]],40),y.white,0,0,0,i);for(let r of[8,19])C(Lt(2.79,2.79,1.2,40,!0),y.orange,0,r,0,i);for(let r of[4,12,16,23])C(new Dt(2.76,.04,6,40),y.metal,0,r,0,i,Math.PI/2,0,0);for(let r=0;r<4;r++)Gr(i,Math.cos(r*1.57)*2.62,25.5,Math.sin(r*1.57)*2.62,.3,Math.PI/2-r*1.57,0);for(let r=0;r<4;r++){let o=r*Math.PI/2,a=C(dt(.35,7,3.4,.1),y.panel,Math.cos(o)*3.1,3.5,Math.sin(o)*3.1,i);a.rotation.y=-o}for(let r=0;r<5;r++){let o=r*Math.PI*2/5;C(We([[.4,0],[.6,-.3],[1,-1.4],[.9,-1.4],[.5,-.35]],20),y.metal,Math.cos(o)*1.4,.2,Math.sin(o)*1.4,i)}let s=new lt(new Fe(3,16,16,1,!0),y.flame);s.rotation.x=Math.PI,s.position.y=-8,s.visible=!1,i.add(s),t.ship=i,t.flame=s,t.tip=Mt(16777215,3,i,0,32.5,0)},monument(n,t){En(n,6);for(let s=0;s<3;s++)C(Lt(6.2-s*1.2,6.4-s*1.2,.6,8),s%2?y.white:y.panel,0,.3+s*.6,0,n,0,Math.PI/8,0);let e=["\u706B\u661F","\u6728\u536B\u4E8C","\u5F00\u666E\u52D2"];for(let s=0;s<3;s++){let r=s*Math.PI*2/3,o=new ft;o.position.set(Math.cos(r)*1,1.8,Math.sin(r)*1),o.rotation.y=-r+Math.PI/2,n.add(o),C(new Gt(1.8,26,.5),y.white,0,13,0,o,0,0,0).geometry.translate(0,0,0);let a=document.createElement("canvas");a.width=128,a.height=512;let l=a.getContext("2d");l.fillStyle="#f0ebe2",l.fillRect(0,0,128,512),l.fillStyle="#b8862e",l.font="600 54px sans-serif",l.textAlign="center",[...e[s]].forEach((u,d)=>l.fillText(u,64,120+d*70));let c=new on(a);c.colorSpace=ye,C(new On(1.4,5.6),new pt({map:c,roughness:.6}),0,6,.26,o)}t.rings=[];let i=[16742954,6743807,10551104];for(let s=0;s<3;s++){let r=C(new Dt(3.6-s*.5,.12,10,64),new pt({color:1118481,emissive:i[s],emissiveIntensity:2}),0,16+s*4,0,n);r.castShadow=!1,t.rings.push(r)}C(new Ks(1,0),y.chrome,0,30,0,n),t.top=Mt(16777215,8,n,0,30,0)}});function jg(){let n=new ft,t=hr(5);C(We([[0,1],[2.6,1.05],[3.25,1.25],[3.35,1.45],[3.2,1.6],[0,1.6]],48),y.ablative,0,0,0,n),C(We([[3.05,1.6],[3,2.2],[2.75,3.4],[2.35,4.6],[1.95,5.6],[1.75,6],[0,6]],48),y.white,0,0,0,n),C(We([[3.02,2.05],[3.04,2.35],[2.98,2.4]],48),y.orange,0,0,0,n),C(We([[2,5.45],[2.02,5.6],[1.95,5.62]],48),y.orange,0,0,0,n),C(Lt(1.6,1.75,.35,40),y.panel,0,6.15,0,n),C(new Dt(1.25,.12,10,40),y.metal,0,6.38,0,n,Math.PI/2,0,0),C(new Bt(1.15,32,12,0,Math.PI*2,0,Math.PI/2),y.white,0,6.35,0,n).scale.y=.6,Wf(n,1.45,6.34,16,.04);let e=Gr(n,0,4.55,2.33,.36,0,-.33);Gr(n,-.95,4.35,2.2,.26,-.42,-.33),Gr(n,.95,4.35,2.2,.26,.42,-.33);let i=new ft;i.position.set(2.82,2.75,0),i.rotation.set(0,Math.PI/2,.22),n.add(i),C(dt(1.25,1.75,.14,.12),y.metal,0,0,0,i),C(dt(1.05,1.55,.1,.1),y.panel,0,0,.06,i),C(dt(.1,.45,.08,.03),y.chrome,.38,-.05,.13,i),Gr(i,0,.45,.13,.15),Pi(i,1.25,.1,0,-.92,.08);for(let u=0;u<6;u++)C(dt(.9,.06,.28,.02),y.metal,3.3+u*.2,1.75-u*.29,0,n);Pe(it(3.2,1.9,-.48),it(4.4,.1,-.48),.035,y.metal,n),Pe(it(3.2,1.9,.48),it(4.4,.1,.48),.035,y.metal,n);for(let u=0;u<4;u++){let d=u*Math.PI/2+Math.PI/4,f=new ft;f.position.set(Math.cos(d)*2.15,5,Math.sin(d)*2.15),f.rotation.y=-d,n.add(f),C(dt(.36,.36,.36,.05),y.dark,0,0,0,f);for(let[p,g]of[[.25,0],[-.25,0],[0,.25],[0,-.25]]){let v=C(new Fe(.07,.16,10,1,!0),y.metal,0,g,p,f);v.rotation.x=g?g>0?0:Math.PI:p>0?Math.PI/2:-Math.PI/2}}for(let u=0;u<4;u++){let d=u*Math.PI/2,f=C(We([[.18,1.05],[.22,.85],[.42,.45],[.55,.2],[.5,.2],[.38,.45],[.15,.85]],24),y.dark,Math.cos(d)*1.2,0,Math.sin(d)*1.2,n);f.material=y.metal}C(Lt(.7,.9,.5,24),y.dark,0,.8,0,n);for(let u=0;u<4;u++){let d=u*Math.PI/2+Math.PI/4,f=Math.cos(d),p=Math.sin(d),g=it(f*2.7,2.1,p*2.7),v=it(f*3.55,1,p*3.55),x=it(f*4.1,.18,p*4.1);Pe(g,v,.11,y.white,n),C(new Bt(.15,12,8),y.metal,v.x,v.y,v.z,n),Pe(v,x,.075,y.chrome,n),Pe(v.clone().lerp(x,.3),v.clone().lerp(x,.3).add(it(0,.01,0)),.1,y.metal,n),Pe(it(f*2.4,1.3,p*2.4),v.clone().lerp(x,.25),.05,y.metal,n),Pe(it(f*2.6-p*.6,1.7,p*2.6+f*.6),v,.035,y.metal,n),Pe(it(f*2.6+p*.6,1.7,p*2.6-f*.6),v,.035,y.metal,n),C(We([[0,0],[.55,0],[.6,.06],[.35,.2],[.1,.22],[0,.22]],24),y.metal,x.x,0,x.z,n)}C(Lt(.04,.05,1.8,8),y.metal,.6,7.1,-.4,n),C(new Bt(.5,24,8,0,Math.PI*2,0,Math.PI/3.2),y.white,-.7,6.95,.3,n).rotation.set(-.8,.6,0),C(Lt(.04,.04,.8,6),y.metal,-.7,6.55,.3,n),Ci([it(-1.6,5.7,-1.4),it(-2.3,4.3,-1.9),it(-2.9,2.6,-2.1),it(-3.05,1.7,-2.2)],.05,y.dark,n),Ci([it(1.6,5.7,-1.4),it(2.3,4.3,-1.9),it(2.9,2.6,-2.05)],.04,y.orange,n),fl(n,t,14,-1.2,1.2,2.4,3.6,-2.95,Math.PI);let r=document.createElement("canvas");r.width=512,r.height=96;let o=r.getContext("2d");o.clearRect(0,0,512,96),o.fillStyle="#d4581c",o.font="bold 54px sans-serif",o.textAlign="center",o.fillText("\u65B9\u821F\u4E00\u53F7 \xB7 ARK-1",256,66);let a=new on(r);a.colorSpace=ye;let l=new lt(new On(3.4,.64),new pt({map:a,transparent:!0,roughness:.6}));l.position.set(0,3.2,-2.87),l.rotation.set(.32,Math.PI,0),n.add(l);let c=Mt(6750105,1.4,n,.6,8.05,-.4);return{group:n,beacon:c,window:e}}var ah=new pt({color:2757906,roughness:.28,metalness:.7,flatShading:!0}),Vf=new pt({color:2757906,roughness:.35,metalness:.7});function Qg(n,t,e){let i=new ft,s=new ft;i.add(s);let r=new pt({color:2230272,emissive:t.emissive,emissiveIntensity:1.6});C(new Nn(.75,1),ah,0,1,.2,s).scale.set(1.05,.62,1),C(new Nn(.85,1),ah,0,1.1,-.85,s).scale.set(.95,.7,1.25),C(new Nn(.42,1),ah,0,.95,1,s).scale.set(1.1,.7,1);let c=hr(Math.floor(Math.random()*1e6)+1);for(let d=0;d<9;d++){let f=C(new Ks(.22+c()*.15,0),t,(c()-.5)*.9,1.45+c()*.25,-1.1+c()*1.4,s,(c()-.5)*.8,c()*3,(c()-.5)*.8);f.scale.y=1.8+c()*1.4}for(let[d,f,p]of[[-.17,1.03,.05],[.17,1.03,.05],[-.1,1.12,.035],[.1,1.12,.035]])C(new Bt(p,10,8),e,d,f,1.36,s);for(let d of[-1,1])C(new Fe(.06,.45,6),ah,d*.16,.78,1.42,s).rotation.set(Math.PI/2+.3,0,d*.35);let u=[];for(let d=0;d<6;d++){let f=d<3?-1:1,p=d%3-1,g=new ft;g.position.set(f*.62,1,p*.55+.1),s.add(g);let v=it(0,0,0),x=it(f*.75,.45,p*.15),m=it(f*1.35,.1,p*.25),_=it(f*1.55,-.98,p*.35);Pe(v,x,.08,Vf,g,14),Pe(x,m,.065,Vf,g,14),Pe(m,_,.045,Vf,g,14);for(let E of[x,m])C(new Bt(.09,8,6),r,E.x,E.y,E.z,g);C(new Fe(.05,.18,6),t,_.x,_.y-.05,_.z,g,Math.PI,0,0),g.userData.phase=d%2*Math.PI+p*.5,g.userData.side=f,u.push(g)}return i.scale.setScalar(n),{group:i,legs:u,inner:s}}function tx(){let n=new ft;C(We([[0,.6],[1.9,.7],[2.5,1.2],[2.6,2],[2.2,4.5],[1.6,6.6],[.9,7.8],[0,8.2]],40),y.white,0,0,0,n),C(Lt(2.62,2.62,.5,40,!0),y.orange,0,2.2,0,n),C(We([[0,.3],[2.4,.35],[2.55,.65],[0,.7]],40),y.ablative,0,0,0,n);for(let i=0;i<5;i++)Gr(n,Math.cos(i*1.256)*2.1,4.4,Math.sin(i*1.256)*2.1,.22,Math.PI/2-i*1.256,-.25);for(let i=0;i<3;i++){let s=i*Math.PI*2/3,r=Math.cos(s),o=Math.sin(s);Pe(it(r*2.2,2,o*2.2),it(r*3.1,.1,o*3.1),.09,y.chrome,n),C(Lt(.45,.5,.1,16),y.metal,r*3.1,.05,o*3.1,n);let a=C(dt(.18,2.4,1.4,.06),y.panel,r*2.55,1.9,o*2.55,n);a.rotation.y=-s}for(let i=0;i<3;i++){let s=i*Math.PI*2/3+1;C(We([[.3,0],[.45,-.25],[.75,-.9],[.65,-.9],[.35,-.3]],20),y.metal,Math.cos(s)*.9,.35,Math.sin(s)*.9,n)}C(Lt(.04,.04,1.2,6),y.metal,0,8.6,0,n),Mt(16728128,.8,n,0,9.2,0);let t=new lt(new Fe(1.4,6,14,1,!0),y.flame);t.rotation.x=Math.PI,t.position.y=-2.6,n.add(t);let e=Mt(16752704,9,n,0,-.5,0);return{group:n,flame:t,flameGlow:e}}var nn=n=>()=>$g(n)>=1,ur=(n,t)=>({check:()=>h.stats.mined[n]>=t,prog:()=>`${Math.min(h.stats.mined[n],t)}/${t}`}),Wr=n=>({text:`\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C${An[n].name}\u300D`,check:()=>h.cityLevel>=n,prog:()=>`\u4EBA\u53E3 ${h.colony.pop}/${An[n].pop}`}),hh=n=>({text:`\u4EBA\u53E3\u8FBE\u5230 ${n}`,check:()=>h.colony.pop>=n,prog:()=>`${h.colony.pop}/${n}`}),ex={text:"\u53D1\u5C04\u6B96\u6C11\u8230",check:()=>!!h.launched,prog:()=>"\u9760\u8FD1\u53D1\u5C04\u53F0\u6309 E"},Tb=[{title:"\u7B2C\u4E00\u7AE0 \xB7 \u7740\u9646",sub:"\u6D3B\u4E0B\u53BB",goals:[{text:"\u91C7\u96C6\u94C1\u77FF",...ur("iron",10)},{text:"\u91C7\u96C6\u7845\u6676",...ur("silicon",6)},{text:"\u91C7\u96C6\u6C34\u51B0",...ur("ice",6)},{text:"\u5EFA\u9020\u592A\u9633\u80FD\u9635\u5217",check:nn("solar")},{text:"\u5EFA\u9020\u5236\u6C27\u7AD9",check:nn("oxygen")}],radio:[["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u7740\u9646\u6210\u529F\u3002\u5916\u90E8\u6C14\u538B 0.6 \u5343\u5E15\uFF0C\u6C14\u6E29\u96F6\u4E0B 63 \u6444\u6C0F\u5EA6\u3002\u6B22\u8FCE\u6765\u5230\u706B\u661F\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u65B9\u821F\u4E00\u53F7\uFF0C\u8FD9\u91CC\u662F\u5730\u7403\u8054\u5408\u6307\u6325\u4E2D\u5FC3\u3002\u542C\u5230\u8BF7\u56DE\u7B54\u2026\u2026\u5F88\u597D\u3002\u4F60\u662F\u7B2C\u4E00\u4E2A\u8E0F\u4E0A\u8FD9\u7247\u571F\u5730\u7684\u4EBA\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u7740\u9646\u8231\u53EA\u80FD\u5728\u5B83\u5468\u56F4\u5F88\u5C0F\u7684\u8303\u56F4\u5185\u7ED9\u4F60\u8865\u6C27\u3002\u6309\u4F4F\u5DE6\u952E\u7528\u91C7\u77FF\u6FC0\u5149\u91C7\u96C6\u94C1\u77FF\u3001\u7845\u6676\u548C\u6C34\u51B0\uFF0C\u7136\u540E\u6309 B \u5EFA\u8D77\u7B2C\u4E00\u5EA7\u5236\u6C27\u7AD9\u3002"]]},{title:"\u7B2C\u4E8C\u7AE0 \xB7 \u7B2C\u4E00\u4E2A\u5BB6",sub:"\u4E3A\u540E\u6765\u7684\u4EBA\u70B9\u4E00\u76CF\u706F",goals:[{text:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",check:nn("habitat")},{text:"\u5EFA\u9020\u6E29\u5BA4",check:nn("greenhouse")},{text:"\u5EFA\u9020\u6C34\u51B0\u63D0\u53D6\u5668",check:nn("extractor")},{text:"\u5EFA\u9020\u7740\u9646\u573A",check:nn("beacon")},{text:"\u8FCE\u63A5\u7B2C\u4E00\u6279\u79FB\u6C11",check:()=>h.stats.arrived>=1,prog:()=>h.colony.support>0?"\u7B49\u5F85\u98DE\u8239":"\u9700\u8981\u4F4F\u623F/\u6C27/\u6C34/\u98DF\u7269/\u7535"}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5236\u6C27\u7AD9\u8FD0\u8F6C\u6B63\u5E38\uFF01\u5B83\u5468\u56F4 14 \u7C73\u90FD\u80FD\u7ED9\u5B87\u822A\u670D\u8865\u6C27\uFF0C\u4F60\u53EF\u4EE5\u8D70\u5F97\u66F4\u8FDC\u4E86\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5730\u7403\u4E0A\u6709\u5341\u4E07\u4EBA\u62A5\u540D\u4E86\u79FB\u6C11\u8BA1\u5212\u3002\u5EFA\u597D\u7A79\u9876\u3001\u6E29\u5BA4\u3001\u6C34\u6E90\u548C\u7740\u9646\u573A\u2014\u2014\u7ED9\u4ED6\u4EEC\u4E00\u4E2A\u53EF\u4EE5\u56DE\u7684\u5BB6\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u63D0\u793A\uFF1A\u592A\u9633\u80FD\u5728\u591C\u95F4\u53EA\u5269\u56DB\u6210\u529F\u7387\u3002\u591A\u5EFA\u51E0\u5EA7\uFF0C\u6B96\u6C11\u5730\u624D\u4E0D\u4F1A\u5728\u591C\u91CC\u65AD\u7535\u3002"]]},{title:"\u7B2C\u4E09\u7AE0 \xB7 \u957F\u591C",sub:"\u5B88\u62A4\u6211\u4EEC\u7684\u4EBA",goals:[{text:"\u5EFA\u9020\u5236\u9020\u5DE5\u574A",check:nn("fabricator")},{text:"\u5236\u9020\u7B49\u79BB\u5B50\u6B65\u67AA",check:()=>!!h.upgrades.rifle},{text:"\u5EFA\u9020\u9632\u5FA1\u70AE\u5854",check:nn("turret")},{text:"\u51FB\u9000\u9508\u8680\u86DB",check:()=>h.stats.kills>=6,prog:()=>`${Math.min(h.stats.kills,6)}/6`}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u2026\u2026\u7B2C\u4E00\u6279\u79FB\u6C11\u5B89\u5168\u7740\u9646\u4E86\u3002\u6211\u8FD9\u8FB9\u7684\u63A7\u5236\u5BA4\u91CC\uFF0C\u6240\u6709\u4EBA\u90FD\u7AD9\u8D77\u6765\u9F13\u638C\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u5730\u8D28\u96F7\u8FBE\u5728\u591C\u95F4\u63A2\u6D4B\u5230\u5927\u91CF\u5730\u4E0B\u79FB\u52A8\u4FE1\u53F7\u3002\u5B83\u4EEC\u4F3C\u4E4E\u88AB\u6B96\u6C11\u5730\u7684\u70ED\u91CF\u5438\u5F15\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5EFA\u4E00\u5EA7\u5236\u9020\u5DE5\u574A\uFF0C\u9020\u6B66\u5668\uFF0C\u5EFA\u70AE\u5854\u3002\u5B88\u4F4F\u5927\u5BB6\u3002"]]},{title:"\u7B2C\u56DB\u7AE0 \xB7 \u624E\u6839",sub:"\u8BA9\u706F\u706B\u5F7B\u591C\u4E0D\u7184",goals:[{text:"\u6B96\u6C11\u5730\u4EBA\u53E3\u8FBE\u5230 12",check:()=>h.colony.pop>=12,prog:()=>`${h.colony.pop}/12`},{text:"\u91C7\u96C6\u949B\u77FF",...ur("titanium",12)},{text:"\u5EFA\u9020\u805A\u53D8\u53CD\u5E94\u5806",check:nn("reactor")}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u4F60\u4EEC\u6491\u8FC7\u4E86\u957F\u591C\u3002\u73B0\u5728\uFF0C\u662F\u65F6\u5019\u8BA9\u6B96\u6C11\u5730\u771F\u6B63\u624E\u6839\u4E86\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5728\u8FDC\u65B9\u7684\u7D2B\u8272\u6676\u4F53\u77FF\u8109\u4E2D\u68C0\u6D4B\u5230\u9AD8\u7EAF\u5EA6\u949B\u3002\u6CE8\u610F\uFF1A\u90A3\u91CC\u6709\u4F53\u578B\u66F4\u5927\u7684\u9508\u8680\u86DB\u5B88\u536B\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u63D0\u793A\uFF1A\u5728\u5236\u9020\u5DE5\u574A\u53EF\u4EE5\u9020\u55B7\u6C14\u80CC\u5305\u548C\u5927\u5BB9\u91CF\u6C27\u6C14\u7F50\uFF0C\u9002\u5408\u957F\u9014\u52D8\u63A2\u3002"]]},{title:"\u7B2C\u4E94\u7AE0 \xB7 \u65B0\u5BB6\u56ED",sub:"\u6B64\u5FC3\u5B89\u5904\u662F\u543E\u4E61",goals:[{text:"\u5EFA\u9020\u5927\u6C14\u6539\u9020\u5854",check:nn("terraformer")},{text:"\u6B96\u6C11\u5730\u4EBA\u53E3\u8FBE\u5230 20",check:()=>h.colony.pop>=20,prog:()=>`${h.colony.pop}/20`},{text:"\u5B8C\u6210\u5927\u6C14\u6539\u9020",check:()=>h.terraform>=1&&h.ended&&!h.endingShown,prog:()=>`${Math.floor(h.terraform*100)}%`}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u805A\u53D8\u53CD\u5E94\u5806\u70B9\u706B\u6210\u529F\u3002\u6B96\u6C11\u5730\u7B2C\u4E00\u6B21\u5728\u591C\u91CC\u4E5F\u706F\u706B\u901A\u660E\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u6700\u540E\u4E00\u6B65\u4E86\u3002\u5927\u6C14\u6539\u9020\u5854\u2014\u2014\u5B83\u8981\u51E0\u5341\u5E74\u624D\u80FD\u5F7B\u5E95\u6539\u53D8\u706B\u661F\u3002\u4F46\u7B2C\u4E00\u573A\u96E8\uFF0C\u4E5F\u8BB8\u5C31\u5728\u660E\u5929\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u63D0\u793A\uFF1A\u57CE\u5E02\u7B49\u7EA7\u63D0\u5347\u540E\u9886\u5730\u4F1A\u6269\u5927\uFF0C\u5E76\u89E3\u9501\u516C\u5BD3\u5854\u3001\u5782\u76F4\u519C\u573A\u3001\u751F\u6001\u4E2D\u67A2\u3002"]]},{title:"\u7B2C\u516D\u7AE0 \xB7 \u661F\u8FB0\u5927\u6D77",sub:"\u4E0B\u4E00\u9897\u661F\u7403",goals:[Wr(5),{text:"\u5EFA\u9020\u661F\u9645\u53D1\u5C04\u53F0",check:nn("launch")},ex],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u706B\u661F\u5DF2\u7ECF\u662F\u5BB6\u4E86\u3002\u4F46\u4EBA\u7C7B\u7684\u6545\u4E8B\uFF0C\u4ECE\u6765\u4E0D\u6B62\u4E8E\u4E00\u4E2A\u5BB6\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u6728\u536B\u4E8C\xB7\u6B27\u7F57\u5DF4\uFF1A\u51B0\u58F3\u4E4B\u4E0B\u63A2\u6D4B\u5230\u6DB2\u6001\u6D77\u6D0B\u3002\u628A\u706B\u661F\u53D1\u5C55\u6210\u300C\u661F\u6E2F\u300D\uFF0C\u5C31\u80FD\u5EFA\u9020\u661F\u9645\u53D1\u5C04\u53F0\u3002"]]}],Rb=[{title:"\u7B2C\u4E00\u7AE0 \xB7 \u51B0\u539F",sub:"\u5728\u6728\u661F\u7684\u6CE8\u89C6\u4E0B",goals:[{text:"\u91C7\u96C6\u6C34\u51B0",...ur("ice",15)},{text:"\u91C7\u96C6\u94C1\u77FF",...ur("iron",10)},{text:"\u5EFA\u9020\u5236\u6C27\u7AD9",check:nn("oxygen")},{text:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",check:nn("habitat")},{text:"\u5EFA\u9020\u7740\u9646\u573A",check:nn("beacon")}],radio:[["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u7740\u9646\u6210\u529F\u3002\u8868\u9762\u6E29\u5EA6\u96F6\u4E0B 160 \u6444\u6C0F\u5EA6\u3002\u91CD\u529B\u53EA\u6709\u5730\u7403\u7684\u4E03\u5206\u4E4B\u4E00\u3002"],["\u706B\u661F\u6B96\u6C11\u5730 \xB7 \u6797\u6653","\u4F60\u5230\u4E86\u5417\uFF1F\u6211\u4EEC\u5728\u706B\u661F\u4E0A\u770B\u5F97\u89C1\u6728\u661F\u7684\u5149\u70B9\u3002\u66FF\u6211\u4EEC\u770B\u4E00\u773C\u5B83\u7684\u5927\u7EA2\u6591\u5427\u3002"],["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u6CE8\u610F\uFF1A\u8FD9\u91CC\u79BB\u592A\u9633\u592A\u8FDC\uFF0C\u592A\u9633\u80FD\u6548\u7387\u53EA\u6709\u706B\u661F\u7684\u4E00\u534A\u3002\u6240\u6709\u6280\u672F\u5DF2\u4ECE\u706B\u661F\u540C\u6B65\u3002"]]},{title:"\u7B2C\u4E8C\u7AE0 \xB7 \u51B0\u4E0B\u4E4B\u57CE",sub:"\u6D77\u6D0B\u4E4B\u4E0A\u7684\u706F\u706B",goals:[hh(8),Wr(2),{text:"\u5EFA\u9020\u805A\u53D8\u53CD\u5E94\u5806",check:nn("reactor")}],radio:[["\u5468\u9752\u79BE \xB7 \u6C34\u6587\u5B66\u5BB6","\u51B0\u5C42\u4E0B\u7684\u6D77\u6D0B\u6BD4\u5730\u7403\u6240\u6709\u6D77\u6D0B\u52A0\u8D77\u6765\u8FD8\u591A\u3002\u6709\u6C34\uFF0C\u5C31\u6709\u751F\u547D\u3002"],["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u51B0\u88C2\u7F1D\u91CC\u6709\u4E1C\u897F\u5728\u79FB\u52A8\u3002\u5B83\u4EEC\u548C\u706B\u661F\u7684\u9508\u8680\u86DB\u5F88\u50CF\u2026\u2026\u4F46\u662F\u84DD\u8272\u7684\u3002"]]},{title:"\u7B2C\u4E09\u7AE0 \xB7 \u6DF1\u6E0A\u4E4B\u5149",sub:"\u57CE\u5E02\u5728\u51B0\u539F\u4E0A\u751F\u957F",goals:[Wr(3),hh(24),{text:"\u5EFA\u9020\u751F\u6001\u4E2D\u67A2",check:nn("lifehub")}],radio:[["Elena Petrova \xB7 \u5929\u6587\u5B66\u5BB6","\u4F60\u77E5\u9053\u5417\uFF1F\u4ECE\u8FD9\u91CC\u770B\uFF0C\u592A\u9633\u53EA\u662F\u4E00\u9897\u7279\u522B\u4EAE\u7684\u661F\u661F\u3002"]]},{title:"\u7B2C\u56DB\u7AE0 \xB7 \u4E0B\u4E00\u7AD9",sub:"\u4E00\u5343\u4E8C\u767E\u5149\u5E74",goals:[Wr(4),{text:"\u5EFA\u9020\u661F\u9645\u53D1\u5C04\u53F0",check:nn("launch")},ex],radio:[["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u5F00\u666E\u52D2-442b\uFF1A\u4F4D\u4E8E\u5B9C\u5C45\u5E26\u7684\u7C7B\u5730\u884C\u661F\uFF0C\u8DDD\u79BB\u4E00\u5343\u4E8C\u767E\u5149\u5E74\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u8FD9\u5C06\u662F\u4EBA\u7C7B\u7B2C\u4E00\u6B21\u79BB\u5F00\u592A\u9633\u7CFB\u3002\u6211\u8001\u4E86\uFF0C\u7B49\u4E0D\u5230\u4F60\u4EEC\u62B5\u8FBE\u7684\u90A3\u5929\u3002\u4F46\u6211\u4F1A\u4E00\u76F4\u770B\u7740\u661F\u7A7A\u3002"]]}],Ab=[{title:"\u7B2C\u4E00\u7AE0 \xB7 \u53CC\u65E5\u4E4B\u4E0B",sub:"\u53E6\u4E00\u9897\u6052\u661F\u7684\u6668\u5149",goals:[{text:"\u91C7\u96C6\u94C1\u77FF",...ur("iron",15)},{text:"\u91C7\u96C6\u7845\u6676",...ur("silicon",10)},{text:"\u5EFA\u9020\u5236\u6C27\u7AD9",check:nn("oxygen")},{text:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",check:nn("habitat")},{text:"\u5EFA\u9020\u7740\u9646\u573A",check:nn("beacon")}],radio:[["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u51B7\u51BB\u4F11\u7720\u7ED3\u675F\u3002\u5F53\u524D\u65E5\u671F\uFF1A\u516C\u5143 2401 \u5E74\u3002\u6B22\u8FCE\u6765\u5230\u5F00\u666E\u52D2-442b\u3002"],["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u5927\u6C14\u542B\u6C27 14%\uFF0C\u8FD8\u4E0D\u591F\u547C\u5438\uFF0C\u4F46\u5DF2\u7ECF\u975E\u5E38\u63A5\u8FD1\u4E86\u3002\u8FD9\u91CC\u7684\u91CD\u529B\u6BD4\u5730\u7403\u7565\u5927\u3002"]]},{title:"\u7B2C\u4E8C\u7AE0 \xB7 \u5F02\u661F\u68EE\u6797",sub:"\u4F1A\u53D1\u5149\u7684\u6811",goals:[hh(10),Wr(2),{text:"\u5EFA\u9020\u805A\u53D8\u53CD\u5E94\u5806",check:nn("reactor")}],radio:[["Aiko Sato \u7684\u540E\u4EE3 \xB7 \u751F\u7269\u5B66\u5BB6","\u90A3\u4E9B\u4F1E\u83C7\u6811\u5728\u591C\u91CC\u4F1A\u53D1\u5149\u3002\u6211\u7684\u66FE\u66FE\u7956\u6BCD\u4E00\u5B9A\u4F1A\u559C\u6B22\u8FD9\u91CC\u3002"],["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u68EE\u6797\u4E2D\u7684\u63A0\u98DF\u8005\u4F1A\u5728\u591C\u95F4\u51FA\u6CA1\u3002"]]},{title:"\u7B2C\u4E09\u7AE0 \xB7 \u6587\u660E",sub:"\u57CE\u5E02\u8FDE\u6210\u4E86\u661F\u6CB3",goals:[Wr(4),hh(36),{text:"\u5EFA\u9020\u751F\u6001\u4E2D\u67A2",check:nn("lifehub")}],radio:[["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u6765\u81EA\u706B\u661F\u548C\u6B27\u7F57\u5DF4\u7684\u4FE1\u53F7\u5DF2\u7ECF\u62B5\u8FBE\u2014\u2014\u5B83\u4EEC\u5728\u4E00\u5343\u4E8C\u767E\u5E74\u524D\u53D1\u51FA\u3002\u4E24\u5EA7\u57CE\u5E02\u90FD\u8FD8\u4EAE\u7740\u3002"]]},{title:"\u7EC8\u7AE0 \xB7 \u661F\u9645\u6587\u660E",sub:"\u4E09\u9897\u661F\u7403\uFF0C\u4E00\u4E2A\u4EBA\u7C7B",goals:[Wr(5),{text:"\u5EFA\u9020\u6587\u660E\u7EAA\u5FF5\u7891",check:nn("monument")}],radio:[["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u5EFA\u4E00\u5EA7\u7EAA\u5FF5\u7891\u5427\u3002\u732E\u7ED9\u7B2C\u4E00\u4E2A\u8E0F\u4E0A\u706B\u661F\u7684\u4EBA\u2014\u2014\u4E5F\u5C31\u662F\u4F60\u3002"]]}],ui=ne==="europa"?Rb:ne==="kepler"?Ab:Tb,nx=ne==="mars"?2:1,na={rifle:{name:"\u7B49\u79BB\u5B50\u6B65\u67AA",icon:"rifle",cost:{iron:18,silicon:12},desc:"\u6309 2 \u5207\u6362\u3002\u6D88\u8017\u80FD\u91CF\u53D1\u5C04\u7B49\u79BB\u5B50\u5F39\u3002"},tank:{name:"\u5927\u5BB9\u91CF\u6C27\u6C14\u7F50",icon:"tank",cost:{iron:12,ice:10},desc:"\u5B87\u822A\u670D\u6C27\u6C14\u4E0A\u9650 100 \u2192 180\u3002"},rover:{name:"\u52A0\u538B\u6F2B\u6E38\u8F66",icon:"rover",cost:{iron:35,silicon:20,ice:5},desc:"\u5728\u5DE5\u574A\u65C1\u51FA\u5382\u3002\u6309 E \u4E0A\u8F66\uFF0CShift \u52A0\u901F\u3002\u8F66\u8231\u5185\u81EA\u52A8\u8865\u6C27\uFF0C\u8FD8\u80FD\u649E\u98DE\u9508\u8680\u86DB\u3002"},scanner:{name:"\u5730\u8D28\u626B\u63CF\u4EEA",icon:"scanner",cost:{iron:8,silicon:10},desc:"\u5C0F\u5730\u56FE\u8303\u56F4\u6269\u5927\uFF0C\u7F57\u76D8\u6807\u51FA\u6700\u8FD1\u7684\u949B\u77FF\u3002"},jetpack:{name:"\u55B7\u6C14\u80CC\u5305",icon:"jet",cost:{iron:20,silicon:15,titanium:4},desc:"\u7A7A\u4E2D\u6309\u4F4F\u7A7A\u683C\u98DE\u884C\uFF0C\u6D88\u8017\u80FD\u91CF\u3002"},overclock:{name:"\u6FC0\u5149\u8D85\u9891",icon:"bolt2",cost:{silicon:20,titanium:3},desc:"\u91C7\u77FF\u901F\u5EA6 \xD72\uFF0C\u6FC0\u5149\u4F24\u5BB3\u63D0\u5347\u3002"},armor:{name:"\u590D\u5408\u88C5\u7532",icon:"armor",cost:{iron:30,titanium:6},desc:"\u751F\u547D\u4E0A\u9650 150\uFF0C\u53D7\u5230\u4F24\u5BB3 -40%\u3002"},rifle2:{name:"\u805A\u7126\u7EBF\u5708",icon:"focus",cost:{silicon:18,titanium:6},need:"rifle",desc:"\u7B49\u79BB\u5B50\u6B65\u67AA\u4F24\u5BB3 +60%\u3002"}},qf=[],ea=null,$f=0;function Ie(n,t){qf.push([n,t])}function ix(){return ea}var Xf=0,Vr=200,bs="calm",ch=0,Yf=!1;function sx(n){if(ea&&($f-=n,$f<=0&&(ea=null)),!ea&&qf.length&&(ea=qf.shift(),$f=3.5+ea[1].length*.11,Z.play("radio")),Xf-=n,Xf<=0&&h.chapter<ui.length&&!Vn()){Xf=.5;let i=ui[h.chapter];h.goalDone=h.goalDone||{};let s=!0;i.goals.forEach((r,o)=>{let a=h.chapter+":"+o;r.check()&&!h.goalDone[a]&&(h.goalDone[a]=!0,Z.play("objective"),h.events.emit("toast",`\u2713 ${r.text}`)),h.goalDone[a]||(s=!1)}),s&&h.chapter<ui.length-1&&pl(h.chapter+1)}h.buildings.find(i=>i.type==="terraformer"&&i.powered)&&h.terraform<1&&(h.terraform=Math.min(1,h.terraform+n/300*(ke("atmo")?2:1)),h.terraform>=1&&!Yf&&(Yf=!0,h.events.emit("ending"))),h.raining=(h.terraform>=1||ne==="kepler")&&Math.sin(h.time.t*Math.PI*4+h.time.day*1.7)>.45,ht.storms&&h.time.day>=2&&h.terraform<.7&&(Vr-=n,bs==="calm"&&Vr<=0&&h.time.night<.5?(bs="warn",Vr=25,Ie("\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u6C99\u5C18\u66B4\u5C06\u5728 25 \u79D2\u540E\u62B5\u8FBE\u3002\u80FD\u89C1\u5EA6\u4F1A\u6025\u5267\u4E0B\u964D\uFF0C\u6C27\u6C14\u6D88\u8017\u52A0\u5FEB\u3002\u9760\u8FD1\u751F\u547D\u7EF4\u6301\u8BBE\u65BD\u3002")):bs==="warn"&&Vr<=0?(bs="storm",ch=70+Math.random()*40):bs==="storm"&&(ch-=n,ch<=0&&(bs="calm",Vr=360+Math.random()*300,Ie("\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u6C99\u5C18\u66B4\u5DF2\u8FC7\u5883\u3002"))));let e=bs==="storm"?1:0;h.storm+=(e-h.storm)*Math.min(1,n*.25),h.storm<.001&&(h.storm=0)}function pl(n,t=!1){h.chapter=n;let e=ui[n];t||(Z.play("chapter"),h.events.emit("chapter",e),e.radio.forEach(i=>Ie(i[0],i[1])))}function rx(){return{phase:bs,t:Vr,left:ch}}function ox(n){n&&(bs=n.phase==="storm"?"calm":n.phase,Vr=n.t??200)}function ax(n){Yf=n}var dh=[],Cb={player:6743807,turret:16756800};function fh(n,t,e,i){let s=Mt(Cb[i],i==="player"?1.1:.9,h.scene);s.position.copy(n),dh.push({pos:n.clone(),vel:t.clone().multiplyScalar(i==="player"?110:80),life:1.4,dmg:e,owner:i,s})}function Pb(n,t=0){for(let e of h.enemies){if(e.dead)continue;let i=1.3*e.scale+t,s=n.x-e.pos.x,r=n.y-(e.pos.y+1*e.scale),o=n.z-e.pos.z;if(s*s+r*r+o*o<i*i)return e}return null}function hx(n){for(let t=dh.length-1;t>=0;t--){let e=dh[t];e.life-=n;let i=e.life<=0,s=3;for(let r=0;r<s&&!i;r++){e.pos.addScaledVector(e.vel,n/s);let o=Pb(e.pos);o?(ml(o,e.dmg,e.owner),ut.spark(e.pos,[.5,.9,1],10,6),i=!0):e.pos.y<xt(e.pos.x,e.pos.z)&&(ut.spark(e.pos,[1,.7,.4],6,4),ut.dustPuff(e.pos,3,.5),i=!0)}e.s.position.copy(e.pos),Math.random()<.8&&ut.trail(e.pos,e.owner==="player"?[.3,.8,1]:[1,.6,.2],.6),i&&(h.scene.remove(e.s),dh.splice(t,1))}}function Zf(n,t,e=!1,i=!1){let s=i?3.4:e?1.35:.85+Math.random()*.35,r=Qg(s,pf.crystal,pf.eye),o=xt(n,t);r.group.position.set(n,o,t),h.scene.add(r.group);let a=i?1300+h.time.day*40:e?90:36+h.time.day*3,l={...r,pos:r.group.position,hp:a,maxHp:a,scale:s,guardian:e,home:e?new T(n,o,t):null,boss:i,stomp:4,awake:!e,speed:i?3.4:(e?5.2:4.4)+Math.random()*1.2,phase:Math.random()*6,atk:0,flash:0,sink:0,target:null,retarget:0};return h.enemies.push(l),l}function ml(n,t,e){n.dead||(n.hp-=t,n.flash=.12,n.awake=!0,e==="player"&&Z.play("hit"),n.hp<=0&&Ib(n,e))}function Ib(n,t){n.dead=!0;let e=n.pos.clone();if(e.y+=1,ut.burst(e,[1,.4,.1],50,9),ut.dustPuff(e,12,2),ut.debris(e,n.legs[0].children[0].material,6,5,.45*n.scale),ut.debris(e,n.inner.children[1].material,8,6,.5*n.scale),Z.play("kill"),h.scene.remove(n.group),h.stats.kills++,n.guardian&&(h.stats.guardKills=(h.stats.guardKills||0)+1),n.boss){h.stats.bossKills=(h.stats.bossKills||0)+1,h.res.titanium+=40,h.res.silicon+=40,h.events.emit("pickup",{type:"titanium",n:40,note:"\u6676\u6BCD\u6838\u5FC3"}),h.events.emit("bossDown"),ut.burst(e,[1,.5,.15],200,20),ut.ring(new T(n.pos.x,n.pos.y,n.pos.z),4,120,[1,.5,.2]),ut.debris(e,n.inner.children[1].material,30,12,1.4),Z.play("rumble");return}let i=n.guardian?3:Math.random()<.5?1:0;i&&(h.res.titanium+=i,h.stats.mined.titanium+=i,h.events.emit("pickup",{type:"titanium",n:i,note:"\u6676\u4F53\u6B8B\u9AB8"}))}var Kf=0,$r=0,lx=!1,Jf=5,uh=-1;function ux(){return h.enemies.find(n=>n.boss&&!n.dead)}function cx(){if(!h.buildings.length)return new T(0,0,0);let n=new T;for(let t of h.buildings)n.x+=t.x,n.z+=t.z;return n.multiplyScalar(1/h.buildings.length)}function dx(n){let t=h.player.pos,e=h.time.night>.6,i=(Vn()?h.buildings.some(r=>r.type==="habitat")||h.time.day>=3:h.chapter>=nx)&&h.terraform<1&&qi().foe>0;if(e&&!lx&&i){$r=Math.round(Math.min(3+(h.nightsSurvived||0)*2+Math.floor(h.colony.pop/4),26)*qi().foe);let r=(h.nightsSurvived||0)%4===3;r&&($r=Math.min(Math.round($r*1.8),40),uh=25),h.nightsSurvived=(h.nightsSurvived||0)+1,h.events.emit(r?"tide":"nightfall",$r)}if(lx=e,uh>0&&e&&(uh-=n,uh<=0)){let r=cx(),o=Math.random()*Math.PI*2,a=Ve.clamp(r.x+Math.cos(o)*130,-Zt+180,Zt-180),l=Ve.clamp(r.z+Math.sin(o)*130,-Zt+180,Zt-180),c=Zf(a,l,!1,!0);c.sink=-6,ut.ring(new T(a,xt(a,l),l),6,140),ut.dustPuff(new T(a,xt(a,l),l),60,12),Z.play("rumble"),h.events.emit("bossSpawn")}if(e&&i&&$r>0&&(Kf-=n,Kf<=0)){Kf=3+Math.random()*5;let r=cx(),o=Math.min($r,1+Math.floor(Math.random()*3)),a=Math.random()*Math.PI*2,l=110+Math.random()*50;for(let c=0;c<o;c++){let u=Ve.clamp(r.x+Math.cos(a)*l+(Math.random()-.5)*10,-Zt+180,Zt-180),d=Ve.clamp(r.z+Math.sin(a)*l+(Math.random()-.5)*10,-Zt+180,Zt-180),f=Zf(u,d);f.sink=-2,ut.dustPuff(new T(u,xt(u,d),d),14,3)}$r-=o}if(Jf-=n,Jf<=0){Jf=30;for(let r of h.nodes){if(r.type!=="titanium"||Math.hypot(r.x-t.x,r.z-t.z)<90)continue;if(!h.enemies.some(a=>a.guardian&&!a.dead&&a.home.distanceTo(r.mesh.position)<25)&&h.terraform<1&&qi().foe>0){let a=Math.random()*6.28;Zf(r.x+Math.cos(a)*6,r.z+Math.sin(a)*6,!0)}}}let s=performance.now()*.001;for(let r=h.enemies.length-1;r>=0;r--){let o=h.enemies[r];if(o.dead){h.enemies.splice(r,1);continue}if(!o.guardian&&(h.time.night<.3||h.terraform>=1)){o.sink-=n*1.5,o.group.position.y=xt(o.pos.x,o.pos.z)+o.sink,o.sink<-3&&(h.scene.remove(o.group),h.enemies.splice(r,1));continue}o.sink<0&&(o.sink=Math.min(0,o.sink+n*1.5));let a=Math.hypot(t.x-o.pos.x,t.z-o.pos.z);if(o.retarget-=n,o.retarget<=0)if(o.retarget=1,o.target=null,o.guardian)a<22&&(o.awake=!0),o.awake&&a<70&&!h.player.dead?o.target={kind:"player"}:(o.awake=!1,o.target={kind:"home"});else if(a<32&&!h.player.dead)o.target={kind:"player"};else{let m=null,_=400;for(let E of h.buildings){if(E.type==="lamp"||E.broken)continue;let M=Math.hypot(E.x-o.pos.x,E.z-o.pos.z)-E.def.r;M<_&&(_=M,m=E)}o.target=m?{kind:"building",b:m}:{kind:"player"}}let l=t.x,c=t.z,u=1.8*o.scale,d=o.target;if(d?.kind==="building"){if(!h.buildings.includes(d.b)||d.b.broken){o.retarget=0;continue}l=d.b.x,c=d.b.z,u=d.b.def.r*.9+1.4}else d?.kind==="home"&&(l=o.home.x,c=o.home.z,u=2);let f=l-o.pos.x,p=c-o.pos.z,g=Math.hypot(f,p),v=!1;if(g>u){f/=g,p/=g;for(let E of h.enemies){if(E===o)continue;let M=o.pos.x-E.pos.x,D=o.pos.z-E.pos.z,A=Math.hypot(M,D);A<2.5&&A>.01&&(f+=M/A*.6,p+=D/A*.6)}let m=Math.hypot(f,p)||1,_=o.speed*(o.target?.kind==="home"?.5:1);o.pos.x+=f/m*_*n,o.pos.z+=p/m*_*n;for(let E of h.colliders.query(o.pos.x,o.pos.z)){if(E.kind!=="building")continue;let M=o.pos.x-E.x,D=o.pos.z-E.z,A=Math.hypot(M,D),L=E.r+.8;A<L&&A>.01&&(o.pos.x=E.x+M/A*L,o.pos.z=E.z+D/A*L)}o.group.rotation.y=Math.atan2(f,p),v=!0}else d&&d.kind!=="home"&&(o.group.rotation.y=Math.atan2(f,p),o.atk-=n,o.atk<=0&&(o.atk=1,d.kind==="player"?h.player.damage((o.boss?30:o.guardian?14:9)*qi().dmg,o.pos):(d.b.hp-=o.boss?70:o.guardian?20:8,ut.spark(new T(o.pos.x,o.pos.y+1,o.pos.z),[1,.5,.2],8,5),d.b.hp<=0&&(d.b.hp=0,d.b.broken=!0,o.retarget=0,h.events.emit("broken",d.b),Zi())),o.inner.position.z=.6));if(o.boss){o.stomp-=n;let m=Math.hypot(t.x-o.pos.x,t.z-o.pos.z);o.stomp<=0&&m<22&&(o.stomp=4.5,ut.ring(new T(o.pos.x,o.pos.y,o.pos.z),3,100,[.9,.45,.25]),Z.play("rumble"),h.player.landDip=Math.max(h.player.landDip,.35),m<13&&!h.driving&&(h.player.damage(18,o.pos),h.player.vel.y=4,h.player.vel.x+=(t.x-o.pos.x)/m*8,h.player.vel.z+=(t.z-o.pos.z)/m*8))}o.inner.position.z*=.85,o.pos.y=xt(o.pos.x,o.pos.z)+o.sink;let x=s*(v?12:2)+o.phase;for(let m of o.legs)m.rotation.x=Math.sin(x+m.userData.phase)*(v?.5:.08),m.rotation.z=Math.max(0,Math.cos(x+m.userData.phase))*.25*m.userData.side*(v?1:0);o.inner.position.y=Math.abs(Math.sin(x))*.08,o.flash>0?(o.flash-=n,o.inner.scale.setScalar(1+o.flash*1.2)):o.inner.scale.setScalar(1),Math.random()<n*4&&ut.trail(new T(o.pos.x,o.pos.y+1.6*o.scale,o.pos.z),[1,.35,.1],.8)}}function ia(n,t,e){let i=null,s=e,r=new T;for(let o of h.enemies){if(o.dead)continue;let a=1.3*o.scale;r.set(o.pos.x-n.x,o.pos.y+1*o.scale-n.y,o.pos.z-n.z);let l=r.dot(t);if(l<0)continue;let c=r.lengthSq()-l*l;if(c>a*a)continue;let u=l-Math.sqrt(a*a-c);u<s&&(s=u,i=o)}return i?{e:i,dist:s}:null}var ct={keys:new Set,mouse:[!1,!1,!1],dx:0,dy:0,wheel:0,pressed:new Set,clicked:[!1,!1,!1],sens:.0022,down(n){return this.keys.has(n)},hit(n){return this.pressed.has(n)},endFrame(){this.pressed.clear(),this.dx=0,this.dy=0,this.wheel=0,this.clicked=[!1,!1,!1]}};function fx(n){window.addEventListener("keydown",t=>{t.code==="Tab"&&t.preventDefault(),ct.keys.has(t.code)||ct.pressed.add(t.code),ct.keys.add(t.code)}),window.addEventListener("keyup",t=>ct.keys.delete(t.code)),window.addEventListener("blur",()=>{ct.keys.clear(),ct.mouse=[!1,!1,!1]}),window.addEventListener("mousemove",t=>{h.locked&&(ct.dx+=t.movementX||0,ct.dy+=t.movementY||0)}),n.addEventListener("mousedown",t=>{h.locked&&(ct.mouse[t.button]=!0,ct.clicked[t.button]=!0)}),window.addEventListener("mouseup",t=>{ct.mouse[t.button]=!1}),window.addEventListener("wheel",t=>{h.locked&&(ct.wheel+=Math.sign(t.deltaY))},{passive:!0}),window.addEventListener("contextmenu",t=>t.preventDefault())}var Lb=ht.gravity,px=1.7,pe=new T(-6,0,-6),ph=class{constructor(t){this.cam=t,this.pos=new T(0,0,6),this.pos.y=xt(this.pos.x,this.pos.z),this.vel=new T,this.yaw=Math.PI*.85,this.pitch=-.05,this.onGround=!0,this.maxHealth=100,this.health=100,this.maxO2=100,this.o2=100,this.energy=100,this.bob=0,this.stepT=0,this.landDip=0,this.dead=!1,this.hurtT=0,this.flashlight=!1,this.inLife=!1,this.alarmT=0,this.lastHitDir=0,this.moving=!1,this.sprinting=!1,this.jetting=!1,this.roll=0,this.fwd=new T}get eye(){return new T(this.pos.x,this.pos.y+px+this.bobY,this.pos.z)}damage(t,e){if(this.dead)return;let i=h.upgrades.armor?.6:1;this.health-=t*i,this.hurtT=.5,e&&(this.lastHitDir=Math.atan2(e.x-this.pos.x,e.z-this.pos.z)),Z.play("hurt"),this.health<=0&&this.die("\u4F60\u5012\u5728\u4E86\u706B\u661F\u7684\u5C18\u571F\u91CC")}die(t){this.dead||(this.dead=!0,this.health=0,h.events.emit("death",t))}respawn(){let t=h.buildings.find(i=>i.type==="habitat")||null,e=t?new T(t.x,0,t.z+9):pe.clone().add(new T(5,0,8));for(let i in h.res)h.res[i]=Math.floor(h.res[i]*.75);this.pos.set(e.x,xt(e.x,e.z),e.z),this.vel.set(0,0,0),this.health=this.maxHealth,this.o2=this.maxO2,this.energy=100,this.dead=!1}update(t){if(this.maxO2=h.upgrades.tank?180:100,this.maxHealth=h.upgrades.armor?150:100,this.dead){this.cam.position.y-=t*.3;return}h.locked&&(this.yaw-=ct.dx*ct.sens,this.pitch=Ve.clamp(this.pitch-ct.dy*ct.sens,-1.5,1.5));let e=0,i=0;h.menuOpen||((ct.down("KeyW")||ct.down("ArrowUp"))&&(i-=1),(ct.down("KeyS")||ct.down("ArrowDown"))&&(i+=1),(ct.down("KeyA")||ct.down("ArrowLeft"))&&(e-=1),(ct.down("KeyD")||ct.down("ArrowRight"))&&(e+=1));let s=Math.hypot(e,i);this.moving=s>0,this.sprinting=this.moving&&ct.down("ShiftLeft")&&i<0&&this.o2>5;let r=this.sprinting?10.5:6.2,o=Math.sin(this.yaw),a=Math.cos(this.yaw),l=0,c=0;if(s){let _=e/s,E=i/s;l=_*a+E*o,c=-_*o+E*a}let u=this.onGround?12:2.5;if(this.vel.x+=(l*r-this.vel.x)*Math.min(1,u*t),this.vel.z+=(c*r-this.vel.z)*Math.min(1,u*t),this.jetting=!1,!h.menuOpen&&ct.hit("Space")&&this.onGround)this.vel.y=5.4,this.onGround=!1,Z.play("jump");else if(!h.menuOpen&&ct.down("Space")&&!this.onGround&&h.upgrades.jetpack&&this.energy>1&&this.vel.y<6){this.vel.y+=15*t,this.energy-=22*t,this.jetting=!0,Math.random()<.5&&Z.play("jet");let _=new T(this.pos.x+o*.4,this.pos.y+.8,this.pos.z+a*.4);ut.flame(_),ut.flame(_)}this.vel.y-=Lb*t;let d=this.pos.x+this.vel.x*t,f=this.pos.z+this.vel.z*t;this.pos.x=Ve.clamp(d,-Zt+120,Zt-120),this.pos.z=Ve.clamp(f,-Zt+120,Zt-120),this.pos.y+=this.vel.y*t;for(let _ of h.colliders.query(this.pos.x,this.pos.z)){let E=this.pos.x-_.x,M=this.pos.z-_.z,D=Math.hypot(E,M),A=_.r+.45;if(D<A&&D>1e-4){if(_.kind==="rock"&&this.pos.y>xt(_.x,_.z)+_.r*.6)continue;this.pos.x=_.x+E/D*A,this.pos.z=_.z+M/D*A}}let p=xt(this.pos.x,this.pos.z);this.pos.y<=p?(!this.onGround&&this.vel.y<-4&&(this.landDip=Math.min(.35,-this.vel.y*.04),Z.play("land"),ut.dustPuff(this.pos,6,1)),this.pos.y=p,this.vel.y=0,this.onGround=!0):this.onGround&&this.pos.y-p<.5&&this.vel.y<=0?(this.pos.y=p,this.vel.y=0):this.onGround=!1;let g=Math.hypot(this.vel.x,this.vel.z);this.onGround&&g>.5&&(this.bob+=t*g*1.25,this.stepT+=t*g,this.stepT>2.6&&(this.stepT=0,Z.play("step"),Math.random()<.4&&ut.dustPuff(this.pos,2,.4))),this.landDip*=Math.pow(.002,t),this.bobY=Math.sin(this.bob*2)*.05*Math.min(1,g/6)-this.landDip,this.cam.position.set(this.pos.x,this.pos.y+px+this.bobY,this.pos.z),this.roll+=(-e*.025-this.roll)*Math.min(1,t*6);let v=(h.baseFov||72)+(this.sprinting?8:0)+(this.jetting?4:0);Math.abs(this.cam.fov-v)>.05&&(this.cam.fov+=(v-this.cam.fov)*Math.min(1,t*5),this.cam.updateProjectionMatrix()),this.cam.rotation.set(this.pitch,this.yaw,this.roll+Math.sin(this.bob)*.006*Math.min(1,g/6),"YXZ"),this.cam.getWorldDirection(this.fwd);let x=Xg(this.pos),m=this.pos.distanceTo(pe)<11;if(this.inLife=!!x||m,this.inLife)this.o2=Math.min(this.maxO2,this.o2+30*t),this.health=Math.min(this.maxHealth,this.health+4*t);else{let _=.55+(this.sprinting?.6:0)+(this.jetting?.6:0);_*=(1+h.storm*.8)*qi().o2*(ke("suit")?.65:1),h.terraform>=1&&(_*=.5),this.o2=Math.max(0,this.o2-_*t)}this.o2<=0&&(this.health-=9*t,this.health<=0&&this.die("\u6C27\u6C14\u8017\u5C3D")),this.o2<this.maxO2*.2&&!this.inLife&&(this.alarmT-=t,this.alarmT<=0&&(this.alarmT=2,Z.play("alarm"))),this.jetting||(this.energy=Math.min(100,this.energy+(this.onGround?14:4)*t)),this.hurtT=Math.max(0,this.hurtT-t),this.health=Math.min(this.health,this.maxHealth)}};var fr=[{id:"laser",name:"\u91C7\u77FF\u6FC0\u5149",icon:"laser"},{id:"rifle",name:"\u7B49\u79BB\u5B50\u6B65\u67AA",icon:"rifle",need:"rifle"},{id:"build",name:"\u5EFA\u9020",icon:"build"}],an={index:0,get id(){return fr[this.index].id}},Ii,Db=0,Xr=null,tp,ws,gl,dr={},Ss,Ts,aa,oa,xl,mx=new T(.24,-.22,-.85);function yx(n){ws=new zi,gl=new cn(n.fov,n.aspect,.01,10),ws.add(new Js(16769224,4202520,1.4));let t=new Oi(16777215,1.5);t.position.set(1,2,1),ws.add(t),ws.userData.dl=t;let e=(M,D,A,L,I,w)=>{let b=new lt(M,D);return b.position.set(A,L,I),w.add(b),b},i=new Oi(8965375,1.2);i.position.set(-2,1,2),ws.add(i);let s=(M,D,A,L=20)=>{let I=new gs(M.map(([w,b])=>new nt(w,b)),L);return I.rotateX(-Math.PI/2),e(I,D,0,0,0,A)},r=new pt({color:15262940,roughness:.35,metalness:.15}),o=new pt({color:2764083,roughness:.45,metalness:.7}),a=new pt({color:16742954,roughness:.4,metalness:.2});tp=new pt({color:3346688,emissive:16747056,emissiveIntensity:1.2});let l=new pt({color:8755,emissive:4515583,emissiveIntensity:1.5}),c=(M,D,A,L,I,w,b)=>{let U=e(new Wt(M,M,D,16),A,L,I,w,b);return U.rotation.x=Math.PI/2,U},u=new ft;s([[0,-.12],[.04,-.12],[.056,-.08],[.058,.18],[.05,.26],[.036,.3],[.03,.36],[0,.36]],r,u),c(.06,.02,a,0,0,-.02,u),c(.06,.012,a,0,0,.1,u),c(.045,.06,o,0,0,.1+.04,u);for(let M=0;M<3;M++){let D=e(new Dt(.034-M*.003,.007,8,20),tp,0,0,-.33-M*.035,u)}c(.018,.14,o,0,0,-.38,u);let d=e(new Bt(.02,12,8),new Yt({color:16760960}),0,0,-.455,u);e(new Gt(.018,.016,.2),o,0,.062,-.05,u),c(.026,.17,a,.06,-.02,-.02,u),e(new Gt(.032,.07,.045),o,0,-.075,.02,u).rotation.x=.3,e(new Gt(.03,.02,.07),o,0,-.05,.02,u);let f=e(new On(.04,.025),new Yt({color:6743807}),-.0585,.012,.04,u);f.rotation.y=-Math.PI/2,u.userData.tip=d;let p=new ft;s([[0,-.2],[.04,-.2],[.055,-.15],[.055,.2],[.048,.28],[0,.28]],r,p),c(.035,.32,o,0,0,-.36,p);for(let M=0;M<4;M++)e(new Dt(.046,.009,8,20),l,0,0,-.27-M*.065,p);c(.05,.03,a,0,0,-.18,p),c(.022,.16,o,0,.075,-.02,p),e(new Wt(.023,.023,.005,12),l,0,.075,-.1,p).rotation.x=Math.PI/2,e(new Gt(.032,.07,.045),o,0,-.075,0,p).rotation.x=.3,e(new Gt(.035,.09,.05),l,0,-.08,-.06,p);let g=new ft;e(new Gt(.32,.22,.018),o,0,0,0,g),e(new Gt(.33,.012,.022),a,0,.112,0,g);let v=document.createElement("canvas");v.width=256,v.height=176;let x=v.getContext("2d");x.fillStyle="#06222e",x.fillRect(0,0,256,176),x.strokeStyle="rgba(127,230,255,.25)";for(let M=0;M<256;M+=16)x.beginPath(),x.moveTo(M,0),x.lineTo(M,176),x.stroke();for(let M=0;M<176;M+=16)x.beginPath(),x.moveTo(0,M),x.lineTo(256,M),x.stroke();x.strokeStyle="#7fe6ff",x.lineWidth=2,x.beginPath(),x.arc(128,110,50,Math.PI,0),x.lineTo(178,140),x.lineTo(78,140),x.closePath(),x.stroke(),x.fillStyle="#7fe6ff",x.font="bold 14px sans-serif",x.fillText("BLUEPRINT",12,22);let m=new on(v);m.colorSpace=ye;let _=e(new On(.29,.195),new Yt({map:m,transparent:!0,opacity:.95}),0,-.004,.01,g);g.userData.scr=_,g.rotation.set(-.5,.25,0),dr={laser:u,rifle:p,build:g};for(let M in dr)dr[M].scale.setScalar(M==="build"?.45:.6),dr[M].visible=!1,ws.add(dr[M]);let E=new Wt(1,1,1,8,1,!0);E.translate(0,.5,0),Ss=new lt(E,new Yt({color:16773328,transparent:!0,opacity:.95,blending:fe,depthWrite:!1})),Ts=new lt(E,new Yt({color:16740384,transparent:!0,opacity:.45,blending:fe,depthWrite:!1})),Ss.visible=Ts.visible=!1,Ss.frustumCulled=Ts.frustumCulled=!1,h.scene.add(Ss,Ts),aa=Mt(16748608,1.6,h.scene),aa.visible=!1,Ii=new js(16747072,0,6,2),h.scene.add(Ii),xl=Mt(6743807,.35,ws),xl.visible=!1,oa=new No(16773853,0,70,.42,.45,1.2),n.add(oa),oa.position.set(.3,-.2,0),oa.target.position.set(0,0,-10),n.add(oa.target),h.scene.add(n)}function mh(n){let t=fr[n];if(t.need&&!h.upgrades[t.need]){h.events.emit("toast",`\u5C1A\u672A\u5236\u9020\uFF1A${t.name}\uFF08\u5728\u5236\u9020\u5DE5\u574A\u5236\u4F5C\uFF09`),Z.play("deny");return}an.index===n&&t.id!=="build"||(an.index=n,Z.play("ui"),t.id==="build"?h.events.emit("openBuild"):Br(null))}var sa=0,jf=0,ra=0,Qf=0,gh=0,gx=-1,Ub=new T,Nb=new T(0,1,0),la=new T;function xx(n,t,e){let i=null,s=e;for(let r of h.nodes){let o=r.mesh.scale.x,a=1.5*o+.3;la.set(r.x-n.x,r.y+.7*o-n.y,r.z-n.z);let l=la.dot(t);if(l<0||l>e+a)continue;let c=la.lengthSq()-l*l;if(c>a*a)continue;let u=l-Math.sqrt(a*a-c);u<s&&(s=Math.max(.3,u),i=r)}return i?{n:i,dist:s}:null}function kb(n,t,e){let i=null,s=e;for(let r of h.buildings){let o=Math.max(1.2,r.def.r);la.set(r.x-n.x,r.y+Math.min(o,3)*.6-n.y,r.z-n.z);let a=la.dot(t);if(a<0)continue;let l=la.lengthSq()-a*a;if(l>o*o)continue;let c=a-Math.sqrt(o*o-l);c<s&&(s=c,i=r)}return i}function vx(n,t,e){let i=an.id;gx!==an.index&&(gh=1,gx=an.index),gh=Math.max(0,gh-n*4);for(let p in dr)dr[p].visible=p===i;let s=dr[i],r=Math.hypot(t.vel.x,t.vel.z),o=Math.sin(t.bob)*.012*Math.min(1,r/6),a=Math.abs(Math.cos(t.bob))*.012*Math.min(1,r/6);ra*=Math.pow(1e-4,n);let l=i==="build"?[.2,-.24,-.6]:[.24,-.22,-.58];s.position.set(l[0]+o,l[1]+a-gh*.3-(t.sprinting?.04:0),l[2]+ra*.08),s.rotation.x=(i==="build"?-.5:0)+ra*.15+(t.sprinting?-.25:0),i==="build"&&(s.userData.scr.material.opacity=.6+Math.sin(performance.now()*.005)*.2),gl.aspect=e.aspect,gl.fov=e.fov,gl.updateProjectionMatrix();let c=.4+(1-h.time.night)*1.2;ws.userData.dl.intensity=c,ct.hit("KeyF")&&!h.menuOpen&&(t.flashlight=!t.flashlight,Z.play("ui")),oa.intensity=t.flashlight?60:0;let u=e.position,d=t.fwd;if(h.lookBuilding=h.menuOpen?null:kb(u,d,14),h.aimNode=i==="laser"&&!!xx(u,d,9),!h.menuOpen&&!t.dead&&!h.photo){if(ct.hit("Digit1")&&mh(0),ct.hit("Digit2")&&mh(1),(ct.hit("Digit3")||ct.hit("KeyB"))&&mh(2),ct.wheel&&an.id!=="build"){let p=an.index;for(let g=0;g<2&&(p=(p+(ct.wheel>0?1:2))%2,!(!fr[p].need||h.upgrades[fr[p].need]));g++);p!==an.index&&mh(p)}an.id==="build"&&be.type&&ct.wheel&&(be.rot+=ct.wheel*.3)}Ss.visible=Ts.visible=aa.visible=!1,Db-=n,Ii.intensity=Math.max(0,Ii.intensity-n*120),Xr&&(Xr.mesh.position.set(Xr.x,Xr.y,Xr.z),Xr=null),xl.visible=!1,jf-=n;let f=ct.mouse[0]&&!h.menuOpen&&!t.dead&&h.locked;if(tp.emissiveIntensity=i==="laser"&&f?3+Math.random()*1.5:1+Math.sin(performance.now()*.003)*.3,i==="laser")if(f){let g=xx(u,d,9),v=ia(u,d,9),x=Yc(u,d,9),m=9,_=null;x&&x.dist<m&&(m=x.dist,_="ground"),g&&g.dist<=m&&(m=g.dist,_="node"),v&&v.dist<m&&(m=v.dist,_="enemy");let E=Ub.copy(u).addScaledVector(d,m),M=e.localToWorld(mx.clone()),D=E.clone().sub(M),A=D.length();D.normalize();let L=new hn().setFromUnitVectors(Nb,D),I=1+Math.sin(performance.now()*.05)*.2;if(Ss.position.copy(M),Ss.quaternion.copy(L),Ss.scale.set(.012*I,A,.012*I),Ts.position.copy(M),Ts.quaternion.copy(L),Ts.scale.set(.04*I,A,.04*I),Ss.visible=Ts.visible=!0,aa.position.copy(E),aa.visible=!0,aa.scale.setScalar(1.2+Math.random()*.8),ra=Math.max(ra,.15+Math.random()*.1),Ii.position.copy(E).addScaledVector(d,-.6),Ii.color.setRGB(1,.55,.25),Ii.intensity=5+Math.random()*4,_==="node"){let w=g.n;for(Ii.color.setRGB(..._s[w.type]),Xr=w,w.mesh.position.set(w.x+(Math.random()-.5)*.07,w.y+(Math.random()-.5)*.05,w.z+(Math.random()-.5)*.07),Math.random()<.15&&ut.dustPuff(E,1,.4),sa+=n*3.2*(h.upgrades.overclock?2:1)*(ke("laser2")?1.5:1)*qi().yield,Math.random()<.7&&ut.spark(E,_s[w.type],2,5,.4),Qf-=n,Qf<=0&&(Qf=.09,Z.play("mine"));sa>=1&&h.nodes.includes(w);)if(sa-=1,h.res[w.type]++,h.stats.mined[w.type]++,w.meteor&&(h.stats.meteorMined=(h.stats.meteorMined||0)+1),h.events.emit("pickup",{type:w.type,n:1}),eh(w,1)){Z.play("deplete"),sa=0;break}}else _==="enemy"?(ml(v.e,16*n*(h.upgrades.overclock?1.5:1),"laser"),Math.random()<.5&&ut.spark(E,[1,.5,.2],3,5)):_==="ground"&&(Math.random()<.3&&ut.spark(E,[1,.6,.3],1,3),Math.random()<.1&&ut.dustPuff(E,1,.3));Z.laser(!0)}else Z.laser(!1),sa=Math.min(sa,.9);else Z.laser(!1);if(i==="rifle"&&f&&jf<=0)if(t.energy>=5){jf=.16,t.energy-=5,ra=1;let p=e.localToWorld(mx.clone()),g=ia(u,d,200),v=Yc(u,d,200),x=200;v&&(x=v.dist),g&&g.dist<x&&(x=g.dist);let _=u.clone().addScaledVector(d,x).sub(p).normalize();fh(p,_,h.upgrades.rifle2?30:19,"player"),Z.play("shoot"),xl.visible=!0,xl.position.set(.24,-.21,-.86),Ii.position.copy(p),Ii.color.setRGB(.4,.9,1),Ii.intensity=12}else ct.clicked[0]&&(Z.play("deny"),h.events.emit("toast","\u80FD\u91CF\u4E0D\u8DB3"));if(i==="build"){let p=!h.menuOpen&&be.type?Yc(u,d,40):null;if(Yg(p?p.point:null,t.pos),!h.menuOpen&&be.type&&(ct.hit("KeyR")&&(be.rot+=Math.PI/4),ct.clicked[0]))if(be.valid){let g=Zg();g&&h.events.emit("built",g)}else Z.play("deny"),h.events.emit("toast",be.reason);ct.clicked[2]&&(Br(null),an.index=0,Z.play("ui"))}}function Mx(n){h.player.dead||h.driving||h.photo||(n.autoClear=!1,n.clearDepth(),n.render(ws,gl),n.autoClear=!0)}var ca=[["\u6797\u6653","\u690D\u7269\u5B66\u5BB6","\u6211\u4ECE\u4E91\u5357\u5E26\u6765\u4E86\u4E00\u5305\u8336\u6811\u79CD\u5B50\u3002\u603B\u6709\u4E00\u5929\uFF0C\u706B\u661F\u4E0A\u4E5F\u80FD\u6CE1\u4E00\u58F6\u70ED\u8336\u3002"],["Amara Okafor","\u533B\u751F","\u5728\u5730\u7403\u4E0A\uFF0C\u6211\u6551\u8FC7\u5F88\u591A\u4EBA\u3002\u5728\u8FD9\u91CC\uFF0C\u6211\u60F3\u770B\u7740\u5B69\u5B50\u4EEC\u5E73\u5B89\u957F\u5927\u3002"],["\u9648\u9ED8","\u5DE5\u7A0B\u5E08","\u8FD9\u91CC\u7684\u6BCF\u4E00\u9897\u87BA\u4E1D\uFF0C\u90FD\u662F\u6211\u4EEC\u4EB2\u624B\u62E7\u4E0A\u53BB\u7684\u3002"],["Mateo Silva","\u5730\u8D28\u5B66\u5BB6","\u4F60\u770B\u89C1\u90A3\u4E9B\u5CA9\u5C42\u4E86\u5417\uFF1F\u5B83\u4EEC\u6BD4\u4EBA\u7C7B\u7684\u5386\u53F2\u8FD8\u8981\u53E4\u8001\u56DB\u5341\u4EBF\u5E74\u3002"],["\u82CF\u5FF5","\u6559\u5E08",'\u6211\u7684\u7B2C\u4E00\u5802\u8BFE\uFF0C\u5C31\u53EB"\u6211\u4EEC\u4E3A\u4EC0\u4E48\u6765\u5230\u706B\u661F"\u3002'],["Yuki Tanaka","\u98DE\u884C\u5458","\u4ECE\u8F68\u9053\u4E0A\u770B\uFF0C\u4F60\u4EEC\u7684\u706F\u5149\u50CF\u662F\u7EA2\u8272\u6C99\u6F20\u91CC\u7684\u4E00\u4E32\u73CD\u73E0\u3002"],["\u738B\u5927\u5C71","\u53A8\u5E08","\u6E29\u5BA4\u91CC\u7684\u7B2C\u4E00\u6279\u571F\u8C46\uFF0C\u6211\u505A\u4E86\u4E00\u9505\u571F\u8C46\u7096\u83DC\u3002\u5927\u5BB6\u90FD\u54ED\u4E86\u3002"],["Elena Petrova","\u5929\u6587\u5B66\u5BB6","\u665A\u4E0A\u62AC\u5934\uFF0C\u90A3\u9897\u6700\u4EAE\u7684\u84DD\u661F\uFF0C\u5C31\u662F\u5730\u7403\u3002"],["\u8D75\u5C0F\u96E8","\u5B66\u751F","\u6211\u5341\u516D\u5C81\u3002\u6211\u4F1A\u662F\u7B2C\u4E00\u4EE3\u5728\u706B\u661F\u957F\u5927\u7684\u4EBA\u3002"],["Kwame Mensah","\u7535\u5DE5","\u53EA\u8981\u706F\u8FD8\u4EAE\u7740\uFF0C\u8FD9\u91CC\u5C31\u662F\u5BB6\u3002"],["\u5468\u9752\u79BE","\u6C34\u6587\u5B66\u5BB6","\u51B0\u5C42\u4E0B\u9762\u6709\u6C34\u3002\u6709\u6C34\uFF0C\u5C31\u6709\u751F\u547D\u3002"],["Priya Sharma","\u7A0B\u5E8F\u5458","\u6211\u5199\u7684\u4EE3\u7801\u5728\u63A7\u5236\u5236\u6C27\u7AD9\u3002\u522B\u62C5\u5FC3\uFF0C\u6211\u6D4B\u8BD5\u8FC7\u4E09\u5343\u904D\u4E86\u3002"],["\u674E\u957F\u98CE","\u8001\u5175","\u6211\u5E74\u8F7B\u65F6\u5B88\u8FC7\u8FB9\u7586\u3002\u73B0\u5728\uFF0C\u6211\u5B88\u7740\u4EBA\u7C7B\u7684\u65B0\u8FB9\u7586\u3002"],["Sofia Rossi","\u5EFA\u7B51\u5E08","\u7A79\u9876\u7684\u5F27\u5EA6\uFF0C\u662F\u6211\u7167\u7740\u6545\u4E61\u6559\u5802\u7684\u5706\u9876\u753B\u7684\u3002"],["\u4F55\u5B89","\u62A4\u58EB","\u60F3\u5BB6\u7684\u65F6\u5019\uFF0C\u6211\u5C31\u53BB\u6E29\u5BA4\u91CC\u95FB\u95FB\u6CE5\u571F\u7684\u5473\u9053\u3002"],["Jonas Berg","\u673A\u68B0\u5E08","\u706B\u661F\u7684\u6C99\u5B50\u4F1A\u94BB\u8FDB\u4EFB\u4F55\u7F1D\u9699\u3002\u4F46\u6211\u4EEC\u6BD4\u6C99\u5B50\u66F4\u56FA\u6267\u3002"],["\u9A6C\u6674","\u8BB0\u8005","\u6211\u8981\u8BB0\u5F55\u4E0B\u8FD9\u4E00\u5207\u3002\u51E0\u767E\u5E74\u540E\u7684\u4EBA\u4F1A\u60F3\u77E5\u9053\uFF0C\u6700\u521D\u662F\u600E\u6837\u7684\u3002"],["Omar Haddad","\u519C\u5B66\u5BB6","\u6211\u7956\u7236\u5728\u6C99\u6F20\u91CC\u79CD\u51FA\u4E86\u6930\u67A3\u3002\u6211\u8981\u5728\u706B\u661F\u79CD\u51FA\u68EE\u6797\u3002"],["\u5434\u6850","\u753B\u5BB6","\u706B\u661F\u7684\u65E5\u843D\u662F\u84DD\u8272\u7684\u3002\u5730\u7403\u4E0A\u6CA1\u6709\u4EBA\u4F1A\u76F8\u4FE1\u3002"],["Grace Kim","\u5FC3\u7406\u533B\u751F","\u79BB\u5BB6\u5F88\u8FDC\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5F7C\u6B64\u5C31\u662F\u5BB6\u3002"],["\u90ED\u8FDC","\u7236\u4EB2","\u6211\u5973\u513F\u5728\u98DE\u8239\u4E0A\u51FA\u751F\u3002\u5979\u7684\u51FA\u751F\u8BC1\u660E\u4E0A\u5199\u7740\uFF1A\u51FA\u751F\u5730\uFF0C\u661F\u9645\u7A7A\u95F4\u3002"],["Lucas Moreau","\u97F3\u4E50\u5BB6","\u6211\u5E26\u4E86\u4E00\u628A\u5409\u4ED6\u3002\u4ECA\u665A\u7A79\u9876\u91CC\u6709\u97F3\u4E50\u4F1A\uFF0C\u4F60\u6765\u5417\uFF1F"],["\u94B1\u591A\u591A","\u4F1A\u8BA1","\u6211\u7B97\u8FC7\u4E86\uFF1A\u7167\u8FD9\u4E2A\u901F\u5EA6\uFF0C\u4E8C\u5341\u5E74\u540E\u8FD9\u91CC\u4F1A\u6709\u4E00\u5EA7\u57CE\u5E02\u3002"],["Aiko Sato","\u751F\u7269\u5B66\u5BB6","\u90A3\u4E9B\u9508\u8680\u86DB\u2026\u2026\u4E5F\u8BB8\u5B83\u4EEC\u53EA\u662F\u5728\u4FDD\u62A4\u81EA\u5DF1\u7684\u5BB6\u56ED\u3002"],["\u9093\u5353","\u77FF\u5DE5","\u949B\u77FF\u91CC\u85CF\u7740\u706B\u661F\u7684\u5FC3\u8DF3\u3002"],["Nadia Volkova","\u6C14\u8C61\u5B66\u5BB6","\u5927\u6C14\u6539\u9020\u5854\u542F\u52A8\u540E\uFF0C\u4E5F\u8BB8\u6211\u4EEC\u80FD\u770B\u89C1\u706B\u661F\u4E0A\u7684\u7B2C\u4E00\u7247\u4E91\u3002"],["\u9EC4\u4E00\u9E23","\u673A\u5668\u4EBA\u4E13\u5BB6","\u673A\u5668\u53EF\u4EE5\u66FF\u6211\u4EEC\u5E72\u6D3B\uFF0C\u4F46\u53EA\u6709\u4EBA\uFF0C\u624D\u80FD\u628A\u4E00\u4E2A\u5730\u65B9\u53D8\u6210\u5BB6\u3002"],["Samuel Okoro","\u7267\u5E08","\u65E0\u8BBA\u5728\u54EA\u9897\u661F\u7403\u4E0A\uFF0C\u6211\u4EEC\u90FD\u4F1A\u4E3A\u65B0\u751F\u7684\u5B69\u5B50\u795D\u798F\u3002"],["\u53F6\u77E5\u79CB","\u8BD7\u4EBA",'"\u6B64\u5FC3\u5B89\u5904\u662F\u543E\u4E61\u3002"\u2014\u2014\u82CF\u8F7C\u3002\u6211\u60F3\uFF0C\u4ED6\u8BF4\u5F97\u5BF9\u3002'],["Hannah Weber","\u7269\u7406\u5B66\u5BB6","\u805A\u53D8\u53CD\u5E94\u5806\u7684\u5149\uFF0C\u548C\u592A\u9633\u662F\u540C\u4E00\u79CD\u5149\u3002"],["\u5C0F\u6EE1","\u5B69\u5B50","\u53D4\u53D4\uFF0C\u5730\u7403\u662F\u4EC0\u4E48\u6837\u5B50\u7684\uFF1F"],["Diego Ram\xEDrez","\u767B\u5C71\u5BB6","\u5965\u6797\u5E15\u65AF\u5C71\u6709\u4E24\u4E07\u7C73\u9AD8\u3002\u603B\u6709\u4E00\u5929\u6211\u8981\u7AD9\u4E0A\u53BB\u3002"]],xh=0;function _x(n,t,e){let i=e?.idx??xh++,s=ca[i%ca.length],r=Ym(i);r.group.position.set(n,xt(n,t),t),h.scene.add(r.group);let o={...r,idx:i,name:s[0]+(i>=ca.length?` ${Math.floor(i/ca.length)+1}\u4E16`:""),job:s[1],line:s[2],pos:r.group.position,target:null,wait:Math.random()*3,phase:Math.random()*6,talked:0};return h.colonists.push(o),o}function Hb(n){let t=h.buildings.filter(o=>o.type!=="lamp");if(!t.length)return new T(n.pos.x+(Math.random()-.5)*10,0,n.pos.z+(Math.random()-.5)*10);let e=t;if(h.time.night>.5){let o=t.filter(l=>l.type==="plaza"&&l.powered);if(o.length&&Math.random()<.85){let l=o[n.idx%o.length],c=n.idx*2.399%(Math.PI*2),u=2.8+n.idx%3*.9;return n.atPlaza=l,new T(l.x+Math.cos(c)*u,0,l.z+Math.sin(c)*u)}let a=t.filter(l=>l.type==="habitat"||l.type==="apartment");a.length&&(e=a)}n.atPlaza=null;let i=e[Math.floor(Math.random()*e.length)],s=Math.random()*Math.PI*2,r=i.def.r+1.5+Math.random()*5;return new T(i.x+Math.cos(s)*r,0,i.z+Math.sin(s)*r)}var yl=null,ep=25;function zb(n,t){let e=tx();e.group.userData.shuttle=!0,e.group.position.set(n.x,n.y+260,n.z),h.scene.add(e.group),yl={...e,pad:n,n:t,t:0,phase:"descend"},Z.play("rumble"),h.events.emit("shuttleIncoming",t)}function Ex(n){let t=h.colony;if(h.popTotal=Math.max(h.popTotal||0,h.colonists.length),t.pop=h.popTotal,t.pop)for(h._work=(h._work||0)+n*t.pop*.04*(ke("culture")?2:1)*kf();h._work>=1;){h._work-=1;let r=Math.random()<.55?"iron":Math.random()<.6?"silicon":"ice";h.res[r]++}let e=h.buildings.filter(r=>r.type==="beacon"&&r.powered),i=t.support-t.pop;!yl&&e.length&&i>0&&!h.ended&&(ep-=n,ep<=0&&(ep=Math.max(20,50/e.length)*(ke("pr")?.55:1)/kf(),zb(e[Math.floor(Math.random()*e.length)],Math.min(i,4+(h.cityLevel||0)*2+(ke("pr")?2:0))))),yl&&Fb(n);let s=performance.now()*.001;for(let r of h.colonists){r.target||(r.wait-=n,r.wait<=0&&(r.target=Hb(r)));let o=!1;if(r.target){let u=r.target.x-r.pos.x,d=r.target.z-r.pos.z,f=Math.hypot(u,d);if(f<.6)r.target=null,r.wait=3+Math.random()*8;else{r.pos.x+=u/f*1.7*n,r.pos.z+=d/f*1.7*n;for(let g of h.colliders.query(r.pos.x,r.pos.z)){if(g.kind!=="building")continue;let v=r.pos.x-g.x,x=r.pos.z-g.z,m=Math.hypot(v,x),_=g.r+.4;m<_&&m>.01&&(r.pos.x=g.x+v/m*_,r.pos.z=g.z+x/m*_)}r.group.rotation.y=Math.atan2(u,d),o=!0}}let a=Math.hypot(h.player.pos.x-r.pos.x,h.player.pos.z-r.pos.z);a<4&&!o?r.group.rotation.y=Math.atan2(h.player.pos.x-r.pos.x,h.player.pos.z-r.pos.z):!o&&r.atPlaza&&(r.group.rotation.y=Math.atan2(r.atPlaza.x-r.pos.x,r.atPlaza.z-r.pos.z),r.wait=Math.max(r.wait,2),h.time.night<.3&&(r.wait=0)),r.pos.y=xt(r.pos.x,r.pos.z);let l=s*7+r.phase,c=o?Math.sin(l)*.6:0;r.legL.rotation.x=c,r.legR.rotation.x=-c,r.armL.rotation.x=-c*.8,r.armR.rotation.x=c*.8,!o&&a<4&&(r.armR.rotation.x=-2.6+Math.sin(s*6)*.3),r.body.position.y=.72+(o?Math.abs(Math.sin(l))*.04:0),r.talked=Math.max(0,r.talked-n)}}function Fb(n){let t=yl;t.t+=n;let e=t.pad,i=t.group;if(t.phase==="descend"){let s=Math.min(1,t.t/11),r=1-Math.pow(1-s,3);i.position.y=e.y+.6+260*(1-r),t.flame.scale.set(1,.6+(1-r)*1.2+Math.random()*.2,1);for(let o=0;o<3;o++)ut.flame(i.position);s>.85&&Math.random()<.5&&ut.dustPuff(new T(e.x,e.y,e.z),4,10),s>=1&&(t.phase="landed",t.t=0,ut.ring(new T(e.x,e.y,e.z),3,80),t.flame.visible=!1,t.flameGlow.visible=!1)}else if(t.phase==="landed"){if(t.total=t.total||t.n,t.n>0&&t.t>2+(t.total-t.n)*.6){let s;h.colonists.length<40?(s=_x(e.x+(Math.random()-.5)*2,e.z+3),s.target=new T(e.x+(Math.random()-.5)*20,0,e.z+10+Math.random()*8)):s={name:ca[xh++%ca.length][0]},t.n--,t.arrived=(t.arrived||[]).concat([s]),h.popTotal=(h.popTotal||0)+1,h.stats.arrived++}t.n<=0&&t.t>7&&(t.phase="ascend",t.t=0,t.flame.visible=!0,t.flameGlow.visible=!0,Z.play("rumble"),h.events.emit("colonistsArrived",t.arrived||[]))}else if(t.phase==="ascend"){i.position.y+=n*(5+t.t*12);for(let s=0;s<3;s++)ut.flame(i.position);t.t<1.5&&ut.dustPuff(new T(e.x,e.y,e.z),3,10),t.t>12&&(h.scene.remove(i),yl=null)}}var np=new T;function bx(n,t){let e=null,i=6;for(let s of h.colonists){np.set(s.pos.x-n.x,s.pos.y+1.1-n.y,s.pos.z-n.z);let r=np.dot(t);r<0||r>i||np.lengthSq()-r*r<.8*.8&&(i=r,e=s)}return e}function wx(){return h.colonists.map(n=>[n.idx,+n.pos.x.toFixed(1),+n.pos.z.toFixed(1)])}function Sx(n){for(let[t,e,i]of n)_x(e,i,{idx:t});xh=Math.max(xh,...n.map(t=>t[0]+1),0)}var Ob={iron:'<path d="M12 2.5l8.2 4.75v9.5L12 21.5l-8.2-4.75v-9.5z"/><path d="M12 2.5v19M3.8 7.25l16.4 9.5M20.2 7.25L3.8 16.75" opacity=".35"/>',silicon:'<path d="M12 2l7 10-7 10-7-10z"/><path d="M5 12h14M12 2v20" opacity=".35"/>',ice:'<path d="M12 2v20M3.3 7l17.4 10M20.7 7L3.3 17"/><path d="M9.5 3.5L12 6l2.5-2.5M9.5 20.5L12 18l2.5 2.5"/>',titanium:'<path d="M12 2l2.6 7.4L22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6z"/>',power:'<path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H12z"/>',pop:'<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.6 2.7-6 6-6s6 2.4 6 6"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 14.4c3 .1 5.5 2.2 5.5 5.6"/>',house:'<path d="M3 20h18M5 20V10l7-6 7 6v10"/><path d="M10 20v-5h4v5"/>',o2:'<circle cx="9" cy="12" r="5.5"/><path d="M17 15.5c0-1.4 2.6-1.6 2.6-3 0-.9-.7-1.5-1.6-1.5S16.5 11.6 16.5 12.4M16.5 18.5h3.4"/>',food:'<path d="M12 21V9"/><path d="M12 13c-4 0-6-3-6-7 4 0 6 3 6 7zM12 11c0-4 2-7 6-7 0 4-2 7-6 7z"/>',water:'<path d="M12 2.5S5.5 10 5.5 14.5a6.5 6.5 0 0013 0C18.5 10 12 2.5 12 2.5z"/>',laser:'<path d="M3 15l7-7 3 3-7 7z"/><path d="M13 11l2-2M16 8l5-5M17.5 11.5l3 .5M12.5 6.5l-.5-3"/>',rifle:'<path d="M2 10h15l3 2-3 2H9l-2 5H4l1-5H2z"/><path d="M12 10V7h3v3"/>',build:'<path d="M3 21h18M6 21V11h12v10M9 11V6h6v5"/><path d="M14 3l5 3" />',rover:'<path d="M3 15h18v-4l-3-4H8l-2 4H3z"/><circle cx="7" cy="17.5" r="2.2"/><circle cx="17" cy="17.5" r="2.2"/><path d="M10 7v4h8"/>',warn:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.01"/>',sun:'<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/>',moon:'<path d="M20 14.5A8.5 8.5 0 019.5 4a8.5 8.5 0 1010.5 10.5z"/>',meteor:'<circle cx="16" cy="16" r="4"/><path d="M13 13L3 3M15 11L8 4M11 15L4 8"/>',radio:'<path d="M5 9a9.5 9.5 0 0114 0M8 12a5 5 0 018 0"/><circle cx="12" cy="15.5" r="1.6"/><path d="M12 17v4"/>',check:'<path d="M4 12.5l5 5L20 6.5"/>',lock:'<rect x="5" y="10.5" width="14" height="10" rx="1"/><path d="M8 10.5V7a4 4 0 018 0v3.5"/>',ship:'<path d="M12 2c3 3 4 7 4 11v4H8v-4c0-4 1-8 4-11z"/><path d="M8 13l-3 4v3l3-2M16 13l3 4v3l-3-2M10 20l2 2 2-2"/>',colony:'<path d="M2 20h20"/><path d="M4 20v-5a4 4 0 018 0v5M13 20V7h7v13"/><path d="M15.5 10h2M15.5 13h2M15.5 16h2"/>',storm:'<path d="M3 8h12a3 3 0 10-3-3M3 12h16a3 3 0 11-3 3M3 16h8"/>',shield:'<path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/>',wrench:'<path d="M14.5 6.5a4 4 0 015.2 5.2L21 13l-8 8-1.3-1.3a4 4 0 01-5.2-5.2L3 11l3-3 3.5 3.5 2-2L8 6l3-3z" transform="scale(.9) translate(1.3 1.3)"/>',tank:'<rect x="7" y="5" width="10" height="16" rx="5"/><path d="M10 2h4v3h-4zM7 10h10"/>',scanner:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 12l6-6"/>',jet:'<path d="M8 3h8v11H8z"/><path d="M9 14l-1 4M15 14l1 4M10 18l2 4 2-4"/>',armor:'<path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/><path d="M8 10l4 2 4-2M12 12v6"/>',focus:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="2"/><path d="M12 1.5v5M12 17.5v5M1.5 12h5M17.5 12h5"/>',bolt2:'<path d="M7 2l-2 9h5l-2 11 9-13h-6l3-7z"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',planet:'<circle cx="12" cy="12" r="6.5"/><path d="M2.5 15.5c3 2 16 -4 19-9" />',trophy:'<path d="M7 3h10v5a5 5 0 01-10 0z"/><path d="M7 5H3c0 3 2 5 4 5M17 5h4c0 3-2 5-4 5M12 13v4M8 21h8M9 17h6"/>',book:'<path d="M4 4h6a2 2 0 012 2v14a2 2 0 00-2-2H4zM20 4h-6a2 2 0 00-2 2v14a2 2 0 012-2h6z"/>',camera:'<path d="M3 7h4l2-3h6l2 3h4v13H3z"/><circle cx="12" cy="13" r="4"/>',gear:'<circle cx="12" cy="12" r="3.2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',drone:'<rect x="9" y="10" width="6" height="4" rx="1"/><path d="M9 11L5 7M15 11l4-4M9 13l-4 4M15 13l4 4"/><circle cx="5" cy="7" r="2.2"/><circle cx="19" cy="7" r="2.2"/><circle cx="5" cy="17" r="2.2"/><circle cx="19" cy="17" r="2.2"/>',boss:'<path d="M12 2l3 6 6 1-4 5 1 7-6-3-6 3 1-7-4-5 6-1z"/><circle cx="12" cy="12" r="2"/>',key:'<circle cx="8" cy="15" r="4.5"/><path d="M11.5 12L20 3.5M17 6.5l2.5 2.5M15 8.5l2 2"/>',dome:'<path d="M3 19h18M4.5 19a7.5 7.5 0 0115 0"/><path d="M12 11.5V8M10 19v-3h4v3"/>',tower:'<path d="M6 21V5h6v16M12 21V10h6v11"/><path d="M8 8h2M8 11h2M8 14h2M14 13h2M14 16h2M3 21h18"/>',monument:'<path d="M10 21l1-16 1-2 1 2 1 16z"/><ellipse cx="12" cy="11" rx="6" ry="2"/><path d="M5 21h14"/>'};function Tx(){return`<svg xmlns="http://www.w3.org/2000/svg" style="display:none">${Object.entries(Ob).map(([n,t])=>`<symbol id="i-${n}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${t}</symbol>`).join("")}</svg>`}var he=(n,t="")=>`<svg class="ico ${t}" aria-hidden="true"><use href="#i-${n}"/></svg>`;var yh={};function Rx(n){let t=n.filter(l=>!yh[l]);if(!t.length)return yh;let e=256,i=new Do({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});i.setSize(e,e),i.setPixelRatio(1),i.toneMapping=Dr,i.toneMappingExposure=1.15;let s=new zi;s.add(new Js(14674175,3811876,1.4));let r=new Oi(16773344,2.6);r.position.set(4,8,6),s.add(r);let o=new Oi(8965375,1.4);o.position.set(-6,4,-6),s.add(o);let a=new cn(30,1,.1,500);for(let l of t){let c=new ft,u={};Bn[l](c,u);let d=[];c.traverse(_=>{(_.userData.found||_===u.flame||_===u.beam)&&d.push(_)}),d.forEach(_=>_.parent.remove(_));let f=[];c.traverse(_=>{_.isSprite&&f.push([_,_.parent])}),f.forEach(([_,E])=>E.remove(_)),s.add(c);let p=new _i().setFromObject(c,!0),g=p.getSize(new T),v=p.getCenter(new T);f.forEach(([_,E])=>E.add(_));let m=Math.max(g.x,g.y,g.z)*.62/Math.tan(Ve.degToRad(15))*1.05;a.position.set(v.x+m*.62,v.y+m*.42,v.z+m*.66),a.lookAt(v),a.updateProjectionMatrix(),i.render(s,a),yh[l]=i.domElement.toDataURL("image/png"),s.remove(c)}return i.dispose(),i.forceContextLoss(),yh}var Bb={mars:[{id:"zhurong",name:"\u795D\u878D\u53F7\u706B\u661F\u8F66",model:"rover",who:"\u6863\u6848 \xB7 \u795D\u878D\u53F7",text:"\u4E2D\u56FD\u706B\u661F\u8F66\u300C\u795D\u878D\u53F7\u300D\uFF0C2021 \u5E74\u7740\u9646\u5728\u4E4C\u6258\u90A6\u5E73\u539F\u2014\u2014\u5C31\u5728\u4F60\u811A\u4E0B\u8FD9\u7247\u571F\u5730\u3002\u5B83\u7684\u592A\u9633\u80FD\u677F\u4E0A\u79EF\u6EE1\u4E86\u516D\u5341\u591A\u5E74\u7684\u6C99\u5C18\u3002\u4EBA\u7C7B\u5728\u706B\u661F\u4E0A\u7684\u7B2C\u4E00\u884C\u8F66\u8F99\uFF0C\u5C31\u662F\u5B83\u7559\u4E0B\u7684\u3002"},{id:"opportunity",name:"\u673A\u9047\u53F7\u6B8B\u9AB8",model:"rover2",who:"\u6863\u6848 \xB7 \u673A\u9047\u53F7",text:"\u4E00\u5757\u5199\u7740\u300COpportunity\u300D\u7684\u6B8B\u7247\uFF0C\u4E0D\u77E5\u88AB\u54EA\u573A\u6C99\u5C18\u66B4\u5377\u5230\u4E86\u8FD9\u91CC\u3002\u5B83\u5728\u706B\u661F\u4E0A\u5DE5\u4F5C\u4E86\u5341\u4E94\u5E74\u3002\u5B83\u6700\u540E\u4F20\u56DE\u7684\u6570\u636E\uFF0C\u88AB\u4EBA\u4EEC\u7FFB\u8BD1\u6210\u4E00\u53E5\u8BDD\uFF1A\u300C\u6211\u7684\u7535\u91CF\u5F88\u4F4E\uFF0C\u5929\u5FEB\u9ED1\u4E86\u3002\u300D"},{id:"viking",name:"\u6D77\u76D7\u4E00\u53F7\u7740\u9646\u5668",model:"lander",who:"\u6863\u6848 \xB7 \u6D77\u76D7\u4E00\u53F7",text:"1976 \u5E74\uFF0C\u4EBA\u7C7B\u7B2C\u4E00\u4E2A\u5728\u706B\u661F\u6210\u529F\u7740\u9646\u5E76\u4F20\u56DE\u7167\u7247\u7684\u63A2\u6D4B\u5668\u3002\u7167\u7247\u4E0A\uFF0C\u5C31\u662F\u8FD9\u6837\u4E00\u7247\u7EA2\u8272\u7684\u3001\u5E03\u6EE1\u77F3\u5934\u7684\u5E73\u539F\u3002"},{id:"ingenuity",name:"\u673A\u667A\u53F7\u76F4\u5347\u673A",model:"heli",who:"\u6863\u6848 \xB7 \u673A\u667A\u53F7",text:"\u4E00\u67B6\u53EA\u6709 1.8 \u516C\u65A4\u7684\u5C0F\u76F4\u5347\u673A\u30022021 \u5E74\uFF0C\u5B83\u5B8C\u6210\u4E86\u4EBA\u7C7B\u5728\u5730\u7403\u4E4B\u5916\u7684\u7B2C\u4E00\u6B21\u52A8\u529B\u98DE\u884C\u3002\u65CB\u7FFC\u4E0A\u8FD8\u8D34\u7740\u4E00\u5C0F\u5757\u83B1\u7279\u5144\u5F1F\u98DE\u673A\u7684\u5E03\u6599\u3002"}],europa:[{id:"drill",name:"\u51B0\u5C42\u94BB\u63A2\u5668",model:"drill",who:"\u6863\u6848 \xB7 \u51B0\u7A7F\u8005\u53F7",text:"2041 \u5E74\u7684\u65E0\u4EBA\u94BB\u63A2\u5668\u300C\u51B0\u7A7F\u8005\u53F7\u300D\u3002\u5B83\u94BB\u5230\u4E86\u51B0\u4E0B\u4E09\u516C\u91CC\uFF0C\u5728\u6700\u540E\u4E00\u5E27\u753B\u9762\u91CC\uFF0C\u955C\u5934\u524D\u4F3C\u4E4E\u6709\u4EC0\u4E48\u4E1C\u897F\u5728\u53D1\u5149\u2026\u2026\u7136\u540E\u4FE1\u53F7\u4E2D\u65AD\u4E86\u3002"},{id:"hydro",name:"\u65E0\u4EBA\u6C34\u542C\u7AD9",model:"probe",who:"\u6863\u6848 \xB7 \u6C34\u542C\u7AD9",text:"\u4E00\u53F0\u8FD8\u5728\u8FD0\u8F6C\u7684\u6C34\u542C\u5668\u3002\u5B83\u5F55\u5230\u4E86\u51B0\u4E0B\u6D77\u6D0B\u91CC\u67D0\u79CD\u6709\u8282\u594F\u7684\u4F4E\u9891\u58F0\u97F3\uFF0C\u5468\u671F\u662F 17 \u5206\u949F\u3002\u6CA1\u6709\u4EBA\u77E5\u9053\u90A3\u662F\u4EC0\u4E48\u3002"},{id:"galileo",name:"\u523B\u5B57\u7684\u91D1\u5C5E\u7247",model:"plate",who:"\u6863\u6848 \xB7 \u65E0\u540D",text:"\u51B0\u91CC\u51BB\u7740\u4E00\u5757\u91D1\u5C5E\u7247\uFF0C\u4E0A\u9762\u523B\u7740\u4E00\u4E2A\u65E5\u671F\uFF1A1610 \u5E74 1 \u6708 7 \u65E5\u3002\u90A3\u662F\u4F3D\u5229\u7565\u7B2C\u4E00\u6B21\u770B\u89C1\u6728\u661F\u536B\u661F\u7684\u591C\u665A\u3002\u662F\u8C01\u628A\u5B83\u5E26\u5230\u8FD9\u91CC\u7684\uFF1F"}],kepler:[{id:"monolith",name:"\u6676\u4F53\u65B9\u7891",model:"monolith",who:"\u6863\u6848 \xB7 \u672A\u77E5",text:"\u8FD9\u4E0D\u662F\u4EBA\u7C7B\u9020\u7684\u3002\u65B9\u7891\u8868\u9762\u7684\u7EB9\u8DEF\u5728\u4F60\u9760\u8FD1\u65F6\u4E00\u5708\u5708\u4EAE\u8D77\uFF0C\u50CF\u662F\u5728\u8FA8\u8BA4\u4F60\u3002\u5B83\u7684\u5E74\u9F84\u5927\u7EA6\u662F\u56DB\u5343\u4E07\u5E74\u3002"},{id:"pathfinder",name:"\u65B9\u821F\u63A2\u8DEF\u5668",model:"probe",who:"\u6863\u6848 \xB7 \u63A2\u8DEF\u8005",text:"\u4E09\u767E\u5E74\u524D\u5148\u884C\u51FA\u53D1\u7684\u65E0\u4EBA\u63A2\u8DEF\u5668\u3002\u5B83\u7684\u6700\u540E\u4E00\u6761\u65E5\u5FD7\u5199\u7740\uFF1A\u300C\u5DF2\u627E\u5230\u9002\u5B9C\u7740\u9646\u70B9\u3002\u6211\u4F1A\u5728\u8FD9\u91CC\u7B49\u4F60\u4EEC\u3002\u300D\u5B83\u7B49\u4E86\u4E00\u767E\u4E00\u5341\u4E8C\u5E74\u3002"},{id:"fossil",name:"\u5DE8\u578B\u5316\u77F3",model:"fossil",who:"\u6863\u6848 \xB7 \u5316\u77F3",text:"\u4E00\u526F\u5DE8\u5927\u7684\u9AA8\u67B6\uFF0C\u5F27\u5F62\u7684\u808B\u9AA8\u50CF\u62F1\u95E8\u4E00\u6837\u7ACB\u5728\u5730\u4E0A\u3002\u751F\u524D\uFF0C\u5B83\u53EF\u80FD\u50CF\u90A3\u4E9B\u53D1\u5149\u7684\u6C34\u6BCD\u4E00\u6837\uFF0C\u6F02\u6D6E\u5728\u8FD9\u7247\u5929\u7A7A\u91CC\u3002"}]},qr=[],di=new pt({color:8022620,roughness:.9,metalness:.3}),ip=new pt({color:13148240,roughness:.4,metalness:.8}),sp=new pt({color:15260872,roughness:.8,flatShading:!0}),Gb=new pt({color:1314844,roughness:.15,metalness:.9,emissive:6308095,emissiveIntensity:.15});function Le(n,t,e,i,s,r,o=0,a=0,l=0){let c=new lt(n,t);return c.position.set(e,i,s),c.rotation.set(o,a,l),c.castShadow=!0,c.receiveShadow=!0,r.add(c),c}var Vb={rover(n){Le(new Gt(1.6,.5,2.2),di,0,.9,0,n,0,0,.08);for(let t of[-1,1])Le(new Gt(1.4,.05,1.6),y.solar,t*1.4,1.1,0,n,0,0,t*.25);Le(new Wt(.05,.05,1.2,6),di,.4,1.7,-.7,n),Le(new Gt(.3,.2,.25),di,.4,2.35,-.7,n,0,0,.3);for(let t of[-.9,0,.9])for(let e of[-1,1])Le(new Wt(.28,.28,.22,10),y.dark,e*.95,.3,t,n,0,0,Math.PI/2)},rover2(n){Le(new Gt(1.4,.45,1.8),di,0,.5,0,n,.25,.4,.4),Le(new Gt(1.2,.05,1.1),y.solar,.9,.35,.3,n,.1,0,-.6),Le(new Wt(.28,.28,.22,10),y.dark,-1.2,.25,.8,n,.4,0,1.2)},lander(n){Le(new Wt(1,1.1,.6,6),ip,0,1,0,n);for(let t=0;t<3;t++){let e=t*Math.PI*2/3;Le(new Wt(.06,.06,1.4,5),di,Math.cos(e)*1.1,.5,Math.sin(e)*1.1,n,Math.sin(e)*.4,0,-Math.cos(e)*.4)}Le(new Wt(.6,.6,.05,16),y.white,0,1.6,.3,n,.6,0,0),Le(new Gt(.2,.9,.2),di,-.5,1.7,-.3,n)},heli(n){Le(new Gt(.25,.2,.25),ip,0,.45,0,n),Le(new Wt(.02,.02,.5,4),di,0,.75,0,n),Le(new Gt(1.2,.02,.08),di,0,.9,0,n,0,.5,0),Le(new Gt(1.2,.02,.08),di,0,.98,0,n,0,-.4,0);for(let t=0;t<4;t++){let e=t*Math.PI/2+.6;Le(new Wt(.015,.015,.5,4),di,Math.cos(e)*.2,.2,Math.sin(e)*.2,n,Math.sin(e)*.5,0,-Math.cos(e)*.5)}n.scale.setScalar(2.2)},drill(n){Le(new Wt(.5,.7,1.4,8),di,0,.7,0,n),Le(new Wt(.15,.15,4,8),y.metal,0,2.6,0,n,.15,0,0);for(let t=0;t<3;t++){let e=t*Math.PI*2/3;Le(new Gt(.15,3,.15),di,Math.cos(e)*.9,1.4,Math.sin(e)*.9,n,Math.sin(e)*.25,0,-Math.cos(e)*.25)}},probe(n){Le(new Bt(.8,12,8),y.white,0,.9,0,n),Le(new Dt(.85,.08,6,20),y.orange,0,.9,0,n,Math.PI/2,0,0),Le(new Wt(.03,.03,1.6,4),y.metal,0,2.2,0,n),Le(new Fe(.5,.3,12,1,!0),y.white,0,3,0,n,Math.PI,0,0)},plate(n){Le(new Gt(1.2,.8,.06),ip,0,.5,0,n,-.5,0,.1),Le(new oi(.9,0),new pt({color:13627135,transparent:!0,opacity:.6,roughness:.05}),0,.4,0,n)},monolith(n){Le(new Gt(1.4,7,.5),Gb,0,3.5,0,n,0,0,.04),n.userData.rings=[];for(let t=0;t<3;t++){let e=Le(new Dt(1.4+t*.4,.04,6,32),new Yt({color:9075455,transparent:!0,opacity:.6}),0,2+t*1.6,0,n,Math.PI/2,0,0);n.userData.rings.push(e)}},fossil(n){for(let t=0;t<9;t++){let e=Le(new Dt(3-Math.abs(t-4)*.35,.18,6,16,Math.PI),sp,0,0,-6+t*1.5,n);e.rotation.y=0}Le(new Wt(.25,.15,14,6),sp,0,3,0,n,Math.PI/2,0,0),Le(new oi(1.4,0),sp,0,2.6,-8,n)}};function Ax(){let n=Kn(ne.length*977+5),t=Bb[ne]||[];t.forEach((e,i)=>{let s=0,r=0;for(let l=0;l<200;l++){let c=i/t.length*Math.PI*2+n()*1.2,u=160+n()*220;if(s=Math.cos(c)*u,r=Math.sin(c)*u,Math.abs(s)<Zt-180&&Math.abs(r)<Zt-180&&Nr(s,r,3)<.35&&!h.colliders.overlaps(s,r,6))break}let o=new ft;Vb[e.model](o),o.position.set(s,xt(s,r)-.15,r),o.rotation.y=n()*6.28;let a=Mt(16765578,3,h.scene,s,xt(s,r)+4,r);h.scene.add(o),h.colliders.add({x:s,z:r,r:e.model==="fossil"?3:1.4,kind:"relic"}),qr.push({...e,x:s,z:r,g:o,beacon:a,found:(h.relicsFound||[]).includes(e.id)})})}function Cx(n){let t=null,e=1e9;for(let i of qr){if(i.found)continue;let s=Math.hypot(i.x-n.x,i.z-n.z);s<e&&(e=s,t=i)}return t?{r:t,d:e}:null}function Px(n){return qr.find(t=>!t.found&&Math.hypot(t.x-n.x,t.z-n.z)<6)}function Ji(){return{found:qr.filter(n=>n.found).length,total:qr.length}}function rp(){return qr}function Ix(n){n.found=!0,h.relicsFound=[...new Set([...h.relicsFound||[],n.id])],Ie(n.who,n.text),h.res.titanium+=8,h.res.silicon+=15,h.events.emit("pickup",{type:"titanium",n:8,note:n.name}),h.events.emit("toast",`\u2713 \u53D1\u73B0\u9057\u8FF9\uFF1A${n.name}`),Z.play("objective"),ut.burst(new T(n.x,xt(n.x,n.z)+2,n.z),[1,.85,.5],60,8)}function Lx(n){let t=performance.now()*.001;for(let e of qr)e.beacon.visible=!e.found,e.beacon.material.opacity=.5+Math.sin(t*2+e.x)*.3,e.g.userData.rings&&e.g.userData.rings.forEach((i,s)=>{i.rotation.z=t*(.3+s*.2),i.material.opacity=(e.found?.8:.3)+Math.sin(t*2+s)*.2})}var vh=[],hp=new Fe(1,1,8,1,!0);hp.rotateX(Math.PI);hp.translate(0,-.5,0);var Wb=new T(0,1,0),lp=0,op=0,Mh=0,cp=0,Dx=-1;function $b(){lp=45,cp=0,Mh=6,Ie("\u65B9\u821F \xB7 AI","\u770B\u5929\u4E0A\u2014\u2014\u6D41\u661F\u96E8\uFF01\u6709\u51E0\u9897\u4F1A\u843D\u5230\u9644\u8FD1\u3002\u9668\u77F3\u91CC\u5BCC\u542B\u949B\uFF0C\u53BB\u5760\u843D\u70B9\u770B\u770B\u3002"),h.events.emit("toast","\u2604 \u6D41\u661F\u96E8")}function Ux(n){let t=h.player.pos,e;if(n){for(let u=0;u<20;u++){let d=Math.random()*Math.PI*2,f=40+Math.random()*110,p=Ve.clamp(t.x+Math.cos(d)*f,-Zt+180,Zt-180),g=Ve.clamp(t.z+Math.sin(d)*f,-Zt+180,Zt-180);if(!h.buildings.some(v=>Math.hypot(v.x-p,v.z-g)<v.def.r+14)){e=new T(p,xt(p,g),g);break}}if(!e)return}else{let u=Math.random()*Math.PI*2,d=150+Math.random()*350;e=new T(t.x+Math.cos(u)*d,t.y+110+Math.random()*140,t.z+Math.sin(u)*d)}let i=new T((Math.random()-.5)*1.2,-.55-Math.random()*.3,(Math.random()-.5)*1.2).normalize(),s=n?520:420,r=e.clone().addScaledVector(i,-s),o=Mt(n?16756848:16769216,n?18:10,h.scene);o.material.fog=!1,o.position.copy(r);let a=new lt(hp,new Yt({color:n?16751184:16767144,transparent:!0,opacity:.75,blending:fe,depthWrite:!1,fog:!1})),l=n?90:70+Math.random()*70,c=n?2.2:1.3;a.scale.set(c,l,c),a.quaternion.setFromUnitVectors(Wb,i),a.position.copy(r),h.scene.add(a),vh.push({pos:r,vel:i.multiplyScalar(n?150:220),head:o,tail:a,impact:n,target:e,life:s/(n?150:220)})}function Nx(n){Yb(n),h.time.night>.7&&Dx!==h.time.day&&h.time.day>=2&&h.storm<.1&&!h.ended&&(Dx=h.time.day,Math.random()<.4&&$b()),lp>0&&(lp-=n,op-=n,Mh-=n,op<=0&&(op=.15+Math.random()*.35,Ux(!1)),Mh<=0&&cp<4&&(Mh=7+Math.random()*5,cp++,Ux(!0)));for(let e=vh.length-1;e>=0;e--){let i=vh[e];i.life-=n,i.pos.addScaledVector(i.vel,n),i.head.position.copy(i.pos),i.tail.position.copy(i.pos);for(let s=0;s<3;s++)ut.trail(i.pos.clone().addScaledVector(i.vel,-n*s/3),i.impact?[1,.6,.3]:[1,.85,.6],i.impact?1.2:.7);i.life<=0&&(h.scene.remove(i.head),h.scene.remove(i.tail),i.tail.material.dispose(),vh.splice(e,1),i.impact&&Xb(i.target))}}function Xb(n){let t=n.clone();t.y+=1.5,ut.burst(t,[1,.55,.2],120,22),ut.ring(n,2,90),ut.dustPuff(t,40,8),Z.play("rumble"),Z.play("kill");let e=n.distanceTo(h.player.pos);if(e<80&&(h.player.landDip=Math.max(h.player.landDip,.4*(1-e/80))),!h.colliders.overlaps(n.x,n.z,2.5)){let i=qo("titanium",n.x,n.z,10+Math.floor(Math.random()*8));i.meteor=!0}h.events.emit("toast",`\u2604 \u9668\u77F3\u5760\u843D\u5728 ${Math.round(e)} \u7C73\u5916`)}var Rs=[],ap=150;function qb(){let n=new ft,t=(s,r,o)=>{let a=new lt(s,r);return a.position.y=o,a.castShadow=!0,n.add(a),a};t(new Wt(.9,1.2,1.8,20),y.white,1.2),t(new Wt(.92,.92,.25,20),y.orange,1.6),t(new Fe(.9,.9,20),y.white,2.55),t(new Wt(1.25,1.1,.3,20),y.dark,.2);for(let s=0;s<4;s++){let r=new lt(new Wt(.05,.05,1.1,6),y.metal),o=s*Math.PI/2;r.position.set(Math.cos(o)*1.1,.25,Math.sin(o)*1.1),r.rotation.set(Math.sin(o)*.6,0,-Math.cos(o)*.6),n.add(r)}let e=Mt(6750105,2.4,n,0,3.4,0),i=new lt(new Fe(.8,4,12,1,!0),y.flame);return i.rotation.x=Math.PI,i.position.y=-1.8,n.add(i),{g:n,beacon:e,flame:i}}function up(n=!0){let t=h.player.pos,e=0,i=0;for(let a=0;a<30;a++){let l=Math.random()*Math.PI*2,c=50+Math.random()*130;if(e=Ve.clamp(t.x+Math.cos(l)*c,-Zt+180,Zt-180),i=Ve.clamp(t.z+Math.sin(l)*c,-Zt+180,Zt-180),!h.colliders.overlaps(e,i,4))break}let s=qb(),r=xt(e,i);s.g.position.set(e,r+320,i),h.scene.add(s.g);let o={...s,x:e,z:i,y:r,t:0,landed:!1,life:300};return Rs.push(o),Z.play("rumble"),h.events.emit("toast",`\u5730\u7403\u8865\u7ED9\u8231\u6B63\u5728\u964D\u843D \xB7 ${Math.round(Math.hypot(e-t.x,i-t.z))} \u7C73\u5916`),o}function Yb(n){h.buildings.length&&!h.ended&&h.time.night<.5&&(ap-=n,ap<=0&&(ap=240+Math.random()*180,up()));let t=performance.now()*.001;for(let e=Rs.length-1;e>=0;e--){let i=Rs[e];if(i.landed)i.life-=n,i.beacon.material.opacity=.55+Math.sin(t*4)*.4,i.life<=0&&(h.scene.remove(i.g),Rs.splice(e,1));else{i.t+=n;let s=Math.min(1,i.t/8),r=1-Math.pow(1-s,2.4);i.g.position.y=i.y+320*(1-r),i.flame.scale.y=.6+(1-r)+Math.random()*.2;for(let o=0;o<2;o++)ut.flame(i.g.position);s>=1&&(i.landed=!0,i.flame.visible=!1,ut.ring(new T(i.x,i.y,i.z),2,70),Z.play("land"))}}}function kx(n){return Rs.find(t=>t.landed&&Math.hypot(t.x-n.x,t.z-n.z)<3.5)}function Hx(n){let t=null,e=1e9;for(let i of Rs){let s=Math.hypot(i.x-n.x,i.z-n.z);s<e&&(e=s,t=i)}return t?{p:t,d:e}:null}function dp(){return Rs}function zx(n){let t=1+(h.cityLevel||0)*.4,e={iron:Math.round((20+Math.random()*20)*t),silicon:Math.round((15+Math.random()*15)*t),ice:Math.round((10+Math.random()*15)*t)};Math.random()<.6&&(e.titanium=Math.round((3+Math.random()*5)*t));for(let r in e)h.res[r]+=e[r],h.events.emit("pickup",{type:r,n:e[r],note:"\u8865\u7ED9\u8231"});let i=Math.round(10*t);h.rp=(h.rp||0)+i,h.stats.pods=(h.stats.pods||0)+1;let s=["\u5305\u88F9\u91CC\u5939\u7740\u4E00\u5F20\u5B69\u5B50\u753B\u7684\u753B\uFF1A\u4E00\u5EA7\u7EA2\u8272\u661F\u7403\uFF0C\u4E0A\u9762\u6709\u5F88\u591A\u5C0F\u623F\u5B50\u3002","\u9644\u8A00\uFF1A\u300C\u5730\u7403\u8FD9\u8FB9\u4E00\u5207\u90FD\u597D\u3002\u7167\u987E\u597D\u81EA\u5DF1\u3002\u300D","\u7BB1\u5B50\u5E95\u90E8\u6709\u4E00\u5305\u79CD\u5B50\uFF0C\u6807\u7B7E\u4E0A\u5199\u7740\uFF1A\u5411\u65E5\u8475\u3002","\u4E00\u5C01\u624B\u5199\u4FE1\uFF1A\u300C\u6211\u513F\u5B50\u5728\u4F60\u4EEC\u7684\u6B96\u6C11\u5730\u3002\u8BF7\u66FF\u6211\u544A\u8BC9\u4ED6\uFF0C\u5988\u5988\u4E3A\u4ED6\u9A84\u50B2\u3002\u300D","\u8865\u7ED9\u6E05\u5355\u6700\u540E\u4E00\u884C\uFF1A\u300C\u5DE7\u514B\u529B \xD72\u2014\u2014\u7ED9\u7B2C\u4E00\u4E2A\u62C6\u7BB1\u7684\u4EBA\u3002\u300D"];Ie("\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u8865\u7ED9",s[Math.floor(Math.random()*s.length)]+` \u9644\u5E26\u79D1\u7814\u6570\u636E ${i} \u70B9\u3002`),Z.play("craft"),ut.burst(new T(n.x,n.y+1.5,n.z),[.5,1,.7],50,6),h.scene.remove(n.g),Rs.splice(Rs.indexOf(n),1)}var Tt=n=>document.getElementById(n),wh,xp,mt,Yr={},yp={mars:"MARS",europa:"EUROPA",kepler:"KEPLER-442b"},Zb=["I","II","III","IV","V","VI"];function qx(n){wh=n,document.body.insertAdjacentHTML("afterbegin",Tx()),xp=Tt("minimap"),mt=xp.getContext("2d"),Tt("pl-cn").textContent=ht.name,Tt("kick-planet").textContent=yp[ne],Tt("hotbar").innerHTML=fr.map((t,e)=>`<div class="slot" data-i="${e}"><span class="key">${e+1}</span><span class="ic">${he(t.icon)}</span><span class="nm">${t.name}</span></div>`).join(""),Tt("res").innerHTML=Object.entries(un).map(([t,e])=>`<div class="r" id="r-${t}" style="--rc:${e.color}"><span class="ic">${he(t)}</span><span class="tx"><small>${e.name}</small><b>0</b></span></div>`).join(""),h.events.on("toast",t=>je(t)),h.events.on("pickup",t=>Jb(t)),document.querySelectorAll("[data-close]").forEach(t=>t.addEventListener("click",()=>{Z.play("ui"),Pn(!0)})),document.querySelectorAll(".menu button, .bp-tabs button").forEach(t=>t.addEventListener("mouseenter",()=>Z.play("tick")))}var Fx={"\u2713":["check","good"],"\u26A0":["warn","warn"],"\u{1F527}":["wrench",""],"\u2600":["sun",""],"\u2604":["meteor",""],"\u{1F680}":["ship",""]};function je(n,t="radio",e=""){let i=[...n][0];if(Fx[i]&&([t,e]=Fx[i],n=n.slice(i.length).trim()),e==="warn"||t==="boss")return Kb(n,t,e);let s=Tt("log"),r=[...s.children].find(a=>a.dataset.t===n&&!a.classList.contains("out"));if(r){let a=(+r.dataset.n||1)+1;r.dataset.n=a,r.querySelector("em").textContent="\xD7"+a,clearTimeout(r._to),r._to=setTimeout(()=>vp(r),5e3);return}let o=document.createElement("div");for(o.className="ev "+e,o.dataset.t=n,o.innerHTML=`${he(t)}<span>${n}</span><em></em>`,s.appendChild(o);s.children.length>3;)s.firstChild.remove();o._to=setTimeout(()=>vp(o),5e3)}function vp(n){n.classList.add("out"),setTimeout(()=>n.remove(),600)}var Ox,Bx=0,Gx=0;function Kb(n,t,e){let i=t==="boss"?2:1,s=performance.now();if(i<Bx&&s<Gx){let o=Tt("log"),a=document.createElement("div");for(a.className="ev warn",a.innerHTML=`${he(t==="radio"?"warn":t)}<span>${n}</span><em></em>`,o.appendChild(a);o.children.length>3;)o.firstChild.remove();setTimeout(()=>vp(a),5e3);return}Bx=i,Gx=s+4500;let r=Tt("alert");r.className="show "+(e==="good"?"good":""),r.innerHTML=`${he(t==="radio"?"warn":t)}<span>${n}</span>`,Z.play("alarm"),clearTimeout(Ox),Ox=setTimeout(()=>{r.className=""},4500)}var fp={};function Jb({type:n,n:t,note:e}){Z.play("pickup");let i=fp[n];i&&i.el.isConnected?(i.n+=t,clearTimeout(i.to)):(i=fp[n]={n:t,el:document.createElement("div")},i.el.className="feed",Tt("feed").appendChild(i.el));let s=un[n];i.el.style.setProperty("--rc",s.color),i.el.innerHTML=`<span class="nm">${e||s.name}</span>${he(n)}<span class="q">+${i.n}</span>`,i.el.classList.remove("out"),i.to=setTimeout(()=>{i.el.classList.add("out"),setTimeout(()=>{i.el.remove(),delete fp[n]},500)},1800);let r=Tt("r-"+n);r.classList.remove("flash"),r.offsetWidth,r.classList.add("flash")}var _h=[],pp=!1;function Zr(n){if(pp){_h.length=0,_h.push(n);return}pp=!0,setTimeout(()=>{pp=!1,_h.length&&Zr(_h.shift())},5200);let t=Tt("chapter"),e=ui.indexOf(n),i=n.k||(e>=0?`CHAPTER ${String(e+1).padStart(2,"0")}`:""),s=n.title.replace(/^第.章 · |^终章 · /,"");t.innerHTML=`<div class="k">${i}</div><div class="t">${s}</div><div class="ln"></div><div class="s">${n.sub}</div>`,t.classList.remove("show"),t.offsetWidth,t.classList.add("show")}var jb=["build","craft","pause","starmap","archive","research","trade","mapscr"];function Qi(n){if(Pn(!1),h.menuOpen=n,Tt(n).classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),Z.play("open"),n==="build"){if(!Yr.solar)try{Yr=Rx(Bf.filter(t=>!Ki(t).hide))}catch{Yr={}}_p()}n==="craft"&&Tp(),n==="research"&&bh(),n==="trade"&&vl(),n==="mapscr"&&bp(),n==="archive"&&(Tt("archive-body").innerHTML=Rp()),n==="pause"&&(Tt("pause-pane").innerHTML="")}function Pn(n){jb.forEach(e=>Tt(e).classList.add("hidden"));let t=h.menuOpen;h.menuOpen=!1,t==="build"&&!be.type&&(an.index=0),n&&h.requestLock()}function wp(n){Tt("pause-pane").innerHTML=n}var Mp={all:"\u5168\u90E8",life:"\u751F\u5B58",city:"\u57CE\u5E02",industry:"\u5DE5\u4E1A",defense:"\u9632\u5FA1",stellar:"\u661F\u9645"},Eh="all",mr=null;function Yx(n){Tt(n).innerHTML=Object.entries(un).map(([t,e])=>`<span style="--rc:${e.color}">${he(t)}${h.res[t]}</span>`).join("")}function Zx(n){return`<div class="need">${Object.entries(n).map(([t,e])=>`<div class="row ${h.res[t]>=e?"":"lack"}" style="--rc:${un[t].color}">${he(t)}<span class="nm">${un[t].name}</span>${Math.floor(h.res[t])} / ${e}</div>`).join("")}</div>`}function _p(){Yx("bp-res");let n=Bf.filter(i=>!Ki(i).hide),t=["all",...Object.keys(Mp).filter(i=>i!=="all"&&n.some(s=>Cn[s].cat===i))];Tt("bp-tabs").innerHTML=t.map(i=>`<button data-c="${i}" class="${i===Eh?"on":""}">${Mp[i]}</button>`).join(""),Tt("bp-tabs").querySelectorAll("button").forEach(i=>i.addEventListener("click",()=>{Eh=i.dataset.c,Z.play("tick"),_p()}));let e=n.filter(i=>Eh==="all"||Cn[i].cat===Eh);(!mr||!e.includes(mr))&&(mr=e.find(i=>Ki(i).ok)||e[0]),Tt("build-list").innerHTML=e.map(i=>{let s=Cn[i],r=Ki(i),o=Si(s.cost);return`<div class="tile ${r.ok?"":"locked"} ${o?"":"poor"} ${i===mr?"sel":""}" data-k="${i}">
      <div class="th">${Yr[i]?`<img src="${Yr[i]}" alt="">`:he(s.icon)}</div>
      ${r.ok?"":`<div class="lk">${he("lock")}</div>`}
      <div class="nm">${s.name}</div><div class="cs">${r.ok?Bo(s.cost):""}</div></div>`}).join(""),Tt("build-list").querySelectorAll(".tile").forEach(i=>{i.addEventListener("click",()=>{mr=i.dataset.k,Z.play("tick"),_p()}),i.addEventListener("dblclick",()=>Sp(i.dataset.k))}),tw()}function Qb(n){let t=Cn[n],e=Ki(n);return ne==="mars"&&t.chapter>h.chapter?`\u5728\u300C${ui[t.chapter].title}\u300D\u89E3\u9501`:e.why}function tw(){let n=mr;if(!n){Tt("bp-detail").innerHTML="";return}let t=Cn[n],e=Ki(n),i=Si(t.cost),s=[];t.power&&s.push(["\u7535\u529B",`${t.power>0?"+":""}${t.power}`,t.power>0?"pos":"neg"]),t.housing&&s.push(["\u4F4F\u623F",`${t.housing} \u4EBA`]),t.o2&&s.push(["\u4F9B\u6C27",`${t.o2} \u4EBA`]),t.food&&s.push(["\u98DF\u7269",`${t.food} \u4EBA`]),t.water&&s.push(["\u7528\u6C34",`${t.water} \u4EBA`]),t.life&&s.push(["\u8865\u6C27\u534A\u5F84",`${t.life} m`]),t.range&&s.push(["\u5C04\u7A0B",`${t.range} m`]),s.push(["\u8010\u4E45",t.hp]),Tt("bp-detail").innerHTML=`<div class="pv">${Yr[n]?`<img src="${Yr[n]}" alt="">`:he(t.icon)}</div>
    <div class="cat">${Mp[t.cat]||""} \xB7 BLUEPRINT</div><h3>${t.name}</h3>
    <div class="ds">${t.desc}</div>
    <div class="stats">${s.map(r=>`<div><small>${r[0]}</small><b class="${r[2]||""}">${r[1]}</b></div>`).join("")}</div>
    ${e.ok?Zx(t.cost):`<div class="why">${he("lock")} ${Qb(n)}</div>`}
    <button class="go" ${e.ok?"":"disabled"}>${e.ok?i?"\u5F00\u59CB\u5EFA\u9020":"\u653E\u7F6E\u84DD\u56FE\uFF08\u8D44\u6E90\u4E0D\u8DB3\uFF09":"\u5C1A\u672A\u89E3\u9501"}</button>`,Tt("bp-detail").querySelector(".go").addEventListener("click",()=>Sp(n))}function Sp(n){let t=Cn[n];if(!Ki(n).ok){Z.play("deny");return}Z.play("ui"),be.rot=0,Br(n),an.index=2,Pn(!0),Si(t.cost)||je("\u8D44\u6E90\u4E0D\u8DB3\uFF0C\u653E\u7F6E\u524D\u5148\u53BB\u91C7\u96C6\u5427","warn","warn")}function Kx(n){h.menuOpen==="build"&&n.code==="Enter"&&mr&&Sp(mr),h.menuOpen==="craft"&&n.code==="Enter"&&ji&&Ep(ji)}var ji=null;function Tp(){Yx("cr-res");let n=Object.keys(na);ji||(ji=n.find(s=>!h.upgrades[s])||n[0]),Tt("craft-list").innerHTML=n.map(s=>{let r=na[s],o=h.upgrades[s],a=Si(r.cost),l=r.need&&!h.upgrades[r.need];return`<div class="tile ${o?"done":""} ${a&&!l?"":"poor"} ${s===ji?"sel":""}" data-k="${s}">
      ${o?'<span class="tag">\u5DF2\u88C5\u5907</span>':""}
      <div class="th">${he(r.icon)}</div><div class="nm">${r.name}</div><div class="cs">${o?"":Bo(r.cost)}</div></div>`}).join(""),Tt("craft-list").querySelectorAll(".tile").forEach(s=>{s.addEventListener("click",()=>{ji=s.dataset.k,Z.play("tick"),Tp()}),s.addEventListener("dblclick",()=>Ep(s.dataset.k))});let t=na[ji],e=h.upgrades[ji],i=t.need&&!h.upgrades[t.need];Tt("craft-detail").innerHTML=`<div class="pv">${he(t.icon)}</div><div class="cat">EQUIPMENT</div><h3>${t.name}</h3>
    <div class="ds">${t.desc}</div>
    ${e?'<div class="why okc">\u5DF2\u5236\u9020\u5E76\u88C5\u5907</div>':i?`<div class="why">${he("lock")} \u9700\u8981\u5148\u5236\u9020\u7B49\u79BB\u5B50\u6B65\u67AA</div>`:Zx(t.cost)}
    <button class="go" ${e||i||!Si(t.cost)?"disabled":""}>${e?"\u5DF2\u88C5\u5907":Si(t.cost)?"\u5236\u9020":"\u8D44\u6E90\u4E0D\u8DB3"}</button>`,Tt("craft-detail").querySelector(".go").addEventListener("click",()=>Ep(ji))}function Ep(n){let t=na[n];if(h.upgrades[n]||t.need&&!h.upgrades[t.need]||!Si(t.cost)){Z.play("deny");return}qa(t.cost),h.upgrades[n]=!0,h.stats.crafted[n]=!0,Z.play("craft"),je(`\u5236\u9020\u5B8C\u6210\uFF1A${t.name}`,t.icon,"good"),n==="tank"&&(h.player.o2=180),n==="rifle"&&(an.index=1),h.events.emit("crafted",n),ji=Object.keys(na).find(e=>!h.upgrades[e])||n,Tp()}var da={unlocked:()=>!0,relicLeft:()=>!1,relicFound:()=>0},As=null;function bh(){Tt("rs-res").innerHTML=`<span style="--rc:var(--cyan)">${he("book")}${Math.floor(h.rp||0)} \u79D1\u7814\u70B9</span><span style="--rc:var(--dim)"><small>+${sh().toFixed(2)}/\u79D2</small></span>`;let n=Object.keys(Jo);As||(As=n.find(r=>!ke(r))||n[0]),Tt("research-list").innerHTML=n.map(r=>{let o=Jo[r],a=ke(r),l=(h.rp||0)>=o.cost;return`<div class="tile ${a?"done":""} ${l||a?"":"poor"} ${r===As?"sel":""}" data-k="${r}">${a?'<span class="tag">\u5DF2\u5B8C\u6210</span>':""}
      <div class="th">${he(o.icon)}</div><div class="nm">${o.name}</div><div class="cs"><span class="cost ${l?"":"lack"}" style="--rc:var(--cyan)">${he("book")}${o.cost}</span> <small>${o.cat}</small></div></div>`}).join(""),Tt("research-list").querySelectorAll(".tile").forEach(r=>{r.addEventListener("click",()=>{As=r.dataset.k,Z.play("tick"),bh()}),r.addEventListener("dblclick",()=>{Uf(r.dataset.k)&&bh()})});let t=Jo[As],e=ke(As),i=(h.rp||0)>=t.cost,s=h.buildings.some(r=>r.type==="lab");Tt("research-detail").innerHTML=`<div class="pv">${he(t.icon)}</div><div class="cat">${t.cat} \xB7 TECHNOLOGY</div><h3>${t.name}</h3>
    <div class="ds">${t.desc}</div>
    ${s?"":'<div class="why">\u5EFA\u9020\u7814\u7A76\u6240\u6765\u4EA7\u51FA\u79D1\u7814\u70B9\u6570</div>'}
    <div class="need"><div class="row ${i||e?"":"lack"}" style="--rc:var(--cyan)">${he("book")}<span class="nm">\u79D1\u7814\u70B9\u6570</span>${Math.floor(h.rp||0)} / ${t.cost}</div></div>
    <button class="go" ${e||!i?"disabled":""}>${e?"\u5DF2\u5B8C\u6210":i?"\u5F00\u59CB\u7814\u7A76":"\u79D1\u7814\u70B9\u6570\u4E0D\u8DB3"}</button>`,Tt("research-detail").querySelector(".go").addEventListener("click",()=>{Uf(As)&&(As=Object.keys(Jo).find(r=>!ke(r))||As,bh())})}var Vx=!1;function bp(){let n=Tt("bigmap"),t=n.getContext("2d"),e=n.width,i=h.player,s=e/en,r=u=>(u+en/2)*s,o=u=>(u+en/2)*s;Tt("map-title").textContent=`${ht.name} \xB7 ${ht.place}`,t.clearRect(0,0,e,e),t.globalAlpha=.9,t.drawImage(wh,0,0,e,e),t.globalAlpha=1,t.strokeStyle="rgba(142,231,255,.08)",t.lineWidth=1;for(let u=0;u<=e;u+=e/14)t.beginPath(),t.moveTo(u,0),t.lineTo(u,e),t.stroke(),t.beginPath(),t.moveTo(0,u),t.lineTo(e,u),t.stroke();t.strokeStyle="rgba(142,231,255,.7)",t.setLineDash([6,6]),t.lineWidth=1.5,t.beginPath(),t.arc(r(jn.x),o(jn.z),An[h.cityLevel].r*s,0,Math.PI*2),t.stroke(),t.setLineDash([]);let a=(u,d,f,p)=>{t.fillStyle=p,t.beginPath(),t.moveTo(r(u),o(d)-f),t.lineTo(r(u)+f,o(d)),t.lineTo(r(u),o(d)+f),t.lineTo(r(u)-f,o(d)),t.fill()};for(let u of h.nodes)a(u.x,u.z,u.type==="titanium"?3.5:2.2,un[u.type].color);for(let u of h.buildings){let d=Math.max(2.5,u.def.r*s);t.fillStyle=u.broken?"#ff5a45":"#f3efe8",t.fillRect(r(u.x)-d,o(u.z)-d,d*2,d*2)}for(let u of h.enemies)t.fillStyle="#ff5a45",t.beginPath(),t.arc(r(u.pos.x),o(u.pos.z),u.boss?6:2.5,0,7),t.fill();for(let u of rp())t.strokeStyle=u.found?"rgba(255,210,138,.4)":"#ffd28a",t.lineWidth=2,t.beginPath(),t.arc(r(u.x),o(u.z),6,0,7),t.stroke();for(let u of dp())t.fillStyle="#8bf0a9",t.beginPath(),t.arc(r(u.x),o(u.z),5,0,7),t.fill();if(t.fillStyle="#8bf0a9",t.fillRect(r(pe.x)-3,o(pe.z)-3,6,6),h.waypoint){let u=h.waypoint;t.strokeStyle="#ffb65c",t.lineWidth=2,t.beginPath(),t.arc(r(u.x),o(u.z),9,0,7),t.stroke(),t.beginPath(),t.moveTo(r(u.x),o(u.z)-14),t.lineTo(r(u.x),o(u.z)+14),t.moveTo(r(u.x)-14,o(u.z)),t.lineTo(r(u.x)+14,o(u.z)),t.stroke()}let l=Math.atan2(i.fwd.x,-i.fwd.z);t.save(),t.translate(r(i.pos.x),o(i.pos.z)),t.rotate(l),t.fillStyle="#fff",t.shadowColor="#8ee7ff",t.shadowBlur=10,t.beginPath(),t.moveTo(0,-10),t.lineTo(7,7),t.lineTo(0,3),t.lineTo(-7,7),t.closePath(),t.fill(),t.restore();let c=(u,d,f="dot")=>`<div class="lg"><i class="${f}" style="--c:${u}"></i>${d}</div>`;Tt("map-legend").innerHTML=`<h4>\u56FE\u4F8B</h4>${c("#fff","\u4F60\u7684\u4F4D\u7F6E","arrow")}${c("#f3efe8","\u5EFA\u7B51","sq")}${Object.values(un).map(u=>c(u.color,u.name,"dia")).join("")}${c("#ffd28a","\u9057\u8FF9","ring")}${c("#8bf0a9","\u8865\u7ED9\u8231 / \u7740\u9646\u8231")}${c("#ff5a45","\u9508\u8680\u86DB")}${c("#8ee7ff","\u6B96\u6C11\u5730\u9886\u5730","dash")}
    <h4>\u5BFC\u822A</h4><p>\u70B9\u51FB\u5730\u56FE\u4EFB\u610F\u4F4D\u7F6E\u8BBE\u7F6E\u5BFC\u822A\u70B9\uFF0C\u7F57\u76D8\u4F1A\u6307\u5411\u5B83\uFF0C\u5730\u9762\u4F1A\u51FA\u73B0\u5149\u67F1\u3002</p>${h.waypoint?'<button class="go small" id="wp-clear">\u6E05\u9664\u5BFC\u822A\u70B9</button>':""}`,Tt("wp-clear")?.addEventListener("click",()=>{h.waypoint=null,Z.play("tick"),bp()}),Vx||(Vx=!0,n.addEventListener("click",u=>{let d=n.getBoundingClientRect(),f=(u.clientX-d.left)/d.width*en-en/2,p=(u.clientY-d.top)/d.height*en-en/2;h.waypoint={x:f,z:p},Z.play("ui"),bp()}))}var pr="iron",Cs="silicon",ha=10;function vl(){Tt("tr-res").innerHTML=Object.entries(un).map(([e,i])=>`<span style="--rc:${i.color}">${he(e)}${Math.floor(h.res[e])}</span>`).join("");let n=e=>Object.entries(un).map(([i,s])=>`<button class="rs ${i===e?"on":""}" data-k="${i}" style="--rc:${s.color}">${he(i)}<span>${s.name}</span><b>${Math.floor(h.res[i])}</b></button>`).join(""),t=Nf(pr,Cs,ha);Tt("trade-body").innerHTML=`<div class="tcol"><h4>\u4EA4\u51FA</h4><div class="rsl" id="tr-from">${n(pr)}</div></div>
    <div class="tmid"><div class="amt">${[10,25,50,100].map(e=>`<button class="${e===ha?"on":""}" data-n="${e}">${e}</button>`).join("")}</div>
      <div class="deal"><span style="--rc:${un[pr].color}">${he(pr)}${ha}</span><i>\u2192</i><span style="--rc:${un[Cs].color}">${he(Cs)}${t}</span></div>
      <div class="note2">\u6C47\u7387\u6309\u5730\u7403\u5E02\u573A\u4EF7\u8BA1\u7B97\uFF0C\u542B 20% \u8FD0\u8F93\u635F\u8017</div>
      <button class="go" ${pr===Cs||t<=0||h.res[pr]<ha?"disabled":""}>\u4EA4\u6613</button></div>
    <div class="tcol"><h4>\u6362\u53D6</h4><div class="rsl" id="tr-to">${n(Cs)}</div></div>`,Tt("tr-from").querySelectorAll(".rs").forEach(e=>e.addEventListener("click",()=>{pr=e.dataset.k,Z.play("tick"),vl()})),Tt("tr-to").querySelectorAll(".rs").forEach(e=>e.addEventListener("click",()=>{Cs=e.dataset.k,Z.play("tick"),vl()})),Tt("trade-body").querySelectorAll(".amt button").forEach(e=>e.addEventListener("click",()=>{ha=+e.dataset.n,Z.play("tick"),vl()})),Tt("trade-body").querySelector(".go").addEventListener("click",()=>{let e=Lg(pr,Cs,ha);e&&je(`\u4EA4\u6613\u5B8C\u6210\uFF1A\u83B7\u5F97${un[Cs].name} ${e}`,Cs,"good"),vl()})}function Rp(){let n=h.colony,t=h.stats,e=t.mined.iron+t.mined.silicon+t.mined.ice+t.mined.titanium,i=[["\u4EBA\u53E3",n.pop],["\u57CE\u5E02\u7B49\u7EA7",An[h.cityLevel].name],["\u8BBE\u65BD",h.buildings.length],["\u706B\u661F\u65E5",h.time.day],["\u7535\u529B",`${Math.round(n.powerProd)} / ${n.powerUse}`],["\u9057\u8FF9",`${Ji().found} / ${Ji().total}`],["\u53EF\u5BB9\u7EB3",n.support],["\u91C7\u96C6\u8D44\u6E90",e],["\u51FB\u9000\u9508\u8680\u86DB",t.kills],["\u884C\u9A76\u91CC\u7A0B",`${((t.driven||0)/1e3).toFixed(1)} km`],["\u5C45\u6C11\u4EA4\u8C08",(t.talked||[]).length],["\u5E78\u798F\u5EA6",h.morale??"\u2014"],["\u8865\u7ED9\u8231",t.pods||0]],s=pn.visited||[],r=Object.keys(Hn).map(l=>{let c=l===ne?{pop:n.pop}:s.find(u=>u.id===l);return`<div><small>${Hn[l].name}</small><b>${c?c.pop+" \u4EBA":"\u2014"}</b></div>`}).join(""),o=h.colonists.map(l=>`<div class="person" data-i="${[...l.name][0]}"><span class="pn">${l.name}</span><span class="pj">${l.job}</span><div class="pl">\u201C${l.line}\u201D</div></div>`).join(""),a=n.pop-h.colonists.length;return`<h3>\u6982\u51B5 \xB7 ${ht.name}</h3><div class="kv">${i.map(l=>`<div><small>${l[0]}</small><b>${l[1]}</b></div>`).join("")}</div>
    ${h.moraleFactors&&n.pop?`<h3>\u5E78\u798F\u5EA6\u6784\u6210</h3><div class="kv">${h.moraleFactors.map(l=>`<div><small>${l[0]}</small><b style="color:${l[1]>=0?"var(--green)":"var(--red)"}">${l[1]>0?"+":""}${Math.round(l[1])}</b></div>`).join("")}</div>`:""}
    <h3>\u4EBA\u7C7B\u7684\u8DB3\u8FF9</h3><div class="kv">${r}<div><small>\u661F\u9645\u603B\u4EBA\u53E3</small><b>${s.filter(l=>l.id!==ne).reduce((l,c)=>l+c.pop,0)+n.pop}</b></div></div>
    <h3>\u5C45\u6C11\u540D\u518C</h3>${o?`<div class="people">${o}</div>`:'<p style="color:var(--dim)">\u8FD8\u6CA1\u6709\u5C45\u6C11\u3002\u5EFA\u597D\u4F4F\u623F\u3001\u6C27\u6C14\u3001\u98DF\u7269\u3001\u6C34\u548C\u7740\u9646\u573A\uFF0C\u79FB\u6C11\u98DE\u8239\u5C31\u4F1A\u5230\u6765\u3002</p>'}
    ${a>0?`<p style="color:var(--dim);margin-top:14px">\u2026\u2026\u4EE5\u53CA\u53E6\u5916 ${a} \u4F4D\u5C45\u6C11\u3002</p>`:""}`}var mp=0,Wx="",ua=0,$x="";function Ap(n,t){let e=h.player,i=h.colony;if(mp-=n,mp<=0){mp=.2;for(let I in un)Tt("r-"+I).querySelector("b").textContent=Math.floor(h.res[I]);let p=Sg(),g=An[h.cityLevel],v=p?Math.min(1,Math.min(i.pop/p.pop,h.buildings.length/Math.max(1,p.b))):1,x=`<span class="lv">LV.${Zb[h.cityLevel]}</span><span class="nm">${g.name}</span>${p?`<div class="pg"><i style="width:${v*100}%"></i></div><div class="nx">\u4E0B\u4E00\u7EA7\u300C${p.name}\u300D\xB7 \u4EBA\u53E3 ${Math.min(i.pop,p.pop)}/${p.pop} \xB7 \u8BBE\u65BD ${Math.min(h.buildings.length,p.b)}/${p.b}</div>`:'<div class="nx">\u5DF2\u8FBE\u5230\u6700\u9AD8\u7B49\u7EA7</div>'}`;Tt("city").dataset.k!==x&&(Tt("city").dataset.k=x,Tt("city").innerHTML=x);let m="";if(h.buildings.length){if(m+=`<div class="st ${i.deficit?"warn":""}">${he("power")}<div><small>\u7535\u529B</small><b>${Math.round(i.powerProd)}<em>/${i.powerUse}</em></b></div></div>`,m+=`<div class="st">${he("pop")}<div><small>\u4EBA\u53E3</small><b>${i.pop}<em>/${i.support}</em></b></div></div>`,i.pop>0&&h.morale!==void 0){let I=h.morale;m+=`<div class="st ${I<35?"warn":I>=75?"tf":""}">${he("star")}<div><small>\u5E78\u798F</small><b>${I}</b></div></div>`,I<35&&(m+=`<div class="chip">${he("warn")}\u5C45\u6C11\u4E0D\u5F00\u5FC3\uFF1A\u5EFA\u7167\u660E\u706F\u3001\u5E7F\u573A\u3001\u6E29\u5BA4\uFF0C\u4FEE\u597D\u53D7\u635F\u8BBE\u65BD</div>`)}if(h.terraform>0&&(m+=`<div class="st tf">${he("planet")}<div><small>\u5927\u6C14\u6539\u9020</small><b>${Math.floor(h.terraform*100)}%</b></div></div>`),i.deficit&&(m+=`<div class="chip">${he("warn")}\u7535\u529B\u4E0D\u8DB3\uFF1A\u591A\u5EFA\u592A\u9633\u80FD\u6216\u53CD\u5E94\u5806</div>`),i.housing&&h.buildings.some(I=>I.type==="beacon")&&i.support<=i.pop){let I=[["housing","\u4F4F\u623F","house","\u5C45\u4F4F\u7A79\u9876"],["o2","\u6C27\u6C14","o2","\u5236\u6C27\u7AD9"],["food","\u98DF\u7269","food","\u6E29\u5BA4"],["water","\u6C34","water","\u6C34\u51B0\u63D0\u53D6\u5668"]].sort((w,b)=>i[w[0]]-i[b[0]])[0];m+=`<div class="chip">${he(I[2])}\u7F3A\u5C11${I[1]}\uFF1A\u5EFA\u9020${I[3]}\u6765\u8FCE\u63A5\u65B0\u79FB\u6C11</div>`}}Tt("colony").dataset.k!==m&&(Tt("colony").dataset.k=m,Tt("colony").innerHTML=m);let _=h.storm>.3?"\u6C99\u5C18\u66B4":h.raining?"\u964D\u96E8":"";Tt("clock").innerHTML=Sf().replace(/^.*? · /,"")+(_?`<span class="wx">${_}</span>`:"");let E=ui[h.chapter],M=h.chapter,A=(Vn()?[]:E.goals).map((I,w)=>{let b=h.goalDone?.[M+":"+w],U=I.prog&&!b?I.prog():"",B=/^(\d+)\/(\d+)$/.exec(U);return`<div class="g ${b?"done":""}"><span class="cb"></span><div class="gx">${I.text}${U?`<small>${U}</small>`:""}${B?`<div class="gp"><i style="width:${Math.min(100,B[1]/B[2]*100)}%"></i></div>`:""}</div></div>`}).join(""),L=h.requests||[];L.length?A+='<div class="rq-h">\u5C45\u6C11\u59D4\u6258</div>'+L.map(I=>{let w=Ng(I,da);return`<div class="g rq"><span class="cb"></span><div class="gx">${I.text}<small>${I.giver}${I.n>1?` \xB7 ${w}/${I.n}`:""}</small>${I.n>1?`<div class="gp"><i style="width:${w/I.n*100}%"></i></div>`:""}</div></div>`}).join(""):Vn()&&(A+='<div class="g"><div class="gx" style="color:var(--dim)">\u5148\u5EFA\u4E00\u5EA7\u8BBE\u65BD\uFF0C\u5C45\u6C11\u4EEC\u4F1A\u5F00\u59CB\u63D0\u51FA\u59D4\u6258</div></div>'),(h.rp>.5||h.buildings.some(I=>I.type==="lab"))&&(A+=`<div class="rq-h">\u79D1\u7814 <b>${Math.floor(h.rp)}</b> \u70B9 <small>+${sh().toFixed(1)}/\u79D2 \xB7 T \u6253\u5F00</small></div>`),A!==$x&&($x=A,Tt("goals").innerHTML=A,Tt("goal-ch").textContent=Vn()?`\u81EA\u7531\u6A21\u5F0F \xB7 ${Ko[h.diffKey||"normal"].name}`:E.title.replace(/ · /," ")),document.querySelectorAll("#hotbar .slot").forEach((I,w)=>{I.classList.toggle("on",w===an.index),I.classList.toggle("lock",!!(fr[w].need&&!h.upgrades[fr[w].need]))})}gp("d-hp",70,e.health/e.maxHealth),gp("d-o2",58,e.o2/e.maxO2),gp("d-en",47,e.energy/100),Tt("d-o2n").textContent=Math.ceil(e.o2/e.maxO2*100),Tt("d-hpn").textContent=Math.ceil(e.health),Tt("d-enn").textContent=Math.ceil(e.energy),Tt("pl-en").textContent=Sf().split(" \xB7 ")[0]===ht.name?yp[ne]:yp[ne];let s=Tt("o2-state"),r=e.inLife?`${he("o2")} \u8865\u6C27\u4E2D`:e.o2<e.maxO2*.2?`${he("warn")} \u6C27\u6C14\u4E0D\u8DB3\uFF0C\u7ACB\u5373\u8FD4\u56DE`:"";s.dataset.k!==r&&(s.dataset.k=r,s.innerHTML=r),s.className=e.inLife?"ok":"bad",Tt("suit").classList.toggle("low",e.o2<e.maxO2*.2&&!e.inLife);let o=ix(),a=Tt("radio");if(o){Wx!==o[1]&&(Wx=o[1],ua=0,a.querySelector(".who").textContent=o[0]);let p=o[1].length;ua<p&&(ua=Math.min(p,ua+n*26+1e-4),n===0&&(ua=p));let g=Math.floor(ua);a.querySelector(".txt").innerHTML=o[1].slice(0,g)+(g<p?'<span class="cur"></span>':""),a.classList.toggle("idle",g>=p),a.classList.add("show")}else a.classList.remove("show");let l=Tt("prompt");l.dataset.k!==(t.prompt||"")&&(l.dataset.k=t.prompt||"",l.innerHTML=t.prompt||""),l.classList.toggle("show",!!t.prompt),l.classList.toggle("drive",!!h.driving);let c=Tt("buildhint");if(an.id==="build"&&be.type&&!h.menuOpen){let p=Cn[be.type];c.innerHTML=`<div class="bn">${p.name}</div><div>${Bo(p.cost)}</div>
      <div class="st">${be.valid?'<span class="okc">\u5DE6\u952E\u653E\u7F6E</span>':`<span class="badc">${be.reason}</span>`}</div>
      <div><kbd>R</kbd>\u65CB\u8F6C <kbd>\u53F3\u952E</kbd>\u53D6\u6D88 <kbd>B</kbd>\u66F4\u6362\u84DD\u56FE</div>`,c.classList.add("show")}else c.classList.remove("show");Tt("hurt").style.opacity=Math.min(1,e.hurtT*1.6+(e.o2<=0?.5+Math.sin(performance.now()*.01)*.2:0)),Tt("lowo2").style.opacity=!e.inLife&&e.o2<e.maxO2*.2?(.4+Math.sin(performance.now()*.006)*.3)*(1-e.o2/(e.maxO2*.2)*.6):0,Tt("crosshair").className=t.crossClass||"";let u=Tt("tip");u.dataset.k!==(t.tip||"")&&(u.dataset.k=t.tip||"",u.innerHTML=t.tip?`<div class="tk">\u63D0\u793A</div><div>${t.tip}</div>`:""),u.classList.toggle("show",!!t.tip);let d=ux(),f=d&&Math.hypot(d.pos.x-e.pos.x,d.pos.z-e.pos.z)<260;Tt("bossbar").classList.toggle("hidden",!f),f&&(Tt("bossbar").querySelector("i").style.width=Math.max(0,d.hp/d.maxHp*100)+"%"),ew(),nw()}function gp(n,t,e){let i=2*Math.PI*t,s=Tt(n);s.style.strokeDasharray=i,s.style.strokeDashoffset=i*(1-Math.max(0,Math.min(1,e)))}var Xx={0:"\u5317",45:"\u4E1C\u5317",90:"\u4E1C",135:"\u4E1C\u5357",180:"\u5357",225:"\u897F\u5357",270:"\u897F",315:"\u897F\u5317"};function ew(){let n=h.player,t=n.fwd,e=Math.atan2(t.x,-t.z)*180/Math.PI,i=80,s=520,r=f=>s/2+f/i*(s/2),o="",a=Math.ceil((e-i)/5)*5;for(let f=a;f<=e+i;f+=5){let p=f-e,g=(f%360+360)%360;Xx[g]!==void 0?o+=`<span class="lb ${g%90===0?"big":""}" style="left:${r(p)}px">${Xx[g]}</span>`:o+=`<span class="tk ${g%15===0?"m":""}" style="left:${r(p)}px"></span>`}let l=(f,p)=>Math.atan2(f-n.pos.x,-(p-n.pos.z))*180/Math.PI,c=[{c:"home",t:`${he("house")}${Math.round(Math.hypot(pe.x-n.pos.x,pe.z-n.pos.z))}m`,a:l(pe.x,pe.z)}];if(h.upgrades.scanner){let f=null,p=1e9;for(let g of h.nodes)if(g.type==="titanium"){let v=Math.hypot(g.x-n.pos.x,g.z-n.pos.z);v<p&&(p=v,f=g)}f&&c.push({c:"ti",t:`${he("titanium")}${Math.round(p)}m`,a:l(f.x,f.z)})}h.waypoint&&c.push({c:"ship",t:`${he("star")}\u5BFC\u822A ${Math.round(Math.hypot(h.waypoint.x-n.pos.x,h.waypoint.z-n.pos.z))}m`,a:l(h.waypoint.x,h.waypoint.z)});let u=Hx(n.pos);u&&c.push({c:"home",t:`${he("ship")}\u8865\u7ED9 ${Math.round(u.d)}m`,a:l(u.p.x,u.p.z)});let d=Cx(n.pos);d&&c.push({c:"ship",t:`? ${Math.round(d.d)}m`,a:l(d.r.x,d.r.z)});for(let f of c){let p=(f.a-e+540)%360-180;Math.abs(p)<i&&(o+=`<span class="mk ${f.c}" style="left:${r(p)}px;top:16px">${f.t}</span>`)}Tt("compass").innerHTML=o}function nw(){let n=h.player,t=xp.width,e=t/2-6,i=h.upgrades.scanner?220:110,s=wh.width/en;mt.clearRect(0,0,t,t),mt.save(),mt.beginPath(),mt.arc(t/2,t/2,e,0,Math.PI*2),mt.clip(),mt.fillStyle="#0c0807",mt.fillRect(0,0,t,t),mt.globalAlpha=.75;let r=e*2/(i*2);mt.drawImage(wh,(n.pos.x-i+en/2)*s,(n.pos.z-i+en/2)*s,i*2*s,i*2*s,t/2-e,t/2-e,e*2,e*2),mt.globalAlpha=1;let o=f=>(f-n.pos.x)*r+t/2,a=f=>(f-n.pos.z)*r+t/2;mt.strokeStyle="rgba(255,255,255,.1)",mt.lineWidth=1;for(let f of[.33,.66])mt.beginPath(),mt.arc(t/2,t/2,e*f,0,Math.PI*2),mt.stroke();mt.strokeStyle="rgba(127,230,255,.55)",mt.setLineDash([3,4]),mt.beginPath(),mt.arc(o(jn.x),a(jn.z),An[h.cityLevel].r*r,0,Math.PI*2),mt.stroke(),mt.setLineDash([]);let l=(f,p,g,v)=>{mt.fillStyle=v,mt.beginPath(),mt.arc(o(f),a(p),g,0,Math.PI*2),mt.fill()};for(let f of h.nodes){if(Math.abs(f.x-n.pos.x)>i||Math.abs(f.z-n.pos.z)>i)continue;let p=un[f.type].color,g=o(f.x),v=a(f.z),x=f.type==="titanium"?3.2:2.2;mt.fillStyle=p,mt.beginPath(),mt.moveTo(g,v-x),mt.lineTo(g+x,v),mt.lineTo(g,v+x),mt.lineTo(g-x,v),mt.fill()}for(let f of h.buildings){let p=Math.max(2,f.def.r*r*.8);mt.fillStyle=f.broken?"#ff5a45":f.powered?"#ece6dc":"#ffb35c",mt.fillRect(o(f.x)-p,a(f.z)-p,p*2,p*2)}mt.fillStyle="#8dffb0";for(let f of h.colonists)mt.fillRect(o(f.pos.x)-1,a(f.pos.z)-1,2,2);let c=Math.sin(performance.now()*.008)>0;for(let f of h.enemies)l(f.pos.x,f.pos.z,f.guardian?3.5:2.6,c?"#ff5a45":"#a02818");l(pe.x,pe.z,3,"#8dffb0");for(let f of dp())mt.fillStyle="#8bf0a9",mt.beginPath(),mt.arc(o(f.x),a(f.z),4.5,0,Math.PI*2),mt.fill();for(let f of rp())Math.abs(f.x-n.pos.x)>i*1.2||Math.abs(f.z-n.pos.z)>i*1.2||(mt.strokeStyle=f.found?"rgba(255,210,138,.4)":"#ffd28a",mt.lineWidth=1.5,mt.beginPath(),mt.arc(o(f.x),a(f.z),4,0,Math.PI*2),mt.stroke());mt.restore(),mt.save(),mt.translate(t/2,t/2),mt.strokeStyle="rgba(236,230,220,.35)",mt.lineWidth=1,mt.beginPath(),mt.arc(0,0,e+.5,0,Math.PI*2),mt.stroke();for(let f=0;f<72;f++){let p=f/72*Math.PI*2,g=f%18===0?6:f%6===0?4:2;mt.strokeStyle=f%18===0?"rgba(255,179,92,.9)":"rgba(236,230,220,.3)",mt.beginPath(),mt.moveTo(Math.sin(p)*(e+1),-Math.cos(p)*(e+1)),mt.lineTo(Math.sin(p)*(e+1+g),-Math.cos(p)*(e+1+g)),mt.stroke()}let u=Math.atan2(n.fwd.x,-n.fwd.z);mt.rotate(u);let d=mt.createRadialGradient(0,0,0,0,0,e*.6);d.addColorStop(0,"rgba(255,179,92,.35)"),d.addColorStop(1,"rgba(255,179,92,0)"),mt.fillStyle=d,mt.beginPath(),mt.moveTo(0,0),mt.arc(0,0,e*.6,-Math.PI/2-.55,-Math.PI/2+.55),mt.closePath(),mt.fill(),mt.fillStyle="#fff",mt.beginPath(),mt.moveTo(0,-7),mt.lineTo(5,5),mt.lineTo(0,2.5),mt.lineTo(-5,5),mt.closePath(),mt.fill(),mt.restore()}var Jx="starport-achv",Th=[{id:"first",name:"\u7B2C\u4E00\u6B65",desc:"\u5728\u5F02\u661F\u91C7\u96C6\u7B2C\u4E00\u5757\u77FF\u77F3",icon:"iron",check:()=>h.stats.mined.iron+h.stats.mined.silicon+h.stats.mined.ice>0},{id:"breathe",name:"\u547C\u5438",desc:"\u5EFA\u8D77\u7B2C\u4E00\u5EA7\u5236\u6C27\u7AD9",icon:"o2",check:()=>h.stats.built.oxygen>0},{id:"home",name:"\u7B2C\u4E00\u4E2A\u5BB6",desc:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",icon:"dome",check:()=>h.stats.built.habitat>0},{id:"welcome",name:"\u6B22\u8FCE\u56DE\u5BB6",desc:"\u8FCE\u63A5\u7B2C\u4E00\u6279\u79FB\u6C11",icon:"pop",check:()=>h.stats.arrived>0},{id:"listen",name:"\u503E\u542C\u8005",desc:"\u4E0E 8 \u4F4D\u5C45\u6C11\u4EA4\u8C08",icon:"radio",check:()=>(h.stats.talked||[]).length>=8},{id:"night",name:"\u957F\u591C\u5B88\u671B\u8005",desc:"\u51FB\u9000 15 \u53EA\u9508\u8680\u86DB",icon:"shield",check:()=>h.stats.kills>=15},{id:"guardian",name:"\u6676\u4F53\u730E\u4EBA",desc:"\u51FB\u8D25\u4E00\u53EA\u949B\u77FF\u5B88\u536B",icon:"titanium",check:()=>(h.stats.guardKills||0)>0},{id:"road",name:"\u516C\u8DEF\u65C5\u884C",desc:"\u9A7E\u9A76\u6F2B\u6E38\u8F66\u884C\u9A76 3 \u516C\u91CC",icon:"rover",check:()=>(h.stats.driven||0)>=3e3},{id:"meteor",name:"\u661F\u843D\u4E4B\u591C",desc:"\u91C7\u96C6\u4E00\u5757\u9668\u77F3",icon:"meteor",check:()=>(h.stats.meteorMined||0)>0},{id:"storm",name:"\u98CE\u66B4\u4E4B\u4E2D",desc:"\u7ECF\u5386\u4E00\u573A\u6C99\u5C18\u66B4",icon:"storm",check:()=>h.storm>.85},{id:"fly",name:"\u98DE\u7FD4",desc:"\u5236\u9020\u55B7\u6C14\u80CC\u5305",icon:"jet",check:()=>!!h.upgrades.jetpack},{id:"town",name:"\u5C0F\u9547",desc:"\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C\u5C0F\u9547\u300D",icon:"colony",check:()=>h.cityLevel>=2},{id:"metro",name:"\u5927\u90FD\u4F1A",desc:"\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C\u5927\u90FD\u4F1A\u300D",icon:"tower",check:()=>h.cityLevel>=4},{id:"fifty",name:"\u4E94\u5341\u4E2A\u706F\u706B",desc:"\u5355\u9897\u661F\u7403\u4EBA\u53E3\u8FBE\u5230 50",icon:"pop",check:()=>h.colony.pop>=50},{id:"reactor",name:"\u7B2C\u4E8C\u9897\u592A\u9633",desc:"\u70B9\u4EAE\u805A\u53D8\u53CD\u5E94\u5806",icon:"power",check:()=>h.stats.built.reactor>0},{id:"blue",name:"\u84DD\u8272\u5929\u7A7A",desc:"\u5B8C\u6210\u706B\u661F\u5927\u6C14\u6539\u9020",icon:"planet",check:()=>h.terraform>=1},{id:"europa",name:"\u51B0\u4E0B\u4E4B\u6D77",desc:"\u767B\u9646\u6728\u536B\u4E8C\xB7\u6B27\u7F57\u5DF4",icon:"ice",check:()=>ne==="europa"},{id:"kepler",name:"\u53CC\u65E5\u4E4B\u5730",desc:"\u62B5\u8FBE\u5F00\u666E\u52D2-442b",icon:"sun",check:()=>ne==="kepler"},{id:"civ",name:"\u661F\u9645\u6587\u660E",desc:"\u5EFA\u6210\u6587\u660E\u7EAA\u5FF5\u7891",icon:"monument",check:()=>h.stats.built.monument>0},{id:"relic",name:"\u56DE\u58F0",desc:"\u53D1\u73B0\u7B2C\u4E00\u5904\u9057\u8FF9",icon:"radio",check:()=>Ji().found>0},{id:"archaeo",name:"\u8003\u53E4\u5B66\u5BB6",desc:"\u53D1\u73B0\u4E00\u9897\u661F\u7403\u4E0A\u7684\u5168\u90E8\u9057\u8FF9",icon:"book",check:()=>{let n=Ji();return n.total>0&&n.found===n.total}},{id:"boss",name:"\u6676\u6BCD\u9668\u843D",desc:"\u5728\u6676\u6F6E\u4E4B\u591C\u51FB\u8D25\u6676\u6BCD",icon:"boss",check:()=>(h.stats.bossKills||0)>0},{id:"fleet",name:"\u65E0\u4EBA\u673A\u8230\u961F",desc:"\u65E0\u4EBA\u673A\u8FD0\u56DE 30 \u6279\u7269\u8D44",icon:"drone",check:()=>(h.stats.droneHauls||0)>=30},{id:"lv3",name:"\u7CBE\u76CA\u6C42\u7CBE",desc:"\u628A\u4E00\u5EA7\u5EFA\u7B51\u5347\u5230 3 \u7EA7",icon:"star",check:()=>h.buildings.some(n=>(n.level||1)>=3)},{id:"buddy",name:"\u597D\u642D\u6863",desc:"\u8BA9\u5C0F\u661F\u626B\u63CF 10 \u6B21",icon:"scanner",check:()=>(h.stats.scans||0)>=10},{id:"helper",name:"\u597D\u90BB\u5C45",desc:"\u5B8C\u6210 10 \u4E2A\u5C45\u6C11\u59D4\u6258",icon:"radio",check:()=>(h.stats.requests||0)>=10},{id:"science",name:"\u79D1\u5B66\u5BB6",desc:"\u5B8C\u6210 6 \u9879\u79D1\u7814",icon:"book",check:()=>Object.keys(h.tech||{}).length>=6},{id:"trader",name:"\u661F\u9645\u5546\u4EBA",desc:"\u5B8C\u6210 10 \u6B21\u661F\u9645\u8D38\u6613",icon:"ship",check:()=>(h.stats.traded||0)>=10},{id:"mail",name:"\u6765\u81EA\u5730\u7403\u7684\u4FE1",desc:"\u6253\u5F00 5 \u4E2A\u8865\u7ED9\u8231",icon:"ship",check:()=>(h.stats.pods||0)>=5},{id:"happy",name:"\u5B89\u5C45\u4E50\u4E1A",desc:"\u5C45\u6C11\u5E78\u798F\u5EA6\u8FBE\u5230 90",icon:"star",check:()=>h.colony.pop>=4&&(h.morale||0)>=90},{id:"fest",name:"\u6B96\u6C11\u5730\u8282",desc:"\u548C\u5C45\u6C11\u4E00\u8D77\u5728\u5E7F\u573A\u770B\u70DF\u82B1",icon:"star",check:()=>(h.stats.festivals||0)>0},{id:"photo",name:"\u6444\u5F71\u5E08",desc:"\u5728\u62CD\u7167\u6A21\u5F0F\u4E2D\u4FDD\u5B58\u4E00\u5F20\u7167\u7247",icon:"camera",check:()=>(h.stats.photos||0)>0},{id:"gather",name:"\u6545\u4E61\u7684\u5149",desc:"\u591C\u91CC\uFF0C\u5C45\u6C11\u4EEC\u805A\u5728\u5E7F\u573A\u4E0A\u770B\u5168\u606F\u5730\u7403",icon:"planet",check:()=>!!h.plazaSeen}],Kr={};try{Kr=JSON.parse(localStorage.getItem(Jx))||{}}catch{Kr={}}var Cp=[],Pp=0,Sh=0;function jx(n){if(Pp-=n,Sh-=n,Pp<=0){Pp=1;for(let e of Th){if(Kr[e.id])continue;let i=!1;try{i=e.check()}catch{i=!1}if(i){Kr[e.id]=Date.now(),Cp.push(e);try{localStorage.setItem(Jx,JSON.stringify(Kr))}catch{}}}}let t=document.getElementById("achv-pop");if(Sh<=0&&t.classList.contains("show")&&t.classList.remove("show"),Sh<=-.6&&Cp.length){let e=Cp.shift();t.innerHTML=`<div class="ai">${he(e.icon)}</div><div><div class="k">ACHIEVEMENT UNLOCKED</div><div class="n">${e.name}</div><div class="d">${e.desc}</div></div>`,t.classList.add("show"),Sh=4.5,Z.play("achv")}}function Ip(){return`<h3>\u6210\u5C31 \xB7 ${Th.filter(t=>Kr[t.id]).length} / ${Th.length}</h3><div class="achv">${Th.map(t=>`<div class="ach ${Kr[t.id]?"on":""}"><div class="ai">${he(t.icon)}</div><div><div class="an">${t.name}</div><div class="ad">${t.desc}</div></div></div>`).join("")}</div>`}var t1=!1,e1=[],n1=[],i1=[];function Qx(n,t,e,i,s){let r=new Re;r.setAttribute("position",new tn(new Float32Array(n*3),3));let o=new Yn({size:e,map:Jn(),color:t,transparent:!0,opacity:i,depthWrite:!1,blending:s?fe:Hi}),a=new si(r,o);a.frustumCulled=!1,h.scene.add(a);let l=new Float32Array(n*3);for(let c=0;c<n;c++)l[c*3]=Math.random(),l[c*3+1]=Math.random()*Math.PI*2,l[c*3+2]=Math.random();return{p:a,seed:l,n}}function iw(){if(t1=!0,ne==="mars")for(let n=0;n<3;n++){let t=Qx(420,14195306,2.4,.45,!1);e1.push({...t,x:0,z:0,vx:0,vz:0,h:40+Math.random()*30,life:0,k:0})}else if(ne==="europa"){let n=vs.slice(0,8).map(t=>({x:t.x+(Math.random()-.5)*t.r*.6,z:t.z+(Math.random()-.5)*t.r*.6}));n.push({x:60,z:70},{x:-90,z:-40},{x:120,z:140});for(let t of n){if(Math.abs(t.x)>Zt-200||Math.abs(t.z)>Zt-200)continue;let e=Qx(500,15267583,2.6,.6,!0);n1.push({...e,x:t.x,z:t.z,y:xt(t.x,t.z),t:Math.random()*30,on:0})}}else if(ne==="kepler"){let n=new Bt(1,12,6,0,Math.PI*2,0,Math.PI/2);for(let t=0;t<34;t++){let e=.45+Math.random()*.4,i=new yt().setHSL(e,.9,.6),s=new lt(n,new Yt({color:i,transparent:!0,opacity:.55,depthWrite:!1,blending:fe})),r=new Fi(new Ei({map:Jn(),color:i,transparent:!0,depthWrite:!1,blending:fe})),o=new lt(new Fe(.6,3,6,1,!0),s.material);o.position.y=-1.6,o.rotation.x=Math.PI;let a=new ft;a.add(s,r,o),r.scale.setScalar(6);let l=.6+Math.random()*1.2;a.scale.setScalar(l),h.scene.add(a),i1.push({g:a,m:s,s:r,x:(Math.random()-.5)*500,z:(Math.random()-.5)*500,alt:14+Math.random()*30,ph:Math.random()*6,sp:.5+Math.random()})}}}var yA=new T,Lp=0;function s1(n){t1||iw();let t=h.player.pos,e=performance.now()*.001,i=1-h.time.night;for(let s of e1){if(s.life-=n,s.life<=0){let c=Math.random()*Math.PI*2,u=90+Math.random()*200;s.x=Ve.clamp(t.x+Math.cos(c)*u,-Zt+160,Zt-160),s.z=Ve.clamp(t.z+Math.sin(c)*u,-Zt+160,Zt-160);let d=Math.random()*Math.PI*2;s.vx=Math.cos(d)*3,s.vz=Math.sin(d)*3,s.life=40+Math.random()*40,s.h=35+Math.random()*40}s.x+=s.vx*n,s.z+=s.vz*n;let r=Math.min(1,s.life/5,(60-s.life)/5+1)*i*(1-h.storm)*(h.terraform<1?1:.2);s.k+=(r-s.k)*Math.min(1,n),s.p.material.opacity=.45*s.k;let o=s.p.geometry.attributes.position.array,a=xt(s.x,s.z);for(let c=0;c<s.n;c++){let u=s.seed,d=(u[c*3]+e*.08*(.6+u[c*3+2]))%1,f=u[c*3+1]+e*(3+(1-d)*2),p=.8+d*d*9+u[c*3+2]*1.5,g=Math.sin(e*.7+d*4)*d*3;o[c*3]=s.x+Math.cos(f)*p+g,o[c*3+1]=a+d*s.h,o[c*3+2]=s.z+Math.sin(f)*p}s.p.geometry.attributes.position.needsUpdate=!0;let l=Math.hypot(t.x-s.x,t.z-s.z);l<8&&s.k>.5&&!h.driving&&(h.player.vel.x+=(t.x-s.x)/l*n*20,h.player.vel.z+=(t.z-s.z)/l*n*20)}Lp-=n;for(let s of n1){s.t-=n,s.t<=0&&s.on<=0&&(s.on=9,s.t=25+Math.random()*30,Math.hypot(t.x-s.x,t.z-s.z)<120&&Z.play("rumble")),s.on-=n;let r=Ve.clamp(Math.min(s.on,9-s.on),0,1.5)/1.5;if(s.p.material.opacity=.6*r,r<=0)continue;let o=s.p.geometry.attributes.position.array,a=70;for(let l=0;l<s.n;l++){let c=s.seed,u=(c[l*3]+e*.35)%1,d=.4+u*9*c[l*3+2]+u*u*4;o[l*3]=s.x+Math.cos(c[l*3+1])*d,o[l*3+1]=s.y+Math.sin(u*Math.PI*.9)*a*(.6+c[l*3+2]*.4),o[l*3+2]=s.z+Math.sin(c[l*3+1])*d}s.p.geometry.attributes.position.needsUpdate=!0,Math.hypot(t.x-s.x,t.z-s.z)<40&&Lp<=0&&(Lp=.5,Z.play("jet"))}for(let s of i1){s.ph+=n*s.sp,s.x+=Math.sin(s.ph*.3)*n*2,s.z+=Math.cos(s.ph*.23)*n*2,Math.abs(s.x-t.x)>260&&(s.x=t.x-Math.sign(s.x-t.x)*250),Math.abs(s.z-t.z)>260&&(s.z=t.z-Math.sign(s.z-t.z)*250);let r=xt(s.x,s.z)+s.alt+Math.sin(s.ph)*2;s.g.position.set(s.x,r,s.z);let o=.75+Math.sin(s.ph*3)*.25;s.m.scale.set(1+Math.sin(s.ph*3)*.12,1-Math.sin(s.ph*3)*.1,1+Math.sin(s.ph*3)*.12);let a=.15+h.time.night*.85;s.m.material.opacity=.5*a*o,s.s.material.opacity=.7*a*o}}var ts,Dp,_l,Up,Jr,Np,pa=[],El=0,Ml=-1,kp=20,Rh=0,gr=new T,r1=new T,o1=new Set,Ch=140;function l1(){ts=new ft;let n=new lt(new Bt(.32,20,14),y.white),t=new lt(new Dt(.33,.04,8,28),y.orange);t.rotation.x=Math.PI/2;let e=new lt(new Bt(.2,16,10,-Math.PI*.35,Math.PI*.7,Math.PI*.3,Math.PI*.4),new pt({color:660504,roughness:.1,metalness:.6}));e.position.z=.15,e.rotation.y=Math.PI,Dp=Mt(8382207,.45,null,0,.02,.33),_l=new lt(new Dt(.5,.015,6,40),new Yt({color:8382207,transparent:!0,opacity:.6})),_l.rotation.x=Math.PI/2;let i=new lt(new Fe(.05,.25,6),y.metal);i.position.y=.38,ts.add(n,t,e,Dp,_l,i,Mt(16738874,.25,null,0,.5,0)),ts.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),ts.scale.setScalar(.8),Up=new js(12578815,0,22,1.6),ts.add(Up),h.scene.add(ts);let s=h.player.pos;gr.set(s.x+1.5,s.y+2.2,s.z+1.5),ts.position.copy(gr),Np=new Yt({color:8382207,transparent:!0,opacity:0,side:Ge,depthWrite:!1,blending:fe}),Jr=new lt(new fn(.94,1,96),Np),Jr.rotation.x=-Math.PI/2,Jr.visible=!1,h.scene.add(Jr)}function fa(n,t,e=!0){e&&o1.has(n)||kp>0&&e||(o1.add(n),kp=45,Ie("\u5C0F\u661F \xB7 \u4F19\u4F34\u673A\u5668\u4EBA",t))}var Ah;function sw(){if(Ah)return Ah;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");return t.translate(32,32),t.rotate(Math.PI/4),t.strokeStyle="#fff",t.lineWidth=5,t.strokeRect(-14,-14,28,28),t.fillStyle="rgba(255,255,255,.35)",t.fillRect(-9,-9,18,18),Ah=new on(n),Ah}function rw(){if(El>0){h.events.emit("toast",`\u626B\u63CF\u51B7\u5374\u4E2D \xB7 ${Math.ceil(El)} \u79D2`),Z.play("deny");return}El=12,Ml=0,Z.play("scan");for(let s of pa)h.scene.remove(s.s);pa=[];let n=h.player.pos,t={};for(let s of h.nodes){let r=Math.hypot(s.x-n.x,s.z-n.z);if(r>Ch)continue;let o=_s[s.type],a=new Fi(new Ei({map:sw(),color:new yt(o[0],o[1],o[2]),transparent:!0,depthTest:!1,depthWrite:!1,opacity:0,sizeAttenuation:!1}));a.scale.setScalar(s.type==="titanium"?.05:.036),a.position.set(s.x,s.y+3,s.z),a.renderOrder=999,h.scene.add(a),pa.push({s:a,delay:r/90,life:10}),t[s.type]=(t[s.type]||0)+1}let e={iron:"\u94C1\u77FF",silicon:"\u7845\u6676",ice:"\u6C34\u51B0",titanium:"\u949B\u77FF"},i=Object.entries(t).map(([s,r])=>`${e[s]} ${r}`).join(" \xB7 ");h.events.emit("toast",i?`\u626B\u63CF\u5B8C\u6210 \xB7 ${i}`:"\u626B\u63CF\u5B8C\u6210 \xB7 \u9644\u8FD1\u6CA1\u6709\u77FF\u85CF"),h.stats.scans=(h.stats.scans||0)+1}function c1(n){if(!ts)return;let t=h.player,e=performance.now()*.001;El=Math.max(0,El-n),kp-=n,ct.hit("KeyQ")&&!h.menuOpen&&!t.dead&&rw();let i=(h.driving,t.yaw),s=new T(Math.cos(i),0,-Math.sin(i)),r=new T(-Math.sin(i),0,-Math.cos(i)),o=t.pos.clone().addScaledVector(s,h.driving?3.5:3).addScaledVector(r,h.driving?2:5.5);o.y=Math.max(t.pos.y+1.55,xt(o.x,o.z)+.8)+Math.sin(e*2)*.12,h.driving&&(o.y+=2.2);let a=gr.distanceTo(o)>30?1:Math.min(1,n*3);r1.lerp(o.clone().sub(gr).multiplyScalar(4),a),gr.addScaledVector(r1,n),gr.distanceTo(o)>40&&gr.copy(o),ts.position.copy(gr);let l=t.pos.clone().addScaledVector(t.fwd,12);if(l.y+=1.5,ts.lookAt(l),_l.rotation.z+=n*1.5,_l.rotation.x=Math.PI/2+Math.sin(e*1.3)*.3,Dp.material.opacity=.75+Math.sin(e*4)*.25,Up.intensity=h.time.night>.4?18*h.time.night:0,Ml>=0){Ml+=n;let u=Ml*90;Jr.visible=u<Ch,Jr.position.set(t.pos.x,t.pos.y+.6,t.pos.z),Jr.scale.setScalar(Math.max(.1,u)),Np.opacity=.7*(1-u/Ch),u>=Ch&&(Ml=-1)}for(let u=pa.length-1;u>=0;u--){let d=pa[u];d.delay-=n,!(d.delay>0)&&(d.life-=n,d.s.material.opacity=Math.min(1,(10-d.life)*3,d.life/2)*(.75+Math.sin(e*5+u)*.25),d.life<=0&&(h.scene.remove(d.s),d.s.material.dispose(),pa.splice(u,1)))}Rh=Math.hypot(t.vel.x,t.vel.z)>.5?0:Rh+n,!t.inLife&&t.o2<t.maxO2*.3&&fa("o2"+Math.floor(e/120),"\u6C27\u6C14\u4E0D\u591A\u4E86\uFF01\u6700\u8FD1\u7684\u8865\u6C27\u70B9\u5728\u7F57\u76D8\u4E0A\u90A3\u4E2A\u623F\u5B50\u56FE\u6807\u7684\u65B9\u5411\u3002",!1),h.time.night>.6&&!t.flashlight&&fa("dark","\u597D\u9ED1\u2026\u2026\u6309 F \u6253\u5F00\u624B\u7535\u7B52\u5427\u3002\u6211\u4E5F\u4F1A\u5E2E\u4F60\u7167\u7740\u70B9\u3002"),h.enemies.some(u=>!u.dead&&!u.guardian&&u.pos.distanceTo(t.pos)<25)&&fa("enemy"+Math.floor(e/90),"\u68C0\u6D4B\u5230\u9508\u8680\u86DB\u9760\u8FD1\uFF01\u5C0F\u5FC3\uFF01",!1),h.nodes.some(u=>u.type==="titanium"&&Math.hypot(u.x-t.pos.x,u.z-t.pos.z)<40)&&fa("ti","\u9644\u8FD1\u6709\u949B\u77FF\u7684\u4FE1\u53F7\uFF01\u7D2B\u8272\u7684\u90A3\u79CD\uFF0C\u5F88\u7A00\u6709\u54E6\u3002"),Rh>40&&(Rh=-200,fa("idle"+Math.floor(e/300),a1[ne][Math.floor(Math.random()*a1[ne].length)],!1)),h.stats.scans===void 0&&h.time.day>=1&&e>30&&fa("scanhint","\u6211\u80FD\u626B\u63CF\u9644\u8FD1\u7684\u77FF\u85CF\u2014\u2014\u6309 Q \u8BD5\u8BD5\u3002")}var a1={mars:["\u4F60\u77E5\u9053\u5417\uFF1F\u706B\u661F\u4E0A\u7684\u4E00\u5929\u6BD4\u5730\u7403\u957F 37 \u5206\u949F\u3002","\u706B\u661F\u7684\u65E5\u843D\u662F\u84DD\u8272\u7684\u3002\u7B49\u508D\u665A\u7684\u65F6\u5019\u62AC\u5934\u770B\u770B\u5427\u3002","\u90A3\u5EA7\u6700\u9AD8\u7684\u5C71\u53EB\u5965\u6797\u5E15\u65AF\uFF0C\u662F\u5730\u7403\u73E0\u5CF0\u7684\u4E24\u500D\u591A\u9AD8\u3002","\u6211\u7684\u6570\u636E\u5E93\u91CC\u6709\u4E00\u9996\u5730\u7403\u7684\u6B4C\uFF0C\u53EB\u300A\u6708\u4EAE\u4EE3\u8868\u6211\u7684\u5FC3\u300B\u3002\u8981\u6211\u54FC\u7ED9\u4F60\u542C\u5417\uFF1F\u2026\u2026\u7B97\u4E86\uFF0C\u6211\u8DD1\u8C03\u3002"],europa:["\u6728\u661F\u597D\u5927\u2026\u2026\u611F\u89C9\u5B83\u968F\u65F6\u4F1A\u6389\u4E0B\u6765\u3002","\u51B0\u5C42\u4E0B\u9762\u7684\u6D77\uFF0C\u53EF\u80FD\u6BD4\u5730\u7403\u6240\u6709\u7684\u6D77\u52A0\u8D77\u6765\u8FD8\u8981\u591A\u3002","\u8FD9\u91CC\u7684\u91CD\u529B\u5F88\u5C0F\uFF0C\u8DF3\u9AD8\u4E00\u70B9\u6CA1\u5173\u7CFB\u7684\u3002"],kepler:["\u4E24\u4E2A\u592A\u9633\uFF01\u5F71\u5B50\u90FD\u6709\u4E24\u4E2A\uFF01","\u90A3\u4E9B\u53D1\u5149\u7684\u6C34\u6BCD\u2026\u2026\u5B83\u4EEC\u662F\u5728\u770B\u6211\u4EEC\u5417\uFF1F","\u7A7A\u6C14\u91CC\u7684\u6C27\u6C14\u5DF2\u7ECF\u6709 14% \u4E86\u3002\u518D\u8FC7\u51E0\u5341\u5E74\uFF0C\u4E5F\u8BB8\u5C31\u80FD\u6458\u4E0B\u5934\u76D4\u4E86\u3002"]};var mn=null,h1=new hn,Hp=new _n,bl=new T;function ow(){let n=new ft,t=new ft;n.add(t);let e=(f,p,g,v,x,m=t,_=0,E=0,M=0)=>{let D=new lt(f,p);return D.position.set(g,v,x),D.rotation.set(_,E,M),D.castShadow=!0,D.receiveShadow=!0,m.add(D),D},i=(f,p,g,v=.08)=>new Qo(f,p,g,2,v),s=(f,p,g,v,x=t)=>{let m=p.clone().sub(f),_=e(new Wt(g,g,m.length(),8),v,0,0,0,x);return _.position.copy(f).add(p).multiplyScalar(.5),_.quaternion.setFromUnitVectors(new T(0,1,0),m.normalize()),_},r=(f,p,g)=>new T(f,p,g);e(i(2.5,.35,4.8,.1),y.dark,0,.85,0),e(i(2.6,.75,3.4,.18),y.white,0,1.35,.5),e(i(2.64,.14,3.44,.05),y.orange,0,1.62,.5),e(i(2.2,.5,1.2,.12),y.panel,0,1.25,-1.9,t,-.25,0,0);let o=e(new Bt(1.15,32,16,0,Math.PI*2,0,Math.PI/2),y.glass,0,1.72,-.75);o.scale.set(1,.8,1.15),o.castShadow=!1;for(let f=0;f<5;f++)e(new Dt(1.16,.035,6,24,Math.PI),y.metal,0,1.72,-.75,t,0,f*Math.PI/5,0).scale.set(1,.8,1.15);for(let f of[-1.15,1.15])s(r(f,1.7,.6),r(f*.9,2.75,.9),.06,y.metal),s(r(f,1.7,2.1),r(f*.9,2.75,1.9),.06,y.metal);s(r(-1.04,2.75,.9),r(1.04,2.75,.9),.06,y.metal),s(r(-1.04,2.75,1.9),r(1.04,2.75,1.9),.06,y.metal),s(r(-1.04,2.75,.9),r(-1.04,2.75,1.9),.06,y.metal),s(r(1.04,2.75,.9),r(1.04,2.75,1.9),.06,y.metal),e(i(1.8,.16,.22,.05),y.dark,0,2.82,.9);let a=[];for(let f=0;f<4;f++)e(new Zs(.07,12),y.lamp,-.6+f*.4,2.82,.78,t,0,Math.PI,0),a.push(Mt(16773853,.9,t,-.6+f*.4,2.82,.75));for(let f of[-.85,.85])a.push(Mt(16773853,1.2,t,f,1.2,-2.5));for(let f of[-.85,.85])e(i(.35,.18,.08,.04),y.lamp,f,1.2,-2.42);e(i(2.3,.08,1.5,.03),y.metal,0,1.78,1.6);for(let[f,p,g]of[[-.5,1.4,.6],[.4,1.7,.7],[.5,1.1,.45]])e(i(g,g*.8,g,.04),y.dark,f,1.82+g*.4,p);e(new Wt(.02,.02,1.6,4),y.metal,.9,3.5,1.9);let l=Mt(16728128,.6,t,.9,4.3,1.9);for(let f=0;f<3;f++)e(i(.06,.06,.5,.02),y.metal,1.33,.75+f*.28,-.2);e(i(.1,.4,1,.04),y.orange,-1.32,1.3,1);let c=[],u=new Dt(.46,.2,12,28);for(let f of[-1.65,0,1.65])for(let p of[-1.5,1.5]){let g=new ft;g.position.set(p,.62,f),n.add(g);let v=e(u,y.rubber,0,0,0,g,0,Math.PI/2,0);for(let x=0;x<14;x++){let m=x/14*Math.PI*2;e(new Gt(.42,.06,.1),y.rubber,0,Math.cos(m)*.64,Math.sin(m)*.64,g,m,0,0)}e(new Wt(.34,.34,.3,20),y.metal,0,0,0,g,0,0,Math.PI/2);for(let x=0;x<5;x++)e(new Gt(.32,.06,.06),y.dark,p>0?.16:-.16,0,0,g,x*Math.PI/5,0,0).scale.set(.3,1,9);e(new Wt(.1,.1,.34,10),y.chrome,0,0,0,g,0,0,Math.PI/2),s(r(p*.62,.95,f),r(p*.95,.66,f),.07,y.metal,n),s(r(p*.7,1.15,f+.3),r(p*.95,.75,f),.04,y.chrome,n),c.push(g)}let d=new No(16773853,0,60,.5,.5,1.2);return d.position.set(0,1.2,-2.4),d.target.position.set(0,0,-20),t.add(d,d.target),{g:n,body:t,wheels:c,tip:l,lamp:d,heads:a}}function Ih(n,t,e=0){if(mn)return mn;let i=ow();return h.scene.add(i.g),mn={...i,x:n,z:t,y:xt(n,t),h:e,speed:0,vy:0,lookYaw:0,pitch:-.05,spin:0,hitT:0,air:!1},mn.collider=h.colliders.add({x:n,z:t,r:2,kind:"rover"}),zp(0),mn}function Lh(){return mn}function u1(){return mn?{x:+mn.x.toFixed(1),z:+mn.z.toFixed(1),h:+mn.h.toFixed(2)}:null}function Ph(n,t){return xt(n,t)}function zp(n){let t=mn,e=Math.sin(t.h),i=Math.cos(t.h),s=-e,r=-i,o=i,a=-e,l=Ph(t.x+s*1.8,t.z+r*1.8),c=Ph(t.x-s*1.8,t.z-r*1.8),u=Ph(t.x-o*1.3,t.z-a*1.3),d=Ph(t.x+o*1.3,t.z+a*1.3),f=Math.atan2(l-c,3.6),p=Math.atan2(d-u,2.6);t.g.position.set(t.x,t.y,t.z),Hp.set(t.air?t.g.rotation.x:f,t.h,t.air?t.g.rotation.z:-p,"YXZ"),t.air||t.g.rotation.copy(Hp),t.spin+=t.speed*n/.55;for(let g of t.wheels)g.rotation.x=-t.spin;return(l+c+u+d)/4}function d1(){mn&&(h.driving=!0,mn.lookYaw=0,mn.pitch=-.08,h.colliders.remove(mn.collider),Z.play("place"))}function Fp(n){let t=mn;if(!t)return;h.driving=!1,Z.engine(0);let e=Math.cos(t.h),i=Math.sin(t.h),s=t.x+e*3,r=t.z-i*3;h.colliders.overlaps(s,r,.5)&&(s=t.x-e*3,r=t.z+i*3),n.pos.set(s,xt(s,r),r),n.vel.set(0,0,0),n.yaw=t.h+t.lookYaw,n.pitch=t.pitch,t.speed=0,t.lamp.intensity=0,t.collider=h.colliders.add({x:t.x,z:t.z,r:2,kind:"rover"})}function f1(n,t,e){if(!mn)return;let i=mn;if(i.tip.visible=Math.sin(performance.now()*.005)>0,!h.driving){i.y=zp(0);return}h.locked&&(i.lookYaw=Ve.clamp(i.lookYaw-ct.dx*ct.sens,-2.4,2.4),i.pitch=Ve.clamp(i.pitch-ct.dy*ct.sens,-1,.9));let s=(ct.down("KeyW")||ct.down("ArrowUp")?1:0)-(ct.down("KeyS")||ct.down("ArrowDown")?1:0),r=(ct.down("KeyA")||ct.down("ArrowLeft")?1:0)-(ct.down("KeyD")||ct.down("ArrowRight")?1:0),o=(ct.down("ShiftLeft")?28:17)*(ke("terrain")?1.3:1);i.air||(s>0?i.speed+=(i.speed<0?22:11)*n:s<0?i.speed-=(i.speed>0?22:7)*n:i.speed*=1-.7*n,ct.down("Space")&&(i.speed*=1-3.5*n),i.speed=Ve.clamp(i.speed,-7,o),i.speed>o&&(i.speed-=20*n),i.h+=r*n*1.5*Ve.clamp(i.speed/5,-1,1)),bl.set(-Math.sin(i.h),0,-Math.cos(i.h)),h.stats.driven=(h.stats.driven||0)+Math.abs(i.speed)*n,i.x=Ve.clamp(i.x+bl.x*i.speed*n,-Zt+125,Zt-125),i.z=Ve.clamp(i.z+bl.z*i.speed*n,-Zt+125,Zt-125);for(let c of h.colliders.query(i.x,i.z)){c.kind==="flora"&&Math.abs(i.speed)>0;let u=i.x-c.x,d=i.z-c.z,f=Math.hypot(u,d),p=c.r+1.9;if(f<p&&f>.001){if(c.kind==="rock"&&c.r<1.3)continue;i.x=c.x+u/f*p,i.z=c.z+d/f*p,Math.abs(i.speed)>5&&(Z.play("land"),ut.dustPuff(new T(i.x,i.y+1,i.z),6,2)),i.speed*=-.25}}if(i.hitT-=n,Math.abs(i.speed)>6&&i.hitT<=0)for(let c of h.enemies)c.dead||Math.hypot(c.pos.x-i.x,c.pos.z-i.z)<2.6+c.scale&&(ml(c,Math.abs(i.speed)*4,"player"),i.hitT=.4,i.speed*=.7,ut.burst(new T(c.pos.x,c.pos.y+1,c.pos.z),[1,.5,.2],20,6));let a=xt(i.x,i.z);if(i.air)i.vy-=ht.gravity*n,i.y+=i.vy*n,i.y<=a&&(i.y=a,i.air=!1,i.vy<-5&&(Z.play("land"),ut.dustPuff(new T(i.x,i.y,i.z),14,3)),i.vy=0);else{let c=i.y+i.vy*n-.5*ht.gravity*n*n;if(a<c-.25&&i.vy>1.5&&Math.abs(i.speed)>12)i.air=!0,i.vy=Math.min(i.vy,7),i.y=c;else{let u=(a-i.y)/Math.max(n,.001);i.vy=i.vy*.6+u*.4,i.y=a}}if(zp(n),Math.abs(i.speed)>4&&!i.air&&Math.random()<.6){let c=new T(i.x-bl.x*2.5+(Math.random()-.5)*2,i.y+.3,i.z-bl.z*2.5);ut.dustPuff(c,1,.5)}i.lamp.intensity=h.time.night>.3?80:0;for(let c of i.heads)c.visible=h.time.night>.3;h1.setFromEuler(Hp.set(i.pitch,i.lookYaw,0,"YXZ")),e.quaternion.copy(i.body.getWorldQuaternion(new hn)).multiply(h1);let l=new T(0,2.15,-.7).applyQuaternion(i.g.quaternion).add(i.g.position);e.position.copy(l),e.getWorldDirection(t.fwd),t.pos.set(i.x,i.y,i.z),t.vel.set(0,0,0),t.inLife=!0,t.o2=Math.min(t.maxO2,t.o2+20*n),t.energy=Math.min(100,t.energy+10*n),t.hurtT=Math.max(0,t.hurtT-n),Z.engine(Math.abs(i.speed)/28)}function p1(){return mn?Math.round(Math.abs(mn.speed)*3.6):0}var ma,Bp;function aw(){ma||(Bp=new Yt({color:16758364,transparent:!0,opacity:.35,blending:fe,depthWrite:!1,side:Ge,fog:!1}),ma=new lt(new Wt(.6,1.2,160,16,1,!0),Bp),ma.frustumCulled=!1,h.scene.add(ma))}function lw(){aw();let n=h.waypoint;ma.visible=!!n,n&&(ma.position.set(n.x,xt(n.x,n.z)+80,n.z),Bp.opacity=.22+Math.sin(performance.now()*.004)*.08,Math.hypot(h.player.pos.x-n.x,h.player.pos.z-n.z)<6&&(h.waypoint=null,h.events.emit("toast","\u2713 \u5DF2\u5230\u8FBE\u5BFC\u822A\u70B9"),Z.play("objective")))}var Dh=[],Gp=-1,wl=0,Op=null,m1=[[1,.6,.2],[.5,.9,1],[1,.4,.7],[.7,1,.5],[1,.9,.4],[.8,.6,1]];function cw(n){let t=m1[Math.floor(Math.random()*m1.length)];Dh.push({pos:new T(n.x+(Math.random()-.5)*6,n.y+2,n.z+(Math.random()-.5)*6),vel:new T((Math.random()-.5)*4,34+Math.random()*10,(Math.random()-.5)*4),t:1.3+Math.random()*.6,c:t}),Z.play("jet")}function hw(n){let e=16+Math.random()*8;for(let i=0;i<90;i++){let s=Math.random()*2-1,r=Math.random()*6.283,o=Math.sqrt(1-s*s);ut.firework(n.pos,o*Math.cos(r)*e,s*e,o*Math.sin(r)*e,n.c)}Z.play("kill")}function g1(n){lw();let t=h.time.t;if(wl<=0&&h.time.day%5===0&&Gp!==h.time.day&&t>.74&&t<.8&&h.colony.pop>=4&&(Op=h.buildings.find(e=>e.type==="plaza"&&e.powered),Op&&(Gp=h.time.day,wl=60,h.stats.festivals=(h.stats.festivals||0)+1,h.events.emit("festival"),Ie("\u82CF\u5FF5 \xB7 \u6559\u5E08",`\u4ECA\u5929\u662F\u7B2C ${h.time.day} \u4E2A\u706B\u661F\u65E5\u2014\u2014\u6B96\u6C11\u5730\u8282\uFF01\u5927\u5BB6\u90FD\u5230\u5E7F\u573A\u4E0A\u6765\u4E86\uFF0C\u5B69\u5B50\u4EEC\u8BF4\u8981\u653E\u70DF\u82B1\u7ED9\u5730\u7403\u770B\u3002`))),wl>0){wl-=n,h.festival=!0;let e=Op;e&&Math.random()<n*1.6&&cw({x:e.x,y:e.y,z:e.z})}else h.festival=!1;for(let e=Dh.length-1;e>=0;e--){let i=Dh[e];i.t-=n,i.vel.y-=9*n,i.pos.addScaledVector(i.vel,n);for(let s=0;s<3;s++)ut.trail(i.pos,[1,.85,.6],1.6);i.t<=0&&(hw(i),Dh.splice(e,1))}}function x1(){wl=0,Gp=-1,h.time.day=5,h.time.t=.745}var Ht=n=>document.getElementById(n);h.debug=/[?&]debug/.test(location.search);var Is=Ht("c"),In=new Do({canvas:Is,antialias:!0,powerPreference:"high-performance"});In.setPixelRatio(Math.min(window.devicePixelRatio,1.5));In.setSize(window.innerWidth,window.innerHeight);In.shadowMap.enabled=!0;In.shadowMap.type=$d;In.toneMapping=Dr;In.toneMappingExposure=1;var jr="high";try{jr=localStorage.getItem("starport-quality")||((navigator.hardwareConcurrency||8)<=4?"mid":"high")}catch{}function T1(n,t){jr=n,In.setPixelRatio(n==="high"?Math.min(window.devicePixelRatio,1.5):n==="mid"?1:.75),In.setSize(window.innerWidth,window.innerHeight);let e=n!=="low";In.shadowMap.enabled!==e&&(In.shadowMap.enabled=e,t&&h.scene.traverse(i=>{i.material&&[].concat(i.material).forEach(s=>{s.needsUpdate=!0})})),fi&&(fi.setPixelRatio(In.getPixelRatio()),fi.setSize(window.innerWidth,window.innerHeight))}var fi=null,kh=null;function uw(){fi=new zc(In),fi.addPass(new Fc(Ls,Ce)),kh=new Oo(new nt(window.innerWidth,window.innerHeight),.55,.5,.88),fi.addPass(kh),fi.addPass(new Oc),Hh=new Fo({uniforms:{tDiffuse:{value:null},uT:{value:0},uNight:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uT, uNight; varying vec2 vUv;
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
      }`}),fi.addPass(Hh)}var Hh=null;function Vp(){jr==="high"&&fi?(kh.strength=.3+h.time.night*.22,kh.threshold=.9,Hh.uniforms.uT.value=performance.now()*.001%100,Hh.uniforms.uNight.value=h.time.night,fi.render()):In.render(Ls,Ce)}T1(jr,!1);var Ls=new zi,Ce=new cn(72,window.innerWidth/window.innerHeight,.1,6e3);uw();h.scene=Ls;h.camera=Ce;h.renderer=In;h.colliders=new Bc(16);window.addEventListener("resize",()=>{Ce.aspect=window.innerWidth/window.innerHeight,Ce.updateProjectionMatrix(),In.setSize(window.innerWidth,window.innerHeight),fi&&fi.setSize(window.innerWidth,window.innerHeight)});h.hiShadows=jr==="high";fg(Ls);tg(Ls);pg(Ls);var va=jg();va.group.position.set(pe.x,xt(pe.x,pe.z)+.1,pe.z);va.group.rotation.y=.6;Ls.add(va.group);h.colliders.add({x:pe.x,z:pe.z,r:3.4,kind:"lander"});var $t=new ph(Ce);h.player=$t;yx(Ce);fx(Is);qx(eg(350));Af(Ls);h.requestLock=()=>{if(h.debug){h.locked=!0;return}try{let n=Is.requestPointerLock();n&&n.catch&&n.catch(()=>{})}catch{}};document.addEventListener("pointerlockchange",()=>{h.locked=document.pointerLockElement===Is,!h.locked&&h.started&&!h.menuOpen&&!$t.dead&&!h.endingShown&&!h.cine&&Qi("pause")});Is.addEventListener("click",()=>{Z.init(),h.started&&!h.locked&&!h.menuOpen&&!$t.dead&&h.requestLock()});function Ds(n){if(!h.started)return;let t={v:1,res:h.res,upgrades:h.upgrades,stats:h.stats,chapter:h.chapter,goalDone:h.goalDone,terraform:h.terraform,ended:h.ended,nights:h.nightsSurvived||0,city:h.cityLevel,pop:h.popTotal||0,launched:!!h.launched,rover:u1(),relics:h.relicsFound||[],plazaSeen:!!h.plazaSeen,mode:h.mode,diff:h.diffKey,morale:h.morale,waypoint:h.waypoint||null,tech:h.tech||{},rp:h.rp||0,requests:h.requests||[],time:{t:h.time.t,day:h.time.day},player:{x:$t.pos.x,z:$t.pos.z,yaw:$t.yaw,o2:$t.o2,hp:$t.health},buildings:Jg(),nodes:_g(),colonists:wx(),storm:rx()};try{localStorage.setItem(Vc,JSON.stringify(t)),n||je("\u5DF2\u4FDD\u5B58")}catch{n||je("\u4FDD\u5B58\u5931\u8D25")}}function dw(){try{return JSON.parse(localStorage.getItem(Vc))}catch{return null}}function fw(n){Object.assign(h.res,n.res),h.upgrades=n.upgrades||{},Eg(n.nodes);for(let[t,e,i,s,r,o]of n.buildings)Cn[t]&&oh(t,e,i,s,r,!1,o||1);h.stats=n.stats,h.goalDone=n.goalDone||{},h.terraform=n.terraform||0,h.ended=!!n.ended,h.nightsSurvived=n.nights||0,ax(h.terraform>=1),h.time.t=n.time.t,h.time.day=n.time.day,$t.pos.set(n.player.x,xt(n.player.x,n.player.z),n.player.z),$t.yaw=n.player.yaw,$t.o2=n.player.o2,$t.health=Math.max(30,n.player.hp),Sx(n.colonists||[]),n.rover&&Ih(n.rover.x,n.rover.z,n.rover.h),h.relicsFound=n.relics||[],h.plazaSeen=!!n.plazaSeen,h.morale=n.morale,h.waypoint=n.waypoint||null,h.mode=n.mode||"story",h.diffKey=n.diff||"normal",h.tech=n.tech||{},h.rp=n.rp||0,h.requests=n.requests||[],h.cityLevel=n.city||0,h.popTotal=n.pop??(n.colonists||[]).length,h.launched=!!n.launched,Af(Ls),ox(n.storm),pl(n.chapter,!0),Zi(),h.terraform>0&&xf(R1(),h.terraform)}var R1=()=>h.buildings.filter(n=>n.type==="terraformer").map(n=>({x:n.x,z:n.z})),pw=ht.intro;document.querySelector(".logo span").textContent=ht.title;document.title="\u661F\u6E2F\uFF1A"+ht.title;pn.visited?.length&&(Ht("touch-note").innerHTML="\u5DF2\u5F00\u62D3\uFF1A"+pn.visited.map(n=>`${Hn[n.id].name}\uFF08${n.pop} \u4EBA\uFF09`).join(" \xB7 "));Ht("story").innerHTML=pw.map((n,t)=>`<p style="animation-delay:${.4+t*1.1}s">${n}</p>`).join("");var ti=dw();ti&&(Ht("btn-continue").classList.remove("hidden"),Ht("cont-info").textContent=`${ti.mode==="free"?"\u81EA\u7531":"\u5267\u60C5"} \xB7 ${ht.name} \xB7 ${ui[ti.chapter]?.title||""} \xB7 \u7B2C ${ti.time.day} \u65E5 \xB7 ${ti.pop??ti.colonists?.length??0} \u4F4D\u5C45\u6C11`);matchMedia("(pointer: coarse)").matches&&(Ht("touch-note").innerHTML+="\u672C\u6E38\u620F\u9700\u8981\u952E\u76D8\u548C\u9F20\u6807\uFF0C\u8BF7\u5728\u7535\u8111\u4E0A\u6E38\u73A9\u3002");function mw(n){if(h.debug){setTimeout(n,1200);return}let t=Ht("cine"),e=ht.intro;h.cine=!0,t.classList.remove("hidden","out"),Ht("cine-lines").innerHTML=e.map((o,a)=>`<p style="animation-delay:${.6+a*2.1}s">${o}</p>`).join("");let i=!1,s=()=>{i||(i=!0,t.classList.add("out"),h.cine=!1,window.removeEventListener("keydown",r),window.removeEventListener("mousedown",s),setTimeout(()=>t.classList.add("hidden"),1500),setTimeout(n,900))},r=o=>{(o.code==="Space"||o.code==="Escape"||o.code==="Enter")&&s()};window.addEventListener("keydown",r),window.addEventListener("mousedown",s),setTimeout(s,1500+e.length*2100+1800)}function Ma(n){if(Z.init(),n&&ti)fw(ti);else{if(localStorage.removeItem(Vc),yg(),pn.carry&&ne!=="mars"){Object.assign(h.upgrades,pn.carry.upgrades||{});for(let t in pn.carry.res)h.res[t]+=pn.carry.res[t];h.upgrades.rover&&Ih(pe.x+10,pe.z+4,.5),setTimeout(()=>je("\u968F\u8230\u7269\u8D44\u5DF2\u5378\u8F7D\uFF0C\u6240\u6709\u88C5\u5907\u5DF2\u540C\u6B65"),4e3)}h.time.t=.29,h.mode=h.mode||"story",h.diffKey=h.diffKey||"normal",pl(0,!0),Vn()?E1(()=>{Zr({k:"FREE MODE",title:ht.name,sub:`\u81EA\u7531\u5F00\u62D3 \xB7 ${Ko[h.diffKey].name}`}),Ie("\u65B9\u821F \xB7 AI","\u81EA\u7531\u6A21\u5F0F\u5DF2\u542F\u52A8\u3002\u6CA1\u6709\u4EFB\u52A1\u6E05\u5355\uFF0C\u8FD9\u7247\u571F\u5730\u5B8C\u5168\u5C5E\u4E8E\u4F60\u3002\u5EFA\u597D\u7B2C\u4E00\u5EA7\u8BBE\u65BD\u540E\uFF0C\u5C45\u6C11\u548C\u6307\u6325\u4E2D\u5FC3\u4F1A\u9646\u7EED\u63D0\u51FA\u59D4\u6258\u3002"),Ie("\u65B9\u821F \xB7 AI","\u63D0\u793A\uFF1AB \u5EFA\u9020\uFF0CT \u79D1\u7814\uFF0CTab \u6B96\u6C11\u5730\u6863\u6848\u3002\u795D\u4F60\u597D\u8FD0\u3002")}):mw(()=>E1(()=>{Zr(ui[0]),ui[0].radio.forEach(t=>Ie(t[0],t[1]))}))}Ax(),l1(),jr!=="low"&&ag(),Ht("intro").classList.add("hidden"),document.body.classList.add("playing"),h.started=!0,h.requestLock()}var Qn={mode:"story",diff:"normal",planet:"mars"};function Zp(){let n=(e,i,s,r,o)=>`<button class="opt ${o?"on":""}" data-g="${e}" data-k="${i}"><b>${s}</b><span>${r}</span></button>`,t=Qn.mode==="free"?`<h3>\u661F\u7403</h3><div class="opts">${Object.values(Hn).map(e=>n("planet",e.id,e.name,e.title+" \xB7 "+e.place,Qn.planet===e.id)).join("")}</div>`:'<p class="sm">\u5267\u60C5\u4ECE\u706B\u661F\u5F00\u59CB\u3002\u5B8C\u6210\u6BCF\u9897\u661F\u7403\u7684\u6545\u4E8B\u540E\uFF0C\u4E58\u6B96\u6C11\u8230\u524D\u5F80\u4E0B\u4E00\u9897\u3002</p>';Ht("intro-pane").innerHTML=`<h3>\u6A21\u5F0F</h3><div class="opts">${Object.entries(Ig).map(([e,i])=>n("mode",e,i.name,i.desc,Qn.mode===e)).join("")}</div>
    <h3>\u96BE\u5EA6</h3><div class="opts three">${Object.entries(Ko).map(([e,i])=>n("diff",e,i.name,i.desc,Qn.diff===e)).join("")}</div>
    ${t}
    <button class="launch" id="btn-launch">\u51FA\u53D1</button>`,Ht("intro-pane").dataset.k="setup",Ht("intro-pane").classList.remove("hidden"),Ht("intro-pane").querySelectorAll(".opt").forEach(e=>e.addEventListener("click",()=>{Qn[e.dataset.g]=e.dataset.k,e.dataset.g==="mode"&&e.dataset.k==="story"&&(Qn.planet="mars"),Z.play("tick"),Zp()})),Ht("btn-launch").addEventListener("click",gw)}function gw(){let n=Qn.mode==="story"?"mars":Qn.planet;if(Qn.mode==="story"){if((pn.visited?.length||ti)&&!confirm("\u5267\u60C5\u6A21\u5F0F\u4F1A\u4ECE\u706B\u661F\u91CD\u65B0\u5F00\u59CB\uFF0C\u5E76\u6E05\u9664\u6240\u6709\u661F\u7403\u7684\u8FDB\u5EA6\u3002\u786E\u5B9A\u5417\uFF1F"))return;ff()}else{if(zh(n)&&!confirm(`\u5C06\u8986\u76D6 ${Hn[n].name} \u7684\u73B0\u6709\u5B58\u6863\uFF0C\u786E\u5B9A\u5417\uFF1F`))return;try{localStorage.removeItem(n==="mars"?"starport-newhome-v1":"starport-planet-"+n)}catch{}let e=er();delete e.carry,e.planet=n,Ya(e)}if(n===ne){h.mode=Qn.mode,h.diffKey=Qn.diff,Ma(!1);return}try{localStorage.setItem("starport-newgame",JSON.stringify({mode:Qn.mode,diff:Qn.diff}))}catch{}let t=er();t.planet=n,Ya(t),location.href=location.pathname+(h.debug?"?debug":"")}Ht("btn-new").addEventListener("click",()=>{if(Z.init(),ne!=="mars"&&!ti&&pn.visited?.length&&!pn.freshFree){h.mode=pn.mode||"story",h.diffKey=pn.diff||"normal",Ma(!1);return}Zp()});try{let n=JSON.parse(localStorage.getItem("starport-newgame"));n&&(localStorage.removeItem("starport-newgame"),h.mode=n.mode,h.diffKey=n.diff,setTimeout(()=>Ma(!1),60))}catch{}Ht("btn-continue").addEventListener("click",()=>Ma(!0));Ht("tele-planet").textContent=`${ht.name} \xB7 ${ht.place}`;var xw=`<h3>\u64CD\u4F5C</h3><div class="keys">
  <div><kbd>W A S D</kbd><span>\u79FB\u52A8</span></div><div><kbd>\u9F20\u6807</kbd><span>\u73AF\u89C6</span></div>
  <div><kbd>Shift</kbd><span>\u51B2\u523A</span></div><div><kbd>\u7A7A\u683C</kbd><span>\u8DF3\u8DC3 / \u55B7\u6C14\u80CC\u5305</span></div>
  <div><kbd>\u5DE6\u952E</kbd><span>\u91C7\u77FF \xB7 \u5C04\u51FB \xB7 \u653E\u7F6E\u5EFA\u7B51</span></div><div><kbd>\u53F3\u952E</kbd><span>\u53D6\u6D88\u5EFA\u9020</span></div>
  <div><kbd>1</kbd><kbd>2</kbd><span>\u5207\u6362\u5DE5\u5177</span></div><div><kbd>B</kbd><span>\u5EFA\u9020\u84DD\u56FE</span></div>
  <div><kbd>E</kbd><span>\u4E92\u52A8 \xB7 \u4EA4\u8C08 \xB7 \u4E0A\u8F66</span></div><div><kbd>U</kbd><span>\u5347\u7EA7\u6CE8\u89C6\u7684\u5EFA\u7B51</span></div><div><kbd>T</kbd><span>\u79D1\u7814</span></div>
  <div><kbd>Q</kbd><span>\u5C0F\u661F\u626B\u63CF\u77FF\u85CF</span></div><div><kbd>M</kbd><span>\u661F\u7403\u5730\u56FE / \u5BFC\u822A</span></div><div><kbd>F</kbd><span>\u624B\u7535\u7B52</span></div><div><kbd>Tab</kbd><span>\u6B96\u6C11\u5730\u6863\u6848</span></div>
  <div><kbd>P</kbd><span>\u62CD\u7167\u6A21\u5F0F</span></div><div><kbd>Esc</kbd><span>\u6682\u505C</span></div></div>
  <h3>\u751F\u5B58</h3><p>\u6C27\u6C14\u4F1A\u6301\u7EED\u6D88\u8017\u3002\u7740\u9646\u8231\u3001\u5236\u6C27\u7AD9\u548C\u5C45\u4F4F\u7A79\u9876\u9644\u8FD1\u4F1A\u81EA\u52A8\u8865\u6C27\u3002\u5EFA\u597D\u4F4F\u623F\u3001\u6C27\u6C14\u3001\u98DF\u7269\u3001\u6C34\u548C\u7740\u9646\u573A\uFF0C\u79FB\u6C11\u98DE\u8239\u5C31\u4F1A\u5230\u6765\u3002\u591C\u91CC\u8981\u63D0\u9632\u9508\u8680\u86DB\u3002</p>`,A1=n=>{let t=Ht("intro-pane");if(!t.classList.contains("hidden")&&t.dataset.k===n.slice(0,20)){t.classList.add("hidden");return}t.dataset.k=n.slice(0,20),t.innerHTML=n,t.classList.remove("hidden"),Z.play("tick")};Ht("btn-t-help").addEventListener("click",()=>A1(xw));Ht("btn-t-achv").addEventListener("click",()=>A1(Ip()));ne!=="mars"&&!ti&&(Ht("btn-new").textContent=`\u767B\u9646 ${ht.name}`);ne!=="mars"&&!ti&&pn.visited?.length&&Ht("btn-setup").classList.remove("hidden");Ht("btn-setup").addEventListener("click",()=>{Z.init(),Zp()});if(pn.autoResume&&ti){let n=er();delete n.autoResume,Ya(n),setTimeout(()=>{Ma(!0),je(`\u6B22\u8FCE\u56DE\u6765 \xB7 ${ht.name}`)},50)}Ht("btn-save").addEventListener("click",()=>Ds(!1));Ht("btn-archive").addEventListener("click",()=>wp(Rp()));Ht("btn-achv").addEventListener("click",()=>wp(Ip()));Ht("btn-restart").addEventListener("click",()=>{confirm("\u5C06\u5220\u9664\u6240\u6709\u661F\u7403\u7684\u8FDB\u5EA6\uFF0C\u4ECE\u706B\u661F\u91CD\u65B0\u5F00\u59CB\u3002\u786E\u5B9A\u5417\uFF1F")&&(ff(),h.started=!1,location.href=location.pathname+(h.debug?"?debug":""))});Ht("vol").addEventListener("input",n=>Z.setVolume(+n.target.value));Ht("quality").value=jr;h.baseFov=72;try{let n=+localStorage.getItem("starport-fov");n>=60&&n<=100&&(h.baseFov=n,Ce.fov=n,Ce.updateProjectionMatrix(),Ht("fov").value=n)}catch{}Ht("fov").addEventListener("input",n=>{h.baseFov=+n.target.value,Ce.fov=+n.target.value,Ce.updateProjectionMatrix();try{localStorage.setItem("starport-fov",n.target.value)}catch{}});Ht("quality").addEventListener("change",n=>{T1(n.target.value,!0);try{localStorage.setItem("starport-quality",n.target.value)}catch{}});Ht("sens").addEventListener("input",n=>{ct.sens=+n.target.value});Ht("btn-respawn").addEventListener("click",()=>{h.driving&&Fp($t),$t.respawn(),Ht("death").classList.add("hidden"),h.requestLock()});Ht("btn-endcont").addEventListener("click",()=>{Ht("ending").classList.add("hidden"),h.endingShown=!1,h.requestLock()});h.events.on("chapter",n=>Zr(n));da.unlocked=n=>Ki(n).ok;da.relicLeft=()=>Ji().found<Ji().total;da.relicFound=()=>Ji().found;h.events.on("request",n=>{je(`\u65B0\u59D4\u6258\uFF1A${n.text}`,"radio"),Ie(`${n.giver} \xB7 \u59D4\u6258`,n.line)});h.events.on("requestDone",n=>{je(`\u59D4\u6258\u5B8C\u6210\uFF1A${n.text}`,"check","good"),Ie(n.giver,["\u8C22\u8C22\u4F60\uFF01\u8FD9\u5E2E\u4E86\u5927\u5FD9\u3002","\u592A\u597D\u4E86\uFF0C\u5927\u5BB6\u90FD\u4F1A\u8BB0\u5F97\u7684\u3002","\u8F9B\u82E6\u4E86\uFF01\u8FD9\u662F\u4E00\u70B9\u5FC3\u610F\u3002"][Math.floor(Math.random()*3)])});h.events.on("researched",n=>{(n==="swarm"||n==="alloy")&&Zi()});h.events.on("crafted",n=>{if(n!=="rover")return;let t=h.buildings.find(i=>i.type==="fabricator"),e=t||$t.pos;for(let i=0;i<12;i++){let s=i*.9,r=(t?t.def.r:0)+5+i,o=e.x+Math.cos(s)*r,a=e.z+Math.sin(s)*r;if(!h.colliders.overlaps(o,a,2.6)){Ih(o,a,-s);break}}Ie("\u65B9\u821F \xB7 AI","\u6F2B\u6E38\u8F66\u5DF2\u51FA\u5382\u3002\u8F66\u8231\u52A0\u538B\uFF0C\u53EF\u4EE5\u5728\u8F66\u91CC\u8865\u6C27\u3002\u5C0F\u5FC3\u522B\u5F00\u4E0B\u60AC\u5D16\u3002")});h.events.on("cityLevel",n=>{Zr({k:`COLONY LEVEL ${["I","II","III","IV","V","VI"][h.cityLevel]}`,title:n.name,sub:`\u57CE\u5E02\u5347\u7EA7 \xB7 \u9886\u5730\u6269\u5C55\u81F3 ${n.r} \u7C73`});let t={1:["\u65B9\u821F \xB7 AI","\u6B96\u6C11\u5730\u5347\u7EA7\u4E3A\u5B9A\u5C45\u70B9\u3002\u9886\u5730\u6269\u5927\u4E86\uFF0C\u66F4\u8FDC\u7684\u571F\u5730\u53EF\u4EE5\u5EFA\u9020\u4E86\u3002"],2:["\u65B9\u821F \xB7 AI","\u5C0F\u9547\u89C4\u6A21\u8FBE\u6210\u3002\u516C\u5BD3\u5854\u4E0E\u5782\u76F4\u519C\u573A\u7684\u8BBE\u8BA1\u56FE\u5DF2\u89E3\u9501\u3002"],3:["\u65B9\u821F \xB7 AI","\u8FD9\u91CC\u5DF2\u7ECF\u662F\u4E00\u5EA7\u57CE\u5E02\u4E86\u3002\u751F\u6001\u4E2D\u67A2\u7684\u8BBE\u8BA1\u56FE\u5DF2\u89E3\u9501\u3002"],4:["\u65B9\u821F \xB7 AI","\u5927\u90FD\u4F1A\u3002\u591C\u91CC\uFF0C\u4ECE\u8F68\u9053\u4E0A\u80FD\u770B\u89C1\u4F60\u4EEC\u7684\u706F\u5149\u3002"],5:["\u65B9\u821F \xB7 AI","\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C\u661F\u6E2F\u300D\u2014\u2014\u4EBA\u7C7B\u53EF\u4EE5\u4ECE\u8FD9\u91CC\u98DE\u5411\u4E0B\u4E00\u9897\u661F\u7403\u4E86\u3002"]}[h.cityLevel];t&&Ie(t[0],t[1]),Ds(!0)});h.events.on("openBuild",()=>Qi("build"));h.events.on("death",n=>{Z.laser(!1),setTimeout(()=>{if(h.endingShown){$t.respawn();return}Ht("death-why").textContent=n,Ht("death").classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock()},1500)});h.events.on("tide",n=>{Z.play("night"),Zr({k:"CRYSTAL TIDE",title:"\u6676\u6F6E\u4E4B\u591C",sub:`\u96F7\u8FBE\u63A2\u6D4B\u5230\u7EA6 ${n} \u4E2A\u4FE1\u53F7 \xB7 \u5B88\u4F4F\u6B96\u6C11\u5730`}),Ie("\u65B9\u821F \xB7 AI","\u8B66\u544A\uFF1A\u6676\u6F6E\u6B63\u5728\u903C\u8FD1\u3002\u6570\u91CF\u662F\u5E73\u65F6\u7684\u4E24\u500D\u2026\u2026\u5730\u9707\u4EEA\u8FD8\u8BB0\u5F55\u5230\u4E00\u4E2A\u5DE8\u5927\u7684\u4FE1\u53F7\uFF0C\u5B83\u6B63\u5728\u5411\u5730\u8868\u79FB\u52A8\u3002")});h.events.on("bossSpawn",()=>{je("\u6676\u6BCD\u7834\u571F\u800C\u51FA","boss","warn"),Ie("\u65B9\u821F \xB7 AI","\u662F\u6676\u6BCD\uFF01\u4F53\u957F\u8D85\u8FC7\u5341\u7C73\u3002\u5B83\u7684\u51B2\u51FB\u6CE2\u80FD\u9707\u788E\u5EFA\u7B51\u2014\u2014\u7528\u6B65\u67AA\u548C\u70AE\u5854\u96C6\u4E2D\u706B\u529B\uFF01")});h.events.on("bossDown",()=>{je("\u6676\u6BCD\u9668\u843D","boss","good"),Ie("\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u2026\u2026\u4F60\u4EEC\u505A\u5230\u4E86\u3002\u6574\u4E2A\u6307\u6325\u4E2D\u5FC3\u90FD\u5728\u6B22\u547C\u3002\u5B83\u7684\u6838\u5FC3\u91CC\u6709\u5927\u91CF\u7684\u949B\uFF0C\u62FF\u53BB\u5EFA\u8BBE\u5427\u3002")});var y1=!0;h.events.on("nightfall",n=>{Z.play("night"),je(`\u591C\u5E55\u964D\u4E34 \xB7 \u7EA6 ${n} \u4E2A\u79FB\u52A8\u4FE1\u53F7\u63A5\u8FD1`,"moon","warn"),y1&&(y1=!1,Ie("\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5B83\u4EEC\u6765\u4E86\u3002\u9508\u8680\u86DB\u4F1A\u653B\u51FB\u5EFA\u7B51\u548C\u4EBA\u3002\u7528\u6FC0\u5149\u6216\u6B65\u67AA\u51FB\u9000\u5B83\u4EEC\u2014\u2014\u5B83\u4EEC\u7684\u6676\u4F53\u6B8B\u9AB8\u91CC\u542B\u6709\u949B\u3002"))});h.events.on("broken",n=>je(`${n.def.name} \u53D7\u635F\u505C\u673A\uFF0C\u767D\u5929\u4F1A\u81EA\u52A8\u4FEE\u590D`,"warn","warn"));var v1=!0;h.events.on("shuttleIncoming",n=>je(`\u79FB\u6C11\u98DE\u8239\u6B63\u5728\u964D\u843D \xB7 ${n} \u4EBA`,"ship"));h.events.on("colonistsArrived",n=>{n.length&&(je(`\u6B22\u8FCE\u56DE\u5BB6\uFF1A${n.map(t=>t.name).join("\u3001")}`),v1&&h.stats.arrived<=4&&(v1=!1,Ie(n[0].name,"\u4F60\u597D\u2026\u2026\u8FD9\u5C31\u662F\u706B\u661F\uFF1F\u6BD4\u7167\u7247\u4E0A\u8FD8\u8981\u7EA2\u3002\u8C22\u8C22\u4F60\uFF0C\u4E3A\u6211\u4EEC\u70B9\u4EAE\u4E86\u8FD9\u91CC\u7684\u706F\u3002")))});var yw={habitat:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5C45\u4F4F\u7A79\u9876\u52A0\u538B\u5B8C\u6210\u3002\u5BA4\u5185\u6E29\u5EA6 21 \u6444\u6C0F\u5EA6\uFF0C\u6E7F\u5EA6 45%\u3002\u8FD9\u662F\u706B\u661F\u4E0A\u7B2C\u4E00\u4E2A\u53EF\u4EE5\u8131\u4E0B\u5934\u76D4\u7684\u5730\u65B9\u3002"],greenhouse:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u6E29\u5BA4\u542F\u52A8\u3002\u7B2C\u4E00\u6279\u79CD\u5B50\u5DF2\u7ECF\u64AD\u4E0B\uFF1A\u571F\u8C46\u3001\u5C0F\u9EA6\u3001\u756A\u8304\u2026\u2026\u548C\u4E00\u682A\u5411\u65E5\u8475\u3002"],beacon:["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u6536\u5230\u7740\u9646\u573A\u7684\u4FE1\u6807\u4FE1\u53F7\u4E86\uFF01\u53EA\u8981\u6B96\u6C11\u5730\u80FD\u517B\u6D3B\u4ED6\u4EEC\uFF0C\u79FB\u6C11\u98DE\u8239\u5C31\u4F1A\u51FA\u53D1\u3002"],reactor:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u805A\u53D8\u53CD\u5E94\u5806\u70B9\u706B\u6210\u529F\u3002\u8F93\u51FA\u7A33\u5B9A\u3002"],terraformer:["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5927\u6C14\u6539\u9020\u5854\u2026\u2026\u542F\u52A8\u4E86\u3002\u6211\u4EEC\u89C1\u8BC1\u7684\uFF0C\u662F\u4E00\u9897\u661F\u7403\u7684\u82CF\u9192\u3002"],apartment:["\u65B9\u821F \xB7 AI","\u7B2C\u4E00\u5EA7\u516C\u5BD3\u5854\u843D\u6210\u3002\u57CE\u5E02\u5F00\u59CB\u5411\u5929\u7A7A\u751F\u957F\u3002"],launch:["\u65B9\u821F \xB7 AI","\u661F\u9645\u53D1\u5C04\u53F0\u5B8C\u5DE5\u3002\u6B96\u6C11\u8230\u5DF2\u52A0\u6CE8\u5B8C\u6BD5\uFF0C\u968F\u65F6\u53EF\u4EE5\u51FA\u53D1\u3002"],monument:["\u65B9\u821F \xB7 AI","\u7EAA\u5FF5\u7891\u4E0A\u523B\u7740\u4E00\u884C\u5B57\uFF1A\u300C\u81F4\u7B2C\u4E00\u4E2A\u51FA\u53D1\u7684\u4EBA\u300D\u3002"],turret:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u9632\u5FA1\u70AE\u5854\u4E0A\u7EBF\u3002\u5B83\u4EEC\u9700\u8981\u7535\u529B\u624D\u80FD\u8FD0\u8F6C\u3002"],fabricator:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5236\u9020\u5DE5\u574A\u5C31\u7EEA\u3002\u9760\u8FD1\u540E\u6309 E \u6253\u5F00\u3002"]};h.events.on("built",n=>{let t=yw[n.type];t&&h.stats.built[n.type]===1&&Ie(t[0],t[1]),n.type==="monument"&&h.stats.built.monument===1&&setTimeout(Tw,6e3),Ds(!0)});h.events.on("ending",()=>{Ie("Nadia Volkova","\u5927\u5BB6\u5FEB\u51FA\u6765\u770B\uFF01\u5929\u7A7A\u2026\u2026\u5929\u7A7A\u53D8\u84DD\u4E86\uFF01"),Ie("\u8D75\u5C0F\u96E8","\u4E0B\u96E8\u4E86\uFF01\u8FD9\u662F\u706B\u661F\u4E0A\u7684\u7B2C\u4E00\u573A\u96E8\uFF01"),setTimeout(vw,14e3)});function vw(){h.ended=!0,h.endingShown=!0,$t.dead&&$t.respawn(),Ht("death").classList.add("hidden"),document.pointerLockElement&&document.exitPointerLock();let n=h.stats,t=["\u4ECE\u7740\u9646\u8231\u7684\u8231\u95E8\u7B2C\u4E00\u6B21\u6253\u5F00\uFF0C\u5230\u4ECA\u5929\uFF0C\u8FC7\u53BB\u4E86 "+h.time.day+" \u4E2A\u706B\u661F\u65E5\u3002","\u66FE\u7ECF\u53EA\u6709\u98CE\u58F0\u7684\u5E73\u539F\u4E0A\uFF0C\u5982\u4ECA\u4F4F\u7740 "+h.colony.pop+" \u4E2A\u4EBA\u3002","\u4ED6\u4EEC\u6765\u81EA\u5730\u7403\u4E0A\u4E0D\u540C\u7684\u56FD\u5BB6\uFF0C\u8BF4\u7740\u4E0D\u540C\u7684\u8BED\u8A00\u3002","\u4F46\u4ECE\u4ECA\u5929\u8D77\uFF0C\u4ED6\u4EEC\u6709\u4E86\u540C\u4E00\u4E2A\u5730\u5740\u3002",'<div class="big">\u706B\u661F \xB7 \u65B0\u5BB6\u56ED</div>',"\u5B69\u5B50\u4EEC\u7B2C\u4E00\u6B21\u5728\u706B\u661F\u4E0A\uFF0C\u770B\u89C1\u4E86\u84DD\u8272\u7684\u5929\u7A7A\u3002",`<span class="stats">\u91C7\u96C6\u8D44\u6E90 ${n.mined.iron+n.mined.silicon+n.mined.ice+n.mined.titanium} \xB7 \u5EFA\u9020\u8BBE\u65BD ${h.buildings.length} \xB7 \u51FB\u9000\u9508\u8680\u86DB ${n.kills} \xB7 \u8FCE\u63A5\u79FB\u6C11 ${n.arrived}</span>`];Ht("ending-text").innerHTML=t.map((e,i)=>`<p style="animation-delay:${i*1.6}s">${e}</p>`).join(""),Ht("ending").classList.remove("hidden"),Z.play("chapter"),Ds(!0)}window.addEventListener("keydown",n=>{if(h.started){if(Kx(n),n.code==="Tab"&&!h.endingShown&&!$t.dead){h.menuOpen==="archive"?Pn(!0):h.menuOpen||Qi("archive");return}if(n.code==="KeyM"&&!h.endingShown&&!$t.dead){h.menuOpen==="mapscr"?Pn(!0):h.menuOpen||Qi("mapscr");return}if(h.menuOpen==="mapscr"&&n.code==="Escape"){Pn(!0);return}if(n.code==="KeyT"&&!h.endingShown&&!$t.dead){h.menuOpen==="research"?Pn(!0):h.menuOpen||Qi("research");return}if(h.menuOpen==="research"&&n.code==="Escape"){Pn(!0);return}if(h.menuOpen==="trade"&&(n.code==="Escape"||n.code==="KeyE")){Pn(!0);return}if(n.code==="KeyP"&&!h.menuOpen){h.photo=!h.photo,h.usedPhoto=!0,document.body.classList.toggle("photo",h.photo),_1(h.photo?qp:0),Z.play("tick");return}if(h.photo&&!h.menuOpen){let t=["Digit1","Digit2","Digit3","Digit4"].indexOf(n.code);if(t>=0){qp=t,_1(t),Z.play("tick"),n.stopImmediatePropagation();return}if(n.code==="Enter"){h.snap=!0;return}}if(h.menuOpen==="archive"&&n.code==="Escape"){Pn(!0);return}h.menuOpen==="build"&&(n.code==="Escape"||n.code==="KeyB")?(Pn(!0),h.locked||void 0):h.menuOpen==="craft"&&(n.code==="Escape"||n.code==="KeyE")?Pn(!0):h.menuOpen==="starmap"&&n.code==="Escape"&&Pn(!0)}});var ga=0,Wp=30,$p=0,M1=0,ya={};try{ya=JSON.parse(localStorage.getItem("starport-hints"))||{}}catch{}var xa=null,Xp=0,Sl=0,Mw=[{id:"move",text:"<kbd>W A S D</kbd>\u79FB\u52A8\u3000<kbd>Shift</kbd>\u51B2\u523A<br><kbd>\u9F20\u6807</kbd>\u73AF\u89C6\u3000<kbd>\u7A7A\u683C</kbd>\u8DF3\u8DC3",when:()=>Sl>.5&&Sl<40},{id:"mine",text:"\u5BF9\u51C6\u53D1\u5149\u7684\u77FF\u77F3\uFF0C<kbd>\u6309\u4F4F\u5DE6\u952E</kbd> \u7528\u91C7\u77FF\u6FC0\u5149\u91C7\u96C6",when:()=>Sl>6&&h.stats.mined.iron+h.stats.mined.silicon===0},{id:"build",text:"\u8D44\u6E90\u591F\u4E86\uFF01\u6309 <kbd>B</kbd> \u6253\u5F00\u5EFA\u9020\u83DC\u5355",when:()=>h.buildings.length===0&&h.res.iron>=8&&h.res.silicon>=6},{id:"o2",text:"\u6C27\u6C14\u5728\u6301\u7EED\u6D88\u8017\u3002\u56DE\u5230\u7740\u9646\u8231\u6216\u5236\u6C27\u7AD9\u9644\u8FD1\u4F1A\u81EA\u52A8\u8865\u6C27",when:()=>!$t.inLife&&$t.o2<$t.maxO2*.5},{id:"night",text:"\u5929\u9ED1\u4E86\uFF0C\u6309 <kbd>F</kbd> \u6253\u5F00\u624B\u7535\u7B52",when:()=>h.time.night>.6&&!$t.flashlight},{id:"craft",text:"\u9760\u8FD1\u5236\u9020\u5DE5\u574A\u6309 <kbd>E</kbd> \u5236\u9020\u6B66\u5668\u548C\u88C5\u5907\u2014\u2014\u8BD5\u8BD5\u52A0\u538B\u6F2B\u6E38\u8F66",when:()=>h.buildings.some(n=>n.type==="fabricator")&&!h.upgrades.rifle},{id:"drive",text:"\u6F2B\u6E38\u8F66\u5C31\u5728\u9644\u8FD1\uFF0C\u8D70\u8FC7\u53BB\u6309 <kbd>E</kbd> \u4E0A\u8F66",when:()=>Lh()&&!h.driving&&!ya.drove},{id:"research",text:"\u7814\u7A76\u6240\u5DF2\u5EFA\u6210\uFF0C\u6309 <kbd>T</kbd> \u7528\u79D1\u7814\u70B9\u6570\u89E3\u9501\u79D1\u6280",when:()=>h.buildings.some(n=>n.type==="lab")&&(h.rp||0)>=20},{id:"request",text:"\u5C45\u6C11\u63D0\u51FA\u4E86\u59D4\u6258\uFF08\u53F3\u4FA7\u4EFB\u52A1\u680F\uFF09\uFF0C\u5B8C\u6210\u540E\u6709\u5956\u52B1",when:()=>(h.requests||[]).length>0},{id:"map",text:"\u6309 <kbd>M</kbd> \u6253\u5F00\u661F\u7403\u5730\u56FE\uFF0C\u70B9\u51FB\u53EF\u8BBE\u7F6E\u5BFC\u822A\u70B9",when:()=>Sl>90},{id:"talk",text:"\u5BF9\u51C6\u5C45\u6C11\u6309 <kbd>E</kbd>\uFF0C\u542C\u542C\u4ED6\u4EEC\u7684\u6545\u4E8B",when:()=>h.colonists.some(n=>n.pos.distanceTo($t.pos)<10)},{id:"level",text:"\u4EBA\u53E3\u548C\u8BBE\u65BD\u8D8A\u591A\uFF0C\u57CE\u5E02\u7B49\u7EA7\u8D8A\u9AD8\uFF0C\u9886\u5730\u4E5F\u4F1A\u6269\u5927\uFF08\u770B\u5DE6\u4E0A\u89D2\uFF09",when:()=>h.colony.pop>=2}];function _w(n){if(Sl+=n,h.driving&&(ya.drove=!0),xa)if(Xp-=n,Xp<=0||!xa.when()){ya[xa.id]=!0,xa=null;try{localStorage.setItem("starport-hints",JSON.stringify(ya))}catch{}}else return xa.text;for(let t of Mw)if(!ya[t.id]&&t.when())return xa=t,Xp=12,t.text;return""}function C1(){let n=er(),t=new Map((n.visited||[]).map(i=>[i.id,i])),e=[];ht.next&&e.push({id:ht.next,fresh:!t.has(ht.next)&&!zh(ht.next)});for(let i of Object.keys(Hn))i!==ne&&i!==ht.next&&(t.has(i)||zh(i))&&e.push({id:i,fresh:!1,info:t.get(i)});return e}function zh(n){try{return!!localStorage.getItem(n==="mars"?"starport-newhome-v1":"starport-planet-"+n)}catch{return!1}}function Ew(n){Qi("starmap"),Ht("starmap-list").innerHTML=C1().map(t=>{let e=Hn[t.id],i={mars:"MARS",europa:"EUROPA",kepler:"KEPLER-442b"}[t.id];return`<div class="dest" data-id="${t.id}"><div class="orb ${t.id}"></div><span class="badge ${t.fresh?"new":"home"}">${t.fresh?"UNCHARTED":"COLONY"}</span>
      <div class="dn">${e.name}</div><div class="de">${i}</div>
      <div class="dst">${e.title} \xB7 ${e.place}${t.info?`<br>\u5C45\u6C11 ${t.info.pop} \u4EBA \xB7 \u7B2C ${t.info.day} \u65E5\u79BB\u5F00`:""}${t.fresh?"<br>\u88C5\u5907\u540C\u6B65 \xB7 \u643A\u5E26\u90E8\u5206\u7269\u8D44":"<br>\u56DE\u5230\u4F60\u5EFA\u7ACB\u7684\u57CE\u5E02"}</div></div>`}).join(""),Ht("starmap-list").querySelectorAll(".dest").forEach(t=>t.addEventListener("click",()=>{Pn(!0),bw(n,t.dataset.id)}))}function bw(n,t){h.launching={b:n,t:0,dest:t},h.launched=!0,Z.play("rumble"),Ie("\u65B9\u821F \xB7 AI",`\u6B96\u6C11\u8230\u70B9\u706B\u3002\u76EE\u6807\uFF1A${Hn[t].name}\u3002\u5168\u4F53\u4E58\u5458\uFF0C\u795D\u4F60\u4EEC\u597D\u8FD0\u3002`),n.anim.flame.visible=!0}function ww(n){let t=h.launching;if(!t)return;t.t+=n;let e=t.b.anim.ship;t.t>2&&(e.position.y+=n*(2+(t.t-2)*9));let i=new T(t.b.x,t.b.y+e.position.y,t.b.z);for(let s=0;s<6;s++)ut.flame(i);t.t<5&&ut.dustPuff(new T(t.b.x+(Math.random()-.5)*16,t.b.y+1,t.b.z+(Math.random()-.5)*16),3,4),$t.landDip=Math.max($t.landDip,Math.min(.15,.03*t.t)*Math.random()),t.t>9&&!t.faded&&(t.faded=!0,Ht("fade").classList.add("on")),t.t>11.5&&!t.done&&(t.done=!0,Sw(t.dest))}function Sw(n){let t=er();t.visited=(t.visited||[]).filter(s=>s.id!==ne).concat([{id:ne,pop:h.colony.pop,day:h.time.day}]),t.planet=n,t.mode=h.mode||"story",t.diff=h.diffKey||"normal",t.autoResume=zh(n);let e={};for(let s in h.res)e[s]=Math.min(Math.floor(h.res[s]*.4),80);t.carry={upgrades:h.upgrades,res:e},Ds(!0),Ya(t);let i=Hn[n];Ht("ending-text").innerHTML=["\u66F2\u901F\u822A\u884C\u4E2D\u2026\u2026",`\u76EE\u7684\u5730\uFF1A<b>${i.name}</b>${t.autoResume?"\uFF08\u5DF2\u5F00\u62D3\uFF09":""}`,`<span class="stats">${ht.name}\u7684 ${h.colony.pop} \u4F4D\u5C45\u6C11\uFF0C\u4F1A\u66FF\u4F60\u5B88\u7740\u90A3\u91CC\u7684\u706F\u706B\u3002</span>`].map((s,r)=>`<p style="animation-delay:${r*1.2}s">${s}</p>`).join(""),document.querySelector("#ending .btns").classList.add("hidden"),Ht("ending").classList.remove("hidden"),Ht("fade").classList.remove("on"),h.endingShown=!0,document.pointerLockElement&&document.exitPointerLock(),setTimeout(()=>{location.href=location.pathname+(h.debug?"?debug":"")},5e3)}function Tw(){h.endingShown=!0,document.pointerLockElement&&document.exitPointerLock();let t=(er().visited||[]).concat([{id:ne,pop:h.colony.pop}]),e=t.reduce((s,r)=>s+r.pop,0),i=["\u5F88\u4E45\u5F88\u4E45\u4EE5\u524D\uFF0C\u4E00\u4E2A\u4EBA\u72EC\u81EA\u7AD9\u5728\u706B\u661F\u7684\u7EA2\u8272\u5C18\u571F\u91CC\u3002","\u6C27\u6C14\u53EA\u591F\u6491\u4E09\u5206\u949F\uFF0C\u8EAB\u8FB9\u53EA\u6709\u4E00\u5EA7\u7740\u9646\u8231\u3002",t.map(s=>`${Hn[s.id].name} \xB7 ${s.pop} \u4EBA`).join("\u3000"),`\u4ECA\u5929\uFF0C${e} \u4E2A\u4EBA\uFF0C\u751F\u6D3B\u5728\u4E09\u9897\u661F\u7403\u4E0A\u3002`,'<div class="big">\u661F\u9645\u6587\u660E</div>',"\u8FD9\u4E00\u5207\uFF0C\u90FD\u4ECE\u4F60\u8FC8\u51FA\u7684\u7B2C\u4E00\u6B65\u5F00\u59CB\u3002",'<span class="stats">\u611F\u8C22\u6E38\u73A9\u300A\u661F\u6E2F\u300B\u3002\u4F60\u53EF\u4EE5\u7EE7\u7EED\u5EFA\u8BBE\uFF0C\u57CE\u5E02\u4F1A\u4E00\u76F4\u5728\u8FD9\u91CC\u7B49\u4F60\u3002</span>'];Ht("ending-text").innerHTML=i.map((s,r)=>`<p style="animation-delay:${r*1.8}s">${s}</p>`).join(""),Ht("ending").classList.remove("hidden"),Z.play("chapter"),Ds(!0)}function Rw(n){let t={prompt:"",crossClass:""};if($t.dead||h.menuOpen)return t;if(h.driving)return t.prompt=`<span class="big">${p1()}</span> KM/H<br><kbd>W S</kbd> \u6CB9\u95E8 \xB7 <kbd>A D</kbd> \u8F6C\u5411 \xB7 <kbd>Shift</kbd> \u52A0\u901F \xB7 <kbd>\u7A7A\u683C</kbd> \u5239\u8F66 \xB7 <kbd>E</kbd> \u4E0B\u8F66`,t;let e=kx($t.pos);if(e)return t.prompt="<b>\u5730\u7403\u8865\u7ED9\u8231</b><br><kbd>E</kbd>\u6253\u5F00",ct.hit("KeyE")&&zx(e),t;let i=Px($t.pos);if(i)return t.prompt=`<b>${i.name}</b><br><kbd>E</kbd>\u8C03\u67E5`,ct.hit("KeyE")&&Ix(i),t;let s=Lh();if(s&&Math.hypot(s.x-$t.pos.x,s.z-$t.pos.z)<4.5)return t.prompt="<b>\u52A0\u538B\u6F2B\u6E38\u8F66</b><br><kbd>E</kbd>\u4E0A\u8F66",ct.hit("KeyE")&&(d1(),ct.pressed.delete("KeyE")),t;let r=Ce.position,o=$t.fwd,a=bx(r,o),l=h.buildings.find(f=>f.type==="fabricator"&&Math.hypot(f.x-$t.pos.x,f.z-$t.pos.z)<f.def.r+6);ga=Math.max(0,ga-n),M1=Math.max(0,M1-n);let c=h.buildings.find(f=>f.type==="trade"&&Math.hypot(f.x-$t.pos.x,f.z-$t.pos.z)<f.def.r+5),u=h.buildings.find(f=>f.type==="launch"&&Math.hypot(f.x-$t.pos.x,f.z-$t.pos.z)<f.def.r+8);if(a){if(t.crossClass="talk",t.prompt=`<b>${a.name}</b> \xB7 ${a.job}<br><kbd>E</kbd> \u4EA4\u8C08`,ct.hit("KeyE")){Ie(a.name,a.line);let f=h.stats.talked=h.stats.talked||[];f.includes(a.idx)||f.push(a.idx)}}else u&&!h.launching?u.powered?C1().length?(t.prompt="<b>\u6B96\u6C11\u8230\u5DF2\u5C31\u7EEA</b><br><kbd>E</kbd>\u6253\u5F00\u661F\u56FE",ct.hit("KeyE")&&Ew(u)):t.prompt="\u661F\u9645\u53D1\u5C04\u53F0 \xB7 \u6682\u65E0\u53EF\u7528\u822A\u7EBF":t.prompt='\u661F\u9645\u53D1\u5C04\u53F0 \xB7 <span class="badc">\u7535\u529B\u4E0D\u8DB3</span>':c?(t.prompt=`<b>\u661F\u9645\u8D38\u6613\u7AD9</b>${c.powered?"":' \xB7 <span class="badc">\u505C\u7535</span>'}<br><kbd>E</kbd>\u4EA4\u6613`,ct.hit("KeyE")&&(c.powered?Qi("trade"):je("\u8D38\u6613\u7AD9\u6CA1\u6709\u7535\u529B","warn","warn"))):l&&(t.prompt=`<kbd>E</kbd> \u6253\u5F00\u5236\u9020\u5DE5\u574A${l.powered?"":"\uFF08\u505C\u7535\u4E2D\uFF09"}`,ct.hit("KeyE")&&(l.powered?Qi("craft"):je("\u5236\u9020\u5DE5\u574A\u6CA1\u6709\u7535\u529B")));let d=h.lookBuilding;if(!t.prompt&&d&&an.id!=="build"){let f=d.def,p=d.level||1,g=rh(d)?`<br><kbd>U</kbd>\u5347\u7EA7\u5230 Lv.${p+1}\u3000${Bo(Of(d))}`:"";t.prompt=`<b>${f.name}</b>\u3000Lv.${p}${p>=Ff?"\uFF08\u6EE1\u7EA7\uFF09":""} \xB7 \u8010\u4E45 ${Math.ceil(d.hp)}/${Math.round(d.maxHp)}${f.power<0?d.powered?' \xB7 <span class="okc">\u4F9B\u7535\u4E2D</span>':' \xB7 <span class="badc">\u505C\u7535</span>':""}${g}<br><kbd>X</kbd>${ga>0?'<span class="badc">\u518D\u6309\u4E00\u6B21\u786E\u8BA4\u62C6\u9664\uFF08\u8FD4\u8FD8 50%\uFF09</span>':"\u62C6\u9664"}`,d.broken&&(t.prompt=t.prompt.replace("</b>",'</b> <span class="badc">\u53D7\u635F\u505C\u673A \xB7 \u767D\u5929\u81EA\u52A8\u4FEE\u590D</span>')),ct.hit("KeyU")&&rh(d)&&(Bg(d)?je(`${f.name} \u5347\u7EA7\u5230 Lv.${d.level}`,"star","good"):(Z.play("deny"),je("\u5347\u7EA7\u6750\u6599\u4E0D\u8DB3","warn","warn"))),ct.hit("KeyX")&&(ga>0?(Wg(d,!0),ga=0,je(`\u5DF2\u62C6\u9664 ${f.name}`)):ga=2)}return an.id==="laser"?(h.aimNode&&!t.crossClass&&(t.crossClass="node"),ia(r,o,9)&&(t.crossClass="enemy")):an.id==="rifle"&&ia(r,o,120)&&(t.crossClass="enemy"),t}var Nh=[["\u539F\u8272","none"],["\u80F6\u7247","sepia(.35) contrast(1.12) saturate(1.15) brightness(1.03)"],["\u9ED1\u767D","grayscale(1) contrast(1.25)"],["\u51B7\u8C03","hue-rotate(-18deg) saturate(.85) contrast(1.08) brightness(1.05)"]],qp=0;function _1(n){Is.style.filter=Nh[n][1]==="none"?"":Nh[n][1],Ht("photo-bar").innerHTML=Nh.map((t,e)=>`<span class="${e===n?"on":""}"><kbd>${e+1}</kbd>${t[0]}</span>`).join("")+'<span class="sep"></span><span><kbd>Enter</kbd>\u4FDD\u5B58\u7167\u7247</span><span><kbd>P</kbd>\u9000\u51FA</span>'}function Aw(){let n=Is.width,t=Is.height,e=Math.round(t*.1),i=document.createElement("canvas");i.width=n,i.height=t;let s=i.getContext("2d");s.filter=Nh[qp][1],s.drawImage(Is,0,0),s.filter="none",s.fillStyle="#000",s.fillRect(0,0,n,e),s.fillRect(0,t-e,n,e);let r=Math.round(t*.022);s.font=`300 ${r*1.6}px "Noto Sans SC", sans-serif`,s.fillStyle="#fff",s.textBaseline="middle",s.fillText("\u661F \u6E2F",r*2,t-e/2),s.font=`400 ${r}px "Noto Sans SC", sans-serif`,s.fillStyle="rgba(255,255,255,.7)",s.textAlign="right",s.fillText(`${ht.name} \xB7 ${ht.place} \xB7 \u7B2C ${h.time.day} \u65E5 \xB7 \u4EBA\u53E3 ${h.colony.pop}`,n-r*2,t-e/2);let o=document.createElement("a");o.download=`\u661F\u6E2F-${ht.name}-\u7B2C${h.time.day}\u65E5.png`,o.href=i.toDataURL("image/png"),document.body.appendChild(o),o.click(),o.remove(),Ht("shutter").classList.remove("on"),Ht("shutter").offsetWidth,Ht("shutter").classList.add("on"),Z.play("shutter"),h.stats.photos=(h.stats.photos||0)+1}var Ps=null,Yp=9.5;function E1(n){if(h.debug&&!/landing/.test(location.search)){n();return}h.cine=!0,document.body.classList.add("cinema");let t=va.group,e=xt(pe.x,pe.z)+.1,i=new lt(new Fe(1.7,10,18,1,!0),y.flame);i.rotation.x=Math.PI,i.position.y=-4.2,t.add(i);let s=Mt(16752704,22,t,0,-.5,0),r=new js(16752720,0,120,1.4);r.position.y=-2,t.add(r);let o=new T(pe.x+20,0,pe.z+25);o.y=xt(o.x,o.z)+3.2,h.time.t=.282,Ps={t:0,gy:e,flame:i,fglow:s,lamp:r,done:n,camAt:o,landed:!1,shake:0},t.position.y=e+460,Z.play("rumble"),Z.engine(1);let a=l=>{(l.type==="mousedown"||l.code==="Space"||l.code==="Escape")&&(Ps.t=Math.max(Ps.t,Yp+6))};Ps.skip=a,window.addEventListener("keydown",a),window.addEventListener("mousedown",a)}var b1=new hn,w1=new hn,Cw=new _n,S1=new ve;function P1(n){let t=Ps;t.t+=n;let e=va.group,i=Math.min(1,t.t/Yp),s=1-Math.pow(1-i,2.6);e.position.y=t.gy+460*(1-s),e.rotation.z=Math.sin(t.t*1.1)*.05*(1-i);let r=i<1;t.flame.visible=t.fglow.visible=r,t.flame.scale.set(1,.5+(1-s)*.9+Math.random()*.15,1),t.lamp.intensity=r?400*(.6+Math.random()*.4):0;let o=e.position.y-t.gy;if(r){let c=new T(e.position.x,e.position.y-1,e.position.z);for(let u=0;u<4;u++)ut.flame(c,1.4);if(o<40)for(let u=0;u<3;u++){let d=Math.random()*Math.PI*2,f=2+Math.random()*(14-o*.25);ut.dustPuff(new T(pe.x+Math.cos(d)*f,t.gy+.3,pe.z+Math.sin(d)*f),1,2)}t.shake=Math.max(t.shake,Math.max(0,1-o/120)*.25)}else t.landed||(t.landed=!0,t.shake=1,ut.ring(new T(pe.x,t.gy,pe.z),4,160),ut.dustPuff(new T(pe.x,t.gy+1,pe.z),70,16),Z.play("land"),Z.play("rumble"),Z.engine(0));t.shake*=Math.pow(.15,n),sl(0,Ce.position),ol(n,Ce.position);let a=new T(e.position.x,e.position.y+3,e.position.z),l=t.t-Yp-2.2;if(l<0)Ce.position.copy(t.camAt),Ce.position.x+=Math.sin(t.t*.15)*4,Ce.lookAt(a);else{let c=Math.min(1,l/3.2),u=c*c*(3-2*c),d=new T($t.pos.x,$t.pos.y+1.7,$t.pos.z);if(Ce.position.lerpVectors(t.camAt,d,u),S1.lookAt(t.camAt,a,Ce.up),b1.setFromRotationMatrix(S1),w1.setFromEuler(Cw.set($t.pitch,$t.yaw,0,"YXZ")),Ce.quaternion.slerpQuaternions(b1,w1,u),c>=1){e.remove(t.flame,t.fglow,t.lamp),e.position.y=t.gy,e.rotation.z=0,window.removeEventListener("keydown",t.skip),window.removeEventListener("mousedown",t.skip),document.body.classList.remove("cinema"),h.cine=!1,Ps=null,Z.engine(0),t.done();return}}t.shake>.01&&(Ce.position.x+=(Math.random()-.5)*t.shake*.5,Ce.position.y+=(Math.random()-.5)*t.shake*.4)}var Pw=new ko,Uh=0;function I1(){requestAnimationFrame(I1);let n=Math.min(Pw.getDelta(),.05);if(Ps){P1(n),Vp(),ct.endFrame();return}if(!h.started){Uh+=n*.05;let e=30;Ce.position.set(pe.x+Math.cos(Uh)*e,xt(pe.x,pe.z)+6,pe.z+Math.sin(Uh)*e),Ce.lookAt(pe.x,xt(pe.x,pe.z)+4,pe.z),h.time.t=.27+Math.sin(Uh*.5)*.01,sl(0,Ce.position),ol(n,Ce.position),Vp();return}h.debug&&(h.locked=!0);let t=h.locked&&!h.menuOpen&&!h.endingShown&&!h.cine;Ht("clickhint").classList.toggle("hidden",!(h.started&&!h.locked&&!h.menuOpen&&!$t.dead&&!h.endingShown&&!h.cine)),t?L1(n):(Ap(0,{prompt:""}),sl(0,Ce.position)),ol(t?n:0,Ce.position),ct.endFrame(),Vp(),Mx(In),h.snap&&(h.snap=!1,Aw())}function L1(n){{h.driving&&ct.hit("KeyE")&&!h.menuOpen&&(Fp($t),ct.pressed.delete("KeyE")),h.driving||$t.update(n),f1(n,$t,Ce),sl(n,Ce.position),h.time.dawn&&(h.time.dawn=!1,je(`\u7B2C ${h.time.day} \u65E5 \xB7 \u9ECE\u660E`,"sun")),Mg(n),h.driving?h.lookBuilding=null:vx(n,$t,Ce),Kg(n,{shoot:fh}),Ex(n),Tg(n,an.id==="build"&&!!be.type),ww(n),yf.emissiveIntensity=.06+h.time.night*(.55+Math.sin(performance.now()*.0015)*.15),dx(n),Nx(n),hx(n),sx(n),va.beacon.visible=Math.sin(performance.now()*.004)>0,jx(n),s1(n),Lx(n),c1(n),kg(n,da),g1(n),lg(),!h.plazaSeen&&h.time.night>.6&&h.colonists.filter(e=>e.atPlaza&&!e.target).length>=4&&(h.plazaSeen=!0,Ie("\u82CF\u5FF5 \xB7 \u6559\u5E08","\u4ECA\u665A\u5927\u5BB6\u90FD\u6765\u4E86\u3002\u6211\u4EEC\u5C31\u8FD9\u6837\u7AD9\u7740\uFF0C\u770B\u7740\u90A3\u9897\u84DD\u8272\u7684\u661F\u7403\u8F6C\u554A\u8F6C\u2026\u2026\u5B69\u5B50\u95EE\u6211\uFF0C\u90A3\u662F\u54EA\u91CC\u3002\u6211\u8BF4\uFF0C\u90A3\u662F\u6211\u4EEC\u51FA\u53D1\u7684\u5730\u65B9\u3002"));let t=Rw(n);t.tip=_w(n),Ap(n,t),Z.update(h.storm,h.time.night),Wp-=n,Wp<=0&&(Wp=45,Ds(!0)),h.terraform>0&&h.terraform<=1&&($p-=n,$p<=0&&($p=4,xf(R1(),h.terraform)))}}Ht("loading").style.transition="opacity .8s";Ht("loading").style.opacity=0;setTimeout(()=>Ht("loading").remove(),900);I1();window.addEventListener("beforeunload",()=>Ds(!0));window.__G=h;window.__dbg={give(n=200){for(let t in un)h.res[t]+=n},tp(n,t){$t.pos.set(n,xt(n,t),t)},time(n){h.time.t=n},build:(n,t,e)=>oh(n,t,e,0),chapter:n=>pl(n),look(n,t){$t.yaw=n,$t.pitch=t},begin:()=>Ma(!1),fest:()=>x1(),pod:()=>{let n=up();return{x:n.x,z:n.z}},slope:(n,t)=>xt(n+3,t)-xt(n,t),landStep(n){for(let t=0;t<n&&Ps;t+=.05)P1(.05);return!!Ps},step(n,t=.05){for(let e=0;e<n;e+=t)L1(t),ol(t,Ce.position),ct.endFrame()},input:ct,save:Ds,toast:je,setGhost:Br,openMenu:Qi,closeMenus:Pn,tool:an,placement:be,rover:Lh};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
