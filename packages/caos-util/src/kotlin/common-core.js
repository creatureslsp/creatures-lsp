(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './common-log-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./common-log-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'common-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'common-core'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'common-core'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'common-core'.");
    }
    if (typeof this['common-log-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'common-core'. Its dependency 'common-log-js-ir' was not found. Please, check whether 'common-log-js-ir' is loaded prior to 'common-core'.");
    }
    root['common-core'] = factory(typeof this['common-core'] === 'undefined' ? {} : this['common-core'], this['kotlin-kotlin-stdlib'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['common-log-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_com_bedalton_common_log) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Exception = kotlin_kotlin.$_$.ag;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.m1;
  var captureStack = kotlin_kotlin.$_$.xa;
  var protoOf = kotlin_kotlin.$_$.kc;
  var classMeta = kotlin_kotlin.$_$.db;
  var setMetadataFor = kotlin_kotlin.$_$.lc;
  var VOID = kotlin_kotlin.$_$.h;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.k1;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.n4;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.o4;
  var ArraySerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var BooleanCompanionObject_getInstance = kotlin_kotlin.$_$.h4;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.i4;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.m4;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.l4;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var Companion_getInstance = kotlin_kotlin.$_$.r4;
  var serializer_4 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.j4;
  var serializer_5 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.k4;
  var serializer_6 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m2;
  var stackTraceToString = kotlin_kotlin.$_$.ih;
  var toString = kotlin_kotlin.$_$.q2;
  var Log_getInstance = kotlin_com_bedalton_common_log.$_$.g;
  var get_LOG_DEBUG = kotlin_com_bedalton_common_log.$_$.a;
  var joinToString = kotlin_kotlin.$_$.s7;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.d1;
  var getKClassFromExpression = kotlin_kotlin.$_$.e;
  var Char = kotlin_kotlin.$_$.tf;
  var contains = kotlin_kotlin.$_$.kd;
  var contains_0 = kotlin_kotlin.$_$.ld;
  var isBlank = kotlin_kotlin.$_$.wd;
  var endsWith = kotlin_kotlin.$_$.md;
  var startsWith = kotlin_kotlin.$_$.pe;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.l1;
  var charArrayOf = kotlin_kotlin.$_$.ya;
  var split = kotlin_kotlin.$_$.ne;
  var copyToArray = kotlin_kotlin.$_$.p6;
  var drop = kotlin_kotlin.$_$.v6;
  var arrayConcat = kotlin_kotlin.$_$.a;
  var firstOrNull = kotlin_kotlin.$_$.c7;
  var get_lastIndex = kotlin_kotlin.$_$.be;
  var StringBuilder = kotlin_kotlin.$_$.id;
  var endsWith_0 = kotlin_kotlin.$_$.nd;
  var last = kotlin_kotlin.$_$.b8;
  var replace = kotlin_kotlin.$_$.ke;
  var eIf = kotlin_com_bedalton_common_log.$_$.d;
  var replace_0 = kotlin_kotlin.$_$.je;
  var last_0 = kotlin_kotlin.$_$.a8;
  var emptyList = kotlin_kotlin.$_$.w6;
  var dropLast = kotlin_kotlin.$_$.r6;
  var charSequenceGet = kotlin_kotlin.$_$.ab;
  var indexOf = kotlin_kotlin.$_$.td;
  var until = kotlin_kotlin.$_$.xc;
  var slice = kotlin_kotlin.$_$.d9;
  var startsWith_0 = kotlin_kotlin.$_$.qe;
  var lastIndexOf = kotlin_kotlin.$_$.ce;
  var substring = kotlin_kotlin.$_$.re;
  var trimEnd = kotlin_kotlin.$_$.mf;
  var Pair = kotlin_kotlin.$_$.gg;
  var first = kotlin_kotlin.$_$.d7;
  var toList = kotlin_kotlin.$_$.o9;
  var objectMeta = kotlin_kotlin.$_$.jc;
  var charSequenceLength = kotlin_kotlin.$_$.bb;
  var split_0 = kotlin_kotlin.$_$.oe;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var drop_0 = kotlin_kotlin.$_$.u6;
  var removeLast = kotlin_kotlin.$_$.v8;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.u5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var reversed = kotlin_kotlin.$_$.w8;
  var distinct = kotlin_kotlin.$_$.q6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var get_indices = kotlin_kotlin.$_$.o7;
  var trim = kotlin_kotlin.$_$.of;
  var Collection = kotlin_kotlin.$_$.z4;
  var isInterface = kotlin_kotlin.$_$.wb;
  var firstOrNull_0 = kotlin_kotlin.$_$.pd;
  var equals = kotlin_kotlin.$_$.gb;
  var toMutableList = kotlin_kotlin.$_$.r9;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var compareTo = kotlin_kotlin.$_$.eb;
  var THROW_CCE = kotlin_kotlin.$_$.jg;
  var isCharSequence = kotlin_kotlin.$_$.sb;
  var trim_0 = kotlin_kotlin.$_$.pf;
  var toString_0 = kotlin_kotlin.$_$.pc;
  var contains_1 = kotlin_kotlin.$_$.x5;
  var listOf = kotlin_kotlin.$_$.f8;
  var toCharArray = kotlin_kotlin.$_$.ve;
  var padStart = kotlin_kotlin.$_$.he;
  var getNumberHashCode = kotlin_kotlin.$_$.jb;
  var THROW_IAE = kotlin_kotlin.$_$.kg;
  var Unit_getInstance = kotlin_kotlin.$_$.x4;
  var Enum = kotlin_kotlin.$_$.yf;
  var Comparator = kotlin_kotlin.$_$.vf;
  var toInt = kotlin_kotlin.$_$.af;
  var get_LOG_VERBOSE = kotlin_com_bedalton_common_log.$_$.b;
  var iIf = kotlin_com_bedalton_common_log.$_$.e;
  var rangeTo = kotlin_kotlin.$_$.vc;
  var createSingleFunctionLogger = kotlin_com_bedalton_common_log.$_$.c;
  var wIf = kotlin_com_bedalton_common_log.$_$.f;
  var NullPointerException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var getOrNull = kotlin_kotlin.$_$.rd;
  var Error_0 = kotlin_kotlin.$_$.zf;
  var numberToLong = kotlin_kotlin.$_$.hc;
  var toLong = kotlin_kotlin.$_$.nc;
  //endregion
  //region block: pre-declaration
  setMetadataFor(CommonException, 'CommonException', classMeta, Exception);
  setMetadataFor(IOException, 'IOException', classMeta, Exception);
  setMetadataFor(IOReadException, 'IOReadException', classMeta, IOException);
  setMetadataFor(AlreadyDisposedDataCacheException, 'AlreadyDisposedDataCacheException', classMeta, Exception, VOID, AlreadyDisposedDataCacheException);
  setMetadataFor(PathUtil, 'PathUtil', objectMeta);
  setMetadataFor(DateComponents, 'DateComponents', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Platform, 'Platform', classMeta, Enum);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
  //endregion
  function CommonException(message, throwable) {
    Exception_init_$Init$(message, throwable, this);
    captureStack(this, CommonException);
  }
  protoOf(CommonException).asThrowable = function () {
    return this;
  };
  function IOException(message, throwable) {
    throwable = throwable === VOID ? null : throwable;
    Exception_init_$Init$(message, throwable, this);
    captureStack(this, IOException);
  }
  function IOReadException(message, throwable) {
    throwable = throwable === VOID ? null : throwable;
    IOException.call(this, message, throwable);
    captureStack(this, IOReadException);
  }
  function AlreadyDisposedDataCacheException(message) {
    message = message === VOID ? 'Cache already disposed' : message;
    Exception_init_$Init$_0(message, this);
    captureStack(this, AlreadyDisposedDataCacheException);
  }
  function decodeNullableIntElement(_this__u8e3s4, descriptor, index) {
    return _this__u8e3s4.decodeSerializableElement$default_j0zaoi_k$(descriptor, index, get_nullableIntSerializer());
  }
  function decodeNullableStringElement(_this__u8e3s4, descriptor, index) {
    return _this__u8e3s4.decodeSerializableElement$default_j0zaoi_k$(descriptor, index, get_nullableStringSerializer());
  }
  function decodeNullableBooleanElement(_this__u8e3s4, descriptor, index) {
    return _this__u8e3s4.decodeSerializableElement$default_j0zaoi_k$(descriptor, index, get_nullableBooleanSerializer());
  }
  function encodeNullableIntElement(_this__u8e3s4, descriptor, index, value) {
    _this__u8e3s4.encodeSerializableElement_isqxcl_k$(descriptor, index, get_nullableIntSerializer(), value);
  }
  function encodeNullableStringElement(_this__u8e3s4, descriptor, index, value) {
    _this__u8e3s4.encodeSerializableElement_isqxcl_k$(descriptor, index, get_nullableStringSerializer(), value);
  }
  function encodeNullableBooleanElement(_this__u8e3s4, descriptor, index, value) {
    _this__u8e3s4.encodeSerializableElement_isqxcl_k$(descriptor, index, get_nullableBooleanSerializer(), value);
  }
  function get_nullableStringSerializer() {
    _init_properties_nullableSerializers_serializers_kt__uyqu7();
    return nullableStringSerializer;
  }
  var nullableStringSerializer;
  function get_stringListSerializer() {
    _init_properties_nullableSerializers_serializers_kt__uyqu7();
    return stringListSerializer;
  }
  var stringListSerializer;
  function get_nullableStringListSerializer() {
    _init_properties_nullableSerializers_serializers_kt__uyqu7();
    return nullableStringListSerializer;
  }
  var nullableStringListSerializer;
  function get_stringArraySerializer() {
    _init_properties_nullableSerializers_serializers_kt__uyqu7();
    return stringArraySerializer;
  }
  var stringArraySerializer;
  function get_nullableStringArraySerializer() {
    _init_properties_nullableSerializers_serializers_kt__uyqu7();
    return nullableStringArraySerializer;
  }
  var nullableStringArraySerializer;
  function get_nullableBooleanSerializer() {
    _init_properties_nullableSerializers_serializers_kt__uyqu7();
    return nullableBooleanSerializer;
  }
  var nullableBooleanSerializer;
  function get_nullableByteSerializer() {
    _init_properties_nullableSerializers_serializers_kt__uyqu7();
    return nullableByteSerializer;
  }
  var nullableByteSerializer;
  function get_nullableShortSerializer() {
    _init_properties_nullableSerializers_serializers_kt__uyqu7();
    return nullableShortSerializer;
  }
  var nullableShortSerializer;
  function get_nullableIntSerializer() {
    _init_properties_nullableSerializers_serializers_kt__uyqu7();
    return nullableIntSerializer;
  }
  var nullableIntSerializer;
  function get_nullableLongSerializer() {
    _init_properties_nullableSerializers_serializers_kt__uyqu7();
    return nullableLongSerializer;
  }
  var nullableLongSerializer;
  function get_nullableDoubleSerializer() {
    _init_properties_nullableSerializers_serializers_kt__uyqu7();
    return nullableDoubleSerializer;
  }
  var nullableDoubleSerializer;
  function get_nullableFloatSerializer() {
    _init_properties_nullableSerializers_serializers_kt__uyqu7();
    return nullableFloatSerializer;
  }
  var nullableFloatSerializer;
  var properties_initialized_nullableSerializers_serializers_kt_tyshpf;
  function _init_properties_nullableSerializers_serializers_kt__uyqu7() {
    if (!properties_initialized_nullableSerializers_serializers_kt_tyshpf) {
      properties_initialized_nullableSerializers_serializers_kt_tyshpf = true;
      nullableStringSerializer = get_nullable(serializer(StringCompanionObject_getInstance()));
      stringListSerializer = ListSerializer(serializer(StringCompanionObject_getInstance()));
      nullableStringListSerializer = get_nullable(ListSerializer(serializer(StringCompanionObject_getInstance())));
      // Inline function 'kotlinx.serialization.builtins.ArraySerializer' call
      var elementSerializer = serializer(StringCompanionObject_getInstance());
      stringArraySerializer = ArraySerializer(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), elementSerializer);
      // Inline function 'kotlinx.serialization.builtins.ArraySerializer' call
      var elementSerializer_0 = serializer(StringCompanionObject_getInstance());
      var tmp$ret$0 = ArraySerializer(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), elementSerializer_0);
      nullableStringArraySerializer = get_nullable(tmp$ret$0);
      nullableBooleanSerializer = get_nullable(serializer_0(BooleanCompanionObject_getInstance()));
      nullableByteSerializer = get_nullable(serializer_1(ByteCompanionObject_getInstance()));
      nullableShortSerializer = get_nullable(serializer_2(ShortCompanionObject_getInstance()));
      nullableIntSerializer = get_nullable(serializer_3(IntCompanionObject_getInstance()));
      nullableLongSerializer = get_nullable(serializer_4(Companion_getInstance()));
      nullableDoubleSerializer = get_nullable(serializer_5(DoubleCompanionObject_getInstance()));
      nullableFloatSerializer = get_nullable(serializer_6(FloatCompanionObject_getInstance()));
    }
  }
  function formatted(_this__u8e3s4, printStackTrace) {
    var tmp0_safe_receiver = _this__u8e3s4.message;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bedalton.common.util.formatted.<anonymous>' call
      tmp = ': ' + tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp;
    var message = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var tmp_0;
    if (printStackTrace == null ? Log_getInstance().hasMode_frur5v_k$(get_LOG_DEBUG()) : printStackTrace) {
      // Inline function 'kotlin.text.plus' call
      var this_0 = _Char___init__impl__6a9atx(10);
      var other = stackTraceToString(_this__u8e3s4);
      tmp_0 = toString(this_0) + other;
    } else {
      tmp_0 = '';
    }
    var stack = tmp_0;
    return '' + get_className(_this__u8e3s4) + message + stack;
  }
  function joinToString_0(_this__u8e3s4, delimiter, prefix, postfix, limit, truncated, transform) {
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return joinToString(_this__u8e3s4, '' + toString(delimiter), prefix, postfix, limit, truncated, transform);
  }
  function get_toSnakeOrKabobCaseRegex() {
    _init_properties_util_case_kt__unuzau();
    return toSnakeOrKabobCaseRegex;
  }
  var toSnakeOrKabobCaseRegex;
  function get_toSnakeOrKabobCaseCombiningConsecutiveCapitalsRegex() {
    _init_properties_util_case_kt__unuzau();
    return toSnakeOrKabobCaseCombiningConsecutiveCapitalsRegex;
  }
  var toSnakeOrKabobCaseCombiningConsecutiveCapitalsRegex;
  function get_toCamelCaseRegex() {
    _init_properties_util_case_kt__unuzau();
    return toCamelCaseRegex;
  }
  var toCamelCaseRegex;
  function get_toCamelCaseCombiningSingleLettersRegex() {
    _init_properties_util_case_kt__unuzau();
    return toCamelCaseCombiningSingleLettersRegex;
  }
  var toCamelCaseCombiningSingleLettersRegex;
  var properties_initialized_util_case_kt_2vgvzg;
  function _init_properties_util_case_kt__unuzau() {
    if (!properties_initialized_util_case_kt_2vgvzg) {
      properties_initialized_util_case_kt_2vgvzg = true;
      // Inline function 'kotlin.text.toRegex' call
      var this_0 = '(?<=[a-zA-Z])[A-Z]|([_-]+[a-zA-Z])';
      toSnakeOrKabobCaseRegex = Regex_init_$Create$(this_0);
      // Inline function 'kotlin.text.toRegex' call
      var this_1 = '((?<=[a-zA-Z])(?:[A-Z]+)|(?:(?:(?:-+[a-zA-Z])+)(?![A-Za-z]))|(?:(?:^[a-z](?:-+[a-zA-Z])+)(?![A-Za-z])))';
      toSnakeOrKabobCaseCombiningConsecutiveCapitalsRegex = Regex_init_$Create$(this_1);
      // Inline function 'kotlin.text.toRegex' call
      var this_2 = '[-_]+([a-zA-Z])';
      toCamelCaseRegex = Regex_init_$Create$(this_2);
      // Inline function 'kotlin.text.toRegex' call
      var this_3 = '(^[a-z](?:[-_]+[a-z])+)|([-_]+[a-zA-Z](?:[-_]+[a-zA-Z])+)|[-_]+([A-Za-z])';
      toCamelCaseCombiningSingleLettersRegex = Regex_init_$Create$(this_3);
    }
  }
  function nullIfEmpty(_this__u8e3s4) {
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp;
    if (_this__u8e3s4.isEmpty_y1axqb_k$()) {
      // Inline function 'com.bedalton.common.util.nullIfEmpty.<anonymous>' call
      tmp = null;
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function get_className(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bedalton.common.util.<get-className>.<anonymous>' call
      tmp = getKClassFromExpression(_this__u8e3s4).get_simpleName_r6f8py_k$();
    }
    return tmp;
  }
  function getEscape($this, string, escapeBase, escapeChar) {
    var escape = '' + new Char(escapeChar) + new Char(escapeChar) + new Char(escapeChar) + escapeBase + new Char(escapeChar) + new Char(escapeChar) + toString(escapeChar);
    while (contains(string, escape)) {
      // Inline function 'kotlin.text.plus' call
      escape = toString(escapeChar) + escapeBase + toString(escapeChar);
    }
    return escape;
  }
  function getEscape$default($this, string, escapeBase, escapeChar, $super) {
    escapeChar = escapeChar === VOID ? _Char___init__impl__6a9atx(59) : escapeChar;
    return getEscape($this, string, escapeBase, escapeChar);
  }
  function getPathSeparatorChar($this, path) {
    var tmp;
    if (contains_0(path, _Char___init__impl__6a9atx(92))) {
      tmp = _Char___init__impl__6a9atx(92);
    } else if (contains_0(path, _Char___init__impl__6a9atx(47))) {
      tmp = _Char___init__impl__6a9atx(47);
    } else {
      tmp = get_pathSeparatorChar();
    }
    return tmp;
  }
  function pathSeparator($this, path) {
    // Inline function 'kotlin.text.isNullOrBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (path == null ? true : isBlank(path)) {
      return get_pathSeparatorChar();
    }
    if (isWindows(path)) {
      return _Char___init__impl__6a9atx(92);
    }
    if (contains_0(path, _Char___init__impl__6a9atx(47)) ? contains_0(path, _Char___init__impl__6a9atx(92)) : false) {
      if ((contains(path, '\\ ') ? true : contains(path, '\\(')) ? true : contains(path, '\\)')) {
        return _Char___init__impl__6a9atx(47);
      } else {
        return _Char___init__impl__6a9atx(92);
      }
    }
    if (contains_0(path, _Char___init__impl__6a9atx(92))) {
      if ((!contains(path, '\\ ') ? !contains(path, '\\(') : false) ? !contains(path, '\\)') : false) {
        return _Char___init__impl__6a9atx(92);
      }
    }
    var tmp;
    if (!Companion_getInstance_0().isWindows_cq9nnd_k$() ? !Companion_getInstance_0().isJs_1xgr7_k$() : false) {
      tmp = get_pathSeparatorChar();
    } else {
      if (contains_0(path, get_pathSeparatorChar())) {
        return get_pathSeparatorChar();
      }
      var tmp_0;
      if (contains_0(path, _Char___init__impl__6a9atx(92))) {
        return _Char___init__impl__6a9atx(92);
      } else if (contains_0(path, _Char___init__impl__6a9atx(47))) {
        return _Char___init__impl__6a9atx(47);
      } else {
        tmp_0 = get_pathSeparatorChar();
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function getSelfOrParentDirectory$close(_this__u8e3s4, $appendSeparator, separator) {
    var tmp;
    if (!($appendSeparator === true) ? true : endsWith(_this__u8e3s4, separator)) {
      tmp = _this__u8e3s4;
    } else {
      tmp = ensureEndsWith(_this__u8e3s4, separator);
    }
    return tmp;
  }
  function getLastPathComponent$close(_this__u8e3s4, $nullIfBlank) {
    var tmp;
    if ($nullIfBlank === true ? isBlank(_this__u8e3s4) : false) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function PathUtil$normalizePath$lambda() {
    return 'Failed to escape escaped quote';
  }
  function PathUtil() {
    PathUtil_instance = this;
    var tmp = this;
    // Inline function 'kotlin.text.toRegex' call
    var this_0 = '^[a-zA-Z]:[\\\\/]{1,2}.*';
    tmp.WINDOWS_ABSOLUTE_PATH_PREFIX_1 = Regex_init_$Create$(this_0);
  }
  protoOf(PathUtil).combine_vm27cv_k$ = function (components) {
    return this.combine_m05wii_k$(false, components.slice());
  };
  protoOf(PathUtil).combine_m05wii_k$ = function (subFoldersOnly, components) {
    var tmp;
    if (subFoldersOnly) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.any' call
        var inductionVariable = 0;
        var last_0 = components.length;
        while (inductionVariable < last_0) {
          var element = components[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.bedalton.common.util.PathUtil.combine.<anonymous>' call
          if (startsWith(element, '..')) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
        tmp$ret$1 = false;
      }
      tmp = tmp$ret$1;
    } else {
      tmp = false;
    }
    if (tmp) {
      throw Exception_init_$Create$("Cannot build path with parent '.." + get_pathSeparator() + "' components");
    }
    var tmp_0;
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var inductionVariable_0 = 0;
      var last_1 = components.length;
      while (inductionVariable_0 < last_1) {
        var element_0 = components[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'com.bedalton.common.util.PathUtil.combine.<anonymous>' call
        if (contains_0(element_0, _Char___init__impl__6a9atx(92))) {
          tmp$ret$3 = true;
          break $l$block_0;
        }
      }
      tmp$ret$3 = false;
    }
    if (tmp$ret$3) {
      tmp_0 = _Char___init__impl__6a9atx(92);
    } else {
      tmp_0 = get_pathSeparatorChar();
    }
    var pathSeparatorChar = tmp_0;
    var tmp_1;
    if (firstOrNull(components) === '~') {
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = split(expandTilde('~/'), charArrayOf([pathSeparatorChar]));
      var expandedComponents = copyToArray(this_0);
      var tmp_2;
      if (components.length === 1) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_2 = [];
      } else {
        // Inline function 'kotlin.collections.toTypedArray' call
        var this_1 = drop(components, 1);
        tmp_2 = copyToArray(this_1);
      }
      var tail = tmp_2;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = arrayConcat([expandedComponents, tail]);
    } else {
      tmp_1 = components;
    }
    var componentsExpanded = tmp_1;
    var tmp_3;
    switch (componentsExpanded.length) {
      case 0:
        tmp_3 = '';
        break;
      case 1:
        tmp_3 = normalizeSlashes(components[0]);
        break;
      default:
        // Inline function 'kotlin.let' call

        // Inline function 'kotlin.contracts.contract' call

        // Inline function 'com.bedalton.common.util.PathUtil.combine.<anonymous>' call

        var first = components[0];
        var tmp_4;
        if (endsWith(first, pathSeparatorChar)) {
          // Inline function 'kotlin.text.substring' call
          var endIndex = get_lastIndex(first);
          // Inline function 'kotlin.js.asDynamic' call
          tmp_4 = first.substring(0, endIndex);
        } else {
          tmp_4 = first;
        }

        var tmp$ret$15 = tmp_4;
        var out = new StringBuilder(tmp$ret$15);
        var tmp1_iterator = drop(components, 1).iterator_jk1svi_k$();
        while (tmp1_iterator.hasNext_bitz1p_k$()) {
          var component = tmp1_iterator.next_20eer_k$();
          if (!startsWith(component, get_pathSeparator())) {
            out.append_22ad7x_k$(get_pathSeparator());
          }
          if (endsWith_0(component, get_pathSeparator())) {
            // Inline function 'kotlin.text.substring' call
            var endIndex_0 = get_lastIndex(component);
            // Inline function 'kotlin.js.asDynamic' call
            var tmp$ret$17 = component.substring(0, endIndex_0);
            out.append_22ad7x_k$(tmp$ret$17);
          } else {
            out.append_22ad7x_k$(component);
          }
        }

        if (endsWith_0(last(components), get_pathSeparator())) {
          out.append_22ad7x_k$(get_pathSeparator());
        }

        return normalizeSlashes(removeNesting(out.toString()));
    }
    var out_0 = tmp_3;
    return out_0;
  };
  protoOf(PathUtil).normalizePath_cyhd4z_k$ = function (pathIn, divide) {
    var tmp;
    if (isWindows(pathIn)) {
      tmp = replace(pathIn, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(92));
    } else {
      tmp = superUnescape(pathIn);
    }
    var path = tmp;
    if (isBlank(path)) {
      return '';
    }
    var quoteEscape = getEscape$default(this, path, 'quote');
    var tmp_0;
    try {
      // Inline function 'kotlin.text.replace' call
      // Inline function 'kotlin.text.toRegex' call
      var this_0 = '([\\^`\\\\])"';
      var regex = Regex_init_$Create$(this_0);
      var replacement = '$1' + quoteEscape;
      tmp_0 = regex.replace_1ix0wf_k$(path, replacement);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Exception) {
        var e = $p;
        var tmp_2 = Log_getInstance();
        var tmp_3 = get_LOG_DEBUG();
        eIf(tmp_2, tmp_3, VOID, PathUtil$normalizePath$lambda);
        tmp_1 = path;
      } else {
        throw $p;
      }
      tmp_0 = tmp_1;
    }
    var out = tmp_0;
    if ((startsWith(out, '"') ? endsWith(out, _Char___init__impl__6a9atx(34)) : false) ? contains_0(out, _Char___init__impl__6a9atx(34)) : false) {
      if (!divide) {
        return null;
      }
      var tmp$ret$6;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$3 = out.substring(1);
        var tmp0_iterator = split(tmp$ret$3, charArrayOf([_Char___init__impl__6a9atx(34)])).iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'com.bedalton.common.util.PathUtil.normalizePath.<anonymous>' call
          // Inline function 'kotlin.text.isNotBlank' call
          if (!isBlank(element)) {
            tmp$ret$6 = element;
            break $l$block;
          }
        }
        tmp$ret$6 = null;
      }
      var temp = tmp$ret$6;
      if (!(temp == null)) {
        out = '"' + temp + '"';
      }
    }
    var temp_0 = stripSurroundingQuotes(out, 2, false);
    var canHaveSpaces = !(temp_0 === out);
    out = temp_0;
    out = superUnescape_0(out, charArrayOf([_Char___init__impl__6a9atx(32)]));
    if (!canHaveSpaces) {
      var tmp$ret$9;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = split(out, charArrayOf([_Char___init__impl__6a9atx(32)])).iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_0.next_20eer_k$();
          // Inline function 'com.bedalton.common.util.PathUtil.normalizePath.<anonymous>' call
          // Inline function 'kotlin.text.isNotBlank' call
          if (!isBlank(element_0)) {
            tmp$ret$9 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$9 = null;
      }
      var tmp0_safe_receiver = tmp$ret$9;
      var tmp_4;
      if (tmp0_safe_receiver == null) {
        tmp_4 = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.bedalton.common.util.PathUtil.normalizePath.<anonymous>' call
        if (!divide ? !(out === tmp0_safe_receiver) : false) {
          return null;
        }
        tmp_4 = tmp0_safe_receiver;
      }
      var tmp1_elvis_lhs = tmp_4;
      out = tmp1_elvis_lhs == null ? out : tmp1_elvis_lhs;
    }
    out = replace_0(out, '"', '');
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bedalton.common.util.PathUtil.normalizePath.<anonymous>' call
    replace_0(out, quoteEscape, '"');
    return PathUtil_getInstance().combine_vm27cv_k$([out]);
  };
  protoOf(PathUtil).normalizePath$default_xdy4us_k$ = function (pathIn, divide, $super) {
    divide = divide === VOID ? false : divide;
    return $super === VOID ? this.normalizePath_cyhd4z_k$(pathIn, divide) : $super.normalizePath_cyhd4z_k$.call(this, pathIn, divide);
  };
  protoOf(PathUtil).relativePath_al2ivd_k$ = function (sourcePath, targetPath, separatorChar) {
    var slashChar = _Char___init__impl__6a9atx(47);
    var slash = '' + toString(slashChar);
    var targetPathSeparatorChar = getPathSeparatorChar(this, targetPath);
    var sourcePathSeparatorChar = getPathSeparatorChar(this, sourcePath);
    var tmp;
    var tmp_0 = separatorChar;
    if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
      tmp = !(targetPathSeparatorChar === sourcePathSeparatorChar) ? _Char___init__impl__6a9atx(47) : targetPathSeparatorChar;
    } else {
      tmp = separatorChar;
    }
    var outputPathSeparator = tmp;
    // Inline function 'kotlin.text.toRegex' call
    var this_0 = '[/\\\\]+';
    var pathSeparatorRegex = Regex_init_$Create$(this_0);
    // Inline function 'kotlin.text.replace' call
    var tmp$ret$1 = pathSeparatorRegex.replace_1ix0wf_k$(sourcePath, slash);
    var sourcePathComponents = split(tmp$ret$1, charArrayOf([slashChar]));
    // Inline function 'kotlin.text.replace' call
    var targetPathNormalized = pathSeparatorRegex.replace_1ix0wf_k$(targetPath, slash);
    var targetPathComponents = split(targetPathNormalized, charArrayOf([slashChar]));
    var fileName = last_0(targetPathComponents);
    targetPathComponents = targetPathComponents.get_size_woubt6_k$() > 1 ? dropLast(targetPathComponents, 1) : emptyList();
    if ((!(targetPathComponents.get_c1px32_k$(0) === sourcePathComponents.get_c1px32_k$(0)) ? !(charSequenceGet(targetPath, 0) === _Char___init__impl__6a9atx(47)) : false) ? !(charSequenceGet(sourcePath, 0) === _Char___init__impl__6a9atx(47)) : false) {
      return null;
    }
    var relativePath = '';
    $l$loop: while (true) {
      var tmp_1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!sourcePathComponents.isEmpty_y1axqb_k$()) {
        tmp_1 = !(indexOf(targetPathNormalized, joinToString(sourcePathComponents, slash)) === 0);
      } else {
        tmp_1 = false;
      }
      if (!tmp_1) {
        break $l$loop;
      }
      sourcePathComponents = dropLast(sourcePathComponents, 1);
      relativePath = relativePath + ('..' + toString(outputPathSeparator));
    }
    var relativePathComponents = slice(targetPathComponents, until(sourcePathComponents.get_size_woubt6_k$(), targetPathComponents.get_size_woubt6_k$()));
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!relativePathComponents.isEmpty_y1axqb_k$()) {
      relativePath = relativePath + (joinToString(relativePathComponents, '' + new Char(outputPathSeparator)) + toString(outputPathSeparator));
    }
    return relativePath + fileName;
  };
  protoOf(PathUtil).relativePath$default_kqdwnc_k$ = function (sourcePath, targetPath, separatorChar, $super) {
    separatorChar = separatorChar === VOID ? null : separatorChar;
    var tmp;
    if ($super === VOID) {
      tmp = this.relativePath_al2ivd_k$(sourcePath, targetPath, separatorChar);
    } else {
      var tmp_0 = $super.relativePath_al2ivd_k$;
      var tmp_1 = separatorChar;
      tmp = tmp_0.call(this, sourcePath, targetPath, tmp_1 == null ? null : new Char(tmp_1));
    }
    return tmp;
  };
  protoOf(PathUtil).get_WINDOWS_ABSOLUTE_PATH_PREFIX_4xu3hz_k$ = function () {
    return this.WINDOWS_ABSOLUTE_PATH_PREFIX_1;
  };
  protoOf(PathUtil).isAbsolute_d2yihl_k$ = function (path) {
    return (startsWith_0(path, _Char___init__impl__6a9atx(47)) ? true : startsWith(path, '~/')) ? true : this.WINDOWS_ABSOLUTE_PATH_PREFIX_1.matches_evli6i_k$(path);
  };
  protoOf(PathUtil).requiresTildeExpansion_7w4raz_k$ = function (path) {
    return startsWith(path, '~/');
  };
  protoOf(PathUtil).ensureAbsolutePath_v8uj3a_k$ = function (path, newRootPath) {
    if (this.requiresTildeExpansion_7w4raz_k$(path)) {
      return expandTilde(path);
    }
    if (this.isAbsolute_d2yihl_k$(path)) {
      return path;
    }
    var newPath = this.combine_vm27cv_k$([newRootPath, path]);
    if (!this.isAbsolute_d2yihl_k$(newPath)) {
      return null;
    }
    return newPath;
  };
  protoOf(PathUtil).getFileNameWithoutExtension_v2slju_k$ = function (fileName) {
    if (endsWith(fileName, _Char___init__impl__6a9atx(47)) ? true : endsWith(fileName, _Char___init__impl__6a9atx(92))) {
      return null;
    }
    var separator = pathSeparator(this, fileName);
    var startIndex = lastIndexOf(fileName, separator);
    if (startIndex < 0) {
      startIndex = 0;
    } else {
      startIndex = startIndex + 1 | 0;
    }
    var lastIndex = lastIndexOf(fileName, _Char___init__impl__6a9atx(46));
    var tmp;
    if (lastIndex < startIndex) {
      var tmp_0;
      if (startIndex === 0) {
        tmp_0 = fileName;
      } else {
        // Inline function 'kotlin.text.substring' call
        var startIndex_0 = startIndex;
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = fileName.substring(startIndex_0);
      }
      tmp = tmp_0;
    } else if (lastIndex > startIndex) {
      // Inline function 'kotlin.text.substring' call
      var startIndex_1 = startIndex;
      // Inline function 'kotlin.js.asDynamic' call
      tmp = fileName.substring(startIndex_1, lastIndex);
    } else {
      tmp = null;
    }
    var string = tmp;
    return string == null ? null : nullIfEmpty_0(string);
  };
  protoOf(PathUtil).getExtension_rzvlb_k$ = function (fileName) {
    var lastIndex = lastIndexOf(fileName, _Char___init__impl__6a9atx(46));
    var tmp;
    if (lastIndex < 0) {
      tmp = null;
    } else if (lastIndex < get_lastIndex(fileName)) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.text.substring' call
      var startIndex = lastIndex + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bedalton.common.util.PathUtil.getExtension.<anonymous>' call
      var it = fileName.substring(startIndex);
      var tmp_0;
      if (contains_0(it, _Char___init__impl__6a9atx(47)) ? true : contains_0(it, _Char___init__impl__6a9atx(92))) {
        tmp_0 = null;
      } else {
        tmp_0 = it;
      }
      tmp = tmp_0;
    } else {
      tmp = null;
    }
    var extension = tmp;
    return nullIfEmpty_0(extension);
  };
  protoOf(PathUtil).getSelfOrParentDirectory_4hxjck_k$ = function (file, appendSeparator) {
    var separator = pathSeparator(this, file);
    if (endsWith(file, separator)) {
      return file;
    }
    var index = lastIndexOf(file, separator);
    if (index < 0) {
      var tmp;
      if (contains_0(file, _Char___init__impl__6a9atx(46))) {
        tmp = null;
      } else {
        tmp = getSelfOrParentDirectory$close(file, appendSeparator, separator);
      }
      return tmp;
    }
    var tmp_0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = file.substring(index);
    if (contains_0(tmp$ret$1, _Char___init__impl__6a9atx(46))) {
      tmp_0 = getSelfOrParentDirectory$close(substring(file, until(0, index)), appendSeparator, separator);
    } else {
      tmp_0 = getSelfOrParentDirectory$close(file, appendSeparator, separator);
    }
    return tmp_0;
  };
  protoOf(PathUtil).getSelfOrParentDirectory$default_bgh9c1_k$ = function (file, appendSeparator, $super) {
    appendSeparator = appendSeparator === VOID ? null : appendSeparator;
    return $super === VOID ? this.getSelfOrParentDirectory_4hxjck_k$(file, appendSeparator) : $super.getSelfOrParentDirectory_4hxjck_k$.call(this, file, appendSeparator);
  };
  protoOf(PathUtil).getLastPathComponent_ax17pe_k$ = function (path, nullIfBlank) {
    var separator = pathSeparator(this, path);
    var tmp;
    if (isBlank(path)) {
      tmp = null;
    } else if (path === toString(separator)) {
      tmp = getLastPathComponent$close('', nullIfBlank);
    } else {
      var index = lastIndexOf(path, separator);
      var tmp_0;
      if (index < 0) {
        tmp_0 = getLastPathComponent$close(path, nullIfBlank);
      } else if (index === get_lastIndex(path)) {
        tmp_0 = getLastPathComponent$close('', nullIfBlank);
      } else {
        // Inline function 'kotlin.text.substring' call
        var startIndex = index + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = path.substring(startIndex);
        tmp_0 = getLastPathComponent$close(tmp$ret$1, nullIfBlank);
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(PathUtil).getLastPathComponent$default_9ph00d_k$ = function (path, nullIfBlank, $super) {
    nullIfBlank = nullIfBlank === VOID ? null : nullIfBlank;
    return $super === VOID ? this.getLastPathComponent_ax17pe_k$(path, nullIfBlank) : $super.getLastPathComponent_ax17pe_k$.call(this, path, nullIfBlank);
  };
  protoOf(PathUtil).getWithoutLastPathComponent_jp8lu2_k$ = function (aPath) {
    var path = aPath;
    if (contains_0(path, _Char___init__impl__6a9atx(47)) ? contains_0(path, _Char___init__impl__6a9atx(92)) : false) {
      if (contains(path, '\\ ')) {
        path = replace_0(path, '\\ ', ' ');
      }
      if (contains(path, '\\\t')) {
        path = replace_0(path, '\\\t', '\t');
      }
    }
    var separator = pathSeparator(this, path);
    var refined = trimEnd(path, charArrayOf([separator]));
    var tmp;
    if (separator === _Char___init__impl__6a9atx(92)) {
      // Inline function 'kotlin.text.matches' call
      // Inline function 'kotlin.text.toRegex' call
      var this_0 = '[a-zA-Z][:]';
      tmp = Regex_init_$Create$(this_0).matches_evli6i_k$(refined);
    } else {
      tmp = false;
    }
    if (tmp) {
      return refined + toString(_Char___init__impl__6a9atx(92));
    }
    var lastIndex = lastIndexOf(refined, separator);
    if (lastIndex < 0) {
      return null;
    }
    // Inline function 'kotlin.text.substring' call
    var endIndex = lastIndex + 1 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    return refined.substring(0, endIndex);
  };
  protoOf(PathUtil).getPathSeparatingLastPathComponent_fzltoz_k$ = function (aPath) {
    var path = aPath;
    if (contains_0(path, _Char___init__impl__6a9atx(47)) ? contains_0(path, _Char___init__impl__6a9atx(92)) : false) {
      if (contains(path, '\\ ')) {
        path = replace_0(path, '\\ ', ' ');
      }
      if (contains(path, '\\\t')) {
        path = replace_0(path, '\\\t', '\t');
      }
    }
    var separator = pathSeparator(this, path);
    var components = split(path, charArrayOf([separator]));
    if (components.isEmpty_y1axqb_k$())
      return null;
    var tmp;
    if (components.get_size_woubt6_k$() === 1) {
      var component = first(components);
      var tmp_0;
      var tmp_1;
      if (separator === _Char___init__impl__6a9atx(92)) {
        // Inline function 'kotlin.text.matches' call
        // Inline function 'kotlin.text.toRegex' call
        var this_0 = '[a-zA-Z][:]';
        tmp_1 = Regex_init_$Create$(this_0).matches_evli6i_k$(component);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = new Pair(component + toString(_Char___init__impl__6a9atx(92)), null);
      } else {
        tmp_0 = new Pair(null, first(components));
      }
      tmp = tmp_0;
    } else {
      tmp = new Pair(joinToString(dropLast(components, 1), toString(separator)), last_0(components));
    }
    return tmp;
  };
  protoOf(PathUtil).shortestPaths_g8tx66_k$ = function (paths) {
    return mShortestPaths(paths);
  };
  protoOf(PathUtil).shortestPaths_r3gcpe_k$ = function (paths) {
    return mShortestPaths(toList(paths));
  };
  protoOf(PathUtil).sharedPath_elsh5g_k$ = function (paths) {
    return mCommonParent(paths);
  };
  protoOf(PathUtil).sharedPath_g2vwl4_k$ = function (paths) {
    return mCommonParent(toList(paths));
  };
  var PathUtil_instance;
  function PathUtil_getInstance() {
    if (PathUtil_instance == null)
      new PathUtil();
    return PathUtil_instance;
  }
  function normalizeSlashes(_this__u8e3s4) {
    var tmp;
    if (contains_0(_this__u8e3s4, _Char___init__impl__6a9atx(47)) ? contains_0(_this__u8e3s4, _Char___init__impl__6a9atx(92)) : false) {
      var tmp_0;
      if (isWindows(_this__u8e3s4)) {
        tmp_0 = true;
      } else {
        // Inline function 'kotlin.text.count' call
        var count = 0;
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(_this__u8e3s4)) {
          var element = charSequenceGet(_this__u8e3s4, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.bedalton.common.util.normalizeSlashes.<anonymous>' call
          if (element === _Char___init__impl__6a9atx(92)) {
            count = count + 1 | 0;
          }
        }
        tmp_0 = count > 1;
      }
      if (tmp_0) {
        return replace(_this__u8e3s4, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(92));
      }
      var tmp0_subject = get_pathSeparatorChar();
      tmp = tmp0_subject === _Char___init__impl__6a9atx(47) ? replace(_this__u8e3s4, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(47)) : tmp0_subject === _Char___init__impl__6a9atx(92) ? replace(_this__u8e3s4, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(92)) : replace(replace(_this__u8e3s4, _Char___init__impl__6a9atx(47), get_pathSeparatorChar()), _Char___init__impl__6a9atx(92), get_pathSeparatorChar());
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function removeNesting(path) {
    var expandedPath = startsWith_0(path, _Char___init__impl__6a9atx(126)) ? expandTilde(path) : path;
    var components = split_0(expandedPath, [get_pathSeparator()]);
    // Inline function 'kotlin.collections.mutableListOf' call
    var out = ArrayList_init_$Create$();
    var tmp0_iterator = drop_0(components, 1).iterator_jk1svi_k$();
    $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var component = tmp0_iterator.next_20eer_k$();
      if (component === '.')
        continue $l$loop;
      if (component === '..') {
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!out.isEmpty_y1axqb_k$()) {
          removeLast(out);
        } else {
          out.add_utx5q5_k$(component);
        }
      } else {
        out.add_utx5q5_k$(component);
      }
    }
    return components.get_c1px32_k$(0) + get_pathSeparator() + joinToString(out, get_pathSeparator());
  }
  function isWindows(path) {
    // Inline function 'kotlin.text.contains' call
    // Inline function 'kotlin.text.toRegex' call
    var this_0 = '^[a-zA-Z]:\\\\';
    return Regex_init_$Create$(this_0).containsMatchIn_gpzk5u_k$(path);
  }
  function mShortestPaths(allPaths) {
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(allPaths, 10));
    var tmp0_iterator = allPaths.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.bedalton.common.util.mShortestPaths.<anonymous>' call
      // Inline function 'kotlin.collections.filterNot' call
      // Inline function 'kotlin.collections.filterNotTo' call
      var this_0 = reversed(split(replace(item, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(47)), charArrayOf([_Char___init__impl__6a9atx(47)])));
      var destination_0 = ArrayList_init_$Create$();
      var tmp0_iterator_0 = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'com.bedalton.common.util.mShortestPaths.<anonymous>.<anonymous>' call
        if (!isBlank(element)) {
          destination_0.add_utx5q5_k$(element);
        }
      }
      var tmp$ret$3 = new Pair(item, destination_0);
      destination.add_utx5q5_k$(tmp$ret$3);
    }
    // Inline function 'kotlin.collections.filterNotTo' call
    var destination_1 = ArrayList_init_$Create$();
    var tmp0_iterator_1 = destination.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_1.next_20eer_k$();
      // Inline function 'com.bedalton.common.util.mShortestPaths.<anonymous>' call
      if (!element_0.get_second_jf7fjx_k$().isEmpty_y1axqb_k$()) {
        destination_1.add_utx5q5_k$(element_0);
      }
    }
    var allPathsComponents = destination_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_2 = ArrayList_init_$Create$_0(collectionSizeOrDefault(allPathsComponents, 10));
    var tmp0_iterator_2 = allPathsComponents.iterator_jk1svi_k$();
    while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
      var item_0 = tmp0_iterator_2.next_20eer_k$();
      // Inline function 'com.bedalton.common.util.mShortestPaths.<anonymous>' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$11 = first(item_0.get_second_jf7fjx_k$()).toLowerCase();
      destination_2.add_utx5q5_k$(tmp$ret$11);
    }
    var this_1 = distinct(destination_2);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_3 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_1, 10));
    var tmp0_iterator_3 = this_1.iterator_jk1svi_k$();
    while (tmp0_iterator_3.hasNext_bitz1p_k$()) {
      var item_1 = tmp0_iterator_3.next_20eer_k$();
      // Inline function 'com.bedalton.common.util.mShortestPaths.<anonymous>' call
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination_4 = ArrayList_init_$Create$();
      var tmp0_iterator_4 = allPathsComponents.iterator_jk1svi_k$();
      while (tmp0_iterator_4.hasNext_bitz1p_k$()) {
        var element_1 = tmp0_iterator_4.next_20eer_k$();
        // Inline function 'com.bedalton.common.util.mShortestPaths.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        if (first(element_1.get_second_jf7fjx_k$()).toLowerCase() === item_1) {
          destination_4.add_utx5q5_k$(element_1);
        }
      }
      destination_3.add_utx5q5_k$(destination_4);
    }
    var sharedEnds = destination_3;
    // Inline function 'kotlin.collections.mutableMapOf' call
    var out = LinkedHashMap_init_$Create$();
    var tmp0_iterator_5 = sharedEnds.iterator_jk1svi_k$();
    while (tmp0_iterator_5.hasNext_bitz1p_k$()) {
      var shared = tmp0_iterator_5.next_20eer_k$();
      var tmp1_iterator = shared.iterator_jk1svi_k$();
      while (tmp1_iterator.hasNext_bitz1p_k$()) {
        var tmp2_loop_parameter = tmp1_iterator.next_20eer_k$();
        var original = tmp2_loop_parameter.component1_7eebsc_k$();
        var components = tmp2_loop_parameter.component2_7eebsb_k$();
        // Inline function 'kotlin.collections.filterNot' call
        // Inline function 'kotlin.collections.filterNotTo' call
        var destination_5 = ArrayList_init_$Create$();
        var tmp0_iterator_6 = shared.iterator_jk1svi_k$();
        while (tmp0_iterator_6.hasNext_bitz1p_k$()) {
          var element_2 = tmp0_iterator_6.next_20eer_k$();
          // Inline function 'com.bedalton.common.util.mShortestPaths.<anonymous>' call
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = element_2.get_first_irdx8n_k$().toLowerCase();
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          if (!(tmp === replace(original, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(47)).toLowerCase())) {
            destination_5.add_utx5q5_k$(element_2);
          }
        }
        var matches = destination_5;
        var temp = components.get_c1px32_k$(0);
        var hasNext = true;
        var tmp3_iterator = drop_0(get_indices(components), 1).iterator_jk1svi_k$();
        loop: while (tmp3_iterator.hasNext_bitz1p_k$()) {
          var i = tmp3_iterator.next_20eer_k$();
          if (!hasNext) {
            continue loop;
          }
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          var component = components.get_c1px32_k$(i).toLowerCase();
          if (matches.isEmpty_y1axqb_k$()) {
            hasNext = false;
            continue loop;
          }
          // Inline function 'kotlin.collections.filter' call
          // Inline function 'kotlin.collections.filterTo' call
          var this_2 = matches;
          var destination_6 = ArrayList_init_$Create$();
          var tmp0_iterator_7 = this_2.iterator_jk1svi_k$();
          while (tmp0_iterator_7.hasNext_bitz1p_k$()) {
            var element_3 = tmp0_iterator_7.next_20eer_k$();
            // Inline function 'com.bedalton.common.util.mShortestPaths.<anonymous>' call
            var tmp_0;
            if (element_3.get_second_jf7fjx_k$().get_size_woubt6_k$() > i) {
              // Inline function 'kotlin.text.lowercase' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp_0 = element_3.get_second_jf7fjx_k$().get_c1px32_k$(i).toLowerCase() === component;
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              destination_6.add_utx5q5_k$(element_3);
            }
          }
          matches = destination_6;
          temp = components.get_c1px32_k$(i) + '/' + temp;
        }
        // Inline function 'kotlin.collections.set' call
        var tmp_1;
        if (endsWith(original, _Char___init__impl__6a9atx(47))) {
          tmp_1 = temp;
        } else {
          tmp_1 = trim(temp, charArrayOf([_Char___init__impl__6a9atx(47)]));
        }
        var value = tmp_1;
        out.put_4fpzoq_k$(original, value);
      }
    }
    return out;
  }
  function mCommonParent(allPaths) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(allPaths, 10));
    var tmp0_iterator = allPaths.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.bedalton.common.util.mCommonParent.<anonymous>' call
      var tmp$ret$0 = replace(item, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(47));
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    var normalized = destination;
    var tmp;
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp_0;
      if (isInterface(normalized, Collection)) {
        tmp_0 = normalized.isEmpty_y1axqb_k$();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$3 = true;
        break $l$block_0;
      }
      var tmp0_iterator_0 = normalized.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'com.bedalton.common.util.mCommonParent.<anonymous>' call
        var tmp_1 = firstOrNull_0(element);
        if (!equals(tmp_1 == null ? null : new Char(tmp_1), new Char(_Char___init__impl__6a9atx(47)))) {
          tmp$ret$3 = false;
          break $l$block_0;
        }
      }
      tmp$ret$3 = true;
    }
    if (tmp$ret$3) {
      tmp = '/';
    } else {
      tmp = '';
    }
    var prefix = tmp;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(normalized, 10));
    var tmp0_iterator_1 = normalized.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var item_0 = tmp0_iterator_1.next_20eer_k$();
      // Inline function 'com.bedalton.common.util.mCommonParent.<anonymous>' call
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var this_0 = split(item_0, charArrayOf([_Char___init__impl__6a9atx(47)]));
      var destination_1 = ArrayList_init_$Create$();
      var tmp0_iterator_2 = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_2.next_20eer_k$();
        // Inline function 'com.bedalton.common.util.mCommonParent.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.text.isNotBlank' call
        if (!isBlank(element_0)) {
          destination_1.add_utx5q5_k$(element_0);
        }
      }
      destination_0.add_utx5q5_k$(destination_1);
    }
    var tmp0_elvis_lhs = nullIfEmpty(toMutableList(destination_0));
    var tmp_2;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp_2 = tmp0_elvis_lhs;
    }
    var allPathsComponents = tmp_2;
    // Inline function 'kotlin.collections.minOf' call
    var iterator = allPathsComponents.iterator_jk1svi_k$();
    if (!iterator.hasNext_bitz1p_k$())
      throw NoSuchElementException_init_$Create$();
    // Inline function 'com.bedalton.common.util.mCommonParent.<anonymous>' call
    var minValue = iterator.next_20eer_k$().get_size_woubt6_k$();
    while (iterator.hasNext_bitz1p_k$()) {
      // Inline function 'com.bedalton.common.util.mCommonParent.<anonymous>' call
      var v = iterator.next_20eer_k$().get_size_woubt6_k$();
      if (compareTo(minValue, v) > 0) {
        minValue = v;
      }
    }
    var maxSharedLength = minValue;
    // Inline function 'kotlin.collections.mutableListOf' call
    var out = ArrayList_init_$Create$();
    var base = allPathsComponents.removeAt_6niowx_k$(0);
    var inductionVariable = 0;
    if (inductionVariable < maxSharedLength)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var component = base.get_c1px32_k$(i);
        var tmp$ret$16;
        $l$block_2: {
          // Inline function 'kotlin.collections.all' call
          var tmp_3;
          if (isInterface(allPathsComponents, Collection)) {
            tmp_3 = allPathsComponents.isEmpty_y1axqb_k$();
          } else {
            tmp_3 = false;
          }
          if (tmp_3) {
            tmp$ret$16 = true;
            break $l$block_2;
          }
          var tmp0_iterator_3 = allPathsComponents.iterator_jk1svi_k$();
          while (tmp0_iterator_3.hasNext_bitz1p_k$()) {
            var element_1 = tmp0_iterator_3.next_20eer_k$();
            // Inline function 'com.bedalton.common.util.mCommonParent.<anonymous>' call
            if (!(element_1.get_c1px32_k$(i) === component)) {
              tmp$ret$16 = false;
              break $l$block_2;
            }
          }
          tmp$ret$16 = true;
        }
        if (!tmp$ret$16) {
          break $l$loop;
        }
        out.add_utx5q5_k$(component);
      }
       while (inductionVariable < maxSharedLength);
    if (out.isEmpty_y1axqb_k$()) {
      return null;
    }
    return prefix + joinToString_0(out, _Char___init__impl__6a9atx(47));
  }
  function get_REGEX_ESCAPES_REGEX() {
    _init_properties_util_string_kt__j9ylij();
    return REGEX_ESCAPES_REGEX;
  }
  var REGEX_ESCAPES_REGEX;
  function get_NEWLINE_REGEX() {
    _init_properties_util_string_kt__j9ylij();
    return NEWLINE_REGEX;
  }
  var NEWLINE_REGEX;
  function get_allchars() {
    _init_properties_util_string_kt__j9ylij();
    return allchars;
  }
  var allchars;
  function ensureNotEndsWith(_this__u8e3s4, tail) {
    _init_properties_util_string_kt__j9ylij();
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(_this__u8e3s4) === 0) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4 === tail;
    }
    if (tmp) {
      return '';
    }
    var out = _this__u8e3s4;
    while (endsWith_0(out, tail)) {
      if (out === tail) {
        return '';
      }
      // Inline function 'kotlin.text.substring' call
      var this_0 = out;
      var endIndex = (get_lastIndex(_this__u8e3s4) - tail.length | 0) + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      out = this_0.substring(0, endIndex);
    }
    return out;
  }
  function superUnescape(string) {
    _init_properties_util_string_kt__j9ylij();
    var escape = ';;#@(_x.x_)@#;;';
    while (contains(string, escape)) {
      escape = '!x(' + escape + ')x!';
    }
    var tail = endsWith_0(string, '\\') ? '\\' : '';
    // Inline function 'kotlin.text.replace' call
    // Inline function 'kotlin.text.replace' call
    var this_0 = replace_0(replace_0(replace_0(replace_0(replace_0(replace_0(replace_0(replace_0(string, '\\\\', escape), '\\n', '\n'), '\\r', '\r'), '\\"', '"'), "\\'", "'"), '\\t', '\t'), '\\b', '\b'), '\\ ', ' ');
    var tmp$ret$0 = get_REGEX_ESCAPES_REGEX().replace_1ix0wf_k$(this_0, '\\$1');
    var this_1 = replace_0(tmp$ret$0, escape, '\\');
    return get_NEWLINE_REGEX().replace_1ix0wf_k$(this_1, '\r\n') + tail;
  }
  function stripSurroundingQuotes(_this__u8e3s4, trim, superUnescape_0) {
    trim = trim === VOID ? null : trim;
    superUnescape_0 = superUnescape_0 === VOID ? null : superUnescape_0;
    _init_properties_util_string_kt__j9ylij();
    var trimNotNull = trim == null ? 1 : trim;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(_this__u8e3s4) === 0) {
      return '';
    }
    var tmp;
    if (trimNotNull > 0) {
      // Inline function 'kotlin.text.trim' call
      tmp = toString_0(trim_0(isCharSequence(_this__u8e3s4) ? _this__u8e3s4 : THROW_CCE()));
    } else {
      tmp = _this__u8e3s4;
    }
    var string = tmp;
    if (string.length === 1) {
      var tmp_0;
      if (charSequenceGet(string, 0) === _Char___init__impl__6a9atx(34) ? true : charSequenceGet(string, 0) === _Char___init__impl__6a9atx(39)) {
        tmp_0 = '';
      } else {
        tmp_0 = _this__u8e3s4;
      }
      return tmp_0;
    }
    if (startsWith_0(string, _Char___init__impl__6a9atx(34)) ? endsWith(string, _Char___init__impl__6a9atx(34)) : false) {
      // Inline function 'kotlin.text.substring' call
      var this_0 = string;
      var endIndex = get_lastIndex(string);
      // Inline function 'kotlin.js.asDynamic' call
      string = this_0.substring(1, endIndex);
    } else if (startsWith_0(string, _Char___init__impl__6a9atx(39)) ? endsWith(string, _Char___init__impl__6a9atx(39)) : false) {
      // Inline function 'kotlin.text.substring' call
      var this_1 = string;
      var endIndex_0 = get_lastIndex(string);
      // Inline function 'kotlin.js.asDynamic' call
      string = this_1.substring(1, endIndex_0);
    }
    if (!(superUnescape_0 === false)) {
      string = superUnescape(string);
    }
    var tmp_1;
    if (trimNotNull > 1) {
      // Inline function 'kotlin.text.trim' call
      var this_2 = string;
      tmp_1 = toString_0(trim_0(isCharSequence(this_2) ? this_2 : THROW_CCE()));
    } else {
      tmp_1 = string;
    }
    return tmp_1;
  }
  function superUnescape_0(_this__u8e3s4, chars) {
    _init_properties_util_string_kt__j9ylij();
    var escape = ';;#@(_x.x_)@#;;';
    while (contains(_this__u8e3s4, escape)) {
      escape = '!x(' + escape + ')x!';
    }
    var escaped = replace_0(_this__u8e3s4, '\\\\', escape);
    if (contains_1(chars, _Char___init__impl__6a9atx(10)) ? true : contains_1(chars, _Char___init__impl__6a9atx(110))) {
      escaped = replace_0(escaped, '\\n', '\n');
    }
    if (contains_1(chars, _Char___init__impl__6a9atx(13)) ? true : contains_1(chars, _Char___init__impl__6a9atx(114))) {
      escaped = replace_0(escaped, '\\r', '\r');
    }
    if (contains_1(chars, _Char___init__impl__6a9atx(34))) {
      escaped = replace_0(escaped, '\\"', '"');
    }
    if (contains_1(chars, _Char___init__impl__6a9atx(39))) {
      escaped = replace_0(escaped, "\\'", "'");
    }
    if (contains_1(chars, _Char___init__impl__6a9atx(9)) ? true : contains_1(chars, _Char___init__impl__6a9atx(116))) {
      escaped = replace_0(escaped, '\\t', '\t');
    }
    if (contains_1(chars, _Char___init__impl__6a9atx(8)) ? true : contains_1(chars, _Char___init__impl__6a9atx(98))) {
      escaped = replace_0(escaped, '\\b', '\b');
    }
    if (contains_1(chars, _Char___init__impl__6a9atx(32))) {
      escaped = replace_0(escaped, '\\ ', ' ');
    }
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var destination = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = chars.length;
    while (inductionVariable < last) {
      var element = chars[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.bedalton.common.util.superUnescape.<anonymous>' call
      if (!listOf([new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(13)), new Char(_Char___init__impl__6a9atx(34)), new Char(_Char___init__impl__6a9atx(39)), new Char(_Char___init__impl__6a9atx(9)), new Char(_Char___init__impl__6a9atx(8)), new Char(_Char___init__impl__6a9atx(32))]).contains_aljjnj_k$(new Char(element))) {
        destination.add_utx5q5_k$(new Char(element));
      }
    }
    var tmp0_iterator = destination.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var char = tmp0_iterator.next_20eer_k$().value_1;
      escaped = replace_0(escaped, '\\' + toString(char), toString(char));
    }
    return replace_0(escaped, escape, contains_1(chars, _Char___init__impl__6a9atx(92)) ? '\\' : '\\\\');
  }
  function nullIfEmpty_0(_this__u8e3s4) {
    _init_properties_util_string_kt__j9ylij();
    var tmp;
    // Inline function 'kotlin.text.isNullOrBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (_this__u8e3s4 == null ? true : isBlank(_this__u8e3s4)) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function ensureEndsWith(_this__u8e3s4, char) {
    _init_properties_util_string_kt__j9ylij();
    if (endsWith(_this__u8e3s4, char)) {
      return _this__u8e3s4;
    }
    return _this__u8e3s4 + toString(char);
  }
  function get_ESCAPE_SEQUENCE() {
    return ESCAPE_SEQUENCE;
  }
  var ESCAPE_SEQUENCE;
  var properties_initialized_util_string_kt_5blygd;
  function _init_properties_util_string_kt__j9ylij() {
    if (!properties_initialized_util_string_kt_5blygd) {
      properties_initialized_util_string_kt_5blygd = true;
      // Inline function 'kotlin.text.toRegex' call
      var this_0 = '\\\\([?$\\[\\]^.\\\\*(){}])';
      REGEX_ESCAPES_REGEX = Regex_init_$Create$(this_0);
      // Inline function 'kotlin.text.toRegex' call
      NEWLINE_REGEX = Regex_init_$Create$('\r?\n');
      allchars = toCharArray('abcdefghijklmnopqrstuvwxyz0123456789');
    }
  }
  function DateComponents(year, monthZeroIndexed, day, hour, minute, seconds, unix) {
    hour = hour === VOID ? null : hour;
    minute = minute === VOID ? null : minute;
    seconds = seconds === VOID ? null : seconds;
    unix = unix === VOID ? null : unix;
    this.year = year;
    this.monthZeroIndexed = monthZeroIndexed;
    this.day = day;
    this.hour = hour;
    this.minute = minute;
    this.seconds = seconds;
    this.unix = unix;
  }
  protoOf(DateComponents).get_year_woy26e_k$ = function () {
    return this.year;
  };
  protoOf(DateComponents).get_monthZeroIndexed_gea1jm_k$ = function () {
    return this.monthZeroIndexed;
  };
  protoOf(DateComponents).get_day_18j7il_k$ = function () {
    return this.day;
  };
  protoOf(DateComponents).get_hour_wonfal_k$ = function () {
    return this.hour;
  };
  protoOf(DateComponents).get_minute_gnc10d_k$ = function () {
    return this.minute;
  };
  protoOf(DateComponents).get_seconds_xuhyfq_k$ = function () {
    return this.seconds;
  };
  protoOf(DateComponents).get_unix_wovp3l_k$ = function () {
    return this.unix;
  };
  protoOf(DateComponents).toISO_tpohak_k$ = function (offsetHours, offsetMinutes) {
    var tmp;
    if (!(offsetHours == null)) {
      var tmp_0 = (offsetHours > 0 ? '+' : '') + offsetHours.toString() + ':';
      tmp = tmp_0 + padStart((offsetMinutes == null ? 0 : offsetMinutes).toString(), 2, _Char___init__impl__6a9atx(48));
    } else {
      tmp = '';
    }
    var offset = tmp;
    var tmp_1;
    if (!(this.hour == null) ? true : !(this.minute == null)) {
      var tmp2_elvis_lhs = this.hour;
      var tmp_2 = 'T' + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) + ':';
      var tmp1_elvis_lhs = this.minute;
      tmp_1 = tmp_2 + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) + (!(this.seconds == null) ? ':' + this.seconds : '');
    } else {
      tmp_1 = '';
    }
    var time = tmp_1;
    return this.year.toString() + '-' + padStart((this.monthZeroIndexed + 1 | 0).toString(), 2, _Char___init__impl__6a9atx(48)) + '-' + this.day.toString() + time + offset;
  };
  protoOf(DateComponents).toISO = function (offsetHours, offsetMinutes, $super) {
    offsetHours = offsetHours === VOID ? null : offsetHours;
    offsetMinutes = offsetMinutes === VOID ? null : offsetMinutes;
    return this.toISO_tpohak_k$(offsetHours, offsetMinutes);
  };
  protoOf(DateComponents).component1_7eebsc_k$ = function () {
    return this.year;
  };
  protoOf(DateComponents).component2_7eebsb_k$ = function () {
    return this.monthZeroIndexed;
  };
  protoOf(DateComponents).component3_7eebsa_k$ = function () {
    return this.day;
  };
  protoOf(DateComponents).component4_7eebs9_k$ = function () {
    return this.hour;
  };
  protoOf(DateComponents).component5_7eebs8_k$ = function () {
    return this.minute;
  };
  protoOf(DateComponents).component6_7eebs7_k$ = function () {
    return this.seconds;
  };
  protoOf(DateComponents).component7_7eebs6_k$ = function () {
    return this.unix;
  };
  protoOf(DateComponents).copy_tjsuc9_k$ = function (year, monthZeroIndexed, day, hour, minute, seconds, unix) {
    return new DateComponents(year, monthZeroIndexed, day, hour, minute, seconds, unix);
  };
  protoOf(DateComponents).copy = function (year, monthZeroIndexed, day, hour, minute, seconds, unix, $super) {
    year = year === VOID ? this.year : year;
    monthZeroIndexed = monthZeroIndexed === VOID ? this.monthZeroIndexed : monthZeroIndexed;
    day = day === VOID ? this.day : day;
    hour = hour === VOID ? this.hour : hour;
    minute = minute === VOID ? this.minute : minute;
    seconds = seconds === VOID ? this.seconds : seconds;
    unix = unix === VOID ? this.unix : unix;
    return this.copy_tjsuc9_k$(year, monthZeroIndexed, day, hour, minute, seconds, unix);
  };
  protoOf(DateComponents).toString = function () {
    return 'DateComponents(year=' + this.year + ', monthZeroIndexed=' + this.monthZeroIndexed + ', day=' + this.day + ', hour=' + this.hour + ', minute=' + this.minute + ', seconds=' + this.seconds + ', unix=' + this.unix + ')';
  };
  protoOf(DateComponents).hashCode = function () {
    var result = this.year;
    result = imul(result, 31) + this.monthZeroIndexed | 0;
    result = imul(result, 31) + this.day | 0;
    result = imul(result, 31) + (this.hour == null ? 0 : this.hour) | 0;
    result = imul(result, 31) + (this.minute == null ? 0 : this.minute) | 0;
    result = imul(result, 31) + (this.seconds == null ? 0 : this.seconds) | 0;
    result = imul(result, 31) + (this.unix == null ? 0 : getNumberHashCode(this.unix)) | 0;
    return result;
  };
  protoOf(DateComponents).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DateComponents))
      return false;
    var tmp0_other_with_cast = other instanceof DateComponents ? other : THROW_CCE();
    if (!(this.year === tmp0_other_with_cast.year))
      return false;
    if (!(this.monthZeroIndexed === tmp0_other_with_cast.monthZeroIndexed))
      return false;
    if (!(this.day === tmp0_other_with_cast.day))
      return false;
    if (!(this.hour == tmp0_other_with_cast.hour))
      return false;
    if (!(this.minute == tmp0_other_with_cast.minute))
      return false;
    if (!(this.seconds == tmp0_other_with_cast.seconds))
      return false;
    if (!equals(this.unix, tmp0_other_with_cast.unix))
      return false;
    return true;
  };
  function get_leadingNumberRegex() {
    _init_properties_utils_file_kt__f8qrzb();
    return leadingNumberRegex;
  }
  var leadingNumberRegex;
  function get_trailingNumberRegex() {
    _init_properties_utils_file_kt__f8qrzb();
    return trailingNumberRegex;
  }
  var trailingNumberRegex;
  function get_sortedFilesNice() {
    _init_properties_utils_file_kt__f8qrzb();
    return sortedFilesNice;
  }
  var sortedFilesNice;
  var Platform_WINDOWS_instance;
  var Platform_MACOS_instance;
  var Platform_LINUX_instance;
  var Platform_JS_instance;
  var Platform_UNKNOWN_instance;
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).isJs_1xgr7_k$ = function () {
    return get_platform().equals(Platform_JS_getInstance());
  };
  protoOf(Companion).isWindows_cq9nnd_k$ = function () {
    return get_platform().equals(Platform_WINDOWS_getInstance());
  };
  protoOf(Companion).isMacOs_y5hc3t_k$ = function () {
    return get_platform().equals(Platform_MACOS_getInstance());
  };
  protoOf(Companion).isLinux_y52wh6_k$ = function () {
    return get_platform().equals(Platform_LINUX_getInstance());
  };
  protoOf(Companion).isUnknown_earsqo_k$ = function () {
    return get_platform().equals(Platform_UNKNOWN_getInstance());
  };
  protoOf(Companion).isJVM_1ntes7_k$ = function () {
    return isJVM();
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    Platform_initEntries();
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function values() {
    return [Platform_WINDOWS_getInstance(), Platform_MACOS_getInstance(), Platform_LINUX_getInstance(), Platform_JS_getInstance(), Platform_UNKNOWN_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'WINDOWS':
        return Platform_WINDOWS_getInstance();
      case 'MACOS':
        return Platform_MACOS_getInstance();
      case 'LINUX':
        return Platform_LINUX_getInstance();
      case 'JS':
        return Platform_JS_getInstance();
      case 'UNKNOWN':
        return Platform_UNKNOWN_getInstance();
      default:
        Platform_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var Platform_entriesInitialized;
  function Platform_initEntries() {
    if (Platform_entriesInitialized)
      return Unit_getInstance();
    Platform_entriesInitialized = true;
    Platform_WINDOWS_instance = new Platform('WINDOWS', 0);
    Platform_MACOS_instance = new Platform('MACOS', 1);
    Platform_LINUX_instance = new Platform('LINUX', 2);
    Platform_JS_instance = new Platform('JS', 3);
    Platform_UNKNOWN_instance = new Platform('UNKNOWN', 4);
    Companion_getInstance_0();
  }
  function Platform(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  function sortedFilesNice$lambda(aRaw, bRaw) {
    _init_properties_utils_file_kt__f8qrzb();
    // Inline function 'kotlin.text.lowercase' call
    var tmp0_elvis_lhs = PathUtil_getInstance().getLastPathComponent$default_9ph00d_k$(aRaw);
    // Inline function 'kotlin.js.asDynamic' call
    var a = (tmp0_elvis_lhs == null ? aRaw : tmp0_elvis_lhs).toLowerCase();
    // Inline function 'kotlin.text.lowercase' call
    var tmp1_elvis_lhs = PathUtil_getInstance().getLastPathComponent$default_9ph00d_k$(bRaw);
    // Inline function 'kotlin.js.asDynamic' call
    var b = (tmp1_elvis_lhs == null ? bRaw : tmp1_elvis_lhs).toLowerCase();
    var tmp2_safe_receiver = PathUtil_getInstance().getSelfOrParentDirectory$default_bgh9c1_k$(aRaw);
    var tmp;
    if (tmp2_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp2_safe_receiver.toLowerCase();
    }
    var tmp3_safe_receiver = tmp;
    var aDirectory = tmp3_safe_receiver == null ? null : ensureNotEndsWith(tmp3_safe_receiver, a);
    var tmp4_safe_receiver = PathUtil_getInstance().getSelfOrParentDirectory$default_bgh9c1_k$(bRaw);
    var tmp_0;
    if (tmp4_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = tmp4_safe_receiver.toLowerCase();
    }
    var tmp5_safe_receiver = tmp_0;
    var bDirectory = tmp5_safe_receiver == null ? null : ensureNotEndsWith(tmp5_safe_receiver, b);
    if (((!(aDirectory == null) ? !(aDirectory === a) : false) ? !(bDirectory == null) : false) ? !(bDirectory === b) : false) {
      var sort = compareTo(aDirectory, bDirectory);
      if (!(sort === 0)) {
        return 1;
      }
    }
    var tmp6_safe_receiver = get_leadingNumberRegex().matchEntire_6100vb_k$(a);
    var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.get_groupValues_rkv314_k$();
    var tmp_1;
    if (tmp7_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bedalton.common.util.sortedFilesNice.<anonymous>.<anonymous>' call
      tmp_1 = new Pair(tmp7_safe_receiver.get_c1px32_k$(2), toInt(tmp7_safe_receiver.get_c1px32_k$(1)));
    }
    var aMatchLeading = tmp_1;
    var tmp8_safe_receiver = get_leadingNumberRegex().matchEntire_6100vb_k$(b);
    var tmp9_safe_receiver = tmp8_safe_receiver == null ? null : tmp8_safe_receiver.get_groupValues_rkv314_k$();
    var tmp_2;
    if (tmp9_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bedalton.common.util.sortedFilesNice.<anonymous>.<anonymous>' call
      tmp_2 = new Pair(tmp9_safe_receiver.get_c1px32_k$(2), toInt(tmp9_safe_receiver.get_c1px32_k$(1)));
    }
    var bMatchLeading = tmp_2;
    if (!(aMatchLeading == null) ? !(bMatchLeading == null) : false) {
      var numberA = aMatchLeading.get_second_jf7fjx_k$();
      var numberB = bMatchLeading.get_second_jf7fjx_k$();
      var numberSort = numberA - numberB | 0;
      if (!(numberSort === 0)) {
        return numberSort;
      }
      var nameSort = compareTo(aMatchLeading.get_first_irdx8n_k$(), bMatchLeading.get_first_irdx8n_k$());
      if (!(nameSort === 0)) {
        return nameSort;
      }
    }
    var tmp10_safe_receiver = get_trailingNumberRegex().matchEntire_6100vb_k$(a);
    var tmp11_safe_receiver = tmp10_safe_receiver == null ? null : tmp10_safe_receiver.get_groupValues_rkv314_k$();
    var tmp_3;
    if (tmp11_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bedalton.common.util.sortedFilesNice.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bedalton.common.util.sortedFilesNice.<anonymous>.<anonymous>.<anonymous>' call
      var name = tmp11_safe_receiver.get_c1px32_k$(2);
      var tmp$ret$13 = startsWith_0(name, _Char___init__impl__6a9atx(46)) ? '' : name;
      tmp_3 = new Pair(tmp$ret$13, toInt(tmp11_safe_receiver.get_c1px32_k$(3)));
    }
    var aMatchTrailing = tmp_3;
    var tmp12_safe_receiver = get_trailingNumberRegex().matchEntire_6100vb_k$(b);
    var tmp13_safe_receiver = tmp12_safe_receiver == null ? null : tmp12_safe_receiver.get_groupValues_rkv314_k$();
    var tmp_4;
    if (tmp13_safe_receiver == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bedalton.common.util.sortedFilesNice.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bedalton.common.util.sortedFilesNice.<anonymous>.<anonymous>.<anonymous>' call
      var name_0 = tmp13_safe_receiver.get_c1px32_k$(2);
      var tmp$ret$17 = startsWith_0(name_0, _Char___init__impl__6a9atx(46)) ? '' : name_0;
      tmp_4 = new Pair(tmp$ret$17, toInt(tmp13_safe_receiver.get_c1px32_k$(3)));
    }
    var bMatchTrailing = tmp_4;
    if (!(aMatchTrailing == null) ? !(bMatchTrailing == null) : false) {
      var nameSort_0 = compareTo(aMatchTrailing.get_first_irdx8n_k$(), bMatchTrailing.get_first_irdx8n_k$());
      var tmp_5 = Log_getInstance();
      var tmp_6 = get_LOG_VERBOSE();
      iIf(tmp_5, tmp_6, VOID, VOID, sortedFilesNice$lambda$lambda(aMatchTrailing, bMatchTrailing));
      if (!(nameSort_0 === 0)) {
        var tmp_7 = Log_getInstance();
        var tmp_8 = get_LOG_VERBOSE();
        iIf(tmp_7, tmp_8, VOID, VOID, sortedFilesNice$lambda$lambda_0(aMatchTrailing, bMatchTrailing));
        return nameSort_0;
      }
      var numberA_0 = aMatchTrailing.get_second_jf7fjx_k$();
      var numberB_0 = bMatchTrailing.get_second_jf7fjx_k$();
      var sort_0 = numberA_0 - numberB_0 | 0;
      if (!(sort_0 === 0)) {
        return sort_0;
      }
    }
    return compareTo(a, b);
  }
  function sortedFilesNice$lambda$lambda($aMatchTrailing, $bMatchTrailing) {
    return function () {
      return 'Sorting ' + $aMatchTrailing.get_first_irdx8n_k$() + $aMatchTrailing.get_second_jf7fjx_k$() + ', ' + $bMatchTrailing.get_first_irdx8n_k$() + ':' + $bMatchTrailing.get_second_jf7fjx_k$();
    };
  }
  function sortedFilesNice$lambda$lambda_0($aMatchTrailing, $bMatchTrailing) {
    return function () {
      return 'Sorting ' + $aMatchTrailing.get_first_irdx8n_k$() + $aMatchTrailing.get_second_jf7fjx_k$() + ', ' + $bMatchTrailing.get_first_irdx8n_k$() + ':' + $bMatchTrailing.get_second_jf7fjx_k$();
    };
  }
  function Platform_WINDOWS_getInstance() {
    Platform_initEntries();
    return Platform_WINDOWS_instance;
  }
  function Platform_MACOS_getInstance() {
    Platform_initEntries();
    return Platform_MACOS_instance;
  }
  function Platform_LINUX_getInstance() {
    Platform_initEntries();
    return Platform_LINUX_instance;
  }
  function Platform_JS_getInstance() {
    Platform_initEntries();
    return Platform_JS_instance;
  }
  function Platform_UNKNOWN_getInstance() {
    Platform_initEntries();
    return Platform_UNKNOWN_instance;
  }
  var properties_initialized_utils_file_kt_c3q8rp;
  function _init_properties_utils_file_kt__f8qrzb() {
    if (!properties_initialized_utils_file_kt_c3q8rp) {
      properties_initialized_utils_file_kt_c3q8rp = true;
      // Inline function 'kotlin.text.toRegex' call
      var this_0 = '^(\\d+)(.+?)?(\\d+)?(\\..+$)?';
      leadingNumberRegex = Regex_init_$Create$(this_0);
      // Inline function 'kotlin.text.toRegex' call
      var this_1 = '^(\\d+)?(.+?)?(\\d+)(\\..+$)?';
      trailingNumberRegex = Regex_init_$Create$(this_1);
      var tmp = sortedFilesNice$lambda;
      sortedFilesNice = new sam$kotlin_Comparator$0(tmp);
    }
  }
  function get_errorToleranceRange() {
    _init_properties_utils_numbers_kt__8vze11();
    return errorToleranceRange;
  }
  var errorToleranceRange;
  function get_comparisonTolerance() {
    return comparisonTolerance;
  }
  var comparisonTolerance;
  var properties_initialized_utils_numbers_kt_6ckdc3;
  function _init_properties_utils_numbers_kt__8vze11() {
    if (!properties_initialized_utils_numbers_kt_6ckdc3) {
      properties_initialized_utils_numbers_kt_6ckdc3 = true;
      errorToleranceRange = rangeTo(-1.0E-4, 1.0E-4);
    }
  }
  function setLogger(logger) {
    Log_getInstance().setLogger_69y8by_k$(createSingleFunctionLogger(logger));
  }
  function get_self() {
    var tmp = typeof self != 'undefined';
    if ((!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE()) {
      // Inline function 'kotlin.js.unsafeCast' call
      return self;
    }
    var tmp_0;
    var tmp_1 = typeof global == 'object';
    if ((!(tmp_1 == null) ? typeof tmp_1 === 'boolean' : false) ? tmp_1 : THROW_CCE()) {
      global.self = global;
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_0 = global;
    } else {
      var tmp_2 = typeof window != 'undefined';
      if ((!(tmp_2 == null) ? typeof tmp_2 === 'boolean' : false) ? tmp_2 : THROW_CCE()) {
        // Inline function 'kotlin.js.unsafeCast' call
        tmp_0 = window;
      } else {
        var tmp_3 = Log_getInstance();
        var tmp_4 = get_LOG_DEBUG();
        wIf(tmp_3, tmp_4, VOID, _get_self_$lambda_421ocs);
        throw NullPointerException_init_$Create$('self is not defined in JS context');
      }
    }
    return tmp_0;
  }
  function _get_self_$lambda_421ocs() {
    return 'Self is not defined and not in node scope';
  }
  function nodeRequireSafe(moduleName, requiredProperties) {
    var tmp = typeof window === 'undefined';
    var inBrowser = !((!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE());
    if (inBrowser) {
      return null;
    }
    var tmp_0 = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
    var worker = (!(tmp_0 == null) ? typeof tmp_0 === 'boolean' : false) ? tmp_0 : THROW_CCE();
    if (worker) {
      return null;
    }
    var mod = function () {
      if (require == null) {
        return null;
      }
      try {
        return require(moduleName);
      } catch (e) {
        return null;
      }
    }();
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!missingProperties(moduleName, requiredProperties).isEmpty_y1axqb_k$()) {
      return null;
    }
    return mod;
  }
  function missingProperties(obj, requiredProperties) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (requiredProperties.length === 0) {
      return emptyList();
    }
    var tmp;
    if (obj.hasOwnProperty != null) {
      // Inline function 'kotlin.js.unsafeCast' call
      var jsObject = obj;
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var inductionVariable = 0;
      var last = requiredProperties.length;
      while (inductionVariable < last) {
        var element = requiredProperties[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'com.bedalton.common.util.missingProperties.<anonymous>' call
        if (!jsObject.hasOwnProperty(element)) {
          destination.add_utx5q5_k$(element);
        }
      }
      tmp = destination;
    } else {
      var tmp_0;
      try {
        // Inline function 'kotlin.collections.filter' call
        // Inline function 'kotlin.collections.filterTo' call
        var destination_0 = ArrayList_init_$Create$();
        var inductionVariable_0 = 0;
        var last_0 = requiredProperties.length;
        while (inductionVariable_0 < last_0) {
          var element_0 = requiredProperties[inductionVariable_0];
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'com.bedalton.common.util.missingProperties.<anonymous>' call
          if (obj[element_0] == null) {
            destination_0.add_utx5q5_k$(element_0);
          }
        }
        tmp_0 = destination_0;
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Exception) {
          var e = $p;
          tmp_1 = toList(requiredProperties);
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function set_mPathSeparator(_set____db54di) {
    _init_properties_path_util_js_kt__kwffqk();
    mPathSeparator = _set____db54di;
  }
  function get_mPathSeparator() {
    _init_properties_path_util_js_kt__kwffqk();
    return mPathSeparator;
  }
  var mPathSeparator;
  function get_applicationSupportPath() {
    _init_properties_path_util_js_kt__kwffqk();
    return applicationSupportPath;
  }
  var applicationSupportPath;
  function getDefaultPathSeparator() {
    _init_properties_path_util_js_kt__kwffqk();
    var tmp;
    var tmp_0 = require != null;
    if ((!(tmp_0 == null) ? typeof tmp_0 === 'boolean' : false) ? tmp_0 : THROW_CCE()) {
      var tmp_1;
      try {
        var tmp0_safe_receiver = nodeRequireSafe('path', []);
        var tmp_2 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sep;
        var tmp1_safe_receiver = (tmp_2 == null ? true : typeof tmp_2 === 'string') ? tmp_2 : THROW_CCE();
        var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : getOrNull(tmp1_safe_receiver, 0);
        var tmp_3;
        var tmp_4 = tmp2_elvis_lhs;
        if ((tmp_4 == null ? null : new Char(tmp_4)) == null) {
          tmp_3 = _Char___init__impl__6a9atx(47);
        } else {
          tmp_3 = tmp2_elvis_lhs;
        }
        tmp_1 = tmp_3;
      } catch ($p) {
        var tmp_5;
        if ($p instanceof Exception) {
          var e = $p;
          tmp_5 = _Char___init__impl__6a9atx(47);
        } else {
          if ($p instanceof Error_0) {
            var e_0 = $p;
            tmp_5 = _Char___init__impl__6a9atx(47);
          } else {
            throw $p;
          }
        }
        tmp_1 = tmp_5;
      }
      tmp = tmp_1;
    } else {
      tmp = _Char___init__impl__6a9atx(47);
    }
    return tmp;
  }
  function get_pathSeparator() {
    _init_properties_path_util_js_kt__kwffqk();
    return toString(get_mPathSeparator());
  }
  function get_pathSeparatorChar() {
    _init_properties_path_util_js_kt__kwffqk();
    return get_mPathSeparator();
  }
  function expandTilde(path) {
    _init_properties_path_util_js_kt__kwffqk();
    var tmp = typeof window !== 'undefined';
    if ((!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE()) {
      throw Exception_init_$Create$('Cannot expand tilde in path in browser');
    }
    var process_0 = process;
    var tmp_0 = PathUtil_getInstance();
    var tmp_1 = process_0.env.HOME;
    var tmp_2 = (!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE();
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = path.substring(1);
    return tmp_0.combine_vm27cv_k$([tmp_2, tmp$ret$1]);
  }
  function get_platform() {
    _init_properties_path_util_js_kt__kwffqk();
    return Platform_JS_getInstance();
  }
  function isJVM() {
    _init_properties_path_util_js_kt__kwffqk();
    return false;
  }
  var properties_initialized_path_util_js_kt_imhv66;
  function _init_properties_path_util_js_kt__kwffqk() {
    if (!properties_initialized_path_util_js_kt_imhv66) {
      properties_initialized_path_util_js_kt_imhv66 = true;
      mPathSeparator = getDefaultPathSeparator();
      applicationSupportPath = null;
    }
  }
  function unixToDateComponents(unix) {
    var date = new Date(unix);
    return new DateComponents(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), unix);
  }
  function toUnixTime(dateComponents, offsetHours, offsetMinutes) {
    offsetHours = offsetHours === VOID ? null : offsetHours;
    offsetMinutes = offsetMinutes === VOID ? null : offsetMinutes;
    var date = new Date(dateComponents.toISO());
    var time = numberToLong(date.getTime());
    var tmp;
    if (!(offsetHours == null) ? true : !(offsetMinutes == null)) {
      var tmp_0 = imul(offsetHours == null ? 0 : offsetHours, 60);
      var offset = tmp_0 + (offsetMinutes == null ? 0 : offsetMinutes) | 0;
      // Inline function 'kotlin.Long.plus' call
      tmp = time.plus_r93sks_k$(toLong(offset));
    } else {
      tmp = time;
    }
    var out = tmp;
    // Inline function 'kotlin.math.floor' call
    // Inline function 'kotlin.Long.div' call
    var x = out.toDouble_ygsx0s_k$() / 1000.0;
    return Math.floor(x);
  }
  //region block: init
  ESCAPE_SEQUENCE = ';;#@(_x.x_)@#;;';
  comparisonTolerance = 1.0E-4;
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $com = _.com || (_.com = {});
    var $com$bedalton = $com.bedalton || ($com.bedalton = {});
    var $com$bedalton$common = $com$bedalton.common || ($com$bedalton.common = {});
    var $com$bedalton$common$exceptions = $com$bedalton$common.exceptions || ($com$bedalton$common.exceptions = {});
    $com$bedalton$common$exceptions.CommonException = CommonException;
    var $com = _.com || (_.com = {});
    var $com$bedalton = $com.bedalton || ($com.bedalton = {});
    var $com$bedalton$common = $com$bedalton.common || ($com$bedalton.common = {});
    var $com$bedalton$common$exceptions = $com$bedalton$common.exceptions || ($com$bedalton$common.exceptions = {});
    $com$bedalton$common$exceptions.IOReadException = IOReadException;
    var $com = _.com || (_.com = {});
    var $com$bedalton = $com.bedalton || ($com.bedalton = {});
    var $com$bedalton$common = $com$bedalton.common || ($com$bedalton.common = {});
    var $com$bedalton$common$structs = $com$bedalton$common.structs || ($com$bedalton$common.structs = {});
    $com$bedalton$common$structs.AlreadyDisposedDataCacheException = AlreadyDisposedDataCacheException;
    var $com = _.com || (_.com = {});
    var $com$bedalton = $com.bedalton || ($com.bedalton = {});
    var $com$bedalton$common = $com$bedalton.common || ($com$bedalton.common = {});
    var $com$bedalton$common$util = $com$bedalton$common.util || ($com$bedalton$common.util = {});
    $com$bedalton$common$util.DateComponents = DateComponents;
    _.setLogger = setLogger;
    var $com = _.com || (_.com = {});
    var $com$bedalton = $com.bedalton || ($com.bedalton = {});
    var $com$bedalton$common = $com$bedalton.common || ($com$bedalton.common = {});
    var $com$bedalton$common$structs = $com$bedalton$common.structs || ($com$bedalton$common.structs = {});
    var $com = _.com || (_.com = {});
    var $com$bedalton = $com.bedalton || ($com.bedalton = {});
    var $com$bedalton$common = $com$bedalton.common || ($com$bedalton.common = {});
    var $com$bedalton$common$util = $com$bedalton$common.util || ($com$bedalton$common.util = {});
    $com$bedalton$common$util.unixToDateComponents = unixToDateComponents;
    $com$bedalton$common$util.toUnixTime = toUnixTime;
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = decodeNullableBooleanElement;
  _.$_$.b = decodeNullableIntElement;
  _.$_$.c = decodeNullableStringElement;
  _.$_$.d = encodeNullableBooleanElement;
  _.$_$.e = encodeNullableIntElement;
  _.$_$.f = encodeNullableStringElement;
  _.$_$.g = formatted;
  _.$_$.h = get_self;
  //endregion
  return _;
}));

//# sourceMappingURL=common-core.js.map
