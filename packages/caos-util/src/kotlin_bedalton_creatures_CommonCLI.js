(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'fs', 'process', 'readline', './kotlin_bedalton_creatures_CommonCore.js', './kotlin_kotlin.js', './kotlin_org_jetbrains_kotlinx_kotlinx_cli.js', './kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('fs'), require('process'), require('readline'), require('./kotlin_bedalton_creatures_CommonCore.js'), require('./kotlin_kotlin.js'), require('./kotlin_org_jetbrains_kotlinx_kotlinx_cli.js'), require('./kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.js'));
  else {
    if (typeof fs === 'undefined') {
      throw new Error("Error loading module 'kotlin_bedalton_creatures_CommonCLI'. Its dependency 'fs' was not found. Please, check whether 'fs' is loaded prior to 'kotlin_bedalton_creatures_CommonCLI'.");
    }
    if (typeof process === 'undefined') {
      throw new Error("Error loading module 'kotlin_bedalton_creatures_CommonCLI'. Its dependency 'process' was not found. Please, check whether 'process' is loaded prior to 'kotlin_bedalton_creatures_CommonCLI'.");
    }
    if (typeof readline === 'undefined') {
      throw new Error("Error loading module 'kotlin_bedalton_creatures_CommonCLI'. Its dependency 'readline' was not found. Please, check whether 'readline' is loaded prior to 'kotlin_bedalton_creatures_CommonCLI'.");
    }
    if (typeof kotlin_bedalton_creatures_CommonCore === 'undefined') {
      throw new Error("Error loading module 'kotlin_bedalton_creatures_CommonCLI'. Its dependency 'kotlin_bedalton_creatures_CommonCore' was not found. Please, check whether 'kotlin_bedalton_creatures_CommonCore' is loaded prior to 'kotlin_bedalton_creatures_CommonCLI'.");
    }
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_bedalton_creatures_CommonCLI'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_bedalton_creatures_CommonCLI'.");
    }
    if (typeof kotlin_org_jetbrains_kotlinx_kotlinx_cli === 'undefined') {
      throw new Error("Error loading module 'kotlin_bedalton_creatures_CommonCLI'. Its dependency 'kotlin_org_jetbrains_kotlinx_kotlinx_cli' was not found. Please, check whether 'kotlin_org_jetbrains_kotlinx_kotlinx_cli' is loaded prior to 'kotlin_bedalton_creatures_CommonCLI'.");
    }
    if (typeof kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core === 'undefined') {
      throw new Error("Error loading module 'kotlin_bedalton_creatures_CommonCLI'. Its dependency 'kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core' was not found. Please, check whether 'kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core' is loaded prior to 'kotlin_bedalton_creatures_CommonCLI'.");
    }
    root.kotlin_bedalton_creatures_CommonCLI = factory(typeof kotlin_bedalton_creatures_CommonCLI === 'undefined' ? {} : kotlin_bedalton_creatures_CommonCLI, fs, process, readline, kotlin_bedalton_creatures_CommonCore, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_cli, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core);
  }
}(this, function (_, $module$fs, process, $module$readline, kotlin_bedalton_creatures_CommonCore, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_cli, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  //region block: imports
  var existsSync = $module$fs.existsSync;
  var createInterface = $module$readline.createInterface;
  var Companion_getInstance = kotlin_bedalton_creatures_CommonCore.$crossModule$.Companion_getInstance;
  var Exception_init_$Create$ = kotlin_kotlin.$crossModule$.Exception_init_$Create$_1;
  var toList = kotlin_kotlin.$crossModule$.toList;
  var Choice = kotlin_org_jetbrains_kotlinx_kotlinx_cli.$crossModule$.Choice;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var FileNameUtil_getInstance = kotlin_bedalton_creatures_CommonCore.$crossModule$.FileNameUtil_getInstance;
  var ensureNotNull = kotlin_kotlin.$crossModule$.ensureNotNull;
  var CoroutineImpl = kotlin_kotlin.$crossModule$.CoroutineImpl;
  var THROW_CCE = kotlin_kotlin.$crossModule$.THROW_CCE;
  var _get_COROUTINE_SUSPENDED__2870145053 = kotlin_kotlin.$crossModule$._get_COROUTINE_SUSPENDED__2870145053;
  var charSequenceLength = kotlin_kotlin.$crossModule$.charSequenceLength;
  var charSequenceGet = kotlin_kotlin.$crossModule$.charSequenceGet;
  var Log_getInstance = kotlin_bedalton_creatures_CommonCore.$crossModule$.Log_getInstance;
  var DefaultLoggerObject_getInstance = kotlin_bedalton_creatures_CommonCore.$crossModule$.DefaultLoggerObject_getInstance;
  var isBlank = kotlin_kotlin.$crossModule$.isBlank;
  var LogLevel_ERROR_getInstance = kotlin_bedalton_creatures_CommonCore.$crossModule$.LogLevel_ERROR_getInstance;
  var Char = kotlin_kotlin.$crossModule$.Char;
  var _Char___init__impl__380027157 = kotlin_kotlin.$crossModule$._Char___init__impl__380027157;
  var equals = kotlin_kotlin.$crossModule$.equals;
  var LogLevel_LOG_1_getInstance = kotlin_bedalton_creatures_CommonCore.$crossModule$.LogLevel_LOG_1_getInstance;
  var KProperty0 = kotlin_kotlin.$crossModule$.KProperty0;
  var getPropertyCallableRef = kotlin_kotlin.$crossModule$.getPropertyCallableRef;
  var lazy = kotlin_kotlin.$crossModule$.lazy;
  var SuspendFunction1 = kotlin_kotlin.$crossModule$.SuspendFunction1;
  var captureStack = kotlin_kotlin.$crossModule$.captureStack;
  var Exception = kotlin_kotlin.$crossModule$.Exception;
  var Exception_init_$Init$ = kotlin_kotlin.$crossModule$.Exception_init_$Init$;
  var Regex_init_$Create$ = kotlin_kotlin.$crossModule$.Regex_init_$Create$;
  var Comparator = kotlin_kotlin.$crossModule$.Comparator;
  var ensureNotEndsWith = kotlin_bedalton_creatures_CommonCore.$crossModule$.ensureNotEndsWith;
  var compareTo = kotlin_kotlin.$crossModule$.compareTo;
  var Pair = kotlin_kotlin.$crossModule$.Pair;
  var toInt = kotlin_kotlin.$crossModule$.toInt;
  var startsWith$default = kotlin_kotlin.$crossModule$.startsWith$default_1;
  var superUnescape = kotlin_bedalton_creatures_CommonCore.$crossModule$.superUnescape;
  var RegexOption_IGNORE_CASE_getInstance = kotlin_kotlin.$crossModule$.RegexOption_IGNORE_CASE_getInstance;
  var Regex_init_$Create$_0 = kotlin_kotlin.$crossModule$.Regex_init_$Create$_1;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$crossModule$.await;
  var stackTraceToString = kotlin_kotlin.$crossModule$.stackTraceToString;
  var nullIfEmpty = kotlin_bedalton_creatures_CommonCore.$crossModule$.nullIfEmpty;
  var isObject = kotlin_kotlin.$crossModule$.isObject;
  //endregion
  'use strict';
  //region block: pre-declaration
  createDefaultShouldOverwriteCallback$slambda.prototype = Object.create(CoroutineImpl.prototype);
  createDefaultShouldOverwriteCallback$slambda.prototype.constructor = createDefaultShouldOverwriteCallback$slambda;
  $promptOverwriteCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $promptOverwriteCOROUTINE$0.prototype.constructor = $promptOverwriteCOROUTINE$0;
  AppRequestTermination.prototype = Object.create(Exception.prototype);
  AppRequestTermination.prototype.constructor = AppRequestTermination;
  AppRequestTerminationOK.prototype = Object.create(AppRequestTermination.prototype);
  AppRequestTerminationOK.prototype.constructor = AppRequestTerminationOK;
  AppRequestTerminationError.prototype = Object.create(AppRequestTermination.prototype);
  AppRequestTerminationError.prototype.constructor = AppRequestTerminationError;
  //endregion
  function _get_GameArgType__353935123() {
    init_properties_cli_args_kt_2418271983();
    return GameArgType;
  }
  var GameArgType;
  function GameArgType$lambda() {
    return function (arg) {
      var tmp0_elvis_lhs = Companion_getInstance().fromString_2a1yvu_k$(arg);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        throw Exception_init_$Create$('Invalid game variant argument. Expected [C1|C2|CV|C3|DS]');
      } else {
        tmp = tmp0_elvis_lhs;
      }
      return tmp;
    };
  }
  function GameArgType$lambda_0() {
    return function (type) {
      return type._get_code__794418686_d4z5dq_k$();
    };
  }
  var properties_initialized_cli_args_kt_2728150547;
  function init_properties_cli_args_kt_2418271983() {
    if (!properties_initialized_cli_args_kt_2728150547) {
      properties_initialized_cli_args_kt_2728150547 = true;
      var tmp = toList(Companion_getInstance()._get_values__2516944425_tel787_k$());
      var tmp_0 = GameArgType$lambda();
      GameArgType = new Choice(tmp, tmp_0, GameArgType$lambda_0());
    }
  }
  function _set_shouldOverwriteOverride__1667195649(_set____804775014) {
    init_properties_cli_should_overwrite_kt_1226417115();
    shouldOverwriteOverride = _set____804775014;
  }
  function _get_shouldOverwriteOverride__429066893() {
    init_properties_cli_should_overwrite_kt_1226417115();
    return shouldOverwriteOverride;
  }
  var shouldOverwriteOverride;
  function _get_defaultOverwrite__1820436929() {
    init_properties_cli_should_overwrite_kt_1226417115();
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = defaultOverwrite$factory();
      tmp$ret$0 = defaultOverwrite$delegate._get_value__3683422336_a43j40_k$();
      break $l$block;
    }
    return tmp$ret$0;
  }
  var defaultOverwrite$delegate;
  function createDefaultShouldOverwriteCallback() {
    init_properties_cli_should_overwrite_kt_1226417115();
    return createDefaultShouldOverwriteCallback$slambda_0(null);
  }
  function shouldWrite(outputFilePath, $cont) {
    if (!fileExists(outputFilePath)) {
      return true;
    }
    var tmp = ensureNotNull(FileNameUtil_getInstance().getFileNameWithoutExtension_5esv6b_k$(outputFilePath));
    var tmp_0 = FileNameUtil_getInstance();
    var promptString = 'Overwrite file ' + tmp + ' in ' + tmp_0.getSelfOrParentDirectory$default_dtbn2a_k$(outputFilePath, false, 2, null) + '?\r\n\t' + '[y]es (default), [n]o: ';
    return promptOverwrite$default(promptString, false, $cont, 2, null);
  }
  function promptOverwrite(promptString, appendValidResponses, $cont) {
    var tmp = new $promptOverwriteCOROUTINE$0(promptString, appendValidResponses, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function promptOverwrite$default(promptString, appendValidResponses, $cont, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      appendValidResponses = true;
    return promptOverwrite(promptString, appendValidResponses, $cont);
  }
  function defaultOverwrite$delegate$lambda() {
    return function () {
      return createDefaultShouldOverwriteCallback();
    };
  }
  function createDefaultShouldOverwriteCallback$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  createDefaultShouldOverwriteCallback$slambda.prototype.invoke_uqiv1o_k$ = function (filePath, $cont) {
    var tmp = this.create_czfd3j_k$(filePath, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  createDefaultShouldOverwriteCallback$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_uqiv1o_k$((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $cont);
  };
  createDefaultShouldOverwriteCallback$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(2);
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = shouldWrite(this.filePath_1, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this._get_exception__1672948706_ro13he_k$();
        }
      } catch ($p) {
        if (this._get_exceptionState__1662596297_rhv7ih_k$() === 2) {
          throw $p;
        } else {
          this._set_state__1256591060_i39zdo_k$(this._get_exceptionState__1662596297_rhv7ih_k$());
          this._set_exception__4196179798_3fu58l_k$($p);
        }
      }
     while (true);
  };
  createDefaultShouldOverwriteCallback$slambda.prototype.create_czfd3j_k$ = function (filePath, completion) {
    var i = new createDefaultShouldOverwriteCallback$slambda(completion);
    i.filePath_1 = filePath;
    return i;
  };
  createDefaultShouldOverwriteCallback$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_czfd3j_k$((!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE(), completion);
  };
  createDefaultShouldOverwriteCallback$slambda.$metadata$ = {
    simpleName: 'createDefaultShouldOverwriteCallback$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function createDefaultShouldOverwriteCallback$slambda_0(resultContinuation) {
    var i = new createDefaultShouldOverwriteCallback$slambda(resultContinuation);
    var l = function (filePath, $cont) {
      return i.invoke_uqiv1o_k$(filePath, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $promptOverwriteCOROUTINE$0(promptString, appendValidResponses, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.promptString_1 = promptString;
    this.appendValidResponses_1 = appendValidResponses;
  }
  $promptOverwriteCOROUTINE$0.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(4);
            var tmp_0 = this;
            var tmp_1;
            if (this.appendValidResponses_1) {
              tmp_1 = this.promptString_1 + '?\r\n\t[y]es (default), [n]o: ';
            } else {
              tmp_1 = this.promptString_1;
            }

            tmp_0.prompt0__1 = tmp_1;
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = readLine$default(this.prompt0__1, null, this, 2, null);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.response1__1 = suspendResult;
            var tmp0_safe_receiver = this.response1__1;
            var tmp_2;
            if (tmp0_safe_receiver == null) {
              tmp_2 = null;
            } else {
              tmp_2 = charSequenceLength(tmp0_safe_receiver) === 0;
            }

            if (!(tmp_2 === false)) {
              return true;
            } else {
            }

            var tmp_3 = this;
            tmp_3.tmp1_subject2__1 = charSequenceGet(this.response1__1.toUpperCase(), 0);
            if (equals(new Char(this.tmp1_subject2__1), new Char(_Char___init__impl__380027157(89)))) {
              this.WHEN_RESULT3__1 = true;
              this._set_state__1256591060_i39zdo_k$(3);
              continue $sm;
            } else {
              if (equals(new Char(this.tmp1_subject2__1), new Char(_Char___init__impl__380027157(78)))) {
                this.WHEN_RESULT3__1 = false;
                this._set_state__1256591060_i39zdo_k$(3);
                continue $sm;
              } else {
                var tmp_4 = this;
                tmp_4.tmp0_e_04__1 = Log_getInstance();
                if (this.tmp0_e_04__1._get_logLevel__3219972395_hs0vdh_k$()._get_value__3683422336_a43j40_k$() >= LogLevel_ERROR_getInstance()._get_value__3683422336_a43j40_k$()) {
                  var tmp_5 = this.tmp0_e_04__1._get_loggerObject__3639506492_au8ssk_k$();
                  var tmp_6;
                  var tmp0_elvis_lhs_1_1 = this.tmp0_e_04__1._get_loggerObject__3639506492_au8ssk_k$().prependLogType;
                  if (tmp0_elvis_lhs_1_1 == null ? DefaultLoggerObject_getInstance()._get_prependLogType__1117758171_ihhfq3_k$() : tmp0_elvis_lhs_1_1) {
                    tmp_6 = '**ERROR** ';
                  } else {
                    {
                      tmp_6 = '';
                    }
                  }
                  var tmp_7 = tmp_6;
                  var tmp_8;
                  if (!(null == null ? true : isBlank(null))) {
                    tmp_8 = 'null::';
                  } else {
                    {
                      tmp_8 = '';
                    }
                  }
                  var tmp_9 = tmp_8;
                  tmp_5.error(tmp_7 + tmp_9 + 'Invalid input for overwrite file...', null);
                }
                this._set_state__1256591060_i39zdo_k$(2);
                suspendResult = promptOverwrite(this.promptString_1, this.appendValidResponses_1, this);
                if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
                  return suspendResult;
                }
                continue $sm;
              }
              Unit_getInstance();
            }

            break;
          case 2:
            this.WHEN_RESULT3__1 = suspendResult;
            this._set_state__1256591060_i39zdo_k$(3);
            continue $sm;
          case 3:
            var tmp1_apply_0 = this.WHEN_RESULT3__1;
            if (tmp1_apply_0) {
              var tmp0_i_0_2 = Log_getInstance();
              if (tmp0_i_0_2._get_logLevel__3219972395_hs0vdh_k$()._get_value__3683422336_a43j40_k$() >= LogLevel_LOG_1_getInstance()._get_value__3683422336_a43j40_k$()) {
                var tmp_10 = tmp0_i_0_2._get_loggerObject__3639506492_au8ssk_k$();
                var tmp_11;
                var tmp0_elvis_lhs_1_1_3 = tmp0_i_0_2._get_loggerObject__3639506492_au8ssk_k$().prependLogType;
                if (tmp0_elvis_lhs_1_1_3 == null ? DefaultLoggerObject_getInstance()._get_prependLogType__1117758171_ihhfq3_k$() : tmp0_elvis_lhs_1_1_3) {
                  tmp_11 = '**LOG1** ';
                } else {
                  {
                    tmp_11 = '';
                  }
                }
                var tmp_12 = tmp_11;
                var tmp_13;
                if (!(null == null ? true : isBlank(null))) {
                  tmp_13 = 'null::';
                } else {
                  {
                    tmp_13 = '';
                  }
                }
                var tmp_14 = tmp_13;
                tmp_10.info(false, tmp_12 + tmp_14 + 'Overwriting file...', null);
              }
            } else {
              var tmp1_i_0_4 = Log_getInstance();
              if (tmp1_i_0_4._get_logLevel__3219972395_hs0vdh_k$()._get_value__3683422336_a43j40_k$() >= LogLevel_LOG_1_getInstance()._get_value__3683422336_a43j40_k$()) {
                var tmp_15 = tmp1_i_0_4._get_loggerObject__3639506492_au8ssk_k$();
                var tmp_16;
                var tmp0_elvis_lhs_1_1_5 = tmp1_i_0_4._get_loggerObject__3639506492_au8ssk_k$().prependLogType;
                if (tmp0_elvis_lhs_1_1_5 == null ? DefaultLoggerObject_getInstance()._get_prependLogType__1117758171_ihhfq3_k$() : tmp0_elvis_lhs_1_1_5) {
                  tmp_16 = '**LOG1** ';
                } else {
                  {
                    tmp_16 = '';
                  }
                }
                var tmp_17 = tmp_16;
                var tmp_18;
                if (!(null == null ? true : isBlank(null))) {
                  tmp_18 = 'null::';
                } else {
                  {
                    tmp_18 = '';
                  }
                }
                var tmp_19 = tmp_18;
                tmp_15.info(false, tmp_17 + tmp_19 + 'Skipping file...', null);
              }
            }

            return tmp1_apply_0;
          case 4:
            throw this._get_exception__1672948706_ro13he_k$();
        }
      } catch ($p) {
        if (this._get_exceptionState__1662596297_rhv7ih_k$() === 4) {
          throw $p;
        } else {
          this._set_state__1256591060_i39zdo_k$(this._get_exceptionState__1662596297_rhv7ih_k$());
          this._set_exception__4196179798_3fu58l_k$($p);
        }
      }
     while (true);
  };
  $promptOverwriteCOROUTINE$0.$metadata$ = {
    simpleName: '$promptOverwriteCOROUTINE$0',
    kind: 'class',
    interfaces: []
  };
  function defaultOverwrite$factory() {
    return getPropertyCallableRef('defaultOverwrite', 0, KProperty0, function () {
      return _get_defaultOverwrite__1820436929();
    }, null);
  }
  var properties_initialized_cli_should_overwrite_kt_2439539967;
  function init_properties_cli_should_overwrite_kt_1226417115() {
    if (!properties_initialized_cli_should_overwrite_kt_2439539967) {
      properties_initialized_cli_should_overwrite_kt_2439539967 = true;
      shouldOverwriteOverride = null;
      defaultOverwrite$delegate = lazy(defaultOverwrite$delegate$lambda());
    }
  }
  function _get_WINDOWS_ABSOLUTE_PATH_PREFIX__164522443() {
    init_properties_cli_utils_kt_4276253585();
    return WINDOWS_ABSOLUTE_PATH_PREFIX;
  }
  var WINDOWS_ABSOLUTE_PATH_PREFIX;
  function _set_mIsCLI__2348616206(_set____804775014) {
    init_properties_cli_utils_kt_4276253585();
    mIsCLI = _set____804775014;
  }
  function _get_mIsCLI__2437196034() {
    init_properties_cli_utils_kt_4276253585();
    return mIsCLI;
  }
  var mIsCLI;
  function _get_imageExtensions__978196002() {
    init_properties_cli_utils_kt_4276253585();
    return imageExtensions;
  }
  var imageExtensions;
  function AppRequestTerminationOK_init_$Init$(code, throwable, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      code = 0;
    if (!(($mask0 & 2) === 0))
      throwable = null;
    AppRequestTerminationOK.call($this, code, throwable);
    return $this;
  }
  function AppRequestTerminationOK_init_$Create$(code, throwable, $mask0, $marker) {
    var tmp = AppRequestTerminationOK_init_$Init$(code, throwable, $mask0, $marker, Object.create(AppRequestTerminationOK.prototype));
    captureStack(tmp, AppRequestTerminationOK_init_$Create$);
    return tmp;
  }
  function AppRequestTerminationError_init_$Init$(code, throwable, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      throwable = null;
    AppRequestTerminationError.call($this, code, throwable);
    return $this;
  }
  function AppRequestTerminationError_init_$Create$(code, throwable, $mask0, $marker) {
    var tmp = AppRequestTerminationError_init_$Init$(code, throwable, $mask0, $marker, Object.create(AppRequestTerminationError.prototype));
    captureStack(tmp, AppRequestTerminationError_init_$Create$);
    return tmp;
  }
  function AppRequestTermination_init_$Init$(code, throwable, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      throwable = null;
    AppRequestTermination.call($this, code, throwable);
    return $this;
  }
  function AppRequestTermination_init_$Create$(code, throwable, $mask0, $marker) {
    var tmp = AppRequestTermination_init_$Init$(code, throwable, $mask0, $marker, Object.create(AppRequestTermination.prototype));
    captureStack(tmp, AppRequestTermination_init_$Create$);
    return tmp;
  }
  function AppRequestTerminationOK(code, throwable) {
    var code_0 = code === void 1 ? 0 : code;
    var throwable_0 = throwable === void 1 ? null : throwable;
    AppRequestTermination.call(this, code_0, throwable_0);
    captureStack(this, AppRequestTerminationOK);
  }
  AppRequestTerminationOK.$metadata$ = {
    simpleName: 'AppRequestTerminationOK',
    kind: 'class',
    interfaces: []
  };
  function AppRequestTerminationError(code, throwable) {
    var throwable_0 = throwable === void 1 ? null : throwable;
    AppRequestTermination.call(this, code, throwable_0);
    captureStack(this, AppRequestTerminationError);
  }
  AppRequestTerminationError.$metadata$ = {
    simpleName: 'AppRequestTerminationError',
    kind: 'class',
    interfaces: []
  };
  function AppRequestTermination(code, throwable) {
    var throwable_0 = throwable === void 1 ? null : throwable;
    Exception_init_$Init$(throwable_0, this);
    this.code_1 = code;
    captureStack(this, AppRequestTermination);
  }
  AppRequestTermination.prototype._get_code__794418686_d4z5dq_k$ = function () {
    return this.code_1;
  };
  AppRequestTermination.$metadata$ = {
    simpleName: 'AppRequestTermination',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AppRequestTermination.prototype, 'code', {
    configurable: true,
    get: AppRequestTermination.prototype._get_code__794418686_d4z5dq_k$
  });
  var properties_initialized_cli_utils_kt_997587181;
  function init_properties_cli_utils_kt_4276253585() {
    if (!properties_initialized_cli_utils_kt_997587181) {
      properties_initialized_cli_utils_kt_997587181 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = Regex_init_$Create$('^[a-zA-Z]:[\\\\/]{1,2}.*');
        break $l$block;
      }
      WINDOWS_ABSOLUTE_PATH_PREFIX = tmp$ret$0;
      mIsCLI = true;
      var tmp$ret$2;
      $l$block_2: {
        var tmp$ret$1;
        $l$block_1: {
          var tmp$ret$0_0;
          $l$block_0: {
            tmp$ret$0_0 = ['png', 'gif', 'bmp'];
            break $l$block_0;
          }
          tmp$ret$1 = tmp$ret$0_0;
          break $l$block_1;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block_2;
      }
      imageExtensions = tmp$ret$2;
    }
  }
  function _get_leadingNumberRegex__2378735347() {
    init_properties_utils_files_kt_3802125402();
    return leadingNumberRegex;
  }
  var leadingNumberRegex;
  function _get_trailingNumberRegex__1004234255() {
    init_properties_utils_files_kt_3802125402();
    return trailingNumberRegex;
  }
  var trailingNumberRegex;
  function _get_sortedFilesNice__3323124410() {
    init_properties_utils_files_kt_3802125402();
    return sortedFilesNice;
  }
  var sortedFilesNice;
  function _get_pathRegex__3780766575() {
    init_properties_utils_files_kt_3802125402();
    return pathRegex;
  }
  var pathRegex;
  function sam$kotlin_Comparator$0(function_0) {
    this.function_1 = function_0;
  }
  sam$kotlin_Comparator$0.prototype.compare_6tbigh_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  sam$kotlin_Comparator$0.prototype.compare = function (a, b) {
    return this.compare_6tbigh_k$(a, b);
  };
  sam$kotlin_Comparator$0.$metadata$ = {
    simpleName: 'sam$kotlin_Comparator$0',
    kind: 'class',
    interfaces: [Comparator]
  };
  function sortedFilesNice$lambda() {
    return function (aRaw, bRaw) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp = FileNameUtil_getInstance();
        var tmp0_elvis_lhs = tmp.getLastPathComponent$default_9w224w_k$(aRaw, false, 2, null);
        var tmp0_lowercase_0 = tmp0_elvis_lhs == null ? aRaw : tmp0_elvis_lhs;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_lowercase_0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0.toLowerCase();
        break $l$block_0;
      }
      var a = tmp$ret$1;
      Unit_getInstance();
      var tmp$ret$3;
      $l$block_2: {
        var tmp_0 = FileNameUtil_getInstance();
        var tmp1_elvis_lhs = tmp_0.getLastPathComponent$default_9w224w_k$(bRaw, false, 2, null);
        var tmp1_lowercase_0 = tmp1_elvis_lhs == null ? bRaw : tmp1_elvis_lhs;
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = tmp1_lowercase_0;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2.toLowerCase();
        break $l$block_2;
      }
      var b = tmp$ret$3;
      Unit_getInstance();
      var tmp_1 = FileNameUtil_getInstance();
      var tmp2_safe_receiver = tmp_1.getSelfOrParentDirectory$default_dtbn2a_k$(aRaw, false, 2, null);
      var tmp_2;
      if (tmp2_safe_receiver == null) {
        tmp_2 = null;
      } else {
        var tmp$ret$5;
        $l$block_4: {
          var tmp$ret$4;
          $l$block_3: {
            tmp$ret$4 = tmp2_safe_receiver;
            break $l$block_3;
          }
          tmp$ret$5 = tmp$ret$4.toLowerCase();
          break $l$block_4;
        }
        tmp_2 = tmp$ret$5;
      }
      var tmp3_safe_receiver = tmp_2;
      var aDirectory = tmp3_safe_receiver == null ? null : ensureNotEndsWith(tmp3_safe_receiver, a);
      Unit_getInstance();
      var tmp_3 = FileNameUtil_getInstance();
      var tmp4_safe_receiver = tmp_3.getSelfOrParentDirectory$default_dtbn2a_k$(bRaw, false, 2, null);
      var tmp_4;
      if (tmp4_safe_receiver == null) {
        tmp_4 = null;
      } else {
        var tmp$ret$7;
        $l$block_6: {
          var tmp$ret$6;
          $l$block_5: {
            tmp$ret$6 = tmp4_safe_receiver;
            break $l$block_5;
          }
          tmp$ret$7 = tmp$ret$6.toLowerCase();
          break $l$block_6;
        }
        tmp_4 = tmp$ret$7;
      }
      var tmp5_safe_receiver = tmp_4;
      var bDirectory = tmp5_safe_receiver == null ? null : ensureNotEndsWith(tmp5_safe_receiver, b);
      Unit_getInstance();
      var tmp_5;
      if (((!(aDirectory == null) ? !(aDirectory === a) : false) ? !(bDirectory == null) : false) ? !(bDirectory === b) : false) {
        var sort = compareTo(aDirectory, bDirectory);
        var tmp_6;
        if (!(sort === 0)) {
          return sort;
        }
        tmp_5 = tmp_6;
      }
      var tmp6_safe_receiver = _get_leadingNumberRegex__2378735347().matchEntire_9c62aj_k$(a);
      var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : tmp6_safe_receiver._get_groupValues__1536353584_pepe0g_k$();
      var tmp_7;
      if (tmp7_safe_receiver == null) {
        tmp_7 = null;
      } else {
        var tmp$ret$9;
        $l$block_8: {
          {
          }
          var tmp$ret$8;
          $l$block_7: {
            tmp$ret$8 = new Pair(tmp7_safe_receiver.get_fkrdnv_k$(2), tmp7_safe_receiver.get_fkrdnv_k$(1));
            break $l$block_7;
          }
          tmp$ret$9 = tmp$ret$8;
          break $l$block_8;
        }
        tmp_7 = tmp$ret$9;
      }
      var aMatchLeading = tmp_7;
      Unit_getInstance();
      var tmp8_safe_receiver = _get_leadingNumberRegex__2378735347().matchEntire_9c62aj_k$(b);
      var tmp9_safe_receiver = tmp8_safe_receiver == null ? null : tmp8_safe_receiver._get_groupValues__1536353584_pepe0g_k$();
      var tmp_8;
      if (tmp9_safe_receiver == null) {
        tmp_8 = null;
      } else {
        var tmp$ret$11;
        $l$block_10: {
          {
          }
          var tmp$ret$10;
          $l$block_9: {
            tmp$ret$10 = new Pair(tmp9_safe_receiver.get_fkrdnv_k$(2), tmp9_safe_receiver.get_fkrdnv_k$(1));
            break $l$block_9;
          }
          tmp$ret$11 = tmp$ret$10;
          break $l$block_10;
        }
        tmp_8 = tmp$ret$11;
      }
      var bMatchLeading = tmp_8;
      Unit_getInstance();
      var tmp_9;
      if (!(aMatchLeading == null) ? !(bMatchLeading == null) : false) {
        var firstSort = compareTo(aMatchLeading._get_first__3232921377_hkbbvj_k$(), bMatchLeading._get_first__3232921377_hkbbvj_k$());
        if (!(firstSort === 0)) {
          return firstSort;
        }
        var numberA = toInt(aMatchLeading._get_second__4255435031_njbah_k$());
        var numberB = toInt(bMatchLeading._get_second__4255435031_njbah_k$());
        var sort_0 = numberA - numberB | 0;
        var tmp_10;
        if (!(sort_0 === 0)) {
          return sort_0;
        }
        tmp_9 = tmp_10;
      }
      var tmp10_safe_receiver = _get_trailingNumberRegex__1004234255().matchEntire_9c62aj_k$(a);
      var tmp11_safe_receiver = tmp10_safe_receiver == null ? null : tmp10_safe_receiver._get_groupValues__1536353584_pepe0g_k$();
      var tmp_11;
      if (tmp11_safe_receiver == null) {
        tmp_11 = null;
      } else {
        var tmp$ret$15;
        $l$block_14: {
          {
          }
          var tmp$ret$14;
          $l$block_13: {
            var tmp$ret$13;
            $l$block_12: {
              var tmp0_let_0_2 = tmp11_safe_receiver.get_fkrdnv_k$(1);
              {
              }
              var tmp$ret$12;
              $l$block_11: {
                var tmp_12;
                var tmp_13 = _Char___init__impl__380027157(46);
                if (startsWith$default(tmp0_let_0_2, tmp_13, false, 2, null)) {
                  tmp_12 = '';
                } else {
                  {
                    tmp_12 = tmp0_let_0_2;
                  }
                }
                tmp$ret$12 = tmp_12;
                break $l$block_11;
              }
              tmp$ret$13 = tmp$ret$12;
              break $l$block_12;
            }
            tmp$ret$14 = new Pair(tmp$ret$13, tmp11_safe_receiver.get_fkrdnv_k$(2));
            break $l$block_13;
          }
          tmp$ret$15 = tmp$ret$14;
          break $l$block_14;
        }
        tmp_11 = tmp$ret$15;
      }
      var aMatchTrailing = tmp_11;
      Unit_getInstance();
      var tmp12_safe_receiver = _get_trailingNumberRegex__1004234255().matchEntire_9c62aj_k$(b);
      var tmp13_safe_receiver = tmp12_safe_receiver == null ? null : tmp12_safe_receiver._get_groupValues__1536353584_pepe0g_k$();
      var tmp_14;
      if (tmp13_safe_receiver == null) {
        tmp_14 = null;
      } else {
        var tmp$ret$19;
        $l$block_18: {
          {
          }
          var tmp$ret$18;
          $l$block_17: {
            var tmp$ret$17;
            $l$block_16: {
              var tmp0_let_0_2_0 = tmp13_safe_receiver.get_fkrdnv_k$(1);
              {
              }
              var tmp$ret$16;
              $l$block_15: {
                var tmp_15;
                var tmp_16 = _Char___init__impl__380027157(46);
                if (startsWith$default(tmp0_let_0_2_0, tmp_16, false, 2, null)) {
                  tmp_15 = '';
                } else {
                  {
                    tmp_15 = tmp0_let_0_2_0;
                  }
                }
                tmp$ret$16 = tmp_15;
                break $l$block_15;
              }
              tmp$ret$17 = tmp$ret$16;
              break $l$block_16;
            }
            tmp$ret$18 = new Pair(tmp$ret$17, tmp13_safe_receiver.get_fkrdnv_k$(2));
            break $l$block_17;
          }
          tmp$ret$19 = tmp$ret$18;
          break $l$block_18;
        }
        tmp_14 = tmp$ret$19;
      }
      var bMatchTrailing = tmp_14;
      Unit_getInstance();
      var tmp_17;
      if (!(aMatchTrailing == null) ? !(bMatchTrailing == null) : false) {
        var firstSort_0 = compareTo(aMatchTrailing._get_first__3232921377_hkbbvj_k$(), bMatchTrailing._get_first__3232921377_hkbbvj_k$());
        if (!(firstSort_0 === 0)) {
          return firstSort_0;
        }
        var numberA_0 = toInt(aMatchTrailing._get_second__4255435031_njbah_k$());
        var numberB_0 = toInt(bMatchTrailing._get_second__4255435031_njbah_k$());
        var sort_1 = numberA_0 - numberB_0 | 0;
        var tmp_18;
        if (!(sort_1 === 0)) {
          return sort_1;
        }
        tmp_17 = tmp_18;
      }
      return compareTo(a, b);
    };
  }
  var properties_initialized_utils_files_kt_1214739126;
  function init_properties_utils_files_kt_3802125402() {
    if (!properties_initialized_utils_files_kt_1214739126) {
      properties_initialized_utils_files_kt_1214739126 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = Regex_init_$Create$('^(\\d+)(.+?)?(\\..+$)?');
        break $l$block;
      }
      leadingNumberRegex = tmp$ret$0;
      var tmp$ret$0_0;
      $l$block_0: {
        tmp$ret$0_0 = Regex_init_$Create$('^(.+?)?(\\d+)(\\..+$)?');
        break $l$block_0;
      }
      trailingNumberRegex = tmp$ret$0_0;
      var tmp = sortedFilesNice$lambda();
      sortedFilesNice = new sam$kotlin_Comparator$0(tmp);
      var tmp$ret$0_1;
      $l$block_1: {
        tmp$ret$0_1 = Regex_init_$Create$('^((?:"(?:(?:\\\\).|[^"])*")|(?:(?:\\\\.|[^"\\s])+))(.*)');
        break $l$block_1;
      }
      pathRegex = tmp$ret$0_1;
    }
  }
  function _get_consoleColorEscapeSequence__965916029() {
    return consoleColorEscapeSequence;
  }
  var consoleColorEscapeSequence;
  function fileExists(filePath) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp1_replace_0 = superUnescape(filePath);
      var tmp$ret$0;
      $l$block: {
        var tmp0_toRegex_0 = RegexOption_IGNORE_CASE_getInstance();
        tmp$ret$0 = Regex_init_$Create$_0('^resource:', tmp0_toRegex_0);
        break $l$block;
      }
      var tmp2_replace_0 = tmp$ret$0;
      var tmp0_elvis_lhs = _get_applicationPath__2304103708();
      var tmp3_replace_0 = tmp0_elvis_lhs == null ? getExecutableDirectory() : tmp0_elvis_lhs;
      tmp$ret$1 = tmp2_replace_0.replace_838ra0_k$(tmp1_replace_0, tmp3_replace_0);
      break $l$block_0;
    }
    var path = tmp$ret$1;
    return existsSync(path);
  }
  function readLine(prompt, default_0, $cont) {
    var tmp = new Promise(readLine$lambda(prompt, default_0));
    return await_0(tmp.catch(readLine$lambda_0()), $cont);
  }
  function readLine$default(prompt, default_0, $cont, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      default_0 = null;
    return readLine(prompt, default_0, $cont);
  }
  function _get_applicationPath__2304103708() {
    return __dirname;
  }
  function getExecutableDirectory() {
    return process.execPath;
  }
  function readLine$lambda$lambda($readLine, $prompt, $resolve, $default) {
    return function (it) {
      var tmp;
      try {
        tmp = $readLine.close();
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Exception) {
          {
            var tmp0_e_0 = Log_getInstance();
            if (tmp0_e_0._get_logLevel__3219972395_hs0vdh_k$()._get_value__3683422336_a43j40_k$() >= LogLevel_ERROR_getInstance()._get_value__3683422336_a43j40_k$()) {
              var tmp_1 = tmp0_e_0._get_loggerObject__3639506492_au8ssk_k$();
              var tmp$ret$2;
              $l$block_1: {
                var tmp_2;
                var tmp0_elvis_lhs_1_1 = tmp0_e_0._get_loggerObject__3639506492_au8ssk_k$().prependLogType;
                if (tmp0_elvis_lhs_1_1 == null ? DefaultLoggerObject_getInstance()._get_prependLogType__1117758171_ihhfq3_k$() : tmp0_elvis_lhs_1_1) {
                  tmp_2 = '**ERROR** ';
                } else {
                  {
                    tmp_2 = '';
                  }
                }
                var tmp_3 = tmp_2;
                var tmp_4;
                var tmp$ret$0;
                $l$block: {
                  {
                  }
                  tmp$ret$0 = null == null ? true : isBlank(null);
                  break $l$block;
                }
                if (!tmp$ret$0) {
                  tmp_4 = 'null::';
                } else {
                  {
                    tmp_4 = '';
                  }
                }
                var tmp_5 = tmp_4;
                var tmp$ret$1;
                $l$block_0: {
                  tmp$ret$1 = 'Failed to ask/wait for data for prompt: "' + $prompt + '"; Error: ' + $p.message + '\n' + stackTraceToString($p);
                  break $l$block_0;
                }
                tmp$ret$2 = tmp_3 + tmp_5 + tmp$ret$1;
                break $l$block_1;
              }
              tmp_1.error(tmp$ret$2, null);
            }
          }
          tmp_0 = $resolve(null);
        } else {
          {
            throw $p;
          }
        }
        tmp = tmp_0;
      }
      var tmp0_elvis_lhs = nullIfEmpty(it);
      $resolve(tmp0_elvis_lhs == null ? $default : tmp0_elvis_lhs);
      return Unit_getInstance();
    };
  }
  function readLine$lambda($prompt, $default) {
    return function (resolve, _anonymous_parameter_1__2695192083) {
      var tmp = {};
      var readLineOptions = (!(tmp == null) ? isObject(tmp) : false) ? tmp : THROW_CCE();
      Unit_getInstance();
      readLineOptions.input = process.stdin;
      var tmp_0 = process.stdout;
      readLineOptions.output = isObject(tmp_0) ? tmp_0 : null;
      var readLine = createInterface(readLineOptions);
      Unit_getInstance();
      var tmp_1;
      try {
        tmp_1 = readLine.question($prompt, readLine$lambda$lambda(readLine, $prompt, resolve, $default));
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Exception) {
          try {
            readLine.close();
          } catch ($p) {
            if ($p instanceof Exception) {
              {
                var tmp0_e_0 = Log_getInstance();
                if (tmp0_e_0._get_logLevel__3219972395_hs0vdh_k$()._get_value__3683422336_a43j40_k$() >= LogLevel_ERROR_getInstance()._get_value__3683422336_a43j40_k$()) {
                  var tmp_3 = tmp0_e_0._get_loggerObject__3639506492_au8ssk_k$();
                  var tmp$ret$2;
                  $l$block_1: {
                    var tmp_4;
                    var tmp0_elvis_lhs_1_1 = tmp0_e_0._get_loggerObject__3639506492_au8ssk_k$().prependLogType;
                    if (tmp0_elvis_lhs_1_1 == null ? DefaultLoggerObject_getInstance()._get_prependLogType__1117758171_ihhfq3_k$() : tmp0_elvis_lhs_1_1) {
                      tmp_4 = '**ERROR** ';
                    } else {
                      {
                        tmp_4 = '';
                      }
                    }
                    var tmp_5 = tmp_4;
                    var tmp_6;
                    var tmp$ret$0;
                    $l$block: {
                      {
                      }
                      tmp$ret$0 = null == null ? true : isBlank(null);
                      break $l$block;
                    }
                    if (!tmp$ret$0) {
                      tmp_6 = 'null::';
                    } else {
                      {
                        tmp_6 = '';
                      }
                    }
                    var tmp_7 = tmp_6;
                    var tmp$ret$1;
                    $l$block_0: {
                      tmp$ret$1 = 'Failed to ask/wait for data for prompt: "' + $prompt + '"; Error: ' + $p.message + '\n' + stackTraceToString($p);
                      break $l$block_0;
                    }
                    tmp$ret$2 = tmp_5 + tmp_7 + tmp$ret$1;
                    break $l$block_1;
                  }
                  tmp_3.error(tmp$ret$2, null);
                }
              }
              resolve(null);
            } else {
              {
                throw $p;
              }
            }
          }
          {
            var tmp1_e_0 = Log_getInstance();
            if (tmp1_e_0._get_logLevel__3219972395_hs0vdh_k$()._get_value__3683422336_a43j40_k$() >= LogLevel_ERROR_getInstance()._get_value__3683422336_a43j40_k$()) {
              var tmp_8 = tmp1_e_0._get_loggerObject__3639506492_au8ssk_k$();
              var tmp$ret$5;
              $l$block_4: {
                var tmp_9;
                var tmp0_elvis_lhs_1_1_0 = tmp1_e_0._get_loggerObject__3639506492_au8ssk_k$().prependLogType;
                if (tmp0_elvis_lhs_1_1_0 == null ? DefaultLoggerObject_getInstance()._get_prependLogType__1117758171_ihhfq3_k$() : tmp0_elvis_lhs_1_1_0) {
                  tmp_9 = '**ERROR** ';
                } else {
                  {
                    tmp_9 = '';
                  }
                }
                var tmp_10 = tmp_9;
                var tmp_11;
                var tmp$ret$3;
                $l$block_2: {
                  {
                  }
                  tmp$ret$3 = null == null ? true : isBlank(null);
                  break $l$block_2;
                }
                if (!tmp$ret$3) {
                  tmp_11 = 'null::';
                } else {
                  {
                    tmp_11 = '';
                  }
                }
                var tmp_12 = tmp_11;
                var tmp$ret$4;
                $l$block_3: {
                  tmp$ret$4 = 'Failed to ask/wait for data for prompt: "' + $prompt + '"; Error: ' + $p.message + '\n' + stackTraceToString($p);
                  break $l$block_3;
                }
                tmp$ret$5 = tmp_10 + tmp_12 + tmp$ret$4;
                break $l$block_4;
              }
              tmp_8.error(tmp$ret$5, null);
            }
          }
          tmp_2 = resolve(null);
        } else {
          {
            throw $p;
          }
        }
        tmp_1 = tmp_2;
      }
      return Unit_getInstance();
    };
  }
  function readLine$lambda_0() {
    return function (e) {
      var tmp0_e_0 = Log_getInstance();
      var tmp;
      if (tmp0_e_0._get_logLevel__3219972395_hs0vdh_k$()._get_value__3683422336_a43j40_k$() >= LogLevel_ERROR_getInstance()._get_value__3683422336_a43j40_k$()) {
        var tmp_0 = tmp0_e_0._get_loggerObject__3639506492_au8ssk_k$();
        var tmp$ret$2;
        $l$block_1: {
          var tmp_1;
          var tmp0_elvis_lhs_1_1 = tmp0_e_0._get_loggerObject__3639506492_au8ssk_k$().prependLogType;
          if (tmp0_elvis_lhs_1_1 == null ? DefaultLoggerObject_getInstance()._get_prependLogType__1117758171_ihhfq3_k$() : tmp0_elvis_lhs_1_1) {
            tmp_1 = '**ERROR** ';
          } else {
            {
              tmp_1 = '';
            }
          }
          var tmp_2 = tmp_1;
          var tmp_3;
          var tmp$ret$0;
          $l$block: {
            {
            }
            tmp$ret$0 = null == null ? true : isBlank(null);
            break $l$block;
          }
          if (!tmp$ret$0) {
            tmp_3 = 'null::';
          } else {
            {
              tmp_3 = '';
            }
          }
          var tmp_4 = tmp_3;
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = 'Failed to read line from command prompt: ' + e.message + '\n' + stackTraceToString(e);
            break $l$block_0;
          }
          tmp$ret$2 = tmp_2 + tmp_4 + tmp$ret$1;
          break $l$block_1;
        }
        tmp = tmp_0.error(tmp$ret$2, null);
      }
      return null;
    };
  }
  //region block: init
  consoleColorEscapeSequence = '\x1B';
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $bedalton = _.bedalton || (_.bedalton = {});
    var $bedalton$creatures = $bedalton.creatures || ($bedalton.creatures = {});
    var $bedalton$creatures$cli = $bedalton$creatures.cli || ($bedalton$creatures.cli = {});
    $bedalton$creatures$cli.AppRequestTermination = AppRequestTermination;
    $bedalton$creatures$cli.AppRequestTermination.AppRequestTerminationOK = AppRequestTerminationOK;
    $bedalton$creatures$cli.AppRequestTermination.AppRequestTerminationError = AppRequestTerminationError;
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_bedalton_creatures_CommonCLI.js.map