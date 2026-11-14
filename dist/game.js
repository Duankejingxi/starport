(()=>{var If="170";var ty=0,j0=1,ny=2;var cg=1,Lf=2,bs=3,nr=0,Dn=1,Rt=2,vn=0,ai=1,ke=2,Q0=3,em=4,Df=5,vi=100,iy=101,sy=102,ry=103,oy=104,ea=200,ay=201,ly=202,cy=203,ld=204,cd=205,hh=206,hy=207,uh=208,uy=209,dy=210,fy=211,py=212,my=213,gy=214,hd=0,ud=1,dd=2,Vo=3,fd=4,pd=5,md=6,gd=7,hg=0,vy=1,xy=2,tr=0,Uf=1,Nf=2,Hf=3,Yr=4,yy=5,kf=6,zf=7;var ug=300,Go=301,Wo=302,vd=303,xd=304,dh=306,$n=1e3,Fr=1001,yd=1002,bn=1003,My=1004;var oc=1005;var Zi=1006,Au=1007;var Br=1008;var Jn=1009,dg=1010,fg=1011,cl=1012,Of=1013,Vr=1014,Ki=1015,jn=1016,Ff=1017,Bf=1018,ir=1020,pg=35902,mg=1021,gg=1022,oi=1023,vg=1024,xg=1025,Oo=1026,sr=1027,Vf=1028,Gf=1029,yg=1030,Wf=1031;var $f=1033,Nc=33776,Hc=33777,kc=33778,zc=33779,Md=35840,_d=35841,Ed=35842,bd=35843,wd=36196,Sd=37492,Td=37496,Rd=37808,Ad=37809,Cd=37810,Pd=37811,Id=37812,Ld=37813,Dd=37814,Ud=37815,Nd=37816,Hd=37817,kd=37818,zd=37819,Od=37820,Fd=37821,Oc=36492,Bd=36494,Vd=36495,Mg=36283,Gd=36284,Wd=36285,$d=36286;var Fc=2300,Xd=2301,Cu=2302,tm=2400,nm=2401,im=2402;var _y=3200,Ey=3201;var Xf=0,by=1,Qs="",bt="srgb",ta="srgb-linear",fh="linear",Bt="srgb";var yo=7680;var sm=519,wy=512,Sy=513,Ty=514,_g=515,Ry=516,Ay=517,Cy=518,Py=519,qd=35044,qf=35048;var rm="300 es",Ss=2e3,Bc=2001,rr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],om=1234567,sl=Math.PI/180,$o=180/Math.PI;function Ts(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[t&63|128]+In[t>>8&255]+"-"+In[t>>16&255]+In[t>>24&255]+In[i&255]+In[i>>8&255]+In[i>>16&255]+In[i>>24&255]).toLowerCase()}function En(n,e,t){return Math.max(e,Math.min(t,n))}function Yf(n,e){return(n%e+e)%e}function Iy(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Ly(n,e,t){return n!==e?(t-n)/(e-n):0}function rl(n,e,t){return(1-t)*n+t*e}function Dy(n,e,t,i){return rl(n,e,1-Math.exp(-t*i))}function Uy(n,e=1){return e-Math.abs(Yf(n,e*2)-e)}function Ny(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Hy(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ky(n,e){return n+Math.floor(Math.random()*(e-n+1))}function zy(n,e){return n+Math.random()*(e-n)}function Oy(n){return n*(.5-Math.random())}function Fy(n){n!==void 0&&(om=n);let e=om+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function By(n){return n*sl}function Vy(n){return n*$o}function Gy(n){return(n&n-1)===0&&n!==0}function Wy(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function $y(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Xy(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),d=r((e-i)/2),f=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ki(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Nt={DEG2RAD:sl,RAD2DEG:$o,generateUUID:Ts,clamp:En,euclideanModulo:Yf,mapLinear:Iy,inverseLerp:Ly,lerp:rl,damp:Dy,pingpong:Uy,smoothstep:Ny,smootherstep:Hy,randInt:ky,randFloat:zy,randFloatSpread:Oy,seededRandom:Fy,degToRad:By,radToDeg:Vy,isPowerOfTwo:Gy,ceilPowerOfTwo:Wy,floorPowerOfTwo:$y,setQuaternionFromProperEuler:Xy,normalize:Xt,denormalize:ki},te=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(En(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],g=i[8],x=s[0],v=s[3],m=s[6],_=s[1],E=s[4],M=s[7],D=s[2],A=s[5],P=s[8];return r[0]=o*x+a*_+l*D,r[3]=o*v+a*E+l*A,r[6]=o*m+a*M+l*P,r[1]=c*x+h*_+d*D,r[4]=c*v+h*E+d*A,r[7]=c*m+h*M+d*P,r[2]=f*x+p*_+g*D,r[5]=f*v+p*E+g*A,r[8]=f*m+p*M+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=t*d+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Pu.makeScale(e,t)),this}rotate(e){return this.premultiply(Pu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Pu=new pt;function Eg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Vc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qy(){let n=Vc("canvas");return n.style.display="block",n}var am={};function nl(n){n in am||(am[n]=!0,console.warn(n))}function Yy(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Zy(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ky(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var St={enabled:!0,workingColorSpace:ta,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Bt&&(n.r=Rs(n.r),n.g=Rs(n.g),n.b=Rs(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Bt&&(n.r=Fo(n.r),n.g=Fo(n.g),n.b=Fo(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Qs?fh:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Rs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var lm=[.64,.33,.3,.6,.15,.06],cm=[.2126,.7152,.0722],hm=[.3127,.329],um=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dm=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);St.define({[ta]:{primaries:lm,whitePoint:hm,transfer:fh,toXYZ:um,fromXYZ:dm,luminanceCoefficients:cm,workingColorSpaceConfig:{unpackColorSpace:bt},outputColorSpaceConfig:{drawingBufferColorSpace:bt}},[bt]:{primaries:lm,whitePoint:hm,transfer:Bt,toXYZ:um,fromXYZ:dm,luminanceCoefficients:cm,outputColorSpaceConfig:{drawingBufferColorSpace:bt}}});var Mo,Yd=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mo===void 0&&(Mo=Vc("canvas")),Mo.width=e.width,Mo.height=e.height;let i=Mo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Mo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Vc("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Rs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Rs(t[i]/255)*255):t[i]=Rs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Jy=0,Gc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=Ts(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Iu(s[o].image)):r.push(Iu(s[o]))}else r=Iu(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Iu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Yd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var jy=0,Xn=class n extends rr{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Fr,s=Fr,r=Zi,o=Br,a=oi,l=Jn,c=n.DEFAULT_ANISOTROPY,h=Qs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=Ts(),this.name="",this.source=new Gc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ug)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $n:e.x=e.x-Math.floor(e.x);break;case Fr:e.x=e.x<0?0:1;break;case yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $n:e.y=e.y-Math.floor(e.y);break;case Fr:e.y=e.y<0?0:1;break;case yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=ug;Xn.DEFAULT_ANISOTROPY=1;var Vt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],g=l[9],x=l[2],v=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-v)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+v)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,M=(p+1)/2,D=(m+1)/2,A=(h+f)/4,P=(d+x)/4,I=(g+v)/4;return E>M&&E>D?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=A/i,r=P/i):M>D?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=A/s,r=I/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=P/r,s=I/r),this.set(i,s,r,t),this}let _=Math.sqrt((v-g)*(v-g)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(v-g)/_,this.y=(d-x)/_,this.z=(f-h)/_,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zd=class extends rr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Xn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Gc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends Zd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Wc=class extends Xn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Kd=class extends Xn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],f=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(d!==x||l!==f||c!==p||h!==g){let v=1-a,m=l*f+c*p+h*g+d*x,_=m>=0?1:-1,E=1-m*m;if(E>Number.EPSILON){let D=Math.sqrt(E),A=Math.atan2(D,m*_);v=Math.sin(v*A)/D,a=Math.sin(a*A)/D}let M=a*_;if(l=l*v+f*M,c=c*v+p*M,h=h*v+g*M,d=d*v+x*M,v===1-a){let D=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=D,c*=D,h*=D,d*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*p-c*f,e[t+1]=l*g+h*f+c*d-a*p,e[t+2]=c*g+h*p+a*f-l*d,e[t+3]=h*g-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"YZX":this._x=f*h*d+c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d-f*p*g;break;case"XZY":this._x=f*h*d-c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=i+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(En(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lu.copy(this).projectOnVector(e),this.sub(Lu)}reflect(e){return this.sub(Lu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(En(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lu=new w,fm=new dn,zi=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ui):Ui.fromBufferAttribute(r,o),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ac.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ac.copy(i.boundingBox)),ac.applyMatrix4(e.matrixWorld),this.union(ac)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xa),lc.subVectors(this.max,Xa),_o.subVectors(e.a,Xa),Eo.subVectors(e.b,Xa),bo.subVectors(e.c,Xa),qs.subVectors(Eo,_o),Ys.subVectors(bo,Eo),Lr.subVectors(_o,bo);let t=[0,-qs.z,qs.y,0,-Ys.z,Ys.y,0,-Lr.z,Lr.y,qs.z,0,-qs.x,Ys.z,0,-Ys.x,Lr.z,0,-Lr.x,-qs.y,qs.x,0,-Ys.y,Ys.x,0,-Lr.y,Lr.x,0];return!Du(t,_o,Eo,bo,lc)||(t=[1,0,0,0,1,0,0,0,1],!Du(t,_o,Eo,bo,lc))?!1:(cc.crossVectors(qs,Ys),t=[cc.x,cc.y,cc.z],Du(t,_o,Eo,bo,lc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},xs=[new w,new w,new w,new w,new w,new w,new w,new w],Ui=new w,ac=new zi,_o=new w,Eo=new w,bo=new w,qs=new w,Ys=new w,Lr=new w,Xa=new w,lc=new w,cc=new w,Dr=new w;function Du(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Dr.fromArray(n,r);let a=s.x*Math.abs(Dr.x)+s.y*Math.abs(Dr.y)+s.z*Math.abs(Dr.z),l=e.dot(Dr),c=t.dot(Dr),h=i.dot(Dr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Qy=new zi,qa=new w,Uu=new w,or=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Qy.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qa.subVectors(e,this.center);let t=qa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(qa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qa.copy(e.center).add(Uu)),this.expandByPoint(qa.copy(e.center).sub(Uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ys=new w,Nu=new w,hc=new w,Zs=new w,Hu=new w,uc=new w,ku=new w,$c=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ys)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ys.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ys.copy(this.origin).addScaledVector(this.direction,t),ys.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Nu.copy(e).add(t).multiplyScalar(.5),hc.copy(t).sub(e).normalize(),Zs.copy(this.origin).sub(Nu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(hc),a=Zs.dot(this.direction),l=-Zs.dot(hc),c=Zs.lengthSq(),h=Math.abs(1-o*o),d,f,p,g;if(h>0)if(d=o*l-a,f=o*a-l,g=r*h,d>=0)if(f>=-g)if(f<=g){let x=1/h;d*=x,f*=x,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Nu).addScaledVector(hc,f),p}intersectSphere(e,t){ys.subVectors(e.center,this.origin);let i=ys.dot(this.direction),s=ys.dot(ys)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ys)!==null}intersectTriangle(e,t,i,s,r){Hu.subVectors(t,e),uc.subVectors(i,e),ku.crossVectors(Hu,uc);let o=this.direction.dot(ku),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zs.subVectors(this.origin,e);let l=a*this.direction.dot(uc.crossVectors(Zs,uc));if(l<0)return null;let c=a*this.direction.dot(Hu.cross(Zs));if(c<0||l+c>o)return null;let h=-a*Zs.dot(ku);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mt=class n{constructor(e,t,i,s,r,o,a,l,c,h,d,f,p,g,x,v){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,f,p,g,x,v)}set(e,t,i,s,r,o,a,l,c,h,d,f,p,g,x,v){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=f,m[3]=p,m[7]=g,m[11]=x,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/wo.setFromMatrixColumn(e,0).length(),r=1/wo.setFromMatrixColumn(e,1).length(),o=1/wo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=o*h,p=o*d,g=a*h,x=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,p=l*d,g=c*h,x=c*d;t[0]=f+x*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,p=l*d,g=c*h,x=c*d;t[0]=f-x*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,p=o*d,g=a*h,x=a*d;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-f*d,t[8]=g*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*d+g,t[10]=f-x*d}else if(e.order==="XZY"){let f=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+x,t[5]=o*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*h,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eM,e,tM)}lookAt(e,t,i){let s=this.elements;return si.subVectors(e,t),si.lengthSq()===0&&(si.z=1),si.normalize(),Ks.crossVectors(i,si),Ks.lengthSq()===0&&(Math.abs(i.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Ks.crossVectors(i,si)),Ks.normalize(),dc.crossVectors(si,Ks),s[0]=Ks.x,s[4]=dc.x,s[8]=si.x,s[1]=Ks.y,s[5]=dc.y,s[9]=si.y,s[2]=Ks.z,s[6]=dc.z,s[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],g=i[2],x=i[6],v=i[10],m=i[14],_=i[3],E=i[7],M=i[11],D=i[15],A=s[0],P=s[4],I=s[8],S=s[12],b=s[1],U=s[5],O=s[9],F=s[13],G=s[2],Q=s[6],$=s[10],re=s[14],X=s[3],ae=s[7],Se=s[11],He=s[15];return r[0]=o*A+a*b+l*G+c*X,r[4]=o*P+a*U+l*Q+c*ae,r[8]=o*I+a*O+l*$+c*Se,r[12]=o*S+a*F+l*re+c*He,r[1]=h*A+d*b+f*G+p*X,r[5]=h*P+d*U+f*Q+p*ae,r[9]=h*I+d*O+f*$+p*Se,r[13]=h*S+d*F+f*re+p*He,r[2]=g*A+x*b+v*G+m*X,r[6]=g*P+x*U+v*Q+m*ae,r[10]=g*I+x*O+v*$+m*Se,r[14]=g*S+x*F+v*re+m*He,r[3]=_*A+E*b+M*G+D*X,r[7]=_*P+E*U+M*Q+D*ae,r[11]=_*I+E*O+M*$+D*Se,r[15]=_*S+E*F+M*re+D*He,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],g=e[3],x=e[7],v=e[11],m=e[15];return g*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*p-i*l*p)+x*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+v*(+t*c*d-t*a*p-r*o*d+i*o*p+r*a*h-i*c*h)+m*(-s*a*h-t*l*d+t*a*f+s*o*d-i*o*f+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],g=e[12],x=e[13],v=e[14],m=e[15],_=d*v*c-x*f*c+x*l*p-a*v*p-d*l*m+a*f*m,E=g*f*c-h*v*c-g*l*p+o*v*p+h*l*m-o*f*m,M=h*x*c-g*d*c+g*a*p-o*x*p-h*a*m+o*d*m,D=g*d*l-h*x*l-g*a*f+o*x*f+h*a*v-o*d*v,A=t*_+i*E+s*M+r*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/A;return e[0]=_*P,e[1]=(x*f*r-d*v*r-x*s*p+i*v*p+d*s*m-i*f*m)*P,e[2]=(a*v*r-x*l*r+x*s*c-i*v*c-a*s*m+i*l*m)*P,e[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*p-i*l*p)*P,e[4]=E*P,e[5]=(h*v*r-g*f*r+g*s*p-t*v*p-h*s*m+t*f*m)*P,e[6]=(g*l*r-o*v*r-g*s*c+t*v*c+o*s*m-t*l*m)*P,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*p+t*l*p)*P,e[8]=M*P,e[9]=(g*d*r-h*x*r-g*i*p+t*x*p+h*i*m-t*d*m)*P,e[10]=(o*x*r-g*a*r+g*i*c-t*x*c-o*i*m+t*a*m)*P,e[11]=(h*a*r-o*d*r-h*i*c+t*d*c+o*i*p-t*a*p)*P,e[12]=D*P,e[13]=(h*x*s-g*d*s+g*i*f-t*x*f-h*i*v+t*d*v)*P,e[14]=(g*a*s-o*x*s-g*i*l+t*x*l+o*i*v-t*a*v)*P,e[15]=(o*d*s-h*a*s+h*i*l-t*d*l-o*i*f+t*a*f)*P,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,f=r*c,p=r*h,g=r*d,x=o*h,v=o*d,m=a*d,_=l*c,E=l*h,M=l*d,D=i.x,A=i.y,P=i.z;return s[0]=(1-(x+m))*D,s[1]=(p+M)*D,s[2]=(g-E)*D,s[3]=0,s[4]=(p-M)*A,s[5]=(1-(f+m))*A,s[6]=(v+_)*A,s[7]=0,s[8]=(g+E)*P,s[9]=(v-_)*P,s[10]=(1-(f+x))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=wo.set(s[0],s[1],s[2]).length(),o=wo.set(s[4],s[5],s[6]).length(),a=wo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ni.copy(this);let c=1/r,h=1/o,d=1/a;return Ni.elements[0]*=c,Ni.elements[1]*=c,Ni.elements[2]*=c,Ni.elements[4]*=h,Ni.elements[5]*=h,Ni.elements[6]*=h,Ni.elements[8]*=d,Ni.elements[9]*=d,Ni.elements[10]*=d,t.setFromRotationMatrix(Ni),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Ss){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),p,g;if(a===Ss)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Bc)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ss){let l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(o-r),f=(t+e)*c,p=(i+s)*h,g,x;if(a===Ss)g=(o+r)*d,x=-2*d;else if(a===Bc)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},wo=new w,Ni=new mt,eM=new w(0,0,0),tM=new w(1,1,1),Ks=new w,dc=new w,si=new w,pm=new mt,mm=new dn,Sn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(En(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-En(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(En(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-En(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(En(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-En(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return pm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mm.setFromEuler(this),this.setFromQuaternion(mm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var Xc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},nM=0,gm=new w,So=new dn,Ms=new mt,fc=new w,Ya=new w,iM=new w,sM=new dn,vm=new w(1,0,0),xm=new w(0,1,0),ym=new w(0,0,1),Mm={type:"added"},rM={type:"removed"},To={type:"childadded",child:null},zu={type:"childremoved",child:null},fn=class n extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=Ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new w,t=new Sn,i=new dn,s=new w(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new pt}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return So.setFromAxisAngle(e,t),this.quaternion.multiply(So),this}rotateOnWorldAxis(e,t){return So.setFromAxisAngle(e,t),this.quaternion.premultiply(So),this}rotateX(e){return this.rotateOnAxis(vm,e)}rotateY(e){return this.rotateOnAxis(xm,e)}rotateZ(e){return this.rotateOnAxis(ym,e)}translateOnAxis(e,t){return gm.copy(e).applyQuaternion(this.quaternion),this.position.add(gm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vm,e)}translateY(e){return this.translateOnAxis(xm,e)}translateZ(e){return this.translateOnAxis(ym,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ms.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fc.copy(e):fc.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ms.lookAt(Ya,fc,this.up):Ms.lookAt(fc,Ya,this.up),this.quaternion.setFromRotationMatrix(Ms),s&&(Ms.extractRotation(s.matrixWorld),So.setFromRotationMatrix(Ms),this.quaternion.premultiply(So.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mm),To.child=e,this.dispatchEvent(To),To.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rM),zu.child=e,this.dispatchEvent(zu),zu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ms.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ms.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ms),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mm),To.child=e,this.dispatchEvent(To),To.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ya,e,iM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ya,sM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};fn.DEFAULT_UP=new w(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hi=new w,_s=new w,Ou=new w,Es=new w,Ro=new w,Ao=new w,_m=new w,Fu=new w,Bu=new w,Vu=new w,Gu=new Vt,Wu=new Vt,$u=new Vt,er=class n{constructor(e=new w,t=new w,i=new w){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Hi.subVectors(e,t),s.cross(Hi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Hi.subVectors(s,t),_s.subVectors(i,t),Ou.subVectors(e,t);let o=Hi.dot(Hi),a=Hi.dot(_s),l=Hi.dot(Ou),c=_s.dot(_s),h=_s.dot(Ou),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Es)===null?!1:Es.x>=0&&Es.y>=0&&Es.x+Es.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Es)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Es.x),l.addScaledVector(o,Es.y),l.addScaledVector(a,Es.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Gu.setScalar(0),Wu.setScalar(0),$u.setScalar(0),Gu.fromBufferAttribute(e,t),Wu.fromBufferAttribute(e,i),$u.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Gu,r.x),o.addScaledVector(Wu,r.y),o.addScaledVector($u,r.z),o}static isFrontFacing(e,t,i,s){return Hi.subVectors(i,t),_s.subVectors(e,t),Hi.cross(_s).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hi.subVectors(this.c,this.b),_s.subVectors(this.a,this.b),Hi.cross(_s).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Ro.subVectors(s,i),Ao.subVectors(r,i),Fu.subVectors(e,i);let l=Ro.dot(Fu),c=Ao.dot(Fu);if(l<=0&&c<=0)return t.copy(i);Bu.subVectors(e,s);let h=Ro.dot(Bu),d=Ao.dot(Bu);if(h>=0&&d<=h)return t.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Ro,o);Vu.subVectors(e,r);let p=Ro.dot(Vu),g=Ao.dot(Vu);if(g>=0&&p<=g)return t.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ao,a);let v=h*g-p*d;if(v<=0&&d-h>=0&&p-g>=0)return _m.subVectors(r,s),a=(d-h)/(d-h+(p-g)),t.copy(s).addScaledVector(_m,a);let m=1/(v+x+f);return o=x*m,a=f*m,t.copy(i).addScaledVector(Ro,o).addScaledVector(Ao,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Js={h:0,s:0,l:0},pc={h:0,s:0,l:0};function Xu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ce=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=St.workingColorSpace){return this.r=e,this.g=t,this.b=i,St.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=St.workingColorSpace){if(e=Yf(e,1),t=En(t,0,1),i=En(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Xu(o,r,e+1/3),this.g=Xu(o,r,e),this.b=Xu(o,r,e-1/3)}return St.toWorkingColorSpace(this,s),this}setStyle(e,t=bt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){let i=bg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}copyLinearToSRGB(e){return this.r=Fo(e.r),this.g=Fo(e.g),this.b=Fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return St.fromWorkingColorSpace(Ln.copy(this),e),Math.round(En(Ln.r*255,0,255))*65536+Math.round(En(Ln.g*255,0,255))*256+Math.round(En(Ln.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(Ln.copy(this),t);let i=Ln.r,s=Ln.g,r=Ln.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=bt){St.fromWorkingColorSpace(Ln.copy(this),e);let t=Ln.r,i=Ln.g,s=Ln.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Js),this.setHSL(Js.h+e,Js.s+t,Js.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Js),e.getHSL(pc);let i=rl(Js.h,pc.h,t),s=rl(Js.s,pc.s,t),r=rl(Js.l,pc.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new ce;ce.NAMES=bg;var oM=0,Ji=class extends rr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=Ts(),this.name="",this.blending=ai,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ld,this.blendDst=cd,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=Vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yo,this.stencilZFail=yo,this.stencilZPass=yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ai&&(i.blending=this.blending),this.side!==nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ld&&(i.blendSrc=this.blendSrc),this.blendDst!==cd&&(i.blendDst=this.blendDst),this.blendEquation!==vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==yo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==yo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ne=class extends Ji{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=hg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var pn=new w,mc=new te,on=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=qd,this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)mc.fromBufferAttribute(this,t),mc.applyMatrix3(e),this.setXY(t,mc.x,mc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix3(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ki(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),s=Xt(s,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qd&&(e.usage=this.usage),e}};var qc=class extends on{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Yc=class extends on{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var at=class extends on{constructor(e,t,i){super(new Float32Array(e),t,i)}},aM=0,gi=new mt,qu=new fn,Co=new w,ri=new zi,Za=new zi,_n=new w,At=class n extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=Ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Eg(e)?Yc:qc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new pt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,t,i){return gi.makeTranslation(e,t,i),this.applyMatrix4(gi),this}scale(e,t,i){return gi.makeScale(e,t,i),this.applyMatrix4(gi),this}lookAt(e){return qu.lookAt(e),qu.updateMatrix(),this.applyMatrix4(qu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Co).negate(),this.translate(Co.x,Co.y,Co.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new at(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];ri.setFromBufferAttribute(r),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new or);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){let i=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Za.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(ri.min,Za.min),ri.expandByPoint(_n),_n.addVectors(ri.max,Za.max),ri.expandByPoint(_n)):(ri.expandByPoint(Za.min),ri.expandByPoint(Za.max))}ri.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)_n.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(_n));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)_n.fromBufferAttribute(a,c),l&&(Co.fromBufferAttribute(e,c),_n.add(Co)),s=Math.max(s,i.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new w,l[I]=new w;let c=new w,h=new w,d=new w,f=new te,p=new te,g=new te,x=new w,v=new w;function m(I,S,b){c.fromBufferAttribute(i,I),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,b),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,b),h.sub(c),d.sub(c),p.sub(f),g.sub(f);let U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(U),v.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(U),a[I].add(x),a[S].add(x),a[b].add(x),l[I].add(v),l[S].add(v),l[b].add(v))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let I=0,S=_.length;I<S;++I){let b=_[I],U=b.start,O=b.count;for(let F=U,G=U+O;F<G;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let E=new w,M=new w,D=new w,A=new w;function P(I){D.fromBufferAttribute(s,I),A.copy(D);let S=a[I];E.copy(S),E.sub(D.multiplyScalar(D.dot(S))).normalize(),M.crossVectors(A,S);let U=M.dot(l[I])<0?-1:1;o.setXYZW(I,E.x,E.y,E.z,U)}for(let I=0,S=_.length;I<S;++I){let b=_[I],U=b.start,O=b.count;for(let F=U,G=U+O;F<G;F+=3)P(e.getX(F+0)),P(e.getX(F+1)),P(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new w,r=new w,o=new w,a=new w,l=new w,c=new w,h=new w,d=new w;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),x=e.getX(f+1),v=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,v),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,v),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let x=0,v=l.length;x<v;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let m=0;m<h;m++)f[g++]=c[p++]}return new on(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Em=new mt,Ur=new $c,gc=new or,bm=new w,vc=new w,xc=new w,yc=new w,Yu=new w,Mc=new w,wm=new w,_c=new w,se=class extends fn{constructor(e=new At,t=new Ne){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Mc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Yu.fromBufferAttribute(d,e),o?Mc.addScaledVector(Yu,h):Mc.addScaledVector(Yu.sub(t),h))}t.add(Mc)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gc.copy(i.boundingSphere),gc.applyMatrix4(r),Ur.copy(e.ray).recast(e.near),!(gc.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(gc,bm)===null||Ur.origin.distanceToSquared(bm)>(e.far-e.near)**2))&&(Em.copy(r).invert(),Ur.copy(e.ray).applyMatrix4(Em),!(i.boundingBox!==null&&Ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ur)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let v=f[g],m=o[v.materialIndex],_=Math.max(v.start,p.start),E=Math.min(a.count,Math.min(v.start+v.count,p.start+p.count));for(let M=_,D=E;M<D;M+=3){let A=a.getX(M),P=a.getX(M+1),I=a.getX(M+2);s=Ec(this,m,e,i,c,h,d,A,P,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let v=g,m=x;v<m;v+=3){let _=a.getX(v),E=a.getX(v+1),M=a.getX(v+2);s=Ec(this,o,e,i,c,h,d,_,E,M),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let v=f[g],m=o[v.materialIndex],_=Math.max(v.start,p.start),E=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let M=_,D=E;M<D;M+=3){let A=M,P=M+1,I=M+2;s=Ec(this,m,e,i,c,h,d,A,P,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let v=g,m=x;v<m;v+=3){let _=v,E=v+1,M=v+2;s=Ec(this,o,e,i,c,h,d,_,E,M),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}}};function lM(n,e,t,i,s,r,o,a){let l;if(e.side===Dn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===nr,a),l===null)return null;_c.copy(a),_c.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(_c);return c<t.near||c>t.far?null:{distance:c,point:_c.clone(),object:n}}function Ec(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,vc),n.getVertexPosition(l,xc),n.getVertexPosition(c,yc);let h=lM(n,e,t,i,vc,xc,yc,wm);if(h){let d=new w;er.getBarycoord(wm,vc,xc,yc,d),s&&(h.uv=er.getInterpolatedAttribute(s,a,l,c,d,new te)),r&&(h.uv1=er.getInterpolatedAttribute(r,a,l,c,d,new te)),o&&(h.normal=er.getInterpolatedAttribute(o,a,l,c,d,new w),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new w,materialIndex:0};er.getNormal(vc,xc,yc,f.normal),h.face=f,h.barycoord=d}return h}var Ye=class n extends At{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(d,2));function g(x,v,m,_,E,M,D,A,P,I,S){let b=M/P,U=D/I,O=M/2,F=D/2,G=A/2,Q=P+1,$=I+1,re=0,X=0,ae=new w;for(let Se=0;Se<$;Se++){let He=Se*U-F;for(let ot=0;ot<Q;ot++){let Lt=ot*b-O;ae[x]=Lt*_,ae[v]=He*E,ae[m]=G,c.push(ae.x,ae.y,ae.z),ae[x]=0,ae[v]=0,ae[m]=A>0?1:-1,h.push(ae.x,ae.y,ae.z),d.push(ot/P),d.push(1-Se/I),re+=1}}for(let Se=0;Se<I;Se++)for(let He=0;He<P;He++){let ot=f+He+Q*Se,Lt=f+He+Q*(Se+1),K=f+(He+1)+Q*(Se+1),le=f+(He+1)+Q*Se;l.push(ot,Lt,le),l.push(Lt,K,le),X+=6}a.addGroup(p,X,S),p+=X,f+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Xo(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Wn(n){let e={};for(let t=0;t<n.length;t++){let i=Xo(n[t]);for(let s in i)e[s]=i[s]}return e}function cM(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function wg(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}var Qn={clone:Xo,merge:Wn},hM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pt=class extends Ji{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hM,this.fragmentShader=uM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xo(e.uniforms),this.uniformsGroups=cM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Zc=class extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Ss}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},js=new w,Sm=new te,Tm=new te,un=class extends Zc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=$o*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(sl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(sl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){js.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(js.x,js.y).multiplyScalar(-e/js.z),js.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(js.x,js.y).multiplyScalar(-e/js.z)}getViewSize(e,t){return this.getViewBounds(e,Sm,Tm),t.subVectors(Tm,Sm)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(sl*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Po=-90,Io=1,Jd=class extends fn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new un(Po,Io,e,t);s.layers=this.layers,this.add(s);let r=new un(Po,Io,e,t);r.layers=this.layers,this.add(r);let o=new un(Po,Io,e,t);o.layers=this.layers,this.add(o);let a=new un(Po,Io,e,t);a.layers=this.layers,this.add(a);let l=new un(Po,Io,e,t);l.layers=this.layers,this.add(l);let c=new un(Po,Io,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ss)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Kc=class extends Xn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Go,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},jd=class extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Kc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ye(5,5,5),r=new Pt({name:"CubemapFromEquirect",uniforms:Xo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dn,blending:vn});r.uniforms.tEquirect.value=t;let o=new se(s,r),a=t.minFilter;return t.minFilter===Br&&(t.minFilter=Zi),new Jd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Zu=new w,dM=new w,fM=new pt,ws=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Zu.subVectors(i,t).cross(dM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Zu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||fM.getNormalMatrix(e),s=this.coplanarPoint(Zu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Nr=new or,bc=new w,hl=class{constructor(e=new ws,t=new ws,i=new ws,s=new ws,r=new ws,o=new ws){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ss){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],p=s[8],g=s[9],x=s[10],v=s[11],m=s[12],_=s[13],E=s[14],M=s[15];if(i[0].setComponents(l-r,f-c,v-p,M-m).normalize(),i[1].setComponents(l+r,f+c,v+p,M+m).normalize(),i[2].setComponents(l+o,f+h,v+g,M+_).normalize(),i[3].setComponents(l-o,f-h,v-g,M-_).normalize(),i[4].setComponents(l-a,f-d,v-x,M-E).normalize(),t===Ss)i[5].setComponents(l+a,f+d,v+x,M+E).normalize();else if(t===Bc)i[5].setComponents(a,d,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){return Nr.center.set(0,0,0),Nr.radius=.7071067811865476,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(bc.x=s.normal.x>0?e.max.x:e.min.x,bc.y=s.normal.y>0?e.max.y:e.min.y,bc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(bc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Sg(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function pM(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){let g=d[f],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){let x=d[p];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Un=class n extends At{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,f=t/l,p=[],g=[],x=[],v=[];for(let m=0;m<h;m++){let _=m*f-o;for(let E=0;E<c;E++){let M=E*d-r;g.push(M,-_,0),x.push(0,0,1),v.push(E/a),v.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let E=_+c*m,M=_+c*(m+1),D=_+1+c*(m+1),A=_+1+c*m;p.push(E,M,A),p.push(M,D,A)}this.setIndex(p),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},mM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gM=`#ifdef USE_ALPHAHASH
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
#endif`,vM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,MM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_M=`#ifdef USE_AOMAP
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
#endif`,EM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bM=`#ifdef USE_BATCHING
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
#endif`,wM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AM=`#ifdef USE_IRIDESCENCE
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
#endif`,CM=`#ifdef USE_BUMPMAP
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
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,UM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zM=`#define PI 3.141592653589793
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
} // validated`,OM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,FM=`vec3 transformedNormal = objectNormal;
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
#endif`,BM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$M="gl_FragColor = linearToOutputTexel( gl_FragColor );",XM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qM=`#ifdef USE_ENVMAP
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
#endif`,YM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ZM=`#ifdef USE_ENVMAP
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
#endif`,KM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JM=`#ifdef USE_ENVMAP
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
#endif`,jM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n2=`#ifdef USE_GRADIENTMAP
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
}`,i2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o2=`uniform bool receiveShadow;
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
#endif`,a2=`#ifdef USE_ENVMAP
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
#endif`,l2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,d2=`PhysicalMaterial material;
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
#endif`,f2=`struct PhysicalMaterial {
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
}`,p2=`
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
#endif`,m2=`#if defined( RE_IndirectDiffuse )
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
#endif`,g2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,w2=`#if defined( USE_POINTS_UV )
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
#endif`,S2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,A2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P2=`#ifdef USE_MORPHTARGETS
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
#endif`,I2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,D2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,U2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,k2=`#ifdef USE_NORMALMAP
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
#endif`,z2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,V2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,W2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,K2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,J2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Q2=`float getShadowMask() {
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
}`,e_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t_=`#ifdef USE_SKINNING
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
#endif`,n_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i_=`#ifdef USE_SKINNING
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
#endif`,s_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,o_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,l_=`#ifdef USE_TRANSMISSION
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
#endif`,c_=`#ifdef USE_TRANSMISSION
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
#endif`,h_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,p_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m_=`uniform sampler2D t2D;
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
}`,g_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M_=`#include <common>
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
}`,__=`#if DEPTH_PACKING == 3200
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
}`,E_=`#define DISTANCE
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
}`,b_=`#define DISTANCE
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
}`,w_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T_=`uniform float scale;
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
}`,R_=`uniform vec3 diffuse;
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
}`,A_=`#include <common>
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
}`,C_=`uniform vec3 diffuse;
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
}`,P_=`#define LAMBERT
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
}`,I_=`#define LAMBERT
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
}`,L_=`#define MATCAP
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
}`,D_=`#define MATCAP
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
}`,U_=`#define NORMAL
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
}`,N_=`#define NORMAL
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
}`,H_=`#define PHONG
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
}`,k_=`#define PHONG
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
}`,z_=`#define STANDARD
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
}`,O_=`#define STANDARD
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
}`,F_=`#define TOON
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
}`,B_=`#define TOON
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
}`,V_=`uniform float size;
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
}`,G_=`uniform vec3 diffuse;
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
}`,W_=`#include <common>
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
}`,$_=`uniform vec3 color;
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
}`,X_=`uniform float rotation;
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
}`,q_=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:mM,alphahash_pars_fragment:gM,alphamap_fragment:vM,alphamap_pars_fragment:xM,alphatest_fragment:yM,alphatest_pars_fragment:MM,aomap_fragment:_M,aomap_pars_fragment:EM,batching_pars_vertex:bM,batching_vertex:wM,begin_vertex:SM,beginnormal_vertex:TM,bsdfs:RM,iridescence_fragment:AM,bumpmap_pars_fragment:CM,clipping_planes_fragment:PM,clipping_planes_pars_fragment:IM,clipping_planes_pars_vertex:LM,clipping_planes_vertex:DM,color_fragment:UM,color_pars_fragment:NM,color_pars_vertex:HM,color_vertex:kM,common:zM,cube_uv_reflection_fragment:OM,defaultnormal_vertex:FM,displacementmap_pars_vertex:BM,displacementmap_vertex:VM,emissivemap_fragment:GM,emissivemap_pars_fragment:WM,colorspace_fragment:$M,colorspace_pars_fragment:XM,envmap_fragment:qM,envmap_common_pars_fragment:YM,envmap_pars_fragment:ZM,envmap_pars_vertex:KM,envmap_physical_pars_fragment:a2,envmap_vertex:JM,fog_vertex:jM,fog_pars_vertex:QM,fog_fragment:e2,fog_pars_fragment:t2,gradientmap_pars_fragment:n2,lightmap_pars_fragment:i2,lights_lambert_fragment:s2,lights_lambert_pars_fragment:r2,lights_pars_begin:o2,lights_toon_fragment:l2,lights_toon_pars_fragment:c2,lights_phong_fragment:h2,lights_phong_pars_fragment:u2,lights_physical_fragment:d2,lights_physical_pars_fragment:f2,lights_fragment_begin:p2,lights_fragment_maps:m2,lights_fragment_end:g2,logdepthbuf_fragment:v2,logdepthbuf_pars_fragment:x2,logdepthbuf_pars_vertex:y2,logdepthbuf_vertex:M2,map_fragment:_2,map_pars_fragment:E2,map_particle_fragment:b2,map_particle_pars_fragment:w2,metalnessmap_fragment:S2,metalnessmap_pars_fragment:T2,morphinstance_vertex:R2,morphcolor_vertex:A2,morphnormal_vertex:C2,morphtarget_pars_vertex:P2,morphtarget_vertex:I2,normal_fragment_begin:L2,normal_fragment_maps:D2,normal_pars_fragment:U2,normal_pars_vertex:N2,normal_vertex:H2,normalmap_pars_fragment:k2,clearcoat_normal_fragment_begin:z2,clearcoat_normal_fragment_maps:O2,clearcoat_pars_fragment:F2,iridescence_pars_fragment:B2,opaque_fragment:V2,packing:G2,premultiplied_alpha_fragment:W2,project_vertex:$2,dithering_fragment:X2,dithering_pars_fragment:q2,roughnessmap_fragment:Y2,roughnessmap_pars_fragment:Z2,shadowmap_pars_fragment:K2,shadowmap_pars_vertex:J2,shadowmap_vertex:j2,shadowmask_pars_fragment:Q2,skinbase_vertex:e_,skinning_pars_vertex:t_,skinning_vertex:n_,skinnormal_vertex:i_,specularmap_fragment:s_,specularmap_pars_fragment:r_,tonemapping_fragment:o_,tonemapping_pars_fragment:a_,transmission_fragment:l_,transmission_pars_fragment:c_,uv_pars_fragment:h_,uv_pars_vertex:u_,uv_vertex:d_,worldpos_vertex:f_,background_vert:p_,background_frag:m_,backgroundCube_vert:g_,backgroundCube_frag:v_,cube_vert:x_,cube_frag:y_,depth_vert:M_,depth_frag:__,distanceRGBA_vert:E_,distanceRGBA_frag:b_,equirect_vert:w_,equirect_frag:S_,linedashed_vert:T_,linedashed_frag:R_,meshbasic_vert:A_,meshbasic_frag:C_,meshlambert_vert:P_,meshlambert_frag:I_,meshmatcap_vert:L_,meshmatcap_frag:D_,meshnormal_vert:U_,meshnormal_frag:N_,meshphong_vert:H_,meshphong_frag:k_,meshphysical_vert:z_,meshphysical_frag:O_,meshtoon_vert:F_,meshtoon_frag:B_,points_vert:V_,points_frag:G_,shadow_vert:W_,shadow_frag:$_,sprite_vert:X_,sprite_frag:q_},we={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Yi={basic:{uniforms:Wn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Wn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ce(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Wn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Wn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Wn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new ce(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Wn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Wn([we.points,we.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Wn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Wn([we.common,we.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Wn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Wn([we.sprite,we.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:Wn([we.common,we.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:Wn([we.lights,we.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Yi.physical={uniforms:Wn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};var wc={r:0,b:0,g:0},Hr=new Sn,Y_=new mt;function Z_(n,e,t,i,s,r,o){let a=new ce(0),l=r===!0?0:1,c,h,d=null,f=0,p=null;function g(_){let E=_.isScene===!0?_.background:null;return E&&E.isTexture&&(E=(_.backgroundBlurriness>0?t:e).get(E)),E}function x(_){let E=!1,M=g(_);M===null?m(a,l):M&&M.isColor&&(m(M,1),E=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(_,E){let M=g(E);M&&(M.isCubeTexture||M.mapping===dh)?(h===void 0&&(h=new se(new Ye(1,1,1),new Pt({name:"BackgroundCubeMaterial",uniforms:Xo(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Hr.copy(E.backgroundRotation),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Y_.makeRotationFromEuler(Hr)),h.material.toneMapped=St.getTransfer(M.colorSpace)!==Bt,(d!==M||f!==M.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=M,f=M.version,p=n.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new se(new Un(2,2),new Pt({name:"BackgroundMaterial",uniforms:Xo(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=St.getTransfer(M.colorSpace)!==Bt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,p=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,E){_.getRGB(wc,wg(n)),i.buffers.color.setClear(wc.r,wc.g,wc.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(_,E=1){a.set(_),l=E,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,m(a,l)},render:x,addToRenderList:v}}function K_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(b,U,O,F,G){let Q=!1,$=d(F,O,U);r!==$&&(r=$,c(r.object)),Q=p(b,F,O,G),Q&&g(b,F,O,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,M(b,U,O,F),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function d(b,U,O){let F=O.wireframe===!0,G=i[b.id];G===void 0&&(G={},i[b.id]=G);let Q=G[U.id];Q===void 0&&(Q={},G[U.id]=Q);let $=Q[F];return $===void 0&&($=f(l()),Q[F]=$),$}function f(b){let U=[],O=[],F=[];for(let G=0;G<t;G++)U[G]=0,O[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:F,object:b,attributes:{},index:null}}function p(b,U,O,F){let G=r.attributes,Q=U.attributes,$=0,re=O.getAttributes();for(let X in re)if(re[X].location>=0){let Se=G[X],He=Q[X];if(He===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(He=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(He=b.instanceColor)),Se===void 0||Se.attribute!==He||He&&Se.data!==He.data)return!0;$++}return r.attributesNum!==$||r.index!==F}function g(b,U,O,F){let G={},Q=U.attributes,$=0,re=O.getAttributes();for(let X in re)if(re[X].location>=0){let Se=Q[X];Se===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(Se=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(Se=b.instanceColor));let He={};He.attribute=Se,Se&&Se.data&&(He.data=Se.data),G[X]=He,$++}r.attributes=G,r.attributesNum=$,r.index=F}function x(){let b=r.newAttributes;for(let U=0,O=b.length;U<O;U++)b[U]=0}function v(b){m(b,0)}function m(b,U){let O=r.newAttributes,F=r.enabledAttributes,G=r.attributeDivisors;O[b]=1,F[b]===0&&(n.enableVertexAttribArray(b),F[b]=1),G[b]!==U&&(n.vertexAttribDivisor(b,U),G[b]=U)}function _(){let b=r.newAttributes,U=r.enabledAttributes;for(let O=0,F=U.length;O<F;O++)U[O]!==b[O]&&(n.disableVertexAttribArray(O),U[O]=0)}function E(b,U,O,F,G,Q,$){$===!0?n.vertexAttribIPointer(b,U,O,G,Q):n.vertexAttribPointer(b,U,O,F,G,Q)}function M(b,U,O,F){x();let G=F.attributes,Q=O.getAttributes(),$=U.defaultAttributeValues;for(let re in Q){let X=Q[re];if(X.location>=0){let ae=G[re];if(ae===void 0&&(re==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),re==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor)),ae!==void 0){let Se=ae.normalized,He=ae.itemSize,ot=e.get(ae);if(ot===void 0)continue;let Lt=ot.buffer,K=ot.type,le=ot.bytesPerElement,Ue=K===n.INT||K===n.UNSIGNED_INT||ae.gpuType===Of;if(ae.isInterleavedBufferAttribute){let me=ae.data,We=me.stride,Ke=ae.offset;if(me.isInstancedInterleavedBuffer){for(let nt=0;nt<X.locationSize;nt++)m(X.location+nt,me.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let nt=0;nt<X.locationSize;nt++)v(X.location+nt);n.bindBuffer(n.ARRAY_BUFFER,Lt);for(let nt=0;nt<X.locationSize;nt++)E(X.location+nt,He/X.locationSize,K,Se,We*le,(Ke+He/X.locationSize*nt)*le,Ue)}else{if(ae.isInstancedBufferAttribute){for(let me=0;me<X.locationSize;me++)m(X.location+me,ae.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let me=0;me<X.locationSize;me++)v(X.location+me);n.bindBuffer(n.ARRAY_BUFFER,Lt);for(let me=0;me<X.locationSize;me++)E(X.location+me,He/X.locationSize,K,Se,He*le,He/X.locationSize*me*le,Ue)}}else if($!==void 0){let Se=$[re];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(X.location,Se);break;case 3:n.vertexAttrib3fv(X.location,Se);break;case 4:n.vertexAttrib4fv(X.location,Se);break;default:n.vertexAttrib1fv(X.location,Se)}}}}_()}function D(){I();for(let b in i){let U=i[b];for(let O in U){let F=U[O];for(let G in F)h(F[G].object),delete F[G];delete U[O]}delete i[b]}}function A(b){if(i[b.id]===void 0)return;let U=i[b.id];for(let O in U){let F=U[O];for(let G in F)h(F[G].object),delete F[G];delete U[O]}delete i[b.id]}function P(b){for(let U in i){let O=i[U];if(O[b.id]===void 0)continue;let F=O[b.id];for(let G in F)h(F[G].object),delete F[G];delete O[b.id]}}function I(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:v,disableUnusedAttributes:_}}function J_(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];t.update(p,i,1)}function l(c,h,d,f){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*f[x];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function j_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==oi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let I=P===jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Jn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ki&&!I)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:D,maxSamples:A}}function Q_(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ws,a=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){let g=d.clippingPlanes,x=d.clipIntersection,v=d.clipShadows,m=n.get(d);if(!s||g===null||g.length===0||r&&!v)r?h(null):c();else{let _=r?0:i,E=_*4,M=m.clippingState||null;l.value=M,M=h(g,f,E,p);for(let D=0;D!==E;++D)M[D]=t[D];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,p,g){let x=d!==null?d.length:0,v=null;if(x!==0){if(v=l.value,g!==!0||v===null){let m=p+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(v===null||v.length<m)&&(v=new Float32Array(m));for(let E=0,M=p;E!==x;++E,M+=4)o.copy(d[E]).applyMatrix4(_,a),o.normal.toArray(v,M),v[M+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,v}}function eE(n){let e=new WeakMap;function t(o,a){return a===vd?o.mapping=Go:a===xd&&(o.mapping=Wo),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===vd||a===xd)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new jd(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var qo=class extends Zc{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zo=4,Rm=[.125,.215,.35,.446,.526,.582],Or=20,Ku=new qo,Am=new ce,Ju=null,ju=0,Qu=0,ed=!1,zr=(1+Math.sqrt(5))/2,Lo=1/zr,Cm=[new w(-zr,Lo,0),new w(zr,Lo,0),new w(-Lo,0,zr),new w(Lo,0,zr),new w(0,zr,-Lo),new w(0,zr,Lo),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],Yo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ju=this._renderer.getRenderTarget(),ju=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Im(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ju,ju,Qu),this._renderer.xr.enabled=ed,e.scissorTest=!1,Sc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Go||e.mapping===Wo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ju=this._renderer.getRenderTarget(),ju=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zi,minFilter:Zi,generateMipmaps:!1,type:jn,format:oi,colorSpace:ta,depthBuffer:!1},s=Pm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pm(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tE(r)),this._blurMaterial=nE(r,e,t)}return s}_compileMaterial(e){let t=new se(this._lodPlanes[0],e);this._renderer.compile(t,Ku)}_sceneToCubeUV(e,t,i,s){let a=new un(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Am),h.toneMapping=tr,h.autoClear=!1;let p=new Ne({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),g=new se(new Ye,p),x=!1,v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,x=!0):(p.color.copy(Am),x=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):_===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let E=this._cubeSize;Sc(s,_*E,m>2?E:0,E,E),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=v}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Go||e.mapping===Wo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Im());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new se(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Sc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ku)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Cm[(s-r-1)%Cm.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new se(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Or-1),x=r/g,v=isFinite(r)?1+Math.floor(h*x):Or;v>Or&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Or}`);let m=[],_=0;for(let P=0;P<Or;++P){let I=P/x,S=Math.exp(-I*I/2);m.push(S),P===0?_+=S:P<v&&(_+=2*S)}for(let P=0;P<m.length;P++)m[P]=m[P]/_;f.envMap.value=e.texture,f.samples.value=v,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;let M=this._sizeLods[s],D=3*M*(s>E-zo?s-E+zo:0),A=4*(this._cubeSize-M);Sc(t,D,A,3*M,2*M),l.setRenderTarget(t),l.render(d,Ku)}};function tE(n){let e=[],t=[],i=[],s=n,r=n-zo+1+Rm.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-zo?l=Rm[o-n+zo-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,x=3,v=2,m=1,_=new Float32Array(x*g*p),E=new Float32Array(v*g*p),M=new Float32Array(m*g*p);for(let A=0;A<p;A++){let P=A%3*2/3-1,I=A>2?0:-1,S=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];_.set(S,x*g*A),E.set(f,v*g*A);let b=[A,A,A,A,A,A];M.set(b,m*g*A)}let D=new At;D.setAttribute("position",new on(_,x)),D.setAttribute("uv",new on(E,v)),D.setAttribute("faceIndex",new on(M,m)),e.push(D),s>zo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Pm(n,e,t){let i=new wn(n,e,t);return i.texture.mapping=dh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sc(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function nE(n,e,t){let i=new Float32Array(Or),s=new w(0,1,0);return new Pt({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Zf(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Im(){return new Pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zf(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Lm(){return new Pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Zf(){return`

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
	`}function iE(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===vd||l===xd,h=l===Go||l===Wo;if(c||h){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Yo(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Yo(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function sE(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&nl("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function rE(n,e,t,i){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let v=0,m=x.length;v<m;v++)e.remove(x[v])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let x=p[g];for(let v=0,m=x.length;v<m;v++)e.update(x[v],n.ARRAY_BUFFER)}}function c(d){let f=[],p=d.index,g=d.attributes.position,x=0;if(p!==null){let _=p.array;x=p.version;for(let E=0,M=_.length;E<M;E+=3){let D=_[E+0],A=_[E+1],P=_[E+2];f.push(D,A,A,P,P,D)}}else if(g!==void 0){let _=g.array;x=g.version;for(let E=0,M=_.length/3-1;E<M;E+=3){let D=E+0,A=E+1,P=E+2;f.push(D,A,A,P,P,D)}}else return;let v=new(Eg(f)?Yc:qc)(f,1);v.version=x;let m=r.get(d);m&&e.remove(m),r.set(d,v)}function h(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function oE(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),t.update(p,i,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let v=0;for(let m=0;m<g;m++)v+=p[m];t.update(v,i,1)}function d(f,p,g,x){if(g===0)return;let v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<f.length;m++)c(f[m]/o,p[m],x[m]);else{v.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,x,0,g);let m=0;for(let _=0;_<g;_++)m+=p[_]*x[_];t.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function aE(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function lE(n,e,t){let i=new WeakMap,s=new Vt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==d){let S=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],E=0;p===!0&&(E=1),g===!0&&(E=2),x===!0&&(E=3);let M=a.attributes.position.count*E,D=1;M>e.maxTextureSize&&(D=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let A=new Float32Array(M*D*4*d),P=new Wc(A,M,D,d);P.type=Ki,P.needsUpdate=!0;let I=E*4;for(let b=0;b<d;b++){let U=v[b],O=m[b],F=_[b],G=M*D*4*b;for(let Q=0;Q<U.count;Q++){let $=Q*I;p===!0&&(s.fromBufferAttribute(U,Q),A[G+$+0]=s.x,A[G+$+1]=s.y,A[G+$+2]=s.z,A[G+$+3]=0),g===!0&&(s.fromBufferAttribute(O,Q),A[G+$+4]=s.x,A[G+$+5]=s.y,A[G+$+6]=s.z,A[G+$+7]=0),x===!0&&(s.fromBufferAttribute(F,Q),A[G+$+8]=s.x,A[G+$+9]=s.y,A[G+$+10]=s.z,A[G+$+11]=F.itemSize===4?s.w:1)}}f={count:d,texture:P,size:new te(M,D)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function cE(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Zo=class extends Xn{constructor(e,t,i,s,r,o,a,l,c,h=Oo){if(h!==Oo&&h!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Oo&&(i=Vr),i===void 0&&h===sr&&(i=ir),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Tg=new Xn,Dm=new Zo(1,1),Rg=new Wc,Ag=new Kd,Cg=new Kc,Um=[],Nm=[],Hm=new Float32Array(16),km=new Float32Array(9),zm=new Float32Array(4);function na(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Um[s];if(r===void 0&&(r=new Float32Array(s),Um[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function xn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ph(n,e){let t=Nm[e];t===void 0&&(t=new Int32Array(e),Nm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function hE(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function uE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2fv(this.addr,e),yn(t,e)}}function dE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;n.uniform3fv(this.addr,e),yn(t,e)}}function fE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4fv(this.addr,e),yn(t,e)}}function pE(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(xn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,i))return;zm.set(i),n.uniformMatrix2fv(this.addr,!1,zm),yn(t,i)}}function mE(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(xn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,i))return;km.set(i),n.uniformMatrix3fv(this.addr,!1,km),yn(t,i)}}function gE(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(xn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,i))return;Hm.set(i),n.uniformMatrix4fv(this.addr,!1,Hm),yn(t,i)}}function vE(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2iv(this.addr,e),yn(t,e)}}function yE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;n.uniform3iv(this.addr,e),yn(t,e)}}function ME(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4iv(this.addr,e),yn(t,e)}}function _E(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function EE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2uiv(this.addr,e),yn(t,e)}}function bE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;n.uniform3uiv(this.addr,e),yn(t,e)}}function wE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4uiv(this.addr,e),yn(t,e)}}function SE(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Dm.compareFunction=_g,r=Dm):r=Tg,t.setTexture2D(e||r,s)}function TE(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ag,s)}function RE(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Cg,s)}function AE(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Rg,s)}function CE(n){switch(n){case 5126:return hE;case 35664:return uE;case 35665:return dE;case 35666:return fE;case 35674:return pE;case 35675:return mE;case 35676:return gE;case 5124:case 35670:return vE;case 35667:case 35671:return xE;case 35668:case 35672:return yE;case 35669:case 35673:return ME;case 5125:return _E;case 36294:return EE;case 36295:return bE;case 36296:return wE;case 35678:case 36198:case 36298:case 36306:case 35682:return SE;case 35679:case 36299:case 36307:return TE;case 35680:case 36300:case 36308:case 36293:return RE;case 36289:case 36303:case 36311:case 36292:return AE}}function PE(n,e){n.uniform1fv(this.addr,e)}function IE(n,e){let t=na(e,this.size,2);n.uniform2fv(this.addr,t)}function LE(n,e){let t=na(e,this.size,3);n.uniform3fv(this.addr,t)}function DE(n,e){let t=na(e,this.size,4);n.uniform4fv(this.addr,t)}function UE(n,e){let t=na(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function NE(n,e){let t=na(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function HE(n,e){let t=na(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function kE(n,e){n.uniform1iv(this.addr,e)}function zE(n,e){n.uniform2iv(this.addr,e)}function OE(n,e){n.uniform3iv(this.addr,e)}function FE(n,e){n.uniform4iv(this.addr,e)}function BE(n,e){n.uniform1uiv(this.addr,e)}function VE(n,e){n.uniform2uiv(this.addr,e)}function GE(n,e){n.uniform3uiv(this.addr,e)}function WE(n,e){n.uniform4uiv(this.addr,e)}function $E(n,e,t){let i=this.cache,s=e.length,r=ph(t,s);xn(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Tg,r[o])}function XE(n,e,t){let i=this.cache,s=e.length,r=ph(t,s);xn(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ag,r[o])}function qE(n,e,t){let i=this.cache,s=e.length,r=ph(t,s);xn(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Cg,r[o])}function YE(n,e,t){let i=this.cache,s=e.length,r=ph(t,s);xn(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Rg,r[o])}function ZE(n){switch(n){case 5126:return PE;case 35664:return IE;case 35665:return LE;case 35666:return DE;case 35674:return UE;case 35675:return NE;case 35676:return HE;case 5124:case 35670:return kE;case 35667:case 35671:return zE;case 35668:case 35672:return OE;case 35669:case 35673:return FE;case 5125:return BE;case 36294:return VE;case 36295:return GE;case 36296:return WE;case 35678:case 36198:case 36298:case 36306:case 35682:return $E;case 35679:case 36299:case 36307:return XE;case 35680:case 36300:case 36308:case 36293:return qE;case 36289:case 36303:case 36311:case 36292:return YE}}var Qd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=CE(t.type)}},ef=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ZE(t.type)}},tf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},td=/(\w+)(\])?(\[|\.)?/g;function Om(n,e){n.seq.push(e),n.map[e.id]=e}function KE(n,e,t){let i=n.name,s=i.length;for(td.lastIndex=0;;){let r=td.exec(i),o=td.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Om(t,c===void 0?new Qd(a,n,e):new ef(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new tf(a),Om(t,d)),t=d}}}var Bo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);KE(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Fm(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var JE=37297,jE=0;function QE(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Bm=new pt;function eb(n){St._getMatrix(Bm,St.workingColorSpace,n);let e=`mat3( ${Bm.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(n)){case fh:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Vm(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+QE(n.getShaderSource(e),o)}else return s}function tb(n,e){let t=eb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function nb(n,e){let t;switch(e){case Uf:t="Linear";break;case Nf:t="Reinhard";break;case Hf:t="Cineon";break;case Yr:t="ACESFilmic";break;case kf:t="AgX";break;case zf:t="Neutral";break;case yy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Tc=new w;function ib(){St.getLuminanceCoefficients(Tc);let n=Tc.x.toFixed(4),e=Tc.y.toFixed(4),t=Tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(il).join(`
`)}function rb(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ob(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function il(n){return n!==""}function Gm(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ab=/^[ \t]*#include +<([\w\d./]+)>/gm;function nf(n){return n.replace(ab,cb)}var lb=new Map;function cb(n,e){let t=vt[e];if(t===void 0){let i=lb.get(e);if(i!==void 0)t=vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nf(t)}var hb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $m(n){return n.replace(hb,ub)}function ub(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xm(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function db(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===cg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Lf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bs&&(e="SHADOWMAP_TYPE_VSM"),e}function fb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Go:case Wo:e="ENVMAP_TYPE_CUBE";break;case dh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Wo:e="ENVMAP_MODE_REFRACTION";break}return e}function mb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case hg:e="ENVMAP_BLENDING_MULTIPLY";break;case vy:e="ENVMAP_BLENDING_MIX";break;case xy:e="ENVMAP_BLENDING_ADD";break}return e}function gb(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function vb(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=db(t),c=fb(t),h=pb(t),d=mb(t),f=gb(t),p=sb(t),g=rb(r),x=s.createProgram(),v,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(il).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(il).join(`
`),m.length>0&&(m+=`
`)):(v=[Xm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(il).join(`
`),m=[Xm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tr?"#define TONE_MAPPING":"",t.toneMapping!==tr?vt.tonemapping_pars_fragment:"",t.toneMapping!==tr?nb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,tb("linearToOutputTexel",t.outputColorSpace),ib(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(il).join(`
`)),o=nf(o),o=Gm(o,t),o=Wm(o,t),a=nf(a),a=Gm(a,t),a=Wm(a,t),o=$m(o),a=$m(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===rm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=_+v+o,M=_+m+a,D=Fm(s,s.VERTEX_SHADER,E),A=Fm(s,s.FRAGMENT_SHADER,M);s.attachShader(x,D),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(U){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(x).trim(),F=s.getShaderInfoLog(D).trim(),G=s.getShaderInfoLog(A).trim(),Q=!0,$=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,D,A);else{let re=Vm(s,D,"vertex"),X=Vm(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+O+`
`+re+`
`+X)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||G==="")&&($=!1);$&&(U.diagnostics={runnable:Q,programLog:O,vertexShader:{log:F,prefix:v},fragmentShader:{log:G,prefix:m}})}s.deleteShader(D),s.deleteShader(A),I=new Bo(s,x),S=ob(s,x)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,JE)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jE++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=A,this}var xb=0,sf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new rf(e),t.set(e,i)),i}},rf=class{constructor(e){this.id=xb++,this.code=e,this.usedTimes=0}};function yb(n,e,t,i,s,r,o){let a=new Xc,l=new sf,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function v(S,b,U,O,F){let G=O.fog,Q=F.geometry,$=S.isMeshStandardMaterial?O.environment:null,re=(S.isMeshStandardMaterial?t:e).get(S.envMap||$),X=re&&re.mapping===dh?re.image.height:null,ae=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let Se=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,He=Se!==void 0?Se.length:0,ot=0;Q.morphAttributes.position!==void 0&&(ot=1),Q.morphAttributes.normal!==void 0&&(ot=2),Q.morphAttributes.color!==void 0&&(ot=3);let Lt,K,le,Ue;if(ae){let $t=Yi[ae];Lt=$t.vertexShader,K=$t.fragmentShader}else Lt=S.vertexShader,K=S.fragmentShader,l.update(S),le=l.getVertexShaderID(S),Ue=l.getFragmentShaderID(S);let me=n.getRenderTarget(),We=n.state.buffers.depth.getReversed(),Ke=F.isInstancedMesh===!0,nt=F.isBatchedMesh===!0,Kt=!!S.map,Et=!!S.matcap,jt=!!re,H=!!S.aoMap,Cn=!!S.lightMap,yt=!!S.bumpMap,Mt=!!S.normalMap,Ze=!!S.displacementMap,Wt=!!S.emissiveMap,qe=!!S.metalnessMap,L=!!S.roughnessMap,T=S.anisotropy>0,B=S.clearcoat>0,j=S.dispersion>0,ie=S.iridescence>0,J=S.sheen>0,ze=S.transmission>0,Ee=T&&!!S.anisotropyMap,Re=B&&!!S.clearcoatMap,xt=B&&!!S.clearcoatNormalMap,oe=B&&!!S.clearcoatRoughnessMap,Ie=ie&&!!S.iridescenceMap,je=ie&&!!S.iridescenceThicknessMap,et=J&&!!S.sheenColorMap,Le=J&&!!S.sheenRoughnessMap,wt=!!S.specularMap,it=!!S.specularColorMap,Dt=!!S.specularIntensityMap,N=ze&&!!S.transmissionMap,ye=ze&&!!S.thicknessMap,q=!!S.gradientMap,ee=!!S.alphaMap,Pe=S.alphaTest>0,Ae=!!S.alphaHash,dt=!!S.extensions,cn=tr;S.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(cn=n.toneMapping);let Pn={shaderID:ae,shaderType:S.type,shaderName:S.name,vertexShader:Lt,fragmentShader:K,defines:S.defines,customVertexShaderID:le,customFragmentShaderID:Ue,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:nt,batchingColor:nt&&F._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&F.instanceColor!==null,instancingMorph:Ke&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:ta,alphaToCoverage:!!S.alphaToCoverage,map:Kt,matcap:Et,envMap:jt,envMapMode:jt&&re.mapping,envMapCubeUVHeight:X,aoMap:H,lightMap:Cn,bumpMap:yt,normalMap:Mt,displacementMap:f&&Ze,emissiveMap:Wt,normalMapObjectSpace:Mt&&S.normalMapType===by,normalMapTangentSpace:Mt&&S.normalMapType===Xf,metalnessMap:qe,roughnessMap:L,anisotropy:T,anisotropyMap:Ee,clearcoat:B,clearcoatMap:Re,clearcoatNormalMap:xt,clearcoatRoughnessMap:oe,dispersion:j,iridescence:ie,iridescenceMap:Ie,iridescenceThicknessMap:je,sheen:J,sheenColorMap:et,sheenRoughnessMap:Le,specularMap:wt,specularColorMap:it,specularIntensityMap:Dt,transmission:ze,transmissionMap:N,thicknessMap:ye,gradientMap:q,opaque:S.transparent===!1&&S.blending===ai&&S.alphaToCoverage===!1,alphaMap:ee,alphaTest:Pe,alphaHash:Ae,combine:S.combine,mapUv:Kt&&x(S.map.channel),aoMapUv:H&&x(S.aoMap.channel),lightMapUv:Cn&&x(S.lightMap.channel),bumpMapUv:yt&&x(S.bumpMap.channel),normalMapUv:Mt&&x(S.normalMap.channel),displacementMapUv:Ze&&x(S.displacementMap.channel),emissiveMapUv:Wt&&x(S.emissiveMap.channel),metalnessMapUv:qe&&x(S.metalnessMap.channel),roughnessMapUv:L&&x(S.roughnessMap.channel),anisotropyMapUv:Ee&&x(S.anisotropyMap.channel),clearcoatMapUv:Re&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:xt&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:je&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:et&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Le&&x(S.sheenRoughnessMap.channel),specularMapUv:wt&&x(S.specularMap.channel),specularColorMapUv:it&&x(S.specularColorMap.channel),specularIntensityMapUv:Dt&&x(S.specularIntensityMap.channel),transmissionMapUv:N&&x(S.transmissionMap.channel),thicknessMapUv:ye&&x(S.thicknessMap.channel),alphaMapUv:ee&&x(S.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Mt||T),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Q.attributes.uv&&(Kt||ee),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:We,skinning:F.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:He,morphTextureStride:ot,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:cn,decodeVideoTexture:Kt&&S.map.isVideoTexture===!0&&St.getTransfer(S.map.colorSpace)===Bt,decodeVideoTextureEmissive:Wt&&S.emissiveMap.isVideoTexture===!0&&St.getTransfer(S.emissiveMap.colorSpace)===Bt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Rt,flipSided:S.side===Dn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:dt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&S.extensions.multiDraw===!0||nt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Pn.vertexUv1s=c.has(1),Pn.vertexUv2s=c.has(2),Pn.vertexUv3s=c.has(3),c.clear(),Pn}function m(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let U in S.defines)b.push(U),b.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(_(b,S),E(b,S),b.push(n.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function _(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function E(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function M(S){let b=g[S.type],U;if(b){let O=Yi[b];U=Qn.clone(O.uniforms)}else U=S.uniforms;return U}function D(S,b){let U;for(let O=0,F=h.length;O<F;O++){let G=h[O];if(G.cacheKey===b){U=G,++U.usedTimes;break}}return U===void 0&&(U=new vb(n,b,S,r),h.push(U)),U}function A(S){if(--S.usedTimes===0){let b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function P(S){l.remove(S)}function I(){l.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:M,acquireProgram:D,releaseProgram:A,releaseShaderCache:P,programs:h,dispose:I}}function Mb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function _b(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function qm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ym(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,f,p,g,x,v){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:v},n[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=x,m.group=v),e++,m}function a(d,f,p,g,x,v){let m=o(d,f,p,g,x,v);p.transmission>0?i.push(m):p.transparent===!0?s.push(m):t.push(m)}function l(d,f,p,g,x,v){let m=o(d,f,p,g,x,v);p.transmission>0?i.unshift(m):p.transparent===!0?s.unshift(m):t.unshift(m)}function c(d,f){t.length>1&&t.sort(d||_b),i.length>1&&i.sort(f||qm),s.length>1&&s.sort(f||qm)}function h(){for(let d=e,f=n.length;d<f;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Eb(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Ym,n.set(i,[o])):s>=r.length?(o=new Ym,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function bb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new ce};break;case"SpotLight":t={position:new w,direction:new w,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":t={color:new ce,position:new w,halfWidth:new w,halfHeight:new w};break}return n[e.id]=t,t}}}function wb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Sb=0;function Tb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Rb(n){let e=new bb,t=wb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new w);let s=new w,r=new mt,o=new mt;function a(c){let h=0,d=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,x=0,v=0,m=0,_=0,E=0,M=0,D=0,A=0,P=0;c.sort(Tb);for(let S=0,b=c.length;S<b;S++){let U=c[S],O=U.color,F=U.intensity,G=U.distance,Q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=O.r*F,d+=O.g*F,f+=O.b*F;else if(U.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(U.sh.coefficients[$],F);P++}else if(U.isDirectionalLight){let $=e.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let re=U.shadow,X=t.get(U);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=U.shadow.matrix,_++}i.directional[p]=$,p++}else if(U.isSpotLight){let $=e.get(U);$.position.setFromMatrixPosition(U.matrixWorld),$.color.copy(O).multiplyScalar(F),$.distance=G,$.coneCos=Math.cos(U.angle),$.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),$.decay=U.decay,i.spot[x]=$;let re=U.shadow;if(U.map&&(i.spotLightMap[D]=U.map,D++,re.updateMatrices(U),U.castShadow&&A++),i.spotLightMatrix[x]=re.matrix,U.castShadow){let X=t.get(U);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,i.spotShadow[x]=X,i.spotShadowMap[x]=Q,M++}x++}else if(U.isRectAreaLight){let $=e.get(U);$.color.copy(O).multiplyScalar(F),$.halfWidth.set(U.width*.5,0,0),$.halfHeight.set(0,U.height*.5,0),i.rectArea[v]=$,v++}else if(U.isPointLight){let $=e.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),$.distance=U.distance,$.decay=U.decay,U.castShadow){let re=U.shadow,X=t.get(U);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,X.shadowCameraNear=re.camera.near,X.shadowCameraFar=re.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=U.shadow.matrix,E++}i.point[g]=$,g++}else if(U.isHemisphereLight){let $=e.get(U);$.skyColor.copy(U.color).multiplyScalar(F),$.groundColor.copy(U.groundColor).multiplyScalar(F),i.hemi[m]=$,m++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;let I=i.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==v||I.hemiLength!==m||I.numDirectionalShadows!==_||I.numPointShadows!==E||I.numSpotShadows!==M||I.numSpotMaps!==D||I.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=v,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=M+D-A,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,I.directionalLength=p,I.pointLength=g,I.spotLength=x,I.rectAreaLength=v,I.hemiLength=m,I.numDirectionalShadows=_,I.numPointShadows=E,I.numSpotShadows=M,I.numSpotMaps=D,I.numLightProbes=P,i.version=Sb++)}function l(c,h){let d=0,f=0,p=0,g=0,x=0,v=h.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){let E=c[m];if(E.isDirectionalLight){let M=i.directional[d];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),d++}else if(E.isSpotLight){let M=i.spot[p];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),p++}else if(E.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(v),o.identity(),r.copy(E.matrixWorld),r.premultiply(v),o.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(v),f++}else if(E.isHemisphereLight){let M=i.hemi[x];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(v),x++}}}return{setup:a,setupView:l,state:i}}function Zm(n){let e=new Rb(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ab(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Zm(n),e.set(s,[a])):r>=o.length?(a=new Zm(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var of=class extends Ji{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=_y,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},af=class extends Ji{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Cb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pb=`uniform sampler2D shadow_pass;
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
}`;function Ib(n,e,t){let i=new hl,s=new te,r=new te,o=new Vt,a=new of({depthPacking:Ey}),l=new af,c={},h=t.maxTextureSize,d={[nr]:Dn,[Dn]:nr,[Rt]:Rt},f=new Pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:Cb,fragmentShader:Pb}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new At;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new se(g,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cg;let m=this.type;this.render=function(A,P,I){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||A.length===0)return;let S=n.getRenderTarget(),b=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),O=n.state;O.setBlending(vn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let F=m!==bs&&this.type===bs,G=m===bs&&this.type!==bs;for(let Q=0,$=A.length;Q<$;Q++){let re=A[Q],X=re.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ae=X.getFrameExtents();if(s.multiply(ae),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ae.x),s.x=r.x*ae.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ae.y),s.y=r.y*ae.y,X.mapSize.y=r.y)),X.map===null||F===!0||G===!0){let He=this.type!==bs?{minFilter:bn,magFilter:bn}:{};X.map!==null&&X.map.dispose(),X.map=new wn(s.x,s.y,He),X.map.texture.name=re.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();let Se=X.getViewportCount();for(let He=0;He<Se;He++){let ot=X.getViewport(He);o.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),O.viewport(o),X.updateMatrices(re,He),i=X.getFrustum(),M(P,I,X.camera,re,this.type)}X.isPointLightShadow!==!0&&this.type===bs&&_(X,I),X.needsUpdate=!1}m=this.type,v.needsUpdate=!1,n.setRenderTarget(S,b,U)};function _(A,P){let I=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new wn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(P,null,I,f,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(P,null,I,p,x,null)}function E(A,P,I,S){let b=null,U=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)b=U;else if(b=I.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let O=b.uuid,F=P.uuid,G=c[O];G===void 0&&(G={},c[O]=G);let Q=G[F];Q===void 0&&(Q=b.clone(),G[F]=Q,P.addEventListener("dispose",D)),b=Q}if(b.visible=P.visible,b.wireframe=P.wireframe,S===bs?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:d[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let O=n.properties.get(b);O.light=I}return b}function M(A,P,I,S,b){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===bs)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);let F=e.update(A),G=A.material;if(Array.isArray(G)){let Q=F.groups;for(let $=0,re=Q.length;$<re;$++){let X=Q[$],ae=G[X.materialIndex];if(ae&&ae.visible){let Se=E(A,ae,S,b);A.onBeforeShadow(n,A,P,I,F,Se,X),n.renderBufferDirect(I,null,F,Se,A,X),A.onAfterShadow(n,A,P,I,F,Se,X)}}}else if(G.visible){let Q=E(A,G,S,b);A.onBeforeShadow(n,A,P,I,F,Q,null),n.renderBufferDirect(I,null,F,Q,A,null),A.onAfterShadow(n,A,P,I,F,Q,null)}}let O=A.children;for(let F=0,G=O.length;F<G;F++)M(O[F],P,I,S,b)}function D(A){A.target.removeEventListener("dispose",D);for(let I in c){let S=c[I],b=A.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var Lb={[hd]:ud,[dd]:md,[fd]:gd,[Vo]:pd,[ud]:hd,[md]:dd,[gd]:fd,[pd]:Vo};function Db(n,e){function t(){let N=!1,ye=new Vt,q=null,ee=new Vt(0,0,0,0);return{setMask:function(Pe){q!==Pe&&!N&&(n.colorMask(Pe,Pe,Pe,Pe),q=Pe)},setLocked:function(Pe){N=Pe},setClear:function(Pe,Ae,dt,cn,Pn){Pn===!0&&(Pe*=cn,Ae*=cn,dt*=cn),ye.set(Pe,Ae,dt,cn),ee.equals(ye)===!1&&(n.clearColor(Pe,Ae,dt,cn),ee.copy(ye))},reset:function(){N=!1,q=null,ee.set(-1,0,0,0)}}}function i(){let N=!1,ye=!1,q=null,ee=null,Pe=null;return{setReversed:function(Ae){if(ye!==Ae){let dt=e.get("EXT_clip_control");ye?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT);let cn=Pe;Pe=null,this.setClear(cn)}ye=Ae},getReversed:function(){return ye},setTest:function(Ae){Ae?me(n.DEPTH_TEST):We(n.DEPTH_TEST)},setMask:function(Ae){q!==Ae&&!N&&(n.depthMask(Ae),q=Ae)},setFunc:function(Ae){if(ye&&(Ae=Lb[Ae]),ee!==Ae){switch(Ae){case hd:n.depthFunc(n.NEVER);break;case ud:n.depthFunc(n.ALWAYS);break;case dd:n.depthFunc(n.LESS);break;case Vo:n.depthFunc(n.LEQUAL);break;case fd:n.depthFunc(n.EQUAL);break;case pd:n.depthFunc(n.GEQUAL);break;case md:n.depthFunc(n.GREATER);break;case gd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=Ae}},setLocked:function(Ae){N=Ae},setClear:function(Ae){Pe!==Ae&&(ye&&(Ae=1-Ae),n.clearDepth(Ae),Pe=Ae)},reset:function(){N=!1,q=null,ee=null,Pe=null,ye=!1}}}function s(){let N=!1,ye=null,q=null,ee=null,Pe=null,Ae=null,dt=null,cn=null,Pn=null;return{setTest:function($t){N||($t?me(n.STENCIL_TEST):We(n.STENCIL_TEST))},setMask:function($t){ye!==$t&&!N&&(n.stencilMask($t),ye=$t)},setFunc:function($t,Li,gs){(q!==$t||ee!==Li||Pe!==gs)&&(n.stencilFunc($t,Li,gs),q=$t,ee=Li,Pe=gs)},setOp:function($t,Li,gs){(Ae!==$t||dt!==Li||cn!==gs)&&(n.stencilOp($t,Li,gs),Ae=$t,dt=Li,cn=gs)},setLocked:function($t){N=$t},setClear:function($t){Pn!==$t&&(n.clearStencil($t),Pn=$t)},reset:function(){N=!1,ye=null,q=null,ee=null,Pe=null,Ae=null,dt=null,cn=null,Pn=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,p=[],g=null,x=!1,v=null,m=null,_=null,E=null,M=null,D=null,A=null,P=new ce(0,0,0),I=0,S=!1,b=null,U=null,O=null,F=null,G=null,Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,re=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=re>=1):X.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=re>=2);let ae=null,Se={},He=n.getParameter(n.SCISSOR_BOX),ot=n.getParameter(n.VIEWPORT),Lt=new Vt().fromArray(He),K=new Vt().fromArray(ot);function le(N,ye,q,ee){let Pe=new Uint8Array(4),Ae=n.createTexture();n.bindTexture(N,Ae),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let dt=0;dt<q;dt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,ee,0,n.RGBA,n.UNSIGNED_BYTE,Pe):n.texImage2D(ye+dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pe);return Ae}let Ue={};Ue[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),Ue[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ue[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),me(n.DEPTH_TEST),o.setFunc(Vo),yt(!1),Mt(j0),me(n.CULL_FACE),H(vn);function me(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function We(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function Ke(N,ye){return d[N]!==ye?(n.bindFramebuffer(N,ye),d[N]=ye,N===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ye),N===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function nt(N,ye){let q=p,ee=!1;if(N){q=f.get(ye),q===void 0&&(q=[],f.set(ye,q));let Pe=N.textures;if(q.length!==Pe.length||q[0]!==n.COLOR_ATTACHMENT0){for(let Ae=0,dt=Pe.length;Ae<dt;Ae++)q[Ae]=n.COLOR_ATTACHMENT0+Ae;q.length=Pe.length,ee=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,ee=!0);ee&&n.drawBuffers(q)}function Kt(N){return g!==N?(n.useProgram(N),g=N,!0):!1}let Et={[vi]:n.FUNC_ADD,[iy]:n.FUNC_SUBTRACT,[sy]:n.FUNC_REVERSE_SUBTRACT};Et[ry]=n.MIN,Et[oy]=n.MAX;let jt={[ea]:n.ZERO,[ay]:n.ONE,[ly]:n.SRC_COLOR,[ld]:n.SRC_ALPHA,[dy]:n.SRC_ALPHA_SATURATE,[uh]:n.DST_COLOR,[hh]:n.DST_ALPHA,[cy]:n.ONE_MINUS_SRC_COLOR,[cd]:n.ONE_MINUS_SRC_ALPHA,[uy]:n.ONE_MINUS_DST_COLOR,[hy]:n.ONE_MINUS_DST_ALPHA,[fy]:n.CONSTANT_COLOR,[py]:n.ONE_MINUS_CONSTANT_COLOR,[my]:n.CONSTANT_ALPHA,[gy]:n.ONE_MINUS_CONSTANT_ALPHA};function H(N,ye,q,ee,Pe,Ae,dt,cn,Pn,$t){if(N===vn){x===!0&&(We(n.BLEND),x=!1);return}if(x===!1&&(me(n.BLEND),x=!0),N!==Df){if(N!==v||$t!==S){if((m!==vi||M!==vi)&&(n.blendEquation(n.FUNC_ADD),m=vi,M=vi),$t)switch(N){case ai:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ke:n.blendFunc(n.ONE,n.ONE);break;case Q0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case em:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ai:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ke:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Q0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case em:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}_=null,E=null,D=null,A=null,P.set(0,0,0),I=0,v=N,S=$t}return}Pe=Pe||ye,Ae=Ae||q,dt=dt||ee,(ye!==m||Pe!==M)&&(n.blendEquationSeparate(Et[ye],Et[Pe]),m=ye,M=Pe),(q!==_||ee!==E||Ae!==D||dt!==A)&&(n.blendFuncSeparate(jt[q],jt[ee],jt[Ae],jt[dt]),_=q,E=ee,D=Ae,A=dt),(cn.equals(P)===!1||Pn!==I)&&(n.blendColor(cn.r,cn.g,cn.b,Pn),P.copy(cn),I=Pn),v=N,S=!1}function Cn(N,ye){N.side===Rt?We(n.CULL_FACE):me(n.CULL_FACE);let q=N.side===Dn;ye&&(q=!q),yt(q),N.blending===ai&&N.transparent===!1?H(vn):H(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let ee=N.stencilWrite;a.setTest(ee),ee&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Wt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):We(n.SAMPLE_ALPHA_TO_COVERAGE)}function yt(N){b!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),b=N)}function Mt(N){N!==ty?(me(n.CULL_FACE),N!==U&&(N===j0?n.cullFace(n.BACK):N===ny?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):We(n.CULL_FACE),U=N}function Ze(N){N!==O&&($&&n.lineWidth(N),O=N)}function Wt(N,ye,q){N?(me(n.POLYGON_OFFSET_FILL),(F!==ye||G!==q)&&(n.polygonOffset(ye,q),F=ye,G=q)):We(n.POLYGON_OFFSET_FILL)}function qe(N){N?me(n.SCISSOR_TEST):We(n.SCISSOR_TEST)}function L(N){N===void 0&&(N=n.TEXTURE0+Q-1),ae!==N&&(n.activeTexture(N),ae=N)}function T(N,ye,q){q===void 0&&(ae===null?q=n.TEXTURE0+Q-1:q=ae);let ee=Se[q];ee===void 0&&(ee={type:void 0,texture:void 0},Se[q]=ee),(ee.type!==N||ee.texture!==ye)&&(ae!==q&&(n.activeTexture(q),ae=q),n.bindTexture(N,ye||Ue[N]),ee.type=N,ee.texture=ye)}function B(){let N=Se[ae];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ze(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function je(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(N){Lt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Lt.copy(N))}function Le(N){K.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),K.copy(N))}function wt(N,ye){let q=c.get(ye);q===void 0&&(q=new WeakMap,c.set(ye,q));let ee=q.get(N);ee===void 0&&(ee=n.getUniformBlockIndex(ye,N.name),q.set(N,ee))}function it(N,ye){let ee=c.get(ye).get(N);l.get(ye)!==ee&&(n.uniformBlockBinding(ye,ee,N.__bindingPointIndex),l.set(ye,ee))}function Dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ae=null,Se={},d={},f=new WeakMap,p=[],g=null,x=!1,v=null,m=null,_=null,E=null,M=null,D=null,A=null,P=new ce(0,0,0),I=0,S=!1,b=null,U=null,O=null,F=null,G=null,Lt.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:me,disable:We,bindFramebuffer:Ke,drawBuffers:nt,useProgram:Kt,setBlending:H,setMaterial:Cn,setFlipSided:yt,setCullFace:Mt,setLineWidth:Ze,setPolygonOffset:Wt,setScissorTest:qe,activeTexture:L,bindTexture:T,unbindTexture:B,compressedTexImage2D:j,compressedTexImage3D:ie,texImage2D:Ie,texImage3D:je,updateUBOMapping:wt,uniformBlockBinding:it,texStorage2D:xt,texStorage3D:oe,texSubImage2D:J,texSubImage3D:ze,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Re,scissor:et,viewport:Le,reset:Dt}}function Km(n,e,t,i){let s=Ub(i);switch(t){case mg:return n*e;case vg:return n*e;case xg:return n*e*2;case Vf:return n*e/s.components*s.byteLength;case Gf:return n*e/s.components*s.byteLength;case yg:return n*e*2/s.components*s.byteLength;case Wf:return n*e*2/s.components*s.byteLength;case gg:return n*e*3/s.components*s.byteLength;case oi:return n*e*4/s.components*s.byteLength;case $f:return n*e*4/s.components*s.byteLength;case Nc:case Hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case kc:case zc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _d:case bd:return Math.max(n,16)*Math.max(e,8)/4;case Md:case Ed:return Math.max(n,8)*Math.max(e,8)/2;case wd:case Sd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Td:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Id:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ud:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Nd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case kd:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case zd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Od:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Fd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Oc:case Bd:case Vd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Mg:case Gd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Wd:case $d:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ub(n){switch(n){case Jn:case dg:return{byteLength:1,components:1};case cl:case fg:case jn:return{byteLength:2,components:1};case Ff:case Bf:return{byteLength:2,components:4};case Vr:case Of:case Ki:return{byteLength:4,components:1};case pg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Nb(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,T){return p?new OffscreenCanvas(L,T):Vc("canvas")}function x(L,T,B){let j=1,ie=qe(L);if((ie.width>B||ie.height>B)&&(j=B/Math.max(ie.width,ie.height)),j<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let J=Math.floor(j*ie.width),ze=Math.floor(j*ie.height);d===void 0&&(d=g(J,ze));let Ee=T?g(J,ze):d;return Ee.width=J,Ee.height=ze,Ee.getContext("2d").drawImage(L,0,0,J,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+J+"x"+ze+")."),Ee}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),L;return L}function v(L){return L.generateMipmaps}function m(L){n.generateMipmap(L)}function _(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(L,T,B,j,ie=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let J=T;if(T===n.RED&&(B===n.FLOAT&&(J=n.R32F),B===n.HALF_FLOAT&&(J=n.R16F),B===n.UNSIGNED_BYTE&&(J=n.R8)),T===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.R8UI),B===n.UNSIGNED_SHORT&&(J=n.R16UI),B===n.UNSIGNED_INT&&(J=n.R32UI),B===n.BYTE&&(J=n.R8I),B===n.SHORT&&(J=n.R16I),B===n.INT&&(J=n.R32I)),T===n.RG&&(B===n.FLOAT&&(J=n.RG32F),B===n.HALF_FLOAT&&(J=n.RG16F),B===n.UNSIGNED_BYTE&&(J=n.RG8)),T===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RG8UI),B===n.UNSIGNED_SHORT&&(J=n.RG16UI),B===n.UNSIGNED_INT&&(J=n.RG32UI),B===n.BYTE&&(J=n.RG8I),B===n.SHORT&&(J=n.RG16I),B===n.INT&&(J=n.RG32I)),T===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RGB8UI),B===n.UNSIGNED_SHORT&&(J=n.RGB16UI),B===n.UNSIGNED_INT&&(J=n.RGB32UI),B===n.BYTE&&(J=n.RGB8I),B===n.SHORT&&(J=n.RGB16I),B===n.INT&&(J=n.RGB32I)),T===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),B===n.UNSIGNED_INT&&(J=n.RGBA32UI),B===n.BYTE&&(J=n.RGBA8I),B===n.SHORT&&(J=n.RGBA16I),B===n.INT&&(J=n.RGBA32I)),T===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),T===n.RGBA){let ze=ie?fh:St.getTransfer(j);B===n.FLOAT&&(J=n.RGBA32F),B===n.HALF_FLOAT&&(J=n.RGBA16F),B===n.UNSIGNED_BYTE&&(J=ze===Bt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function M(L,T){let B;return L?T===null||T===Vr||T===ir?B=n.DEPTH24_STENCIL8:T===Ki?B=n.DEPTH32F_STENCIL8:T===cl&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Vr||T===ir?B=n.DEPTH_COMPONENT24:T===Ki?B=n.DEPTH_COMPONENT32F:T===cl&&(B=n.DEPTH_COMPONENT16),B}function D(L,T){return v(L)===!0||L.isFramebufferTexture&&L.minFilter!==bn&&L.minFilter!==Zi?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function A(L){let T=L.target;T.removeEventListener("dispose",A),I(T),T.isVideoTexture&&h.delete(T)}function P(L){let T=L.target;T.removeEventListener("dispose",P),b(T)}function I(L){let T=i.get(L);if(T.__webglInit===void 0)return;let B=L.source,j=f.get(B);if(j){let ie=j[T.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&S(L),Object.keys(j).length===0&&f.delete(B)}i.remove(L)}function S(L){let T=i.get(L);n.deleteTexture(T.__webglTexture);let B=L.source,j=f.get(B);delete j[T.__cacheKey],o.memory.textures--}function b(L){let T=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(T.__webglFramebuffer[j]))for(let ie=0;ie<T.__webglFramebuffer[j].length;ie++)n.deleteFramebuffer(T.__webglFramebuffer[j][ie]);else n.deleteFramebuffer(T.__webglFramebuffer[j]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[j])}else{if(Array.isArray(T.__webglFramebuffer))for(let j=0;j<T.__webglFramebuffer.length;j++)n.deleteFramebuffer(T.__webglFramebuffer[j]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let j=0;j<T.__webglColorRenderbuffer.length;j++)T.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[j]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let B=L.textures;for(let j=0,ie=B.length;j<ie;j++){let J=i.get(B[j]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(B[j])}i.remove(L)}let U=0;function O(){U=0}function F(){let L=U;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),U+=1,L}function G(L){let T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function Q(L,T){let B=i.get(L);if(L.isVideoTexture&&Ze(L),L.isRenderTargetTexture===!1&&L.version>0&&B.__version!==L.version){let j=L.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(B,L,T);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+T)}function $(L,T){let B=i.get(L);if(L.version>0&&B.__version!==L.version){K(B,L,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+T)}function re(L,T){let B=i.get(L);if(L.version>0&&B.__version!==L.version){K(B,L,T);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+T)}function X(L,T){let B=i.get(L);if(L.version>0&&B.__version!==L.version){le(B,L,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+T)}let ae={[$n]:n.REPEAT,[Fr]:n.CLAMP_TO_EDGE,[yd]:n.MIRRORED_REPEAT},Se={[bn]:n.NEAREST,[My]:n.NEAREST_MIPMAP_NEAREST,[oc]:n.NEAREST_MIPMAP_LINEAR,[Zi]:n.LINEAR,[Au]:n.LINEAR_MIPMAP_NEAREST,[Br]:n.LINEAR_MIPMAP_LINEAR},He={[wy]:n.NEVER,[Py]:n.ALWAYS,[Sy]:n.LESS,[_g]:n.LEQUAL,[Ty]:n.EQUAL,[Cy]:n.GEQUAL,[Ry]:n.GREATER,[Ay]:n.NOTEQUAL};function ot(L,T){if(T.type===Ki&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Zi||T.magFilter===Au||T.magFilter===oc||T.magFilter===Br||T.minFilter===Zi||T.minFilter===Au||T.minFilter===oc||T.minFilter===Br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,ae[T.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,ae[T.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,ae[T.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,Se[T.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,Se[T.minFilter]),T.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,He[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===bn||T.minFilter!==oc&&T.minFilter!==Br||T.type===Ki&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Lt(L,T){let B=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",A));let j=T.source,ie=f.get(j);ie===void 0&&(ie={},f.set(j,ie));let J=G(T);if(J!==L.__cacheKey){ie[J]===void 0&&(ie[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ie[J].usedTimes++;let ze=ie[L.__cacheKey];ze!==void 0&&(ie[L.__cacheKey].usedTimes--,ze.usedTimes===0&&S(T)),L.__cacheKey=J,L.__webglTexture=ie[J].texture}return B}function K(L,T,B){let j=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(j=n.TEXTURE_3D);let ie=Lt(L,T),J=T.source;t.bindTexture(j,L.__webglTexture,n.TEXTURE0+B);let ze=i.get(J);if(J.version!==ze.__version||ie===!0){t.activeTexture(n.TEXTURE0+B);let Ee=St.getPrimaries(St.workingColorSpace),Re=T.colorSpace===Qs?null:St.getPrimaries(T.colorSpace),xt=T.colorSpace===Qs||Ee===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let oe=x(T.image,!1,s.maxTextureSize);oe=Wt(T,oe);let Ie=r.convert(T.format,T.colorSpace),je=r.convert(T.type),et=E(T.internalFormat,Ie,je,T.colorSpace,T.isVideoTexture);ot(j,T);let Le,wt=T.mipmaps,it=T.isVideoTexture!==!0,Dt=ze.__version===void 0||ie===!0,N=J.dataReady,ye=D(T,oe);if(T.isDepthTexture)et=M(T.format===sr,T.type),Dt&&(it?t.texStorage2D(n.TEXTURE_2D,1,et,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,et,oe.width,oe.height,0,Ie,je,null));else if(T.isDataTexture)if(wt.length>0){it&&Dt&&t.texStorage2D(n.TEXTURE_2D,ye,et,wt[0].width,wt[0].height);for(let q=0,ee=wt.length;q<ee;q++)Le=wt[q],it?N&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Le.width,Le.height,Ie,je,Le.data):t.texImage2D(n.TEXTURE_2D,q,et,Le.width,Le.height,0,Ie,je,Le.data);T.generateMipmaps=!1}else it?(Dt&&t.texStorage2D(n.TEXTURE_2D,ye,et,oe.width,oe.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,Ie,je,oe.data)):t.texImage2D(n.TEXTURE_2D,0,et,oe.width,oe.height,0,Ie,je,oe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){it&&Dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,et,wt[0].width,wt[0].height,oe.depth);for(let q=0,ee=wt.length;q<ee;q++)if(Le=wt[q],T.format!==oi)if(Ie!==null)if(it){if(N)if(T.layerUpdates.size>0){let Pe=Km(Le.width,Le.height,T.format,T.type);for(let Ae of T.layerUpdates){let dt=Le.data.subarray(Ae*Pe/Le.data.BYTES_PER_ELEMENT,(Ae+1)*Pe/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,Ae,Le.width,Le.height,1,Ie,dt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Le.width,Le.height,oe.depth,Ie,Le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,et,Le.width,Le.height,oe.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Le.width,Le.height,oe.depth,Ie,je,Le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,et,Le.width,Le.height,oe.depth,0,Ie,je,Le.data)}else{it&&Dt&&t.texStorage2D(n.TEXTURE_2D,ye,et,wt[0].width,wt[0].height);for(let q=0,ee=wt.length;q<ee;q++)Le=wt[q],T.format!==oi?Ie!==null?it?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,Le.width,Le.height,Ie,Le.data):t.compressedTexImage2D(n.TEXTURE_2D,q,et,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?N&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Le.width,Le.height,Ie,je,Le.data):t.texImage2D(n.TEXTURE_2D,q,et,Le.width,Le.height,0,Ie,je,Le.data)}else if(T.isDataArrayTexture)if(it){if(Dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,et,oe.width,oe.height,oe.depth),N)if(T.layerUpdates.size>0){let q=Km(oe.width,oe.height,T.format,T.type);for(let ee of T.layerUpdates){let Pe=oe.data.subarray(ee*q/oe.data.BYTES_PER_ELEMENT,(ee+1)*q/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,oe.width,oe.height,1,Ie,je,Pe)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Ie,je,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,et,oe.width,oe.height,oe.depth,0,Ie,je,oe.data);else if(T.isData3DTexture)it?(Dt&&t.texStorage3D(n.TEXTURE_3D,ye,et,oe.width,oe.height,oe.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Ie,je,oe.data)):t.texImage3D(n.TEXTURE_3D,0,et,oe.width,oe.height,oe.depth,0,Ie,je,oe.data);else if(T.isFramebufferTexture){if(Dt)if(it)t.texStorage2D(n.TEXTURE_2D,ye,et,oe.width,oe.height);else{let q=oe.width,ee=oe.height;for(let Pe=0;Pe<ye;Pe++)t.texImage2D(n.TEXTURE_2D,Pe,et,q,ee,0,Ie,je,null),q>>=1,ee>>=1}}else if(wt.length>0){if(it&&Dt){let q=qe(wt[0]);t.texStorage2D(n.TEXTURE_2D,ye,et,q.width,q.height)}for(let q=0,ee=wt.length;q<ee;q++)Le=wt[q],it?N&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Ie,je,Le):t.texImage2D(n.TEXTURE_2D,q,et,Ie,je,Le);T.generateMipmaps=!1}else if(it){if(Dt){let q=qe(oe);t.texStorage2D(n.TEXTURE_2D,ye,et,q.width,q.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ie,je,oe)}else t.texImage2D(n.TEXTURE_2D,0,et,Ie,je,oe);v(T)&&m(j),ze.__version=J.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function le(L,T,B){if(T.image.length!==6)return;let j=Lt(L,T),ie=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+B);let J=i.get(ie);if(ie.version!==J.__version||j===!0){t.activeTexture(n.TEXTURE0+B);let ze=St.getPrimaries(St.workingColorSpace),Ee=T.colorSpace===Qs?null:St.getPrimaries(T.colorSpace),Re=T.colorSpace===Qs||ze===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let xt=T.isCompressedTexture||T.image[0].isCompressedTexture,oe=T.image[0]&&T.image[0].isDataTexture,Ie=[];for(let ee=0;ee<6;ee++)!xt&&!oe?Ie[ee]=x(T.image[ee],!0,s.maxCubemapSize):Ie[ee]=oe?T.image[ee].image:T.image[ee],Ie[ee]=Wt(T,Ie[ee]);let je=Ie[0],et=r.convert(T.format,T.colorSpace),Le=r.convert(T.type),wt=E(T.internalFormat,et,Le,T.colorSpace),it=T.isVideoTexture!==!0,Dt=J.__version===void 0||j===!0,N=ie.dataReady,ye=D(T,je);ot(n.TEXTURE_CUBE_MAP,T);let q;if(xt){it&&Dt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,wt,je.width,je.height);for(let ee=0;ee<6;ee++){q=Ie[ee].mipmaps;for(let Pe=0;Pe<q.length;Pe++){let Ae=q[Pe];T.format!==oi?et!==null?it?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,0,0,Ae.width,Ae.height,et,Ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,wt,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,0,0,Ae.width,Ae.height,et,Le,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,wt,Ae.width,Ae.height,0,et,Le,Ae.data)}}}else{if(q=T.mipmaps,it&&Dt){q.length>0&&ye++;let ee=qe(Ie[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,wt,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(oe){it?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ie[ee].width,Ie[ee].height,et,Le,Ie[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,wt,Ie[ee].width,Ie[ee].height,0,et,Le,Ie[ee].data);for(let Pe=0;Pe<q.length;Pe++){let dt=q[Pe].image[ee].image;it?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,0,0,dt.width,dt.height,et,Le,dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,wt,dt.width,dt.height,0,et,Le,dt.data)}}else{it?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,et,Le,Ie[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,wt,et,Le,Ie[ee]);for(let Pe=0;Pe<q.length;Pe++){let Ae=q[Pe];it?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,0,0,et,Le,Ae.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,wt,et,Le,Ae.image[ee])}}}v(T)&&m(n.TEXTURE_CUBE_MAP),J.__version=ie.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Ue(L,T,B,j,ie,J){let ze=r.convert(B.format,B.colorSpace),Ee=r.convert(B.type),Re=E(B.internalFormat,ze,Ee,B.colorSpace),xt=i.get(T),oe=i.get(B);if(oe.__renderTarget=T,!xt.__hasExternalTextures){let Ie=Math.max(1,T.width>>J),je=Math.max(1,T.height>>J);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,J,Re,Ie,je,T.depth,0,ze,Ee,null):t.texImage2D(ie,J,Re,Ie,je,0,ze,Ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),Mt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,ie,oe.__webglTexture,0,yt(T)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,ie,oe.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function me(L,T,B){if(n.bindRenderbuffer(n.RENDERBUFFER,L),T.depthBuffer){let j=T.depthTexture,ie=j&&j.isDepthTexture?j.type:null,J=M(T.stencilBuffer,ie),ze=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=yt(T);Mt(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,J,T.width,T.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,J,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,J,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ze,n.RENDERBUFFER,L)}else{let j=T.textures;for(let ie=0;ie<j.length;ie++){let J=j[ie],ze=r.convert(J.format,J.colorSpace),Ee=r.convert(J.type),Re=E(J.internalFormat,ze,Ee,J.colorSpace),xt=yt(T);B&&Mt(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,Re,T.width,T.height):Mt(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt,Re,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Re,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function We(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=i.get(T.depthTexture);j.__renderTarget=T,(!j.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Q(T.depthTexture,0);let ie=j.__webglTexture,J=yt(T);if(T.depthTexture.format===Oo)Mt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(T.depthTexture.format===sr)Mt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ke(L){let T=i.get(L),B=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){let j=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),j){let ie=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,j.removeEventListener("dispose",ie)};j.addEventListener("dispose",ie),T.__depthDisposeCallback=ie}T.__boundDepthTexture=j}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");We(T.__webglFramebuffer,L)}else if(B){T.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[j]),T.__webglDepthbuffer[j]===void 0)T.__webglDepthbuffer[j]=n.createRenderbuffer(),me(T.__webglDepthbuffer[j],L,!1);else{let ie=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=T.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,J)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),me(T.__webglDepthbuffer,L,!1);else{let j=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,ie)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function nt(L,T,B){let j=i.get(L);T!==void 0&&Ue(j.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Ke(L)}function Kt(L){let T=L.texture,B=i.get(L),j=i.get(T);L.addEventListener("dispose",P);let ie=L.textures,J=L.isWebGLCubeRenderTarget===!0,ze=ie.length>1;if(ze||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=T.version,o.memory.textures++),J){B.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer[Ee]=[];for(let Re=0;Re<T.mipmaps.length;Re++)B.__webglFramebuffer[Ee][Re]=n.createFramebuffer()}else B.__webglFramebuffer[Ee]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer=[];for(let Ee=0;Ee<T.mipmaps.length;Ee++)B.__webglFramebuffer[Ee]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(ze)for(let Ee=0,Re=ie.length;Ee<Re;Ee++){let xt=i.get(ie[Ee]);xt.__webglTexture===void 0&&(xt.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&Mt(L)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Ee=0;Ee<ie.length;Ee++){let Re=ie[Ee];B.__webglColorRenderbuffer[Ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[Ee]);let xt=r.convert(Re.format,Re.colorSpace),oe=r.convert(Re.type),Ie=E(Re.internalFormat,xt,oe,Re.colorSpace,L.isXRRenderTarget===!0),je=yt(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,je,Ie,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,B.__webglColorRenderbuffer[Ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),me(B.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),ot(n.TEXTURE_CUBE_MAP,T);for(let Ee=0;Ee<6;Ee++)if(T.mipmaps&&T.mipmaps.length>0)for(let Re=0;Re<T.mipmaps.length;Re++)Ue(B.__webglFramebuffer[Ee][Re],L,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Re);else Ue(B.__webglFramebuffer[Ee],L,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);v(T)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ze){for(let Ee=0,Re=ie.length;Ee<Re;Ee++){let xt=ie[Ee],oe=i.get(xt);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),ot(n.TEXTURE_2D,xt),Ue(B.__webglFramebuffer,L,xt,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,0),v(xt)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let Ee=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ee=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ee,j.__webglTexture),ot(Ee,T),T.mipmaps&&T.mipmaps.length>0)for(let Re=0;Re<T.mipmaps.length;Re++)Ue(B.__webglFramebuffer[Re],L,T,n.COLOR_ATTACHMENT0,Ee,Re);else Ue(B.__webglFramebuffer,L,T,n.COLOR_ATTACHMENT0,Ee,0);v(T)&&m(Ee),t.unbindTexture()}L.depthBuffer&&Ke(L)}function Et(L){let T=L.textures;for(let B=0,j=T.length;B<j;B++){let ie=T[B];if(v(ie)){let J=_(L),ze=i.get(ie).__webglTexture;t.bindTexture(J,ze),m(J),t.unbindTexture()}}}let jt=[],H=[];function Cn(L){if(L.samples>0){if(Mt(L)===!1){let T=L.textures,B=L.width,j=L.height,ie=n.COLOR_BUFFER_BIT,J=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ze=i.get(L),Ee=T.length>1;if(Ee)for(let Re=0;Re<T.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ze.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Re=0;Re<T.length;Re++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),Ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ze.__webglColorRenderbuffer[Re]);let xt=i.get(T[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,xt,0)}n.blitFramebuffer(0,0,B,j,0,0,B,j,ie,n.NEAREST),l===!0&&(jt.length=0,H.length=0,jt.push(n.COLOR_ATTACHMENT0+Re),L.depthBuffer&&L.resolveDepthBuffer===!1&&(jt.push(J),H.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,H)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,jt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ee)for(let Re=0;Re<T.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,ze.__webglColorRenderbuffer[Re]);let xt=i.get(T[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ze.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,xt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){let T=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function yt(L){return Math.min(s.maxSamples,L.samples)}function Mt(L){let T=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ze(L){let T=o.render.frame;h.get(L)!==T&&(h.set(L,T),L.update())}function Wt(L,T){let B=L.colorSpace,j=L.format,ie=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||B!==ta&&B!==Qs&&(St.getTransfer(B)===Bt?(j!==oi||ie!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),T}function qe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=Q,this.setTexture2DArray=$,this.setTexture3D=re,this.setTextureCube=X,this.rebindTextures=nt,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=Cn,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Mt}function Hb(n,e){function t(i,s=Qs){let r,o=St.getTransfer(s);if(i===Jn)return n.UNSIGNED_BYTE;if(i===Ff)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Bf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===pg)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===dg)return n.BYTE;if(i===fg)return n.SHORT;if(i===cl)return n.UNSIGNED_SHORT;if(i===Of)return n.INT;if(i===Vr)return n.UNSIGNED_INT;if(i===Ki)return n.FLOAT;if(i===jn)return n.HALF_FLOAT;if(i===mg)return n.ALPHA;if(i===gg)return n.RGB;if(i===oi)return n.RGBA;if(i===vg)return n.LUMINANCE;if(i===xg)return n.LUMINANCE_ALPHA;if(i===Oo)return n.DEPTH_COMPONENT;if(i===sr)return n.DEPTH_STENCIL;if(i===Vf)return n.RED;if(i===Gf)return n.RED_INTEGER;if(i===yg)return n.RG;if(i===Wf)return n.RG_INTEGER;if(i===$f)return n.RGBA_INTEGER;if(i===Nc||i===Hc||i===kc||i===zc)if(o===Bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Nc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Hc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===kc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Nc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Hc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===kc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Md||i===_d||i===Ed||i===bd)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Md)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_d)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ed)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bd)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wd||i===Sd||i===Td)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===wd||i===Sd)return o===Bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Td)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Rd||i===Ad||i===Cd||i===Pd||i===Id||i===Ld||i===Dd||i===Ud||i===Nd||i===Hd||i===kd||i===zd||i===Od||i===Fd)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Rd)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ad)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cd)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pd)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Id)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ld)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dd)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ud)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nd)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hd)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kd)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zd)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Od)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fd)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Oc||i===Bd||i===Vd)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Oc)return o===Bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vd)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mg||i===Gd||i===Wd||i===$d)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Oc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Gd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wd)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$d)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ir?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var lf=class extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ue=class extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},kb={type:"move"},ol=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let v=t.getJointPose(x,i),m=this._getHandJoint(c,x);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ue;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},zb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ob=`
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

}`,cf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new Xn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Pt({vertexShader:zb,fragmentShader:Ob,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new se(new Un(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hf=class extends rr{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,g=null,x=new cf,v=t.getContextAttributes(),m=null,_=null,E=[],M=[],D=new te,A=null,P=new un;P.viewport=new Vt;let I=new un;I.viewport=new Vt;let S=[P,I],b=new lf,U=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let le=E[K];return le===void 0&&(le=new ol,E[K]=le),le.getTargetRaySpace()},this.getControllerGrip=function(K){let le=E[K];return le===void 0&&(le=new ol,E[K]=le),le.getGripSpace()},this.getHand=function(K){let le=E[K];return le===void 0&&(le=new ol,E[K]=le),le.getHandSpace()};function F(K){let le=M.indexOf(K.inputSource);if(le===-1)return;let Ue=E[le];Ue!==void 0&&(Ue.update(K.inputSource,K.frame,c||o),Ue.dispatchEvent({type:K.type,data:K.inputSource}))}function G(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Q);for(let K=0;K<E.length;K++){let le=M[K];le!==null&&(M[K]=null,E[K].disconnect(le))}U=null,O=null,x.reset(),e.setRenderTarget(m),p=null,f=null,d=null,s=null,_=null,Lt.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Q),v.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){let le={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new wn(p.framebufferWidth,p.framebufferHeight,{format:oi,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let le=null,Ue=null,me=null;v.depth&&(me=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=v.stencil?sr:Oo,Ue=v.stencil?ir:Vr);let We={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(We),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new wn(f.textureWidth,f.textureHeight,{format:oi,type:Jn,depthTexture:new Zo(f.textureWidth,f.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Lt.setContext(s),Lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Q(K){for(let le=0;le<K.removed.length;le++){let Ue=K.removed[le],me=M.indexOf(Ue);me>=0&&(M[me]=null,E[me].disconnect(Ue))}for(let le=0;le<K.added.length;le++){let Ue=K.added[le],me=M.indexOf(Ue);if(me===-1){for(let Ke=0;Ke<E.length;Ke++)if(Ke>=M.length){M.push(Ue),me=Ke;break}else if(M[Ke]===null){M[Ke]=Ue,me=Ke;break}if(me===-1)break}let We=E[me];We&&We.connect(Ue)}}let $=new w,re=new w;function X(K,le,Ue){$.setFromMatrixPosition(le.matrixWorld),re.setFromMatrixPosition(Ue.matrixWorld);let me=$.distanceTo(re),We=le.projectionMatrix.elements,Ke=Ue.projectionMatrix.elements,nt=We[14]/(We[10]-1),Kt=We[14]/(We[10]+1),Et=(We[9]+1)/We[5],jt=(We[9]-1)/We[5],H=(We[8]-1)/We[0],Cn=(Ke[8]+1)/Ke[0],yt=nt*H,Mt=nt*Cn,Ze=me/(-H+Cn),Wt=Ze*-H;if(le.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Wt),K.translateZ(Ze),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),We[10]===-1)K.projectionMatrix.copy(le.projectionMatrix),K.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{let qe=nt+Ze,L=Kt+Ze,T=yt-Wt,B=Mt+(me-Wt),j=Et*Kt/L*qe,ie=jt*Kt/L*qe;K.projectionMatrix.makePerspective(T,B,j,ie,qe,L),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ae(K,le){le===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(le.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let le=K.near,Ue=K.far;x.texture!==null&&(x.depthNear>0&&(le=x.depthNear),x.depthFar>0&&(Ue=x.depthFar)),b.near=I.near=P.near=le,b.far=I.far=P.far=Ue,(U!==b.near||O!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),U=b.near,O=b.far),P.layers.mask=K.layers.mask|2,I.layers.mask=K.layers.mask|4,b.layers.mask=P.layers.mask|I.layers.mask;let me=K.parent,We=b.cameras;ae(b,me);for(let Ke=0;Ke<We.length;Ke++)ae(We[Ke],me);We.length===2?X(b,P,I):b.projectionMatrix.copy(P.projectionMatrix),Se(K,b,me)};function Se(K,le,Ue){Ue===null?K.matrix.copy(le.matrixWorld):(K.matrix.copy(Ue.matrixWorld),K.matrix.invert(),K.matrix.multiply(le.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(le.projectionMatrix),K.projectionMatrixInverse.copy(le.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=$o*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let He=null;function ot(K,le){if(h=le.getViewerPose(c||o),g=le,h!==null){let Ue=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let me=!1;Ue.length!==b.cameras.length&&(b.cameras.length=0,me=!0);for(let Ke=0;Ke<Ue.length;Ke++){let nt=Ue[Ke],Kt=null;if(p!==null)Kt=p.getViewport(nt);else{let jt=d.getViewSubImage(f,nt);Kt=jt.viewport,Ke===0&&(e.setRenderTargetTextures(_,jt.colorTexture,f.ignoreDepthValues?void 0:jt.depthStencilTexture),e.setRenderTarget(_))}let Et=S[Ke];Et===void 0&&(Et=new un,Et.layers.enable(Ke),Et.viewport=new Vt,S[Ke]=Et),Et.matrix.fromArray(nt.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(nt.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),Ke===0&&(b.matrix.copy(Et.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),me===!0&&b.cameras.push(Et)}let We=s.enabledFeatures;if(We&&We.includes("depth-sensing")){let Ke=d.getDepthInformation(Ue[0]);Ke&&Ke.isValid&&Ke.texture&&x.init(e,Ke,s.renderState)}}for(let Ue=0;Ue<E.length;Ue++){let me=M[Ue],We=E[Ue];me!==null&&We!==void 0&&We.update(me,le,c||o)}He&&He(K,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),g=null}let Lt=new Sg;Lt.setAnimationLoop(ot),this.setAnimationLoop=function(K){He=K},this.dispose=function(){}}},kr=new Sn,Fb=new mt;function Bb(n,e){function t(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function i(v,m){m.color.getRGB(v.fogColor.value,wg(n)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function s(v,m,_,E,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(v,m):m.isMeshToonMaterial?(r(v,m),d(v,m)):m.isMeshPhongMaterial?(r(v,m),h(v,m)):m.isMeshStandardMaterial?(r(v,m),f(v,m),m.isMeshPhysicalMaterial&&p(v,m,M)):m.isMeshMatcapMaterial?(r(v,m),g(v,m)):m.isMeshDepthMaterial?r(v,m):m.isMeshDistanceMaterial?(r(v,m),x(v,m)):m.isMeshNormalMaterial?r(v,m):m.isLineBasicMaterial?(o(v,m),m.isLineDashedMaterial&&a(v,m)):m.isPointsMaterial?l(v,m,_,E):m.isSpriteMaterial?c(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,t(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===Dn&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,t(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===Dn&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,t(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,t(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);let _=e.get(m),E=_.envMap,M=_.envMapRotation;E&&(v.envMap.value=E,kr.copy(M),kr.x*=-1,kr.y*=-1,kr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),v.envMapRotation.value.setFromMatrix4(Fb.makeRotationFromEuler(kr)),v.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,v.aoMapTransform))}function o(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform))}function a(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function l(v,m,_,E){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*_,v.scale.value=E*.5,m.map&&(v.map.value=m.map,t(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function c(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function h(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function d(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function f(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function p(v,m,_){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Dn&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=_.texture,v.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,v.specularIntensityMapTransform))}function g(v,m){m.matcap&&(v.matcap.value=m.matcap)}function x(v,m){let _=e.get(m).light;v.referencePosition.value.setFromMatrixPosition(_.matrixWorld),v.nearDistance.value=_.shadow.camera.near,v.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Vb(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,E){let M=E.program;i.uniformBlockBinding(_,M)}function c(_,E){let M=s[_.id];M===void 0&&(g(_),M=h(_),s[_.id]=M,_.addEventListener("dispose",v));let D=E.program;i.updateUBOMapping(_,D);let A=e.render.frame;r[_.id]!==A&&(f(_),r[_.id]=A)}function h(_){let E=d();_.__bindingPointIndex=E;let M=n.createBuffer(),D=_.__size,A=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,D,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,M),M}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let E=s[_.id],M=_.uniforms,D=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let A=0,P=M.length;A<P;A++){let I=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,b=I.length;S<b;S++){let U=I[S];if(p(U,A,S,D)===!0){let O=U.__offset,F=Array.isArray(U.value)?U.value:[U.value],G=0;for(let Q=0;Q<F.length;Q++){let $=F[Q],re=x($);typeof $=="number"||typeof $=="boolean"?(U.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,O+G,U.__data)):$.isMatrix3?(U.__data[0]=$.elements[0],U.__data[1]=$.elements[1],U.__data[2]=$.elements[2],U.__data[3]=0,U.__data[4]=$.elements[3],U.__data[5]=$.elements[4],U.__data[6]=$.elements[5],U.__data[7]=0,U.__data[8]=$.elements[6],U.__data[9]=$.elements[7],U.__data[10]=$.elements[8],U.__data[11]=0):($.toArray(U.__data,G),G+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,E,M,D){let A=_.value,P=E+"_"+M;if(D[P]===void 0)return typeof A=="number"||typeof A=="boolean"?D[P]=A:D[P]=A.clone(),!0;{let I=D[P];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return D[P]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(_){let E=_.uniforms,M=0,D=16;for(let P=0,I=E.length;P<I;P++){let S=Array.isArray(E[P])?E[P]:[E[P]];for(let b=0,U=S.length;b<U;b++){let O=S[b],F=Array.isArray(O.value)?O.value:[O.value];for(let G=0,Q=F.length;G<Q;G++){let $=F[G],re=x($),X=M%D,ae=X%re.boundary,Se=X+ae;M+=ae,Se!==0&&D-Se<re.storage&&(M+=D-Se),O.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=re.storage}}}let A=M%D;return A>0&&(M+=D-A),_.__size=M,_.__cache={},this}function x(_){let E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),E}function v(_){let E=_.target;E.removeEventListener("dispose",v);let M=o.indexOf(E.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Ko=class{constructor(e={}){let{canvas:t=qy(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),v=null,m=null,_=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bt,this.toneMapping=tr,this.toneMappingExposure=1;let M=this,D=!1,A=0,P=0,I=null,S=-1,b=null,U=new Vt,O=new Vt,F=null,G=new ce(0),Q=0,$=t.width,re=t.height,X=1,ae=null,Se=null,He=new Vt(0,0,$,re),ot=new Vt(0,0,$,re),Lt=!1,K=new hl,le=!1,Ue=!1,me=new mt,We=new mt,Ke=new w,nt=new Vt,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Et=!1;function jt(){return I===null?X:1}let H=i;function Cn(R,k){return t.getContext(R,k)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${If}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),H===null){let k="webgl2";if(H=Cn(k,R),H===null)throw Cn(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let yt,Mt,Ze,Wt,qe,L,T,B,j,ie,J,ze,Ee,Re,xt,oe,Ie,je,et,Le,wt,it,Dt,N;function ye(){yt=new sE(H),yt.init(),it=new Hb(H,yt),Mt=new j_(H,yt,e,it),Ze=new Db(H,yt),Mt.reverseDepthBuffer&&f&&Ze.buffers.depth.setReversed(!0),Wt=new aE(H),qe=new Mb,L=new Nb(H,yt,Ze,qe,Mt,it,Wt),T=new eE(M),B=new iE(M),j=new pM(H),Dt=new K_(H,j),ie=new rE(H,j,Wt,Dt),J=new cE(H,ie,j,Wt),et=new lE(H,Mt,L),oe=new Q_(qe),ze=new yb(M,T,B,yt,Mt,Dt,oe),Ee=new Bb(M,qe),Re=new Eb,xt=new Ab(yt),je=new Z_(M,T,B,Ze,J,p,l),Ie=new Ib(M,J,Mt),N=new Vb(H,Wt,Mt,Ze),Le=new J_(H,yt,Wt),wt=new oE(H,yt,Wt),Wt.programs=ze.programs,M.capabilities=Mt,M.extensions=yt,M.properties=qe,M.renderLists=Re,M.shadowMap=Ie,M.state=Ze,M.info=Wt}ye();let q=new hf(M,H);this.xr=q,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let R=yt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=yt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(R){R!==void 0&&(X=R,this.setSize($,re,!1))},this.getSize=function(R){return R.set($,re)},this.setSize=function(R,k,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=R,re=k,t.width=Math.floor(R*X),t.height=Math.floor(k*X),V===!0&&(t.style.width=R+"px",t.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set($*X,re*X).floor()},this.setDrawingBufferSize=function(R,k,V){$=R,re=k,X=V,t.width=Math.floor(R*V),t.height=Math.floor(k*V),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(U)},this.getViewport=function(R){return R.copy(He)},this.setViewport=function(R,k,V,W){R.isVector4?He.set(R.x,R.y,R.z,R.w):He.set(R,k,V,W),Ze.viewport(U.copy(He).multiplyScalar(X).round())},this.getScissor=function(R){return R.copy(ot)},this.setScissor=function(R,k,V,W){R.isVector4?ot.set(R.x,R.y,R.z,R.w):ot.set(R,k,V,W),Ze.scissor(O.copy(ot).multiplyScalar(X).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(R){Ze.setScissorTest(Lt=R)},this.setOpaqueSort=function(R){ae=R},this.setTransparentSort=function(R){Se=R},this.getClearColor=function(R){return R.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(R=!0,k=!0,V=!0){let W=0;if(R){let z=!1;if(I!==null){let he=I.texture.format;z=he===$f||he===Wf||he===Gf}if(z){let he=I.texture.type,Ce=he===Jn||he===Vr||he===cl||he===ir||he===Ff||he===Bf,Fe=je.getClearColor(),Be=je.getClearAlpha(),lt=Fe.r,ft=Fe.g,Ve=Fe.b;Ce?(g[0]=lt,g[1]=ft,g[2]=Ve,g[3]=Be,H.clearBufferuiv(H.COLOR,0,g)):(x[0]=lt,x[1]=ft,x[2]=Ve,x[3]=Be,H.clearBufferiv(H.COLOR,0,x))}else W|=H.COLOR_BUFFER_BIT}k&&(W|=H.DEPTH_BUFFER_BIT),V&&(W|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),Re.dispose(),xt.dispose(),qe.dispose(),T.dispose(),B.dispose(),J.dispose(),Dt.dispose(),N.dispose(),ze.dispose(),q.dispose(),q.removeEventListener("sessionstart",W0),q.removeEventListener("sessionend",$0),Ir.stop()};function ee(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let R=Wt.autoReset,k=Ie.enabled,V=Ie.autoUpdate,W=Ie.needsUpdate,z=Ie.type;ye(),Wt.autoReset=R,Ie.enabled=k,Ie.autoUpdate=V,Ie.needsUpdate=W,Ie.type=z}function Ae(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function dt(R){let k=R.target;k.removeEventListener("dispose",dt),cn(k)}function cn(R){Pn(R),qe.remove(R)}function Pn(R){let k=qe.get(R).programs;k!==void 0&&(k.forEach(function(V){ze.releaseProgram(V)}),R.isShaderMaterial&&ze.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,V,W,z,he){k===null&&(k=Kt);let Ce=z.isMesh&&z.matrixWorld.determinant()<0,Fe=jx(R,k,V,W,z);Ze.setMaterial(W,Ce);let Be=V.index,lt=1;if(W.wireframe===!0){if(Be=ie.getWireframeAttribute(V),Be===void 0)return;lt=2}let ft=V.drawRange,Ve=V.attributes.position,Ut=ft.start*lt,Jt=(ft.start+ft.count)*lt;he!==null&&(Ut=Math.max(Ut,he.start*lt),Jt=Math.min(Jt,(he.start+he.count)*lt)),Be!==null?(Ut=Math.max(Ut,0),Jt=Math.min(Jt,Be.count)):Ve!=null&&(Ut=Math.max(Ut,0),Jt=Math.min(Jt,Ve.count));let Qt=Jt-Ut;if(Qt<0||Qt===1/0)return;Dt.setup(z,W,Fe,V,Be);let Kn,Ot=Le;if(Be!==null&&(Kn=j.get(Be),Ot=wt,Ot.setIndex(Kn)),z.isMesh)W.wireframe===!0?(Ze.setLineWidth(W.wireframeLinewidth*jt()),Ot.setMode(H.LINES)):Ot.setMode(H.TRIANGLES);else if(z.isLine){let $e=W.linewidth;$e===void 0&&($e=1),Ze.setLineWidth($e*jt()),z.isLineSegments?Ot.setMode(H.LINES):z.isLineLoop?Ot.setMode(H.LINE_LOOP):Ot.setMode(H.LINE_STRIP)}else z.isPoints?Ot.setMode(H.POINTS):z.isSprite&&Ot.setMode(H.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Ot.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let $e=z._multiDrawStarts,vs=z._multiDrawCounts,Ft=z._multiDrawCount,Di=Be?j.get(Be).bytesPerElement:1,xo=qe.get(W).currentProgram.getUniforms();for(let ii=0;ii<Ft;ii++)xo.setValue(H,"_gl_DrawID",ii),Ot.render($e[ii]/Di,vs[ii])}else if(z.isInstancedMesh)Ot.renderInstances(Ut,Qt,z.count);else if(V.isInstancedBufferGeometry){let $e=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,vs=Math.min(V.instanceCount,$e);Ot.renderInstances(Ut,Qt,vs)}else Ot.render(Ut,Qt)};function $t(R,k,V){R.transparent===!0&&R.side===Rt&&R.forceSinglePass===!1?(R.side=Dn,R.needsUpdate=!0,rc(R,k,V),R.side=nr,R.needsUpdate=!0,rc(R,k,V),R.side=Rt):rc(R,k,V)}this.compile=function(R,k,V=null){V===null&&(V=R),m=xt.get(V),m.init(k),E.push(m),V.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),R!==V&&R.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();let W=new Set;return R.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let he=z.material;if(he)if(Array.isArray(he))for(let Ce=0;Ce<he.length;Ce++){let Fe=he[Ce];$t(Fe,V,z),W.add(Fe)}else $t(he,V,z),W.add(he)}),E.pop(),m=null,W},this.compileAsync=function(R,k,V=null){let W=this.compile(R,k,V);return new Promise(z=>{function he(){if(W.forEach(function(Ce){qe.get(Ce).currentProgram.isReady()&&W.delete(Ce)}),W.size===0){z(R);return}setTimeout(he,10)}yt.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Li=null;function gs(R){Li&&Li(R)}function W0(){Ir.stop()}function $0(){Ir.start()}let Ir=new Sg;Ir.setAnimationLoop(gs),typeof self<"u"&&Ir.setContext(self),this.setAnimationLoop=function(R){Li=R,q.setAnimationLoop(R),R===null?Ir.stop():Ir.start()},q.addEventListener("sessionstart",W0),q.addEventListener("sessionend",$0),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(k),k=q.getCamera()),R.isScene===!0&&R.onBeforeRender(M,R,k,I),m=xt.get(R,E.length),m.init(k),E.push(m),We.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),K.setFromProjectionMatrix(We),Ue=this.localClippingEnabled,le=oe.init(this.clippingPlanes,Ue),v=Re.get(R,_.length),v.init(),_.push(v),q.enabled===!0&&q.isPresenting===!0){let he=M.xr.getDepthSensingMesh();he!==null&&Ru(he,k,-1/0,M.sortObjects)}Ru(R,k,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(ae,Se),Et=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Et&&je.addToRenderList(v,R),this.info.render.frame++,le===!0&&oe.beginShadows();let V=m.state.shadowsArray;Ie.render(V,R,k),le===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=v.opaque,z=v.transmissive;if(m.setupLights(),k.isArrayCamera){let he=k.cameras;if(z.length>0)for(let Ce=0,Fe=he.length;Ce<Fe;Ce++){let Be=he[Ce];q0(W,z,R,Be)}Et&&je.render(R);for(let Ce=0,Fe=he.length;Ce<Fe;Ce++){let Be=he[Ce];X0(v,R,Be,Be.viewport)}}else z.length>0&&q0(W,z,R,k),Et&&je.render(R),X0(v,R,k);I!==null&&(L.updateMultisampleRenderTarget(I),L.updateRenderTargetMipmap(I)),R.isScene===!0&&R.onAfterRender(M,R,k),Dt.resetDefaultState(),S=-1,b=null,E.pop(),E.length>0?(m=E[E.length-1],le===!0&&oe.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?v=_[_.length-1]:v=null};function Ru(R,k,V,W){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)V=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||K.intersectsSprite(R)){W&&nt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(We);let Ce=J.update(R),Fe=R.material;Fe.visible&&v.push(R,Ce,Fe,V,nt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||K.intersectsObject(R))){let Ce=J.update(R),Fe=R.material;if(W&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),nt.copy(R.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),nt.copy(Ce.boundingSphere.center)),nt.applyMatrix4(R.matrixWorld).applyMatrix4(We)),Array.isArray(Fe)){let Be=Ce.groups;for(let lt=0,ft=Be.length;lt<ft;lt++){let Ve=Be[lt],Ut=Fe[Ve.materialIndex];Ut&&Ut.visible&&v.push(R,Ce,Ut,V,nt.z,Ve)}}else Fe.visible&&v.push(R,Ce,Fe,V,nt.z,null)}}let he=R.children;for(let Ce=0,Fe=he.length;Ce<Fe;Ce++)Ru(he[Ce],k,V,W)}function X0(R,k,V,W){let z=R.opaque,he=R.transmissive,Ce=R.transparent;m.setupLightsView(V),le===!0&&oe.setGlobalState(M.clippingPlanes,V),W&&Ze.viewport(U.copy(W)),z.length>0&&sc(z,k,V),he.length>0&&sc(he,k,V),Ce.length>0&&sc(Ce,k,V),Ze.buffers.depth.setTest(!0),Ze.buffers.depth.setMask(!0),Ze.buffers.color.setMask(!0),Ze.setPolygonOffset(!1)}function q0(R,k,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new wn(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float")?jn:Jn,minFilter:Br,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));let he=m.state.transmissionRenderTarget[W.id],Ce=W.viewport||U;he.setSize(Ce.z,Ce.w);let Fe=M.getRenderTarget();M.setRenderTarget(he),M.getClearColor(G),Q=M.getClearAlpha(),Q<1&&M.setClearColor(16777215,.5),M.clear(),Et&&je.render(V);let Be=M.toneMapping;M.toneMapping=tr;let lt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),le===!0&&oe.setGlobalState(M.clippingPlanes,W),sc(R,V,W),L.updateMultisampleRenderTarget(he),L.updateRenderTargetMipmap(he),yt.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let Ve=0,Ut=k.length;Ve<Ut;Ve++){let Jt=k[Ve],Qt=Jt.object,Kn=Jt.geometry,Ot=Jt.material,$e=Jt.group;if(Ot.side===Rt&&Qt.layers.test(W.layers)){let vs=Ot.side;Ot.side=Dn,Ot.needsUpdate=!0,Y0(Qt,V,W,Kn,Ot,$e),Ot.side=vs,Ot.needsUpdate=!0,ft=!0}}ft===!0&&(L.updateMultisampleRenderTarget(he),L.updateRenderTargetMipmap(he))}M.setRenderTarget(Fe),M.setClearColor(G,Q),lt!==void 0&&(W.viewport=lt),M.toneMapping=Be}function sc(R,k,V){let W=k.isScene===!0?k.overrideMaterial:null;for(let z=0,he=R.length;z<he;z++){let Ce=R[z],Fe=Ce.object,Be=Ce.geometry,lt=W===null?Ce.material:W,ft=Ce.group;Fe.layers.test(V.layers)&&Y0(Fe,k,V,Be,lt,ft)}}function Y0(R,k,V,W,z,he){R.onBeforeRender(M,k,V,W,z,he),R.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),z.onBeforeRender(M,k,V,W,R,he),z.transparent===!0&&z.side===Rt&&z.forceSinglePass===!1?(z.side=Dn,z.needsUpdate=!0,M.renderBufferDirect(V,k,W,z,R,he),z.side=nr,z.needsUpdate=!0,M.renderBufferDirect(V,k,W,z,R,he),z.side=Rt):M.renderBufferDirect(V,k,W,z,R,he),R.onAfterRender(M,k,V,W,z,he)}function rc(R,k,V){k.isScene!==!0&&(k=Kt);let W=qe.get(R),z=m.state.lights,he=m.state.shadowsArray,Ce=z.state.version,Fe=ze.getParameters(R,z.state,he,k,V),Be=ze.getProgramCacheKey(Fe),lt=W.programs;W.environment=R.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(R.isMeshStandardMaterial?B:T).get(R.envMap||W.environment),W.envMapRotation=W.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,lt===void 0&&(R.addEventListener("dispose",dt),lt=new Map,W.programs=lt);let ft=lt.get(Be);if(ft!==void 0){if(W.currentProgram===ft&&W.lightsStateVersion===Ce)return K0(R,Fe),ft}else Fe.uniforms=ze.getUniforms(R),R.onBeforeCompile(Fe,M),ft=ze.acquireProgram(Fe,Be),lt.set(Be,ft),W.uniforms=Fe.uniforms;let Ve=W.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ve.clippingPlanes=oe.uniform),K0(R,Fe),W.needsLights=ey(R),W.lightsStateVersion=Ce,W.needsLights&&(Ve.ambientLightColor.value=z.state.ambient,Ve.lightProbe.value=z.state.probe,Ve.directionalLights.value=z.state.directional,Ve.directionalLightShadows.value=z.state.directionalShadow,Ve.spotLights.value=z.state.spot,Ve.spotLightShadows.value=z.state.spotShadow,Ve.rectAreaLights.value=z.state.rectArea,Ve.ltc_1.value=z.state.rectAreaLTC1,Ve.ltc_2.value=z.state.rectAreaLTC2,Ve.pointLights.value=z.state.point,Ve.pointLightShadows.value=z.state.pointShadow,Ve.hemisphereLights.value=z.state.hemi,Ve.directionalShadowMap.value=z.state.directionalShadowMap,Ve.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ve.spotShadowMap.value=z.state.spotShadowMap,Ve.spotLightMatrix.value=z.state.spotLightMatrix,Ve.spotLightMap.value=z.state.spotLightMap,Ve.pointShadowMap.value=z.state.pointShadowMap,Ve.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=ft,W.uniformsList=null,ft}function Z0(R){if(R.uniformsList===null){let k=R.currentProgram.getUniforms();R.uniformsList=Bo.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function K0(R,k){let V=qe.get(R);V.outputColorSpace=k.outputColorSpace,V.batching=k.batching,V.batchingColor=k.batchingColor,V.instancing=k.instancing,V.instancingColor=k.instancingColor,V.instancingMorph=k.instancingMorph,V.skinning=k.skinning,V.morphTargets=k.morphTargets,V.morphNormals=k.morphNormals,V.morphColors=k.morphColors,V.morphTargetsCount=k.morphTargetsCount,V.numClippingPlanes=k.numClippingPlanes,V.numIntersection=k.numClipIntersection,V.vertexAlphas=k.vertexAlphas,V.vertexTangents=k.vertexTangents,V.toneMapping=k.toneMapping}function jx(R,k,V,W,z){k.isScene!==!0&&(k=Kt),L.resetTextureUnits();let he=k.fog,Ce=W.isMeshStandardMaterial?k.environment:null,Fe=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ta,Be=(W.isMeshStandardMaterial?B:T).get(W.envMap||Ce),lt=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ft=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ve=!!V.morphAttributes.position,Ut=!!V.morphAttributes.normal,Jt=!!V.morphAttributes.color,Qt=tr;W.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Qt=M.toneMapping);let Kn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ot=Kn!==void 0?Kn.length:0,$e=qe.get(W),vs=m.state.lights;if(le===!0&&(Ue===!0||R!==b)){let mi=R===b&&W.id===S;oe.setState(W,R,mi)}let Ft=!1;W.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==vs.state.version||$e.outputColorSpace!==Fe||z.isBatchedMesh&&$e.batching===!1||!z.isBatchedMesh&&$e.batching===!0||z.isBatchedMesh&&$e.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&$e.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&$e.instancing===!1||!z.isInstancedMesh&&$e.instancing===!0||z.isSkinnedMesh&&$e.skinning===!1||!z.isSkinnedMesh&&$e.skinning===!0||z.isInstancedMesh&&$e.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&$e.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&$e.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&$e.instancingMorph===!1&&z.morphTexture!==null||$e.envMap!==Be||W.fog===!0&&$e.fog!==he||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==oe.numPlanes||$e.numIntersection!==oe.numIntersection)||$e.vertexAlphas!==lt||$e.vertexTangents!==ft||$e.morphTargets!==Ve||$e.morphNormals!==Ut||$e.morphColors!==Jt||$e.toneMapping!==Qt||$e.morphTargetsCount!==Ot)&&(Ft=!0):(Ft=!0,$e.__version=W.version);let Di=$e.currentProgram;Ft===!0&&(Di=rc(W,k,z));let xo=!1,ii=!1,Wa=!1,en=Di.getUniforms(),qi=$e.uniforms;if(Ze.useProgram(Di.program)&&(xo=!0,ii=!0,Wa=!0),W.id!==S&&(S=W.id,ii=!0),xo||b!==R){Ze.buffers.depth.getReversed()?(me.copy(R.projectionMatrix),Zy(me),Ky(me),en.setValue(H,"projectionMatrix",me)):en.setValue(H,"projectionMatrix",R.projectionMatrix),en.setValue(H,"viewMatrix",R.matrixWorldInverse);let $s=en.map.cameraPosition;$s!==void 0&&$s.setValue(H,Ke.setFromMatrixPosition(R.matrixWorld)),Mt.logarithmicDepthBuffer&&en.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&en.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,ii=!0,Wa=!0)}if(z.isSkinnedMesh){en.setOptional(H,z,"bindMatrix"),en.setOptional(H,z,"bindMatrixInverse");let mi=z.skeleton;mi&&(mi.boneTexture===null&&mi.computeBoneTexture(),en.setValue(H,"boneTexture",mi.boneTexture,L))}z.isBatchedMesh&&(en.setOptional(H,z,"batchingTexture"),en.setValue(H,"batchingTexture",z._matricesTexture,L),en.setOptional(H,z,"batchingIdTexture"),en.setValue(H,"batchingIdTexture",z._indirectTexture,L),en.setOptional(H,z,"batchingColorTexture"),z._colorsTexture!==null&&en.setValue(H,"batchingColorTexture",z._colorsTexture,L));let $a=V.morphAttributes;if(($a.position!==void 0||$a.normal!==void 0||$a.color!==void 0)&&et.update(z,V,Di),(ii||$e.receiveShadow!==z.receiveShadow)&&($e.receiveShadow=z.receiveShadow,en.setValue(H,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(qi.envMap.value=Be,qi.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&k.environment!==null&&(qi.envMapIntensity.value=k.environmentIntensity),ii&&(en.setValue(H,"toneMappingExposure",M.toneMappingExposure),$e.needsLights&&Qx(qi,Wa),he&&W.fog===!0&&Ee.refreshFogUniforms(qi,he),Ee.refreshMaterialUniforms(qi,W,X,re,m.state.transmissionRenderTarget[R.id]),Bo.upload(H,Z0($e),qi,L)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Bo.upload(H,Z0($e),qi,L),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&en.setValue(H,"center",z.center),en.setValue(H,"modelViewMatrix",z.modelViewMatrix),en.setValue(H,"normalMatrix",z.normalMatrix),en.setValue(H,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let mi=W.uniformsGroups;for(let $s=0,Xs=mi.length;$s<Xs;$s++){let J0=mi[$s];N.update(J0,Di),N.bind(J0,Di)}}return Di}function Qx(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function ey(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,k,V){qe.get(R.texture).__webglTexture=k,qe.get(R.depthTexture).__webglTexture=V;let W=qe.get(R);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,k){let V=qe.get(R);V.__webglFramebuffer=k,V.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,V=0){I=R,A=k,P=V;let W=!0,z=null,he=!1,Ce=!1;if(R){let Be=qe.get(R);if(Be.__useDefaultFramebuffer!==void 0)Ze.bindFramebuffer(H.FRAMEBUFFER,null),W=!1;else if(Be.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(Be.__hasExternalTextures)L.rebindTextures(R,qe.get(R.texture).__webglTexture,qe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Ve=R.depthTexture;if(Be.__boundDepthTexture!==Ve){if(Ve!==null&&qe.has(Ve)&&(R.width!==Ve.image.width||R.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}let lt=R.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Ce=!0);let ft=qe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ft[k])?z=ft[k][V]:z=ft[k],he=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?z=qe.get(R).__webglMultisampledFramebuffer:Array.isArray(ft)?z=ft[V]:z=ft,U.copy(R.viewport),O.copy(R.scissor),F=R.scissorTest}else U.copy(He).multiplyScalar(X).floor(),O.copy(ot).multiplyScalar(X).floor(),F=Lt;if(Ze.bindFramebuffer(H.FRAMEBUFFER,z)&&W&&Ze.drawBuffers(R,z),Ze.viewport(U),Ze.scissor(O),Ze.setScissorTest(F),he){let Be=qe.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+k,Be.__webglTexture,V)}else if(Ce){let Be=qe.get(R.texture),lt=k||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Be.__webglTexture,V||0,lt)}S=-1},this.readRenderTargetPixels=function(R,k,V,W,z,he,Ce){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=qe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Fe=Fe[Ce]),Fe){Ze.bindFramebuffer(H.FRAMEBUFFER,Fe);try{let Be=R.texture,lt=Be.format,ft=Be.type;if(!Mt.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-W&&V>=0&&V<=R.height-z&&H.readPixels(k,V,W,z,it.convert(lt),it.convert(ft),he)}finally{let Be=I!==null?qe.get(I).__webglFramebuffer:null;Ze.bindFramebuffer(H.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(R,k,V,W,z,he,Ce){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=qe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Fe=Fe[Ce]),Fe){let Be=R.texture,lt=Be.format,ft=Be.type;if(!Mt.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=R.width-W&&V>=0&&V<=R.height-z){Ze.bindFramebuffer(H.FRAMEBUFFER,Fe);let Ve=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ve),H.bufferData(H.PIXEL_PACK_BUFFER,he.byteLength,H.STREAM_READ),H.readPixels(k,V,W,z,it.convert(lt),it.convert(ft),0);let Ut=I!==null?qe.get(I).__webglFramebuffer:null;Ze.bindFramebuffer(H.FRAMEBUFFER,Ut);let Jt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Yy(H,Jt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ve),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,he),H.deleteBuffer(Ve),H.deleteSync(Jt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,k=null,V=0){R.isTexture!==!0&&(nl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,R=arguments[1]);let W=Math.pow(2,-V),z=Math.floor(R.image.width*W),he=Math.floor(R.image.height*W),Ce=k!==null?k.x:0,Fe=k!==null?k.y:0;L.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,V,0,0,Ce,Fe,z,he),Ze.unbindTexture()},this.copyTextureToTexture=function(R,k,V=null,W=null,z=0){R.isTexture!==!0&&(nl("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1],k=arguments[2],z=arguments[3]||0,V=null);let he,Ce,Fe,Be,lt,ft,Ve,Ut,Jt,Qt=R.isCompressedTexture?R.mipmaps[z]:R.image;V!==null?(he=V.max.x-V.min.x,Ce=V.max.y-V.min.y,Fe=V.isBox3?V.max.z-V.min.z:1,Be=V.min.x,lt=V.min.y,ft=V.isBox3?V.min.z:0):(he=Qt.width,Ce=Qt.height,Fe=Qt.depth||1,Be=0,lt=0,ft=0),W!==null?(Ve=W.x,Ut=W.y,Jt=W.z):(Ve=0,Ut=0,Jt=0);let Kn=it.convert(k.format),Ot=it.convert(k.type),$e;k.isData3DTexture?(L.setTexture3D(k,0),$e=H.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(L.setTexture2DArray(k,0),$e=H.TEXTURE_2D_ARRAY):(L.setTexture2D(k,0),$e=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,k.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,k.unpackAlignment);let vs=H.getParameter(H.UNPACK_ROW_LENGTH),Ft=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Di=H.getParameter(H.UNPACK_SKIP_PIXELS),xo=H.getParameter(H.UNPACK_SKIP_ROWS),ii=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Qt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Qt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Be),H.pixelStorei(H.UNPACK_SKIP_ROWS,lt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ft);let Wa=R.isDataArrayTexture||R.isData3DTexture,en=k.isDataArrayTexture||k.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let qi=qe.get(R),$a=qe.get(k),mi=qe.get(qi.__renderTarget),$s=qe.get($a.__renderTarget);Ze.bindFramebuffer(H.READ_FRAMEBUFFER,mi.__webglFramebuffer),Ze.bindFramebuffer(H.DRAW_FRAMEBUFFER,$s.__webglFramebuffer);for(let Xs=0;Xs<Fe;Xs++)Wa&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qe.get(R).__webglTexture,z,ft+Xs),R.isDepthTexture?(en&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qe.get(k).__webglTexture,z,Jt+Xs),H.blitFramebuffer(Be,lt,he,Ce,Ve,Ut,he,Ce,H.DEPTH_BUFFER_BIT,H.NEAREST)):en?H.copyTexSubImage3D($e,z,Ve,Ut,Jt+Xs,Be,lt,he,Ce):H.copyTexSubImage2D($e,z,Ve,Ut,Jt+Xs,Be,lt,he,Ce);Ze.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ze.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else en?R.isDataTexture||R.isData3DTexture?H.texSubImage3D($e,z,Ve,Ut,Jt,he,Ce,Fe,Kn,Ot,Qt.data):k.isCompressedArrayTexture?H.compressedTexSubImage3D($e,z,Ve,Ut,Jt,he,Ce,Fe,Kn,Qt.data):H.texSubImage3D($e,z,Ve,Ut,Jt,he,Ce,Fe,Kn,Ot,Qt):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,z,Ve,Ut,he,Ce,Kn,Ot,Qt.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,z,Ve,Ut,Qt.width,Qt.height,Kn,Qt.data):H.texSubImage2D(H.TEXTURE_2D,z,Ve,Ut,he,Ce,Kn,Ot,Qt);H.pixelStorei(H.UNPACK_ROW_LENGTH,vs),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ft),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Di),H.pixelStorei(H.UNPACK_SKIP_ROWS,xo),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ii),z===0&&k.generateMipmaps&&H.generateMipmap($e),Ze.unbindTexture()},this.copyTextureToTexture3D=function(R,k,V=null,W=null,z=0){return R.isTexture!==!0&&(nl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,R=arguments[2],k=arguments[3],z=arguments[4]||0),nl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,k,V,W,z)},this.initRenderTarget=function(R){qe.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),Ze.unbindTexture()},this.resetState=function(){A=0,P=0,I=null,Ze.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ss}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}},Jc=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ce(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ji=class extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ul=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qd,this.updateRanges=[],this.version=0,this.uuid=Ts()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ts()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ts()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Gn=new w,Gr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix4(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.applyNormalMatrix(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.transformDirection(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ki(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ki(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ki(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ki(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ki(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),s=Xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),s=Xt(s,this.array),r=Xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new on(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},li=class extends Ji{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Do,Ka=new w,Uo=new w,No=new w,Ho=new te,Ja=new te,Pg=new mt,Rc=new w,ja=new w,Ac=new w,Jm=new te,nd=new te,jm=new te,xi=class extends fn{constructor(e=new li){if(super(),this.isSprite=!0,this.type="Sprite",Do===void 0){Do=new At;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ul(t,5);Do.setIndex([0,1,2,0,2,3]),Do.setAttribute("position",new Gr(i,3,0,!1)),Do.setAttribute("uv",new Gr(i,2,3,!1))}this.geometry=Do,this.material=e,this.center=new te(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Uo.setFromMatrixScale(this.matrixWorld),Pg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),No.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Uo.multiplyScalar(-No.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Cc(Rc.set(-.5,-.5,0),No,o,Uo,s,r),Cc(ja.set(.5,-.5,0),No,o,Uo,s,r),Cc(Ac.set(.5,.5,0),No,o,Uo,s,r),Jm.set(0,0),nd.set(1,0),jm.set(1,1);let a=e.ray.intersectTriangle(Rc,ja,Ac,!1,Ka);if(a===null&&(Cc(ja.set(-.5,.5,0),No,o,Uo,s,r),nd.set(0,1),a=e.ray.intersectTriangle(Rc,Ac,ja,!1,Ka),a===null))return;let l=e.ray.origin.distanceTo(Ka);l<e.near||l>e.far||t.push({distance:l,point:Ka.clone(),uv:er.getInterpolation(Ka,Rc,ja,Ac,Jm,nd,jm,new te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Cc(n,e,t,i,s,r){Ho.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Ja.x=r*Ho.x-s*Ho.y,Ja.y=s*Ho.x+r*Ho.y):Ja.copy(Ho),n.copy(e),n.x+=Ja.x,n.y+=Ja.y,n.applyMatrix4(Pg)}var Wr=class extends Xn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=bn,h=bn,d,f){super(null,o,a,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jc=class extends on{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ko=new mt,Qm=new mt,Pc=[],eg=new zi,Gb=new mt,Qa=new se,el=new or,ar=class extends se{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Gb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ko),eg.copy(e.boundingBox).applyMatrix4(ko),this.boundingBox.union(eg)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new or),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ko),el.copy(e.boundingSphere).applyMatrix4(ko),this.boundingSphere.union(el)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Qa.geometry=this.geometry,Qa.material=this.material,Qa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),el.copy(this.boundingSphere),el.applyMatrix4(i),e.ray.intersectsSphere(el)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ko),Qm.multiplyMatrices(i,ko),Qa.matrixWorld=Qm,Qa.raycast(e,Pc);for(let o=0,a=Pc.length;o<a;o++){let l=Pc[o];l.instanceId=r,l.object=this,t.push(l)}Pc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new jc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Wr(new Float32Array(s*this.count),s,this.count,Vf,Ki));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ci=class extends Ji{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},tg=new mt,uf=new $c,Ic=new or,Lc=new w,yi=class extends fn{constructor(e=new At,t=new ci){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ic.copy(i.boundingSphere),Ic.applyMatrix4(s),Ic.radius+=r,e.ray.intersectsSphere(Ic)===!1)return;tg.copy(s).invert(),uf.copy(e.ray).applyMatrix4(tg);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,x=p;g<x;g++){let v=c.getX(g);Lc.fromBufferAttribute(d,v),ng(Lc,v,l,s,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=f,x=p;g<x;g++)Lc.fromBufferAttribute(d,g),ng(Lc,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ng(n,e,t,i,s,r,o){let a=uf.distanceSqToPoint(n);if(a<t){let l=new w;uf.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var dl=class extends Xn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=bn,this.minFilter=bn,this.generateMipmaps=!1,this.needsUpdate=!0}};var qt=class extends Xn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Mi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new te:new w);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new w,s=[],r=[],o=[],a=new w,l=new mt;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new w)}r[0]=new w,o[0]=new w;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(En(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(En(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},fl=class extends Mi{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new te){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*d+this.aX,c=f*d+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},df=class extends fl{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Kf(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,p*=h,s(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Dc=new w,id=new Kf,sd=new Kf,rd=new Kf,pl=class extends Mi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new w){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Dc.subVectors(s[0],s[1]).add(s[0]),c=Dc);let d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Dc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Dc),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),v<1e-4&&(v=x),id.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,g,x,v),sd.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,g,x,v),rd.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,g,x,v)}else this.curveType==="catmullrom"&&(id.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),sd.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),rd.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return i.set(id.calc(l),sd.calc(l),rd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new w().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ig(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Wb(n,e){let t=1-n;return t*t*e}function $b(n,e){return 2*(1-n)*n*e}function Xb(n,e){return n*n*e}function al(n,e,t,i){return Wb(n,e)+$b(n,t)+Xb(n,i)}function qb(n,e){let t=1-n;return t*t*t*e}function Yb(n,e){let t=1-n;return 3*t*t*n*e}function Zb(n,e){return 3*(1-n)*n*n*e}function Kb(n,e){return n*n*n*e}function ll(n,e,t,i,s){return qb(n,e)+Yb(n,t)+Zb(n,i)+Kb(n,s)}var Qc=class extends Mi{constructor(e=new te,t=new te,i=new te,s=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new te){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ll(e,s.x,r.x,o.x,a.x),ll(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ff=class extends Mi{constructor(e=new w,t=new w,i=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new w){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ll(e,s.x,r.x,o.x,a.x),ll(e,s.y,r.y,o.y,a.y),ll(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},eh=class extends Mi{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pf=class extends Mi{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},th=class extends Mi{constructor(e=new te,t=new te,i=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new te){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(al(e,s.x,r.x,o.x),al(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nh=class extends Mi{constructor(e=new w,t=new w,i=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new w){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(al(e,s.x,r.x,o.x),al(e,s.y,r.y,o.y),al(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ih=class extends Mi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(ig(a,l.x,c.x,h.x,d.x),ig(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new te().fromArray(s))}return this}},mf=Object.freeze({__proto__:null,ArcCurve:df,CatmullRomCurve3:pl,CubicBezierCurve:Qc,CubicBezierCurve3:ff,EllipseCurve:fl,LineCurve:eh,LineCurve3:pf,QuadraticBezierCurve:th,QuadraticBezierCurve3:nh,SplineCurve:ih}),gf=class extends Mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mf[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new mf[s.type]().fromJSON(s))}return this}},vf=class extends gf{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new eh(this.currentPoint.clone(),new te(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new th(this.currentPoint.clone(),new te(e,t),new te(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Qc(this.currentPoint.clone(),new te(e,t),new te(i,s),new te(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ih(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new fl(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},As=class n extends At{constructor(e=[new te(0,-.5),new te(.5,0),new te(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=En(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,d=new w,f=new te,p=new w,g=new w,x=new w,v=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:v=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,p.x=m*1,p.y=-v,p.z=m*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:v=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,p.x=m*1,p.y=-v,p.z=m*0,g.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(g)}for(let _=0;_<=t;_++){let E=i+_*h*s,M=Math.sin(E),D=Math.cos(E);for(let A=0;A<=e.length-1;A++){d.x=e[A].x*M,d.y=e[A].y,d.z=e[A].x*D,o.push(d.x,d.y,d.z),f.x=_/t,f.y=A/(e.length-1),a.push(f.x,f.y);let P=l[3*A+0]*M,I=l[3*A+1],S=l[3*A+0]*D;c.push(P,I,S)}}for(let _=0;_<t;_++)for(let E=0;E<e.length-1;E++){let M=E+_*e.length,D=M,A=M+e.length,P=M+e.length+1,I=M+1;r.push(D,A,I),r.push(P,I,A)}this.setIndex(r),this.setAttribute("position",new at(o,3)),this.setAttribute("uv",new at(a,2)),this.setAttribute("normal",new at(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},sh=class n extends As{constructor(e=1,t=1,i=4,s=8){let r=new vf;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},Oi=class n extends At{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new w,h=new te;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let p=i+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(a,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Oe=class n extends At{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],p=[],g=0,x=[],v=i/2,m=0;_(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new at(d,3)),this.setAttribute("normal",new at(f,3)),this.setAttribute("uv",new at(p,2));function _(){let M=new w,D=new w,A=0,P=(t-e)/i;for(let I=0;I<=r;I++){let S=[],b=I/r,U=b*(t-e)+e;for(let O=0;O<=s;O++){let F=O/s,G=F*l+a,Q=Math.sin(G),$=Math.cos(G);D.x=U*Q,D.y=-b*i+v,D.z=U*$,d.push(D.x,D.y,D.z),M.set(Q,P,$).normalize(),f.push(M.x,M.y,M.z),p.push(F,1-b),S.push(g++)}x.push(S)}for(let I=0;I<s;I++)for(let S=0;S<r;S++){let b=x[S][I],U=x[S+1][I],O=x[S+1][I+1],F=x[S][I+1];(e>0||S!==0)&&(h.push(b,U,F),A+=3),(t>0||S!==r-1)&&(h.push(U,O,F),A+=3)}c.addGroup(m,A,0),m+=A}function E(M){let D=g,A=new te,P=new w,I=0,S=M===!0?e:t,b=M===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,v*b,0),f.push(0,b,0),p.push(.5,.5),g++;let U=g;for(let O=0;O<=s;O++){let G=O/s*l+a,Q=Math.cos(G),$=Math.sin(G);P.x=S*$,P.y=v*b,P.z=S*Q,d.push(P.x,P.y,P.z),f.push(0,b,0),A.x=Q*.5+.5,A.y=$*.5*b+.5,p.push(A.x,A.y),g++}for(let O=0;O<s;O++){let F=D+O,G=U+O;M===!0?h.push(G,G+1,F):h.push(G+1,G,F),I+=3}c.addGroup(m,I,M===!0?1:2),m+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Yt=class n extends Oe{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ml=class n extends At{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let E=new w,M=new w,D=new w;for(let A=0;A<t.length;A+=3)p(t[A+0],E),p(t[A+1],M),p(t[A+2],D),l(E,M,D,_)}function l(_,E,M,D){let A=D+1,P=[];for(let I=0;I<=A;I++){P[I]=[];let S=_.clone().lerp(M,I/A),b=E.clone().lerp(M,I/A),U=A-I;for(let O=0;O<=U;O++)O===0&&I===A?P[I][O]=S:P[I][O]=S.clone().lerp(b,O/U)}for(let I=0;I<A;I++)for(let S=0;S<2*(A-I)-1;S++){let b=Math.floor(S/2);S%2===0?(f(P[I][b+1]),f(P[I+1][b]),f(P[I][b])):(f(P[I][b+1]),f(P[I+1][b+1]),f(P[I+1][b]))}}function c(_){let E=new w;for(let M=0;M<r.length;M+=3)E.x=r[M+0],E.y=r[M+1],E.z=r[M+2],E.normalize().multiplyScalar(_),r[M+0]=E.x,r[M+1]=E.y,r[M+2]=E.z}function h(){let _=new w;for(let E=0;E<r.length;E+=3){_.x=r[E+0],_.y=r[E+1],_.z=r[E+2];let M=v(_)/2/Math.PI+.5,D=m(_)/Math.PI+.5;o.push(M,1-D)}g(),d()}function d(){for(let _=0;_<o.length;_+=6){let E=o[_+0],M=o[_+2],D=o[_+4],A=Math.max(E,M,D),P=Math.min(E,M,D);A>.9&&P<.1&&(E<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),D<.2&&(o[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function p(_,E){let M=_*3;E.x=e[M+0],E.y=e[M+1],E.z=e[M+2]}function g(){let _=new w,E=new w,M=new w,D=new w,A=new te,P=new te,I=new te;for(let S=0,b=0;S<r.length;S+=9,b+=6){_.set(r[S+0],r[S+1],r[S+2]),E.set(r[S+3],r[S+4],r[S+5]),M.set(r[S+6],r[S+7],r[S+8]),A.set(o[b+0],o[b+1]),P.set(o[b+2],o[b+3]),I.set(o[b+4],o[b+5]),D.copy(_).add(E).add(M).divideScalar(3);let U=v(D);x(A,b+0,_,U),x(P,b+2,E,U),x(I,b+4,M,U)}}function x(_,E,M,D){D<0&&_.x===1&&(o[E]=_.x-1),M.x===0&&M.z===0&&(o[E]=D/2/Math.PI+.5)}function v(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},_i=class n extends ml{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var qn=class n extends ml{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},lr=class n extends ml{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},tn=class n extends At{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=e,f=(t-e)/s,p=new w,g=new te;for(let x=0;x<=s;x++){for(let v=0;v<=i;v++){let m=r+v/i*o;p.x=d*Math.cos(m),p.y=d*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}d+=f}for(let x=0;x<s;x++){let v=x*(i+1);for(let m=0;m<i;m++){let _=m+v,E=_,M=_+i+1,D=_+i+2,A=_+1;a.push(E,M,A),a.push(M,D,A)}}this.setIndex(a),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ge=class n extends At{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new w,f=new w,p=[],g=[],x=[],v=[];for(let m=0;m<=i;m++){let _=[],E=m/i,M=0;m===0&&o===0?M=.5/t:m===i&&l===Math.PI&&(M=-.5/t);for(let D=0;D<=t;D++){let A=D/t;d.x=-e*Math.cos(s+A*r)*Math.sin(o+E*a),d.y=e*Math.cos(o+E*a),d.z=e*Math.sin(s+A*r)*Math.sin(o+E*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),v.push(A+M,1-E),_.push(c++)}h.push(_)}for(let m=0;m<i;m++)for(let _=0;_<t;_++){let E=h[m][_+1],M=h[m][_],D=h[m+1][_],A=h[m+1][_+1];(m!==0||o>0)&&p.push(E,M,A),(m!==i-1||l<Math.PI)&&p.push(M,D,A)}this.setIndex(p),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var De=class n extends At{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new w,d=new w,f=new w;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let x=g/s*r,v=p/i*Math.PI*2;d.x=(e+t*Math.cos(v))*Math.cos(x),d.y=(e+t*Math.cos(v))*Math.sin(x),d.z=t*Math.sin(v),a.push(d.x,d.y,d.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let x=(s+1)*p+g-1,v=(s+1)*(p-1)+g-1,m=(s+1)*(p-1)+g,_=(s+1)*p+g;o.push(x,v,_),o.push(v,m,_)}this.setIndex(o),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var rh=class n extends At{constructor(e=new nh(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new w,l=new w,c=new te,h=new w,d=[],f=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new at(d,3)),this.setAttribute("normal",new at(f,3)),this.setAttribute("uv",new at(p,2));function x(){for(let E=0;E<t;E++)v(E);v(r===!1?t:0),_(),m()}function v(E){h=e.getPointAt(E/t,h);let M=o.normals[E],D=o.binormals[E];for(let A=0;A<=s;A++){let P=A/s*Math.PI*2,I=Math.sin(P),S=-Math.cos(P);l.x=S*M.x+I*D.x,l.y=S*M.y+I*D.y,l.z=S*M.z+I*D.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function m(){for(let E=1;E<=t;E++)for(let M=1;M<=s;M++){let D=(s+1)*(E-1)+(M-1),A=(s+1)*E+(M-1),P=(s+1)*E+M,I=(s+1)*(E-1)+M;g.push(D,A,I),g.push(A,P,I)}}function _(){for(let E=0;E<=t;E++)for(let M=0;M<=s;M++)c.x=E/t,c.y=M/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new mf[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var cr=class extends Pt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},ge=class extends Ji{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xf,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var oh=class extends Ji{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xf,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function Uc(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Jb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Jo=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},xf=class extends Jo{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tm,endingEnd:tm}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case nm:r=e,a=2*t-i;break;case im:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case nm:o=e,l=2*i-t;break;case im:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),x=g*g,v=x*g,m=-f*v+2*f*x-f*g,_=(1+f)*v+(-1.5-2*f)*x+(-.5+f)*g+1,E=(-1-p)*v+(1.5+p)*x+.5*g,M=p*v-p*x;for(let D=0;D!==a;++D)r[D]=m*o[h+D]+_*o[c+D]+E*o[l+D]+M*o[d+D];return r}},yf=class extends Jo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},Mf=class extends Jo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Fi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Uc(t,this.TimeBufferType),this.values=Uc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Uc(e.times,Array),values:Uc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Mf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fc:t=this.InterpolantFactoryMethodDiscrete;break;case Xd:t=this.InterpolantFactoryMethodLinear;break;case Cu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fc;case this.InterpolantFactoryMethodLinear:return Xd;case this.InterpolantFactoryMethodSmooth:return Cu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Jb(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Cu,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,f=d-i,p=d+i;for(let g=0;g!==i;++g){let x=t[d+g];if(x!==t[f+g]||x!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Fi.prototype.TimeBufferType=Float32Array;Fi.prototype.ValueBufferType=Float32Array;Fi.prototype.DefaultInterpolation=Xd;var $r=class extends Fi{constructor(e,t,i){super(e,t,i)}};$r.prototype.ValueTypeName="bool";$r.prototype.ValueBufferType=Array;$r.prototype.DefaultInterpolation=Fc;$r.prototype.InterpolantFactoryMethodLinear=void 0;$r.prototype.InterpolantFactoryMethodSmooth=void 0;var _f=class extends Fi{};_f.prototype.ValueTypeName="color";var Ef=class extends Fi{};Ef.prototype.ValueTypeName="number";var bf=class extends Jo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)dn.slerpFlat(r,0,o,c-a,o,c,l);return r}},ah=class extends Fi{InterpolantFactoryMethodLinear(e){return new bf(this.times,this.values,this.getValueSize(),e)}};ah.prototype.ValueTypeName="quaternion";ah.prototype.InterpolantFactoryMethodSmooth=void 0;var Xr=class extends Fi{constructor(e,t,i){super(e,t,i)}};Xr.prototype.ValueTypeName="string";Xr.prototype.ValueBufferType=Array;Xr.prototype.DefaultInterpolation=Fc;Xr.prototype.InterpolantFactoryMethodLinear=void 0;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var wf=class extends Fi{};wf.prototype.ValueTypeName="vector";var Sf=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},jb=new Sf,Tf=class{constructor(e){this.manager=e!==void 0?e:jb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Tf.DEFAULT_MATERIAL_NAME="__DEFAULT";var qr=class extends fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},hr=class extends qr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},od=new mt,sg=new w,rg=new w,gl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hl,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;sg.setFromMatrixPosition(e.matrixWorld),t.position.copy(sg),rg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rg),t.updateMatrixWorld(),od.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(od),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(od)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Rf=class extends gl{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=$o*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},jo=class extends qr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Rf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},og=new mt,tl=new w,ad=new w,Af=class extends gl{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new Vt(2,1,1,1),new Vt(0,1,1,1),new Vt(3,1,1,1),new Vt(1,1,1,1),new Vt(3,0,1,1),new Vt(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),tl.setFromMatrixPosition(e.matrixWorld),i.position.copy(tl),ad.copy(i.position),ad.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ad),i.updateMatrixWorld(),s.makeTranslation(-tl.x,-tl.y,-tl.z),og.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(og)}},hi=class extends qr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Af}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Cf=class extends gl{constructor(){super(new qo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qi=class extends qr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new Cf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},lh=class extends qr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Qo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ag(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=ag();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function ag(){return performance.now()}var Jf="\\[\\]\\.:\\/",Qb=new RegExp("["+Jf+"]","g"),jf="[^"+Jf+"]",ew="[^"+Jf.replace("\\.","")+"]",tw=/((?:WC+[\/:])*)/.source.replace("WC",jf),nw=/(WCOD+)?/.source.replace("WCOD",ew),iw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jf),sw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jf),rw=new RegExp("^"+tw+nw+iw+sw+"$"),ow=["material","materials","bones","map"],Pf=class{constructor(e,t,i){let s=i||nn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},nn=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qb,"")}static parseTrackName(e){let t=rw.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);ow.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};nn.Composite=Pf;nn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nn.prototype.GetterByBindingType=[nn.prototype._getValue_direct,nn.prototype._getValue_array,nn.prototype._getValue_arrayElement,nn.prototype._getValue_toArray];nn.prototype.SetterByBindingTypeAndVersioning=[[nn.prototype._setValue_direct,nn.prototype._setValue_direct_setNeedsUpdate,nn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_array,nn.prototype._setValue_array_setNeedsUpdate,nn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_arrayElement,nn.prototype._setValue_arrayElement_setNeedsUpdate,nn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_fromArray,nn.prototype._setValue_fromArray_setNeedsUpdate,nn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lT=new Float32Array(1);var lg=new te,ch=class{constructor(e=new te(1/0,1/0),t=new te(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=lg.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,lg).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:If}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=If);var ur={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Yn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},aw=new qo(-1,1,1,-1,0,1),Qf=class extends At{constructor(){super(),this.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new at([0,2,0,0,2,0],2))}},lw=new Qf,es=class{constructor(e){this._mesh=new se(lw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,aw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Zr=class extends Yn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Qn.clone(e.uniforms),this.material=new Pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new es(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var vl=class extends Yn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},mh=class extends Yn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var gh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new te);this._width=i.width,this._height=i.height,t=new wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:jn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Zr(ur),this.copyPass.material.blending=vn,this.clock=new Qo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}vl!==void 0&&(o instanceof vl?i=!0:o instanceof mh&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var vh=class extends Yn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ce}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Ig={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ce(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ia=class n extends Yn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new te(e.x,e.y):new te(256,256),this.clearColor=new ce(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new wn(r,o,{type:jn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let f=new wn(r,o,{type:jn});f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new wn(r,o,{type:jn});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=Ig;this.highPassUniforms=Qn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new te(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ur;this.copyUniforms=Qn.clone(h.uniforms),this.blendMaterial=new Pt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ke,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ce,this.oldClearAlpha=1,this.basic=new Ne,this.fsQuad=new es(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new te(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Pt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new te(.5,.5)},direction:{value:new te(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Pt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};ia.BlurDirectionX=new te(1,0);ia.BlurDirectionY=new te(0,1);var Lg={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var xh=class extends Yn{constructor(){super();let e=Lg;this.uniforms=Qn.clone(e.uniforms),this.material=new cr({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new es(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},St.getTransfer(this._outputColorSpace)===Bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Uf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Nf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Hf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Yr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===kf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===zf&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var xl={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new te},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new mt},cameraProjectionMatrixInverse:{value:new mt},cameraWorldMatrix:{value:new mt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new w(-1,-1,-1)},sceneBoxMax:{value:new w(1,1,1)}},vertexShader:`

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
		}`},yl={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},yh={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Dg(n=5){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=cw(e),i=t.length,s=new Uint8Array(i*4);for(let o=0;o<i;++o){let a=t[o],l=2*Math.PI*a/i,c=new w(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Wr(s,e,e);return r.wrapS=$n,r.wrapT=$n,r.needsUpdate=!0,r}function cw(n){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),i[s*e+r]!==0){r-=2,s++;continue}else i[s*e+r]=o++;r++,s--}return i}var Ml={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:ep(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new te},cameraProjectionMatrixInverse:{value:new mt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function ep(n,e,t){let i=hw(n,e,t),s="vec3[SAMPLES](";for(let r=0;r<n;r++){let o=i[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<n-1?",":")"}`}return s}function hw(n,e,t){let i=[];for(let s=0;s<n;s++){let r=2*Math.PI*e*s/n,o=Math.pow(s/(n-1),t);i.push(new w(Math.cos(r),Math.sin(r),o))}return i}var Mh=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}noise(e,t){let i,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,d=(l+c)*h,f=l-d,p=c-d,g=e-f,x=t-p,v,m;g>x?(v=1,m=0):(v=0,m=1);let _=g-v+h,E=x-m+h,M=g-1+2*h,D=x-1+2*h,A=l&255,P=c&255,I=this.perm[A+this.perm[P]]%12,S=this.perm[A+v+this.perm[P+m]]%12,b=this.perm[A+1+this.perm[P+1]]%12,U=.5-g*g-x*x;U<0?i=0:(U*=U,i=U*U*this.dot(this.grad3[I],g,x));let O=.5-_*_-E*E;O<0?s=0:(O*=O,s=O*O*this.dot(this.grad3[S],_,E));let F=.5-M*M-D*D;return F<0?r=0:(F*=F,r=F*F*this.dot(this.grad3[b],M,D)),70*(i+s+r)}noise3d(e,t,i){let s,r,o,a,c=(e+t+i)*.3333333333333333,h=Math.floor(e+c),d=Math.floor(t+c),f=Math.floor(i+c),p=1/6,g=(h+d+f)*p,x=h-g,v=d-g,m=f-g,_=e-x,E=t-v,M=i-m,D,A,P,I,S,b;_>=E?E>=M?(D=1,A=0,P=0,I=1,S=1,b=0):_>=M?(D=1,A=0,P=0,I=1,S=0,b=1):(D=0,A=0,P=1,I=1,S=0,b=1):E<M?(D=0,A=0,P=1,I=0,S=1,b=1):_<M?(D=0,A=1,P=0,I=0,S=1,b=1):(D=0,A=1,P=0,I=1,S=1,b=0);let U=_-D+p,O=E-A+p,F=M-P+p,G=_-I+2*p,Q=E-S+2*p,$=M-b+2*p,re=_-1+3*p,X=E-1+3*p,ae=M-1+3*p,Se=h&255,He=d&255,ot=f&255,Lt=this.perm[Se+this.perm[He+this.perm[ot]]]%12,K=this.perm[Se+D+this.perm[He+A+this.perm[ot+P]]]%12,le=this.perm[Se+I+this.perm[He+S+this.perm[ot+b]]]%12,Ue=this.perm[Se+1+this.perm[He+1+this.perm[ot+1]]]%12,me=.6-_*_-E*E-M*M;me<0?s=0:(me*=me,s=me*me*this.dot3(this.grad3[Lt],_,E,M));let We=.6-U*U-O*O-F*F;We<0?r=0:(We*=We,r=We*We*this.dot3(this.grad3[K],U,O,F));let Ke=.6-G*G-Q*Q-$*$;Ke<0?o=0:(Ke*=Ke,o=Ke*Ke*this.dot3(this.grad3[le],G,Q,$));let nt=.6-re*re-X*X-ae*ae;return nt<0?a=0:(nt*=nt,a=nt*nt*this.dot3(this.grad3[Ue],re,X,ae)),32*(s+r+o+a)}noise4d(e,t,i,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,d,f,p,g,x=(e+t+i+s)*l,v=Math.floor(e+x),m=Math.floor(t+x),_=Math.floor(i+x),E=Math.floor(s+x),M=(v+m+_+E)*c,D=v-M,A=m-M,P=_-M,I=E-M,S=e-D,b=t-A,U=i-P,O=s-I,F=S>b?32:0,G=S>U?16:0,Q=b>U?8:0,$=S>O?4:0,re=b>O?2:0,X=U>O?1:0,ae=F+G+Q+$+re+X,Se=o[ae][0]>=3?1:0,He=o[ae][1]>=3?1:0,ot=o[ae][2]>=3?1:0,Lt=o[ae][3]>=3?1:0,K=o[ae][0]>=2?1:0,le=o[ae][1]>=2?1:0,Ue=o[ae][2]>=2?1:0,me=o[ae][3]>=2?1:0,We=o[ae][0]>=1?1:0,Ke=o[ae][1]>=1?1:0,nt=o[ae][2]>=1?1:0,Kt=o[ae][3]>=1?1:0,Et=S-Se+c,jt=b-He+c,H=U-ot+c,Cn=O-Lt+c,yt=S-K+2*c,Mt=b-le+2*c,Ze=U-Ue+2*c,Wt=O-me+2*c,qe=S-We+3*c,L=b-Ke+3*c,T=U-nt+3*c,B=O-Kt+3*c,j=S-1+4*c,ie=b-1+4*c,J=U-1+4*c,ze=O-1+4*c,Ee=v&255,Re=m&255,xt=_&255,oe=E&255,Ie=a[Ee+a[Re+a[xt+a[oe]]]]%32,je=a[Ee+Se+a[Re+He+a[xt+ot+a[oe+Lt]]]]%32,et=a[Ee+K+a[Re+le+a[xt+Ue+a[oe+me]]]]%32,Le=a[Ee+We+a[Re+Ke+a[xt+nt+a[oe+Kt]]]]%32,wt=a[Ee+1+a[Re+1+a[xt+1+a[oe+1]]]]%32,it=.6-S*S-b*b-U*U-O*O;it<0?h=0:(it*=it,h=it*it*this.dot4(r[Ie],S,b,U,O));let Dt=.6-Et*Et-jt*jt-H*H-Cn*Cn;Dt<0?d=0:(Dt*=Dt,d=Dt*Dt*this.dot4(r[je],Et,jt,H,Cn));let N=.6-yt*yt-Mt*Mt-Ze*Ze-Wt*Wt;N<0?f=0:(N*=N,f=N*N*this.dot4(r[et],yt,Mt,Ze,Wt));let ye=.6-qe*qe-L*L-T*T-B*B;ye<0?p=0:(ye*=ye,p=ye*ye*this.dot4(r[Le],qe,L,T,B));let q=.6-j*j-ie*ie-J*J-ze*ze;return q<0?g=0:(q*=q,g=q*q*this.dot4(r[wt],j,ie,J,ze)),27*(h+d+f+p+g)}};var sa=class n extends Yn{constructor(e,t,i,s,r,o,a){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Dg(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new wn(this.width,this.height,{type:jn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Pt({defines:Object.assign({},xl.defines),uniforms:Qn.clone(xl.uniforms),vertexShader:xl.vertexShader,fragmentShader:xl.fragmentShader,blending:vn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new oh,this.normalMaterial.blending=vn,this.pdMaterial=new Pt({defines:Object.assign({},Ml.defines),uniforms:Qn.clone(Ml.uniforms),vertexShader:Ml.vertexShader,fragmentShader:Ml.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Pt({defines:Object.assign({},yl.defines),uniforms:Qn.clone(yl.uniforms),vertexShader:yl.vertexShader,fragmentShader:yl.fragmentShader,blending:vn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Pt({uniforms:Qn.clone(ur.uniforms),vertexShader:ur.vertexShader,fragmentShader:ur.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:uh,blendDst:ea,blendEquation:vi,blendSrcAlpha:hh,blendDstAlpha:ea,blendEquationAlpha:vi}),this.blendMaterial=new Pt({uniforms:Qn.clone(yh.uniforms),vertexShader:yh.vertexShader,fragmentShader:yh.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Df,blendSrc:uh,blendDst:ea,blendEquation:vi,blendSrcAlpha:hh,blendDstAlpha:ea,blendEquationAlpha:vi}),this.fsQuad=new es(null),this.originalClearColor=new ce,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Zo,this.depthTexture.format=sr,this.depthTexture.type=ir,this.normalRenderTarget=new wn(this.width,this.height,{minFilter:bn,magFilter:bn,type:jn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=ep(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Off:break;case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=vn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=vn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=vn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=vn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=vn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){let s=t.get(i);i.visible=s}),t.clear()}generateNoise(e=64){let t=new Mh,i=e*e*4,s=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Wr(s,e,e,oi,Jn);return r.wrapS=$n,r.wrapT=$n,r.needsUpdate=!0,r}};sa.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var u={scene:null,camera:null,renderer:null,player:null,time:{t:.3,day:1,elevation:1,night:0},res:{iron:0,silicon:0,ice:0,titanium:0},buildings:[],nodes:[],enemies:[],colonists:[],colony:{pop:0,housing:0,o2:0,food:0,water:0,support:0,powerProd:0,powerUse:0,deficit:!1},upgrades:{},stats:{mined:{iron:0,silicon:0,ice:0,titanium:0},built:{},kills:0,arrived:0,crafted:{}},chapter:0,terraform:0,ended:!1,storm:0,menuOpen:!1,locked:!1,started:!1,debug:!1,colliders:null,raining:!1,events:{map:{},on(n,e){var t;((t=this.map)[n]||(t[n]=[])).push(e)},emit(n,e){(this.map[n]||[]).forEach(t=>t(e))}}},sn={iron:{name:"\u94C1\u77FF",icon:"iron",color:"#d08a5e"},silicon:{name:"\u7845\u6676",icon:"silicon",color:"#f1dca0"},ice:{name:"\u6C34\u51B0",icon:"ice",color:"#a9dcff"},titanium:{name:"\u949B\u77FF",icon:"titanium",color:"#b9a6ff"}};function Bi(n){for(let e in n)if((u.res[e]||0)<n[e])return!1;return!0}function _l(n){for(let e in n)u.res[e]-=n[e]}function ra(n){return Object.entries(n).map(([e,t])=>`<span class="cost ${u.res[e]>=t?"":"lack"}" style="--rc:${sn[e].color}"><svg class="ico"><use href="#i-${e}"/></svg>${t}</span>`).join(" ")}var _h=class{constructor(e=16){this.cell=e,this.map=new Map}key(e,t){return e*73856093^t*19349663}add(e){let t=this.cell,i=Math.floor((e.x-e.r)/t),s=Math.floor((e.x+e.r)/t),r=Math.floor((e.z-e.r)/t),o=Math.floor((e.z+e.r)/t);e._keys=[];for(let a=i;a<=s;a++)for(let l=r;l<=o;l++){let c=this.key(a,l);this.map.has(c)||this.map.set(c,[]),this.map.get(c).push(e),e._keys.push(c)}return e}remove(e){if(!(!e||!e._keys)){for(let t of e._keys){let i=this.map.get(t);if(!i)continue;let s=i.indexOf(e);s>=0&&i.splice(s,1)}e._keys=null}}query(e,t){return this.map.get(this.key(Math.floor(e/this.cell),Math.floor(t/this.cell)))||[]}overlaps(e,t,i){let s=this.cell,r=new Set;for(let o=Math.floor((e-i)/s);o<=Math.floor((e+i)/s);o++)for(let a=Math.floor((t-i)/s);a<=Math.floor((t+i)/s);a++){let l=this.map.get(this.key(o,a));if(l)for(let c of l){if(r.has(c))continue;r.add(c);let h=c.x-e,d=c.z-t,f=c.r+i;if(h*h+d*d<f*f)return c}}return null}};var Nn={mars:{id:"mars",name:"\u706B\u661F",place:"\u4E4C\u6258\u90A6\u5E73\u539F",title:"\u65B0\u5BB6\u56ED",next:"europa",seed:2089,gravity:5.6,solar:1,terraformable:!0,craters:46,hills:46,ridges:14,detail:1.6,ground:{a:[.56,.25,.14],b:[.74,.4,.24],steep:[.36,.19,.13],low:[.42,.22,.16]},rockHSL:[.04,.45,.22],rock:9062960,sky:{dayTop:[.62,.42,.29],dayHor:[.9,.68,.5],setTop:[.17,.13,.15],setHor:[.58,.4,.33],nightTop:[.006,.008,.022],nightHor:[.035,.035,.055],halo:[.35,.58,.95],storm:[.62,.42,.28]},dust:16765088,enemy:[3808536,9054736,16730640],extras:"moons",storms:!0,intro:["2089 \u5E74\u3002","\u5730\u7403\u4F9D\u7136\u7F8E\u4E3D\uFF0C\u4F46\u5DF2\u7ECF\u592A\u62E5\u6324\u3001\u592A\u708E\u70ED\u3001\u592A\u75B2\u60EB\u3002","\u300C\u65B9\u821F\u8BA1\u5212\u300D\u628A\u4EBA\u7C7B\u7684\u672A\u6765\uFF0C\u62BC\u5728\u4E86\u4E00\u9897\u7EA2\u8272\u661F\u7403\u4E0A\u3002","\u7ECF\u8FC7\u4E03\u4E2A\u6708\u3001\u4E24\u4EBF\u4E24\u5343\u4E94\u767E\u4E07\u516C\u91CC\u7684\u822A\u884C\u2014\u2014","\u4F60\u7684\u7740\u9646\u8231\uFF0C\u5728\u4E4C\u6258\u90A6\u5E73\u539F\u7684\u6668\u5149\u4E2D\u843D\u5730\u3002",'\u4F60\u662F\u7B2C\u4E00\u4E2A\u3002<b style="color:#ff8a3d">\u4F46\u4E0D\u4F1A\u662F\u6700\u540E\u4E00\u4E2A\u3002</b>']},europa:{id:"europa",name:"\u6728\u536B\u4E8C\xB7\u6B27\u7F57\u5DF4",place:"\u5EB7\u7EB3\u9A6C\u62C9\u6DF7\u6C8C\u533A",title:"\u51B0\u4E0B\u4E4B\u6D77",next:"kepler",seed:1610,gravity:3.6,solar:.55,terraformable:!1,craters:14,hills:16,ridges:26,detail:1.1,ground:{a:[.8,.84,.88],b:[.93,.95,.97],steep:[.52,.36,.3],low:[.62,.72,.82]},rockHSL:[.58,.2,.62],rock:12110040,sky:{dayTop:[.02,.025,.05],dayHor:[.16,.18,.26],setTop:[.01,.012,.03],setHor:[.1,.1,.16],nightTop:[.004,.005,.012],nightHor:[.02,.025,.04],halo:[.6,.7,.9],storm:[.5,.6,.7]},dust:14676223,enemy:[1454138,2788e3,4251903],extras:"jupiter",storms:!1,intro:["\u706B\u661F\u7684\u706F\u706B\uFF0C\u5DF2\u7ECF\u5728\u8EAB\u540E\u4EAE\u6210\u4E86\u4E00\u7247\u3002","\u800C\u4F60\uFF0C\u518D\u4E00\u6B21\u51FA\u53D1\u4E86\u3002","\u6728\u661F\u7684\u7B2C\u4E8C\u9897\u536B\u661F\u2014\u2014\u6B27\u7F57\u5DF4\u3002","\u5728\u5B83\u4E8C\u5341\u516C\u91CC\u539A\u7684\u51B0\u58F3\u4E4B\u4E0B\uFF0C\u662F\u4E00\u6574\u7247\u4ECE\u672A\u89C1\u8FC7\u9633\u5149\u7684\u6D77\u6D0B\u3002","\u6728\u661F\uFF0C\u50CF\u4E00\u8F6E\u5DE8\u5927\u7684\u6708\u4EAE\uFF0C\u60AC\u5728\u5730\u5E73\u7EBF\u4E0A\u3002",'<b style="color:#66e6ff">\u4EBA\u7C7B\u7684\u7B2C\u4E8C\u4E2A\u5BB6\uFF0C\u5728\u51B0\u4E0B\u3002</b>']},kepler:{id:"kepler",name:"\u5F00\u666E\u52D2-442b",place:"\u7FE1\u7FE0\u8C37\u5730",title:"\u53CC\u65E5\u4E4B\u5730",next:null,seed:442,gravity:7.2,solar:1.3,terraformable:!1,craters:8,hills:64,ridges:10,detail:2.2,ground:{a:[.18,.36,.3],b:[.32,.52,.34],steep:[.3,.24,.3],low:[.2,.26,.4]},rockHSL:[.75,.25,.3],rock:6969994,sky:{dayTop:[.3,.5,.78],dayHor:[.78,.86,.8],setTop:[.2,.12,.3],setHor:[.9,.5,.4],nightTop:[.01,.01,.04],nightHor:[.05,.04,.09],halo:[1,.6,.4],storm:[.6,.7,.6]},dust:13172696,enemy:[1976854,5939242,10551104],extras:"twinsuns",storms:!1,intro:["\u4E00\u5343\u4E8C\u767E\u5149\u5E74\u3002","\u51B7\u51BB\u8231\u91CC\u7684\u4E09\u767E\u5E74\uFF0C\u5BF9\u4F60\u53EA\u662F\u4E00\u573A\u68A6\u3002","\u8237\u7A97\u5916\uFF0C\u4E24\u9897\u592A\u9633\u6B63\u4ECE\u7D2B\u8272\u7684\u5C71\u810A\u540E\u5347\u8D77\u3002","\u8FD9\u91CC\u6709\u98CE\uFF0C\u6709\u4E91\uFF0C\u6709\u4F1A\u5728\u591C\u91CC\u53D1\u5149\u7684\u68EE\u6797\u3002","\u5F00\u666E\u52D2-442b\u2014\u2014\u4EBA\u7C7B\u7B2C\u4E00\u6B21\uFF0C\u6765\u5230\u53E6\u4E00\u9897\u6052\u661F\u7684\u8EAB\u8FB9\u3002",'<b style="color:#a0ff70">\u4ECE\u8FD9\u91CC\u5F00\u59CB\uFF0C\u4EBA\u7C7B\u6210\u4E3A\u4E86\u661F\u9645\u6587\u660E\u3002</b>']}},Ng="starport-meta";function dr(){try{return JSON.parse(localStorage.getItem(Ng))||{}}catch{return{}}}function El(n){try{localStorage.setItem(Ng,JSON.stringify(n))}catch{}}function tp(){try{for(let n of Object.keys(localStorage))n.startsWith("starport-")&&localStorage.removeItem(n)}catch{}}var Ug=new URLSearchParams(location.search).get("planet"),mn=dr(),st=Nn[Ug]?Ug:Nn[mn.planet]?mn.planet:"mars",Me=Nn[st],Eh=st==="mars"?"starport-newhome-v1":"starport-planet-"+st;function ui(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function bh(n){let e=ui(n),t=[...Array(256).keys()];for(let l=255;l>0;l--){let c=Math.floor(e()*(l+1));[t[l],t[c]]=[t[c],t[l]]}let i=new Uint8Array(512);for(let l=0;l<512;l++)i[l]=t[l&255];let s=[1,-1,1,-1,1,-1,0,0],r=[1,1,-1,-1,0,0,1,-1],o=.5*(Math.sqrt(3)-1),a=(3-Math.sqrt(3))/6;return function(l,c){let h=0,d=0,f=0,p=(l+c)*o,g=Math.floor(l+p),x=Math.floor(c+p),v=(g+x)*a,m=l-(g-v),_=c-(x-v),E=m>_?1:0,M=m>_?0:1,D=m-E+a,A=_-M+a,P=m-1+2*a,I=_-1+2*a,S=g&255,b=x&255,U=.5-m*m-_*_;if(U>0){let G=i[S+i[b]]&7;U*=U,h=U*U*(s[G]*m+r[G]*_)}let O=.5-D*D-A*A;if(O>0){let G=i[S+E+i[b+M]]&7;O*=O,d=O*O*(s[G]*D+r[G]*A)}let F=.5-P*P-I*I;if(F>0){let G=i[S+1+i[b+1]]&7;F*=F,f=F*F*(s[G]*P+r[G]*I)}return 70*(h+d+f)}}function np(n,e,t,i=4,s=2,r=.5){let o=1,a=1,l=0,c=0;for(let h=0;h<i;h++)l+=o*n(e*a,t*a),c+=o,o*=r,a*=s;return l/c}var Vi=(n,e,t)=>n<e?e:n>t?t:n,Ht=(n,e,t)=>n+(e-n)*t,Hn=(n,e,t)=>{let i=Vi((t-n)/(e-n),0,1);return i*i*(3-2*i)};var ut=512;function Cs(){let n=document.createElement("canvas");return n.width=n.height=ut,n}function Ps(n,e,t=1){let i=new qt(n);return i.wrapS=i.wrapT=$n,i.repeat.set(t,t),i.anisotropy=4,e&&(i.colorSpace=bt),i}function fr(n,e,t,i,s,r,o,a){for(let l=0;l<t;l++){n.fillStyle=`rgba(${i},${s+e()*(r-s)})`;let c=o+e()*(a-o);n.fillRect(e()*ut,e()*ut,c,c)}}function bl(n=1,e=4){let t=ui(n),i=Cs(),s=i.getContext("2d"),r=Cs(),o=r.getContext("2d"),a=Cs(),l=a.getContext("2d");s.fillStyle="#f2f0ec",s.fillRect(0,0,ut,ut),o.fillStyle="#8c8c8c",o.fillRect(0,0,ut,ut),l.fillStyle="#808080",l.fillRect(0,0,ut,ut);let c=ut/e;for(let d=0;d<e;d++)for(let f=0;f<e;f++){let p=236+Math.floor(t()*18);s.fillStyle=`rgb(${p},${p-2},${p-5})`,s.fillRect(d*c,f*c,c,c);let g=120+Math.floor(t()*40);if(o.fillStyle=`rgb(${g},${g},${g})`,o.fillRect(d*c,f*c,c,c),t()<.35){let x=c*(.25+t()*.3),v=c*(.2+t()*.25),m=d*c+c*.2+t()*c*.3,_=f*c+c*.2+t()*c*.3;l.strokeStyle="#4a4a4a",l.lineWidth=2,l.strokeRect(m,_,x,v),s.strokeStyle="rgba(80,76,70,.35)",s.lineWidth=1.5,s.strokeRect(m,_,x,v)}}for(let d=0;d<=e;d++){let f=d*c;for(let[p,g,x]of[[s,"rgba(70,64,58,.55)",2.5],[l,"#303030",4],[o,"#d0d0d0",3]])p.fillStyle=g,p.fillRect(f-x/2,0,x,ut),p.fillRect(0,f-x/2,ut,x)}for(let d=0;d<e;d++)for(let f=0;f<e;f++)for(let[p,g]of[[.08,.08],[.92,.08],[.08,.92],[.92,.92]]){let x=(d+p)*c,v=(f+g)*c;l.fillStyle="#c8c8c8",l.beginPath(),l.arc(x,v,3,0,7),l.fill(),s.fillStyle="rgba(90,86,80,.5)",s.beginPath(),s.arc(x,v,2.2,0,7),s.fill()}for(let d=0;d<70;d++){let f=t()*ut,p=30+t()*160,g=t()*ut,x=s.createLinearGradient(0,g,0,g+p);x.addColorStop(0,"rgba(150,90,60,0)"),x.addColorStop(.3,`rgba(150,90,60,${.05+t()*.08})`),x.addColorStop(1,"rgba(150,90,60,0)"),s.fillStyle=x,s.fillRect(f,g,1+t()*3,p)}let h=s.createLinearGradient(0,ut*.75,0,ut);h.addColorStop(0,"rgba(170,100,60,0)"),h.addColorStop(1,"rgba(170,100,60,.22)"),s.fillStyle=h,s.fillRect(0,0,ut,ut),fr(s,t,2500,"120,80,60",.03,.12,1,3),fr(o,t,1800,"255,255,255",.05,.2,1,4),s.strokeStyle="rgba(255,255,255,.25)",o.strokeStyle="rgba(40,40,40,.4)";for(let d=0;d<40;d++){let f=t()*ut,p=t()*ut,g=(t()-.5)*40,x=(t()-.5)*12;for(let v of[s,o])v.lineWidth=.8,v.beginPath(),v.moveTo(f,p),v.lineTo(f+g,p+x),v.stroke()}return{map:Ps(i,!0),roughnessMap:Ps(r,!1),bumpMap:Ps(a,!1)}}function Hg(n=7){let e=ui(n),t=Cs(),i=t.getContext("2d"),s=Cs(),r=s.getContext("2d");i.fillStyle="#e6e6e6",i.fillRect(0,0,ut,ut),r.fillStyle="#6a6a6a",r.fillRect(0,0,ut,ut);for(let o=0;o<ut;o++){let a=210+Math.floor(e()*45);i.fillStyle=`rgba(${a},${a},${a},.5)`,i.fillRect(0,o,ut,1);let l=80+Math.floor(e()*60);r.fillStyle=`rgba(${l},${l},${l},.5)`,r.fillRect(0,o,ut,1)}return fr(i,e,800,"60,50,40",.05,.15,1,3),{map:Ps(t,!0),roughnessMap:Ps(s,!1)}}function kg(n=3){let e=ui(n),t=Cs(),i=t.getContext("2d"),s=Cs(),r=s.getContext("2d");i.fillStyle="#d8d2c8",i.fillRect(0,0,ut,ut),r.fillStyle="#808080",r.fillRect(0,0,ut,ut),fr(i,e,9e3,"90,80,70",.04,.16,1,4),fr(i,e,3e3,"255,250,240",.04,.12,1,3),fr(r,e,6e3,"40,40,40",.1,.4,1,3);for(let a=0;a<6;a++){i.strokeStyle="rgba(70,60,50,.25)",i.lineWidth=1,i.beginPath();let l=e()*ut,c=e()*ut;i.moveTo(l,c);for(let h=0;h<12;h++)l+=(e()-.5)*50,c+=(e()-.5)*50,i.lineTo(l,c);i.stroke()}let o=i.createLinearGradient(0,0,0,ut);return o.addColorStop(0,"rgba(170,100,60,0)"),o.addColorStop(1,"rgba(170,100,60,.3)"),i.fillStyle=o,i.fillRect(0,0,ut,ut),{map:Ps(t,!0,1),bumpMap:Ps(s,!1,1)}}function zg(n=11){let e=ui(n),t=Cs(),i=t.getContext("2d"),s=Cs(),r=s.getContext("2d");i.fillStyle="#d0c4bc",i.fillRect(0,0,ut,ut),r.fillStyle="#808080",r.fillRect(0,0,ut,ut);for(let o=0;o<300;o++){let a=e()*ut,l=e()*ut,c=6+e()*40,h=Math.floor(150+e()*90);i.fillStyle=`rgba(${h},${h-15},${h-25},.25)`,i.beginPath(),i.ellipse(a,l,c,c*(.4+e()*.6),e()*3,0,7),i.fill(),r.fillStyle=`rgba(${h},${h},${h},.25)`,r.beginPath(),r.ellipse(a,l,c,c*.6,e()*3,0,7),r.fill()}return fr(i,e,8e3,"60,40,30",.05,.2,1,3),fr(r,e,8e3,"20,20,20",.1,.5,1,2),{map:Ps(t,!0,1),bumpMap:Ps(s,!1,1)}}var y={white:new ge({color:15328474,roughness:.55,metalness:.1}),panel:new ge({color:13222840,roughness:.6,metalness:.2}),metal:new ge({color:8159110,roughness:.4,metalness:.7}),dark:new ge({color:2895670,roughness:.5,metalness:.5}),orange:new ge({color:16742954,roughness:.5,metalness:.1}),glass:new ge({color:10474751,roughness:.05,metalness:.3,transparent:!0,opacity:.35}),window:new ge({color:2240576,emissive:16761466,emissiveIntensity:0,roughness:.2}),solar:new ge({color:1780826,roughness:.25,metalness:.8}),plant:new ge({color:5221962,roughness:.8,flatShading:!0}),cyan:new ge({color:1127236,emissive:3401471,emissiveIntensity:2}),red:new ge({color:3342336,emissive:16722474,emissiveIntensity:3}),lamp:new ge({color:3351057,emissive:16767392,emissiveIntensity:0}),found:new ge({color:9143160,roughness:.9}),flame:new Ne({color:16756832,transparent:!0,opacity:.85,blending:ke,depthWrite:!1})};{let n=bl(1,4),e=bl(5,3),t=Hg(),i=kg(),s=bl(9,2);Object.assign(y.white,{...n,bumpScale:1.4,roughness:.75,metalness:.15,color:new ce(15920612)}),Object.assign(y.panel,{...e,bumpScale:1.2,roughness:.8,metalness:.25,color:new ce(13617340)}),Object.assign(y.metal,{...t,roughness:1,metalness:.85,color:new ce(10132900)}),Object.assign(y.dark,{...s,bumpScale:1,roughness:.7,metalness:.6,color:new ce(3816772)}),Object.assign(y.orange,{...bl(3,2),bumpScale:.8,roughness:.7,metalness:.15}),Object.assign(y.found,{...i,bumpScale:2,roughness:.95,color:new ce(10853004)}),y.glass.roughness=.02,y.glass.metalness=.1,y.glass.opacity=.28,y.glass.envMapIntensity=2.2,y.solar.roughness=.12,y.solar.envMapIntensity=1.8;for(let r in y)y[r].needsUpdate=!0}var ts=zg();{let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d");e.fillStyle="#1d3266",e.fillRect(0,0,64,64),e.strokeStyle="#9fb4e0",e.lineWidth=1.5;for(let i=0;i<=64;i+=16)e.beginPath(),e.moveTo(i,0),e.lineTo(i,64),e.stroke(),e.beginPath(),e.moveTo(0,i),e.lineTo(64,i),e.stroke();let t=new qt(n);t.colorSpace=bt,t.wrapS=t.wrapT=$n,t.repeat.set(3,2),y.solar.map=t,y.solar.color.set(16777215)}function Z(n,e,t=0,i=0,s=0,r){let o=new se(n,e);return o.position.set(t,i,s),o.castShadow=!0,o.receiveShadow=!0,r&&r.add(o),o}var ct=(n,e,t)=>new Ye(n,e,t),rt=(n,e,t,i=16)=>new Oe(n,e,t,i),wh;function zn(){if(wh)return wh;let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.6)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),wh=new qt(n),wh}function _e(n,e,t,i=0,s=0,r=0){let o=new xi(new li({map:zn(),color:n,transparent:!0,blending:ke,depthWrite:!1}));return o.scale.set(e,e,1),o.position.set(i,s,r),t&&t.add(o),o}function kn(n,e,t=!1){let i=Z(t?ct(e*2,4,e*2):rt(e,e*1.05,4,20),y.found,0,-1.8,0,n);i.castShadow=!1,i.userData.found=!0}var Zn={solar(n,e){kn(n,2.2,!0),Z(rt(.18,.25,2.2),y.metal,0,1.1,0,n);let t=new ue;t.position.y=2.3,n.add(t);let i=Z(ct(4.2,.12,2.8),y.solar,0,0,0,t);Z(ct(4.4,.08,.1),y.metal,0,-.05,1.42,t),Z(ct(4.4,.08,.1),y.metal,0,-.05,-1.42,t),e.pivot=t,e.panel=i},oxygen(n,e){kn(n,3),Z(rt(1,1,3.6),y.white,-1.3,1.8,0,n),Z(new Ge(1,16,8,0,Math.PI*2,0,Math.PI/2),y.white,-1.3,3.6,0,n),Z(rt(1,1,3.6),y.white,1.3,1.8,0,n),Z(new Ge(1,16,8,0,Math.PI*2,0,Math.PI/2),y.white,1.3,3.6,0,n),Z(rt(1.02,1.02,.3),y.orange,-1.3,2.4,0,n),Z(rt(1.02,1.02,.3),y.orange,1.3,2.4,0,n),Z(ct(1.4,1.6,1.8),y.panel,0,.8,1,n),Z(rt(.12,.12,2.6),y.metal,0,3.2,0,n).rotation.z=Math.PI/2;let t=new ue;t.position.set(0,1.75,1.95),n.add(t);for(let i=0;i<4;i++){let s=Z(ct(.15,.7,.05),y.dark,0,0,0,t);s.rotation.z=i*Math.PI/2,s.position.set(Math.sin(i*Math.PI/2)*.3,Math.cos(i*Math.PI/2)*.3,0),s.rotation.z=-i*Math.PI/2}e.fan=t,e.light=_e(6741503,1.2,n,0,1.75,2)},habitat(n,e){kn(n,6.2),Z(rt(6,6,1.2,28),y.panel,0,.6,0,n);let t=Z(new Ge(5.8,28,12,0,Math.PI*2,0,Math.PI/2),y.white,0,1.2,0,n);t.scale.y=.85;let i=Z(new Oe(5.72,5.84,.7,28,1,!0),y.window,0,2,0,n);Z(rt(.1,.1,3),y.metal,0,7.4,0,n),e.tip=_e(16728128,1.2,n,0,8.9,0),Z(ct(2.2,2.6,2.8),y.white,0,1.3,6.4,n),Z(ct(1.2,2,.1),y.dark,0,1.1,7.82,n),Z(ct(2.3,.3,2.9),y.orange,0,2.7,6.4,n),e.windows=[i]},extractor(n,e){kn(n,2.6,!0),Z(ct(4,.6,4),y.panel,0,.3,0,n);for(let[i,s]of[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4]])Z(rt(.12,.15,6),y.metal,i*.7,3.3,s*.7,n).rotation.set(s*.08,0,-i*.08);Z(ct(1.6,.4,1.6),y.orange,0,6.2,0,n);let t=Z(rt(.3,.3,4.5),y.metal,0,3,0,n);Z(rt(.9,.9,1.6),y.white,1.7,1.4,1.2,n),e.drill=t,e.light=_e(10476799,1.2,n,1.7,2.5,1.2)},greenhouse(n,e){kn(n,5,!0),Z(ct(10,.5,6),y.panel,0,.25,0,n);let t=Z(new Oe(3,3,10,20,1,!1,0,Math.PI),y.glass,0,.5,0,n);t.rotation.set(0,0,Math.PI/2),t.castShadow=!1;for(let i=0;i<5;i++)Z(new De(3,.08,6,20,Math.PI),y.white,-4.5+i*2.25,.5,0,n).rotation.y=Math.PI/2;for(let i=0;i<14;i++){let s=-4.2+i%7*1.4,r=i<7?-1.2:1.2,o=Z(new Yt(.45,1.2+i%3*.3,6),y.plant,s,1.2,r,n);o.castShadow=!1}Z(ct(9.6,.3,.5),y.dark,0,.7,-1.2,n),Z(ct(9.6,.3,.5),y.dark,0,.7,1.2,n),e.light=_e(16737996,4,n,0,2.5,0)},fabricator(n,e){kn(n,4,!0),Z(ct(7,3.6,5),y.panel,0,1.8,0,n),Z(ct(7.1,.4,5.1),y.orange,0,3.4,0,n),Z(ct(3,2.6,.1),y.dark,0,1.3,2.52,n);let t=new ue;t.position.set(2.2,3.6,0),n.add(t),Z(rt(.35,.45,.6),y.metal,0,.3,0,t);let i=Z(ct(.3,2.2,.3),y.orange,0,1.4,0,t),s=Z(ct(.25,1.6,.25),y.metal,0,2.4,.6,t);s.rotation.x=.9,e.arm=t,e.spark=_e(16764006,1.2,n,2.2,5.7,1.2),Z(ct(1.2,1.2,1.2),y.dark,-2.4,.6,3.2,n),Z(ct(1,1,1),y.dark,-1.1,.5,3.1,n)},turret(n,e){kn(n,1.8),Z(rt(1.4,1.8,1.2,12),y.metal,0,.6,0,n),Z(rt(.5,.7,1.2,10),y.dark,0,1.8,0,n);let t=new ue;t.position.y=2.7,n.add(t),Z(ct(1.6,1,1.8),y.white,0,0,0,t),Z(ct(1.65,.2,1.85),y.orange,0,.35,0,t),Z(rt(.12,.12,2.2,8),y.dark,-.4,0,-1.6,t).rotation.x=Math.PI/2,Z(rt(.12,.12,2.2,8),y.dark,.4,0,-1.6,t).rotation.x=Math.PI/2,e.eye=_e(3401471,.9,t,0,.1,-.95),e.head=t},reactor(n,e){kn(n,5.2),Z(rt(5,5.2,1.4,24),y.panel,0,.7,0,n);let t=Z(new Ge(2,20,14),y.cyan,0,4.2,0,n);t.castShadow=!1;let i=Z(new De(3.2,.35,10,32),y.white,0,4.2,0,n),s=Z(new De(3.2,.35,10,32),y.white,0,4.2,0,n);s.rotation.x=Math.PI/2;for(let r=0;r<4;r++){let o=r*Math.PI/2;Z(ct(.6,3,.6),y.metal,Math.cos(o)*3.6,2.2,Math.sin(o)*3.6,n)}e.core=t,e.r1=i,e.r2=s,e.light=_e(3401471,9,n,0,4.2,0)},beacon(n,e){let t=Z(rt(7,7.3,.6,8),y.found,0,0,0,n);Z(rt(7.3,7.6,4,8),y.found,0,-2.3,0,n).castShadow=!1,Z(new tn(4.2,4.8,32),y.orange,0,.32,0,n).rotation.x=-Math.PI/2,Z(new tn(1.5,2,4),y.white,0,.32,0,n).rotation.x=-Math.PI/2,e.lights=[];for(let i=0;i<8;i++){let s=i*Math.PI/4+Math.PI/8;e.lights.push(_e(16755251,1.2,n,Math.cos(s)*6.6,.5,Math.sin(s)*6.6))}Z(rt(.18,.3,9,8),y.metal,8.6,4.2,0,n),Z(ct(1.6,.1,1.2),y.white,8.6,8.7,0,n).rotation.z=.4,e.tip=_e(16724016,2,n,8.6,9.2,0),t.castShadow=!1},lamp(n,e){Z(rt(.4,.5,.4,8),y.found,0,0,0,n),Z(rt(.08,.1,4.2,6),y.metal,0,2.1,0,n),Z(ct(.6,.2,.6),y.dark,0,4.3,0,n);let t=Z(new Ge(.2,8,6),y.lamp,0,4.15,0,n);t.castShadow=!1,e.glow=_e(16767392,1.7,n,0,4.1,0)},terraformer(n,e){kn(n,7),Z(rt(7,7.5,2,6),y.panel,0,1,0,n),Z(rt(2.5,4.5,26,6),y.white,0,15,0,n);for(let i=0;i<3;i++)Z(rt(4.6-i*.7,4.6-i*.7,.8,6),y.orange,0,6+i*8,0,n);e.rings=[];for(let i=0;i<3;i++){let s=Z(new De(6-i*1.2,.25,8,40),y.cyan,0,10+i*8,0,n);s.castShadow=!1,e.rings.push(s)}for(let i=0;i<6;i++){let s=i*Math.PI/3,r=Z(ct(1.2,10,1.2),y.metal,Math.cos(s)*6,5,Math.sin(s)*6,n);r.rotation.y=-s}let t=Z(new Oe(.6,1.4,400,12,1,!0),new Ne({color:6743807,transparent:!0,opacity:0,blending:ke,depthWrite:!1,side:Rt}),0,228,0,n);t.castShadow=!1,t.receiveShadow=!1,e.beam=t,e.top=_e(6743807,10,n,0,28,0)}};var Og=[16751162,3850495,8257418,16740277,16769354].map(n=>new ge({color:1118481,emissive:n,emissiveIntensity:.6,roughness:.1,metalness:.6})),Fg=[15525596,14278116,15259332].map(n=>new ge({color:n,roughness:.7}));function Gg(n){let e=new ue,t=Fg[n%Fg.length],i=Og[n%Og.length],s=(g,x,v,m,_,E=e)=>{let M=new se(g,x);return M.position.set(v,m,_),M.castShadow=!0,E.add(M),M},r=new As([[0,0],[.2,0],[.24,.12],[.27,.42],[.25,.55],[.12,.62],[0,.62]].map(([g,x])=>new te(g,x)),12),o=s(r,t,0,.72,0);o.scale.z=.8,s(new De(.2,.04,6,16),y.orange,0,.77,0).rotation.x=Math.PI/2,s(new Oe(.16,.18,.06,12),y.dark,0,1.36,0);let a=s(new Ge(.21,16,12),t,0,1.58,0),l=s(new Ge(.19,16,10,Math.PI*.12,Math.PI*.76,Math.PI*.28,Math.PI*.4),i,0,1.58,.035);s(new Ye(.02,.12,.02),y.metal,.12,1.82,-.05).rotation.z=-.3,s(new Ye(.36,.42,.18),y.panel,0,1.08,-.24),s(new Ye(.3,.06,.19),y.orange,0,1.25,-.24),_e(9306032,.25,e,.12,.96,-.34);let c=(g,x,v,m,_)=>{let E=new ue;E.position.set(g,x,0),e.add(E);let M=s(new sh(m,v,4,8),t,0,-v/2-m,0,E);return s(new Oe(m*1.15,m*1.15,.05,8),_?y.orange:y.dark,0,-v*.45,0,E),_?s(new Ye(m*2.4,.1,m*3.4),y.dark,0,-v-m*1.6,.04,E):s(new Ge(m*1.2,8,6),y.dark,0,-v-m*1.6,0,E),E},h=c(-.11,.74,.5,.075,!0),d=c(.11,.74,.5,.075,!0),f=c(-.33,1.27,.42,.06,!1),p=c(.33,1.27,.42,.06,!1);return f.rotation.z=-.12,p.rotation.z=.12,{group:e,legL:h,legR:d,armL:f,armR:p,body:o,head:a,visor:l}}var iR=new ge({color:Me.enemy[0],roughness:.3,metalness:.6,flatShading:!0,emissive:1049856}),uw=new ge({color:Me.enemy[1],emissive:Me.enemy[2],emissiveIntensity:.8,roughness:.2,flatShading:!0}),dw=new Ne({color:16764992});function fw(n,e,t){let i=document.createElement("canvas");i.width=128,i.height=256;let s=i.getContext("2d");s.fillStyle="#000",s.fillRect(0,0,128,256);let r=t,o=()=>(r=(r*9301+49297)%233280,r/233280),a=128/n,l=256/e;for(let h=0;h<n;h++)for(let d=0;d<e;d++)o()<.65&&(s.fillStyle=o()<.8?"#ffd9a0":"#a0d8ff",s.fillRect(h*a+a*.2,d*l+l*.25,a*.6,l*.5));let c=new qt(i);return c.colorSpace=bt,c}var Sl=[];function Bg(n){let e=new ge({color:14210252,roughness:.5,metalness:.2,emissive:16777215,emissiveMap:fw(6,14,n),emissiveIntensity:.2});return Sl.push(e),e}var Vg=[Bg(7),Bg(31)],wl;function Wg(){if(wl)return wl;let n=document.createElement("canvas");n.width=256,n.height=128;let e=n.getContext("2d");e.fillStyle="#0a3a6a",e.fillRect(0,0,256,128),e.strokeStyle="rgba(127,230,255,.35)",e.lineWidth=1;for(let i=0;i<256;i+=16)e.beginPath(),e.moveTo(i,0),e.lineTo(i,128),e.stroke();for(let i=0;i<128;i+=16)e.beginPath(),e.moveTo(0,i),e.lineTo(256,i),e.stroke();e.fillStyle="#7fffc8";let t=[[40,40,22,16],[52,62,10,20],[70,86,12,18],[118,36,16,12],[128,56,14,26],[150,34,40,18],[176,52,22,14],[206,88,16,10],[96,24,12,8],[190,22,20,8]];for(let[i,s,r,o]of t)e.beginPath(),e.ellipse(i,s,r,o,.3,0,Math.PI*2),e.fill();return e.fillStyle="#ffffff",e.fillRect(0,0,256,6),e.fillRect(0,122,256,6),wl=new qt(n),wl.colorSpace=bt,wl}Object.assign(Zn,{plaza(n,e){kn(n,7.2),Z(rt(7.2,7.4,.4,8),y.panel,0,.2,0,n),Z(new tn(5.4,5.8,48),y.orange,0,.42,0,n).rotation.x=-Math.PI/2,Z(rt(1.6,2,1.1,16),y.white,0,.95,0,n),Z(rt(1.65,1.65,.15,16),y.cyan,0,1.52,0,n);for(let r=0;r<6;r++){let o=r*Math.PI/3+Math.PI/6,a=Z(ct(2.4,.4,.7),y.panel,Math.cos(o)*5.2,.6,Math.sin(o)*5.2,n);a.rotation.y=-o+Math.PI/2,Z(ct(.12,3.2,.12),y.metal,Math.cos(o+.5)*6.6,1.8,Math.sin(o+.5)*6.6,n),_e(16767392,1.1,n,Math.cos(o+.5)*6.6,3.5,Math.sin(o+.5)*6.6)}let t=new se(new Ge(1.5,32,20),new Ne({map:Wg(),transparent:!0,opacity:.75,blending:ke,depthWrite:!1}));t.position.y=4,n.add(t);let i=_e(6736127,5,n,0,4,0),s=new se(new Oe(1.2,1.6,2.4,20,1,!0),new Ne({color:8382207,transparent:!0,opacity:.12,blending:ke,depthWrite:!1,side:Rt}));s.position.y=2.7,n.add(s),e.earth=t,e.halo=i},drones(n,e){kn(n,3.8,!0),Z(ct(7.4,.5,7.4),y.panel,0,.25,0,n);for(let[s,r]of[[-1.9,-1.9],[1.9,-1.9],[-1.9,1.9],[1.9,1.9]])Z(rt(1.1,1.1,.1,16),y.dark,s,.55,r,n),Z(new tn(.75,.9,20),y.orange,s,.62,r,n).rotation.x=-Math.PI/2;Z(ct(1.2,4,1.2),y.white,3,2.2,3,n),Z(ct(1.25,.3,1.25),y.orange,3,3.6,3,n);let t=new ue;t.position.set(3,4.6,3),n.add(t);let i=Z(new Ge(.9,12,6,0,Math.PI*2,0,Math.PI/3),y.white,0,0,0,t);i.rotation.x=Math.PI*.6,Z(rt(.05,.05,.8,4),y.metal,0,.1,.2,t).rotation.x=1.1,e.dish=t,e.light=_e(8382207,1.4,n,3,5.4,3)},apartment(n,e){kn(n,4.4,!0),Z(ct(8,1,8),y.panel,0,.5,0,n),Z(ct(5,18,5),Vg[0],-1.2,10,-1.2,n),Z(ct(4,12,4),Vg[1],2,7,2,n),Z(ct(5.2,.5,5.2),y.orange,-1.2,19.2,-1.2,n),Z(ct(4.2,.5,4.2),y.orange,2,13.2,2,n),Z(rt(.1,.1,4,6),y.metal,-1.2,21.4,-1.2,n),e.tip=_e(16728128,1.6,n,-1.2,23.5,-1.2),Z(new Ge(1.6,16,8,0,Math.PI*2,0,Math.PI/2),y.glass,2,13.4,2,n).castShadow=!1},vfarm(n,e){kn(n,4),Z(rt(3.8,4,1,16),y.panel,0,.5,0,n);let t=Z(rt(3.2,3.2,14,16),y.glass,0,8,0,n);t.castShadow=!1;for(let i=0;i<6;i++){Z(rt(3,3,.25,16),y.white,0,2+i*2.3,0,n);for(let s=0;s<7;s++){let r=s/7*Math.PI*2+i,o=Z(new Yt(.4,.9,5),y.plant,Math.cos(r)*2.2,2.6+i*2.3,Math.sin(r)*2.2,n);o.castShadow=!1}}Z(new Ge(3.2,16,8,0,Math.PI*2,0,Math.PI/2),y.glass,0,15,0,n).castShadow=!1,e.light=_e(16737996,9,n,0,8,0)},lifehub(n,e){kn(n,5.5),Z(rt(5.5,5.8,1.2,20),y.panel,0,.6,0,n);let t=Z(new Ge(4.5,20,12,0,Math.PI*2,0,Math.PI/2),y.white,0,1.2,0,n);Z(new De(4.6,.3,8,32),y.orange,0,1.6,0,n).rotation.x=Math.PI/2;for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4;Z(rt(.9,.9,5,12),y.white,Math.cos(r)*5.2,2.5,Math.sin(r)*5.2,n),Z(rt(.95,.95,.4,12),y.cyan,Math.cos(r)*5.2,4.2,Math.sin(r)*5.2,n)}let i=new ue;i.position.y=6,n.add(i);for(let s=0;s<3;s++){let r=Z(ct(4,.1,.6),y.dark,0,0,0,i);r.rotation.y=s*Math.PI/3}e.fan=i,e.light=_e(6741503,5,n,0,6,0)},launch(n,e){kn(n,9,!0),Z(ct(18,1.2,18),y.found,0,.6,0,n),Z(new tn(5,6,32),y.orange,0,1.25,0,n).rotation.x=-Math.PI/2;for(let[s,r]of[[6,-1.5],[6,1.5],[9,-1.5],[9,1.5]])Z(ct(.4,34,.4),y.metal,s,18,r,n);for(let s=0;s<8;s++)Z(ct(3.4,.25,3.4),y.metal,7.5,4+s*4,0,n);Z(ct(4,.5,.8),y.orange,4.2,26,0,n);let t=new ue;t.position.y=1.2,n.add(t),Z(rt(2.4,2.8,24,20),y.white,0,13,0,t),Z(new Yt(2.4,7,20),y.white,0,28.5,0,t),Z(rt(2.45,2.45,1.2,20),y.orange,0,20,0,t),Z(rt(2.45,2.45,.6,20),y.dark,0,8,0,t);for(let s=0;s<4;s++){let r=s*Math.PI/2,o=Z(ct(.4,6,3),y.panel,Math.cos(r)*2.8,3.5,Math.sin(r)*2.8,t);o.rotation.y=-r}for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4;Z(rt(.8,1.2,2,10),y.dark,Math.cos(r)*1.2,.6,Math.sin(r)*1.2,t)}let i=new se(new Yt(3,16,16,1,!0),y.flame);i.rotation.x=Math.PI,i.position.y=-8,i.visible=!1,t.add(i),e.ship=t,e.flame=i,e.tip=_e(16777215,3,t,0,32.5,0)},monument(n,e){kn(n,6),Z(rt(6,6.5,1.5,8),y.panel,0,.75,0,n),Z(rt(4.5,5,1,8),y.white,0,2,0,n);let t=Z(new Oe(.6,1.8,30,4),y.white,0,17,0,n);t.rotation.y=Math.PI/4,e.rings=[];let i=[new ge({color:3346688,emissive:16742954,emissiveIntensity:2}),new ge({color:8755,emissive:6743807,emissiveIntensity:2}),new ge({color:1127168,emissive:10551104,emissiveIntensity:2})];for(let s=0;s<3;s++){let r=Z(new De(4-s*.6,.18,8,40),i[s],0,14+s*5,0,n);r.castShadow=!1,e.rings.push(r)}e.top=_e(16777215,8,n,0,33,0)}});function $g(){let n=new ue,e=Z(new Ge(.42,14,8),y.white,0,0,0,n);e.scale.y=.55,Z(rt(.44,.44,.08,14),y.orange,0,0,0,n);let t=[];for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4,o=Math.cos(r)*.7,a=Math.sin(r)*.7;Z(ct(.6,.05,.08),y.dark,o*.55,0,a*.55,n).rotation.y=-r;let l=Z(rt(.28,.28,.02,10),new Ne({color:2236962,transparent:!0,opacity:.45}),o,.08,a,n);t.push(l)}let i=_e(8382207,.9,n,0,-.2,0);return{group:n,rotors:t,eye:i}}var ip={crystal:uw,eye:dw};Zn._earthTex=Wg;var Tl=class n extends se{constructor(){super(n.Geometry,new Ne({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;let e=new w,t=new w,i=new dl(16,16),s=new dl(16,16),r=Jn,o=n.Geometry,a=new cr({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),l=new cr({uniforms:{map:{value:i},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),c=new se(o,a),h=[],d=oa.Shader,f=new cr({name:d.name,uniforms:{map:{value:null},occlusionMap:{value:s},color:{value:new ce(16777215)},scale:{value:new te},screenPosition:{value:new w}},vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:ke,transparent:!0,depthWrite:!1}),p=new se(o,f);this.addElement=function(_){h.push(_)};let g=new te,x=new te,v=new ch,m=new Vt;this.onBeforeRender=function(_,E,M){_.getCurrentViewport(m);let D=_.getRenderTarget(),A=D!==null?D.texture.type:Jn;r!==A&&(i.dispose(),s.dispose(),i.type=s.type=A,r=A);let P=m.w/m.z,I=m.z/2,S=m.w/2,b=16/m.w;if(g.set(b*P,b),v.min.set(m.x,m.y),v.max.set(m.x+(m.z-16),m.y+(m.w-16)),t.setFromMatrixPosition(this.matrixWorld),t.applyMatrix4(M.matrixWorldInverse),!(t.z>0)&&(e.copy(t).applyMatrix4(M.projectionMatrix),x.x=m.x+e.x*I+I-8,x.y=m.y+e.y*S+S-8,v.containsPoint(x))){_.copyFramebufferToTexture(i,x);let U=a.uniforms;U.scale.value=g,U.screenPosition.value=e,_.renderBufferDirect(M,null,o,a,c,null),_.copyFramebufferToTexture(s,x),U=l.uniforms,U.scale.value=g,U.screenPosition.value=e,_.renderBufferDirect(M,null,o,l,c,null);let O=-e.x*2,F=-e.y*2;for(let G=0,Q=h.length;G<Q;G++){let $=h[G],re=f.uniforms;re.color.value.copy($.color),re.map.value=$.texture,re.screenPosition.value.x=e.x+O*$.distance,re.screenPosition.value.y=e.y+F*$.distance,b=$.size/m.w;let X=m.w/m.z;re.scale.value.set(b*X,b),f.uniformsNeedUpdate=!0,_.renderBufferDirect(M,null,o,f,p,null)}}},this.dispose=function(){a.dispose(),l.dispose(),f.dispose(),i.dispose(),s.dispose();for(let _=0,E=h.length;_<E;_++)h[_].texture.dispose()}}},oa=class{constructor(e,t=1,i=0,s=new ce(16777215)){this.texture=e,this.size=t,this.distance=i,this.color=s}};oa.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

		}`};Tl.Geometry=function(){let n=new At,e=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),t=new ul(e,5);return n.setIndex([0,1,2,0,2,3]),n.setAttribute("position",new Gr(t,3,0,!1)),n.setAttribute("uv",new Gr(t,2,3,!1)),n}();var pw=540,Al,aa,Ei,la,sp,Cl,rp,gr,Il=(n,e,t)=>new ce().setRGB(n,e,t,bt),pr=Me.sky,mr=n=>Il(n[0],n[1],n[2]),ns={dayTop:mr(pr.dayTop),dayHor:mr(pr.dayHor),setTop:mr(pr.setTop),setHor:mr(pr.setHor),nightTop:mr(pr.nightTop),nightHor:mr(pr.nightHor),earthTop:Il(.22,.44,.82),earthHor:Il(.68,.8,.92),stormHor:mr(pr.storm),halo:mr(pr.halo)},Rn={},Pl,Zg=[];function mw(n){let t=document.createElement("canvas");t.width=t.height=256;let i=t.getContext("2d");if(n==="streak"){let s=i.createLinearGradient(0,0,256,0);s.addColorStop(0,"rgba(255,255,255,0)"),s.addColorStop(.5,"rgba(255,255,255,1)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,256/2-2,256,4);let r=i.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);r.addColorStop(0,"rgba(255,255,255,.35)"),r.addColorStop(1,"rgba(255,255,255,0)"),i.globalCompositeOperation="destination-in",i.fillStyle=r,i.fillRect(0,0,256,256)}else if(n==="ring"){let s=i.createRadialGradient(128,128,92.16,128,128,128);s.addColorStop(0,"rgba(255,255,255,0)"),s.addColorStop(.7,"rgba(255,255,255,.35)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,256,256)}else if(n==="hex"){i.fillStyle="rgba(255,255,255,.22)",i.beginPath();for(let s=0;s<6;s++){let r=s*Math.PI/3;i[s?"lineTo":"moveTo"](256/2+Math.cos(r)*256*.45,256/2+Math.sin(r)*256*.45)}i.fill()}else{let s=i.createRadialGradient(128,128,0,128,128,128);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.15,"rgba(255,240,220,.6)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,256,256)}return new qt(t)}function gw(n){Pl=new fn,n.add(Pl);let e=new Tl,t=(i,s,r,o)=>{let a=new oa(mw(i),s,r,new ce(o));a.base=new ce(o),e.addElement(a),Zg.push(a)};t("glow",380,0,16771276),t("streak",1600,0,10148095),t("streak",900,0,16765088),t("hex",70,.35,7317759),t("ring",140,.55,16756848),t("hex",110,.75,8847304),t("glow",60,.9,16751200),t("ring",260,1.15,6982911),Pl.add(e)}var op,Xg,Kg,Sh=null,qg=0,ap={mars:[.35,[.2,.9,.7],[.3,.5,1]],europa:[.6,[.4,.6,1],[.8,.4,1]],kepler:[1,[.3,1,.5],[.9,.3,.9]]}[Me.id],Is;function vw(n){let e=new Oe(1700,1700,900,160,1,!0,-1.2,2.6);Is=new se(e,new Pt({uniforms:{uT:{value:0},uI:{value:0},uC1:{value:new ce(...ap[1])},uC2:{value:new ce(...ap[2])}},vertexShader:`uniform float uT; varying vec2 vUv;
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
      }`,transparent:!0,blending:ke,depthWrite:!1,side:Rt,fog:!1})),Is.position.y=700,Is.rotation.y=2.2,Is.frustumCulled=!1,Is.renderOrder=-8,n.add(Is)}var xw=Il(.36,.42,.62),yw=Il(.75,.65,.55),Rl=new ce,Yg=new ce,An=new w;function Jg(n){gr=new Pt({uniforms:{uTop:{value:new ce},uHor:{value:new ce},uSunDir:{value:new w(0,1,0)},uSunCol:{value:new ce(1,.95,.85)},uHalo:{value:new ce},uSunVis:{value:1}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`
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
      }`,side:Dn,depthWrite:!1}),Al=new se(new Ge(4e3,32,16),gr),Al.frustumCulled=!1,Al.renderOrder=-10,n.add(Al),vw(n);let e=new At,t=[],i=[];for(let o=0;o<2600;o++){let a=Math.random()*2-1,l=Math.random()*Math.PI*2,c=Math.sqrt(1-a*a);if(a<-.05)continue;t.push(c*Math.cos(l)*3500,a*3500,c*Math.sin(l)*3500);let h=.35+Math.random()*.45,d=Math.random();i.push(h*(d>.8?1:.85),h*.9,h*(d<.2?1:.95))}t.push(-1800,1500,-2400),i.push(.5,.75,1.4),e.setAttribute("position",new at(t,3)),e.setAttribute("color",new at(i,3)),aa=new yi(e,new ci({size:3,map:zn(),sizeAttenuation:!1,vertexColors:!0,transparent:!0,depthWrite:!1,fog:!1})),aa.frustumCulled=!1,aa.renderOrder=-9,n.add(aa);let s=new ge({color:9076080,roughness:1,fog:!1,flatShading:!0});if(Cl=new se(new qn(60,1),s),Cl.scale.set(1.3,.9,1),rp=new se(new qn(24,1),s),Me.extras==="moons"&&n.add(Cl,rp),Me.extras==="jupiter"){let o=document.createElement("canvas");o.width=512,o.height=256;let a=o.getContext("2d"),l=["#e8d8c0","#c89a70","#f0e6d4","#b07850","#e0c8a8","#9a6a48","#efe2cc","#c8a07a","#e6d6bc"];for(let p=0;p<256;p++)a.fillStyle=l[Math.floor(p/256*l.length*2+Math.sin(p*.3)*.6)%l.length],a.fillRect(0,p,512,1);a.globalAlpha=.25;for(let p=0;p<400;p++)a.fillStyle=l[p%l.length],a.fillRect(Math.random()*512,Math.random()*256,30+Math.random()*80,2);a.globalAlpha=1,a.fillStyle="#b8583a",a.beginPath(),a.ellipse(330,165,34,16,0,0,Math.PI*2),a.fill();let c=new qt(o);c.colorSpace=bt;let h=new se(new Ge(900,48,32),new Ne({map:c,fog:!1}));h.rotation.z=.06;let d=new se(new Ge(905,48,32,Math.PI*.55,Math.PI),new Ne({color:0,transparent:!0,opacity:.55,fog:!1}));h.add(d);let f=new se(new qn(30,2),new Ne({color:15257712,fog:!1}));n.add(h,f),Rn={jup:h,io:f}}if(Me.extras==="twinsuns"){let o=new xi(new li({map:zn(),color:16751200,transparent:!0,blending:ke,depthWrite:!1,fog:!1}));o.scale.set(500,500,1);let a=new se(new tn(700,1100,64),new Ne({color:14207231,transparent:!0,opacity:.35,side:Rt,fog:!1,depthWrite:!1})),l=new se(new Ge(420,32,24),new Ne({color:9075408,fog:!1}));l.add(a),a.rotation.x=1.2,n.add(o,l),Rn={s2:o,gas:l};let c=document.createElement("canvas");c.width=c.height=512;let h=c.getContext("2d"),d=h.createRadialGradient(256,256,120,256,256,256);d.addColorStop(0,"rgba(255,250,230,0)"),d.addColorStop(.08,"rgba(255,245,220,1)"),d.addColorStop(.3,"rgba(255,190,110,.85)"),d.addColorStop(.7,"rgba(200,90,40,.35)"),d.addColorStop(1,"rgba(120,40,20,0)"),h.fillStyle=d,h.fillRect(0,0,512,512),h.globalCompositeOperation="destination-out";for(let E=0;E<40;E++)h.strokeStyle=`rgba(0,0,0,${.1+Math.random()*.2})`,h.lineWidth=1+Math.random()*3,h.beginPath(),h.arc(256,256,130+Math.random()*120,0,Math.PI*2),h.stroke();let f=new qt(c),p=new ue,g=E=>new Ne({map:f,transparent:!0,opacity:E,blending:ke,depthWrite:!1,side:Rt,fog:!1}),x=new se(new tn(150,560,96,1),g(.9));x.userData.op=.9,x.rotation.x=-1.35,p.add(x);let v=new se(new tn(150,330,96,1),g(.75));v.userData.op=.75,p.add(v);let m=new se(new Oi(150,64),new Ne({color:0,fog:!1,transparent:!0,depthWrite:!1}));m.userData.op=1,m.position.z=1,p.add(m);let _=new se(new tn(150,158,96),new Ne({color:16770752,transparent:!0,opacity:.9,blending:ke,fog:!1,depthWrite:!1}));_.userData.op=.9,_.position.z=2,p.add(_),p.renderOrder=-7,n.add(p),Rn.bh=p,Rn.disk=x}Ei=new Qi(16773341,3),Ei.castShadow=!0,Ei.shadow.mapSize.set(u.hiShadows?4096:2048,u.hiShadows?4096:2048);let r=Ei.shadow.camera;r.left=-70,r.right=70,r.top=70,r.bottom=-70,r.near=1,r.far=400,Ei.shadow.bias=-4e-4,Ei.shadow.normalBias=.6,n.add(Ei,Ei.target),gw(n),la=new hr(16765616,5909530,1),sp=new lh(4213360,.3),n.add(la,sp),n.fog=new Jc(14196848,.0016),op=new ji,Xg=new se(new Ge(400,32,16),gr),op.add(Xg),Kg=new Yo(u.renderer)}function ca(n,e){let t=u.time,i=t.t;t.t+=n/pw*(t.elevation<0?1.5:1),t.t>=1&&(t.t-=1),i<.25&&t.t>=.25&&(t.day++,t.dawn=!0);let s=(t.t-.25)*Math.PI*2;An.set(Math.cos(s),Math.sin(s),.35).normalize();let r=An.y;t.elevation=r,t.night=Hn(.05,-.18,r);let o=Hn(0,1,u.terraform),a=u.storm,l=Hn(-.05,.35,r),c=1-Math.abs(Vi((r-.05)/.3,-1,1));Rl.copy(ns.dayTop).lerp(ns.earthTop,o),Yg.copy(ns.dayHor).lerp(ns.earthHor,o);let h=gr.uniforms.uTop.value,d=gr.uniforms.uHor.value;h.copy(ns.nightTop).lerp(ns.setTop,Hn(-.25,0,r)).lerp(Rl,l),d.copy(ns.nightHor).lerp(ns.setHor,Hn(-.25,0,r)).lerp(Yg,l),a>0&&(Rl.copy(ns.stormHor).multiplyScalar(.25+.75*(1-t.night)),h.lerp(Rl,a*.85),d.lerp(Rl,a)),gr.uniforms.uHalo.value.copy(ns.halo).multiplyScalar(Vi(c,0,1)*(1-o*.5)*(1-a)),gr.uniforms.uSunDir.value.copy(An),gr.uniforms.uSunVis.value=Hn(-.08,.02,r)*(1-a*.85),Al.position.copy(e),aa.position.copy(e),Is.position.set(e.x,e.y+700,e.z),Is.material.uniforms.uT.value=performance.now()*.001,Is.material.uniforms.uI.value=ap[0]*t.night*(1-a)*(.75+.25*Math.sin(performance.now()*7e-5+t.day)),aa.material.opacity=Math.max(t.night,Me.id==="europa"?.85:0)*(1-a);let f=u.time.t*Math.PI*6,p=-u.time.t*Math.PI*2+2;if(Cl.position.set(e.x+Math.cos(f)*2600,e.y+Math.sin(f)*1700+300,e.z-1300),Cl.lookAt(e),rp.position.set(e.x+Math.cos(p)*2800,e.y+Math.sin(p)*2200,e.z+1600),Rn.jup){Rn.jup.position.set(e.x-1800,e.y+650,e.z-2600),Rn.jup.rotation.y+=4e-5;let v=u.time.t*Math.PI*8;Rn.io.position.set(e.x-1800+Math.cos(v)*1400,e.y+650+Math.sin(v)*300,e.z-2600+Math.sin(v)*1400)}if(Pl){Pl.position.copy(e).addScaledVector(An,3e3);let v=Hn(-.03,.12,r)*(1-a)*(Me.id==="europa"?.6:1);for(let m of Zg)m.color.copy(m.base).multiplyScalar(v)}Rn.bh&&(Rn.bh.position.set(e.x-2200,e.y+900,e.z+1900),Rn.bh.lookAt(e),Rn.disk.rotation.z+=n*.05,Rn.bh.children.forEach(v=>{v.material&&v.material.opacity!==void 0&&v.userData.op&&(v.material.opacity=v.userData.op*(.45+t.night*.55))})),Rn.s2&&(Rn.s2.position.copy(e).addScaledVector(new w(An.x*.8-.3,An.y*.9-.05,An.z+.4).normalize(),3e3),Rn.s2.material.opacity=Hn(-.2,.05,r)*.9,Rn.gas.position.set(e.x+1600,e.y+1100,e.z+2400));let g=Hn(-.04,.25,r);Ei.intensity=3*g*(1-a*.6),Ei.color.setRGB(1,Ht(.7,.93,g),Ht(.55,.85,g)),Ei.position.copy(e).addScaledVector(An,200),Ei.target.position.copy(e),la.intensity=Ht(.45,.8,l)*(1-a*.3),la.color.copy(d).lerp(h,.3).lerp(xw,t.night*.85),Me.id==="europa"&&la.color.lerp(yw,.6),la.groundColor.setRGB(Ht(.05,.38,l),Ht(.04,.18,l),Ht(.05,.1,l)),sp.intensity=Ht(.8,.2,l),u.scene.fog.color.copy(d),u.scene.fog.density=Ht(Ht(.0016,.0032,t.night),.03,a)*(Me.id==="europa"?.55:1);let x=performance.now();if(x-qg>4e3||!Sh){qg=x;let v=Sh;Sh=Kg.fromScene(op,.04,1,1e3),u.scene.environment=Sh.texture,u.scene.environmentIntensity=Ht(.85,.35,t.night),v&&v.dispose()}u.renderer.toneMappingExposure=Ht(1,1.4,t.night)}function lp(){let n=Math.floor(u.time.t*24.66),e=Math.floor((u.time.t*24.66-n)*60);return`${Me.name} \xB7 \u7B2C ${u.time.day} \u65E5 \xB7 ${String(n).padStart(2,"0")}:${String(e).padStart(2,"0")}`}var an=1400,Qe=an/2,xr=400,hp=an/xr,is=xr+1,Ll=bh(Me.seed),Rh=bh(Me.seed*7+3),jg=bh(Me.seed+42),Ls=[],ss,vr,Ah,Kr,Th;function Mw(){let n=ui(Me.seed);for(Ls.push({x:150,z:-120,r:70,depth:16,rim:6});Ls.length<Me.craters;){let e=(n()-.5)*(an-260),t=(n()-.5)*(an-260);if(Math.hypot(e,t)<130)continue;let i=10+Math.pow(n(),2.2)*85;Ls.push({x:e,z:t,r:i,depth:i*(.18+n()*.12),rim:i*(.05+n()*.06)})}}var _w=0;function Qg(n,e){let t=np(Ll,n*.0016,e*.0016,5)*Me.hills,i=1-Math.abs(Rh(n*.0042,e*.0042));t+=i*i*i*Me.ridges,t+=np(jg,n*.025,e*.025,3)*Me.detail;for(let s of Ls){let r=n-s.x,o=e-s.z,a=r*r+o*o;if(a>s.r*s.r*4)continue;let l=Math.sqrt(a)/s.r;l<1&&(t-=s.depth*(1-l*l)),t+=s.rim*Math.exp(-(((l-1)/.28)**2))}return t}var e1=0;function Ew(n,e){let t=Qg(n,e)-e1,i=Math.hypot(n,e);t=Ht(_w+jg(n*.02,e*.02)*.6,t,Hn(45,150,i));let s=Math.max(Math.abs(n),Math.abs(e)),r=Qe-200;if(s>r){let o=(s-r)/200;t+=o*o*160*(.65+.35*Ll(n*.01,e*.01))}return t}function ve(n,e){let t=Vi((n+Qe)/hp,0,xr-.001),i=Vi((e+Qe)/hp,0,xr-.001),s=Math.floor(t),r=Math.floor(i),o=t-s,a=i-r,l=ss[r*is+s],c=ss[r*is+s+1],h=ss[(r+1)*is+s],d=ss[(r+1)*is+s+1];return o+a<1?l+(c-l)*o+(h-l)*a:d+(h-d)*(1-o)+(c-d)*(1-a)}function Jr(n,e,t=2){let i=ve(n,e);return Math.max(Math.abs(ve(n+t,e)-i),Math.abs(ve(n-t,e)-i),Math.abs(ve(n,e+t)-i),Math.abs(ve(n,e-t)-i))/t}function Ch(n,e,t=60){let i=0;for(let s=.2;s<=t;s+=.25){let r=n.x+e.x*s,o=n.y+e.y*s,a=n.z+e.z*s;if(o<ve(r,a)){let l=i,c=s;for(let h=0;h<8;h++){let d=(l+c)/2;n.y+e.y*d<ve(n.x+e.x*d,n.z+e.z*d)?c=d:l=d}return{dist:c,point:new w(n.x+e.x*c,n.y+e.y*c,n.z+e.z*c)}}i=s}return null}function t1(n){Mw(),e1=Qg(0,0),ss=new Float32Array(is*is),Kr=new Un(an,an,xr,xr),Kr.rotateX(-Math.PI/2);let e=Kr.attributes.position;for(let s=0;s<e.count;s++){let r=Ew(e.getX(s),e.getZ(s));e.setY(s,r),ss[s]=r}vr=new Float32Array(e.count*3);let t=new ce;for(let s=0;s<e.count;s++){let r=e.getX(s),o=e.getZ(s),a=ss[s],l=s%is,c=s/is|0,h=ss[c*is+Math.min(l+1,xr)]-a,d=ss[Math.min(c+1,xr)*is+l]-a,f=Vi(Math.hypot(h,d)/hp*1.4,0,1),p=Ll(r*.012,o*.012)*.5+.5,g=Rh(r*.08,o*.08)*.5+.5,x=Me.ground.a,v=Me.ground.b,m=Me.ground.steep,_=Me.ground.low,E=Ht(x[0],v[0],p),M=Ht(x[1],v[1],p),D=Ht(x[2],v[2],p);E*=.9+g*.18,M*=.9+g*.16,D*=.9+g*.14,E=Ht(E,m[0],f),M=Ht(M,m[1],f),D=Ht(D,m[2],f);let A=Hn(-4,-16,a);if(E=Ht(E,_[0],A*.6),M=Ht(M,_[1],A*.6),D=Ht(D,_[2],A*.6),Me.id==="europa"){let P=Math.abs(Rh(r*.006,o*.006));if(P<.05){let I=1-P/.05;E=Ht(E,.55,I*.7),M=Ht(M,.32,I*.7),D=Ht(D,.24,I*.7)}}t.setRGB(E,M,D,bt),vr[s*3]=t.r,vr[s*3+1]=t.g,vr[s*3+2]=t.b}Ah=new on(vr.slice(),3),Kr.setAttribute("color",Ah),Kr.computeVertexNormals();let i=new ge({vertexColors:!0,roughness:.93,metalness:0});return i.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},Th=new se(Kr,i),Th.receiveShadow=!0,n.add(Th),bw(n),Th}function bw(n){let e=ui(99),t=new _i(1,0),i=t.attributes.position;for(let p=0;p<i.count;p++){let g=.75+e()*.5;i.setXYZ(p,i.getX(p)*g,i.getY(p)*g*.8,i.getZ(p)*g)}t.computeVertexNormals();let s=2600,r=new ar(t,new ge({color:Me.rock,roughness:Me.id==="europa"?.35:.92,flatShading:!0,map:ts.map,bumpMap:ts.bumpMap,bumpScale:3}),s);r.castShadow=!0,r.receiveShadow=!0;let o=new mt,a=new dn,l=new w,c=new w,h=new Sn,d=new ce,f=0;for(;f<s;){let p=(e()-.5)*(an-120),g=(e()-.5)*(an-120);if(Math.hypot(p,g)<22||Ll(p*.01,g*.01)<-.1&&e()<.7)continue;let m=e()<.06?1.8+e()*2.5:.2+Math.pow(e(),2)*1.2;l.set(m*(.8+e()*.6),m*(.6+e()*.5),m*(.8+e()*.6)),h.set(e()*.5,e()*Math.PI*2,e()*.5),a.setFromEuler(h),c.set(p,ve(p,g)+l.y*.25,g),o.compose(c,a,l),r.setMatrixAt(f,o),d.setHSL(Me.rockHSL[0]+e()*.02,Me.rockHSL[1]+e()*.2,Me.rockHSL[2]+e()*.14),r.setColorAt(f,d),m>1&&u.colliders.add({x:p,z:g,r:Math.max(l.x,l.z)*.85,kind:"rock"}),f++}n.add(r),Me.id==="kepler"&&Tw(n,e)}var ww=new ce().setRGB(.3,.46,.2,bt),Sw=new ce().setRGB(.46,.5,.26,bt),cp=new ce().setRGB(.2,.38,.52,bt);function up(n,e){let t=Kr.attributes.position,i=Ah.array,s=60+e*520;for(let r=0;r<t.count;r++){let o=t.getX(r),a=t.getZ(r),l=ss[r],c=0;for(let p of n){let g=Math.hypot(o-p.x,a-p.z);c=Math.max(c,Hn(s,s*.55,g))}let h=vr[r*3],d=vr[r*3+1],f=vr[r*3+2];if(c>0){let p=Rh(o*.03,a*.03)*.5+.5,g=c*Vi(p*1.4-.1,0,1)*Vi(e*1.5,0,1),x=p>.6?ww:Sw;if(h=Ht(h,x.r,g),d=Ht(d,x.g,g),f=Ht(f,x.b,g),l<-9&&e>.5){let v=c*Hn(-9,-13,l)*Hn(.5,1,e);h=Ht(h,cp.r,v),d=Ht(d,cp.g,v),f=Ht(f,cp.b,v)}}i[r*3]=h,i[r*3+1]=d,i[r*3+2]=f}Ah.needsUpdate=!0}function n1(n=350){let e=document.createElement("canvas");e.width=e.height=n;let t=e.getContext("2d"),i=t.createImageData(n,n);for(let s=0;s<n;s++)for(let r=0;r<n;r++){let o=(r/n-.5)*an,a=(s/n-.5)*an,l=ve(o,a),c=ve(o+4,a+4)-l,h=Vi(.55+l*.006-c*.08,.15,1),d=(s*n+r)*4,f=Me.ground.b;i.data[d]=255*f[0]*h,i.data[d+1]=255*f[1]*h,i.data[d+2]=255*f[2]*h,i.data[d+3]=255}return t.putImageData(i,0,0),e}var dp=new ge({color:8010400,emissive:4259776,emissiveIntensity:.1,roughness:.6,flatShading:!0});function Tw(n,e){let t=new Oe(.25,.45,1,6);t.translate(0,.5,0);let i=new Ge(1,8,5,0,Math.PI*2,0,Math.PI/2),s=900,r=new ar(t,new ge({color:14209208,roughness:.8,flatShading:!0}),s),o=new ar(i,dp,s);r.castShadow=o.castShadow=!0;let a=new mt,l=new dn,c=new w,h=new w,d=new ce,f=0;for(;f<s;){let p=(e()-.5)*(an-300),g=(e()-.5)*(an-300);if(Math.hypot(p,g)<50||Ll(p*.008,g*.008)<.05||Jr(p,g,2)>.5)continue;let x=3+e()*9,v=1.5+e()*3,m=ve(p,g);c.set(1+x*.05,x,1+x*.05),h.set(p,m-.2,g),l.identity(),a.compose(h,l,c),r.setMatrixAt(f,a),c.set(v,v*.5,v),h.set(p,m+x-.3,g),a.compose(h,l,c),o.setMatrixAt(f,a),d.setHSL(.72+e()*.2,.6,.4+e()*.2),o.setColorAt(f,d),u.colliders.add({x:p,z:g,r:.6,kind:"flora"}),f++}n.add(r,o)}var Ph=6e3,rs=60,yr,Dl,pp,fp=new w(1e9,0,0),i1=new mt,s1=new dn,r1=new w,o1=new w,a1=new Sn;function l1(){let n=new _i(.12,0),e=new ge({color:16777215,roughness:.95,flatShading:!0,map:ts.map});yr=new ar(n,e,Ph),yr.receiveShadow=!0,yr.frustumCulled=!1;let t=ui(31);Dl=new Float32Array(Ph*2),pp=[];let i=new ce;for(let s=0;s<Ph;s++){Dl[s*2]=t()*rs*2,Dl[s*2+1]=t()*rs*2;let r=Math.pow(t(),3);pp.push([.4+r*3.2,.25+t()*.6,.4+r*3,t()*6.28,t()*.6]),i.setHSL(Me.rockHSL[0]+t()*.03,Me.rockHSL[1]*(.5+t()*.5),Math.min(.75,Me.rockHSL[2]*(1.2+t()*.9))),yr.setColorAt(s,i)}u.scene.add(yr)}function c1(){if(!yr)return;let n=u.player.pos;if(Math.abs(n.x-fp.x)<3&&Math.abs(n.z-fp.z)<3)return;fp.copy(n);let e=n.x-rs,t=n.z-rs;for(let i=0;i<Ph;i++){let s=e+((Dl[i*2]-e)%(rs*2)+rs*2)%(rs*2),r=t+((Dl[i*2+1]-t)%(rs*2)+rs*2)%(rs*2),o=pp[i];r1.set(o[0],o[0]*o[1],o[2]),a1.set(o[4],o[3],0),s1.setFromEuler(a1),o1.set(s,ve(s,r)+.02,r),i1.compose(o1,s1,r1),yr.setMatrixAt(i,i1)}yr.instanceMatrix.needsUpdate=!0}var ha=[],Rw=new lr(.22,0),Ul=class{constructor(e,t,i,s){this.max=t,this.n=0,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*4),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.base=new Float32Array(t*4),this.grav=new Float32Array(t),this.drag=new Float32Array(t);let r=new At;this.pa=new on(this.pos,3),this.ca=new on(this.col,4),this.pa.setUsage(qf),this.ca.setUsage(qf),r.setAttribute("position",this.pa),r.setAttribute("color",this.ca),this.mat=new ci({size:s,map:zn(),vertexColors:!0,transparent:!0,depthWrite:!1,blending:i?ke:ai,sizeAttenuation:!0}),this.points=new yi(r,this.mat),this.points.frustumCulled=!1,e.add(this.points)}emit(e,t,i,s,r,o,a,l,c,h,d,f=0,p=0){let g=this.n<this.max?this.n++:Math.floor(Math.random()*this.max);this.pos[g*3]=e,this.pos[g*3+1]=t,this.pos[g*3+2]=i,this.vel[g*3]=s,this.vel[g*3+1]=r,this.vel[g*3+2]=o,this.base[g*4]=a,this.base[g*4+1]=l,this.base[g*4+2]=c,this.base[g*4+3]=h,this.life[g]=d,this.maxLife[g]=d,this.grav[g]=f,this.drag[g]=p}update(e){let t=this.n;for(let i=0;i<t;i++){if(this.life[i]-=e,this.life[i]<=0){if(t--,i!==t){for(let o=0;o<3;o++)this.pos[i*3+o]=this.pos[t*3+o],this.vel[i*3+o]=this.vel[t*3+o];for(let o=0;o<4;o++)this.base[i*4+o]=this.base[t*4+o];this.life[i]=this.life[t],this.maxLife[i]=this.maxLife[t],this.grav[i]=this.grav[t],this.drag[i]=this.drag[t],i--}continue}let s=1-this.drag[i]*e;this.vel[i*3]*=s,this.vel[i*3+2]*=s,this.vel[i*3+1]=this.vel[i*3+1]*s-this.grav[i]*e,this.pos[i*3]+=this.vel[i*3]*e,this.pos[i*3+1]+=this.vel[i*3+1]*e,this.pos[i*3+2]+=this.vel[i*3+2]*e;let r=this.life[i]/this.maxLife[i];this.col[i*4]=this.base[i*4],this.col[i*4+1]=this.base[i*4+1],this.col[i*4+2]=this.base[i*4+2],this.col[i*4+3]=this.base[i*4+3]*Math.min(1,r*2.5)}this.n=t,this.points.geometry.setDrawRange(0,t),this.pa.needsUpdate=!0,this.ca.needsUpdate=!0}},jr,Lh,Qr,ua,mp;function h1(n){jr=new Ul(n,3e3,!0,.35),mp=new Ul(n,4e3,!0,1.3),Lh=new Ul(n,2500,!1,1.6);let e=new At,t=new Float32Array(1500*3);for(let r=0;r<t.length;r++)t[r]=(Math.random()-.5)*80;e.setAttribute("position",new on(t,3)),Qr=new yi(e,new ci({size:.25,map:zn(),color:16765088,transparent:!0,opacity:.5,depthWrite:!1})),Qr.frustumCulled=!1,n.add(Qr);let i=new At,s=new Float32Array(3e3*3);for(let r=0;r<s.length;r++)s[r]=(Math.random()-.5)*70;i.setAttribute("position",new on(s,3)),ua=new yi(i,new ci({size:.18,map:zn(),color:12574975,transparent:!0,opacity:0,depthWrite:!1})),ua.frustumCulled=!1,n.add(ua)}var fe={debris(n,e,t=8,i=7,s=1){for(let r=0;r<t;r++){if(ha.length>160){let h=ha.shift();u.scene.remove(h.m)}let o=new se(Rw,e);o.castShadow=!0;let a=s*(.5+Math.random()*.9);o.scale.set(a,a*(1+Math.random()),a),o.position.copy(n),u.scene.add(o);let l=Math.random()*Math.PI*2,c=.4+Math.random()*.8;ha.push({m:o,v:new w(Math.cos(l)*i*(1-c*.5),i*c,Math.sin(l)*i*(1-c*.5)),w:new w(Math.random()*10,Math.random()*10,Math.random()*10),life:3+Math.random()*2,s:a})}},spark(n,e=[1,.6,.2],t=6,i=4,s=.5){for(let r=0;r<t;r++)jr.emit(n.x,n.y,n.z,(Math.random()-.5)*i,Math.random()*i,(Math.random()-.5)*i,e[0],e[1],e[2],1,s*(.5+Math.random()),6,1)},burst(n,e=[1,.5,.2],t=40,i=9){for(let s=0;s<t;s++){let r=Math.random()*2-1,o=Math.random()*6.283,a=Math.sqrt(1-r*r),l=i*(.4+Math.random()*.6);jr.emit(n.x,n.y,n.z,a*Math.cos(o)*l,r*l,a*Math.sin(o)*l,e[0],e[1],e[2],1,.4+Math.random()*.6,4,2)}},dustPuff(n,e=10,t=2,i=[.72,.45,.3]){for(let s=0;s<e;s++)Lh.emit(n.x+(Math.random()-.5)*t,n.y+Math.random()*.5,n.z+(Math.random()-.5)*t,(Math.random()-.5)*3,Math.random()*1.5,(Math.random()-.5)*3,i[0],i[1],i[2],.55,1.2+Math.random(),-.2,1.5)},ring(n,e,t=60,i=[.72,.45,.3]){for(let s=0;s<t;s++){let r=s/t*6.283,o=6+Math.random()*6;Lh.emit(n.x+Math.cos(r)*e,n.y+.4,n.z+Math.sin(r)*e,Math.cos(r)*o,.5+Math.random(),Math.sin(r)*o,i[0],i[1],i[2],.6,1.5+Math.random(),-.1,1.2)}},firework(n,e,t,i,s){mp.emit(n.x,n.y,n.z,e,t,i,s[0]*1.6,s[1]*1.6,s[2]*1.6,1,1.6+Math.random()*.8,3,1.4)},trail(n,e,t=1){jr.emit(n.x,n.y,n.z,(Math.random()-.5)*.4,(Math.random()-.5)*.4,(Math.random()-.5)*.4,e[0]*t,e[1]*t,e[2]*t,1,.18,0,0)},flame(n,e=1){jr.emit(n.x+(Math.random()-.5)*.6,n.y,n.z+(Math.random()-.5)*.6,(Math.random()-.5)*2,-6*e-Math.random()*6,(Math.random()-.5)*2,1,.55,.2,1,.35,0,0)},rise(n,e,t=6){jr.emit(n.x+(Math.random()-.5)*t,n.y,n.z+(Math.random()-.5)*t,0,6+Math.random()*6,0,e[0],e[1],e[2],1,2.5,-.5,0)}},Ih=0;function eo(n,e){jr.update(n),Lh.update(n),mp.update(n);for(let o=ha.length-1;o>=0;o--){let a=ha[o];a.life-=n,a.v.y-=9*n,a.m.position.addScaledVector(a.v,n),a.m.rotation.x+=a.w.x*n,a.m.rotation.y+=a.w.y*n,a.m.rotation.z+=a.w.z*n;let l=ve(a.m.position.x,a.m.position.z)+.1;a.m.position.y<l&&(a.m.position.y=l,a.v.y=Math.abs(a.v.y)*.35,a.v.x*=.6,a.v.z*=.6,a.w.multiplyScalar(.5)),a.life<1&&a.m.scale.setScalar(Math.max(.001,a.s*a.life)),a.life<=0&&(u.scene.remove(a.m),ha.splice(o,1))}let t=u.storm,i=Qr.geometry.attributes.position,s=i.array,r=1+t*26;for(let o=0;o<s.length;o+=3){s[o]+=r*n,s[o+1]+=Math.sin(o+performance.now()*5e-4)*n*.2-t*n*1.5;let a=40;s[o]-e.x>a&&(s[o]-=2*a),s[o]-e.x<-a&&(s[o]+=2*a),s[o+1]-e.y>a/2&&(s[o+1]-=a),s[o+1]-e.y<-a/2&&(s[o+1]+=a),s[o+2]-e.z>a&&(s[o+2]-=2*a),s[o+2]-e.z<-a&&(s[o+2]+=2*a)}if(i.needsUpdate=!0,Qr.material.size=.25+t*.3,Qr.material.opacity=.3+t*.25,Qr.material.color.setRGB(1,.8-u.time.night*.4,.62-u.time.night*.3),Ih+=((u.raining?1:0)-Ih)*n*.5,ua.material.opacity=Ih*.6,Ih>.01){let o=ua.geometry.attributes.position.array;for(let a=0;a<o.length;a+=3)o[a+1]-=22*n,o[a]+=2*n,o[a+1]<e.y-20&&(o[a+1]+=40),o[a]-e.x>35&&(o[a]-=70),o[a]-e.x<-35&&(o[a]+=70),o[a+2]-e.z>35&&(o[a+2]-=70),o[a+2]-e.z<-35&&(o[a+2]+=70);ua.geometry.attributes.position.needsUpdate=!0}}var Dh=null,ht,Mr,to,Nl,Hl,no,kl,Uh,Y={enabled:!0,init(){if(ht){ht.resume();return}try{ht=new(window.AudioContext||window.webkitAudioContext)}catch{return}Mr=ht.createGain(),Mr.gain.value=.7,Mr.connect(ht.destination),to=ht.createGain(),to.gain.value=.8,to.connect(Mr),Nl=ht.createGain(),Nl.gain.value=.22,Nl.connect(Mr),Uh=ht.createBuffer(1,ht.sampleRate*2,ht.sampleRate);let n=Uh.getChannelData(0),e=0;for(let i=0;i<n.length;i++){let s=Math.random()*2-1;e=(e+.02*s)/1.02,n[i]=e*3.5}let t=ht.createBufferSource();t.buffer=Uh,t.loop=!0,no=ht.createBiquadFilter(),no.type="bandpass",no.frequency.value=400,no.Q.value=.6,Hl=ht.createGain(),Hl.gain.value=.15,t.connect(no),no.connect(Hl),Hl.connect(Mr),t.start(),this.musicLoop()},setVolume(n){Mr&&(Mr.gain.value=n)},update(n,e){if(!ht)return;let t=ht.currentTime;Hl.gain.setTargetAtTime(.1+n*.6+e*.04,t,.5),no.frequency.setTargetAtTime(300+n*500+Math.sin(t*.3)*120,t,.8)},tone(n,e,t="sine",i=.3,s=0,r=0,o){if(!ht)return;let a=ht.currentTime+r,l=ht.createOscillator(),c=ht.createGain();l.type=t,l.frequency.setValueAtTime(n,a),s&&l.frequency.exponentialRampToValueAtTime(Math.max(20,n*s),a+e),c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(i,a+.01),c.gain.exponentialRampToValueAtTime(1e-4,a+e),l.connect(c),c.connect(o||to),l.start(a),l.stop(a+e+.05)},noise(n,e=1e3,t=.3,i="lowpass",s=0,r=1){if(!ht)return;let o=ht.currentTime+s,a=ht.createBufferSource();a.buffer=Uh;let l=ht.createBiquadFilter();l.type=i,l.frequency.value=e,l.Q.value=r;let c=ht.createGain();c.gain.setValueAtTime(t,o),c.gain.exponentialRampToValueAtTime(1e-4,o+n),a.connect(l),l.connect(c),c.connect(to),a.start(o,Math.random()),a.stop(o+n+.05)},play(n){if(ht)switch(n){case"step":this.noise(.12,500+Math.random()*200,.12,"lowpass");break;case"jump":this.noise(.2,400,.15);break;case"land":this.noise(.25,300,.25);break;case"mine":this.tone(180+Math.random()*60,.08,"square",.04),this.noise(.08,2400,.06,"highpass");break;case"pickup":this.tone(880,.08,"sine",.08),this.tone(1320,.1,"sine",.06,0,.05);break;case"deplete":this.noise(.5,900,.3),this.tone(220,.4,"triangle",.15,.5);break;case"shoot":this.tone(900,.15,"sawtooth",.12,.25),this.noise(.1,3e3,.08,"highpass");break;case"turret":this.tone(700,.12,"square",.05,.3);break;case"hit":this.tone(300,.1,"square",.08,.5);break;case"kill":this.noise(.6,1600,.3,"bandpass",0,.8),this.tone(120,.5,"sawtooth",.12,.3);break;case"hurt":this.tone(160,.25,"sawtooth",.15,.6);break;case"place":this.tone(220,.15,"triangle",.2),this.tone(330,.15,"triangle",.2,0,.1),this.tone(440,.3,"triangle",.2,0,.2),this.noise(.4,600,.2);break;case"ui":this.tone(880,.05,"sine",.07),this.tone(1320,.08,"sine",.04,0,.03);break;case"scan":this.tone(300,1.2,"sine",.12,4),this.tone(600,.9,"triangle",.05,3,.1),this.noise(.8,2e3,.05,"bandpass",0,3);break;case"shutter":this.noise(.06,4e3,.25,"highpass"),this.noise(.1,1500,.15,"bandpass",.07);break;case"tick":this.tone(2400,.02,"sine",.025);break;case"open":this.tone(440,.12,"sine",.05,1.5),this.noise(.15,3e3,.03,"highpass");break;case"achv":[523,784,1046,1568].forEach((e,t)=>this.tone(e,.9,"triangle",.09,0,t*.09));break;case"deny":this.tone(200,.15,"square",.06),this.tone(150,.2,"square",.06,0,.1);break;case"craft":[523,659,784,1046].forEach((e,t)=>this.tone(e,.25,"triangle",.12,0,t*.08));break;case"radio":this.noise(.15,2500,.12,"bandpass",0,2),this.tone(1200,.05,"sine",.06,0,.12);break;case"alarm":this.tone(880,.18,"square",.06),this.tone(660,.18,"square",.06,0,.2);break;case"objective":[392,523,659].forEach((e,t)=>this.tone(e,.5,"sine",.15,0,t*.12));break;case"chapter":[262,330,392,523,659].forEach((e,t)=>this.tone(e,1.2,"sine",.12,0,t*.15));break;case"rumble":this.noise(4,150,.6),this.noise(3,400,.25,"lowpass",.5);break;case"jet":this.noise(.12,800,.1,"bandpass");break;case"night":this.tone(110,3,"sine",.12,.8),this.tone(165,3,"sine",.08,.8,.3);break}},engine(n){if(ht&&(n>0||Dh)){if(!Dh){let i=ht.createOscillator(),s=ht.createOscillator(),r=ht.createBiquadFilter(),o=ht.createGain();i.type="sawtooth",s.type="triangle",r.type="lowpass",r.frequency.value=500,o.gain.value=1e-4,i.connect(r),s.connect(r),r.connect(o),o.connect(to),i.start(),s.start(),Dh={o:i,o2:s,f:r,g:o}}let e=ht.currentTime,t=Dh;t.o.frequency.setTargetAtTime(38+n*70,e,.1),t.o2.frequency.setTargetAtTime(76+n*140,e,.1),t.f.frequency.setTargetAtTime(300+n*900,e,.1),t.g.gain.setTargetAtTime(n>0||u.driving?.03+n*.05:1e-4,e,.15)}},laser(n){if(ht){if(n&&!kl){let e=ht.createOscillator(),t=ht.createOscillator(),i=ht.createGain(),s=ht.createBiquadFilter();e.type="sawtooth",e.frequency.value=110,t.type="square",t.frequency.value=113,s.type="lowpass",s.frequency.value=900,i.gain.value=1e-4,i.gain.exponentialRampToValueAtTime(.06,ht.currentTime+.1),e.connect(s),t.connect(s),s.connect(i),i.connect(to),e.start(),t.start(),kl={o:e,o2:t,g:i}}else if(!n&&kl){let e=kl;kl=null,e.g.gain.setTargetAtTime(1e-4,ht.currentTime,.04),e.o.stop(ht.currentTime+.2),e.o2.stop(ht.currentTime+.2)}}},musicLoop(){let n=[[220,277.2,329.6,415.3],[196,246.9,293.7,392],[174.6,220,261.6,349.2],[164.8,207.7,246.9,329.6],[146.8,220,293.7,370]],e=0,t=()=>{if(!ht)return;let i=n[e++%n.length],s=ht.currentTime;if(i.forEach((r,o)=>{let a=ht.createOscillator(),l=ht.createGain();a.type=o===0?"triangle":"sine",a.frequency.value=r*(o===0?.5:1),a.detune.value=(Math.random()-.5)*8,l.gain.setValueAtTime(1e-4,s),l.gain.exponentialRampToValueAtTime(.06,s+3),l.gain.exponentialRampToValueAtTime(1e-4,s+11),a.connect(l),l.connect(Nl),a.start(s),a.stop(s+11.5)}),Math.random()<.7){let r=i[1+Math.floor(Math.random()*3)]*2;for(let o=0;o<3;o++)Math.random()<.6&&this.tone(r*[1,1.122,1.335][o],2.5,"sine",.025,0,2+o*1.6,Nl)}setTimeout(t,9e3)};t()}};var zl={iron:new ge({color:6965822,roughness:.4,metalness:.8,flatShading:!0,map:ts.map,bumpMap:ts.bumpMap,bumpScale:4}),ironVein:new ge({color:10246714,roughness:.3,metalness:.9,flatShading:!0,emissive:3806216}),ice:new ge({color:13627135,roughness:.08,metalness:.1,flatShading:!0,transparent:!0,opacity:.9,emissive:1456202}),silicon:new ge({color:15983014,roughness:.15,metalness:.4,flatShading:!0,emissive:2761224}),titanium:new ge({color:10194175,roughness:.1,metalness:.5,flatShading:!0,emissive:5913855,emissiveIntensity:.6}),base:new ge({color:8276790,roughness:.95,flatShading:!0,map:ts.map,bumpMap:ts.bumpMap,bumpScale:4})},u1={iron:null,ice:8969727,silicon:16770720,titanium:9071871},Ds={iron:[1,.55,.3],ice:[.6,.9,1],silicon:[1,.9,.55],titanium:[.7,.55,1]};function Aw(n,e,t){let i=new Yt(t,e,5,1);i.translate(0,e/2,0);let s=new se(i,n);return s.castShadow=!0,s}function Cw(n,e){let t=new ue;if(n==="iron")for(let i=0;i<4;i++){let s=new se(new _i(.6+e()*.7,0),i===0?zl.ironVein:zl.iron);s.position.set((e()-.5)*1.8,.3+e()*.4,(e()-.5)*1.8),s.rotation.set(e()*3,e()*3,e()*3),s.scale.y=.8,s.castShadow=!0,t.add(s)}else{let i=new se(new _i(1.1,0),zl.base);i.scale.set(1.2,.45,1.2),i.castShadow=!0,t.add(i);let s=n==="titanium"?6:7;for(let r=0;r<s;r++){let o=Aw(zl[n],.8+e()*(n==="ice"?1.6:1.9),.18+e()*.22),a=e()*6.28,l=e()*.8;o.position.set(Math.cos(a)*l,.2,Math.sin(a)*l),o.rotation.set((e()-.5)*.9,e()*3,(e()-.5)*.9),t.add(o)}u1[n]&&t.add(_e(u1[n],n==="titanium"?5:3,null,0,1.2,0))}return t}var d1=Math.random;function fa(n,e,t,i){let s=Cw(n,d1),r=ve(e,t);s.position.set(e,r,t),s.rotation.y=d1()*6.28,u.scene.add(s);let o=i??{iron:30,ice:25,silicon:25,titanium:14}[n],a={type:n,x:e,z:t,y:r,amount:o,max:o,mesh:s,r:1.6};return a.collider=u.colliders.add({x:e,z:t,r:1.3,kind:"node"}),u.nodes.push(a),a}function f1(n,e){for(let t=0;t<200;t++){let i,s;if(n==="ice"&&Math.random()<.75){let o=Ls[Math.floor(Math.random()*Math.min(Ls.length,30))],a=Math.random()*6.28,l=Math.random()*o.r*.7;i=o.x+Math.cos(a)*l,s=o.z+Math.sin(a)*l}else if(e){let o=Math.random()*6.28,a=e[0]+Math.random()*(e[1]-e[0]);i=Math.cos(o)*a,s=Math.sin(o)*a}else i=(Math.random()-.5)*(2*Qe-300),s=(Math.random()-.5)*(2*Qe-300);let r=Math.hypot(i,s);if(!(n==="titanium"&&r<260)&&!(r<18)&&!(Math.abs(i)>Qe-160||Math.abs(s)>Qe-160)&&!(Jr(i,s,2)>.6)&&!u.colliders.overlaps(i,s,3))return[i,s]}return null}function p1(){let n=[["iron",22,8],["iron",-18,20],["iron",30,-25],["silicon",-26,-14],["silicon",12,34],["ice",40,10],["iron",-40,-38],["silicon",45,42]];for(let[t,i,s]of n)fa(t,i,s);let e={iron:70,silicon:50,ice:40,titanium:22};for(let t in e)for(let i=0;i<e[t];i++){let s=f1(t,t==="titanium"?null:i<e[t]*.35?[40,220]:null);s&&fa(t,s[0],s[1])}}function m1(n){u.scene.remove(n.mesh),u.colliders.remove(n.collider);let e=u.nodes.indexOf(n);e>=0&&u.nodes.splice(e,1)}var da=[];function Nh(n,e){n.amount-=e;let t=.35+.65*Math.max(0,n.amount/n.max);if(n.mesh.scale.setScalar(t),n.amount<=0){let i=n.mesh.position.clone();i.y+=1,fe.burst(i,Ds[n.type],40,7);let s=n.mesh.children.find(r=>r.isMesh&&r!==n.mesh.children[0])?.material||n.mesh.children[0].material;return fe.debris(i,s,9,5,1.1),fe.dustPuff(i,16,3),m1(n),da.push({type:n.type,t:90+Math.random()*60}),!0}return!1}function g1(n){for(let t=da.length-1;t>=0;t--)if(da[t].t-=n,da[t].t<=0){let i=da[t].type;da.splice(t,1);let s=f1(i,i==="titanium"?null:[60,400]);s&&fa(i,s[0],s[1])}let e=1+Math.sin(performance.now()*.002)*.15;zl.titanium.emissiveIntensity=.5*e}function v1(){return u.nodes.map(n=>[n.type,+n.x.toFixed(1),+n.z.toFixed(1),Math.round(n.amount)])}function x1(n){for(let e of[...u.nodes])m1(e);for(let[e,t,i,s]of n){let r=fa(e,t,i);r.amount=s,r.mesh.scale.setScalar(.35+.65*s/r.max)}}var M1=`
  float h3(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
  float n3(vec3 x){ vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z); }
  float fbm3(vec3 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * n3(p); p *= 2.07; a *= 0.5; } return s; }`,gp={value:0},Pw=new Pt({uniforms:{uT:gp,uPow:{value:1}},vertexShader:`uniform float uT; varying vec2 vUv; varying vec3 vN, vV;
    void main(){ vUv = uv; vec3 p = position;
      float w = sin(uv.y * 14.0 - uT * 40.0) * 0.06 * uv.y;
      p.x += w; p.z += cos(uv.y * 11.0 - uT * 33.0) * 0.06 * uv.y;
      vec4 mv = modelViewMatrix * vec4(p, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);
      gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform float uT, uPow; varying vec2 vUv; varying vec3 vN, vV; ${M1}
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
    }`,transparent:!0,blending:ke,depthWrite:!1,side:Rt});function _1(n){return new Pt({uniforms:{uT:gp,uLen:{value:1},uC:{value:new ce(n)},uI:{value:1}},vertexShader:`varying vec2 vUv; varying vec3 vN, vV;
      void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform float uT, uLen, uI; uniform vec3 uC; varying vec2 vUv; varying vec3 vN, vV; ${M1}
      void main(){
        float f = pow(abs(dot(vN, vV)), 2.5);
        float flow = fbm3(vec3(vUv.x * 3.0, vUv.y * uLen * 1.5 - uT * 26.0, uT * 3.0));
        float pulses = smoothstep(0.55, 1.0, sin(vUv.y * uLen * 4.0 - uT * 50.0)) * 0.6;
        float ends = smoothstep(0.0, 0.04, vUv.y) * smoothstep(1.0, 0.92, vUv.y);
        vec3 c = uC * (0.6 + flow * 1.4 + pulses) + vec3(1.0) * pow(f, 6.0) * 1.5;
        gl_FragColor = vec4(c * f * ends * uI, 1.0);
      }`,transparent:!0,blending:ke,depthWrite:!1,side:Rt})}var Gi=[],Hh=[];for(let n=0;n<4;n++){let e=new hi(16752720,0,30,1.6);Hh.push({l:e,t:0,dur:1,peak:0})}var y1=!1;function E1(n,e,t,i,s){y1||(Hh.forEach(o=>u.scene.add(o.l)),y1=!0);let r=Hh.reduce((o,a)=>o.t/o.dur>a.t/a.dur||o.peak===0?o:a);r.l.position.copy(n),r.l.color.set(e),r.l.distance=i,r.t=0,r.dur=s,r.peak=t}var Iw=(()=>{let n=document.createElement("canvas");n.width=n.height=256;let e=n.getContext("2d"),t=e.createRadialGradient(128,128,70,128,128,128);return t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.75,"rgba(255,255,255,.9)"),t.addColorStop(.85,"rgba(255,255,255,.4)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,256,256),new qt(n)})(),b1=(()=>{let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");for(let t=0;t<14;t++){let i=64+(Math.random()-.5)*50,s=64+(Math.random()-.5)*50,r=18+Math.random()*34,o=e.createRadialGradient(i,s,0,i,s,r);o.addColorStop(0,"rgba(255,255,255,.55)"),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(0,0,128,128)}return new qt(n)})(),w1=b1;function pa(n,e,t,i){let s=new xi(new li({map:n,color:e,transparent:!0,depthWrite:!1,blending:t,opacity:i}));return u.scene.add(s),s}function kh(n,e=16760960,t=6,i=.7,s=!0){let r=pa(Iw,e,ke,1);if(r.position.copy(n),Gi.push({o:r,t:0,dur:i,upd:(o,a)=>{let l=1-Math.pow(1-o,3);a.scale.setScalar(.5+l*t*2),a.material.opacity=(1-o)*(1-o)*.55}}),s){let o=new se(new tn(.94,1,96),new Ne({color:e,transparent:!0,blending:ke,depthWrite:!1,side:Rt}));o.rotation.x=-Math.PI/2,o.position.set(n.x,n.y-.6,n.z),u.scene.add(o),Gi.push({o,t:0,dur:i*1.4,upd:(a,l)=>{let c=1-Math.pow(1-a,2.5);l.scale.setScalar(.3+c*t*1.5),l.material.opacity=(1-a)*(1-a)*.85}})}}function _r(n,e=1,t=16747066){E1(n,t,60*e,24*e,.6);let i=pa(zn(),16773840,ke,1);i.position.copy(n),Gi.push({o:i,t:0,dur:.28,upd:(s,r)=>{r.scale.setScalar((1.6+s*4)*e),r.material.opacity=(1-s)*(1-s)}});for(let s=0;s<11;s++){let r=pa(b1,16777215,ke,1),o=new w((Math.random()-.5)*2.4,Math.random()*1.6,(Math.random()-.5)*2.4).multiplyScalar(e);r.position.copy(n).add(o),r.material.rotation=Math.random()*6;let a=1.5+Math.random()*2.5,l=(1.6+Math.random()*1.6)*e,c=.6+Math.random()*.5;Gi.push({o:r,t:0,dur:c,upd:(h,d,f)=>{d.position.y+=f*a*e,d.material.rotation+=f*.8,d.scale.setScalar(l*(.5+h*1.2));let p=d.material.color,g=Math.max(0,1-h*6),x=3.2*(1-h)+.4;p.setRGB(x,x*(.42+g*.3-h*.2),x*(.1+g*.25)),d.material.opacity=h<.45?1:(1-h)/.55}})}for(let s=0;s<14;s++){let r=.2+Math.random()*.1,o=pa(w1,new ce().setRGB(r*1.15,r*.9,r*.78),ai,0),a=Math.random()*Math.PI*2,l=Math.random()*2.2;o.position.copy(n).add(new w(Math.cos(a)*l,.3+Math.random()*1.2,Math.sin(a)*l).multiplyScalar(e));let c=(2.5+Math.random()*3)*e,h=2.8+Math.random()*1.8,d=.8+Math.random()*1.6,f=new w(Math.cos(a),0,Math.sin(a)).multiplyScalar(.6+Math.random());o.material.rotation=Math.random()*6,Gi.push({o,t:-(.08+.04*s),dur:h,upd:(p,g,x)=>{g.position.y+=x*d*e*(1-p*.6),g.position.addScaledVector(f,x*e),g.scale.setScalar(c*(.5+p*1.3)),g.material.opacity=Math.sin(Math.min(1,p)*Math.PI)*.42,g.material.rotation+=x*.25}})}fe.ring(new w(n.x,n.y-1.2,n.z),1.2*e,Math.round(70*e)),kh(n,16765600,4*e,.6),fe.burst(n,[1,.55,.15],Math.round(40*e),14*Math.sqrt(e)),xp(Math.min(1,.35*e),n)}function S1(n,e=1,t=[.78,.6,.48]){if(Gi.length>420)return;let i=Math.random()*Math.PI*2,s=(10+Math.random()*14)*e,r=.75+Math.random()*.35,o=pa(w1,new ce().setRGB(t[0]*r,t[1]*r,t[2]*r),ai,0);o.position.set(n.x+Math.cos(i)*1.5*e,n.y+.8+Math.random()*1.5,n.z+Math.sin(i)*1.5*e),o.material.rotation=Math.random()*6;let a=new w(Math.cos(i)*s,.6+Math.random()*2.2,Math.sin(i)*s),l=(4+Math.random()*4)*e,c=4+Math.random()*3;Gi.push({o,t:0,dur:c,upd:(h,d,f)=>{d.position.addScaledVector(a,f),a.multiplyScalar(Math.pow(.42,f)),a.y+=f*.5,d.scale.setScalar(l*(.4+Math.sqrt(h)*1.8)),d.material.rotation+=f*.15,d.material.opacity=Math.min(1,h*8)*(1-h)*.75}})}function vp(n,e=9365503,t=1){E1(n,e,18*t,8*t,.18);let i=pa(zn(),e,ke,1);i.position.copy(n),Gi.push({o:i,t:0,dur:.22,upd:(s,r)=>{r.scale.setScalar((1+s*3)*t),r.material.opacity=1-s}}),kh(n,e,1.2*t,.35,!1)}function xp(n,e){let t=e?e.distanceTo(u.player.pos):0;u.shake=Math.max(u.shake||0,n*Math.max(0,1-t/120))}function ma(n){gp.value=performance.now()*.001;for(let e=Gi.length-1;e>=0;e--){let t=Gi[e];if(t.t+=n,t.t<0){t.o.visible=!1;continue}t.o.visible=!0;let i=Math.min(1,t.t/t.dur);t.upd(i,t.o,n),i>=1&&(u.scene.remove(t.o),t.o.material.dispose(),t.o.geometry&&!t.o.isSprite&&t.o.geometry.dispose(),Gi.splice(e,1))}for(let e of Hh){if(e.peak<=0)continue;e.t+=n;let t=e.t/e.dur;e.l.intensity=t>=1?0:e.peak*Math.pow(1-t,2),t>=1&&(e.peak=0)}u.shake=(u.shake||0)*Math.pow(.02,n)}function T1(){y.flame=Pw}var On=[{name:"\u524D\u54E8\u7AD9",pop:0,b:0,r:75},{name:"\u5B9A\u5C45\u70B9",pop:4,b:6,r:120},{name:"\u5C0F\u9547",pop:12,b:14,r:175},{name:"\u57CE\u5E02",pop:24,b:22,r:240},{name:"\u5927\u90FD\u4F1A",pop:36,b:32,r:310},{name:"\u661F\u6E2F",pop:50,b:42,r:390}],di={x:0,z:0},ga,zh,va=0;function Mp(n){zh=new Ne({color:6743807,transparent:!0,opacity:.12,side:Rt,depthWrite:!1,blending:ke}),u.cityLevel=u.cityLevel||0,va=On[u.cityLevel].r,R1(va)}function R1(n){ga&&(u.scene.remove(ga),ga.geometry.dispose());let e=Math.ceil(n*1.2),t=[],i=[],s=1.4;for(let o=0;o<=e;o++){let a=o/e*Math.PI*2,l=di.x+Math.cos(a)*n,c=di.z+Math.sin(a)*n,h=ve(l,c);if(t.push(l,h,c,l,h+s,c),o<e){let d=o*2;i.push(d,d+1,d+2,d+1,d+3,d+2)}}let r=new At;r.setAttribute("position",new at(t,3)),r.setIndex(i),ga=new se(r,zh),ga.frustumCulled=!1,u.scene.add(ga)}function A1(n,e,t=0){return Math.hypot(n-di.x,e-di.z)<=On[u.cityLevel].r-t}function C1(){let n=On[u.cityLevel+1];return n?{...n,curPop:u.colony.pop,curB:u.buildings.length}:null}var yp=0;function P1(n,e){zh.opacity+=((e?.45:.1)-zh.opacity)*Math.min(1,n*4);let t=On[u.cityLevel].r;if(va<t&&(va=Math.min(t,va+n*40),R1(va)),yp-=n,yp>0)return;yp=1;let i=On[u.cityLevel+1];if(i&&u.colony.pop>=i.pop&&u.buildings.length>=i.b){u.cityLevel++,Y.play("chapter"),u.events.emit("cityLevel",On[u.cityLevel]);let s=new w(di.x,ve(di.x,di.z)+2,di.z);fe.burst(s,[.4,.9,1],120,18)}}var Ol=[],Lw={mars:6178362,europa:9214120,kepler:5921384}[st],_p,Us,Oh=!0;function Dw(){return _p||(_p=new ge({color:Lw,roughness:.95,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),_p}function Uw(n,e,t,i){let s=t-n,r=i-e,o=Math.hypot(s,r);if(o<2)return null;let a=Math.ceil(o/1.5),l=s/o,c=r/o,h=-c,d=l,f=1.3,p=[],g=[],x=[],v=[];for(let E=0;E<=a;E++){let M=E/a,D=n+s*M,A=e+r*M;for(let P of[-1,1]){let I=D+h*f*P,S=A+d*f*P;p.push(I,ve(I,S)+.07,S),x.push(P<0?0:1,M*o/3)}if(E<a){let P=E*2;g.push(P,P+2,P+1,P+1,P+2,P+3)}}for(let E=4;E<o-2;E+=9)for(let M of[-1,1]){let D=n+l*E+h*(f+.35)*M,A=e+c*E+d*(f+.35)*M;v.push(D,ve(D,A)+.25,A)}let m=new At;m.setAttribute("position",new at(p,3)),m.setAttribute("uv",new at(x,2)),m.setIndex(g),m.computeVertexNormals();let _=new se(m,Dw());return _.receiveShadow=!0,u.scene.add(_),{mesh:_,lamp:v}}function I1(n){if(n.type==="lamp")return;let e=null,t=70;for(let d of u.buildings){if(d===n||d.type==="lamp")continue;let f=Math.hypot(d.x-n.x,d.z-n.z)-d.def.r-n.def.r;f<t&&(t=f,e=d)}if(!e)return;let i=e.x-n.x,s=e.z-n.z,r=Math.hypot(i,s),o=n.x+i/r*(n.def.r+.5),a=n.z+s/r*(n.def.r+.5),l=e.x-i/r*(e.def.r+.5),c=e.z-s/r*(e.def.r+.5),h=Uw(o,a,l,c);h&&(Ol.push({...h,a:n,b:e}),Oh=!0)}function L1(n){for(let e=Ol.length-1;e>=0;e--){let t=Ol[e];(t.a===n||t.b===n)&&(u.scene.remove(t.mesh),t.mesh.geometry.dispose(),Ol.splice(e,1),Oh=!0)}}function D1(){if(Oh){Oh=!1,Us&&(u.scene.remove(Us),Us.geometry.dispose());let n=Ol.flatMap(e=>e.lamp);if(n.length){let e=new At;e.setAttribute("position",new at(n,3)),Us=new yi(e,new ci({size:.9,map:zn(),color:8382207,transparent:!0,depthWrite:!1,blending:ke})),Us.frustumCulled=!1,u.scene.add(Us)}else Us=null}Us&&(Us.material.opacity=.15+u.time.night*.85)}var xa={peace:{name:"\u548C\u5E73",desc:"\u6CA1\u6709\u9508\u8680\u86DB\uFF0C\u5B89\u5FC3\u5EFA\u8BBE",o2:.7,foe:0,dmg:0,yield:1.3},normal:{name:"\u6807\u51C6",desc:"\u63A8\u8350\u7684\u4F53\u9A8C",o2:1,foe:1,dmg:1,yield:1},hard:{name:"\u56F0\u96BE",desc:"\u6C27\u6C14\u6D88\u8017\u66F4\u5FEB\uFF0C\u654C\u4EBA\u66F4\u591A\u66F4\u51F6",o2:1.35,foe:1.6,dmg:1.5,yield:.85}},N1={story:{name:"\u5267\u60C5\u6A21\u5F0F",desc:"\u8DDF\u968F\u7AE0\u8282\uFF0C\u4ECE\u7740\u9646\u4E00\u8DEF\u8D70\u5230\u661F\u9645\u6587\u660E"},free:{name:"\u81EA\u7531\u6A21\u5F0F",desc:"\u6CA1\u6709\u4E3B\u7EBF\uFF0C\u6309\u81EA\u5DF1\u7684\u8282\u594F\u5F00\u62D3\u3002\u5C45\u6C11\u59D4\u6258\u4F1A\u7ED9\u4F60\u65B9\u5411"}},os=()=>xa[u.diffKey||"normal"],ti=()=>u.mode==="free",ya={pv:{name:"\u9AD8\u6548\u5149\u4F0F",cat:"\u751F\u4EA7",icon:"sun",cost:25,desc:"\u592A\u9633\u80FD\u53D1\u7535 +50%"},sieve:{name:"\u5206\u5B50\u7B5B\u5236\u6C27",cat:"\u751F\u5B58",icon:"o2",cost:30,desc:"\u5236\u6C27\u7AD9\u4E0E\u751F\u6001\u4E2D\u67A2\u4F9B\u6C27 +50%"},hydro:{name:"\u6C34\u57F9\u6280\u672F",cat:"\u751F\u5B58",icon:"food",cost:30,desc:"\u6E29\u5BA4\u4E0E\u5782\u76F4\u519C\u573A\u4EA7\u51FA +50%"},drill:{name:"\u6DF1\u5C42\u94BB\u63A2",cat:"\u751F\u5B58",icon:"water",cost:30,desc:"\u6C34\u51B0\u63D0\u53D6\u5668\u4E0E\u751F\u6001\u4E2D\u67A2\u4F9B\u6C34 +50%"},laser2:{name:"\u91C7\u77FF\u6FC0\u5149 II",cat:"\u751F\u4EA7",icon:"laser",cost:35,desc:"\u624B\u52A8\u91C7\u77FF\u901F\u5EA6 +50%"},suit:{name:"\u5B87\u822A\u670D\u5FAA\u73AF\u7CFB\u7EDF",cat:"\u751F\u5B58",icon:"tank",cost:40,desc:"\u91CE\u5916\u6C27\u6C14\u6D88\u8017 -35%"},alloy:{name:"\u5F3A\u5316\u5408\u91D1",cat:"\u519B\u4E8B",icon:"shield",cost:50,desc:"\u6240\u6709\u5EFA\u7B51\u8010\u4E45 +50%"},plasma:{name:"\u7B49\u79BB\u5B50\u805A\u7126",cat:"\u519B\u4E8B",icon:"focus",cost:60,desc:"\u70AE\u5854\u4F24\u5BB3 +50%\uFF0C\u5C04\u7A0B +10 \u7C73"},swarm:{name:"\u65E0\u4EBA\u673A\u96C6\u7FA4",cat:"\u751F\u4EA7",icon:"drone",cost:60,desc:"\u6BCF\u5EA7\u65E0\u4EBA\u673A\u7AD9\u591A\u4E00\u67B6\u65E0\u4EBA\u673A"},terrain:{name:"\u5168\u5730\u5F62\u60AC\u6302",cat:"\u751F\u4EA7",icon:"rover",cost:45,desc:"\u6F2B\u6E38\u8F66\u6781\u901F +30%"},pr:{name:"\u79FB\u6C11\u5BA3\u4F20",cat:"\u6B96\u6C11",icon:"pop",cost:70,desc:"\u79FB\u6C11\u98DE\u8239\u6765\u5F97\u66F4\u52E4\uFF0C\u6BCF\u6B21\u591A\u5E26 2 \u4EBA"},atmo:{name:"\u5927\u6C14\u5DE5\u7A0B",cat:"\u6B96\u6C11",icon:"planet",cost:120,desc:"\u5927\u6C14\u6539\u9020\u901F\u5EA6 \xD72"},fusion:{name:"\u7D27\u51D1\u805A\u53D8",cat:"\u751F\u4EA7",icon:"power",cost:100,desc:"\u805A\u53D8\u53CD\u5E94\u5806\u53D1\u7535 +40%"},culture:{name:"\u6B96\u6C11\u5730\u6587\u5316",cat:"\u6B96\u6C11",icon:"book",cost:80,desc:"\u5C45\u6C11\u5DE5\u4F5C\u4EA7\u51FA \xD72"}},Gt=n=>!!(u.tech&&u.tech[n]);function Tp(n){let e=ya[n];return!e||Gt(n)||(u.rp||0)<e.cost?(Y.play("deny"),!1):(u.rp-=e.cost,u.tech={...u.tech||{},[n]:!0},Y.play("craft"),u.events.emit("toast",`\u2713 \u7814\u7A76\u5B8C\u6210\uFF1A${e.name}`),u.events.emit("researched",n),!0)}function Fh(){let n=0;for(let e of u.buildings)e.type==="lab"&&e.powered&&(n+=[0,1,1.6,2.2][e.level||1]);return n*(.12+u.colony.pop*.01)}var U1={iron:1,ice:1.2,silicon:1.5,titanium:6};function Rp(n,e,t){return Math.floor(t*U1[n]/U1[e]*.8)}function H1(n,e,t){let i=Rp(n,e,t);return n===e||i<=0||(u.res[n]||0)<t?(Y.play("deny"),0):(u.res[n]-=t,u.res[e]+=i,Y.play("pickup"),u.stats.traded=(u.stats.traded||0)+1,i)}var Nw=["\u6797\u6653","Amara Okafor","\u9648\u9ED8","Mateo Silva","\u82CF\u5FF5","Yuki Tanaka","\u738B\u5927\u5C71","\u5468\u9752\u79BE","Priya Sharma","\u674E\u957F\u98CE"],Ep={solar:"\u592A\u9633\u80FD\u9635\u5217",oxygen:"\u5236\u6C27\u7AD9",lamp:"\u7167\u660E\u706F",habitat:"\u5C45\u4F4F\u7A79\u9876",greenhouse:"\u6E29\u5BA4",extractor:"\u6C34\u51B0\u63D0\u53D6\u5668",turret:"\u9632\u5FA1\u70AE\u5854",drones:"\u65E0\u4EBA\u673A\u7AD9",plaza:"\u4E2D\u592E\u5E7F\u573A",lab:"\u7814\u7A76\u6240",trade:"\u8D38\u6613\u7AD9",apartment:"\u516C\u5BD3\u5854",vfarm:"\u5782\u76F4\u519C\u573A"},io={build:["\u6211\u4EEC\u9700\u8981\u4E00\u5EA7{x}\u3002\u62DC\u6258\u4E86\uFF01","\u5982\u679C\u6709{x}\uFF0C\u5927\u5BB6\u7684\u65E5\u5B50\u4F1A\u597D\u8FC7\u5F88\u591A\u3002","\u80FD\u518D\u5EFA\u4E00\u5EA7{x}\u5417\uFF1F"],mine:["\u4ED3\u5E93\u91CC\u7684{x}\u5FEB\u89C1\u5E95\u4E86\uFF0C\u80FD\u5E2E\u5FD9\u91C7\u4E00\u4E9B\u5417\uFF1F","\u6211\u7684\u5B9E\u9A8C\u9700\u8981{x}\u3002"],kill:["\u591C\u91CC\u90A3\u4E9B\u9508\u8680\u86DB\u5435\u5F97\u5B69\u5B50\u4EEC\u7761\u4E0D\u7740\u3002","\u5DE1\u903B\u961F\u9700\u8981\u652F\u63F4\uFF0C\u5E2E\u6211\u4EEC\u6E05\u7406\u4E00\u4E0B\u9644\u8FD1\u3002"],upgrade:["\u8BBE\u65BD\u8BE5\u5347\u7EA7\u4E86\uFF0C\u80FD\u628A\u54EA\u4E00\u5EA7\u5347\u5230 2 \u7EA7\u5417\uFF1F"],relic:["\u6211\u5728\u65E7\u6863\u6848\u91CC\u770B\u5230\u9644\u8FD1\u6709\u9057\u8FF9\u7684\u8BB0\u5F55\uFF0C\u4F60\u80FD\u53BB\u770B\u770B\u5417\uFF1F"],pop:["\u6211\u4EEC\u51C6\u5907\u597D\u8FCE\u63A5\u66F4\u591A\u7684\u4EBA\u4E86\u3002"],scan:["\u8BA9\u5C0F\u661F\u626B\u63CF\u4E00\u4E0B\u9644\u8FD1\u7684\u77FF\u85CF\u5427\uFF0C\u6211\u60F3\u753B\u4E00\u5F20\u5730\u56FE\u3002"]},ei=n=>n[Math.floor(Math.random()*n.length)];function k1(n){return u.buildings.filter(e=>e.type===n).length}function Hw(n){let e=["build","build","mine","mine","scan"];(u.enemies.length||(u.nightsSurvived||0)>0)&&e.push("kill"),u.buildings.length>4&&e.push("upgrade"),n.relicLeft()&&e.push("relic"),u.buildings.some(a=>a.type==="beacon")&&e.push("pop");let t=ei(e),i=u.colonists.length?ei(u.colonists).name:ei(Nw),s={id:Date.now()+Math.random(),kind:t,giver:i},r=1+(u.cityLevel||0)*.5;if(t==="build"){let a=Object.keys(Ep).filter(c=>n.unlocked(c)),l=ei(a.length?a:["solar"]);Object.assign(s,{t:l,base:k1(l),n:1,text:`\u5EFA\u9020${Ep[l]}`,line:ei(io.build).replace("{x}",Ep[l])})}else if(t==="mine"){let a=ei(u.cityLevel>=2?["iron","silicon","ice","titanium"]:["iron","silicon","ice"]),l=Math.round((a==="titanium"?8:25)*r);Object.assign(s,{t:a,base:u.stats.mined[a],n:l,text:`\u91C7\u96C6${sn[a].name} ${l}`,line:ei(io.mine).replace("{x}",sn[a].name)})}else if(t==="kill"){let a=Math.round(4*r);Object.assign(s,{base:u.stats.kills,n:a,text:`\u51FB\u9000\u9508\u8680\u86DB ${a} \u53EA`,line:ei(io.kill)})}else t==="upgrade"?Object.assign(s,{base:u.buildings.filter(a=>(a.level||1)>=2).length,n:1,text:"\u628A\u4E00\u5EA7\u5EFA\u7B51\u5347\u5230 2 \u7EA7",line:ei(io.upgrade)}):t==="relic"?Object.assign(s,{base:n.relicFound(),n:1,text:"\u8C03\u67E5\u4E00\u5904\u9057\u8FF9",line:ei(io.relic)}):t==="pop"?Object.assign(s,{base:u.colony.pop,n:4,text:"\u8FCE\u63A5 4 \u4F4D\u65B0\u79FB\u6C11",line:ei(io.pop)}):Object.assign(s,{base:u.stats.scans||0,n:1,text:"\u7528\u5C0F\u661F\u626B\u63CF\u4E00\u6B21\uFF08Q\uFF09",line:ei(io.scan)});let o=["iron","silicon","ice"];return s.reward={[ei(o)]:Math.round(20*r),[ei(o)]:Math.round(15*r)},u.cityLevel>=1&&(s.reward.titanium=Math.round(2*r)),s.rp=Math.round(8*r),s}function z1(n,e){switch(n.kind){case"build":return k1(n.t)-n.base;case"mine":return u.stats.mined[n.t]-n.base;case"kill":return u.stats.kills-n.base;case"upgrade":return u.buildings.filter(t=>(t.level||1)>=2).length-n.base;case"relic":return e.relicFound()-n.base;case"pop":return u.colony.pop-n.base;default:return(u.stats.scans||0)-n.base}}function O1(n,e){return Math.max(0,Math.min(n.n,z1(n,e)))}var bp=25,wp=0;function F1(n,e){if(kw(n),u.rp=(u.rp||0)+Fh()*n,u.requests=u.requests||[],u.buildings.length&&!u.ended){bp-=n;let t=ti()?3:2;if(bp<=0&&u.requests.length<t){bp=ti()?60:110;let i=Hw(e);u.requests.push(i),u.events.emit("request",i)}}if(wp-=n,!(wp>0)){wp=.5;for(let t=u.requests.length-1;t>=0;t--){let i=u.requests[t];if(z1(i,e)>=i.n){u.requests.splice(t,1);for(let s in i.reward)u.res[s]+=i.reward[s],u.events.emit("pickup",{type:s,n:i.reward[s],note:"\u59D4\u6258\u5956\u52B1"});u.rp=(u.rp||0)+i.rp,u.stats.requests=(u.stats.requests||0)+1,Y.play("objective"),u.events.emit("requestDone",i)}}}}var Sp=0;function kw(n){if(Sp-=n,Sp>0)return;Sp=2;let e=u.colony,t=Math.max(1,e.pop),i=[],s=55,r=g=>Math.max(-1,Math.min(1,(e[g]-e.pop)/t)),o=(r("food")+r("o2")+r("water"))*6;s+=o,i.push(["\u751F\u6D3B\u7269\u8D44",o]);let a=u.buildings.filter(g=>g.type==="lamp").length,l=u.buildings.some(g=>g.type==="plaza"&&g.powered),c=Math.min(8,a*1.5)+(l?12:0);s+=c,i.push(["\u7167\u660E\u4E0E\u5E7F\u573A",c]);let h=Math.min(10,u.buildings.filter(g=>g.type==="greenhouse"||g.type==="vfarm").length*3);s+=h,i.push(["\u7EFF\u8272\u690D\u7269",h]);let d=u.buildings.filter(g=>g.broken).length*-6+(e.deficit?-10:0);s+=d,i.push(["\u635F\u574F\u4E0E\u505C\u7535",d]);let f=u.buildings.some(g=>g.type==="turret")?6:os().foe>0&&(u.nightsSurvived||0)>0?-8:0;s+=f,i.push(["\u5B89\u5168\u611F",f]);let p=e.housing&&e.pop>e.housing*.9?-8:0;s+=p,i.push(["\u4F4F\u623F\u62E5\u6324",p]),Gt("culture")&&(s+=10,i.push(["\u6B96\u6C11\u5730\u6587\u5316",10])),u.festival&&(s+=15,i.push(["\u6B96\u6C11\u5730\u8282",15])),u.morale=Math.round(Math.max(0,Math.min(100,s))),u.moraleFactors=i.filter(g=>Math.abs(g[1])>=.5)}var Ap=()=>.5+(u.morale??60)/100;var V1=new Oe(1,1,1,6,1,!0);V1.translate(0,.5,0);var zw=new w(0,1,0),Ma=new w;function Ow(n){let e=1+(n.level||1)+(Gt("swarm")?1:0);for(n.drones=n.drones||[];n.drones.length<e;){let t=$g(),i=new se(V1,new Ne({color:16752720,transparent:!0,opacity:.8,blending:ke,depthWrite:!1}));i.visible=!1,i.frustumCulled=!1,u.scene.add(t.group,i);let s=n.drones.length,r=new w(n.x+[-1.9,1.9,-1.9,1.9][s%4],n.y+1.1,n.z+[-1.9,-1.9,1.9,1.9][s%4]);t.group.position.copy(r),n.drones.push({...t,beam:i,dock:r,state:"dock",t:1+s*1.3,node:null,cargo:null,pos:t.group.position})}}function G1(n){for(let e of n.drones||[])u.scene.remove(e.group,e.beam),e.node&&(e.node.claimed=!1);n.drones=[]}function B1(n,e,t,i=15){Ma.copy(e).sub(n.pos);let s=Ma.length(),r=ve(n.pos.x,n.pos.z)+8;s>6&&(Ma.y+=(r-n.pos.y)*2),Ma.normalize().multiplyScalar(Math.min(s,i*t)),n.pos.add(Ma);let a=Math.atan2(e.x-n.pos.x,e.z-n.pos.z)-n.group.rotation.y;return a=Math.atan2(Math.sin(a),Math.cos(a)),n.group.rotation.y+=a*Math.min(1,t*4),n.group.rotation.x=Math.min(.3,s*.02),s<.6}function W1(n){let e=performance.now()*.001;for(let t of u.buildings)if(t.type==="drones"&&!(t.buildT<1)){Ow(t),t.anim.dish&&(t.anim.dish.rotation.y+=n*(t.powered?1.2:0)),t.anim.light&&(t.anim.light.visible=t.powered&&Math.sin(e*3)>-.3);for(let i of t.drones){for(let s of i.rotors)s.rotation.y+=n*40;switch(i.group.position.y+=Math.sin(e*3+i.dock.x)*.003,i.beam.visible=!1,!t.powered&&i.state!=="dock"&&(i.node&&(i.node.claimed=!1),i.node=null,i.state="back"),i.state){case"dock":{if(i.pos.lerp(i.dock,Math.min(1,n*3)),i.t-=n,i.t<=0&&t.powered){i.t=2;let s=null,r=100;for(let o of u.nodes){if(o.claimed||o.type==="titanium"&&(t.level||1)<3)continue;let a=Math.hypot(o.x-t.x,o.z-t.z);a<r&&(r=a,s=o)}s&&(s.claimed=!0,i.node=s,i.state="out")}break}case"out":{let s=i.node;if(!s||!u.nodes.includes(s)){i.node=null,i.state="back";break}B1(i,Ma.set(s.x,s.y+4.5,s.z).clone(),n)&&(i.state="mine",i.t=3.2);break}case"mine":{let s=i.node;if(!s||!u.nodes.includes(s)){i.state="back";break}i.t-=n;let r=new w(s.x+Math.sin(e*5)*.3,s.y+.6,s.z+Math.cos(e*4)*.3),o=i.pos.clone().add(new w(0,-.25,0)),a=r.clone().sub(o),l=a.length();if(i.beam.position.copy(o),i.beam.quaternion.setFromUnitVectors(zw,a.normalize()),i.beam.scale.set(.05,l,.05),i.beam.material.color.setRGB(...Ds[s.type]),i.beam.visible=!0,Math.random()<.4&&fe.spark(r,Ds[s.type],1,3,.4),i.t<=0){let c=Math.min(3,Math.ceil(s.amount));i.cargo={type:s.type,n:c},s.claimed=!1,Nh(s,c),i.node=null,i.state="back"}break}case"back":{B1(i,i.dock,n)&&(i.cargo&&(u.res[i.cargo.type]+=i.cargo.n,u.stats.mined[i.cargo.type]+=i.cargo.n,u.stats.droneHauls=(u.stats.droneHauls||0)+1,Math.hypot(u.player.pos.x-t.x,u.player.pos.z-t.z)<45&&u.events.emit("pickup",{type:i.cargo.type,n:i.cargo.n,note:"\u65E0\u4EBA\u673A"}),fe.spark(i.pos,[.5,.9,1],6,3),i.cargo=null),i.state="dock",i.t=1.5);break}}}}}var Fn={solar:{name:"\u592A\u9633\u80FD\u9635\u5217",icon:"sun",cat:"life",chapter:0,cost:{iron:8,silicon:6},power:4,r:2.6,hp:120,desc:"\u767D\u5929\u53D1\u7535 4 \u5355\u4F4D\uFF0C\u591C\u95F4\u964D\u81F3 1.6\u3002\u6B96\u6C11\u5730\u7684\u5FC3\u8DF3\u4ECE\u8FD9\u91CC\u5F00\u59CB\u3002"},oxygen:{name:"\u5236\u6C27\u7AD9",icon:"o2",cat:"life",chapter:0,cost:{iron:12,silicon:4,ice:6},power:-2,r:3,hp:160,o2:6,life:14,desc:"\u7535\u89E3\u6C34\u51B0\u5236\u9020\u6C27\u6C14\u3002\u4E3A 6 \u4F4D\u5C45\u6C11\u4F9B\u6C27\uFF0C\u5E76\u5728 14 \u7C73\u5185\u4E3A\u4F60\u7684\u5B87\u822A\u670D\u8865\u6C27\u3002"},lamp:{name:"\u7167\u660E\u706F",icon:"star",cat:"life",chapter:0,cost:{iron:3},power:0,r:.6,hp:60,desc:"\u7167\u4EAE\u706B\u661F\u7684\u957F\u591C\u3002"},habitat:{name:"\u5C45\u4F4F\u7A79\u9876",icon:"dome",cat:"life",chapter:1,cost:{iron:25,silicon:12},power:-1,r:6.4,hp:300,housing:4,life:12,desc:"\u53EF\u4F4F 4 \u4EBA\u3002\u7A79\u9876\u91CC\u6709\u6696\u5149\u3001\u690D\u7269\u548C\u5BB6\u4EBA\u7684\u7167\u7247\u3002"},greenhouse:{name:"\u6E29\u5BA4",icon:"food",cat:"life",chapter:1,cost:{iron:14,silicon:16,ice:8},power:-2,r:5.4,hp:160,food:5,desc:"\u5728\u706B\u661F\u571F\u58E4\u91CC\u79CD\u51FA\u7B2C\u4E00\u68F5\u571F\u8C46\u3002\u4F9B 5 \u4EBA\u98DF\u7269\u3002"},extractor:{name:"\u6C34\u51B0\u63D0\u53D6\u5668",icon:"water",cat:"life",chapter:1,cost:{iron:16,silicon:4,ice:4},power:-2,r:2.8,hp:160,water:6,desc:"\u4ECE\u5730\u4E0B\u51BB\u571F\u4E2D\u94BB\u53D6\u6C34\u3002\u4F9B 6 \u4EBA\u7528\u6C34\u3002"},beacon:{name:"\u7740\u9646\u573A",icon:"ship",cat:"city",chapter:1,cost:{iron:24,silicon:14},power:-1,r:7.4,hp:250,desc:"\u5411\u5730\u7403\u53D1\u51FA\u4FE1\u53F7\u3002\u6761\u4EF6\u6EE1\u8DB3\u65F6\uFF0C\u79FB\u6C11\u98DE\u8239\u4F1A\u5728\u8FD9\u91CC\u964D\u843D\u3002"},fabricator:{name:"\u5236\u9020\u5DE5\u574A",icon:"wrench",cat:"industry",chapter:2,cost:{iron:22,silicon:14},power:-1,r:4.6,hp:220,desc:"\u9760\u8FD1\u6309 E \u5236\u9020\u6B66\u5668\u4E0E\u88C5\u5907\u3002"},drones:{name:"\u65E0\u4EBA\u673A\u7AD9",icon:"drone",cat:"industry",chapter:2,cost:{iron:30,silicon:22},power:-3,r:3.8,hp:220,desc:"\u6D3E\u51FA\u91C7\u77FF\u65E0\u4EBA\u673A\uFF0C\u81EA\u52A8\u91C7\u96C6 100 \u7C73\u5185\u7684\u77FF\u70B9\u5E76\u8FD0\u56DE\u3002\u5347\u7EA7\u540E\u65E0\u4EBA\u673A\u66F4\u591A\uFF0C\u6EE1\u7EA7\u53EF\u91C7\u949B\u3002"},turret:{name:"\u9632\u5FA1\u70AE\u5854",icon:"shield",cat:"defense",chapter:2,cost:{iron:22,silicon:10},power:-2,r:1.9,hp:200,range:40,desc:"\u81EA\u52A8\u653B\u51FB 40 \u7C73\u5185\u7684\u9508\u8680\u86DB\u3002\u9700\u8981\u7535\u529B\u3002"},reactor:{name:"\u805A\u53D8\u53CD\u5E94\u5806",icon:"power",cat:"industry",chapter:3,cost:{iron:40,silicon:20,titanium:12},power:20,r:5.4,hp:400,desc:"\u663C\u591C\u4E0D\u505C +20 \u26A1\u3002\u7528\u706B\u661F\u7684\u949B\uFF0C\u70B9\u4EAE\u4EBA\u7C7B\u7684\u7B2C\u4E8C\u9897\u592A\u9633\u3002"},lab:{name:"\u7814\u7A76\u6240",icon:"book",cat:"industry",chapter:2,level:1,cost:{iron:25,silicon:25},power:-2,r:4.2,hp:260,rp:1,desc:"\u5C45\u6C11\u5728\u8FD9\u91CC\u505A\u7814\u7A76\uFF0C\u4EA7\u51FA\u79D1\u7814\u70B9\u6570\u3002\u4EBA\u53E3\u8D8A\u591A\u8D8A\u5FEB\u3002\u6309 T \u6253\u5F00\u79D1\u7814\u3002"},trade:{name:"\u661F\u9645\u8D38\u6613\u7AD9",icon:"ship",cat:"city",chapter:2,level:1,cost:{iron:30,silicon:18},power:-2,r:5,hp:260,desc:"\u4E0E\u5730\u7403\u548C\u5176\u4ED6\u6B96\u6C11\u5730\u4EA4\u6362\u7269\u8D44\u3002\u9760\u8FD1\u6309 E \u4EA4\u6613\u3002"},plaza:{name:"\u4E2D\u592E\u5E7F\u573A",icon:"planet",cat:"city",level:1,cost:{iron:20,silicon:16},power:-1,r:7.4,hp:300,desc:"\u4E2D\u5FC3\u6709\u4E00\u5EA7\u5168\u606F\u5730\u7403\u3002\u5929\u9ED1\u540E\uFF0C\u5C45\u6C11\u4EEC\u4F1A\u6765\u8FD9\u91CC\u805A\u5728\u4E00\u8D77\uFF0C\u770B\u4E00\u770B\u6545\u4E61\u3002"},apartment:{name:"\u516C\u5BD3\u5854",icon:"tower",cat:"city",level:2,cost:{iron:40,silicon:25,titanium:4},power:-3,r:4.6,hp:400,housing:12,life:12,desc:"\u53EF\u4F4F 12 \u4EBA\u3002\u7A97\u6237\u91CC\u7684\u706F\u5149\uFF0C\u662F\u57CE\u5E02\u7684\u661F\u7A7A\u3002"},vfarm:{name:"\u5782\u76F4\u519C\u573A",icon:"food",cat:"city",level:2,cost:{iron:30,silicon:30,ice:15},power:-4,r:4.2,hp:260,food:14,desc:"\u5341\u56DB\u5C42\u7684\u7ACB\u4F53\u519C\u7530\u3002\u4F9B 14 \u4EBA\u98DF\u7269\u3002"},lifehub:{name:"\u751F\u6001\u4E2D\u67A2",icon:"o2",cat:"city",level:3,cost:{iron:45,silicon:30,ice:30,titanium:6},power:-5,r:6,hp:400,o2:16,water:16,life:20,desc:"\u5927\u578B\u6C27\u6C14\u4E0E\u6C34\u5FAA\u73AF\u7CFB\u7EDF\u3002\u4F9B 16 \u4EBA\u6C27\u6C14\u548C\u7528\u6C34\uFF0C20 \u7C73\u5185\u8865\u6C27\u3002"},terraformer:{name:"\u5927\u6C14\u6539\u9020\u5854",icon:"planet",cat:"stellar",chapter:4,only:"terraformable",cost:{iron:100,silicon:60,titanium:30,ice:50},power:-12,r:7.4,hp:800,desc:"\u5411\u5929\u7A7A\u91CA\u653E\u6E29\u5BA4\u6C14\u4F53\u4E0E\u6C34\u6C7D\u3002\u8BA9\u8FD9\u9897\u661F\u7403\uFF0C\u771F\u6B63\u6210\u4E3A\u5BB6\u3002"},launch:{name:"\u661F\u9645\u53D1\u5C04\u53F0",icon:"ship",cat:"stellar",chapter:5,level:st==="mars"?5:4,only:"route",cost:{iron:160,silicon:120,titanium:60,ice:60},power:-15,r:9.5,hp:900,desc:"\u661F\u9645\u822A\u7EBF\u7684\u8D77\u70B9\u3002\u9760\u8FD1\u6309 E \u6253\u5F00\u661F\u56FE\uFF0C\u524D\u5F80\u65B0\u7684\u661F\u7403\u6216\u56DE\u5230\u5DF2\u5F00\u62D3\u7684\u5BB6\u56ED\u3002"},monument:{name:"\u6587\u660E\u7EAA\u5FF5\u7891",icon:"monument",cat:"stellar",level:5,only:"final",cost:{iron:150,silicon:120,titanium:80},power:-6,r:6.5,hp:900,desc:"\u4E09\u9897\u661F\u7403\uFF0C\u4E00\u4E2A\u4EBA\u7C7B\u3002\u732E\u7ED9\u6240\u6709\u51FA\u53D1\u7684\u4EBA\u3002"}},Ip=3,Pp=[1,1,1.6,2.2],Fw=["lamp","beacon","fabricator","plaza","trade","terraformer","launch","monument"];function Bh(n){return!Fw.includes(n.type)&&(n.level||1)<Ip}function Wi(n,e){let t=n.def,i=n.level||1,s=t[e];if(!s)return 0;if(e==="power")return s>0?s*Pp[i]*(n.type==="solar"&&Gt("pv")?1.5:1)*(n.type==="reactor"&&Gt("fusion")?1.4:1):s*(1+.25*(i-1));if(e==="life")return s+3*(i-1);if(e==="range")return s+8*(i-1)+(Gt("plasma")?10:0);if(e==="hp")return s*(1+.5*(i-1))*(Gt("alloy")?1.5:1);let r=e==="o2"&&Gt("sieve")||e==="food"&&Gt("hydro")||e==="water"&&Gt("drill")?1.5:1;return Math.round(s*Pp[i]*r)}function Lp(n){let e=n.level||1,t={};for(let i in n.def.cost)t[i]=Math.ceil(n.def.cost[i]*(e===1?.8:1.3));return t.titanium=(t.titanium||0)+(e===1?3:8),t}function $1(n){if(!Bh(n))return!1;let e=Lp(n);return Bi(e)?(_l(e),n.level=(n.level||1)+1,X1(n,!0),Y.play("place"),fe.ring(new w(n.x,n.y,n.z),n.def.r*1.2,60,[.5,.9,1]),ls(),!0):!1}function X1(n,e){let t=n.level||1;n.maxHp=Wi(n,"hp"),n.hp=Math.min(n.maxHp,e?n.maxHp:n.hp);let i=1+(t-1)*.12;n.group.scale.set(i,n.group.scale.y,i),n.baseScale=i,n.anim._pips&&n.anim._pips.forEach(r=>n.group.remove(r)),n.anim._pips=[];let s=Math.max(2.5,n.def.r*.9);for(let r=1;r<t;r++)n.anim._pips.push(_e(16757596,1.4,n.group,(r-t/2)*.9,s+1.2,0));if(e){n.buildT=.35;let r=new se(new De(n.def.r*1.05,.08,6,48),q1.clone());r.rotation.x=Math.PI/2,r.position.set(n.x,n.y,n.z),u.scene.add(r),n.anim._scan=r}}function cs(n){let e=Fn[n];return e.only==="terraformable"&&!Me.terraformable?{hide:!0}:e.only==="route"&&!Me.next&&!(mn.visited||[]).some(t=>t.id!==st)?{hide:!0}:e.only==="final"&&Me.next?{hide:!0}:!ti()&&st==="mars"&&e.chapter&&e.chapter>u.chapter?{ok:!1,why:"\u5267\u60C5\u63A8\u8FDB\u540E\u89E3\u9501"}:e.level&&e.level>u.cityLevel?{ok:!1,why:`\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C${On[e.level].name}\u300D\u89E3\u9501`}:{ok:!0}}var Dp=["solar","oxygen","lamp","habitat","greenhouse","extractor","beacon","fabricator","drones","lab","trade","turret","reactor","plaza","apartment","vfarm","lifehub","terraformer","launch","monument"],Bw=["oxygen","lifehub","turret","habitat","apartment","extractor","greenhouse","vfarm","beacon","plaza","lab","trade","drones","fabricator","terraformer","launch","monument"],q1=new Ne({color:8382207,transparent:!0,opacity:.8,blending:ke,depthWrite:!1,side:Rt});function Vh(n,e,t,i=0,s,r=!1,o=1){let a=Fn[n],l=new ue,c={};Zn[n](l,c);let h=ve(e,t);if(l.position.set(e,h,t),l.rotation.y=i,u.scene.add(l),r){l.scale.set(1,.001,1);let f=new se(new De(a.r*1.05,.08,6,48),q1.clone());f.rotation.x=Math.PI/2,f.position.set(e,h,t),u.scene.add(f),c._scan=f}let d={buildT:r?0:1,type:n,def:a,x:e,z:t,y:h,rot:i,group:l,anim:c,hp:s??a.hp,broken:s!==void 0&&s<=0,powered:!0,t:Math.random()*10,cool:0};return d.collider=u.colliders.add({x:e,z:t,r:a.r*(n==="beacon"?.15:n==="plaza"?.28:.9),kind:"building",b:d}),d.level=o,d.maxHp=Wi(d,"hp"),s===void 0&&(d.hp=d.maxHp),o>1&&X1(d,!1),u.buildings.push(d),u.stats.built[n]=(u.stats.built[n]||0)+1,I1(d),ls(),d}function Y1(n,e=!1){if(e)for(let s in n.def.cost)u.res[s]+=Math.floor(n.def.cost[s]*.5);u.scene.remove(n.group),u.colliders.remove(n.collider),L1(n),n.type==="drones"&&G1(n);let t=u.buildings.indexOf(n);t>=0&&u.buildings.splice(t,1),u.stats.built[n.type]=Math.max(0,(u.stats.built[n.type]||0)-1);let i=new w(n.x,n.y+2,n.z);fe.burst(i,[1,.6,.3],60,10),fe.dustPuff(i,30,n.def.r*2),_r(i,Math.min(3,n.def.r*.45),16752720),ls()}function Z1(n){return u.buildings.filter(e=>e.type===n).length}function ls(){let n=u.colony,e=(u.time.elevation>.05?1:.4)*Me.solar,t=0,i=0;for(let r of u.buildings){if(r.broken)continue;let o=Wi(r,"power");o>0?t+=r.type==="solar"?o*e:o:i-=o}let s=t;for(let r of u.buildings)r.powered=r.def.power>=0&&!r.broken,r.maxHp=Wi(r,"hp");for(let r of Bw)for(let o of u.buildings){if(o.type!==r)continue;let a=Wi(o,"power");!o.broken&&s>=-a&&(s+=a,o.powered=!0)}n.powerProd=t,n.powerUse=i,n.deficit=i>t+.001,n.housing=0,n.o2=0,n.food=0,n.water=0;for(let r of u.buildings)n.housing+=Wi(r,"housing"),r.powered&&(n.o2+=Wi(r,"o2"),n.food+=Wi(r,"food"),n.water+=Wi(r,"water"));n.support=Math.min(n.housing,n.o2,n.food,n.water)}function K1(n){for(let e of u.buildings){let t=Wi(e,"life");if(!t||!e.powered)continue;let i=e.x-n.x,s=e.z-n.z;if(i*i+s*s<t*t)return e}return null}var as=null,Vw=null,J1=new Ne({color:5636010,transparent:!0,opacity:.35,depthWrite:!1}),Gw=new Ne({color:16729156,transparent:!0,opacity:.35,depthWrite:!1}),bi,Ct={type:null,rot:0,valid:!1,reason:"",x:0,z:0};function so(n){if(as&&(u.scene.remove(as),as=null),Ct.type=n,Vw=n,!n){bi&&(bi.visible=!1);return}let e=new ue;Zn[n](e,{}),e.traverse(i=>{i.isMesh&&(i.material=J1,i.castShadow=!1,i.receiveShadow=!1),(i.isSprite||i.userData.found)&&(i.visible=!1)}),as=e,u.scene.add(e),bi||(bi=new se(new tn(.96,1,64),new Ne({color:6741503,transparent:!0,opacity:.5,depthWrite:!1,side:Rt})),bi.rotation.x=-Math.PI/2,u.scene.add(bi));let t=Fn[n].life||Fn[n].range||0;bi.visible=t>0,bi.scale.setScalar(t||1)}function j1(n,e){if(!as)return;if(!n){as.visible=!1,bi.visible=!1,Ct.valid=!1,Ct.reason="\u5BF9\u51C6\u5730\u9762";return}as.visible=!0;let t=Fn[Ct.type],i=n.x,s=n.z,r=Math.hypot(i-e.x,s-e.z),o=t.r+1.2;if(r<o){let h=r>.01?(i-e.x)/r:-Math.sin(u.player.yaw),d=r>.01?(s-e.z)/r:-Math.cos(u.player.yaw);i=e.x+h*o,s=e.z+d*o,r=o}let a=ve(i,s);as.position.set(i,a,s),as.rotation.y=Ct.rot,Ct.x=i,Ct.z=s,bi.scale.x>1&&(bi.visible=!0,bi.position.set(i,a+.3,s));let l="";Bi(t.cost)?Jr(i,s,Math.max(1.5,t.r*.7))>(t.r>4?.32:.45)?l="\u5730\u9762\u592A\u9661":u.colliders.overlaps(i,s,t.r*.85)?l="\u4F4D\u7F6E\u88AB\u5360\u7528":r<t.r+.8?l="\u79BB\u81EA\u5DF1\u592A\u8FD1":Math.abs(i)>Qe-170||Math.abs(s)>Qe-170?l="\u8D85\u51FA\u53EF\u5EFA\u9020\u533A\u57DF":A1(i,s,t.r)||(l="\u8D85\u51FA\u6B96\u6C11\u5730\u9886\u5730\uFF08\u63D0\u5347\u57CE\u5E02\u7B49\u7EA7\u6765\u6269\u5F20\uFF09"):l="\u8D44\u6E90\u4E0D\u8DB3",Ct.valid=!l,Ct.reason=l;let c=l?Gw:J1;as.traverse(h=>{h.isMesh&&(h.material=c)})}function Q1(){if(!Ct.type||!Ct.valid)return Y.play("deny"),null;let n=Fn[Ct.type];_l(n.cost);let e=Vh(Ct.type,Ct.x,Ct.z,Ct.rot,void 0,!0);return Y.play("place"),fe.ring(new w(e.x,e.y,e.z),n.r,50),e}var Cp=0;function Up(n,e){Cp-=n,Cp<=0&&(Cp=.5,ls()),D1(),W1(n);let t=u.time.night,i=performance.now()*.001;y.window.emissiveIntensity=.3+t*.85,y.lamp.emissiveIntensity=t*4;for(let s of Sl)s.emissiveIntensity=.15+t*1.4;for(let s of u.buildings){let r=s.anim,o=s.powered;if(s.t+=n,s.buildT<1){s.buildT=Math.min(1,s.buildT+n/1.3);let a=s.buildT,l=1+2.2*Math.pow(a-1,3)+1.2*Math.pow(a-1,2);s.group.scale.y=Math.max(.001,l)*(s.baseScale||1);let c=Math.max(3,s.def.r*1.4)*(s.type==="apartment"||s.type==="launch"||s.type==="terraformer"||s.type==="monument"?4:1);r._scan.position.y=s.y+a*c,r._scan.material.opacity=.8*(1-a),r._scan.scale.setScalar(1-a*.25),Math.random()<.5&&fe.spark(new w(s.x+(Math.random()-.5)*s.def.r*2,s.y+a*c,s.z+(Math.random()-.5)*s.def.r*2),[.5,.9,1],1,2,.6),a>=1&&(u.scene.remove(r._scan),r._scan.geometry.dispose(),delete r._scan)}switch(s.hp<s.maxHp&&u.time.night<.5&&(s.hp=Math.min(s.maxHp,s.hp+n*(s.broken?5:2)),s.broken&&s.hp>=s.maxHp*.5&&(s.broken=!1,ls(),u.events.emit("toast",`\u2713 ${s.def.name} \u5DF2\u4FEE\u590D\uFF0C\u6062\u590D\u8FD0\u8F6C`))),s.broken&&Math.random()<n*6&&fe.dustPuff(new w(s.x+(Math.random()-.5)*s.def.r,s.y+1.5,s.z+(Math.random()-.5)*s.def.r),1,.5,[.15,.13,.12]),s.type){case"solar":{let a=new w(An.x,Math.max(An.y,.2),An.z).applyAxisAngle(new w(0,1,0),-s.rot);r.pivot.rotation.y=Math.atan2(a.x,a.z),r.panel.rotation.x=Math.PI/2-Math.asin(Math.min(1,a.y/a.length()));break}case"oxygen":o&&(r.fan.rotation.z+=n*8),r.light.visible=o;break;case"extractor":o&&(r.drill.position.y=3+Math.sin(s.t*3)*.8),r.light.visible=o;break;case"greenhouse":r.light.material.opacity=o?.3+t*.5:0;break;case"fabricator":o?(r.arm.rotation.y=Math.sin(s.t*.8)*1.2,r.spark.visible=Math.sin(s.t*7)>.6):r.spark.visible=!1;break;case"habitat":r.tip.visible=Math.sin(i*2+s.x)>.3;break;case"apartment":r.tip.visible=Math.sin(i*2+s.z)>.3;break;case"vfarm":r.light.material.opacity=o?.25+t*.5:0;break;case"lifehub":o&&(r.fan.rotation.y+=n*3),r.light.visible=o;break;case"plaza":r.earth.rotation.y+=n*.25,r.earth.position.y=4+Math.sin(i*.8)*.15,r.earth.material.opacity=o?.55-t*.15:.15,r.halo.material.opacity=o?.25+t*.2:0;break;case"lab":r.scope&&(r.scope.rotation.z=Math.sin(i*.2)*.4),r.tip&&(r.tip.visible=Math.sin(i*2.5)>0),r.light&&(r.light.visible=o);break;case"trade":r.jib&&(r.jib.rotation.y=Math.sin(i*.15)*1.2),r.tip&&(r.tip.visible=Math.sin(i*3)>0);break;case"monument":r.rings.forEach((a,l)=>{a.rotation.x=i*(.3+l*.2),a.rotation.y=i*(.2+l*.15)});break;case"reactor":r.r1.rotation.y+=n*.8,r.r2.rotation.z+=n*.6,r.light.material.opacity=.5+Math.sin(i*3)*.2;break;case"beacon":{let a=Math.floor(i*6)%8;r.lights.forEach((l,c)=>{l.visible=o&&(c===a||c===(a+4)%8||t>.3)}),r.tip.visible=Math.sin(i*3)>0;break}case"lamp":r.glow.visible=t>.2,r.glow.material.opacity=t*.6;break;case"turret":Ww(s,n,e);break;case"terraformer":{r.rings.forEach((a,l)=>{a.position.y=10+l*8+Math.sin(i*1.5+l)*1.5,a.rotation.x=Math.sin(i+l)*.2}),r.beam.material.opacity=o&&u.terraform<1?.18+Math.sin(i*4)*.05:0,o&&u.terraform<1&&Math.random()<.6&&fe.rise(new w(s.x,s.y+28,s.z),[.4,.9,1],4);break}}}}function Ww(n,e,t){let i=n.anim;if(i.eye.visible=n.powered,!n.powered)return;n.cool-=e;let s=null,r=Wi(n,"range");for(let l of u.enemies){if(l.dead)continue;let c=Math.hypot(l.pos.x-n.x,l.pos.z-n.z);c<r&&(r=c,s=l)}if(!s){i.head.rotation.y+=e*.4;return}let a=Math.atan2(-(s.pos.x-n.x),-(s.pos.z-n.z))-n.rot-i.head.rotation.y;if(a=Math.atan2(Math.sin(a),Math.cos(a)),i.head.rotation.y+=Math.sign(a)*Math.min(Math.abs(a),e*5),Math.abs(a)<.15&&n.cool<=0){n.cool=.45;let l=new w(n.x,n.y+2.7,n.z),c=s.pos.clone();c.y+=1;let h=c.sub(l).normalize();l.addScaledVector(h,2.2),t.shoot(l,h,15*Pp[n.level||1]*(Gt("plasma")?1.5:1),"turret"),Y.play("turret")}}function ev(){return u.buildings.map(n=>[n.type,+n.x.toFixed(2),+n.z.toFixed(2),+n.rot.toFixed(3),Math.round(n.hp),n.level||1])}var Fl=new w;function wi(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Fl.copy(e),Fl[i]=0,Fl.normalize();let c=.5*o/(o+a),h=1-Fl.angleTo(n)/l;return Math.sign(Fl[t])===1?h*c:a/(o+a)+c+c*(1-h)}var _a=class extends Ye{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new w,l=new w,c=new w(e,t,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=h.length/6,g=new w,x=.5/s;for(let v=0,m=0;v<h.length;v+=3,m+=2)switch(a.fromArray(h,v),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[v+0]=c.x*Math.sign(a.x)+l.x*r,h[v+1]=c.y*Math.sign(a.y)+l.y*r,h[v+2]=c.z*Math.sign(a.z)+l.z*r,d[v+0]=l.x,d[v+1]=l.y,d[v+2]=l.z,Math.floor(v/p)){case 0:g.set(1,0,0),f[m+0]=wi(g,l,"z","y",r,i),f[m+1]=1-wi(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),f[m+0]=1-wi(g,l,"z","y",r,i),f[m+1]=1-wi(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),f[m+0]=1-wi(g,l,"x","z",r,e),f[m+1]=wi(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),f[m+0]=1-wi(g,l,"x","z",r,e),f[m+1]=1-wi(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),f[m+0]=1-wi(g,l,"x","y",r,e),f[m+1]=1-wi(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),f[m+0]=wi(g,l,"x","y",r,e),f[m+1]=1-wi(g,l,"y","x",r,t);break}}};var ne=(n,e,t)=>new w(n,e,t);function C(n,e,t=0,i=0,s=0,r,o=0,a=0,l=0){let c=new se(n,e);return c.position.set(t,i,s),c.rotation.set(o,a,l),c.castShadow=!0,c.receiveShadow=!0,r&&r.add(c),c}var pe=(n,e,t,i=.06)=>new _a(n,e,t,2,Math.min(i,n/2.1,e/2.1,t/2.1)),Te=(n,e,t,i=24,s=!1)=>new Oe(n,e,t,i,1,s),kt=(n,e=32)=>new As(n.map(([t,i])=>new te(t,i)),e);function Tt(n,e,t,i,s,r=10){let o=e.clone().sub(n),a=o.length(),l=C(Te(t,t,a,r),i,0,0,0,s);return l.position.copy(n).add(e).multiplyScalar(.5),l.quaternion.setFromUnitVectors(ne(0,1,0),o.normalize()),l}function $w(n,e,t,i,s){let r=Tt(n,e,t,i,s);for(let o of[n,e]){let a=Tt(o.clone().lerp(e===o?n:e,.02),o,t*1.6,y.metal,s);a.scale.y=1}return r}function Si(n,e,t,i,s=32){let r=new pl(n);return C(new rh(r,s,e,8,!1),t,0,0,0,i)}function Xw(n,e,t,i,s,r){let o=n.clone().lerp(e,.5);return o.y-=t,Si([n,n.clone().lerp(o,.5).add(ne(0,-t*.15,0)),o,e.clone().lerp(o,.5).add(ne(0,-t*.15,0)),e],i,s,r,24)}function Wh(n,e,t,i,s,r=0,o=.5){let a=new ue;a.position.set(e,t,i),a.rotation.y=r,n.add(a),C(Te(.035,.035,s,6),y.metal,-o/2,s/2,0,a),C(Te(.035,.035,s,6),y.metal,o/2,s/2,0,a);for(let l=.25;l<s;l+=.32)C(Te(.022,.022,o,6),y.metal,0,l,0,a,0,0,Math.PI/2);return a}function Ti(n,e,t,i,s,r,o=0,a=8){let l=new ue;l.position.set(i,s,r),l.rotation.y=o,n.add(l),C(pe(e,t,.08,.02),y.dark,0,0,0,l);for(let c=0;c<a;c++)C(new Ye(e*.9,t/a*.45,.04),y.metal,0,-t/2+(c+.5)*t/a,.05,l,-.4,0,0);return l}function Er(n,e,t,i,s,r=0,o=0){let a=new ue;a.position.set(e,t,i),a.rotation.set(o,r,0),n.add(a),C(new De(s,s*.18,8,24),y.metal,0,0,0,a),C(new Oi(s*.95,24),y.window,0,0,-.01,a);for(let l=0;l<8;l++){let c=l/8*Math.PI*2;C(new Ge(s*.06,6,4),y.metal,Math.cos(c)*s*1.12,Math.sin(c)*s*1.12,.02,a)}return a}function $h(n,e,t,i,s=.05){for(let r=0;r<i;r++){let o=r/i*Math.PI*2;C(Te(s,s,s*1.2,6),y.metal,Math.cos(o)*e,t,Math.sin(o)*e,n)}}function Np(n,e,t,i,s=.22,r=0,o=0){let a=new ue;a.position.set(e,t,i),a.rotation.set(r,o,0),n.add(a),C(new De(s,s*.12,6,18),y.red2,0,0,0,a);for(let l=0;l<3;l++)C(new Ye(s*2,s*.12,s*.12),y.red2,0,0,0,a,0,0,l*Math.PI/3);return C(Te(s*.25,s*.25,s*.6,8),y.metal,0,0,-s*.3,a,Math.PI/2,0,0),a}function Ea(n,e,t,i,s=0){let r=new ue;return r.position.set(e,t,i),r.rotation.y=s,n.add(r),C(Te(.13,.13,.06,18),y.metal,0,0,0,r,Math.PI/2,0,0),C(new Oi(.11,18),y.screen,0,0,.032,r),r}function Ri(n,e,t,i,s,r,o=0){return C(new Ye(e,t,.02),y.hazard,i,s,r,n,0,o,0)}function Bl(n,e,t,i,s,r,o,a,l=0){let c=new ue;c.rotation.y=l,n.add(c);for(let h=0;h<t;h++){let d=.12+e()*.35,f=.1+e()*.3,p=.04+e()*.12,g=e(),x=g<.5?y.panel:g<.8?y.dark:y.metal;e()<.3?C(Te(d*.3,d*.3,p*2,10),x,i+e()*(s-i),r+e()*(o-r),a+p,c,Math.PI/2,0,0):C(pe(d,f,p,.015),x,i+e()*(s-i),r+e()*(o-r),a+p/2,c)}return c}function br(n){let e=n;return()=>(e=e*16807%2147483647,(e-1)/2147483646)}{let n=document.createElement("canvas");n.width=128,n.height=32;let e=n.getContext("2d");e.fillStyle="#f2c11a",e.fillRect(0,0,128,32),e.fillStyle="#1a1a1a";for(let h=-32;h<160;h+=24)e.beginPath(),e.moveTo(h,32),e.lineTo(h+12,32),e.lineTo(h+44,0),e.lineTo(h+32,0),e.fill();let t=new qt(n);t.colorSpace=bt,t.wrapS=$n,t.repeat.set(2,1),y.hazard=new ge({map:t,roughness:.7}),y.red2=new ge({color:13120030,roughness:.5,metalness:.3}),y.chrome=new ge({color:14738666,roughness:.15,metalness:1}),y.rubber=new ge({color:1842206,roughness:.92}),y.ablative=new ge({color:3811874,roughness:.95,map:y.found.map,bumpMap:y.found.bumpMap,bumpScale:3}),y.soil=new ge({color:3875864,roughness:1}),y.leaf=new ge({color:4168250,roughness:.7,flatShading:!0}),y.leaf2=new ge({color:7127626,roughness:.7,flatShading:!0}),y.fruit=new ge({color:14694428,roughness:.4}),y.growlight=new ge({color:2228241,emissive:16732120,emissiveIntensity:2.2});let i=document.createElement("canvas");i.width=i.height=64;let s=i.getContext("2d");s.fillStyle="#0a1a14",s.fillRect(0,0,64,64),s.strokeStyle="#6dffb5",s.lineWidth=3,s.beginPath(),s.arc(32,36,22,Math.PI*1.1,Math.PI*1.9),s.stroke(),s.beginPath(),s.moveTo(32,36),s.lineTo(46,22),s.stroke();let r=new qt(i);r.colorSpace=bt,y.screen=new ge({map:r,emissive:16777215,emissiveMap:r,emissiveIntensity:.9});let o=document.createElement("canvas");o.width=128,o.height=128;let a=o.getContext("2d"),l=a.createLinearGradient(0,0,128,128);l.addColorStop(0,"#16285a"),l.addColorStop(.5,"#2a4a9a"),l.addColorStop(1,"#122048"),a.fillStyle=l,a.fillRect(0,0,128,128),a.strokeStyle="rgba(200,220,255,.55)",a.lineWidth=1;for(let h=16;h<128;h+=16)a.beginPath(),a.moveTo(h,0),a.lineTo(h,128),a.stroke();a.strokeStyle="rgba(220,230,255,.8)",a.lineWidth=2,a.beginPath(),a.moveTo(0,64),a.lineTo(128,64),a.stroke();let c=new qt(o);c.colorSpace=bt,c.anisotropy=8,y.cell=new ge({map:c,roughness:.12,metalness:.6,envMapIntensity:1.8})}function Tn(n,e,t=!1){let i=t?C(pe(e*2,4,e*2,.12),y.found,0,-1.8,0,n):C(Te(e,e*1.05,4,32),y.found,0,-1.8,0,n);i.castShadow=!1,i.userData.found=!0}Object.assign(Zn,{solar(n,e){Tn(n,2.2,!0),C(pe(1.4,.25,1.4,.05),y.panel,0,.12,0,n),$h(n,.55,.27,8,.04),C(kt([[0,0],[.3,0],[.26,.4],[.17,.6],[.15,2.1],[0,2.1]]),y.metal,0,.25,0,n),C(pe(.5,.6,.4,.05),y.dark,.32,.65,0,n),Ea(n,.57,.7,0,Math.PI/2),Xw(ne(.4,.5,.15),ne(1.3,.05,.9),.15,.03,y.rubber,n);let t=new ue;t.position.y=2.45,n.add(t),C(pe(.5,.42,.5,.06),y.dark,0,0,0,t),C(Te(.12,.12,.9,12),y.chrome,0,.1,0,t,0,0,Math.PI/2);let i=new ue;i.position.y=.25,t.add(i),C(pe(4.4,.1,3,.03),y.metal,0,-.02,0,i);for(let s=0;s<4;s++)for(let r=0;r<3;r++){let o=C(new Ye(1.02,.03,.92),y.cell,-1.6+s*1.07,.045,-.97+r*.97,i);o.castShadow=!0}for(let s of[-1.1,1.1])C(new Ye(4.2,.08,.06),y.metal,0,-.1,s,i);for(let s of[-1.5,0,1.5])C(new Ye(.06,.08,2.6),y.metal,s,-.1,0,i);Tt(ne(-1.5,-.12,-1.1),ne(0,-.35,0),.03,y.metal,i),Tt(ne(1.5,-.12,1.1),ne(0,-.35,0),.03,y.metal,i),Tt(ne(1.5,-.12,-1.1),ne(0,-.35,0),.03,y.metal,i),Tt(ne(-1.5,-.12,1.1),ne(0,-.35,0),.03,y.metal,i),C(pe(.3,.12,.2,.02),y.dark,1.9,.08,1.35,i),e.pivot=t,e.panel=i},oxygen(n,e){Tn(n,3);let t=br(11);C(Te(3,3.1,.35,40),y.panel,0,.17,0,n);for(let s of[-1.35,1.35]){let r=new ue;r.position.set(s,.35,-.3),n.add(r),C(kt([[0,.2],[.55,.22],[.9,.45],[1,.8],[1,3.2],[.9,3.55],[.55,3.78],[0,3.8]],40),y.white,0,0,0,r);for(let o of[1.2,2.4])C(new De(1.005,.03,6,40),y.metal,0,o,0,r,Math.PI/2,0,0);C(Te(1.015,1.015,.25,40,!0),y.orange,0,1.8,0,r);for(let o of[-.6,.6])C(pe(1.6,.35,.2,.04),y.dark,0,.25,o,r);C(Te(.12,.12,.3,12),y.metal,0,3.9,0,r),Np(r,0,4.1,0,.18,Math.PI/2,0),Ea(r,0,2.2,1.02),Wh(r,0,.3,-1.05,3.4,Math.PI)}C(pe(1.7,1.9,1.6,.1),y.panel,0,1.3,1.2,n),C(pe(1.8,.2,1.7,.05),y.orange,0,2.3,1.2,n),Bl(n,t,10,-.7,.7,.6,2,1.95),Ti(n,1,.5,0,.7,2.01,0,6),C(new De(.42,.06,8,28),y.dark,0,1.75,2.02,n);let i=new ue;i.position.set(0,1.75,2.03),n.add(i);for(let s=0;s<6;s++)C(new Ye(.1,.36,.02),y.metal,Math.sin(s*Math.PI/3)*.2,Math.cos(s*Math.PI/3)*.2,0,i,0,.4,-s*Math.PI/3);C(Te(.08,.08,.06,12),y.chrome,0,0,0,i,Math.PI/2,0,0),e.fan=i;for(let s of[-1.35,1.35])Si([ne(s,3.2,.5),ne(s*.7,3,.9),ne(s*.3,2.4,1.2),ne(s*.25,2.2,1.3)],.07,y.metal,n);$w(ne(-1.35,.9,.7),ne(1.35,.9,.7),.06,y.metal,n),Np(n,.8,.9,.85,.15,0,0),Ea(n,-.5,2,2.01),Ea(n,.5,2,2.01),e.light=_e(6741503,.45,n,.6,2.05,2.05),Ri(n,1.8,.12,0,.42,2.02)},habitat(n,e){Tn(n,6.2);let t=br(23);C(kt([[0,0],[6.25,0],[6.3,.15],[6.25,.9],[6.05,1.05],[5.95,1.25],[0,1.25]],64),y.panel,0,0,0,n);for(let o=0;o<16;o++){let a=o/16*Math.PI*2;Math.abs(a-Math.PI/2)<.3||Ti(n,.7,.4,Math.cos(a)*6.28,.55,Math.sin(a)*6.28,-a+Math.PI/2,4)}let i=C(new Ge(5.8,64,24,0,Math.PI*2,0,Math.PI/2),y.white,0,1.2,0,n);i.scale.y=.85;for(let o=0;o<12;o++)C(new De(5.86,.08,6,32,Math.PI/2),y.panel,0,1.2,0,n,0,o*Math.PI/6,0).scale.set(1,.85,1);for(let[o,a]of[[2.6,5.62],[4.3,4.6]])C(new De(a,.07,6,64),y.panel,0,o,0,n,Math.PI/2,0,0);e.windows=[];for(let o=0;o<14;o++){let a=o/14*Math.PI*2+.11;if(Math.abs(a-Math.PI/2)<.35)continue;let l=new ue;l.position.set(Math.cos(a)*5.76,2,Math.sin(a)*5.76),l.rotation.y=-a+Math.PI/2,l.rotation.x=-.18,n.add(l),C(pe(1.15,.62,.16,.08),y.metal,0,0,0,l),C(pe(1,.48,.1,.07),y.window,0,0,.05,l)}C(Te(1.2,1.4,.5,32),y.panel,0,6.05,0,n),C(new Ge(1,32,12,0,Math.PI*2,0,Math.PI/2),y.glass,0,6.3,0,n).castShadow=!1,C(new De(1.05,.06,6,32),y.metal,0,6.3,0,n,Math.PI/2,0,0),C(Te(.06,.09,3.2,8),y.metal,1.6,7,0,n),e.tip=_e(16728128,1,n,1.6,8.7,0),C(new Ge(.55,20,8,0,Math.PI*2,0,Math.PI/3),y.white,-1.4,6.6,.6,n).rotation.set(-.9,.5,0),C(Te(.05,.05,.9,6),y.metal,-1.4,6.1,.6,n),Wh(n,0,1.25,-5.4,3.2,0,.45).rotation.x=-.6;let r=new ue;r.position.set(0,0,6.2),n.add(r),C(pe(2.6,2.9,3,.25),y.white,0,1.45,.2,r),C(pe(2.64,.12,3.04,.05),y.orange,0,2.62,.2,r),C(pe(1.5,2.2,.15,.12),y.metal,0,1.25,1.72,r),C(pe(1.2,1.95,.1,.1),y.dark,0,1.2,1.78,r),Er(r,0,1.75,1.84,.22),C(pe(.12,.4,.08,.03),y.chrome,.45,1.1,1.85,r),Ri(r,1.5,.14,0,.12,1.85);for(let o=0;o<3;o++)C(pe(1.4,.12,.35,.03),y.metal,0,.06+o*0,2.05+o*.35,r).position.y=.3-o*.12;_e(16769184,.8,r,1,2.5,1.8),C(pe(.5,.35,.3,.04),y.dark,-1,2.4,1.75,r),Bl(r,t,8,-1.2,1.2,.4,2.6,1.7,0),Si([ne(4.5,1,3.5),ne(5.6,.6,4.2),ne(6.6,.25,4.6),ne(7.6,.2,4.6)],.12,y.metal,n),Si([ne(-4.5,1,3.5),ne(-5.4,.7,4.4),ne(-6.4,.25,5)],.1,y.orange,n);for(let[o,a,l]of[[-6.3,-2.4,.4],[6.4,-2,-.3]]){let c=new ue;c.position.set(o,0,a),c.rotation.y=l,n.add(c),C(pe(1.4,1.1,1,.08),y.panel,0,.55,0,c),Ti(c,.9,.7,0,.6,.51,0,6),C(new De(.35,.05,6,20),y.dark,0,1.12,0,c,Math.PI/2,0,0)}},extractor(n,e){Tn(n,2.6,!0),C(pe(4.6,.5,4.6,.08),y.panel,0,.25,0,n),Ri(n,4.6,.15,0,.42,2.31),Ri(n,4.6,.15,0,.42,-2.31);let t=6.4,i=.6,s=1.6,r=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let[a,l]of r)Tt(ne(a*s,.5,l*s),ne(a*i,t,l*i),.09,y.orange,n);for(let a=0;a<3;a++){let l=.5+a*(t-.5)/3,c=l+(t-.5)/3,h=s+(i-s)*(a/3),d=s+(i-s)*((a+1)/3);for(let f=0;f<4;f++){let[p,g]=r[f],[x,v]=r[(f+1)%4];Tt(ne(p*h,l,g*h),ne(x*d,c,v*d),.035,y.metal,n),Tt(ne(x*h,l,v*h),ne(p*d,c,g*d),.035,y.metal,n),Tt(ne(p*d,c,g*d),ne(x*d,c,v*d),.04,y.metal,n)}}C(pe(1.8,.3,1.8,.05),y.dark,0,t+.1,0,n);for(let[a,l]of r)C(Te(.03,.03,.7,6),y.metal,a*.85,t+.6,l*.85,n);C(Te(.45,.45,.6,20),y.white,0,t+.55,0,n),e.light=_e(10476799,1,n,0,t+1.1,0);let o=new ue;o.position.y=3,n.add(o),C(Te(.18,.18,4.6,16),y.chrome,0,0,0,o);for(let a=0;a<5;a++)C(new De(.2,.04,6,16),y.metal,0,-2+a*1,0,o,Math.PI/2,0,0);C(new Yt(.3,.7,16),y.dark,0,-2.6,0,o,Math.PI,0,0),e.drill=o,C(kt([[0,0],[.9,0],[1,.2],[1,1.8],[.8,2.1],[0,2.15]],32),y.white,2.1,.5,1.3,n),C(Te(1.01,1.01,.2,32,!0),y.orange,2.1,1.6,1.3,n),Ea(n,2.1,1.2,2.31),Si([ne(.3,1,.3),ne(.9,1.2,.8),ne(1.5,1.6,1.2),ne(2.1,2.7,1.3)],.08,y.metal,n),Np(n,1.2,1.25,1.1,.14,0,.6),C(pe(1.2,1,.9,.08),y.dark,-1.7,1,1.4,n),Ti(n,.8,.5,-1.7,1,1.86,0,5)},greenhouse(n,e){Tn(n,5,!0),C(pe(10.4,.5,6.4,.1),y.panel,0,.25,0,n);let t=C(new Oe(3,3,10,40,1,!0,0,Math.PI),y.glass,0,.5,0,n,0,0,Math.PI/2);t.castShadow=!1;for(let s=0;s<9;s++)C(new De(3.02,.06,6,28,Math.PI),y.white,-4.8+s*1.2,.5,0,n,0,Math.PI/2,0);for(let s=1;s<6;s++){let r=s/6*Math.PI;C(Te(.035,.035,9.8,6),y.white,0,.5+Math.sin(r)*3.02,Math.cos(r)*3.02,n,0,0,Math.PI/2)}for(let s of[-1,1]){let r=C(new Oi(3,32,0,Math.PI),y.glass,s*5,.5,0,n,0,s*Math.PI/2,0);r.castShadow=!1,C(pe(.12,2.2,1.3,.04),y.white,s*5,1.6,0,n)}C(pe(.1,1.9,1,.05),y.dark,5.05,1.45,0,n);let i=br(71);for(let s of[-1.5,0,1.5]){C(pe(9,.5,.9,.05),y.dark,0,.75,s,n),C(new Ye(8.8,.06,.8),y.soil,0,1.01,s,n);for(let r=0;r<10;r++){let o=-4.1+r*.9+(i()-.5)*.2,a=(r+Math.round(s))%3;if(a===0)for(let l=0;l<4;l++)C(new qn(.22+i()*.12,0),l%2?y.leaf:y.leaf2,o+(i()-.5)*.3,1.2+i()*.25,s+(i()-.5)*.3,n).castShadow=!1;else if(a===1){C(Te(.02,.02,1.2,4),y.leaf,o,1.6,s,n);for(let l=0;l<5;l++)C(new qn(.14,0),y.leaf2,o+(i()-.5)*.3,1.2+l*.22,s+(i()-.5)*.3,n).castShadow=!1;for(let l=0;l<3;l++)C(new Ge(.07,8,6),y.fruit,o+(i()-.5)*.3,1.3+i()*.8,s+(i()-.5)*.25,n)}else for(let l=0;l<6;l++){let c=C(new Yt(.05,.5,4),y.leaf2,o+(i()-.5)*.25,1.25,s+(i()-.5)*.25,n,(i()-.5)*.6,0,(i()-.5)*.6);c.castShadow=!1}}}for(let s of[-.75,.75])C(pe(9,.06,.12,.02),y.growlight,0,2.7,s,n);e.light=_e(16737996,4,n,0,2.3,0),C(kt([[0,0],[.6,0],[.65,.1],[.65,1.5],[.5,1.7],[0,1.72]],24),y.white,-4.4,.5,3.6,n),Si([ne(-4.4,1.6,3.6),ne(-4.2,1.9,3),ne(-4,1.5,2.6)],.05,y.metal,n)}});Object.assign(Zn,{fabricator(n,e){Tn(n,4,!0);let t=br(41);C(pe(7.4,.4,5.4,.08),y.panel,0,.2,0,n),C(pe(7,3.2,5,.18),y.white,0,2,0,n),C(new Oe(2.5,2.5,7,32,1,!1,0,Math.PI),y.panel,0,3.6,0,n,0,0,Math.PI/2).scale.set(1,1,.35);for(let o=0;o<6;o++)C(new De(2.52,.05,6,24,Math.PI),y.metal,-3.3+o*1.32,3.6,0,n,0,Math.PI/2,0).scale.set(1,.35,1);C(pe(7.1,.2,5.1,.05),y.orange,0,3.55,0,n),C(pe(3.4,2.7,.2,.06),y.metal,0,1.75,2.52,n);for(let o=0;o<12;o++)C(new Ye(3,.16,.05),y.dark,0,.55+o*.2,2.64,n);Ri(n,3.4,.14,0,.35,2.66);for(let o of[-1.9,1.9])_e(16769184,.7,n,o,3,2.6);Bl(n,t,16,-3.2,3.2,.8,3,-2.5,Math.PI),Ti(n,1.2,.8,2.6,1.6,2.52,0,6),Ti(n,1.2,.8,-2.6,1.6,2.52,0,6),Si([ne(3.5,3,-1.5),ne(4.2,2.5,-1.8),ne(4.4,1,-2),ne(4.4,.4,-2)],.1,y.metal,n);let i=new ue;i.position.set(2.2,3.85,0),n.add(i),C(Te(.45,.55,.4,24),y.dark,0,.2,0,i);let s=new ue;s.position.y=.4,s.rotation.z=.35,i.add(s),C(pe(.32,1.8,.32,.08),y.orange,0,.9,0,s),C(Te(.22,.22,.45,16),y.metal,0,1.8,0,s,Math.PI/2,0,0);let r=new ue;r.position.y=1.8,r.rotation.z=-1.4,s.add(r),C(pe(.25,1.4,.25,.06),y.orange,0,.7,0,r),C(Te(.12,.05,.35,12),y.chrome,0,1.55,0,r),e.arm=i,e.spark=_e(16764006,1,r,0,1.8,0);for(let[o,a,l]of[[-2.6,3.4,1.1],[-1.4,3.3,.9],[-2.1,3.6,.6]])C(pe(l,l,l,.05),y.dark,o,l/2+(l<.7?1.1:0),a,n),C(new Ye(l*1.01,.06,l*1.01),y.orange,o,l*.7+(l<.7?1.1:0),a,n)},turret(n,e){Tn(n,1.8),C(kt([[0,0],[1.9,0],[1.95,.15],[1.6,.9],[1.2,1.2],[0,1.2]],32),y.metal,0,0,0,n),$h(n,1.7,.2,12,.06),C(Te(.65,.8,1.2,24),y.dark,0,1.75,0,n);let t=new ue;t.position.y=2.75,n.add(t),C(pe(1.7,1.05,2,.2),y.white,0,0,.1,t),C(pe(1.75,.18,2.05,.06),y.orange,0,.32,.1,t),C(pe(.9,.35,.6,.08),y.dark,0,.6,.4,t);for(let i of[-.42,.42]){C(Te(.16,.16,.5,16),y.dark,i,0,-.95,t,Math.PI/2,0,0),C(Te(.09,.09,1.9,16),y.metal,i,0,-1.9,t,Math.PI/2,0,0);for(let s=0;s<3;s++)C(new De(.11,.025,6,16),y.cyan,i,0,-1.4-s*.35,t);C(Te(.13,.11,.25,16),y.dark,i,0,-2.9,t,Math.PI/2,0,0)}C(Te(.18,.18,.1,16),y.cyan,0,.1,-.92,t,Math.PI/2,0,0),e.eye=_e(3401471,.6,t,0,.1,-.98),Ti(t,.9,.4,0,-.1,1.12,0,4),e.head=t},reactor(n,e){Tn(n,5.2),C(kt([[0,0],[5.2,0],[5.3,.2],[5,1.3],[4.6,1.5],[0,1.5]],48),y.panel,0,0,0,n),Ri(n,2.5,.16,0,1,5.06);for(let r=0;r<16;r++){let o=r/16*Math.PI*2;Ti(n,.6,.45,Math.cos(o)*5.1,.75,Math.sin(o)*5.1,-o+Math.PI/2,4)}C(new De(2.6,.9,24,64),y.white,0,3,0,n,Math.PI/2,0,0);for(let r=0;r<16;r++){let o=r/16*Math.PI*2,a=C(new De(1,.12,8,24),y.dark,Math.cos(o)*2.6,3,Math.sin(o)*2.6,n);a.rotation.y=-o}let t=C(new Ge(1.2,32,24),y.cyan,0,3,0,n);t.castShadow=!1;let i=C(new De(3.9,.12,10,64),y.chrome,0,3,0,n),s=C(new De(3.9,.12,10,64),y.chrome,0,3,0,n);s.rotation.x=Math.PI/2;for(let r=0;r<6;r++){let o=r*Math.PI/3;Tt(ne(Math.cos(o)*4.6,1.5,Math.sin(o)*4.6),ne(Math.cos(o)*3.2,3,Math.sin(o)*3.2),.18,y.metal,n)}for(let r=0;r<4;r++){let o=r*Math.PI/2+Math.PI/4;C(kt([[0,0],[.7,0],[.75,.1],[.75,4.2],[.6,4.5],[0,4.5]],24),y.white,Math.cos(o)*4.4,1.5,Math.sin(o)*4.4,n)}e.core=t,e.r1=i,e.r2=s,e.light=_e(3401471,7,n,0,3,0)},beacon(n,e){C(kt([[0,0],[7.4,0],[7.5,.1],[7.2,.5],[0,.5]],8),y.found,0,-.2,0,n,0,Math.PI/8,0).castShadow=!1,C(Te(7.6,7.9,4,8),y.found,0,-2.3,0,n,0,Math.PI/8,0).castShadow=!1,C(new tn(4.2,4.8,64),y.orange,0,.32,0,n,-Math.PI/2,0,0),C(new tn(5.6,5.75,64),y.white,0,.32,0,n,-Math.PI/2,0,0);let t=document.createElement("canvas");t.width=t.height=128;let i=t.getContext("2d");i.fillStyle="#e8e4dc",i.font="bold 110px sans-serif",i.textAlign="center",i.fillText("H",64,104);let s=new qt(t);s.colorSpace=bt,C(new Un(3,3),new ge({map:s,transparent:!0,roughness:.8}),0,.33,0,n,-Math.PI/2,0,0),e.lights=[];for(let a=0;a<8;a++){let l=a*Math.PI/4+Math.PI/8;C(Te(.15,.2,.15,12),y.dark,Math.cos(l)*6.6,.38,Math.sin(l)*6.6,n),e.lights.push(_e(16755251,1,n,Math.cos(l)*6.6,.55,Math.sin(l)*6.6))}let r=new ue;r.position.set(8.6,0,0),n.add(r);for(let[a,l]of[[-.35,-.35],[.35,-.35],[.35,.35],[-.35,.35]])Tt(ne(a*1.6,0,l*1.6),ne(a*.5,8.5,l*.5),.05,y.metal,r);for(let a=1;a<8.5;a+=1.1){let l=1.6-a/8.5*1.1;C(new De(l*.5,.025,4,4),y.metal,0,a,0,r,Math.PI/2,0,Math.PI/4)}C(new Ge(.9,24,8,0,Math.PI*2,0,Math.PI/3),y.white,0,8.4,.4,r).rotation.set(-1,0,0),e.tip=_e(16724016,1.6,r,0,9.3,0),C(pe(1.2,1,.8,.08),y.dark,-9.6,.5,4.5,n),Ea(n,-9.6,.6,4.92)}});Object.assign(Zn,{lab(n,e){Tn(n,4),C(Te(4.1,4.2,.4,40),y.panel,0,.2,0,n),C(Te(3.2,3.4,2.8,40),y.white,0,1.8,0,n),C(Te(3.25,3.25,.2,40),y.orange,0,3.1,0,n);for(let i=0;i<10;i++){let s=i/10*Math.PI*2,r=new ue;r.position.set(Math.cos(s)*3.32,2,Math.sin(s)*3.32),r.rotation.y=-s+Math.PI/2,n.add(r),C(pe(.9,.7,.1,.06),y.metal,0,0,0,r),C(pe(.78,.58,.08,.05),y.window,0,0,.04,r)}C(new Ge(2.2,40,16,0,Math.PI*2,0,Math.PI/2),y.white,0,3.2,0,n),C(pe(.9,2.4,.2,.05),y.dark,0,4.4,1.5,n,-.9,0,0);let t=C(Te(.35,.45,2.6,20),y.metal,0,5.2,.9,n,-.7,0,0);C(new De(.37,.05,8,20),y.cyan,0,6.15,1.75,n,-.7+Math.PI/2,0,0),e.scope=t,C(Te(.05,.07,3,8),y.metal,-2.4,4.5,-1.2,n),e.tip=_e(8382207,1,n,-2.4,6.1,-1.2),C(pe(1.5,1,1,.08),y.dark,3.4,.7,-2,n),Ti(n,1,.6,3.4,.7,-1.48,0,5),C(pe(1.3,2.1,.15,.1),y.metal,0,1.25,3.38,n),C(pe(1.1,1.9,.1,.08),y.dark,0,1.2,3.44,n),e.light=_e(8382207,2,n,0,6.3,1.9)},trade(n,e){Tn(n,4.8,!0),C(pe(9.6,.4,9.6,.1),y.found,0,.2,0,n),Ri(n,9.6,.15,0,.42,4.82);let t=[y.orange,y.white,y.dark,y.red2],i=0;for(let[o,a,l]of[[-3.2,-2.6,2],[-3.2,-.2,1],[-3.2,2.2,2],[.2,-2.6,1],[.2,2.6,1]])for(let c=0;c<l;c++){let h=C(pe(2.2,1.1,2,.05),t[i++%t.length],o,.95+c*1.12,a,n);for(let d=0;d<5;d++)C(new Ye(.04,.9,2.02),y.metal,o-.8+d*.4,.95+c*1.12,a,n)}let s=new ue;s.position.set(3.2,.4,0),n.add(s);for(let[o,a]of[[-.4,-.4],[.4,-.4],[.4,.4],[-.4,.4]])Tt(ne(o,0,a),ne(o*.6,6,a*.6),.06,y.orange,s);for(let o=1;o<6;o+=1.2)C(new De(.42-o*.03,.03,4,4),y.orange,0,o,0,s,Math.PI/2,0,Math.PI/4);let r=new ue;r.position.y=6.1,s.add(r),C(pe(.6,.5,.6,.06),y.dark,0,0,0,r),C(pe(.25,.25,6,.04),y.orange,0,.2,-2,r),C(pe(.6,.6,.8,.05),y.dark,0,.1,1.2,r),Tt(ne(0,.1,-4.6),ne(0,-3,-4.6),.015,y.metal,r),C(pe(.5,.2,.5,.03),y.metal,0,-3.1,-4.6,r),e.jib=r,C(Te(.05,.05,2.4,6),y.metal,-4.2,1.6,4.2,n),e.tip=_e(6750105,1,n,-4.2,2.9,4.2)}});Object.assign(Zn,{apartment(n,e){Tn(n,4.4,!0);let t=br(91),[i,s]=Sl;C(pe(8.6,.6,8.6,.15),y.panel,0,.3,0,n);let r=(o,a,l,c,h)=>{C(pe(l,c,l,.25),h,o,.6+c/2,a,n);for(let d=2.2;d<c;d+=2.2)C(new Ye(l+.08,.12,l+.08),y.white,o,.6+d,a,n);for(let d of[-1,1])C(new Ye(.16,c,.16),y.metal,o+d*l/2,.6+c/2,a+l/2,n),C(new Ye(.16,c,.16),y.metal,o+d*l/2,.6+c/2,a-l/2,n)};r(-1.3,-1.2,4.6,17,i),r(2.1,2,3.6,11,s),C(pe(4,1.2,4,.3),y.white,-1.3,18.2,-1.2,n),C(pe(3,.9,3,.3),y.white,2.1,12.1,2,n),C(pe(2.6,1.1,1.4,.4),y.glass,.6,7.4,.6,n,0,Math.PI/4,0).castShadow=!1;for(let o of[6.9,7.9])C(pe(2.7,.1,1.5,.04),y.metal,.6,o,.6,n,0,Math.PI/4,0);for(let o=0;o<6;o++)C(new qn(.35+t()*.2,0),y.leaf2,1.4+t()*1.4,12.75,1.3+t()*1.4,n);Bl(n,t,8,-2.8,.2,18.6,18.9,.6),C(Te(.08,.1,4,8),y.metal,-1.3,20.8,-1.2,n),e.tip=_e(16728128,1.4,n,-1.3,22.9,-1.2),C(pe(2.4,.15,1.6,.05),y.orange,-1.3,3.2,1.9,n);for(let o of[-2.3,-.3])C(Te(.05,.05,2.6,8),y.metal,o,1.9,2.6,n);_e(16767392,1.2,n,-1.3,3,2.2)},vfarm(n,e){Tn(n,4),C(Te(4,4.2,.8,40),y.panel,0,.4,0,n);let t=C(Te(3.3,3.3,15,40,!0),y.glass,0,8.3,0,n);t.castShadow=!1;for(let s=0;s<8;s++){let r=s/8*Math.PI*2;C(new Ye(.14,15,.14),y.white,Math.cos(r)*3.32,8.3,Math.sin(r)*3.32,n)}let i=br(55);for(let s=0;s<6;s++){let r=1.4+s*2.4;C(Te(3.1,3.1,.18,40),y.white,0,r,0,n),C(new De(3.15,.06,6,40),y.metal,0,r+.1,0,n,Math.PI/2,0,0),C(Te(2.8,2.8,.12,40),y.soil,0,r+.15,0,n);for(let o=0;o<16;o++){let a=o/16*Math.PI*2+s;C(new qn(.22+i()*.12,0),o%2?y.leaf:y.leaf2,Math.cos(a)*(1.7+i()*.9),r+.4,Math.sin(a)*(1.7+i()*.9),n).castShadow=!1}C(new De(2,.04,6,32),y.growlight,0,r+2.1,0,n,Math.PI/2,0,0)}C(Te(.5,.5,15,16),y.metal,0,8.3,0,n),C(new Ge(3.3,40,12,0,Math.PI*2,0,Math.PI/2),y.glass,0,15.8,0,n).castShadow=!1,C(new De(3.32,.1,8,40),y.orange,0,15.8,0,n,Math.PI/2,0,0),Si([ne(3.4,1,1),ne(4.4,.6,1.4),ne(5.2,.3,2.2)],.1,y.metal,n),e.light=_e(16737996,8,n,0,8,0)},lifehub(n,e){Tn(n,5.8),C(kt([[0,0],[6,0],[6.1,.2],[5.8,1.2],[0,1.2]],48),y.panel,0,0,0,n),C(new Ge(4.4,48,20,0,Math.PI*2,0,Math.PI/2),y.white,0,1.2,0,n).scale.y=.75,C(new De(4.45,.18,10,48),y.orange,0,1.6,0,n,Math.PI/2,0,0);for(let i=0;i<8;i++){let s=i/8*Math.PI*2;Ti(n,1,.5,Math.cos(s)*5.9,.6,Math.sin(s)*5.9,-s+Math.PI/2,4)}for(let i=0;i<4;i++){let s=i*Math.PI/2+Math.PI/4,r=Math.cos(s)*5,o=Math.sin(s)*5;C(kt([[0,0],[.95,0],[1,.2],[1,4.4],[.8,4.8],[0,4.85]],28),y.white,r,.4,o,n),C(Te(1.02,1.02,.3,28,!0),y.cyan,r,3.6,o,n),Wh(n,r*1.2,.4,o*1.2,4.2,-s-Math.PI/2,.4),Si([ne(r*.8,2.6,o*.8),ne(r*.6,2.8,o*.6),ne(r*.45,2.4,o*.45)],.12,y.metal,n)}C(Te(1.6,1.8,.6,32),y.dark,0,4.4,0,n),C(new De(1.7,.08,6,32),y.metal,0,4.75,0,n,Math.PI/2,0,0);let t=new ue;t.position.y=4.8,n.add(t);for(let i=0;i<5;i++)C(pe(1.5,.05,.4,.02),y.metal,Math.cos(i*1.256)*.8,0,Math.sin(i*1.256)*.8,t,0,-i*1.256,.25);e.fan=t,e.light=_e(6741503,4,n,0,5.2,0)},plaza(n,e){Tn(n,7.2),C(kt([[0,0],[7.3,0],[7.4,.1],[7.2,.4],[0,.4]],64),y.found,0,0,0,n);for(let s=2.5;s<7;s+=1.5)C(new De(s,.03,4,64),y.metal,0,.41,0,n,Math.PI/2,0,0);C(new tn(5.4,5.75,64),y.orange,0,.42,0,n,-Math.PI/2,0,0),C(kt([[0,0],[2.1,0],[2,.3],[1.5,.5],[1.4,1.3],[1.6,1.45],[0,1.45]],40),y.white,0,.4,0,n),C(new De(1.55,.06,8,40),y.cyan,0,1.85,0,n,Math.PI/2,0,0);for(let s=0;s<6;s++){let r=s*Math.PI/3+Math.PI/6,o=new ue;o.position.set(Math.cos(r)*5,.4,Math.sin(r)*5),o.rotation.y=-r+Math.PI/2,n.add(o),C(pe(2.2,.12,.6,.05),y.panel,0,.45,0,o),C(pe(2.2,.5,.1,.04),y.panel,0,.75,.28,o);for(let l of[-.9,.9])C(pe(.1,.45,.5,.03),y.metal,l,.22,0,o);let a=r+.52;C(kt([[0,0],[.18,0],[.12,.2],[.06,.3],[.05,3.4],[0,3.4]],12),y.metal,Math.cos(a)*6.6,.4,Math.sin(a)*6.6,n),C(new Ge(.2,12,8),y.lamp,Math.cos(a)*6.6,3.95,Math.sin(a)*6.6,n),_e(16767392,1.1,n,Math.cos(a)*6.6,3.95,Math.sin(a)*6.6)}let t=C(new Ge(1.5,40,24),new Ne({map:Zn._earthTex?Zn._earthTex():null,color:10479359,transparent:!0,opacity:.7,blending:ke,depthWrite:!1}),0,4,0,n);t.castShadow=!1;for(let s=0;s<2;s++){let r=C(new De(2+s*.3,.015,4,64),y.cyan,0,4,0,n,Math.PI/2+.3-s*.6,0,0);r.castShadow=!1}let i=_e(6736127,5,n,0,4,0);C(new Oe(1.1,1.5,2.2,32,1,!0),new Ne({color:8382207,transparent:!0,opacity:.1,blending:ke,depthWrite:!1,side:Rt}),0,2.95,0,n).castShadow=!1,e.earth=t,e.halo=i},drones(n,e){Tn(n,3.8,!0),C(pe(7.6,.5,7.6,.12),y.panel,0,.25,0,n),Ri(n,7.6,.14,0,.42,3.81),Ri(n,7.6,.14,0,.42,-3.81);for(let[s,r]of[[-1.9,-1.9],[1.9,-1.9],[-1.9,1.9],[1.9,1.9]]){C(Te(1.15,1.2,.12,32),y.dark,s,.56,r,n),C(new tn(.8,.95,32),y.orange,s,.63,r,n,-Math.PI/2,0,0);for(let o=0;o<4;o++){let a=o*Math.PI/2;C(Te(.06,.06,.06,8),y.lamp,s+Math.cos(a)*1.05,.64,r+Math.sin(a)*1.05,n)}}C(pe(1.4,4.2,1.4,.15),y.white,3,2.4,3,n),C(pe(1.6,.9,1.6,.15),y.glass,3,4.6,3,n).castShadow=!1,C(pe(1.7,.15,1.7,.05),y.orange,3,5.1,3,n),Wh(n,3,.5,2.25,4,0,.4);let t=new ue;t.position.set(3,5.5,3),n.add(t);let i=C(new Ge(.9,24,8,0,Math.PI*2,0,Math.PI/3),y.white,0,.2,0,t);i.rotation.x=Math.PI*.6,C(Te(.04,.04,.8,6),y.metal,0,.3,.25,t).rotation.x=1.1,e.dish=t,e.light=_e(8382207,1.2,n,3,6.3,3),C(pe(1.6,1,1,.08),y.dark,-3,1,3,n),Ti(n,1,.6,-3,1,3.51,0,5)},terraformer(n,e){Tn(n,7),C(kt([[0,0],[7.4,0],[7.5,.3],[7,2],[5.5,2.4],[0,2.4]],6),y.panel,0,0,0,n),C(kt([[0,0],[4.4,0],[3.8,8],[3,16],[2.3,24],[1.6,28],[0,28.5]],6),y.white,0,2.4,0,n);for(let i of[6,14,22])C(new De(4.6-i*.11,.3,6,6),y.orange,0,2.4+i,0,n,Math.PI/2,0,Math.PI/6);for(let i=0;i<6;i++){let s=i*Math.PI/3;Tt(ne(Math.cos(s)*7,2,Math.sin(s)*7),ne(Math.cos(s)*3.5,14,Math.sin(s)*3.5),.35,y.metal,n)}for(let i=0;i<6;i++){let s=i*Math.PI/3+Math.PI/6;Ti(n,1.4,2.4,Math.cos(s)*4,5,Math.sin(s)*4,-s+Math.PI/2,8)}e.rings=[];for(let i=0;i<3;i++){let s=C(new De(6-i*1.2,.22,10,64),y.cyan,0,10+i*8,0,n);s.castShadow=!1,e.rings.push(s)}C(Te(1.2,1.6,2,24),y.dark,0,31.5,0,n);let t=C(new Oe(.6,1.4,400,16,1,!0),new Ne({color:6743807,transparent:!0,opacity:0,blending:ke,depthWrite:!1,side:Rt}),0,232,0,n);t.castShadow=!1,t.receiveShadow=!1,e.beam=t,e.top=_e(6743807,9,n,0,32.5,0)},launch(n,e){Tn(n,9,!0),C(pe(18.4,1.2,18.4,.2),y.found,0,.6,0,n),C(new tn(4.8,5.8,48),y.orange,0,1.22,0,n,-Math.PI/2,0,0),C(Te(3.6,3.6,.3,32),y.dark,0,1.3,0,n),Ri(n,18.4,.2,0,1.25,9.21);let t=new ue;t.position.set(7.5,1.2,0),n.add(t);for(let[r,o]of[[-1.5,-1.5],[1.5,-1.5],[1.5,1.5],[-1.5,1.5]])Tt(ne(r,0,o),ne(r,34,o),.14,y.orange,t);for(let r=0;r<34;r+=2.5)for(let[o,a,l,c]of[[-1.5,-1.5,1.5,-1.5],[1.5,-1.5,1.5,1.5],[1.5,1.5,-1.5,1.5],[-1.5,1.5,-1.5,-1.5]])Tt(ne(o,r,a),ne(l,r+2.5,c),.04,y.metal,t),Tt(ne(o,r,a),ne(l,r,c),.05,y.metal,t);for(let r of[12,24])C(pe(4.2,.4,1,.06),y.dark,-3.2,r,0,t),Tt(ne(-1.5,r,0),ne(-5,r,0),.06,y.metal,t);let i=new ue;i.position.y=1.4,n.add(i),C(kt([[0,0],[2.6,.2],[2.8,2],[2.7,22],[2.4,25],[1.6,29],[.6,31.5],[0,32]],40),y.white,0,0,0,i);for(let r of[8,19])C(Te(2.79,2.79,1.2,40,!0),y.orange,0,r,0,i);for(let r of[4,12,16,23])C(new De(2.76,.04,6,40),y.metal,0,r,0,i,Math.PI/2,0,0);for(let r=0;r<4;r++)Er(i,Math.cos(r*1.57)*2.62,25.5,Math.sin(r*1.57)*2.62,.3,Math.PI/2-r*1.57,0);for(let r=0;r<4;r++){let o=r*Math.PI/2,a=C(pe(.35,7,3.4,.1),y.panel,Math.cos(o)*3.1,3.5,Math.sin(o)*3.1,i);a.rotation.y=-o}for(let r=0;r<5;r++){let o=r*Math.PI*2/5;C(kt([[.4,0],[.6,-.3],[1,-1.4],[.9,-1.4],[.5,-.35]],20),y.metal,Math.cos(o)*1.4,.2,Math.sin(o)*1.4,i)}let s=new se(new Yt(3,16,16,1,!0),y.flame);s.rotation.x=Math.PI,s.position.y=-8,s.visible=!1,i.add(s),e.ship=i,e.flame=s,e.tip=_e(16777215,3,i,0,32.5,0)},monument(n,e){Tn(n,6);for(let s=0;s<3;s++)C(Te(6.2-s*1.2,6.4-s*1.2,.6,8),s%2?y.white:y.panel,0,.3+s*.6,0,n,0,Math.PI/8,0);let t=["\u706B\u661F","\u6728\u536B\u4E8C","\u5F00\u666E\u52D2"];for(let s=0;s<3;s++){let r=s*Math.PI*2/3,o=new ue;o.position.set(Math.cos(r)*1,1.8,Math.sin(r)*1),o.rotation.y=-r+Math.PI/2,n.add(o),C(new Ye(1.8,26,.5),y.white,0,13,0,o,0,0,0).geometry.translate(0,0,0);let a=document.createElement("canvas");a.width=128,a.height=512;let l=a.getContext("2d");l.fillStyle="#f0ebe2",l.fillRect(0,0,128,512),l.fillStyle="#b8862e",l.font="600 54px sans-serif",l.textAlign="center",[...t[s]].forEach((h,d)=>l.fillText(h,64,120+d*70));let c=new qt(a);c.colorSpace=bt,C(new Un(1.4,5.6),new ge({map:c,roughness:.6}),0,6,.26,o)}e.rings=[];let i=[16742954,6743807,10551104];for(let s=0;s<3;s++){let r=C(new De(3.6-s*.5,.12,10,64),new ge({color:1118481,emissive:i[s],emissiveIntensity:2}),0,16+s*4,0,n);r.castShadow=!1,e.rings.push(r)}C(new lr(1,0),y.chrome,0,30,0,n),e.top=_e(16777215,8,n,0,30,0)}});function tv(){let n=new ue,e=br(5);C(kt([[0,1],[2.6,1.05],[3.25,1.25],[3.35,1.45],[3.2,1.6],[0,1.6]],48),y.ablative,0,0,0,n),C(kt([[3.05,1.6],[3,2.2],[2.75,3.4],[2.35,4.6],[1.95,5.6],[1.75,6],[0,6]],48),y.white,0,0,0,n),C(kt([[3.02,2.05],[3.04,2.35],[2.98,2.4]],48),y.orange,0,0,0,n),C(kt([[2,5.45],[2.02,5.6],[1.95,5.62]],48),y.orange,0,0,0,n),C(Te(1.6,1.75,.35,40),y.panel,0,6.15,0,n),C(new De(1.25,.12,10,40),y.metal,0,6.38,0,n,Math.PI/2,0,0),C(new Ge(1.15,32,12,0,Math.PI*2,0,Math.PI/2),y.white,0,6.35,0,n).scale.y=.6,$h(n,1.45,6.34,16,.04);let t=Er(n,0,4.55,2.33,.36,0,-.33);Er(n,-.95,4.35,2.2,.26,-.42,-.33),Er(n,.95,4.35,2.2,.26,.42,-.33);let i=new ue;i.position.set(2.82,2.75,0),i.rotation.set(0,Math.PI/2,.22),n.add(i),C(pe(1.25,1.75,.14,.12),y.metal,0,0,0,i),C(pe(1.05,1.55,.1,.1),y.panel,0,0,.06,i),C(pe(.1,.45,.08,.03),y.chrome,.38,-.05,.13,i),Er(i,0,.45,.13,.15),Ri(i,1.25,.1,0,-.92,.08);for(let h=0;h<6;h++)C(pe(.9,.06,.28,.02),y.metal,3.3+h*.2,1.75-h*.29,0,n);Tt(ne(3.2,1.9,-.48),ne(4.4,.1,-.48),.035,y.metal,n),Tt(ne(3.2,1.9,.48),ne(4.4,.1,.48),.035,y.metal,n);for(let h=0;h<4;h++){let d=h*Math.PI/2+Math.PI/4,f=new ue;f.position.set(Math.cos(d)*2.15,5,Math.sin(d)*2.15),f.rotation.y=-d,n.add(f),C(pe(.36,.36,.36,.05),y.dark,0,0,0,f);for(let[p,g]of[[.25,0],[-.25,0],[0,.25],[0,-.25]]){let x=C(new Yt(.07,.16,10,1,!0),y.metal,0,g,p,f);x.rotation.x=g?g>0?0:Math.PI:p>0?Math.PI/2:-Math.PI/2}}for(let h=0;h<4;h++){let d=h*Math.PI/2,f=C(kt([[.18,1.05],[.22,.85],[.42,.45],[.55,.2],[.5,.2],[.38,.45],[.15,.85]],24),y.dark,Math.cos(d)*1.2,0,Math.sin(d)*1.2,n);f.material=y.metal}C(Te(.7,.9,.5,24),y.dark,0,.8,0,n);for(let h=0;h<4;h++){let d=h*Math.PI/2+Math.PI/4,f=Math.cos(d),p=Math.sin(d),g=ne(f*2.7,2.1,p*2.7),x=ne(f*3.55,1,p*3.55),v=ne(f*4.1,.18,p*4.1);Tt(g,x,.11,y.white,n),C(new Ge(.15,12,8),y.metal,x.x,x.y,x.z,n),Tt(x,v,.075,y.chrome,n),Tt(x.clone().lerp(v,.3),x.clone().lerp(v,.3).add(ne(0,.01,0)),.1,y.metal,n),Tt(ne(f*2.4,1.3,p*2.4),x.clone().lerp(v,.25),.05,y.metal,n),Tt(ne(f*2.6-p*.6,1.7,p*2.6+f*.6),x,.035,y.metal,n),Tt(ne(f*2.6+p*.6,1.7,p*2.6-f*.6),x,.035,y.metal,n),C(kt([[0,0],[.55,0],[.6,.06],[.35,.2],[.1,.22],[0,.22]],24),y.metal,v.x,0,v.z,n)}C(Te(.04,.05,1.8,8),y.metal,.6,7.1,-.4,n),C(new Ge(.5,24,8,0,Math.PI*2,0,Math.PI/3.2),y.white,-.7,6.95,.3,n).rotation.set(-.8,.6,0),C(Te(.04,.04,.8,6),y.metal,-.7,6.55,.3,n),Si([ne(-1.6,5.7,-1.4),ne(-2.3,4.3,-1.9),ne(-2.9,2.6,-2.1),ne(-3.05,1.7,-2.2)],.05,y.dark,n),Si([ne(1.6,5.7,-1.4),ne(2.3,4.3,-1.9),ne(2.9,2.6,-2.05)],.04,y.orange,n),Bl(n,e,14,-1.2,1.2,2.4,3.6,-2.95,Math.PI);let r=document.createElement("canvas");r.width=512,r.height=96;let o=r.getContext("2d");o.clearRect(0,0,512,96),o.fillStyle="#d4581c",o.font="bold 54px sans-serif",o.textAlign="center",o.fillText("\u65B9\u821F\u4E00\u53F7 \xB7 ARK-1",256,66);let a=new qt(r);a.colorSpace=bt;let l=new se(new Un(3.4,.64),new ge({map:a,transparent:!0,roughness:.6}));l.position.set(0,3.2,-2.87),l.rotation.set(.32,Math.PI,0),n.add(l);let c=_e(6750105,1.4,n,.6,8.05,-.4);return{group:n,beacon:c,window:t}}var Gh=new ge({color:2757906,roughness:.28,metalness:.7,flatShading:!0}),Hp=new ge({color:2757906,roughness:.35,metalness:.7});function nv(n,e,t){let i=new ue,s=new ue;i.add(s);let r=new ge({color:2230272,emissive:e.emissive,emissiveIntensity:1.6});C(new qn(.75,1),Gh,0,1,.2,s).scale.set(1.05,.62,1),C(new qn(.85,1),Gh,0,1.1,-.85,s).scale.set(.95,.7,1.25),C(new qn(.42,1),Gh,0,.95,1,s).scale.set(1.1,.7,1);let c=br(Math.floor(Math.random()*1e6)+1);for(let d=0;d<9;d++){let f=C(new lr(.22+c()*.15,0),e,(c()-.5)*.9,1.45+c()*.25,-1.1+c()*1.4,s,(c()-.5)*.8,c()*3,(c()-.5)*.8);f.scale.y=1.8+c()*1.4}for(let[d,f,p]of[[-.17,1.03,.05],[.17,1.03,.05],[-.1,1.12,.035],[.1,1.12,.035]])C(new Ge(p,10,8),t,d,f,1.36,s);for(let d of[-1,1])C(new Yt(.06,.45,6),Gh,d*.16,.78,1.42,s).rotation.set(Math.PI/2+.3,0,d*.35);let h=[];for(let d=0;d<6;d++){let f=d<3?-1:1,p=d%3-1,g=new ue;g.position.set(f*.62,1,p*.55+.1),s.add(g);let x=ne(0,0,0),v=ne(f*.75,.45,p*.15),m=ne(f*1.35,.1,p*.25),_=ne(f*1.55,-.98,p*.35);Tt(x,v,.08,Hp,g,14),Tt(v,m,.065,Hp,g,14),Tt(m,_,.045,Hp,g,14);for(let E of[v,m])C(new Ge(.09,8,6),r,E.x,E.y,E.z,g);C(new Yt(.05,.18,6),e,_.x,_.y-.05,_.z,g,Math.PI,0,0),g.userData.phase=d%2*Math.PI+p*.5,g.userData.side=f,h.push(g)}return i.scale.setScalar(n),{group:i,legs:h,inner:s}}function iv(){let n=new ue;C(kt([[0,.6],[1.9,.7],[2.5,1.2],[2.6,2],[2.2,4.5],[1.6,6.6],[.9,7.8],[0,8.2]],40),y.white,0,0,0,n),C(Te(2.62,2.62,.5,40,!0),y.orange,0,2.2,0,n),C(kt([[0,.3],[2.4,.35],[2.55,.65],[0,.7]],40),y.ablative,0,0,0,n);for(let i=0;i<5;i++)Er(n,Math.cos(i*1.256)*2.1,4.4,Math.sin(i*1.256)*2.1,.22,Math.PI/2-i*1.256,-.25);for(let i=0;i<3;i++){let s=i*Math.PI*2/3,r=Math.cos(s),o=Math.sin(s);Tt(ne(r*2.2,2,o*2.2),ne(r*3.1,.1,o*3.1),.09,y.chrome,n),C(Te(.45,.5,.1,16),y.metal,r*3.1,.05,o*3.1,n);let a=C(pe(.18,2.4,1.4,.06),y.panel,r*2.55,1.9,o*2.55,n);a.rotation.y=-s}for(let i=0;i<3;i++){let s=i*Math.PI*2/3+1;C(kt([[.3,0],[.45,-.25],[.75,-.9],[.65,-.9],[.35,-.3]],20),y.metal,Math.cos(s)*.9,.35,Math.sin(s)*.9,n)}C(Te(.04,.04,1.2,6),y.metal,0,8.6,0,n),_e(16728128,.8,n,0,9.2,0);let e=new se(new Yt(1.4,6,14,1,!0),y.flame);e.rotation.x=Math.PI,e.position.y=-2.6,n.add(e);let t=_e(16752704,9,n,0,-.5,0);return{group:n,flame:e,flameGlow:t}}Object.assign(Zn,{lamp(n,e){C(Te(.55,.62,.3,8),y.found,0,.1,0,n,0,Math.PI/8,0).castShadow=!1,C(Te(.62,.62,2,8),y.found,0,-1.1,0,n,0,Math.PI/8,0).castShadow=!1,$h(n,.45,.28,6,.035),C(kt([[0,0],[.2,0],[.2,.08],[.13,.2],[.11,.6],[.075,3.6],[.06,4],[0,4]],16),y.metal,0,.25,0,n),C(Te(.135,.135,.5,16),y.hazard,0,.75,0,n),C(pe(.22,.32,.14,.03),y.dark,0,1.3,.14,n),e.led=_e(5635993,.18,n,.06,1.42,.22),Si([ne(0,1.12,.18),ne(0,.6,.2),ne(0,.3,.32),ne(0,.22,.48)],.02,y.rubber,n,12),C(kt([[0,0],[.62,0],[.66,.05],[.55,.16],[.22,.26],[.08,.3],[0,.3]],32),y.white,0,4.18,0,n),C(new De(.5,.035,8,40),y.lamp,0,4.17,0,n,Math.PI/2,0,0).castShadow=!1;let t=C(new Oi(.42,32),y.lamp,0,4.15,0,n,Math.PI/2,0,0);t.castShadow=!1,C(new De(.64,.02,6,40),y.metal,0,4.2,0,n,Math.PI/2,0,0);let i=new ue;i.position.set(0,4.55,0),i.rotation.x=-.45,n.add(i),C(Te(.025,.025,.25,6),y.metal,0,-.1,0,i),C(pe(.7,.03,.45,.01),y.cell,0,.04,0,i),Tt(ne(.25,4.45,-.1),ne(.3,5.2,-.12),.008,y.metal,n,4),e.glow=_e(16767392,1.7,n,0,4.1,0)}});function sv(){let n=new ue,e=new ue;e.position.y=.55,n.add(e),C(kt([[1.28,.3],[1.22,.55],[1.05,1.2],[.8,1.9],[.55,2.35],[.42,2.45],[0,2.47]],40),y.white,0,0,0,e),C(kt([[0,0],[.9,.06],[1.24,.2],[1.32,.3],[1.28,.36],[0,.36]],40),y.ablative,0,0,0,e),C(Te(1.18,1.23,.18,40),y.orange,0,.72,0,e);for(let[l,c]of[[.98,1.35],[.66,2.05]])C(new De(l,.015,4,48),y.dark,0,c,0,e,Math.PI/2,0,0);let t=1,i=Math.PI/2,s=new ue;s.position.set(0,1.35,0),e.add(s);let r=C(pe(.62,.72,.06,.08),y.panel,0,0,t-.06,s);r.rotation.x=-.36,Er(e,.55,1.75,.6,.14,Math.PI/4.2,-.38),Ri(s,.62,.06,0,-.42,t-.03+.12).rotation.x=-.36;for(let l=0;l<4;l++){let c=l*Math.PI/2+Math.PI/4,h=Math.cos(c),d=Math.sin(c),f=new ue;f.position.set(h*.98,1.55,d*.98),f.rotation.y=-c,e.add(f),C(pe(.22,.26,.16,.03),y.dark,.05,0,0,f);for(let[p,g]of[[.15,0],[.05,.14]])C(Te(.025,.045,.08,8),y.metal,p,g,0,f,0,0,-Math.PI/2)}C(Te(.3,.38,.2,24),y.panel,0,2.55,0,e),C(Te(.32,.32,.04,24),y.orange,0,2.66,0,e),Tt(ne(.18,2.6,.05),ne(.22,3.4,.08),.012,y.metal,e,4);for(let l=0;l<4;l++){let c=l*Math.PI/2,h=Math.cos(c),d=Math.sin(c);Tt(ne(h*1.05,1.05,d*1.05),ne(h*1.7,.04,d*1.7),.05,y.metal,n,8),Tt(ne(h*1.2,.62,d*1.2),ne(h*1.48,.38,d*1.48),.035,y.chrome,n,8),C(Te(.2,.24,.07,16),y.dark,h*1.72,.035,d*1.72,n)}let o=_e(6750105,1.1,e,.22,3.42,.08),a=new se(new Yt(.85,4.5,20,1,!0),y.flame);return a.rotation.x=Math.PI,a.position.y=-1.7,n.add(a),{g:n,beacon:o,flame:a}}var ln=n=>()=>Z1(n)>=1,wr=(n,e)=>({check:()=>u.stats.mined[n]>=e,prog:()=>`${Math.min(u.stats.mined[n],e)}/${e}`}),oo=n=>({text:`\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C${On[n].name}\u300D`,check:()=>u.cityLevel>=n,prog:()=>`\u4EBA\u53E3 ${u.colony.pop}/${On[n].pop}`}),qh=n=>({text:`\u4EBA\u53E3\u8FBE\u5230 ${n}`,check:()=>u.colony.pop>=n,prog:()=>`${u.colony.pop}/${n}`}),rv={text:"\u53D1\u5C04\u6B96\u6C11\u8230",check:()=>!!u.launched,prog:()=>"\u9760\u8FD1\u53D1\u5C04\u53F0\u6309 E"},qw=[{title:"\u7B2C\u4E00\u7AE0 \xB7 \u7740\u9646",sub:"\u6D3B\u4E0B\u53BB",goals:[{text:"\u91C7\u96C6\u94C1\u77FF",...wr("iron",10)},{text:"\u91C7\u96C6\u7845\u6676",...wr("silicon",6)},{text:"\u91C7\u96C6\u6C34\u51B0",...wr("ice",6)},{text:"\u5EFA\u9020\u592A\u9633\u80FD\u9635\u5217",check:ln("solar")},{text:"\u5EFA\u9020\u5236\u6C27\u7AD9",check:ln("oxygen")}],radio:[["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u7740\u9646\u6210\u529F\u3002\u5916\u90E8\u6C14\u538B 0.6 \u5343\u5E15\uFF0C\u6C14\u6E29\u96F6\u4E0B 63 \u6444\u6C0F\u5EA6\u3002\u6B22\u8FCE\u6765\u5230\u706B\u661F\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u65B9\u821F\u4E00\u53F7\uFF0C\u8FD9\u91CC\u662F\u5730\u7403\u8054\u5408\u6307\u6325\u4E2D\u5FC3\u3002\u542C\u5230\u8BF7\u56DE\u7B54\u2026\u2026\u5F88\u597D\u3002\u4F60\u662F\u7B2C\u4E00\u4E2A\u8E0F\u4E0A\u8FD9\u7247\u571F\u5730\u7684\u4EBA\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u7740\u9646\u8231\u53EA\u80FD\u5728\u5B83\u5468\u56F4\u5F88\u5C0F\u7684\u8303\u56F4\u5185\u7ED9\u4F60\u8865\u6C27\u3002\u6309\u4F4F\u5DE6\u952E\u7528\u91C7\u77FF\u6FC0\u5149\u91C7\u96C6\u94C1\u77FF\u3001\u7845\u6676\u548C\u6C34\u51B0\uFF0C\u7136\u540E\u6309 B \u5EFA\u8D77\u7B2C\u4E00\u5EA7\u5236\u6C27\u7AD9\u3002"]]},{title:"\u7B2C\u4E8C\u7AE0 \xB7 \u7B2C\u4E00\u4E2A\u5BB6",sub:"\u4E3A\u540E\u6765\u7684\u4EBA\u70B9\u4E00\u76CF\u706F",goals:[{text:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",check:ln("habitat")},{text:"\u5EFA\u9020\u6E29\u5BA4",check:ln("greenhouse")},{text:"\u5EFA\u9020\u6C34\u51B0\u63D0\u53D6\u5668",check:ln("extractor")},{text:"\u5EFA\u9020\u7740\u9646\u573A",check:ln("beacon")},{text:"\u8FCE\u63A5\u7B2C\u4E00\u6279\u79FB\u6C11",check:()=>u.stats.arrived>=1,prog:()=>u.colony.support>0?"\u7B49\u5F85\u98DE\u8239":"\u9700\u8981\u4F4F\u623F/\u6C27/\u6C34/\u98DF\u7269/\u7535"}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5236\u6C27\u7AD9\u8FD0\u8F6C\u6B63\u5E38\uFF01\u5B83\u5468\u56F4 14 \u7C73\u90FD\u80FD\u7ED9\u5B87\u822A\u670D\u8865\u6C27\uFF0C\u4F60\u53EF\u4EE5\u8D70\u5F97\u66F4\u8FDC\u4E86\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5730\u7403\u4E0A\u6709\u5341\u4E07\u4EBA\u62A5\u540D\u4E86\u79FB\u6C11\u8BA1\u5212\u3002\u5EFA\u597D\u7A79\u9876\u3001\u6E29\u5BA4\u3001\u6C34\u6E90\u548C\u7740\u9646\u573A\u2014\u2014\u7ED9\u4ED6\u4EEC\u4E00\u4E2A\u53EF\u4EE5\u56DE\u7684\u5BB6\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u63D0\u793A\uFF1A\u592A\u9633\u80FD\u5728\u591C\u95F4\u53EA\u5269\u56DB\u6210\u529F\u7387\u3002\u591A\u5EFA\u51E0\u5EA7\uFF0C\u6B96\u6C11\u5730\u624D\u4E0D\u4F1A\u5728\u591C\u91CC\u65AD\u7535\u3002"]]},{title:"\u7B2C\u4E09\u7AE0 \xB7 \u957F\u591C",sub:"\u5B88\u62A4\u6211\u4EEC\u7684\u4EBA",goals:[{text:"\u5EFA\u9020\u5236\u9020\u5DE5\u574A",check:ln("fabricator")},{text:"\u5236\u9020\u7B49\u79BB\u5B50\u6B65\u67AA",check:()=>!!u.upgrades.rifle},{text:"\u5EFA\u9020\u9632\u5FA1\u70AE\u5854",check:ln("turret")},{text:"\u51FB\u9000\u9508\u8680\u86DB",check:()=>u.stats.kills>=6,prog:()=>`${Math.min(u.stats.kills,6)}/6`}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u2026\u2026\u7B2C\u4E00\u6279\u79FB\u6C11\u5B89\u5168\u7740\u9646\u4E86\u3002\u6211\u8FD9\u8FB9\u7684\u63A7\u5236\u5BA4\u91CC\uFF0C\u6240\u6709\u4EBA\u90FD\u7AD9\u8D77\u6765\u9F13\u638C\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u5730\u8D28\u96F7\u8FBE\u5728\u591C\u95F4\u63A2\u6D4B\u5230\u5927\u91CF\u5730\u4E0B\u79FB\u52A8\u4FE1\u53F7\u3002\u5B83\u4EEC\u4F3C\u4E4E\u88AB\u6B96\u6C11\u5730\u7684\u70ED\u91CF\u5438\u5F15\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5EFA\u4E00\u5EA7\u5236\u9020\u5DE5\u574A\uFF0C\u9020\u6B66\u5668\uFF0C\u5EFA\u70AE\u5854\u3002\u5B88\u4F4F\u5927\u5BB6\u3002"]]},{title:"\u7B2C\u56DB\u7AE0 \xB7 \u624E\u6839",sub:"\u8BA9\u706F\u706B\u5F7B\u591C\u4E0D\u7184",goals:[{text:"\u6B96\u6C11\u5730\u4EBA\u53E3\u8FBE\u5230 12",check:()=>u.colony.pop>=12,prog:()=>`${u.colony.pop}/12`},{text:"\u91C7\u96C6\u949B\u77FF",...wr("titanium",12)},{text:"\u5EFA\u9020\u805A\u53D8\u53CD\u5E94\u5806",check:ln("reactor")}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u4F60\u4EEC\u6491\u8FC7\u4E86\u957F\u591C\u3002\u73B0\u5728\uFF0C\u662F\u65F6\u5019\u8BA9\u6B96\u6C11\u5730\u771F\u6B63\u624E\u6839\u4E86\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5728\u8FDC\u65B9\u7684\u7D2B\u8272\u6676\u4F53\u77FF\u8109\u4E2D\u68C0\u6D4B\u5230\u9AD8\u7EAF\u5EA6\u949B\u3002\u6CE8\u610F\uFF1A\u90A3\u91CC\u6709\u4F53\u578B\u66F4\u5927\u7684\u9508\u8680\u86DB\u5B88\u536B\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u63D0\u793A\uFF1A\u5728\u5236\u9020\u5DE5\u574A\u53EF\u4EE5\u9020\u55B7\u6C14\u80CC\u5305\u548C\u5927\u5BB9\u91CF\u6C27\u6C14\u7F50\uFF0C\u9002\u5408\u957F\u9014\u52D8\u63A2\u3002"]]},{title:"\u7B2C\u4E94\u7AE0 \xB7 \u65B0\u5BB6\u56ED",sub:"\u6B64\u5FC3\u5B89\u5904\u662F\u543E\u4E61",goals:[{text:"\u5EFA\u9020\u5927\u6C14\u6539\u9020\u5854",check:ln("terraformer")},{text:"\u6B96\u6C11\u5730\u4EBA\u53E3\u8FBE\u5230 20",check:()=>u.colony.pop>=20,prog:()=>`${u.colony.pop}/20`},{text:"\u5B8C\u6210\u5927\u6C14\u6539\u9020",check:()=>u.terraform>=1&&u.ended&&!u.endingShown,prog:()=>`${Math.floor(u.terraform*100)}%`}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u805A\u53D8\u53CD\u5E94\u5806\u70B9\u706B\u6210\u529F\u3002\u6B96\u6C11\u5730\u7B2C\u4E00\u6B21\u5728\u591C\u91CC\u4E5F\u706F\u706B\u901A\u660E\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u6700\u540E\u4E00\u6B65\u4E86\u3002\u5927\u6C14\u6539\u9020\u5854\u2014\u2014\u5B83\u8981\u51E0\u5341\u5E74\u624D\u80FD\u5F7B\u5E95\u6539\u53D8\u706B\u661F\u3002\u4F46\u7B2C\u4E00\u573A\u96E8\uFF0C\u4E5F\u8BB8\u5C31\u5728\u660E\u5929\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u63D0\u793A\uFF1A\u57CE\u5E02\u7B49\u7EA7\u63D0\u5347\u540E\u9886\u5730\u4F1A\u6269\u5927\uFF0C\u5E76\u89E3\u9501\u516C\u5BD3\u5854\u3001\u5782\u76F4\u519C\u573A\u3001\u751F\u6001\u4E2D\u67A2\u3002"]]},{title:"\u7B2C\u516D\u7AE0 \xB7 \u661F\u8FB0\u5927\u6D77",sub:"\u4E0B\u4E00\u9897\u661F\u7403",goals:[oo(5),{text:"\u5EFA\u9020\u661F\u9645\u53D1\u5C04\u53F0",check:ln("launch")},rv],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u706B\u661F\u5DF2\u7ECF\u662F\u5BB6\u4E86\u3002\u4F46\u4EBA\u7C7B\u7684\u6545\u4E8B\uFF0C\u4ECE\u6765\u4E0D\u6B62\u4E8E\u4E00\u4E2A\u5BB6\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u6728\u536B\u4E8C\xB7\u6B27\u7F57\u5DF4\uFF1A\u51B0\u58F3\u4E4B\u4E0B\u63A2\u6D4B\u5230\u6DB2\u6001\u6D77\u6D0B\u3002\u628A\u706B\u661F\u53D1\u5C55\u6210\u300C\u661F\u6E2F\u300D\uFF0C\u5C31\u80FD\u5EFA\u9020\u661F\u9645\u53D1\u5C04\u53F0\u3002"]]}],Yw=[{title:"\u7B2C\u4E00\u7AE0 \xB7 \u51B0\u539F",sub:"\u5728\u6728\u661F\u7684\u6CE8\u89C6\u4E0B",goals:[{text:"\u91C7\u96C6\u6C34\u51B0",...wr("ice",15)},{text:"\u91C7\u96C6\u94C1\u77FF",...wr("iron",10)},{text:"\u5EFA\u9020\u5236\u6C27\u7AD9",check:ln("oxygen")},{text:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",check:ln("habitat")},{text:"\u5EFA\u9020\u7740\u9646\u573A",check:ln("beacon")}],radio:[["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u7740\u9646\u6210\u529F\u3002\u8868\u9762\u6E29\u5EA6\u96F6\u4E0B 160 \u6444\u6C0F\u5EA6\u3002\u91CD\u529B\u53EA\u6709\u5730\u7403\u7684\u4E03\u5206\u4E4B\u4E00\u3002"],["\u706B\u661F\u6B96\u6C11\u5730 \xB7 \u6797\u6653","\u4F60\u5230\u4E86\u5417\uFF1F\u6211\u4EEC\u5728\u706B\u661F\u4E0A\u770B\u5F97\u89C1\u6728\u661F\u7684\u5149\u70B9\u3002\u66FF\u6211\u4EEC\u770B\u4E00\u773C\u5B83\u7684\u5927\u7EA2\u6591\u5427\u3002"],["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u6CE8\u610F\uFF1A\u8FD9\u91CC\u79BB\u592A\u9633\u592A\u8FDC\uFF0C\u592A\u9633\u80FD\u6548\u7387\u53EA\u6709\u706B\u661F\u7684\u4E00\u534A\u3002\u6240\u6709\u6280\u672F\u5DF2\u4ECE\u706B\u661F\u540C\u6B65\u3002"]]},{title:"\u7B2C\u4E8C\u7AE0 \xB7 \u51B0\u4E0B\u4E4B\u57CE",sub:"\u6D77\u6D0B\u4E4B\u4E0A\u7684\u706F\u706B",goals:[qh(8),oo(2),{text:"\u5EFA\u9020\u805A\u53D8\u53CD\u5E94\u5806",check:ln("reactor")}],radio:[["\u5468\u9752\u79BE \xB7 \u6C34\u6587\u5B66\u5BB6","\u51B0\u5C42\u4E0B\u7684\u6D77\u6D0B\u6BD4\u5730\u7403\u6240\u6709\u6D77\u6D0B\u52A0\u8D77\u6765\u8FD8\u591A\u3002\u6709\u6C34\uFF0C\u5C31\u6709\u751F\u547D\u3002"],["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u51B0\u88C2\u7F1D\u91CC\u6709\u4E1C\u897F\u5728\u79FB\u52A8\u3002\u5B83\u4EEC\u548C\u706B\u661F\u7684\u9508\u8680\u86DB\u5F88\u50CF\u2026\u2026\u4F46\u662F\u84DD\u8272\u7684\u3002"]]},{title:"\u7B2C\u4E09\u7AE0 \xB7 \u6DF1\u6E0A\u4E4B\u5149",sub:"\u57CE\u5E02\u5728\u51B0\u539F\u4E0A\u751F\u957F",goals:[oo(3),qh(24),{text:"\u5EFA\u9020\u751F\u6001\u4E2D\u67A2",check:ln("lifehub")}],radio:[["Elena Petrova \xB7 \u5929\u6587\u5B66\u5BB6","\u4F60\u77E5\u9053\u5417\uFF1F\u4ECE\u8FD9\u91CC\u770B\uFF0C\u592A\u9633\u53EA\u662F\u4E00\u9897\u7279\u522B\u4EAE\u7684\u661F\u661F\u3002"]]},{title:"\u7B2C\u56DB\u7AE0 \xB7 \u4E0B\u4E00\u7AD9",sub:"\u4E00\u5343\u4E8C\u767E\u5149\u5E74",goals:[oo(4),{text:"\u5EFA\u9020\u661F\u9645\u53D1\u5C04\u53F0",check:ln("launch")},rv],radio:[["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u5F00\u666E\u52D2-442b\uFF1A\u4F4D\u4E8E\u5B9C\u5C45\u5E26\u7684\u7C7B\u5730\u884C\u661F\uFF0C\u8DDD\u79BB\u4E00\u5343\u4E8C\u767E\u5149\u5E74\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u8FD9\u5C06\u662F\u4EBA\u7C7B\u7B2C\u4E00\u6B21\u79BB\u5F00\u592A\u9633\u7CFB\u3002\u6211\u8001\u4E86\uFF0C\u7B49\u4E0D\u5230\u4F60\u4EEC\u62B5\u8FBE\u7684\u90A3\u5929\u3002\u4F46\u6211\u4F1A\u4E00\u76F4\u770B\u7740\u661F\u7A7A\u3002"]]}],Zw=[{title:"\u7B2C\u4E00\u7AE0 \xB7 \u53CC\u65E5\u4E4B\u4E0B",sub:"\u53E6\u4E00\u9897\u6052\u661F\u7684\u6668\u5149",goals:[{text:"\u91C7\u96C6\u94C1\u77FF",...wr("iron",15)},{text:"\u91C7\u96C6\u7845\u6676",...wr("silicon",10)},{text:"\u5EFA\u9020\u5236\u6C27\u7AD9",check:ln("oxygen")},{text:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",check:ln("habitat")},{text:"\u5EFA\u9020\u7740\u9646\u573A",check:ln("beacon")}],radio:[["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u51B7\u51BB\u4F11\u7720\u7ED3\u675F\u3002\u5F53\u524D\u65E5\u671F\uFF1A\u516C\u5143 2401 \u5E74\u3002\u6B22\u8FCE\u6765\u5230\u5F00\u666E\u52D2-442b\u3002"],["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u5927\u6C14\u542B\u6C27 14%\uFF0C\u8FD8\u4E0D\u591F\u547C\u5438\uFF0C\u4F46\u5DF2\u7ECF\u975E\u5E38\u63A5\u8FD1\u4E86\u3002\u8FD9\u91CC\u7684\u91CD\u529B\u6BD4\u5730\u7403\u7565\u5927\u3002"]]},{title:"\u7B2C\u4E8C\u7AE0 \xB7 \u5F02\u661F\u68EE\u6797",sub:"\u4F1A\u53D1\u5149\u7684\u6811",goals:[qh(10),oo(2),{text:"\u5EFA\u9020\u805A\u53D8\u53CD\u5E94\u5806",check:ln("reactor")}],radio:[["Aiko Sato \u7684\u540E\u4EE3 \xB7 \u751F\u7269\u5B66\u5BB6","\u90A3\u4E9B\u4F1E\u83C7\u6811\u5728\u591C\u91CC\u4F1A\u53D1\u5149\u3002\u6211\u7684\u66FE\u66FE\u7956\u6BCD\u4E00\u5B9A\u4F1A\u559C\u6B22\u8FD9\u91CC\u3002"],["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u68EE\u6797\u4E2D\u7684\u63A0\u98DF\u8005\u4F1A\u5728\u591C\u95F4\u51FA\u6CA1\u3002"]]},{title:"\u7B2C\u4E09\u7AE0 \xB7 \u6587\u660E",sub:"\u57CE\u5E02\u8FDE\u6210\u4E86\u661F\u6CB3",goals:[oo(4),qh(36),{text:"\u5EFA\u9020\u751F\u6001\u4E2D\u67A2",check:ln("lifehub")}],radio:[["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u6765\u81EA\u706B\u661F\u548C\u6B27\u7F57\u5DF4\u7684\u4FE1\u53F7\u5DF2\u7ECF\u62B5\u8FBE\u2014\u2014\u5B83\u4EEC\u5728\u4E00\u5343\u4E8C\u767E\u5E74\u524D\u53D1\u51FA\u3002\u4E24\u5EA7\u57CE\u5E02\u90FD\u8FD8\u4EAE\u7740\u3002"]]},{title:"\u7EC8\u7AE0 \xB7 \u661F\u9645\u6587\u660E",sub:"\u4E09\u9897\u661F\u7403\uFF0C\u4E00\u4E2A\u4EBA\u7C7B",goals:[oo(5),{text:"\u5EFA\u9020\u6587\u660E\u7EAA\u5FF5\u7891",check:ln("monument")}],radio:[["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u5EFA\u4E00\u5EA7\u7EAA\u5FF5\u7891\u5427\u3002\u732E\u7ED9\u7B2C\u4E00\u4E2A\u8E0F\u4E0A\u706B\u661F\u7684\u4EBA\u2014\u2014\u4E5F\u5C31\u662F\u4F60\u3002"]]}],Ai=st==="europa"?Yw:st==="kepler"?Zw:qw,ov=st==="mars"?2:1,wa={rifle:{name:"\u7B49\u79BB\u5B50\u6B65\u67AA",icon:"rifle",cost:{iron:18,silicon:12},desc:"\u6309 2 \u5207\u6362\u3002\u6D88\u8017\u80FD\u91CF\u53D1\u5C04\u7B49\u79BB\u5B50\u5F39\u3002"},tank:{name:"\u5927\u5BB9\u91CF\u6C27\u6C14\u7F50",icon:"tank",cost:{iron:12,ice:10},desc:"\u5B87\u822A\u670D\u6C27\u6C14\u4E0A\u9650 100 \u2192 180\u3002"},rover:{name:"\u52A0\u538B\u6F2B\u6E38\u8F66",icon:"rover",cost:{iron:35,silicon:20,ice:5},desc:"\u5728\u5DE5\u574A\u65C1\u51FA\u5382\u3002\u6309 E \u4E0A\u8F66\uFF0CShift \u52A0\u901F\u3002\u8F66\u8231\u5185\u81EA\u52A8\u8865\u6C27\uFF0C\u8FD8\u80FD\u649E\u98DE\u9508\u8680\u86DB\u3002"},scanner:{name:"\u5730\u8D28\u626B\u63CF\u4EEA",icon:"scanner",cost:{iron:8,silicon:10},desc:"\u5C0F\u5730\u56FE\u8303\u56F4\u6269\u5927\uFF0C\u7F57\u76D8\u6807\u51FA\u6700\u8FD1\u7684\u949B\u77FF\u3002"},jetpack:{name:"\u55B7\u6C14\u80CC\u5305",icon:"jet",cost:{iron:20,silicon:15,titanium:4},desc:"\u7A7A\u4E2D\u6309\u4F4F\u7A7A\u683C\u98DE\u884C\uFF0C\u6D88\u8017\u80FD\u91CF\u3002"},overclock:{name:"\u6FC0\u5149\u8D85\u9891",icon:"bolt2",cost:{silicon:20,titanium:3},desc:"\u91C7\u77FF\u901F\u5EA6 \xD72\uFF0C\u6FC0\u5149\u4F24\u5BB3\u63D0\u5347\u3002"},armor:{name:"\u590D\u5408\u88C5\u7532",icon:"armor",cost:{iron:30,titanium:6},desc:"\u751F\u547D\u4E0A\u9650 150\uFF0C\u53D7\u5230\u4F24\u5BB3 -40%\u3002"},rifle2:{name:"\u805A\u7126\u7EBF\u5708",icon:"focus",cost:{silicon:18,titanium:6},need:"rifle",desc:"\u7B49\u79BB\u5B50\u6B65\u67AA\u4F24\u5BB3 +60%\u3002"}},Op=[],ba=null,kp=0;function It(n,e){Op.push([n,e])}function av(){return ba}var zp=0,ro=200,Ns="calm",Xh=0,Fp=!1;function lv(n){if(ba&&(kp-=n,kp<=0&&(ba=null)),!ba&&Op.length&&(ba=Op.shift(),kp=3.5+ba[1].length*.11,Y.play("radio")),zp-=n,zp<=0&&u.chapter<Ai.length&&!ti()){zp=.5;let i=Ai[u.chapter];u.goalDone=u.goalDone||{};let s=!0;i.goals.forEach((r,o)=>{let a=u.chapter+":"+o;r.check()&&!u.goalDone[a]&&(u.goalDone[a]=!0,Y.play("objective"),u.events.emit("toast",`\u2713 ${r.text}`)),u.goalDone[a]||(s=!1)}),s&&u.chapter<Ai.length-1&&Vl(u.chapter+1)}u.buildings.find(i=>i.type==="terraformer"&&i.powered)&&u.terraform<1&&(u.terraform=Math.min(1,u.terraform+n/300*(Gt("atmo")?2:1)),u.terraform>=1&&!Fp&&(Fp=!0,u.events.emit("ending"))),u.raining=(u.terraform>=1||st==="kepler")&&Math.sin(u.time.t*Math.PI*4+u.time.day*1.7)>.45,Me.storms&&u.time.day>=2&&u.terraform<.7&&(ro-=n,Ns==="calm"&&ro<=0&&u.time.night<.5?(Ns="warn",ro=25,It("\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u6C99\u5C18\u66B4\u5C06\u5728 25 \u79D2\u540E\u62B5\u8FBE\u3002\u80FD\u89C1\u5EA6\u4F1A\u6025\u5267\u4E0B\u964D\uFF0C\u6C27\u6C14\u6D88\u8017\u52A0\u5FEB\u3002\u9760\u8FD1\u751F\u547D\u7EF4\u6301\u8BBE\u65BD\u3002")):Ns==="warn"&&ro<=0?(Ns="storm",Xh=70+Math.random()*40):Ns==="storm"&&(Xh-=n,Xh<=0&&(Ns="calm",ro=360+Math.random()*300,It("\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u6C99\u5C18\u66B4\u5DF2\u8FC7\u5883\u3002"))));let t=Ns==="storm"?1:0;u.storm+=(t-u.storm)*Math.min(1,n*.25),u.storm<.001&&(u.storm=0)}function Vl(n,e=!1){u.chapter=n;let t=Ai[n];e||(Y.play("chapter"),u.events.emit("chapter",t),t.radio.forEach(i=>It(i[0],i[1])))}function cv(){return{phase:Ns,t:ro,left:Xh}}function hv(n){n&&(Ns=n.phase==="storm"?"calm":n.phase,ro=n.t??200)}function uv(n){Fp=n}var Zh=[],pv=new Oe(.05,.11,2.6,8,1);pv.translate(0,-1.3,0);var Kw=new Ne({color:12121343,transparent:!0,opacity:.95,blending:ke,depthWrite:!1}),Jw=new Ne({color:16760944,transparent:!0,opacity:.95,blending:ke,depthWrite:!1}),jw={player:6743807,turret:16756800};function Gl(n,e,t,i){let s=_e(jw[i],i==="player"?1.4:1.1,u.scene);s.position.copy(n);let r=new se(pv,i==="player"?Kw:Jw);r.quaternion.setFromUnitVectors(new w(0,1,0),e),r.position.copy(n),r.frustumCulled=!1,u.scene.add(r),Zh.push({pos:n.clone(),vel:e.clone().multiplyScalar(i==="player"?110:80),life:1.4,dmg:t,owner:i,s,bolt:r})}function Qw(n,e=0){for(let t of u.enemies){if(t.dead)continue;let i=1.3*t.scale+e,s=n.x-t.pos.x,r=n.y-(t.pos.y+1*t.scale),o=n.z-t.pos.z;if(s*s+r*r+o*o<i*i)return t}return null}function mv(n){for(let e=Zh.length-1;e>=0;e--){let t=Zh[e];t.life-=n;let i=t.life<=0,s=3;for(let r=0;r<s&&!i;r++){t.pos.addScaledVector(t.vel,n/s);let o=Qw(t.pos),a=t.owner==="player"?9365503:16756832;o?(Wl(o,t.dmg,t.owner),fe.spark(t.pos,t.owner==="player"?[.5,.9,1]:[1,.7,.4],14,8),vp(t.pos,a,1.2),i=!0):t.pos.y<ve(t.pos.x,t.pos.z)&&(fe.spark(t.pos,[1,.7,.4],8,5),fe.dustPuff(t.pos,5,.8),vp(t.pos,a,.8),i=!0)}t.s.position.copy(t.pos),t.bolt.position.copy(t.pos),Math.random()<.8&&fe.trail(t.pos,t.owner==="player"?[.3,.8,1]:[1,.6,.2],.6),i&&(u.scene.remove(t.s),u.scene.remove(t.bolt),Zh.splice(e,1))}}function Bp(n,e,t=!1,i=!1){let s=i?3.4:t?1.35:.85+Math.random()*.35,r=nv(s,ip.crystal,ip.eye),o=ve(n,e);r.group.position.set(n,o,e),u.scene.add(r.group);let a=i?1300+u.time.day*40:t?90:36+u.time.day*3,l={...r,pos:r.group.position,hp:a,maxHp:a,scale:s,guardian:t,home:t?new w(n,o,e):null,boss:i,stomp:4,awake:!t,speed:i?3.4:(t?5.2:4.4)+Math.random()*1.2,phase:Math.random()*6,atk:0,flash:0,sink:0,target:null,retarget:0};return u.enemies.push(l),l}function Wl(n,e,t){n.dead||(n.hp-=e,n.flash=.12,n.awake=!0,t==="player"&&Y.play("hit"),n.hp<=0&&eS(n,t))}function eS(n,e){n.dead=!0;let t=n.pos.clone();if(t.y+=1,fe.burst(t,[1,.4,.1],40,9),fe.dustPuff(t,12,2),_r(t,n.boss?3.5:n.guardian?1.4:.9,16738858),fe.debris(t,n.legs[0].children[0].material,6,5,.45*n.scale),fe.debris(t,n.inner.children[1].material,8,6,.5*n.scale),Y.play("kill"),u.scene.remove(n.group),u.stats.kills++,n.guardian&&(u.stats.guardKills=(u.stats.guardKills||0)+1),n.boss){u.stats.bossKills=(u.stats.bossKills||0)+1,u.res.titanium+=40,u.res.silicon+=40,u.events.emit("pickup",{type:"titanium",n:40,note:"\u6676\u6BCD\u6838\u5FC3"}),u.events.emit("bossDown"),fe.burst(t,[1,.5,.15],200,20),fe.ring(new w(n.pos.x,n.pos.y,n.pos.z),4,120,[1,.5,.2]),fe.debris(t,n.inner.children[1].material,30,12,1.4),Y.play("rumble");return}let i=n.guardian?3:Math.random()<.5?1:0;i&&(u.res.titanium+=i,u.stats.mined.titanium+=i,u.events.emit("pickup",{type:"titanium",n:i,note:"\u6676\u4F53\u6B8B\u9AB8"}))}var Vp=0,ao=0,dv=!1,Gp=5,Yh=-1;function gv(){return u.enemies.find(n=>n.boss&&!n.dead)}function fv(){if(!u.buildings.length)return new w(0,0,0);let n=new w;for(let e of u.buildings)n.x+=e.x,n.z+=e.z;return n.multiplyScalar(1/u.buildings.length)}function vv(n){let e=u.player.pos,t=u.time.night>.6,i=(ti()?u.buildings.some(r=>r.type==="habitat")||u.time.day>=3:u.chapter>=ov)&&u.terraform<1&&os().foe>0;if(t&&!dv&&i){ao=Math.round(Math.min(3+(u.nightsSurvived||0)*2+Math.floor(u.colony.pop/4),26)*os().foe);let r=(u.nightsSurvived||0)%4===3;r&&(ao=Math.min(Math.round(ao*1.8),40),Yh=25),u.nightsSurvived=(u.nightsSurvived||0)+1,u.events.emit(r?"tide":"nightfall",ao)}if(dv=t,Yh>0&&t&&(Yh-=n,Yh<=0)){let r=fv(),o=Math.random()*Math.PI*2,a=Nt.clamp(r.x+Math.cos(o)*130,-Qe+180,Qe-180),l=Nt.clamp(r.z+Math.sin(o)*130,-Qe+180,Qe-180),c=Bp(a,l,!1,!0);c.sink=-6,fe.ring(new w(a,ve(a,l),l),6,140),fe.dustPuff(new w(a,ve(a,l),l),60,12),Y.play("rumble"),u.events.emit("bossSpawn")}if(t&&i&&ao>0&&(Vp-=n,Vp<=0)){Vp=3+Math.random()*5;let r=fv(),o=Math.min(ao,1+Math.floor(Math.random()*3)),a=Math.random()*Math.PI*2,l=110+Math.random()*50;for(let c=0;c<o;c++){let h=Nt.clamp(r.x+Math.cos(a)*l+(Math.random()-.5)*10,-Qe+180,Qe-180),d=Nt.clamp(r.z+Math.sin(a)*l+(Math.random()-.5)*10,-Qe+180,Qe-180),f=Bp(h,d);f.sink=-2,fe.dustPuff(new w(h,ve(h,d),d),14,3)}ao-=o}if(Gp-=n,Gp<=0){Gp=30;for(let r of u.nodes){if(r.type!=="titanium"||Math.hypot(r.x-e.x,r.z-e.z)<90)continue;if(!u.enemies.some(a=>a.guardian&&!a.dead&&a.home.distanceTo(r.mesh.position)<25)&&u.terraform<1&&os().foe>0){let a=Math.random()*6.28;Bp(r.x+Math.cos(a)*6,r.z+Math.sin(a)*6,!0)}}}let s=performance.now()*.001;for(let r=u.enemies.length-1;r>=0;r--){let o=u.enemies[r];if(o.dead){u.enemies.splice(r,1);continue}if(!o.guardian&&(u.time.night<.3||u.terraform>=1)){o.sink-=n*1.5,o.group.position.y=ve(o.pos.x,o.pos.z)+o.sink,o.sink<-3&&(u.scene.remove(o.group),u.enemies.splice(r,1));continue}o.sink<0&&(o.sink=Math.min(0,o.sink+n*1.5));let a=Math.hypot(e.x-o.pos.x,e.z-o.pos.z);if(o.retarget-=n,o.retarget<=0)if(o.retarget=1,o.target=null,o.guardian)a<22&&(o.awake=!0),o.awake&&a<70&&!u.player.dead?o.target={kind:"player"}:(o.awake=!1,o.target={kind:"home"});else if(a<32&&!u.player.dead)o.target={kind:"player"};else{let m=null,_=400;for(let E of u.buildings){if(E.type==="lamp"||E.broken)continue;let M=Math.hypot(E.x-o.pos.x,E.z-o.pos.z)-E.def.r;M<_&&(_=M,m=E)}o.target=m?{kind:"building",b:m}:{kind:"player"}}let l=e.x,c=e.z,h=1.8*o.scale,d=o.target;if(d?.kind==="building"){if(!u.buildings.includes(d.b)||d.b.broken){o.retarget=0;continue}l=d.b.x,c=d.b.z,h=d.b.def.r*.9+1.4}else d?.kind==="home"&&(l=o.home.x,c=o.home.z,h=2);let f=l-o.pos.x,p=c-o.pos.z,g=Math.hypot(f,p),x=!1;if(g>h){f/=g,p/=g;for(let E of u.enemies){if(E===o)continue;let M=o.pos.x-E.pos.x,D=o.pos.z-E.pos.z,A=Math.hypot(M,D);A<2.5&&A>.01&&(f+=M/A*.6,p+=D/A*.6)}let m=Math.hypot(f,p)||1,_=o.speed*(o.target?.kind==="home"?.5:1);o.pos.x+=f/m*_*n,o.pos.z+=p/m*_*n;for(let E of u.colliders.query(o.pos.x,o.pos.z)){if(E.kind!=="building")continue;let M=o.pos.x-E.x,D=o.pos.z-E.z,A=Math.hypot(M,D),P=E.r+.8;A<P&&A>.01&&(o.pos.x=E.x+M/A*P,o.pos.z=E.z+D/A*P)}o.group.rotation.y=Math.atan2(f,p),x=!0}else d&&d.kind!=="home"&&(o.group.rotation.y=Math.atan2(f,p),o.atk-=n,o.atk<=0&&(o.atk=1,d.kind==="player"?u.player.damage((o.boss?30:o.guardian?14:9)*os().dmg,o.pos):(d.b.hp-=o.boss?70:o.guardian?20:8,fe.spark(new w(o.pos.x,o.pos.y+1,o.pos.z),[1,.5,.2],8,5),d.b.hp<=0&&(d.b.hp=0,d.b.broken=!0,o.retarget=0,u.events.emit("broken",d.b),ls())),o.inner.position.z=.6));if(o.boss){o.stomp-=n;let m=Math.hypot(e.x-o.pos.x,e.z-o.pos.z);o.stomp<=0&&m<22&&(o.stomp=4.5,fe.ring(new w(o.pos.x,o.pos.y,o.pos.z),3,100,[.9,.45,.25]),Y.play("rumble"),u.player.landDip=Math.max(u.player.landDip,.35),m<13&&!u.driving&&(u.player.damage(18,o.pos),u.player.vel.y=4,u.player.vel.x+=(e.x-o.pos.x)/m*8,u.player.vel.z+=(e.z-o.pos.z)/m*8))}o.inner.position.z*=.85,o.pos.y=ve(o.pos.x,o.pos.z)+o.sink;let v=s*(x?12:2)+o.phase;for(let m of o.legs)m.rotation.x=Math.sin(v+m.userData.phase)*(x?.5:.08),m.rotation.z=Math.max(0,Math.cos(v+m.userData.phase))*.25*m.userData.side*(x?1:0);o.inner.position.y=Math.abs(Math.sin(v))*.08,o.flash>0?(o.flash-=n,o.inner.scale.setScalar(1+o.flash*1.2)):o.inner.scale.setScalar(1),Math.random()<n*4&&fe.trail(new w(o.pos.x,o.pos.y+1.6*o.scale,o.pos.z),[1,.35,.1],.8)}}function lo(n,e,t){let i=null,s=t,r=new w;for(let o of u.enemies){if(o.dead)continue;let a=1.3*o.scale;r.set(o.pos.x-n.x,o.pos.y+1*o.scale-n.y,o.pos.z-n.z);let l=r.dot(e);if(l<0)continue;let c=r.lengthSq()-l*l;if(c>a*a)continue;let h=l-Math.sqrt(a*a-c);h<s&&(s=h,i=o)}return i?{e:i,dist:s}:null}var xe={keys:new Set,mouse:[!1,!1,!1],dx:0,dy:0,wheel:0,pressed:new Set,clicked:[!1,!1,!1],sens:.0022,down(n){return this.keys.has(n)},hit(n){return this.pressed.has(n)},endFrame(){this.pressed.clear(),this.dx=0,this.dy=0,this.wheel=0,this.clicked=[!1,!1,!1]}};function xv(n){window.addEventListener("keydown",e=>{e.code==="Tab"&&e.preventDefault(),xe.keys.has(e.code)||xe.pressed.add(e.code),xe.keys.add(e.code)}),window.addEventListener("keyup",e=>xe.keys.delete(e.code)),window.addEventListener("blur",()=>{xe.keys.clear(),xe.mouse=[!1,!1,!1]}),window.addEventListener("mousemove",e=>{u.locked&&(xe.dx+=e.movementX||0,xe.dy+=e.movementY||0)}),n.addEventListener("mousedown",e=>{u.locked&&(xe.mouse[e.button]=!0,xe.clicked[e.button]=!0)}),window.addEventListener("mouseup",e=>{xe.mouse[e.button]=!1}),window.addEventListener("wheel",e=>{u.locked&&(xe.wheel+=Math.sign(e.deltaY))},{passive:!0}),window.addEventListener("contextmenu",e=>e.preventDefault())}var tS=Me.gravity,yv=1.7,_t=new w(-6,0,-6),Kh=class{constructor(e){this.cam=e,this.pos=new w(0,0,6),this.pos.y=ve(this.pos.x,this.pos.z),this.vel=new w,this.yaw=Math.PI*.85,this.pitch=-.05,this.onGround=!0,this.maxHealth=100,this.health=100,this.maxO2=100,this.o2=100,this.energy=100,this.bob=0,this.stepT=0,this.landDip=0,this.dead=!1,this.hurtT=0,this.flashlight=!1,this.inLife=!1,this.alarmT=0,this.lastHitDir=0,this.moving=!1,this.sprinting=!1,this.jetting=!1,this.roll=0,this.fwd=new w}get eye(){return new w(this.pos.x,this.pos.y+yv+this.bobY,this.pos.z)}damage(e,t){if(this.dead)return;let i=u.upgrades.armor?.6:1;this.health-=e*i,this.hurtT=.5,t&&(this.lastHitDir=Math.atan2(t.x-this.pos.x,t.z-this.pos.z)),Y.play("hurt"),u.events.emit("hurt",e),this.health<=0&&this.die("\u4F60\u5012\u5728\u4E86\u706B\u661F\u7684\u5C18\u571F\u91CC")}die(e){this.dead||(this.dead=!0,this.health=0,u.events.emit("death",e))}respawn(){let e=u.buildings.find(i=>i.type==="habitat")||null,t=e?new w(e.x,0,e.z+9):_t.clone().add(new w(5,0,8));for(let i in u.res)u.res[i]=Math.floor(u.res[i]*.75);this.pos.set(t.x,ve(t.x,t.z),t.z),this.vel.set(0,0,0),this.health=this.maxHealth,this.o2=this.maxO2,this.energy=100,this.dead=!1}update(e){if(this.maxO2=u.upgrades.tank?180:100,this.maxHealth=u.upgrades.armor?150:100,this.dead){this.cam.position.y-=e*.3;return}u.locked&&(this.yaw-=xe.dx*xe.sens,this.pitch=Nt.clamp(this.pitch-xe.dy*xe.sens,-1.5,1.5));let t=0,i=0;u.menuOpen||((xe.down("KeyW")||xe.down("ArrowUp"))&&(i-=1),(xe.down("KeyS")||xe.down("ArrowDown"))&&(i+=1),(xe.down("KeyA")||xe.down("ArrowLeft"))&&(t-=1),(xe.down("KeyD")||xe.down("ArrowRight"))&&(t+=1));let s=Math.hypot(t,i);this.moving=s>0,this.sprinting=this.moving&&xe.down("ShiftLeft")&&i<0&&this.o2>5;let r=this.sprinting?10.5:6.2,o=Math.sin(this.yaw),a=Math.cos(this.yaw),l=0,c=0;if(s){let M=t/s,D=i/s;l=M*a+D*o,c=-M*o+D*a}let h=this.onGround?12:2.5;if(this.vel.x+=(l*r-this.vel.x)*Math.min(1,h*e),this.vel.z+=(c*r-this.vel.z)*Math.min(1,h*e),this.jetting=!1,!u.menuOpen&&xe.hit("Space")&&this.onGround)this.vel.y=5.4,this.onGround=!1,Y.play("jump");else if(!u.menuOpen&&xe.down("Space")&&!this.onGround&&u.upgrades.jetpack&&this.energy>1&&this.vel.y<6){this.vel.y+=15*e,this.energy-=22*e,this.jetting=!0,Math.random()<.5&&Y.play("jet");let M=new w(this.pos.x+o*.4,this.pos.y+.8,this.pos.z+a*.4);fe.flame(M),fe.flame(M)}this.vel.y-=tS*e;let d=this.pos.x+this.vel.x*e,f=this.pos.z+this.vel.z*e;this.pos.x=Nt.clamp(d,-Qe+120,Qe-120),this.pos.z=Nt.clamp(f,-Qe+120,Qe-120),this.pos.y+=this.vel.y*e;for(let M of u.colliders.query(this.pos.x,this.pos.z)){let D=this.pos.x-M.x,A=this.pos.z-M.z,P=Math.hypot(D,A),I=M.r+.45;if(P<I&&P>1e-4){if(M.kind==="rock"&&this.pos.y>ve(M.x,M.z)+M.r*.6)continue;this.pos.x=M.x+D/P*I,this.pos.z=M.z+A/P*I}}let p=ve(this.pos.x,this.pos.z);this.pos.y<=p?(!this.onGround&&this.vel.y<-4&&(this.landDip=Math.min(.35,-this.vel.y*.04),Y.play("land"),fe.dustPuff(this.pos,6,1)),this.pos.y=p,this.vel.y=0,this.onGround=!0):this.onGround&&this.pos.y-p<.5&&this.vel.y<=0?(this.pos.y=p,this.vel.y=0):this.onGround=!1;let g=Math.hypot(this.vel.x,this.vel.z);this.onGround&&g>.5&&(this.bob+=e*g*1.25,this.stepT+=e*g,this.stepT>2.6&&(this.stepT=0,Y.play("step"),Math.random()<.4&&fe.dustPuff(this.pos,2,.4))),this.landDip*=Math.pow(.002,e),this.bobY=Math.sin(this.bob*2)*.05*Math.min(1,g/6)-this.landDip;let x=u.shake||0,v=performance.now()*.05;this.cam.position.set(this.pos.x+Math.sin(v*1.7)*x*.25,this.pos.y+yv+this.bobY+Math.sin(v*2.3)*x*.2,this.pos.z+Math.cos(v*1.3)*x*.25),this.roll+=(-t*.025-this.roll)*Math.min(1,e*6);let m=(u.baseFov||72)+(this.sprinting?8:0)+(this.jetting?4:0);Math.abs(this.cam.fov-m)>.05&&(this.cam.fov+=(m-this.cam.fov)*Math.min(1,e*5),this.cam.updateProjectionMatrix()),this.cam.rotation.set(this.pitch,this.yaw,this.roll+Math.sin(this.bob)*.006*Math.min(1,g/6),"YXZ"),this.cam.getWorldDirection(this.fwd);let _=K1(this.pos),E=this.pos.distanceTo(_t)<11;if(this.inLife=!!_||E,this.inLife)this.o2=Math.min(this.maxO2,this.o2+30*e),this.health=Math.min(this.maxHealth,this.health+4*e);else{let M=.55+(this.sprinting?.6:0)+(this.jetting?.6:0);M*=(1+u.storm*.8)*os().o2*(Gt("suit")?.65:1),u.terraform>=1&&(M*=.5),this.o2=Math.max(0,this.o2-M*e)}this.o2<=0&&(this.health-=9*e,this.health<=0&&this.die("\u6C27\u6C14\u8017\u5C3D")),this.o2<this.maxO2*.2&&!this.inLife&&(this.alarmT-=e,this.alarmT<=0&&(this.alarmT=2,Y.play("alarm"))),this.jetting||(this.energy=Math.min(100,this.energy+(this.onGround?14:4)*e)),this.hurtT=Math.max(0,this.hurtT-e),this.health=Math.min(this.health,this.maxHealth)}};var Tr=[{id:"laser",name:"\u91C7\u77FF\u6FC0\u5149",icon:"laser"},{id:"rifle",name:"\u7B49\u79BB\u5B50\u6B65\u67AA",icon:"rifle",need:"rifle"},{id:"build",name:"\u5EFA\u9020",icon:"build"}],hn={index:0,get id(){return Tr[this.index].id}},$i,nS=0,co=null,Xp,Hs,$l,Sr={},ks,hs,Aa,Ra,Xl,Mv=new w(.24,-.22,-.85);function bv(n){Hs=new ji,$l=new un(n.fov,n.aspect,.01,10),Hs.add(new hr(16769224,4202520,1.4));let e=new Qi(16777215,1.5);e.position.set(1,2,1),Hs.add(e),Hs.userData.dl=e;let t=(M,D,A,P,I,S)=>{let b=new se(M,D);return b.position.set(A,P,I),S.add(b),b},i=new Qi(8965375,1.2);i.position.set(-2,1,2),Hs.add(i);let s=(M,D,A,P=20)=>{let I=new As(M.map(([S,b])=>new te(S,b)),P);return I.rotateX(-Math.PI/2),t(I,D,0,0,0,A)},r=new ge({color:15262940,roughness:.35,metalness:.15}),o=new ge({color:2764083,roughness:.45,metalness:.7}),a=new ge({color:16742954,roughness:.4,metalness:.2});Xp=new ge({color:3346688,emissive:16747056,emissiveIntensity:1.2});let l=new ge({color:8755,emissive:4515583,emissiveIntensity:1.5}),c=(M,D,A,P,I,S,b)=>{let U=t(new Oe(M,M,D,16),A,P,I,S,b);return U.rotation.x=Math.PI/2,U},h=new ue;s([[0,-.12],[.04,-.12],[.056,-.08],[.058,.18],[.05,.26],[.036,.3],[.03,.36],[0,.36]],r,h),c(.06,.02,a,0,0,-.02,h),c(.06,.012,a,0,0,.1,h),c(.045,.06,o,0,0,.1+.04,h);for(let M=0;M<3;M++){let D=t(new De(.034-M*.003,.007,8,20),Xp,0,0,-.33-M*.035,h)}c(.018,.14,o,0,0,-.38,h);let d=t(new Ge(.02,12,8),new Ne({color:16760960}),0,0,-.455,h);t(new Ye(.018,.016,.2),o,0,.062,-.05,h),c(.026,.17,a,.06,-.02,-.02,h),t(new Ye(.032,.07,.045),o,0,-.075,.02,h).rotation.x=.3,t(new Ye(.03,.02,.07),o,0,-.05,.02,h);let f=t(new Un(.04,.025),new Ne({color:6743807}),-.0585,.012,.04,h);f.rotation.y=-Math.PI/2,h.userData.tip=d;let p=new ue;s([[0,-.2],[.04,-.2],[.055,-.15],[.055,.2],[.048,.28],[0,.28]],r,p),c(.035,.32,o,0,0,-.36,p);for(let M=0;M<4;M++)t(new De(.046,.009,8,20),l,0,0,-.27-M*.065,p);c(.05,.03,a,0,0,-.18,p),c(.022,.16,o,0,.075,-.02,p),t(new Oe(.023,.023,.005,12),l,0,.075,-.1,p).rotation.x=Math.PI/2,t(new Ye(.032,.07,.045),o,0,-.075,0,p).rotation.x=.3,t(new Ye(.035,.09,.05),l,0,-.08,-.06,p);let g=new ue;t(new Ye(.32,.22,.018),o,0,0,0,g),t(new Ye(.33,.012,.022),a,0,.112,0,g);let x=document.createElement("canvas");x.width=256,x.height=176;let v=x.getContext("2d");v.fillStyle="#06222e",v.fillRect(0,0,256,176),v.strokeStyle="rgba(127,230,255,.25)";for(let M=0;M<256;M+=16)v.beginPath(),v.moveTo(M,0),v.lineTo(M,176),v.stroke();for(let M=0;M<176;M+=16)v.beginPath(),v.moveTo(0,M),v.lineTo(256,M),v.stroke();v.strokeStyle="#7fe6ff",v.lineWidth=2,v.beginPath(),v.arc(128,110,50,Math.PI,0),v.lineTo(178,140),v.lineTo(78,140),v.closePath(),v.stroke(),v.fillStyle="#7fe6ff",v.font="bold 14px sans-serif",v.fillText("BLUEPRINT",12,22);let m=new qt(x);m.colorSpace=bt;let _=t(new Un(.29,.195),new Ne({map:m,transparent:!0,opacity:.95}),0,-.004,.01,g);g.userData.scr=_,g.rotation.set(-.5,.25,0),Sr={laser:h,rifle:p,build:g};for(let M in Sr)Sr[M].scale.setScalar(M==="build"?.45:.6),Sr[M].visible=!1,Hs.add(Sr[M]);let E=new Oe(1,1,1,16,24,!0);E.translate(0,.5,0),ks=new se(E,new Ne({color:16773328,transparent:!0,opacity:.95,blending:ke,depthWrite:!1})),hs=new se(E,_1(16742960)),ks.visible=hs.visible=!1,ks.frustumCulled=hs.frustumCulled=!1,u.scene.add(ks,hs),Aa=_e(16748608,1.6,u.scene),Aa.visible=!1,$i=new hi(16747072,0,6,2),u.scene.add($i),Xl=_e(6743807,.35,Hs),Xl.visible=!1,Ra=new jo(16773853,0,70,.42,.45,1.2),n.add(Ra),Ra.position.set(.3,-.2,0),Ra.target.position.set(0,0,-10),n.add(Ra.target),u.scene.add(n)}function Jh(n){let e=Tr[n];if(e.need&&!u.upgrades[e.need]){u.events.emit("toast",`\u5C1A\u672A\u5236\u9020\uFF1A${e.name}\uFF08\u5728\u5236\u9020\u5DE5\u574A\u5236\u4F5C\uFF09`),Y.play("deny");return}hn.index===n&&e.id!=="build"||(hn.index=n,Y.play("ui"),e.id==="build"?u.events.emit("openBuild"):so(null))}var Sa=0,Wp=0,Ta=0,$p=0,jh=0,_v=-1,iS=new w,sS=new w(0,1,0),Ca=new w;function Ev(n,e,t){let i=null,s=t;for(let r of u.nodes){let o=r.mesh.scale.x,a=1.5*o+.3;Ca.set(r.x-n.x,r.y+.7*o-n.y,r.z-n.z);let l=Ca.dot(e);if(l<0||l>t+a)continue;let c=Ca.lengthSq()-l*l;if(c>a*a)continue;let h=l-Math.sqrt(a*a-c);h<s&&(s=Math.max(.3,h),i=r)}return i?{n:i,dist:s}:null}function rS(n,e,t){let i=null,s=t;for(let r of u.buildings){let o=Math.max(1.2,r.def.r);Ca.set(r.x-n.x,r.y+Math.min(o,3)*.6-n.y,r.z-n.z);let a=Ca.dot(e);if(a<0)continue;let l=Ca.lengthSq()-a*a;if(l>o*o)continue;let c=a-Math.sqrt(o*o-l);c<s&&(s=c,i=r)}return i}function wv(n,e,t){let i=hn.id;_v!==hn.index&&(jh=1,_v=hn.index),jh=Math.max(0,jh-n*4);for(let x in Sr)Sr[x].visible=x===i;let s=Sr[i],r=Math.hypot(e.vel.x,e.vel.z),o=Math.sin(e.bob)*.012*Math.min(1,r/6),a=Math.abs(Math.cos(e.bob))*.012*Math.min(1,r/6);Ta*=Math.pow(1e-4,n);let l=i==="build"?[.2,-.24,-.6]:[.24,-.22,-.58];s.position.set(l[0]+o,l[1]+a-jh*.3-(e.sprinting?.04:0),l[2]+Ta*.08),s.rotation.x=(i==="build"?-.5:0)+Ta*.15+(e.sprinting?-.25:0),i==="build"&&(s.userData.scr.material.opacity=.6+Math.sin(performance.now()*.005)*.2),$l.aspect=t.aspect,$l.fov=t.fov,$l.updateProjectionMatrix();let c=.4+(1-u.time.night)*1.2;Hs.userData.dl.intensity=c,xe.hit("KeyF")&&!u.menuOpen&&(e.flashlight=!e.flashlight,Y.play("ui")),Ra.intensity=e.flashlight?60:0;let h=t.position,d=e.fwd;u.lookBuilding=u.menuOpen?null:rS(h,d,14);let f=u.menuOpen?null:Ev(h,d,30);u.aimNode=i==="laser"&&!!f&&f.dist<9;let p=u.menuOpen||i==="build"?null:lo(h,d,i==="rifle"?140:40);if(p){let x=p.e;u.aimTarget={id:x,x:x.pos.x,y:x.pos.y+1*x.scale,z:x.pos.z,r:1.7*x.scale,name:x.boss?"\u6676\u6BCD":x.guardian?"\u949B\u77FF\u5B88\u536B":"\u9508\u8680\u86DB",tag:x.boss?"CRYSTAL MOTHER":"HOSTILE",dist:p.dist,bar:Math.max(0,x.hp/x.maxHp),kind:"enemy"}}else if(f&&i!=="build"){let x=f.n;u.aimTarget={id:x,x:x.x,y:x.y+.8*x.mesh.scale.x,z:x.z,r:1.7*x.mesh.scale.x+.3,name:sn[x.type].name,tag:{iron:"FE ORE",silicon:"SI CRYSTAL",ice:"H2O ICE",titanium:"TI ORE"}[x.type],dist:f.dist,bar:Math.max(0,x.amount/x.max),kind:"node",color:sn[x.type].color}}else u.aimTarget=null;if(!u.menuOpen&&!e.dead&&!u.photo){if(xe.hit("Digit1")&&Jh(0),xe.hit("Digit2")&&Jh(1),(xe.hit("Digit3")||xe.hit("KeyB"))&&Jh(2),xe.wheel&&hn.id!=="build"){let x=hn.index;for(let v=0;v<2&&(x=(x+(xe.wheel>0?1:2))%2,!(!Tr[x].need||u.upgrades[Tr[x].need]));v++);x!==hn.index&&Jh(x)}hn.id==="build"&&Ct.type&&xe.wheel&&(Ct.rot+=xe.wheel*.3)}ks.visible=hs.visible=Aa.visible=!1,nS-=n,$i.intensity=Math.max(0,$i.intensity-n*120),co&&(co.mesh.position.set(co.x,co.y,co.z),co=null),Xl.visible=!1,Wp-=n;let g=xe.mouse[0]&&!u.menuOpen&&!e.dead&&u.locked;if(Xp.emissiveIntensity=i==="laser"&&g?3+Math.random()*1.5:1+Math.sin(performance.now()*.003)*.3,i==="laser")if(g){let v=Ev(h,d,9),m=lo(h,d,9),_=Ch(h,d,9),E=9,M=null;_&&_.dist<E&&(E=_.dist,M="ground"),v&&v.dist<=E&&(E=v.dist,M="node"),m&&m.dist<E&&(E=m.dist,M="enemy");let D=iS.copy(h).addScaledVector(d,E),A=t.localToWorld(Mv.clone()),P=D.clone().sub(A),I=P.length();P.normalize();let S=new dn().setFromUnitVectors(sS,P),b=1+Math.sin(performance.now()*.05)*.2;if(ks.position.copy(A),ks.quaternion.copy(S),ks.scale.set(.012*b,I,.012*b),hs.position.copy(A),hs.quaternion.copy(S),hs.scale.set(.085*b,I,.085*b),hs.material.uniforms.uLen.value=I,Math.random()<.35&&fe.spark(D,[1,.75,.4],2,7,.5),ks.visible=hs.visible=!0,Aa.position.copy(D),Aa.visible=!0,Aa.scale.setScalar(1.2+Math.random()*.8),Ta=Math.max(Ta,.15+Math.random()*.1),$i.position.copy(D).addScaledVector(d,-.6),$i.color.setRGB(1,.55,.25),$i.intensity=5+Math.random()*4,M==="node"){let U=v.n;for($i.color.setRGB(...Ds[U.type]),co=U,U.mesh.position.set(U.x+(Math.random()-.5)*.07,U.y+(Math.random()-.5)*.05,U.z+(Math.random()-.5)*.07),Math.random()<.15&&fe.dustPuff(D,1,.4),Sa+=n*3.2*(u.upgrades.overclock?2:1)*(Gt("laser2")?1.5:1)*os().yield,Math.random()<.7&&fe.spark(D,Ds[U.type],2,5,.4),$p-=n,$p<=0&&($p=.09,Y.play("mine"));Sa>=1&&u.nodes.includes(U);)if(Sa-=1,u.res[U.type]++,u.stats.mined[U.type]++,U.meteor&&(u.stats.meteorMined=(u.stats.meteorMined||0)+1),u.events.emit("pickup",{type:U.type,n:1}),Nh(U,1)){Y.play("deplete"),Sa=0;break}}else M==="enemy"?(Wl(m.e,16*n*(u.upgrades.overclock?1.5:1),"laser"),Math.random()<.5&&fe.spark(D,[1,.5,.2],3,5)):M==="ground"&&(Math.random()<.3&&fe.spark(D,[1,.6,.3],1,3),Math.random()<.1&&fe.dustPuff(D,1,.3));Y.laser(!0)}else Y.laser(!1),Sa=Math.min(Sa,.9);else Y.laser(!1);if(i==="rifle"&&g&&Wp<=0)if(e.energy>=5){Wp=.16,e.energy-=5,Ta=1;let x=t.localToWorld(Mv.clone()),v=lo(h,d,200),m=Ch(h,d,200),_=200;m&&(_=m.dist),v&&v.dist<_&&(_=v.dist);let M=h.clone().addScaledVector(d,_).sub(x).normalize();Gl(x,M,u.upgrades.rifle2?30:19,"player"),Y.play("shoot"),Xl.visible=!0,Xl.position.set(.24,-.21,-.86),$i.position.copy(x),$i.color.setRGB(.4,.9,1),$i.intensity=12}else xe.clicked[0]&&(Y.play("deny"),u.events.emit("toast","\u80FD\u91CF\u4E0D\u8DB3"));if(i==="build"){let x=!u.menuOpen&&Ct.type?Ch(h,d,40):null;if(j1(x?x.point:null,e.pos),!u.menuOpen&&Ct.type&&(xe.hit("KeyR")&&(Ct.rot+=Math.PI/4),xe.clicked[0]))if(Ct.valid){let v=Q1();v&&u.events.emit("built",v)}else Y.play("deny"),u.events.emit("toast",Ct.reason);xe.clicked[2]&&(so(null),hn.index=0,Y.play("ui"))}}function Sv(n){u.player.dead||u.driving||u.photo||(n.autoClear=!1,n.clearDepth(),n.render(Hs,$l),n.autoClear=!0)}var Pa=[["\u6797\u6653","\u690D\u7269\u5B66\u5BB6","\u6211\u4ECE\u4E91\u5357\u5E26\u6765\u4E86\u4E00\u5305\u8336\u6811\u79CD\u5B50\u3002\u603B\u6709\u4E00\u5929\uFF0C\u706B\u661F\u4E0A\u4E5F\u80FD\u6CE1\u4E00\u58F6\u70ED\u8336\u3002"],["Amara Okafor","\u533B\u751F","\u5728\u5730\u7403\u4E0A\uFF0C\u6211\u6551\u8FC7\u5F88\u591A\u4EBA\u3002\u5728\u8FD9\u91CC\uFF0C\u6211\u60F3\u770B\u7740\u5B69\u5B50\u4EEC\u5E73\u5B89\u957F\u5927\u3002"],["\u9648\u9ED8","\u5DE5\u7A0B\u5E08","\u8FD9\u91CC\u7684\u6BCF\u4E00\u9897\u87BA\u4E1D\uFF0C\u90FD\u662F\u6211\u4EEC\u4EB2\u624B\u62E7\u4E0A\u53BB\u7684\u3002"],["Mateo Silva","\u5730\u8D28\u5B66\u5BB6","\u4F60\u770B\u89C1\u90A3\u4E9B\u5CA9\u5C42\u4E86\u5417\uFF1F\u5B83\u4EEC\u6BD4\u4EBA\u7C7B\u7684\u5386\u53F2\u8FD8\u8981\u53E4\u8001\u56DB\u5341\u4EBF\u5E74\u3002"],["\u82CF\u5FF5","\u6559\u5E08",'\u6211\u7684\u7B2C\u4E00\u5802\u8BFE\uFF0C\u5C31\u53EB"\u6211\u4EEC\u4E3A\u4EC0\u4E48\u6765\u5230\u706B\u661F"\u3002'],["Yuki Tanaka","\u98DE\u884C\u5458","\u4ECE\u8F68\u9053\u4E0A\u770B\uFF0C\u4F60\u4EEC\u7684\u706F\u5149\u50CF\u662F\u7EA2\u8272\u6C99\u6F20\u91CC\u7684\u4E00\u4E32\u73CD\u73E0\u3002"],["\u738B\u5927\u5C71","\u53A8\u5E08","\u6E29\u5BA4\u91CC\u7684\u7B2C\u4E00\u6279\u571F\u8C46\uFF0C\u6211\u505A\u4E86\u4E00\u9505\u571F\u8C46\u7096\u83DC\u3002\u5927\u5BB6\u90FD\u54ED\u4E86\u3002"],["Elena Petrova","\u5929\u6587\u5B66\u5BB6","\u665A\u4E0A\u62AC\u5934\uFF0C\u90A3\u9897\u6700\u4EAE\u7684\u84DD\u661F\uFF0C\u5C31\u662F\u5730\u7403\u3002"],["\u8D75\u5C0F\u96E8","\u5B66\u751F","\u6211\u5341\u516D\u5C81\u3002\u6211\u4F1A\u662F\u7B2C\u4E00\u4EE3\u5728\u706B\u661F\u957F\u5927\u7684\u4EBA\u3002"],["Kwame Mensah","\u7535\u5DE5","\u53EA\u8981\u706F\u8FD8\u4EAE\u7740\uFF0C\u8FD9\u91CC\u5C31\u662F\u5BB6\u3002"],["\u5468\u9752\u79BE","\u6C34\u6587\u5B66\u5BB6","\u51B0\u5C42\u4E0B\u9762\u6709\u6C34\u3002\u6709\u6C34\uFF0C\u5C31\u6709\u751F\u547D\u3002"],["Priya Sharma","\u7A0B\u5E8F\u5458","\u6211\u5199\u7684\u4EE3\u7801\u5728\u63A7\u5236\u5236\u6C27\u7AD9\u3002\u522B\u62C5\u5FC3\uFF0C\u6211\u6D4B\u8BD5\u8FC7\u4E09\u5343\u904D\u4E86\u3002"],["\u674E\u957F\u98CE","\u8001\u5175","\u6211\u5E74\u8F7B\u65F6\u5B88\u8FC7\u8FB9\u7586\u3002\u73B0\u5728\uFF0C\u6211\u5B88\u7740\u4EBA\u7C7B\u7684\u65B0\u8FB9\u7586\u3002"],["Sofia Rossi","\u5EFA\u7B51\u5E08","\u7A79\u9876\u7684\u5F27\u5EA6\uFF0C\u662F\u6211\u7167\u7740\u6545\u4E61\u6559\u5802\u7684\u5706\u9876\u753B\u7684\u3002"],["\u4F55\u5B89","\u62A4\u58EB","\u60F3\u5BB6\u7684\u65F6\u5019\uFF0C\u6211\u5C31\u53BB\u6E29\u5BA4\u91CC\u95FB\u95FB\u6CE5\u571F\u7684\u5473\u9053\u3002"],["Jonas Berg","\u673A\u68B0\u5E08","\u706B\u661F\u7684\u6C99\u5B50\u4F1A\u94BB\u8FDB\u4EFB\u4F55\u7F1D\u9699\u3002\u4F46\u6211\u4EEC\u6BD4\u6C99\u5B50\u66F4\u56FA\u6267\u3002"],["\u9A6C\u6674","\u8BB0\u8005","\u6211\u8981\u8BB0\u5F55\u4E0B\u8FD9\u4E00\u5207\u3002\u51E0\u767E\u5E74\u540E\u7684\u4EBA\u4F1A\u60F3\u77E5\u9053\uFF0C\u6700\u521D\u662F\u600E\u6837\u7684\u3002"],["Omar Haddad","\u519C\u5B66\u5BB6","\u6211\u7956\u7236\u5728\u6C99\u6F20\u91CC\u79CD\u51FA\u4E86\u6930\u67A3\u3002\u6211\u8981\u5728\u706B\u661F\u79CD\u51FA\u68EE\u6797\u3002"],["\u5434\u6850","\u753B\u5BB6","\u706B\u661F\u7684\u65E5\u843D\u662F\u84DD\u8272\u7684\u3002\u5730\u7403\u4E0A\u6CA1\u6709\u4EBA\u4F1A\u76F8\u4FE1\u3002"],["Grace Kim","\u5FC3\u7406\u533B\u751F","\u79BB\u5BB6\u5F88\u8FDC\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5F7C\u6B64\u5C31\u662F\u5BB6\u3002"],["\u90ED\u8FDC","\u7236\u4EB2","\u6211\u5973\u513F\u5728\u98DE\u8239\u4E0A\u51FA\u751F\u3002\u5979\u7684\u51FA\u751F\u8BC1\u660E\u4E0A\u5199\u7740\uFF1A\u51FA\u751F\u5730\uFF0C\u661F\u9645\u7A7A\u95F4\u3002"],["Lucas Moreau","\u97F3\u4E50\u5BB6","\u6211\u5E26\u4E86\u4E00\u628A\u5409\u4ED6\u3002\u4ECA\u665A\u7A79\u9876\u91CC\u6709\u97F3\u4E50\u4F1A\uFF0C\u4F60\u6765\u5417\uFF1F"],["\u94B1\u591A\u591A","\u4F1A\u8BA1","\u6211\u7B97\u8FC7\u4E86\uFF1A\u7167\u8FD9\u4E2A\u901F\u5EA6\uFF0C\u4E8C\u5341\u5E74\u540E\u8FD9\u91CC\u4F1A\u6709\u4E00\u5EA7\u57CE\u5E02\u3002"],["Aiko Sato","\u751F\u7269\u5B66\u5BB6","\u90A3\u4E9B\u9508\u8680\u86DB\u2026\u2026\u4E5F\u8BB8\u5B83\u4EEC\u53EA\u662F\u5728\u4FDD\u62A4\u81EA\u5DF1\u7684\u5BB6\u56ED\u3002"],["\u9093\u5353","\u77FF\u5DE5","\u949B\u77FF\u91CC\u85CF\u7740\u706B\u661F\u7684\u5FC3\u8DF3\u3002"],["Nadia Volkova","\u6C14\u8C61\u5B66\u5BB6","\u5927\u6C14\u6539\u9020\u5854\u542F\u52A8\u540E\uFF0C\u4E5F\u8BB8\u6211\u4EEC\u80FD\u770B\u89C1\u706B\u661F\u4E0A\u7684\u7B2C\u4E00\u7247\u4E91\u3002"],["\u9EC4\u4E00\u9E23","\u673A\u5668\u4EBA\u4E13\u5BB6","\u673A\u5668\u53EF\u4EE5\u66FF\u6211\u4EEC\u5E72\u6D3B\uFF0C\u4F46\u53EA\u6709\u4EBA\uFF0C\u624D\u80FD\u628A\u4E00\u4E2A\u5730\u65B9\u53D8\u6210\u5BB6\u3002"],["Samuel Okoro","\u7267\u5E08","\u65E0\u8BBA\u5728\u54EA\u9897\u661F\u7403\u4E0A\uFF0C\u6211\u4EEC\u90FD\u4F1A\u4E3A\u65B0\u751F\u7684\u5B69\u5B50\u795D\u798F\u3002"],["\u53F6\u77E5\u79CB","\u8BD7\u4EBA",'"\u6B64\u5FC3\u5B89\u5904\u662F\u543E\u4E61\u3002"\u2014\u2014\u82CF\u8F7C\u3002\u6211\u60F3\uFF0C\u4ED6\u8BF4\u5F97\u5BF9\u3002'],["Hannah Weber","\u7269\u7406\u5B66\u5BB6","\u805A\u53D8\u53CD\u5E94\u5806\u7684\u5149\uFF0C\u548C\u592A\u9633\u662F\u540C\u4E00\u79CD\u5149\u3002"],["\u5C0F\u6EE1","\u5B69\u5B50","\u53D4\u53D4\uFF0C\u5730\u7403\u662F\u4EC0\u4E48\u6837\u5B50\u7684\uFF1F"],["Diego Ram\xEDrez","\u767B\u5C71\u5BB6","\u5965\u6797\u5E15\u65AF\u5C71\u6709\u4E24\u4E07\u7C73\u9AD8\u3002\u603B\u6709\u4E00\u5929\u6211\u8981\u7AD9\u4E0A\u53BB\u3002"]],Qh=0;function Tv(n,e,t){let i=t?.idx??Qh++,s=Pa[i%Pa.length],r=Gg(i);r.group.position.set(n,ve(n,e),e),u.scene.add(r.group);let o={...r,idx:i,name:s[0]+(i>=Pa.length?` ${Math.floor(i/Pa.length)+1}\u4E16`:""),job:s[1],line:s[2],pos:r.group.position,target:null,wait:Math.random()*3,phase:Math.random()*6,talked:0};return u.colonists.push(o),o}function oS(n){let e=u.buildings.filter(o=>o.type!=="lamp");if(!e.length)return new w(n.pos.x+(Math.random()-.5)*10,0,n.pos.z+(Math.random()-.5)*10);let t=e;if(u.time.night>.5){let o=e.filter(l=>l.type==="plaza"&&l.powered);if(o.length&&Math.random()<.85){let l=o[n.idx%o.length],c=n.idx*2.399%(Math.PI*2),h=2.8+n.idx%3*.9;return n.atPlaza=l,new w(l.x+Math.cos(c)*h,0,l.z+Math.sin(c)*h)}let a=e.filter(l=>l.type==="habitat"||l.type==="apartment");a.length&&(t=a)}n.atPlaza=null;let i=t[Math.floor(Math.random()*t.length)],s=Math.random()*Math.PI*2,r=i.def.r+1.5+Math.random()*5;return new w(i.x+Math.cos(s)*r,0,i.z+Math.sin(s)*r)}var ql=null,qp=25;function aS(n,e){let t=iv();t.group.userData.shuttle=!0,t.group.position.set(n.x,n.y+260,n.z),u.scene.add(t.group),ql={...t,pad:n,n:e,t:0,phase:"descend"},Y.play("rumble"),u.events.emit("shuttleIncoming",e)}function Rv(n){let e=u.colony;if(u.popTotal=Math.max(u.popTotal||0,u.colonists.length),e.pop=u.popTotal,e.pop)for(u._work=(u._work||0)+n*e.pop*.04*(Gt("culture")?2:1)*Ap();u._work>=1;){u._work-=1;let r=Math.random()<.55?"iron":Math.random()<.6?"silicon":"ice";u.res[r]++}let t=u.buildings.filter(r=>r.type==="beacon"&&r.powered),i=e.support-e.pop;!ql&&t.length&&i>0&&!u.ended&&(qp-=n,qp<=0&&(qp=Math.max(20,50/t.length)*(Gt("pr")?.55:1)/Ap(),aS(t[Math.floor(Math.random()*t.length)],Math.min(i,4+(u.cityLevel||0)*2+(Gt("pr")?2:0))))),ql&&lS(n);let s=performance.now()*.001;for(let r of u.colonists){r.target||(r.wait-=n,r.wait<=0&&(r.target=oS(r)));let o=!1;if(r.target){let h=r.target.x-r.pos.x,d=r.target.z-r.pos.z,f=Math.hypot(h,d);if(f<.6)r.target=null,r.wait=3+Math.random()*8;else{r.pos.x+=h/f*1.7*n,r.pos.z+=d/f*1.7*n;for(let g of u.colliders.query(r.pos.x,r.pos.z)){if(g.kind!=="building")continue;let x=r.pos.x-g.x,v=r.pos.z-g.z,m=Math.hypot(x,v),_=g.r+.4;m<_&&m>.01&&(r.pos.x=g.x+x/m*_,r.pos.z=g.z+v/m*_)}r.group.rotation.y=Math.atan2(h,d),o=!0}}let a=Math.hypot(u.player.pos.x-r.pos.x,u.player.pos.z-r.pos.z);a<4&&!o?r.group.rotation.y=Math.atan2(u.player.pos.x-r.pos.x,u.player.pos.z-r.pos.z):!o&&r.atPlaza&&(r.group.rotation.y=Math.atan2(r.atPlaza.x-r.pos.x,r.atPlaza.z-r.pos.z),r.wait=Math.max(r.wait,2),u.time.night<.3&&(r.wait=0)),r.pos.y=ve(r.pos.x,r.pos.z);let l=s*7+r.phase,c=o?Math.sin(l)*.6:0;r.legL.rotation.x=c,r.legR.rotation.x=-c,r.armL.rotation.x=-c*.8,r.armR.rotation.x=c*.8,!o&&a<4&&(r.armR.rotation.x=-2.6+Math.sin(s*6)*.3),r.body.position.y=.72+(o?Math.abs(Math.sin(l))*.04:0),r.talked=Math.max(0,r.talked-n)}}function lS(n){let e=ql;e.t+=n;let t=e.pad,i=e.group;if(e.phase==="descend"){let s=Math.min(1,e.t/11),r=1-Math.pow(1-s,3);i.position.y=t.y+.6+260*(1-r),e.flame.scale.set(1,.6+(1-r)*1.2+Math.random()*.2,1);for(let o=0;o<3;o++)fe.flame(i.position);s>.85&&Math.random()<.5&&fe.dustPuff(new w(t.x,t.y,t.z),4,10),s>=1&&(e.phase="landed",e.t=0,fe.ring(new w(t.x,t.y,t.z),3,80),e.flame.visible=!1,e.flameGlow.visible=!1)}else if(e.phase==="landed"){if(e.total=e.total||e.n,e.n>0&&e.t>2+(e.total-e.n)*.6){let s;u.colonists.length<40?(s=Tv(t.x+(Math.random()-.5)*2,t.z+3),s.target=new w(t.x+(Math.random()-.5)*20,0,t.z+10+Math.random()*8)):s={name:Pa[Qh++%Pa.length][0]},e.n--,e.arrived=(e.arrived||[]).concat([s]),u.popTotal=(u.popTotal||0)+1,u.stats.arrived++}e.n<=0&&e.t>7&&(e.phase="ascend",e.t=0,e.flame.visible=!0,e.flameGlow.visible=!0,Y.play("rumble"),u.events.emit("colonistsArrived",e.arrived||[]))}else if(e.phase==="ascend"){i.position.y+=n*(5+e.t*12);for(let s=0;s<3;s++)fe.flame(i.position);e.t<1.5&&fe.dustPuff(new w(t.x,t.y,t.z),3,10),e.t>12&&(u.scene.remove(i),ql=null)}}var Yp=new w;function Av(n,e){let t=null,i=6;for(let s of u.colonists){Yp.set(s.pos.x-n.x,s.pos.y+1.1-n.y,s.pos.z-n.z);let r=Yp.dot(e);r<0||r>i||Yp.lengthSq()-r*r<.8*.8&&(i=r,t=s)}return t}function Cv(){return u.colonists.map(n=>[n.idx,+n.pos.x.toFixed(1),+n.pos.z.toFixed(1)])}function Pv(n){for(let[e,t,i]of n)Tv(t,i,{idx:e});Qh=Math.max(Qh,...n.map(e=>e[0]+1),0)}var cS={iron:'<path d="M12 2.5l8.2 4.75v9.5L12 21.5l-8.2-4.75v-9.5z"/><path d="M12 2.5v19M3.8 7.25l16.4 9.5M20.2 7.25L3.8 16.75" opacity=".35"/>',silicon:'<path d="M12 2l7 10-7 10-7-10z"/><path d="M5 12h14M12 2v20" opacity=".35"/>',ice:'<path d="M12 2v20M3.3 7l17.4 10M20.7 7L3.3 17"/><path d="M9.5 3.5L12 6l2.5-2.5M9.5 20.5L12 18l2.5 2.5"/>',titanium:'<path d="M12 2l2.6 7.4L22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6z"/>',power:'<path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H12z"/>',pop:'<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.6 2.7-6 6-6s6 2.4 6 6"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 14.4c3 .1 5.5 2.2 5.5 5.6"/>',house:'<path d="M3 20h18M5 20V10l7-6 7 6v10"/><path d="M10 20v-5h4v5"/>',o2:'<circle cx="9" cy="12" r="5.5"/><path d="M17 15.5c0-1.4 2.6-1.6 2.6-3 0-.9-.7-1.5-1.6-1.5S16.5 11.6 16.5 12.4M16.5 18.5h3.4"/>',food:'<path d="M12 21V9"/><path d="M12 13c-4 0-6-3-6-7 4 0 6 3 6 7zM12 11c0-4 2-7 6-7 0 4-2 7-6 7z"/>',water:'<path d="M12 2.5S5.5 10 5.5 14.5a6.5 6.5 0 0013 0C18.5 10 12 2.5 12 2.5z"/>',laser:'<path d="M3 15l7-7 3 3-7 7z"/><path d="M13 11l2-2M16 8l5-5M17.5 11.5l3 .5M12.5 6.5l-.5-3"/>',rifle:'<path d="M2 10h15l3 2-3 2H9l-2 5H4l1-5H2z"/><path d="M12 10V7h3v3"/>',build:'<path d="M3 21h18M6 21V11h12v10M9 11V6h6v5"/><path d="M14 3l5 3" />',rover:'<path d="M3 15h18v-4l-3-4H8l-2 4H3z"/><circle cx="7" cy="17.5" r="2.2"/><circle cx="17" cy="17.5" r="2.2"/><path d="M10 7v4h8"/>',warn:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.01"/>',sun:'<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/>',moon:'<path d="M20 14.5A8.5 8.5 0 019.5 4a8.5 8.5 0 1010.5 10.5z"/>',meteor:'<circle cx="16" cy="16" r="4"/><path d="M13 13L3 3M15 11L8 4M11 15L4 8"/>',radio:'<path d="M5 9a9.5 9.5 0 0114 0M8 12a5 5 0 018 0"/><circle cx="12" cy="15.5" r="1.6"/><path d="M12 17v4"/>',check:'<path d="M4 12.5l5 5L20 6.5"/>',lock:'<rect x="5" y="10.5" width="14" height="10" rx="1"/><path d="M8 10.5V7a4 4 0 018 0v3.5"/>',ship:'<path d="M12 2c3 3 4 7 4 11v4H8v-4c0-4 1-8 4-11z"/><path d="M8 13l-3 4v3l3-2M16 13l3 4v3l-3-2M10 20l2 2 2-2"/>',colony:'<path d="M2 20h20"/><path d="M4 20v-5a4 4 0 018 0v5M13 20V7h7v13"/><path d="M15.5 10h2M15.5 13h2M15.5 16h2"/>',storm:'<path d="M3 8h12a3 3 0 10-3-3M3 12h16a3 3 0 11-3 3M3 16h8"/>',shield:'<path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/>',wrench:'<path d="M14.5 6.5a4 4 0 015.2 5.2L21 13l-8 8-1.3-1.3a4 4 0 01-5.2-5.2L3 11l3-3 3.5 3.5 2-2L8 6l3-3z" transform="scale(.9) translate(1.3 1.3)"/>',tank:'<rect x="7" y="5" width="10" height="16" rx="5"/><path d="M10 2h4v3h-4zM7 10h10"/>',scanner:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 12l6-6"/>',jet:'<path d="M8 3h8v11H8z"/><path d="M9 14l-1 4M15 14l1 4M10 18l2 4 2-4"/>',armor:'<path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/><path d="M8 10l4 2 4-2M12 12v6"/>',focus:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="2"/><path d="M12 1.5v5M12 17.5v5M1.5 12h5M17.5 12h5"/>',bolt2:'<path d="M7 2l-2 9h5l-2 11 9-13h-6l3-7z"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',planet:'<circle cx="12" cy="12" r="6.5"/><path d="M2.5 15.5c3 2 16 -4 19-9" />',trophy:'<path d="M7 3h10v5a5 5 0 01-10 0z"/><path d="M7 5H3c0 3 2 5 4 5M17 5h4c0 3-2 5-4 5M12 13v4M8 21h8M9 17h6"/>',book:'<path d="M4 4h6a2 2 0 012 2v14a2 2 0 00-2-2H4zM20 4h-6a2 2 0 00-2 2v14a2 2 0 012-2h6z"/>',camera:'<path d="M3 7h4l2-3h6l2 3h4v13H3z"/><circle cx="12" cy="13" r="4"/>',gear:'<circle cx="12" cy="12" r="3.2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',drone:'<rect x="9" y="10" width="6" height="4" rx="1"/><path d="M9 11L5 7M15 11l4-4M9 13l-4 4M15 13l4 4"/><circle cx="5" cy="7" r="2.2"/><circle cx="19" cy="7" r="2.2"/><circle cx="5" cy="17" r="2.2"/><circle cx="19" cy="17" r="2.2"/>',boss:'<path d="M12 2l3 6 6 1-4 5 1 7-6-3-6 3 1-7-4-5 6-1z"/><circle cx="12" cy="12" r="2"/>',key:'<circle cx="8" cy="15" r="4.5"/><path d="M11.5 12L20 3.5M17 6.5l2.5 2.5M15 8.5l2 2"/>',dome:'<path d="M3 19h18M4.5 19a7.5 7.5 0 0115 0"/><path d="M12 11.5V8M10 19v-3h4v3"/>',tower:'<path d="M6 21V5h6v16M12 21V10h6v11"/><path d="M8 8h2M8 11h2M8 14h2M14 13h2M14 16h2M3 21h18"/>',monument:'<path d="M10 21l1-16 1-2 1 2 1 16z"/><ellipse cx="12" cy="11" rx="6" ry="2"/><path d="M5 21h14"/>'};function Iv(){return`<svg xmlns="http://www.w3.org/2000/svg" style="display:none">${Object.entries(cS).map(([n,e])=>`<symbol id="i-${n}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${e}</symbol>`).join("")}</svg>`}var gt=(n,e="")=>`<svg class="ico ${e}" aria-hidden="true"><use href="#i-${n}"/></svg>`;var eu={};function Lv(n){let e=n.filter(l=>!eu[l]);if(!e.length)return eu;let t=256,i=new Ko({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});i.setSize(t,t),i.setPixelRatio(1),i.toneMapping=Yr,i.toneMappingExposure=1.15;let s=new ji;s.add(new hr(14674175,3811876,1.4));let r=new Qi(16773344,2.6);r.position.set(4,8,6),s.add(r);let o=new Qi(8965375,1.4);o.position.set(-6,4,-6),s.add(o);let a=new un(30,1,.1,500);for(let l of e){let c=new ue,h={};Zn[l](c,h);let d=[];c.traverse(_=>{(_.userData.found||_===h.flame||_===h.beam)&&d.push(_)}),d.forEach(_=>_.parent.remove(_));let f=[];c.traverse(_=>{_.isSprite&&f.push([_,_.parent])}),f.forEach(([_,E])=>E.remove(_)),s.add(c);let p=new zi().setFromObject(c,!0),g=p.getSize(new w),x=p.getCenter(new w);f.forEach(([_,E])=>E.add(_));let m=Math.max(g.x,g.y,g.z)*.62/Math.tan(Nt.degToRad(15))*1.05;a.position.set(x.x+m*.62,x.y+m*.42,x.z+m*.66),a.lookAt(x),a.updateProjectionMatrix(),i.render(s,a),eu[l]=i.domElement.toDataURL("image/png"),s.remove(c)}return i.dispose(),i.forceContextLoss(),eu}var hS={mars:[{id:"zhurong",name:"\u795D\u878D\u53F7\u706B\u661F\u8F66",model:"rover",who:"\u6863\u6848 \xB7 \u795D\u878D\u53F7",text:"\u4E2D\u56FD\u706B\u661F\u8F66\u300C\u795D\u878D\u53F7\u300D\uFF0C2021 \u5E74\u7740\u9646\u5728\u4E4C\u6258\u90A6\u5E73\u539F\u2014\u2014\u5C31\u5728\u4F60\u811A\u4E0B\u8FD9\u7247\u571F\u5730\u3002\u5B83\u7684\u592A\u9633\u80FD\u677F\u4E0A\u79EF\u6EE1\u4E86\u516D\u5341\u591A\u5E74\u7684\u6C99\u5C18\u3002\u4EBA\u7C7B\u5728\u706B\u661F\u4E0A\u7684\u7B2C\u4E00\u884C\u8F66\u8F99\uFF0C\u5C31\u662F\u5B83\u7559\u4E0B\u7684\u3002"},{id:"opportunity",name:"\u673A\u9047\u53F7\u6B8B\u9AB8",model:"rover2",who:"\u6863\u6848 \xB7 \u673A\u9047\u53F7",text:"\u4E00\u5757\u5199\u7740\u300COpportunity\u300D\u7684\u6B8B\u7247\uFF0C\u4E0D\u77E5\u88AB\u54EA\u573A\u6C99\u5C18\u66B4\u5377\u5230\u4E86\u8FD9\u91CC\u3002\u5B83\u5728\u706B\u661F\u4E0A\u5DE5\u4F5C\u4E86\u5341\u4E94\u5E74\u3002\u5B83\u6700\u540E\u4F20\u56DE\u7684\u6570\u636E\uFF0C\u88AB\u4EBA\u4EEC\u7FFB\u8BD1\u6210\u4E00\u53E5\u8BDD\uFF1A\u300C\u6211\u7684\u7535\u91CF\u5F88\u4F4E\uFF0C\u5929\u5FEB\u9ED1\u4E86\u3002\u300D"},{id:"viking",name:"\u6D77\u76D7\u4E00\u53F7\u7740\u9646\u5668",model:"lander",who:"\u6863\u6848 \xB7 \u6D77\u76D7\u4E00\u53F7",text:"1976 \u5E74\uFF0C\u4EBA\u7C7B\u7B2C\u4E00\u4E2A\u5728\u706B\u661F\u6210\u529F\u7740\u9646\u5E76\u4F20\u56DE\u7167\u7247\u7684\u63A2\u6D4B\u5668\u3002\u7167\u7247\u4E0A\uFF0C\u5C31\u662F\u8FD9\u6837\u4E00\u7247\u7EA2\u8272\u7684\u3001\u5E03\u6EE1\u77F3\u5934\u7684\u5E73\u539F\u3002"},{id:"ingenuity",name:"\u673A\u667A\u53F7\u76F4\u5347\u673A",model:"heli",who:"\u6863\u6848 \xB7 \u673A\u667A\u53F7",text:"\u4E00\u67B6\u53EA\u6709 1.8 \u516C\u65A4\u7684\u5C0F\u76F4\u5347\u673A\u30022021 \u5E74\uFF0C\u5B83\u5B8C\u6210\u4E86\u4EBA\u7C7B\u5728\u5730\u7403\u4E4B\u5916\u7684\u7B2C\u4E00\u6B21\u52A8\u529B\u98DE\u884C\u3002\u65CB\u7FFC\u4E0A\u8FD8\u8D34\u7740\u4E00\u5C0F\u5757\u83B1\u7279\u5144\u5F1F\u98DE\u673A\u7684\u5E03\u6599\u3002"}],europa:[{id:"drill",name:"\u51B0\u5C42\u94BB\u63A2\u5668",model:"drill",who:"\u6863\u6848 \xB7 \u51B0\u7A7F\u8005\u53F7",text:"2041 \u5E74\u7684\u65E0\u4EBA\u94BB\u63A2\u5668\u300C\u51B0\u7A7F\u8005\u53F7\u300D\u3002\u5B83\u94BB\u5230\u4E86\u51B0\u4E0B\u4E09\u516C\u91CC\uFF0C\u5728\u6700\u540E\u4E00\u5E27\u753B\u9762\u91CC\uFF0C\u955C\u5934\u524D\u4F3C\u4E4E\u6709\u4EC0\u4E48\u4E1C\u897F\u5728\u53D1\u5149\u2026\u2026\u7136\u540E\u4FE1\u53F7\u4E2D\u65AD\u4E86\u3002"},{id:"hydro",name:"\u65E0\u4EBA\u6C34\u542C\u7AD9",model:"probe",who:"\u6863\u6848 \xB7 \u6C34\u542C\u7AD9",text:"\u4E00\u53F0\u8FD8\u5728\u8FD0\u8F6C\u7684\u6C34\u542C\u5668\u3002\u5B83\u5F55\u5230\u4E86\u51B0\u4E0B\u6D77\u6D0B\u91CC\u67D0\u79CD\u6709\u8282\u594F\u7684\u4F4E\u9891\u58F0\u97F3\uFF0C\u5468\u671F\u662F 17 \u5206\u949F\u3002\u6CA1\u6709\u4EBA\u77E5\u9053\u90A3\u662F\u4EC0\u4E48\u3002"},{id:"galileo",name:"\u523B\u5B57\u7684\u91D1\u5C5E\u7247",model:"plate",who:"\u6863\u6848 \xB7 \u65E0\u540D",text:"\u51B0\u91CC\u51BB\u7740\u4E00\u5757\u91D1\u5C5E\u7247\uFF0C\u4E0A\u9762\u523B\u7740\u4E00\u4E2A\u65E5\u671F\uFF1A1610 \u5E74 1 \u6708 7 \u65E5\u3002\u90A3\u662F\u4F3D\u5229\u7565\u7B2C\u4E00\u6B21\u770B\u89C1\u6728\u661F\u536B\u661F\u7684\u591C\u665A\u3002\u662F\u8C01\u628A\u5B83\u5E26\u5230\u8FD9\u91CC\u7684\uFF1F"}],kepler:[{id:"monolith",name:"\u6676\u4F53\u65B9\u7891",model:"monolith",who:"\u6863\u6848 \xB7 \u672A\u77E5",text:"\u8FD9\u4E0D\u662F\u4EBA\u7C7B\u9020\u7684\u3002\u65B9\u7891\u8868\u9762\u7684\u7EB9\u8DEF\u5728\u4F60\u9760\u8FD1\u65F6\u4E00\u5708\u5708\u4EAE\u8D77\uFF0C\u50CF\u662F\u5728\u8FA8\u8BA4\u4F60\u3002\u5B83\u7684\u5E74\u9F84\u5927\u7EA6\u662F\u56DB\u5343\u4E07\u5E74\u3002"},{id:"pathfinder",name:"\u65B9\u821F\u63A2\u8DEF\u5668",model:"probe",who:"\u6863\u6848 \xB7 \u63A2\u8DEF\u8005",text:"\u4E09\u767E\u5E74\u524D\u5148\u884C\u51FA\u53D1\u7684\u65E0\u4EBA\u63A2\u8DEF\u5668\u3002\u5B83\u7684\u6700\u540E\u4E00\u6761\u65E5\u5FD7\u5199\u7740\uFF1A\u300C\u5DF2\u627E\u5230\u9002\u5B9C\u7740\u9646\u70B9\u3002\u6211\u4F1A\u5728\u8FD9\u91CC\u7B49\u4F60\u4EEC\u3002\u300D\u5B83\u7B49\u4E86\u4E00\u767E\u4E00\u5341\u4E8C\u5E74\u3002"},{id:"fossil",name:"\u5DE8\u578B\u5316\u77F3",model:"fossil",who:"\u6863\u6848 \xB7 \u5316\u77F3",text:"\u4E00\u526F\u5DE8\u5927\u7684\u9AA8\u67B6\uFF0C\u5F27\u5F62\u7684\u808B\u9AA8\u50CF\u62F1\u95E8\u4E00\u6837\u7ACB\u5728\u5730\u4E0A\u3002\u751F\u524D\uFF0C\u5B83\u53EF\u80FD\u50CF\u90A3\u4E9B\u53D1\u5149\u7684\u6C34\u6BCD\u4E00\u6837\uFF0C\u6F02\u6D6E\u5728\u8FD9\u7247\u5929\u7A7A\u91CC\u3002"}]},ho=[],Ci=new ge({color:8022620,roughness:.9,metalness:.3}),Zp=new ge({color:13148240,roughness:.4,metalness:.8}),Kp=new ge({color:15260872,roughness:.8,flatShading:!0}),uS=new ge({color:1314844,roughness:.15,metalness:.9,emissive:6308095,emissiveIntensity:.15});function zt(n,e,t,i,s,r,o=0,a=0,l=0){let c=new se(n,e);return c.position.set(t,i,s),c.rotation.set(o,a,l),c.castShadow=!0,c.receiveShadow=!0,r.add(c),c}var dS={rover(n){zt(new Ye(1.6,.5,2.2),Ci,0,.9,0,n,0,0,.08);for(let e of[-1,1])zt(new Ye(1.4,.05,1.6),y.solar,e*1.4,1.1,0,n,0,0,e*.25);zt(new Oe(.05,.05,1.2,6),Ci,.4,1.7,-.7,n),zt(new Ye(.3,.2,.25),Ci,.4,2.35,-.7,n,0,0,.3);for(let e of[-.9,0,.9])for(let t of[-1,1])zt(new Oe(.28,.28,.22,10),y.dark,t*.95,.3,e,n,0,0,Math.PI/2)},rover2(n){zt(new Ye(1.4,.45,1.8),Ci,0,.5,0,n,.25,.4,.4),zt(new Ye(1.2,.05,1.1),y.solar,.9,.35,.3,n,.1,0,-.6),zt(new Oe(.28,.28,.22,10),y.dark,-1.2,.25,.8,n,.4,0,1.2)},lander(n){zt(new Oe(1,1.1,.6,6),Zp,0,1,0,n);for(let e=0;e<3;e++){let t=e*Math.PI*2/3;zt(new Oe(.06,.06,1.4,5),Ci,Math.cos(t)*1.1,.5,Math.sin(t)*1.1,n,Math.sin(t)*.4,0,-Math.cos(t)*.4)}zt(new Oe(.6,.6,.05,16),y.white,0,1.6,.3,n,.6,0,0),zt(new Ye(.2,.9,.2),Ci,-.5,1.7,-.3,n)},heli(n){zt(new Ye(.25,.2,.25),Zp,0,.45,0,n),zt(new Oe(.02,.02,.5,4),Ci,0,.75,0,n),zt(new Ye(1.2,.02,.08),Ci,0,.9,0,n,0,.5,0),zt(new Ye(1.2,.02,.08),Ci,0,.98,0,n,0,-.4,0);for(let e=0;e<4;e++){let t=e*Math.PI/2+.6;zt(new Oe(.015,.015,.5,4),Ci,Math.cos(t)*.2,.2,Math.sin(t)*.2,n,Math.sin(t)*.5,0,-Math.cos(t)*.5)}n.scale.setScalar(2.2)},drill(n){zt(new Oe(.5,.7,1.4,8),Ci,0,.7,0,n),zt(new Oe(.15,.15,4,8),y.metal,0,2.6,0,n,.15,0,0);for(let e=0;e<3;e++){let t=e*Math.PI*2/3;zt(new Ye(.15,3,.15),Ci,Math.cos(t)*.9,1.4,Math.sin(t)*.9,n,Math.sin(t)*.25,0,-Math.cos(t)*.25)}},probe(n){zt(new Ge(.8,12,8),y.white,0,.9,0,n),zt(new De(.85,.08,6,20),y.orange,0,.9,0,n,Math.PI/2,0,0),zt(new Oe(.03,.03,1.6,4),y.metal,0,2.2,0,n),zt(new Yt(.5,.3,12,1,!0),y.white,0,3,0,n,Math.PI,0,0)},plate(n){zt(new Ye(1.2,.8,.06),Zp,0,.5,0,n,-.5,0,.1),zt(new _i(.9,0),new ge({color:13627135,transparent:!0,opacity:.6,roughness:.05}),0,.4,0,n)},monolith(n){zt(new Ye(1.4,7,.5),uS,0,3.5,0,n,0,0,.04),n.userData.rings=[];for(let e=0;e<3;e++){let t=zt(new De(1.4+e*.4,.04,6,32),new Ne({color:9075455,transparent:!0,opacity:.6}),0,2+e*1.6,0,n,Math.PI/2,0,0);n.userData.rings.push(t)}},fossil(n){for(let e=0;e<9;e++){let t=zt(new De(3-Math.abs(e-4)*.35,.18,6,16,Math.PI),Kp,0,0,-6+e*1.5,n);t.rotation.y=0}zt(new Oe(.25,.15,14,6),Kp,0,3,0,n,Math.PI/2,0,0),zt(new _i(1.4,0),Kp,0,2.6,-8,n)}};function Dv(){let n=ui(st.length*977+5),e=hS[st]||[];e.forEach((t,i)=>{let s=0,r=0;for(let l=0;l<200;l++){let c=i/e.length*Math.PI*2+n()*1.2,h=160+n()*220;if(s=Math.cos(c)*h,r=Math.sin(c)*h,Math.abs(s)<Qe-180&&Math.abs(r)<Qe-180&&Jr(s,r,3)<.35&&!u.colliders.overlaps(s,r,6))break}let o=new ue;dS[t.model](o),o.position.set(s,ve(s,r)-.15,r),o.rotation.y=n()*6.28;let a=_e(16765578,3,u.scene,s,ve(s,r)+4,r);u.scene.add(o),u.colliders.add({x:s,z:r,r:t.model==="fossil"?3:1.4,kind:"relic"}),ho.push({...t,x:s,z:r,g:o,beacon:a,found:(u.relicsFound||[]).includes(t.id)})})}function Uv(n){let e=null,t=1e9;for(let i of ho){if(i.found)continue;let s=Math.hypot(i.x-n.x,i.z-n.z);s<t&&(t=s,e=i)}return e?{r:e,d:t}:null}function Nv(n){return ho.find(e=>!e.found&&Math.hypot(e.x-n.x,e.z-n.z)<6)}function us(){return{found:ho.filter(n=>n.found).length,total:ho.length}}function Jp(){return ho}function Hv(n){n.found=!0,u.relicsFound=[...new Set([...u.relicsFound||[],n.id])],It(n.who,n.text),u.res.titanium+=8,u.res.silicon+=15,u.events.emit("pickup",{type:"titanium",n:8,note:n.name}),u.events.emit("toast",`\u2713 \u53D1\u73B0\u9057\u8FF9\uFF1A${n.name}`),Y.play("objective"),fe.burst(new w(n.x,ve(n.x,n.z)+2,n.z),[1,.85,.5],60,8)}function kv(n){let e=performance.now()*.001;for(let t of ho)t.beacon.visible=!t.found,t.beacon.material.opacity=.5+Math.sin(e*2+t.x)*.3,t.g.userData.rings&&t.g.userData.rings.forEach((i,s)=>{i.rotation.z=e*(.3+s*.2),i.material.opacity=(t.found?.8:.3)+Math.sin(e*2+s)*.2})}var tu=[],n0=new Yt(1,1,8,1,!0);n0.rotateX(Math.PI);n0.translate(0,-.5,0);var fS=new w(0,1,0),e0=0,jp=0,nu=0,t0=0,zv=-1;function pS(){e0=45,t0=0,nu=6,It("\u65B9\u821F \xB7 AI","\u770B\u5929\u4E0A\u2014\u2014\u6D41\u661F\u96E8\uFF01\u6709\u51E0\u9897\u4F1A\u843D\u5230\u9644\u8FD1\u3002\u9668\u77F3\u91CC\u5BCC\u542B\u949B\uFF0C\u53BB\u5760\u843D\u70B9\u770B\u770B\u3002"),u.events.emit("toast","\u2604 \u6D41\u661F\u96E8")}function Ov(n){let e=u.player.pos,t;if(n){for(let h=0;h<20;h++){let d=Math.random()*Math.PI*2,f=40+Math.random()*110,p=Nt.clamp(e.x+Math.cos(d)*f,-Qe+180,Qe-180),g=Nt.clamp(e.z+Math.sin(d)*f,-Qe+180,Qe-180);if(!u.buildings.some(x=>Math.hypot(x.x-p,x.z-g)<x.def.r+14)){t=new w(p,ve(p,g),g);break}}if(!t)return}else{let h=Math.random()*Math.PI*2,d=150+Math.random()*350;t=new w(e.x+Math.cos(h)*d,e.y+110+Math.random()*140,e.z+Math.sin(h)*d)}let i=new w((Math.random()-.5)*1.2,-.55-Math.random()*.3,(Math.random()-.5)*1.2).normalize(),s=n?520:420,r=t.clone().addScaledVector(i,-s),o=_e(n?16756848:16769216,n?18:10,u.scene);o.material.fog=!1,o.position.copy(r);let a=new se(n0,new Ne({color:n?16751184:16767144,transparent:!0,opacity:.75,blending:ke,depthWrite:!1,fog:!1})),l=n?90:70+Math.random()*70,c=n?2.2:1.3;a.scale.set(c,l,c),a.quaternion.setFromUnitVectors(fS,i),a.position.copy(r),u.scene.add(a),tu.push({pos:r,vel:i.multiplyScalar(n?150:220),head:o,tail:a,impact:n,target:t,life:s/(n?150:220)})}function Fv(n){vS(n),u.time.night>.7&&zv!==u.time.day&&u.time.day>=2&&u.storm<.1&&!u.ended&&(zv=u.time.day,Math.random()<.4&&pS()),e0>0&&(e0-=n,jp-=n,nu-=n,jp<=0&&(jp=.15+Math.random()*.35,Ov(!1)),nu<=0&&t0<4&&(nu=7+Math.random()*5,t0++,Ov(!0)));for(let t=tu.length-1;t>=0;t--){let i=tu[t];i.life-=n,i.pos.addScaledVector(i.vel,n),i.head.position.copy(i.pos),i.tail.position.copy(i.pos);for(let s=0;s<3;s++)fe.trail(i.pos.clone().addScaledVector(i.vel,-n*s/3),i.impact?[1,.6,.3]:[1,.85,.6],i.impact?1.2:.7);i.life<=0&&(u.scene.remove(i.head),u.scene.remove(i.tail),i.tail.material.dispose(),tu.splice(t,1),i.impact&&mS(i.target))}}function mS(n){let e=n.clone();e.y+=1.5,fe.burst(e,[1,.55,.2],120,22),_r(e,2.6,16747072),fe.ring(n,2,90),fe.dustPuff(e,40,8),Y.play("rumble"),Y.play("kill");let t=n.distanceTo(u.player.pos);if(t<80&&(u.player.landDip=Math.max(u.player.landDip,.4*(1-t/80))),!u.colliders.overlaps(n.x,n.z,2.5)){let i=fa("titanium",n.x,n.z,10+Math.floor(Math.random()*8));i.meteor=!0}u.events.emit("toast",`\u2604 \u9668\u77F3\u5760\u843D\u5728 ${Math.round(t)} \u7C73\u5916`)}var zs=[],Qp=150;function gS(){return sv()}function i0(n=!0){let e=u.player.pos,t=0,i=0;for(let a=0;a<30;a++){let l=Math.random()*Math.PI*2,c=50+Math.random()*130;if(t=Nt.clamp(e.x+Math.cos(l)*c,-Qe+180,Qe-180),i=Nt.clamp(e.z+Math.sin(l)*c,-Qe+180,Qe-180),!u.colliders.overlaps(t,i,4))break}let s=gS(),r=ve(t,i);s.g.position.set(t,r+320,i),u.scene.add(s.g);let o={...s,x:t,z:i,y:r,t:0,landed:!1,life:300};return zs.push(o),Y.play("rumble"),u.events.emit("toast",`\u5730\u7403\u8865\u7ED9\u8231\u6B63\u5728\u964D\u843D \xB7 ${Math.round(Math.hypot(t-e.x,i-e.z))} \u7C73\u5916`),o}function vS(n){u.buildings.length&&!u.ended&&u.time.night<.5&&(Qp-=n,Qp<=0&&(Qp=240+Math.random()*180,i0()));let e=performance.now()*.001;for(let t=zs.length-1;t>=0;t--){let i=zs[t];if(i.landed)i.life-=n,i.beacon.material.opacity=.55+Math.sin(e*4)*.4,i.life<=0&&(u.scene.remove(i.g),zs.splice(t,1));else{i.t+=n;let s=Math.min(1,i.t/8),r=1-Math.pow(1-s,2.4);i.g.position.y=i.y+320*(1-r),i.flame.scale.y=.6+(1-r)+Math.random()*.2;for(let o=0;o<2;o++)fe.flame(i.g.position);s>=1&&(i.landed=!0,i.flame.visible=!1,fe.ring(new w(i.x,i.y,i.z),2,70),Y.play("land"))}}}function Bv(n){return zs.find(e=>e.landed&&Math.hypot(e.x-n.x,e.z-n.z)<3.5)}function Vv(n){let e=null,t=1e9;for(let i of zs){let s=Math.hypot(i.x-n.x,i.z-n.z);s<t&&(t=s,e=i)}return e?{p:e,d:t}:null}function s0(){return zs}function Gv(n){let e=1+(u.cityLevel||0)*.4,t={iron:Math.round((20+Math.random()*20)*e),silicon:Math.round((15+Math.random()*15)*e),ice:Math.round((10+Math.random()*15)*e)};Math.random()<.6&&(t.titanium=Math.round((3+Math.random()*5)*e));for(let r in t)u.res[r]+=t[r],u.events.emit("pickup",{type:r,n:t[r],note:"\u8865\u7ED9\u8231"});let i=Math.round(10*e);u.rp=(u.rp||0)+i,u.stats.pods=(u.stats.pods||0)+1;let s=["\u5305\u88F9\u91CC\u5939\u7740\u4E00\u5F20\u5B69\u5B50\u753B\u7684\u753B\uFF1A\u4E00\u5EA7\u7EA2\u8272\u661F\u7403\uFF0C\u4E0A\u9762\u6709\u5F88\u591A\u5C0F\u623F\u5B50\u3002","\u9644\u8A00\uFF1A\u300C\u5730\u7403\u8FD9\u8FB9\u4E00\u5207\u90FD\u597D\u3002\u7167\u987E\u597D\u81EA\u5DF1\u3002\u300D","\u7BB1\u5B50\u5E95\u90E8\u6709\u4E00\u5305\u79CD\u5B50\uFF0C\u6807\u7B7E\u4E0A\u5199\u7740\uFF1A\u5411\u65E5\u8475\u3002","\u4E00\u5C01\u624B\u5199\u4FE1\uFF1A\u300C\u6211\u513F\u5B50\u5728\u4F60\u4EEC\u7684\u6B96\u6C11\u5730\u3002\u8BF7\u66FF\u6211\u544A\u8BC9\u4ED6\uFF0C\u5988\u5988\u4E3A\u4ED6\u9A84\u50B2\u3002\u300D","\u8865\u7ED9\u6E05\u5355\u6700\u540E\u4E00\u884C\uFF1A\u300C\u5DE7\u514B\u529B \xD72\u2014\u2014\u7ED9\u7B2C\u4E00\u4E2A\u62C6\u7BB1\u7684\u4EBA\u3002\u300D"];It("\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u8865\u7ED9",s[Math.floor(Math.random()*s.length)]+` \u9644\u5E26\u79D1\u7814\u6570\u636E ${i} \u70B9\u3002`),Y.play("craft"),fe.burst(new w(n.x,n.y+1.5,n.z),[.5,1,.7],50,6),u.scene.remove(n.g),zs.splice(zs.indexOf(n),1)}var de=n=>document.getElementById(n),au,c0,be,uo={},h0={mars:"MARS",europa:"EUROPA",kepler:"KEPLER-442b"},xS=["I","II","III","IV","V","VI"];function ex(n){au=n,document.body.insertAdjacentHTML("afterbegin",Iv()),c0=de("minimap"),be=c0.getContext("2d"),de("pl-cn").textContent=Me.name,de("kick-planet").textContent=h0[st],de("hotbar").innerHTML=Tr.map((e,t)=>`<div class="slot" data-i="${t}"><span class="key">${t+1}</span><span class="ic">${gt(e.icon)}</span><span class="nm">${e.name}</span></div>`).join(""),de("res").innerHTML=Object.entries(sn).map(([e,t])=>`<div class="r" id="r-${e}" style="--rc:${t.color}"><span class="ic">${gt(e)}</span><span class="tx"><small>${t.name}</small><b>0</b></span></div>`).join(""),u.events.on("toast",e=>rn(e)),u.events.on("pickup",e=>MS(e)),u.events.on("hurt",e=>{document.body.classList.remove("glitch"),document.body.offsetWidth,document.body.classList.add("glitch"),clearTimeout(u._gl),u._gl=setTimeout(()=>document.body.classList.remove("glitch"),320)}),document.querySelectorAll("[data-close]").forEach(e=>e.addEventListener("click",()=>{Y.play("ui"),Bn(!0)})),document.querySelectorAll(".menu button, .bp-tabs button").forEach(e=>e.addEventListener("mouseenter",()=>Y.play("tick")))}var Wv={"\u2713":["check","good"],"\u26A0":["warn","warn"],"\u{1F527}":["wrench",""],"\u2600":["sun",""],"\u2604":["meteor",""],"\u{1F680}":["ship",""]};function rn(n,e="radio",t=""){let i=[...n][0];if(Wv[i]&&([e,t]=Wv[i],n=n.slice(i.length).trim()),t==="warn"||e==="boss")return yS(n,e,t);let s=de("log"),r=[...s.children].find(a=>a.dataset.t===n&&!a.classList.contains("out"));if(r){let a=(+r.dataset.n||1)+1;r.dataset.n=a,r.querySelector("em").textContent="\xD7"+a,clearTimeout(r._to),r._to=setTimeout(()=>u0(r),5e3);return}let o=document.createElement("div");for(o.className="ev "+t,o.dataset.t=n,o.innerHTML=`${gt(e)}<span>${n}</span><em></em>`,s.appendChild(o);s.children.length>3;)s.firstChild.remove();o._to=setTimeout(()=>u0(o),5e3)}function u0(n){n.classList.add("out"),setTimeout(()=>n.remove(),600)}var $v,Xv=0,qv=0;function yS(n,e,t){let i=e==="boss"?2:1,s=performance.now();if(i<Xv&&s<qv){let o=de("log"),a=document.createElement("div");for(a.className="ev warn",a.innerHTML=`${gt(e==="radio"?"warn":e)}<span>${n}</span><em></em>`,o.appendChild(a);o.children.length>3;)o.firstChild.remove();setTimeout(()=>u0(a),5e3);return}Xv=i,qv=s+4500;let r=de("alert");r.className="show "+(t==="good"?"good":""),r.innerHTML=`${gt(e==="radio"?"warn":e)}<span>${n}</span>`,Y.play("alarm"),clearTimeout($v),$v=setTimeout(()=>{r.className=""},4500)}var r0={};function MS({type:n,n:e,note:t}){Y.play("pickup");let i=r0[n];i&&i.el.isConnected?(i.n+=e,clearTimeout(i.to)):(i=r0[n]={n:e,el:document.createElement("div")},i.el.className="feed",de("feed").appendChild(i.el));let s=sn[n];i.el.style.setProperty("--rc",s.color),i.el.innerHTML=`<span class="nm">${t||s.name}</span>${gt(n)}<span class="q">+${i.n}</span>`,i.el.classList.remove("out"),i.to=setTimeout(()=>{i.el.classList.add("out"),setTimeout(()=>{i.el.remove(),delete r0[n]},500)},1800);let r=de("r-"+n);r.classList.remove("flash"),r.offsetWidth,r.classList.add("flash")}var iu=[],o0=!1;function fo(n){if(o0){iu.length=0,iu.push(n);return}o0=!0,setTimeout(()=>{o0=!1,iu.length&&fo(iu.shift())},5200);let e=de("chapter"),t=Ai.indexOf(n),i=n.k||(t>=0?`CHAPTER ${String(t+1).padStart(2,"0")}`:""),s=n.title.replace(/^第.章 · |^终章 · /,"");e.innerHTML=`<div class="k">${i}</div><div class="t">${s}</div><div class="ln"></div><div class="s">${n.sub}</div>`,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}var _S=["build","craft","pause","starmap","archive","research","trade","mapscr"],Yv=null;function ES(n){let e=de(n);e.classList.remove("closing"),e.classList.add("opening"),setTimeout(()=>e.classList.remove("opening"),700),e.querySelectorAll(".bp-grid, .people, .achv, .kv, #starmap-list, .opts").forEach(t=>{t.classList.remove("stagger"),t.offsetWidth,t.classList.add("stagger"),[...t.children].forEach((i,s)=>i.style.setProperty("--i",Math.min(s,18))),setTimeout(()=>t.classList.remove("stagger"),1400)})}function lu(n){n&&(n.classList.remove("swap"),n.offsetWidth,n.classList.add("swap"))}function fs(n){Bn(!1,!0),u.menuOpen=n,de(n).classList.remove("hidden"),document.body.classList.add("menu-open");for(let e in Ar)delete Ar[e];if(document.pointerLockElement&&document.exitPointerLock(),Y.play("open"),n==="build"){if(!uo.solar)try{uo=Lv(Dp.filter(e=>!cs(e).hide))}catch{uo={}}f0()}n==="craft"&&x0(),n==="research"&&ou(),n==="trade"&&Yl(),n==="mapscr"&&m0(),n==="archive"&&(de("archive-body").innerHTML=y0()),n==="pause"&&(de("pause-pane").innerHTML=""),ES(n)}function Bn(n,e=!1){clearTimeout(Yv);let t=_S.filter(s=>!de(s).classList.contains("hidden"));e||!t.length?t.forEach(s=>{de(s).classList.add("hidden"),de(s).classList.remove("closing")}):(t.forEach(s=>de(s).classList.add("closing")),Yv=setTimeout(()=>t.forEach(s=>{de(s).classList.add("hidden"),de(s).classList.remove("closing")}),260)),e||document.body.classList.remove("menu-open");let i=u.menuOpen;u.menuOpen=!1,i==="build"&&!Ct.type&&(hn.index=0),n&&u.requestLock()}function g0(n){de("pause-pane").innerHTML=n,lu(de("pause-pane"));let e=de("pause-pane").querySelector(".achv, .kv, .people");e&&(e.classList.add("stagger"),[...e.children].forEach((t,i)=>t.style.setProperty("--i",Math.min(i,18))))}var d0={all:"\u5168\u90E8",life:"\u751F\u5B58",city:"\u57CE\u5E02",industry:"\u5DE5\u4E1A",defense:"\u9632\u5FA1",stellar:"\u661F\u9645"},su="all",ds=null;function tx(n){de(n).innerHTML=Object.entries(sn).map(([e,t])=>`<span style="--rc:${t.color}">${gt(e)}${u.res[e]}</span>`).join("")}function nx(n){return`<div class="need">${Object.entries(n).map(([e,t])=>`<div class="row ${u.res[e]>=t?"":"lack"}" style="--rc:${sn[e].color}">${gt(e)}<span class="nm">${sn[e].name}</span>${Math.floor(u.res[e])} / ${t}</div>`).join("")}</div>`}function f0(){tx("bp-res");let n=Dp.filter(i=>!cs(i).hide),e=["all",...Object.keys(d0).filter(i=>i!=="all"&&n.some(s=>Fn[s].cat===i))];de("bp-tabs").innerHTML=e.map(i=>`<button data-c="${i}" class="${i===su?"on":""}">${d0[i]}</button>`).join(""),de("bp-tabs").querySelectorAll("button").forEach(i=>i.addEventListener("click",()=>{su=i.dataset.c,Y.play("tick"),f0()}));let t=n.filter(i=>su==="all"||Fn[i].cat===su);(!ds||!t.includes(ds))&&(ds=t.find(i=>cs(i).ok)||t[0]),de("build-list").innerHTML=t.map(i=>{let s=Fn[i],r=cs(i),o=Bi(s.cost);return`<div class="tile ${r.ok?"":"locked"} ${o?"":"poor"} ${i===ds?"sel":""}" data-k="${i}">
      <div class="th">${uo[i]?`<img src="${uo[i]}" alt="">`:gt(s.icon)}</div>
      ${r.ok?"":`<div class="lk">${gt("lock")}</div>`}
      <div class="nm">${s.name}</div><div class="cs">${r.ok?ra(s.cost):""}</div></div>`}).join(""),de("build-list").querySelectorAll(".tile").forEach(i=>{i.addEventListener("click",()=>{ds=i.dataset.k,Y.play("tick"),f0()}),i.addEventListener("dblclick",()=>v0(i.dataset.k))}),wS()}function bS(n){let e=Fn[n],t=cs(n);return st==="mars"&&e.chapter>u.chapter?`\u5728\u300C${Ai[e.chapter].title}\u300D\u89E3\u9501`:t.why}function wS(){let n=ds;if(!n){de("bp-detail").innerHTML="";return}let e=Fn[n],t=cs(n),i=Bi(e.cost),s=[];e.power&&s.push(["\u7535\u529B",`${e.power>0?"+":""}${e.power}`,e.power>0?"pos":"neg"]),e.housing&&s.push(["\u4F4F\u623F",`${e.housing} \u4EBA`]),e.o2&&s.push(["\u4F9B\u6C27",`${e.o2} \u4EBA`]),e.food&&s.push(["\u98DF\u7269",`${e.food} \u4EBA`]),e.water&&s.push(["\u7528\u6C34",`${e.water} \u4EBA`]),e.life&&s.push(["\u8865\u6C27\u534A\u5F84",`${e.life} m`]),e.range&&s.push(["\u5C04\u7A0B",`${e.range} m`]),s.push(["\u8010\u4E45",e.hp]),de("bp-detail").innerHTML=`<div class="pv">${uo[n]?`<img src="${uo[n]}" alt="">`:gt(e.icon)}</div>
    <div class="cat">${d0[e.cat]||""} \xB7 BLUEPRINT</div><h3>${e.name}</h3>
    <div class="ds">${e.desc}</div>
    <div class="stats">${s.map(r=>`<div><small>${r[0]}</small><b class="${r[2]||""}">${r[1]}</b></div>`).join("")}</div>
    ${t.ok?nx(e.cost):`<div class="why">${gt("lock")} ${bS(n)}</div>`}
    <button class="go" ${t.ok?"":"disabled"}>${t.ok?i?"\u5F00\u59CB\u5EFA\u9020":"\u653E\u7F6E\u84DD\u56FE\uFF08\u8D44\u6E90\u4E0D\u8DB3\uFF09":"\u5C1A\u672A\u89E3\u9501"}</button>`,de("bp-detail").querySelector(".go").addEventListener("click",()=>v0(n)),Ar["bp-detail"]!==ds&&(Ar["bp-detail"]=ds,lu(de("bp-detail")))}function v0(n){let e=Fn[n];if(!cs(n).ok){Y.play("deny");return}Y.play("ui"),Ct.rot=0,so(n),hn.index=2,Bn(!0),Bi(e.cost)||rn("\u8D44\u6E90\u4E0D\u8DB3\uFF0C\u653E\u7F6E\u524D\u5148\u53BB\u91C7\u96C6\u5427","warn","warn")}function ix(n){u.menuOpen==="build"&&n.code==="Enter"&&ds&&v0(ds),u.menuOpen==="craft"&&n.code==="Enter"&&Pi&&p0(Pi)}var Pi=null;function x0(){tx("cr-res");let n=Object.keys(wa);Pi||(Pi=n.find(s=>!u.upgrades[s])||n[0]),de("craft-list").innerHTML=n.map(s=>{let r=wa[s],o=u.upgrades[s],a=Bi(r.cost),l=r.need&&!u.upgrades[r.need];return`<div class="tile ${o?"done":""} ${a&&!l?"":"poor"} ${s===Pi?"sel":""}" data-k="${s}">
      ${o?'<span class="tag">\u5DF2\u88C5\u5907</span>':""}
      <div class="th">${gt(r.icon)}</div><div class="nm">${r.name}</div><div class="cs">${o?"":ra(r.cost)}</div></div>`}).join(""),de("craft-list").querySelectorAll(".tile").forEach(s=>{s.addEventListener("click",()=>{Pi=s.dataset.k,Y.play("tick"),x0()}),s.addEventListener("dblclick",()=>p0(s.dataset.k))});let e=wa[Pi],t=u.upgrades[Pi],i=e.need&&!u.upgrades[e.need];de("craft-detail").innerHTML=`<div class="pv">${gt(e.icon)}</div><div class="cat">EQUIPMENT</div><h3>${e.name}</h3>
    <div class="ds">${e.desc}</div>
    ${t?'<div class="why okc">\u5DF2\u5236\u9020\u5E76\u88C5\u5907</div>':i?`<div class="why">${gt("lock")} \u9700\u8981\u5148\u5236\u9020\u7B49\u79BB\u5B50\u6B65\u67AA</div>`:nx(e.cost)}
    <button class="go" ${t||i||!Bi(e.cost)?"disabled":""}>${t?"\u5DF2\u88C5\u5907":Bi(e.cost)?"\u5236\u9020":"\u8D44\u6E90\u4E0D\u8DB3"}</button>`,de("craft-detail").querySelector(".go").addEventListener("click",()=>p0(Pi)),Ar["craft-detail"]!==Pi&&(Ar["craft-detail"]=Pi,lu(de("craft-detail")))}function p0(n){let e=wa[n];if(u.upgrades[n]||e.need&&!u.upgrades[e.need]||!Bi(e.cost)){Y.play("deny");return}_l(e.cost),u.upgrades[n]=!0,u.stats.crafted[n]=!0,Y.play("craft"),rn(`\u5236\u9020\u5B8C\u6210\uFF1A${e.name}`,e.icon,"good"),n==="tank"&&(u.player.o2=180),n==="rifle"&&(hn.index=1),u.events.emit("crafted",n),Pi=Object.keys(wa).find(t=>!u.upgrades[t])||n,x0()}var Ua={unlocked:()=>!0,relicLeft:()=>!1,relicFound:()=>0},Xi=null;function ou(){de("rs-res").innerHTML=`<span style="--rc:var(--cyan)">${gt("book")}${Math.floor(u.rp||0)} \u79D1\u7814\u70B9</span><span style="--rc:var(--dim)"><small>+${Fh().toFixed(2)}/\u79D2</small></span>`;let n=Object.keys(ya);Xi||(Xi=n.find(r=>!Gt(r))||n[0]),de("research-list").innerHTML=n.map(r=>{let o=ya[r],a=Gt(r),l=(u.rp||0)>=o.cost;return`<div class="tile ${a?"done":""} ${l||a?"":"poor"} ${r===Xi?"sel":""}" data-k="${r}">${a?'<span class="tag">\u5DF2\u5B8C\u6210</span>':""}
      <div class="th">${gt(o.icon)}</div><div class="nm">${o.name}</div><div class="cs"><span class="cost ${l?"":"lack"}" style="--rc:var(--cyan)">${gt("book")}${o.cost}</span> <small>${o.cat}</small></div></div>`}).join(""),de("research-list").querySelectorAll(".tile").forEach(r=>{r.addEventListener("click",()=>{Xi=r.dataset.k,Y.play("tick"),ou()}),r.addEventListener("dblclick",()=>{Tp(r.dataset.k)&&ou()})});let e=ya[Xi],t=Gt(Xi),i=(u.rp||0)>=e.cost,s=u.buildings.some(r=>r.type==="lab");de("research-detail").innerHTML=`<div class="pv">${gt(e.icon)}</div><div class="cat">${e.cat} \xB7 TECHNOLOGY</div><h3>${e.name}</h3>
    <div class="ds">${e.desc}</div>
    ${s?"":'<div class="why">\u5EFA\u9020\u7814\u7A76\u6240\u6765\u4EA7\u51FA\u79D1\u7814\u70B9\u6570</div>'}
    <div class="need"><div class="row ${i||t?"":"lack"}" style="--rc:var(--cyan)">${gt("book")}<span class="nm">\u79D1\u7814\u70B9\u6570</span>${Math.floor(u.rp||0)} / ${e.cost}</div></div>
    <button class="go" ${t||!i?"disabled":""}>${t?"\u5DF2\u5B8C\u6210":i?"\u5F00\u59CB\u7814\u7A76":"\u79D1\u7814\u70B9\u6570\u4E0D\u8DB3"}</button>`,de("research-detail").querySelector(".go").addEventListener("click",()=>{Tp(Xi)&&(Xi=Object.keys(ya).find(r=>!Gt(r))||Xi,ou())}),Ar["research-detail"]!==Xi&&(Ar["research-detail"]=Xi,lu(de("research-detail")))}var Mn={x:0,y:0,s:80,a:0,id:null,t:0},ru=new w;function SS(n){let e=de("lock"),t=u.aimTarget;if(t&&(ru.set(t.x,t.y,t.z).project(u.camera),ru.z<1)){let i=innerWidth,s=innerHeight,r=(ru.x*.5+.5)*i,o=(-ru.y*.5+.5)*s,a=Math.max(46,Math.min(260,t.r/Math.max(1,t.dist)*s*.9));Mn.id!==t.id&&(Mn.id=t.id,Mn.x=r,Mn.y=o,Mn.s=a*2.6,Mn.t=0,Y.play("tick"),e.querySelector(".lk-info").animate([{opacity:0,transform:"translateX(-10px)",clipPath:"inset(0 100% 0 0)"},{opacity:1,transform:"none",clipPath:"inset(0 0 0 0)"}],{duration:420,easing:"cubic-bezier(.2,.8,.2,1)",delay:80,fill:"backwards"}),e.querySelectorAll(".c").forEach(h=>h.animate([{opacity:0},{opacity:1,offset:.3},{opacity:.25,offset:.45},{opacity:1}],{duration:420})));let l=Math.min(1,n*14);Mn.x+=(r-Mn.x)*l,Mn.y+=(o-Mn.y)*l,Mn.s+=(a-Mn.s)*Math.min(1,n*9),Mn.t+=n,e.style.transform=`translate(${Mn.x-Mn.s/2}px, ${Mn.y-Mn.s/2}px)`,e.style.width=e.style.height=Mn.s+"px";let c="on "+t.kind;e.className!==c&&(e.className=c),e.style.setProperty("--lc",t.kind==="enemy"?"var(--red)":t.color||"var(--amber)"),e.querySelector(".lk-tag").textContent=t.tag,e.querySelector(".lk-name").textContent=t.name,e.querySelector(".lk-dist").textContent=t.dist.toFixed(1)+" M",e.querySelector(".lk-bar i").style.width=t.bar*100+"%";return}Mn.id=null,e.classList.remove("on")}var Zv=!1;function m0(){let n=de("bigmap"),e=n.getContext("2d"),t=n.width,i=u.player,s=t/an,r=h=>(h+an/2)*s,o=h=>(h+an/2)*s;de("map-title").textContent=`${Me.name} \xB7 ${Me.place}`,e.clearRect(0,0,t,t),e.globalAlpha=.9,e.drawImage(au,0,0,t,t),e.globalAlpha=1,e.strokeStyle="rgba(142,231,255,.08)",e.lineWidth=1;for(let h=0;h<=t;h+=t/14)e.beginPath(),e.moveTo(h,0),e.lineTo(h,t),e.stroke(),e.beginPath(),e.moveTo(0,h),e.lineTo(t,h),e.stroke();e.strokeStyle="rgba(142,231,255,.7)",e.setLineDash([6,6]),e.lineWidth=1.5,e.beginPath(),e.arc(r(di.x),o(di.z),On[u.cityLevel].r*s,0,Math.PI*2),e.stroke(),e.setLineDash([]);let a=(h,d,f,p)=>{e.fillStyle=p,e.beginPath(),e.moveTo(r(h),o(d)-f),e.lineTo(r(h)+f,o(d)),e.lineTo(r(h),o(d)+f),e.lineTo(r(h)-f,o(d)),e.fill()};for(let h of u.nodes)a(h.x,h.z,h.type==="titanium"?3.5:2.2,sn[h.type].color);for(let h of u.buildings){let d=Math.max(2.5,h.def.r*s);e.fillStyle=h.broken?"#ff5a45":"#f3efe8",e.fillRect(r(h.x)-d,o(h.z)-d,d*2,d*2)}for(let h of u.enemies)e.fillStyle="#ff5a45",e.beginPath(),e.arc(r(h.pos.x),o(h.pos.z),h.boss?6:2.5,0,7),e.fill();for(let h of Jp())e.strokeStyle=h.found?"rgba(255,210,138,.4)":"#ffd28a",e.lineWidth=2,e.beginPath(),e.arc(r(h.x),o(h.z),6,0,7),e.stroke();for(let h of s0())e.fillStyle="#8bf0a9",e.beginPath(),e.arc(r(h.x),o(h.z),5,0,7),e.fill();if(e.fillStyle="#8bf0a9",e.fillRect(r(_t.x)-3,o(_t.z)-3,6,6),u.waypoint){let h=u.waypoint;e.strokeStyle="#ffb65c",e.lineWidth=2,e.beginPath(),e.arc(r(h.x),o(h.z),9,0,7),e.stroke(),e.beginPath(),e.moveTo(r(h.x),o(h.z)-14),e.lineTo(r(h.x),o(h.z)+14),e.moveTo(r(h.x)-14,o(h.z)),e.lineTo(r(h.x)+14,o(h.z)),e.stroke()}let l=Math.atan2(i.fwd.x,-i.fwd.z);e.save(),e.translate(r(i.pos.x),o(i.pos.z)),e.rotate(l),e.fillStyle="#fff",e.shadowColor="#8ee7ff",e.shadowBlur=10,e.beginPath(),e.moveTo(0,-10),e.lineTo(7,7),e.lineTo(0,3),e.lineTo(-7,7),e.closePath(),e.fill(),e.restore();let c=(h,d,f="dot")=>`<div class="lg"><i class="${f}" style="--c:${h}"></i>${d}</div>`;de("map-legend").innerHTML=`<h4>\u56FE\u4F8B</h4>${c("#fff","\u4F60\u7684\u4F4D\u7F6E","arrow")}${c("#f3efe8","\u5EFA\u7B51","sq")}${Object.values(sn).map(h=>c(h.color,h.name,"dia")).join("")}${c("#ffd28a","\u9057\u8FF9","ring")}${c("#8bf0a9","\u8865\u7ED9\u8231 / \u7740\u9646\u8231")}${c("#ff5a45","\u9508\u8680\u86DB")}${c("#8ee7ff","\u6B96\u6C11\u5730\u9886\u5730","dash")}
    <h4>\u5BFC\u822A</h4><p>\u70B9\u51FB\u5730\u56FE\u4EFB\u610F\u4F4D\u7F6E\u8BBE\u7F6E\u5BFC\u822A\u70B9\uFF0C\u7F57\u76D8\u4F1A\u6307\u5411\u5B83\uFF0C\u5730\u9762\u4F1A\u51FA\u73B0\u5149\u67F1\u3002</p>${u.waypoint?'<button class="go small" id="wp-clear">\u6E05\u9664\u5BFC\u822A\u70B9</button>':""}`,de("wp-clear")?.addEventListener("click",()=>{u.waypoint=null,Y.play("tick"),m0()}),Zv||(Zv=!0,n.addEventListener("click",h=>{let d=n.getBoundingClientRect(),f=(h.clientX-d.left)/d.width*an-an/2,p=(h.clientY-d.top)/d.height*an-an/2;u.waypoint={x:f,z:p},Y.play("ui"),m0()}))}var Rr="iron",Os="silicon",Ia=10;function Yl(){de("tr-res").innerHTML=Object.entries(sn).map(([t,i])=>`<span style="--rc:${i.color}">${gt(t)}${Math.floor(u.res[t])}</span>`).join("");let n=t=>Object.entries(sn).map(([i,s])=>`<button class="rs ${i===t?"on":""}" data-k="${i}" style="--rc:${s.color}">${gt(i)}<span>${s.name}</span><b>${Math.floor(u.res[i])}</b></button>`).join(""),e=Rp(Rr,Os,Ia);de("trade-body").innerHTML=`<div class="tcol"><h4>\u4EA4\u51FA</h4><div class="rsl" id="tr-from">${n(Rr)}</div></div>
    <div class="tmid"><div class="amt">${[10,25,50,100].map(t=>`<button class="${t===Ia?"on":""}" data-n="${t}">${t}</button>`).join("")}</div>
      <div class="deal"><span style="--rc:${sn[Rr].color}">${gt(Rr)}${Ia}</span><i>\u2192</i><span style="--rc:${sn[Os].color}">${gt(Os)}${e}</span></div>
      <div class="note2">\u6C47\u7387\u6309\u5730\u7403\u5E02\u573A\u4EF7\u8BA1\u7B97\uFF0C\u542B 20% \u8FD0\u8F93\u635F\u8017</div>
      <button class="go" ${Rr===Os||e<=0||u.res[Rr]<Ia?"disabled":""}>\u4EA4\u6613</button></div>
    <div class="tcol"><h4>\u6362\u53D6</h4><div class="rsl" id="tr-to">${n(Os)}</div></div>`,de("tr-from").querySelectorAll(".rs").forEach(t=>t.addEventListener("click",()=>{Rr=t.dataset.k,Y.play("tick"),Yl()})),de("tr-to").querySelectorAll(".rs").forEach(t=>t.addEventListener("click",()=>{Os=t.dataset.k,Y.play("tick"),Yl()})),de("trade-body").querySelectorAll(".amt button").forEach(t=>t.addEventListener("click",()=>{Ia=+t.dataset.n,Y.play("tick"),Yl()})),de("trade-body").querySelector(".go").addEventListener("click",()=>{let t=H1(Rr,Os,Ia);t&&rn(`\u4EA4\u6613\u5B8C\u6210\uFF1A\u83B7\u5F97${sn[Os].name} ${t}`,Os,"good"),Yl()})}function y0(){let n=u.colony,e=u.stats,t=e.mined.iron+e.mined.silicon+e.mined.ice+e.mined.titanium,i=[["\u4EBA\u53E3",n.pop],["\u57CE\u5E02\u7B49\u7EA7",On[u.cityLevel].name],["\u8BBE\u65BD",u.buildings.length],["\u706B\u661F\u65E5",u.time.day],["\u7535\u529B",`${Math.round(n.powerProd)} / ${n.powerUse}`],["\u9057\u8FF9",`${us().found} / ${us().total}`],["\u53EF\u5BB9\u7EB3",n.support],["\u91C7\u96C6\u8D44\u6E90",t],["\u51FB\u9000\u9508\u8680\u86DB",e.kills],["\u884C\u9A76\u91CC\u7A0B",`${((e.driven||0)/1e3).toFixed(1)} km`],["\u5C45\u6C11\u4EA4\u8C08",(e.talked||[]).length],["\u5E78\u798F\u5EA6",u.morale??"\u2014"],["\u8865\u7ED9\u8231",e.pods||0]],s=mn.visited||[],r=Object.keys(Nn).map(l=>{let c=l===st?{pop:n.pop}:s.find(h=>h.id===l);return`<div><small>${Nn[l].name}</small><b>${c?c.pop+" \u4EBA":"\u2014"}</b></div>`}).join(""),o=u.colonists.map(l=>`<div class="person" data-i="${[...l.name][0]}"><span class="pn">${l.name}</span><span class="pj">${l.job}</span><div class="pl">\u201C${l.line}\u201D</div></div>`).join(""),a=n.pop-u.colonists.length;return`<h3>\u6982\u51B5 \xB7 ${Me.name}</h3><div class="kv">${i.map(l=>`<div><small>${l[0]}</small><b>${l[1]}</b></div>`).join("")}</div>
    ${u.moraleFactors&&n.pop?`<h3>\u5E78\u798F\u5EA6\u6784\u6210</h3><div class="kv">${u.moraleFactors.map(l=>`<div><small>${l[0]}</small><b style="color:${l[1]>=0?"var(--green)":"var(--red)"}">${l[1]>0?"+":""}${Math.round(l[1])}</b></div>`).join("")}</div>`:""}
    <h3>\u4EBA\u7C7B\u7684\u8DB3\u8FF9</h3><div class="kv">${r}<div><small>\u661F\u9645\u603B\u4EBA\u53E3</small><b>${s.filter(l=>l.id!==st).reduce((l,c)=>l+c.pop,0)+n.pop}</b></div></div>
    <h3>\u5C45\u6C11\u540D\u518C</h3>${o?`<div class="people">${o}</div>`:'<p style="color:var(--dim)">\u8FD8\u6CA1\u6709\u5C45\u6C11\u3002\u5EFA\u597D\u4F4F\u623F\u3001\u6C27\u6C14\u3001\u98DF\u7269\u3001\u6C34\u548C\u7740\u9646\u573A\uFF0C\u79FB\u6C11\u98DE\u8239\u5C31\u4F1A\u5230\u6765\u3002</p>'}
    ${a>0?`<p style="color:var(--dim);margin-top:14px">\u2026\u2026\u4EE5\u53CA\u53E6\u5916 ${a} \u4F4D\u5C45\u6C11\u3002</p>`:""}`}var La={},Kv={},Ar={},a0=0,Jv="",Da=0,jv="";function M0(n,e){let t=u.player,i=u.colony;if(a0-=n,a0<=0){a0=.2;let p=C1(),g=On[u.cityLevel],x=p?Math.min(1,Math.min(i.pop/p.pop,u.buildings.length/Math.max(1,p.b))):1,v=`<span class="lv">LV.${xS[u.cityLevel]}</span><span class="nm">${g.name}</span>${p?`<div class="pg"><i style="width:${x*100}%"></i></div><div class="nx">\u4E0B\u4E00\u7EA7\u300C${p.name}\u300D\xB7 \u4EBA\u53E3 ${Math.min(i.pop,p.pop)}/${p.pop} \xB7 \u8BBE\u65BD ${Math.min(u.buildings.length,p.b)}/${p.b}</div>`:'<div class="nx">\u5DF2\u8FBE\u5230\u6700\u9AD8\u7B49\u7EA7</div>'}`;de("city").dataset.k!==v&&(de("city").dataset.k=v,de("city").innerHTML=v);let m="";if(u.buildings.length){if(m+=`<div class="st ${i.deficit?"warn":""}">${gt("power")}<div><small>\u7535\u529B</small><b>${Math.round(i.powerProd)}<em>/${i.powerUse}</em></b></div></div>`,m+=`<div class="st">${gt("pop")}<div><small>\u4EBA\u53E3</small><b>${i.pop}<em>/${i.support}</em></b></div></div>`,i.pop>0&&u.morale!==void 0){let I=u.morale;m+=`<div class="st ${I<35?"warn":I>=75?"tf":""}">${gt("star")}<div><small>\u5E78\u798F</small><b>${I}</b></div></div>`,I<35&&(m+=`<div class="chip">${gt("warn")}\u5C45\u6C11\u4E0D\u5F00\u5FC3\uFF1A\u5EFA\u7167\u660E\u706F\u3001\u5E7F\u573A\u3001\u6E29\u5BA4\uFF0C\u4FEE\u597D\u53D7\u635F\u8BBE\u65BD</div>`)}if(u.terraform>0&&(m+=`<div class="st tf">${gt("planet")}<div><small>\u5927\u6C14\u6539\u9020</small><b>${Math.floor(u.terraform*100)}%</b></div></div>`),i.deficit&&(m+=`<div class="chip">${gt("warn")}\u7535\u529B\u4E0D\u8DB3\uFF1A\u591A\u5EFA\u592A\u9633\u80FD\u6216\u53CD\u5E94\u5806</div>`),i.housing&&u.buildings.some(I=>I.type==="beacon")&&i.support<=i.pop){let I=[["housing","\u4F4F\u623F","house","\u5C45\u4F4F\u7A79\u9876"],["o2","\u6C27\u6C14","o2","\u5236\u6C27\u7AD9"],["food","\u98DF\u7269","food","\u6E29\u5BA4"],["water","\u6C34","water","\u6C34\u51B0\u63D0\u53D6\u5668"]].sort((S,b)=>i[S[0]]-i[b[0]])[0];m+=`<div class="chip">${gt(I[2])}\u7F3A\u5C11${I[1]}\uFF1A\u5EFA\u9020${I[3]}\u6765\u8FCE\u63A5\u65B0\u79FB\u6C11</div>`}}de("colony").dataset.k!==m&&(de("colony").dataset.k=m,de("colony").innerHTML=m);let _=u.storm>.3?"\u6C99\u5C18\u66B4":u.raining?"\u964D\u96E8":"";de("clock").innerHTML=lp().replace(/^.*? · /,"")+(_?`<span class="wx">${_}</span>`:"");let E=Ai[u.chapter],M=u.chapter,A=(ti()?[]:E.goals).map((I,S)=>{let b=u.goalDone?.[M+":"+S],U=I.prog&&!b?I.prog():"",O=/^(\d+)\/(\d+)$/.exec(U);return`<div class="g ${b?"done":""}"><span class="cb"></span><div class="gx">${I.text}${U?`<small>${U}</small>`:""}${O?`<div class="gp"><i style="width:${Math.min(100,O[1]/O[2]*100)}%"></i></div>`:""}</div></div>`}).join(""),P=u.requests||[];P.length?A+='<div class="rq-h">\u5C45\u6C11\u59D4\u6258</div>'+P.map(I=>{let S=O1(I,Ua);return`<div class="g rq"><span class="cb"></span><div class="gx">${I.text}<small>${I.giver}${I.n>1?` \xB7 ${S}/${I.n}`:""}</small>${I.n>1?`<div class="gp"><i style="width:${S/I.n*100}%"></i></div>`:""}</div></div>`}).join(""):ti()&&(A+='<div class="g"><div class="gx" style="color:var(--dim)">\u5148\u5EFA\u4E00\u5EA7\u8BBE\u65BD\uFF0C\u5C45\u6C11\u4EEC\u4F1A\u5F00\u59CB\u63D0\u51FA\u59D4\u6258</div></div>'),(u.rp>.5||u.buildings.some(I=>I.type==="lab"))&&(A+=`<div class="rq-h">\u79D1\u7814 <b>${Math.floor(u.rp)}</b> \u70B9 <small>+${Fh().toFixed(1)}/\u79D2 \xB7 T \u6253\u5F00</small></div>`),A!==jv&&(jv=A,de("goals").innerHTML=A,de("goal-ch").textContent=ti()?`\u81EA\u7531\u6A21\u5F0F \xB7 ${xa[u.diffKey||"normal"].name}`:E.title.replace(/ · /," ")),document.querySelectorAll("#hotbar .slot").forEach((I,S)=>{I.classList.toggle("on",S===hn.index),I.classList.toggle("lock",!!(Tr[S].need&&!u.upgrades[Tr[S].need]))})}for(let p in sn){La[p]=La[p]??u.res[p];let g=u.res[p]-La[p];La[p]=Math.abs(g)<.5?u.res[p]:La[p]+g*Math.min(1,n*7+.02);let x=Math.floor(La[p]+1e-4),v=Kv[p]||(Kv[p]=de("r-"+p).querySelector("b"));v.textContent!=x&&(v.textContent=x)}l0("d-hp",70,t.health/t.maxHealth),l0("d-o2",58,t.o2/t.maxO2),l0("d-en",47,t.energy/100),de("d-o2n").textContent=Math.ceil(t.o2/t.maxO2*100),de("d-hpn").textContent=Math.ceil(t.health),de("d-enn").textContent=Math.ceil(t.energy),de("pl-en").textContent=lp().split(" \xB7 ")[0]===Me.name?h0[st]:h0[st];let s=de("o2-state"),r=t.inLife?`${gt("o2")} \u8865\u6C27\u4E2D`:t.o2<t.maxO2*.2?`${gt("warn")} \u6C27\u6C14\u4E0D\u8DB3\uFF0C\u7ACB\u5373\u8FD4\u56DE`:"";s.dataset.k!==r&&(s.dataset.k=r,s.innerHTML=r),s.className=t.inLife?"ok":"bad",de("suit").classList.toggle("low",t.o2<t.maxO2*.2&&!t.inLife);let o=av(),a=de("radio");if(o){Jv!==o[1]&&(Jv=o[1],Da=0,a.querySelector(".who").textContent=o[0]);let p=o[1].length;Da<p&&(Da=Math.min(p,Da+n*26+1e-4),n===0&&(Da=p));let g=Math.floor(Da);a.querySelector(".txt").innerHTML=o[1].slice(0,g)+(g<p?'<span class="cur"></span>':""),a.classList.toggle("idle",g>=p),a.classList.add("show")}else a.classList.remove("show");let l=de("prompt");l.dataset.k!==(e.prompt||"")&&(l.dataset.k=e.prompt||"",l.innerHTML=e.prompt||""),l.classList.toggle("show",!!e.prompt),l.classList.toggle("drive",!!u.driving);let c=de("buildhint");if(hn.id==="build"&&Ct.type&&!u.menuOpen){let p=Fn[Ct.type];c.innerHTML=`<div class="bn">${p.name}</div><div>${ra(p.cost)}</div>
      <div class="st">${Ct.valid?'<span class="okc">\u5DE6\u952E\u653E\u7F6E</span>':`<span class="badc">${Ct.reason}</span>`}</div>
      <div><kbd>R</kbd>\u65CB\u8F6C <kbd>\u53F3\u952E</kbd>\u53D6\u6D88 <kbd>B</kbd>\u66F4\u6362\u84DD\u56FE</div>`,c.classList.add("show")}else c.classList.remove("show");de("hurt").style.opacity=Math.min(1,t.hurtT*1.6+(t.o2<=0?.5+Math.sin(performance.now()*.01)*.2:0)),de("lowo2").style.opacity=!t.inLife&&t.o2<t.maxO2*.2?(.4+Math.sin(performance.now()*.006)*.3)*(1-t.o2/(t.maxO2*.2)*.6):0,de("crosshair").className=e.crossClass||"",SS(n);let h=de("tip");h.dataset.k!==(e.tip||"")&&(h.dataset.k=e.tip||"",h.innerHTML=e.tip?`<div class="tk">\u63D0\u793A</div><div>${e.tip}</div>`:""),h.classList.toggle("show",!!e.tip);let d=gv(),f=d&&Math.hypot(d.pos.x-t.pos.x,d.pos.z-t.pos.z)<260;de("bossbar").classList.toggle("hidden",!f),f&&(de("bossbar").querySelector("i").style.width=Math.max(0,d.hp/d.maxHp*100)+"%"),TS(),RS()}function l0(n,e,t){let i=2*Math.PI*e,s=de(n);s.style.strokeDasharray=i,s.style.strokeDashoffset=i*(1-Math.max(0,Math.min(1,t)))}var Qv={0:"\u5317",45:"\u4E1C\u5317",90:"\u4E1C",135:"\u4E1C\u5357",180:"\u5357",225:"\u897F\u5357",270:"\u897F",315:"\u897F\u5317"};function TS(){let n=u.player,e=n.fwd,t=Math.atan2(e.x,-e.z)*180/Math.PI,i=80,s=520,r=f=>s/2+f/i*(s/2),o="",a=Math.ceil((t-i)/5)*5;for(let f=a;f<=t+i;f+=5){let p=f-t,g=(f%360+360)%360;Qv[g]!==void 0?o+=`<span class="lb ${g%90===0?"big":""}" style="left:${r(p)}px">${Qv[g]}</span>`:o+=`<span class="tk ${g%15===0?"m":""}" style="left:${r(p)}px"></span>`}let l=(f,p)=>Math.atan2(f-n.pos.x,-(p-n.pos.z))*180/Math.PI,c=[{c:"home",t:`${gt("house")}${Math.round(Math.hypot(_t.x-n.pos.x,_t.z-n.pos.z))}m`,a:l(_t.x,_t.z)}];if(u.upgrades.scanner){let f=null,p=1e9;for(let g of u.nodes)if(g.type==="titanium"){let x=Math.hypot(g.x-n.pos.x,g.z-n.pos.z);x<p&&(p=x,f=g)}f&&c.push({c:"ti",t:`${gt("titanium")}${Math.round(p)}m`,a:l(f.x,f.z)})}u.waypoint&&c.push({c:"ship",t:`${gt("star")}\u5BFC\u822A ${Math.round(Math.hypot(u.waypoint.x-n.pos.x,u.waypoint.z-n.pos.z))}m`,a:l(u.waypoint.x,u.waypoint.z)});let h=Vv(n.pos);h&&c.push({c:"home",t:`${gt("ship")}\u8865\u7ED9 ${Math.round(h.d)}m`,a:l(h.p.x,h.p.z)});let d=Uv(n.pos);d&&c.push({c:"ship",t:`? ${Math.round(d.d)}m`,a:l(d.r.x,d.r.z)});for(let f of c){let p=(f.a-t+540)%360-180;Math.abs(p)<i&&(o+=`<span class="mk ${f.c}" style="left:${r(p)}px;top:16px">${f.t}</span>`)}de("compass").innerHTML=o}function RS(){let n=u.player,e=c0.width,t=e/2-6,i=u.upgrades.scanner?220:110,s=au.width/an;be.clearRect(0,0,e,e),be.save(),be.beginPath(),be.arc(e/2,e/2,t,0,Math.PI*2),be.clip(),be.fillStyle="#0c0807",be.fillRect(0,0,e,e),be.globalAlpha=.75;let r=t*2/(i*2);be.drawImage(au,(n.pos.x-i+an/2)*s,(n.pos.z-i+an/2)*s,i*2*s,i*2*s,e/2-t,e/2-t,t*2,t*2),be.globalAlpha=1;let o=f=>(f-n.pos.x)*r+e/2,a=f=>(f-n.pos.z)*r+e/2;be.strokeStyle="rgba(255,255,255,.1)",be.lineWidth=1;for(let f of[.33,.66])be.beginPath(),be.arc(e/2,e/2,t*f,0,Math.PI*2),be.stroke();be.strokeStyle="rgba(127,230,255,.55)",be.setLineDash([3,4]),be.beginPath(),be.arc(o(di.x),a(di.z),On[u.cityLevel].r*r,0,Math.PI*2),be.stroke(),be.setLineDash([]);let l=(f,p,g,x)=>{be.fillStyle=x,be.beginPath(),be.arc(o(f),a(p),g,0,Math.PI*2),be.fill()};for(let f of u.nodes){if(Math.abs(f.x-n.pos.x)>i||Math.abs(f.z-n.pos.z)>i)continue;let p=sn[f.type].color,g=o(f.x),x=a(f.z),v=f.type==="titanium"?3.2:2.2;be.fillStyle=p,be.beginPath(),be.moveTo(g,x-v),be.lineTo(g+v,x),be.lineTo(g,x+v),be.lineTo(g-v,x),be.fill()}for(let f of u.buildings){let p=Math.max(2,f.def.r*r*.8);be.fillStyle=f.broken?"#ff5a45":f.powered?"#ece6dc":"#ffb35c",be.fillRect(o(f.x)-p,a(f.z)-p,p*2,p*2)}be.fillStyle="#8dffb0";for(let f of u.colonists)be.fillRect(o(f.pos.x)-1,a(f.pos.z)-1,2,2);let c=Math.sin(performance.now()*.008)>0;for(let f of u.enemies)l(f.pos.x,f.pos.z,f.guardian?3.5:2.6,c?"#ff5a45":"#a02818");l(_t.x,_t.z,3,"#8dffb0");for(let f of s0())be.fillStyle="#8bf0a9",be.beginPath(),be.arc(o(f.x),a(f.z),4.5,0,Math.PI*2),be.fill();for(let f of Jp())Math.abs(f.x-n.pos.x)>i*1.2||Math.abs(f.z-n.pos.z)>i*1.2||(be.strokeStyle=f.found?"rgba(255,210,138,.4)":"#ffd28a",be.lineWidth=1.5,be.beginPath(),be.arc(o(f.x),a(f.z),4,0,Math.PI*2),be.stroke());be.restore(),be.save(),be.translate(e/2,e/2),be.strokeStyle="rgba(236,230,220,.35)",be.lineWidth=1,be.beginPath(),be.arc(0,0,t+.5,0,Math.PI*2),be.stroke();for(let f=0;f<72;f++){let p=f/72*Math.PI*2,g=f%18===0?6:f%6===0?4:2;be.strokeStyle=f%18===0?"rgba(255,179,92,.9)":"rgba(236,230,220,.3)",be.beginPath(),be.moveTo(Math.sin(p)*(t+1),-Math.cos(p)*(t+1)),be.lineTo(Math.sin(p)*(t+1+g),-Math.cos(p)*(t+1+g)),be.stroke()}let h=Math.atan2(n.fwd.x,-n.fwd.z);be.rotate(h);let d=be.createRadialGradient(0,0,0,0,0,t*.6);d.addColorStop(0,"rgba(255,179,92,.35)"),d.addColorStop(1,"rgba(255,179,92,0)"),be.fillStyle=d,be.beginPath(),be.moveTo(0,0),be.arc(0,0,t*.6,-Math.PI/2-.55,-Math.PI/2+.55),be.closePath(),be.fill(),be.fillStyle="#fff",be.beginPath(),be.moveTo(0,-7),be.lineTo(5,5),be.lineTo(0,2.5),be.lineTo(-5,5),be.closePath(),be.fill(),be.restore()}function cu(){let n=de("boot"),e=["ARK OS 3.1  \xB7  VISOR LINK ESTABLISHED","\u751F\u547D\u7EF4\u6301 ........... \u6B63\u5E38","\u5B87\u822A\u670D\u6C14\u5BC6 ......... \u6B63\u5E38","\u5BFC\u822A\u4E0E\u7F57\u76D8 ......... \u6821\u51C6\u5B8C\u6210","\u6B96\u6C11\u5730\u6570\u636E\u94FE ....... \u5DF2\u540C\u6B65","\u5168\u606F\u6295\u5F71 ........... \u542F\u52A8"];n.innerHTML='<div class="bt-ring"></div>'+e.map((t,i)=>`<div class="bt-l" style="animation-delay:${.1+i*.16}s">${t}</div>`).join(""),n.className="show",document.body.classList.add("booting"),Y.play("open"),setTimeout(()=>{n.className="out",document.body.classList.remove("booting"),Y.play("chapter")},1500),setTimeout(()=>{n.className="",n.innerHTML=""},2300)}var sx="starport-achv",uu=[{id:"first",name:"\u7B2C\u4E00\u6B65",desc:"\u5728\u5F02\u661F\u91C7\u96C6\u7B2C\u4E00\u5757\u77FF\u77F3",icon:"iron",check:()=>u.stats.mined.iron+u.stats.mined.silicon+u.stats.mined.ice>0},{id:"breathe",name:"\u547C\u5438",desc:"\u5EFA\u8D77\u7B2C\u4E00\u5EA7\u5236\u6C27\u7AD9",icon:"o2",check:()=>u.stats.built.oxygen>0},{id:"home",name:"\u7B2C\u4E00\u4E2A\u5BB6",desc:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",icon:"dome",check:()=>u.stats.built.habitat>0},{id:"welcome",name:"\u6B22\u8FCE\u56DE\u5BB6",desc:"\u8FCE\u63A5\u7B2C\u4E00\u6279\u79FB\u6C11",icon:"pop",check:()=>u.stats.arrived>0},{id:"listen",name:"\u503E\u542C\u8005",desc:"\u4E0E 8 \u4F4D\u5C45\u6C11\u4EA4\u8C08",icon:"radio",check:()=>(u.stats.talked||[]).length>=8},{id:"night",name:"\u957F\u591C\u5B88\u671B\u8005",desc:"\u51FB\u9000 15 \u53EA\u9508\u8680\u86DB",icon:"shield",check:()=>u.stats.kills>=15},{id:"guardian",name:"\u6676\u4F53\u730E\u4EBA",desc:"\u51FB\u8D25\u4E00\u53EA\u949B\u77FF\u5B88\u536B",icon:"titanium",check:()=>(u.stats.guardKills||0)>0},{id:"road",name:"\u516C\u8DEF\u65C5\u884C",desc:"\u9A7E\u9A76\u6F2B\u6E38\u8F66\u884C\u9A76 3 \u516C\u91CC",icon:"rover",check:()=>(u.stats.driven||0)>=3e3},{id:"meteor",name:"\u661F\u843D\u4E4B\u591C",desc:"\u91C7\u96C6\u4E00\u5757\u9668\u77F3",icon:"meteor",check:()=>(u.stats.meteorMined||0)>0},{id:"storm",name:"\u98CE\u66B4\u4E4B\u4E2D",desc:"\u7ECF\u5386\u4E00\u573A\u6C99\u5C18\u66B4",icon:"storm",check:()=>u.storm>.85},{id:"fly",name:"\u98DE\u7FD4",desc:"\u5236\u9020\u55B7\u6C14\u80CC\u5305",icon:"jet",check:()=>!!u.upgrades.jetpack},{id:"town",name:"\u5C0F\u9547",desc:"\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C\u5C0F\u9547\u300D",icon:"colony",check:()=>u.cityLevel>=2},{id:"metro",name:"\u5927\u90FD\u4F1A",desc:"\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C\u5927\u90FD\u4F1A\u300D",icon:"tower",check:()=>u.cityLevel>=4},{id:"fifty",name:"\u4E94\u5341\u4E2A\u706F\u706B",desc:"\u5355\u9897\u661F\u7403\u4EBA\u53E3\u8FBE\u5230 50",icon:"pop",check:()=>u.colony.pop>=50},{id:"reactor",name:"\u7B2C\u4E8C\u9897\u592A\u9633",desc:"\u70B9\u4EAE\u805A\u53D8\u53CD\u5E94\u5806",icon:"power",check:()=>u.stats.built.reactor>0},{id:"blue",name:"\u84DD\u8272\u5929\u7A7A",desc:"\u5B8C\u6210\u706B\u661F\u5927\u6C14\u6539\u9020",icon:"planet",check:()=>u.terraform>=1},{id:"europa",name:"\u51B0\u4E0B\u4E4B\u6D77",desc:"\u767B\u9646\u6728\u536B\u4E8C\xB7\u6B27\u7F57\u5DF4",icon:"ice",check:()=>st==="europa"},{id:"kepler",name:"\u53CC\u65E5\u4E4B\u5730",desc:"\u62B5\u8FBE\u5F00\u666E\u52D2-442b",icon:"sun",check:()=>st==="kepler"},{id:"civ",name:"\u661F\u9645\u6587\u660E",desc:"\u5EFA\u6210\u6587\u660E\u7EAA\u5FF5\u7891",icon:"monument",check:()=>u.stats.built.monument>0},{id:"relic",name:"\u56DE\u58F0",desc:"\u53D1\u73B0\u7B2C\u4E00\u5904\u9057\u8FF9",icon:"radio",check:()=>us().found>0},{id:"archaeo",name:"\u8003\u53E4\u5B66\u5BB6",desc:"\u53D1\u73B0\u4E00\u9897\u661F\u7403\u4E0A\u7684\u5168\u90E8\u9057\u8FF9",icon:"book",check:()=>{let n=us();return n.total>0&&n.found===n.total}},{id:"boss",name:"\u6676\u6BCD\u9668\u843D",desc:"\u5728\u6676\u6F6E\u4E4B\u591C\u51FB\u8D25\u6676\u6BCD",icon:"boss",check:()=>(u.stats.bossKills||0)>0},{id:"fleet",name:"\u65E0\u4EBA\u673A\u8230\u961F",desc:"\u65E0\u4EBA\u673A\u8FD0\u56DE 30 \u6279\u7269\u8D44",icon:"drone",check:()=>(u.stats.droneHauls||0)>=30},{id:"lv3",name:"\u7CBE\u76CA\u6C42\u7CBE",desc:"\u628A\u4E00\u5EA7\u5EFA\u7B51\u5347\u5230 3 \u7EA7",icon:"star",check:()=>u.buildings.some(n=>(n.level||1)>=3)},{id:"buddy",name:"\u597D\u642D\u6863",desc:"\u8BA9\u5C0F\u661F\u626B\u63CF 10 \u6B21",icon:"scanner",check:()=>(u.stats.scans||0)>=10},{id:"helper",name:"\u597D\u90BB\u5C45",desc:"\u5B8C\u6210 10 \u4E2A\u5C45\u6C11\u59D4\u6258",icon:"radio",check:()=>(u.stats.requests||0)>=10},{id:"science",name:"\u79D1\u5B66\u5BB6",desc:"\u5B8C\u6210 6 \u9879\u79D1\u7814",icon:"book",check:()=>Object.keys(u.tech||{}).length>=6},{id:"trader",name:"\u661F\u9645\u5546\u4EBA",desc:"\u5B8C\u6210 10 \u6B21\u661F\u9645\u8D38\u6613",icon:"ship",check:()=>(u.stats.traded||0)>=10},{id:"mail",name:"\u6765\u81EA\u5730\u7403\u7684\u4FE1",desc:"\u6253\u5F00 5 \u4E2A\u8865\u7ED9\u8231",icon:"ship",check:()=>(u.stats.pods||0)>=5},{id:"happy",name:"\u5B89\u5C45\u4E50\u4E1A",desc:"\u5C45\u6C11\u5E78\u798F\u5EA6\u8FBE\u5230 90",icon:"star",check:()=>u.colony.pop>=4&&(u.morale||0)>=90},{id:"fest",name:"\u6B96\u6C11\u5730\u8282",desc:"\u548C\u5C45\u6C11\u4E00\u8D77\u5728\u5E7F\u573A\u770B\u70DF\u82B1",icon:"star",check:()=>(u.stats.festivals||0)>0},{id:"photo",name:"\u6444\u5F71\u5E08",desc:"\u5728\u62CD\u7167\u6A21\u5F0F\u4E2D\u4FDD\u5B58\u4E00\u5F20\u7167\u7247",icon:"camera",check:()=>(u.stats.photos||0)>0},{id:"gather",name:"\u6545\u4E61\u7684\u5149",desc:"\u591C\u91CC\uFF0C\u5C45\u6C11\u4EEC\u805A\u5728\u5E7F\u573A\u4E0A\u770B\u5168\u606F\u5730\u7403",icon:"planet",check:()=>!!u.plazaSeen}],po={};try{po=JSON.parse(localStorage.getItem(sx))||{}}catch{po={}}var _0=[],E0=0,hu=0;function rx(n){if(E0-=n,hu-=n,E0<=0){E0=1;for(let t of uu){if(po[t.id])continue;let i=!1;try{i=t.check()}catch{i=!1}if(i){po[t.id]=Date.now(),_0.push(t);try{localStorage.setItem(sx,JSON.stringify(po))}catch{}}}}let e=document.getElementById("achv-pop");if(hu<=0&&e.classList.contains("show")&&e.classList.remove("show"),hu<=-.6&&_0.length){let t=_0.shift();e.innerHTML=`<div class="ai">${gt(t.icon)}</div><div><div class="k">ACHIEVEMENT UNLOCKED</div><div class="n">${t.name}</div><div class="d">${t.desc}</div></div>`,e.classList.add("show"),hu=4.5,Y.play("achv")}}function b0(){return`<h3>\u6210\u5C31 \xB7 ${uu.filter(e=>po[e.id]).length} / ${uu.length}</h3><div class="achv">${uu.map(e=>`<div class="ach ${po[e.id]?"on":""}"><div class="ai">${gt(e.icon)}</div><div><div class="an">${e.name}</div><div class="ad">${e.desc}</div></div></div>`).join("")}</div>`}var ax=!1,lx=[],cx=[],hx=[];function ox(n,e,t,i,s){let r=new At;r.setAttribute("position",new on(new Float32Array(n*3),3));let o=new ci({size:t,map:zn(),color:e,transparent:!0,opacity:i,depthWrite:!1,blending:s?ke:ai}),a=new yi(r,o);a.frustumCulled=!1,u.scene.add(a);let l=new Float32Array(n*3);for(let c=0;c<n;c++)l[c*3]=Math.random(),l[c*3+1]=Math.random()*Math.PI*2,l[c*3+2]=Math.random();return{p:a,seed:l,n}}function AS(){if(ax=!0,st==="mars")for(let n=0;n<3;n++){let e=ox(420,14195306,2.4,.45,!1);lx.push({...e,x:0,z:0,vx:0,vz:0,h:40+Math.random()*30,life:0,k:0})}else if(st==="europa"){let n=Ls.slice(0,8).map(e=>({x:e.x+(Math.random()-.5)*e.r*.6,z:e.z+(Math.random()-.5)*e.r*.6}));n.push({x:60,z:70},{x:-90,z:-40},{x:120,z:140});for(let e of n){if(Math.abs(e.x)>Qe-200||Math.abs(e.z)>Qe-200)continue;let t=ox(500,15267583,2.6,.6,!0);cx.push({...t,x:e.x,z:e.z,y:ve(e.x,e.z),t:Math.random()*30,on:0})}}else if(st==="kepler"){let n=new Ge(1,12,6,0,Math.PI*2,0,Math.PI/2);for(let e=0;e<34;e++){let t=.45+Math.random()*.4,i=new ce().setHSL(t,.9,.6),s=new se(n,new Ne({color:i,transparent:!0,opacity:.55,depthWrite:!1,blending:ke})),r=new xi(new li({map:zn(),color:i,transparent:!0,depthWrite:!1,blending:ke})),o=new se(new Yt(.6,3,6,1,!0),s.material);o.position.y=-1.6,o.rotation.x=Math.PI;let a=new ue;a.add(s,r,o),r.scale.setScalar(6);let l=.6+Math.random()*1.2;a.scale.setScalar(l),u.scene.add(a),hx.push({g:a,m:s,s:r,x:(Math.random()-.5)*500,z:(Math.random()-.5)*500,alt:14+Math.random()*30,ph:Math.random()*6,sp:.5+Math.random()})}}}var E5=new w,w0=0;function ux(n){ax||AS();let e=u.player.pos,t=performance.now()*.001,i=1-u.time.night;for(let s of lx){if(s.life-=n,s.life<=0){let c=Math.random()*Math.PI*2,h=90+Math.random()*200;s.x=Nt.clamp(e.x+Math.cos(c)*h,-Qe+160,Qe-160),s.z=Nt.clamp(e.z+Math.sin(c)*h,-Qe+160,Qe-160);let d=Math.random()*Math.PI*2;s.vx=Math.cos(d)*3,s.vz=Math.sin(d)*3,s.life=40+Math.random()*40,s.h=35+Math.random()*40}s.x+=s.vx*n,s.z+=s.vz*n;let r=Math.min(1,s.life/5,(60-s.life)/5+1)*i*(1-u.storm)*(u.terraform<1?1:.2);s.k+=(r-s.k)*Math.min(1,n),s.p.material.opacity=.45*s.k;let o=s.p.geometry.attributes.position.array,a=ve(s.x,s.z);for(let c=0;c<s.n;c++){let h=s.seed,d=(h[c*3]+t*.08*(.6+h[c*3+2]))%1,f=h[c*3+1]+t*(3+(1-d)*2),p=.8+d*d*9+h[c*3+2]*1.5,g=Math.sin(t*.7+d*4)*d*3;o[c*3]=s.x+Math.cos(f)*p+g,o[c*3+1]=a+d*s.h,o[c*3+2]=s.z+Math.sin(f)*p}s.p.geometry.attributes.position.needsUpdate=!0;let l=Math.hypot(e.x-s.x,e.z-s.z);l<8&&s.k>.5&&!u.driving&&(u.player.vel.x+=(e.x-s.x)/l*n*20,u.player.vel.z+=(e.z-s.z)/l*n*20)}w0-=n;for(let s of cx){s.t-=n,s.t<=0&&s.on<=0&&(s.on=9,s.t=25+Math.random()*30,Math.hypot(e.x-s.x,e.z-s.z)<120&&Y.play("rumble")),s.on-=n;let r=Nt.clamp(Math.min(s.on,9-s.on),0,1.5)/1.5;if(s.p.material.opacity=.6*r,r<=0)continue;let o=s.p.geometry.attributes.position.array,a=70;for(let l=0;l<s.n;l++){let c=s.seed,h=(c[l*3]+t*.35)%1,d=.4+h*9*c[l*3+2]+h*h*4;o[l*3]=s.x+Math.cos(c[l*3+1])*d,o[l*3+1]=s.y+Math.sin(h*Math.PI*.9)*a*(.6+c[l*3+2]*.4),o[l*3+2]=s.z+Math.sin(c[l*3+1])*d}s.p.geometry.attributes.position.needsUpdate=!0,Math.hypot(e.x-s.x,e.z-s.z)<40&&w0<=0&&(w0=.5,Y.play("jet"))}for(let s of hx){s.ph+=n*s.sp,s.x+=Math.sin(s.ph*.3)*n*2,s.z+=Math.cos(s.ph*.23)*n*2,Math.abs(s.x-e.x)>260&&(s.x=e.x-Math.sign(s.x-e.x)*250),Math.abs(s.z-e.z)>260&&(s.z=e.z-Math.sign(s.z-e.z)*250);let r=ve(s.x,s.z)+s.alt+Math.sin(s.ph)*2;s.g.position.set(s.x,r,s.z);let o=.75+Math.sin(s.ph*3)*.25;s.m.scale.set(1+Math.sin(s.ph*3)*.12,1-Math.sin(s.ph*3)*.1,1+Math.sin(s.ph*3)*.12);let a=.15+u.time.night*.85;s.m.material.opacity=.5*a*o,s.s.material.opacity=.7*a*o}}var ps,S0,Kl,T0,mo,R0,Ha=[],Jl=0,Zl=-1,A0=20,du=0,Cr=new w,dx=new w,fx=new Set,pu=140;function mx(){ps=new ue;let n=new se(new Ge(.32,20,14),y.white),e=new se(new De(.33,.04,8,28),y.orange);e.rotation.x=Math.PI/2;let t=new se(new Ge(.2,16,10,-Math.PI*.35,Math.PI*.7,Math.PI*.3,Math.PI*.4),new ge({color:660504,roughness:.1,metalness:.6}));t.position.z=.15,t.rotation.y=Math.PI,S0=_e(8382207,.45,null,0,.02,.33),Kl=new se(new De(.5,.015,6,40),new Ne({color:8382207,transparent:!0,opacity:.6})),Kl.rotation.x=Math.PI/2;let i=new se(new Yt(.05,.25,6),y.metal);i.position.y=.38,ps.add(n,e,t,S0,Kl,i,_e(16738874,.25,null,0,.5,0)),ps.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),ps.scale.setScalar(.8),T0=new hi(12578815,0,22,1.6),ps.add(T0),u.scene.add(ps);let s=u.player.pos;Cr.set(s.x+1.5,s.y+2.2,s.z+1.5),ps.position.copy(Cr),R0=new Ne({color:8382207,transparent:!0,opacity:0,side:Rt,depthWrite:!1,blending:ke}),mo=new se(new tn(.94,1,96),R0),mo.rotation.x=-Math.PI/2,mo.visible=!1,u.scene.add(mo)}function Na(n,e,t=!0){t&&fx.has(n)||A0>0&&t||(fx.add(n),A0=45,It("\u5C0F\u661F \xB7 \u4F19\u4F34\u673A\u5668\u4EBA",e))}var fu;function CS(){if(fu)return fu;let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d");return e.translate(32,32),e.rotate(Math.PI/4),e.strokeStyle="#fff",e.lineWidth=5,e.strokeRect(-14,-14,28,28),e.fillStyle="rgba(255,255,255,.35)",e.fillRect(-9,-9,18,18),fu=new qt(n),fu}function PS(){if(Jl>0){u.events.emit("toast",`\u626B\u63CF\u51B7\u5374\u4E2D \xB7 ${Math.ceil(Jl)} \u79D2`),Y.play("deny");return}Jl=12,Zl=0,Y.play("scan");for(let s of Ha)u.scene.remove(s.s);Ha=[];let n=u.player.pos,e={};for(let s of u.nodes){let r=Math.hypot(s.x-n.x,s.z-n.z);if(r>pu)continue;let o=Ds[s.type],a=new xi(new li({map:CS(),color:new ce(o[0],o[1],o[2]),transparent:!0,depthTest:!1,depthWrite:!1,opacity:0,sizeAttenuation:!1}));a.scale.setScalar(s.type==="titanium"?.05:.036),a.position.set(s.x,s.y+3,s.z),a.renderOrder=999,u.scene.add(a),Ha.push({s:a,delay:r/90,life:10}),e[s.type]=(e[s.type]||0)+1}let t={iron:"\u94C1\u77FF",silicon:"\u7845\u6676",ice:"\u6C34\u51B0",titanium:"\u949B\u77FF"},i=Object.entries(e).map(([s,r])=>`${t[s]} ${r}`).join(" \xB7 ");u.events.emit("toast",i?`\u626B\u63CF\u5B8C\u6210 \xB7 ${i}`:"\u626B\u63CF\u5B8C\u6210 \xB7 \u9644\u8FD1\u6CA1\u6709\u77FF\u85CF"),u.stats.scans=(u.stats.scans||0)+1}function gx(n){if(!ps)return;let e=u.player,t=performance.now()*.001;Jl=Math.max(0,Jl-n),A0-=n,xe.hit("KeyQ")&&!u.menuOpen&&!e.dead&&PS();let i=(u.driving,e.yaw),s=new w(Math.cos(i),0,-Math.sin(i)),r=new w(-Math.sin(i),0,-Math.cos(i)),o=e.pos.clone().addScaledVector(s,u.driving?3.5:3).addScaledVector(r,u.driving?2:5.5);o.y=Math.max(e.pos.y+1.55,ve(o.x,o.z)+.8)+Math.sin(t*2)*.12,u.driving&&(o.y+=2.2);let a=Cr.distanceTo(o)>30?1:Math.min(1,n*3);dx.lerp(o.clone().sub(Cr).multiplyScalar(4),a),Cr.addScaledVector(dx,n),Cr.distanceTo(o)>40&&Cr.copy(o),ps.position.copy(Cr);let l=e.pos.clone().addScaledVector(e.fwd,12);if(l.y+=1.5,ps.lookAt(l),Kl.rotation.z+=n*1.5,Kl.rotation.x=Math.PI/2+Math.sin(t*1.3)*.3,S0.material.opacity=.75+Math.sin(t*4)*.25,T0.intensity=u.time.night>.4?18*u.time.night:0,Zl>=0){Zl+=n;let h=Zl*90;mo.visible=h<pu,mo.position.set(e.pos.x,e.pos.y+.6,e.pos.z),mo.scale.setScalar(Math.max(.1,h)),R0.opacity=.7*(1-h/pu),h>=pu&&(Zl=-1)}for(let h=Ha.length-1;h>=0;h--){let d=Ha[h];d.delay-=n,!(d.delay>0)&&(d.life-=n,d.s.material.opacity=Math.min(1,(10-d.life)*3,d.life/2)*(.75+Math.sin(t*5+h)*.25),d.life<=0&&(u.scene.remove(d.s),d.s.material.dispose(),Ha.splice(h,1)))}du=Math.hypot(e.vel.x,e.vel.z)>.5?0:du+n,!e.inLife&&e.o2<e.maxO2*.3&&Na("o2"+Math.floor(t/120),"\u6C27\u6C14\u4E0D\u591A\u4E86\uFF01\u6700\u8FD1\u7684\u8865\u6C27\u70B9\u5728\u7F57\u76D8\u4E0A\u90A3\u4E2A\u623F\u5B50\u56FE\u6807\u7684\u65B9\u5411\u3002",!1),u.time.night>.6&&!e.flashlight&&Na("dark","\u597D\u9ED1\u2026\u2026\u6309 F \u6253\u5F00\u624B\u7535\u7B52\u5427\u3002\u6211\u4E5F\u4F1A\u5E2E\u4F60\u7167\u7740\u70B9\u3002"),u.enemies.some(h=>!h.dead&&!h.guardian&&h.pos.distanceTo(e.pos)<25)&&Na("enemy"+Math.floor(t/90),"\u68C0\u6D4B\u5230\u9508\u8680\u86DB\u9760\u8FD1\uFF01\u5C0F\u5FC3\uFF01",!1),u.nodes.some(h=>h.type==="titanium"&&Math.hypot(h.x-e.pos.x,h.z-e.pos.z)<40)&&Na("ti","\u9644\u8FD1\u6709\u949B\u77FF\u7684\u4FE1\u53F7\uFF01\u7D2B\u8272\u7684\u90A3\u79CD\uFF0C\u5F88\u7A00\u6709\u54E6\u3002"),du>40&&(du=-200,Na("idle"+Math.floor(t/300),px[st][Math.floor(Math.random()*px[st].length)],!1)),u.stats.scans===void 0&&u.time.day>=1&&t>30&&Na("scanhint","\u6211\u80FD\u626B\u63CF\u9644\u8FD1\u7684\u77FF\u85CF\u2014\u2014\u6309 Q \u8BD5\u8BD5\u3002")}var px={mars:["\u4F60\u77E5\u9053\u5417\uFF1F\u706B\u661F\u4E0A\u7684\u4E00\u5929\u6BD4\u5730\u7403\u957F 37 \u5206\u949F\u3002","\u706B\u661F\u7684\u65E5\u843D\u662F\u84DD\u8272\u7684\u3002\u7B49\u508D\u665A\u7684\u65F6\u5019\u62AC\u5934\u770B\u770B\u5427\u3002","\u90A3\u5EA7\u6700\u9AD8\u7684\u5C71\u53EB\u5965\u6797\u5E15\u65AF\uFF0C\u662F\u5730\u7403\u73E0\u5CF0\u7684\u4E24\u500D\u591A\u9AD8\u3002","\u6211\u7684\u6570\u636E\u5E93\u91CC\u6709\u4E00\u9996\u5730\u7403\u7684\u6B4C\uFF0C\u53EB\u300A\u6708\u4EAE\u4EE3\u8868\u6211\u7684\u5FC3\u300B\u3002\u8981\u6211\u54FC\u7ED9\u4F60\u542C\u5417\uFF1F\u2026\u2026\u7B97\u4E86\uFF0C\u6211\u8DD1\u8C03\u3002"],europa:["\u6728\u661F\u597D\u5927\u2026\u2026\u611F\u89C9\u5B83\u968F\u65F6\u4F1A\u6389\u4E0B\u6765\u3002","\u51B0\u5C42\u4E0B\u9762\u7684\u6D77\uFF0C\u53EF\u80FD\u6BD4\u5730\u7403\u6240\u6709\u7684\u6D77\u52A0\u8D77\u6765\u8FD8\u8981\u591A\u3002","\u8FD9\u91CC\u7684\u91CD\u529B\u5F88\u5C0F\uFF0C\u8DF3\u9AD8\u4E00\u70B9\u6CA1\u5173\u7CFB\u7684\u3002"],kepler:["\u4E24\u4E2A\u592A\u9633\uFF01\u5F71\u5B50\u90FD\u6709\u4E24\u4E2A\uFF01","\u90A3\u4E9B\u53D1\u5149\u7684\u6C34\u6BCD\u2026\u2026\u5B83\u4EEC\u662F\u5728\u770B\u6211\u4EEC\u5417\uFF1F","\u7A7A\u6C14\u91CC\u7684\u6C27\u6C14\u5DF2\u7ECF\u6709 14% \u4E86\u3002\u518D\u8FC7\u51E0\u5341\u5E74\uFF0C\u4E5F\u8BB8\u5C31\u80FD\u6458\u4E0B\u5934\u76D4\u4E86\u3002"]};var gn=null,vx=new dn,C0=new Sn,jl=new w;function IS(){let n=new ue,e=new ue;n.add(e);let t=(f,p,g,x,v,m=e,_=0,E=0,M=0)=>{let D=new se(f,p);return D.position.set(g,x,v),D.rotation.set(_,E,M),D.castShadow=!0,D.receiveShadow=!0,m.add(D),D},i=(f,p,g,x=.08)=>new _a(f,p,g,2,x),s=(f,p,g,x,v=e)=>{let m=p.clone().sub(f),_=t(new Oe(g,g,m.length(),8),x,0,0,0,v);return _.position.copy(f).add(p).multiplyScalar(.5),_.quaternion.setFromUnitVectors(new w(0,1,0),m.normalize()),_},r=(f,p,g)=>new w(f,p,g);t(i(2.5,.35,4.8,.1),y.dark,0,.85,0),t(i(2.6,.75,3.4,.18),y.white,0,1.35,.5),t(i(2.64,.14,3.44,.05),y.orange,0,1.62,.5),t(i(2.2,.5,1.2,.12),y.panel,0,1.25,-1.9,e,-.25,0,0);let o=t(new Ge(1.15,32,16,0,Math.PI*2,0,Math.PI/2),y.glass,0,1.72,-.75);o.scale.set(1,.8,1.15),o.castShadow=!1;for(let f=0;f<5;f++)t(new De(1.16,.035,6,24,Math.PI),y.metal,0,1.72,-.75,e,0,f*Math.PI/5,0).scale.set(1,.8,1.15);for(let f of[-1.15,1.15])s(r(f,1.7,.6),r(f*.9,2.75,.9),.06,y.metal),s(r(f,1.7,2.1),r(f*.9,2.75,1.9),.06,y.metal);s(r(-1.04,2.75,.9),r(1.04,2.75,.9),.06,y.metal),s(r(-1.04,2.75,1.9),r(1.04,2.75,1.9),.06,y.metal),s(r(-1.04,2.75,.9),r(-1.04,2.75,1.9),.06,y.metal),s(r(1.04,2.75,.9),r(1.04,2.75,1.9),.06,y.metal),t(i(1.8,.16,.22,.05),y.dark,0,2.82,.9);let a=[];for(let f=0;f<4;f++)t(new Oi(.07,12),y.lamp,-.6+f*.4,2.82,.78,e,0,Math.PI,0),a.push(_e(16773853,.9,e,-.6+f*.4,2.82,.75));for(let f of[-.85,.85])a.push(_e(16773853,1.2,e,f,1.2,-2.5));for(let f of[-.85,.85])t(i(.35,.18,.08,.04),y.lamp,f,1.2,-2.42);t(i(2.3,.08,1.5,.03),y.metal,0,1.78,1.6);for(let[f,p,g]of[[-.5,1.4,.6],[.4,1.7,.7],[.5,1.1,.45]])t(i(g,g*.8,g,.04),y.dark,f,1.82+g*.4,p);t(new Oe(.02,.02,1.6,4),y.metal,.9,3.5,1.9);let l=_e(16728128,.6,e,.9,4.3,1.9);for(let f=0;f<3;f++)t(i(.06,.06,.5,.02),y.metal,1.33,.75+f*.28,-.2);t(i(.1,.4,1,.04),y.orange,-1.32,1.3,1);let c=[],h=new De(.46,.2,12,28);for(let f of[-1.65,0,1.65])for(let p of[-1.5,1.5]){let g=new ue;g.position.set(p,.62,f),n.add(g);let x=t(h,y.rubber,0,0,0,g,0,Math.PI/2,0);for(let v=0;v<14;v++){let m=v/14*Math.PI*2;t(new Ye(.42,.06,.1),y.rubber,0,Math.cos(m)*.64,Math.sin(m)*.64,g,m,0,0)}t(new Oe(.34,.34,.3,20),y.metal,0,0,0,g,0,0,Math.PI/2);for(let v=0;v<5;v++)t(new Ye(.32,.06,.06),y.dark,p>0?.16:-.16,0,0,g,v*Math.PI/5,0,0).scale.set(.3,1,9);t(new Oe(.1,.1,.34,10),y.chrome,0,0,0,g,0,0,Math.PI/2),s(r(p*.62,.95,f),r(p*.95,.66,f),.07,y.metal,n),s(r(p*.7,1.15,f+.3),r(p*.95,.75,f),.04,y.chrome,n),c.push(g)}let d=new jo(16773853,0,60,.5,.5,1.2);return d.position.set(0,1.2,-2.4),d.target.position.set(0,0,-20),e.add(d,d.target),{g:n,body:e,wheels:c,tip:l,lamp:d,heads:a}}function gu(n,e,t=0){if(gn)return gn;let i=IS();return u.scene.add(i.g),gn={...i,x:n,z:e,y:ve(n,e),h:t,speed:0,vy:0,lookYaw:0,pitch:-.05,spin:0,hitT:0,air:!1},gn.collider=u.colliders.add({x:n,z:e,r:2,kind:"rover"}),P0(0),gn}function vu(){return gn}function xx(){return gn?{x:+gn.x.toFixed(1),z:+gn.z.toFixed(1),h:+gn.h.toFixed(2)}:null}function mu(n,e){return ve(n,e)}function P0(n){let e=gn,t=Math.sin(e.h),i=Math.cos(e.h),s=-t,r=-i,o=i,a=-t,l=mu(e.x+s*1.8,e.z+r*1.8),c=mu(e.x-s*1.8,e.z-r*1.8),h=mu(e.x-o*1.3,e.z-a*1.3),d=mu(e.x+o*1.3,e.z+a*1.3),f=Math.atan2(l-c,3.6),p=Math.atan2(d-h,2.6);e.g.position.set(e.x,e.y,e.z),C0.set(e.air?e.g.rotation.x:f,e.h,e.air?e.g.rotation.z:-p,"YXZ"),e.air||e.g.rotation.copy(C0),e.spin+=e.speed*n/.55;for(let g of e.wheels)g.rotation.x=-e.spin;return(l+c+h+d)/4}function yx(){gn&&(u.driving=!0,gn.lookYaw=0,gn.pitch=-.08,u.colliders.remove(gn.collider),Y.play("place"))}function I0(n){let e=gn;if(!e)return;u.driving=!1,Y.engine(0);let t=Math.cos(e.h),i=Math.sin(e.h),s=e.x+t*3,r=e.z-i*3;u.colliders.overlaps(s,r,.5)&&(s=e.x-t*3,r=e.z+i*3),n.pos.set(s,ve(s,r),r),n.vel.set(0,0,0),n.yaw=e.h+e.lookYaw,n.pitch=e.pitch,e.speed=0,e.lamp.intensity=0,e.collider=u.colliders.add({x:e.x,z:e.z,r:2,kind:"rover"})}function Mx(n,e,t){if(!gn)return;let i=gn;if(i.tip.visible=Math.sin(performance.now()*.005)>0,!u.driving){i.y=P0(0);return}u.locked&&(i.lookYaw=Nt.clamp(i.lookYaw-xe.dx*xe.sens,-2.4,2.4),i.pitch=Nt.clamp(i.pitch-xe.dy*xe.sens,-1,.9));let s=(xe.down("KeyW")||xe.down("ArrowUp")?1:0)-(xe.down("KeyS")||xe.down("ArrowDown")?1:0),r=(xe.down("KeyA")||xe.down("ArrowLeft")?1:0)-(xe.down("KeyD")||xe.down("ArrowRight")?1:0),o=(xe.down("ShiftLeft")?28:17)*(Gt("terrain")?1.3:1);i.air||(s>0?i.speed+=(i.speed<0?22:11)*n:s<0?i.speed-=(i.speed>0?22:7)*n:i.speed*=1-.7*n,xe.down("Space")&&(i.speed*=1-3.5*n),i.speed=Nt.clamp(i.speed,-7,o),i.speed>o&&(i.speed-=20*n),i.h+=r*n*1.5*Nt.clamp(i.speed/5,-1,1)),jl.set(-Math.sin(i.h),0,-Math.cos(i.h)),u.stats.driven=(u.stats.driven||0)+Math.abs(i.speed)*n,i.x=Nt.clamp(i.x+jl.x*i.speed*n,-Qe+125,Qe-125),i.z=Nt.clamp(i.z+jl.z*i.speed*n,-Qe+125,Qe-125);for(let c of u.colliders.query(i.x,i.z)){c.kind==="flora"&&Math.abs(i.speed)>0;let h=i.x-c.x,d=i.z-c.z,f=Math.hypot(h,d),p=c.r+1.9;if(f<p&&f>.001){if(c.kind==="rock"&&c.r<1.3)continue;i.x=c.x+h/f*p,i.z=c.z+d/f*p,Math.abs(i.speed)>5&&(Y.play("land"),fe.dustPuff(new w(i.x,i.y+1,i.z),6,2)),i.speed*=-.25}}if(i.hitT-=n,Math.abs(i.speed)>6&&i.hitT<=0)for(let c of u.enemies)c.dead||Math.hypot(c.pos.x-i.x,c.pos.z-i.z)<2.6+c.scale&&(Wl(c,Math.abs(i.speed)*4,"player"),i.hitT=.4,i.speed*=.7,fe.burst(new w(c.pos.x,c.pos.y+1,c.pos.z),[1,.5,.2],20,6));let a=ve(i.x,i.z);if(i.air)i.vy-=Me.gravity*n,i.y+=i.vy*n,i.y<=a&&(i.y=a,i.air=!1,i.vy<-5&&(Y.play("land"),fe.dustPuff(new w(i.x,i.y,i.z),14,3)),i.vy=0);else{let c=i.y+i.vy*n-.5*Me.gravity*n*n;if(a<c-.25&&i.vy>1.5&&Math.abs(i.speed)>12)i.air=!0,i.vy=Math.min(i.vy,7),i.y=c;else{let h=(a-i.y)/Math.max(n,.001);i.vy=i.vy*.6+h*.4,i.y=a}}if(P0(n),Math.abs(i.speed)>4&&!i.air&&Math.random()<.6){let c=new w(i.x-jl.x*2.5+(Math.random()-.5)*2,i.y+.3,i.z-jl.z*2.5);fe.dustPuff(c,1,.5)}i.lamp.intensity=u.time.night>.3?80:0;for(let c of i.heads)c.visible=u.time.night>.3;vx.setFromEuler(C0.set(i.pitch,i.lookYaw,0,"YXZ")),t.quaternion.copy(i.body.getWorldQuaternion(new dn)).multiply(vx);let l=new w(0,2.15,-.7).applyQuaternion(i.g.quaternion).add(i.g.position);t.position.copy(l),t.getWorldDirection(e.fwd),e.pos.set(i.x,i.y,i.z),e.vel.set(0,0,0),e.inLife=!0,e.o2=Math.min(e.maxO2,e.o2+20*n),e.energy=Math.min(100,e.energy+10*n),e.hurtT=Math.max(0,e.hurtT-n),Y.engine(Math.abs(i.speed)/28)}function _x(){return gn?Math.round(Math.abs(gn.speed)*3.6):0}var ka,D0;function LS(){ka||(D0=new Ne({color:16758364,transparent:!0,opacity:.35,blending:ke,depthWrite:!1,side:Rt,fog:!1}),ka=new se(new Oe(.6,1.2,160,16,1,!0),D0),ka.frustumCulled=!1,u.scene.add(ka))}function DS(){LS();let n=u.waypoint;ka.visible=!!n,n&&(ka.position.set(n.x,ve(n.x,n.z)+80,n.z),D0.opacity=.22+Math.sin(performance.now()*.004)*.08,Math.hypot(u.player.pos.x-n.x,u.player.pos.z-n.z)<6&&(u.waypoint=null,u.events.emit("toast","\u2713 \u5DF2\u5230\u8FBE\u5BFC\u822A\u70B9"),Y.play("objective")))}var xu=[],U0=-1,Ql=0,L0=null,Ex=[[1,.6,.2],[.5,.9,1],[1,.4,.7],[.7,1,.5],[1,.9,.4],[.8,.6,1]];function US(n){let e=Ex[Math.floor(Math.random()*Ex.length)];xu.push({pos:new w(n.x+(Math.random()-.5)*6,n.y+2,n.z+(Math.random()-.5)*6),vel:new w((Math.random()-.5)*4,34+Math.random()*10,(Math.random()-.5)*4),t:1.3+Math.random()*.6,c:e}),Y.play("jet")}function NS(n){let t=16+Math.random()*8;for(let i=0;i<90;i++){let s=Math.random()*2-1,r=Math.random()*6.283,o=Math.sqrt(1-s*s);fe.firework(n.pos,o*Math.cos(r)*t,s*t,o*Math.sin(r)*t,n.c)}Y.play("kill")}function bx(n){DS();let e=u.time.t;if(Ql<=0&&u.time.day%5===0&&U0!==u.time.day&&e>.74&&e<.8&&u.colony.pop>=4&&(L0=u.buildings.find(t=>t.type==="plaza"&&t.powered),L0&&(U0=u.time.day,Ql=60,u.stats.festivals=(u.stats.festivals||0)+1,u.events.emit("festival"),It("\u82CF\u5FF5 \xB7 \u6559\u5E08",`\u4ECA\u5929\u662F\u7B2C ${u.time.day} \u4E2A\u706B\u661F\u65E5\u2014\u2014\u6B96\u6C11\u5730\u8282\uFF01\u5927\u5BB6\u90FD\u5230\u5E7F\u573A\u4E0A\u6765\u4E86\uFF0C\u5B69\u5B50\u4EEC\u8BF4\u8981\u653E\u70DF\u82B1\u7ED9\u5730\u7403\u770B\u3002`))),Ql>0){Ql-=n,u.festival=!0;let t=L0;t&&Math.random()<n*1.6&&US({x:t.x,y:t.y,z:t.z})}else u.festival=!1;for(let t=xu.length-1;t>=0;t--){let i=xu[t];i.t-=n,i.vel.y-=9*n,i.pos.addScaledVector(i.vel,n);for(let s=0;s<3;s++)fe.trail(i.pos,[1,.85,.6],1.6);i.t<=0&&(NS(i),xu.splice(t,1))}}function wx(){Ql=0,U0=-1,u.time.day=5,u.time.t=.745}var ms=null,Sx=[],Tx=[],ec=0,Fs,N0,yu,HS={mars:[-420,-380],europa:[400,-420],kepler:[-380,420]}[st]||[-420,-380],go=2400;function kS(){ms=new ue;let[n,e]=HS,t=ve(n,e);ms.position.set(n,t-2,e);let i=(a,l,c,h,d)=>{let f=new se(a,l);return f.position.set(c,h,d),f.castShadow=!0,ms.add(f),f};for(let a=0;a<4;a++)i(new Oe(38-a*8,42-a*8,10,6),a%2?y.white:y.panel,0,5+a*10,0);for(let a=0;a<6;a++){let l=a*Math.PI/3,c=new w(Math.cos(l)*46,0,Math.sin(l)*46),h=new w(0,120,0),d=h.clone().sub(c),f=i(new Oe(2.2,3.2,d.length(),8),y.metal,0,0,0);f.position.copy(c).add(h).multiplyScalar(.5),f.quaternion.setFromUnitVectors(new w(0,1,0),d.normalize())}i(new Oe(6,14,160,6),y.white,0,120,0);let s=new Ne({color:10477823,transparent:!0,opacity:.55,fog:!1,blending:ke,depthWrite:!1});for(let a=0;a<3;a++){let l=a*Math.PI*2/3;i(new Oe(.9,1.4,go,6),s,Math.cos(l)*3,200+go/2,Math.sin(l)*3).castShadow=!1}let r=new ge({color:2240576,metalness:.8,roughness:.4,fog:!1});i(new Oe(1.6,1.6,go,8),r,0,200+go/2,0);for(let a=260;a<go;a+=180)Tx.push(_e(16726570,18,ms,0,a,0));for(let a=0;a<4;a++){let l=new ue,c=new se(new Oe(7,7,10,12),new ge({color:15262940,metalness:.3,roughness:.5,fog:!1}));l.add(c,_e(10477823,40,null,0,0,0)),ms.add(l),Sx.push({g:l,t:a/4,dir:a%2?1:-1})}Fs=new ue,Fs.position.y=200+go,ms.add(Fs);let o=new ge({color:9080729,metalness:.8,roughness:.35,emissive:1122867,fog:!1});N0=new se(new De(160,9,12,96),o),N0.rotation.x=Math.PI/2,Fs.add(N0),yu=new se(new De(110,5,10,80),o),yu.rotation.x=Math.PI/2,yu.position.y=-40,Fs.add(yu);for(let a=0;a<6;a++){let l=new se(new Oe(2,2,160,6),o);l.rotation.z=Math.PI/2,l.rotation.y=a*Math.PI/6,Fs.add(l)}Fs.add(new se(new Ge(30,24,16),o));for(let a=0;a<24;a++){let l=a/24*Math.PI*2;Fs.add(_e(a%2?16767392:10477823,30,null,Math.cos(l)*160,0,Math.sin(l)*160))}ms.scale.y=.001,u.scene.add(ms)}function Rx(n){if(!ms){if((u.cityLevel||0)<3)return;kS(),ec=u.megaSeen?1:0,u.megaSeen||(u.megaSeen=!0,Y.play("rumble"),It("\u65B9\u821F \xB7 AI","\u8F68\u9053\u5929\u68AF\u5408\u9F99\u3002\u4ECE\u4ECA\u5929\u8D77\uFF0C\u6B96\u6C11\u5730\u4E0E\u8F68\u9053\u4E4B\u95F4\u53EA\u9694\u4E00\u90E8\u7535\u68AF\u3002\u62AC\u5934\u770B\u2014\u2014\u5B83\u5C31\u5728\u5730\u5E73\u7EBF\u4E0A\u3002"),u.events.emit("toast","\u8F68\u9053\u5929\u68AF\u5B8C\u5DE5"))}ec<1&&(ec=Math.min(1,ec+n/12),ms.scale.y=Math.max(.001,1-Math.pow(1-ec,3)));let e=performance.now()*.001;for(let t of Sx)t.t+=n*.012*t.dir,t.t>1&&(t.t=1,t.dir=-1),t.t<0&&(t.t=0,t.dir=1),t.g.position.y=210+t.t*(go-20);Tx.forEach((t,i)=>{t.visible=Math.sin(e*2+i*.6)>.2}),Fs.rotation.y+=n*.02}var zS="attribute vec2 p; void main(){ gl_Position = vec4(p, 0.0, 1.0); }",OS=`precision highp float;
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
}`;function Ax(n,e,t=7){let i=document.createElement("canvas");i.id="warp",document.body.appendChild(i);let s=document.createElement("div");s.id="warp-cap",s.innerHTML=n.map((D,A)=>`<p style="animation-delay:${.8+A*1.1}s">${D}</p>`).join(""),document.body.appendChild(s);let r=document.createElement("div");r.id="warp-flash",document.body.appendChild(r);let o=i.getContext("webgl"),a=()=>{r.classList.add("on"),setTimeout(e,650)};if(!o){setTimeout(a,t*1e3);return}let l=(D,A)=>{let P=o.createShader(D);return o.shaderSource(P,A),o.compileShader(P),P},c=o.createProgram();o.attachShader(c,l(o.VERTEX_SHADER,zS)),o.attachShader(c,l(o.FRAGMENT_SHADER,OS)),o.linkProgram(c),o.useProgram(c);let h=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,h),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),o.STATIC_DRAW);let d=o.getAttribLocation(c,"p");o.enableVertexAttribArray(d),o.vertexAttribPointer(d,2,o.FLOAT,!1,0,0);let f=D=>o.getUniformLocation(c,D),p=f("uR"),g=f("uT"),x=f("uK"),v=f("uE"),m=performance.now(),_=0,E=m,M=!1;(function D(A){let P=Math.min(.05,(A-E)/1e3);E=A;let I=(A-m)/1e3,S=Math.min(1,I/t),b=Math.min(1,1280/innerWidth),U=Math.round(innerWidth*b),O=Math.round(innerHeight*b);(i.width!==U||i.height!==O)&&(i.width=U,i.height=O),o.viewport(0,0,U,O);let F=Math.min(1,I/1.8)*(1-Math.max(0,S-.85)*2);_+=P*(.5+F*1.2),o.uniform2f(p,U,O),o.uniform1f(g,_),o.uniform1f(x,F),o.uniform1f(v,Math.max(0,(S-.7)/.3)),o.drawArrays(o.TRIANGLES,0,3),S>=1&&!M&&(M=!0,a()),(!M||I<t+1)&&requestAnimationFrame(D)})(m)}var Px=6,FS={habitat:[16761466,3.2,1],apartment:[16761466,6,1.3],greenhouse:[16735432,2.6,1.1],vfarm:[16735432,4,1.2],lamp:[16765594,3.9,1.15],reactor:[5223167,4,1.4],plaza:[9426175,3.5,1.2],lab:[10479871,3,.9],fabricator:[16752704,2.5,.9],oxygen:[10477823,5,.45],extractor:[10477823,6,.5],lifehub:[10485712,3,1],trade:[16765056,3,1],launch:[16777215,5,1.4],monument:[16769184,6,1.3],terraformer:[10485728,6,1.4],beacon:[16736336,3,.6],landing:[16773328,2,1.1]},nc=[],tc,H0=0;function BS(){if(tc)return tc;let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);for(let i=0;i<=10;i++){let s=i/10,r=Math.pow(1-s,2.2)*.9;t.addColorStop(s,`rgba(255,255,255,${r.toFixed(3)})`)}return e.fillStyle=t,e.fillRect(0,0,128,128),tc=new qt(n),tc.colorSpace=bt,tc}var Ix=new Oe(.22,1.9,4,24,1,!0);Ix.translate(0,-2,0);function VS(n){return new Pt({uniforms:{uC:{value:new ce(n)},uI:{value:0}},vertexShader:`varying float vY; varying vec3 vN, vV;
      void main(){ vY = position.y; vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }`,fragmentShader:`uniform vec3 uC; uniform float uI; varying float vY; varying vec3 vN, vV;
      void main(){ float h = clamp(1.0 + vY/4.0, 0.0, 1.0); float f = abs(dot(normalize(vN), normalize(vV)));
        float a = pow(h, 1.6) * pow(f, 1.5) * uI; gl_FragColor = vec4(uC * a, a); }`,transparent:!0,blending:ke,depthWrite:!1,side:Rt})}var Lx=new Un(1,1);Lx.rotateX(-Math.PI/2);function Dx(n){for(let e=0;e<Px;e++){let t=new hi(16777215,0,34,1.7);t.userData={b:null,i:0},n.add(t),nc.push(t)}}function Mu(n){return FS[n.type]}function GS(n,e){let t=n.anim;if(t._pool!==void 0)return t._pool;let i=new Ne({map:BS(),color:e[0],transparent:!0,opacity:0,blending:ke,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),s=new se(Lx,i),r=Math.max(5,n.def.r*2.6)*e[2]*1.6;s.scale.set(r,1,r),s.position.set(0,.18,0),s.renderOrder=2,s.castShadow=s.receiveShadow=!1;let o=n.baseScale||1;if(s.scale.x/=o,s.scale.z/=o,s.position.y/=o,n.group.add(s),t._pool=s,n.type==="lamp"){let a=new se(Ix,VS(e[0]));a.position.y=4.1/o,a.scale.setScalar(1/o),n.group.add(a),s.userData.cone=a}return s}function k0(n){let e=u.time.night,t=u.player.pos,i=Math.min(1,Math.max(0,(e-.08)/.5))*(1-(u.storm||0)*.3);for(let r of u.buildings){let o=Mu(r);if(!o)continue;let a=GS(r,o),l=r.powered!==!1&&!r.broken&&r.buildT>=1,c=r.type==="lamp"||r.type==="habitat"?1-(Math.random()<.004?.4:0):1,h=l?i*.32*c:0;a.material.opacity+=(h-a.material.opacity)*Math.min(1,n*3),a.visible=a.material.opacity>.004;let d=a.userData.cone;d&&(d.material.uniforms.uI.value=a.material.opacity*1.1*(1-(u.storm||0)*.5),d.visible=a.visible)}H0-=n;let s=null;if(H0<=0&&(H0=.3,s=[],i>.01)){for(let r of u.buildings){let o=Mu(r);if(!o||r.broken||r.powered===!1||r.buildT<1)continue;let a=Math.hypot(r.x-t.x,r.z-t.z);a>140||s.push({b:r,d:a/o[2]})}s.sort((r,o)=>r.d-o.d),s.length=Math.min(s.length,Px)}if(s){let r=new Set(s.map(a=>a.b)),o=s.filter(a=>!nc.some(l=>l.userData.b===a.b)).map(a=>a.b);for(let a of nc){let l=a.userData;l.b&&(!r.has(l.b)||!u.buildings.includes(l.b))&&(l.leaving=!0),!l.b&&o.length&&Cx(a,o.shift())}for(let a of nc)a.userData.leaving&&a.intensity<.5&&o.length&&Cx(a,o.shift())}for(let r of nc){let o=r.userData,a=0;o.b&&!o.leaving&&(a=Mu(o.b)[2]*70*i),r.intensity+=(a-r.intensity)*Math.min(1,n*(a>r.intensity?2:4)),o.leaving&&r.intensity<.05&&(o.b=null,o.leaving=!1,r.intensity=0)}}function Cx(n,e){let t=Mu(e);n.userData.b=e,n.userData.leaving=!1,n.color.setHex(t[0]),n.intensity=0,n.position.set(e.x,e.y+t[1],e.z),n.distance=Math.max(24,e.def.r*6)*t[2]}var Xe=n=>document.getElementById(n);u.debug=/[?&]debug/.test(location.search);var Gs=Xe("c"),Vn=new Ko({canvas:Gs,antialias:!0,powerPreference:"high-performance"});Vn.setPixelRatio(Math.min(window.devicePixelRatio,1.5));Vn.setSize(window.innerWidth,window.innerHeight);Vn.shadowMap.enabled=!0;Vn.shadowMap.type=Lf;Vn.toneMapping=Yr;Vn.toneMappingExposure=1;var vo="high";try{vo=localStorage.getItem("starport-quality")||((navigator.hardwareConcurrency||8)<=4?"mid":"high")}catch{}function Gx(n,e){vo=n,Vn.setPixelRatio(n==="high"?Math.min(window.devicePixelRatio,1.5):n==="mid"?1:.75),Vn.setSize(window.innerWidth,window.innerHeight);let t=n!=="low";Vn.shadowMap.enabled!==t&&(Vn.shadowMap.enabled=t,e&&u.scene.traverse(i=>{i.material&&[].concat(i.material).forEach(s=>{s.needsUpdate=!0})})),ni&&(ni.setPixelRatio(Vn.getPixelRatio()),ni.setSize(window.innerWidth,window.innerHeight))}var ni=null,wu=null;function WS(){ni=new gh(Vn),ni.addPass(new vh(Ii,tt)),Bs=new sa(Ii,tt,window.innerWidth,window.innerHeight),Bs.output=sa.OUTPUT.Default,Bs.blendIntensity=1,Bs.overrideVisibility=function(){let n=this._visibilityCache;this.scene.traverse(e=>{n.set(e,e.visible);let t=e.material;(e.isPoints||e.isLine||e.isSprite||t&&!Array.isArray(t)&&t.transparent&&(t.depthWrite===!1||t.blending===ke))&&(e.visible=!1)})},Bs.updateGtaoMaterial({radius:1.6,distanceExponent:1.4,thickness:1.5,scale:1.2,samples:12}),Bs.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),ni.addPass(Bs),Fa=new Zr({uniforms:{tDiffuse:{value:null},uSun:{value:new te(.5,.5)},uK:{value:0},uAsp:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uSun; uniform float uK, uAsp; varying vec2 vUv;
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
      }`}),ni.addPass(Fa),wu=new ia(new te(window.innerWidth,window.innerHeight),.55,.5,.88),ni.addPass(wu),ni.addPass(new xh),Su=new Zr({uniforms:{tDiffuse:{value:null},uT:{value:0},uNight:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uT, uNight; varying vec2 vUv;
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
      }`}),ni.addPass(Su)}var Su=null,Bs=null,Fa=null,Pr=new w;function _u(){if(vo==="high"&&ni){wu.strength=.3+u.time.night*.22,wu.threshold=.9,Pr.copy(tt.position).addScaledVector(An,1e3).project(tt);let e=Pr.z<1&&Math.abs(Pr.x)<1.6&&Math.abs(Pr.y)<1.6?Nt.smoothstep(An.y,-.02,.12)*(1-u.storm)*(1-Nt.smoothstep(Math.max(Math.abs(Pr.x),Math.abs(Pr.y)),1,1.6)):0;Fa.uniforms.uK.value+=(e-Fa.uniforms.uK.value)*.1,Fa.uniforms.uSun.value.set(Pr.x*.5+.5,Pr.y*.5+.5),Fa.uniforms.uAsp.value=tt.aspect,Su.uniforms.uT.value=performance.now()*.001%100,Su.uniforms.uNight.value=u.time.night,ni.render()}else Vn.render(Ii,tt)}Gx(vo,!1);var Ii=new ji,tt=new un(72,window.innerWidth/window.innerHeight,.1,6e3);WS();u.scene=Ii;u.camera=tt;u.renderer=Vn;u.colliders=new _h(16);window.addEventListener("resize",()=>{tt.aspect=window.innerWidth/window.innerHeight,tt.updateProjectionMatrix(),Vn.setSize(window.innerWidth,window.innerHeight),ni&&ni.setSize(window.innerWidth,window.innerHeight),Bs&&Bs.setSize(window.innerWidth,window.innerHeight)});T1();u.hiShadows=vo==="high";Jg(Ii);t1(Ii);h1(Ii);Dx(Ii);var Va=tv();Va.group.position.set(_t.x,ve(_t.x,_t.z)+.1,_t.z);Va.group.rotation.y=.6;Ii.add(Va.group);u.colliders.add({x:_t.x,z:_t.z,r:3.4,kind:"lander"});var Je=new Kh(tt);u.player=Je;bv(tt);xv(Gs);ex(n1(350));Mp(Ii);u.requestLock=()=>{if(u.debug){u.locked=!0;return}try{let n=Gs.requestPointerLock();n&&n.catch&&n.catch(()=>{})}catch{}};document.addEventListener("pointerlockchange",()=>{u.locked=document.pointerLockElement===Gs,!u.locked&&u.started&&!u.menuOpen&&!Je.dead&&!u.endingShown&&!u.cine&&fs("pause")});Gs.addEventListener("click",()=>{Y.init(),u.started&&!u.locked&&!u.menuOpen&&!Je.dead&&u.requestLock()});function Ws(n){if(!u.started)return;let e={v:1,res:u.res,upgrades:u.upgrades,stats:u.stats,chapter:u.chapter,goalDone:u.goalDone,terraform:u.terraform,ended:u.ended,nights:u.nightsSurvived||0,city:u.cityLevel,pop:u.popTotal||0,launched:!!u.launched,rover:xx(),relics:u.relicsFound||[],plazaSeen:!!u.plazaSeen,mode:u.mode,diff:u.diffKey,morale:u.morale,waypoint:u.waypoint||null,megaSeen:!!u.megaSeen,tech:u.tech||{},rp:u.rp||0,requests:u.requests||[],time:{t:u.time.t,day:u.time.day},player:{x:Je.pos.x,z:Je.pos.z,yaw:Je.yaw,o2:Je.o2,hp:Je.health},buildings:ev(),nodes:v1(),colonists:Cv(),storm:cv()};try{localStorage.setItem(Eh,JSON.stringify(e)),n||rn("\u5DF2\u4FDD\u5B58")}catch{n||rn("\u4FDD\u5B58\u5931\u8D25")}}function $S(){try{return JSON.parse(localStorage.getItem(Eh))}catch{return null}}function XS(n){Object.assign(u.res,n.res),u.upgrades=n.upgrades||{},x1(n.nodes);for(let[e,t,i,s,r,o]of n.buildings)Fn[e]&&Vh(e,t,i,s,r,!1,o||1);u.stats=n.stats,u.goalDone=n.goalDone||{},u.terraform=n.terraform||0,u.ended=!!n.ended,u.nightsSurvived=n.nights||0,uv(u.terraform>=1),u.time.t=n.time.t,u.time.day=n.time.day,Je.pos.set(n.player.x,ve(n.player.x,n.player.z),n.player.z),Je.yaw=n.player.yaw,Je.o2=n.player.o2,Je.health=Math.max(30,n.player.hp),Pv(n.colonists||[]),n.rover&&gu(n.rover.x,n.rover.z,n.rover.h),u.relicsFound=n.relics||[],u.plazaSeen=!!n.plazaSeen,u.morale=n.morale,u.waypoint=n.waypoint||null,u.megaSeen=!!n.megaSeen,u.mode=n.mode||"story",u.diffKey=n.diff||"normal",u.tech=n.tech||{},u.rp=n.rp||0,u.requests=n.requests||[],u.cityLevel=n.city||0,u.popTotal=n.pop??(n.colonists||[]).length,u.launched=!!n.launched,Mp(Ii),hv(n.storm),Vl(n.chapter,!0),ls(),u.terraform>0&&up(Wx(),u.terraform)}var Wx=()=>u.buildings.filter(n=>n.type==="terraformer").map(n=>({x:n.x,z:n.z})),qS=Me.intro;document.querySelector(".logo span").textContent=Me.title;document.title="\u661F\u6E2F\uFF1A"+Me.title;mn.visited?.length&&(Xe("touch-note").innerHTML="\u5DF2\u5F00\u62D3\uFF1A"+mn.visited.map(n=>`${Nn[n.id].name}\uFF08${n.pop} \u4EBA\uFF09`).join(" \xB7 "));Xe("story").innerHTML=qS.map((n,e)=>`<p style="animation-delay:${.4+e*1.1}s">${n}</p>`).join("");var pi=$S();pi&&(Xe("btn-continue").classList.remove("hidden"),Xe("cont-info").textContent=`${pi.mode==="free"?"\u81EA\u7531":"\u5267\u60C5"} \xB7 ${Me.name} \xB7 ${Ai[pi.chapter]?.title||""} \xB7 \u7B2C ${pi.time.day} \u65E5 \xB7 ${pi.pop??pi.colonists?.length??0} \u4F4D\u5C45\u6C11`);matchMedia("(pointer: coarse)").matches&&(Xe("touch-note").innerHTML+="\u672C\u6E38\u620F\u9700\u8981\u952E\u76D8\u548C\u9F20\u6807\uFF0C\u8BF7\u5728\u7535\u8111\u4E0A\u6E38\u73A9\u3002");function YS(n){if(u.debug){setTimeout(n,1200);return}let e=Xe("cine"),t=Me.intro;u.cine=!0,e.classList.remove("hidden","out"),Xe("cine-lines").innerHTML=t.map((o,a)=>`<p style="animation-delay:${.6+a*2.1}s">${o}</p>`).join("");let i=!1,s=()=>{i||(i=!0,e.classList.add("out"),u.cine=!1,window.removeEventListener("keydown",r),window.removeEventListener("mousedown",s),setTimeout(()=>e.classList.add("hidden"),1500),setTimeout(n,900))},r=o=>{(o.code==="Space"||o.code==="Escape"||o.code==="Enter")&&s()};window.addEventListener("keydown",r),window.addEventListener("mousedown",s),setTimeout(s,1500+t.length*2100+1800)}function Ga(n){if(Y.init(),n&&pi)XS(pi),setTimeout(cu,300);else{if(localStorage.removeItem(Eh),p1(),mn.carry&&st!=="mars"){Object.assign(u.upgrades,mn.carry.upgrades||{});for(let e in mn.carry.res)u.res[e]+=mn.carry.res[e];u.upgrades.rover&&gu(_t.x+10,_t.z+4,.5),setTimeout(()=>rn("\u968F\u8230\u7269\u8D44\u5DF2\u5378\u8F7D\uFF0C\u6240\u6709\u88C5\u5907\u5DF2\u540C\u6B65"),4e3)}u.time.t=.29,u.mode=u.mode||"story",u.diffKey=u.diffKey||"normal",Vl(0,!0),ti()?Ox(()=>{cu(),setTimeout(()=>fo({k:"FREE MODE",title:Me.name,sub:`\u81EA\u7531\u5F00\u62D3 \xB7 ${xa[u.diffKey].name}`}),1600),It("\u65B9\u821F \xB7 AI","\u81EA\u7531\u6A21\u5F0F\u5DF2\u542F\u52A8\u3002\u6CA1\u6709\u4EFB\u52A1\u6E05\u5355\uFF0C\u8FD9\u7247\u571F\u5730\u5B8C\u5168\u5C5E\u4E8E\u4F60\u3002\u5EFA\u597D\u7B2C\u4E00\u5EA7\u8BBE\u65BD\u540E\uFF0C\u5C45\u6C11\u548C\u6307\u6325\u4E2D\u5FC3\u4F1A\u9646\u7EED\u63D0\u51FA\u59D4\u6258\u3002"),It("\u65B9\u821F \xB7 AI","\u63D0\u793A\uFF1AB \u5EFA\u9020\uFF0CT \u79D1\u7814\uFF0CTab \u6B96\u6C11\u5730\u6863\u6848\u3002\u795D\u4F60\u597D\u8FD0\u3002")}):YS(()=>Ox(()=>{cu(),setTimeout(()=>fo(Ai[0]),1600),Ai[0].radio.forEach(e=>It(e[0],e[1]))}))}Dv(),mx(),vo!=="low"&&l1(),Xe("intro").classList.add("hidden"),document.body.classList.add("playing"),u.started=!0,u.requestLock()}var fi={mode:"story",diff:"normal",planet:"mars"};function G0(){let n=(t,i,s,r,o)=>`<button class="opt ${o?"on":""}" data-g="${t}" data-k="${i}"><b>${s}</b><span>${r}</span></button>`,e=fi.mode==="free"?`<h3>\u661F\u7403</h3><div class="opts">${Object.values(Nn).map(t=>n("planet",t.id,t.name,t.title+" \xB7 "+t.place,fi.planet===t.id)).join("")}</div>`:'<p class="sm">\u5267\u60C5\u4ECE\u706B\u661F\u5F00\u59CB\u3002\u5B8C\u6210\u6BCF\u9897\u661F\u7403\u7684\u6545\u4E8B\u540E\uFF0C\u4E58\u6B96\u6C11\u8230\u524D\u5F80\u4E0B\u4E00\u9897\u3002</p>';Xe("intro-pane").innerHTML=`<h3>\u6A21\u5F0F</h3><div class="opts">${Object.entries(N1).map(([t,i])=>n("mode",t,i.name,i.desc,fi.mode===t)).join("")}</div>
    <h3>\u96BE\u5EA6</h3><div class="opts three">${Object.entries(xa).map(([t,i])=>n("diff",t,i.name,i.desc,fi.diff===t)).join("")}</div>
    ${e}
    <button class="launch" id="btn-launch">\u51FA\u53D1</button>`,Xe("intro-pane").dataset.k="setup",Xe("intro-pane").classList.remove("hidden"),Xe("intro-pane").querySelectorAll(".opt").forEach(t=>t.addEventListener("click",()=>{fi[t.dataset.g]=t.dataset.k,t.dataset.g==="mode"&&t.dataset.k==="story"&&(fi.planet="mars"),Y.play("tick"),G0()})),Xe("btn-launch").addEventListener("click",ZS)}function ZS(){let n=fi.mode==="story"?"mars":fi.planet;if(fi.mode==="story"){if((mn.visited?.length||pi)&&!confirm("\u5267\u60C5\u6A21\u5F0F\u4F1A\u4ECE\u706B\u661F\u91CD\u65B0\u5F00\u59CB\uFF0C\u5E76\u6E05\u9664\u6240\u6709\u661F\u7403\u7684\u8FDB\u5EA6\u3002\u786E\u5B9A\u5417\uFF1F"))return;tp()}else{if(Tu(n)&&!confirm(`\u5C06\u8986\u76D6 ${Nn[n].name} \u7684\u73B0\u6709\u5B58\u6863\uFF0C\u786E\u5B9A\u5417\uFF1F`))return;try{localStorage.removeItem(n==="mars"?"starport-newhome-v1":"starport-planet-"+n)}catch{}let t=dr();delete t.carry,t.planet=n,El(t)}if(n===st){u.mode=fi.mode,u.diffKey=fi.diff,Ga(!1);return}try{localStorage.setItem("starport-newgame",JSON.stringify({mode:fi.mode,diff:fi.diff}))}catch{}let e=dr();e.planet=n,El(e),location.href=location.pathname+(u.debug?"?debug":"")}Xe("btn-new").addEventListener("click",()=>{if(Y.init(),st!=="mars"&&!pi&&mn.visited?.length&&!mn.freshFree){u.mode=mn.mode||"story",u.diffKey=mn.diff||"normal",Ga(!1);return}G0()});try{let n=JSON.parse(localStorage.getItem("starport-newgame"));n&&(localStorage.removeItem("starport-newgame"),u.mode=n.mode,u.diffKey=n.diff,setTimeout(()=>Ga(!1),60))}catch{}Xe("btn-continue").addEventListener("click",()=>Ga(!0));Xe("tele-planet").textContent=`${Me.name} \xB7 ${Me.place}`;var KS=`<h3>\u64CD\u4F5C</h3><div class="keys">
  <div><kbd>W A S D</kbd><span>\u79FB\u52A8</span></div><div><kbd>\u9F20\u6807</kbd><span>\u73AF\u89C6</span></div>
  <div><kbd>Shift</kbd><span>\u51B2\u523A</span></div><div><kbd>\u7A7A\u683C</kbd><span>\u8DF3\u8DC3 / \u55B7\u6C14\u80CC\u5305</span></div>
  <div><kbd>\u5DE6\u952E</kbd><span>\u91C7\u77FF \xB7 \u5C04\u51FB \xB7 \u653E\u7F6E\u5EFA\u7B51</span></div><div><kbd>\u53F3\u952E</kbd><span>\u53D6\u6D88\u5EFA\u9020</span></div>
  <div><kbd>1</kbd><kbd>2</kbd><span>\u5207\u6362\u5DE5\u5177</span></div><div><kbd>B</kbd><span>\u5EFA\u9020\u84DD\u56FE</span></div>
  <div><kbd>E</kbd><span>\u4E92\u52A8 \xB7 \u4EA4\u8C08 \xB7 \u4E0A\u8F66</span></div><div><kbd>U</kbd><span>\u5347\u7EA7\u6CE8\u89C6\u7684\u5EFA\u7B51</span></div><div><kbd>T</kbd><span>\u79D1\u7814</span></div>
  <div><kbd>Q</kbd><span>\u5C0F\u661F\u626B\u63CF\u77FF\u85CF</span></div><div><kbd>M</kbd><span>\u661F\u7403\u5730\u56FE / \u5BFC\u822A</span></div><div><kbd>F</kbd><span>\u624B\u7535\u7B52</span></div><div><kbd>Tab</kbd><span>\u6B96\u6C11\u5730\u6863\u6848</span></div>
  <div><kbd>P</kbd><span>\u62CD\u7167\u6A21\u5F0F</span></div><div><kbd>Esc</kbd><span>\u6682\u505C</span></div></div>
  <h3>\u751F\u5B58</h3><p>\u6C27\u6C14\u4F1A\u6301\u7EED\u6D88\u8017\u3002\u7740\u9646\u8231\u3001\u5236\u6C27\u7AD9\u548C\u5C45\u4F4F\u7A79\u9876\u9644\u8FD1\u4F1A\u81EA\u52A8\u8865\u6C27\u3002\u5EFA\u597D\u4F4F\u623F\u3001\u6C27\u6C14\u3001\u98DF\u7269\u3001\u6C34\u548C\u7740\u9646\u573A\uFF0C\u79FB\u6C11\u98DE\u8239\u5C31\u4F1A\u5230\u6765\u3002\u591C\u91CC\u8981\u63D0\u9632\u9508\u8680\u86DB\u3002</p>`,$x=n=>{let e=Xe("intro-pane");if(!e.classList.contains("hidden")&&e.dataset.k===n.slice(0,20)){e.classList.add("hidden");return}e.dataset.k=n.slice(0,20),e.innerHTML=n,e.classList.remove("hidden"),Y.play("tick")};Xe("btn-t-help").addEventListener("click",()=>$x(KS));Xe("btn-t-achv").addEventListener("click",()=>$x(b0()));st!=="mars"&&!pi&&(Xe("btn-new").textContent=`\u767B\u9646 ${Me.name}`);st!=="mars"&&!pi&&mn.visited?.length&&Xe("btn-setup").classList.remove("hidden");Xe("btn-setup").addEventListener("click",()=>{Y.init(),G0()});if(mn.autoResume&&pi){let n=dr();delete n.autoResume,El(n),setTimeout(()=>{Ga(!0),rn(`\u6B22\u8FCE\u56DE\u6765 \xB7 ${Me.name}`)},50)}Xe("btn-save").addEventListener("click",()=>Ws(!1));Xe("btn-archive").addEventListener("click",()=>g0(y0()));Xe("btn-achv").addEventListener("click",()=>g0(b0()));Xe("btn-restart").addEventListener("click",()=>{confirm("\u5C06\u5220\u9664\u6240\u6709\u661F\u7403\u7684\u8FDB\u5EA6\uFF0C\u4ECE\u706B\u661F\u91CD\u65B0\u5F00\u59CB\u3002\u786E\u5B9A\u5417\uFF1F")&&(tp(),u.started=!1,location.href=location.pathname+(u.debug?"?debug":""))});Xe("vol").addEventListener("input",n=>Y.setVolume(+n.target.value));Xe("quality").value=vo;u.baseFov=72;try{let n=+localStorage.getItem("starport-fov");n>=60&&n<=100&&(u.baseFov=n,tt.fov=n,tt.updateProjectionMatrix(),Xe("fov").value=n)}catch{}Xe("fov").addEventListener("input",n=>{u.baseFov=+n.target.value,tt.fov=+n.target.value,tt.updateProjectionMatrix();try{localStorage.setItem("starport-fov",n.target.value)}catch{}});Xe("quality").addEventListener("change",n=>{Gx(n.target.value,!0);try{localStorage.setItem("starport-quality",n.target.value)}catch{}});Xe("sens").addEventListener("input",n=>{xe.sens=+n.target.value});Xe("btn-respawn").addEventListener("click",()=>{u.driving&&I0(Je),Je.respawn(),Xe("death").classList.add("hidden"),u.requestLock()});Xe("btn-endcont").addEventListener("click",()=>{Xe("ending").classList.add("hidden"),u.endingShown=!1,u.requestLock()});u.events.on("chapter",n=>fo(n));Ua.unlocked=n=>cs(n).ok;Ua.relicLeft=()=>us().found<us().total;Ua.relicFound=()=>us().found;u.events.on("request",n=>{rn(`\u65B0\u59D4\u6258\uFF1A${n.text}`,"radio"),It(`${n.giver} \xB7 \u59D4\u6258`,n.line)});u.events.on("requestDone",n=>{rn(`\u59D4\u6258\u5B8C\u6210\uFF1A${n.text}`,"check","good"),It(n.giver,["\u8C22\u8C22\u4F60\uFF01\u8FD9\u5E2E\u4E86\u5927\u5FD9\u3002","\u592A\u597D\u4E86\uFF0C\u5927\u5BB6\u90FD\u4F1A\u8BB0\u5F97\u7684\u3002","\u8F9B\u82E6\u4E86\uFF01\u8FD9\u662F\u4E00\u70B9\u5FC3\u610F\u3002"][Math.floor(Math.random()*3)])});u.events.on("researched",n=>{(n==="swarm"||n==="alloy")&&ls()});u.events.on("crafted",n=>{if(n!=="rover")return;let e=u.buildings.find(i=>i.type==="fabricator"),t=e||Je.pos;for(let i=0;i<12;i++){let s=i*.9,r=(e?e.def.r:0)+5+i,o=t.x+Math.cos(s)*r,a=t.z+Math.sin(s)*r;if(!u.colliders.overlaps(o,a,2.6)){gu(o,a,-s);break}}It("\u65B9\u821F \xB7 AI","\u6F2B\u6E38\u8F66\u5DF2\u51FA\u5382\u3002\u8F66\u8231\u52A0\u538B\uFF0C\u53EF\u4EE5\u5728\u8F66\u91CC\u8865\u6C27\u3002\u5C0F\u5FC3\u522B\u5F00\u4E0B\u60AC\u5D16\u3002")});u.events.on("cityLevel",n=>{fo({k:`COLONY LEVEL ${["I","II","III","IV","V","VI"][u.cityLevel]}`,title:n.name,sub:`\u57CE\u5E02\u5347\u7EA7 \xB7 \u9886\u5730\u6269\u5C55\u81F3 ${n.r} \u7C73`});let e={1:["\u65B9\u821F \xB7 AI","\u6B96\u6C11\u5730\u5347\u7EA7\u4E3A\u5B9A\u5C45\u70B9\u3002\u9886\u5730\u6269\u5927\u4E86\uFF0C\u66F4\u8FDC\u7684\u571F\u5730\u53EF\u4EE5\u5EFA\u9020\u4E86\u3002"],2:["\u65B9\u821F \xB7 AI","\u5C0F\u9547\u89C4\u6A21\u8FBE\u6210\u3002\u516C\u5BD3\u5854\u4E0E\u5782\u76F4\u519C\u573A\u7684\u8BBE\u8BA1\u56FE\u5DF2\u89E3\u9501\u3002"],3:["\u65B9\u821F \xB7 AI","\u8FD9\u91CC\u5DF2\u7ECF\u662F\u4E00\u5EA7\u57CE\u5E02\u4E86\u3002\u751F\u6001\u4E2D\u67A2\u7684\u8BBE\u8BA1\u56FE\u5DF2\u89E3\u9501\u3002"],4:["\u65B9\u821F \xB7 AI","\u5927\u90FD\u4F1A\u3002\u591C\u91CC\uFF0C\u4ECE\u8F68\u9053\u4E0A\u80FD\u770B\u89C1\u4F60\u4EEC\u7684\u706F\u5149\u3002"],5:["\u65B9\u821F \xB7 AI","\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C\u661F\u6E2F\u300D\u2014\u2014\u4EBA\u7C7B\u53EF\u4EE5\u4ECE\u8FD9\u91CC\u98DE\u5411\u4E0B\u4E00\u9897\u661F\u7403\u4E86\u3002"]}[u.cityLevel];e&&It(e[0],e[1]),Ws(!0)});u.events.on("openBuild",()=>fs("build"));u.events.on("death",n=>{Y.laser(!1),setTimeout(()=>{if(u.endingShown){Je.respawn();return}Xe("death-why").textContent=n,Xe("death").classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock()},1500)});u.events.on("tide",n=>{Y.play("night"),fo({k:"CRYSTAL TIDE",title:"\u6676\u6F6E\u4E4B\u591C",sub:`\u96F7\u8FBE\u63A2\u6D4B\u5230\u7EA6 ${n} \u4E2A\u4FE1\u53F7 \xB7 \u5B88\u4F4F\u6B96\u6C11\u5730`}),It("\u65B9\u821F \xB7 AI","\u8B66\u544A\uFF1A\u6676\u6F6E\u6B63\u5728\u903C\u8FD1\u3002\u6570\u91CF\u662F\u5E73\u65F6\u7684\u4E24\u500D\u2026\u2026\u5730\u9707\u4EEA\u8FD8\u8BB0\u5F55\u5230\u4E00\u4E2A\u5DE8\u5927\u7684\u4FE1\u53F7\uFF0C\u5B83\u6B63\u5728\u5411\u5730\u8868\u79FB\u52A8\u3002")});u.events.on("bossSpawn",()=>{rn("\u6676\u6BCD\u7834\u571F\u800C\u51FA","boss","warn"),It("\u65B9\u821F \xB7 AI","\u662F\u6676\u6BCD\uFF01\u4F53\u957F\u8D85\u8FC7\u5341\u7C73\u3002\u5B83\u7684\u51B2\u51FB\u6CE2\u80FD\u9707\u788E\u5EFA\u7B51\u2014\u2014\u7528\u6B65\u67AA\u548C\u70AE\u5854\u96C6\u4E2D\u706B\u529B\uFF01")});u.events.on("bossDown",()=>{rn("\u6676\u6BCD\u9668\u843D","boss","good"),It("\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u2026\u2026\u4F60\u4EEC\u505A\u5230\u4E86\u3002\u6574\u4E2A\u6307\u6325\u4E2D\u5FC3\u90FD\u5728\u6B22\u547C\u3002\u5B83\u7684\u6838\u5FC3\u91CC\u6709\u5927\u91CF\u7684\u949B\uFF0C\u62FF\u53BB\u5EFA\u8BBE\u5427\u3002")});var Ux=!0;u.events.on("nightfall",n=>{Y.play("night"),rn(`\u591C\u5E55\u964D\u4E34 \xB7 \u7EA6 ${n} \u4E2A\u79FB\u52A8\u4FE1\u53F7\u63A5\u8FD1`,"moon","warn"),Ux&&(Ux=!1,It("\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5B83\u4EEC\u6765\u4E86\u3002\u9508\u8680\u86DB\u4F1A\u653B\u51FB\u5EFA\u7B51\u548C\u4EBA\u3002\u7528\u6FC0\u5149\u6216\u6B65\u67AA\u51FB\u9000\u5B83\u4EEC\u2014\u2014\u5B83\u4EEC\u7684\u6676\u4F53\u6B8B\u9AB8\u91CC\u542B\u6709\u949B\u3002"))});u.events.on("broken",n=>rn(`${n.def.name} \u53D7\u635F\u505C\u673A\uFF0C\u767D\u5929\u4F1A\u81EA\u52A8\u4FEE\u590D`,"warn","warn"));var Nx=!0;u.events.on("shuttleIncoming",n=>rn(`\u79FB\u6C11\u98DE\u8239\u6B63\u5728\u964D\u843D \xB7 ${n} \u4EBA`,"ship"));u.events.on("colonistsArrived",n=>{n.length&&(rn(`\u6B22\u8FCE\u56DE\u5BB6\uFF1A${n.map(e=>e.name).join("\u3001")}`),Nx&&u.stats.arrived<=4&&(Nx=!1,It(n[0].name,"\u4F60\u597D\u2026\u2026\u8FD9\u5C31\u662F\u706B\u661F\uFF1F\u6BD4\u7167\u7247\u4E0A\u8FD8\u8981\u7EA2\u3002\u8C22\u8C22\u4F60\uFF0C\u4E3A\u6211\u4EEC\u70B9\u4EAE\u4E86\u8FD9\u91CC\u7684\u706F\u3002")))});var JS={habitat:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5C45\u4F4F\u7A79\u9876\u52A0\u538B\u5B8C\u6210\u3002\u5BA4\u5185\u6E29\u5EA6 21 \u6444\u6C0F\u5EA6\uFF0C\u6E7F\u5EA6 45%\u3002\u8FD9\u662F\u706B\u661F\u4E0A\u7B2C\u4E00\u4E2A\u53EF\u4EE5\u8131\u4E0B\u5934\u76D4\u7684\u5730\u65B9\u3002"],greenhouse:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u6E29\u5BA4\u542F\u52A8\u3002\u7B2C\u4E00\u6279\u79CD\u5B50\u5DF2\u7ECF\u64AD\u4E0B\uFF1A\u571F\u8C46\u3001\u5C0F\u9EA6\u3001\u756A\u8304\u2026\u2026\u548C\u4E00\u682A\u5411\u65E5\u8475\u3002"],beacon:["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u6536\u5230\u7740\u9646\u573A\u7684\u4FE1\u6807\u4FE1\u53F7\u4E86\uFF01\u53EA\u8981\u6B96\u6C11\u5730\u80FD\u517B\u6D3B\u4ED6\u4EEC\uFF0C\u79FB\u6C11\u98DE\u8239\u5C31\u4F1A\u51FA\u53D1\u3002"],reactor:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u805A\u53D8\u53CD\u5E94\u5806\u70B9\u706B\u6210\u529F\u3002\u8F93\u51FA\u7A33\u5B9A\u3002"],terraformer:["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5927\u6C14\u6539\u9020\u5854\u2026\u2026\u542F\u52A8\u4E86\u3002\u6211\u4EEC\u89C1\u8BC1\u7684\uFF0C\u662F\u4E00\u9897\u661F\u7403\u7684\u82CF\u9192\u3002"],apartment:["\u65B9\u821F \xB7 AI","\u7B2C\u4E00\u5EA7\u516C\u5BD3\u5854\u843D\u6210\u3002\u57CE\u5E02\u5F00\u59CB\u5411\u5929\u7A7A\u751F\u957F\u3002"],launch:["\u65B9\u821F \xB7 AI","\u661F\u9645\u53D1\u5C04\u53F0\u5B8C\u5DE5\u3002\u6B96\u6C11\u8230\u5DF2\u52A0\u6CE8\u5B8C\u6BD5\uFF0C\u968F\u65F6\u53EF\u4EE5\u51FA\u53D1\u3002"],monument:["\u65B9\u821F \xB7 AI","\u7EAA\u5FF5\u7891\u4E0A\u523B\u7740\u4E00\u884C\u5B57\uFF1A\u300C\u81F4\u7B2C\u4E00\u4E2A\u51FA\u53D1\u7684\u4EBA\u300D\u3002"],turret:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u9632\u5FA1\u70AE\u5854\u4E0A\u7EBF\u3002\u5B83\u4EEC\u9700\u8981\u7535\u529B\u624D\u80FD\u8FD0\u8F6C\u3002"],fabricator:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5236\u9020\u5DE5\u574A\u5C31\u7EEA\u3002\u9760\u8FD1\u540E\u6309 E \u6253\u5F00\u3002"]};u.events.on("built",n=>{let e=JS[n.type];e&&u.stats.built[n.type]===1&&It(e[0],e[1]),n.type==="monument"&&u.stats.built.monument===1&&setTimeout(iT,6e3),Ws(!0)});u.events.on("ending",()=>{It("Nadia Volkova","\u5927\u5BB6\u5FEB\u51FA\u6765\u770B\uFF01\u5929\u7A7A\u2026\u2026\u5929\u7A7A\u53D8\u84DD\u4E86\uFF01"),It("\u8D75\u5C0F\u96E8","\u4E0B\u96E8\u4E86\uFF01\u8FD9\u662F\u706B\u661F\u4E0A\u7684\u7B2C\u4E00\u573A\u96E8\uFF01"),setTimeout(jS,14e3)});function jS(){u.ended=!0,u.endingShown=!0,Je.dead&&Je.respawn(),Xe("death").classList.add("hidden"),document.pointerLockElement&&document.exitPointerLock();let n=u.stats,e=["\u4ECE\u7740\u9646\u8231\u7684\u8231\u95E8\u7B2C\u4E00\u6B21\u6253\u5F00\uFF0C\u5230\u4ECA\u5929\uFF0C\u8FC7\u53BB\u4E86 "+u.time.day+" \u4E2A\u706B\u661F\u65E5\u3002","\u66FE\u7ECF\u53EA\u6709\u98CE\u58F0\u7684\u5E73\u539F\u4E0A\uFF0C\u5982\u4ECA\u4F4F\u7740 "+u.colony.pop+" \u4E2A\u4EBA\u3002","\u4ED6\u4EEC\u6765\u81EA\u5730\u7403\u4E0A\u4E0D\u540C\u7684\u56FD\u5BB6\uFF0C\u8BF4\u7740\u4E0D\u540C\u7684\u8BED\u8A00\u3002","\u4F46\u4ECE\u4ECA\u5929\u8D77\uFF0C\u4ED6\u4EEC\u6709\u4E86\u540C\u4E00\u4E2A\u5730\u5740\u3002",'<div class="big">\u706B\u661F \xB7 \u65B0\u5BB6\u56ED</div>',"\u5B69\u5B50\u4EEC\u7B2C\u4E00\u6B21\u5728\u706B\u661F\u4E0A\uFF0C\u770B\u89C1\u4E86\u84DD\u8272\u7684\u5929\u7A7A\u3002",`<span class="stats">\u91C7\u96C6\u8D44\u6E90 ${n.mined.iron+n.mined.silicon+n.mined.ice+n.mined.titanium} \xB7 \u5EFA\u9020\u8BBE\u65BD ${u.buildings.length} \xB7 \u51FB\u9000\u9508\u8680\u86DB ${n.kills} \xB7 \u8FCE\u63A5\u79FB\u6C11 ${n.arrived}</span>`];Xe("ending-text").innerHTML=e.map((t,i)=>`<p style="animation-delay:${i*1.6}s">${t}</p>`).join(""),Xe("ending").classList.remove("hidden"),Y.play("chapter"),Ws(!0)}window.addEventListener("keydown",n=>{if(u.started){if(ix(n),n.code==="Tab"&&!u.endingShown&&!Je.dead){u.menuOpen==="archive"?Bn(!0):u.menuOpen||fs("archive");return}if(n.code==="KeyM"&&!u.endingShown&&!Je.dead){u.menuOpen==="mapscr"?Bn(!0):u.menuOpen||fs("mapscr");return}if(u.menuOpen==="mapscr"&&n.code==="Escape"){Bn(!0);return}if(n.code==="KeyT"&&!u.endingShown&&!Je.dead){u.menuOpen==="research"?Bn(!0):u.menuOpen||fs("research");return}if(u.menuOpen==="research"&&n.code==="Escape"){Bn(!0);return}if(u.menuOpen==="trade"&&(n.code==="Escape"||n.code==="KeyE")){Bn(!0);return}if(n.code==="KeyP"&&!u.menuOpen){u.photo=!u.photo,u.usedPhoto=!0,document.body.classList.toggle("photo",u.photo),zx(u.photo?B0:0),Y.play("tick");return}if(u.photo&&!u.menuOpen){let e=["Digit1","Digit2","Digit3","Digit4"].indexOf(n.code);if(e>=0){B0=e,zx(e),Y.play("tick"),n.stopImmediatePropagation();return}if(n.code==="Enter"){u.snap=!0;return}}if(u.menuOpen==="archive"&&n.code==="Escape"){Bn(!0);return}u.menuOpen==="build"&&(n.code==="Escape"||n.code==="KeyB")?(Bn(!0),u.locked||void 0):u.menuOpen==="craft"&&(n.code==="Escape"||n.code==="KeyE")?Bn(!0):u.menuOpen==="starmap"&&n.code==="Escape"&&Bn(!0)}});var za=0,z0=30,O0=0,Hx=0,Ba={};try{Ba=JSON.parse(localStorage.getItem("starport-hints"))||{}}catch{}var Oa=null,F0=0,ic=0,QS=[{id:"move",text:"<kbd>W A S D</kbd>\u79FB\u52A8\u3000<kbd>Shift</kbd>\u51B2\u523A<br><kbd>\u9F20\u6807</kbd>\u73AF\u89C6\u3000<kbd>\u7A7A\u683C</kbd>\u8DF3\u8DC3",when:()=>ic>.5&&ic<40},{id:"mine",text:"\u5BF9\u51C6\u53D1\u5149\u7684\u77FF\u77F3\uFF0C<kbd>\u6309\u4F4F\u5DE6\u952E</kbd> \u7528\u91C7\u77FF\u6FC0\u5149\u91C7\u96C6",when:()=>ic>6&&u.stats.mined.iron+u.stats.mined.silicon===0},{id:"build",text:"\u8D44\u6E90\u591F\u4E86\uFF01\u6309 <kbd>B</kbd> \u6253\u5F00\u5EFA\u9020\u83DC\u5355",when:()=>u.buildings.length===0&&u.res.iron>=8&&u.res.silicon>=6},{id:"o2",text:"\u6C27\u6C14\u5728\u6301\u7EED\u6D88\u8017\u3002\u56DE\u5230\u7740\u9646\u8231\u6216\u5236\u6C27\u7AD9\u9644\u8FD1\u4F1A\u81EA\u52A8\u8865\u6C27",when:()=>!Je.inLife&&Je.o2<Je.maxO2*.5},{id:"night",text:"\u5929\u9ED1\u4E86\uFF0C\u6309 <kbd>F</kbd> \u6253\u5F00\u624B\u7535\u7B52",when:()=>u.time.night>.6&&!Je.flashlight},{id:"craft",text:"\u9760\u8FD1\u5236\u9020\u5DE5\u574A\u6309 <kbd>E</kbd> \u5236\u9020\u6B66\u5668\u548C\u88C5\u5907\u2014\u2014\u8BD5\u8BD5\u52A0\u538B\u6F2B\u6E38\u8F66",when:()=>u.buildings.some(n=>n.type==="fabricator")&&!u.upgrades.rifle},{id:"drive",text:"\u6F2B\u6E38\u8F66\u5C31\u5728\u9644\u8FD1\uFF0C\u8D70\u8FC7\u53BB\u6309 <kbd>E</kbd> \u4E0A\u8F66",when:()=>vu()&&!u.driving&&!Ba.drove},{id:"research",text:"\u7814\u7A76\u6240\u5DF2\u5EFA\u6210\uFF0C\u6309 <kbd>T</kbd> \u7528\u79D1\u7814\u70B9\u6570\u89E3\u9501\u79D1\u6280",when:()=>u.buildings.some(n=>n.type==="lab")&&(u.rp||0)>=20},{id:"request",text:"\u5C45\u6C11\u63D0\u51FA\u4E86\u59D4\u6258\uFF08\u53F3\u4FA7\u4EFB\u52A1\u680F\uFF09\uFF0C\u5B8C\u6210\u540E\u6709\u5956\u52B1",when:()=>(u.requests||[]).length>0},{id:"map",text:"\u6309 <kbd>M</kbd> \u6253\u5F00\u661F\u7403\u5730\u56FE\uFF0C\u70B9\u51FB\u53EF\u8BBE\u7F6E\u5BFC\u822A\u70B9",when:()=>ic>90},{id:"talk",text:"\u5BF9\u51C6\u5C45\u6C11\u6309 <kbd>E</kbd>\uFF0C\u542C\u542C\u4ED6\u4EEC\u7684\u6545\u4E8B",when:()=>u.colonists.some(n=>n.pos.distanceTo(Je.pos)<10)},{id:"level",text:"\u4EBA\u53E3\u548C\u8BBE\u65BD\u8D8A\u591A\uFF0C\u57CE\u5E02\u7B49\u7EA7\u8D8A\u9AD8\uFF0C\u9886\u5730\u4E5F\u4F1A\u6269\u5927\uFF08\u770B\u5DE6\u4E0A\u89D2\uFF09",when:()=>u.colony.pop>=2}];function eT(n){if(ic+=n,u.driving&&(Ba.drove=!0),Oa)if(F0-=n,F0<=0||!Oa.when()){Ba[Oa.id]=!0,Oa=null;try{localStorage.setItem("starport-hints",JSON.stringify(Ba))}catch{}}else return Oa.text;for(let e of QS)if(!Ba[e.id]&&e.when())return Oa=e,F0=12,e.text;return""}function Xx(){let n=dr(),e=new Map((n.visited||[]).map(i=>[i.id,i])),t=[];Me.next&&t.push({id:Me.next,fresh:!e.has(Me.next)&&!Tu(Me.next)});for(let i of Object.keys(Nn))i!==st&&i!==Me.next&&(e.has(i)||Tu(i))&&t.push({id:i,fresh:!1,info:e.get(i)});return t}function Tu(n){try{return!!localStorage.getItem(n==="mars"?"starport-newhome-v1":"starport-planet-"+n)}catch{return!1}}function tT(n){fs("starmap"),Xe("starmap-list").innerHTML=Xx().map(e=>{let t=Nn[e.id],i={mars:"MARS",europa:"EUROPA",kepler:"KEPLER-442b"}[e.id];return`<div class="dest" data-id="${e.id}"><div class="orb ${e.id}"></div><span class="badge ${e.fresh?"new":"home"}">${e.fresh?"UNCHARTED":"COLONY"}</span>
      <div class="dn">${t.name}</div><div class="de">${i}</div>
      <div class="dst">${t.title} \xB7 ${t.place}${e.info?`<br>\u5C45\u6C11 ${e.info.pop} \u4EBA \xB7 \u7B2C ${e.info.day} \u65E5\u79BB\u5F00`:""}${e.fresh?"<br>\u88C5\u5907\u540C\u6B65 \xB7 \u643A\u5E26\u90E8\u5206\u7269\u8D44":"<br>\u56DE\u5230\u4F60\u5EFA\u7ACB\u7684\u57CE\u5E02"}</div></div>`}).join(""),Xe("starmap-list").querySelectorAll(".dest").forEach(e=>e.addEventListener("click",()=>{Bn(!0),qx(n,e.dataset.id)}))}function qx(n,e){let t=new w(n.x,n.y,n.z),i=Math.atan2(An.z,An.x),s=null,r=null;for(let c=0;c<24&&!r;c++){let h=i+(c%2?1:-1)*Math.ceil(c/2)*.26,d=74,f=new w(Math.cos(h),0,Math.sin(h)),p=t.clone().addScaledVector(f,d);p.y=ve(p.x,p.z)+2.6;let g=!u.colliders.overlaps(p.x,p.z,6);for(let x=.05;g&&x<.85;x+=.05){let v=p.x+(t.x-p.x)*x,m=p.z+(t.z-p.z)*x;(u.colliders.overlaps(v,m,2.5)||ve(v,m)>p.y+(n.y+10-p.y)*x)&&(g=!1)}g&&(s=f,r=p)}r||(s=new w(Math.cos(i),0,Math.sin(i)),r=t.clone().addScaledVector(s,74),r.y=ve(r.x,r.z)+2.6);let o=new hi(16754784,0,260,1.3);Ii.add(o);let a=document.createElement("div");a.id="launch-cap",a.innerHTML='<div class="lc-k">LAUNCH SEQUENCE \xB7 '+Nn[e].name+'</div><div class="lc-n"></div>',document.body.appendChild(a),u.launching={b:n,t:0,dest:e,pad:t,dir:s,cam:r,light:o,cap:a,n:-1,look:t.clone().setY(n.y+14),fov:tt.fov,v:0},u.launched=!0,u.cine=!0,document.body.classList.add("cinema"),document.pointerLockElement&&document.exitPointerLock(),Y.play("rumble"),It("\u65B9\u821F \xB7 AI",`\u6B96\u6C11\u8230\u8FDB\u5165\u53D1\u5C04\u7A0B\u5E8F\u3002\u76EE\u6807\uFF1A${Nn[e].name}\u3002\u5168\u4F53\u4E58\u5458\uFF0C\u795D\u4F60\u4EEC\u597D\u8FD0\u3002`);let l=c=>{(c.type==="mousedown"||c.code==="Space"||c.code==="Escape")&&(u.launching.t=Math.max(u.launching.t,11))};u.launching.skip=l,setTimeout(()=>{window.addEventListener("keydown",l),window.addEventListener("mousedown",l)},300)}var kx=new w;function Yx(n){let e=u.launching;if(!e)return;e.t+=n;let t=e.b.anim.ship,i=e.b.anim.flame,s=3.6,r=5.2,o=e.t<.3?-1:e.t<1.4?3:e.t<2.5?2:e.t<s?1:e.t<r+1.5?0:-2;if(o!==e.n){e.n=o;let g=e.cap.querySelector(".lc-n");o===-2?e.cap.classList.add("out"):o>=0&&(g.textContent=o>0?"T \u2013 "+o:"\u70B9\u706B",g.classList.remove("pop"),g.offsetWidth,g.classList.add("pop"),o>0&&Y.play("click"))}t.getWorldPosition(kx);let a=kx.clone();if(e.t<s)Math.random()<n*14&&fe.dustPuff(new w(e.pad.x+(Math.random()-.5)*6,e.pad.y+2+Math.random()*3,e.pad.z+(Math.random()-.5)*6),1,1.2,[.9,.9,.92]);else{e.ign||(e.ign=!0,i.visible=!0,kh(a.clone().setY(e.pad.y+1.5),16765088,18,1.4),xp(1.2),Y.play("kill"),Y.engine(1));let g=Math.min(1,(e.t-s)/1.2);i.scale.set(.6+g*.5,.4+g*1.1+Math.random()*.15,.6+g*.5);let x=a.y-e.pad.y,v=Math.max(0,1-x/70);for(let m=0;m<Math.round(4*v);m++)S1(e.pad.clone().setY(e.pad.y+.5),1.5);for(let m=0;m<4;m++)fe.flame(a);e.light.position.copy(a).y-=4,e.light.intensity=(2500+Math.random()*900)*g,u.shake=Math.max(u.shake||0,.35*v+.08),e.t>r&&(e.v+=n*(1.2+(e.t-r)*3.2),t.position.y+=e.v*n)}let l=Math.min(1,e.t/6),c=e.cam.clone().addScaledVector(e.dir,-l*10);tt.position.copy(c);let h=a.clone();h.y+=14,e.look.lerp(h,1-Math.pow(.02,n)),tt.lookAt(e.look);let d=tt.position.distanceTo(h),f=Nt.radToDeg(2*Math.atan(48/d));tt.fov=Nt.clamp(f,9,e.fov),tt.updateProjectionMatrix();let p=u.shake||0;p>.01&&(tt.position.x+=(Math.random()-.5)*p*.6,tt.position.y+=(Math.random()-.5)*p*.5),u.shake=p*Math.pow(.1,n),e.t>11&&!e.faded&&(e.faded=!0,Xe("fade").classList.add("white","on"),Y.engine(0)),e.t>12.6&&!e.done&&(e.done=!0,window.removeEventListener("keydown",e.skip),window.removeEventListener("mousedown",e.skip),nT(e.dest))}function nT(n){let e=dr();e.visited=(e.visited||[]).filter(s=>s.id!==st).concat([{id:st,pop:u.colony.pop,day:u.time.day}]),e.planet=n,e.mode=u.mode||"story",e.diff=u.diffKey||"normal",e.autoResume=Tu(n);let t={};for(let s in u.res)t[s]=Math.min(Math.floor(u.res[s]*.4),80);e.carry={upgrades:u.upgrades,res:t},Ws(!0),El(e);let i=Nn[n];u.endingShown=!0,document.pointerLockElement&&document.exitPointerLock(),Y.play("chapter"),setTimeout(()=>{u.warping=!0},1300),Ax(["WORMHOLE TRANSIT \xB7 \u866B\u6D1E\u7A7F\u8D8A",`<b>${i.name}</b>`,`${i.title}${e.autoResume?" \xB7 \u5DF2\u5F00\u62D3":""}`,`<span class="stats">${Me.name}\u7684 ${u.colony.pop} \u4F4D\u5C45\u6C11\uFF0C\u4F1A\u66FF\u4F60\u5B88\u7740\u90A3\u91CC\u7684\u706F\u706B\u3002</span>`],()=>{location.href=location.pathname+(u.debug?"?debug":"")},7.5),setTimeout(()=>Xe("fade").classList.remove("on","white"),400)}function iT(){u.endingShown=!0,document.pointerLockElement&&document.exitPointerLock();let e=(dr().visited||[]).concat([{id:st,pop:u.colony.pop}]),t=e.reduce((s,r)=>s+r.pop,0),i=["\u5F88\u4E45\u5F88\u4E45\u4EE5\u524D\uFF0C\u4E00\u4E2A\u4EBA\u72EC\u81EA\u7AD9\u5728\u706B\u661F\u7684\u7EA2\u8272\u5C18\u571F\u91CC\u3002","\u6C27\u6C14\u53EA\u591F\u6491\u4E09\u5206\u949F\uFF0C\u8EAB\u8FB9\u53EA\u6709\u4E00\u5EA7\u7740\u9646\u8231\u3002",e.map(s=>`${Nn[s.id].name} \xB7 ${s.pop} \u4EBA`).join("\u3000"),`\u4ECA\u5929\uFF0C${t} \u4E2A\u4EBA\uFF0C\u751F\u6D3B\u5728\u4E09\u9897\u661F\u7403\u4E0A\u3002`,'<div class="big">\u661F\u9645\u6587\u660E</div>',"\u8FD9\u4E00\u5207\uFF0C\u90FD\u4ECE\u4F60\u8FC8\u51FA\u7684\u7B2C\u4E00\u6B65\u5F00\u59CB\u3002",'<span class="stats">\u611F\u8C22\u6E38\u73A9\u300A\u661F\u6E2F\u300B\u3002\u4F60\u53EF\u4EE5\u7EE7\u7EED\u5EFA\u8BBE\uFF0C\u57CE\u5E02\u4F1A\u4E00\u76F4\u5728\u8FD9\u91CC\u7B49\u4F60\u3002</span>'];Xe("ending-text").innerHTML=i.map((s,r)=>`<p style="animation-delay:${r*1.8}s">${s}</p>`).join(""),Xe("ending").classList.remove("hidden"),Y.play("chapter"),Ws(!0)}function sT(n){let e={prompt:"",crossClass:""};if(Je.dead||u.menuOpen)return e;if(u.driving)return e.prompt=`<span class="big">${_x()}</span> KM/H<br><kbd>W S</kbd> \u6CB9\u95E8 \xB7 <kbd>A D</kbd> \u8F6C\u5411 \xB7 <kbd>Shift</kbd> \u52A0\u901F \xB7 <kbd>\u7A7A\u683C</kbd> \u5239\u8F66 \xB7 <kbd>E</kbd> \u4E0B\u8F66`,e;let t=Bv(Je.pos);if(t)return e.prompt="<b>\u5730\u7403\u8865\u7ED9\u8231</b><br><kbd>E</kbd>\u6253\u5F00",xe.hit("KeyE")&&Gv(t),e;let i=Nv(Je.pos);if(i)return e.prompt=`<b>${i.name}</b><br><kbd>E</kbd>\u8C03\u67E5`,xe.hit("KeyE")&&Hv(i),e;let s=vu();if(s&&Math.hypot(s.x-Je.pos.x,s.z-Je.pos.z)<4.5)return e.prompt="<b>\u52A0\u538B\u6F2B\u6E38\u8F66</b><br><kbd>E</kbd>\u4E0A\u8F66",xe.hit("KeyE")&&(yx(),xe.pressed.delete("KeyE")),e;let r=tt.position,o=Je.fwd,a=Av(r,o),l=u.buildings.find(f=>f.type==="fabricator"&&Math.hypot(f.x-Je.pos.x,f.z-Je.pos.z)<f.def.r+6);za=Math.max(0,za-n),Hx=Math.max(0,Hx-n);let c=u.buildings.find(f=>f.type==="trade"&&Math.hypot(f.x-Je.pos.x,f.z-Je.pos.z)<f.def.r+5),h=u.buildings.find(f=>f.type==="launch"&&Math.hypot(f.x-Je.pos.x,f.z-Je.pos.z)<f.def.r+8);if(a){if(e.crossClass="talk",e.prompt=`<b>${a.name}</b> \xB7 ${a.job}<br><kbd>E</kbd> \u4EA4\u8C08`,xe.hit("KeyE")){It(a.name,a.line);let f=u.stats.talked=u.stats.talked||[];f.includes(a.idx)||f.push(a.idx)}}else h&&!u.launching?h.powered?Xx().length?(e.prompt="<b>\u6B96\u6C11\u8230\u5DF2\u5C31\u7EEA</b><br><kbd>E</kbd>\u6253\u5F00\u661F\u56FE",xe.hit("KeyE")&&tT(h)):e.prompt="\u661F\u9645\u53D1\u5C04\u53F0 \xB7 \u6682\u65E0\u53EF\u7528\u822A\u7EBF":e.prompt='\u661F\u9645\u53D1\u5C04\u53F0 \xB7 <span class="badc">\u7535\u529B\u4E0D\u8DB3</span>':c?(e.prompt=`<b>\u661F\u9645\u8D38\u6613\u7AD9</b>${c.powered?"":' \xB7 <span class="badc">\u505C\u7535</span>'}<br><kbd>E</kbd>\u4EA4\u6613`,xe.hit("KeyE")&&(c.powered?fs("trade"):rn("\u8D38\u6613\u7AD9\u6CA1\u6709\u7535\u529B","warn","warn"))):l&&(e.prompt=`<kbd>E</kbd> \u6253\u5F00\u5236\u9020\u5DE5\u574A${l.powered?"":"\uFF08\u505C\u7535\u4E2D\uFF09"}`,xe.hit("KeyE")&&(l.powered?fs("craft"):rn("\u5236\u9020\u5DE5\u574A\u6CA1\u6709\u7535\u529B")));let d=u.lookBuilding;if(!e.prompt&&d&&hn.id!=="build"){let f=d.def,p=d.level||1,g=Bh(d)?`<br><kbd>U</kbd>\u5347\u7EA7\u5230 Lv.${p+1}\u3000${ra(Lp(d))}`:"";e.prompt=`<b>${f.name}</b>\u3000Lv.${p}${p>=Ip?"\uFF08\u6EE1\u7EA7\uFF09":""} \xB7 \u8010\u4E45 ${Math.ceil(d.hp)}/${Math.round(d.maxHp)}${f.power<0?d.powered?' \xB7 <span class="okc">\u4F9B\u7535\u4E2D</span>':' \xB7 <span class="badc">\u505C\u7535</span>':""}${g}<br><kbd>X</kbd>${za>0?'<span class="badc">\u518D\u6309\u4E00\u6B21\u786E\u8BA4\u62C6\u9664\uFF08\u8FD4\u8FD8 50%\uFF09</span>':"\u62C6\u9664"}`,d.broken&&(e.prompt=e.prompt.replace("</b>",'</b> <span class="badc">\u53D7\u635F\u505C\u673A \xB7 \u767D\u5929\u81EA\u52A8\u4FEE\u590D</span>')),xe.hit("KeyU")&&Bh(d)&&($1(d)?rn(`${f.name} \u5347\u7EA7\u5230 Lv.${d.level}`,"star","good"):(Y.play("deny"),rn("\u5347\u7EA7\u6750\u6599\u4E0D\u8DB3","warn","warn"))),xe.hit("KeyX")&&(za>0?(Y1(d,!0),za=0,rn(`\u5DF2\u62C6\u9664 ${f.name}`)):za=2)}return hn.id==="laser"?(u.aimNode&&!e.crossClass&&(e.crossClass="node"),lo(r,o,9)&&(e.crossClass="enemy")):hn.id==="rifle"&&lo(r,o,120)&&(e.crossClass="enemy"),e}var bu=[["\u539F\u8272","none"],["\u80F6\u7247","sepia(.35) contrast(1.12) saturate(1.15) brightness(1.03)"],["\u9ED1\u767D","grayscale(1) contrast(1.25)"],["\u51B7\u8C03","hue-rotate(-18deg) saturate(.85) contrast(1.08) brightness(1.05)"]],B0=0;function zx(n){Gs.style.filter=bu[n][1]==="none"?"":bu[n][1],Xe("photo-bar").innerHTML=bu.map((e,t)=>`<span class="${t===n?"on":""}"><kbd>${t+1}</kbd>${e[0]}</span>`).join("")+'<span class="sep"></span><span><kbd>Enter</kbd>\u4FDD\u5B58\u7167\u7247</span><span><kbd>P</kbd>\u9000\u51FA</span>'}function rT(){let n=Gs.width,e=Gs.height,t=Math.round(e*.1),i=document.createElement("canvas");i.width=n,i.height=e;let s=i.getContext("2d");s.filter=bu[B0][1],s.drawImage(Gs,0,0),s.filter="none",s.fillStyle="#000",s.fillRect(0,0,n,t),s.fillRect(0,e-t,n,t);let r=Math.round(e*.022);s.font=`300 ${r*1.6}px "Noto Sans SC", sans-serif`,s.fillStyle="#fff",s.textBaseline="middle",s.fillText("\u661F \u6E2F",r*2,e-t/2),s.font=`400 ${r}px "Noto Sans SC", sans-serif`,s.fillStyle="rgba(255,255,255,.7)",s.textAlign="right",s.fillText(`${Me.name} \xB7 ${Me.place} \xB7 \u7B2C ${u.time.day} \u65E5 \xB7 \u4EBA\u53E3 ${u.colony.pop}`,n-r*2,e-t/2);let o=document.createElement("a");o.download=`\u661F\u6E2F-${Me.name}-\u7B2C${u.time.day}\u65E5.png`,o.href=i.toDataURL("image/png"),document.body.appendChild(o),o.click(),o.remove(),Xe("shutter").classList.remove("on"),Xe("shutter").offsetWidth,Xe("shutter").classList.add("on"),Y.play("shutter"),u.stats.photos=(u.stats.photos||0)+1}var Vs=null,V0=9.5;function Ox(n){if(u.debug&&!/landing/.test(location.search)){n();return}u.cine=!0,document.body.classList.add("cinema");let e=Va.group,t=ve(_t.x,_t.z)+.1,i=new se(new Yt(1.7,10,18,1,!0),y.flame);i.rotation.x=Math.PI,i.position.y=-4.2,e.add(i);let s=_e(16752704,22,e,0,-.5,0),r=new hi(16752720,0,120,1.4);r.position.y=-2,e.add(r);let o=new w(_t.x+20,0,_t.z+25);o.y=ve(o.x,o.z)+3.2,u.time.t=.282,Vs={t:0,gy:t,flame:i,fglow:s,lamp:r,done:n,camAt:o,landed:!1,shake:0},e.position.y=t+460,Y.play("rumble"),Y.engine(1);let a=l=>{(l.type==="mousedown"||l.code==="Space"||l.code==="Escape")&&(Vs.t=Math.max(Vs.t,V0+6))};Vs.skip=a,window.addEventListener("keydown",a),window.addEventListener("mousedown",a)}var Fx=new dn,Bx=new dn,oT=new Sn,Vx=new mt;function Zx(n){let e=Vs;e.t+=n;let t=Va.group,i=Math.min(1,e.t/V0),s=1-Math.pow(1-i,2.6);t.position.y=e.gy+460*(1-s),t.rotation.z=Math.sin(e.t*1.1)*.05*(1-i);let r=i<1;e.flame.visible=e.fglow.visible=r,e.flame.scale.set(1,.5+(1-s)*.9+Math.random()*.15,1),e.lamp.intensity=r?400*(.6+Math.random()*.4):0;let o=t.position.y-e.gy;if(r){let c=new w(t.position.x,t.position.y-1,t.position.z);for(let h=0;h<4;h++)fe.flame(c,1.4);if(o<40)for(let h=0;h<3;h++){let d=Math.random()*Math.PI*2,f=2+Math.random()*(14-o*.25);fe.dustPuff(new w(_t.x+Math.cos(d)*f,e.gy+.3,_t.z+Math.sin(d)*f),1,2)}e.shake=Math.max(e.shake,Math.max(0,1-o/120)*.25)}else e.landed||(e.landed=!0,e.shake=1,fe.ring(new w(_t.x,e.gy,_t.z),4,160),fe.dustPuff(new w(_t.x,e.gy+1,_t.z),70,16),Y.play("land"),Y.play("rumble"),Y.engine(0));e.shake*=Math.pow(.15,n),ca(0,tt.position),eo(n,tt.position);let a=new w(t.position.x,t.position.y+3,t.position.z),l=e.t-V0-2.2;if(l<0)tt.position.copy(e.camAt),tt.position.x+=Math.sin(e.t*.15)*4,tt.lookAt(a);else{let c=Math.min(1,l/3.2),h=c*c*(3-2*c),d=new w(Je.pos.x,Je.pos.y+1.7,Je.pos.z);if(tt.position.lerpVectors(e.camAt,d,h),Vx.lookAt(e.camAt,a,tt.up),Fx.setFromRotationMatrix(Vx),Bx.setFromEuler(oT.set(Je.pitch,Je.yaw,0,"YXZ")),tt.quaternion.slerpQuaternions(Fx,Bx,h),c>=1){t.remove(e.flame,e.fglow,e.lamp),t.position.y=e.gy,t.rotation.z=0,window.removeEventListener("keydown",e.skip),window.removeEventListener("mousedown",e.skip),document.body.classList.remove("cinema"),u.cine=!1,Vs=null,Y.engine(0),e.done();return}}e.shake>.01&&(tt.position.x+=(Math.random()-.5)*e.shake*.5,tt.position.y+=(Math.random()-.5)*e.shake*.4)}var aT=new Qo,Eu=0;function Kx(){requestAnimationFrame(Kx);let n=Math.min(aT.getDelta(),.05);if(u.warping)return;if(Vs){Zx(n),ma(n),_u(),xe.endFrame();return}if(u.launching&&!u.endingShown){Yx(n),ca(n,tt.position),Up(n,{shoot:Gl}),k0(n),eo(n,tt.position),ma(n),_u(),xe.endFrame();return}if(!u.started){Eu+=n*.05;let t=30;tt.position.set(_t.x+Math.cos(Eu)*t,ve(_t.x,_t.z)+6,_t.z+Math.sin(Eu)*t),tt.lookAt(_t.x,ve(_t.x,_t.z)+4,_t.z),u.time.t=.27+Math.sin(Eu*.5)*.01,ca(0,tt.position),eo(n,tt.position),ma(n),_u();return}u.debug&&(u.locked=!0);let e=u.locked&&!u.menuOpen&&!u.endingShown&&!u.cine;Xe("clickhint").classList.toggle("hidden",!(u.started&&!u.locked&&!u.menuOpen&&!Je.dead&&!u.endingShown&&!u.cine)),e?Jx(n):(M0(0,{prompt:""}),ca(0,tt.position)),eo(e?n:0,tt.position),ma(e?n:0),xe.endFrame(),_u(),Sv(Vn),u.snap&&(u.snap=!1,rT())}function Jx(n){{u.driving&&xe.hit("KeyE")&&!u.menuOpen&&(I0(Je),xe.pressed.delete("KeyE")),u.driving||Je.update(n),Mx(n,Je,tt),ca(n,tt.position),u.time.dawn&&(u.time.dawn=!1,rn(`\u7B2C ${u.time.day} \u65E5 \xB7 \u9ECE\u660E`,"sun")),g1(n),u.driving?u.lookBuilding=null:wv(n,Je,tt),Up(n,{shoot:Gl}),k0(n),Rv(n),P1(n,hn.id==="build"&&!!Ct.type),dp.emissiveIntensity=.06+u.time.night*(.55+Math.sin(performance.now()*.0015)*.15),vv(n),Fv(n),mv(n),lv(n),Va.beacon.visible=Math.sin(performance.now()*.004)>0,rx(n),ux(n),kv(n),gx(n),F1(n,Ua),bx(n),Rx(n),c1(),!u.plazaSeen&&u.time.night>.6&&u.colonists.filter(t=>t.atPlaza&&!t.target).length>=4&&(u.plazaSeen=!0,It("\u82CF\u5FF5 \xB7 \u6559\u5E08","\u4ECA\u665A\u5927\u5BB6\u90FD\u6765\u4E86\u3002\u6211\u4EEC\u5C31\u8FD9\u6837\u7AD9\u7740\uFF0C\u770B\u7740\u90A3\u9897\u84DD\u8272\u7684\u661F\u7403\u8F6C\u554A\u8F6C\u2026\u2026\u5B69\u5B50\u95EE\u6211\uFF0C\u90A3\u662F\u54EA\u91CC\u3002\u6211\u8BF4\uFF0C\u90A3\u662F\u6211\u4EEC\u51FA\u53D1\u7684\u5730\u65B9\u3002"));let e=sT(n);e.tip=eT(n),M0(n,e),Y.update(u.storm,u.time.night),z0-=n,z0<=0&&(z0=45,Ws(!0)),u.terraform>0&&u.terraform<=1&&(O0-=n,O0<=0&&(O0=4,up(Wx(),u.terraform)))}}Xe("loading").style.transition="opacity .8s";Xe("loading").style.opacity=0;setTimeout(()=>Xe("loading").remove(),900);Kx();window.addEventListener("beforeunload",()=>Ws(!0));window.__G=u;window.__dbg={give(n=200){for(let e in sn)u.res[e]+=n},tp(n,e){Je.pos.set(n,ve(n,e),e)},time(n){u.time.t=n},build:(n,e,t)=>Vh(n,e,t,0),chapter:n=>Vl(n),look(n,e){Je.yaw=n,Je.pitch=e},begin:()=>Ga(!1),fest:()=>wx(),boom:(n,e,t,i)=>_r(new w(n,e,t),i),pod:()=>i0(),slope:(n,e)=>ve(n+3,e)-ve(n,e),landStep(n){for(let e=0;e<n&&Vs;e+=.05)Zx(.05);return!!Vs},launch(n="europa"){let e=u.buildings.find(t=>t.type==="launch");qx(e,n)},launchStep(n){for(let e=0;e<n&&u.launching&&!u.endingShown;e+=.05)Yx(.05),eo(.05,tt.position),ma(.05);return u.launching.t},step(n,e=.05){for(let t=0;t<n;t+=e)Jx(e),eo(e,tt.position),xe.endFrame()},input:xe,save:Ws,toast:rn,setGhost:so,openMenu:fs,closeMenus:Bn,tool:hn,placement:Ct,rover:vu};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
