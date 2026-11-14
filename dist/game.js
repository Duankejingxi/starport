(()=>{var Af="170";var qv=0,Y0=1,Yv=2;var rg=1,Cf=2,Es=3,nr=0,Ln=1,Tt=2,xn=0,gi=1,ze=2,Z0=3,K0=4,Pf=5,mi=100,Zv=101,Kv=102,Jv=103,jv=104,Qo=200,Qv=201,ey=202,ty=203,rd=204,od=205,lh=206,ny=207,ch=208,iy=209,sy=210,ry=211,oy=212,ay=213,ly=214,ad=0,ld=1,cd=2,Bo=3,hd=4,ud=5,dd=6,fd=7,og=0,cy=1,hy=2,tr=0,If=1,Lf=2,Df=3,qr=4,uy=5,Uf=6,Nf=7;var ag=300,Go=301,Vo=302,pd=303,md=304,hh=306,Vn=1e3,Or=1001,gd=1002,bn=1003,dy=1004;var sc=1005;var qi=1006,Su=1007;var Fr=1008;var Kn=1009,lg=1010,cg=1011,rl=1012,Hf=1013,Br=1014,Yi=1015,Jn=1016,kf=1017,zf=1018,ir=1020,hg=35902,ug=1021,dg=1022,oi=1023,fg=1024,pg=1025,zo=1026,sr=1027,Of=1028,Ff=1029,mg=1030,Bf=1031;var Gf=1033,Dc=33776,Uc=33777,Nc=33778,Hc=33779,xd=35840,vd=35841,yd=35842,Md=35843,_d=36196,Ed=37492,bd=37496,wd=37808,Sd=37809,Td=37810,Rd=37811,Ad=37812,Cd=37813,Pd=37814,Id=37815,Ld=37816,Dd=37817,Ud=37818,Nd=37819,Hd=37820,kd=37821,kc=36492,zd=36494,Od=36495,gg=36283,Fd=36284,Bd=36285,Gd=36286;var zc=2300,Vd=2301,Tu=2302,J0=2400,j0=2401,Q0=2402;var fy=3200,py=3201;var Vf=0,my=1,Qs="",Et="srgb",ea="srgb-linear",uh="linear",Ot="srgb";var vo=7680;var em=519,gy=512,xy=513,vy=514,xg=515,yy=516,My=517,_y=518,Ey=519,Wd=35044,Wf=35048;var tm="300 es",ws=2e3,Oc=2001,rr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nm=1234567,el=Math.PI/180,Wo=180/Math.PI;function Ss(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]).toLowerCase()}function En(n,e,t){return Math.max(e,Math.min(t,n))}function $f(n,e){return(n%e+e)%e}function by(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function wy(n,e,t){return n!==e?(t-n)/(e-n):0}function tl(n,e,t){return(1-t)*n+t*e}function Sy(n,e,t,i){return tl(n,e,1-Math.exp(-t*i))}function Ty(n,e=1){return e-Math.abs($f(n,e*2)-e)}function Ry(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ay(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Cy(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Py(n,e){return n+Math.random()*(e-n)}function Iy(n){return n*(.5-Math.random())}function Ly(n){n!==void 0&&(nm=n);let e=nm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dy(n){return n*el}function Uy(n){return n*Wo}function Ny(n){return(n&n-1)===0&&n!==0}function Hy(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ky(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function zy(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),d=r((e-i)/2),f=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ui(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Bt={DEG2RAD:el,RAD2DEG:Wo,generateUUID:Ss,clamp:En,euclideanModulo:$f,mapLinear:by,inverseLerp:wy,lerp:tl,damp:Sy,pingpong:Ty,smoothstep:Ry,smootherstep:Ay,randInt:Cy,randFloat:Py,randFloatSpread:Iy,seededRandom:Ly,degToRad:Dy,radToDeg:Uy,isPowerOfTwo:Ny,ceilPowerOfTwo:Hy,floorPowerOfTwo:ky,setQuaternionFromProperEuler:zy,normalize:$t,denormalize:Ui},te=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(En(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ft=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],g=i[8],v=s[0],x=s[3],m=s[6],_=s[1],E=s[4],M=s[7],D=s[2],A=s[5],C=s[8];return r[0]=o*v+a*_+l*D,r[3]=o*x+a*E+l*A,r[6]=o*m+a*M+l*C,r[1]=c*v+h*_+d*D,r[4]=c*x+h*E+d*A,r[7]=c*m+h*M+d*C,r[2]=f*v+p*_+g*D,r[5]=f*x+p*E+g*A,r[8]=f*m+p*M+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=t*d+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(s*c-h*i)*v,e[2]=(a*i-s*o)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ru.makeScale(e,t)),this}rotate(e){return this.premultiply(Ru.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ru.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ru=new ft;function vg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Fc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Oy(){let n=Fc("canvas");return n.style.display="block",n}var im={};function ja(n){n in im||(im[n]=!0,console.warn(n))}function Fy(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function By(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Gy(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var St={enabled:!0,workingColorSpace:ea,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ot&&(n.r=Ts(n.r),n.g=Ts(n.g),n.b=Ts(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ot&&(n.r=Oo(n.r),n.g=Oo(n.g),n.b=Oo(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Qs?uh:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ts(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Oo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var sm=[.64,.33,.3,.6,.15,.06],rm=[.2126,.7152,.0722],om=[.3127,.329],am=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lm=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);St.define({[ea]:{primaries:sm,whitePoint:om,transfer:uh,toXYZ:am,fromXYZ:lm,luminanceCoefficients:rm,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:sm,whitePoint:om,transfer:Ot,toXYZ:am,fromXYZ:lm,luminanceCoefficients:rm,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}});var yo,$d=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{yo===void 0&&(yo=Fc("canvas")),yo.width=e.width,yo.height=e.height;let i=yo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=yo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fc("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ts(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ts(t[i]/255)*255):t[i]=Ts(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vy=0,Bc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=Ss(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Au(s[o].image)):r.push(Au(s[o]))}else r=Au(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Au(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$d.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Wy=0,Wn=class n extends rr{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Or,s=Or,r=qi,o=Fr,a=oi,l=Kn,c=n.DEFAULT_ANISOTROPY,h=Qs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=Ss(),this.name="",this.source=new Bc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ag)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vn:e.x=e.x-Math.floor(e.x);break;case Or:e.x=e.x<0?0:1;break;case gd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vn:e.y=e.y-Math.floor(e.y);break;case Or:e.y=e.y<0?0:1;break;case gd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=ag;Wn.DEFAULT_ANISOTROPY=1;var Ft=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],g=l[9],v=l[2],x=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+x)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,M=(p+1)/2,D=(m+1)/2,A=(h+f)/4,C=(d+v)/4,P=(g+x)/4;return E>M&&E>D?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=A/i,r=C/i):M>D?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=A/s,r=P/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=C/r,s=P/r),this.set(i,s,r,t),this}let _=Math.sqrt((x-g)*(x-g)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(x-g)/_,this.y=(d-v)/_,this.z=(f-h)/_,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xd=class extends rr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Wn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Bc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends Xd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Gc=class extends Wn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var qd=class extends Wn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],f=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==f||c!==p||h!==g){let x=1-a,m=l*f+c*p+h*g+d*v,_=m>=0?1:-1,E=1-m*m;if(E>Number.EPSILON){let D=Math.sqrt(E),A=Math.atan2(D,m*_);x=Math.sin(x*A)/D,a=Math.sin(a*A)/D}let M=a*_;if(l=l*x+f*M,c=c*x+p*M,h=h*x+g*M,d=d*x+v*M,x===1-a){let D=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=D,c*=D,h*=D,d*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*p-c*f,e[t+1]=l*g+h*f+c*d-a*p,e[t+2]=c*g+h*p+a*f-l*d,e[t+3]=h*g-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"YZX":this._x=f*h*d+c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d-f*p*g;break;case"XZY":this._x=f*h*d-c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=i+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(En(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Cu.copy(this).projectOnVector(e),this.sub(Cu)}reflect(e){return this.sub(Cu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(En(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Cu=new w,cm=new dn,Ni=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ii):Ii.fromBufferAttribute(r,o),Ii.applyMatrix4(e.matrixWorld),this.expandByPoint(Ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rc.copy(i.boundingBox)),rc.applyMatrix4(e.matrixWorld),this.union(rc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ga),oc.subVectors(this.max,Ga),Mo.subVectors(e.a,Ga),_o.subVectors(e.b,Ga),Eo.subVectors(e.c,Ga),qs.subVectors(_o,Mo),Ys.subVectors(Eo,_o),Ir.subVectors(Mo,Eo);let t=[0,-qs.z,qs.y,0,-Ys.z,Ys.y,0,-Ir.z,Ir.y,qs.z,0,-qs.x,Ys.z,0,-Ys.x,Ir.z,0,-Ir.x,-qs.y,qs.x,0,-Ys.y,Ys.x,0,-Ir.y,Ir.x,0];return!Pu(t,Mo,_o,Eo,oc)||(t=[1,0,0,0,1,0,0,0,1],!Pu(t,Mo,_o,Eo,oc))?!1:(ac.crossVectors(qs,Ys),t=[ac.x,ac.y,ac.z],Pu(t,Mo,_o,Eo,oc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},xs=[new w,new w,new w,new w,new w,new w,new w,new w],Ii=new w,rc=new Ni,Mo=new w,_o=new w,Eo=new w,qs=new w,Ys=new w,Ir=new w,Ga=new w,oc=new w,ac=new w,Lr=new w;function Pu(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Lr.fromArray(n,r);let a=s.x*Math.abs(Lr.x)+s.y*Math.abs(Lr.y)+s.z*Math.abs(Lr.z),l=e.dot(Lr),c=t.dot(Lr),h=i.dot(Lr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var $y=new Ni,Va=new w,Iu=new w,or=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):$y.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Va.subVectors(e,this.center);let t=Va.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Va,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Iu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Va.copy(e.center).add(Iu)),this.expandByPoint(Va.copy(e.center).sub(Iu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},vs=new w,Lu=new w,lc=new w,Zs=new w,Du=new w,cc=new w,Uu=new w,Vc=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vs.copy(this.origin).addScaledVector(this.direction,t),vs.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Lu.copy(e).add(t).multiplyScalar(.5),lc.copy(t).sub(e).normalize(),Zs.copy(this.origin).sub(Lu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(lc),a=Zs.dot(this.direction),l=-Zs.dot(lc),c=Zs.lengthSq(),h=Math.abs(1-o*o),d,f,p,g;if(h>0)if(d=o*l-a,f=o*a-l,g=r*h,d>=0)if(f>=-g)if(f<=g){let v=1/h;d*=v,f*=v,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Lu).addScaledVector(lc,f),p}intersectSphere(e,t){vs.subVectors(e.center,this.origin);let i=vs.dot(this.direction),s=vs.dot(vs)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,vs)!==null}intersectTriangle(e,t,i,s,r){Du.subVectors(t,e),cc.subVectors(i,e),Uu.crossVectors(Du,cc);let o=this.direction.dot(Uu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zs.subVectors(this.origin,e);let l=a*this.direction.dot(cc.crossVectors(Zs,cc));if(l<0)return null;let c=a*this.direction.dot(Du.cross(Zs));if(c<0||l+c>o)return null;let h=-a*Zs.dot(Uu);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pt=class n{constructor(e,t,i,s,r,o,a,l,c,h,d,f,p,g,v,x){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,f,p,g,v,x)}set(e,t,i,s,r,o,a,l,c,h,d,f,p,g,v,x){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=f,m[3]=p,m[7]=g,m[11]=v,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/bo.setFromMatrixColumn(e,0).length(),r=1/bo.setFromMatrixColumn(e,1).length(),o=1/bo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=o*h,p=o*d,g=a*h,v=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,p=l*d,g=c*h,v=c*d;t[0]=f+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,p=l*d,g=c*h,v=c*d;t[0]=f-v*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,p=o*d,g=a*h,v=a*d;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+v,t[1]=l*d,t[5]=v*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-f*d,t[8]=g*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*d+g,t[10]=f-v*d}else if(e.order==="XZY"){let f=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+v,t[5]=o*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*h,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xy,e,qy)}lookAt(e,t,i){let s=this.elements;return si.subVectors(e,t),si.lengthSq()===0&&(si.z=1),si.normalize(),Ks.crossVectors(i,si),Ks.lengthSq()===0&&(Math.abs(i.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Ks.crossVectors(i,si)),Ks.normalize(),hc.crossVectors(si,Ks),s[0]=Ks.x,s[4]=hc.x,s[8]=si.x,s[1]=Ks.y,s[5]=hc.y,s[9]=si.y,s[2]=Ks.z,s[6]=hc.z,s[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],g=i[2],v=i[6],x=i[10],m=i[14],_=i[3],E=i[7],M=i[11],D=i[15],A=s[0],C=s[4],P=s[8],S=s[12],b=s[1],U=s[5],O=s[9],F=s[13],V=s[2],Q=s[6],$=s[10],se=s[14],X=s[3],ae=s[7],Se=s[11],ke=s[15];return r[0]=o*A+a*b+l*V+c*X,r[4]=o*C+a*U+l*Q+c*ae,r[8]=o*P+a*O+l*$+c*Se,r[12]=o*S+a*F+l*se+c*ke,r[1]=h*A+d*b+f*V+p*X,r[5]=h*C+d*U+f*Q+p*ae,r[9]=h*P+d*O+f*$+p*Se,r[13]=h*S+d*F+f*se+p*ke,r[2]=g*A+v*b+x*V+m*X,r[6]=g*C+v*U+x*Q+m*ae,r[10]=g*P+v*O+x*$+m*Se,r[14]=g*S+v*F+x*se+m*ke,r[3]=_*A+E*b+M*V+D*X,r[7]=_*C+E*U+M*Q+D*ae,r[11]=_*P+E*O+M*$+D*Se,r[15]=_*S+E*F+M*se+D*ke,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],g=e[3],v=e[7],x=e[11],m=e[15];return g*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*p-i*l*p)+v*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+x*(+t*c*d-t*a*p-r*o*d+i*o*p+r*a*h-i*c*h)+m*(-s*a*h-t*l*d+t*a*f+s*o*d-i*o*f+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],g=e[12],v=e[13],x=e[14],m=e[15],_=d*x*c-v*f*c+v*l*p-a*x*p-d*l*m+a*f*m,E=g*f*c-h*x*c-g*l*p+o*x*p+h*l*m-o*f*m,M=h*v*c-g*d*c+g*a*p-o*v*p-h*a*m+o*d*m,D=g*d*l-h*v*l-g*a*f+o*v*f+h*a*x-o*d*x,A=t*_+i*E+s*M+r*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return e[0]=_*C,e[1]=(v*f*r-d*x*r-v*s*p+i*x*p+d*s*m-i*f*m)*C,e[2]=(a*x*r-v*l*r+v*s*c-i*x*c-a*s*m+i*l*m)*C,e[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*p-i*l*p)*C,e[4]=E*C,e[5]=(h*x*r-g*f*r+g*s*p-t*x*p-h*s*m+t*f*m)*C,e[6]=(g*l*r-o*x*r-g*s*c+t*x*c+o*s*m-t*l*m)*C,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*p+t*l*p)*C,e[8]=M*C,e[9]=(g*d*r-h*v*r-g*i*p+t*v*p+h*i*m-t*d*m)*C,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*m+t*a*m)*C,e[11]=(h*a*r-o*d*r-h*i*c+t*d*c+o*i*p-t*a*p)*C,e[12]=D*C,e[13]=(h*v*s-g*d*s+g*i*f-t*v*f-h*i*x+t*d*x)*C,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*x-t*a*x)*C,e[15]=(o*d*s-h*a*s+h*i*l-t*d*l-o*i*f+t*a*f)*C,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,f=r*c,p=r*h,g=r*d,v=o*h,x=o*d,m=a*d,_=l*c,E=l*h,M=l*d,D=i.x,A=i.y,C=i.z;return s[0]=(1-(v+m))*D,s[1]=(p+M)*D,s[2]=(g-E)*D,s[3]=0,s[4]=(p-M)*A,s[5]=(1-(f+m))*A,s[6]=(x+_)*A,s[7]=0,s[8]=(g+E)*C,s[9]=(x-_)*C,s[10]=(1-(f+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=bo.set(s[0],s[1],s[2]).length(),o=bo.set(s[4],s[5],s[6]).length(),a=bo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Li.copy(this);let c=1/r,h=1/o,d=1/a;return Li.elements[0]*=c,Li.elements[1]*=c,Li.elements[2]*=c,Li.elements[4]*=h,Li.elements[5]*=h,Li.elements[6]*=h,Li.elements[8]*=d,Li.elements[9]*=d,Li.elements[10]*=d,t.setFromRotationMatrix(Li),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ws){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),p,g;if(a===ws)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Oc)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ws){let l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(o-r),f=(t+e)*c,p=(i+s)*h,g,v;if(a===ws)g=(o+r)*d,v=-2*d;else if(a===Oc)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},bo=new w,Li=new pt,Xy=new w(0,0,0),qy=new w(1,1,1),Ks=new w,hc=new w,si=new w,hm=new pt,um=new dn,Sn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(En(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-En(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(En(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-En(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(En(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-En(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return um.setFromEuler(this),this.setFromQuaternion(um,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var Wc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Yy=0,dm=new w,wo=new dn,ys=new pt,uc=new w,Wa=new w,Zy=new w,Ky=new dn,fm=new w(1,0,0),pm=new w(0,1,0),mm=new w(0,0,1),gm={type:"added"},Jy={type:"removed"},So={type:"childadded",child:null},Nu={type:"childremoved",child:null},fn=class n extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yy++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new w,t=new Sn,i=new dn,s=new w(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new ft}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wo.setFromAxisAngle(e,t),this.quaternion.multiply(wo),this}rotateOnWorldAxis(e,t){return wo.setFromAxisAngle(e,t),this.quaternion.premultiply(wo),this}rotateX(e){return this.rotateOnAxis(fm,e)}rotateY(e){return this.rotateOnAxis(pm,e)}rotateZ(e){return this.rotateOnAxis(mm,e)}translateOnAxis(e,t){return dm.copy(e).applyQuaternion(this.quaternion),this.position.add(dm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fm,e)}translateY(e){return this.translateOnAxis(pm,e)}translateZ(e){return this.translateOnAxis(mm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ys.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?uc.copy(e):uc.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ys.lookAt(Wa,uc,this.up):ys.lookAt(uc,Wa,this.up),this.quaternion.setFromRotationMatrix(ys),s&&(ys.extractRotation(s.matrixWorld),wo.setFromRotationMatrix(ys),this.quaternion.premultiply(wo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gm),So.child=e,this.dispatchEvent(So),So.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jy),Nu.child=e,this.dispatchEvent(Nu),Nu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ys.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ys.multiply(e.parent.matrixWorld)),e.applyMatrix4(ys),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gm),So.child=e,this.dispatchEvent(So),So.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,e,Zy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,Ky,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};fn.DEFAULT_UP=new w(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Di=new w,Ms=new w,Hu=new w,_s=new w,To=new w,Ro=new w,xm=new w,ku=new w,zu=new w,Ou=new w,Fu=new Ft,Bu=new Ft,Gu=new Ft,er=class n{constructor(e=new w,t=new w,i=new w){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Di.subVectors(e,t),s.cross(Di);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Di.subVectors(s,t),Ms.subVectors(i,t),Hu.subVectors(e,t);let o=Di.dot(Di),a=Di.dot(Ms),l=Di.dot(Hu),c=Ms.dot(Ms),h=Ms.dot(Hu),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,_s)===null?!1:_s.x>=0&&_s.y>=0&&_s.x+_s.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,_s)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_s.x),l.addScaledVector(o,_s.y),l.addScaledVector(a,_s.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Fu.setScalar(0),Bu.setScalar(0),Gu.setScalar(0),Fu.fromBufferAttribute(e,t),Bu.fromBufferAttribute(e,i),Gu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Fu,r.x),o.addScaledVector(Bu,r.y),o.addScaledVector(Gu,r.z),o}static isFrontFacing(e,t,i,s){return Di.subVectors(i,t),Ms.subVectors(e,t),Di.cross(Ms).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),Ms.subVectors(this.a,this.b),Di.cross(Ms).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;To.subVectors(s,i),Ro.subVectors(r,i),ku.subVectors(e,i);let l=To.dot(ku),c=Ro.dot(ku);if(l<=0&&c<=0)return t.copy(i);zu.subVectors(e,s);let h=To.dot(zu),d=Ro.dot(zu);if(h>=0&&d<=h)return t.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(To,o);Ou.subVectors(e,r);let p=To.dot(Ou),g=Ro.dot(Ou);if(g>=0&&p<=g)return t.copy(r);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ro,a);let x=h*g-p*d;if(x<=0&&d-h>=0&&p-g>=0)return xm.subVectors(r,s),a=(d-h)/(d-h+(p-g)),t.copy(s).addScaledVector(xm,a);let m=1/(x+v+f);return o=v*m,a=f*m,t.copy(i).addScaledVector(To,o).addScaledVector(Ro,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},yg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Js={h:0,s:0,l:0},dc={h:0,s:0,l:0};function Vu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var he=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=St.workingColorSpace){return this.r=e,this.g=t,this.b=i,St.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=St.workingColorSpace){if(e=$f(e,1),t=En(t,0,1),i=En(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Vu(o,r,e+1/3),this.g=Vu(o,r,e),this.b=Vu(o,r,e-1/3)}return St.toWorkingColorSpace(this,s),this}setStyle(e,t=Et){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){let i=yg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=Oo(e.r),this.g=Oo(e.g),this.b=Oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return St.fromWorkingColorSpace(In.copy(this),e),Math.round(En(In.r*255,0,255))*65536+Math.round(En(In.g*255,0,255))*256+Math.round(En(In.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(In.copy(this),t);let i=In.r,s=In.g,r=In.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Et){St.fromWorkingColorSpace(In.copy(this),e);let t=In.r,i=In.g,s=In.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Js),this.setHSL(Js.h+e,Js.s+t,Js.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Js),e.getHSL(dc);let i=tl(Js.h,dc.h,t),s=tl(Js.s,dc.s,t),r=tl(Js.l,dc.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new he;he.NAMES=yg;var jy=0,Zi=class extends rr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=Ss(),this.name="",this.blending=gi,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rd,this.blendDst=od,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=Bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=em,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vo,this.stencilZFail=vo,this.stencilZPass=vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(i.blending=this.blending),this.side!==nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rd&&(i.blendSrc=this.blendSrc),this.blendDst!==od&&(i.blendDst=this.blendDst),this.blendEquation!==mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==em&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ue=class extends Zi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=og,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var pn=new w,fc=new te,on=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wd,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fc.fromBufferAttribute(this,t),fc.applyMatrix3(e),this.setXY(t,fc.x,fc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix3(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ui(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wd&&(e.usage=this.usage),e}};var $c=class extends on{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Xc=class extends on{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ot=class extends on{constructor(e,t,i){super(new Float32Array(e),t,i)}},Qy=0,pi=new pt,Wu=new fn,Ao=new w,ri=new Ni,$a=new Ni,_n=new w,Rt=class n extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vg(e)?Xc:$c)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ft().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,i){return pi.makeTranslation(e,t,i),this.applyMatrix4(pi),this}scale(e,t,i){return pi.makeScale(e,t,i),this.applyMatrix4(pi),this}lookAt(e){return Wu.lookAt(e),Wu.updateMatrix(),this.applyMatrix4(Wu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ao).negate(),this.translate(Ao.x,Ao.y,Ao.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ot(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];ri.setFromBufferAttribute(r),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new or);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){let i=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];$a.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(ri.min,$a.min),ri.expandByPoint(_n),_n.addVectors(ri.max,$a.max),ri.expandByPoint(_n)):(ri.expandByPoint($a.min),ri.expandByPoint($a.max))}ri.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)_n.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(_n));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)_n.fromBufferAttribute(a,c),l&&(Ao.fromBufferAttribute(e,c),_n.add(Ao)),s=Math.max(s,i.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new w,l[P]=new w;let c=new w,h=new w,d=new w,f=new te,p=new te,g=new te,v=new w,x=new w;function m(P,S,b){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,b),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,b),h.sub(c),d.sub(c),p.sub(f),g.sub(f);let U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(U),x.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(U),a[P].add(v),a[S].add(v),a[b].add(v),l[P].add(x),l[S].add(x),l[b].add(x))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,S=_.length;P<S;++P){let b=_[P],U=b.start,O=b.count;for(let F=U,V=U+O;F<V;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let E=new w,M=new w,D=new w,A=new w;function C(P){D.fromBufferAttribute(s,P),A.copy(D);let S=a[P];E.copy(S),E.sub(D.multiplyScalar(D.dot(S))).normalize(),M.crossVectors(A,S);let U=M.dot(l[P])<0?-1:1;o.setXYZW(P,E.x,E.y,E.z,U)}for(let P=0,S=_.length;P<S;++P){let b=_[P],U=b.start,O=b.count;for(let F=U,V=U+O;F<V;F+=3)C(e.getX(F+0)),C(e.getX(F+1)),C(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new w,r=new w,o=new w,a=new w,l=new w,c=new w,h=new w,d=new w;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),v=e.getX(f+1),x=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,x),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,x),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let v=0,x=l.length;v<x;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let m=0;m<h;m++)f[g++]=c[p++]}return new on(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},vm=new pt,Dr=new Vc,pc=new or,ym=new w,mc=new w,gc=new w,xc=new w,$u=new w,vc=new w,Mm=new w,yc=new w,ne=class extends fn{constructor(e=new Rt,t=new Ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){vc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&($u.fromBufferAttribute(d,e),o?vc.addScaledVector($u,h):vc.addScaledVector($u.sub(t),h))}t.add(vc)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pc.copy(i.boundingSphere),pc.applyMatrix4(r),Dr.copy(e.ray).recast(e.near),!(pc.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(pc,ym)===null||Dr.origin.distanceToSquared(ym)>(e.far-e.near)**2))&&(vm.copy(r).invert(),Dr.copy(e.ray).applyMatrix4(vm),!(i.boundingBox!==null&&Dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Dr)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let x=f[g],m=o[x.materialIndex],_=Math.max(x.start,p.start),E=Math.min(a.count,Math.min(x.start+x.count,p.start+p.count));for(let M=_,D=E;M<D;M+=3){let A=a.getX(M),C=a.getX(M+1),P=a.getX(M+2);s=Mc(this,m,e,i,c,h,d,A,C,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let x=g,m=v;x<m;x+=3){let _=a.getX(x),E=a.getX(x+1),M=a.getX(x+2);s=Mc(this,o,e,i,c,h,d,_,E,M),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let x=f[g],m=o[x.materialIndex],_=Math.max(x.start,p.start),E=Math.min(l.count,Math.min(x.start+x.count,p.start+p.count));for(let M=_,D=E;M<D;M+=3){let A=M,C=M+1,P=M+2;s=Mc(this,m,e,i,c,h,d,A,C,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let x=g,m=v;x<m;x+=3){let _=x,E=x+1,M=x+2;s=Mc(this,o,e,i,c,h,d,_,E,M),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}};function eM(n,e,t,i,s,r,o,a){let l;if(e.side===Ln?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===nr,a),l===null)return null;yc.copy(a),yc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(yc);return c<t.near||c>t.far?null:{distance:c,point:yc.clone(),object:n}}function Mc(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,mc),n.getVertexPosition(l,gc),n.getVertexPosition(c,xc);let h=eM(n,e,t,i,mc,gc,xc,Mm);if(h){let d=new w;er.getBarycoord(Mm,mc,gc,xc,d),s&&(h.uv=er.getInterpolatedAttribute(s,a,l,c,d,new te)),r&&(h.uv1=er.getInterpolatedAttribute(r,a,l,c,d,new te)),o&&(h.normal=er.getInterpolatedAttribute(o,a,l,c,d,new w),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new w,materialIndex:0};er.getNormal(mc,gc,xc,f.normal),h.face=f,h.barycoord=d}return h}var Ye=class n extends Rt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(d,2));function g(v,x,m,_,E,M,D,A,C,P,S){let b=M/C,U=D/P,O=M/2,F=D/2,V=A/2,Q=C+1,$=P+1,se=0,X=0,ae=new w;for(let Se=0;Se<$;Se++){let ke=Se*U-F;for(let rt=0;rt<Q;rt++){let It=rt*b-O;ae[v]=It*_,ae[x]=ke*E,ae[m]=V,c.push(ae.x,ae.y,ae.z),ae[v]=0,ae[x]=0,ae[m]=A>0?1:-1,h.push(ae.x,ae.y,ae.z),d.push(rt/C),d.push(1-Se/P),se+=1}}for(let Se=0;Se<P;Se++)for(let ke=0;ke<C;ke++){let rt=f+ke+Q*Se,It=f+ke+Q*(Se+1),K=f+(ke+1)+Q*(Se+1),le=f+(ke+1)+Q*Se;l.push(rt,It,le),l.push(It,K,le),X+=6}a.addGroup(p,X,S),p+=X,f+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function $o(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Gn(n){let e={};for(let t=0;t<n.length;t++){let i=$o(n[t]);for(let s in i)e[s]=i[s]}return e}function tM(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Mg(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}var jn={clone:$o,merge:Gn},nM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ct=class extends Zi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nM,this.fragmentShader=iM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$o(e.uniforms),this.uniformsGroups=tM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},qc=class extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=ws}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},js=new w,_m=new te,Em=new te,un=class extends qc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Wo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(el*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(el*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){js.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(js.x,js.y).multiplyScalar(-e/js.z),js.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(js.x,js.y).multiplyScalar(-e/js.z)}getViewSize(e,t){return this.getViewBounds(e,_m,Em),t.subVectors(Em,_m)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(el*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Co=-90,Po=1,Yd=class extends fn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new un(Co,Po,e,t);s.layers=this.layers,this.add(s);let r=new un(Co,Po,e,t);r.layers=this.layers,this.add(r);let o=new un(Co,Po,e,t);o.layers=this.layers,this.add(o);let a=new un(Co,Po,e,t);a.layers=this.layers,this.add(a);let l=new un(Co,Po,e,t);l.layers=this.layers,this.add(l);let c=new un(Co,Po,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ws)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Yc=class extends Wn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Go,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Zd=class extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Yc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ye(5,5,5),r=new Ct({name:"CubemapFromEquirect",uniforms:$o(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ln,blending:xn});r.uniforms.tEquirect.value=t;let o=new ne(s,r),a=t.minFilter;return t.minFilter===Fr&&(t.minFilter=qi),new Yd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Xu=new w,sM=new w,rM=new ft,bs=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Xu.subVectors(i,t).cross(sM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Xu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||rM.getNormalMatrix(e),s=this.coplanarPoint(Xu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ur=new or,_c=new w,ol=class{constructor(e=new bs,t=new bs,i=new bs,s=new bs,r=new bs,o=new bs){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ws){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],p=s[8],g=s[9],v=s[10],x=s[11],m=s[12],_=s[13],E=s[14],M=s[15];if(i[0].setComponents(l-r,f-c,x-p,M-m).normalize(),i[1].setComponents(l+r,f+c,x+p,M+m).normalize(),i[2].setComponents(l+o,f+h,x+g,M+_).normalize(),i[3].setComponents(l-o,f-h,x-g,M-_).normalize(),i[4].setComponents(l-a,f-d,x-v,M-E).normalize(),t===ws)i[5].setComponents(l+a,f+d,x+v,M+E).normalize();else if(t===Oc)i[5].setComponents(a,d,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(_c.x=s.normal.x>0?e.max.x:e.min.x,_c.y=s.normal.y>0?e.max.y:e.min.y,_c.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_c)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function _g(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function oM(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){let g=d[f],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){let v=d[p];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Dn=class n extends Rt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,f=t/l,p=[],g=[],v=[],x=[];for(let m=0;m<h;m++){let _=m*f-o;for(let E=0;E<c;E++){let M=E*d-r;g.push(M,-_,0),v.push(0,0,1),x.push(E/a),x.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let E=_+c*m,M=_+c*(m+1),D=_+1+c*(m+1),A=_+1+c*m;p.push(E,M,A),p.push(M,D,A)}this.setIndex(p),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(v,3)),this.setAttribute("uv",new ot(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},aM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lM=`#ifdef USE_ALPHAHASH
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
#endif`,cM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fM=`#ifdef USE_AOMAP
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
#endif`,pM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mM=`#ifdef USE_BATCHING
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
#endif`,gM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,MM=`#ifdef USE_IRIDESCENCE
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
#endif`,_M=`#ifdef USE_BUMPMAP
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
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,PM=`#define PI 3.141592653589793
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
} // validated`,IM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,LM=`vec3 transformedNormal = objectNormal;
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
#endif`,DM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,UM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kM="gl_FragColor = linearToOutputTexel( gl_FragColor );",zM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OM=`#ifdef USE_ENVMAP
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
#endif`,FM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,BM=`#ifdef USE_ENVMAP
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
#endif`,GM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
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
#endif`,WM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$M=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YM=`#ifdef USE_GRADIENTMAP
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
}`,ZM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jM=`uniform bool receiveShadow;
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
#endif`,QM=`#ifdef USE_ENVMAP
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
#endif`,e_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s_=`PhysicalMaterial material;
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
#endif`,r_=`struct PhysicalMaterial {
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
}`,o_=`
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
#endif`,a_=`#if defined( RE_IndirectDiffuse )
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
#endif`,l_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,g_=`#if defined( USE_POINTS_UV )
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
#endif`,x_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,__=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E_=`#ifdef USE_MORPHTARGETS
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
#endif`,b_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,T_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,C_=`#ifdef USE_NORMALMAP
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
#endif`,P_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,N_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,H_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$_=`float getShadowMask() {
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
}`,X_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q_=`#ifdef USE_SKINNING
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
#endif`,Y_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z_=`#ifdef USE_SKINNING
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
#endif`,K_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,e2=`#ifdef USE_TRANSMISSION
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
#endif`,t2=`#ifdef USE_TRANSMISSION
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
#endif`,n2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,o2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a2=`uniform sampler2D t2D;
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
}`,l2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,h2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d2=`#include <common>
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
}`,f2=`#if DEPTH_PACKING == 3200
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
}`,p2=`#define DISTANCE
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
}`,m2=`#define DISTANCE
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
}`,g2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v2=`uniform float scale;
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
}`,y2=`uniform vec3 diffuse;
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
}`,M2=`#include <common>
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
}`,_2=`uniform vec3 diffuse;
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
}`,E2=`#define LAMBERT
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
}`,b2=`#define LAMBERT
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
}`,w2=`#define MATCAP
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
}`,S2=`#define MATCAP
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
}`,T2=`#define NORMAL
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
}`,R2=`#define NORMAL
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
}`,A2=`#define PHONG
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
}`,C2=`#define PHONG
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
}`,P2=`#define STANDARD
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
}`,I2=`#define STANDARD
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
}`,L2=`#define TOON
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
}`,D2=`#define TOON
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
}`,U2=`uniform float size;
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
}`,N2=`uniform vec3 diffuse;
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
}`,H2=`#include <common>
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
}`,k2=`uniform vec3 color;
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
}`,z2=`uniform float rotation;
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
}`,O2=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:aM,alphahash_pars_fragment:lM,alphamap_fragment:cM,alphamap_pars_fragment:hM,alphatest_fragment:uM,alphatest_pars_fragment:dM,aomap_fragment:fM,aomap_pars_fragment:pM,batching_pars_vertex:mM,batching_vertex:gM,begin_vertex:xM,beginnormal_vertex:vM,bsdfs:yM,iridescence_fragment:MM,bumpmap_pars_fragment:_M,clipping_planes_fragment:EM,clipping_planes_pars_fragment:bM,clipping_planes_pars_vertex:wM,clipping_planes_vertex:SM,color_fragment:TM,color_pars_fragment:RM,color_pars_vertex:AM,color_vertex:CM,common:PM,cube_uv_reflection_fragment:IM,defaultnormal_vertex:LM,displacementmap_pars_vertex:DM,displacementmap_vertex:UM,emissivemap_fragment:NM,emissivemap_pars_fragment:HM,colorspace_fragment:kM,colorspace_pars_fragment:zM,envmap_fragment:OM,envmap_common_pars_fragment:FM,envmap_pars_fragment:BM,envmap_pars_vertex:GM,envmap_physical_pars_fragment:QM,envmap_vertex:VM,fog_vertex:WM,fog_pars_vertex:$M,fog_fragment:XM,fog_pars_fragment:qM,gradientmap_pars_fragment:YM,lightmap_pars_fragment:ZM,lights_lambert_fragment:KM,lights_lambert_pars_fragment:JM,lights_pars_begin:jM,lights_toon_fragment:e_,lights_toon_pars_fragment:t_,lights_phong_fragment:n_,lights_phong_pars_fragment:i_,lights_physical_fragment:s_,lights_physical_pars_fragment:r_,lights_fragment_begin:o_,lights_fragment_maps:a_,lights_fragment_end:l_,logdepthbuf_fragment:c_,logdepthbuf_pars_fragment:h_,logdepthbuf_pars_vertex:u_,logdepthbuf_vertex:d_,map_fragment:f_,map_pars_fragment:p_,map_particle_fragment:m_,map_particle_pars_fragment:g_,metalnessmap_fragment:x_,metalnessmap_pars_fragment:v_,morphinstance_vertex:y_,morphcolor_vertex:M_,morphnormal_vertex:__,morphtarget_pars_vertex:E_,morphtarget_vertex:b_,normal_fragment_begin:w_,normal_fragment_maps:S_,normal_pars_fragment:T_,normal_pars_vertex:R_,normal_vertex:A_,normalmap_pars_fragment:C_,clearcoat_normal_fragment_begin:P_,clearcoat_normal_fragment_maps:I_,clearcoat_pars_fragment:L_,iridescence_pars_fragment:D_,opaque_fragment:U_,packing:N_,premultiplied_alpha_fragment:H_,project_vertex:k_,dithering_fragment:z_,dithering_pars_fragment:O_,roughnessmap_fragment:F_,roughnessmap_pars_fragment:B_,shadowmap_pars_fragment:G_,shadowmap_pars_vertex:V_,shadowmap_vertex:W_,shadowmask_pars_fragment:$_,skinbase_vertex:X_,skinning_pars_vertex:q_,skinning_vertex:Y_,skinnormal_vertex:Z_,specularmap_fragment:K_,specularmap_pars_fragment:J_,tonemapping_fragment:j_,tonemapping_pars_fragment:Q_,transmission_fragment:e2,transmission_pars_fragment:t2,uv_pars_fragment:n2,uv_pars_vertex:i2,uv_vertex:s2,worldpos_vertex:r2,background_vert:o2,background_frag:a2,backgroundCube_vert:l2,backgroundCube_frag:c2,cube_vert:h2,cube_frag:u2,depth_vert:d2,depth_frag:f2,distanceRGBA_vert:p2,distanceRGBA_frag:m2,equirect_vert:g2,equirect_frag:x2,linedashed_vert:v2,linedashed_frag:y2,meshbasic_vert:M2,meshbasic_frag:_2,meshlambert_vert:E2,meshlambert_frag:b2,meshmatcap_vert:w2,meshmatcap_frag:S2,meshnormal_vert:T2,meshnormal_frag:R2,meshphong_vert:A2,meshphong_frag:C2,meshphysical_vert:P2,meshphysical_frag:I2,meshtoon_vert:L2,meshtoon_frag:D2,points_vert:U2,points_frag:N2,shadow_vert:H2,shadow_frag:k2,sprite_vert:z2,sprite_frag:O2},we={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Xi={basic:{uniforms:Gn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Gn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new he(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Gn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Gn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Gn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new he(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Gn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Gn([we.points,we.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Gn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Gn([we.common,we.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Gn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Gn([we.sprite,we.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:Gn([we.common,we.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:Gn([we.lights,we.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Xi.physical={uniforms:Gn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};var Ec={r:0,b:0,g:0},Nr=new Sn,F2=new pt;function B2(n,e,t,i,s,r,o){let a=new he(0),l=r===!0?0:1,c,h,d=null,f=0,p=null;function g(_){let E=_.isScene===!0?_.background:null;return E&&E.isTexture&&(E=(_.backgroundBlurriness>0?t:e).get(E)),E}function v(_){let E=!1,M=g(_);M===null?m(a,l):M&&M.isColor&&(m(M,1),E=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(_,E){let M=g(E);M&&(M.isCubeTexture||M.mapping===hh)?(h===void 0&&(h=new ne(new Ye(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:$o(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Nr.copy(E.backgroundRotation),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(F2.makeRotationFromEuler(Nr)),h.material.toneMapped=St.getTransfer(M.colorSpace)!==Ot,(d!==M||f!==M.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=M,f=M.version,p=n.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ne(new Dn(2,2),new Ct({name:"BackgroundMaterial",uniforms:$o(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=St.getTransfer(M.colorSpace)!==Ot,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,p=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,E){_.getRGB(Ec,Mg(n)),i.buffers.color.setClear(Ec.r,Ec.g,Ec.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(_,E=1){a.set(_),l=E,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,m(a,l)},render:v,addToRenderList:x}}function G2(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(b,U,O,F,V){let Q=!1,$=d(F,O,U);r!==$&&(r=$,c(r.object)),Q=p(b,F,O,V),Q&&g(b,F,O,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,M(b,U,O,F),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function d(b,U,O){let F=O.wireframe===!0,V=i[b.id];V===void 0&&(V={},i[b.id]=V);let Q=V[U.id];Q===void 0&&(Q={},V[U.id]=Q);let $=Q[F];return $===void 0&&($=f(l()),Q[F]=$),$}function f(b){let U=[],O=[],F=[];for(let V=0;V<t;V++)U[V]=0,O[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:F,object:b,attributes:{},index:null}}function p(b,U,O,F){let V=r.attributes,Q=U.attributes,$=0,se=O.getAttributes();for(let X in se)if(se[X].location>=0){let Se=V[X],ke=Q[X];if(ke===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(ke=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(ke=b.instanceColor)),Se===void 0||Se.attribute!==ke||ke&&Se.data!==ke.data)return!0;$++}return r.attributesNum!==$||r.index!==F}function g(b,U,O,F){let V={},Q=U.attributes,$=0,se=O.getAttributes();for(let X in se)if(se[X].location>=0){let Se=Q[X];Se===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(Se=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(Se=b.instanceColor));let ke={};ke.attribute=Se,Se&&Se.data&&(ke.data=Se.data),V[X]=ke,$++}r.attributes=V,r.attributesNum=$,r.index=F}function v(){let b=r.newAttributes;for(let U=0,O=b.length;U<O;U++)b[U]=0}function x(b){m(b,0)}function m(b,U){let O=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;O[b]=1,F[b]===0&&(n.enableVertexAttribArray(b),F[b]=1),V[b]!==U&&(n.vertexAttribDivisor(b,U),V[b]=U)}function _(){let b=r.newAttributes,U=r.enabledAttributes;for(let O=0,F=U.length;O<F;O++)U[O]!==b[O]&&(n.disableVertexAttribArray(O),U[O]=0)}function E(b,U,O,F,V,Q,$){$===!0?n.vertexAttribIPointer(b,U,O,V,Q):n.vertexAttribPointer(b,U,O,F,V,Q)}function M(b,U,O,F){v();let V=F.attributes,Q=O.getAttributes(),$=U.defaultAttributeValues;for(let se in Q){let X=Q[se];if(X.location>=0){let ae=V[se];if(ae===void 0&&(se==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),se==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor)),ae!==void 0){let Se=ae.normalized,ke=ae.itemSize,rt=e.get(ae);if(rt===void 0)continue;let It=rt.buffer,K=rt.type,le=rt.bytesPerElement,De=K===n.INT||K===n.UNSIGNED_INT||ae.gpuType===Hf;if(ae.isInterleavedBufferAttribute){let pe=ae.data,$e=pe.stride,Je=ae.offset;if(pe.isInstancedInterleavedBuffer){for(let tt=0;tt<X.locationSize;tt++)m(X.location+tt,pe.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let tt=0;tt<X.locationSize;tt++)x(X.location+tt);n.bindBuffer(n.ARRAY_BUFFER,It);for(let tt=0;tt<X.locationSize;tt++)E(X.location+tt,ke/X.locationSize,K,Se,$e*le,(Je+ke/X.locationSize*tt)*le,De)}else{if(ae.isInstancedBufferAttribute){for(let pe=0;pe<X.locationSize;pe++)m(X.location+pe,ae.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let pe=0;pe<X.locationSize;pe++)x(X.location+pe);n.bindBuffer(n.ARRAY_BUFFER,It);for(let pe=0;pe<X.locationSize;pe++)E(X.location+pe,ke/X.locationSize,K,Se,ke*le,ke/X.locationSize*pe*le,De)}}else if($!==void 0){let Se=$[se];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(X.location,Se);break;case 3:n.vertexAttrib3fv(X.location,Se);break;case 4:n.vertexAttrib4fv(X.location,Se);break;default:n.vertexAttrib1fv(X.location,Se)}}}}_()}function D(){P();for(let b in i){let U=i[b];for(let O in U){let F=U[O];for(let V in F)h(F[V].object),delete F[V];delete U[O]}delete i[b]}}function A(b){if(i[b.id]===void 0)return;let U=i[b.id];for(let O in U){let F=U[O];for(let V in F)h(F[V].object),delete F[V];delete U[O]}delete i[b.id]}function C(b){for(let U in i){let O=i[U];if(O[b.id]===void 0)continue;let F=O[b.id];for(let V in F)h(F[V].object),delete F[V];delete O[b.id]}}function P(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:x,disableUnusedAttributes:_}}function V2(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];t.update(p,i,1)}function l(c,h,d,f){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*f[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function W2(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==oi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let P=C===Jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Kn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Yi&&!P)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:D,maxSamples:A}}function $2(n){let e=this,t=null,i=0,s=!1,r=!1,o=new bs,a=new ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){let g=d.clippingPlanes,v=d.clipIntersection,x=d.clipShadows,m=n.get(d);if(!s||g===null||g.length===0||r&&!x)r?h(null):c();else{let _=r?0:i,E=_*4,M=m.clippingState||null;l.value=M,M=h(g,f,E,p);for(let D=0;D!==E;++D)M[D]=t[D];m.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,p,g){let v=d!==null?d.length:0,x=null;if(v!==0){if(x=l.value,g!==!0||x===null){let m=p+v*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(x===null||x.length<m)&&(x=new Float32Array(m));for(let E=0,M=p;E!==v;++E,M+=4)o.copy(d[E]).applyMatrix4(_,a),o.normal.toArray(x,M),x[M+3]=o.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}function X2(n){let e=new WeakMap;function t(o,a){return a===pd?o.mapping=Go:a===md&&(o.mapping=Vo),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===pd||a===md)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Zd(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Xo=class extends qc{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ko=4,bm=[.125,.215,.35,.446,.526,.582],zr=20,qu=new Xo,wm=new he,Yu=null,Zu=0,Ku=0,Ju=!1,kr=(1+Math.sqrt(5))/2,Io=1/kr,Sm=[new w(-kr,Io,0),new w(kr,Io,0),new w(-Io,0,kr),new w(Io,0,kr),new w(0,kr,-Io),new w(0,kr,Io),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],qo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Yu=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),Ku=this._renderer.getActiveMipmapLevel(),Ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Am(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yu,Zu,Ku),this._renderer.xr.enabled=Ju,e.scissorTest=!1,bc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Go||e.mapping===Vo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yu=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),Ku=this._renderer.getActiveMipmapLevel(),Ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qi,minFilter:qi,generateMipmaps:!1,type:Jn,format:oi,colorSpace:ea,depthBuffer:!1},s=Tm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tm(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=q2(r)),this._blurMaterial=Y2(r,e,t)}return s}_compileMaterial(e){let t=new ne(this._lodPlanes[0],e);this._renderer.compile(t,qu)}_sceneToCubeUV(e,t,i,s){let a=new un(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(wm),h.toneMapping=tr,h.autoClear=!1;let p=new Ue({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),g=new ne(new Ye,p),v=!1,x=e.background;x?x.isColor&&(p.color.copy(x),e.background=null,v=!0):(p.color.copy(wm),v=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):_===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let E=this._cubeSize;bc(s,_*E,m>2?E:0,E,E),h.setRenderTarget(s),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=x}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Go||e.mapping===Vo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Am()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;bc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,qu)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Sm[(s-r-1)%Sm.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new ne(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*zr-1),v=r/g,x=isFinite(r)?1+Math.floor(h*v):zr;x>zr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${zr}`);let m=[],_=0;for(let C=0;C<zr;++C){let P=C/v,S=Math.exp(-P*P/2);m.push(S),C===0?_+=S:C<x&&(_+=2*S)}for(let C=0;C<m.length;C++)m[C]=m[C]/_;f.envMap.value=e.texture,f.samples.value=x,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;let M=this._sizeLods[s],D=3*M*(s>E-ko?s-E+ko:0),A=4*(this._cubeSize-M);bc(t,D,A,3*M,2*M),l.setRenderTarget(t),l.render(d,qu)}};function q2(n){let e=[],t=[],i=[],s=n,r=n-ko+1+bm.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-ko?l=bm[o-n+ko-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,v=3,x=2,m=1,_=new Float32Array(v*g*p),E=new Float32Array(x*g*p),M=new Float32Array(m*g*p);for(let A=0;A<p;A++){let C=A%3*2/3-1,P=A>2?0:-1,S=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];_.set(S,v*g*A),E.set(f,x*g*A);let b=[A,A,A,A,A,A];M.set(b,m*g*A)}let D=new Rt;D.setAttribute("position",new on(_,v)),D.setAttribute("uv",new on(E,x)),D.setAttribute("faceIndex",new on(M,m)),e.push(D),s>ko&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Tm(n,e,t){let i=new wn(n,e,t);return i.texture.mapping=hh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bc(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Y2(n,e,t){let i=new Float32Array(zr),s=new w(0,1,0);return new Ct({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xf(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Rm(){return new Ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xf(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Am(){return new Ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Xf(){return`

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
	`}function Z2(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===pd||l===md,h=l===Go||l===Vo;if(c||h){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new qo(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new qo(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function K2(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&ja("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function J2(n,e,t,i){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let v=f.morphAttributes[g];for(let x=0,m=v.length;x<m;x++)e.remove(v[x])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let v=p[g];for(let x=0,m=v.length;x<m;x++)e.update(v[x],n.ARRAY_BUFFER)}}function c(d){let f=[],p=d.index,g=d.attributes.position,v=0;if(p!==null){let _=p.array;v=p.version;for(let E=0,M=_.length;E<M;E+=3){let D=_[E+0],A=_[E+1],C=_[E+2];f.push(D,A,A,C,C,D)}}else if(g!==void 0){let _=g.array;v=g.version;for(let E=0,M=_.length/3-1;E<M;E+=3){let D=E+0,A=E+1,C=E+2;f.push(D,A,A,C,C,D)}}else return;let x=new(vg(f)?Xc:$c)(f,1);x.version=v;let m=r.get(d);m&&e.remove(m),r.set(d,x)}function h(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function j2(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),t.update(p,i,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let x=0;for(let m=0;m<g;m++)x+=p[m];t.update(x,i,1)}function d(f,p,g,v){if(g===0)return;let x=e.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<f.length;m++)c(f[m]/o,p[m],v[m]);else{x.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,v,0,g);let m=0;for(let _=0;_<g;_++)m+=p[_]*v[_];t.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Q2(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function eE(n,e,t){let i=new WeakMap,s=new Ft;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==d){let S=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],E=0;p===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let M=a.attributes.position.count*E,D=1;M>e.maxTextureSize&&(D=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let A=new Float32Array(M*D*4*d),C=new Gc(A,M,D,d);C.type=Yi,C.needsUpdate=!0;let P=E*4;for(let b=0;b<d;b++){let U=x[b],O=m[b],F=_[b],V=M*D*4*b;for(let Q=0;Q<U.count;Q++){let $=Q*P;p===!0&&(s.fromBufferAttribute(U,Q),A[V+$+0]=s.x,A[V+$+1]=s.y,A[V+$+2]=s.z,A[V+$+3]=0),g===!0&&(s.fromBufferAttribute(O,Q),A[V+$+4]=s.x,A[V+$+5]=s.y,A[V+$+6]=s.z,A[V+$+7]=0),v===!0&&(s.fromBufferAttribute(F,Q),A[V+$+8]=s.x,A[V+$+9]=s.y,A[V+$+10]=s.z,A[V+$+11]=F.itemSize===4?s.w:1)}}f={count:d,texture:C,size:new te(M,D)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function tE(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Yo=class extends Wn{constructor(e,t,i,s,r,o,a,l,c,h=zo){if(h!==zo&&h!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===zo&&(i=Br),i===void 0&&h===sr&&(i=ir),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Eg=new Wn,Cm=new Yo(1,1),bg=new Gc,wg=new qd,Sg=new Yc,Pm=[],Im=[],Lm=new Float32Array(16),Dm=new Float32Array(9),Um=new Float32Array(4);function ta(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Pm[s];if(r===void 0&&(r=new Float32Array(s),Pm[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function vn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function dh(n,e){let t=Im[e];t===void 0&&(t=new Int32Array(e),Im[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function nE(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function iE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;n.uniform2fv(this.addr,e),yn(t,e)}}function sE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;n.uniform3fv(this.addr,e),yn(t,e)}}function rE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;n.uniform4fv(this.addr,e),yn(t,e)}}function oE(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(vn(t,i))return;Um.set(i),n.uniformMatrix2fv(this.addr,!1,Um),yn(t,i)}}function aE(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(vn(t,i))return;Dm.set(i),n.uniformMatrix3fv(this.addr,!1,Dm),yn(t,i)}}function lE(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(vn(t,i))return;Lm.set(i),n.uniformMatrix4fv(this.addr,!1,Lm),yn(t,i)}}function cE(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function hE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;n.uniform2iv(this.addr,e),yn(t,e)}}function uE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;n.uniform3iv(this.addr,e),yn(t,e)}}function dE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;n.uniform4iv(this.addr,e),yn(t,e)}}function fE(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function pE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;n.uniform2uiv(this.addr,e),yn(t,e)}}function mE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;n.uniform3uiv(this.addr,e),yn(t,e)}}function gE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;n.uniform4uiv(this.addr,e),yn(t,e)}}function xE(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Cm.compareFunction=xg,r=Cm):r=Eg,t.setTexture2D(e||r,s)}function vE(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||wg,s)}function yE(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Sg,s)}function ME(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||bg,s)}function _E(n){switch(n){case 5126:return nE;case 35664:return iE;case 35665:return sE;case 35666:return rE;case 35674:return oE;case 35675:return aE;case 35676:return lE;case 5124:case 35670:return cE;case 35667:case 35671:return hE;case 35668:case 35672:return uE;case 35669:case 35673:return dE;case 5125:return fE;case 36294:return pE;case 36295:return mE;case 36296:return gE;case 35678:case 36198:case 36298:case 36306:case 35682:return xE;case 35679:case 36299:case 36307:return vE;case 35680:case 36300:case 36308:case 36293:return yE;case 36289:case 36303:case 36311:case 36292:return ME}}function EE(n,e){n.uniform1fv(this.addr,e)}function bE(n,e){let t=ta(e,this.size,2);n.uniform2fv(this.addr,t)}function wE(n,e){let t=ta(e,this.size,3);n.uniform3fv(this.addr,t)}function SE(n,e){let t=ta(e,this.size,4);n.uniform4fv(this.addr,t)}function TE(n,e){let t=ta(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function RE(n,e){let t=ta(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function AE(n,e){let t=ta(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function CE(n,e){n.uniform1iv(this.addr,e)}function PE(n,e){n.uniform2iv(this.addr,e)}function IE(n,e){n.uniform3iv(this.addr,e)}function LE(n,e){n.uniform4iv(this.addr,e)}function DE(n,e){n.uniform1uiv(this.addr,e)}function UE(n,e){n.uniform2uiv(this.addr,e)}function NE(n,e){n.uniform3uiv(this.addr,e)}function HE(n,e){n.uniform4uiv(this.addr,e)}function kE(n,e,t){let i=this.cache,s=e.length,r=dh(t,s);vn(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Eg,r[o])}function zE(n,e,t){let i=this.cache,s=e.length,r=dh(t,s);vn(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||wg,r[o])}function OE(n,e,t){let i=this.cache,s=e.length,r=dh(t,s);vn(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Sg,r[o])}function FE(n,e,t){let i=this.cache,s=e.length,r=dh(t,s);vn(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||bg,r[o])}function BE(n){switch(n){case 5126:return EE;case 35664:return bE;case 35665:return wE;case 35666:return SE;case 35674:return TE;case 35675:return RE;case 35676:return AE;case 5124:case 35670:return CE;case 35667:case 35671:return PE;case 35668:case 35672:return IE;case 35669:case 35673:return LE;case 5125:return DE;case 36294:return UE;case 36295:return NE;case 36296:return HE;case 35678:case 36198:case 36298:case 36306:case 35682:return kE;case 35679:case 36299:case 36307:return zE;case 35680:case 36300:case 36308:case 36293:return OE;case 36289:case 36303:case 36311:case 36292:return FE}}var Kd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_E(t.type)}},Jd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=BE(t.type)}},jd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},ju=/(\w+)(\])?(\[|\.)?/g;function Nm(n,e){n.seq.push(e),n.map[e.id]=e}function GE(n,e,t){let i=n.name,s=i.length;for(ju.lastIndex=0;;){let r=ju.exec(i),o=ju.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Nm(t,c===void 0?new Kd(a,n,e):new Jd(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new jd(a),Nm(t,d)),t=d}}}var Fo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);GE(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Hm(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var VE=37297,WE=0;function $E(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var km=new ft;function XE(n){St._getMatrix(km,St.workingColorSpace,n);let e=`mat3( ${km.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(n)){case uh:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function zm(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+$E(n.getShaderSource(e),o)}else return s}function qE(n,e){let t=XE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function YE(n,e){let t;switch(e){case If:t="Linear";break;case Lf:t="Reinhard";break;case Df:t="Cineon";break;case qr:t="ACESFilmic";break;case Uf:t="AgX";break;case Nf:t="Neutral";break;case uy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var wc=new w;function ZE(){St.getLuminanceCoefficients(wc);let n=wc.x.toFixed(4),e=wc.y.toFixed(4),t=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qa).join(`
`)}function JE(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function jE(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Qa(n){return n!==""}function Om(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var QE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qd(n){return n.replace(QE,tb)}var eb=new Map;function tb(n,e){let t=gt[e];if(t===void 0){let i=eb.get(e);if(i!==void 0)t=gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qd(t)}var nb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bm(n){return n.replace(nb,ib)}function ib(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gm(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function sb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===rg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Cf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Es&&(e="SHADOWMAP_TYPE_VSM"),e}function rb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Go:case Vo:e="ENVMAP_TYPE_CUBE";break;case hh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ob(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Vo:e="ENVMAP_MODE_REFRACTION";break}return e}function ab(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case og:e="ENVMAP_BLENDING_MULTIPLY";break;case cy:e="ENVMAP_BLENDING_MIX";break;case hy:e="ENVMAP_BLENDING_ADD";break}return e}function lb(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function cb(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=sb(t),c=rb(t),h=ob(t),d=ab(t),f=lb(t),p=KE(t),g=JE(r),v=s.createProgram(),x,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qa).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qa).join(`
`),m.length>0&&(m+=`
`)):(x=[Gm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qa).join(`
`),m=[Gm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tr?"#define TONE_MAPPING":"",t.toneMapping!==tr?gt.tonemapping_pars_fragment:"",t.toneMapping!==tr?YE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,qE("linearToOutputTexel",t.outputColorSpace),ZE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qa).join(`
`)),o=Qd(o),o=Om(o,t),o=Fm(o,t),a=Qd(a),a=Om(a,t),a=Fm(a,t),o=Bm(o),a=Bm(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,x=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===tm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=_+x+o,M=_+m+a,D=Hm(s,s.VERTEX_SHADER,E),A=Hm(s,s.FRAGMENT_SHADER,M);s.attachShader(v,D),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(U){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(v).trim(),F=s.getShaderInfoLog(D).trim(),V=s.getShaderInfoLog(A).trim(),Q=!0,$=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,D,A);else{let se=zm(s,D,"vertex"),X=zm(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+O+`
`+se+`
`+X)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||V==="")&&($=!1);$&&(U.diagnostics={runnable:Q,programLog:O,vertexShader:{log:F,prefix:x},fragmentShader:{log:V,prefix:m}})}s.deleteShader(D),s.deleteShader(A),P=new Fo(s,v),S=jE(s,v)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,VE)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=WE++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=A,this}var hb=0,ef=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new tf(e),t.set(e,i)),i}},tf=class{constructor(e){this.id=hb++,this.code=e,this.usedTimes=0}};function ub(n,e,t,i,s,r,o){let a=new Wc,l=new ef,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function x(S,b,U,O,F){let V=O.fog,Q=F.geometry,$=S.isMeshStandardMaterial?O.environment:null,se=(S.isMeshStandardMaterial?t:e).get(S.envMap||$),X=se&&se.mapping===hh?se.image.height:null,ae=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let Se=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ke=Se!==void 0?Se.length:0,rt=0;Q.morphAttributes.position!==void 0&&(rt=1),Q.morphAttributes.normal!==void 0&&(rt=2),Q.morphAttributes.color!==void 0&&(rt=3);let It,K,le,De;if(ae){let Wt=Xi[ae];It=Wt.vertexShader,K=Wt.fragmentShader}else It=S.vertexShader,K=S.fragmentShader,l.update(S),le=l.getVertexShaderID(S),De=l.getFragmentShaderID(S);let pe=n.getRenderTarget(),$e=n.state.buffers.depth.getReversed(),Je=F.isInstancedMesh===!0,tt=F.isBatchedMesh===!0,Kt=!!S.map,_t=!!S.matcap,jt=!!se,H=!!S.aoMap,An=!!S.lightMap,vt=!!S.bumpMap,yt=!!S.normalMap,Ze=!!S.displacementMap,Vt=!!S.emissiveMap,qe=!!S.metalnessMap,I=!!S.roughnessMap,T=S.anisotropy>0,B=S.clearcoat>0,j=S.dispersion>0,ie=S.iridescence>0,J=S.sheen>0,Oe=S.transmission>0,ye=T&&!!S.anisotropyMap,Te=B&&!!S.clearcoatMap,xt=B&&!!S.clearcoatNormalMap,oe=B&&!!S.clearcoatRoughnessMap,Pe=ie&&!!S.iridescenceMap,je=ie&&!!S.iridescenceThicknessMap,et=J&&!!S.sheenColorMap,Ie=J&&!!S.sheenRoughnessMap,bt=!!S.specularMap,nt=!!S.specularColorMap,Lt=!!S.specularIntensityMap,N=Oe&&!!S.transmissionMap,ge=Oe&&!!S.thicknessMap,q=!!S.gradientMap,ee=!!S.alphaMap,Ce=S.alphaTest>0,Re=!!S.alphaHash,ut=!!S.extensions,cn=tr;S.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(cn=n.toneMapping);let Cn={shaderID:ae,shaderType:S.type,shaderName:S.name,vertexShader:It,fragmentShader:K,defines:S.defines,customVertexShaderID:le,customFragmentShaderID:De,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:tt,batchingColor:tt&&F._colorsTexture!==null,instancing:Je,instancingColor:Je&&F.instanceColor!==null,instancingMorph:Je&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:ea,alphaToCoverage:!!S.alphaToCoverage,map:Kt,matcap:_t,envMap:jt,envMapMode:jt&&se.mapping,envMapCubeUVHeight:X,aoMap:H,lightMap:An,bumpMap:vt,normalMap:yt,displacementMap:f&&Ze,emissiveMap:Vt,normalMapObjectSpace:yt&&S.normalMapType===my,normalMapTangentSpace:yt&&S.normalMapType===Vf,metalnessMap:qe,roughnessMap:I,anisotropy:T,anisotropyMap:ye,clearcoat:B,clearcoatMap:Te,clearcoatNormalMap:xt,clearcoatRoughnessMap:oe,dispersion:j,iridescence:ie,iridescenceMap:Pe,iridescenceThicknessMap:je,sheen:J,sheenColorMap:et,sheenRoughnessMap:Ie,specularMap:bt,specularColorMap:nt,specularIntensityMap:Lt,transmission:Oe,transmissionMap:N,thicknessMap:ge,gradientMap:q,opaque:S.transparent===!1&&S.blending===gi&&S.alphaToCoverage===!1,alphaMap:ee,alphaTest:Ce,alphaHash:Re,combine:S.combine,mapUv:Kt&&v(S.map.channel),aoMapUv:H&&v(S.aoMap.channel),lightMapUv:An&&v(S.lightMap.channel),bumpMapUv:vt&&v(S.bumpMap.channel),normalMapUv:yt&&v(S.normalMap.channel),displacementMapUv:Ze&&v(S.displacementMap.channel),emissiveMapUv:Vt&&v(S.emissiveMap.channel),metalnessMapUv:qe&&v(S.metalnessMap.channel),roughnessMapUv:I&&v(S.roughnessMap.channel),anisotropyMapUv:ye&&v(S.anisotropyMap.channel),clearcoatMapUv:Te&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:xt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:je&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:et&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&v(S.sheenRoughnessMap.channel),specularMapUv:bt&&v(S.specularMap.channel),specularColorMapUv:nt&&v(S.specularColorMap.channel),specularIntensityMapUv:Lt&&v(S.specularIntensityMap.channel),transmissionMapUv:N&&v(S.transmissionMap.channel),thicknessMapUv:ge&&v(S.thicknessMap.channel),alphaMapUv:ee&&v(S.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(yt||T),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Q.attributes.uv&&(Kt||ee),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:$e,skinning:F.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:ke,morphTextureStride:rt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:cn,decodeVideoTexture:Kt&&S.map.isVideoTexture===!0&&St.getTransfer(S.map.colorSpace)===Ot,decodeVideoTextureEmissive:Vt&&S.emissiveMap.isVideoTexture===!0&&St.getTransfer(S.emissiveMap.colorSpace)===Ot,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Tt,flipSided:S.side===Ln,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ut&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&S.extensions.multiDraw===!0||tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Cn.vertexUv1s=c.has(1),Cn.vertexUv2s=c.has(2),Cn.vertexUv3s=c.has(3),c.clear(),Cn}function m(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let U in S.defines)b.push(U),b.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(_(b,S),E(b,S),b.push(n.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function _(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function E(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function M(S){let b=g[S.type],U;if(b){let O=Xi[b];U=jn.clone(O.uniforms)}else U=S.uniforms;return U}function D(S,b){let U;for(let O=0,F=h.length;O<F;O++){let V=h[O];if(V.cacheKey===b){U=V,++U.usedTimes;break}}return U===void 0&&(U=new cb(n,b,S,r),h.push(U)),U}function A(S){if(--S.usedTimes===0){let b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function C(S){l.remove(S)}function P(){l.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:M,acquireProgram:D,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:P}}function db(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function fb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Vm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wm(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,f,p,g,v,x){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:x},n[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=v,m.group=x),e++,m}function a(d,f,p,g,v,x){let m=o(d,f,p,g,v,x);p.transmission>0?i.push(m):p.transparent===!0?s.push(m):t.push(m)}function l(d,f,p,g,v,x){let m=o(d,f,p,g,v,x);p.transmission>0?i.unshift(m):p.transparent===!0?s.unshift(m):t.unshift(m)}function c(d,f){t.length>1&&t.sort(d||fb),i.length>1&&i.sort(f||Vm),s.length>1&&s.sort(f||Vm)}function h(){for(let d=e,f=n.length;d<f;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function pb(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Wm,n.set(i,[o])):s>=r.length?(o=new Wm,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function mb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new he};break;case"SpotLight":t={position:new w,direction:new w,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new he,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new he,groundColor:new he};break;case"RectAreaLight":t={color:new he,position:new w,halfWidth:new w,halfHeight:new w};break}return n[e.id]=t,t}}}function gb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var xb=0;function vb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function yb(n){let e=new mb,t=gb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new w);let s=new w,r=new pt,o=new pt;function a(c){let h=0,d=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,v=0,x=0,m=0,_=0,E=0,M=0,D=0,A=0,C=0;c.sort(vb);for(let S=0,b=c.length;S<b;S++){let U=c[S],O=U.color,F=U.intensity,V=U.distance,Q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=O.r*F,d+=O.g*F,f+=O.b*F;else if(U.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(U.sh.coefficients[$],F);C++}else if(U.isDirectionalLight){let $=e.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let se=U.shadow,X=t.get(U);X.shadowIntensity=se.intensity,X.shadowBias=se.bias,X.shadowNormalBias=se.normalBias,X.shadowRadius=se.radius,X.shadowMapSize=se.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=U.shadow.matrix,_++}i.directional[p]=$,p++}else if(U.isSpotLight){let $=e.get(U);$.position.setFromMatrixPosition(U.matrixWorld),$.color.copy(O).multiplyScalar(F),$.distance=V,$.coneCos=Math.cos(U.angle),$.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),$.decay=U.decay,i.spot[v]=$;let se=U.shadow;if(U.map&&(i.spotLightMap[D]=U.map,D++,se.updateMatrices(U),U.castShadow&&A++),i.spotLightMatrix[v]=se.matrix,U.castShadow){let X=t.get(U);X.shadowIntensity=se.intensity,X.shadowBias=se.bias,X.shadowNormalBias=se.normalBias,X.shadowRadius=se.radius,X.shadowMapSize=se.mapSize,i.spotShadow[v]=X,i.spotShadowMap[v]=Q,M++}v++}else if(U.isRectAreaLight){let $=e.get(U);$.color.copy(O).multiplyScalar(F),$.halfWidth.set(U.width*.5,0,0),$.halfHeight.set(0,U.height*.5,0),i.rectArea[x]=$,x++}else if(U.isPointLight){let $=e.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),$.distance=U.distance,$.decay=U.decay,U.castShadow){let se=U.shadow,X=t.get(U);X.shadowIntensity=se.intensity,X.shadowBias=se.bias,X.shadowNormalBias=se.normalBias,X.shadowRadius=se.radius,X.shadowMapSize=se.mapSize,X.shadowCameraNear=se.camera.near,X.shadowCameraFar=se.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=U.shadow.matrix,E++}i.point[g]=$,g++}else if(U.isHemisphereLight){let $=e.get(U);$.skyColor.copy(U.color).multiplyScalar(F),$.groundColor.copy(U.groundColor).multiplyScalar(F),i.hemi[m]=$,m++}}x>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;let P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==x||P.hemiLength!==m||P.numDirectionalShadows!==_||P.numPointShadows!==E||P.numSpotShadows!==M||P.numSpotMaps!==D||P.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=x,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=M+D-A,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,P.directionalLength=p,P.pointLength=g,P.spotLength=v,P.rectAreaLength=x,P.hemiLength=m,P.numDirectionalShadows=_,P.numPointShadows=E,P.numSpotShadows=M,P.numSpotMaps=D,P.numLightProbes=C,i.version=xb++)}function l(c,h){let d=0,f=0,p=0,g=0,v=0,x=h.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){let E=c[m];if(E.isDirectionalLight){let M=i.directional[d];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),d++}else if(E.isSpotLight){let M=i.spot[p];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),p++}else if(E.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(x),o.identity(),r.copy(E.matrixWorld),r.premultiply(x),o.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(x),f++}else if(E.isHemisphereLight){let M=i.hemi[v];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(x),v++}}}return{setup:a,setupView:l,state:i}}function $m(n){let e=new yb(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Mb(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new $m(n),e.set(s,[a])):r>=o.length?(a=new $m(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var nf=class extends Zi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=fy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},sf=class extends Zi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},_b=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eb=`uniform sampler2D shadow_pass;
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
}`;function bb(n,e,t){let i=new ol,s=new te,r=new te,o=new Ft,a=new nf({depthPacking:py}),l=new sf,c={},h=t.maxTextureSize,d={[nr]:Ln,[Ln]:nr,[Tt]:Tt},f=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:_b,fragmentShader:Eb}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Rt;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ne(g,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rg;let m=this.type;this.render=function(A,C,P){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||A.length===0)return;let S=n.getRenderTarget(),b=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),O=n.state;O.setBlending(xn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let F=m!==Es&&this.type===Es,V=m===Es&&this.type!==Es;for(let Q=0,$=A.length;Q<$;Q++){let se=A[Q],X=se.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ae=X.getFrameExtents();if(s.multiply(ae),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ae.x),s.x=r.x*ae.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ae.y),s.y=r.y*ae.y,X.mapSize.y=r.y)),X.map===null||F===!0||V===!0){let ke=this.type!==Es?{minFilter:bn,magFilter:bn}:{};X.map!==null&&X.map.dispose(),X.map=new wn(s.x,s.y,ke),X.map.texture.name=se.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();let Se=X.getViewportCount();for(let ke=0;ke<Se;ke++){let rt=X.getViewport(ke);o.set(r.x*rt.x,r.y*rt.y,r.x*rt.z,r.y*rt.w),O.viewport(o),X.updateMatrices(se,ke),i=X.getFrustum(),M(C,P,X.camera,se,this.type)}X.isPointLightShadow!==!0&&this.type===Es&&_(X,P),X.needsUpdate=!1}m=this.type,x.needsUpdate=!1,n.setRenderTarget(S,b,U)};function _(A,C){let P=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new wn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,P,f,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,P,p,v,null)}function E(A,C,P,S){let b=null,U=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)b=U;else if(b=P.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let O=b.uuid,F=C.uuid,V=c[O];V===void 0&&(V={},c[O]=V);let Q=V[F];Q===void 0&&(Q=b.clone(),V[F]=Q,C.addEventListener("dispose",D)),b=Q}if(b.visible=C.visible,b.wireframe=C.wireframe,S===Es?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:d[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let O=n.properties.get(b);O.light=P}return b}function M(A,C,P,S,b){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===Es)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);let F=e.update(A),V=A.material;if(Array.isArray(V)){let Q=F.groups;for(let $=0,se=Q.length;$<se;$++){let X=Q[$],ae=V[X.materialIndex];if(ae&&ae.visible){let Se=E(A,ae,S,b);A.onBeforeShadow(n,A,C,P,F,Se,X),n.renderBufferDirect(P,null,F,Se,A,X),A.onAfterShadow(n,A,C,P,F,Se,X)}}}else if(V.visible){let Q=E(A,V,S,b);A.onBeforeShadow(n,A,C,P,F,Q,null),n.renderBufferDirect(P,null,F,Q,A,null),A.onAfterShadow(n,A,C,P,F,Q,null)}}let O=A.children;for(let F=0,V=O.length;F<V;F++)M(O[F],C,P,S,b)}function D(A){A.target.removeEventListener("dispose",D);for(let P in c){let S=c[P],b=A.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var wb={[ad]:ld,[cd]:dd,[hd]:fd,[Bo]:ud,[ld]:ad,[dd]:cd,[fd]:hd,[ud]:Bo};function Sb(n,e){function t(){let N=!1,ge=new Ft,q=null,ee=new Ft(0,0,0,0);return{setMask:function(Ce){q!==Ce&&!N&&(n.colorMask(Ce,Ce,Ce,Ce),q=Ce)},setLocked:function(Ce){N=Ce},setClear:function(Ce,Re,ut,cn,Cn){Cn===!0&&(Ce*=cn,Re*=cn,ut*=cn),ge.set(Ce,Re,ut,cn),ee.equals(ge)===!1&&(n.clearColor(Ce,Re,ut,cn),ee.copy(ge))},reset:function(){N=!1,q=null,ee.set(-1,0,0,0)}}}function i(){let N=!1,ge=!1,q=null,ee=null,Ce=null;return{setReversed:function(Re){if(ge!==Re){let ut=e.get("EXT_clip_control");ge?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT);let cn=Ce;Ce=null,this.setClear(cn)}ge=Re},getReversed:function(){return ge},setTest:function(Re){Re?pe(n.DEPTH_TEST):$e(n.DEPTH_TEST)},setMask:function(Re){q!==Re&&!N&&(n.depthMask(Re),q=Re)},setFunc:function(Re){if(ge&&(Re=wb[Re]),ee!==Re){switch(Re){case ad:n.depthFunc(n.NEVER);break;case ld:n.depthFunc(n.ALWAYS);break;case cd:n.depthFunc(n.LESS);break;case Bo:n.depthFunc(n.LEQUAL);break;case hd:n.depthFunc(n.EQUAL);break;case ud:n.depthFunc(n.GEQUAL);break;case dd:n.depthFunc(n.GREATER);break;case fd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=Re}},setLocked:function(Re){N=Re},setClear:function(Re){Ce!==Re&&(ge&&(Re=1-Re),n.clearDepth(Re),Ce=Re)},reset:function(){N=!1,q=null,ee=null,Ce=null,ge=!1}}}function s(){let N=!1,ge=null,q=null,ee=null,Ce=null,Re=null,ut=null,cn=null,Cn=null;return{setTest:function(Wt){N||(Wt?pe(n.STENCIL_TEST):$e(n.STENCIL_TEST))},setMask:function(Wt){ge!==Wt&&!N&&(n.stencilMask(Wt),ge=Wt)},setFunc:function(Wt,Ci,ms){(q!==Wt||ee!==Ci||Ce!==ms)&&(n.stencilFunc(Wt,Ci,ms),q=Wt,ee=Ci,Ce=ms)},setOp:function(Wt,Ci,ms){(Re!==Wt||ut!==Ci||cn!==ms)&&(n.stencilOp(Wt,Ci,ms),Re=Wt,ut=Ci,cn=ms)},setLocked:function(Wt){N=Wt},setClear:function(Wt){Cn!==Wt&&(n.clearStencil(Wt),Cn=Wt)},reset:function(){N=!1,ge=null,q=null,ee=null,Ce=null,Re=null,ut=null,cn=null,Cn=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,p=[],g=null,v=!1,x=null,m=null,_=null,E=null,M=null,D=null,A=null,C=new he(0,0,0),P=0,S=!1,b=null,U=null,O=null,F=null,V=null,Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,se=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=se>=1):X.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=se>=2);let ae=null,Se={},ke=n.getParameter(n.SCISSOR_BOX),rt=n.getParameter(n.VIEWPORT),It=new Ft().fromArray(ke),K=new Ft().fromArray(rt);function le(N,ge,q,ee){let Ce=new Uint8Array(4),Re=n.createTexture();n.bindTexture(N,Re),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ut=0;ut<q;ut++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,ee,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(ge+ut,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return Re}let De={};De[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),De[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),De[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),De[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(n.DEPTH_TEST),o.setFunc(Bo),vt(!1),yt(Y0),pe(n.CULL_FACE),H(xn);function pe(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function $e(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function Je(N,ge){return d[N]!==ge?(n.bindFramebuffer(N,ge),d[N]=ge,N===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ge),N===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function tt(N,ge){let q=p,ee=!1;if(N){q=f.get(ge),q===void 0&&(q=[],f.set(ge,q));let Ce=N.textures;if(q.length!==Ce.length||q[0]!==n.COLOR_ATTACHMENT0){for(let Re=0,ut=Ce.length;Re<ut;Re++)q[Re]=n.COLOR_ATTACHMENT0+Re;q.length=Ce.length,ee=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,ee=!0);ee&&n.drawBuffers(q)}function Kt(N){return g!==N?(n.useProgram(N),g=N,!0):!1}let _t={[mi]:n.FUNC_ADD,[Zv]:n.FUNC_SUBTRACT,[Kv]:n.FUNC_REVERSE_SUBTRACT};_t[Jv]=n.MIN,_t[jv]=n.MAX;let jt={[Qo]:n.ZERO,[Qv]:n.ONE,[ey]:n.SRC_COLOR,[rd]:n.SRC_ALPHA,[sy]:n.SRC_ALPHA_SATURATE,[ch]:n.DST_COLOR,[lh]:n.DST_ALPHA,[ty]:n.ONE_MINUS_SRC_COLOR,[od]:n.ONE_MINUS_SRC_ALPHA,[iy]:n.ONE_MINUS_DST_COLOR,[ny]:n.ONE_MINUS_DST_ALPHA,[ry]:n.CONSTANT_COLOR,[oy]:n.ONE_MINUS_CONSTANT_COLOR,[ay]:n.CONSTANT_ALPHA,[ly]:n.ONE_MINUS_CONSTANT_ALPHA};function H(N,ge,q,ee,Ce,Re,ut,cn,Cn,Wt){if(N===xn){v===!0&&($e(n.BLEND),v=!1);return}if(v===!1&&(pe(n.BLEND),v=!0),N!==Pf){if(N!==x||Wt!==S){if((m!==mi||M!==mi)&&(n.blendEquation(n.FUNC_ADD),m=mi,M=mi),Wt)switch(N){case gi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ze:n.blendFunc(n.ONE,n.ONE);break;case Z0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case K0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case gi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ze:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Z0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case K0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}_=null,E=null,D=null,A=null,C.set(0,0,0),P=0,x=N,S=Wt}return}Ce=Ce||ge,Re=Re||q,ut=ut||ee,(ge!==m||Ce!==M)&&(n.blendEquationSeparate(_t[ge],_t[Ce]),m=ge,M=Ce),(q!==_||ee!==E||Re!==D||ut!==A)&&(n.blendFuncSeparate(jt[q],jt[ee],jt[Re],jt[ut]),_=q,E=ee,D=Re,A=ut),(cn.equals(C)===!1||Cn!==P)&&(n.blendColor(cn.r,cn.g,cn.b,Cn),C.copy(cn),P=Cn),x=N,S=!1}function An(N,ge){N.side===Tt?$e(n.CULL_FACE):pe(n.CULL_FACE);let q=N.side===Ln;ge&&(q=!q),vt(q),N.blending===gi&&N.transparent===!1?H(xn):H(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let ee=N.stencilWrite;a.setTest(ee),ee&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Vt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):$e(n.SAMPLE_ALPHA_TO_COVERAGE)}function vt(N){b!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),b=N)}function yt(N){N!==qv?(pe(n.CULL_FACE),N!==U&&(N===Y0?n.cullFace(n.BACK):N===Yv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):$e(n.CULL_FACE),U=N}function Ze(N){N!==O&&($&&n.lineWidth(N),O=N)}function Vt(N,ge,q){N?(pe(n.POLYGON_OFFSET_FILL),(F!==ge||V!==q)&&(n.polygonOffset(ge,q),F=ge,V=q)):$e(n.POLYGON_OFFSET_FILL)}function qe(N){N?pe(n.SCISSOR_TEST):$e(n.SCISSOR_TEST)}function I(N){N===void 0&&(N=n.TEXTURE0+Q-1),ae!==N&&(n.activeTexture(N),ae=N)}function T(N,ge,q){q===void 0&&(ae===null?q=n.TEXTURE0+Q-1:q=ae);let ee=Se[q];ee===void 0&&(ee={type:void 0,texture:void 0},Se[q]=ee),(ee.type!==N||ee.texture!==ge)&&(ae!==q&&(n.activeTexture(q),ae=q),n.bindTexture(N,ge||De[N]),ee.type=N,ee.texture=ge)}function B(){let N=Se[ae];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Oe(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function je(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(N){It.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),It.copy(N))}function Ie(N){K.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),K.copy(N))}function bt(N,ge){let q=c.get(ge);q===void 0&&(q=new WeakMap,c.set(ge,q));let ee=q.get(N);ee===void 0&&(ee=n.getUniformBlockIndex(ge,N.name),q.set(N,ee))}function nt(N,ge){let ee=c.get(ge).get(N);l.get(ge)!==ee&&(n.uniformBlockBinding(ge,ee,N.__bindingPointIndex),l.set(ge,ee))}function Lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ae=null,Se={},d={},f=new WeakMap,p=[],g=null,v=!1,x=null,m=null,_=null,E=null,M=null,D=null,A=null,C=new he(0,0,0),P=0,S=!1,b=null,U=null,O=null,F=null,V=null,It.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pe,disable:$e,bindFramebuffer:Je,drawBuffers:tt,useProgram:Kt,setBlending:H,setMaterial:An,setFlipSided:vt,setCullFace:yt,setLineWidth:Ze,setPolygonOffset:Vt,setScissorTest:qe,activeTexture:I,bindTexture:T,unbindTexture:B,compressedTexImage2D:j,compressedTexImage3D:ie,texImage2D:Pe,texImage3D:je,updateUBOMapping:bt,uniformBlockBinding:nt,texStorage2D:xt,texStorage3D:oe,texSubImage2D:J,texSubImage3D:Oe,compressedTexSubImage2D:ye,compressedTexSubImage3D:Te,scissor:et,viewport:Ie,reset:Lt}}function Xm(n,e,t,i){let s=Tb(i);switch(t){case ug:return n*e;case fg:return n*e;case pg:return n*e*2;case Of:return n*e/s.components*s.byteLength;case Ff:return n*e/s.components*s.byteLength;case mg:return n*e*2/s.components*s.byteLength;case Bf:return n*e*2/s.components*s.byteLength;case dg:return n*e*3/s.components*s.byteLength;case oi:return n*e*4/s.components*s.byteLength;case Gf:return n*e*4/s.components*s.byteLength;case Dc:case Uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Nc:case Hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vd:case Md:return Math.max(n,16)*Math.max(e,8)/4;case xd:case yd:return Math.max(n,8)*Math.max(e,8)/2;case _d:case Ed:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case bd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Td:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Cd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Id:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ld:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ud:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Nd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Hd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case kd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case kc:case zd:case Od:return Math.ceil(n/4)*Math.ceil(e/4)*16;case gg:case Fd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Bd:case Gd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tb(n){switch(n){case Kn:case lg:return{byteLength:1,components:1};case rl:case cg:case Jn:return{byteLength:2,components:1};case kf:case zf:return{byteLength:2,components:4};case Br:case Hf:case Yi:return{byteLength:4,components:1};case hg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Rb(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,T){return p?new OffscreenCanvas(I,T):Fc("canvas")}function v(I,T,B){let j=1,ie=qe(I);if((ie.width>B||ie.height>B)&&(j=B/Math.max(ie.width,ie.height)),j<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let J=Math.floor(j*ie.width),Oe=Math.floor(j*ie.height);d===void 0&&(d=g(J,Oe));let ye=T?g(J,Oe):d;return ye.width=J,ye.height=Oe,ye.getContext("2d").drawImage(I,0,0,J,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+J+"x"+Oe+")."),ye}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),I;return I}function x(I){return I.generateMipmaps}function m(I){n.generateMipmap(I)}function _(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(I,T,B,j,ie=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let J=T;if(T===n.RED&&(B===n.FLOAT&&(J=n.R32F),B===n.HALF_FLOAT&&(J=n.R16F),B===n.UNSIGNED_BYTE&&(J=n.R8)),T===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.R8UI),B===n.UNSIGNED_SHORT&&(J=n.R16UI),B===n.UNSIGNED_INT&&(J=n.R32UI),B===n.BYTE&&(J=n.R8I),B===n.SHORT&&(J=n.R16I),B===n.INT&&(J=n.R32I)),T===n.RG&&(B===n.FLOAT&&(J=n.RG32F),B===n.HALF_FLOAT&&(J=n.RG16F),B===n.UNSIGNED_BYTE&&(J=n.RG8)),T===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RG8UI),B===n.UNSIGNED_SHORT&&(J=n.RG16UI),B===n.UNSIGNED_INT&&(J=n.RG32UI),B===n.BYTE&&(J=n.RG8I),B===n.SHORT&&(J=n.RG16I),B===n.INT&&(J=n.RG32I)),T===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RGB8UI),B===n.UNSIGNED_SHORT&&(J=n.RGB16UI),B===n.UNSIGNED_INT&&(J=n.RGB32UI),B===n.BYTE&&(J=n.RGB8I),B===n.SHORT&&(J=n.RGB16I),B===n.INT&&(J=n.RGB32I)),T===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),B===n.UNSIGNED_INT&&(J=n.RGBA32UI),B===n.BYTE&&(J=n.RGBA8I),B===n.SHORT&&(J=n.RGBA16I),B===n.INT&&(J=n.RGBA32I)),T===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),T===n.RGBA){let Oe=ie?uh:St.getTransfer(j);B===n.FLOAT&&(J=n.RGBA32F),B===n.HALF_FLOAT&&(J=n.RGBA16F),B===n.UNSIGNED_BYTE&&(J=Oe===Ot?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function M(I,T){let B;return I?T===null||T===Br||T===ir?B=n.DEPTH24_STENCIL8:T===Yi?B=n.DEPTH32F_STENCIL8:T===rl&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Br||T===ir?B=n.DEPTH_COMPONENT24:T===Yi?B=n.DEPTH_COMPONENT32F:T===rl&&(B=n.DEPTH_COMPONENT16),B}function D(I,T){return x(I)===!0||I.isFramebufferTexture&&I.minFilter!==bn&&I.minFilter!==qi?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function A(I){let T=I.target;T.removeEventListener("dispose",A),P(T),T.isVideoTexture&&h.delete(T)}function C(I){let T=I.target;T.removeEventListener("dispose",C),b(T)}function P(I){let T=i.get(I);if(T.__webglInit===void 0)return;let B=I.source,j=f.get(B);if(j){let ie=j[T.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&S(I),Object.keys(j).length===0&&f.delete(B)}i.remove(I)}function S(I){let T=i.get(I);n.deleteTexture(T.__webglTexture);let B=I.source,j=f.get(B);delete j[T.__cacheKey],o.memory.textures--}function b(I){let T=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(T.__webglFramebuffer[j]))for(let ie=0;ie<T.__webglFramebuffer[j].length;ie++)n.deleteFramebuffer(T.__webglFramebuffer[j][ie]);else n.deleteFramebuffer(T.__webglFramebuffer[j]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[j])}else{if(Array.isArray(T.__webglFramebuffer))for(let j=0;j<T.__webglFramebuffer.length;j++)n.deleteFramebuffer(T.__webglFramebuffer[j]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let j=0;j<T.__webglColorRenderbuffer.length;j++)T.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[j]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let B=I.textures;for(let j=0,ie=B.length;j<ie;j++){let J=i.get(B[j]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(B[j])}i.remove(I)}let U=0;function O(){U=0}function F(){let I=U;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),U+=1,I}function V(I){let T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function Q(I,T){let B=i.get(I);if(I.isVideoTexture&&Ze(I),I.isRenderTargetTexture===!1&&I.version>0&&B.__version!==I.version){let j=I.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(B,I,T);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+T)}function $(I,T){let B=i.get(I);if(I.version>0&&B.__version!==I.version){K(B,I,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+T)}function se(I,T){let B=i.get(I);if(I.version>0&&B.__version!==I.version){K(B,I,T);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+T)}function X(I,T){let B=i.get(I);if(I.version>0&&B.__version!==I.version){le(B,I,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+T)}let ae={[Vn]:n.REPEAT,[Or]:n.CLAMP_TO_EDGE,[gd]:n.MIRRORED_REPEAT},Se={[bn]:n.NEAREST,[dy]:n.NEAREST_MIPMAP_NEAREST,[sc]:n.NEAREST_MIPMAP_LINEAR,[qi]:n.LINEAR,[Su]:n.LINEAR_MIPMAP_NEAREST,[Fr]:n.LINEAR_MIPMAP_LINEAR},ke={[gy]:n.NEVER,[Ey]:n.ALWAYS,[xy]:n.LESS,[xg]:n.LEQUAL,[vy]:n.EQUAL,[_y]:n.GEQUAL,[yy]:n.GREATER,[My]:n.NOTEQUAL};function rt(I,T){if(T.type===Yi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===qi||T.magFilter===Su||T.magFilter===sc||T.magFilter===Fr||T.minFilter===qi||T.minFilter===Su||T.minFilter===sc||T.minFilter===Fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,ae[T.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,ae[T.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,ae[T.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,Se[T.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,Se[T.minFilter]),T.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,ke[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===bn||T.minFilter!==sc&&T.minFilter!==Fr||T.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function It(I,T){let B=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",A));let j=T.source,ie=f.get(j);ie===void 0&&(ie={},f.set(j,ie));let J=V(T);if(J!==I.__cacheKey){ie[J]===void 0&&(ie[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ie[J].usedTimes++;let Oe=ie[I.__cacheKey];Oe!==void 0&&(ie[I.__cacheKey].usedTimes--,Oe.usedTimes===0&&S(T)),I.__cacheKey=J,I.__webglTexture=ie[J].texture}return B}function K(I,T,B){let j=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(j=n.TEXTURE_3D);let ie=It(I,T),J=T.source;t.bindTexture(j,I.__webglTexture,n.TEXTURE0+B);let Oe=i.get(J);if(J.version!==Oe.__version||ie===!0){t.activeTexture(n.TEXTURE0+B);let ye=St.getPrimaries(St.workingColorSpace),Te=T.colorSpace===Qs?null:St.getPrimaries(T.colorSpace),xt=T.colorSpace===Qs||ye===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let oe=v(T.image,!1,s.maxTextureSize);oe=Vt(T,oe);let Pe=r.convert(T.format,T.colorSpace),je=r.convert(T.type),et=E(T.internalFormat,Pe,je,T.colorSpace,T.isVideoTexture);rt(j,T);let Ie,bt=T.mipmaps,nt=T.isVideoTexture!==!0,Lt=Oe.__version===void 0||ie===!0,N=J.dataReady,ge=D(T,oe);if(T.isDepthTexture)et=M(T.format===sr,T.type),Lt&&(nt?t.texStorage2D(n.TEXTURE_2D,1,et,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,et,oe.width,oe.height,0,Pe,je,null));else if(T.isDataTexture)if(bt.length>0){nt&&Lt&&t.texStorage2D(n.TEXTURE_2D,ge,et,bt[0].width,bt[0].height);for(let q=0,ee=bt.length;q<ee;q++)Ie=bt[q],nt?N&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Ie.width,Ie.height,Pe,je,Ie.data):t.texImage2D(n.TEXTURE_2D,q,et,Ie.width,Ie.height,0,Pe,je,Ie.data);T.generateMipmaps=!1}else nt?(Lt&&t.texStorage2D(n.TEXTURE_2D,ge,et,oe.width,oe.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,Pe,je,oe.data)):t.texImage2D(n.TEXTURE_2D,0,et,oe.width,oe.height,0,Pe,je,oe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){nt&&Lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,et,bt[0].width,bt[0].height,oe.depth);for(let q=0,ee=bt.length;q<ee;q++)if(Ie=bt[q],T.format!==oi)if(Pe!==null)if(nt){if(N)if(T.layerUpdates.size>0){let Ce=Xm(Ie.width,Ie.height,T.format,T.type);for(let Re of T.layerUpdates){let ut=Ie.data.subarray(Re*Ce/Ie.data.BYTES_PER_ELEMENT,(Re+1)*Ce/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,Re,Ie.width,Ie.height,1,Pe,ut)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Ie.width,Ie.height,oe.depth,Pe,Ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,et,Ie.width,Ie.height,oe.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Ie.width,Ie.height,oe.depth,Pe,je,Ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,et,Ie.width,Ie.height,oe.depth,0,Pe,je,Ie.data)}else{nt&&Lt&&t.texStorage2D(n.TEXTURE_2D,ge,et,bt[0].width,bt[0].height);for(let q=0,ee=bt.length;q<ee;q++)Ie=bt[q],T.format!==oi?Pe!==null?nt?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,Ie.width,Ie.height,Pe,Ie.data):t.compressedTexImage2D(n.TEXTURE_2D,q,et,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?N&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Ie.width,Ie.height,Pe,je,Ie.data):t.texImage2D(n.TEXTURE_2D,q,et,Ie.width,Ie.height,0,Pe,je,Ie.data)}else if(T.isDataArrayTexture)if(nt){if(Lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,et,oe.width,oe.height,oe.depth),N)if(T.layerUpdates.size>0){let q=Xm(oe.width,oe.height,T.format,T.type);for(let ee of T.layerUpdates){let Ce=oe.data.subarray(ee*q/oe.data.BYTES_PER_ELEMENT,(ee+1)*q/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,oe.width,oe.height,1,Pe,je,Ce)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Pe,je,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,et,oe.width,oe.height,oe.depth,0,Pe,je,oe.data);else if(T.isData3DTexture)nt?(Lt&&t.texStorage3D(n.TEXTURE_3D,ge,et,oe.width,oe.height,oe.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Pe,je,oe.data)):t.texImage3D(n.TEXTURE_3D,0,et,oe.width,oe.height,oe.depth,0,Pe,je,oe.data);else if(T.isFramebufferTexture){if(Lt)if(nt)t.texStorage2D(n.TEXTURE_2D,ge,et,oe.width,oe.height);else{let q=oe.width,ee=oe.height;for(let Ce=0;Ce<ge;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,et,q,ee,0,Pe,je,null),q>>=1,ee>>=1}}else if(bt.length>0){if(nt&&Lt){let q=qe(bt[0]);t.texStorage2D(n.TEXTURE_2D,ge,et,q.width,q.height)}for(let q=0,ee=bt.length;q<ee;q++)Ie=bt[q],nt?N&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Pe,je,Ie):t.texImage2D(n.TEXTURE_2D,q,et,Pe,je,Ie);T.generateMipmaps=!1}else if(nt){if(Lt){let q=qe(oe);t.texStorage2D(n.TEXTURE_2D,ge,et,q.width,q.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,je,oe)}else t.texImage2D(n.TEXTURE_2D,0,et,Pe,je,oe);x(T)&&m(j),Oe.__version=J.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function le(I,T,B){if(T.image.length!==6)return;let j=It(I,T),ie=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+B);let J=i.get(ie);if(ie.version!==J.__version||j===!0){t.activeTexture(n.TEXTURE0+B);let Oe=St.getPrimaries(St.workingColorSpace),ye=T.colorSpace===Qs?null:St.getPrimaries(T.colorSpace),Te=T.colorSpace===Qs||Oe===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let xt=T.isCompressedTexture||T.image[0].isCompressedTexture,oe=T.image[0]&&T.image[0].isDataTexture,Pe=[];for(let ee=0;ee<6;ee++)!xt&&!oe?Pe[ee]=v(T.image[ee],!0,s.maxCubemapSize):Pe[ee]=oe?T.image[ee].image:T.image[ee],Pe[ee]=Vt(T,Pe[ee]);let je=Pe[0],et=r.convert(T.format,T.colorSpace),Ie=r.convert(T.type),bt=E(T.internalFormat,et,Ie,T.colorSpace),nt=T.isVideoTexture!==!0,Lt=J.__version===void 0||j===!0,N=ie.dataReady,ge=D(T,je);rt(n.TEXTURE_CUBE_MAP,T);let q;if(xt){nt&&Lt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,bt,je.width,je.height);for(let ee=0;ee<6;ee++){q=Pe[ee].mipmaps;for(let Ce=0;Ce<q.length;Ce++){let Re=q[Ce];T.format!==oi?et!==null?nt?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce,0,0,Re.width,Re.height,et,Re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce,bt,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce,0,0,Re.width,Re.height,et,Ie,Re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce,bt,Re.width,Re.height,0,et,Ie,Re.data)}}}else{if(q=T.mipmaps,nt&&Lt){q.length>0&&ge++;let ee=qe(Pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,bt,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(oe){nt?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Pe[ee].width,Pe[ee].height,et,Ie,Pe[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,bt,Pe[ee].width,Pe[ee].height,0,et,Ie,Pe[ee].data);for(let Ce=0;Ce<q.length;Ce++){let ut=q[Ce].image[ee].image;nt?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce+1,0,0,ut.width,ut.height,et,Ie,ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce+1,bt,ut.width,ut.height,0,et,Ie,ut.data)}}else{nt?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,et,Ie,Pe[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,bt,et,Ie,Pe[ee]);for(let Ce=0;Ce<q.length;Ce++){let Re=q[Ce];nt?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce+1,0,0,et,Ie,Re.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce+1,bt,et,Ie,Re.image[ee])}}}x(T)&&m(n.TEXTURE_CUBE_MAP),J.__version=ie.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function De(I,T,B,j,ie,J){let Oe=r.convert(B.format,B.colorSpace),ye=r.convert(B.type),Te=E(B.internalFormat,Oe,ye,B.colorSpace),xt=i.get(T),oe=i.get(B);if(oe.__renderTarget=T,!xt.__hasExternalTextures){let Pe=Math.max(1,T.width>>J),je=Math.max(1,T.height>>J);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,J,Te,Pe,je,T.depth,0,Oe,ye,null):t.texImage2D(ie,J,Te,Pe,je,0,Oe,ye,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),yt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,ie,oe.__webglTexture,0,vt(T)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,ie,oe.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(I,T,B){if(n.bindRenderbuffer(n.RENDERBUFFER,I),T.depthBuffer){let j=T.depthTexture,ie=j&&j.isDepthTexture?j.type:null,J=M(T.stencilBuffer,ie),Oe=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=vt(T);yt(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,J,T.width,T.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,J,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,J,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Oe,n.RENDERBUFFER,I)}else{let j=T.textures;for(let ie=0;ie<j.length;ie++){let J=j[ie],Oe=r.convert(J.format,J.colorSpace),ye=r.convert(J.type),Te=E(J.internalFormat,Oe,ye,J.colorSpace),xt=vt(T);B&&yt(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,Te,T.width,T.height):yt(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt,Te,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Te,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function $e(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=i.get(T.depthTexture);j.__renderTarget=T,(!j.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Q(T.depthTexture,0);let ie=j.__webglTexture,J=vt(T);if(T.depthTexture.format===zo)yt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(T.depthTexture.format===sr)yt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Je(I){let T=i.get(I),B=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){let j=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),j){let ie=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,j.removeEventListener("dispose",ie)};j.addEventListener("dispose",ie),T.__depthDisposeCallback=ie}T.__boundDepthTexture=j}if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");$e(T.__webglFramebuffer,I)}else if(B){T.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[j]),T.__webglDepthbuffer[j]===void 0)T.__webglDepthbuffer[j]=n.createRenderbuffer(),pe(T.__webglDepthbuffer[j],I,!1);else{let ie=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=T.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,J)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),pe(T.__webglDepthbuffer,I,!1);else{let j=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,ie)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function tt(I,T,B){let j=i.get(I);T!==void 0&&De(j.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Je(I)}function Kt(I){let T=I.texture,B=i.get(I),j=i.get(T);I.addEventListener("dispose",C);let ie=I.textures,J=I.isWebGLCubeRenderTarget===!0,Oe=ie.length>1;if(Oe||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=T.version,o.memory.textures++),J){B.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer[ye]=[];for(let Te=0;Te<T.mipmaps.length;Te++)B.__webglFramebuffer[ye][Te]=n.createFramebuffer()}else B.__webglFramebuffer[ye]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer=[];for(let ye=0;ye<T.mipmaps.length;ye++)B.__webglFramebuffer[ye]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Oe)for(let ye=0,Te=ie.length;ye<Te;ye++){let xt=i.get(ie[ye]);xt.__webglTexture===void 0&&(xt.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&yt(I)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ye=0;ye<ie.length;ye++){let Te=ie[ye];B.__webglColorRenderbuffer[ye]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ye]);let xt=r.convert(Te.format,Te.colorSpace),oe=r.convert(Te.type),Pe=E(Te.internalFormat,xt,oe,Te.colorSpace,I.isXRRenderTarget===!0),je=vt(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,je,Pe,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,B.__webglColorRenderbuffer[ye])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(B.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),rt(n.TEXTURE_CUBE_MAP,T);for(let ye=0;ye<6;ye++)if(T.mipmaps&&T.mipmaps.length>0)for(let Te=0;Te<T.mipmaps.length;Te++)De(B.__webglFramebuffer[ye][Te],I,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Te);else De(B.__webglFramebuffer[ye],I,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);x(T)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let ye=0,Te=ie.length;ye<Te;ye++){let xt=ie[ye],oe=i.get(xt);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),rt(n.TEXTURE_2D,xt),De(B.__webglFramebuffer,I,xt,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,0),x(xt)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let ye=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ye=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ye,j.__webglTexture),rt(ye,T),T.mipmaps&&T.mipmaps.length>0)for(let Te=0;Te<T.mipmaps.length;Te++)De(B.__webglFramebuffer[Te],I,T,n.COLOR_ATTACHMENT0,ye,Te);else De(B.__webglFramebuffer,I,T,n.COLOR_ATTACHMENT0,ye,0);x(T)&&m(ye),t.unbindTexture()}I.depthBuffer&&Je(I)}function _t(I){let T=I.textures;for(let B=0,j=T.length;B<j;B++){let ie=T[B];if(x(ie)){let J=_(I),Oe=i.get(ie).__webglTexture;t.bindTexture(J,Oe),m(J),t.unbindTexture()}}}let jt=[],H=[];function An(I){if(I.samples>0){if(yt(I)===!1){let T=I.textures,B=I.width,j=I.height,ie=n.COLOR_BUFFER_BIT,J=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Oe=i.get(I),ye=T.length>1;if(ye)for(let Te=0;Te<T.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Te=0;Te<T.length;Te++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),ye){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[Te]);let xt=i.get(T[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,xt,0)}n.blitFramebuffer(0,0,B,j,0,0,B,j,ie,n.NEAREST),l===!0&&(jt.length=0,H.length=0,jt.push(n.COLOR_ATTACHMENT0+Te),I.depthBuffer&&I.resolveDepthBuffer===!1&&(jt.push(J),H.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,H)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,jt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ye)for(let Te=0;Te<T.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[Te]);let xt=i.get(T[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,xt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let T=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function vt(I){return Math.min(s.maxSamples,I.samples)}function yt(I){let T=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ze(I){let T=o.render.frame;h.get(I)!==T&&(h.set(I,T),I.update())}function Vt(I,T){let B=I.colorSpace,j=I.format,ie=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||B!==ea&&B!==Qs&&(St.getTransfer(B)===Ot?(j!==oi||ie!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),T}function qe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=Q,this.setTexture2DArray=$,this.setTexture3D=se,this.setTextureCube=X,this.rebindTextures=tt,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=An,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=De,this.useMultisampledRTT=yt}function Ab(n,e){function t(i,s=Qs){let r,o=St.getTransfer(s);if(i===Kn)return n.UNSIGNED_BYTE;if(i===kf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===zf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hg)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===lg)return n.BYTE;if(i===cg)return n.SHORT;if(i===rl)return n.UNSIGNED_SHORT;if(i===Hf)return n.INT;if(i===Br)return n.UNSIGNED_INT;if(i===Yi)return n.FLOAT;if(i===Jn)return n.HALF_FLOAT;if(i===ug)return n.ALPHA;if(i===dg)return n.RGB;if(i===oi)return n.RGBA;if(i===fg)return n.LUMINANCE;if(i===pg)return n.LUMINANCE_ALPHA;if(i===zo)return n.DEPTH_COMPONENT;if(i===sr)return n.DEPTH_STENCIL;if(i===Of)return n.RED;if(i===Ff)return n.RED_INTEGER;if(i===mg)return n.RG;if(i===Bf)return n.RG_INTEGER;if(i===Gf)return n.RGBA_INTEGER;if(i===Dc||i===Uc||i===Nc||i===Hc)if(o===Ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Dc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Uc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Nc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Hc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Dc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Uc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Nc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Hc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xd||i===vd||i===yd||i===Md)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===xd)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vd)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yd)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Md)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_d||i===Ed||i===bd)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===_d||i===Ed)return o===Ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===bd)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===wd||i===Sd||i===Td||i===Rd||i===Ad||i===Cd||i===Pd||i===Id||i===Ld||i===Dd||i===Ud||i===Nd||i===Hd||i===kd)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===wd)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sd)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Td)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rd)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ad)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cd)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pd)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Id)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ld)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Dd)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ud)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nd)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hd)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kd)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===kc||i===zd||i===Od)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===kc)return o===Ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Od)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gg||i===Fd||i===Bd||i===Gd)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===kc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Fd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bd)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ir?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var rf=class extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},de=class extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cb={type:"move"},nl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new de,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new de,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new de,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let x=t.getJointPose(v,i),m=this._getHandJoint(c,v);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new de;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Pb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ib=`
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

}`,of=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new Wn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ct({vertexShader:Pb,fragmentShader:Ib,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ne(new Dn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},af=class extends rr{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,g=null,v=new of,x=t.getContextAttributes(),m=null,_=null,E=[],M=[],D=new te,A=null,C=new un;C.viewport=new Ft;let P=new un;P.viewport=new Ft;let S=[C,P],b=new rf,U=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let le=E[K];return le===void 0&&(le=new nl,E[K]=le),le.getTargetRaySpace()},this.getControllerGrip=function(K){let le=E[K];return le===void 0&&(le=new nl,E[K]=le),le.getGripSpace()},this.getHand=function(K){let le=E[K];return le===void 0&&(le=new nl,E[K]=le),le.getHandSpace()};function F(K){let le=M.indexOf(K.inputSource);if(le===-1)return;let De=E[le];De!==void 0&&(De.update(K.inputSource,K.frame,c||o),De.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",Q);for(let K=0;K<E.length;K++){let le=M[K];le!==null&&(M[K]=null,E[K].disconnect(le))}U=null,O=null,v.reset(),e.setRenderTarget(m),p=null,f=null,d=null,s=null,_=null,It.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",V),s.addEventListener("inputsourceschange",Q),x.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){let le={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new wn(p.framebufferWidth,p.framebufferHeight,{format:oi,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let le=null,De=null,pe=null;x.depth&&(pe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=x.stencil?sr:zo,De=x.stencil?ir:Br);let $e={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer($e),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new wn(f.textureWidth,f.textureHeight,{format:oi,type:Kn,depthTexture:new Yo(f.textureWidth,f.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),It.setContext(s),It.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Q(K){for(let le=0;le<K.removed.length;le++){let De=K.removed[le],pe=M.indexOf(De);pe>=0&&(M[pe]=null,E[pe].disconnect(De))}for(let le=0;le<K.added.length;le++){let De=K.added[le],pe=M.indexOf(De);if(pe===-1){for(let Je=0;Je<E.length;Je++)if(Je>=M.length){M.push(De),pe=Je;break}else if(M[Je]===null){M[Je]=De,pe=Je;break}if(pe===-1)break}let $e=E[pe];$e&&$e.connect(De)}}let $=new w,se=new w;function X(K,le,De){$.setFromMatrixPosition(le.matrixWorld),se.setFromMatrixPosition(De.matrixWorld);let pe=$.distanceTo(se),$e=le.projectionMatrix.elements,Je=De.projectionMatrix.elements,tt=$e[14]/($e[10]-1),Kt=$e[14]/($e[10]+1),_t=($e[9]+1)/$e[5],jt=($e[9]-1)/$e[5],H=($e[8]-1)/$e[0],An=(Je[8]+1)/Je[0],vt=tt*H,yt=tt*An,Ze=pe/(-H+An),Vt=Ze*-H;if(le.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Vt),K.translateZ(Ze),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),$e[10]===-1)K.projectionMatrix.copy(le.projectionMatrix),K.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{let qe=tt+Ze,I=Kt+Ze,T=vt-Vt,B=yt+(pe-Vt),j=_t*Kt/I*qe,ie=jt*Kt/I*qe;K.projectionMatrix.makePerspective(T,B,j,ie,qe,I),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ae(K,le){le===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(le.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let le=K.near,De=K.far;v.texture!==null&&(v.depthNear>0&&(le=v.depthNear),v.depthFar>0&&(De=v.depthFar)),b.near=P.near=C.near=le,b.far=P.far=C.far=De,(U!==b.near||O!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),U=b.near,O=b.far),C.layers.mask=K.layers.mask|2,P.layers.mask=K.layers.mask|4,b.layers.mask=C.layers.mask|P.layers.mask;let pe=K.parent,$e=b.cameras;ae(b,pe);for(let Je=0;Je<$e.length;Je++)ae($e[Je],pe);$e.length===2?X(b,C,P):b.projectionMatrix.copy(C.projectionMatrix),Se(K,b,pe)};function Se(K,le,De){De===null?K.matrix.copy(le.matrixWorld):(K.matrix.copy(De.matrixWorld),K.matrix.invert(),K.matrix.multiply(le.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(le.projectionMatrix),K.projectionMatrixInverse.copy(le.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Wo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let ke=null;function rt(K,le){if(h=le.getViewerPose(c||o),g=le,h!==null){let De=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let pe=!1;De.length!==b.cameras.length&&(b.cameras.length=0,pe=!0);for(let Je=0;Je<De.length;Je++){let tt=De[Je],Kt=null;if(p!==null)Kt=p.getViewport(tt);else{let jt=d.getViewSubImage(f,tt);Kt=jt.viewport,Je===0&&(e.setRenderTargetTextures(_,jt.colorTexture,f.ignoreDepthValues?void 0:jt.depthStencilTexture),e.setRenderTarget(_))}let _t=S[Je];_t===void 0&&(_t=new un,_t.layers.enable(Je),_t.viewport=new Ft,S[Je]=_t),_t.matrix.fromArray(tt.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(tt.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),Je===0&&(b.matrix.copy(_t.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),pe===!0&&b.cameras.push(_t)}let $e=s.enabledFeatures;if($e&&$e.includes("depth-sensing")){let Je=d.getDepthInformation(De[0]);Je&&Je.isValid&&Je.texture&&v.init(e,Je,s.renderState)}}for(let De=0;De<E.length;De++){let pe=M[De],$e=E[De];pe!==null&&$e!==void 0&&$e.update(pe,le,c||o)}ke&&ke(K,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),g=null}let It=new _g;It.setAnimationLoop(rt),this.setAnimationLoop=function(K){ke=K},this.dispose=function(){}}},Hr=new Sn,Lb=new pt;function Db(n,e){function t(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function i(x,m){m.color.getRGB(x.fogColor.value,Mg(n)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function s(x,m,_,E,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(x,m):m.isMeshToonMaterial?(r(x,m),d(x,m)):m.isMeshPhongMaterial?(r(x,m),h(x,m)):m.isMeshStandardMaterial?(r(x,m),f(x,m),m.isMeshPhysicalMaterial&&p(x,m,M)):m.isMeshMatcapMaterial?(r(x,m),g(x,m)):m.isMeshDepthMaterial?r(x,m):m.isMeshDistanceMaterial?(r(x,m),v(x,m)):m.isMeshNormalMaterial?r(x,m):m.isLineBasicMaterial?(o(x,m),m.isLineDashedMaterial&&a(x,m)):m.isPointsMaterial?l(x,m,_,E):m.isSpriteMaterial?c(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,t(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===Ln&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,t(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===Ln&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,t(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,t(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);let _=e.get(m),E=_.envMap,M=_.envMapRotation;E&&(x.envMap.value=E,Hr.copy(M),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),x.envMapRotation.value.setFromMatrix4(Lb.makeRotationFromEuler(Hr)),x.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,x.aoMapTransform))}function o(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform))}function a(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function l(x,m,_,E){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*_,x.scale.value=E*.5,m.map&&(x.map.value=m.map,t(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function c(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function h(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function d(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function f(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function p(x,m,_){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ln&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=_.texture,x.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,m){m.matcap&&(x.matcap.value=m.matcap)}function v(x,m){let _=e.get(m).light;x.referencePosition.value.setFromMatrixPosition(_.matrixWorld),x.nearDistance.value=_.shadow.camera.near,x.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ub(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,E){let M=E.program;i.uniformBlockBinding(_,M)}function c(_,E){let M=s[_.id];M===void 0&&(g(_),M=h(_),s[_.id]=M,_.addEventListener("dispose",x));let D=E.program;i.updateUBOMapping(_,D);let A=e.render.frame;r[_.id]!==A&&(f(_),r[_.id]=A)}function h(_){let E=d();_.__bindingPointIndex=E;let M=n.createBuffer(),D=_.__size,A=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,D,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,M),M}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let E=s[_.id],M=_.uniforms,D=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let A=0,C=M.length;A<C;A++){let P=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,b=P.length;S<b;S++){let U=P[S];if(p(U,A,S,D)===!0){let O=U.__offset,F=Array.isArray(U.value)?U.value:[U.value],V=0;for(let Q=0;Q<F.length;Q++){let $=F[Q],se=v($);typeof $=="number"||typeof $=="boolean"?(U.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,O+V,U.__data)):$.isMatrix3?(U.__data[0]=$.elements[0],U.__data[1]=$.elements[1],U.__data[2]=$.elements[2],U.__data[3]=0,U.__data[4]=$.elements[3],U.__data[5]=$.elements[4],U.__data[6]=$.elements[5],U.__data[7]=0,U.__data[8]=$.elements[6],U.__data[9]=$.elements[7],U.__data[10]=$.elements[8],U.__data[11]=0):($.toArray(U.__data,V),V+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,E,M,D){let A=_.value,C=E+"_"+M;if(D[C]===void 0)return typeof A=="number"||typeof A=="boolean"?D[C]=A:D[C]=A.clone(),!0;{let P=D[C];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return D[C]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(_){let E=_.uniforms,M=0,D=16;for(let C=0,P=E.length;C<P;C++){let S=Array.isArray(E[C])?E[C]:[E[C]];for(let b=0,U=S.length;b<U;b++){let O=S[b],F=Array.isArray(O.value)?O.value:[O.value];for(let V=0,Q=F.length;V<Q;V++){let $=F[V],se=v($),X=M%D,ae=X%se.boundary,Se=X+ae;M+=ae,Se!==0&&D-Se<se.storage&&(M+=D-Se),O.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=se.storage}}}let A=M%D;return A>0&&(M+=D-A),_.__size=M,_.__cache={},this}function v(_){let E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),E}function x(_){let E=_.target;E.removeEventListener("dispose",x);let M=o.indexOf(E.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Zo=class{constructor(e={}){let{canvas:t=Oy(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),v=new Int32Array(4),x=null,m=null,_=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this.toneMapping=tr,this.toneMappingExposure=1;let M=this,D=!1,A=0,C=0,P=null,S=-1,b=null,U=new Ft,O=new Ft,F=null,V=new he(0),Q=0,$=t.width,se=t.height,X=1,ae=null,Se=null,ke=new Ft(0,0,$,se),rt=new Ft(0,0,$,se),It=!1,K=new ol,le=!1,De=!1,pe=new pt,$e=new pt,Je=new w,tt=new Ft,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_t=!1;function jt(){return P===null?X:1}let H=i;function An(R,k){return t.getContext(R,k)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Af}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",Re,!1),H===null){let k="webgl2";if(H=An(k,R),H===null)throw An(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let vt,yt,Ze,Vt,qe,I,T,B,j,ie,J,Oe,ye,Te,xt,oe,Pe,je,et,Ie,bt,nt,Lt,N;function ge(){vt=new K2(H),vt.init(),nt=new Ab(H,vt),yt=new W2(H,vt,e,nt),Ze=new Sb(H,vt),yt.reverseDepthBuffer&&f&&Ze.buffers.depth.setReversed(!0),Vt=new Q2(H),qe=new db,I=new Rb(H,vt,Ze,qe,yt,nt,Vt),T=new X2(M),B=new Z2(M),j=new oM(H),Lt=new G2(H,j),ie=new J2(H,j,Vt,Lt),J=new tE(H,ie,j,Vt),et=new eE(H,yt,I),oe=new $2(qe),Oe=new ub(M,T,B,vt,yt,Lt,oe),ye=new Db(M,qe),Te=new pb,xt=new Mb(vt),je=new B2(M,T,B,Ze,J,p,l),Pe=new bb(M,J,yt),N=new Ub(H,Vt,yt,Ze),Ie=new V2(H,vt,Vt),bt=new j2(H,vt,Vt),Vt.programs=Oe.programs,M.capabilities=yt,M.extensions=vt,M.properties=qe,M.renderLists=Te,M.shadowMap=Pe,M.state=Ze,M.info=Vt}ge();let q=new af(M,H);this.xr=q,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let R=vt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=vt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(R){R!==void 0&&(X=R,this.setSize($,se,!1))},this.getSize=function(R){return R.set($,se)},this.setSize=function(R,k,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=R,se=k,t.width=Math.floor(R*X),t.height=Math.floor(k*X),G===!0&&(t.style.width=R+"px",t.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set($*X,se*X).floor()},this.setDrawingBufferSize=function(R,k,G){$=R,se=k,X=G,t.width=Math.floor(R*G),t.height=Math.floor(k*G),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(U)},this.getViewport=function(R){return R.copy(ke)},this.setViewport=function(R,k,G,W){R.isVector4?ke.set(R.x,R.y,R.z,R.w):ke.set(R,k,G,W),Ze.viewport(U.copy(ke).multiplyScalar(X).round())},this.getScissor=function(R){return R.copy(rt)},this.setScissor=function(R,k,G,W){R.isVector4?rt.set(R.x,R.y,R.z,R.w):rt.set(R,k,G,W),Ze.scissor(O.copy(rt).multiplyScalar(X).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(R){Ze.setScissorTest(It=R)},this.setOpaqueSort=function(R){ae=R},this.setTransparentSort=function(R){Se=R},this.getClearColor=function(R){return R.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(R=!0,k=!0,G=!0){let W=0;if(R){let z=!1;if(P!==null){let ce=P.texture.format;z=ce===Gf||ce===Bf||ce===Ff}if(z){let ce=P.texture.type,Ae=ce===Kn||ce===Br||ce===rl||ce===ir||ce===kf||ce===zf,Fe=je.getClearColor(),Be=je.getClearAlpha(),at=Fe.r,dt=Fe.g,Ge=Fe.b;Ae?(g[0]=at,g[1]=dt,g[2]=Ge,g[3]=Be,H.clearBufferuiv(H.COLOR,0,g)):(v[0]=at,v[1]=dt,v[2]=Ge,v[3]=Be,H.clearBufferiv(H.COLOR,0,v))}else W|=H.COLOR_BUFFER_BIT}k&&(W|=H.DEPTH_BUFFER_BIT),G&&(W|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),Te.dispose(),xt.dispose(),qe.dispose(),T.dispose(),B.dispose(),J.dispose(),Lt.dispose(),N.dispose(),Oe.dispose(),q.dispose(),q.removeEventListener("sessionstart",F0),q.removeEventListener("sessionend",B0),Pr.stop()};function ee(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let R=Vt.autoReset,k=Pe.enabled,G=Pe.autoUpdate,W=Pe.needsUpdate,z=Pe.type;ge(),Vt.autoReset=R,Pe.enabled=k,Pe.autoUpdate=G,Pe.needsUpdate=W,Pe.type=z}function Re(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ut(R){let k=R.target;k.removeEventListener("dispose",ut),cn(k)}function cn(R){Cn(R),qe.remove(R)}function Cn(R){let k=qe.get(R).programs;k!==void 0&&(k.forEach(function(G){Oe.releaseProgram(G)}),R.isShaderMaterial&&Oe.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,G,W,z,ce){k===null&&(k=Kt);let Ae=z.isMesh&&z.matrixWorld.determinant()<0,Fe=Wv(R,k,G,W,z);Ze.setMaterial(W,Ae);let Be=G.index,at=1;if(W.wireframe===!0){if(Be=ie.getWireframeAttribute(G),Be===void 0)return;at=2}let dt=G.drawRange,Ge=G.attributes.position,Dt=dt.start*at,Jt=(dt.start+dt.count)*at;ce!==null&&(Dt=Math.max(Dt,ce.start*at),Jt=Math.min(Jt,(ce.start+ce.count)*at)),Be!==null?(Dt=Math.max(Dt,0),Jt=Math.min(Jt,Be.count)):Ge!=null&&(Dt=Math.max(Dt,0),Jt=Math.min(Jt,Ge.count));let Qt=Jt-Dt;if(Qt<0||Qt===1/0)return;Lt.setup(z,W,Fe,G,Be);let Zn,kt=Ie;if(Be!==null&&(Zn=j.get(Be),kt=bt,kt.setIndex(Zn)),z.isMesh)W.wireframe===!0?(Ze.setLineWidth(W.wireframeLinewidth*jt()),kt.setMode(H.LINES)):kt.setMode(H.TRIANGLES);else if(z.isLine){let Xe=W.linewidth;Xe===void 0&&(Xe=1),Ze.setLineWidth(Xe*jt()),z.isLineSegments?kt.setMode(H.LINES):z.isLineLoop?kt.setMode(H.LINE_LOOP):kt.setMode(H.LINE_STRIP)}else z.isPoints?kt.setMode(H.POINTS):z.isSprite&&kt.setMode(H.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)kt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))kt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Xe=z._multiDrawStarts,gs=z._multiDrawCounts,zt=z._multiDrawCount,Pi=Be?j.get(Be).bytesPerElement:1,xo=qe.get(W).currentProgram.getUniforms();for(let ii=0;ii<zt;ii++)xo.setValue(H,"_gl_DrawID",ii),kt.render(Xe[ii]/Pi,gs[ii])}else if(z.isInstancedMesh)kt.renderInstances(Dt,Qt,z.count);else if(G.isInstancedBufferGeometry){let Xe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,gs=Math.min(G.instanceCount,Xe);kt.renderInstances(Dt,Qt,gs)}else kt.render(Dt,Qt)};function Wt(R,k,G){R.transparent===!0&&R.side===Tt&&R.forceSinglePass===!1?(R.side=Ln,R.needsUpdate=!0,ic(R,k,G),R.side=nr,R.needsUpdate=!0,ic(R,k,G),R.side=Tt):ic(R,k,G)}this.compile=function(R,k,G=null){G===null&&(G=R),m=xt.get(G),m.init(k),E.push(m),G.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),R!==G&&R.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();let W=new Set;return R.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ce=z.material;if(ce)if(Array.isArray(ce))for(let Ae=0;Ae<ce.length;Ae++){let Fe=ce[Ae];Wt(Fe,G,z),W.add(Fe)}else Wt(ce,G,z),W.add(ce)}),E.pop(),m=null,W},this.compileAsync=function(R,k,G=null){let W=this.compile(R,k,G);return new Promise(z=>{function ce(){if(W.forEach(function(Ae){qe.get(Ae).currentProgram.isReady()&&W.delete(Ae)}),W.size===0){z(R);return}setTimeout(ce,10)}vt.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Ci=null;function ms(R){Ci&&Ci(R)}function F0(){Pr.stop()}function B0(){Pr.start()}let Pr=new _g;Pr.setAnimationLoop(ms),typeof self<"u"&&Pr.setContext(self),this.setAnimationLoop=function(R){Ci=R,q.setAnimationLoop(R),R===null?Pr.stop():Pr.start()},q.addEventListener("sessionstart",F0),q.addEventListener("sessionend",B0),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(k),k=q.getCamera()),R.isScene===!0&&R.onBeforeRender(M,R,k,P),m=xt.get(R,E.length),m.init(k),E.push(m),$e.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),K.setFromProjectionMatrix($e),De=this.localClippingEnabled,le=oe.init(this.clippingPlanes,De),x=Te.get(R,_.length),x.init(),_.push(x),q.enabled===!0&&q.isPresenting===!0){let ce=M.xr.getDepthSensingMesh();ce!==null&&wu(ce,k,-1/0,M.sortObjects)}wu(R,k,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(ae,Se),_t=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,_t&&je.addToRenderList(x,R),this.info.render.frame++,le===!0&&oe.beginShadows();let G=m.state.shadowsArray;Pe.render(G,R,k),le===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=x.opaque,z=x.transmissive;if(m.setupLights(),k.isArrayCamera){let ce=k.cameras;if(z.length>0)for(let Ae=0,Fe=ce.length;Ae<Fe;Ae++){let Be=ce[Ae];V0(W,z,R,Be)}_t&&je.render(R);for(let Ae=0,Fe=ce.length;Ae<Fe;Ae++){let Be=ce[Ae];G0(x,R,Be,Be.viewport)}}else z.length>0&&V0(W,z,R,k),_t&&je.render(R),G0(x,R,k);P!==null&&(I.updateMultisampleRenderTarget(P),I.updateRenderTargetMipmap(P)),R.isScene===!0&&R.onAfterRender(M,R,k),Lt.resetDefaultState(),S=-1,b=null,E.pop(),E.length>0?(m=E[E.length-1],le===!0&&oe.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?x=_[_.length-1]:x=null};function wu(R,k,G,W){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)G=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||K.intersectsSprite(R)){W&&tt.setFromMatrixPosition(R.matrixWorld).applyMatrix4($e);let Ae=J.update(R),Fe=R.material;Fe.visible&&x.push(R,Ae,Fe,G,tt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||K.intersectsObject(R))){let Ae=J.update(R),Fe=R.material;if(W&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),tt.copy(R.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),tt.copy(Ae.boundingSphere.center)),tt.applyMatrix4(R.matrixWorld).applyMatrix4($e)),Array.isArray(Fe)){let Be=Ae.groups;for(let at=0,dt=Be.length;at<dt;at++){let Ge=Be[at],Dt=Fe[Ge.materialIndex];Dt&&Dt.visible&&x.push(R,Ae,Dt,G,tt.z,Ge)}}else Fe.visible&&x.push(R,Ae,Fe,G,tt.z,null)}}let ce=R.children;for(let Ae=0,Fe=ce.length;Ae<Fe;Ae++)wu(ce[Ae],k,G,W)}function G0(R,k,G,W){let z=R.opaque,ce=R.transmissive,Ae=R.transparent;m.setupLightsView(G),le===!0&&oe.setGlobalState(M.clippingPlanes,G),W&&Ze.viewport(U.copy(W)),z.length>0&&nc(z,k,G),ce.length>0&&nc(ce,k,G),Ae.length>0&&nc(Ae,k,G),Ze.buffers.depth.setTest(!0),Ze.buffers.depth.setMask(!0),Ze.buffers.color.setMask(!0),Ze.setPolygonOffset(!1)}function V0(R,k,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new wn(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float")?Jn:Kn,minFilter:Fr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));let ce=m.state.transmissionRenderTarget[W.id],Ae=W.viewport||U;ce.setSize(Ae.z,Ae.w);let Fe=M.getRenderTarget();M.setRenderTarget(ce),M.getClearColor(V),Q=M.getClearAlpha(),Q<1&&M.setClearColor(16777215,.5),M.clear(),_t&&je.render(G);let Be=M.toneMapping;M.toneMapping=tr;let at=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),le===!0&&oe.setGlobalState(M.clippingPlanes,W),nc(R,G,W),I.updateMultisampleRenderTarget(ce),I.updateRenderTargetMipmap(ce),vt.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Ge=0,Dt=k.length;Ge<Dt;Ge++){let Jt=k[Ge],Qt=Jt.object,Zn=Jt.geometry,kt=Jt.material,Xe=Jt.group;if(kt.side===Tt&&Qt.layers.test(W.layers)){let gs=kt.side;kt.side=Ln,kt.needsUpdate=!0,W0(Qt,G,W,Zn,kt,Xe),kt.side=gs,kt.needsUpdate=!0,dt=!0}}dt===!0&&(I.updateMultisampleRenderTarget(ce),I.updateRenderTargetMipmap(ce))}M.setRenderTarget(Fe),M.setClearColor(V,Q),at!==void 0&&(W.viewport=at),M.toneMapping=Be}function nc(R,k,G){let W=k.isScene===!0?k.overrideMaterial:null;for(let z=0,ce=R.length;z<ce;z++){let Ae=R[z],Fe=Ae.object,Be=Ae.geometry,at=W===null?Ae.material:W,dt=Ae.group;Fe.layers.test(G.layers)&&W0(Fe,k,G,Be,at,dt)}}function W0(R,k,G,W,z,ce){R.onBeforeRender(M,k,G,W,z,ce),R.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),z.onBeforeRender(M,k,G,W,R,ce),z.transparent===!0&&z.side===Tt&&z.forceSinglePass===!1?(z.side=Ln,z.needsUpdate=!0,M.renderBufferDirect(G,k,W,z,R,ce),z.side=nr,z.needsUpdate=!0,M.renderBufferDirect(G,k,W,z,R,ce),z.side=Tt):M.renderBufferDirect(G,k,W,z,R,ce),R.onAfterRender(M,k,G,W,z,ce)}function ic(R,k,G){k.isScene!==!0&&(k=Kt);let W=qe.get(R),z=m.state.lights,ce=m.state.shadowsArray,Ae=z.state.version,Fe=Oe.getParameters(R,z.state,ce,k,G),Be=Oe.getProgramCacheKey(Fe),at=W.programs;W.environment=R.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(R.isMeshStandardMaterial?B:T).get(R.envMap||W.environment),W.envMapRotation=W.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,at===void 0&&(R.addEventListener("dispose",ut),at=new Map,W.programs=at);let dt=at.get(Be);if(dt!==void 0){if(W.currentProgram===dt&&W.lightsStateVersion===Ae)return X0(R,Fe),dt}else Fe.uniforms=Oe.getUniforms(R),R.onBeforeCompile(Fe,M),dt=Oe.acquireProgram(Fe,Be),at.set(Be,dt),W.uniforms=Fe.uniforms;let Ge=W.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ge.clippingPlanes=oe.uniform),X0(R,Fe),W.needsLights=Xv(R),W.lightsStateVersion=Ae,W.needsLights&&(Ge.ambientLightColor.value=z.state.ambient,Ge.lightProbe.value=z.state.probe,Ge.directionalLights.value=z.state.directional,Ge.directionalLightShadows.value=z.state.directionalShadow,Ge.spotLights.value=z.state.spot,Ge.spotLightShadows.value=z.state.spotShadow,Ge.rectAreaLights.value=z.state.rectArea,Ge.ltc_1.value=z.state.rectAreaLTC1,Ge.ltc_2.value=z.state.rectAreaLTC2,Ge.pointLights.value=z.state.point,Ge.pointLightShadows.value=z.state.pointShadow,Ge.hemisphereLights.value=z.state.hemi,Ge.directionalShadowMap.value=z.state.directionalShadowMap,Ge.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ge.spotShadowMap.value=z.state.spotShadowMap,Ge.spotLightMatrix.value=z.state.spotLightMatrix,Ge.spotLightMap.value=z.state.spotLightMap,Ge.pointShadowMap.value=z.state.pointShadowMap,Ge.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=dt,W.uniformsList=null,dt}function $0(R){if(R.uniformsList===null){let k=R.currentProgram.getUniforms();R.uniformsList=Fo.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function X0(R,k){let G=qe.get(R);G.outputColorSpace=k.outputColorSpace,G.batching=k.batching,G.batchingColor=k.batchingColor,G.instancing=k.instancing,G.instancingColor=k.instancingColor,G.instancingMorph=k.instancingMorph,G.skinning=k.skinning,G.morphTargets=k.morphTargets,G.morphNormals=k.morphNormals,G.morphColors=k.morphColors,G.morphTargetsCount=k.morphTargetsCount,G.numClippingPlanes=k.numClippingPlanes,G.numIntersection=k.numClipIntersection,G.vertexAlphas=k.vertexAlphas,G.vertexTangents=k.vertexTangents,G.toneMapping=k.toneMapping}function Wv(R,k,G,W,z){k.isScene!==!0&&(k=Kt),I.resetTextureUnits();let ce=k.fog,Ae=W.isMeshStandardMaterial?k.environment:null,Fe=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ea,Be=(W.isMeshStandardMaterial?B:T).get(W.envMap||Ae),at=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,dt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ge=!!G.morphAttributes.position,Dt=!!G.morphAttributes.normal,Jt=!!G.morphAttributes.color,Qt=tr;W.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Qt=M.toneMapping);let Zn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,kt=Zn!==void 0?Zn.length:0,Xe=qe.get(W),gs=m.state.lights;if(le===!0&&(De===!0||R!==b)){let fi=R===b&&W.id===S;oe.setState(W,R,fi)}let zt=!1;W.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==gs.state.version||Xe.outputColorSpace!==Fe||z.isBatchedMesh&&Xe.batching===!1||!z.isBatchedMesh&&Xe.batching===!0||z.isBatchedMesh&&Xe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Xe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Xe.instancing===!1||!z.isInstancedMesh&&Xe.instancing===!0||z.isSkinnedMesh&&Xe.skinning===!1||!z.isSkinnedMesh&&Xe.skinning===!0||z.isInstancedMesh&&Xe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Xe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Xe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Xe.instancingMorph===!1&&z.morphTexture!==null||Xe.envMap!==Be||W.fog===!0&&Xe.fog!==ce||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==oe.numPlanes||Xe.numIntersection!==oe.numIntersection)||Xe.vertexAlphas!==at||Xe.vertexTangents!==dt||Xe.morphTargets!==Ge||Xe.morphNormals!==Dt||Xe.morphColors!==Jt||Xe.toneMapping!==Qt||Xe.morphTargetsCount!==kt)&&(zt=!0):(zt=!0,Xe.__version=W.version);let Pi=Xe.currentProgram;zt===!0&&(Pi=ic(W,k,z));let xo=!1,ii=!1,Fa=!1,en=Pi.getUniforms(),$i=Xe.uniforms;if(Ze.useProgram(Pi.program)&&(xo=!0,ii=!0,Fa=!0),W.id!==S&&(S=W.id,ii=!0),xo||b!==R){Ze.buffers.depth.getReversed()?(pe.copy(R.projectionMatrix),By(pe),Gy(pe),en.setValue(H,"projectionMatrix",pe)):en.setValue(H,"projectionMatrix",R.projectionMatrix),en.setValue(H,"viewMatrix",R.matrixWorldInverse);let $s=en.map.cameraPosition;$s!==void 0&&$s.setValue(H,Je.setFromMatrixPosition(R.matrixWorld)),yt.logarithmicDepthBuffer&&en.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&en.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,ii=!0,Fa=!0)}if(z.isSkinnedMesh){en.setOptional(H,z,"bindMatrix"),en.setOptional(H,z,"bindMatrixInverse");let fi=z.skeleton;fi&&(fi.boneTexture===null&&fi.computeBoneTexture(),en.setValue(H,"boneTexture",fi.boneTexture,I))}z.isBatchedMesh&&(en.setOptional(H,z,"batchingTexture"),en.setValue(H,"batchingTexture",z._matricesTexture,I),en.setOptional(H,z,"batchingIdTexture"),en.setValue(H,"batchingIdTexture",z._indirectTexture,I),en.setOptional(H,z,"batchingColorTexture"),z._colorsTexture!==null&&en.setValue(H,"batchingColorTexture",z._colorsTexture,I));let Ba=G.morphAttributes;if((Ba.position!==void 0||Ba.normal!==void 0||Ba.color!==void 0)&&et.update(z,G,Pi),(ii||Xe.receiveShadow!==z.receiveShadow)&&(Xe.receiveShadow=z.receiveShadow,en.setValue(H,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&($i.envMap.value=Be,$i.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&k.environment!==null&&($i.envMapIntensity.value=k.environmentIntensity),ii&&(en.setValue(H,"toneMappingExposure",M.toneMappingExposure),Xe.needsLights&&$v($i,Fa),ce&&W.fog===!0&&ye.refreshFogUniforms($i,ce),ye.refreshMaterialUniforms($i,W,X,se,m.state.transmissionRenderTarget[R.id]),Fo.upload(H,$0(Xe),$i,I)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Fo.upload(H,$0(Xe),$i,I),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&en.setValue(H,"center",z.center),en.setValue(H,"modelViewMatrix",z.modelViewMatrix),en.setValue(H,"normalMatrix",z.normalMatrix),en.setValue(H,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let fi=W.uniformsGroups;for(let $s=0,Xs=fi.length;$s<Xs;$s++){let q0=fi[$s];N.update(q0,Pi),N.bind(q0,Pi)}}return Pi}function $v(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function Xv(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(R,k,G){qe.get(R.texture).__webglTexture=k,qe.get(R.depthTexture).__webglTexture=G;let W=qe.get(R);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,k){let G=qe.get(R);G.__webglFramebuffer=k,G.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,G=0){P=R,A=k,C=G;let W=!0,z=null,ce=!1,Ae=!1;if(R){let Be=qe.get(R);if(Be.__useDefaultFramebuffer!==void 0)Ze.bindFramebuffer(H.FRAMEBUFFER,null),W=!1;else if(Be.__webglFramebuffer===void 0)I.setupRenderTarget(R);else if(Be.__hasExternalTextures)I.rebindTextures(R,qe.get(R.texture).__webglTexture,qe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Ge=R.depthTexture;if(Be.__boundDepthTexture!==Ge){if(Ge!==null&&qe.has(Ge)&&(R.width!==Ge.image.width||R.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(R)}}let at=R.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Ae=!0);let dt=qe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(dt[k])?z=dt[k][G]:z=dt[k],ce=!0):R.samples>0&&I.useMultisampledRTT(R)===!1?z=qe.get(R).__webglMultisampledFramebuffer:Array.isArray(dt)?z=dt[G]:z=dt,U.copy(R.viewport),O.copy(R.scissor),F=R.scissorTest}else U.copy(ke).multiplyScalar(X).floor(),O.copy(rt).multiplyScalar(X).floor(),F=It;if(Ze.bindFramebuffer(H.FRAMEBUFFER,z)&&W&&Ze.drawBuffers(R,z),Ze.viewport(U),Ze.scissor(O),Ze.setScissorTest(F),ce){let Be=qe.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+k,Be.__webglTexture,G)}else if(Ae){let Be=qe.get(R.texture),at=k||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Be.__webglTexture,G||0,at)}S=-1},this.readRenderTargetPixels=function(R,k,G,W,z,ce,Ae){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=qe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(Fe=Fe[Ae]),Fe){Ze.bindFramebuffer(H.FRAMEBUFFER,Fe);try{let Be=R.texture,at=Be.format,dt=Be.type;if(!yt.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-W&&G>=0&&G<=R.height-z&&H.readPixels(k,G,W,z,nt.convert(at),nt.convert(dt),ce)}finally{let Be=P!==null?qe.get(P).__webglFramebuffer:null;Ze.bindFramebuffer(H.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(R,k,G,W,z,ce,Ae){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=qe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(Fe=Fe[Ae]),Fe){let Be=R.texture,at=Be.format,dt=Be.type;if(!yt.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=R.width-W&&G>=0&&G<=R.height-z){Ze.bindFramebuffer(H.FRAMEBUFFER,Fe);let Ge=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ge),H.bufferData(H.PIXEL_PACK_BUFFER,ce.byteLength,H.STREAM_READ),H.readPixels(k,G,W,z,nt.convert(at),nt.convert(dt),0);let Dt=P!==null?qe.get(P).__webglFramebuffer:null;Ze.bindFramebuffer(H.FRAMEBUFFER,Dt);let Jt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Fy(H,Jt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ge),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,ce),H.deleteBuffer(Ge),H.deleteSync(Jt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,k=null,G=0){R.isTexture!==!0&&(ja("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,R=arguments[1]);let W=Math.pow(2,-G),z=Math.floor(R.image.width*W),ce=Math.floor(R.image.height*W),Ae=k!==null?k.x:0,Fe=k!==null?k.y:0;I.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,G,0,0,Ae,Fe,z,ce),Ze.unbindTexture()},this.copyTextureToTexture=function(R,k,G=null,W=null,z=0){R.isTexture!==!0&&(ja("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1],k=arguments[2],z=arguments[3]||0,G=null);let ce,Ae,Fe,Be,at,dt,Ge,Dt,Jt,Qt=R.isCompressedTexture?R.mipmaps[z]:R.image;G!==null?(ce=G.max.x-G.min.x,Ae=G.max.y-G.min.y,Fe=G.isBox3?G.max.z-G.min.z:1,Be=G.min.x,at=G.min.y,dt=G.isBox3?G.min.z:0):(ce=Qt.width,Ae=Qt.height,Fe=Qt.depth||1,Be=0,at=0,dt=0),W!==null?(Ge=W.x,Dt=W.y,Jt=W.z):(Ge=0,Dt=0,Jt=0);let Zn=nt.convert(k.format),kt=nt.convert(k.type),Xe;k.isData3DTexture?(I.setTexture3D(k,0),Xe=H.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(I.setTexture2DArray(k,0),Xe=H.TEXTURE_2D_ARRAY):(I.setTexture2D(k,0),Xe=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,k.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,k.unpackAlignment);let gs=H.getParameter(H.UNPACK_ROW_LENGTH),zt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Pi=H.getParameter(H.UNPACK_SKIP_PIXELS),xo=H.getParameter(H.UNPACK_SKIP_ROWS),ii=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Qt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Qt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Be),H.pixelStorei(H.UNPACK_SKIP_ROWS,at),H.pixelStorei(H.UNPACK_SKIP_IMAGES,dt);let Fa=R.isDataArrayTexture||R.isData3DTexture,en=k.isDataArrayTexture||k.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let $i=qe.get(R),Ba=qe.get(k),fi=qe.get($i.__renderTarget),$s=qe.get(Ba.__renderTarget);Ze.bindFramebuffer(H.READ_FRAMEBUFFER,fi.__webglFramebuffer),Ze.bindFramebuffer(H.DRAW_FRAMEBUFFER,$s.__webglFramebuffer);for(let Xs=0;Xs<Fe;Xs++)Fa&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qe.get(R).__webglTexture,z,dt+Xs),R.isDepthTexture?(en&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qe.get(k).__webglTexture,z,Jt+Xs),H.blitFramebuffer(Be,at,ce,Ae,Ge,Dt,ce,Ae,H.DEPTH_BUFFER_BIT,H.NEAREST)):en?H.copyTexSubImage3D(Xe,z,Ge,Dt,Jt+Xs,Be,at,ce,Ae):H.copyTexSubImage2D(Xe,z,Ge,Dt,Jt+Xs,Be,at,ce,Ae);Ze.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ze.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else en?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Xe,z,Ge,Dt,Jt,ce,Ae,Fe,Zn,kt,Qt.data):k.isCompressedArrayTexture?H.compressedTexSubImage3D(Xe,z,Ge,Dt,Jt,ce,Ae,Fe,Zn,Qt.data):H.texSubImage3D(Xe,z,Ge,Dt,Jt,ce,Ae,Fe,Zn,kt,Qt):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,z,Ge,Dt,ce,Ae,Zn,kt,Qt.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,z,Ge,Dt,Qt.width,Qt.height,Zn,Qt.data):H.texSubImage2D(H.TEXTURE_2D,z,Ge,Dt,ce,Ae,Zn,kt,Qt);H.pixelStorei(H.UNPACK_ROW_LENGTH,gs),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,zt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Pi),H.pixelStorei(H.UNPACK_SKIP_ROWS,xo),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ii),z===0&&k.generateMipmaps&&H.generateMipmap(Xe),Ze.unbindTexture()},this.copyTextureToTexture3D=function(R,k,G=null,W=null,z=0){return R.isTexture!==!0&&(ja("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,R=arguments[2],k=arguments[3],z=arguments[4]||0),ja('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,k,G,W,z)},this.initRenderTarget=function(R){qe.get(R).__webglFramebuffer===void 0&&I.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?I.setTextureCube(R,0):R.isData3DTexture?I.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?I.setTexture2DArray(R,0):I.setTexture2D(R,0),Ze.unbindTexture()},this.resetState=function(){A=0,C=0,P=null,Ze.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ws}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}},Zc=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new he(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ki=class extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},al=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wd,this.updateRanges=[],this.version=0,this.uuid=Ss()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ss()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ss()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Bn=new w,Gr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Bn.fromBufferAttribute(this,t),Bn.applyMatrix4(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bn.fromBufferAttribute(this,t),Bn.applyNormalMatrix(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bn.fromBufferAttribute(this,t),Bn.transformDirection(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ui(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=$t(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ui(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ui(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ui(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ui(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),s=$t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new on(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ai=class extends Zi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new he(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Lo,Xa=new w,Do=new w,Uo=new w,No=new te,qa=new te,Tg=new pt,Sc=new w,Ya=new w,Tc=new w,qm=new te,Qu=new te,Ym=new te,xi=class extends fn{constructor(e=new ai){if(super(),this.isSprite=!0,this.type="Sprite",Lo===void 0){Lo=new Rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new al(t,5);Lo.setIndex([0,1,2,0,2,3]),Lo.setAttribute("position",new Gr(i,3,0,!1)),Lo.setAttribute("uv",new Gr(i,2,3,!1))}this.geometry=Lo,this.material=e,this.center=new te(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Do.setFromMatrixScale(this.matrixWorld),Tg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Uo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Do.multiplyScalar(-Uo.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Rc(Sc.set(-.5,-.5,0),Uo,o,Do,s,r),Rc(Ya.set(.5,-.5,0),Uo,o,Do,s,r),Rc(Tc.set(.5,.5,0),Uo,o,Do,s,r),qm.set(0,0),Qu.set(1,0),Ym.set(1,1);let a=e.ray.intersectTriangle(Sc,Ya,Tc,!1,Xa);if(a===null&&(Rc(Ya.set(-.5,.5,0),Uo,o,Do,s,r),Qu.set(0,1),a=e.ray.intersectTriangle(Sc,Tc,Ya,!1,Xa),a===null))return;let l=e.ray.origin.distanceTo(Xa);l<e.near||l>e.far||t.push({distance:l,point:Xa.clone(),uv:er.getInterpolation(Xa,Sc,Ya,Tc,qm,Qu,Ym,new te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Rc(n,e,t,i,s,r){No.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(qa.x=r*No.x-s*No.y,qa.y=s*No.x+r*No.y):qa.copy(No),n.copy(e),n.x+=qa.x,n.y+=qa.y,n.applyMatrix4(Tg)}var Vr=class extends Wn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=bn,h=bn,d,f){super(null,o,a,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kc=class extends on{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ho=new pt,Zm=new pt,Ac=[],Km=new Ni,Nb=new pt,Za=new ne,Ka=new or,ar=class extends ne{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Kc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Nb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ho),Km.copy(e.boundingBox).applyMatrix4(Ho),this.boundingBox.union(Km)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new or),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ho),Ka.copy(e.boundingSphere).applyMatrix4(Ho),this.boundingSphere.union(Ka)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Za.geometry=this.geometry,Za.material=this.material,Za.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ka.copy(this.boundingSphere),Ka.applyMatrix4(i),e.ray.intersectsSphere(Ka)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ho),Zm.multiplyMatrices(i,Ho),Za.matrixWorld=Zm,Za.raycast(e,Ac);for(let o=0,a=Ac.length;o<a;o++){let l=Ac[o];l.instanceId=r,l.object=this,t.push(l)}Ac.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Kc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Vr(new Float32Array(s*this.count),s,this.count,Of,Yi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var li=class extends Zi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Jm=new pt,lf=new Vc,Cc=new or,Pc=new w,vi=class extends fn{constructor(e=new Rt,t=new li){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cc.copy(i.boundingSphere),Cc.applyMatrix4(s),Cc.radius+=r,e.ray.intersectsSphere(Cc)===!1)return;Jm.copy(s).invert(),lf.copy(e.ray).applyMatrix4(Jm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,v=p;g<v;g++){let x=c.getX(g);Pc.fromBufferAttribute(d,x),jm(Pc,x,l,s,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=f,v=p;g<v;g++)Pc.fromBufferAttribute(d,g),jm(Pc,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function jm(n,e,t,i,s,r,o){let a=lf.distanceSqToPoint(n);if(a<t){let l=new w;lf.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ll=class extends Wn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=bn,this.minFilter=bn,this.generateMipmaps=!1,this.needsUpdate=!0}};var Xt=class extends Wn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},yi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new te:new w);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new w,s=[],r=[],o=[],a=new w,l=new pt;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new w)}r[0]=new w,o[0]=new w;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(En(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(En(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},cl=class extends yi{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new te){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*d+this.aX,c=f*d+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},cf=class extends cl{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function qf(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,p*=h,s(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Ic=new w,ed=new qf,td=new qf,nd=new qf,hl=class extends yi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new w){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ic.subVectors(s[0],s[1]).add(s[0]),c=Ic);let d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ic.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ic),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),x<1e-4&&(x=v),ed.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,g,v,x),td.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,g,v,x),nd.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,g,v,x)}else this.curveType==="catmullrom"&&(ed.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),td.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),nd.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return i.set(ed.calc(l),td.calc(l),nd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new w().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Qm(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Hb(n,e){let t=1-n;return t*t*e}function kb(n,e){return 2*(1-n)*n*e}function zb(n,e){return n*n*e}function il(n,e,t,i){return Hb(n,e)+kb(n,t)+zb(n,i)}function Ob(n,e){let t=1-n;return t*t*t*e}function Fb(n,e){let t=1-n;return 3*t*t*n*e}function Bb(n,e){return 3*(1-n)*n*n*e}function Gb(n,e){return n*n*n*e}function sl(n,e,t,i,s){return Ob(n,e)+Fb(n,t)+Bb(n,i)+Gb(n,s)}var Jc=class extends yi{constructor(e=new te,t=new te,i=new te,s=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new te){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(sl(e,s.x,r.x,o.x,a.x),sl(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},hf=class extends yi{constructor(e=new w,t=new w,i=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new w){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(sl(e,s.x,r.x,o.x,a.x),sl(e,s.y,r.y,o.y,a.y),sl(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},jc=class extends yi{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uf=class extends yi{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qc=class extends yi{constructor(e=new te,t=new te,i=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new te){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(il(e,s.x,r.x,o.x),il(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},eh=class extends yi{constructor(e=new w,t=new w,i=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new w){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(il(e,s.x,r.x,o.x),il(e,s.y,r.y,o.y),il(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},th=class extends yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Qm(a,l.x,c.x,h.x,d.x),Qm(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new te().fromArray(s))}return this}},df=Object.freeze({__proto__:null,ArcCurve:cf,CatmullRomCurve3:hl,CubicBezierCurve:Jc,CubicBezierCurve3:hf,EllipseCurve:cl,LineCurve:jc,LineCurve3:uf,QuadraticBezierCurve:Qc,QuadraticBezierCurve3:eh,SplineCurve:th}),ff=class extends yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new df[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new df[s.type]().fromJSON(s))}return this}},pf=class extends ff{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new jc(this.currentPoint.clone(),new te(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Qc(this.currentPoint.clone(),new te(e,t),new te(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Jc(this.currentPoint.clone(),new te(e,t),new te(i,s),new te(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new th(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new cl(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Rs=class n extends Rt{constructor(e=[new te(0,-.5),new te(.5,0),new te(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=En(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,d=new w,f=new te,p=new w,g=new w,v=new w,x=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:x=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,p.x=m*1,p.y=-x,p.z=m*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:x=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,p.x=m*1,p.y=-x,p.z=m*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(g)}for(let _=0;_<=t;_++){let E=i+_*h*s,M=Math.sin(E),D=Math.cos(E);for(let A=0;A<=e.length-1;A++){d.x=e[A].x*M,d.y=e[A].y,d.z=e[A].x*D,o.push(d.x,d.y,d.z),f.x=_/t,f.y=A/(e.length-1),a.push(f.x,f.y);let C=l[3*A+0]*M,P=l[3*A+1],S=l[3*A+0]*D;c.push(C,P,S)}}for(let _=0;_<t;_++)for(let E=0;E<e.length-1;E++){let M=E+_*e.length,D=M,A=M+e.length,C=M+e.length+1,P=M+1;r.push(D,A,P),r.push(C,P,A)}this.setIndex(r),this.setAttribute("position",new ot(o,3)),this.setAttribute("uv",new ot(a,2)),this.setAttribute("normal",new ot(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},nh=class n extends Rs{constructor(e=1,t=1,i=4,s=8){let r=new pf;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},Ji=class n extends Rt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new w,h=new te;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let p=i+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(a,3)),this.setAttribute("uv",new ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Le=class n extends Rt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],p=[],g=0,v=[],x=i/2,m=0;_(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ot(d,3)),this.setAttribute("normal",new ot(f,3)),this.setAttribute("uv",new ot(p,2));function _(){let M=new w,D=new w,A=0,C=(t-e)/i;for(let P=0;P<=r;P++){let S=[],b=P/r,U=b*(t-e)+e;for(let O=0;O<=s;O++){let F=O/s,V=F*l+a,Q=Math.sin(V),$=Math.cos(V);D.x=U*Q,D.y=-b*i+x,D.z=U*$,d.push(D.x,D.y,D.z),M.set(Q,C,$).normalize(),f.push(M.x,M.y,M.z),p.push(F,1-b),S.push(g++)}v.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){let b=v[S][P],U=v[S+1][P],O=v[S+1][P+1],F=v[S][P+1];(e>0||S!==0)&&(h.push(b,U,F),A+=3),(t>0||S!==r-1)&&(h.push(U,O,F),A+=3)}c.addGroup(m,A,0),m+=A}function E(M){let D=g,A=new te,C=new w,P=0,S=M===!0?e:t,b=M===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,x*b,0),f.push(0,b,0),p.push(.5,.5),g++;let U=g;for(let O=0;O<=s;O++){let V=O/s*l+a,Q=Math.cos(V),$=Math.sin(V);C.x=S*$,C.y=x*b,C.z=S*Q,d.push(C.x,C.y,C.z),f.push(0,b,0),A.x=Q*.5+.5,A.y=$*.5*b+.5,p.push(A.x,A.y),g++}for(let O=0;O<s;O++){let F=D+O,V=U+O;M===!0?h.push(V,V+1,F):h.push(V+1,V,F),P+=3}c.addGroup(m,P,M===!0?1:2),m+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},qt=class n extends Le{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ul=class n extends Rt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new ot(r,3)),this.setAttribute("normal",new ot(r.slice(),3)),this.setAttribute("uv",new ot(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let E=new w,M=new w,D=new w;for(let A=0;A<t.length;A+=3)p(t[A+0],E),p(t[A+1],M),p(t[A+2],D),l(E,M,D,_)}function l(_,E,M,D){let A=D+1,C=[];for(let P=0;P<=A;P++){C[P]=[];let S=_.clone().lerp(M,P/A),b=E.clone().lerp(M,P/A),U=A-P;for(let O=0;O<=U;O++)O===0&&P===A?C[P][O]=S:C[P][O]=S.clone().lerp(b,O/U)}for(let P=0;P<A;P++)for(let S=0;S<2*(A-P)-1;S++){let b=Math.floor(S/2);S%2===0?(f(C[P][b+1]),f(C[P+1][b]),f(C[P][b])):(f(C[P][b+1]),f(C[P+1][b+1]),f(C[P+1][b]))}}function c(_){let E=new w;for(let M=0;M<r.length;M+=3)E.x=r[M+0],E.y=r[M+1],E.z=r[M+2],E.normalize().multiplyScalar(_),r[M+0]=E.x,r[M+1]=E.y,r[M+2]=E.z}function h(){let _=new w;for(let E=0;E<r.length;E+=3){_.x=r[E+0],_.y=r[E+1],_.z=r[E+2];let M=x(_)/2/Math.PI+.5,D=m(_)/Math.PI+.5;o.push(M,1-D)}g(),d()}function d(){for(let _=0;_<o.length;_+=6){let E=o[_+0],M=o[_+2],D=o[_+4],A=Math.max(E,M,D),C=Math.min(E,M,D);A>.9&&C<.1&&(E<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),D<.2&&(o[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function p(_,E){let M=_*3;E.x=e[M+0],E.y=e[M+1],E.z=e[M+2]}function g(){let _=new w,E=new w,M=new w,D=new w,A=new te,C=new te,P=new te;for(let S=0,b=0;S<r.length;S+=9,b+=6){_.set(r[S+0],r[S+1],r[S+2]),E.set(r[S+3],r[S+4],r[S+5]),M.set(r[S+6],r[S+7],r[S+8]),A.set(o[b+0],o[b+1]),C.set(o[b+2],o[b+3]),P.set(o[b+4],o[b+5]),D.copy(_).add(E).add(M).divideScalar(3);let U=x(D);v(A,b+0,_,U),v(C,b+2,E,U),v(P,b+4,M,U)}}function v(_,E,M,D){D<0&&_.x===1&&(o[E]=_.x-1),M.x===0&&M.z===0&&(o[E]=D/2/Math.PI+.5)}function x(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},Mi=class n extends ul{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var $n=class n extends ul{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},lr=class n extends ul{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},tn=class n extends Rt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=e,f=(t-e)/s,p=new w,g=new te;for(let v=0;v<=s;v++){for(let x=0;x<=i;x++){let m=r+x/i*o;p.x=d*Math.cos(m),p.y=d*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}d+=f}for(let v=0;v<s;v++){let x=v*(i+1);for(let m=0;m<i;m++){let _=m+x,E=_,M=_+i+1,D=_+i+2,A=_+1;a.push(E,M,A),a.push(M,D,A)}}this.setIndex(a),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var We=class n extends Rt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new w,f=new w,p=[],g=[],v=[],x=[];for(let m=0;m<=i;m++){let _=[],E=m/i,M=0;m===0&&o===0?M=.5/t:m===i&&l===Math.PI&&(M=-.5/t);for(let D=0;D<=t;D++){let A=D/t;d.x=-e*Math.cos(s+A*r)*Math.sin(o+E*a),d.y=e*Math.cos(o+E*a),d.z=e*Math.sin(s+A*r)*Math.sin(o+E*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),x.push(A+M,1-E),_.push(c++)}h.push(_)}for(let m=0;m<i;m++)for(let _=0;_<t;_++){let E=h[m][_+1],M=h[m][_],D=h[m+1][_],A=h[m+1][_+1];(m!==0||o>0)&&p.push(E,M,A),(m!==i-1||l<Math.PI)&&p.push(M,D,A)}this.setIndex(p),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(v,3)),this.setAttribute("uv",new ot(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ne=class n extends Rt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new w,d=new w,f=new w;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let v=g/s*r,x=p/i*Math.PI*2;d.x=(e+t*Math.cos(x))*Math.cos(v),d.y=(e+t*Math.cos(x))*Math.sin(v),d.z=t*Math.sin(x),a.push(d.x,d.y,d.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let v=(s+1)*p+g-1,x=(s+1)*(p-1)+g-1,m=(s+1)*(p-1)+g,_=(s+1)*p+g;o.push(v,x,_),o.push(x,m,_)}this.setIndex(o),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ih=class n extends Rt{constructor(e=new eh(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new w,l=new w,c=new te,h=new w,d=[],f=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new ot(d,3)),this.setAttribute("normal",new ot(f,3)),this.setAttribute("uv",new ot(p,2));function v(){for(let E=0;E<t;E++)x(E);x(r===!1?t:0),_(),m()}function x(E){h=e.getPointAt(E/t,h);let M=o.normals[E],D=o.binormals[E];for(let A=0;A<=s;A++){let C=A/s*Math.PI*2,P=Math.sin(C),S=-Math.cos(C);l.x=S*M.x+P*D.x,l.y=S*M.y+P*D.y,l.z=S*M.z+P*D.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function m(){for(let E=1;E<=t;E++)for(let M=1;M<=s;M++){let D=(s+1)*(E-1)+(M-1),A=(s+1)*E+(M-1),C=(s+1)*E+M,P=(s+1)*(E-1)+M;g.push(D,A,P),g.push(A,C,P)}}function _(){for(let E=0;E<=t;E++)for(let M=0;M<=s;M++)c.x=E/t,c.y=M/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new df[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var cr=class extends Ct{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},me=class extends Zi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vf,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var sh=class extends Zi{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vf,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function Lc(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Vb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ko=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},mf=class extends Ko{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:J0,endingEnd:J0}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case j0:r=e,a=2*t-i;break;case Q0:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case j0:o=e,l=2*i-t;break;case Q0:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),v=g*g,x=v*g,m=-f*x+2*f*v-f*g,_=(1+f)*x+(-1.5-2*f)*v+(-.5+f)*g+1,E=(-1-p)*x+(1.5+p)*v+.5*g,M=p*x-p*v;for(let D=0;D!==a;++D)r[D]=m*o[h+D]+_*o[c+D]+E*o[l+D]+M*o[d+D];return r}},gf=class extends Ko{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},xf=class extends Ko{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Hi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Lc(t,this.TimeBufferType),this.values=Lc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Lc(e.times,Array),values:Lc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new xf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case zc:t=this.InterpolantFactoryMethodDiscrete;break;case Vd:t=this.InterpolantFactoryMethodLinear;break;case Tu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zc;case this.InterpolantFactoryMethodLinear:return Vd;case this.InterpolantFactoryMethodSmooth:return Tu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Vb(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Tu,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,f=d-i,p=d+i;for(let g=0;g!==i;++g){let v=t[d+g];if(v!==t[f+g]||v!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Hi.prototype.TimeBufferType=Float32Array;Hi.prototype.ValueBufferType=Float32Array;Hi.prototype.DefaultInterpolation=Vd;var Wr=class extends Hi{constructor(e,t,i){super(e,t,i)}};Wr.prototype.ValueTypeName="bool";Wr.prototype.ValueBufferType=Array;Wr.prototype.DefaultInterpolation=zc;Wr.prototype.InterpolantFactoryMethodLinear=void 0;Wr.prototype.InterpolantFactoryMethodSmooth=void 0;var vf=class extends Hi{};vf.prototype.ValueTypeName="color";var yf=class extends Hi{};yf.prototype.ValueTypeName="number";var Mf=class extends Ko{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)dn.slerpFlat(r,0,o,c-a,o,c,l);return r}},rh=class extends Hi{InterpolantFactoryMethodLinear(e){return new Mf(this.times,this.values,this.getValueSize(),e)}};rh.prototype.ValueTypeName="quaternion";rh.prototype.InterpolantFactoryMethodSmooth=void 0;var $r=class extends Hi{constructor(e,t,i){super(e,t,i)}};$r.prototype.ValueTypeName="string";$r.prototype.ValueBufferType=Array;$r.prototype.DefaultInterpolation=zc;$r.prototype.InterpolantFactoryMethodLinear=void 0;$r.prototype.InterpolantFactoryMethodSmooth=void 0;var _f=class extends Hi{};_f.prototype.ValueTypeName="vector";var Ef=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},Wb=new Ef,bf=class{constructor(e){this.manager=e!==void 0?e:Wb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};bf.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xr=class extends fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new he(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},hr=class extends Xr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},id=new pt,eg=new w,tg=new w,dl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ol,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;eg.setFromMatrixPosition(e.matrixWorld),t.position.copy(eg),tg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tg),t.updateMatrixWorld(),id.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(id),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(id)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},wf=class extends dl{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Wo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Jo=class extends Xr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new wf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ng=new pt,Ja=new w,sd=new w,Sf=class extends dl{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new Ft(2,1,1,1),new Ft(0,1,1,1),new Ft(3,1,1,1),new Ft(1,1,1,1),new Ft(3,0,1,1),new Ft(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ja.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ja),sd.copy(i.position),sd.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(sd),i.updateMatrixWorld(),s.makeTranslation(-Ja.x,-Ja.y,-Ja.z),ng.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ng)}},_i=class extends Xr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Sf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Tf=class extends dl{constructor(){super(new Xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ji=class extends Xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new Tf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},oh=class extends Xr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var jo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ig(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=ig();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function ig(){return performance.now()}var Yf="\\[\\]\\.:\\/",$b=new RegExp("["+Yf+"]","g"),Zf="[^"+Yf+"]",Xb="[^"+Yf.replace("\\.","")+"]",qb=/((?:WC+[\/:])*)/.source.replace("WC",Zf),Yb=/(WCOD+)?/.source.replace("WCOD",Xb),Zb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zf),Kb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zf),Jb=new RegExp("^"+qb+Yb+Zb+Kb+"$"),jb=["material","materials","bones","map"],Rf=class{constructor(e,t,i){let s=i||nn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},nn=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($b,"")}static parseTrackName(e){let t=Jb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);jb.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};nn.Composite=Rf;nn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nn.prototype.GetterByBindingType=[nn.prototype._getValue_direct,nn.prototype._getValue_array,nn.prototype._getValue_arrayElement,nn.prototype._getValue_toArray];nn.prototype.SetterByBindingTypeAndVersioning=[[nn.prototype._setValue_direct,nn.prototype._setValue_direct_setNeedsUpdate,nn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_array,nn.prototype._setValue_array_setNeedsUpdate,nn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_arrayElement,nn.prototype._setValue_arrayElement_setNeedsUpdate,nn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_fromArray,nn.prototype._setValue_fromArray_setNeedsUpdate,nn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nT=new Float32Array(1);var sg=new te,ah=class{constructor(e=new te(1/0,1/0),t=new te(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=sg.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sg).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Af}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Af);var ur={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Xn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Qb=new Xo(-1,1,1,-1,0,1),Kf=class extends Rt{constructor(){super(),this.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ot([0,2,0,0,2,0],2))}},ew=new Kf,Qi=class{constructor(e){this._mesh=new ne(ew,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Qb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Yr=class extends Xn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ct?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=jn.clone(e.uniforms),this.material=new Ct({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Qi(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var fl=class extends Xn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},fh=class extends Xn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ph=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new te);this._width=i.width,this._height=i.height,t=new wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Jn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Yr(ur),this.copyPass.material.blending=xn,this.clock=new jo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}fl!==void 0&&(o instanceof fl?i=!0:o instanceof fh&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var mh=class extends Xn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new he}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Rg={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new he(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var na=class n extends Xn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new te(e.x,e.y):new te(256,256),this.clearColor=new he(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new wn(r,o,{type:Jn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let f=new wn(r,o,{type:Jn});f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new wn(r,o,{type:Jn});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=Rg;this.highPassUniforms=jn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ct({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new te(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ur;this.copyUniforms=jn.clone(h.uniforms),this.blendMaterial=new Ct({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ze,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new he,this.oldClearAlpha=1,this.basic=new Ue,this.fsQuad=new Qi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new te(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Ct({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new te(.5,.5)},direction:{value:new te(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Ct({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};na.BlurDirectionX=new te(1,0);na.BlurDirectionY=new te(0,1);var Ag={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var gh=class extends Xn{constructor(){super();let e=Ag;this.uniforms=jn.clone(e.uniforms),this.material=new cr({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Qi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},St.getTransfer(this._outputColorSpace)===Ot&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===If?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Lf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Df?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===qr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Uf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Nf&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var pl={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new te},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new pt},cameraProjectionMatrixInverse:{value:new pt},cameraWorldMatrix:{value:new pt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new w(-1,-1,-1)},sceneBoxMax:{value:new w(1,1,1)}},vertexShader:`

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
		}`},ml={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},xh={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Cg(n=5){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=tw(e),i=t.length,s=new Uint8Array(i*4);for(let o=0;o<i;++o){let a=t[o],l=2*Math.PI*a/i,c=new w(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Vr(s,e,e);return r.wrapS=Vn,r.wrapT=Vn,r.needsUpdate=!0,r}function tw(n){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),i[s*e+r]!==0){r-=2,s++;continue}else i[s*e+r]=o++;r++,s--}return i}var gl={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Jf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new te},cameraProjectionMatrixInverse:{value:new pt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Jf(n,e,t){let i=nw(n,e,t),s="vec3[SAMPLES](";for(let r=0;r<n;r++){let o=i[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<n-1?",":")"}`}return s}function nw(n,e,t){let i=[];for(let s=0;s<n;s++){let r=2*Math.PI*e*s/n,o=Math.pow(s/(n-1),t);i.push(new w(Math.cos(r),Math.sin(r),o))}return i}var vh=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}noise(e,t){let i,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,d=(l+c)*h,f=l-d,p=c-d,g=e-f,v=t-p,x,m;g>v?(x=1,m=0):(x=0,m=1);let _=g-x+h,E=v-m+h,M=g-1+2*h,D=v-1+2*h,A=l&255,C=c&255,P=this.perm[A+this.perm[C]]%12,S=this.perm[A+x+this.perm[C+m]]%12,b=this.perm[A+1+this.perm[C+1]]%12,U=.5-g*g-v*v;U<0?i=0:(U*=U,i=U*U*this.dot(this.grad3[P],g,v));let O=.5-_*_-E*E;O<0?s=0:(O*=O,s=O*O*this.dot(this.grad3[S],_,E));let F=.5-M*M-D*D;return F<0?r=0:(F*=F,r=F*F*this.dot(this.grad3[b],M,D)),70*(i+s+r)}noise3d(e,t,i){let s,r,o,a,c=(e+t+i)*.3333333333333333,h=Math.floor(e+c),d=Math.floor(t+c),f=Math.floor(i+c),p=1/6,g=(h+d+f)*p,v=h-g,x=d-g,m=f-g,_=e-v,E=t-x,M=i-m,D,A,C,P,S,b;_>=E?E>=M?(D=1,A=0,C=0,P=1,S=1,b=0):_>=M?(D=1,A=0,C=0,P=1,S=0,b=1):(D=0,A=0,C=1,P=1,S=0,b=1):E<M?(D=0,A=0,C=1,P=0,S=1,b=1):_<M?(D=0,A=1,C=0,P=0,S=1,b=1):(D=0,A=1,C=0,P=1,S=1,b=0);let U=_-D+p,O=E-A+p,F=M-C+p,V=_-P+2*p,Q=E-S+2*p,$=M-b+2*p,se=_-1+3*p,X=E-1+3*p,ae=M-1+3*p,Se=h&255,ke=d&255,rt=f&255,It=this.perm[Se+this.perm[ke+this.perm[rt]]]%12,K=this.perm[Se+D+this.perm[ke+A+this.perm[rt+C]]]%12,le=this.perm[Se+P+this.perm[ke+S+this.perm[rt+b]]]%12,De=this.perm[Se+1+this.perm[ke+1+this.perm[rt+1]]]%12,pe=.6-_*_-E*E-M*M;pe<0?s=0:(pe*=pe,s=pe*pe*this.dot3(this.grad3[It],_,E,M));let $e=.6-U*U-O*O-F*F;$e<0?r=0:($e*=$e,r=$e*$e*this.dot3(this.grad3[K],U,O,F));let Je=.6-V*V-Q*Q-$*$;Je<0?o=0:(Je*=Je,o=Je*Je*this.dot3(this.grad3[le],V,Q,$));let tt=.6-se*se-X*X-ae*ae;return tt<0?a=0:(tt*=tt,a=tt*tt*this.dot3(this.grad3[De],se,X,ae)),32*(s+r+o+a)}noise4d(e,t,i,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,d,f,p,g,v=(e+t+i+s)*l,x=Math.floor(e+v),m=Math.floor(t+v),_=Math.floor(i+v),E=Math.floor(s+v),M=(x+m+_+E)*c,D=x-M,A=m-M,C=_-M,P=E-M,S=e-D,b=t-A,U=i-C,O=s-P,F=S>b?32:0,V=S>U?16:0,Q=b>U?8:0,$=S>O?4:0,se=b>O?2:0,X=U>O?1:0,ae=F+V+Q+$+se+X,Se=o[ae][0]>=3?1:0,ke=o[ae][1]>=3?1:0,rt=o[ae][2]>=3?1:0,It=o[ae][3]>=3?1:0,K=o[ae][0]>=2?1:0,le=o[ae][1]>=2?1:0,De=o[ae][2]>=2?1:0,pe=o[ae][3]>=2?1:0,$e=o[ae][0]>=1?1:0,Je=o[ae][1]>=1?1:0,tt=o[ae][2]>=1?1:0,Kt=o[ae][3]>=1?1:0,_t=S-Se+c,jt=b-ke+c,H=U-rt+c,An=O-It+c,vt=S-K+2*c,yt=b-le+2*c,Ze=U-De+2*c,Vt=O-pe+2*c,qe=S-$e+3*c,I=b-Je+3*c,T=U-tt+3*c,B=O-Kt+3*c,j=S-1+4*c,ie=b-1+4*c,J=U-1+4*c,Oe=O-1+4*c,ye=x&255,Te=m&255,xt=_&255,oe=E&255,Pe=a[ye+a[Te+a[xt+a[oe]]]]%32,je=a[ye+Se+a[Te+ke+a[xt+rt+a[oe+It]]]]%32,et=a[ye+K+a[Te+le+a[xt+De+a[oe+pe]]]]%32,Ie=a[ye+$e+a[Te+Je+a[xt+tt+a[oe+Kt]]]]%32,bt=a[ye+1+a[Te+1+a[xt+1+a[oe+1]]]]%32,nt=.6-S*S-b*b-U*U-O*O;nt<0?h=0:(nt*=nt,h=nt*nt*this.dot4(r[Pe],S,b,U,O));let Lt=.6-_t*_t-jt*jt-H*H-An*An;Lt<0?d=0:(Lt*=Lt,d=Lt*Lt*this.dot4(r[je],_t,jt,H,An));let N=.6-vt*vt-yt*yt-Ze*Ze-Vt*Vt;N<0?f=0:(N*=N,f=N*N*this.dot4(r[et],vt,yt,Ze,Vt));let ge=.6-qe*qe-I*I-T*T-B*B;ge<0?p=0:(ge*=ge,p=ge*ge*this.dot4(r[Ie],qe,I,T,B));let q=.6-j*j-ie*ie-J*J-Oe*Oe;return q<0?g=0:(q*=q,g=q*q*this.dot4(r[bt],j,ie,J,Oe)),27*(h+d+f+p+g)}};var ia=class n extends Xn{constructor(e,t,i,s,r,o,a){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Cg(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new wn(this.width,this.height,{type:Jn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ct({defines:Object.assign({},pl.defines),uniforms:jn.clone(pl.uniforms),vertexShader:pl.vertexShader,fragmentShader:pl.fragmentShader,blending:xn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new sh,this.normalMaterial.blending=xn,this.pdMaterial=new Ct({defines:Object.assign({},gl.defines),uniforms:jn.clone(gl.uniforms),vertexShader:gl.vertexShader,fragmentShader:gl.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ct({defines:Object.assign({},ml.defines),uniforms:jn.clone(ml.uniforms),vertexShader:ml.vertexShader,fragmentShader:ml.fragmentShader,blending:xn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ct({uniforms:jn.clone(ur.uniforms),vertexShader:ur.vertexShader,fragmentShader:ur.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ch,blendDst:Qo,blendEquation:mi,blendSrcAlpha:lh,blendDstAlpha:Qo,blendEquationAlpha:mi}),this.blendMaterial=new Ct({uniforms:jn.clone(xh.uniforms),vertexShader:xh.vertexShader,fragmentShader:xh.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Pf,blendSrc:ch,blendDst:Qo,blendEquation:mi,blendSrcAlpha:lh,blendDstAlpha:Qo,blendEquationAlpha:mi}),this.fsQuad=new Qi(null),this.originalClearColor=new he,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Yo,this.depthTexture.format=sr,this.depthTexture.type=ir,this.normalRenderTarget=new wn(this.width,this.height,{minFilter:bn,magFilter:bn,type:Jn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Jf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Off:break;case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=xn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=xn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=xn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=xn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=xn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){let s=t.get(i);i.visible=s}),t.clear()}generateNoise(e=64){let t=new vh,i=e*e*4,s=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Vr(s,e,e,oi,Kn);return r.wrapS=Vn,r.wrapT=Vn,r.needsUpdate=!0,r}};ia.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var u={scene:null,camera:null,renderer:null,player:null,time:{t:.3,day:1,elevation:1,night:0},res:{iron:0,silicon:0,ice:0,titanium:0},buildings:[],nodes:[],enemies:[],colonists:[],colony:{pop:0,housing:0,o2:0,food:0,water:0,support:0,powerProd:0,powerUse:0,deficit:!1},upgrades:{},stats:{mined:{iron:0,silicon:0,ice:0,titanium:0},built:{},kills:0,arrived:0,crafted:{}},chapter:0,terraform:0,ended:!1,storm:0,menuOpen:!1,locked:!1,started:!1,debug:!1,colliders:null,raining:!1,events:{map:{},on(n,e){var t;((t=this.map)[n]||(t[n]=[])).push(e)},emit(n,e){(this.map[n]||[]).forEach(t=>t(e))}}},sn={iron:{name:"\u94C1\u77FF",icon:"iron",color:"#d08a5e"},silicon:{name:"\u7845\u6676",icon:"silicon",color:"#f1dca0"},ice:{name:"\u6C34\u51B0",icon:"ice",color:"#a9dcff"},titanium:{name:"\u949B\u77FF",icon:"titanium",color:"#b9a6ff"}};function ki(n){for(let e in n)if((u.res[e]||0)<n[e])return!1;return!0}function xl(n){for(let e in n)u.res[e]-=n[e]}function sa(n){return Object.entries(n).map(([e,t])=>`<span class="cost ${u.res[e]>=t?"":"lack"}" style="--rc:${sn[e].color}"><svg class="ico"><use href="#i-${e}"/></svg>${t}</span>`).join(" ")}var yh=class{constructor(e=16){this.cell=e,this.map=new Map}key(e,t){return e*73856093^t*19349663}add(e){let t=this.cell,i=Math.floor((e.x-e.r)/t),s=Math.floor((e.x+e.r)/t),r=Math.floor((e.z-e.r)/t),o=Math.floor((e.z+e.r)/t);e._keys=[];for(let a=i;a<=s;a++)for(let l=r;l<=o;l++){let c=this.key(a,l);this.map.has(c)||this.map.set(c,[]),this.map.get(c).push(e),e._keys.push(c)}return e}remove(e){if(!(!e||!e._keys)){for(let t of e._keys){let i=this.map.get(t);if(!i)continue;let s=i.indexOf(e);s>=0&&i.splice(s,1)}e._keys=null}}query(e,t){return this.map.get(this.key(Math.floor(e/this.cell),Math.floor(t/this.cell)))||[]}overlaps(e,t,i){let s=this.cell,r=new Set;for(let o=Math.floor((e-i)/s);o<=Math.floor((e+i)/s);o++)for(let a=Math.floor((t-i)/s);a<=Math.floor((t+i)/s);a++){let l=this.map.get(this.key(o,a));if(l)for(let c of l){if(r.has(c))continue;r.add(c);let h=c.x-e,d=c.z-t,f=c.r+i;if(h*h+d*d<f*f)return c}}return null}};var qn={mars:{id:"mars",name:"\u706B\u661F",place:"\u4E4C\u6258\u90A6\u5E73\u539F",title:"\u65B0\u5BB6\u56ED",next:"europa",seed:2089,gravity:5.6,solar:1,terraformable:!0,craters:46,hills:46,ridges:14,detail:1.6,ground:{a:[.56,.25,.14],b:[.74,.4,.24],steep:[.36,.19,.13],low:[.42,.22,.16]},rockHSL:[.04,.45,.22],rock:9062960,sky:{dayTop:[.62,.42,.29],dayHor:[.9,.68,.5],setTop:[.17,.13,.15],setHor:[.58,.4,.33],nightTop:[.006,.008,.022],nightHor:[.035,.035,.055],halo:[.35,.58,.95],storm:[.62,.42,.28]},dust:16765088,enemy:[3808536,9054736,16730640],extras:"moons",storms:!0,intro:["2089 \u5E74\u3002","\u5730\u7403\u4F9D\u7136\u7F8E\u4E3D\uFF0C\u4F46\u5DF2\u7ECF\u592A\u62E5\u6324\u3001\u592A\u708E\u70ED\u3001\u592A\u75B2\u60EB\u3002","\u300C\u65B9\u821F\u8BA1\u5212\u300D\u628A\u4EBA\u7C7B\u7684\u672A\u6765\uFF0C\u62BC\u5728\u4E86\u4E00\u9897\u7EA2\u8272\u661F\u7403\u4E0A\u3002","\u7ECF\u8FC7\u4E03\u4E2A\u6708\u3001\u4E24\u4EBF\u4E24\u5343\u4E94\u767E\u4E07\u516C\u91CC\u7684\u822A\u884C\u2014\u2014","\u4F60\u7684\u7740\u9646\u8231\uFF0C\u5728\u4E4C\u6258\u90A6\u5E73\u539F\u7684\u6668\u5149\u4E2D\u843D\u5730\u3002",'\u4F60\u662F\u7B2C\u4E00\u4E2A\u3002<b style="color:#ff8a3d">\u4F46\u4E0D\u4F1A\u662F\u6700\u540E\u4E00\u4E2A\u3002</b>']},europa:{id:"europa",name:"\u6728\u536B\u4E8C\xB7\u6B27\u7F57\u5DF4",place:"\u5EB7\u7EB3\u9A6C\u62C9\u6DF7\u6C8C\u533A",title:"\u51B0\u4E0B\u4E4B\u6D77",next:"kepler",seed:1610,gravity:3.6,solar:.55,terraformable:!1,craters:14,hills:16,ridges:26,detail:1.1,ground:{a:[.8,.84,.88],b:[.93,.95,.97],steep:[.52,.36,.3],low:[.62,.72,.82]},rockHSL:[.58,.2,.62],rock:12110040,sky:{dayTop:[.02,.025,.05],dayHor:[.16,.18,.26],setTop:[.01,.012,.03],setHor:[.1,.1,.16],nightTop:[.004,.005,.012],nightHor:[.02,.025,.04],halo:[.6,.7,.9],storm:[.5,.6,.7]},dust:14676223,enemy:[1454138,2788e3,4251903],extras:"jupiter",storms:!1,intro:["\u706B\u661F\u7684\u706F\u706B\uFF0C\u5DF2\u7ECF\u5728\u8EAB\u540E\u4EAE\u6210\u4E86\u4E00\u7247\u3002","\u800C\u4F60\uFF0C\u518D\u4E00\u6B21\u51FA\u53D1\u4E86\u3002","\u6728\u661F\u7684\u7B2C\u4E8C\u9897\u536B\u661F\u2014\u2014\u6B27\u7F57\u5DF4\u3002","\u5728\u5B83\u4E8C\u5341\u516C\u91CC\u539A\u7684\u51B0\u58F3\u4E4B\u4E0B\uFF0C\u662F\u4E00\u6574\u7247\u4ECE\u672A\u89C1\u8FC7\u9633\u5149\u7684\u6D77\u6D0B\u3002","\u6728\u661F\uFF0C\u50CF\u4E00\u8F6E\u5DE8\u5927\u7684\u6708\u4EAE\uFF0C\u60AC\u5728\u5730\u5E73\u7EBF\u4E0A\u3002",'<b style="color:#66e6ff">\u4EBA\u7C7B\u7684\u7B2C\u4E8C\u4E2A\u5BB6\uFF0C\u5728\u51B0\u4E0B\u3002</b>']},kepler:{id:"kepler",name:"\u5F00\u666E\u52D2-442b",place:"\u7FE1\u7FE0\u8C37\u5730",title:"\u53CC\u65E5\u4E4B\u5730",next:null,seed:442,gravity:7.2,solar:1.3,terraformable:!1,craters:8,hills:64,ridges:10,detail:2.2,ground:{a:[.18,.36,.3],b:[.32,.52,.34],steep:[.3,.24,.3],low:[.2,.26,.4]},rockHSL:[.75,.25,.3],rock:6969994,sky:{dayTop:[.3,.5,.78],dayHor:[.78,.86,.8],setTop:[.2,.12,.3],setHor:[.9,.5,.4],nightTop:[.01,.01,.04],nightHor:[.05,.04,.09],halo:[1,.6,.4],storm:[.6,.7,.6]},dust:13172696,enemy:[1976854,5939242,10551104],extras:"twinsuns",storms:!1,intro:["\u4E00\u5343\u4E8C\u767E\u5149\u5E74\u3002","\u51B7\u51BB\u8231\u91CC\u7684\u4E09\u767E\u5E74\uFF0C\u5BF9\u4F60\u53EA\u662F\u4E00\u573A\u68A6\u3002","\u8237\u7A97\u5916\uFF0C\u4E24\u9897\u592A\u9633\u6B63\u4ECE\u7D2B\u8272\u7684\u5C71\u810A\u540E\u5347\u8D77\u3002","\u8FD9\u91CC\u6709\u98CE\uFF0C\u6709\u4E91\uFF0C\u6709\u4F1A\u5728\u591C\u91CC\u53D1\u5149\u7684\u68EE\u6797\u3002","\u5F00\u666E\u52D2-442b\u2014\u2014\u4EBA\u7C7B\u7B2C\u4E00\u6B21\uFF0C\u6765\u5230\u53E6\u4E00\u9897\u6052\u661F\u7684\u8EAB\u8FB9\u3002",'<b style="color:#a0ff70">\u4ECE\u8FD9\u91CC\u5F00\u59CB\uFF0C\u4EBA\u7C7B\u6210\u4E3A\u4E86\u661F\u9645\u6587\u660E\u3002</b>']}},Ig="starport-meta";function dr(){try{return JSON.parse(localStorage.getItem(Ig))||{}}catch{return{}}}function vl(n){try{localStorage.setItem(Ig,JSON.stringify(n))}catch{}}function jf(){try{for(let n of Object.keys(localStorage))n.startsWith("starport-")&&localStorage.removeItem(n)}catch{}}var Pg=new URLSearchParams(location.search).get("planet"),mn=dr(),it=qn[Pg]?Pg:qn[mn.planet]?mn.planet:"mars",xe=qn[it],Mh=it==="mars"?"starport-newhome-v1":"starport-planet-"+it;function ci(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function _h(n){let e=ci(n),t=[...Array(256).keys()];for(let l=255;l>0;l--){let c=Math.floor(e()*(l+1));[t[l],t[c]]=[t[c],t[l]]}let i=new Uint8Array(512);for(let l=0;l<512;l++)i[l]=t[l&255];let s=[1,-1,1,-1,1,-1,0,0],r=[1,1,-1,-1,0,0,1,-1],o=.5*(Math.sqrt(3)-1),a=(3-Math.sqrt(3))/6;return function(l,c){let h=0,d=0,f=0,p=(l+c)*o,g=Math.floor(l+p),v=Math.floor(c+p),x=(g+v)*a,m=l-(g-x),_=c-(v-x),E=m>_?1:0,M=m>_?0:1,D=m-E+a,A=_-M+a,C=m-1+2*a,P=_-1+2*a,S=g&255,b=v&255,U=.5-m*m-_*_;if(U>0){let V=i[S+i[b]]&7;U*=U,h=U*U*(s[V]*m+r[V]*_)}let O=.5-D*D-A*A;if(O>0){let V=i[S+E+i[b+M]]&7;O*=O,d=O*O*(s[V]*D+r[V]*A)}let F=.5-C*C-P*P;if(F>0){let V=i[S+1+i[b+1]]&7;F*=F,f=F*F*(s[V]*C+r[V]*P)}return 70*(h+d+f)}}function Qf(n,e,t,i=4,s=2,r=.5){let o=1,a=1,l=0,c=0;for(let h=0;h<i;h++)l+=o*n(e*a,t*a),c+=o,o*=r,a*=s;return l/c}var zi=(n,e,t)=>n<e?e:n>t?t:n,Ut=(n,e,t)=>n+(e-n)*t,Un=(n,e,t)=>{let i=zi((t-n)/(e-n),0,1);return i*i*(3-2*i)};var ht=512;function As(){let n=document.createElement("canvas");return n.width=n.height=ht,n}function Cs(n,e,t=1){let i=new Xt(n);return i.wrapS=i.wrapT=Vn,i.repeat.set(t,t),i.anisotropy=4,e&&(i.colorSpace=Et),i}function fr(n,e,t,i,s,r,o,a){for(let l=0;l<t;l++){n.fillStyle=`rgba(${i},${s+e()*(r-s)})`;let c=o+e()*(a-o);n.fillRect(e()*ht,e()*ht,c,c)}}function yl(n=1,e=4){let t=ci(n),i=As(),s=i.getContext("2d"),r=As(),o=r.getContext("2d"),a=As(),l=a.getContext("2d");s.fillStyle="#f2f0ec",s.fillRect(0,0,ht,ht),o.fillStyle="#8c8c8c",o.fillRect(0,0,ht,ht),l.fillStyle="#808080",l.fillRect(0,0,ht,ht);let c=ht/e;for(let d=0;d<e;d++)for(let f=0;f<e;f++){let p=236+Math.floor(t()*18);s.fillStyle=`rgb(${p},${p-2},${p-5})`,s.fillRect(d*c,f*c,c,c);let g=120+Math.floor(t()*40);if(o.fillStyle=`rgb(${g},${g},${g})`,o.fillRect(d*c,f*c,c,c),t()<.35){let v=c*(.25+t()*.3),x=c*(.2+t()*.25),m=d*c+c*.2+t()*c*.3,_=f*c+c*.2+t()*c*.3;l.strokeStyle="#4a4a4a",l.lineWidth=2,l.strokeRect(m,_,v,x),s.strokeStyle="rgba(80,76,70,.35)",s.lineWidth=1.5,s.strokeRect(m,_,v,x)}}for(let d=0;d<=e;d++){let f=d*c;for(let[p,g,v]of[[s,"rgba(70,64,58,.55)",2.5],[l,"#303030",4],[o,"#d0d0d0",3]])p.fillStyle=g,p.fillRect(f-v/2,0,v,ht),p.fillRect(0,f-v/2,ht,v)}for(let d=0;d<e;d++)for(let f=0;f<e;f++)for(let[p,g]of[[.08,.08],[.92,.08],[.08,.92],[.92,.92]]){let v=(d+p)*c,x=(f+g)*c;l.fillStyle="#c8c8c8",l.beginPath(),l.arc(v,x,3,0,7),l.fill(),s.fillStyle="rgba(90,86,80,.5)",s.beginPath(),s.arc(v,x,2.2,0,7),s.fill()}for(let d=0;d<70;d++){let f=t()*ht,p=30+t()*160,g=t()*ht,v=s.createLinearGradient(0,g,0,g+p);v.addColorStop(0,"rgba(150,90,60,0)"),v.addColorStop(.3,`rgba(150,90,60,${.05+t()*.08})`),v.addColorStop(1,"rgba(150,90,60,0)"),s.fillStyle=v,s.fillRect(f,g,1+t()*3,p)}let h=s.createLinearGradient(0,ht*.75,0,ht);h.addColorStop(0,"rgba(170,100,60,0)"),h.addColorStop(1,"rgba(170,100,60,.22)"),s.fillStyle=h,s.fillRect(0,0,ht,ht),fr(s,t,2500,"120,80,60",.03,.12,1,3),fr(o,t,1800,"255,255,255",.05,.2,1,4),s.strokeStyle="rgba(255,255,255,.25)",o.strokeStyle="rgba(40,40,40,.4)";for(let d=0;d<40;d++){let f=t()*ht,p=t()*ht,g=(t()-.5)*40,v=(t()-.5)*12;for(let x of[s,o])x.lineWidth=.8,x.beginPath(),x.moveTo(f,p),x.lineTo(f+g,p+v),x.stroke()}return{map:Cs(i,!0),roughnessMap:Cs(r,!1),bumpMap:Cs(a,!1)}}function Lg(n=7){let e=ci(n),t=As(),i=t.getContext("2d"),s=As(),r=s.getContext("2d");i.fillStyle="#e6e6e6",i.fillRect(0,0,ht,ht),r.fillStyle="#6a6a6a",r.fillRect(0,0,ht,ht);for(let o=0;o<ht;o++){let a=210+Math.floor(e()*45);i.fillStyle=`rgba(${a},${a},${a},.5)`,i.fillRect(0,o,ht,1);let l=80+Math.floor(e()*60);r.fillStyle=`rgba(${l},${l},${l},.5)`,r.fillRect(0,o,ht,1)}return fr(i,e,800,"60,50,40",.05,.15,1,3),{map:Cs(t,!0),roughnessMap:Cs(s,!1)}}function Dg(n=3){let e=ci(n),t=As(),i=t.getContext("2d"),s=As(),r=s.getContext("2d");i.fillStyle="#d8d2c8",i.fillRect(0,0,ht,ht),r.fillStyle="#808080",r.fillRect(0,0,ht,ht),fr(i,e,9e3,"90,80,70",.04,.16,1,4),fr(i,e,3e3,"255,250,240",.04,.12,1,3),fr(r,e,6e3,"40,40,40",.1,.4,1,3);for(let a=0;a<6;a++){i.strokeStyle="rgba(70,60,50,.25)",i.lineWidth=1,i.beginPath();let l=e()*ht,c=e()*ht;i.moveTo(l,c);for(let h=0;h<12;h++)l+=(e()-.5)*50,c+=(e()-.5)*50,i.lineTo(l,c);i.stroke()}let o=i.createLinearGradient(0,0,0,ht);return o.addColorStop(0,"rgba(170,100,60,0)"),o.addColorStop(1,"rgba(170,100,60,.3)"),i.fillStyle=o,i.fillRect(0,0,ht,ht),{map:Cs(t,!0,1),bumpMap:Cs(s,!1,1)}}function Ug(n=11){let e=ci(n),t=As(),i=t.getContext("2d"),s=As(),r=s.getContext("2d");i.fillStyle="#d0c4bc",i.fillRect(0,0,ht,ht),r.fillStyle="#808080",r.fillRect(0,0,ht,ht);for(let o=0;o<300;o++){let a=e()*ht,l=e()*ht,c=6+e()*40,h=Math.floor(150+e()*90);i.fillStyle=`rgba(${h},${h-15},${h-25},.25)`,i.beginPath(),i.ellipse(a,l,c,c*(.4+e()*.6),e()*3,0,7),i.fill(),r.fillStyle=`rgba(${h},${h},${h},.25)`,r.beginPath(),r.ellipse(a,l,c,c*.6,e()*3,0,7),r.fill()}return fr(i,e,8e3,"60,40,30",.05,.2,1,3),fr(r,e,8e3,"20,20,20",.1,.5,1,2),{map:Cs(t,!0,1),bumpMap:Cs(s,!1,1)}}var y={white:new me({color:15328474,roughness:.55,metalness:.1}),panel:new me({color:13222840,roughness:.6,metalness:.2}),metal:new me({color:8159110,roughness:.4,metalness:.7}),dark:new me({color:2895670,roughness:.5,metalness:.5}),orange:new me({color:16742954,roughness:.5,metalness:.1}),glass:new me({color:10474751,roughness:.05,metalness:.3,transparent:!0,opacity:.35}),window:new me({color:2240576,emissive:16761466,emissiveIntensity:0,roughness:.2}),solar:new me({color:1780826,roughness:.25,metalness:.8}),plant:new me({color:5221962,roughness:.8,flatShading:!0}),cyan:new me({color:1127236,emissive:3401471,emissiveIntensity:2}),red:new me({color:3342336,emissive:16722474,emissiveIntensity:3}),lamp:new me({color:3351057,emissive:16767392,emissiveIntensity:0}),found:new me({color:9143160,roughness:.9}),flame:new Ue({color:16756832,transparent:!0,opacity:.85,blending:ze,depthWrite:!1})};{let n=yl(1,4),e=yl(5,3),t=Lg(),i=Dg(),s=yl(9,2);Object.assign(y.white,{...n,bumpScale:1.4,roughness:.75,metalness:.15,color:new he(15920612)}),Object.assign(y.panel,{...e,bumpScale:1.2,roughness:.8,metalness:.25,color:new he(13617340)}),Object.assign(y.metal,{...t,roughness:1,metalness:.85,color:new he(10132900)}),Object.assign(y.dark,{...s,bumpScale:1,roughness:.7,metalness:.6,color:new he(3816772)}),Object.assign(y.orange,{...yl(3,2),bumpScale:.8,roughness:.7,metalness:.15}),Object.assign(y.found,{...i,bumpScale:2,roughness:.95,color:new he(10853004)}),y.glass.roughness=.02,y.glass.metalness=.1,y.glass.opacity=.28,y.glass.envMapIntensity=2.2,y.solar.roughness=.12,y.solar.envMapIntensity=1.8;for(let r in y)y[r].needsUpdate=!0}var es=Ug();{let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d");e.fillStyle="#1d3266",e.fillRect(0,0,64,64),e.strokeStyle="#9fb4e0",e.lineWidth=1.5;for(let i=0;i<=64;i+=16)e.beginPath(),e.moveTo(i,0),e.lineTo(i,64),e.stroke(),e.beginPath(),e.moveTo(0,i),e.lineTo(64,i),e.stroke();let t=new Xt(n);t.colorSpace=Et,t.wrapS=t.wrapT=Vn,t.repeat.set(3,2),y.solar.map=t,y.solar.color.set(16777215)}function Z(n,e,t=0,i=0,s=0,r){let o=new ne(n,e);return o.position.set(t,i,s),o.castShadow=!0,o.receiveShadow=!0,r&&r.add(o),o}var lt=(n,e,t)=>new Ye(n,e,t),st=(n,e,t,i=16)=>new Le(n,e,t,i),Eh;function Hn(){if(Eh)return Eh;let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.6)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Eh=new Xt(n),Eh}function _e(n,e,t,i=0,s=0,r=0){let o=new xi(new ai({map:Hn(),color:n,transparent:!0,blending:ze,depthWrite:!1}));return o.scale.set(e,e,1),o.position.set(i,s,r),t&&t.add(o),o}function Nn(n,e,t=!1){let i=Z(t?lt(e*2,4,e*2):st(e,e*1.05,4,20),y.found,0,-1.8,0,n);i.castShadow=!1,i.userData.found=!0}var Qn={solar(n,e){Nn(n,2.2,!0),Z(st(.18,.25,2.2),y.metal,0,1.1,0,n);let t=new de;t.position.y=2.3,n.add(t);let i=Z(lt(4.2,.12,2.8),y.solar,0,0,0,t);Z(lt(4.4,.08,.1),y.metal,0,-.05,1.42,t),Z(lt(4.4,.08,.1),y.metal,0,-.05,-1.42,t),e.pivot=t,e.panel=i},oxygen(n,e){Nn(n,3),Z(st(1,1,3.6),y.white,-1.3,1.8,0,n),Z(new We(1,16,8,0,Math.PI*2,0,Math.PI/2),y.white,-1.3,3.6,0,n),Z(st(1,1,3.6),y.white,1.3,1.8,0,n),Z(new We(1,16,8,0,Math.PI*2,0,Math.PI/2),y.white,1.3,3.6,0,n),Z(st(1.02,1.02,.3),y.orange,-1.3,2.4,0,n),Z(st(1.02,1.02,.3),y.orange,1.3,2.4,0,n),Z(lt(1.4,1.6,1.8),y.panel,0,.8,1,n),Z(st(.12,.12,2.6),y.metal,0,3.2,0,n).rotation.z=Math.PI/2;let t=new de;t.position.set(0,1.75,1.95),n.add(t);for(let i=0;i<4;i++){let s=Z(lt(.15,.7,.05),y.dark,0,0,0,t);s.rotation.z=i*Math.PI/2,s.position.set(Math.sin(i*Math.PI/2)*.3,Math.cos(i*Math.PI/2)*.3,0),s.rotation.z=-i*Math.PI/2}e.fan=t,e.light=_e(6741503,1.2,n,0,1.75,2)},habitat(n,e){Nn(n,6.2),Z(st(6,6,1.2,28),y.panel,0,.6,0,n);let t=Z(new We(5.8,28,12,0,Math.PI*2,0,Math.PI/2),y.white,0,1.2,0,n);t.scale.y=.85;let i=Z(new Le(5.72,5.84,.7,28,1,!0),y.window,0,2,0,n);Z(st(.1,.1,3),y.metal,0,7.4,0,n),e.tip=_e(16728128,1.2,n,0,8.9,0),Z(lt(2.2,2.6,2.8),y.white,0,1.3,6.4,n),Z(lt(1.2,2,.1),y.dark,0,1.1,7.82,n),Z(lt(2.3,.3,2.9),y.orange,0,2.7,6.4,n),e.windows=[i]},extractor(n,e){Nn(n,2.6,!0),Z(lt(4,.6,4),y.panel,0,.3,0,n);for(let[i,s]of[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4]])Z(st(.12,.15,6),y.metal,i*.7,3.3,s*.7,n).rotation.set(s*.08,0,-i*.08);Z(lt(1.6,.4,1.6),y.orange,0,6.2,0,n);let t=Z(st(.3,.3,4.5),y.metal,0,3,0,n);Z(st(.9,.9,1.6),y.white,1.7,1.4,1.2,n),e.drill=t,e.light=_e(10476799,1.2,n,1.7,2.5,1.2)},greenhouse(n,e){Nn(n,5,!0),Z(lt(10,.5,6),y.panel,0,.25,0,n);let t=Z(new Le(3,3,10,20,1,!1,0,Math.PI),y.glass,0,.5,0,n);t.rotation.set(0,0,Math.PI/2),t.castShadow=!1;for(let i=0;i<5;i++)Z(new Ne(3,.08,6,20,Math.PI),y.white,-4.5+i*2.25,.5,0,n).rotation.y=Math.PI/2;for(let i=0;i<14;i++){let s=-4.2+i%7*1.4,r=i<7?-1.2:1.2,o=Z(new qt(.45,1.2+i%3*.3,6),y.plant,s,1.2,r,n);o.castShadow=!1}Z(lt(9.6,.3,.5),y.dark,0,.7,-1.2,n),Z(lt(9.6,.3,.5),y.dark,0,.7,1.2,n),e.light=_e(16737996,4,n,0,2.5,0)},fabricator(n,e){Nn(n,4,!0),Z(lt(7,3.6,5),y.panel,0,1.8,0,n),Z(lt(7.1,.4,5.1),y.orange,0,3.4,0,n),Z(lt(3,2.6,.1),y.dark,0,1.3,2.52,n);let t=new de;t.position.set(2.2,3.6,0),n.add(t),Z(st(.35,.45,.6),y.metal,0,.3,0,t);let i=Z(lt(.3,2.2,.3),y.orange,0,1.4,0,t),s=Z(lt(.25,1.6,.25),y.metal,0,2.4,.6,t);s.rotation.x=.9,e.arm=t,e.spark=_e(16764006,1.2,n,2.2,5.7,1.2),Z(lt(1.2,1.2,1.2),y.dark,-2.4,.6,3.2,n),Z(lt(1,1,1),y.dark,-1.1,.5,3.1,n)},turret(n,e){Nn(n,1.8),Z(st(1.4,1.8,1.2,12),y.metal,0,.6,0,n),Z(st(.5,.7,1.2,10),y.dark,0,1.8,0,n);let t=new de;t.position.y=2.7,n.add(t),Z(lt(1.6,1,1.8),y.white,0,0,0,t),Z(lt(1.65,.2,1.85),y.orange,0,.35,0,t),Z(st(.12,.12,2.2,8),y.dark,-.4,0,-1.6,t).rotation.x=Math.PI/2,Z(st(.12,.12,2.2,8),y.dark,.4,0,-1.6,t).rotation.x=Math.PI/2,e.eye=_e(3401471,.9,t,0,.1,-.95),e.head=t},reactor(n,e){Nn(n,5.2),Z(st(5,5.2,1.4,24),y.panel,0,.7,0,n);let t=Z(new We(2,20,14),y.cyan,0,4.2,0,n);t.castShadow=!1;let i=Z(new Ne(3.2,.35,10,32),y.white,0,4.2,0,n),s=Z(new Ne(3.2,.35,10,32),y.white,0,4.2,0,n);s.rotation.x=Math.PI/2;for(let r=0;r<4;r++){let o=r*Math.PI/2;Z(lt(.6,3,.6),y.metal,Math.cos(o)*3.6,2.2,Math.sin(o)*3.6,n)}e.core=t,e.r1=i,e.r2=s,e.light=_e(3401471,9,n,0,4.2,0)},beacon(n,e){let t=Z(st(7,7.3,.6,8),y.found,0,0,0,n);Z(st(7.3,7.6,4,8),y.found,0,-2.3,0,n).castShadow=!1,Z(new tn(4.2,4.8,32),y.orange,0,.32,0,n).rotation.x=-Math.PI/2,Z(new tn(1.5,2,4),y.white,0,.32,0,n).rotation.x=-Math.PI/2,e.lights=[];for(let i=0;i<8;i++){let s=i*Math.PI/4+Math.PI/8;e.lights.push(_e(16755251,1.2,n,Math.cos(s)*6.6,.5,Math.sin(s)*6.6))}Z(st(.18,.3,9,8),y.metal,8.6,4.2,0,n),Z(lt(1.6,.1,1.2),y.white,8.6,8.7,0,n).rotation.z=.4,e.tip=_e(16724016,2,n,8.6,9.2,0),t.castShadow=!1},lamp(n,e){Z(st(.4,.5,.4,8),y.found,0,0,0,n),Z(st(.08,.1,4.2,6),y.metal,0,2.1,0,n),Z(lt(.6,.2,.6),y.dark,0,4.3,0,n);let t=Z(new We(.2,8,6),y.lamp,0,4.15,0,n);t.castShadow=!1,e.glow=_e(16767392,1.7,n,0,4.1,0)},terraformer(n,e){Nn(n,7),Z(st(7,7.5,2,6),y.panel,0,1,0,n),Z(st(2.5,4.5,26,6),y.white,0,15,0,n);for(let i=0;i<3;i++)Z(st(4.6-i*.7,4.6-i*.7,.8,6),y.orange,0,6+i*8,0,n);e.rings=[];for(let i=0;i<3;i++){let s=Z(new Ne(6-i*1.2,.25,8,40),y.cyan,0,10+i*8,0,n);s.castShadow=!1,e.rings.push(s)}for(let i=0;i<6;i++){let s=i*Math.PI/3,r=Z(lt(1.2,10,1.2),y.metal,Math.cos(s)*6,5,Math.sin(s)*6,n);r.rotation.y=-s}let t=Z(new Le(.6,1.4,400,12,1,!0),new Ue({color:6743807,transparent:!0,opacity:0,blending:ze,depthWrite:!1,side:Tt}),0,228,0,n);t.castShadow=!1,t.receiveShadow=!1,e.beam=t,e.top=_e(6743807,10,n,0,28,0)}};var Ng=[16751162,3850495,8257418,16740277,16769354].map(n=>new me({color:1118481,emissive:n,emissiveIntensity:.6,roughness:.1,metalness:.6})),Hg=[15525596,14278116,15259332].map(n=>new me({color:n,roughness:.7}));function Og(n){let e=new de,t=Hg[n%Hg.length],i=Ng[n%Ng.length],s=(g,v,x,m,_,E=e)=>{let M=new ne(g,v);return M.position.set(x,m,_),M.castShadow=!0,E.add(M),M},r=new Rs([[0,0],[.2,0],[.24,.12],[.27,.42],[.25,.55],[.12,.62],[0,.62]].map(([g,v])=>new te(g,v)),12),o=s(r,t,0,.72,0);o.scale.z=.8,s(new Ne(.2,.04,6,16),y.orange,0,.77,0).rotation.x=Math.PI/2,s(new Le(.16,.18,.06,12),y.dark,0,1.36,0);let a=s(new We(.21,16,12),t,0,1.58,0),l=s(new We(.19,16,10,Math.PI*.12,Math.PI*.76,Math.PI*.28,Math.PI*.4),i,0,1.58,.035);s(new Ye(.02,.12,.02),y.metal,.12,1.82,-.05).rotation.z=-.3,s(new Ye(.36,.42,.18),y.panel,0,1.08,-.24),s(new Ye(.3,.06,.19),y.orange,0,1.25,-.24),_e(9306032,.25,e,.12,.96,-.34);let c=(g,v,x,m,_)=>{let E=new de;E.position.set(g,v,0),e.add(E);let M=s(new nh(m,x,4,8),t,0,-x/2-m,0,E);return s(new Le(m*1.15,m*1.15,.05,8),_?y.orange:y.dark,0,-x*.45,0,E),_?s(new Ye(m*2.4,.1,m*3.4),y.dark,0,-x-m*1.6,.04,E):s(new We(m*1.2,8,6),y.dark,0,-x-m*1.6,0,E),E},h=c(-.11,.74,.5,.075,!0),d=c(.11,.74,.5,.075,!0),f=c(-.33,1.27,.42,.06,!1),p=c(.33,1.27,.42,.06,!1);return f.rotation.z=-.12,p.rotation.z=.12,{group:e,legL:h,legR:d,armL:f,armR:p,body:o,head:a,visor:l}}var JT=new me({color:xe.enemy[0],roughness:.3,metalness:.6,flatShading:!0,emissive:1049856}),iw=new me({color:xe.enemy[1],emissive:xe.enemy[2],emissiveIntensity:.8,roughness:.2,flatShading:!0}),sw=new Ue({color:16764992});function rw(n,e,t){let i=document.createElement("canvas");i.width=128,i.height=256;let s=i.getContext("2d");s.fillStyle="#000",s.fillRect(0,0,128,256);let r=t,o=()=>(r=(r*9301+49297)%233280,r/233280),a=128/n,l=256/e;for(let h=0;h<n;h++)for(let d=0;d<e;d++)o()<.65&&(s.fillStyle=o()<.8?"#ffd9a0":"#a0d8ff",s.fillRect(h*a+a*.2,d*l+l*.25,a*.6,l*.5));let c=new Xt(i);return c.colorSpace=Et,c}var _l=[];function kg(n){let e=new me({color:14210252,roughness:.5,metalness:.2,emissive:16777215,emissiveMap:rw(6,14,n),emissiveIntensity:.2});return _l.push(e),e}var zg=[kg(7),kg(31)],Ml;function Fg(){if(Ml)return Ml;let n=document.createElement("canvas");n.width=256,n.height=128;let e=n.getContext("2d");e.fillStyle="#0a3a6a",e.fillRect(0,0,256,128),e.strokeStyle="rgba(127,230,255,.35)",e.lineWidth=1;for(let i=0;i<256;i+=16)e.beginPath(),e.moveTo(i,0),e.lineTo(i,128),e.stroke();for(let i=0;i<128;i+=16)e.beginPath(),e.moveTo(0,i),e.lineTo(256,i),e.stroke();e.fillStyle="#7fffc8";let t=[[40,40,22,16],[52,62,10,20],[70,86,12,18],[118,36,16,12],[128,56,14,26],[150,34,40,18],[176,52,22,14],[206,88,16,10],[96,24,12,8],[190,22,20,8]];for(let[i,s,r,o]of t)e.beginPath(),e.ellipse(i,s,r,o,.3,0,Math.PI*2),e.fill();return e.fillStyle="#ffffff",e.fillRect(0,0,256,6),e.fillRect(0,122,256,6),Ml=new Xt(n),Ml.colorSpace=Et,Ml}Object.assign(Qn,{plaza(n,e){Nn(n,7.2),Z(st(7.2,7.4,.4,8),y.panel,0,.2,0,n),Z(new tn(5.4,5.8,48),y.orange,0,.42,0,n).rotation.x=-Math.PI/2,Z(st(1.6,2,1.1,16),y.white,0,.95,0,n),Z(st(1.65,1.65,.15,16),y.cyan,0,1.52,0,n);for(let r=0;r<6;r++){let o=r*Math.PI/3+Math.PI/6,a=Z(lt(2.4,.4,.7),y.panel,Math.cos(o)*5.2,.6,Math.sin(o)*5.2,n);a.rotation.y=-o+Math.PI/2,Z(lt(.12,3.2,.12),y.metal,Math.cos(o+.5)*6.6,1.8,Math.sin(o+.5)*6.6,n),_e(16767392,1.1,n,Math.cos(o+.5)*6.6,3.5,Math.sin(o+.5)*6.6)}let t=new ne(new We(1.5,32,20),new Ue({map:Fg(),transparent:!0,opacity:.75,blending:ze,depthWrite:!1}));t.position.y=4,n.add(t);let i=_e(6736127,5,n,0,4,0),s=new ne(new Le(1.2,1.6,2.4,20,1,!0),new Ue({color:8382207,transparent:!0,opacity:.12,blending:ze,depthWrite:!1,side:Tt}));s.position.y=2.7,n.add(s),e.earth=t,e.halo=i},drones(n,e){Nn(n,3.8,!0),Z(lt(7.4,.5,7.4),y.panel,0,.25,0,n);for(let[s,r]of[[-1.9,-1.9],[1.9,-1.9],[-1.9,1.9],[1.9,1.9]])Z(st(1.1,1.1,.1,16),y.dark,s,.55,r,n),Z(new tn(.75,.9,20),y.orange,s,.62,r,n).rotation.x=-Math.PI/2;Z(lt(1.2,4,1.2),y.white,3,2.2,3,n),Z(lt(1.25,.3,1.25),y.orange,3,3.6,3,n);let t=new de;t.position.set(3,4.6,3),n.add(t);let i=Z(new We(.9,12,6,0,Math.PI*2,0,Math.PI/3),y.white,0,0,0,t);i.rotation.x=Math.PI*.6,Z(st(.05,.05,.8,4),y.metal,0,.1,.2,t).rotation.x=1.1,e.dish=t,e.light=_e(8382207,1.4,n,3,5.4,3)},apartment(n,e){Nn(n,4.4,!0),Z(lt(8,1,8),y.panel,0,.5,0,n),Z(lt(5,18,5),zg[0],-1.2,10,-1.2,n),Z(lt(4,12,4),zg[1],2,7,2,n),Z(lt(5.2,.5,5.2),y.orange,-1.2,19.2,-1.2,n),Z(lt(4.2,.5,4.2),y.orange,2,13.2,2,n),Z(st(.1,.1,4,6),y.metal,-1.2,21.4,-1.2,n),e.tip=_e(16728128,1.6,n,-1.2,23.5,-1.2),Z(new We(1.6,16,8,0,Math.PI*2,0,Math.PI/2),y.glass,2,13.4,2,n).castShadow=!1},vfarm(n,e){Nn(n,4),Z(st(3.8,4,1,16),y.panel,0,.5,0,n);let t=Z(st(3.2,3.2,14,16),y.glass,0,8,0,n);t.castShadow=!1;for(let i=0;i<6;i++){Z(st(3,3,.25,16),y.white,0,2+i*2.3,0,n);for(let s=0;s<7;s++){let r=s/7*Math.PI*2+i,o=Z(new qt(.4,.9,5),y.plant,Math.cos(r)*2.2,2.6+i*2.3,Math.sin(r)*2.2,n);o.castShadow=!1}}Z(new We(3.2,16,8,0,Math.PI*2,0,Math.PI/2),y.glass,0,15,0,n).castShadow=!1,e.light=_e(16737996,9,n,0,8,0)},lifehub(n,e){Nn(n,5.5),Z(st(5.5,5.8,1.2,20),y.panel,0,.6,0,n);let t=Z(new We(4.5,20,12,0,Math.PI*2,0,Math.PI/2),y.white,0,1.2,0,n);Z(new Ne(4.6,.3,8,32),y.orange,0,1.6,0,n).rotation.x=Math.PI/2;for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4;Z(st(.9,.9,5,12),y.white,Math.cos(r)*5.2,2.5,Math.sin(r)*5.2,n),Z(st(.95,.95,.4,12),y.cyan,Math.cos(r)*5.2,4.2,Math.sin(r)*5.2,n)}let i=new de;i.position.y=6,n.add(i);for(let s=0;s<3;s++){let r=Z(lt(4,.1,.6),y.dark,0,0,0,i);r.rotation.y=s*Math.PI/3}e.fan=i,e.light=_e(6741503,5,n,0,6,0)},launch(n,e){Nn(n,9,!0),Z(lt(18,1.2,18),y.found,0,.6,0,n),Z(new tn(5,6,32),y.orange,0,1.25,0,n).rotation.x=-Math.PI/2;for(let[s,r]of[[6,-1.5],[6,1.5],[9,-1.5],[9,1.5]])Z(lt(.4,34,.4),y.metal,s,18,r,n);for(let s=0;s<8;s++)Z(lt(3.4,.25,3.4),y.metal,7.5,4+s*4,0,n);Z(lt(4,.5,.8),y.orange,4.2,26,0,n);let t=new de;t.position.y=1.2,n.add(t),Z(st(2.4,2.8,24,20),y.white,0,13,0,t),Z(new qt(2.4,7,20),y.white,0,28.5,0,t),Z(st(2.45,2.45,1.2,20),y.orange,0,20,0,t),Z(st(2.45,2.45,.6,20),y.dark,0,8,0,t);for(let s=0;s<4;s++){let r=s*Math.PI/2,o=Z(lt(.4,6,3),y.panel,Math.cos(r)*2.8,3.5,Math.sin(r)*2.8,t);o.rotation.y=-r}for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4;Z(st(.8,1.2,2,10),y.dark,Math.cos(r)*1.2,.6,Math.sin(r)*1.2,t)}let i=new ne(new qt(3,16,16,1,!0),y.flame);i.rotation.x=Math.PI,i.position.y=-8,i.visible=!1,t.add(i),e.ship=t,e.flame=i,e.tip=_e(16777215,3,t,0,32.5,0)},monument(n,e){Nn(n,6),Z(st(6,6.5,1.5,8),y.panel,0,.75,0,n),Z(st(4.5,5,1,8),y.white,0,2,0,n);let t=Z(new Le(.6,1.8,30,4),y.white,0,17,0,n);t.rotation.y=Math.PI/4,e.rings=[];let i=[new me({color:3346688,emissive:16742954,emissiveIntensity:2}),new me({color:8755,emissive:6743807,emissiveIntensity:2}),new me({color:1127168,emissive:10551104,emissiveIntensity:2})];for(let s=0;s<3;s++){let r=Z(new Ne(4-s*.6,.18,8,40),i[s],0,14+s*5,0,n);r.castShadow=!1,e.rings.push(r)}e.top=_e(16777215,8,n,0,33,0)}});function Bg(){let n=new de,e=Z(new We(.42,14,8),y.white,0,0,0,n);e.scale.y=.55,Z(st(.44,.44,.08,14),y.orange,0,0,0,n);let t=[];for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4,o=Math.cos(r)*.7,a=Math.sin(r)*.7;Z(lt(.6,.05,.08),y.dark,o*.55,0,a*.55,n).rotation.y=-r;let l=Z(st(.28,.28,.02,10),new Ue({color:2236962,transparent:!0,opacity:.45}),o,.08,a,n);t.push(l)}let i=_e(8382207,.9,n,0,-.2,0);return{group:n,rotors:t,eye:i}}var ep={crystal:iw,eye:sw};Qn._earthTex=Fg;var El=class n extends ne{constructor(){super(n.Geometry,new Ue({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;let e=new w,t=new w,i=new ll(16,16),s=new ll(16,16),r=Kn,o=n.Geometry,a=new cr({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),c=new ne(o,a),h=[],d=ra.Shader,f=new cr({name:d.name,uniforms:{map:{value:null},occlusionMap:{value:s},color:{value:new he(16777215)},scale:{value:new te},screenPosition:{value:new w}},vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:ze,transparent:!0,depthWrite:!1}),p=new ne(o,f);this.addElement=function(_){h.push(_)};let g=new te,v=new te,x=new ah,m=new Ft;this.onBeforeRender=function(_,E,M){_.getCurrentViewport(m);let D=_.getRenderTarget(),A=D!==null?D.texture.type:Kn;r!==A&&(i.dispose(),s.dispose(),i.type=s.type=A,r=A);let C=m.w/m.z,P=m.z/2,S=m.w/2,b=16/m.w;if(g.set(b*C,b),x.min.set(m.x,m.y),x.max.set(m.x+(m.z-16),m.y+(m.w-16)),t.setFromMatrixPosition(this.matrixWorld),t.applyMatrix4(M.matrixWorldInverse),!(t.z>0)&&(e.copy(t).applyMatrix4(M.projectionMatrix),v.x=m.x+e.x*P+P-8,v.y=m.y+e.y*S+S-8,x.containsPoint(v))){_.copyFramebufferToTexture(i,v);let U=a.uniforms;U.scale.value=g,U.screenPosition.value=e,_.renderBufferDirect(M,null,o,a,c,null),_.copyFramebufferToTexture(s,v),U=l.uniforms,U.scale.value=g,U.screenPosition.value=e,_.renderBufferDirect(M,null,o,l,c,null);let O=-e.x*2,F=-e.y*2;for(let V=0,Q=h.length;V<Q;V++){let $=h[V],se=f.uniforms;se.color.value.copy($.color),se.map.value=$.texture,se.screenPosition.value.x=e.x+O*$.distance,se.screenPosition.value.y=e.y+F*$.distance,b=$.size/m.w;let X=m.w/m.z;se.scale.value.set(b*X,b),f.uniformsNeedUpdate=!0,_.renderBufferDirect(M,null,o,f,p,null)}}},this.dispose=function(){a.dispose(),l.dispose(),f.dispose(),i.dispose(),s.dispose();for(let _=0,E=h.length;_<E;_++)h[_].texture.dispose()}}},ra=class{constructor(e,t=1,i=0,s=new he(16777215)){this.texture=e,this.size=t,this.distance=i,this.color=s}};ra.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

		}`};El.Geometry=function(){let n=new Rt,e=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),t=new al(e,5);return n.setIndex([0,1,2,0,2,3]),n.setAttribute("position",new Gr(t,3,0,!1)),n.setAttribute("uv",new Gr(t,2,3,!1)),n}();var ow=540,wl,oa,Ei,aa,tp,Sl,np,gr,Rl=(n,e,t)=>new he().setRGB(n,e,t,Et),pr=xe.sky,mr=n=>Rl(n[0],n[1],n[2]),ts={dayTop:mr(pr.dayTop),dayHor:mr(pr.dayHor),setTop:mr(pr.setTop),setHor:mr(pr.setHor),nightTop:mr(pr.nightTop),nightHor:mr(pr.nightHor),earthTop:Rl(.22,.44,.82),earthHor:Rl(.68,.8,.92),stormHor:mr(pr.storm),halo:mr(pr.halo)},Rn={},Tl,$g=[];function aw(n){let t=document.createElement("canvas");t.width=t.height=256;let i=t.getContext("2d");if(n==="streak"){let s=i.createLinearGradient(0,0,256,0);s.addColorStop(0,"rgba(255,255,255,0)"),s.addColorStop(.5,"rgba(255,255,255,1)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,256/2-2,256,4);let r=i.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);r.addColorStop(0,"rgba(255,255,255,.35)"),r.addColorStop(1,"rgba(255,255,255,0)"),i.globalCompositeOperation="destination-in",i.fillStyle=r,i.fillRect(0,0,256,256)}else if(n==="ring"){let s=i.createRadialGradient(128,128,92.16,128,128,128);s.addColorStop(0,"rgba(255,255,255,0)"),s.addColorStop(.7,"rgba(255,255,255,.35)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,256,256)}else if(n==="hex"){i.fillStyle="rgba(255,255,255,.22)",i.beginPath();for(let s=0;s<6;s++){let r=s*Math.PI/3;i[s?"lineTo":"moveTo"](256/2+Math.cos(r)*256*.45,256/2+Math.sin(r)*256*.45)}i.fill()}else{let s=i.createRadialGradient(128,128,0,128,128,128);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.15,"rgba(255,240,220,.6)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,256,256)}return new Xt(t)}function lw(n){Tl=new fn,n.add(Tl);let e=new El,t=(i,s,r,o)=>{let a=new ra(aw(i),s,r,new he(o));a.base=new he(o),e.addElement(a),$g.push(a)};t("glow",380,0,16771276),t("streak",1600,0,10148095),t("streak",900,0,16765088),t("hex",70,.35,7317759),t("ring",140,.55,16756848),t("hex",110,.75,8847304),t("glow",60,.9,16751200),t("ring",260,1.15,6982911),Tl.add(e)}var ip,Gg,Xg,bh=null,Vg=0,sp={mars:[.35,[.2,.9,.7],[.3,.5,1]],europa:[.6,[.4,.6,1],[.8,.4,1]],kepler:[1,[.3,1,.5],[.9,.3,.9]]}[xe.id],Ps;function cw(n){let e=new Le(1700,1700,900,160,1,!0,-1.2,2.6);Ps=new ne(e,new Ct({uniforms:{uT:{value:0},uI:{value:0},uC1:{value:new he(...sp[1])},uC2:{value:new he(...sp[2])}},vertexShader:`uniform float uT; varying vec2 vUv;
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
      }`,transparent:!0,blending:ze,depthWrite:!1,side:Tt,fog:!1})),Ps.position.y=700,Ps.rotation.y=2.2,Ps.frustumCulled=!1,Ps.renderOrder=-8,n.add(Ps)}var hw=Rl(.36,.42,.62),uw=Rl(.75,.65,.55),bl=new he,Wg=new he,Yn=new w;function qg(n){gr=new Ct({uniforms:{uTop:{value:new he},uHor:{value:new he},uSunDir:{value:new w(0,1,0)},uSunCol:{value:new he(1,.95,.85)},uHalo:{value:new he},uSunVis:{value:1}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`
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
      }`,side:Ln,depthWrite:!1}),wl=new ne(new We(4e3,32,16),gr),wl.frustumCulled=!1,wl.renderOrder=-10,n.add(wl),cw(n);let e=new Rt,t=[],i=[];for(let o=0;o<2600;o++){let a=Math.random()*2-1,l=Math.random()*Math.PI*2,c=Math.sqrt(1-a*a);if(a<-.05)continue;t.push(c*Math.cos(l)*3500,a*3500,c*Math.sin(l)*3500);let h=.35+Math.random()*.45,d=Math.random();i.push(h*(d>.8?1:.85),h*.9,h*(d<.2?1:.95))}t.push(-1800,1500,-2400),i.push(.5,.75,1.4),e.setAttribute("position",new ot(t,3)),e.setAttribute("color",new ot(i,3)),oa=new vi(e,new li({size:3,map:Hn(),sizeAttenuation:!1,vertexColors:!0,transparent:!0,depthWrite:!1,fog:!1})),oa.frustumCulled=!1,oa.renderOrder=-9,n.add(oa);let s=new me({color:9076080,roughness:1,fog:!1,flatShading:!0});if(Sl=new ne(new $n(60,1),s),Sl.scale.set(1.3,.9,1),np=new ne(new $n(24,1),s),xe.extras==="moons"&&n.add(Sl,np),xe.extras==="jupiter"){let o=document.createElement("canvas");o.width=512,o.height=256;let a=o.getContext("2d"),l=["#e8d8c0","#c89a70","#f0e6d4","#b07850","#e0c8a8","#9a6a48","#efe2cc","#c8a07a","#e6d6bc"];for(let p=0;p<256;p++)a.fillStyle=l[Math.floor(p/256*l.length*2+Math.sin(p*.3)*.6)%l.length],a.fillRect(0,p,512,1);a.globalAlpha=.25;for(let p=0;p<400;p++)a.fillStyle=l[p%l.length],a.fillRect(Math.random()*512,Math.random()*256,30+Math.random()*80,2);a.globalAlpha=1,a.fillStyle="#b8583a",a.beginPath(),a.ellipse(330,165,34,16,0,0,Math.PI*2),a.fill();let c=new Xt(o);c.colorSpace=Et;let h=new ne(new We(900,48,32),new Ue({map:c,fog:!1}));h.rotation.z=.06;let d=new ne(new We(905,48,32,Math.PI*.55,Math.PI),new Ue({color:0,transparent:!0,opacity:.55,fog:!1}));h.add(d);let f=new ne(new $n(30,2),new Ue({color:15257712,fog:!1}));n.add(h,f),Rn={jup:h,io:f}}if(xe.extras==="twinsuns"){let o=new xi(new ai({map:Hn(),color:16751200,transparent:!0,blending:ze,depthWrite:!1,fog:!1}));o.scale.set(500,500,1);let a=new ne(new tn(700,1100,64),new Ue({color:14207231,transparent:!0,opacity:.35,side:Tt,fog:!1,depthWrite:!1})),l=new ne(new We(420,32,24),new Ue({color:9075408,fog:!1}));l.add(a),a.rotation.x=1.2,n.add(o,l),Rn={s2:o,gas:l};let c=document.createElement("canvas");c.width=c.height=512;let h=c.getContext("2d"),d=h.createRadialGradient(256,256,120,256,256,256);d.addColorStop(0,"rgba(255,250,230,0)"),d.addColorStop(.08,"rgba(255,245,220,1)"),d.addColorStop(.3,"rgba(255,190,110,.85)"),d.addColorStop(.7,"rgba(200,90,40,.35)"),d.addColorStop(1,"rgba(120,40,20,0)"),h.fillStyle=d,h.fillRect(0,0,512,512),h.globalCompositeOperation="destination-out";for(let E=0;E<40;E++)h.strokeStyle=`rgba(0,0,0,${.1+Math.random()*.2})`,h.lineWidth=1+Math.random()*3,h.beginPath(),h.arc(256,256,130+Math.random()*120,0,Math.PI*2),h.stroke();let f=new Xt(c),p=new de,g=E=>new Ue({map:f,transparent:!0,opacity:E,blending:ze,depthWrite:!1,side:Tt,fog:!1}),v=new ne(new tn(150,560,96,1),g(.9));v.userData.op=.9,v.rotation.x=-1.35,p.add(v);let x=new ne(new tn(150,330,96,1),g(.75));x.userData.op=.75,p.add(x);let m=new ne(new Ji(150,64),new Ue({color:0,fog:!1,transparent:!0,depthWrite:!1}));m.userData.op=1,m.position.z=1,p.add(m);let _=new ne(new tn(150,158,96),new Ue({color:16770752,transparent:!0,opacity:.9,blending:ze,fog:!1,depthWrite:!1}));_.userData.op=.9,_.position.z=2,p.add(_),p.renderOrder=-7,n.add(p),Rn.bh=p,Rn.disk=v}Ei=new ji(16773341,3),Ei.castShadow=!0,Ei.shadow.mapSize.set(u.hiShadows?4096:2048,u.hiShadows?4096:2048);let r=Ei.shadow.camera;r.left=-70,r.right=70,r.top=70,r.bottom=-70,r.near=1,r.far=400,Ei.shadow.bias=-4e-4,Ei.shadow.normalBias=.6,n.add(Ei,Ei.target),lw(n),aa=new hr(16765616,5909530,1),tp=new oh(4213360,.3),n.add(aa,tp),n.fog=new Zc(14196848,.0016),ip=new Ki,Gg=new ne(new We(400,32,16),gr),ip.add(Gg),Xg=new qo(u.renderer)}function Al(n,e){let t=u.time,i=t.t;t.t+=n/ow*(t.elevation<0?1.5:1),t.t>=1&&(t.t-=1),i<.25&&t.t>=.25&&(t.day++,t.dawn=!0);let s=(t.t-.25)*Math.PI*2;Yn.set(Math.cos(s),Math.sin(s),.35).normalize();let r=Yn.y;t.elevation=r,t.night=Un(.05,-.18,r);let o=Un(0,1,u.terraform),a=u.storm,l=Un(-.05,.35,r),c=1-Math.abs(zi((r-.05)/.3,-1,1));bl.copy(ts.dayTop).lerp(ts.earthTop,o),Wg.copy(ts.dayHor).lerp(ts.earthHor,o);let h=gr.uniforms.uTop.value,d=gr.uniforms.uHor.value;h.copy(ts.nightTop).lerp(ts.setTop,Un(-.25,0,r)).lerp(bl,l),d.copy(ts.nightHor).lerp(ts.setHor,Un(-.25,0,r)).lerp(Wg,l),a>0&&(bl.copy(ts.stormHor).multiplyScalar(.25+.75*(1-t.night)),h.lerp(bl,a*.85),d.lerp(bl,a)),gr.uniforms.uHalo.value.copy(ts.halo).multiplyScalar(zi(c,0,1)*(1-o*.5)*(1-a)),gr.uniforms.uSunDir.value.copy(Yn),gr.uniforms.uSunVis.value=Un(-.08,.02,r)*(1-a*.85),wl.position.copy(e),oa.position.copy(e),Ps.position.set(e.x,e.y+700,e.z),Ps.material.uniforms.uT.value=performance.now()*.001,Ps.material.uniforms.uI.value=sp[0]*t.night*(1-a)*(.75+.25*Math.sin(performance.now()*7e-5+t.day)),oa.material.opacity=Math.max(t.night,xe.id==="europa"?.85:0)*(1-a);let f=u.time.t*Math.PI*6,p=-u.time.t*Math.PI*2+2;if(Sl.position.set(e.x+Math.cos(f)*2600,e.y+Math.sin(f)*1700+300,e.z-1300),Sl.lookAt(e),np.position.set(e.x+Math.cos(p)*2800,e.y+Math.sin(p)*2200,e.z+1600),Rn.jup){Rn.jup.position.set(e.x-1800,e.y+650,e.z-2600),Rn.jup.rotation.y+=4e-5;let x=u.time.t*Math.PI*8;Rn.io.position.set(e.x-1800+Math.cos(x)*1400,e.y+650+Math.sin(x)*300,e.z-2600+Math.sin(x)*1400)}if(Tl){Tl.position.copy(e).addScaledVector(Yn,3e3);let x=Un(-.03,.12,r)*(1-a)*(xe.id==="europa"?.6:1);for(let m of $g)m.color.copy(m.base).multiplyScalar(x)}Rn.bh&&(Rn.bh.position.set(e.x-2200,e.y+900,e.z+1900),Rn.bh.lookAt(e),Rn.disk.rotation.z+=n*.05,Rn.bh.children.forEach(x=>{x.material&&x.material.opacity!==void 0&&x.userData.op&&(x.material.opacity=x.userData.op*(.45+t.night*.55))})),Rn.s2&&(Rn.s2.position.copy(e).addScaledVector(new w(Yn.x*.8-.3,Yn.y*.9-.05,Yn.z+.4).normalize(),3e3),Rn.s2.material.opacity=Un(-.2,.05,r)*.9,Rn.gas.position.set(e.x+1600,e.y+1100,e.z+2400));let g=Un(-.04,.25,r);Ei.intensity=3*g*(1-a*.6),Ei.color.setRGB(1,Ut(.7,.93,g),Ut(.55,.85,g)),Ei.position.copy(e).addScaledVector(Yn,200),Ei.target.position.copy(e),aa.intensity=Ut(.45,.8,l)*(1-a*.3),aa.color.copy(d).lerp(h,.3).lerp(hw,t.night*.85),xe.id==="europa"&&aa.color.lerp(uw,.6),aa.groundColor.setRGB(Ut(.05,.38,l),Ut(.04,.18,l),Ut(.05,.1,l)),tp.intensity=Ut(.8,.2,l),u.scene.fog.color.copy(d),u.scene.fog.density=Ut(Ut(.0016,.0032,t.night),.03,a)*(xe.id==="europa"?.55:1);let v=performance.now();if(v-Vg>4e3||!bh){Vg=v;let x=bh;bh=Xg.fromScene(ip,.04,1,1e3),u.scene.environment=bh.texture,u.scene.environmentIntensity=Ut(.85,.35,t.night),x&&x.dispose()}u.renderer.toneMappingExposure=Ut(1,1.4,t.night)}function rp(){let n=Math.floor(u.time.t*24.66),e=Math.floor((u.time.t*24.66-n)*60);return`${xe.name} \xB7 \u7B2C ${u.time.day} \u65E5 \xB7 ${String(n).padStart(2,"0")}:${String(e).padStart(2,"0")}`}var an=1400,Qe=an/2,vr=400,ap=an/vr,ns=vr+1,Cl=_h(xe.seed),Sh=_h(xe.seed*7+3),Yg=_h(xe.seed+42),Is=[],is,xr,Th,Zr,wh;function dw(){let n=ci(xe.seed);for(Is.push({x:150,z:-120,r:70,depth:16,rim:6});Is.length<xe.craters;){let e=(n()-.5)*(an-260),t=(n()-.5)*(an-260);if(Math.hypot(e,t)<130)continue;let i=10+Math.pow(n(),2.2)*85;Is.push({x:e,z:t,r:i,depth:i*(.18+n()*.12),rim:i*(.05+n()*.06)})}}var fw=0;function Zg(n,e){let t=Qf(Cl,n*.0016,e*.0016,5)*xe.hills,i=1-Math.abs(Sh(n*.0042,e*.0042));t+=i*i*i*xe.ridges,t+=Qf(Yg,n*.025,e*.025,3)*xe.detail;for(let s of Is){let r=n-s.x,o=e-s.z,a=r*r+o*o;if(a>s.r*s.r*4)continue;let l=Math.sqrt(a)/s.r;l<1&&(t-=s.depth*(1-l*l)),t+=s.rim*Math.exp(-(((l-1)/.28)**2))}return t}var Kg=0;function pw(n,e){let t=Zg(n,e)-Kg,i=Math.hypot(n,e);t=Ut(fw+Yg(n*.02,e*.02)*.6,t,Un(45,150,i));let s=Math.max(Math.abs(n),Math.abs(e)),r=Qe-200;if(s>r){let o=(s-r)/200;t+=o*o*160*(.65+.35*Cl(n*.01,e*.01))}return t}function Ee(n,e){let t=zi((n+Qe)/ap,0,vr-.001),i=zi((e+Qe)/ap,0,vr-.001),s=Math.floor(t),r=Math.floor(i),o=t-s,a=i-r,l=is[r*ns+s],c=is[r*ns+s+1],h=is[(r+1)*ns+s],d=is[(r+1)*ns+s+1];return o+a<1?l+(c-l)*o+(h-l)*a:d+(h-d)*(1-o)+(c-d)*(1-a)}function Kr(n,e,t=2){let i=Ee(n,e);return Math.max(Math.abs(Ee(n+t,e)-i),Math.abs(Ee(n-t,e)-i),Math.abs(Ee(n,e+t)-i),Math.abs(Ee(n,e-t)-i))/t}function Rh(n,e,t=60){let i=0;for(let s=.2;s<=t;s+=.25){let r=n.x+e.x*s,o=n.y+e.y*s,a=n.z+e.z*s;if(o<Ee(r,a)){let l=i,c=s;for(let h=0;h<8;h++){let d=(l+c)/2;n.y+e.y*d<Ee(n.x+e.x*d,n.z+e.z*d)?c=d:l=d}return{dist:c,point:new w(n.x+e.x*c,n.y+e.y*c,n.z+e.z*c)}}i=s}return null}function Jg(n){dw(),Kg=Zg(0,0),is=new Float32Array(ns*ns),Zr=new Dn(an,an,vr,vr),Zr.rotateX(-Math.PI/2);let e=Zr.attributes.position;for(let s=0;s<e.count;s++){let r=pw(e.getX(s),e.getZ(s));e.setY(s,r),is[s]=r}xr=new Float32Array(e.count*3);let t=new he;for(let s=0;s<e.count;s++){let r=e.getX(s),o=e.getZ(s),a=is[s],l=s%ns,c=s/ns|0,h=is[c*ns+Math.min(l+1,vr)]-a,d=is[Math.min(c+1,vr)*ns+l]-a,f=zi(Math.hypot(h,d)/ap*1.4,0,1),p=Cl(r*.012,o*.012)*.5+.5,g=Sh(r*.08,o*.08)*.5+.5,v=xe.ground.a,x=xe.ground.b,m=xe.ground.steep,_=xe.ground.low,E=Ut(v[0],x[0],p),M=Ut(v[1],x[1],p),D=Ut(v[2],x[2],p);E*=.9+g*.18,M*=.9+g*.16,D*=.9+g*.14,E=Ut(E,m[0],f),M=Ut(M,m[1],f),D=Ut(D,m[2],f);let A=Un(-4,-16,a);if(E=Ut(E,_[0],A*.6),M=Ut(M,_[1],A*.6),D=Ut(D,_[2],A*.6),xe.id==="europa"){let C=Math.abs(Sh(r*.006,o*.006));if(C<.05){let P=1-C/.05;E=Ut(E,.55,P*.7),M=Ut(M,.32,P*.7),D=Ut(D,.24,P*.7)}}t.setRGB(E,M,D,Et),xr[s*3]=t.r,xr[s*3+1]=t.g,xr[s*3+2]=t.b}Th=new on(xr.slice(),3),Zr.setAttribute("color",Th),Zr.computeVertexNormals();let i=new me({vertexColors:!0,roughness:.93,metalness:0});return i.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},wh=new ne(Zr,i),wh.receiveShadow=!0,n.add(wh),mw(n),wh}function mw(n){let e=ci(99),t=new Mi(1,0),i=t.attributes.position;for(let p=0;p<i.count;p++){let g=.75+e()*.5;i.setXYZ(p,i.getX(p)*g,i.getY(p)*g*.8,i.getZ(p)*g)}t.computeVertexNormals();let s=2600,r=new ar(t,new me({color:xe.rock,roughness:xe.id==="europa"?.35:.92,flatShading:!0,map:es.map,bumpMap:es.bumpMap,bumpScale:3}),s);r.castShadow=!0,r.receiveShadow=!0;let o=new pt,a=new dn,l=new w,c=new w,h=new Sn,d=new he,f=0;for(;f<s;){let p=(e()-.5)*(an-120),g=(e()-.5)*(an-120);if(Math.hypot(p,g)<22||Cl(p*.01,g*.01)<-.1&&e()<.7)continue;let m=e()<.06?1.8+e()*2.5:.2+Math.pow(e(),2)*1.2;l.set(m*(.8+e()*.6),m*(.6+e()*.5),m*(.8+e()*.6)),h.set(e()*.5,e()*Math.PI*2,e()*.5),a.setFromEuler(h),c.set(p,Ee(p,g)+l.y*.25,g),o.compose(c,a,l),r.setMatrixAt(f,o),d.setHSL(xe.rockHSL[0]+e()*.02,xe.rockHSL[1]+e()*.2,xe.rockHSL[2]+e()*.14),r.setColorAt(f,d),m>1&&u.colliders.add({x:p,z:g,r:Math.max(l.x,l.z)*.85,kind:"rock"}),f++}n.add(r),xe.id==="kepler"&&vw(n,e)}var gw=new he().setRGB(.3,.46,.2,Et),xw=new he().setRGB(.46,.5,.26,Et),op=new he().setRGB(.2,.38,.52,Et);function lp(n,e){let t=Zr.attributes.position,i=Th.array,s=60+e*520;for(let r=0;r<t.count;r++){let o=t.getX(r),a=t.getZ(r),l=is[r],c=0;for(let p of n){let g=Math.hypot(o-p.x,a-p.z);c=Math.max(c,Un(s,s*.55,g))}let h=xr[r*3],d=xr[r*3+1],f=xr[r*3+2];if(c>0){let p=Sh(o*.03,a*.03)*.5+.5,g=c*zi(p*1.4-.1,0,1)*zi(e*1.5,0,1),v=p>.6?gw:xw;if(h=Ut(h,v.r,g),d=Ut(d,v.g,g),f=Ut(f,v.b,g),l<-9&&e>.5){let x=c*Un(-9,-13,l)*Un(.5,1,e);h=Ut(h,op.r,x),d=Ut(d,op.g,x),f=Ut(f,op.b,x)}}i[r*3]=h,i[r*3+1]=d,i[r*3+2]=f}Th.needsUpdate=!0}function jg(n=350){let e=document.createElement("canvas");e.width=e.height=n;let t=e.getContext("2d"),i=t.createImageData(n,n);for(let s=0;s<n;s++)for(let r=0;r<n;r++){let o=(r/n-.5)*an,a=(s/n-.5)*an,l=Ee(o,a),c=Ee(o+4,a+4)-l,h=zi(.55+l*.006-c*.08,.15,1),d=(s*n+r)*4,f=xe.ground.b;i.data[d]=255*f[0]*h,i.data[d+1]=255*f[1]*h,i.data[d+2]=255*f[2]*h,i.data[d+3]=255}return t.putImageData(i,0,0),e}var cp=new me({color:8010400,emissive:4259776,emissiveIntensity:.1,roughness:.6,flatShading:!0});function vw(n,e){let t=new Le(.25,.45,1,6);t.translate(0,.5,0);let i=new We(1,8,5,0,Math.PI*2,0,Math.PI/2),s=900,r=new ar(t,new me({color:14209208,roughness:.8,flatShading:!0}),s),o=new ar(i,cp,s);r.castShadow=o.castShadow=!0;let a=new pt,l=new dn,c=new w,h=new w,d=new he,f=0;for(;f<s;){let p=(e()-.5)*(an-300),g=(e()-.5)*(an-300);if(Math.hypot(p,g)<50||Cl(p*.008,g*.008)<.05||Kr(p,g,2)>.5)continue;let v=3+e()*9,x=1.5+e()*3,m=Ee(p,g);c.set(1+v*.05,v,1+v*.05),h.set(p,m-.2,g),l.identity(),a.compose(h,l,c),r.setMatrixAt(f,a),c.set(x,x*.5,x),h.set(p,m+v-.3,g),a.compose(h,l,c),o.setMatrixAt(f,a),d.setHSL(.72+e()*.2,.6,.4+e()*.2),o.setColorAt(f,d),u.colliders.add({x:p,z:g,r:.6,kind:"flora"}),f++}n.add(r,o)}var Ah=6e3,ss=60,yr,Pl,up,hp=new w(1e9,0,0),Qg=new pt,e1=new dn,t1=new w,n1=new w,i1=new Sn;function s1(){let n=new Mi(.12,0),e=new me({color:16777215,roughness:.95,flatShading:!0,map:es.map});yr=new ar(n,e,Ah),yr.receiveShadow=!0,yr.frustumCulled=!1;let t=ci(31);Pl=new Float32Array(Ah*2),up=[];let i=new he;for(let s=0;s<Ah;s++){Pl[s*2]=t()*ss*2,Pl[s*2+1]=t()*ss*2;let r=Math.pow(t(),3);up.push([.4+r*3.2,.25+t()*.6,.4+r*3,t()*6.28,t()*.6]),i.setHSL(xe.rockHSL[0]+t()*.03,xe.rockHSL[1]*(.5+t()*.5),Math.min(.75,xe.rockHSL[2]*(1.2+t()*.9))),yr.setColorAt(s,i)}u.scene.add(yr)}function r1(){if(!yr)return;let n=u.player.pos;if(Math.abs(n.x-hp.x)<3&&Math.abs(n.z-hp.z)<3)return;hp.copy(n);let e=n.x-ss,t=n.z-ss;for(let i=0;i<Ah;i++){let s=e+((Pl[i*2]-e)%(ss*2)+ss*2)%(ss*2),r=t+((Pl[i*2+1]-t)%(ss*2)+ss*2)%(ss*2),o=up[i];t1.set(o[0],o[0]*o[1],o[2]),i1.set(o[4],o[3],0),e1.setFromEuler(i1),n1.set(s,Ee(s,r)+.02,r),Qg.compose(n1,e1,t1),yr.setMatrixAt(i,Qg)}yr.instanceMatrix.needsUpdate=!0}var la=[],yw=new lr(.22,0),Il=class{constructor(e,t,i,s){this.max=t,this.n=0,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*4),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.base=new Float32Array(t*4),this.grav=new Float32Array(t),this.drag=new Float32Array(t);let r=new Rt;this.pa=new on(this.pos,3),this.ca=new on(this.col,4),this.pa.setUsage(Wf),this.ca.setUsage(Wf),r.setAttribute("position",this.pa),r.setAttribute("color",this.ca),this.mat=new li({size:s,map:Hn(),vertexColors:!0,transparent:!0,depthWrite:!1,blending:i?ze:gi,sizeAttenuation:!0}),this.points=new vi(r,this.mat),this.points.frustumCulled=!1,e.add(this.points)}emit(e,t,i,s,r,o,a,l,c,h,d,f=0,p=0){let g=this.n<this.max?this.n++:Math.floor(Math.random()*this.max);this.pos[g*3]=e,this.pos[g*3+1]=t,this.pos[g*3+2]=i,this.vel[g*3]=s,this.vel[g*3+1]=r,this.vel[g*3+2]=o,this.base[g*4]=a,this.base[g*4+1]=l,this.base[g*4+2]=c,this.base[g*4+3]=h,this.life[g]=d,this.maxLife[g]=d,this.grav[g]=f,this.drag[g]=p}update(e){let t=this.n;for(let i=0;i<t;i++){if(this.life[i]-=e,this.life[i]<=0){if(t--,i!==t){for(let o=0;o<3;o++)this.pos[i*3+o]=this.pos[t*3+o],this.vel[i*3+o]=this.vel[t*3+o];for(let o=0;o<4;o++)this.base[i*4+o]=this.base[t*4+o];this.life[i]=this.life[t],this.maxLife[i]=this.maxLife[t],this.grav[i]=this.grav[t],this.drag[i]=this.drag[t],i--}continue}let s=1-this.drag[i]*e;this.vel[i*3]*=s,this.vel[i*3+2]*=s,this.vel[i*3+1]=this.vel[i*3+1]*s-this.grav[i]*e,this.pos[i*3]+=this.vel[i*3]*e,this.pos[i*3+1]+=this.vel[i*3+1]*e,this.pos[i*3+2]+=this.vel[i*3+2]*e;let r=this.life[i]/this.maxLife[i];this.col[i*4]=this.base[i*4],this.col[i*4+1]=this.base[i*4+1],this.col[i*4+2]=this.base[i*4+2],this.col[i*4+3]=this.base[i*4+3]*Math.min(1,r*2.5)}this.n=t,this.points.geometry.setDrawRange(0,t),this.pa.needsUpdate=!0,this.ca.needsUpdate=!0}},Jr,Ph,jr,ca,dp;function o1(n){Jr=new Il(n,3e3,!0,.35),dp=new Il(n,4e3,!0,1.3),Ph=new Il(n,2500,!1,1.6);let e=new Rt,t=new Float32Array(1500*3);for(let r=0;r<t.length;r++)t[r]=(Math.random()-.5)*80;e.setAttribute("position",new on(t,3)),jr=new vi(e,new li({size:.25,map:Hn(),color:16765088,transparent:!0,opacity:.5,depthWrite:!1})),jr.frustumCulled=!1,n.add(jr);let i=new Rt,s=new Float32Array(3e3*3);for(let r=0;r<s.length;r++)s[r]=(Math.random()-.5)*70;i.setAttribute("position",new on(s,3)),ca=new vi(i,new li({size:.18,map:Hn(),color:12574975,transparent:!0,opacity:0,depthWrite:!1})),ca.frustumCulled=!1,n.add(ca)}var fe={debris(n,e,t=8,i=7,s=1){for(let r=0;r<t;r++){if(la.length>160){let h=la.shift();u.scene.remove(h.m)}let o=new ne(yw,e);o.castShadow=!0;let a=s*(.5+Math.random()*.9);o.scale.set(a,a*(1+Math.random()),a),o.position.copy(n),u.scene.add(o);let l=Math.random()*Math.PI*2,c=.4+Math.random()*.8;la.push({m:o,v:new w(Math.cos(l)*i*(1-c*.5),i*c,Math.sin(l)*i*(1-c*.5)),w:new w(Math.random()*10,Math.random()*10,Math.random()*10),life:3+Math.random()*2,s:a})}},spark(n,e=[1,.6,.2],t=6,i=4,s=.5){for(let r=0;r<t;r++)Jr.emit(n.x,n.y,n.z,(Math.random()-.5)*i,Math.random()*i,(Math.random()-.5)*i,e[0],e[1],e[2],1,s*(.5+Math.random()),6,1)},burst(n,e=[1,.5,.2],t=40,i=9){for(let s=0;s<t;s++){let r=Math.random()*2-1,o=Math.random()*6.283,a=Math.sqrt(1-r*r),l=i*(.4+Math.random()*.6);Jr.emit(n.x,n.y,n.z,a*Math.cos(o)*l,r*l,a*Math.sin(o)*l,e[0],e[1],e[2],1,.4+Math.random()*.6,4,2)}},dustPuff(n,e=10,t=2,i=[.72,.45,.3]){for(let s=0;s<e;s++)Ph.emit(n.x+(Math.random()-.5)*t,n.y+Math.random()*.5,n.z+(Math.random()-.5)*t,(Math.random()-.5)*3,Math.random()*1.5,(Math.random()-.5)*3,i[0],i[1],i[2],.55,1.2+Math.random(),-.2,1.5)},ring(n,e,t=60,i=[.72,.45,.3]){for(let s=0;s<t;s++){let r=s/t*6.283,o=6+Math.random()*6;Ph.emit(n.x+Math.cos(r)*e,n.y+.4,n.z+Math.sin(r)*e,Math.cos(r)*o,.5+Math.random(),Math.sin(r)*o,i[0],i[1],i[2],.6,1.5+Math.random(),-.1,1.2)}},firework(n,e,t,i,s){dp.emit(n.x,n.y,n.z,e,t,i,s[0]*1.6,s[1]*1.6,s[2]*1.6,1,1.6+Math.random()*.8,3,1.4)},trail(n,e,t=1){Jr.emit(n.x,n.y,n.z,(Math.random()-.5)*.4,(Math.random()-.5)*.4,(Math.random()-.5)*.4,e[0]*t,e[1]*t,e[2]*t,1,.18,0,0)},flame(n,e=1){Jr.emit(n.x+(Math.random()-.5)*.6,n.y,n.z+(Math.random()-.5)*.6,(Math.random()-.5)*2,-6*e-Math.random()*6,(Math.random()-.5)*2,1,.55,.2,1,.35,0,0)},rise(n,e,t=6){Jr.emit(n.x+(Math.random()-.5)*t,n.y,n.z+(Math.random()-.5)*t,0,6+Math.random()*6,0,e[0],e[1],e[2],1,2.5,-.5,0)}},Ch=0;function Ll(n,e){Jr.update(n),Ph.update(n),dp.update(n);for(let o=la.length-1;o>=0;o--){let a=la[o];a.life-=n,a.v.y-=9*n,a.m.position.addScaledVector(a.v,n),a.m.rotation.x+=a.w.x*n,a.m.rotation.y+=a.w.y*n,a.m.rotation.z+=a.w.z*n;let l=Ee(a.m.position.x,a.m.position.z)+.1;a.m.position.y<l&&(a.m.position.y=l,a.v.y=Math.abs(a.v.y)*.35,a.v.x*=.6,a.v.z*=.6,a.w.multiplyScalar(.5)),a.life<1&&a.m.scale.setScalar(Math.max(.001,a.s*a.life)),a.life<=0&&(u.scene.remove(a.m),la.splice(o,1))}let t=u.storm,i=jr.geometry.attributes.position,s=i.array,r=1+t*26;for(let o=0;o<s.length;o+=3){s[o]+=r*n,s[o+1]+=Math.sin(o+performance.now()*5e-4)*n*.2-t*n*1.5;let a=40;s[o]-e.x>a&&(s[o]-=2*a),s[o]-e.x<-a&&(s[o]+=2*a),s[o+1]-e.y>a/2&&(s[o+1]-=a),s[o+1]-e.y<-a/2&&(s[o+1]+=a),s[o+2]-e.z>a&&(s[o+2]-=2*a),s[o+2]-e.z<-a&&(s[o+2]+=2*a)}if(i.needsUpdate=!0,jr.material.size=.25+t*.3,jr.material.opacity=.3+t*.25,jr.material.color.setRGB(1,.8-u.time.night*.4,.62-u.time.night*.3),Ch+=((u.raining?1:0)-Ch)*n*.5,ca.material.opacity=Ch*.6,Ch>.01){let o=ca.geometry.attributes.position.array;for(let a=0;a<o.length;a+=3)o[a+1]-=22*n,o[a]+=2*n,o[a+1]<e.y-20&&(o[a+1]+=40),o[a]-e.x>35&&(o[a]-=70),o[a]-e.x<-35&&(o[a]+=70),o[a+2]-e.z>35&&(o[a+2]-=70),o[a+2]-e.z<-35&&(o[a+2]+=70);ca.geometry.attributes.position.needsUpdate=!0}}var Ih=null,ct,Mr,Qr,Dl,Ul,eo,Nl,Lh,Y={enabled:!0,init(){if(ct){ct.resume();return}try{ct=new(window.AudioContext||window.webkitAudioContext)}catch{return}Mr=ct.createGain(),Mr.gain.value=.7,Mr.connect(ct.destination),Qr=ct.createGain(),Qr.gain.value=.8,Qr.connect(Mr),Dl=ct.createGain(),Dl.gain.value=.22,Dl.connect(Mr),Lh=ct.createBuffer(1,ct.sampleRate*2,ct.sampleRate);let n=Lh.getChannelData(0),e=0;for(let i=0;i<n.length;i++){let s=Math.random()*2-1;e=(e+.02*s)/1.02,n[i]=e*3.5}let t=ct.createBufferSource();t.buffer=Lh,t.loop=!0,eo=ct.createBiquadFilter(),eo.type="bandpass",eo.frequency.value=400,eo.Q.value=.6,Ul=ct.createGain(),Ul.gain.value=.15,t.connect(eo),eo.connect(Ul),Ul.connect(Mr),t.start(),this.musicLoop()},setVolume(n){Mr&&(Mr.gain.value=n)},update(n,e){if(!ct)return;let t=ct.currentTime;Ul.gain.setTargetAtTime(.1+n*.6+e*.04,t,.5),eo.frequency.setTargetAtTime(300+n*500+Math.sin(t*.3)*120,t,.8)},tone(n,e,t="sine",i=.3,s=0,r=0,o){if(!ct)return;let a=ct.currentTime+r,l=ct.createOscillator(),c=ct.createGain();l.type=t,l.frequency.setValueAtTime(n,a),s&&l.frequency.exponentialRampToValueAtTime(Math.max(20,n*s),a+e),c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(i,a+.01),c.gain.exponentialRampToValueAtTime(1e-4,a+e),l.connect(c),c.connect(o||Qr),l.start(a),l.stop(a+e+.05)},noise(n,e=1e3,t=.3,i="lowpass",s=0,r=1){if(!ct)return;let o=ct.currentTime+s,a=ct.createBufferSource();a.buffer=Lh;let l=ct.createBiquadFilter();l.type=i,l.frequency.value=e,l.Q.value=r;let c=ct.createGain();c.gain.setValueAtTime(t,o),c.gain.exponentialRampToValueAtTime(1e-4,o+n),a.connect(l),l.connect(c),c.connect(Qr),a.start(o,Math.random()),a.stop(o+n+.05)},play(n){if(ct)switch(n){case"step":this.noise(.12,500+Math.random()*200,.12,"lowpass");break;case"jump":this.noise(.2,400,.15);break;case"land":this.noise(.25,300,.25);break;case"mine":this.tone(180+Math.random()*60,.08,"square",.04),this.noise(.08,2400,.06,"highpass");break;case"pickup":this.tone(880,.08,"sine",.08),this.tone(1320,.1,"sine",.06,0,.05);break;case"deplete":this.noise(.5,900,.3),this.tone(220,.4,"triangle",.15,.5);break;case"shoot":this.tone(900,.15,"sawtooth",.12,.25),this.noise(.1,3e3,.08,"highpass");break;case"turret":this.tone(700,.12,"square",.05,.3);break;case"hit":this.tone(300,.1,"square",.08,.5);break;case"kill":this.noise(.6,1600,.3,"bandpass",0,.8),this.tone(120,.5,"sawtooth",.12,.3);break;case"hurt":this.tone(160,.25,"sawtooth",.15,.6);break;case"place":this.tone(220,.15,"triangle",.2),this.tone(330,.15,"triangle",.2,0,.1),this.tone(440,.3,"triangle",.2,0,.2),this.noise(.4,600,.2);break;case"ui":this.tone(880,.05,"sine",.07),this.tone(1320,.08,"sine",.04,0,.03);break;case"scan":this.tone(300,1.2,"sine",.12,4),this.tone(600,.9,"triangle",.05,3,.1),this.noise(.8,2e3,.05,"bandpass",0,3);break;case"shutter":this.noise(.06,4e3,.25,"highpass"),this.noise(.1,1500,.15,"bandpass",.07);break;case"tick":this.tone(2400,.02,"sine",.025);break;case"open":this.tone(440,.12,"sine",.05,1.5),this.noise(.15,3e3,.03,"highpass");break;case"achv":[523,784,1046,1568].forEach((e,t)=>this.tone(e,.9,"triangle",.09,0,t*.09));break;case"deny":this.tone(200,.15,"square",.06),this.tone(150,.2,"square",.06,0,.1);break;case"craft":[523,659,784,1046].forEach((e,t)=>this.tone(e,.25,"triangle",.12,0,t*.08));break;case"radio":this.noise(.15,2500,.12,"bandpass",0,2),this.tone(1200,.05,"sine",.06,0,.12);break;case"alarm":this.tone(880,.18,"square",.06),this.tone(660,.18,"square",.06,0,.2);break;case"objective":[392,523,659].forEach((e,t)=>this.tone(e,.5,"sine",.15,0,t*.12));break;case"chapter":[262,330,392,523,659].forEach((e,t)=>this.tone(e,1.2,"sine",.12,0,t*.15));break;case"rumble":this.noise(4,150,.6),this.noise(3,400,.25,"lowpass",.5);break;case"jet":this.noise(.12,800,.1,"bandpass");break;case"night":this.tone(110,3,"sine",.12,.8),this.tone(165,3,"sine",.08,.8,.3);break}},engine(n){if(ct&&(n>0||Ih)){if(!Ih){let i=ct.createOscillator(),s=ct.createOscillator(),r=ct.createBiquadFilter(),o=ct.createGain();i.type="sawtooth",s.type="triangle",r.type="lowpass",r.frequency.value=500,o.gain.value=1e-4,i.connect(r),s.connect(r),r.connect(o),o.connect(Qr),i.start(),s.start(),Ih={o:i,o2:s,f:r,g:o}}let e=ct.currentTime,t=Ih;t.o.frequency.setTargetAtTime(38+n*70,e,.1),t.o2.frequency.setTargetAtTime(76+n*140,e,.1),t.f.frequency.setTargetAtTime(300+n*900,e,.1),t.g.gain.setTargetAtTime(n>0||u.driving?.03+n*.05:1e-4,e,.15)}},laser(n){if(ct){if(n&&!Nl){let e=ct.createOscillator(),t=ct.createOscillator(),i=ct.createGain(),s=ct.createBiquadFilter();e.type="sawtooth",e.frequency.value=110,t.type="square",t.frequency.value=113,s.type="lowpass",s.frequency.value=900,i.gain.value=1e-4,i.gain.exponentialRampToValueAtTime(.06,ct.currentTime+.1),e.connect(s),t.connect(s),s.connect(i),i.connect(Qr),e.start(),t.start(),Nl={o:e,o2:t,g:i}}else if(!n&&Nl){let e=Nl;Nl=null,e.g.gain.setTargetAtTime(1e-4,ct.currentTime,.04),e.o.stop(ct.currentTime+.2),e.o2.stop(ct.currentTime+.2)}}},musicLoop(){let n=[[220,277.2,329.6,415.3],[196,246.9,293.7,392],[174.6,220,261.6,349.2],[164.8,207.7,246.9,329.6],[146.8,220,293.7,370]],e=0,t=()=>{if(!ct)return;let i=n[e++%n.length],s=ct.currentTime;if(i.forEach((r,o)=>{let a=ct.createOscillator(),l=ct.createGain();a.type=o===0?"triangle":"sine",a.frequency.value=r*(o===0?.5:1),a.detune.value=(Math.random()-.5)*8,l.gain.setValueAtTime(1e-4,s),l.gain.exponentialRampToValueAtTime(.06,s+3),l.gain.exponentialRampToValueAtTime(1e-4,s+11),a.connect(l),l.connect(Dl),a.start(s),a.stop(s+11.5)}),Math.random()<.7){let r=i[1+Math.floor(Math.random()*3)]*2;for(let o=0;o<3;o++)Math.random()<.6&&this.tone(r*[1,1.122,1.335][o],2.5,"sine",.025,0,2+o*1.6,Dl)}setTimeout(t,9e3)};t()}};var Hl={iron:new me({color:6965822,roughness:.4,metalness:.8,flatShading:!0,map:es.map,bumpMap:es.bumpMap,bumpScale:4}),ironVein:new me({color:10246714,roughness:.3,metalness:.9,flatShading:!0,emissive:3806216}),ice:new me({color:13627135,roughness:.08,metalness:.1,flatShading:!0,transparent:!0,opacity:.9,emissive:1456202}),silicon:new me({color:15983014,roughness:.15,metalness:.4,flatShading:!0,emissive:2761224}),titanium:new me({color:10194175,roughness:.1,metalness:.5,flatShading:!0,emissive:5913855,emissiveIntensity:.6}),base:new me({color:8276790,roughness:.95,flatShading:!0,map:es.map,bumpMap:es.bumpMap,bumpScale:4})},a1={iron:null,ice:8969727,silicon:16770720,titanium:9071871},Ls={iron:[1,.55,.3],ice:[.6,.9,1],silicon:[1,.9,.55],titanium:[.7,.55,1]};function Mw(n,e,t){let i=new qt(t,e,5,1);i.translate(0,e/2,0);let s=new ne(i,n);return s.castShadow=!0,s}function _w(n,e){let t=new de;if(n==="iron")for(let i=0;i<4;i++){let s=new ne(new Mi(.6+e()*.7,0),i===0?Hl.ironVein:Hl.iron);s.position.set((e()-.5)*1.8,.3+e()*.4,(e()-.5)*1.8),s.rotation.set(e()*3,e()*3,e()*3),s.scale.y=.8,s.castShadow=!0,t.add(s)}else{let i=new ne(new Mi(1.1,0),Hl.base);i.scale.set(1.2,.45,1.2),i.castShadow=!0,t.add(i);let s=n==="titanium"?6:7;for(let r=0;r<s;r++){let o=Mw(Hl[n],.8+e()*(n==="ice"?1.6:1.9),.18+e()*.22),a=e()*6.28,l=e()*.8;o.position.set(Math.cos(a)*l,.2,Math.sin(a)*l),o.rotation.set((e()-.5)*.9,e()*3,(e()-.5)*.9),t.add(o)}a1[n]&&t.add(_e(a1[n],n==="titanium"?5:3,null,0,1.2,0))}return t}var l1=Math.random;function ua(n,e,t,i){let s=_w(n,l1),r=Ee(e,t);s.position.set(e,r,t),s.rotation.y=l1()*6.28,u.scene.add(s);let o=i??{iron:30,ice:25,silicon:25,titanium:14}[n],a={type:n,x:e,z:t,y:r,amount:o,max:o,mesh:s,r:1.6};return a.collider=u.colliders.add({x:e,z:t,r:1.3,kind:"node"}),u.nodes.push(a),a}function c1(n,e){for(let t=0;t<200;t++){let i,s;if(n==="ice"&&Math.random()<.75){let o=Is[Math.floor(Math.random()*Math.min(Is.length,30))],a=Math.random()*6.28,l=Math.random()*o.r*.7;i=o.x+Math.cos(a)*l,s=o.z+Math.sin(a)*l}else if(e){let o=Math.random()*6.28,a=e[0]+Math.random()*(e[1]-e[0]);i=Math.cos(o)*a,s=Math.sin(o)*a}else i=(Math.random()-.5)*(2*Qe-300),s=(Math.random()-.5)*(2*Qe-300);let r=Math.hypot(i,s);if(!(n==="titanium"&&r<260)&&!(r<18)&&!(Math.abs(i)>Qe-160||Math.abs(s)>Qe-160)&&!(Kr(i,s,2)>.6)&&!u.colliders.overlaps(i,s,3))return[i,s]}return null}function h1(){let n=[["iron",22,8],["iron",-18,20],["iron",30,-25],["silicon",-26,-14],["silicon",12,34],["ice",40,10],["iron",-40,-38],["silicon",45,42]];for(let[t,i,s]of n)ua(t,i,s);let e={iron:70,silicon:50,ice:40,titanium:22};for(let t in e)for(let i=0;i<e[t];i++){let s=c1(t,t==="titanium"?null:i<e[t]*.35?[40,220]:null);s&&ua(t,s[0],s[1])}}function u1(n){u.scene.remove(n.mesh),u.colliders.remove(n.collider);let e=u.nodes.indexOf(n);e>=0&&u.nodes.splice(e,1)}var ha=[];function Dh(n,e){n.amount-=e;let t=.35+.65*Math.max(0,n.amount/n.max);if(n.mesh.scale.setScalar(t),n.amount<=0){let i=n.mesh.position.clone();i.y+=1,fe.burst(i,Ls[n.type],40,7);let s=n.mesh.children.find(r=>r.isMesh&&r!==n.mesh.children[0])?.material||n.mesh.children[0].material;return fe.debris(i,s,9,5,1.1),fe.dustPuff(i,16,3),u1(n),ha.push({type:n.type,t:90+Math.random()*60}),!0}return!1}function d1(n){for(let t=ha.length-1;t>=0;t--)if(ha[t].t-=n,ha[t].t<=0){let i=ha[t].type;ha.splice(t,1);let s=c1(i,i==="titanium"?null:[60,400]);s&&ua(i,s[0],s[1])}let e=1+Math.sin(performance.now()*.002)*.15;Hl.titanium.emissiveIntensity=.5*e}function f1(){return u.nodes.map(n=>[n.type,+n.x.toFixed(1),+n.z.toFixed(1),Math.round(n.amount)])}function p1(n){for(let e of[...u.nodes])u1(e);for(let[e,t,i,s]of n){let r=ua(e,t,i);r.amount=s,r.mesh.scale.setScalar(.35+.65*s/r.max)}}var g1=`
  float h3(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
  float n3(vec3 x){ vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z); }
  float fbm3(vec3 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * n3(p); p *= 2.07; a *= 0.5; } return s; }`,fp={value:0},Ew=new Ct({uniforms:{uT:fp,uPow:{value:1}},vertexShader:`uniform float uT; varying vec2 vUv; varying vec3 vN, vV;
    void main(){ vUv = uv; vec3 p = position;
      float w = sin(uv.y * 14.0 - uT * 40.0) * 0.06 * uv.y;
      p.x += w; p.z += cos(uv.y * 11.0 - uT * 33.0) * 0.06 * uv.y;
      vec4 mv = modelViewMatrix * vec4(p, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);
      gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform float uT, uPow; varying vec2 vUv; varying vec3 vN, vV; ${g1}
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
    }`,transparent:!0,blending:ze,depthWrite:!1,side:Tt});function x1(n){return new Ct({uniforms:{uT:fp,uLen:{value:1},uC:{value:new he(n)},uI:{value:1}},vertexShader:`varying vec2 vUv; varying vec3 vN, vV;
      void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform float uT, uLen, uI; uniform vec3 uC; varying vec2 vUv; varying vec3 vN, vV; ${g1}
      void main(){
        float f = pow(abs(dot(vN, vV)), 2.5);
        float flow = fbm3(vec3(vUv.x * 3.0, vUv.y * uLen * 1.5 - uT * 26.0, uT * 3.0));
        float pulses = smoothstep(0.55, 1.0, sin(vUv.y * uLen * 4.0 - uT * 50.0)) * 0.6;
        float ends = smoothstep(0.0, 0.04, vUv.y) * smoothstep(1.0, 0.92, vUv.y);
        vec3 c = uC * (0.6 + flow * 1.4 + pulses) + vec3(1.0) * pow(f, 6.0) * 1.5;
        gl_FragColor = vec4(c * f * ends * uI, 1.0);
      }`,transparent:!0,blending:ze,depthWrite:!1,side:Tt})}var Ds=[],Uh=[];for(let n=0;n<4;n++){let e=new _i(16752720,0,30,1.6);Uh.push({l:e,t:0,dur:1,peak:0})}var m1=!1;function v1(n,e,t,i,s){m1||(Uh.forEach(o=>u.scene.add(o.l)),m1=!0);let r=Uh.reduce((o,a)=>o.t/o.dur>a.t/a.dur||o.peak===0?o:a);r.l.position.copy(n),r.l.color.set(e),r.l.distance=i,r.t=0,r.dur=s,r.peak=t}var bw=(()=>{let n=document.createElement("canvas");n.width=n.height=256;let e=n.getContext("2d"),t=e.createRadialGradient(128,128,70,128,128,128);return t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.75,"rgba(255,255,255,.9)"),t.addColorStop(.85,"rgba(255,255,255,.4)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,256,256),new Xt(n)})(),y1=(()=>{let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");for(let t=0;t<14;t++){let i=64+(Math.random()-.5)*50,s=64+(Math.random()-.5)*50,r=18+Math.random()*34,o=e.createRadialGradient(i,s,0,i,s,r);o.addColorStop(0,"rgba(255,255,255,.55)"),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(0,0,128,128)}return new Xt(n)})(),ww=y1;function kl(n,e,t,i){let s=new xi(new ai({map:n,color:e,transparent:!0,depthWrite:!1,blending:t,opacity:i}));return u.scene.add(s),s}function M1(n,e=16760960,t=6,i=.7,s=!0){let r=kl(bw,e,ze,1);if(r.position.copy(n),Ds.push({o:r,t:0,dur:i,upd:(o,a)=>{let l=1-Math.pow(1-o,3);a.scale.setScalar(.5+l*t*2),a.material.opacity=(1-o)*(1-o)*.55}}),s){let o=new ne(new tn(.94,1,96),new Ue({color:e,transparent:!0,blending:ze,depthWrite:!1,side:Tt}));o.rotation.x=-Math.PI/2,o.position.set(n.x,n.y-.6,n.z),u.scene.add(o),Ds.push({o,t:0,dur:i*1.4,upd:(a,l)=>{let c=1-Math.pow(1-a,2.5);l.scale.setScalar(.3+c*t*1.5),l.material.opacity=(1-a)*(1-a)*.85}})}}function _r(n,e=1,t=16747066){v1(n,t,60*e,24*e,.6);let i=kl(Hn(),16773840,ze,1);i.position.copy(n),Ds.push({o:i,t:0,dur:.28,upd:(s,r)=>{r.scale.setScalar((1.6+s*4)*e),r.material.opacity=(1-s)*(1-s)}});for(let s=0;s<11;s++){let r=kl(y1,16777215,ze,1),o=new w((Math.random()-.5)*2.4,Math.random()*1.6,(Math.random()-.5)*2.4).multiplyScalar(e);r.position.copy(n).add(o),r.material.rotation=Math.random()*6;let a=1.5+Math.random()*2.5,l=(1.6+Math.random()*1.6)*e,c=.6+Math.random()*.5;Ds.push({o:r,t:0,dur:c,upd:(h,d,f)=>{d.position.y+=f*a*e,d.material.rotation+=f*.8,d.scale.setScalar(l*(.5+h*1.2));let p=d.material.color,g=Math.max(0,1-h*6),v=3.2*(1-h)+.4;p.setRGB(v,v*(.42+g*.3-h*.2),v*(.1+g*.25)),d.material.opacity=h<.45?1:(1-h)/.55}})}for(let s=0;s<14;s++){let r=.2+Math.random()*.1,o=kl(ww,new he().setRGB(r*1.15,r*.9,r*.78),gi,0),a=Math.random()*Math.PI*2,l=Math.random()*2.2;o.position.copy(n).add(new w(Math.cos(a)*l,.3+Math.random()*1.2,Math.sin(a)*l).multiplyScalar(e));let c=(2.5+Math.random()*3)*e,h=2.8+Math.random()*1.8,d=.8+Math.random()*1.6,f=new w(Math.cos(a),0,Math.sin(a)).multiplyScalar(.6+Math.random());o.material.rotation=Math.random()*6,Ds.push({o,t:-(.08+.04*s),dur:h,upd:(p,g,v)=>{g.position.y+=v*d*e*(1-p*.6),g.position.addScaledVector(f,v*e),g.scale.setScalar(c*(.5+p*1.3)),g.material.opacity=Math.sin(Math.min(1,p)*Math.PI)*.42,g.material.rotation+=v*.25}})}fe.ring(new w(n.x,n.y-1.2,n.z),1.2*e,Math.round(70*e)),M1(n,16765600,4*e,.6),fe.burst(n,[1,.55,.15],Math.round(40*e),14*Math.sqrt(e)),Sw(Math.min(1,.35*e),n)}function pp(n,e=9365503,t=1){v1(n,e,18*t,8*t,.18);let i=kl(Hn(),e,ze,1);i.position.copy(n),Ds.push({o:i,t:0,dur:.22,upd:(s,r)=>{r.scale.setScalar((1+s*3)*t),r.material.opacity=1-s}}),M1(n,e,1.2*t,.35,!1)}function Sw(n,e){let t=e?e.distanceTo(u.player.pos):0;u.shake=Math.max(u.shake||0,n*Math.max(0,1-t/120))}function Nh(n){fp.value=performance.now()*.001;for(let e=Ds.length-1;e>=0;e--){let t=Ds[e];if(t.t+=n,t.t<0){t.o.visible=!1;continue}t.o.visible=!0;let i=Math.min(1,t.t/t.dur);t.upd(i,t.o,n),i>=1&&(u.scene.remove(t.o),t.o.material.dispose(),t.o.geometry&&!t.o.isSprite&&t.o.geometry.dispose(),Ds.splice(e,1))}for(let e of Uh){if(e.peak<=0)continue;e.t+=n;let t=e.t/e.dur;e.l.intensity=t>=1?0:e.peak*Math.pow(1-t,2),t>=1&&(e.peak=0)}u.shake=(u.shake||0)*Math.pow(.02,n)}function _1(){y.flame=Ew}var kn=[{name:"\u524D\u54E8\u7AD9",pop:0,b:0,r:75},{name:"\u5B9A\u5C45\u70B9",pop:4,b:6,r:120},{name:"\u5C0F\u9547",pop:12,b:14,r:175},{name:"\u57CE\u5E02",pop:24,b:22,r:240},{name:"\u5927\u90FD\u4F1A",pop:36,b:32,r:310},{name:"\u661F\u6E2F",pop:50,b:42,r:390}],hi={x:0,z:0},da,Hh,fa=0;function gp(n){Hh=new Ue({color:6743807,transparent:!0,opacity:.12,side:Tt,depthWrite:!1,blending:ze}),u.cityLevel=u.cityLevel||0,fa=kn[u.cityLevel].r,E1(fa)}function E1(n){da&&(u.scene.remove(da),da.geometry.dispose());let e=Math.ceil(n*1.2),t=[],i=[],s=1.4;for(let o=0;o<=e;o++){let a=o/e*Math.PI*2,l=hi.x+Math.cos(a)*n,c=hi.z+Math.sin(a)*n,h=Ee(l,c);if(t.push(l,h,c,l,h+s,c),o<e){let d=o*2;i.push(d,d+1,d+2,d+1,d+3,d+2)}}let r=new Rt;r.setAttribute("position",new ot(t,3)),r.setIndex(i),da=new ne(r,Hh),da.frustumCulled=!1,u.scene.add(da)}function b1(n,e,t=0){return Math.hypot(n-hi.x,e-hi.z)<=kn[u.cityLevel].r-t}function w1(){let n=kn[u.cityLevel+1];return n?{...n,curPop:u.colony.pop,curB:u.buildings.length}:null}var mp=0;function S1(n,e){Hh.opacity+=((e?.45:.1)-Hh.opacity)*Math.min(1,n*4);let t=kn[u.cityLevel].r;if(fa<t&&(fa=Math.min(t,fa+n*40),E1(fa)),mp-=n,mp>0)return;mp=1;let i=kn[u.cityLevel+1];if(i&&u.colony.pop>=i.pop&&u.buildings.length>=i.b){u.cityLevel++,Y.play("chapter"),u.events.emit("cityLevel",kn[u.cityLevel]);let s=new w(hi.x,Ee(hi.x,hi.z)+2,hi.z);fe.burst(s,[.4,.9,1],120,18)}}var zl=[],Tw={mars:6178362,europa:9214120,kepler:5921384}[it],xp,Us,kh=!0;function Rw(){return xp||(xp=new me({color:Tw,roughness:.95,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),xp}function Aw(n,e,t,i){let s=t-n,r=i-e,o=Math.hypot(s,r);if(o<2)return null;let a=Math.ceil(o/1.5),l=s/o,c=r/o,h=-c,d=l,f=1.3,p=[],g=[],v=[],x=[];for(let E=0;E<=a;E++){let M=E/a,D=n+s*M,A=e+r*M;for(let C of[-1,1]){let P=D+h*f*C,S=A+d*f*C;p.push(P,Ee(P,S)+.07,S),v.push(C<0?0:1,M*o/3)}if(E<a){let C=E*2;g.push(C,C+2,C+1,C+1,C+2,C+3)}}for(let E=4;E<o-2;E+=9)for(let M of[-1,1]){let D=n+l*E+h*(f+.35)*M,A=e+c*E+d*(f+.35)*M;x.push(D,Ee(D,A)+.25,A)}let m=new Rt;m.setAttribute("position",new ot(p,3)),m.setAttribute("uv",new ot(v,2)),m.setIndex(g),m.computeVertexNormals();let _=new ne(m,Rw());return _.receiveShadow=!0,u.scene.add(_),{mesh:_,lamp:x}}function T1(n){if(n.type==="lamp")return;let e=null,t=70;for(let d of u.buildings){if(d===n||d.type==="lamp")continue;let f=Math.hypot(d.x-n.x,d.z-n.z)-d.def.r-n.def.r;f<t&&(t=f,e=d)}if(!e)return;let i=e.x-n.x,s=e.z-n.z,r=Math.hypot(i,s),o=n.x+i/r*(n.def.r+.5),a=n.z+s/r*(n.def.r+.5),l=e.x-i/r*(e.def.r+.5),c=e.z-s/r*(e.def.r+.5),h=Aw(o,a,l,c);h&&(zl.push({...h,a:n,b:e}),kh=!0)}function R1(n){for(let e=zl.length-1;e>=0;e--){let t=zl[e];(t.a===n||t.b===n)&&(u.scene.remove(t.mesh),t.mesh.geometry.dispose(),zl.splice(e,1),kh=!0)}}function A1(){if(kh){kh=!1,Us&&(u.scene.remove(Us),Us.geometry.dispose());let n=zl.flatMap(e=>e.lamp);if(n.length){let e=new Rt;e.setAttribute("position",new ot(n,3)),Us=new vi(e,new li({size:.9,map:Hn(),color:8382207,transparent:!0,depthWrite:!1,blending:ze})),Us.frustumCulled=!1,u.scene.add(Us)}else Us=null}Us&&(Us.material.opacity=.15+u.time.night*.85)}var pa={peace:{name:"\u548C\u5E73",desc:"\u6CA1\u6709\u9508\u8680\u86DB\uFF0C\u5B89\u5FC3\u5EFA\u8BBE",o2:.7,foe:0,dmg:0,yield:1.3},normal:{name:"\u6807\u51C6",desc:"\u63A8\u8350\u7684\u4F53\u9A8C",o2:1,foe:1,dmg:1,yield:1},hard:{name:"\u56F0\u96BE",desc:"\u6C27\u6C14\u6D88\u8017\u66F4\u5FEB\uFF0C\u654C\u4EBA\u66F4\u591A\u66F4\u51F6",o2:1.35,foe:1.6,dmg:1.5,yield:.85}},P1={story:{name:"\u5267\u60C5\u6A21\u5F0F",desc:"\u8DDF\u968F\u7AE0\u8282\uFF0C\u4ECE\u7740\u9646\u4E00\u8DEF\u8D70\u5230\u661F\u9645\u6587\u660E"},free:{name:"\u81EA\u7531\u6A21\u5F0F",desc:"\u6CA1\u6709\u4E3B\u7EBF\uFF0C\u6309\u81EA\u5DF1\u7684\u8282\u594F\u5F00\u62D3\u3002\u5C45\u6C11\u59D4\u6258\u4F1A\u7ED9\u4F60\u65B9\u5411"}},rs=()=>pa[u.diffKey||"normal"],ti=()=>u.mode==="free",ma={pv:{name:"\u9AD8\u6548\u5149\u4F0F",cat:"\u751F\u4EA7",icon:"sun",cost:25,desc:"\u592A\u9633\u80FD\u53D1\u7535 +50%"},sieve:{name:"\u5206\u5B50\u7B5B\u5236\u6C27",cat:"\u751F\u5B58",icon:"o2",cost:30,desc:"\u5236\u6C27\u7AD9\u4E0E\u751F\u6001\u4E2D\u67A2\u4F9B\u6C27 +50%"},hydro:{name:"\u6C34\u57F9\u6280\u672F",cat:"\u751F\u5B58",icon:"food",cost:30,desc:"\u6E29\u5BA4\u4E0E\u5782\u76F4\u519C\u573A\u4EA7\u51FA +50%"},drill:{name:"\u6DF1\u5C42\u94BB\u63A2",cat:"\u751F\u5B58",icon:"water",cost:30,desc:"\u6C34\u51B0\u63D0\u53D6\u5668\u4E0E\u751F\u6001\u4E2D\u67A2\u4F9B\u6C34 +50%"},laser2:{name:"\u91C7\u77FF\u6FC0\u5149 II",cat:"\u751F\u4EA7",icon:"laser",cost:35,desc:"\u624B\u52A8\u91C7\u77FF\u901F\u5EA6 +50%"},suit:{name:"\u5B87\u822A\u670D\u5FAA\u73AF\u7CFB\u7EDF",cat:"\u751F\u5B58",icon:"tank",cost:40,desc:"\u91CE\u5916\u6C27\u6C14\u6D88\u8017 -35%"},alloy:{name:"\u5F3A\u5316\u5408\u91D1",cat:"\u519B\u4E8B",icon:"shield",cost:50,desc:"\u6240\u6709\u5EFA\u7B51\u8010\u4E45 +50%"},plasma:{name:"\u7B49\u79BB\u5B50\u805A\u7126",cat:"\u519B\u4E8B",icon:"focus",cost:60,desc:"\u70AE\u5854\u4F24\u5BB3 +50%\uFF0C\u5C04\u7A0B +10 \u7C73"},swarm:{name:"\u65E0\u4EBA\u673A\u96C6\u7FA4",cat:"\u751F\u4EA7",icon:"drone",cost:60,desc:"\u6BCF\u5EA7\u65E0\u4EBA\u673A\u7AD9\u591A\u4E00\u67B6\u65E0\u4EBA\u673A"},terrain:{name:"\u5168\u5730\u5F62\u60AC\u6302",cat:"\u751F\u4EA7",icon:"rover",cost:45,desc:"\u6F2B\u6E38\u8F66\u6781\u901F +30%"},pr:{name:"\u79FB\u6C11\u5BA3\u4F20",cat:"\u6B96\u6C11",icon:"pop",cost:70,desc:"\u79FB\u6C11\u98DE\u8239\u6765\u5F97\u66F4\u52E4\uFF0C\u6BCF\u6B21\u591A\u5E26 2 \u4EBA"},atmo:{name:"\u5927\u6C14\u5DE5\u7A0B",cat:"\u6B96\u6C11",icon:"planet",cost:120,desc:"\u5927\u6C14\u6539\u9020\u901F\u5EA6 \xD72"},fusion:{name:"\u7D27\u51D1\u805A\u53D8",cat:"\u751F\u4EA7",icon:"power",cost:100,desc:"\u805A\u53D8\u53CD\u5E94\u5806\u53D1\u7535 +40%"},culture:{name:"\u6B96\u6C11\u5730\u6587\u5316",cat:"\u6B96\u6C11",icon:"book",cost:80,desc:"\u5C45\u6C11\u5DE5\u4F5C\u4EA7\u51FA \xD72"}},Gt=n=>!!(u.tech&&u.tech[n]);function Ep(n){let e=ma[n];return!e||Gt(n)||(u.rp||0)<e.cost?(Y.play("deny"),!1):(u.rp-=e.cost,u.tech={...u.tech||{},[n]:!0},Y.play("craft"),u.events.emit("toast",`\u2713 \u7814\u7A76\u5B8C\u6210\uFF1A${e.name}`),u.events.emit("researched",n),!0)}function zh(){let n=0;for(let e of u.buildings)e.type==="lab"&&e.powered&&(n+=[0,1,1.6,2.2][e.level||1]);return n*(.12+u.colony.pop*.01)}var C1={iron:1,ice:1.2,silicon:1.5,titanium:6};function bp(n,e,t){return Math.floor(t*C1[n]/C1[e]*.8)}function I1(n,e,t){let i=bp(n,e,t);return n===e||i<=0||(u.res[n]||0)<t?(Y.play("deny"),0):(u.res[n]-=t,u.res[e]+=i,Y.play("pickup"),u.stats.traded=(u.stats.traded||0)+1,i)}var Cw=["\u6797\u6653","Amara Okafor","\u9648\u9ED8","Mateo Silva","\u82CF\u5FF5","Yuki Tanaka","\u738B\u5927\u5C71","\u5468\u9752\u79BE","Priya Sharma","\u674E\u957F\u98CE"],vp={solar:"\u592A\u9633\u80FD\u9635\u5217",oxygen:"\u5236\u6C27\u7AD9",lamp:"\u7167\u660E\u706F",habitat:"\u5C45\u4F4F\u7A79\u9876",greenhouse:"\u6E29\u5BA4",extractor:"\u6C34\u51B0\u63D0\u53D6\u5668",turret:"\u9632\u5FA1\u70AE\u5854",drones:"\u65E0\u4EBA\u673A\u7AD9",plaza:"\u4E2D\u592E\u5E7F\u573A",lab:"\u7814\u7A76\u6240",trade:"\u8D38\u6613\u7AD9",apartment:"\u516C\u5BD3\u5854",vfarm:"\u5782\u76F4\u519C\u573A"},to={build:["\u6211\u4EEC\u9700\u8981\u4E00\u5EA7{x}\u3002\u62DC\u6258\u4E86\uFF01","\u5982\u679C\u6709{x}\uFF0C\u5927\u5BB6\u7684\u65E5\u5B50\u4F1A\u597D\u8FC7\u5F88\u591A\u3002","\u80FD\u518D\u5EFA\u4E00\u5EA7{x}\u5417\uFF1F"],mine:["\u4ED3\u5E93\u91CC\u7684{x}\u5FEB\u89C1\u5E95\u4E86\uFF0C\u80FD\u5E2E\u5FD9\u91C7\u4E00\u4E9B\u5417\uFF1F","\u6211\u7684\u5B9E\u9A8C\u9700\u8981{x}\u3002"],kill:["\u591C\u91CC\u90A3\u4E9B\u9508\u8680\u86DB\u5435\u5F97\u5B69\u5B50\u4EEC\u7761\u4E0D\u7740\u3002","\u5DE1\u903B\u961F\u9700\u8981\u652F\u63F4\uFF0C\u5E2E\u6211\u4EEC\u6E05\u7406\u4E00\u4E0B\u9644\u8FD1\u3002"],upgrade:["\u8BBE\u65BD\u8BE5\u5347\u7EA7\u4E86\uFF0C\u80FD\u628A\u54EA\u4E00\u5EA7\u5347\u5230 2 \u7EA7\u5417\uFF1F"],relic:["\u6211\u5728\u65E7\u6863\u6848\u91CC\u770B\u5230\u9644\u8FD1\u6709\u9057\u8FF9\u7684\u8BB0\u5F55\uFF0C\u4F60\u80FD\u53BB\u770B\u770B\u5417\uFF1F"],pop:["\u6211\u4EEC\u51C6\u5907\u597D\u8FCE\u63A5\u66F4\u591A\u7684\u4EBA\u4E86\u3002"],scan:["\u8BA9\u5C0F\u661F\u626B\u63CF\u4E00\u4E0B\u9644\u8FD1\u7684\u77FF\u85CF\u5427\uFF0C\u6211\u60F3\u753B\u4E00\u5F20\u5730\u56FE\u3002"]},ei=n=>n[Math.floor(Math.random()*n.length)];function L1(n){return u.buildings.filter(e=>e.type===n).length}function Pw(n){let e=["build","build","mine","mine","scan"];(u.enemies.length||(u.nightsSurvived||0)>0)&&e.push("kill"),u.buildings.length>4&&e.push("upgrade"),n.relicLeft()&&e.push("relic"),u.buildings.some(a=>a.type==="beacon")&&e.push("pop");let t=ei(e),i=u.colonists.length?ei(u.colonists).name:ei(Cw),s={id:Date.now()+Math.random(),kind:t,giver:i},r=1+(u.cityLevel||0)*.5;if(t==="build"){let a=Object.keys(vp).filter(c=>n.unlocked(c)),l=ei(a.length?a:["solar"]);Object.assign(s,{t:l,base:L1(l),n:1,text:`\u5EFA\u9020${vp[l]}`,line:ei(to.build).replace("{x}",vp[l])})}else if(t==="mine"){let a=ei(u.cityLevel>=2?["iron","silicon","ice","titanium"]:["iron","silicon","ice"]),l=Math.round((a==="titanium"?8:25)*r);Object.assign(s,{t:a,base:u.stats.mined[a],n:l,text:`\u91C7\u96C6${sn[a].name} ${l}`,line:ei(to.mine).replace("{x}",sn[a].name)})}else if(t==="kill"){let a=Math.round(4*r);Object.assign(s,{base:u.stats.kills,n:a,text:`\u51FB\u9000\u9508\u8680\u86DB ${a} \u53EA`,line:ei(to.kill)})}else t==="upgrade"?Object.assign(s,{base:u.buildings.filter(a=>(a.level||1)>=2).length,n:1,text:"\u628A\u4E00\u5EA7\u5EFA\u7B51\u5347\u5230 2 \u7EA7",line:ei(to.upgrade)}):t==="relic"?Object.assign(s,{base:n.relicFound(),n:1,text:"\u8C03\u67E5\u4E00\u5904\u9057\u8FF9",line:ei(to.relic)}):t==="pop"?Object.assign(s,{base:u.colony.pop,n:4,text:"\u8FCE\u63A5 4 \u4F4D\u65B0\u79FB\u6C11",line:ei(to.pop)}):Object.assign(s,{base:u.stats.scans||0,n:1,text:"\u7528\u5C0F\u661F\u626B\u63CF\u4E00\u6B21\uFF08Q\uFF09",line:ei(to.scan)});let o=["iron","silicon","ice"];return s.reward={[ei(o)]:Math.round(20*r),[ei(o)]:Math.round(15*r)},u.cityLevel>=1&&(s.reward.titanium=Math.round(2*r)),s.rp=Math.round(8*r),s}function D1(n,e){switch(n.kind){case"build":return L1(n.t)-n.base;case"mine":return u.stats.mined[n.t]-n.base;case"kill":return u.stats.kills-n.base;case"upgrade":return u.buildings.filter(t=>(t.level||1)>=2).length-n.base;case"relic":return e.relicFound()-n.base;case"pop":return u.colony.pop-n.base;default:return(u.stats.scans||0)-n.base}}function U1(n,e){return Math.max(0,Math.min(n.n,D1(n,e)))}var yp=25,Mp=0;function N1(n,e){if(Iw(n),u.rp=(u.rp||0)+zh()*n,u.requests=u.requests||[],u.buildings.length&&!u.ended){yp-=n;let t=ti()?3:2;if(yp<=0&&u.requests.length<t){yp=ti()?60:110;let i=Pw(e);u.requests.push(i),u.events.emit("request",i)}}if(Mp-=n,!(Mp>0)){Mp=.5;for(let t=u.requests.length-1;t>=0;t--){let i=u.requests[t];if(D1(i,e)>=i.n){u.requests.splice(t,1);for(let s in i.reward)u.res[s]+=i.reward[s],u.events.emit("pickup",{type:s,n:i.reward[s],note:"\u59D4\u6258\u5956\u52B1"});u.rp=(u.rp||0)+i.rp,u.stats.requests=(u.stats.requests||0)+1,Y.play("objective"),u.events.emit("requestDone",i)}}}}var _p=0;function Iw(n){if(_p-=n,_p>0)return;_p=2;let e=u.colony,t=Math.max(1,e.pop),i=[],s=55,r=g=>Math.max(-1,Math.min(1,(e[g]-e.pop)/t)),o=(r("food")+r("o2")+r("water"))*6;s+=o,i.push(["\u751F\u6D3B\u7269\u8D44",o]);let a=u.buildings.filter(g=>g.type==="lamp").length,l=u.buildings.some(g=>g.type==="plaza"&&g.powered),c=Math.min(8,a*1.5)+(l?12:0);s+=c,i.push(["\u7167\u660E\u4E0E\u5E7F\u573A",c]);let h=Math.min(10,u.buildings.filter(g=>g.type==="greenhouse"||g.type==="vfarm").length*3);s+=h,i.push(["\u7EFF\u8272\u690D\u7269",h]);let d=u.buildings.filter(g=>g.broken).length*-6+(e.deficit?-10:0);s+=d,i.push(["\u635F\u574F\u4E0E\u505C\u7535",d]);let f=u.buildings.some(g=>g.type==="turret")?6:rs().foe>0&&(u.nightsSurvived||0)>0?-8:0;s+=f,i.push(["\u5B89\u5168\u611F",f]);let p=e.housing&&e.pop>e.housing*.9?-8:0;s+=p,i.push(["\u4F4F\u623F\u62E5\u6324",p]),Gt("culture")&&(s+=10,i.push(["\u6B96\u6C11\u5730\u6587\u5316",10])),u.festival&&(s+=15,i.push(["\u6B96\u6C11\u5730\u8282",15])),u.morale=Math.round(Math.max(0,Math.min(100,s))),u.moraleFactors=i.filter(g=>Math.abs(g[1])>=.5)}var wp=()=>.5+(u.morale??60)/100;var k1=new Le(1,1,1,6,1,!0);k1.translate(0,.5,0);var Lw=new w(0,1,0),ga=new w;function Dw(n){let e=1+(n.level||1)+(Gt("swarm")?1:0);for(n.drones=n.drones||[];n.drones.length<e;){let t=Bg(),i=new ne(k1,new Ue({color:16752720,transparent:!0,opacity:.8,blending:ze,depthWrite:!1}));i.visible=!1,i.frustumCulled=!1,u.scene.add(t.group,i);let s=n.drones.length,r=new w(n.x+[-1.9,1.9,-1.9,1.9][s%4],n.y+1.1,n.z+[-1.9,-1.9,1.9,1.9][s%4]);t.group.position.copy(r),n.drones.push({...t,beam:i,dock:r,state:"dock",t:1+s*1.3,node:null,cargo:null,pos:t.group.position})}}function z1(n){for(let e of n.drones||[])u.scene.remove(e.group,e.beam),e.node&&(e.node.claimed=!1);n.drones=[]}function H1(n,e,t,i=15){ga.copy(e).sub(n.pos);let s=ga.length(),r=Ee(n.pos.x,n.pos.z)+8;s>6&&(ga.y+=(r-n.pos.y)*2),ga.normalize().multiplyScalar(Math.min(s,i*t)),n.pos.add(ga);let a=Math.atan2(e.x-n.pos.x,e.z-n.pos.z)-n.group.rotation.y;return a=Math.atan2(Math.sin(a),Math.cos(a)),n.group.rotation.y+=a*Math.min(1,t*4),n.group.rotation.x=Math.min(.3,s*.02),s<.6}function O1(n){let e=performance.now()*.001;for(let t of u.buildings)if(t.type==="drones"&&!(t.buildT<1)){Dw(t),t.anim.dish&&(t.anim.dish.rotation.y+=n*(t.powered?1.2:0)),t.anim.light&&(t.anim.light.visible=t.powered&&Math.sin(e*3)>-.3);for(let i of t.drones){for(let s of i.rotors)s.rotation.y+=n*40;switch(i.group.position.y+=Math.sin(e*3+i.dock.x)*.003,i.beam.visible=!1,!t.powered&&i.state!=="dock"&&(i.node&&(i.node.claimed=!1),i.node=null,i.state="back"),i.state){case"dock":{if(i.pos.lerp(i.dock,Math.min(1,n*3)),i.t-=n,i.t<=0&&t.powered){i.t=2;let s=null,r=100;for(let o of u.nodes){if(o.claimed||o.type==="titanium"&&(t.level||1)<3)continue;let a=Math.hypot(o.x-t.x,o.z-t.z);a<r&&(r=a,s=o)}s&&(s.claimed=!0,i.node=s,i.state="out")}break}case"out":{let s=i.node;if(!s||!u.nodes.includes(s)){i.node=null,i.state="back";break}H1(i,ga.set(s.x,s.y+4.5,s.z).clone(),n)&&(i.state="mine",i.t=3.2);break}case"mine":{let s=i.node;if(!s||!u.nodes.includes(s)){i.state="back";break}i.t-=n;let r=new w(s.x+Math.sin(e*5)*.3,s.y+.6,s.z+Math.cos(e*4)*.3),o=i.pos.clone().add(new w(0,-.25,0)),a=r.clone().sub(o),l=a.length();if(i.beam.position.copy(o),i.beam.quaternion.setFromUnitVectors(Lw,a.normalize()),i.beam.scale.set(.05,l,.05),i.beam.material.color.setRGB(...Ls[s.type]),i.beam.visible=!0,Math.random()<.4&&fe.spark(r,Ls[s.type],1,3,.4),i.t<=0){let c=Math.min(3,Math.ceil(s.amount));i.cargo={type:s.type,n:c},s.claimed=!1,Dh(s,c),i.node=null,i.state="back"}break}case"back":{H1(i,i.dock,n)&&(i.cargo&&(u.res[i.cargo.type]+=i.cargo.n,u.stats.mined[i.cargo.type]+=i.cargo.n,u.stats.droneHauls=(u.stats.droneHauls||0)+1,Math.hypot(u.player.pos.x-t.x,u.player.pos.z-t.z)<45&&u.events.emit("pickup",{type:i.cargo.type,n:i.cargo.n,note:"\u65E0\u4EBA\u673A"}),fe.spark(i.pos,[.5,.9,1],6,3),i.cargo=null),i.state="dock",i.t=1.5);break}}}}}var zn={solar:{name:"\u592A\u9633\u80FD\u9635\u5217",icon:"sun",cat:"life",chapter:0,cost:{iron:8,silicon:6},power:4,r:2.6,hp:120,desc:"\u767D\u5929\u53D1\u7535 4 \u5355\u4F4D\uFF0C\u591C\u95F4\u964D\u81F3 1.6\u3002\u6B96\u6C11\u5730\u7684\u5FC3\u8DF3\u4ECE\u8FD9\u91CC\u5F00\u59CB\u3002"},oxygen:{name:"\u5236\u6C27\u7AD9",icon:"o2",cat:"life",chapter:0,cost:{iron:12,silicon:4,ice:6},power:-2,r:3,hp:160,o2:6,life:14,desc:"\u7535\u89E3\u6C34\u51B0\u5236\u9020\u6C27\u6C14\u3002\u4E3A 6 \u4F4D\u5C45\u6C11\u4F9B\u6C27\uFF0C\u5E76\u5728 14 \u7C73\u5185\u4E3A\u4F60\u7684\u5B87\u822A\u670D\u8865\u6C27\u3002"},lamp:{name:"\u7167\u660E\u706F",icon:"star",cat:"life",chapter:0,cost:{iron:3},power:0,r:.6,hp:60,desc:"\u7167\u4EAE\u706B\u661F\u7684\u957F\u591C\u3002"},habitat:{name:"\u5C45\u4F4F\u7A79\u9876",icon:"dome",cat:"life",chapter:1,cost:{iron:25,silicon:12},power:-1,r:6.4,hp:300,housing:4,life:12,desc:"\u53EF\u4F4F 4 \u4EBA\u3002\u7A79\u9876\u91CC\u6709\u6696\u5149\u3001\u690D\u7269\u548C\u5BB6\u4EBA\u7684\u7167\u7247\u3002"},greenhouse:{name:"\u6E29\u5BA4",icon:"food",cat:"life",chapter:1,cost:{iron:14,silicon:16,ice:8},power:-2,r:5.4,hp:160,food:5,desc:"\u5728\u706B\u661F\u571F\u58E4\u91CC\u79CD\u51FA\u7B2C\u4E00\u68F5\u571F\u8C46\u3002\u4F9B 5 \u4EBA\u98DF\u7269\u3002"},extractor:{name:"\u6C34\u51B0\u63D0\u53D6\u5668",icon:"water",cat:"life",chapter:1,cost:{iron:16,silicon:4,ice:4},power:-2,r:2.8,hp:160,water:6,desc:"\u4ECE\u5730\u4E0B\u51BB\u571F\u4E2D\u94BB\u53D6\u6C34\u3002\u4F9B 6 \u4EBA\u7528\u6C34\u3002"},beacon:{name:"\u7740\u9646\u573A",icon:"ship",cat:"city",chapter:1,cost:{iron:24,silicon:14},power:-1,r:7.4,hp:250,desc:"\u5411\u5730\u7403\u53D1\u51FA\u4FE1\u53F7\u3002\u6761\u4EF6\u6EE1\u8DB3\u65F6\uFF0C\u79FB\u6C11\u98DE\u8239\u4F1A\u5728\u8FD9\u91CC\u964D\u843D\u3002"},fabricator:{name:"\u5236\u9020\u5DE5\u574A",icon:"wrench",cat:"industry",chapter:2,cost:{iron:22,silicon:14},power:-1,r:4.6,hp:220,desc:"\u9760\u8FD1\u6309 E \u5236\u9020\u6B66\u5668\u4E0E\u88C5\u5907\u3002"},drones:{name:"\u65E0\u4EBA\u673A\u7AD9",icon:"drone",cat:"industry",chapter:2,cost:{iron:30,silicon:22},power:-3,r:3.8,hp:220,desc:"\u6D3E\u51FA\u91C7\u77FF\u65E0\u4EBA\u673A\uFF0C\u81EA\u52A8\u91C7\u96C6 100 \u7C73\u5185\u7684\u77FF\u70B9\u5E76\u8FD0\u56DE\u3002\u5347\u7EA7\u540E\u65E0\u4EBA\u673A\u66F4\u591A\uFF0C\u6EE1\u7EA7\u53EF\u91C7\u949B\u3002"},turret:{name:"\u9632\u5FA1\u70AE\u5854",icon:"shield",cat:"defense",chapter:2,cost:{iron:22,silicon:10},power:-2,r:1.9,hp:200,range:40,desc:"\u81EA\u52A8\u653B\u51FB 40 \u7C73\u5185\u7684\u9508\u8680\u86DB\u3002\u9700\u8981\u7535\u529B\u3002"},reactor:{name:"\u805A\u53D8\u53CD\u5E94\u5806",icon:"power",cat:"industry",chapter:3,cost:{iron:40,silicon:20,titanium:12},power:20,r:5.4,hp:400,desc:"\u663C\u591C\u4E0D\u505C +20 \u26A1\u3002\u7528\u706B\u661F\u7684\u949B\uFF0C\u70B9\u4EAE\u4EBA\u7C7B\u7684\u7B2C\u4E8C\u9897\u592A\u9633\u3002"},lab:{name:"\u7814\u7A76\u6240",icon:"book",cat:"industry",chapter:2,level:1,cost:{iron:25,silicon:25},power:-2,r:4.2,hp:260,rp:1,desc:"\u5C45\u6C11\u5728\u8FD9\u91CC\u505A\u7814\u7A76\uFF0C\u4EA7\u51FA\u79D1\u7814\u70B9\u6570\u3002\u4EBA\u53E3\u8D8A\u591A\u8D8A\u5FEB\u3002\u6309 T \u6253\u5F00\u79D1\u7814\u3002"},trade:{name:"\u661F\u9645\u8D38\u6613\u7AD9",icon:"ship",cat:"city",chapter:2,level:1,cost:{iron:30,silicon:18},power:-2,r:5,hp:260,desc:"\u4E0E\u5730\u7403\u548C\u5176\u4ED6\u6B96\u6C11\u5730\u4EA4\u6362\u7269\u8D44\u3002\u9760\u8FD1\u6309 E \u4EA4\u6613\u3002"},plaza:{name:"\u4E2D\u592E\u5E7F\u573A",icon:"planet",cat:"city",level:1,cost:{iron:20,silicon:16},power:-1,r:7.4,hp:300,desc:"\u4E2D\u5FC3\u6709\u4E00\u5EA7\u5168\u606F\u5730\u7403\u3002\u5929\u9ED1\u540E\uFF0C\u5C45\u6C11\u4EEC\u4F1A\u6765\u8FD9\u91CC\u805A\u5728\u4E00\u8D77\uFF0C\u770B\u4E00\u770B\u6545\u4E61\u3002"},apartment:{name:"\u516C\u5BD3\u5854",icon:"tower",cat:"city",level:2,cost:{iron:40,silicon:25,titanium:4},power:-3,r:4.6,hp:400,housing:12,life:12,desc:"\u53EF\u4F4F 12 \u4EBA\u3002\u7A97\u6237\u91CC\u7684\u706F\u5149\uFF0C\u662F\u57CE\u5E02\u7684\u661F\u7A7A\u3002"},vfarm:{name:"\u5782\u76F4\u519C\u573A",icon:"food",cat:"city",level:2,cost:{iron:30,silicon:30,ice:15},power:-4,r:4.2,hp:260,food:14,desc:"\u5341\u56DB\u5C42\u7684\u7ACB\u4F53\u519C\u7530\u3002\u4F9B 14 \u4EBA\u98DF\u7269\u3002"},lifehub:{name:"\u751F\u6001\u4E2D\u67A2",icon:"o2",cat:"city",level:3,cost:{iron:45,silicon:30,ice:30,titanium:6},power:-5,r:6,hp:400,o2:16,water:16,life:20,desc:"\u5927\u578B\u6C27\u6C14\u4E0E\u6C34\u5FAA\u73AF\u7CFB\u7EDF\u3002\u4F9B 16 \u4EBA\u6C27\u6C14\u548C\u7528\u6C34\uFF0C20 \u7C73\u5185\u8865\u6C27\u3002"},terraformer:{name:"\u5927\u6C14\u6539\u9020\u5854",icon:"planet",cat:"stellar",chapter:4,only:"terraformable",cost:{iron:100,silicon:60,titanium:30,ice:50},power:-12,r:7.4,hp:800,desc:"\u5411\u5929\u7A7A\u91CA\u653E\u6E29\u5BA4\u6C14\u4F53\u4E0E\u6C34\u6C7D\u3002\u8BA9\u8FD9\u9897\u661F\u7403\uFF0C\u771F\u6B63\u6210\u4E3A\u5BB6\u3002"},launch:{name:"\u661F\u9645\u53D1\u5C04\u53F0",icon:"ship",cat:"stellar",chapter:5,level:it==="mars"?5:4,only:"route",cost:{iron:160,silicon:120,titanium:60,ice:60},power:-15,r:9.5,hp:900,desc:"\u661F\u9645\u822A\u7EBF\u7684\u8D77\u70B9\u3002\u9760\u8FD1\u6309 E \u6253\u5F00\u661F\u56FE\uFF0C\u524D\u5F80\u65B0\u7684\u661F\u7403\u6216\u56DE\u5230\u5DF2\u5F00\u62D3\u7684\u5BB6\u56ED\u3002"},monument:{name:"\u6587\u660E\u7EAA\u5FF5\u7891",icon:"monument",cat:"stellar",level:5,only:"final",cost:{iron:150,silicon:120,titanium:80},power:-6,r:6.5,hp:900,desc:"\u4E09\u9897\u661F\u7403\uFF0C\u4E00\u4E2A\u4EBA\u7C7B\u3002\u732E\u7ED9\u6240\u6709\u51FA\u53D1\u7684\u4EBA\u3002"}},Rp=3,Tp=[1,1,1.6,2.2],Uw=["lamp","beacon","fabricator","plaza","trade","terraformer","launch","monument"];function Oh(n){return!Uw.includes(n.type)&&(n.level||1)<Rp}function Oi(n,e){let t=n.def,i=n.level||1,s=t[e];if(!s)return 0;if(e==="power")return s>0?s*Tp[i]*(n.type==="solar"&&Gt("pv")?1.5:1)*(n.type==="reactor"&&Gt("fusion")?1.4:1):s*(1+.25*(i-1));if(e==="life")return s+3*(i-1);if(e==="range")return s+8*(i-1)+(Gt("plasma")?10:0);if(e==="hp")return s*(1+.5*(i-1))*(Gt("alloy")?1.5:1);let r=e==="o2"&&Gt("sieve")||e==="food"&&Gt("hydro")||e==="water"&&Gt("drill")?1.5:1;return Math.round(s*Tp[i]*r)}function Ap(n){let e=n.level||1,t={};for(let i in n.def.cost)t[i]=Math.ceil(n.def.cost[i]*(e===1?.8:1.3));return t.titanium=(t.titanium||0)+(e===1?3:8),t}function F1(n){if(!Oh(n))return!1;let e=Ap(n);return ki(e)?(xl(e),n.level=(n.level||1)+1,B1(n,!0),Y.play("place"),fe.ring(new w(n.x,n.y,n.z),n.def.r*1.2,60,[.5,.9,1]),as(),!0):!1}function B1(n,e){let t=n.level||1;n.maxHp=Oi(n,"hp"),n.hp=Math.min(n.maxHp,e?n.maxHp:n.hp);let i=1+(t-1)*.12;n.group.scale.set(i,n.group.scale.y,i),n.baseScale=i,n.anim._pips&&n.anim._pips.forEach(r=>n.group.remove(r)),n.anim._pips=[];let s=Math.max(2.5,n.def.r*.9);for(let r=1;r<t;r++)n.anim._pips.push(_e(16757596,1.4,n.group,(r-t/2)*.9,s+1.2,0));if(e){n.buildT=.35;let r=new ne(new Ne(n.def.r*1.05,.08,6,48),G1.clone());r.rotation.x=Math.PI/2,r.position.set(n.x,n.y,n.z),u.scene.add(r),n.anim._scan=r}}function ls(n){let e=zn[n];return e.only==="terraformable"&&!xe.terraformable?{hide:!0}:e.only==="route"&&!xe.next&&!(mn.visited||[]).some(t=>t.id!==it)?{hide:!0}:e.only==="final"&&xe.next?{hide:!0}:!ti()&&it==="mars"&&e.chapter&&e.chapter>u.chapter?{ok:!1,why:"\u5267\u60C5\u63A8\u8FDB\u540E\u89E3\u9501"}:e.level&&e.level>u.cityLevel?{ok:!1,why:`\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C${kn[e.level].name}\u300D\u89E3\u9501`}:{ok:!0}}var Cp=["solar","oxygen","lamp","habitat","greenhouse","extractor","beacon","fabricator","drones","lab","trade","turret","reactor","plaza","apartment","vfarm","lifehub","terraformer","launch","monument"],Nw=["oxygen","lifehub","turret","habitat","apartment","extractor","greenhouse","vfarm","beacon","plaza","lab","trade","drones","fabricator","terraformer","launch","monument"],G1=new Ue({color:8382207,transparent:!0,opacity:.8,blending:ze,depthWrite:!1,side:Tt});function Fh(n,e,t,i=0,s,r=!1,o=1){let a=zn[n],l=new de,c={};Qn[n](l,c);let h=Ee(e,t);if(l.position.set(e,h,t),l.rotation.y=i,u.scene.add(l),r){l.scale.set(1,.001,1);let f=new ne(new Ne(a.r*1.05,.08,6,48),G1.clone());f.rotation.x=Math.PI/2,f.position.set(e,h,t),u.scene.add(f),c._scan=f}let d={buildT:r?0:1,type:n,def:a,x:e,z:t,y:h,rot:i,group:l,anim:c,hp:s??a.hp,broken:s!==void 0&&s<=0,powered:!0,t:Math.random()*10,cool:0};return d.collider=u.colliders.add({x:e,z:t,r:a.r*(n==="beacon"?.15:n==="plaza"?.28:.9),kind:"building",b:d}),d.level=o,d.maxHp=Oi(d,"hp"),s===void 0&&(d.hp=d.maxHp),o>1&&B1(d,!1),u.buildings.push(d),u.stats.built[n]=(u.stats.built[n]||0)+1,T1(d),as(),d}function V1(n,e=!1){if(e)for(let s in n.def.cost)u.res[s]+=Math.floor(n.def.cost[s]*.5);u.scene.remove(n.group),u.colliders.remove(n.collider),R1(n),n.type==="drones"&&z1(n);let t=u.buildings.indexOf(n);t>=0&&u.buildings.splice(t,1),u.stats.built[n.type]=Math.max(0,(u.stats.built[n.type]||0)-1);let i=new w(n.x,n.y+2,n.z);fe.burst(i,[1,.6,.3],60,10),fe.dustPuff(i,30,n.def.r*2),_r(i,Math.min(3,n.def.r*.45),16752720),as()}function W1(n){return u.buildings.filter(e=>e.type===n).length}function as(){let n=u.colony,e=(u.time.elevation>.05?1:.4)*xe.solar,t=0,i=0;for(let r of u.buildings){if(r.broken)continue;let o=Oi(r,"power");o>0?t+=r.type==="solar"?o*e:o:i-=o}let s=t;for(let r of u.buildings)r.powered=r.def.power>=0&&!r.broken,r.maxHp=Oi(r,"hp");for(let r of Nw)for(let o of u.buildings){if(o.type!==r)continue;let a=Oi(o,"power");!o.broken&&s>=-a&&(s+=a,o.powered=!0)}n.powerProd=t,n.powerUse=i,n.deficit=i>t+.001,n.housing=0,n.o2=0,n.food=0,n.water=0;for(let r of u.buildings)n.housing+=Oi(r,"housing"),r.powered&&(n.o2+=Oi(r,"o2"),n.food+=Oi(r,"food"),n.water+=Oi(r,"water"));n.support=Math.min(n.housing,n.o2,n.food,n.water)}function $1(n){for(let e of u.buildings){let t=Oi(e,"life");if(!t||!e.powered)continue;let i=e.x-n.x,s=e.z-n.z;if(i*i+s*s<t*t)return e}return null}var os=null,Hw=null,X1=new Ue({color:5636010,transparent:!0,opacity:.35,depthWrite:!1}),kw=new Ue({color:16729156,transparent:!0,opacity:.35,depthWrite:!1}),bi,At={type:null,rot:0,valid:!1,reason:"",x:0,z:0};function no(n){if(os&&(u.scene.remove(os),os=null),At.type=n,Hw=n,!n){bi&&(bi.visible=!1);return}let e=new de;Qn[n](e,{}),e.traverse(i=>{i.isMesh&&(i.material=X1,i.castShadow=!1,i.receiveShadow=!1),(i.isSprite||i.userData.found)&&(i.visible=!1)}),os=e,u.scene.add(e),bi||(bi=new ne(new tn(.96,1,64),new Ue({color:6741503,transparent:!0,opacity:.5,depthWrite:!1,side:Tt})),bi.rotation.x=-Math.PI/2,u.scene.add(bi));let t=zn[n].life||zn[n].range||0;bi.visible=t>0,bi.scale.setScalar(t||1)}function q1(n,e){if(!os)return;if(!n){os.visible=!1,bi.visible=!1,At.valid=!1,At.reason="\u5BF9\u51C6\u5730\u9762";return}os.visible=!0;let t=zn[At.type],i=n.x,s=n.z,r=Math.hypot(i-e.x,s-e.z),o=t.r+1.2;if(r<o){let h=r>.01?(i-e.x)/r:-Math.sin(u.player.yaw),d=r>.01?(s-e.z)/r:-Math.cos(u.player.yaw);i=e.x+h*o,s=e.z+d*o,r=o}let a=Ee(i,s);os.position.set(i,a,s),os.rotation.y=At.rot,At.x=i,At.z=s,bi.scale.x>1&&(bi.visible=!0,bi.position.set(i,a+.3,s));let l="";ki(t.cost)?Kr(i,s,Math.max(1.5,t.r*.7))>(t.r>4?.32:.45)?l="\u5730\u9762\u592A\u9661":u.colliders.overlaps(i,s,t.r*.85)?l="\u4F4D\u7F6E\u88AB\u5360\u7528":r<t.r+.8?l="\u79BB\u81EA\u5DF1\u592A\u8FD1":Math.abs(i)>Qe-170||Math.abs(s)>Qe-170?l="\u8D85\u51FA\u53EF\u5EFA\u9020\u533A\u57DF":b1(i,s,t.r)||(l="\u8D85\u51FA\u6B96\u6C11\u5730\u9886\u5730\uFF08\u63D0\u5347\u57CE\u5E02\u7B49\u7EA7\u6765\u6269\u5F20\uFF09"):l="\u8D44\u6E90\u4E0D\u8DB3",At.valid=!l,At.reason=l;let c=l?kw:X1;os.traverse(h=>{h.isMesh&&(h.material=c)})}function Y1(){if(!At.type||!At.valid)return Y.play("deny"),null;let n=zn[At.type];xl(n.cost);let e=Fh(At.type,At.x,At.z,At.rot,void 0,!0);return Y.play("place"),fe.ring(new w(e.x,e.y,e.z),n.r,50),e}var Sp=0;function Z1(n,e){Sp-=n,Sp<=0&&(Sp=.5,as()),A1(),O1(n);let t=u.time.night,i=performance.now()*.001;y.window.emissiveIntensity=.3+t*.85,y.lamp.emissiveIntensity=t*4;for(let s of _l)s.emissiveIntensity=.15+t*1.4;for(let s of u.buildings){let r=s.anim,o=s.powered;if(s.t+=n,s.buildT<1){s.buildT=Math.min(1,s.buildT+n/1.3);let a=s.buildT,l=1+2.2*Math.pow(a-1,3)+1.2*Math.pow(a-1,2);s.group.scale.y=Math.max(.001,l)*(s.baseScale||1);let c=Math.max(3,s.def.r*1.4)*(s.type==="apartment"||s.type==="launch"||s.type==="terraformer"||s.type==="monument"?4:1);r._scan.position.y=s.y+a*c,r._scan.material.opacity=.8*(1-a),r._scan.scale.setScalar(1-a*.25),Math.random()<.5&&fe.spark(new w(s.x+(Math.random()-.5)*s.def.r*2,s.y+a*c,s.z+(Math.random()-.5)*s.def.r*2),[.5,.9,1],1,2,.6),a>=1&&(u.scene.remove(r._scan),r._scan.geometry.dispose(),delete r._scan)}switch(s.hp<s.maxHp&&u.time.night<.5&&(s.hp=Math.min(s.maxHp,s.hp+n*(s.broken?5:2)),s.broken&&s.hp>=s.maxHp*.5&&(s.broken=!1,as(),u.events.emit("toast",`\u2713 ${s.def.name} \u5DF2\u4FEE\u590D\uFF0C\u6062\u590D\u8FD0\u8F6C`))),s.broken&&Math.random()<n*6&&fe.dustPuff(new w(s.x+(Math.random()-.5)*s.def.r,s.y+1.5,s.z+(Math.random()-.5)*s.def.r),1,.5,[.15,.13,.12]),s.type){case"solar":{let a=new w(Yn.x,Math.max(Yn.y,.2),Yn.z).applyAxisAngle(new w(0,1,0),-s.rot);r.pivot.rotation.y=Math.atan2(a.x,a.z),r.panel.rotation.x=Math.PI/2-Math.asin(Math.min(1,a.y/a.length()));break}case"oxygen":o&&(r.fan.rotation.z+=n*8),r.light.visible=o;break;case"extractor":o&&(r.drill.position.y=3+Math.sin(s.t*3)*.8),r.light.visible=o;break;case"greenhouse":r.light.material.opacity=o?.3+t*.5:0;break;case"fabricator":o?(r.arm.rotation.y=Math.sin(s.t*.8)*1.2,r.spark.visible=Math.sin(s.t*7)>.6):r.spark.visible=!1;break;case"habitat":r.tip.visible=Math.sin(i*2+s.x)>.3;break;case"apartment":r.tip.visible=Math.sin(i*2+s.z)>.3;break;case"vfarm":r.light.material.opacity=o?.25+t*.5:0;break;case"lifehub":o&&(r.fan.rotation.y+=n*3),r.light.visible=o;break;case"plaza":r.earth.rotation.y+=n*.25,r.earth.position.y=4+Math.sin(i*.8)*.15,r.earth.material.opacity=o?.55-t*.15:.15,r.halo.material.opacity=o?.25+t*.2:0;break;case"lab":r.scope&&(r.scope.rotation.z=Math.sin(i*.2)*.4),r.tip&&(r.tip.visible=Math.sin(i*2.5)>0),r.light&&(r.light.visible=o);break;case"trade":r.jib&&(r.jib.rotation.y=Math.sin(i*.15)*1.2),r.tip&&(r.tip.visible=Math.sin(i*3)>0);break;case"monument":r.rings.forEach((a,l)=>{a.rotation.x=i*(.3+l*.2),a.rotation.y=i*(.2+l*.15)});break;case"reactor":r.r1.rotation.y+=n*.8,r.r2.rotation.z+=n*.6,r.light.material.opacity=.5+Math.sin(i*3)*.2;break;case"beacon":{let a=Math.floor(i*6)%8;r.lights.forEach((l,c)=>{l.visible=o&&(c===a||c===(a+4)%8||t>.3)}),r.tip.visible=Math.sin(i*3)>0;break}case"lamp":r.glow.visible=t>.2,r.glow.material.opacity=t*.6;break;case"turret":zw(s,n,e);break;case"terraformer":{r.rings.forEach((a,l)=>{a.position.y=10+l*8+Math.sin(i*1.5+l)*1.5,a.rotation.x=Math.sin(i+l)*.2}),r.beam.material.opacity=o&&u.terraform<1?.18+Math.sin(i*4)*.05:0,o&&u.terraform<1&&Math.random()<.6&&fe.rise(new w(s.x,s.y+28,s.z),[.4,.9,1],4);break}}}}function zw(n,e,t){let i=n.anim;if(i.eye.visible=n.powered,!n.powered)return;n.cool-=e;let s=null,r=Oi(n,"range");for(let l of u.enemies){if(l.dead)continue;let c=Math.hypot(l.pos.x-n.x,l.pos.z-n.z);c<r&&(r=c,s=l)}if(!s){i.head.rotation.y+=e*.4;return}let a=Math.atan2(-(s.pos.x-n.x),-(s.pos.z-n.z))-n.rot-i.head.rotation.y;if(a=Math.atan2(Math.sin(a),Math.cos(a)),i.head.rotation.y+=Math.sign(a)*Math.min(Math.abs(a),e*5),Math.abs(a)<.15&&n.cool<=0){n.cool=.45;let l=new w(n.x,n.y+2.7,n.z),c=s.pos.clone();c.y+=1;let h=c.sub(l).normalize();l.addScaledVector(h,2.2),t.shoot(l,h,15*Tp[n.level||1]*(Gt("plasma")?1.5:1),"turret"),Y.play("turret")}}function K1(){return u.buildings.map(n=>[n.type,+n.x.toFixed(2),+n.z.toFixed(2),+n.rot.toFixed(3),Math.round(n.hp),n.level||1])}var Ol=new w;function wi(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Ol.copy(e),Ol[i]=0,Ol.normalize();let c=.5*o/(o+a),h=1-Ol.angleTo(n)/l;return Math.sign(Ol[t])===1?h*c:a/(o+a)+c+c*(1-h)}var xa=class extends Ye{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new w,l=new w,c=new w(e,t,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=h.length/6,g=new w,v=.5/s;for(let x=0,m=0;x<h.length;x+=3,m+=2)switch(a.fromArray(h,x),l.copy(a),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),h[x+0]=c.x*Math.sign(a.x)+l.x*r,h[x+1]=c.y*Math.sign(a.y)+l.y*r,h[x+2]=c.z*Math.sign(a.z)+l.z*r,d[x+0]=l.x,d[x+1]=l.y,d[x+2]=l.z,Math.floor(x/p)){case 0:g.set(1,0,0),f[m+0]=wi(g,l,"z","y",r,i),f[m+1]=1-wi(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),f[m+0]=1-wi(g,l,"z","y",r,i),f[m+1]=1-wi(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),f[m+0]=1-wi(g,l,"x","z",r,e),f[m+1]=wi(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),f[m+0]=1-wi(g,l,"x","z",r,e),f[m+1]=1-wi(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),f[m+0]=1-wi(g,l,"x","y",r,e),f[m+1]=1-wi(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),f[m+0]=wi(g,l,"x","y",r,e),f[m+1]=1-wi(g,l,"y","x",r,t);break}}};var re=(n,e,t)=>new w(n,e,t);function L(n,e,t=0,i=0,s=0,r,o=0,a=0,l=0){let c=new ne(n,e);return c.position.set(t,i,s),c.rotation.set(o,a,l),c.castShadow=!0,c.receiveShadow=!0,r&&r.add(c),c}var Me=(n,e,t,i=.06)=>new xa(n,e,t,2,Math.min(i,n/2.1,e/2.1,t/2.1)),He=(n,e,t,i=24,s=!1)=>new Le(n,e,t,i,1,s),Zt=(n,e=32)=>new Rs(n.map(([t,i])=>new te(t,i)),e);function Nt(n,e,t,i,s,r=10){let o=e.clone().sub(n),a=o.length(),l=L(He(t,t,a,r),i,0,0,0,s);return l.position.copy(n).add(e).multiplyScalar(.5),l.quaternion.setFromUnitVectors(re(0,1,0),o.normalize()),l}function Ow(n,e,t,i,s){let r=Nt(n,e,t,i,s);for(let o of[n,e]){let a=Nt(o.clone().lerp(e===o?n:e,.02),o,t*1.6,y.metal,s);a.scale.y=1}return r}function Fi(n,e,t,i,s=32){let r=new hl(n);return L(new ih(r,s,e,8,!1),t,0,0,0,i)}function Fw(n,e,t,i,s,r){let o=n.clone().lerp(e,.5);return o.y-=t,Fi([n,n.clone().lerp(o,.5).add(re(0,-t*.15,0)),o,e.clone().lerp(o,.5).add(re(0,-t*.15,0)),e],i,s,r,24)}function Gh(n,e,t,i,s,r=0,o=.5){let a=new de;a.position.set(e,t,i),a.rotation.y=r,n.add(a),L(He(.035,.035,s,6),y.metal,-o/2,s/2,0,a),L(He(.035,.035,s,6),y.metal,o/2,s/2,0,a);for(let l=.25;l<s;l+=.32)L(He(.022,.022,o,6),y.metal,0,l,0,a,0,0,Math.PI/2);return a}function Si(n,e,t,i,s,r,o=0,a=8){let l=new de;l.position.set(i,s,r),l.rotation.y=o,n.add(l),L(Me(e,t,.08,.02),y.dark,0,0,0,l);for(let c=0;c<a;c++)L(new Ye(e*.9,t/a*.45,.04),y.metal,0,-t/2+(c+.5)*t/a,.05,l,-.4,0,0);return l}function io(n,e,t,i,s,r=0,o=0){let a=new de;a.position.set(e,t,i),a.rotation.set(o,r,0),n.add(a),L(new Ne(s,s*.18,8,24),y.metal,0,0,0,a),L(new Ji(s*.95,24),y.window,0,0,-.01,a);for(let l=0;l<8;l++){let c=l/8*Math.PI*2;L(new We(s*.06,6,4),y.metal,Math.cos(c)*s*1.12,Math.sin(c)*s*1.12,.02,a)}return a}function Lp(n,e,t,i,s=.05){for(let r=0;r<i;r++){let o=r/i*Math.PI*2;L(He(s,s,s*1.2,6),y.metal,Math.cos(o)*e,t,Math.sin(o)*e,n)}}function Pp(n,e,t,i,s=.22,r=0,o=0){let a=new de;a.position.set(e,t,i),a.rotation.set(r,o,0),n.add(a),L(new Ne(s,s*.12,6,18),y.red2,0,0,0,a);for(let l=0;l<3;l++)L(new Ye(s*2,s*.12,s*.12),y.red2,0,0,0,a,0,0,l*Math.PI/3);return L(He(s*.25,s*.25,s*.6,8),y.metal,0,0,-s*.3,a,Math.PI/2,0,0),a}function va(n,e,t,i,s=0){let r=new de;return r.position.set(e,t,i),r.rotation.y=s,n.add(r),L(He(.13,.13,.06,18),y.metal,0,0,0,r,Math.PI/2,0,0),L(new Ji(.11,18),y.screen,0,0,.032,r),r}function Bi(n,e,t,i,s,r,o=0){return L(new Ye(e,t,.02),y.hazard,i,s,r,n,0,o,0)}function Fl(n,e,t,i,s,r,o,a,l=0){let c=new de;c.rotation.y=l,n.add(c);for(let h=0;h<t;h++){let d=.12+e()*.35,f=.1+e()*.3,p=.04+e()*.12,g=e(),v=g<.5?y.panel:g<.8?y.dark:y.metal;e()<.3?L(He(d*.3,d*.3,p*2,10),v,i+e()*(s-i),r+e()*(o-r),a+p,c,Math.PI/2,0,0):L(Me(d,f,p,.015),v,i+e()*(s-i),r+e()*(o-r),a+p/2,c)}return c}function Er(n){let e=n;return()=>(e=e*16807%2147483647,(e-1)/2147483646)}{let n=document.createElement("canvas");n.width=128,n.height=32;let e=n.getContext("2d");e.fillStyle="#f2c11a",e.fillRect(0,0,128,32),e.fillStyle="#1a1a1a";for(let h=-32;h<160;h+=24)e.beginPath(),e.moveTo(h,32),e.lineTo(h+12,32),e.lineTo(h+44,0),e.lineTo(h+32,0),e.fill();let t=new Xt(n);t.colorSpace=Et,t.wrapS=Vn,t.repeat.set(2,1),y.hazard=new me({map:t,roughness:.7}),y.red2=new me({color:13120030,roughness:.5,metalness:.3}),y.chrome=new me({color:14738666,roughness:.15,metalness:1}),y.rubber=new me({color:1842206,roughness:.92}),y.ablative=new me({color:3811874,roughness:.95,map:y.found.map,bumpMap:y.found.bumpMap,bumpScale:3}),y.soil=new me({color:3875864,roughness:1}),y.leaf=new me({color:4168250,roughness:.7,flatShading:!0}),y.leaf2=new me({color:7127626,roughness:.7,flatShading:!0}),y.fruit=new me({color:14694428,roughness:.4}),y.growlight=new me({color:2228241,emissive:16732120,emissiveIntensity:2.2});let i=document.createElement("canvas");i.width=i.height=64;let s=i.getContext("2d");s.fillStyle="#0a1a14",s.fillRect(0,0,64,64),s.strokeStyle="#6dffb5",s.lineWidth=3,s.beginPath(),s.arc(32,36,22,Math.PI*1.1,Math.PI*1.9),s.stroke(),s.beginPath(),s.moveTo(32,36),s.lineTo(46,22),s.stroke();let r=new Xt(i);r.colorSpace=Et,y.screen=new me({map:r,emissive:16777215,emissiveMap:r,emissiveIntensity:.9});let o=document.createElement("canvas");o.width=128,o.height=128;let a=o.getContext("2d"),l=a.createLinearGradient(0,0,128,128);l.addColorStop(0,"#16285a"),l.addColorStop(.5,"#2a4a9a"),l.addColorStop(1,"#122048"),a.fillStyle=l,a.fillRect(0,0,128,128),a.strokeStyle="rgba(200,220,255,.55)",a.lineWidth=1;for(let h=16;h<128;h+=16)a.beginPath(),a.moveTo(h,0),a.lineTo(h,128),a.stroke();a.strokeStyle="rgba(220,230,255,.8)",a.lineWidth=2,a.beginPath(),a.moveTo(0,64),a.lineTo(128,64),a.stroke();let c=new Xt(o);c.colorSpace=Et,c.anisotropy=8,y.cell=new me({map:c,roughness:.12,metalness:.6,envMapIntensity:1.8})}function Tn(n,e,t=!1){let i=t?L(Me(e*2,4,e*2,.12),y.found,0,-1.8,0,n):L(He(e,e*1.05,4,32),y.found,0,-1.8,0,n);i.castShadow=!1,i.userData.found=!0}Object.assign(Qn,{solar(n,e){Tn(n,2.2,!0),L(Me(1.4,.25,1.4,.05),y.panel,0,.12,0,n),Lp(n,.55,.27,8,.04),L(Zt([[0,0],[.3,0],[.26,.4],[.17,.6],[.15,2.1],[0,2.1]]),y.metal,0,.25,0,n),L(Me(.5,.6,.4,.05),y.dark,.32,.65,0,n),va(n,.57,.7,0,Math.PI/2),Fw(re(.4,.5,.15),re(1.3,.05,.9),.15,.03,y.rubber,n);let t=new de;t.position.y=2.45,n.add(t),L(Me(.5,.42,.5,.06),y.dark,0,0,0,t),L(He(.12,.12,.9,12),y.chrome,0,.1,0,t,0,0,Math.PI/2);let i=new de;i.position.y=.25,t.add(i),L(Me(4.4,.1,3,.03),y.metal,0,-.02,0,i);for(let s=0;s<4;s++)for(let r=0;r<3;r++){let o=L(new Ye(1.02,.03,.92),y.cell,-1.6+s*1.07,.045,-.97+r*.97,i);o.castShadow=!0}for(let s of[-1.1,1.1])L(new Ye(4.2,.08,.06),y.metal,0,-.1,s,i);for(let s of[-1.5,0,1.5])L(new Ye(.06,.08,2.6),y.metal,s,-.1,0,i);Nt(re(-1.5,-.12,-1.1),re(0,-.35,0),.03,y.metal,i),Nt(re(1.5,-.12,1.1),re(0,-.35,0),.03,y.metal,i),Nt(re(1.5,-.12,-1.1),re(0,-.35,0),.03,y.metal,i),Nt(re(-1.5,-.12,1.1),re(0,-.35,0),.03,y.metal,i),L(Me(.3,.12,.2,.02),y.dark,1.9,.08,1.35,i),e.pivot=t,e.panel=i},oxygen(n,e){Tn(n,3);let t=Er(11);L(He(3,3.1,.35,40),y.panel,0,.17,0,n);for(let s of[-1.35,1.35]){let r=new de;r.position.set(s,.35,-.3),n.add(r),L(Zt([[0,.2],[.55,.22],[.9,.45],[1,.8],[1,3.2],[.9,3.55],[.55,3.78],[0,3.8]],40),y.white,0,0,0,r);for(let o of[1.2,2.4])L(new Ne(1.005,.03,6,40),y.metal,0,o,0,r,Math.PI/2,0,0);L(He(1.015,1.015,.25,40,!0),y.orange,0,1.8,0,r);for(let o of[-.6,.6])L(Me(1.6,.35,.2,.04),y.dark,0,.25,o,r);L(He(.12,.12,.3,12),y.metal,0,3.9,0,r),Pp(r,0,4.1,0,.18,Math.PI/2,0),va(r,0,2.2,1.02),Gh(r,0,.3,-1.05,3.4,Math.PI)}L(Me(1.7,1.9,1.6,.1),y.panel,0,1.3,1.2,n),L(Me(1.8,.2,1.7,.05),y.orange,0,2.3,1.2,n),Fl(n,t,10,-.7,.7,.6,2,1.95),Si(n,1,.5,0,.7,2.01,0,6),L(new Ne(.42,.06,8,28),y.dark,0,1.75,2.02,n);let i=new de;i.position.set(0,1.75,2.03),n.add(i);for(let s=0;s<6;s++)L(new Ye(.1,.36,.02),y.metal,Math.sin(s*Math.PI/3)*.2,Math.cos(s*Math.PI/3)*.2,0,i,0,.4,-s*Math.PI/3);L(He(.08,.08,.06,12),y.chrome,0,0,0,i,Math.PI/2,0,0),e.fan=i;for(let s of[-1.35,1.35])Fi([re(s,3.2,.5),re(s*.7,3,.9),re(s*.3,2.4,1.2),re(s*.25,2.2,1.3)],.07,y.metal,n);Ow(re(-1.35,.9,.7),re(1.35,.9,.7),.06,y.metal,n),Pp(n,.8,.9,.85,.15,0,0),va(n,-.5,2,2.01),va(n,.5,2,2.01),e.light=_e(6741503,.45,n,.6,2.05,2.05),Bi(n,1.8,.12,0,.42,2.02)},habitat(n,e){Tn(n,6.2);let t=Er(23);L(Zt([[0,0],[6.25,0],[6.3,.15],[6.25,.9],[6.05,1.05],[5.95,1.25],[0,1.25]],64),y.panel,0,0,0,n);for(let o=0;o<16;o++){let a=o/16*Math.PI*2;Math.abs(a-Math.PI/2)<.3||Si(n,.7,.4,Math.cos(a)*6.28,.55,Math.sin(a)*6.28,-a+Math.PI/2,4)}let i=L(new We(5.8,64,24,0,Math.PI*2,0,Math.PI/2),y.white,0,1.2,0,n);i.scale.y=.85;for(let o=0;o<12;o++)L(new Ne(5.86,.08,6,32,Math.PI/2),y.panel,0,1.2,0,n,0,o*Math.PI/6,0).scale.set(1,.85,1);for(let[o,a]of[[2.6,5.62],[4.3,4.6]])L(new Ne(a,.07,6,64),y.panel,0,o,0,n,Math.PI/2,0,0);e.windows=[];for(let o=0;o<14;o++){let a=o/14*Math.PI*2+.11;if(Math.abs(a-Math.PI/2)<.35)continue;let l=new de;l.position.set(Math.cos(a)*5.76,2,Math.sin(a)*5.76),l.rotation.y=-a+Math.PI/2,l.rotation.x=-.18,n.add(l),L(Me(1.15,.62,.16,.08),y.metal,0,0,0,l),L(Me(1,.48,.1,.07),y.window,0,0,.05,l)}L(He(1.2,1.4,.5,32),y.panel,0,6.05,0,n),L(new We(1,32,12,0,Math.PI*2,0,Math.PI/2),y.glass,0,6.3,0,n).castShadow=!1,L(new Ne(1.05,.06,6,32),y.metal,0,6.3,0,n,Math.PI/2,0,0),L(He(.06,.09,3.2,8),y.metal,1.6,7,0,n),e.tip=_e(16728128,1,n,1.6,8.7,0),L(new We(.55,20,8,0,Math.PI*2,0,Math.PI/3),y.white,-1.4,6.6,.6,n).rotation.set(-.9,.5,0),L(He(.05,.05,.9,6),y.metal,-1.4,6.1,.6,n),Gh(n,0,1.25,-5.4,3.2,0,.45).rotation.x=-.6;let r=new de;r.position.set(0,0,6.2),n.add(r),L(Me(2.6,2.9,3,.25),y.white,0,1.45,.2,r),L(Me(2.64,.12,3.04,.05),y.orange,0,2.62,.2,r),L(Me(1.5,2.2,.15,.12),y.metal,0,1.25,1.72,r),L(Me(1.2,1.95,.1,.1),y.dark,0,1.2,1.78,r),io(r,0,1.75,1.84,.22),L(Me(.12,.4,.08,.03),y.chrome,.45,1.1,1.85,r),Bi(r,1.5,.14,0,.12,1.85);for(let o=0;o<3;o++)L(Me(1.4,.12,.35,.03),y.metal,0,.06+o*0,2.05+o*.35,r).position.y=.3-o*.12;_e(16769184,.8,r,1,2.5,1.8),L(Me(.5,.35,.3,.04),y.dark,-1,2.4,1.75,r),Fl(r,t,8,-1.2,1.2,.4,2.6,1.7,0),Fi([re(4.5,1,3.5),re(5.6,.6,4.2),re(6.6,.25,4.6),re(7.6,.2,4.6)],.12,y.metal,n),Fi([re(-4.5,1,3.5),re(-5.4,.7,4.4),re(-6.4,.25,5)],.1,y.orange,n);for(let[o,a,l]of[[-6.3,-2.4,.4],[6.4,-2,-.3]]){let c=new de;c.position.set(o,0,a),c.rotation.y=l,n.add(c),L(Me(1.4,1.1,1,.08),y.panel,0,.55,0,c),Si(c,.9,.7,0,.6,.51,0,6),L(new Ne(.35,.05,6,20),y.dark,0,1.12,0,c,Math.PI/2,0,0)}},extractor(n,e){Tn(n,2.6,!0),L(Me(4.6,.5,4.6,.08),y.panel,0,.25,0,n),Bi(n,4.6,.15,0,.42,2.31),Bi(n,4.6,.15,0,.42,-2.31);let t=6.4,i=.6,s=1.6,r=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let[a,l]of r)Nt(re(a*s,.5,l*s),re(a*i,t,l*i),.09,y.orange,n);for(let a=0;a<3;a++){let l=.5+a*(t-.5)/3,c=l+(t-.5)/3,h=s+(i-s)*(a/3),d=s+(i-s)*((a+1)/3);for(let f=0;f<4;f++){let[p,g]=r[f],[v,x]=r[(f+1)%4];Nt(re(p*h,l,g*h),re(v*d,c,x*d),.035,y.metal,n),Nt(re(v*h,l,x*h),re(p*d,c,g*d),.035,y.metal,n),Nt(re(p*d,c,g*d),re(v*d,c,x*d),.04,y.metal,n)}}L(Me(1.8,.3,1.8,.05),y.dark,0,t+.1,0,n);for(let[a,l]of r)L(He(.03,.03,.7,6),y.metal,a*.85,t+.6,l*.85,n);L(He(.45,.45,.6,20),y.white,0,t+.55,0,n),e.light=_e(10476799,1,n,0,t+1.1,0);let o=new de;o.position.y=3,n.add(o),L(He(.18,.18,4.6,16),y.chrome,0,0,0,o);for(let a=0;a<5;a++)L(new Ne(.2,.04,6,16),y.metal,0,-2+a*1,0,o,Math.PI/2,0,0);L(new qt(.3,.7,16),y.dark,0,-2.6,0,o,Math.PI,0,0),e.drill=o,L(Zt([[0,0],[.9,0],[1,.2],[1,1.8],[.8,2.1],[0,2.15]],32),y.white,2.1,.5,1.3,n),L(He(1.01,1.01,.2,32,!0),y.orange,2.1,1.6,1.3,n),va(n,2.1,1.2,2.31),Fi([re(.3,1,.3),re(.9,1.2,.8),re(1.5,1.6,1.2),re(2.1,2.7,1.3)],.08,y.metal,n),Pp(n,1.2,1.25,1.1,.14,0,.6),L(Me(1.2,1,.9,.08),y.dark,-1.7,1,1.4,n),Si(n,.8,.5,-1.7,1,1.86,0,5)},greenhouse(n,e){Tn(n,5,!0),L(Me(10.4,.5,6.4,.1),y.panel,0,.25,0,n);let t=L(new Le(3,3,10,40,1,!0,0,Math.PI),y.glass,0,.5,0,n,0,0,Math.PI/2);t.castShadow=!1;for(let s=0;s<9;s++)L(new Ne(3.02,.06,6,28,Math.PI),y.white,-4.8+s*1.2,.5,0,n,0,Math.PI/2,0);for(let s=1;s<6;s++){let r=s/6*Math.PI;L(He(.035,.035,9.8,6),y.white,0,.5+Math.sin(r)*3.02,Math.cos(r)*3.02,n,0,0,Math.PI/2)}for(let s of[-1,1]){let r=L(new Ji(3,32,0,Math.PI),y.glass,s*5,.5,0,n,0,s*Math.PI/2,0);r.castShadow=!1,L(Me(.12,2.2,1.3,.04),y.white,s*5,1.6,0,n)}L(Me(.1,1.9,1,.05),y.dark,5.05,1.45,0,n);let i=Er(71);for(let s of[-1.5,0,1.5]){L(Me(9,.5,.9,.05),y.dark,0,.75,s,n),L(new Ye(8.8,.06,.8),y.soil,0,1.01,s,n);for(let r=0;r<10;r++){let o=-4.1+r*.9+(i()-.5)*.2,a=(r+Math.round(s))%3;if(a===0)for(let l=0;l<4;l++)L(new $n(.22+i()*.12,0),l%2?y.leaf:y.leaf2,o+(i()-.5)*.3,1.2+i()*.25,s+(i()-.5)*.3,n).castShadow=!1;else if(a===1){L(He(.02,.02,1.2,4),y.leaf,o,1.6,s,n);for(let l=0;l<5;l++)L(new $n(.14,0),y.leaf2,o+(i()-.5)*.3,1.2+l*.22,s+(i()-.5)*.3,n).castShadow=!1;for(let l=0;l<3;l++)L(new We(.07,8,6),y.fruit,o+(i()-.5)*.3,1.3+i()*.8,s+(i()-.5)*.25,n)}else for(let l=0;l<6;l++){let c=L(new qt(.05,.5,4),y.leaf2,o+(i()-.5)*.25,1.25,s+(i()-.5)*.25,n,(i()-.5)*.6,0,(i()-.5)*.6);c.castShadow=!1}}}for(let s of[-.75,.75])L(Me(9,.06,.12,.02),y.growlight,0,2.7,s,n);e.light=_e(16737996,4,n,0,2.3,0),L(Zt([[0,0],[.6,0],[.65,.1],[.65,1.5],[.5,1.7],[0,1.72]],24),y.white,-4.4,.5,3.6,n),Fi([re(-4.4,1.6,3.6),re(-4.2,1.9,3),re(-4,1.5,2.6)],.05,y.metal,n)}});Object.assign(Qn,{fabricator(n,e){Tn(n,4,!0);let t=Er(41);L(Me(7.4,.4,5.4,.08),y.panel,0,.2,0,n),L(Me(7,3.2,5,.18),y.white,0,2,0,n),L(new Le(2.5,2.5,7,32,1,!1,0,Math.PI),y.panel,0,3.6,0,n,0,0,Math.PI/2).scale.set(1,1,.35);for(let o=0;o<6;o++)L(new Ne(2.52,.05,6,24,Math.PI),y.metal,-3.3+o*1.32,3.6,0,n,0,Math.PI/2,0).scale.set(1,.35,1);L(Me(7.1,.2,5.1,.05),y.orange,0,3.55,0,n),L(Me(3.4,2.7,.2,.06),y.metal,0,1.75,2.52,n);for(let o=0;o<12;o++)L(new Ye(3,.16,.05),y.dark,0,.55+o*.2,2.64,n);Bi(n,3.4,.14,0,.35,2.66);for(let o of[-1.9,1.9])_e(16769184,.7,n,o,3,2.6);Fl(n,t,16,-3.2,3.2,.8,3,-2.5,Math.PI),Si(n,1.2,.8,2.6,1.6,2.52,0,6),Si(n,1.2,.8,-2.6,1.6,2.52,0,6),Fi([re(3.5,3,-1.5),re(4.2,2.5,-1.8),re(4.4,1,-2),re(4.4,.4,-2)],.1,y.metal,n);let i=new de;i.position.set(2.2,3.85,0),n.add(i),L(He(.45,.55,.4,24),y.dark,0,.2,0,i);let s=new de;s.position.y=.4,s.rotation.z=.35,i.add(s),L(Me(.32,1.8,.32,.08),y.orange,0,.9,0,s),L(He(.22,.22,.45,16),y.metal,0,1.8,0,s,Math.PI/2,0,0);let r=new de;r.position.y=1.8,r.rotation.z=-1.4,s.add(r),L(Me(.25,1.4,.25,.06),y.orange,0,.7,0,r),L(He(.12,.05,.35,12),y.chrome,0,1.55,0,r),e.arm=i,e.spark=_e(16764006,1,r,0,1.8,0);for(let[o,a,l]of[[-2.6,3.4,1.1],[-1.4,3.3,.9],[-2.1,3.6,.6]])L(Me(l,l,l,.05),y.dark,o,l/2+(l<.7?1.1:0),a,n),L(new Ye(l*1.01,.06,l*1.01),y.orange,o,l*.7+(l<.7?1.1:0),a,n)},turret(n,e){Tn(n,1.8),L(Zt([[0,0],[1.9,0],[1.95,.15],[1.6,.9],[1.2,1.2],[0,1.2]],32),y.metal,0,0,0,n),Lp(n,1.7,.2,12,.06),L(He(.65,.8,1.2,24),y.dark,0,1.75,0,n);let t=new de;t.position.y=2.75,n.add(t),L(Me(1.7,1.05,2,.2),y.white,0,0,.1,t),L(Me(1.75,.18,2.05,.06),y.orange,0,.32,.1,t),L(Me(.9,.35,.6,.08),y.dark,0,.6,.4,t);for(let i of[-.42,.42]){L(He(.16,.16,.5,16),y.dark,i,0,-.95,t,Math.PI/2,0,0),L(He(.09,.09,1.9,16),y.metal,i,0,-1.9,t,Math.PI/2,0,0);for(let s=0;s<3;s++)L(new Ne(.11,.025,6,16),y.cyan,i,0,-1.4-s*.35,t);L(He(.13,.11,.25,16),y.dark,i,0,-2.9,t,Math.PI/2,0,0)}L(He(.18,.18,.1,16),y.cyan,0,.1,-.92,t,Math.PI/2,0,0),e.eye=_e(3401471,.6,t,0,.1,-.98),Si(t,.9,.4,0,-.1,1.12,0,4),e.head=t},reactor(n,e){Tn(n,5.2),L(Zt([[0,0],[5.2,0],[5.3,.2],[5,1.3],[4.6,1.5],[0,1.5]],48),y.panel,0,0,0,n),Bi(n,2.5,.16,0,1,5.06);for(let r=0;r<16;r++){let o=r/16*Math.PI*2;Si(n,.6,.45,Math.cos(o)*5.1,.75,Math.sin(o)*5.1,-o+Math.PI/2,4)}L(new Ne(2.6,.9,24,64),y.white,0,3,0,n,Math.PI/2,0,0);for(let r=0;r<16;r++){let o=r/16*Math.PI*2,a=L(new Ne(1,.12,8,24),y.dark,Math.cos(o)*2.6,3,Math.sin(o)*2.6,n);a.rotation.y=-o}let t=L(new We(1.2,32,24),y.cyan,0,3,0,n);t.castShadow=!1;let i=L(new Ne(3.9,.12,10,64),y.chrome,0,3,0,n),s=L(new Ne(3.9,.12,10,64),y.chrome,0,3,0,n);s.rotation.x=Math.PI/2;for(let r=0;r<6;r++){let o=r*Math.PI/3;Nt(re(Math.cos(o)*4.6,1.5,Math.sin(o)*4.6),re(Math.cos(o)*3.2,3,Math.sin(o)*3.2),.18,y.metal,n)}for(let r=0;r<4;r++){let o=r*Math.PI/2+Math.PI/4;L(Zt([[0,0],[.7,0],[.75,.1],[.75,4.2],[.6,4.5],[0,4.5]],24),y.white,Math.cos(o)*4.4,1.5,Math.sin(o)*4.4,n)}e.core=t,e.r1=i,e.r2=s,e.light=_e(3401471,7,n,0,3,0)},beacon(n,e){L(Zt([[0,0],[7.4,0],[7.5,.1],[7.2,.5],[0,.5]],8),y.found,0,-.2,0,n,0,Math.PI/8,0).castShadow=!1,L(He(7.6,7.9,4,8),y.found,0,-2.3,0,n,0,Math.PI/8,0).castShadow=!1,L(new tn(4.2,4.8,64),y.orange,0,.32,0,n,-Math.PI/2,0,0),L(new tn(5.6,5.75,64),y.white,0,.32,0,n,-Math.PI/2,0,0);let t=document.createElement("canvas");t.width=t.height=128;let i=t.getContext("2d");i.fillStyle="#e8e4dc",i.font="bold 110px sans-serif",i.textAlign="center",i.fillText("H",64,104);let s=new Xt(t);s.colorSpace=Et,L(new Dn(3,3),new me({map:s,transparent:!0,roughness:.8}),0,.33,0,n,-Math.PI/2,0,0),e.lights=[];for(let a=0;a<8;a++){let l=a*Math.PI/4+Math.PI/8;L(He(.15,.2,.15,12),y.dark,Math.cos(l)*6.6,.38,Math.sin(l)*6.6,n),e.lights.push(_e(16755251,1,n,Math.cos(l)*6.6,.55,Math.sin(l)*6.6))}let r=new de;r.position.set(8.6,0,0),n.add(r);for(let[a,l]of[[-.35,-.35],[.35,-.35],[.35,.35],[-.35,.35]])Nt(re(a*1.6,0,l*1.6),re(a*.5,8.5,l*.5),.05,y.metal,r);for(let a=1;a<8.5;a+=1.1){let l=1.6-a/8.5*1.1;L(new Ne(l*.5,.025,4,4),y.metal,0,a,0,r,Math.PI/2,0,Math.PI/4)}L(new We(.9,24,8,0,Math.PI*2,0,Math.PI/3),y.white,0,8.4,.4,r).rotation.set(-1,0,0),e.tip=_e(16724016,1.6,r,0,9.3,0),L(Me(1.2,1,.8,.08),y.dark,-9.6,.5,4.5,n),va(n,-9.6,.6,4.92)}});Object.assign(Qn,{lab(n,e){Tn(n,4),L(He(4.1,4.2,.4,40),y.panel,0,.2,0,n),L(He(3.2,3.4,2.8,40),y.white,0,1.8,0,n),L(He(3.25,3.25,.2,40),y.orange,0,3.1,0,n);for(let i=0;i<10;i++){let s=i/10*Math.PI*2,r=new de;r.position.set(Math.cos(s)*3.32,2,Math.sin(s)*3.32),r.rotation.y=-s+Math.PI/2,n.add(r),L(Me(.9,.7,.1,.06),y.metal,0,0,0,r),L(Me(.78,.58,.08,.05),y.window,0,0,.04,r)}L(new We(2.2,40,16,0,Math.PI*2,0,Math.PI/2),y.white,0,3.2,0,n),L(Me(.9,2.4,.2,.05),y.dark,0,4.4,1.5,n,-.9,0,0);let t=L(He(.35,.45,2.6,20),y.metal,0,5.2,.9,n,-.7,0,0);L(new Ne(.37,.05,8,20),y.cyan,0,6.15,1.75,n,-.7+Math.PI/2,0,0),e.scope=t,L(He(.05,.07,3,8),y.metal,-2.4,4.5,-1.2,n),e.tip=_e(8382207,1,n,-2.4,6.1,-1.2),L(Me(1.5,1,1,.08),y.dark,3.4,.7,-2,n),Si(n,1,.6,3.4,.7,-1.48,0,5),L(Me(1.3,2.1,.15,.1),y.metal,0,1.25,3.38,n),L(Me(1.1,1.9,.1,.08),y.dark,0,1.2,3.44,n),e.light=_e(8382207,2,n,0,6.3,1.9)},trade(n,e){Tn(n,4.8,!0),L(Me(9.6,.4,9.6,.1),y.found,0,.2,0,n),Bi(n,9.6,.15,0,.42,4.82);let t=[y.orange,y.white,y.dark,y.red2],i=0;for(let[o,a,l]of[[-3.2,-2.6,2],[-3.2,-.2,1],[-3.2,2.2,2],[.2,-2.6,1],[.2,2.6,1]])for(let c=0;c<l;c++){let h=L(Me(2.2,1.1,2,.05),t[i++%t.length],o,.95+c*1.12,a,n);for(let d=0;d<5;d++)L(new Ye(.04,.9,2.02),y.metal,o-.8+d*.4,.95+c*1.12,a,n)}let s=new de;s.position.set(3.2,.4,0),n.add(s);for(let[o,a]of[[-.4,-.4],[.4,-.4],[.4,.4],[-.4,.4]])Nt(re(o,0,a),re(o*.6,6,a*.6),.06,y.orange,s);for(let o=1;o<6;o+=1.2)L(new Ne(.42-o*.03,.03,4,4),y.orange,0,o,0,s,Math.PI/2,0,Math.PI/4);let r=new de;r.position.y=6.1,s.add(r),L(Me(.6,.5,.6,.06),y.dark,0,0,0,r),L(Me(.25,.25,6,.04),y.orange,0,.2,-2,r),L(Me(.6,.6,.8,.05),y.dark,0,.1,1.2,r),Nt(re(0,.1,-4.6),re(0,-3,-4.6),.015,y.metal,r),L(Me(.5,.2,.5,.03),y.metal,0,-3.1,-4.6,r),e.jib=r,L(He(.05,.05,2.4,6),y.metal,-4.2,1.6,4.2,n),e.tip=_e(6750105,1,n,-4.2,2.9,4.2)}});Object.assign(Qn,{apartment(n,e){Tn(n,4.4,!0);let t=Er(91),[i,s]=_l;L(Me(8.6,.6,8.6,.15),y.panel,0,.3,0,n);let r=(o,a,l,c,h)=>{L(Me(l,c,l,.25),h,o,.6+c/2,a,n);for(let d=2.2;d<c;d+=2.2)L(new Ye(l+.08,.12,l+.08),y.white,o,.6+d,a,n);for(let d of[-1,1])L(new Ye(.16,c,.16),y.metal,o+d*l/2,.6+c/2,a+l/2,n),L(new Ye(.16,c,.16),y.metal,o+d*l/2,.6+c/2,a-l/2,n)};r(-1.3,-1.2,4.6,17,i),r(2.1,2,3.6,11,s),L(Me(4,1.2,4,.3),y.white,-1.3,18.2,-1.2,n),L(Me(3,.9,3,.3),y.white,2.1,12.1,2,n),L(Me(2.6,1.1,1.4,.4),y.glass,.6,7.4,.6,n,0,Math.PI/4,0).castShadow=!1;for(let o of[6.9,7.9])L(Me(2.7,.1,1.5,.04),y.metal,.6,o,.6,n,0,Math.PI/4,0);for(let o=0;o<6;o++)L(new $n(.35+t()*.2,0),y.leaf2,1.4+t()*1.4,12.75,1.3+t()*1.4,n);Fl(n,t,8,-2.8,.2,18.6,18.9,.6),L(He(.08,.1,4,8),y.metal,-1.3,20.8,-1.2,n),e.tip=_e(16728128,1.4,n,-1.3,22.9,-1.2),L(Me(2.4,.15,1.6,.05),y.orange,-1.3,3.2,1.9,n);for(let o of[-2.3,-.3])L(He(.05,.05,2.6,8),y.metal,o,1.9,2.6,n);_e(16767392,1.2,n,-1.3,3,2.2)},vfarm(n,e){Tn(n,4),L(He(4,4.2,.8,40),y.panel,0,.4,0,n);let t=L(He(3.3,3.3,15,40,!0),y.glass,0,8.3,0,n);t.castShadow=!1;for(let s=0;s<8;s++){let r=s/8*Math.PI*2;L(new Ye(.14,15,.14),y.white,Math.cos(r)*3.32,8.3,Math.sin(r)*3.32,n)}let i=Er(55);for(let s=0;s<6;s++){let r=1.4+s*2.4;L(He(3.1,3.1,.18,40),y.white,0,r,0,n),L(new Ne(3.15,.06,6,40),y.metal,0,r+.1,0,n,Math.PI/2,0,0),L(He(2.8,2.8,.12,40),y.soil,0,r+.15,0,n);for(let o=0;o<16;o++){let a=o/16*Math.PI*2+s;L(new $n(.22+i()*.12,0),o%2?y.leaf:y.leaf2,Math.cos(a)*(1.7+i()*.9),r+.4,Math.sin(a)*(1.7+i()*.9),n).castShadow=!1}L(new Ne(2,.04,6,32),y.growlight,0,r+2.1,0,n,Math.PI/2,0,0)}L(He(.5,.5,15,16),y.metal,0,8.3,0,n),L(new We(3.3,40,12,0,Math.PI*2,0,Math.PI/2),y.glass,0,15.8,0,n).castShadow=!1,L(new Ne(3.32,.1,8,40),y.orange,0,15.8,0,n,Math.PI/2,0,0),Fi([re(3.4,1,1),re(4.4,.6,1.4),re(5.2,.3,2.2)],.1,y.metal,n),e.light=_e(16737996,8,n,0,8,0)},lifehub(n,e){Tn(n,5.8),L(Zt([[0,0],[6,0],[6.1,.2],[5.8,1.2],[0,1.2]],48),y.panel,0,0,0,n),L(new We(4.4,48,20,0,Math.PI*2,0,Math.PI/2),y.white,0,1.2,0,n).scale.y=.75,L(new Ne(4.45,.18,10,48),y.orange,0,1.6,0,n,Math.PI/2,0,0);for(let i=0;i<8;i++){let s=i/8*Math.PI*2;Si(n,1,.5,Math.cos(s)*5.9,.6,Math.sin(s)*5.9,-s+Math.PI/2,4)}for(let i=0;i<4;i++){let s=i*Math.PI/2+Math.PI/4,r=Math.cos(s)*5,o=Math.sin(s)*5;L(Zt([[0,0],[.95,0],[1,.2],[1,4.4],[.8,4.8],[0,4.85]],28),y.white,r,.4,o,n),L(He(1.02,1.02,.3,28,!0),y.cyan,r,3.6,o,n),Gh(n,r*1.2,.4,o*1.2,4.2,-s-Math.PI/2,.4),Fi([re(r*.8,2.6,o*.8),re(r*.6,2.8,o*.6),re(r*.45,2.4,o*.45)],.12,y.metal,n)}L(He(1.6,1.8,.6,32),y.dark,0,4.4,0,n),L(new Ne(1.7,.08,6,32),y.metal,0,4.75,0,n,Math.PI/2,0,0);let t=new de;t.position.y=4.8,n.add(t);for(let i=0;i<5;i++)L(Me(1.5,.05,.4,.02),y.metal,Math.cos(i*1.256)*.8,0,Math.sin(i*1.256)*.8,t,0,-i*1.256,.25);e.fan=t,e.light=_e(6741503,4,n,0,5.2,0)},plaza(n,e){Tn(n,7.2),L(Zt([[0,0],[7.3,0],[7.4,.1],[7.2,.4],[0,.4]],64),y.found,0,0,0,n);for(let s=2.5;s<7;s+=1.5)L(new Ne(s,.03,4,64),y.metal,0,.41,0,n,Math.PI/2,0,0);L(new tn(5.4,5.75,64),y.orange,0,.42,0,n,-Math.PI/2,0,0),L(Zt([[0,0],[2.1,0],[2,.3],[1.5,.5],[1.4,1.3],[1.6,1.45],[0,1.45]],40),y.white,0,.4,0,n),L(new Ne(1.55,.06,8,40),y.cyan,0,1.85,0,n,Math.PI/2,0,0);for(let s=0;s<6;s++){let r=s*Math.PI/3+Math.PI/6,o=new de;o.position.set(Math.cos(r)*5,.4,Math.sin(r)*5),o.rotation.y=-r+Math.PI/2,n.add(o),L(Me(2.2,.12,.6,.05),y.panel,0,.45,0,o),L(Me(2.2,.5,.1,.04),y.panel,0,.75,.28,o);for(let l of[-.9,.9])L(Me(.1,.45,.5,.03),y.metal,l,.22,0,o);let a=r+.52;L(Zt([[0,0],[.18,0],[.12,.2],[.06,.3],[.05,3.4],[0,3.4]],12),y.metal,Math.cos(a)*6.6,.4,Math.sin(a)*6.6,n),L(new We(.2,12,8),y.lamp,Math.cos(a)*6.6,3.95,Math.sin(a)*6.6,n),_e(16767392,1.1,n,Math.cos(a)*6.6,3.95,Math.sin(a)*6.6)}let t=L(new We(1.5,40,24),new Ue({map:Qn._earthTex?Qn._earthTex():null,color:10479359,transparent:!0,opacity:.7,blending:ze,depthWrite:!1}),0,4,0,n);t.castShadow=!1;for(let s=0;s<2;s++){let r=L(new Ne(2+s*.3,.015,4,64),y.cyan,0,4,0,n,Math.PI/2+.3-s*.6,0,0);r.castShadow=!1}let i=_e(6736127,5,n,0,4,0);L(new Le(1.1,1.5,2.2,32,1,!0),new Ue({color:8382207,transparent:!0,opacity:.1,blending:ze,depthWrite:!1,side:Tt}),0,2.95,0,n).castShadow=!1,e.earth=t,e.halo=i},drones(n,e){Tn(n,3.8,!0),L(Me(7.6,.5,7.6,.12),y.panel,0,.25,0,n),Bi(n,7.6,.14,0,.42,3.81),Bi(n,7.6,.14,0,.42,-3.81);for(let[s,r]of[[-1.9,-1.9],[1.9,-1.9],[-1.9,1.9],[1.9,1.9]]){L(He(1.15,1.2,.12,32),y.dark,s,.56,r,n),L(new tn(.8,.95,32),y.orange,s,.63,r,n,-Math.PI/2,0,0);for(let o=0;o<4;o++){let a=o*Math.PI/2;L(He(.06,.06,.06,8),y.lamp,s+Math.cos(a)*1.05,.64,r+Math.sin(a)*1.05,n)}}L(Me(1.4,4.2,1.4,.15),y.white,3,2.4,3,n),L(Me(1.6,.9,1.6,.15),y.glass,3,4.6,3,n).castShadow=!1,L(Me(1.7,.15,1.7,.05),y.orange,3,5.1,3,n),Gh(n,3,.5,2.25,4,0,.4);let t=new de;t.position.set(3,5.5,3),n.add(t);let i=L(new We(.9,24,8,0,Math.PI*2,0,Math.PI/3),y.white,0,.2,0,t);i.rotation.x=Math.PI*.6,L(He(.04,.04,.8,6),y.metal,0,.3,.25,t).rotation.x=1.1,e.dish=t,e.light=_e(8382207,1.2,n,3,6.3,3),L(Me(1.6,1,1,.08),y.dark,-3,1,3,n),Si(n,1,.6,-3,1,3.51,0,5)},terraformer(n,e){Tn(n,7),L(Zt([[0,0],[7.4,0],[7.5,.3],[7,2],[5.5,2.4],[0,2.4]],6),y.panel,0,0,0,n),L(Zt([[0,0],[4.4,0],[3.8,8],[3,16],[2.3,24],[1.6,28],[0,28.5]],6),y.white,0,2.4,0,n);for(let i of[6,14,22])L(new Ne(4.6-i*.11,.3,6,6),y.orange,0,2.4+i,0,n,Math.PI/2,0,Math.PI/6);for(let i=0;i<6;i++){let s=i*Math.PI/3;Nt(re(Math.cos(s)*7,2,Math.sin(s)*7),re(Math.cos(s)*3.5,14,Math.sin(s)*3.5),.35,y.metal,n)}for(let i=0;i<6;i++){let s=i*Math.PI/3+Math.PI/6;Si(n,1.4,2.4,Math.cos(s)*4,5,Math.sin(s)*4,-s+Math.PI/2,8)}e.rings=[];for(let i=0;i<3;i++){let s=L(new Ne(6-i*1.2,.22,10,64),y.cyan,0,10+i*8,0,n);s.castShadow=!1,e.rings.push(s)}L(He(1.2,1.6,2,24),y.dark,0,31.5,0,n);let t=L(new Le(.6,1.4,400,16,1,!0),new Ue({color:6743807,transparent:!0,opacity:0,blending:ze,depthWrite:!1,side:Tt}),0,232,0,n);t.castShadow=!1,t.receiveShadow=!1,e.beam=t,e.top=_e(6743807,9,n,0,32.5,0)},launch(n,e){Tn(n,9,!0),L(Me(18.4,1.2,18.4,.2),y.found,0,.6,0,n),L(new tn(4.8,5.8,48),y.orange,0,1.22,0,n,-Math.PI/2,0,0),L(He(3.6,3.6,.3,32),y.dark,0,1.3,0,n),Bi(n,18.4,.2,0,1.25,9.21);let t=new de;t.position.set(7.5,1.2,0),n.add(t);for(let[r,o]of[[-1.5,-1.5],[1.5,-1.5],[1.5,1.5],[-1.5,1.5]])Nt(re(r,0,o),re(r,34,o),.14,y.orange,t);for(let r=0;r<34;r+=2.5)for(let[o,a,l,c]of[[-1.5,-1.5,1.5,-1.5],[1.5,-1.5,1.5,1.5],[1.5,1.5,-1.5,1.5],[-1.5,1.5,-1.5,-1.5]])Nt(re(o,r,a),re(l,r+2.5,c),.04,y.metal,t),Nt(re(o,r,a),re(l,r,c),.05,y.metal,t);for(let r of[12,24])L(Me(4.2,.4,1,.06),y.dark,-3.2,r,0,t),Nt(re(-1.5,r,0),re(-5,r,0),.06,y.metal,t);let i=new de;i.position.y=1.4,n.add(i),L(Zt([[0,0],[2.6,.2],[2.8,2],[2.7,22],[2.4,25],[1.6,29],[.6,31.5],[0,32]],40),y.white,0,0,0,i);for(let r of[8,19])L(He(2.79,2.79,1.2,40,!0),y.orange,0,r,0,i);for(let r of[4,12,16,23])L(new Ne(2.76,.04,6,40),y.metal,0,r,0,i,Math.PI/2,0,0);for(let r=0;r<4;r++)io(i,Math.cos(r*1.57)*2.62,25.5,Math.sin(r*1.57)*2.62,.3,Math.PI/2-r*1.57,0);for(let r=0;r<4;r++){let o=r*Math.PI/2,a=L(Me(.35,7,3.4,.1),y.panel,Math.cos(o)*3.1,3.5,Math.sin(o)*3.1,i);a.rotation.y=-o}for(let r=0;r<5;r++){let o=r*Math.PI*2/5;L(Zt([[.4,0],[.6,-.3],[1,-1.4],[.9,-1.4],[.5,-.35]],20),y.metal,Math.cos(o)*1.4,.2,Math.sin(o)*1.4,i)}let s=new ne(new qt(3,16,16,1,!0),y.flame);s.rotation.x=Math.PI,s.position.y=-8,s.visible=!1,i.add(s),e.ship=i,e.flame=s,e.tip=_e(16777215,3,i,0,32.5,0)},monument(n,e){Tn(n,6);for(let s=0;s<3;s++)L(He(6.2-s*1.2,6.4-s*1.2,.6,8),s%2?y.white:y.panel,0,.3+s*.6,0,n,0,Math.PI/8,0);let t=["\u706B\u661F","\u6728\u536B\u4E8C","\u5F00\u666E\u52D2"];for(let s=0;s<3;s++){let r=s*Math.PI*2/3,o=new de;o.position.set(Math.cos(r)*1,1.8,Math.sin(r)*1),o.rotation.y=-r+Math.PI/2,n.add(o),L(new Ye(1.8,26,.5),y.white,0,13,0,o,0,0,0).geometry.translate(0,0,0);let a=document.createElement("canvas");a.width=128,a.height=512;let l=a.getContext("2d");l.fillStyle="#f0ebe2",l.fillRect(0,0,128,512),l.fillStyle="#b8862e",l.font="600 54px sans-serif",l.textAlign="center",[...t[s]].forEach((h,d)=>l.fillText(h,64,120+d*70));let c=new Xt(a);c.colorSpace=Et,L(new Dn(1.4,5.6),new me({map:c,roughness:.6}),0,6,.26,o)}e.rings=[];let i=[16742954,6743807,10551104];for(let s=0;s<3;s++){let r=L(new Ne(3.6-s*.5,.12,10,64),new me({color:1118481,emissive:i[s],emissiveIntensity:2}),0,16+s*4,0,n);r.castShadow=!1,e.rings.push(r)}L(new lr(1,0),y.chrome,0,30,0,n),e.top=_e(16777215,8,n,0,30,0)}});function J1(){let n=new de,e=Er(5);L(Zt([[0,1],[2.6,1.05],[3.25,1.25],[3.35,1.45],[3.2,1.6],[0,1.6]],48),y.ablative,0,0,0,n),L(Zt([[3.05,1.6],[3,2.2],[2.75,3.4],[2.35,4.6],[1.95,5.6],[1.75,6],[0,6]],48),y.white,0,0,0,n),L(Zt([[3.02,2.05],[3.04,2.35],[2.98,2.4]],48),y.orange,0,0,0,n),L(Zt([[2,5.45],[2.02,5.6],[1.95,5.62]],48),y.orange,0,0,0,n),L(He(1.6,1.75,.35,40),y.panel,0,6.15,0,n),L(new Ne(1.25,.12,10,40),y.metal,0,6.38,0,n,Math.PI/2,0,0),L(new We(1.15,32,12,0,Math.PI*2,0,Math.PI/2),y.white,0,6.35,0,n).scale.y=.6,Lp(n,1.45,6.34,16,.04);let t=io(n,0,4.55,2.33,.36,0,-.33);io(n,-.95,4.35,2.2,.26,-.42,-.33),io(n,.95,4.35,2.2,.26,.42,-.33);let i=new de;i.position.set(2.82,2.75,0),i.rotation.set(0,Math.PI/2,.22),n.add(i),L(Me(1.25,1.75,.14,.12),y.metal,0,0,0,i),L(Me(1.05,1.55,.1,.1),y.panel,0,0,.06,i),L(Me(.1,.45,.08,.03),y.chrome,.38,-.05,.13,i),io(i,0,.45,.13,.15),Bi(i,1.25,.1,0,-.92,.08);for(let h=0;h<6;h++)L(Me(.9,.06,.28,.02),y.metal,3.3+h*.2,1.75-h*.29,0,n);Nt(re(3.2,1.9,-.48),re(4.4,.1,-.48),.035,y.metal,n),Nt(re(3.2,1.9,.48),re(4.4,.1,.48),.035,y.metal,n);for(let h=0;h<4;h++){let d=h*Math.PI/2+Math.PI/4,f=new de;f.position.set(Math.cos(d)*2.15,5,Math.sin(d)*2.15),f.rotation.y=-d,n.add(f),L(Me(.36,.36,.36,.05),y.dark,0,0,0,f);for(let[p,g]of[[.25,0],[-.25,0],[0,.25],[0,-.25]]){let v=L(new qt(.07,.16,10,1,!0),y.metal,0,g,p,f);v.rotation.x=g?g>0?0:Math.PI:p>0?Math.PI/2:-Math.PI/2}}for(let h=0;h<4;h++){let d=h*Math.PI/2,f=L(Zt([[.18,1.05],[.22,.85],[.42,.45],[.55,.2],[.5,.2],[.38,.45],[.15,.85]],24),y.dark,Math.cos(d)*1.2,0,Math.sin(d)*1.2,n);f.material=y.metal}L(He(.7,.9,.5,24),y.dark,0,.8,0,n);for(let h=0;h<4;h++){let d=h*Math.PI/2+Math.PI/4,f=Math.cos(d),p=Math.sin(d),g=re(f*2.7,2.1,p*2.7),v=re(f*3.55,1,p*3.55),x=re(f*4.1,.18,p*4.1);Nt(g,v,.11,y.white,n),L(new We(.15,12,8),y.metal,v.x,v.y,v.z,n),Nt(v,x,.075,y.chrome,n),Nt(v.clone().lerp(x,.3),v.clone().lerp(x,.3).add(re(0,.01,0)),.1,y.metal,n),Nt(re(f*2.4,1.3,p*2.4),v.clone().lerp(x,.25),.05,y.metal,n),Nt(re(f*2.6-p*.6,1.7,p*2.6+f*.6),v,.035,y.metal,n),Nt(re(f*2.6+p*.6,1.7,p*2.6-f*.6),v,.035,y.metal,n),L(Zt([[0,0],[.55,0],[.6,.06],[.35,.2],[.1,.22],[0,.22]],24),y.metal,x.x,0,x.z,n)}L(He(.04,.05,1.8,8),y.metal,.6,7.1,-.4,n),L(new We(.5,24,8,0,Math.PI*2,0,Math.PI/3.2),y.white,-.7,6.95,.3,n).rotation.set(-.8,.6,0),L(He(.04,.04,.8,6),y.metal,-.7,6.55,.3,n),Fi([re(-1.6,5.7,-1.4),re(-2.3,4.3,-1.9),re(-2.9,2.6,-2.1),re(-3.05,1.7,-2.2)],.05,y.dark,n),Fi([re(1.6,5.7,-1.4),re(2.3,4.3,-1.9),re(2.9,2.6,-2.05)],.04,y.orange,n),Fl(n,e,14,-1.2,1.2,2.4,3.6,-2.95,Math.PI);let r=document.createElement("canvas");r.width=512,r.height=96;let o=r.getContext("2d");o.clearRect(0,0,512,96),o.fillStyle="#d4581c",o.font="bold 54px sans-serif",o.textAlign="center",o.fillText("\u65B9\u821F\u4E00\u53F7 \xB7 ARK-1",256,66);let a=new Xt(r);a.colorSpace=Et;let l=new ne(new Dn(3.4,.64),new me({map:a,transparent:!0,roughness:.6}));l.position.set(0,3.2,-2.87),l.rotation.set(.32,Math.PI,0),n.add(l);let c=_e(6750105,1.4,n,.6,8.05,-.4);return{group:n,beacon:c,window:t}}var Bh=new me({color:2757906,roughness:.28,metalness:.7,flatShading:!0}),Ip=new me({color:2757906,roughness:.35,metalness:.7});function j1(n,e,t){let i=new de,s=new de;i.add(s);let r=new me({color:2230272,emissive:e.emissive,emissiveIntensity:1.6});L(new $n(.75,1),Bh,0,1,.2,s).scale.set(1.05,.62,1),L(new $n(.85,1),Bh,0,1.1,-.85,s).scale.set(.95,.7,1.25),L(new $n(.42,1),Bh,0,.95,1,s).scale.set(1.1,.7,1);let c=Er(Math.floor(Math.random()*1e6)+1);for(let d=0;d<9;d++){let f=L(new lr(.22+c()*.15,0),e,(c()-.5)*.9,1.45+c()*.25,-1.1+c()*1.4,s,(c()-.5)*.8,c()*3,(c()-.5)*.8);f.scale.y=1.8+c()*1.4}for(let[d,f,p]of[[-.17,1.03,.05],[.17,1.03,.05],[-.1,1.12,.035],[.1,1.12,.035]])L(new We(p,10,8),t,d,f,1.36,s);for(let d of[-1,1])L(new qt(.06,.45,6),Bh,d*.16,.78,1.42,s).rotation.set(Math.PI/2+.3,0,d*.35);let h=[];for(let d=0;d<6;d++){let f=d<3?-1:1,p=d%3-1,g=new de;g.position.set(f*.62,1,p*.55+.1),s.add(g);let v=re(0,0,0),x=re(f*.75,.45,p*.15),m=re(f*1.35,.1,p*.25),_=re(f*1.55,-.98,p*.35);Nt(v,x,.08,Ip,g,14),Nt(x,m,.065,Ip,g,14),Nt(m,_,.045,Ip,g,14);for(let E of[x,m])L(new We(.09,8,6),r,E.x,E.y,E.z,g);L(new qt(.05,.18,6),e,_.x,_.y-.05,_.z,g,Math.PI,0,0),g.userData.phase=d%2*Math.PI+p*.5,g.userData.side=f,h.push(g)}return i.scale.setScalar(n),{group:i,legs:h,inner:s}}function Q1(){let n=new de;L(Zt([[0,.6],[1.9,.7],[2.5,1.2],[2.6,2],[2.2,4.5],[1.6,6.6],[.9,7.8],[0,8.2]],40),y.white,0,0,0,n),L(He(2.62,2.62,.5,40,!0),y.orange,0,2.2,0,n),L(Zt([[0,.3],[2.4,.35],[2.55,.65],[0,.7]],40),y.ablative,0,0,0,n);for(let i=0;i<5;i++)io(n,Math.cos(i*1.256)*2.1,4.4,Math.sin(i*1.256)*2.1,.22,Math.PI/2-i*1.256,-.25);for(let i=0;i<3;i++){let s=i*Math.PI*2/3,r=Math.cos(s),o=Math.sin(s);Nt(re(r*2.2,2,o*2.2),re(r*3.1,.1,o*3.1),.09,y.chrome,n),L(He(.45,.5,.1,16),y.metal,r*3.1,.05,o*3.1,n);let a=L(Me(.18,2.4,1.4,.06),y.panel,r*2.55,1.9,o*2.55,n);a.rotation.y=-s}for(let i=0;i<3;i++){let s=i*Math.PI*2/3+1;L(Zt([[.3,0],[.45,-.25],[.75,-.9],[.65,-.9],[.35,-.3]],20),y.metal,Math.cos(s)*.9,.35,Math.sin(s)*.9,n)}L(He(.04,.04,1.2,6),y.metal,0,8.6,0,n),_e(16728128,.8,n,0,9.2,0);let e=new ne(new qt(1.4,6,14,1,!0),y.flame);e.rotation.x=Math.PI,e.position.y=-2.6,n.add(e);let t=_e(16752704,9,n,0,-.5,0);return{group:n,flame:e,flameGlow:t}}var ln=n=>()=>W1(n)>=1,br=(n,e)=>({check:()=>u.stats.mined[n]>=e,prog:()=>`${Math.min(u.stats.mined[n],e)}/${e}`}),ro=n=>({text:`\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C${kn[n].name}\u300D`,check:()=>u.cityLevel>=n,prog:()=>`\u4EBA\u53E3 ${u.colony.pop}/${kn[n].pop}`}),Wh=n=>({text:`\u4EBA\u53E3\u8FBE\u5230 ${n}`,check:()=>u.colony.pop>=n,prog:()=>`${u.colony.pop}/${n}`}),ex={text:"\u53D1\u5C04\u6B96\u6C11\u8230",check:()=>!!u.launched,prog:()=>"\u9760\u8FD1\u53D1\u5C04\u53F0\u6309 E"},Bw=[{title:"\u7B2C\u4E00\u7AE0 \xB7 \u7740\u9646",sub:"\u6D3B\u4E0B\u53BB",goals:[{text:"\u91C7\u96C6\u94C1\u77FF",...br("iron",10)},{text:"\u91C7\u96C6\u7845\u6676",...br("silicon",6)},{text:"\u91C7\u96C6\u6C34\u51B0",...br("ice",6)},{text:"\u5EFA\u9020\u592A\u9633\u80FD\u9635\u5217",check:ln("solar")},{text:"\u5EFA\u9020\u5236\u6C27\u7AD9",check:ln("oxygen")}],radio:[["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u7740\u9646\u6210\u529F\u3002\u5916\u90E8\u6C14\u538B 0.6 \u5343\u5E15\uFF0C\u6C14\u6E29\u96F6\u4E0B 63 \u6444\u6C0F\u5EA6\u3002\u6B22\u8FCE\u6765\u5230\u706B\u661F\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u65B9\u821F\u4E00\u53F7\uFF0C\u8FD9\u91CC\u662F\u5730\u7403\u8054\u5408\u6307\u6325\u4E2D\u5FC3\u3002\u542C\u5230\u8BF7\u56DE\u7B54\u2026\u2026\u5F88\u597D\u3002\u4F60\u662F\u7B2C\u4E00\u4E2A\u8E0F\u4E0A\u8FD9\u7247\u571F\u5730\u7684\u4EBA\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u7740\u9646\u8231\u53EA\u80FD\u5728\u5B83\u5468\u56F4\u5F88\u5C0F\u7684\u8303\u56F4\u5185\u7ED9\u4F60\u8865\u6C27\u3002\u6309\u4F4F\u5DE6\u952E\u7528\u91C7\u77FF\u6FC0\u5149\u91C7\u96C6\u94C1\u77FF\u3001\u7845\u6676\u548C\u6C34\u51B0\uFF0C\u7136\u540E\u6309 B \u5EFA\u8D77\u7B2C\u4E00\u5EA7\u5236\u6C27\u7AD9\u3002"]]},{title:"\u7B2C\u4E8C\u7AE0 \xB7 \u7B2C\u4E00\u4E2A\u5BB6",sub:"\u4E3A\u540E\u6765\u7684\u4EBA\u70B9\u4E00\u76CF\u706F",goals:[{text:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",check:ln("habitat")},{text:"\u5EFA\u9020\u6E29\u5BA4",check:ln("greenhouse")},{text:"\u5EFA\u9020\u6C34\u51B0\u63D0\u53D6\u5668",check:ln("extractor")},{text:"\u5EFA\u9020\u7740\u9646\u573A",check:ln("beacon")},{text:"\u8FCE\u63A5\u7B2C\u4E00\u6279\u79FB\u6C11",check:()=>u.stats.arrived>=1,prog:()=>u.colony.support>0?"\u7B49\u5F85\u98DE\u8239":"\u9700\u8981\u4F4F\u623F/\u6C27/\u6C34/\u98DF\u7269/\u7535"}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5236\u6C27\u7AD9\u8FD0\u8F6C\u6B63\u5E38\uFF01\u5B83\u5468\u56F4 14 \u7C73\u90FD\u80FD\u7ED9\u5B87\u822A\u670D\u8865\u6C27\uFF0C\u4F60\u53EF\u4EE5\u8D70\u5F97\u66F4\u8FDC\u4E86\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5730\u7403\u4E0A\u6709\u5341\u4E07\u4EBA\u62A5\u540D\u4E86\u79FB\u6C11\u8BA1\u5212\u3002\u5EFA\u597D\u7A79\u9876\u3001\u6E29\u5BA4\u3001\u6C34\u6E90\u548C\u7740\u9646\u573A\u2014\u2014\u7ED9\u4ED6\u4EEC\u4E00\u4E2A\u53EF\u4EE5\u56DE\u7684\u5BB6\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u63D0\u793A\uFF1A\u592A\u9633\u80FD\u5728\u591C\u95F4\u53EA\u5269\u56DB\u6210\u529F\u7387\u3002\u591A\u5EFA\u51E0\u5EA7\uFF0C\u6B96\u6C11\u5730\u624D\u4E0D\u4F1A\u5728\u591C\u91CC\u65AD\u7535\u3002"]]},{title:"\u7B2C\u4E09\u7AE0 \xB7 \u957F\u591C",sub:"\u5B88\u62A4\u6211\u4EEC\u7684\u4EBA",goals:[{text:"\u5EFA\u9020\u5236\u9020\u5DE5\u574A",check:ln("fabricator")},{text:"\u5236\u9020\u7B49\u79BB\u5B50\u6B65\u67AA",check:()=>!!u.upgrades.rifle},{text:"\u5EFA\u9020\u9632\u5FA1\u70AE\u5854",check:ln("turret")},{text:"\u51FB\u9000\u9508\u8680\u86DB",check:()=>u.stats.kills>=6,prog:()=>`${Math.min(u.stats.kills,6)}/6`}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u2026\u2026\u7B2C\u4E00\u6279\u79FB\u6C11\u5B89\u5168\u7740\u9646\u4E86\u3002\u6211\u8FD9\u8FB9\u7684\u63A7\u5236\u5BA4\u91CC\uFF0C\u6240\u6709\u4EBA\u90FD\u7AD9\u8D77\u6765\u9F13\u638C\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u5730\u8D28\u96F7\u8FBE\u5728\u591C\u95F4\u63A2\u6D4B\u5230\u5927\u91CF\u5730\u4E0B\u79FB\u52A8\u4FE1\u53F7\u3002\u5B83\u4EEC\u4F3C\u4E4E\u88AB\u6B96\u6C11\u5730\u7684\u70ED\u91CF\u5438\u5F15\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5EFA\u4E00\u5EA7\u5236\u9020\u5DE5\u574A\uFF0C\u9020\u6B66\u5668\uFF0C\u5EFA\u70AE\u5854\u3002\u5B88\u4F4F\u5927\u5BB6\u3002"]]},{title:"\u7B2C\u56DB\u7AE0 \xB7 \u624E\u6839",sub:"\u8BA9\u706F\u706B\u5F7B\u591C\u4E0D\u7184",goals:[{text:"\u6B96\u6C11\u5730\u4EBA\u53E3\u8FBE\u5230 12",check:()=>u.colony.pop>=12,prog:()=>`${u.colony.pop}/12`},{text:"\u91C7\u96C6\u949B\u77FF",...br("titanium",12)},{text:"\u5EFA\u9020\u805A\u53D8\u53CD\u5E94\u5806",check:ln("reactor")}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u4F60\u4EEC\u6491\u8FC7\u4E86\u957F\u591C\u3002\u73B0\u5728\uFF0C\u662F\u65F6\u5019\u8BA9\u6B96\u6C11\u5730\u771F\u6B63\u624E\u6839\u4E86\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5728\u8FDC\u65B9\u7684\u7D2B\u8272\u6676\u4F53\u77FF\u8109\u4E2D\u68C0\u6D4B\u5230\u9AD8\u7EAF\u5EA6\u949B\u3002\u6CE8\u610F\uFF1A\u90A3\u91CC\u6709\u4F53\u578B\u66F4\u5927\u7684\u9508\u8680\u86DB\u5B88\u536B\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u63D0\u793A\uFF1A\u5728\u5236\u9020\u5DE5\u574A\u53EF\u4EE5\u9020\u55B7\u6C14\u80CC\u5305\u548C\u5927\u5BB9\u91CF\u6C27\u6C14\u7F50\uFF0C\u9002\u5408\u957F\u9014\u52D8\u63A2\u3002"]]},{title:"\u7B2C\u4E94\u7AE0 \xB7 \u65B0\u5BB6\u56ED",sub:"\u6B64\u5FC3\u5B89\u5904\u662F\u543E\u4E61",goals:[{text:"\u5EFA\u9020\u5927\u6C14\u6539\u9020\u5854",check:ln("terraformer")},{text:"\u6B96\u6C11\u5730\u4EBA\u53E3\u8FBE\u5230 20",check:()=>u.colony.pop>=20,prog:()=>`${u.colony.pop}/20`},{text:"\u5B8C\u6210\u5927\u6C14\u6539\u9020",check:()=>u.terraform>=1&&u.ended&&!u.endingShown,prog:()=>`${Math.floor(u.terraform*100)}%`}],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u805A\u53D8\u53CD\u5E94\u5806\u70B9\u706B\u6210\u529F\u3002\u6B96\u6C11\u5730\u7B2C\u4E00\u6B21\u5728\u591C\u91CC\u4E5F\u706F\u706B\u901A\u660E\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u6700\u540E\u4E00\u6B65\u4E86\u3002\u5927\u6C14\u6539\u9020\u5854\u2014\u2014\u5B83\u8981\u51E0\u5341\u5E74\u624D\u80FD\u5F7B\u5E95\u6539\u53D8\u706B\u661F\u3002\u4F46\u7B2C\u4E00\u573A\u96E8\uFF0C\u4E5F\u8BB8\u5C31\u5728\u660E\u5929\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u63D0\u793A\uFF1A\u57CE\u5E02\u7B49\u7EA7\u63D0\u5347\u540E\u9886\u5730\u4F1A\u6269\u5927\uFF0C\u5E76\u89E3\u9501\u516C\u5BD3\u5854\u3001\u5782\u76F4\u519C\u573A\u3001\u751F\u6001\u4E2D\u67A2\u3002"]]},{title:"\u7B2C\u516D\u7AE0 \xB7 \u661F\u8FB0\u5927\u6D77",sub:"\u4E0B\u4E00\u9897\u661F\u7403",goals:[ro(5),{text:"\u5EFA\u9020\u661F\u9645\u53D1\u5C04\u53F0",check:ln("launch")},ex],radio:[["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u706B\u661F\u5DF2\u7ECF\u662F\u5BB6\u4E86\u3002\u4F46\u4EBA\u7C7B\u7684\u6545\u4E8B\uFF0C\u4ECE\u6765\u4E0D\u6B62\u4E8E\u4E00\u4E2A\u5BB6\u3002"],["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u6728\u536B\u4E8C\xB7\u6B27\u7F57\u5DF4\uFF1A\u51B0\u58F3\u4E4B\u4E0B\u63A2\u6D4B\u5230\u6DB2\u6001\u6D77\u6D0B\u3002\u628A\u706B\u661F\u53D1\u5C55\u6210\u300C\u661F\u6E2F\u300D\uFF0C\u5C31\u80FD\u5EFA\u9020\u661F\u9645\u53D1\u5C04\u53F0\u3002"]]}],Gw=[{title:"\u7B2C\u4E00\u7AE0 \xB7 \u51B0\u539F",sub:"\u5728\u6728\u661F\u7684\u6CE8\u89C6\u4E0B",goals:[{text:"\u91C7\u96C6\u6C34\u51B0",...br("ice",15)},{text:"\u91C7\u96C6\u94C1\u77FF",...br("iron",10)},{text:"\u5EFA\u9020\u5236\u6C27\u7AD9",check:ln("oxygen")},{text:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",check:ln("habitat")},{text:"\u5EFA\u9020\u7740\u9646\u573A",check:ln("beacon")}],radio:[["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u7740\u9646\u6210\u529F\u3002\u8868\u9762\u6E29\u5EA6\u96F6\u4E0B 160 \u6444\u6C0F\u5EA6\u3002\u91CD\u529B\u53EA\u6709\u5730\u7403\u7684\u4E03\u5206\u4E4B\u4E00\u3002"],["\u706B\u661F\u6B96\u6C11\u5730 \xB7 \u6797\u6653","\u4F60\u5230\u4E86\u5417\uFF1F\u6211\u4EEC\u5728\u706B\u661F\u4E0A\u770B\u5F97\u89C1\u6728\u661F\u7684\u5149\u70B9\u3002\u66FF\u6211\u4EEC\u770B\u4E00\u773C\u5B83\u7684\u5927\u7EA2\u6591\u5427\u3002"],["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u6CE8\u610F\uFF1A\u8FD9\u91CC\u79BB\u592A\u9633\u592A\u8FDC\uFF0C\u592A\u9633\u80FD\u6548\u7387\u53EA\u6709\u706B\u661F\u7684\u4E00\u534A\u3002\u6240\u6709\u6280\u672F\u5DF2\u4ECE\u706B\u661F\u540C\u6B65\u3002"]]},{title:"\u7B2C\u4E8C\u7AE0 \xB7 \u51B0\u4E0B\u4E4B\u57CE",sub:"\u6D77\u6D0B\u4E4B\u4E0A\u7684\u706F\u706B",goals:[Wh(8),ro(2),{text:"\u5EFA\u9020\u805A\u53D8\u53CD\u5E94\u5806",check:ln("reactor")}],radio:[["\u5468\u9752\u79BE \xB7 \u6C34\u6587\u5B66\u5BB6","\u51B0\u5C42\u4E0B\u7684\u6D77\u6D0B\u6BD4\u5730\u7403\u6240\u6709\u6D77\u6D0B\u52A0\u8D77\u6765\u8FD8\u591A\u3002\u6709\u6C34\uFF0C\u5C31\u6709\u751F\u547D\u3002"],["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u51B0\u88C2\u7F1D\u91CC\u6709\u4E1C\u897F\u5728\u79FB\u52A8\u3002\u5B83\u4EEC\u548C\u706B\u661F\u7684\u9508\u8680\u86DB\u5F88\u50CF\u2026\u2026\u4F46\u662F\u84DD\u8272\u7684\u3002"]]},{title:"\u7B2C\u4E09\u7AE0 \xB7 \u6DF1\u6E0A\u4E4B\u5149",sub:"\u57CE\u5E02\u5728\u51B0\u539F\u4E0A\u751F\u957F",goals:[ro(3),Wh(24),{text:"\u5EFA\u9020\u751F\u6001\u4E2D\u67A2",check:ln("lifehub")}],radio:[["Elena Petrova \xB7 \u5929\u6587\u5B66\u5BB6","\u4F60\u77E5\u9053\u5417\uFF1F\u4ECE\u8FD9\u91CC\u770B\uFF0C\u592A\u9633\u53EA\u662F\u4E00\u9897\u7279\u522B\u4EAE\u7684\u661F\u661F\u3002"]]},{title:"\u7B2C\u56DB\u7AE0 \xB7 \u4E0B\u4E00\u7AD9",sub:"\u4E00\u5343\u4E8C\u767E\u5149\u5E74",goals:[ro(4),{text:"\u5EFA\u9020\u661F\u9645\u53D1\u5C04\u53F0",check:ln("launch")},ex],radio:[["\u65B9\u821F\u4E8C\u53F7 \xB7 AI","\u5F00\u666E\u52D2-442b\uFF1A\u4F4D\u4E8E\u5B9C\u5C45\u5E26\u7684\u7C7B\u5730\u884C\u661F\uFF0C\u8DDD\u79BB\u4E00\u5343\u4E8C\u767E\u5149\u5E74\u3002"],["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u8FD9\u5C06\u662F\u4EBA\u7C7B\u7B2C\u4E00\u6B21\u79BB\u5F00\u592A\u9633\u7CFB\u3002\u6211\u8001\u4E86\uFF0C\u7B49\u4E0D\u5230\u4F60\u4EEC\u62B5\u8FBE\u7684\u90A3\u5929\u3002\u4F46\u6211\u4F1A\u4E00\u76F4\u770B\u7740\u661F\u7A7A\u3002"]]}],Vw=[{title:"\u7B2C\u4E00\u7AE0 \xB7 \u53CC\u65E5\u4E4B\u4E0B",sub:"\u53E6\u4E00\u9897\u6052\u661F\u7684\u6668\u5149",goals:[{text:"\u91C7\u96C6\u94C1\u77FF",...br("iron",15)},{text:"\u91C7\u96C6\u7845\u6676",...br("silicon",10)},{text:"\u5EFA\u9020\u5236\u6C27\u7AD9",check:ln("oxygen")},{text:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",check:ln("habitat")},{text:"\u5EFA\u9020\u7740\u9646\u573A",check:ln("beacon")}],radio:[["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u51B7\u51BB\u4F11\u7720\u7ED3\u675F\u3002\u5F53\u524D\u65E5\u671F\uFF1A\u516C\u5143 2401 \u5E74\u3002\u6B22\u8FCE\u6765\u5230\u5F00\u666E\u52D2-442b\u3002"],["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u5927\u6C14\u542B\u6C27 14%\uFF0C\u8FD8\u4E0D\u591F\u547C\u5438\uFF0C\u4F46\u5DF2\u7ECF\u975E\u5E38\u63A5\u8FD1\u4E86\u3002\u8FD9\u91CC\u7684\u91CD\u529B\u6BD4\u5730\u7403\u7565\u5927\u3002"]]},{title:"\u7B2C\u4E8C\u7AE0 \xB7 \u5F02\u661F\u68EE\u6797",sub:"\u4F1A\u53D1\u5149\u7684\u6811",goals:[Wh(10),ro(2),{text:"\u5EFA\u9020\u805A\u53D8\u53CD\u5E94\u5806",check:ln("reactor")}],radio:[["Aiko Sato \u7684\u540E\u4EE3 \xB7 \u751F\u7269\u5B66\u5BB6","\u90A3\u4E9B\u4F1E\u83C7\u6811\u5728\u591C\u91CC\u4F1A\u53D1\u5149\u3002\u6211\u7684\u66FE\u66FE\u7956\u6BCD\u4E00\u5B9A\u4F1A\u559C\u6B22\u8FD9\u91CC\u3002"],["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u68EE\u6797\u4E2D\u7684\u63A0\u98DF\u8005\u4F1A\u5728\u591C\u95F4\u51FA\u6CA1\u3002"]]},{title:"\u7B2C\u4E09\u7AE0 \xB7 \u6587\u660E",sub:"\u57CE\u5E02\u8FDE\u6210\u4E86\u661F\u6CB3",goals:[ro(4),Wh(36),{text:"\u5EFA\u9020\u751F\u6001\u4E2D\u67A2",check:ln("lifehub")}],radio:[["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u6765\u81EA\u706B\u661F\u548C\u6B27\u7F57\u5DF4\u7684\u4FE1\u53F7\u5DF2\u7ECF\u62B5\u8FBE\u2014\u2014\u5B83\u4EEC\u5728\u4E00\u5343\u4E8C\u767E\u5E74\u524D\u53D1\u51FA\u3002\u4E24\u5EA7\u57CE\u5E02\u90FD\u8FD8\u4EAE\u7740\u3002"]]},{title:"\u7EC8\u7AE0 \xB7 \u661F\u9645\u6587\u660E",sub:"\u4E09\u9897\u661F\u7403\uFF0C\u4E00\u4E2A\u4EBA\u7C7B",goals:[ro(5),{text:"\u5EFA\u9020\u6587\u660E\u7EAA\u5FF5\u7891",check:ln("monument")}],radio:[["\u65B9\u821F\u4E09\u53F7 \xB7 AI","\u5EFA\u4E00\u5EA7\u7EAA\u5FF5\u7891\u5427\u3002\u732E\u7ED9\u7B2C\u4E00\u4E2A\u8E0F\u4E0A\u706B\u661F\u7684\u4EBA\u2014\u2014\u4E5F\u5C31\u662F\u4F60\u3002"]]}],Ti=it==="europa"?Gw:it==="kepler"?Vw:Bw,tx=it==="mars"?2:1,Ma={rifle:{name:"\u7B49\u79BB\u5B50\u6B65\u67AA",icon:"rifle",cost:{iron:18,silicon:12},desc:"\u6309 2 \u5207\u6362\u3002\u6D88\u8017\u80FD\u91CF\u53D1\u5C04\u7B49\u79BB\u5B50\u5F39\u3002"},tank:{name:"\u5927\u5BB9\u91CF\u6C27\u6C14\u7F50",icon:"tank",cost:{iron:12,ice:10},desc:"\u5B87\u822A\u670D\u6C27\u6C14\u4E0A\u9650 100 \u2192 180\u3002"},rover:{name:"\u52A0\u538B\u6F2B\u6E38\u8F66",icon:"rover",cost:{iron:35,silicon:20,ice:5},desc:"\u5728\u5DE5\u574A\u65C1\u51FA\u5382\u3002\u6309 E \u4E0A\u8F66\uFF0CShift \u52A0\u901F\u3002\u8F66\u8231\u5185\u81EA\u52A8\u8865\u6C27\uFF0C\u8FD8\u80FD\u649E\u98DE\u9508\u8680\u86DB\u3002"},scanner:{name:"\u5730\u8D28\u626B\u63CF\u4EEA",icon:"scanner",cost:{iron:8,silicon:10},desc:"\u5C0F\u5730\u56FE\u8303\u56F4\u6269\u5927\uFF0C\u7F57\u76D8\u6807\u51FA\u6700\u8FD1\u7684\u949B\u77FF\u3002"},jetpack:{name:"\u55B7\u6C14\u80CC\u5305",icon:"jet",cost:{iron:20,silicon:15,titanium:4},desc:"\u7A7A\u4E2D\u6309\u4F4F\u7A7A\u683C\u98DE\u884C\uFF0C\u6D88\u8017\u80FD\u91CF\u3002"},overclock:{name:"\u6FC0\u5149\u8D85\u9891",icon:"bolt2",cost:{silicon:20,titanium:3},desc:"\u91C7\u77FF\u901F\u5EA6 \xD72\uFF0C\u6FC0\u5149\u4F24\u5BB3\u63D0\u5347\u3002"},armor:{name:"\u590D\u5408\u88C5\u7532",icon:"armor",cost:{iron:30,titanium:6},desc:"\u751F\u547D\u4E0A\u9650 150\uFF0C\u53D7\u5230\u4F24\u5BB3 -40%\u3002"},rifle2:{name:"\u805A\u7126\u7EBF\u5708",icon:"focus",cost:{silicon:18,titanium:6},need:"rifle",desc:"\u7B49\u79BB\u5B50\u6B65\u67AA\u4F24\u5BB3 +60%\u3002"}},Np=[],ya=null,Dp=0;function Pt(n,e){Np.push([n,e])}function nx(){return ya}var Up=0,so=200,Ns="calm",Vh=0,Hp=!1;function ix(n){if(ya&&(Dp-=n,Dp<=0&&(ya=null)),!ya&&Np.length&&(ya=Np.shift(),Dp=3.5+ya[1].length*.11,Y.play("radio")),Up-=n,Up<=0&&u.chapter<Ti.length&&!ti()){Up=.5;let i=Ti[u.chapter];u.goalDone=u.goalDone||{};let s=!0;i.goals.forEach((r,o)=>{let a=u.chapter+":"+o;r.check()&&!u.goalDone[a]&&(u.goalDone[a]=!0,Y.play("objective"),u.events.emit("toast",`\u2713 ${r.text}`)),u.goalDone[a]||(s=!1)}),s&&u.chapter<Ti.length-1&&Bl(u.chapter+1)}u.buildings.find(i=>i.type==="terraformer"&&i.powered)&&u.terraform<1&&(u.terraform=Math.min(1,u.terraform+n/300*(Gt("atmo")?2:1)),u.terraform>=1&&!Hp&&(Hp=!0,u.events.emit("ending"))),u.raining=(u.terraform>=1||it==="kepler")&&Math.sin(u.time.t*Math.PI*4+u.time.day*1.7)>.45,xe.storms&&u.time.day>=2&&u.terraform<.7&&(so-=n,Ns==="calm"&&so<=0&&u.time.night<.5?(Ns="warn",so=25,Pt("\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u8B66\u544A\uFF1A\u6C99\u5C18\u66B4\u5C06\u5728 25 \u79D2\u540E\u62B5\u8FBE\u3002\u80FD\u89C1\u5EA6\u4F1A\u6025\u5267\u4E0B\u964D\uFF0C\u6C27\u6C14\u6D88\u8017\u52A0\u5FEB\u3002\u9760\u8FD1\u751F\u547D\u7EF4\u6301\u8BBE\u65BD\u3002")):Ns==="warn"&&so<=0?(Ns="storm",Vh=70+Math.random()*40):Ns==="storm"&&(Vh-=n,Vh<=0&&(Ns="calm",so=360+Math.random()*300,Pt("\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u6C99\u5C18\u66B4\u5DF2\u8FC7\u5883\u3002"))));let t=Ns==="storm"?1:0;u.storm+=(t-u.storm)*Math.min(1,n*.25),u.storm<.001&&(u.storm=0)}function Bl(n,e=!1){u.chapter=n;let t=Ti[n];e||(Y.play("chapter"),u.events.emit("chapter",t),t.radio.forEach(i=>Pt(i[0],i[1])))}function sx(){return{phase:Ns,t:so,left:Vh}}function rx(n){n&&(Ns=n.phase==="storm"?"calm":n.phase,so=n.t??200)}function ox(n){Hp=n}var Xh=[],cx=new Le(.05,.11,2.6,8,1);cx.translate(0,-1.3,0);var Ww=new Ue({color:12121343,transparent:!0,opacity:.95,blending:ze,depthWrite:!1}),$w=new Ue({color:16760944,transparent:!0,opacity:.95,blending:ze,depthWrite:!1}),Xw={player:6743807,turret:16756800};function qh(n,e,t,i){let s=_e(Xw[i],i==="player"?1.4:1.1,u.scene);s.position.copy(n);let r=new ne(cx,i==="player"?Ww:$w);r.quaternion.setFromUnitVectors(new w(0,1,0),e),r.position.copy(n),r.frustumCulled=!1,u.scene.add(r),Xh.push({pos:n.clone(),vel:e.clone().multiplyScalar(i==="player"?110:80),life:1.4,dmg:t,owner:i,s,bolt:r})}function qw(n,e=0){for(let t of u.enemies){if(t.dead)continue;let i=1.3*t.scale+e,s=n.x-t.pos.x,r=n.y-(t.pos.y+1*t.scale),o=n.z-t.pos.z;if(s*s+r*r+o*o<i*i)return t}return null}function hx(n){for(let e=Xh.length-1;e>=0;e--){let t=Xh[e];t.life-=n;let i=t.life<=0,s=3;for(let r=0;r<s&&!i;r++){t.pos.addScaledVector(t.vel,n/s);let o=qw(t.pos),a=t.owner==="player"?9365503:16756832;o?(Gl(o,t.dmg,t.owner),fe.spark(t.pos,t.owner==="player"?[.5,.9,1]:[1,.7,.4],14,8),pp(t.pos,a,1.2),i=!0):t.pos.y<Ee(t.pos.x,t.pos.z)&&(fe.spark(t.pos,[1,.7,.4],8,5),fe.dustPuff(t.pos,5,.8),pp(t.pos,a,.8),i=!0)}t.s.position.copy(t.pos),t.bolt.position.copy(t.pos),Math.random()<.8&&fe.trail(t.pos,t.owner==="player"?[.3,.8,1]:[1,.6,.2],.6),i&&(u.scene.remove(t.s),u.scene.remove(t.bolt),Xh.splice(e,1))}}function kp(n,e,t=!1,i=!1){let s=i?3.4:t?1.35:.85+Math.random()*.35,r=j1(s,ep.crystal,ep.eye),o=Ee(n,e);r.group.position.set(n,o,e),u.scene.add(r.group);let a=i?1300+u.time.day*40:t?90:36+u.time.day*3,l={...r,pos:r.group.position,hp:a,maxHp:a,scale:s,guardian:t,home:t?new w(n,o,e):null,boss:i,stomp:4,awake:!t,speed:i?3.4:(t?5.2:4.4)+Math.random()*1.2,phase:Math.random()*6,atk:0,flash:0,sink:0,target:null,retarget:0};return u.enemies.push(l),l}function Gl(n,e,t){n.dead||(n.hp-=e,n.flash=.12,n.awake=!0,t==="player"&&Y.play("hit"),n.hp<=0&&Yw(n,t))}function Yw(n,e){n.dead=!0;let t=n.pos.clone();if(t.y+=1,fe.burst(t,[1,.4,.1],40,9),fe.dustPuff(t,12,2),_r(t,n.boss?3.5:n.guardian?1.4:.9,16738858),fe.debris(t,n.legs[0].children[0].material,6,5,.45*n.scale),fe.debris(t,n.inner.children[1].material,8,6,.5*n.scale),Y.play("kill"),u.scene.remove(n.group),u.stats.kills++,n.guardian&&(u.stats.guardKills=(u.stats.guardKills||0)+1),n.boss){u.stats.bossKills=(u.stats.bossKills||0)+1,u.res.titanium+=40,u.res.silicon+=40,u.events.emit("pickup",{type:"titanium",n:40,note:"\u6676\u6BCD\u6838\u5FC3"}),u.events.emit("bossDown"),fe.burst(t,[1,.5,.15],200,20),fe.ring(new w(n.pos.x,n.pos.y,n.pos.z),4,120,[1,.5,.2]),fe.debris(t,n.inner.children[1].material,30,12,1.4),Y.play("rumble");return}let i=n.guardian?3:Math.random()<.5?1:0;i&&(u.res.titanium+=i,u.stats.mined.titanium+=i,u.events.emit("pickup",{type:"titanium",n:i,note:"\u6676\u4F53\u6B8B\u9AB8"}))}var zp=0,oo=0,ax=!1,Op=5,$h=-1;function ux(){return u.enemies.find(n=>n.boss&&!n.dead)}function lx(){if(!u.buildings.length)return new w(0,0,0);let n=new w;for(let e of u.buildings)n.x+=e.x,n.z+=e.z;return n.multiplyScalar(1/u.buildings.length)}function dx(n){let e=u.player.pos,t=u.time.night>.6,i=(ti()?u.buildings.some(r=>r.type==="habitat")||u.time.day>=3:u.chapter>=tx)&&u.terraform<1&&rs().foe>0;if(t&&!ax&&i){oo=Math.round(Math.min(3+(u.nightsSurvived||0)*2+Math.floor(u.colony.pop/4),26)*rs().foe);let r=(u.nightsSurvived||0)%4===3;r&&(oo=Math.min(Math.round(oo*1.8),40),$h=25),u.nightsSurvived=(u.nightsSurvived||0)+1,u.events.emit(r?"tide":"nightfall",oo)}if(ax=t,$h>0&&t&&($h-=n,$h<=0)){let r=lx(),o=Math.random()*Math.PI*2,a=Bt.clamp(r.x+Math.cos(o)*130,-Qe+180,Qe-180),l=Bt.clamp(r.z+Math.sin(o)*130,-Qe+180,Qe-180),c=kp(a,l,!1,!0);c.sink=-6,fe.ring(new w(a,Ee(a,l),l),6,140),fe.dustPuff(new w(a,Ee(a,l),l),60,12),Y.play("rumble"),u.events.emit("bossSpawn")}if(t&&i&&oo>0&&(zp-=n,zp<=0)){zp=3+Math.random()*5;let r=lx(),o=Math.min(oo,1+Math.floor(Math.random()*3)),a=Math.random()*Math.PI*2,l=110+Math.random()*50;for(let c=0;c<o;c++){let h=Bt.clamp(r.x+Math.cos(a)*l+(Math.random()-.5)*10,-Qe+180,Qe-180),d=Bt.clamp(r.z+Math.sin(a)*l+(Math.random()-.5)*10,-Qe+180,Qe-180),f=kp(h,d);f.sink=-2,fe.dustPuff(new w(h,Ee(h,d),d),14,3)}oo-=o}if(Op-=n,Op<=0){Op=30;for(let r of u.nodes){if(r.type!=="titanium"||Math.hypot(r.x-e.x,r.z-e.z)<90)continue;if(!u.enemies.some(a=>a.guardian&&!a.dead&&a.home.distanceTo(r.mesh.position)<25)&&u.terraform<1&&rs().foe>0){let a=Math.random()*6.28;kp(r.x+Math.cos(a)*6,r.z+Math.sin(a)*6,!0)}}}let s=performance.now()*.001;for(let r=u.enemies.length-1;r>=0;r--){let o=u.enemies[r];if(o.dead){u.enemies.splice(r,1);continue}if(!o.guardian&&(u.time.night<.3||u.terraform>=1)){o.sink-=n*1.5,o.group.position.y=Ee(o.pos.x,o.pos.z)+o.sink,o.sink<-3&&(u.scene.remove(o.group),u.enemies.splice(r,1));continue}o.sink<0&&(o.sink=Math.min(0,o.sink+n*1.5));let a=Math.hypot(e.x-o.pos.x,e.z-o.pos.z);if(o.retarget-=n,o.retarget<=0)if(o.retarget=1,o.target=null,o.guardian)a<22&&(o.awake=!0),o.awake&&a<70&&!u.player.dead?o.target={kind:"player"}:(o.awake=!1,o.target={kind:"home"});else if(a<32&&!u.player.dead)o.target={kind:"player"};else{let m=null,_=400;for(let E of u.buildings){if(E.type==="lamp"||E.broken)continue;let M=Math.hypot(E.x-o.pos.x,E.z-o.pos.z)-E.def.r;M<_&&(_=M,m=E)}o.target=m?{kind:"building",b:m}:{kind:"player"}}let l=e.x,c=e.z,h=1.8*o.scale,d=o.target;if(d?.kind==="building"){if(!u.buildings.includes(d.b)||d.b.broken){o.retarget=0;continue}l=d.b.x,c=d.b.z,h=d.b.def.r*.9+1.4}else d?.kind==="home"&&(l=o.home.x,c=o.home.z,h=2);let f=l-o.pos.x,p=c-o.pos.z,g=Math.hypot(f,p),v=!1;if(g>h){f/=g,p/=g;for(let E of u.enemies){if(E===o)continue;let M=o.pos.x-E.pos.x,D=o.pos.z-E.pos.z,A=Math.hypot(M,D);A<2.5&&A>.01&&(f+=M/A*.6,p+=D/A*.6)}let m=Math.hypot(f,p)||1,_=o.speed*(o.target?.kind==="home"?.5:1);o.pos.x+=f/m*_*n,o.pos.z+=p/m*_*n;for(let E of u.colliders.query(o.pos.x,o.pos.z)){if(E.kind!=="building")continue;let M=o.pos.x-E.x,D=o.pos.z-E.z,A=Math.hypot(M,D),C=E.r+.8;A<C&&A>.01&&(o.pos.x=E.x+M/A*C,o.pos.z=E.z+D/A*C)}o.group.rotation.y=Math.atan2(f,p),v=!0}else d&&d.kind!=="home"&&(o.group.rotation.y=Math.atan2(f,p),o.atk-=n,o.atk<=0&&(o.atk=1,d.kind==="player"?u.player.damage((o.boss?30:o.guardian?14:9)*rs().dmg,o.pos):(d.b.hp-=o.boss?70:o.guardian?20:8,fe.spark(new w(o.pos.x,o.pos.y+1,o.pos.z),[1,.5,.2],8,5),d.b.hp<=0&&(d.b.hp=0,d.b.broken=!0,o.retarget=0,u.events.emit("broken",d.b),as())),o.inner.position.z=.6));if(o.boss){o.stomp-=n;let m=Math.hypot(e.x-o.pos.x,e.z-o.pos.z);o.stomp<=0&&m<22&&(o.stomp=4.5,fe.ring(new w(o.pos.x,o.pos.y,o.pos.z),3,100,[.9,.45,.25]),Y.play("rumble"),u.player.landDip=Math.max(u.player.landDip,.35),m<13&&!u.driving&&(u.player.damage(18,o.pos),u.player.vel.y=4,u.player.vel.x+=(e.x-o.pos.x)/m*8,u.player.vel.z+=(e.z-o.pos.z)/m*8))}o.inner.position.z*=.85,o.pos.y=Ee(o.pos.x,o.pos.z)+o.sink;let x=s*(v?12:2)+o.phase;for(let m of o.legs)m.rotation.x=Math.sin(x+m.userData.phase)*(v?.5:.08),m.rotation.z=Math.max(0,Math.cos(x+m.userData.phase))*.25*m.userData.side*(v?1:0);o.inner.position.y=Math.abs(Math.sin(x))*.08,o.flash>0?(o.flash-=n,o.inner.scale.setScalar(1+o.flash*1.2)):o.inner.scale.setScalar(1),Math.random()<n*4&&fe.trail(new w(o.pos.x,o.pos.y+1.6*o.scale,o.pos.z),[1,.35,.1],.8)}}function ao(n,e,t){let i=null,s=t,r=new w;for(let o of u.enemies){if(o.dead)continue;let a=1.3*o.scale;r.set(o.pos.x-n.x,o.pos.y+1*o.scale-n.y,o.pos.z-n.z);let l=r.dot(e);if(l<0)continue;let c=r.lengthSq()-l*l;if(c>a*a)continue;let h=l-Math.sqrt(a*a-c);h<s&&(s=h,i=o)}return i?{e:i,dist:s}:null}var ve={keys:new Set,mouse:[!1,!1,!1],dx:0,dy:0,wheel:0,pressed:new Set,clicked:[!1,!1,!1],sens:.0022,down(n){return this.keys.has(n)},hit(n){return this.pressed.has(n)},endFrame(){this.pressed.clear(),this.dx=0,this.dy=0,this.wheel=0,this.clicked=[!1,!1,!1]}};function fx(n){window.addEventListener("keydown",e=>{e.code==="Tab"&&e.preventDefault(),ve.keys.has(e.code)||ve.pressed.add(e.code),ve.keys.add(e.code)}),window.addEventListener("keyup",e=>ve.keys.delete(e.code)),window.addEventListener("blur",()=>{ve.keys.clear(),ve.mouse=[!1,!1,!1]}),window.addEventListener("mousemove",e=>{u.locked&&(ve.dx+=e.movementX||0,ve.dy+=e.movementY||0)}),n.addEventListener("mousedown",e=>{u.locked&&(ve.mouse[e.button]=!0,ve.clicked[e.button]=!0)}),window.addEventListener("mouseup",e=>{ve.mouse[e.button]=!1}),window.addEventListener("wheel",e=>{u.locked&&(ve.wheel+=Math.sign(e.deltaY))},{passive:!0}),window.addEventListener("contextmenu",e=>e.preventDefault())}var Zw=xe.gravity,px=1.7,Mt=new w(-6,0,-6),Yh=class{constructor(e){this.cam=e,this.pos=new w(0,0,6),this.pos.y=Ee(this.pos.x,this.pos.z),this.vel=new w,this.yaw=Math.PI*.85,this.pitch=-.05,this.onGround=!0,this.maxHealth=100,this.health=100,this.maxO2=100,this.o2=100,this.energy=100,this.bob=0,this.stepT=0,this.landDip=0,this.dead=!1,this.hurtT=0,this.flashlight=!1,this.inLife=!1,this.alarmT=0,this.lastHitDir=0,this.moving=!1,this.sprinting=!1,this.jetting=!1,this.roll=0,this.fwd=new w}get eye(){return new w(this.pos.x,this.pos.y+px+this.bobY,this.pos.z)}damage(e,t){if(this.dead)return;let i=u.upgrades.armor?.6:1;this.health-=e*i,this.hurtT=.5,t&&(this.lastHitDir=Math.atan2(t.x-this.pos.x,t.z-this.pos.z)),Y.play("hurt"),u.events.emit("hurt",e),this.health<=0&&this.die("\u4F60\u5012\u5728\u4E86\u706B\u661F\u7684\u5C18\u571F\u91CC")}die(e){this.dead||(this.dead=!0,this.health=0,u.events.emit("death",e))}respawn(){let e=u.buildings.find(i=>i.type==="habitat")||null,t=e?new w(e.x,0,e.z+9):Mt.clone().add(new w(5,0,8));for(let i in u.res)u.res[i]=Math.floor(u.res[i]*.75);this.pos.set(t.x,Ee(t.x,t.z),t.z),this.vel.set(0,0,0),this.health=this.maxHealth,this.o2=this.maxO2,this.energy=100,this.dead=!1}update(e){if(this.maxO2=u.upgrades.tank?180:100,this.maxHealth=u.upgrades.armor?150:100,this.dead){this.cam.position.y-=e*.3;return}u.locked&&(this.yaw-=ve.dx*ve.sens,this.pitch=Bt.clamp(this.pitch-ve.dy*ve.sens,-1.5,1.5));let t=0,i=0;u.menuOpen||((ve.down("KeyW")||ve.down("ArrowUp"))&&(i-=1),(ve.down("KeyS")||ve.down("ArrowDown"))&&(i+=1),(ve.down("KeyA")||ve.down("ArrowLeft"))&&(t-=1),(ve.down("KeyD")||ve.down("ArrowRight"))&&(t+=1));let s=Math.hypot(t,i);this.moving=s>0,this.sprinting=this.moving&&ve.down("ShiftLeft")&&i<0&&this.o2>5;let r=this.sprinting?10.5:6.2,o=Math.sin(this.yaw),a=Math.cos(this.yaw),l=0,c=0;if(s){let M=t/s,D=i/s;l=M*a+D*o,c=-M*o+D*a}let h=this.onGround?12:2.5;if(this.vel.x+=(l*r-this.vel.x)*Math.min(1,h*e),this.vel.z+=(c*r-this.vel.z)*Math.min(1,h*e),this.jetting=!1,!u.menuOpen&&ve.hit("Space")&&this.onGround)this.vel.y=5.4,this.onGround=!1,Y.play("jump");else if(!u.menuOpen&&ve.down("Space")&&!this.onGround&&u.upgrades.jetpack&&this.energy>1&&this.vel.y<6){this.vel.y+=15*e,this.energy-=22*e,this.jetting=!0,Math.random()<.5&&Y.play("jet");let M=new w(this.pos.x+o*.4,this.pos.y+.8,this.pos.z+a*.4);fe.flame(M),fe.flame(M)}this.vel.y-=Zw*e;let d=this.pos.x+this.vel.x*e,f=this.pos.z+this.vel.z*e;this.pos.x=Bt.clamp(d,-Qe+120,Qe-120),this.pos.z=Bt.clamp(f,-Qe+120,Qe-120),this.pos.y+=this.vel.y*e;for(let M of u.colliders.query(this.pos.x,this.pos.z)){let D=this.pos.x-M.x,A=this.pos.z-M.z,C=Math.hypot(D,A),P=M.r+.45;if(C<P&&C>1e-4){if(M.kind==="rock"&&this.pos.y>Ee(M.x,M.z)+M.r*.6)continue;this.pos.x=M.x+D/C*P,this.pos.z=M.z+A/C*P}}let p=Ee(this.pos.x,this.pos.z);this.pos.y<=p?(!this.onGround&&this.vel.y<-4&&(this.landDip=Math.min(.35,-this.vel.y*.04),Y.play("land"),fe.dustPuff(this.pos,6,1)),this.pos.y=p,this.vel.y=0,this.onGround=!0):this.onGround&&this.pos.y-p<.5&&this.vel.y<=0?(this.pos.y=p,this.vel.y=0):this.onGround=!1;let g=Math.hypot(this.vel.x,this.vel.z);this.onGround&&g>.5&&(this.bob+=e*g*1.25,this.stepT+=e*g,this.stepT>2.6&&(this.stepT=0,Y.play("step"),Math.random()<.4&&fe.dustPuff(this.pos,2,.4))),this.landDip*=Math.pow(.002,e),this.bobY=Math.sin(this.bob*2)*.05*Math.min(1,g/6)-this.landDip;let v=u.shake||0,x=performance.now()*.05;this.cam.position.set(this.pos.x+Math.sin(x*1.7)*v*.25,this.pos.y+px+this.bobY+Math.sin(x*2.3)*v*.2,this.pos.z+Math.cos(x*1.3)*v*.25),this.roll+=(-t*.025-this.roll)*Math.min(1,e*6);let m=(u.baseFov||72)+(this.sprinting?8:0)+(this.jetting?4:0);Math.abs(this.cam.fov-m)>.05&&(this.cam.fov+=(m-this.cam.fov)*Math.min(1,e*5),this.cam.updateProjectionMatrix()),this.cam.rotation.set(this.pitch,this.yaw,this.roll+Math.sin(this.bob)*.006*Math.min(1,g/6),"YXZ"),this.cam.getWorldDirection(this.fwd);let _=$1(this.pos),E=this.pos.distanceTo(Mt)<11;if(this.inLife=!!_||E,this.inLife)this.o2=Math.min(this.maxO2,this.o2+30*e),this.health=Math.min(this.maxHealth,this.health+4*e);else{let M=.55+(this.sprinting?.6:0)+(this.jetting?.6:0);M*=(1+u.storm*.8)*rs().o2*(Gt("suit")?.65:1),u.terraform>=1&&(M*=.5),this.o2=Math.max(0,this.o2-M*e)}this.o2<=0&&(this.health-=9*e,this.health<=0&&this.die("\u6C27\u6C14\u8017\u5C3D")),this.o2<this.maxO2*.2&&!this.inLife&&(this.alarmT-=e,this.alarmT<=0&&(this.alarmT=2,Y.play("alarm"))),this.jetting||(this.energy=Math.min(100,this.energy+(this.onGround?14:4)*e)),this.hurtT=Math.max(0,this.hurtT-e),this.health=Math.min(this.health,this.maxHealth)}};var Sr=[{id:"laser",name:"\u91C7\u77FF\u6FC0\u5149",icon:"laser"},{id:"rifle",name:"\u7B49\u79BB\u5B50\u6B65\u67AA",icon:"rifle",need:"rifle"},{id:"build",name:"\u5EFA\u9020",icon:"build"}],hn={index:0,get id(){return Sr[this.index].id}},Gi,Kw=0,lo=null,Gp,Hs,Vl,wr={},ks,cs,wa,ba,Wl,mx=new w(.24,-.22,-.85);function vx(n){Hs=new Ki,Vl=new un(n.fov,n.aspect,.01,10),Hs.add(new hr(16769224,4202520,1.4));let e=new ji(16777215,1.5);e.position.set(1,2,1),Hs.add(e),Hs.userData.dl=e;let t=(M,D,A,C,P,S)=>{let b=new ne(M,D);return b.position.set(A,C,P),S.add(b),b},i=new ji(8965375,1.2);i.position.set(-2,1,2),Hs.add(i);let s=(M,D,A,C=20)=>{let P=new Rs(M.map(([S,b])=>new te(S,b)),C);return P.rotateX(-Math.PI/2),t(P,D,0,0,0,A)},r=new me({color:15262940,roughness:.35,metalness:.15}),o=new me({color:2764083,roughness:.45,metalness:.7}),a=new me({color:16742954,roughness:.4,metalness:.2});Gp=new me({color:3346688,emissive:16747056,emissiveIntensity:1.2});let l=new me({color:8755,emissive:4515583,emissiveIntensity:1.5}),c=(M,D,A,C,P,S,b)=>{let U=t(new Le(M,M,D,16),A,C,P,S,b);return U.rotation.x=Math.PI/2,U},h=new de;s([[0,-.12],[.04,-.12],[.056,-.08],[.058,.18],[.05,.26],[.036,.3],[.03,.36],[0,.36]],r,h),c(.06,.02,a,0,0,-.02,h),c(.06,.012,a,0,0,.1,h),c(.045,.06,o,0,0,.1+.04,h);for(let M=0;M<3;M++){let D=t(new Ne(.034-M*.003,.007,8,20),Gp,0,0,-.33-M*.035,h)}c(.018,.14,o,0,0,-.38,h);let d=t(new We(.02,12,8),new Ue({color:16760960}),0,0,-.455,h);t(new Ye(.018,.016,.2),o,0,.062,-.05,h),c(.026,.17,a,.06,-.02,-.02,h),t(new Ye(.032,.07,.045),o,0,-.075,.02,h).rotation.x=.3,t(new Ye(.03,.02,.07),o,0,-.05,.02,h);let f=t(new Dn(.04,.025),new Ue({color:6743807}),-.0585,.012,.04,h);f.rotation.y=-Math.PI/2,h.userData.tip=d;let p=new de;s([[0,-.2],[.04,-.2],[.055,-.15],[.055,.2],[.048,.28],[0,.28]],r,p),c(.035,.32,o,0,0,-.36,p);for(let M=0;M<4;M++)t(new Ne(.046,.009,8,20),l,0,0,-.27-M*.065,p);c(.05,.03,a,0,0,-.18,p),c(.022,.16,o,0,.075,-.02,p),t(new Le(.023,.023,.005,12),l,0,.075,-.1,p).rotation.x=Math.PI/2,t(new Ye(.032,.07,.045),o,0,-.075,0,p).rotation.x=.3,t(new Ye(.035,.09,.05),l,0,-.08,-.06,p);let g=new de;t(new Ye(.32,.22,.018),o,0,0,0,g),t(new Ye(.33,.012,.022),a,0,.112,0,g);let v=document.createElement("canvas");v.width=256,v.height=176;let x=v.getContext("2d");x.fillStyle="#06222e",x.fillRect(0,0,256,176),x.strokeStyle="rgba(127,230,255,.25)";for(let M=0;M<256;M+=16)x.beginPath(),x.moveTo(M,0),x.lineTo(M,176),x.stroke();for(let M=0;M<176;M+=16)x.beginPath(),x.moveTo(0,M),x.lineTo(256,M),x.stroke();x.strokeStyle="#7fe6ff",x.lineWidth=2,x.beginPath(),x.arc(128,110,50,Math.PI,0),x.lineTo(178,140),x.lineTo(78,140),x.closePath(),x.stroke(),x.fillStyle="#7fe6ff",x.font="bold 14px sans-serif",x.fillText("BLUEPRINT",12,22);let m=new Xt(v);m.colorSpace=Et;let _=t(new Dn(.29,.195),new Ue({map:m,transparent:!0,opacity:.95}),0,-.004,.01,g);g.userData.scr=_,g.rotation.set(-.5,.25,0),wr={laser:h,rifle:p,build:g};for(let M in wr)wr[M].scale.setScalar(M==="build"?.45:.6),wr[M].visible=!1,Hs.add(wr[M]);let E=new Le(1,1,1,16,24,!0);E.translate(0,.5,0),ks=new ne(E,new Ue({color:16773328,transparent:!0,opacity:.95,blending:ze,depthWrite:!1})),cs=new ne(E,x1(16742960)),ks.visible=cs.visible=!1,ks.frustumCulled=cs.frustumCulled=!1,u.scene.add(ks,cs),wa=_e(16748608,1.6,u.scene),wa.visible=!1,Gi=new _i(16747072,0,6,2),u.scene.add(Gi),Wl=_e(6743807,.35,Hs),Wl.visible=!1,ba=new Jo(16773853,0,70,.42,.45,1.2),n.add(ba),ba.position.set(.3,-.2,0),ba.target.position.set(0,0,-10),n.add(ba.target),u.scene.add(n)}function Zh(n){let e=Sr[n];if(e.need&&!u.upgrades[e.need]){u.events.emit("toast",`\u5C1A\u672A\u5236\u9020\uFF1A${e.name}\uFF08\u5728\u5236\u9020\u5DE5\u574A\u5236\u4F5C\uFF09`),Y.play("deny");return}hn.index===n&&e.id!=="build"||(hn.index=n,Y.play("ui"),e.id==="build"?u.events.emit("openBuild"):no(null))}var _a=0,Fp=0,Ea=0,Bp=0,Kh=0,gx=-1,Jw=new w,jw=new w(0,1,0),Sa=new w;function xx(n,e,t){let i=null,s=t;for(let r of u.nodes){let o=r.mesh.scale.x,a=1.5*o+.3;Sa.set(r.x-n.x,r.y+.7*o-n.y,r.z-n.z);let l=Sa.dot(e);if(l<0||l>t+a)continue;let c=Sa.lengthSq()-l*l;if(c>a*a)continue;let h=l-Math.sqrt(a*a-c);h<s&&(s=Math.max(.3,h),i=r)}return i?{n:i,dist:s}:null}function Qw(n,e,t){let i=null,s=t;for(let r of u.buildings){let o=Math.max(1.2,r.def.r);Sa.set(r.x-n.x,r.y+Math.min(o,3)*.6-n.y,r.z-n.z);let a=Sa.dot(e);if(a<0)continue;let l=Sa.lengthSq()-a*a;if(l>o*o)continue;let c=a-Math.sqrt(o*o-l);c<s&&(s=c,i=r)}return i}function yx(n,e,t){let i=hn.id;gx!==hn.index&&(Kh=1,gx=hn.index),Kh=Math.max(0,Kh-n*4);for(let v in wr)wr[v].visible=v===i;let s=wr[i],r=Math.hypot(e.vel.x,e.vel.z),o=Math.sin(e.bob)*.012*Math.min(1,r/6),a=Math.abs(Math.cos(e.bob))*.012*Math.min(1,r/6);Ea*=Math.pow(1e-4,n);let l=i==="build"?[.2,-.24,-.6]:[.24,-.22,-.58];s.position.set(l[0]+o,l[1]+a-Kh*.3-(e.sprinting?.04:0),l[2]+Ea*.08),s.rotation.x=(i==="build"?-.5:0)+Ea*.15+(e.sprinting?-.25:0),i==="build"&&(s.userData.scr.material.opacity=.6+Math.sin(performance.now()*.005)*.2),Vl.aspect=t.aspect,Vl.fov=t.fov,Vl.updateProjectionMatrix();let c=.4+(1-u.time.night)*1.2;Hs.userData.dl.intensity=c,ve.hit("KeyF")&&!u.menuOpen&&(e.flashlight=!e.flashlight,Y.play("ui")),ba.intensity=e.flashlight?60:0;let h=t.position,d=e.fwd;u.lookBuilding=u.menuOpen?null:Qw(h,d,14);let f=u.menuOpen?null:xx(h,d,30);u.aimNode=i==="laser"&&!!f&&f.dist<9;let p=u.menuOpen||i==="build"?null:ao(h,d,i==="rifle"?140:40);if(p){let v=p.e;u.aimTarget={id:v,x:v.pos.x,y:v.pos.y+1*v.scale,z:v.pos.z,r:1.7*v.scale,name:v.boss?"\u6676\u6BCD":v.guardian?"\u949B\u77FF\u5B88\u536B":"\u9508\u8680\u86DB",tag:v.boss?"CRYSTAL MOTHER":"HOSTILE",dist:p.dist,bar:Math.max(0,v.hp/v.maxHp),kind:"enemy"}}else if(f&&i!=="build"){let v=f.n;u.aimTarget={id:v,x:v.x,y:v.y+.8*v.mesh.scale.x,z:v.z,r:1.7*v.mesh.scale.x+.3,name:sn[v.type].name,tag:{iron:"FE ORE",silicon:"SI CRYSTAL",ice:"H2O ICE",titanium:"TI ORE"}[v.type],dist:f.dist,bar:Math.max(0,v.amount/v.max),kind:"node",color:sn[v.type].color}}else u.aimTarget=null;if(!u.menuOpen&&!e.dead&&!u.photo){if(ve.hit("Digit1")&&Zh(0),ve.hit("Digit2")&&Zh(1),(ve.hit("Digit3")||ve.hit("KeyB"))&&Zh(2),ve.wheel&&hn.id!=="build"){let v=hn.index;for(let x=0;x<2&&(v=(v+(ve.wheel>0?1:2))%2,!(!Sr[v].need||u.upgrades[Sr[v].need]));x++);v!==hn.index&&Zh(v)}hn.id==="build"&&At.type&&ve.wheel&&(At.rot+=ve.wheel*.3)}ks.visible=cs.visible=wa.visible=!1,Kw-=n,Gi.intensity=Math.max(0,Gi.intensity-n*120),lo&&(lo.mesh.position.set(lo.x,lo.y,lo.z),lo=null),Wl.visible=!1,Fp-=n;let g=ve.mouse[0]&&!u.menuOpen&&!e.dead&&u.locked;if(Gp.emissiveIntensity=i==="laser"&&g?3+Math.random()*1.5:1+Math.sin(performance.now()*.003)*.3,i==="laser")if(g){let x=xx(h,d,9),m=ao(h,d,9),_=Rh(h,d,9),E=9,M=null;_&&_.dist<E&&(E=_.dist,M="ground"),x&&x.dist<=E&&(E=x.dist,M="node"),m&&m.dist<E&&(E=m.dist,M="enemy");let D=Jw.copy(h).addScaledVector(d,E),A=t.localToWorld(mx.clone()),C=D.clone().sub(A),P=C.length();C.normalize();let S=new dn().setFromUnitVectors(jw,C),b=1+Math.sin(performance.now()*.05)*.2;if(ks.position.copy(A),ks.quaternion.copy(S),ks.scale.set(.012*b,P,.012*b),cs.position.copy(A),cs.quaternion.copy(S),cs.scale.set(.085*b,P,.085*b),cs.material.uniforms.uLen.value=P,Math.random()<.35&&fe.spark(D,[1,.75,.4],2,7,.5),ks.visible=cs.visible=!0,wa.position.copy(D),wa.visible=!0,wa.scale.setScalar(1.2+Math.random()*.8),Ea=Math.max(Ea,.15+Math.random()*.1),Gi.position.copy(D).addScaledVector(d,-.6),Gi.color.setRGB(1,.55,.25),Gi.intensity=5+Math.random()*4,M==="node"){let U=x.n;for(Gi.color.setRGB(...Ls[U.type]),lo=U,U.mesh.position.set(U.x+(Math.random()-.5)*.07,U.y+(Math.random()-.5)*.05,U.z+(Math.random()-.5)*.07),Math.random()<.15&&fe.dustPuff(D,1,.4),_a+=n*3.2*(u.upgrades.overclock?2:1)*(Gt("laser2")?1.5:1)*rs().yield,Math.random()<.7&&fe.spark(D,Ls[U.type],2,5,.4),Bp-=n,Bp<=0&&(Bp=.09,Y.play("mine"));_a>=1&&u.nodes.includes(U);)if(_a-=1,u.res[U.type]++,u.stats.mined[U.type]++,U.meteor&&(u.stats.meteorMined=(u.stats.meteorMined||0)+1),u.events.emit("pickup",{type:U.type,n:1}),Dh(U,1)){Y.play("deplete"),_a=0;break}}else M==="enemy"?(Gl(m.e,16*n*(u.upgrades.overclock?1.5:1),"laser"),Math.random()<.5&&fe.spark(D,[1,.5,.2],3,5)):M==="ground"&&(Math.random()<.3&&fe.spark(D,[1,.6,.3],1,3),Math.random()<.1&&fe.dustPuff(D,1,.3));Y.laser(!0)}else Y.laser(!1),_a=Math.min(_a,.9);else Y.laser(!1);if(i==="rifle"&&g&&Fp<=0)if(e.energy>=5){Fp=.16,e.energy-=5,Ea=1;let v=t.localToWorld(mx.clone()),x=ao(h,d,200),m=Rh(h,d,200),_=200;m&&(_=m.dist),x&&x.dist<_&&(_=x.dist);let M=h.clone().addScaledVector(d,_).sub(v).normalize();qh(v,M,u.upgrades.rifle2?30:19,"player"),Y.play("shoot"),Wl.visible=!0,Wl.position.set(.24,-.21,-.86),Gi.position.copy(v),Gi.color.setRGB(.4,.9,1),Gi.intensity=12}else ve.clicked[0]&&(Y.play("deny"),u.events.emit("toast","\u80FD\u91CF\u4E0D\u8DB3"));if(i==="build"){let v=!u.menuOpen&&At.type?Rh(h,d,40):null;if(q1(v?v.point:null,e.pos),!u.menuOpen&&At.type&&(ve.hit("KeyR")&&(At.rot+=Math.PI/4),ve.clicked[0]))if(At.valid){let x=Y1();x&&u.events.emit("built",x)}else Y.play("deny"),u.events.emit("toast",At.reason);ve.clicked[2]&&(no(null),hn.index=0,Y.play("ui"))}}function Mx(n){u.player.dead||u.driving||u.photo||(n.autoClear=!1,n.clearDepth(),n.render(Hs,Vl),n.autoClear=!0)}var Ta=[["\u6797\u6653","\u690D\u7269\u5B66\u5BB6","\u6211\u4ECE\u4E91\u5357\u5E26\u6765\u4E86\u4E00\u5305\u8336\u6811\u79CD\u5B50\u3002\u603B\u6709\u4E00\u5929\uFF0C\u706B\u661F\u4E0A\u4E5F\u80FD\u6CE1\u4E00\u58F6\u70ED\u8336\u3002"],["Amara Okafor","\u533B\u751F","\u5728\u5730\u7403\u4E0A\uFF0C\u6211\u6551\u8FC7\u5F88\u591A\u4EBA\u3002\u5728\u8FD9\u91CC\uFF0C\u6211\u60F3\u770B\u7740\u5B69\u5B50\u4EEC\u5E73\u5B89\u957F\u5927\u3002"],["\u9648\u9ED8","\u5DE5\u7A0B\u5E08","\u8FD9\u91CC\u7684\u6BCF\u4E00\u9897\u87BA\u4E1D\uFF0C\u90FD\u662F\u6211\u4EEC\u4EB2\u624B\u62E7\u4E0A\u53BB\u7684\u3002"],["Mateo Silva","\u5730\u8D28\u5B66\u5BB6","\u4F60\u770B\u89C1\u90A3\u4E9B\u5CA9\u5C42\u4E86\u5417\uFF1F\u5B83\u4EEC\u6BD4\u4EBA\u7C7B\u7684\u5386\u53F2\u8FD8\u8981\u53E4\u8001\u56DB\u5341\u4EBF\u5E74\u3002"],["\u82CF\u5FF5","\u6559\u5E08",'\u6211\u7684\u7B2C\u4E00\u5802\u8BFE\uFF0C\u5C31\u53EB"\u6211\u4EEC\u4E3A\u4EC0\u4E48\u6765\u5230\u706B\u661F"\u3002'],["Yuki Tanaka","\u98DE\u884C\u5458","\u4ECE\u8F68\u9053\u4E0A\u770B\uFF0C\u4F60\u4EEC\u7684\u706F\u5149\u50CF\u662F\u7EA2\u8272\u6C99\u6F20\u91CC\u7684\u4E00\u4E32\u73CD\u73E0\u3002"],["\u738B\u5927\u5C71","\u53A8\u5E08","\u6E29\u5BA4\u91CC\u7684\u7B2C\u4E00\u6279\u571F\u8C46\uFF0C\u6211\u505A\u4E86\u4E00\u9505\u571F\u8C46\u7096\u83DC\u3002\u5927\u5BB6\u90FD\u54ED\u4E86\u3002"],["Elena Petrova","\u5929\u6587\u5B66\u5BB6","\u665A\u4E0A\u62AC\u5934\uFF0C\u90A3\u9897\u6700\u4EAE\u7684\u84DD\u661F\uFF0C\u5C31\u662F\u5730\u7403\u3002"],["\u8D75\u5C0F\u96E8","\u5B66\u751F","\u6211\u5341\u516D\u5C81\u3002\u6211\u4F1A\u662F\u7B2C\u4E00\u4EE3\u5728\u706B\u661F\u957F\u5927\u7684\u4EBA\u3002"],["Kwame Mensah","\u7535\u5DE5","\u53EA\u8981\u706F\u8FD8\u4EAE\u7740\uFF0C\u8FD9\u91CC\u5C31\u662F\u5BB6\u3002"],["\u5468\u9752\u79BE","\u6C34\u6587\u5B66\u5BB6","\u51B0\u5C42\u4E0B\u9762\u6709\u6C34\u3002\u6709\u6C34\uFF0C\u5C31\u6709\u751F\u547D\u3002"],["Priya Sharma","\u7A0B\u5E8F\u5458","\u6211\u5199\u7684\u4EE3\u7801\u5728\u63A7\u5236\u5236\u6C27\u7AD9\u3002\u522B\u62C5\u5FC3\uFF0C\u6211\u6D4B\u8BD5\u8FC7\u4E09\u5343\u904D\u4E86\u3002"],["\u674E\u957F\u98CE","\u8001\u5175","\u6211\u5E74\u8F7B\u65F6\u5B88\u8FC7\u8FB9\u7586\u3002\u73B0\u5728\uFF0C\u6211\u5B88\u7740\u4EBA\u7C7B\u7684\u65B0\u8FB9\u7586\u3002"],["Sofia Rossi","\u5EFA\u7B51\u5E08","\u7A79\u9876\u7684\u5F27\u5EA6\uFF0C\u662F\u6211\u7167\u7740\u6545\u4E61\u6559\u5802\u7684\u5706\u9876\u753B\u7684\u3002"],["\u4F55\u5B89","\u62A4\u58EB","\u60F3\u5BB6\u7684\u65F6\u5019\uFF0C\u6211\u5C31\u53BB\u6E29\u5BA4\u91CC\u95FB\u95FB\u6CE5\u571F\u7684\u5473\u9053\u3002"],["Jonas Berg","\u673A\u68B0\u5E08","\u706B\u661F\u7684\u6C99\u5B50\u4F1A\u94BB\u8FDB\u4EFB\u4F55\u7F1D\u9699\u3002\u4F46\u6211\u4EEC\u6BD4\u6C99\u5B50\u66F4\u56FA\u6267\u3002"],["\u9A6C\u6674","\u8BB0\u8005","\u6211\u8981\u8BB0\u5F55\u4E0B\u8FD9\u4E00\u5207\u3002\u51E0\u767E\u5E74\u540E\u7684\u4EBA\u4F1A\u60F3\u77E5\u9053\uFF0C\u6700\u521D\u662F\u600E\u6837\u7684\u3002"],["Omar Haddad","\u519C\u5B66\u5BB6","\u6211\u7956\u7236\u5728\u6C99\u6F20\u91CC\u79CD\u51FA\u4E86\u6930\u67A3\u3002\u6211\u8981\u5728\u706B\u661F\u79CD\u51FA\u68EE\u6797\u3002"],["\u5434\u6850","\u753B\u5BB6","\u706B\u661F\u7684\u65E5\u843D\u662F\u84DD\u8272\u7684\u3002\u5730\u7403\u4E0A\u6CA1\u6709\u4EBA\u4F1A\u76F8\u4FE1\u3002"],["Grace Kim","\u5FC3\u7406\u533B\u751F","\u79BB\u5BB6\u5F88\u8FDC\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5F7C\u6B64\u5C31\u662F\u5BB6\u3002"],["\u90ED\u8FDC","\u7236\u4EB2","\u6211\u5973\u513F\u5728\u98DE\u8239\u4E0A\u51FA\u751F\u3002\u5979\u7684\u51FA\u751F\u8BC1\u660E\u4E0A\u5199\u7740\uFF1A\u51FA\u751F\u5730\uFF0C\u661F\u9645\u7A7A\u95F4\u3002"],["Lucas Moreau","\u97F3\u4E50\u5BB6","\u6211\u5E26\u4E86\u4E00\u628A\u5409\u4ED6\u3002\u4ECA\u665A\u7A79\u9876\u91CC\u6709\u97F3\u4E50\u4F1A\uFF0C\u4F60\u6765\u5417\uFF1F"],["\u94B1\u591A\u591A","\u4F1A\u8BA1","\u6211\u7B97\u8FC7\u4E86\uFF1A\u7167\u8FD9\u4E2A\u901F\u5EA6\uFF0C\u4E8C\u5341\u5E74\u540E\u8FD9\u91CC\u4F1A\u6709\u4E00\u5EA7\u57CE\u5E02\u3002"],["Aiko Sato","\u751F\u7269\u5B66\u5BB6","\u90A3\u4E9B\u9508\u8680\u86DB\u2026\u2026\u4E5F\u8BB8\u5B83\u4EEC\u53EA\u662F\u5728\u4FDD\u62A4\u81EA\u5DF1\u7684\u5BB6\u56ED\u3002"],["\u9093\u5353","\u77FF\u5DE5","\u949B\u77FF\u91CC\u85CF\u7740\u706B\u661F\u7684\u5FC3\u8DF3\u3002"],["Nadia Volkova","\u6C14\u8C61\u5B66\u5BB6","\u5927\u6C14\u6539\u9020\u5854\u542F\u52A8\u540E\uFF0C\u4E5F\u8BB8\u6211\u4EEC\u80FD\u770B\u89C1\u706B\u661F\u4E0A\u7684\u7B2C\u4E00\u7247\u4E91\u3002"],["\u9EC4\u4E00\u9E23","\u673A\u5668\u4EBA\u4E13\u5BB6","\u673A\u5668\u53EF\u4EE5\u66FF\u6211\u4EEC\u5E72\u6D3B\uFF0C\u4F46\u53EA\u6709\u4EBA\uFF0C\u624D\u80FD\u628A\u4E00\u4E2A\u5730\u65B9\u53D8\u6210\u5BB6\u3002"],["Samuel Okoro","\u7267\u5E08","\u65E0\u8BBA\u5728\u54EA\u9897\u661F\u7403\u4E0A\uFF0C\u6211\u4EEC\u90FD\u4F1A\u4E3A\u65B0\u751F\u7684\u5B69\u5B50\u795D\u798F\u3002"],["\u53F6\u77E5\u79CB","\u8BD7\u4EBA",'"\u6B64\u5FC3\u5B89\u5904\u662F\u543E\u4E61\u3002"\u2014\u2014\u82CF\u8F7C\u3002\u6211\u60F3\uFF0C\u4ED6\u8BF4\u5F97\u5BF9\u3002'],["Hannah Weber","\u7269\u7406\u5B66\u5BB6","\u805A\u53D8\u53CD\u5E94\u5806\u7684\u5149\uFF0C\u548C\u592A\u9633\u662F\u540C\u4E00\u79CD\u5149\u3002"],["\u5C0F\u6EE1","\u5B69\u5B50","\u53D4\u53D4\uFF0C\u5730\u7403\u662F\u4EC0\u4E48\u6837\u5B50\u7684\uFF1F"],["Diego Ram\xEDrez","\u767B\u5C71\u5BB6","\u5965\u6797\u5E15\u65AF\u5C71\u6709\u4E24\u4E07\u7C73\u9AD8\u3002\u603B\u6709\u4E00\u5929\u6211\u8981\u7AD9\u4E0A\u53BB\u3002"]],Jh=0;function _x(n,e,t){let i=t?.idx??Jh++,s=Ta[i%Ta.length],r=Og(i);r.group.position.set(n,Ee(n,e),e),u.scene.add(r.group);let o={...r,idx:i,name:s[0]+(i>=Ta.length?` ${Math.floor(i/Ta.length)+1}\u4E16`:""),job:s[1],line:s[2],pos:r.group.position,target:null,wait:Math.random()*3,phase:Math.random()*6,talked:0};return u.colonists.push(o),o}function eS(n){let e=u.buildings.filter(o=>o.type!=="lamp");if(!e.length)return new w(n.pos.x+(Math.random()-.5)*10,0,n.pos.z+(Math.random()-.5)*10);let t=e;if(u.time.night>.5){let o=e.filter(l=>l.type==="plaza"&&l.powered);if(o.length&&Math.random()<.85){let l=o[n.idx%o.length],c=n.idx*2.399%(Math.PI*2),h=2.8+n.idx%3*.9;return n.atPlaza=l,new w(l.x+Math.cos(c)*h,0,l.z+Math.sin(c)*h)}let a=e.filter(l=>l.type==="habitat"||l.type==="apartment");a.length&&(t=a)}n.atPlaza=null;let i=t[Math.floor(Math.random()*t.length)],s=Math.random()*Math.PI*2,r=i.def.r+1.5+Math.random()*5;return new w(i.x+Math.cos(s)*r,0,i.z+Math.sin(s)*r)}var $l=null,Vp=25;function tS(n,e){let t=Q1();t.group.userData.shuttle=!0,t.group.position.set(n.x,n.y+260,n.z),u.scene.add(t.group),$l={...t,pad:n,n:e,t:0,phase:"descend"},Y.play("rumble"),u.events.emit("shuttleIncoming",e)}function Ex(n){let e=u.colony;if(u.popTotal=Math.max(u.popTotal||0,u.colonists.length),e.pop=u.popTotal,e.pop)for(u._work=(u._work||0)+n*e.pop*.04*(Gt("culture")?2:1)*wp();u._work>=1;){u._work-=1;let r=Math.random()<.55?"iron":Math.random()<.6?"silicon":"ice";u.res[r]++}let t=u.buildings.filter(r=>r.type==="beacon"&&r.powered),i=e.support-e.pop;!$l&&t.length&&i>0&&!u.ended&&(Vp-=n,Vp<=0&&(Vp=Math.max(20,50/t.length)*(Gt("pr")?.55:1)/wp(),tS(t[Math.floor(Math.random()*t.length)],Math.min(i,4+(u.cityLevel||0)*2+(Gt("pr")?2:0))))),$l&&nS(n);let s=performance.now()*.001;for(let r of u.colonists){r.target||(r.wait-=n,r.wait<=0&&(r.target=eS(r)));let o=!1;if(r.target){let h=r.target.x-r.pos.x,d=r.target.z-r.pos.z,f=Math.hypot(h,d);if(f<.6)r.target=null,r.wait=3+Math.random()*8;else{r.pos.x+=h/f*1.7*n,r.pos.z+=d/f*1.7*n;for(let g of u.colliders.query(r.pos.x,r.pos.z)){if(g.kind!=="building")continue;let v=r.pos.x-g.x,x=r.pos.z-g.z,m=Math.hypot(v,x),_=g.r+.4;m<_&&m>.01&&(r.pos.x=g.x+v/m*_,r.pos.z=g.z+x/m*_)}r.group.rotation.y=Math.atan2(h,d),o=!0}}let a=Math.hypot(u.player.pos.x-r.pos.x,u.player.pos.z-r.pos.z);a<4&&!o?r.group.rotation.y=Math.atan2(u.player.pos.x-r.pos.x,u.player.pos.z-r.pos.z):!o&&r.atPlaza&&(r.group.rotation.y=Math.atan2(r.atPlaza.x-r.pos.x,r.atPlaza.z-r.pos.z),r.wait=Math.max(r.wait,2),u.time.night<.3&&(r.wait=0)),r.pos.y=Ee(r.pos.x,r.pos.z);let l=s*7+r.phase,c=o?Math.sin(l)*.6:0;r.legL.rotation.x=c,r.legR.rotation.x=-c,r.armL.rotation.x=-c*.8,r.armR.rotation.x=c*.8,!o&&a<4&&(r.armR.rotation.x=-2.6+Math.sin(s*6)*.3),r.body.position.y=.72+(o?Math.abs(Math.sin(l))*.04:0),r.talked=Math.max(0,r.talked-n)}}function nS(n){let e=$l;e.t+=n;let t=e.pad,i=e.group;if(e.phase==="descend"){let s=Math.min(1,e.t/11),r=1-Math.pow(1-s,3);i.position.y=t.y+.6+260*(1-r),e.flame.scale.set(1,.6+(1-r)*1.2+Math.random()*.2,1);for(let o=0;o<3;o++)fe.flame(i.position);s>.85&&Math.random()<.5&&fe.dustPuff(new w(t.x,t.y,t.z),4,10),s>=1&&(e.phase="landed",e.t=0,fe.ring(new w(t.x,t.y,t.z),3,80),e.flame.visible=!1,e.flameGlow.visible=!1)}else if(e.phase==="landed"){if(e.total=e.total||e.n,e.n>0&&e.t>2+(e.total-e.n)*.6){let s;u.colonists.length<40?(s=_x(t.x+(Math.random()-.5)*2,t.z+3),s.target=new w(t.x+(Math.random()-.5)*20,0,t.z+10+Math.random()*8)):s={name:Ta[Jh++%Ta.length][0]},e.n--,e.arrived=(e.arrived||[]).concat([s]),u.popTotal=(u.popTotal||0)+1,u.stats.arrived++}e.n<=0&&e.t>7&&(e.phase="ascend",e.t=0,e.flame.visible=!0,e.flameGlow.visible=!0,Y.play("rumble"),u.events.emit("colonistsArrived",e.arrived||[]))}else if(e.phase==="ascend"){i.position.y+=n*(5+e.t*12);for(let s=0;s<3;s++)fe.flame(i.position);e.t<1.5&&fe.dustPuff(new w(t.x,t.y,t.z),3,10),e.t>12&&(u.scene.remove(i),$l=null)}}var Wp=new w;function bx(n,e){let t=null,i=6;for(let s of u.colonists){Wp.set(s.pos.x-n.x,s.pos.y+1.1-n.y,s.pos.z-n.z);let r=Wp.dot(e);r<0||r>i||Wp.lengthSq()-r*r<.8*.8&&(i=r,t=s)}return t}function wx(){return u.colonists.map(n=>[n.idx,+n.pos.x.toFixed(1),+n.pos.z.toFixed(1)])}function Sx(n){for(let[e,t,i]of n)_x(t,i,{idx:e});Jh=Math.max(Jh,...n.map(e=>e[0]+1),0)}var iS={iron:'<path d="M12 2.5l8.2 4.75v9.5L12 21.5l-8.2-4.75v-9.5z"/><path d="M12 2.5v19M3.8 7.25l16.4 9.5M20.2 7.25L3.8 16.75" opacity=".35"/>',silicon:'<path d="M12 2l7 10-7 10-7-10z"/><path d="M5 12h14M12 2v20" opacity=".35"/>',ice:'<path d="M12 2v20M3.3 7l17.4 10M20.7 7L3.3 17"/><path d="M9.5 3.5L12 6l2.5-2.5M9.5 20.5L12 18l2.5 2.5"/>',titanium:'<path d="M12 2l2.6 7.4L22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6z"/>',power:'<path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H12z"/>',pop:'<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.6 2.7-6 6-6s6 2.4 6 6"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 14.4c3 .1 5.5 2.2 5.5 5.6"/>',house:'<path d="M3 20h18M5 20V10l7-6 7 6v10"/><path d="M10 20v-5h4v5"/>',o2:'<circle cx="9" cy="12" r="5.5"/><path d="M17 15.5c0-1.4 2.6-1.6 2.6-3 0-.9-.7-1.5-1.6-1.5S16.5 11.6 16.5 12.4M16.5 18.5h3.4"/>',food:'<path d="M12 21V9"/><path d="M12 13c-4 0-6-3-6-7 4 0 6 3 6 7zM12 11c0-4 2-7 6-7 0 4-2 7-6 7z"/>',water:'<path d="M12 2.5S5.5 10 5.5 14.5a6.5 6.5 0 0013 0C18.5 10 12 2.5 12 2.5z"/>',laser:'<path d="M3 15l7-7 3 3-7 7z"/><path d="M13 11l2-2M16 8l5-5M17.5 11.5l3 .5M12.5 6.5l-.5-3"/>',rifle:'<path d="M2 10h15l3 2-3 2H9l-2 5H4l1-5H2z"/><path d="M12 10V7h3v3"/>',build:'<path d="M3 21h18M6 21V11h12v10M9 11V6h6v5"/><path d="M14 3l5 3" />',rover:'<path d="M3 15h18v-4l-3-4H8l-2 4H3z"/><circle cx="7" cy="17.5" r="2.2"/><circle cx="17" cy="17.5" r="2.2"/><path d="M10 7v4h8"/>',warn:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.01"/>',sun:'<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/>',moon:'<path d="M20 14.5A8.5 8.5 0 019.5 4a8.5 8.5 0 1010.5 10.5z"/>',meteor:'<circle cx="16" cy="16" r="4"/><path d="M13 13L3 3M15 11L8 4M11 15L4 8"/>',radio:'<path d="M5 9a9.5 9.5 0 0114 0M8 12a5 5 0 018 0"/><circle cx="12" cy="15.5" r="1.6"/><path d="M12 17v4"/>',check:'<path d="M4 12.5l5 5L20 6.5"/>',lock:'<rect x="5" y="10.5" width="14" height="10" rx="1"/><path d="M8 10.5V7a4 4 0 018 0v3.5"/>',ship:'<path d="M12 2c3 3 4 7 4 11v4H8v-4c0-4 1-8 4-11z"/><path d="M8 13l-3 4v3l3-2M16 13l3 4v3l-3-2M10 20l2 2 2-2"/>',colony:'<path d="M2 20h20"/><path d="M4 20v-5a4 4 0 018 0v5M13 20V7h7v13"/><path d="M15.5 10h2M15.5 13h2M15.5 16h2"/>',storm:'<path d="M3 8h12a3 3 0 10-3-3M3 12h16a3 3 0 11-3 3M3 16h8"/>',shield:'<path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/>',wrench:'<path d="M14.5 6.5a4 4 0 015.2 5.2L21 13l-8 8-1.3-1.3a4 4 0 01-5.2-5.2L3 11l3-3 3.5 3.5 2-2L8 6l3-3z" transform="scale(.9) translate(1.3 1.3)"/>',tank:'<rect x="7" y="5" width="10" height="16" rx="5"/><path d="M10 2h4v3h-4zM7 10h10"/>',scanner:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 12l6-6"/>',jet:'<path d="M8 3h8v11H8z"/><path d="M9 14l-1 4M15 14l1 4M10 18l2 4 2-4"/>',armor:'<path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/><path d="M8 10l4 2 4-2M12 12v6"/>',focus:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="2"/><path d="M12 1.5v5M12 17.5v5M1.5 12h5M17.5 12h5"/>',bolt2:'<path d="M7 2l-2 9h5l-2 11 9-13h-6l3-7z"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',planet:'<circle cx="12" cy="12" r="6.5"/><path d="M2.5 15.5c3 2 16 -4 19-9" />',trophy:'<path d="M7 3h10v5a5 5 0 01-10 0z"/><path d="M7 5H3c0 3 2 5 4 5M17 5h4c0 3-2 5-4 5M12 13v4M8 21h8M9 17h6"/>',book:'<path d="M4 4h6a2 2 0 012 2v14a2 2 0 00-2-2H4zM20 4h-6a2 2 0 00-2 2v14a2 2 0 012-2h6z"/>',camera:'<path d="M3 7h4l2-3h6l2 3h4v13H3z"/><circle cx="12" cy="13" r="4"/>',gear:'<circle cx="12" cy="12" r="3.2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',drone:'<rect x="9" y="10" width="6" height="4" rx="1"/><path d="M9 11L5 7M15 11l4-4M9 13l-4 4M15 13l4 4"/><circle cx="5" cy="7" r="2.2"/><circle cx="19" cy="7" r="2.2"/><circle cx="5" cy="17" r="2.2"/><circle cx="19" cy="17" r="2.2"/>',boss:'<path d="M12 2l3 6 6 1-4 5 1 7-6-3-6 3 1-7-4-5 6-1z"/><circle cx="12" cy="12" r="2"/>',key:'<circle cx="8" cy="15" r="4.5"/><path d="M11.5 12L20 3.5M17 6.5l2.5 2.5M15 8.5l2 2"/>',dome:'<path d="M3 19h18M4.5 19a7.5 7.5 0 0115 0"/><path d="M12 11.5V8M10 19v-3h4v3"/>',tower:'<path d="M6 21V5h6v16M12 21V10h6v11"/><path d="M8 8h2M8 11h2M8 14h2M14 13h2M14 16h2M3 21h18"/>',monument:'<path d="M10 21l1-16 1-2 1 2 1 16z"/><ellipse cx="12" cy="11" rx="6" ry="2"/><path d="M5 21h14"/>'};function Tx(){return`<svg xmlns="http://www.w3.org/2000/svg" style="display:none">${Object.entries(iS).map(([n,e])=>`<symbol id="i-${n}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${e}</symbol>`).join("")}</svg>`}var mt=(n,e="")=>`<svg class="ico ${e}" aria-hidden="true"><use href="#i-${n}"/></svg>`;var jh={};function Rx(n){let e=n.filter(l=>!jh[l]);if(!e.length)return jh;let t=256,i=new Zo({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});i.setSize(t,t),i.setPixelRatio(1),i.toneMapping=qr,i.toneMappingExposure=1.15;let s=new Ki;s.add(new hr(14674175,3811876,1.4));let r=new ji(16773344,2.6);r.position.set(4,8,6),s.add(r);let o=new ji(8965375,1.4);o.position.set(-6,4,-6),s.add(o);let a=new un(30,1,.1,500);for(let l of e){let c=new de,h={};Qn[l](c,h);let d=[];c.traverse(_=>{(_.userData.found||_===h.flame||_===h.beam)&&d.push(_)}),d.forEach(_=>_.parent.remove(_));let f=[];c.traverse(_=>{_.isSprite&&f.push([_,_.parent])}),f.forEach(([_,E])=>E.remove(_)),s.add(c);let p=new Ni().setFromObject(c,!0),g=p.getSize(new w),v=p.getCenter(new w);f.forEach(([_,E])=>E.add(_));let m=Math.max(g.x,g.y,g.z)*.62/Math.tan(Bt.degToRad(15))*1.05;a.position.set(v.x+m*.62,v.y+m*.42,v.z+m*.66),a.lookAt(v),a.updateProjectionMatrix(),i.render(s,a),jh[l]=i.domElement.toDataURL("image/png"),s.remove(c)}return i.dispose(),i.forceContextLoss(),jh}var sS={mars:[{id:"zhurong",name:"\u795D\u878D\u53F7\u706B\u661F\u8F66",model:"rover",who:"\u6863\u6848 \xB7 \u795D\u878D\u53F7",text:"\u4E2D\u56FD\u706B\u661F\u8F66\u300C\u795D\u878D\u53F7\u300D\uFF0C2021 \u5E74\u7740\u9646\u5728\u4E4C\u6258\u90A6\u5E73\u539F\u2014\u2014\u5C31\u5728\u4F60\u811A\u4E0B\u8FD9\u7247\u571F\u5730\u3002\u5B83\u7684\u592A\u9633\u80FD\u677F\u4E0A\u79EF\u6EE1\u4E86\u516D\u5341\u591A\u5E74\u7684\u6C99\u5C18\u3002\u4EBA\u7C7B\u5728\u706B\u661F\u4E0A\u7684\u7B2C\u4E00\u884C\u8F66\u8F99\uFF0C\u5C31\u662F\u5B83\u7559\u4E0B\u7684\u3002"},{id:"opportunity",name:"\u673A\u9047\u53F7\u6B8B\u9AB8",model:"rover2",who:"\u6863\u6848 \xB7 \u673A\u9047\u53F7",text:"\u4E00\u5757\u5199\u7740\u300COpportunity\u300D\u7684\u6B8B\u7247\uFF0C\u4E0D\u77E5\u88AB\u54EA\u573A\u6C99\u5C18\u66B4\u5377\u5230\u4E86\u8FD9\u91CC\u3002\u5B83\u5728\u706B\u661F\u4E0A\u5DE5\u4F5C\u4E86\u5341\u4E94\u5E74\u3002\u5B83\u6700\u540E\u4F20\u56DE\u7684\u6570\u636E\uFF0C\u88AB\u4EBA\u4EEC\u7FFB\u8BD1\u6210\u4E00\u53E5\u8BDD\uFF1A\u300C\u6211\u7684\u7535\u91CF\u5F88\u4F4E\uFF0C\u5929\u5FEB\u9ED1\u4E86\u3002\u300D"},{id:"viking",name:"\u6D77\u76D7\u4E00\u53F7\u7740\u9646\u5668",model:"lander",who:"\u6863\u6848 \xB7 \u6D77\u76D7\u4E00\u53F7",text:"1976 \u5E74\uFF0C\u4EBA\u7C7B\u7B2C\u4E00\u4E2A\u5728\u706B\u661F\u6210\u529F\u7740\u9646\u5E76\u4F20\u56DE\u7167\u7247\u7684\u63A2\u6D4B\u5668\u3002\u7167\u7247\u4E0A\uFF0C\u5C31\u662F\u8FD9\u6837\u4E00\u7247\u7EA2\u8272\u7684\u3001\u5E03\u6EE1\u77F3\u5934\u7684\u5E73\u539F\u3002"},{id:"ingenuity",name:"\u673A\u667A\u53F7\u76F4\u5347\u673A",model:"heli",who:"\u6863\u6848 \xB7 \u673A\u667A\u53F7",text:"\u4E00\u67B6\u53EA\u6709 1.8 \u516C\u65A4\u7684\u5C0F\u76F4\u5347\u673A\u30022021 \u5E74\uFF0C\u5B83\u5B8C\u6210\u4E86\u4EBA\u7C7B\u5728\u5730\u7403\u4E4B\u5916\u7684\u7B2C\u4E00\u6B21\u52A8\u529B\u98DE\u884C\u3002\u65CB\u7FFC\u4E0A\u8FD8\u8D34\u7740\u4E00\u5C0F\u5757\u83B1\u7279\u5144\u5F1F\u98DE\u673A\u7684\u5E03\u6599\u3002"}],europa:[{id:"drill",name:"\u51B0\u5C42\u94BB\u63A2\u5668",model:"drill",who:"\u6863\u6848 \xB7 \u51B0\u7A7F\u8005\u53F7",text:"2041 \u5E74\u7684\u65E0\u4EBA\u94BB\u63A2\u5668\u300C\u51B0\u7A7F\u8005\u53F7\u300D\u3002\u5B83\u94BB\u5230\u4E86\u51B0\u4E0B\u4E09\u516C\u91CC\uFF0C\u5728\u6700\u540E\u4E00\u5E27\u753B\u9762\u91CC\uFF0C\u955C\u5934\u524D\u4F3C\u4E4E\u6709\u4EC0\u4E48\u4E1C\u897F\u5728\u53D1\u5149\u2026\u2026\u7136\u540E\u4FE1\u53F7\u4E2D\u65AD\u4E86\u3002"},{id:"hydro",name:"\u65E0\u4EBA\u6C34\u542C\u7AD9",model:"probe",who:"\u6863\u6848 \xB7 \u6C34\u542C\u7AD9",text:"\u4E00\u53F0\u8FD8\u5728\u8FD0\u8F6C\u7684\u6C34\u542C\u5668\u3002\u5B83\u5F55\u5230\u4E86\u51B0\u4E0B\u6D77\u6D0B\u91CC\u67D0\u79CD\u6709\u8282\u594F\u7684\u4F4E\u9891\u58F0\u97F3\uFF0C\u5468\u671F\u662F 17 \u5206\u949F\u3002\u6CA1\u6709\u4EBA\u77E5\u9053\u90A3\u662F\u4EC0\u4E48\u3002"},{id:"galileo",name:"\u523B\u5B57\u7684\u91D1\u5C5E\u7247",model:"plate",who:"\u6863\u6848 \xB7 \u65E0\u540D",text:"\u51B0\u91CC\u51BB\u7740\u4E00\u5757\u91D1\u5C5E\u7247\uFF0C\u4E0A\u9762\u523B\u7740\u4E00\u4E2A\u65E5\u671F\uFF1A1610 \u5E74 1 \u6708 7 \u65E5\u3002\u90A3\u662F\u4F3D\u5229\u7565\u7B2C\u4E00\u6B21\u770B\u89C1\u6728\u661F\u536B\u661F\u7684\u591C\u665A\u3002\u662F\u8C01\u628A\u5B83\u5E26\u5230\u8FD9\u91CC\u7684\uFF1F"}],kepler:[{id:"monolith",name:"\u6676\u4F53\u65B9\u7891",model:"monolith",who:"\u6863\u6848 \xB7 \u672A\u77E5",text:"\u8FD9\u4E0D\u662F\u4EBA\u7C7B\u9020\u7684\u3002\u65B9\u7891\u8868\u9762\u7684\u7EB9\u8DEF\u5728\u4F60\u9760\u8FD1\u65F6\u4E00\u5708\u5708\u4EAE\u8D77\uFF0C\u50CF\u662F\u5728\u8FA8\u8BA4\u4F60\u3002\u5B83\u7684\u5E74\u9F84\u5927\u7EA6\u662F\u56DB\u5343\u4E07\u5E74\u3002"},{id:"pathfinder",name:"\u65B9\u821F\u63A2\u8DEF\u5668",model:"probe",who:"\u6863\u6848 \xB7 \u63A2\u8DEF\u8005",text:"\u4E09\u767E\u5E74\u524D\u5148\u884C\u51FA\u53D1\u7684\u65E0\u4EBA\u63A2\u8DEF\u5668\u3002\u5B83\u7684\u6700\u540E\u4E00\u6761\u65E5\u5FD7\u5199\u7740\uFF1A\u300C\u5DF2\u627E\u5230\u9002\u5B9C\u7740\u9646\u70B9\u3002\u6211\u4F1A\u5728\u8FD9\u91CC\u7B49\u4F60\u4EEC\u3002\u300D\u5B83\u7B49\u4E86\u4E00\u767E\u4E00\u5341\u4E8C\u5E74\u3002"},{id:"fossil",name:"\u5DE8\u578B\u5316\u77F3",model:"fossil",who:"\u6863\u6848 \xB7 \u5316\u77F3",text:"\u4E00\u526F\u5DE8\u5927\u7684\u9AA8\u67B6\uFF0C\u5F27\u5F62\u7684\u808B\u9AA8\u50CF\u62F1\u95E8\u4E00\u6837\u7ACB\u5728\u5730\u4E0A\u3002\u751F\u524D\uFF0C\u5B83\u53EF\u80FD\u50CF\u90A3\u4E9B\u53D1\u5149\u7684\u6C34\u6BCD\u4E00\u6837\uFF0C\u6F02\u6D6E\u5728\u8FD9\u7247\u5929\u7A7A\u91CC\u3002"}]},co=[],Ri=new me({color:8022620,roughness:.9,metalness:.3}),$p=new me({color:13148240,roughness:.4,metalness:.8}),Xp=new me({color:15260872,roughness:.8,flatShading:!0}),rS=new me({color:1314844,roughness:.15,metalness:.9,emissive:6308095,emissiveIntensity:.15});function Ht(n,e,t,i,s,r,o=0,a=0,l=0){let c=new ne(n,e);return c.position.set(t,i,s),c.rotation.set(o,a,l),c.castShadow=!0,c.receiveShadow=!0,r.add(c),c}var oS={rover(n){Ht(new Ye(1.6,.5,2.2),Ri,0,.9,0,n,0,0,.08);for(let e of[-1,1])Ht(new Ye(1.4,.05,1.6),y.solar,e*1.4,1.1,0,n,0,0,e*.25);Ht(new Le(.05,.05,1.2,6),Ri,.4,1.7,-.7,n),Ht(new Ye(.3,.2,.25),Ri,.4,2.35,-.7,n,0,0,.3);for(let e of[-.9,0,.9])for(let t of[-1,1])Ht(new Le(.28,.28,.22,10),y.dark,t*.95,.3,e,n,0,0,Math.PI/2)},rover2(n){Ht(new Ye(1.4,.45,1.8),Ri,0,.5,0,n,.25,.4,.4),Ht(new Ye(1.2,.05,1.1),y.solar,.9,.35,.3,n,.1,0,-.6),Ht(new Le(.28,.28,.22,10),y.dark,-1.2,.25,.8,n,.4,0,1.2)},lander(n){Ht(new Le(1,1.1,.6,6),$p,0,1,0,n);for(let e=0;e<3;e++){let t=e*Math.PI*2/3;Ht(new Le(.06,.06,1.4,5),Ri,Math.cos(t)*1.1,.5,Math.sin(t)*1.1,n,Math.sin(t)*.4,0,-Math.cos(t)*.4)}Ht(new Le(.6,.6,.05,16),y.white,0,1.6,.3,n,.6,0,0),Ht(new Ye(.2,.9,.2),Ri,-.5,1.7,-.3,n)},heli(n){Ht(new Ye(.25,.2,.25),$p,0,.45,0,n),Ht(new Le(.02,.02,.5,4),Ri,0,.75,0,n),Ht(new Ye(1.2,.02,.08),Ri,0,.9,0,n,0,.5,0),Ht(new Ye(1.2,.02,.08),Ri,0,.98,0,n,0,-.4,0);for(let e=0;e<4;e++){let t=e*Math.PI/2+.6;Ht(new Le(.015,.015,.5,4),Ri,Math.cos(t)*.2,.2,Math.sin(t)*.2,n,Math.sin(t)*.5,0,-Math.cos(t)*.5)}n.scale.setScalar(2.2)},drill(n){Ht(new Le(.5,.7,1.4,8),Ri,0,.7,0,n),Ht(new Le(.15,.15,4,8),y.metal,0,2.6,0,n,.15,0,0);for(let e=0;e<3;e++){let t=e*Math.PI*2/3;Ht(new Ye(.15,3,.15),Ri,Math.cos(t)*.9,1.4,Math.sin(t)*.9,n,Math.sin(t)*.25,0,-Math.cos(t)*.25)}},probe(n){Ht(new We(.8,12,8),y.white,0,.9,0,n),Ht(new Ne(.85,.08,6,20),y.orange,0,.9,0,n,Math.PI/2,0,0),Ht(new Le(.03,.03,1.6,4),y.metal,0,2.2,0,n),Ht(new qt(.5,.3,12,1,!0),y.white,0,3,0,n,Math.PI,0,0)},plate(n){Ht(new Ye(1.2,.8,.06),$p,0,.5,0,n,-.5,0,.1),Ht(new Mi(.9,0),new me({color:13627135,transparent:!0,opacity:.6,roughness:.05}),0,.4,0,n)},monolith(n){Ht(new Ye(1.4,7,.5),rS,0,3.5,0,n,0,0,.04),n.userData.rings=[];for(let e=0;e<3;e++){let t=Ht(new Ne(1.4+e*.4,.04,6,32),new Ue({color:9075455,transparent:!0,opacity:.6}),0,2+e*1.6,0,n,Math.PI/2,0,0);n.userData.rings.push(t)}},fossil(n){for(let e=0;e<9;e++){let t=Ht(new Ne(3-Math.abs(e-4)*.35,.18,6,16,Math.PI),Xp,0,0,-6+e*1.5,n);t.rotation.y=0}Ht(new Le(.25,.15,14,6),Xp,0,3,0,n,Math.PI/2,0,0),Ht(new Mi(1.4,0),Xp,0,2.6,-8,n)}};function Ax(){let n=ci(it.length*977+5),e=sS[it]||[];e.forEach((t,i)=>{let s=0,r=0;for(let l=0;l<200;l++){let c=i/e.length*Math.PI*2+n()*1.2,h=160+n()*220;if(s=Math.cos(c)*h,r=Math.sin(c)*h,Math.abs(s)<Qe-180&&Math.abs(r)<Qe-180&&Kr(s,r,3)<.35&&!u.colliders.overlaps(s,r,6))break}let o=new de;oS[t.model](o),o.position.set(s,Ee(s,r)-.15,r),o.rotation.y=n()*6.28;let a=_e(16765578,3,u.scene,s,Ee(s,r)+4,r);u.scene.add(o),u.colliders.add({x:s,z:r,r:t.model==="fossil"?3:1.4,kind:"relic"}),co.push({...t,x:s,z:r,g:o,beacon:a,found:(u.relicsFound||[]).includes(t.id)})})}function Cx(n){let e=null,t=1e9;for(let i of co){if(i.found)continue;let s=Math.hypot(i.x-n.x,i.z-n.z);s<t&&(t=s,e=i)}return e?{r:e,d:t}:null}function Px(n){return co.find(e=>!e.found&&Math.hypot(e.x-n.x,e.z-n.z)<6)}function hs(){return{found:co.filter(n=>n.found).length,total:co.length}}function qp(){return co}function Ix(n){n.found=!0,u.relicsFound=[...new Set([...u.relicsFound||[],n.id])],Pt(n.who,n.text),u.res.titanium+=8,u.res.silicon+=15,u.events.emit("pickup",{type:"titanium",n:8,note:n.name}),u.events.emit("toast",`\u2713 \u53D1\u73B0\u9057\u8FF9\uFF1A${n.name}`),Y.play("objective"),fe.burst(new w(n.x,Ee(n.x,n.z)+2,n.z),[1,.85,.5],60,8)}function Lx(n){let e=performance.now()*.001;for(let t of co)t.beacon.visible=!t.found,t.beacon.material.opacity=.5+Math.sin(e*2+t.x)*.3,t.g.userData.rings&&t.g.userData.rings.forEach((i,s)=>{i.rotation.z=e*(.3+s*.2),i.material.opacity=(t.found?.8:.3)+Math.sin(e*2+s)*.2})}var Qh=[],jp=new qt(1,1,8,1,!0);jp.rotateX(Math.PI);jp.translate(0,-.5,0);var aS=new w(0,1,0),Kp=0,Yp=0,eu=0,Jp=0,Dx=-1;function lS(){Kp=45,Jp=0,eu=6,Pt("\u65B9\u821F \xB7 AI","\u770B\u5929\u4E0A\u2014\u2014\u6D41\u661F\u96E8\uFF01\u6709\u51E0\u9897\u4F1A\u843D\u5230\u9644\u8FD1\u3002\u9668\u77F3\u91CC\u5BCC\u542B\u949B\uFF0C\u53BB\u5760\u843D\u70B9\u770B\u770B\u3002"),u.events.emit("toast","\u2604 \u6D41\u661F\u96E8")}function Ux(n){let e=u.player.pos,t;if(n){for(let h=0;h<20;h++){let d=Math.random()*Math.PI*2,f=40+Math.random()*110,p=Bt.clamp(e.x+Math.cos(d)*f,-Qe+180,Qe-180),g=Bt.clamp(e.z+Math.sin(d)*f,-Qe+180,Qe-180);if(!u.buildings.some(v=>Math.hypot(v.x-p,v.z-g)<v.def.r+14)){t=new w(p,Ee(p,g),g);break}}if(!t)return}else{let h=Math.random()*Math.PI*2,d=150+Math.random()*350;t=new w(e.x+Math.cos(h)*d,e.y+110+Math.random()*140,e.z+Math.sin(h)*d)}let i=new w((Math.random()-.5)*1.2,-.55-Math.random()*.3,(Math.random()-.5)*1.2).normalize(),s=n?520:420,r=t.clone().addScaledVector(i,-s),o=_e(n?16756848:16769216,n?18:10,u.scene);o.material.fog=!1,o.position.copy(r);let a=new ne(jp,new Ue({color:n?16751184:16767144,transparent:!0,opacity:.75,blending:ze,depthWrite:!1,fog:!1})),l=n?90:70+Math.random()*70,c=n?2.2:1.3;a.scale.set(c,l,c),a.quaternion.setFromUnitVectors(aS,i),a.position.copy(r),u.scene.add(a),Qh.push({pos:r,vel:i.multiplyScalar(n?150:220),head:o,tail:a,impact:n,target:t,life:s/(n?150:220)})}function Nx(n){uS(n),u.time.night>.7&&Dx!==u.time.day&&u.time.day>=2&&u.storm<.1&&!u.ended&&(Dx=u.time.day,Math.random()<.4&&lS()),Kp>0&&(Kp-=n,Yp-=n,eu-=n,Yp<=0&&(Yp=.15+Math.random()*.35,Ux(!1)),eu<=0&&Jp<4&&(eu=7+Math.random()*5,Jp++,Ux(!0)));for(let t=Qh.length-1;t>=0;t--){let i=Qh[t];i.life-=n,i.pos.addScaledVector(i.vel,n),i.head.position.copy(i.pos),i.tail.position.copy(i.pos);for(let s=0;s<3;s++)fe.trail(i.pos.clone().addScaledVector(i.vel,-n*s/3),i.impact?[1,.6,.3]:[1,.85,.6],i.impact?1.2:.7);i.life<=0&&(u.scene.remove(i.head),u.scene.remove(i.tail),i.tail.material.dispose(),Qh.splice(t,1),i.impact&&cS(i.target))}}function cS(n){let e=n.clone();e.y+=1.5,fe.burst(e,[1,.55,.2],120,22),_r(e,2.6,16747072),fe.ring(n,2,90),fe.dustPuff(e,40,8),Y.play("rumble"),Y.play("kill");let t=n.distanceTo(u.player.pos);if(t<80&&(u.player.landDip=Math.max(u.player.landDip,.4*(1-t/80))),!u.colliders.overlaps(n.x,n.z,2.5)){let i=ua("titanium",n.x,n.z,10+Math.floor(Math.random()*8));i.meteor=!0}u.events.emit("toast",`\u2604 \u9668\u77F3\u5760\u843D\u5728 ${Math.round(t)} \u7C73\u5916`)}var zs=[],Zp=150;function hS(){let n=new de,e=(s,r,o)=>{let a=new ne(s,r);return a.position.y=o,a.castShadow=!0,n.add(a),a};e(new Le(.9,1.2,1.8,20),y.white,1.2),e(new Le(.92,.92,.25,20),y.orange,1.6),e(new qt(.9,.9,20),y.white,2.55),e(new Le(1.25,1.1,.3,20),y.dark,.2);for(let s=0;s<4;s++){let r=new ne(new Le(.05,.05,1.1,6),y.metal),o=s*Math.PI/2;r.position.set(Math.cos(o)*1.1,.25,Math.sin(o)*1.1),r.rotation.set(Math.sin(o)*.6,0,-Math.cos(o)*.6),n.add(r)}let t=_e(6750105,2.4,n,0,3.4,0),i=new ne(new qt(.8,4,12,1,!0),y.flame);return i.rotation.x=Math.PI,i.position.y=-1.8,n.add(i),{g:n,beacon:t,flame:i}}function Qp(n=!0){let e=u.player.pos,t=0,i=0;for(let a=0;a<30;a++){let l=Math.random()*Math.PI*2,c=50+Math.random()*130;if(t=Bt.clamp(e.x+Math.cos(l)*c,-Qe+180,Qe-180),i=Bt.clamp(e.z+Math.sin(l)*c,-Qe+180,Qe-180),!u.colliders.overlaps(t,i,4))break}let s=hS(),r=Ee(t,i);s.g.position.set(t,r+320,i),u.scene.add(s.g);let o={...s,x:t,z:i,y:r,t:0,landed:!1,life:300};return zs.push(o),Y.play("rumble"),u.events.emit("toast",`\u5730\u7403\u8865\u7ED9\u8231\u6B63\u5728\u964D\u843D \xB7 ${Math.round(Math.hypot(t-e.x,i-e.z))} \u7C73\u5916`),o}function uS(n){u.buildings.length&&!u.ended&&u.time.night<.5&&(Zp-=n,Zp<=0&&(Zp=240+Math.random()*180,Qp()));let e=performance.now()*.001;for(let t=zs.length-1;t>=0;t--){let i=zs[t];if(i.landed)i.life-=n,i.beacon.material.opacity=.55+Math.sin(e*4)*.4,i.life<=0&&(u.scene.remove(i.g),zs.splice(t,1));else{i.t+=n;let s=Math.min(1,i.t/8),r=1-Math.pow(1-s,2.4);i.g.position.y=i.y+320*(1-r),i.flame.scale.y=.6+(1-r)+Math.random()*.2;for(let o=0;o<2;o++)fe.flame(i.g.position);s>=1&&(i.landed=!0,i.flame.visible=!1,fe.ring(new w(i.x,i.y,i.z),2,70),Y.play("land"))}}}function Hx(n){return zs.find(e=>e.landed&&Math.hypot(e.x-n.x,e.z-n.z)<3.5)}function kx(n){let e=null,t=1e9;for(let i of zs){let s=Math.hypot(i.x-n.x,i.z-n.z);s<t&&(t=s,e=i)}return e?{p:e,d:t}:null}function e0(){return zs}function zx(n){let e=1+(u.cityLevel||0)*.4,t={iron:Math.round((20+Math.random()*20)*e),silicon:Math.round((15+Math.random()*15)*e),ice:Math.round((10+Math.random()*15)*e)};Math.random()<.6&&(t.titanium=Math.round((3+Math.random()*5)*e));for(let r in t)u.res[r]+=t[r],u.events.emit("pickup",{type:r,n:t[r],note:"\u8865\u7ED9\u8231"});let i=Math.round(10*e);u.rp=(u.rp||0)+i,u.stats.pods=(u.stats.pods||0)+1;let s=["\u5305\u88F9\u91CC\u5939\u7740\u4E00\u5F20\u5B69\u5B50\u753B\u7684\u753B\uFF1A\u4E00\u5EA7\u7EA2\u8272\u661F\u7403\uFF0C\u4E0A\u9762\u6709\u5F88\u591A\u5C0F\u623F\u5B50\u3002","\u9644\u8A00\uFF1A\u300C\u5730\u7403\u8FD9\u8FB9\u4E00\u5207\u90FD\u597D\u3002\u7167\u987E\u597D\u81EA\u5DF1\u3002\u300D","\u7BB1\u5B50\u5E95\u90E8\u6709\u4E00\u5305\u79CD\u5B50\uFF0C\u6807\u7B7E\u4E0A\u5199\u7740\uFF1A\u5411\u65E5\u8475\u3002","\u4E00\u5C01\u624B\u5199\u4FE1\uFF1A\u300C\u6211\u513F\u5B50\u5728\u4F60\u4EEC\u7684\u6B96\u6C11\u5730\u3002\u8BF7\u66FF\u6211\u544A\u8BC9\u4ED6\uFF0C\u5988\u5988\u4E3A\u4ED6\u9A84\u50B2\u3002\u300D","\u8865\u7ED9\u6E05\u5355\u6700\u540E\u4E00\u884C\uFF1A\u300C\u5DE7\u514B\u529B \xD72\u2014\u2014\u7ED9\u7B2C\u4E00\u4E2A\u62C6\u7BB1\u7684\u4EBA\u3002\u300D"];Pt("\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u8865\u7ED9",s[Math.floor(Math.random()*s.length)]+` \u9644\u5E26\u79D1\u7814\u6570\u636E ${i} \u70B9\u3002`),Y.play("craft"),fe.burst(new w(n.x,n.y+1.5,n.z),[.5,1,.7],50,6),u.scene.remove(n.g),zs.splice(zs.indexOf(n),1)}var ue=n=>document.getElementById(n),ru,r0,be,ho={},o0={mars:"MARS",europa:"EUROPA",kepler:"KEPLER-442b"},dS=["I","II","III","IV","V","VI"];function Zx(n){ru=n,document.body.insertAdjacentHTML("afterbegin",Tx()),r0=ue("minimap"),be=r0.getContext("2d"),ue("pl-cn").textContent=xe.name,ue("kick-planet").textContent=o0[it],ue("hotbar").innerHTML=Sr.map((e,t)=>`<div class="slot" data-i="${t}"><span class="key">${t+1}</span><span class="ic">${mt(e.icon)}</span><span class="nm">${e.name}</span></div>`).join(""),ue("res").innerHTML=Object.entries(sn).map(([e,t])=>`<div class="r" id="r-${e}" style="--rc:${t.color}"><span class="ic">${mt(e)}</span><span class="tx"><small>${t.name}</small><b>0</b></span></div>`).join(""),u.events.on("toast",e=>rn(e)),u.events.on("pickup",e=>pS(e)),u.events.on("hurt",e=>{document.body.classList.remove("glitch"),document.body.offsetWidth,document.body.classList.add("glitch"),clearTimeout(u._gl),u._gl=setTimeout(()=>document.body.classList.remove("glitch"),320)}),document.querySelectorAll("[data-close]").forEach(e=>e.addEventListener("click",()=>{Y.play("ui"),On(!0)})),document.querySelectorAll(".menu button, .bp-tabs button").forEach(e=>e.addEventListener("mouseenter",()=>Y.play("tick")))}var Ox={"\u2713":["check","good"],"\u26A0":["warn","warn"],"\u{1F527}":["wrench",""],"\u2600":["sun",""],"\u2604":["meteor",""],"\u{1F680}":["ship",""]};function rn(n,e="radio",t=""){let i=[...n][0];if(Ox[i]&&([e,t]=Ox[i],n=n.slice(i.length).trim()),t==="warn"||e==="boss")return fS(n,e,t);let s=ue("log"),r=[...s.children].find(a=>a.dataset.t===n&&!a.classList.contains("out"));if(r){let a=(+r.dataset.n||1)+1;r.dataset.n=a,r.querySelector("em").textContent="\xD7"+a,clearTimeout(r._to),r._to=setTimeout(()=>a0(r),5e3);return}let o=document.createElement("div");for(o.className="ev "+t,o.dataset.t=n,o.innerHTML=`${mt(e)}<span>${n}</span><em></em>`,s.appendChild(o);s.children.length>3;)s.firstChild.remove();o._to=setTimeout(()=>a0(o),5e3)}function a0(n){n.classList.add("out"),setTimeout(()=>n.remove(),600)}var Fx,Bx=0,Gx=0;function fS(n,e,t){let i=e==="boss"?2:1,s=performance.now();if(i<Bx&&s<Gx){let o=ue("log"),a=document.createElement("div");for(a.className="ev warn",a.innerHTML=`${mt(e==="radio"?"warn":e)}<span>${n}</span><em></em>`,o.appendChild(a);o.children.length>3;)o.firstChild.remove();setTimeout(()=>a0(a),5e3);return}Bx=i,Gx=s+4500;let r=ue("alert");r.className="show "+(t==="good"?"good":""),r.innerHTML=`${mt(e==="radio"?"warn":e)}<span>${n}</span>`,Y.play("alarm"),clearTimeout(Fx),Fx=setTimeout(()=>{r.className=""},4500)}var t0={};function pS({type:n,n:e,note:t}){Y.play("pickup");let i=t0[n];i&&i.el.isConnected?(i.n+=e,clearTimeout(i.to)):(i=t0[n]={n:e,el:document.createElement("div")},i.el.className="feed",ue("feed").appendChild(i.el));let s=sn[n];i.el.style.setProperty("--rc",s.color),i.el.innerHTML=`<span class="nm">${t||s.name}</span>${mt(n)}<span class="q">+${i.n}</span>`,i.el.classList.remove("out"),i.to=setTimeout(()=>{i.el.classList.add("out"),setTimeout(()=>{i.el.remove(),delete t0[n]},500)},1800);let r=ue("r-"+n);r.classList.remove("flash"),r.offsetWidth,r.classList.add("flash")}var tu=[],n0=!1;function uo(n){if(n0){tu.length=0,tu.push(n);return}n0=!0,setTimeout(()=>{n0=!1,tu.length&&uo(tu.shift())},5200);let e=ue("chapter"),t=Ti.indexOf(n),i=n.k||(t>=0?`CHAPTER ${String(t+1).padStart(2,"0")}`:""),s=n.title.replace(/^第.章 · |^终章 · /,"");e.innerHTML=`<div class="k">${i}</div><div class="t">${s}</div><div class="ln"></div><div class="s">${n.sub}</div>`,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}var mS=["build","craft","pause","starmap","archive","research","trade","mapscr"],Vx=null;function gS(n){let e=ue(n);e.classList.remove("closing"),e.classList.add("opening"),setTimeout(()=>e.classList.remove("opening"),700),e.querySelectorAll(".bp-grid, .people, .achv, .kv, #starmap-list, .opts").forEach(t=>{t.classList.remove("stagger"),t.offsetWidth,t.classList.add("stagger"),[...t.children].forEach((i,s)=>i.style.setProperty("--i",Math.min(s,18))),setTimeout(()=>t.classList.remove("stagger"),1400)})}function ou(n){n&&(n.classList.remove("swap"),n.offsetWidth,n.classList.add("swap"))}function ds(n){On(!1,!0),u.menuOpen=n,ue(n).classList.remove("hidden"),document.body.classList.add("menu-open");for(let e in Rr)delete Rr[e];if(document.pointerLockElement&&document.exitPointerLock(),Y.play("open"),n==="build"){if(!ho.solar)try{ho=Rx(Cp.filter(e=>!ls(e).hide))}catch{ho={}}c0()}n==="craft"&&p0(),n==="research"&&su(),n==="trade"&&Xl(),n==="mapscr"&&u0(),n==="archive"&&(ue("archive-body").innerHTML=m0()),n==="pause"&&(ue("pause-pane").innerHTML=""),gS(n)}function On(n,e=!1){clearTimeout(Vx);let t=mS.filter(s=>!ue(s).classList.contains("hidden"));e||!t.length?t.forEach(s=>{ue(s).classList.add("hidden"),ue(s).classList.remove("closing")}):(t.forEach(s=>ue(s).classList.add("closing")),Vx=setTimeout(()=>t.forEach(s=>{ue(s).classList.add("hidden"),ue(s).classList.remove("closing")}),260)),e||document.body.classList.remove("menu-open");let i=u.menuOpen;u.menuOpen=!1,i==="build"&&!At.type&&(hn.index=0),n&&u.requestLock()}function d0(n){ue("pause-pane").innerHTML=n,ou(ue("pause-pane"));let e=ue("pause-pane").querySelector(".achv, .kv, .people");e&&(e.classList.add("stagger"),[...e.children].forEach((t,i)=>t.style.setProperty("--i",Math.min(i,18))))}var l0={all:"\u5168\u90E8",life:"\u751F\u5B58",city:"\u57CE\u5E02",industry:"\u5DE5\u4E1A",defense:"\u9632\u5FA1",stellar:"\u661F\u9645"},nu="all",us=null;function Kx(n){ue(n).innerHTML=Object.entries(sn).map(([e,t])=>`<span style="--rc:${t.color}">${mt(e)}${u.res[e]}</span>`).join("")}function Jx(n){return`<div class="need">${Object.entries(n).map(([e,t])=>`<div class="row ${u.res[e]>=t?"":"lack"}" style="--rc:${sn[e].color}">${mt(e)}<span class="nm">${sn[e].name}</span>${Math.floor(u.res[e])} / ${t}</div>`).join("")}</div>`}function c0(){Kx("bp-res");let n=Cp.filter(i=>!ls(i).hide),e=["all",...Object.keys(l0).filter(i=>i!=="all"&&n.some(s=>zn[s].cat===i))];ue("bp-tabs").innerHTML=e.map(i=>`<button data-c="${i}" class="${i===nu?"on":""}">${l0[i]}</button>`).join(""),ue("bp-tabs").querySelectorAll("button").forEach(i=>i.addEventListener("click",()=>{nu=i.dataset.c,Y.play("tick"),c0()}));let t=n.filter(i=>nu==="all"||zn[i].cat===nu);(!us||!t.includes(us))&&(us=t.find(i=>ls(i).ok)||t[0]),ue("build-list").innerHTML=t.map(i=>{let s=zn[i],r=ls(i),o=ki(s.cost);return`<div class="tile ${r.ok?"":"locked"} ${o?"":"poor"} ${i===us?"sel":""}" data-k="${i}">
      <div class="th">${ho[i]?`<img src="${ho[i]}" alt="">`:mt(s.icon)}</div>
      ${r.ok?"":`<div class="lk">${mt("lock")}</div>`}
      <div class="nm">${s.name}</div><div class="cs">${r.ok?sa(s.cost):""}</div></div>`}).join(""),ue("build-list").querySelectorAll(".tile").forEach(i=>{i.addEventListener("click",()=>{us=i.dataset.k,Y.play("tick"),c0()}),i.addEventListener("dblclick",()=>f0(i.dataset.k))}),vS()}function xS(n){let e=zn[n],t=ls(n);return it==="mars"&&e.chapter>u.chapter?`\u5728\u300C${Ti[e.chapter].title}\u300D\u89E3\u9501`:t.why}function vS(){let n=us;if(!n){ue("bp-detail").innerHTML="";return}let e=zn[n],t=ls(n),i=ki(e.cost),s=[];e.power&&s.push(["\u7535\u529B",`${e.power>0?"+":""}${e.power}`,e.power>0?"pos":"neg"]),e.housing&&s.push(["\u4F4F\u623F",`${e.housing} \u4EBA`]),e.o2&&s.push(["\u4F9B\u6C27",`${e.o2} \u4EBA`]),e.food&&s.push(["\u98DF\u7269",`${e.food} \u4EBA`]),e.water&&s.push(["\u7528\u6C34",`${e.water} \u4EBA`]),e.life&&s.push(["\u8865\u6C27\u534A\u5F84",`${e.life} m`]),e.range&&s.push(["\u5C04\u7A0B",`${e.range} m`]),s.push(["\u8010\u4E45",e.hp]),ue("bp-detail").innerHTML=`<div class="pv">${ho[n]?`<img src="${ho[n]}" alt="">`:mt(e.icon)}</div>
    <div class="cat">${l0[e.cat]||""} \xB7 BLUEPRINT</div><h3>${e.name}</h3>
    <div class="ds">${e.desc}</div>
    <div class="stats">${s.map(r=>`<div><small>${r[0]}</small><b class="${r[2]||""}">${r[1]}</b></div>`).join("")}</div>
    ${t.ok?Jx(e.cost):`<div class="why">${mt("lock")} ${xS(n)}</div>`}
    <button class="go" ${t.ok?"":"disabled"}>${t.ok?i?"\u5F00\u59CB\u5EFA\u9020":"\u653E\u7F6E\u84DD\u56FE\uFF08\u8D44\u6E90\u4E0D\u8DB3\uFF09":"\u5C1A\u672A\u89E3\u9501"}</button>`,ue("bp-detail").querySelector(".go").addEventListener("click",()=>f0(n)),Rr["bp-detail"]!==us&&(Rr["bp-detail"]=us,ou(ue("bp-detail")))}function f0(n){let e=zn[n];if(!ls(n).ok){Y.play("deny");return}Y.play("ui"),At.rot=0,no(n),hn.index=2,On(!0),ki(e.cost)||rn("\u8D44\u6E90\u4E0D\u8DB3\uFF0C\u653E\u7F6E\u524D\u5148\u53BB\u91C7\u96C6\u5427","warn","warn")}function jx(n){u.menuOpen==="build"&&n.code==="Enter"&&us&&f0(us),u.menuOpen==="craft"&&n.code==="Enter"&&Ai&&h0(Ai)}var Ai=null;function p0(){Kx("cr-res");let n=Object.keys(Ma);Ai||(Ai=n.find(s=>!u.upgrades[s])||n[0]),ue("craft-list").innerHTML=n.map(s=>{let r=Ma[s],o=u.upgrades[s],a=ki(r.cost),l=r.need&&!u.upgrades[r.need];return`<div class="tile ${o?"done":""} ${a&&!l?"":"poor"} ${s===Ai?"sel":""}" data-k="${s}">
      ${o?'<span class="tag">\u5DF2\u88C5\u5907</span>':""}
      <div class="th">${mt(r.icon)}</div><div class="nm">${r.name}</div><div class="cs">${o?"":sa(r.cost)}</div></div>`}).join(""),ue("craft-list").querySelectorAll(".tile").forEach(s=>{s.addEventListener("click",()=>{Ai=s.dataset.k,Y.play("tick"),p0()}),s.addEventListener("dblclick",()=>h0(s.dataset.k))});let e=Ma[Ai],t=u.upgrades[Ai],i=e.need&&!u.upgrades[e.need];ue("craft-detail").innerHTML=`<div class="pv">${mt(e.icon)}</div><div class="cat">EQUIPMENT</div><h3>${e.name}</h3>
    <div class="ds">${e.desc}</div>
    ${t?'<div class="why okc">\u5DF2\u5236\u9020\u5E76\u88C5\u5907</div>':i?`<div class="why">${mt("lock")} \u9700\u8981\u5148\u5236\u9020\u7B49\u79BB\u5B50\u6B65\u67AA</div>`:Jx(e.cost)}
    <button class="go" ${t||i||!ki(e.cost)?"disabled":""}>${t?"\u5DF2\u88C5\u5907":ki(e.cost)?"\u5236\u9020":"\u8D44\u6E90\u4E0D\u8DB3"}</button>`,ue("craft-detail").querySelector(".go").addEventListener("click",()=>h0(Ai)),Rr["craft-detail"]!==Ai&&(Rr["craft-detail"]=Ai,ou(ue("craft-detail")))}function h0(n){let e=Ma[n];if(u.upgrades[n]||e.need&&!u.upgrades[e.need]||!ki(e.cost)){Y.play("deny");return}xl(e.cost),u.upgrades[n]=!0,u.stats.crafted[n]=!0,Y.play("craft"),rn(`\u5236\u9020\u5B8C\u6210\uFF1A${e.name}`,e.icon,"good"),n==="tank"&&(u.player.o2=180),n==="rifle"&&(hn.index=1),u.events.emit("crafted",n),Ai=Object.keys(Ma).find(t=>!u.upgrades[t])||n,p0()}var Pa={unlocked:()=>!0,relicLeft:()=>!1,relicFound:()=>0},Vi=null;function su(){ue("rs-res").innerHTML=`<span style="--rc:var(--cyan)">${mt("book")}${Math.floor(u.rp||0)} \u79D1\u7814\u70B9</span><span style="--rc:var(--dim)"><small>+${zh().toFixed(2)}/\u79D2</small></span>`;let n=Object.keys(ma);Vi||(Vi=n.find(r=>!Gt(r))||n[0]),ue("research-list").innerHTML=n.map(r=>{let o=ma[r],a=Gt(r),l=(u.rp||0)>=o.cost;return`<div class="tile ${a?"done":""} ${l||a?"":"poor"} ${r===Vi?"sel":""}" data-k="${r}">${a?'<span class="tag">\u5DF2\u5B8C\u6210</span>':""}
      <div class="th">${mt(o.icon)}</div><div class="nm">${o.name}</div><div class="cs"><span class="cost ${l?"":"lack"}" style="--rc:var(--cyan)">${mt("book")}${o.cost}</span> <small>${o.cat}</small></div></div>`}).join(""),ue("research-list").querySelectorAll(".tile").forEach(r=>{r.addEventListener("click",()=>{Vi=r.dataset.k,Y.play("tick"),su()}),r.addEventListener("dblclick",()=>{Ep(r.dataset.k)&&su()})});let e=ma[Vi],t=Gt(Vi),i=(u.rp||0)>=e.cost,s=u.buildings.some(r=>r.type==="lab");ue("research-detail").innerHTML=`<div class="pv">${mt(e.icon)}</div><div class="cat">${e.cat} \xB7 TECHNOLOGY</div><h3>${e.name}</h3>
    <div class="ds">${e.desc}</div>
    ${s?"":'<div class="why">\u5EFA\u9020\u7814\u7A76\u6240\u6765\u4EA7\u51FA\u79D1\u7814\u70B9\u6570</div>'}
    <div class="need"><div class="row ${i||t?"":"lack"}" style="--rc:var(--cyan)">${mt("book")}<span class="nm">\u79D1\u7814\u70B9\u6570</span>${Math.floor(u.rp||0)} / ${e.cost}</div></div>
    <button class="go" ${t||!i?"disabled":""}>${t?"\u5DF2\u5B8C\u6210":i?"\u5F00\u59CB\u7814\u7A76":"\u79D1\u7814\u70B9\u6570\u4E0D\u8DB3"}</button>`,ue("research-detail").querySelector(".go").addEventListener("click",()=>{Ep(Vi)&&(Vi=Object.keys(ma).find(r=>!Gt(r))||Vi,su())}),Rr["research-detail"]!==Vi&&(Rr["research-detail"]=Vi,ou(ue("research-detail")))}var Mn={x:0,y:0,s:80,a:0,id:null,t:0},iu=new w;function yS(n){let e=ue("lock"),t=u.aimTarget;if(t&&(iu.set(t.x,t.y,t.z).project(u.camera),iu.z<1)){let i=innerWidth,s=innerHeight,r=(iu.x*.5+.5)*i,o=(-iu.y*.5+.5)*s,a=Math.max(46,Math.min(260,t.r/Math.max(1,t.dist)*s*.9));Mn.id!==t.id&&(Mn.id=t.id,Mn.x=r,Mn.y=o,Mn.s=a*2.6,Mn.t=0,Y.play("tick"),e.querySelector(".lk-info").animate([{opacity:0,transform:"translateX(-10px)",clipPath:"inset(0 100% 0 0)"},{opacity:1,transform:"none",clipPath:"inset(0 0 0 0)"}],{duration:420,easing:"cubic-bezier(.2,.8,.2,1)",delay:80,fill:"backwards"}),e.querySelectorAll(".c").forEach(h=>h.animate([{opacity:0},{opacity:1,offset:.3},{opacity:.25,offset:.45},{opacity:1}],{duration:420})));let l=Math.min(1,n*14);Mn.x+=(r-Mn.x)*l,Mn.y+=(o-Mn.y)*l,Mn.s+=(a-Mn.s)*Math.min(1,n*9),Mn.t+=n,e.style.transform=`translate(${Mn.x-Mn.s/2}px, ${Mn.y-Mn.s/2}px)`,e.style.width=e.style.height=Mn.s+"px";let c="on "+t.kind;e.className!==c&&(e.className=c),e.style.setProperty("--lc",t.kind==="enemy"?"var(--red)":t.color||"var(--amber)"),e.querySelector(".lk-tag").textContent=t.tag,e.querySelector(".lk-name").textContent=t.name,e.querySelector(".lk-dist").textContent=t.dist.toFixed(1)+" M",e.querySelector(".lk-bar i").style.width=t.bar*100+"%";return}Mn.id=null,e.classList.remove("on")}var Wx=!1;function u0(){let n=ue("bigmap"),e=n.getContext("2d"),t=n.width,i=u.player,s=t/an,r=h=>(h+an/2)*s,o=h=>(h+an/2)*s;ue("map-title").textContent=`${xe.name} \xB7 ${xe.place}`,e.clearRect(0,0,t,t),e.globalAlpha=.9,e.drawImage(ru,0,0,t,t),e.globalAlpha=1,e.strokeStyle="rgba(142,231,255,.08)",e.lineWidth=1;for(let h=0;h<=t;h+=t/14)e.beginPath(),e.moveTo(h,0),e.lineTo(h,t),e.stroke(),e.beginPath(),e.moveTo(0,h),e.lineTo(t,h),e.stroke();e.strokeStyle="rgba(142,231,255,.7)",e.setLineDash([6,6]),e.lineWidth=1.5,e.beginPath(),e.arc(r(hi.x),o(hi.z),kn[u.cityLevel].r*s,0,Math.PI*2),e.stroke(),e.setLineDash([]);let a=(h,d,f,p)=>{e.fillStyle=p,e.beginPath(),e.moveTo(r(h),o(d)-f),e.lineTo(r(h)+f,o(d)),e.lineTo(r(h),o(d)+f),e.lineTo(r(h)-f,o(d)),e.fill()};for(let h of u.nodes)a(h.x,h.z,h.type==="titanium"?3.5:2.2,sn[h.type].color);for(let h of u.buildings){let d=Math.max(2.5,h.def.r*s);e.fillStyle=h.broken?"#ff5a45":"#f3efe8",e.fillRect(r(h.x)-d,o(h.z)-d,d*2,d*2)}for(let h of u.enemies)e.fillStyle="#ff5a45",e.beginPath(),e.arc(r(h.pos.x),o(h.pos.z),h.boss?6:2.5,0,7),e.fill();for(let h of qp())e.strokeStyle=h.found?"rgba(255,210,138,.4)":"#ffd28a",e.lineWidth=2,e.beginPath(),e.arc(r(h.x),o(h.z),6,0,7),e.stroke();for(let h of e0())e.fillStyle="#8bf0a9",e.beginPath(),e.arc(r(h.x),o(h.z),5,0,7),e.fill();if(e.fillStyle="#8bf0a9",e.fillRect(r(Mt.x)-3,o(Mt.z)-3,6,6),u.waypoint){let h=u.waypoint;e.strokeStyle="#ffb65c",e.lineWidth=2,e.beginPath(),e.arc(r(h.x),o(h.z),9,0,7),e.stroke(),e.beginPath(),e.moveTo(r(h.x),o(h.z)-14),e.lineTo(r(h.x),o(h.z)+14),e.moveTo(r(h.x)-14,o(h.z)),e.lineTo(r(h.x)+14,o(h.z)),e.stroke()}let l=Math.atan2(i.fwd.x,-i.fwd.z);e.save(),e.translate(r(i.pos.x),o(i.pos.z)),e.rotate(l),e.fillStyle="#fff",e.shadowColor="#8ee7ff",e.shadowBlur=10,e.beginPath(),e.moveTo(0,-10),e.lineTo(7,7),e.lineTo(0,3),e.lineTo(-7,7),e.closePath(),e.fill(),e.restore();let c=(h,d,f="dot")=>`<div class="lg"><i class="${f}" style="--c:${h}"></i>${d}</div>`;ue("map-legend").innerHTML=`<h4>\u56FE\u4F8B</h4>${c("#fff","\u4F60\u7684\u4F4D\u7F6E","arrow")}${c("#f3efe8","\u5EFA\u7B51","sq")}${Object.values(sn).map(h=>c(h.color,h.name,"dia")).join("")}${c("#ffd28a","\u9057\u8FF9","ring")}${c("#8bf0a9","\u8865\u7ED9\u8231 / \u7740\u9646\u8231")}${c("#ff5a45","\u9508\u8680\u86DB")}${c("#8ee7ff","\u6B96\u6C11\u5730\u9886\u5730","dash")}
    <h4>\u5BFC\u822A</h4><p>\u70B9\u51FB\u5730\u56FE\u4EFB\u610F\u4F4D\u7F6E\u8BBE\u7F6E\u5BFC\u822A\u70B9\uFF0C\u7F57\u76D8\u4F1A\u6307\u5411\u5B83\uFF0C\u5730\u9762\u4F1A\u51FA\u73B0\u5149\u67F1\u3002</p>${u.waypoint?'<button class="go small" id="wp-clear">\u6E05\u9664\u5BFC\u822A\u70B9</button>':""}`,ue("wp-clear")?.addEventListener("click",()=>{u.waypoint=null,Y.play("tick"),u0()}),Wx||(Wx=!0,n.addEventListener("click",h=>{let d=n.getBoundingClientRect(),f=(h.clientX-d.left)/d.width*an-an/2,p=(h.clientY-d.top)/d.height*an-an/2;u.waypoint={x:f,z:p},Y.play("ui"),u0()}))}var Tr="iron",Os="silicon",Ra=10;function Xl(){ue("tr-res").innerHTML=Object.entries(sn).map(([t,i])=>`<span style="--rc:${i.color}">${mt(t)}${Math.floor(u.res[t])}</span>`).join("");let n=t=>Object.entries(sn).map(([i,s])=>`<button class="rs ${i===t?"on":""}" data-k="${i}" style="--rc:${s.color}">${mt(i)}<span>${s.name}</span><b>${Math.floor(u.res[i])}</b></button>`).join(""),e=bp(Tr,Os,Ra);ue("trade-body").innerHTML=`<div class="tcol"><h4>\u4EA4\u51FA</h4><div class="rsl" id="tr-from">${n(Tr)}</div></div>
    <div class="tmid"><div class="amt">${[10,25,50,100].map(t=>`<button class="${t===Ra?"on":""}" data-n="${t}">${t}</button>`).join("")}</div>
      <div class="deal"><span style="--rc:${sn[Tr].color}">${mt(Tr)}${Ra}</span><i>\u2192</i><span style="--rc:${sn[Os].color}">${mt(Os)}${e}</span></div>
      <div class="note2">\u6C47\u7387\u6309\u5730\u7403\u5E02\u573A\u4EF7\u8BA1\u7B97\uFF0C\u542B 20% \u8FD0\u8F93\u635F\u8017</div>
      <button class="go" ${Tr===Os||e<=0||u.res[Tr]<Ra?"disabled":""}>\u4EA4\u6613</button></div>
    <div class="tcol"><h4>\u6362\u53D6</h4><div class="rsl" id="tr-to">${n(Os)}</div></div>`,ue("tr-from").querySelectorAll(".rs").forEach(t=>t.addEventListener("click",()=>{Tr=t.dataset.k,Y.play("tick"),Xl()})),ue("tr-to").querySelectorAll(".rs").forEach(t=>t.addEventListener("click",()=>{Os=t.dataset.k,Y.play("tick"),Xl()})),ue("trade-body").querySelectorAll(".amt button").forEach(t=>t.addEventListener("click",()=>{Ra=+t.dataset.n,Y.play("tick"),Xl()})),ue("trade-body").querySelector(".go").addEventListener("click",()=>{let t=I1(Tr,Os,Ra);t&&rn(`\u4EA4\u6613\u5B8C\u6210\uFF1A\u83B7\u5F97${sn[Os].name} ${t}`,Os,"good"),Xl()})}function m0(){let n=u.colony,e=u.stats,t=e.mined.iron+e.mined.silicon+e.mined.ice+e.mined.titanium,i=[["\u4EBA\u53E3",n.pop],["\u57CE\u5E02\u7B49\u7EA7",kn[u.cityLevel].name],["\u8BBE\u65BD",u.buildings.length],["\u706B\u661F\u65E5",u.time.day],["\u7535\u529B",`${Math.round(n.powerProd)} / ${n.powerUse}`],["\u9057\u8FF9",`${hs().found} / ${hs().total}`],["\u53EF\u5BB9\u7EB3",n.support],["\u91C7\u96C6\u8D44\u6E90",t],["\u51FB\u9000\u9508\u8680\u86DB",e.kills],["\u884C\u9A76\u91CC\u7A0B",`${((e.driven||0)/1e3).toFixed(1)} km`],["\u5C45\u6C11\u4EA4\u8C08",(e.talked||[]).length],["\u5E78\u798F\u5EA6",u.morale??"\u2014"],["\u8865\u7ED9\u8231",e.pods||0]],s=mn.visited||[],r=Object.keys(qn).map(l=>{let c=l===it?{pop:n.pop}:s.find(h=>h.id===l);return`<div><small>${qn[l].name}</small><b>${c?c.pop+" \u4EBA":"\u2014"}</b></div>`}).join(""),o=u.colonists.map(l=>`<div class="person" data-i="${[...l.name][0]}"><span class="pn">${l.name}</span><span class="pj">${l.job}</span><div class="pl">\u201C${l.line}\u201D</div></div>`).join(""),a=n.pop-u.colonists.length;return`<h3>\u6982\u51B5 \xB7 ${xe.name}</h3><div class="kv">${i.map(l=>`<div><small>${l[0]}</small><b>${l[1]}</b></div>`).join("")}</div>
    ${u.moraleFactors&&n.pop?`<h3>\u5E78\u798F\u5EA6\u6784\u6210</h3><div class="kv">${u.moraleFactors.map(l=>`<div><small>${l[0]}</small><b style="color:${l[1]>=0?"var(--green)":"var(--red)"}">${l[1]>0?"+":""}${Math.round(l[1])}</b></div>`).join("")}</div>`:""}
    <h3>\u4EBA\u7C7B\u7684\u8DB3\u8FF9</h3><div class="kv">${r}<div><small>\u661F\u9645\u603B\u4EBA\u53E3</small><b>${s.filter(l=>l.id!==it).reduce((l,c)=>l+c.pop,0)+n.pop}</b></div></div>
    <h3>\u5C45\u6C11\u540D\u518C</h3>${o?`<div class="people">${o}</div>`:'<p style="color:var(--dim)">\u8FD8\u6CA1\u6709\u5C45\u6C11\u3002\u5EFA\u597D\u4F4F\u623F\u3001\u6C27\u6C14\u3001\u98DF\u7269\u3001\u6C34\u548C\u7740\u9646\u573A\uFF0C\u79FB\u6C11\u98DE\u8239\u5C31\u4F1A\u5230\u6765\u3002</p>'}
    ${a>0?`<p style="color:var(--dim);margin-top:14px">\u2026\u2026\u4EE5\u53CA\u53E6\u5916 ${a} \u4F4D\u5C45\u6C11\u3002</p>`:""}`}var Aa={},$x={},Rr={},i0=0,Xx="",Ca=0,qx="";function g0(n,e){let t=u.player,i=u.colony;if(i0-=n,i0<=0){i0=.2;let p=w1(),g=kn[u.cityLevel],v=p?Math.min(1,Math.min(i.pop/p.pop,u.buildings.length/Math.max(1,p.b))):1,x=`<span class="lv">LV.${dS[u.cityLevel]}</span><span class="nm">${g.name}</span>${p?`<div class="pg"><i style="width:${v*100}%"></i></div><div class="nx">\u4E0B\u4E00\u7EA7\u300C${p.name}\u300D\xB7 \u4EBA\u53E3 ${Math.min(i.pop,p.pop)}/${p.pop} \xB7 \u8BBE\u65BD ${Math.min(u.buildings.length,p.b)}/${p.b}</div>`:'<div class="nx">\u5DF2\u8FBE\u5230\u6700\u9AD8\u7B49\u7EA7</div>'}`;ue("city").dataset.k!==x&&(ue("city").dataset.k=x,ue("city").innerHTML=x);let m="";if(u.buildings.length){if(m+=`<div class="st ${i.deficit?"warn":""}">${mt("power")}<div><small>\u7535\u529B</small><b>${Math.round(i.powerProd)}<em>/${i.powerUse}</em></b></div></div>`,m+=`<div class="st">${mt("pop")}<div><small>\u4EBA\u53E3</small><b>${i.pop}<em>/${i.support}</em></b></div></div>`,i.pop>0&&u.morale!==void 0){let P=u.morale;m+=`<div class="st ${P<35?"warn":P>=75?"tf":""}">${mt("star")}<div><small>\u5E78\u798F</small><b>${P}</b></div></div>`,P<35&&(m+=`<div class="chip">${mt("warn")}\u5C45\u6C11\u4E0D\u5F00\u5FC3\uFF1A\u5EFA\u7167\u660E\u706F\u3001\u5E7F\u573A\u3001\u6E29\u5BA4\uFF0C\u4FEE\u597D\u53D7\u635F\u8BBE\u65BD</div>`)}if(u.terraform>0&&(m+=`<div class="st tf">${mt("planet")}<div><small>\u5927\u6C14\u6539\u9020</small><b>${Math.floor(u.terraform*100)}%</b></div></div>`),i.deficit&&(m+=`<div class="chip">${mt("warn")}\u7535\u529B\u4E0D\u8DB3\uFF1A\u591A\u5EFA\u592A\u9633\u80FD\u6216\u53CD\u5E94\u5806</div>`),i.housing&&u.buildings.some(P=>P.type==="beacon")&&i.support<=i.pop){let P=[["housing","\u4F4F\u623F","house","\u5C45\u4F4F\u7A79\u9876"],["o2","\u6C27\u6C14","o2","\u5236\u6C27\u7AD9"],["food","\u98DF\u7269","food","\u6E29\u5BA4"],["water","\u6C34","water","\u6C34\u51B0\u63D0\u53D6\u5668"]].sort((S,b)=>i[S[0]]-i[b[0]])[0];m+=`<div class="chip">${mt(P[2])}\u7F3A\u5C11${P[1]}\uFF1A\u5EFA\u9020${P[3]}\u6765\u8FCE\u63A5\u65B0\u79FB\u6C11</div>`}}ue("colony").dataset.k!==m&&(ue("colony").dataset.k=m,ue("colony").innerHTML=m);let _=u.storm>.3?"\u6C99\u5C18\u66B4":u.raining?"\u964D\u96E8":"";ue("clock").innerHTML=rp().replace(/^.*? · /,"")+(_?`<span class="wx">${_}</span>`:"");let E=Ti[u.chapter],M=u.chapter,A=(ti()?[]:E.goals).map((P,S)=>{let b=u.goalDone?.[M+":"+S],U=P.prog&&!b?P.prog():"",O=/^(\d+)\/(\d+)$/.exec(U);return`<div class="g ${b?"done":""}"><span class="cb"></span><div class="gx">${P.text}${U?`<small>${U}</small>`:""}${O?`<div class="gp"><i style="width:${Math.min(100,O[1]/O[2]*100)}%"></i></div>`:""}</div></div>`}).join(""),C=u.requests||[];C.length?A+='<div class="rq-h">\u5C45\u6C11\u59D4\u6258</div>'+C.map(P=>{let S=U1(P,Pa);return`<div class="g rq"><span class="cb"></span><div class="gx">${P.text}<small>${P.giver}${P.n>1?` \xB7 ${S}/${P.n}`:""}</small>${P.n>1?`<div class="gp"><i style="width:${S/P.n*100}%"></i></div>`:""}</div></div>`}).join(""):ti()&&(A+='<div class="g"><div class="gx" style="color:var(--dim)">\u5148\u5EFA\u4E00\u5EA7\u8BBE\u65BD\uFF0C\u5C45\u6C11\u4EEC\u4F1A\u5F00\u59CB\u63D0\u51FA\u59D4\u6258</div></div>'),(u.rp>.5||u.buildings.some(P=>P.type==="lab"))&&(A+=`<div class="rq-h">\u79D1\u7814 <b>${Math.floor(u.rp)}</b> \u70B9 <small>+${zh().toFixed(1)}/\u79D2 \xB7 T \u6253\u5F00</small></div>`),A!==qx&&(qx=A,ue("goals").innerHTML=A,ue("goal-ch").textContent=ti()?`\u81EA\u7531\u6A21\u5F0F \xB7 ${pa[u.diffKey||"normal"].name}`:E.title.replace(/ · /," ")),document.querySelectorAll("#hotbar .slot").forEach((P,S)=>{P.classList.toggle("on",S===hn.index),P.classList.toggle("lock",!!(Sr[S].need&&!u.upgrades[Sr[S].need]))})}for(let p in sn){Aa[p]=Aa[p]??u.res[p];let g=u.res[p]-Aa[p];Aa[p]=Math.abs(g)<.5?u.res[p]:Aa[p]+g*Math.min(1,n*7+.02);let v=Math.floor(Aa[p]+1e-4),x=$x[p]||($x[p]=ue("r-"+p).querySelector("b"));x.textContent!=v&&(x.textContent=v)}s0("d-hp",70,t.health/t.maxHealth),s0("d-o2",58,t.o2/t.maxO2),s0("d-en",47,t.energy/100),ue("d-o2n").textContent=Math.ceil(t.o2/t.maxO2*100),ue("d-hpn").textContent=Math.ceil(t.health),ue("d-enn").textContent=Math.ceil(t.energy),ue("pl-en").textContent=rp().split(" \xB7 ")[0]===xe.name?o0[it]:o0[it];let s=ue("o2-state"),r=t.inLife?`${mt("o2")} \u8865\u6C27\u4E2D`:t.o2<t.maxO2*.2?`${mt("warn")} \u6C27\u6C14\u4E0D\u8DB3\uFF0C\u7ACB\u5373\u8FD4\u56DE`:"";s.dataset.k!==r&&(s.dataset.k=r,s.innerHTML=r),s.className=t.inLife?"ok":"bad",ue("suit").classList.toggle("low",t.o2<t.maxO2*.2&&!t.inLife);let o=nx(),a=ue("radio");if(o){Xx!==o[1]&&(Xx=o[1],Ca=0,a.querySelector(".who").textContent=o[0]);let p=o[1].length;Ca<p&&(Ca=Math.min(p,Ca+n*26+1e-4),n===0&&(Ca=p));let g=Math.floor(Ca);a.querySelector(".txt").innerHTML=o[1].slice(0,g)+(g<p?'<span class="cur"></span>':""),a.classList.toggle("idle",g>=p),a.classList.add("show")}else a.classList.remove("show");let l=ue("prompt");l.dataset.k!==(e.prompt||"")&&(l.dataset.k=e.prompt||"",l.innerHTML=e.prompt||""),l.classList.toggle("show",!!e.prompt),l.classList.toggle("drive",!!u.driving);let c=ue("buildhint");if(hn.id==="build"&&At.type&&!u.menuOpen){let p=zn[At.type];c.innerHTML=`<div class="bn">${p.name}</div><div>${sa(p.cost)}</div>
      <div class="st">${At.valid?'<span class="okc">\u5DE6\u952E\u653E\u7F6E</span>':`<span class="badc">${At.reason}</span>`}</div>
      <div><kbd>R</kbd>\u65CB\u8F6C <kbd>\u53F3\u952E</kbd>\u53D6\u6D88 <kbd>B</kbd>\u66F4\u6362\u84DD\u56FE</div>`,c.classList.add("show")}else c.classList.remove("show");ue("hurt").style.opacity=Math.min(1,t.hurtT*1.6+(t.o2<=0?.5+Math.sin(performance.now()*.01)*.2:0)),ue("lowo2").style.opacity=!t.inLife&&t.o2<t.maxO2*.2?(.4+Math.sin(performance.now()*.006)*.3)*(1-t.o2/(t.maxO2*.2)*.6):0,ue("crosshair").className=e.crossClass||"",yS(n);let h=ue("tip");h.dataset.k!==(e.tip||"")&&(h.dataset.k=e.tip||"",h.innerHTML=e.tip?`<div class="tk">\u63D0\u793A</div><div>${e.tip}</div>`:""),h.classList.toggle("show",!!e.tip);let d=ux(),f=d&&Math.hypot(d.pos.x-t.pos.x,d.pos.z-t.pos.z)<260;ue("bossbar").classList.toggle("hidden",!f),f&&(ue("bossbar").querySelector("i").style.width=Math.max(0,d.hp/d.maxHp*100)+"%"),MS(),_S()}function s0(n,e,t){let i=2*Math.PI*e,s=ue(n);s.style.strokeDasharray=i,s.style.strokeDashoffset=i*(1-Math.max(0,Math.min(1,t)))}var Yx={0:"\u5317",45:"\u4E1C\u5317",90:"\u4E1C",135:"\u4E1C\u5357",180:"\u5357",225:"\u897F\u5357",270:"\u897F",315:"\u897F\u5317"};function MS(){let n=u.player,e=n.fwd,t=Math.atan2(e.x,-e.z)*180/Math.PI,i=80,s=520,r=f=>s/2+f/i*(s/2),o="",a=Math.ceil((t-i)/5)*5;for(let f=a;f<=t+i;f+=5){let p=f-t,g=(f%360+360)%360;Yx[g]!==void 0?o+=`<span class="lb ${g%90===0?"big":""}" style="left:${r(p)}px">${Yx[g]}</span>`:o+=`<span class="tk ${g%15===0?"m":""}" style="left:${r(p)}px"></span>`}let l=(f,p)=>Math.atan2(f-n.pos.x,-(p-n.pos.z))*180/Math.PI,c=[{c:"home",t:`${mt("house")}${Math.round(Math.hypot(Mt.x-n.pos.x,Mt.z-n.pos.z))}m`,a:l(Mt.x,Mt.z)}];if(u.upgrades.scanner){let f=null,p=1e9;for(let g of u.nodes)if(g.type==="titanium"){let v=Math.hypot(g.x-n.pos.x,g.z-n.pos.z);v<p&&(p=v,f=g)}f&&c.push({c:"ti",t:`${mt("titanium")}${Math.round(p)}m`,a:l(f.x,f.z)})}u.waypoint&&c.push({c:"ship",t:`${mt("star")}\u5BFC\u822A ${Math.round(Math.hypot(u.waypoint.x-n.pos.x,u.waypoint.z-n.pos.z))}m`,a:l(u.waypoint.x,u.waypoint.z)});let h=kx(n.pos);h&&c.push({c:"home",t:`${mt("ship")}\u8865\u7ED9 ${Math.round(h.d)}m`,a:l(h.p.x,h.p.z)});let d=Cx(n.pos);d&&c.push({c:"ship",t:`? ${Math.round(d.d)}m`,a:l(d.r.x,d.r.z)});for(let f of c){let p=(f.a-t+540)%360-180;Math.abs(p)<i&&(o+=`<span class="mk ${f.c}" style="left:${r(p)}px;top:16px">${f.t}</span>`)}ue("compass").innerHTML=o}function _S(){let n=u.player,e=r0.width,t=e/2-6,i=u.upgrades.scanner?220:110,s=ru.width/an;be.clearRect(0,0,e,e),be.save(),be.beginPath(),be.arc(e/2,e/2,t,0,Math.PI*2),be.clip(),be.fillStyle="#0c0807",be.fillRect(0,0,e,e),be.globalAlpha=.75;let r=t*2/(i*2);be.drawImage(ru,(n.pos.x-i+an/2)*s,(n.pos.z-i+an/2)*s,i*2*s,i*2*s,e/2-t,e/2-t,t*2,t*2),be.globalAlpha=1;let o=f=>(f-n.pos.x)*r+e/2,a=f=>(f-n.pos.z)*r+e/2;be.strokeStyle="rgba(255,255,255,.1)",be.lineWidth=1;for(let f of[.33,.66])be.beginPath(),be.arc(e/2,e/2,t*f,0,Math.PI*2),be.stroke();be.strokeStyle="rgba(127,230,255,.55)",be.setLineDash([3,4]),be.beginPath(),be.arc(o(hi.x),a(hi.z),kn[u.cityLevel].r*r,0,Math.PI*2),be.stroke(),be.setLineDash([]);let l=(f,p,g,v)=>{be.fillStyle=v,be.beginPath(),be.arc(o(f),a(p),g,0,Math.PI*2),be.fill()};for(let f of u.nodes){if(Math.abs(f.x-n.pos.x)>i||Math.abs(f.z-n.pos.z)>i)continue;let p=sn[f.type].color,g=o(f.x),v=a(f.z),x=f.type==="titanium"?3.2:2.2;be.fillStyle=p,be.beginPath(),be.moveTo(g,v-x),be.lineTo(g+x,v),be.lineTo(g,v+x),be.lineTo(g-x,v),be.fill()}for(let f of u.buildings){let p=Math.max(2,f.def.r*r*.8);be.fillStyle=f.broken?"#ff5a45":f.powered?"#ece6dc":"#ffb35c",be.fillRect(o(f.x)-p,a(f.z)-p,p*2,p*2)}be.fillStyle="#8dffb0";for(let f of u.colonists)be.fillRect(o(f.pos.x)-1,a(f.pos.z)-1,2,2);let c=Math.sin(performance.now()*.008)>0;for(let f of u.enemies)l(f.pos.x,f.pos.z,f.guardian?3.5:2.6,c?"#ff5a45":"#a02818");l(Mt.x,Mt.z,3,"#8dffb0");for(let f of e0())be.fillStyle="#8bf0a9",be.beginPath(),be.arc(o(f.x),a(f.z),4.5,0,Math.PI*2),be.fill();for(let f of qp())Math.abs(f.x-n.pos.x)>i*1.2||Math.abs(f.z-n.pos.z)>i*1.2||(be.strokeStyle=f.found?"rgba(255,210,138,.4)":"#ffd28a",be.lineWidth=1.5,be.beginPath(),be.arc(o(f.x),a(f.z),4,0,Math.PI*2),be.stroke());be.restore(),be.save(),be.translate(e/2,e/2),be.strokeStyle="rgba(236,230,220,.35)",be.lineWidth=1,be.beginPath(),be.arc(0,0,t+.5,0,Math.PI*2),be.stroke();for(let f=0;f<72;f++){let p=f/72*Math.PI*2,g=f%18===0?6:f%6===0?4:2;be.strokeStyle=f%18===0?"rgba(255,179,92,.9)":"rgba(236,230,220,.3)",be.beginPath(),be.moveTo(Math.sin(p)*(t+1),-Math.cos(p)*(t+1)),be.lineTo(Math.sin(p)*(t+1+g),-Math.cos(p)*(t+1+g)),be.stroke()}let h=Math.atan2(n.fwd.x,-n.fwd.z);be.rotate(h);let d=be.createRadialGradient(0,0,0,0,0,t*.6);d.addColorStop(0,"rgba(255,179,92,.35)"),d.addColorStop(1,"rgba(255,179,92,0)"),be.fillStyle=d,be.beginPath(),be.moveTo(0,0),be.arc(0,0,t*.6,-Math.PI/2-.55,-Math.PI/2+.55),be.closePath(),be.fill(),be.fillStyle="#fff",be.beginPath(),be.moveTo(0,-7),be.lineTo(5,5),be.lineTo(0,2.5),be.lineTo(-5,5),be.closePath(),be.fill(),be.restore()}function au(){let n=ue("boot"),e=["ARK OS 3.1  \xB7  VISOR LINK ESTABLISHED","\u751F\u547D\u7EF4\u6301 ........... \u6B63\u5E38","\u5B87\u822A\u670D\u6C14\u5BC6 ......... \u6B63\u5E38","\u5BFC\u822A\u4E0E\u7F57\u76D8 ......... \u6821\u51C6\u5B8C\u6210","\u6B96\u6C11\u5730\u6570\u636E\u94FE ....... \u5DF2\u540C\u6B65","\u5168\u606F\u6295\u5F71 ........... \u542F\u52A8"];n.innerHTML='<div class="bt-ring"></div>'+e.map((t,i)=>`<div class="bt-l" style="animation-delay:${.1+i*.16}s">${t}</div>`).join(""),n.className="show",document.body.classList.add("booting"),Y.play("open"),setTimeout(()=>{n.className="out",document.body.classList.remove("booting"),Y.play("chapter")},1500),setTimeout(()=>{n.className="",n.innerHTML=""},2300)}var Qx="starport-achv",cu=[{id:"first",name:"\u7B2C\u4E00\u6B65",desc:"\u5728\u5F02\u661F\u91C7\u96C6\u7B2C\u4E00\u5757\u77FF\u77F3",icon:"iron",check:()=>u.stats.mined.iron+u.stats.mined.silicon+u.stats.mined.ice>0},{id:"breathe",name:"\u547C\u5438",desc:"\u5EFA\u8D77\u7B2C\u4E00\u5EA7\u5236\u6C27\u7AD9",icon:"o2",check:()=>u.stats.built.oxygen>0},{id:"home",name:"\u7B2C\u4E00\u4E2A\u5BB6",desc:"\u5EFA\u9020\u5C45\u4F4F\u7A79\u9876",icon:"dome",check:()=>u.stats.built.habitat>0},{id:"welcome",name:"\u6B22\u8FCE\u56DE\u5BB6",desc:"\u8FCE\u63A5\u7B2C\u4E00\u6279\u79FB\u6C11",icon:"pop",check:()=>u.stats.arrived>0},{id:"listen",name:"\u503E\u542C\u8005",desc:"\u4E0E 8 \u4F4D\u5C45\u6C11\u4EA4\u8C08",icon:"radio",check:()=>(u.stats.talked||[]).length>=8},{id:"night",name:"\u957F\u591C\u5B88\u671B\u8005",desc:"\u51FB\u9000 15 \u53EA\u9508\u8680\u86DB",icon:"shield",check:()=>u.stats.kills>=15},{id:"guardian",name:"\u6676\u4F53\u730E\u4EBA",desc:"\u51FB\u8D25\u4E00\u53EA\u949B\u77FF\u5B88\u536B",icon:"titanium",check:()=>(u.stats.guardKills||0)>0},{id:"road",name:"\u516C\u8DEF\u65C5\u884C",desc:"\u9A7E\u9A76\u6F2B\u6E38\u8F66\u884C\u9A76 3 \u516C\u91CC",icon:"rover",check:()=>(u.stats.driven||0)>=3e3},{id:"meteor",name:"\u661F\u843D\u4E4B\u591C",desc:"\u91C7\u96C6\u4E00\u5757\u9668\u77F3",icon:"meteor",check:()=>(u.stats.meteorMined||0)>0},{id:"storm",name:"\u98CE\u66B4\u4E4B\u4E2D",desc:"\u7ECF\u5386\u4E00\u573A\u6C99\u5C18\u66B4",icon:"storm",check:()=>u.storm>.85},{id:"fly",name:"\u98DE\u7FD4",desc:"\u5236\u9020\u55B7\u6C14\u80CC\u5305",icon:"jet",check:()=>!!u.upgrades.jetpack},{id:"town",name:"\u5C0F\u9547",desc:"\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C\u5C0F\u9547\u300D",icon:"colony",check:()=>u.cityLevel>=2},{id:"metro",name:"\u5927\u90FD\u4F1A",desc:"\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C\u5927\u90FD\u4F1A\u300D",icon:"tower",check:()=>u.cityLevel>=4},{id:"fifty",name:"\u4E94\u5341\u4E2A\u706F\u706B",desc:"\u5355\u9897\u661F\u7403\u4EBA\u53E3\u8FBE\u5230 50",icon:"pop",check:()=>u.colony.pop>=50},{id:"reactor",name:"\u7B2C\u4E8C\u9897\u592A\u9633",desc:"\u70B9\u4EAE\u805A\u53D8\u53CD\u5E94\u5806",icon:"power",check:()=>u.stats.built.reactor>0},{id:"blue",name:"\u84DD\u8272\u5929\u7A7A",desc:"\u5B8C\u6210\u706B\u661F\u5927\u6C14\u6539\u9020",icon:"planet",check:()=>u.terraform>=1},{id:"europa",name:"\u51B0\u4E0B\u4E4B\u6D77",desc:"\u767B\u9646\u6728\u536B\u4E8C\xB7\u6B27\u7F57\u5DF4",icon:"ice",check:()=>it==="europa"},{id:"kepler",name:"\u53CC\u65E5\u4E4B\u5730",desc:"\u62B5\u8FBE\u5F00\u666E\u52D2-442b",icon:"sun",check:()=>it==="kepler"},{id:"civ",name:"\u661F\u9645\u6587\u660E",desc:"\u5EFA\u6210\u6587\u660E\u7EAA\u5FF5\u7891",icon:"monument",check:()=>u.stats.built.monument>0},{id:"relic",name:"\u56DE\u58F0",desc:"\u53D1\u73B0\u7B2C\u4E00\u5904\u9057\u8FF9",icon:"radio",check:()=>hs().found>0},{id:"archaeo",name:"\u8003\u53E4\u5B66\u5BB6",desc:"\u53D1\u73B0\u4E00\u9897\u661F\u7403\u4E0A\u7684\u5168\u90E8\u9057\u8FF9",icon:"book",check:()=>{let n=hs();return n.total>0&&n.found===n.total}},{id:"boss",name:"\u6676\u6BCD\u9668\u843D",desc:"\u5728\u6676\u6F6E\u4E4B\u591C\u51FB\u8D25\u6676\u6BCD",icon:"boss",check:()=>(u.stats.bossKills||0)>0},{id:"fleet",name:"\u65E0\u4EBA\u673A\u8230\u961F",desc:"\u65E0\u4EBA\u673A\u8FD0\u56DE 30 \u6279\u7269\u8D44",icon:"drone",check:()=>(u.stats.droneHauls||0)>=30},{id:"lv3",name:"\u7CBE\u76CA\u6C42\u7CBE",desc:"\u628A\u4E00\u5EA7\u5EFA\u7B51\u5347\u5230 3 \u7EA7",icon:"star",check:()=>u.buildings.some(n=>(n.level||1)>=3)},{id:"buddy",name:"\u597D\u642D\u6863",desc:"\u8BA9\u5C0F\u661F\u626B\u63CF 10 \u6B21",icon:"scanner",check:()=>(u.stats.scans||0)>=10},{id:"helper",name:"\u597D\u90BB\u5C45",desc:"\u5B8C\u6210 10 \u4E2A\u5C45\u6C11\u59D4\u6258",icon:"radio",check:()=>(u.stats.requests||0)>=10},{id:"science",name:"\u79D1\u5B66\u5BB6",desc:"\u5B8C\u6210 6 \u9879\u79D1\u7814",icon:"book",check:()=>Object.keys(u.tech||{}).length>=6},{id:"trader",name:"\u661F\u9645\u5546\u4EBA",desc:"\u5B8C\u6210 10 \u6B21\u661F\u9645\u8D38\u6613",icon:"ship",check:()=>(u.stats.traded||0)>=10},{id:"mail",name:"\u6765\u81EA\u5730\u7403\u7684\u4FE1",desc:"\u6253\u5F00 5 \u4E2A\u8865\u7ED9\u8231",icon:"ship",check:()=>(u.stats.pods||0)>=5},{id:"happy",name:"\u5B89\u5C45\u4E50\u4E1A",desc:"\u5C45\u6C11\u5E78\u798F\u5EA6\u8FBE\u5230 90",icon:"star",check:()=>u.colony.pop>=4&&(u.morale||0)>=90},{id:"fest",name:"\u6B96\u6C11\u5730\u8282",desc:"\u548C\u5C45\u6C11\u4E00\u8D77\u5728\u5E7F\u573A\u770B\u70DF\u82B1",icon:"star",check:()=>(u.stats.festivals||0)>0},{id:"photo",name:"\u6444\u5F71\u5E08",desc:"\u5728\u62CD\u7167\u6A21\u5F0F\u4E2D\u4FDD\u5B58\u4E00\u5F20\u7167\u7247",icon:"camera",check:()=>(u.stats.photos||0)>0},{id:"gather",name:"\u6545\u4E61\u7684\u5149",desc:"\u591C\u91CC\uFF0C\u5C45\u6C11\u4EEC\u805A\u5728\u5E7F\u573A\u4E0A\u770B\u5168\u606F\u5730\u7403",icon:"planet",check:()=>!!u.plazaSeen}],fo={};try{fo=JSON.parse(localStorage.getItem(Qx))||{}}catch{fo={}}var x0=[],v0=0,lu=0;function ev(n){if(v0-=n,lu-=n,v0<=0){v0=1;for(let t of cu){if(fo[t.id])continue;let i=!1;try{i=t.check()}catch{i=!1}if(i){fo[t.id]=Date.now(),x0.push(t);try{localStorage.setItem(Qx,JSON.stringify(fo))}catch{}}}}let e=document.getElementById("achv-pop");if(lu<=0&&e.classList.contains("show")&&e.classList.remove("show"),lu<=-.6&&x0.length){let t=x0.shift();e.innerHTML=`<div class="ai">${mt(t.icon)}</div><div><div class="k">ACHIEVEMENT UNLOCKED</div><div class="n">${t.name}</div><div class="d">${t.desc}</div></div>`,e.classList.add("show"),lu=4.5,Y.play("achv")}}function y0(){return`<h3>\u6210\u5C31 \xB7 ${cu.filter(e=>fo[e.id]).length} / ${cu.length}</h3><div class="achv">${cu.map(e=>`<div class="ach ${fo[e.id]?"on":""}"><div class="ai">${mt(e.icon)}</div><div><div class="an">${e.name}</div><div class="ad">${e.desc}</div></div></div>`).join("")}</div>`}var nv=!1,iv=[],sv=[],rv=[];function tv(n,e,t,i,s){let r=new Rt;r.setAttribute("position",new on(new Float32Array(n*3),3));let o=new li({size:t,map:Hn(),color:e,transparent:!0,opacity:i,depthWrite:!1,blending:s?ze:gi}),a=new vi(r,o);a.frustumCulled=!1,u.scene.add(a);let l=new Float32Array(n*3);for(let c=0;c<n;c++)l[c*3]=Math.random(),l[c*3+1]=Math.random()*Math.PI*2,l[c*3+2]=Math.random();return{p:a,seed:l,n}}function ES(){if(nv=!0,it==="mars")for(let n=0;n<3;n++){let e=tv(420,14195306,2.4,.45,!1);iv.push({...e,x:0,z:0,vx:0,vz:0,h:40+Math.random()*30,life:0,k:0})}else if(it==="europa"){let n=Is.slice(0,8).map(e=>({x:e.x+(Math.random()-.5)*e.r*.6,z:e.z+(Math.random()-.5)*e.r*.6}));n.push({x:60,z:70},{x:-90,z:-40},{x:120,z:140});for(let e of n){if(Math.abs(e.x)>Qe-200||Math.abs(e.z)>Qe-200)continue;let t=tv(500,15267583,2.6,.6,!0);sv.push({...t,x:e.x,z:e.z,y:Ee(e.x,e.z),t:Math.random()*30,on:0})}}else if(it==="kepler"){let n=new We(1,12,6,0,Math.PI*2,0,Math.PI/2);for(let e=0;e<34;e++){let t=.45+Math.random()*.4,i=new he().setHSL(t,.9,.6),s=new ne(n,new Ue({color:i,transparent:!0,opacity:.55,depthWrite:!1,blending:ze})),r=new xi(new ai({map:Hn(),color:i,transparent:!0,depthWrite:!1,blending:ze})),o=new ne(new qt(.6,3,6,1,!0),s.material);o.position.y=-1.6,o.rotation.x=Math.PI;let a=new de;a.add(s,r,o),r.scale.setScalar(6);let l=.6+Math.random()*1.2;a.scale.setScalar(l),u.scene.add(a),rv.push({g:a,m:s,s:r,x:(Math.random()-.5)*500,z:(Math.random()-.5)*500,alt:14+Math.random()*30,ph:Math.random()*6,sp:.5+Math.random()})}}}var p5=new w,M0=0;function ov(n){nv||ES();let e=u.player.pos,t=performance.now()*.001,i=1-u.time.night;for(let s of iv){if(s.life-=n,s.life<=0){let c=Math.random()*Math.PI*2,h=90+Math.random()*200;s.x=Bt.clamp(e.x+Math.cos(c)*h,-Qe+160,Qe-160),s.z=Bt.clamp(e.z+Math.sin(c)*h,-Qe+160,Qe-160);let d=Math.random()*Math.PI*2;s.vx=Math.cos(d)*3,s.vz=Math.sin(d)*3,s.life=40+Math.random()*40,s.h=35+Math.random()*40}s.x+=s.vx*n,s.z+=s.vz*n;let r=Math.min(1,s.life/5,(60-s.life)/5+1)*i*(1-u.storm)*(u.terraform<1?1:.2);s.k+=(r-s.k)*Math.min(1,n),s.p.material.opacity=.45*s.k;let o=s.p.geometry.attributes.position.array,a=Ee(s.x,s.z);for(let c=0;c<s.n;c++){let h=s.seed,d=(h[c*3]+t*.08*(.6+h[c*3+2]))%1,f=h[c*3+1]+t*(3+(1-d)*2),p=.8+d*d*9+h[c*3+2]*1.5,g=Math.sin(t*.7+d*4)*d*3;o[c*3]=s.x+Math.cos(f)*p+g,o[c*3+1]=a+d*s.h,o[c*3+2]=s.z+Math.sin(f)*p}s.p.geometry.attributes.position.needsUpdate=!0;let l=Math.hypot(e.x-s.x,e.z-s.z);l<8&&s.k>.5&&!u.driving&&(u.player.vel.x+=(e.x-s.x)/l*n*20,u.player.vel.z+=(e.z-s.z)/l*n*20)}M0-=n;for(let s of sv){s.t-=n,s.t<=0&&s.on<=0&&(s.on=9,s.t=25+Math.random()*30,Math.hypot(e.x-s.x,e.z-s.z)<120&&Y.play("rumble")),s.on-=n;let r=Bt.clamp(Math.min(s.on,9-s.on),0,1.5)/1.5;if(s.p.material.opacity=.6*r,r<=0)continue;let o=s.p.geometry.attributes.position.array,a=70;for(let l=0;l<s.n;l++){let c=s.seed,h=(c[l*3]+t*.35)%1,d=.4+h*9*c[l*3+2]+h*h*4;o[l*3]=s.x+Math.cos(c[l*3+1])*d,o[l*3+1]=s.y+Math.sin(h*Math.PI*.9)*a*(.6+c[l*3+2]*.4),o[l*3+2]=s.z+Math.sin(c[l*3+1])*d}s.p.geometry.attributes.position.needsUpdate=!0,Math.hypot(e.x-s.x,e.z-s.z)<40&&M0<=0&&(M0=.5,Y.play("jet"))}for(let s of rv){s.ph+=n*s.sp,s.x+=Math.sin(s.ph*.3)*n*2,s.z+=Math.cos(s.ph*.23)*n*2,Math.abs(s.x-e.x)>260&&(s.x=e.x-Math.sign(s.x-e.x)*250),Math.abs(s.z-e.z)>260&&(s.z=e.z-Math.sign(s.z-e.z)*250);let r=Ee(s.x,s.z)+s.alt+Math.sin(s.ph)*2;s.g.position.set(s.x,r,s.z);let o=.75+Math.sin(s.ph*3)*.25;s.m.scale.set(1+Math.sin(s.ph*3)*.12,1-Math.sin(s.ph*3)*.1,1+Math.sin(s.ph*3)*.12);let a=.15+u.time.night*.85;s.m.material.opacity=.5*a*o,s.s.material.opacity=.7*a*o}}var fs,_0,Yl,E0,po,b0,La=[],Zl=0,ql=-1,w0=20,hu=0,Ar=new w,av=new w,lv=new Set,du=140;function hv(){fs=new de;let n=new ne(new We(.32,20,14),y.white),e=new ne(new Ne(.33,.04,8,28),y.orange);e.rotation.x=Math.PI/2;let t=new ne(new We(.2,16,10,-Math.PI*.35,Math.PI*.7,Math.PI*.3,Math.PI*.4),new me({color:660504,roughness:.1,metalness:.6}));t.position.z=.15,t.rotation.y=Math.PI,_0=_e(8382207,.45,null,0,.02,.33),Yl=new ne(new Ne(.5,.015,6,40),new Ue({color:8382207,transparent:!0,opacity:.6})),Yl.rotation.x=Math.PI/2;let i=new ne(new qt(.05,.25,6),y.metal);i.position.y=.38,fs.add(n,e,t,_0,Yl,i,_e(16738874,.25,null,0,.5,0)),fs.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),fs.scale.setScalar(.8),E0=new _i(12578815,0,22,1.6),fs.add(E0),u.scene.add(fs);let s=u.player.pos;Ar.set(s.x+1.5,s.y+2.2,s.z+1.5),fs.position.copy(Ar),b0=new Ue({color:8382207,transparent:!0,opacity:0,side:Tt,depthWrite:!1,blending:ze}),po=new ne(new tn(.94,1,96),b0),po.rotation.x=-Math.PI/2,po.visible=!1,u.scene.add(po)}function Ia(n,e,t=!0){t&&lv.has(n)||w0>0&&t||(lv.add(n),w0=45,Pt("\u5C0F\u661F \xB7 \u4F19\u4F34\u673A\u5668\u4EBA",e))}var uu;function bS(){if(uu)return uu;let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d");return e.translate(32,32),e.rotate(Math.PI/4),e.strokeStyle="#fff",e.lineWidth=5,e.strokeRect(-14,-14,28,28),e.fillStyle="rgba(255,255,255,.35)",e.fillRect(-9,-9,18,18),uu=new Xt(n),uu}function wS(){if(Zl>0){u.events.emit("toast",`\u626B\u63CF\u51B7\u5374\u4E2D \xB7 ${Math.ceil(Zl)} \u79D2`),Y.play("deny");return}Zl=12,ql=0,Y.play("scan");for(let s of La)u.scene.remove(s.s);La=[];let n=u.player.pos,e={};for(let s of u.nodes){let r=Math.hypot(s.x-n.x,s.z-n.z);if(r>du)continue;let o=Ls[s.type],a=new xi(new ai({map:bS(),color:new he(o[0],o[1],o[2]),transparent:!0,depthTest:!1,depthWrite:!1,opacity:0,sizeAttenuation:!1}));a.scale.setScalar(s.type==="titanium"?.05:.036),a.position.set(s.x,s.y+3,s.z),a.renderOrder=999,u.scene.add(a),La.push({s:a,delay:r/90,life:10}),e[s.type]=(e[s.type]||0)+1}let t={iron:"\u94C1\u77FF",silicon:"\u7845\u6676",ice:"\u6C34\u51B0",titanium:"\u949B\u77FF"},i=Object.entries(e).map(([s,r])=>`${t[s]} ${r}`).join(" \xB7 ");u.events.emit("toast",i?`\u626B\u63CF\u5B8C\u6210 \xB7 ${i}`:"\u626B\u63CF\u5B8C\u6210 \xB7 \u9644\u8FD1\u6CA1\u6709\u77FF\u85CF"),u.stats.scans=(u.stats.scans||0)+1}function uv(n){if(!fs)return;let e=u.player,t=performance.now()*.001;Zl=Math.max(0,Zl-n),w0-=n,ve.hit("KeyQ")&&!u.menuOpen&&!e.dead&&wS();let i=(u.driving,e.yaw),s=new w(Math.cos(i),0,-Math.sin(i)),r=new w(-Math.sin(i),0,-Math.cos(i)),o=e.pos.clone().addScaledVector(s,u.driving?3.5:3).addScaledVector(r,u.driving?2:5.5);o.y=Math.max(e.pos.y+1.55,Ee(o.x,o.z)+.8)+Math.sin(t*2)*.12,u.driving&&(o.y+=2.2);let a=Ar.distanceTo(o)>30?1:Math.min(1,n*3);av.lerp(o.clone().sub(Ar).multiplyScalar(4),a),Ar.addScaledVector(av,n),Ar.distanceTo(o)>40&&Ar.copy(o),fs.position.copy(Ar);let l=e.pos.clone().addScaledVector(e.fwd,12);if(l.y+=1.5,fs.lookAt(l),Yl.rotation.z+=n*1.5,Yl.rotation.x=Math.PI/2+Math.sin(t*1.3)*.3,_0.material.opacity=.75+Math.sin(t*4)*.25,E0.intensity=u.time.night>.4?18*u.time.night:0,ql>=0){ql+=n;let h=ql*90;po.visible=h<du,po.position.set(e.pos.x,e.pos.y+.6,e.pos.z),po.scale.setScalar(Math.max(.1,h)),b0.opacity=.7*(1-h/du),h>=du&&(ql=-1)}for(let h=La.length-1;h>=0;h--){let d=La[h];d.delay-=n,!(d.delay>0)&&(d.life-=n,d.s.material.opacity=Math.min(1,(10-d.life)*3,d.life/2)*(.75+Math.sin(t*5+h)*.25),d.life<=0&&(u.scene.remove(d.s),d.s.material.dispose(),La.splice(h,1)))}hu=Math.hypot(e.vel.x,e.vel.z)>.5?0:hu+n,!e.inLife&&e.o2<e.maxO2*.3&&Ia("o2"+Math.floor(t/120),"\u6C27\u6C14\u4E0D\u591A\u4E86\uFF01\u6700\u8FD1\u7684\u8865\u6C27\u70B9\u5728\u7F57\u76D8\u4E0A\u90A3\u4E2A\u623F\u5B50\u56FE\u6807\u7684\u65B9\u5411\u3002",!1),u.time.night>.6&&!e.flashlight&&Ia("dark","\u597D\u9ED1\u2026\u2026\u6309 F \u6253\u5F00\u624B\u7535\u7B52\u5427\u3002\u6211\u4E5F\u4F1A\u5E2E\u4F60\u7167\u7740\u70B9\u3002"),u.enemies.some(h=>!h.dead&&!h.guardian&&h.pos.distanceTo(e.pos)<25)&&Ia("enemy"+Math.floor(t/90),"\u68C0\u6D4B\u5230\u9508\u8680\u86DB\u9760\u8FD1\uFF01\u5C0F\u5FC3\uFF01",!1),u.nodes.some(h=>h.type==="titanium"&&Math.hypot(h.x-e.pos.x,h.z-e.pos.z)<40)&&Ia("ti","\u9644\u8FD1\u6709\u949B\u77FF\u7684\u4FE1\u53F7\uFF01\u7D2B\u8272\u7684\u90A3\u79CD\uFF0C\u5F88\u7A00\u6709\u54E6\u3002"),hu>40&&(hu=-200,Ia("idle"+Math.floor(t/300),cv[it][Math.floor(Math.random()*cv[it].length)],!1)),u.stats.scans===void 0&&u.time.day>=1&&t>30&&Ia("scanhint","\u6211\u80FD\u626B\u63CF\u9644\u8FD1\u7684\u77FF\u85CF\u2014\u2014\u6309 Q \u8BD5\u8BD5\u3002")}var cv={mars:["\u4F60\u77E5\u9053\u5417\uFF1F\u706B\u661F\u4E0A\u7684\u4E00\u5929\u6BD4\u5730\u7403\u957F 37 \u5206\u949F\u3002","\u706B\u661F\u7684\u65E5\u843D\u662F\u84DD\u8272\u7684\u3002\u7B49\u508D\u665A\u7684\u65F6\u5019\u62AC\u5934\u770B\u770B\u5427\u3002","\u90A3\u5EA7\u6700\u9AD8\u7684\u5C71\u53EB\u5965\u6797\u5E15\u65AF\uFF0C\u662F\u5730\u7403\u73E0\u5CF0\u7684\u4E24\u500D\u591A\u9AD8\u3002","\u6211\u7684\u6570\u636E\u5E93\u91CC\u6709\u4E00\u9996\u5730\u7403\u7684\u6B4C\uFF0C\u53EB\u300A\u6708\u4EAE\u4EE3\u8868\u6211\u7684\u5FC3\u300B\u3002\u8981\u6211\u54FC\u7ED9\u4F60\u542C\u5417\uFF1F\u2026\u2026\u7B97\u4E86\uFF0C\u6211\u8DD1\u8C03\u3002"],europa:["\u6728\u661F\u597D\u5927\u2026\u2026\u611F\u89C9\u5B83\u968F\u65F6\u4F1A\u6389\u4E0B\u6765\u3002","\u51B0\u5C42\u4E0B\u9762\u7684\u6D77\uFF0C\u53EF\u80FD\u6BD4\u5730\u7403\u6240\u6709\u7684\u6D77\u52A0\u8D77\u6765\u8FD8\u8981\u591A\u3002","\u8FD9\u91CC\u7684\u91CD\u529B\u5F88\u5C0F\uFF0C\u8DF3\u9AD8\u4E00\u70B9\u6CA1\u5173\u7CFB\u7684\u3002"],kepler:["\u4E24\u4E2A\u592A\u9633\uFF01\u5F71\u5B50\u90FD\u6709\u4E24\u4E2A\uFF01","\u90A3\u4E9B\u53D1\u5149\u7684\u6C34\u6BCD\u2026\u2026\u5B83\u4EEC\u662F\u5728\u770B\u6211\u4EEC\u5417\uFF1F","\u7A7A\u6C14\u91CC\u7684\u6C27\u6C14\u5DF2\u7ECF\u6709 14% \u4E86\u3002\u518D\u8FC7\u51E0\u5341\u5E74\uFF0C\u4E5F\u8BB8\u5C31\u80FD\u6458\u4E0B\u5934\u76D4\u4E86\u3002"]};var gn=null,dv=new dn,S0=new Sn,Kl=new w;function SS(){let n=new de,e=new de;n.add(e);let t=(f,p,g,v,x,m=e,_=0,E=0,M=0)=>{let D=new ne(f,p);return D.position.set(g,v,x),D.rotation.set(_,E,M),D.castShadow=!0,D.receiveShadow=!0,m.add(D),D},i=(f,p,g,v=.08)=>new xa(f,p,g,2,v),s=(f,p,g,v,x=e)=>{let m=p.clone().sub(f),_=t(new Le(g,g,m.length(),8),v,0,0,0,x);return _.position.copy(f).add(p).multiplyScalar(.5),_.quaternion.setFromUnitVectors(new w(0,1,0),m.normalize()),_},r=(f,p,g)=>new w(f,p,g);t(i(2.5,.35,4.8,.1),y.dark,0,.85,0),t(i(2.6,.75,3.4,.18),y.white,0,1.35,.5),t(i(2.64,.14,3.44,.05),y.orange,0,1.62,.5),t(i(2.2,.5,1.2,.12),y.panel,0,1.25,-1.9,e,-.25,0,0);let o=t(new We(1.15,32,16,0,Math.PI*2,0,Math.PI/2),y.glass,0,1.72,-.75);o.scale.set(1,.8,1.15),o.castShadow=!1;for(let f=0;f<5;f++)t(new Ne(1.16,.035,6,24,Math.PI),y.metal,0,1.72,-.75,e,0,f*Math.PI/5,0).scale.set(1,.8,1.15);for(let f of[-1.15,1.15])s(r(f,1.7,.6),r(f*.9,2.75,.9),.06,y.metal),s(r(f,1.7,2.1),r(f*.9,2.75,1.9),.06,y.metal);s(r(-1.04,2.75,.9),r(1.04,2.75,.9),.06,y.metal),s(r(-1.04,2.75,1.9),r(1.04,2.75,1.9),.06,y.metal),s(r(-1.04,2.75,.9),r(-1.04,2.75,1.9),.06,y.metal),s(r(1.04,2.75,.9),r(1.04,2.75,1.9),.06,y.metal),t(i(1.8,.16,.22,.05),y.dark,0,2.82,.9);let a=[];for(let f=0;f<4;f++)t(new Ji(.07,12),y.lamp,-.6+f*.4,2.82,.78,e,0,Math.PI,0),a.push(_e(16773853,.9,e,-.6+f*.4,2.82,.75));for(let f of[-.85,.85])a.push(_e(16773853,1.2,e,f,1.2,-2.5));for(let f of[-.85,.85])t(i(.35,.18,.08,.04),y.lamp,f,1.2,-2.42);t(i(2.3,.08,1.5,.03),y.metal,0,1.78,1.6);for(let[f,p,g]of[[-.5,1.4,.6],[.4,1.7,.7],[.5,1.1,.45]])t(i(g,g*.8,g,.04),y.dark,f,1.82+g*.4,p);t(new Le(.02,.02,1.6,4),y.metal,.9,3.5,1.9);let l=_e(16728128,.6,e,.9,4.3,1.9);for(let f=0;f<3;f++)t(i(.06,.06,.5,.02),y.metal,1.33,.75+f*.28,-.2);t(i(.1,.4,1,.04),y.orange,-1.32,1.3,1);let c=[],h=new Ne(.46,.2,12,28);for(let f of[-1.65,0,1.65])for(let p of[-1.5,1.5]){let g=new de;g.position.set(p,.62,f),n.add(g);let v=t(h,y.rubber,0,0,0,g,0,Math.PI/2,0);for(let x=0;x<14;x++){let m=x/14*Math.PI*2;t(new Ye(.42,.06,.1),y.rubber,0,Math.cos(m)*.64,Math.sin(m)*.64,g,m,0,0)}t(new Le(.34,.34,.3,20),y.metal,0,0,0,g,0,0,Math.PI/2);for(let x=0;x<5;x++)t(new Ye(.32,.06,.06),y.dark,p>0?.16:-.16,0,0,g,x*Math.PI/5,0,0).scale.set(.3,1,9);t(new Le(.1,.1,.34,10),y.chrome,0,0,0,g,0,0,Math.PI/2),s(r(p*.62,.95,f),r(p*.95,.66,f),.07,y.metal,n),s(r(p*.7,1.15,f+.3),r(p*.95,.75,f),.04,y.chrome,n),c.push(g)}let d=new Jo(16773853,0,60,.5,.5,1.2);return d.position.set(0,1.2,-2.4),d.target.position.set(0,0,-20),e.add(d,d.target),{g:n,body:e,wheels:c,tip:l,lamp:d,heads:a}}function pu(n,e,t=0){if(gn)return gn;let i=SS();return u.scene.add(i.g),gn={...i,x:n,z:e,y:Ee(n,e),h:t,speed:0,vy:0,lookYaw:0,pitch:-.05,spin:0,hitT:0,air:!1},gn.collider=u.colliders.add({x:n,z:e,r:2,kind:"rover"}),T0(0),gn}function mu(){return gn}function fv(){return gn?{x:+gn.x.toFixed(1),z:+gn.z.toFixed(1),h:+gn.h.toFixed(2)}:null}function fu(n,e){return Ee(n,e)}function T0(n){let e=gn,t=Math.sin(e.h),i=Math.cos(e.h),s=-t,r=-i,o=i,a=-t,l=fu(e.x+s*1.8,e.z+r*1.8),c=fu(e.x-s*1.8,e.z-r*1.8),h=fu(e.x-o*1.3,e.z-a*1.3),d=fu(e.x+o*1.3,e.z+a*1.3),f=Math.atan2(l-c,3.6),p=Math.atan2(d-h,2.6);e.g.position.set(e.x,e.y,e.z),S0.set(e.air?e.g.rotation.x:f,e.h,e.air?e.g.rotation.z:-p,"YXZ"),e.air||e.g.rotation.copy(S0),e.spin+=e.speed*n/.55;for(let g of e.wheels)g.rotation.x=-e.spin;return(l+c+h+d)/4}function pv(){gn&&(u.driving=!0,gn.lookYaw=0,gn.pitch=-.08,u.colliders.remove(gn.collider),Y.play("place"))}function R0(n){let e=gn;if(!e)return;u.driving=!1,Y.engine(0);let t=Math.cos(e.h),i=Math.sin(e.h),s=e.x+t*3,r=e.z-i*3;u.colliders.overlaps(s,r,.5)&&(s=e.x-t*3,r=e.z+i*3),n.pos.set(s,Ee(s,r),r),n.vel.set(0,0,0),n.yaw=e.h+e.lookYaw,n.pitch=e.pitch,e.speed=0,e.lamp.intensity=0,e.collider=u.colliders.add({x:e.x,z:e.z,r:2,kind:"rover"})}function mv(n,e,t){if(!gn)return;let i=gn;if(i.tip.visible=Math.sin(performance.now()*.005)>0,!u.driving){i.y=T0(0);return}u.locked&&(i.lookYaw=Bt.clamp(i.lookYaw-ve.dx*ve.sens,-2.4,2.4),i.pitch=Bt.clamp(i.pitch-ve.dy*ve.sens,-1,.9));let s=(ve.down("KeyW")||ve.down("ArrowUp")?1:0)-(ve.down("KeyS")||ve.down("ArrowDown")?1:0),r=(ve.down("KeyA")||ve.down("ArrowLeft")?1:0)-(ve.down("KeyD")||ve.down("ArrowRight")?1:0),o=(ve.down("ShiftLeft")?28:17)*(Gt("terrain")?1.3:1);i.air||(s>0?i.speed+=(i.speed<0?22:11)*n:s<0?i.speed-=(i.speed>0?22:7)*n:i.speed*=1-.7*n,ve.down("Space")&&(i.speed*=1-3.5*n),i.speed=Bt.clamp(i.speed,-7,o),i.speed>o&&(i.speed-=20*n),i.h+=r*n*1.5*Bt.clamp(i.speed/5,-1,1)),Kl.set(-Math.sin(i.h),0,-Math.cos(i.h)),u.stats.driven=(u.stats.driven||0)+Math.abs(i.speed)*n,i.x=Bt.clamp(i.x+Kl.x*i.speed*n,-Qe+125,Qe-125),i.z=Bt.clamp(i.z+Kl.z*i.speed*n,-Qe+125,Qe-125);for(let c of u.colliders.query(i.x,i.z)){c.kind==="flora"&&Math.abs(i.speed)>0;let h=i.x-c.x,d=i.z-c.z,f=Math.hypot(h,d),p=c.r+1.9;if(f<p&&f>.001){if(c.kind==="rock"&&c.r<1.3)continue;i.x=c.x+h/f*p,i.z=c.z+d/f*p,Math.abs(i.speed)>5&&(Y.play("land"),fe.dustPuff(new w(i.x,i.y+1,i.z),6,2)),i.speed*=-.25}}if(i.hitT-=n,Math.abs(i.speed)>6&&i.hitT<=0)for(let c of u.enemies)c.dead||Math.hypot(c.pos.x-i.x,c.pos.z-i.z)<2.6+c.scale&&(Gl(c,Math.abs(i.speed)*4,"player"),i.hitT=.4,i.speed*=.7,fe.burst(new w(c.pos.x,c.pos.y+1,c.pos.z),[1,.5,.2],20,6));let a=Ee(i.x,i.z);if(i.air)i.vy-=xe.gravity*n,i.y+=i.vy*n,i.y<=a&&(i.y=a,i.air=!1,i.vy<-5&&(Y.play("land"),fe.dustPuff(new w(i.x,i.y,i.z),14,3)),i.vy=0);else{let c=i.y+i.vy*n-.5*xe.gravity*n*n;if(a<c-.25&&i.vy>1.5&&Math.abs(i.speed)>12)i.air=!0,i.vy=Math.min(i.vy,7),i.y=c;else{let h=(a-i.y)/Math.max(n,.001);i.vy=i.vy*.6+h*.4,i.y=a}}if(T0(n),Math.abs(i.speed)>4&&!i.air&&Math.random()<.6){let c=new w(i.x-Kl.x*2.5+(Math.random()-.5)*2,i.y+.3,i.z-Kl.z*2.5);fe.dustPuff(c,1,.5)}i.lamp.intensity=u.time.night>.3?80:0;for(let c of i.heads)c.visible=u.time.night>.3;dv.setFromEuler(S0.set(i.pitch,i.lookYaw,0,"YXZ")),t.quaternion.copy(i.body.getWorldQuaternion(new dn)).multiply(dv);let l=new w(0,2.15,-.7).applyQuaternion(i.g.quaternion).add(i.g.position);t.position.copy(l),t.getWorldDirection(e.fwd),e.pos.set(i.x,i.y,i.z),e.vel.set(0,0,0),e.inLife=!0,e.o2=Math.min(e.maxO2,e.o2+20*n),e.energy=Math.min(100,e.energy+10*n),e.hurtT=Math.max(0,e.hurtT-n),Y.engine(Math.abs(i.speed)/28)}function gv(){return gn?Math.round(Math.abs(gn.speed)*3.6):0}var Da,C0;function TS(){Da||(C0=new Ue({color:16758364,transparent:!0,opacity:.35,blending:ze,depthWrite:!1,side:Tt,fog:!1}),Da=new ne(new Le(.6,1.2,160,16,1,!0),C0),Da.frustumCulled=!1,u.scene.add(Da))}function RS(){TS();let n=u.waypoint;Da.visible=!!n,n&&(Da.position.set(n.x,Ee(n.x,n.z)+80,n.z),C0.opacity=.22+Math.sin(performance.now()*.004)*.08,Math.hypot(u.player.pos.x-n.x,u.player.pos.z-n.z)<6&&(u.waypoint=null,u.events.emit("toast","\u2713 \u5DF2\u5230\u8FBE\u5BFC\u822A\u70B9"),Y.play("objective")))}var gu=[],P0=-1,Jl=0,A0=null,xv=[[1,.6,.2],[.5,.9,1],[1,.4,.7],[.7,1,.5],[1,.9,.4],[.8,.6,1]];function AS(n){let e=xv[Math.floor(Math.random()*xv.length)];gu.push({pos:new w(n.x+(Math.random()-.5)*6,n.y+2,n.z+(Math.random()-.5)*6),vel:new w((Math.random()-.5)*4,34+Math.random()*10,(Math.random()-.5)*4),t:1.3+Math.random()*.6,c:e}),Y.play("jet")}function CS(n){let t=16+Math.random()*8;for(let i=0;i<90;i++){let s=Math.random()*2-1,r=Math.random()*6.283,o=Math.sqrt(1-s*s);fe.firework(n.pos,o*Math.cos(r)*t,s*t,o*Math.sin(r)*t,n.c)}Y.play("kill")}function vv(n){RS();let e=u.time.t;if(Jl<=0&&u.time.day%5===0&&P0!==u.time.day&&e>.74&&e<.8&&u.colony.pop>=4&&(A0=u.buildings.find(t=>t.type==="plaza"&&t.powered),A0&&(P0=u.time.day,Jl=60,u.stats.festivals=(u.stats.festivals||0)+1,u.events.emit("festival"),Pt("\u82CF\u5FF5 \xB7 \u6559\u5E08",`\u4ECA\u5929\u662F\u7B2C ${u.time.day} \u4E2A\u706B\u661F\u65E5\u2014\u2014\u6B96\u6C11\u5730\u8282\uFF01\u5927\u5BB6\u90FD\u5230\u5E7F\u573A\u4E0A\u6765\u4E86\uFF0C\u5B69\u5B50\u4EEC\u8BF4\u8981\u653E\u70DF\u82B1\u7ED9\u5730\u7403\u770B\u3002`))),Jl>0){Jl-=n,u.festival=!0;let t=A0;t&&Math.random()<n*1.6&&AS({x:t.x,y:t.y,z:t.z})}else u.festival=!1;for(let t=gu.length-1;t>=0;t--){let i=gu[t];i.t-=n,i.vel.y-=9*n,i.pos.addScaledVector(i.vel,n);for(let s=0;s<3;s++)fe.trail(i.pos,[1,.85,.6],1.6);i.t<=0&&(CS(i),gu.splice(t,1))}}function yv(){Jl=0,P0=-1,u.time.day=5,u.time.t=.745}var ps=null,Mv=[],_v=[],jl=0,Fs,I0,xu,PS={mars:[-420,-380],europa:[400,-420],kepler:[-380,420]}[it]||[-420,-380],mo=2400;function IS(){ps=new de;let[n,e]=PS,t=Ee(n,e);ps.position.set(n,t-2,e);let i=(a,l,c,h,d)=>{let f=new ne(a,l);return f.position.set(c,h,d),f.castShadow=!0,ps.add(f),f};for(let a=0;a<4;a++)i(new Le(38-a*8,42-a*8,10,6),a%2?y.white:y.panel,0,5+a*10,0);for(let a=0;a<6;a++){let l=a*Math.PI/3,c=new w(Math.cos(l)*46,0,Math.sin(l)*46),h=new w(0,120,0),d=h.clone().sub(c),f=i(new Le(2.2,3.2,d.length(),8),y.metal,0,0,0);f.position.copy(c).add(h).multiplyScalar(.5),f.quaternion.setFromUnitVectors(new w(0,1,0),d.normalize())}i(new Le(6,14,160,6),y.white,0,120,0);let s=new Ue({color:10477823,transparent:!0,opacity:.55,fog:!1,blending:ze,depthWrite:!1});for(let a=0;a<3;a++){let l=a*Math.PI*2/3;i(new Le(.9,1.4,mo,6),s,Math.cos(l)*3,200+mo/2,Math.sin(l)*3).castShadow=!1}let r=new me({color:2240576,metalness:.8,roughness:.4,fog:!1});i(new Le(1.6,1.6,mo,8),r,0,200+mo/2,0);for(let a=260;a<mo;a+=180)_v.push(_e(16726570,18,ps,0,a,0));for(let a=0;a<4;a++){let l=new de,c=new ne(new Le(7,7,10,12),new me({color:15262940,metalness:.3,roughness:.5,fog:!1}));l.add(c,_e(10477823,40,null,0,0,0)),ps.add(l),Mv.push({g:l,t:a/4,dir:a%2?1:-1})}Fs=new de,Fs.position.y=200+mo,ps.add(Fs);let o=new me({color:9080729,metalness:.8,roughness:.35,emissive:1122867,fog:!1});I0=new ne(new Ne(160,9,12,96),o),I0.rotation.x=Math.PI/2,Fs.add(I0),xu=new ne(new Ne(110,5,10,80),o),xu.rotation.x=Math.PI/2,xu.position.y=-40,Fs.add(xu);for(let a=0;a<6;a++){let l=new ne(new Le(2,2,160,6),o);l.rotation.z=Math.PI/2,l.rotation.y=a*Math.PI/6,Fs.add(l)}Fs.add(new ne(new We(30,24,16),o));for(let a=0;a<24;a++){let l=a/24*Math.PI*2;Fs.add(_e(a%2?16767392:10477823,30,null,Math.cos(l)*160,0,Math.sin(l)*160))}ps.scale.y=.001,u.scene.add(ps)}function Ev(n){if(!ps){if((u.cityLevel||0)<3)return;IS(),jl=u.megaSeen?1:0,u.megaSeen||(u.megaSeen=!0,Y.play("rumble"),Pt("\u65B9\u821F \xB7 AI","\u8F68\u9053\u5929\u68AF\u5408\u9F99\u3002\u4ECE\u4ECA\u5929\u8D77\uFF0C\u6B96\u6C11\u5730\u4E0E\u8F68\u9053\u4E4B\u95F4\u53EA\u9694\u4E00\u90E8\u7535\u68AF\u3002\u62AC\u5934\u770B\u2014\u2014\u5B83\u5C31\u5728\u5730\u5E73\u7EBF\u4E0A\u3002"),u.events.emit("toast","\u8F68\u9053\u5929\u68AF\u5B8C\u5DE5"))}jl<1&&(jl=Math.min(1,jl+n/12),ps.scale.y=Math.max(.001,1-Math.pow(1-jl,3)));let e=performance.now()*.001;for(let t of Mv)t.t+=n*.012*t.dir,t.t>1&&(t.t=1,t.dir=-1),t.t<0&&(t.t=0,t.dir=1),t.g.position.y=210+t.t*(mo-20);_v.forEach((t,i)=>{t.visible=Math.sin(e*2+i*.6)>.2}),Fs.rotation.y+=n*.02}var wv=6,LS={habitat:[16761466,3.2,1],apartment:[16761466,6,1.3],greenhouse:[16735432,2.6,1.1],vfarm:[16735432,4,1.2],lamp:[16765594,3.9,1.15],reactor:[5223167,4,1.4],plaza:[9426175,3.5,1.2],lab:[10479871,3,.9],fabricator:[16752704,2.5,.9],oxygen:[10477823,5,.45],extractor:[10477823,6,.5],lifehub:[10485712,3,1],trade:[16765056,3,1],launch:[16777215,5,1.4],monument:[16769184,6,1.3],terraformer:[10485728,6,1.4],beacon:[16736336,3,.6],landing:[16773328,2,1.1]},ec=[],Ql,L0=0;function DS(){if(Ql)return Ql;let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);for(let i=0;i<=10;i++){let s=i/10,r=Math.pow(1-s,2.2)*.9;t.addColorStop(s,`rgba(255,255,255,${r.toFixed(3)})`)}return e.fillStyle=t,e.fillRect(0,0,128,128),Ql=new Xt(n),Ql.colorSpace=Et,Ql}var Sv=new Le(.22,1.9,4,24,1,!0);Sv.translate(0,-2,0);function US(n){return new Ct({uniforms:{uC:{value:new he(n)},uI:{value:0}},vertexShader:`varying float vY; varying vec3 vN, vV;
      void main(){ vY = position.y; vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }`,fragmentShader:`uniform vec3 uC; uniform float uI; varying float vY; varying vec3 vN, vV;
      void main(){ float h = clamp(1.0 + vY/4.0, 0.0, 1.0); float f = abs(dot(normalize(vN), normalize(vV)));
        float a = pow(h, 1.6) * pow(f, 1.5) * uI; gl_FragColor = vec4(uC * a, a); }`,transparent:!0,blending:ze,depthWrite:!1,side:Tt})}var Tv=new Dn(1,1);Tv.rotateX(-Math.PI/2);function Rv(n){for(let e=0;e<wv;e++){let t=new _i(16777215,0,34,1.7);t.userData={b:null,i:0},n.add(t),ec.push(t)}}function vu(n){return LS[n.type]}function NS(n,e){let t=n.anim;if(t._pool!==void 0)return t._pool;let i=new Ue({map:DS(),color:e[0],transparent:!0,opacity:0,blending:ze,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),s=new ne(Tv,i),r=Math.max(5,n.def.r*2.6)*e[2]*1.6;s.scale.set(r,1,r),s.position.set(0,.18,0),s.renderOrder=2,s.castShadow=s.receiveShadow=!1;let o=n.baseScale||1;if(s.scale.x/=o,s.scale.z/=o,s.position.y/=o,n.group.add(s),t._pool=s,n.type==="lamp"){let a=new ne(Sv,US(e[0]));a.position.y=4.1/o,a.scale.setScalar(1/o),n.group.add(a),s.userData.cone=a}return s}function Av(n){let e=u.time.night,t=u.player.pos,i=Math.min(1,Math.max(0,(e-.08)/.5))*(1-(u.storm||0)*.3);for(let r of u.buildings){let o=vu(r);if(!o)continue;let a=NS(r,o),l=r.powered!==!1&&!r.broken&&r.buildT>=1,c=r.type==="lamp"||r.type==="habitat"?1-(Math.random()<.004?.4:0):1,h=l?i*.32*c:0;a.material.opacity+=(h-a.material.opacity)*Math.min(1,n*3),a.visible=a.material.opacity>.004;let d=a.userData.cone;d&&(d.material.uniforms.uI.value=a.material.opacity*1.1*(1-(u.storm||0)*.5),d.visible=a.visible)}L0-=n;let s=null;if(L0<=0&&(L0=.3,s=[],i>.01)){for(let r of u.buildings){let o=vu(r);if(!o||r.broken||r.powered===!1||r.buildT<1)continue;let a=Math.hypot(r.x-t.x,r.z-t.z);a>140||s.push({b:r,d:a/o[2]})}s.sort((r,o)=>r.d-o.d),s.length=Math.min(s.length,wv)}if(s){let r=new Set(s.map(a=>a.b)),o=s.filter(a=>!ec.some(l=>l.userData.b===a.b)).map(a=>a.b);for(let a of ec){let l=a.userData;l.b&&(!r.has(l.b)||!u.buildings.includes(l.b))&&(l.leaving=!0),!l.b&&o.length&&bv(a,o.shift())}for(let a of ec)a.userData.leaving&&a.intensity<.5&&o.length&&bv(a,o.shift())}for(let r of ec){let o=r.userData,a=0;o.b&&!o.leaving&&(a=vu(o.b)[2]*70*i),r.intensity+=(a-r.intensity)*Math.min(1,n*(a>r.intensity?2:4)),o.leaving&&r.intensity<.05&&(o.b=null,o.leaving=!1,r.intensity=0)}}function bv(n,e){let t=vu(e);n.userData.b=e,n.userData.leaving=!1,n.color.setHex(t[0]),n.intensity=0,n.position.set(e.x,e.y+t[1],e.z),n.distance=Math.max(24,e.def.r*6)*t[2]}var Ve=n=>document.getElementById(n);u.debug=/[?&]debug/.test(location.search);var Vs=Ve("c"),Fn=new Zo({canvas:Vs,antialias:!0,powerPreference:"high-performance"});Fn.setPixelRatio(Math.min(window.devicePixelRatio,1.5));Fn.setSize(window.innerWidth,window.innerHeight);Fn.shadowMap.enabled=!0;Fn.shadowMap.type=Cf;Fn.toneMapping=qr;Fn.toneMappingExposure=1;var go="high";try{go=localStorage.getItem("starport-quality")||((navigator.hardwareConcurrency||8)<=4?"mid":"high")}catch{}function kv(n,e){go=n,Fn.setPixelRatio(n==="high"?Math.min(window.devicePixelRatio,1.5):n==="mid"?1:.75),Fn.setSize(window.innerWidth,window.innerHeight);let t=n!=="low";Fn.shadowMap.enabled!==t&&(Fn.shadowMap.enabled=t,e&&u.scene.traverse(i=>{i.material&&[].concat(i.material).forEach(s=>{s.needsUpdate=!0})})),ni&&(ni.setPixelRatio(Fn.getPixelRatio()),ni.setSize(window.innerWidth,window.innerHeight))}var ni=null,_u=null;function HS(){ni=new ph(Fn),ni.addPass(new mh(Wi,wt)),Bs=new ia(Wi,wt,window.innerWidth,window.innerHeight),Bs.output=ia.OUTPUT.Default,Bs.blendIntensity=1,Bs.overrideVisibility=function(){let n=this._visibilityCache;this.scene.traverse(e=>{n.set(e,e.visible);let t=e.material;(e.isPoints||e.isLine||e.isSprite||t&&!Array.isArray(t)&&t.transparent&&(t.depthWrite===!1||t.blending===ze))&&(e.visible=!1)})},Bs.updateGtaoMaterial({radius:1.6,distanceExponent:1.4,thickness:1.5,scale:1.2,samples:12}),Bs.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),ni.addPass(Bs),Ha=new Yr({uniforms:{tDiffuse:{value:null},uSun:{value:new te(.5,.5)},uK:{value:0},uAsp:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uSun; uniform float uK, uAsp; varying vec2 vUv;
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
      }`}),ni.addPass(Ha),_u=new na(new te(window.innerWidth,window.innerHeight),.55,.5,.88),ni.addPass(_u),ni.addPass(new gh),Eu=new Yr({uniforms:{tDiffuse:{value:null},uT:{value:0},uNight:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uT, uNight; varying vec2 vUv;
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
      }`}),ni.addPass(Eu)}var Eu=null,Bs=null,Ha=null,Cr=new w;function D0(){if(go==="high"&&ni){_u.strength=.3+u.time.night*.22,_u.threshold=.9,Cr.copy(wt.position).addScaledVector(Yn,1e3).project(wt);let e=Cr.z<1&&Math.abs(Cr.x)<1.6&&Math.abs(Cr.y)<1.6?Bt.smoothstep(Yn.y,-.02,.12)*(1-u.storm)*(1-Bt.smoothstep(Math.max(Math.abs(Cr.x),Math.abs(Cr.y)),1,1.6)):0;Ha.uniforms.uK.value+=(e-Ha.uniforms.uK.value)*.1,Ha.uniforms.uSun.value.set(Cr.x*.5+.5,Cr.y*.5+.5),Ha.uniforms.uAsp.value=wt.aspect,Eu.uniforms.uT.value=performance.now()*.001%100,Eu.uniforms.uNight.value=u.time.night,ni.render()}else Fn.render(Wi,wt)}kv(go,!1);var Wi=new Ki,wt=new un(72,window.innerWidth/window.innerHeight,.1,6e3);HS();u.scene=Wi;u.camera=wt;u.renderer=Fn;u.colliders=new yh(16);window.addEventListener("resize",()=>{wt.aspect=window.innerWidth/window.innerHeight,wt.updateProjectionMatrix(),Fn.setSize(window.innerWidth,window.innerHeight),ni&&ni.setSize(window.innerWidth,window.innerHeight),Bs&&Bs.setSize(window.innerWidth,window.innerHeight)});_1();u.hiShadows=go==="high";qg(Wi);Jg(Wi);o1(Wi);Rv(Wi);var za=J1();za.group.position.set(Mt.x,Ee(Mt.x,Mt.z)+.1,Mt.z);za.group.rotation.y=.6;Wi.add(za.group);u.colliders.add({x:Mt.x,z:Mt.z,r:3.4,kind:"lander"});var Ke=new Yh(wt);u.player=Ke;vx(wt);fx(Vs);Zx(jg(350));gp(Wi);u.requestLock=()=>{if(u.debug){u.locked=!0;return}try{let n=Vs.requestPointerLock();n&&n.catch&&n.catch(()=>{})}catch{}};document.addEventListener("pointerlockchange",()=>{u.locked=document.pointerLockElement===Vs,!u.locked&&u.started&&!u.menuOpen&&!Ke.dead&&!u.endingShown&&!u.cine&&ds("pause")});Vs.addEventListener("click",()=>{Y.init(),u.started&&!u.locked&&!u.menuOpen&&!Ke.dead&&u.requestLock()});function Ws(n){if(!u.started)return;let e={v:1,res:u.res,upgrades:u.upgrades,stats:u.stats,chapter:u.chapter,goalDone:u.goalDone,terraform:u.terraform,ended:u.ended,nights:u.nightsSurvived||0,city:u.cityLevel,pop:u.popTotal||0,launched:!!u.launched,rover:fv(),relics:u.relicsFound||[],plazaSeen:!!u.plazaSeen,mode:u.mode,diff:u.diffKey,morale:u.morale,waypoint:u.waypoint||null,megaSeen:!!u.megaSeen,tech:u.tech||{},rp:u.rp||0,requests:u.requests||[],time:{t:u.time.t,day:u.time.day},player:{x:Ke.pos.x,z:Ke.pos.z,yaw:Ke.yaw,o2:Ke.o2,hp:Ke.health},buildings:K1(),nodes:f1(),colonists:wx(),storm:sx()};try{localStorage.setItem(Mh,JSON.stringify(e)),n||rn("\u5DF2\u4FDD\u5B58")}catch{n||rn("\u4FDD\u5B58\u5931\u8D25")}}function kS(){try{return JSON.parse(localStorage.getItem(Mh))}catch{return null}}function zS(n){Object.assign(u.res,n.res),u.upgrades=n.upgrades||{},p1(n.nodes);for(let[e,t,i,s,r,o]of n.buildings)zn[e]&&Fh(e,t,i,s,r,!1,o||1);u.stats=n.stats,u.goalDone=n.goalDone||{},u.terraform=n.terraform||0,u.ended=!!n.ended,u.nightsSurvived=n.nights||0,ox(u.terraform>=1),u.time.t=n.time.t,u.time.day=n.time.day,Ke.pos.set(n.player.x,Ee(n.player.x,n.player.z),n.player.z),Ke.yaw=n.player.yaw,Ke.o2=n.player.o2,Ke.health=Math.max(30,n.player.hp),Sx(n.colonists||[]),n.rover&&pu(n.rover.x,n.rover.z,n.rover.h),u.relicsFound=n.relics||[],u.plazaSeen=!!n.plazaSeen,u.morale=n.morale,u.waypoint=n.waypoint||null,u.megaSeen=!!n.megaSeen,u.mode=n.mode||"story",u.diffKey=n.diff||"normal",u.tech=n.tech||{},u.rp=n.rp||0,u.requests=n.requests||[],u.cityLevel=n.city||0,u.popTotal=n.pop??(n.colonists||[]).length,u.launched=!!n.launched,gp(Wi),rx(n.storm),Bl(n.chapter,!0),as(),u.terraform>0&&lp(zv(),u.terraform)}var zv=()=>u.buildings.filter(n=>n.type==="terraformer").map(n=>({x:n.x,z:n.z})),OS=xe.intro;document.querySelector(".logo span").textContent=xe.title;document.title="\u661F\u6E2F\uFF1A"+xe.title;mn.visited?.length&&(Ve("touch-note").innerHTML="\u5DF2\u5F00\u62D3\uFF1A"+mn.visited.map(n=>`${qn[n.id].name}\uFF08${n.pop} \u4EBA\uFF09`).join(" \xB7 "));Ve("story").innerHTML=OS.map((n,e)=>`<p style="animation-delay:${.4+e*1.1}s">${n}</p>`).join("");var di=kS();di&&(Ve("btn-continue").classList.remove("hidden"),Ve("cont-info").textContent=`${di.mode==="free"?"\u81EA\u7531":"\u5267\u60C5"} \xB7 ${xe.name} \xB7 ${Ti[di.chapter]?.title||""} \xB7 \u7B2C ${di.time.day} \u65E5 \xB7 ${di.pop??di.colonists?.length??0} \u4F4D\u5C45\u6C11`);matchMedia("(pointer: coarse)").matches&&(Ve("touch-note").innerHTML+="\u672C\u6E38\u620F\u9700\u8981\u952E\u76D8\u548C\u9F20\u6807\uFF0C\u8BF7\u5728\u7535\u8111\u4E0A\u6E38\u73A9\u3002");function FS(n){if(u.debug){setTimeout(n,1200);return}let e=Ve("cine"),t=xe.intro;u.cine=!0,e.classList.remove("hidden","out"),Ve("cine-lines").innerHTML=t.map((o,a)=>`<p style="animation-delay:${.6+a*2.1}s">${o}</p>`).join("");let i=!1,s=()=>{i||(i=!0,e.classList.add("out"),u.cine=!1,window.removeEventListener("keydown",r),window.removeEventListener("mousedown",s),setTimeout(()=>e.classList.add("hidden"),1500),setTimeout(n,900))},r=o=>{(o.code==="Space"||o.code==="Escape"||o.code==="Enter")&&s()};window.addEventListener("keydown",r),window.addEventListener("mousedown",s),setTimeout(s,1500+t.length*2100+1800)}function Oa(n){if(Y.init(),n&&di)zS(di),setTimeout(au,300);else{if(localStorage.removeItem(Mh),h1(),mn.carry&&it!=="mars"){Object.assign(u.upgrades,mn.carry.upgrades||{});for(let e in mn.carry.res)u.res[e]+=mn.carry.res[e];u.upgrades.rover&&pu(Mt.x+10,Mt.z+4,.5),setTimeout(()=>rn("\u968F\u8230\u7269\u8D44\u5DF2\u5378\u8F7D\uFF0C\u6240\u6709\u88C5\u5907\u5DF2\u540C\u6B65"),4e3)}u.time.t=.29,u.mode=u.mode||"story",u.diffKey=u.diffKey||"normal",Bl(0,!0),ti()?Dv(()=>{au(),setTimeout(()=>uo({k:"FREE MODE",title:xe.name,sub:`\u81EA\u7531\u5F00\u62D3 \xB7 ${pa[u.diffKey].name}`}),1600),Pt("\u65B9\u821F \xB7 AI","\u81EA\u7531\u6A21\u5F0F\u5DF2\u542F\u52A8\u3002\u6CA1\u6709\u4EFB\u52A1\u6E05\u5355\uFF0C\u8FD9\u7247\u571F\u5730\u5B8C\u5168\u5C5E\u4E8E\u4F60\u3002\u5EFA\u597D\u7B2C\u4E00\u5EA7\u8BBE\u65BD\u540E\uFF0C\u5C45\u6C11\u548C\u6307\u6325\u4E2D\u5FC3\u4F1A\u9646\u7EED\u63D0\u51FA\u59D4\u6258\u3002"),Pt("\u65B9\u821F \xB7 AI","\u63D0\u793A\uFF1AB \u5EFA\u9020\uFF0CT \u79D1\u7814\uFF0CTab \u6B96\u6C11\u5730\u6863\u6848\u3002\u795D\u4F60\u597D\u8FD0\u3002")}):FS(()=>Dv(()=>{au(),setTimeout(()=>uo(Ti[0]),1600),Ti[0].radio.forEach(e=>Pt(e[0],e[1]))}))}Ax(),hv(),go!=="low"&&s1(),Ve("intro").classList.add("hidden"),document.body.classList.add("playing"),u.started=!0,u.requestLock()}var ui={mode:"story",diff:"normal",planet:"mars"};function O0(){let n=(t,i,s,r,o)=>`<button class="opt ${o?"on":""}" data-g="${t}" data-k="${i}"><b>${s}</b><span>${r}</span></button>`,e=ui.mode==="free"?`<h3>\u661F\u7403</h3><div class="opts">${Object.values(qn).map(t=>n("planet",t.id,t.name,t.title+" \xB7 "+t.place,ui.planet===t.id)).join("")}</div>`:'<p class="sm">\u5267\u60C5\u4ECE\u706B\u661F\u5F00\u59CB\u3002\u5B8C\u6210\u6BCF\u9897\u661F\u7403\u7684\u6545\u4E8B\u540E\uFF0C\u4E58\u6B96\u6C11\u8230\u524D\u5F80\u4E0B\u4E00\u9897\u3002</p>';Ve("intro-pane").innerHTML=`<h3>\u6A21\u5F0F</h3><div class="opts">${Object.entries(P1).map(([t,i])=>n("mode",t,i.name,i.desc,ui.mode===t)).join("")}</div>
    <h3>\u96BE\u5EA6</h3><div class="opts three">${Object.entries(pa).map(([t,i])=>n("diff",t,i.name,i.desc,ui.diff===t)).join("")}</div>
    ${e}
    <button class="launch" id="btn-launch">\u51FA\u53D1</button>`,Ve("intro-pane").dataset.k="setup",Ve("intro-pane").classList.remove("hidden"),Ve("intro-pane").querySelectorAll(".opt").forEach(t=>t.addEventListener("click",()=>{ui[t.dataset.g]=t.dataset.k,t.dataset.g==="mode"&&t.dataset.k==="story"&&(ui.planet="mars"),Y.play("tick"),O0()})),Ve("btn-launch").addEventListener("click",BS)}function BS(){let n=ui.mode==="story"?"mars":ui.planet;if(ui.mode==="story"){if((mn.visited?.length||di)&&!confirm("\u5267\u60C5\u6A21\u5F0F\u4F1A\u4ECE\u706B\u661F\u91CD\u65B0\u5F00\u59CB\uFF0C\u5E76\u6E05\u9664\u6240\u6709\u661F\u7403\u7684\u8FDB\u5EA6\u3002\u786E\u5B9A\u5417\uFF1F"))return;jf()}else{if(bu(n)&&!confirm(`\u5C06\u8986\u76D6 ${qn[n].name} \u7684\u73B0\u6709\u5B58\u6863\uFF0C\u786E\u5B9A\u5417\uFF1F`))return;try{localStorage.removeItem(n==="mars"?"starport-newhome-v1":"starport-planet-"+n)}catch{}let t=dr();delete t.carry,t.planet=n,vl(t)}if(n===it){u.mode=ui.mode,u.diffKey=ui.diff,Oa(!1);return}try{localStorage.setItem("starport-newgame",JSON.stringify({mode:ui.mode,diff:ui.diff}))}catch{}let e=dr();e.planet=n,vl(e),location.href=location.pathname+(u.debug?"?debug":"")}Ve("btn-new").addEventListener("click",()=>{if(Y.init(),it!=="mars"&&!di&&mn.visited?.length&&!mn.freshFree){u.mode=mn.mode||"story",u.diffKey=mn.diff||"normal",Oa(!1);return}O0()});try{let n=JSON.parse(localStorage.getItem("starport-newgame"));n&&(localStorage.removeItem("starport-newgame"),u.mode=n.mode,u.diffKey=n.diff,setTimeout(()=>Oa(!1),60))}catch{}Ve("btn-continue").addEventListener("click",()=>Oa(!0));Ve("tele-planet").textContent=`${xe.name} \xB7 ${xe.place}`;var GS=`<h3>\u64CD\u4F5C</h3><div class="keys">
  <div><kbd>W A S D</kbd><span>\u79FB\u52A8</span></div><div><kbd>\u9F20\u6807</kbd><span>\u73AF\u89C6</span></div>
  <div><kbd>Shift</kbd><span>\u51B2\u523A</span></div><div><kbd>\u7A7A\u683C</kbd><span>\u8DF3\u8DC3 / \u55B7\u6C14\u80CC\u5305</span></div>
  <div><kbd>\u5DE6\u952E</kbd><span>\u91C7\u77FF \xB7 \u5C04\u51FB \xB7 \u653E\u7F6E\u5EFA\u7B51</span></div><div><kbd>\u53F3\u952E</kbd><span>\u53D6\u6D88\u5EFA\u9020</span></div>
  <div><kbd>1</kbd><kbd>2</kbd><span>\u5207\u6362\u5DE5\u5177</span></div><div><kbd>B</kbd><span>\u5EFA\u9020\u84DD\u56FE</span></div>
  <div><kbd>E</kbd><span>\u4E92\u52A8 \xB7 \u4EA4\u8C08 \xB7 \u4E0A\u8F66</span></div><div><kbd>U</kbd><span>\u5347\u7EA7\u6CE8\u89C6\u7684\u5EFA\u7B51</span></div><div><kbd>T</kbd><span>\u79D1\u7814</span></div>
  <div><kbd>Q</kbd><span>\u5C0F\u661F\u626B\u63CF\u77FF\u85CF</span></div><div><kbd>M</kbd><span>\u661F\u7403\u5730\u56FE / \u5BFC\u822A</span></div><div><kbd>F</kbd><span>\u624B\u7535\u7B52</span></div><div><kbd>Tab</kbd><span>\u6B96\u6C11\u5730\u6863\u6848</span></div>
  <div><kbd>P</kbd><span>\u62CD\u7167\u6A21\u5F0F</span></div><div><kbd>Esc</kbd><span>\u6682\u505C</span></div></div>
  <h3>\u751F\u5B58</h3><p>\u6C27\u6C14\u4F1A\u6301\u7EED\u6D88\u8017\u3002\u7740\u9646\u8231\u3001\u5236\u6C27\u7AD9\u548C\u5C45\u4F4F\u7A79\u9876\u9644\u8FD1\u4F1A\u81EA\u52A8\u8865\u6C27\u3002\u5EFA\u597D\u4F4F\u623F\u3001\u6C27\u6C14\u3001\u98DF\u7269\u3001\u6C34\u548C\u7740\u9646\u573A\uFF0C\u79FB\u6C11\u98DE\u8239\u5C31\u4F1A\u5230\u6765\u3002\u591C\u91CC\u8981\u63D0\u9632\u9508\u8680\u86DB\u3002</p>`,Ov=n=>{let e=Ve("intro-pane");if(!e.classList.contains("hidden")&&e.dataset.k===n.slice(0,20)){e.classList.add("hidden");return}e.dataset.k=n.slice(0,20),e.innerHTML=n,e.classList.remove("hidden"),Y.play("tick")};Ve("btn-t-help").addEventListener("click",()=>Ov(GS));Ve("btn-t-achv").addEventListener("click",()=>Ov(y0()));it!=="mars"&&!di&&(Ve("btn-new").textContent=`\u767B\u9646 ${xe.name}`);it!=="mars"&&!di&&mn.visited?.length&&Ve("btn-setup").classList.remove("hidden");Ve("btn-setup").addEventListener("click",()=>{Y.init(),O0()});if(mn.autoResume&&di){let n=dr();delete n.autoResume,vl(n),setTimeout(()=>{Oa(!0),rn(`\u6B22\u8FCE\u56DE\u6765 \xB7 ${xe.name}`)},50)}Ve("btn-save").addEventListener("click",()=>Ws(!1));Ve("btn-archive").addEventListener("click",()=>d0(m0()));Ve("btn-achv").addEventListener("click",()=>d0(y0()));Ve("btn-restart").addEventListener("click",()=>{confirm("\u5C06\u5220\u9664\u6240\u6709\u661F\u7403\u7684\u8FDB\u5EA6\uFF0C\u4ECE\u706B\u661F\u91CD\u65B0\u5F00\u59CB\u3002\u786E\u5B9A\u5417\uFF1F")&&(jf(),u.started=!1,location.href=location.pathname+(u.debug?"?debug":""))});Ve("vol").addEventListener("input",n=>Y.setVolume(+n.target.value));Ve("quality").value=go;u.baseFov=72;try{let n=+localStorage.getItem("starport-fov");n>=60&&n<=100&&(u.baseFov=n,wt.fov=n,wt.updateProjectionMatrix(),Ve("fov").value=n)}catch{}Ve("fov").addEventListener("input",n=>{u.baseFov=+n.target.value,wt.fov=+n.target.value,wt.updateProjectionMatrix();try{localStorage.setItem("starport-fov",n.target.value)}catch{}});Ve("quality").addEventListener("change",n=>{kv(n.target.value,!0);try{localStorage.setItem("starport-quality",n.target.value)}catch{}});Ve("sens").addEventListener("input",n=>{ve.sens=+n.target.value});Ve("btn-respawn").addEventListener("click",()=>{u.driving&&R0(Ke),Ke.respawn(),Ve("death").classList.add("hidden"),u.requestLock()});Ve("btn-endcont").addEventListener("click",()=>{Ve("ending").classList.add("hidden"),u.endingShown=!1,u.requestLock()});u.events.on("chapter",n=>uo(n));Pa.unlocked=n=>ls(n).ok;Pa.relicLeft=()=>hs().found<hs().total;Pa.relicFound=()=>hs().found;u.events.on("request",n=>{rn(`\u65B0\u59D4\u6258\uFF1A${n.text}`,"radio"),Pt(`${n.giver} \xB7 \u59D4\u6258`,n.line)});u.events.on("requestDone",n=>{rn(`\u59D4\u6258\u5B8C\u6210\uFF1A${n.text}`,"check","good"),Pt(n.giver,["\u8C22\u8C22\u4F60\uFF01\u8FD9\u5E2E\u4E86\u5927\u5FD9\u3002","\u592A\u597D\u4E86\uFF0C\u5927\u5BB6\u90FD\u4F1A\u8BB0\u5F97\u7684\u3002","\u8F9B\u82E6\u4E86\uFF01\u8FD9\u662F\u4E00\u70B9\u5FC3\u610F\u3002"][Math.floor(Math.random()*3)])});u.events.on("researched",n=>{(n==="swarm"||n==="alloy")&&as()});u.events.on("crafted",n=>{if(n!=="rover")return;let e=u.buildings.find(i=>i.type==="fabricator"),t=e||Ke.pos;for(let i=0;i<12;i++){let s=i*.9,r=(e?e.def.r:0)+5+i,o=t.x+Math.cos(s)*r,a=t.z+Math.sin(s)*r;if(!u.colliders.overlaps(o,a,2.6)){pu(o,a,-s);break}}Pt("\u65B9\u821F \xB7 AI","\u6F2B\u6E38\u8F66\u5DF2\u51FA\u5382\u3002\u8F66\u8231\u52A0\u538B\uFF0C\u53EF\u4EE5\u5728\u8F66\u91CC\u8865\u6C27\u3002\u5C0F\u5FC3\u522B\u5F00\u4E0B\u60AC\u5D16\u3002")});u.events.on("cityLevel",n=>{uo({k:`COLONY LEVEL ${["I","II","III","IV","V","VI"][u.cityLevel]}`,title:n.name,sub:`\u57CE\u5E02\u5347\u7EA7 \xB7 \u9886\u5730\u6269\u5C55\u81F3 ${n.r} \u7C73`});let e={1:["\u65B9\u821F \xB7 AI","\u6B96\u6C11\u5730\u5347\u7EA7\u4E3A\u5B9A\u5C45\u70B9\u3002\u9886\u5730\u6269\u5927\u4E86\uFF0C\u66F4\u8FDC\u7684\u571F\u5730\u53EF\u4EE5\u5EFA\u9020\u4E86\u3002"],2:["\u65B9\u821F \xB7 AI","\u5C0F\u9547\u89C4\u6A21\u8FBE\u6210\u3002\u516C\u5BD3\u5854\u4E0E\u5782\u76F4\u519C\u573A\u7684\u8BBE\u8BA1\u56FE\u5DF2\u89E3\u9501\u3002"],3:["\u65B9\u821F \xB7 AI","\u8FD9\u91CC\u5DF2\u7ECF\u662F\u4E00\u5EA7\u57CE\u5E02\u4E86\u3002\u751F\u6001\u4E2D\u67A2\u7684\u8BBE\u8BA1\u56FE\u5DF2\u89E3\u9501\u3002"],4:["\u65B9\u821F \xB7 AI","\u5927\u90FD\u4F1A\u3002\u591C\u91CC\uFF0C\u4ECE\u8F68\u9053\u4E0A\u80FD\u770B\u89C1\u4F60\u4EEC\u7684\u706F\u5149\u3002"],5:["\u65B9\u821F \xB7 AI","\u57CE\u5E02\u7B49\u7EA7\u8FBE\u5230\u300C\u661F\u6E2F\u300D\u2014\u2014\u4EBA\u7C7B\u53EF\u4EE5\u4ECE\u8FD9\u91CC\u98DE\u5411\u4E0B\u4E00\u9897\u661F\u7403\u4E86\u3002"]}[u.cityLevel];e&&Pt(e[0],e[1]),Ws(!0)});u.events.on("openBuild",()=>ds("build"));u.events.on("death",n=>{Y.laser(!1),setTimeout(()=>{if(u.endingShown){Ke.respawn();return}Ve("death-why").textContent=n,Ve("death").classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock()},1500)});u.events.on("tide",n=>{Y.play("night"),uo({k:"CRYSTAL TIDE",title:"\u6676\u6F6E\u4E4B\u591C",sub:`\u96F7\u8FBE\u63A2\u6D4B\u5230\u7EA6 ${n} \u4E2A\u4FE1\u53F7 \xB7 \u5B88\u4F4F\u6B96\u6C11\u5730`}),Pt("\u65B9\u821F \xB7 AI","\u8B66\u544A\uFF1A\u6676\u6F6E\u6B63\u5728\u903C\u8FD1\u3002\u6570\u91CF\u662F\u5E73\u65F6\u7684\u4E24\u500D\u2026\u2026\u5730\u9707\u4EEA\u8FD8\u8BB0\u5F55\u5230\u4E00\u4E2A\u5DE8\u5927\u7684\u4FE1\u53F7\uFF0C\u5B83\u6B63\u5728\u5411\u5730\u8868\u79FB\u52A8\u3002")});u.events.on("bossSpawn",()=>{rn("\u6676\u6BCD\u7834\u571F\u800C\u51FA","boss","warn"),Pt("\u65B9\u821F \xB7 AI","\u662F\u6676\u6BCD\uFF01\u4F53\u957F\u8D85\u8FC7\u5341\u7C73\u3002\u5B83\u7684\u51B2\u51FB\u6CE2\u80FD\u9707\u788E\u5EFA\u7B51\u2014\u2014\u7528\u6B65\u67AA\u548C\u70AE\u5854\u96C6\u4E2D\u706B\u529B\uFF01")});u.events.on("bossDown",()=>{rn("\u6676\u6BCD\u9668\u843D","boss","good"),Pt("\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u2026\u2026\u4F60\u4EEC\u505A\u5230\u4E86\u3002\u6574\u4E2A\u6307\u6325\u4E2D\u5FC3\u90FD\u5728\u6B22\u547C\u3002\u5B83\u7684\u6838\u5FC3\u91CC\u6709\u5927\u91CF\u7684\u949B\uFF0C\u62FF\u53BB\u5EFA\u8BBE\u5427\u3002")});var Cv=!0;u.events.on("nightfall",n=>{Y.play("night"),rn(`\u591C\u5E55\u964D\u4E34 \xB7 \u7EA6 ${n} \u4E2A\u79FB\u52A8\u4FE1\u53F7\u63A5\u8FD1`,"moon","warn"),Cv&&(Cv=!1,Pt("\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5B83\u4EEC\u6765\u4E86\u3002\u9508\u8680\u86DB\u4F1A\u653B\u51FB\u5EFA\u7B51\u548C\u4EBA\u3002\u7528\u6FC0\u5149\u6216\u6B65\u67AA\u51FB\u9000\u5B83\u4EEC\u2014\u2014\u5B83\u4EEC\u7684\u6676\u4F53\u6B8B\u9AB8\u91CC\u542B\u6709\u949B\u3002"))});u.events.on("broken",n=>rn(`${n.def.name} \u53D7\u635F\u505C\u673A\uFF0C\u767D\u5929\u4F1A\u81EA\u52A8\u4FEE\u590D`,"warn","warn"));var Pv=!0;u.events.on("shuttleIncoming",n=>rn(`\u79FB\u6C11\u98DE\u8239\u6B63\u5728\u964D\u843D \xB7 ${n} \u4EBA`,"ship"));u.events.on("colonistsArrived",n=>{n.length&&(rn(`\u6B22\u8FCE\u56DE\u5BB6\uFF1A${n.map(e=>e.name).join("\u3001")}`),Pv&&u.stats.arrived<=4&&(Pv=!1,Pt(n[0].name,"\u4F60\u597D\u2026\u2026\u8FD9\u5C31\u662F\u706B\u661F\uFF1F\u6BD4\u7167\u7247\u4E0A\u8FD8\u8981\u7EA2\u3002\u8C22\u8C22\u4F60\uFF0C\u4E3A\u6211\u4EEC\u70B9\u4EAE\u4E86\u8FD9\u91CC\u7684\u706F\u3002")))});var VS={habitat:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5C45\u4F4F\u7A79\u9876\u52A0\u538B\u5B8C\u6210\u3002\u5BA4\u5185\u6E29\u5EA6 21 \u6444\u6C0F\u5EA6\uFF0C\u6E7F\u5EA6 45%\u3002\u8FD9\u662F\u706B\u661F\u4E0A\u7B2C\u4E00\u4E2A\u53EF\u4EE5\u8131\u4E0B\u5934\u76D4\u7684\u5730\u65B9\u3002"],greenhouse:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u6E29\u5BA4\u542F\u52A8\u3002\u7B2C\u4E00\u6279\u79CD\u5B50\u5DF2\u7ECF\u64AD\u4E0B\uFF1A\u571F\u8C46\u3001\u5C0F\u9EA6\u3001\u756A\u8304\u2026\u2026\u548C\u4E00\u682A\u5411\u65E5\u8475\u3002"],beacon:["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u6536\u5230\u7740\u9646\u573A\u7684\u4FE1\u6807\u4FE1\u53F7\u4E86\uFF01\u53EA\u8981\u6B96\u6C11\u5730\u80FD\u517B\u6D3B\u4ED6\u4EEC\uFF0C\u79FB\u6C11\u98DE\u8239\u5C31\u4F1A\u51FA\u53D1\u3002"],reactor:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u805A\u53D8\u53CD\u5E94\u5806\u70B9\u706B\u6210\u529F\u3002\u8F93\u51FA\u7A33\u5B9A\u3002"],terraformer:["\u5730\u7403\u6307\u6325\u4E2D\u5FC3 \xB7 \u6797\u821F","\u5927\u6C14\u6539\u9020\u5854\u2026\u2026\u542F\u52A8\u4E86\u3002\u6211\u4EEC\u89C1\u8BC1\u7684\uFF0C\u662F\u4E00\u9897\u661F\u7403\u7684\u82CF\u9192\u3002"],apartment:["\u65B9\u821F \xB7 AI","\u7B2C\u4E00\u5EA7\u516C\u5BD3\u5854\u843D\u6210\u3002\u57CE\u5E02\u5F00\u59CB\u5411\u5929\u7A7A\u751F\u957F\u3002"],launch:["\u65B9\u821F \xB7 AI","\u661F\u9645\u53D1\u5C04\u53F0\u5B8C\u5DE5\u3002\u6B96\u6C11\u8230\u5DF2\u52A0\u6CE8\u5B8C\u6BD5\uFF0C\u968F\u65F6\u53EF\u4EE5\u51FA\u53D1\u3002"],monument:["\u65B9\u821F \xB7 AI","\u7EAA\u5FF5\u7891\u4E0A\u523B\u7740\u4E00\u884C\u5B57\uFF1A\u300C\u81F4\u7B2C\u4E00\u4E2A\u51FA\u53D1\u7684\u4EBA\u300D\u3002"],turret:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u9632\u5FA1\u70AE\u5854\u4E0A\u7EBF\u3002\u5B83\u4EEC\u9700\u8981\u7535\u529B\u624D\u80FD\u8FD0\u8F6C\u3002"],fabricator:["\u65B9\u821F\u4E00\u53F7 \xB7 AI","\u5236\u9020\u5DE5\u574A\u5C31\u7EEA\u3002\u9760\u8FD1\u540E\u6309 E \u6253\u5F00\u3002"]};u.events.on("built",n=>{let e=VS[n.type];e&&u.stats.built[n.type]===1&&Pt(e[0],e[1]),n.type==="monument"&&u.stats.built.monument===1&&setTimeout(JS,6e3),Ws(!0)});u.events.on("ending",()=>{Pt("Nadia Volkova","\u5927\u5BB6\u5FEB\u51FA\u6765\u770B\uFF01\u5929\u7A7A\u2026\u2026\u5929\u7A7A\u53D8\u84DD\u4E86\uFF01"),Pt("\u8D75\u5C0F\u96E8","\u4E0B\u96E8\u4E86\uFF01\u8FD9\u662F\u706B\u661F\u4E0A\u7684\u7B2C\u4E00\u573A\u96E8\uFF01"),setTimeout(WS,14e3)});function WS(){u.ended=!0,u.endingShown=!0,Ke.dead&&Ke.respawn(),Ve("death").classList.add("hidden"),document.pointerLockElement&&document.exitPointerLock();let n=u.stats,e=["\u4ECE\u7740\u9646\u8231\u7684\u8231\u95E8\u7B2C\u4E00\u6B21\u6253\u5F00\uFF0C\u5230\u4ECA\u5929\uFF0C\u8FC7\u53BB\u4E86 "+u.time.day+" \u4E2A\u706B\u661F\u65E5\u3002","\u66FE\u7ECF\u53EA\u6709\u98CE\u58F0\u7684\u5E73\u539F\u4E0A\uFF0C\u5982\u4ECA\u4F4F\u7740 "+u.colony.pop+" \u4E2A\u4EBA\u3002","\u4ED6\u4EEC\u6765\u81EA\u5730\u7403\u4E0A\u4E0D\u540C\u7684\u56FD\u5BB6\uFF0C\u8BF4\u7740\u4E0D\u540C\u7684\u8BED\u8A00\u3002","\u4F46\u4ECE\u4ECA\u5929\u8D77\uFF0C\u4ED6\u4EEC\u6709\u4E86\u540C\u4E00\u4E2A\u5730\u5740\u3002",'<div class="big">\u706B\u661F \xB7 \u65B0\u5BB6\u56ED</div>',"\u5B69\u5B50\u4EEC\u7B2C\u4E00\u6B21\u5728\u706B\u661F\u4E0A\uFF0C\u770B\u89C1\u4E86\u84DD\u8272\u7684\u5929\u7A7A\u3002",`<span class="stats">\u91C7\u96C6\u8D44\u6E90 ${n.mined.iron+n.mined.silicon+n.mined.ice+n.mined.titanium} \xB7 \u5EFA\u9020\u8BBE\u65BD ${u.buildings.length} \xB7 \u51FB\u9000\u9508\u8680\u86DB ${n.kills} \xB7 \u8FCE\u63A5\u79FB\u6C11 ${n.arrived}</span>`];Ve("ending-text").innerHTML=e.map((t,i)=>`<p style="animation-delay:${i*1.6}s">${t}</p>`).join(""),Ve("ending").classList.remove("hidden"),Y.play("chapter"),Ws(!0)}window.addEventListener("keydown",n=>{if(u.started){if(jx(n),n.code==="Tab"&&!u.endingShown&&!Ke.dead){u.menuOpen==="archive"?On(!0):u.menuOpen||ds("archive");return}if(n.code==="KeyM"&&!u.endingShown&&!Ke.dead){u.menuOpen==="mapscr"?On(!0):u.menuOpen||ds("mapscr");return}if(u.menuOpen==="mapscr"&&n.code==="Escape"){On(!0);return}if(n.code==="KeyT"&&!u.endingShown&&!Ke.dead){u.menuOpen==="research"?On(!0):u.menuOpen||ds("research");return}if(u.menuOpen==="research"&&n.code==="Escape"){On(!0);return}if(u.menuOpen==="trade"&&(n.code==="Escape"||n.code==="KeyE")){On(!0);return}if(n.code==="KeyP"&&!u.menuOpen){u.photo=!u.photo,u.usedPhoto=!0,document.body.classList.toggle("photo",u.photo),Lv(u.photo?k0:0),Y.play("tick");return}if(u.photo&&!u.menuOpen){let e=["Digit1","Digit2","Digit3","Digit4"].indexOf(n.code);if(e>=0){k0=e,Lv(e),Y.play("tick"),n.stopImmediatePropagation();return}if(n.code==="Enter"){u.snap=!0;return}}if(u.menuOpen==="archive"&&n.code==="Escape"){On(!0);return}u.menuOpen==="build"&&(n.code==="Escape"||n.code==="KeyB")?(On(!0),u.locked||void 0):u.menuOpen==="craft"&&(n.code==="Escape"||n.code==="KeyE")?On(!0):u.menuOpen==="starmap"&&n.code==="Escape"&&On(!0)}});var Ua=0,U0=30,N0=0,Iv=0,ka={};try{ka=JSON.parse(localStorage.getItem("starport-hints"))||{}}catch{}var Na=null,H0=0,tc=0,$S=[{id:"move",text:"<kbd>W A S D</kbd>\u79FB\u52A8\u3000<kbd>Shift</kbd>\u51B2\u523A<br><kbd>\u9F20\u6807</kbd>\u73AF\u89C6\u3000<kbd>\u7A7A\u683C</kbd>\u8DF3\u8DC3",when:()=>tc>.5&&tc<40},{id:"mine",text:"\u5BF9\u51C6\u53D1\u5149\u7684\u77FF\u77F3\uFF0C<kbd>\u6309\u4F4F\u5DE6\u952E</kbd> \u7528\u91C7\u77FF\u6FC0\u5149\u91C7\u96C6",when:()=>tc>6&&u.stats.mined.iron+u.stats.mined.silicon===0},{id:"build",text:"\u8D44\u6E90\u591F\u4E86\uFF01\u6309 <kbd>B</kbd> \u6253\u5F00\u5EFA\u9020\u83DC\u5355",when:()=>u.buildings.length===0&&u.res.iron>=8&&u.res.silicon>=6},{id:"o2",text:"\u6C27\u6C14\u5728\u6301\u7EED\u6D88\u8017\u3002\u56DE\u5230\u7740\u9646\u8231\u6216\u5236\u6C27\u7AD9\u9644\u8FD1\u4F1A\u81EA\u52A8\u8865\u6C27",when:()=>!Ke.inLife&&Ke.o2<Ke.maxO2*.5},{id:"night",text:"\u5929\u9ED1\u4E86\uFF0C\u6309 <kbd>F</kbd> \u6253\u5F00\u624B\u7535\u7B52",when:()=>u.time.night>.6&&!Ke.flashlight},{id:"craft",text:"\u9760\u8FD1\u5236\u9020\u5DE5\u574A\u6309 <kbd>E</kbd> \u5236\u9020\u6B66\u5668\u548C\u88C5\u5907\u2014\u2014\u8BD5\u8BD5\u52A0\u538B\u6F2B\u6E38\u8F66",when:()=>u.buildings.some(n=>n.type==="fabricator")&&!u.upgrades.rifle},{id:"drive",text:"\u6F2B\u6E38\u8F66\u5C31\u5728\u9644\u8FD1\uFF0C\u8D70\u8FC7\u53BB\u6309 <kbd>E</kbd> \u4E0A\u8F66",when:()=>mu()&&!u.driving&&!ka.drove},{id:"research",text:"\u7814\u7A76\u6240\u5DF2\u5EFA\u6210\uFF0C\u6309 <kbd>T</kbd> \u7528\u79D1\u7814\u70B9\u6570\u89E3\u9501\u79D1\u6280",when:()=>u.buildings.some(n=>n.type==="lab")&&(u.rp||0)>=20},{id:"request",text:"\u5C45\u6C11\u63D0\u51FA\u4E86\u59D4\u6258\uFF08\u53F3\u4FA7\u4EFB\u52A1\u680F\uFF09\uFF0C\u5B8C\u6210\u540E\u6709\u5956\u52B1",when:()=>(u.requests||[]).length>0},{id:"map",text:"\u6309 <kbd>M</kbd> \u6253\u5F00\u661F\u7403\u5730\u56FE\uFF0C\u70B9\u51FB\u53EF\u8BBE\u7F6E\u5BFC\u822A\u70B9",when:()=>tc>90},{id:"talk",text:"\u5BF9\u51C6\u5C45\u6C11\u6309 <kbd>E</kbd>\uFF0C\u542C\u542C\u4ED6\u4EEC\u7684\u6545\u4E8B",when:()=>u.colonists.some(n=>n.pos.distanceTo(Ke.pos)<10)},{id:"level",text:"\u4EBA\u53E3\u548C\u8BBE\u65BD\u8D8A\u591A\uFF0C\u57CE\u5E02\u7B49\u7EA7\u8D8A\u9AD8\uFF0C\u9886\u5730\u4E5F\u4F1A\u6269\u5927\uFF08\u770B\u5DE6\u4E0A\u89D2\uFF09",when:()=>u.colony.pop>=2}];function XS(n){if(tc+=n,u.driving&&(ka.drove=!0),Na)if(H0-=n,H0<=0||!Na.when()){ka[Na.id]=!0,Na=null;try{localStorage.setItem("starport-hints",JSON.stringify(ka))}catch{}}else return Na.text;for(let e of $S)if(!ka[e.id]&&e.when())return Na=e,H0=12,e.text;return""}function Fv(){let n=dr(),e=new Map((n.visited||[]).map(i=>[i.id,i])),t=[];xe.next&&t.push({id:xe.next,fresh:!e.has(xe.next)&&!bu(xe.next)});for(let i of Object.keys(qn))i!==it&&i!==xe.next&&(e.has(i)||bu(i))&&t.push({id:i,fresh:!1,info:e.get(i)});return t}function bu(n){try{return!!localStorage.getItem(n==="mars"?"starport-newhome-v1":"starport-planet-"+n)}catch{return!1}}function qS(n){ds("starmap"),Ve("starmap-list").innerHTML=Fv().map(e=>{let t=qn[e.id],i={mars:"MARS",europa:"EUROPA",kepler:"KEPLER-442b"}[e.id];return`<div class="dest" data-id="${e.id}"><div class="orb ${e.id}"></div><span class="badge ${e.fresh?"new":"home"}">${e.fresh?"UNCHARTED":"COLONY"}</span>
      <div class="dn">${t.name}</div><div class="de">${i}</div>
      <div class="dst">${t.title} \xB7 ${t.place}${e.info?`<br>\u5C45\u6C11 ${e.info.pop} \u4EBA \xB7 \u7B2C ${e.info.day} \u65E5\u79BB\u5F00`:""}${e.fresh?"<br>\u88C5\u5907\u540C\u6B65 \xB7 \u643A\u5E26\u90E8\u5206\u7269\u8D44":"<br>\u56DE\u5230\u4F60\u5EFA\u7ACB\u7684\u57CE\u5E02"}</div></div>`}).join(""),Ve("starmap-list").querySelectorAll(".dest").forEach(e=>e.addEventListener("click",()=>{On(!0),YS(n,e.dataset.id)}))}function YS(n,e){u.launching={b:n,t:0,dest:e},u.launched=!0,Y.play("rumble"),Pt("\u65B9\u821F \xB7 AI",`\u6B96\u6C11\u8230\u70B9\u706B\u3002\u76EE\u6807\uFF1A${qn[e].name}\u3002\u5168\u4F53\u4E58\u5458\uFF0C\u795D\u4F60\u4EEC\u597D\u8FD0\u3002`),n.anim.flame.visible=!0}function ZS(n){let e=u.launching;if(!e)return;e.t+=n;let t=e.b.anim.ship;e.t>2&&(t.position.y+=n*(2+(e.t-2)*9));let i=new w(e.b.x,e.b.y+t.position.y,e.b.z);for(let s=0;s<6;s++)fe.flame(i);e.t<5&&fe.dustPuff(new w(e.b.x+(Math.random()-.5)*16,e.b.y+1,e.b.z+(Math.random()-.5)*16),3,4),Ke.landDip=Math.max(Ke.landDip,Math.min(.15,.03*e.t)*Math.random()),e.t>9&&!e.faded&&(e.faded=!0,Ve("fade").classList.add("on")),e.t>11.5&&!e.done&&(e.done=!0,KS(e.dest))}function KS(n){let e=dr();e.visited=(e.visited||[]).filter(s=>s.id!==it).concat([{id:it,pop:u.colony.pop,day:u.time.day}]),e.planet=n,e.mode=u.mode||"story",e.diff=u.diffKey||"normal",e.autoResume=bu(n);let t={};for(let s in u.res)t[s]=Math.min(Math.floor(u.res[s]*.4),80);e.carry={upgrades:u.upgrades,res:t},Ws(!0),vl(e);let i=qn[n];Ve("ending-text").innerHTML=["\u66F2\u901F\u822A\u884C\u4E2D\u2026\u2026",`\u76EE\u7684\u5730\uFF1A<b>${i.name}</b>${e.autoResume?"\uFF08\u5DF2\u5F00\u62D3\uFF09":""}`,`<span class="stats">${xe.name}\u7684 ${u.colony.pop} \u4F4D\u5C45\u6C11\uFF0C\u4F1A\u66FF\u4F60\u5B88\u7740\u90A3\u91CC\u7684\u706F\u706B\u3002</span>`].map((s,r)=>`<p style="animation-delay:${r*1.2}s">${s}</p>`).join(""),document.querySelector("#ending .btns").classList.add("hidden"),Ve("ending").classList.remove("hidden"),Ve("fade").classList.remove("on"),u.endingShown=!0,document.pointerLockElement&&document.exitPointerLock(),setTimeout(()=>{location.href=location.pathname+(u.debug?"?debug":"")},5e3)}function JS(){u.endingShown=!0,document.pointerLockElement&&document.exitPointerLock();let e=(dr().visited||[]).concat([{id:it,pop:u.colony.pop}]),t=e.reduce((s,r)=>s+r.pop,0),i=["\u5F88\u4E45\u5F88\u4E45\u4EE5\u524D\uFF0C\u4E00\u4E2A\u4EBA\u72EC\u81EA\u7AD9\u5728\u706B\u661F\u7684\u7EA2\u8272\u5C18\u571F\u91CC\u3002","\u6C27\u6C14\u53EA\u591F\u6491\u4E09\u5206\u949F\uFF0C\u8EAB\u8FB9\u53EA\u6709\u4E00\u5EA7\u7740\u9646\u8231\u3002",e.map(s=>`${qn[s.id].name} \xB7 ${s.pop} \u4EBA`).join("\u3000"),`\u4ECA\u5929\uFF0C${t} \u4E2A\u4EBA\uFF0C\u751F\u6D3B\u5728\u4E09\u9897\u661F\u7403\u4E0A\u3002`,'<div class="big">\u661F\u9645\u6587\u660E</div>',"\u8FD9\u4E00\u5207\uFF0C\u90FD\u4ECE\u4F60\u8FC8\u51FA\u7684\u7B2C\u4E00\u6B65\u5F00\u59CB\u3002",'<span class="stats">\u611F\u8C22\u6E38\u73A9\u300A\u661F\u6E2F\u300B\u3002\u4F60\u53EF\u4EE5\u7EE7\u7EED\u5EFA\u8BBE\uFF0C\u57CE\u5E02\u4F1A\u4E00\u76F4\u5728\u8FD9\u91CC\u7B49\u4F60\u3002</span>'];Ve("ending-text").innerHTML=i.map((s,r)=>`<p style="animation-delay:${r*1.8}s">${s}</p>`).join(""),Ve("ending").classList.remove("hidden"),Y.play("chapter"),Ws(!0)}function jS(n){let e={prompt:"",crossClass:""};if(Ke.dead||u.menuOpen)return e;if(u.driving)return e.prompt=`<span class="big">${gv()}</span> KM/H<br><kbd>W S</kbd> \u6CB9\u95E8 \xB7 <kbd>A D</kbd> \u8F6C\u5411 \xB7 <kbd>Shift</kbd> \u52A0\u901F \xB7 <kbd>\u7A7A\u683C</kbd> \u5239\u8F66 \xB7 <kbd>E</kbd> \u4E0B\u8F66`,e;let t=Hx(Ke.pos);if(t)return e.prompt="<b>\u5730\u7403\u8865\u7ED9\u8231</b><br><kbd>E</kbd>\u6253\u5F00",ve.hit("KeyE")&&zx(t),e;let i=Px(Ke.pos);if(i)return e.prompt=`<b>${i.name}</b><br><kbd>E</kbd>\u8C03\u67E5`,ve.hit("KeyE")&&Ix(i),e;let s=mu();if(s&&Math.hypot(s.x-Ke.pos.x,s.z-Ke.pos.z)<4.5)return e.prompt="<b>\u52A0\u538B\u6F2B\u6E38\u8F66</b><br><kbd>E</kbd>\u4E0A\u8F66",ve.hit("KeyE")&&(pv(),ve.pressed.delete("KeyE")),e;let r=wt.position,o=Ke.fwd,a=bx(r,o),l=u.buildings.find(f=>f.type==="fabricator"&&Math.hypot(f.x-Ke.pos.x,f.z-Ke.pos.z)<f.def.r+6);Ua=Math.max(0,Ua-n),Iv=Math.max(0,Iv-n);let c=u.buildings.find(f=>f.type==="trade"&&Math.hypot(f.x-Ke.pos.x,f.z-Ke.pos.z)<f.def.r+5),h=u.buildings.find(f=>f.type==="launch"&&Math.hypot(f.x-Ke.pos.x,f.z-Ke.pos.z)<f.def.r+8);if(a){if(e.crossClass="talk",e.prompt=`<b>${a.name}</b> \xB7 ${a.job}<br><kbd>E</kbd> \u4EA4\u8C08`,ve.hit("KeyE")){Pt(a.name,a.line);let f=u.stats.talked=u.stats.talked||[];f.includes(a.idx)||f.push(a.idx)}}else h&&!u.launching?h.powered?Fv().length?(e.prompt="<b>\u6B96\u6C11\u8230\u5DF2\u5C31\u7EEA</b><br><kbd>E</kbd>\u6253\u5F00\u661F\u56FE",ve.hit("KeyE")&&qS(h)):e.prompt="\u661F\u9645\u53D1\u5C04\u53F0 \xB7 \u6682\u65E0\u53EF\u7528\u822A\u7EBF":e.prompt='\u661F\u9645\u53D1\u5C04\u53F0 \xB7 <span class="badc">\u7535\u529B\u4E0D\u8DB3</span>':c?(e.prompt=`<b>\u661F\u9645\u8D38\u6613\u7AD9</b>${c.powered?"":' \xB7 <span class="badc">\u505C\u7535</span>'}<br><kbd>E</kbd>\u4EA4\u6613`,ve.hit("KeyE")&&(c.powered?ds("trade"):rn("\u8D38\u6613\u7AD9\u6CA1\u6709\u7535\u529B","warn","warn"))):l&&(e.prompt=`<kbd>E</kbd> \u6253\u5F00\u5236\u9020\u5DE5\u574A${l.powered?"":"\uFF08\u505C\u7535\u4E2D\uFF09"}`,ve.hit("KeyE")&&(l.powered?ds("craft"):rn("\u5236\u9020\u5DE5\u574A\u6CA1\u6709\u7535\u529B")));let d=u.lookBuilding;if(!e.prompt&&d&&hn.id!=="build"){let f=d.def,p=d.level||1,g=Oh(d)?`<br><kbd>U</kbd>\u5347\u7EA7\u5230 Lv.${p+1}\u3000${sa(Ap(d))}`:"";e.prompt=`<b>${f.name}</b>\u3000Lv.${p}${p>=Rp?"\uFF08\u6EE1\u7EA7\uFF09":""} \xB7 \u8010\u4E45 ${Math.ceil(d.hp)}/${Math.round(d.maxHp)}${f.power<0?d.powered?' \xB7 <span class="okc">\u4F9B\u7535\u4E2D</span>':' \xB7 <span class="badc">\u505C\u7535</span>':""}${g}<br><kbd>X</kbd>${Ua>0?'<span class="badc">\u518D\u6309\u4E00\u6B21\u786E\u8BA4\u62C6\u9664\uFF08\u8FD4\u8FD8 50%\uFF09</span>':"\u62C6\u9664"}`,d.broken&&(e.prompt=e.prompt.replace("</b>",'</b> <span class="badc">\u53D7\u635F\u505C\u673A \xB7 \u767D\u5929\u81EA\u52A8\u4FEE\u590D</span>')),ve.hit("KeyU")&&Oh(d)&&(F1(d)?rn(`${f.name} \u5347\u7EA7\u5230 Lv.${d.level}`,"star","good"):(Y.play("deny"),rn("\u5347\u7EA7\u6750\u6599\u4E0D\u8DB3","warn","warn"))),ve.hit("KeyX")&&(Ua>0?(V1(d,!0),Ua=0,rn(`\u5DF2\u62C6\u9664 ${f.name}`)):Ua=2)}return hn.id==="laser"?(u.aimNode&&!e.crossClass&&(e.crossClass="node"),ao(r,o,9)&&(e.crossClass="enemy")):hn.id==="rifle"&&ao(r,o,120)&&(e.crossClass="enemy"),e}var Mu=[["\u539F\u8272","none"],["\u80F6\u7247","sepia(.35) contrast(1.12) saturate(1.15) brightness(1.03)"],["\u9ED1\u767D","grayscale(1) contrast(1.25)"],["\u51B7\u8C03","hue-rotate(-18deg) saturate(.85) contrast(1.08) brightness(1.05)"]],k0=0;function Lv(n){Vs.style.filter=Mu[n][1]==="none"?"":Mu[n][1],Ve("photo-bar").innerHTML=Mu.map((e,t)=>`<span class="${t===n?"on":""}"><kbd>${t+1}</kbd>${e[0]}</span>`).join("")+'<span class="sep"></span><span><kbd>Enter</kbd>\u4FDD\u5B58\u7167\u7247</span><span><kbd>P</kbd>\u9000\u51FA</span>'}function QS(){let n=Vs.width,e=Vs.height,t=Math.round(e*.1),i=document.createElement("canvas");i.width=n,i.height=e;let s=i.getContext("2d");s.filter=Mu[k0][1],s.drawImage(Vs,0,0),s.filter="none",s.fillStyle="#000",s.fillRect(0,0,n,t),s.fillRect(0,e-t,n,t);let r=Math.round(e*.022);s.font=`300 ${r*1.6}px "Noto Sans SC", sans-serif`,s.fillStyle="#fff",s.textBaseline="middle",s.fillText("\u661F \u6E2F",r*2,e-t/2),s.font=`400 ${r}px "Noto Sans SC", sans-serif`,s.fillStyle="rgba(255,255,255,.7)",s.textAlign="right",s.fillText(`${xe.name} \xB7 ${xe.place} \xB7 \u7B2C ${u.time.day} \u65E5 \xB7 \u4EBA\u53E3 ${u.colony.pop}`,n-r*2,e-t/2);let o=document.createElement("a");o.download=`\u661F\u6E2F-${xe.name}-\u7B2C${u.time.day}\u65E5.png`,o.href=i.toDataURL("image/png"),document.body.appendChild(o),o.click(),o.remove(),Ve("shutter").classList.remove("on"),Ve("shutter").offsetWidth,Ve("shutter").classList.add("on"),Y.play("shutter"),u.stats.photos=(u.stats.photos||0)+1}var Gs=null,z0=9.5;function Dv(n){if(u.debug&&!/landing/.test(location.search)){n();return}u.cine=!0,document.body.classList.add("cinema");let e=za.group,t=Ee(Mt.x,Mt.z)+.1,i=new ne(new qt(1.7,10,18,1,!0),y.flame);i.rotation.x=Math.PI,i.position.y=-4.2,e.add(i);let s=_e(16752704,22,e,0,-.5,0),r=new _i(16752720,0,120,1.4);r.position.y=-2,e.add(r);let o=new w(Mt.x+20,0,Mt.z+25);o.y=Ee(o.x,o.z)+3.2,u.time.t=.282,Gs={t:0,gy:t,flame:i,fglow:s,lamp:r,done:n,camAt:o,landed:!1,shake:0},e.position.y=t+460,Y.play("rumble"),Y.engine(1);let a=l=>{(l.type==="mousedown"||l.code==="Space"||l.code==="Escape")&&(Gs.t=Math.max(Gs.t,z0+6))};Gs.skip=a,window.addEventListener("keydown",a),window.addEventListener("mousedown",a)}var Uv=new dn,Nv=new dn,eT=new Sn,Hv=new pt;function Bv(n){let e=Gs;e.t+=n;let t=za.group,i=Math.min(1,e.t/z0),s=1-Math.pow(1-i,2.6);t.position.y=e.gy+460*(1-s),t.rotation.z=Math.sin(e.t*1.1)*.05*(1-i);let r=i<1;e.flame.visible=e.fglow.visible=r,e.flame.scale.set(1,.5+(1-s)*.9+Math.random()*.15,1),e.lamp.intensity=r?400*(.6+Math.random()*.4):0;let o=t.position.y-e.gy;if(r){let c=new w(t.position.x,t.position.y-1,t.position.z);for(let h=0;h<4;h++)fe.flame(c,1.4);if(o<40)for(let h=0;h<3;h++){let d=Math.random()*Math.PI*2,f=2+Math.random()*(14-o*.25);fe.dustPuff(new w(Mt.x+Math.cos(d)*f,e.gy+.3,Mt.z+Math.sin(d)*f),1,2)}e.shake=Math.max(e.shake,Math.max(0,1-o/120)*.25)}else e.landed||(e.landed=!0,e.shake=1,fe.ring(new w(Mt.x,e.gy,Mt.z),4,160),fe.dustPuff(new w(Mt.x,e.gy+1,Mt.z),70,16),Y.play("land"),Y.play("rumble"),Y.engine(0));e.shake*=Math.pow(.15,n),Al(0,wt.position),Ll(n,wt.position);let a=new w(t.position.x,t.position.y+3,t.position.z),l=e.t-z0-2.2;if(l<0)wt.position.copy(e.camAt),wt.position.x+=Math.sin(e.t*.15)*4,wt.lookAt(a);else{let c=Math.min(1,l/3.2),h=c*c*(3-2*c),d=new w(Ke.pos.x,Ke.pos.y+1.7,Ke.pos.z);if(wt.position.lerpVectors(e.camAt,d,h),Hv.lookAt(e.camAt,a,wt.up),Uv.setFromRotationMatrix(Hv),Nv.setFromEuler(eT.set(Ke.pitch,Ke.yaw,0,"YXZ")),wt.quaternion.slerpQuaternions(Uv,Nv,h),c>=1){t.remove(e.flame,e.fglow,e.lamp),t.position.y=e.gy,t.rotation.z=0,window.removeEventListener("keydown",e.skip),window.removeEventListener("mousedown",e.skip),document.body.classList.remove("cinema"),u.cine=!1,Gs=null,Y.engine(0),e.done();return}}e.shake>.01&&(wt.position.x+=(Math.random()-.5)*e.shake*.5,wt.position.y+=(Math.random()-.5)*e.shake*.4)}var tT=new jo,yu=0;function Gv(){requestAnimationFrame(Gv);let n=Math.min(tT.getDelta(),.05);if(Gs){Bv(n),Nh(n),D0(),ve.endFrame();return}if(!u.started){yu+=n*.05;let t=30;wt.position.set(Mt.x+Math.cos(yu)*t,Ee(Mt.x,Mt.z)+6,Mt.z+Math.sin(yu)*t),wt.lookAt(Mt.x,Ee(Mt.x,Mt.z)+4,Mt.z),u.time.t=.27+Math.sin(yu*.5)*.01,Al(0,wt.position),Ll(n,wt.position),Nh(n),D0();return}u.debug&&(u.locked=!0);let e=u.locked&&!u.menuOpen&&!u.endingShown&&!u.cine;Ve("clickhint").classList.toggle("hidden",!(u.started&&!u.locked&&!u.menuOpen&&!Ke.dead&&!u.endingShown&&!u.cine)),e?Vv(n):(g0(0,{prompt:""}),Al(0,wt.position)),Ll(e?n:0,wt.position),Nh(e?n:0),ve.endFrame(),D0(),Mx(Fn),u.snap&&(u.snap=!1,QS())}function Vv(n){{u.driving&&ve.hit("KeyE")&&!u.menuOpen&&(R0(Ke),ve.pressed.delete("KeyE")),u.driving||Ke.update(n),mv(n,Ke,wt),Al(n,wt.position),u.time.dawn&&(u.time.dawn=!1,rn(`\u7B2C ${u.time.day} \u65E5 \xB7 \u9ECE\u660E`,"sun")),d1(n),u.driving?u.lookBuilding=null:yx(n,Ke,wt),Z1(n,{shoot:qh}),Av(n),Ex(n),S1(n,hn.id==="build"&&!!At.type),ZS(n),cp.emissiveIntensity=.06+u.time.night*(.55+Math.sin(performance.now()*.0015)*.15),dx(n),Nx(n),hx(n),ix(n),za.beacon.visible=Math.sin(performance.now()*.004)>0,ev(n),ov(n),Lx(n),uv(n),N1(n,Pa),vv(n),Ev(n),r1(),!u.plazaSeen&&u.time.night>.6&&u.colonists.filter(t=>t.atPlaza&&!t.target).length>=4&&(u.plazaSeen=!0,Pt("\u82CF\u5FF5 \xB7 \u6559\u5E08","\u4ECA\u665A\u5927\u5BB6\u90FD\u6765\u4E86\u3002\u6211\u4EEC\u5C31\u8FD9\u6837\u7AD9\u7740\uFF0C\u770B\u7740\u90A3\u9897\u84DD\u8272\u7684\u661F\u7403\u8F6C\u554A\u8F6C\u2026\u2026\u5B69\u5B50\u95EE\u6211\uFF0C\u90A3\u662F\u54EA\u91CC\u3002\u6211\u8BF4\uFF0C\u90A3\u662F\u6211\u4EEC\u51FA\u53D1\u7684\u5730\u65B9\u3002"));let e=jS(n);e.tip=XS(n),g0(n,e),Y.update(u.storm,u.time.night),U0-=n,U0<=0&&(U0=45,Ws(!0)),u.terraform>0&&u.terraform<=1&&(N0-=n,N0<=0&&(N0=4,lp(zv(),u.terraform)))}}Ve("loading").style.transition="opacity .8s";Ve("loading").style.opacity=0;setTimeout(()=>Ve("loading").remove(),900);Gv();window.addEventListener("beforeunload",()=>Ws(!0));window.__G=u;window.__dbg={give(n=200){for(let e in sn)u.res[e]+=n},tp(n,e){Ke.pos.set(n,Ee(n,e),e)},time(n){u.time.t=n},build:(n,e,t)=>Fh(n,e,t,0),chapter:n=>Bl(n),look(n,e){Ke.yaw=n,Ke.pitch=e},begin:()=>Oa(!1),fest:()=>yv(),boom:(n,e,t,i)=>_r(new w(n,e,t),i),pod:()=>{let n=Qp();return{x:n.x,z:n.z}},slope:(n,e)=>Ee(n+3,e)-Ee(n,e),landStep(n){for(let e=0;e<n&&Gs;e+=.05)Bv(.05);return!!Gs},step(n,e=.05){for(let t=0;t<n;t+=e)Vv(e),Ll(e,wt.position),ve.endFrame()},input:ve,save:Ws,toast:rn,setGhost:no,openMenu:ds,closeMenus:On,tool:hn,placement:At,rover:mu};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
