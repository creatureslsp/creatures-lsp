(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root.kotlin_org_jetbrains_kotlin_kotlinx_atomicfu_runtime = factory(typeof kotlin_org_jetbrains_kotlin_kotlinx_atomicfu_runtime === 'undefined' ? {} : kotlin_org_jetbrains_kotlin_kotlinx_atomicfu_runtime);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_org_jetbrains_kotlin_kotlinx_atomicfu_runtime.js.map