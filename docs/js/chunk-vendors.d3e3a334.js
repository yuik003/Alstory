(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(e,t,n){var i=n("b622"),r=i("toStringTag"),s={};s[r]="z",e.exports="[object z]"===String(s)},"0366":function(e,t,n){var i=n("e330"),r=n("59ed"),s=i(i.bind);e.exports=function(e,t){return r(e),void 0===t?e:s?s(e,t):function(){return e.apply(t,arguments)}}},"03d6":function(e,t,n){var i=n("9c0e"),r=n("6ca1"),s=n("39ad")(!1),o=n("5a94")("IE_PROTO");e.exports=function(e,t){var n,a=r(e),l=0,c=[];for(n in a)n!=o&&i(a,n)&&c.push(n);while(t.length>l)i(a,n=t[l++])&&(~s(c,n)||c.push(n));return c}},"051b":function(e,t,n){var i=n("1a14"),r=n("10db");e.exports=n("0bad")?function(e,t,n){return i.f(e,t,r(1,n))}:function(e,t,n){return e[t]=n,e}},"05f5":function(e,t,n){var i=n("7a41"),r=n("ef08").document,s=i(r)&&i(r.createElement);e.exports=function(e){return s?r.createElement(e):{}}},"06cf":function(e,t,n){var i=n("83ab"),r=n("c65b"),s=n("d1e7"),o=n("5c6c"),a=n("fc6a"),l=n("a04b"),c=n("1a2d"),u=n("0cfb"),h=Object.getOwnPropertyDescriptor;t.f=i?h:function(e,t){if(e=a(e),t=l(t),u)try{return h(e,t)}catch(n){}if(c(e,t))return o(!r(s.f,e,t),e[t])}},"072d":function(e,t,n){"use strict";var i=n("0bad"),r=n("9876"),s=n("fed5"),o=n("1917"),a=n("0983"),l=n("9fbb"),c=Object.assign;e.exports=!c||n("4b8b")((function(){var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach((function(e){t[e]=e})),7!=c({},e)[n]||Object.keys(c({},t)).join("")!=i}))?function(e,t){var n=a(e),c=arguments.length,u=1,h=s.f,d=o.f;while(c>u){var f,p=l(arguments[u++]),m=h?r(p).concat(h(p)):r(p),g=m.length,v=0;while(g>v)f=m[v++],i&&!d.call(p,f)||(n[f]=p[f])}return n}:c},"07fa":function(e,t,n){var i=n("50c4");e.exports=function(e){return i(e.length)}},"0829":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Nc})),n.d(t,"b",(function(){return Tl})),n.d(t,"c",(function(){return dl})),n.d(t,"d",(function(){return tl})),n.d(t,"e",(function(){return oc})),n.d(t,"f",(function(){return El})),n.d(t,"g",(function(){return x})),n.d(t,"h",(function(){return Il})),n.d(t,"i",(function(){return ac})),n.d(t,"j",(function(){return lc})),n.d(t,"k",(function(){return R})),n.d(t,"l",(function(){return jc})),n.d(t,"m",(function(){return qa})),n.d(t,"n",(function(){return se})),n.d(t,"o",(function(){return H})),n.d(t,"p",(function(){return Qa})),n.d(t,"q",(function(){return _})),n.d(t,"r",(function(){return K})),n.d(t,"s",(function(){return g})),n.d(t,"t",(function(){return Wa})),n.d(t,"u",(function(){return Wc})),n.d(t,"v",(function(){return nu})),n.d(t,"w",(function(){return tu})),n.d(t,"x",(function(){return bl})),n.d(t,"y",(function(){return rl})),n.d(t,"z",(function(){return sl})),n.d(t,"A",(function(){return el})),n.d(t,"B",(function(){return Hc})),n.d(t,"C",(function(){return Zc})),n.d(t,"D",(function(){return Cl})),n.d(t,"E",(function(){return ol})),n.d(t,"F",(function(){return gl})),n.d(t,"G",(function(){return vl})),n.d(t,"H",(function(){return wl})),n.d(t,"I",(function(){return Ec})),n.d(t,"J",(function(){return Sc})),n.d(t,"K",(function(){return pl})),n.d(t,"L",(function(){return Yc})),n.d(t,"M",(function(){return $c})),n.d(t,"N",(function(){return Lc})),n.d(t,"O",(function(){return Fc})),n.d(t,"P",(function(){return Vc})),n.d(t,"Q",(function(){return Bc})),n.d(t,"R",(function(){return zc})),n.d(t,"S",(function(){return iu})),n.d(t,"T",(function(){return bc})),n.d(t,"U",(function(){return _c})),n.d(t,"V",(function(){return xl})),n.d(t,"W",(function(){return kl})),n.d(t,"X",(function(){return Kc})),n.d(t,"Y",(function(){return Gc})),n.d(t,"Z",(function(){return vc})),n.d(t,"ab",(function(){return fc})),n.d(t,"bb",(function(){return ll})),n.d(t,"cb",(function(){return al})),n.d(t,"db",(function(){return Jc})),n.d(t,"eb",(function(){return eu})),n.d(t,"fb",(function(){return qc})),n.d(t,"gb",(function(){return f})),n.d(t,"hb",(function(){return uc})),n.d(t,"ib",(function(){return xc})),n.d(t,"jb",(function(){return Cc})),n.d(t,"kb",(function(){return Uc})),n.d(t,"lb",(function(){return _l})),n.d(t,"mb",(function(){return mc}));var i=n("589b"),r=n("22e5"),s=n("e691"),o=n("1fd5"),a=n("8f6b");const l="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let u="9.4.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new s["b"]("@firebase/firestore");function d(){return h.logLevel}function f(e){h.setLogLevel(e)}function p(e,...t){if(h.logLevel<=s["a"].DEBUG){const n=t.map(v);h.debug(`Firestore (${u}): ${e}`,...n)}}function m(e,...t){if(h.logLevel<=s["a"].ERROR){const n=t.map(v);h.error(`Firestore (${u}): ${e}`,...n)}}function g(e,...t){if(h.logLevel<=s["a"].WARN){const n=t.map(v);h.warn(`Firestore (${u}): ${e}`,...n)}}function v(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e="Unexpected state"){const t=`FIRESTORE (${u}) INTERNAL ASSERTION FAILED: `+e;throw m(t),new Error(t)}function b(e,t){e||y()}function _(e,t){e||y()}function w(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e,t){this.user=t,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization="Bearer "+e}}class E{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(c.UNAUTHENTICATED))}shutdown(){}}class T{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class O{constructor(e){this.t=e,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let r=new k;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new k,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const t=r;e.enqueueRetryable(async()=>{await t.promise,await i(this.currentUser)})},o=e=>{p("FirebaseCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(p("FirebaseCredentialsProvider","Auth not yet detected"),r.resolve(),r=new k)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(p("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(b("string"==typeof t.accessToken),new S(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return b(null===e||"string"==typeof e),new c(e)}}class I{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=c.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},t=this.h.auth.getAuthHeaderValueForFirstParty([]);return t&&(e.Authorization=t),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class D{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new I(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.g(e),this.p=e=>t.writeSequenceNumber(e))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */N.T=-1;class A{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=P(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%e.length))}return n}}function j(e,t){return e<t?-1:e>t?1:0}function M(e,t,n){return e.length===t.length&&e.every((e,i)=>n(e,t[i]))}function $(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new x(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new x(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new x(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return R.fromMillis(Date.now())}static fromDate(e){return R.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new R(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?j(this.nanoseconds,e.nanoseconds):j(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.timestamp=e}static fromTimestamp(e){return new L(e)}static min(){return new L(new R(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function V(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function B(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,t,n){void 0===t?t=0:t>e.length&&y(),void 0===n?n=e.length-t:n>e.length-t&&y(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===z.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof z?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),r=t.get(i);if(n<r)return-1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class q extends z{construct(e,t,n){return new q(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new x(C.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new q(t)}static emptyPath(){return new q([])}}const U=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class H extends z{construct(e,t,n){return new H(e,t,n)}static isValidIdentifier(e){return U.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),H.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new H(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const r=()=>{if(0===n.length)throw new x(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new x(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new x(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(s=!s,i++):"."!==t||s?(n+=t,i++):(r(),i++)}if(r(),s)throw new x(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new H(t)}static emptyPath(){return new H([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.fields=e,e.sort(H.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return M(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new G(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new G(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return j(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}G.EMPTY_BYTE_STRING=new G("");const Y=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Q(e){if(b(!!e),"string"==typeof e){let t=0;const n=Y.exec(e);if(b(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:X(e.seconds),nanos:X(e.nanos)}}function X(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function J(e){return"string"==typeof e?G.fromBase64String(e):G.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ee(e){const t=e.mapValue.fields.__previous_value__;return Z(t)?ee(t):t}function te(e){const t=Q(e.mapValue.fields.__local_write_time__.timestampValue);return new R(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(e){return null==e}function ie(e){return 0===e&&1/e==-1/0}function re(e){return"number"==typeof e&&Number.isInteger(e)&&!ie(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(q.fromString(e))}static fromName(e){return new se(q.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===q.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return q.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new q(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Z(e)?4:10:y()}function ae(e,t){const n=oe(e);if(n!==oe(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return te(e).isEqual(te(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Q(e.timestampValue),i=Q(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return J(e.bytesValue).isEqual(J(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return X(e.geoPointValue.latitude)===X(t.geoPointValue.latitude)&&X(e.geoPointValue.longitude)===X(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return X(e.integerValue)===X(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=X(e.doubleValue),i=X(t.doubleValue);return n===i?ie(n)===ie(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return M(e.arrayValue.values||[],t.arrayValue.values||[],ae);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(F(n)!==F(i))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===i[r]||!ae(n[r],i[r])))return!1;return!0}(e,t);default:return y()}}function le(e,t){return void 0!==(e.values||[]).find(e=>ae(e,t))}function ce(e,t){const n=oe(e),i=oe(t);if(n!==i)return j(n,i);switch(n){case 0:return 0;case 1:return j(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=X(e.integerValue||e.doubleValue),i=X(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return ue(e.timestampValue,t.timestampValue);case 4:return ue(te(e),te(t));case 5:return j(e.stringValue,t.stringValue);case 6:return function(e,t){const n=J(e),i=J(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let r=0;r<n.length&&r<i.length;r++){const e=j(n[r],i[r]);if(0!==e)return e}return j(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=j(X(e.latitude),X(t.latitude));return 0!==n?n:j(X(e.longitude),X(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let r=0;r<n.length&&r<i.length;++r){const e=ce(n[r],i[r]);if(e)return e}return j(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},i=Object.keys(n),r=t.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let o=0;o<i.length&&o<s.length;++o){const e=j(i[o],s[o]);if(0!==e)return e;const t=ce(n[i[o]],r[s[o]]);if(0!==t)return t}return j(i.length,s.length)}(e.mapValue,t.mapValue);default:throw y()}}function ue(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return j(e,t);const n=Q(e),i=Q(t),r=j(n.seconds,i.seconds);return 0!==r?r:j(n.nanos,i.nanos)}function he(e){return de(e)}function de(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Q(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?J(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,se.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=de(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const r of t)i?i=!1:n+=",",n+=`${r}:${de(e.fields[r])}`;return n+"}"}(e.mapValue):y();var t,n}function fe(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function pe(e){return!!e&&"integerValue"in e}function me(e){return!!e&&"arrayValue"in e}function ge(e){return!!e&&"nullValue"in e}function ve(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ye(e){return!!e&&"mapValue"in e}function be(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return V(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=be(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=be(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.value=e}static empty(){return new _e({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ye(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=be(t)}setAll(e){let t=H.emptyPath(),n={},i=[];e.forEach((e,r)=>{if(!t.isImmediateParentOf(r)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=r.popLast()}e?n[r.lastSegment()]=be(e):i.push(r.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){const t=this.field(e.popLast());ye(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ae(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];ye(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){V(t,(t,n)=>e[t]=n);for(const i of n)delete e[i]}clone(){return new _e(be(this.value))}}function we(e){const t=[];return V(e.fields,(e,n)=>{const i=new H([e]);if(ye(n)){const e=we(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)}),new W(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ce{constructor(e,t,n,i,r){this.key=e,this.documentType=t,this.version=n,this.data=i,this.documentState=r}static newInvalidDocument(e){return new Ce(e,0,L.min(),_e.empty(),0)}static newFoundDocument(e,t,n){return new Ce(e,1,t,n,0)}static newNoDocument(e,t){return new Ce(e,2,t,_e.empty(),0)}static newUnknownDocument(e,t){return new Ce(e,3,t,_e.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_e.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_e.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Ce(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t=null,n=[],i=[],r=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.A=null}}function ke(e,t=null,n=[],i=[],r=null,s=null,o=null){return new xe(e,t,n,i,r,s,o)}function Se(e){const t=w(e);if(null===t.A){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>De(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),ne(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=Ve(t.startAt)),t.endAt&&(e+="|ub:",e+=Ve(t.endAt)),t.A=e}return t.A}function Ee(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>{return`${(t=e).field.canonicalString()} ${t.op} ${he(t.value)}`;var t}).join(", ")}]`),ne(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: "+Ve(e.startAt)),e.endAt&&(t+=", endAt: "+Ve(e.endAt)),`Target(${t})`}function Te(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++)if(!ze(e.orderBy[r],t.orderBy[r]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(n=e.filters[r],i=t.filters[r],n.op!==i.op||!n.field.isEqual(i.field)||!ae(n.value,i.value))return!1;var n,i;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ue(e.startAt,t.startAt)&&Ue(e.endAt,t.endAt)}function Oe(e){return se.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class Ie extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.R(e,t,n):new Ne(e,t,n):"array-contains"===t?new Me(e,n):"in"===t?new $e(e,n):"not-in"===t?new Re(e,n):"array-contains-any"===t?new Le(e,n):new Ie(e,t,n)}static R(e,t,n){return"in"===t?new Pe(e,n):new Ae(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.P(ce(t,this.value)):null!==t&&oe(this.value)===oe(t)&&this.P(ce(t,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return y()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function De(e){return e.field.canonicalString()+e.op.toString()+he(e.value)}class Ne extends Ie{constructor(e,t,n){super(e,t,n),this.key=se.fromName(n.referenceValue)}matches(e){const t=se.comparator(e.key,this.key);return this.P(t)}}class Pe extends Ie{constructor(e,t){super(e,"in",t),this.keys=je("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Ae extends Ie{constructor(e,t){super(e,"not-in",t),this.keys=je("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function je(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>se.fromName(e.referenceValue))}class Me extends Ie{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return me(t)&&le(t.arrayValue,this.value)}}class $e extends Ie{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&le(this.value.arrayValue,t)}}class Re extends Ie{constructor(e,t){super(e,"not-in",t)}matches(e){if(le(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!le(this.value.arrayValue,t)}}class Le extends Ie{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!me(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>le(this.value.arrayValue,e))}}class Fe{constructor(e,t){this.position=e,this.before=t}}function Ve(e){return`${e.before?"b":"a"}:${e.position.map(e=>he(e)).join(",")}`}class Be{constructor(e,t="asc"){this.field=e,this.dir=t}}function ze(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function qe(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){const s=t[r],o=e.position[r];if(i=s.field.isKeyField()?se.comparator(se.fromName(o.referenceValue),n.key):ce(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return e.before?i<=0:i<0}function Ue(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ae(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function We(e,t,n,i,r,s,o,a){return new He(e,t,n,i,r,s,o,a)}function Ke(e){return new He(e)}function Ge(e){return!ne(e.limit)&&"F"===e.limitType}function Ye(e){return!ne(e.limit)&&"L"===e.limitType}function Qe(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Xe(e){for(const t of e.filters)if(t.v())return t.field;return null}function Je(e){return null!==e.collectionGroup}function Ze(e){const t=w(e);if(null===t.V){t.V=[];const e=Xe(t),n=Qe(t);if(null!==e&&null===n)e.isKeyField()||t.V.push(new Be(e)),t.V.push(new Be(H.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.V.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.V.push(new Be(H.keyField(),e))}}}return t.V}function et(e){const t=w(e);if(!t.S)if("F"===t.limitType)t.S=ke(t.path,t.collectionGroup,Ze(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const r of Ze(t)){const t="desc"===r.dir?"asc":"desc";e.push(new Be(r.field,t))}const n=t.endAt?new Fe(t.endAt.position,!t.endAt.before):null,i=t.startAt?new Fe(t.startAt.position,!t.startAt.before):null;t.S=ke(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}return t.S}function tt(e,t,n){return new He(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function nt(e,t){return Te(et(e),et(t))&&e.limitType===t.limitType}function it(e){return`${Se(et(e))}|lt:${e.limitType}`}function rt(e){return`Query(target=${Ee(et(e))}; limitType=${e.limitType})`}function st(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):se.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!qe(e.startAt,Ze(e),t))&&(!e.endAt||!qe(e.endAt,Ze(e),t))}(e,t)}function ot(e){return(t,n)=>{let i=!1;for(const r of Ze(e)){const e=at(r,t,n);if(0!==e)return e;i=i||r.field.isKeyField()}return 0}}function at(e,t,n){const i=e.field.isKeyField()?se.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),r=n.data.field(e);return null!==i&&null!==r?ce(i,r):y()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(e,t){if(e.D){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ie(t)?"-0":t}}function ct(e){return{integerValue:""+e}}function ut(e,t){return re(t)?ct(t):lt(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(){this._=void 0}}function dt(e,t,n){return e instanceof mt?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof gt?vt(e,t):e instanceof yt?bt(e,t):function(e,t){const n=pt(e,t),i=wt(n)+wt(e.C);return pe(n)&&pe(e.C)?ct(i):lt(e.N,i)}(e,t)}function ft(e,t,n){return e instanceof gt?vt(e,t):e instanceof yt?bt(e,t):n}function pt(e,t){return e instanceof _t?pe(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class mt extends ht{}class gt extends ht{constructor(e){super(),this.elements=e}}function vt(e,t){const n=Ct(t);for(const i of e.elements)n.some(e=>ae(e,i))||n.push(i);return{arrayValue:{values:n}}}class yt extends ht{constructor(e){super(),this.elements=e}}function bt(e,t){let n=Ct(t);for(const i of e.elements)n=n.filter(e=>!ae(e,i));return{arrayValue:{values:n}}}class _t extends ht{constructor(e,t){super(),this.N=e,this.C=t}}function wt(e){return X(e.integerValue||e.doubleValue)}function Ct(e){return me(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,t){this.field=e,this.transform=t}}function kt(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof gt&&t instanceof gt||e instanceof yt&&t instanceof yt?M(e.elements,t.elements,ae):e instanceof _t&&t instanceof _t?ae(e.C,t.C):e instanceof mt&&t instanceof mt}(e.transform,t.transform)}class St{constructor(e,t){this.version=e,this.transformResults=t}}class Et{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Et}static exists(e){return new Et(void 0,e)}static updateTime(e){return new Et(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Tt(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Ot{}function It(e,t,n){e instanceof jt?function(e,t,n){const i=e.value.clone(),r=Rt(e.fieldTransforms,t,n.transformResults);i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof Mt?function(e,t,n){if(!Tt(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=Rt(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll($t(e)),r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Dt(e,t,n){e instanceof jt?function(e,t,n){if(!Tt(e.precondition,t))return;const i=e.value.clone(),r=Lt(e.fieldTransforms,n,t);i.setAll(r),t.convertToFoundDocument(At(t),i).setHasLocalMutations()}(e,t,n):e instanceof Mt?function(e,t,n){if(!Tt(e.precondition,t))return;const i=Lt(e.fieldTransforms,n,t),r=t.data;r.setAll($t(e)),r.setAll(i),t.convertToFoundDocument(At(t),r).setHasLocalMutations()}(e,t,n):function(e,t){Tt(e.precondition,t)&&t.convertToNoDocument(L.min())}(e,t)}function Nt(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),r=pt(i.transform,e||null);null!=r&&(null==n&&(n=_e.empty()),n.set(i.field,r))}return n||null}function Pt(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&M(e,t,(e,t)=>kt(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function At(e){return e.isFoundDocument()?e.version:L.min()}class jt extends Ot{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}}class Mt extends Ot{constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}}function $t(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}}),t}function Rt(e,t,n){const i=new Map;b(e.length===n.length);for(let r=0;r<n.length;r++){const s=e[r],o=s.transform,a=t.data.field(s.field);i.set(s.field,ft(o,a,n[r]))}return i}function Lt(e,t,n){const i=new Map;for(const r of e){const e=r.transform,s=n.data.field(r.field);i.set(r.field,dt(e,s,t))}return i}class Ft extends Ot{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Vt extends Ot{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zt,qt;function Ut(e){switch(e){default:return y();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function Ht(e){if(void 0===e)return m("GRPC error has no .code"),C.UNKNOWN;switch(e){case zt.OK:return C.OK;case zt.CANCELLED:return C.CANCELLED;case zt.UNKNOWN:return C.UNKNOWN;case zt.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case zt.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case zt.INTERNAL:return C.INTERNAL;case zt.UNAVAILABLE:return C.UNAVAILABLE;case zt.UNAUTHENTICATED:return C.UNAUTHENTICATED;case zt.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case zt.NOT_FOUND:return C.NOT_FOUND;case zt.ALREADY_EXISTS:return C.ALREADY_EXISTS;case zt.PERMISSION_DENIED:return C.PERMISSION_DENIED;case zt.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case zt.ABORTED:return C.ABORTED;case zt.OUT_OF_RANGE:return C.OUT_OF_RANGE;case zt.UNIMPLEMENTED:return C.UNIMPLEMENTED;case zt.DATA_LOSS:return C.DATA_LOSS;default:return y()}}(qt=zt||(zt={}))[qt.OK=0]="OK",qt[qt.CANCELLED=1]="CANCELLED",qt[qt.UNKNOWN=2]="UNKNOWN",qt[qt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qt[qt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qt[qt.NOT_FOUND=5]="NOT_FOUND",qt[qt.ALREADY_EXISTS=6]="ALREADY_EXISTS",qt[qt.PERMISSION_DENIED=7]="PERMISSION_DENIED",qt[qt.UNAUTHENTICATED=16]="UNAUTHENTICATED",qt[qt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qt[qt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qt[qt.ABORTED=10]="ABORTED",qt[qt.OUT_OF_RANGE=11]="OUT_OF_RANGE",qt[qt.UNIMPLEMENTED=12]="UNIMPLEMENTED",qt[qt.INTERNAL=13]="INTERNAL",qt[qt.UNAVAILABLE=14]="UNAVAILABLE",qt[qt.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt{constructor(e,t){this.comparator=e,this.root=t||Gt.EMPTY}insert(e,t){return new Wt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Gt.BLACK,null,null))}remove(e){return new Wt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Gt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Kt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Kt(this.root,e,this.comparator,!1)}getReverseIterator(){return new Kt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Kt(this.root,e,this.comparator,!0)}}class Kt{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Gt{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Gt.RED,this.left=null!=i?i:Gt.EMPTY,this.right=null!=r?r:Gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,r){return new Gt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return Gt.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const e=this.left.check();if(e!==this.right.check())throw y();return e+(this.isRed()?0:1)}}Gt.EMPTY=null,Gt.RED=!0,Gt.BLACK=!1,Gt.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(e,t,n,i,r){return this}insert(e,t,n){return new Gt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt{constructor(e){this.comparator=e,this.data=new Wt(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Qt(this.data.getIterator())}getIteratorFrom(e){return new Qt(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof Yt))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Yt(this.comparator);return t.data=e,t}}class Qt{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new Wt(se.comparator);function Jt(){return Xt}const Zt=new Wt(se.comparator);function en(){return Zt}const tn=new Wt(se.comparator);function nn(){return tn}const rn=new Yt(se.comparator);function sn(...e){let t=rn;for(const n of e)t=t.add(n);return t}const on=new Yt(j);function an(){return on}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,t,n,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,cn.createSynthesizedTargetChangeForCurrentChange(e,t)),new ln(L.min(),n,an(),Jt(),sn())}}class cn{constructor(e,t,n,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t){return new cn(G.EMPTY_BYTE_STRING,t,sn(),sn(),sn())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,t,n,i){this.k=e,this.removedTargetIds=t,this.key=n,this.$=i}}class hn{constructor(e,t){this.targetId=e,this.O=t}}class dn{constructor(e,t,n=G.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class fn{constructor(){this.F=0,this.M=gn(),this.L=G.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=sn(),t=sn(),n=sn();return this.M.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:y()}}),new cn(this.L,this.B,e,t,n)}G(){this.U=!1,this.M=gn()}H(e,t){this.U=!0,this.M=this.M.insert(e,t)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class pn{constructor(e){this.tt=e,this.et=new Map,this.nt=Jt(),this.st=mn(),this.it=new Yt(j)}rt(e){for(const t of e.k)e.$&&e.$.isFoundDocument()?this.ot(t,e.$):this.ct(t,e.key,e.$);for(const t of e.removedTargetIds)this.ct(t,e.key,e.$)}at(e){this.forEachTarget(e,t=>{const n=this.ut(t);switch(e.state){case 0:this.ht(t)&&n.j(e.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(e.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(t);break;case 3:this.ht(t)&&(n.Z(),n.j(e.resumeToken));break;case 4:this.ht(t)&&(this.lt(t),n.j(e.resumeToken));break;default:y()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.et.forEach((e,n)=>{this.ht(n)&&t(n)})}ft(e){const t=e.targetId,n=e.O.count,i=this.dt(t);if(i){const e=i.target;if(Oe(e))if(0===n){const n=new se(e.path);this.ct(t,n,Ce.newNoDocument(n,L.min()))}else b(1===n);else this.wt(t)!==n&&(this.lt(t),this.it=this.it.add(t))}}_t(e){const t=new Map;this.et.forEach((n,i)=>{const r=this.dt(i);if(r){if(n.current&&Oe(r.target)){const t=new se(r.target.path);null!==this.nt.get(t)||this.gt(i,t)||this.ct(i,t,Ce.newNoDocument(t,e))}n.K&&(t.set(i,n.W()),n.G())}});let n=sn();this.st.forEach((e,t)=>{let i=!0;t.forEachWhile(e=>{const t=this.dt(e);return!t||2===t.purpose||(i=!1,!1)}),i&&(n=n.add(e))});const i=new ln(e,t,this.it,this.nt,n);return this.nt=Jt(),this.st=mn(),this.it=new Yt(j),i}ot(e,t){if(!this.ht(e))return;const n=this.gt(e,t.key)?2:0;this.ut(e).H(t.key,n),this.nt=this.nt.insert(t.key,t),this.st=this.st.insert(t.key,this.yt(t.key).add(e))}ct(e,t,n){if(!this.ht(e))return;const i=this.ut(e);this.gt(e,t)?i.H(t,1):i.J(t),this.st=this.st.insert(t,this.yt(t).delete(e)),n&&(this.nt=this.nt.insert(t,n))}removeTarget(e){this.et.delete(e)}wt(e){const t=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let t=this.et.get(e);return t||(t=new fn,this.et.set(e,t)),t}yt(e){let t=this.st.get(e);return t||(t=new Yt(j),this.st=this.st.insert(e,t)),t}ht(e){const t=null!==this.dt(e);return t||p("WatchChangeAggregator","Detected inactive target",e),t}dt(e){const t=this.et.get(e);return t&&t.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new fn),this.tt.getRemoteKeysForTarget(e).forEach(t=>{this.ct(e,t,null)})}gt(e,t){return this.tt.getRemoteKeysForTarget(e).has(t)}}function mn(){return new Wt(se.comparator)}function gn(){return new Wt(se.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),yn=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class bn{constructor(e,t){this.databaseId=e,this.D=t}}function _n(e,t){return e.D?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function wn(e,t){return e.D?t.toBase64():t.toUint8Array()}function Cn(e,t){return _n(e,t.toTimestamp())}function xn(e){return b(!!e),L.fromTimestamp(function(e){const t=Q(e);return new R(t.seconds,t.nanos)}(e))}function kn(e,t){return function(e){return new q(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Sn(e){const t=q.fromString(e);return b(Zn(t)),t}function En(e,t){return kn(e.databaseId,t.path)}function Tn(e,t){const n=Sn(t);if(n.get(1)!==e.databaseId.projectId)throw new x(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new x(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new se(Nn(n))}function On(e,t){return kn(e.databaseId,t)}function In(e){const t=Sn(e);return 4===t.length?q.emptyPath():Nn(t)}function Dn(e){return new q(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Nn(e){return b(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Pn(e,t,n){return{name:En(e,t),fields:n.value.mapValue.fields}}function An(e,t,n){const i=Tn(e,t.name),r=xn(t.updateTime),s=new _e({mapValue:{fields:t.fields}}),o=Ce.newFoundDocument(i,r,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function jn(e,t){return"found"in t?function(e,t){b(!!t.found),t.found.name,t.found.updateTime;const n=Tn(e,t.found.name),i=xn(t.found.updateTime),r=new _e({mapValue:{fields:t.found.fields}});return Ce.newFoundDocument(n,i,r)}(e,t):"missing"in t?function(e,t){b(!!t.missing),b(!!t.readTime);const n=Tn(e,t.missing),i=xn(t.readTime);return Ce.newNoDocument(n,i)}(e,t):y()}function Mn(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:y()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],s=function(e,t){return e.D?(b(void 0===t||"string"==typeof t),G.fromBase64String(t||"")):(b(void 0===t||t instanceof Uint8Array),G.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?C.UNKNOWN:Ht(e.code);return new x(t,e.message||"")}(o);n=new dn(i,r,s,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const r=Tn(e,i.document.name),s=xn(i.document.updateTime),o=new _e({mapValue:{fields:i.document.fields}}),a=Ce.newFoundDocument(r,s,o),l=i.targetIds||[],c=i.removedTargetIds||[];n=new un(l,c,a.key,a)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const r=Tn(e,i.document),s=i.readTime?xn(i.readTime):L.min(),o=Ce.newNoDocument(r,s),a=i.removedTargetIds||[];n=new un([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const r=Tn(e,i.document),s=i.removedTargetIds||[];n=new un([],s,r,null)}else{if(!("filter"in t))return y();{t.filter;const e=t.filter;e.targetId;const i=e.count||0,r=new Bt(i),s=e.targetId;n=new hn(s,r)}}return n}function $n(e,t){let n;if(t instanceof jt)n={update:Pn(e,t.key,t.value)};else if(t instanceof Ft)n={delete:En(e,t.key)};else if(t instanceof Mt)n={update:Pn(e,t.key,t.data),updateMask:Jn(t.fieldMask)};else{if(!(t instanceof Vt))return y();n={verify:En(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof mt)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof gt)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof yt)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof _t)return{fieldPath:t.field.canonicalString(),increment:n.C};throw y()}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Cn(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:y()}(e,t.precondition)),n}function Rn(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?Et.updateTime(xn(e.updateTime)):void 0!==e.exists?Et.exists(e.exists):Et.none()}(t.currentDocument):Et.none(),i=t.updateTransforms?t.updateTransforms.map(t=>function(e,t){let n=null;if("setToServerValue"in t)b("REQUEST_TIME"===t.setToServerValue),n=new mt;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new gt(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new yt(e)}else"increment"in t?n=new _t(e,t.increment):y();const i=H.fromServerFormat(t.fieldPath);return new xt(i,n)}(e,t)):[];if(t.update){t.update.name;const r=Tn(e,t.update.name),s=new _e({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new W(t.map(e=>H.fromServerFormat(e)))}(t.updateMask);return new Mt(r,s,e,n,i)}return new jt(r,s,n,i)}if(t.delete){const i=Tn(e,t.delete);return new Ft(i,n)}if(t.verify){const i=Tn(e,t.verify);return new Vt(i,n)}return y()}function Ln(e,t){return e&&e.length>0?(b(void 0!==t),e.map(e=>function(e,t){let n=e.updateTime?xn(e.updateTime):xn(t);return n.isEqual(L.min())&&(n=xn(t)),new St(n,e.transformResults||[])}(e,t))):[]}function Fn(e,t){return{documents:[On(e,t.path)]}}function Vn(e,t){const n={structuredQuery:{}},i=t.path;null!==t.collectionGroup?(n.parent=On(e,i),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=On(e,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(e){if(0===e.length)return;const t=e.map(e=>function(e){if("=="===e.op){if(ve(e.value))return{unaryFilter:{field:Gn(e.field),op:"IS_NAN"}};if(ge(e.value))return{unaryFilter:{field:Gn(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ve(e.value))return{unaryFilter:{field:Gn(e.field),op:"IS_NOT_NAN"}};if(ge(e.value))return{unaryFilter:{field:Gn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gn(e.field),op:Kn(e.op),value:e.value}}}(e));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);r&&(n.structuredQuery.where=r);const s=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:Gn(e.field),direction:Wn(e.dir)}}(e))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.D||ne(t)?t:{value:t}}(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=Un(t.startAt)),t.endAt&&(n.structuredQuery.endAt=Un(t.endAt)),n}function Bn(e){let t=In(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){b(1===i);const e=n.from[0];e.allDescendants?r=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=qn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(e=>function(e){return new Be(Yn(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,ne(t)?null:t}(n.limit));let l=null;n.startAt&&(l=Hn(n.startAt));let c=null;return n.endAt&&(c=Hn(n.endAt)),We(t,r,o,s,a,"F",l,c)}function zn(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function qn(e){return e?void 0!==e.unaryFilter?[Xn(e)]:void 0!==e.fieldFilter?[Qn(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map(e=>qn(e)).reduce((e,t)=>e.concat(t)):y():[]}function Un(e){return{before:e.before,values:e.position}}function Hn(e){const t=!!e.before,n=e.values||[];return new Fe(n,t)}function Wn(e){return vn[e]}function Kn(e){return yn[e]}function Gn(e){return{fieldPath:e.canonicalString()}}function Yn(e){return H.fromServerFormat(e.fieldPath)}function Qn(e){return Ie.create(Yn(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(e.fieldFilter.op),e.fieldFilter.value)}function Xn(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Yn(e.unaryFilter.field);return Ie.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Yn(e.unaryFilter.field);return Ie.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Yn(e.unaryFilter.field);return Ie.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Yn(e.unaryFilter.field);return Ie.create(r,"!=",{nullValue:"NULL_VALUE"});default:return y()}}function Jn(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Zn(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=ni(t)),t=ti(e.get(n),t);return ni(t)}function ti(e,t){let n=t;const i=e.length;for(let r=0;r<i;r++){const t=e.charAt(r);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function ni(e){return e+""}function ii(e){const t=e.length;if(b(t>=2),2===t)return b(""===e.charAt(0)&&""===e.charAt(1)),q.emptyPath();const n=t-2,i=[];let r="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&y(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===r.length?o=n:(r+=n,o=r,r=""),i.push(o);break;case"":r+=e.substring(s,t),r+="\0";break;case"":r+=e.substring(s,t+1);break;default:y()}s=t+2}return new q(i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t){this.seconds=e,this.nanoseconds=t}}class si{constructor(e,t,n){this.ownerId=e,this.allowTabSynchronization=t,this.leaseTimestampMs=n}}si.store="owner",si.key="owner";class oi{constructor(e,t,n){this.userId=e,this.lastAcknowledgedBatchId=t,this.lastStreamToken=n}}oi.store="mutationQueues",oi.keyPath="userId";class ai{constructor(e,t,n,i,r){this.userId=e,this.batchId=t,this.localWriteTimeMs=n,this.baseMutations=i,this.mutations=r}}ai.store="mutations",ai.keyPath="batchId",ai.userMutationsIndex="userMutationsIndex",ai.userMutationsKeyPath=["userId","batchId"];class li{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,t){return[e,ei(t)]}static key(e,t,n){return[e,ei(t),n]}}li.store="documentMutations",li.PLACEHOLDER=new li;class ci{constructor(e,t){this.path=e,this.readTime=t}}class ui{constructor(e,t){this.path=e,this.version=t}}class hi{constructor(e,t,n,i,r,s){this.unknownDocument=e,this.noDocument=t,this.document=n,this.hasCommittedMutations=i,this.readTime=r,this.parentPath=s}}hi.store="remoteDocuments",hi.readTimeIndex="readTimeIndex",hi.readTimeIndexPath="readTime",hi.collectionReadTimeIndex="collectionReadTimeIndex",hi.collectionReadTimeIndexPath=["parentPath","readTime"];class di{constructor(e){this.byteSize=e}}di.store="remoteDocumentGlobal",di.key="remoteDocumentGlobalKey";class fi{constructor(e,t,n,i,r,s,o){this.targetId=e,this.canonicalId=t,this.readTime=n,this.resumeToken=i,this.lastListenSequenceNumber=r,this.lastLimboFreeSnapshotVersion=s,this.query=o}}fi.store="targets",fi.keyPath="targetId",fi.queryTargetsIndexName="queryTargetsIndex",fi.queryTargetsKeyPath=["canonicalId","targetId"];class pi{constructor(e,t,n){this.targetId=e,this.path=t,this.sequenceNumber=n}}pi.store="targetDocuments",pi.keyPath=["targetId","path"],pi.documentTargetsIndex="documentTargetsIndex",pi.documentTargetsKeyPath=["path","targetId"];class mi{constructor(e,t,n,i){this.highestTargetId=e,this.highestListenSequenceNumber=t,this.lastRemoteSnapshotVersion=n,this.targetCount=i}}mi.key="targetGlobalKey",mi.store="targetGlobal";class gi{constructor(e,t){this.collectionId=e,this.parent=t}}gi.store="collectionParents",gi.keyPath=["collectionId","parent"];class vi{constructor(e,t,n,i){this.clientId=e,this.updateTimeMs=t,this.networkEnabled=n,this.inForeground=i}}vi.store="clientMetadata",vi.keyPath="clientId";class yi{constructor(e,t,n){this.bundleId=e,this.createTime=t,this.version=n}}yi.store="bundles",yi.keyPath="bundleId";class bi{constructor(e,t,n){this.name=e,this.readTime=t,this.bundledQuery=n}}bi.store="namedQueries",bi.keyPath="name";const _i=[oi.store,ai.store,li.store,hi.store,fi.store,si.store,mi.store,pi.store,vi.store,di.store,gi.store,yi.store,bi.store],wi="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ci{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new xi((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof xi?t:xi.resolve(t)}catch(e){return xi.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):xi.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):xi.reject(t)}static resolve(e){return new xi((t,n)=>{t(e)})}static reject(e){return new xi((t,n)=>{n(e)})}static waitFor(e){return new xi((t,n)=>{let i=0,r=0,s=!1;e.forEach(e=>{++i,e.next(()=>{++r,s&&r===i&&t()},e=>n(e))}),s=!0,r===i&&t()})}static or(e){let t=xi.resolve(!1);for(const n of e)t=t.next(e=>e?xi.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,i)=>{n.push(t.call(this,e,i))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.Et=new k,this.transaction.oncomplete=()=>{this.Et.resolve()},this.transaction.onabort=()=>{t.error?this.Et.reject(new Ti(e,t.error)):this.Et.resolve()},this.transaction.onerror=t=>{const n=Pi(t.target.error);this.Et.reject(new Ti(e,n))}}static open(e,t,n,i){try{return new ki(t,e.transaction(i,n))}catch(e){throw new Ti(t,e)}}get It(){return this.Et.promise}abort(e){e&&this.Et.reject(e),this.aborted||(p("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(e){const t=this.transaction.objectStore(e);return new Ii(t)}}class Si{constructor(e,t,n){this.name=e,this.version=t,this.At=n,12.2===Si.Rt(Object(o["s"])())&&m("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return p("SimpleDb","Removing database:",e),Di(window.indexedDB.deleteDatabase(e)).toPromise()}static bt(){if(!Object(o["z"])())return!1;if(Si.Pt())return!0;const e=Object(o["s"])(),t=Si.Rt(e),n=0<t&&t<10,i=Si.vt(e),r=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||r)}static Pt(){var t;return"undefined"!=typeof e&&"YES"===(null===(t=Object({NODE_ENV:"production",BASE_URL:""}))||void 0===t?void 0:t.Vt)}static St(e,t){return e.store(t)}static Rt(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static vt(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Dt(e){return this.db||(p("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=e=>{const n=e.target.result;t(n)},i.onblocked=()=>{n(new Ti(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=t=>{const i=t.target.error;"VersionError"===i.name?n(new x(C.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===i.name?n(new x(C.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+i)):n(new Ti(e,i))},i.onupgradeneeded=e=>{p("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.At.Ct(t,i.transaction,e.oldVersion,this.version).next(()=>{p("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Nt&&(this.db.onversionchange=e=>this.Nt(e)),this.db}xt(e){this.Nt=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,i){const r="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.Dt(e);const t=ki.open(this.db,e,r?"readonly":"readwrite",n),s=i(t).catch(e=>(t.abort(e),xi.reject(e))).toPromise();return s.catch(()=>{}),await t.It,s}catch(e){const t="FirebaseError"!==e.name&&s<3;if(p("SimpleDb","Transaction failed with error:",e.message,"Retrying:",t),this.close(),!t)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Ei{constructor(e){this.kt=e,this.$t=!1,this.Ot=null}get isDone(){return this.$t}get Ft(){return this.Ot}set cursor(e){this.kt=e}done(){this.$t=!0}Mt(e){this.Ot=e}delete(){return Di(this.kt.delete())}}class Ti extends x{constructor(e,t){super(C.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Oi(e){return"IndexedDbTransactionError"===e.name}class Ii{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(p("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(p("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Di(n)}add(e){return p("SimpleDb","ADD",this.store.name,e,e),Di(this.store.add(e))}get(e){return Di(this.store.get(e)).next(t=>(void 0===t&&(t=null),p("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return p("SimpleDb","DELETE",this.store.name,e),Di(this.store.delete(e))}count(){return p("SimpleDb","COUNT",this.store.name),Di(this.store.count())}Lt(e,t){const n=this.cursor(this.options(e,t)),i=[];return this.Bt(n,(e,t)=>{i.push(t)}).next(()=>i)}Ut(e,t){p("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.qt=!1;const i=this.cursor(n);return this.Bt(i,(e,t,n)=>n.delete())}Kt(e,t){let n;t?n=e:(n={},t=e);const i=this.cursor(n);return this.Bt(i,t)}jt(e){const t=this.cursor({});return new xi((n,i)=>{t.onerror=e=>{const t=Pi(e.target.error);i(t)},t.onsuccess=t=>{const i=t.target.result;i?e(i.primaryKey,i.value).next(e=>{e?i.continue():n()}):n()}})}Bt(e,t){const n=[];return new xi((i,r)=>{e.onerror=e=>{r(e.target.error)},e.onsuccess=e=>{const r=e.target.result;if(!r)return void i();const s=new Ei(r),o=t(r.primaryKey,r.value,s);if(o instanceof xi){const e=o.catch(e=>(s.done(),xi.reject(e)));n.push(e)}s.isDone?i():null===s.Ft?r.continue():r.continue(s.Ft)}}).next(()=>xi.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.qt?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Di(e){return new xi((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=Pi(e.target.error);n(t)}})}let Ni=!1;function Pi(e){const t=Si.Rt(Object(o["s"])());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new x("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ni||(Ni=!0,setTimeout(()=>{throw e},0)),e}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends Ci{constructor(e,t){super(),this.Qt=e,this.currentSequenceNumber=t}}function ji(e,t){const n=w(e);return Si.St(n.Qt,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const t=this.mutations[i];t.key.isEqual(e.key)&&It(t,e,n[i])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&Dt(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&Dt(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{const n=e.get(t.key),i=n;this.applyToLocalView(i),n.isValidDocument()||i.convertToNoDocument(L.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),sn())}isEqual(e){return this.batchId===e.batchId&&M(this.mutations,e.mutations,(e,t)=>Pt(e,t))&&M(this.baseMutations,e.baseMutations,(e,t)=>Pt(e,t))}}class $i{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){b(e.mutations.length===n.length);let i=nn();const r=e.mutations;for(let s=0;s<r.length;s++)i=i.insert(r[s].key,n[s].version);return new $i(e,t,n,i)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t,n,i,r=L.min(),s=L.min(),o=G.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new Ri(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Ri(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.Wt=e}}function Fi(e,t){if(t.document)return An(e.Wt,t.document,!!t.hasCommittedMutations);if(t.noDocument){const e=se.fromSegments(t.noDocument.path),n=Ui(t.noDocument.readTime),i=Ce.newNoDocument(e,n);return t.hasCommittedMutations?i.setHasCommittedMutations():i}if(t.unknownDocument){const e=se.fromSegments(t.unknownDocument.path),n=Ui(t.unknownDocument.version);return Ce.newUnknownDocument(e,n)}return y()}function Vi(e,t,n){const i=Bi(n),r=t.key.path.popLast().toArray();if(t.isFoundDocument()){const n=function(e,t){return{name:En(e,t.key),fields:t.data.value.mapValue.fields,updateTime:_n(e,t.version.toTimestamp())}}(e.Wt,t),s=t.hasCommittedMutations;return new hi(null,null,n,s,i,r)}if(t.isNoDocument()){const e=t.key.path.toArray(),n=qi(t.version),s=t.hasCommittedMutations;return new hi(null,new ci(e,n),null,s,i,r)}if(t.isUnknownDocument()){const e=t.key.path.toArray(),n=qi(t.version);return new hi(new ui(e,n),null,null,!0,i,r)}return y()}function Bi(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function zi(e){const t=new R(e[0],e[1]);return L.fromTimestamp(t)}function qi(e){const t=e.toTimestamp();return new ri(t.seconds,t.nanoseconds)}function Ui(e){const t=new R(e.seconds,e.nanoseconds);return L.fromTimestamp(t)}function Hi(e,t){const n=(t.baseMutations||[]).map(t=>Rn(e.Wt,t));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const i=t.mutations.map(t=>Rn(e.Wt,t)),r=R.fromMillis(t.localWriteTimeMs);return new Mi(t.batchId,r,n,i)}function Wi(e){const t=Ui(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Ui(e.lastLimboFreeSnapshotVersion):L.min();let i;var r;return void 0!==e.query.documents?(b(1===(r=e.query).documents.length),i=et(Ke(In(r.documents[0])))):i=function(e){return et(Bn(e))}(e.query),new Ri(i,e.targetId,0,e.lastListenSequenceNumber,t,n,G.fromBase64String(e.resumeToken))}function Ki(e,t){const n=qi(t.snapshotVersion),i=qi(t.lastLimboFreeSnapshotVersion);let r;r=Oe(t.target)?Fn(e.Wt,t.target):Vn(e.Wt,t.target);const s=t.resumeToken.toBase64();return new fi(t.targetId,Se(t.target),n,s,t.sequenceNumber,i,r)}function Gi(e){const t=Bn({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?tt(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{getBundleMetadata(e,t){return Qi(e).get(t).next(e=>{if(e)return{id:(t=e).bundleId,createTime:Ui(t.createTime),version:t.version};var t})}saveBundleMetadata(e,t){return Qi(e).put({bundleId:(n=t).id,createTime:qi(xn(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return Xi(e).get(t).next(e=>{if(e)return{name:(t=e).name,query:Gi(t.bundledQuery),readTime:Ui(t.readTime)};var t})}saveNamedQuery(e,t){return Xi(e).put(function(e){return{name:e.name,readTime:qi(xn(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function Qi(e){return ji(e,yi.store)}function Xi(e){return ji(e,bi.store)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this.Gt=new Zi}addToCollectionParentIndex(e,t){return this.Gt.add(t),xi.resolve()}getCollectionParents(e,t){return xi.resolve(this.Gt.getEntries(t))}}class Zi{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new Yt(q.comparator),r=!i.has(n);return this.index[t]=i.add(n),r}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new Yt(q.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.zt=new Zi}addToCollectionParentIndex(e,t){if(!this.zt.has(t)){const n=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.zt.add(t)});const r={collectionId:n,parent:ei(i)};return tr(e).put(r)}return xi.resolve()}getCollectionParents(e,t){const n=[],i=IDBKeyRange.bound([t,""],[$(t),""],!1,!0);return tr(e).Lt(i).next(e=>{for(const i of e){if(i.collectionId!==t)break;n.push(ii(i.parent))}return n})}}function tr(e){return ji(e,gi.store)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ir{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new ir(e,ir.DEFAULT_COLLECTION_PERCENTILE,ir.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(e,t,n){const i=e.store(ai.store),r=e.store(li.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=i.Kt({range:o},(e,t,n)=>(a++,n.delete()));s.push(l.next(()=>{b(1===a)}));const c=[];for(const u of n.mutations){const e=li.key(t,u.key.path,n.batchId);s.push(r.delete(e)),c.push(u.key)}return xi.waitFor(s).next(()=>c)}function sr(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw y();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ir.DEFAULT_COLLECTION_PERCENTILE=10,ir.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ir.DEFAULT=new ir(41943040,ir.DEFAULT_COLLECTION_PERCENTILE,ir.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ir.DISABLED=new ir(-1,0,0);class or{constructor(e,t,n,i){this.userId=e,this.N=t,this.Ht=n,this.referenceDelegate=i,this.Jt={}}static Yt(e,t,n,i){b(""!==e.uid);const r=e.isAuthenticated()?e.uid:"";return new or(r,t,n,i)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return lr(e).Kt({index:ai.userMutationsIndex,range:n},(e,n,i)=>{t=!1,i.done()}).next(()=>t)}addMutationBatch(e,t,n,i){const r=cr(e),s=lr(e);return s.add({}).next(o=>{b("number"==typeof o);const a=new Mi(o,t,n,i),l=function(e,t,n){const i=n.baseMutations.map(t=>$n(e.Wt,t)),r=n.mutations.map(t=>$n(e.Wt,t));return new ai(t,n.batchId,n.localWriteTime.toMillis(),i,r)}(this.N,this.userId,a),c=[];let u=new Yt((e,t)=>j(e.canonicalString(),t.canonicalString()));for(const e of i){const t=li.key(this.userId,e.key.path,o);u=u.add(e.key.path.popLast()),c.push(s.put(l)),c.push(r.put(t,li.PLACEHOLDER))}return u.forEach(t=>{c.push(this.Ht.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.Jt[o]=a.keys()}),xi.waitFor(c).next(()=>a)})}lookupMutationBatch(e,t){return lr(e).get(t).next(e=>e?(b(e.userId===this.userId),Hi(this.N,e)):null)}Xt(e,t){return this.Jt[t]?xi.resolve(this.Jt[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){const n=e.keys();return this.Jt[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=IDBKeyRange.lowerBound([this.userId,n]);let r=null;return lr(e).Kt({index:ai.userMutationsIndex,range:i},(e,t,i)=>{t.userId===this.userId&&(b(t.batchId>=n),r=Hi(this.N,t)),i.done()}).next(()=>r)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return lr(e).Kt({index:ai.userMutationsIndex,range:t,reverse:!0},(e,t,i)=>{n=t.batchId,i.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return lr(e).Lt(ai.userMutationsIndex,t).next(e=>e.map(e=>Hi(this.N,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=li.prefixForPath(this.userId,t.path),i=IDBKeyRange.lowerBound(n),r=[];return cr(e).Kt({range:i},(n,i,s)=>{const[o,a,l]=n,c=ii(a);if(o===this.userId&&t.path.isEqual(c))return lr(e).get(l).next(e=>{if(!e)throw y();b(e.userId===this.userId),r.push(Hi(this.N,e))});s.done()}).next(()=>r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Yt(j);const i=[];return t.forEach(t=>{const r=li.prefixForPath(this.userId,t.path),s=IDBKeyRange.lowerBound(r),o=cr(e).Kt({range:s},(e,i,r)=>{const[s,o,a]=e,l=ii(o);s===this.userId&&t.path.isEqual(l)?n=n.add(a):r.done()});i.push(o)}),xi.waitFor(i).next(()=>this.Zt(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1,r=li.prefixForPath(this.userId,n),s=IDBKeyRange.lowerBound(r);let o=new Yt(j);return cr(e).Kt({range:s},(e,t,r)=>{const[s,a,l]=e,c=ii(a);s===this.userId&&n.isPrefixOf(c)?c.length===i&&(o=o.add(l)):r.done()}).next(()=>this.Zt(e,o))}Zt(e,t){const n=[],i=[];return t.forEach(t=>{i.push(lr(e).get(t).next(e=>{if(null===e)throw y();b(e.userId===this.userId),n.push(Hi(this.N,e))}))}),xi.waitFor(i).next(()=>n)}removeMutationBatch(e,t){return rr(e.Qt,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.te(t.batchId)}),xi.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}te(e){delete this.Jt[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return xi.resolve();const n=IDBKeyRange.lowerBound(li.prefixForUser(this.userId)),i=[];return cr(e).Kt({range:n},(e,t,n)=>{if(e[0]===this.userId){const t=ii(e[1]);i.push(t)}else n.done()}).next(()=>{b(0===i.length)})})}containsKey(e,t){return ar(e,this.userId,t)}ee(e){return ur(e).get(this.userId).next(e=>e||new oi(this.userId,-1,""))}}function ar(e,t,n){const i=li.prefixForPath(t,n.path),r=i[1],s=IDBKeyRange.lowerBound(i);let o=!1;return cr(e).Kt({range:s,qt:!0},(e,n,i)=>{const[s,a,l]=e;s===t&&a===r&&(o=!0),i.done()}).next(()=>o)}function lr(e){return ji(e,ai.store)}function cr(e){return ji(e,li.store)}function ur(e){return ji(e,oi.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new hr(0)}static ie(){return new hr(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t){this.referenceDelegate=e,this.N=t}allocateTargetId(e){return this.re(e).next(t=>{const n=new hr(t.highestTargetId);return t.highestTargetId=n.next(),this.oe(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.re(e).next(e=>L.fromTimestamp(new R(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.re(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.re(e).next(i=>(i.highestListenSequenceNumber=t,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.oe(e,i)))}addTargetData(e,t){return this.ce(e,t).next(()=>this.re(e).next(n=>(n.targetCount+=1,this.ae(t,n),this.oe(e,n))))}updateTargetData(e,t){return this.ce(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>fr(e).delete(t.targetId)).next(()=>this.re(e)).next(t=>(b(t.targetCount>0),t.targetCount-=1,this.oe(e,t)))}removeTargets(e,t,n){let i=0;const r=[];return fr(e).Kt((s,o)=>{const a=Wi(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(i++,r.push(this.removeTargetData(e,a)))}).next(()=>xi.waitFor(r)).next(()=>i)}forEachTarget(e,t){return fr(e).Kt((e,n)=>{const i=Wi(n);t(i)})}re(e){return pr(e).get(mi.key).next(e=>(b(null!==e),e))}oe(e,t){return pr(e).put(mi.key,t)}ce(e,t){return fr(e).put(Ki(this.N,t))}ae(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.re(e).next(e=>e.targetCount)}getTargetData(e,t){const n=Se(t),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let r=null;return fr(e).Kt({range:i,index:fi.queryTargetsIndexName},(e,n,i)=>{const s=Wi(n);Te(t,s.target)&&(r=s,i.done())}).next(()=>r)}addMatchingKeys(e,t,n){const i=[],r=mr(e);return t.forEach(t=>{const s=ei(t.path);i.push(r.put(new pi(n,s))),i.push(this.referenceDelegate.addReference(e,n,t))}),xi.waitFor(i)}removeMatchingKeys(e,t,n){const i=mr(e);return xi.forEach(t,t=>{const r=ei(t.path);return xi.waitFor([i.delete([n,r]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){const n=mr(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),i=mr(e);let r=sn();return i.Kt({range:n,qt:!0},(e,t,n)=>{const i=ii(e[1]),s=new se(i);r=r.add(s)}).next(()=>r)}containsKey(e,t){const n=ei(t.path),i=IDBKeyRange.bound([n],[$(n)],!1,!0);let r=0;return mr(e).Kt({index:pi.documentTargetsIndex,qt:!0,range:i},([e,t],n,i)=>{0!==e&&(r++,i.done())}).next(()=>r>0)}Tt(e,t){return fr(e).get(t).next(e=>e?Wi(e):null)}}function fr(e){return ji(e,fi.store)}function pr(e){return ji(e,mi.store)}function mr(e){return ji(e,pi.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gr(e){if(e.code!==C.FAILED_PRECONDITION||e.message!==wi)throw e;p("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr([e,t],[n,i]){const r=j(e,n);return 0===r?j(t,i):r}class yr{constructor(e){this.ue=e,this.buffer=new Yt(vr),this.he=0}le(){return++this.he}fe(e){const t=[e,this.le()];if(this.buffer.size<this.ue)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();vr(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class br{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.de=!1,this.we=null}start(e){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this._e(e)}stop(){this.we&&(this.we.cancel(),this.we=null)}get started(){return null!==this.we}_e(e){const t=this.de?3e5:6e4;p("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.we=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.we=null,this.de=!0;try{await e.collectGarbage(this.garbageCollector)}catch(e){Oi(e)?p("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await gr(e)}await this._e(e)})}}class _r{constructor(e,t){this.me=e,this.params=t}calculateTargetCount(e,t){return this.me.ge(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return xi.resolve(N.T);const n=new yr(t);return this.me.forEachTarget(e,e=>n.fe(e.sequenceNumber)).next(()=>this.me.ye(e,e=>n.fe(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.me.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.me.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector","Garbage collection skipped; disabled"),xi.resolve(nr)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),nr):this.pe(e,t))}getCacheSize(e){return this.me.getCacheSize(e)}pe(e,t){let n,i,r,o,a,l,c;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(p("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),i=this.params.maximumSequenceNumbersToCollect):i=t,o=Date.now(),this.nthSequenceNumber(e,i))).next(i=>(n=i,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(r=t,l=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(c=Date.now(),d()<=s["a"].DEBUG&&p("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-u}ms\n\tDetermined least recently used ${i} in `+(a-o)+"ms\n"+`\tRemoved ${r} targets in `+(l-a)+"ms\n"+`\tRemoved ${e} documents in `+(c-l)+"ms\n"+`Total Duration: ${c-u}ms`),xi.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:e})))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new _r(e,t)}(this,t)}ge(e){const t=this.Te(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}Te(e){let t=0;return this.ye(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}ye(e,t){return this.Ee(e,(e,n)=>t(n))}addReference(e,t,n){return Cr(e,n)}removeReference(e,t,n){return Cr(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Cr(e,t)}Ie(e,t){return function(e,t){let n=!1;return ur(e).jt(i=>ar(e,i,t).next(e=>(e&&(n=!0),xi.resolve(!e)))).next(()=>n)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let r=0;return this.Ee(e,(s,o)=>{if(o<=t){const t=this.Ie(e,s).next(t=>{if(!t)return r++,n.getEntry(e,s).next(()=>(n.removeEntry(s),mr(e).delete([0,ei(s.path)])))});i.push(t)}}).next(()=>xi.waitFor(i)).next(()=>n.apply(e)).next(()=>r)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Cr(e,t)}Ee(e,t){const n=mr(e);let i,r=N.T;return n.Kt({index:pi.documentTargetsIndex},([e,n],{path:s,sequenceNumber:o})=>{0===e?(r!==N.T&&t(new se(ii(i)),r),r=o,i=s):r=N.T}).next(()=>{r!==N.T&&t(new se(ii(i)),r)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Cr(e,t){return mr(e).put(function(e,t){return new pi(0,ei(e.path),t)}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[i,r]of n)if(this.equalsFn(i,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0!==i){for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return void(i[n]=[e,t]);i.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),!0;return!1}forEach(e){V(this.inner,(t,n)=>{for(const[i,r]of n)e(i,r)})}isEmpty(){return B(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(){this.changes=new xr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:L.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:Ce.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?xi.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,t){this.N=e,this.Ht=t}addEntry(e,t,n){return Or(e).put(Ir(t),n)}removeEntry(e,t){const n=Or(e),i=Ir(t);return n.delete(i)}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.Ae(e,n)))}getEntry(e,t){return Or(e).get(Ir(t)).next(e=>this.Re(t,e))}be(e,t){return Or(e).get(Ir(t)).next(e=>({document:this.Re(t,e),size:sr(e)}))}getEntries(e,t){let n=Jt();return this.Pe(e,t,(e,t)=>{const i=this.Re(e,t);n=n.insert(e,i)}).next(()=>n)}ve(e,t){let n=Jt(),i=new Wt(se.comparator);return this.Pe(e,t,(e,t)=>{const r=this.Re(e,t);n=n.insert(e,r),i=i.insert(e,sr(t))}).next(()=>({documents:n,Ve:i}))}Pe(e,t,n){if(t.isEmpty())return xi.resolve();const i=IDBKeyRange.bound(t.first().path.toArray(),t.last().path.toArray()),r=t.getIterator();let s=r.getNext();return Or(e).Kt({range:i},(e,t,i)=>{const o=se.fromSegments(e);for(;s&&se.comparator(s,o)<0;)n(s,null),s=r.getNext();s&&s.isEqual(o)&&(n(s,t),s=r.hasNext()?r.getNext():null),s?i.Mt(s.path.toArray()):i.done()}).next(()=>{for(;s;)n(s,null),s=r.hasNext()?r.getNext():null})}getDocumentsMatchingQuery(e,t,n){let i=Jt();const r=t.path.length+1,s={};if(n.isEqual(L.min())){const e=t.path.toArray();s.range=IDBKeyRange.lowerBound(e)}else{const e=t.path.toArray(),i=Bi(n);s.range=IDBKeyRange.lowerBound([e,i],!0),s.index=hi.collectionReadTimeIndex}return Or(e).Kt(s,(e,n,s)=>{if(e.length!==r)return;const o=Fi(this.N,n);t.path.isPrefixOf(o.key.path)?st(t,o)&&(i=i.insert(o.key,o)):s.done()}).next(()=>i)}newChangeBuffer(e){return new Er(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return Tr(e).get(di.key).next(e=>(b(!!e),e))}Ae(e,t){return Tr(e).put(di.key,t)}Re(e,t){if(t){const e=Fi(this.N,t);if(!e.isNoDocument()||!e.version.isEqual(L.min()))return e}return Ce.newInvalidDocument(e)}}class Er extends kr{constructor(e,t){super(),this.Se=e,this.trackRemovals=t,this.De=new xr(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){const t=[];let n=0,i=new Yt((e,t)=>j(e.canonicalString(),t.canonicalString()));return this.changes.forEach((r,s)=>{const o=this.De.get(r);if(s.document.isValidDocument()){const a=Vi(this.Se.N,s.document,this.getReadTime(r));i=i.add(r.path.popLast());const l=sr(a);n+=l-o,t.push(this.Se.addEntry(e,r,a))}else if(n-=o,this.trackRemovals){const n=Vi(this.Se.N,Ce.newNoDocument(r,L.min()),this.getReadTime(r));t.push(this.Se.addEntry(e,r,n))}else t.push(this.Se.removeEntry(e,r))}),i.forEach(n=>{t.push(this.Se.Ht.addToCollectionParentIndex(e,n))}),t.push(this.Se.updateMetadata(e,n)),xi.waitFor(t)}getFromCache(e,t){return this.Se.be(e,t).next(e=>(this.De.set(t,e.size),e.document))}getAllFromCache(e,t){return this.Se.ve(e,t).next(({documents:e,Ve:t})=>(t.forEach((e,t)=>{this.De.set(e,t)}),e))}}function Tr(e){return ji(e,di.store)}function Or(e){return ji(e,hi.store)}function Ir(e){return e.path.toArray()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this.N=e}Ct(e,t,n,i){b(n<i&&n>=0&&i<=11);const r=new ki("createOrUpgrade",t);n<1&&i>=1&&(function(e){e.createObjectStore(si.store)}(e),function(e){e.createObjectStore(oi.store,{keyPath:oi.keyPath}),e.createObjectStore(ai.store,{keyPath:ai.keyPath,autoIncrement:!0}).createIndex(ai.userMutationsIndex,ai.userMutationsKeyPath,{unique:!0}),e.createObjectStore(li.store)}(e),Nr(e),function(e){e.createObjectStore(hi.store)}(e));let s=xi.resolve();return n<3&&i>=3&&(0!==n&&(function(e){e.deleteObjectStore(pi.store),e.deleteObjectStore(fi.store),e.deleteObjectStore(mi.store)}(e),Nr(e)),s=s.next(()=>function(e){const t=e.store(mi.store),n=new mi(0,0,L.min().toTimestamp(),0);return t.put(mi.key,n)}(r))),n<4&&i>=4&&(0!==n&&(s=s.next(()=>function(e,t){return t.store(ai.store).Lt().next(n=>{e.deleteObjectStore(ai.store),e.createObjectStore(ai.store,{keyPath:ai.keyPath,autoIncrement:!0}).createIndex(ai.userMutationsIndex,ai.userMutationsKeyPath,{unique:!0});const i=t.store(ai.store),r=n.map(e=>i.put(e));return xi.waitFor(r)})}(e,r))),s=s.next(()=>{!function(e){e.createObjectStore(vi.store,{keyPath:vi.keyPath})}(e)})),n<5&&i>=5&&(s=s.next(()=>this.Ce(r))),n<6&&i>=6&&(s=s.next(()=>(function(e){e.createObjectStore(di.store)}(e),this.Ne(r)))),n<7&&i>=7&&(s=s.next(()=>this.xe(r))),n<8&&i>=8&&(s=s.next(()=>this.ke(e,r))),n<9&&i>=9&&(s=s.next(()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e),function(e){const t=e.objectStore(hi.store);t.createIndex(hi.readTimeIndex,hi.readTimeIndexPath,{unique:!1}),t.createIndex(hi.collectionReadTimeIndex,hi.collectionReadTimeIndexPath,{unique:!1})}(t)})),n<10&&i>=10&&(s=s.next(()=>this.$e(r))),n<11&&i>=11&&(s=s.next(()=>{!function(e){e.createObjectStore(yi.store,{keyPath:yi.keyPath})}(e),function(e){e.createObjectStore(bi.store,{keyPath:bi.keyPath})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)})),s}Ne(e){let t=0;return e.store(hi.store).Kt((e,n)=>{t+=sr(n)}).next(()=>{const n=new di(t);return e.store(di.store).put(di.key,n)})}Ce(e){const t=e.store(oi.store),n=e.store(ai.store);return t.Lt().next(t=>xi.forEach(t,t=>{const i=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.Lt(ai.userMutationsIndex,i).next(n=>xi.forEach(n,n=>{b(n.userId===t.userId);const i=Hi(this.N,n);return rr(e,t.userId,i).next(()=>{})}))}))}xe(e){const t=e.store(pi.store),n=e.store(hi.store);return e.store(mi.store).get(mi.key).next(e=>{const i=[];return n.Kt((n,r)=>{const s=new q(n),o=function(e){return[0,ei(e)]}(s);i.push(t.get(o).next(n=>n?xi.resolve():(n=>t.put(new pi(0,ei(n),e.highestListenSequenceNumber)))(s)))}).next(()=>xi.waitFor(i))})}ke(e,t){e.createObjectStore(gi.store,{keyPath:gi.keyPath});const n=t.store(gi.store),i=new Zi,r=e=>{if(i.add(e)){const t=e.lastSegment(),i=e.popLast();return n.put({collectionId:t,parent:ei(i)})}};return t.store(hi.store).Kt({qt:!0},(e,t)=>{const n=new q(e);return r(n.popLast())}).next(()=>t.store(li.store).Kt({qt:!0},([e,t,n],i)=>{const s=ii(t);return r(s.popLast())}))}$e(e){const t=e.store(fi.store);return t.Kt((e,n)=>{const i=Wi(n),r=Ki(this.N,i);return t.put(r)})}}function Nr(e){e.createObjectStore(pi.store,{keyPath:pi.keyPath}).createIndex(pi.documentTargetsIndex,pi.documentTargetsKeyPath,{unique:!0}),e.createObjectStore(fi.store,{keyPath:fi.keyPath}).createIndex(fi.queryTargetsIndexName,fi.queryTargetsKeyPath,{unique:!0}),e.createObjectStore(mi.store)}const Pr="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Ar{constructor(e,t,n,i,r,s,o,a,l,c){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Oe=r,this.window=s,this.document=o,this.Fe=l,this.Me=c,this.Le=null,this.Be=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ue=null,this.inForeground=!1,this.qe=null,this.Ke=null,this.je=Number.NEGATIVE_INFINITY,this.Qe=e=>Promise.resolve(),!Ar.bt())throw new x(C.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new wr(this,i),this.We=t+"main",this.N=new Li(a),this.Ge=new Si(this.We,11,new Dr(this.N)),this.ze=new dr(this.referenceDelegate,this.N),this.Ht=new er,this.He=function(e,t){return new Sr(e,t)}(this.N,this.Ht),this.Je=new Yi,this.window&&this.window.localStorage?this.Ye=this.window.localStorage:(this.Ye=null,!1===c&&m("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Xe().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new x(C.FAILED_PRECONDITION,Pr);return this.Ze(),this.tn(),this.en(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.ze.getHighestSequenceNumber(e))}).then(e=>{this.Le=new N(e,this.Fe)}).then(()=>{this.Be=!0}).catch(e=>(this.Ge&&this.Ge.close(),Promise.reject(e)))}nn(e){return this.Qe=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ge.xt(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Oe.enqueueAndForget(async()=>{this.started&&await this.Xe()}))}Xe(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Mr(e).put(new vi(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.sn(e).next(e=>{e||(this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)))})}).next(()=>this.rn(e)).next(t=>this.isPrimary&&!t?this.on(e).next(()=>!1):!!t&&this.cn(e).next(()=>!0))).catch(e=>{if(Oi(e))return p("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return p("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Oe.enqueueRetryable(()=>this.Qe(e)),this.isPrimary=e})}sn(e){return jr(e).get(si.key).next(e=>xi.resolve(this.an(e)))}un(e){return Mr(e).delete(this.clientId)}async hn(){if(this.isPrimary&&!this.ln(this.je,18e5)){this.je=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const t=ji(e,vi.store);return t.Lt().next(e=>{const n=this.fn(e,18e5),i=e.filter(e=>-1===n.indexOf(e));return xi.forEach(i,e=>t.delete(e.clientId)).next(()=>i)})}).catch(()=>[]);if(this.Ye)for(const t of e)this.Ye.removeItem(this.dn(t.clientId))}}en(){this.Ke=this.Oe.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Xe().then(()=>this.hn()).then(()=>this.en()))}an(e){return!!e&&e.ownerId===this.clientId}rn(e){return this.Me?xi.resolve(!0):jr(e).get(si.key).next(t=>{if(null!==t&&this.ln(t.leaseTimestampMs,5e3)&&!this.wn(t.ownerId)){if(this.an(t)&&this.networkEnabled)return!0;if(!this.an(t)){if(!t.allowTabSynchronization)throw new x(C.FAILED_PRECONDITION,Pr);return!1}}return!(!this.networkEnabled||!this.inForeground)||Mr(e).Lt().next(e=>void 0===this.fn(e,5e3).find(e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,i=this.networkEnabled===e.networkEnabled;if(t||n&&i)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&p("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.Be=!1,this._n(),this.Ke&&(this.Ke.cancel(),this.Ke=null),this.mn(),this.gn(),await this.Ge.runTransaction("shutdown","readwrite",[si.store,vi.store],e=>{const t=new Ai(e,N.T);return this.on(t).next(()=>this.un(t))}),this.Ge.close(),this.yn()}fn(e,t){return e.filter(e=>this.ln(e.updateTimeMs,t)&&!this.wn(e.clientId))}pn(){return this.runTransaction("getActiveClients","readonly",e=>Mr(e).Lt().next(e=>this.fn(e,18e5).map(e=>e.clientId)))}get started(){return this.Be}getMutationQueue(e){return or.Yt(e,this.N,this.Ht,this.referenceDelegate)}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getIndexManager(){return this.Ht}getBundleCache(){return this.Je}runTransaction(e,t,n){p("IndexedDbPersistence","Starting transaction:",e);const i="readonly"===t?"readonly":"readwrite";let r;return this.Ge.runTransaction(e,i,_i,i=>(r=new Ai(i,this.Le?this.Le.next():N.T),"readwrite-primary"===t?this.sn(r).next(e=>!!e||this.rn(r)).next(t=>{if(!t)throw m(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)),new x(C.FAILED_PRECONDITION,wi);return n(r)}).next(e=>this.cn(r).next(()=>e)):this.Tn(r).next(()=>n(r)))).then(e=>(r.raiseOnCommittedEvent(),e))}Tn(e){return jr(e).get(si.key).next(e=>{if(null!==e&&this.ln(e.leaseTimestampMs,5e3)&&!this.wn(e.ownerId)&&!this.an(e)&&!(this.Me||this.allowTabSynchronization&&e.allowTabSynchronization))throw new x(C.FAILED_PRECONDITION,Pr)})}cn(e){const t=new si(this.clientId,this.allowTabSynchronization,Date.now());return jr(e).put(si.key,t)}static bt(){return Si.bt()}on(e){const t=jr(e);return t.get(si.key).next(e=>this.an(e)?(p("IndexedDbPersistence","Releasing primary lease."),t.delete(si.key)):xi.resolve())}ln(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(m(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Ze(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.qe=()=>{this.Oe.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.Xe()))},this.document.addEventListener("visibilitychange",this.qe),this.inForeground="visible"===this.document.visibilityState)}mn(){this.qe&&(this.document.removeEventListener("visibilitychange",this.qe),this.qe=null)}tn(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Ue=()=>{this._n(),Object(o["E"])()&&navigator.appVersion.match("Version/14")&&this.Oe.enterRestrictedMode(!0),this.Oe.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ue))}gn(){this.Ue&&(this.window.removeEventListener("pagehide",this.Ue),this.Ue=null)}wn(e){var t;try{const n=null!==(null===(t=this.Ye)||void 0===t?void 0:t.getItem(this.dn(e)));return p("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return m("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}_n(){if(this.Ye)try{this.Ye.setItem(this.dn(this.clientId),String(Date.now()))}catch(e){m("Failed to set zombie client id.",e)}}yn(){if(this.Ye)try{this.Ye.removeItem(this.dn(this.clientId))}catch(e){}}dn(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function jr(e){return ji(e,si.store)}function Mr(e){return ji(e,vi.store)}function $r(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Rr{constructor(e,t){this.progress=e,this.En=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,t,n){this.He=e,this.In=t,this.Ht=n}An(e,t){return this.In.getAllMutationBatchesAffectingDocumentKey(e,t).next(n=>this.Rn(e,t,n))}Rn(e,t,n){return this.He.getEntry(e,t).next(e=>{for(const t of n)t.applyToLocalView(e);return e})}bn(e,t){e.forEach((e,n)=>{for(const i of t)i.applyToLocalView(n)})}Pn(e,t){return this.He.getEntries(e,t).next(t=>this.vn(e,t).next(()=>t))}vn(e,t){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>this.bn(t,e))}getDocumentsMatchingQuery(e,t,n){return function(e){return se.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Vn(e,t.path):Je(t)?this.Sn(e,t,n):this.Dn(e,t,n)}Vn(e,t){return this.An(e,new se(t)).next(e=>{let t=en();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}Sn(e,t,n){const i=t.collectionGroup;let r=en();return this.Ht.getCollectionParents(e,i).next(s=>xi.forEach(s,s=>{const o=function(e,t){return new He(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(i));return this.Dn(e,o,n).next(e=>{e.forEach((e,t)=>{r=r.insert(e,t)})})}).next(()=>r))}Dn(e,t,n){let i,r;return this.He.getDocumentsMatchingQuery(e,t,n).next(n=>(i=n,this.In.getAllMutationBatchesAffectingQuery(e,t))).next(t=>(r=t,this.Cn(e,r,i).next(e=>{i=e;for(const t of r)for(const e of t.mutations){const n=e.key;let r=i.get(n);null==r&&(r=Ce.newInvalidDocument(n),i=i.insert(n,r)),Dt(e,r,t.localWriteTime),r.isFoundDocument()||(i=i.remove(n))}}))).next(()=>(i.forEach((e,n)=>{st(t,n)||(i=i.remove(e))}),i))}Cn(e,t,n){let i=sn();for(const s of t)for(const e of s.mutations)e instanceof Mt&&null===n.get(e.key)&&(i=i.add(e.key));let r=n;return this.He.getEntries(e,i).next(e=>(e.forEach((e,t)=>{t.isFoundDocument()&&(r=r.insert(e,t))}),r))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Nn=n,this.xn=i}static kn(e,t){let n=sn(),i=sn();for(const r of t.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Fr(e,t.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{$n(e){this.On=e}getDocumentsMatchingQuery(e,t,n,i){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual(L.min())?this.Fn(e,t):this.On.Pn(e,i).next(r=>{const o=this.Mn(t,r);return(Ge(t)||Ye(t))&&this.Ln(t.limitType,o,i,n)?this.Fn(e,t):(d()<=s["a"].DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),rt(t)),this.On.getDocumentsMatchingQuery(e,t,n).next(e=>(o.forEach(t=>{e=e.insert(t.key,t)}),e)))})}Mn(e,t){let n=new Yt(ot(e));return t.forEach((t,i)=>{st(e,i)&&(n=n.add(i))}),n}Ln(e,t,n,i){if(n.size!==t.size)return!0;const r="F"===e?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Fn(e,t){return d()<=s["a"].DEBUG&&p("QueryEngine","Using full collection scan to execute query:",rt(t)),this.On.getDocumentsMatchingQuery(e,t,L.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,t,n,i){this.persistence=e,this.Bn=t,this.N=i,this.Un=new Wt(j),this.qn=new xr(e=>Se(e),Te),this.Kn=L.min(),this.In=e.getMutationQueue(n),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new Lr(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Un))}}function zr(e,t,n,i){return new Br(e,t,n,i)}async function qr(e,t){const n=w(e);let i=n.In,r=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",e=>{let s;return n.In.getAllMutationBatches(e).next(o=>(s=o,i=n.persistence.getMutationQueue(t),r=new Lr(n.jn,i,n.persistence.getIndexManager()),i.getAllMutationBatches(e))).next(t=>{const n=[],i=[];let o=sn();for(const e of s){n.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return r.Pn(e,o).next(e=>({Wn:e,removedBatchIds:n,addedBatchIds:i}))})});return n.In=i,n.Qn=r,n.Bn.$n(n.Qn),s}function Ur(e,t){const n=w(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const i=t.batch.keys(),r=n.jn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const r=n.batch,s=r.keys();let o=xi.resolve();return s.forEach(e=>{o=o.next(()=>i.getEntry(t,e)).next(t=>{const s=n.docVersions.get(e);b(null!==s),t.version.compareTo(s)<0&&(r.applyToRemoteDocument(t,n),t.isValidDocument()&&i.addEntry(t,n.commitVersion))})}),o.next(()=>e.In.removeMutationBatch(t,r))}(n,e,t,r).next(()=>r.apply(e)).next(()=>n.In.performConsistencyCheck(e)).next(()=>n.Qn.Pn(e,i))})}function Hr(e){const t=w(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.ze.getLastRemoteSnapshotVersion(e))}function Wr(e,t){const n=w(e),i=t.snapshotVersion;let r=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const s=n.jn.newChangeBuffer({trackRemovals:!0});r=n.Un;const o=[];t.targetChanges.forEach((t,s)=>{const a=r.get(s);if(!a)return;o.push(n.ze.removeMatchingKeys(e,t.removedDocuments,s).next(()=>n.ze.addMatchingKeys(e,t.addedDocuments,s)));const l=t.resumeToken;if(l.approximateByteSize()>0){const c=a.withResumeToken(l,i).withSequenceNumber(e.currentSequenceNumber);r=r.insert(s,c),function(e,t,n){return b(t.resumeToken.approximateByteSize()>0),0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,c,t)&&o.push(n.ze.updateTargetData(e,c))}});let a=Jt();if(t.documentUpdates.forEach((i,r)=>{t.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,i))}),o.push(Kr(e,s,t.documentUpdates,i,void 0).next(e=>{a=e})),!i.isEqual(L.min())){const t=n.ze.getLastRemoteSnapshotVersion(e).next(t=>n.ze.setTargetsMetadata(e,e.currentSequenceNumber,i));o.push(t)}return xi.waitFor(o).next(()=>s.apply(e)).next(()=>n.Qn.vn(e,a)).next(()=>a)}).then(e=>(n.Un=r,e))}function Kr(e,t,n,i,r){let s=sn();return n.forEach(e=>s=s.add(e)),t.getEntries(e,s).next(e=>{let s=Jt();return n.forEach((n,o)=>{const a=e.get(n),l=(null==r?void 0:r.get(n))||i;o.isNoDocument()&&o.version.isEqual(L.min())?(t.removeEntry(n,l),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(o,l),s=s.insert(n,o)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)}),s})}function Gr(e,t){const n=w(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.In.getNextMutationBatchAfterBatchId(e,t)))}function Yr(e,t){const n=w(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let i;return n.ze.getTargetData(e,t).next(r=>r?(i=r,xi.resolve(i)):n.ze.allocateTargetId(e).next(r=>(i=new Ri(t,r,0,e.currentSequenceNumber),n.ze.addTargetData(e,i).next(()=>i))))}).then(e=>{const i=n.Un.get(e.targetId);return(null===i||e.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Un=n.Un.insert(e.targetId,e),n.qn.set(t,e.targetId)),e})}async function Qr(e,t,n){const i=w(e),r=i.Un.get(t),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,e=>i.persistence.referenceDelegate.removeTarget(e,r))}catch(e){if(!Oi(e))throw e;p("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}i.Un=i.Un.remove(t),i.qn.delete(r.target)}function Xr(e,t,n){const i=w(e);let r=L.min(),s=sn();return i.persistence.runTransaction("Execute query","readonly",e=>function(e,t,n){const i=w(e),r=i.qn.get(n);return void 0!==r?xi.resolve(i.Un.get(r)):i.ze.getTargetData(t,n)}(i,e,et(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,i.ze.getMatchingKeysForTargetId(e,t.targetId).next(e=>{s=e})}).next(()=>i.Bn.getDocumentsMatchingQuery(e,t,n?r:L.min(),n?s:sn())).next(e=>({documents:e,Gn:s})))}function Jr(e,t){const n=w(e),i=w(n.ze),r=n.Un.get(t);return r?Promise.resolve(r.target):n.persistence.runTransaction("Get target data","readonly",e=>i.Tt(e,t).next(e=>e?e.target:null))}function Zr(e){const t=w(e);return t.persistence.runTransaction("Get new document changes","readonly",e=>function(e,t,n){const i=w(e);let r=Jt(),s=Bi(n);const o=Or(t),a=IDBKeyRange.lowerBound(s,!0);return o.Kt({index:hi.readTimeIndex,range:a},(e,t)=>{const n=Fi(i.N,t);r=r.insert(n.key,n),s=t.readTime}).next(()=>({En:r,readTime:zi(s)}))}(t.jn,e,t.Kn)).then(({En:e,readTime:n})=>(t.Kn=n,e))}async function es(e){const t=w(e);return t.persistence.runTransaction("Synchronize last document change read time","readonly",e=>function(e){const t=Or(e);let n=L.min();return t.Kt({index:hi.readTimeIndex,reverse:!0},(e,t,i)=>{t.readTime&&(n=zi(t.readTime)),i.done()}).next(()=>n)}(e)).then(e=>{t.Kn=e})}async function ts(e,t,n,i){const r=w(e);let s=sn(),o=Jt(),a=nn();for(const u of n){const e=t.zn(u.metadata.name);u.document&&(s=s.add(e)),o=o.insert(e,t.Hn(u)),a=a.insert(e,t.Jn(u.metadata.readTime))}const l=r.jn.newChangeBuffer({trackRemovals:!0}),c=await Yr(r,function(e){return et(Ke(q.fromString("__bundle__/docs/"+e)))}(i));return r.persistence.runTransaction("Apply bundle documents","readwrite",e=>Kr(e,l,o,L.min(),a).next(t=>(l.apply(e),t)).next(t=>r.ze.removeMatchingKeysForTargetId(e,c.targetId).next(()=>r.ze.addMatchingKeys(e,s,c.targetId)).next(()=>r.Qn.vn(e,t)).next(()=>t)))}async function ns(e,t,n=sn()){const i=await Yr(e,et(Gi(t.bundledQuery))),r=w(e);return r.persistence.runTransaction("Save named query","readwrite",e=>{const s=xn(t.readTime);if(i.snapshotVersion.compareTo(s)>=0)return r.Je.saveNamedQuery(e,t);const o=i.withResumeToken(G.EMPTY_BYTE_STRING,s);return r.Un=r.Un.insert(o.targetId,o),r.ze.updateTargetData(e,o).next(()=>r.ze.removeMatchingKeysForTargetId(e,i.targetId)).next(()=>r.ze.addMatchingKeys(e,n,i.targetId)).next(()=>r.Je.saveNamedQuery(e,t))})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return xi.resolve(this.Yn.get(t))}saveBundleMetadata(e,t){var n;return this.Yn.set(t.id,{id:(n=t).id,version:n.version,createTime:xn(n.createTime)}),xi.resolve()}getNamedQuery(e,t){return xi.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,function(e){return{name:e.name,query:Gi(e.bundledQuery),readTime:xn(e.readTime)}}(t)),xi.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){this.Zn=new Yt(ss.ts),this.es=new Yt(ss.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,t){const n=new ss(e,t);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.rs(new ss(e,t))}os(e,t){e.forEach(e=>this.removeReference(e,t))}cs(e){const t=new se(new q([])),n=new ss(t,e),i=new ss(t,e+1),r=[];return this.es.forEachInRange([n,i],e=>{this.rs(e),r.push(e.key)}),r}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const t=new se(new q([])),n=new ss(t,e),i=new ss(t,e+1);let r=sn();return this.es.forEachInRange([n,i],e=>{r=r.add(e.key)}),r}containsKey(e){const t=new ss(e,0),n=this.Zn.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class ss{constructor(e,t){this.key=e,this.ls=t}static ts(e,t){return se.comparator(e.key,t.key)||j(e.ls,t.ls)}static ns(e,t){return j(e.ls,t.ls)||se.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,t){this.Ht=e,this.referenceDelegate=t,this.In=[],this.fs=1,this.ds=new Yt(ss.ts)}checkEmpty(e){return xi.resolve(0===this.In.length)}addMutationBatch(e,t,n,i){const r=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const s=new Mi(r,t,n,i);this.In.push(s);for(const o of i)this.ds=this.ds.add(new ss(o.key,r)),this.Ht.addToCollectionParentIndex(e,o.key.path.popLast());return xi.resolve(s)}lookupMutationBatch(e,t){return xi.resolve(this.ws(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this._s(n),r=i<0?0:i;return xi.resolve(this.In.length>r?this.In[r]:null)}getHighestUnacknowledgedBatchId(){return xi.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(e){return xi.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ss(t,0),i=new ss(t,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([n,i],e=>{const t=this.ws(e.ls);r.push(t)}),xi.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Yt(j);return t.forEach(e=>{const t=new ss(e,0),i=new ss(e,Number.POSITIVE_INFINITY);this.ds.forEachInRange([t,i],e=>{n=n.add(e.ls)})}),xi.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let r=n;se.isDocumentKey(r)||(r=r.child(""));const s=new ss(new se(r),0);let o=new Yt(j);return this.ds.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e.ls)),!0)},s),xi.resolve(this.gs(o))}gs(e){const t=[];return e.forEach(e=>{const n=this.ws(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){b(0===this.ys(t.batchId,"removed")),this.In.shift();let n=this.ds;return xi.forEach(t.mutations,i=>{const r=new ss(i.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=n})}te(e){}containsKey(e,t){const n=new ss(t,0),i=this.ds.firstAfterOrEqual(n);return xi.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.In.length,xi.resolve()}ys(e,t){return this._s(e)}_s(e){return 0===this.In.length?0:e-this.In[0].batchId}ws(e){const t=this._s(e);return t<0||t>=this.In.length?null:this.In[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t){this.Ht=e,this.ps=t,this.docs=new Wt(se.comparator),this.size=0}addEntry(e,t,n){const i=t.key,r=this.docs.get(i),s=r?r.size:0,o=this.ps(t);return this.docs=this.docs.insert(i,{document:t.clone(),size:o,readTime:n}),this.size+=o-s,this.Ht.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return xi.resolve(n?n.document.clone():Ce.newInvalidDocument(t))}getEntries(e,t){let n=Jt();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.clone():Ce.newInvalidDocument(e))}),xi.resolve(n)}getDocumentsMatchingQuery(e,t,n){let i=Jt();const r=new se(t.path.child("")),s=this.docs.getIteratorFrom(r);for(;s.hasNext();){const{key:e,value:{document:r,readTime:o}}=s.getNext();if(!t.path.isPrefixOf(e.path))break;o.compareTo(n)<=0||st(t,r)&&(i=i.insert(r.key,r.clone()))}return xi.resolve(i)}Ts(e,t){return xi.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new ls(this)}getSize(e){return xi.resolve(this.size)}}class ls extends kr{constructor(e){super(),this.Se=e}applyChanges(e){const t=[];return this.changes.forEach((n,i)=>{i.document.isValidDocument()?t.push(this.Se.addEntry(e,i.document,this.getReadTime(n))):this.Se.removeEntry(n)}),xi.waitFor(t)}getFromCache(e,t){return this.Se.getEntry(e,t)}getAllFromCache(e,t){return this.Se.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.persistence=e,this.Es=new xr(e=>Se(e),Te),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.Is=0,this.As=new rs,this.targetCount=0,this.Rs=hr.se()}forEachTarget(e,t){return this.Es.forEach((e,n)=>t(n)),xi.resolve()}getLastRemoteSnapshotVersion(e){return xi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return xi.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),xi.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Is&&(this.Is=t),xi.resolve()}ce(e){this.Es.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Rs=new hr(t),this.highestTargetId=t),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,t){return this.ce(t),this.targetCount+=1,xi.resolve()}updateTargetData(e,t){return this.ce(t),xi.resolve()}removeTargetData(e,t){return this.Es.delete(t.target),this.As.cs(t.targetId),this.targetCount-=1,xi.resolve()}removeTargets(e,t,n){let i=0;const r=[];return this.Es.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Es.delete(s),r.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)}),xi.waitFor(r).next(()=>i)}getTargetCount(e){return xi.resolve(this.targetCount)}getTargetData(e,t){const n=this.Es.get(t)||null;return xi.resolve(n)}addMatchingKeys(e,t,n){return this.As.ss(t,n),xi.resolve()}removeMatchingKeys(e,t,n){this.As.os(t,n);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(t=>{r.push(i.markPotentiallyOrphaned(e,t))}),xi.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.As.cs(t),xi.resolve()}getMatchingKeysForTargetId(e,t){const n=this.As.hs(t);return xi.resolve(n)}containsKey(e,t){return xi.resolve(this.As.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,t){this.bs={},this.Le=new N(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new cs(this),this.Ht=new Ji,this.He=function(e,t){return new as(e,t)}(this.Ht,e=>this.referenceDelegate.Ps(e)),this.N=new Li(t),this.Je=new is(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let t=this.bs[e.toKey()];return t||(t=new os(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=t),t}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,t,n){p("MemoryPersistence","Starting transaction:",e);const i=new hs(this.Le.next());return this.referenceDelegate.vs(),n(i).next(e=>this.referenceDelegate.Vs(i).next(()=>e)).toPromise().then(e=>(i.raiseOnCommittedEvent(),e))}Ss(e,t){return xi.or(Object.values(this.bs).map(n=>()=>n.containsKey(e,t)))}}class hs extends Ci{constructor(e){super(),this.currentSequenceNumber=e}}class ds{constructor(e){this.persistence=e,this.Ds=new rs,this.Cs=null}static Ns(e){return new ds(e)}get xs(){if(this.Cs)return this.Cs;throw y()}addReference(e,t,n){return this.Ds.addReference(n,t),this.xs.delete(n.toString()),xi.resolve()}removeReference(e,t,n){return this.Ds.removeReference(n,t),this.xs.add(n.toString()),xi.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),xi.resolve()}removeTarget(e,t){this.Ds.cs(t.targetId).forEach(e=>this.xs.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.xs.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}vs(){this.Cs=new Set}Vs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return xi.forEach(this.xs,n=>{const i=se.fromPath(n);return this.ks(e,i).next(e=>{e||t.removeEntry(i)})}).next(()=>(this.Cs=null,t.apply(e)))}updateLimboDocument(e,t){return this.ks(e,t).next(e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())})}Ps(e){return 0}ks(e,t){return xi.or([()=>xi.resolve(this.Ds.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ss(e,t)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(e,t){return`firestore_clients_${e}_${t}`}function ps(e,t,n){let i=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(i+="_"+t.uid),i}function ms(e,t){return`firestore_targets_${e}_${t}`}class gs{constructor(e,t,n,i){this.user=e,this.batchId=t,this.state=n,this.error=i}static $s(e,t,n){const i=JSON.parse(n);let r,s="object"==typeof i&&-1!==["pending","acknowledged","rejected"].indexOf(i.state)&&(void 0===i.error||"object"==typeof i.error);return s&&i.error&&(s="string"==typeof i.error.message&&"string"==typeof i.error.code,s&&(r=new x(i.error.code,i.error.message))),s?new gs(e,t,i.state,r):(m("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class vs{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static $s(e,t){const n=JSON.parse(t);let i,r="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return r&&n.error&&(r="string"==typeof n.error.message&&"string"==typeof n.error.code,r&&(i=new x(n.error.code,n.error.message))),r?new vs(e,n.state,i):(m("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ys{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static $s(e,t){const n=JSON.parse(t);let i="object"==typeof n&&n.activeTargetIds instanceof Array,r=an();for(let s=0;i&&s<n.activeTargetIds.length;++s)i=re(n.activeTargetIds[s]),r=r.add(n.activeTargetIds[s]);return i?new ys(e,r):(m("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class bs{constructor(e,t){this.clientId=e,this.onlineState=t}static $s(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new bs(t.clientId,t.onlineState):(m("SharedClientState","Failed to parse online state: "+e),null)}}class _s{constructor(){this.activeTargetIds=an()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ws{constructor(e,t,n,i,r){this.window=e,this.Oe=t,this.persistenceKey=n,this.Ls=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Bs=this.Us.bind(this),this.qs=new Wt(j),this.started=!1,this.Ks=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=r,this.js=fs(this.persistenceKey,this.Ls),this.Qs=function(e){return"firestore_sequence_number_"+e}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.qs=this.qs.insert(this.Ls,new _s),this.Ws=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.Gs=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.zs=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.Hs=function(e){return"firestore_online_state_"+e}(this.persistenceKey),this.Js=function(e){return"firestore_bundle_loaded_"+e}(this.persistenceKey),this.window.addEventListener("storage",this.Bs)}static bt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.pn();for(const n of e){if(n===this.Ls)continue;const e=this.getItem(fs(this.persistenceKey,n));if(e){const t=ys.$s(n,e);t&&(this.qs=this.qs.insert(t.clientId,t))}}this.Ys();const t=this.storage.getItem(this.Hs);if(t){const e=this.Xs(t);e&&this.Zs(e)}for(const n of this.Ks)this.Us(n);this.Ks=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Qs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ti(this.qs)}isActiveQueryTarget(e){let t=!1;return this.qs.forEach((n,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.ei(e,"pending")}updateMutationState(e,t,n){this.ei(e,t,n),this.ni(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(ms(this.persistenceKey,e));if(n){const i=vs.$s(e,n);i&&(t=i.state)}}return this.si.Fs(e),this.Ys(),t}removeLocalQueryTarget(e){this.si.Ms(e),this.Ys()}isLocalQueryTarget(e){return this.si.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ms(this.persistenceKey,e))}updateQueryState(e,t,n){this.ii(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.ni(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.ri(e)}notifyBundleLoaded(){this.oi()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Bs),this.removeItem(this.js),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return p("SharedClientState","READ",e,t),t}setItem(e,t){p("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){p("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Us(e){const t=e;if(t.storageArea===this.storage){if(p("SharedClientState","EVENT",t.key,t.newValue),t.key===this.js)return void m("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Oe.enqueueRetryable(async()=>{if(this.started){if(null!==t.key)if(this.Ws.test(t.key)){if(null==t.newValue){const e=this.ci(t.key);return this.ai(e,null)}{const e=this.ui(t.key,t.newValue);if(e)return this.ai(e.clientId,e)}}else if(this.Gs.test(t.key)){if(null!==t.newValue){const e=this.hi(t.key,t.newValue);if(e)return this.li(e)}}else if(this.zs.test(t.key)){if(null!==t.newValue){const e=this.fi(t.key,t.newValue);if(e)return this.di(e)}}else if(t.key===this.Hs){if(null!==t.newValue){const e=this.Xs(t.newValue);if(e)return this.Zs(e)}}else if(t.key===this.Qs){const e=function(e){let t=N.T;if(null!=e)try{const n=JSON.parse(e);b("number"==typeof n),t=n}catch(e){m("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==N.T&&this.sequenceNumberHandler(e)}else if(t.key===this.Js)return this.syncEngine.wi()}else this.Ks.push(t)})}}get si(){return this.qs.get(this.Ls)}Ys(){this.setItem(this.js,this.si.Os())}ei(e,t,n){const i=new gs(this.currentUser,e,t,n),r=ps(this.persistenceKey,this.currentUser,e);this.setItem(r,i.Os())}ni(e){const t=ps(this.persistenceKey,this.currentUser,e);this.removeItem(t)}ri(e){const t={clientId:this.Ls,onlineState:e};this.storage.setItem(this.Hs,JSON.stringify(t))}ii(e,t,n){const i=ms(this.persistenceKey,e),r=new vs(e,t,n);this.setItem(i,r.Os())}oi(){this.setItem(this.Js,"value-not-used")}ci(e){const t=this.Ws.exec(e);return t?t[1]:null}ui(e,t){const n=this.ci(e);return ys.$s(n,t)}hi(e,t){const n=this.Gs.exec(e),i=Number(n[1]),r=void 0!==n[2]?n[2]:null;return gs.$s(new c(r),i,t)}fi(e,t){const n=this.zs.exec(e),i=Number(n[1]);return vs.$s(i,t)}Xs(e){return bs.$s(e)}async li(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine._i(e.batchId,e.state,e.error);p("SharedClientState","Ignoring mutation for non-active user "+e.user.uid)}di(e){return this.syncEngine.mi(e.targetId,e.state,e.error)}ai(e,t){const n=t?this.qs.insert(e,t):this.qs.remove(e),i=this.ti(this.qs),r=this.ti(n),s=[],o=[];return r.forEach(e=>{i.has(e)||s.push(e)}),i.forEach(e=>{r.has(e)||o.push(e)}),this.syncEngine.gi(s,o).then(()=>{this.qs=n})}Zs(e){this.qs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ti(e){let t=an();return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class Cs{constructor(){this.yi=new _s,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,t,n){this.pi[e]=t}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new _s,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{Ti(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Fi=t+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,t,n,i){const r=this.Bi(e,t);p("RestConnection","Sending: ",r,n);const s={};return this.Ui(s,i),this.qi(e,r,s,n).then(e=>(p("RestConnection","Received: ",e),e),t=>{throw g("RestConnection",e+" failed with error: ",t,"url: ",r,"request:",n),t})}Ki(e,t,n,i){return this.Li(e,t,n,i)}Ui(e,t){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+u,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t)for(const n in t.authHeaders)t.authHeaders.hasOwnProperty(n)&&(e[n]=t.authHeaders[n])}Bi(e,t){const n=Ss[e];return`${this.Fi}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,t,n,i){return new Promise((r,s)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const t=o.getResponseJson();p("Connection","XHR received:",JSON.stringify(t)),r(t);break;case a["a"].TIMEOUT:p("Connection",'RPC "'+e+'" timed out'),s(new x(C.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(p("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(t)>=0?t:C.UNKNOWN}(e.status);s(new x(t,e.message))}else s(new x(C.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new x(C.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{p("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);o.send(t,"POST",l,n,15)})}ji(e,t){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Object(a["h"])(),r=Object(a["i"])(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new a["d"]({})),this.Ui(s.initMessageHeaders,t),Object(o["A"])()||Object(o["D"])()||Object(o["w"])()||Object(o["y"])()||Object(o["F"])()||Object(o["v"])()||(s.httpHeadersOverwriteParam="$httpHeaders");const l=n.join("");p("Connection","Creating WebChannel: "+l,s);const c=i.createWebChannel(l,s);let u=!1,h=!1;const d=new Es({vi:e=>{h?p("Connection","Not sending because WebChannel is closed:",e):(u||(p("Connection","Opening WebChannel transport."),c.open(),u=!0),p("Connection","WebChannel sending:",e),c.send(e))},Vi:()=>c.close()}),f=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return f(c,a["f"].EventType.OPEN,()=>{h||p("Connection","WebChannel transport opened.")}),f(c,a["f"].EventType.CLOSE,()=>{h||(h=!0,p("Connection","WebChannel transport closed"),d.$i())}),f(c,a["f"].EventType.ERROR,e=>{h||(h=!0,g("Connection","WebChannel transport errored:",e),d.$i(new x(C.UNAVAILABLE,"The operation could not be completed")))}),f(c,a["f"].EventType.MESSAGE,e=>{var t;if(!h){const n=e.data[0];b(!!n);const i=n,r=i.error||(null===(t=i[0])||void 0===t?void 0:t.error);if(r){p("Connection","WebChannel received error:",r);const e=r.status;let t=function(e){const t=zt[e];if(void 0!==t)return Ht(t)}(e),n=r.message;void 0===t&&(t=C.INTERNAL,n="Unknown error status: "+e+" with message "+r.message),h=!0,d.$i(new x(t,n)),c.close()}else p("Connection","WebChannel received:",n),d.Oi(n)}}),f(r,a["b"].STAT_EVENT,e=>{e.stat===a["e"].PROXY?p("Connection","Detected buffering proxy"):e.stat===a["e"].NOPROXY&&p("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ki()},0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(){return"undefined"!=typeof window?window:null}function Is(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(e){return new bn(e,!0)}class Ns{constructor(e,t,n=1e3,i=1.5,r=6e4){this.Oe=e,this.timerId=t,this.Qi=n,this.Wi=i,this.Gi=r,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const t=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),i=Math.max(0,t-n);i>0&&p("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.zi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,i,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,t,n,i,r,s,o){this.Oe=e,this.er=n,this.nr=i,this.sr=r,this.credentialsProvider=s,this.listener=o,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new Ns(e,t)}ur(){return 1===this.state||5===this.state||this.hr()}hr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&null===this.rr&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this._r()))}mr(e){this.gr(),this.stream.send(e)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,t){this.gr(),this.yr(),this.ar.cancel(),this.ir++,4!==e?this.ar.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(m(t.toString()),m("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):t&&t.code===C.UNAUTHENTICATED&&3!==this.state&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.pr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(t)}pr(){}auth(){this.state=1;const e=this.Tr(this.ir),t=this.ir;this.credentialsProvider.getToken().then(e=>{this.ir===t&&this.Er(e)},t=>{e(()=>{const e=new x(C.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Ir(e)})})}Er(e){const t=this.Tr(this.ir);this.stream=this.Ar(e),this.stream.Si(()=>{t(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,()=>(this.hr()&&(this.state=3),Promise.resolve())),this.listener.Si()))}),this.stream.Ci(e=>{t(()=>this.Ir(e))}),this.stream.onMessage(e=>{t(()=>this.onMessage(e))})}lr(){this.state=5,this.ar.Xi(async()=>{this.state=0,this.start()})}Ir(e){return p("PersistentStream","close with error: "+e),this.stream=null,this.close(4,e)}Tr(e){return t=>{this.Oe.enqueueAndForget(()=>this.ir===e?t():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class As extends Ps{constructor(e,t,n,i,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r),this.N=i}Ar(e){return this.sr.ji("Listen",e)}onMessage(e){this.ar.reset();const t=Mn(this.N,e),n=function(e){if(!("targetChange"in e))return L.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?L.min():t.readTime?xn(t.readTime):L.min()}(e);return this.listener.Rr(t,n)}br(e){const t={};t.database=Dn(this.N),t.addTarget=function(e,t){let n;const i=t.target;return n=Oe(i)?{documents:Fn(e,i)}:{query:Vn(e,i)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=wn(e,t.resumeToken):t.snapshotVersion.compareTo(L.min())>0&&(n.readTime=_n(e,t.snapshotVersion.toTimestamp())),n}(this.N,e);const n=zn(this.N,e);n&&(t.labels=n),this.mr(t)}Pr(e){const t={};t.database=Dn(this.N),t.removeTarget=e,this.mr(t)}}class js extends Ps{constructor(e,t,n,i,r){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r),this.N=i,this.vr=!1}get Vr(){return this.vr}start(){this.vr=!1,this.lastStreamToken=void 0,super.start()}pr(){this.vr&&this.Sr([])}Ar(e){return this.sr.ji("Write",e)}onMessage(e){if(b(!!e.streamToken),this.lastStreamToken=e.streamToken,this.vr){this.ar.reset();const t=Ln(e.writeResults,e.commitTime),n=xn(e.commitTime);return this.listener.Dr(n,t)}return b(!e.writeResults||0===e.writeResults.length),this.vr=!0,this.listener.Cr()}Nr(){const e={};e.database=Dn(this.N),this.mr(e)}Sr(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>$n(this.N,e))};this.mr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends class{}{constructor(e,t,n){super(),this.credentials=e,this.sr=t,this.N=n,this.kr=!1}$r(){if(this.kr)throw new x(C.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,t,n){return this.$r(),this.credentials.getToken().then(i=>this.sr.Li(e,t,n,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===C.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new x(C.UNKNOWN,e.toString())})}Ki(e,t,n){return this.$r(),this.credentials.getToken().then(i=>this.sr.Ki(e,t,n,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===C.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new x(C.UNKNOWN,e.toString())})}terminate(){this.kr=!0}}class $s{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){0===this.Or&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve())))}qr(e){"Online"===this.state?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur("Connection failed 1 times. Most recent error: "+e.toString()),this.Br("Offline")))}set(e){this.Kr(),this.Or=0,"Online"===e&&(this.Mr=!1),this.Br(e)}Br(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ur(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(m(t),this.Mr=!1):p("OnlineStateTracker",t)}Kr(){null!==this.Fr&&(this.Fr.cancel(),this.Fr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t,n,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=r,this.zr.Ti(e=>{n.enqueueAndForget(async()=>{Ws(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=w(e);t.Wr.add(4),await Fs(t),t.Hr.set("Unknown"),t.Wr.delete(4),await Ls(t)}(this))})}),this.Hr=new $s(n,i)}}async function Ls(e){if(Ws(e))for(const t of e.Gr)await t(!0)}async function Fs(e){for(const t of e.Gr)await t(!1)}function Vs(e,t){const n=w(e);n.Qr.has(t.targetId)||(n.Qr.set(t.targetId,t),Hs(n)?Us(n):co(n).hr()&&zs(n,t))}function Bs(e,t){const n=w(e),i=co(n);n.Qr.delete(t),i.hr()&&qs(n,t),0===n.Qr.size&&(i.hr()?i.wr():Ws(n)&&n.Hr.set("Unknown"))}function zs(e,t){e.Jr.Y(t.targetId),co(e).br(t)}function qs(e,t){e.Jr.Y(t),co(e).Pr(t)}function Us(e){e.Jr=new pn({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Tt:t=>e.Qr.get(t)||null}),co(e).start(),e.Hr.Lr()}function Hs(e){return Ws(e)&&!co(e).ur()&&e.Qr.size>0}function Ws(e){return 0===w(e).Wr.size}function Ks(e){e.Jr=void 0}async function Gs(e){e.Qr.forEach((t,n)=>{zs(e,t)})}async function Ys(e,t){Ks(e),Hs(e)?(e.Hr.qr(t),Us(e)):e.Hr.set("Unknown")}async function Qs(e,t,n){if(e.Hr.set("Online"),t instanceof dn&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const i of t.targetIds)e.Qr.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.Qr.delete(i),e.Jr.removeTarget(i))}(e,t)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Xs(e,n)}else if(t instanceof un?e.Jr.rt(t):t instanceof hn?e.Jr.ft(t):e.Jr.at(t),!n.isEqual(L.min()))try{const t=await Hr(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Jr._t(t);return n.targetChanges.forEach((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=e.Qr.get(i);r&&e.Qr.set(i,r.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{const n=e.Qr.get(t);if(!n)return;e.Qr.set(t,n.withResumeToken(G.EMPTY_BYTE_STRING,n.snapshotVersion)),qs(e,t);const i=new Ri(n.target,t,1,n.sequenceNumber);zs(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){p("RemoteStore","Failed to raise snapshot:",t),await Xs(e,t)}}async function Xs(e,t,n){if(!Oi(t))throw t;e.Wr.add(1),await Fs(e),e.Hr.set("Offline"),n||(n=()=>Hr(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),e.Wr.delete(1),await Ls(e)})}function Js(e,t){return t().catch(n=>Xs(e,n,t))}async function Zs(e){const t=w(e),n=uo(t);let i=t.jr.length>0?t.jr[t.jr.length-1].batchId:-1;for(;eo(t);)try{const e=await Gr(t.localStore,i);if(null===e){0===t.jr.length&&n.wr();break}i=e.batchId,to(t,e)}catch(e){await Xs(t,e)}no(t)&&io(t)}function eo(e){return Ws(e)&&e.jr.length<10}function to(e,t){e.jr.push(t);const n=uo(e);n.hr()&&n.Vr&&n.Sr(t.mutations)}function no(e){return Ws(e)&&!uo(e).ur()&&e.jr.length>0}function io(e){uo(e).start()}async function ro(e){uo(e).Nr()}async function so(e){const t=uo(e);for(const n of e.jr)t.Sr(n.mutations)}async function oo(e,t,n){const i=e.jr.shift(),r=$i.from(i,t,n);await Js(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await Zs(e)}async function ao(e,t){t&&uo(e).Vr&&await async function(e,t){if(n=t.code,Ut(n)&&n!==C.ABORTED){const n=e.jr.shift();uo(e).dr(),await Js(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await Zs(e)}var n}(e,t),no(e)&&io(e)}async function lo(e,t){const n=w(e);t?(n.Wr.delete(2),await Ls(n)):t||(n.Wr.add(2),await Fs(n),n.Hr.set("Unknown"))}function co(e){return e.Yr||(e.Yr=function(e,t,n){const i=w(e);return i.$r(),new As(t,i.sr,i.credentials,i.N,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Si:Gs.bind(null,e),Ci:Ys.bind(null,e),Rr:Qs.bind(null,e)}),e.Gr.push(async t=>{t?(e.Yr.dr(),Hs(e)?Us(e):e.Hr.set("Unknown")):(await e.Yr.stop(),Ks(e))})),e.Yr}function uo(e){return e.Xr||(e.Xr=function(e,t,n){const i=w(e);return i.$r(),new js(t,i.sr,i.credentials,i.N,n)}(e.datastore,e.asyncQueue,{Si:ro.bind(null,e),Ci:ao.bind(null,e),Cr:so.bind(null,e),Dr:oo.bind(null,e)}),e.Gr.push(async t=>{t?(e.Xr.dr(),await Zs(e)):(await e.Xr.stop(),e.jr.length>0&&(p("RemoteStore",`Stopping write stream with ${e.jr.length} pending writes`),e.jr=[]))})),e.Xr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ho{constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new k,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,i,r){const s=Date.now()+n,o=new ho(e,t,s,i,r);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new x(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fo(e,t){if(m("AsyncQueue",`${t}: ${e}`),Oi(e))return new x(C.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this.comparator=e?(t,n)=>e(t,n)||se.comparator(t.key,n.key):(e,t)=>se.comparator(e.key,t.key),this.keyedMap=en(),this.sortedSet=new Wt(this.comparator)}static emptySet(e){return new po(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof po))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new po;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this.Zr=new Wt(se.comparator)}track(e){const t=e.doc.key,n=this.Zr.get(t);n?0!==e.type&&3===n.type?this.Zr=this.Zr.insert(t,e):3===e.type&&1!==n.type?this.Zr=this.Zr.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Zr=this.Zr.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Zr=this.Zr.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Zr=this.Zr.remove(t):1===e.type&&2===n.type?this.Zr=this.Zr.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Zr=this.Zr.insert(t,{type:2,doc:e.doc}):y():this.Zr=this.Zr.insert(t,e)}eo(){const e=[];return this.Zr.inorderTraversal((t,n)=>{e.push(n)}),e}}class go{constructor(e,t,n,i,r,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,i){const r=[];return t.forEach(e=>{r.push({type:0,doc:e})}),new go(e,t,po.emptySet(t),r,n,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nt(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.no=void 0,this.listeners=[]}}class yo{constructor(){this.queries=new xr(e=>it(e),nt),this.onlineState="Unknown",this.so=new Set}}async function bo(e,t){const n=w(e),i=t.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new vo),r)try{s.no=await n.onListen(i)}catch(e){const n=fo(e,`Initialization of query '${rt(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,s),s.listeners.push(t),t.io(n.onlineState),s.no&&t.ro(s.no)&&xo(n)}async function _o(e,t){const n=w(e),i=t.query;let r=!1;const s=n.queries.get(i);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),r=0===s.listeners.length)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function wo(e,t){const n=w(e);let i=!1;for(const r of t){const e=r.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.ro(r)&&(i=!0);t.no=r}}i&&xo(n)}function Co(e,t,n){const i=w(e),r=i.queries.get(t);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(t)}function xo(e){e.so.forEach(e=>{e.next()})}class ko{constructor(e,t,n){this.query=e,this.oo=t,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=n||{}}ro(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new go(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.co?this.uo(e)&&(this.oo.next(e),t=!0):this.ho(e,this.onlineState)&&(this.lo(e),t=!0),this.ao=e,t}onError(e){this.oo.error(e)}io(e){this.onlineState=e;let t=!1;return this.ao&&!this.co&&this.ho(this.ao,e)&&(this.lo(this.ao),t=!0),t}ho(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.fo||!n)&&(!e.docs.isEmpty()||"Offline"===t)}uo(e){if(e.docChanges.length>0)return!0;const t=this.ao&&this.ao.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}lo(e){e=go.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.oo.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t){this.payload=e,this.byteLength=t}wo(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this.N=e}zn(e){return Tn(this.N,e)}Hn(e){return e.metadata.exists?An(this.N,e.document,!1):Ce.newNoDocument(this.zn(e.metadata.name),this.Jn(e.metadata.readTime))}Jn(e){return xn(e)}}class To{constructor(e,t,n){this._o=e,this.localStore=t,this.N=n,this.queries=[],this.documents=[],this.progress=Oo(e)}mo(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;return e.payload.namedQuery?this.queries.push(e.payload.namedQuery):e.payload.documentMetadata?(this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t):e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t),t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}yo(e){const t=new Map,n=new Eo(this.N);for(const i of e)if(i.metadata.queries){const e=n.zn(i.metadata.name);for(const n of i.metadata.queries){const i=(t.get(n)||sn()).add(e);t.set(n,i)}}return t}async complete(){const e=await ts(this.localStore,new Eo(this.N),this.documents,this._o.id),t=this.yo(this.documents);for(const n of this.queries)await ns(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",new Rr(Object.assign({},this.progress),e)}}function Oo(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.key=e}}class Do{constructor(e){this.key=e}}class No{constructor(e,t){this.query=e,this.po=t,this.To=null,this.current=!1,this.Eo=sn(),this.mutatedKeys=sn(),this.Io=ot(e),this.Ao=new po(this.Io)}get Ro(){return this.po}bo(e,t){const n=t?t.Po:new mo,i=t?t.Ao:this.Ao;let r=t?t.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a=Ge(this.query)&&i.size===this.query.limit?i.last():null,l=Ye(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((e,t)=>{const c=i.get(e),u=st(this.query,t)?t:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;c&&u?c.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.vo(c,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Io(u,a)>0||l&&this.Io(u,l)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),f=!0):c&&!u&&(n.track({type:1,doc:c}),f=!0,(a||l)&&(o=!0)),f&&(u?(s=s.add(u),r=d?r.add(e):r.delete(e)):(s=s.delete(e),r=r.delete(e)))}),Ge(this.query)||Ye(this.query))for(;s.size>this.query.limit;){const e=Ge(this.query)?s.last():s.first();s=s.delete(e.key),r=r.delete(e.key),n.track({type:1,doc:e})}return{Ao:s,Po:n,Ln:o,mutatedKeys:r}}vo(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const i=this.Ao;this.Ao=e.Ao,this.mutatedKeys=e.mutatedKeys;const r=e.Po.eo();r.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Io(e.doc,t.doc)),this.Vo(n);const s=t?this.So():[],o=0===this.Eo.size&&this.current?1:0,a=o!==this.To;return this.To=o,0!==r.length||a?{snapshot:new go(this.query,e.Ao,i,r,e.mutatedKeys,0===o,a,!1),Do:s}:{Do:s}}io(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new mo,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(e){return!this.po.has(e)&&!!this.Ao.has(e)&&!this.Ao.get(e).hasLocalMutations}Vo(e){e&&(e.addedDocuments.forEach(e=>this.po=this.po.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.po=this.po.delete(e)),this.current=e.current)}So(){if(!this.current)return[];const e=this.Eo;this.Eo=sn(),this.Ao.forEach(e=>{this.Co(e.key)&&(this.Eo=this.Eo.add(e.key))});const t=[];return e.forEach(e=>{this.Eo.has(e)||t.push(new Do(e))}),this.Eo.forEach(n=>{e.has(n)||t.push(new Io(n))}),t}No(e){this.po=e.Gn,this.Eo=sn();const t=this.bo(e.documents);return this.applyChanges(t,!0)}xo(){return go.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,0===this.To)}}class Po{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Ao{constructor(e){this.key=e,this.ko=!1}}class jo{constructor(e,t,n,i,r,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.$o={},this.Oo=new xr(e=>it(e),nt),this.Fo=new Map,this.Mo=new Set,this.Lo=new Wt(se.comparator),this.Bo=new Map,this.Uo=new rs,this.qo={},this.Ko=new Map,this.jo=hr.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return!0===this.Qo}}async function Mo(e,t){const n=ua(e);let i,r;const s=n.Oo.get(t);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.xo();else{const e=await Yr(n.localStore,et(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,r=await $o(n,t,i,"current"===s),n.isPrimaryClient&&Vs(n.remoteStore,e)}return r}async function $o(e,t,n,i){e.Wo=(t,n,i)=>async function(e,t,n,i){let r=t.view.bo(n);r.Ln&&(r=await Xr(e.localStore,t.query,!1).then(({documents:e})=>t.view.bo(e,r)));const s=i&&i.targetChanges.get(t.targetId),o=t.view.applyChanges(r,e.isPrimaryClient,s);return Yo(e,t.targetId,o.Do),o.snapshot}(e,t,n,i);const r=await Xr(e.localStore,t,!0),s=new No(t,r.Gn),o=s.bo(r.documents),a=cn.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==e.onlineState),l=s.applyChanges(o,e.isPrimaryClient,a);Yo(e,n,l.Do);const c=new Po(t,n,s);return e.Oo.set(t,c),e.Fo.has(n)?e.Fo.get(n).push(t):e.Fo.set(n,[t]),l.snapshot}async function Ro(e,t){const n=w(e),i=n.Oo.get(t),r=n.Fo.get(i.targetId);if(r.length>1)return n.Fo.set(i.targetId,r.filter(e=>!nt(e,t))),void n.Oo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Qr(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),Bs(n.remoteStore,i.targetId),Ko(n,i.targetId)}).catch(gr)):(Ko(n,i.targetId),await Qr(n.localStore,i.targetId,!0))}async function Lo(e,t,n){const i=ha(e);try{const e=await function(e,t){const n=w(e),i=R.now(),r=t.reduce((e,t)=>e.add(t.key),sn());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>n.Qn.Pn(e,r).next(r=>{s=r;const o=[];for(const e of t){const t=Nt(e,s.get(e.key));null!=t&&o.push(new Mt(e.key,t,we(t.value.mapValue),Et.exists(!0)))}return n.In.addMutationBatch(e,i,o,t)})).then(e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s}))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.qo[e.currentUser.toKey()];i||(i=new Wt(j)),i=i.insert(t,n),e.qo[e.currentUser.toKey()]=i}(i,e.batchId,n),await Jo(i,e.changes),await Zs(i.remoteStore)}catch(e){const t=fo(e,"Failed to persist write");n.reject(t)}}async function Fo(e,t){const n=w(e);try{const e=await Wr(n.localStore,t);t.targetChanges.forEach((e,t)=>{const i=n.Bo.get(t);i&&(b(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?i.ko=!0:e.modifiedDocuments.size>0?b(i.ko):e.removedDocuments.size>0&&(b(i.ko),i.ko=!1))}),await Jo(n,e,t)}catch(e){await gr(e)}}function Vo(e,t,n){const i=w(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.Oo.forEach((n,i)=>{const r=i.view.io(t);r.snapshot&&e.push(r.snapshot)}),function(e,t){const n=w(e);n.onlineState=t;let i=!1;n.queries.forEach((e,n)=>{for(const r of n.listeners)r.io(t)&&(i=!0)}),i&&xo(n)}(i.eventManager,t),e.length&&i.$o.Rr(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Bo(e,t,n){const i=w(e);i.sharedClientState.updateQueryState(t,"rejected",n);const r=i.Bo.get(t),s=r&&r.key;if(s){let e=new Wt(se.comparator);e=e.insert(s,Ce.newNoDocument(s,L.min()));const n=sn().add(s),r=new ln(L.min(),new Map,new Yt(j),e,n);await Fo(i,r),i.Lo=i.Lo.remove(s),i.Bo.delete(t),Xo(i)}else await Qr(i.localStore,t,!1).then(()=>Ko(i,t,n)).catch(gr)}async function zo(e,t){const n=w(e),i=t.batch.batchId;try{const e=await Ur(n.localStore,t);Wo(n,i,null),Ho(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Jo(n,e)}catch(e){await gr(e)}}async function qo(e,t,n){const i=w(e);try{const e=await function(e,t){const n=w(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let i;return n.In.lookupMutationBatch(e,t).next(t=>(b(null!==t),i=t.keys(),n.In.removeMutationBatch(e,t))).next(()=>n.In.performConsistencyCheck(e)).next(()=>n.Qn.Pn(e,i))})}(i.localStore,t);Wo(i,t,n),Ho(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await Jo(i,e)}catch(n){await gr(n)}}async function Uo(e,t){const n=w(e);Ws(n.remoteStore)||p("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=w(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>t.In.getHighestUnacknowledgedBatchId(e))}(n.localStore);if(-1===e)return void t.resolve();const i=n.Ko.get(e)||[];i.push(t),n.Ko.set(e,i)}catch(e){const n=fo(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function Ho(e,t){(e.Ko.get(t)||[]).forEach(e=>{e.resolve()}),e.Ko.delete(t)}function Wo(e,t,n){const i=w(e);let r=i.qo[i.currentUser.toKey()];if(r){const e=r.get(t);e&&(n?e.reject(n):e.resolve(),r=r.remove(t)),i.qo[i.currentUser.toKey()]=r}}function Ko(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.Fo.get(t))e.Oo.delete(i),n&&e.$o.Go(i,n);e.Fo.delete(t),e.isPrimaryClient&&e.Uo.cs(t).forEach(t=>{e.Uo.containsKey(t)||Go(e,t)})}function Go(e,t){e.Mo.delete(t.path.canonicalString());const n=e.Lo.get(t);null!==n&&(Bs(e.remoteStore,n),e.Lo=e.Lo.remove(t),e.Bo.delete(n),Xo(e))}function Yo(e,t,n){for(const i of n)i instanceof Io?(e.Uo.addReference(i.key,t),Qo(e,i)):i instanceof Do?(p("SyncEngine","Document no longer in limbo: "+i.key),e.Uo.removeReference(i.key,t),e.Uo.containsKey(i.key)||Go(e,i.key)):y()}function Qo(e,t){const n=t.key,i=n.path.canonicalString();e.Lo.get(n)||e.Mo.has(i)||(p("SyncEngine","New document in limbo: "+n),e.Mo.add(i),Xo(e))}function Xo(e){for(;e.Mo.size>0&&e.Lo.size<e.maxConcurrentLimboResolutions;){const t=e.Mo.values().next().value;e.Mo.delete(t);const n=new se(q.fromString(t)),i=e.jo.next();e.Bo.set(i,new Ao(n)),e.Lo=e.Lo.insert(n,i),Vs(e.remoteStore,new Ri(et(Ke(n.path)),i,2,N.T))}}async function Jo(e,t,n){const i=w(e),r=[],s=[],o=[];i.Oo.isEmpty()||(i.Oo.forEach((e,a)=>{o.push(i.Wo(a,t,n).then(e=>{if(e){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),r.push(e);const t=Fr.kn(a.targetId,e);s.push(t)}}))}),await Promise.all(o),i.$o.Rr(r),await async function(e,t){const n=w(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>xi.forEach(t,t=>xi.forEach(t.Nn,i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i)).next(()=>xi.forEach(t.xn,i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))}catch(e){if(!Oi(e))throw e;p("LocalStore","Failed to update sequence numbers: "+e)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.Un.get(e),i=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(i);n.Un=n.Un.insert(e,r)}}}(i.localStore,s))}async function Zo(e,t){const n=w(e);if(!n.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());const e=await qr(n.localStore,t);n.currentUser=t,function(e,t){e.Ko.forEach(e=>{e.forEach(e=>{e.reject(new x(C.CANCELLED,t))})}),e.Ko.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Jo(n,e.Wn)}}function ea(e,t){const n=w(e),i=n.Bo.get(t);if(i&&i.ko)return sn().add(i.key);{let e=sn();const i=n.Fo.get(t);if(!i)return e;for(const t of i){const i=n.Oo.get(t);e=e.unionWith(i.view.Ro)}return e}}async function ta(e,t){const n=w(e),i=await Xr(n.localStore,t.query,!0),r=t.view.No(i);return n.isPrimaryClient&&Yo(n,t.targetId,r.Do),r}async function na(e){const t=w(e);return Zr(t.localStore).then(e=>Jo(t,e))}async function ia(e,t,n,i){const r=w(e),s=await function(e,t){const n=w(e),i=w(n.In);return n.persistence.runTransaction("Lookup mutation documents","readonly",e=>i.Xt(e,t).next(t=>t?n.Qn.Pn(e,t):xi.resolve(null)))}(r.localStore,t);null!==s?("pending"===n?await Zs(r.remoteStore):"acknowledged"===n||"rejected"===n?(Wo(r,t,i||null),Ho(r,t),function(e,t){w(w(e).In).te(t)}(r.localStore,t)):y(),await Jo(r,s)):p("SyncEngine","Cannot apply mutation batch with id: "+t)}async function ra(e,t){const n=w(e);if(ua(n),ha(n),!0===t&&!0!==n.Qo){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await sa(n,e.toArray());n.Qo=!0,await lo(n.remoteStore,!0);for(const i of t)Vs(n.remoteStore,i)}else if(!1===t&&!1!==n.Qo){const e=[];let t=Promise.resolve();n.Fo.forEach((i,r)=>{n.sharedClientState.isLocalQueryTarget(r)?e.push(r):t=t.then(()=>(Ko(n,r),Qr(n.localStore,r,!0))),Bs(n.remoteStore,r)}),await t,await sa(n,e),function(e){const t=w(e);t.Bo.forEach((e,n)=>{Bs(t.remoteStore,n)}),t.Uo.us(),t.Bo=new Map,t.Lo=new Wt(se.comparator)}(n),n.Qo=!1,await lo(n.remoteStore,!1)}}async function sa(e,t,n){const i=w(e),r=[],s=[];for(const o of t){let e;const t=i.Fo.get(o);if(t&&0!==t.length){e=await Yr(i.localStore,et(t[0]));for(const e of t){const t=i.Oo.get(e),n=await ta(i,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await Jr(i.localStore,o);e=await Yr(i.localStore,t),await $o(i,oa(t),o,!1)}r.push(e)}return i.$o.Rr(s),r}function oa(e){return We(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function aa(e){const t=w(e);return w(w(t.localStore).persistence).pn()}async function la(e,t,n,i){const r=w(e);if(r.Qo)p("SyncEngine","Ignoring unexpected query state notification.");else if(r.Fo.has(t))switch(n){case"current":case"not-current":{const e=await Zr(r.localStore),i=ln.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await Jo(r,e,i);break}case"rejected":await Qr(r.localStore,t,!0),Ko(r,t,i);break;default:y()}}async function ca(e,t,n){const i=ua(e);if(i.Qo){for(const e of t){if(i.Fo.has(e)){p("SyncEngine","Adding an already active target "+e);continue}const t=await Jr(i.localStore,e),n=await Yr(i.localStore,t);await $o(i,oa(t),n.targetId,!1),Vs(i.remoteStore,n)}for(const e of n)i.Fo.has(e)&&await Qr(i.localStore,e,!1).then(()=>{Bs(i.remoteStore,e),Ko(i,e)}).catch(gr)}}function ua(e){const t=w(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Fo.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ea.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Bo.bind(null,t),t.$o.Rr=wo.bind(null,t.eventManager),t.$o.Go=Co.bind(null,t.eventManager),t}function ha(e){const t=w(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=zo.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=qo.bind(null,t),t}function da(e,t,n){const i=w(e);(async function(e,t,n){try{const i=await t.getMetadata();if(await function(e,t){const n=w(e),i=xn(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",e=>n.Je.getBundleMetadata(e,t.id)).then(e=>!!e&&e.createTime.compareTo(i)>=0)}(e.localStore,i))return await t.close(),void n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(i));n._updateProgress(Oo(i));const r=new To(i,e.localStore,t.N);let s=await t.zo();for(;s;){const e=await r.mo(s);e&&n._updateProgress(e),s=await t.zo()}const o=await r.complete();await Jo(e,o.En,void 0),await function(e,t){const n=w(e);return n.persistence.runTransaction("Save bundle","readwrite",e=>n.Je.saveBundleMetadata(e,t))}(e.localStore,i),n._completeWith(o.progress)}catch(e){g("SyncEngine","Loading bundle failed with "+e),n._failWith(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(i,t,n).then(()=>{i.sharedClientState.notifyBundleLoaded()})}class fa{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=Ds(e.databaseInfo.databaseId),this.sharedClientState=this.Ho(e),this.persistence=this.Jo(e),await this.persistence.start(),this.gcScheduler=this.Yo(e),this.localStore=this.Xo(e)}Yo(e){return null}Xo(e){return zr(this.persistence,new Vr,e.initialUser,this.N)}Jo(e){return new us(ds.Ns,this.N)}Ho(e){return new Cs}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pa extends fa{constructor(e,t,n){super(),this.Zo=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await es(this.localStore),await this.Zo.initialize(this,e),await ha(this.Zo.syncEngine),await Zs(this.Zo.remoteStore),await this.persistence.nn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Xo(e){return zr(this.persistence,new Vr,e.initialUser,this.N)}Yo(e){const t=this.persistence.referenceDelegate.garbageCollector;return new br(t,e.asyncQueue)}Jo(e){const t=$r(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?ir.withCacheSize(this.cacheSizeBytes):ir.DEFAULT;return new Ar(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Os(),Is(),this.N,this.sharedClientState,!!this.forceOwnership)}Ho(e){return new Cs}}class ma extends pa{constructor(e,t){super(e,t,!1),this.Zo=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Zo.syncEngine;this.sharedClientState instanceof ws&&(this.sharedClientState.syncEngine={_i:ia.bind(null,t),mi:la.bind(null,t),gi:ca.bind(null,t),pn:aa.bind(null,t),wi:na.bind(null,t)},await this.sharedClientState.start()),await this.persistence.nn(async e=>{await ra(this.Zo.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):e||this.gcScheduler.stop())})}Ho(e){const t=Os();if(!ws.bt(t))throw new x(C.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=$r(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ws(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class ga{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Vo(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zo.bind(null,this.syncEngine),await lo(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new yo}createDatastore(e){const t=Ds(e.databaseInfo.databaseId),n=(i=e.databaseInfo,new Ts(i));var i;return function(e,t,n){return new Ms(e,t,n)}(e.credentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,i=e.asyncQueue,r=e=>Vo(this.syncEngine,e,0),s=ks.bt()?new ks:new xs,new Rs(t,n,i,r,s);var t,n,i,r,s}createSyncEngine(e,t){return function(e,t,n,i,r,s,o){const a=new jo(e,t,n,i,r,s);return o&&(a.Qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=w(e);p("RemoteStore","RemoteStore shutting down."),t.Wr.add(5),await Fs(t),t.zr.shutdown(),t.Hr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const i={value:e.slice(n,n+t),done:!1};return n+=t,i}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.tc(this.observer.next,e)}error(e){this.observer.error?this.tc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}ec(){this.muted=!0}tc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,t){this.nc=e,this.N=t,this.metadata=new k,this.buffer=new Uint8Array,this.sc=new TextDecoder("utf-8"),this.ic().then(e=>{e&&e.wo()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             "+JSON.stringify(null==e?void 0:e.payload)))},e=>this.metadata.reject(e))}close(){return this.nc.cancel()}async getMetadata(){return this.metadata.promise}async zo(){return await this.getMetadata(),this.ic()}async ic(){const e=await this.rc();if(null===e)return null;const t=this.sc.decode(e),n=Number(t);isNaN(n)&&this.oc(`length string (${t}) is not valid number`);const i=await this.cc(n);return new So(JSON.parse(i),e.length+n)}ac(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async rc(){for(;this.ac()<0;)if(await this.uc())break;if(0===this.buffer.length)return null;const e=this.ac();e<0&&this.oc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async cc(e){for(;this.buffer.length<e;)await this.uc()&&this.oc("Reached the end of bundle when more is expected.");const t=this.sc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}oc(e){throw this.nc.cancel(),new Error("Invalid bundle format: "+e)}async uc(){const e=await this.nc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new x(C.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=w(e),i=Dn(n.N)+"/documents",r={documents:t.map(e=>En(n.N,e))},s=await n.Ki("BatchGetDocuments",i,r),o=new Map;s.forEach(e=>{const t=jn(n.N,e);o.set(t.key.toString(),t)});const a=[];return t.forEach(e=>{const t=o.get(e.toString());b(!!t),a.push(t)}),a}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ft(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{const n=se.fromPath(t);this.mutations.push(new Vt(n,this.precondition(n)))}),await async function(e,t){const n=w(e),i=Dn(n.N)+"/documents",r={writes:t.map(e=>$n(n.N,e))};await n.Li("Commit",i,r)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw y();t=L.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new x(C.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?Et.updateTime(t):Et.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(L.min()))throw new x(C.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Et.updateTime(t)}return Et.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,t,n,i){this.asyncQueue=e,this.datastore=t,this.updateFunction=n,this.deferred=i,this.hc=5,this.ar=new Ns(this.asyncQueue,"transaction_retry")}run(){this.hc-=1,this.lc()}lc(){this.ar.Xi(async()=>{const e=new _a(this.datastore),t=this.fc(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.dc(e)}))}).catch(e=>{this.dc(e)})})}fc(e){try{const t=this.updateFunction(e);return!ne(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}dc(e){this.hc>0&&this.wc(e)?(this.hc-=1,this.asyncQueue.enqueueAndForget(()=>(this.lc(),Promise.resolve()))):this.deferred.reject(e)}wc(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!Ut(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,t,n){this.credentials=e,this.asyncQueue=t,this.databaseInfo=n,this.user=c.UNAUTHENTICATED,this.clientId=A.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(t,async e=>{p("FirestoreClient","Received user=",e.uid),await this.credentialListener(e),this.user=e})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new k;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(t){const n=fo(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function xa(e,t){e.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async e=>{i.isEqual(e)||(await qr(t.localStore,e),i=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function ka(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Sa(e);p("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener(e=>async function(e,t){const n=w(e);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const i=Ws(n);n.Wr.add(3),await Fs(n),i&&n.Hr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Wr.delete(3),await Ls(n)}(t.remoteStore,e)),e.onlineComponents=t}async function Sa(e){return e.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await xa(e,new fa)),e.offlineComponents}async function Ea(e){return e.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await ka(e,new ga)),e.onlineComponents}function Ta(e){return Sa(e).then(e=>e.persistence)}function Oa(e){return Sa(e).then(e=>e.localStore)}function Ia(e){return Ea(e).then(e=>e.remoteStore)}function Da(e){return Ea(e).then(e=>e.syncEngine)}async function Na(e){const t=await Ea(e),n=t.eventManager;return n.onListen=Mo.bind(null,t.syncEngine),n.onUnlisten=Ro.bind(null,t.syncEngine),n}function Pa(e){return e.asyncQueue.enqueue(async()=>{const t=await Ta(e),n=await Ia(e);return t.setNetworkEnabled(!0),function(e){const t=w(e);return t.Wr.delete(0),Ls(t)}(n)})}function Aa(e){return e.asyncQueue.enqueue(async()=>{const t=await Ta(e),n=await Ia(e);return t.setNetworkEnabled(!1),async function(e){const t=w(e);t.Wr.add(0),await Fs(t),t.Hr.set("Offline")}(n)})}function ja(e,t){const n=new k;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const i=await function(e,t){const n=w(e);return n.persistence.runTransaction("read document","readonly",e=>n.Qn.An(e,t))}(e,t);i.isFoundDocument()?n.resolve(i):i.isNoDocument()?n.resolve(null):n.reject(new x(C.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const i=fo(e,`Failed to get document '${t} from cache`);n.reject(i)}}(await Oa(e),t,n)),n.promise}function Ma(e,t,n={}){const i=new k;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,i,r){const s=new ya({next:s=>{t.enqueueAndForget(()=>_o(e,o));const a=s.docs.has(n);!a&&s.fromCache?r.reject(new x(C.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&i&&"server"===i.source?r.reject(new x(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(s)},error:e=>r.reject(e)}),o=new ko(Ke(n.path),s,{includeMetadataChanges:!0,fo:!0});return bo(e,o)}(await Na(e),e.asyncQueue,t,n,i)),i.promise}function $a(e,t){const n=new k;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const i=await Xr(e,t,!0),r=new No(t,i.Gn),s=r.bo(i.documents),o=r.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const i=fo(e,`Failed to execute query '${t} against cache`);n.reject(i)}}(await Oa(e),t,n)),n.promise}function Ra(e,t,n={}){const i=new k;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,i,r){const s=new ya({next:n=>{t.enqueueAndForget(()=>_o(e,o)),n.fromCache&&"server"===i.source?r.reject(new x(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:e=>r.reject(e)}),o=new ko(n,s,{includeMetadataChanges:!0,fo:!0});return bo(e,o)}(await Na(e),e.asyncQueue,t,n,i)),i.promise}function La(e,t){const n=new ya(t);return e.asyncQueue.enqueueAndForget(async()=>function(e,t){w(e).so.add(t),t.next()}(await Na(e),n)),()=>{n.ec(),e.asyncQueue.enqueueAndForget(async()=>function(e,t){w(e).so.delete(t)}(await Na(e),n))}}function Fa(e,t){const n=new k;return e.asyncQueue.enqueueAndForget(async()=>{const i=await function(e){return Ea(e).then(e=>e.datastore)}(e);new wa(e.asyncQueue,i,t,n).run()}),n.promise}function Va(e,t,n,i){const r=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new ba(e,t)}(function(e,t){if(e instanceof Uint8Array)return va(e,t);if(e instanceof ArrayBuffer)return va(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,Ds(t));e.asyncQueue.enqueueAndForget(async()=>{da(await Da(e),r,i)})}function Ba(e,t){return e.asyncQueue.enqueue(async()=>function(e,t){const n=w(e);return n.persistence.runTransaction("Get named query","readonly",e=>n.Je.getNamedQuery(e,t))}(await Oa(e),t))}class za{constructor(e,t,n,i,r,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class qa{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof qa&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(e,t,n){if(!n)throw new x(C.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Wa(e,t,n,i){if(!0===t&&!0===i)throw new x(C.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ka(e){if(!se.isDocumentKey(e))throw new x(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ga(e){if(se.isDocumentKey(e))throw new x(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ya(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=e.substring(0,20)+"..."),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":y()}function Qa(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new x(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ya(e);throw new x(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Xa(e,t){if(t<=0)throw new x(C.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new x(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new x(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Wa("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,t){this._credentials=t,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ja({}),this._settingsFrozen=!1,e instanceof qa?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new x(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qa(e.options.projectId)}(e))}get app(){if(!this._app)throw new x(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new x(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ja(e),void 0!==e.credentials&&(this._credentials=function(e){if(!e)return new E;switch(e.type){case"gapi":const t=e.client;return b(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new D(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new x(C.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Ua.get(e);t&&(p("ComponentProvider","Removing Datastore"),Ua.delete(e),t.terminate())}(this),Promise.resolve()}}function el(e,t,n,i={}){var r;const s=(e=Qa(e,Za))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&g("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=c.MOCK_USER;else{t=Object(o["k"])(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new x(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new c(s)}e._credentials=new T(new S(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new il(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tl(this.firestore,e,this._key)}}class nl{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new nl(this.firestore,e,this._query)}}class il extends nl{constructor(e,t,n){super(e,t,Ke(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tl(this.firestore,null,new se(e))}withConverter(e){return new il(this.firestore,e,this._path)}}function rl(e,t,...n){if(e=Object(o["r"])(e),Ha("collection","path",t),e instanceof Za){const i=q.fromString(t,...n);return Ga(i),new il(e,null,i)}{if(!(e instanceof tl||e instanceof il))throw new x(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(q.fromString(t,...n));return Ga(i),new il(e.firestore,null,i)}}function sl(e,t){if(e=Qa(e,Za),Ha("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new x(C.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new nl(e,null,function(e){return new He(q.emptyPath(),e)}(t))}function ol(e,t,...n){if(e=Object(o["r"])(e),1===arguments.length&&(t=A.I()),Ha("doc","path",t),e instanceof Za){const i=q.fromString(t,...n);return Ka(i),new tl(e,null,new se(i))}{if(!(e instanceof tl||e instanceof il))throw new x(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(q.fromString(t,...n));return Ka(i),new tl(e.firestore,e instanceof il?e.converter:null,new se(i))}}function al(e,t){return e=Object(o["r"])(e),t=Object(o["r"])(t),(e instanceof tl||e instanceof il)&&(t instanceof tl||t instanceof il)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function ll(e,t){return e=Object(o["r"])(e),t=Object(o["r"])(t),e instanceof nl&&t instanceof nl&&e.firestore===t.firestore&&nt(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class cl{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new Ns(this,"async_queue_retry"),this.Rc=()=>{const e=Is();e&&p("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ar.tr()};const e=Is();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.bc(),this.Pc(e)}enterRestrictedMode(e){if(!this.gc){this.gc=!0,this.Ic=e||!1;const t=Is();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Rc)}}enqueue(e){if(this.bc(),this.gc)return new Promise(()=>{});const t=new k;return this.Pc(()=>this.gc&&this.Ic?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.mc.push(e),this.vc()))}async vc(){if(0!==this.mc.length){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(e){if(!Oi(e))throw e;p("AsyncQueue","Operation failed with retryable error: "+e)}this.mc.length>0&&this.ar.Xi(()=>this.vc())}}Pc(e){const t=this._c.then(()=>(this.Ec=!0,e().catch(e=>{this.Tc=e,this.Ec=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw m("INTERNAL UNHANDLED ERROR: ",t),e}).then(e=>(this.Ec=!1,e))));return this._c=t,t}enqueueAfterDelay(e,t,n){this.bc(),this.Ac.indexOf(e)>-1&&(t=0);const i=ho.createAndSchedule(this,e,t,n,e=>this.Vc(e));return this.yc.push(i),i}bc(){this.Tc&&y()}verifyOperationInProgress(){}async Sc(){let e;do{e=this._c,await e}while(e!==this._c)}Dc(e){for(const t of this.yc)if(t.timerId===e)return!0;return!1}Cc(e){return this.Sc().then(()=>{this.yc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.yc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Sc()})}Nc(e){this.Ac.push(e)}Vc(e){const t=this.yc.indexOf(e);this.yc.splice(t,1)}}function ul(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const i of t)if(i in n&&"function"==typeof n[i])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class hl{constructor(){this._progressObserver={},this._taskCompletionResolver=new k,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=-1;class fl extends Za{constructor(e,t){super(e,t),this.type="firestore",this._queue=new cl,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ml(this),this._firestoreClient.terminate()}}function pl(e){return e._firestoreClient||ml(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function ml(e){var t;const n=e._freezeSettings(),i=function(e,t,n,i){return new za(e,t,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Ca(e._credentials,e._queue,i)}function gl(e,t){Sl(e=Qa(e,fl));const n=pl(e),i=e._freezeSettings(),r=new ga;return yl(n,r,new pa(r,i.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function vl(e){Sl(e=Qa(e,fl));const t=pl(e),n=e._freezeSettings(),i=new ga;return yl(t,i,new ma(i,n.cacheSizeBytes))}function yl(e,t,n){const i=new k;return e.asyncQueue.enqueue(async()=>{try{await xa(e,n),await ka(e,t),i.resolve()}catch(e){if(!function(e){return"FirebaseError"===e.name?e.code===C.FAILED_PRECONDITION||e.code===C.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(e))throw e;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+e),i.reject(e)}}).then(()=>i.promise)}function bl(e){if(e._initialized&&!e._terminated)throw new x(C.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new k;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!Si.bt())return Promise.resolve();const t=e+"main";await Si.delete(t)}($r(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function _l(e){return function(e){const t=new k;return e.asyncQueue.enqueueAndForget(async()=>Uo(await Da(e),t)),t.promise}(pl(e=Qa(e,fl)))}function wl(e){return Pa(pl(e=Qa(e,fl)))}function Cl(e){return Aa(pl(e=Qa(e,fl)))}function xl(e,t){const n=pl(e=Qa(e,fl)),i=new hl;return Va(n,e._databaseId,t,i),i}function kl(e,t){return Ba(pl(e=Qa(e,fl)),t).then(t=>t?new nl(e,null,t.query):null)}function Sl(e){if(e._initialized||e._terminated)throw new x(C.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new x(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new H(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Tl(G.fromBase64String(e))}catch(e){throw new x(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Tl(G.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new x(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new x(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return j(this._lat,e._lat)||j(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=/^__.*__$/;class Nl{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Mt(e,this.data,this.fieldMask,t,this.fieldTransforms):new jt(e,this.data,t,this.fieldTransforms)}}class Pl{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Mt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Al(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class jl{constructor(e,t,n,i,r,s){this.settings=e,this.databaseId=t,this.N=n,this.ignoreUndefinedProperties=i,void 0===r&&this.xc(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get kc(){return this.settings.kc}$c(e){return new jl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Oc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.$c({path:n,Fc:!1});return i.Mc(e),i}Lc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.$c({path:n,Fc:!1});return i.xc(),i}Bc(e){return this.$c({path:void 0,Fc:!0})}Uc(e){return ec(e,this.settings.methodName,this.settings.qc||!1,this.path,this.settings.Kc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Mc(this.path.get(e))}Mc(e){if(0===e.length)throw this.Uc("Document fields must not be empty");if(Al(this.kc)&&Dl.test(e))throw this.Uc('Document fields cannot begin and end with "__"')}}class Ml{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.N=n||Ds(e)}jc(e,t,n,i=!1){return new jl({kc:e,methodName:t,Kc:n,path:H.emptyPath(),Fc:!1,qc:i},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function $l(e){const t=e._freezeSettings(),n=Ds(e._databaseId);return new Ml(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Rl(e,t,n,i,r,s={}){const o=e.jc(s.merge||s.mergeFields?2:0,t,n,r);Ql("Data must be an object, but it was:",o,i);const a=Gl(i,o);let l,c;if(s.merge)l=new W(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const i of s.mergeFields){const r=Xl(t,i,n);if(!o.contains(r))throw new x(C.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);tc(e,r)||e.push(r)}l=new W(e),c=o.fieldTransforms.filter(e=>l.covers(e.field))}else l=null,c=o.fieldTransforms;return new Nl(new _e(a),l,c)}class Ll extends Ol{_toFieldTransform(e){if(2!==e.kc)throw 1===e.kc?e.Uc(this._methodName+"() can only appear at the top level of your update data"):e.Uc(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ll}}function Fl(e,t,n){return new jl({kc:3,Kc:t.settings.Kc,methodName:e._methodName,Fc:n},t.databaseId,t.N,t.ignoreUndefinedProperties)}class Vl extends Ol{_toFieldTransform(e){return new xt(e.path,new mt)}isEqual(e){return e instanceof Vl}}class Bl extends Ol{constructor(e,t){super(e),this.Qc=t}_toFieldTransform(e){const t=Fl(this,e,!0),n=this.Qc.map(e=>Kl(e,t)),i=new gt(n);return new xt(e.path,i)}isEqual(e){return this===e}}class zl extends Ol{constructor(e,t){super(e),this.Qc=t}_toFieldTransform(e){const t=Fl(this,e,!0),n=this.Qc.map(e=>Kl(e,t)),i=new yt(n);return new xt(e.path,i)}isEqual(e){return this===e}}class ql extends Ol{constructor(e,t){super(e),this.Wc=t}_toFieldTransform(e){const t=new _t(e.N,ut(e.N,this.Wc));return new xt(e.path,t)}isEqual(e){return this===e}}function Ul(e,t,n,i){const r=e.jc(1,t,n);Ql("Data must be an object, but it was:",r,i);const s=[],a=_e.empty();V(i,(e,i)=>{const l=Zl(t,e,n);i=Object(o["r"])(i);const c=r.Lc(l);if(i instanceof Ll)s.push(l);else{const e=Kl(i,c);null!=e&&(s.push(l),a.set(l,e))}});const l=new W(s);return new Pl(a,l,r.fieldTransforms)}function Hl(e,t,n,i,r,s){const a=e.jc(1,t,n),l=[Xl(t,i,n)],c=[r];if(s.length%2!=0)throw new x(C.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let o=0;o<s.length;o+=2)l.push(Xl(t,s[o])),c.push(s[o+1]);const u=[],h=_e.empty();for(let f=l.length-1;f>=0;--f)if(!tc(u,l[f])){const e=l[f];let t=c[f];t=Object(o["r"])(t);const n=a.Lc(e);if(t instanceof Ll)u.push(e);else{const i=Kl(t,n);null!=i&&(u.push(e),h.set(e,i))}}const d=new W(u);return new Pl(h,d,a.fieldTransforms)}function Wl(e,t,n,i=!1){return Kl(n,e.jc(i?4:3,t))}function Kl(e,t){if(Yl(e=Object(o["r"])(e)))return Ql("Unsupported field value:",t,e),Gl(e,t);if(e instanceof Ol)return function(e,t){if(!Al(t.kc))throw t.Uc(e._methodName+"() can only be used with update() and set()");if(!t.path)throw t.Uc(e._methodName+"() is not currently supported inside arrays");const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Fc&&4!==t.kc)throw t.Uc("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const r of e){let e=Kl(r,t.Bc(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Object(o["r"])(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return ut(t.N,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=R.fromDate(e);return{timestampValue:_n(t.N,n)}}if(e instanceof R){const n=new R(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:_n(t.N,n)}}if(e instanceof Il)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Tl)return{bytesValue:wn(t.N,e._byteString)};if(e instanceof tl){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.Uc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:kn(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Uc("Unsupported field value: "+Ya(e))}(e,t)}function Gl(e,t){const n={};return B(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):V(e,(e,i)=>{const r=Kl(i,t.Oc(e));null!=r&&(n[e]=r)}),{mapValue:{fields:n}}}function Yl(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof R||e instanceof Il||e instanceof Tl||e instanceof tl||e instanceof Ol)}function Ql(e,t,n){if(!Yl(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const i=Ya(n);throw"an object"===i?t.Uc(e+" a custom object"):t.Uc(e+" "+i)}}function Xl(e,t,n){if((t=Object(o["r"])(t))instanceof El)return t._internalPath;if("string"==typeof t)return Zl(e,t);throw ec("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const Jl=new RegExp("[~\\*/\\[\\]]");function Zl(e,t,n){if(t.search(Jl)>=0)throw ec(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new El(...t.split("."))._internalPath}catch(i){throw ec(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ec(e,t,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=" in field "+i),o&&(l+=" in document "+r),l+=")"),new x(C.INVALID_ARGUMENT,a+e+l)}function tc(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,t,n,i,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new tl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new ic(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(rc("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class ic extends nc{data(){return super.data()}}function rc(e,t){return"string"==typeof t?Zl(e,t):t instanceof El?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class oc extends nc{constructor(e,t,n,i,r,s){super(e,t,n,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ac(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(rc("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class ac extends oc{data(e={}){return super.data(e)}}class lc{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new sc(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new ac(this._firestore,this._userDataWriter,n.key,n,new sc(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new x(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>({type:"added",doc:new ac(e._firestore,e._userDataWriter,n.doc.key,n.doc,new sc(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const i=new ac(e._firestore,e._userDataWriter,t.doc.key,t.doc,new sc(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let r=-1,s=-1;return 0!==t.type&&(r=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:cc(t.type),doc:i,oldIndex:r,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function cc(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}function uc(e,t){return e instanceof oc&&t instanceof oc?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof lc&&t instanceof lc&&e._firestore===t._firestore&&ll(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(e){if(Ye(e)&&0===e.explicitOrderBy.length)throw new x(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dc{}function fc(e,...t){for(const n of t)e=n._apply(e);return e}class pc extends dc{constructor(e,t,n){super(),this.Gc=e,this.zc=t,this.Hc=n,this.type="where"}_apply(e){const t=$l(e.firestore),n=function(e,t,n,i,r,s,o){let a;if(r.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new x(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on FieldPath.documentId().`);if("in"===s||"not-in"===s){Ic(o,s);const t=[];for(const n of o)t.push(Oc(i,e,n));a={arrayValue:{values:t}}}else a=Oc(i,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Ic(o,s),a=Wl(n,t,o,"in"===s||"not-in"===s);const l=Ie.create(r,s,a);return function(e,t){if(t.v()){const n=Xe(e);if(null!==n&&!n.isEqual(t.field))throw new x(C.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const i=Qe(e);null!==i&&Dc(e,t.field,i)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new x(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new x(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,l),l}(e._query,"where",t,e.firestore._databaseId,this.Gc,this.zc,this.Hc);return new nl(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new He(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function mc(e,t,n){const i=t,r=rc("where",e);return new pc(r,i,n)}class gc extends dc{constructor(e,t){super(),this.Gc=e,this.Jc=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new x(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new x(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const i=new Be(t,n);return function(e,t){if(null===Qe(e)){const n=Xe(e);null!==n&&Dc(e,n,t.field)}}(e,i),i}(e._query,this.Gc,this.Jc);return new nl(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new He(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function vc(e,t="asc"){const n=t,i=rc("orderBy",e);return new gc(i,n)}class yc extends dc{constructor(e,t,n){super(),this.type=e,this.Yc=t,this.Xc=n}_apply(e){return new nl(e.firestore,e.converter,tt(e._query,this.Yc,this.Xc))}}function bc(e){return Xa("limit",e),new yc("limit",e,"F")}function _c(e){return Xa("limitToLast",e),new yc("limitToLast",e,"L")}class wc extends dc{constructor(e,t,n){super(),this.type=e,this.Zc=t,this.ta=n}_apply(e){const t=Tc(e,this.type,this.Zc,this.ta);return new nl(e.firestore,e.converter,function(e,t){return new He(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function Cc(...e){return new wc("startAt",e,!0)}function xc(...e){return new wc("startAfter",e,!1)}class kc extends dc{constructor(e,t,n){super(),this.type=e,this.Zc=t,this.ta=n}_apply(e){const t=Tc(e,this.type,this.Zc,this.ta);return new nl(e.firestore,e.converter,function(e,t){return new He(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function Sc(...e){return new kc("endBefore",e,!0)}function Ec(...e){return new kc("endAt",e,!1)}function Tc(e,t,n,i){if(n[0]=Object(o["r"])(n[0]),n[0]instanceof nc)return function(e,t,n,i,r){if(!i)throw new x(C.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of Ze(e))if(o.field.isKeyField())s.push(fe(t,i.key));else{const e=i.data.field(o.field);if(Z(e))throw new x(C.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new x(C.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new Fe(s,r)}(e._query,e.firestore._databaseId,t,n[0]._document,i);{const r=$l(e.firestore);return function(e,t,n,i,r,s){const o=e.explicitOrderBy;if(r.length>o.length)throw new x(C.INVALID_ARGUMENT,`Too many arguments provided to ${i}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let l=0;l<r.length;l++){const s=r[l];if(o[l].field.isKeyField()){if("string"!=typeof s)throw new x(C.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${i}(), but got a ${typeof s}`);if(!Je(e)&&-1!==s.indexOf("/"))throw new x(C.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${i}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(q.fromString(s));if(!se.isDocumentKey(n))throw new x(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${i}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const r=new se(n);a.push(fe(t,r))}else{const e=Wl(n,i,s);a.push(e)}}return new Fe(a,s)}(e._query,e.firestore._databaseId,r,t,n,i)}}function Oc(e,t,n){if("string"==typeof(n=Object(o["r"])(n))){if(""===n)throw new x(C.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!Je(t)&&-1!==n.indexOf("/"))throw new x(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=t.path.child(q.fromString(n));if(!se.isDocumentKey(i))throw new x(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return fe(e,new se(i))}if(n instanceof tl)return fe(e,n._key);throw new x(C.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ya(n)}.`)}function Ic(e,t){if(!Array.isArray(e)||0===e.length)throw new x(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new x(C.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function Dc(e,t,n){if(!n.isEqual(t))throw new x(C.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{convertValue(e,t="none"){switch(oe(e)){case 0:return null;case 1:return e.booleanValue;case 2:return X(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(J(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw y()}}convertObject(e,t){const n={};return V(e.fields,(e,i)=>{n[e]=this.convertValue(i,t)}),n}convertGeoPoint(e){return new Il(X(e.latitude),X(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ee(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(te(e));default:return null}}convertTimestamp(e){const t=Q(e);return new R(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=q.fromString(e);b(Zn(n));const i=new qa(n.get(1),n.get(3)),r=new se(n.popFirst(5));return i.isEqual(t)||m(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}class Ac extends Nc{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tl(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new tl(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=$l(e)}set(e,t,n){this._verifyNotCommitted();const i=Mc(e,this._firestore),r=Pc(i.converter,t,n),s=Rl(this._dataReader,"WriteBatch.set",i._key,r,null!==i.converter,n);return this._mutations.push(s.toMutation(i._key,Et.none())),this}update(e,t,n,...i){this._verifyNotCommitted();const r=Mc(e,this._firestore);let s;return s="string"==typeof(t=Object(o["r"])(t))||t instanceof El?Hl(this._dataReader,"WriteBatch.update",r._key,t,n,i):Ul(this._dataReader,"WriteBatch.update",r._key,t),this._mutations.push(s.toMutation(r._key,Et.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Mc(e,this._firestore);return this._mutations=this._mutations.concat(new Ft(t._key,Et.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new x(C.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Mc(e,t){if((e=Object(o["r"])(e)).firestore!==t)throw new x(C.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(e){e=Qa(e,tl);const t=Qa(e.firestore,fl);return Ma(pl(t),e._key).then(n=>Qc(t,e,n))}class Rc extends Nc{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tl(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new tl(this.firestore,null,t)}}function Lc(e){e=Qa(e,tl);const t=Qa(e.firestore,fl),n=pl(t),i=new Rc(t);return ja(n,e._key).then(n=>new oc(t,i,e._key,n,new sc(null!==n&&n.hasLocalMutations,!0),e.converter))}function Fc(e){e=Qa(e,tl);const t=Qa(e.firestore,fl);return Ma(pl(t),e._key,{source:"server"}).then(n=>Qc(t,e,n))}function Vc(e){e=Qa(e,nl);const t=Qa(e.firestore,fl),n=pl(t),i=new Rc(t);return hc(e._query),Ra(n,e._query).then(n=>new lc(t,i,e,n))}function Bc(e){e=Qa(e,nl);const t=Qa(e.firestore,fl),n=pl(t),i=new Rc(t);return $a(n,e._query).then(n=>new lc(t,i,e,n))}function zc(e){e=Qa(e,nl);const t=Qa(e.firestore,fl),n=pl(t),i=new Rc(t);return Ra(n,e._query,{source:"server"}).then(n=>new lc(t,i,e,n))}function qc(e,t,n){e=Qa(e,tl);const i=Qa(e.firestore,fl),r=Pc(e.converter,t,n);return Yc(i,[Rl($l(i),"setDoc",e._key,r,null!==e.converter,n).toMutation(e._key,Et.none())])}function Uc(e,t,n,...i){e=Qa(e,tl);const r=Qa(e.firestore,fl),s=$l(r);let a;return a="string"==typeof(t=Object(o["r"])(t))||t instanceof El?Hl(s,"updateDoc",e._key,t,n,i):Ul(s,"updateDoc",e._key,t),Yc(r,[a.toMutation(e._key,Et.exists(!0))])}function Hc(e){return Yc(Qa(e.firestore,fl),[new Ft(e._key,Et.none())])}function Wc(e,t){const n=Qa(e.firestore,fl),i=ol(e),r=Pc(e.converter,t);return Yc(n,[Rl($l(e.firestore),"addDoc",i._key,r,null!==e.converter,{}).toMutation(i._key,Et.exists(!1))]).then(()=>i)}function Kc(e,...t){var n,i,r;e=Object(o["r"])(e);let s={includeMetadataChanges:!1},a=0;"object"!=typeof t[a]||ul(t[a])||(s=t[a],a++);const l={includeMetadataChanges:s.includeMetadataChanges};if(ul(t[a])){const e=t[a];t[a]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[a+1]=null===(i=e.error)||void 0===i?void 0:i.bind(e),t[a+2]=null===(r=e.complete)||void 0===r?void 0:r.bind(e)}let c,u,h;if(e instanceof tl)u=Qa(e.firestore,fl),h=Ke(e._key.path),c={next:n=>{t[a]&&t[a](Qc(u,e,n))},error:t[a+1],complete:t[a+2]};else{const n=Qa(e,nl);u=Qa(n.firestore,fl),h=n._query;const i=new Rc(u);c={next:e=>{t[a]&&t[a](new lc(u,i,n,e))},error:t[a+1],complete:t[a+2]},hc(e._query)}return function(e,t,n,i){const r=new ya(i),s=new ko(t,r,n);return e.asyncQueue.enqueueAndForget(async()=>bo(await Na(e),s)),()=>{r.ec(),e.asyncQueue.enqueueAndForget(async()=>_o(await Na(e),s))}}(pl(u),h,l,c)}function Gc(e,t){return La(pl(e=Qa(e,fl)),ul(t)?t:{next:t})}function Yc(e,t){return function(e,t){const n=new k;return e.asyncQueue.enqueueAndForget(async()=>Lo(await Da(e),t,n)),n.promise}(pl(e),t)}function Qc(e,t,n){const i=n.docs.get(t._key),r=new Rc(e);return new oc(e,r,t._key,i,new sc(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=$l(e)}get(e){const t=Mc(e,this._firestore),n=new Ac(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return y();const i=e[0];if(i.isFoundDocument())return new nc(this._firestore,n,i.key,i,t.converter);if(i.isNoDocument())return new nc(this._firestore,n,t._key,null,t.converter);throw y()})}set(e,t,n){const i=Mc(e,this._firestore),r=Pc(i.converter,t,n),s=Rl(this._dataReader,"Transaction.set",i._key,r,null!==i.converter,n);return this._transaction.set(i._key,s),this}update(e,t,n,...i){const r=Mc(e,this._firestore);let s;return s="string"==typeof(t=Object(o["r"])(t))||t instanceof El?Hl(this._dataReader,"Transaction.update",r._key,t,n,i):Ul(this._dataReader,"Transaction.update",r._key,t),this._transaction.update(r._key,s),this}delete(e){const t=Mc(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Mc(e,this._firestore),n=new Rc(this._firestore);return super.get(e).then(e=>new oc(this._firestore,n,t._key,e._document,new sc(!1,!1),t.converter))}}function Jc(e,t){return Fa(pl(e=Qa(e,fl)),n=>t(new Xc(e,n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(){return new Ll("deleteField")}function eu(){return new Vl("serverTimestamp")}function tu(...e){return new Bl("arrayUnion",e)}function nu(...e){return new zl("arrayRemove",e)}function iu(e){return new ql("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){u=e}(i["SDK_VERSION"]),Object(i["_registerComponent"])(new r["a"]("firestore",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=new fl(i,new O(e.getProvider("auth-internal")));return n=Object.assign({useFetchStreams:t},n),r._setSettings(n),r},"PUBLIC")),Object(i["registerVersion"])(l,"3.3.0",e),Object(i["registerVersion"])(l,"3.3.0","esm2017")}()}).call(this,n("4362"))},"0983":function(e,t,n){var i=n("c901");e.exports=function(e){return Object(i(e))}},"0ae2":function(e,t,n){var i=n("9876"),r=n("fed5"),s=n("1917");e.exports=function(e){var t=i(e),n=r.f;if(n){var o,a=n(e),l=s.f,c=0;while(a.length>c)l.call(e,o=a[c++])&&t.push(o)}return t}},"0b99":function(e,t,n){"use strict";var i=n("19fa")(!0);n("393a")(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=i(t,n),this._i+=e.length,{value:e,done:!1})}))},"0bad":function(e,t,n){e.exports=!n("4b8b")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},"0cfb":function(e,t,n){var i=n("83ab"),r=n("d039"),s=n("cc12");e.exports=!i&&!r((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(e,t,n){var i=n("da84"),r=i.String;e.exports=function(e){try{return r(e)}catch(t){return"Object"}}},"0e15":function(e,t,n){var i=n("597f");e.exports=function(e,t,n){return void 0===n?i(e,t,!1):i(e,n,!1!==t)}},1098:function(e,t,n){"use strict";t.__esModule=!0;var i=n("17ed"),r=l(i),s=n("f893"),o=l(s),a="function"===typeof o.default&&"symbol"===typeof r.default?function(e){return typeof e}:function(e){return e&&"function"===typeof o.default&&e.constructor===o.default&&e!==o.default.prototype?"symbol":typeof e};function l(e){return e&&e.__esModule?e:{default:e}}t.default="function"===typeof o.default&&"symbol"===a(r.default)?function(e){return"undefined"===typeof e?"undefined":a(e)}:function(e){return e&&"function"===typeof o.default&&e.constructor===o.default&&e!==o.default.prototype?"symbol":"undefined"===typeof e?"undefined":a(e)}},"10db":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"12f2":function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){return{methods:{focus:function(){this.$refs[e].focus()}}}}},"14e9":function(e,t,n){e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=132)}({132:function(e,t,n){"use strict";n.r(t);var i=n(16),r=n(38),s=n.n(r),o=n(3),a=n(2),l={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}};function c(e){var t=e.move,n=e.size,i=e.bar,r={},s="translate"+i.axis+"("+t+"%)";return r[i.size]=n,r.transform=s,r.msTransform=s,r.webkitTransform=s,r}var u={name:"Bar",props:{vertical:Boolean,size:String,move:Number},computed:{bar:function(){return l[this.vertical?"vertical":"horizontal"]},wrap:function(){return this.$parent.wrap}},render:function(e){var t=this.size,n=this.move,i=this.bar;return e("div",{class:["el-scrollbar__bar","is-"+i.key],on:{mousedown:this.clickTrackHandler}},[e("div",{ref:"thumb",class:"el-scrollbar__thumb",on:{mousedown:this.clickThumbHandler},style:c({size:t,move:n,bar:i})})])},methods:{clickThumbHandler:function(e){e.ctrlKey||2===e.button||(this.startDrag(e),this[this.bar.axis]=e.currentTarget[this.bar.offset]-(e[this.bar.client]-e.currentTarget.getBoundingClientRect()[this.bar.direction]))},clickTrackHandler:function(e){var t=Math.abs(e.target.getBoundingClientRect()[this.bar.direction]-e[this.bar.client]),n=this.$refs.thumb[this.bar.offset]/2,i=100*(t-n)/this.$el[this.bar.offset];this.wrap[this.bar.scroll]=i*this.wrap[this.bar.scrollSize]/100},startDrag:function(e){e.stopImmediatePropagation(),this.cursorDown=!0,Object(a["on"])(document,"mousemove",this.mouseMoveDocumentHandler),Object(a["on"])(document,"mouseup",this.mouseUpDocumentHandler),document.onselectstart=function(){return!1}},mouseMoveDocumentHandler:function(e){if(!1!==this.cursorDown){var t=this[this.bar.axis];if(t){var n=-1*(this.$el.getBoundingClientRect()[this.bar.direction]-e[this.bar.client]),i=this.$refs.thumb[this.bar.offset]-t,r=100*(n-i)/this.$el[this.bar.offset];this.wrap[this.bar.scroll]=r*this.wrap[this.bar.scrollSize]/100}}},mouseUpDocumentHandler:function(e){this.cursorDown=!1,this[this.bar.axis]=0,Object(a["off"])(document,"mousemove",this.mouseMoveDocumentHandler),document.onselectstart=null}},destroyed:function(){Object(a["off"])(document,"mouseup",this.mouseUpDocumentHandler)}},h={name:"ElScrollbar",components:{Bar:u},props:{native:Boolean,wrapStyle:{},wrapClass:{},viewClass:{},viewStyle:{},noresize:Boolean,tag:{type:String,default:"div"}},data:function(){return{sizeWidth:"0",sizeHeight:"0",moveX:0,moveY:0}},computed:{wrap:function(){return this.$refs.wrap}},render:function(e){var t=s()(),n=this.wrapStyle;if(t){var i="-"+t+"px",r="margin-bottom: "+i+"; margin-right: "+i+";";Array.isArray(this.wrapStyle)?(n=Object(o["toObject"])(this.wrapStyle),n.marginRight=n.marginBottom=i):"string"===typeof this.wrapStyle?n+=r:n=r}var a=e(this.tag,{class:["el-scrollbar__view",this.viewClass],style:this.viewStyle,ref:"resize"},this.$slots.default),l=e("div",{ref:"wrap",style:n,on:{scroll:this.handleScroll},class:[this.wrapClass,"el-scrollbar__wrap",t?"":"el-scrollbar__wrap--hidden-default"]},[[a]]),c=void 0;return c=this.native?[e("div",{ref:"wrap",class:[this.wrapClass,"el-scrollbar__wrap"],style:n},[[a]])]:[l,e(u,{attrs:{move:this.moveX,size:this.sizeWidth}}),e(u,{attrs:{vertical:!0,move:this.moveY,size:this.sizeHeight}})],e("div",{class:"el-scrollbar"},c)},methods:{handleScroll:function(){var e=this.wrap;this.moveY=100*e.scrollTop/e.clientHeight,this.moveX=100*e.scrollLeft/e.clientWidth},update:function(){var e=void 0,t=void 0,n=this.wrap;n&&(e=100*n.clientHeight/n.scrollHeight,t=100*n.clientWidth/n.scrollWidth,this.sizeHeight=e<100?e+"%":"",this.sizeWidth=t<100?t+"%":"")}},mounted:function(){this.native||(this.$nextTick(this.update),!this.noresize&&Object(i["addResizeListener"])(this.$refs.resize,this.update))},beforeDestroy:function(){this.native||!this.noresize&&Object(i["removeResizeListener"])(this.$refs.resize,this.update)},install:function(e){e.component(h.name,h)}};t["default"]=h},16:function(e,t){e.exports=n("4010")},2:function(e,t){e.exports=n("5924")},3:function(e,t){e.exports=n("8122")},38:function(e,t){e.exports=n("e62d")}})},1609:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},1626:function(e,t){e.exports=function(e){return"function"==typeof e}},"17ed":function(e,t,n){e.exports={default:n("511f"),__esModule:!0}},1836:function(e,t,n){var i=n("6ca1"),r=n("6438").f,s={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(e){try{return r(e)}catch(t){return o.slice()}};e.exports.f=function(e){return o&&"[object Window]"==s.call(e)?a(e):r(i(e))}},1862:function(e,t,n){"use strict";var i=n("7ded"),r=n("0829"),s=n("1fd5"),o=n("22e5");const a="@firebase/firestore-compat",l="0.1.7";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new r["g"]("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(){if("undefined"===typeof Uint8Array)throw new r["g"]("unimplemented","Uint8Arrays are not available in this environment.")}function h(){if(!Object(r["r"])())throw new r["g"]("unimplemented","Blobs are unavailable in Firestore in this environment.")}class d{constructor(e){this._delegate=e}static fromBase64String(e){return h(),new d(r["b"].fromBase64String(e))}static fromUint8Array(e){return u(),new d(r["b"].fromUint8Array(e))}toBase64(){return h(),this._delegate.toBase64()}toUint8Array(){return u(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e){return p(e,["next","error","complete"])}function p(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const i of t)if(i in n&&"function"===typeof n[i])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{enableIndexedDbPersistence(e,t){return Object(r["F"])(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Object(r["G"])(e._delegate)}clearIndexedDbPersistence(e){return Object(r["x"])(e._delegate)}}class g{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof r["m"]||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Object(r["s"])("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){Object(r["A"])(this._delegate,e,t,n)}enableNetwork(){return Object(r["H"])(this._delegate)}disableNetwork(){return Object(r["D"])(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,Object(r["t"])("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Object(r["lb"])(this._delegate)}onSnapshotsInSync(e){return Object(r["Y"])(this._delegate,e)}get app(){if(!this._appCompat)throw new r["g"]("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new N(this,Object(r["y"])(this._delegate,e))}catch(t){throw x(t,"collection()","Firestore.collection()")}}doc(e){try{return new C(this,Object(r["E"])(this._delegate,e))}catch(t){throw x(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new O(this,Object(r["z"])(this._delegate,e))}catch(t){throw x(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Object(r["db"])(this._delegate,t=>e(new b(this,t)))}batch(){return Object(r["K"])(this._delegate),new _(new r["l"](this._delegate,e=>Object(r["L"])(this._delegate,e)))}loadBundle(e){return Object(r["V"])(this._delegate,e)}namedQuery(e){return Object(r["W"])(this._delegate,e).then(e=>e?new O(this,e):null)}}class v extends r["a"]{constructor(e){super(),this.firestore=e}convertBytes(e){return new d(new r["b"](e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return C.forKey(t,this.firestore,null)}}function y(e){Object(r["gb"])(e)}class b{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new v(e)}get(e){const t=P(e);return this._delegate.get(t).then(e=>new E(this._firestore,new r["e"](this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter)))}set(e,t,n){const i=P(e);return n?(c("Transaction.set",n),this._delegate.set(i,t,n)):this._delegate.set(i,t),this}update(e,t,n,...i){const r=P(e);return 2===arguments.length?this._delegate.update(r,t):this._delegate.update(r,t,n,...i),this}delete(e){const t=P(e);return this._delegate.delete(t),this}}class _{constructor(e){this._delegate=e}set(e,t,n){const i=P(e);return n?(c("WriteBatch.set",n),this._delegate.set(i,t,n)):this._delegate.set(i,t),this}update(e,t,n,...i){const r=P(e);return 2===arguments.length?this._delegate.update(r,t):this._delegate.update(r,t,n,...i),this}delete(e){const t=P(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class w{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new r["i"](this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new T(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=w.INSTANCES;let i=n.get(e);i||(i=new WeakMap,n.set(e,i));let r=i.get(t);return r||(r=new w(e,new v(e),t),i.set(t,r)),r}}w.INSTANCES=new WeakMap;class C{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new v(e)}static forPath(e,t,n){if(e.length%2!==0)throw new r["g"]("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new C(t,new r["d"](t._delegate,n,new r["n"](e)))}static forKey(e,t,n){return new C(t,new r["d"](t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new N(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new N(this.firestore,Object(r["y"])(this._delegate,e))}catch(t){throw x(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Object(s["r"])(e),e instanceof r["d"]&&Object(r["cb"])(this._delegate,e)}set(e,t){t=c("DocumentReference.set",t);try{return t?Object(r["fb"])(this._delegate,e,t):Object(r["fb"])(this._delegate,e)}catch(n){throw x(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?Object(r["kb"])(this._delegate,e):Object(r["kb"])(this._delegate,e,t,...n)}catch(i){throw x(i,"updateDoc()","DocumentReference.update()")}}delete(){return Object(r["B"])(this._delegate)}onSnapshot(...e){const t=k(e),n=S(e,e=>new E(this.firestore,new r["e"](this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)));return Object(r["X"])(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Object(r["N"])(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Object(r["O"])(this._delegate):Object(r["M"])(this._delegate),t.then(e=>new E(this.firestore,new r["e"](this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)))}withConverter(e){return new C(this.firestore,e?this._delegate.withConverter(w.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function x(e,t,n){return e.message=e.message.replace(t,n),e}function k(e){for(const t of e)if("object"===typeof t&&!f(t))return t;return{}}function S(e,t){var n,i;let r;return r=f(e[0])?e[0]:f(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{r.next&&r.next(t(e))},error:null===(n=r.error)||void 0===n?void 0:n.bind(r),complete:null===(i=r.complete)||void 0===i?void 0:i.bind(r)}}class E{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new C(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Object(r["hb"])(this._delegate,e._delegate)}}class T extends E{data(e){const t=this._delegate.data(e);return Object(r["q"])(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class O{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new v(e)}where(e,t,n){try{return new O(this.firestore,Object(r["ab"])(this._delegate,Object(r["mb"])(e,t,n)))}catch(i){throw x(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new O(this.firestore,Object(r["ab"])(this._delegate,Object(r["Z"])(e,t)))}catch(n){throw x(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new O(this.firestore,Object(r["ab"])(this._delegate,Object(r["T"])(e)))}catch(t){throw x(t,"limit()","Query.limit()")}}limitToLast(e){try{return new O(this.firestore,Object(r["ab"])(this._delegate,Object(r["U"])(e)))}catch(t){throw x(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new O(this.firestore,Object(r["ab"])(this._delegate,Object(r["jb"])(...e)))}catch(t){throw x(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new O(this.firestore,Object(r["ab"])(this._delegate,Object(r["ib"])(...e)))}catch(t){throw x(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new O(this.firestore,Object(r["ab"])(this._delegate,Object(r["J"])(...e)))}catch(t){throw x(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new O(this.firestore,Object(r["ab"])(this._delegate,Object(r["I"])(...e)))}catch(t){throw x(t,"endAt()","Query.endAt()")}}isEqual(e){return Object(r["bb"])(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Object(r["Q"])(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Object(r["R"])(this._delegate):Object(r["P"])(this._delegate),t.then(e=>new D(this.firestore,new r["j"](this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)))}onSnapshot(...e){const t=k(e),n=S(e,e=>new D(this.firestore,new r["j"](this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)));return Object(r["X"])(this._delegate,t,n)}withConverter(e){return new O(this.firestore,e?this._delegate.withConverter(w.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class I{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new T(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class D{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new O(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new T(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(e=>new I(this._firestore,e))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new T(this._firestore,n))})}isEqual(e){return Object(r["hb"])(this._delegate,e._delegate)}}class N extends O{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new C(this.firestore,e):null}doc(e){try{return new C(this.firestore,void 0===e?Object(r["E"])(this._delegate):Object(r["E"])(this._delegate,e))}catch(t){throw x(t,"doc()","CollectionReference.doc()")}}add(e){return Object(r["u"])(this._delegate,e).then(e=>new C(this.firestore,e))}isEqual(e){return Object(r["cb"])(this._delegate,e._delegate)}withConverter(e){return new N(this.firestore,e?this._delegate.withConverter(w.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function P(e){return Object(r["p"])(e,r["d"])}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(...e){this._delegate=new r["f"](...e)}static documentId(){return new A(r["o"].keyField().canonicalString())}isEqual(e){return e=Object(s["r"])(e),e instanceof r["f"]&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this._delegate=e}static serverTimestamp(){const e=Object(r["eb"])();return e._methodName="FieldValue.serverTimestamp",new j(e)}static delete(){const e=Object(r["C"])();return e._methodName="FieldValue.delete",new j(e)}static arrayUnion(...e){const t=Object(r["w"])(...e);return t._methodName="FieldValue.arrayUnion",new j(t)}static arrayRemove(...e){const t=Object(r["v"])(...e);return t._methodName="FieldValue.arrayRemove",new j(t)}static increment(e){const t=Object(r["S"])(e);return t._methodName="FieldValue.increment",new j(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={Firestore:g,GeoPoint:r["h"],Timestamp:r["k"],Blob:d,Transaction:b,WriteBatch:_,DocumentReference:C,DocumentSnapshot:E,Query:O,QueryDocumentSnapshot:T,QuerySnapshot:D,CollectionReference:N,FieldPath:A,FieldValue:j,setLogLevel:y,CACHE_SIZE_UNLIMITED:r["c"]};function $(e,t){e.INTERNAL.registerComponent(new o["a"]("firestore-compat",e=>{const n=e.getProvider("app-compat").getImmediate(),i=e.getProvider("firestore").getImmediate();return t(n,i)},"PUBLIC").setServiceProps(Object.assign({},M)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e){$(e,(e,t)=>new g(e,t,new m)),e.registerVersion(a,l)}R(i["a"])},1917:function(e,t){t.f={}.propertyIsEnumerable},"19aa":function(e,t,n){var i=n("da84"),r=n("3a9b"),s=i.TypeError;e.exports=function(e,t){if(r(t,e))return e;throw s("Incorrect invocation")}},"19fa":function(e,t,n){var i=n("fc5e"),r=n("c901");e.exports=function(e){return function(t,n){var s,o,a=String(r(t)),l=i(n),c=a.length;return l<0||l>=c?e?"":void 0:(s=a.charCodeAt(l),s<55296||s>56319||l+1===c||(o=a.charCodeAt(l+1))<56320||o>57343?e?a.charAt(l):s:e?a.slice(l,l+2):o-56320+(s-55296<<10)+65536)}}},"1a14":function(e,t,n){var i=n("77e9"),r=n("faf5"),s=n("3397"),o=Object.defineProperty;t.f=n("0bad")?Object.defineProperty:function(e,t,n){if(i(e),t=s(t,!0),i(n),r)try{return o(e,t,n)}catch(a){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},"1a2d":function(e,t,n){var i=n("e330"),r=n("7b0b"),s=i({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(r(e),t)}},"1be4":function(e,t,n){var i=n("d066");e.exports=i("document","documentElement")},"1c7e":function(e,t,n){var i=n("b622"),r=i("iterator"),s=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){s=!0}};a[r]=function(){return this},Array.from(a,(function(){throw 2}))}catch(l){}e.exports=function(e,t){if(!t&&!s)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},e(i)}catch(l){}return n}},"1cdc":function(e,t,n){var i=n("342f");e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(i)},"1d80":function(e,t,n){var i=n("da84"),r=i.TypeError;e.exports=function(e){if(void 0==e)throw r("Can't call method on "+e);return e}},"1f5a":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return Le})),n.d(t,"c",(function(){return ct})),n.d(t,"d",(function(){return ft})),n.d(t,"e",(function(){return mt})),n.d(t,"f",(function(){return pt})),n.d(t,"g",(function(){return Ze})),n.d(t,"h",(function(){return dt})),n.d(t,"i",(function(){return Pi})),n.d(t,"j",(function(){return Wr})),n.d(t,"k",(function(){return l})),n.d(t,"l",(function(){return ki})),n.d(t,"m",(function(){return vt})),n.d(t,"n",(function(){return bt})),n.d(t,"o",(function(){return _t})),n.d(t,"p",(function(){return C})),n.d(t,"q",(function(){return Ne})),n.d(t,"r",(function(){return v})),n.d(t,"s",(function(){return Mn})),n.d(t,"t",(function(){return E})),n.d(t,"u",(function(){return sr})),n.d(t,"v",(function(){return fe})),n.d(t,"x",(function(){return qt})),n.d(t,"y",(function(){return Dn})),n.d(t,"z",(function(){return qr})),n.d(t,"A",(function(){return Pn})),n.d(t,"B",(function(){return Ut})),n.d(t,"C",(function(){return zt})),n.d(t,"D",(function(){return Ae})),n.d(t,"F",(function(){return Wt})),n.d(t,"G",(function(){return d})),n.d(t,"H",(function(){return Jt})),n.d(t,"I",(function(){return pn})),n.d(t,"J",(function(){return vn})),n.d(t,"K",(function(){return rr})),n.d(t,"L",(function(){return de})),n.d(t,"M",(function(){return ii})),n.d(t,"N",(function(){return Yt})),n.d(t,"O",(function(){return jt})),n.d(t,"P",(function(){return Oi})),n.d(t,"Q",(function(){return zi})),n.d(t,"R",(function(){return nr})),n.d(t,"S",(function(){return xn})),n.d(t,"T",(function(){return Mt})),n.d(t,"U",(function(){return Ii})),n.d(t,"V",(function(){return Bi})),n.d(t,"W",(function(){return er})),n.d(t,"X",(function(){return Zt})),n.d(t,"Y",(function(){return Bt})),n.d(t,"Z",(function(){return Gt})),n.d(t,"ab",(function(){return kt})),n.d(t,"bb",(function(){return At})),n.d(t,"cb",(function(){return Rt})),n.d(t,"db",(function(){return Kt})),n.d(t,"eb",(function(){return Qt})),n.d(t,"fb",(function(){return Ti})),n.d(t,"gb",(function(){return Vi})),n.d(t,"hb",(function(){return Ji})),n.d(t,"ib",(function(){return Ot})),n.d(t,"jb",(function(){return rn})),n.d(t,"kb",(function(){return sn})),n.d(t,"lb",(function(){return Ni})),n.d(t,"mb",(function(){return nn})),n.d(t,"nb",(function(){return en})),n.d(t,"ob",(function(){return Ht})),n.d(t,"w",(function(){return xs})),n.d(t,"E",(function(){return ws}));var i=n("1fd5"),r=n("589b");function s(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;var o=n("e691"),a=n("22e5");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const l={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},c={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function h(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d=u,f=h,p=new i["b"]("auth","Firebase",h()),m=new o["b"]("@firebase/auth");function g(e,...t){m.logLevel<=o["a"].ERROR&&m.error(`Auth (${r["SDK_VERSION"]}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e,...t){throw w(e,...t)}function y(e,...t){return w(e,...t)}function b(e,t,n){const r=Object.assign(Object.assign({},f()),{[t]:n}),s=new i["b"]("auth","Firebase",r);return s.create(t,{appName:e.name})}function _(e,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&v(e,"argument-error"),b(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function w(e,...t){if("string"!==typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return p.create(e,...t)}function C(e,t,...n){if(!e)throw w(t,...n)}function x(e){const t="INTERNAL ASSERTION FAILED: "+e;throw g(t),new Error(t)}function k(e,t){e||x(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=new Map;function E(e){k(e instanceof Function,"Expected a class definition");let t=S.get(e);return t?(k(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,S.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(E);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function I(){return"http:"===D()||"https:"===D()}function D(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(I()||Object(i["v"])()||"connection"in navigator))||navigator.onLine}function P(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e,t){this.shortDelay=e,this.longDelay=t,k(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(i["A"])()||Object(i["D"])()}get(){return N()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e,t){k(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void x("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void x("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void x("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},R=new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function F(e,t,n,r,s={}){return V(e,s,()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=Object(i["J"])(Object.assign({key:e.config.apiKey},o)).slice(1),l=new(M.headers());return l.set("Content-Type","application/json"),l.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&l.set("X-Firebase-Locale",e.languageCode),M.fetch()(z(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function V(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},$),t);try{const t=new q(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw U(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw U(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw U(e,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw b(e,a,o);v(e,a)}}catch(s){if(s instanceof i["c"])throw s;v(e,"network-request-failed")}}async function B(e,t,n,i,r={}){const s=await F(e,t,n,i,r);return"mfaPendingCredential"in s&&v(e,"multi-factor-auth-required",{_serverResponse:s}),s}function z(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?j(e.config,r):`${e.config.apiScheme}://${r}`}class q{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(y(this.auth,"timeout")),R.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function U(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=y(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t){return F(e,"POST","/v1/accounts:delete",t)}async function W(e,t){return F(e,"POST","/v1/accounts:update",t)}async function K(e,t){return F(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e,t=!1){const n=Object(i["r"])(e),r=await n.getIdToken(t),s=X(r);C(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:G(Q(s.auth_time)),issuedAtTime:G(Q(s.iat)),expirationTime:G(Q(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function Q(e){return 1e3*Number(e)}function X(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return g("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(i["h"])(n);return e?JSON.parse(e):(g("Failed to decode base64 JWT payload"),null)}catch(s){return g("Caught error parsing JWT payload as JSON",s),null}}function J(e){const t=X(e);return C(t,"internal-error"),C("undefined"!==typeof t.exp,"internal-error"),C("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i["c"]&&ee(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function ee({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=G(this.lastLoginAt),this.creationTime=G(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(e){var t;const n=e.auth,i=await e.getIdToken(),r=await Z(e,K(n,{idToken:i}));C(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?oe(s.providerUserInfo):[],a=se(e.providerData,o),l=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!l&&c,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ne(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function re(e){const t=Object(i["r"])(e);await ie(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function se(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function oe(e){return e.map(e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ae(e,t){const n=await V(e,{},()=>{const n=Object(i["J"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=z(e,r,"/v1/token","key="+s);return M.fetch()(o,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){C(e.idToken,"internal-error"),C("undefined"!==typeof e.idToken,"internal-error"),C("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):J(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return C(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await ae(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new le;return n&&(C("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(C("string"===typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(C("number"===typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new le,this.toJSON())}_performRefresh(){return x("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t){C("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ue{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new te(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.metadata=new ne(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Z(this,this.stsTokenManager.getToken(this.auth,e));return C(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Y(this,e)}reload(){return re(this)}_assign(e){this!==e&&(C(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ue(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ie(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Z(this,H(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:b,isAnonymous:_,providerData:w,stsTokenManager:x}=t;C(y&&x,e,"internal-error");const k=le.fromJSON(this.name,x);C("string"===typeof y,e,"internal-error"),ce(u,e.name),ce(h,e.name),C("boolean"===typeof b,e,"internal-error"),C("boolean"===typeof _,e,"internal-error"),ce(d,e.name),ce(f,e.name),ce(p,e.name),ce(m,e.name),ce(g,e.name),ce(v,e.name);const S=new ue({uid:y,auth:e,email:h,emailVerified:b,displayName:u,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:k,createdAt:g,lastLoginAt:v});return w&&Array.isArray(w)&&(S.providerData=w.map(e=>Object.assign({},e))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const i=new le;i.updateFromServerResponse(t);const r=new ue({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await ie(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}he.type="NONE";const de=he;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e,t,n){return`firebase:${e}:${t}:${n}`}class pe{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=fe(this.userKey,i.apiKey,r),this.fullPersistenceKey=fe("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ue._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new pe(E(de),e,n);const i=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let r=i[0]||E(de);const s=fe(n,e.config.apiKey,e.name);let o=null;for(const c of t)try{const t=await c._get(s);if(t){const n=ue._fromJSON(e,t);c!==r&&(o=n),r=c;break}}catch(l){}const a=i.filter(e=>e._shouldAllowMigration);return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==r)try{await e._remove(s)}catch(l){}})),new pe(r,e,n)):new pe(r,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(be(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ge(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(we(t))return"Blackberry";if(Ce(t))return"Webos";if(ve(t))return"Safari";if((t.includes("chrome/")||ye(t))&&!t.includes("edge/"))return"Chrome";if(_e(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ge(e=Object(i["s"])()){return/firefox\//i.test(e)}function ve(e=Object(i["s"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ye(e=Object(i["s"])()){return/crios\//i.test(e)}function be(e=Object(i["s"])()){return/iemobile/i.test(e)}function _e(e=Object(i["s"])()){return/android/i.test(e)}function we(e=Object(i["s"])()){return/blackberry/i.test(e)}function Ce(e=Object(i["s"])()){return/webos/i.test(e)}function xe(e=Object(i["s"])()){return/iphone|ipad|ipod/i.test(e)}function ke(e=Object(i["s"])()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Se(e=Object(i["s"])()){var t;return xe(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Ee(){return Object(i["y"])()&&10===document.documentMode}function Te(e=Object(i["s"])()){return xe(e)||_e(e)||Ce(e)||we(e)||/windows phone/i.test(e)||be(e)}function Oe(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e,t=[]){let n;switch(e){case"Browser":n=me(Object(i["s"])());break;case"Worker":n=`${me(Object(i["s"])())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r["SDK_VERSION"]}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pe(this),this.idTokenSubscription=new Pe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=E(t)),this._initializationPromise=this.queue(async()=>{var n,i;this._deleted||(this.persistenceManager=await pe.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);i&&i!==r||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ie(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=P()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(i["r"])(e):null;return t&&C(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&C(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(E(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&E(e)||this._popupRedirectResolver;C(t,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[E(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return C(s,this,"internal-error"),s.then(()=>r(this.currentUser)),"function"===typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ie(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Ne(e){return Object(i["r"])(e)}class Pe{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(i["l"])(e=>this.observer=e)}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ae(e,t,n){const i=Ne(e);C(i._canInitEmulator,i,"emulator-config-failed"),C(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null===n||void 0===n?void 0:n.disableWarnings),s=je(t),{host:o,port:a}=Me(t),l=null===a?"":":"+a;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Re()}function je(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Me(e){const t=je(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:$e(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:$e(t)}}}function $e(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Re(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return x("not implemented")}_getIdTokenResponse(e){return x("not implemented")}_linkToIdToken(e,t){return x("not implemented")}_getReauthenticationResolver(e){return x("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fe(e,t){return F(e,"POST","/v1/accounts:resetPassword",L(e,t))}async function Ve(e,t){return F(e,"POST","/v1/accounts:update",t)}async function Be(e,t){return F(e,"POST","/v1/accounts:update",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ze(e,t){return B(e,"POST","/v1/accounts:signInWithPassword",L(e,t))}async function qe(e,t){return F(e,"POST","/v1/accounts:sendOobCode",L(e,t))}async function Ue(e,t){return qe(e,t)}async function He(e,t){return qe(e,t)}async function We(e,t){return qe(e,t)}async function Ke(e,t){return qe(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ge(e,t){return B(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}async function Ye(e,t){return B(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends Le{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Qe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Qe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ze(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ge(e,{email:this._email,oobCode:this._password});default:v(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ve(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ye(e,{idToken:t,email:this._email,oobCode:this._password});default:v(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xe(e,t){return B(e,"POST","/v1/accounts:signInWithIdp",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="http://localhost";class Ze extends Le{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ze(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):v("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=s(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Ze(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Xe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Xe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xe(e,t)}buildRequest(){const e={requestUri:Je,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(i["J"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(e,t){return F(e,"POST","/v1/accounts:sendVerificationCode",L(e,t))}async function tt(e,t){return B(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t))}async function nt(e,t){const n=await B(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t));if(n.temporaryProof)throw U(e,"account-exists-with-different-credential",n);return n}const it={["USER_NOT_FOUND"]:"user-not-found"};async function rt(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return B(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,n),it)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends Le{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new st({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new st({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return tt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return nt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return rt(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new st({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function at(e){const t=Object(i["K"])(Object(i["q"])(e))["link"],n=t?Object(i["K"])(Object(i["q"])(t))["deep_link_id"]:null,r=Object(i["K"])(Object(i["q"])(e))["deep_link_id"],s=r?Object(i["K"])(Object(i["q"])(r))["link"]:null;return s||r||n||t||e}class lt{constructor(e){var t,n,r,s,o,a;const l=Object(i["K"])(Object(i["q"])(e)),c=null!==(t=l["apiKey"])&&void 0!==t?t:null,u=null!==(n=l["oobCode"])&&void 0!==n?n:null,h=ot(null!==(r=l["mode"])&&void 0!==r?r:null);C(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=null!==(s=l["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=l["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=l["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=at(e);try{return new lt(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ct{constructor(){this.providerId=ct.PROVIDER_ID}static credential(e,t){return Qe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=lt.parseLink(t);return C(n,"argument-error"),Qe._fromEmailAndCode(e,n.code,n.tenantId)}}ct.PROVIDER_ID="password",ct.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ct.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends ut{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class dt extends ht{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return C("providerId"in t&&"signInMethod"in t,"argument-error"),Ze._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return C(e.idToken||e.accessToken,"argument-error"),Ze._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return dt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return dt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:r,nonce:s,providerId:o}=e;if(!n&&!i&&!t&&!r)return null;if(!o)return null;try{return new dt(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:r})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends ht{constructor(){super("facebook.com")}static credential(e){return Ze._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch(t){return null}}}ft.FACEBOOK_SIGN_IN_METHOD="facebook.com",ft.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt extends ht{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ze._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return pt.credential(t,n)}catch(i){return null}}}pt.GOOGLE_SIGN_IN_METHOD="google.com",pt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt extends ht{constructor(){super("github.com")}static credential(e){return Ze._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch(t){return null}}}mt.GITHUB_SIGN_IN_METHOD="github.com",mt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gt="http://localhost";class vt extends Le{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Xe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Xe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xe(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i,pendingToken:r}=t;return n&&i&&r&&n===i?new vt(n,r):null}static _create(e,t){return new vt(e,t)}buildRequest(){return{requestUri:gt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="saml.";class bt extends ut{constructor(e){C(e.startsWith(yt),"argument-error"),super(e)}static credentialFromResult(e){return bt.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return bt.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=vt.fromJSON(e);return C(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return vt._create(n,t)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends ht{constructor(){super("twitter.com")}static credential(e,t){return Ze._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return _t.credential(t,n)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function wt(e,t){return B(e,"POST","/v1/accounts:signUp",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t.TWITTER_SIGN_IN_METHOD="twitter.com",_t.PROVIDER_ID="twitter.com";class Ct{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await ue._fromIdTokenResponse(e,n,i),s=xt(n),o=new Ct({user:r,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=xt(n);return new Ct({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function xt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(e){var t;const n=Ne(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Ct({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await wt(n,{returnSecureToken:!0}),r=await Ct._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(r.user),r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends i["c"]{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,St.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new St(e,t,n,i)}}function Et(e,t,n,i){const r="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return r.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw St._fromErrorAndOperation(e,n,t,i);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(e){return new Set(e.map(({providerId:e})=>e).filter(e=>!!e))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(e,t){const n=Object(i["r"])(e);await Dt(!0,n,t);const{providerUserInfo:r}=await W(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=Tt(r||[]);return n.providerData=n.providerData.filter(e=>s.has(e.providerId)),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function It(e,t,n=!1){const i=await Z(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ct._forOperation(e,"link",i)}async function Dt(e,t,n){await ie(t);const i=Tt(t.providerData),r=!1===e?"provider-already-linked":"no-such-provider";C(i.has(n)===e,t.auth,r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nt(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await Z(e,Et(i,r,t,e),n);C(s.idToken,i,"internal-error");const o=X(s.idToken);C(o,i,"internal-error");const{sub:a}=o;return C(e.uid===a,i,"user-mismatch"),Ct._forOperation(e,r,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&v(i,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(e,t,n=!1){const i="signIn",r=await Et(e,i,t),s=await Ct._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function At(e,t){return Pt(Ne(e),t)}async function jt(e,t){const n=Object(i["r"])(e);return await Dt(!1,n,t.providerId),It(n,t)}async function Mt(e,t){return Nt(Object(i["r"])(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $t(e,t){return B(e,"POST","/v1/accounts:signInWithCustomToken",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(e,t){const n=Ne(e),i=await $t(n,{token:t,returnSecureToken:!0}),r=await Ct._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(r.user),r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Ft._fromServerResponse(e,t):v(e,"internal-error")}}class Ft extends Lt{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Ft(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(e,t,n){var i;C((null===(i=n.url)||void 0===i?void 0:i.length)>0,e,"invalid-continue-uri"),C("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(C(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(C(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bt(e,t,n){const r=Object(i["r"])(e),s={requestType:"PASSWORD_RESET",email:t};n&&Vt(r,s,n),await He(r,s)}async function zt(e,t,n){await Fe(Object(i["r"])(e),{oobCode:t,newPassword:n})}async function qt(e,t){await Be(Object(i["r"])(e),{oobCode:t})}async function Ut(e,t){const n=Object(i["r"])(e),r=await Fe(n,{oobCode:t}),s=r.requestType;switch(C(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":C(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":C(r.mfaInfo,n,"internal-error");default:C(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=Lt._fromServerResponse(Ne(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:o},operation:s}}async function Ht(e,t){const{data:n}=await Ut(Object(i["r"])(e),t);return n.email}async function Wt(e,t,n){const i=Ne(e),r=await wt(i,{returnSecureToken:!0,email:t,password:n}),s=await Ct._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function Kt(e,t,n){return At(Object(i["r"])(e),ct.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gt(e,t,n){const r=Object(i["r"])(e),s={requestType:"EMAIL_SIGNIN",email:t};C(n.handleCodeInApp,r,"argument-error"),n&&Vt(r,s,n),await We(r,s)}function Yt(e,t){const n=lt.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Qt(e,t,n){const r=Object(i["r"])(e),s=ct.credentialWithLink(t,n||O());return C(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),At(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(e,t){return F(e,"POST","/v1/accounts:createAuthUri",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jt(e,t){const n=I()?O():"http://localhost",r={identifier:t,continueUri:n},{signinMethods:s}=await Xt(Object(i["r"])(e),r);return s||[]}async function Zt(e,t){const n=Object(i["r"])(e),r=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:r};t&&Vt(n.auth,s,t);const{email:o}=await Ue(n.auth,s);o!==e.email&&await e.reload()}async function en(e,t,n){const r=Object(i["r"])(e),s=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};n&&Vt(r.auth,o,n);const{email:a}=await Ke(r.auth,o);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tn(e,t){return F(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=Object(i["r"])(e),s=await r.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await Z(r,tn(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const l=r.providerData.find(({providerId:e})=>"password"===e);l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function rn(e,t){return on(Object(i["r"])(e),t,null)}function sn(e,t){return on(Object(i["r"])(e),null,t)}async function on(e,t,n){const{auth:i}=e,r=await e.getIdToken(),s={idToken:r,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await Z(e,Ve(i,s));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(e){var t,n;if(!e)return null;const{providerId:i}=e,r=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!i&&(null===e||void 0===e?void 0:e.idToken)){const i=null===(n=null===(t=X(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(i){const e="anonymous"!==i&&"custom"!==i?i:null;return new ln(s,e)}}if(!i)return null;switch(i){case"facebook.com":return new un(s,r);case"github.com":return new hn(s,r);case"google.com":return new dn(s,r);case"twitter.com":return new fn(s,r,e.screenName||null);case"custom":case"anonymous":return new ln(s,null);default:return new ln(s,i,r)}}class ln{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class cn extends ln{constructor(e,t,n,i){super(e,t,n),this.username=i}}class un extends ln{constructor(e,t){super(e,"facebook.com",t)}}class hn extends cn{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class dn extends ln{constructor(e,t){super(e,"google.com",t)}}class fn extends cn{constructor(e,t,n){super(e,"twitter.com",t,n)}}function pn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:an(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new mn("enroll",e)}static _fromMfaPendingCredential(e){return new mn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return mn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return mn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Ne(e),i=t.customData._serverResponse,r=(i.mfaInfo||[]).map(e=>Lt._fromServerResponse(n,e));C(i.mfaPendingCredential,n,"internal-error");const s=mn._fromMfaPendingCredential(i.mfaPendingCredential);return new gn(s,r,async e=>{const r=await e._process(n,s);delete i.mfaInfo,delete i.mfaPendingCredential;const o=Object.assign(Object.assign({},i),{idToken:r.idToken,refreshToken:r.refreshToken});switch(t.operationType){case"signIn":const e=await Ct._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return C(t.user,n,"internal-error"),Ct._forOperation(t.user,t.operationType,o);default:v(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function vn(e,t){var n;const r=Object(i["r"])(e),s=t;return C(t.customData.operationType,r,"argument-error"),C(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),gn._fromError(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(e,t){return F(e,"POST","/v2/accounts/mfaEnrollment:start",L(e,t))}function bn(e,t){return F(e,"POST","/v2/accounts/mfaEnrollment:finalize",L(e,t))}function _n(e,t){return F(e,"POST","/v2/accounts/mfaEnrollment:withdraw",L(e,t))}class wn{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>Lt._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new wn(e)}async getSession(){return mn._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const n=e,i=await this.getSession(),r=await Z(this.user,n._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken(),i=await Z(this.user,_n(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==t),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(r){if("auth/user-token-expired"!==r.code)throw r}}}const Cn=new WeakMap;function xn(e){const t=Object(i["r"])(e);return Cn.has(t)||Cn.set(t,wn._fromUser(t)),Cn.get(t)}const kn="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(kn,"1"),this.storage.removeItem(kn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(){const e=Object(i["s"])();return ve(e)||xe(e)}const Tn=1e3,On=10;class In extends Sn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=En()&&Oe(),this.fallbackToPolling=Te(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);Ee()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,On):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Tn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}In.type="LOCAL";const Dn=In;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Sn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Nn.type="SESSION";const Pn=Nn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new jn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map(async e=>e(t.origin,r)),a=await An(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mn(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jn.receivers=[];class $n{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise((o,a)=>{const l=Mn("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(){return window}function Ln(e){Rn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(){return"undefined"!==typeof Rn()["WorkerGlobalScope"]&&"function"===typeof Rn()["importScripts"]}async function Vn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Bn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function zn(){return Fn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn="firebaseLocalStorageDb",Un=1,Hn="firebaseLocalStorage",Wn="fbase_key";class Kn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Gn(e,t){return e.transaction([Hn],t?"readwrite":"readonly").objectStore(Hn)}function Yn(){const e=indexedDB.deleteDatabase(qn);return new Kn(e).toPromise()}function Qn(){const e=indexedDB.open(qn,Un);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Hn,{keyPath:Wn})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Hn)?t(n):(n.close(),await Yn(),t(await Qn()))})})}async function Xn(e,t,n){const i=Gn(e,!0).put({[Wn]:t,value:n});return new Kn(i).toPromise()}async function Jn(e,t){const n=Gn(e,!1).get(t),i=await new Kn(n).toPromise();return void 0===i?null:i.value}function Zn(e,t){const n=Gn(e,!0).delete(t);return new Kn(n).toPromise()}const ei=800,ti=3;class ni{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Qn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>ti)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jn._getInstance(zn()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Vn(),!this.activeServiceWorker)return;this.sender=new $n(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Bn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qn();return await Xn(e,kn,"1"),await Zn(e,kn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xn(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Jn(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Zn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Gn(e,!1).getAll();return new Kn(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ei)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ni.type="LOCAL";const ii=ni;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(e,t){return F(e,"POST","/v2/accounts/mfaSignIn:start",L(e,t))}function si(e,t){return F(e,"POST","/v2/accounts/mfaSignIn:finalize",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(e){return(await F(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function li(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=y("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",ai().appendChild(i)})}function ci(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=500,hi=6e4,di=1e12;class fi{constructor(e){this.auth=e,this.counter=di,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new pi(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||di;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||di;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||di;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class pi{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i="string"===typeof e?document.getElementById(e):e;C(i,"argument-error",{appName:t}),this.container=i,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=mi(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()},hi)},ui))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function mi(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<e;i++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=ci("rcb"),vi=new A(3e4,6e4),yi="https://www.google.com/recaptcha/api.js?";class bi{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Rn().grecaptcha}load(e,t=""){return C(_i(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Rn().grecaptcha):new Promise((n,r)=>{const s=Rn().setTimeout(()=>{r(y(e,"network-request-failed"))},vi.get());Rn()[gi]=()=>{Rn().clearTimeout(s),delete Rn()[gi];const i=Rn().grecaptcha;if(!i)return void r(y(e,"internal-error"));const o=i.render;i.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(i)};const o=`${yi}?${Object(i["J"])({onload:gi,render:"explicit",hl:t})}`;li(o).catch(()=>{clearTimeout(s),r(y(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Rn().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function _i(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class wi{async load(e){return new fi(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="recaptcha",xi={theme:"light",type:"image"};class ki{constructor(e,t=Object.assign({},xi),n){this.parameters=t,this.type=Ci,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ne(n),this.isInvisible="invisible"===this.parameters.size,C("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const i="string"===typeof e?document.getElementById(e):e;C(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new wi:new bi,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(n=>{const i=e=>{e&&(this.tokenChangeListeners.delete(i),n(e))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){C(!this.parameters.sitekey,this.auth,"argument-error"),C(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),C("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"===typeof e)e(t);else if("string"===typeof e){const n=Rn()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){C(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){C(I()&&!Fn(),this.auth,"internal-error"),await Si(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await oi(this.auth);C(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return C(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Si(){let e=null;return new Promise(t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()}).catch(t=>{throw e&&window.removeEventListener("load",e),t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=st._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Ti(e,t,n){const r=Ne(e),s=await Di(r,t,Object(i["r"])(n));return new Ei(s,e=>At(r,e))}async function Oi(e,t,n){const r=Object(i["r"])(e);await Dt(!1,r,"phone");const s=await Di(r.auth,t,Object(i["r"])(n));return new Ei(s,e=>jt(r,e))}async function Ii(e,t,n){const r=Object(i["r"])(e),s=await Di(r.auth,t,Object(i["r"])(n));return new Ei(s,e=>Mt(r,e))}async function Di(e,t,n){var i;const r=await n.verify();try{let s;if(C("string"===typeof r,e,"argument-error"),C(n.type===Ci,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){C("enroll"===t.type,e,"internal-error");const n=await yn(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{C("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;C(n,e,"missing-multi-factor-info");const o=await ri(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await et(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}async function Ni(e,t){await It(Object(i["r"])(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e){this.providerId=Pi.PROVIDER_ID,this.auth=Ne(e)}verifyPhoneNumber(e,t){return Di(this.auth,e,Object(i["r"])(t))}static credential(e,t){return st._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Pi.credentialFromTaggedObject(t)}static credentialFromError(e){return Pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?st._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ai(e,t){return t?E(t):(C(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pi.PROVIDER_ID="phone",Pi.PHONE_SIGN_IN_METHOD="phone";class ji extends Le{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Mi(e){return Pt(e.auth,new ji(e),e.bypassAuthState)}function $i(e){const{auth:t,user:n}=e;return C(n,t,"internal-error"),Nt(n,new ji(e),e.bypassAuthState)}async function Ri(e){const{auth:t,user:n}=e;return C(n,t,"internal-error"),It(n,new ji(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mi;case"linkViaPopup":case"linkViaRedirect":return Ri;case"reauthViaPopup":case"reauthViaRedirect":return $i;default:v(this.auth,"internal-error")}}resolve(e){k(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){k(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=new A(2e3,1e4);async function Vi(e,t,n){const i=Ne(e);_(e,t,ut);const r=Ai(i,n),s=new qi(i,"signInViaPopup",t,r);return s.executeNotNull()}async function Bi(e,t,n){const r=Object(i["r"])(e);_(r.auth,t,ut);const s=Ai(r.auth,n),o=new qi(r.auth,"reauthViaPopup",t,s,r);return o.executeNotNull()}async function zi(e,t,n){const r=Object(i["r"])(e);_(r.auth,t,ut);const s=Ai(r.auth,n),o=new qi(r.auth,"linkViaPopup",t,s,r);return o.executeNotNull()}class qi extends Li{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,qi.currentPopupAction&&qi.currentPopupAction.cancel(),qi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return C(e,this.auth,"internal-error"),e}async onExecution(){k(1===this.filter.length,"Popup operations only handle one event");const e=Mn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(y(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(y(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(y(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,Fi.get())};e()}}qi.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ui="pendingRedirect",Hi=new Map;class Wi extends Li{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Hi.get(this.auth._key());if(!e){try{const t=await Ki(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Hi.set(this.auth._key(),e)}return this.bypassAuthState||Hi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Ki(e,t){const n=Xi(t),i=Qi(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}async function Gi(e,t){return Qi(e)._set(Xi(t),"true")}function Yi(){Hi.clear()}function Qi(e){return E(e._redirectPersistence)}function Xi(e){return fe(Ui,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(e,t,n){return Zi(e,t,n)}async function Zi(e,t,n){const i=Ne(e);_(e,t,ut);const r=Ai(i,n);return await Gi(r,i),r._openRedirect(i,t,"signInViaRedirect")}function er(e,t,n){return tr(e,t,n)}async function tr(e,t,n){const r=Object(i["r"])(e);_(r.auth,t,ut);const s=Ai(r.auth,n);await Gi(s,r.auth);const o=await or(r);return s._openRedirect(r.auth,t,"reauthViaRedirect",o)}function nr(e,t,n){return ir(e,t,n)}async function ir(e,t,n){const r=Object(i["r"])(e);_(r.auth,t,ut);const s=Ai(r.auth,n);await Dt(!1,r,t.providerId),await Gi(s,r.auth);const o=await or(r);return s._openRedirect(r.auth,t,"linkViaRedirect",o)}async function rr(e,t){return await Ne(e)._initializationPromise,sr(e,t,!1)}async function sr(e,t,n=!1){const i=Ne(e),r=Ai(i,t),s=new Wi(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}async function or(e){const t=Mn(e.uid+":::");return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=6e5;class lr{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hr(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!ur(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(y(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ar&&this.cachedEventUids.clear(),this.cachedEventUids.has(cr(e))}saveEventToCache(e){this.cachedEventUids.add(cr(e)),this.lastProcessedEventTime=Date.now()}}function cr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function ur({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function hr(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ur(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dr(e,t={}){return F(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pr=/^https?/;async function mr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await dr(e);for(const i of t)try{if(gr(i))return}catch(n){}v(e,"unauthorized-domain")}function gr(e){const t=O(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!pr.test(n))return!1;if(fr.test(e))return i===e;const r=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new A(3e4,6e4);function yr(){const e=Rn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function br(e){return new Promise((t,n)=>{var i,r,s;function o(){yr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{yr(),n(y(e,"network-request-failed"))},timeout:vr.get()})}if(null===(r=null===(i=Rn().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Rn().gapi)||void 0===s?void 0:s.load)){const t=ci("iframefcb");return Rn()[t]=()=>{gapi.load?o():n(y(e,"network-request-failed"))},li("https://apis.google.com/js/api.js?onload="+t)}o()}}).catch(e=>{throw _r=null,e})}let _r=null;function wr(e){return _r=_r||br(e),_r}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new A(5e3,15e3),xr="__/auth/iframe",kr="emulator/auth/iframe",Sr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Er=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Tr(e){const t=e.config;C(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?j(t,kr):`https://${e.config.authDomain}/${xr}`,s={apiKey:t.apiKey,appName:e.name,v:r["SDK_VERSION"]},o=Er.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Object(i["J"])(s).slice(1)}`}async function Or(e){const t=await wr(e),n=Rn().gapi;return C(n,e,"internal-error"),t.open({where:document.body,url:Tr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Sr,dontclear:!0},t=>new Promise(async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=y(e,"network-request-failed"),s=Rn().setTimeout(()=>{i(r)},Cr.get());function o(){Rn().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{i(r)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Dr=500,Nr=600,Pr="_blank",Ar="http://localhost";class jr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Mr(e,t,n,r=Dr,s=Nr){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Ir),{width:r.toString(),height:s.toString(),top:o,left:a}),u=Object(i["s"])().toLowerCase();n&&(l=ye(u)?Pr:n),ge(u)&&(t=t||Ar,c.scrollbars="yes");const h=Object.entries(c).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(Se(u)&&"_self"!==l)return $r(t||"",l),new jr(null);const d=window.open(t||"",l,h);C(d,e,"popup-blocked");try{d.focus()}catch(f){}return new jr(d)}function $r(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="__/auth/handler",Lr="emulator/auth/handler";function Fr(e,t,n,s,o,a){C(e.config.authDomain,e,"auth-domain-config-required"),C(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:r["SDK_VERSION"],eventId:o};if(t instanceof ut){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",Object(i["x"])(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))l[e]=t}if(t instanceof ht){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);const c=l;for(const i of Object.keys(c))void 0===c[i]&&delete c[i];return`${Vr(e)}?${Object(i["J"])(c).slice(1)}`}function Vr({config:e}){return e.emulator?j(e,Lr):`https://${e.authDomain}/${Rr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="webStorageSupport";class zr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pn,this._completeRedirectFn=sr}async _openPopup(e,t,n,i){var r;k(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const s=Fr(e,t,n,O(),i);return Mr(e,s,Mn())}async _openRedirect(e,t,n,i){return await this._originValidation(e),Ln(Fr(e,t,n,O(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(k(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await Or(e),n=new lr(e);return t.register("authEvent",t=>{C(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const i=n.onEvent(t.authEvent);return{status:i?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Br,{type:Br},n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[Br];void 0!==r&&t(!!r),v(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Te()||ve()||xe()}}const qr=zr;class Ur{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return x("unexpected MultiFactorSessionType")}}}class Hr extends Ur{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Hr(e)}_finalizeEnroll(e,t,n){return bn(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return si(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Wr{constructor(){}static assertion(e){return Hr._fromCredential(e)}}Wr.FACTOR_ID="phone";var Kr="@firebase/auth",Gr="0.19.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Xr(e){Object(r["_registerComponent"])(new a["a"]("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),{apiKey:r,authDomain:s}=i.options;return(t=>{C(r&&!r.includes(":"),"invalid-api-key",{appName:t.name}),C(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const i={apiKey:r,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ie(e)},o=new De(t,i);return T(o,n),o})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const i=e.getProvider("auth-internal");i.initialize()})),Object(r["_registerComponent"])(new a["a"]("auth-internal",e=>{const t=Ne(e.getProvider("auth").getImmediate());return(e=>new Yr(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(r["registerVersion"])(Kr,Gr,Qr(e)),Object(r["registerVersion"])(Kr,Gr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jr(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xr("Browser");const Zr=2e3;async function es(e,t,n){var i;const{BuildInfo:r}=Jr();k(t.sessionId,"AuthEvent did not contain a session ID");const s=await ss(t.sessionId),o={};return xe()?o["ibi"]=r.packageName:_e()?o["apn"]=r.packageName:v(e,"operation-not-supported-in-this-environment"),r.displayName&&(o["appDisplayName"]=r.displayName),o["sessionId"]=s,Fr(e,n,t.type,void 0,null!==(i=t.eventId)&&void 0!==i?i:void 0,o)}async function ts(e){const{BuildInfo:t}=Jr(),n={};xe()?n.iosBundleId=t.packageName:_e()?n.androidPackageName=t.packageName:v(e,"operation-not-supported-in-this-environment"),await dr(e,n)}function ns(e){const{cordova:t}=Jr();return new Promise(n=>{t.plugins.browsertab.isAvailable(i=>{let r=null;i?t.plugins.browsertab.openUrl(e):r=t.InAppBrowser.open(e,ke()?"_blank":"_system","location=yes"),n(r)})})}async function is(e,t,n){const{cordova:i}=Jr();let r=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var e;s();const t=null===(e=i.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function c(){a||(a=window.setTimeout(()=>{o(y(e,"redirect-cancelled-by-user"))},Zr))}function u(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&c()}t.addPassiveListener(l),document.addEventListener("resume",c,!1),_e()&&document.addEventListener("visibilitychange",u,!1),r=()=>{t.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}})}finally{r()}}function rs(e){var t,n,i,r,s,o,a,l,c,u;const h=Jr();C("function"===typeof(null===(t=null===h||void 0===h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),C("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),C("function"===typeof(null===(s=null===(r=null===(i=null===h||void 0===h?void 0:h.cordova)||void 0===i?void 0:i.plugins)||void 0===r?void 0:r.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),C("function"===typeof(null===(l=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===l?void 0:l.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),C("function"===typeof(null===(u=null===(c=null===h||void 0===h?void 0:h.cordova)||void 0===c?void 0:c.InAppBrowser)||void 0===u?void 0:u.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function ss(e){const t=os(e),n=await crypto.subtle.digest("SHA-256",t),i=Array.from(new Uint8Array(n));return i.map(e=>e.toString(16).padStart(2,"0")).join("")}function os(e){if(k(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=20;class ls extends lr{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function cs(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:fs(),postBody:null,tenantId:e.tenantId,error:y(e,"no-auth-event")}}function us(e,t){return ps()._set(ms(e),t)}async function hs(e){const t=await ps()._get(ms(e));return t&&await ps()._remove(ms(e)),t}function ds(e,t){var n,i;const r=vs(t);if(r.includes("/__/auth/callback")){const t=ys(r),s=t["firebaseError"]?gs(decodeURIComponent(t["firebaseError"])):null,o=null===(i=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===i?void 0:i[1],a=o?y(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:r,postBody:null}}return null}function fs(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<as;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function ps(){return E(Dn)}function ms(e){return fe("authEvent",e.config.apiKey,e.name)}function gs(e){try{return JSON.parse(e)}catch(t){return null}}function vs(e){const t=ys(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,i=ys(n)["link"],r=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=ys(r)["link"];return s||r||i||n||e}function ys(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return Object(i["K"])(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=500;class _s{constructor(){this._redirectPersistence=Pn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=sr}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new ls(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){v(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,i){rs(e);const r=await this._initialize(e);await r.initialized(),r.resetRedirect(),Yi(),await this._originValidation(e);const s=cs(e,n,i);await us(e,s);const o=await es(e,s,t),a=await ns(o);return is(e,r,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ts(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:i,BuildInfo:r}=Jr(),s=setTimeout(async()=>{await hs(e),t.onEvent(Cs())},bs),o=async n=>{clearTimeout(s);const i=await hs(e);let r=null;i&&(null===n||void 0===n?void 0:n["url"])&&(r=ds(i,n["url"])),t.onEvent(r||Cs())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=i,l=r.packageName.toLowerCase()+"://";Jr().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(l)&&o({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const ws=_s;function Cs(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:y("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(e,t){Ne(e)._logFramework(t)}},"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return N})),n.d(t,"c",(function(){return D})),n.d(t,"d",(function(){return G})),n.d(t,"e",(function(){return r})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return h})),n.d(t,"i",(function(){return c})),n.d(t,"j",(function(){return F})),n.d(t,"k",(function(){return g})),n.d(t,"l",(function(){return Y})),n.d(t,"m",(function(){return d})),n.d(t,"n",(function(){return q})),n.d(t,"o",(function(){return f})),n.d(t,"p",(function(){return ee})),n.d(t,"q",(function(){return K})),n.d(t,"r",(function(){return se})),n.d(t,"s",(function(){return v})),n.d(t,"t",(function(){return L})),n.d(t,"u",(function(){return _})),n.d(t,"v",(function(){return w})),n.d(t,"w",(function(){return x})),n.d(t,"x",(function(){return B})),n.d(t,"y",(function(){return k})),n.d(t,"z",(function(){return O})),n.d(t,"A",(function(){return y})),n.d(t,"B",(function(){return b})),n.d(t,"C",(function(){return E})),n.d(t,"D",(function(){return C})),n.d(t,"E",(function(){return T})),n.d(t,"F",(function(){return S})),n.d(t,"G",(function(){return R})),n.d(t,"H",(function(){return j})),n.d(t,"I",(function(){return z})),n.d(t,"J",(function(){return H})),n.d(t,"K",(function(){return W})),n.d(t,"L",(function(){return V})),n.d(t,"M",(function(){return re})),n.d(t,"N",(function(){return ie})),n.d(t,"O",(function(){return M})),n.d(t,"P",(function(){return Z})),n.d(t,"Q",(function(){return te})),n.d(t,"R",(function(){return ne}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},r=function(e,t){if(!e)throw s(t)},s=function(e){return new Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},o=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296===(64512&r)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},a=function(e){const t=[];let n=0,i=0;while(n<e.length){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=e[n++],o=e[n++],a=e[n++],l=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[i++]=String.fromCharCode(55296+(l>>10)),t[i++]=String.fromCharCode(56320+(1023&l))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const t=e[r],s=r+1<e.length,o=s?e[r+1]:0,a=r+2<e.length,l=a?e[r+2]:0,c=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),i.push(n[c],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],s=r<e.length,o=s?n[e.charAt(r)]:0;++r;const a=r<e.length,l=a?n[e.charAt(r)]:64;++r;const c=r<e.length,u=c?n[e.charAt(r)]:64;if(++r,null==t||null==o||null==l||null==u)throw Error();const h=t<<2|o>>4;if(i.push(h),64!==l){const e=o<<4&240|l>>2;if(i.push(e),64!==u){const e=l<<6&192|u;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},c=function(e){const t=o(e);return l.encodeByteArray(t,!0)},u=function(e){return c(e).replace(/\./g,"")},h=function(e){try{return l.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(e){return f(void 0,e)}function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&p(n)&&(e[n]=f(e[n],t[n]));return e}function p(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+i,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[u(JSON.stringify(n)),u(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function y(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(v())}function b(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}function _(){return"object"===typeof self&&self.self===self}function w(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function C(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function x(){return v().indexOf("Electron/")>=0}function k(){const e=v();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function S(){return v().indexOf("MSAppHost/")>=0}function E(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN}function T(){return!b()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function O(){return"object"===typeof indexedDB}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const I="FirebaseError";class D extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=I,Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,N.prototype.create)}}class N{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?P(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new D(i,o,n);return a}}function P(e,t){return e.replace(A,(e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`})}const A=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){return JSON.parse(e)}function M(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=j(h(s[0])||""),n=j(h(s[1])||""),r=s[2],i=n["d"]||{},delete n["d"]}catch(s){}return{header:t,claims:n,data:i,signature:r}},R=function(e){const t=$(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},L=function(e){const t=$(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function V(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function B(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function z(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function q(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(U(n)&&U(s)){if(!q(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function U(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function W(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}}),t}function K(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const e=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(e<<1|e>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(i=l^o&(a^l),r=1518500249):(i=o^a^l,r=1859775393):u<60?(i=o&a|l&(o|a),r=2400959708):(i=o^a^l,r=3395469782);const e=(s<<5|s>>>27)+i+c+r+n[u]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=s,s=e}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;while(i<t){if(0===s)while(i<=n)this.compress_(e,i),i+=this.blockSize;if("string"===typeof e){while(i<t)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else while(i<t)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let i=0;i<5;i++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[i]>>t&255,++n;return e}}function Y(e,t){const n=new Q(e,t);return n.subscribe.bind(n)}class Q{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=X(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=J),void 0===i.error&&(i.error=J),void 0===i.complete&&(i.complete=J);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}}),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function X(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function J(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z=function(e,t,n,i){let r;if(i<t?r="at least "+t:i>n&&(r=0===n?"none":"no more than "+n),r){const t=e+" failed: Was called with "+i+(1===i?" argument.":" arguments.")+" Expects "+r+".";throw new Error(t)}};function ee(e,t){return`${e} failed: ${t} argument `}function te(e,t,n,i){if((!i||n)&&"function"!==typeof n)throw new Error(ee(e,t)+"must be a valid function.")}function ne(e,t,n,i){if((!i||n)&&("object"!==typeof n||null===n))throw new Error(ee(e,t)+"must be a valid context object.")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,r(i<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(i)-56320;s=65536+(t<<10)+n}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},re=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function se(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},2266:function(e,t,n){var i=n("da84"),r=n("0366"),s=n("c65b"),o=n("825a"),a=n("0d51"),l=n("e95a"),c=n("07fa"),u=n("3a9b"),h=n("9a1f"),d=n("35a1"),f=n("2a62"),p=i.TypeError,m=function(e,t){this.stopped=e,this.result=t},g=m.prototype;e.exports=function(e,t,n){var i,v,y,b,_,w,C,x=n&&n.that,k=!(!n||!n.AS_ENTRIES),S=!(!n||!n.IS_ITERATOR),E=!(!n||!n.INTERRUPTED),T=r(t,x),O=function(e){return i&&f(i,"normal",e),new m(!0,e)},I=function(e){return k?(o(e),E?T(e[0],e[1],O):T(e[0],e[1])):E?T(e,O):T(e)};if(S)i=e;else{if(v=d(e),!v)throw p(a(e)+" is not iterable");if(l(v)){for(y=0,b=c(e);b>y;y++)if(_=I(e[y]),_&&u(g,_))return _;return new m(!1)}i=h(e,v)}w=i.next;while(!(C=s(w,i)).done){try{_=I(C.value)}catch(D){f(i,"throw",D)}if("object"==typeof _&&_&&u(g,_))return _}return new m(!1)}},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return o}));var i=n("1fd5");class r{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new i["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(l(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(r);n===e&&s.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function l(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(e,t,n){var i=n("5926"),r=Math.max,s=Math.min;e.exports=function(e,t){var n=i(e);return n<0?r(n+t,0):s(n,t)}},"23e7":function(e,t,n){var i=n("da84"),r=n("06cf").f,s=n("9112"),o=n("6eeb"),a=n("ce4e"),l=n("e893"),c=n("94ca");e.exports=function(e,t){var n,u,h,d,f,p,m=e.target,g=e.global,v=e.stat;if(u=g?i:v?i[m]||a(m,{}):(i[m]||{}).prototype,u)for(h in t){if(f=t[h],e.noTargetGet?(p=r(u,h),d=p&&p.value):d=u[h],n=c(g?h:m+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;l(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(u,h,f,e)}}},"241c":function(e,t,n){var i=n("ca84"),r=n("7839"),s=r.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,s)}},"256a":function(e,t,n){"use strict";n("5994")},2626:function(e,t,n){"use strict";var i=n("d066"),r=n("9bf2"),s=n("b622"),o=n("83ab"),a=s("species");e.exports=function(e){var t=i(e),n=r.f;o&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},"26dd":function(e,t,n){"use strict";var i=n("6f4f"),r=n("10db"),s=n("92f0"),o={};n("051b")(o,n("cc15")("iterator"),(function(){return this})),e.exports=function(e,t,n){e.prototype=i(o,{next:r(1,n)}),s(e,t+" Iterator")}},2877:function(e,t,n){"use strict";function i(e,t,n,i,r,s,o,a){var l,c="function"===typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),o?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=l):r&&(l=a?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,l):[l]}return{exports:e,options:c}}n.d(t,"a",(function(){return i}))},2979:function(e,t,n){"use strict";var i=n("7ded"),r=n("22e5"),s=n("51b0"),o=n("1fd5"),a=n("e691");const l="@firebase/database-compat",c="0.1.4",u=new a["b"]("@firebase/database-compat"),h=function(e){const t="FIREBASE WARNING: "+e;u.warn(t)},d=function(e,t,n,i){if((!i||void 0!==n)&&"boolean"!==typeof n)throw new Error(Object(o["p"])(e,t)+"must be a boolean.")},f=function(e,t,n){if(!n||void 0!==t)switch(t){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(Object(o["p"])(e,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class p{constructor(e){this._delegate=e}cancel(e){Object(o["P"])("OnDisconnect.cancel",0,1,arguments.length),Object(o["Q"])("OnDisconnect.cancel","onComplete",e,!0);const t=this._delegate.cancel();return e&&t.then(()=>e(null),t=>e(t)),t}remove(e){Object(o["P"])("OnDisconnect.remove",0,1,arguments.length),Object(o["Q"])("OnDisconnect.remove","onComplete",e,!0);const t=this._delegate.remove();return e&&t.then(()=>e(null),t=>e(t)),t}set(e,t){Object(o["P"])("OnDisconnect.set",1,2,arguments.length),Object(o["Q"])("OnDisconnect.set","onComplete",t,!0);const n=this._delegate.set(e);return t&&n.then(()=>t(null),e=>t(e)),n}setWithPriority(e,t,n){Object(o["P"])("OnDisconnect.setWithPriority",2,3,arguments.length),Object(o["Q"])("OnDisconnect.setWithPriority","onComplete",n,!0);const i=this._delegate.setWithPriority(e,t);return n&&i.then(()=>n(null),e=>n(e)),i}update(e,t){if(Object(o["P"])("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const t={};for(let n=0;n<e.length;++n)t[""+n]=e[n];e=t,h("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Object(o["Q"])("OnDisconnect.update","onComplete",t,!0);const n=this._delegate.update(e);return t&&n.then(()=>t(null),e=>t(e)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return Object(o["P"])("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(e,t){this._database=e,this._delegate=t}val(){return Object(o["P"])("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return Object(o["P"])("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return Object(o["P"])("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return Object(o["P"])("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return Object(o["P"])("DataSnapshot.child",0,1,arguments.length),e=String(e),Object(s["g"])("DataSnapshot.child","path",e,!1),new g(this._database,this._delegate.child(e))}hasChild(e){return Object(o["P"])("DataSnapshot.hasChild",1,1,arguments.length),Object(s["g"])("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return Object(o["P"])("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return Object(o["P"])("DataSnapshot.forEach",1,1,arguments.length),Object(o["Q"])("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(t=>e(new g(this._database,t)))}hasChildren(){return Object(o["P"])("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return Object(o["P"])("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return Object(o["P"])("DataSnapshot.ref",0,0,arguments.length),new y(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class v{constructor(e,t){this.database=e,this._delegate=t}on(e,t,n,i){var r;Object(o["P"])("Query.on",2,4,arguments.length),Object(o["Q"])("Query.on","callback",t,!1);const a=v.getCancelAndContextArgs_("Query.on",n,i),l=(e,n)=>{t.call(a.context,new g(this.database,e),n)};l.userCallback=t,l.context=a.context;const c=null===(r=a.cancel)||void 0===r?void 0:r.bind(a.context);switch(e){case"value":return Object(s["z"])(this._delegate,l,c),t;case"child_added":return Object(s["v"])(this._delegate,l,c),t;case"child_removed":return Object(s["y"])(this._delegate,l,c),t;case"child_changed":return Object(s["w"])(this._delegate,l,c),t;case"child_moved":return Object(s["x"])(this._delegate,l,c),t;default:throw new Error(Object(o["p"])("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,t,n){if(Object(o["P"])("Query.off",0,3,arguments.length),f("Query.off",e,!0),Object(o["Q"])("Query.off","callback",t,!0),Object(o["R"])("Query.off","context",n,!0),t){const i=()=>{};i.userCallback=t,i.context=n,Object(s["u"])(this._delegate,e,i)}else Object(s["u"])(this._delegate,e)}get(){return Object(s["o"])(this._delegate).then(e=>new g(this.database,e))}once(e,t,n,i){Object(o["P"])("Query.once",1,4,arguments.length),Object(o["Q"])("Query.once","callback",t,!0);const r=v.getCancelAndContextArgs_("Query.once",n,i),a=new o["a"],l=(e,n)=>{const i=new g(this.database,e);t&&t.call(r.context,i,n),a.resolve(i)};l.userCallback=t,l.context=r.context;const c=e=>{r.cancel&&r.cancel.call(r.context,e),a.reject(e)};switch(e){case"value":Object(s["z"])(this._delegate,l,c,{onlyOnce:!0});break;case"child_added":Object(s["v"])(this._delegate,l,c,{onlyOnce:!0});break;case"child_removed":Object(s["y"])(this._delegate,l,c,{onlyOnce:!0});break;case"child_changed":Object(s["w"])(this._delegate,l,c,{onlyOnce:!0});break;case"child_moved":Object(s["x"])(this._delegate,l,c,{onlyOnce:!0});break;default:throw new Error(Object(o["p"])("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return a.promise}limitToFirst(e){return Object(o["P"])("Query.limitToFirst",1,1,arguments.length),new v(this.database,Object(s["F"])(this._delegate,Object(s["s"])(e)))}limitToLast(e){return Object(o["P"])("Query.limitToLast",1,1,arguments.length),new v(this.database,Object(s["F"])(this._delegate,Object(s["t"])(e)))}orderByChild(e){return Object(o["P"])("Query.orderByChild",1,1,arguments.length),new v(this.database,Object(s["F"])(this._delegate,Object(s["A"])(e)))}orderByKey(){return Object(o["P"])("Query.orderByKey",0,0,arguments.length),new v(this.database,Object(s["F"])(this._delegate,Object(s["B"])()))}orderByPriority(){return Object(o["P"])("Query.orderByPriority",0,0,arguments.length),new v(this.database,Object(s["F"])(this._delegate,Object(s["C"])()))}orderByValue(){return Object(o["P"])("Query.orderByValue",0,0,arguments.length),new v(this.database,Object(s["F"])(this._delegate,Object(s["D"])()))}startAt(e=null,t){return Object(o["P"])("Query.startAt",0,2,arguments.length),new v(this.database,Object(s["F"])(this._delegate,Object(s["P"])(e,t)))}startAfter(e=null,t){return Object(o["P"])("Query.startAfter",0,2,arguments.length),new v(this.database,Object(s["F"])(this._delegate,Object(s["O"])(e,t)))}endAt(e=null,t){return Object(o["P"])("Query.endAt",0,2,arguments.length),new v(this.database,Object(s["F"])(this._delegate,Object(s["l"])(e,t)))}endBefore(e=null,t){return Object(o["P"])("Query.endBefore",0,2,arguments.length),new v(this.database,Object(s["F"])(this._delegate,Object(s["m"])(e,t)))}equalTo(e,t){return Object(o["P"])("Query.equalTo",1,2,arguments.length),new v(this.database,Object(s["F"])(this._delegate,Object(s["n"])(e,t)))}toString(){return Object(o["P"])("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return Object(o["P"])("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(Object(o["P"])("Query.isEqual",1,1,arguments.length),!(e instanceof v)){const e="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(e)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,t,n){const i={cancel:void 0,context:void 0};if(t&&n)i.cancel=t,Object(o["Q"])(e,"cancel",i.cancel,!0),i.context=n,Object(o["R"])(e,"context",i.context,!0);else if(t)if("object"===typeof t&&null!==t)i.context=t;else{if("function"!==typeof t)throw new Error(Object(o["p"])(e,"cancelOrContext")+" must either be a cancel callback or a context object.");i.cancel=t}return i}get ref(){return new y(this.database,new s["d"](this._delegate._repo,this._delegate._path))}}class y extends v{constructor(e,t){super(e,new s["b"](t._repo,t._path,new s["c"],!1)),this.database=e,this._delegate=t}getKey(){return Object(o["P"])("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return Object(o["P"])("Reference.child",1,1,arguments.length),"number"===typeof e&&(e=String(e)),new y(this.database,Object(s["i"])(this._delegate,e))}getParent(){Object(o["P"])("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new y(this.database,e):null}getRoot(){return Object(o["P"])("Reference.root",0,0,arguments.length),new y(this.database,this._delegate.root)}set(e,t){Object(o["P"])("Reference.set",1,2,arguments.length),Object(o["Q"])("Reference.set","onComplete",t,!0);const n=Object(s["L"])(this._delegate,e);return t&&n.then(()=>t(null),e=>t(e)),n}update(e,t){if(Object(o["P"])("Reference.update",1,2,arguments.length),Array.isArray(e)){const t={};for(let n=0;n<e.length;++n)t[""+n]=e[n];e=t,h("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Object(s["h"])("Reference.update",this._delegate._path),Object(o["Q"])("Reference.update","onComplete",t,!0);const n=Object(s["Q"])(this._delegate,e);return t&&n.then(()=>t(null),e=>t(e)),n}setWithPriority(e,t,n){Object(o["P"])("Reference.setWithPriority",2,3,arguments.length),Object(o["Q"])("Reference.setWithPriority","onComplete",n,!0);const i=Object(s["N"])(this._delegate,e,t);return n&&i.then(()=>n(null),e=>n(e)),i}remove(e){Object(o["P"])("Reference.remove",0,1,arguments.length),Object(o["Q"])("Reference.remove","onComplete",e,!0);const t=Object(s["I"])(this._delegate);return e&&t.then(()=>e(null),t=>e(t)),t}transaction(e,t,n){Object(o["P"])("Reference.transaction",1,3,arguments.length),Object(o["Q"])("Reference.transaction","transactionUpdate",e,!1),Object(o["Q"])("Reference.transaction","onComplete",t,!0),d("Reference.transaction","applyLocally",n,!0);const i=Object(s["J"])(this._delegate,e,{applyLocally:n}).then(e=>new m(e.committed,new g(this.database,e.snapshot)));return t&&i.then(e=>t(null,e.committed,e.snapshot),e=>t(e,!1,null)),i}setPriority(e,t){Object(o["P"])("Reference.setPriority",1,2,arguments.length),Object(o["Q"])("Reference.setPriority","onComplete",t,!0);const n=Object(s["M"])(this._delegate,e);return t&&n.then(()=>t(null),e=>t(e)),n}push(e,t){Object(o["P"])("Reference.push",0,2,arguments.length),Object(o["Q"])("Reference.push","onComplete",t,!0);const n=Object(s["E"])(this._delegate,e),i=n.then(e=>new y(this.database,e));t&&i.then(()=>t(null),e=>t(e));const r=new y(this.database,n);return r.then=i.then.bind(i),r.catch=i.catch.bind(i,void 0),r}onDisconnect(){return Object(s["h"])("Reference.onDisconnect",this._delegate._path),new p(new s["a"](this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e,t){this._delegate=e,this.app=t,this.INTERNAL={delete:()=>this._delegate._delete()}}useEmulator(e,t,n={}){Object(s["j"])(this._delegate,e,t,n)}ref(e){if(Object(o["P"])("database.ref",0,1,arguments.length),e instanceof y){const t=Object(s["H"])(this._delegate,e.toString());return new y(this,t)}{const t=Object(s["G"])(this._delegate,e);return new y(this,t)}}refFromURL(e){const t="database.refFromURL";Object(o["P"])(t,1,1,arguments.length);const n=Object(s["H"])(this._delegate,e);return new y(this,n)}goOffline(){return Object(o["P"])("database.goOffline",0,0,arguments.length),Object(s["p"])(this._delegate)}goOnline(){return Object(o["P"])("database.goOnline",0,0,arguments.length),Object(s["q"])(this._delegate)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _({app:e,url:t,version:n,customAuthImpl:i,namespace:o,nodeAdmin:a=!1}){Object(s["f"])(n);const l=new r["c"]("auth-internal",new r["b"]("database-standalone"));return l.setComponent(new r["a"]("auth-internal",()=>i,"PRIVATE")),{instance:new b(Object(s["e"])(e,l,void 0,t,a),e),namespace:o}}b.ServerValue={TIMESTAMP:Object(s["K"])(),increment:e=>Object(s["r"])(e)};var w=Object.freeze({__proto__:null,initStandalone:_});
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=b.ServerValue;function x(e){e.INTERNAL.registerComponent(new r["a"]("database-compat",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app-compat").getImmediate(),i=e.getProvider("database").getImmediate({identifier:t});return new b(i,n)},"PUBLIC").setServiceProps({Reference:y,Query:v,Database:b,DataSnapshot:g,enableLogging:s["k"],INTERNAL:w,ServerValue:C}).setMultipleInstances(!0)),e.registerVersion(l,c)}x(i["a"])},"299c":function(e,t,n){e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=140)}({140:function(e,t,n){"use strict";n.r(t);var i=n(5),r=n.n(i),s=n(18),o=n.n(s),a=n(2),l=n(3),c=n(7),u=n.n(c),h={name:"ElTooltip",mixins:[r.a],props:{openDelay:{type:Number,default:0},disabled:Boolean,manual:Boolean,effect:{type:String,default:"dark"},arrowOffset:{type:Number,default:0},popperClass:String,content:String,visibleArrow:{default:!0},transition:{type:String,default:"el-fade-in-linear"},popperOptions:{default:function(){return{boundariesPadding:10,gpuAcceleration:!1}}},enterable:{type:Boolean,default:!0},hideAfter:{type:Number,default:0},tabindex:{type:Number,default:0}},data:function(){return{tooltipId:"el-tooltip-"+Object(l["generateId"])(),timeoutPending:null,focusing:!1}},beforeCreate:function(){var e=this;this.$isServer||(this.popperVM=new u.a({data:{node:""},render:function(e){return this.node}}).$mount(),this.debounceClose=o()(200,(function(){return e.handleClosePopper()})))},render:function(e){var t=this;this.popperVM&&(this.popperVM.node=e("transition",{attrs:{name:this.transition},on:{afterLeave:this.doDestroy}},[e("div",{on:{mouseleave:function(){t.setExpectedState(!1),t.debounceClose()},mouseenter:function(){t.setExpectedState(!0)}},ref:"popper",attrs:{role:"tooltip",id:this.tooltipId,"aria-hidden":this.disabled||!this.showPopper?"true":"false"},directives:[{name:"show",value:!this.disabled&&this.showPopper}],class:["el-tooltip__popper","is-"+this.effect,this.popperClass]},[this.$slots.content||this.content])]));var n=this.getFirstElement();if(!n)return null;var i=n.data=n.data||{};return i.staticClass=this.addTooltipClass(i.staticClass),n},mounted:function(){var e=this;this.referenceElm=this.$el,1===this.$el.nodeType&&(this.$el.setAttribute("aria-describedby",this.tooltipId),this.$el.setAttribute("tabindex",this.tabindex),Object(a["on"])(this.referenceElm,"mouseenter",this.show),Object(a["on"])(this.referenceElm,"mouseleave",this.hide),Object(a["on"])(this.referenceElm,"focus",(function(){if(e.$slots.default&&e.$slots.default.length){var t=e.$slots.default[0].componentInstance;t&&t.focus?t.focus():e.handleFocus()}else e.handleFocus()})),Object(a["on"])(this.referenceElm,"blur",this.handleBlur),Object(a["on"])(this.referenceElm,"click",this.removeFocusing)),this.value&&this.popperVM&&this.popperVM.$nextTick((function(){e.value&&e.updatePopper()}))},watch:{focusing:function(e){e?Object(a["addClass"])(this.referenceElm,"focusing"):Object(a["removeClass"])(this.referenceElm,"focusing")}},methods:{show:function(){this.setExpectedState(!0),this.handleShowPopper()},hide:function(){this.setExpectedState(!1),this.debounceClose()},handleFocus:function(){this.focusing=!0,this.show()},handleBlur:function(){this.focusing=!1,this.hide()},removeFocusing:function(){this.focusing=!1},addTooltipClass:function(e){return e?"el-tooltip "+e.replace("el-tooltip",""):"el-tooltip"},handleShowPopper:function(){var e=this;this.expectedState&&!this.manual&&(clearTimeout(this.timeout),this.timeout=setTimeout((function(){e.showPopper=!0}),this.openDelay),this.hideAfter>0&&(this.timeoutPending=setTimeout((function(){e.showPopper=!1}),this.hideAfter)))},handleClosePopper:function(){this.enterable&&this.expectedState||this.manual||(clearTimeout(this.timeout),this.timeoutPending&&clearTimeout(this.timeoutPending),this.showPopper=!1,this.disabled&&this.doDestroy())},setExpectedState:function(e){!1===e&&clearTimeout(this.timeoutPending),this.expectedState=e},getFirstElement:function(){var e=this.$slots.default;if(!Array.isArray(e))return null;for(var t=null,n=0;n<e.length;n++)e[n]&&e[n].tag&&(t=e[n]);return t}},beforeDestroy:function(){this.popperVM&&this.popperVM.$destroy()},destroyed:function(){var e=this.referenceElm;1===e.nodeType&&(Object(a["off"])(e,"mouseenter",this.show),Object(a["off"])(e,"mouseleave",this.hide),Object(a["off"])(e,"focus",this.handleFocus),Object(a["off"])(e,"blur",this.handleBlur),Object(a["off"])(e,"click",this.removeFocusing))},install:function(e){e.component(h.name,h)}};t["default"]=h},18:function(e,t){e.exports=n("0e15")},2:function(e,t){e.exports=n("5924")},3:function(e,t){e.exports=n("8122")},5:function(e,t){e.exports=n("e974")},7:function(e,t){e.exports=n("2b0e")}})},"2a5e":function(e,t,n){"use strict";t.__esModule=!0,t.default=o;var i=n("2b0e"),r=s(i);function s(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!r.default.prototype.$isServer)if(t){var n=[],i=t.offsetParent;while(i&&e!==i&&e.contains(i))n.push(i),i=i.offsetParent;var s=t.offsetTop+n.reduce((function(e,t){return e+t.offsetTop}),0),o=s+t.offsetHeight,a=e.scrollTop,l=a+e.clientHeight;s<a?e.scrollTop=s:o>l&&(e.scrollTop=o-e.clientHeight)}else e.scrollTop=0}},"2a62":function(e,t,n){var i=n("c65b"),r=n("825a"),s=n("dc4a");e.exports=function(e,t,n){var o,a;r(e);try{if(o=s(e,"return"),!o){if("throw"===t)throw n;return n}o=i(o,e)}catch(l){a=!0,o=l}if("throw"===t)throw n;if(a)throw o;return r(o),n}},"2b0e":function(e,t,n){"use strict";n.r(t),function(e){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function i(e){return void 0===e||null===e}function r(e){return void 0!==e&&null!==e}function s(e){return!0===e}function o(e){return!1===e}function a(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function l(e){return null!==e&&"object"===typeof e}var c=Object.prototype.toString;function u(e){return"[object Object]"===c.call(e)}function h(e){return"[object RegExp]"===c.call(e)}function d(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function f(e){return r(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function p(e){return null==e?"":Array.isArray(e)||u(e)&&e.toString===c?JSON.stringify(e,null,2):String(e)}function m(e){var t=parseFloat(e);return isNaN(t)?e:t}function g(e,t){for(var n=Object.create(null),i=e.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}g("slot,component",!0);var v=g("key,ref,slot,slot-scope,is");function y(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var b=Object.prototype.hasOwnProperty;function _(e,t){return b.call(e,t)}function w(e){var t=Object.create(null);return function(n){var i=t[n];return i||(t[n]=e(n))}}var C=/-(\w)/g,x=w((function(e){return e.replace(C,(function(e,t){return t?t.toUpperCase():""}))})),k=w((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),S=/\B([A-Z])/g,E=w((function(e){return e.replace(S,"-$1").toLowerCase()}));function T(e,t){function n(n){var i=arguments.length;return i?i>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function O(e,t){return e.bind(t)}var I=Function.prototype.bind?O:T;function D(e,t){t=t||0;var n=e.length-t,i=new Array(n);while(n--)i[n]=e[n+t];return i}function N(e,t){for(var n in t)e[n]=t[n];return e}function P(e){for(var t={},n=0;n<e.length;n++)e[n]&&N(t,e[n]);return t}function A(e,t,n){}var j=function(e,t,n){return!1},M=function(e){return e};function $(e,t){if(e===t)return!0;var n=l(e),i=l(t);if(!n||!i)return!n&&!i&&String(e)===String(t);try{var r=Array.isArray(e),s=Array.isArray(t);if(r&&s)return e.length===t.length&&e.every((function(e,n){return $(e,t[n])}));if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(r||s)return!1;var o=Object.keys(e),a=Object.keys(t);return o.length===a.length&&o.every((function(n){return $(e[n],t[n])}))}catch(c){return!1}}function R(e,t){for(var n=0;n<e.length;n++)if($(e[n],t))return n;return-1}function L(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var F="data-server-rendered",V=["component","directive","filter"],B=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],z={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:j,isReservedAttr:j,isUnknownElement:j,getTagNamespace:A,parsePlatformTagName:M,mustUseProp:j,async:!0,_lifecycleHooks:B},q=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function U(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function H(e,t,n,i){Object.defineProperty(e,t,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var W=new RegExp("[^"+q.source+".$_\\d]");function K(e){if(!W.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}var G,Y="__proto__"in{},Q="undefined"!==typeof window,X="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,J=X&&WXEnvironment.platform.toLowerCase(),Z=Q&&window.navigator.userAgent.toLowerCase(),ee=Z&&/msie|trident/.test(Z),te=Z&&Z.indexOf("msie 9.0")>0,ne=Z&&Z.indexOf("edge/")>0,ie=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===J),re=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/)),se={}.watch,oe=!1;if(Q)try{var ae={};Object.defineProperty(ae,"passive",{get:function(){oe=!0}}),window.addEventListener("test-passive",null,ae)}catch(ko){}var le=function(){return void 0===G&&(G=!Q&&!X&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),G},ce=Q&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ue(e){return"function"===typeof e&&/native code/.test(e.toString())}var he,de="undefined"!==typeof Symbol&&ue(Symbol)&&"undefined"!==typeof Reflect&&ue(Reflect.ownKeys);he="undefined"!==typeof Set&&ue(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var fe=A,pe=0,me=function(){this.id=pe++,this.subs=[]};me.prototype.addSub=function(e){this.subs.push(e)},me.prototype.removeSub=function(e){y(this.subs,e)},me.prototype.depend=function(){me.target&&me.target.addDep(this)},me.prototype.notify=function(){var e=this.subs.slice();for(var t=0,n=e.length;t<n;t++)e[t].update()},me.target=null;var ge=[];function ve(e){ge.push(e),me.target=e}function ye(){ge.pop(),me.target=ge[ge.length-1]}var be=function(e,t,n,i,r,s,o,a){this.tag=e,this.data=t,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},_e={child:{configurable:!0}};_e.child.get=function(){return this.componentInstance},Object.defineProperties(be.prototype,_e);var we=function(e){void 0===e&&(e="");var t=new be;return t.text=e,t.isComment=!0,t};function Ce(e){return new be(void 0,void 0,void 0,String(e))}function xe(e){var t=new be(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var ke=Array.prototype,Se=Object.create(ke),Ee=["push","pop","shift","unshift","splice","sort","reverse"];Ee.forEach((function(e){var t=ke[e];H(Se,e,(function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];var r,s=t.apply(this,n),o=this.__ob__;switch(e){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&o.observeArray(r),o.dep.notify(),s}))}));var Te=Object.getOwnPropertyNames(Se),Oe=!0;function Ie(e){Oe=e}var De=function(e){this.value=e,this.dep=new me,this.vmCount=0,H(e,"__ob__",this),Array.isArray(e)?(Y?Ne(e,Se):Pe(e,Se,Te),this.observeArray(e)):this.walk(e)};function Ne(e,t){e.__proto__=t}function Pe(e,t,n){for(var i=0,r=n.length;i<r;i++){var s=n[i];H(e,s,t[s])}}function Ae(e,t){var n;if(l(e)&&!(e instanceof be))return _(e,"__ob__")&&e.__ob__ instanceof De?n=e.__ob__:Oe&&!le()&&(Array.isArray(e)||u(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new De(e)),t&&n&&n.vmCount++,n}function je(e,t,n,i,r){var s=new me,o=Object.getOwnPropertyDescriptor(e,t);if(!o||!1!==o.configurable){var a=o&&o.get,l=o&&o.set;a&&!l||2!==arguments.length||(n=e[t]);var c=!r&&Ae(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=a?a.call(e):n;return me.target&&(s.depend(),c&&(c.dep.depend(),Array.isArray(t)&&Re(t))),t},set:function(t){var i=a?a.call(e):n;t===i||t!==t&&i!==i||a&&!l||(l?l.call(e,t):n=t,c=!r&&Ae(t),s.notify())}})}}function Me(e,t,n){if(Array.isArray(e)&&d(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var i=e.__ob__;return e._isVue||i&&i.vmCount?n:i?(je(i.value,t,n),i.dep.notify(),n):(e[t]=n,n)}function $e(e,t){if(Array.isArray(e)&&d(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||_(e,t)&&(delete e[t],n&&n.dep.notify())}}function Re(e){for(var t=void 0,n=0,i=e.length;n<i;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&Re(t)}De.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)je(e,t[n])},De.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Ae(e[t])};var Le=z.optionMergeStrategies;function Fe(e,t){if(!t)return e;for(var n,i,r,s=de?Reflect.ownKeys(t):Object.keys(t),o=0;o<s.length;o++)n=s[o],"__ob__"!==n&&(i=e[n],r=t[n],_(e,n)?i!==r&&u(i)&&u(r)&&Fe(i,r):Me(e,n,r));return e}function Ve(e,t,n){return n?function(){var i="function"===typeof t?t.call(n,n):t,r="function"===typeof e?e.call(n,n):e;return i?Fe(i,r):r}:t?e?function(){return Fe("function"===typeof t?t.call(this,this):t,"function"===typeof e?e.call(this,this):e)}:t:e}function Be(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?ze(n):n}function ze(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function qe(e,t,n,i){var r=Object.create(e||null);return t?N(r,t):r}Le.data=function(e,t,n){return n?Ve(e,t,n):t&&"function"!==typeof t?e:Ve(e,t)},B.forEach((function(e){Le[e]=Be})),V.forEach((function(e){Le[e+"s"]=qe})),Le.watch=function(e,t,n,i){if(e===se&&(e=void 0),t===se&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var r={};for(var s in N(r,e),t){var o=r[s],a=t[s];o&&!Array.isArray(o)&&(o=[o]),r[s]=o?o.concat(a):Array.isArray(a)?a:[a]}return r},Le.props=Le.methods=Le.inject=Le.computed=function(e,t,n,i){if(!e)return t;var r=Object.create(null);return N(r,e),t&&N(r,t),r},Le.provide=Ve;var Ue=function(e,t){return void 0===t?e:t};function He(e,t){var n=e.props;if(n){var i,r,s,o={};if(Array.isArray(n)){i=n.length;while(i--)r=n[i],"string"===typeof r&&(s=x(r),o[s]={type:null})}else if(u(n))for(var a in n)r=n[a],s=x(a),o[s]=u(r)?r:{type:r};else 0;e.props=o}}function We(e,t){var n=e.inject;if(n){var i=e.inject={};if(Array.isArray(n))for(var r=0;r<n.length;r++)i[n[r]]={from:n[r]};else if(u(n))for(var s in n){var o=n[s];i[s]=u(o)?N({from:s},o):{from:o}}else 0}}function Ke(e){var t=e.directives;if(t)for(var n in t){var i=t[n];"function"===typeof i&&(t[n]={bind:i,update:i})}}function Ge(e,t,n){if("function"===typeof t&&(t=t.options),He(t,n),We(t,n),Ke(t),!t._base&&(t.extends&&(e=Ge(e,t.extends,n)),t.mixins))for(var i=0,r=t.mixins.length;i<r;i++)e=Ge(e,t.mixins[i],n);var s,o={};for(s in e)a(s);for(s in t)_(e,s)||a(s);function a(i){var r=Le[i]||Ue;o[i]=r(e[i],t[i],n,i)}return o}function Ye(e,t,n,i){if("string"===typeof n){var r=e[t];if(_(r,n))return r[n];var s=x(n);if(_(r,s))return r[s];var o=k(s);if(_(r,o))return r[o];var a=r[n]||r[s]||r[o];return a}}function Qe(e,t,n,i){var r=t[e],s=!_(n,e),o=n[e],a=tt(Boolean,r.type);if(a>-1)if(s&&!_(r,"default"))o=!1;else if(""===o||o===E(e)){var l=tt(String,r.type);(l<0||a<l)&&(o=!0)}if(void 0===o){o=Xe(i,r,e);var c=Oe;Ie(!0),Ae(o),Ie(c)}return o}function Xe(e,t,n){if(_(t,"default")){var i=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"===typeof i&&"Function"!==Ze(t.type)?i.call(e):i}}var Je=/^\s*function (\w+)/;function Ze(e){var t=e&&e.toString().match(Je);return t?t[1]:""}function et(e,t){return Ze(e)===Ze(t)}function tt(e,t){if(!Array.isArray(t))return et(t,e)?0:-1;for(var n=0,i=t.length;n<i;n++)if(et(t[n],e))return n;return-1}function nt(e,t,n){ve();try{if(t){var i=t;while(i=i.$parent){var r=i.$options.errorCaptured;if(r)for(var s=0;s<r.length;s++)try{var o=!1===r[s].call(i,e,t,n);if(o)return}catch(ko){rt(ko,i,"errorCaptured hook")}}}rt(e,t,n)}finally{ye()}}function it(e,t,n,i,r){var s;try{s=n?e.apply(t,n):e.call(t),s&&!s._isVue&&f(s)&&!s._handled&&(s.catch((function(e){return nt(e,i,r+" (Promise/async)")})),s._handled=!0)}catch(ko){nt(ko,i,r)}return s}function rt(e,t,n){if(z.errorHandler)try{return z.errorHandler.call(null,e,t,n)}catch(ko){ko!==e&&st(ko,null,"config.errorHandler")}st(e,t,n)}function st(e,t,n){if(!Q&&!X||"undefined"===typeof console)throw e;console.error(e)}var ot,at=!1,lt=[],ct=!1;function ut(){ct=!1;var e=lt.slice(0);lt.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!==typeof Promise&&ue(Promise)){var ht=Promise.resolve();ot=function(){ht.then(ut),ie&&setTimeout(A)},at=!0}else if(ee||"undefined"===typeof MutationObserver||!ue(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ot="undefined"!==typeof setImmediate&&ue(setImmediate)?function(){setImmediate(ut)}:function(){setTimeout(ut,0)};else{var dt=1,ft=new MutationObserver(ut),pt=document.createTextNode(String(dt));ft.observe(pt,{characterData:!0}),ot=function(){dt=(dt+1)%2,pt.data=String(dt)},at=!0}function mt(e,t){var n;if(lt.push((function(){if(e)try{e.call(t)}catch(ko){nt(ko,t,"nextTick")}else n&&n(t)})),ct||(ct=!0,ot()),!e&&"undefined"!==typeof Promise)return new Promise((function(e){n=e}))}var gt=new he;function vt(e){yt(e,gt),gt.clear()}function yt(e,t){var n,i,r=Array.isArray(e);if(!(!r&&!l(e)||Object.isFrozen(e)||e instanceof be)){if(e.__ob__){var s=e.__ob__.dep.id;if(t.has(s))return;t.add(s)}if(r){n=e.length;while(n--)yt(e[n],t)}else{i=Object.keys(e),n=i.length;while(n--)yt(e[i[n]],t)}}}var bt=w((function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var i="!"===e.charAt(0);return e=i?e.slice(1):e,{name:e,once:n,capture:i,passive:t}}));function _t(e,t){function n(){var e=arguments,i=n.fns;if(!Array.isArray(i))return it(i,null,arguments,t,"v-on handler");for(var r=i.slice(),s=0;s<r.length;s++)it(r[s],null,e,t,"v-on handler")}return n.fns=e,n}function wt(e,t,n,r,o,a){var l,c,u,h;for(l in e)c=e[l],u=t[l],h=bt(l),i(c)||(i(u)?(i(c.fns)&&(c=e[l]=_t(c,a)),s(h.once)&&(c=e[l]=o(h.name,c,h.capture)),n(h.name,c,h.capture,h.passive,h.params)):c!==u&&(u.fns=c,e[l]=u));for(l in t)i(e[l])&&(h=bt(l),r(h.name,t[l],h.capture))}function Ct(e,t,n){var o;e instanceof be&&(e=e.data.hook||(e.data.hook={}));var a=e[t];function l(){n.apply(this,arguments),y(o.fns,l)}i(a)?o=_t([l]):r(a.fns)&&s(a.merged)?(o=a,o.fns.push(l)):o=_t([a,l]),o.merged=!0,e[t]=o}function xt(e,t,n){var s=t.options.props;if(!i(s)){var o={},a=e.attrs,l=e.props;if(r(a)||r(l))for(var c in s){var u=E(c);kt(o,l,c,u,!0)||kt(o,a,c,u,!1)}return o}}function kt(e,t,n,i,s){if(r(t)){if(_(t,n))return e[n]=t[n],s||delete t[n],!0;if(_(t,i))return e[n]=t[i],s||delete t[i],!0}return!1}function St(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function Et(e){return a(e)?[Ce(e)]:Array.isArray(e)?Ot(e):void 0}function Tt(e){return r(e)&&r(e.text)&&o(e.isComment)}function Ot(e,t){var n,o,l,c,u=[];for(n=0;n<e.length;n++)o=e[n],i(o)||"boolean"===typeof o||(l=u.length-1,c=u[l],Array.isArray(o)?o.length>0&&(o=Ot(o,(t||"")+"_"+n),Tt(o[0])&&Tt(c)&&(u[l]=Ce(c.text+o[0].text),o.shift()),u.push.apply(u,o)):a(o)?Tt(c)?u[l]=Ce(c.text+o):""!==o&&u.push(Ce(o)):Tt(o)&&Tt(c)?u[l]=Ce(c.text+o.text):(s(e._isVList)&&r(o.tag)&&i(o.key)&&r(t)&&(o.key="__vlist"+t+"_"+n+"__"),u.push(o)));return u}function It(e){var t=e.$options.provide;t&&(e._provided="function"===typeof t?t.call(e):t)}function Dt(e){var t=Nt(e.$options.inject,e);t&&(Ie(!1),Object.keys(t).forEach((function(n){je(e,n,t[n])})),Ie(!0))}function Nt(e,t){if(e){for(var n=Object.create(null),i=de?Reflect.ownKeys(e):Object.keys(e),r=0;r<i.length;r++){var s=i[r];if("__ob__"!==s){var o=e[s].from,a=t;while(a){if(a._provided&&_(a._provided,o)){n[s]=a._provided[o];break}a=a.$parent}if(!a)if("default"in e[s]){var l=e[s].default;n[s]="function"===typeof l?l.call(t):l}else 0}}return n}}function Pt(e,t){if(!e||!e.length)return{};for(var n={},i=0,r=e.length;i<r;i++){var s=e[i],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==t&&s.fnContext!==t||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,l=n[a]||(n[a]=[]);"template"===s.tag?l.push.apply(l,s.children||[]):l.push(s)}}for(var c in n)n[c].every(At)&&delete n[c];return n}function At(e){return e.isComment&&!e.asyncFactory||" "===e.text}function jt(e){return e.isComment&&e.asyncFactory}function Mt(e,t,i){var r,s=Object.keys(t).length>0,o=e?!!e.$stable:!s,a=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(o&&i&&i!==n&&a===i.$key&&!s&&!i.$hasNormal)return i;for(var l in r={},e)e[l]&&"$"!==l[0]&&(r[l]=$t(t,l,e[l]))}else r={};for(var c in t)c in r||(r[c]=Rt(t,c));return e&&Object.isExtensible(e)&&(e._normalized=r),H(r,"$stable",o),H(r,"$key",a),H(r,"$hasNormal",s),r}function $t(e,t,n){var i=function(){var e=arguments.length?n.apply(null,arguments):n({});e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:Et(e);var t=e&&e[0];return e&&(!t||1===e.length&&t.isComment&&!jt(t))?void 0:e};return n.proxy&&Object.defineProperty(e,t,{get:i,enumerable:!0,configurable:!0}),i}function Rt(e,t){return function(){return e[t]}}function Lt(e,t){var n,i,s,o,a;if(Array.isArray(e)||"string"===typeof e)for(n=new Array(e.length),i=0,s=e.length;i<s;i++)n[i]=t(e[i],i);else if("number"===typeof e)for(n=new Array(e),i=0;i<e;i++)n[i]=t(i+1,i);else if(l(e))if(de&&e[Symbol.iterator]){n=[];var c=e[Symbol.iterator](),u=c.next();while(!u.done)n.push(t(u.value,n.length)),u=c.next()}else for(o=Object.keys(e),n=new Array(o.length),i=0,s=o.length;i<s;i++)a=o[i],n[i]=t(e[a],a,i);return r(n)||(n=[]),n._isVList=!0,n}function Ft(e,t,n,i){var r,s=this.$scopedSlots[e];s?(n=n||{},i&&(n=N(N({},i),n)),r=s(n)||("function"===typeof t?t():t)):r=this.$slots[e]||("function"===typeof t?t():t);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},r):r}function Vt(e){return Ye(this.$options,"filters",e,!0)||M}function Bt(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function zt(e,t,n,i,r){var s=z.keyCodes[t]||n;return r&&i&&!z.keyCodes[t]?Bt(r,i):s?Bt(s,e):i?E(i)!==t:void 0===e}function qt(e,t,n,i,r){if(n)if(l(n)){var s;Array.isArray(n)&&(n=P(n));var o=function(o){if("class"===o||"style"===o||v(o))s=e;else{var a=e.attrs&&e.attrs.type;s=i||z.mustUseProp(t,a,o)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var l=x(o),c=E(o);if(!(l in s)&&!(c in s)&&(s[o]=n[o],r)){var u=e.on||(e.on={});u["update:"+o]=function(e){n[o]=e}}};for(var a in n)o(a)}else;return e}function Ut(e,t){var n=this._staticTrees||(this._staticTrees=[]),i=n[e];return i&&!t||(i=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Wt(i,"__static__"+e,!1)),i}function Ht(e,t,n){return Wt(e,"__once__"+t+(n?"_"+n:""),!0),e}function Wt(e,t,n){if(Array.isArray(e))for(var i=0;i<e.length;i++)e[i]&&"string"!==typeof e[i]&&Kt(e[i],t+"_"+i,n);else Kt(e,t,n)}function Kt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function Gt(e,t){if(t)if(u(t)){var n=e.on=e.on?N({},e.on):{};for(var i in t){var r=n[i],s=t[i];n[i]=r?[].concat(r,s):s}}else;return e}function Yt(e,t,n,i){t=t||{$stable:!n};for(var r=0;r<e.length;r++){var s=e[r];Array.isArray(s)?Yt(s,t,n):s&&(s.proxy&&(s.fn.proxy=!0),t[s.key]=s.fn)}return i&&(t.$key=i),t}function Qt(e,t){for(var n=0;n<t.length;n+=2){var i=t[n];"string"===typeof i&&i&&(e[t[n]]=t[n+1])}return e}function Xt(e,t){return"string"===typeof e?t+e:e}function Jt(e){e._o=Ht,e._n=m,e._s=p,e._l=Lt,e._t=Ft,e._q=$,e._i=R,e._m=Ut,e._f=Vt,e._k=zt,e._b=qt,e._v=Ce,e._e=we,e._u=Yt,e._g=Gt,e._d=Qt,e._p=Xt}function Zt(e,t,i,r,o){var a,l=this,c=o.options;_(r,"_uid")?(a=Object.create(r),a._original=r):(a=r,r=r._original);var u=s(c._compiled),h=!u;this.data=e,this.props=t,this.children=i,this.parent=r,this.listeners=e.on||n,this.injections=Nt(c.inject,r),this.slots=function(){return l.$slots||Mt(e.scopedSlots,l.$slots=Pt(i,r)),l.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Mt(e.scopedSlots,this.slots())}}),u&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=Mt(e.scopedSlots,this.$slots)),c._scopeId?this._c=function(e,t,n,i){var s=fn(a,e,t,n,i,h);return s&&!Array.isArray(s)&&(s.fnScopeId=c._scopeId,s.fnContext=r),s}:this._c=function(e,t,n,i){return fn(a,e,t,n,i,h)}}function en(e,t,i,s,o){var a=e.options,l={},c=a.props;if(r(c))for(var u in c)l[u]=Qe(u,c,t||n);else r(i.attrs)&&nn(l,i.attrs),r(i.props)&&nn(l,i.props);var h=new Zt(i,l,o,s,e),d=a.render.call(null,h._c,h);if(d instanceof be)return tn(d,i,h.parent,a,h);if(Array.isArray(d)){for(var f=Et(d)||[],p=new Array(f.length),m=0;m<f.length;m++)p[m]=tn(f[m],i,h.parent,a,h);return p}}function tn(e,t,n,i,r){var s=xe(e);return s.fnContext=n,s.fnOptions=i,t.slot&&((s.data||(s.data={})).slot=t.slot),s}function nn(e,t){for(var n in t)e[x(n)]=t[n]}Jt(Zt.prototype);var rn={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;rn.prepatch(n,n)}else{var i=e.componentInstance=an(e,Nn);i.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions,i=t.componentInstance=e.componentInstance;$n(i,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,Vn(n,"mounted")),e.data.keepAlive&&(t._isMounted?Zn(n):Ln(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Fn(t,!0):t.$destroy())}},sn=Object.keys(rn);function on(e,t,n,o,a){if(!i(e)){var c=n.$options._base;if(l(e)&&(e=c.extend(e)),"function"===typeof e){var u;if(i(e.cid)&&(u=e,e=xn(u,c),void 0===e))return Cn(u,t,n,o,a);t=t||{},Ci(e),r(t.model)&&un(e.options,t);var h=xt(t,e,a);if(s(e.options.functional))return en(e,h,t,n,o);var d=t.on;if(t.on=t.nativeOn,s(e.options.abstract)){var f=t.slot;t={},f&&(t.slot=f)}ln(t);var p=e.options.name||a,m=new be("vue-component-"+e.cid+(p?"-"+p:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:h,listeners:d,tag:a,children:o},u);return m}}}function an(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},i=e.data.inlineTemplate;return r(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new e.componentOptions.Ctor(n)}function ln(e){for(var t=e.hook||(e.hook={}),n=0;n<sn.length;n++){var i=sn[n],r=t[i],s=rn[i];r===s||r&&r._merged||(t[i]=r?cn(s,r):s)}}function cn(e,t){var n=function(n,i){e(n,i),t(n,i)};return n._merged=!0,n}function un(e,t){var n=e.model&&e.model.prop||"value",i=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var s=t.on||(t.on={}),o=s[i],a=t.model.callback;r(o)?(Array.isArray(o)?-1===o.indexOf(a):o!==a)&&(s[i]=[a].concat(o)):s[i]=a}var hn=1,dn=2;function fn(e,t,n,i,r,o){return(Array.isArray(n)||a(n))&&(r=i,i=n,n=void 0),s(o)&&(r=dn),pn(e,t,n,i,r)}function pn(e,t,n,i,s){if(r(n)&&r(n.__ob__))return we();if(r(n)&&r(n.is)&&(t=n.is),!t)return we();var o,a,l;(Array.isArray(i)&&"function"===typeof i[0]&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),s===dn?i=Et(i):s===hn&&(i=St(i)),"string"===typeof t)?(a=e.$vnode&&e.$vnode.ns||z.getTagNamespace(t),o=z.isReservedTag(t)?new be(z.parsePlatformTagName(t),n,i,void 0,void 0,e):n&&n.pre||!r(l=Ye(e.$options,"components",t))?new be(t,n,i,void 0,void 0,e):on(l,n,e,i,t)):o=on(t,n,e,i);return Array.isArray(o)?o:r(o)?(r(a)&&mn(o,a),r(n)&&gn(n),o):we()}function mn(e,t,n){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,n=!0),r(e.children))for(var o=0,a=e.children.length;o<a;o++){var l=e.children[o];r(l.tag)&&(i(l.ns)||s(n)&&"svg"!==l.tag)&&mn(l,t,n)}}function gn(e){l(e.style)&&vt(e.style),l(e.class)&&vt(e.class)}function vn(e){e._vnode=null,e._staticTrees=null;var t=e.$options,i=e.$vnode=t._parentVnode,r=i&&i.context;e.$slots=Pt(t._renderChildren,r),e.$scopedSlots=n,e._c=function(t,n,i,r){return fn(e,t,n,i,r,!1)},e.$createElement=function(t,n,i,r){return fn(e,t,n,i,r,!0)};var s=i&&i.data;je(e,"$attrs",s&&s.attrs||n,null,!0),je(e,"$listeners",t._parentListeners||n,null,!0)}var yn,bn=null;function _n(e){Jt(e.prototype),e.prototype.$nextTick=function(e){return mt(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,i=n.render,r=n._parentVnode;r&&(t.$scopedSlots=Mt(r.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=r;try{bn=t,e=i.call(t._renderProxy,t.$createElement)}catch(ko){nt(ko,t,"render"),e=t._vnode}finally{bn=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof be||(e=we()),e.parent=r,e}}function wn(e,t){return(e.__esModule||de&&"Module"===e[Symbol.toStringTag])&&(e=e.default),l(e)?t.extend(e):e}function Cn(e,t,n,i,r){var s=we();return s.asyncFactory=e,s.asyncMeta={data:t,context:n,children:i,tag:r},s}function xn(e,t){if(s(e.error)&&r(e.errorComp))return e.errorComp;if(r(e.resolved))return e.resolved;var n=bn;if(n&&r(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),s(e.loading)&&r(e.loadingComp))return e.loadingComp;if(n&&!r(e.owners)){var o=e.owners=[n],a=!0,c=null,u=null;n.$on("hook:destroyed",(function(){return y(o,n)}));var h=function(e){for(var t=0,n=o.length;t<n;t++)o[t].$forceUpdate();e&&(o.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},d=L((function(n){e.resolved=wn(n,t),a?o.length=0:h(!0)})),p=L((function(t){r(e.errorComp)&&(e.error=!0,h(!0))})),m=e(d,p);return l(m)&&(f(m)?i(e.resolved)&&m.then(d,p):f(m.component)&&(m.component.then(d,p),r(m.error)&&(e.errorComp=wn(m.error,t)),r(m.loading)&&(e.loadingComp=wn(m.loading,t),0===m.delay?e.loading=!0:c=setTimeout((function(){c=null,i(e.resolved)&&i(e.error)&&(e.loading=!0,h(!1))}),m.delay||200)),r(m.timeout)&&(u=setTimeout((function(){u=null,i(e.resolved)&&p(null)}),m.timeout)))),a=!1,e.loading?e.loadingComp:e.resolved}}function kn(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(r(n)&&(r(n.componentOptions)||jt(n)))return n}}function Sn(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&In(e,t)}function En(e,t){yn.$on(e,t)}function Tn(e,t){yn.$off(e,t)}function On(e,t){var n=yn;return function i(){var r=t.apply(null,arguments);null!==r&&n.$off(e,i)}}function In(e,t,n){yn=e,wt(t,n||{},En,Tn,On,e),yn=void 0}function Dn(e){var t=/^hook:/;e.prototype.$on=function(e,n){var i=this;if(Array.isArray(e))for(var r=0,s=e.length;r<s;r++)i.$on(e[r],n);else(i._events[e]||(i._events[e]=[])).push(n),t.test(e)&&(i._hasHookEvent=!0);return i},e.prototype.$once=function(e,t){var n=this;function i(){n.$off(e,i),t.apply(n,arguments)}return i.fn=t,n.$on(e,i),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var i=0,r=e.length;i<r;i++)n.$off(e[i],t);return n}var s,o=n._events[e];if(!o)return n;if(!t)return n._events[e]=null,n;var a=o.length;while(a--)if(s=o[a],s===t||s.fn===t){o.splice(a,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?D(n):n;for(var i=D(arguments,1),r='event handler for "'+e+'"',s=0,o=n.length;s<o;s++)it(n[s],t,i,t,r)}return t}}var Nn=null;function Pn(e){var t=Nn;return Nn=e,function(){Nn=t}}function An(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function jn(e){e.prototype._update=function(e,t){var n=this,i=n.$el,r=n._vnode,s=Pn(n);n._vnode=e,n.$el=r?n.__patch__(r,e):n.__patch__(n.$el,e,t,!1),s(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Vn(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||y(t.$children,e),e._watcher&&e._watcher.teardown();var n=e._watchers.length;while(n--)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Vn(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Mn(e,t,n){var i;return e.$el=t,e.$options.render||(e.$options.render=we),Vn(e,"beforeMount"),i=function(){e._update(e._render(),n)},new ii(e,i,A,{before:function(){e._isMounted&&!e._isDestroyed&&Vn(e,"beforeUpdate")}},!0),n=!1,null==e.$vnode&&(e._isMounted=!0,Vn(e,"mounted")),e}function $n(e,t,i,r,s){var o=r.data.scopedSlots,a=e.$scopedSlots,l=!!(o&&!o.$stable||a!==n&&!a.$stable||o&&e.$scopedSlots.$key!==o.$key||!o&&e.$scopedSlots.$key),c=!!(s||e.$options._renderChildren||l);if(e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r),e.$options._renderChildren=s,e.$attrs=r.data.attrs||n,e.$listeners=i||n,t&&e.$options.props){Ie(!1);for(var u=e._props,h=e.$options._propKeys||[],d=0;d<h.length;d++){var f=h[d],p=e.$options.props;u[f]=Qe(f,p,t,e)}Ie(!0),e.$options.propsData=t}i=i||n;var m=e.$options._parentListeners;e.$options._parentListeners=i,In(e,i,m),c&&(e.$slots=Pt(s,r.context),e.$forceUpdate())}function Rn(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Ln(e,t){if(t){if(e._directInactive=!1,Rn(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Ln(e.$children[n]);Vn(e,"activated")}}function Fn(e,t){if((!t||(e._directInactive=!0,!Rn(e)))&&!e._inactive){e._inactive=!0;for(var n=0;n<e.$children.length;n++)Fn(e.$children[n]);Vn(e,"deactivated")}}function Vn(e,t){ve();var n=e.$options[t],i=t+" hook";if(n)for(var r=0,s=n.length;r<s;r++)it(n[r],e,null,e,i);e._hasHookEvent&&e.$emit("hook:"+t),ye()}var Bn=[],zn=[],qn={},Un=!1,Hn=!1,Wn=0;function Kn(){Wn=Bn.length=zn.length=0,qn={},Un=Hn=!1}var Gn=0,Yn=Date.now;if(Q&&!ee){var Qn=window.performance;Qn&&"function"===typeof Qn.now&&Yn()>document.createEvent("Event").timeStamp&&(Yn=function(){return Qn.now()})}function Xn(){var e,t;for(Gn=Yn(),Hn=!0,Bn.sort((function(e,t){return e.id-t.id})),Wn=0;Wn<Bn.length;Wn++)e=Bn[Wn],e.before&&e.before(),t=e.id,qn[t]=null,e.run();var n=zn.slice(),i=Bn.slice();Kn(),ei(n),Jn(i),ce&&z.devtools&&ce.emit("flush")}function Jn(e){var t=e.length;while(t--){var n=e[t],i=n.vm;i._watcher===n&&i._isMounted&&!i._isDestroyed&&Vn(i,"updated")}}function Zn(e){e._inactive=!1,zn.push(e)}function ei(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Ln(e[t],!0)}function ti(e){var t=e.id;if(null==qn[t]){if(qn[t]=!0,Hn){var n=Bn.length-1;while(n>Wn&&Bn[n].id>e.id)n--;Bn.splice(n+1,0,e)}else Bn.push(e);Un||(Un=!0,mt(Xn))}}var ni=0,ii=function(e,t,n,i,r){this.vm=e,r&&(e._watcher=this),e._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++ni,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new he,this.newDepIds=new he,this.expression="","function"===typeof t?this.getter=t:(this.getter=K(t),this.getter||(this.getter=A)),this.value=this.lazy?void 0:this.get()};ii.prototype.get=function(){var e;ve(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(ko){if(!this.user)throw ko;nt(ko,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&vt(e),ye(),this.cleanupDeps()}return e},ii.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},ii.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},ii.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():ti(this)},ii.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||l(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'+this.expression+'"';it(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},ii.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},ii.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},ii.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var ri={enumerable:!0,configurable:!0,get:A,set:A};function si(e,t,n){ri.get=function(){return this[t][n]},ri.set=function(e){this[t][n]=e},Object.defineProperty(e,n,ri)}function oi(e){e._watchers=[];var t=e.$options;t.props&&ai(e,t.props),t.methods&&mi(e,t.methods),t.data?li(e):Ae(e._data={},!0),t.computed&&hi(e,t.computed),t.watch&&t.watch!==se&&gi(e,t.watch)}function ai(e,t){var n=e.$options.propsData||{},i=e._props={},r=e.$options._propKeys=[],s=!e.$parent;s||Ie(!1);var o=function(s){r.push(s);var o=Qe(s,t,n,e);je(i,s,o),s in e||si(e,"_props",s)};for(var a in t)o(a);Ie(!0)}function li(e){var t=e.$options.data;t=e._data="function"===typeof t?ci(t,e):t||{},u(t)||(t={});var n=Object.keys(t),i=e.$options.props,r=(e.$options.methods,n.length);while(r--){var s=n[r];0,i&&_(i,s)||U(s)||si(e,"_data",s)}Ae(t,!0)}function ci(e,t){ve();try{return e.call(t,t)}catch(ko){return nt(ko,t,"data()"),{}}finally{ye()}}var ui={lazy:!0};function hi(e,t){var n=e._computedWatchers=Object.create(null),i=le();for(var r in t){var s=t[r],o="function"===typeof s?s:s.get;0,i||(n[r]=new ii(e,o||A,A,ui)),r in e||di(e,r,s)}}function di(e,t,n){var i=!le();"function"===typeof n?(ri.get=i?fi(t):pi(n),ri.set=A):(ri.get=n.get?i&&!1!==n.cache?fi(t):pi(n.get):A,ri.set=n.set||A),Object.defineProperty(e,t,ri)}function fi(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),me.target&&t.depend(),t.value}}function pi(e){return function(){return e.call(this,this)}}function mi(e,t){e.$options.props;for(var n in t)e[n]="function"!==typeof t[n]?A:I(t[n],e)}function gi(e,t){for(var n in t){var i=t[n];if(Array.isArray(i))for(var r=0;r<i.length;r++)vi(e,n,i[r]);else vi(e,n,i)}}function vi(e,t,n,i){return u(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=e[n]),e.$watch(t,n,i)}function yi(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=Me,e.prototype.$delete=$e,e.prototype.$watch=function(e,t,n){var i=this;if(u(t))return vi(i,e,t,n);n=n||{},n.user=!0;var r=new ii(i,e,t,n);if(n.immediate){var s='callback for immediate watcher "'+r.expression+'"';ve(),it(t,i,[r.value],i,s),ye()}return function(){r.teardown()}}}var bi=0;function _i(e){e.prototype._init=function(e){var t=this;t._uid=bi++,t._isVue=!0,e&&e._isComponent?wi(t,e):t.$options=Ge(Ci(t.constructor),e||{},t),t._renderProxy=t,t._self=t,An(t),Sn(t),vn(t),Vn(t,"beforeCreate"),Dt(t),oi(t),It(t),Vn(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function wi(e,t){var n=e.$options=Object.create(e.constructor.options),i=t._parentVnode;n.parent=t.parent,n._parentVnode=i;var r=i.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function Ci(e){var t=e.options;if(e.super){var n=Ci(e.super),i=e.superOptions;if(n!==i){e.superOptions=n;var r=xi(e);r&&N(e.extendOptions,r),t=e.options=Ge(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function xi(e){var t,n=e.options,i=e.sealedOptions;for(var r in n)n[r]!==i[r]&&(t||(t={}),t[r]=n[r]);return t}function ki(e){this._init(e)}function Si(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=D(arguments,1);return n.unshift(this),"function"===typeof e.install?e.install.apply(e,n):"function"===typeof e&&e.apply(null,n),t.push(e),this}}function Ei(e){e.mixin=function(e){return this.options=Ge(this.options,e),this}}function Ti(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,i=n.cid,r=e._Ctor||(e._Ctor={});if(r[i])return r[i];var s=e.name||n.options.name;var o=function(e){this._init(e)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=t++,o.options=Ge(n.options,e),o["super"]=n,o.options.props&&Oi(o),o.options.computed&&Ii(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,V.forEach((function(e){o[e]=n[e]})),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=e,o.sealedOptions=N({},o.options),r[i]=o,o}}function Oi(e){var t=e.options.props;for(var n in t)si(e.prototype,"_props",n)}function Ii(e){var t=e.options.computed;for(var n in t)di(e.prototype,n,t[n])}function Di(e){V.forEach((function(t){e[t]=function(e,n){return n?("component"===t&&u(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"===typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}))}function Ni(e){return e&&(e.Ctor.options.name||e.tag)}function Pi(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"===typeof e?e.split(",").indexOf(t)>-1:!!h(e)&&e.test(t)}function Ai(e,t){var n=e.cache,i=e.keys,r=e._vnode;for(var s in n){var o=n[s];if(o){var a=o.name;a&&!t(a)&&ji(n,s,i,r)}}}function ji(e,t,n,i){var r=e[t];!r||i&&r.tag===i.tag||r.componentInstance.$destroy(),e[t]=null,y(n,t)}_i(ki),yi(ki),Dn(ki),jn(ki),_n(ki);var Mi=[String,RegExp,Array],$i={name:"keep-alive",abstract:!0,props:{include:Mi,exclude:Mi,max:[String,Number]},methods:{cacheVNode:function(){var e=this,t=e.cache,n=e.keys,i=e.vnodeToCache,r=e.keyToCache;if(i){var s=i.tag,o=i.componentInstance,a=i.componentOptions;t[r]={name:Ni(a),tag:s,componentInstance:o},n.push(r),this.max&&n.length>parseInt(this.max)&&ji(t,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)ji(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",(function(t){Ai(e,(function(e){return Pi(t,e)}))})),this.$watch("exclude",(function(t){Ai(e,(function(e){return!Pi(t,e)}))}))},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=kn(e),n=t&&t.componentOptions;if(n){var i=Ni(n),r=this,s=r.include,o=r.exclude;if(s&&(!i||!Pi(s,i))||o&&i&&Pi(o,i))return t;var a=this,l=a.cache,c=a.keys,u=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;l[u]?(t.componentInstance=l[u].componentInstance,y(c,u),c.push(u)):(this.vnodeToCache=t,this.keyToCache=u),t.data.keepAlive=!0}return t||e&&e[0]}},Ri={KeepAlive:$i};function Li(e){var t={get:function(){return z}};Object.defineProperty(e,"config",t),e.util={warn:fe,extend:N,mergeOptions:Ge,defineReactive:je},e.set=Me,e.delete=$e,e.nextTick=mt,e.observable=function(e){return Ae(e),e},e.options=Object.create(null),V.forEach((function(t){e.options[t+"s"]=Object.create(null)})),e.options._base=e,N(e.options.components,Ri),Si(e),Ei(e),Ti(e),Di(e)}Li(ki),Object.defineProperty(ki.prototype,"$isServer",{get:le}),Object.defineProperty(ki.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(ki,"FunctionalRenderContext",{value:Zt}),ki.version="2.6.14";var Fi=g("style,class"),Vi=g("input,textarea,option,select,progress"),Bi=function(e,t,n){return"value"===n&&Vi(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},zi=g("contenteditable,draggable,spellcheck"),qi=g("events,caret,typing,plaintext-only"),Ui=function(e,t){return Yi(t)||"false"===t?"false":"contenteditable"===e&&qi(t)?t:"true"},Hi=g("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Wi="http://www.w3.org/1999/xlink",Ki=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Gi=function(e){return Ki(e)?e.slice(6,e.length):""},Yi=function(e){return null==e||!1===e};function Qi(e){var t=e.data,n=e,i=e;while(r(i.componentInstance))i=i.componentInstance._vnode,i&&i.data&&(t=Xi(i.data,t));while(r(n=n.parent))n&&n.data&&(t=Xi(t,n.data));return Ji(t.staticClass,t.class)}function Xi(e,t){return{staticClass:Zi(e.staticClass,t.staticClass),class:r(e.class)?[e.class,t.class]:t.class}}function Ji(e,t){return r(e)||r(t)?Zi(e,er(t)):""}function Zi(e,t){return e?t?e+" "+t:e:t||""}function er(e){return Array.isArray(e)?tr(e):l(e)?nr(e):"string"===typeof e?e:""}function tr(e){for(var t,n="",i=0,s=e.length;i<s;i++)r(t=er(e[i]))&&""!==t&&(n&&(n+=" "),n+=t);return n}function nr(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}var ir={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},rr=g("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),sr=g("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),or=function(e){return rr(e)||sr(e)};function ar(e){return sr(e)?"svg":"math"===e?"math":void 0}var lr=Object.create(null);function cr(e){if(!Q)return!0;if(or(e))return!1;if(e=e.toLowerCase(),null!=lr[e])return lr[e];var t=document.createElement(e);return e.indexOf("-")>-1?lr[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:lr[e]=/HTMLUnknownElement/.test(t.toString())}var ur=g("text,number,password,search,email,tel,url");function hr(e){if("string"===typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function dr(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function fr(e,t){return document.createElementNS(ir[e],t)}function pr(e){return document.createTextNode(e)}function mr(e){return document.createComment(e)}function gr(e,t,n){e.insertBefore(t,n)}function vr(e,t){e.removeChild(t)}function yr(e,t){e.appendChild(t)}function br(e){return e.parentNode}function _r(e){return e.nextSibling}function wr(e){return e.tagName}function Cr(e,t){e.textContent=t}function xr(e,t){e.setAttribute(t,"")}var kr=Object.freeze({createElement:dr,createElementNS:fr,createTextNode:pr,createComment:mr,insertBefore:gr,removeChild:vr,appendChild:yr,parentNode:br,nextSibling:_r,tagName:wr,setTextContent:Cr,setStyleScope:xr}),Sr={create:function(e,t){Er(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Er(e,!0),Er(t))},destroy:function(e){Er(e,!0)}};function Er(e,t){var n=e.data.ref;if(r(n)){var i=e.context,s=e.componentInstance||e.elm,o=i.$refs;t?Array.isArray(o[n])?y(o[n],s):o[n]===s&&(o[n]=void 0):e.data.refInFor?Array.isArray(o[n])?o[n].indexOf(s)<0&&o[n].push(s):o[n]=[s]:o[n]=s}}var Tr=new be("",{},[]),Or=["create","activate","update","remove","destroy"];function Ir(e,t){return e.key===t.key&&e.asyncFactory===t.asyncFactory&&(e.tag===t.tag&&e.isComment===t.isComment&&r(e.data)===r(t.data)&&Dr(e,t)||s(e.isAsyncPlaceholder)&&i(t.asyncFactory.error))}function Dr(e,t){if("input"!==e.tag)return!0;var n,i=r(n=e.data)&&r(n=n.attrs)&&n.type,s=r(n=t.data)&&r(n=n.attrs)&&n.type;return i===s||ur(i)&&ur(s)}function Nr(e,t,n){var i,s,o={};for(i=t;i<=n;++i)s=e[i].key,r(s)&&(o[s]=i);return o}function Pr(e){var t,n,o={},l=e.modules,c=e.nodeOps;for(t=0;t<Or.length;++t)for(o[Or[t]]=[],n=0;n<l.length;++n)r(l[n][Or[t]])&&o[Or[t]].push(l[n][Or[t]]);function u(e){return new be(c.tagName(e).toLowerCase(),{},[],void 0,e)}function h(e,t){function n(){0===--n.listeners&&d(e)}return n.listeners=t,n}function d(e){var t=c.parentNode(e);r(t)&&c.removeChild(t,e)}function f(e,t,n,i,o,a,l){if(r(e.elm)&&r(a)&&(e=a[l]=xe(e)),e.isRootInsert=!o,!p(e,t,n,i)){var u=e.data,h=e.children,d=e.tag;r(d)?(e.elm=e.ns?c.createElementNS(e.ns,d):c.createElement(d,e),C(e),b(e,h,t),r(u)&&w(e,t),y(n,e.elm,i)):s(e.isComment)?(e.elm=c.createComment(e.text),y(n,e.elm,i)):(e.elm=c.createTextNode(e.text),y(n,e.elm,i))}}function p(e,t,n,i){var o=e.data;if(r(o)){var a=r(e.componentInstance)&&o.keepAlive;if(r(o=o.hook)&&r(o=o.init)&&o(e,!1),r(e.componentInstance))return m(e,t),y(n,e.elm,i),s(a)&&v(e,t,n,i),!0}}function m(e,t){r(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,_(e)?(w(e,t),C(e)):(Er(e),t.push(e))}function v(e,t,n,i){var s,a=e;while(a.componentInstance)if(a=a.componentInstance._vnode,r(s=a.data)&&r(s=s.transition)){for(s=0;s<o.activate.length;++s)o.activate[s](Tr,a);t.push(a);break}y(n,e.elm,i)}function y(e,t,n){r(e)&&(r(n)?c.parentNode(n)===e&&c.insertBefore(e,t,n):c.appendChild(e,t))}function b(e,t,n){if(Array.isArray(t)){0;for(var i=0;i<t.length;++i)f(t[i],n,e.elm,null,!0,t,i)}else a(e.text)&&c.appendChild(e.elm,c.createTextNode(String(e.text)))}function _(e){while(e.componentInstance)e=e.componentInstance._vnode;return r(e.tag)}function w(e,n){for(var i=0;i<o.create.length;++i)o.create[i](Tr,e);t=e.data.hook,r(t)&&(r(t.create)&&t.create(Tr,e),r(t.insert)&&n.push(e))}function C(e){var t;if(r(t=e.fnScopeId))c.setStyleScope(e.elm,t);else{var n=e;while(n)r(t=n.context)&&r(t=t.$options._scopeId)&&c.setStyleScope(e.elm,t),n=n.parent}r(t=Nn)&&t!==e.context&&t!==e.fnContext&&r(t=t.$options._scopeId)&&c.setStyleScope(e.elm,t)}function x(e,t,n,i,r,s){for(;i<=r;++i)f(n[i],s,e,t,!1,n,i)}function k(e){var t,n,i=e.data;if(r(i))for(r(t=i.hook)&&r(t=t.destroy)&&t(e),t=0;t<o.destroy.length;++t)o.destroy[t](e);if(r(t=e.children))for(n=0;n<e.children.length;++n)k(e.children[n])}function S(e,t,n){for(;t<=n;++t){var i=e[t];r(i)&&(r(i.tag)?(E(i),k(i)):d(i.elm))}}function E(e,t){if(r(t)||r(e.data)){var n,i=o.remove.length+1;for(r(t)?t.listeners+=i:t=h(e.elm,i),r(n=e.componentInstance)&&r(n=n._vnode)&&r(n.data)&&E(n,t),n=0;n<o.remove.length;++n)o.remove[n](e,t);r(n=e.data.hook)&&r(n=n.remove)?n(e,t):t()}else d(e.elm)}function T(e,t,n,s,o){var a,l,u,h,d=0,p=0,m=t.length-1,g=t[0],v=t[m],y=n.length-1,b=n[0],_=n[y],w=!o;while(d<=m&&p<=y)i(g)?g=t[++d]:i(v)?v=t[--m]:Ir(g,b)?(I(g,b,s,n,p),g=t[++d],b=n[++p]):Ir(v,_)?(I(v,_,s,n,y),v=t[--m],_=n[--y]):Ir(g,_)?(I(g,_,s,n,y),w&&c.insertBefore(e,g.elm,c.nextSibling(v.elm)),g=t[++d],_=n[--y]):Ir(v,b)?(I(v,b,s,n,p),w&&c.insertBefore(e,v.elm,g.elm),v=t[--m],b=n[++p]):(i(a)&&(a=Nr(t,d,m)),l=r(b.key)?a[b.key]:O(b,t,d,m),i(l)?f(b,s,e,g.elm,!1,n,p):(u=t[l],Ir(u,b)?(I(u,b,s,n,p),t[l]=void 0,w&&c.insertBefore(e,u.elm,g.elm)):f(b,s,e,g.elm,!1,n,p)),b=n[++p]);d>m?(h=i(n[y+1])?null:n[y+1].elm,x(e,h,n,p,y,s)):p>y&&S(t,d,m)}function O(e,t,n,i){for(var s=n;s<i;s++){var o=t[s];if(r(o)&&Ir(e,o))return s}}function I(e,t,n,a,l,u){if(e!==t){r(t.elm)&&r(a)&&(t=a[l]=xe(t));var h=t.elm=e.elm;if(s(e.isAsyncPlaceholder))r(t.asyncFactory.resolved)?P(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(s(t.isStatic)&&s(e.isStatic)&&t.key===e.key&&(s(t.isCloned)||s(t.isOnce)))t.componentInstance=e.componentInstance;else{var d,f=t.data;r(f)&&r(d=f.hook)&&r(d=d.prepatch)&&d(e,t);var p=e.children,m=t.children;if(r(f)&&_(t)){for(d=0;d<o.update.length;++d)o.update[d](e,t);r(d=f.hook)&&r(d=d.update)&&d(e,t)}i(t.text)?r(p)&&r(m)?p!==m&&T(h,p,m,n,u):r(m)?(r(e.text)&&c.setTextContent(h,""),x(h,null,m,0,m.length-1,n)):r(p)?S(p,0,p.length-1):r(e.text)&&c.setTextContent(h,""):e.text!==t.text&&c.setTextContent(h,t.text),r(f)&&r(d=f.hook)&&r(d=d.postpatch)&&d(e,t)}}}function D(e,t,n){if(s(n)&&r(e.parent))e.parent.data.pendingInsert=t;else for(var i=0;i<t.length;++i)t[i].data.hook.insert(t[i])}var N=g("attrs,class,staticClass,staticStyle,key");function P(e,t,n,i){var o,a=t.tag,l=t.data,c=t.children;if(i=i||l&&l.pre,t.elm=e,s(t.isComment)&&r(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(r(l)&&(r(o=l.hook)&&r(o=o.init)&&o(t,!0),r(o=t.componentInstance)))return m(t,n),!0;if(r(a)){if(r(c))if(e.hasChildNodes())if(r(o=l)&&r(o=o.domProps)&&r(o=o.innerHTML)){if(o!==e.innerHTML)return!1}else{for(var u=!0,h=e.firstChild,d=0;d<c.length;d++){if(!h||!P(h,c[d],n,i)){u=!1;break}h=h.nextSibling}if(!u||h)return!1}else b(t,c,n);if(r(l)){var f=!1;for(var p in l)if(!N(p)){f=!0,w(t,n);break}!f&&l["class"]&&vt(l["class"])}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,a){if(!i(t)){var l=!1,h=[];if(i(e))l=!0,f(t,h);else{var d=r(e.nodeType);if(!d&&Ir(e,t))I(e,t,h,null,null,a);else{if(d){if(1===e.nodeType&&e.hasAttribute(F)&&(e.removeAttribute(F),n=!0),s(n)&&P(e,t,h))return D(t,h,!0),e;e=u(e)}var p=e.elm,m=c.parentNode(p);if(f(t,h,p._leaveCb?null:m,c.nextSibling(p)),r(t.parent)){var g=t.parent,v=_(t);while(g){for(var y=0;y<o.destroy.length;++y)o.destroy[y](g);if(g.elm=t.elm,v){for(var b=0;b<o.create.length;++b)o.create[b](Tr,g);var w=g.data.hook.insert;if(w.merged)for(var C=1;C<w.fns.length;C++)w.fns[C]()}else Er(g);g=g.parent}}r(m)?S([e],0,0):r(e.tag)&&k(e)}}return D(t,h,l),t.elm}r(e)&&k(e)}}var Ar={create:jr,update:jr,destroy:function(e){jr(e,Tr)}};function jr(e,t){(e.data.directives||t.data.directives)&&Mr(e,t)}function Mr(e,t){var n,i,r,s=e===Tr,o=t===Tr,a=Rr(e.data.directives,e.context),l=Rr(t.data.directives,t.context),c=[],u=[];for(n in l)i=a[n],r=l[n],i?(r.oldValue=i.value,r.oldArg=i.arg,Fr(r,"update",t,e),r.def&&r.def.componentUpdated&&u.push(r)):(Fr(r,"bind",t,e),r.def&&r.def.inserted&&c.push(r));if(c.length){var h=function(){for(var n=0;n<c.length;n++)Fr(c[n],"inserted",t,e)};s?Ct(t,"insert",h):h()}if(u.length&&Ct(t,"postpatch",(function(){for(var n=0;n<u.length;n++)Fr(u[n],"componentUpdated",t,e)})),!s)for(n in a)l[n]||Fr(a[n],"unbind",e,e,o)}var $r=Object.create(null);function Rr(e,t){var n,i,r=Object.create(null);if(!e)return r;for(n=0;n<e.length;n++)i=e[n],i.modifiers||(i.modifiers=$r),r[Lr(i)]=i,i.def=Ye(t.$options,"directives",i.name,!0);return r}function Lr(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function Fr(e,t,n,i,r){var s=e.def&&e.def[t];if(s)try{s(n.elm,e,n,i,r)}catch(ko){nt(ko,n.context,"directive "+e.name+" "+t+" hook")}}var Vr=[Sr,Ar];function Br(e,t){var n=t.componentOptions;if((!r(n)||!1!==n.Ctor.options.inheritAttrs)&&(!i(e.data.attrs)||!i(t.data.attrs))){var s,o,a,l=t.elm,c=e.data.attrs||{},u=t.data.attrs||{};for(s in r(u.__ob__)&&(u=t.data.attrs=N({},u)),u)o=u[s],a=c[s],a!==o&&zr(l,s,o,t.data.pre);for(s in(ee||ne)&&u.value!==c.value&&zr(l,"value",u.value),c)i(u[s])&&(Ki(s)?l.removeAttributeNS(Wi,Gi(s)):zi(s)||l.removeAttribute(s))}}function zr(e,t,n,i){i||e.tagName.indexOf("-")>-1?qr(e,t,n):Hi(t)?Yi(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):zi(t)?e.setAttribute(t,Ui(t,n)):Ki(t)?Yi(n)?e.removeAttributeNS(Wi,Gi(t)):e.setAttributeNS(Wi,t,n):qr(e,t,n)}function qr(e,t,n){if(Yi(n))e.removeAttribute(t);else{if(ee&&!te&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var i=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",i)};e.addEventListener("input",i),e.__ieph=!0}e.setAttribute(t,n)}}var Ur={create:Br,update:Br};function Hr(e,t){var n=t.elm,s=t.data,o=e.data;if(!(i(s.staticClass)&&i(s.class)&&(i(o)||i(o.staticClass)&&i(o.class)))){var a=Qi(t),l=n._transitionClasses;r(l)&&(a=Zi(a,er(l))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Wr,Kr={create:Hr,update:Hr},Gr="__r",Yr="__c";function Qr(e){if(r(e[Gr])){var t=ee?"change":"input";e[t]=[].concat(e[Gr],e[t]||[]),delete e[Gr]}r(e[Yr])&&(e.change=[].concat(e[Yr],e.change||[]),delete e[Yr])}function Xr(e,t,n){var i=Wr;return function r(){var s=t.apply(null,arguments);null!==s&&es(e,r,n,i)}}var Jr=at&&!(re&&Number(re[1])<=53);function Zr(e,t,n,i){if(Jr){var r=Gn,s=t;t=s._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=r||e.timeStamp<=0||e.target.ownerDocument!==document)return s.apply(this,arguments)}}Wr.addEventListener(e,t,oe?{capture:n,passive:i}:n)}function es(e,t,n,i){(i||Wr).removeEventListener(e,t._wrapper||t,n)}function ts(e,t){if(!i(e.data.on)||!i(t.data.on)){var n=t.data.on||{},r=e.data.on||{};Wr=t.elm,Qr(n),wt(n,r,Zr,es,Xr,t.context),Wr=void 0}}var ns,is={create:ts,update:ts};function rs(e,t){if(!i(e.data.domProps)||!i(t.data.domProps)){var n,s,o=t.elm,a=e.data.domProps||{},l=t.data.domProps||{};for(n in r(l.__ob__)&&(l=t.data.domProps=N({},l)),a)n in l||(o[n]="");for(n in l){if(s=l[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),s===a[n])continue;1===o.childNodes.length&&o.removeChild(o.childNodes[0])}if("value"===n&&"PROGRESS"!==o.tagName){o._value=s;var c=i(s)?"":String(s);ss(o,c)&&(o.value=c)}else if("innerHTML"===n&&sr(o.tagName)&&i(o.innerHTML)){ns=ns||document.createElement("div"),ns.innerHTML="<svg>"+s+"</svg>";var u=ns.firstChild;while(o.firstChild)o.removeChild(o.firstChild);while(u.firstChild)o.appendChild(u.firstChild)}else if(s!==a[n])try{o[n]=s}catch(ko){}}}}function ss(e,t){return!e.composing&&("OPTION"===e.tagName||os(e,t)||as(e,t))}function os(e,t){var n=!0;try{n=document.activeElement!==e}catch(ko){}return n&&e.value!==t}function as(e,t){var n=e.value,i=e._vModifiers;if(r(i)){if(i.number)return m(n)!==m(t);if(i.trim)return n.trim()!==t.trim()}return n!==t}var ls={create:rs,update:rs},cs=w((function(e){var t={},n=/;(?![^(]*\))/g,i=/:(.+)/;return e.split(n).forEach((function(e){if(e){var n=e.split(i);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}));function us(e){var t=hs(e.style);return e.staticStyle?N(e.staticStyle,t):t}function hs(e){return Array.isArray(e)?P(e):"string"===typeof e?cs(e):e}function ds(e,t){var n,i={};if(t){var r=e;while(r.componentInstance)r=r.componentInstance._vnode,r&&r.data&&(n=us(r.data))&&N(i,n)}(n=us(e.data))&&N(i,n);var s=e;while(s=s.parent)s.data&&(n=us(s.data))&&N(i,n);return i}var fs,ps=/^--/,ms=/\s*!important$/,gs=function(e,t,n){if(ps.test(t))e.style.setProperty(t,n);else if(ms.test(n))e.style.setProperty(E(t),n.replace(ms,""),"important");else{var i=ys(t);if(Array.isArray(n))for(var r=0,s=n.length;r<s;r++)e.style[i]=n[r];else e.style[i]=n}},vs=["Webkit","Moz","ms"],ys=w((function(e){if(fs=fs||document.createElement("div").style,e=x(e),"filter"!==e&&e in fs)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<vs.length;n++){var i=vs[n]+t;if(i in fs)return i}}));function bs(e,t){var n=t.data,s=e.data;if(!(i(n.staticStyle)&&i(n.style)&&i(s.staticStyle)&&i(s.style))){var o,a,l=t.elm,c=s.staticStyle,u=s.normalizedStyle||s.style||{},h=c||u,d=hs(t.data.style)||{};t.data.normalizedStyle=r(d.__ob__)?N({},d):d;var f=ds(t,!0);for(a in h)i(f[a])&&gs(l,a,"");for(a in f)o=f[a],o!==h[a]&&gs(l,a,null==o?"":o)}}var _s={create:bs,update:bs},ws=/\s+/;function Cs(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(ws).forEach((function(t){return e.classList.add(t)})):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function xs(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(ws).forEach((function(t){return e.classList.remove(t)})):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{var n=" "+(e.getAttribute("class")||"")+" ",i=" "+t+" ";while(n.indexOf(i)>=0)n=n.replace(i," ");n=n.trim(),n?e.setAttribute("class",n):e.removeAttribute("class")}}function ks(e){if(e){if("object"===typeof e){var t={};return!1!==e.css&&N(t,Ss(e.name||"v")),N(t,e),t}return"string"===typeof e?Ss(e):void 0}}var Ss=w((function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}})),Es=Q&&!te,Ts="transition",Os="animation",Is="transition",Ds="transitionend",Ns="animation",Ps="animationend";Es&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Is="WebkitTransition",Ds="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Ns="WebkitAnimation",Ps="webkitAnimationEnd"));var As=Q?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function js(e){As((function(){As(e)}))}function Ms(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),Cs(e,t))}function $s(e,t){e._transitionClasses&&y(e._transitionClasses,t),xs(e,t)}function Rs(e,t,n){var i=Fs(e,t),r=i.type,s=i.timeout,o=i.propCount;if(!r)return n();var a=r===Ts?Ds:Ps,l=0,c=function(){e.removeEventListener(a,u),n()},u=function(t){t.target===e&&++l>=o&&c()};setTimeout((function(){l<o&&c()}),s+1),e.addEventListener(a,u)}var Ls=/\b(transform|all)(,|$)/;function Fs(e,t){var n,i=window.getComputedStyle(e),r=(i[Is+"Delay"]||"").split(", "),s=(i[Is+"Duration"]||"").split(", "),o=Vs(r,s),a=(i[Ns+"Delay"]||"").split(", "),l=(i[Ns+"Duration"]||"").split(", "),c=Vs(a,l),u=0,h=0;t===Ts?o>0&&(n=Ts,u=o,h=s.length):t===Os?c>0&&(n=Os,u=c,h=l.length):(u=Math.max(o,c),n=u>0?o>c?Ts:Os:null,h=n?n===Ts?s.length:l.length:0);var d=n===Ts&&Ls.test(i[Is+"Property"]);return{type:n,timeout:u,propCount:h,hasTransform:d}}function Vs(e,t){while(e.length<t.length)e=e.concat(e);return Math.max.apply(null,t.map((function(t,n){return Bs(t)+Bs(e[n])})))}function Bs(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function zs(e,t){var n=e.elm;r(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var s=ks(e.data.transition);if(!i(s)&&!r(n._enterCb)&&1===n.nodeType){var o=s.css,a=s.type,c=s.enterClass,u=s.enterToClass,h=s.enterActiveClass,d=s.appearClass,f=s.appearToClass,p=s.appearActiveClass,g=s.beforeEnter,v=s.enter,y=s.afterEnter,b=s.enterCancelled,_=s.beforeAppear,w=s.appear,C=s.afterAppear,x=s.appearCancelled,k=s.duration,S=Nn,E=Nn.$vnode;while(E&&E.parent)S=E.context,E=E.parent;var T=!S._isMounted||!e.isRootInsert;if(!T||w||""===w){var O=T&&d?d:c,I=T&&p?p:h,D=T&&f?f:u,N=T&&_||g,P=T&&"function"===typeof w?w:v,A=T&&C||y,j=T&&x||b,M=m(l(k)?k.enter:k);0;var $=!1!==o&&!te,R=Hs(P),F=n._enterCb=L((function(){$&&($s(n,D),$s(n,I)),F.cancelled?($&&$s(n,O),j&&j(n)):A&&A(n),n._enterCb=null}));e.data.show||Ct(e,"insert",(function(){var t=n.parentNode,i=t&&t._pending&&t._pending[e.key];i&&i.tag===e.tag&&i.elm._leaveCb&&i.elm._leaveCb(),P&&P(n,F)})),N&&N(n),$&&(Ms(n,O),Ms(n,I),js((function(){$s(n,O),F.cancelled||(Ms(n,D),R||(Us(M)?setTimeout(F,M):Rs(n,a,F)))}))),e.data.show&&(t&&t(),P&&P(n,F)),$||R||F()}}}function qs(e,t){var n=e.elm;r(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var s=ks(e.data.transition);if(i(s)||1!==n.nodeType)return t();if(!r(n._leaveCb)){var o=s.css,a=s.type,c=s.leaveClass,u=s.leaveToClass,h=s.leaveActiveClass,d=s.beforeLeave,f=s.leave,p=s.afterLeave,g=s.leaveCancelled,v=s.delayLeave,y=s.duration,b=!1!==o&&!te,_=Hs(f),w=m(l(y)?y.leave:y);0;var C=n._leaveCb=L((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),b&&($s(n,u),$s(n,h)),C.cancelled?(b&&$s(n,c),g&&g(n)):(t(),p&&p(n)),n._leaveCb=null}));v?v(x):x()}function x(){C.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),d&&d(n),b&&(Ms(n,c),Ms(n,h),js((function(){$s(n,c),C.cancelled||(Ms(n,u),_||(Us(w)?setTimeout(C,w):Rs(n,a,C)))}))),f&&f(n,C),b||_||C())}}function Us(e){return"number"===typeof e&&!isNaN(e)}function Hs(e){if(i(e))return!1;var t=e.fns;return r(t)?Hs(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function Ws(e,t){!0!==t.data.show&&zs(t)}var Ks=Q?{create:Ws,activate:Ws,remove:function(e,t){!0!==e.data.show?qs(e,t):t()}}:{},Gs=[Ur,Kr,is,ls,_s,Ks],Ys=Gs.concat(Vr),Qs=Pr({nodeOps:kr,modules:Ys});te&&document.addEventListener("selectionchange",(function(){var e=document.activeElement;e&&e.vmodel&&ro(e,"input")}));var Xs={inserted:function(e,t,n,i){"select"===n.tag?(i.elm&&!i.elm._vOptions?Ct(n,"postpatch",(function(){Xs.componentUpdated(e,t,n)})):Js(e,t,n.context),e._vOptions=[].map.call(e.options,to)):("textarea"===n.tag||ur(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",no),e.addEventListener("compositionend",io),e.addEventListener("change",io),te&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Js(e,t,n.context);var i=e._vOptions,r=e._vOptions=[].map.call(e.options,to);if(r.some((function(e,t){return!$(e,i[t])}))){var s=e.multiple?t.value.some((function(e){return eo(e,r)})):t.value!==t.oldValue&&eo(t.value,r);s&&ro(e,"change")}}}};function Js(e,t,n){Zs(e,t,n),(ee||ne)&&setTimeout((function(){Zs(e,t,n)}),0)}function Zs(e,t,n){var i=t.value,r=e.multiple;if(!r||Array.isArray(i)){for(var s,o,a=0,l=e.options.length;a<l;a++)if(o=e.options[a],r)s=R(i,to(o))>-1,o.selected!==s&&(o.selected=s);else if($(to(o),i))return void(e.selectedIndex!==a&&(e.selectedIndex=a));r||(e.selectedIndex=-1)}}function eo(e,t){return t.every((function(t){return!$(t,e)}))}function to(e){return"_value"in e?e._value:e.value}function no(e){e.target.composing=!0}function io(e){e.target.composing&&(e.target.composing=!1,ro(e.target,"input"))}function ro(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function so(e){return!e.componentInstance||e.data&&e.data.transition?e:so(e.componentInstance._vnode)}var oo={bind:function(e,t,n){var i=t.value;n=so(n);var r=n.data&&n.data.transition,s=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;i&&r?(n.data.show=!0,zs(n,(function(){e.style.display=s}))):e.style.display=i?s:"none"},update:function(e,t,n){var i=t.value,r=t.oldValue;if(!i!==!r){n=so(n);var s=n.data&&n.data.transition;s?(n.data.show=!0,i?zs(n,(function(){e.style.display=e.__vOriginalDisplay})):qs(n,(function(){e.style.display="none"}))):e.style.display=i?e.__vOriginalDisplay:"none"}},unbind:function(e,t,n,i,r){r||(e.style.display=e.__vOriginalDisplay)}},ao={model:Xs,show:oo},lo={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function co(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?co(kn(t.children)):e}function uo(e){var t={},n=e.$options;for(var i in n.propsData)t[i]=e[i];var r=n._parentListeners;for(var s in r)t[x(s)]=r[s];return t}function ho(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function fo(e){while(e=e.parent)if(e.data.transition)return!0}function po(e,t){return t.key===e.key&&t.tag===e.tag}var mo=function(e){return e.tag||jt(e)},go=function(e){return"show"===e.name},vo={name:"transition",props:lo,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(mo),n.length)){0;var i=this.mode;0;var r=n[0];if(fo(this.$vnode))return r;var s=co(r);if(!s)return r;if(this._leaving)return ho(e,r);var o="__transition-"+this._uid+"-";s.key=null==s.key?s.isComment?o+"comment":o+s.tag:a(s.key)?0===String(s.key).indexOf(o)?s.key:o+s.key:s.key;var l=(s.data||(s.data={})).transition=uo(this),c=this._vnode,u=co(c);if(s.data.directives&&s.data.directives.some(go)&&(s.data.show=!0),u&&u.data&&!po(s,u)&&!jt(u)&&(!u.componentInstance||!u.componentInstance._vnode.isComment)){var h=u.data.transition=N({},l);if("out-in"===i)return this._leaving=!0,Ct(h,"afterLeave",(function(){t._leaving=!1,t.$forceUpdate()})),ho(e,r);if("in-out"===i){if(jt(s))return c;var d,f=function(){d()};Ct(l,"afterEnter",f),Ct(l,"enterCancelled",f),Ct(h,"delayLeave",(function(e){d=e}))}}return r}}},yo=N({tag:String,moveClass:String},lo);delete yo.mode;var bo={props:yo,beforeMount:function(){var e=this,t=this._update;this._update=function(n,i){var r=Pn(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,r(),t.call(e,n,i)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),i=this.prevChildren=this.children,r=this.$slots.default||[],s=this.children=[],o=uo(this),a=0;a<r.length;a++){var l=r[a];if(l.tag)if(null!=l.key&&0!==String(l.key).indexOf("__vlist"))s.push(l),n[l.key]=l,(l.data||(l.data={})).transition=o;else;}if(i){for(var c=[],u=[],h=0;h<i.length;h++){var d=i[h];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?c.push(d):u.push(d)}this.kept=e(t,null,c),this.removed=u}return e(t,null,s)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(_o),e.forEach(wo),e.forEach(Co),this._reflow=document.body.offsetHeight,e.forEach((function(e){if(e.data.moved){var n=e.elm,i=n.style;Ms(n,t),i.transform=i.WebkitTransform=i.transitionDuration="",n.addEventListener(Ds,n._moveCb=function e(i){i&&i.target!==n||i&&!/transform$/.test(i.propertyName)||(n.removeEventListener(Ds,e),n._moveCb=null,$s(n,t))})}})))},methods:{hasMove:function(e,t){if(!Es)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach((function(e){xs(n,e)})),Cs(n,t),n.style.display="none",this.$el.appendChild(n);var i=Fs(n);return this.$el.removeChild(n),this._hasMove=i.hasTransform}}};function _o(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function wo(e){e.data.newPos=e.elm.getBoundingClientRect()}function Co(e){var t=e.data.pos,n=e.data.newPos,i=t.left-n.left,r=t.top-n.top;if(i||r){e.data.moved=!0;var s=e.elm.style;s.transform=s.WebkitTransform="translate("+i+"px,"+r+"px)",s.transitionDuration="0s"}}var xo={Transition:vo,TransitionGroup:bo};ki.config.mustUseProp=Bi,ki.config.isReservedTag=or,ki.config.isReservedAttr=Fi,ki.config.getTagNamespace=ar,ki.config.isUnknownElement=cr,N(ki.options.directives,ao),N(ki.options.components,xo),ki.prototype.__patch__=Q?Qs:A,ki.prototype.$mount=function(e,t){return e=e&&Q?hr(e):void 0,Mn(this,e,t)},Q&&setTimeout((function(){z.devtools&&ce&&ce.emit("init",ki)}),0),t["default"]=ki}.call(this,n("c8ba"))},"2ba4":function(e,t){var n=Function.prototype,i=n.apply,r=n.bind,s=n.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?s.bind(i):function(){return s.apply(i,arguments)})},"2bb5":function(e,t,n){"use strict";t.__esModule=!0;n("8122");t.default={mounted:function(){},methods:{getMigratingConfig:function(){return{props:{},events:{}}}}}},"2cf4":function(e,t,n){var i,r,s,o,a=n("da84"),l=n("2ba4"),c=n("0366"),u=n("1626"),h=n("1a2d"),d=n("d039"),f=n("1be4"),p=n("f36a"),m=n("cc12"),g=n("1cdc"),v=n("605d"),y=a.setImmediate,b=a.clearImmediate,_=a.process,w=a.Dispatch,C=a.Function,x=a.MessageChannel,k=a.String,S=0,E={},T="onreadystatechange";try{i=a.location}catch(P){}var O=function(e){if(h(E,e)){var t=E[e];delete E[e],t()}},I=function(e){return function(){O(e)}},D=function(e){O(e.data)},N=function(e){a.postMessage(k(e),i.protocol+"//"+i.host)};y&&b||(y=function(e){var t=p(arguments,1);return E[++S]=function(){l(u(e)?e:C(e),void 0,t)},r(S),S},b=function(e){delete E[e]},v?r=function(e){_.nextTick(I(e))}:w&&w.now?r=function(e){w.now(I(e))}:x&&!g?(s=new x,o=s.port2,s.port1.onmessage=D,r=c(o.postMessage,o)):a.addEventListener&&u(a.postMessage)&&!a.importScripts&&i&&"file:"!==i.protocol&&!d(N)?(r=N,a.addEventListener("message",D,!1)):r=T in m("script")?function(e){f.appendChild(m("script"))[T]=function(){f.removeChild(this),O(e)}}:function(e){setTimeout(I(e),0)}),e.exports={set:y,clear:b}},"2d00":function(e,t,n){var i,r,s=n("da84"),o=n("342f"),a=s.process,l=s.Deno,c=a&&a.versions||l&&l.version,u=c&&c.v8;u&&(i=u.split("."),r=i[0]>0&&i[0]<4?1:+(i[0]+i[1])),!r&&o&&(i=o.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=o.match(/Chrome\/(\d+)/),i&&(r=+i[1]))),e.exports=r},"2f62":function(e,t,n){"use strict";(function(e){
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function n(e){var t=Number(e.version.split(".")[0]);if(t>=2)e.mixin({beforeCreate:i});else{var n=e.prototype._init;e.prototype._init=function(e){void 0===e&&(e={}),e.init=e.init?[i].concat(e.init):i,n.call(this,e)}}function i(){var e=this.$options;e.store?this.$store="function"===typeof e.store?e.store():e.store:e.parent&&e.parent.$store&&(this.$store=e.parent.$store)}}var i="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},r=i.__VUE_DEVTOOLS_GLOBAL_HOOK__;function s(e){r&&(e._devtoolHook=r,r.emit("vuex:init",e),r.on("vuex:travel-to-state",(function(t){e.replaceState(t)})),e.subscribe((function(e,t){r.emit("vuex:mutation",e,t)}),{prepend:!0}),e.subscribeAction((function(e,t){r.emit("vuex:action",e,t)}),{prepend:!0}))}function o(e,t){return e.filter(t)[0]}function a(e,t){if(void 0===t&&(t=[]),null===e||"object"!==typeof e)return e;var n=o(t,(function(t){return t.original===e}));if(n)return n.copy;var i=Array.isArray(e)?[]:{};return t.push({original:e,copy:i}),Object.keys(e).forEach((function(n){i[n]=a(e[n],t)})),i}function l(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function c(e){return null!==e&&"object"===typeof e}function u(e){return e&&"function"===typeof e.then}function h(e,t){return function(){return e(t)}}var d=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},f={namespaced:{configurable:!0}};f.namespaced.get=function(){return!!this._rawModule.namespaced},d.prototype.addChild=function(e,t){this._children[e]=t},d.prototype.removeChild=function(e){delete this._children[e]},d.prototype.getChild=function(e){return this._children[e]},d.prototype.hasChild=function(e){return e in this._children},d.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},d.prototype.forEachChild=function(e){l(this._children,e)},d.prototype.forEachGetter=function(e){this._rawModule.getters&&l(this._rawModule.getters,e)},d.prototype.forEachAction=function(e){this._rawModule.actions&&l(this._rawModule.actions,e)},d.prototype.forEachMutation=function(e){this._rawModule.mutations&&l(this._rawModule.mutations,e)},Object.defineProperties(d.prototype,f);var p=function(e){this.register([],e,!1)};function m(e,t,n){if(t.update(n),n.modules)for(var i in n.modules){if(!t.getChild(i))return void 0;m(e.concat(i),t.getChild(i),n.modules[i])}}p.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},p.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},p.prototype.update=function(e){m([],this.root,e)},p.prototype.register=function(e,t,n){var i=this;void 0===n&&(n=!0);var r=new d(t,n);if(0===e.length)this.root=r;else{var s=this.get(e.slice(0,-1));s.addChild(e[e.length-1],r)}t.modules&&l(t.modules,(function(t,r){i.register(e.concat(r),t,n)}))},p.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],i=t.getChild(n);i&&i.runtime&&t.removeChild(n)},p.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var g;var v=function(e){var t=this;void 0===e&&(e={}),!g&&"undefined"!==typeof window&&window.Vue&&N(window.Vue);var n=e.plugins;void 0===n&&(n=[]);var i=e.strict;void 0===i&&(i=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new p(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new g,this._makeLocalGettersCache=Object.create(null);var r=this,o=this,a=o.dispatch,l=o.commit;this.dispatch=function(e,t){return a.call(r,e,t)},this.commit=function(e,t,n){return l.call(r,e,t,n)},this.strict=i;var c=this._modules.root.state;C(this,c,[],this._modules.root),w(this,c),n.forEach((function(e){return e(t)}));var u=void 0!==e.devtools?e.devtools:g.config.devtools;u&&s(this)},y={state:{configurable:!0}};function b(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function _(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;C(e,n,[],e._modules.root,!0),w(e,n,t)}function w(e,t,n){var i=e._vm;e.getters={},e._makeLocalGettersCache=Object.create(null);var r=e._wrappedGetters,s={};l(r,(function(t,n){s[n]=h(t,e),Object.defineProperty(e.getters,n,{get:function(){return e._vm[n]},enumerable:!0})}));var o=g.config.silent;g.config.silent=!0,e._vm=new g({data:{$$state:t},computed:s}),g.config.silent=o,e.strict&&O(e),i&&(n&&e._withCommit((function(){i._data.$$state=null})),g.nextTick((function(){return i.$destroy()})))}function C(e,t,n,i,r){var s=!n.length,o=e._modules.getNamespace(n);if(i.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=i),!s&&!r){var a=I(t,n.slice(0,-1)),l=n[n.length-1];e._withCommit((function(){g.set(a,l,i.state)}))}var c=i.context=x(e,o,n);i.forEachMutation((function(t,n){var i=o+n;S(e,i,t,c)})),i.forEachAction((function(t,n){var i=t.root?n:o+n,r=t.handler||t;E(e,i,r,c)})),i.forEachGetter((function(t,n){var i=o+n;T(e,i,t,c)})),i.forEachChild((function(i,s){C(e,t,n.concat(s),i,r)}))}function x(e,t,n){var i=""===t,r={dispatch:i?e.dispatch:function(n,i,r){var s=D(n,i,r),o=s.payload,a=s.options,l=s.type;return a&&a.root||(l=t+l),e.dispatch(l,o)},commit:i?e.commit:function(n,i,r){var s=D(n,i,r),o=s.payload,a=s.options,l=s.type;a&&a.root||(l=t+l),e.commit(l,o,a)}};return Object.defineProperties(r,{getters:{get:i?function(){return e.getters}:function(){return k(e,t)}},state:{get:function(){return I(e.state,n)}}}),r}function k(e,t){if(!e._makeLocalGettersCache[t]){var n={},i=t.length;Object.keys(e.getters).forEach((function(r){if(r.slice(0,i)===t){var s=r.slice(i);Object.defineProperty(n,s,{get:function(){return e.getters[r]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function S(e,t,n,i){var r=e._mutations[t]||(e._mutations[t]=[]);r.push((function(t){n.call(e,i.state,t)}))}function E(e,t,n,i){var r=e._actions[t]||(e._actions[t]=[]);r.push((function(t){var r=n.call(e,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:e.getters,rootState:e.state},t);return u(r)||(r=Promise.resolve(r)),e._devtoolHook?r.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):r}))}function T(e,t,n,i){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return n(i.state,i.getters,e.state,e.getters)})}function O(e){e._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function I(e,t){return t.reduce((function(e,t){return e[t]}),e)}function D(e,t,n){return c(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}function N(e){g&&e===g||(g=e,n(g))}y.state.get=function(){return this._vm._data.$$state},y.state.set=function(e){0},v.prototype.commit=function(e,t,n){var i=this,r=D(e,t,n),s=r.type,o=r.payload,a=(r.options,{type:s,payload:o}),l=this._mutations[s];l&&(this._withCommit((function(){l.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(a,i.state)})))},v.prototype.dispatch=function(e,t){var n=this,i=D(e,t),r=i.type,s=i.payload,o={type:r,payload:s},a=this._actions[r];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(c){0}var l=a.length>1?Promise.all(a.map((function(e){return e(s)}))):a[0](s);return new Promise((function(e,t){l.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(c){0}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(c){0}t(e)}))}))}},v.prototype.subscribe=function(e,t){return b(e,this._subscribers,t)},v.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return b(n,this._actionSubscribers,t)},v.prototype.watch=function(e,t,n){var i=this;return this._watcherVM.$watch((function(){return e(i.state,i.getters)}),t,n)},v.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._vm._data.$$state=e}))},v.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),C(this,this.state,e,this._modules.get(e),n.preserveState),w(this,this.state)},v.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var n=I(t.state,e.slice(0,-1));g.delete(n,e[e.length-1])})),_(this)},v.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},v.prototype.hotUpdate=function(e){this._modules.update(e),_(this,!0)},v.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(v.prototype,y);var P=F((function(e,t){var n={};return R(t).forEach((function(t){var i=t.key,r=t.val;n[i]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var i=V(this.$store,"mapState",e);if(!i)return;t=i.context.state,n=i.context.getters}return"function"===typeof r?r.call(this,t,n):t[r]},n[i].vuex=!0})),n})),A=F((function(e,t){var n={};return R(t).forEach((function(t){var i=t.key,r=t.val;n[i]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var i=this.$store.commit;if(e){var s=V(this.$store,"mapMutations",e);if(!s)return;i=s.context.commit}return"function"===typeof r?r.apply(this,[i].concat(t)):i.apply(this.$store,[r].concat(t))}})),n})),j=F((function(e,t){var n={};return R(t).forEach((function(t){var i=t.key,r=t.val;r=e+r,n[i]=function(){if(!e||V(this.$store,"mapGetters",e))return this.$store.getters[r]},n[i].vuex=!0})),n})),M=F((function(e,t){var n={};return R(t).forEach((function(t){var i=t.key,r=t.val;n[i]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var i=this.$store.dispatch;if(e){var s=V(this.$store,"mapActions",e);if(!s)return;i=s.context.dispatch}return"function"===typeof r?r.apply(this,[i].concat(t)):i.apply(this.$store,[r].concat(t))}})),n})),$=function(e){return{mapState:P.bind(null,e),mapGetters:j.bind(null,e),mapMutations:A.bind(null,e),mapActions:M.bind(null,e)}};function R(e){return L(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function L(e){return Array.isArray(e)||c(e)}function F(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function V(e,t,n){var i=e._modulesNamespaceMap[n];return i}function B(e){void 0===e&&(e={});var t=e.collapsed;void 0===t&&(t=!0);var n=e.filter;void 0===n&&(n=function(e,t,n){return!0});var i=e.transformer;void 0===i&&(i=function(e){return e});var r=e.mutationTransformer;void 0===r&&(r=function(e){return e});var s=e.actionFilter;void 0===s&&(s=function(e,t){return!0});var o=e.actionTransformer;void 0===o&&(o=function(e){return e});var l=e.logMutations;void 0===l&&(l=!0);var c=e.logActions;void 0===c&&(c=!0);var u=e.logger;return void 0===u&&(u=console),function(e){var h=a(e.state);"undefined"!==typeof u&&(l&&e.subscribe((function(e,s){var o=a(s);if(n(e,h,o)){var l=U(),c=r(e),d="mutation "+e.type+l;z(u,d,t),u.log("%c prev state","color: #9E9E9E; font-weight: bold",i(h)),u.log("%c mutation","color: #03A9F4; font-weight: bold",c),u.log("%c next state","color: #4CAF50; font-weight: bold",i(o)),q(u)}h=o})),c&&e.subscribeAction((function(e,n){if(s(e,n)){var i=U(),r=o(e),a="action "+e.type+i;z(u,a,t),u.log("%c action","color: #03A9F4; font-weight: bold",r),q(u)}})))}}function z(e,t,n){var i=n?e.groupCollapsed:e.group;try{i.call(e,t)}catch(r){e.log(t)}}function q(e){try{e.groupEnd()}catch(t){e.log("—— log end ——")}}function U(){var e=new Date;return" @ "+W(e.getHours(),2)+":"+W(e.getMinutes(),2)+":"+W(e.getSeconds(),2)+"."+W(e.getMilliseconds(),3)}function H(e,t){return new Array(t+1).join(e)}function W(e,t){return H("0",t-e.toString().length)+e}var K={Store:v,install:N,version:"3.6.2",mapState:P,mapMutations:A,mapGetters:j,mapActions:M,createNamespacedHelpers:$,createLogger:B};t["a"]=K}).call(this,n("c8ba"))},"2f9a":function(e,t){e.exports=function(){}},"301c":function(e,t,n){n("e198")("asyncIterator")},3397:function(e,t,n){var i=n("7a41");e.exports=function(e,t){if(!i(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!i(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},"342f":function(e,t,n){var i=n("d066");e.exports=i("navigator","userAgent")||""},"35a1":function(e,t,n){var i=n("f5df"),r=n("dc4a"),s=n("3f8c"),o=n("b622"),a=o("iterator");e.exports=function(e){if(void 0!=e)return r(e,a)||r(e,"@@iterator")||s[i(e)]}},"37e8":function(e,t,n){var i=n("83ab"),r=n("9bf2"),s=n("825a"),o=n("fc6a"),a=n("df75");e.exports=i?Object.defineProperties:function(e,t){s(e);var n,i=o(t),l=a(t),c=l.length,u=0;while(c>u)r.f(e,n=l[u++],i[n]);return e}},"393a":function(e,t,n){"use strict";var i=n("e444"),r=n("512c"),s=n("ba01"),o=n("051b"),a=n("8a0d"),l=n("26dd"),c=n("92f0"),u=n("ce7a"),h=n("cc15")("iterator"),d=!([].keys&&"next"in[].keys()),f="@@iterator",p="keys",m="values",g=function(){return this};e.exports=function(e,t,n,v,y,b,_){l(n,t,v);var w,C,x,k=function(e){if(!d&&e in O)return O[e];switch(e){case p:return function(){return new n(this,e)};case m:return function(){return new n(this,e)}}return function(){return new n(this,e)}},S=t+" Iterator",E=y==m,T=!1,O=e.prototype,I=O[h]||O[f]||y&&O[y],D=I||k(y),N=y?E?k("entries"):D:void 0,P="Array"==t&&O.entries||I;if(P&&(x=u(P.call(new e)),x!==Object.prototype&&x.next&&(c(x,S,!0),i||"function"==typeof x[h]||o(x,h,g))),E&&I&&I.name!==m&&(T=!0,D=function(){return I.call(this)}),i&&!_||!d&&!T&&O[h]||o(O,h,D),a[t]=D,a[S]=g,y)if(w={values:E?D:k(m),keys:b?D:k(p),entries:N},_)for(C in w)C in O||s(O,C,w[C]);else r(r.P+r.F*(d||T),t,w);return w}},"39ad":function(e,t,n){var i=n("6ca1"),r=n("d16a"),s=n("9d11");e.exports=function(e){return function(t,n,o){var a,l=i(t),c=r(l.length),u=s(o,c);if(e&&n!=n){while(c>u)if(a=l[u++],a!=a)return!0}else for(;c>u;u++)if((e||u in l)&&l[u]===n)return e||u||0;return!e&&-1}}},"3a9b":function(e,t,n){var i=n("e330");e.exports=i({}.isPrototypeOf)},"3bbe":function(e,t,n){var i=n("da84"),r=n("1626"),s=i.String,o=i.TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw o("Can't set "+s(e)+" as a prototype")}},"3c4e":function(e,t,n){"use strict";var i=function(e){return r(e)&&!s(e)};function r(e){return!!e&&"object"===typeof e}function s(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||l(e)}var o="function"===typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103;function l(e){return e.$$typeof===a}function c(e){return Array.isArray(e)?[]:{}}function u(e,t){var n=t&&!0===t.clone;return n&&i(e)?f(c(e),e,t):e}function h(e,t,n){var r=e.slice();return t.forEach((function(t,s){"undefined"===typeof r[s]?r[s]=u(t,n):i(t)?r[s]=f(e[s],t,n):-1===e.indexOf(t)&&r.push(u(t,n))})),r}function d(e,t,n){var r={};return i(e)&&Object.keys(e).forEach((function(t){r[t]=u(e[t],n)})),Object.keys(t).forEach((function(s){i(t[s])&&e[s]?r[s]=f(e[s],t[s],n):r[s]=u(t[s],n)})),r}function f(e,t,n){var i=Array.isArray(t),r=Array.isArray(e),s=n||{arrayMerge:h},o=i===r;if(o){if(i){var a=s.arrayMerge||h;return a(e,t,n)}return d(e,t,n)}return u(t,n)}f.all=function(e,t){if(!Array.isArray(e)||e.length<2)throw new Error("first argument should be an array with at least two elements");return e.reduce((function(e,n){return f(e,n,t)}))};var p=f;e.exports=p},"3ca3":function(e,t,n){"use strict";var i=n("6547").charAt,r=n("577e"),s=n("69f3"),o=n("7dd0"),a="String Iterator",l=s.set,c=s.getterFor(a);o(String,"String",(function(e){l(this,{type:a,string:r(e),index:0})}),(function(){var e,t=c(this),n=t.string,r=t.index;return r>=n.length?{value:void 0,done:!0}:(e=i(n,r),t.index+=e.length,{value:e,done:!1})}))},"3f6b":function(e,t,n){e.exports={default:n("b9c7"),__esModule:!0}},"3f8c":function(e,t){e.exports={}},4010:function(e,t,n){"use strict";t.__esModule=!0,t.removeResizeListener=t.addResizeListener=void 0;var i=n("6dd8"),r=s(i);function s(e){return e&&e.__esModule?e:{default:e}}var o="undefined"===typeof window,a=function(e){var t=e,n=Array.isArray(t),i=0;for(t=n?t:t[Symbol.iterator]();;){var r;if(n){if(i>=t.length)break;r=t[i++]}else{if(i=t.next(),i.done)break;r=i.value}var s=r,o=s.target.__resizeListeners__||[];o.length&&o.forEach((function(e){e()}))}};t.addResizeListener=function(e,t){o||(e.__resizeListeners__||(e.__resizeListeners__=[],e.__ro__=new r.default(a),e.__ro__.observe(e)),e.__resizeListeners__.push(t))},t.removeResizeListener=function(e,t){e&&e.__resizeListeners__&&(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),e.__resizeListeners__.length||e.__ro__.disconnect())}},"417f":function(e,t,n){"use strict";t.__esModule=!0;var i=n("2b0e"),r=o(i),s=n("5924");function o(e){return e&&e.__esModule?e:{default:e}}var a=[],l="@@clickoutsideContext",c=void 0,u=0;function h(e,t,n){return function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!(n&&n.context&&i.target&&r.target)||e.contains(i.target)||e.contains(r.target)||e===i.target||n.context.popperElm&&(n.context.popperElm.contains(i.target)||n.context.popperElm.contains(r.target))||(t.expression&&e[l].methodName&&n.context[e[l].methodName]?n.context[e[l].methodName]():e[l].bindingFn&&e[l].bindingFn())}}!r.default.prototype.$isServer&&(0,s.on)(document,"mousedown",(function(e){return c=e})),!r.default.prototype.$isServer&&(0,s.on)(document,"mouseup",(function(e){a.forEach((function(t){return t[l].documentHandler(e,c)}))})),t.default={bind:function(e,t,n){a.push(e);var i=u++;e[l]={id:i,documentHandler:h(e,t,n),methodName:t.expression,bindingFn:t.value}},update:function(e,t,n){e[l].documentHandler=h(e,t,n),e[l].methodName=t.expression,e[l].bindingFn=t.value},unbind:function(e){for(var t=a.length,n=0;n<t;n++)if(a[n][l].id===e[l].id){a.splice(n,1);break}delete e[l]}}},"41b2":function(e,t,n){"use strict";t.__esModule=!0;var i=n("3f6b"),r=s(i);function s(e){return e&&e.__esModule?e:{default:e}}t.default=r.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}},"41f8":function(e,t,n){"use strict";t.__esModule=!0;var i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.isVNode=s;var r=n("8122");function s(e){return null!==e&&"object"===("undefined"===typeof e?"undefined":i(e))&&(0,r.hasOwn)(e,"componentOptions")}},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,i="/";t.cwd=function(){return i},t.chdir=function(t){e||(e=n("df7c")),i=e.resolve(t,i)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"44ad":function(e,t,n){var i=n("da84"),r=n("e330"),s=n("d039"),o=n("c6b6"),a=i.Object,l=r("".split);e.exports=s((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?l(e,""):a(e)}:a},"44d2":function(e,t,n){var i=n("b622"),r=n("7c73"),s=n("9bf2"),o=i("unscopables"),a=Array.prototype;void 0==a[o]&&s.f(a,o,{configurable:!0,value:r(null)}),e.exports=function(e){a[o][e]=!0}},"44de":function(e,t,n){var i=n("da84");e.exports=function(e,t){var n=i.console;n&&n.error&&(1==arguments.length?n.error(e):n.error(e,t))}},4726:function(e,t,n){e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=59)}({0:function(e,t,n){"use strict";function i(e,t,n,i,r,s,o,a){var l,c="function"===typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),o?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=l):r&&(l=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,l):[l]}return{exports:e,options:c}}n.d(t,"a",(function(){return i}))},15:function(e,t){e.exports=n("14e9")},19:function(e,t){e.exports=n("dcdc")},21:function(e,t){e.exports=n("d397")},26:function(e,t){e.exports=n("92fa")},3:function(e,t){e.exports=n("8122")},31:function(e,t){e.exports=n("2a5e")},40:function(e,t){e.exports=n("e452")},51:function(e,t){e.exports=n("f494")},59:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["el-cascader-panel",e.border&&"is-bordered"],on:{keydown:e.handleKeyDown}},e._l(e.menus,(function(e,t){return n("cascader-menu",{key:t,ref:"menu",refInFor:!0,attrs:{index:t,nodes:e}})})),1)},r=[];i._withStripped=!0;var s,o,a=n(26),l=n.n(a),c=n(15),u=n.n(c),h=n(19),d=n.n(h),f=n(51),p=n.n(f),m=n(3),g=function(e){return e.stopPropagation()},v={inject:["panel"],components:{ElCheckbox:d.a,ElRadio:p.a},props:{node:{required:!0},nodeId:String},computed:{config:function(){return this.panel.config},isLeaf:function(){return this.node.isLeaf},isDisabled:function(){return this.node.isDisabled},checkedValue:function(){return this.panel.checkedValue},isChecked:function(){return this.node.isSameNode(this.checkedValue)},inActivePath:function(){return this.isInPath(this.panel.activePath)},inCheckedPath:function(){var e=this;return!!this.config.checkStrictly&&this.panel.checkedNodePaths.some((function(t){return e.isInPath(t)}))},value:function(){return this.node.getValueByOption()}},methods:{handleExpand:function(){var e=this,t=this.panel,n=this.node,i=this.isDisabled,r=this.config,s=r.multiple,o=r.checkStrictly;!o&&i||n.loading||(r.lazy&&!n.loaded?t.lazyLoad(n,(function(){var t=e.isLeaf;if(t||e.handleExpand(),s){var i=!!t&&n.checked;e.handleMultiCheckChange(i)}})):t.handleExpand(n))},handleCheckChange:function(){var e=this.panel,t=this.value,n=this.node;e.handleCheckChange(t),e.handleExpand(n)},handleMultiCheckChange:function(e){this.node.doCheck(e),this.panel.calculateMultiCheckedValue()},isInPath:function(e){var t=this.node,n=e[t.level-1]||{};return n.uid===t.uid},renderPrefix:function(e){var t=this.isLeaf,n=this.isChecked,i=this.config,r=i.checkStrictly,s=i.multiple;return s?this.renderCheckbox(e):r?this.renderRadio(e):t&&n?this.renderCheckIcon(e):null},renderPostfix:function(e){var t=this.node,n=this.isLeaf;return t.loading?this.renderLoadingIcon(e):n?null:this.renderExpandIcon(e)},renderCheckbox:function(e){var t=this.node,n=this.config,i=this.isDisabled,r={on:{change:this.handleMultiCheckChange},nativeOn:{}};return n.checkStrictly&&(r.nativeOn.click=g),e("el-checkbox",l()([{attrs:{value:t.checked,indeterminate:t.indeterminate,disabled:i}},r]))},renderRadio:function(e){var t=this.checkedValue,n=this.value,i=this.isDisabled;return Object(m["isEqual"])(n,t)&&(n=t),e("el-radio",{attrs:{value:t,label:n,disabled:i},on:{change:this.handleCheckChange},nativeOn:{click:g}},[e("span")])},renderCheckIcon:function(e){return e("i",{class:"el-icon-check el-cascader-node__prefix"})},renderLoadingIcon:function(e){return e("i",{class:"el-icon-loading el-cascader-node__postfix"})},renderExpandIcon:function(e){return e("i",{class:"el-icon-arrow-right el-cascader-node__postfix"})},renderContent:function(e){var t=this.panel,n=this.node,i=t.renderLabelFn,r=i?i({node:n,data:n.data}):null;return e("span",{class:"el-cascader-node__label"},[r||n.label])}},render:function(e){var t=this,n=this.inActivePath,i=this.inCheckedPath,r=this.isChecked,s=this.isLeaf,o=this.isDisabled,a=this.config,c=this.nodeId,u=a.expandTrigger,h=a.checkStrictly,d=a.multiple,f=!h&&o,p={on:{}};return"click"===u?p.on.click=this.handleExpand:(p.on.mouseenter=function(e){t.handleExpand(),t.$emit("expand",e)},p.on.focus=function(e){t.handleExpand(),t.$emit("expand",e)}),!s||o||h||d||(p.on.click=this.handleCheckChange),e("li",l()([{attrs:{role:"menuitem",id:c,"aria-expanded":n,tabindex:f?null:-1},class:{"el-cascader-node":!0,"is-selectable":h,"in-active-path":n,"in-checked-path":i,"is-active":r,"is-disabled":f}},p]),[this.renderPrefix(e),this.renderContent(e),this.renderPostfix(e)])}},y=v,b=n(0),_=Object(b["a"])(y,s,o,!1,null,null,null);_.options.__file="packages/cascader-panel/src/cascader-node.vue";var w,C,x=_.exports,k=n(6),S=n.n(k),E={name:"ElCascaderMenu",mixins:[S.a],inject:["panel"],components:{ElScrollbar:u.a,CascaderNode:x},props:{nodes:{type:Array,required:!0},index:Number},data:function(){return{activeNode:null,hoverTimer:null,id:Object(m["generateId"])()}},computed:{isEmpty:function(){return!this.nodes.length},menuId:function(){return"cascader-menu-"+this.id+"-"+this.index}},methods:{handleExpand:function(e){this.activeNode=e.target},handleMouseMove:function(e){var t=this.activeNode,n=this.hoverTimer,i=this.$refs.hoverZone;if(t&&i)if(t.contains(e.target)){clearTimeout(n);var r=this.$el.getBoundingClientRect(),s=r.left,o=e.clientX-s,a=this.$el,l=a.offsetWidth,c=a.offsetHeight,u=t.offsetTop,h=u+t.offsetHeight;i.innerHTML='\n          <path style="pointer-events: auto;" fill="transparent" d="M'+o+" "+u+" L"+l+" 0 V"+u+' Z" />\n          <path style="pointer-events: auto;" fill="transparent" d="M'+o+" "+h+" L"+l+" "+c+" V"+h+' Z" />\n        '}else n||(this.hoverTimer=setTimeout(this.clearHoverZone,this.panel.config.hoverThreshold))},clearHoverZone:function(){var e=this.$refs.hoverZone;e&&(e.innerHTML="")},renderEmptyText:function(e){return e("div",{class:"el-cascader-menu__empty-text"},[this.t("el.cascader.noData")])},renderNodeList:function(e){var t=this.menuId,n=this.panel.isHoverMenu,i={on:{}};n&&(i.on.expand=this.handleExpand);var r=this.nodes.map((function(n,r){var s=n.hasChildren;return e("cascader-node",l()([{key:n.uid,attrs:{node:n,"node-id":t+"-"+r,"aria-haspopup":s,"aria-owns":s?t:null}},i]))}));return[].concat(r,[n?e("svg",{ref:"hoverZone",class:"el-cascader-menu__hover-zone"}):null])}},render:function(e){var t=this.isEmpty,n=this.menuId,i={nativeOn:{}};return this.panel.isHoverMenu&&(i.nativeOn.mousemove=this.handleMouseMove),e("el-scrollbar",l()([{attrs:{tag:"ul",role:"menu",id:n,"wrap-class":"el-cascader-menu__wrap","view-class":{"el-cascader-menu__list":!0,"is-empty":t}},class:"el-cascader-menu"},i]),[t?this.renderEmptyText(e):this.renderNodeList(e)])}},T=E,O=Object(b["a"])(T,w,C,!1,null,null,null);O.options.__file="packages/cascader-panel/src/cascader-menu.vue";var I=O.exports,D=n(21),N=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var A=0,j=function(){function e(t,n,i){P(this,e),this.data=t,this.config=n,this.parent=i||null,this.level=this.parent?this.parent.level+1:1,this.uid=A++,this.initState(),this.initChildren()}return e.prototype.initState=function(){var e=this.config,t=e.value,n=e.label;this.value=this.data[t],this.label=this.data[n],this.pathNodes=this.calculatePathNodes(),this.path=this.pathNodes.map((function(e){return e.value})),this.pathLabels=this.pathNodes.map((function(e){return e.label})),this.loading=!1,this.loaded=!1},e.prototype.initChildren=function(){var t=this,n=this.config,i=n.children,r=this.data[i];this.hasChildren=Array.isArray(r),this.children=(r||[]).map((function(i){return new e(i,n,t)}))},e.prototype.calculatePathNodes=function(){var e=[this],t=this.parent;while(t)e.unshift(t),t=t.parent;return e},e.prototype.getPath=function(){return this.path},e.prototype.getValue=function(){return this.value},e.prototype.getValueByOption=function(){return this.config.emitPath?this.getPath():this.getValue()},e.prototype.getText=function(e,t){return e?this.pathLabels.join(t):this.label},e.prototype.isSameNode=function(e){var t=this.getValueByOption();return this.config.multiple&&Array.isArray(e)?e.some((function(e){return Object(m["isEqual"])(e,t)})):Object(m["isEqual"])(e,t)},e.prototype.broadcast=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var r="onParent"+Object(m["capitalize"])(e);this.children.forEach((function(t){t&&(t.broadcast.apply(t,[e].concat(n)),t[r]&&t[r].apply(t,n))}))},e.prototype.emit=function(e){var t=this.parent,n="onChild"+Object(m["capitalize"])(e);if(t){for(var i=arguments.length,r=Array(i>1?i-1:0),s=1;s<i;s++)r[s-1]=arguments[s];t[n]&&t[n].apply(t,r),t.emit.apply(t,[e].concat(r))}},e.prototype.onParentCheck=function(e){this.isDisabled||this.setCheckState(e)},e.prototype.onChildCheck=function(){var e=this.children,t=e.filter((function(e){return!e.isDisabled})),n=!!t.length&&t.every((function(e){return e.checked}));this.setCheckState(n)},e.prototype.setCheckState=function(e){var t=this.children.length,n=this.children.reduce((function(e,t){var n=t.checked?1:t.indeterminate?.5:0;return e+n}),0);this.checked=e,this.indeterminate=n!==t&&n>0},e.prototype.syncCheckState=function(e){var t=this.getValueByOption(),n=this.isSameNode(e,t);this.doCheck(n)},e.prototype.doCheck=function(e){this.checked!==e&&(this.config.checkStrictly?this.checked=e:(this.broadcast("check",e),this.setCheckState(e),this.emit("check")))},N(e,[{key:"isDisabled",get:function(){var e=this.data,t=this.parent,n=this.config,i=n.disabled,r=n.checkStrictly;return e[i]||!r&&t&&t.isDisabled}},{key:"isLeaf",get:function(){var e=this.data,t=this.loaded,n=this.hasChildren,i=this.children,r=this.config,s=r.lazy,o=r.leaf;if(s){var a=Object(D["isDef"])(e[o])?e[o]:!!t&&!i.length;return this.hasChildren=!a,a}return!n}}]),e}(),M=j;function $(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var R=function e(t,n){return t.reduce((function(t,i){return i.isLeaf?t.push(i):(!n&&t.push(i),t=t.concat(e(i.children,n))),t}),[])},L=function(){function e(t,n){$(this,e),this.config=n,this.initNodes(t)}return e.prototype.initNodes=function(e){var t=this;e=Object(m["coerceTruthyValueToArray"])(e),this.nodes=e.map((function(e){return new M(e,t.config)})),this.flattedNodes=this.getFlattedNodes(!1,!1),this.leafNodes=this.getFlattedNodes(!0,!1)},e.prototype.appendNode=function(e,t){var n=new M(e,this.config,t),i=t?t.children:this.nodes;i.push(n)},e.prototype.appendNodes=function(e,t){var n=this;e=Object(m["coerceTruthyValueToArray"])(e),e.forEach((function(e){return n.appendNode(e,t)}))},e.prototype.getNodes=function(){return this.nodes},e.prototype.getFlattedNodes=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e?this.leafNodes:this.flattedNodes;return t?n:R(this.nodes,e)},e.prototype.getNodeByValue=function(e){var t=this.getFlattedNodes(!1,!this.config.lazy).filter((function(t){return Object(m["valueEquals"])(t.path,e)||t.value===e}));return t&&t.length?t[0]:null},e}(),F=L,V=n(9),B=n.n(V),z=n(40),q=n.n(z),U=n(31),H=n.n(U),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},K=q.a.keys,G={expandTrigger:"click",multiple:!1,checkStrictly:!1,emitPath:!0,lazy:!1,lazyLoad:m["noop"],value:"value",label:"label",children:"children",leaf:"leaf",disabled:"disabled",hoverThreshold:500},Y=function(e){return!e.getAttribute("aria-owns")},Q=function(e,t){var n=e.parentNode;if(n){var i=n.querySelectorAll('.el-cascader-node[tabindex="-1"]'),r=Array.prototype.indexOf.call(i,e);return i[r+t]||null}return null},X=function(e,t){if(e){var n=e.id.split("-");return Number(n[n.length-2])}},J=function(e){e&&(e.focus(),!Y(e)&&e.click())},Z=function(e){if(e){var t=e.querySelector("input");t?t.click():Y(e)&&e.click()}},ee={name:"ElCascaderPanel",components:{CascaderMenu:I},props:{value:{},options:Array,props:Object,border:{type:Boolean,default:!0},renderLabel:Function},provide:function(){return{panel:this}},data:function(){return{checkedValue:null,checkedNodePaths:[],store:[],menus:[],activePath:[],loadCount:0}},computed:{config:function(){return B()(W({},G),this.props||{})},multiple:function(){return this.config.multiple},checkStrictly:function(){return this.config.checkStrictly},leafOnly:function(){return!this.checkStrictly},isHoverMenu:function(){return"hover"===this.config.expandTrigger},renderLabelFn:function(){return this.renderLabel||this.$scopedSlots.default}},watch:{options:{handler:function(){this.initStore()},immediate:!0,deep:!0},value:function(){this.syncCheckedValue(),this.checkStrictly&&this.calculateCheckedNodePaths()},checkedValue:function(e){Object(m["isEqual"])(e,this.value)||(this.checkStrictly&&this.calculateCheckedNodePaths(),this.$emit("input",e),this.$emit("change",e))}},mounted:function(){this.isEmptyValue(this.value)||this.syncCheckedValue()},methods:{initStore:function(){var e=this.config,t=this.options;e.lazy&&Object(m["isEmpty"])(t)?this.lazyLoad():(this.store=new F(t,e),this.menus=[this.store.getNodes()],this.syncMenuState())},syncCheckedValue:function(){var e=this.value,t=this.checkedValue;Object(m["isEqual"])(e,t)||(this.activePath=[],this.checkedValue=e,this.syncMenuState())},syncMenuState:function(){var e=this.multiple,t=this.checkStrictly;this.syncActivePath(),e&&this.syncMultiCheckState(),t&&this.calculateCheckedNodePaths(),this.$nextTick(this.scrollIntoView)},syncMultiCheckState:function(){var e=this,t=this.getFlattedNodes(this.leafOnly);t.forEach((function(t){t.syncCheckState(e.checkedValue)}))},isEmptyValue:function(e){var t=this.multiple,n=this.config,i=n.emitPath;return!(!t&&!i)&&Object(m["isEmpty"])(e)},syncActivePath:function(){var e=this,t=this.store,n=this.multiple,i=this.activePath,r=this.checkedValue;if(Object(m["isEmpty"])(i))if(this.isEmptyValue(r))this.activePath=[],this.menus=[t.getNodes()];else{var s=n?r[0]:r,o=this.getNodeByValue(s)||{},a=(o.pathNodes||[]).slice(0,-1);this.expandNodes(a)}else{var l=i.map((function(t){return e.getNodeByValue(t.getValue())}));this.expandNodes(l)}},expandNodes:function(e){var t=this;e.forEach((function(e){return t.handleExpand(e,!0)}))},calculateCheckedNodePaths:function(){var e=this,t=this.checkedValue,n=this.multiple,i=n?Object(m["coerceTruthyValueToArray"])(t):[t];this.checkedNodePaths=i.map((function(t){var n=e.getNodeByValue(t);return n?n.pathNodes:[]}))},handleKeyDown:function(e){var t=e.target,n=e.keyCode;switch(n){case K.up:var i=Q(t,-1);J(i);break;case K.down:var r=Q(t,1);J(r);break;case K.left:var s=this.$refs.menu[X(t)-1];if(s){var o=s.$el.querySelector('.el-cascader-node[aria-expanded="true"]');J(o)}break;case K.right:var a=this.$refs.menu[X(t)+1];if(a){var l=a.$el.querySelector('.el-cascader-node[tabindex="-1"]');J(l)}break;case K.enter:Z(t);break;case K.esc:case K.tab:this.$emit("close");break;default:return}},handleExpand:function(e,t){var n=this.activePath,i=e.level,r=n.slice(0,i-1),s=this.menus.slice(0,i);if(e.isLeaf||(r.push(e),s.push(e.children)),this.activePath=r,this.menus=s,!t){var o=r.map((function(e){return e.getValue()})),a=n.map((function(e){return e.getValue()}));Object(m["valueEquals"])(o,a)||(this.$emit("active-item-change",o),this.$emit("expand-change",o))}},handleCheckChange:function(e){this.checkedValue=e},lazyLoad:function(e,t){var n=this,i=this.config;e||(e=e||{root:!0,level:0},this.store=new F([],i),this.menus=[this.store.getNodes()]),e.loading=!0;var r=function(i){var r=e.root?null:e;if(i&&i.length&&n.store.appendNodes(i,r),e.loading=!1,e.loaded=!0,Array.isArray(n.checkedValue)){var s=n.checkedValue[n.loadCount++],o=n.config.value,a=n.config.leaf;if(Array.isArray(i)&&i.filter((function(e){return e[o]===s})).length>0){var l=n.store.getNodeByValue(s);l.data[a]||n.lazyLoad(l,(function(){n.handleExpand(l)})),n.loadCount===n.checkedValue.length&&n.$parent.computePresentText()}}t&&t(i)};i.lazyLoad(e,r)},calculateMultiCheckedValue:function(){this.checkedValue=this.getCheckedNodes(this.leafOnly).map((function(e){return e.getValueByOption()}))},scrollIntoView:function(){if(!this.$isServer){var e=this.$refs.menu||[];e.forEach((function(e){var t=e.$el;if(t){var n=t.querySelector(".el-scrollbar__wrap"),i=t.querySelector(".el-cascader-node.is-active")||t.querySelector(".el-cascader-node.in-active-path");H()(n,i)}}))}},getNodeByValue:function(e){return this.store.getNodeByValue(e)},getFlattedNodes:function(e){var t=!this.config.lazy;return this.store.getFlattedNodes(e,t)},getCheckedNodes:function(e){var t=this.checkedValue,n=this.multiple;if(n){var i=this.getFlattedNodes(e);return i.filter((function(e){return e.checked}))}return this.isEmptyValue(t)?[]:[this.getNodeByValue(t)]},clearCheckedNodes:function(){var e=this.config,t=this.leafOnly,n=e.multiple,i=e.emitPath;n?(this.getCheckedNodes(t).filter((function(e){return!e.isDisabled})).forEach((function(e){return e.doCheck(!1)})),this.calculateMultiCheckedValue()):this.checkedValue=i?[]:null}}},te=ee,ne=Object(b["a"])(te,i,r,!1,null,null,null);ne.options.__file="packages/cascader-panel/src/cascader-panel.vue";var ie=ne.exports;ie.install=function(e){e.component(ie.name,ie)};t["default"]=ie},6:function(e,t){e.exports=n("6b7c")},9:function(e,t){e.exports=n("7f4d")}})},4840:function(e,t,n){var i=n("825a"),r=n("5087"),s=n("b622"),o=s("species");e.exports=function(e,t){var n,s=i(e).constructor;return void 0===s||void 0==(n=i(s)[o])?t:r(n)}},"485a":function(e,t,n){var i=n("da84"),r=n("c65b"),s=n("1626"),o=n("861d"),a=i.TypeError;e.exports=function(e,t){var n,i;if("string"===t&&s(n=e.toString)&&!o(i=r(n,e)))return i;if(s(n=e.valueOf)&&!o(i=r(n,e)))return i;if("string"!==t&&s(n=e.toString)&&!o(i=r(n,e)))return i;throw a("Can't convert object to primitive value")}},4897:function(e,t,n){"use strict";t.__esModule=!0,t.i18n=t.use=t.t=void 0;var i=n("f0d9"),r=h(i),s=n("2b0e"),o=h(s),a=n("3c4e"),l=h(a),c=n("9d7e"),u=h(c);function h(e){return e&&e.__esModule?e:{default:e}}var d=(0,u.default)(o.default),f=r.default,p=!1,m=function(){var e=Object.getPrototypeOf(this||o.default).$t;if("function"===typeof e&&o.default.locale)return p||(p=!0,o.default.locale(o.default.config.lang,(0,l.default)(f,o.default.locale(o.default.config.lang)||{},{clone:!0}))),e.apply(this,arguments)},g=t.t=function(e,t){var n=m.apply(this,arguments);if(null!==n&&void 0!==n)return n;for(var i=e.split("."),r=f,s=0,o=i.length;s<o;s++){var a=i[s];if(n=r[a],s===o-1)return d(n,t);if(!n)return"";r=n}return""},v=t.use=function(e){f=e||f},y=t.i18n=function(e){m=e||m};t.default={use:v,t:g,i18n:y}},4930:function(e,t,n){var i=n("2d00"),r=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!r((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},"4b26":function(e,t,n){"use strict";t.__esModule=!0;var i=n("2b0e"),r=o(i),s=n("5924");function o(e){return e&&e.__esModule?e:{default:e}}var a=!1,l=!1,c=void 0,u=function(){if(!r.default.prototype.$isServer){var e=d.modalDom;return e?a=!0:(a=!1,e=document.createElement("div"),d.modalDom=e,e.addEventListener("touchmove",(function(e){e.preventDefault(),e.stopPropagation()})),e.addEventListener("click",(function(){d.doOnModalClick&&d.doOnModalClick()}))),e}},h={},d={modalFade:!0,getInstance:function(e){return h[e]},register:function(e,t){e&&t&&(h[e]=t)},deregister:function(e){e&&(h[e]=null,delete h[e])},nextZIndex:function(){return d.zIndex++},modalStack:[],doOnModalClick:function(){var e=d.modalStack[d.modalStack.length-1];if(e){var t=d.getInstance(e.id);t&&t.closeOnClickModal&&t.close()}},openModal:function(e,t,n,i,o){if(!r.default.prototype.$isServer&&e&&void 0!==t){this.modalFade=o;for(var l=this.modalStack,c=0,h=l.length;c<h;c++){var d=l[c];if(d.id===e)return}var f=u();if((0,s.addClass)(f,"v-modal"),this.modalFade&&!a&&(0,s.addClass)(f,"v-modal-enter"),i){var p=i.trim().split(/\s+/);p.forEach((function(e){return(0,s.addClass)(f,e)}))}setTimeout((function(){(0,s.removeClass)(f,"v-modal-enter")}),200),n&&n.parentNode&&11!==n.parentNode.nodeType?n.parentNode.appendChild(f):document.body.appendChild(f),t&&(f.style.zIndex=t),f.tabIndex=0,f.style.display="",this.modalStack.push({id:e,zIndex:t,modalClass:i})}},closeModal:function(e){var t=this.modalStack,n=u();if(t.length>0){var i=t[t.length-1];if(i.id===e){if(i.modalClass){var r=i.modalClass.trim().split(/\s+/);r.forEach((function(e){return(0,s.removeClass)(n,e)}))}t.pop(),t.length>0&&(n.style.zIndex=t[t.length-1].zIndex)}else for(var o=t.length-1;o>=0;o--)if(t[o].id===e){t.splice(o,1);break}}0===t.length&&(this.modalFade&&(0,s.addClass)(n,"v-modal-leave"),setTimeout((function(){0===t.length&&(n.parentNode&&n.parentNode.removeChild(n),n.style.display="none",d.modalDom=void 0),(0,s.removeClass)(n,"v-modal-leave")}),200))}};Object.defineProperty(d,"zIndex",{configurable:!0,get:function(){return l||(c=c||(r.default.prototype.$ELEMENT||{}).zIndex||2e3,l=!0),c},set:function(e){c=e}});var f=function(){if(!r.default.prototype.$isServer&&d.modalStack.length>0){var e=d.modalStack[d.modalStack.length-1];if(!e)return;var t=d.getInstance(e.id);return t}};r.default.prototype.$isServer||window.addEventListener("keydown",(function(e){if(27===e.keyCode){var t=f();t&&t.closeOnPressEscape&&(t.handleClose?t.handleClose():t.handleAction?t.handleAction("cancel"):t.close())}})),t.default=d},"4b8b":function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},"4d20":function(e,t,n){var i=n("1917"),r=n("10db"),s=n("6ca1"),o=n("3397"),a=n("9c0e"),l=n("faf5"),c=Object.getOwnPropertyDescriptor;t.f=n("0bad")?c:function(e,t){if(e=s(e),t=o(t,!0),l)try{return c(e,t)}catch(n){}if(a(e,t))return r(!i.f.call(e,t),e[t])}},"4d64":function(e,t,n){var i=n("fc6a"),r=n("23cb"),s=n("07fa"),o=function(e){return function(t,n,o){var a,l=i(t),c=s(l),u=r(o,c);if(e&&n!=n){while(c>u)if(a=l[u++],a!=a)return!0}else for(;c>u;u++)if((e||u in l)&&l[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},"4d88":function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},"4e4b":function(e,t,n){e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=61)}({0:function(e,t,n){"use strict";function i(e,t,n,i,r,s,o,a){var l,c="function"===typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),o?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=l):r&&(l=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,l):[l]}return{exports:e,options:c}}n.d(t,"a",(function(){return i}))},10:function(e,t){e.exports=n("f3ad")},12:function(e,t){e.exports=n("417f")},15:function(e,t){e.exports=n("14e9")},16:function(e,t){e.exports=n("4010")},18:function(e,t){e.exports=n("0e15")},21:function(e,t){e.exports=n("d397")},22:function(e,t){e.exports=n("12f2")},3:function(e,t){e.exports=n("8122")},31:function(e,t){e.exports=n("2a5e")},33:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"el-select-dropdown__item",class:{selected:e.itemSelected,"is-disabled":e.disabled||e.groupDisabled||e.limitReached,hover:e.hover},on:{mouseenter:e.hoverItem,click:function(t){return t.stopPropagation(),e.selectOptionClick(t)}}},[e._t("default",[n("span",[e._v(e._s(e.currentLabel))])])],2)},r=[];i._withStripped=!0;var s=n(4),o=n.n(s),a=n(3),l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c={mixins:[o.a],name:"ElOption",componentName:"ElOption",inject:["select"],props:{value:{required:!0},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},data:function(){return{index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}},computed:{isObject:function(){return"[object object]"===Object.prototype.toString.call(this.value).toLowerCase()},currentLabel:function(){return this.label||(this.isObject?"":this.value)},currentValue:function(){return this.value||this.label||""},itemSelected:function(){return this.select.multiple?this.contains(this.select.value,this.value):this.isEqual(this.value,this.select.value)},limitReached:function(){return!!this.select.multiple&&(!this.itemSelected&&(this.select.value||[]).length>=this.select.multipleLimit&&this.select.multipleLimit>0)}},watch:{currentLabel:function(){this.created||this.select.remote||this.dispatch("ElSelect","setSelected")},value:function(e,t){var n=this.select,i=n.remote,r=n.valueKey;if(!this.created&&!i){if(r&&"object"===("undefined"===typeof e?"undefined":l(e))&&"object"===("undefined"===typeof t?"undefined":l(t))&&e[r]===t[r])return;this.dispatch("ElSelect","setSelected")}}},methods:{isEqual:function(e,t){if(this.isObject){var n=this.select.valueKey;return Object(a["getValueByPath"])(e,n)===Object(a["getValueByPath"])(t,n)}return e===t},contains:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];if(this.isObject){var n=this.select.valueKey;return e&&e.some((function(e){return Object(a["getValueByPath"])(e,n)===Object(a["getValueByPath"])(t,n)}))}return e&&e.indexOf(t)>-1},handleGroupDisabled:function(e){this.groupDisabled=e},hoverItem:function(){this.disabled||this.groupDisabled||(this.select.hoverIndex=this.select.options.indexOf(this))},selectOptionClick:function(){!0!==this.disabled&&!0!==this.groupDisabled&&this.dispatch("ElSelect","handleOptionClick",[this,!0])},queryChange:function(e){this.visible=new RegExp(Object(a["escapeRegexpString"])(e),"i").test(this.currentLabel)||this.created,this.visible||this.select.filteredOptionsCount--}},created:function(){this.select.options.push(this),this.select.cachedOptions.push(this),this.select.optionsCount++,this.select.filteredOptionsCount++,this.$on("queryChange",this.queryChange),this.$on("handleGroupDisabled",this.handleGroupDisabled)},beforeDestroy:function(){var e=this.select,t=e.selected,n=e.multiple,i=n?t:[t],r=this.select.cachedOptions.indexOf(this),s=i.indexOf(this);r>-1&&s<0&&this.select.cachedOptions.splice(r,1),this.select.onOptionDestroy(this.select.options.indexOf(this))}},u=c,h=n(0),d=Object(h["a"])(u,i,r,!1,null,null,null);d.options.__file="packages/select/src/option.vue";t["a"]=d.exports},37:function(e,t){e.exports=n("8bbc")},4:function(e,t){e.exports=n("d010")},5:function(e,t){e.exports=n("e974")},6:function(e,t){e.exports=n("6b7c")},61:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:e.handleClose,expression:"handleClose"}],staticClass:"el-select",class:[e.selectSize?"el-select--"+e.selectSize:""],on:{click:function(t){return t.stopPropagation(),e.toggleMenu(t)}}},[e.multiple?n("div",{ref:"tags",staticClass:"el-select__tags",style:{"max-width":e.inputWidth-32+"px",width:"100%"}},[e.collapseTags&&e.selected.length?n("span",[n("el-tag",{attrs:{closable:!e.selectDisabled,size:e.collapseTagSize,hit:e.selected[0].hitState,type:"info","disable-transitions":""},on:{close:function(t){e.deleteTag(t,e.selected[0])}}},[n("span",{staticClass:"el-select__tags-text"},[e._v(e._s(e.selected[0].currentLabel))])]),e.selected.length>1?n("el-tag",{attrs:{closable:!1,size:e.collapseTagSize,type:"info","disable-transitions":""}},[n("span",{staticClass:"el-select__tags-text"},[e._v("+ "+e._s(e.selected.length-1))])]):e._e()],1):e._e(),e.collapseTags?e._e():n("transition-group",{on:{"after-leave":e.resetInputHeight}},e._l(e.selected,(function(t){return n("el-tag",{key:e.getValueKey(t),attrs:{closable:!e.selectDisabled,size:e.collapseTagSize,hit:t.hitState,type:"info","disable-transitions":""},on:{close:function(n){e.deleteTag(n,t)}}},[n("span",{staticClass:"el-select__tags-text"},[e._v(e._s(t.currentLabel))])])})),1),e.filterable?n("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],ref:"input",staticClass:"el-select__input",class:[e.selectSize?"is-"+e.selectSize:""],style:{"flex-grow":"1",width:e.inputLength/(e.inputWidth-32)+"%","max-width":e.inputWidth-42+"px"},attrs:{type:"text",disabled:e.selectDisabled,autocomplete:e.autoComplete||e.autocomplete},domProps:{value:e.query},on:{focus:e.handleFocus,blur:function(t){e.softFocus=!1},keyup:e.managePlaceholder,keydown:[e.resetInputState,function(t){if(!("button"in t)&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"]))return null;t.preventDefault(),e.navigateOptions("next")},function(t){if(!("button"in t)&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"]))return null;t.preventDefault(),e.navigateOptions("prev")},function(t){return!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.selectOption(t))},function(t){if(!("button"in t)&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"]))return null;t.stopPropagation(),t.preventDefault(),e.visible=!1},function(t){return!("button"in t)&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.deletePrevTag(t)},function(t){if(!("button"in t)&&e._k(t.keyCode,"tab",9,t.key,"Tab"))return null;e.visible=!1}],compositionstart:e.handleComposition,compositionupdate:e.handleComposition,compositionend:e.handleComposition,input:[function(t){t.target.composing||(e.query=t.target.value)},e.debouncedQueryChange]}}):e._e()],1):e._e(),n("el-input",{ref:"reference",class:{"is-focus":e.visible},attrs:{type:"text",placeholder:e.currentPlaceholder,name:e.name,id:e.id,autocomplete:e.autoComplete||e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,tabindex:e.multiple&&e.filterable?"-1":null},on:{focus:e.handleFocus,blur:e.handleBlur,input:e.debouncedOnInputChange},nativeOn:{keydown:[function(t){if(!("button"in t)&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"]))return null;t.stopPropagation(),t.preventDefault(),e.navigateOptions("next")},function(t){if(!("button"in t)&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"]))return null;t.stopPropagation(),t.preventDefault(),e.navigateOptions("prev")},function(t){return!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.selectOption(t))},function(t){if(!("button"in t)&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"]))return null;t.stopPropagation(),t.preventDefault(),e.visible=!1},function(t){if(!("button"in t)&&e._k(t.keyCode,"tab",9,t.key,"Tab"))return null;e.visible=!1}],mouseenter:function(t){e.inputHovering=!0},mouseleave:function(t){e.inputHovering=!1}},model:{value:e.selectedLabel,callback:function(t){e.selectedLabel=t},expression:"selectedLabel"}},[e.$slots.prefix?n("template",{slot:"prefix"},[e._t("prefix")],2):e._e(),n("template",{slot:"suffix"},[n("i",{directives:[{name:"show",rawName:"v-show",value:!e.showClose,expression:"!showClose"}],class:["el-select__caret","el-input__icon","el-icon-"+e.iconClass]}),e.showClose?n("i",{staticClass:"el-select__caret el-input__icon el-icon-circle-close",on:{click:e.handleClearClick}}):e._e()])],2),n("transition",{attrs:{name:"el-zoom-in-top"},on:{"before-enter":e.handleMenuEnter,"after-leave":e.doDestroy}},[n("el-select-menu",{directives:[{name:"show",rawName:"v-show",value:e.visible&&!1!==e.emptyText,expression:"visible && emptyText !== false"}],ref:"popper",attrs:{"append-to-body":e.popperAppendToBody}},[n("el-scrollbar",{directives:[{name:"show",rawName:"v-show",value:e.options.length>0&&!e.loading,expression:"options.length > 0 && !loading"}],ref:"scrollbar",class:{"is-empty":!e.allowCreate&&e.query&&0===e.filteredOptionsCount},attrs:{tag:"ul","wrap-class":"el-select-dropdown__wrap","view-class":"el-select-dropdown__list"}},[e.showNewOption?n("el-option",{attrs:{value:e.query,created:""}}):e._e(),e._t("default")],2),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&0===e.options.length)?[e.$slots.empty?e._t("empty"):n("p",{staticClass:"el-select-dropdown__empty"},[e._v("\n          "+e._s(e.emptyText)+"\n        ")])]:e._e()],2)],1)],1)},r=[];i._withStripped=!0;var s=n(4),o=n.n(s),a=n(22),l=n.n(a),c=n(6),u=n.n(c),h=n(10),d=n.n(h),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"el-select-dropdown el-popper",class:[{"is-multiple":e.$parent.multiple},e.popperClass],style:{minWidth:e.minWidth}},[e._t("default")],2)},p=[];f._withStripped=!0;var m=n(5),g=n.n(m),v={name:"ElSelectDropdown",componentName:"ElSelectDropdown",mixins:[g.a],props:{placement:{default:"bottom-start"},boundariesPadding:{default:0},popperOptions:{default:function(){return{gpuAcceleration:!1}}},visibleArrow:{default:!0},appendToBody:{type:Boolean,default:!0}},data:function(){return{minWidth:""}},computed:{popperClass:function(){return this.$parent.popperClass}},watch:{"$parent.inputWidth":function(){this.minWidth=this.$parent.$el.getBoundingClientRect().width+"px"}},mounted:function(){var e=this;this.referenceElm=this.$parent.$refs.reference.$el,this.$parent.popperElm=this.popperElm=this.$el,this.$on("updatePopper",(function(){e.$parent.visible&&e.updatePopper()})),this.$on("destroyPopper",this.destroyPopper)}},y=v,b=n(0),_=Object(b["a"])(y,f,p,!1,null,null,null);_.options.__file="packages/select/src/select-dropdown.vue";var w=_.exports,C=n(33),x=n(37),k=n.n(x),S=n(15),E=n.n(S),T=n(18),O=n.n(T),I=n(12),D=n.n(I),N=n(16),P=n(31),A=n.n(P),j=n(3),M={data:function(){return{hoverOption:-1}},computed:{optionsAllDisabled:function(){return this.options.filter((function(e){return e.visible})).every((function(e){return e.disabled}))}},watch:{hoverIndex:function(e){var t=this;"number"===typeof e&&e>-1&&(this.hoverOption=this.options[e]||{}),this.options.forEach((function(e){e.hover=t.hoverOption===e}))}},methods:{navigateOptions:function(e){var t=this;if(this.visible){if(0!==this.options.length&&0!==this.filteredOptionsCount&&!this.optionsAllDisabled){"next"===e?(this.hoverIndex++,this.hoverIndex===this.options.length&&(this.hoverIndex=0)):"prev"===e&&(this.hoverIndex--,this.hoverIndex<0&&(this.hoverIndex=this.options.length-1));var n=this.options[this.hoverIndex];!0!==n.disabled&&!0!==n.groupDisabled&&n.visible||this.navigateOptions(e),this.$nextTick((function(){return t.scrollToOption(t.hoverOption)}))}}else this.visible=!0}}},$=n(21),R={mixins:[o.a,u.a,l()("reference"),M],name:"ElSelect",componentName:"ElSelect",inject:{elForm:{default:""},elFormItem:{default:""}},provide:function(){return{select:this}},computed:{_elFormItemSize:function(){return(this.elFormItem||{}).elFormItemSize},readonly:function(){return!this.filterable||this.multiple||!Object(j["isIE"])()&&!Object(j["isEdge"])()&&!this.visible},showClose:function(){var e=this.multiple?Array.isArray(this.value)&&this.value.length>0:void 0!==this.value&&null!==this.value&&""!==this.value,t=this.clearable&&!this.selectDisabled&&this.inputHovering&&e;return t},iconClass:function(){return this.remote&&this.filterable?"":this.visible?"arrow-up is-reverse":"arrow-up"},debounce:function(){return this.remote?300:0},emptyText:function(){return this.loading?this.loadingText||this.t("el.select.loading"):(!this.remote||""!==this.query||0!==this.options.length)&&(this.filterable&&this.query&&this.options.length>0&&0===this.filteredOptionsCount?this.noMatchText||this.t("el.select.noMatch"):0===this.options.length?this.noDataText||this.t("el.select.noData"):null)},showNewOption:function(){var e=this,t=this.options.filter((function(e){return!e.created})).some((function(t){return t.currentLabel===e.query}));return this.filterable&&this.allowCreate&&""!==this.query&&!t},selectSize:function(){return this.size||this._elFormItemSize||(this.$ELEMENT||{}).size},selectDisabled:function(){return this.disabled||(this.elForm||{}).disabled},collapseTagSize:function(){return["small","mini"].indexOf(this.selectSize)>-1?"mini":"small"},propPlaceholder:function(){return"undefined"!==typeof this.placeholder?this.placeholder:this.t("el.select.placeholder")}},components:{ElInput:d.a,ElSelectMenu:w,ElOption:C["a"],ElTag:k.a,ElScrollbar:E.a},directives:{Clickoutside:D.a},props:{name:String,id:String,value:{required:!0},autocomplete:{type:String,default:"off"},autoComplete:{type:String,validator:function(e){return!0}},automaticDropdown:Boolean,size:String,disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:String,remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String,required:!1},defaultFirstOption:Boolean,reserveKeyword:Boolean,valueKey:{type:String,default:"value"},collapseTags:Boolean,popperAppendToBody:{type:Boolean,default:!0}},data:function(){return{options:[],cachedOptions:[],createdLabel:null,createdSelected:!1,selected:this.multiple?[]:{},inputLength:20,inputWidth:0,initialInputHeight:0,cachedPlaceHolder:"",optionsCount:0,filteredOptionsCount:0,visible:!1,softFocus:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,currentPlaceholder:"",menuVisibleOnFocus:!1,isOnComposition:!1,isSilentBlur:!1}},watch:{selectDisabled:function(){var e=this;this.$nextTick((function(){e.resetInputHeight()}))},propPlaceholder:function(e){this.cachedPlaceHolder=this.currentPlaceholder=e},value:function(e,t){this.multiple&&(this.resetInputHeight(),e&&e.length>0||this.$refs.input&&""!==this.query?this.currentPlaceholder="":this.currentPlaceholder=this.cachedPlaceHolder,this.filterable&&!this.reserveKeyword&&(this.query="",this.handleQueryChange(this.query))),this.setSelected(),this.filterable&&!this.multiple&&(this.inputLength=20),Object(j["valueEquals"])(e,t)||this.dispatch("ElFormItem","el.form.change",e)},visible:function(e){var t=this;e?(this.broadcast("ElSelectDropdown","updatePopper"),this.filterable&&(this.query=this.remote?"":this.selectedLabel,this.handleQueryChange(this.query),this.multiple?this.$refs.input.focus():(this.remote||(this.broadcast("ElOption","queryChange",""),this.broadcast("ElOptionGroup","queryChange")),this.selectedLabel&&(this.currentPlaceholder=this.selectedLabel,this.selectedLabel="")))):(this.broadcast("ElSelectDropdown","destroyPopper"),this.$refs.input&&this.$refs.input.blur(),this.query="",this.previousQuery=null,this.selectedLabel="",this.inputLength=20,this.menuVisibleOnFocus=!1,this.resetHoverIndex(),this.$nextTick((function(){t.$refs.input&&""===t.$refs.input.value&&0===t.selected.length&&(t.currentPlaceholder=t.cachedPlaceHolder)})),this.multiple||(this.selected&&(this.filterable&&this.allowCreate&&this.createdSelected&&this.createdLabel?this.selectedLabel=this.createdLabel:this.selectedLabel=this.selected.currentLabel,this.filterable&&(this.query=this.selectedLabel)),this.filterable&&(this.currentPlaceholder=this.cachedPlaceHolder))),this.$emit("visible-change",e)},options:function(){var e=this;if(!this.$isServer){this.$nextTick((function(){e.broadcast("ElSelectDropdown","updatePopper")})),this.multiple&&this.resetInputHeight();var t=this.$el.querySelectorAll("input");-1===[].indexOf.call(t,document.activeElement)&&this.setSelected(),this.defaultFirstOption&&(this.filterable||this.remote)&&this.filteredOptionsCount&&this.checkDefaultFirstOption()}}},methods:{handleComposition:function(e){var t=this,n=e.target.value;if("compositionend"===e.type)this.isOnComposition=!1,this.$nextTick((function(e){return t.handleQueryChange(n)}));else{var i=n[n.length-1]||"";this.isOnComposition=!Object($["isKorean"])(i)}},handleQueryChange:function(e){var t=this;this.previousQuery===e||this.isOnComposition||(null!==this.previousQuery||"function"!==typeof this.filterMethod&&"function"!==typeof this.remoteMethod?(this.previousQuery=e,this.$nextTick((function(){t.visible&&t.broadcast("ElSelectDropdown","updatePopper")})),this.hoverIndex=-1,this.multiple&&this.filterable&&this.$nextTick((function(){var e=15*t.$refs.input.value.length+20;t.inputLength=t.collapseTags?Math.min(50,e):e,t.managePlaceholder(),t.resetInputHeight()})),this.remote&&"function"===typeof this.remoteMethod?(this.hoverIndex=-1,this.remoteMethod(e)):"function"===typeof this.filterMethod?(this.filterMethod(e),this.broadcast("ElOptionGroup","queryChange")):(this.filteredOptionsCount=this.optionsCount,this.broadcast("ElOption","queryChange",e),this.broadcast("ElOptionGroup","queryChange")),this.defaultFirstOption&&(this.filterable||this.remote)&&this.filteredOptionsCount&&this.checkDefaultFirstOption()):this.previousQuery=e)},scrollToOption:function(e){var t=Array.isArray(e)&&e[0]?e[0].$el:e.$el;if(this.$refs.popper&&t){var n=this.$refs.popper.$el.querySelector(".el-select-dropdown__wrap");A()(n,t)}this.$refs.scrollbar&&this.$refs.scrollbar.handleScroll()},handleMenuEnter:function(){var e=this;this.$nextTick((function(){return e.scrollToOption(e.selected)}))},emitChange:function(e){Object(j["valueEquals"])(this.value,e)||this.$emit("change",e)},getOption:function(e){for(var t=void 0,n="[object object]"===Object.prototype.toString.call(e).toLowerCase(),i="[object null]"===Object.prototype.toString.call(e).toLowerCase(),r="[object undefined]"===Object.prototype.toString.call(e).toLowerCase(),s=this.cachedOptions.length-1;s>=0;s--){var o=this.cachedOptions[s],a=n?Object(j["getValueByPath"])(o.value,this.valueKey)===Object(j["getValueByPath"])(e,this.valueKey):o.value===e;if(a){t=o;break}}if(t)return t;var l=n||i||r?"":String(e),c={value:e,currentLabel:l};return this.multiple&&(c.hitState=!1),c},setSelected:function(){var e=this;if(!this.multiple){var t=this.getOption(this.value);return t.created?(this.createdLabel=t.currentLabel,this.createdSelected=!0):this.createdSelected=!1,this.selectedLabel=t.currentLabel,this.selected=t,void(this.filterable&&(this.query=this.selectedLabel))}var n=[];Array.isArray(this.value)&&this.value.forEach((function(t){n.push(e.getOption(t))})),this.selected=n,this.$nextTick((function(){e.resetInputHeight()}))},handleFocus:function(e){this.softFocus?this.softFocus=!1:((this.automaticDropdown||this.filterable)&&(this.visible=!0,this.filterable&&(this.menuVisibleOnFocus=!0)),this.$emit("focus",e))},blur:function(){this.visible=!1,this.$refs.reference.blur()},handleBlur:function(e){var t=this;setTimeout((function(){t.isSilentBlur?t.isSilentBlur=!1:t.$emit("blur",e)}),50),this.softFocus=!1},handleClearClick:function(e){this.deleteSelected(e)},doDestroy:function(){this.$refs.popper&&this.$refs.popper.doDestroy()},handleClose:function(){this.visible=!1},toggleLastOptionHitState:function(e){if(Array.isArray(this.selected)){var t=this.selected[this.selected.length-1];if(t)return!0===e||!1===e?(t.hitState=e,e):(t.hitState=!t.hitState,t.hitState)}},deletePrevTag:function(e){if(e.target.value.length<=0&&!this.toggleLastOptionHitState()){var t=this.value.slice();t.pop(),this.$emit("input",t),this.emitChange(t)}},managePlaceholder:function(){""!==this.currentPlaceholder&&(this.currentPlaceholder=this.$refs.input.value?"":this.cachedPlaceHolder)},resetInputState:function(e){8!==e.keyCode&&this.toggleLastOptionHitState(!1),this.inputLength=15*this.$refs.input.value.length+20,this.resetInputHeight()},resetInputHeight:function(){var e=this;this.collapseTags&&!this.filterable||this.$nextTick((function(){if(e.$refs.reference){var t=e.$refs.reference.$el.childNodes,n=[].filter.call(t,(function(e){return"INPUT"===e.tagName}))[0],i=e.$refs.tags,r=i?Math.round(i.getBoundingClientRect().height):0,s=e.initialInputHeight||40;n.style.height=0===e.selected.length?s+"px":Math.max(i?r+(r>s?6:0):0,s)+"px",e.visible&&!1!==e.emptyText&&e.broadcast("ElSelectDropdown","updatePopper")}}))},resetHoverIndex:function(){var e=this;setTimeout((function(){e.multiple?e.selected.length>0?e.hoverIndex=Math.min.apply(null,e.selected.map((function(t){return e.options.indexOf(t)}))):e.hoverIndex=-1:e.hoverIndex=e.options.indexOf(e.selected)}),300)},handleOptionSelect:function(e,t){var n=this;if(this.multiple){var i=(this.value||[]).slice(),r=this.getValueIndex(i,e.value);r>-1?i.splice(r,1):(this.multipleLimit<=0||i.length<this.multipleLimit)&&i.push(e.value),this.$emit("input",i),this.emitChange(i),e.created&&(this.query="",this.handleQueryChange(""),this.inputLength=20),this.filterable&&this.$refs.input.focus()}else this.$emit("input",e.value),this.emitChange(e.value),this.visible=!1;this.isSilentBlur=t,this.setSoftFocus(),this.visible||this.$nextTick((function(){n.scrollToOption(e)}))},setSoftFocus:function(){this.softFocus=!0;var e=this.$refs.input||this.$refs.reference;e&&e.focus()},getValueIndex:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],n="[object object]"===Object.prototype.toString.call(t).toLowerCase();if(n){var i=this.valueKey,r=-1;return e.some((function(e,n){return Object(j["getValueByPath"])(e,i)===Object(j["getValueByPath"])(t,i)&&(r=n,!0)})),r}return e.indexOf(t)},toggleMenu:function(){this.selectDisabled||(this.menuVisibleOnFocus?this.menuVisibleOnFocus=!1:this.visible=!this.visible,this.visible&&(this.$refs.input||this.$refs.reference).focus())},selectOption:function(){this.visible?this.options[this.hoverIndex]&&this.handleOptionSelect(this.options[this.hoverIndex]):this.toggleMenu()},deleteSelected:function(e){e.stopPropagation();var t=this.multiple?[]:"";this.$emit("input",t),this.emitChange(t),this.visible=!1,this.$emit("clear")},deleteTag:function(e,t){var n=this.selected.indexOf(t);if(n>-1&&!this.selectDisabled){var i=this.value.slice();i.splice(n,1),this.$emit("input",i),this.emitChange(i),this.$emit("remove-tag",t.value)}e.stopPropagation()},onInputChange:function(){this.filterable&&this.query!==this.selectedLabel&&(this.query=this.selectedLabel,this.handleQueryChange(this.query))},onOptionDestroy:function(e){e>-1&&(this.optionsCount--,this.filteredOptionsCount--,this.options.splice(e,1))},resetInputWidth:function(){this.inputWidth=this.$refs.reference.$el.getBoundingClientRect().width},handleResize:function(){this.resetInputWidth(),this.multiple&&this.resetInputHeight()},checkDefaultFirstOption:function(){this.hoverIndex=-1;for(var e=!1,t=this.options.length-1;t>=0;t--)if(this.options[t].created){e=!0,this.hoverIndex=t;break}if(!e)for(var n=0;n!==this.options.length;++n){var i=this.options[n];if(this.query){if(!i.disabled&&!i.groupDisabled&&i.visible){this.hoverIndex=n;break}}else if(i.itemSelected){this.hoverIndex=n;break}}},getValueKey:function(e){return"[object object]"!==Object.prototype.toString.call(e.value).toLowerCase()?e.value:Object(j["getValueByPath"])(e.value,this.valueKey)}},created:function(){var e=this;this.cachedPlaceHolder=this.currentPlaceholder=this.propPlaceholder,this.multiple&&!Array.isArray(this.value)&&this.$emit("input",[]),!this.multiple&&Array.isArray(this.value)&&this.$emit("input",""),this.debouncedOnInputChange=O()(this.debounce,(function(){e.onInputChange()})),this.debouncedQueryChange=O()(this.debounce,(function(t){e.handleQueryChange(t.target.value)})),this.$on("handleOptionClick",this.handleOptionSelect),this.$on("setSelected",this.setSelected)},mounted:function(){var e=this;this.multiple&&Array.isArray(this.value)&&this.value.length>0&&(this.currentPlaceholder=""),Object(N["addResizeListener"])(this.$el,this.handleResize);var t=this.$refs.reference;if(t&&t.$el){var n={medium:36,small:32,mini:28},i=t.$el.querySelector("input");this.initialInputHeight=i.getBoundingClientRect().height||n[this.selectSize]}this.remote&&this.multiple&&this.resetInputHeight(),this.$nextTick((function(){t&&t.$el&&(e.inputWidth=t.$el.getBoundingClientRect().width)})),this.setSelected()},beforeDestroy:function(){this.$el&&this.handleResize&&Object(N["removeResizeListener"])(this.$el,this.handleResize)}},L=R,F=Object(b["a"])(L,i,r,!1,null,null,null);F.options.__file="packages/select/src/select.vue";var V=F.exports;V.install=function(e){e.component(V.name,V)};t["default"]=V}})},"4e71":function(e,t,n){n("e198")("observable")},"4ebc":function(e,t,n){var i=n("4d88");e.exports=Array.isArray||function(e){return"Array"==i(e)}},"4f60":function(e,t,n){"use strict";var i=n("7ded");n.d(t,"a",(function(){return i["a"]}));var r="firebase",s="9.4.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
i["a"].registerVersion(r,s,"app-compat")},5087:function(e,t,n){var i=n("da84"),r=n("68ee"),s=n("0d51"),o=i.TypeError;e.exports=function(e){if(r(e))return e;throw o(s(e)+" is not a constructor")}},"50c4":function(e,t,n){var i=n("5926"),r=Math.min;e.exports=function(e){return e>0?r(i(e),9007199254740991):0}},"511f":function(e,t,n){n("0b99"),n("658f"),e.exports=n("fcd4").f("iterator")},5128:function(e,t,n){"use strict";t.__esModule=!0,t.PopupManager=void 0;var i=n("2b0e"),r=d(i),s=n("7f4d"),o=d(s),a=n("4b26"),l=d(a),c=n("e62d"),u=d(c),h=n("5924");function d(e){return e&&e.__esModule?e:{default:e}}var f=1,p=void 0;t.default={props:{visible:{type:Boolean,default:!1},openDelay:{},closeDelay:{},zIndex:{},modal:{type:Boolean,default:!1},modalFade:{type:Boolean,default:!0},modalClass:{},modalAppendToBody:{type:Boolean,default:!1},lockScroll:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!1}},beforeMount:function(){this._popupId="popup-"+f++,l.default.register(this._popupId,this)},beforeDestroy:function(){l.default.deregister(this._popupId),l.default.closeModal(this._popupId),this.restoreBodyStyle()},data:function(){return{opened:!1,bodyPaddingRight:null,computedBodyPaddingRight:0,withoutHiddenClass:!0,rendered:!1}},watch:{visible:function(e){var t=this;if(e){if(this._opening)return;this.rendered?this.open():(this.rendered=!0,r.default.nextTick((function(){t.open()})))}else this.close()}},methods:{open:function(e){var t=this;this.rendered||(this.rendered=!0);var n=(0,o.default)({},this.$props||this,e);this._closeTimer&&(clearTimeout(this._closeTimer),this._closeTimer=null),clearTimeout(this._openTimer);var i=Number(n.openDelay);i>0?this._openTimer=setTimeout((function(){t._openTimer=null,t.doOpen(n)}),i):this.doOpen(n)},doOpen:function(e){if(!this.$isServer&&(!this.willOpen||this.willOpen())&&!this.opened){this._opening=!0;var t=this.$el,n=e.modal,i=e.zIndex;if(i&&(l.default.zIndex=i),n&&(this._closing&&(l.default.closeModal(this._popupId),this._closing=!1),l.default.openModal(this._popupId,l.default.nextZIndex(),this.modalAppendToBody?void 0:t,e.modalClass,e.modalFade),e.lockScroll)){this.withoutHiddenClass=!(0,h.hasClass)(document.body,"el-popup-parent--hidden"),this.withoutHiddenClass&&(this.bodyPaddingRight=document.body.style.paddingRight,this.computedBodyPaddingRight=parseInt((0,h.getStyle)(document.body,"paddingRight"),10)),p=(0,u.default)();var r=document.documentElement.clientHeight<document.body.scrollHeight,s=(0,h.getStyle)(document.body,"overflowY");p>0&&(r||"scroll"===s)&&this.withoutHiddenClass&&(document.body.style.paddingRight=this.computedBodyPaddingRight+p+"px"),(0,h.addClass)(document.body,"el-popup-parent--hidden")}"static"===getComputedStyle(t).position&&(t.style.position="absolute"),t.style.zIndex=l.default.nextZIndex(),this.opened=!0,this.onOpen&&this.onOpen(),this.doAfterOpen()}},doAfterOpen:function(){this._opening=!1},close:function(){var e=this;if(!this.willClose||this.willClose()){null!==this._openTimer&&(clearTimeout(this._openTimer),this._openTimer=null),clearTimeout(this._closeTimer);var t=Number(this.closeDelay);t>0?this._closeTimer=setTimeout((function(){e._closeTimer=null,e.doClose()}),t):this.doClose()}},doClose:function(){this._closing=!0,this.onClose&&this.onClose(),this.lockScroll&&setTimeout(this.restoreBodyStyle,200),this.opened=!1,this.doAfterClose()},doAfterClose:function(){l.default.closeModal(this._popupId),this._closing=!1},restoreBodyStyle:function(){this.modal&&this.withoutHiddenClass&&(document.body.style.paddingRight=this.bodyPaddingRight,(0,h.removeClass)(document.body,"el-popup-parent--hidden")),this.withoutHiddenClass=!0}}},t.PopupManager=l.default},"512c":function(e,t,n){var i=n("ef08"),r=n("5524"),s=n("9c0c"),o=n("051b"),a=n("9c0e"),l="prototype",c=function(e,t,n){var u,h,d,f=e&c.F,p=e&c.G,m=e&c.S,g=e&c.P,v=e&c.B,y=e&c.W,b=p?r:r[t]||(r[t]={}),_=b[l],w=p?i:m?i[t]:(i[t]||{})[l];for(u in p&&(n=t),n)h=!f&&w&&void 0!==w[u],h&&a(b,u)||(d=h?w[u]:n[u],b[u]=p&&"function"!=typeof w[u]?n[u]:v&&h?s(d,i):y&&w[u]==d?function(e){var t=function(t,n,i){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return e.apply(this,arguments)};return t[l]=e[l],t}(d):g&&"function"==typeof d?s(Function.call,d):d,g&&((b.virtual||(b.virtual={}))[u]=d,e&c.R&&_&&!_[u]&&o(_,u,d)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},"51b0":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return fa})),n.d(t,"b",(function(){return pa})),n.d(t,"c",(function(){return Fn})),n.d(t,"d",(function(){return ya})),n.d(t,"e",(function(){return fl})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return fo})),n.d(t,"h",(function(){return mo})),n.d(t,"i",(function(){return Ca})),n.d(t,"j",(function(){return vl})),n.d(t,"k",(function(){return _l})),n.d(t,"l",(function(){return Ba})),n.d(t,"m",(function(){return qa})),n.d(t,"n",(function(){return al})),n.d(t,"o",(function(){return Ia})),n.d(t,"p",(function(){return yl})),n.d(t,"q",(function(){return bl})),n.d(t,"r",(function(){return kl})),n.d(t,"s",(function(){return Ya})),n.d(t,"t",(function(){return Xa})),n.d(t,"u",(function(){return La})),n.d(t,"v",(function(){return ja})),n.d(t,"w",(function(){return Ma})),n.d(t,"x",(function(){return $a})),n.d(t,"y",(function(){return Ra})),n.d(t,"z",(function(){return Aa})),n.d(t,"A",(function(){return Za})),n.d(t,"B",(function(){return tl})),n.d(t,"C",(function(){return il})),n.d(t,"D",(function(){return sl})),n.d(t,"E",(function(){return xa})),n.d(t,"F",(function(){return ll})),n.d(t,"G",(function(){return _a})),n.d(t,"H",(function(){return wa})),n.d(t,"I",(function(){return ka})),n.d(t,"J",(function(){return El})),n.d(t,"K",(function(){return xl})),n.d(t,"L",(function(){return Sa})),n.d(t,"M",(function(){return Ea})),n.d(t,"N",(function(){return Ta})),n.d(t,"O",(function(){return Ka})),n.d(t,"P",(function(){return Ha})),n.d(t,"Q",(function(){return Oa}));var i=n("589b"),r=n("22e5"),s=n("1fd5"),o=n("e691");const a="@firebase/database",l="0.12.4";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let c="";function u(e){c=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Object(s["O"])(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Object(s["H"])(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Object(s["j"])(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(t){}return new d},p=f("localStorage"),m=f("sessionStorage"),g=new o["b"]("@firebase/database"),v=function(){let e=1;return function(){return e++}}(),y=function(e){const t=Object(s["N"])(e),n=new s["d"];n.update(t);const i=n.digest();return s["g"].encodeByteArray(i)},b=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?t+=b.apply(null,i):t+="object"===typeof i?Object(s["O"])(i):i,t+=" "}return t};let _=null,w=!0;const C=function(e,t){Object(s["e"])(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(g.logLevel=o["a"].VERBOSE,_=g.log.bind(g),t&&m.set("logging_enabled",!0)):"function"===typeof e?_=e:(_=null,m.remove("logging_enabled"))},x=function(...e){if(!0===w&&(w=!1,null===_&&!0===m.get("logging_enabled")&&C(!0)),_){const t=b.apply(null,e);_(t)}},k=function(e){return function(...t){x(e,...t)}},S=function(...e){const t="FIREBASE INTERNAL ERROR: "+b(...e);g.error(t)},E=function(...e){const t="FIREBASE FATAL ERROR: "+b(...e);throw g.error(t),new Error(t)},T=function(...e){const t="FIREBASE WARNING: "+b(...e);g.warn(t)},O=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&T("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},I=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},D=function(e){if(Object(s["C"])()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},N="[MIN_NAME]",P="[MAX_NAME]",A=function(e,t){if(e===t)return 0;if(e===N||t===P)return-1;if(t===N||e===P)return 1;{const n=W(e),i=W(t);return null!==n?null!==i?n-i===0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},j=function(e,t){return e===t?0:e<t?-1:1},M=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Object(s["O"])(t))},$=function(e){if("object"!==typeof e||null===e)return Object(s["O"])(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=Object(s["O"])(t[i]),n+=":",n+=$(e[t[i]]);return n+="}",n},R=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function L(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const F=function(e){Object(s["e"])(!I(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let r,o,a,l,c;0===e?(o=0,a=0,r=1/e===-1/0?1:0):(r=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(e)/Math.LN2),i),o=l+i,a=Math.round(e*Math.pow(2,n-l)-Math.pow(2,n))):(o=0,a=Math.round(e/Math.pow(2,1-i-n))));const u=[];for(c=n;c;c-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(c=t;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(r?1:0),u.reverse();const h=u.join("");let d="";for(c=0;c<64;c+=8){let e=parseInt(h.substr(c,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},V=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},B=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function z(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}const q=new RegExp("^-?(0*)\\d{1,10}$"),U=-2147483648,H=2147483647,W=function(e){if(q.test(e)){const t=Number(e);if(t>=U&&t<=H)return t}return null},K=function(e){try{e()}catch(t){setTimeout(()=>{const e=t.stack||"";throw T("Exception was thrown by user callback.",e),t},Math.floor(0))}},G=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Y=function(e,t){const n=setTimeout(e,t);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Q{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){T(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(x("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',T(e)}}class J{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}J.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z="5",ee="v",te="s",ne="r",ie="f",re=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,se="ls",oe="p",ae="ac",le="websocket",ce="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{constructor(e,t,n,i,r=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return`${e}${this.host}/${t}`}}function he(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function de(e,t,n){let i;if(Object(s["e"])("string"===typeof t,"typeof type must == string"),Object(s["e"])("object"===typeof n,"typeof params must == object"),t===le)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ce)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}he(e)&&(n["ns"]=e.namespace);const r=[];return L(n,(e,t)=>{r.push(e+"="+t)}),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(){this.counters_={}}incrementCounter(e,t=1){Object(s["j"])(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Object(s["m"])(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe={},me={};function ge(e){const t=e.toString();return pe[t]||(pe[t]=new fe),pe[t]}function ve(e,t){const n=e.toString();return me[n]||(me[n]=t()),me[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&K(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="start",_e="close",we="pLPCommand",Ce="pRTLPCB",xe="id",ke="pw",Se="ser",Ee="cb",Te="seg",Oe="ts",Ie="d",De="dframe",Ne=1870,Pe=30,Ae=Ne-Pe,je=25e3,Me=3e4;class $e{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=k(e),this.stats_=ge(t),this.urlFn=e=>(this.appCheckToken&&(e[ae]=this.appCheckToken),de(t,ce,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ye(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Me)),D(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Re((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===be)this.id=n,this.password=i;else{if(t!==_e)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_()}},(...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);const e={};e[be]="t",e[Se]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Ee]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ee]=Z,this.transportSessionId&&(e[te]=this.transportSessionId),this.lastSessionId&&(e[se]=this.lastSessionId),this.applicationId&&(e[oe]=this.applicationId),this.appCheckToken&&(e[ae]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&re.test(location.hostname)&&(e[ne]=ie);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){$e.forceAllow_=!0}static forceDisallow(){$e.forceDisallow_=!0}static isAvailable(){return!Object(s["C"])()&&(!!$e.forceAllow_||!$e.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!V()&&!B())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Object(s["O"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Object(s["i"])(t),i=R(n,Ae);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Object(s["C"])())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[De]="t",n[xe]=e,n[ke]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Object(s["O"])(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Re{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Object(s["C"])())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=v(),window[we+this.uniqueCallbackIdentifier]=e,window[Ce+this.uniqueCallbackIdentifier]=t,this.myIFrame=Re.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(r){x("frame writing exception"),r.stack&&x(r.stack),x(r)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||x("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[xe]=this.myID,e[ke]=this.myPW,e[Se]=this.currentSerial;let t=this.urlFn(e),n="",i=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Pe+n.length<=Ne))break;{const e=this.pendingSegs.shift();n=n+"&"+Te+i+"="+e.seg+"&"+Oe+i+"="+e.ts+"&"+Ie+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(je)),r=()=>{clearTimeout(i),n()};this.addTag(e,r)}addTag(e,t){Object(s["C"])()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{x("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}},Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le=16384,Fe=45e3;let Ve=null;"undefined"!==typeof MozWebSocket?Ve=MozWebSocket:"undefined"!==typeof WebSocket&&(Ve=WebSocket);class Be{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=k(this.connId),this.stats_=ge(t),this.connURL=Be.connectionURL_(t,s,o,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i){const r={};return r[ee]=Z,!Object(s["C"])()&&"undefined"!==typeof location&&location.hostname&&re.test(location.hostname)&&(r[ne]=ie),t&&(r[te]=t),n&&(r[se]=n),i&&(r[ae]=i),de(e,le,r)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{if(Object(s["C"])()){const t=this.nodeAdmin?"AdminNode":"Node",n={headers:{"User-Agent":`Firebase/${Z}/${c}/${e.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(n.headers["Authorization"]="Bearer "+this.authToken),this.appCheckToken&&(n.headers["X-Firebase-AppCheck"]=this.appCheckToken);const i=Object({NODE_ENV:"production",BASE_URL:""}),r=0===this.connURL.indexOf("wss://")?i["HTTPS_PROXY"]||i["https_proxy"]:i["HTTP_PROXY"]||i["http_proxy"];r&&(n["proxy"]={origin:r}),this.mySock=new Ve(this.connURL,[],n)}else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Ve(this.connURL,[],e)}}catch(i){this.log_("Error instantiating WebSocket.");const e=i.message||i.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Be.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Ve&&!Be.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Object(s["H"])(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Object(s["e"])(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Object(s["O"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=R(t,Le);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Fe))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Be.responsesRequiredToBeHealthy=2,Be.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ze{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[$e,Be]}initTransports_(e){const t=Be&&Be["isAvailable"]();let n=t&&!Be.previouslyFailed();if(e.webSocketOnly&&(t||T("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Be];else{const e=this.transports_=[];for(const t of ze.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe=6e4,Ue=5e3,He=10240,We=102400,Ke="t",Ge="d",Ye="s",Qe="r",Xe="e",Je="o",Ze="a",et="n",tt="p",nt="h";class it{constructor(e,t,n,i,r,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=k("c:"+this.id+":"),this.transportManager_=new ze(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const i=e["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=Y(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>We?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>He?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ke in e){const t=e[Ke];t===Ze?this.upgradeIfSecondaryHealthy_():t===Qe?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Je&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=M("t",e),n=M("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ze,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:et,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=M("t",e),n=M("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=M(Ke,e);if(Ge in e){const n=e[Ge];if(t===nt)this.onHandshake_(n);else if(t===et){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ye?this.onConnectionShutdown_(n):t===Qe?this.onReset_(n):t===Xe?S("Server Error: "+n):t===Je?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):S("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Z!==n&&T("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Y(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(qe))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Y(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ue))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.allowedEvents_=e,this.listeners_={},Object(s["e"])(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!n||n===i[r].context))return void i.splice(r,1)}validateEventType_(e){Object(s["e"])(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends st{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||Object(s["A"])()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ot}getInitialEvent(e){return Object(s["e"])("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=32,lt=768;class ct{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ut(){return new ct("")}function ht(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function dt(e){return e.pieces_.length-e.pieceNum_}function ft(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ct(e.pieces_,t)}function pt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function mt(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function gt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function vt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ct(t,0)}function yt(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof ct)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ct(n,0)}function bt(e){return e.pieceNum_>=e.pieces_.length}function _t(e,t){const n=ht(e),i=ht(t);if(null===n)return t;if(n===i)return _t(ft(e),ft(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function wt(e,t){const n=gt(e,0),i=gt(t,0);for(let r=0;r<n.length&&r<i.length;r++){const e=A(n[r],i[r]);if(0!==e)return e}return n.length===i.length?0:n.length<i.length?-1:1}function Ct(e,t){if(dt(e)!==dt(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function xt(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(dt(e)>dt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class kt{constructor(e,t){this.errorPrefix_=t,this.parts_=gt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Object(s["M"])(this.parts_[n]);Tt(this)}}function St(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Object(s["M"])(t),Tt(e)}function Et(e){const t=e.parts_.pop();e.byteLength_-=Object(s["M"])(t),e.parts_.length>0&&(e.byteLength_-=1)}function Tt(e){if(e.byteLength_>lt)throw new Error(e.errorPrefix_+"has a key path longer than "+lt+" bytes ("+e.byteLength_+").");if(e.parts_.length>at)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+at+") or object contains a cycle "+Ot(e))}function Ot(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends st{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new It}getInitialEvent(e){return Object(s["e"])("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=1e3,Nt=3e5,Pt=3e3,At=3e4,jt=1.3,Mt=3e4,$t="server_kill",Rt=3;class Lt extends rt{constructor(e,t,n,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Lt.nextPersistentConnectionId_++,this.log_=k("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Dt,this.maxReconnectDelay_=Nt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Object(s["C"])())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");It.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&ot.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(Object(s["O"])(r)),Object(s["e"])(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new s["a"],n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const i=e["d"];"ok"===e["s"]?(this.onDataUpdate_(n["p"],i,!1,null),t.resolve(i)):t.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const e=this.outstandingGets_[r];void 0!==e&&i===e&&(delete this.outstandingGets_[r],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),t.reject(new Error("Client is offline.")))},Pt),this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),Object(s["e"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Object(s["e"])(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n},s="q";e.tag&&(r["q"]=t._queryObject,r["t"]=e.tag),r["h"]=e.hashFn(),this.sendRequest(s,r,r=>{const s=r["d"],o=r["s"];Lt.warnOnListenWarnings_(s,t);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))})}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&Object(s["j"])(e,"w")){const n=Object(s["L"])(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();T(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at `+n+" to your security rules for better performance.")}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||Object(s["t"])(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=At)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Object(s["G"])(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,t=>{const n=t["s"],i=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),Object(s["e"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const r=this.removeListen_(n,i);r&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},s="n";i&&(r["q"]=n,r["t"]=i),this.sendRequest(s,r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,e=>{i&&setTimeout(()=>{i(e["s"],e["d"])},Math.floor(0))})}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s["h"]=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Object(s["O"])(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):S("Unrecognized action received from server: "+Object(s["O"])(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Object(s["e"])(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Dt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Dt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Mt&&(this.reconnectDelay_=Dt),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Lt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,n())},c=function(e){Object(s["e"])(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[s,l]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?x("getToken() completed but was canceled"):(x("getToken() completed. Creating connection."),this.authToken_=s&&s.accessToken,this.appCheckToken_=l&&l.token,a=new it(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{T(e+" ("+this.repoInfo_.toString()+")"),this.interrupt($t)},r))}catch(S){this.log_("Failed to get token: "+S),o||(this.repoInfo_.nodeAdmin&&T(S),l())}}}interrupt(e){x("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){x("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Object(s["x"])(this.interruptReasons_)&&(this.reconnectDelay_=Dt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>$(e)).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new ct(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){x("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Rt&&(this.reconnectDelay_=At,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){x("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Rt&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Object(s["C"])()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+c.replace(/\./g,"-")]=1,Object(s["A"])()?e["framework.cordova"]=1:Object(s["D"])()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ot.getInstance().currentlyOnline();return Object(s["x"])(this.interruptReasons_)&&e}}Lt.nextPersistentConnectionId_=0,Lt.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ft{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ft(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Ft(N,e),i=new Ft(N,t);return 0!==this.compare(n,i)}minPost(){return Ft.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bt;class zt extends Vt{static get __EMPTY_NODE(){return Bt}static set __EMPTY_NODE(e){Bt=e}compare(e,t){return A(e.name,t.name)}isDefinedOn(e){throw Object(s["f"])("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ft.MIN}maxPost(){return new Ft(P,Bt)}makePost(e,t){return Object(s["e"])("string"===typeof e,"KeyIndex indexValue must always be a string."),new Ft(e,Bt)}toString(){return".key"}}const qt=new zt;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;while(!e.isEmpty())if(e=e,s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ht{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Ht.RED,this.left=null!=i?i:Kt.EMPTY_NODE,this.right=null!=r?r:Kt.EMPTY_NODE}copy(e,t,n,i,r){return new Ht(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Kt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Kt.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ht.RED=!0,Ht.BLACK=!1;class Wt{copy(e,t,n,i,r){return this}insert(e,t,n){return new Ht(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Kt{constructor(e,t=Kt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Kt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ht.BLACK,null,null))}remove(e){return new Kt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ht.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ut(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ut(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ut(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ut(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gt(e,t){return A(e.name,t.name)}function Yt(e,t){return A(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qt;function Xt(e){Qt=e}Kt.EMPTY_NODE=new Wt;const Jt=function(e){return"number"===typeof e?"number:"+F(e):"string:"+e},Zt=function(e){if(e.isLeafNode()){const t=e.val();Object(s["e"])("string"===typeof t||"number"===typeof t||"object"===typeof t&&Object(s["j"])(t,".sv"),"Priority must be a string or number.")}else Object(s["e"])(e===Qt||e.isEmpty(),"priority of unexpected type.");Object(s["e"])(e===Qt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let en,tn,nn;class rn{constructor(e,t=rn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Object(s["e"])(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Zt(this.priorityNode_)}static set __childrenNodeConstructor(e){en=e}static get __childrenNodeConstructor(){return en}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new rn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return bt(e)?this:".priority"===ht(e)?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:rn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ht(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Object(s["e"])(".priority"!==n||1===dt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,rn.__childrenNodeConstructor.EMPTY_NODE.updateChild(ft(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?F(this.value_):this.value_,this.lazyHash_=y(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===rn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof rn.__childrenNodeConstructor?-1:(Object(s["e"])(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=rn.VALUE_TYPE_ORDER.indexOf(t),r=rn.VALUE_TYPE_ORDER.indexOf(n);return Object(s["e"])(i>=0,"Unknown leaf type: "+t),Object(s["e"])(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function sn(e){tn=e}function on(e){nn=e}rn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class an extends Vt{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?A(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ft.MIN}maxPost(){return new Ft(P,new rn("[PRIORITY-POST]",nn))}makePost(e,t){const n=tn(e);return new Ft(t,new rn("[PRIORITY-POST]",n))}toString(){return".priority"}}const ln=new an,cn=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){const t=e=>parseInt(Math.log(e)/cn,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=n(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const hn=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Ht(a,o.node,Ht.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=r(t,l),u=r(l+1,i);return o=e[l],a=n?n(o):o,new Ht(a,o.node,Ht.BLACK,c,u)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const c=r(s+1,a),u=e[s],h=n?n(u):u;l(new Ht(h,u.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Ht.BLACK):(a(i,Ht.BLACK),a(i,Ht.RED))}return s},o=new un(e.length),a=s(o);return new Kt(i||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dn;const fn={};class pn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Object(s["e"])(fn&&ln,"ChildrenNode.ts has not been loaded"),dn=dn||new pn({".priority":fn},{".priority":ln}),dn}get(e){const t=Object(s["L"])(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Kt?t:null}hasIndex(e){return Object(s["j"])(this.indexSet_,e.toString())}addIndex(e,t){Object(s["e"])(e!==qt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(Ft.Wrap);let o,a=r.getNext();while(a)i=i||e.isDefinedOn(a.node),n.push(a),a=r.getNext();o=i?hn(n,e.getCompare()):fn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=o,new pn(u,c)}addToIndexes(e,t){const n=Object(s["I"])(this.indexes_,(n,i)=>{const r=Object(s["L"])(this.indexSet_,i);if(Object(s["e"])(r,"Missing index implementation for "+i),n===fn){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(Ft.Wrap);let s=i.getNext();while(s)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),hn(n,r.getCompare())}return fn}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new Ft(e.name,i))),r.insert(e,e.node)}});return new pn(n,this.indexSet_)}removeFromIndexes(e,t){const n=Object(s["I"])(this.indexes_,n=>{if(n===fn)return n;{const i=t.get(e.name);return i?n.remove(new Ft(e.name,i)):n}});return new pn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mn;class gn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Zt(this.priorityNode_),this.children_.isEmpty()&&Object(s["e"])(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return mn||(mn=new gn(new Kt(Yt),null,pn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||mn}updatePriority(e){return this.children_.isEmpty()?this:new gn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?mn:t}}getChild(e){const t=ht(e);return null===t?this:this.getImmediateChild(t).getChild(ft(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Object(s["e"])(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Ft(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?mn:this.priorityNode_;return new gn(i,s,r)}}updateChild(e,t){const n=ht(e);if(null===n)return t;{Object(s["e"])(".priority"!==ht(e)||1===dt(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(ft(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(ln,(s,o)=>{t[s]=o.val(e),n++,r&&gn.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1}),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jt(this.getPriority().val())+":"),this.forEachChild(ln,(t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)}),this.lazyHash_=""===e?"":y(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Ft(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ft(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ft(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{const n=this.children_.getIteratorFrom(e.name,Ft.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{const n=this.children_.getReverseIteratorFrom(e.name,Ft.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)>0)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===yn?-1:0}withIndex(e){if(e===qt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new gn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===qt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(ln),n=t.getIterator(ln);let i=e.getNext(),r=n.getNext();while(i&&r){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===qt?null:this.indexMap_.get(e.toString())}}gn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class vn extends gn{constructor(){super(new Kt(Yt),gn.EMPTY_NODE,pn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return gn.EMPTY_NODE}isEmpty(){return!1}}const yn=new vn;Object.defineProperties(Ft,{MIN:{value:new Ft(N,gn.EMPTY_NODE)},MAX:{value:new Ft(P,yn)}}),zt.__EMPTY_NODE=gn.EMPTY_NODE,rn.__childrenNodeConstructor=gn,Xt(yn),on(yn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bn=!0;function _n(e,t=null){if(null===e)return gn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),Object(s["e"])(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new rn(n,_n(t))}if(e instanceof Array||!bn){let n=gn.EMPTY_NODE;return L(e,(t,i)=>{if(Object(s["j"])(e,t)&&"."!==t.substring(0,1)){const e=_n(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}}),n.updatePriority(_n(t))}{const n=[];let i=!1;const r=e;if(L(r,(e,t)=>{if("."!==e.substring(0,1)){const r=_n(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Ft(e,r)))}}),0===n.length)return gn.EMPTY_NODE;const s=hn(n,Gt,e=>e.name,Yt);if(i){const e=hn(n,ln.getCompare());return new gn(s,_n(t),new pn({".priority":e},{".priority":ln}))}return new gn(s,_n(t),pn.Default)}}sn(_n);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wn extends Vt{constructor(e){super(),this.indexPath_=e,Object(s["e"])(!bt(e)&&".priority"!==ht(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?A(e.name,t.name):r}makePost(e,t){const n=_n(e),i=gn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ft(t,i)}maxPost(){const e=gn.EMPTY_NODE.updateChild(this.indexPath_,yn);return new Ft(P,e)}toString(){return gt(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Vt{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?A(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ft.MIN}maxPost(){return Ft.MAX}makePost(e,t){const n=_n(e);return new Ft(t,n)}toString(){return".value"}}const xn=new Cn,kn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Sn="-",En="z",Tn=786,On=function(){let e=0;const t=[];return function(n){const i=n===e;let r;e=n;const o=new Array(8);for(r=7;r>=0;r--)o[r]=kn.charAt(n%64),n=Math.floor(n/64);Object(s["e"])(0===n,"Cannot push at time == 0");let a=o.join("");if(i){for(r=11;r>=0&&63===t[r];r--)t[r]=0;t[r]++}else for(r=0;r<12;r++)t[r]=Math.floor(64*Math.random());for(r=0;r<12;r++)a+=kn.charAt(t[r]);return Object(s["e"])(20===a.length,"nextPushId: Length should be 20."),a}}(),In=function(e){if(e===""+H)return Sn;const t=W(e);if(null!=t)return""+(t+1);const n=new Array(e.length);for(let o=0;o<n.length;o++)n[o]=e.charAt(o);if(n.length<Tn)return n.push(Sn),n.join("");let i=n.length-1;while(i>=0&&n[i]===En)i--;if(-1===i)return P;const r=n[i],s=kn.charAt(kn.indexOf(r)+1);return n[i]=s,n.slice(0,i+1).join("")},Dn=function(e){if(e===""+U)return N;const t=W(e);if(null!=t)return""+(t-1);const n=new Array(e.length);for(let i=0;i<n.length;i++)n[i]=e.charAt(i);return n[n.length-1]===Sn?1===n.length?""+H:(delete n[n.length-1],n.join("")):(n[n.length-1]=kn.charAt(kn.indexOf(n[n.length-1])-1),n.join("")+En.repeat(Tn-n.length))};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nn(e){return{type:"value",snapshotNode:e}}function Pn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function An(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function jn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Mn(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.index_=e}updateChild(e,t,n,i,r,o){Object(s["e"])(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(n.getChild(i))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(An(t,a)):Object(s["e"])(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Pn(t,n)):o.trackChildChange(jn(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(ln,(e,i)=>{t.hasChild(e)||n.trackChildChange(An(e,i))}),t.isLeafNode()||t.forEachChild(ln,(t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(jn(t,i,r))}else n.trackChildChange(Pn(t,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?gn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.indexedFilter_=new $n(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Rn.getStartPost_(e),this.endPost_=Rn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,i,r,s){return this.matches(new Ft(t,n))||(n=gn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=gn.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(gn.EMPTY_NODE);const r=this;return t.forEachChild(ln,(e,t)=>{r.matches(new Ft(e,t))||(i=i.updateImmediateChild(e,gn.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.rangedFilter_=new Rn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new Ft(t,n))||(n=gn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=gn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=gn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();let r;if(r=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!r)break;i=i.updateImmediateChild(t.name,t.node),n++}}else{let e,n,r,s;if(i=t.withIndex(this.index_),i=i.updatePriority(gn.EMPTY_NODE),this.reverse_){s=i.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();r=(e,n)=>t(n,e)}else s=i.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),r=this.index_.getCompare();let o=0,a=!1;while(s.hasNext()){const t=s.getNext();!a&&r(e,t)<=0&&(a=!0);const l=a&&o<this.limit_&&r(t,n)<=0;l?o++:i=i.updateImmediateChild(t.name,gn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;Object(s["e"])(a.numChildren()===this.limit_,"");const l=new Ft(t,n),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const e=a.getImmediateChild(t);let s=i.getChildAfterChild(this.index_,c,this.reverse_);while(null!=s&&(s.name===t||a.hasChild(s.name)))s=i.getChildAfterChild(this.index_,s,this.reverse_);const h=null==s?1:o(s,l),d=u&&!n.isEmpty()&&h>=0;if(d)return null!=r&&r.trackChildChange(jn(t,n,e)),a.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(An(t,e));const n=a.updateImmediateChild(t,gn.EMPTY_NODE),i=null!=s&&this.rangedFilter_.matches(s);return i?(null!=r&&r.trackChildChange(Pn(s.name,s.node)),n.updateImmediateChild(s.name,s.node)):n}}return n.isEmpty()?e:u&&o(c,l)>=0?(null!=r&&(r.trackChildChange(An(c.name,c.node)),r.trackChildChange(Pn(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(c.name,gn.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ln}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Object(s["e"])(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Object(s["e"])(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:N}hasEnd(){return this.endSet_}getIndexEndValue(){return Object(s["e"])(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Object(s["e"])(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:P}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Object(s["e"])(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ln}copy(){const e=new Fn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Vn(e){return e.loadsAllData()?new $n(e.getIndex()):e.hasLimit()?new Ln(e):new Rn(e)}function Bn(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="l",n}function zn(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="r",n}function qn(e,t,n){const i=e.copy();return i.startSet_=!0,void 0===t&&(t=null),i.indexStartValue_=t,null!=n?(i.startNameSet_=!0,i.indexStartName_=n):(i.startNameSet_=!1,i.indexStartName_=""),i}function Un(e,t,n){let i;if(e.index_===qt)"string"===typeof t&&(t=In(t)),i=qn(e,t,n);else{let r;r=null==n?P:In(n),i=qn(e,t,r)}return i.startAfterSet_=!0,i}function Hn(e,t,n){const i=e.copy();return i.endSet_=!0,void 0===t&&(t=null),i.indexEndValue_=t,void 0!==n?(i.endNameSet_=!0,i.indexEndName_=n):(i.endNameSet_=!1,i.indexEndName_=""),i}function Wn(e,t,n){let i,r;return e.index_===qt?("string"===typeof t&&(t=Dn(t)),r=Hn(e,t,n)):(i=null==n?N:Dn(n),r=Hn(e,t,i)),r.endBeforeSet_=!0,r}function Kn(e,t){const n=e.copy();return n.index_=t,n}function Gn(e){const t={};if(e.isDefault())return t;let n;return e.index_===ln?n="$priority":e.index_===xn?n="$value":e.index_===qt?n="$key":(Object(s["e"])(e.index_ instanceof wn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=Object(s["O"])(n),e.startSet_&&(t["startAt"]=Object(s["O"])(e.indexStartValue_),e.startNameSet_&&(t["startAt"]+=","+Object(s["O"])(e.indexStartName_))),e.endSet_&&(t["endAt"]=Object(s["O"])(e.indexEndValue_),e.endNameSet_&&(t["endAt"]+=","+Object(s["O"])(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Yn(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_)),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_)),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==ln&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends rt{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=k("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Object(s["e"])(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Qn.getListenId_(e,n),a={};this.listens_[o]=a;const l=Gn(e._queryParams);this.restRequest_(r+".json",l,(e,t)=>{let l=t;if(404===e&&(l=null,e=null),null===e&&this.onDataUpdate_(r,l,!1,n),Object(s["L"])(this.listens_,o)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}})}unlisten(e,t){const n=Qn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Gn(e._queryParams),n=e._path.toString(),i=new s["a"];return this.restRequest_(n+".json",t,(e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t["auth"]=i.accessToken),r&&r.token&&(t["ac"]=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Object(s["J"])(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=Object(s["H"])(a.responseText)}catch(e){T("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&T("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(){this.rootNode_=gn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(){return{value:null,children:new Map}}function Zn(e,t,n){if(bt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=ht(t);e.children.has(i)||e.children.set(i,Jn());const r=e.children.get(i);t=ft(t),Zn(r,t,n)}}function ei(e,t){if(bt(t))return e.value=null,e.children.clear(),!0;if(null!==e.value){if(e.value.isLeafNode())return!1;{const n=e.value;return e.value=null,n.forEachChild(ln,(t,n)=>{Zn(e,new ct(t),n)}),ei(e,t)}}if(e.children.size>0){const n=ht(t);if(t=ft(t),e.children.has(n)){const i=ei(e.children.get(n),t);i&&e.children.delete(n)}return 0===e.children.size}return!0}function ti(e,t,n){null!==e.value?n(t,e.value):ni(e,(e,i)=>{const r=new ct(t.toString()+"/"+e);ti(i,r,n)})}function ni(e,t){e.children.forEach((e,n)=>{t(n,e)})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&L(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=1e4,si=3e4,oi=3e5;class ai{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new ii(e);const n=ri+(si-ri)*Math.random();Y(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;L(e,(e,i)=>{i>0&&Object(s["j"])(this.statsToReport_,e)&&(t[e]=i,n=!0)}),n&&this.server_.reportStats(t),Y(this.reportStats_.bind(this),Math.floor(2*Math.random()*oi))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var li;function ci(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ui(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function hi(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(li||(li={}));class di{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=li.ACK_USER_WRITE,this.source=ci()}operationForChild(e){if(bt(this.path)){if(null!=this.affectedTree.value)return Object(s["e"])(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ct(e));return new di(ut(),t,this.revert)}}return Object(s["e"])(ht(this.path)===e,"operationForChild called for unrelated child."),new di(ft(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t){this.source=e,this.path=t,this.type=li.LISTEN_COMPLETE}operationForChild(e){return bt(this.path)?new fi(this.source,ut()):new fi(this.source,ft(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=li.OVERWRITE}operationForChild(e){return bt(this.path)?new pi(this.source,ut(),this.snap.getImmediateChild(e)):new pi(this.source,ft(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=li.MERGE}operationForChild(e){if(bt(this.path)){const t=this.children.subtree(new ct(e));return t.isEmpty()?null:t.value?new pi(this.source,ut(),t.value):new mi(this.source,ut(),t)}return Object(s["e"])(ht(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new mi(this.source,ft(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(bt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ht(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function yi(e,t,n,i){const r=[],s=[];return t.forEach(t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push(Mn(t.childName,t.snapshotNode))}),bi(e,r,"child_removed",t,i,n),bi(e,r,"child_added",t,i,n),bi(e,r,"child_moved",s,i,n),bi(e,r,"child_changed",t,i,n),bi(e,r,"value",t,i,n),r}function bi(e,t,n,i,r,s){const o=i.filter(e=>e.type===n);o.sort((t,n)=>wi(e,t,n)),o.forEach(n=>{const i=_i(e,n,s);r.forEach(r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))})})}function _i(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function wi(e,t,n){if(null==t.childName||null==n.childName)throw Object(s["f"])("Should only compare child_ events.");const i=new Ft(t.childName,t.snapshotNode),r=new Ft(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(e,t){return{eventCache:e,serverCache:t}}function xi(e,t,n,i){return Ci(new gi(t,n,i),e.serverCache)}function ki(e,t,n,i){return Ci(e.eventCache,new gi(t,n,i))}function Si(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Ei(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ti;const Oi=()=>(Ti||(Ti=new Kt(j)),Ti);class Ii{constructor(e,t=Oi()){this.value=e,this.children=t}static fromObject(e){let t=new Ii(null);return L(e,(e,n)=>{t=t.set(new ct(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ut(),value:this.value};if(bt(e))return null;{const n=ht(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(ft(e),t);if(null!=r){const e=yt(new ct(n),r.path);return{path:e,value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(bt(e))return this;{const t=ht(e),n=this.children.get(t);return null!==n?n.subtree(ft(e)):new Ii(null)}}set(e,t){if(bt(e))return new Ii(t,this.children);{const n=ht(e),i=this.children.get(n)||new Ii(null),r=i.set(ft(e),t),s=this.children.insert(n,r);return new Ii(this.value,s)}}remove(e){if(bt(e))return this.children.isEmpty()?new Ii(null):new Ii(null,this.children);{const t=ht(e),n=this.children.get(t);if(n){const i=n.remove(ft(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new Ii(null):new Ii(this.value,r)}return this}}get(e){if(bt(e))return this.value;{const t=ht(e),n=this.children.get(t);return n?n.get(ft(e)):null}}setTree(e,t){if(bt(e))return t;{const n=ht(e),i=this.children.get(n)||new Ii(null),r=i.setTree(ft(e),t);let s;return s=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new Ii(this.value,s)}}fold(e){return this.fold_(ut(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((i,r)=>{n[i]=r.fold_(yt(e,i),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ut(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(bt(e))return null;{const i=ht(e),r=this.children.get(i);return r?r.findOnPath_(ft(e),yt(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ut(),t)}foreachOnPath_(e,t,n){if(bt(e))return this;{this.value&&n(t,this.value);const i=ht(e),r=this.children.get(i);return r?r.foreachOnPath_(ft(e),yt(t,i),n):new Ii(null)}}foreach(e){this.foreach_(ut(),e)}foreach_(e,t){this.children.inorderTraversal((n,i)=>{i.foreach_(yt(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e){this.writeTree_=e}static empty(){return new Di(new Ii(null))}}function Ni(e,t,n){if(bt(t))return new Di(new Ii(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=_t(r,t);return s=s.updateChild(o,n),new Di(e.writeTree_.set(r,s))}{const i=new Ii(n),r=e.writeTree_.setTree(t,i);return new Di(r)}}}function Pi(e,t,n){let i=e;return L(n,(e,n)=>{i=Ni(i,yt(t,e),n)}),i}function Ai(e,t){if(bt(t))return Di.empty();{const n=e.writeTree_.setTree(t,new Ii(null));return new Di(n)}}function ji(e,t){return null!=Mi(e,t)}function Mi(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(_t(n.path,t)):null}function $i(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(ln,(e,n)=>{t.push(new Ft(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new Ft(e,n.value))}),t}function Ri(e,t){if(bt(t))return e;{const n=Mi(e,t);return new Di(null!=n?new Ii(n):e.writeTree_.subtree(t))}}function Li(e){return e.writeTree_.isEmpty()}function Fi(e,t){return Vi(ut(),e.writeTree_,t)}function Vi(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((t,r)=>{".priority"===t?(Object(s["e"])(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=Vi(yt(e,t),r,n)}),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(yt(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(e,t){return ur(t,e)}function zi(e,t,n,i,r){Object(s["e"])(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=Ni(e.visibleWrites,t,n)),e.lastWriteId=i}function qi(e,t,n,i){Object(s["e"])(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=Pi(e.visibleWrites,t,n),e.lastWriteId=i}function Ui(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function Hi(e,t){const n=e.allWrites.findIndex(e=>e.writeId===t);Object(s["e"])(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,o=!1,a=e.allWrites.length-1;while(r&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&Wi(t,i.path)?r=!1:xt(i.path,t.path)&&(o=!0)),a--}if(r){if(o)return Ki(e),!0;if(i.snap)e.visibleWrites=Ai(e.visibleWrites,i.path);else{const t=i.children;L(t,t=>{e.visibleWrites=Ai(e.visibleWrites,yt(i.path,t))})}return!0}return!1}function Wi(e,t){if(e.snap)return xt(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&xt(yt(e.path,n),t))return!0;return!1}function Ki(e){e.visibleWrites=Yi(e.allWrites,Gi,ut()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Gi(e){return e.visible}function Yi(e,t,n){let i=Di.empty();for(let r=0;r<e.length;++r){const o=e[r];if(t(o)){const e=o.path;let t;if(o.snap)xt(n,e)?(t=_t(n,e),i=Ni(i,t,o.snap)):xt(e,n)&&(t=_t(e,n),i=Ni(i,ut(),o.snap.getChild(t)));else{if(!o.children)throw Object(s["f"])("WriteRecord should have .snap or .children");if(xt(n,e))t=_t(n,e),i=Pi(i,t,o.children);else if(xt(e,n))if(t=_t(e,n),bt(t))i=Pi(i,ut(),o.children);else{const e=Object(s["L"])(o.children,ht(t));if(e){const n=e.getChild(ft(t));i=Ni(i,ut(),n)}}}}}return i}function Qi(e,t,n,i,r){if(i||r){const s=Ri(e.visibleWrites,t);if(!r&&Li(s))return n;if(r||null!=n||ji(s,ut())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(xt(e.path,t)||xt(t,e.path))},o=Yi(e.allWrites,s,t),a=n||gn.EMPTY_NODE;return Fi(o,a)}return null}{const i=Mi(e.visibleWrites,t);if(null!=i)return i;{const i=Ri(e.visibleWrites,t);if(Li(i))return n;if(null!=n||ji(i,ut())){const e=n||gn.EMPTY_NODE;return Fi(i,e)}return null}}}function Xi(e,t,n){let i=gn.EMPTY_NODE;const r=Mi(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(ln,(e,t)=>{i=i.updateImmediateChild(e,t)}),i;if(n){const r=Ri(e.visibleWrites,t);return n.forEachChild(ln,(e,t)=>{const n=Fi(Ri(r,new ct(e)),t);i=i.updateImmediateChild(e,n)}),$i(r).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}{const n=Ri(e.visibleWrites,t);return $i(n).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}}function Ji(e,t,n,i,r){Object(s["e"])(i||r,"Either existingEventSnap or existingServerSnap must exist");const o=yt(t,n);if(ji(e.visibleWrites,o))return null;{const t=Ri(e.visibleWrites,o);return Li(t)?r.getChild(n):Fi(t,r.getChild(n))}}function Zi(e,t,n,i){const r=yt(t,n),s=Mi(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n)){const t=Ri(e.visibleWrites,r);return Fi(t,i.getNode().getImmediateChild(n))}return null}function er(e,t){return Mi(e.visibleWrites,t)}function tr(e,t,n,i,r,s,o){let a;const l=Ri(e.visibleWrites,t),c=Mi(l,ut());if(null!=c)a=c;else{if(null==n)return[];a=Fi(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();while(l&&e.length<r)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}function nr(){return{visibleWrites:Di.empty(),allWrites:[],lastWriteId:-1}}function ir(e,t,n,i){return Qi(e.writeTree,e.treePath,t,n,i)}function rr(e,t){return Xi(e.writeTree,e.treePath,t)}function sr(e,t,n,i){return Ji(e.writeTree,e.treePath,t,n,i)}function or(e,t){return er(e.writeTree,yt(e.treePath,t))}function ar(e,t,n,i,r,s){return tr(e.writeTree,e.treePath,t,n,i,r,s)}function lr(e,t,n){return Zi(e.writeTree,e.treePath,t,n)}function cr(e,t){return ur(yt(e.treePath,t),e.writeTree)}function ur(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Object(s["e"])("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Object(s["e"])(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,jn(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,An(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,Pn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw Object(s["f"])("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,jn(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const fr=new dr;class pr{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new gi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return lr(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Ei(this.viewCache_),r=ar(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(e){return{filter:e}}function gr(e,t){Object(s["e"])(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),Object(s["e"])(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function vr(e,t,n,i,r){const o=new hr;let a,l;if(n.type===li.OVERWRITE){const c=n;c.source.fromUser?a=wr(e,t,c.path,c.snap,i,r,o):(Object(s["e"])(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered()&&!bt(c.path),a=_r(e,t,c.path,c.snap,i,r,l,o))}else if(n.type===li.MERGE){const c=n;c.source.fromUser?a=xr(e,t,c.path,c.children,i,r,o):(Object(s["e"])(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered(),a=Sr(e,t,c.path,c.children,i,r,l,o))}else if(n.type===li.ACK_USER_WRITE){const s=n;a=s.revert?Or(e,t,s.path,i,r,o):Er(e,t,s.path,s.affectedTree,i,r,o)}else{if(n.type!==li.LISTEN_COMPLETE)throw Object(s["f"])("Unknown operation type: "+n.type);a=Tr(e,t,n.path,i,o)}const c=o.getChanges();return yr(t,a,c),{viewCache:a,changes:c}}function yr(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Si(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(Nn(Si(t)))}}function br(e,t,n,i,r,o){const a=t.eventCache;if(null!=or(i,n))return t;{let l,c;if(bt(n))if(Object(s["e"])(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Ei(t),r=n instanceof gn?n:gn.EMPTY_NODE,s=rr(i,r);l=e.filter.updateFullNode(t.eventCache.getNode(),s,o)}else{const n=ir(i,Ei(t));l=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const u=ht(n);if(".priority"===u){Object(s["e"])(1===dt(n),"Can't have a priority with additional path components");const r=a.getNode();c=t.serverCache.getNode();const o=sr(i,n,r,c);l=null!=o?e.filter.updatePriority(r,o):a.getNode()}else{const s=ft(n);let h;if(a.isCompleteForChild(u)){c=t.serverCache.getNode();const e=sr(i,n,a.getNode(),c);h=null!=e?a.getNode().getImmediateChild(u).updateChild(s,e):a.getNode().getImmediateChild(u)}else h=lr(i,u,t.serverCache);l=null!=h?e.filter.updateChild(a.getNode(),u,h,s,r,o):a.getNode()}}return xi(t,l,a.isFullyInitialized()||bt(n),e.filter.filtersNodes())}}function _r(e,t,n,i,r,s,o,a){const l=t.serverCache;let c;const u=o?e.filter:e.filter.getIndexedFilter();if(bt(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),e,null)}else{const e=ht(n);if(!l.isCompleteForPath(n)&&dt(n)>1)return t;const r=ft(n),s=l.getNode().getImmediateChild(e),o=s.updateChild(r,i);c=".priority"===e?u.updatePriority(l.getNode(),o):u.updateChild(l.getNode(),e,o,r,fr,null)}const h=ki(t,c,l.isFullyInitialized()||bt(n),u.filtersNodes()),d=new pr(r,h,s);return br(e,h,n,r,d,a)}function wr(e,t,n,i,r,s,o){const a=t.eventCache;let l,c;const u=new pr(r,t,s);if(bt(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=xi(t,c,!0,e.filter.filtersNodes());else{const r=ht(n);if(".priority"===r)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=xi(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=ft(n),c=a.getNode().getImmediateChild(r);let h;if(bt(s))h=i;else{const e=u.getCompleteChild(r);h=null!=e?".priority"===pt(s)&&e.getChild(vt(s)).isEmpty()?e:e.updateChild(s,i):gn.EMPTY_NODE}if(c.equals(h))l=t;else{const n=e.filter.updateChild(a.getNode(),r,h,s,u,o);l=xi(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Cr(e,t){return e.eventCache.isCompleteForChild(t)}function xr(e,t,n,i,r,s,o){let a=t;return i.foreach((i,l)=>{const c=yt(n,i);Cr(t,ht(c))&&(a=wr(e,a,c,l,r,s,o))}),i.foreach((i,l)=>{const c=yt(n,i);Cr(t,ht(c))||(a=wr(e,a,c,l,r,s,o))}),a}function kr(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function Sr(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=bt(n)?i:new Ii(null).setTree(n,i);const u=t.serverCache.getNode();return l.children.inorderTraversal((n,i)=>{if(u.hasChild(n)){const l=t.serverCache.getNode().getImmediateChild(n),u=kr(e,l,i);c=_r(e,c,new ct(n),u,r,s,o,a)}}),l.children.inorderTraversal((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&void 0===i.value;if(!u.hasChild(n)&&!l){const l=t.serverCache.getNode().getImmediateChild(n),u=kr(e,l,i);c=_r(e,c,new ct(n),u,r,s,o,a)}}),c}function Er(e,t,n,i,r,s,o){if(null!=or(r,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(bt(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return _r(e,t,n,l.getNode().getChild(n),r,s,a,o);if(bt(n)){let i=new Ii(null);return l.getNode().forEachChild(qt,(e,t)=>{i=i.set(new ct(e),t)}),Sr(e,t,n,i,r,s,a,o)}return t}{let c=new Ii(null);return i.foreach((e,t)=>{const i=yt(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))}),Sr(e,t,n,c,r,s,a,o)}}function Tr(e,t,n,i,r){const s=t.serverCache,o=ki(t,s.getNode(),s.isFullyInitialized()||bt(n),s.isFiltered());return br(e,o,n,i,fr,r)}function Or(e,t,n,i,r,o){let a;if(null!=or(i,n))return t;{const l=new pr(i,t,r),c=t.eventCache.getNode();let u;if(bt(n)||".priority"===ht(n)){let n;if(t.serverCache.isFullyInitialized())n=ir(i,Ei(t));else{const e=t.serverCache.getNode();Object(s["e"])(e instanceof gn,"serverChildren would be complete if leaf node"),n=rr(i,e)}n=n,u=e.filter.updateFullNode(c,n,o)}else{const r=ht(n);let s=lr(i,r,t.serverCache);null==s&&t.serverCache.isCompleteForChild(r)&&(s=c.getImmediateChild(r)),u=null!=s?e.filter.updateChild(c,r,s,ft(n),l,o):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(c,r,gn.EMPTY_NODE,ft(n),l,o):c,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=ir(i,Ei(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=or(i,ut()),xi(t,u,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new $n(n.getIndex()),r=Vn(n);this.processor_=mr(r);const s=t.serverCache,o=t.eventCache,a=i.updateFullNode(gn.EMPTY_NODE,s.getNode(),null),l=r.updateFullNode(gn.EMPTY_NODE,o.getNode(),null),c=new gi(a,s.isFullyInitialized(),i.filtersNodes()),u=new gi(l,o.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ci(u,c),this.eventGenerator_=new vi(this.query_)}get query(){return this.query_}}function Dr(e){return e.viewCache_.serverCache.getNode()}function Nr(e){return Si(e.viewCache_)}function Pr(e,t){const n=Ei(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!bt(t)&&!n.getImmediateChild(ht(t)).isEmpty())?n.getChild(t):null}function Ar(e){return 0===e.eventRegistrations_.length}function jr(e,t){e.eventRegistrations_.push(t)}function Mr(e,t,n){const i=[];if(n){Object(s["e"])(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach(e=>{const t=e.createCancelEvent(n,r);t&&i.push(t)})}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function $r(e,t,n,i){t.type===li.MERGE&&null!==t.source.queryId&&(Object(s["e"])(Ei(e.viewCache_),"We should always have a full cache before handling merges"),Object(s["e"])(Si(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,o=vr(e.processor_,r,t,n,i);return gr(e.processor_,o.viewCache),Object(s["e"])(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,Lr(e,o.changes,o.viewCache.eventCache.getNode(),null)}function Rr(e,t){const n=e.viewCache_.eventCache,i=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(ln,(e,t)=>{i.push(Pn(e,t))})}return n.isFullyInitialized()&&i.push(Nn(n.getNode())),Lr(e,i,n.getNode(),t)}function Lr(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return yi(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fr,Vr;class Br{constructor(){this.views=new Map}}function zr(e){Object(s["e"])(!Fr,"__referenceConstructor has already been defined"),Fr=e}function qr(){return Object(s["e"])(Fr,"Reference.ts has not been loaded"),Fr}function Ur(e){return 0===e.views.size}function Hr(e,t,n,i){const r=t.source.queryId;if(null!==r){const o=e.views.get(r);return Object(s["e"])(null!=o,"SyncTree gave us an op for an invalid query."),$r(o,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat($r(s,t,n,i));return r}}function Wr(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=ir(n,r?i:null),s=!1;e?s=!0:i instanceof gn?(e=rr(n,i),s=!1):(e=gn.EMPTY_NODE,s=!1);const o=Ci(new gi(e,s,!1),new gi(i,r,!1));return new Ir(t,o)}return o}function Kr(e,t,n,i,r,s){const o=Wr(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),jr(o,n),Rr(o,n)}function Gr(e,t,n,i){const r=t._queryIdentifier,s=[];let o=[];const a=Zr(e);if("default"===r)for(const[l,c]of e.views.entries())o=o.concat(Mr(c,n,i)),Ar(c)&&(e.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const t=e.views.get(r);t&&(o=o.concat(Mr(t,n,i)),Ar(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!Zr(e)&&s.push(new(qr())(t._repo,t._path)),{removed:s,events:o}}function Yr(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Qr(e,t){let n=null;for(const i of e.views.values())n=n||Pr(i,t);return n}function Xr(e,t){const n=t._queryParams;if(n.loadsAllData())return es(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Jr(e,t){return null!=Xr(e,t)}function Zr(e){return null!=es(e)}function es(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(e){Object(s["e"])(!Vr,"__referenceConstructor has already been defined"),Vr=e}function ns(){return Object(s["e"])(Vr,"Reference.ts has not been loaded"),Vr}let is=1;class rs{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ii(null),this.pendingWriteTree_=nr(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ss(e,t,n,i,r){return zi(e.pendingWriteTree_,t,n,i,r),r?ys(e,new pi(ci(),t,n)):[]}function os(e,t,n,i){qi(e.pendingWriteTree_,t,n,i);const r=Ii.fromObject(n);return ys(e,new mi(ci(),t,r))}function as(e,t,n=!1){const i=Ui(e.pendingWriteTree_,t),r=Hi(e.pendingWriteTree_,t);if(r){let t=new Ii(null);return null!=i.snap?t=t.set(ut(),!0):L(i.children,e=>{t=t.set(new ct(e),!0)}),ys(e,new di(i.path,t,n))}return[]}function ls(e,t,n){return ys(e,new pi(ui(),t,n))}function cs(e,t,n){const i=Ii.fromObject(n);return ys(e,new mi(ui(),t,i))}function us(e,t){return ys(e,new fi(ui(),t))}function hs(e,t,n){const i=ks(e,n);if(i){const n=Ss(i),r=n.path,s=n.queryId,o=_t(r,t),a=new fi(hi(s),o);return Es(e,r,a)}return[]}function ds(e,t,n,i){const r=t._path,s=e.syncPointTree_.get(r);let o=[];if(s&&("default"===t._queryIdentifier||Jr(s,t))){const a=Gr(s,t,n,i);Ur(s)&&(e.syncPointTree_=e.syncPointTree_.remove(r));const l=a.removed;o=a.events;const c=-1!==l.findIndex(e=>e._queryParams.loadsAllData()),u=e.syncPointTree_.findOnPath(r,(e,t)=>Zr(t));if(c&&!u){const t=e.syncPointTree_.subtree(r);if(!t.isEmpty()){const n=Ts(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,s=ws(e,i);e.listenProvider_.startListening(Os(r),Cs(e,r),s.hashFn,s.onComplete)}}}if(!u&&l.length>0&&!i)if(c){const n=null;e.listenProvider_.stopListening(Os(t),n)}else l.forEach(t=>{const n=e.queryToTagMap.get(xs(t));e.listenProvider_.stopListening(Os(t),n)});Is(e,l)}return o}function fs(e,t,n,i){const r=ks(e,i);if(null!=r){const i=Ss(r),s=i.path,o=i.queryId,a=_t(s,t),l=new pi(hi(o),a,n);return Es(e,s,l)}return[]}function ps(e,t,n,i){const r=ks(e,i);if(r){const i=Ss(r),s=i.path,o=i.queryId,a=_t(s,t),l=Ii.fromObject(n),c=new mi(hi(o),a,l);return Es(e,s,c)}return[]}function ms(e,t,n){const i=t._path;let r=null,o=!1;e.syncPointTree_.foreachOnPath(i,(e,t)=>{const n=_t(e,i);r=r||Qr(t,n),o=o||Zr(t)});let a,l=e.syncPointTree_.get(i);if(l?(o=o||Zr(l),r=r||Qr(l,ut())):(l=new Br,e.syncPointTree_=e.syncPointTree_.set(i,l)),null!=r)a=!0;else{a=!1,r=gn.EMPTY_NODE;const t=e.syncPointTree_.subtree(i);t.foreachChild((e,t)=>{const n=Qr(t,ut());n&&(r=r.updateImmediateChild(e,n))})}const c=Jr(l,t);if(!c&&!t._queryParams.loadsAllData()){const n=xs(t);Object(s["e"])(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=Ds();e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}const u=Bi(e.pendingWriteTree_,i);let h=Kr(l,t,n,u,r,a);if(!c&&!o){const n=Xr(l,t);h=h.concat(Ns(e,t,n))}return h}function gs(e,t,n){const i=!0,r=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,(e,n)=>{const i=_t(e,t),r=Qr(n,i);if(r)return r});return Qi(r,t,s,n,i)}function vs(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,(e,t)=>{const r=_t(e,n);i=i||Qr(t,r)});let r=e.syncPointTree_.get(n);r?i=i||Qr(r,ut()):(r=new Br,e.syncPointTree_=e.syncPointTree_.set(n,r));const s=null!=i,o=s?new gi(i,!0,!1):null,a=Bi(e.pendingWriteTree_,t._path),l=Wr(r,t,a,s?o.getNode():gn.EMPTY_NODE,s);return Nr(l)}function ys(e,t){return bs(t,e.syncPointTree_,null,Bi(e.pendingWriteTree_,ut()))}function bs(e,t,n,i){if(bt(e.path))return _s(e,t,n,i);{const r=t.get(ut());null==n&&null!=r&&(n=Qr(r,ut()));let s=[];const o=ht(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=cr(i,o);s=s.concat(bs(a,l,e,t))}return r&&(s=s.concat(Hr(r,e,i,n))),s}}function _s(e,t,n,i){const r=t.get(ut());null==n&&null!=r&&(n=Qr(r,ut()));let s=[];return t.children.inorderTraversal((t,r)=>{const o=n?n.getImmediateChild(t):null,a=cr(i,t),l=e.operationForChild(t);l&&(s=s.concat(_s(l,r,o,a)))}),r&&(s=s.concat(Hr(r,e,i,n))),s}function ws(e,t){const n=t.query,i=Cs(e,n);return{hashFn:()=>{const e=Dr(t)||gn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?hs(e,n._path,i):us(e,n._path);{const i=z(t,n);return ds(e,n,null,i)}}}}function Cs(e,t){const n=xs(t);return e.queryToTagMap.get(n)}function xs(e){return e._path.toString()+"$"+e._queryIdentifier}function ks(e,t){return e.tagToQueryMap.get(t)}function Ss(e){const t=e.indexOf("$");return Object(s["e"])(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ct(e.substr(0,t))}}function Es(e,t,n){const i=e.syncPointTree_.get(t);Object(s["e"])(i,"Missing sync point for query tag that we're tracking");const r=Bi(e.pendingWriteTree_,t);return Hr(i,n,r,null)}function Ts(e){return e.fold((e,t,n)=>{if(t&&Zr(t)){const e=es(t);return[e]}{let e=[];return t&&(e=Yr(t)),L(n,(t,n)=>{e=e.concat(n)}),e}})}function Os(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(ns())(e._repo,e._path):e}function Is(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=xs(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function Ds(){return is++}function Ns(e,t,n){const i=t._path,r=Cs(e,t),o=ws(e,n),a=e.listenProvider_.startListening(Os(t),r,o.hashFn,o.onComplete),l=e.syncPointTree_.subtree(i);if(r)Object(s["e"])(!Zr(l.value),"If we're adding a query, it shouldn't be shadowed");else{const t=l.fold((e,t,n)=>{if(!bt(e)&&t&&Zr(t))return[es(t).query];{let e=[];return t&&(e=e.concat(Yr(t).map(e=>e.query))),L(n,(t,n)=>{e=e.concat(n)}),e}});for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(Os(i),Cs(e,i))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ps(t)}node(){return this.node_}}class As{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=yt(this.path_,e);return new As(this.syncTree_,t)}node(){return gs(this.syncTree_,this.path_)}}const js=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},Ms=function(e,t,n){return e&&"object"===typeof e?(Object(s["e"])(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?$s(e[".sv"],t,n):"object"===typeof e[".sv"]?Rs(e[".sv"],t):void Object(s["e"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},$s=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:Object(s["e"])(!1,"Unexpected server value: "+e)}},Rs=function(e,t,n){e.hasOwnProperty("increment")||Object(s["e"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e["increment"];"number"!==typeof i&&Object(s["e"])(!1,"Unexpected increment value: "+i);const r=t.node();if(Object(s["e"])(null!==r&&"undefined"!==typeof r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r,a=o.getValue();return"number"!==typeof a?i:a+i},Ls=function(e,t,n,i){return Vs(t,new As(n,e),i)},Fs=function(e,t,n){return Vs(e,new Ps(t),n)};function Vs(e,t,n){const i=e.getPriority().val(),r=Ms(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=Ms(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new rn(s,_n(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new rn(r))),i.forEachChild(ln,(e,i)=>{const r=Vs(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))}),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function zs(e,t){let n=t instanceof ct?t:new ct(t),i=e,r=ht(n);while(null!==r){const e=Object(s["L"])(i.node.children,r)||{children:{},childCount:0};i=new Bs(r,i,e),n=ft(n),r=ht(n)}return i}function qs(e){return e.node.value}function Us(e,t){e.node.value=t,Xs(e)}function Hs(e){return e.node.childCount>0}function Ws(e){return void 0===qs(e)&&!Hs(e)}function Ks(e,t){L(e.node.children,(n,i)=>{t(new Bs(n,e,i))})}function Gs(e,t,n,i){n&&!i&&t(e),Ks(e,e=>{Gs(e,t,!0,i)}),n&&i&&t(e)}function Ys(e,t,n){let i=n?e:e.parent;while(null!==i){if(t(i))return!0;i=i.parent}return!1}function Qs(e){return new ct(null===e.parent?e.name:Qs(e.parent)+"/"+e.name)}function Xs(e){null!==e.parent&&Js(e.parent,e.name,e)}function Js(e,t,n){const i=Ws(n),r=Object(s["j"])(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,Xs(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,Xs(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=/[\[\].#$\/\u0000-\u001F\u007F]/,eo=/[\[\].#$\u0000-\u001F\u007F]/,to=10485760,no=function(e){return"string"===typeof e&&0!==e.length&&!Zs.test(e)},io=function(e){return"string"===typeof e&&0!==e.length&&!eo.test(e)},ro=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),io(e)},so=function(e){return null===e||"string"===typeof e||"number"===typeof e&&!I(e)||e&&"object"===typeof e&&Object(s["j"])(e,".sv")},oo=function(e,t,n,i){i&&void 0===t||ao(Object(s["p"])(e,"value"),t,n)},ao=function(e,t,n){const i=n instanceof ct?new kt(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Ot(i));if("function"===typeof t)throw new Error(e+"contains a function "+Ot(i)+" with contents = "+t.toString());if(I(t))throw new Error(e+"contains "+t.toString()+" "+Ot(i));if("string"===typeof t&&t.length>to/3&&Object(s["M"])(t)>to)throw new Error(e+"contains a string greater than "+to+" utf8 bytes "+Ot(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,r=!1;if(L(t,(t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!no(t)))throw new Error(e+" contains an invalid key ("+t+") "+Ot(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');St(i,t),ao(e,s,i),Et(i)}),n&&r)throw new Error(e+' contains ".value" child '+Ot(i)+" in addition to actual children.")}},lo=function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const r=gt(i);for(let t=0;t<r.length;t++)if(".priority"===r[t]&&t===r.length-1);else if(!no(r[t]))throw new Error(e+"contains an invalid key ("+r[t]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(wt);let r=null;for(n=0;n<t.length;n++){if(i=t[n],null!==r&&xt(r,i))throw new Error(e+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},co=function(e,t,n,i){if(i&&void 0===t)return;const r=Object(s["p"])(e,"values");if(!t||"object"!==typeof t||Array.isArray(t))throw new Error(r+" must be an object containing the children to replace.");const o=[];L(t,(e,t)=>{const i=new ct(e);if(ao(r,t,yt(n,i)),".priority"===pt(i)&&!so(t))throw new Error(r+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(i)}),lo(r,o)},uo=function(e,t,n){if(!n||void 0!==t){if(I(t))throw new Error(Object(s["p"])(e,"priority")+"is "+t.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!so(t))throw new Error(Object(s["p"])(e,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},ho=function(e,t,n,i){if((!i||void 0!==n)&&!no(n))throw new Error(Object(s["p"])(e,t)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},fo=function(e,t,n,i){if((!i||void 0!==n)&&!io(n))throw new Error(Object(s["p"])(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},po=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),fo(e,t,n,i)},mo=function(e,t){if(".info"===ht(t))throw new Error(e+" failed = Can't modify data under /.info/")},go=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!no(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!ro(n))throw new Error(Object(s["p"])(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vo{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function yo(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||Ct(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function bo(e,t,n){yo(e,n),wo(e,e=>Ct(e,t))}function _o(e,t,n){yo(e,n),wo(e,e=>xt(e,t)||xt(t,e))}function wo(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){const s=r.path;t(s)?(Co(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Co(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();_&&x("event: "+n.toString()),K(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo="repo_interrupt",ko=25;class So{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new vo,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Jn(),this.transactionQueueTree_=new Bs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Eo(e,t,n){if(e.stats_=ge(e.repoInfo_),e.forceRestClient_||G())e.server_=new Qn(e.repoInfo_,(t,n,i,r)=>{Io(e,t,n,i,r)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>Do(e,!0),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Object(s["O"])(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new Lt(e.repoInfo_,t,(t,n,i,r)=>{Io(e,t,n,i,r)},t=>{Do(e,t)},t=>{No(e,t)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=ve(e.repoInfo_,()=>new ai(e.stats_,e.server_)),e.infoData_=new Xn,e.infoSyncTree_=new rs({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=ls(e.infoSyncTree_,t._path,o),setTimeout(()=>{r("ok")},0)),s},stopListening:()=>{}}),Po(e,"connected",!1),e.serverSyncTree_=new rs({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,(n,i)=>{const s=r(n,i);_o(e.eventQueue_,t._path,s)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function To(e){const t=e.infoData_.getNode(new ct(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function Oo(e){return js({timestamp:To(e)})}function Io(e,t,n,i,r){e.dataUpdateCount++;const o=new ct(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(r)if(i){const t=Object(s["I"])(n,e=>_n(e));a=ps(e.serverSyncTree_,o,t,r)}else{const t=_n(n);a=fs(e.serverSyncTree_,o,t,r)}else if(i){const t=Object(s["I"])(n,e=>_n(e));a=cs(e.serverSyncTree_,o,t)}else{const t=_n(n);a=ls(e.serverSyncTree_,o,t)}let l=o;a.length>0&&(l=Jo(e,o)),_o(e.eventQueue_,l,a)}function Do(e,t){Po(e,"connected",t),!1===t&&Ro(e)}function No(e,t){L(t,(t,n)=>{Po(e,t,n)})}function Po(e,t,n){const i=new ct("/.info/"+t),r=_n(n);e.infoData_.updateSnapshot(i,r);const s=ls(e.infoSyncTree_,i,r);_o(e.eventQueue_,i,s)}function Ao(e){return e.nextWriteId_++}function jo(e,t){const n=vs(e.serverSyncTree_,t);return null!=n?Promise.resolve(n):e.server_.get(t).then(n=>{const i=_n(n).withIndex(t._queryParams.getIndex()),r=ls(e.serverSyncTree_,t._path,i);return bo(e.eventQueue_,t._path,r),Promise.resolve(i)},n=>(Wo(e,"get for query "+Object(s["O"])(t)+" failed: "+n),Promise.reject(new Error(n))))}function Mo(e,t,n,i,r){Wo(e,"set",{path:t.toString(),value:n,priority:i});const s=Oo(e),o=_n(n,i),a=gs(e.serverSyncTree_,t),l=Fs(o,a,s),c=Ao(e),u=ss(e.serverSyncTree_,t,l,c,!0);yo(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),(n,i)=>{const s="ok"===n;s||T("set at "+t+" failed: "+n);const o=as(e.serverSyncTree_,c,!s);_o(e.eventQueue_,t,o),Ko(e,r,n,i)});const h=ra(e,t);Jo(e,h),_o(e.eventQueue_,h,[])}function $o(e,t,n,i){Wo(e,"update",{path:t.toString(),value:n});let r=!0;const s=Oo(e),o={};if(L(n,(n,i)=>{r=!1,o[n]=Ls(yt(t,n),_n(i),e.serverSyncTree_,s)}),r)x("update() called with empty data.  Don't do anything."),Ko(e,i,"ok",void 0);else{const r=Ao(e),s=os(e.serverSyncTree_,t,o,r);yo(e.eventQueue_,s),e.server_.merge(t.toString(),n,(n,s)=>{const o="ok"===n;o||T("update at "+t+" failed: "+n);const a=as(e.serverSyncTree_,r,!o),l=a.length>0?Jo(e,t):t;_o(e.eventQueue_,l,a),Ko(e,i,n,s)}),L(n,n=>{const i=ra(e,yt(t,n));Jo(e,i)}),_o(e.eventQueue_,t,[])}}function Ro(e){Wo(e,"onDisconnectEvents");const t=Oo(e),n=Jn();ti(e.onDisconnect_,ut(),(i,r)=>{const s=Ls(i,r,e.serverSyncTree_,t);Zn(n,i,s)});let i=[];ti(n,ut(),(t,n)=>{i=i.concat(ls(e.serverSyncTree_,t,n));const r=ra(e,t);Jo(e,r)}),e.onDisconnect_=Jn(),_o(e.eventQueue_,ut(),i)}function Lo(e,t,n){e.server_.onDisconnectCancel(t.toString(),(i,r)=>{"ok"===i&&ei(e.onDisconnect_,t),Ko(e,n,i,r)})}function Fo(e,t,n,i){const r=_n(n);e.server_.onDisconnectPut(t.toString(),r.val(!0),(n,s)=>{"ok"===n&&Zn(e.onDisconnect_,t,r),Ko(e,i,n,s)})}function Vo(e,t,n,i,r){const s=_n(n,i);e.server_.onDisconnectPut(t.toString(),s.val(!0),(n,i)=>{"ok"===n&&Zn(e.onDisconnect_,t,s),Ko(e,r,n,i)})}function Bo(e,t,n,i){if(Object(s["x"])(n))return x("onDisconnect().update() called with empty data.  Don't do anything."),void Ko(e,i,"ok",void 0);e.server_.onDisconnectMerge(t.toString(),n,(r,s)=>{"ok"===r&&L(n,(n,i)=>{const r=_n(i);Zn(e.onDisconnect_,yt(t,n),r)}),Ko(e,i,r,s)})}function zo(e,t,n){let i;i=".info"===ht(t._path)?ms(e.infoSyncTree_,t,n):ms(e.serverSyncTree_,t,n),bo(e.eventQueue_,t._path,i)}function qo(e,t,n){let i;i=".info"===ht(t._path)?ds(e.infoSyncTree_,t,n):ds(e.serverSyncTree_,t,n),bo(e.eventQueue_,t._path,i)}function Uo(e){e.persistentConnection_&&e.persistentConnection_.interrupt(xo)}function Ho(e){e.persistentConnection_&&e.persistentConnection_.resume(xo)}function Wo(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),x(n,...t)}function Ko(e,t,n,i){t&&K(()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const s=new Error(r);s.code=e,t(s)}})}function Go(e,t,n,i,r,o){Wo(e,"transaction on "+t);const a={path:t,update:n,onComplete:i,status:null,order:v(),applyLocally:o,retryCount:0,unwatcher:r,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},l=Yo(e,t,void 0);a.currentInputSnapshot=l;const c=a.update(l.val());if(void 0===c)a.unwatcher(),a.currentOutputSnapshotRaw=null,a.currentOutputSnapshotResolved=null,a.onComplete&&a.onComplete(null,!1,a.currentInputSnapshot);else{ao("transaction failed: Data returned ",c,a.path),a.status=0;const n=zs(e.transactionQueueTree_,t),i=qs(n)||[];let r;if(i.push(a),Us(n,i),"object"===typeof c&&null!==c&&Object(s["j"])(c,".priority"))r=Object(s["L"])(c,".priority"),Object(s["e"])(so(r),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");else{const n=gs(e.serverSyncTree_,t)||gn.EMPTY_NODE;r=n.getPriority().val()}const o=Oo(e),u=_n(c,r),h=Fs(u,l,o);a.currentOutputSnapshotRaw=u,a.currentOutputSnapshotResolved=h,a.currentWriteId=Ao(e);const d=ss(e.serverSyncTree_,t,h,a.currentWriteId,a.applyLocally);_o(e.eventQueue_,t,d),Qo(e,e.transactionQueueTree_)}}function Yo(e,t,n){return gs(e.serverSyncTree_,t,n)||gn.EMPTY_NODE}function Qo(e,t=e.transactionQueueTree_){if(t||ia(e,t),qs(t)){const n=ta(e,t);Object(s["e"])(n.length>0,"Sending zero length transaction queue");const i=n.every(e=>0===e.status);i&&Xo(e,Qs(t),n)}else Hs(t)&&Ks(t,t=>{Qo(e,t)})}function Xo(e,t,n){const i=n.map(e=>e.currentWriteId),r=Yo(e,t,i);let o=r;const a=r.hash();for(let u=0;u<n.length;u++){const e=n[u];Object(s["e"])(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=_t(t,e.path);o=o.updateChild(i,e.currentOutputSnapshotRaw)}const l=o.val(!0),c=t;e.server_.put(c.toString(),l,i=>{Wo(e,"transaction put response",{path:c.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(as(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push(()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)),n[t].unwatcher();ia(e,zs(e.transactionQueueTree_,t)),Qo(e,e.transactionQueueTree_),_o(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)K(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{T("transaction at "+c.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}Jo(e,t)}},a)}function Jo(e,t){const n=ea(e,t),i=Qs(n),r=ta(e,n);return Zo(e,r,i),i}function Zo(e,t,n){if(0===t.length)return;const i=[];let r=[];const o=t.filter(e=>0===e.status),a=o.map(e=>e.currentWriteId);for(let l=0;l<t.length;l++){const o=t[l],c=_t(n,o.path);let u,h=!1;if(Object(s["e"])(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)h=!0,u=o.abortReason,r=r.concat(as(e.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=ko)h=!0,u="maxretry",r=r.concat(as(e.serverSyncTree_,o.currentWriteId,!0));else{const n=Yo(e,o.path,a);o.currentInputSnapshot=n;const i=t[l].update(n.val());if(void 0!==i){ao("transaction failed: Data returned ",i,o.path);let t=_n(i);const l="object"===typeof i&&null!=i&&Object(s["j"])(i,".priority");l||(t=t.updatePriority(n.getPriority()));const c=o.currentWriteId,u=Oo(e),h=Fs(t,n,u);o.currentOutputSnapshotRaw=t,o.currentOutputSnapshotResolved=h,o.currentWriteId=Ao(e),a.splice(a.indexOf(c),1),r=r.concat(ss(e.serverSyncTree_,o.path,h,o.currentWriteId,o.applyLocally)),r=r.concat(as(e.serverSyncTree_,c,!0))}else h=!0,u="nodata",r=r.concat(as(e.serverSyncTree_,o.currentWriteId,!0))}_o(e.eventQueue_,n,r),r=[],h&&(t[l].status=2,function(e){setTimeout(e,Math.floor(0))}(t[l].unwatcher),t[l].onComplete&&("nodata"===u?i.push(()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot)):i.push(()=>t[l].onComplete(new Error(u),!1,null))))}ia(e,e.transactionQueueTree_);for(let s=0;s<i.length;s++)K(i[s]);Qo(e,e.transactionQueueTree_)}function ea(e,t){let n,i=e.transactionQueueTree_;n=ht(t);while(null!==n&&void 0===qs(i))i=zs(i,n),t=ft(t),n=ht(t);return i}function ta(e,t){const n=[];return na(e,t,n),n.sort((e,t)=>e.order-t.order),n}function na(e,t,n){const i=qs(t);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Ks(t,t=>{na(e,t,n)})}function ia(e,t){const n=qs(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Us(t,n.length>0?n:void 0)}Ks(t,t=>{ia(e,t)})}function ra(e,t){const n=Qs(ea(e,t)),i=zs(e.transactionQueueTree_,t);return Ys(i,t=>{sa(e,t)}),sa(e,i),Gs(i,t=>{sa(e,t)}),n}function sa(e,t){const n=qs(t);if(n){const i=[];let r=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Object(s["e"])(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(Object(s["e"])(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(as(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Us(t,void 0):n.length=o+1,_o(e.eventQueue_,Qs(t),r);for(let e=0;e<i.length;e++)K(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let e=n[r];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}function aa(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):T(`Invalid query segment '${n}' in query '${e}'`)}return t}const la=function(e,t){const n=ca(e),i=n.namespace;"firebase.com"===n.domain&&E(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||E("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||O();const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ue(n.host,n.secure,i,t,r,"",i!==n.subdomain),path:new ct(n.pathString)}},ca=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if("string"===typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(r=oa(e.substring(u,h)));const d=aa(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const f=t.slice(0,c);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d["ns"])}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ua{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Object(s["O"])(this.snapshot.exportVal())}}class ha{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Object(s["e"])(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new s["a"];return Lo(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){mo("OnDisconnect.remove",this._path);const e=new s["a"];return Fo(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){mo("OnDisconnect.set",this._path),oo("OnDisconnect.set",e,this._path,!1);const t=new s["a"];return Fo(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){mo("OnDisconnect.setWithPriority",this._path),oo("OnDisconnect.setWithPriority",e,this._path,!1),uo("OnDisconnect.setWithPriority",t,!1);const n=new s["a"];return Vo(this._repo,this._path,e,t,n.wrapCallback(()=>{})),n.promise}update(e){mo("OnDisconnect.update",this._path),co("OnDisconnect.update",e,this._path,!1);const t=new s["a"];return Bo(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return bt(this._path)?null:pt(this._path)}get ref(){return new ya(this._repo,this._path)}get _queryIdentifier(){const e=Yn(this._queryParams),t=$(e);return"{}"===t?"default":t}get _queryObject(){return Yn(this._queryParams)}isEqual(e){if(e=Object(s["r"])(e),!(e instanceof pa))return!1;const t=this._repo===e._repo,n=Ct(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+mt(this._path)}}function ma(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}function ga(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===qt){const i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",r="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){const n=e.getIndexStartName();if(n!==N)throw new Error(i);if("string"!==typeof t)throw new Error(r)}if(e.hasEnd()){const t=e.getIndexEndName();if(t!==P)throw new Error(i);if("string"!==typeof n)throw new Error(r)}}else if(e.getIndex()===ln){if(null!=t&&!so(t)||null!=n&&!so(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(Object(s["e"])(e.getIndex()instanceof wn||e.getIndex()===xn,"unknown index type."),null!=t&&"object"===typeof t||null!=n&&"object"===typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function va(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class ya extends pa{constructor(e,t){super(e,t,new Fn,!1)}get parent(){const e=vt(this._path);return null===e?null:new ya(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class ba{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ct(e),n=Ca(this.ref,e);return new ba(this._node.getChild(t),n,ln)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,(t,n)=>e(new ba(n,Ca(this.ref,t),ln)))}hasChild(e){const t=new ct(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function _a(e,t){return e=Object(s["r"])(e),e._checkNotDeleted("ref"),void 0!==t?Ca(e._root,t):e._root}function wa(e,t){e=Object(s["r"])(e),e._checkNotDeleted("refFromURL");const n=la(t,e._repo.repoInfo_.nodeAdmin);go("refFromURL",n);const i=n.repoInfo;return e._repo.repoInfo_.isCustomHost()||i.host===e._repo.repoInfo_.host||E("refFromURL: Host name does not match the current database: (found "+i.host+" but expected "+e._repo.repoInfo_.host+")"),_a(e,n.path.toString())}function Ca(e,t){return e=Object(s["r"])(e),null===ht(e._path)?po("child","path",t,!1):fo("child","path",t,!1),new ya(e._repo,yt(e._path,t))}function xa(e,t){e=Object(s["r"])(e),mo("push",e._path),oo("push",t,e._path,!0);const n=To(e._repo),i=On(n),r=Ca(e,i),o=Ca(e,i);let a;return a=null!=t?Sa(o,t).then(()=>o):Promise.resolve(o),r.then=a.then.bind(a),r.catch=a.then.bind(a,void 0),r}function ka(e){return mo("remove",e._path),Sa(e,null)}function Sa(e,t){e=Object(s["r"])(e),mo("set",e._path),oo("set",t,e._path,!1);const n=new s["a"];return Mo(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function Ea(e,t){e=Object(s["r"])(e),mo("setPriority",e._path),uo("setPriority",t,!1);const n=new s["a"];return Mo(e._repo,yt(e._path,".priority"),t,null,n.wrapCallback(()=>{})),n.promise}function Ta(e,t,n){if(mo("setWithPriority",e._path),oo("setWithPriority",t,e._path,!1),uo("setWithPriority",n,!1),".length"===e.key||".keys"===e.key)throw"setWithPriority failed: "+e.key+" is a read-only object.";const i=new s["a"];return Mo(e._repo,e._path,t,n,i.wrapCallback(()=>{})),i.promise}function Oa(e,t){co("update",t,e._path,!1);const n=new s["a"];return $o(e._repo,e._path,t,n.wrapCallback(()=>{})),n.promise}function Ia(e){return e=Object(s["r"])(e),jo(e._repo,e).then(t=>new ba(t,new ya(e._repo,e._path),e._queryParams.getIndex()))}class Da{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new ua("value",this,new ba(e.snapshotNode,new ya(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ha(this,e,t):null}matches(e){return e instanceof Da&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Na{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ha(this,e,t):null}createEvent(e,t){Object(s["e"])(null!=e.childName,"Child events should have a childName.");const n=Ca(new ya(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new ua(e.type,this,new ba(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Na&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Pa(e,t,n,i,r){let s;if("object"===typeof i&&(s=void 0,r=i),"function"===typeof i&&(s=i),r&&r.onlyOnce){const t=n,i=(n,i)=>{qo(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new da(n,s||void 0),a="value"===t?new Da(o):new Na(t,o);return zo(e._repo,e,a),()=>qo(e._repo,e,a)}function Aa(e,t,n,i){return Pa(e,"value",t,n,i)}function ja(e,t,n,i){return Pa(e,"child_added",t,n,i)}function Ma(e,t,n,i){return Pa(e,"child_changed",t,n,i)}function $a(e,t,n,i){return Pa(e,"child_moved",t,n,i)}function Ra(e,t,n,i){return Pa(e,"child_removed",t,n,i)}function La(e,t,n){let i=null;const r=n?new da(n):null;"value"===t?i=new Da(r):t&&(i=new Na(t,r)),qo(e._repo,e,i)}class Fa{}class Va extends Fa{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){oo("endAt",this._value,e._path,!0);const t=Hn(e._queryParams,this._value,this._key);if(va(t),ga(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new pa(e._repo,e._path,t,e._orderByCalled)}}function Ba(e,t){return ho("endAt","key",t,!0),new Va(e,t)}class za extends Fa{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){oo("endBefore",this._value,e._path,!1);const t=Wn(e._queryParams,this._value,this._key);if(va(t),ga(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new pa(e._repo,e._path,t,e._orderByCalled)}}function qa(e,t){return ho("endBefore","key",t,!0),new za(e,t)}class Ua extends Fa{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){oo("startAt",this._value,e._path,!0);const t=qn(e._queryParams,this._value,this._key);if(va(t),ga(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new pa(e._repo,e._path,t,e._orderByCalled)}}function Ha(e=null,t){return ho("startAt","key",t,!0),new Ua(e,t)}class Wa extends Fa{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){oo("startAfter",this._value,e._path,!1);const t=Un(e._queryParams,this._value,this._key);if(va(t),ga(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new pa(e._repo,e._path,t,e._orderByCalled)}}function Ka(e,t){return ho("startAfter","key",t,!0),new Wa(e,t)}class Ga extends Fa{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new pa(e._repo,e._path,Bn(e._queryParams,this._limit),e._orderByCalled)}}function Ya(e){if("number"!==typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Ga(e)}class Qa extends Fa{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new pa(e._repo,e._path,zn(e._queryParams,this._limit),e._orderByCalled)}}function Xa(e){if("number"!==typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new Qa(e)}class Ja extends Fa{constructor(e){super(),this._path=e}_apply(e){ma(e,"orderByChild");const t=new ct(this._path);if(bt(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const n=new wn(t),i=Kn(e._queryParams,n);return ga(i),new pa(e._repo,e._path,i,!0)}}function Za(e){if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return fo("orderByChild","path",e,!1),new Ja(e)}class el extends Fa{_apply(e){ma(e,"orderByKey");const t=Kn(e._queryParams,qt);return ga(t),new pa(e._repo,e._path,t,!0)}}function tl(){return new el}class nl extends Fa{_apply(e){ma(e,"orderByPriority");const t=Kn(e._queryParams,ln);return ga(t),new pa(e._repo,e._path,t,!0)}}function il(){return new nl}class rl extends Fa{_apply(e){ma(e,"orderByValue");const t=Kn(e._queryParams,xn);return ga(t),new pa(e._repo,e._path,t,!0)}}function sl(){return new rl}class ol extends Fa{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(oo("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Va(this._value,this._key)._apply(new Ua(this._value,this._key)._apply(e))}}function al(e,t){return ho("equalTo","key",t,!0),new ol(e,t)}function ll(e,...t){let n=Object(s["r"])(e);for(const i of t)n=i._apply(n);return n}zr(ya),ts(ya);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cl="FIREBASE_DATABASE_EMULATOR_HOST",ul={};let hl=!1;function dl(e,t,n,i){e.repoInfo_=new ue(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),i&&(e.authTokenProvider_=i)}function fl(t,n,i,r,s){let o=r||t.options.databaseURL;void 0===o&&(t.options.projectId||E("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),x("Using default host for project ",t.options.projectId),o=t.options.projectId+"-default-rtdb.firebaseio.com");let a,l=la(o,s),c=l.repoInfo,u=void 0;"undefined"!==typeof e&&(u=Object({NODE_ENV:"production",BASE_URL:""})[cl]),u?(a=!0,o=`http://${u}?ns=${c.namespace}`,l=la(o,s),c=l.repoInfo):a=!l.repoInfo.secure;const h=s&&a?new J(J.OWNER):new X(t.name,t.options,n);go("Invalid Firebase Database URL",l),bt(l.path)||E("Database URL must point to the root of a Firebase Database (not including a child path).");const d=ml(c,t,h,new Q(t.name,i));return new gl(d,t)}function pl(e,t){const n=ul[t];n&&n[e.key]===e||E(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Uo(e),delete n[e.key]}function ml(e,t,n,i){let r=ul[t.name];r||(r={},ul[t.name]=r);let s=r[e.toURLString()];return s&&E("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new So(e,hl,n,i),r[e.toURLString()]=s,s}class gl{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Eo(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ya(this._repo,ut())),this._rootInternal}_delete(){return null!==this._rootInternal&&(pl(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&E("Cannot call "+e+" on a deleted database.")}}function vl(e,t,n,i={}){e=Object(s["r"])(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&E("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let o=void 0;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&E('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new J(J.OWNER);else if(i.mockUserToken){const t="string"===typeof i.mockUserToken?i.mockUserToken:Object(s["k"])(i.mockUserToken,e.app.options.projectId);o=new J(t)}dl(r,t,n,o)}function yl(e){e=Object(s["r"])(e),e._checkNotDeleted("goOffline"),Uo(e._repo)}function bl(e){e=Object(s["r"])(e),e._checkNotDeleted("goOnline"),Ho(e._repo)}function _l(e,t){C(e,t)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(e){u(i["SDK_VERSION"]),Object(i["_registerComponent"])(new r["a"]("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return fl(n,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Object(i["registerVersion"])(a,l,e),Object(i["registerVersion"])(a,l,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl={".sv":"timestamp"};function xl(){return Cl}function kl(e){return{".sv":{increment:e}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function El(e,t,n){var i;if(e=Object(s["r"])(e),mo("Reference.transaction",e._path),".length"===e.key||".keys"===e.key)throw"Reference.transaction failed: "+e.key+" is a read-only object.";const r=null===(i=null===n||void 0===n?void 0:n.applyLocally)||void 0===i||i,o=new s["a"],a=(t,n,i)=>{let r=null;t?o.reject(t):(r=new ba(i,new ya(e._repo,e._path),ln),o.resolve(new Sl(n,r)))},l=Aa(e,()=>{});return Go(e._repo,e._path,t,a,l,r),o.promise}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Lt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};wl()}).call(this,n("4362"))},5488:function(e,t,n){"use strict";t.__esModule=!0;var i=n("5924");function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function(){function e(){r(this,e)}return e.prototype.beforeEnter=function(e){(0,i.addClass)(e,"collapse-transition"),e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.height="0",e.style.paddingTop=0,e.style.paddingBottom=0},e.prototype.enter=function(e){e.dataset.oldOverflow=e.style.overflow,0!==e.scrollHeight?(e.style.height=e.scrollHeight+"px",e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom):(e.style.height="",e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom),e.style.overflow="hidden"},e.prototype.afterEnter=function(e){(0,i.removeClass)(e,"collapse-transition"),e.style.height="",e.style.overflow=e.dataset.oldOverflow},e.prototype.beforeLeave=function(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.height=e.scrollHeight+"px",e.style.overflow="hidden"},e.prototype.leave=function(e){0!==e.scrollHeight&&((0,i.addClass)(e,"collapse-transition"),e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0)},e.prototype.afterLeave=function(e){(0,i.removeClass)(e,"collapse-transition"),e.style.height="",e.style.overflow=e.dataset.oldOverflow,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom},e}();t.default={name:"ElCollapseTransition",functional:!0,render:function(e,t){var n=t.children,i={on:new s};return e("transition",i,n)}}},5524:function(e,t){var n=e.exports={version:"2.6.12"};"number"==typeof __e&&(__e=n)},5692:function(e,t,n){var i=n("c430"),r=n("c6cd");(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.19.1",mode:i?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(e,t,n){var i=n("d066"),r=n("e330"),s=n("241c"),o=n("7418"),a=n("825a"),l=r([].concat);e.exports=i("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?l(t,n(e)):t}},"577e":function(e,t,n){var i=n("da84"),r=n("f5df"),s=i.String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return s(e)}},"589b":function(e,t,n){"use strict";n.r(t),n.d(t,"SDK_VERSION",(function(){return Y})),n.d(t,"_DEFAULT_ENTRY_NAME",(function(){return $})),n.d(t,"_addComponent",(function(){return V})),n.d(t,"_addOrOverwriteComponent",(function(){return B})),n.d(t,"_apps",(function(){return L})),n.d(t,"_clearComponents",(function(){return H})),n.d(t,"_components",(function(){return F})),n.d(t,"_getProvider",(function(){return q})),n.d(t,"_registerComponent",(function(){return z})),n.d(t,"_removeServiceInstance",(function(){return U})),n.d(t,"deleteApp",(function(){return Z})),n.d(t,"getApp",(function(){return X})),n.d(t,"getApps",(function(){return J})),n.d(t,"initializeApp",(function(){return Q})),n.d(t,"onLog",(function(){return te})),n.d(t,"registerVersion",(function(){return ee})),n.d(t,"setLogLevel",(function(){return ne}));var i=n("22e5"),r=n("e691"),s=n("1fd5");n.d(t,"FirebaseError",(function(){return s["c"]}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const l="@firebase/app",c="0.7.8",u=new r["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",v="@firebase/auth-compat",y="@firebase/database",b="@firebase/database-compat",_="@firebase/functions",w="@firebase/functions-compat",C="@firebase/installations",x="@firebase/installations-compat",k="@firebase/messaging",S="@firebase/messaging-compat",E="@firebase/performance",T="@firebase/performance-compat",O="@firebase/remote-config",I="@firebase/remote-config-compat",D="@firebase/storage",N="@firebase/storage-compat",P="@firebase/firestore",A="@firebase/firestore-compat",j="firebase",M="9.4.1",$="[DEFAULT]",R={[l]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[g]:"fire-auth",[v]:"fire-auth-compat",[y]:"fire-rtdb",[b]:"fire-rtdb-compat",[_]:"fire-fn",[w]:"fire-fn-compat",[C]:"fire-iid",[x]:"fire-iid-compat",[k]:"fire-fcm",[S]:"fire-fcm-compat",[E]:"fire-perf",[T]:"fire-perf-compat",[O]:"fire-rc",[I]:"fire-rc-compat",[D]:"fire-gcs",[N]:"fire-gcs-compat",[P]:"fire-fst",[A]:"fire-fst-compat","fire-js":"fire-js",[j]:"fire-js-all"},L=new Map,F=new Map;function V(e,t){try{e.container.addComponent(t)}catch(n){u.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function B(e,t){e.container.addOrOverwriteComponent(t)}function z(e){const t=e.name;if(F.has(t))return u.debug(`There were multiple attempts to register component ${t}.`),!1;F.set(t,e);for(const n of L.values())V(n,e);return!0}function q(e,t){return e.container.getProvider(t)}function U(e,t,n=$){q(e,t).clearInstance(n)}function H(){F.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},K=new s["b"]("app","Firebase",W);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw K.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y=M;function Q(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:$,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!==typeof r||!r)throw K.create("bad-app-name",{appName:String(r)});const o=L.get(r);if(o){if(Object(s["n"])(e,o.options)&&Object(s["n"])(n,o.config))return o;throw K.create("duplicate-app",{appName:r})}const a=new i["b"](r);for(const i of F.values())a.addComponent(i);const l=new G(e,n,a);return L.set(r,l),l}function X(e=$){const t=L.get(e);if(!t)throw K.create("no-app",{appName:e});return t}function J(){return Array.from(L.values())}async function Z(e){const t=e.name;L.has(t)&&(L.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function ee(e,t,n){var r;let s=null!==(r=R[e])&&void 0!==r?r:e;n&&(s+="-"+n);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void u.warn(e.join(" "))}z(new i["a"](s+"-version",()=>({library:s,version:t}),"VERSION"))}function te(e,t){if(null!==e&&"function"!==typeof e)throw K.create("invalid-log-argument");Object(r["d"])(e,t)}function ne(e){Object(r["c"])(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e){z(new i["a"]("platform-logger",e=>new o(e),"PRIVATE")),ee(l,c,e),ee(l,c,"esm2017"),ee("fire-js","")}ie("")},5924:function(e,t,n){"use strict";t.__esModule=!0,t.isInContainer=t.getScrollContainer=t.isScroll=t.getStyle=t.once=t.off=t.on=void 0;var i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.hasClass=m,t.addClass=g,t.removeClass=v,t.setStyle=b;var r=n("2b0e"),s=o(r);function o(e){return e&&e.__esModule?e:{default:e}}var a=s.default.prototype.$isServer,l=/([\:\-\_]+(.))/g,c=/^moz([A-Z])/,u=a?0:Number(document.documentMode),h=function(e){return(e||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")},d=function(e){return e.replace(l,(function(e,t,n,i){return i?n.toUpperCase():n})).replace(c,"Moz$1")},f=t.on=function(){return!a&&document.addEventListener?function(e,t,n){e&&t&&n&&e.addEventListener(t,n,!1)}:function(e,t,n){e&&t&&n&&e.attachEvent("on"+t,n)}}(),p=t.off=function(){return!a&&document.removeEventListener?function(e,t,n){e&&t&&e.removeEventListener(t,n,!1)}:function(e,t,n){e&&t&&e.detachEvent("on"+t,n)}}();t.once=function(e,t,n){var i=function i(){n&&n.apply(this,arguments),p(e,t,i)};f(e,t,i)};function m(e,t){if(!e||!t)return!1;if(-1!==t.indexOf(" "))throw new Error("className should not contain space.");return e.classList?e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")>-1}function g(e,t){if(e){for(var n=e.className,i=(t||"").split(" "),r=0,s=i.length;r<s;r++){var o=i[r];o&&(e.classList?e.classList.add(o):m(e,o)||(n+=" "+o))}e.classList||e.setAttribute("class",n)}}function v(e,t){if(e&&t){for(var n=t.split(" "),i=" "+e.className+" ",r=0,s=n.length;r<s;r++){var o=n[r];o&&(e.classList?e.classList.remove(o):m(e,o)&&(i=i.replace(" "+o+" "," ")))}e.classList||e.setAttribute("class",h(i))}}var y=t.getStyle=u<9?function(e,t){if(!a){if(!e||!t)return null;t=d(t),"float"===t&&(t="styleFloat");try{switch(t){case"opacity":try{return e.filters.item("alpha").opacity/100}catch(n){return 1}default:return e.style[t]||e.currentStyle?e.currentStyle[t]:null}}catch(n){return e.style[t]}}}:function(e,t){if(!a){if(!e||!t)return null;t=d(t),"float"===t&&(t="cssFloat");try{var n=document.defaultView.getComputedStyle(e,"");return e.style[t]||n?n[t]:null}catch(i){return e.style[t]}}};function b(e,t,n){if(e&&t)if("object"===("undefined"===typeof t?"undefined":i(t)))for(var r in t)t.hasOwnProperty(r)&&b(e,r,t[r]);else t=d(t),"opacity"===t&&u<9?e.style.filter=isNaN(n)?"":"alpha(opacity="+100*n+")":e.style[t]=n}var _=t.isScroll=function(e,t){if(!a){var n=null!==t&&void 0!==t,i=y(e,n?t?"overflow-y":"overflow-x":"overflow");return i.match(/(scroll|auto|overlay)/)}};t.getScrollContainer=function(e,t){if(!a){var n=e;while(n){if([window,document,document.documentElement].includes(n))return window;if(_(n,t))return n;n=n.parentNode}return n}},t.isInContainer=function(e,t){if(a||!e||!t)return!1;var n=e.getBoundingClientRect(),i=void 0;return i=[window,document,document.documentElement,null,void 0].includes(t)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:t.getBoundingClientRect(),n.top<i.bottom&&n.bottom>i.top&&n.right>i.left&&n.left<i.right}},5926:function(e,t){var n=Math.ceil,i=Math.floor;e.exports=function(e){var t=+e;return t!==t||0===t?0:(t>0?i:n)(t)}},"597f":function(e,t){e.exports=function(e,t,n,i){var r,s=0;function o(){var o=this,a=Number(new Date)-s,l=arguments;function c(){s=Number(new Date),n.apply(o,l)}function u(){r=void 0}i&&!r&&c(),r&&clearTimeout(r),void 0===i&&a>e?c():!0!==t&&(r=setTimeout(i?u:c,void 0===i?e-a:e))}return"boolean"!==typeof t&&(i=n,n=t,t=void 0),o}},5994:function(e,t,n){"use strict";(function(e){var t=n("7ded"),i=n("1f5a"),r=n("22e5"),s=n("1fd5"),o="@firebase/auth-compat",a="0.2.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const l=1e3;function c(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function u(){return"http:"===c()||"https:"===c()}function h(e=Object(s["s"])()){return!("file:"!==c()&&"ionic:"!==c()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function d(){return Object(s["D"])()||Object(s["B"])()}function f(){return Object(s["y"])()&&11===(null===document||void 0===document?void 0:document.documentMode)}function p(e=Object(s["s"])()){return/Edge\/\d+/.test(e)}function m(e=Object(s["s"])()){return f()||p(e)}function g(){try{const e=self.localStorage,t=i["s"]();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!m()||Object(s["z"])()}catch(e){return v()&&Object(s["z"])()}return!1}function v(){return"undefined"!==typeof e&&"WorkerGlobalScope"in e&&"importScripts"in e}function y(){return(u()||Object(s["v"])()||h())&&!d()&&g()&&!v()}function b(){return h()&&"undefined"!==typeof document}async function _(){return!!b()&&new Promise(e=>{const t=setTimeout(()=>{e(!1)},l);document.addEventListener("deviceready",()=>{clearTimeout(t),e(!0)})})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={LOCAL:"local",NONE:"none",SESSION:"session"},C=i["p"],x="persistence";function k(e,t){C(Object.values(w).includes(t),e,"invalid-persistence-type"),Object(s["D"])()?C(t!==w.SESSION,e,"unsupported-persistence-type"):Object(s["B"])()?C(t===w.NONE,e,"unsupported-persistence-type"):v()?C(t===w.NONE||t===w.LOCAL&&Object(s["z"])(),e,"unsupported-persistence-type"):C(t===w.NONE||g(),e,"unsupported-persistence-type")}async function S(e){await e._initializationPromise;const t=T(),n=i["v"](x,e.config.apiKey,e.name);(null===t||void 0===t?void 0:t.sessionStorage)&&t.sessionStorage.setItem(n,e._getPersistence())}function E(e,t){const n=T();if(!(null===n||void 0===n?void 0:n.sessionStorage))return[];const r=i["v"](x,e,t),s=n.sessionStorage.getItem(r);switch(s){case w.NONE:return[i["L"]];case w.LOCAL:return[i["M"],i["A"]];case w.SESSION:return[i["A"]];default:return[]}}function T(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=i["p"];class I{constructor(){this.browserResolver=i["t"](i["z"]),this.cordovaResolver=i["t"](i["E"]),this.underlyingResolver=null,this._redirectPersistence=i["A"],this._completeRedirectFn=i["u"]}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,i)}async _openRedirect(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return b()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return O(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await _();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e){return e.unwrap()}function N(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e){return j(e)}function A(e,t){var n;const r=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===t.code){const n=t;n.resolver=new R(e,i["J"](e,t))}else if(r){const e=j(t),n=t;e&&(n.credential=e,n.tenantId=r.tenantId||void 0,n.email=r.email||void 0,n.phoneNumber=r.phoneNumber||void 0)}}function j(e){const{_tokenResponse:t}=e instanceof s["c"]?e.customData:e;if(!t)return null;if(!(e instanceof s["c"])&&"temporaryProof"in t&&"phoneNumber"in t)return i["i"].credentialFromResult(e);const n=t.providerId;if(!n||n===i["k"].PASSWORD)return null;let r;switch(n){case i["k"].GOOGLE:r=i["f"];break;case i["k"].FACEBOOK:r=i["d"];break;case i["k"].GITHUB:r=i["e"];break;case i["k"].TWITTER:r=i["o"];break;default:const{oauthIdToken:e,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=t;return s||o||e||a?a?n.startsWith("saml.")?i["m"]._create(n,a):i["g"]._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:e,accessToken:s}):new i["h"](n).credential({idToken:e,accessToken:s,rawNonce:l}):null}return e instanceof s["c"]?r.credentialFromError(e):r.credentialFromResult(e)}function M(e,t){return t.catch(t=>{throw t instanceof s["c"]&&A(e,t),t}).then(e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:P(e),additionalUserInfo:i["I"](e),user:L.getOrCreate(n)}})}async function $(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>M(e,n.confirm(t))}}class R{constructor(e,t){this.resolver=t,this.auth=N(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return M(D(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this._delegate=e,this.multiFactor=i["S"](e)}static getOrCreate(e){return L.USER_MAP.has(e)||L.USER_MAP.set(e,new L(e)),L.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return M(this.auth,i["O"](this._delegate,e))}async linkWithPhoneNumber(e,t){return $(this.auth,i["P"](this._delegate,e,t))}async linkWithPopup(e){return M(this.auth,i["Q"](this._delegate,e,I))}async linkWithRedirect(e){return await S(i["q"](this.auth)),i["R"](this._delegate,e,I)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return M(this.auth,i["T"](this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return $(this.auth,i["U"](this._delegate,e,t))}reauthenticateWithPopup(e){return M(this.auth,i["V"](this._delegate,e,I))}async reauthenticateWithRedirect(e){return await S(i["q"](this.auth)),i["W"](this._delegate,e,I)}sendEmailVerification(e){return i["X"](this._delegate,e)}async unlink(e){return await i["ib"](this._delegate,e),this}updateEmail(e){return i["jb"](this._delegate,e)}updatePassword(e){return i["kb"](this._delegate,e)}updatePhoneNumber(e){return i["lb"](this._delegate,e)}updateProfile(e){return i["mb"](this._delegate,e)}verifyBeforeUpdateEmail(e,t){return i["nb"](this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}L.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const F=i["p"];class V{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;F(n,"invalid-api-key",{appName:e.name});let r=[i["L"]];if("undefined"!==typeof window){r=E(n,e.name);for(const e of[i["M"],i["y"],i["A"]])r.includes(e)||r.push(e)}F(n,"invalid-api-key",{appName:e.name});const s="undefined"!==typeof window?I:void 0;this._delegate=t.initialize({options:{persistence:r,popupRedirectResolver:s}}),this._delegate._updateErrorMap(i["G"]),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?L.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){i["D"](this._delegate,e,t)}applyActionCode(e){return i["x"](this._delegate,e)}checkActionCode(e){return i["B"](this._delegate,e)}confirmPasswordReset(e,t){return i["C"](this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return M(this._delegate,i["F"](this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return i["H"](this._delegate,e)}isSignInWithEmailLink(e){return i["N"](this._delegate,e)}async getRedirectResult(){F(y(),this._delegate,"operation-not-supported-in-this-environment");const e=await i["K"](this._delegate,I);return e?M(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){i["w"](this._delegate,e)}onAuthStateChanged(e,t,n){const{next:i,error:r,complete:s}=B(e,t,n);return this._delegate.onAuthStateChanged(i,r,s)}onIdTokenChanged(e,t,n){const{next:i,error:r,complete:s}=B(e,t,n);return this._delegate.onIdTokenChanged(i,r,s)}sendSignInLinkToEmail(e,t){return i["Z"](this._delegate,e,t)}sendPasswordResetEmail(e,t){return i["Y"](this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(k(this._delegate,e),e){case w.SESSION:t=i["A"];break;case w.LOCAL:const e=await i["t"](i["M"])._isAvailable();t=e?i["M"]:i["y"];break;case w.NONE:t=i["L"];break;default:return i["r"]("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return M(this._delegate,i["ab"](this._delegate))}signInWithCredential(e){return M(this._delegate,i["bb"](this._delegate,e))}signInWithCustomToken(e){return M(this._delegate,i["cb"](this._delegate,e))}signInWithEmailAndPassword(e,t){return M(this._delegate,i["db"](this._delegate,e,t))}signInWithEmailLink(e,t){return M(this._delegate,i["eb"](this._delegate,e,t))}signInWithPhoneNumber(e,t){return $(this._delegate,i["fb"](this._delegate,e,t))}async signInWithPopup(e){return F(y(),this._delegate,"operation-not-supported-in-this-environment"),M(this._delegate,i["gb"](this._delegate,e,I))}async signInWithRedirect(e){return F(y(),this._delegate,"operation-not-supported-in-this-environment"),await S(this._delegate),i["hb"](this._delegate,e,I)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return i["ob"](this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function B(e,t,n){let i=e;"function"!==typeof e&&({next:i,error:t,complete:n}=e);const r=i,s=e=>r(e&&L.getOrCreate(e));return{next:s,error:t,complete:n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */V.Persistence=w;class z{constructor(){this.providerId="phone",this._delegate=new i["i"](D(t["a"].auth()))}static credential(e,t){return i["i"].credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}z.PHONE_SIGN_IN_METHOD=i["i"].PHONE_SIGN_IN_METHOD,z.PROVIDER_ID=i["i"].PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const q=i["p"];class U{constructor(e,n,r=t["a"].app()){var s;q(null===(s=r.options)||void 0===s?void 0:s.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new i["l"](e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
function s(e,t){if(!r.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,s=n in document;if(!s){var o=document.createElement("div");o.setAttribute(n,"return;"),s="function"===typeof o[n]}return!s&&i&&"wheel"===e&&(s=document.implementation.hasFeature("Events.wheel","3.0")),s}r.canUseDOM&&(i=document.implementation&&document.implementation.hasFeature&&!0!==document.implementation.hasFeature("","")),e.exports=s},"7c73":function(e,t,n){var i,r=n("825a"),s=n("37e8"),o=n("7839"),a=n("d012"),l=n("1be4"),c=n("cc12"),u=n("f772"),h=">",d="<",f="prototype",p="script",m=u("IE_PROTO"),g=function(){},v=function(e){return d+p+h+e+d+"/"+p+h},y=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},b=function(){var e,t=c("iframe"),n="java"+p+":";return t.style.display="none",l.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(v("document.F=Object")),e.close(),e.F},_=function(){try{i=new ActiveXObject("htmlfile")}catch(t){}_="undefined"!=typeof document?document.domain&&i?y(i):b():y(i);var e=o.length;while(e--)delete _[f][o[e]];return _()};a[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(g[f]=r(e),n=new g,g[f]=null,n[m]=e):n=_(),void 0===t?n:s(n,t)}},"7dd0":function(e,t,n){"use strict";var i=n("23e7"),r=n("c65b"),s=n("c430"),o=n("5e77"),a=n("1626"),l=n("9ed3"),c=n("e163"),u=n("d2bb"),h=n("d44e"),d=n("9112"),f=n("6eeb"),p=n("b622"),m=n("3f8c"),g=n("ae93"),v=o.PROPER,y=o.CONFIGURABLE,b=g.IteratorPrototype,_=g.BUGGY_SAFARI_ITERATORS,w=p("iterator"),C="keys",x="values",k="entries",S=function(){return this};e.exports=function(e,t,n,o,p,g,E){l(n,t,o);var T,O,I,D=function(e){if(e===p&&M)return M;if(!_&&e in A)return A[e];switch(e){case C:return function(){return new n(this,e)};case x:return function(){return new n(this,e)};case k:return function(){return new n(this,e)}}return function(){return new n(this)}},N=t+" Iterator",P=!1,A=e.prototype,j=A[w]||A["@@iterator"]||p&&A[p],M=!_&&j||D(p),$="Array"==t&&A.entries||j;if($&&(T=c($.call(new e)),T!==Object.prototype&&T.next&&(s||c(T)===b||(u?u(T,b):a(T[w])||f(T,w,S)),h(T,N,!0,!0),s&&(m[N]=S))),v&&p==x&&j&&j.name!==x&&(!s&&y?d(A,"name",x):(P=!0,M=function(){return r(j,this)})),p)if(O={values:D(x),keys:g?M:D(C),entries:D(k)},E)for(I in O)(_||P||!(I in A))&&f(A,I,O[I]);else i({target:t,proto:!0,forced:_||P},O);return s&&!E||A[w]===M||f(A,w,M,{name:p}),m[t]=M,O}},"7ded":function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var i=n("1fd5"),r=n("22e5"),s=n("589b"),o=n("e691");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,Object(s["_addComponent"])(e,new r["a"]("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(s["deleteApp"])(this._delegate)))}_getService(e,t=s["_DEFAULT_ENTRY_NAME"]){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return i.isInitialized()||"EXPLICIT"!==(null===(n=i.getComponent())||void 0===n?void 0:n.instantiationMode)||i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=s["_DEFAULT_ENTRY_NAME"]){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Object(s["_addComponent"])(this._delegate,e)}_addOrOverwriteComponent(e){Object(s["_addOrOverwriteComponent"])(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},c=new i["b"]("app-compat","Firebase",l);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s["registerVersion"],setLogLevel:s["setLogLevel"],onLog:s["onLog"],apps:null,SDK_VERSION:s["SDK_VERSION"],INTERNAL:{registerComponent:u,removeApp:r,useAsService:h,modularAPIs:s}};function r(e){delete t[e]}function o(e){if(e=e||s["_DEFAULT_ENTRY_NAME"],!Object(i["j"])(t,e))throw c.create("no-app",{appName:e});return t[e]}function a(r,o={}){const a=s["initializeApp"](r,o);if(Object(i["j"])(t,a.name))return t[a.name];const l=new e(a,n);return t[a.name]=l,l}function l(){return Object.keys(t).map(e=>t[e])}function u(t){const r=t.name,a=r.replace("-compat","");if(s["_registerComponent"](t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw c.create("invalid-app-argument",{appName:r});return e[a]()};void 0!==t.serviceProps&&Object(i["o"])(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,r);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:l}),o["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=u(a);function t(t){Object(i["o"])(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:i["l"],ErrorFactory:i["b"],deepExtend:i["o"]}),e}const d=h(),f=new o["b"]("@firebase/app-compat"),p="@firebase/app-compat",m="0.1.9";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){Object(s["registerVersion"])(p,m,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Object(i["u"])()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const v=d;g()},"7f4d":function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){for(var t=1,n=arguments.length;t<n;t++){var i=arguments[t]||{};for(var r in i)if(i.hasOwnProperty(r)){var s=i[r];void 0!==s&&(e[r]=s)}}return e}},"7f9a":function(e,t,n){var i=n("da84"),r=n("1626"),s=n("8925"),o=i.WeakMap;e.exports=r(o)&&/native code/.test(s(o))},"7fc1":function(e,t,n){e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=126)}({0:function(e,t,n){"use strict";function i(e,t,n,i,r,s,o,a){var l,c="function"===typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),o?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=l):r&&(l=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,l):[l]}return{exports:e,options:c}}n.d(t,"a",(function(){return i}))},126:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"el-checkbox-group",attrs:{role:"group","aria-label":"checkbox-group"}},[e._t("default")],2)},r=[];i._withStripped=!0;var s=n(4),o=n.n(s),a={name:"ElCheckboxGroup",componentName:"ElCheckboxGroup",mixins:[o.a],inject:{elFormItem:{default:""}},props:{value:{},disabled:Boolean,min:Number,max:Number,size:String,fill:String,textColor:String},computed:{_elFormItemSize:function(){return(this.elFormItem||{}).elFormItemSize},checkboxGroupSize:function(){return this.size||this._elFormItemSize||(this.$ELEMENT||{}).size}},watch:{value:function(e){this.dispatch("ElFormItem","el.form.change",[e])}}},l=a,c=n(0),u=Object(c["a"])(l,i,r,!1,null,null,null);u.options.__file="packages/checkbox/src/checkbox-group.vue";var h=u.exports;h.install=function(e){e.component(h.name,h)};t["default"]=h},4:function(e,t){e.exports=n("d010")}})},8119:function(e,t,n){n("693d"),n("dfe5"),n("301c"),n("4e71"),e.exports=n("5524").Symbol},8122:function(e,t,n){"use strict";t.__esModule=!0,t.isEmpty=t.isEqual=t.arrayEquals=t.looseEqual=t.capitalize=t.kebabCase=t.autoprefixer=t.isFirefox=t.isEdge=t.isIE=t.coerceTruthyValueToArray=t.arrayFind=t.arrayFindIndex=t.escapeRegexpString=t.valueEquals=t.generateId=t.getValueByPath=void 0;var i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.noop=c,t.hasOwn=u,t.toObject=d,t.getPropByPath=f,t.rafThrottle=y,t.objToArray=b;var r=n("2b0e"),s=a(r),o=n("a742");function a(e){return e&&e.__esModule?e:{default:e}}var l=Object.prototype.hasOwnProperty;function c(){}function u(e,t){return l.call(e,t)}function h(e,t){for(var n in t)e[n]=t[n];return e}function d(e){for(var t={},n=0;n<e.length;n++)e[n]&&h(t,e[n]);return t}t.getValueByPath=function(e,t){t=t||"";for(var n=t.split("."),i=e,r=null,s=0,o=n.length;s<o;s++){var a=n[s];if(!i)break;if(s===o-1){r=i[a];break}i=i[a]}return r};function f(e,t,n){var i=e;t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,"");for(var r=t.split("."),s=0,o=r.length;s<o-1;++s){if(!i&&!n)break;var a=r[s];if(!(a in i)){if(n)throw new Error("please transfer a valid prop path to form item!");break}i=i[a]}return{o:i,k:r[s],v:i?i[r[s]]:null}}t.generateId=function(){return Math.floor(1e4*Math.random())},t.valueEquals=function(e,t){if(e===t)return!0;if(!(e instanceof Array))return!1;if(!(t instanceof Array))return!1;if(e.length!==t.length)return!1;for(var n=0;n!==e.length;++n)if(e[n]!==t[n])return!1;return!0},t.escapeRegexpString=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return String(e).replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")};var p=t.arrayFindIndex=function(e,t){for(var n=0;n!==e.length;++n)if(t(e[n]))return n;return-1},m=(t.arrayFind=function(e,t){var n=p(e,t);return-1!==n?e[n]:void 0},t.coerceTruthyValueToArray=function(e){return Array.isArray(e)?e:e?[e]:[]},t.isIE=function(){return!s.default.prototype.$isServer&&!isNaN(Number(document.documentMode))},t.isEdge=function(){return!s.default.prototype.$isServer&&navigator.userAgent.indexOf("Edge")>-1},t.isFirefox=function(){return!s.default.prototype.$isServer&&!!window.navigator.userAgent.match(/firefox/i)},t.autoprefixer=function(e){if("object"!==("undefined"===typeof e?"undefined":i(e)))return e;var t=["transform","transition","animation"],n=["ms-","webkit-"];return t.forEach((function(t){var i=e[t];t&&i&&n.forEach((function(n){e[n+t]=i}))})),e},t.kebabCase=function(e){var t=/([^-])([A-Z])/g;return e.replace(t,"$1-$2").replace(t,"$1-$2").toLowerCase()},t.capitalize=function(e){return(0,o.isString)(e)?e.charAt(0).toUpperCase()+e.slice(1):e},t.looseEqual=function(e,t){var n=(0,o.isObject)(e),i=(0,o.isObject)(t);return n&&i?JSON.stringify(e)===JSON.stringify(t):!n&&!i&&String(e)===String(t)}),g=t.arrayEquals=function(e,t){if(e=e||[],t=t||[],e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!m(e[n],t[n]))return!1;return!0},v=(t.isEqual=function(e,t){return Array.isArray(e)&&Array.isArray(t)?g(e,t):m(e,t)},t.isEmpty=function(e){if(null==e)return!0;if("boolean"===typeof e)return!1;if("number"===typeof e)return!e;if(e instanceof Error)return""===e.message;switch(Object.prototype.toString.call(e)){case"[object String]":case"[object Array]":return!e.length;case"[object File]":case"[object Map]":case"[object Set]":return!e.size;case"[object Object]":return!Object.keys(e).length}return!1});function y(e){var t=!1;return function(){for(var n=this,i=arguments.length,r=Array(i),s=0;s<i;s++)r[s]=arguments[s];t||(t=!0,window.requestAnimationFrame((function(i){e.apply(n,r),t=!1})))}}function b(e){return Array.isArray(e)?e:v(e)?[]:[e]}},"825a":function(e,t,n){var i=n("da84"),r=n("861d"),s=i.String,o=i.TypeError;e.exports=function(e){if(r(e))return e;throw o(s(e)+" is not an object")}},"83ab":function(e,t,n){var i=n("d039");e.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"845f":function(e,t,n){e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=87)}({0:function(e,t,n){"use strict";function i(e,t,n,i,r,s,o,a){var l,c="function"===typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),o?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=l):r&&(l=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,l):[l]}return{exports:e,options:c}}n.d(t,"a",(function(){return i}))},87:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"el-button-group"},[e._t("default")],2)},r=[];i._withStripped=!0;var s={name:"ElButtonGroup"},o=s,a=n(0),l=Object(a["a"])(o,i,r,!1,null,null,null);l.options.__file="packages/button/src/button-group.vue";var c=l.exports;c.install=function(e){e.component(c.name,c)};t["default"]=c}})},"85e7":function(e,t,n){var i=n("1a14"),r=n("77e9"),s=n("9876");e.exports=n("0bad")?Object.defineProperties:function(e,t){r(e);var n,o=s(t),a=o.length,l=0;while(a>l)i.f(e,n=o[l++],t[n]);return e}},"861d":function(e,t,n){var i=n("1626");e.exports=function(e){return"object"==typeof e?null!==e:i(e)}},8925:function(e,t,n){var i=n("e330"),r=n("1626"),s=n("c6cd"),o=i(Function.toString);r(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},"8a0d":function(e,t){e.exports={}},"8b1a":function(e,t){var n=0,i=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+i).toString(36))}},"8bbc":function(e,t,n){e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=130)}({0:function(e,t,n){"use strict";function i(e,t,n,i,r,s,o,a){var l,c="function"===typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),o?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=l):r&&(l=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,l):[l]}return{exports:e,options:c}}n.d(t,"a",(function(){return i}))},130:function(e,t,n){"use strict";n.r(t);var i,r,s={name:"ElTag",props:{text:String,closable:Boolean,type:String,hit:Boolean,disableTransitions:Boolean,color:String,size:String,effect:{type:String,default:"light",validator:function(e){return-1!==["dark","light","plain"].indexOf(e)}}},methods:{handleClose:function(e){e.stopPropagation(),this.$emit("close",e)},handleClick:function(e){this.$emit("click",e)}},computed:{tagSize:function(){return this.size||(this.$ELEMENT||{}).size}},render:function(e){var t=this.type,n=this.tagSize,i=this.hit,r=this.effect,s=["el-tag",t?"el-tag--"+t:"",n?"el-tag--"+n:"",r?"el-tag--"+r:"",i&&"is-hit"],o=e("span",{class:s,style:{backgroundColor:this.color},on:{click:this.handleClick}},[this.$slots.default,this.closable&&e("i",{class:"el-tag__close el-icon-close",on:{click:this.handleClose}})]);return this.disableTransitions?o:e("transition",{attrs:{name:"el-zoom-in-center"}},[o])}},o=s,a=n(0),l=Object(a["a"])(o,i,r,!1,null,null,null);l.options.__file="packages/tag/src/tag.vue";var c=l.exports;c.install=function(e){e.component(c.name,c)};t["default"]=c}})},"8c4f":function(e,t,n){"use strict";
/*!
  * vue-router v3.5.3
  * (c) 2021 Evan You
  * @license MIT
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var r;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=a[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class c{constructor(e){this.name=e,this._logLevel=o,this._logHandler=l,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}function u(e){i.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of i){let i=null;t&&t.level&&(i=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==i&&void 0!==i?i:t.logLevel)&&e({level:r[n].toLowerCase(),message:o,args:s,type:t.name})}}}},e6cf:function(e,t,n){"use strict";var i,r,s,o,a=n("23e7"),l=n("c430"),c=n("da84"),u=n("d066"),h=n("c65b"),d=n("fea9"),f=n("6eeb"),p=n("e2cc"),m=n("d2bb"),g=n("d44e"),v=n("2626"),y=n("59ed"),b=n("1626"),_=n("861d"),w=n("19aa"),C=n("8925"),x=n("2266"),k=n("1c7e"),S=n("4840"),E=n("2cf4").set,T=n("b575"),O=n("cdf9"),I=n("44de"),D=n("f069"),N=n("e667"),P=n("69f3"),A=n("94ca"),j=n("b622"),M=n("6069"),$=n("605d"),R=n("2d00"),L=j("species"),F="Promise",V=P.get,B=P.set,z=P.getterFor(F),q=d&&d.prototype,U=d,H=q,W=c.TypeError,K=c.document,G=c.process,Y=D.f,Q=Y,X=!!(K&&K.createEvent&&c.dispatchEvent),J=b(c.PromiseRejectionEvent),Z="unhandledrejection",ee="rejectionhandled",te=0,ne=1,ie=2,re=1,se=2,oe=!1,ae=A(F,(function(){var e=C(U),t=e!==String(U);if(!t&&66===R)return!0;if(l&&!H["finally"])return!0;if(R>=51&&/native code/.test(e))return!1;var n=new U((function(e){e(1)})),i=function(e){e((function(){}),(function(){}))},r=n.constructor={};return r[L]=i,oe=n.then((function(){}))instanceof i,!oe||!t&&M&&!J})),le=ae||!k((function(e){U.all(e)["catch"]((function(){}))})),ce=function(e){var t;return!(!_(e)||!b(t=e.then))&&t},ue=function(e,t){if(!e.notified){e.notified=!0;var n=e.reactions;T((function(){var i=e.value,r=e.state==ne,s=0;while(n.length>s){var o,a,l,c=n[s++],u=r?c.ok:c.fail,d=c.resolve,f=c.reject,p=c.domain;try{u?(r||(e.rejection===se&&pe(e),e.rejection=re),!0===u?o=i:(p&&p.enter(),o=u(i),p&&(p.exit(),l=!0)),o===c.promise?f(W("Promise-chain cycle")):(a=ce(o))?h(a,o,d,f):d(o)):f(i)}catch(m){p&&!l&&p.exit(),f(m)}}e.reactions=[],e.notified=!1,t&&!e.rejection&&de(e)}))}},he=function(e,t,n){var i,r;X?(i=K.createEvent("Event"),i.promise=t,i.reason=n,i.initEvent(e,!1,!0),c.dispatchEvent(i)):i={promise:t,reason:n},!J&&(r=c["on"+e])?r(i):e===Z&&I("Unhandled promise rejection",n)},de=function(e){h(E,c,(function(){var t,n=e.facade,i=e.value,r=fe(e);if(r&&(t=N((function(){$?G.emit("unhandledRejection",i,n):he(Z,n,i)})),e.rejection=$||fe(e)?se:re,t.error))throw t.value}))},fe=function(e){return e.rejection!==re&&!e.parent},pe=function(e){h(E,c,(function(){var t=e.facade;$?G.emit("rejectionHandled",t):he(ee,t,e.value)}))},me=function(e,t,n){return function(i){e(t,i,n)}},ge=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=ie,ue(e,!0))},ve=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw W("Promise can't be resolved itself");var i=ce(t);i?T((function(){var n={done:!1};try{h(i,t,me(ve,n,e),me(ge,n,e))}catch(r){ge(n,r,e)}})):(e.value=t,e.state=ne,ue(e,!1))}catch(r){ge({done:!1},r,e)}}};if(ae&&(U=function(e){w(this,H),y(e),h(i,this);var t=V(this);try{e(me(ve,t),me(ge,t))}catch(n){ge(t,n)}},H=U.prototype,i=function(e){B(this,{type:F,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:te,value:void 0})},i.prototype=p(H,{then:function(e,t){var n=z(this),i=n.reactions,r=Y(S(this,U));return r.ok=!b(e)||e,r.fail=b(t)&&t,r.domain=$?G.domain:void 0,n.parent=!0,i[i.length]=r,n.state!=te&&ue(n,!1),r.promise},catch:function(e){return this.then(void 0,e)}}),r=function(){var e=new i,t=V(e);this.promise=e,this.resolve=me(ve,t),this.reject=me(ge,t)},D.f=Y=function(e){return e===U||e===s?new r(e):Q(e)},!l&&b(d)&&q!==Object.prototype)){o=q.then,oe||(f(q,"then",(function(e,t){var n=this;return new U((function(e,t){h(o,n,e,t)})).then(e,t)}),{unsafe:!0}),f(q,"catch",H["catch"],{unsafe:!0}));try{delete q.constructor}catch(ye){}m&&m(q,H)}a({global:!0,wrap:!0,forced:ae},{Promise:U}),g(U,F,!1,!0),v(F),s=u(F),a({target:F,stat:!0,forced:ae},{reject:function(e){var t=Y(this);return h(t.reject,void 0,e),t.promise}}),a({target:F,stat:!0,forced:l||ae},{resolve:function(e){return O(l&&this===s?U:this,e)}}),a({target:F,stat:!0,forced:le},{all:function(e){var t=this,n=Y(t),i=n.resolve,r=n.reject,s=N((function(){var n=y(t.resolve),s=[],o=0,a=1;x(e,(function(e){var l=o++,c=!1;a++,h(n,t,e).then((function(e){c||(c=!0,s[l]=e,--a||i(s))}),r)})),--a||i(s)}));return s.error&&r(s.value),n.promise},race:function(e){var t=this,n=Y(t),i=n.reject,r=N((function(){var r=y(t.resolve);x(e,(function(e){h(r,t,e).then(n.resolve,i)}))}));return r.error&&i(r.value),n.promise}})},e772:function(e,t,n){e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=53)}({0:function(e,t,n){"use strict";function i(e,t,n,i,r,s,o,a){var l,c="function"===typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),o?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=l):r&&(l=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,l):[l]}return{exports:e,options:c}}n.d(t,"a",(function(){return i}))},3:function(e,t){e.exports=n("8122")},33:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"el-select-dropdown__item",class:{selected:e.itemSelected,"is-disabled":e.disabled||e.groupDisabled||e.limitReached,hover:e.hover},on:{mouseenter:e.hoverItem,click:function(t){return t.stopPropagation(),e.selectOptionClick(t)}}},[e._t("default",[n("span",[e._v(e._s(e.currentLabel))])])],2)},r=[];i._withStripped=!0;var s=n(4),o=n.n(s),a=n(3),l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c={mixins:[o.a],name:"ElOption",componentName:"ElOption",inject:["select"],props:{value:{required:!0},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},data:function(){return{index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}},computed:{isObject:function(){return"[object object]"===Object.prototype.toString.call(this.value).toLowerCase()},currentLabel:function(){return this.label||(this.isObject?"":this.value)},currentValue:function(){return this.value||this.label||""},itemSelected:function(){return this.select.multiple?this.contains(this.select.value,this.value):this.isEqual(this.value,this.select.value)},limitReached:function(){return!!this.select.multiple&&(!this.itemSelected&&(this.select.value||[]).length>=this.select.multipleLimit&&this.select.multipleLimit>0)}},watch:{currentLabel:function(){this.created||this.select.remote||this.dispatch("ElSelect","setSelected")},value:function(e,t){var n=this.select,i=n.remote,r=n.valueKey;if(!this.created&&!i){if(r&&"object"===("undefined"===typeof e?"undefined":l(e))&&"object"===("undefined"===typeof t?"undefined":l(t))&&e[r]===t[r])return;this.dispatch("ElSelect","setSelected")}}},methods:{isEqual:function(e,t){if(this.isObject){var n=this.select.valueKey;return Object(a["getValueByPath"])(e,n)===Object(a["getValueByPath"])(t,n)}return e===t},contains:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];if(this.isObject){var n=this.select.valueKey;return e&&e.some((function(e){return Object(a["getValueByPath"])(e,n)===Object(a["getValueByPath"])(t,n)}))}return e&&e.indexOf(t)>-1},handleGroupDisabled:function(e){this.groupDisabled=e},hoverItem:function(){this.disabled||this.groupDisabled||(this.select.hoverIndex=this.select.options.indexOf(this))},selectOptionClick:function(){!0!==this.disabled&&!0!==this.groupDisabled&&this.dispatch("ElSelect","handleOptionClick",[this,!0])},queryChange:function(e){this.visible=new RegExp(Object(a["escapeRegexpString"])(e),"i").test(this.currentLabel)||this.created,this.visible||this.select.filteredOptionsCount--}},created:function(){this.select.options.push(this),this.select.cachedOptions.push(this),this.select.optionsCount++,this.select.filteredOptionsCount++,this.$on("queryChange",this.queryChange),this.$on("handleGroupDisabled",this.handleGroupDisabled)},beforeDestroy:function(){var e=this.select,t=e.selected,n=e.multiple,i=n?t:[t],r=this.select.cachedOptions.indexOf(this),s=i.indexOf(this);r>-1&&s<0&&this.select.cachedOptions.splice(r,1),this.select.onOptionDestroy(this.select.options.indexOf(this))}},u=c,h=n(0),d=Object(h["a"])(u,i,r,!1,null,null,null);d.options.__file="packages/select/src/option.vue";t["a"]=d.exports},4:function(e,t){e.exports=n("d010")},53:function(e,t,n){"use strict";n.r(t);var i=n(33);i["a"].install=function(e){e.component(i["a"].name,i["a"])},t["default"]=i["a"]}})},e893:function(e,t,n){var i=n("1a2d"),r=n("56ef"),s=n("06cf"),o=n("9bf2");e.exports=function(e,t){for(var n=r(t),a=o.f,l=s.f,c=0;c<n.length;c++){var u=n[c];i(e,u)||a(e,u,l(t,u))}}},e95a:function(e,t,n){var i=n("b622"),r=n("3f8c"),s=i("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||o[s]===e)}},e974:function(e,t,n){"use strict";t.__esModule=!0;var i=n("2b0e"),r=o(i),s=n("5128");function o(e){return e&&e.__esModule?e:{default:e}}var a=r.default.prototype.$isServer?function(){}:n("6167"),l=function(e){return e.stopPropagation()};t.default={props:{transformOrigin:{type:[Boolean,String],default:!0},placement:{type:String,default:"bottom"},boundariesPadding:{type:Number,default:5},reference:{},popper:{},offset:{default:0},value:Boolean,visibleArrow:Boolean,arrowOffset:{type:Number,default:35},appendToBody:{type:Boolean,default:!0},popperOptions:{type:Object,default:function(){return{gpuAcceleration:!1}}}},data:function(){return{showPopper:!1,currentPlacement:""}},watch:{value:{immediate:!0,handler:function(e){this.showPopper=e,this.$emit("input",e)}},showPopper:function(e){this.disabled||(e?this.updatePopper():this.destroyPopper(),this.$emit("input",e))}},methods:{createPopper:function(){var e=this;if(!this.$isServer&&(this.currentPlacement=this.currentPlacement||this.placement,/^(top|bottom|left|right)(-start|-end)?$/g.test(this.currentPlacement))){var t=this.popperOptions,n=this.popperElm=this.popperElm||this.popper||this.$refs.popper,i=this.referenceElm=this.referenceElm||this.reference||this.$refs.reference;!i&&this.$slots.reference&&this.$slots.reference[0]&&(i=this.referenceElm=this.$slots.reference[0].elm),n&&i&&(this.visibleArrow&&this.appendArrow(n),this.appendToBody&&document.body.appendChild(this.popperElm),this.popperJS&&this.popperJS.destroy&&this.popperJS.destroy(),t.placement=this.currentPlacement,t.offset=this.offset,t.arrowOffset=this.arrowOffset,this.popperJS=new a(i,n,t),this.popperJS.onCreate((function(t){e.$emit("created",e),e.resetTransformOrigin(),e.$nextTick(e.updatePopper)})),"function"===typeof t.onUpdate&&this.popperJS.onUpdate(t.onUpdate),this.popperJS._popper.style.zIndex=s.PopupManager.nextZIndex(),this.popperElm.addEventListener("click",l))}},updatePopper:function(){var e=this.popperJS;e?(e.update(),e._popper&&(e._popper.style.zIndex=s.PopupManager.nextZIndex())):this.createPopper()},doDestroy:function(e){!this.popperJS||this.showPopper&&!e||(this.popperJS.destroy(),this.popperJS=null)},destroyPopper:function(){this.popperJS&&this.resetTransformOrigin()},resetTransformOrigin:function(){if(this.transformOrigin){var e={top:"bottom",bottom:"top",left:"right",right:"left"},t=this.popperJS._popper.getAttribute("x-placement").split("-")[0],n=e[t];this.popperJS._popper.style.transformOrigin="string"===typeof this.transformOrigin?this.transformOrigin:["top","bottom"].indexOf(t)>-1?"center "+n:n+" center"}},appendArrow:function(e){var t=void 0;if(!this.appended){for(var n in this.appended=!0,e.attributes)if(/^_v-/.test(e.attributes[n].name)){t=e.attributes[n].name;break}var i=document.createElement("div");t&&i.setAttribute(t,""),i.setAttribute("x-arrow",""),i.className="popper__arrow",e.appendChild(i)}}},beforeDestroy:function(){this.doDestroy(!0),this.popperElm&&this.popperElm.parentNode===document.body&&(this.popperElm.removeEventListener("click",l),document.body.removeChild(this.popperElm))},deactivated:function(){this.$options.beforeDestroy[0].call(this)}}},ea34:function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},eedf:function(e,t,n){e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=86)}({0:function(e,t,n){"use strict";function i(e,t,n,i,r,s,o,a){var l,c="function"===typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),o?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=l):r&&(l=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,l):[l]}return{exports:e,options:c}}n.d(t,"a",(function(){return i}))},86:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"el-button",class:[e.type?"el-button--"+e.type:"",e.buttonSize?"el-button--"+e.buttonSize:"",{"is-disabled":e.buttonDisabled,"is-loading":e.loading,"is-plain":e.plain,"is-round":e.round,"is-circle":e.circle}],attrs:{disabled:e.buttonDisabled||e.loading,autofocus:e.autofocus,type:e.nativeType},on:{click:e.handleClick}},[e.loading?n("i",{staticClass:"el-icon-loading"}):e._e(),e.icon&&!e.loading?n("i",{class:e.icon}):e._e(),e.$slots.default?n("span",[e._t("default")],2):e._e()])},r=[];i._withStripped=!0;var s={name:"ElButton",inject:{elForm:{default:""},elFormItem:{default:""}},props:{type:{type:String,default:"default"},size:String,icon:{type:String,default:""},nativeType:{type:String,default:"button"},loading:Boolean,disabled:Boolean,plain:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean},computed:{_elFormItemSize:function(){return(this.elFormItem||{}).elFormItemSize},buttonSize:function(){return this.size||this._elFormItemSize||(this.$ELEMENT||{}).size},buttonDisabled:function(){return this.disabled||(this.elForm||{}).disabled}},methods:{handleClick:function(e){this.$emit("click",e)}}},o=s,a=n(0),l=Object(a["a"])(o,i,r,!1,null,null,null);l.options.__file="packages/button/src/button.vue";var c=l.exports;c.install=function(e){e.component(c.name,c)};t["default"]=c}})},ef08:function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},f069:function(e,t,n){"use strict";var i=n("59ed"),r=function(e){var t,n;this.promise=new e((function(e,i){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=i})),this.resolve=i(t),this.reject=i(n)};e.exports.f=function(e){return new r(e)}},f0d9:function(e,t,n){"use strict";t.__esModule=!0,t.default={el:{colorpicker:{confirm:"确定",clear:"清空"},datepicker:{now:"此刻",today:"今天",cancel:"取消",clear:"清空",confirm:"确定",selectDate:"选择日期",selectTime:"选择时间",startDate:"开始日期",startTime:"开始时间",endDate:"结束日期",endTime:"结束时间",prevYear:"前一年",nextYear:"后一年",prevMonth:"上个月",nextMonth:"下个月",year:"年",month1:"1 月",month2:"2 月",month3:"3 月",month4:"4 月",month5:"5 月",month6:"6 月",month7:"7 月",month8:"8 月",month9:"9 月",month10:"10 月",month11:"11 月",month12:"12 月",weeks:{sun:"日",mon:"一",tue:"二",wed:"三",thu:"四",fri:"五",sat:"六"},months:{jan:"一月",feb:"二月",mar:"三月",apr:"四月",may:"五月",jun:"六月",jul:"七月",aug:"八月",sep:"九月",oct:"十月",nov:"十一月",dec:"十二月"}},select:{loading:"加载中",noMatch:"无匹配数据",noData:"无数据",placeholder:"请选择"},cascader:{noMatch:"无匹配数据",loading:"加载中",placeholder:"请选择",noData:"暂无数据"},pagination:{goto:"前往",pagesize:"条/页",total:"共 {total} 条",pageClassifier:"页"},messagebox:{title:"提示",confirm:"确定",cancel:"取消",error:"输入的数据不合法!"},upload:{deleteTip:"按 delete 键可删除",delete:"删除",preview:"查看图片",continue:"继续上传"},table:{emptyText:"暂无数据",confirmFilter:"筛选",resetFilter:"重置",clearFilter:"全部",sumText:"合计"},tree:{emptyText:"暂无数据"},transfer:{noMatch:"无匹配数据",noData:"无数据",titles:["列表 1","列表 2"],filterPlaceholder:"请输入搜索内容",noCheckedFormat:"共 {total} 项",hasCheckedFormat:"已选 {checked}/{total} 项"},image:{error:"加载失败"},pageHeader:{title:"返回"},popconfirm:{confirmButtonText:"确定",cancelButtonText:"取消"},empty:{description:"暂无数据"}}}},f36a:function(e,t,n){var i=n("e330");e.exports=i([].slice)},f3ad:function(e,t,n){e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=73)}({0:function(e,t,n){"use strict";function i(e,t,n,i,r,s,o,a){var l,c="function"===typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),o?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=l):r&&(l=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,l):[l]}return{exports:e,options:c}}n.d(t,"a",(function(){return i}))},11:function(e,t){e.exports=n("2bb5")},21:function(e,t){e.exports=n("d397")},4:function(e,t){e.exports=n("d010")},73:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["textarea"===e.type?"el-textarea":"el-input",e.inputSize?"el-input--"+e.inputSize:"",{"is-disabled":e.inputDisabled,"is-exceed":e.inputExceed,"el-input-group":e.$slots.prepend||e.$slots.append,"el-input-group--append":e.$slots.append,"el-input-group--prepend":e.$slots.prepend,"el-input--prefix":e.$slots.prefix||e.prefixIcon,"el-input--suffix":e.$slots.suffix||e.suffixIcon||e.clearable||e.showPassword}],on:{mouseenter:function(t){e.hovering=!0},mouseleave:function(t){e.hovering=!1}}},["textarea"!==e.type?[e.$slots.prepend?n("div",{staticClass:"el-input-group__prepend"},[e._t("prepend")],2):e._e(),"textarea"!==e.type?n("input",e._b({ref:"input",staticClass:"el-input__inner",attrs:{tabindex:e.tabindex,type:e.showPassword?e.passwordVisible?"text":"password":e.type,disabled:e.inputDisabled,readonly:e.readonly,autocomplete:e.autoComplete||e.autocomplete,"aria-label":e.label},on:{compositionstart:e.handleCompositionStart,compositionupdate:e.handleCompositionUpdate,compositionend:e.handleCompositionEnd,input:e.handleInput,focus:e.handleFocus,blur:e.handleBlur,change:e.handleChange}},"input",e.$attrs,!1)):e._e(),e.$slots.prefix||e.prefixIcon?n("span",{staticClass:"el-input__prefix"},[e._t("prefix"),e.prefixIcon?n("i",{staticClass:"el-input__icon",class:e.prefixIcon}):e._e()],2):e._e(),e.getSuffixVisible()?n("span",{staticClass:"el-input__suffix"},[n("span",{staticClass:"el-input__suffix-inner"},[e.showClear&&e.showPwdVisible&&e.isWordLimitVisible?e._e():[e._t("suffix"),e.suffixIcon?n("i",{staticClass:"el-input__icon",class:e.suffixIcon}):e._e()],e.showClear?n("i",{staticClass:"el-input__icon el-icon-circle-close el-input__clear",on:{mousedown:function(e){e.preventDefault()},click:e.clear}}):e._e(),e.showPwdVisible?n("i",{staticClass:"el-input__icon el-icon-view el-input__clear",on:{click:e.handlePasswordVisible}}):e._e(),e.isWordLimitVisible?n("span",{staticClass:"el-input__count"},[n("span",{staticClass:"el-input__count-inner"},[e._v("\n            "+e._s(e.textLength)+"/"+e._s(e.upperLimit)+"\n          ")])]):e._e()],2),e.validateState?n("i",{staticClass:"el-input__icon",class:["el-input__validateIcon",e.validateIcon]}):e._e()]):e._e(),e.$slots.append?n("div",{staticClass:"el-input-group__append"},[e._t("append")],2):e._e()]:n("textarea",e._b({ref:"textarea",staticClass:"el-textarea__inner",style:e.textareaStyle,attrs:{tabindex:e.tabindex,disabled:e.inputDisabled,readonly:e.readonly,autocomplete:e.autoComplete||e.autocomplete,"aria-label":e.label},on:{compositionstart:e.handleCompositionStart,compositionupdate:e.handleCompositionUpdate,compositionend:e.handleCompositionEnd,input:e.handleInput,focus:e.handleFocus,blur:e.handleBlur,change:e.handleChange}},"textarea",e.$attrs,!1)),e.isWordLimitVisible&&"textarea"===e.type?n("span",{staticClass:"el-input__count"},[e._v(e._s(e.textLength)+"/"+e._s(e.upperLimit))]):e._e()],2)},r=[];i._withStripped=!0;var s=n(4),o=n.n(s),a=n(11),l=n.n(a),c=void 0,u="\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n",h=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function d(e){var t=window.getComputedStyle(e),n=t.getPropertyValue("box-sizing"),i=parseFloat(t.getPropertyValue("padding-bottom"))+parseFloat(t.getPropertyValue("padding-top")),r=parseFloat(t.getPropertyValue("border-bottom-width"))+parseFloat(t.getPropertyValue("border-top-width")),s=h.map((function(e){return e+":"+t.getPropertyValue(e)})).join(";");return{contextStyle:s,paddingSize:i,borderSize:r,boxSizing:n}}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;c||(c=document.createElement("textarea"),document.body.appendChild(c));var i=d(e),r=i.paddingSize,s=i.borderSize,o=i.boxSizing,a=i.contextStyle;c.setAttribute("style",a+";"+u),c.value=e.value||e.placeholder||"";var l=c.scrollHeight,h={};"border-box"===o?l+=s:"content-box"===o&&(l-=r),c.value="";var f=c.scrollHeight-r;if(null!==t){var p=f*t;"border-box"===o&&(p=p+r+s),l=Math.max(p,l),h.minHeight=p+"px"}if(null!==n){var m=f*n;"border-box"===o&&(m=m+r+s),l=Math.min(m,l)}return h.height=l+"px",c.parentNode&&c.parentNode.removeChild(c),c=null,h}var p=n(9),m=n.n(p),g=n(21),v={name:"ElInput",componentName:"ElInput",mixins:[o.a,l.a],inheritAttrs:!1,inject:{elForm:{default:""},elFormItem:{default:""}},data:function(){return{textareaCalcStyle:{},hovering:!1,focused:!1,isComposing:!1,passwordVisible:!1}},props:{value:[String,Number],size:String,resize:String,form:String,disabled:Boolean,readonly:Boolean,type:{type:String,default:"text"},autosize:{type:[Boolean,Object],default:!1},autocomplete:{type:String,default:"off"},autoComplete:{type:String,validator:function(e){return!0}},validateEvent:{type:Boolean,default:!0},suffixIcon:String,prefixIcon:String,label:String,clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},tabindex:String},computed:{_elFormItemSize:function(){return(this.elFormItem||{}).elFormItemSize},validateState:function(){return this.elFormItem?this.elFormItem.validateState:""},needStatusIcon:function(){return!!this.elForm&&this.elForm.statusIcon},validateIcon:function(){return{validating:"el-icon-loading",success:"el-icon-circle-check",error:"el-icon-circle-close"}[this.validateState]},textareaStyle:function(){return m()({},this.textareaCalcStyle,{resize:this.resize})},inputSize:function(){return this.size||this._elFormItemSize||(this.$ELEMENT||{}).size},inputDisabled:function(){return this.disabled||(this.elForm||{}).disabled},nativeInputValue:function(){return null===this.value||void 0===this.value?"":String(this.value)},showClear:function(){return this.clearable&&!this.inputDisabled&&!this.readonly&&this.nativeInputValue&&(this.focused||this.hovering)},showPwdVisible:function(){return this.showPassword&&!this.inputDisabled&&!this.readonly&&(!!this.nativeInputValue||this.focused)},isWordLimitVisible:function(){return this.showWordLimit&&this.$attrs.maxlength&&("text"===this.type||"textarea"===this.type)&&!this.inputDisabled&&!this.readonly&&!this.showPassword},upperLimit:function(){return this.$attrs.maxlength},textLength:function(){return"number"===typeof this.value?String(this.value).length:(this.value||"").length},inputExceed:function(){return this.isWordLimitVisible&&this.textLength>this.upperLimit}},watch:{value:function(e){this.$nextTick(this.resizeTextarea),this.validateEvent&&this.dispatch("ElFormItem","el.form.change",[e])},nativeInputValue:function(){this.setNativeInputValue()},type:function(){var e=this;this.$nextTick((function(){e.setNativeInputValue(),e.resizeTextarea(),e.updateIconOffset()}))}},methods:{focus:function(){this.getInput().focus()},blur:function(){this.getInput().blur()},getMigratingConfig:function(){return{props:{icon:"icon is removed, use suffix-icon / prefix-icon instead.","on-icon-click":"on-icon-click is removed."},events:{click:"click is removed."}}},handleBlur:function(e){this.focused=!1,this.$emit("blur",e),this.validateEvent&&this.dispatch("ElFormItem","el.form.blur",[this.value])},select:function(){this.getInput().select()},resizeTextarea:function(){if(!this.$isServer){var e=this.autosize,t=this.type;if("textarea"===t)if(e){var n=e.minRows,i=e.maxRows;this.textareaCalcStyle=f(this.$refs.textarea,n,i)}else this.textareaCalcStyle={minHeight:f(this.$refs.textarea).minHeight}}},setNativeInputValue:function(){var e=this.getInput();e&&e.value!==this.nativeInputValue&&(e.value=this.nativeInputValue)},handleFocus:function(e){this.focused=!0,this.$emit("focus",e)},handleCompositionStart:function(){this.isComposing=!0},handleCompositionUpdate:function(e){var t=e.target.value,n=t[t.length-1]||"";this.isComposing=!Object(g["isKorean"])(n)},handleCompositionEnd:function(e){this.isComposing&&(this.isComposing=!1,this.handleInput(e))},handleInput:function(e){this.isComposing||e.target.value!==this.nativeInputValue&&(this.$emit("input",e.target.value),this.$nextTick(this.setNativeInputValue))},handleChange:function(e){this.$emit("change",e.target.value)},calcIconOffset:function(e){var t=[].slice.call(this.$el.querySelectorAll(".el-input__"+e)||[]);if(t.length){for(var n=null,i=0;i<t.length;i++)if(t[i].parentNode===this.$el){n=t[i];break}if(n){var r={suffix:"append",prefix:"prepend"},s=r[e];this.$slots[s]?n.style.transform="translateX("+("suffix"===e?"-":"")+this.$el.querySelector(".el-input-group__"+s).offsetWidth+"px)":n.removeAttribute("style")}}},updateIconOffset:function(){this.calcIconOffset("prefix"),this.calcIconOffset("suffix")},clear:function(){this.$emit("input",""),this.$emit("change",""),this.$emit("clear")},handlePasswordVisible:function(){var e=this;this.passwordVisible=!this.passwordVisible,this.$nextTick((function(){e.focus()}))},getInput:function(){return this.$refs.input||this.$refs.textarea},getSuffixVisible:function(){return this.$slots.suffix||this.suffixIcon||this.showClear||this.showPassword||this.isWordLimitVisible||this.validateState&&this.needStatusIcon}},created:function(){this.$on("inputSelect",this.select)},mounted:function(){this.setNativeInputValue(),this.resizeTextarea(),this.updateIconOffset()},updated:function(){this.$nextTick(this.updateIconOffset)}},y=v,b=n(0),_=Object(b["a"])(y,i,r,!1,null,null,null);_.options.__file="packages/input/src/input.vue";var w=_.exports;w.install=function(e){e.component(w.name,w)};t["default"]=w},9:function(e,t){e.exports=n("7f4d")}})},f494:function(e,t,n){e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=108)}({0:function(e,t,n){"use strict";function i(e,t,n,i,r,s,o,a){var l,c="function"===typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),o?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=l):r&&(l=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,l):[l]}return{exports:e,options:c}}n.d(t,"a",(function(){return i}))},108:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"el-radio",class:[e.border&&e.radioSize?"el-radio--"+e.radioSize:"",{"is-disabled":e.isDisabled},{"is-focus":e.focus},{"is-bordered":e.border},{"is-checked":e.model===e.label}],attrs:{role:"radio","aria-checked":e.model===e.label,"aria-disabled":e.isDisabled,tabindex:e.tabIndex},on:{keydown:function(t){if(!("button"in t)&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"]))return null;t.stopPropagation(),t.preventDefault(),e.model=e.isDisabled?e.model:e.label}}},[n("span",{staticClass:"el-radio__input",class:{"is-disabled":e.isDisabled,"is-checked":e.model===e.label}},[n("span",{staticClass:"el-radio__inner"}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],ref:"radio",staticClass:"el-radio__original",attrs:{type:"radio","aria-hidden":"true",name:e.name,disabled:e.isDisabled,tabindex:"-1",autocomplete:"off"},domProps:{value:e.label,checked:e._q(e.model,e.label)},on:{focus:function(t){e.focus=!0},blur:function(t){e.focus=!1},change:[function(t){e.model=e.label},e.handleChange]}})]),n("span",{staticClass:"el-radio__label",on:{keydown:function(e){e.stopPropagation()}}},[e._t("default"),e.$slots.default?e._e():[e._v(e._s(e.label))]],2)])},r=[];i._withStripped=!0;var s=n(4),o=n.n(s),a={name:"ElRadio",mixins:[o.a],inject:{elForm:{default:""},elFormItem:{default:""}},componentName:"ElRadio",props:{value:{},label:{},disabled:Boolean,name:String,border:Boolean,size:String},data:function(){return{focus:!1}},computed:{isGroup:function(){var e=this.$parent;while(e){if("ElRadioGroup"===e.$options.componentName)return this._radioGroup=e,!0;e=e.$parent}return!1},model:{get:function(){return this.isGroup?this._radioGroup.value:this.value},set:function(e){this.isGroup?this.dispatch("ElRadioGroup","input",[e]):this.$emit("input",e),this.$refs.radio&&(this.$refs.radio.checked=this.model===this.label)}},_elFormItemSize:function(){return(this.elFormItem||{}).elFormItemSize},radioSize:function(){var e=this.size||this._elFormItemSize||(this.$ELEMENT||{}).size;return this.isGroup&&this._radioGroup.radioGroupSize||e},isDisabled:function(){return this.isGroup?this._radioGroup.disabled||this.disabled||(this.elForm||{}).disabled:this.disabled||(this.elForm||{}).disabled},tabIndex:function(){return this.isDisabled||this.isGroup&&this.model!==this.label?-1:0}},methods:{handleChange:function(){var e=this;this.$nextTick((function(){e.$emit("change",e.model),e.isGroup&&e.dispatch("ElRadioGroup","handleChange",e.model)}))}}},l=a,c=n(0),u=Object(c["a"])(l,i,r,!1,null,null,null);u.options.__file="packages/radio/src/radio.vue";var h=u.exports;h.install=function(e){e.component(h.name,h)};t["default"]=h},4:function(e,t){e.exports=n("d010")}})},f5df:function(e,t,n){var i=n("da84"),r=n("00ee"),s=n("1626"),o=n("c6b6"),a=n("b622"),l=a("toStringTag"),c=i.Object,u="Arguments"==o(function(){return arguments}()),h=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=h(t=c(e),l))?n:u?o(t):"Object"==(i=o(t))&&s(t.callee)?"Arguments":i}},f772:function(e,t,n){var i=n("5692"),r=n("90e3"),s=i("keys");e.exports=function(e){return s[e]||(s[e]=r(e))}},f893:function(e,t,n){e.exports={default:n("8119"),__esModule:!0}},faf5:function(e,t,n){e.exports=!n("0bad")&&!n("4b8b")((function(){return 7!=Object.defineProperty(n("05f5")("div"),"a",{get:function(){return 7}}).a}))},fc5e:function(e,t){var n=Math.ceil,i=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?i:n)(e)}},fc6a:function(e,t,n){var i=n("44ad"),r=n("1d80");e.exports=function(e){return i(r(e))}},fcd4:function(e,t,n){t.f=n("cc15")},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,t,n){var i=n("4930");e.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(e,t,n){var i=n("da84");e.exports=i.Promise},fed5:function(e,t){t.f=Object.getOwnPropertySymbols}}]);
//# sourceMappingURL=chunk-vendors.d3e3a334.js.map