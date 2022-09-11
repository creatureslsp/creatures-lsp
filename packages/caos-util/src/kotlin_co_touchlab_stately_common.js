(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root.kotlin_co_touchlab_stately_common = factory(typeof kotlin_co_touchlab_stately_common === 'undefined' ? {} : kotlin_co_touchlab_stately_common);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  function ensureNeverFrozen(_this__1828080292) {
  }
  //region block: exports
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.ensureNeverFrozen = ensureNeverFrozen;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_co_touchlab_stately_common.js.map