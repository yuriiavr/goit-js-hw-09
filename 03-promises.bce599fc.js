!function(){function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=o.parcelRequire7bc7;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},o.parcelRequire7bc7=i);var r=i("iU1Pc"),a={form:document.querySelector(".form"),firstDelay:document.querySelector("[name=delay]"),delayStep:document.querySelector("[name=step]"),amount:document.querySelector("[name=amount]"),startBtn:document.querySelector(".form button")};function c(e,o){var n=Math.random()>.3;return new Promise((function(t,i){setTimeout((function(){n?t({position:e,delay:o}):i({position:e,delay:o})}),o)}))}function l(o){var n=o.position,t=o.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms")),console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))}function u(o){var n=o.position,t=o.delay;e(r).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms")),console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}a.form.addEventListener("submit",(function(e){e.preventDefault();for(var o=Number(a.firstDelay.value),n=Number(a.delayStep.value),t=Number(a.amount.value),i=o-n,r=1;r<=t;r+=1)c(r,i+=n).then((function(e){l({position:e.position,delay:e.delay})})).catch((function(e){u({position:e.position,delay:e.delay})}))}))}();
//# sourceMappingURL=03-promises.bce599fc.js.map