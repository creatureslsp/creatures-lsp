(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_kotlin.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_kotlin.js'));
  else {
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_uuid'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_uuid'.");
    }
    root.kotlin_uuid = factory(typeof kotlin_uuid === 'undefined' ? {} : kotlin_uuid, kotlin_kotlin);
  }
}(this, function (_, kotlin_kotlin) {
  //region block: imports
  var until = kotlin_kotlin.$crossModule$.until;
  var listOf = kotlin_kotlin.$crossModule$.listOf_1;
  var _Char___init__impl__380027157 = kotlin_kotlin.$crossModule$._Char___init__impl__380027157;
  var Char__rangeTo_impl_2506766091 = kotlin_kotlin.$crossModule$.Char__rangeTo_impl_2506766091;
  var plus = kotlin_kotlin.$crossModule$.plus_2;
  //endregion
  'use strict';
  //region block: pre-declaration
  //endregion
  function _get_UUID_CHAR_RANGES__3817651408() {
    init_properties_uuid_kt_4005185439();
    return UUID_CHAR_RANGES;
  }
  var UUID_CHAR_RANGES;
  function _get_UUID_HYPHEN_INDICES__2094340051() {
    init_properties_uuid_kt_4005185439();
    return UUID_HYPHEN_INDICES;
  }
  var UUID_HYPHEN_INDICES;
  function _get_UUID_CHARS__319873394() {
    init_properties_uuid_kt_4005185439();
    return UUID_CHARS;
  }
  var UUID_CHARS;
  var properties_initialized_uuid_kt_2724714691;
  function init_properties_uuid_kt_4005185439() {
    if (!properties_initialized_uuid_kt_2724714691) {
      properties_initialized_uuid_kt_2724714691 = true;
      UUID_CHAR_RANGES = listOf([until(0, 8), until(9, 13), until(14, 18), until(19, 23), until(24, 36)]);
      UUID_HYPHEN_INDICES = listOf([8, 13, 18, 23]);
      UUID_CHARS = plus(Char__rangeTo_impl_2506766091(_Char___init__impl__380027157(48), _Char___init__impl__380027157(57)), Char__rangeTo_impl_2506766091(_Char___init__impl__380027157(97), _Char___init__impl__380027157(102)));
    }
  }
  return _;
}));