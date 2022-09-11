(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_kotlin.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_kotlin.js'));
  else {
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlinx_kotlinx_cli'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_org_jetbrains_kotlinx_kotlinx_cli'.");
    }
    root.kotlin_org_jetbrains_kotlinx_kotlinx_cli = factory(typeof kotlin_org_jetbrains_kotlinx_kotlinx_cli === 'undefined' ? {} : kotlin_org_jetbrains_kotlinx_kotlinx_cli, kotlin_kotlin);
  }
}(this, function (_, kotlin_kotlin) {
  //region block: imports
  var toString = kotlin_kotlin.$crossModule$.toString_1;
  var toIntOrNull = kotlin_kotlin.$crossModule$.toIntOrNull_1;
  var toDoubleOrNull = kotlin_kotlin.$crossModule$.toDoubleOrNull;
  var collectionSizeOrDefault = kotlin_kotlin.$crossModule$.collectionSizeOrDefault;
  var mapCapacity = kotlin_kotlin.$crossModule$.mapCapacity;
  var coerceAtLeast = kotlin_kotlin.$crossModule$.coerceAtLeast;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$crossModule$.LinkedHashMap_init_$Create$;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalArgumentException_init_$Create$_1;
  var Exception = kotlin_kotlin.$crossModule$.Exception;
  var Exception_init_$Init$ = kotlin_kotlin.$crossModule$.Exception_init_$Init$_2;
  var captureStack = kotlin_kotlin.$crossModule$.captureStack;
  //endregion
  'use strict';
  //region block: pre-declaration
  Boolean_0.prototype = Object.create(ArgType.prototype);
  Boolean_0.prototype.constructor = Boolean_0;
  String_0.prototype = Object.create(ArgType.prototype);
  String_0.prototype.constructor = String_0;
  Int.prototype = Object.create(ArgType.prototype);
  Int.prototype.constructor = Int;
  Double.prototype = Object.create(ArgType.prototype);
  Double.prototype.constructor = Double;
  Choice.prototype = Object.create(ArgType.prototype);
  Choice.prototype.constructor = Choice;
  ParsingException.prototype = Object.create(Exception.prototype);
  ParsingException.prototype.constructor = ParsingException;
  //endregion
  function Choice_init_$Init$(choices, toVariant, variantToString, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0)) {
      variantToString = ArgType$Choice$_init_$lambda_3834390058();
    }
    Choice.call($this, choices, toVariant, variantToString);
    return $this;
  }
  function Choice_init_$Create$(choices, toVariant, variantToString, $mask0, $marker) {
    return Choice_init_$Init$(choices, toVariant, variantToString, $mask0, $marker, Object.create(Choice.prototype));
  }
  function _get_choicesMap__1857771713($this) {
    return $this.choicesMap_1;
  }
  function ArgType$Choice$_init_$lambda_3834390058() {
    return function (it) {
      return toString(it);
    };
  }
  function Boolean_0() {
    Boolean_instance = this;
    ArgType.call(this, false);
  }
  Boolean_0.prototype._get_description__4027823381_4f1tkb_k$ = function () {
    return '';
  };
  Boolean_0.prototype.convert_8ffur5_k$ = function (value, name) {
    return !(value === 'false');
  };
  Boolean_0.$metadata$ = {
    simpleName: 'Boolean',
    kind: 'object',
    interfaces: []
  };
  var Boolean_instance;
  function Boolean_getInstance() {
    if (Boolean_instance == null)
      new Boolean_0();
    return Boolean_instance;
  }
  function String_0() {
    String_instance = this;
    ArgType.call(this, true);
  }
  String_0.prototype._get_description__4027823381_4f1tkb_k$ = function () {
    return '{ String }';
  };
  String_0.prototype.convert_8ffur5_k$ = function (value, name) {
    return value;
  };
  String_0.$metadata$ = {
    simpleName: 'String',
    kind: 'object',
    interfaces: []
  };
  var String_instance;
  function String_getInstance() {
    if (String_instance == null)
      new String_0();
    return String_instance;
  }
  function Int() {
    Int_instance = this;
    ArgType.call(this, true);
  }
  Int.prototype._get_description__4027823381_4f1tkb_k$ = function () {
    return '{ Int }';
  };
  Int.prototype.convert_8ffur5_k$ = function (value, name) {
    var tmp0_elvis_lhs = toIntOrNull(value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new ParsingException('Option ' + name + ' is expected to be integer number. ' + value + ' is provided.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  Int.$metadata$ = {
    simpleName: 'Int',
    kind: 'object',
    interfaces: []
  };
  var Int_instance;
  function Int_getInstance() {
    if (Int_instance == null)
      new Int();
    return Int_instance;
  }
  function Double() {
    Double_instance = this;
    ArgType.call(this, true);
  }
  Double.prototype._get_description__4027823381_4f1tkb_k$ = function () {
    return '{ Double }';
  };
  Double.prototype.convert_8ffur5_k$ = function (value, name) {
    var tmp0_elvis_lhs = toDoubleOrNull(value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new ParsingException('Option ' + name + ' is expected to be double number. ' + value + ' is provided.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  Double.$metadata$ = {
    simpleName: 'Double',
    kind: 'object',
    interfaces: []
  };
  var Double_instance;
  function Double_getInstance() {
    if (Double_instance == null)
      new Double();
    return Double_instance;
  }
  function Companion() {
    Companion_instance = this;
  }
  Companion.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Choice(choices, toVariant, variantToString) {
    ArgType.call(this, true);
    this.toVariant_1 = toVariant;
    this.variantToString_1 = variantToString;
    var tmp = this;
    var tmp$ret$2;
    $l$block_1: {
      var capacity_1 = coerceAtLeast(mapCapacity(collectionSizeOrDefault(choices, 10)), 16);
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_associateByTo_0_2 = LinkedHashMap_init_$Create$(capacity_1);
        var tmp0_iterator_1_3 = choices.iterator_jk1svi_k$();
        while (tmp0_iterator_1_3.hasNext_bitz1p_k$()) {
          var element_2_4 = tmp0_iterator_1_3.next_20eer_k$();
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = this.variantToString_1(element_2_4);
            break $l$block;
          }
          tmp0_associateByTo_0_2.put_3mhbri_k$(tmp$ret$0, element_2_4);
          Unit_getInstance();
        }
        tmp$ret$1 = tmp0_associateByTo_0_2;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    tmp.choicesMap_1 = tmp$ret$2;
    {
      var tmp0_require_0 = this.choicesMap_1._get_size__809037418_ddoh9m_k$() === choices._get_size__809037418_ddoh9m_k$();
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$3;
        $l$block_2: {
          tmp$ret$3 = 'Command line representations of enum choices are not distinct';
          break $l$block_2;
        }
        var message_1 = tmp$ret$3;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
  }
  Choice.prototype._get_toVariant__1717549575_sel1qf_k$ = function () {
    return this.toVariant_1;
  };
  Choice.prototype._get_variantToString__839428128_dvruw0_k$ = function () {
    return this.variantToString_1;
  };
  Choice.prototype._get_description__4027823381_4f1tkb_k$ = function () {
    return '{ Value should be one of ' + this.choicesMap_1._get_keys__801529559_d97k5z_k$() + ' }';
  };
  Choice.prototype.convert_8ffur5_k$ = function (value, name) {
    var tmp;
    try {
      tmp = this.toVariant_1(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Exception) {
        throw new ParsingException('Option ' + name + ' is expected to be one of ' + this.choicesMap_1._get_keys__801529559_d97k5z_k$() + '. ' + value + ' is provided.');
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  Choice.$metadata$ = {
    simpleName: 'Choice',
    kind: 'class',
    interfaces: []
  };
  function ArgType(hasParameter) {
    Companion_getInstance();
    this.hasParameter_1 = hasParameter;
  }
  ArgType.prototype._get_hasParameter__888056060_eoq4fw_k$ = function () {
    return this.hasParameter_1;
  };
  ArgType.$metadata$ = {
    simpleName: 'ArgType',
    kind: 'class',
    interfaces: []
  };
  function ParsingException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, ParsingException);
  }
  ParsingException.$metadata$ = {
    simpleName: 'ParsingException',
    kind: 'class',
    interfaces: []
  };
  //region block: exports
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.Choice = Choice;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_org_jetbrains_kotlinx_kotlinx_cli.js.map