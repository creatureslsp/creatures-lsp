(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'common-log-js-ir'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'common-log-js-ir'.");
    }
    root['common-log-js-ir'] = factory(typeof this['common-log-js-ir'] === 'undefined' ? {} : this['common-log-js-ir'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.kc;
  var objectMeta = kotlin_kotlin.$_$.jc;
  var setMetadataFor = kotlin_kotlin.$_$.lc;
  var VOID = kotlin_kotlin.$_$.h;
  var interfaceMeta = kotlin_kotlin.$_$.nb;
  var THROW_CCE = kotlin_kotlin.$_$.jg;
  var isCharSequence = kotlin_kotlin.$_$.sb;
  var trim = kotlin_kotlin.$_$.pf;
  var toString = kotlin_kotlin.$_$.pc;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.d1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.gh;
  var equals = kotlin_kotlin.$_$.gb;
  var classMeta = kotlin_kotlin.$_$.db;
  var THROW_IAE = kotlin_kotlin.$_$.kg;
  var Unit_getInstance = kotlin_kotlin.$_$.x4;
  var Enum = kotlin_kotlin.$_$.yf;
  var defineProp = kotlin_kotlin.$_$.fb;
  var hashCode = kotlin_kotlin.$_$.mb;
  var getBooleanHashCode = kotlin_kotlin.$_$.ib;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var mutableListOf = kotlin_kotlin.$_$.k8;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.j1;
  var stackTraceToString = kotlin_kotlin.$_$.ih;
  var isBlank = kotlin_kotlin.$_$.wd;
  var Pair = kotlin_kotlin.$_$.gg;
  var RegexOption_IGNORE_CASE_getInstance = kotlin_kotlin.$_$.i;
  var RegexOption_MULTILINE_getInstance = kotlin_kotlin.$_$.j;
  var setOf = kotlin_kotlin.$_$.y8;
  var Regex = kotlin_kotlin.$_$.hd;
  var repeat = kotlin_kotlin.$_$.ie;
  var isNumber = kotlin_kotlin.$_$.yb;
  var numberToInt = kotlin_kotlin.$_$.gc;
  var emptyList = kotlin_kotlin.$_$.w6;
  var toList = kotlin_kotlin.$_$.o9;
  var Exception = kotlin_kotlin.$_$.ag;
  //endregion
  //region block: pre-declaration
  setMetadataFor(IConsoleColors, 'IConsoleColors', interfaceMeta);
  setMetadataFor(DefaultConsoleColors, 'DefaultConsoleColors', objectMeta, VOID, [IConsoleColors]);
  setMetadataFor(LoggerColor, 'LoggerColor', classMeta);
  setMetadataFor(BLACK, 'BLACK', objectMeta, LoggerColor);
  setMetadataFor(RED, 'RED', objectMeta, LoggerColor);
  setMetadataFor(GREEN, 'GREEN', objectMeta, LoggerColor);
  setMetadataFor(YELLOW, 'YELLOW', objectMeta, LoggerColor);
  setMetadataFor(BLUE, 'BLUE', objectMeta, LoggerColor);
  setMetadataFor(MAGENTA, 'MAGENTA', objectMeta, LoggerColor);
  setMetadataFor(CYAN, 'CYAN', objectMeta, LoggerColor);
  setMetadataFor(WHITE, 'WHITE', objectMeta, LoggerColor);
  setMetadataFor(LogLevel, 'LogLevel', classMeta, Enum);
  setMetadataFor(LoggerBuilder, 'LoggerBuilder', classMeta, VOID, VOID, LoggerBuilder);
  setMetadataFor(CallbackLogger, 'CallbackLogger', classMeta);
  setMetadataFor(Log, 'Log', objectMeta);
  setMetadataFor(DefaultLoggerObject, 'DefaultLoggerObject', objectMeta);
  setMetadataFor(createSingleFunctionLogger$1, VOID, classMeta);
  //endregion
  function DefaultConsoleColors() {
    DefaultConsoleColors_instance = this;
    this.RESET_1 = get_consoleColorEscapeSequence() + '[0m';
    this.BRIGHT_1 = get_consoleColorEscapeSequence() + '[1m';
    this.BOLD_1 = get_consoleColorEscapeSequence() + '[1m';
    this.DIM_1 = get_consoleColorEscapeSequence() + '[2m';
    this.UNDERLINE_1 = get_consoleColorEscapeSequence() + '[4m';
    this.BLINK_1 = get_consoleColorEscapeSequence() + '[5m';
    this.REVERSE_1 = get_consoleColorEscapeSequence() + '[7m';
    this.HIDDEN_1 = get_consoleColorEscapeSequence() + '[8m';
    this.BLACK_1 = get_consoleColorEscapeSequence() + '[30m';
    this.RED_1 = get_consoleColorEscapeSequence() + '[31m';
    this.GREEN_1 = get_consoleColorEscapeSequence() + '[32m';
    this.YELLOW_1 = get_consoleColorEscapeSequence() + '[33m';
    this.BLUE_1 = get_consoleColorEscapeSequence() + '[34m';
    this.PURPLE_1 = get_consoleColorEscapeSequence() + '[35m';
    this.CYAN_1 = get_consoleColorEscapeSequence() + '[36m';
    this.WHITE_1 = get_consoleColorEscapeSequence() + '[38;5;15m';
    this.BLACK_BACKGROUND_1 = get_consoleColorEscapeSequence() + '[40m';
    this.RED_BACKGROUND_1 = get_consoleColorEscapeSequence() + '[41m';
    this.GREEN_BACKGROUND_1 = get_consoleColorEscapeSequence() + '[42m';
    this.YELLOW_BACKGROUND_1 = get_consoleColorEscapeSequence() + '[43m';
    this.BLUE_BACKGROUND_1 = get_consoleColorEscapeSequence() + '[44m';
    this.PURPLE_BACKGROUND_1 = get_consoleColorEscapeSequence() + '[45m';
    this.CYAN_BACKGROUND_1 = get_consoleColorEscapeSequence() + '[46m';
    this.WHITE_BACKGROUND_1 = get_consoleColorEscapeSequence() + '[48;5;15m';
    this.UNDERLINE_BLACK_1 = get_consoleColorEscapeSequence() + '[4;30m';
    this.UNDERLINE_RED_1 = get_consoleColorEscapeSequence() + '[4;31m';
    this.UNDERLINE_GREEN_1 = get_consoleColorEscapeSequence() + '[4;32m';
    this.UNDERLINE_YELLOW_1 = get_consoleColorEscapeSequence() + '[4;33m';
    this.UNDERLINE_BLUE_1 = get_consoleColorEscapeSequence() + '[4;34m';
    this.UNDERLINE_PURPLE_1 = get_consoleColorEscapeSequence() + '[4;35m';
    this.UNDERLINE_CYAN_1 = get_consoleColorEscapeSequence() + '[4;36m';
    this.UNDERLINE_WHITE_1 = get_consoleColorEscapeSequence() + '[4;37m';
  }
  protoOf(DefaultConsoleColors).get_RESET_ifqdqe_k$ = function () {
    return this.RESET_1;
  };
  protoOf(DefaultConsoleColors).get_BRIGHT_42xla5_k$ = function () {
    return this.BRIGHT_1;
  };
  protoOf(DefaultConsoleColors).get_BOLD_wnyh1q_k$ = function () {
    return this.BOLD_1;
  };
  protoOf(DefaultConsoleColors).get_DIM_18jvup_k$ = function () {
    return this.DIM_1;
  };
  protoOf(DefaultConsoleColors).get_UNDERLINE_xey8sd_k$ = function () {
    return this.UNDERLINE_1;
  };
  protoOf(DefaultConsoleColors).get_BLINK_i71xxv_k$ = function () {
    return this.BLINK_1;
  };
  protoOf(DefaultConsoleColors).get_REVERSE_vbubx5_k$ = function () {
    return this.REVERSE_1;
  };
  protoOf(DefaultConsoleColors).get_HIDDEN_1dp9hp_k$ = function () {
    return this.HIDDEN_1;
  };
  protoOf(DefaultConsoleColors).get_BLACK_i71rqu_k$ = function () {
    return this.BLACK_1;
  };
  protoOf(DefaultConsoleColors).get_RED_18jlko_k$ = function () {
    return this.RED_1;
  };
  protoOf(DefaultConsoleColors).get_GREEN_i9wnne_k$ = function () {
    return this.GREEN_1;
  };
  protoOf(DefaultConsoleColors).get_YELLOW_6m0ewt_k$ = function () {
    return this.YELLOW_1;
  };
  protoOf(DefaultConsoleColors).get_BLUE_wnyf1f_k$ = function () {
    return this.BLUE_1;
  };
  protoOf(DefaultConsoleColors).get_PURPLE_2lifnp_k$ = function () {
    return this.PURPLE_1;
  };
  protoOf(DefaultConsoleColors).get_CYAN_wnzb70_k$ = function () {
    return this.CYAN_1;
  };
  protoOf(DefaultConsoleColors).get_WHITE_iij2lc_k$ = function () {
    return this.WHITE_1;
  };
  protoOf(DefaultConsoleColors).get_BLACK_BACKGROUND_i3qkwn_k$ = function () {
    return this.BLACK_BACKGROUND_1;
  };
  protoOf(DefaultConsoleColors).get_RED_BACKGROUND_egy7d1_k$ = function () {
    return this.RED_BACKGROUND_1;
  };
  protoOf(DefaultConsoleColors).get_GREEN_BACKGROUND_hpdm1f_k$ = function () {
    return this.GREEN_BACKGROUND_1;
  };
  protoOf(DefaultConsoleColors).get_YELLOW_BACKGROUND_v5f2uo_k$ = function () {
    return this.YELLOW_BACKGROUND_1;
  };
  protoOf(DefaultConsoleColors).get_BLUE_BACKGROUND_7bj5u2_k$ = function () {
    return this.BLUE_BACKGROUND_1;
  };
  protoOf(DefaultConsoleColors).get_PURPLE_BACKGROUND_1rtk_k$ = function () {
    return this.PURPLE_BACKGROUND_1;
  };
  protoOf(DefaultConsoleColors).get_CYAN_BACKGROUND_v7m3of_k$ = function () {
    return this.CYAN_BACKGROUND_1;
  };
  protoOf(DefaultConsoleColors).get_WHITE_BACKGROUND_52bmjx_k$ = function () {
    return this.WHITE_BACKGROUND_1;
  };
  protoOf(DefaultConsoleColors).get_UNDERLINE_BLACK_lspra5_k$ = function () {
    return this.UNDERLINE_BLACK_1;
  };
  protoOf(DefaultConsoleColors).get_UNDERLINE_RED_9mq0uj_k$ = function () {
    return this.UNDERLINE_RED_1;
  };
  protoOf(DefaultConsoleColors).get_UNDERLINE_GREEN_lpuvdl_k$ = function () {
    return this.UNDERLINE_GREEN_1;
  };
  protoOf(DefaultConsoleColors).get_UNDERLINE_YELLOW_pns1cg_k$ = function () {
    return this.UNDERLINE_YELLOW_1;
  };
  protoOf(DefaultConsoleColors).get_UNDERLINE_BLUE_eg8kiy_k$ = function () {
    return this.UNDERLINE_BLUE_1;
  };
  protoOf(DefaultConsoleColors).get_UNDERLINE_PURPLE_toa0lk_k$ = function () {
    return this.UNDERLINE_PURPLE_1;
  };
  protoOf(DefaultConsoleColors).get_UNDERLINE_CYAN_eg7odd_k$ = function () {
    return this.UNDERLINE_CYAN_1;
  };
  protoOf(DefaultConsoleColors).get_UNDERLINE_WHITE_lh8gfn_k$ = function () {
    return this.UNDERLINE_WHITE_1;
  };
  var DefaultConsoleColors_instance;
  function DefaultConsoleColors_getInstance() {
    if (DefaultConsoleColors_instance == null)
      new DefaultConsoleColors();
    return DefaultConsoleColors_instance;
  }
  function IConsoleColors() {
  }
  function get_namespacePrefixRegex() {
    _init_properties_DefaultLoggerObject_kt__11m6n2();
    return namespacePrefixRegex;
  }
  var namespacePrefixRegex;
  function stripNamespacePrefix(_this__u8e3s4) {
    _init_properties_DefaultLoggerObject_kt__11m6n2();
    // Inline function 'kotlin.text.replace' call
    return get_namespacePrefixRegex().replace_1ix0wf_k$(_this__u8e3s4, '$2');
  }
  function getNamespacePrefix(_this__u8e3s4) {
    _init_properties_DefaultLoggerObject_kt__11m6n2();
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.replace' call
    var this_0 = get_namespacePrefixRegex().replace_1ix0wf_k$(_this__u8e3s4, '$1');
    return toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
  }
  var properties_initialized_DefaultLoggerObject_kt_gbdsjk;
  function _init_properties_DefaultLoggerObject_kt__11m6n2() {
    if (!properties_initialized_DefaultLoggerObject_kt_gbdsjk) {
      properties_initialized_DefaultLoggerObject_kt_gbdsjk = true;
      // Inline function 'kotlin.text.toRegex' call
      var this_0 = '^%([^%]+)%(.*)$';
      namespacePrefixRegex = Regex_init_$Create$(this_0);
    }
  }
  function getLogColorPrefix(color) {
    if (color == null) {
      return null;
    }
    var tmp;
    if (equals(color, BLACK_getInstance())) {
      tmp = DefaultConsoleColors_getInstance().get_BLACK_i71rqu_k$();
    } else if (equals(color, RED_getInstance())) {
      tmp = DefaultConsoleColors_getInstance().get_RED_18jlko_k$();
    } else if (equals(color, GREEN_getInstance())) {
      tmp = DefaultConsoleColors_getInstance().get_GREEN_i9wnne_k$();
    } else if (equals(color, YELLOW_getInstance())) {
      tmp = DefaultConsoleColors_getInstance().get_YELLOW_6m0ewt_k$();
    } else if (equals(color, BLUE_getInstance())) {
      tmp = DefaultConsoleColors_getInstance().get_BLUE_wnyf1f_k$();
    } else if (equals(color, MAGENTA_getInstance())) {
      tmp = DefaultConsoleColors_getInstance().get_PURPLE_2lifnp_k$();
    } else if (equals(color, CYAN_getInstance())) {
      tmp = DefaultConsoleColors_getInstance().get_CYAN_wnzb70_k$();
    } else if (equals(color, WHITE_getInstance())) {
      tmp = DefaultConsoleColors_getInstance().get_WHITE_iij2lc_k$();
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function get_LOG_VERBOSE() {
    return LOG_VERBOSE;
  }
  var LOG_VERBOSE;
  function get_LOG_DEBUG() {
    return LOG_DEBUG;
  }
  var LOG_DEBUG;
  function BLACK() {
    BLACK_instance = this;
    LoggerColor.call(this);
  }
  var BLACK_instance;
  function BLACK_getInstance() {
    if (BLACK_instance == null)
      new BLACK();
    return BLACK_instance;
  }
  function RED() {
    RED_instance = this;
    LoggerColor.call(this);
  }
  var RED_instance;
  function RED_getInstance() {
    if (RED_instance == null)
      new RED();
    return RED_instance;
  }
  function GREEN() {
    GREEN_instance = this;
    LoggerColor.call(this);
  }
  var GREEN_instance;
  function GREEN_getInstance() {
    if (GREEN_instance == null)
      new GREEN();
    return GREEN_instance;
  }
  function YELLOW() {
    YELLOW_instance = this;
    LoggerColor.call(this);
  }
  var YELLOW_instance;
  function YELLOW_getInstance() {
    if (YELLOW_instance == null)
      new YELLOW();
    return YELLOW_instance;
  }
  function BLUE() {
    BLUE_instance = this;
    LoggerColor.call(this);
  }
  var BLUE_instance;
  function BLUE_getInstance() {
    if (BLUE_instance == null)
      new BLUE();
    return BLUE_instance;
  }
  function MAGENTA() {
    MAGENTA_instance = this;
    LoggerColor.call(this);
  }
  var MAGENTA_instance;
  function MAGENTA_getInstance() {
    if (MAGENTA_instance == null)
      new MAGENTA();
    return MAGENTA_instance;
  }
  function CYAN() {
    CYAN_instance = this;
    LoggerColor.call(this);
  }
  var CYAN_instance;
  function CYAN_getInstance() {
    if (CYAN_instance == null)
      new CYAN();
    return CYAN_instance;
  }
  function WHITE() {
    WHITE_instance = this;
    LoggerColor.call(this);
  }
  var WHITE_instance;
  function WHITE_getInstance() {
    if (WHITE_instance == null)
      new WHITE();
    return WHITE_instance;
  }
  function LoggerColor() {
  }
  var LogLevel_LOG_2_instance;
  var LogLevel_LOG_1_instance;
  var LogLevel_INFO_instance;
  var LogLevel_TRACE_instance;
  var LogLevel_WARN_instance;
  var LogLevel_ERROR_instance;
  function values() {
    return [LogLevel_LOG_2_getInstance(), LogLevel_LOG_1_getInstance(), LogLevel_INFO_getInstance(), LogLevel_TRACE_getInstance(), LogLevel_WARN_getInstance(), LogLevel_ERROR_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'LOG_2':
        return LogLevel_LOG_2_getInstance();
      case 'LOG_1':
        return LogLevel_LOG_1_getInstance();
      case 'INFO':
        return LogLevel_INFO_getInstance();
      case 'TRACE':
        return LogLevel_TRACE_getInstance();
      case 'WARN':
        return LogLevel_WARN_getInstance();
      case 'ERROR':
        return LogLevel_ERROR_getInstance();
      default:
        LogLevel_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var LogLevel_entriesInitialized;
  function LogLevel_initEntries() {
    if (LogLevel_entriesInitialized)
      return Unit_getInstance();
    LogLevel_entriesInitialized = true;
    LogLevel_LOG_2_instance = new LogLevel('LOG_2', 0, 5);
    LogLevel_LOG_1_instance = new LogLevel('LOG_1', 1, 4);
    LogLevel_INFO_instance = new LogLevel('INFO', 2, 3);
    LogLevel_TRACE_instance = new LogLevel('TRACE', 3, 3);
    LogLevel_WARN_instance = new LogLevel('WARN', 4, 2);
    LogLevel_ERROR_instance = new LogLevel('ERROR', 5, 1);
  }
  function LogLevel(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value_1 = value;
  }
  protoOf(LogLevel).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function LogLevel_LOG_2_getInstance() {
    LogLevel_initEntries();
    return LogLevel_LOG_2_instance;
  }
  function LogLevel_LOG_1_getInstance() {
    LogLevel_initEntries();
    return LogLevel_LOG_1_instance;
  }
  function LogLevel_INFO_getInstance() {
    LogLevel_initEntries();
    return LogLevel_INFO_instance;
  }
  function LogLevel_TRACE_getInstance() {
    LogLevel_initEntries();
    return LogLevel_TRACE_instance;
  }
  function LogLevel_WARN_getInstance() {
    LogLevel_initEntries();
    return LogLevel_WARN_instance;
  }
  function LogLevel_ERROR_getInstance() {
    LogLevel_initEntries();
    return LogLevel_ERROR_instance;
  }
  function iIf(_this__u8e3s4, mode, replace, color, callback) {
    replace = replace === VOID ? false : replace;
    color = color === VOID ? null : color;
    if (!_this__u8e3s4.get_silent_jhk5em_k$() ? _this__u8e3s4.hasMode_frur5v_k$(mode) : false) {
      // Inline function 'com.bedalton.log.Log.i' call
      // Inline function 'kotlin.contracts.contract' call
      if (!_this__u8e3s4.get_silent_jhk5em_k$() ? _this__u8e3s4.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_1_getInstance().get_value_j01efc_k$() : false) {
        var tmp = _this__u8e3s4.get_loggerObject_74grt4_k$();
        // Inline function 'com.bedalton.log.Log.format' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0 = _this__u8e3s4.format_bqai8u_k$('LOG1', null, callback());
        tmp.info(replace, tmp$ret$0, color);
      }
    }
  }
  function eIf(_this__u8e3s4, mode, color, callback) {
    color = color === VOID ? null : color;
    if (!_this__u8e3s4.get_silent_jhk5em_k$() ? _this__u8e3s4.hasMode_frur5v_k$(mode) : false) {
      // Inline function 'com.bedalton.log.Log.e' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bedalton.log.Log.e' call
      // Inline function 'kotlin.contracts.contract' call
      if (!_this__u8e3s4.get_silent_jhk5em_k$() ? _this__u8e3s4.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_ERROR_getInstance().get_value_j01efc_k$() : false) {
        var tmp = _this__u8e3s4.get_loggerObject_74grt4_k$();
        // Inline function 'com.bedalton.log.Log.format' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0 = _this__u8e3s4.format_bqai8u_k$('ERROR', null, callback());
        tmp.error(tmp$ret$0, color);
      }
    }
  }
  function wIf(_this__u8e3s4, mode, color, callback) {
    color = color === VOID ? null : color;
    if (!_this__u8e3s4.get_silent_jhk5em_k$() ? _this__u8e3s4.hasMode_frur5v_k$(mode) : false) {
      // Inline function 'com.bedalton.log.Log.w' call
      // Inline function 'kotlin.contracts.contract' call
      if (!_this__u8e3s4.get_silent_jhk5em_k$() ? _this__u8e3s4.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_WARN_getInstance().get_value_j01efc_k$() : false) {
        var tmp = _this__u8e3s4.get_loggerObject_74grt4_k$();
        // Inline function 'com.bedalton.log.Log.format' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0 = _this__u8e3s4.format_bqai8u_k$('WARN', null, callback());
        tmp.warning(tmp$ret$0, color);
      }
    }
  }
  function _set_mLog__9q2zds($this, _set____db54di) {
    $this.mLog_1 = _set____db54di;
  }
  function _get_mLog__d9uyz8($this) {
    return $this.mLog_1;
  }
  function _set_mInfo__hag8oa($this, _set____db54di) {
    $this.mInfo_1 = _set____db54di;
  }
  function _get_mInfo__eqo7t6($this) {
    return $this.mInfo_1;
  }
  function _set_mWarning__f7xdq0($this, _set____db54di) {
    $this.mWarning_1 = _set____db54di;
  }
  function _get_mWarning__s0tp6s($this) {
    return $this.mWarning_1;
  }
  function _set_mError__y2okys($this, _set____db54di) {
    $this.mError_1 = _set____db54di;
  }
  function _get_mError__wly0c0($this) {
    return $this.mError_1;
  }
  function _set_mLogMemory__r7xna7($this, _set____db54di) {
    $this.mLogMemory_1 = _set____db54di;
  }
  function _get_mLogMemory__c5p24z($this) {
    return $this.mLogMemory_1;
  }
  function _set_mGetColor__b8k65x($this, _set____db54di) {
    $this.mGetColor_1 = _set____db54di;
  }
  function _get_mGetColor__i2aa8n($this) {
    return $this.mGetColor_1;
  }
  function LoggerBuilder() {
    this.mLog_1 = null;
    this.mInfo_1 = null;
    this.mWarning_1 = null;
    this.mError_1 = null;
    this.mLogMemory_1 = null;
    this.mGetColor_1 = null;
  }
  protoOf(LoggerBuilder).withLog = function (log) {
    this.mLog_1 = log;
  };
  protoOf(LoggerBuilder).info = function (log) {
    this.mInfo_1 = log;
    return this;
  };
  protoOf(LoggerBuilder).warning = function (log) {
    this.mWarning_1 = log;
    return this;
  };
  protoOf(LoggerBuilder).error = function (log) {
    this.mError_1 = log;
    return this;
  };
  protoOf(LoggerBuilder).logMemory = function (log) {
    this.mLogMemory_1 = log;
    return this;
  };
  protoOf(LoggerBuilder).getColor = function (callback) {
    this.mGetColor_1 = callback;
    return this;
  };
  protoOf(LoggerBuilder).build = function () {
    return new CallbackLogger(this.mLog_1, this.mInfo_1, this.mWarning_1, this.mError_1, this.mLogMemory_1, this.mGetColor_1);
  };
  function getLogColorPrefix$ref() {
    var l = function (p0) {
      return getLogColorPrefix(p0);
    };
    l.callableName = 'getLogColorPrefix';
    return l;
  }
  function CallbackLogger(mLog, mInfo, mWarning, mError, mLogMemory, mGetColor, prependLogType) {
    prependLogType = prependLogType === VOID ? null : prependLogType;
    this.mLog_1 = mLog;
    this.mInfo_1 = mInfo;
    this.mWarning_1 = mWarning;
    this.mError_1 = mError;
    this.mLogMemory_1 = mLogMemory;
    this.mGetColor_1 = mGetColor;
    this.prependLogType_1 = prependLogType;
  }
  protoOf(CallbackLogger).get_mLog_wopw4g_k$ = function () {
    return this.mLog_1;
  };
  protoOf(CallbackLogger).get_mInfo_iunyj6_k$ = function () {
    return this.mInfo_1;
  };
  protoOf(CallbackLogger).get_mWarning_unpkxk_k$ = function () {
    return this.mWarning_1;
  };
  protoOf(CallbackLogger).get_mError_g3lx9g_k$ = function () {
    return this.mError_1;
  };
  protoOf(CallbackLogger).get_mLogMemory_rxuscf_k$ = function () {
    return this.mLogMemory_1;
  };
  protoOf(CallbackLogger).get_mGetColor_jzpyzz_k$ = function () {
    return this.mGetColor_1;
  };
  protoOf(CallbackLogger).set_prependLogType_insnt9_k$ = function (_set____db54di) {
    this.prependLogType_1 = _set____db54di;
  };
  protoOf(CallbackLogger).get_prependLogType_dolzgn_k$ = function () {
    return this.prependLogType_1;
  };
  protoOf(CallbackLogger).log = function (replace, message, color) {
    var tmp0_safe_receiver = this.mLog_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(replace, message, color);
  };
  protoOf(CallbackLogger).info = function (replace, message, color) {
    var tmp0_safe_receiver = this.mInfo_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(replace, message, color);
  };
  protoOf(CallbackLogger).warning = function (message, color) {
    var tmp0_safe_receiver = this.mWarning_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(message, color);
  };
  protoOf(CallbackLogger).error = function (message, color) {
    var tmp0_safe_receiver = this.mError_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(message, color);
  };
  protoOf(CallbackLogger).logMemory = function () {
    var tmp0_safe_receiver = this.mLogMemory_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver();
  };
  protoOf(CallbackLogger).getColorPrefix = function (color) {
    var tmp0_elvis_lhs = this.mGetColor_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = getLogColorPrefix$ref();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp(color);
  };
  protoOf(CallbackLogger).component1_7eebsc_k$ = function () {
    return this.mLog_1;
  };
  protoOf(CallbackLogger).component2_7eebsb_k$ = function () {
    return this.mInfo_1;
  };
  protoOf(CallbackLogger).component3_7eebsa_k$ = function () {
    return this.mWarning_1;
  };
  protoOf(CallbackLogger).component4_7eebs9_k$ = function () {
    return this.mError_1;
  };
  protoOf(CallbackLogger).component5_7eebs8_k$ = function () {
    return this.mLogMemory_1;
  };
  protoOf(CallbackLogger).component6_7eebs7_k$ = function () {
    return this.mGetColor_1;
  };
  protoOf(CallbackLogger).component7_7eebs6_k$ = function () {
    return this.prependLogType_1;
  };
  protoOf(CallbackLogger).copy_xdap4y_k$ = function (mLog, mInfo, mWarning, mError, mLogMemory, mGetColor, prependLogType) {
    return new CallbackLogger(mLog, mInfo, mWarning, mError, mLogMemory, mGetColor, prependLogType);
  };
  protoOf(CallbackLogger).copy$default_z3xagu_k$ = function (mLog, mInfo, mWarning, mError, mLogMemory, mGetColor, prependLogType, $super) {
    mLog = mLog === VOID ? this.mLog_1 : mLog;
    mInfo = mInfo === VOID ? this.mInfo_1 : mInfo;
    mWarning = mWarning === VOID ? this.mWarning_1 : mWarning;
    mError = mError === VOID ? this.mError_1 : mError;
    mLogMemory = mLogMemory === VOID ? this.mLogMemory_1 : mLogMemory;
    mGetColor = mGetColor === VOID ? this.mGetColor_1 : mGetColor;
    prependLogType = prependLogType === VOID ? this.prependLogType_1 : prependLogType;
    return $super === VOID ? this.copy_xdap4y_k$(mLog, mInfo, mWarning, mError, mLogMemory, mGetColor, prependLogType) : $super.copy_xdap4y_k$.call(this, mLog, mInfo, mWarning, mError, mLogMemory, mGetColor, prependLogType);
  };
  protoOf(CallbackLogger).toString = function () {
    return 'CallbackLogger(mLog=' + this.mLog_1 + ', mInfo=' + this.mInfo_1 + ', mWarning=' + this.mWarning_1 + ', mError=' + this.mError_1 + ', mLogMemory=' + this.mLogMemory_1 + ', mGetColor=' + this.mGetColor_1 + ', prependLogType=' + this.prependLogType_1 + ')';
  };
  protoOf(CallbackLogger).hashCode = function () {
    var result = this.mLog_1 == null ? 0 : hashCode(this.mLog_1);
    result = imul(result, 31) + (this.mInfo_1 == null ? 0 : hashCode(this.mInfo_1)) | 0;
    result = imul(result, 31) + (this.mWarning_1 == null ? 0 : hashCode(this.mWarning_1)) | 0;
    result = imul(result, 31) + (this.mError_1 == null ? 0 : hashCode(this.mError_1)) | 0;
    result = imul(result, 31) + (this.mLogMemory_1 == null ? 0 : hashCode(this.mLogMemory_1)) | 0;
    result = imul(result, 31) + (this.mGetColor_1 == null ? 0 : hashCode(this.mGetColor_1)) | 0;
    result = imul(result, 31) + (this.prependLogType_1 == null ? 0 : getBooleanHashCode(this.prependLogType_1)) | 0;
    return result;
  };
  protoOf(CallbackLogger).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CallbackLogger))
      return false;
    var tmp0_other_with_cast = other instanceof CallbackLogger ? other : THROW_CCE();
    if (!equals(this.mLog_1, tmp0_other_with_cast.mLog_1))
      return false;
    if (!equals(this.mInfo_1, tmp0_other_with_cast.mInfo_1))
      return false;
    if (!equals(this.mWarning_1, tmp0_other_with_cast.mWarning_1))
      return false;
    if (!equals(this.mError_1, tmp0_other_with_cast.mError_1))
      return false;
    if (!equals(this.mLogMemory_1, tmp0_other_with_cast.mLogMemory_1))
      return false;
    if (!equals(this.mGetColor_1, tmp0_other_with_cast.mGetColor_1))
      return false;
    if (!(this.prependLogType_1 == tmp0_other_with_cast.prependLogType_1))
      return false;
    return true;
  };
  function get_stackTraceRegex() {
    _init_properties_util_log_kt__p960k8();
    return stackTraceRegex;
  }
  var stackTraceRegex;
  function _set_mLoggerObject__sefbxz($this, _set____db54di) {
    $this.mLoggerObject_1 = _set____db54di;
  }
  function _get_mLoggerObject__rex7it($this) {
    return $this.mLoggerObject_1;
  }
  function _set_mSilent__2t57q5($this, _set____db54di) {
    $this.mSilent_1 = _set____db54di;
  }
  function _get_mSilent__sfdi35($this) {
    return $this.mSilent_1;
  }
  function _set_mLogLevel__bv5ni0($this, _set____db54di) {
    $this.mLogLevel_1 = _set____db54di;
  }
  function _get_mLogLevel__tv3y2k($this) {
    return $this.mLogLevel_1;
  }
  function _get_modes__e5yfrz($this) {
    return $this.modes_1;
  }
  function _set_mEnableNamespaceLoggingInMain__5w8jxv($this, _set____db54di) {
    $this.mEnableNamespaceLoggingInMain_1 = _set____db54di;
  }
  function _get_mEnableNamespaceLoggingInMain__fgyhkv($this) {
    return $this.mEnableNamespaceLoggingInMain_1;
  }
  function _get_mNamespaceLoggerListeners__tytxyo($this) {
    return $this.mNamespaceLoggerListeners_1;
  }
  function _get_mNamespacedLoggerListeners__p5qjzm($this) {
    return $this.mNamespacedLoggerListeners_1;
  }
  function Log() {
    Log_instance = this;
    this.LOG_NO_PRINT_PREFIX_1 = 'log.LOG_NO_PRINT_PREFIX';
    this.mLoggerObject_1 = DefaultLoggerObject_getInstance();
    this.mSilent_1 = false;
    this.mLogLevel_1 = LogLevel_LOG_2_getInstance();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.modes_1 = ArrayList_init_$Create$();
    this.mEnableNamespaceLoggingInMain_1 = false;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.mNamespaceLoggerListeners_1 = ArrayList_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.mNamespacedLoggerListeners_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Log).get_LOG_NO_PRINT_PREFIX_cgbu0u_k$ = function () {
    return this.LOG_NO_PRINT_PREFIX_1;
  };
  protoOf(Log).get_loggerObject_74grt4_k$ = function () {
    return this.mLoggerObject_1;
  };
  protoOf(Log).get_logLevel_179ppl_k$ = function () {
    return this.mLogLevel_1;
  };
  protoOf(Log).get_silent_jhk5em_k$ = function () {
    return this.mSilent_1;
  };
  protoOf(Log).get_enableNamespaceLoggingInMain_h2ig9a_k$ = function () {
    return this.mEnableNamespaceLoggingInMain_1;
  };
  protoOf(Log).setEnableNamespaceLoggingInMain_oqdacu_k$ = function (allow) {
    this.mEnableNamespaceLoggingInMain_1 = allow;
  };
  protoOf(Log).addNamespaceLoggerListener_4j1qoq_k$ = function (listener) {
    this.mNamespaceLoggerListeners_1.add_utx5q5_k$(listener);
  };
  protoOf(Log).removeNamespaceLoggerListener_c3b45l_k$ = function (listener) {
    this.mNamespaceLoggerListeners_1.remove_cedx0m_k$(listener);
  };
  protoOf(Log).addNamespacedLoggerListener_atzpw8_k$ = function (namespace, listener) {
    var tmp0_safe_receiver = this.mNamespacedLoggerListeners_1.get_wei43m_k$(namespace);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.add_utx5q5_k$(listener);
      return Unit_getInstance();
    }
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.mNamespacedLoggerListeners_1;
    var value = mutableListOf([listener]);
    this_0.put_4fpzoq_k$(namespace, value);
  };
  protoOf(Log).removeNamespacedLoggerListener_e7ijd1_k$ = function (namespace, listener) {
    var tmp0_safe_receiver = this.mNamespacedLoggerListeners_1.get_wei43m_k$(namespace);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.remove_cedx0m_k$(listener);
      var tmp;
      if (tmp0_safe_receiver.isEmpty_y1axqb_k$()) {
        Log_getInstance().mNamespacedLoggerListeners_1.remove_gppy8k_k$(namespace);
        tmp = Unit_getInstance();
      }
    }
  };
  protoOf(Log).removeNamespacedLoggerListenerFromAll_fiii8u_k$ = function (listener) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.mNamespacedLoggerListeners_1.get_keys_wop4xp_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.bedalton.log.Log.removeNamespacedLoggerListenerFromAll.<anonymous>' call
      Log_getInstance().removeNamespacedLoggerListener_e7ijd1_k$(element, listener);
    }
  };
  protoOf(Log).notifyNamespaceListeners_bquuii_k$ = function (namespace, message, color) {
    this.notifyNamespaceListeners_71imgk_k$(namespace, message(), color);
  };
  protoOf(Log).notifyNamespaceListeners_71imgk_k$ = function (namespace, message, color) {
    this.notifyNamespaceListeners_429r8i_k$(this.mNamespaceLoggerListeners_1, namespace, message, color);
    var tmp0_safe_receiver = this.mNamespacedLoggerListeners_1.get_wei43m_k$(namespace);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bedalton.log.Log.notifyNamespaceListeners.<anonymous>' call
      Log_getInstance().notifyNamespaceListeners_429r8i_k$(tmp0_safe_receiver, namespace, message, color);
    }
  };
  protoOf(Log).notifyNamespaceListeners$default_9dv2au_k$ = function (namespace, message, color, $super) {
    color = color === VOID ? null : color;
    var tmp;
    if ($super === VOID) {
      this.notifyNamespaceListeners_71imgk_k$(namespace, message, color);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.notifyNamespaceListeners_71imgk_k$.call(this, namespace, message, color);
    }
    return tmp;
  };
  protoOf(Log).notifyNamespaceListeners_429r8i_k$ = function (listeners, namespace, message, color) {
    var tmp0_iterator = listeners.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var notify = tmp0_iterator.next_20eer_k$();
      notify(namespace, message, color);
    }
  };
  protoOf(Log).setSilent_9h2jdu_k$ = function (silent) {
    this.mSilent_1 = silent;
  };
  protoOf(Log).setLogLevel_f3dnv2_k$ = function (logLevel) {
    this.mLogLevel_1 = logLevel;
  };
  protoOf(Log).i_n64cgr_k$ = function (message) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bedalton.log.Log.i' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_1_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0 = this.format_bqai8u_k$('LOG1', null, message());
      tmp.info(false, tmp$ret$0, null);
    }
  };
  protoOf(Log).i_s0nza7_k$ = function (message) {
    this.i_t47vbf_k$(false, null, message);
  };
  protoOf(Log).i_ie9c94_k$ = function (replace, message) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bedalton.log.Log.i' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_1_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0 = this.format_bqai8u_k$('LOG1', null, message());
      tmp.info(replace, tmp$ret$0, null);
    }
  };
  protoOf(Log).i_fcspwy_k$ = function (replace, message) {
    this.i_t47vbf_k$(replace, null, message);
  };
  protoOf(Log).i_q7zjr0_k$ = function (color, message) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bedalton.log.Log.i' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_1_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0 = this.format_bqai8u_k$('LOG1', null, message());
      tmp.info(false, tmp$ret$0, color);
    }
  };
  protoOf(Log).i_6y7l4u_k$ = function (color, message) {
    this.i_t47vbf_k$(false, color, message);
  };
  protoOf(Log).i_pb3pdb_k$ = function (replace, color, message) {
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_1_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0 = this.format_bqai8u_k$('LOG1', null, message());
      tmp.info(replace, tmp$ret$0, color);
    }
  };
  protoOf(Log).i_t47vbf_k$ = function (replace, color, message) {
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_1_getInstance().get_value_j01efc_k$() : false) {
      this.get_loggerObject_74grt4_k$().info(replace, this.format_bqai8u_k$('LOG1', null, message), color);
    }
  };
  protoOf(Log).i_uced4d_k$ = function (className, message) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bedalton.log.Log.i' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_1_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0 = this.format_bqai8u_k$('LOG1', className, message());
      tmp.info(false, tmp$ret$0, null);
    }
  };
  protoOf(Log).i_31l207_k$ = function (className, message) {
    this.i_i4oii5_k$(className, false, null, message);
  };
  protoOf(Log).i_ng8628_k$ = function (className, replace, message) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bedalton.log.Log.i' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_1_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0 = this.format_bqai8u_k$('LOG1', className, message());
      tmp.info(replace, tmp$ret$0, null);
    }
  };
  protoOf(Log).i_3h6j3e_k$ = function (className, replace, message) {
    this.i_i4oii5_k$(className, replace, null, message);
  };
  protoOf(Log).i_j61264_k$ = function (className, color, message) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bedalton.log.Log.i' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_1_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0 = this.format_bqai8u_k$('LOG1', className, message());
      tmp.info(false, tmp$ret$0, color);
    }
  };
  protoOf(Log).i_u82ssq_k$ = function (className, color, message) {
    this.i_i4oii5_k$(className, false, color, message);
  };
  protoOf(Log).i_upk5w9_k$ = function (className, replace, color, message) {
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_1_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0 = this.format_bqai8u_k$('LOG1', className, message());
      tmp.info(replace, tmp$ret$0, color);
    }
  };
  protoOf(Log).i_i4oii5_k$ = function (className, replace, color, message) {
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_1_getInstance().get_value_j01efc_k$() : false) {
      this.get_loggerObject_74grt4_k$().info(replace, this.format_bqai8u_k$('LOG1', className, message), color);
    }
  };
  protoOf(Log).i2_ljtzz9_k$ = function (message) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bedalton.log.Log.i2' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_2_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0 = this.format_bqai8u_k$('LOG2', null, message());
      tmp.info(false, tmp$ret$0, null);
    }
  };
  protoOf(Log).i2_u7hwpr_k$ = function (message) {
    this.i2_ah4vg5_k$(false, null, message);
  };
  protoOf(Log).i2_gu1jjs_k$ = function (replace, message) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bedalton.log.Log.i2' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_2_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0 = this.format_bqai8u_k$('LOG2', null, message());
      tmp.info(replace, tmp$ret$0, null);
    }
  };
  protoOf(Log).i2_d6pf0u_k$ = function (replace, message) {
    this.i2_ah4vg5_k$(replace, null, message);
  };
  protoOf(Log).i2_x49uf0_k$ = function (color, message) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bedalton.log.Log.i2' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_2_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0 = this.format_bqai8u_k$('LOG2', null, message());
      tmp.info(false, tmp$ret$0, color);
    }
  };
  protoOf(Log).i2_n4l6im_k$ = function (color, message) {
    this.i2_ah4vg5_k$(false, color, message);
  };
  protoOf(Log).i2_uk0imp_k$ = function (replace, color, message) {
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_2_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0 = this.format_bqai8u_k$('LOG2', null, message());
      tmp.info(replace, tmp$ret$0, color);
    }
  };
  protoOf(Log).i2_ah4vg5_k$ = function (replace, color, message) {
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_2_getInstance().get_value_j01efc_k$() : false) {
      this.get_loggerObject_74grt4_k$().info(replace, this.format_bqai8u_k$('LOG2', null, message), color);
    }
  };
  protoOf(Log).i2_jmppwt_k$ = function (className, message) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bedalton.log.Log.i2' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_2_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0 = this.format_bqai8u_k$('LOG2', className, message());
      tmp.info(false, tmp$ret$0, null);
    }
  };
  protoOf(Log).i2_am9azr_k$ = function (className, message) {
    this.i2_ud5u0d_k$(className, false, null, message);
  };
  protoOf(Log).i2_mf6o5s_k$ = function (className, replace, message) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bedalton.log.Log.i2' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_2_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0 = this.format_bqai8u_k$('LOG2', className, message());
      tmp.info(replace, tmp$ret$0, null);
    }
  };
  protoOf(Log).i2_xeu3l6_k$ = function (className, replace, message) {
    this.i2_ud5u0d_k$(className, replace, null, message);
  };
  protoOf(Log).i2_sbw2mc_k$ = function (className, color, message) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bedalton.log.Log.i2' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_2_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0 = this.format_bqai8u_k$('LOG2', className, message());
      tmp.info(false, tmp$ret$0, color);
    }
  };
  protoOf(Log).i2_8wmn1y_k$ = function (className, color, message) {
    this.i2_ud5u0d_k$(className, false, color, message);
  };
  protoOf(Log).i2_f05tif_k$ = function (className, replace, color, message) {
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_2_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0 = this.format_bqai8u_k$('LOG2', className, message());
      tmp.info(replace, tmp$ret$0, color);
    }
  };
  protoOf(Log).i2_ud5u0d_k$ = function (className, replace, color, message) {
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_2_getInstance().get_value_j01efc_k$() : false) {
      this.get_loggerObject_74grt4_k$().info(replace, this.format_bqai8u_k$('LOG2', className, message), color);
    }
  };
  protoOf(Log).t_37haf8_k$ = function (replace, color, message) {
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_TRACE_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bedalton.log.Log.t.<anonymous>' call
      var tmp$ret$0 = message() + '\n' + shiftLogStackFromCallStack(stackTraceToString(Exception_init_$Create$()));
      var tmp$ret$1 = this.format_bqai8u_k$('TRACE', null, tmp$ret$0);
      tmp.info(replace, tmp$ret$1, color);
    }
  };
  protoOf(Log).t_fftsfm_k$ = function (className, replace, color, message) {
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_TRACE_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bedalton.log.Log.t.<anonymous>' call
      var tmp$ret$0 = message() + '\n' + shiftLogStackFromCallStack(stackTraceToString(Exception_init_$Create$()));
      var tmp$ret$1 = this.format_bqai8u_k$('TRACE', className, tmp$ret$0);
      tmp.info(replace, tmp$ret$1, color);
    }
  };
  protoOf(Log).t_3e6mnk_k$ = function (message) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bedalton.log.Log.t' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_TRACE_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bedalton.log.Log.t.<anonymous>' call
      var tmp$ret$0 = message() + '\n' + shiftLogStackFromCallStack(stackTraceToString(Exception_init_$Create$()));
      var tmp$ret$1 = this.format_bqai8u_k$('TRACE', null, tmp$ret$0);
      tmp.info(false, tmp$ret$1, null);
    }
  };
  protoOf(Log).t_ld7hai_k$ = function (message) {
    this.t_zbnzyl_k$(null, message);
  };
  protoOf(Log).t_2s70av_k$ = function (color, message) {
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_TRACE_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bedalton.log.Log.t.<anonymous>' call
      var tmp$ret$0 = message() + '\n' + shiftLogStackFromCallStack(stackTraceToString(Exception_init_$Create$()));
      var tmp$ret$1 = this.format_bqai8u_k$('TRACE', null, tmp$ret$0);
      tmp.info(false, tmp$ret$1, color);
    }
  };
  protoOf(Log).t_zbnzyl_k$ = function (color, message) {
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_TRACE_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bedalton.log.Log.t.<anonymous>' call
      var tmp$ret$0 = message + '\n' + shiftLogStackFromCallStack(stackTraceToString(Exception_init_$Create$()));
      var tmp$ret$1 = this.format_bqai8u_k$('TRACE', null, tmp$ret$0);
      tmp.info(false, tmp$ret$1, color);
    }
  };
  protoOf(Log).t_9n42si_k$ = function (className, message) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bedalton.log.Log.t' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_TRACE_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bedalton.log.Log.t.<anonymous>' call
      var tmp$ret$0 = message() + '\n' + shiftLogStackFromCallStack(stackTraceToString(Exception_init_$Create$()));
      var tmp$ret$1 = this.format_bqai8u_k$('TRACE', className, tmp$ret$0);
      tmp.info(false, tmp$ret$1, null);
    }
  };
  protoOf(Log).t_diwasc_k$ = function (className, message) {
    this.t_3hwzj3_k$(className, null, message);
  };
  protoOf(Log).t_z3hwo7_k$ = function (className, color, message) {
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_TRACE_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bedalton.log.Log.t.<anonymous>' call
      var tmp$ret$0 = message() + '\n' + shiftLogStackFromCallStack(stackTraceToString(Exception_init_$Create$()));
      var tmp$ret$1 = this.format_bqai8u_k$('TRACE', className, tmp$ret$0);
      tmp.info(false, tmp$ret$1, color);
    }
  };
  protoOf(Log).t_3hwzj3_k$ = function (className, color, message) {
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_TRACE_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bedalton.log.Log.t.<anonymous>' call
      var tmp$ret$0 = message + '\n' + shiftLogStackFromCallStack(stackTraceToString(Exception_init_$Create$()));
      var tmp$ret$1 = this.format_bqai8u_k$('TRACE', className, tmp$ret$0);
      tmp.info(false, tmp$ret$1, color);
    }
  };
  protoOf(Log).t2_4o59nq_k$ = function (message) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bedalton.log.Log.t2' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_2_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bedalton.log.Log.t2.<anonymous>' call
      var tmp$ret$0 = message() + '\n' + shiftLogStackFromCallStack(stackTraceToString(Exception_init_$Create$()));
      var tmp$ret$1 = this.format_bqai8u_k$('TRACE', null, tmp$ret$0);
      tmp.info(false, tmp$ret$1, null);
    }
  };
  protoOf(Log).t2_xxhh2k_k$ = function (message) {
    this.t2_8tkzvb_k$(null, message);
  };
  protoOf(Log).t2_gttn9t_k$ = function (color, message) {
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_2_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bedalton.log.Log.t2.<anonymous>' call
      var tmp$ret$0 = message() + '\n' + shiftLogStackFromCallStack(stackTraceToString(Exception_init_$Create$()));
      var tmp$ret$1 = this.format_bqai8u_k$('TRACE', null, tmp$ret$0);
      tmp.info(false, tmp$ret$1, color);
    }
  };
  protoOf(Log).t2_8tkzvb_k$ = function (color, message) {
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_2_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bedalton.log.Log.t2.<anonymous>' call
      var tmp$ret$0 = message + '\n' + shiftLogStackFromCallStack(stackTraceToString(Exception_init_$Create$()));
      var tmp$ret$1 = this.format_bqai8u_k$('TRACE', null, tmp$ret$0);
      tmp.info(false, tmp$ret$1, color);
    }
  };
  protoOf(Log).t2_h4vbh4_k$ = function (className, message) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bedalton.log.Log.t2' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_2_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bedalton.log.Log.t2.<anonymous>' call
      var tmp$ret$0 = message() + '\n' + shiftLogStackFromCallStack(stackTraceToString(Exception_init_$Create$()));
      var tmp$ret$1 = this.format_bqai8u_k$('TRACE', className, tmp$ret$0);
      tmp.info(false, tmp$ret$1, null);
    }
  };
  protoOf(Log).t2_jmmeni_k$ = function (className, message) {
    this.t2_exptcl_k$(className, null, message);
  };
  protoOf(Log).t2_vq66vj_k$ = function (className, color, message) {
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_2_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bedalton.log.Log.t2.<anonymous>' call
      var tmp$ret$0 = message() + '\n' + shiftLogStackFromCallStack(stackTraceToString(Exception_init_$Create$()));
      var tmp$ret$1 = this.format_bqai8u_k$('TRACE', className, tmp$ret$0);
      tmp.info(false, tmp$ret$1, color);
    }
  };
  protoOf(Log).t2_exptcl_k$ = function (className, color, message) {
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_2_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bedalton.log.Log.t2.<anonymous>' call
      var tmp$ret$0 = message + '\n' + shiftLogStackFromCallStack(stackTraceToString(Exception_init_$Create$()));
      var tmp$ret$1 = this.format_bqai8u_k$('TRACE', className, tmp$ret$0);
      tmp.info(false, tmp$ret$1, color);
    }
  };
  protoOf(Log).w_8gg0xf_k$ = function (message) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bedalton.log.Log.w' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_WARN_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0 = this.format_bqai8u_k$('WARN', null, message());
      tmp.warning(tmp$ret$0, null);
    }
  };
  protoOf(Log).w_wgtwdp_k$ = function (message) {
    this.w_hpx968_k$(null, message);
  };
  protoOf(Log).w_mzbp6e_k$ = function (color, message) {
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_WARN_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0 = this.format_bqai8u_k$('WARN', null, message());
      tmp.warning(tmp$ret$0, color);
    }
  };
  protoOf(Log).w_hpx968_k$ = function (color, message) {
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_WARN_getInstance().get_value_j01efc_k$() : false) {
      this.get_loggerObject_74grt4_k$().warning(this.format_bqai8u_k$('WARN', null, message), color);
    }
  };
  protoOf(Log).w_agbgin_k$ = function (className, message) {
    // Inline function 'kotlin.contracts.contract' call
    this.w_mczkmf_k$(className, message());
  };
  protoOf(Log).w_mczkmf_k$ = function (className, message) {
    this.w_mczkmf_k$(className, message);
  };
  protoOf(Log).w_k2i4ga_k$ = function (className, color, message) {
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_WARN_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0 = this.format_bqai8u_k$('WARN', className, message());
      tmp.warning(tmp$ret$0, color);
    }
  };
  protoOf(Log).w_fkwi9o_k$ = function (className, color, message) {
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_WARN_getInstance().get_value_j01efc_k$() : false) {
      this.get_loggerObject_74grt4_k$().warning(this.format_bqai8u_k$('WARN', className, message), color);
    }
  };
  protoOf(Log).w2_7jsriv_k$ = function (message) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bedalton.log.Log.w2' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_2_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0 = this.format_bqai8u_k$('WARN', null, message());
      tmp.warning(tmp$ret$0, null);
    }
  };
  protoOf(Log).w2_q2das1_k$ = function (message) {
    this.w2_1u4lu4_k$(null, message);
  };
  protoOf(Log).w2_j1ouq_k$ = function (color, message) {
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_2_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0 = this.format_bqai8u_k$('WARN', null, message());
      tmp.warning(tmp$ret$0, color);
    }
  };
  protoOf(Log).w2_1u4lu4_k$ = function (color, message) {
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_2_getInstance().get_value_j01efc_k$() : false) {
      this.get_loggerObject_74grt4_k$().warning(this.format_bqai8u_k$('WARN', null, message), color);
    }
  };
  protoOf(Log).w2_sqvwzp_k$ = function (className, message) {
    // Inline function 'kotlin.contracts.contract' call
    this.w2_4eqf91_k$(className, message());
  };
  protoOf(Log).w2_4eqf91_k$ = function (className, message) {
    this.w2_4eqf91_k$(className, message);
  };
  protoOf(Log).w2_d73v6_k$ = function (className, color, message) {
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_2_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0 = this.format_bqai8u_k$('WARN', className, message());
      tmp.warning(tmp$ret$0, color);
    }
  };
  protoOf(Log).w2_ycqod4_k$ = function (className, color, message) {
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_2_getInstance().get_value_j01efc_k$() : false) {
      this.get_loggerObject_74grt4_k$().warning(this.format_bqai8u_k$('WARN', className, message), color);
    }
  };
  protoOf(Log).e_8ds5ep_k$ = function (message) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bedalton.log.Log.e' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bedalton.log.Log.e' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_ERROR_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0 = this.format_bqai8u_k$('ERROR', null, message());
      tmp.error(tmp$ret$0, null);
    }
  };
  protoOf(Log).e_y4wm5h_k$ = function (message) {
    this.e_gf61q6_k$(null, message);
  };
  protoOf(Log).e_agfk94_k$ = function (color, message) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bedalton.log.Log.e' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_ERROR_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0 = this.format_bqai8u_k$('ERROR', null, message());
      tmp.error(tmp$ret$0, color);
    }
  };
  protoOf(Log).e_gf61q6_k$ = function (color, message) {
    this.e_9ubkg9_k$(null, color, message);
  };
  protoOf(Log).e_5l365t_k$ = function (className, message) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bedalton.log.Log.e' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_ERROR_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0 = this.format_bqai8u_k$('ERROR', className, message());
      tmp.error(tmp$ret$0, null);
    }
  };
  protoOf(Log).e_k50i39_k$ = function (className, message) {
    this.e_9ubkg9_k$(className, null, message);
  };
  protoOf(Log).e_g8r86p_k$ = function (className, color, message) {
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_ERROR_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0 = this.format_bqai8u_k$('ERROR', className, message());
      tmp.error(tmp$ret$0, color);
    }
  };
  protoOf(Log).e_9ubkg9_k$ = function (className, color, message) {
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_ERROR_getInstance().get_value_j01efc_k$() : false) {
      this.get_loggerObject_74grt4_k$().error(this.format_bqai8u_k$('ERROR', className, message), color);
    }
  };
  protoOf(Log).e2_598meh_k$ = function (message) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bedalton.log.Log.e2' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_2_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0 = this.format_bqai8u_k$('WARN', null, message());
      tmp.warning(tmp$ret$0, null);
    }
  };
  protoOf(Log).e2_l8sxk3_k$ = function (message) {
    this.e2_8wz1kq_k$(null, message);
  };
  protoOf(Log).e2_wl29xc_k$ = function (color, message) {
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_2_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0 = this.format_bqai8u_k$('WARN', null, message());
      tmp.warning(tmp$ret$0, color);
    }
  };
  protoOf(Log).e2_8wz1kq_k$ = function (color, message) {
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_2_getInstance().get_value_j01efc_k$() : false) {
      this.get_loggerObject_74grt4_k$().warning(this.format_bqai8u_k$('WARN', null, message), color);
    }
  };
  protoOf(Log).e2_xgbbvt_k$ = function (className, message) {
    // Inline function 'kotlin.contracts.contract' call
    this.e2_28tjs3_k$(className, message());
  };
  protoOf(Log).e2_28tjs3_k$ = function (className, message) {
    this.e2_28tjs3_k$(className, message);
  };
  protoOf(Log).e2_okak00_k$ = function (className, color, message) {
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_2_getInstance().get_value_j01efc_k$() : false) {
      var tmp = this.get_loggerObject_74grt4_k$();
      // Inline function 'com.bedalton.log.Log.format' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0 = this.format_bqai8u_k$('WARN', className, message());
      tmp.warning(tmp$ret$0, color);
    }
  };
  protoOf(Log).e2_b4afqy_k$ = function (className, color, message) {
    if (!this.get_silent_jhk5em_k$() ? this.get_logLevel_179ppl_k$().get_value_j01efc_k$() >= LogLevel_LOG_2_getInstance().get_value_j01efc_k$() : false) {
      this.get_loggerObject_74grt4_k$().warning(this.format_bqai8u_k$('WARN', className, message), color);
    }
  };
  protoOf(Log).format_uxyx0o_k$ = function (kind, className, message) {
    // Inline function 'kotlin.contracts.contract' call
    return this.format_bqai8u_k$(kind, className, message());
  };
  protoOf(Log).format_bqai8u_k$ = function (kind, className, message) {
    var tmp0_elvis_lhs = this.get_loggerObject_74grt4_k$().prependLogType;
    var prependLog = tmp0_elvis_lhs == null ? DefaultLoggerObject_getInstance().prependLogType : tmp0_elvis_lhs;
    var tmp;
    if (prependLog ? !this.hasMode_frur5v_k$('log.LOG_NO_PRINT_PREFIX') : false) {
      tmp = '**' + kind + '** ';
    } else {
      tmp = '';
    }
    var prefix = tmp;
    var tmp_0;
    // Inline function 'kotlin.text.isNullOrBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(className == null ? true : isBlank(className))) {
      tmp_0 = '' + className + '::';
    } else {
      tmp_0 = '';
    }
    return prefix + tmp_0 + message;
  };
  protoOf(Log).logMemory_qj78ut_k$ = function () {
    this.get_loggerObject_74grt4_k$().logMemory();
  };
  protoOf(Log).hasMode_frur5v_k$ = function (mode) {
    return this.modes_1.contains_aljjnj_k$(mode);
  };
  protoOf(Log).setMode_nqe7y8_k$ = function (mode, active) {
    var hasMode = this.modes_1.contains_aljjnj_k$(mode);
    if (active === hasMode) {
      return Unit_getInstance();
    }
    if (active) {
      this.modes_1.add_utx5q5_k$(mode);
    } else {
      this.modes_1.remove_cedx0m_k$(mode);
    }
  };
  protoOf(Log).setLogger_69y8by_k$ = function (logger) {
    this.mLoggerObject_1 = logger;
  };
  protoOf(Log).useDefaultLogger_ctdd7e_k$ = function () {
    this.mLoggerObject_1 = DefaultLoggerObject_getInstance();
  };
  protoOf(Log).namespaceLogComponents_k682bp_k$ = function (statement) {
    var tmp0_safe_receiver = get_namespacePrefixRegex().matchEntire_6100vb_k$(statement);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_groupValues_rkv314_k$();
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bedalton.log.Log.namespaceLogComponents.<anonymous>' call
      tmp = new Pair(tmp1_safe_receiver.get_c1px32_k$(1), tmp1_safe_receiver.get_c1px32_k$(2));
    }
    var tmp2_elvis_lhs = tmp;
    return tmp2_elvis_lhs == null ? new Pair(null, statement) : tmp2_elvis_lhs;
  };
  var Log_instance;
  function Log_getInstance() {
    if (Log_instance == null)
      new Log();
    return Log_instance;
  }
  function shiftLogStackFromCallStack(stack) {
    _init_properties_util_log_kt__p960k8();
    // Inline function 'kotlin.text.replace' call
    return get_stackTraceRegex().replace_1ix0wf_k$(stack, '');
  }
  var properties_initialized_util_log_kt_mpf7gm;
  function _init_properties_util_log_kt__p960k8() {
    if (!properties_initialized_util_log_kt_mpf7gm) {
      properties_initialized_util_log_kt_mpf7gm = true;
      // Inline function 'kotlin.text.toRegex' call
      var this_0 = '^\\s*java\\.lang\\.Exception(?:(\\s*at com\\.bedalton\\.log\\.Log[.$][^\\n]*\\n)*)';
      var options = setOf([RegexOption_IGNORE_CASE_getInstance(), RegexOption_MULTILINE_getInstance()]);
      stackTraceRegex = new Regex(this_0, options);
    }
  }
  function get_consoleColorEscapeSequence() {
    return consoleColorEscapeSequence;
  }
  var consoleColorEscapeSequence;
  function set_lastLineLength(_set____db54di) {
    lastLineLength = _set____db54di;
  }
  function get_lastLineLength() {
    return lastLineLength;
  }
  var lastLineLength;
  function wrap($this, color, message) {
    var colorPrefix = $this.getColorPrefix(color);
    var tmp;
    if (!(colorPrefix == null)) {
      tmp = getNamespacePrefix(message) + colorPrefix + stripNamespacePrefix(message) + DefaultConsoleColors_getInstance().get_RESET_ifqdqe_k$();
    } else {
      tmp = message;
    }
    return tmp;
  }
  function log$log(receiver, p0) {
    receiver.log(p0);
  }
  function info$info(receiver, p0) {
    receiver.info(p0);
  }
  function DefaultLoggerObject$log$log$ref($boundThis) {
    return function (p0) {
      log$log($boundThis, p0);
      return Unit_getInstance();
    };
  }
  function DefaultLoggerObject$info$info$ref($boundThis) {
    return function (p0) {
      info$info($boundThis, p0);
      return Unit_getInstance();
    };
  }
  function DefaultLoggerObject() {
    DefaultLoggerObject_instance = this;
    this.prependLogType_1 = false;
  }
  protoOf(DefaultLoggerObject).get_prependLogType_dolzgn_k$ = function () {
    return this.prependLogType_1;
  };
  protoOf(DefaultLoggerObject).log = function (replace, message, color) {
    var finalMessage = wrap(this, color, message);
    if (replace) {
      logReplace(finalMessage, DefaultLoggerObject$log$log$ref(console));
    } else {
      console.log(finalMessage);
    }
    lastLineLength = finalMessage.length;
  };
  protoOf(DefaultLoggerObject).info = function (replace, message, color) {
    var finalMessage = wrap(this, color, message);
    if (replace) {
      logReplace(finalMessage, DefaultLoggerObject$info$info$ref(console));
    } else {
      console.info(finalMessage);
    }
    lastLineLength = finalMessage.length;
  };
  protoOf(DefaultLoggerObject).warning = function (message, color) {
    var finalMessage = wrap(this, color, message);
    lastLineLength = finalMessage.length;
    console.warn(finalMessage);
  };
  protoOf(DefaultLoggerObject).logMemory = function () {
    console.log('Cannot log memory');
    lastLineLength = 17;
    var process = nodeRequireSafe('process', []);
    var tmp;
    if (process != null) {
      var tmp_0 = process.hasOwnProperty('memoryUsage');
      tmp = (!(tmp_0 == null) ? typeof tmp_0 === 'boolean' : false) ? tmp_0 : THROW_CCE();
    } else {
      tmp = false;
    }
    if (tmp) {
      console.log(process.memoryUsage());
    }
  };
  protoOf(DefaultLoggerObject).error = function (message, color) {
    var finalMessage = wrap(this, color, message);
    lastLineLength = finalMessage.length;
    console.error(finalMessage);
  };
  protoOf(DefaultLoggerObject).getColorPrefix = function (color) {
    return getLogColorPrefix(color);
  };
  var DefaultLoggerObject_instance;
  function DefaultLoggerObject_getInstance() {
    if (DefaultLoggerObject_instance == null)
      new DefaultLoggerObject();
    return DefaultLoggerObject_instance;
  }
  function logReplace(message, fallback) {
    var tmp = typeof window !== 'undefined';
    if ((!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE()) {
      fallback(message);
      return Unit_getInstance();
    }
    var tmp0_safe_receiver = nodeRequireSafe('process', ['stdout']);
    var stdout = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.stdout;
    var tmp_0;
    if (stdout == null) {
      tmp_0 = true;
    } else {
      var tmp1_safe_receiver = stdout.constructor;
      tmp_0 = (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.name) != 'WriteStream';
    }
    if (tmp_0) {
      fallback(message);
      return Unit_getInstance();
    }
    var readline = nodeRequireSafe('readline', ['clearLine', 'cursorTo']);
    if (readline == null) {
      fallback(message);
      return Unit_getInstance();
    }
    readline.clearLine(stdout);
    readline.cursorTo(stdout, 0);
    var underflow = message.length - lastLineLength | 0;
    var tmp_1;
    if (underflow > 0) {
      tmp_1 = repeat(' ', underflow);
    } else {
      tmp_1 = '';
    }
    var tail = tmp_1;
    var messagePadded = message + tail;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.math.min' call
    var tmp_2 = stdout.columns;
    var a = numberToInt(isNumber(tmp_2) ? tmp_2 : THROW_CCE());
    var b = messagePadded.length;
    var endIndex = Math.min(a, b);
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = messagePadded.substring(0, endIndex);
    stdout.write(tmp$ret$2, 'utf8');
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
        // Inline function 'com.bedalton.log.missingProperties.<anonymous>' call
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
          // Inline function 'com.bedalton.log.missingProperties.<anonymous>' call
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
  function setLogger(logger) {
    Log_getInstance().setLogger_69y8by_k$(logger);
  }
  function setSingleFunctionLogger(logger) {
    setLogger(createSingleFunctionLogger(logger));
  }
  function createSingleFunctionLogger(logger) {
    return new createSingleFunctionLogger$1(logger);
  }
  function createSingleFunctionLogger$1($logger) {
    this.$logger_1 = $logger;
  }
  protoOf(createSingleFunctionLogger$1).log = function (replace, message, color) {
    this.$logger_1('log', message);
  };
  protoOf(createSingleFunctionLogger$1).info = function (replace, message, color) {
    this.$logger_1('info', message);
  };
  protoOf(createSingleFunctionLogger$1).warning = function (message, color) {
    this.$logger_1('warning', message);
  };
  protoOf(createSingleFunctionLogger$1).error = function (message, color) {
    this.$logger_1('error', message);
  };
  protoOf(createSingleFunctionLogger$1).getColorPrefix = function (color) {
    return null;
  };
  protoOf(createSingleFunctionLogger$1).logMemory = function () {
  };
  protoOf(createSingleFunctionLogger$1).get_prependLogType_dolzgn_k$ = function () {
    return null;
  };
  //region block: post-declaration
  defineProp(protoOf(CallbackLogger), 'prependLogType', function () {
    return this.get_prependLogType_dolzgn_k$();
  }, function (value) {
    this.set_prependLogType_insnt9_k$(value);
  });
  defineProp(protoOf(DefaultLoggerObject), 'prependLogType', function () {
    return this.get_prependLogType_dolzgn_k$();
  });
  defineProp(protoOf(createSingleFunctionLogger$1), 'prependLogType', function () {
    return this.get_prependLogType_dolzgn_k$();
  });
  //endregion
  //region block: init
  LOG_VERBOSE = 'verbose';
  LOG_DEBUG = 'DEBUG';
  consoleColorEscapeSequence = '\x1B';
  lastLineLength = 0;
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $com = _.com || (_.com = {});
    var $com$bedalton = $com.bedalton || ($com.bedalton = {});
    var $com$bedalton$log = $com$bedalton.log || ($com$bedalton.log = {});
    $com$bedalton$log.LoggerColor = LoggerColor;
    defineProp($com$bedalton$log.LoggerColor, 'BLACK', BLACK_getInstance);
    defineProp($com$bedalton$log.LoggerColor, 'RED', RED_getInstance);
    defineProp($com$bedalton$log.LoggerColor, 'GREEN', GREEN_getInstance);
    defineProp($com$bedalton$log.LoggerColor, 'YELLOW', YELLOW_getInstance);
    defineProp($com$bedalton$log.LoggerColor, 'BLUE', BLUE_getInstance);
    defineProp($com$bedalton$log.LoggerColor, 'MAGENTA', MAGENTA_getInstance);
    defineProp($com$bedalton$log.LoggerColor, 'CYAN', CYAN_getInstance);
    defineProp($com$bedalton$log.LoggerColor, 'WHITE', WHITE_getInstance);
    var $com = _.com || (_.com = {});
    var $com$bedalton = $com.bedalton || ($com.bedalton = {});
    var $com$bedalton$log = $com$bedalton.log || ($com$bedalton.log = {});
    $com$bedalton$log.LoggerBuilder = LoggerBuilder;
    var $com = _.com || (_.com = {});
    var $com$bedalton = $com.bedalton || ($com.bedalton = {});
    var $com$bedalton$log = $com$bedalton.log || ($com$bedalton.log = {});
    $com$bedalton$log.setLogger = setLogger;
    $com$bedalton$log.setSingleFunctionLogger = setSingleFunctionLogger;
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_LOG_DEBUG;
  _.$_$.b = get_LOG_VERBOSE;
  _.$_$.c = createSingleFunctionLogger;
  _.$_$.d = eIf;
  _.$_$.e = iIf;
  _.$_$.f = wIf;
  _.$_$.g = Log_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=common-log-js-ir.js.map
