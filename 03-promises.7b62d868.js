function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=o.parcelRequire4c75;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},o.parcelRequire4c75=i);var r=i("eWCmQ");const l={form:document.querySelector(".form"),firstDelay:document.querySelector("[name=delay]"),delayStep:document.querySelector("[name=step]"),amount:document.querySelector("[name=amount]"),startBtn:document.querySelector(".form button")};function u(e,o){const t=Math.random()>.3;return new Promise(((n,i)=>{setTimeout((()=>{t?n({position:e,delay:o}):i({position:e,delay:o})}),o)}))}function a({position:o,delay:t}){e(r).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`),console.log(`✅ Fulfilled promise ${o} in ${t}ms`)}function s({position:o,delay:t}){e(r).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`),console.log(`❌ Rejected promise ${o} in ${t}ms`)}l.form.addEventListener("submit",(function(e){e.preventDefault();const o=Number(l.firstDelay.value),t=Number(l.delayStep.value),n=Number(l.amount.value);let i=o-t;for(let e=1;e<=n;e+=1)i+=t,u(e,i).then((({position:e,delay:o})=>{a({position:e,delay:o})})).catch((({position:e,delay:o})=>{s({position:e,delay:o})}))}));
//# sourceMappingURL=03-promises.7b62d868.js.map