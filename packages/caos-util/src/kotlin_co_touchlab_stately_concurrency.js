(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root.kotlin_co_touchlab_stately_concurrency = factory(typeof kotlin_co_touchlab_stately_concurrency === 'undefined' ? {} : kotlin_co_touchlab_stately_concurrency);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_co_touchlab_stately_concurrency.js.map